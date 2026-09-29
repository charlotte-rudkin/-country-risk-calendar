import { articleMatchesCountry, scoreCountryRelevance, storedArticleMatchesCountry } from "./gdelt.mjs";

const cases = [
  ["benin", "Atiku: N70,000 minimum wage buys just 50 litres as fuel costs soar", false],
  ["benin", "Benin City businesses struggle with Nigerian fuel costs", false],
  ["benin", "Benin and Nigeria reopen key border crossing", true],
  ["benin", "Cotonou unveils revised 2027 budget framework", true],
  ["angola", "Annual Angola Prison Rodeo opens in Louisiana", false],
  ["angola", "Banco Nacional de Angola cuts policy rate", true],
  ["mexico", "New Mexico legislature approves state budget", false],
  ["mexico", "Banxico cuts its policy rate", true],
  ["turkey", "Turkey meat prices rise before Thanksgiving", false],
  ["turkey", "Türkiye inflation slows as central bank holds", true],
  ["bahamas", "Canada updates travel advice for the Bahamas", false],
  ["bahamas", "Is the Bahamas safe for expats?", false],
  ["angola", "Angola clean energy working paper published", false],
  ["senegal", "Senegal marine fisheries programme expands", false],
  ["kenya", "Kenya government launches agrifood transformation project", false],
  ["bahamas", "Bahamas government presents fiscal consolidation budget", true],
  ["angola", "Angola GDP growth slows as oil production falls", true],
  ["bahamas", "Hurricane causes widespread damage across the Bahamas", true],
  ["mexico", "Mexico supreme court blocks controversial reform", true],
  ["angola", "Sonangol debt rises as refinancing pressure builds", true],
  ["angola", "Sonangol sponsors international culture festival", false],
  ["kenya", "Kenya Airways seeks state support after widening losses", true],
  ["vietnam", "PetroVietnam launches community scholarship programme", false],
  ["angola", "Angola raises $228 million from Standard Bank unit share sale", true],
  ["angola", "Significant expansion in non-oil activity: new drivers of Angola's growth", true],
  ["angola", "Spotlight Angola, Gabon and Namibia as offshore deals expand", true],
  ["angola", "Okavango Eternal runs five more years, with Angola and Namibia aligned", false],
  ["angola", "Angola clean energy award recognises local company", false],
  ["angola", "Angola government guarantee backs $2 billion renewable project", true],
  ["kenya", "Kenya bank wins sustainability award for CSR programme", false],
  ["kenya", "Kenya programme expands healthcare access in rural counties", false],
  ["ethiopia", "Ethiopia food insecurity deepens into humanitarian crisis", true],
  ["mexico", "Mexico faces ICSID arbitration over cancelled concession", true],
  ["vietnam", "Vietnam grid attack triggers nationwide power outage", true],
  ["senegal", "Senegal reports isolated seasonal outbreak", false]
];

const failures = cases.filter(([country, title, expected]) => articleMatchesCountry(country, title) !== expected);
if (failures.length) {
  failures.forEach(([country, title, expected]) => console.error(`${country}: expected ${expected} for ${title}`));
  process.exit(1);
}
console.log(`Country relevance test passed: ${cases.length} ambiguity cases.`);

const storedCases = [
  ["benin", { title: "West African economy faces refinancing pressure", relevanceBasis: "repeated-country-body" }, true],
  ["benin", { title: "Atiku comments on Nigerian fuel prices", relevanceBasis: "country-headline" }, false],
  ["angola", { title: "Louisiana prison rodeo returns", relevanceBasis: "repeated-country-body" }, false]
];
const storedFailures = storedCases.filter(([country, article, expected]) => storedArticleMatchesCountry(country, article) !== expected);
if (storedFailures.length) {
  storedFailures.forEach(([country, article, expected]) => console.error(`${country}: expected ${expected} for stored ${article.title}`));
  process.exit(1);
}
console.log(`Stored relevance test passed: ${storedCases.length} qualification cases.`);

const scored = scoreCountryRelevance("benin", {
  title: "Regional debt pressures intensify",
  relevanceBasis: "repeated-country-body"
});
if (!scored.accepted || scored.relevanceScore !== 8 || scored.relevanceReasons.length !== 3) {
  console.error("Repeated country-body evidence did not produce the expected explainable score.");
  process.exit(1);
}
console.log("Explainable relevance score test passed.");
