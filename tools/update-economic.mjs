import { imfBatch, imfJson } from './imf-requests.mjs';
import { annualSeries, fetchConcessionalDebt, metricRefreshStatuses } from './worldbank-debt.mjs';
import { fetchComtrade } from './comtrade.mjs';
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { JURISDICTIONS, jurisdictionFor } from "./jurisdictions.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const outputPath = path.join(root, "data", "economics.js");
const commodityImportPath = path.join(root, "data", "commodity-import.json");
const scopeArg = process.argv.find(argument => argument.startsWith("--scope="));
const countryArg = process.argv.find(argument => argument.startsWith("--country="));
const scope = scopeArg?.split("=")[1] || "all";
const requestedCountry = countryArg?.split("=")[1] || null;
if (!["all", "macro", "trade", "commodity", "normalize"].includes(scope)) throw new Error(`Unsupported scope: ${scope}`);

const IMF_INDICATORS = {
  realGdpGrowth: { code: "NGDP_RPCH", unit: "percent", label: "Real GDP growth" },
  inflation: { code: "PCPIPCH", unit: "percent", label: "Inflation" },
  currentAccount: { code: "BCA_NGDPD", unit: "percent", label: "Current-account balance / GDP" },
  fiscalBalance: { code: "GGXCNL_NGDP", unit: "percent", label: "General-government net lending / GDP" },
  governmentDebt: { code: "GGXWDG_NGDP", unit: "percent", label: "General-government gross debt / GDP" }
};

const WB_INDICATORS = {
  reserveMonths: {
    code: "FI.RES.TOTL.MO", unit: "months", maxAgeYears: 2,
    label: "Total reserves in months of imports",
    definition: "International reserves expressed as months of imports."
  },
  interestPaymentsRevenue: {
    code: "GC.XPN.INTP.RV.ZS", unit: "percent", maxAgeYears: 3,
    label: "Interest payments / revenue",
    definition: "Government interest payments as a percentage of government revenue."
  },
  externalDebtGni: {
    code: "DT.DOD.DECT.GN.ZS", unit: "percent", maxAgeYears: 2,
    label: "Total external debt / GNI",
    definition: "Public, publicly guaranteed and private nonguaranteed external debt, IMF credit and short-term debt as a percentage of GNI."
  },
  shortTermDebtPct: {
    code: "DT.DOD.DSTC.ZS", unit: "percent", maxAgeYears: 2,
    label: "Short-term debt / external debt",
    definition: "Debt with an original maturity of one year or less, plus interest arrears, as a percentage of total external debt."
  },
  concessionalDebtPct: {
    code: "DT.DOD.ALLC.ZS", unit: "percent", maxAgeYears: 2,
    label: "Concessional debt / external debt",
    definition: "Concessional external debt as a percentage of total external debt."
  },
  debtServiceExports: {
    code: "DT.TDS.DECT.EX.ZS", unit: "percent", maxAgeYears: 2,
    label: "Total external debt service / exports",
    definition: "Principal and interest paid on total external debt as a percentage of exports and primary income receipts."
  },
  gdpPerCapita: {
    code: "NY.GDP.PCAP.CD", unit: "usd", maxAgeYears: 2,
    label: "GDP per capita",
    definition: "GDP divided by mid-year population, current US dollars."
  }
};

// Optional verified live CSV URL. The bundled user-supplied snapshot remains
// explicitly labelled when no live source is configured or retrieval fails.
const UNCTAD_URLS = [process.env.UNCTAD_DATA_URL].filter(Boolean);
const commodityCodeMap = JSON.parse(fs.readFileSync(path.join(here, "commodity-country-codes.json"), "utf8"));


function loadWindow(...relativePaths) {
  const context = { window: {} };
  vm.createContext(context);
  for (const relativePath of relativePaths) {
    vm.runInContext(fs.readFileSync(path.join(root, relativePath), "utf8"), context, { filename: relativePath });
  }
  return context.window;
}

function sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function fetchResponse(url, options = {}) {
  let lastError;
  const attempts = Number(process.env.ECONOMIC_FETCH_ATTEMPTS || 2);
  const timeoutMs = Number(process.env.ECONOMIC_FETCH_TIMEOUT_MS || 12_000);
  for (let attempt = 0; attempt < attempts; attempt += 1) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
        headers: { "user-agent": "CountryDashboard/2.0", accept: "application/json,text/csv,*/*", ...(options.headers || {}) }
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      // Keep the timeout active until the response body has finished downloading.
      const body = await response.text();
      return { json: async () => JSON.parse(body), text: async () => body };
    } catch (error) {
      lastError = error;
      if (attempt < attempts - 1) await sleep((attempt + 1) * 1_000);
    } finally {
      clearTimeout(timer);
    }
  }
  throw lastError;
}

async function fetchJson(url, options = {}) {
  return (await fetchResponse(url, options)).json();
}

async function fetchText(url, options = {}) {
  return (await fetchResponse(url, options)).text();
}

function nowIso() {
  return new Date().toISOString();
}

function observationClass(year, currentYear) {
  if (year < currentYear) return "historical";
  if (year === currentYear) return "estimate";
  return "forecast";
}

function currentValue(series, preferredYear) {
  const exact = series.find(point => point.year === preferredYear);
  if (exact) return exact;
  return [...series].sort((left, right) =>
    Math.abs(left.year - preferredYear) - Math.abs(right.year - preferredYear) || right.year - left.year
  )[0] || null;
}

async function fetchImf(iso3) {
  const currentYear = new Date().getUTCFullYear();
  const requestedYears = Array.from({ length: 10 }, (_, index) => currentYear - 4 + index);
  const requestedSet = new Set(requestedYears);
  const periods = requestedYears.join(",");
  const indicators = {};
  const warnings = [];

  const entries = Object.entries(IMF_INDICATORS);
  const results = await imfBatch(entries, async ([key, metadata], deadline) => {
    const url = `https://www.imf.org/external/datamapper/api/v1/${metadata.code}/${iso3}?periods=${periods}`;
    console.log(`[IMF] ${iso3} ${metadata.code}: requesting`);
    const json = await imfJson(url, deadline);
    const sourceSeries = json?.values?.[metadata.code]?.[iso3] || json?.values?.[iso3] || json?.data?.[metadata.code]?.[iso3] || {};
    const series = Object.entries(sourceSeries).filter(([,value]) => value !== null && value !== undefined && typeof value !== 'boolean' && String(value).trim() !== '').map(([year, value]) => ({
      year: Number(year), value: Number(value)
    })).filter(point => requestedSet.has(point.year) && Number.isFinite(point.value))
      .sort((left, right) => left.year - right.year)
      .map(point => ({
        ...point,
        observationClass: observationClass(point.year, currentYear),
        projection: point.year > currentYear
      }));
    const picked = currentValue(series, currentYear);
    if (!picked) throw new Error("no observations in requested window");
    return [key, {
        value: picked.value,
        year: picked.year,
        unit: metadata.unit,
        label: metadata.label,
        observationClass: picked.observationClass,
        projection: picked.projection,
        sourceCode: metadata.code,
        sourceUrl: url,
        series
      }];
  });
  results.forEach((result, index) => {
    const [key, metadata] = entries[index];
    if (result.status === "fulfilled") {
      indicators[key] = result.value[1];
    } else {
      warnings.push(`${metadata.code}: ${result.reason.message}`);
    }
  });
  if (!Object.keys(indicators).length) throw new Error(warnings.join(" | ") || "no IMF observations returned");
  return { indicators, warnings, observationThrough: Math.max(...Object.values(indicators).map(metric => metric.year)) };
}

