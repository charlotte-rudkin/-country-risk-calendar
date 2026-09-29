import crypto from "node:crypto";

const OFFICIAL_DOMAINS = [
  "imf.org", "worldbank.org", "fatf-gafi.org", "clubdeparis.org", "un.org", "europa.eu",
  "treasury.gov", "federalreserve.gov", "banxico.org.mx", "gob.mx", "centralbankbahamas.com",
  "nbs.rs", "gov.rs", "tcmb.gov.tr", "hmb.gov.tr", "cbe.org.eg", "mof.gov.eg", "cbu.uz",
  "gov.uz", "sbv.gov.vn", "mof.gov.vn", "bceao.int", "bna.ao", "minfin.gov.ao",
  "centralbank.go.ke", "treasury.go.ke", "bot.go.tz", "mof.go.tz", "nbe.gov.et", "mofed.gov.et",
  "fitchratings.com", "moodys.com", "spglobal.com"
];

const WIRE_DOMAINS = ["reuters.com", "apnews.com", "afp.com"];
const VETTED_DOMAINS = [
  "ft.com", "bloomberg.com", "economist.com", "bbc.com", "bbc.co.uk", "dw.com", "france24.com",
  "aljazeera.com", "africanews.com", "theafricareport.com", "businessdailyafrica.com",
  "nation.africa", "dailymaverick.co.za", "premiumtimesng.com", "theeastafrican.co.ke"
];

const STOP_WORDS = new Set([
  "a", "an", "and", "are", "as", "at", "be", "by", "for", "from", "has", "have", "in", "is",
  "it", "its", "of", "on", "or", "says", "that", "the", "to", "with", "after", "amid", "over",
  "new", "latest", "update", "report"
]);

function domainMatches(domain, candidate) {
  return domain === candidate || domain.endsWith(`.${candidate}`);
}

export function classifySource(domain = "") {
  const cleaned = String(domain).toLowerCase().replace(/^www\./, "");
  if (OFFICIAL_DOMAINS.some(candidate => domainMatches(cleaned, candidate))) {
    return { sourceTier: 1, sourceClass: "primary/official" };
  }
  if (WIRE_DOMAINS.some(candidate => domainMatches(cleaned, candidate))) {
    return { sourceTier: 2, sourceClass: "wire service" };
  }
  if (VETTED_DOMAINS.some(candidate => domainMatches(cleaned, candidate))) {
    return { sourceTier: 3, sourceClass: "vetted media" };
  }
  return { sourceTier: 4, sourceClass: "discovery source" };
}

export function canonicaliseUrl(value) {
  try {
    const url = new URL(value);
    url.hash = "";
    for (const key of [...url.searchParams.keys()]) {
      if (/^(utm_|fbclid|gclid|mc_|ref$|source$|output$)/i.test(key)) url.searchParams.delete(key);
    }
    url.hostname = url.hostname.toLowerCase().replace(/^www\./, "");
    url.pathname = url.pathname.replace(/\/(amp|print)\/?$/i, "").replace(/\/$/, "") || "/";
    return url.toString();
  } catch {
    return String(value || "");
  }
}

