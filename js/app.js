/* Country Dashboard application logic. Data is loaded before this file. */
'use strict';

const DATA_LAST_UPDATED = window.SITE_CONFIG.dataLastUpdated;
const HISTORY_START_YEAR = window.SITE_CONFIG.historyStartYear;
const HISTORY_DEEP_COVERAGE_START_YEAR = window.SITE_CONFIG.historyDeepCoverageStartYear;
const { countries, order } = window.COUNTRY_DATA;
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

function newsHTML(countryKey) {
  const articles = (NEWS_DATA.countries?.[countryKey] || []).slice(0, 12);
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
          <p class="block-note">GDELT discovery + direct official sources · event-clustered · standard 30 days · elevated 90 days · critical 180 days.</p>
        </div>
        <span class="news-updated">Updated ${escapeHTML(generated)}</span>
      </div>
      ${rows || '<p class="empty-note">No qualifying items found in the current 30-day search window.</p>'}
      <p class="news-disclaimer">Discovery feed only—not an underwriting conclusion. Confirm material facts against primary or authoritative sources.</p>
    </section>`;
}


let active = "__home__";
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
    li.onclick = () => { active = key; renderList(document.getElementById("search").value); renderMain(); };
    list.appendChild(li);
  });
}

document.getElementById("overviewBtn").onclick = () => { active = "__home__"; renderList(document.getElementById("search").value); renderHome(); };


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
  const chips = [
    chip("FATF", c.status.fatf, c.status.fatf && c.status.fatf.includes("black") ? "rust" : "amber"),
    chip("IMF programme", c.status.imf, "amber"),
    chip("Paris Club", c.status.parisClub, "rust"),
  ].join("");

  const ratingBlocks = [
    ["S&P", c.ratings.sp], ["Fitch", c.ratings.fitch], ["Moody's", c.ratings.moodys],
  ].map(([agency, [val, outlook]]) =>
    `<div class="rating-block"><p class="rating-agency">${agency}</p><p class="rating-value">${val}</p><p class="rating-outlook">${outlook}</p></div>`
  ).join("");

  document.getElementById("main").innerHTML = `
    <div class="country-head">
      <div>
        <h1 class="country-title">${c.name}</h1>
        <p class="country-region">${c.region}</p>
      </div>
      <div class="ratings">${ratingBlocks}</div>
    </div>
    <p class="map-caption" style="margin:-14px 0 22px;">Latest action per agency shown; NR = not rated by that agency.</p>

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
      <div class="feed-row" onclick="active='${e.key}'; renderList(); renderMain();">
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
    return `<g class="map-pin ${sev}" onclick="active='${key}'; renderList(); renderMain();">
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