// Resolve the debt database once per run from the provider's own catalogue.
let debtSourcePromise;
function worldBankRows(json) {
  const messages = json?.[0]?.message || json?.message;
  if (messages) throw new Error(`World Bank API error: ${JSON.stringify(messages).slice(0, 500)}`);
  if (!Array.isArray(json) || json.length !== 2 || !json[0] || typeof json[0] !== "object") {
    throw new Error("World Bank response format was not recognised");
  }
  if (Number(json[0].pages) > 1) throw new Error("World Bank response is paginated; refusing an incomplete series");
  if (json[1] === null && Number(json[0].total) === 0) return [];
  if (!Array.isArray(json[1])) throw new Error("World Bank observation list was not recognised");
  return json[1];
}
async function debtSourceId() {
  debtSourcePromise ||= (async () => {
    const json = await fetchJson("https://api.worldbank.org/v2/sources?format=json&per_page=1000");
    const rows = worldBankRows(json);
    const source = rows.find(row => /^international debt statistics$/i.test(String(row.name || "").trim()));
    if (!source || !/^\d+$/.test(String(source.id))) throw new Error("International Debt Statistics was not found in the World Bank source catalogue");
    return String(source.id);
  })();
  return debtSourcePromise;
}

async function fetchWorldBank(iso3) {
  const currentYear = new Date().getUTCFullYear();
  const indicators = {};
  const warnings = [];
  const diagnostics = {};
  const entries = Object.entries(WB_INDICATORS);
  const results = await Promise.allSettled(entries.map(async ([key, metadata]) => {
    const sourceId = key === "concessionalDebtPct" ? await debtSourceId() : null;
    let url = `https://api.worldbank.org/v2/country/${iso3}/indicator/${metadata.code}?format=json&per_page=100&date=2015:${currentYear}${sourceId ? `&source=${sourceId}` : ""}`;
    let json, series, detail = {}, requests = [];
    try {
      json = await fetchJson(url);
      const rows = worldBankRows(json);
      series = annualSeries(rows, currentYear);
      requests.push({url,status:series.length ? 'ok' : 'no_observations'});
      if (!series.length && key === 'concessionalDebtPct') throw new Error('No observations on standard route');
    } catch (error) {
      requests.push({url,status:'retrieval_failed',error:error.message});
      if (key !== 'concessionalDebtPct') { error.requests=requests; throw error; }
      try {
        detail = await fetchConcessionalDebt({iso3,sourceId,currentYear,fetchJson});
        series=detail.series; url=detail.url; requests.push(...detail.requests);
        console.log(`[World Bank] ${iso3} concessional-debt fallback: ${detail.method}`);
      } catch (fallbackError) { fallbackError.requests=[...requests,...(fallbackError.requests || [])]; throw fallbackError; }
    }
    const picked = series.at(-1);
    if (!picked) throw new Error(`No published observations for ${iso3}, 2015–${currentYear}${sourceId ? `, source ${sourceId}` : ""}`);
    if (key === "concessionalDebtPct" && series.some(point => point.value < 0 || point.value > 100)) throw new Error("Concessional-debt share outside 0–100%; refusing to publish");
    if (key === "concessionalDebtPct") console.log(`[World Bank] ${iso3} concessional debt: ${picked.value}% (${picked.year}), source ${sourceId}`);
    const ageYears = Math.max(0, currentYear - picked.year);
    return [key, {
        value: picked.value,
        year: picked.year,
        unit: metadata.unit,
        label: metadata.label,
        definition: detail.definition || metadata.definition,
        sourceCode: detail.sourceCode || metadata.code,
        calculationMethod: detail.method || "reported",
        inputSources: detail.inputSources || [],
        requests,
        sourceUrl: url,
        sourceId: sourceId || String(json?.[0]?.sourceid || ""),
        sourceLastUpdated: detail.lastUpdated || json?.[0]?.lastupdated || null,
        ageYears,
        stale: ageYears > metadata.maxAgeYears,
        series
      }];
  }));
  results.forEach((result, index) => {
    const [key, metadata] = entries[index];
    if (result.status === "fulfilled") {
      indicators[key] = result.value[1];
    } else {
      diagnostics[key] = {status: /^No published observations/.test(result.reason.message) ? 'no_observations' : 'retrieval_failed', error:result.reason.message, requests:result.reason.requests || []};
      warnings.push(`${metadata.code}: ${result.reason.message}`);
    }
  });
  return { indicators, warnings, diagnostics, observationThrough: Object.keys(indicators).length ? Math.max(...Object.values(indicators).map(metric => metric.year)) : null };
}

