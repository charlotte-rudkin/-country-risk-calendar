import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { fetchGdelt, mapWithGentleRateLimit } from "./gdelt.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const reviewDir = path.join(root, "data", "review");
fs.mkdirSync(reviewDir, { recursive: true });

function loadGlobals(files) {
  const context = { window: {} };
  vm.createContext(context);
  files.forEach(file => vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file }));
  return JSON.parse(JSON.stringify(context.window));
}

function classify(title) {
  const rules = {
    elections: /election|parliament|president|vote|ballot/i,
    ratings: /rating|downgrade|upgrade|outlook|creditwatch|moody|fitch|s&p/i,
    imf: /\bIMF\b|international monetary fund|article iv|extended fund facility|stand-by arrangement/i,
    sanctions: /sanction|FATF|grey list|black list|OFAC|asset freeze/i,
    centralBanks: /central bank|monetary policy|policy rate|interest rate|currency|foreign.?exchange reserves/i
  };
  return Object.entries(rules).filter(([, regex]) => regex.test(title)).map(([name]) => name);
}

function timelineScore(title) {
  const weights = [
    [/sovereign default|debt default|defaulted/i, 5],
    [/coup|military takeover|overthrow/i, 5],
    [/invasion|civil war|peace agreement/i, 4],
    [/debt restructuring|constitutional crisis|regime change/i, 4],
    [/state of emergency|constitution|territorial/i, 2]
  ];
  return weights.reduce((score, [regex, weight]) => score + (regex.test(title) ? weight : 0), 0);
}

const args = new Set(process.argv.slice(2));
const modeArg = process.argv.find(value => value.startsWith("--mode="));
const mode = modeArg ? modeArg.split("=")[1] : "weekly";
const data = loadGlobals(["data/countries.js", "data/news.js", "data/history.js"]);
const keys = data.COUNTRY_DATA.order;

if (mode === "weekly" || mode === "all") {
  const existing = new Set(Object.values(data.HISTORY_DATA.events).flat().map(event => event.label.toLowerCase()));
  const candidates = [];
  for (const key of keys) {
    for (const article of data.NEWS_DATA.countries?.[key] || []) {
      const score = timelineScore(article.title);
      if (score >= 4 && ![...existing].some(label => label.includes(article.title.toLowerCase().slice(0, 35)))) {
        candidates.push({ country: key, score, ...article, reviewStatus: "pending" });
      }
    }
  }
  fs.writeFileSync(path.join(reviewDir, "timeline-candidates.json"), `${JSON.stringify({ generatedAt: new Date().toISOString(), publicationRule: "Analyst approval required; this file never edits history.js automatically.", candidates }, null, 2)}\n`);
  console.log(`Weekly timeline screen produced ${candidates.length} candidate(s).`);
}

if (mode === "structured" || mode === "backfill" || mode === "all") {
  const isBackfill = mode === "backfill";
  const collected = await mapWithGentleRateLimit(keys, key => fetchGdelt(key, {
    timespan: isBackfill ? "3months" : "31d",
    maxrecords: isBackfill ? 30 : 20,
    timelineOnly: isBackfill
  }));

  if (isBackfill) {
    const candidates = Object.fromEntries(keys.map(key => [key, collected[key]
      .map(article => ({ ...article, score: timelineScore(article.title), reviewStatus: "pending" }))
      .filter(article => article.score >= 4)]));
    fs.writeFileSync(path.join(reviewDir, "quarterly-history-backfill.json"), `${JSON.stringify({ generatedAt: new Date().toISOString(), publicationRule: "Analyst approval and authoritative corroboration required.", countries: candidates }, null, 2)}\n`);
    console.log("Quarterly history backfill queue refreshed.");
  } else {
    const countries = Object.fromEntries(keys.map(key => [key, collected[key]
      .map(article => ({ ...article, categories: classify(article.title), reviewStatus: "pending" }))
      .filter(article => article.categories.length)]));
    fs.writeFileSync(path.join(reviewDir, "monthly-structured-candidates.json"), `${JSON.stringify({ generatedAt: new Date().toISOString(), categories: ["elections", "ratings", "imf", "sanctions", "centralBanks"], publicationRule: "Candidate discovery only. Update country records only after primary-source verification.", countries }, null, 2)}\n`);
    console.log("Monthly structured-risk review queue refreshed.");
  }
}
