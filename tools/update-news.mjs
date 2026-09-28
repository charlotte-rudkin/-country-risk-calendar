import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { fetchGdelt, mapWithGentleRateLimit, storedArticleMatchesCountry } from "./gdelt.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const newsPath = path.join(root, "data", "news.js");
const countriesPath = path.join(root, "data", "countries.js");

function loadBrowserGlobal(file, key) {
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(file, "utf8"), context, { filename: file });
  return JSON.parse(JSON.stringify(context.window[key]));
}

const countryData = loadBrowserGlobal(countriesPath, "COUNTRY_DATA");
const previous = loadBrowserGlobal(newsPath, "NEWS_DATA");
const standardCutoff = Date.now() - 30 * 86400000;
const elevatedCutoff = Date.now() - 90 * 86400000;
const criticalCutoff = Date.now() - 180 * 86400000;
const failures = [];

function assessMateriality(title) {
  const signals = [];
  let score = 0;
  const rules = [
    ["Default/restructuring", 8, /sovereign default|debt default|defaulted|debt restructuring|distressed exchange|missed debt payment/i],
    ["Unconstitutional transfer/conflict", 8, /coup|military takeover|overthrow|invasion|civil war/i],
    ["Rating action", 6, /rating downgrade|rating upgrade|creditwatch|negative outlook|positive outlook/i],
    ["Sanctions/AML", 5, /sanction|FATF|grey list|black list|OFAC|asset freeze/i],
    ["IMF programme risk", 5, /IMF.{0,40}(delay|suspend|off.track|waiver|financing assurance|review)|programme.{0,30}(delay|suspend|off.track)/i],
    ["Funding/refinancing pressure", 4, /refinancing risk|financing gap|funding pressure|failed auction|bond auction|debt auction|bond yield|credit spread|market access/i],
    ["External liquidity/FX", 4, /foreign exchange shortage|FX shortage|reserve.{0,25}(fall|drop|decline|low)|capital control|devaluation|currency crisis|convertibility/i],
    ["Arrears/payment stress", 4, /arrears|missed payment|payment delay|debt service|coupon payment|principal payment/i],
    ["SOE/contingent liability", 4, /\bSOE\b|state-owned.{0,35}(default|debt|loss|bailout)|government guarantee|contingent liabilit|public enterprise/i],
    ["Banking/sovereign nexus", 4, /bank run|deposit flight|bank bailout|bank rescue|banking crisis|non.performing loan|sovereign.bank/i],
    ["Fiscal deterioration", 3, /fiscal slippage|budget deficit|revenue shortfall|supplementary budget|debt ceiling|subsidy.{0,20}(rise|cost)|wage bill/i],
    ["Creditor/legal action", 4, /creditor committee|bondholder|cross.default|acceleration|arbitration|court.{0,30}(debt|bond)|attachment of assets/i],
    ["Policy shock", 3, /emergency tax|capital control|price control|export ban|import restriction|nationali[sz]ation/i],
    ["Political/institutional transmission", 3, /constitutional crisis|regime change|state of emergency|government collapse|budget rejected|parliament dissolved/i],
    ["Social/security pressure", 2, /general strike|mass protest|violent protest|civil unrest|emergency declaration|insurgency/i],
    ["Commodity/fiscal shock", 2, /oil production.{0,25}(fall|drop|cut)|commodity price shock|pipeline shutdown|mine closure/i],
    ["Major policy decision", 2, /central bank.{0,35}(raise|cut)|policy rate.{0,35}(raise|cut)|election result|wins election|elected president/i]
  ];
  for (const [signal, weight, pattern] of rules) {
    if (pattern.test(title)) {
      signals.push(signal);
      score += weight;
    }
  }
  return {
    materiality: score >= 7 ? "critical" : score >= 3 ? "elevated" : "standard",
    materialityScore: score,
    riskSignals: signals
  };
}

const fetched = await mapWithGentleRateLimit(countryData.order, async key => {
  try {
    return await fetchGdelt(key, { timespan: "30d", maxrecords: 40 });
  } catch (error) {
    failures.push(error.message);
    return [];
  }
});

const countries = {};
let newArticleCount = 0;
for (const key of countryData.order) {
  const oldItems = previous.countries?.[key] || [];
  const oldUrls = new Set(oldItems.map(item => item.url));
  newArticleCount += fetched[key].filter(item => !oldUrls.has(item.url)).length;
  // Clean legacy records as they are merged. Earlier builds could retain HTTP
  // publisher links even after new results were filtered to HTTPS.
  const safeItems = [...fetched[key], ...oldItems]
    .filter(item => typeof item.url === "string" && item.url.startsWith("https://"))
    .filter(item => storedArticleMatchesCountry(key, item))
    .map(item => ({ ...item, ...assessMateriality(item.title) }))
    .filter(item => {
      const cutoff = item.materiality === "critical"
        ? criticalCutoff
        : item.materiality === "elevated" ? elevatedCutoff : standardCutoff;
      return Date.parse(item.publishedAt) >= cutoff;
    });
  const byUrl = new Map(safeItems.map(item => [item.url, item]));
  countries[key] = [...byUrl.values()]
    .sort((a, b) => {
      return (b.materialityScore - a.materialityScore) || b.publishedAt.localeCompare(a.publishedAt);
    })
    .slice(0, 24);
}

if (failures.length === countryData.order.length) {
  throw new Error(`Every news request failed; retaining the last published file. ${failures.join(" | ")}`);
}

const comparableBefore = JSON.stringify(previous.countries || {});
const comparableAfter = JSON.stringify(countries);
if (comparableBefore === comparableAfter) {
  console.log("News refresh completed with no article changes.");
  process.exit(0);
}

const output = {
  schemaVersion: 1,
  generatedAt: new Date().toISOString(),
  provider: { label: "GDELT DOC 2.0", url: "https://www.gdeltproject.org/" },
  countries
};
fs.writeFileSync(newsPath, `/* Generated by tools/update-news.mjs. Do not edit routine headlines by hand. */\nwindow.NEWS_DATA = Object.freeze(${JSON.stringify(output, null, 2)});\n`);
console.log(`News refreshed: ${newArticleCount} new article(s); ${failures.length} country request failure(s).`);
if (failures.length) failures.forEach(message => console.warn(`- ${message}`));
