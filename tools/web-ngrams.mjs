import crypto from "node:crypto";
import { scoreCountryRelevance } from "./gdelt.mjs";

function cleanText(value = "") {
  return String(value).replace(/\s+/g, " ").trim();
}

function httpsUrl(value) {
  try {
    const url = new URL(value);
    if (url.protocol === "http:") url.protocol = "https:";
    return url.protocol === "https:" ? url.toString() : null;
  } catch {
    return null;
  }
}

export function normaliseWebNgramRow(row) {
  const url = httpsUrl(row?.url);
  const snippet = cleanText([row?.pre, row?.ngram, row?.post].filter(Boolean).join(" "));
  const publishedAt = new Date(row?.date || row?.publishedAt);
  if (!url || snippet.length < 20 || Number.isNaN(publishedAt.valueOf())) return null;
  return {
    candidateId: crypto.createHash("sha256").update(`${url}|${snippet}`).digest("hex").slice(0, 24),
    url,
    domain: new URL(url).hostname.replace(/^www\./, ""),
    publishedAt: publishedAt.toISOString(),
    language: cleanText(row?.lang || row?.language || "unknown"),
    snippet
  };
}

export function buildWebNgramCandidates(rows, countryKeys, { maxPerCountry = 50 } = {}) {
  const countries = Object.fromEntries(countryKeys.map(key => [key, []]));
  const seenByCountry = Object.fromEntries(countryKeys.map(key => [key, new Set()]));
  let invalidRows = 0;
  for (const row of rows) {
    const candidate = normaliseWebNgramRow(row);
    if (!candidate) {
      invalidRows += 1;
      continue;
    }
    for (const countryKey of countryKeys) {
      if (countries[countryKey].length >= maxPerCountry || seenByCountry[countryKey].has(candidate.url)) continue;
      const relevance = scoreCountryRelevance(countryKey, {
        title: candidate.snippet,
        relevanceBasis: "web-ngrams-context"
      });
      if (!relevance.accepted) continue;
      seenByCountry[countryKey].add(candidate.url);
      countries[countryKey].push({
        ...candidate,
        countryKey,
        status: "candidate",
        provider: "GDELT Web News NGrams 3.0",
        relevanceScore: relevance.relevanceScore,
        relevanceReasons: relevance.relevanceReasons
      });
    }
  }
  return {
    schemaVersion: 1,
    generatedAt: new Date().toISOString(),
    publicationMode: "review-only",
    stats: {
      inputRows: rows.length,
      invalidRows,
      acceptedCandidates: Object.values(countries).reduce((sum, items) => sum + items.length, 0)
    },
    countries
  };
}
