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

// Material developments at these sovereign-owned or sovereign-linked entities
// can transmit directly to public finances, external liquidity or government
// contingent liabilities. Keep aliases specific enough to avoid matching
// unrelated companies in other countries.
export const COUNTRY_STRATEGIC_ENTITIES = Object.freeze({
  usa: ["Fannie Mae", "Freddie Mac", "US Postal Service"],
  mexico: ["Pemex", "Comision Federal de Electricidad", "CFE Mexico", "Banobras", "Nafin"],
  bahamas: ["Bahamas Power and Light", "Bahamasair", "Water and Sewerage Corporation Bahamas"],
  serbia: ["Elektroprivreda Srbije", "Srbijagas", "Air Serbia"],
  turkey: ["BOTAS", "Turkish Petroleum Corporation", "Turkiye Varlik Fonu", "Ziraat Bank", "Halkbank"],
  egypt: ["Egyptian General Petroleum Corporation", "Egyptian Natural Gas Holding Company", "Suez Canal Authority", "National Bank of Egypt"],
  uzbekistan: ["Uzbekneftegaz", "Navoi Mining", "Uzbekistan Airways", "National Bank of Uzbekistan"],
  vietnam: ["PetroVietnam", "Vietnam Electricity", "Vinacomin", "Vietnam Airlines", "Agribank Vietnam"],
  senegal: ["Petrosen", "Senelec", "Air Senegal", "Societe Africaine de Raffinage"],
  cotedivoire: ["PETROCI", "CI-Energies", "Societe Ivoirienne de Raffinage", "Port Autonome d'Abidjan"],
  benin: ["Societe Beninoise d'Energie Electrique", "SBEE Benin", "Port Autonome de Cotonou", "Benin Electricity Production Company"],
  angola: ["Sonangol", "TAAG Angola Airlines", "Endiama", "Banco de Poupanca e Credito", "ENDE Angola"],
  kenya: ["Kenya Power", "Kenya Airways", "KenGen", "Kenya Railways"],
  tanzania: ["TANESCO", "Air Tanzania", "Tanzania Railways Corporation", "Tanzania Petroleum Development Corporation"],
  ethiopia: ["Ethiopian Airlines", "Ethio Telecom", "Ethiopian Electric Power", "Commercial Bank of Ethiopia"]
});

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const STRATEGIC_ENTITY_PATTERNS = Object.freeze(Object.fromEntries(
  Object.entries(COUNTRY_STRATEGIC_ENTITIES).map(([key, entities]) => [
    key,
    new RegExp(entities.map(escapeRegex).join("|"), "i")
  ])
));

function entityQuery(countryKey) {
  return (COUNTRY_STRATEGIC_ENTITIES[countryKey] || [])
    .map(entity => `"${entity.replaceAll('"', '\\"')}"`)
    .join(" OR ");
}

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
  usa: '("United States" AND repeat2:American AND (Washington OR "Federal Reserve" OR "US Treasury" OR Congress))',
  mexico: '(repeat2:Mexico AND (Mexican OR Sheinbaum OR Banxico OR Pemex OR "Mexico City"))',
  bahamas: '(repeat2:Bahamas AND (Bahamian OR Nassau OR "Philip Davis"))',
  serbia: '(repeat2:Serbia AND (Serbian OR Belgrade OR Vucic))',
  turkey: '(repeat2:Turkish AND (Turkey OR Türkiye OR Erdogan OR Ankara))',
  egypt: '(repeat2:Egypt AND (Egyptian OR Cairo OR Sisi))',
  uzbekistan: '(repeat2:Uzbekistan AND (Uzbek OR Tashkent OR Mirziyoyev))',
  vietnam: '(repeat2:Vietnam AND (Vietnamese OR Hanoi OR "To Lam"))',
  senegal: '(repeat2:Senegal AND (Senegalese OR Dakar OR "Bassirou Diomaye Faye" OR "Ousmane Sonko"))',
  cotedivoire: '("Ivory Coast" AND repeat2:Ivorian AND (Abidjan OR Ouattara))',
  benin: '(repeat2:Benin AND (Beninese OR Cotonou OR "Porto-Novo" OR "Patrice Talon" OR "Romuald Wadagni"))',
  angola: '(repeat2:Angola AND (Angolan OR Luanda OR Lourenco OR "Banco Nacional de Angola"))',
  kenya: '(repeat2:Kenya AND (Kenyan OR Nairobi OR "William Ruto" OR "Central Bank of Kenya"))',
  tanzania: '(repeat2:Tanzania AND (Tanzanian OR Dodoma OR "Dar es Salaam" OR "Samia Suluhu"))',
  ethiopia: '(repeat2:Ethiopia AND (Ethiopian OR "Addis Ababa" OR "Abiy Ahmed"))'
});

