/* Country Dashboard application logic. Data is loaded before this file. */
'use strict';

const DATA_LAST_UPDATED = window.SITE_CONFIG.dataLastUpdated;
const HISTORY_START_YEAR = window.SITE_CONFIG.historyStartYear;
const HISTORY_DEEP_COVERAGE_START_YEAR = window.SITE_CONFIG.historyDeepCoverageStartYear;
const { order } = window.COUNTRY_DATA;
const PROFILE_REVIEWS = window.PROFILE_REVIEWS || { countries: {} };
// Keep the research overlay separate from refreshed news and economic datasets.
const countries = Object.fromEntries(Object.entries(window.COUNTRY_DATA.countries)
  .map(([key, country]) => [key, withVerifiedRatings(country, PROFILE_REVIEWS.countries[key])]));

function withVerifiedRatings(country, profile) {
  if (!profile?.ratings) return country;
  const result = { ...country, ratings: { ...country.ratings }, ratingReviews: { ...country.ratingReviews } };
  for (const [agency, verified] of Object.entries(profile.ratings)) {
    const current = country.ratings?.[agency];
    const currentValue = Array.isArray(current) ? current[0] : current?.value;
    const currentOutlook = Array.isArray(current) ? current[1] : current?.outlook;
    const tupleMeta = Array.isArray(current) ? current[2] : current;
    const details = country.ratingReviews?.[agency] || (typeof tupleMeta === 'string' ? { actionDate: tupleMeta } : tupleMeta) || {};
    const currentDate = details.reviewedAt || details.actionDate || details.assignedAt;
    if (currentDate && String(currentDate) > (verified.reviewedAt || verified.actionDate)) continue;
    // An undated future change must not be overwritten by this dated snapshot.
    const same = currentValue === verified.value && currentOutlook === verified.outlook;
    const baseline = currentValue === verified.previousValue && currentOutlook === verified.previousOutlook;
    if (!currentDate && currentValue && !same && !baseline) continue;
    result.ratings[agency] = [verified.value, verified.outlook];
    result.ratingReviews[agency] = { ...verified };
  }
  return result;
}
const ECONOMIC_DATA = window.ECONOMIC_DATA || { generatedAt: null, sources: {}, countries: {} };
const NEWS_DATA = window.NEWS_DATA || { generatedAt: null, countries: {} };
const { sources: HISTORY_SOURCES, events: HISTORICAL_EVENTS } = window.HISTORY_DATA;
const { worldBasePaths: WORLD_BASE_PATHS, countryShapes: COUNTRY_SHAPES, countryCentroids: COUNTRY_CENTROIDS } = window.MAP_DATA;

const TODAY = new Date();
TODAY.setHours(0, 0, 0, 0);
const TODAY_LABEL = `TODAY — ${TODAY.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase()}`;

function refreshSite() {
  const url = new URL(window.location.href);
  url.searchParams.set("refresh", Date.now().toString());
  window.location.replace(url.toString());
}

function parseISODate(value) {
  const [year, month, day] = value.split('-').map(Number);
  return new Date(year, month - 1, day);
}

function formatLongDate(value) {
  return parseISODate(value).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
  });
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>'"]/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
  })[character]);
}

// Source dates retain their original precision; never substitute a refresh timestamp.
function reviewDateLabel(value) {
  if (!value) return "Not recorded";
  const text = String(value);
  if (/^\d{4}$/.test(text)) return text;
  if (/^\d{4}-\d{2}$/.test(text)) {
    const date = new Date(text + "-01T12:00:00Z");
    return Number.isNaN(date.getTime()) ? "Not recorded" : date.toLocaleDateString("en-GB", { month: "long", year: "numeric", timeZone: "UTC" });
  }
  const date = new Date(text);
  return Number.isNaN(date.getTime()) ? text : date.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
}

function sourceLink(url, label) {
  return typeof url === "string" && /^https:\/\//i.test(url)
    ? `<a href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(label)}</a>` : escapeHTML(label);
}

function ratingBlockHTML(country, key, agency) {
  const rating = country.ratings?.[key] || ["NR", "—"];
  const [value, outlook, metadata] = Array.isArray(rating) ? rating : [rating.value, rating.outlook, rating];
  const details = country.ratingReviews?.[key] || (typeof metadata === "string" ? { actionDate: metadata } : metadata) || {};
  let date = details.reviewedAt || details.assignedAt || details.actionDate;
  let label = details.dateLabel || (details.reviewedAt ? "Last reviewed" : details.assignedAt ? "Assigned" : "Latest action");
  let url = (details.reviewedAt ? details.reviewSourceUrl : null) || details.sourceUrl || details.url;
  // Older calendar entries are evidence of an action, not proof of the latest review.
  if (!date && value !== "NR") {
    const agencyPattern = { sp: /S&P|Standard & Poor/i, fitch: /Fitch/i, moodys: /Moody/i }[key];
    const normalise = text => String(text).replace(/[−–]/g, "-").toLowerCase();
    const event = (country.past || []).filter(item => item.tag === "Rating" && agencyPattern.test(item.label)
      && normalise(item.label).split(/[^a-z0-9+\-]+/).includes(normalise(value)))
      .sort((a, b) => String(b.sortDate || b.date).localeCompare(String(a.sortDate || a.date)))[0];
    if (event) { date = event.date; label = "Recorded action"; url = event.sourceUrl || event.url; }
  }
  return `<div class="rating-block"${details.note ? ` title="${escapeHTML(details.note)}"` : ""}><p class="rating-agency">${escapeHTML(agency)}</p><p class="rating-value">${escapeHTML(value)}</p><p class="rating-outlook">${escapeHTML(outlook)}</p>
    <p class="rating-date">${value === "NR" ? "Not rated" : date ? `${escapeHTML(label)}<br>${sourceLink(url, reviewDateLabel(date))}` : "Review date not recorded"}</p>${details.sourceType === "secondary" ? '<small class="rating-provenance">Reported by financial source</small>' : ""}${details.note ? `<details class="rating-note"><summary>Date note</summary><small>${escapeHTML(details.note)}</small></details>` : ""}</div>`;
}

