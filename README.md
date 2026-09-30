# Country Dashboard

An update-safe, repository-backed dashboard for political-risk and sovereign-credit monitoring.

## Live-site workflow

This project is designed to be hosted from one GitHub repository rather than redistributed as replacement ZIP files. GitHub Pages publishes the root `index.html`; every approved change to `main` is rebuilt before commit and the branch-based Pages deployment publishes it automatically.

- Visitors keep one permanent site URL.
- The **Refresh latest data** button reloads the newest published deployment without reusing a stale page URL.
- Country records remain separate in `data/`, so data updates do not require redesigning the interface.
- Pull requests run validation before they can be merged.
- GitHub Pages republishes whenever an approved update reaches `main`.

The dashboard is still compiled to a single self-contained `index.html` at deployment time. That makes production loading reliable while preserving modular source files for maintenance.

## Automated monitoring cadence

Set **Settings → Pages → Source** to **GitHub Actions** after uploading this version. The workflow in `.github/workflows/country-risk-refresh.yml` runs four guarded jobs and deploys a validated standalone page whenever monitored data changes:

- **Daily, distributed hourly:** the country list is divided deterministically across 24 hourly bundles. Each country is searched separately once per day using a rolling six-month GDELT and direct-official-source window plus a broad seven-day Google News country search. With 197 countries, each run handles eight or nine countries instead of sending roughly 197 requests at once. Each profile retains up to 10 highest-value event clusters. Relevant items remain until stronger or newer coverage displaces them, subject to a one-year hard ceiling; the site rebuilds only when the published inventory changes.

News materiality is risk-trajectory based rather than limited to realised events. The scoring model covers funding and refinancing pressure, external liquidity and FX stress, arrears, fiscal slippage, SOE contingent liabilities, banking-sovereign feedback, IMF programme risk, creditor/legal action, sanctions, institutional disruption, social pressure and commodity-linked fiscal shocks. Headlines are labelled `critical`, `elevated` or `standard`; labels remain discovery signals and are not substitutes for analyst assessment.

Country relevance uses two routes. A country or strong local identity anchor in the headline qualifies immediately, subject to ambiguity exclusions such as `Benin City`, `New Mexico` and `Angola Prison`. If headline coverage is thin, a constrained fallback requires the country name to appear at least twice in the indexed article text and also requires a second country-specific anchor (for example Cotonou, Luanda or the relevant central bank). Each stored article records which route qualified it.

The repeated-mention search is optional and rate-limited. If GDELT throttles or rejects that secondary query, the refresh keeps successful headline results. If GDELT is wholly unavailable, the workflow retains the last published news file and continues deploying the valid site rather than replacing data or failing the deployment.

Every headline must also pass a country-entity check based on country names, demonyms, capitals, leaders and major institutions. Ambiguous geographic names have explicit exclusions—for example, Republic of Benin coverage excludes Benin City/Edo/Nigerian-only stories, Angola excludes the Louisiana prison, Mexico excludes New Mexico, and Türkiye excludes poultry stories. Existing records are rechecked on every refresh, so newly identified false positives are removed automatically.

### Stage 1 news-quality controls