function parseCsv(text) {
  const rows = [];
  let row = [], field = "", quoted = false;
  for (let index = 0; index < text.length; index += 1) {
    const character = text[index];
    if (character === '"' && quoted && text[index + 1] === '"') { field += '"'; index += 1; }
    else if (character === '"') quoted = !quoted;
    else if (character === "," && !quoted) { row.push(field); field = ""; }
    else if ((character === "\n" || character === "\r") && !quoted) {
      if (character === "\r" && text[index + 1] === "\n") index += 1;
      row.push(field); field = "";
      if (row.some(value => value.length)) rows.push(row);
      row = [];
    } else field += character;
  }
  if (field.length || row.length) { row.push(field); rows.push(row); }
  const headers = rows.shift()?.map(value => value.trim()) || [];
  return rows.map(values => Object.fromEntries(headers.map((header, index) => [header, values[index] ?? ""])));
}

function normalizedKey(value) {
  return String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, "");
}

function findColumn(headers, candidates) {
  const normalized = new Map(headers.map(header => [normalizedKey(header), header]));
  for (const candidate of candidates) {
    const exact = normalized.get(normalizedKey(candidate));
    if (exact) return exact;
  }
  for (const [key, header] of normalized) {
    if (candidates.some(candidate => key.includes(normalizedKey(candidate)))) return header;
  }
  return null;
}

function numericCell(row, field) {
  if (!field) return null;
  const raw = String(row[field] ?? "").trim();
  if (!raw) return null;
  const value = Number(raw.replace(/[%\s]/g, ""));
  return Number.isFinite(value) ? value : null;
}

function commodityRecordsFromCsv(text, sourceUrl) {
  const rows = parseCsv(text);
  if (!rows.length) throw new Error("UNCTAD CSV contained no rows");
  const headers = Object.keys(rows[0]);
  const isoField = findColumn(headers, ["iso3", "country iso3", "economy iso3", "alpha3", "cc"]);
  const shareField = findColumn(headers, ["commodity export dependence", "commodity export share", "dependence", "share commodity exports", "commodity share", "dependency", "value"]);
  const periodField = findColumn(headers, ["reference period", "period", "year"]);
  const groupField = findColumn(headers, ["dominant export product group", "dominant group", "primary group"]);
  const agricultureField = findColumn(headers, ["agriculture share", "agricultural commodities"]);
  const energyField = findColumn(headers, ["energy share", "energy commodities"]);
  const miningField = findColumn(headers, ["mining share", "minerals ores metals"]);
  if (!isoField || !shareField) throw new Error(`UNCTAD CSV fields not recognised (${headers.join(", ")})`);
  const records = {};
  for (const row of rows) {
    if (headers.includes("symbol") && row.symbol !== "dd") continue;
    const code = String(row[isoField] || "").trim().toUpperCase();
    const iso3 = commodityCodeMap[code] || code;
    const referencePeriod = String(row[periodField] || "").trim();
    const periodMatch = referencePeriod.match(/^(\d{4})(?:[-–](\d{4}))?$/);
    if (!periodMatch) throw new Error(`UNCTAD reference period missing or invalid for ${code}`);
    const periodEnd = Number(periodMatch[2] || periodMatch[1]);
    if (records[iso3] && records[iso3].periodEnd > periodEnd) continue;
    const exportShare = numericCell(row, shareField);
    if (!/^[A-Z]{3}$/.test(iso3) || exportShare === null || exportShare < 0 || exportShare > 100) continue;
    const groups = [
      ["Agriculture", numericCell(row, agricultureField)],
      ["Energy", numericCell(row, energyField)],
      ["Mining", numericCell(row, miningField)]
    ].filter(([, value]) => value !== null).sort((left, right) => right[1] - left[1]);
    records[iso3] = {
      exportShare,
      dependent: exportShare > 60,
      referencePeriod,
      periodEnd,
      ...(row[groupField] ? { primaryGroup: String(row[groupField]).trim() } : groups.length ? { primaryGroup: groups[0][0] } : {}),
      sourceUrl,
      sourceDataset: "UNCTAD Commodity Dependence Dashboard"
    };
  }
  if (!Object.keys(records).length) throw new Error("UNCTAD CSV yielded no valid country records");
  return records;
}