function commodityDetailHTML(commodity, trade) {
  const share = commodity.exportShare;
  const dependent = share !== null && share !== "" && Number.isFinite(Number(share)) && Number(share) > 60;
  const rawGroup = String(commodity.primaryGroup || "").trim();
  const group = /^(not recorded|unknown|n\/a|not available)$/i.test(rawGroup) ? "" : rawGroup;
  // Product detail is trade evidence, not an inferred UNCTAD group or threshold.
  const commodityCode = /^(0[1-9]|1[0-9]|2[0-7])\d{2}$|^(7101|7102|7103|7106|7108|7110|7403|7502|7601|7801|7901|8001)$/;
  const products = (trade?.topExports || []).filter(row => commodityCode.test(String(row.code)) && Number(row.share) > 0)
    .sort((a, b) => Number(b.share) - Number(a.share));
  const product = products[0];
  return `<div class="commodity-detail">
    ${group ? `<span>${dependent ? "Main commodity group" : "Largest commodity group"}</span><strong>${escapeHTML(group)}</strong>` : ""}
    <small>UNCTAD reference period ${escapeHTML(commodity.referencePeriod || "not recorded")}</small>
    ${dependent && product ? `<span>Leading commodity export · trade data</span><strong>${escapeHTML(shortTradeLabel(product))}</strong><small>${Number(product.share).toFixed(1)}% of merchandise exports · ${escapeHTML(trade.year || "year not recorded")} · ${escapeHTML(trade.dataset || "Trade source")}</small>` : ""}
    ${dependent && !group && !product ? `<p class="empty-note">Commodity-dependent; the leading commodity is not available in the recorded source data.</p>` : ""}
    ${dependent ? `<small class="commodity-method">The 60% threshold applies to all commodity exports combined, not to the individual product shown.${group && product ? " UNCTAD and trade data may cover different periods." : ""}</small>` : ""}
  </div>`;
}

function formatMetricValue(metric) {
  if (!metric || !Number.isFinite(Number(metric.value))) return "—";
  const value = Number(metric.value);
  const digits = Math.abs(value) >= 100 ? 0 : 1;
  if (metric.unit === "percent") return `${value.toFixed(digits)}%`;
  if (metric.unit === "months") return `${value.toFixed(1)} mo.`;
  if (metric.unit === "usd") {
    if (Math.abs(value) >= 1e12) return `$${(value / 1e12).toFixed(1)}tn`;
    if (Math.abs(value) >= 1e9) return `$${(value / 1e9).toFixed(1)}bn`;
    if (Math.abs(value) >= 1e6) return `$${(value / 1e6).toFixed(1)}m`;
    return `$${value.toLocaleString("en-GB", { maximumFractionDigits: 0 })}`;
  }
  return value.toLocaleString("en-GB", { maximumFractionDigits: digits });
}

function metricCard(label, metric, showMissing = false) {
  if (!metric || !Number.isFinite(Number(metric.value))) {
    return showMissing ? `<div class="economic-metric missing"><span>${escapeHTML(label)}</span><strong>—</strong><small>Awaiting source data</small></div>` : "";
  }
  const classification = metric.observationClass === "forecast" ? "IMF forecast"
    : metric.observationClass === "estimate" ? "IMF estimate"
    : metric.stale ? "stale source year" : "observed";
  const sourceCode = metric.sourceCode ? ` · ${metric.sourceCode}` : "";
  return `<div class="economic-metric"${metric.definition ? ` title="${escapeHTML(metric.definition)}"` : ""}>
    <span>${escapeHTML(label)}</span>
    <strong>${escapeHTML(formatMetricValue(metric))}</strong>
    <small>${escapeHTML(metric.year || metric.period || "")} · ${escapeHTML(classification)}${escapeHTML(sourceCode)}</small>
    ${metric.calculationMethod === "calculated" ? `<small>Calculated from same-year debt stocks · ${(metric.inputSources || []).map(input => sourceLink(input.url, input.code)).join(" · ")}</small>` : ""}
  </div>`;
}

function formatRefreshTime(value) {
  if (!value) return "never";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? String(value) : date.toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" });
}

function providerStatusHTML(refresh = {}) {
  const providers = [
    ["imf", "IMF WEO"], ["worldBank", "World Bank"], ["unctad", "UNCTAD"], ["oec", refresh.oec?.provider === "comtrade" ? "UN Comtrade" : "Trade (legacy OEC)"]
  ];
  const statusLabels = { ok: "Current", partial: "Partial", error: "Failed", stale: "Needs refresh", pending: "Pending" };
  return `<div class="provider-status-grid" aria-label="Economic source refresh status">${providers.map(([key, label]) => {
    const item = refresh[key] || { status: "pending" };
    const status = item.status || "pending";
    const detail = item.error || item.warning || (item.warnings || []).filter(Boolean).join("; ");
    const observation = item.observationThrough ? ` · data through ${item.observationThrough}` : "";
    return `<div class="provider-status ${escapeHTML(status)}">
      <div><strong>${escapeHTML(label)}</strong><span>${escapeHTML(statusLabels[status] || status)}</span></div>
      <small>Last success: ${escapeHTML(formatRefreshTime(item.lastSuccessAt))}${escapeHTML(observation)}</small>
      ${item.retainedPrevious ? `<em>Previous values retained after this refresh did not complete.</em>` : ""}
      ${detail ? `<details><summary>Refresh detail</summary><p>${escapeHTML(detail)}</p></details>` : ""}
    </div>`;
  }).join("")}</div>`;
}

