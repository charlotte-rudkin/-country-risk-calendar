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

const loaded = loadData();
const config = loaded.SITE_CONFIG;
const countryData = loaded.COUNTRY_DATA;
const newsData = loaded.NEWS_DATA;
const historyData = loaded.HISTORY_DATA;
const mapData = loaded.MAP_DATA;

if (!config) fail("SITE_CONFIG was not created");
if (!countryData) fail("COUNTRY_DATA was not created");
if (!newsData) fail("NEWS_DATA was not created");
if (!historyData) fail("HISTORY_DATA was not created");
if (!mapData) fail("MAP_DATA was not created");

if (errors.length === 0) {
  const { countries, order } = countryData;
  const historyEvents = historyData.events;
  const historySources = historyData.sources;
  const countryKeys = Object.keys(countries);

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
      if (news.length > 14) fail(`${key} has more than 14 retained news records`);
      const urls = new Set();
      news.forEach((article, index) => {
        const location = `${key}.news[${index}]`;
        for (const field of ["id", "title", "url", "domain", "publishedAt"]) {
          if (!isText(article[field])) fail(`${location}.${field} must be non-empty text`);
        }
        if (article.url && !article.url.startsWith("https://")) fail(`${location}.url must use https`);
        if (article.publishedAt && Number.isNaN(Date.parse(article.publishedAt))) fail(`${location}.publishedAt must be a valid date`);
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
