import { parseGoogleNewsFeed } from "./discovery-news.mjs";

const now = new Date().toUTCString();
const feed = `<?xml version="1.0"?><rss><channel>
  <item><title>Angola raises $228 million from Standard Bank unit share sale - TradingView</title><link>https://news.google.com/rss/articles/one</link><pubDate>${now}</pubDate><source url="https://www.tradingview.com/">TradingView</source></item>
  <item><title>Okavango Eternal runs five more years, with Angola aligned - Example</title><link>https://news.google.com/rss/articles/two</link><pubDate>${now}</pubDate><source url="https://example.com/">Example</source></item>
</channel></rss>`;

const parsed = parseGoogleNewsFeed(feed, "angola");
if (parsed.length !== 1) throw new Error(`Expected one relevant recent-news result, got ${parsed.length}`);
if (!parsed[0].title.includes("share sale") || parsed[0].domain !== "tradingview.com") {
  throw new Error("Recent-news result was not normalised correctly");
}
console.log("Recent country-news discovery test passed.");