const RISK_HEADLINE_PATTERN = /election|referendum|parliament|president|prime minister|cabinet reshuffle|government|opposition|coalition|impeachment|no.confidence|martial law|state of emergency|constitutional crisis|succession|protest|riot|coup|conflict|insurgency|militia|terroris|attack|unrest|general strike|strike|curfew|border clash|border crossing|military mobili[sz]ation|ceasefire|peace talks|debt|default|restructur|rating|downgrade|upgrade|outlook|creditwatch|debt distress|debt relief|debt suspension|sovereign bond|IMF|World Bank|FATF|sanction|blacklist|grey list|export control|asset freeze|travel ban|embargo|central bank|inflation|currency|reserve|banking|interest rate|policy rate|monetary policy|exchange rate|stock market|bank run|deposit freeze|budget|fiscal|GDP|public spending|austerity|tax reform|subsidy cut|wage bill|pension reform|growth|recession|economic outlook|economic diversification|non-oil activity|unemployment|cost of living|informal economy|industrial output|manufacturing PMI|current account|trade deficit|tariff|export ban|import restriction|trade agreement|customs|supply chain disruption|remittance|oil|offshore|fuel shortage|gas|LNG|mining|commodity price|OPEC|power outage|energy crisis|renewable project|investment|share sale|stake sale|divestment|foreign direct investment|acquisition|joint venture|IPO|asset sale|arrears|missed payment|refinanc|liquidity|financing gap|cash crunch|payment delay|bridge loan|bond yield|credit spread|debt auction|eurobond|syndicated loan|debt swap|Paris Club|London Club|capital control|devalu|foreign.exchange shortage|dollar shortage|black market rate|currency peg|\bSOE\b|state-owned|bailout|guarantee|subsidy|contingent liabilit|parastatal loss|creditor|corruption|fraud|embezzlement|money laundering|investigation|audit|asset seizure|privati[sz]|nationali[sz]|expropriation|concession|licen[cs]e revocation|blackout|drought|flood|earthquake|cyclone|hurricane|wildfire|landslide|infrastructure collapse|dam failure|arbitration|ICSID|litigation|contract dispute|regulatory change|licen[cs]e suspension|court ruling|constitutional court|supreme court|epidemic|outbreak|humanitarian crisis|food insecurity|famine|refugee crisis|displacement|cyberattack|data breach|critical infrastructure attack|pipeline attack|grid attack/i;
const OFF_TOPIC_HEADLINE_PATTERN = /travel advice|travel warning|travel guide|safe for (?:tourists|expats|visitors)|expat|holiday|vacation|cruise|hotel|resort|beach|tourism tips|things to do|where to stay|food guide|recipe|football|soccer|celebrity|working paper|clean energy|renewable energy|renewable project|clean energy award|sustainability award|\bCSR\b|corporate social responsibility|healthcare access|marine fisher|fisheries|agrifood|agri-food|agricultural transformation|biodiversity|conservation|wildlife|national geographic/i;
const HARD_SOVEREIGN_OVERRIDE_PATTERN = /debt|default|restructur|rating|outlook|creditwatch|IMF|sanction|FATF|central bank|monetary policy|policy rate|inflation|currency|reserve|budget|fiscal|deficit|arrears|refinanc|bond|capital control|foreign exchange|coup|election|parliament|government collapse|state of emergency|government guarantee|sovereign guarantee|state support|public financ|contingent liabilit|subsidy cut|national emergency|humanitarian crisis|food insecurity|famine|refugee crisis|mass displacement/i;
const PROBATIONARY_HEADLINE_PATTERN = /renewable project|epidemic|outbreak|humanitarian crisis|food insecurity|famine|refugee crisis|displacement/i;
const PROBATIONARY_MATERIAL_CONTEXT_PATTERN = /sovereign|government|state|public financ|budget|fiscal|debt|guarantee|subsidy|contingent liabilit|national emergency|state of emergency|WHO|health ministry|deaths?|fatal|cases.{0,20}(surge|rise)|border closure|humanitarian crisis|food insecurity|famine|refugee crisis|mass displacement/i;
const ENTITY_RISK_HEADLINE_PATTERN = /debt|default|restructur|refinanc|bond|loan|creditor|arrears|missed payment|loss|profit warning|liquidity|capital injection|recapital|bailout|rescue|government support|state support|guarantee|contingent liabilit|privati[sz]|nationali[sz]|asset sale|stake sale|governance|corruption|fraud|sanction|investigation|production.{0,25}(fall|drop|cut|halt|suspend)|output.{0,25}(fall|drop|cut)|shutdown|outage|strike|insolv|bankrupt|downgrade|rating|tariff|subsidy|fiscal|budget/i;

