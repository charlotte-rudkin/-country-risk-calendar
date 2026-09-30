import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const outputPath = path.join(root, "data", "economics.js");
const commodityImportPath = path.join(root, "data", "commodity-import.json");
const scopeArg = process.argv.find(argument => argument.startsWith("--scope="));
const scope = scopeArg?.split("=")[1] || "all";
if (!["all", "macro", "trade", "commodity"].includes(scope)) throw new Error(`Unsupported scope: ${scope}`);

const IDS = {
  usa: { iso3: "USA", oec: "nausa" }, mexico: { iso3: "MEX", oec: "namex" },
  bahamas: { iso3: "BHS", oec: "nabhs" }, serbia: { iso3: "SRB", oec: "eusrb" },
  turkey: { iso3: "TUR", oec: "astur" }, egypt: { iso3: "EGY", oec: "afegy" },
  uzbekistan: { iso3: "UZB", oec: "asuzb" }, vietnam: { iso3: "VNM", oec: "asvnm" },
  senegal: { iso3: "SEN", oec: "afsen" }, cotedivoire: { iso3: "CIV", oec: "afciv" },
  benin: { iso3: "BEN", oec: "afben" }, angola: { iso3: "AGO", oec: "afago" },
  kenya: { iso3: "KEN", oec: "afken" }, tanzania: { iso3: "TZA", oec: "aftza" },
  ethiopia: { iso3: "ETH", oec: "afeth" }
};

const IMF_INDICATORS = {
  realGdpGrowth: ["NGDP_RPCH", "percent"],
  inflation: ["PCPIPCH", "percent"],
  currentAccount: ["BCA_NGDPD", "percent"],
  fiscalBalance: ["GGXCNL_NGDP", "percent"],
  governmentDebt: ["GGXWDG_NGDP", "percent"]
};

const WB_INDICATORS = {
  reserveMonths: ["FI.RES.TOTL.MO", "months"],
  externalDebtGni: ["DT.DOD.DECT.GN.ZS", "percent"],
  debtServiceExports: ["DT.TDS.DECT.EX.ZS", "percent"]
};

function loadWindow(...relativePaths) {
  const context = { window: {} };
  vm.createContext(context);
  for (const relativePath of relativePaths) {
    vm.runInContext(fs.readFileSync(path.join(root, relativePath), "utf8"), context, { filename: relativePath });
  }
  return context.window;
}

async function fetchJson(url, options = {}) {
  let lastError;
  for (let attempt = 0; attempt < 3; attempt += 1) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 25_000);
    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
        headers: { "user-agent": "CountryDashboard/1.0", accept: "application/json", ...(options.headers || {}) }
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.json();
    } catch (error) {
      lastError = error;
      if (attempt < 2) await new Promise(resolve => setTimeout(resolve, 750 * (attempt + 1)));
    } finally {
      clearTimeout(timer);
    }
  }
  throw lastError;
}

function nearestYearValue(series, preferredYear) {
  const candidates = Object.entries(series || {})
    .map(([year, value]) => ({ year: Number(year), value: Number(value) }))
    .filter(item => Number.isInteger(item.year) && Number.isFinite(item.value))
    .sort((left, right) => Math.abs(left.year - preferredYear) - Math.abs(right.year - preferredYear) || right.year - left.year);
  return candidates[0] || null;
}