function shortTradeLabel(row) {
  const labels = {
    '2709': 'Crude oil', '2710': 'Refined petroleum products', '2711': 'Petroleum gases',
    '4907': 'Stamps, banknotes, cheques and financial certificates',
    '0306': 'Crustaceans', '8903': 'Yachts and recreational boats',
    '3903': 'Styrene polymers', '8703': 'Passenger cars',
    '8502': 'Electric generating sets and rotary converters',
    '9403': 'Other furniture and parts', '9999': 'Unspecified commodities',
    '7102': 'Diamonds', '7106': 'Silver', '7108': 'Gold',
    '7110': 'Platinum-group metals', '2603': 'Copper ores and concentrates',
    '2601': 'Iron ores and concentrates', '2606': 'Aluminium ores and concentrates',
    '7403': 'Refined copper and unwrought copper alloys',
    '7601': 'Unwrought aluminium', '1001': 'Wheat and meslin',
    '0901': 'Coffee, coffee substitutes, husks and skins', '1801': 'Cocoa beans',
    '8901': 'Passenger and cargo vessels',
    '8905': 'Special-purpose vessels and floating platforms',
    '8481': 'Taps, valves and similar appliances',
    '7304': 'Seamless iron or steel tubes and pipes'
  };
  const name = String(row.name || '').trim();
  // Partner codes have fewer than four digits; never apply product aliases to them.
  const label = labels[String(row.code)] || name;
  const words = label.split(/\s+/);
  return words.length > 10 ? words.slice(0, 10).join(' ') + '…' : label;
}

function rankedBars(title, rows) {
  if (!Array.isArray(rows) || !rows.length) return "";
  const maximum = Math.max(...rows.map(row => Number(row.share) || Number(row.value) || 0), 1);
  return `<div class="trade-chart"><p class="chart-title">${escapeHTML(title)}</p>${rows.slice(0, 5).map(row => {
    const share = Number(row.share);
    const measure = Number.isFinite(share) ? share : Number(row.value) || 0;
    const width = Math.max(2, measure / maximum * 100);
    const value = Number.isFinite(share) ? `${share.toFixed(1)}%` : formatMetricValue({ value: row.value, unit: "usd" });
    return `<div class="trade-bar-row">
      <div class="trade-bar-label"><span tabindex="0" title="${escapeHTML(row.sourceDescription || row.name)}" aria-label="${escapeHTML(row.sourceDescription || row.name)}">${escapeHTML(shortTradeLabel(row))}</span><strong>${escapeHTML(value)}</strong></div>
      <div class="trade-bar-track"><span style="width:${width.toFixed(1)}%"></span></div>
    </div>`;
  }).join("")}${rows.slice(0,5).every(r => typeof r.share === "number") ? `<p class="block-note">Other / unallocated: ${Math.max(0,100-rows.slice(0,5).reduce((n,r)=>n+r.share,0)).toFixed(1)}%</p>` : ""}</div>`;
}

function lineChartHTML(title, definitions, unit = "%") {
  const series = definitions.map((definition, index) => ({
    ...definition,
    index,
    values: (definition.metric?.series || [])
      .map(point => ({ year: Number(point.year), value: Number(point.value), projection: Boolean(point.projection), observationClass: point.observationClass }))
      .filter(point => Number.isInteger(point.year) && Number.isFinite(point.value))
      .sort((left, right) => left.year - right.year)
  })).filter(definition => definition.values.length);
  if (!series.length) return "";
  const all = series.flatMap(definition => definition.values);
  const years = [...new Set(all.map(point => point.year))].sort((a, b) => a - b);
  const minimum = Math.min(...all.map(point => point.value), 0);
  const maximum = Math.max(...all.map(point => point.value), 0);
  const padding = Math.max((maximum - minimum) * 0.12, 1);
  const yMin = minimum - padding;
  const yMax = maximum + padding;
  const width = 760, height = 290, left = 52, right = 18, top = 24, bottom = 38;
  const x = year => years.length === 1 ? (left + width - right) / 2 : left + (year - years[0]) / (years.at(-1) - years[0]) * (width - left - right);
  const y = value => top + (yMax - value) / (yMax - yMin) * (height - top - bottom);
  const yTicks = Array.from({ length: 5 }, (_, index) => yMin + index * (yMax - yMin) / 4);
  const xStep = Math.max(1, Math.ceil(years.length / 6));
  const xTicks = years.filter((_, index) => index % xStep === 0 || index === years.length - 1);
  const firstForecastYear = all.filter(point => point.observationClass === "forecast" || point.projection).map(point => point.year).sort((a, b) => a - b)[0];
  const forecastX = Number.isInteger(firstForecastYear) ? x(firstForecastYear) : null;
  return `<div class="macro-chart">
    <div class="chart-heading"><p class="chart-title">${escapeHTML(title)}</p><div class="chart-legend">${series.map(definition => `<span class="series-${definition.index + 1}"><i></i>${escapeHTML(definition.label)}</span>`).join("")}</div></div>
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${escapeHTML(title)} time series">
      <title>${escapeHTML(title)}</title>
      ${yTicks.map(value => `<line class="chart-grid" x1="${left}" y1="${y(value)}" x2="${width - right}" y2="${y(value)}"/><text class="chart-axis" x="${left - 8}" y="${y(value) + 4}" text-anchor="end">${value.toFixed(1)}${unit}</text>`).join("")}
      ${xTicks.map(year => `<text class="chart-axis" x="${x(year)}" y="${height - 12}" text-anchor="middle">${year}</text>`).join("")}
      ${yMin < 0 && yMax > 0 ? `<line class="chart-zero" x1="${left}" y1="${y(0)}" x2="${width - right}" y2="${y(0)}"/>` : ""}
      ${forecastX ? `<line class="chart-forecast" x1="${forecastX}" y1="${top}" x2="${forecastX}" y2="${height - bottom}"/><text class="chart-forecast-label" x="${forecastX + 6}" y="${top + 11}">forecast</text>` : ""}
      ${series.map(definition => `<path class="chart-line series-${definition.index + 1}" d="${definition.values.map((point, index) => `${index ? "L" : "M"}${x(point.year).toFixed(1)},${y(point.value).toFixed(1)}`).join(" ")}"/>${definition.values.map(point => `<circle class="chart-point series-${definition.index + 1}${point.projection ? " projected" : ""}" cx="${x(point.year).toFixed(1)}" cy="${y(point.value).toFixed(1)}" r="4"><title>${escapeHTML(definition.label)}: ${point.value.toFixed(1)}${unit} (${point.year})</title></circle>`).join("")}`).join("")}
    </svg>
  </div>`;
}

