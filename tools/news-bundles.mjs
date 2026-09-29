export const DEFAULT_COUNTRY_BUNDLE_COUNT = 24;

export function selectCountryBundle(countryKeys, bundleIndex, bundleCount = DEFAULT_COUNTRY_BUNDLE_COUNT) {
  const count = Number(bundleCount);
  const index = Number(bundleIndex);
  if (!Number.isInteger(count) || count < 1) throw new Error("Country bundle count must be a positive integer");
  if (!Number.isInteger(index) || index < 0 || index >= count) throw new Error(`Country bundle index must be between 0 and ${count - 1}`);
  return countryKeys.filter((_, position) => position % count === index);
}

export function rotatingFallbackKeys(countryKeys, limit = 2, rotation = 0) {
  if (!countryKeys.length || limit <= 0) return new Set();
  const start = ((Number(rotation) || 0) % countryKeys.length + countryKeys.length) % countryKeys.length;
  const selected = [];
  for (let offset = 0; offset < Math.min(limit, countryKeys.length); offset += 1) {
    selected.push(countryKeys[(start + offset) % countryKeys.length]);
  }
  return new Set(selected);
}