- **Explainable relevance:** every accepted item stores a numerical relevance score and the reasons it qualified. A headline country identity normally scores five points; repeated country-body evidence plus a second local anchor scores six. Conflicting identities subtract ten and prevent publication.
- **Precision gate:** GDELT items must contain both country evidence and an explicit sovereign-risk topic in the headline. Travel advice, expat/lifestyle material, working papers and routine clean-energy, fisheries, agrifood, biodiversity or conservation stories are rejected unless the headline also contains a hard sovereign trigger such as debt, fiscal policy, IMF involvement, sanctions or a rating action.
- **Source classification:** recognised primary institutions and official bodies are tier 1, wire services are tier 2, vetted media are tier 3 and all other discovery sources are tier 4. The strongest available source represents a duplicated event.
- **Event clustering:** tracking-link variants, near-identical headlines and sufficiently similar stories in the same risk category and five-day window are merged. The dashboard displays one representative headline and provides expandable links to related coverage.
- **Curated inventory:** each country keeps at most 10 events ranked by country relevance, materiality, source authority and recency. Up to four positions are reserved for qualifying coverage from the latest 30 days before the remaining positions are filled from the wider pool. This avoids both empty profiles and older high-impact events crowding out fresh developments.
- **Strategic SOE coverage:** country-specific sovereign-owned and sovereign-linked entities are included in discovery (for example Sonangol, Pemex and Kenya Power). An entity headline must also contain a material risk trigger—such as debt, losses, state support, guarantees, restructuring, sanctions, governance intervention or a major production disruption—so routine corporate publicity remains excluded.
- **Recent broad discovery:** a separate seven-day country-news pass captures state asset sales, material investment and financing, economic diversification, growth shifts and strategic oil/gas developments even when a headline contains no conventional debt or political-risk keyword. The same country-identity, off-topic and duplicate controls still apply.
- **Expanded GDELT taxonomy:** discovery now covers political succession and institutional crises; unrest and security shocks; sovereign credit, sanctions and AML; monetary, banking and fiscal developments; external accounts and convertibility; energy, mining and state-linked liabilities; legal/arbitration risk; humanitarian shocks; and cyber or critical-infrastructure attacks.
- **Probationary topics:** renewable projects qualify only when the headline also shows a material state-finance connection. Epidemic and outbreak headlines require national/emergency, government, WHO, mortality, case-surge or border-closure context. Humanitarian crises, food insecurity, famine, refugee crises and mass displacement qualify directly. Results remain visible in the quality review so these rules can be tightened after observing live coverage.
- **Quality reporting:** each daily run writes `data/review/news-quality.json`, recording retrievals, acceptances, rejections, expired items, duplicate merges, published event clusters and a sample of rejected stories with reasons.
- **Provider resilience:** secondary full-text searches are optional. GDELT throttling never removes the last valid news file or stops an otherwise valid site deployment.
- **Country-bundle request control:** scheduled runs permit the expensive repeated-body GDELT fallback for at most two thin feeds in each hourly bundle. The allowance rotates by day. Manual `news` runs remain available, but scheduled global coverage uses the hourly bundles so API traffic is spread across the full day.

### Stage 2 direct official sources

The daily news job also checks primary sources directly. It currently supports RSS/Atom feeds, feed auto-discovery, structured JSON-LD news pages, conservative dated-link extraction and the World Bank Documents & Reports API. The source registry covers the IMF, Council of the EU, FATF, OFAC, Fitch, Moody's, S&P Global Ratings, World Bank, Federal Reserve and the central bank or monetary authority relevant to every pilot country. Shared institutions such as BCEAO are fetched once and reused.

Official items still need a sovereign-risk topic and a usable publication date. A country-specific official source supplies the country evidence even where a release uses a generic headline such as “Monetary Policy Committee decision.” Global sources such as the IMF and EU Council must still pass the normal country-identity test. Official releases and media reporting are then passed through the same retention, materiality and event-clustering rules; a tier-one official release becomes the representative link when available.

World Bank ingestion uses a narrower document whitelist: country economic updates, economic monitors, public-finance reviews, debt-sustainability material, development-policy financing, budget support, macro-poverty outlooks and comparable country diagnostics. Working papers and routine sector/project documents are excluded by default.

Every connector fails independently. `data/review/news-quality.json` records each official source as `ok` or `failed`, its record count, GDELT request failures and country-level quality totals. OFAC is monitored from its official Recent Actions page because its RSS feed was retired in 2025.

### IMF Article IV records

Country pages contain a dedicated IMF Article IV block. Article IV releases found through the IMF feed are stored separately in `NEWS_DATA.imfArticleIV`, so they are not displaced by the ten-item rolling news inventory. Until the first automated record is captured, the page falls back to any analyst-reviewed Article IV event already present in the country calendar and otherwise shows a transparent unpopulated state.

### Hybrid Web NGrams groundwork

`tools/web-ngrams-query.sql` is the credential-free BigQuery query template for the next discovery layer. `tools/ingest-web-ngrams.mjs` accepts exported JSON or NDJSON, reconstructs contextual snippets, normalises URLs, applies the existing country/relevance/exclusion rules and writes `data/review/web-ngrams-candidates.json`. These records are review-only and cannot publish to the dashboard. This separates candidate discovery from publication before any Google Cloud credentials or spending authority are introduced.

