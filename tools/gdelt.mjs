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

const COUNTRY_IDENTITIES = Object.freeze({
  usa: { anchor: /United States|\bU\.?S\.?A?\b|American|Trump|Federal Reserve|\bFed\b|US Treasury|Congress|Washington/i },
  mexico: { anchor: /\bMexico\b|Mexican|Sheinbaum|Banxico|Pemex|Mexico City/i, exclude: /New Mexico/i },
  bahamas: { anchor: /Bahamas|Bahamian|Nassau|Philip Davis/i },
  serbia: { anchor: /Serbia|Serbian|Belgrade|Vu[cč]i[cć]/i },
  turkey: { anchor: /T[uü]rkiye|\bTurkey\b|Turkish|Erdo[gğ]an|Ankara/i, strong: /T[uü]rkiye|Turkish|Erdo[gğ]an|Ankara/i, exclude: /Thanksgiving|turkey farm|turkey meat|poultry|avian flu/i },
  egypt: { anchor: /Egypt|Egyptian|Cairo|Sisi/i },
  uzbekistan: { anchor: /Uzbekistan|Uzbek|Tashkent|Mirziyoyev/i },
  vietnam: { anchor: /Vietnam|Vietnamese|Hanoi|T[oô] L[aâ]m/i },
  senegal: { anchor: /Senegal|Senegalese|Dakar|Bassirou Diomaye Faye|Ousmane Sonko/i },
  cotedivoire: { anchor: /C[oô]te d.?Ivoire|Ivory Coast|Ivorian|Abidjan|Ouattara/i },
  benin: {
    anchor: /\bBenin\b|Beninese|Cotonou|Porto-Novo|Patrice Talon|Romuald Wadagni/i,
    strong: /Beninese|Cotonou|Porto-Novo|Patrice Talon|Romuald Wadagni|Benin.{0,18}Nigeria|Nigeria.{0,18}Benin/i,
    exclude: /Benin City|Edo State|\bAtiku\b|\bTinubu\b|Nigerian|\bNigeria\b|\bnaira\b|\bN\s?[0-9,]{3,}/i
  },
  angola: {
    anchor: /\bAngola\b|Angolan|Luanda|Louren[cç]o|Banco Nacional de Angola/i,
    strong: /Angolan|Luanda|Louren[cç]o|Banco Nacional de Angola/i,
    exclude: /Angola Prison|Louisiana State Penitentiary|Angola Rodeo|Angola, Indiana|Louisiana.{0,30}(prison|rodeo)|(prison|rodeo).{0,30}Louisiana/i
  },
  kenya: { anchor: /Kenya|Kenyan|Nairobi|William Ruto|Central Bank of Kenya/i },
  tanzania: { anchor: /Tanzania|Tanzanian|Dodoma|Dar es Salaam|Samia Suluhu/i },
  ethiopia: { anchor: /Ethiopia|Ethiopian|Addis Ababa|Abiy Ahmed/i }
});

// GDELT's repeat operator evaluates article text, even though the ArtList
// response only returns metadata. These deliberately require both repeated
// country naming and a second country-specific identity anchor. They are used
// only when the stricter headline route produces a thin result set.
const COUNTRY_BODY_FALLBACKS = Object.freeze({
  usa: '(repeat2:"United States" AND (American OR Washington OR "Federal Reserve" OR "US Treasury" OR Congress))',
  mexico: '(repeat2:Mexico AND (Mexican OR Sheinbaum OR Banxico OR Pemex OR "Mexico City"))',
  bahamas: '(repeat2:Bahamas AND (Bahamian OR Nassau OR "Philip Davis"))',
  serbia: '(repeat2:Serbia AND (Serbian OR Belgrade OR Vucic))',
  turkey: '((repeat2:Turkey OR repeat2:Türkiye) AND (Turkish OR Erdogan OR Ankara))',
  egypt: '(repeat2:Egypt AND (Egyptian OR Cairo OR Sisi))',
  uzbekistan: '(repeat2:Uzbekistan AND (Uzbek OR Tashkent OR Mirziyoyev))',
  vietnam: '(repeat2:Vietnam AND (Vietnamese OR Hanoi OR "To Lam"))',
  senegal: '(repeat2:Senegal AND (Senegalese OR Dakar OR "Bassirou Diomaye Faye" OR "Ousmane Sonko"))',
  cotedivoire: '((repeat2:"Ivory Coast" OR repeat2:"Cote d Ivoire") AND (Ivorian OR Abidjan OR Ouattara))',
  benin: '(repeat2:Benin AND (Beninese OR Cotonou OR "Porto-Novo" OR "Patrice Talon" OR "Romuald Wadagni"))',
  angola: '(repeat2:Angola AND (Angolan OR Luanda OR Lourenco OR "Banco Nacional de Angola"))',
  kenya: '(repeat2:Kenya AND (Kenyan OR Nairobi OR "William Ruto" OR "Central Bank of Kenya"))',
  tanzania: '(repeat2:Tanzania AND (Tanzanian OR Dodoma OR "Dar es Salaam" OR "Samia Suluhu"))',
  ethiopia: '(repeat2:Ethiopia AND (Ethiopian OR "Addis Ababa" OR "Abiy Ahmed"))'
});

