/* Generated economic and trade structure data. Do not edit values by hand. */
(function () {
  'use strict';

  window.ECONOMIC_DATA = {
  "schemaVersion": 2,
  "generatedAt": "2026-09-30T11:26:16.612Z",
  "sources": {
    "imf": {
      "label": "IMF World Economic Outlook",
      "url": "https://www.imf.org/external/datamapper/",
      "cadence": "Monthly API check",
      "apiVersion": "v1"
    },
    "worldBank": {
      "label": "World Bank Indicators API",
      "url": "https://api.worldbank.org/v2/",
      "cadence": "Monthly API check",
      "apiVersion": "v2"
    },
    "unctad": {
      "label": "UNCTAD Commodity Dependence Dashboard",
      "url": "https://unctad.org/topic/commodities/state-of-commodity-dependence/country-profiles",
      "cadence": "Annual source refresh"
    },
    "oec": {
      "label": "Observatory of Economic Complexity",
      "url": "https://oec.world/",
      "cadence": "Quarterly API check; annual BACI merchandise data",
      "dataset": "BACI via OEC"
    }
  },
  "jurisdictions": {
    "USA": {
      "iso3": "USA",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "MEX": {
      "iso3": "MEX",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "BHS": {
      "iso3": "BHS",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "SRB": {
      "iso3": "SRB",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "TUR": {
      "iso3": "TUR",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "EGY": {
      "iso3": "EGY",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "UZB": {
      "iso3": "UZB",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "VNM": {
      "iso3": "VNM",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "SEN": {
      "iso3": "SEN",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "CIV": {
      "iso3": "CIV",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "BEN": {
      "iso3": "BEN",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "AGO": {
      "iso3": "AGO",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "KEN": {
      "iso3": "KEN",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "TZA": {
      "iso3": "TZA",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "ETH": {
      "iso3": "ETH",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "DZA": {
      "iso3": "DZA",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "BWA": {
      "iso3": "BWA",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "BFA": {
      "iso3": "BFA",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "BDI": {
      "iso3": "BDI",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "CPV": {
      "iso3": "CPV",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "CMR": {
      "iso3": "CMR",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "CAF": {
      "iso3": "CAF",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "TCD": {
      "iso3": "TCD",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "COM": {
      "iso3": "COM",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "COD": {
      "iso3": "COD",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "COG": {
      "iso3": "COG",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "DJI": {
      "iso3": "DJI",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "GNQ": {
      "iso3": "GNQ",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "ERI": {
      "iso3": "ERI",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "SWZ": {
      "iso3": "SWZ",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "GAB": {
      "iso3": "GAB",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "GMB": {
      "iso3": "GMB",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "GHA": {
      "iso3": "GHA",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "GIN": {
      "iso3": "GIN",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "GNB": {
      "iso3": "GNB",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "LSO": {
      "iso3": "LSO",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "LBR": {
      "iso3": "LBR",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "LBY": {
      "iso3": "LBY",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "MDG": {
      "iso3": "MDG",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "MWI": {
      "iso3": "MWI",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "MLI": {
      "iso3": "MLI",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "MRT": {
      "iso3": "MRT",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "MUS": {
      "iso3": "MUS",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "MAR": {
      "iso3": "MAR",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "MOZ": {
      "iso3": "MOZ",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "NAM": {
      "iso3": "NAM",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "NER": {
      "iso3": "NER",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "NGA": {
      "iso3": "NGA",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "RWA": {
      "iso3": "RWA",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "STP": {
      "iso3": "STP",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "SYC": {
      "iso3": "SYC",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "SLE": {
      "iso3": "SLE",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "SOM": {
      "iso3": "SOM",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "ZAF": {
      "iso3": "ZAF",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "SSD": {
      "iso3": "SSD",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "SDN": {
      "iso3": "SDN",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "TGO": {
      "iso3": "TGO",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "TUN": {
      "iso3": "TUN",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "UGA": {
      "iso3": "UGA",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "ZMB": {
      "iso3": "ZMB",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "ZWE": {
      "iso3": "ZWE",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "AFG": {
      "iso3": "AFG",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "ARM": {
      "iso3": "ARM",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "AZE": {
      "iso3": "AZE",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "BHR": {
      "iso3": "BHR",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "BGD": {
      "iso3": "BGD",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "BTN": {
      "iso3": "BTN",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "BRN": {
      "iso3": "BRN",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "KHM": {
      "iso3": "KHM",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "CHN": {
      "iso3": "CHN",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "CYP": {
      "iso3": "CYP",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "GEO": {
      "iso3": "GEO",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "IND": {
      "iso3": "IND",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "IDN": {
      "iso3": "IDN",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "IRN": {
      "iso3": "IRN",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "IRQ": {
      "iso3": "IRQ",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "ISR": {
      "iso3": "ISR",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "JPN": {
      "iso3": "JPN",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "JOR": {
      "iso3": "JOR",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "KAZ": {
      "iso3": "KAZ",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "KWT": {
      "iso3": "KWT",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "KGZ": {
      "iso3": "KGZ",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "LAO": {
      "iso3": "LAO",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "LBN": {
      "iso3": "LBN",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "MYS": {
      "iso3": "MYS",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "MDV": {
      "iso3": "MDV",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "MNG": {
      "iso3": "MNG",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "MMR": {
      "iso3": "MMR",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "NPL": {
      "iso3": "NPL",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "PRK": {
      "iso3": "PRK",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "OMN": {
      "iso3": "OMN",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "PAK": {
      "iso3": "PAK",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "PSE": {
      "iso3": "PSE",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "PHL": {
      "iso3": "PHL",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "QAT": {
      "iso3": "QAT",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "SAU": {
      "iso3": "SAU",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "SGP": {
      "iso3": "SGP",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "KOR": {
      "iso3": "KOR",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "LKA": {
      "iso3": "LKA",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "SYR": {
      "iso3": "SYR",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "TJK": {
      "iso3": "TJK",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "THA": {
      "iso3": "THA",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "TLS": {
      "iso3": "TLS",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "TKM": {
      "iso3": "TKM",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "ARE": {
      "iso3": "ARE",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "YEM": {
      "iso3": "YEM",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "TWN": {
      "iso3": "TWN",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "ALB": {
      "iso3": "ALB",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "AND": {
      "iso3": "AND",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "AUT": {
      "iso3": "AUT",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "BLR": {
      "iso3": "BLR",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "BEL": {
      "iso3": "BEL",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "BIH": {
      "iso3": "BIH",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "BGR": {
      "iso3": "BGR",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "HRV": {
      "iso3": "HRV",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "CZE": {
      "iso3": "CZE",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "DNK": {
      "iso3": "DNK",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "EST": {
      "iso3": "EST",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "FIN": {
      "iso3": "FIN",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "FRA": {
      "iso3": "FRA",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "DEU": {
      "iso3": "DEU",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "GRC": {
      "iso3": "GRC",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "HUN": {
      "iso3": "HUN",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "ISL": {
      "iso3": "ISL",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "IRL": {
      "iso3": "IRL",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "ITA": {
      "iso3": "ITA",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "LVA": {
      "iso3": "LVA",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "LIE": {
      "iso3": "LIE",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "LTU": {
      "iso3": "LTU",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "LUX": {
      "iso3": "LUX",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "MLT": {
      "iso3": "MLT",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "MDA": {
      "iso3": "MDA",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "MCO": {
      "iso3": "MCO",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "MNE": {
      "iso3": "MNE",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "NLD": {
      "iso3": "NLD",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "MKD": {
      "iso3": "MKD",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "NOR": {
      "iso3": "NOR",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "POL": {
      "iso3": "POL",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "PRT": {
      "iso3": "PRT",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "ROU": {
      "iso3": "ROU",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "RUS": {
      "iso3": "RUS",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "SMR": {
      "iso3": "SMR",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "SVK": {
      "iso3": "SVK",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "SVN": {
      "iso3": "SVN",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "ESP": {
      "iso3": "ESP",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "SWE": {
      "iso3": "SWE",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "CHE": {
      "iso3": "CHE",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "UKR": {
      "iso3": "UKR",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "GBR": {
      "iso3": "GBR",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "VAT": {
      "iso3": "VAT",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "XKX": {
      "iso3": "XKX",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "ATG": {
      "iso3": "ATG",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "BRB": {
      "iso3": "BRB",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "BLZ": {
      "iso3": "BLZ",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "CAN": {
      "iso3": "CAN",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "CRI": {
      "iso3": "CRI",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "CUB": {
      "iso3": "CUB",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "DMA": {
      "iso3": "DMA",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "DOM": {
      "iso3": "DOM",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "SLV": {
      "iso3": "SLV",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "GRD": {
      "iso3": "GRD",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "GTM": {
      "iso3": "GTM",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "HTI": {
      "iso3": "HTI",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "HND": {
      "iso3": "HND",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "JAM": {
      "iso3": "JAM",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "NIC": {
      "iso3": "NIC",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "PAN": {
      "iso3": "PAN",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "KNA": {
      "iso3": "KNA",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "LCA": {
      "iso3": "LCA",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "VCT": {
      "iso3": "VCT",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "TTO": {
      "iso3": "TTO",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "ARG": {
      "iso3": "ARG",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "BOL": {
      "iso3": "BOL",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "BRA": {
      "iso3": "BRA",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "CHL": {
      "iso3": "CHL",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "COL": {
      "iso3": "COL",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "ECU": {
      "iso3": "ECU",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "GUY": {
      "iso3": "GUY",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "PRY": {
      "iso3": "PRY",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "PER": {
      "iso3": "PER",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "SUR": {
      "iso3": "SUR",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "URY": {
      "iso3": "URY",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "VEN": {
      "iso3": "VEN",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "AUS": {
      "iso3": "AUS",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "FJI": {
      "iso3": "FJI",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "KIR": {
      "iso3": "KIR",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "MHL": {
      "iso3": "MHL",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "FSM": {
      "iso3": "FSM",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "NRU": {
      "iso3": "NRU",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "NZL": {
      "iso3": "NZL",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "PLW": {
      "iso3": "PLW",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "PNG": {
      "iso3": "PNG",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "WSM": {
      "iso3": "WSM",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "SLB": {
      "iso3": "SLB",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "TON": {
      "iso3": "TON",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "TUV": {
      "iso3": "TUV",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    },
    "VUT": {
      "iso3": "VUT",
      "refresh": {
        "imf": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "worldBank": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "oec": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        },
        "unctad": {
          "status": "pending",
          "lastAttemptAt": null,
          "lastSuccessAt": null,
          "retainedPrevious": false
        }
      }
    }
  },
  "refreshSummary": {
    "scope": "normalize",
    "jurisdictionsAttempted": 15,
    "completedAt": "2026-09-30T11:26:16.612Z",
    "failures": 0
  }
};
})();