- **Weekly:** screens the retained news for possible country-defining timeline events.
- **Monthly:** generates a review queue for elections, sovereign ratings, IMF developments, sanctions/FATF and central-bank developments.
- **Monthly:** also refreshes the IMF World Economic Outlook and World Bank vulnerability indicators. Each provider fails independently and the last valid observation is retained.
- **Quarterly:** refreshes OEC merchandise-trade products and partners, and searches the prior three months for possible missed coups, defaults, restructurings, wars, constitutional breaks and comparable anchor events.
- **Annually:** import reviewed UNCTAD commodity-dependence records when the dashboard/report is updated. The publication threshold is applied mechanically: commodity exports must exceed 60% of merchandise exports.

News is a discovery feed and is displayed with a verification warning. The structured and historical jobs create files in `data/review/`; they never rewrite ratings, status fields or historical events automatically. An analyst must corroborate candidates against primary or authoritative sources before publication. If a news refresh fails for every country, the job exits without replacing the last working data file.

## Open the dashboard

Open the root `index.html` directly in a browser. It is a fully self-contained compiled dashboard: the design, application code and all 15 countries are embedded, so previews that load only one file still work. Google Fonts are optional; browser fallbacks are included.

## Safe update workflow

1. Edit only the relevant file in `data/`.
2. Change `data/config.js` → `dataLastUpdated` to the publication date.
3. From this folder, run `npm run validate`.
4. Publish the newly generated root `index.html` only if validation passes.

`npm run validate` first rebuilds the standalone dashboard, then checks country keys, required profile fields, rating shapes, event dates, severity values, history counts, source references, duplicates, map coverage, profile rendering, the overview and history filtering. It finally loads the compiled one-file dashboard independently. A bad record stops publication instead of silently breaking the interface.

## File map

| File | Purpose | Routine editing? |
| --- | --- | --- |
| `index.html` | Generated, self-contained dashboard for preview and publication | No—generated automatically |
| `src/index.template.html` | Maintainable page structure | Only for layout changes |
| `data/config.js` | Freshness date and validation settings | Yes |
| `data/countries.js` | Current profiles, ratings, key issues, upcoming calendar and recent developments | Yes |
| `data/economics.js` | Generated IMF, World Bank, UNCTAD and OEC profile data | No—guarded refresh/import workflow |
| `tools/jurisdictions.mjs` | ISO3 and OEC identifiers for 197 target jurisdictions | Only when the target universe changes |
| `data/commodity-import.example.json` | Example schema for the annual reviewed UNCTAD import | Copy, verify and rename when updating |
| `data/news.js` | Generated rolling country-risk news feed | No—daily workflow |
| `data/history.js` | 1945–present turning points and source registry | Yes |
| `data/review/` | Generated analyst review queues; never published as verified facts | Review only |
| `data/map-data.js` | Generated Natural Earth SVG geometry | No |
| `assets/styles.css` | Visual design | Only for design changes |
| `js/app.js` | Rendering, search, map, filters and interactions | Only for feature changes |
| `tools/validate-data.mjs` | Pre-publication guardrail | No |
| `tools/news-quality.mjs` | Source classification, URL cleanup and event clustering | No |
| `tools/news-quality-test.mjs` | Tests source tiers and duplicate clustering | No |
| `tools/official-source-registry.mjs` | Direct official-source definitions for the pilot countries | Update when an institution changes its site |
| `tools/official-news.mjs` | RSS, JSON-LD, HTML and World Bank official-source ingestion | No |
| `tools/official-news-test.mjs` | Tests official feed parsing and country qualification | No |
| `tools/smoke-test.mjs` | Headless rendering and interaction check | No |
| `tools/build.mjs` | Compiles the modules into the standalone `index.html` | No |
| `tools/standalone-smoke-test.mjs` | Confirms the compiled one-file dashboard runs by itself | No |

## Updating a country

Keep the existing country key, such as `kenya` or `cotedivoire`. Update only the values inside that country object. Calendar records use this shape:

```js
{
  date: "2026-11-03",
  sortDate: "2026-11-03",
  tag: "Election",
  label: "Event title",
  meta: "Why it matters or what is confirmed",
  severity: "amber"
}
```

`severity` may be `rust`, `amber`, `moss`, or an empty string. Use `sortDate: null` only when there is genuinely no usable date.

Historical records are created with `historicalEvent(date, category, label, impact, sourceKey, severity)`. The `sourceKey` must exist in `HISTORY_SOURCES` at the top of `data/history.js`.

