import { mergeArticleIVRecord } from "./article-iv-records.mjs";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { fetchGdelt, mapWithGentleRateLimit, matchesMaterialStrategicEntityHeadline, scoreCountryRelevance } from "./gdelt.mjs";
import { clusterNews, selectNewsInventory } from "./news-quality.mjs";
import { fetchOfficialNews } from "./official-news.mjs";
import { fetchRecentDiscoveryNews } from "./discovery-news.mjs";
import { DEFAULT_COUNTRY_BUNDLE_COUNT, rotatingFallbackKeys, selectCountryBundle } from "./news-bundles.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const newsPath = path.join(root, "data", "news.js");
const countriesPath = path.join(root, "data", "countries.js");
const qualityPath = path.join(root, "data", "review", "news-quality.json");

function loadBrowserGlobal(file, key) {
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(file, "utf8"), context, { filename: file });
  return JSON.parse(JSON.stringify(context.window[key]));
}

const countryData = loadBrowserGlobal(countriesPath, "COUNTRY_DATA");
const previous = loadBrowserGlobal(newsPath, "NEWS_DATA");
const NEWS_TARGET_PER_COUNTRY = 10;
const hardRetentionCutoff = Date.now() - 365 * 86400000;
const failures = [];
const runStartedAt = new Date().toISOString();
const ARTICLE_IV_PATTERN = /article iv|consultation under article iv/i;
const bundleMode = process.env.NEWS_BUNDLE_INDEX !== undefined;
const bundleCount = Number(process.env.NEWS_BUNDLE_COUNT || DEFAULT_COUNTRY_BUNDLE_COUNT);
const bundleIndex = bundleMode ? Number(process.env.NEWS_BUNDLE_INDEX) : null;
const selectedCountryKeys = bundleMode
  ? selectCountryBundle(countryData.order, bundleIndex, bundleCount)
  : [...countryData.order];

if (selectedCountryKeys.length === 0) {
  console.log(`Country news bundle ${bundleIndex + 1}/${bundleCount} is empty; no refresh required.`);
  process.exit(0);
}

// Secondary repeated-body searches are the most expensive GDELT route. In an
// hourly bundle, permit at most two thin feeds to use it and rotate that
// allowance by day so every persistently thin country eventually receives it.
const thinCountryKeys = selectedCountryKeys.filter(key => (previous.countries?.[key] || []).length < 5);
const dayRotation = Math.floor(Date.now() / 86400000);
const fallbackAllowance = bundleMode
  ? rotatingFallbackKeys(thinCountryKeys, 2, dayRotation)
  : new Set(selectedCountryKeys);

function writeQualityReport(report) {
  fs.mkdirSync(path.dirname(qualityPath), { recursive: true });
  fs.writeFileSync(qualityPath, `${JSON.stringify(report, null, 2)}\n`);
}

function expandStoredClusters(items) {
  return items.flatMap(item => {
    const related = (item.relatedCoverage || []).map((coverage, index) => ({
      ...item,
      ...coverage,
      id: `${item.id}-r${index + 1}`,
      coverageCount: 1,
      relatedCoverage: []
    }));
    return [{ ...item, coverageCount: 1, relatedCoverage: [] }, ...related];
  });
}

