const API_URL = "https://api.gdeltproject.org/api/v2/doc/doc";

export const COUNTRY_QUERIES = Object.freeze({
  usa: '"United States"',
  mexico: 'Mexico',
  bahamas: 'Bahamas',
  serbia: 'Serbia',
  turkey: '(Turkey OR Türkiye)',
  egypt: 'Egypt',
  uzbekistan: 'Uzbekistan',
  vietnam: 'Vietnam',
  senegal: 'Senegal',
  cotedivoire: '("Côte d’Ivoire" OR "Cote d Ivoire" OR "Ivory Coast")',
  benin: 'Benin',
  angola: 'Angola',
  kenya: 'Kenya',
  tanzania: 'Tanzania',
  ethiopia: 'Ethiopia'
});

const RISK_TERMS = '(election OR parliament OR president OR government OR protest OR coup OR conflict OR debt OR default OR restructuring OR rating OR IMF OR sanctions OR "central bank" OR inflation)';
export const TIMELINE_TERMS = '(coup OR "coup attempt" OR default OR restructuring OR invasion OR war OR "peace agreement" OR constitution OR "regime change" OR "state of emergency")';

const sleep = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));

function normaliseDate(value) {
  if (!value) return null;
  const match = String(value).match(/^(\d{4})(\d{2})(\d{2})T?(\d{2})?(\d{2})?/);
  if (!match) {
    const parsed = new Date(value);
    return Number.isNaN(parsed.valueOf()) ? null : parsed.toISOString();
  }
  const [, year, month, day, hour = "00", minute = "00"] = match;
  return `${year}-${month}-${day}T${hour}:${minute}:00Z`;
}

function cleanUrl(value) {
  try {
    const url = new URL(value);
    for (const key of [...url.searchParams.keys()]) {
      if (/^(utm_|fbclid|gclid)/i.test(key)) url.searchParams.delete(key);
    }
    return url.toString();
  } catch {
    return null;
  }
}

function normaliseArticle(article) {
  const url = cleanUrl(article.url);
  const publishedAt = normaliseDate(article.seendate || article.date);
  const title = String(article.title || "").replace(/\s+/g, " ").trim();
  if (!url || !publishedAt || !title) return null;
  return {
    id: Buffer.from(url).toString("base64url").slice(0, 24),
    title,
    url,
    domain: String(article.domain || new URL(url).hostname).replace(/^www\./, ""),
    publishedAt,
    sourceCountry: String(article.sourcecountry || "").trim(),
    language: String(article.language || "").trim()
  };
}

export async function fetchGdelt(countryKey, { timespan = "2d", maxrecords = 12, timelineOnly = false } = {}) {
  const countryQuery = COUNTRY_QUERIES[countryKey];
  if (!countryQuery) throw new Error(`No GDELT query configured for ${countryKey}`);
  const query = `${countryQuery} AND ${timelineOnly ? TIMELINE_TERMS : RISK_TERMS} sourcelang:english`;
  const url = new URL(API_URL);
  url.searchParams.set("query", query);
  url.searchParams.set("mode", "ArtList");
  url.searchParams.set("maxrecords", String(maxrecords));
  url.searchParams.set("format", "json");
  url.searchParams.set("sort", "DateDesc");
  url.searchParams.set("timespan", timespan);

  let lastError;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: { "user-agent": "CountryCalendar/1.0 (scheduled public-interest risk monitor)" },
        signal: AbortSignal.timeout(30000)
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const payload = await response.json();
      const seen = new Set();
      return (payload.articles || [])
        .map(normaliseArticle)
        .filter(Boolean)
        .filter(article => {
          if (seen.has(article.url)) return false;
          seen.add(article.url);
          return true;
        });
    } catch (error) {
      lastError = error;
      if (attempt < 3) await sleep(attempt * 2500);
    }
  }
  throw new Error(`GDELT request failed for ${countryKey}: ${lastError?.message || "unknown error"}`);
}

export async function mapWithGentleRateLimit(keys, operation) {
  const output = {};
  for (const key of keys) {
    output[key] = await operation(key);
    await sleep(1100);
  }
  return output;
}
