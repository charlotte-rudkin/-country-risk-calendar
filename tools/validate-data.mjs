import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const errors = [];
const warnings = [];

function fail(message) {
  errors.push(message);
}

function loadData() {
  const context = { window: {} };
  vm.createContext(context);
  for (const relativePath of [
    "data/config.js",
    "data/countries.js",
    "data/economics.js",
    "data/news.js",
    "data/history.js",
    "data/map-data.js",
  ]) {
    const fullPath = path.join(root, relativePath);
    if (!fs.existsSync(fullPath)) {
      fail(`Missing required file: ${relativePath}`);
      continue;
    }
    try {
      vm.runInContext(fs.readFileSync(fullPath, "utf8"), context, { filename: relativePath });
    } catch (error) {
      fail(`${relativePath} cannot be loaded: ${error.message}`);
    }
  }
  return context.window;
}

function isText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function validDateString(value) {
  return /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(`${value}T00:00:00Z`));
}

function checkCalendarEvent(event, location) {
  if (!event || typeof event !== "object") return fail(`${location} must be an object`);
  for (const field of ["date", "tag", "label", "meta"]) {
    if (!isText(event[field])) fail(`${location}.${field} must be non-empty text`);
  }
  if (event.sortDate !== null && event.sortDate !== undefined && !validDateString(event.sortDate)) {
    fail(`${location}.sortDate must be YYYY-MM-DD or null`);
  }
  if (event.severity && !["rust", "amber", "moss"].includes(event.severity)) {
    fail(`${location}.severity has unsupported value "${event.severity}"`);
  }
}

function checkEconomicMetric(metric, location) {
  if (!metric || typeof metric !== "object") return fail(`${location} must be an object`);
  if (!Number.isFinite(Number(metric.value))) fail(`${location}.value must be numeric`);
  if (!Number.isInteger(Number(metric.year))) fail(`${location}.year must be an integer`);
  if (!["percent", "months", "usd"].includes(metric.unit)) fail(`${location}.unit is unsupported`);
  if (metric.series !== undefined) {
    if (!Array.isArray(metric.series)) fail(`${location}.series must be an array`);
    else metric.series.forEach((point, index) => {
      if (!Number.isInteger(Number(point?.year))) fail(`${location}.series[${index}].year must be an integer`);
      if (!Number.isFinite(Number(point?.value))) fail(`${location}.series[${index}].value must be numeric`);
      if (typeof point?.projection !== "boolean") fail(`${location}.series[${index}].projection must be boolean`);
    });
  }
}

function checkRankedRows(rows, location) {
  if (!Array.isArray(rows)) return fail(`${location} must be an array`);
  if (rows.length > 5) fail(`${location} must contain no more than five rows`);
  rows.forEach((row, index) => {
    if (!isText(row?.name)) fail(`${location}[${index}].name must be non-empty text`);
    if (!Number.isFinite(Number(row?.value)) || Number(row.value) < 0) fail(`${location}[${index}].value must be non-negative`);
    if (row?.share !== null && row?.share !== undefined && (!Number.isFinite(Number(row.share)) || Number(row.share) < 0 || Number(row.share) > 100)) {
      fail(`${location}[${index}].share must be 0–100 or null`);
    }
  });
}

const loaded = loadData();
const config = loaded.SITE_CONFIG;
const countryData = loaded.COUNTRY_DATA;
const economicData = loaded.ECONOMIC_DATA;
const newsData = loaded.NEWS_DATA;
const historyData = loaded.HISTORY_DATA;
const mapData = loaded.MAP_DATA;
const newsQualityPath = path.join(root, "data", "review", "news-quality.json");
let newsQuality = null;
if (fs.existsSync(newsQualityPath)) {
  try {
    newsQuality = JSON.parse(fs.readFileSync(newsQualityPath, "utf8"));
  } catch (error) {
    fail(`data/review/news-quality.json cannot be loaded: ${error.message}`);
  }
}

if (!config) fail("SITE_CONFIG was not created");
if (!countryData) fail("COUNTRY_DATA was not created");
if (!economicData) fail("ECONOMIC_DATA was not created");
if (!newsData) fail("NEWS_DATA was not created");
if (!historyData) fail("HISTORY_DATA was not created");
if (!mapData) fail("MAP_DATA was not created");