function assessMateriality(countryKey, title) {
  const signals = [];
  let score = 0;
  const rules = [
    ["Default/restructuring", 8, /sovereign default|debt default|defaulted|debt restructuring|distressed exchange|missed debt payment/i],
    ["Unconstitutional transfer/conflict", 8, /coup|military takeover|overthrow|invasion|civil war/i],
    ["Rating action", 6, /rating downgrade|rating upgrade|creditwatch|negative outlook|positive outlook/i],
    ["Sanctions/AML", 5, /sanction|FATF|grey list|black list|OFAC|asset freeze|export control|embargo|money laundering/i],
    ["IMF programme risk", 5, /IMF.{0,40}(delay|suspend|off.track|waiver|financing assurance|review)|programme.{0,30}(delay|suspend|off.track)/i],
    ["Funding/refinancing pressure", 4, /refinancing risk|financing gap|funding pressure|failed auction|bond auction|debt auction|bond yield|credit spread|market access|cash crunch|bridge loan|syndicated loan|eurobond|debt swap|Paris Club|London Club/i],
    ["External liquidity/FX", 4, /foreign.exchange shortage|FX shortage|dollar shortage|black market rate|currency peg|reserve.{0,25}(fall|drop|decline|low)|capital control|devaluation|currency crisis|convertibility/i],
    ["Arrears/payment stress", 4, /arrears|missed payment|payment delay|debt service|coupon payment|principal payment/i],
    ["SOE/contingent liability", 4, /\bSOE\b|state-owned.{0,35}(default|debt|loss|bailout)|government guarantee|contingent liabilit|public enterprise/i],
    ["Banking/sovereign nexus", 4, /bank run|deposit flight|bank bailout|bank rescue|banking crisis|non.performing loan|sovereign.bank/i],
    ["Fiscal deterioration", 3, /fiscal slippage|budget deficit|revenue shortfall|supplementary budget|debt ceiling|public spending|austerity|tax reform|subsidy.{0,20}(rise|cost|cut)|wage bill|pension reform/i],
    ["Creditor/legal action", 4, /creditor committee|bondholder|cross.default|acceleration|arbitration|ICSID|litigation|contract dispute|court.{0,30}(debt|bond|state)|attachment of assets|asset seizure/i],
    ["Policy shock", 3, /emergency tax|capital control|price control|export ban|import restriction|regulatory change|licen[cs]e (?:suspension|revocation)|nationali[sz]ation|expropriation/i],
    ["Political/institutional transmission", 3, /constitutional crisis|regime change|state of emergency|martial law|impeachment|succession|no.confidence|government collapse|cabinet reshuffle|budget rejected|parliament dissolved/i],
    ["Social/security pressure", 2, /general strike|mass protest|violent protest|riot|civil unrest|curfew|insurgency|militia|terroris|border clash|military mobili[sz]ation|ceasefire|peace talks/i],
    ["Commodity/fiscal shock", 2, /oil production.{0,25}(fall|drop|cut)|commodity price shock|OPEC|pipeline (?:shutdown|attack)|mine closure|energy crisis|power outage|grid attack/i],
    ["Macroeconomic deterioration", 3, /GDP.{0,25}(fall|drop|contract|slow)|recession|economic crisis|current account deficit|trade deficit|unemployment|cost of living|industrial output|manufacturing PMI/i],
    ["Governance/legal pressure", 3, /corruption scandal|fraud|embezzlement|money laundering|investigation|audit|constitutional court|supreme court|court ruling|no.confidence|coalition collapse/i],
    ["Trade/ownership policy", 2, /tariff|export ban|import restriction|trade agreement|customs|supply chain disruption|remittance|privati[sz]ation|nationali[sz]ation|concession/i],
    ["State asset transaction", 3, /share sale|stake sale|asset sale|divestment|privati[sz]ation/i],
    ["Strategic investment/growth", 2, /growth (?:forecast|outlook|slows|accelerates)|drivers of .{0,20}growth|non-oil activity|economic diversification|offshore (?:deal|block|project|investment)|block acquisition|foreign direct investment|joint venture|\bIPO\b/i],
    ["Humanitarian/health shock", 4, /national epidemic|national outbreak|humanitarian crisis|food insecurity|famine|refugee crisis|mass displacement/i],
    ["Cyber/infrastructure security", 3, /cyberattack|data breach|critical infrastructure attack|pipeline attack|grid attack/i],
    ["Natural-disaster pressure", 2, /earthquake|cyclone|hurricane|severe flood|national disaster|wildfire|landslide|infrastructure collapse|dam failure/i],
    ["Major policy decision", 2, /central bank.{0,35}(raise|cut)|policy rate.{0,35}(raise|cut)|election result|wins election|elected president/i]
  ];
  for (const [signal, weight, pattern] of rules) {
    if (pattern.test(title)) {
      signals.push(signal);
      score += weight;
    }
  }
  if (matchesMaterialStrategicEntityHeadline(countryKey, title)) {
    signals.push("Strategic SOE stress");
    score += 4;
  }
  return {
    materiality: score >= 7 ? "critical" : score >= 3 ? "elevated" : "standard",
    materialityScore: score,
    riskSignals: signals
  };
}