export function articleMatchesCountry(countryKey, title) {
  const identity = COUNTRY_IDENTITIES[countryKey];
  if (!identity || typeof title !== "string") return false;
  if (identity.strong?.test(title)) return true;
  if (!identity.anchor.test(title)) return false;
  return !identity.exclude?.test(title);
}

export function storedArticleMatchesCountry(countryKey, article) {
  if (!article || typeof article !== "object") return false;
  if (articleMatchesCountry(countryKey, article.title)) return true;
  if (article.relevanceBasis !== "repeated-country-body") return false;
  const identity = COUNTRY_IDENTITIES[countryKey];
  return !identity?.exclude?.test(article.title);
}

const RISK_TERMS = '(election OR parliament OR president OR government OR opposition OR protest OR coup OR conflict OR security OR debt OR default OR restructuring OR rating OR IMF OR sanctions OR FATF OR "central bank" OR inflation OR currency OR reserves OR banking OR budget OR fiscal OR oil OR investment OR arrears OR "missed payment" OR refinancing OR liquidity OR "financing gap" OR "bond yield" OR "credit spread" OR "debt auction" OR "capital controls" OR devaluation OR "foreign exchange shortage" OR SOE OR "state-owned" OR bailout OR guarantee OR subsidy OR creditor OR waiver)';
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

function normaliseArticle(article, relevanceBasis = "country-headline") {
  const url = cleanUrl(article.url);
  const publishedAt = normaliseDate(article.seendate || article.date);
  const title = String(article.title || "").replace(/\s+/g, " ").trim();
  // The dashboard is served over HTTPS. Drop legacy HTTP publisher links rather
  // than weakening validation or guessing that the publisher supports TLS.
  if (!url || !url.startsWith("https://") || !publishedAt || !title) return null;
  return {
    id: Buffer.from(url).toString("base64url").slice(0, 24),
    title,
    url,
    domain: String(article.domain || new URL(url).hostname).replace(/^www\./, ""),
    publishedAt,
    sourceCountry: String(article.sourcecountry || "").trim(),
    language: String(article.language || "").trim(),
    relevanceBasis
  };
}


async function requestArticles(query, { timespan, maxrecords, relevanceBasis }) {
  const url = new URL(API_URL);
  url.searchParams.set("query", query);
  url.searchParams.set("mode", "ArtList");
  url.searchParams.set("maxrecords", String(maxrecords));
  url.searchParams.set("format", "json");
  url.searchParams.set("sort", "DateDesc");
  url.searchParams.set("timespan", timespan);

  const response = await fetch(url, {
    headers: { "user-agent": "CountryCalendar/1.0 (scheduled public-interest risk monitor)" },
    signal: AbortSignal.timeout(30000)
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const payload = await response.json();
  return (payload.articles || []).map(article => normaliseArticle(article, relevanceBasis)).filter(Boolean);
}

export async function fetchGdelt(countryKey, { timespan = "2d", maxrecords = 12, timelineOnly = false } = {}) {
  const countryQuery = COUNTRY_QUERIES[countryKey];
  if (!countryQuery) throw new Error(`No GDELT query configured for ${countryKey}`);
  const query = `${countryQuery} AND ${timelineOnly ? TIMELINE_TERMS : RISK_TERMS} sourcelang:english`;

  let lastError;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const primary = await requestArticles(query, { timespan, maxrecords, relevanceBasis: "country-headline" });
      const headlineMatches = primary.filter(article => articleMatchesCountry(countryKey, article.title));
      let fallbackMatches = [];

      // Avoid doubling routine API traffic where headline coverage is already
      // healthy. Thin country feeds get a second search that enforces repeated
      // country mentions and a separate local identity signal in article text.
      if (!timelineOnly && headlineMatches.length < 6 && COUNTRY_BODY_FALLBACKS[countryKey]) {
        await sleep(1100);
        const fallbackQuery = `${COUNTRY_BODY_FALLBACKS[countryKey]} AND ${RISK_TERMS} sourcelang:english`;
        fallbackMatches = await requestArticles(fallbackQuery, {
          timespan,
          maxrecords: Math.min(15, maxrecords),
          relevanceBasis: "repeated-country-body"
        });
        const identity = COUNTRY_IDENTITIES[countryKey];
        fallbackMatches = fallbackMatches.filter(article => !identity.exclude?.test(article.title));
      }

      const seen = new Set();
      return [...headlineMatches, ...fallbackMatches]
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
