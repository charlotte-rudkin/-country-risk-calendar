import { JURISDICTIONS } from "./jurisdictions.mjs";

const targets = Object.values(JURISDICTIONS).sort((left, right) => left.iso3.localeCompare(right.iso3));
if (targets.length !== 197) throw new Error(`Expected 197 jurisdictions; found ${targets.length}`);

for (const bundleCount of [13, 24]) {
  const bundles = Array.from({ length: bundleCount }, (_, bundleIndex) =>
    targets.filter((_, index) => index % bundleCount === bundleIndex)
  );
  const flattened = bundles.flat();
  if (flattened.length !== 197 || new Set(flattened.map(target => target.iso3)).size !== 197) {
    throw new Error(`${bundleCount}-bundle economic schedule does not cover all 197 jurisdictions exactly once`);
  }
  if (bundles.some(bundle => !bundle.length)) throw new Error(`${bundleCount}-bundle economic schedule contains an empty bundle`);
}

for (const target of targets) {
  if (!/^[A-Z]{3}$/.test(target.iso3)) throw new Error(`Invalid ISO3 code: ${target.iso3}`);
  if (!/^(af|as|eu|na|sa|oc)[a-z]{3}$/.test(target.oecId)) throw new Error(`Invalid OEC identifier for ${target.iso3}: ${target.oecId}`);
}

console.log("Economic bundle test passed: 197 ISO3/OEC targets covered exactly once in 13- and 24-bundle schedules.");
