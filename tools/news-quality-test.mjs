import { clusterNews, classifySource, headlineSimilarity, rankNewsInventory, selectNewsInventory } from "./news-quality.mjs";

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

const now = Date.parse("2026-09-29T00:00:00Z");
const recentStandard = article({ publishedAt: "2026-09-28T00:00:00Z", sourceTier: 3, relevanceScore: 7, materialityScore: 0 });
const oldStandard = article({ publishedAt: "2026-02-01T00:00:00Z", sourceTier: 3, relevanceScore: 7, materialityScore: 0 });
const officialElevated = article({ publishedAt: "2026-08-01T00:00:00Z", sourceTier: 1, relevanceScore: 8, materialityScore: 4 });
if (rankNewsInventory(recentStandard, now) <= rankNewsInventory(oldStandard, now)) throw new Error("Recency is not influencing inventory rank");
if (rankNewsInventory(officialElevated, now) <= rankNewsInventory(recentStandard, now)) throw new Error("Official elevated coverage should outrank routine recent coverage");

const olderCritical = Array.from({ length: 10 }, (_, index) => article({
  id: `old-${index}`,
  eventId: `old-${index}`,
  url: `https://example.com/old-${index}`,
  publishedAt: `2026-08-${String(index + 1).padStart(2, "0")}T00:00:00Z`,
  sourceTier: 1,
  relevanceScore: 10,
  materialityScore: 8
}));
const freshItems = Array.from({ length: 4 }, (_, index) => article({
  id: `fresh-${index}`,
  eventId: `fresh-${index}`,
  url: `https://example.com/fresh-${index}`,
  publishedAt: `2026-09-${String(25 + index).padStart(2, "0")}T00:00:00Z`,
  sourceTier: 4,
  relevanceScore: 7,
  materialityScore: 0
}));
const inventory = selectNewsInventory([...olderCritical, ...freshItems], { target: 10, recentDays: 30, recentFloor: 4, now });
if (inventory.filter(item => item.eventId.startsWith("fresh-")).length !== 4) throw new Error("Recent qualifying coverage was crowded out of the inventory");

console.log("News quality test passed: source tiers, URL cleanup, event clustering and inventory ranking.");
