import { buildWebNgramCandidates, normaliseWebNgramRow } from "./web-ngrams.mjs";

const rows = [
  {
    date: "2026-09-29T12:00:00Z",
    url: "http://example.com/angola-stake-sale",
    lang: "en",
    pre: "The government of Angola",
    ngram: "stake",
    post: "sale raised $228 million and reduced state ownership"
  },
  {
    date: "2026-09-29T11:00:00Z",
    url: "https://example.com/angola-conservation",
    lang: "en",
    pre: "A wildlife conservation partnership in Angola",
    ngram: "award",
    post: "celebrated its anniversary"
  }
];

const normalised = normaliseWebNgramRow(rows[0]);
if (!normalised || !normalised.url.startsWith("https://")) throw new Error("Web NGrams URL normalisation failed");
const candidates = buildWebNgramCandidates(rows, ["angola"]);
if (candidates.countries.angola.length !== 1) throw new Error("Expected one material Angola Web NGrams candidate");
if (candidates.publicationMode !== "review-only") throw new Error("Web NGrams candidates must not auto-publish");
console.log("Web NGrams candidate-ingestion test passed.");