if (newsQuality) {
  if (!["awaiting-refresh", "complete", "partial", "provider-unavailable"].includes(newsQuality.status)) {
    fail("news-quality.json has an unsupported status");
  }
  if (!newsQuality.totals || typeof newsQuality.totals !== "object") fail("news-quality.json totals are missing");
  else {
    for (const field of ["retrieved", "acceptedFromCurrentSearch", "officialRetrieved", "rejected", "expired", "duplicatesMerged", "publishedEventClusters"]) {
      if (!Number.isInteger(newsQuality.totals[field]) || newsQuality.totals[field] < 0) {
        fail(`news-quality.json totals.${field} must be a non-negative integer`);
      }
    }
  }
  if (newsQuality.officialSourceStatus !== undefined && !Array.isArray(newsQuality.officialSourceStatus)) {
    fail("news-quality.json officialSourceStatus must be an array");
  }
  if (newsQuality.recentDiscoveryStatus !== undefined && !Array.isArray(newsQuality.recentDiscoveryStatus)) {
    fail("news-quality.json recentDiscoveryStatus must be an array");
  }
}

if (errors.length === 0) {
  const { countries, order } = countryData;
  const historyEvents = historyData.events;
  const historySources = historyData.sources;
  const countryKeys = Object.keys(countries);

  if (economicData.schemaVersion !== 1) fail("ECONOMIC_DATA.schemaVersion must be 1");
  if (!economicData.sources || typeof economicData.sources !== "object") fail("ECONOMIC_DATA.sources is required");
  if (!economicData.countries || typeof economicData.countries !== "object") fail("ECONOMIC_DATA.countries is required");
  for (const key of countryKeys) {
    if (!economicData.countries?.[key] || typeof economicData.countries[key] !== "object") {
      fail(`Economic data is missing for ${key}`);
    }
    const economic = economicData.countries?.[key] || {};
    for (const [provider, indicatorKeys] of Object.entries({
      imf: ["realGdpGrowth", "inflation", "currentAccount", "fiscalBalance", "governmentDebt"],
      worldBank: ["reserveMonths", "externalDebtGni", "debtServiceExports"]
    })) {
      if (economic[provider] !== undefined) {
        if (!economic[provider]?.indicators || typeof economic[provider].indicators !== "object") fail(`${key}.${provider}.indicators is required`);
        for (const [metricKey, metric] of Object.entries(economic[provider]?.indicators || {})) {
          if (!indicatorKeys.includes(metricKey)) fail(`${key}.${provider}.indicators.${metricKey} is unsupported`);
          checkEconomicMetric(metric, `${key}.${provider}.indicators.${metricKey}`);
        }
      }
    }
    if (economic.commodityDependence !== undefined) {
      const commodity = economic.commodityDependence;
      if (!Number.isFinite(Number(commodity.exportShare)) || Number(commodity.exportShare) < 0 || Number(commodity.exportShare) > 100) fail(`${key}.commodityDependence.exportShare must be 0–100`);
      if (commodity.dependent !== (Number(commodity.exportShare) > 60)) fail(`${key}.commodityDependence.dependent must follow the >60% UNCTAD threshold`);
      if (!isText(commodity.referencePeriod)) fail(`${key}.commodityDependence.referencePeriod is required`);
      if (!isText(commodity.sourceUrl) || !commodity.sourceUrl.startsWith("https://")) fail(`${key}.commodityDependence.sourceUrl must use https`);
    }
    if (economic.trade !== undefined) {
      if (!Number.isInteger(Number(economic.trade.year))) fail(`${key}.trade.year must be an integer`);
      for (const field of ["exportsTotal", "importsTotal"]) {
        if (economic.trade[field] !== undefined && (!Number.isFinite(Number(economic.trade[field])) || Number(economic.trade[field]) < 0)) fail(`${key}.trade.${field} must be non-negative`);
      }
      for (const field of ["topExports", "topImports", "exportPartners", "importPartners"]) {
        checkRankedRows(economic.trade[field], `${key}.trade.${field}`);
      }
    }
  }
  for (const key of Object.keys(economicData.countries || {})) {
    if (!countries[key]) fail(`Economic data references unknown country: ${key}`);
  }

  if (newsData.imfArticleIV !== undefined) {
    if (!newsData.imfArticleIV || typeof newsData.imfArticleIV !== "object" || Array.isArray(newsData.imfArticleIV)) {
      fail("NEWS_DATA.imfArticleIV must be an object when present");
    } else {
      for (const [key, record] of Object.entries(newsData.imfArticleIV)) {
        if (!countries[key]) fail(`NEWS_DATA.imfArticleIV references unknown country: ${key}`);
        for (const field of ["title", "url", "domain", "publishedAt", "officialSourceName"]) {
          if (!isText(record?.[field])) fail(`NEWS_DATA.imfArticleIV.${key}.${field} must be non-empty text`);
        }
        if (record?.url && !record.url.startsWith("https://")) fail(`NEWS_DATA.imfArticleIV.${key}.url must use https`);
        if (record?.publishedAt && Number.isNaN(Date.parse(record.publishedAt))) fail(`NEWS_DATA.imfArticleIV.${key}.publishedAt must be a valid date`);
      }
    }
  }

  if (!validDateString(config.dataLastUpdated)) fail("SITE_CONFIG.dataLastUpdated must be YYYY-MM-DD");
  if (!Array.isArray(order) || order.length === 0) fail("COUNTRY_DATA.order must be a non-empty array");
  if (new Set(order).size !== order.length) fail("COUNTRY_DATA.order contains duplicate keys");
  if (countryKeys.length !== order.length) fail("Country object and country order have different counts");

  for (const key of order) {
    const country = countries[key];
    if (!country) {
      fail(`Country order references missing key: ${key}`);
      continue;
    }
    for (const field of ["name", "region", "ratings", "snapshot", "status", "upcoming", "past", "sources"]) {
      if (country[field] === undefined || country[field] === null) fail(`${key}.${field} is required`);
    }
    if (!isText(country.name)) fail(`${key}.name must be non-empty text`);
    if (!isText(country.region)) fail(`${key}.region must be non-empty text`);
    if (!Array.isArray(country.coords) || country.coords.length !== 2 || country.coords.some(n => typeof n !== "number")) {
      fail(`${key}.coords must contain latitude and longitude numbers`);
    }
    for (const agency of ["sp", "fitch", "moodys"]) {
      if (!Array.isArray(country.ratings?.[agency]) || country.ratings[agency].length !== 2) {
        fail(`${key}.ratings.${agency} must contain rating and outlook`);
      }
    }
    for (const field of ["leader", "party", "fh", "opposition"]) {
      if (!isText(country.snapshot?.[field])) fail(`${key}.snapshot.${field} must be non-empty text`);
    }
    if (!Array.isArray(country.snapshot?.issues)) fail(`${key}.snapshot.issues must be an array`);
    if (!Array.isArray(country.upcoming)) fail(`${key}.upcoming must be an array`);
    else country.upcoming.forEach((event, index) => checkCalendarEvent(event, `${key}.upcoming[${index}]`));
    if (!Array.isArray(country.past)) fail(`${key}.past must be an array`);
    else country.past.forEach((event, index) => checkCalendarEvent(event, `${key}.past[${index}]`));

    const history = historyEvents[key];
    if (!Array.isArray(history)) {
      fail(`Historical events are missing for ${key}`);
    } else {
      const { min, max } = config.historyTargetPerCountry;
      if (history.length < min || history.length > max) {
        fail(`${key} has ${history.length} historical events; expected ${min}–${max}`);
      }
      const seen = new Set();
      history.forEach((event, index) => {
        const location = `${key}.history[${index}]`;
        for (const field of ["date", "sortDate", "category", "label", "impact", "source"]) {
          if (!isText(event[field])) fail(`${location}.${field} must be non-empty text`);
        }
        if (!validDateString(event.sortDate)) fail(`${location}.sortDate must resolve to YYYY-MM-DD`);
        if (Number(event.date.slice(0, 4)) < config.historyStartYear) {
          fail(`${location} predates the ${config.historyStartYear} history window`);
        }
        if (!historySources[event.source]) fail(`${location} references unknown source "${event.source}"`);
        const identity = `${event.sortDate}|${event.label}`;
        if (seen.has(identity)) fail(`${location} duplicates another historical event`);
        seen.add(identity);
      });
    }

    if (!mapData.countryShapes[key]) fail(`Map geometry is missing for ${key}`);

    const news = newsData.countries?.[key];
    if (!Array.isArray(news)) fail(`News data is missing for ${key}`);
    else {
      if (news.length > 10) fail(`${key} has more than 10 retained news records`);
      const urls = new Set();
      news.forEach((article, index) => {
        const location = `${key}.news[${index}]`;
        for (const field of ["id", "title", "url", "domain", "publishedAt"]) {
          if (!isText(article[field])) fail(`${location}.${field} must be non-empty text`);
        }
        if (article.url && !article.url.startsWith("https://")) fail(`${location}.url must use https`);
        if (article.publishedAt && Number.isNaN(Date.parse(article.publishedAt))) fail(`${location}.publishedAt must be a valid date`);
        if (!['critical', 'elevated', 'standard'].includes(article.materiality)) fail(`${location}.materiality must be critical, elevated or standard`);
        if (typeof article.materialityScore !== 'number' || article.materialityScore < 0) fail(`${location}.materialityScore must be a non-negative number`);
        if (!Array.isArray(article.riskSignals)) fail(`${location}.riskSignals must be an array`);
        if (typeof article.relevanceScore !== 'number' || article.relevanceScore < 0) fail(`${location}.relevanceScore must be a non-negative number`);
        if (!Array.isArray(article.relevanceReasons) || article.relevanceReasons.length === 0) fail(`${location}.relevanceReasons must be a non-empty array`);
        if (![1, 2, 3, 4].includes(article.sourceTier)) fail(`${location}.sourceTier must be 1–4`);
        if (!isText(article.sourceClass)) fail(`${location}.sourceClass must be non-empty text`);
        if (!isText(article.eventId)) fail(`${location}.eventId must be non-empty text`);
        if (!Number.isInteger(article.coverageCount) || article.coverageCount < 1) fail(`${location}.coverageCount must be a positive integer`);
        if (!Array.isArray(article.relatedCoverage)) fail(`${location}.relatedCoverage must be an array`);
        else {
          if (article.coverageCount < article.relatedCoverage.length + 1) fail(`${location}.coverageCount is smaller than its displayed coverage`);
          article.relatedCoverage.forEach((related, relatedIndex) => {
            const relatedLocation = `${location}.relatedCoverage[${relatedIndex}]`;
            for (const field of ["title", "url", "domain", "publishedAt", "sourceClass"]) {
              if (!isText(related[field])) fail(`${relatedLocation}.${field} must be non-empty text`);
            }
            if (related.url && !related.url.startsWith("https://")) fail(`${relatedLocation}.url must use https`);
            if (![1, 2, 3, 4].includes(related.sourceTier)) fail(`${relatedLocation}.sourceTier must be 1–4`);
          });
        }
        if (urls.has(article.url)) fail(`${location} duplicates another news URL`);
        urls.add(article.url);
      });
    }
  }

  for (const [key, source] of Object.entries(historySources)) {
    if (!isText(source.label)) fail(`History source ${key} needs a label`);
    if (!isText(source.url) || !source.url.startsWith("https://")) fail(`History source ${key} needs an https URL`);
  }

  for (const key of Object.keys(historyEvents)) {
    if (!countries[key]) fail(`Historical data references unknown country: ${key}`);
  }
  for (const key of Object.keys(newsData.countries || {})) {
    if (!countries[key]) fail(`News data references unknown country: ${key}`);
  }
  for (const key of Object.keys(mapData.countryShapes)) {
    if (!countries[key]) warnings.push(`Map geometry exists for unlisted country: ${key}`);
  }
}

if (warnings.length) {
  console.warn("Warnings:");
  warnings.forEach(message => console.warn(`- ${message}`));
}

if (errors.length) {
  console.error(`Validation failed with ${errors.length} error${errors.length === 1 ? "" : "s"}:`);
  errors.forEach(message => console.error(`- ${message}`));
  process.exit(1);
}

const countryCount = loaded.COUNTRY_DATA.order.length;
const historyCount = Object.values(loaded.HISTORY_DATA.events).reduce((sum, events) => sum + events.length, 0);
console.log(`Validation passed: ${countryCount} countries, ${historyCount} historical events.`);
