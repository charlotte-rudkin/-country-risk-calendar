import { DEFAULT_COUNTRY_BUNDLE_COUNT, rotatingFallbackKeys, selectCountryBundle } from "./news-bundles.mjs";

const countries = Array.from({ length: 197 }, (_, index) => `country-${index + 1}`);
const bundles = Array.from({ length: DEFAULT_COUNTRY_BUNDLE_COUNT }, (_, index) => (
  selectCountryBundle(countries, index, DEFAULT_COUNTRY_BUNDLE_COUNT)
));
const flattened = bundles.flat();
if (flattened.length !== 197 || new Set(flattened).size !== 197) {
  throw new Error("The 24 bundles do not cover all 197 countries exactly once");
}
if (Math.max(...bundles.map(bundle => bundle.length)) > 9 || Math.min(...bundles.map(bundle => bundle.length)) < 8) {
  throw new Error("A 197-country schedule should contain eight or nine countries per hourly bundle");
}

const thin = ["a", "b", "c", "d"];
const first = [...rotatingFallbackKeys(thin, 2, 0)];
const second = [...rotatingFallbackKeys(thin, 2, 2)];
if (first.join(",") !== "a,b" || second.join(",") !== "c,d") {
  throw new Error("Thin-feed fallback rotation is not deterministic");
}

console.log("Country news-bundle test passed: 197 countries covered once across 24 balanced batches.");