async function fetchImf(iso3) {
  const preferredYear = new Date().getUTCFullYear();
  const requestedYears = Array.from({ length: 10 }, (_, index) => preferredYear - 4 + index);
  const years = requestedYears.join(",");
  const indicators = {};
  for (const [key, [code, unit]] of Object.entries(IMF_INDICATORS)) {
    let json;
    try {
      json = await fetchJson(`https://www.imf.org/external/datamapper/api/v2/${code}/${iso3}?periods=${years}`);
    } catch {
      json = await fetchJson(`https://www.imf.org/external/datamapper/api/v1/${code}/${iso3}?periods=${years}`);
    }
    const series = json?.values?.[code]?.[iso3] || json?.values?.[iso3] || json?.data?.[code]?.[iso3];
    const picked = nearestYearValue(series, preferredYear);
    const points = Object.entries(series || {}).map(([year, value]) => ({
      year: Number(year), value: Number(value), projection: Number(year) >= preferredYear
    })).filter(point => Number.isInteger(point.year) && Number.isFinite(point.value))
      .sort((left, right) => left.year - right.year);
    if (picked) indicators[key] = { value: picked.value, year: picked.year, unit, projection: picked.year >= preferredYear, series: points };
  }
  if (!Object.keys(indicators).length) throw new Error("no IMF observations returned");
  return { indicators };
}

async function fetchWorldBank(iso3) {
  const indicators = {};
  for (const [key, [code, unit]] of Object.entries(WB_INDICATORS)) {
    const url = `https://api.worldbank.org/v2/country/${iso3}/indicator/${code}?format=json&per_page=12&date=2015:2030`;
    const json = await fetchJson(url);
    const rows = Array.isArray(json?.[1]) ? json[1] : [];
    const found = rows.find(row => row?.value !== null && Number.isFinite(Number(row.value)));
    const series = rows.filter(row => row?.value !== null && Number.isFinite(Number(row.value)) && Number.isInteger(Number(row.date)))
      .map(row => ({ value: Number(row.value), year: Number(row.date), projection: false }))
      .sort((left, right) => left.year - right.year);
    if (found) indicators[key] = { value: Number(found.value), year: Number(found.date), unit, series };
  }
  if (!Object.keys(indicators).length) throw new Error("no World Bank observations returned");
  return { indicators };
}

function oecRows(json) {
  if (Array.isArray(json)) return json;
  if (Array.isArray(json?.data)) return json.data;
  if (Array.isArray(json?.records)) return json.records;
  return [];
}

function firstField(row, fields) {
  for (const field of fields) if (row?.[field] !== undefined && row[field] !== null) return row[field];
  return null;
}

function rankOec(rows, nameFields) {
  const mapped = rows.map(row => ({
    name: String(firstField(row, nameFields) || "").trim(),
    value: Number(firstField(row, ["Trade Value", "Trade Value USD", "value"]))
  })).filter(row => row.name && Number.isFinite(row.value) && row.value > 0);
  const total = mapped.reduce((sum, row) => sum + row.value, 0);
  return mapped.sort((a, b) => b.value - a.value).slice(0, 5)
    .map(row => ({ ...row, share: total ? row.value / total * 100 : null }));
}

async function fetchOecQuery(params) {
  const url = new URL("https://api-v2.oec.world/tesseract/data.jsonrecords");
  for (const [key, value] of Object.entries(params)) url.searchParams.set(key, value);
  const headers = process.env.OEC_API_TOKEN ? { authorization: `Bearer ${process.env.OEC_API_TOKEN}` } : {};
  return oecRows(await fetchJson(url, { headers }));
}

async function fetchOec(oecId) {
  const year = Number(process.env.OEC_DATA_YEAR || new Date().getUTCFullYear() - 2);
  const common = { cube: "trade_i_baci_a_22", measures: "Trade Value", Year: String(year), locale: "en" };
  const [exportRows, importRows, exportPartnerRows, importPartnerRows] = await Promise.all([
    fetchOecQuery({ ...common, "Exporter Country": oecId, drilldowns: "HS4" }),
    fetchOecQuery({ ...common, "Importer Country": oecId, drilldowns: "HS4" }),
    fetchOecQuery({ ...common, "Exporter Country": oecId, drilldowns: "Importer Country" }),
    fetchOecQuery({ ...common, "Importer Country": oecId, drilldowns: "Exporter Country" })
  ]);
  const trade = {
    year,
    exportsTotal: exportRows.reduce((sum, row) => sum + (Number(firstField(row, ["Trade Value", "Trade Value USD", "value"])) || 0), 0),
    importsTotal: importRows.reduce((sum, row) => sum + (Number(firstField(row, ["Trade Value", "Trade Value USD", "value"])) || 0), 0),
    topExports: rankOec(exportRows, ["HS4", "HS4 Name", "Product"]),
    topImports: rankOec(importRows, ["HS4", "HS4 Name", "Product"]),
    exportPartners: rankOec(exportPartnerRows, ["Importer Country", "Importer Country Name"]),
    importPartners: rankOec(importPartnerRows, ["Exporter Country", "Exporter Country Name"])
  };
  if (![trade.topExports, trade.topImports, trade.exportPartners, trade.importPartners].some(rows => rows.length)) {
    throw new Error(`no OEC observations returned for ${year}`);
  }
  return trade;
}

