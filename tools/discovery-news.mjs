import crypto from "node:crypto";
import { scoreCountryRelevance } from "./gdelt.mjs";

const DAY = 86400000;
const GOOGLE_NEWS_RSS = "https://news.google.com/rss/search";

const COUNTRY_SEARCH_NAMES = Object.freeze({
  usa: "United States",
  mexico: "Mexico",
  bahamas: "Bahamas",
  serbia: "Serbia",
  turkey: "Türkiye OR Turkey",
  egypt: "Egypt",
  uzbekistan: "Uzbekistan",
  vietnam: "Vietnam",
  senegal: "Senegal",
  cotedivoire: '"Côte d’Ivoire" OR "Ivory Coast"',
  benin: "Benin",
  angola: "Angola",
  kenya: "Kenya",
  tanzania: "Tanzania",
  ethiopia: "Ethiopia"
});

function decodeEntities(value = "") {
  return String(value)
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)));
}

function tagValue(block, name) {
  return block.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${name}>`, "i"))?.[1] || "";
}

function sourceDetails(block) {
  const match = block.match(/<source\b[^>]*url=["']([^"']+)["'][^>]*>([\s\S]*?)<\/source>/i);
  if (!match) return { sourceName: "Google News discovery", domain: "news.google.com" };
  let domain = "news.google.com";
  try { domain = new URL(decodeEntities(match[1])).hostname.replace(/^www\./, ""); } catch {}
  return { sourceName: decodeEntities(match[2]).replace(/<[^>]+>/g, " ").trim(), domain };
}

function cleanTitle(value, sourceName) {
  const title = decodeEntities(value).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const suffix = sourceName ? ` - ${sourceName}` : "";
  return suffix && title.endsWith(suffix) ? title.slice(0, -suffix.length).trim() : title;
}

export function parseGoogleNewsFeed(xml, countryKey) {
  const blocks = [...String(xml).matchAll(/<item\b[^>]*>([\s\S]*?)<\/item>/gi)].map(match => match[1]);
  return blocks.flatMap(block => {
    const { sourceName, domain } = sourceDetails(block);
    const title = cleanTitle(tagValue(block, "title"), sourceName);
    const url = decodeEntities(tagValue(block, "link")).trim();
    const publishedAt = new Date(decodeEntities(tagValue(block, "pubDate")));
    if (title.length < 12 || !url.startsWith("https://") || Number.isNaN(publishedAt.valueOf())) return [];
    const article = {
      id: crypto.createHash("sha256").update(url).digest("hex").slice(0, 24),
      title,
      url,
      domain,
      publishedAt: publishedAt.toISOString(),
      sourceCountry: "",
      language: "English",
      relevanceBasis: "recent-country-news-search",
      discoverySourceName: sourceName
    };
    const relevance = scoreCountryRelevance(countryKey, article);
    return relevance.accepted ? [{ ...article, ...relevance }] : [];
  });
}

async function fetchCountry(countryKey, days) {
  const searchName = COUNTRY_SEARCH_NAMES[countryKey];
  if (!searchName) throw new Error(`No recent-news query configured for ${countryKey}`);
  const url = new URL(GOOGLE_NEWS_RSS);
  url.searchParams.set("q", `(${searchName}) when:${days}d`);
  url.searchParams.set("hl", "en-GB");
  url.searchParams.set("gl", "GB");
  url.searchParams.set("ceid", "GB:en");
  const response = await fetch(url, {
    headers: { "user-agent": "CountryDashboard/2.0 (public-interest sovereign-risk monitor)" },
    signal: AbortSignal.timeout(20000)
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return parseGoogleNewsFeed(await response.text(), countryKey)
    .filter(article => Date.parse(article.publishedAt) >= Date.now() - days * DAY)
    .slice(0, 30);
}

export async function fetchRecentDiscoveryNews(countryKeys, { days = 7 } = {}) {
  const countries = Object.fromEntries(countryKeys.map(key => [key, []]));
  const sourceStatus = [];
  for (const key of countryKeys) {
    try {
      countries[key] = await fetchCountry(key, days);
      sourceStatus.push({ id: `google-news-${key}`, label: `Recent country news — ${key}`, status: "ok", records: countries[key].length });
    } catch (error) {
      sourceStatus.push({ id: `google-news-${key}`, label: `Recent country news — ${key}`, status: "failed", error: error.message });
    }
    await new Promise(resolve => setTimeout(resolve, 750));
  }
  return { countries, sourceStatus };
}