function validateCommodity(record, key) {
  if (!record || typeof record !== "object") throw new Error(`${key}: record must be an object`);
  const share = Number(record.exportShare);
  if (!Number.isFinite(share) || share < 0 || share > 100) throw new Error(`${key}: exportShare must be 0–100`);
  if (!record.referencePeriod) throw new Error(`${key}: referencePeriod is required`);
  return {
    exportShare: share,
    dependent: share > 60,
    referencePeriod: String(record.referencePeriod),
    ...(record.primaryGroup ? { primaryGroup: String(record.primaryGroup) } : {}),
    sourceUrl: String(record.sourceUrl || "https://unctad.org/topic/commodities/state-of-commodity-dependence/country-profiles"),
    sourceDataset: String(record.sourceDataset || "UNCTAD reviewed import")
  };
}

function loadCommodityImport(countries) {
  if (!fs.existsSync(commodityImportPath)) return {};
  const parsed = JSON.parse(fs.readFileSync(commodityImportPath, "utf8"));
  const source = parsed.countries || parsed;
  const records = {};
  for (const [key, record] of Object.entries(source)) {
    const iso3 = countries[key]?.iso3 || (/^[A-Z]{3}$/.test(key) ? key : null);
    if (!iso3) continue;
    records[iso3] = validateCommodity(record, key);
  }
  return records;
}

async function fetchUnctad(countries) {
  const failures = [];
  for (const url of UNCTAD_URLS) {
    try {
      return { records: commodityRecordsFromCsv(await fetchText(url), url), warnings: failures };
    } catch (error) {
      failures.push(`${url}: ${error.message}`);
    }
  }
  const snapshotPath = path.join(root, "data", "unctad-dependence.csv");
  if (fs.existsSync(snapshotPath)) {
    const records = commodityRecordsFromCsv(fs.readFileSync(snapshotPath, "utf8"), "https://unctad.org/topic/commodities/state-of-commodity-dependence");
    for (const record of Object.values(records)) {
      record.sourceDataset = "UNCTAD commodity dependence — uploaded snapshot";
      record.sourceFile = "cdde_dependence.xls";
      record.snapshotImportedAt = "2026-10-02";
    }
    return { records, warnings: [...failures, "Using uploaded UNCTAD snapshot (imported 2026-10-02); live source freshness has not been verified."] };
  }
  const imported = loadCommodityImport(countries);
  if (Object.keys(imported).length) return { records: imported, warnings: failures };
  throw new Error(failures.join(" | ") || "no UNCTAD source or reviewed import available");
}

function providerStatus(previous, status, attemptedAt, details = {}) {
  return {
    status,
    lastAttemptAt: attemptedAt,
    lastSuccessAt: status === "ok" || status === "partial" ? attemptedAt : previous?.lastSuccessAt || null,
    retainedPrevious: status === "error" && Boolean(details.retainedPrevious),
    ...details
  };
}

function ensureCountryRecord(data, key) {
  if (!data.countries[key]) data.countries[key] = {};
  if (!data.countries[key].refresh) data.countries[key].refresh = {};
  return data.countries[key];
}