const [fetched, official, discovery] = await Promise.all([
  mapWithGentleRateLimit(selectedCountryKeys, async key => {
    try {
      return await fetchGdelt(key, {
        timespan: "180d",
        maxrecords: 75,
        allowFallback: fallbackAllowance.has(key)
      });
    } catch (error) {
      failures.push(error.message);
      return [];
    }
  }),
  fetchOfficialNews(selectedCountryKeys, { days: 180 }),
  fetchRecentDiscoveryNews(selectedCountryKeys, { days: 7 })
]);

const countries = { ...(previous.countries || {}) };
const imfArticleIV = { ...(previous.imfArticleIV || {}) };
const countryQuality = {};
let newArticleCount = 0;
for (const key of selectedCountryKeys) {
  const oldItems = expandStoredClusters(previous.countries?.[key] || []);
  const oldUrls = new Set(oldItems.map(item => item.url));
  const freshItems = [...official.countries[key], ...discovery.countries[key], ...fetched[key]];
  const articleIVCandidates = [...official.countries[key], ...oldItems]
    .filter(item => item.officialSourceId === "imf-news" && ARTICLE_IV_PATTERN.test(item.title || ""))
    .sort((left, right) => right.publishedAt.localeCompare(left.publishedAt));
  if (articleIVCandidates[0]) {
    const item = articleIVCandidates[0];
    imfArticleIV[key] = mergeArticleIVRecord(imfArticleIV[key], {
      title: item.title,
      url: item.url,
      domain: item.domain,
      publishedAt: item.publishedAt,
      officialSourceName: item.officialSourceName || "International Monetary Fund"
    });
  }
  newArticleCount += freshItems.filter(item => !oldUrls.has(item.url)).length;
  const rejected = [...(fetched[key].audit?.rejected || []), ...(official.rejected[key] || [])].map(item => ({
    title: item.title,
    url: item.url,
    domain: item.domain,
    reason: item.rejectionReason
  }));
  const safeItems = [];
  let expired = 0;
  for (const item of [...freshItems, ...oldItems]) {
    if (typeof item.url !== "string" || !item.url.startsWith("https://")) {
      rejected.push({ title: item.title || "Untitled", url: item.url || "", domain: item.domain || "", reason: "Unsafe or invalid URL" });
      continue;
    }
    const relevance = scoreCountryRelevance(key, item);
    if (!relevance.accepted) {
      rejected.push({ title: item.title, url: item.url, domain: item.domain, reason: relevance.relevanceReasons.join("; ") || "Insufficient country evidence" });
      continue;
    }
    const enriched = { ...item, ...relevance, ...assessMateriality(key, item.title) };
    if (Date.parse(enriched.publishedAt) < hardRetentionCutoff) {
      expired += 1;
      continue;
    }
    safeItems.push(enriched);
  }

  const clustered = clusterNews(key, safeItems);
  countries[key] = selectNewsInventory(clustered.articles, {
    target: NEWS_TARGET_PER_COUNTRY,
    recentDays: 30,
    recentFloor: 4
  });

  countryQuality[key] = {
    retrieved: fetched[key].audit?.retrieved ?? fetched[key].length,
    acceptedFromCurrentSearch: fetched[key].audit?.accepted ?? fetched[key].length,
    officialRetrieved: official.countries[key].length,
    recentDiscoveryRetrieved: discovery.countries[key].length,
    rejectedCount: rejected.length,
    expired,
    duplicatesMerged: clustered.stats.duplicateArticlesMerged,
    publishedEventClusters: countries[key].length,
    rejections: rejected.slice(0, 12)
  };
}

