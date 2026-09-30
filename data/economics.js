/* Generated economic and trade structure data. Do not edit values by hand. */
(function () {
  'use strict';

  window.ECONOMIC_DATA = {
    schemaVersion: 1,
    generatedAt: null,
    sources: {
      imf: {
        label: "IMF World Economic Outlook",
        url: "https://www.imf.org/external/datamapper/",
        cadence: "Monthly API check"
      },
      worldBank: {
        label: "World Bank Indicators API",
        url: "https://api.worldbank.org/v2/",
        cadence: "Monthly API check"
      },
      unctad: {
        label: "UNCTAD Commodity Dependence Dashboard",
        url: "https://unctad.org/topic/commodities/state-of-commodity-dependence",
        cadence: "Annual reviewed import"
      },
      oec: {
        label: "Observatory of Economic Complexity",
        url: "https://oec.world/",
        cadence: "Quarterly API check; annual merchandise data"
      }
    },
    countries: {
      usa: {}, mexico: {}, bahamas: {}, serbia: {}, turkey: {}, egypt: {},
      uzbekistan: {}, vietnam: {}, senegal: {}, cotedivoire: {}, benin: {},
      angola: {}, kenya: {}, tanzania: {}, ethiopia: {}
    }
  };
})();
