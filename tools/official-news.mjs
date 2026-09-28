import crypto from "node:crypto";
import { GLOBAL_OFFICIAL_SOURCES, COUNTRY_OFFICIAL_SOURCES, WORLD_BANK_COUNTRY_NAMES } from "./official-source-registry.mjs";
import { scoreCountryRelevance } from "./gdelt.mjs";

const WORLD_BANK_API = "https://search.worldbank.org/api/v3/wds";
const DAY = 86400000;
const fetchCache = new Map();

const OFFICIAL_RISK_PATTERN = /article iv|staff.level agreement|executive board|programme review|program review|mission|debt|default|restructur|development policy|budget support|public finance|economic update|macro poverty|fiscal|monetary|policy rate|interest rate|inflation|reserve|foreign exchange|currency|banking|financial stability|capital control|sanction|restrictive measure|FATF|rating|bond|auction|liquidity|arrears|monetaria|tasa de inter[eé]s|inflaci[oó]n|reservas|deuda|politique mon[eé]taire|taux d.int[eé]r[eê]t|dette|r[eé]serves|stabilit[eé] financi[eè]re/i;

function decodeEntities(value = "") {
  return String(value)
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)));
}

function stripMarkup(value = "") {
  return decodeEntities(value).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function toIsoDate(value) {
  if (!value) return null;
  const parsed = new Date(stripMarkup(value));
  return Number.isNaN(parsed.valueOf()) ? null : parsed.toISOString();
}

function absoluteHttpsUrl(value, base) {
  try {
    const url = new URL(decodeEntities(value), base);
    if (url.protocol === "http:") url.protocol = "https:";
    if (url.protocol !== "https:") return null;
    return url.toString();
  } catch {
    return null;
  }
}

function articleId(url) {
  return crypto.createHash("sha256").update(url).digest("hex").slice(0, 24);
}

function normaliseOfficialArticle(raw, source, countryKey = null) {
  const url = absoluteHttpsUrl(raw.url, source.url);
  const title = stripMarkup(raw.title);
  const publishedAt = toIsoDate(raw.publishedAt);
  if (!url || title.length < 12 || !publishedAt) return null;
  return {
    id: articleId(url),
    title,
    url,
    domain: new URL(url).hostname.replace(/^www\./, ""),
    publishedAt,
    sourceCountry: "Official",
    language: "English",
    relevanceBasis: countryKey ? "official-country-source" : "country-headline",
    officialSourceId: source.id,
    officialSourceName: source.label
  };
}

async function fetchText(url) {
  if (!fetchCache.has(url)) {
    fetchCache.set(url, (async () => {
      const response = await fetch(url, {
        headers: { "user-agent": "CountryDashboard/2.0 (public-interest sovereign-risk monitor)" },
        signal: AbortSignal.timeout(20000)
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return { text: await response.text(), contentType: response.headers.get("content-type") || "" };
    })());
  }
  return fetchCache.get(url);
}

function tagValue(block, names) {
  for (const name of names) {
    const match = block.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${name}>`, "i"));
    if (match) return match[1];
  }
  return "";
}

export function parseFeed(xml, source, countryKey = null) {
  const blocks = [...String(xml).matchAll(/<(item|entry)\b[^>]*>([\s\S]*?)<\/\1>/gi)].map(match => match[2]);
  return blocks.map(block => {
    const linkTag = block.match(/<link\b[^>]*href=["']([^"']+)["'][^>]*>/i);
    return normaliseOfficialArticle({
      title: tagValue(block, ["title"]),
      url: linkTag?.[1] || tagValue(block, ["link", "guid"]),
      publishedAt: tagValue(block, ["pubDate", "published", "updated", "dc:date"])
    }, source, countryKey);
  }).filter(Boolean);
}

function flattenJsonLd(value) {
  if (Array.isArray(value)) return value.flatMap(flattenJsonLd);
  if (!value || typeof value !== "object") return [];
  return [value, ...flattenJsonLd(value["@graph"] || [])];
}

export function parseHtmlArticles(html, source, countryKey) {
  const output = [];
  for (const match of String(html).matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      const records = flattenJsonLd(JSON.parse(decodeEntities(match[1])));
      for (const record of records) {
        const type = Array.isArray(record["@type"]) ? record["@type"].join(" ") : record["@type"];
        if (!/NewsArticle|Article|Report/i.test(String(type || ""))) continue;
        const item = normaliseOfficialArticle({
          title: record.headline || record.name,
          url: record.url || record.mainEntityOfPage?.["@id"] || record.mainEntityOfPage,
          publishedAt: record.datePublished || record.dateModified
        }, source, countryKey);
        if (item) output.push(item);
      }
    } catch {
      // A malformed JSON-LD block should not suppress other valid page data.
    }
  }

  // Conservative fallback for official listing pages without structured data:
  // a candidate needs a risk-bearing anchor title and a nearby explicit date.
  for (const match of String(html).matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)) {
    const title = stripMarkup(match[2]);
    if (title.length < 18 || title.length > 220 || !OFFICIAL_RISK_PATTERN.test(title)) continue;
    const nearby = String(html).slice(Math.max(0, match.index - 180), Math.min(String(html).length, match.index + match[0].length + 180));
    const dateMatch = nearby.match(/\b(20\d{2}-\d{2}-\d{2}|(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\s+\d{1,2},\s+20\d{2}|\d{1,2}\s+(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\s+20\d{2})\b/i);
    const item = normaliseOfficialArticle({ title, url: match[1], publishedAt: dateMatch?.[1] }, source, countryKey);
    if (item) output.push(item);
  }

  return [...new Map(output.map(item => [item.url, item])).values()];
}

async function fetchSource(source) {
  const response = await fetchText(source.url);
  if (source.kind === "rss" || /xml|rss|atom/i.test(response.contentType)) return parseFeed(response.text, source, source.countryKey);
  if (source.kind === "feed-discovery") {
    const feedLink = response.text.match(/<link\b[^>]*type=["']application\/(?:rss\+xml|atom\+xml)["'][^>]*href=["']([^"']+)["']/i);
    if (!feedLink) throw new Error("No machine-readable feed advertised");
    const feedUrl = absoluteHttpsUrl(feedLink[1], source.url);
    if (!feedUrl) throw new Error("Advertised feed is not HTTPS");
    const feed = await fetchText(feedUrl);
    return parseFeed(feed.text, { ...source, url: feedUrl }, source.countryKey);
  }
  return parseHtmlArticles(response.text, source, source.countryKey);
}

function worldBankRecords(payload) {
  const documents = payload?.documents || payload?.rows || payload?.response?.docs || {};
  return Array.isArray(documents) ? documents : Object.values(documents).filter(value => value && typeof value === "object");
}

async function fetchWorldBank(countryKey, sinceDate) {
  const countryName = WORLD_BANK_COUNTRY_NAMES[countryKey];
  const source = { id: "world-bank-documents", label: "World Bank", url: WORLD_BANK_API };
  const url = new URL(WORLD_BANK_API);
  url.searchParams.set("format", "json");
  url.searchParams.set("count_exact", countryName);
  url.searchParams.set("strdate", sinceDate);
  url.searchParams.set("rows", "20");
  url.searchParams.set("sort", "docdt");
  url.searchParams.set("order", "desc");
  url.searchParams.set("fl", "display_title,docdt,disclosure_date,url,pdfurl,docty,count");
  const response = await fetchText(url.toString());
  const payload = JSON.parse(response.text);
  return worldBankRecords(payload).map(record => normaliseOfficialArticle({
    title: record.display_title || record.docna || record.repnme,
    url: record.url || record.pdfurl,
    publishedAt: record.docdt || record.disclosure_date
  }, source, countryKey)).filter(Boolean).filter(item => OFFICIAL_RISK_PATTERN.test(item.title));
}

async function mapLimited(items, limit, operation) {
  const output = [];
  let cursor = 0;
  async function worker() {
    while (cursor < items.length) {
      const index = cursor++;
      output[index] = await operation(items[index]);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return output;
}

export async function fetchOfficialNews(countryKeys, { days = 30 } = {}) {
  const countries = Object.fromEntries(countryKeys.map(key => [key, []]));
  const rejected = Object.fromEntries(countryKeys.map(key => [key, []]));
  const sourceStatus = [];
  const cutoff = Date.now() - days * DAY;
  const sinceDate = new Date(cutoff).toISOString().slice(0, 10);

  const selectedCountrySources = COUNTRY_OFFICIAL_SOURCES.filter(source => countryKeys.includes(source.countryKey));
  const sourceResults = await mapLimited([...GLOBAL_OFFICIAL_SOURCES, ...selectedCountrySources], 3, async source => {
    try {
      const articles = await fetchSource(source);
      sourceStatus.push({ id: source.id, label: source.label, status: "ok", records: articles.length });
      return { source, articles };
    } catch (error) {
      sourceStatus.push({ id: source.id, label: source.label, status: "failed", error: error.message });
      return { source, articles: [] };
    }
  });

  for (const { source, articles } of sourceResults) {
    for (const article of articles) {
      if (Date.parse(article.publishedAt) < cutoff || !OFFICIAL_RISK_PATTERN.test(article.title)) continue;
      const candidateCountries = source.countryKey ? [source.countryKey] : countryKeys;
      for (const countryKey of candidateCountries) {
        const relevance = scoreCountryRelevance(countryKey, article);
        if (relevance.accepted) countries[countryKey].push({ ...article, ...relevance });
        else if (!source.countryKey && relevance.relevanceScore > 2) rejected[countryKey].push({ ...article, rejectionReason: relevance.relevanceReasons.join("; ") });
      }
    }
  }

  const worldBankResults = await mapLimited(countryKeys, 3, async countryKey => {
    try {
      const articles = await fetchWorldBank(countryKey, sinceDate);
      sourceStatus.push({ id: `world-bank-${countryKey}`, label: `World Bank — ${countryKey}`, status: "ok", records: articles.length });
      return { countryKey, articles };
    } catch (error) {
      sourceStatus.push({ id: `world-bank-${countryKey}`, label: `World Bank — ${countryKey}`, status: "failed", error: error.message });
      return { countryKey, articles: [] };
    }
  });
  for (const { countryKey, articles } of worldBankResults) {
    countries[countryKey].push(...articles.map(article => ({ ...article, ...scoreCountryRelevance(countryKey, article) })));
  }

  for (const key of countryKeys) {
    countries[key] = [...new Map(countries[key].map(item => [item.url, item])).values()];
  }
  return { countries, rejected, sourceStatus };
}