function countryPageNavHTML() {
  return `<nav class="country-page-nav" aria-label="Country sections">
    <button class="${countryView === "profile" ? "active" : ""}" type="button" onclick="countryView='profile'; renderMain();">Risk profile</button>
    <button class="${countryView === "economics" ? "active" : ""}" type="button" onclick="countryView='economics'; renderMain();">Economic &amp; trade structure</button>
  </nav>`;
}

function economicsPageHTML(countryKey, country) {
  const record = ECONOMIC_DATA.jurisdictions?.[country.iso3] || ECONOMIC_DATA.countries?.[countryKey] || {};
  const imf = record.imf?.indicators || {};
  const wb = record.worldBank?.indicators || {};
  const commodity = record.commodityDependence;
  const commodityDependent = commodity?.exportShare != null && Number(commodity.exportShare) > 60;
  const trade = record.trade;
  const macroCards = [
    metricCard("Real GDP growth", imf.realGdpGrowth, true),
    metricCard("Inflation", imf.inflation, true),
    metricCard("Current-account balance / GDP", imf.currentAccount, true),
    metricCard("Fiscal balance / GDP", imf.fiscalBalance, true),
    metricCard("GDP per capita, current US$", wb.gdpPerCapita, true),
    metricCard("Reserve cover", wb.reserveMonths, true)
  ].join("");
  const debtCards = [
    metricCard("Government gross debt / GDP", imf.governmentDebt, true),
    metricCard("Interest payments / revenue", wb.interestPaymentsRevenue, true),
    metricCard("Total external debt / GNI", wb.externalDebtGni, true),
    metricCard("Short-term debt / external debt", wb.shortTermDebtPct, true),
    metricCard("Concessional debt / external debt", wb.concessionalDebtPct, true),
    metricCard("External debt service / exports", wb.debtServiceExports, true)
  ].join("");
  const hasTrade = trade && [trade.topExports, trade.topImports, trade.exportPartners, trade.importPartners].some(rows => rows?.length);
  const sourceDate = ECONOMIC_DATA.generatedAt
    ? new Date(ECONOMIC_DATA.generatedAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
    : "first refresh pending";

  const macroChart = lineChartHTML("Macro outlook", [
    { label: "GDP growth", metric: imf.realGdpGrowth },
    { label: "Inflation", metric: imf.inflation },
    { label: "Current account", metric: imf.currentAccount },
    { label: "Fiscal balance", metric: imf.fiscalBalance }
  ]);
  const debtChart = lineChartHTML("Government debt", [{ label: "Debt / GDP", metric: imf.governmentDebt }]);
  const reserveChart = lineChartHTML("Reserve coverage", [{ label: "Months of imports", metric: wb.reserveMonths }], " mo.");
  return `${countryPageNavHTML()}
  <div class="country-head economic-page-head">
    <div><h1 class="country-title">${escapeHTML(country.name)}</h1><p class="country-region">Economic &amp; trade structure · ${escapeHTML(country.region)}</p></div>
    <span class="economic-updated">Refresh attempted ${escapeHTML(sourceDate)}</span>
  </div>
  ${providerStatusHTML(record.refresh)}
  <section class="block economic-block">
    <div class="economic-head">
      <div>
        <p class="block-title">Macro outlook</p>
        <p class="block-note">IMF WEO is limited to four historical years, the current-year estimate and five future forecast years. World Bank cards show the latest observation and its exact vintage.</p>
      </div>
    </div>
    <div class="economic-grid">${macroCards}</div>
    ${macroChart || ""}
    <div class="secondary-chart-grid">${reserveChart}</div>
  </section>
  <section class="block economic-block">
    <p class="block-title">Fiscal and external debt vulnerability</p>
    <p class="block-note">World Bank external-debt measures cover public and publicly guaranteed debt, private nonguaranteed debt, IMF credit and short-term debt where the indicator definition specifies total external debt. Concessional debt uses the reported IDS share, or a labelled calculation from same-year IDS debt stocks.</p>
    <div class="economic-grid">${debtCards}</div>
    <div class="secondary-chart-grid">${debtChart}</div>
  </section>
  <section class="block">
    <p class="block-title">Commodity dependence</p>
    <p class="block-note">Share of merchandise exports classed as commodities by UNCTAD.</p>
    ${commodity ? `<div class="commodity-viz">
      <div class="commodity-gauge-label"><strong>${escapeHTML(formatMetricValue({ value: commodity.exportShare, unit: "percent" }))}</strong><span class="${commodityDependent ? "dependent" : "diversified"}">${commodityDependent ? "Commodity-dependent" : "Not commodity-dependent"}</span></div>
      <div class="commodity-gauge" role="img" aria-label="Commodities are ${escapeHTML(commodity.exportShare)} percent of merchandise exports; UNCTAD dependence threshold is 60 percent"><span style="width:${Math.max(0, Math.min(100, Number(commodity.exportShare)))}%"></span><i></i></div>
      <div class="commodity-scale"><span>0%</span><span>60% threshold</span><span>100%</span></div>
      ${commodityDetailHTML(commodity, trade)}
    </div>` : `<p class="empty-note">No UNCTAD observation is currently published for this profile. Check the UNCTAD source status above; a failed refresh is not treated as a valid zero.</p>`}
  </section>
  <section class="block">
    <p class="block-title">Merchandise trade</p>
    <p class="block-note">Largest reported merchandise products and trading partners, ranked by share of the country's total. Product codes distinguish crude oil, refined petroleum, gases and precious metals. Imports and exports use their respective reported totals.</p>
    ${trade ? `<div class="trade-totals">${metricCard("Merchandise exports", { value: trade.exportsTotal, unit: "usd", year: trade.year })}${metricCard("Merchandise imports", { value: trade.importsTotal, unit: "usd", year: trade.year })}</div>` : ""}
    ${hasTrade ? `<div class="trade-grid">
      ${rankedBars("Top exports", trade.topExports)}
      ${rankedBars("Top imports", trade.topImports)}
      ${rankedBars("Export destinations", trade.exportPartners)}
      ${rankedBars("Import origins", trade.importPartners)}
    </div><p class="economic-pending">${escapeHTML(trade.dataset || "Legacy trade data")} · ${escapeHTML(trade.year || "latest available year")}${record.refresh?.oec?.status === "partial" ? " · partial coverage" : ""}.</p>` : `<p class="empty-note">No trade record is currently available. UN Comtrade checks the three latest completed years. Missing data is not zero.</p>`}
    <p class="economic-sources"><a href="${escapeHTML(ECONOMIC_DATA.sources?.imf?.url || "https://www.imf.org/")}" target="_blank" rel="noopener noreferrer">IMF</a> · <a href="${escapeHTML(ECONOMIC_DATA.sources?.worldBank?.url || "https://data.worldbank.org/")}" target="_blank" rel="noopener noreferrer">World Bank</a> · <a href="${escapeHTML(ECONOMIC_DATA.sources?.unctad?.url || "https://unctad.org/")}" target="_blank" rel="noopener noreferrer">UNCTAD</a> · <a href="${escapeHTML(ECONOMIC_DATA.sources?.oec?.url || "https://comtradeplus.un.org/")}" target="_blank" rel="noopener noreferrer">Trade source</a></p>
  </section>`;
}

function newsHTML(countryKey) {
  const articles = (NEWS_DATA.countries?.[countryKey] || []).slice(0, 10);
  const generated = NEWS_DATA.generatedAt
    ? new Date(NEWS_DATA.generatedAt).toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" })
    : "scheduled refresh pending";
  const rows = articles.map(article => {
    const sourceLabel = article.officialSourceName || article.domain;
    const relevanceExplanation = article.relevanceReasons?.length
      ? ` title="${escapeHTML(article.relevanceReasons.join("; "))}"`
      : "";
    const related = (article.relatedCoverage || []).map(item => `
      <li><a href="${escapeHTML(item.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(item.officialSourceName || item.domain)}</a> — ${escapeHTML(item.title)}</li>
    `).join("");
    return `
      <article class="news-item">
        <div class="news-meta">${article.materiality !== "standard" ? `<span class="news-material ${article.materiality}">${escapeHTML(article.materiality)}</span> · ` : ''}${escapeHTML(new Date(article.publishedAt).toLocaleDateString("en-GB"))} · ${escapeHTML(sourceLabel)}</div>
        <a href="${escapeHTML(article.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(article.title)}</a>
        <div class="news-quality">
          ${article.sourceClass ? `<span>${escapeHTML(article.sourceClass)}</span>` : ""}
          ${Number.isFinite(article.relevanceScore) ? `<span${relevanceExplanation}>relevance ${escapeHTML(article.relevanceScore)}</span>` : ""}
          ${article.coverageCount > 1 ? `<span>${escapeHTML(article.coverageCount)} reports</span>` : ""}
        </div>
        ${article.riskSignals?.length ? `<div class="news-signals">${article.riskSignals.map(escapeHTML).join(" · ")}</div>` : ""}
        ${related ? `<details class="news-related"><summary>Related coverage</summary><ul>${related}</ul></details>` : ""}
      </article>`;
  }).join("");
  return `
    <section class="block">
      <div class="news-head">
        <div>
          <p class="block-title">Country risk news</p>
          <p class="block-note">Up to 10 highest-value events · space reserved for qualifying news from the latest 30 days · one-year maximum.</p>
        </div>
        <span class="news-updated">Updated ${escapeHTML(generated)}</span>
      </div>
      ${rows || '<p class="empty-note">No qualifying sovereign-risk items found yet. The next refresh will search the previous six months.</p>'}
      <p class="news-disclaimer">Discovery feed only—not an underwriting conclusion. Confirm material facts against primary or authoritative sources.</p>
    </section>`;
}

function imfArticleIVHTML(countryKey, country) {
  const stored = NEWS_DATA.imfArticleIV?.[countryKey];
  const isArticleIV = item => /article iv|consultation under article iv/i.test(item?.title || item?.label || "");
  const completed = item => item && (item.status === "completed" || /(?:concludes?|concluded|completes?|completed).*article iv|article iv.*(?:concluded|completed)/i.test(item.title || item.label || "")) && !/mission|staff.concluding/i.test(item.title || item.label || "");
  const calendarRecords = (country.past || []).filter(isArticleIV).map(item => ({
    ...item, title: item.label, reviewDate: item.date,
    keyPoints: item.keyPoints || (item.meta ? item.meta.split(/;\s*|\n+/).filter(Boolean) : []), calendarRecord: true
  }));
  const verified = PROFILE_REVIEWS.countries[countryKey]?.imfArticleIV;
  const candidates = [country.imfArticleIV, stored?.lastCompletedReview, stored, verified].filter(completed);
  // Only actual Board dates can supersede a verified Board date. Publication and
  // legacy calendar dates may represent an entirely different event.
  const dated = candidates.filter(item => /^\d{4}-\d{2}-\d{2}$/.test(item.reviewDate || ""))
    .sort((a, b) => b.reviewDate.localeCompare(a.reviewDate) || Number(b === verified) - Number(a === verified));
  const review = dated[0] || candidates.sort((a,b) => String(b.publishedAt || "").localeCompare(String(a.publishedAt || "")))[0]
    || calendarRecords.filter(completed).sort((a,b) => String(b.date).localeCompare(String(a.date)))[0];
  const latest = stored || country.imfArticleIV;
  const points = (Array.isArray(review?.keyPoints) ? review.keyPoints : []).filter(point => typeof point === "string" && point.trim());
  const nextEvent = (country.upcoming || []).filter(isArticleIV)
    .filter(item => (item.sourceUrl || item.url) && /^\d{4}-\d{2}-\d{2}$/.test(item.sortDate || item.date || "") && new Date(item.sortDate || item.date) >= TODAY)
    .sort((a, b) => String(a.sortDate || a.date).localeCompare(String(b.sortDate || b.date)))[0];
  const explicitNext = [country.imfArticleIV, stored, review, verified].find(item => item?.nextReviewDate && new Date(item.nextReviewDate) >= TODAY);
  const nextDate = explicitNext?.nextReviewDate || nextEvent?.date;
  const nextEstimated = explicitNext ? explicitNext.nextReviewEstimated : nextEvent?.estimated;
  const fallbackUrl = `https://www.imf.org/en/Countries/${encodeURIComponent(country.iso3 || "")}`;
  const url = review?.sourceUrl || review?.url || fallbackUrl;
  const newerNews = latest && latest !== review && (latest.url || latest.sourceUrl) !== url && (!review || String(latest.publishedAt || latest.reviewDate || "") > String(review.reviewDate || review.publishedAt || ""));
  return `<section class="block imf-article-iv">
    <div class="imf-article-head"><div><p class="block-title">IMF Article IV consultation</p><p class="block-note">Latest verified completed consultation. Findings refer to that consultation, not today’s conditions.</p></div><span class="imf-mark">IMF</span></div>
    <div class="imf-review-dates">
      <div><span>Last review</span><strong>${escapeHTML(reviewDateLabel(review?.reviewDate))}</strong>${review?.calendarRecord ? "<small>Recorded calendar date</small>" : review?.publishedAt ? `<small>Release published ${escapeHTML(reviewDateLabel(review.publishedAt))}</small>` : ""}</div>
      <div><span>Next review</span><strong>${nextDate ? escapeHTML(reviewDateLabel(nextDate)) : "Not announced in recorded sources"}</strong>${nextDate ? `<small>${nextEstimated ? "Indicative timing — not confirmed" : "Scheduled in source record"}</small>` : ""}</div>
    </div>
    ${review?.note ? `<p class="imf-vintage-note">${escapeHTML(review.note)}</p>` : ""}
    ${review ? `<p class="imf-article-title">${escapeHTML(review.title || review.label)}</p><p class="imf-points-label">Key points</p>${points.length ? `<ul class="imf-key-points">${points.map(point => `<li>${escapeHTML(point)}</li>`).join("")}</ul>` : `<p class="empty-note">Key points have not yet been recorded from this consultation.</p>`}` : `<p class="empty-note">No completed Article IV consultation has been recorded yet.</p>`}
    ${newerNews ? `<div class="imf-latest-news"><span>Latest Article IV update · ${escapeHTML(reviewDateLabel(latest.publishedAt || latest.reviewDate))}</span><p>${sourceLink(latest.url || latest.sourceUrl, latest.title || "IMF consultation update")}</p><small>A mission statement or publication date does not establish the date of a completed Board review.</small></div>` : ""}
    <p class="imf-article-link">${sourceLink(url, review?.sourceUrl || review?.url ? "Open IMF consultation source ↗" : "Check IMF country page ↗")}${review?.dateSourceUrl ? ` · ${sourceLink(review.dateSourceUrl, "Verify Board date ↗")}` : ""}${review?.checkedAt ? `<small>Sources checked ${escapeHTML(reviewDateLabel(review.checkedAt))}</small>` : ""}</p>
  </section>`;
}


let active = "__home__";
let countryView = "profile";
let historyFilter = "All";
let historyCountry = null;

const SENTIMENT_PRIORITY = ["rust", "amber", "moss"]; // worst-first, for single-color contexts (map fill)

const SEVERITY_PRIORITY = ["rust", "amber", "moss"]; // worst-first, for single-color contexts (map fill)

// Deliberately excludes c.past: a country's summary color reflects its CURRENT standing —
// active status flags and what's still pending — not things that happened and were resolved
// long ago. A 2023 rating action shouldn't still be coloring the map in 2026.
function severityDots(c) {
  const set = new Set();
  c.upcoming.forEach(e => { if (e.severity) set.add(e.severity); });
  if (c.status.fatf) set.add("rust");
  if (c.status.parisClub) set.add("rust");
  if (c.status.imf) set.add("amber");
  return SEVERITY_PRIORITY.filter(s => set.has(s));
}

function renderList(filter = "") {
  document.getElementById("overviewBtn").className = "country-item" + (active === "__home__" ? " active" : "");
  const list = document.getElementById("countryList");
  list.innerHTML = "";
  const sortKey = (k) => countries[k].name.replace(/^The\s+/i, "");
  const alphabetical = [...order].sort((a, b) => sortKey(a).localeCompare(sortKey(b)));
  alphabetical.forEach(key => {
    const c = countries[key];
    if (filter && !c.name.toLowerCase().includes(filter.toLowerCase())) return;
    const li = document.createElement("li");
    li.className = "country-item" + (key === active ? " active" : "");
    li.innerHTML = `<span class="cname">${c.name}</span>`;
    li.onclick = () => { active = key; countryView = "profile"; renderList(document.getElementById("search").value); renderMain(); };
    list.appendChild(li);
  });
}

document.getElementById("overviewBtn").onclick = () => { active = "__home__"; countryView = "profile"; renderList(document.getElementById("search").value); renderHome(); };


function fhClass(status) {
  if (status === "Free") return "free";
  if (status === "Partly Free") return "partly";
  return "not";
}

function chip(label, value, severity) {
  if (!value) return "";
  return `<div class="chip"><span class="chip-dot" style="background:var(--${severity})"></span><span class="chip-label">${label}</span><span class="chip-value">${value}</span></div>`;
}

function spineHTML(events, includeToday) {
  const sorted = [...events];
  let html = `<div class="spine">`;
  let todayInserted = !includeToday;
  sorted.forEach(e => {
    if (includeToday && !todayInserted) {
      const d = Date.parse(e.date);
      if (!isNaN(d) && d > TODAY) {
        html += `<div class="spine-today" data-label="${TODAY_LABEL}"></div>`;
        todayInserted = true;
      }
    }
    html += `
      <div class="spine-item ${e.severity}">
        <div class="ev-date">${e.date}</div>
        <div class="ev-label"><span class="ev-tag">${e.tag}</span>${e.label}</div>
        <div class="ev-meta">${e.meta}</div>
      </div>`;
  });
  if (includeToday && !todayInserted) html += `<div class="spine-today" data-label="${TODAY_LABEL}"></div>`;
  html += `</div>`;
  return html;
}

function historyHTML(countryKey) {
  if (historyCountry !== countryKey) {
    historyCountry = countryKey;
    historyFilter = "All";
  }

  const events = [...(HISTORICAL_EVENTS[countryKey] || [])]
    .sort((a, b) => b.sortDate.localeCompare(a.sortDate));
  const categories = ["All", ...new Set(events.map(event => event.category))];
  const visible = historyFilter === "All"
    ? events
    : events.filter(event => event.category === historyFilter);

  const filters = categories.map(category => `
    <button
      class="history-filter${category === historyFilter ? " active" : ""}"
      type="button"
      aria-pressed="${category === historyFilter}"
      onclick="historyFilter='${category}'; renderMain();"
    >${category}</button>
  `).join("");

  const renderHistoryRows = list => list.map(event => {
    const source = HISTORY_SOURCES[event.source];
    return `
      <div class="spine-item ${event.severity}">
        <div class="ev-date">${event.date}</div>
        <div class="ev-label"><span class="ev-tag">${event.category}</span>${event.label}</div>
        <div class="ev-meta">${event.impact}</div>
        ${source ? `<a class="history-source" href="${source.url}" target="_blank" rel="noopener noreferrer">Source class: ${source.label} ↗</a>` : ""}
      </div>`;
  }).join("");

  const recent = visible.filter(event => Number(event.date.slice(0, 4)) >= HISTORY_DEEP_COVERAGE_START_YEAR);
  const anchors = visible.filter(event => Number(event.date.slice(0, 4)) < HISTORY_DEEP_COVERAGE_START_YEAR);
  const segments = [
    recent.length ? `
      <section class="history-segment">
        <div class="history-era">
          <span>${HISTORY_DEEP_COVERAGE_START_YEAR}–present</span>
          <small>Deeper coverage · ${recent.length} event${recent.length === 1 ? "" : "s"}</small>
        </div>
        <div class="spine">${renderHistoryRows(recent)}</div>
      </section>` : "",
    anchors.length ? `
      <section class="history-segment">
        <div class="history-era">
          <span>${HISTORY_START_YEAR}–${HISTORY_DEEP_COVERAGE_START_YEAR - 1}</span>
          <small>Country-defining anchors only · ${anchors.length} event${anchors.length === 1 ? "" : "s"}</small>
        </div>
        <div class="spine">${renderHistoryRows(anchors)}</div>
      </section>` : "",
  ].join("");

  return `
    <div class="history-head">
      <div>
        <p class="block-title">Historical turning points</p>
        <p class="block-note" style="margin-bottom:0;">1945–present · sparse anchor history before 2016, with deeper coverage for the past decade.</p>
      </div>
      <span class="history-count">${visible.length} of ${events.length} events</span>
    </div>
    <p class="history-review">Initial research set. Keep analyst approval in the publishing workflow before external distribution.</p>
    <div class="history-filters" aria-label="Filter historical events">${filters}</div>
    ${segments || '<p class="empty-note">No events in this category.</p>'}
  `;
}

function renderMain() {
  document.getElementById("main").style.maxWidth = "960px";
  const c = countries[active];
  if (countryView === "economics") {
    document.getElementById("main").style.maxWidth = "1120px";
    document.getElementById("main").innerHTML = economicsPageHTML(active, c);
    return;
  }
  const chips = [
    chip("FATF", c.status.fatf, c.status.fatf && c.status.fatf.includes("black") ? "rust" : "amber"),
    chip("IMF programme", c.status.imf, "amber"),
    chip("Paris Club", c.status.parisClub, "rust"),
  ].join("");

  const ratingBlocks = [["sp", "S&P"], ["fitch", "Fitch"], ["moodys", "Moody's"]]
    .map(([key, agency]) => ratingBlockHTML(c, key, agency)).join("");

  document.getElementById("main").innerHTML = `
    ${countryPageNavHTML()}
    <div class="country-head">
      <div>
        <h1 class="country-title">${c.name}</h1>
        <p class="country-region">${c.region}</p>
      </div>
      <div class="ratings">${ratingBlocks}</div>
    </div>
    <p class="map-caption" style="margin:-14px 0 22px;">Long-term foreign-currency sovereign ratings. NR = not rated. Dates link to sources; assignment dates and periodic reviews are labelled separately. Research checked ${escapeHTML(reviewDateLabel(PROFILE_REVIEWS.checkedAt))}.</p>

    <div class="snapshot">
      <div class="snapshot-row">
        <div class="snapshot-leader">
          <span class="role">Leader</span>
          ${c.snapshot.leader} <span style="color:var(--text-faint);">· ${c.snapshot.party}</span>
        </div>
        <div class="fh-badge ${fhClass(c.snapshot.fh)}">Freedom House: ${c.snapshot.fh}</div>
      </div>
      <div class="snapshot-opposition"><strong>Opposition — </strong>${c.snapshot.opposition}</div>
      <p class="block-title" style="font-size:13px; margin-bottom:8px;">Key issues</p>
      ${c.snapshot.issues.length
        ? `<ul class="issues-list">${c.snapshot.issues.map(i => `<li>${i}</li>`).join("")}</ul>`
        : '<p class="no-issues">Nothing acute currently flagged.</p>'}
    </div>

    <div class="chip-row">${chips}</div>

    ${imfArticleIVHTML(active, c)}

    ${newsHTML(active)}

    <section class="block">
      <p class="block-title">Upcoming calendar</p>
      <p class="block-note">Elections, programme reviews, listings and maturities — chronological, past → future.</p>
      ${c.upcoming.length ? spineHTML(c.upcoming, false) : '<p class="empty-note">Nothing scheduled from tracked sources.</p>'}
    </section>

    <section class="block">
      <p class="block-title">Recent history</p>
      <p class="block-note">Key events in the last ~24 months.</p>
      ${c.past.length ? spineHTML(c.past, false) : '<p class="empty-note">No tracked events yet.</p>'}
    </section>

    <section class="block">
      ${historyHTML(active)}
    </section>

    <div class="source-line">Sources: ${c.sources}</div>
  `;
}

// --- Overview / home: world map + this-month/quarter feed ---

// Map geometry is loaded from data/map-data.js.


function collectEvents() {
  const rows = [];
  order.forEach(key => {
    countries[key].upcoming.forEach(e => rows.push({ key, ...e }));
  });
  return rows;
}

let homeRange = 90; // days

function renderFeed() {
  const rows = collectEvents();
  const horizon = new Date(TODAY.getTime() + homeRange * 86400000);
  const inRange = rows.filter(e => e.sortDate && parseISODate(e.sortDate) >= TODAY && parseISODate(e.sortDate) <= horizon)
                       .sort((a, b) => parseISODate(a.sortDate) - parseISODate(b.sortDate));

  const rowHTML = (e) => {
    const c = countries[e.key];
    return `
      <div class="feed-row" onclick="active='${e.key}'; countryView='profile'; renderList(); renderMain();">
        <div class="feed-when">${e.date}</div>
        <div class="feed-country"><span>${c.name}</span></div>
        <div class="feed-body">
          <div class="feed-label"><span class="ev-tag">${e.tag}</span>${e.label}${e.estimated ? ' <span style="color:var(--text-faint);font-size:11px;">(estimated)</span>' : ''}</div>
          <div class="feed-meta">${e.meta}</div>
        </div>
      </div>`;
  };

  document.getElementById("feedList").innerHTML = inRange.length
    ? inRange.map(rowHTML).join("")
    : '<p class="empty-note">Nothing due in this window from tracked sources.</p>';
}

function setRange(days) {
  homeRange = days;
  document.getElementById("rangeMonth").className = "range-btn" + (days === 30 ? " active" : "");
  document.getElementById("rangeQuarter").className = "range-btn" + (days === 90 ? " active" : "");
  renderFeed();
}

function renderHome() {
  document.getElementById("main").style.maxWidth = "1400px";
  const pins = order.map(key => {
    const c = countries[key];
    const sev = severityDots(c)[0] || "";
    const shape = COUNTRY_SHAPES[key] ? `<path class="country-shape" d="${COUNTRY_SHAPES[key]}"/>` : "";
    return `<g class="map-pin ${sev}" onclick="active='${key}'; countryView='profile'; renderList(); renderMain();">
        <title>${c.name}</title>
        ${shape}
      </g>`;
  }).join("");

  document.getElementById("main").innerHTML = `
    <h1 class="home-title">Overview</h1>
    <p class="home-sub">15 pilot countries · Last updated ${formatLongDate(DATA_LAST_UPDATED)}</p>

    <div class="map-wrap">
      <svg viewBox="0 0 1000 500" style="width:100%; height:auto; display:block;">
        <g class="map-land">${WORLD_BASE_PATHS}</g>
        ${pins}
      </svg>
      <p class="map-caption">Real boundaries (Natural Earth data) · light blue indicates no current status colour; amber, red and green reflect current standing. Tracked countries are clickable.</p>
    </div>

    <div class="range-toggle">
      <button class="range-btn" id="rangeMonth" onclick="setRange(30)">This month</button>
      <button class="range-btn active" id="rangeQuarter" onclick="setRange(90)">This quarter</button>
    </div>

    <section class="block">
      <p class="block-title">Due in this window</p>
      <p class="block-note">Every tracked event with a confirmed or estimated date, across all pilot countries.</p>
      <div id="feedList"></div>
    </section>
  `;
  renderFeed();
}

document.getElementById("search").addEventListener("input", (e) => renderList(e.target.value));
renderList();
if (active === "__home__") { renderHome(); } else { renderMain(); }