export function matchesMaterialStrategicEntityHeadline(countryKey, title) {
  const text = String(title || "");
  return Boolean(STRATEGIC_ENTITY_PATTERNS[countryKey]?.test(text)) && ENTITY_RISK_HEADLINE_PATTERN.test(text);
}

export function scoreCountryRelevance(countryKey, article) {
  const identity = COUNTRY_IDENTITIES[countryKey];
  const title = String(article?.title || "");
  const basis = article?.relevanceBasis || "country-headline";
  if (!identity || !title) return { accepted: false, relevanceScore: 0, relevanceReasons: ["Missing country identity or title"] };

  const reasons = [];
  const entityMatch = Boolean(STRATEGIC_ENTITY_PATTERNS[countryKey]?.test(title));
  const entityRisk = matchesMaterialStrategicEntityHeadline(countryKey, title);
  const strongMatch = Boolean(identity.strong?.test(title));
  const headlineMatch = identity.anchor.test(title);
  const conflictingIdentity = Boolean(identity.exclude?.test(title)) && !strongMatch;
  const probationaryTopic = PROBATIONARY_HEADLINE_PATTERN.test(title);
  const probationaryQualified = !probationaryTopic || PROBATIONARY_MATERIAL_CONTEXT_PATTERN.test(title);
  const riskHeadline = RISK_HEADLINE_PATTERN.test(title) && probationaryQualified;
  const offTopic = OFF_TOPIC_HEADLINE_PATTERN.test(title) && !HARD_SOVEREIGN_OVERRIDE_PATTERN.test(title);
  let score = 0;

  if (strongMatch) {
    score += 6;
    reasons.push("Strong country-specific headline anchor");
  } else if (headlineMatch) {
    score += 5;
    reasons.push("Country identity in headline");
  }
  if (entityMatch) {
    score += 6;
    reasons.push("Country-specific strategic SOE/entity in headline");
  }
  if (basis === "repeated-country-body") {
    score += 3;
    reasons.push("Country repeated in indexed article text");
    score += 3;
    reasons.push("Second country-specific identity anchor");
  }
  if (basis === "official-country-source") {
    score += 6;
    reasons.push("Country-specific official source");
  }
  if (riskHeadline) {
    score += 2;
    reasons.push("Sovereign-risk topic in headline");
  } else if (basis !== "official-country-source") {
    reasons.push("No explicit sovereign-risk topic in headline");
  }
  if (probationaryTopic && !probationaryQualified) {
    reasons.push("Probationary renewable or health topic lacks a material sovereign context");
  }
  if (entityRisk) {
    score += 2;
    reasons.push("Material SOE or contingent-liability trigger in headline");
  }
  if (offTopic) {
    score -= 10;
    reasons.push("Travel, lifestyle or non-sovereign sector content");
  }
  if (conflictingIdentity) {
    score -= 10;
    reasons.push("Conflicting or ambiguous country identity");
  }

  return {
    accepted: score >= 6 && !conflictingIdentity && !offTopic && (
      basis === "official-country-source"
      || (entityMatch && entityRisk)
      || (headlineMatch && riskHeadline)
      || (basis === "repeated-country-body" && riskHeadline)
    ),
    relevanceScore: Math.max(0, score),
    relevanceReasons: reasons
  };
}

