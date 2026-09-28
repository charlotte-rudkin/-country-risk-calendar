import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const failures = [];

if (!html.includes("<style>")) failures.push("Compiled dashboard does not contain embedded styles");
if (!html.includes("--ink: #FFFFFF;") || !html.includes("--accent: #8D0442;")) {
  failures.push("Compiled dashboard does not contain the approved white and maroon theme");
}
if (!html.includes("--map-unrated: #DCECF6;")) {
  failures.push("Compiled dashboard does not contain the approved light-blue default map colour");
}
for (const unresolved of ['href="assets/', 'src="data/', 'src="js/']) {
  if (html.includes(unresolved)) failures.push(`Compiled dashboard still references ${unresolved}`);
}

const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(match => match[1]);
if (scripts.length !== 6) failures.push(`Expected 6 embedded scripts; found ${scripts.length}`);

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
    createElement() { return { innerHTML: "", className: "", style: {}, onclick: null }; },
  },
  console,
  Date,
  Set,
  Intl,
};

vm.createContext(context);
try {
  scripts.forEach((script, index) => vm.runInContext(script, context, { filename: `index.html#script-${index + 1}` }));
} catch (error) {
  failures.push(`Compiled dashboard JavaScript failed: ${error.message}`);
}

if (context.window.COUNTRY_DATA) {
  for (const key of context.window.COUNTRY_DATA.order) {
    try {
      vm.runInContext(`active=${JSON.stringify(key)}; renderMain();`, context);
      const profile = element("main").innerHTML;
      const name = context.window.COUNTRY_DATA.countries[key].name;
      if (!profile.includes(`>${name}</h1>`)) failures.push(`${key}: standalone profile did not render`);
      if (!profile.includes("Country risk news")) failures.push(`${key}: standalone news section did not render`);
      if (!profile.includes("Historical turning points")) failures.push(`${key}: standalone history did not render`);
    } catch (error) {
      failures.push(`${key}: standalone render failed: ${error.message}`);
    }
  }
} else {
  failures.push("Compiled dashboard did not load COUNTRY_DATA");
}

if (failures.length) {
  console.error(`Standalone test failed with ${failures.length} error${failures.length === 1 ? "" : "s"}:`);
  failures.forEach(message => console.error(`- ${message}`));
  process.exit(1);
}

console.log("Standalone test passed: embedded design, data and all 15 profiles load from one file.");
