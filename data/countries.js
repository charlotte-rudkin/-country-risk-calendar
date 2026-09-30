/* Primary editable country profile and calendar data. */
(function () {
  'use strict';

const countries = {
  usa: {
    name: "United States", iso3: "USA", region: "North America", coords: [39, -95],
    ratings: { sp: ["AA+","Stable"], fitch: ["AA+","Stable"], moodys: ["Aa1","Stable"] },
    snapshot: {"leader": "Donald Trump", "party": "Republican Party", "fh": "Free", "opposition": "Democrats hold roughly 45% of House and Senate seats; the Nov 3, 2026 midterms could flip House control.", "issues": ["Press access dispute \u2014 White House barred CNN, MSNBC and Politico (Sept 2026); outlets are suing on First Amendment grounds", "Voting rights \u2014 Supreme Court's Louisiana v. Callais ruling (Apr 2026) narrows majority-minority districting ahead of the midterms"]},
    status: {},
    upcoming: [
      { date: "2026-11-03", sortDate: "2026-11-03", tag: "Election", label: "Federal midterm elections (House &amp; Senate)", meta: "Confirmed — fixed constitutional date", severity: "" },
    ],
    past: [
      { date: "2026-04-01", tag: "IMF", label: "IMF concludes 2026 Article IV Consultation", meta: "Growth projected at 2.4% for 2026; debt at 123.9% of GDP", severity: "" },
      { date: "2023-08", tag: "Rating", label: "Fitch downgrades U.S. long-term rating to AA+", meta: "Cited fiscal deterioration and governance erosion", severity: "amber" },
    ],
    sources: "IFES ElectionGuide · Fitch/Moody's/S&P calendars · imf.org/en/countries/usa · Freedom House 2026 · Reuters/AP, Wikipedia (leadership & elections)"
  },

  mexico: {
    name: "Mexico", iso3: "MEX", region: "North America", coords: [23.6, -102.5],
    ratings: { sp: ["BBB","Negative"], fitch: ["BBB−","Stable"], moodys: ["Baa3","—"] },
    snapshot: {"leader": "Claudia Sheinbaum", "party": "Morena", "fh": "Partly Free", "opposition": "PAN, PRI and MC combined hold ~27% of Chamber of Deputies seats and ~32% of Senate seats; Morena and allies have a two-thirds constitutional supermajority in the Chamber.", "issues": ["USMCA review \u2014 the pact's mandatory 2026 joint review carries renegotiation risk", "Judicial capture concerns \u2014 2025 direct election of federal judges (12% turnout) produced a Morena-aligned judiciary", "Cartel violence \u2014 assassinations of local and state officials continued through 2025\u201326"]},
    status: {},
    upcoming: [
      { date: "2027-06", sortDate: "2027-06-01", tag: "Election", label: "Federal midterm elections", meta: "Chamber of Deputies renewed every 3 years", severity: "" },
    ],
    past: [
      { date: "2026-05", tag: "Rating", label: "S&P revises outlook to negative; Moody's downgrades to lowest investment-grade rung", meta: "Two agencies acted within two weeks of each other; both cited continued fiscal support for Pemex and the Federal Electricity Commission", severity: "amber" },
    ],
    sources: "IFES ElectionGuide · Fitch/Moody's/S&P calendars · Freedom House 2026 · Reuters/AP, Wikipedia (leadership & elections)"
  },

  bahamas: {
    name: "The Bahamas", iso3: "BHS", region: "Caribbean", coords: [24.3, -76.6],
    ratings: { sp: ["BB−","Stable"], fitch: ["BB−","Stable"], moodys: ["Ba3","Stable"] },
    snapshot: {"leader": "Philip Davis", "party": "Progressive Liberal Party (PLP)", "fh": "Free", "opposition": "FNM holds 8 of 41 House of Assembly seats (20%) after the May 2026 election, on 35% of the popular vote.", "issues": []},
    status: {},
    upcoming: [
      { date: "By ~2031", sortDate: "2031-05-01", tag: "Election", label: "Next general election", meta: "5-year term; House of Assembly expanded to 41 seats for the 2026 vote", severity: "" },
    ],
    past: [
      { date: "2026-05-12", tag: "Election", label: "General election — PLP re-elected under Davis", meta: "First Bahamian PM to win a second consecutive term since 1997", severity: "" },
      { date: "2026-04", tag: "Rating", label: "Moody's upgrades to Ba3 from B1", meta: "Cites sustained fiscal consolidation, lower borrowing needs and reduced liquidity risk — follows S&P's Sep 2025 upgrade to BB− and Fitch's inaugural BB− rating (Apr 2026); no active FATF or IMF programme status", severity: "moss" },
    ],
    sources: "IFES ElectionGuide · Fitch/Moody's/S&P calendars · fatf-gafi.org Plenary statements · Freedom House 2026 · Reuters/AP, Wikipedia (leadership & elections)"
  },

  serbia: {
    name: "Serbia", iso3: "SRB", region: "South-East Europe", coords: [44.8, 20.5],
    ratings: { sp: ["BBB−","Stable"], fitch: ["BB+","Positive"], moodys: ["Ba2","Stable"] },
    snapshot: {"leader": "Aleksandar Vu\u010di\u0107", "party": "Serbian Progressive Party (SNS)", "fh": "Partly Free", "opposition": "SNS and allies hold a majority of the 250 National Assembly seats; sustained mass protests since the Nov 2024 Novi Sad railway station collapse have kept sizable street pressure on the government.", "issues": ["Civil unrest \u2014 nationwide protests continuing since Nov 2024", "Unconfirmed election \u2014 National Assembly vote expected ~Oct 2026, date not yet set"]},
    status: { imf: "Active — 36-month Policy Coordination Instrument (since Oct 2024)" },
    upcoming: [
      { date: "2026-10-25", sortDate: "2026-10-25", tag: "Election", label: "National Assembly election", meta: "Date not yet confirmed — IFES ElectionGuide", severity: "amber" },
      { date: "~Q4 2026 / early 2027", sortDate: "2026-11-30", estimated: true, tag: "IMF", label: "Fourth review — Policy Coordination Instrument", meta: "Estimated from ~5–6 month review cadence; confirm on IMF Serbia page", severity: "amber" },
    ],
    past: [
      { date: "2026-06-15", tag: "IMF", label: "Third PCI review concluded", meta: "All end-2025 quantitative targets met", severity: "moss" },
      { date: "2024-12", tag: "Rating", label: "Serbia receives its first-ever investment grade rating", meta: "Following completion of prior Stand-By Arrangement", severity: "moss" },
    ],
    sources: "IFES ElectionGuide · Fitch/Moody's/S&P calendars · imf.org/en/countries/srb · Freedom House 2026 · Reuters/AP, Wikipedia (leadership & elections)"
  },

  turkey: {
    name: "Türkiye", iso3: "TUR", region: "Europe / Middle East", coords: [39.9, 32.8],
    ratings: { sp: ["BB−","Stable"], fitch: ["BB−","Stable"], moodys: ["B1","Positive"] },
    snapshot: {"leader": "Recep Tayyip Erdo\u011fan", "party": "AKP (Justice and Development Party)", "fh": "Not Free", "opposition": "CHP (Republican People's Party) is the main opposition and won most major cities in the 2024 local elections, but is under sustained legal pressure.", "issues": ["Opposition crackdown \u2014 CHP's presidential frontrunner Ekrem \u0130mamo\u011flu has been jailed since Mar 2025 facing a 2,000+ year sentence request; ~20 CHP mayors have been detained", "Civil unrest \u2014 recurring mass protests and detentions since \u0130mamo\u011flu's arrest", "Elevated inflation \u2014 disinflation programme still underway, ~30% y/y in late 2025"]},
    status: {},
    upcoming: [
      { date: "By 7 May 2028", sortDate: "2028-05-07", tag: "Election", label: "General election — presidential &amp; parliamentary", meta: "Constitutional deadline; early 2027 vote explicitly ruled out by government (18 Sep 2026)", severity: "" },
    ],
    past: [
      { date: "2026-02-13", tag: "IMF", label: "2025 Article IV Consultation concluded", meta: "Inflation fell from 49.4% (Sep 2024) to 30.9% (Dec 2025) — no active programme, so not tracked as a calendar event", severity: "" },
    ],
    sources: "IFES ElectionGuide · Fitch/Moody's/S&P calendars · imf.org/en/countries/tur · Freedom House 2026 · Reuters/AP, Wikipedia (leadership & elections)"
  },

  egypt: {
    name: "Egypt", iso3: "EGY", region: "North Africa", coords: [26.8, 30.8],
    ratings: { sp: ["B","Stable"], fitch: ["B","Stable"], moodys: ["Caa1","Negative"] },
    snapshot: {"leader": "Abdel Fattah el-Sisi", "party": "Independent (backed by the Nation's Future Party-led coalition)", "fh": "Not Free", "opposition": "No meaningful legislative opposition \u2014 the pro-Sisi coalition holds an overwhelming majority in the House of Representatives.", "issues": ["IMF programme \u2014 active EFF/RSF arrangement; 8th/final review expected ~Q4 2026", "Regional conflict spillover \u2014 Middle East war has weighed on Suez Canal transit revenue and investor sentiment", "Elevated inflation \u2014 running above 15% into 2026"]},
    status: { imf: "Active — Extended Fund Facility + Resilience & Sustainability Facility (since Dec 2022, extended through Dec 2026)" },
    upcoming: [
      { date: "~Nov/Dec 2026", sortDate: "2026-11-20", estimated: true, tag: "IMF", label: "Eighth (final) EFF review, ahead of arrangement expiry", meta: "EFF extended through 15 Dec 2026; confirm on IMF Egypt page", severity: "amber" },
    ],
    past: [
      { date: "2026-07-30", tag: "IMF", label: "Seventh EFF review + second RSF review completed", meta: "GDP growth ~5% in Q3 FY2025/26; primary balance and tax targets exceeded", severity: "moss" },
      { date: "2026-01", tag: "Election", label: "House of Representatives election concluded", meta: "Longest parliamentary election in Egypt's modern history, extended by annulments and re-runs; next due 2030", severity: "" },
    ],
    sources: "IFES ElectionGuide · Fitch/Moody's/S&P calendars · imf.org/en/countries/egy · Freedom House 2026 · Reuters/AP, Wikipedia (leadership & elections)"
  },

  uzbekistan: {
    name: "Uzbekistan", iso3: "UZB", region: "Central Asia", coords: [41.4, 64.6],
    ratings: { sp: ["BB","Stable"], fitch: ["BB","Positive"], moodys: ["Ba2","Stable"] },
    snapshot: {"leader": "Shavkat Mirziyoyev", "party": "UzLiDeP (Liberal Democratic Party)", "fh": "Not Free", "opposition": "No genuine opposition party \u2014 every party represented in parliament is pro-government.", "issues": ["Long-tenure risk \u2014 the 2023 constitutional reset restarted Mirziyoyev's term count, opening a path to rule until 2037"]},
    status: {},
    upcoming: [
      { date: "By ~2030", sortDate: "2030-07-01", tag: "Election", label: "Next presidential election", meta: "Current 7-year term began July 2023 following constitutional reset", severity: "" },
    ],
    past: [
      { date: "2026-06", tag: "Rating", label: "Moody's upgrades to Ba2; Fitch revises outlook to positive (BB affirmed)", meta: "Both cite confidence in reform trajectory since 2017 liberalization program", severity: "moss" },
    ],
    sources: "IFES ElectionGuide · Fitch/Moody's/S&P calendars · imf.org/en/countries/uzb · Freedom House 2026 · Reuters/AP, Wikipedia (leadership & elections)"
  },

  vietnam: {
    name: "Vietnam", iso3: "VNM", region: "Southeast Asia", coords: [16.2, 107.8],
    ratings: { sp: ["BB+","Stable"], fitch: ["BB+","Stable"], moodys: ["Ba2","Stable"] },
    snapshot: {"leader": "T\u00f4 L\u00e2m", "party": "Communist Party of Vietnam (sole legal party)", "fh": "Not Free", "opposition": "None permitted \u2014 one-party state.", "issues": ["FATF grey list \u2014 listed since 2023; reforms target virtual-asset AML rules", "South China Sea tensions \u2014 ongoing maritime disputes with China"]},
    status: { fatf: "Grey list — Jurisdiction under Increased Monitoring (since 2023)" },
    upcoming: [
      { date: "October 2026", sortDate: "2026-10-15", tag: "FATF", label: "October Plenary review", meta: "Reforms target FATF Recommendation 15 (virtual assets); still listed as of the June 2026 Plenary", severity: "amber" },
    ],
    past: [
      { date: "2026-03-15", tag: "Election", label: "National Assembly election concluded", meta: "16th National Assembly convened April 2026; next election due 2031", severity: "" },
    ],
    sources: "fatf-gafi.org Plenary statements · IFES ElectionGuide · Freedom House 2026 · Reuters/AP, Wikipedia (leadership & elections)"
  },

  senegal: {
    name: "Senegal", iso3: "SEN", region: "West Africa", coords: [14.5, -14.5],
    ratings: { sp: ["CCC+","CreditWatch Dev."], fitch: ["NR","—"], moodys: ["B1","—"] },
    snapshot: {"leader": "Bassirou Diomaye Faye (President) / Ousmane Sonko (PM)", "party": "Pastef", "fh": "Free", "opposition": "Pastef and allies hold roughly 78% of National Assembly seats after the Nov 2024 election; the opposition was reduced sharply following the 2024 transfer of power.", "issues": ["Hidden debt scandal \u2014 the prior government concealed over $11bn in debt (2019\u201324); a new IMF programme reached staff-level agreement Sept 2026 but is not yet Board-approved", "Sovereign rating distress \u2014 S&P at CCC+ (CreditWatch Developing); Moody's downgraded to B1"]},
    status: {},
    upcoming: [
      { date: "~Nov/Dec 2026", sortDate: "2026-11-15", estimated: true, tag: "IMF", label: "Executive Board approval of new 36-month arrangement", meta: "Staff-level agreement reached 1 Sept 2026 for ~$2.2bn programme; not yet Board-approved, and Senegal's National Assembly has not ratified the underlying bill", severity: "amber" },
    ],
    past: [
      { date: "2026-09-01", tag: "IMF", label: "Staff-level agreement reached on new IMF programme", meta: "Follows suspension of prior $1.8bn programme in 2025 after hidden-debt discovery; government frames the treatment plan as debt management rather than restructuring", severity: "moss" },
      { date: "2025-11", tag: "Rating", label: "S&P downgrades to CCC+ from B−", meta: "Warned of further cuts absent a refinancing plan; end-2023 debt was restated from 74.4% to 111% of GDP after the hidden-debt scandal", severity: "rust" },
      { date: "2024-10", tag: "Rating", label: "Moody's downgrades to B1 from Ba3", meta: "Followed disclosure of undeclared debt accrued 2019–2024 under the previous administration", severity: "amber" },
    ],
    sources: "IMF Senegal country page · Fitch/Moody's/S&P calendars · Reuters/press reporting on the hidden-debt scandal · Freedom House 2026 · Reuters/AP, Wikipedia (leadership & elections)"
  },

  cotedivoire: {
    name: "Côte d'Ivoire", iso3: "CIV", region: "West Africa", coords: [7.5, -5.5],
    ratings: { sp: ["BB","Stable"], fitch: ["BB","Stable"], moodys: ["Ba3","Positive"] },
    snapshot: {"leader": "Alassane Ouattara", "party": "RHDP", "fh": "Partly Free", "opposition": "Main opposition figures Laurent Gbagbo and Tidjane Thiam were barred from the Oct 2025 presidential race on legal grounds; RHDP dominates the National Assembly.", "issues": ["Succession concern \u2014 Ouattara, 83, won a widely contested fourth term in Oct 2025", "FATF grey list \u2014 on track for possible October 2026 delisting"]},
    status: { fatf: "Grey list — Jurisdiction under Increased Monitoring (since Oct 2024)" },
    upcoming: [
      { date: "October 2026", sortDate: "2026-10-15", tag: "FATF", label: "October Plenary — expected delisting decision", meta: "June 2026 Plenary found action plan substantially complete and ordered an on-site assessment; Bloomberg reports removal expected", severity: "amber" },
    ],
    past: [
      { date: "2026-06-19", tag: "FATF", label: "June Plenary: action plan deemed substantially complete", meta: "On-site assessment ordered ahead of a possible October 2026 delisting", severity: "moss" },
      { date: "2025", tag: "Election", label: "Presidential election held", meta: "Next presidential election due ~2030 (5-year term)", severity: "" },
    ],
    sources: "fatf-gafi.org Plenary statements · IFES ElectionGuide · Fitch/Moody's/S&P calendars · Freedom House 2026 · Reuters/AP, Wikipedia (leadership & elections)"
  },

  benin: {
    name: "Benin", iso3: "BEN", region: "West Africa", coords: [9.3, 2.3],
    ratings: { sp: ["BB−","Stable"], fitch: ["B+","Positive"], moodys: ["B1","Stable"] },
    snapshot: {"leader": "Romuald Wadagni", "party": "Independent (backed by Talon's UPR-led coalition)", "fh": "Partly Free", "opposition": "Pro-government UPR and Republican Bloc won all 109 National Assembly seats in the Jan 2026 election \u2014 no opposition party crossed the seat threshold; Wadagni won the presidency with 94% of the vote against a single permitted opposition candidate.", "issues": ["Coup attempt \u2014 a failed Dec 2025 coup targeted then-President Talon", "Jihadist insurgency \u2014 ongoing attacks in northern Benin", "Opposition exclusion \u2014 main opposition figures barred from contesting recent elections"]},
    status: {},
    upcoming: [
      { date: "By ~2033", sortDate: "2033-02-01", tag: "Election", label: "Next legislative and presidential elections", meta: "7-year presidential term; both houses last renewed Jan/Apr 2026", severity: "" },
    ],
    past: [
      { date: "2026-01 / 2026-04", tag: "Election", label: "Parliamentary and presidential elections concluded", meta: "First elections held under a new bicameral legislature, validated by the Constitutional Court in Dec 2025", severity: "" },
      { date: "2025-12-07", tag: "Coup attempt", label: "Failed coup attempt against President Talon", meta: "Mutinous soldiers seized residences and abducted officials; repulsed with ECOWAS Standby Force support; several killed", severity: "rust" },
    ],
    sources: "IFES ElectionGuide · Wikipedia/press reporting on the December 2025 coup attempt · Freedom House 2026 · Reuters/AP, Wikipedia (leadership & elections)"
  },

  angola: {
    name: "Angola", iso3: "AGO", region: "Southern Africa", coords: [-12.5, 18.5],
    ratings: { sp: ["B−","Stable"], fitch: ["B−","Stable"], moodys: ["B3","Positive"] },
    snapshot: {"leader": "Jo\u00e3o Louren\u00e7o", "party": "MPLA", "fh": "Not Free", "opposition": "UNITA won 44% of the vote and 90 of 220 seats in 2022 \u2014 the closest election in Angola's history \u2014 though Freedom House cites an uneven playing field despite the numeric closeness.", "issues": ["FATF grey list \u2014 since Oct 2024, action plan targeted for completion by early 2027", "Fiscal fragility \u2014 IMF has flagged weak non-oil revenue and a widening fiscal deficit despite falling public debt"]},
    status: { fatf: "Grey list — Jurisdiction under Increased Monitoring (returned Oct 2024)" },
    upcoming: [
      { date: "24 August 2027", sortDate: "2027-08-24", tag: "Election", label: "General election (presidential + legislative)", meta: "Confirmed, fixed constitutional date", severity: "" },
      { date: "October 2026", sortDate: "2026-10-15", tag: "FATF", label: "October Plenary review", meta: "Action plan targeted for completion by early 2027; IMF has flagged the listing as a risk to Lobito Corridor investment", severity: "amber" },
    ],
    past: [
      { date: "2024-10", tag: "FATF", label: "Returned to FATF grey list", meta: "Cited persistent and unresolved AML/CFT deficiencies", severity: "" },
    ],
    sources: "fatf-gafi.org Plenary statements · IFES ElectionGuide · Freedom House 2026 · Reuters/AP, Wikipedia (leadership & elections)"
  },

  kenya: {
    name: "Kenya", iso3: "KEN", region: "East Africa", coords: [-1.3, 36.8],
    ratings: { sp: ["B","Stable"], fitch: ["B−","Stable"], moodys: ["B3","Negative"] },
    snapshot: {"leader": "William Ruto", "party": "United Democratic Alliance (UDA)", "fh": "Partly Free", "opposition": "Ruto won the 2022 presidential election by under 2 points (50.5% vs 48.9%); deadly 2024 anti-tax protests and the impeachment of his own deputy president reflect real political volatility.", "issues": ["Civil unrest \u2014 deadly 2024 Finance Bill protests and recurring demonstrations", "FATF grey list \u2014 since Feb 2024; next plenary review Oct 2026", "Fiscal pressure \u2014 large Eurobond maturity wall being actively managed via buybacks"]},
    status: { fatf: "Grey list — Jurisdiction under Increased Monitoring (since Feb 2024)" },
    upcoming: [
      { date: "October 2026", sortDate: "2026-10-15", tag: "FATF", label: "October Plenary review", meta: "Next scheduled review of grey-list status", severity: "amber" },
      { date: "2028-02-28", sortDate: "2028-02-28", tag: "Debt", label: "$1bn Eurobond maturity (7.25% Notes)", meta: "~60% already retired via 2025 buyback; balance ~$372m outstanding", severity: "" },
    ],
    past: [
      { date: "2025-10", tag: "Debt", label: "Tender offer retires $628m of 2028 Eurobond", meta: "Funded by new $1.5bn dual-tranche issuance — active maturity-wall management", severity: "moss" },
      { date: "2026-06-19", tag: "FATF", label: "Remained on grey list at June Plenary", meta: "No change in status", severity: "amber" },
    ],
    sources: "fatf-gafi.org Plenary statements · Bond prospectus + Treasury announcements · Freedom House 2026 · Reuters/AP, Wikipedia (leadership & elections)"
  },

  tanzania: {
    name: "Tanzania", iso3: "TZA", region: "East Africa", coords: [-6.4, 34.9],
    ratings: { sp: ["NR","—"], fitch: ["B+","Stable"], moodys: ["NR","—"] },
    snapshot: {"leader": "Samia Suluhu Hassan", "party": "Chama Cha Mapinduzi (CCM)", "fh": "Not Free", "opposition": "Main opposition candidates were barred or detained ahead of the Oct 2025 election; CCM was credited with ~98% of the vote amid widely reported violence and suppression \u2014 not considered a genuinely competitive result.", "issues": ["Election violence \u2014 widely reported killings and repression around the Oct 2025 vote; Freedom House recorded the steepest score decline of any country this cycle", "IMF programme concluded \u2014 ECF/RSF arrangements wrapped up July 2026, no successor programme currently active"]},
    status: {},
    upcoming: [
      { date: "By ~2030", sortDate: "2030-10-01", tag: "Election", label: "Next general election", meta: "5-year term; 2025 election concluded amid widespread unrest", severity: "" },
    ],
    past: [
      { date: "2026-07", tag: "IMF", label: "Final ECF (6th/7th) and RSF (3rd/4th) reviews completed — programme concluded", meta: "~$443.9m disbursed; programme objectives assessed as largely achieved; no successor arrangement currently active", severity: "moss" },
      { date: "2025-10", tag: "Election", label: "General election held amid unrest", meta: "International reporting cited severe restrictions on the opposition and widespread violence around the vote", severity: "rust" },
    ],
    sources: "IFES ElectionGuide · imf.org/en/countries/tza · Freedom House 2026 · Reuters/AP, Wikipedia (leadership & elections)"
  },

  ethiopia: {
    name: "Ethiopia", iso3: "ETH", region: "East Africa", coords: [9.0, 38.7],
    ratings: { sp: ["SD","—"], fitch: ["RD","—"], moodys: ["Caa3","Stable"] },
    snapshot: {"leader": "Abiy Ahmed", "party": "Prosperity Party", "fh": "Not Free", "opposition": "No meaningful legislative opposition \u2014 the Prosperity Party dominates federal and regional government.", "issues": ["Active conflict \u2014 ongoing Fano militia insurgency in the Amhara region and residual Oromia (OLA) conflict, following the 2020\u201322 Tigray war", "Sovereign default \u2014 still in Common Framework restructuring; the $1bn Eurobond dispute with bondholders remains unresolved", "Elevated inflation \u2014 consumer prices persistently high"]},
    status: { parisClub: "Active Common Framework restructuring — unresolved" },
    upcoming: [
      { date: "Ongoing — no fixed date", sortDate: null, tag: "Paris Club", label: "Bondholder talks resuming on $1bn defaulted Eurobond", meta: "Official creditors (China/France co-chaired OCC) and bondholders remain in dispute over comparability of treatment; legal action has been threatened", severity: "rust" },
    ],
    past: [
      { date: "2025-07", tag: "Paris Club", label: "Final agreement signed with official bilateral creditors", meta: "$8.4bn restructured, freeing an estimated $3.5bn for public investment", severity: "moss" },
      { date: "2023-12", tag: "Default", label: "Ethiopia defaults on its only Eurobond", meta: "$1bn note; entered Common Framework restructuring", severity: "rust" },
    ],
    sources: "clubdeparis.org press releases · IMF Global Sovereign Debt Roundtable reports · Freedom House 2026 · Reuters/AP, Wikipedia (leadership & elections)"
  },
};

const order = ["usa", "mexico", "bahamas", "serbia", "turkey", "egypt", "uzbekistan", "vietnam", "senegal", "cotedivoire", "benin", "angola", "kenya", "tanzania", "ethiopia"];

  window.COUNTRY_DATA = Object.freeze({ schemaVersion: 1, countries, order });
})();