Use a two-tier editorial standard for the historical timeline:

- **1945–2015:** only country-defining anchors, such as independence or state formation, coups, civil wars, sovereign defaults, systemic financial breaks and foundational constitutional transitions.
- **2016–present:** deeper coverage of still-material political, credit, conflict, institutional, sanctions, financial and disaster events.

Do not add routine elections, cabinet changes or ordinary macroeconomic releases merely to fill the timeline. The target is 12–20 events per country, not exhaustive chronology.

## Adding a country

Adding a country requires all four of the following:

1. A complete object in `data/countries.js`.
2. Its key added to `order` in that file.
3. A 12–20 event array in `data/history.js`, reaching back to 1945 where the country’s history permits.
4. Corresponding SVG geometry in `data/map-data.js`.

Run the validator before publishing; it will identify anything missing.

## Moving to live data

The application reads stable browser globals including `SITE_CONFIG`, `COUNTRY_DATA`, `ECONOMIC_DATA`, `NEWS_DATA`, `HISTORY_DATA`, and `MAP_DATA`. A future ingestion service can generate the data files from a database or approved API output without changing the template, the design, or `js/app.js`. The build step then emits a fresh self-contained `index.html`. Keep analyst approval between automated ingestion and publication.

## Economic and trade data

Each country now has a separate **Economic & trade structure** sub-page, reached from the navigation above the country title. This keeps the risk profile focused while giving structural data enough room for visual analysis. Missing provider values render as a transparent pending state; they never break either page.

- **IMF:** real GDP growth, inflation, current-account balance, general-government balance and gross government debt. The updater requests a fixed window of four historical years, the current year and five future years. Years before the run year are labelled historical, the run year is labelled an IMF estimate, and only later years are labelled forecasts.
- **World Bank:** reserves in months of imports (`FI.RES.TOTL.MO`), interest payments as a share of revenue (`GC.XPN.INTP.RV.ZS`), total external debt as a share of GNI (`DT.DOD.DECT.GN.ZS`), short-term debt as a share of total external debt (`DT.DOD.DSTC.ZS`), concessional debt as a share of total external debt (`DT.DOD.ALLC.ZS`), debt service as a share of exports (`DT.TDS.DECT.EX.ZS`) and GDP per capita in current US dollars (`NY.GDP.PCAP.CD`). Every card keeps its own observation year, indicator code and definition; data are never presented as a common vintage.
- **UNCTAD:** commodity exports as a share of merchandise exports, the derived commodity-dependent classification, the dominant commodity group and reference period. The updater first checks the official UNCTAD dashboard data and then an optional reviewed local import. The page displays the share against UNCTAD's greater-than-60% threshold. `UNCTAD_DATA_URL` can point the workflow at a revised official CSV without a code change.
- **OEC:** total merchandise exports and imports plus horizontal ranked charts for the five largest exports, imports, export destinations and import origins. Requests use the documented `include` filters and BACI HS22 cube, try six annual vintages and can publish partial sections explicitly. If OEC requires authenticated access, store an `OEC_API_TOKEN` GitHub Actions secret; never put a token in a data file or commit.

Economic ingestion is keyed by ISO3 in `ECONOMIC_DATA.jurisdictions`, not by the 15 original profile slugs. The catalogue asserts exactly 197 targets: 193 UN members plus Palestine, Kosovo, Taiwan and Vatican City. Existing profile pages resolve their data by ISO3, so new profiles do not require another provider-ID table.

Every jurisdiction stores separate IMF, World Bank, UNCTAD and OEC refresh state: last attempt, last success, source observation period, warnings/errors and whether a previous value was retained. These states are displayed on the page. A failed request therefore cannot silently make old data look current.

Useful commands:

```text
npm run refresh:macro
npm run refresh:trade
npm run refresh:economic
npm run import:commodity
npm run normalize:economic
```

All connectors use visible last-known-good semantics. A provider error preserves that provider's published block but marks it failed and retained on the country page; successful providers can still update normally. Monthly macro work is split into 24 hourly bundles, while weekly OEC bundles complete a 197-jurisdiction rotation over a quarter. The separate economic workflow accepts an ISO3 code for a focused manual refresh, or `profiles` to refresh every currently published country page in one run.