export function normaliseHeadline(title) {
  return String(title || "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s[-–—|:]\s[^-–—|:]{2,30}$/u, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(token => token.length > 2 && !STOP_WORDS.has(token))
    .join(" ");
}

function tokenSet(title) {
  return new Set(normaliseHeadline(title).split(" ").filter(Boolean));
}

export function headlineSimilarity(left, right) {
  const a = tokenSet(left);
  const b = tokenSet(right);
  if (!a.size || !b.size) return 0;
  let intersection = 0;
  for (const token of a) if (b.has(token)) intersection += 1;
  return intersection / (a.size + b.size - intersection);
}

export function rankNewsInventory(article, now = Date.now()) {
  const ageDays = Math.max(0, (now - Date.parse(article.publishedAt)) / 86400000);
  const recency = Math.max(0, 18 - ageDays / 10);
  const source = Math.max(0, 5 - Number(article.sourceTier || 4)) * 2;
  const materiality = Number(article.materialityScore || 0) * 2;
  const relevance = Number(article.relevanceScore || 0) * 2;
  return recency + source + materiality + relevance;
}

export function selectNewsInventory(articles, { target = 10, recentDays = 30, recentFloor = 4, now = Date.now() } = {}) {
  const compare = (left, right) => (rankNewsInventory(right, now) - rankNewsInventory(left, now))
    || (left.sourceTier - right.sourceTier)
    || right.publishedAt.localeCompare(left.publishedAt);
  const ranked = [...articles].sort(compare);
  const recentCutoff = now - recentDays * 86400000;
  const selected = ranked.filter(article => Date.parse(article.publishedAt) >= recentCutoff).slice(0, recentFloor);
  const selectedIds = new Set(selected.map(article => article.eventId || article.url));
  for (const article of ranked) {
    if (selected.length >= target) break;
    const identity = article.eventId || article.url;
    if (selectedIds.has(identity)) continue;
    selected.push(article);
    selectedIds.add(identity);
  }
  return selected;
}

function daysApart(left, right) {
  return Math.abs(Date.parse(left) - Date.parse(right)) / 86400000;
}

function sameEvent(left, right) {
  if (canonicaliseUrl(left.url) === canonicaliseUrl(right.url)) return true;
  const similarity = headlineSimilarity(left.title, right.title);
  if (similarity >= 0.72) return true;
  const leftSignal = left.riskSignals?.[0] || "General country risk";
  const rightSignal = right.riskSignals?.[0] || "General country risk";
  return leftSignal === rightSignal && daysApart(left.publishedAt, right.publishedAt) <= 5 && similarity >= 0.42;
}

function preferredArticle(left, right) {
  return (left.sourceTier - right.sourceTier)
    || (right.relevanceScore - left.relevanceScore)
    || (right.materialityScore - left.materialityScore)
    || right.publishedAt.localeCompare(left.publishedAt);
}

function eventId(countryKey, article) {
  const dayBucket = String(article.publishedAt).slice(0, 10);
  const signal = article.riskSignals?.[0] || "general";
  const identity = `${countryKey}|${signal}|${dayBucket}|${normaliseHeadline(article.title)}`;
  return crypto.createHash("sha256").update(identity).digest("hex").slice(0, 16);
}

export function clusterNews(countryKey, articles) {
  const uniqueUrls = new Map();
  let exactUrlDuplicates = 0;
  for (const article of articles) {
    const canonicalUrl = canonicaliseUrl(article.url);
    const enriched = { ...article, canonicalUrl, ...classifySource(article.domain) };
    if (uniqueUrls.has(canonicalUrl)) {
      exactUrlDuplicates += 1;
      const existing = uniqueUrls.get(canonicalUrl);
      uniqueUrls.set(canonicalUrl, [existing, enriched].sort(preferredArticle)[0]);
    } else {
      uniqueUrls.set(canonicalUrl, enriched);
    }
  }

  const clusters = [];
  for (const article of uniqueUrls.values()) {
    const match = clusters.find(cluster => cluster.some(candidate => sameEvent(article, candidate)));
    if (match) match.push(article);
    else clusters.push([article]);
  }

  const representatives = clusters.map(cluster => {
    const ordered = [...cluster].sort(preferredArticle);
    const representative = ordered[0];
    const relatedCoverage = ordered.slice(1, 7).map(item => ({
      title: item.title,
      url: item.url,
      domain: item.domain,
      publishedAt: item.publishedAt,
      sourceTier: item.sourceTier,
      sourceClass: item.sourceClass,
      officialSourceName: item.officialSourceName || null
    }));
    return {
      ...representative,
      eventId: eventId(countryKey, representative),
      coverageCount: cluster.length,
      relatedCoverage
    };
  });

  return {
    articles: representatives,
    stats: {
      inputArticles: articles.length,
      exactUrlDuplicates,
      duplicateArticlesMerged: articles.length - representatives.length,
      eventClusters: representatives.length
    }
  };
}
