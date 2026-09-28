import { clusterNews, classifySource, headlineSimilarity } from "./news-quality.mjs";

function article(overrides = {}) {
  return {
    id: overrides.id || "test",
    title: "Kenya central bank cuts policy rate",
    url: "https://example.com/kenya-rate-cut",
    domain: "example.com",
    publishedAt: "2026-09-27T10:00:00Z",
    relevanceScore: 7,
    materialityScore: 2,
    materiality: "standard",
    riskSignals: ["Major policy decision"],
    ...overrides
  };
}

const similarity = headlineSimilarity(
  "Kenya central bank cuts policy rate",
  "Kenya's central bank cuts its key policy rate"
);
if (similarity < 0.5) throw new Error(`Headline similarity unexpectedly low: ${similarity}`);

if (classifySource("www.imf.org").sourceTier !== 1) throw new Error("IMF should be a tier-one source");
if (classifySource("reuters.com").sourceTier !== 2) throw new Error("Reuters should be a tier-two source");

const clustered = clusterNews("kenya", [
  article(),
  article({ id: "tracking", url: "https://example.com/kenya-rate-cut?utm_source=newsletter" }),
  article({ id: "wire", title: "Kenya's central bank cuts its key policy rate", url: "https://reuters.com/world/africa/kenya-rate", domain: "reuters.com" }),
  article({ id: "other", title: "Kenya parliament debates supplementary budget", url: "https://example.net/kenya-budget", domain: "example.net", riskSignals: ["Fiscal deterioration"] })
]);

if (clustered.articles.length !== 2) throw new Error(`Expected 2 event clusters, got ${clustered.articles.length}`);
const rateCluster = clustered.articles.find(item => item.riskSignals[0] === "Major policy decision");
if (!rateCluster || rateCluster.coverageCount !== 2) throw new Error("Rate coverage was not clustered correctly");
if (rateCluster.domain !== "reuters.com") throw new Error("The stronger wire source should represent the event cluster");
if (clustered.stats.duplicateArticlesMerged !== 2) throw new Error("Duplicate count is incorrect");

console.log("News quality test passed: source tiers, URL cleanup and event clustering.");