function loadCommodityImport() {
  if (!fs.existsSync(commodityImportPath)) return {};
  const parsed = JSON.parse(fs.readFileSync(commodityImportPath, "utf8"));
  return parsed.countries || parsed;
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
    sourceUrl: String(record.sourceUrl || "https://unctad.org/topic/commodities/state-of-commodity-dependence")
  };
}

function stable(value) {
  return JSON.stringify(value, Object.keys(value || {}).sort());
}

function writeData(data) {
  const body = `/* Generated economic and trade structure data. Do not edit values by hand. */\n(function () {\n  'use strict';\n\n  window.ECONOMIC_DATA = ${JSON.stringify(data, null, 2)};\n})();\n`;
  fs.writeFileSync(outputPath, body);
}

const loaded = loadWindow("data/countries.js", "data/economics.js");
const previous = loaded.ECONOMIC_DATA;
const next = structuredClone(previous);
const failures = [];
let changed = false;

if (scope === "all" || scope === "macro") {
  for (const key of loaded.COUNTRY_DATA.order) {
    const ids = IDS[key];
    if (!ids) { failures.push(`${key}: no source identifiers`); continue; }
    const [imf, worldBank] = await Promise.allSettled([fetchImf(ids.iso3), fetchWorldBank(ids.iso3)]);
    if (imf.status === "fulfilled") {
      if (JSON.stringify(next.countries[key].imf) !== JSON.stringify(imf.value)) changed = true;
      next.countries[key].imf = imf.value;
    } else failures.push(`${key} IMF: ${imf.reason.message}`);
    if (worldBank.status === "fulfilled") {
      if (JSON.stringify(next.countries[key].worldBank) !== JSON.stringify(worldBank.value)) changed = true;
      next.countries[key].worldBank = worldBank.value;
    } else failures.push(`${key} World Bank: ${worldBank.reason.message}`);
  }
}

if (scope === "all" || scope === "trade") {
  for (const key of loaded.COUNTRY_DATA.order) {
    try {
      const trade = await fetchOec(IDS[key].oec);
      if (JSON.stringify(next.countries[key].trade) !== JSON.stringify(trade)) changed = true;
      next.countries[key].trade = trade;
    } catch (error) {
      failures.push(`${key} OEC: ${error.message}`);
    }
  }
}

if (scope === "all" || scope === "commodity") {
  const imported = loadCommodityImport();
  for (const [key, record] of Object.entries(imported)) {
    if (!next.countries[key]) { failures.push(`${key} UNCTAD: unknown country key`); continue; }
    try {
      const commodity = validateCommodity(record, key);
      if (JSON.stringify(next.countries[key].commodityDependence) !== JSON.stringify(commodity)) changed = true;
      next.countries[key].commodityDependence = commodity;
    } catch (error) {
      failures.push(`UNCTAD ${error.message}`);
    }
  }
}

if (changed) {
  next.generatedAt = new Date().toISOString();
  writeData(next);
  console.log(`Economic data updated (${scope}).`);
} else {
  console.log(`No economic-data changes (${scope}); retained last published file.`);
}
if (failures.length) {
  console.warn(`Provider warnings (${failures.length}):`);
  failures.forEach(failure => console.warn(`- ${failure}`));
}
