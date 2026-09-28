import { fetchOfficialNews, parseFeed, parseHtmlArticles } from "./official-news.mjs";
import { scoreCountryRelevance } from "./gdelt.mjs";

const rssSource = { id: "test-rss", label: "Test Central Bank", url: "https://centralbank.example/feed.xml" };
const feed = `<?xml version="1.0"?><rss><channel><item>
  <title><![CDATA[Kenya central bank changes its policy rate]]></title>
  <link>https://centralbank.example/releases/rate?utm_source=feed</link>
  <pubDate>Sun, 27 Sep 2026 10:00:00 GMT</pubDate>
</item></channel></rss>`;
const feedArticles = parseFeed(feed, rssSource, "kenya");
if (feedArticles.length !== 1 || feedArticles[0].relevanceBasis !== "official-country-source") {
  throw new Error("RSS official-source parsing failed");
}

const htmlSource = { id: "test-html", label: "Test Finance Ministry", url: "https://finance.example/news/" };
const html = `<html><head><script type="application/ld+json">{
  "@context":"https://schema.org","@type":"NewsArticle",
  "headline":"Government publishes debt management strategy",
  "datePublished":"2026-09-26","url":"/news/debt-strategy"
}</script></head><body></body></html>`;
const htmlArticles = parseHtmlArticles(html, htmlSource, "angola");
if (htmlArticles.length !== 1 || htmlArticles[0].url !== "https://finance.example/news/debt-strategy") {
  throw new Error("HTML JSON-LD official-source parsing failed");
}

const relevance = scoreCountryRelevance("angola", htmlArticles[0]);
if (!relevance.accepted || relevance.relevanceScore < 6 || !relevance.relevanceReasons.includes("Country-specific official source")) {
  throw new Error("Country-specific official source did not qualify correctly");
}

console.log("Official news test passed: RSS, JSON-LD and country-source qualification.");

const originalFetch = globalThis.fetch;
const currentDate = new Date().toISOString().slice(0, 10);
const currentRssDate = new Date().toUTCString();
globalThis.fetch = async input => {
  const url = String(input);
  if (url.startsWith("https://search.worldbank.org/api/v3/wds")) {
    return new Response(JSON.stringify({ documents: {
      one: {
        display_title: "Kenya Public Finance Review",
        docdt: currentDate,
        url: "https://documents.worldbank.org/kenya-public-finance-review"
      }
    } }), { status: 200, headers: { "content-type": "application/json" } });
  }
  if (url === "https://www.imf.org/en/News/RSS") {
    return new Response('<html><head><link type="application/rss+xml" href="https://www.imf.org/news-feed.xml"></head></html>', { status: 200, headers: { "content-type": "text/html" } });
  }
  if (url === "https://www.imf.org/news-feed.xml") {
    return new Response(`<rss><channel><item><title>IMF Executive Board Concludes Kenya Article IV</title><link>https://www.imf.org/en/news/kenya-review</link><pubDate>${currentRssDate}</pubDate></item></channel></rss>`, { status: 200, headers: { "content-type": "application/rss+xml" } });
  }
  if (url.includes("centralbank.go.ke")) {
    return new Response(`<script type="application/ld+json">{"@type":"NewsArticle","headline":"Central Bank raises policy rate","datePublished":"${currentDate}","url":"https://www.centralbank.go.ke/rate-decision"}</script>`, { status: 200, headers: { "content-type": "text/html" } });
  }
  if (url.endsWith(".ashx") || url.endsWith(".xml")) {
    return new Response('<rss><channel></channel></rss>', { status: 200, headers: { "content-type": "application/rss+xml" } });
  }
  return new Response("<html></html>", { status: 200, headers: { "content-type": "text/html" } });
};

try {
  const integrated = await fetchOfficialNews(["kenya"], { days: 30 });
  if (integrated.countries.kenya.length !== 3) {
    throw new Error(`Expected three integrated Kenyan official items, got ${integrated.countries.kenya.length}`);
  }
  if (integrated.sourceStatus.some(source => source.status !== "ok")) {
    throw new Error("Mocked official-source orchestration reported a failure");
  }
} finally {
  globalThis.fetch = originalFetch;
}

console.log("Official source orchestration test passed: global, country and World Bank connectors.");