export function articleMatchesCountry(countryKey, title) {
  return scoreCountryRelevance(countryKey, { title, relevanceBasis: "country-headline" }).accepted;
}

export function storedArticleMatchesCountry(countryKey, article) {
  return scoreCountryRelevance(countryKey, article).accepted;
}

export const GDELT_RISK_QUERY_TERMS = Object.freeze([
  "election", "referendum", "parliament", "president", "prime minister", "cabinet reshuffle", "government", "opposition", "coalition", "impeachment", "no-confidence vote", "martial law", "state of emergency", "constitutional crisis", "succession",
  "protest", "riot", "coup", "conflict", "insurgency", "militia", "terrorism", "attack", "unrest", "strike", "general strike", "curfew", "border clash", "border crossing", "military mobilisation", "ceasefire", "peace talks",
  "debt", "default", "restructuring", "rating", "downgrade", "upgrade", "rating outlook", "debt distress", "debt relief", "debt suspension", "sovereign bond",
  "IMF", "World Bank", "FATF", "sanctions", "blacklist", "grey list", "export controls", "asset freeze", "travel ban", "embargo",
  "central bank", "inflation", "currency", "reserves", "banking", "interest rate", "policy rate", "monetary policy", "exchange rate", "stock market", "bank run", "deposit freeze",
  "budget", "fiscal", "GDP", "public spending", "austerity", "tax reform", "subsidy cut", "wage bill", "pension reform",
  "growth", "recession", "economic outlook", "economic diversification", "non-oil activity", "unemployment", "cost of living", "informal economy", "industrial output", "manufacturing PMI",
  "current account", "trade deficit", "tariff", "export ban", "import restrictions", "trade agreement", "customs", "supply chain disruption", "remittances",
  "oil", "offshore", "fuel shortage", "gas", "LNG", "mining", "commodity price", "OPEC", "power outage", "energy crisis", "renewable project",
  "investment", "share sale", "stake sale", "divestment", "foreign direct investment", "acquisition", "joint venture", "IPO", "asset sale",
  "arrears", "missed payment", "refinancing", "liquidity", "financing gap", "cash crunch", "payment delay", "bridge loan",
  "bond yield", "credit spread", "debt auction", "eurobond", "syndicated loan", "debt swap", "Paris Club", "London Club",
  "capital controls", "devaluation", "foreign-exchange shortage", "dollar shortage", "black market rate", "currency peg",
  "SOE", "state-owned", "bailout", "guarantee", "subsidy", "contingent liability", "parastatal losses",
  "creditor", "corruption", "fraud", "embezzlement", "money laundering", "investigation", "audit", "asset seizure",
  "privatisation", "nationalisation", "expropriation", "concession", "license revocation",
  "blackout", "drought", "flood", "earthquake", "cyclone", "hurricane", "wildfire", "landslide", "infrastructure collapse", "dam failure",
  "arbitration", "ICSID", "litigation", "contract dispute", "regulatory change", "license suspension", "court ruling", "constitutional court", "supreme court",
  "epidemic", "outbreak", "humanitarian crisis", "food insecurity", "famine", "refugee crisis", "displacement",
  "cyberattack", "data breach", "critical infrastructure attack", "pipeline attack", "grid attack"
]);

const RISK_TERMS = `(${GDELT_RISK_QUERY_TERMS
  .map(term => term.includes(" ") ? `"${term}"` : term)
  .join(" OR ")})`;
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
  if (!response.ok) {
    const error = new Error(`HTTP ${response.status}`);
    error.status = response.status;
    error.retryAfter = Number(response.headers.get("retry-after")) || 0;
    throw error;
  }
  const responseText = await response.text();
  let payload;
  try {
    payload = JSON.parse(responseText);
  } catch {
    throw new Error(`GDELT returned a non-JSON response: ${responseText.slice(0, 100).replace(/\s+/g, " ")}`);
  }
  return (payload.articles || []).map(article => normaliseArticle(article, relevanceBasis)).filter(Boolean);
}

