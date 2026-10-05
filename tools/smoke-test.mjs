import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const elements = {};

function element(id = "") {
  if (!elements[id]) {
    elements[id] = {
      id,
      innerHTML: "",
      className: "",
      style: {},
      value: "",
      children: [],
      appendChild(child) { this.children.push(child); },
      addEventListener() {},
      onclick: null,
    };
  }
  return elements[id];
}

const context = {
  window: {},
  document: {
    getElementById: element,
    createElement() {
      return { innerHTML: "", className: "", style: {}, onclick: null };
    },
  },
  console,
  Date,
  Set,
  Intl,
};

vm.createContext(context);
for (const relativePath of [
  "data/config.js",
  "data/countries.js",
  "data/economics.js",
  "data/history.js",
  "data/map-data.js",
  "data/profile-reviews.js",
  "js/app.js",
]) {
  vm.runInContext(fs.readFileSync(path.join(root, relativePath), "utf8"), context, { filename: relativePath });
}

const failures = [];
for (const key of context.window.COUNTRY_DATA.order) {
  vm.runInContext(`active=${JSON.stringify(key)}; renderMain();`, context);
  const html = element("main").innerHTML;
  const country = context.window.COUNTRY_DATA.countries[key];
  const expectedHistoryCount = context.window.HISTORY_DATA.events[key].length;
  const renderedSources = (html.match(/class="history-source"/g) || []).length;

  if (!html.includes(`>${country.name}</h1>`)) failures.push(`${key}: profile title did not render`);
  if (!html.includes("IMF Article IV consultation")) failures.push(`${key}: IMF Article IV section did not render`);
  vm.runInContext("countryView='economics'; renderMain();", context);
  const economics = element("main").innerHTML;
  if (!economics.includes("Macro outlook") || !economics.includes("Fiscal and external debt vulnerability") || !economics.includes("Commodity dependence") || !economics.includes("Merchandise trade")) {
    failures.push(`${key}: economic and trade sub-page did not render`);
  }
  vm.runInContext("countryView='profile'; renderMain();", context);
  if (!html.includes("Historical turning points")) failures.push(`${key}: history section did not render`);
  if (renderedSources !== expectedHistoryCount) failures.push(`${key}: rendered ${renderedSources}/${expectedHistoryCount} history sources`);
}

context.window.ECONOMIC_DATA.jurisdictions.USA = {
  imf: { indicators: {
    realGdpGrowth: { value: 2.1, year: 2026, unit: "percent", projection: true, series: [
      { year: 2024, value: 2.8, projection: false }, { year: 2025, value: 2.4, projection: false }, { year: 2026, value: 2.1, projection: true }
    ] },
    governmentDebt: { value: 124, year: 2026, unit: "percent", projection: true, series: [
      { year: 2024, value: 121, projection: false }, { year: 2026, value: 124, projection: true }
    ] }
  } },
  worldBank: { indicators: { reserveMonths: { value: 2.4, year: 2025, unit: "months", series: [
    { year: 2023, value: 2.2, projection: false }, { year: 2025, value: 2.4, projection: false }
  ] } } },
  commodityDependence: { exportShare: 20, dependent: false, referencePeriod: "2022–2024", primaryGroup: "Agriculture", sourceUrl: "https://unctad.org/" },
  trade: { year: 2024, exportsTotal: 1000000000, importsTotal: 1200000000,
    topExports: [{ name: "Aircraft", value: 300000000, share: 30 }], topImports: [{ name: "Cars", value: 240000000, share: 20 }],
    exportPartners: [{ name: "Canada", value: 180000000, share: 18 }], importPartners: [{ name: "Mexico", value: 240000000, share: 20 }]
  },
  refresh: {
    imf: { status: "ok", lastAttemptAt: "2026-09-30T00:00:00Z", lastSuccessAt: "2026-09-30T00:00:00Z", retainedPrevious: false },
    worldBank: { status: "ok", lastAttemptAt: "2026-09-30T00:00:00Z", lastSuccessAt: "2026-09-30T00:00:00Z", retainedPrevious: false },
    unctad: { status: "ok", lastAttemptAt: "2026-09-30T00:00:00Z", lastSuccessAt: "2026-09-30T00:00:00Z", retainedPrevious: false },
    oec: { status: "ok", lastAttemptAt: "2026-09-30T00:00:00Z", lastSuccessAt: "2026-09-30T00:00:00Z", retainedPrevious: false }
  }
};
vm.runInContext("active='usa'; countryView='economics'; renderMain();", context);
const economicVisual = element("main").innerHTML;
if (!economicVisual.includes('class="chart-line') || !economicVisual.includes('class="trade-bar-track"') || !economicVisual.includes('class="commodity-gauge"')) {
  failures.push("Economic charts did not render from populated source data");
}

vm.runInContext("active='usa'; countryView='profile'; renderMain(); historyFilter='Credit'; renderMain();", context);
const filtered = element("main").innerHTML;
const usaCreditCount = context.window.HISTORY_DATA.events.usa.filter(event => event.category === "Credit").length;
const usaTotalCount = context.window.HISTORY_DATA.events.usa.length;
if (!filtered.includes(`${usaCreditCount} of ${usaTotalCount} events`) || filtered.includes("September 11 attacks")) {
  failures.push("History category filter did not produce the expected US credit subset");
}
if (!filtered.includes("Country-defining anchors only") || !filtered.includes("2016–present")) {
  failures.push("History coverage tiers did not render");
}
if (!filtered.includes("IMF concludes 2026 Article IV Consultation")) {
  failures.push("US Article IV calendar fallback did not render");
}

vm.runInContext("active='__home__'; renderHome();", context);
const home = element("main").innerHTML;
if (!home.includes("Real boundaries")) failures.push("Overview map did not render");
if (!home.includes("Last updated")) failures.push("Overview freshness date did not render");

if (failures.length) {
  console.error(`Smoke test failed with ${failures.length} error${failures.length === 1 ? "" : "s"}:`);
  failures.forEach(message => console.error(`- ${message}`));
  process.exit(1);
}

console.log(`Smoke test passed: ${context.window.COUNTRY_DATA.order.length} profiles, overview and filters rendered.`);
