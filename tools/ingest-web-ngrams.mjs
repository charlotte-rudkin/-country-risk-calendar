import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { buildWebNgramCandidates } from "./web-ngrams.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const inputFlag = process.argv.indexOf("--input");
const outputFlag = process.argv.indexOf("--output");
if (inputFlag < 0 || !process.argv[inputFlag + 1]) {
  throw new Error("Usage: node tools/ingest-web-ngrams.mjs --input <json-or-ndjson> [--output <json>]");
}
const inputPath = path.resolve(process.cwd(), process.argv[inputFlag + 1]);
const outputPath = outputFlag >= 0 && process.argv[outputFlag + 1]
  ? path.resolve(process.cwd(), process.argv[outputFlag + 1])
  : path.join(root, "data", "review", "web-ngrams-candidates.json");

const raw = fs.readFileSync(inputPath, "utf8").trim();
let rows;
try {
  const parsed = JSON.parse(raw);
  rows = Array.isArray(parsed) ? parsed : parsed.rows || [];
} catch {
  rows = raw.split(/\r?\n/).filter(Boolean).map((line, index) => {
    try { return JSON.parse(line); } catch { throw new Error(`Invalid NDJSON on line ${index + 1}`); }
  });
}

const context = { window: {} };
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(root, "data", "countries.js"), "utf8"), context);
const countryKeys = context.window.COUNTRY_DATA.order;
const result = buildWebNgramCandidates(rows, countryKeys);
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `${JSON.stringify(result, null, 2)}\n`);
console.log(`Web NGrams ingestion wrote ${result.stats.acceptedCandidates} review candidate(s) to ${outputPath}.`);