function selectTargets(loaded) {
  const profileKeyByIso3 = Object.fromEntries(loaded.COUNTRY_DATA.order.map(key => [
    String(loaded.COUNTRY_DATA.countries[key]?.iso3 || "").toUpperCase(), key
  ]));
  let targets = Object.values(JURISDICTIONS).map(jurisdiction => ({
    ...jurisdiction,
    profileKey: profileKeyByIso3[jurisdiction.iso3] || null
  })).sort((left, right) => left.iso3.localeCompare(right.iso3));
  if (requestedCountry) {
    if (requestedCountry.toLowerCase() === "profiles") {
      targets = targets.filter(target => target.profileKey);
      if (!targets.length) throw new Error("No published country profiles have ISO3 mappings");
      return targets;
    }
    const requestedIso3 = loaded.COUNTRY_DATA.countries[requestedCountry]?.iso3 || requestedCountry;
    targets = targets.filter(target => target.iso3 === String(requestedIso3).toUpperCase());
    if (!targets.length) throw new Error(`Unknown jurisdiction: ${requestedCountry}`);
    return targets;
  }
  const bundleCount = Number(process.env.ECONOMIC_BUNDLE_COUNT || 1);
  const bundleIndex = Number(process.env.ECONOMIC_BUNDLE_INDEX || 0);
  if (!Number.isInteger(bundleCount) || bundleCount < 1 || !Number.isInteger(bundleIndex) || bundleIndex < 0 || bundleIndex >= bundleCount) {
    throw new Error("Invalid ECONOMIC_BUNDLE_INDEX/ECONOMIC_BUNDLE_COUNT");
  }
  return targets.filter((_, index) => index % bundleCount === bundleIndex);
}

function normalizeExistingMetric(metric, provider, metricKey, currentYear) {
  if (!metric || typeof metric !== "object") return metric;
  const metadata = provider === "imf" ? IMF_INDICATORS[metricKey] : WB_INDICATORS[metricKey];
  const minimumYear = provider === "imf" ? currentYear - 4 : -Infinity;
  const maximumYear = provider === "imf" ? currentYear + 5 : Infinity;
  const series = (Array.isArray(metric.series) ? metric.series : [])
    .map(point => ({ year: Number(point.year), value: Number(point.value) }))
    .filter(point => Number.isInteger(point.year) && Number.isFinite(point.value) && point.year >= minimumYear && point.year <= maximumYear)
    .sort((left, right) => left.year - right.year)
    .map(point => ({
      ...point,
      observationClass: provider === "imf" ? observationClass(point.year, currentYear) : "historical",
      projection: provider === "imf" && point.year > currentYear
    }));
  const picked = provider === "imf" ? currentValue(series, currentYear) : series.at(-1);
  const year = Number(picked?.year ?? metric.year);
  const normalized = {
    ...metric,
    ...(metadata || {}),
    sourceCode: metadata?.code || metric.sourceCode,
    year,
    series
  };
  if (provider === "imf") {
    normalized.observationClass = observationClass(year, currentYear);
    normalized.projection = year > currentYear;
  } else {
    normalized.ageYears = Math.max(0, currentYear - year);
    normalized.stale = normalized.ageYears > (metadata?.maxAgeYears ?? 2);
    normalized.projection = false;
  }
  return normalized;
}

function normalizeRecord(record, iso3) {
  const currentYear = new Date().getUTCFullYear();
  record.iso3 = iso3;
  record.refresh ||= {};
  for (const provider of ["imf", "worldBank"]) {
    const indicators = record[provider]?.indicators;
    if (indicators && typeof indicators === "object") {
      if (provider === "worldBank") delete indicators.externalDebtCurrentUsd;
      for (const [metricKey, metric] of Object.entries(indicators)) {
        indicators[metricKey] = normalizeExistingMetric(metric, provider, metricKey, currentYear);
      }
    }
  }
  for (const [provider, hasData] of Object.entries({
    imf: Boolean(record.imf),
    worldBank: Boolean(record.worldBank),
    oec: Boolean(record.trade),
    unctad: Boolean(record.commodityDependence)
  })) {
    if (!record.refresh[provider]) {
      record.refresh[provider] = {
        status: hasData ? "stale" : "pending",
        lastAttemptAt: null,
        lastSuccessAt: null,
        retainedPrevious: false,
        ...(hasData ? { warning: "Record predates provider-level refresh tracking; run the relevant refresh." } : {})
      };
    }
  }
  return record;
}

