# Country Calendar

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

- **Daily:** refreshes a 14-day country-risk news window from GDELT and rebuilds the site only when headlines change.
- **Weekly:** screens the retained news for possible country-defining timeline events.
- **Monthly:** generates a review queue for elections, sovereign ratings, IMF developments, sanctions/FATF and central-bank developments.
- **Quarterly:** searches the prior three months for possible missed coups, defaults, restructurings, wars, constitutional breaks and comparable anchor events.

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
| `data/news.js` | Generated rolling country-risk news feed | No—daily workflow |
| `data/history.js` | 1945–present turning points and source registry | Yes |
| `data/review/` | Generated analyst review queues; never published as verified facts | Review only |
| `data/map-data.js` | Generated Natural Earth SVG geometry | No |
| `assets/styles.css` | Visual design | Only for design changes |
| `js/app.js` | Rendering, search, map, filters and interactions | Only for feature changes |
| `tools/validate-data.mjs` | Pre-publication guardrail | No |
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

The application reads four stable browser globals: `SITE_CONFIG`, `COUNTRY_DATA`, `HISTORY_DATA`, and `MAP_DATA`. A future ingestion service can generate the first three data files from a database or approved API output without changing the template, the design, or `js/app.js`. The build step then emits a fresh self-contained `index.html`. Keep analyst approval between automated ingestion and publication.