export async function fetchGdelt(countryKey, { timespan = "2d", maxrecords = 12, timelineOnly = false, allowFallback = true } = {}) {
  const countryQuery = COUNTRY_QUERIES[countryKey];
  if (!countryQuery) throw new Error(`No GDELT query configured for ${countryKey}`);
  const entities = timelineOnly ? "" : entityQuery(countryKey);
  const searchIdentity = entities ? `(${countryQuery} OR (${entities}))` : countryQuery;
  const query = `${searchIdentity} AND ${timelineOnly ? TIMELINE_TERMS : RISK_TERMS} sourcelang:english`;

  let lastError;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const primary = await requestArticles(query, { timespan, maxrecords, relevanceBasis: "country-or-strategic-entity-headline" });
      const primaryAssessed = primary.map(article => ({ article, assessment: scoreCountryRelevance(countryKey, article) }));
      const headlineMatches = primaryAssessed
        .filter(item => item.assessment.accepted)
        .map(item => ({ ...item.article, ...item.assessment }));
      let fallbackMatches = [];
      let fallbackRetrievedCount = 0;
      const rejected = primaryAssessed
        .filter(item => !item.assessment.accepted)
        .map(item => ({ ...item.article, rejectionReason: item.assessment.relevanceReasons.join("; ") || "Insufficient country evidence" }));

      // Avoid doubling routine API traffic where headline coverage is already
      // healthy. Thin country feeds get a second search that enforces repeated
      // country mentions and a separate local identity signal in article text.
      if (allowFallback && !timelineOnly && headlineMatches.length < 4 && COUNTRY_BODY_FALLBACKS[countryKey]) {
        await sleep(3500);
        const fallbackQuery = `${COUNTRY_BODY_FALLBACKS[countryKey]} AND ${RISK_TERMS} sourcelang:english`;
        try {
          const fallback = await requestArticles(fallbackQuery, {
            timespan,
            maxrecords: Math.min(10, maxrecords),
            relevanceBasis: "repeated-country-body"
          });
          fallbackRetrievedCount = fallback.length;
          const fallbackAssessed = fallback.map(article => ({ article, assessment: scoreCountryRelevance(countryKey, article) }));
          fallbackMatches = fallbackAssessed
            .filter(item => item.assessment.accepted)
            .map(item => ({ ...item.article, ...item.assessment }));
          rejected.push(...fallbackAssessed
            .filter(item => !item.assessment.accepted)
            .map(item => ({ ...item.article, rejectionReason: item.assessment.relevanceReasons.join("; ") || "Insufficient country evidence" })));
        } catch (error) {
          // The body-search route improves thin feeds but must never discard a
          // successful headline result or fail the whole scheduled refresh.
          console.warn(`Optional repeated-mention search skipped for ${countryKey}: ${error.message}`);
        }
      }

      const seen = new Set();
      const results = [...headlineMatches, ...fallbackMatches]
        .filter(article => {
          if (seen.has(article.url)) return false;
          seen.add(article.url);
          return true;
        });
      Object.defineProperty(results, "audit", {
        value: {
          retrieved: primary.length + fallbackRetrievedCount,
          accepted: results.length,
          rejected
        },
        enumerable: false
      });
      return results;
    } catch (error) {
      lastError = error;
      if (attempt < 3) {
        const retryDelay = Math.max(error.retryAfter * 1000, attempt * 10000);
        await sleep(retryDelay);
      }
    }
  }
  throw new Error(`GDELT request failed for ${countryKey}: ${lastError?.message || "unknown error"}`);
}

export async function mapWithGentleRateLimit(keys, operation) {
  const output = {};
  for (const key of keys) {
    output[key] = await operation(key);
    await sleep(4000);
  }
  return output;
}