function writeData(data) {
  const body = `/* Generated economic and trade structure data. Do not edit values by hand. */\n(function () {\n  'use strict';\n\n  window.ECONOMIC_DATA = ${JSON.stringify(data, null, 2)};\n})();\n`;
  fs.writeFileSync(outputPath, body);
}

const loaded = loadWindow("data/countries.js", "data/economics.js");
const next = structuredClone(loaded.ECONOMIC_DATA);
next.schemaVersion = 2;
next.sources = {
  ...next.sources,
  imf: { label: "IMF World Economic Outlook", url: "https://www.imf.org/external/datamapper/", cadence: "Monthly API check", apiVersion: "v1" },
  worldBank: { label: "World Bank Indicators API", url: "https://api.worldbank.org/v2/", cadence: "Monthly API check", apiVersion: "v2" },
  unctad: { label: "UNCTAD Commodity Dependence Dashboard", url: "https://unctad.org/topic/commodities/state-of-commodity-dependence/country-profiles", cadence: "Annual source refresh" },
  oec: { label: "UN Comtrade", url: "https://comtradeplus.un.org/", cadence: "Quarterly batches; annual reported merchandise trade", dataset: "UN Comtrade HS4" }
};

next.jurisdictions ||= {};
for (const key of loaded.COUNTRY_DATA.order) {
  const iso3 = String(loaded.COUNTRY_DATA.countries[key]?.iso3 || "").toUpperCase();
  if (iso3 && next.countries?.[key] && !next.jurisdictions[iso3]) next.jurisdictions[iso3] = next.countries[key];
}
for (const iso3 of Object.keys(JURISDICTIONS)) {
  next.jurisdictions[iso3] = normalizeRecord(next.jurisdictions[iso3] || {}, iso3);
}
delete next.countries;

const selectedTargets = selectTargets(loaded);
if ((scope === "trade" || scope === "all") && selectedTargets.length > 15) throw new Error("Trade refresh limited to 15 jurisdictions per run. Select one country, profiles, or at least 24 bundles.");
const attemptedAt = nowIso();
const failures = [];

