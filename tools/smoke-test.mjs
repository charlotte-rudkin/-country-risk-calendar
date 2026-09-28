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
  "data/history.js",
  "data/map-data.js",
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
  if (!html.includes("Historical turning points")) failures.push(`${key}: history section did not render`);
  if (renderedSources !== expectedHistoryCount) failures.push(`${key}: rendered ${renderedSources}/${expectedHistoryCount} history sources`);
}

vm.runInContext("active='usa'; renderMain(); historyFilter='Credit'; renderMain();", context);
const filtered = element("main").innerHTML;
const usaCreditCount = context.window.HISTORY_DATA.events.usa.filter(event => event.category === "Credit").length;
const usaTotalCount = context.window.HISTORY_DATA.events.usa.length;
if (!filtered.includes(`${usaCreditCount} of ${usaTotalCount} events`) || filtered.includes("September 11 attacks")) {
  failures.push("History category filter did not produce the expected US credit subset");
}
if (!filtered.includes("Country-defining anchors only") || !filtered.includes("2016–present")) {
  failures.push("History coverage tiers did not render");
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
