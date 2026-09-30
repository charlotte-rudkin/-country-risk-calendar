/*
 * Source-identifier catalogue for the dashboard's target universe:
 * 193 UN members plus Palestine, Kosovo, Taiwan and Vatican City.
 *
 * Country profiles carry their ISO3 code. Provider identifiers are derived
 * here, so the economic updater does not need a second country-by-country map.
 */

const OEC_REGIONS = {
  af: "DZA AGO BEN BWA BFA BDI CPV CMR CAF TCD COM COD COG CIV DJI EGY GNQ ERI SWZ ETH GAB GMB GHA GIN GNB KEN LSO LBR LBY MDG MWI MLI MRT MUS MAR MOZ NAM NER NGA RWA STP SEN SYC SLE SOM ZAF SSD SDN TZA TGO TUN UGA ZMB ZWE",
  as: "AFG ARM AZE BHR BGD BTN BRN KHM CHN CYP GEO IND IDN IRN IRQ ISR JPN JOR KAZ KWT KGZ LAO LBN MYS MDV MNG MMR NPL PRK OMN PAK PSE PHL QAT SAU SGP KOR LKA SYR TJK THA TLS TUR TKM ARE UZB VNM YEM TWN",
  eu: "ALB AND AUT BLR BEL BIH BGR HRV CZE DNK EST FIN FRA DEU GRC HUN ISL IRL ITA LVA LIE LTU LUX MLT MDA MCO MNE NLD MKD NOR POL PRT ROU RUS SMR SRB SVK SVN ESP SWE CHE UKR GBR VAT XKX",
  na: "ATG BHS BRB BLZ CAN CRI CUB DMA DOM SLV GRD GTM HTI HND JAM MEX NIC PAN KNA LCA VCT TTO USA",
  sa: "ARG BOL BRA CHL COL ECU GUY PRY PER SUR URY VEN",
  oc: "AUS FJI KIR MHL FSM NRU NZL PLW PNG WSM SLB TON TUV VUT"
};

const catalogue = {};
for (const [oecRegion, codes] of Object.entries(OEC_REGIONS)) {
  for (const iso3 of codes.split(/\s+/).filter(Boolean)) {
    if (catalogue[iso3]) throw new Error(`Duplicate jurisdiction code: ${iso3}`);
    catalogue[iso3] = Object.freeze({
      iso3,
      oecRegion,
      oecId: `${oecRegion}${iso3.toLowerCase()}`
    });
  }
}

if (Object.keys(catalogue).length !== 197) {
  throw new Error(`Jurisdiction catalogue must contain 197 entries; found ${Object.keys(catalogue).length}`);
}

export const JURISDICTIONS = Object.freeze(catalogue);

export function jurisdictionFor(iso3) {
  return JURISDICTIONS[String(iso3 || "").toUpperCase()] || null;
}