for (const target of selectedTargets) {
  const { iso3 } = target;
  console.log(`[economic] Refreshing ${iso3} (${scope})...`);
  const jurisdiction = jurisdictionFor(iso3);
  const record = next.jurisdictions[iso3];
  if (!jurisdiction) {
    const message = `missing or unsupported ISO3 code ${iso3 || "(blank)"}`;
    failures.push(`${iso3}: ${message}`);
    for (const provider of ["imf", "worldBank", "oec", "unctad"]) {
      record.refresh[provider] = providerStatus(record.refresh[provider], "error", attemptedAt, { error: message, retainedPrevious: Boolean(record[provider]) });
    }
    continue;
  }

  if (scope === "all" || scope === "macro") {
    const results = await Promise.allSettled([fetchImf(iso3), fetchWorldBank(iso3)]);
    for (const [provider, result] of [["imf", results[0]], ["worldBank", results[1]]]) {
      if (result.status === "fulfilled") {
        const previousIndicators = record[provider]?.indicators || {};
        const retainedMetricKeys = Object.keys(previousIndicators).filter(metricKey => !result.value.indicators[metricKey]);
        record[provider] = { indicators: { ...previousIndicators, ...result.value.indicators } };
        const status = !Object.keys(result.value.indicators).length ? "error" : result.value.warnings.length ? "partial" : "ok";
        for (const warning of result.value.warnings) failures.push(`${iso3} ${provider}: ${warning}`);
        record.refresh[provider] = providerStatus(record.refresh[provider], status, attemptedAt, {
          observationThrough: result.value.observationThrough,
          retainedPrevious: retainedMetricKeys.length > 0,
          retainedMetricKeys,
          warnings: result.value.warnings,
          ...(provider === 'worldBank' ? {metrics:metricRefreshStatuses(record.refresh[provider]?.metrics, WB_INDICATORS, result.value.indicators, result.value.diagnostics || {}, attemptedAt)} : {})
        });
      } else {
        failures.push(`${iso3} ${provider}: ${result.reason.message}`);
        record.refresh[provider] = providerStatus(record.refresh[provider], "error", attemptedAt, {
          error: result.reason.message,
          retainedPrevious: Boolean(record[provider])
        });
      }
    }
  }

  if (scope === "all" || scope === "trade") {
    if (record.refresh.oec?.provider !== "comtrade") record.refresh.oec = {status:"pending", provider:"comtrade"};
    try {
      record.trade = await fetchComtrade(iso3);
      const coverageCount = Object.values(record.trade.coverage || {}).filter(Boolean).length;
      record.refresh.oec = providerStatus(record.refresh.oec, coverageCount === 4 ? "ok" : "partial", attemptedAt, {
        provider: "comtrade",
        observationThrough: record.trade.year,
        retainedPrevious: Boolean(record.trade.retainedSections?.length),
        warnings: record.trade.warnings || []
      });
    } catch (error) {
      failures.push(`${iso3} Comtrade: ${error.message}`);
      record.refresh.oec = providerStatus(record.refresh.oec, "error", attemptedAt, {
        provider: "comtrade",
        error: error.message,
        retainedPrevious: Boolean(record.trade)
      });
    }
  }
}

if (scope === "all" || scope === "commodity") {
  try {
    const unctad = await fetchUnctad(loaded.COUNTRY_DATA.countries);
    for (const warning of unctad.warnings) console.warn(`[UNCTAD] ${warning}`);
    for (const { iso3 } of selectedTargets) {
      const record = next.jurisdictions[iso3];
      const commodity = unctad.records[record.iso3];
      if (commodity) {
        record.commodityDependence = commodity;
        record.refresh.unctad = providerStatus(record.refresh.unctad, unctad.warnings.length ? "partial" : "ok", attemptedAt, {
          observationThrough: commodity.referencePeriod,
          warnings: unctad.warnings
        });
      } else {
        const error = `no UNCTAD record for ${record.iso3}`;
        failures.push(`${iso3} UNCTAD: ${error}`);
        record.refresh.unctad = providerStatus(record.refresh.unctad, "error", attemptedAt, {
          error, retainedPrevious: Boolean(record.commodityDependence)
        });
      }
    }
  } catch (error) {
    for (const { iso3 } of selectedTargets) {
      const record = next.jurisdictions[iso3];
      record.refresh.unctad = providerStatus(record.refresh.unctad, "error", attemptedAt, {
        error: error.message, retainedPrevious: Boolean(record.commodityDependence)
      });
    }
    failures.push(`UNCTAD: ${error.message}`);
  }
}

next.generatedAt = nowIso();
next.refreshSummary = { scope, jurisdictionsAttempted: selectedTargets.length, completedAt: nowIso(), failures: failures.length };
writeData(next);
console.log(`Economic data refresh completed (${scope}): ${selectedTargets.length} jurisdictions, ${failures.length} provider warning(s).`);
if (failures.length) {
  console.warn(`Provider warnings (${failures.length}):`);
  failures.forEach(failure => console.warn(`- ${failure}`));
  console.warn(`::warning title=Economic refresh incomplete::${failures.length} provider or jurisdiction refresh warning(s). Previous values, where retained, are marked on the dashboard.`);
}