const providerUnavailable = failures.length === selectedCountryKeys.length;
if (providerUnavailable) {
  console.warn("Every GDELT request failed. Existing GDELT coverage is retained while recent country-news and direct official-source results continue through validation.");
  failures.forEach(message => console.warn(`- ${message}`));
}

const totals = Object.values(countryQuality).reduce((sum, item) => ({
  retrieved: sum.retrieved + item.retrieved,
  acceptedFromCurrentSearch: sum.acceptedFromCurrentSearch + item.acceptedFromCurrentSearch,
  officialRetrieved: sum.officialRetrieved + item.officialRetrieved,
  recentDiscoveryRetrieved: sum.recentDiscoveryRetrieved + item.recentDiscoveryRetrieved,
  rejected: sum.rejected + item.rejectedCount,
  expired: sum.expired + item.expired,
  duplicatesMerged: sum.duplicatesMerged + item.duplicatesMerged,
  publishedEventClusters: sum.publishedEventClusters + item.publishedEventClusters
}), { retrieved: 0, acceptedFromCurrentSearch: 0, officialRetrieved: 0, recentDiscoveryRetrieved: 0, rejected: 0, expired: 0, duplicatesMerged: 0, publishedEventClusters: 0 });

const officialFailures = official.sourceStatus.filter(source => source.status === "failed");
const discoveryFailures = discovery.sourceStatus.filter(source => source.status === "failed");
const noCurrentProviderData = providerUnavailable && totals.officialRetrieved === 0 && totals.recentDiscoveryRetrieved === 0;

const qualityReport = {
  schemaVersion: 1,
  generatedAt: new Date().toISOString(),
  runStartedAt,
  bundle: bundleMode ? { index: bundleIndex, count: bundleCount, countries: selectedCountryKeys } : null,
  status: noCurrentProviderData ? "provider-unavailable" : (failures.length || officialFailures.length || discoveryFailures.length) ? "partial" : "complete",
  providers: ["GDELT DOC 2.0", "Recent country-news search", "Direct official sources"],
  totals,
  requestFailures: failures,
  officialSourceStatus: official.sourceStatus,
  recentDiscoveryStatus: discovery.sourceStatus,
  countries: countryQuality
};
writeQualityReport(qualityReport);

const comparableBefore = JSON.stringify({ countries: previous.countries || {}, imfArticleIV: previous.imfArticleIV || {} });
const comparableAfter = JSON.stringify({ countries, imfArticleIV });
if (comparableBefore === comparableAfter) {
  console.log("News refresh completed with no article changes.");
  process.exit(0);
}

const output = {
  schemaVersion: 2,
  generatedAt: noCurrentProviderData ? previous.generatedAt : new Date().toISOString(),
  provider: { label: "GDELT DOC 2.0", url: "https://www.gdeltproject.org/" },
  providers: [
    { label: "GDELT DOC 2.0", url: "https://www.gdeltproject.org/" },
    { label: "Recent country-news search", url: "https://news.google.com/" },
    { label: "Direct official sources", url: "https://www.imf.org/en/countries" }
  ],
  quality: totals,
  imfArticleIV,
  countries
};
fs.writeFileSync(newsPath, `/* Generated by tools/update-news.mjs. Do not edit routine headlines by hand. */\nwindow.NEWS_DATA = Object.freeze(${JSON.stringify(output, null, 2)});\n`);
console.log(`News refreshed for ${selectedCountryKeys.length} countr${selectedCountryKeys.length === 1 ? "y" : "ies"}: ${newArticleCount} new article(s); ${failures.length} GDELT request failure(s).`);
if (failures.length) failures.forEach(message => console.warn(`- ${message}`));
