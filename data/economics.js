/* Generated economic and trade structure data. Do not edit values by hand. */
(function () {
  'use strict';

  window.ECONOMIC_DATA = {
  "schemaVersion": 1,
  "generatedAt": "2026-09-30T08:47:49.599Z",
  "sources": {
    "imf": {
      "label": "IMF World Economic Outlook",
      "url": "https://www.imf.org/external/datamapper/",
      "cadence": "Monthly API check"
    },
    "worldBank": {
      "label": "World Bank Indicators API",
      "url": "https://api.worldbank.org/v2/",
      "cadence": "Monthly API check"
    },
    "unctad": {
      "label": "UNCTAD Commodity Dependence Dashboard",
      "url": "https://unctad.org/topic/commodities/state-of-commodity-dependence",
      "cadence": "Annual reviewed import"
    },
    "oec": {
      "label": "Observatory of Economic Complexity",
      "url": "https://oec.world/",
      "cadence": "Quarterly API check; annual merchandise data"
    }
  },
  "countries": {
    "usa": {
      "imf": {
        "indicators": {
          "realGdpGrowth": {
            "value": 2.3,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1980,
                "value": -0.3,
                "projection": false
              },
              {
                "year": 1981,
                "value": 2.5,
                "projection": false
              },
              {
                "year": 1982,
                "value": -1.8,
                "projection": false
              },
              {
                "year": 1983,
                "value": 4.6,
                "projection": false
              },
              {
                "year": 1984,
                "value": 7.2,
                "projection": false
              },
              {
                "year": 1985,
                "value": 4.2,
                "projection": false
              },
              {
                "year": 1986,
                "value": 3.5,
                "projection": false
              },
              {
                "year": 1987,
                "value": 3.5,
                "projection": false
              },
              {
                "year": 1988,
                "value": 4.2,
                "projection": false
              },
              {
                "year": 1989,
                "value": 3.7,
                "projection": false
              },
              {
                "year": 1990,
                "value": 1.9,
                "projection": false
              },
              {
                "year": 1991,
                "value": -0.1,
                "projection": false
              },
              {
                "year": 1992,
                "value": 3.5,
                "projection": false
              },
              {
                "year": 1993,
                "value": 2.8,
                "projection": false
              },
              {
                "year": 1994,
                "value": 4,
                "projection": false
              },
              {
                "year": 1995,
                "value": 2.7,
                "projection": false
              },
              {
                "year": 1996,
                "value": 3.8,
                "projection": false
              },
              {
                "year": 1997,
                "value": 4.4,
                "projection": false
              },
              {
                "year": 1998,
                "value": 4.5,
                "projection": false
              },
              {
                "year": 1999,
                "value": 4.8,
                "projection": false
              },
              {
                "year": 2000,
                "value": 4.1,
                "projection": false
              },
              {
                "year": 2001,
                "value": 1,
                "projection": false
              },
              {
                "year": 2002,
                "value": 1.7,
                "projection": false
              },
              {
                "year": 2003,
                "value": 2.8,
                "projection": false
              },
              {
                "year": 2004,
                "value": 3.8,
                "projection": false
              },
              {
                "year": 2005,
                "value": 3.5,
                "projection": false
              },
              {
                "year": 2006,
                "value": 2.8,
                "projection": false
              },
              {
                "year": 2007,
                "value": 2,
                "projection": false
              },
              {
                "year": 2008,
                "value": 0.1,
                "projection": false
              },
              {
                "year": 2009,
                "value": -2.6,
                "projection": false
              },
              {
                "year": 2010,
                "value": 2.7,
                "projection": false
              },
              {
                "year": 2011,
                "value": 1.6,
                "projection": false
              },
              {
                "year": 2012,
                "value": 2.3,
                "projection": false
              },
              {
                "year": 2013,
                "value": 2.1,
                "projection": false
              },
              {
                "year": 2014,
                "value": 2.5,
                "projection": false
              },
              {
                "year": 2015,
                "value": 2.9,
                "projection": false
              },
              {
                "year": 2016,
                "value": 1.8,
                "projection": false
              },
              {
                "year": 2017,
                "value": 2.5,
                "projection": false
              },
              {
                "year": 2018,
                "value": 3,
                "projection": false
              },
              {
                "year": 2019,
                "value": 2.6,
                "projection": false
              },
              {
                "year": 2020,
                "value": -2.1,
                "projection": false
              },
              {
                "year": 2021,
                "value": 6.2,
                "projection": false
              },
              {
                "year": 2022,
                "value": 2.5,
                "projection": false
              },
              {
                "year": 2023,
                "value": 2.9,
                "projection": false
              },
              {
                "year": 2024,
                "value": 2.8,
                "projection": false
              },
              {
                "year": 2025,
                "value": 2.1,
                "projection": false
              },
              {
                "year": 2026,
                "value": 2.3,
                "projection": true
              },
              {
                "year": 2027,
                "value": 2.1,
                "projection": true
              },
              {
                "year": 2028,
                "value": 2.1,
                "projection": true
              },
              {
                "year": 2029,
                "value": 1.9,
                "projection": true
              },
              {
                "year": 2030,
                "value": 1.8,
                "projection": true
              },
              {
                "year": 2031,
                "value": 1.8,
                "projection": true
              }
            ]
          },
          "inflation": {
            "value": 3.2,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1980,
                "value": 13.5,
                "projection": false
              },
              {
                "year": 1981,
                "value": 10.4,
                "projection": false
              },
              {
                "year": 1982,
                "value": 6.2,
                "projection": false
              },
              {
                "year": 1983,
                "value": 3.2,
                "projection": false
              },
              {
                "year": 1984,
                "value": 4.4,
                "projection": false
              },
              {
                "year": 1985,
                "value": 3.5,
                "projection": false
              },
              {
                "year": 1986,
                "value": 1.9,
                "projection": false
              },
              {
                "year": 1987,
                "value": 3.6,
                "projection": false
              },
              {
                "year": 1988,
                "value": 4.1,
                "projection": false
              },
              {
                "year": 1989,
                "value": 4.8,
                "projection": false
              },
              {
                "year": 1990,
                "value": 5.4,
                "projection": false
              },
              {
                "year": 1991,
                "value": 4.2,
                "projection": false
              },
              {
                "year": 1992,
                "value": 3,
                "projection": false
              },
              {
                "year": 1993,
                "value": 3,
                "projection": false
              },
              {
                "year": 1994,
                "value": 2.6,
                "projection": false
              },
              {
                "year": 1995,
                "value": 2.8,
                "projection": false
              },
              {
                "year": 1996,
                "value": 2.9,
                "projection": false
              },
              {
                "year": 1997,
                "value": 2.3,
                "projection": false
              },
              {
                "year": 1998,
                "value": 1.5,
                "projection": false
              },
              {
                "year": 1999,
                "value": 2.2,
                "projection": false
              },
              {
                "year": 2000,
                "value": 3.4,
                "projection": false
              },
              {
                "year": 2001,
                "value": 2.8,
                "projection": false
              },
              {
                "year": 2002,
                "value": 1.6,
                "projection": false
              },
              {
                "year": 2003,
                "value": 2.3,
                "projection": false
              },
              {
                "year": 2004,
                "value": 2.7,
                "projection": false
              },
              {
                "year": 2005,
                "value": 3.4,
                "projection": false
              },
              {
                "year": 2006,
                "value": 3.2,
                "projection": false
              },
              {
                "year": 2007,
                "value": 2.9,
                "projection": false
              },
              {
                "year": 2008,
                "value": 3.8,
                "projection": false
              },
              {
                "year": 2009,
                "value": -0.3,
                "projection": false
              },
              {
                "year": 2010,
                "value": 1.6,
                "projection": false
              },
              {
                "year": 2011,
                "value": 3.1,
                "projection": false
              },
              {
                "year": 2012,
                "value": 2.1,
                "projection": false
              },
              {
                "year": 2013,
                "value": 1.5,
                "projection": false
              },
              {
                "year": 2014,
                "value": 1.6,
                "projection": false
              },
              {
                "year": 2015,
                "value": 0.1,
                "projection": false
              },
              {
                "year": 2016,
                "value": 1.3,
                "projection": false
              },
              {
                "year": 2017,
                "value": 2.1,
                "projection": false
              },
              {
                "year": 2018,
                "value": 2.4,
                "projection": false
              },
              {
                "year": 2019,
                "value": 1.8,
                "projection": false
              },
              {
                "year": 2020,
                "value": 1.3,
                "projection": false
              },
              {
                "year": 2021,
                "value": 4.7,
                "projection": false
              },
              {
                "year": 2022,
                "value": 8,
                "projection": false
              },
              {
                "year": 2023,
                "value": 4.1,
                "projection": false
              },
              {
                "year": 2024,
                "value": 3,
                "projection": false
              },
              {
                "year": 2025,
                "value": 2.7,
                "projection": false
              },
              {
                "year": 2026,
                "value": 3.2,
                "projection": true
              },
              {
                "year": 2027,
                "value": 2.1,
                "projection": true
              },
              {
                "year": 2028,
                "value": 2.2,
                "projection": true
              },
              {
                "year": 2029,
                "value": 2.2,
                "projection": true
              },
              {
                "year": 2030,
                "value": 2.2,
                "projection": true
              },
              {
                "year": 2031,
                "value": 2.2,
                "projection": true
              }
            ]
          },
          "currentAccount": {
            "value": -3.7,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1980,
                "value": 0.1,
                "projection": false
              },
              {
                "year": 1981,
                "value": 0.2,
                "projection": false
              },
              {
                "year": 1982,
                "value": -0.2,
                "projection": false
              },
              {
                "year": 1983,
                "value": -1.1,
                "projection": false
              },
              {
                "year": 1984,
                "value": -2.3,
                "projection": false
              },
              {
                "year": 1985,
                "value": -2.7,
                "projection": false
              },
              {
                "year": 1986,
                "value": -3.2,
                "projection": false
              },
              {
                "year": 1987,
                "value": -3.3,
                "projection": false
              },
              {
                "year": 1988,
                "value": -2.3,
                "projection": false
              },
              {
                "year": 1989,
                "value": -1.8,
                "projection": false
              },
              {
                "year": 1990,
                "value": -1.3,
                "projection": false
              },
              {
                "year": 1991,
                "value": 0,
                "projection": false
              },
              {
                "year": 1992,
                "value": -0.8,
                "projection": false
              },
              {
                "year": 1993,
                "value": -1.2,
                "projection": false
              },
              {
                "year": 1994,
                "value": -1.7,
                "projection": false
              },
              {
                "year": 1995,
                "value": -1.5,
                "projection": false
              },
              {
                "year": 1996,
                "value": -1.5,
                "projection": false
              },
              {
                "year": 1997,
                "value": -1.6,
                "projection": false
              },
              {
                "year": 1998,
                "value": -2.4,
                "projection": false
              },
              {
                "year": 1999,
                "value": -3,
                "projection": false
              },
              {
                "year": 2000,
                "value": -3.9,
                "projection": false
              },
              {
                "year": 2001,
                "value": -3.7,
                "projection": false
              },
              {
                "year": 2002,
                "value": -4.2,
                "projection": false
              },
              {
                "year": 2003,
                "value": -4.6,
                "projection": false
              },
              {
                "year": 2004,
                "value": -5.2,
                "projection": false
              },
              {
                "year": 2005,
                "value": -5.7,
                "projection": false
              },
              {
                "year": 2006,
                "value": -5.9,
                "projection": false
              },
              {
                "year": 2007,
                "value": -5.1,
                "projection": false
              },
              {
                "year": 2008,
                "value": -4.7,
                "projection": false
              },
              {
                "year": 2009,
                "value": -2.6,
                "projection": false
              },
              {
                "year": 2010,
                "value": -2.9,
                "projection": false
              },
              {
                "year": 2011,
                "value": -2.9,
                "projection": false
              },
              {
                "year": 2012,
                "value": -2.6,
                "projection": false
              },
              {
                "year": 2013,
                "value": -2,
                "projection": false
              },
              {
                "year": 2014,
                "value": -2.1,
                "projection": false
              },
              {
                "year": 2015,
                "value": -2.2,
                "projection": false
              },
              {
                "year": 2016,
                "value": -2.1,
                "projection": false
              },
              {
                "year": 2017,
                "value": -1.9,
                "projection": false
              },
              {
                "year": 2018,
                "value": -2.1,
                "projection": false
              },
              {
                "year": 2019,
                "value": -2.1,
                "projection": false
              },
              {
                "year": 2020,
                "value": -2.8,
                "projection": false
              },
              {
                "year": 2021,
                "value": -3.6,
                "projection": false
              },
              {
                "year": 2022,
                "value": -3.8,
                "projection": false
              },
              {
                "year": 2023,
                "value": -3.3,
                "projection": false
              },
              {
                "year": 2024,
                "value": -4,
                "projection": false
              },
              {
                "year": 2025,
                "value": -3.6,
                "projection": false
              },
              {
                "year": 2026,
                "value": -3.7,
                "projection": true
              },
              {
                "year": 2027,
                "value": -3.6,
                "projection": true
              },
              {
                "year": 2028,
                "value": -3.6,
                "projection": true
              },
              {
                "year": 2029,
                "value": -3.6,
                "projection": true
              },
              {
                "year": 2030,
                "value": -3.6,
                "projection": true
              },
              {
                "year": 2031,
                "value": -3.6,
                "projection": true
              }
            ]
          },
          "fiscalBalance": {
            "value": -7.5,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 2001,
                "value": -0.5,
                "projection": false
              },
              {
                "year": 2002,
                "value": -3.8,
                "projection": false
              },
              {
                "year": 2003,
                "value": -4.8,
                "projection": false
              },
              {
                "year": 2004,
                "value": -4.2,
                "projection": false
              },
              {
                "year": 2005,
                "value": -3.1,
                "projection": false
              },
              {
                "year": 2006,
                "value": -2,
                "projection": false
              },
              {
                "year": 2007,
                "value": -2.9,
                "projection": false
              },
              {
                "year": 2008,
                "value": -6.6,
                "projection": false
              },
              {
                "year": 2009,
                "value": -13.2,
                "projection": false
              },
              {
                "year": 2010,
                "value": -11,
                "projection": false
              },
              {
                "year": 2011,
                "value": -9.7,
                "projection": false
              },
              {
                "year": 2012,
                "value": -8.1,
                "projection": false
              },
              {
                "year": 2013,
                "value": -4.6,
                "projection": false
              },
              {
                "year": 2014,
                "value": -4,
                "projection": false
              },
              {
                "year": 2015,
                "value": -3.5,
                "projection": false
              },
              {
                "year": 2016,
                "value": -4.4,
                "projection": false
              },
              {
                "year": 2017,
                "value": -4.8,
                "projection": false
              },
              {
                "year": 2018,
                "value": -5.3,
                "projection": false
              },
              {
                "year": 2019,
                "value": -5.8,
                "projection": false
              },
              {
                "year": 2020,
                "value": -14.1,
                "projection": false
              },
              {
                "year": 2021,
                "value": -11.5,
                "projection": false
              },
              {
                "year": 2022,
                "value": -3.7,
                "projection": false
              },
              {
                "year": 2023,
                "value": -7.9,
                "projection": false
              },
              {
                "year": 2024,
                "value": -7.9,
                "projection": false
              },
              {
                "year": 2025,
                "value": -6.8,
                "projection": false
              },
              {
                "year": 2026,
                "value": -7.5,
                "projection": true
              },
              {
                "year": 2027,
                "value": -7.4,
                "projection": true
              },
              {
                "year": 2028,
                "value": -7.6,
                "projection": true
              },
              {
                "year": 2029,
                "value": -7.5,
                "projection": true
              },
              {
                "year": 2030,
                "value": -7.5,
                "projection": true
              },
              {
                "year": 2031,
                "value": -7.4,
                "projection": true
              }
            ]
          },
          "governmentDebt": {
            "value": 125.8,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 2001,
                "value": 53.5,
                "projection": false
              },
              {
                "year": 2002,
                "value": 55.9,
                "projection": false
              },
              {
                "year": 2003,
                "value": 59,
                "projection": false
              },
              {
                "year": 2004,
                "value": 66.4,
                "projection": false
              },
              {
                "year": 2005,
                "value": 65.8,
                "projection": false
              },
              {
                "year": 2006,
                "value": 64.5,
                "projection": false
              },
              {
                "year": 2007,
                "value": 64.9,
                "projection": false
              },
              {
                "year": 2008,
                "value": 73.8,
                "projection": false
              },
              {
                "year": 2009,
                "value": 87.1,
                "projection": false
              },
              {
                "year": 2010,
                "value": 95.7,
                "projection": false
              },
              {
                "year": 2011,
                "value": 100,
                "projection": false
              },
              {
                "year": 2012,
                "value": 103.7,
                "projection": false
              },
              {
                "year": 2013,
                "value": 105,
                "projection": false
              },
              {
                "year": 2014,
                "value": 104.9,
                "projection": false
              },
              {
                "year": 2015,
                "value": 105.4,
                "projection": false
              },
              {
                "year": 2016,
                "value": 107.4,
                "projection": false
              },
              {
                "year": 2017,
                "value": 106.4,
                "projection": false
              },
              {
                "year": 2018,
                "value": 107.7,
                "projection": false
              },
              {
                "year": 2019,
                "value": 108.8,
                "projection": false
              },
              {
                "year": 2020,
                "value": 132.6,
                "projection": false
              },
              {
                "year": 2021,
                "value": 125,
                "projection": false
              },
              {
                "year": 2022,
                "value": 119.1,
                "projection": false
              },
              {
                "year": 2023,
                "value": 120,
                "projection": false
              },
              {
                "year": 2024,
                "value": 122.3,
                "projection": false
              },
              {
                "year": 2025,
                "value": 123.9,
                "projection": false
              },
              {
                "year": 2026,
                "value": 125.8,
                "projection": true
              },
              {
                "year": 2027,
                "value": 128.6,
                "projection": true
              },
              {
                "year": 2028,
                "value": 132.1,
                "projection": true
              },
              {
                "year": 2029,
                "value": 135.5,
                "projection": true
              },
              {
                "year": 2030,
                "value": 138.9,
                "projection": true
              },
              {
                "year": 2031,
                "value": 142.1,
                "projection": true
              }
            ]
          }
        }
      },
      "worldBank": {
        "indicators": {
          "reserveMonths": {
            "value": 2.83633267220007,
            "year": 2025,
            "unit": "months",
            "series": [
              {
                "value": 1.34985594012155,
                "year": 2015,
                "projection": false
              },
              {
                "value": 1.44075451131827,
                "year": 2016,
                "projection": false
              },
              {
                "value": 1.48411996805483,
                "year": 2017,
                "projection": false
              },
              {
                "value": 1.3600015179599,
                "year": 2018,
                "projection": false
              },
              {
                "value": 1.54805985915951,
                "year": 2019,
                "projection": false
              },
              {
                "value": 2.09737678529136,
                "year": 2020,
                "projection": false
              },
              {
                "value": 1.97445270826071,
                "year": 2021,
                "projection": false
              },
              {
                "value": 1.67967044769329,
                "year": 2022,
                "projection": false
              },
              {
                "value": 1.79263382538627,
                "year": 2023,
                "projection": false
              },
              {
                "value": 1.94032058064747,
                "year": 2024,
                "projection": false
              },
              {
                "value": 2.83633267220007,
                "year": 2025,
                "projection": false
              }
            ]
          }
        }
      }
    },
    "mexico": {
      "imf": {
        "indicators": {
          "realGdpGrowth": {
            "value": 1.6,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1980,
                "value": 9.5,
                "projection": false
              },
              {
                "year": 1981,
                "value": 9.6,
                "projection": false
              },
              {
                "year": 1982,
                "value": 0,
                "projection": false
              },
              {
                "year": 1983,
                "value": -4.6,
                "projection": false
              },
              {
                "year": 1984,
                "value": 3.5,
                "projection": false
              },
              {
                "year": 1985,
                "value": 1.9,
                "projection": false
              },
              {
                "year": 1986,
                "value": -3.9,
                "projection": false
              },
              {
                "year": 1987,
                "value": 2.1,
                "projection": false
              },
              {
                "year": 1988,
                "value": 1.2,
                "projection": false
              },
              {
                "year": 1989,
                "value": 3.6,
                "projection": false
              },
              {
                "year": 1990,
                "value": 5.3,
                "projection": false
              },
              {
                "year": 1991,
                "value": 4,
                "projection": false
              },
              {
                "year": 1992,
                "value": 3.6,
                "projection": false
              },
              {
                "year": 1993,
                "value": 2.9,
                "projection": false
              },
              {
                "year": 1994,
                "value": 4.4,
                "projection": false
              },
              {
                "year": 1995,
                "value": -5.9,
                "projection": false
              },
              {
                "year": 1996,
                "value": 6.2,
                "projection": false
              },
              {
                "year": 1997,
                "value": 7.2,
                "projection": false
              },
              {
                "year": 1998,
                "value": 6.2,
                "projection": false
              },
              {
                "year": 1999,
                "value": 2.8,
                "projection": false
              },
              {
                "year": 2000,
                "value": 5,
                "projection": false
              },
              {
                "year": 2001,
                "value": -0.5,
                "projection": false
              },
              {
                "year": 2002,
                "value": -0.2,
                "projection": false
              },
              {
                "year": 2003,
                "value": 1.2,
                "projection": false
              },
              {
                "year": 2004,
                "value": 3.6,
                "projection": false
              },
              {
                "year": 2005,
                "value": 2.1,
                "projection": false
              },
              {
                "year": 2006,
                "value": 4.8,
                "projection": false
              },
              {
                "year": 2007,
                "value": 2.1,
                "projection": false
              },
              {
                "year": 2008,
                "value": 0.9,
                "projection": false
              },
              {
                "year": 2009,
                "value": -6.3,
                "projection": false
              },
              {
                "year": 2010,
                "value": 5,
                "projection": false
              },
              {
                "year": 2011,
                "value": 3.4,
                "projection": false
              },
              {
                "year": 2012,
                "value": 3.6,
                "projection": false
              },
              {
                "year": 2013,
                "value": 0.9,
                "projection": false
              },
              {
                "year": 2014,
                "value": 2.5,
                "projection": false
              },
              {
                "year": 2015,
                "value": 2.7,
                "projection": false
              },
              {
                "year": 2016,
                "value": 1.8,
                "projection": false
              },
              {
                "year": 2017,
                "value": 1.9,
                "projection": false
              },
              {
                "year": 2018,
                "value": 2,
                "projection": false
              },
              {
                "year": 2019,
                "value": -0.4,
                "projection": false
              },
              {
                "year": 2020,
                "value": -8.4,
                "projection": false
              },
              {
                "year": 2021,
                "value": 6,
                "projection": false
              },
              {
                "year": 2022,
                "value": 3.7,
                "projection": false
              },
              {
                "year": 2023,
                "value": 3.1,
                "projection": false
              },
              {
                "year": 2024,
                "value": 1.4,
                "projection": false
              },
              {
                "year": 2025,
                "value": 0.6,
                "projection": false
              },
              {
                "year": 2026,
                "value": 1.6,
                "projection": true
              },
              {
                "year": 2027,
                "value": 2.2,
                "projection": true
              },
              {
                "year": 2028,
                "value": 2.1,
                "projection": true
              },
              {
                "year": 2029,
                "value": 2,
                "projection": true
              },
              {
                "year": 2030,
                "value": 2,
                "projection": true
              },
              {
                "year": 2031,
                "value": 2,
                "projection": true
              }
            ]
          },
          "inflation": {
            "value": 3.9,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1980,
                "value": 26.5,
                "projection": false
              },
              {
                "year": 1981,
                "value": 28,
                "projection": false
              },
              {
                "year": 1982,
                "value": 59.1,
                "projection": false
              },
              {
                "year": 1983,
                "value": 101.8,
                "projection": false
              },
              {
                "year": 1984,
                "value": 65.4,
                "projection": false
              },
              {
                "year": 1985,
                "value": 57.8,
                "projection": false
              },
              {
                "year": 1986,
                "value": 86.4,
                "projection": false
              },
              {
                "year": 1987,
                "value": 132,
                "projection": false
              },
              {
                "year": 1988,
                "value": 113.5,
                "projection": false
              },
              {
                "year": 1989,
                "value": 19.9,
                "projection": false
              },
              {
                "year": 1990,
                "value": 26.7,
                "projection": false
              },
              {
                "year": 1991,
                "value": 22.6,
                "projection": false
              },
              {
                "year": 1992,
                "value": 15.5,
                "projection": false
              },
              {
                "year": 1993,
                "value": 9.8,
                "projection": false
              },
              {
                "year": 1994,
                "value": 7,
                "projection": false
              },
              {
                "year": 1995,
                "value": 35.1,
                "projection": false
              },
              {
                "year": 1996,
                "value": 34.3,
                "projection": false
              },
              {
                "year": 1997,
                "value": 20.6,
                "projection": false
              },
              {
                "year": 1998,
                "value": 15.9,
                "projection": false
              },
              {
                "year": 1999,
                "value": 16.6,
                "projection": false
              },
              {
                "year": 2000,
                "value": 9.5,
                "projection": false
              },
              {
                "year": 2001,
                "value": 6.4,
                "projection": false
              },
              {
                "year": 2002,
                "value": 5,
                "projection": false
              },
              {
                "year": 2003,
                "value": 4.6,
                "projection": false
              },
              {
                "year": 2004,
                "value": 4.7,
                "projection": false
              },
              {
                "year": 2005,
                "value": 4,
                "projection": false
              },
              {
                "year": 2006,
                "value": 3.6,
                "projection": false
              },
              {
                "year": 2007,
                "value": 4,
                "projection": false
              },
              {
                "year": 2008,
                "value": 5.1,
                "projection": false
              },
              {
                "year": 2009,
                "value": 5.3,
                "projection": false
              },
              {
                "year": 2010,
                "value": 4.2,
                "projection": false
              },
              {
                "year": 2011,
                "value": 3.4,
                "projection": false
              },
              {
                "year": 2012,
                "value": 4.1,
                "projection": false
              },
              {
                "year": 2013,
                "value": 3.8,
                "projection": false
              },
              {
                "year": 2014,
                "value": 4,
                "projection": false
              },
              {
                "year": 2015,
                "value": 2.7,
                "projection": false
              },
              {
                "year": 2016,
                "value": 2.8,
                "projection": false
              },
              {
                "year": 2017,
                "value": 6,
                "projection": false
              },
              {
                "year": 2018,
                "value": 4.9,
                "projection": false
              },
              {
                "year": 2019,
                "value": 3.6,
                "projection": false
              },
              {
                "year": 2020,
                "value": 3.4,
                "projection": false
              },
              {
                "year": 2021,
                "value": 5.7,
                "projection": false
              },
              {
                "year": 2022,
                "value": 7.9,
                "projection": false
              },
              {
                "year": 2023,
                "value": 5.5,
                "projection": false
              },
              {
                "year": 2024,
                "value": 4.7,
                "projection": false
              },
              {
                "year": 2025,
                "value": 3.8,
                "projection": false
              },
              {
                "year": 2026,
                "value": 3.9,
                "projection": true
              },
              {
                "year": 2027,
                "value": 3.4,
                "projection": true
              },
              {
                "year": 2028,
                "value": 3,
                "projection": true
              },
              {
                "year": 2029,
                "value": 3,
                "projection": true
              },
              {
                "year": 2030,
                "value": 3,
                "projection": true
              },
              {
                "year": 2031,
                "value": 3,
                "projection": true
              }
            ]
          },
          "currentAccount": {
            "value": -0.4,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1980,
                "value": -5.1,
                "projection": false
              },
              {
                "year": 1981,
                "value": -5.9,
                "projection": false
              },
              {
                "year": 1982,
                "value": -0.8,
                "projection": false
              },
              {
                "year": 1983,
                "value": 7.4,
                "projection": false
              },
              {
                "year": 1984,
                "value": 5.2,
                "projection": false
              },
              {
                "year": 1985,
                "value": 2.2,
                "projection": false
              },
              {
                "year": 1986,
                "value": 0.3,
                "projection": false
              },
              {
                "year": 1987,
                "value": 4.6,
                "projection": false
              },
              {
                "year": 1988,
                "value": -1.1,
                "projection": false
              },
              {
                "year": 1989,
                "value": -2.9,
                "projection": false
              },
              {
                "year": 1990,
                "value": -3.4,
                "projection": false
              },
              {
                "year": 1991,
                "value": -5.9,
                "projection": false
              },
              {
                "year": 1992,
                "value": -8.5,
                "projection": false
              },
              {
                "year": 1993,
                "value": -6.4,
                "projection": false
              },
              {
                "year": 1994,
                "value": -7.8,
                "projection": false
              },
              {
                "year": 1995,
                "value": -0.4,
                "projection": false
              },
              {
                "year": 1996,
                "value": -0.6,
                "projection": false
              },
              {
                "year": 1997,
                "value": -1.5,
                "projection": false
              },
              {
                "year": 1998,
                "value": -2.9,
                "projection": false
              },
              {
                "year": 1999,
                "value": -2.2,
                "projection": false
              },
              {
                "year": 2000,
                "value": -2.5,
                "projection": false
              },
              {
                "year": 2001,
                "value": -2.2,
                "projection": false
              },
              {
                "year": 2002,
                "value": -1.5,
                "projection": false
              },
              {
                "year": 2003,
                "value": -0.5,
                "projection": false
              },
              {
                "year": 2004,
                "value": -0.5,
                "projection": false
              },
              {
                "year": 2005,
                "value": -0.6,
                "projection": false
              },
              {
                "year": 2006,
                "value": -0.3,
                "projection": false
              },
              {
                "year": 2007,
                "value": -0.8,
                "projection": false
              },
              {
                "year": 2008,
                "value": -1.4,
                "projection": false
              },
              {
                "year": 2009,
                "value": -0.8,
                "projection": false
              },
              {
                "year": 2010,
                "value": -0.3,
                "projection": false
              },
              {
                "year": 2011,
                "value": -0.9,
                "projection": false
              },
              {
                "year": 2012,
                "value": -1.4,
                "projection": false
              },
              {
                "year": 2013,
                "value": -2.4,
                "projection": false
              },
              {
                "year": 2014,
                "value": -1.8,
                "projection": false
              },
              {
                "year": 2015,
                "value": -2.6,
                "projection": false
              },
              {
                "year": 2016,
                "value": -2.3,
                "projection": false
              },
              {
                "year": 2017,
                "value": -1.8,
                "projection": false
              },
              {
                "year": 2018,
                "value": -2.1,
                "projection": false
              },
              {
                "year": 2019,
                "value": -0.3,
                "projection": false
              },
              {
                "year": 2020,
                "value": 2.4,
                "projection": false
              },
              {
                "year": 2021,
                "value": -0.3,
                "projection": false
              },
              {
                "year": 2022,
                "value": -1.3,
                "projection": false
              },
              {
                "year": 2023,
                "value": -0.7,
                "projection": false
              },
              {
                "year": 2024,
                "value": -0.9,
                "projection": false
              },
              {
                "year": 2025,
                "value": -0.4,
                "projection": false
              },
              {
                "year": 2026,
                "value": -0.4,
                "projection": true
              },
              {
                "year": 2027,
                "value": -0.5,
                "projection": true
              },
              {
                "year": 2028,
                "value": -0.6,
                "projection": true
              },
              {
                "year": 2029,
                "value": -0.7,
                "projection": true
              },
              {
                "year": 2030,
                "value": -0.7,
                "projection": true
              },
              {
                "year": 2031,
                "value": -0.7,
                "projection": true
              }
            ]
          },
          "fiscalBalance": {
            "value": -4.4,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1990,
                "value": -3.1,
                "projection": false
              },
              {
                "year": 1991,
                "value": 1.5,
                "projection": false
              },
              {
                "year": 1992,
                "value": 2.3,
                "projection": false
              },
              {
                "year": 1993,
                "value": -1.5,
                "projection": false
              },
              {
                "year": 1994,
                "value": -2.3,
                "projection": false
              },
              {
                "year": 1995,
                "value": -2.3,
                "projection": false
              },
              {
                "year": 1996,
                "value": -3.7,
                "projection": false
              },
              {
                "year": 1997,
                "value": -3.5,
                "projection": false
              },
              {
                "year": 1998,
                "value": -4.5,
                "projection": false
              },
              {
                "year": 1999,
                "value": -4.5,
                "projection": false
              },
              {
                "year": 2000,
                "value": -2.7,
                "projection": false
              },
              {
                "year": 2001,
                "value": -2.6,
                "projection": false
              },
              {
                "year": 2002,
                "value": -2.2,
                "projection": false
              },
              {
                "year": 2003,
                "value": -2.2,
                "projection": false
              },
              {
                "year": 2004,
                "value": -1.3,
                "projection": false
              },
              {
                "year": 2005,
                "value": -1.4,
                "projection": false
              },
              {
                "year": 2006,
                "value": -1.2,
                "projection": false
              },
              {
                "year": 2007,
                "value": -1.5,
                "projection": false
              },
              {
                "year": 2008,
                "value": -0.7,
                "projection": false
              },
              {
                "year": 2009,
                "value": -3.9,
                "projection": false
              },
              {
                "year": 2010,
                "value": -3.8,
                "projection": false
              },
              {
                "year": 2011,
                "value": -3.2,
                "projection": false
              },
              {
                "year": 2012,
                "value": -3.6,
                "projection": false
              },
              {
                "year": 2013,
                "value": -3.6,
                "projection": false
              },
              {
                "year": 2014,
                "value": -4.4,
                "projection": false
              },
              {
                "year": 2015,
                "value": -3.9,
                "projection": false
              },
              {
                "year": 2016,
                "value": -2.7,
                "projection": false
              },
              {
                "year": 2017,
                "value": -1,
                "projection": false
              },
              {
                "year": 2018,
                "value": -2.1,
                "projection": false
              },
              {
                "year": 2019,
                "value": -2.3,
                "projection": false
              },
              {
                "year": 2020,
                "value": -4.3,
                "projection": false
              },
              {
                "year": 2021,
                "value": -3.7,
                "projection": false
              },
              {
                "year": 2022,
                "value": -4.3,
                "projection": false
              },
              {
                "year": 2023,
                "value": -4.3,
                "projection": false
              },
              {
                "year": 2024,
                "value": -5.8,
                "projection": false
              },
              {
                "year": 2025,
                "value": -4.9,
                "projection": false
              },
              {
                "year": 2026,
                "value": -4.4,
                "projection": true
              },
              {
                "year": 2027,
                "value": -3.5,
                "projection": true
              },
              {
                "year": 2028,
                "value": -3,
                "projection": true
              },
              {
                "year": 2029,
                "value": -3,
                "projection": true
              },
              {
                "year": 2030,
                "value": -3,
                "projection": true
              },
              {
                "year": 2031,
                "value": -3,
                "projection": true
              }
            ]
          },
          "governmentDebt": {
            "value": 62.7,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1996,
                "value": 42.5,
                "projection": false
              },
              {
                "year": 1997,
                "value": 39.1,
                "projection": false
              },
              {
                "year": 1998,
                "value": 39.7,
                "projection": false
              },
              {
                "year": 1999,
                "value": 41.7,
                "projection": false
              },
              {
                "year": 2000,
                "value": 38.5,
                "projection": false
              },
              {
                "year": 2001,
                "value": 37.3,
                "projection": false
              },
              {
                "year": 2002,
                "value": 39.9,
                "projection": false
              },
              {
                "year": 2003,
                "value": 42.1,
                "projection": false
              },
              {
                "year": 2004,
                "value": 38.9,
                "projection": false
              },
              {
                "year": 2005,
                "value": 36.8,
                "projection": false
              },
              {
                "year": 2006,
                "value": 35.8,
                "projection": false
              },
              {
                "year": 2007,
                "value": 35.5,
                "projection": false
              },
              {
                "year": 2008,
                "value": 40.6,
                "projection": false
              },
              {
                "year": 2009,
                "value": 41.7,
                "projection": false
              },
              {
                "year": 2010,
                "value": 40.2,
                "projection": false
              },
              {
                "year": 2011,
                "value": 41.2,
                "projection": false
              },
              {
                "year": 2012,
                "value": 40.8,
                "projection": false
              },
              {
                "year": 2013,
                "value": 44.1,
                "projection": false
              },
              {
                "year": 2014,
                "value": 47.1,
                "projection": false
              },
              {
                "year": 2015,
                "value": 51,
                "projection": false
              },
              {
                "year": 2016,
                "value": 55,
                "projection": false
              },
              {
                "year": 2017,
                "value": 52.5,
                "projection": false
              },
              {
                "year": 2018,
                "value": 52.2,
                "projection": false
              },
              {
                "year": 2019,
                "value": 51.9,
                "projection": false
              },
              {
                "year": 2020,
                "value": 58.5,
                "projection": false
              },
              {
                "year": 2021,
                "value": 56.7,
                "projection": false
              },
              {
                "year": 2022,
                "value": 53.8,
                "projection": false
              },
              {
                "year": 2023,
                "value": 52.8,
                "projection": false
              },
              {
                "year": 2024,
                "value": 59.1,
                "projection": false
              },
              {
                "year": 2025,
                "value": 61.8,
                "projection": false
              },
              {
                "year": 2026,
                "value": 62.7,
                "projection": true
              },
              {
                "year": 2027,
                "value": 63.1,
                "projection": true
              },
              {
                "year": 2028,
                "value": 63.1,
                "projection": true
              },
              {
                "year": 2029,
                "value": 63.3,
                "projection": true
              },
              {
                "year": 2030,
                "value": 63.4,
                "projection": true
              },
              {
                "year": 2031,
                "value": 63.6,
                "projection": true
              }
            ]
          }
        }
      },
      "worldBank": {
        "indicators": {
          "reserveMonths": {
            "value": 3.74625370139359,
            "year": 2025,
            "unit": "months",
            "series": [
              {
                "value": 4.46007738307296,
                "year": 2015,
                "projection": false
              },
              {
                "value": 4.54794007085504,
                "year": 2016,
                "projection": false
              },
              {
                "value": 4.12120736692421,
                "year": 2017,
                "projection": false
              },
              {
                "value": 3.74611361421752,
                "year": 2018,
                "projection": false
              },
              {
                "value": 3.91541539352767,
                "year": 2019,
                "projection": false
              },
              {
                "value": 5.07902828726659,
                "year": 2020,
                "projection": false
              },
              {
                "value": 4.12398114778684,
                "year": 2021,
                "projection": false
              },
              {
                "value": 3.32190681281323,
                "year": 2022,
                "projection": false
              },
              {
                "value": 3.44254741981939,
                "year": 2023,
                "projection": false
              },
              {
                "value": 3.54735732153754,
                "year": 2024,
                "projection": false
              },
              {
                "value": 3.74625370139359,
                "year": 2025,
                "projection": false
              }
            ]
          },
          "externalDebtGni": {
            "value": 32.8920519832698,
            "year": 2024,
            "unit": "percent",
            "series": [
              {
                "value": 45.4803129174973,
                "year": 2015,
                "projection": false
              },
              {
                "value": 50.2965927131738,
                "year": 2016,
                "projection": false
              },
              {
                "value": 49.85860000761,
                "year": 2017,
                "projection": false
              },
              {
                "value": 49.1902287834628,
                "year": 2018,
                "projection": false
              },
              {
                "value": 48.7169187460769,
                "year": 2019,
                "projection": false
              },
              {
                "value": 56.8349663684666,
                "year": 2020,
                "projection": false
              },
              {
                "value": 46.8965782589805,
                "year": 2021,
                "projection": false
              },
              {
                "value": 40.8971913213688,
                "year": 2022,
                "projection": false
              },
              {
                "value": 34.0722892134803,
                "year": 2023,
                "projection": false
              },
              {
                "value": 32.8920519832698,
                "year": 2024,
                "projection": false
              }
            ]
          },
          "debtServiceExports": {
            "value": 9.51997025016336,
            "year": 2024,
            "unit": "percent",
            "series": [
              {
                "value": 12.5387170111518,
                "year": 2015,
                "projection": false
              },
              {
                "value": 18.8534358233458,
                "year": 2016,
                "projection": false
              },
              {
                "value": 14.2819574213038,
                "year": 2017,
                "projection": false
              },
              {
                "value": 11.6218684544373,
                "year": 2018,
                "projection": false
              },
              {
                "value": 13.3021139066279,
                "year": 2019,
                "projection": false
              },
              {
                "value": 15.7359205334234,
                "year": 2020,
                "projection": false
              },
              {
                "value": 14.4748436269398,
                "year": 2021,
                "projection": false
              },
              {
                "value": 8.6120372079918,
                "year": 2022,
                "projection": false
              },
              {
                "value": 8.14585545015927,
                "year": 2023,
                "projection": false
              },
              {
                "value": 9.51997025016336,
                "year": 2024,
                "projection": false
              }
            ]
          }
        }
      },
      "trade": {
        "year": 2024,
        "exportsTotal": 650272340335,
        "importsTotal": 563525204208,
        "topExports": [
          {
            "name": "Cars",
            "value": 67250128063,
            "share": 10.341840470771805
          },
          {
            "name": "Computers",
            "value": 56685761337,
            "share": 8.717233968124381
          },
          {
            "name": "Motor vehicles; parts and accessories (8701 to 8705)",
            "value": 42332855057,
            "share": 6.510019330545635
          },
          {
            "name": "Delivery Trucks",
            "value": 37343120304,
            "share": 5.742689329944741
          },
          {
            "name": "Crude Petroleum",
            "value": 26626633533,
            "share": 4.094689544888652
          }
        ],
        "topImports": [
          {
            "name": "Motor vehicles; parts and accessories (8701 to 8705)",
            "value": 34712418096,
            "share": 6.15986966275735
          },
          {
            "name": "Refined Petroleum",
            "value": 30882773059.999996,
            "share": 5.480282484153275
          },
          {
            "name": "Integrated Circuits",
            "value": 21537949743,
            "share": 3.8220029170248497
          },
          {
            "name": "Cars",
            "value": 16815824471,
            "share": 2.9840412363868634
          },
          {
            "name": "Telephones",
            "value": 16524534077,
            "share": 2.9323504882490954
          }
        ],
        "exportPartners": [
          {
            "name": "United States",
            "value": 495485613803,
            "share": 76.19663071440826
          },
          {
            "name": "Canada",
            "value": 32365005859,
            "share": 4.977146320313511
          },
          {
            "name": "China",
            "value": 13683367299,
            "share": 2.104251780407999
          },
          {
            "name": "Germany",
            "value": 9761993548,
            "share": 1.501216173975803
          },
          {
            "name": "South Korea",
            "value": 7399462760,
            "share": 1.137902122084422
          }
        ],
        "importPartners": [
          {
            "name": "United States",
            "value": 283580882584,
            "share": 50.32266178449915
          },
          {
            "name": "China",
            "value": 107509954777,
            "share": 19.078109368346468
          },
          {
            "name": "Germany",
            "value": 18743982288,
            "share": 3.326201232532893
          },
          {
            "name": "South Korea",
            "value": 14605019305,
            "share": 2.5917242380536387
          },
          {
            "name": "Japan",
            "value": 13779591385,
            "share": 2.445248461311747
          }
        ]
      }
    },
    "bahamas": {
      "imf": {
        "indicators": {
          "realGdpGrowth": {
            "value": 2.1,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1980,
                "value": 7.1,
                "projection": false
              },
              {
                "year": 1981,
                "value": -2.9,
                "projection": false
              },
              {
                "year": 1982,
                "value": 6.3,
                "projection": false
              },
              {
                "year": 1983,
                "value": 6.8,
                "projection": false
              },
              {
                "year": 1984,
                "value": 2.4,
                "projection": false
              },
              {
                "year": 1985,
                "value": 4.1,
                "projection": false
              },
              {
                "year": 1986,
                "value": 2.6,
                "projection": false
              },
              {
                "year": 1987,
                "value": 3.7,
                "projection": false
              },
              {
                "year": 1988,
                "value": 2.3,
                "projection": false
              },
              {
                "year": 1989,
                "value": 2.3,
                "projection": false
              },
              {
                "year": 1990,
                "value": 1.1,
                "projection": false
              },
              {
                "year": 1991,
                "value": -4.2,
                "projection": false
              },
              {
                "year": 1992,
                "value": -3.8,
                "projection": false
              },
              {
                "year": 1993,
                "value": 0.3,
                "projection": false
              },
              {
                "year": 1994,
                "value": 3.1,
                "projection": false
              },
              {
                "year": 1995,
                "value": 4.4,
                "projection": false
              },
              {
                "year": 1996,
                "value": 4.2,
                "projection": false
              },
              {
                "year": 1997,
                "value": 4.9,
                "projection": false
              },
              {
                "year": 1998,
                "value": 4.7,
                "projection": false
              },
              {
                "year": 1999,
                "value": 7.1,
                "projection": false
              },
              {
                "year": 2000,
                "value": 4.1,
                "projection": false
              },
              {
                "year": 2001,
                "value": 2.6,
                "projection": false
              },
              {
                "year": 2002,
                "value": 2.7,
                "projection": false
              },
              {
                "year": 2003,
                "value": -1.3,
                "projection": false
              },
              {
                "year": 2004,
                "value": 0.9,
                "projection": false
              },
              {
                "year": 2005,
                "value": 3.4,
                "projection": false
              },
              {
                "year": 2006,
                "value": 2.5,
                "projection": false
              },
              {
                "year": 2007,
                "value": 1.4,
                "projection": false
              },
              {
                "year": 2008,
                "value": -2.3,
                "projection": false
              },
              {
                "year": 2009,
                "value": -4.2,
                "projection": false
              },
              {
                "year": 2010,
                "value": 1.5,
                "projection": false
              },
              {
                "year": 2011,
                "value": 0.6,
                "projection": false
              },
              {
                "year": 2012,
                "value": 4.6,
                "projection": false
              },
              {
                "year": 2013,
                "value": -2.9,
                "projection": false
              },
              {
                "year": 2014,
                "value": 1.8,
                "projection": false
              },
              {
                "year": 2015,
                "value": 1,
                "projection": false
              },
              {
                "year": 2016,
                "value": -1.2,
                "projection": false
              },
              {
                "year": 2017,
                "value": 3.4,
                "projection": false
              },
              {
                "year": 2018,
                "value": 2.4,
                "projection": false
              },
              {
                "year": 2019,
                "value": -0.8,
                "projection": false
              },
              {
                "year": 2020,
                "value": -20.1,
                "projection": false
              },
              {
                "year": 2021,
                "value": 17.6,
                "projection": false
              },
              {
                "year": 2022,
                "value": 10.9,
                "projection": false
              },
              {
                "year": 2023,
                "value": 3,
                "projection": false
              },
              {
                "year": 2024,
                "value": 3.4,
                "projection": false
              },
              {
                "year": 2025,
                "value": 2.8,
                "projection": false
              },
              {
                "year": 2026,
                "value": 2.1,
                "projection": true
              },
              {
                "year": 2027,
                "value": 1.9,
                "projection": true
              },
              {
                "year": 2028,
                "value": 1.8,
                "projection": true
              },
              {
                "year": 2029,
                "value": 1.5,
                "projection": true
              },
              {
                "year": 2030,
                "value": 1.5,
                "projection": true
              },
              {
                "year": 2031,
                "value": 1.5,
                "projection": true
              }
            ]
          },
          "inflation": {
            "value": 1.6,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1980,
                "value": 12.2,
                "projection": false
              },
              {
                "year": 1981,
                "value": 11,
                "projection": false
              },
              {
                "year": 1982,
                "value": 6.1,
                "projection": false
              },
              {
                "year": 1983,
                "value": 4,
                "projection": false
              },
              {
                "year": 1984,
                "value": 4,
                "projection": false
              },
              {
                "year": 1985,
                "value": 4.6,
                "projection": false
              },
              {
                "year": 1986,
                "value": 5.4,
                "projection": false
              },
              {
                "year": 1987,
                "value": 6,
                "projection": false
              },
              {
                "year": 1988,
                "value": 4.1,
                "projection": false
              },
              {
                "year": 1989,
                "value": 5.4,
                "projection": false
              },
              {
                "year": 1990,
                "value": 4.6,
                "projection": false
              },
              {
                "year": 1991,
                "value": 7.3,
                "projection": false
              },
              {
                "year": 1992,
                "value": 5.6,
                "projection": false
              },
              {
                "year": 1993,
                "value": 2.7,
                "projection": false
              },
              {
                "year": 1994,
                "value": 1.4,
                "projection": false
              },
              {
                "year": 1995,
                "value": 2,
                "projection": false
              },
              {
                "year": 1996,
                "value": 1.3,
                "projection": false
              },
              {
                "year": 1997,
                "value": 0.6,
                "projection": false
              },
              {
                "year": 1998,
                "value": 1.2,
                "projection": false
              },
              {
                "year": 1999,
                "value": 1.1,
                "projection": false
              },
              {
                "year": 2000,
                "value": 1.7,
                "projection": false
              },
              {
                "year": 2001,
                "value": 2.4,
                "projection": false
              },
              {
                "year": 2002,
                "value": 1.5,
                "projection": false
              },
              {
                "year": 2003,
                "value": 3.7,
                "projection": false
              },
              {
                "year": 2004,
                "value": 1.2,
                "projection": false
              },
              {
                "year": 2005,
                "value": 1.8,
                "projection": false
              },
              {
                "year": 2006,
                "value": 2,
                "projection": false
              },
              {
                "year": 2007,
                "value": 2.4,
                "projection": false
              },
              {
                "year": 2008,
                "value": 4.4,
                "projection": false
              },
              {
                "year": 2009,
                "value": 1.7,
                "projection": false
              },
              {
                "year": 2010,
                "value": 1.6,
                "projection": false
              },
              {
                "year": 2011,
                "value": 3.1,
                "projection": false
              },
              {
                "year": 2012,
                "value": 1.9,
                "projection": false
              },
              {
                "year": 2013,
                "value": 0.4,
                "projection": false
              },
              {
                "year": 2014,
                "value": 1.2,
                "projection": false
              },
              {
                "year": 2015,
                "value": 1.9,
                "projection": false
              },
              {
                "year": 2016,
                "value": -0.3,
                "projection": false
              },
              {
                "year": 2017,
                "value": 1.5,
                "projection": false
              },
              {
                "year": 2018,
                "value": 2.3,
                "projection": false
              },
              {
                "year": 2019,
                "value": 2.5,
                "projection": false
              },
              {
                "year": 2020,
                "value": 0,
                "projection": false
              },
              {
                "year": 2021,
                "value": 2.9,
                "projection": false
              },
              {
                "year": 2022,
                "value": 5.6,
                "projection": false
              },
              {
                "year": 2023,
                "value": 3.1,
                "projection": false
              },
              {
                "year": 2024,
                "value": 0.4,
                "projection": false
              },
              {
                "year": 2025,
                "value": 0.6,
                "projection": false
              },
              {
                "year": 2026,
                "value": 1.6,
                "projection": true
              },
              {
                "year": 2027,
                "value": 1.9,
                "projection": true
              },
              {
                "year": 2028,
                "value": 2,
                "projection": true
              },
              {
                "year": 2029,
                "value": 2,
                "projection": true
              },
              {
                "year": 2030,
                "value": 2,
                "projection": true
              },
              {
                "year": 2031,
                "value": 2,
                "projection": true
              }
            ]
          },
          "currentAccount": {
            "value": -9.1,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1980,
                "value": -0.6,
                "projection": false
              },
              {
                "year": 1981,
                "value": -3.1,
                "projection": false
              },
              {
                "year": 1982,
                "value": -2.2,
                "projection": false
              },
              {
                "year": 1983,
                "value": -1.2,
                "projection": false
              },
              {
                "year": 1984,
                "value": -1.3,
                "projection": false
              },
              {
                "year": 1985,
                "value": -1,
                "projection": false
              },
              {
                "year": 1986,
                "value": -0.8,
                "projection": false
              },
              {
                "year": 1987,
                "value": -1.2,
                "projection": false
              },
              {
                "year": 1988,
                "value": -1.4,
                "projection": false
              },
              {
                "year": 1989,
                "value": -1.7,
                "projection": false
              },
              {
                "year": 1990,
                "value": -0.8,
                "projection": false
              },
              {
                "year": 1991,
                "value": -3.5,
                "projection": false
              },
              {
                "year": 1992,
                "value": 0.6,
                "projection": false
              },
              {
                "year": 1993,
                "value": 5.6,
                "projection": false
              },
              {
                "year": 1994,
                "value": 3.8,
                "projection": false
              },
              {
                "year": 1995,
                "value": 2.3,
                "projection": false
              },
              {
                "year": 1996,
                "value": 0.3,
                "projection": false
              },
              {
                "year": 1997,
                "value": -5.4,
                "projection": false
              },
              {
                "year": 1998,
                "value": -10.1,
                "projection": false
              },
              {
                "year": 1999,
                "value": 1.4,
                "projection": false
              },
              {
                "year": 2000,
                "value": -1.5,
                "projection": false
              },
              {
                "year": 2001,
                "value": -3.8,
                "projection": false
              },
              {
                "year": 2002,
                "value": 0.1,
                "projection": false
              },
              {
                "year": 2003,
                "value": -0.2,
                "projection": false
              },
              {
                "year": 2004,
                "value": 1.6,
                "projection": false
              },
              {
                "year": 2005,
                "value": -3.1,
                "projection": false
              },
              {
                "year": 2006,
                "value": -10.1,
                "projection": false
              },
              {
                "year": 2007,
                "value": -9,
                "projection": false
              },
              {
                "year": 2008,
                "value": -8.3,
                "projection": false
              },
              {
                "year": 2009,
                "value": -8.1,
                "projection": false
              },
              {
                "year": 2010,
                "value": -7.9,
                "projection": false
              },
              {
                "year": 2011,
                "value": -10.9,
                "projection": false
              },
              {
                "year": 2012,
                "value": -14.3,
                "projection": false
              },
              {
                "year": 2013,
                "value": -14.5,
                "projection": false
              },
              {
                "year": 2014,
                "value": -19.7,
                "projection": false
              },
              {
                "year": 2015,
                "value": -12.5,
                "projection": false
              },
              {
                "year": 2016,
                "value": -12.4,
                "projection": false
              },
              {
                "year": 2017,
                "value": -13.3,
                "projection": false
              },
              {
                "year": 2018,
                "value": -9.4,
                "projection": false
              },
              {
                "year": 2019,
                "value": -2.1,
                "projection": false
              },
              {
                "year": 2020,
                "value": -22,
                "projection": false
              },
              {
                "year": 2021,
                "value": -20.2,
                "projection": false
              },
              {
                "year": 2022,
                "value": -8.9,
                "projection": false
              },
              {
                "year": 2023,
                "value": -7,
                "projection": false
              },
              {
                "year": 2024,
                "value": -7.6,
                "projection": false
              },
              {
                "year": 2025,
                "value": -10,
                "projection": false
              },
              {
                "year": 2026,
                "value": -9.1,
                "projection": true
              },
              {
                "year": 2027,
                "value": -8.4,
                "projection": true
              },
              {
                "year": 2028,
                "value": -7.5,
                "projection": true
              },
              {
                "year": 2029,
                "value": -6.7,
                "projection": true
              },
              {
                "year": 2030,
                "value": -6.1,
                "projection": true
              },
              {
                "year": 2031,
                "value": -5.9,
                "projection": true
              }
            ]
          },
          "fiscalBalance": {
            "value": -0.3,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1990,
                "value": -2.6,
                "projection": false
              },
              {
                "year": 1991,
                "value": -2.3,
                "projection": false
              },
              {
                "year": 1992,
                "value": -2.2,
                "projection": false
              },
              {
                "year": 1993,
                "value": -1.1,
                "projection": false
              },
              {
                "year": 1994,
                "value": -0.4,
                "projection": false
              },
              {
                "year": 1995,
                "value": 0.2,
                "projection": false
              },
              {
                "year": 1996,
                "value": -0.2,
                "projection": false
              },
              {
                "year": 1997,
                "value": -1.6,
                "projection": false
              },
              {
                "year": 1998,
                "value": -0.4,
                "projection": false
              },
              {
                "year": 1999,
                "value": 1.8,
                "projection": false
              },
              {
                "year": 2000,
                "value": 0.1,
                "projection": false
              },
              {
                "year": 2001,
                "value": 0.3,
                "projection": false
              },
              {
                "year": 2002,
                "value": -1.7,
                "projection": false
              },
              {
                "year": 2003,
                "value": -1.6,
                "projection": false
              },
              {
                "year": 2004,
                "value": -1.9,
                "projection": false
              },
              {
                "year": 2005,
                "value": -1.2,
                "projection": false
              },
              {
                "year": 2006,
                "value": -0.4,
                "projection": false
              },
              {
                "year": 2007,
                "value": -0.8,
                "projection": false
              },
              {
                "year": 2008,
                "value": -0.8,
                "projection": false
              },
              {
                "year": 2009,
                "value": -2.4,
                "projection": false
              },
              {
                "year": 2010,
                "value": -2.6,
                "projection": false
              },
              {
                "year": 2011,
                "value": -2.9,
                "projection": false
              },
              {
                "year": 2012,
                "value": -3.3,
                "projection": false
              },
              {
                "year": 2013,
                "value": -5.1,
                "projection": false
              },
              {
                "year": 2014,
                "value": -4.5,
                "projection": false
              },
              {
                "year": 2015,
                "value": -3.3,
                "projection": false
              },
              {
                "year": 2016,
                "value": -2.6,
                "projection": false
              },
              {
                "year": 2017,
                "value": -6.1,
                "projection": false
              },
              {
                "year": 2018,
                "value": -3.3,
                "projection": false
              },
              {
                "year": 2019,
                "value": -1.7,
                "projection": false
              },
              {
                "year": 2020,
                "value": -7.1,
                "projection": false
              },
              {
                "year": 2021,
                "value": -11.9,
                "projection": false
              },
              {
                "year": 2022,
                "value": -5.5,
                "projection": false
              },
              {
                "year": 2023,
                "value": -3.7,
                "projection": false
              },
              {
                "year": 2024,
                "value": -1.2,
                "projection": false
              },
              {
                "year": 2025,
                "value": -0.5,
                "projection": false
              },
              {
                "year": 2026,
                "value": -0.3,
                "projection": true
              },
              {
                "year": 2027,
                "value": -0.3,
                "projection": true
              },
              {
                "year": 2028,
                "value": -0.3,
                "projection": true
              },
              {
                "year": 2029,
                "value": 0.1,
                "projection": true
              },
              {
                "year": 2030,
                "value": 0.2,
                "projection": true
              },
              {
                "year": 2031,
                "value": 0.2,
                "projection": true
              }
            ]
          },
          "governmentDebt": {
            "value": 71.9,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1990,
                "value": 13.2,
                "projection": false
              },
              {
                "year": 1991,
                "value": 15.3,
                "projection": false
              },
              {
                "year": 1992,
                "value": 17.9,
                "projection": false
              },
              {
                "year": 1993,
                "value": 19.7,
                "projection": false
              },
              {
                "year": 1994,
                "value": 20.9,
                "projection": false
              },
              {
                "year": 1995,
                "value": 21,
                "projection": false
              },
              {
                "year": 1996,
                "value": 20.7,
                "projection": false
              },
              {
                "year": 1997,
                "value": 21.5,
                "projection": false
              },
              {
                "year": 1998,
                "value": 20.8,
                "projection": false
              },
              {
                "year": 1999,
                "value": 19.8,
                "projection": false
              },
              {
                "year": 2000,
                "value": 19.2,
                "projection": false
              },
              {
                "year": 2001,
                "value": 18.5,
                "projection": false
              },
              {
                "year": 2002,
                "value": 19.4,
                "projection": false
              },
              {
                "year": 2003,
                "value": 20.8,
                "projection": false
              },
              {
                "year": 2004,
                "value": 21.6,
                "projection": false
              },
              {
                "year": 2005,
                "value": 23,
                "projection": false
              },
              {
                "year": 2006,
                "value": 23.2,
                "projection": false
              },
              {
                "year": 2007,
                "value": 23.5,
                "projection": false
              },
              {
                "year": 2008,
                "value": 25.3,
                "projection": false
              },
              {
                "year": 2009,
                "value": 30.1,
                "projection": false
              },
              {
                "year": 2010,
                "value": 33.9,
                "projection": false
              },
              {
                "year": 2011,
                "value": 35.3,
                "projection": false
              },
              {
                "year": 2012,
                "value": 37.6,
                "projection": false
              },
              {
                "year": 2013,
                "value": 44.2,
                "projection": false
              },
              {
                "year": 2014,
                "value": 47.7,
                "projection": false
              },
              {
                "year": 2015,
                "value": 49.9,
                "projection": false
              },
              {
                "year": 2016,
                "value": 51.1,
                "projection": false
              },
              {
                "year": 2017,
                "value": 54.6,
                "projection": false
              },
              {
                "year": 2018,
                "value": 61.5,
                "projection": false
              },
              {
                "year": 2019,
                "value": 60.3,
                "projection": false
              },
              {
                "year": 2020,
                "value": 71.9,
                "projection": false
              },
              {
                "year": 2021,
                "value": 90.7,
                "projection": false
              },
              {
                "year": 2022,
                "value": 84.7,
                "projection": false
              },
              {
                "year": 2023,
                "value": 78.3,
                "projection": false
              },
              {
                "year": 2024,
                "value": 73.8,
                "projection": false
              },
              {
                "year": 2025,
                "value": 73.8,
                "projection": false
              },
              {
                "year": 2026,
                "value": 71.9,
                "projection": true
              },
              {
                "year": 2027,
                "value": 70.2,
                "projection": true
              },
              {
                "year": 2028,
                "value": 68.5,
                "projection": true
              },
              {
                "year": 2029,
                "value": 66.3,
                "projection": true
              },
              {
                "year": 2030,
                "value": 64.1,
                "projection": true
              },
              {
                "year": 2031,
                "value": 61.9,
                "projection": true
              }
            ]
          }
        }
      },
      "worldBank": {
        "indicators": {
          "reserveMonths": {
            "value": 3.95320627474854,
            "year": 2024,
            "unit": "months",
            "series": [
              {
                "value": 2.29663852087598,
                "year": 2015,
                "projection": false
              },
              {
                "value": 2.42753105593861,
                "year": 2016,
                "projection": false
              },
              {
                "value": 3.18337801408719,
                "year": 2017,
                "projection": false
              },
              {
                "value": 2.76440306147581,
                "year": 2018,
                "projection": false
              },
              {
                "value": 3.85200499675234,
                "year": 2019,
                "projection": false
              },
              {
                "value": 7.35609883565824,
                "year": 2020,
                "projection": false
              },
              {
                "value": 5.10937798510662,
                "year": 2021,
                "projection": false
              },
              {
                "value": 4.62433819062106,
                "year": 2022,
                "projection": false
              },
              {
                "value": 4.17333846415305,
                "year": 2023,
                "projection": false
              },
              {
                "value": 3.95320627474854,
                "year": 2024,
                "projection": false
              }
            ]
          }
        }
      }
    },
    "serbia": {
      "imf": {
        "indicators": {
          "realGdpGrowth": {
            "value": 2.8,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1998,
                "value": 5.3,
                "projection": false
              },
              {
                "year": 1999,
                "value": -10.3,
                "projection": false
              },
              {
                "year": 2000,
                "value": 6.1,
                "projection": false
              },
              {
                "year": 2001,
                "value": 6.8,
                "projection": false
              },
              {
                "year": 2002,
                "value": 6.5,
                "projection": false
              },
              {
                "year": 2003,
                "value": 4.6,
                "projection": false
              },
              {
                "year": 2004,
                "value": 6.7,
                "projection": false
              },
              {
                "year": 2005,
                "value": 5.9,
                "projection": false
              },
              {
                "year": 2006,
                "value": 3.9,
                "projection": false
              },
              {
                "year": 2007,
                "value": 7.8,
                "projection": false
              },
              {
                "year": 2008,
                "value": 5.2,
                "projection": false
              },
              {
                "year": 2009,
                "value": -3.1,
                "projection": false
              },
              {
                "year": 2010,
                "value": 1.6,
                "projection": false
              },
              {
                "year": 2011,
                "value": 0.1,
                "projection": false
              },
              {
                "year": 2012,
                "value": -0.4,
                "projection": false
              },
              {
                "year": 2013,
                "value": 0.5,
                "projection": false
              },
              {
                "year": 2014,
                "value": -1.8,
                "projection": false
              },
              {
                "year": 2015,
                "value": 1.3,
                "projection": false
              },
              {
                "year": 2016,
                "value": 3,
                "projection": false
              },
              {
                "year": 2017,
                "value": 2.4,
                "projection": false
              },
              {
                "year": 2018,
                "value": 4.6,
                "projection": false
              },
              {
                "year": 2019,
                "value": 4.8,
                "projection": false
              },
              {
                "year": 2020,
                "value": -1,
                "projection": false
              },
              {
                "year": 2021,
                "value": 7.9,
                "projection": false
              },
              {
                "year": 2022,
                "value": 2.7,
                "projection": false
              },
              {
                "year": 2023,
                "value": 3.7,
                "projection": false
              },
              {
                "year": 2024,
                "value": 3.9,
                "projection": false
              },
              {
                "year": 2025,
                "value": 2,
                "projection": false
              },
              {
                "year": 2026,
                "value": 2.8,
                "projection": true
              },
              {
                "year": 2027,
                "value": 3.5,
                "projection": true
              },
              {
                "year": 2028,
                "value": 3.5,
                "projection": true
              },
              {
                "year": 2029,
                "value": 3.5,
                "projection": true
              },
              {
                "year": 2030,
                "value": 3.5,
                "projection": true
              },
              {
                "year": 2031,
                "value": 3.5,
                "projection": true
              }
            ]
          },
          "inflation": {
            "value": 5.2,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1998,
                "value": 30,
                "projection": false
              },
              {
                "year": 1999,
                "value": 41.1,
                "projection": false
              },
              {
                "year": 2000,
                "value": 70,
                "projection": false
              },
              {
                "year": 2001,
                "value": 80.7,
                "projection": false
              },
              {
                "year": 2002,
                "value": 8.9,
                "projection": false
              },
              {
                "year": 2003,
                "value": 2.9,
                "projection": false
              },
              {
                "year": 2004,
                "value": 10.6,
                "projection": false
              },
              {
                "year": 2005,
                "value": 16.3,
                "projection": false
              },
              {
                "year": 2006,
                "value": 10.7,
                "projection": false
              },
              {
                "year": 2007,
                "value": 5.9,
                "projection": false
              },
              {
                "year": 2008,
                "value": 12.4,
                "projection": false
              },
              {
                "year": 2009,
                "value": 8.1,
                "projection": false
              },
              {
                "year": 2010,
                "value": 6.1,
                "projection": false
              },
              {
                "year": 2011,
                "value": 11.1,
                "projection": false
              },
              {
                "year": 2012,
                "value": 7.3,
                "projection": false
              },
              {
                "year": 2013,
                "value": 7.7,
                "projection": false
              },
              {
                "year": 2014,
                "value": 2.2,
                "projection": false
              },
              {
                "year": 2015,
                "value": 1.4,
                "projection": false
              },
              {
                "year": 2016,
                "value": 1.1,
                "projection": false
              },
              {
                "year": 2017,
                "value": 3.2,
                "projection": false
              },
              {
                "year": 2018,
                "value": 2,
                "projection": false
              },
              {
                "year": 2019,
                "value": 1.9,
                "projection": false
              },
              {
                "year": 2020,
                "value": 1.5,
                "projection": false
              },
              {
                "year": 2021,
                "value": 4.1,
                "projection": false
              },
              {
                "year": 2022,
                "value": 12,
                "projection": false
              },
              {
                "year": 2023,
                "value": 12.4,
                "projection": false
              },
              {
                "year": 2024,
                "value": 4.7,
                "projection": false
              },
              {
                "year": 2025,
                "value": 3.9,
                "projection": false
              },
              {
                "year": 2026,
                "value": 5.2,
                "projection": true
              },
              {
                "year": 2027,
                "value": 4.9,
                "projection": true
              },
              {
                "year": 2028,
                "value": 3,
                "projection": true
              },
              {
                "year": 2029,
                "value": 3,
                "projection": true
              },
              {
                "year": 2030,
                "value": 3,
                "projection": true
              },
              {
                "year": 2031,
                "value": 3,
                "projection": true
              }
            ]
          },
          "currentAccount": {
            "value": -5.7,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1997,
                "value": -4.5,
                "projection": false
              },
              {
                "year": 1998,
                "value": -2.3,
                "projection": false
              },
              {
                "year": 1999,
                "value": -3.5,
                "projection": false
              },
              {
                "year": 2000,
                "value": -1.7,
                "projection": false
              },
              {
                "year": 2001,
                "value": 1.9,
                "projection": false
              },
              {
                "year": 2002,
                "value": -3.5,
                "projection": false
              },
              {
                "year": 2003,
                "value": -6.5,
                "projection": false
              },
              {
                "year": 2004,
                "value": -12.2,
                "projection": false
              },
              {
                "year": 2005,
                "value": -7.8,
                "projection": false
              },
              {
                "year": 2006,
                "value": -8.9,
                "projection": false
              },
              {
                "year": 2007,
                "value": -15.4,
                "projection": false
              },
              {
                "year": 2008,
                "value": -19.1,
                "projection": false
              },
              {
                "year": 2009,
                "value": -5.7,
                "projection": false
              },
              {
                "year": 2010,
                "value": -5.8,
                "projection": false
              },
              {
                "year": 2011,
                "value": -7.8,
                "projection": false
              },
              {
                "year": 2012,
                "value": -10.4,
                "projection": false
              },
              {
                "year": 2013,
                "value": -5.5,
                "projection": false
              },
              {
                "year": 2014,
                "value": -5.4,
                "projection": false
              },
              {
                "year": 2015,
                "value": -3.3,
                "projection": false
              },
              {
                "year": 2016,
                "value": -2.8,
                "projection": false
              },
              {
                "year": 2017,
                "value": -5,
                "projection": false
              },
              {
                "year": 2018,
                "value": -4.6,
                "projection": false
              },
              {
                "year": 2019,
                "value": -6.6,
                "projection": false
              },
              {
                "year": 2020,
                "value": -3.9,
                "projection": false
              },
              {
                "year": 2021,
                "value": -4.1,
                "projection": false
              },
              {
                "year": 2022,
                "value": -6.5,
                "projection": false
              },
              {
                "year": 2023,
                "value": -2.3,
                "projection": false
              },
              {
                "year": 2024,
                "value": -4.5,
                "projection": false
              },
              {
                "year": 2025,
                "value": -4.9,
                "projection": false
              },
              {
                "year": 2026,
                "value": -5.7,
                "projection": true
              },
              {
                "year": 2027,
                "value": -4.4,
                "projection": true
              },
              {
                "year": 2028,
                "value": -5,
                "projection": true
              },
              {
                "year": 2029,
                "value": -4.9,
                "projection": true
              },
              {
                "year": 2030,
                "value": -4.8,
                "projection": true
              },
              {
                "year": 2031,
                "value": -4.8,
                "projection": true
              }
            ]
          },
          "fiscalBalance": {
            "value": -2.9,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 2000,
                "value": -0.1,
                "projection": false
              },
              {
                "year": 2001,
                "value": 0.3,
                "projection": false
              },
              {
                "year": 2002,
                "value": -2.3,
                "projection": false
              },
              {
                "year": 2003,
                "value": -2.4,
                "projection": false
              },
              {
                "year": 2004,
                "value": 0.1,
                "projection": false
              },
              {
                "year": 2005,
                "value": 1,
                "projection": false
              },
              {
                "year": 2006,
                "value": -0.9,
                "projection": false
              },
              {
                "year": 2007,
                "value": -0.8,
                "projection": false
              },
              {
                "year": 2008,
                "value": -4.3,
                "projection": false
              },
              {
                "year": 2009,
                "value": -3.3,
                "projection": false
              },
              {
                "year": 2010,
                "value": -3.3,
                "projection": false
              },
              {
                "year": 2011,
                "value": -3.8,
                "projection": false
              },
              {
                "year": 2012,
                "value": -6.1,
                "projection": false
              },
              {
                "year": 2013,
                "value": -4.8,
                "projection": false
              },
              {
                "year": 2014,
                "value": -5.6,
                "projection": false
              },
              {
                "year": 2015,
                "value": -3.2,
                "projection": false
              },
              {
                "year": 2016,
                "value": -1.1,
                "projection": false
              },
              {
                "year": 2017,
                "value": 1.3,
                "projection": false
              },
              {
                "year": 2018,
                "value": 0.8,
                "projection": false
              },
              {
                "year": 2019,
                "value": 0,
                "projection": false
              },
              {
                "year": 2020,
                "value": -6.9,
                "projection": false
              },
              {
                "year": 2021,
                "value": -3.2,
                "projection": false
              },
              {
                "year": 2022,
                "value": -0.1,
                "projection": false
              },
              {
                "year": 2023,
                "value": -1.2,
                "projection": false
              },
              {
                "year": 2024,
                "value": -1.7,
                "projection": false
              },
              {
                "year": 2025,
                "value": -2.2,
                "projection": false
              },
              {
                "year": 2026,
                "value": -2.9,
                "projection": true
              },
              {
                "year": 2027,
                "value": -2.9,
                "projection": true
              },
              {
                "year": 2028,
                "value": -2.5,
                "projection": true
              },
              {
                "year": 2029,
                "value": -2.4,
                "projection": true
              },
              {
                "year": 2030,
                "value": -1.9,
                "projection": true
              },
              {
                "year": 2031,
                "value": -1.9,
                "projection": true
              }
            ]
          },
          "governmentDebt": {
            "value": 42.6,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 2000,
                "value": 200.6,
                "projection": false
              },
              {
                "year": 2001,
                "value": 95.9,
                "projection": false
              },
              {
                "year": 2002,
                "value": 68.4,
                "projection": false
              },
              {
                "year": 2003,
                "value": 64.4,
                "projection": false
              },
              {
                "year": 2004,
                "value": 57.6,
                "projection": false
              },
              {
                "year": 2005,
                "value": 50.1,
                "projection": false
              },
              {
                "year": 2006,
                "value": 37,
                "projection": false
              },
              {
                "year": 2007,
                "value": 30,
                "projection": false
              },
              {
                "year": 2008,
                "value": 29.4,
                "projection": false
              },
              {
                "year": 2009,
                "value": 35.3,
                "projection": false
              },
              {
                "year": 2010,
                "value": 42.4,
                "projection": false
              },
              {
                "year": 2011,
                "value": 46,
                "projection": false
              },
              {
                "year": 2012,
                "value": 58,
                "projection": false
              },
              {
                "year": 2013,
                "value": 61.2,
                "projection": false
              },
              {
                "year": 2014,
                "value": 63.5,
                "projection": false
              },
              {
                "year": 2015,
                "value": 67.1,
                "projection": false
              },
              {
                "year": 2016,
                "value": 65,
                "projection": false
              },
              {
                "year": 2017,
                "value": 55.3,
                "projection": false
              },
              {
                "year": 2018,
                "value": 51.1,
                "projection": false
              },
              {
                "year": 2019,
                "value": 49.5,
                "projection": false
              },
              {
                "year": 2020,
                "value": 54.3,
                "projection": false
              },
              {
                "year": 2021,
                "value": 53.6,
                "projection": false
              },
              {
                "year": 2022,
                "value": 50.9,
                "projection": false
              },
              {
                "year": 2023,
                "value": 45.7,
                "projection": false
              },
              {
                "year": 2024,
                "value": 44.1,
                "projection": false
              },
              {
                "year": 2025,
                "value": 42.4,
                "projection": false
              },
              {
                "year": 2026,
                "value": 42.6,
                "projection": true
              },
              {
                "year": 2027,
                "value": 43,
                "projection": true
              },
              {
                "year": 2028,
                "value": 42.7,
                "projection": true
              },
              {
                "year": 2029,
                "value": 42.6,
                "projection": true
              },
              {
                "year": 2030,
                "value": 42.4,
                "projection": true
              },
              {
                "year": 2031,
                "value": 42.1,
                "projection": true
              }
            ]
          }
        }
      },
      "worldBank": {
        "indicators": {
          "reserveMonths": {
            "value": 6.1610204619856,
            "year": 2025,
            "unit": "months",
            "series": [
              {
                "value": 5.85006510166843,
                "year": 2015,
                "projection": false
              },
              {
                "value": 5.23860786769012,
                "year": 2016,
                "projection": false
              },
              {
                "value": 4.95930958872779,
                "year": 2017,
                "projection": false
              },
              {
                "value": 4.678012112008,
                "year": 2018,
                "projection": false
              },
              {
                "value": 5.17958382244662,
                "year": 2019,
                "projection": false
              },
              {
                "value": 6.1329155353194,
                "year": 2020,
                "projection": false
              },
              {
                "value": 5.25245751488642,
                "year": 2021,
                "projection": false
              },
              {
                "value": 4.83595341885135,
                "year": 2022,
                "projection": false
              },
              {
                "value": 6.17966306291645,
                "year": 2023,
                "projection": false
              },
              {
                "value": 6.16544065521643,
                "year": 2024,
                "projection": false
              },
              {
                "value": 6.1610204619856,
                "year": 2025,
                "projection": false
              }
            ]
          },
          "externalDebtGni": {
            "value": 62.2479849600107,
            "year": 2024,
            "unit": "percent",
            "series": [
              {
                "value": 76.6569667101022,
                "year": 2015,
                "projection": false
              },
              {
                "value": 69.7849323080997,
                "year": 2016,
                "projection": false
              },
              {
                "value": 71.731970143462,
                "year": 2017,
                "projection": false
              },
              {
                "value": 61.8350318338554,
                "year": 2018,
                "projection": false
              },
              {
                "value": 63.4151328334607,
                "year": 2019,
                "projection": false
              },
              {
                "value": 71.7394155616814,
                "year": 2020,
                "projection": false
              },
              {
                "value": 65.9213320272095,
                "year": 2021,
                "projection": false
              },
              {
                "value": 70.4741891397955,
                "year": 2022,
                "projection": false
              },
              {
                "value": 65.1823892579672,
                "year": 2023,
                "projection": false
              },
              {
                "value": 62.2479849600107,
                "year": 2024,
                "projection": false
              }
            ]
          },
          "debtServiceExports": {
            "value": 20.9665816770936,
            "year": 2024,
            "unit": "percent",
            "series": [
              {
                "value": 22.9941488790563,
                "year": 2015,
                "projection": false
              },
              {
                "value": 29.4410630011294,
                "year": 2016,
                "projection": false
              },
              {
                "value": 21.6268783700287,
                "year": 2017,
                "projection": false
              },
              {
                "value": 21.6807837007091,
                "year": 2018,
                "projection": false
              },
              {
                "value": 25.6451013385995,
                "year": 2019,
                "projection": false
              },
              {
                "value": 19.1446990872242,
                "year": 2020,
                "projection": false
              },
              {
                "value": 17.1175617909791,
                "year": 2021,
                "projection": false
              },
              {
                "value": 15.0028349988691,
                "year": 2022,
                "projection": false
              },
              {
                "value": 12.0354511131579,
                "year": 2023,
                "projection": false
              },
              {
                "value": 20.9665816770936,
                "year": 2024,
                "projection": false
              }
            ]
          }
        }
      },
      "trade": {
        "year": 2024,
        "exportsTotal": 34927700363,
        "importsTotal": 42506715123,
        "topExports": [
          {
            "name": "Insulated Wire",
            "value": 2238210535,
            "share": 6.4081245307836125
          },
          {
            "name": "Copper Ore",
            "value": 1660393803,
            "share": 4.753802242185136
          },
          {
            "name": "Refined Copper",
            "value": 1344133777,
            "share": 3.8483317339262415
          },
          {
            "name": "Rubber Tires",
            "value": 1079162619,
            "share": 3.089704182595401
          },
          {
            "name": "Motor vehicles; parts and accessories (8701 to 8705)",
            "value": 1011600914,
            "share": 2.89627116439541
          }
        ],
        "topImports": [
          {
            "name": "Cars",
            "value": 1392940127,
            "share": 3.2769884075240916
          },
          {
            "name": "Crude Petroleum",
            "value": 1350927374,
            "share": 3.1781504877308797
          },
          {
            "name": "Packaged Medicaments",
            "value": 1302994876,
            "share": 3.065385956617855
          },
          {
            "name": "Petroleum Gas",
            "value": 1122040908,
            "share": 2.6396791771681123
          },
          {
            "name": "Refined Petroleum",
            "value": 951058391,
            "share": 2.237430928849618
          }
        ],
        "exportPartners": [
          {
            "name": "Germany",
            "value": 5145461707,
            "share": 14.731750597731159
          },
          {
            "name": "China",
            "value": 2060223848,
            "share": 5.898538485466565
          },
          {
            "name": "Hungary",
            "value": 2046851147,
            "share": 5.860251679117968
          },
          {
            "name": "Bosnia and Herzegovina",
            "value": 1930227118,
            "share": 5.5263504265650125
          },
          {
            "name": "Italy",
            "value": 1807449899,
            "share": 5.174832239784924
          }
        ],
        "importPartners": [
          {
            "name": "Germany",
            "value": 5168737225,
            "share": 12.1598133613558
          },
          {
            "name": "China",
            "value": 4408157608,
            "share": 10.370496979699064
          },
          {
            "name": "Italy",
            "value": 3047669538,
            "share": 7.169854290506993
          },
          {
            "name": "Turkey",
            "value": 2683332458,
            "share": 6.312726001610209
          },
          {
            "name": "Hungary",
            "value": 2403233848,
            "share": 5.653774564903116
          }
        ]
      }
    },
    "turkey": {
      "imf": {
        "indicators": {
          "realGdpGrowth": {
            "value": 3.4,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1980,
                "value": -0.8,
                "projection": false
              },
              {
                "year": 1981,
                "value": 4.4,
                "projection": false
              },
              {
                "year": 1982,
                "value": 3.4,
                "projection": false
              },
              {
                "year": 1983,
                "value": 4.8,
                "projection": false
              },
              {
                "year": 1984,
                "value": 6.8,
                "projection": false
              },
              {
                "year": 1985,
                "value": 4.3,
                "projection": false
              },
              {
                "year": 1986,
                "value": 6.9,
                "projection": false
              },
              {
                "year": 1987,
                "value": 10,
                "projection": false
              },
              {
                "year": 1988,
                "value": 2.1,
                "projection": false
              },
              {
                "year": 1989,
                "value": 0.3,
                "projection": false
              },
              {
                "year": 1990,
                "value": 9.3,
                "projection": false
              },
              {
                "year": 1991,
                "value": 0.9,
                "projection": false
              },
              {
                "year": 1992,
                "value": 6,
                "projection": false
              },
              {
                "year": 1993,
                "value": 8,
                "projection": false
              },
              {
                "year": 1994,
                "value": -5.5,
                "projection": false
              },
              {
                "year": 1995,
                "value": 7.2,
                "projection": false
              },
              {
                "year": 1996,
                "value": 7,
                "projection": false
              },
              {
                "year": 1997,
                "value": 7.5,
                "projection": false
              },
              {
                "year": 1998,
                "value": 3.1,
                "projection": false
              },
              {
                "year": 1999,
                "value": -3.1,
                "projection": false
              },
              {
                "year": 2000,
                "value": 7,
                "projection": false
              },
              {
                "year": 2001,
                "value": -5.5,
                "projection": false
              },
              {
                "year": 2002,
                "value": 6.4,
                "projection": false
              },
              {
                "year": 2003,
                "value": 5.8,
                "projection": false
              },
              {
                "year": 2004,
                "value": 9.9,
                "projection": false
              },
              {
                "year": 2005,
                "value": 9.1,
                "projection": false
              },
              {
                "year": 2006,
                "value": 7.1,
                "projection": false
              },
              {
                "year": 2007,
                "value": 5.1,
                "projection": false
              },
              {
                "year": 2008,
                "value": 0.9,
                "projection": false
              },
              {
                "year": 2009,
                "value": -4.9,
                "projection": false
              },
              {
                "year": 2010,
                "value": 8.5,
                "projection": false
              },
              {
                "year": 2011,
                "value": 11,
                "projection": false
              },
              {
                "year": 2012,
                "value": 4.8,
                "projection": false
              },
              {
                "year": 2013,
                "value": 8.5,
                "projection": false
              },
              {
                "year": 2014,
                "value": 4.6,
                "projection": false
              },
              {
                "year": 2015,
                "value": 5.8,
                "projection": false
              },
              {
                "year": 2016,
                "value": 3.3,
                "projection": false
              },
              {
                "year": 2017,
                "value": 7.8,
                "projection": false
              },
              {
                "year": 2018,
                "value": 3.5,
                "projection": false
              },
              {
                "year": 2019,
                "value": 1.3,
                "projection": false
              },
              {
                "year": 2020,
                "value": 1.8,
                "projection": false
              },
              {
                "year": 2021,
                "value": 11.8,
                "projection": false
              },
              {
                "year": 2022,
                "value": 5.4,
                "projection": false
              },
              {
                "year": 2023,
                "value": 5,
                "projection": false
              },
              {
                "year": 2024,
                "value": 3.3,
                "projection": false
              },
              {
                "year": 2025,
                "value": 3.6,
                "projection": false
              },
              {
                "year": 2026,
                "value": 3.4,
                "projection": true
              },
              {
                "year": 2027,
                "value": 3.5,
                "projection": true
              },
              {
                "year": 2028,
                "value": 3.8,
                "projection": true
              },
              {
                "year": 2029,
                "value": 4,
                "projection": true
              },
              {
                "year": 2030,
                "value": 4,
                "projection": true
              },
              {
                "year": 2031,
                "value": 4,
                "projection": true
              }
            ]
          },
          "inflation": {
            "value": 28.6,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1980,
                "value": 110.6,
                "projection": false
              },
              {
                "year": 1981,
                "value": 36.4,
                "projection": false
              },
              {
                "year": 1982,
                "value": 31.1,
                "projection": false
              },
              {
                "year": 1983,
                "value": 31.3,
                "projection": false
              },
              {
                "year": 1984,
                "value": 48.4,
                "projection": false
              },
              {
                "year": 1985,
                "value": 44.5,
                "projection": false
              },
              {
                "year": 1986,
                "value": 34.6,
                "projection": false
              },
              {
                "year": 1987,
                "value": 39,
                "projection": false
              },
              {
                "year": 1988,
                "value": 73.2,
                "projection": false
              },
              {
                "year": 1989,
                "value": 63.2,
                "projection": false
              },
              {
                "year": 1990,
                "value": 60.4,
                "projection": false
              },
              {
                "year": 1991,
                "value": 66,
                "projection": false
              },
              {
                "year": 1992,
                "value": 70.1,
                "projection": false
              },
              {
                "year": 1993,
                "value": 66.1,
                "projection": false
              },
              {
                "year": 1994,
                "value": 104.5,
                "projection": false
              },
              {
                "year": 1995,
                "value": 89.6,
                "projection": false
              },
              {
                "year": 1996,
                "value": 80.2,
                "projection": false
              },
              {
                "year": 1997,
                "value": 85.7,
                "projection": false
              },
              {
                "year": 1998,
                "value": 84.7,
                "projection": false
              },
              {
                "year": 1999,
                "value": 64.9,
                "projection": false
              },
              {
                "year": 2000,
                "value": 55,
                "projection": false
              },
              {
                "year": 2001,
                "value": 54.2,
                "projection": false
              },
              {
                "year": 2002,
                "value": 45.1,
                "projection": false
              },
              {
                "year": 2003,
                "value": 25.3,
                "projection": false
              },
              {
                "year": 2004,
                "value": 8.6,
                "projection": false
              },
              {
                "year": 2005,
                "value": 8.1,
                "projection": false
              },
              {
                "year": 2006,
                "value": 9.6,
                "projection": false
              },
              {
                "year": 2007,
                "value": 8.8,
                "projection": false
              },
              {
                "year": 2008,
                "value": 10.4,
                "projection": false
              },
              {
                "year": 2009,
                "value": 6.2,
                "projection": false
              },
              {
                "year": 2010,
                "value": 8.6,
                "projection": false
              },
              {
                "year": 2011,
                "value": 6.5,
                "projection": false
              },
              {
                "year": 2012,
                "value": 8.9,
                "projection": false
              },
              {
                "year": 2013,
                "value": 7.5,
                "projection": false
              },
              {
                "year": 2014,
                "value": 8.9,
                "projection": false
              },
              {
                "year": 2015,
                "value": 7.7,
                "projection": false
              },
              {
                "year": 2016,
                "value": 7.8,
                "projection": false
              },
              {
                "year": 2017,
                "value": 11.2,
                "projection": false
              },
              {
                "year": 2018,
                "value": 16.3,
                "projection": false
              },
              {
                "year": 2019,
                "value": 15.2,
                "projection": false
              },
              {
                "year": 2020,
                "value": 12.3,
                "projection": false
              },
              {
                "year": 2021,
                "value": 19.6,
                "projection": false
              },
              {
                "year": 2022,
                "value": 72.3,
                "projection": false
              },
              {
                "year": 2023,
                "value": 53.9,
                "projection": false
              },
              {
                "year": 2024,
                "value": 58.5,
                "projection": false
              },
              {
                "year": 2025,
                "value": 34.9,
                "projection": false
              },
              {
                "year": 2026,
                "value": 28.6,
                "projection": true
              },
              {
                "year": 2027,
                "value": 21.4,
                "projection": true
              },
              {
                "year": 2028,
                "value": 17,
                "projection": true
              },
              {
                "year": 2029,
                "value": 15,
                "projection": true
              },
              {
                "year": 2030,
                "value": 15,
                "projection": true
              },
              {
                "year": 2031,
                "value": 15,
                "projection": true
              }
            ]
          },
          "currentAccount": {
            "value": -2.8,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1980,
                "value": -3.2,
                "projection": false
              },
              {
                "year": 1981,
                "value": -1.9,
                "projection": false
              },
              {
                "year": 1982,
                "value": -1.1,
                "projection": false
              },
              {
                "year": 1983,
                "value": -2.3,
                "projection": false
              },
              {
                "year": 1984,
                "value": -1.7,
                "projection": false
              },
              {
                "year": 1985,
                "value": -1.1,
                "projection": false
              },
              {
                "year": 1986,
                "value": -1.4,
                "projection": false
              },
              {
                "year": 1987,
                "value": -0.7,
                "projection": false
              },
              {
                "year": 1988,
                "value": 1.3,
                "projection": false
              },
              {
                "year": 1989,
                "value": 0.7,
                "projection": false
              },
              {
                "year": 1990,
                "value": -1.3,
                "projection": false
              },
              {
                "year": 1991,
                "value": 0.4,
                "projection": false
              },
              {
                "year": 1992,
                "value": -0.4,
                "projection": false
              },
              {
                "year": 1993,
                "value": -2.6,
                "projection": false
              },
              {
                "year": 1994,
                "value": 1.5,
                "projection": false
              },
              {
                "year": 1995,
                "value": -1,
                "projection": false
              },
              {
                "year": 1996,
                "value": -1,
                "projection": false
              },
              {
                "year": 1997,
                "value": -1,
                "projection": false
              },
              {
                "year": 1998,
                "value": 0.7,
                "projection": false
              },
              {
                "year": 1999,
                "value": -0.4,
                "projection": false
              },
              {
                "year": 2000,
                "value": -3.6,
                "projection": false
              },
              {
                "year": 2001,
                "value": 1.9,
                "projection": false
              },
              {
                "year": 2002,
                "value": -0.3,
                "projection": false
              },
              {
                "year": 2003,
                "value": -2.4,
                "projection": false
              },
              {
                "year": 2004,
                "value": -3.5,
                "projection": false
              },
              {
                "year": 2005,
                "value": -4.1,
                "projection": false
              },
              {
                "year": 2006,
                "value": -5.6,
                "projection": false
              },
              {
                "year": 2007,
                "value": -5.4,
                "projection": false
              },
              {
                "year": 2008,
                "value": -5,
                "projection": false
              },
              {
                "year": 2009,
                "value": -1.7,
                "projection": false
              },
              {
                "year": 2010,
                "value": -5.7,
                "projection": false
              },
              {
                "year": 2011,
                "value": -8.8,
                "projection": false
              },
              {
                "year": 2012,
                "value": -4.7,
                "projection": false
              },
              {
                "year": 2013,
                "value": -5.1,
                "projection": false
              },
              {
                "year": 2014,
                "value": -3.4,
                "projection": false
              },
              {
                "year": 2015,
                "value": -2.5,
                "projection": false
              },
              {
                "year": 2016,
                "value": -2.5,
                "projection": false
              },
              {
                "year": 2017,
                "value": -4.1,
                "projection": false
              },
              {
                "year": 2018,
                "value": -1.8,
                "projection": false
              },
              {
                "year": 2019,
                "value": 1.9,
                "projection": false
              },
              {
                "year": 2020,
                "value": -4.2,
                "projection": false
              },
              {
                "year": 2021,
                "value": -0.9,
                "projection": false
              },
              {
                "year": 2022,
                "value": -5,
                "projection": false
              },
              {
                "year": 2023,
                "value": -3.6,
                "projection": false
              },
              {
                "year": 2024,
                "value": -1,
                "projection": false
              },
              {
                "year": 2025,
                "value": -1.9,
                "projection": false
              },
              {
                "year": 2026,
                "value": -2.8,
                "projection": true
              },
              {
                "year": 2027,
                "value": -2.5,
                "projection": true
              },
              {
                "year": 2028,
                "value": -2.2,
                "projection": true
              },
              {
                "year": 2029,
                "value": -1.8,
                "projection": true
              },
              {
                "year": 2030,
                "value": -1.4,
                "projection": true
              },
              {
                "year": 2031,
                "value": -1.2,
                "projection": true
              }
            ]
          },
          "fiscalBalance": {
            "value": -3.4,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 2000,
                "value": -8.4,
                "projection": false
              },
              {
                "year": 2001,
                "value": -11.6,
                "projection": false
              },
              {
                "year": 2002,
                "value": -11.3,
                "projection": false
              },
              {
                "year": 2003,
                "value": -7.6,
                "projection": false
              },
              {
                "year": 2004,
                "value": -4.1,
                "projection": false
              },
              {
                "year": 2005,
                "value": -0.7,
                "projection": false
              },
              {
                "year": 2006,
                "value": -0.2,
                "projection": false
              },
              {
                "year": 2007,
                "value": -1.4,
                "projection": false
              },
              {
                "year": 2008,
                "value": -2.1,
                "projection": false
              },
              {
                "year": 2009,
                "value": -5.1,
                "projection": false
              },
              {
                "year": 2010,
                "value": -3,
                "projection": false
              },
              {
                "year": 2011,
                "value": -0.4,
                "projection": false
              },
              {
                "year": 2012,
                "value": -1.8,
                "projection": false
              },
              {
                "year": 2013,
                "value": -1.2,
                "projection": false
              },
              {
                "year": 2014,
                "value": -1,
                "projection": false
              },
              {
                "year": 2015,
                "value": -0.5,
                "projection": false
              },
              {
                "year": 2016,
                "value": -1.7,
                "projection": false
              },
              {
                "year": 2017,
                "value": -1.9,
                "projection": false
              },
              {
                "year": 2018,
                "value": -3.1,
                "projection": false
              },
              {
                "year": 2019,
                "value": -4.7,
                "projection": false
              },
              {
                "year": 2020,
                "value": -4.6,
                "projection": false
              },
              {
                "year": 2021,
                "value": -3,
                "projection": false
              },
              {
                "year": 2022,
                "value": -1.1,
                "projection": false
              },
              {
                "year": 2023,
                "value": -5.2,
                "projection": false
              },
              {
                "year": 2024,
                "value": -4.5,
                "projection": false
              },
              {
                "year": 2025,
                "value": -2.8,
                "projection": false
              },
              {
                "year": 2026,
                "value": -3.4,
                "projection": true
              },
              {
                "year": 2027,
                "value": -3.7,
                "projection": true
              },
              {
                "year": 2028,
                "value": -3.5,
                "projection": true
              },
              {
                "year": 2029,
                "value": -2.9,
                "projection": true
              },
              {
                "year": 2030,
                "value": -2.8,
                "projection": true
              },
              {
                "year": 2031,
                "value": -2.7,
                "projection": true
              }
            ]
          },
          "governmentDebt": {
            "value": 25.5,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 2000,
                "value": 51.2,
                "projection": false
              },
              {
                "year": 2001,
                "value": 75.6,
                "projection": false
              },
              {
                "year": 2002,
                "value": 71.2,
                "projection": false
              },
              {
                "year": 2003,
                "value": 63.6,
                "projection": false
              },
              {
                "year": 2004,
                "value": 57,
                "projection": false
              },
              {
                "year": 2005,
                "value": 50.2,
                "projection": false
              },
              {
                "year": 2006,
                "value": 44.2,
                "projection": false
              },
              {
                "year": 2007,
                "value": 37.1,
                "projection": false
              },
              {
                "year": 2008,
                "value": 37,
                "projection": false
              },
              {
                "year": 2009,
                "value": 42.4,
                "projection": false
              },
              {
                "year": 2010,
                "value": 38.6,
                "projection": false
              },
              {
                "year": 2011,
                "value": 34.8,
                "projection": false
              },
              {
                "year": 2012,
                "value": 30.8,
                "projection": false
              },
              {
                "year": 2013,
                "value": 29.5,
                "projection": false
              },
              {
                "year": 2014,
                "value": 27.4,
                "projection": false
              },
              {
                "year": 2015,
                "value": 26.5,
                "projection": false
              },
              {
                "year": 2016,
                "value": 27,
                "projection": false
              },
              {
                "year": 2017,
                "value": 26.9,
                "projection": false
              },
              {
                "year": 2018,
                "value": 28.8,
                "projection": false
              },
              {
                "year": 2019,
                "value": 31.2,
                "projection": false
              },
              {
                "year": 2020,
                "value": 38.3,
                "projection": false
              },
              {
                "year": 2021,
                "value": 38.9,
                "projection": false
              },
              {
                "year": 2022,
                "value": 29.4,
                "projection": false
              },
              {
                "year": 2023,
                "value": 28.2,
                "projection": false
              },
              {
                "year": 2024,
                "value": 23.6,
                "projection": false
              },
              {
                "year": 2025,
                "value": 23.5,
                "projection": false
              },
              {
                "year": 2026,
                "value": 25.5,
                "projection": true
              },
              {
                "year": 2027,
                "value": 26.9,
                "projection": true
              },
              {
                "year": 2028,
                "value": 27.3,
                "projection": true
              },
              {
                "year": 2029,
                "value": 27.4,
                "projection": true
              },
              {
                "year": 2030,
                "value": 28,
                "projection": true
              },
              {
                "year": 2031,
                "value": 27.5,
                "projection": true
              }
            ]
          }
        }
      },
      "worldBank": {
        "indicators": {
          "reserveMonths": {
            "value": 4.72961263910876,
            "year": 2024,
            "unit": "months",
            "series": [
              {
                "value": 5.46401299517088,
                "year": 2015,
                "projection": false
              },
              {
                "value": 5.43169973687983,
                "year": 2016,
                "projection": false
              },
              {
                "value": 4.7879486495226,
                "year": 2017,
                "projection": false
              },
              {
                "value": 4.21759333209898,
                "year": 2018,
                "projection": false
              },
              {
                "value": 5.18429649280588,
                "year": 2019,
                "projection": false
              },
              {
                "value": 4.62292551551256,
                "year": 2020,
                "projection": false
              },
              {
                "value": 4.45898866581647,
                "year": 2021,
                "projection": false
              },
              {
                "value": 3.88032643940638,
                "year": 2022,
                "projection": false
              },
              {
                "value": 4.15773246137926,
                "year": 2023,
                "projection": false
              },
              {
                "value": 4.72961263910876,
                "year": 2024,
                "projection": false
              }
            ]
          },
          "externalDebtGni": {
            "value": 39.3880494718611,
            "year": 2024,
            "unit": "percent",
            "series": [
              {
                "value": 46.7405303729401,
                "year": 2015,
                "projection": false
              },
              {
                "value": 46.3614777541171,
                "year": 2016,
                "projection": false
              },
              {
                "value": 52.6882928024745,
                "year": 2017,
                "projection": false
              },
              {
                "value": 55.4453574540502,
                "year": 2018,
                "projection": false
              },
              {
                "value": 55.3071524639806,
                "year": 2019,
                "projection": false
              },
              {
                "value": 60.3150906136416,
                "year": 2020,
                "projection": false
              },
              {
                "value": 53.7425891882514,
                "year": 2021,
                "projection": false
              },
              {
                "value": 50.758322367613,
                "year": 2022,
                "projection": false
              },
              {
                "value": 45.157151097837,
                "year": 2023,
                "projection": false
              },
              {
                "value": 39.3880494718611,
                "year": 2024,
                "projection": false
              }
            ]
          },
          "debtServiceExports": {
            "value": 23.4318472180701,
            "year": 2024,
            "unit": "percent",
            "series": [
              {
                "value": 25.3789734982834,
                "year": 2015,
                "projection": false
              },
              {
                "value": 36.4254391256231,
                "year": 2016,
                "projection": false
              },
              {
                "value": 37.362997807429,
                "year": 2017,
                "projection": false
              },
              {
                "value": 33.4794771797331,
                "year": 2018,
                "projection": false
              },
              {
                "value": 33.2432164759356,
                "year": 2019,
                "projection": false
              },
              {
                "value": 40.7367712535302,
                "year": 2020,
                "projection": false
              },
              {
                "value": 25.3396609190239,
                "year": 2021,
                "projection": false
              },
              {
                "value": 19.6812294560508,
                "year": 2022,
                "projection": false
              },
              {
                "value": 20.909547158823,
                "year": 2023,
                "projection": false
              },
              {
                "value": 23.4318472180701,
                "year": 2024,
                "projection": false
              }
            ]
          }
        }
      }
    },
    "egypt": {
      "imf": {
        "indicators": {
          "realGdpGrowth": {
            "value": 4.2,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1980,
                "value": 3.4,
                "projection": false
              },
              {
                "year": 1981,
                "value": 2.2,
                "projection": false
              },
              {
                "year": 1982,
                "value": 7.3,
                "projection": false
              },
              {
                "year": 1983,
                "value": 8.9,
                "projection": false
              },
              {
                "year": 1984,
                "value": 8,
                "projection": false
              },
              {
                "year": 1985,
                "value": 7.4,
                "projection": false
              },
              {
                "year": 1986,
                "value": 4.8,
                "projection": false
              },
              {
                "year": 1987,
                "value": 4.3,
                "projection": false
              },
              {
                "year": 1988,
                "value": 4,
                "projection": false
              },
              {
                "year": 1989,
                "value": 3,
                "projection": false
              },
              {
                "year": 1990,
                "value": 2.3,
                "projection": false
              },
              {
                "year": 1991,
                "value": 2.1,
                "projection": false
              },
              {
                "year": 1992,
                "value": 0.3,
                "projection": false
              },
              {
                "year": 1993,
                "value": 2.9,
                "projection": false
              },
              {
                "year": 1994,
                "value": 4.2,
                "projection": false
              },
              {
                "year": 1995,
                "value": 4.5,
                "projection": false
              },
              {
                "year": 1996,
                "value": 4.9,
                "projection": false
              },
              {
                "year": 1997,
                "value": 5.9,
                "projection": false
              },
              {
                "year": 1998,
                "value": 7.5,
                "projection": false
              },
              {
                "year": 1999,
                "value": 6.1,
                "projection": false
              },
              {
                "year": 2000,
                "value": 5.4,
                "projection": false
              },
              {
                "year": 2001,
                "value": 3.5,
                "projection": false
              },
              {
                "year": 2002,
                "value": 3.2,
                "projection": false
              },
              {
                "year": 2003,
                "value": 3.2,
                "projection": false
              },
              {
                "year": 2004,
                "value": 4.1,
                "projection": false
              },
              {
                "year": 2005,
                "value": 4.5,
                "projection": false
              },
              {
                "year": 2006,
                "value": 6.8,
                "projection": false
              },
              {
                "year": 2007,
                "value": 7.1,
                "projection": false
              },
              {
                "year": 2008,
                "value": 7.2,
                "projection": false
              },
              {
                "year": 2009,
                "value": 4.7,
                "projection": false
              },
              {
                "year": 2010,
                "value": 5.1,
                "projection": false
              },
              {
                "year": 2011,
                "value": 1.8,
                "projection": false
              },
              {
                "year": 2012,
                "value": 2.2,
                "projection": false
              },
              {
                "year": 2013,
                "value": 3.3,
                "projection": false
              },
              {
                "year": 2014,
                "value": 2.9,
                "projection": false
              },
              {
                "year": 2015,
                "value": 4.4,
                "projection": false
              },
              {
                "year": 2016,
                "value": 4.3,
                "projection": false
              },
              {
                "year": 2017,
                "value": 4.2,
                "projection": false
              },
              {
                "year": 2018,
                "value": 5.3,
                "projection": false
              },
              {
                "year": 2019,
                "value": 5.5,
                "projection": false
              },
              {
                "year": 2020,
                "value": 3.6,
                "projection": false
              },
              {
                "year": 2021,
                "value": 3.3,
                "projection": false
              },
              {
                "year": 2022,
                "value": 6.7,
                "projection": false
              },
              {
                "year": 2023,
                "value": 3.8,
                "projection": false
              },
              {
                "year": 2024,
                "value": 2.4,
                "projection": false
              },
              {
                "year": 2025,
                "value": 4.4,
                "projection": false
              },
              {
                "year": 2026,
                "value": 4.2,
                "projection": true
              },
              {
                "year": 2027,
                "value": 4.8,
                "projection": true
              },
              {
                "year": 2028,
                "value": 5.5,
                "projection": true
              },
              {
                "year": 2029,
                "value": 5.2,
                "projection": true
              },
              {
                "year": 2030,
                "value": 4.8,
                "projection": true
              },
              {
                "year": 2031,
                "value": 4.8,
                "projection": true
              }
            ]
          },
          "inflation": {
            "value": 13.2,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1980,
                "value": 20.5,
                "projection": false
              },
              {
                "year": 1981,
                "value": 10.4,
                "projection": false
              },
              {
                "year": 1982,
                "value": 14.9,
                "projection": false
              },
              {
                "year": 1983,
                "value": 16,
                "projection": false
              },
              {
                "year": 1984,
                "value": 17.1,
                "projection": false
              },
              {
                "year": 1985,
                "value": 12.1,
                "projection": false
              },
              {
                "year": 1986,
                "value": 23.9,
                "projection": false
              },
              {
                "year": 1987,
                "value": 25.2,
                "projection": false
              },
              {
                "year": 1988,
                "value": 15.2,
                "projection": false
              },
              {
                "year": 1989,
                "value": 20.1,
                "projection": false
              },
              {
                "year": 1990,
                "value": 21.2,
                "projection": false
              },
              {
                "year": 1991,
                "value": 14.7,
                "projection": false
              },
              {
                "year": 1992,
                "value": 21.1,
                "projection": false
              },
              {
                "year": 1993,
                "value": 11,
                "projection": false
              },
              {
                "year": 1994,
                "value": 9,
                "projection": false
              },
              {
                "year": 1995,
                "value": 9.4,
                "projection": false
              },
              {
                "year": 1996,
                "value": 7.1,
                "projection": false
              },
              {
                "year": 1997,
                "value": 6.2,
                "projection": false
              },
              {
                "year": 1998,
                "value": 5,
                "projection": false
              },
              {
                "year": 1999,
                "value": 3.7,
                "projection": false
              },
              {
                "year": 2000,
                "value": 2.8,
                "projection": false
              },
              {
                "year": 2001,
                "value": 2.4,
                "projection": false
              },
              {
                "year": 2002,
                "value": 2.3,
                "projection": false
              },
              {
                "year": 2003,
                "value": 3.4,
                "projection": false
              },
              {
                "year": 2004,
                "value": 8.2,
                "projection": false
              },
              {
                "year": 2005,
                "value": 8.7,
                "projection": false
              },
              {
                "year": 2006,
                "value": 4.3,
                "projection": false
              },
              {
                "year": 2007,
                "value": 10.9,
                "projection": false
              },
              {
                "year": 2008,
                "value": 11.7,
                "projection": false
              },
              {
                "year": 2009,
                "value": 16.2,
                "projection": false
              },
              {
                "year": 2010,
                "value": 11.7,
                "projection": false
              },
              {
                "year": 2011,
                "value": 11.1,
                "projection": false
              },
              {
                "year": 2012,
                "value": 8.7,
                "projection": false
              },
              {
                "year": 2013,
                "value": 6.9,
                "projection": false
              },
              {
                "year": 2014,
                "value": 10.1,
                "projection": false
              },
              {
                "year": 2015,
                "value": 11,
                "projection": false
              },
              {
                "year": 2016,
                "value": 10.2,
                "projection": false
              },
              {
                "year": 2017,
                "value": 23.5,
                "projection": false
              },
              {
                "year": 2018,
                "value": 20.9,
                "projection": false
              },
              {
                "year": 2019,
                "value": 13.9,
                "projection": false
              },
              {
                "year": 2020,
                "value": 5.7,
                "projection": false
              },
              {
                "year": 2021,
                "value": 4.5,
                "projection": false
              },
              {
                "year": 2022,
                "value": 8.5,
                "projection": false
              },
              {
                "year": 2023,
                "value": 24.4,
                "projection": false
              },
              {
                "year": 2024,
                "value": 33.3,
                "projection": false
              },
              {
                "year": 2025,
                "value": 20.4,
                "projection": false
              },
              {
                "year": 2026,
                "value": 13.2,
                "projection": true
              },
              {
                "year": 2027,
                "value": 11.1,
                "projection": true
              },
              {
                "year": 2028,
                "value": 8.1,
                "projection": true
              },
              {
                "year": 2029,
                "value": 6.2,
                "projection": true
              },
              {
                "year": 2030,
                "value": 5.4,
                "projection": true
              },
              {
                "year": 2031,
                "value": 5.3,
                "projection": true
              }
            ]
          },
          "currentAccount": {
            "value": -4.2,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1980,
                "value": -0.8,
                "projection": false
              },
              {
                "year": 1981,
                "value": -4.3,
                "projection": false
              },
              {
                "year": 1982,
                "value": -6.8,
                "projection": false
              },
              {
                "year": 1983,
                "value": -4,
                "projection": false
              },
              {
                "year": 1984,
                "value": -8.1,
                "projection": false
              },
              {
                "year": 1985,
                "value": -4.6,
                "projection": false
              },
              {
                "year": 1986,
                "value": -2.8,
                "projection": false
              },
              {
                "year": 1987,
                "value": -1.3,
                "projection": false
              },
              {
                "year": 1988,
                "value": -2.1,
                "projection": false
              },
              {
                "year": 1989,
                "value": -2.2,
                "projection": false
              },
              {
                "year": 1990,
                "value": -2.7,
                "projection": false
              },
              {
                "year": 1991,
                "value": 3.4,
                "projection": false
              },
              {
                "year": 1992,
                "value": 8.3,
                "projection": false
              },
              {
                "year": 1993,
                "value": 4.4,
                "projection": false
              },
              {
                "year": 1994,
                "value": 0.4,
                "projection": false
              },
              {
                "year": 1995,
                "value": 0.6,
                "projection": false
              },
              {
                "year": 1996,
                "value": -0.3,
                "projection": false
              },
              {
                "year": 1997,
                "value": 0.1,
                "projection": false
              },
              {
                "year": 1998,
                "value": -2.8,
                "projection": false
              },
              {
                "year": 1999,
                "value": -1.8,
                "projection": false
              },
              {
                "year": 2000,
                "value": -1.1,
                "projection": false
              },
              {
                "year": 2001,
                "value": 0,
                "projection": false
              },
              {
                "year": 2002,
                "value": 0.7,
                "projection": false
              },
              {
                "year": 2003,
                "value": 2.3,
                "projection": false
              },
              {
                "year": 2004,
                "value": 4.1,
                "projection": false
              },
              {
                "year": 2005,
                "value": 3.1,
                "projection": false
              },
              {
                "year": 2006,
                "value": 1.6,
                "projection": false
              },
              {
                "year": 2007,
                "value": 1.7,
                "projection": false
              },
              {
                "year": 2008,
                "value": 0.5,
                "projection": false
              },
              {
                "year": 2009,
                "value": -2.2,
                "projection": false
              },
              {
                "year": 2010,
                "value": -1.9,
                "projection": false
              },
              {
                "year": 2011,
                "value": -2.5,
                "projection": false
              },
              {
                "year": 2012,
                "value": -3.4,
                "projection": false
              },
              {
                "year": 2013,
                "value": -2.1,
                "projection": false
              },
              {
                "year": 2014,
                "value": -0.9,
                "projection": false
              },
              {
                "year": 2015,
                "value": -3.5,
                "projection": false
              },
              {
                "year": 2016,
                "value": -5.6,
                "projection": false
              },
              {
                "year": 2017,
                "value": -5.8,
                "projection": false
              },
              {
                "year": 2018,
                "value": -2.3,
                "projection": false
              },
              {
                "year": 2019,
                "value": -3.4,
                "projection": false
              },
              {
                "year": 2020,
                "value": -2.9,
                "projection": false
              },
              {
                "year": 2021,
                "value": -4.4,
                "projection": false
              },
              {
                "year": 2022,
                "value": -3.5,
                "projection": false
              },
              {
                "year": 2023,
                "value": -1.2,
                "projection": false
              },
              {
                "year": 2024,
                "value": -5.4,
                "projection": false
              },
              {
                "year": 2025,
                "value": -4.2,
                "projection": false
              },
              {
                "year": 2026,
                "value": -4.2,
                "projection": true
              },
              {
                "year": 2027,
                "value": -4.6,
                "projection": true
              },
              {
                "year": 2028,
                "value": -3.9,
                "projection": true
              },
              {
                "year": 2029,
                "value": -3.5,
                "projection": true
              },
              {
                "year": 2030,
                "value": -3.2,
                "projection": true
              },
              {
                "year": 2031,
                "value": -2.7,
                "projection": true
              }
            ]
          },
          "fiscalBalance": {
            "value": -12.1,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1999,
                "value": 2.1,
                "projection": false
              },
              {
                "year": 2000,
                "value": 1.3,
                "projection": false
              },
              {
                "year": 2001,
                "value": -1.1,
                "projection": false
              },
              {
                "year": 2002,
                "value": -6.8,
                "projection": false
              },
              {
                "year": 2003,
                "value": -5.7,
                "projection": false
              },
              {
                "year": 2004,
                "value": -5.8,
                "projection": false
              },
              {
                "year": 2005,
                "value": -6.7,
                "projection": false
              },
              {
                "year": 2006,
                "value": -7.4,
                "projection": false
              },
              {
                "year": 2007,
                "value": -4.9,
                "projection": false
              },
              {
                "year": 2008,
                "value": -6,
                "projection": false
              },
              {
                "year": 2009,
                "value": -6.2,
                "projection": false
              },
              {
                "year": 2010,
                "value": -7.4,
                "projection": false
              },
              {
                "year": 2011,
                "value": -9.6,
                "projection": false
              },
              {
                "year": 2012,
                "value": -9.5,
                "projection": false
              },
              {
                "year": 2013,
                "value": -12.3,
                "projection": false
              },
              {
                "year": 2014,
                "value": -10.7,
                "projection": false
              },
              {
                "year": 2015,
                "value": -10.4,
                "projection": false
              },
              {
                "year": 2016,
                "value": -11.8,
                "projection": false
              },
              {
                "year": 2017,
                "value": -9.9,
                "projection": false
              },
              {
                "year": 2018,
                "value": -9,
                "projection": false
              },
              {
                "year": 2019,
                "value": -7.6,
                "projection": false
              },
              {
                "year": 2020,
                "value": -7.5,
                "projection": false
              },
              {
                "year": 2021,
                "value": -7,
                "projection": false
              },
              {
                "year": 2022,
                "value": -5.7,
                "projection": false
              },
              {
                "year": 2023,
                "value": -5.8,
                "projection": false
              },
              {
                "year": 2024,
                "value": -7.1,
                "projection": false
              },
              {
                "year": 2025,
                "value": -6.6,
                "projection": false
              },
              {
                "year": 2026,
                "value": -12.1,
                "projection": true
              },
              {
                "year": 2027,
                "value": -8.9,
                "projection": true
              },
              {
                "year": 2028,
                "value": -7,
                "projection": true
              },
              {
                "year": 2029,
                "value": -4.4,
                "projection": true
              },
              {
                "year": 2030,
                "value": -3.6,
                "projection": true
              },
              {
                "year": 2031,
                "value": -3.1,
                "projection": true
              }
            ]
          },
          "governmentDebt": {
            "value": 87,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1998,
                "value": 73.8,
                "projection": false
              },
              {
                "year": 1999,
                "value": 72.4,
                "projection": false
              },
              {
                "year": 2000,
                "value": 71.7,
                "projection": false
              },
              {
                "year": 2001,
                "value": 79.1,
                "projection": false
              },
              {
                "year": 2002,
                "value": 85.8,
                "projection": false
              },
              {
                "year": 2003,
                "value": 97.1,
                "projection": false
              },
              {
                "year": 2004,
                "value": 96.5,
                "projection": false
              },
              {
                "year": 2005,
                "value": 98.3,
                "projection": false
              },
              {
                "year": 2006,
                "value": 85.9,
                "projection": false
              },
              {
                "year": 2007,
                "value": 76.3,
                "projection": false
              },
              {
                "year": 2008,
                "value": 66.8,
                "projection": false
              },
              {
                "year": 2009,
                "value": 69.5,
                "projection": false
              },
              {
                "year": 2010,
                "value": 69.6,
                "projection": false
              },
              {
                "year": 2011,
                "value": 72.8,
                "projection": false
              },
              {
                "year": 2012,
                "value": 69.9,
                "projection": false
              },
              {
                "year": 2013,
                "value": 79.8,
                "projection": false
              },
              {
                "year": 2014,
                "value": 80.9,
                "projection": false
              },
              {
                "year": 2015,
                "value": 83.8,
                "projection": false
              },
              {
                "year": 2016,
                "value": 91.6,
                "projection": false
              },
              {
                "year": 2017,
                "value": 97.8,
                "projection": false
              },
              {
                "year": 2018,
                "value": 87.9,
                "projection": false
              },
              {
                "year": 2019,
                "value": 80.1,
                "projection": false
              },
              {
                "year": 2020,
                "value": 86.2,
                "projection": false
              },
              {
                "year": 2021,
                "value": 89.9,
                "projection": false
              },
              {
                "year": 2022,
                "value": 88.5,
                "projection": false
              },
              {
                "year": 2023,
                "value": 95.9,
                "projection": false
              },
              {
                "year": 2024,
                "value": 90.9,
                "projection": false
              },
              {
                "year": 2025,
                "value": 86.8,
                "projection": false
              },
              {
                "year": 2026,
                "value": 87,
                "projection": true
              },
              {
                "year": 2027,
                "value": 84.9,
                "projection": true
              },
              {
                "year": 2028,
                "value": 82,
                "projection": true
              },
              {
                "year": 2029,
                "value": 78,
                "projection": true
              },
              {
                "year": 2030,
                "value": 74.5,
                "projection": true
              },
              {
                "year": 2031,
                "value": 70.9,
                "projection": true
              }
            ]
          }
        }
      },
      "worldBank": {
        "indicators": {
          "reserveMonths": {
            "value": 4.35960492991794,
            "year": 2025,
            "unit": "months",
            "series": [
              {
                "value": 2.59707505474829,
                "year": 2015,
                "projection": false
              },
              {
                "value": 3.8854106958735,
                "year": 2016,
                "projection": false
              },
              {
                "value": 5.72306111855628,
                "year": 2017,
                "projection": false
              },
              {
                "value": 5.85734270401284,
                "year": 2018,
                "projection": false
              },
              {
                "value": 5.83923947440236,
                "year": 2019,
                "projection": false
              },
              {
                "value": 5.56473451430895,
                "year": 2020,
                "projection": false
              },
              {
                "value": 4.38225643427728,
                "year": 2021,
                "projection": false
              },
              {
                "value": 3.32738146369502,
                "year": 2022,
                "projection": false
              },
              {
                "value": 3.87390992001782,
                "year": 2023,
                "projection": false
              },
              {
                "value": 4.53950764706678,
                "year": 2024,
                "projection": false
              },
              {
                "value": 4.35960492991794,
                "year": 2025,
                "projection": false
              }
            ]
          },
          "externalDebtGni": {
            "value": 41.9820138564051,
            "year": 2024,
            "unit": "percent",
            "series": [
              {
                "value": 15.4090910799379,
                "year": 2015,
                "projection": false
              },
              {
                "value": 21.0959884446522,
                "year": 2016,
                "projection": false
              },
              {
                "value": 34.6961018574758,
                "year": 2017,
                "projection": false
              },
              {
                "value": 38.8036123837843,
                "year": 2018,
                "projection": false
              },
              {
                "value": 37.3486377137165,
                "year": 2019,
                "projection": false
              },
              {
                "value": 35.5843178235706,
                "year": 2020,
                "projection": false
              },
              {
                "value": 35.4130599251787,
                "year": 2021,
                "projection": false
              },
              {
                "value": 35.3832819125992,
                "year": 2022,
                "projection": false
              },
              {
                "value": 44.4212432479616,
                "year": 2023,
                "projection": false
              },
              {
                "value": 41.9820138564051,
                "year": 2024,
                "projection": false
              }
            ]
          },
          "debtServiceExports": {
            "value": 49.2291017973666,
            "year": 2024,
            "unit": "percent",
            "series": [
              {
                "value": 9.98733957183104,
                "year": 2015,
                "projection": false
              },
              {
                "value": 19.5115368004423,
                "year": 2016,
                "projection": false
              },
              {
                "value": 15.3775515850977,
                "year": 2017,
                "projection": false
              },
              {
                "value": 16.3223660797798,
                "year": 2018,
                "projection": false
              },
              {
                "value": 16.58038796421,
                "year": 2019,
                "projection": false
              },
              {
                "value": 30.61957277854,
                "year": 2020,
                "projection": false
              },
              {
                "value": 31.0941269796866,
                "year": 2021,
                "projection": false
              },
              {
                "value": 23.1349293420531,
                "year": 2022,
                "projection": false
              },
              {
                "value": 30.3910889570483,
                "year": 2023,
                "projection": false
              },
              {
                "value": 49.2291017973666,
                "year": 2024,
                "projection": false
              }
            ]
          }
        }
      },
      "trade": {
        "year": 2024,
        "exportsTotal": 53006222753,
        "importsTotal": 99202455435,
        "topExports": [
          {
            "name": "Refined Petroleum",
            "value": 6307150883,
            "share": 11.898887631345197
          },
          {
            "name": "Gold",
            "value": 3357260579,
            "share": 6.333710278969064
          },
          {
            "name": "Nitrogenous Fertilizers",
            "value": 1696373082,
            "share": 3.200328176381876
          },
          {
            "name": "Insulated Wire",
            "value": 1537885968,
            "share": 2.9013309912051035
          },
          {
            "name": "Citrus",
            "value": 1367372614,
            "share": 2.579645451010015
          }
        ],
        "topImports": [
          {
            "name": "Refined Petroleum",
            "value": 9560554453,
            "share": 9.63741714968368
          },
          {
            "name": "Petroleum Gas",
            "value": 5254151732,
            "share": 5.296392825117777
          },
          {
            "name": "Wheat",
            "value": 5203513316,
            "share": 5.245347298292909
          },
          {
            "name": "Cars",
            "value": 3083152099,
            "share": 3.107939299970413
          },
          {
            "name": "Packaged Medicaments",
            "value": 2703935698,
            "share": 2.725674164155834
          }
        ],
        "exportPartners": [
          {
            "name": "Saudi Arabia",
            "value": 5799914703,
            "share": 10.941950589512137
          },
          {
            "name": "Turkey",
            "value": 4503991693,
            "share": 8.497099885777255
          },
          {
            "name": "United Arab Emirates",
            "value": 3261696889,
            "share": 6.153422597567372
          },
          {
            "name": "United States",
            "value": 2971043183,
            "share": 5.605083759400395
          },
          {
            "name": "Italy",
            "value": 2636590347,
            "share": 4.974114754952571
          }
        ],
        "importPartners": [
          {
            "name": "China",
            "value": 16701805729,
            "share": 16.836080977797423
          },
          {
            "name": "Saudi Arabia",
            "value": 8396098442,
            "share": 8.46359941917097
          },
          {
            "name": "United States",
            "value": 6609594503,
            "share": 6.662732766056155
          },
          {
            "name": "Russia",
            "value": 6007182808,
            "share": 6.055477943220932
          },
          {
            "name": "Turkey",
            "value": 4225874162,
            "share": 4.259848351000648
          }
        ]
      }
    },
    "uzbekistan": {
      "imf": {
        "indicators": {
          "realGdpGrowth": {
            "value": 6.5,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1992,
                "value": -11.1,
                "projection": false
              },
              {
                "year": 1993,
                "value": -2.3,
                "projection": false
              },
              {
                "year": 1994,
                "value": -5.2,
                "projection": false
              },
              {
                "year": 1995,
                "value": -0.9,
                "projection": false
              },
              {
                "year": 1996,
                "value": 1.7,
                "projection": false
              },
              {
                "year": 1997,
                "value": 5.2,
                "projection": false
              },
              {
                "year": 1998,
                "value": 4.3,
                "projection": false
              },
              {
                "year": 1999,
                "value": 4.3,
                "projection": false
              },
              {
                "year": 2000,
                "value": 3.8,
                "projection": false
              },
              {
                "year": 2001,
                "value": 4.2,
                "projection": false
              },
              {
                "year": 2002,
                "value": 4,
                "projection": false
              },
              {
                "year": 2003,
                "value": 4.2,
                "projection": false
              },
              {
                "year": 2004,
                "value": 7.4,
                "projection": false
              },
              {
                "year": 2005,
                "value": 7,
                "projection": false
              },
              {
                "year": 2006,
                "value": 7.5,
                "projection": false
              },
              {
                "year": 2007,
                "value": 9.5,
                "projection": false
              },
              {
                "year": 2008,
                "value": 9,
                "projection": false
              },
              {
                "year": 2009,
                "value": 8.1,
                "projection": false
              },
              {
                "year": 2010,
                "value": 7.7,
                "projection": false
              },
              {
                "year": 2011,
                "value": 8.1,
                "projection": false
              },
              {
                "year": 2012,
                "value": 7.4,
                "projection": false
              },
              {
                "year": 2013,
                "value": 7.9,
                "projection": false
              },
              {
                "year": 2014,
                "value": 7.7,
                "projection": false
              },
              {
                "year": 2015,
                "value": 7.9,
                "projection": false
              },
              {
                "year": 2016,
                "value": 6.7,
                "projection": false
              },
              {
                "year": 2017,
                "value": 4.7,
                "projection": false
              },
              {
                "year": 2018,
                "value": 5.7,
                "projection": false
              },
              {
                "year": 2019,
                "value": 6.8,
                "projection": false
              },
              {
                "year": 2020,
                "value": 1.6,
                "projection": false
              },
              {
                "year": 2021,
                "value": 8.2,
                "projection": false
              },
              {
                "year": 2022,
                "value": 6.1,
                "projection": false
              },
              {
                "year": 2023,
                "value": 6.3,
                "projection": false
              },
              {
                "year": 2024,
                "value": 6.7,
                "projection": false
              },
              {
                "year": 2025,
                "value": 7.7,
                "projection": false
              },
              {
                "year": 2026,
                "value": 6.5,
                "projection": true
              },
              {
                "year": 2027,
                "value": 5.9,
                "projection": true
              },
              {
                "year": 2028,
                "value": 5.8,
                "projection": true
              },
              {
                "year": 2029,
                "value": 5.8,
                "projection": true
              },
              {
                "year": 2030,
                "value": 5.7,
                "projection": true
              },
              {
                "year": 2031,
                "value": 5.7,
                "projection": true
              }
            ]
          },
          "inflation": {
            "value": 7,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1992,
                "value": 645.1,
                "projection": false
              },
              {
                "year": 1993,
                "value": 534.2,
                "projection": false
              },
              {
                "year": 1994,
                "value": 1568.3,
                "projection": false
              },
              {
                "year": 1995,
                "value": 304.6,
                "projection": false
              },
              {
                "year": 1996,
                "value": 54,
                "projection": false
              },
              {
                "year": 1997,
                "value": 70.9,
                "projection": false
              },
              {
                "year": 1998,
                "value": 29,
                "projection": false
              },
              {
                "year": 1999,
                "value": 29.1,
                "projection": false
              },
              {
                "year": 2000,
                "value": 25,
                "projection": false
              },
              {
                "year": 2001,
                "value": 27.3,
                "projection": false
              },
              {
                "year": 2002,
                "value": 27.3,
                "projection": false
              },
              {
                "year": 2003,
                "value": 12.5,
                "projection": false
              },
              {
                "year": 2004,
                "value": 7.3,
                "projection": false
              },
              {
                "year": 2005,
                "value": 10.7,
                "projection": false
              },
              {
                "year": 2006,
                "value": 13.1,
                "projection": false
              },
              {
                "year": 2007,
                "value": 11.2,
                "projection": false
              },
              {
                "year": 2008,
                "value": 13.1,
                "projection": false
              },
              {
                "year": 2009,
                "value": 12.3,
                "projection": false
              },
              {
                "year": 2010,
                "value": 12.3,
                "projection": false
              },
              {
                "year": 2011,
                "value": 12.4,
                "projection": false
              },
              {
                "year": 2012,
                "value": 11.9,
                "projection": false
              },
              {
                "year": 2013,
                "value": 11.7,
                "projection": false
              },
              {
                "year": 2014,
                "value": 9.1,
                "projection": false
              },
              {
                "year": 2015,
                "value": 8.5,
                "projection": false
              },
              {
                "year": 2016,
                "value": 8.8,
                "projection": false
              },
              {
                "year": 2017,
                "value": 13.9,
                "projection": false
              },
              {
                "year": 2018,
                "value": 17.5,
                "projection": false
              },
              {
                "year": 2019,
                "value": 14.5,
                "projection": false
              },
              {
                "year": 2020,
                "value": 12.9,
                "projection": false
              },
              {
                "year": 2021,
                "value": 10.8,
                "projection": false
              },
              {
                "year": 2022,
                "value": 11.4,
                "projection": false
              },
              {
                "year": 2023,
                "value": 10,
                "projection": false
              },
              {
                "year": 2024,
                "value": 9.6,
                "projection": false
              },
              {
                "year": 2025,
                "value": 8.8,
                "projection": false
              },
              {
                "year": 2026,
                "value": 7,
                "projection": true
              },
              {
                "year": 2027,
                "value": 5.6,
                "projection": true
              },
              {
                "year": 2028,
                "value": 5,
                "projection": true
              },
              {
                "year": 2029,
                "value": 5,
                "projection": true
              },
              {
                "year": 2030,
                "value": 5,
                "projection": true
              },
              {
                "year": 2031,
                "value": 5,
                "projection": true
              }
            ]
          },
          "currentAccount": {
            "value": -1.3,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1992,
                "value": -4.8,
                "projection": false
              },
              {
                "year": 1993,
                "value": -5.7,
                "projection": false
              },
              {
                "year": 1994,
                "value": 1.3,
                "projection": false
              },
              {
                "year": 1995,
                "value": -0.1,
                "projection": false
              },
              {
                "year": 1996,
                "value": -5.1,
                "projection": false
              },
              {
                "year": 1997,
                "value": -2.9,
                "projection": false
              },
              {
                "year": 1998,
                "value": -0.5,
                "projection": false
              },
              {
                "year": 1999,
                "value": -0.7,
                "projection": false
              },
              {
                "year": 2000,
                "value": 2.9,
                "projection": false
              },
              {
                "year": 2001,
                "value": 1.1,
                "projection": false
              },
              {
                "year": 2002,
                "value": 2.1,
                "projection": false
              },
              {
                "year": 2003,
                "value": 4.6,
                "projection": false
              },
              {
                "year": 2004,
                "value": 5.1,
                "projection": false
              },
              {
                "year": 2005,
                "value": 5.8,
                "projection": false
              },
              {
                "year": 2006,
                "value": 7.3,
                "projection": false
              },
              {
                "year": 2007,
                "value": 5.8,
                "projection": false
              },
              {
                "year": 2008,
                "value": 8,
                "projection": false
              },
              {
                "year": 2009,
                "value": 3.8,
                "projection": false
              },
              {
                "year": 2010,
                "value": 4.1,
                "projection": false
              },
              {
                "year": 2011,
                "value": 4.1,
                "projection": false
              },
              {
                "year": 2012,
                "value": 1.6,
                "projection": false
              },
              {
                "year": 2013,
                "value": 1.6,
                "projection": false
              },
              {
                "year": 2014,
                "value": 2.3,
                "projection": false
              },
              {
                "year": 2015,
                "value": 0.9,
                "projection": false
              },
              {
                "year": 2016,
                "value": 0.2,
                "projection": false
              },
              {
                "year": 2017,
                "value": 2.1,
                "projection": false
              },
              {
                "year": 2018,
                "value": -5.9,
                "projection": false
              },
              {
                "year": 2019,
                "value": -4.8,
                "projection": false
              },
              {
                "year": 2020,
                "value": -4.3,
                "projection": false
              },
              {
                "year": 2021,
                "value": -6,
                "projection": false
              },
              {
                "year": 2022,
                "value": -3,
                "projection": false
              },
              {
                "year": 2023,
                "value": -7.3,
                "projection": false
              },
              {
                "year": 2024,
                "value": -4.7,
                "projection": false
              },
              {
                "year": 2025,
                "value": -3.9,
                "projection": false
              },
              {
                "year": 2026,
                "value": -1.3,
                "projection": true
              },
              {
                "year": 2027,
                "value": -3.4,
                "projection": true
              },
              {
                "year": 2028,
                "value": -3.7,
                "projection": true
              },
              {
                "year": 2029,
                "value": -4.1,
                "projection": true
              },
              {
                "year": 2030,
                "value": -4.2,
                "projection": true
              },
              {
                "year": 2031,
                "value": -4.5,
                "projection": true
              }
            ]
          },
          "fiscalBalance": {
            "value": -0.8,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1992,
                "value": 6.4,
                "projection": false
              },
              {
                "year": 1993,
                "value": -10.8,
                "projection": false
              },
              {
                "year": 1994,
                "value": -4,
                "projection": false
              },
              {
                "year": 1995,
                "value": -1.6,
                "projection": false
              },
              {
                "year": 1996,
                "value": -1.4,
                "projection": false
              },
              {
                "year": 1997,
                "value": -1.8,
                "projection": false
              },
              {
                "year": 1998,
                "value": -2.7,
                "projection": false
              },
              {
                "year": 1999,
                "value": -2.6,
                "projection": false
              },
              {
                "year": 2000,
                "value": -3.3,
                "projection": false
              },
              {
                "year": 2001,
                "value": -3,
                "projection": false
              },
              {
                "year": 2002,
                "value": -5.7,
                "projection": false
              },
              {
                "year": 2003,
                "value": -4.4,
                "projection": false
              },
              {
                "year": 2004,
                "value": -3.4,
                "projection": false
              },
              {
                "year": 2005,
                "value": -3.2,
                "projection": false
              },
              {
                "year": 2006,
                "value": 2.5,
                "projection": false
              },
              {
                "year": 2007,
                "value": 3.2,
                "projection": false
              },
              {
                "year": 2008,
                "value": 5.4,
                "projection": false
              },
              {
                "year": 2009,
                "value": 1.6,
                "projection": false
              },
              {
                "year": 2010,
                "value": 2.3,
                "projection": false
              },
              {
                "year": 2011,
                "value": 4.6,
                "projection": false
              },
              {
                "year": 2012,
                "value": 5.3,
                "projection": false
              },
              {
                "year": 2013,
                "value": 1.9,
                "projection": false
              },
              {
                "year": 2014,
                "value": 1.7,
                "projection": false
              },
              {
                "year": 2015,
                "value": -0.2,
                "projection": false
              },
              {
                "year": 2016,
                "value": 0.6,
                "projection": false
              },
              {
                "year": 2017,
                "value": 1,
                "projection": false
              },
              {
                "year": 2018,
                "value": 1.6,
                "projection": false
              },
              {
                "year": 2019,
                "value": -0.3,
                "projection": false
              },
              {
                "year": 2020,
                "value": -2.8,
                "projection": false
              },
              {
                "year": 2021,
                "value": -3.9,
                "projection": false
              },
              {
                "year": 2022,
                "value": -3.5,
                "projection": false
              },
              {
                "year": 2023,
                "value": -3.8,
                "projection": false
              },
              {
                "year": 2024,
                "value": -2.2,
                "projection": false
              },
              {
                "year": 2025,
                "value": -1.7,
                "projection": false
              },
              {
                "year": 2026,
                "value": -0.8,
                "projection": true
              },
              {
                "year": 2027,
                "value": -2.1,
                "projection": true
              },
              {
                "year": 2028,
                "value": -2.1,
                "projection": true
              },
              {
                "year": 2029,
                "value": -2.1,
                "projection": true
              },
              {
                "year": 2030,
                "value": -2.1,
                "projection": true
              },
              {
                "year": 2031,
                "value": -2.1,
                "projection": true
              }
            ]
          },
          "governmentDebt": {
            "value": 27.5,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1997,
                "value": 13.8,
                "projection": false
              },
              {
                "year": 1998,
                "value": 16.2,
                "projection": false
              },
              {
                "year": 1999,
                "value": 16.6,
                "projection": false
              },
              {
                "year": 2000,
                "value": 26.5,
                "projection": false
              },
              {
                "year": 2001,
                "value": 40.4,
                "projection": false
              },
              {
                "year": 2002,
                "value": 37.5,
                "projection": false
              },
              {
                "year": 2003,
                "value": 28.3,
                "projection": false
              },
              {
                "year": 2004,
                "value": 24.2,
                "projection": false
              },
              {
                "year": 2005,
                "value": 18.9,
                "projection": false
              },
              {
                "year": 2006,
                "value": 12.2,
                "projection": false
              },
              {
                "year": 2007,
                "value": 8.6,
                "projection": false
              },
              {
                "year": 2008,
                "value": 7.5,
                "projection": false
              },
              {
                "year": 2009,
                "value": 6.6,
                "projection": false
              },
              {
                "year": 2010,
                "value": 5.9,
                "projection": false
              },
              {
                "year": 2011,
                "value": 5.7,
                "projection": false
              },
              {
                "year": 2012,
                "value": 6.1,
                "projection": false
              },
              {
                "year": 2013,
                "value": 5.5,
                "projection": false
              },
              {
                "year": 2014,
                "value": 5.4,
                "projection": false
              },
              {
                "year": 2015,
                "value": 5.9,
                "projection": false
              },
              {
                "year": 2016,
                "value": 7.2,
                "projection": false
              },
              {
                "year": 2017,
                "value": 17.3,
                "projection": false
              },
              {
                "year": 2018,
                "value": 16.7,
                "projection": false
              },
              {
                "year": 2019,
                "value": 24.3,
                "projection": false
              },
              {
                "year": 2020,
                "value": 31.9,
                "projection": false
              },
              {
                "year": 2021,
                "value": 30.2,
                "projection": false
              },
              {
                "year": 2022,
                "value": 29.2,
                "projection": false
              },
              {
                "year": 2023,
                "value": 30.7,
                "projection": false
              },
              {
                "year": 2024,
                "value": 30.9,
                "projection": false
              },
              {
                "year": 2025,
                "value": 28.6,
                "projection": false
              },
              {
                "year": 2026,
                "value": 27.5,
                "projection": true
              },
              {
                "year": 2027,
                "value": 27,
                "projection": true
              },
              {
                "year": 2028,
                "value": 27,
                "projection": true
              },
              {
                "year": 2029,
                "value": 26.8,
                "projection": true
              },
              {
                "year": 2030,
                "value": 26.8,
                "projection": true
              },
              {
                "year": 2031,
                "value": 26.8,
                "projection": true
              }
            ]
          }
        }
      },
      "worldBank": {
        "indicators": {
          "reserveMonths": {
            "value": 10.2786124689433,
            "year": 2024,
            "unit": "months",
            "series": [
              {
                "value": 19.0907622598069,
                "year": 2015,
                "projection": false
              },
              {
                "value": 19.914018921891,
                "year": 2016,
                "projection": false
              },
              {
                "value": 18.8661574312442,
                "year": 2017,
                "projection": false
              },
              {
                "value": 12.9240353308614,
                "year": 2018,
                "projection": false
              },
              {
                "value": 12.2010067246417,
                "year": 2019,
                "projection": false
              },
              {
                "value": 17.1535876412365,
                "year": 2020,
                "projection": false
              },
              {
                "value": 14.0879268415418,
                "year": 2021,
                "projection": false
              },
              {
                "value": 11.0213280799862,
                "year": 2022,
                "projection": false
              },
              {
                "value": 8.8289303287966,
                "year": 2023,
                "projection": false
              },
              {
                "value": 10.2786124689433,
                "year": 2024,
                "projection": false
              }
            ]
          },
          "externalDebtGni": {
            "value": 60.5136500172241,
            "year": 2024,
            "unit": "percent",
            "series": [
              {
                "value": 15.4883044347435,
                "year": 2015,
                "projection": false
              },
              {
                "value": 17.6278326041901,
                "year": 2016,
                "projection": false
              },
              {
                "value": 23.5509763848597,
                "year": 2017,
                "projection": false
              },
              {
                "value": 30.3280220309687,
                "year": 2018,
                "projection": false
              },
              {
                "value": 36.6925126519291,
                "year": 2019,
                "projection": false
              },
              {
                "value": 55.7841269753241,
                "year": 2020,
                "projection": false
              },
              {
                "value": 57.7526022783528,
                "year": 2021,
                "projection": false
              },
              {
                "value": 58.8223840472191,
                "year": 2022,
                "projection": false
              },
              {
                "value": 59.4107717535195,
                "year": 2023,
                "projection": false
              },
              {
                "value": 60.5136500172241,
                "year": 2024,
                "projection": false
              }
            ]
          },
          "debtServiceExports": {
            "value": 36.0356756918143,
            "year": 2024,
            "unit": "percent",
            "series": [
              {
                "value": 9.12617589551014,
                "year": 2015,
                "projection": false
              },
              {
                "value": 10.8677385566558,
                "year": 2016,
                "projection": false
              },
              {
                "value": 12.8193393706197,
                "year": 2017,
                "projection": false
              },
              {
                "value": 5.95919749720275,
                "year": 2018,
                "projection": false
              },
              {
                "value": 13.5527068156173,
                "year": 2019,
                "projection": false
              },
              {
                "value": 19.9879009093944,
                "year": 2020,
                "projection": false
              },
              {
                "value": 26.0113593675524,
                "year": 2021,
                "projection": false
              },
              {
                "value": 29.926973896313,
                "year": 2022,
                "projection": false
              },
              {
                "value": 32.6082639196463,
                "year": 2023,
                "projection": false
              },
              {
                "value": 36.0356756918143,
                "year": 2024,
                "projection": false
              }
            ]
          }
        }
      }
    },
    "vietnam": {
      "imf": {
        "indicators": {
          "realGdpGrowth": {
            "value": 7.1,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1980,
                "value": -3.5,
                "projection": false
              },
              {
                "year": 1981,
                "value": 5.8,
                "projection": false
              },
              {
                "year": 1982,
                "value": 8.2,
                "projection": false
              },
              {
                "year": 1983,
                "value": 7.1,
                "projection": false
              },
              {
                "year": 1984,
                "value": 8.4,
                "projection": false
              },
              {
                "year": 1985,
                "value": 5.6,
                "projection": false
              },
              {
                "year": 1986,
                "value": 3.4,
                "projection": false
              },
              {
                "year": 1987,
                "value": 2.5,
                "projection": false
              },
              {
                "year": 1988,
                "value": 5.1,
                "projection": false
              },
              {
                "year": 1989,
                "value": 7.8,
                "projection": false
              },
              {
                "year": 1990,
                "value": 5,
                "projection": false
              },
              {
                "year": 1991,
                "value": 5.8,
                "projection": false
              },
              {
                "year": 1992,
                "value": 8.7,
                "projection": false
              },
              {
                "year": 1993,
                "value": 8.1,
                "projection": false
              },
              {
                "year": 1994,
                "value": 8.8,
                "projection": false
              },
              {
                "year": 1995,
                "value": 9.5,
                "projection": false
              },
              {
                "year": 1996,
                "value": 9.3,
                "projection": false
              },
              {
                "year": 1997,
                "value": 8.2,
                "projection": false
              },
              {
                "year": 1998,
                "value": 5.8,
                "projection": false
              },
              {
                "year": 1999,
                "value": 4.8,
                "projection": false
              },
              {
                "year": 2000,
                "value": 6.8,
                "projection": false
              },
              {
                "year": 2001,
                "value": 6.9,
                "projection": false
              },
              {
                "year": 2002,
                "value": 7.1,
                "projection": false
              },
              {
                "year": 2003,
                "value": 7.3,
                "projection": false
              },
              {
                "year": 2004,
                "value": 7.8,
                "projection": false
              },
              {
                "year": 2005,
                "value": 7.5,
                "projection": false
              },
              {
                "year": 2006,
                "value": 7,
                "projection": false
              },
              {
                "year": 2007,
                "value": 7.1,
                "projection": false
              },
              {
                "year": 2008,
                "value": 5.7,
                "projection": false
              },
              {
                "year": 2009,
                "value": 5.4,
                "projection": false
              },
              {
                "year": 2010,
                "value": 6.4,
                "projection": false
              },
              {
                "year": 2011,
                "value": 6.4,
                "projection": false
              },
              {
                "year": 2012,
                "value": 5.5,
                "projection": false
              },
              {
                "year": 2013,
                "value": 5.6,
                "projection": false
              },
              {
                "year": 2014,
                "value": 6.4,
                "projection": false
              },
              {
                "year": 2015,
                "value": 7,
                "projection": false
              },
              {
                "year": 2016,
                "value": 6.7,
                "projection": false
              },
              {
                "year": 2017,
                "value": 6.9,
                "projection": false
              },
              {
                "year": 2018,
                "value": 7.5,
                "projection": false
              },
              {
                "year": 2019,
                "value": 7.4,
                "projection": false
              },
              {
                "year": 2020,
                "value": 2.9,
                "projection": false
              },
              {
                "year": 2021,
                "value": 2.6,
                "projection": false
              },
              {
                "year": 2022,
                "value": 8.5,
                "projection": false
              },
              {
                "year": 2023,
                "value": 5.1,
                "projection": false
              },
              {
                "year": 2024,
                "value": 7,
                "projection": false
              },
              {
                "year": 2025,
                "value": 8,
                "projection": false
              },
              {
                "year": 2026,
                "value": 7.1,
                "projection": true
              },
              {
                "year": 2027,
                "value": 6.7,
                "projection": true
              },
              {
                "year": 2028,
                "value": 6.2,
                "projection": true
              },
              {
                "year": 2029,
                "value": 5.6,
                "projection": true
              },
              {
                "year": 2030,
                "value": 5.4,
                "projection": true
              },
              {
                "year": 2031,
                "value": 5.4,
                "projection": true
              }
            ]
          },
          "inflation": {
            "value": 4.9,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1980,
                "value": 25.2,
                "projection": false
              },
              {
                "year": 1981,
                "value": 69.6,
                "projection": false
              },
              {
                "year": 1982,
                "value": 95.4,
                "projection": false
              },
              {
                "year": 1983,
                "value": 49.5,
                "projection": false
              },
              {
                "year": 1984,
                "value": 64.9,
                "projection": false
              },
              {
                "year": 1985,
                "value": 91.6,
                "projection": false
              },
              {
                "year": 1986,
                "value": 453.5,
                "projection": false
              },
              {
                "year": 1987,
                "value": 360.4,
                "projection": false
              },
              {
                "year": 1988,
                "value": 374.4,
                "projection": false
              },
              {
                "year": 1989,
                "value": 95.8,
                "projection": false
              },
              {
                "year": 1990,
                "value": 36,
                "projection": false
              },
              {
                "year": 1991,
                "value": 81.8,
                "projection": false
              },
              {
                "year": 1992,
                "value": 37.7,
                "projection": false
              },
              {
                "year": 1993,
                "value": 8.4,
                "projection": false
              },
              {
                "year": 1994,
                "value": 10.4,
                "projection": false
              },
              {
                "year": 1995,
                "value": 16.9,
                "projection": false
              },
              {
                "year": 1996,
                "value": 5.6,
                "projection": false
              },
              {
                "year": 1997,
                "value": 3.1,
                "projection": false
              },
              {
                "year": 1998,
                "value": 7.2,
                "projection": false
              },
              {
                "year": 1999,
                "value": 4.1,
                "projection": false
              },
              {
                "year": 2000,
                "value": -1.8,
                "projection": false
              },
              {
                "year": 2001,
                "value": -0.3,
                "projection": false
              },
              {
                "year": 2002,
                "value": 4.1,
                "projection": false
              },
              {
                "year": 2003,
                "value": 3.3,
                "projection": false
              },
              {
                "year": 2004,
                "value": 7.9,
                "projection": false
              },
              {
                "year": 2005,
                "value": 8.4,
                "projection": false
              },
              {
                "year": 2006,
                "value": 7.5,
                "projection": false
              },
              {
                "year": 2007,
                "value": 8.3,
                "projection": false
              },
              {
                "year": 2008,
                "value": 23.1,
                "projection": false
              },
              {
                "year": 2009,
                "value": 6.7,
                "projection": false
              },
              {
                "year": 2010,
                "value": 10.5,
                "projection": false
              },
              {
                "year": 2011,
                "value": 18.7,
                "projection": false
              },
              {
                "year": 2012,
                "value": 9.1,
                "projection": false
              },
              {
                "year": 2013,
                "value": 6.6,
                "projection": false
              },
              {
                "year": 2014,
                "value": 4.1,
                "projection": false
              },
              {
                "year": 2015,
                "value": 0.6,
                "projection": false
              },
              {
                "year": 2016,
                "value": 2.7,
                "projection": false
              },
              {
                "year": 2017,
                "value": 3.5,
                "projection": false
              },
              {
                "year": 2018,
                "value": 3.5,
                "projection": false
              },
              {
                "year": 2019,
                "value": 2.8,
                "projection": false
              },
              {
                "year": 2020,
                "value": 3.2,
                "projection": false
              },
              {
                "year": 2021,
                "value": 1.8,
                "projection": false
              },
              {
                "year": 2022,
                "value": 3.2,
                "projection": false
              },
              {
                "year": 2023,
                "value": 3.3,
                "projection": false
              },
              {
                "year": 2024,
                "value": 3.6,
                "projection": false
              },
              {
                "year": 2025,
                "value": 3.3,
                "projection": false
              },
              {
                "year": 2026,
                "value": 4.9,
                "projection": true
              },
              {
                "year": 2027,
                "value": 4.6,
                "projection": true
              },
              {
                "year": 2028,
                "value": 3.7,
                "projection": true
              },
              {
                "year": 2029,
                "value": 3.6,
                "projection": true
              },
              {
                "year": 2030,
                "value": 3.6,
                "projection": true
              },
              {
                "year": 2031,
                "value": 3.6,
                "projection": true
              }
            ]
          },
          "currentAccount": {
            "value": 5.3,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1980,
                "value": -1.6,
                "projection": false
              },
              {
                "year": 1981,
                "value": -4.2,
                "projection": false
              },
              {
                "year": 1982,
                "value": -2.6,
                "projection": false
              },
              {
                "year": 1983,
                "value": -1.9,
                "projection": false
              },
              {
                "year": 1984,
                "value": -1.6,
                "projection": false
              },
              {
                "year": 1985,
                "value": -5,
                "projection": false
              },
              {
                "year": 1986,
                "value": -3.4,
                "projection": false
              },
              {
                "year": 1987,
                "value": -2.6,
                "projection": false
              },
              {
                "year": 1988,
                "value": -2.6,
                "projection": false
              },
              {
                "year": 1989,
                "value": -7.3,
                "projection": false
              },
              {
                "year": 1990,
                "value": -3.2,
                "projection": false
              },
              {
                "year": 1991,
                "value": -1.4,
                "projection": false
              },
              {
                "year": 1992,
                "value": -0.1,
                "projection": false
              },
              {
                "year": 1993,
                "value": -8.3,
                "projection": false
              },
              {
                "year": 1994,
                "value": -9,
                "projection": false
              },
              {
                "year": 1995,
                "value": -10,
                "projection": false
              },
              {
                "year": 1996,
                "value": -6.4,
                "projection": false
              },
              {
                "year": 1997,
                "value": -4.5,
                "projection": false
              },
              {
                "year": 1998,
                "value": -4,
                "projection": false
              },
              {
                "year": 1999,
                "value": 3.2,
                "projection": false
              },
              {
                "year": 2000,
                "value": 2.1,
                "projection": false
              },
              {
                "year": 2001,
                "value": 2.2,
                "projection": false
              },
              {
                "year": 2002,
                "value": -1.4,
                "projection": false
              },
              {
                "year": 2003,
                "value": -3.8,
                "projection": false
              },
              {
                "year": 2004,
                "value": -2.5,
                "projection": false
              },
              {
                "year": 2005,
                "value": -0.8,
                "projection": false
              },
              {
                "year": 2006,
                "value": -0.2,
                "projection": false
              },
              {
                "year": 2007,
                "value": -7.1,
                "projection": false
              },
              {
                "year": 2008,
                "value": -8.6,
                "projection": false
              },
              {
                "year": 2009,
                "value": -5.1,
                "projection": false
              },
              {
                "year": 2010,
                "value": -3,
                "projection": false
              },
              {
                "year": 2011,
                "value": 0.1,
                "projection": false
              },
              {
                "year": 2012,
                "value": 4.7,
                "projection": false
              },
              {
                "year": 2013,
                "value": 3.6,
                "projection": false
              },
              {
                "year": 2014,
                "value": 3.7,
                "projection": false
              },
              {
                "year": 2015,
                "value": -0.9,
                "projection": false
              },
              {
                "year": 2016,
                "value": 0.2,
                "projection": false
              },
              {
                "year": 2017,
                "value": -0.6,
                "projection": false
              },
              {
                "year": 2018,
                "value": 1.9,
                "projection": false
              },
              {
                "year": 2019,
                "value": 3.8,
                "projection": false
              },
              {
                "year": 2020,
                "value": 4.3,
                "projection": false
              },
              {
                "year": 2021,
                "value": -2.2,
                "projection": false
              },
              {
                "year": 2022,
                "value": 0.3,
                "projection": false
              },
              {
                "year": 2023,
                "value": 6.4,
                "projection": false
              },
              {
                "year": 2024,
                "value": 6.6,
                "projection": false
              },
              {
                "year": 2025,
                "value": 6.7,
                "projection": false
              },
              {
                "year": 2026,
                "value": 5.3,
                "projection": true
              },
              {
                "year": 2027,
                "value": 4.4,
                "projection": true
              },
              {
                "year": 2028,
                "value": 3.2,
                "projection": true
              },
              {
                "year": 2029,
                "value": 2.3,
                "projection": true
              },
              {
                "year": 2030,
                "value": 1.4,
                "projection": true
              },
              {
                "year": 2031,
                "value": 0.6,
                "projection": true
              }
            ]
          },
          "fiscalBalance": {
            "value": -2,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1998,
                "value": -0.1,
                "projection": false
              },
              {
                "year": 1999,
                "value": -1.2,
                "projection": false
              },
              {
                "year": 2000,
                "value": -1.6,
                "projection": false
              },
              {
                "year": 2001,
                "value": -2.2,
                "projection": false
              },
              {
                "year": 2002,
                "value": -1.9,
                "projection": false
              },
              {
                "year": 2003,
                "value": -2.6,
                "projection": false
              },
              {
                "year": 2004,
                "value": -0.1,
                "projection": false
              },
              {
                "year": 2005,
                "value": -1,
                "projection": false
              },
              {
                "year": 2006,
                "value": 0.2,
                "projection": false
              },
              {
                "year": 2007,
                "value": -1.7,
                "projection": false
              },
              {
                "year": 2008,
                "value": -0.4,
                "projection": false
              },
              {
                "year": 2009,
                "value": -4.8,
                "projection": false
              },
              {
                "year": 2010,
                "value": -2.3,
                "projection": false
              },
              {
                "year": 2011,
                "value": -0.9,
                "projection": false
              },
              {
                "year": 2012,
                "value": -5.5,
                "projection": false
              },
              {
                "year": 2013,
                "value": -6,
                "projection": false
              },
              {
                "year": 2014,
                "value": -5,
                "projection": false
              },
              {
                "year": 2015,
                "value": -5,
                "projection": false
              },
              {
                "year": 2016,
                "value": -3.2,
                "projection": false
              },
              {
                "year": 2017,
                "value": -2,
                "projection": false
              },
              {
                "year": 2018,
                "value": -1,
                "projection": false
              },
              {
                "year": 2019,
                "value": -0.4,
                "projection": false
              },
              {
                "year": 2020,
                "value": -2.9,
                "projection": false
              },
              {
                "year": 2021,
                "value": -1.4,
                "projection": false
              },
              {
                "year": 2022,
                "value": 0.7,
                "projection": false
              },
              {
                "year": 2023,
                "value": -1.7,
                "projection": false
              },
              {
                "year": 2024,
                "value": -1.5,
                "projection": false
              },
              {
                "year": 2025,
                "value": -2.2,
                "projection": false
              },
              {
                "year": 2026,
                "value": -2,
                "projection": true
              },
              {
                "year": 2027,
                "value": -1.6,
                "projection": true
              },
              {
                "year": 2028,
                "value": -1.4,
                "projection": true
              },
              {
                "year": 2029,
                "value": -1.3,
                "projection": true
              },
              {
                "year": 2030,
                "value": -1.3,
                "projection": true
              },
              {
                "year": 2031,
                "value": -1.3,
                "projection": true
              }
            ]
          },
          "governmentDebt": {
            "value": 29.8,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 2000,
                "value": 24.8,
                "projection": false
              },
              {
                "year": 2001,
                "value": 25.4,
                "projection": false
              },
              {
                "year": 2002,
                "value": 27.7,
                "projection": false
              },
              {
                "year": 2003,
                "value": 29.8,
                "projection": false
              },
              {
                "year": 2004,
                "value": 29.4,
                "projection": false
              },
              {
                "year": 2005,
                "value": 28.7,
                "projection": false
              },
              {
                "year": 2006,
                "value": 30.2,
                "projection": false
              },
              {
                "year": 2007,
                "value": 32.2,
                "projection": false
              },
              {
                "year": 2008,
                "value": 31,
                "projection": false
              },
              {
                "year": 2009,
                "value": 36.2,
                "projection": false
              },
              {
                "year": 2010,
                "value": 37.3,
                "projection": false
              },
              {
                "year": 2011,
                "value": 36.2,
                "projection": false
              },
              {
                "year": 2012,
                "value": 38.3,
                "projection": false
              },
              {
                "year": 2013,
                "value": 41.4,
                "projection": false
              },
              {
                "year": 2014,
                "value": 43.6,
                "projection": false
              },
              {
                "year": 2015,
                "value": 46.1,
                "projection": false
              },
              {
                "year": 2016,
                "value": 47.9,
                "projection": false
              },
              {
                "year": 2017,
                "value": 46.6,
                "projection": false
              },
              {
                "year": 2018,
                "value": 43.8,
                "projection": false
              },
              {
                "year": 2019,
                "value": 41,
                "projection": false
              },
              {
                "year": 2020,
                "value": 41.3,
                "projection": false
              },
              {
                "year": 2021,
                "value": 39.2,
                "projection": false
              },
              {
                "year": 2022,
                "value": 34.9,
                "projection": false
              },
              {
                "year": 2023,
                "value": 34.3,
                "projection": false
              },
              {
                "year": 2024,
                "value": 31.2,
                "projection": false
              },
              {
                "year": 2025,
                "value": 30.3,
                "projection": false
              },
              {
                "year": 2026,
                "value": 29.8,
                "projection": true
              },
              {
                "year": 2027,
                "value": 29,
                "projection": true
              },
              {
                "year": 2028,
                "value": 28.3,
                "projection": true
              },
              {
                "year": 2029,
                "value": 27.7,
                "projection": true
              },
              {
                "year": 2030,
                "value": 27.2,
                "projection": true
              },
              {
                "year": 2031,
                "value": 26.6,
                "projection": true
              }
            ]
          }
        }
      },
      "worldBank": {
        "indicators": {
          "reserveMonths": {
            "value": 2.37407817485002,
            "year": 2024,
            "unit": "months",
            "series": [
              {
                "value": 1.8503725793752,
                "year": 2015,
                "projection": false
              },
              {
                "value": 2.22398532927413,
                "year": 2016,
                "projection": false
              },
              {
                "value": 2.46290138784708,
                "year": 2017,
                "projection": false
              },
              {
                "value": 2.52957991101101,
                "year": 2018,
                "projection": false
              },
              {
                "value": 3.36679352940087,
                "year": 2019,
                "projection": false
              },
              {
                "value": 3.9782956088746,
                "year": 2020,
                "projection": false
              },
              {
                "value": 3.68607429495755,
                "year": 2021,
                "projection": false
              },
              {
                "value": 2.65055544761863,
                "year": 2022,
                "projection": false
              },
              {
                "value": 3.01759407672039,
                "year": 2023,
                "projection": false
              },
              {
                "value": 2.37407817485002,
                "year": 2024,
                "projection": false
              }
            ]
          },
          "externalDebtGni": {
            "value": 28.849298110528,
            "year": 2024,
            "unit": "percent",
            "series": [
              {
                "value": 36.0276512949194,
                "year": 2015,
                "projection": false
              },
              {
                "value": 37.2434368821309,
                "year": 2016,
                "projection": false
              },
              {
                "value": 41.5701252327449,
                "year": 2017,
                "projection": false
              },
              {
                "value": 38.2695640665703,
                "year": 2018,
                "projection": false
              },
              {
                "value": 38.5732191379908,
                "year": 2019,
                "projection": false
              },
              {
                "value": 39.0234679461042,
                "year": 2020,
                "projection": false
              },
              {
                "value": 40.2192163533687,
                "year": 2021,
                "projection": false
              },
              {
                "value": 37.2580281492659,
                "year": 2022,
                "projection": false
              },
              {
                "value": 34.4790753177648,
                "year": 2023,
                "projection": false
              },
              {
                "value": 28.849298110528,
                "year": 2024,
                "projection": false
              }
            ]
          },
          "debtServiceExports": {
            "value": 7.72326875884348,
            "year": 2024,
            "unit": "percent",
            "series": [
              {
                "value": 3.93021313872606,
                "year": 2015,
                "projection": false
              },
              {
                "value": 4.06868318587895,
                "year": 2016,
                "projection": false
              },
              {
                "value": 6.28582677474731,
                "year": 2017,
                "projection": false
              },
              {
                "value": 7.26567450189829,
                "year": 2018,
                "projection": false
              },
              {
                "value": 6.0937874484832,
                "year": 2019,
                "projection": false
              },
              {
                "value": 5.86707620715429,
                "year": 2020,
                "projection": false
              },
              {
                "value": 6.06864858953762,
                "year": 2021,
                "projection": false
              },
              {
                "value": 6.76588446873016,
                "year": 2022,
                "projection": false
              },
              {
                "value": 7.54231510337596,
                "year": 2023,
                "projection": false
              },
              {
                "value": 7.72326875884348,
                "year": 2024,
                "projection": false
              }
            ]
          }
        }
      },
      "trade": {
        "year": 2024,
        "exportsTotal": 504977367122,
        "importsTotal": 376817888973,
        "topExports": [
          {
            "name": "Telephones",
            "value": 61820069078,
            "share": 12.24214650061031
          },
          {
            "name": "Computers",
            "value": 33502845561,
            "share": 6.6345241870822065
          },
          {
            "name": "Integrated Circuits",
            "value": 32058321100,
            "share": 6.3484669189648795
          },
          {
            "name": "Sound Recordings",
            "value": 28137600027,
            "share": 5.5720517114189985
          },
          {
            "name": "Office Machine Parts",
            "value": 23702440433,
            "share": 4.693762924086379
          }
        ],
        "topImports": [
          {
            "name": "Integrated Circuits",
            "value": 62863681753,
            "share": 16.68277531205647
          },
          {
            "name": "Sound Recordings",
            "value": 19444894069,
            "share": 5.160289529246123
          },
          {
            "name": "Telephones",
            "value": 13082226272,
            "share": 3.471763590538393
          },
          {
            "name": "Refined Petroleum",
            "value": 9074639975,
            "share": 2.4082296091973014
          },
          {
            "name": "Hot-Rolled Iron",
            "value": 6439519244,
            "share": 1.7089207897084229
          }
        ],
        "exportPartners": [
          {
            "name": "United States",
            "value": 140489324345,
            "share": 27.82091505322029
          },
          {
            "name": "China",
            "value": 94032779790,
            "share": 18.621186990204684
          },
          {
            "name": "South Korea",
            "value": 28443529612,
            "share": 5.63263454243647
          },
          {
            "name": "Japan",
            "value": 26477206242,
            "share": 5.2432461266334816
          },
          {
            "name": "Hong Kong",
            "value": 21034079939,
            "share": 4.165351025310065
          }
        ],
        "importPartners": [
          {
            "name": "China",
            "value": 158769089340,
            "share": 42.13416984334739
          },
          {
            "name": "South Korea",
            "value": 58315763804,
            "share": 15.475848018504895
          },
          {
            "name": "Hong Kong",
            "value": 19701640891,
            "share": 5.228425047626036
          },
          {
            "name": "Singapore",
            "value": 17048857213,
            "share": 4.524428832045603
          },
          {
            "name": "Japan",
            "value": 15857905174,
            "share": 4.208373763045061
          }
        ]
      }
    },
    "senegal": {
      "imf": {
        "indicators": {
          "realGdpGrowth": {
            "value": 2.2,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1980,
                "value": -0.8,
                "projection": false
              },
              {
                "year": 1981,
                "value": 5.1,
                "projection": false
              },
              {
                "year": 1982,
                "value": 7.8,
                "projection": false
              },
              {
                "year": 1983,
                "value": -5.3,
                "projection": false
              },
              {
                "year": 1984,
                "value": 3.7,
                "projection": false
              },
              {
                "year": 1985,
                "value": 3.3,
                "projection": false
              },
              {
                "year": 1986,
                "value": 3.1,
                "projection": false
              },
              {
                "year": 1987,
                "value": 6.1,
                "projection": false
              },
              {
                "year": 1988,
                "value": -0.6,
                "projection": false
              },
              {
                "year": 1989,
                "value": 4,
                "projection": false
              },
              {
                "year": 1990,
                "value": -0.7,
                "projection": false
              },
              {
                "year": 1991,
                "value": 2.6,
                "projection": false
              },
              {
                "year": 1992,
                "value": 1.2,
                "projection": false
              },
              {
                "year": 1993,
                "value": 1.3,
                "projection": false
              },
              {
                "year": 1994,
                "value": -0.2,
                "projection": false
              },
              {
                "year": 1995,
                "value": 6.1,
                "projection": false
              },
              {
                "year": 1996,
                "value": 1.9,
                "projection": false
              },
              {
                "year": 1997,
                "value": 2.7,
                "projection": false
              },
              {
                "year": 1998,
                "value": 6,
                "projection": false
              },
              {
                "year": 1999,
                "value": 6,
                "projection": false
              },
              {
                "year": 2000,
                "value": 3.9,
                "projection": false
              },
              {
                "year": 2001,
                "value": 4.3,
                "projection": false
              },
              {
                "year": 2002,
                "value": 0.1,
                "projection": false
              },
              {
                "year": 2003,
                "value": 5.6,
                "projection": false
              },
              {
                "year": 2004,
                "value": 4.6,
                "projection": false
              },
              {
                "year": 2005,
                "value": 4.3,
                "projection": false
              },
              {
                "year": 2006,
                "value": 2.3,
                "projection": false
              },
              {
                "year": 2007,
                "value": 2.8,
                "projection": false
              },
              {
                "year": 2008,
                "value": 3.7,
                "projection": false
              },
              {
                "year": 2009,
                "value": 2.8,
                "projection": false
              },
              {
                "year": 2010,
                "value": 3.4,
                "projection": false
              },
              {
                "year": 2011,
                "value": 1.3,
                "projection": false
              },
              {
                "year": 2012,
                "value": 4,
                "projection": false
              },
              {
                "year": 2013,
                "value": 2.4,
                "projection": false
              },
              {
                "year": 2014,
                "value": 6.2,
                "projection": false
              },
              {
                "year": 2015,
                "value": 6.4,
                "projection": false
              },
              {
                "year": 2016,
                "value": 6.4,
                "projection": false
              },
              {
                "year": 2017,
                "value": 7.4,
                "projection": false
              },
              {
                "year": 2018,
                "value": 6.2,
                "projection": false
              },
              {
                "year": 2019,
                "value": 4.6,
                "projection": false
              },
              {
                "year": 2020,
                "value": 1.3,
                "projection": false
              },
              {
                "year": 2021,
                "value": 6.5,
                "projection": false
              },
              {
                "year": 2022,
                "value": 3.9,
                "projection": false
              },
              {
                "year": 2023,
                "value": 4.3,
                "projection": false
              },
              {
                "year": 2024,
                "value": 6.1,
                "projection": false
              },
              {
                "year": 2025,
                "value": 7.9,
                "projection": false
              },
              {
                "year": 2026,
                "value": 2.2,
                "projection": true
              },
              {
                "year": 2027,
                "value": 2.3,
                "projection": true
              },
              {
                "year": 2028,
                "value": 3,
                "projection": true
              },
              {
                "year": 2029,
                "value": 2.9,
                "projection": true
              },
              {
                "year": 2030,
                "value": 4.3,
                "projection": true
              },
              {
                "year": 2031,
                "value": 4.6,
                "projection": true
              }
            ]
          },
          "inflation": {
            "value": 2.5,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1980,
                "value": 8.8,
                "projection": false
              },
              {
                "year": 1981,
                "value": 5.8,
                "projection": false
              },
              {
                "year": 1982,
                "value": 17.4,
                "projection": false
              },
              {
                "year": 1983,
                "value": 11.7,
                "projection": false
              },
              {
                "year": 1984,
                "value": 11.7,
                "projection": false
              },
              {
                "year": 1985,
                "value": 13,
                "projection": false
              },
              {
                "year": 1986,
                "value": 6.1,
                "projection": false
              },
              {
                "year": 1987,
                "value": -4.1,
                "projection": false
              },
              {
                "year": 1988,
                "value": -1.8,
                "projection": false
              },
              {
                "year": 1989,
                "value": 0.4,
                "projection": false
              },
              {
                "year": 1990,
                "value": 0.3,
                "projection": false
              },
              {
                "year": 1991,
                "value": -1.8,
                "projection": false
              },
              {
                "year": 1992,
                "value": 0,
                "projection": false
              },
              {
                "year": 1993,
                "value": -0.7,
                "projection": false
              },
              {
                "year": 1994,
                "value": 32.1,
                "projection": false
              },
              {
                "year": 1995,
                "value": 8.1,
                "projection": false
              },
              {
                "year": 1996,
                "value": 2.8,
                "projection": false
              },
              {
                "year": 1997,
                "value": 1.8,
                "projection": false
              },
              {
                "year": 1998,
                "value": 1,
                "projection": false
              },
              {
                "year": 1999,
                "value": 0.8,
                "projection": false
              },
              {
                "year": 2000,
                "value": 0.8,
                "projection": false
              },
              {
                "year": 2001,
                "value": 3.1,
                "projection": false
              },
              {
                "year": 2002,
                "value": 2.4,
                "projection": false
              },
              {
                "year": 2003,
                "value": 0,
                "projection": false
              },
              {
                "year": 2004,
                "value": 0,
                "projection": false
              },
              {
                "year": 2005,
                "value": 1.6,
                "projection": false
              },
              {
                "year": 2006,
                "value": 2.2,
                "projection": false
              },
              {
                "year": 2007,
                "value": 5.5,
                "projection": false
              },
              {
                "year": 2008,
                "value": 6.2,
                "projection": false
              },
              {
                "year": 2009,
                "value": -1,
                "projection": false
              },
              {
                "year": 2010,
                "value": 0,
                "projection": false
              },
              {
                "year": 2011,
                "value": 3.4,
                "projection": false
              },
              {
                "year": 2012,
                "value": 1.4,
                "projection": false
              },
              {
                "year": 2013,
                "value": 0.7,
                "projection": false
              },
              {
                "year": 2014,
                "value": -1.1,
                "projection": false
              },
              {
                "year": 2015,
                "value": 0.1,
                "projection": false
              },
              {
                "year": 2016,
                "value": 0.8,
                "projection": false
              },
              {
                "year": 2017,
                "value": 2.2,
                "projection": false
              },
              {
                "year": 2018,
                "value": 0.5,
                "projection": false
              },
              {
                "year": 2019,
                "value": 1,
                "projection": false
              },
              {
                "year": 2020,
                "value": 2.5,
                "projection": false
              },
              {
                "year": 2021,
                "value": 2.2,
                "projection": false
              },
              {
                "year": 2022,
                "value": 9.7,
                "projection": false
              },
              {
                "year": 2023,
                "value": 5.9,
                "projection": false
              },
              {
                "year": 2024,
                "value": 0.8,
                "projection": false
              },
              {
                "year": 2025,
                "value": 1.4,
                "projection": false
              },
              {
                "year": 2026,
                "value": 2.5,
                "projection": true
              },
              {
                "year": 2027,
                "value": 2.2,
                "projection": true
              },
              {
                "year": 2028,
                "value": 2,
                "projection": true
              },
              {
                "year": 2029,
                "value": 2,
                "projection": true
              },
              {
                "year": 2030,
                "value": 2,
                "projection": true
              },
              {
                "year": 2031,
                "value": 2,
                "projection": true
              }
            ]
          },
          "currentAccount": {
            "value": -6.2,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1980,
                "value": -10,
                "projection": false
              },
              {
                "year": 1981,
                "value": -11.5,
                "projection": false
              },
              {
                "year": 1982,
                "value": -8,
                "projection": false
              },
              {
                "year": 1983,
                "value": -8.9,
                "projection": false
              },
              {
                "year": 1984,
                "value": -8.1,
                "projection": false
              },
              {
                "year": 1985,
                "value": -7.4,
                "projection": false
              },
              {
                "year": 1986,
                "value": -5.2,
                "projection": false
              },
              {
                "year": 1987,
                "value": -4.9,
                "projection": false
              },
              {
                "year": 1988,
                "value": -6.7,
                "projection": false
              },
              {
                "year": 1989,
                "value": -6.3,
                "projection": false
              },
              {
                "year": 1990,
                "value": -6.3,
                "projection": false
              },
              {
                "year": 1991,
                "value": -6.5,
                "projection": false
              },
              {
                "year": 1992,
                "value": -6.8,
                "projection": false
              },
              {
                "year": 1993,
                "value": -6.5,
                "projection": false
              },
              {
                "year": 1994,
                "value": -6.1,
                "projection": false
              },
              {
                "year": 1995,
                "value": -5.4,
                "projection": false
              },
              {
                "year": 1996,
                "value": -5.3,
                "projection": false
              },
              {
                "year": 1997,
                "value": -4.6,
                "projection": false
              },
              {
                "year": 1998,
                "value": -5.3,
                "projection": false
              },
              {
                "year": 1999,
                "value": -5.2,
                "projection": false
              },
              {
                "year": 2000,
                "value": -5.5,
                "projection": false
              },
              {
                "year": 2001,
                "value": -3.8,
                "projection": false
              },
              {
                "year": 2002,
                "value": -4.6,
                "projection": false
              },
              {
                "year": 2003,
                "value": -5,
                "projection": false
              },
              {
                "year": 2004,
                "value": -5.1,
                "projection": false
              },
              {
                "year": 2005,
                "value": -6.2,
                "projection": false
              },
              {
                "year": 2006,
                "value": -6.2,
                "projection": false
              },
              {
                "year": 2007,
                "value": -9.6,
                "projection": false
              },
              {
                "year": 2008,
                "value": -11.3,
                "projection": false
              },
              {
                "year": 2009,
                "value": -5.3,
                "projection": false
              },
              {
                "year": 2010,
                "value": -3.5,
                "projection": false
              },
              {
                "year": 2011,
                "value": -6.5,
                "projection": false
              },
              {
                "year": 2012,
                "value": -8.8,
                "projection": false
              },
              {
                "year": 2013,
                "value": -8.3,
                "projection": false
              },
              {
                "year": 2014,
                "value": -7,
                "projection": false
              },
              {
                "year": 2015,
                "value": -5.7,
                "projection": false
              },
              {
                "year": 2016,
                "value": -4.2,
                "projection": false
              },
              {
                "year": 2017,
                "value": -7.3,
                "projection": false
              },
              {
                "year": 2018,
                "value": -8.8,
                "projection": false
              },
              {
                "year": 2019,
                "value": -7.9,
                "projection": false
              },
              {
                "year": 2020,
                "value": -11.9,
                "projection": false
              },
              {
                "year": 2021,
                "value": -12.1,
                "projection": false
              },
              {
                "year": 2022,
                "value": -19.9,
                "projection": false
              },
              {
                "year": 2023,
                "value": -19.8,
                "projection": false
              },
              {
                "year": 2024,
                "value": -11.3,
                "projection": false
              },
              {
                "year": 2025,
                "value": -5.6,
                "projection": false
              },
              {
                "year": 2026,
                "value": -6.2,
                "projection": true
              },
              {
                "year": 2027,
                "value": -5.8,
                "projection": true
              },
              {
                "year": 2028,
                "value": -5.7,
                "projection": true
              },
              {
                "year": 2029,
                "value": -5.6,
                "projection": true
              },
              {
                "year": 2030,
                "value": -5.5,
                "projection": true
              },
              {
                "year": 2031,
                "value": -5.3,
                "projection": true
              }
            ]
          },
          "fiscalBalance": {
            "value": -6.7,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1994,
                "value": 5.9,
                "projection": false
              },
              {
                "year": 1995,
                "value": 2.4,
                "projection": false
              },
              {
                "year": 1996,
                "value": 0.9,
                "projection": false
              },
              {
                "year": 1997,
                "value": 1,
                "projection": false
              },
              {
                "year": 1998,
                "value": 0.9,
                "projection": false
              },
              {
                "year": 1999,
                "value": -0.6,
                "projection": false
              },
              {
                "year": 2000,
                "value": 0.8,
                "projection": false
              },
              {
                "year": 2001,
                "value": -1.4,
                "projection": false
              },
              {
                "year": 2002,
                "value": 0.2,
                "projection": false
              },
              {
                "year": 2003,
                "value": -0.5,
                "projection": false
              },
              {
                "year": 2004,
                "value": 0.2,
                "projection": false
              },
              {
                "year": 2005,
                "value": -0.3,
                "projection": false
              },
              {
                "year": 2006,
                "value": -3.7,
                "projection": false
              },
              {
                "year": 2007,
                "value": -2.8,
                "projection": false
              },
              {
                "year": 2008,
                "value": -3.5,
                "projection": false
              },
              {
                "year": 2009,
                "value": -3.7,
                "projection": false
              },
              {
                "year": 2010,
                "value": -3.9,
                "projection": false
              },
              {
                "year": 2011,
                "value": -4.9,
                "projection": false
              },
              {
                "year": 2012,
                "value": -4.2,
                "projection": false
              },
              {
                "year": 2013,
                "value": -4.3,
                "projection": false
              },
              {
                "year": 2014,
                "value": -3.9,
                "projection": false
              },
              {
                "year": 2015,
                "value": -3.7,
                "projection": false
              },
              {
                "year": 2016,
                "value": -3.3,
                "projection": false
              },
              {
                "year": 2017,
                "value": -3,
                "projection": false
              },
              {
                "year": 2018,
                "value": -3.7,
                "projection": false
              },
              {
                "year": 2019,
                "value": -13.9,
                "projection": false
              },
              {
                "year": 2020,
                "value": -9.6,
                "projection": false
              },
              {
                "year": 2021,
                "value": -13.7,
                "projection": false
              },
              {
                "year": 2022,
                "value": -16.1,
                "projection": false
              },
              {
                "year": 2023,
                "value": -14.8,
                "projection": false
              },
              {
                "year": 2024,
                "value": -13.4,
                "projection": false
              },
              {
                "year": 2025,
                "value": -7.9,
                "projection": false
              },
              {
                "year": 2026,
                "value": -6.7,
                "projection": true
              },
              {
                "year": 2027,
                "value": -5.7,
                "projection": true
              },
              {
                "year": 2028,
                "value": -4,
                "projection": true
              },
              {
                "year": 2029,
                "value": -3,
                "projection": true
              },
              {
                "year": 2030,
                "value": -3,
                "projection": true
              },
              {
                "year": 2031,
                "value": -3,
                "projection": true
              }
            ]
          },
          "governmentDebt": {
            "value": 132.3,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1996,
                "value": 0.1,
                "projection": false
              },
              {
                "year": 1997,
                "value": 67.8,
                "projection": false
              },
              {
                "year": 1998,
                "value": 18.8,
                "projection": false
              },
              {
                "year": 1999,
                "value": 15,
                "projection": false
              },
              {
                "year": 2000,
                "value": 57.5,
                "projection": false
              },
              {
                "year": 2001,
                "value": 53.2,
                "projection": false
              },
              {
                "year": 2002,
                "value": 52,
                "projection": false
              },
              {
                "year": 2003,
                "value": 42.9,
                "projection": false
              },
              {
                "year": 2004,
                "value": 38,
                "projection": false
              },
              {
                "year": 2005,
                "value": 36.1,
                "projection": false
              },
              {
                "year": 2006,
                "value": 17.5,
                "projection": false
              },
              {
                "year": 2007,
                "value": 19,
                "projection": false
              },
              {
                "year": 2008,
                "value": 19.1,
                "projection": false
              },
              {
                "year": 2009,
                "value": 29.9,
                "projection": false
              },
              {
                "year": 2010,
                "value": 34.6,
                "projection": false
              },
              {
                "year": 2011,
                "value": 32.9,
                "projection": false
              },
              {
                "year": 2012,
                "value": 34.5,
                "projection": false
              },
              {
                "year": 2013,
                "value": 36.9,
                "projection": false
              },
              {
                "year": 2014,
                "value": 42.4,
                "projection": false
              },
              {
                "year": 2015,
                "value": 44.5,
                "projection": false
              },
              {
                "year": 2016,
                "value": 47.5,
                "projection": false
              },
              {
                "year": 2017,
                "value": 61.1,
                "projection": false
              },
              {
                "year": 2018,
                "value": 61.5,
                "projection": false
              },
              {
                "year": 2019,
                "value": 81.5,
                "projection": false
              },
              {
                "year": 2020,
                "value": 90.1,
                "projection": false
              },
              {
                "year": 2021,
                "value": 98.7,
                "projection": false
              },
              {
                "year": 2022,
                "value": 104.7,
                "projection": false
              },
              {
                "year": 2023,
                "value": 118.4,
                "projection": false
              },
              {
                "year": 2024,
                "value": 132.4,
                "projection": false
              },
              {
                "year": 2025,
                "value": 130.2,
                "projection": false
              },
              {
                "year": 2026,
                "value": 132.3,
                "projection": true
              },
              {
                "year": 2027,
                "value": 133.4,
                "projection": true
              },
              {
                "year": 2028,
                "value": 132,
                "projection": true
              },
              {
                "year": 2029,
                "value": 130.5,
                "projection": true
              },
              {
                "year": 2030,
                "value": 126,
                "projection": true
              },
              {
                "year": 2031,
                "value": 121.4,
                "projection": true
              }
            ]
          }
        }
      },
      "worldBank": {
        "indicators": {
          "externalDebtGni": {
            "value": 150.690164087921,
            "year": 2024,
            "unit": "percent",
            "series": [
              {
                "value": 60.4794401983364,
                "year": 2015,
                "projection": false
              },
              {
                "value": 61.7783390785996,
                "year": 2016,
                "projection": false
              },
              {
                "value": 69.7334917042792,
                "year": 2017,
                "projection": false
              },
              {
                "value": 88.9673360108035,
                "year": 2018,
                "projection": false
              },
              {
                "value": 91.3064501670604,
                "year": 2019,
                "projection": false
              },
              {
                "value": 107.855994435083,
                "year": 2020,
                "projection": false
              },
              {
                "value": 114.383429271668,
                "year": 2021,
                "projection": false
              },
              {
                "value": 132.297928341272,
                "year": 2022,
                "projection": false
              },
              {
                "value": 153.247351028687,
                "year": 2023,
                "projection": false
              },
              {
                "value": 150.690164087921,
                "year": 2024,
                "projection": false
              }
            ]
          },
          "debtServiceExports": {
            "value": 41.8050042927812,
            "year": 2024,
            "unit": "percent",
            "series": [
              {
                "value": 23.2491286848819,
                "year": 2015,
                "projection": false
              },
              {
                "value": 9.50473723357387,
                "year": 2016,
                "projection": false
              },
              {
                "value": 12.4049686915157,
                "year": 2017,
                "projection": false
              },
              {
                "value": 14.0073823024885,
                "year": 2018,
                "projection": false
              },
              {
                "value": 19.7721163198097,
                "year": 2019,
                "projection": false
              },
              {
                "value": 23.3754090393699,
                "year": 2020,
                "projection": false
              },
              {
                "value": 20.7032224928195,
                "year": 2021,
                "projection": false
              },
              {
                "value": 18.0771808789291,
                "year": 2022,
                "projection": false
              },
              {
                "value": 30.2398405889279,
                "year": 2023,
                "projection": false
              },
              {
                "value": 41.8050042927812,
                "year": 2024,
                "projection": false
              }
            ]
          }
        }
      }
    },
    "cotedivoire": {
      "imf": {
        "indicators": {
          "realGdpGrowth": {
            "value": 6.2,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1980,
                "value": 5.2,
                "projection": false
              },
              {
                "year": 1981,
                "value": 3.5,
                "projection": false
              },
              {
                "year": 1982,
                "value": 0.2,
                "projection": false
              },
              {
                "year": 1983,
                "value": -2.5,
                "projection": false
              },
              {
                "year": 1984,
                "value": -2,
                "projection": false
              },
              {
                "year": 1985,
                "value": 3.6,
                "projection": false
              },
              {
                "year": 1986,
                "value": 4.8,
                "projection": false
              },
              {
                "year": 1987,
                "value": -0.5,
                "projection": false
              },
              {
                "year": 1988,
                "value": 1.1,
                "projection": false
              },
              {
                "year": 1989,
                "value": 2.9,
                "projection": false
              },
              {
                "year": 1990,
                "value": -1.1,
                "projection": false
              },
              {
                "year": 1991,
                "value": 0,
                "projection": false
              },
              {
                "year": 1992,
                "value": -0.2,
                "projection": false
              },
              {
                "year": 1993,
                "value": -0.2,
                "projection": false
              },
              {
                "year": 1994,
                "value": 0.2,
                "projection": false
              },
              {
                "year": 1995,
                "value": 5.6,
                "projection": false
              },
              {
                "year": 1996,
                "value": 8.1,
                "projection": false
              },
              {
                "year": 1997,
                "value": 5.7,
                "projection": false
              },
              {
                "year": 1998,
                "value": 4.9,
                "projection": false
              },
              {
                "year": 1999,
                "value": 1.6,
                "projection": false
              },
              {
                "year": 2000,
                "value": -2.1,
                "projection": false
              },
              {
                "year": 2001,
                "value": 0.1,
                "projection": false
              },
              {
                "year": 2002,
                "value": -1.7,
                "projection": false
              },
              {
                "year": 2003,
                "value": -1.4,
                "projection": false
              },
              {
                "year": 2004,
                "value": 1.2,
                "projection": false
              },
              {
                "year": 2005,
                "value": 1.7,
                "projection": false
              },
              {
                "year": 2006,
                "value": 1.5,
                "projection": false
              },
              {
                "year": 2007,
                "value": 1.8,
                "projection": false
              },
              {
                "year": 2008,
                "value": 2.5,
                "projection": false
              },
              {
                "year": 2009,
                "value": 3.3,
                "projection": false
              },
              {
                "year": 2010,
                "value": 2,
                "projection": false
              },
              {
                "year": 2011,
                "value": -4.9,
                "projection": false
              },
              {
                "year": 2012,
                "value": 10.9,
                "projection": false
              },
              {
                "year": 2013,
                "value": 9.3,
                "projection": false
              },
              {
                "year": 2014,
                "value": 8.8,
                "projection": false
              },
              {
                "year": 2015,
                "value": 8.8,
                "projection": false
              },
              {
                "year": 2016,
                "value": 7.2,
                "projection": false
              },
              {
                "year": 2017,
                "value": 7.4,
                "projection": false
              },
              {
                "year": 2018,
                "value": 4.8,
                "projection": false
              },
              {
                "year": 2019,
                "value": 6.7,
                "projection": false
              },
              {
                "year": 2020,
                "value": 0.7,
                "projection": false
              },
              {
                "year": 2021,
                "value": 7.1,
                "projection": false
              },
              {
                "year": 2022,
                "value": 6.4,
                "projection": false
              },
              {
                "year": 2023,
                "value": 6.6,
                "projection": false
              },
              {
                "year": 2024,
                "value": 6,
                "projection": false
              },
              {
                "year": 2025,
                "value": 6.5,
                "projection": false
              },
              {
                "year": 2026,
                "value": 6.2,
                "projection": true
              },
              {
                "year": 2027,
                "value": 6.3,
                "projection": true
              },
              {
                "year": 2028,
                "value": 6.6,
                "projection": true
              },
              {
                "year": 2029,
                "value": 7,
                "projection": true
              },
              {
                "year": 2030,
                "value": 6.8,
                "projection": true
              },
              {
                "year": 2031,
                "value": 6.5,
                "projection": true
              }
            ]
          },
          "inflation": {
            "value": 1.8,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1980,
                "value": 8.8,
                "projection": false
              },
              {
                "year": 1981,
                "value": 8.7,
                "projection": false
              },
              {
                "year": 1982,
                "value": 7.4,
                "projection": false
              },
              {
                "year": 1983,
                "value": 5.9,
                "projection": false
              },
              {
                "year": 1984,
                "value": 4.3,
                "projection": false
              },
              {
                "year": 1985,
                "value": 1.8,
                "projection": false
              },
              {
                "year": 1986,
                "value": 6.8,
                "projection": false
              },
              {
                "year": 1987,
                "value": 7,
                "projection": false
              },
              {
                "year": 1988,
                "value": 6.9,
                "projection": false
              },
              {
                "year": 1989,
                "value": 1,
                "projection": false
              },
              {
                "year": 1990,
                "value": -0.7,
                "projection": false
              },
              {
                "year": 1991,
                "value": 1.6,
                "projection": false
              },
              {
                "year": 1992,
                "value": 4.2,
                "projection": false
              },
              {
                "year": 1993,
                "value": 2.1,
                "projection": false
              },
              {
                "year": 1994,
                "value": 26,
                "projection": false
              },
              {
                "year": 1995,
                "value": 14.1,
                "projection": false
              },
              {
                "year": 1996,
                "value": 2.7,
                "projection": false
              },
              {
                "year": 1997,
                "value": 6.3,
                "projection": false
              },
              {
                "year": 1998,
                "value": 4.5,
                "projection": false
              },
              {
                "year": 1999,
                "value": 0.7,
                "projection": false
              },
              {
                "year": 2000,
                "value": 2.5,
                "projection": false
              },
              {
                "year": 2001,
                "value": 4.4,
                "projection": false
              },
              {
                "year": 2002,
                "value": 3.1,
                "projection": false
              },
              {
                "year": 2003,
                "value": 3.3,
                "projection": false
              },
              {
                "year": 2004,
                "value": 1.5,
                "projection": false
              },
              {
                "year": 2005,
                "value": 3.9,
                "projection": false
              },
              {
                "year": 2006,
                "value": 2.5,
                "projection": false
              },
              {
                "year": 2007,
                "value": 1.9,
                "projection": false
              },
              {
                "year": 2008,
                "value": 1.7,
                "projection": false
              },
              {
                "year": 2009,
                "value": 0.5,
                "projection": false
              },
              {
                "year": 2010,
                "value": 1.8,
                "projection": false
              },
              {
                "year": 2011,
                "value": 4.9,
                "projection": false
              },
              {
                "year": 2012,
                "value": 1.3,
                "projection": false
              },
              {
                "year": 2013,
                "value": 2.6,
                "projection": false
              },
              {
                "year": 2014,
                "value": 0.5,
                "projection": false
              },
              {
                "year": 2015,
                "value": 1.1,
                "projection": false
              },
              {
                "year": 2016,
                "value": 0.8,
                "projection": false
              },
              {
                "year": 2017,
                "value": 0.7,
                "projection": false
              },
              {
                "year": 2018,
                "value": 0.6,
                "projection": false
              },
              {
                "year": 2019,
                "value": 0.8,
                "projection": false
              },
              {
                "year": 2020,
                "value": 2.3,
                "projection": false
              },
              {
                "year": 2021,
                "value": 4.2,
                "projection": false
              },
              {
                "year": 2022,
                "value": 5.2,
                "projection": false
              },
              {
                "year": 2023,
                "value": 4.4,
                "projection": false
              },
              {
                "year": 2024,
                "value": 3.4,
                "projection": false
              },
              {
                "year": 2025,
                "value": 0.1,
                "projection": false
              },
              {
                "year": 2026,
                "value": 1.8,
                "projection": true
              },
              {
                "year": 2027,
                "value": 2,
                "projection": true
              },
              {
                "year": 2028,
                "value": 2,
                "projection": true
              },
              {
                "year": 2029,
                "value": 2,
                "projection": true
              },
              {
                "year": 2030,
                "value": 2,
                "projection": true
              },
              {
                "year": 2031,
                "value": 2,
                "projection": true
              }
            ]
          },
          "currentAccount": {
            "value": -1.1,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1980,
                "value": -13.2,
                "projection": false
              },
              {
                "year": 1981,
                "value": -12.3,
                "projection": false
              },
              {
                "year": 1982,
                "value": -9.8,
                "projection": false
              },
              {
                "year": 1983,
                "value": -10,
                "projection": false
              },
              {
                "year": 1984,
                "value": -0.8,
                "projection": false
              },
              {
                "year": 1985,
                "value": 0.7,
                "projection": false
              },
              {
                "year": 1986,
                "value": -2.3,
                "projection": false
              },
              {
                "year": 1987,
                "value": -6.9,
                "projection": false
              },
              {
                "year": 1988,
                "value": -8.8,
                "projection": false
              },
              {
                "year": 1989,
                "value": -7.2,
                "projection": false
              },
              {
                "year": 1990,
                "value": -8.1,
                "projection": false
              },
              {
                "year": 1991,
                "value": -7.4,
                "projection": false
              },
              {
                "year": 1992,
                "value": -6.6,
                "projection": false
              },
              {
                "year": 1993,
                "value": -5.8,
                "projection": false
              },
              {
                "year": 1994,
                "value": -0.1,
                "projection": false
              },
              {
                "year": 1995,
                "value": -3.2,
                "projection": false
              },
              {
                "year": 1996,
                "value": -1,
                "projection": false
              },
              {
                "year": 1997,
                "value": -1,
                "projection": false
              },
              {
                "year": 1998,
                "value": -1.7,
                "projection": false
              },
              {
                "year": 1999,
                "value": -0.7,
                "projection": false
              },
              {
                "year": 2000,
                "value": -1.6,
                "projection": false
              },
              {
                "year": 2001,
                "value": -0.4,
                "projection": false
              },
              {
                "year": 2002,
                "value": 4.5,
                "projection": false
              },
              {
                "year": 2003,
                "value": 1.4,
                "projection": false
              },
              {
                "year": 2004,
                "value": 1.1,
                "projection": false
              },
              {
                "year": 2005,
                "value": 0.2,
                "projection": false
              },
              {
                "year": 2006,
                "value": 1.9,
                "projection": false
              },
              {
                "year": 2007,
                "value": -0.5,
                "projection": false
              },
              {
                "year": 2008,
                "value": 1.3,
                "projection": false
              },
              {
                "year": 2009,
                "value": 4.8,
                "projection": false
              },
              {
                "year": 2010,
                "value": 1.4,
                "projection": false
              },
              {
                "year": 2011,
                "value": 7.5,
                "projection": false
              },
              {
                "year": 2012,
                "value": -0.9,
                "projection": false
              },
              {
                "year": 2013,
                "value": -1,
                "projection": false
              },
              {
                "year": 2014,
                "value": 1,
                "projection": false
              },
              {
                "year": 2015,
                "value": -0.4,
                "projection": false
              },
              {
                "year": 2016,
                "value": -0.9,
                "projection": false
              },
              {
                "year": 2017,
                "value": -2,
                "projection": false
              },
              {
                "year": 2018,
                "value": -3.9,
                "projection": false
              },
              {
                "year": 2019,
                "value": -2.2,
                "projection": false
              },
              {
                "year": 2020,
                "value": -3.1,
                "projection": false
              },
              {
                "year": 2021,
                "value": -3.9,
                "projection": false
              },
              {
                "year": 2022,
                "value": -7.6,
                "projection": false
              },
              {
                "year": 2023,
                "value": -8,
                "projection": false
              },
              {
                "year": 2024,
                "value": -4.5,
                "projection": false
              },
              {
                "year": 2025,
                "value": -1.1,
                "projection": false
              },
              {
                "year": 2026,
                "value": -1.1,
                "projection": true
              },
              {
                "year": 2027,
                "value": -3.1,
                "projection": true
              },
              {
                "year": 2028,
                "value": -3.6,
                "projection": true
              },
              {
                "year": 2029,
                "value": -2.7,
                "projection": true
              },
              {
                "year": 2030,
                "value": -2.6,
                "projection": true
              },
              {
                "year": 2031,
                "value": -2.5,
                "projection": true
              }
            ]
          },
          "fiscalBalance": {
            "value": -3,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1997,
                "value": -0.7,
                "projection": false
              },
              {
                "year": 1998,
                "value": -0.7,
                "projection": false
              },
              {
                "year": 1999,
                "value": -1.3,
                "projection": false
              },
              {
                "year": 2000,
                "value": -0.8,
                "projection": false
              },
              {
                "year": 2001,
                "value": 0.7,
                "projection": false
              },
              {
                "year": 2002,
                "value": -0.6,
                "projection": false
              },
              {
                "year": 2003,
                "value": -1.3,
                "projection": false
              },
              {
                "year": 2004,
                "value": -1,
                "projection": false
              },
              {
                "year": 2005,
                "value": -1,
                "projection": false
              },
              {
                "year": 2006,
                "value": -1,
                "projection": false
              },
              {
                "year": 2007,
                "value": -0.4,
                "projection": false
              },
              {
                "year": 2008,
                "value": -0.2,
                "projection": false
              },
              {
                "year": 2009,
                "value": -1,
                "projection": false
              },
              {
                "year": 2010,
                "value": -1.3,
                "projection": false
              },
              {
                "year": 2011,
                "value": -2.9,
                "projection": false
              },
              {
                "year": 2012,
                "value": -2.3,
                "projection": false
              },
              {
                "year": 2013,
                "value": -1.6,
                "projection": false
              },
              {
                "year": 2014,
                "value": -1.6,
                "projection": false
              },
              {
                "year": 2015,
                "value": -2,
                "projection": false
              },
              {
                "year": 2016,
                "value": -3,
                "projection": false
              },
              {
                "year": 2017,
                "value": -3.3,
                "projection": false
              },
              {
                "year": 2018,
                "value": -2.9,
                "projection": false
              },
              {
                "year": 2019,
                "value": -2.2,
                "projection": false
              },
              {
                "year": 2020,
                "value": -5.4,
                "projection": false
              },
              {
                "year": 2021,
                "value": -4.9,
                "projection": false
              },
              {
                "year": 2022,
                "value": -6.7,
                "projection": false
              },
              {
                "year": 2023,
                "value": -5.1,
                "projection": false
              },
              {
                "year": 2024,
                "value": -4,
                "projection": false
              },
              {
                "year": 2025,
                "value": -3,
                "projection": false
              },
              {
                "year": 2026,
                "value": -3,
                "projection": true
              },
              {
                "year": 2027,
                "value": -3,
                "projection": true
              },
              {
                "year": 2028,
                "value": -3,
                "projection": true
              },
              {
                "year": 2029,
                "value": -3,
                "projection": true
              },
              {
                "year": 2030,
                "value": -3,
                "projection": true
              },
              {
                "year": 2031,
                "value": -3,
                "projection": true
              }
            ]
          },
          "governmentDebt": {
            "value": 55.1,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1997,
                "value": 84.2,
                "projection": false
              },
              {
                "year": 1998,
                "value": 75.2,
                "projection": false
              },
              {
                "year": 1999,
                "value": 78,
                "projection": false
              },
              {
                "year": 2000,
                "value": 74,
                "projection": false
              },
              {
                "year": 2001,
                "value": 71.2,
                "projection": false
              },
              {
                "year": 2002,
                "value": 63,
                "projection": false
              },
              {
                "year": 2003,
                "value": 56.4,
                "projection": false
              },
              {
                "year": 2004,
                "value": 56.7,
                "projection": false
              },
              {
                "year": 2005,
                "value": 58.2,
                "projection": false
              },
              {
                "year": 2006,
                "value": 57.5,
                "projection": false
              },
              {
                "year": 2007,
                "value": 53.5,
                "projection": false
              },
              {
                "year": 2008,
                "value": 51.2,
                "projection": false
              },
              {
                "year": 2009,
                "value": 46.5,
                "projection": false
              },
              {
                "year": 2010,
                "value": 45.6,
                "projection": false
              },
              {
                "year": 2011,
                "value": 50,
                "projection": false
              },
              {
                "year": 2012,
                "value": 24.7,
                "projection": false
              },
              {
                "year": 2013,
                "value": 24.6,
                "projection": false
              },
              {
                "year": 2014,
                "value": 26.7,
                "projection": false
              },
              {
                "year": 2015,
                "value": 29.2,
                "projection": false
              },
              {
                "year": 2016,
                "value": 31.1,
                "projection": false
              },
              {
                "year": 2017,
                "value": 32.6,
                "projection": false
              },
              {
                "year": 2018,
                "value": 35.3,
                "projection": false
              },
              {
                "year": 2019,
                "value": 37.2,
                "projection": false
              },
              {
                "year": 2020,
                "value": 46.3,
                "projection": false
              },
              {
                "year": 2021,
                "value": 50.2,
                "projection": false
              },
              {
                "year": 2022,
                "value": 56,
                "projection": false
              },
              {
                "year": 2023,
                "value": 56.7,
                "projection": false
              },
              {
                "year": 2024,
                "value": 59.5,
                "projection": false
              },
              {
                "year": 2025,
                "value": 56.3,
                "projection": false
              },
              {
                "year": 2026,
                "value": 55.1,
                "projection": true
              },
              {
                "year": 2027,
                "value": 54,
                "projection": true
              },
              {
                "year": 2028,
                "value": 52.3,
                "projection": true
              },
              {
                "year": 2029,
                "value": 51.2,
                "projection": true
              },
              {
                "year": 2030,
                "value": 49.8,
                "projection": true
              },
              {
                "year": 2031,
                "value": 48.6,
                "projection": true
              }
            ]
          }
        }
      },
      "worldBank": {
        "indicators": {
          "externalDebtGni": {
            "value": 48.8304044647452,
            "year": 2024,
            "unit": "percent",
            "series": [
              {
                "value": 25.4109025665834,
                "year": 2015,
                "projection": false
              },
              {
                "value": 24.2006866364198,
                "year": 2016,
                "projection": false
              },
              {
                "value": 26.3779718245256,
                "year": 2017,
                "projection": false
              },
              {
                "value": 28.4634771423081,
                "year": 2018,
                "projection": false
              },
              {
                "value": 33.7779620972679,
                "year": 2019,
                "projection": false
              },
              {
                "value": 41.0439427377816,
                "year": 2020,
                "projection": false
              },
              {
                "value": 42.1962341583395,
                "year": 2021,
                "projection": false
              },
              {
                "value": 46.0823328796999,
                "year": 2022,
                "projection": false
              },
              {
                "value": 47.4826411328516,
                "year": 2023,
                "projection": false
              },
              {
                "value": 48.8304044647452,
                "year": 2024,
                "projection": false
              }
            ]
          },
          "debtServiceExports": {
            "value": 24.7283736134001,
            "year": 2024,
            "unit": "percent",
            "series": [
              {
                "value": 6.35864533484013,
                "year": 2015,
                "projection": false
              },
              {
                "value": 12.9728634799211,
                "year": 2016,
                "projection": false
              },
              {
                "value": 17.0951138013737,
                "year": 2017,
                "projection": false
              },
              {
                "value": 12.3155204491884,
                "year": 2018,
                "projection": false
              },
              {
                "value": 21.1857500643047,
                "year": 2019,
                "projection": false
              },
              {
                "value": 17.9986903027955,
                "year": 2020,
                "projection": false
              },
              {
                "value": 10.3219763867472,
                "year": 2021,
                "projection": false
              },
              {
                "value": 12.9116655451909,
                "year": 2022,
                "projection": false
              },
              {
                "value": 20.0502096444777,
                "year": 2023,
                "projection": false
              },
              {
                "value": 24.7283736134001,
                "year": 2024,
                "projection": false
              }
            ]
          }
        }
      },
      "trade": {
        "year": 2024,
        "exportsTotal": 26046254420,
        "importsTotal": 18563443290,
        "topExports": [
          {
            "name": "Gold",
            "value": 5854483246,
            "share": 22.477255852590265
          },
          {
            "name": "Cocoa Beans",
            "value": 4958709283,
            "share": 19.038089711633862
          },
          {
            "name": "Rubber",
            "value": 2714882817,
            "share": 10.423313744932697
          },
          {
            "name": "Cocoa Paste",
            "value": 2108487655,
            "share": 8.095166471924527
          },
          {
            "name": "Refined Petroleum",
            "value": 1982189336,
            "share": 7.610266351686816
          }
        ],
        "topImports": [
          {
            "name": "Crude Petroleum",
            "value": 2443594805,
            "share": 13.16347816957185
          },
          {
            "name": "Refined Petroleum",
            "value": 1622577048,
            "share": 8.740711637662994
          },
          {
            "name": "Rice",
            "value": 1117516517,
            "share": 6.0199850832738475
          },
          {
            "name": "Non-fillet Frozen Fish",
            "value": 864311232,
            "share": 4.655985522177335
          },
          {
            "name": "Cars",
            "value": 425941951,
            "share": 2.294520172501898
          }
        ],
        "exportPartners": [
          {
            "name": "Switzerland",
            "value": 5504336341,
            "share": 21.13292856716248
          },
          {
            "name": "Netherlands",
            "value": 2738954091,
            "share": 10.515731155942538
          },
          {
            "name": "Mali",
            "value": 1669188129,
            "share": 6.4085534222467295
          },
          {
            "name": "France",
            "value": 1312651278,
            "share": 5.039693066163331
          },
          {
            "name": "United States",
            "value": 1204598640,
            "share": 4.624844020086939
          }
        ],
        "importPartners": [
          {
            "name": "China",
            "value": 3291202031,
            "share": 17.729480353318657
          },
          {
            "name": "Nigeria",
            "value": 2342138537,
            "share": 12.616940189440468
          },
          {
            "name": "France",
            "value": 1301426532,
            "share": 7.010695761928336
          },
          {
            "name": "Belgium",
            "value": 884912011,
            "share": 4.76696051037415
          },
          {
            "name": "India",
            "value": 879599204,
            "share": 4.738340782250424
          }
        ]
      }
    },
    "benin": {
      "imf": {
        "indicators": {
          "realGdpGrowth": {
            "value": 7,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1980,
                "value": 9.3,
                "projection": false
              },
              {
                "year": 1981,
                "value": 1.9,
                "projection": false
              },
              {
                "year": 1982,
                "value": 1.7,
                "projection": false
              },
              {
                "year": 1983,
                "value": -2,
                "projection": false
              },
              {
                "year": 1984,
                "value": 0.4,
                "projection": false
              },
              {
                "year": 1985,
                "value": 4.3,
                "projection": false
              },
              {
                "year": 1986,
                "value": 2.7,
                "projection": false
              },
              {
                "year": 1987,
                "value": -2.1,
                "projection": false
              },
              {
                "year": 1988,
                "value": 3.4,
                "projection": false
              },
              {
                "year": 1989,
                "value": -2.8,
                "projection": false
              },
              {
                "year": 1990,
                "value": 9,
                "projection": false
              },
              {
                "year": 1991,
                "value": 4.2,
                "projection": false
              },
              {
                "year": 1992,
                "value": 3,
                "projection": false
              },
              {
                "year": 1993,
                "value": 5.8,
                "projection": false
              },
              {
                "year": 1994,
                "value": 2,
                "projection": false
              },
              {
                "year": 1995,
                "value": 6,
                "projection": false
              },
              {
                "year": 1996,
                "value": 4.3,
                "projection": false
              },
              {
                "year": 1997,
                "value": 5.7,
                "projection": false
              },
              {
                "year": 1998,
                "value": 4,
                "projection": false
              },
              {
                "year": 1999,
                "value": 4.4,
                "projection": false
              },
              {
                "year": 2000,
                "value": 5.9,
                "projection": false
              },
              {
                "year": 2001,
                "value": 5.3,
                "projection": false
              },
              {
                "year": 2002,
                "value": 4.6,
                "projection": false
              },
              {
                "year": 2003,
                "value": 3.4,
                "projection": false
              },
              {
                "year": 2004,
                "value": 4.4,
                "projection": false
              },
              {
                "year": 2005,
                "value": 1.7,
                "projection": false
              },
              {
                "year": 2006,
                "value": 3.9,
                "projection": false
              },
              {
                "year": 2007,
                "value": 6,
                "projection": false
              },
              {
                "year": 2008,
                "value": 4.9,
                "projection": false
              },
              {
                "year": 2009,
                "value": 2.3,
                "projection": false
              },
              {
                "year": 2010,
                "value": 2.1,
                "projection": false
              },
              {
                "year": 2011,
                "value": 3,
                "projection": false
              },
              {
                "year": 2012,
                "value": 4.8,
                "projection": false
              },
              {
                "year": 2013,
                "value": 7.2,
                "projection": false
              },
              {
                "year": 2014,
                "value": 6.4,
                "projection": false
              },
              {
                "year": 2015,
                "value": 1.8,
                "projection": false
              },
              {
                "year": 2016,
                "value": 3.3,
                "projection": false
              },
              {
                "year": 2017,
                "value": 5.6,
                "projection": false
              },
              {
                "year": 2018,
                "value": 6.6,
                "projection": false
              },
              {
                "year": 2019,
                "value": 7.1,
                "projection": false
              },
              {
                "year": 2020,
                "value": 3.8,
                "projection": false
              },
              {
                "year": 2021,
                "value": 7.2,
                "projection": false
              },
              {
                "year": 2022,
                "value": 6.3,
                "projection": false
              },
              {
                "year": 2023,
                "value": 6.4,
                "projection": false
              },
              {
                "year": 2024,
                "value": 7.5,
                "projection": false
              },
              {
                "year": 2025,
                "value": 7.5,
                "projection": false
              },
              {
                "year": 2026,
                "value": 7,
                "projection": true
              },
              {
                "year": 2027,
                "value": 6.7,
                "projection": true
              },
              {
                "year": 2028,
                "value": 6.6,
                "projection": true
              },
              {
                "year": 2029,
                "value": 6.5,
                "projection": true
              },
              {
                "year": 2030,
                "value": 6,
                "projection": true
              },
              {
                "year": 2031,
                "value": 6,
                "projection": true
              }
            ]
          },
          "inflation": {
            "value": 2,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1980,
                "value": 9.6,
                "projection": false
              },
              {
                "year": 1981,
                "value": 0.8,
                "projection": false
              },
              {
                "year": 1982,
                "value": 4.1,
                "projection": false
              },
              {
                "year": 1983,
                "value": -6.1,
                "projection": false
              },
              {
                "year": 1984,
                "value": 10.3,
                "projection": false
              },
              {
                "year": 1985,
                "value": 1.2,
                "projection": false
              },
              {
                "year": 1986,
                "value": 0.4,
                "projection": false
              },
              {
                "year": 1987,
                "value": -1.3,
                "projection": false
              },
              {
                "year": 1988,
                "value": 3.4,
                "projection": false
              },
              {
                "year": 1989,
                "value": -0.2,
                "projection": false
              },
              {
                "year": 1990,
                "value": 1.1,
                "projection": false
              },
              {
                "year": 1991,
                "value": 2.1,
                "projection": false
              },
              {
                "year": 1992,
                "value": 5.9,
                "projection": false
              },
              {
                "year": 1993,
                "value": 0.4,
                "projection": false
              },
              {
                "year": 1994,
                "value": 38.5,
                "projection": false
              },
              {
                "year": 1995,
                "value": 14.5,
                "projection": false
              },
              {
                "year": 1996,
                "value": 4.9,
                "projection": false
              },
              {
                "year": 1997,
                "value": 3.8,
                "projection": false
              },
              {
                "year": 1998,
                "value": 5.8,
                "projection": false
              },
              {
                "year": 1999,
                "value": 0.3,
                "projection": false
              },
              {
                "year": 2000,
                "value": 4.2,
                "projection": false
              },
              {
                "year": 2001,
                "value": 4,
                "projection": false
              },
              {
                "year": 2002,
                "value": 2.4,
                "projection": false
              },
              {
                "year": 2003,
                "value": 1.5,
                "projection": false
              },
              {
                "year": 2004,
                "value": 0.9,
                "projection": false
              },
              {
                "year": 2005,
                "value": 5.4,
                "projection": false
              },
              {
                "year": 2006,
                "value": 3.8,
                "projection": false
              },
              {
                "year": 2007,
                "value": 1.3,
                "projection": false
              },
              {
                "year": 2008,
                "value": 7.4,
                "projection": false
              },
              {
                "year": 2009,
                "value": 0.9,
                "projection": false
              },
              {
                "year": 2010,
                "value": 2.1,
                "projection": false
              },
              {
                "year": 2011,
                "value": 2.7,
                "projection": false
              },
              {
                "year": 2012,
                "value": 6.7,
                "projection": false
              },
              {
                "year": 2013,
                "value": 0.4,
                "projection": false
              },
              {
                "year": 2014,
                "value": -0.6,
                "projection": false
              },
              {
                "year": 2015,
                "value": 0.2,
                "projection": false
              },
              {
                "year": 2016,
                "value": -0.8,
                "projection": false
              },
              {
                "year": 2017,
                "value": 1.8,
                "projection": false
              },
              {
                "year": 2018,
                "value": 0.8,
                "projection": false
              },
              {
                "year": 2019,
                "value": -0.9,
                "projection": false
              },
              {
                "year": 2020,
                "value": 3,
                "projection": false
              },
              {
                "year": 2021,
                "value": 1.7,
                "projection": false
              },
              {
                "year": 2022,
                "value": 1.4,
                "projection": false
              },
              {
                "year": 2023,
                "value": 2.7,
                "projection": false
              },
              {
                "year": 2024,
                "value": 1.2,
                "projection": false
              },
              {
                "year": 2025,
                "value": 1.1,
                "projection": false
              },
              {
                "year": 2026,
                "value": 2,
                "projection": true
              },
              {
                "year": 2027,
                "value": 2,
                "projection": true
              },
              {
                "year": 2028,
                "value": 2,
                "projection": true
              },
              {
                "year": 2029,
                "value": 2,
                "projection": true
              },
              {
                "year": 2030,
                "value": 2,
                "projection": true
              },
              {
                "year": 2031,
                "value": 2,
                "projection": true
              }
            ]
          },
          "currentAccount": {
            "value": -5,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1980,
                "value": -4.7,
                "projection": false
              },
              {
                "year": 1981,
                "value": -16.9,
                "projection": false
              },
              {
                "year": 1982,
                "value": -20.9,
                "projection": false
              },
              {
                "year": 1983,
                "value": -11.7,
                "projection": false
              },
              {
                "year": 1984,
                "value": -3.7,
                "projection": false
              },
              {
                "year": 1985,
                "value": -2.6,
                "projection": false
              },
              {
                "year": 1986,
                "value": -2.7,
                "projection": false
              },
              {
                "year": 1987,
                "value": -1.5,
                "projection": false
              },
              {
                "year": 1988,
                "value": -4.5,
                "projection": false
              },
              {
                "year": 1989,
                "value": -0.6,
                "projection": false
              },
              {
                "year": 1990,
                "value": -0.7,
                "projection": false
              },
              {
                "year": 1991,
                "value": -8,
                "projection": false
              },
              {
                "year": 1992,
                "value": -2.4,
                "projection": false
              },
              {
                "year": 1993,
                "value": -1.9,
                "projection": false
              },
              {
                "year": 1994,
                "value": 0.5,
                "projection": false
              },
              {
                "year": 1995,
                "value": -5.6,
                "projection": false
              },
              {
                "year": 1996,
                "value": -1.3,
                "projection": false
              },
              {
                "year": 1997,
                "value": -5,
                "projection": false
              },
              {
                "year": 1998,
                "value": -3.9,
                "projection": false
              },
              {
                "year": 1999,
                "value": -4.2,
                "projection": false
              },
              {
                "year": 2000,
                "value": -2.3,
                "projection": false
              },
              {
                "year": 2001,
                "value": -2,
                "projection": false
              },
              {
                "year": 2002,
                "value": -3.7,
                "projection": false
              },
              {
                "year": 2003,
                "value": -6.2,
                "projection": false
              },
              {
                "year": 2004,
                "value": -4.7,
                "projection": false
              },
              {
                "year": 2005,
                "value": -3.4,
                "projection": false
              },
              {
                "year": 2006,
                "value": -3.1,
                "projection": false
              },
              {
                "year": 2007,
                "value": -6.5,
                "projection": false
              },
              {
                "year": 2008,
                "value": -5.5,
                "projection": false
              },
              {
                "year": 2009,
                "value": -6.7,
                "projection": false
              },
              {
                "year": 2010,
                "value": -5.6,
                "projection": false
              },
              {
                "year": 2011,
                "value": -4.8,
                "projection": false
              },
              {
                "year": 2012,
                "value": -5.2,
                "projection": false
              },
              {
                "year": 2013,
                "value": -5.4,
                "projection": false
              },
              {
                "year": 2014,
                "value": -6.7,
                "projection": false
              },
              {
                "year": 2015,
                "value": -6,
                "projection": false
              },
              {
                "year": 2016,
                "value": -3,
                "projection": false
              },
              {
                "year": 2017,
                "value": -4.2,
                "projection": false
              },
              {
                "year": 2018,
                "value": -4.5,
                "projection": false
              },
              {
                "year": 2019,
                "value": -3.9,
                "projection": false
              },
              {
                "year": 2020,
                "value": -1.7,
                "projection": false
              },
              {
                "year": 2021,
                "value": -4.2,
                "projection": false
              },
              {
                "year": 2022,
                "value": -5.7,
                "projection": false
              },
              {
                "year": 2023,
                "value": -8.2,
                "projection": false
              },
              {
                "year": 2024,
                "value": -6,
                "projection": false
              },
              {
                "year": 2025,
                "value": -5.7,
                "projection": false
              },
              {
                "year": 2026,
                "value": -5,
                "projection": true
              },
              {
                "year": 2027,
                "value": -4.9,
                "projection": true
              },
              {
                "year": 2028,
                "value": -4.6,
                "projection": true
              },
              {
                "year": 2029,
                "value": -4.4,
                "projection": true
              },
              {
                "year": 2030,
                "value": -4.1,
                "projection": true
              },
              {
                "year": 2031,
                "value": -4,
                "projection": true
              }
            ]
          },
          "fiscalBalance": {
            "value": -2.9,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1989,
                "value": 0.9,
                "projection": false
              },
              {
                "year": 1990,
                "value": -3.2,
                "projection": false
              },
              {
                "year": 1991,
                "value": -3.1,
                "projection": false
              },
              {
                "year": 1992,
                "value": -2.7,
                "projection": false
              },
              {
                "year": 1993,
                "value": -0.6,
                "projection": false
              },
              {
                "year": 1994,
                "value": -2.1,
                "projection": false
              },
              {
                "year": 1995,
                "value": -2.6,
                "projection": false
              },
              {
                "year": 1996,
                "value": -0.1,
                "projection": false
              },
              {
                "year": 1997,
                "value": 0.6,
                "projection": false
              },
              {
                "year": 1998,
                "value": 2.5,
                "projection": false
              },
              {
                "year": 1999,
                "value": 1.9,
                "projection": false
              },
              {
                "year": 2000,
                "value": -3.7,
                "projection": false
              },
              {
                "year": 2001,
                "value": -3.3,
                "projection": false
              },
              {
                "year": 2002,
                "value": -3.3,
                "projection": false
              },
              {
                "year": 2003,
                "value": -1.1,
                "projection": false
              },
              {
                "year": 2004,
                "value": -0.7,
                "projection": false
              },
              {
                "year": 2005,
                "value": -1.5,
                "projection": false
              },
              {
                "year": 2006,
                "value": -0.1,
                "projection": false
              },
              {
                "year": 2007,
                "value": 0.2,
                "projection": false
              },
              {
                "year": 2008,
                "value": 0,
                "projection": false
              },
              {
                "year": 2009,
                "value": -2.2,
                "projection": false
              },
              {
                "year": 2010,
                "value": -0.3,
                "projection": false
              },
              {
                "year": 2011,
                "value": -1,
                "projection": false
              },
              {
                "year": 2012,
                "value": -0.2,
                "projection": false
              },
              {
                "year": 2013,
                "value": -1.4,
                "projection": false
              },
              {
                "year": 2014,
                "value": -1.7,
                "projection": false
              },
              {
                "year": 2015,
                "value": -5.6,
                "projection": false
              },
              {
                "year": 2016,
                "value": -4.3,
                "projection": false
              },
              {
                "year": 2017,
                "value": -4.2,
                "projection": false
              },
              {
                "year": 2018,
                "value": -3,
                "projection": false
              },
              {
                "year": 2019,
                "value": -0.5,
                "projection": false
              },
              {
                "year": 2020,
                "value": -4.7,
                "projection": false
              },
              {
                "year": 2021,
                "value": -2.5,
                "projection": false
              },
              {
                "year": 2022,
                "value": -5.6,
                "projection": false
              },
              {
                "year": 2023,
                "value": -4.1,
                "projection": false
              },
              {
                "year": 2024,
                "value": -3.1,
                "projection": false
              },
              {
                "year": 2025,
                "value": -2.9,
                "projection": false
              },
              {
                "year": 2026,
                "value": -2.9,
                "projection": true
              },
              {
                "year": 2027,
                "value": -2.9,
                "projection": true
              },
              {
                "year": 2028,
                "value": -2.9,
                "projection": true
              },
              {
                "year": 2029,
                "value": -2.9,
                "projection": true
              },
              {
                "year": 2030,
                "value": -2.9,
                "projection": true
              },
              {
                "year": 2031,
                "value": -2.9,
                "projection": true
              }
            ]
          },
          "governmentDebt": {
            "value": 57.2,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1998,
                "value": 53.6,
                "projection": false
              },
              {
                "year": 1999,
                "value": 39.4,
                "projection": false
              },
              {
                "year": 2000,
                "value": 39.6,
                "projection": false
              },
              {
                "year": 2001,
                "value": 38,
                "projection": false
              },
              {
                "year": 2002,
                "value": 30.8,
                "projection": false
              },
              {
                "year": 2003,
                "value": 23.4,
                "projection": false
              },
              {
                "year": 2004,
                "value": 21.5,
                "projection": false
              },
              {
                "year": 2005,
                "value": 27,
                "projection": false
              },
              {
                "year": 2006,
                "value": 8.4,
                "projection": false
              },
              {
                "year": 2007,
                "value": 14.3,
                "projection": false
              },
              {
                "year": 2008,
                "value": 18.3,
                "projection": false
              },
              {
                "year": 2009,
                "value": 18.7,
                "projection": false
              },
              {
                "year": 2010,
                "value": 21,
                "projection": false
              },
              {
                "year": 2011,
                "value": 21.9,
                "projection": false
              },
              {
                "year": 2012,
                "value": 19.5,
                "projection": false
              },
              {
                "year": 2013,
                "value": 18.5,
                "projection": false
              },
              {
                "year": 2014,
                "value": 22.3,
                "projection": false
              },
              {
                "year": 2015,
                "value": 30.9,
                "projection": false
              },
              {
                "year": 2016,
                "value": 35.9,
                "projection": false
              },
              {
                "year": 2017,
                "value": 39.4,
                "projection": false
              },
              {
                "year": 2018,
                "value": 40.8,
                "projection": false
              },
              {
                "year": 2019,
                "value": 40.4,
                "projection": false
              },
              {
                "year": 2020,
                "value": 46.1,
                "projection": false
              },
              {
                "year": 2021,
                "value": 55.6,
                "projection": false
              },
              {
                "year": 2022,
                "value": 59.7,
                "projection": false
              },
              {
                "year": 2023,
                "value": 61.3,
                "projection": false
              },
              {
                "year": 2024,
                "value": 60.5,
                "projection": false
              },
              {
                "year": 2025,
                "value": 57.3,
                "projection": false
              },
              {
                "year": 2026,
                "value": 57.2,
                "projection": true
              },
              {
                "year": 2027,
                "value": 55.6,
                "projection": true
              },
              {
                "year": 2028,
                "value": 53.2,
                "projection": true
              },
              {
                "year": 2029,
                "value": 52,
                "projection": true
              },
              {
                "year": 2030,
                "value": 51.1,
                "projection": true
              },
              {
                "year": 2031,
                "value": 50.3,
                "projection": true
              }
            ]
          }
        }
      },
      "worldBank": {
        "indicators": {
          "externalDebtGni": {
            "value": 66.5543408193995,
            "year": 2024,
            "unit": "percent",
            "series": [
              {
                "value": 31.8337413318005,
                "year": 2015,
                "projection": false
              },
              {
                "value": 35.5161661575197,
                "year": 2016,
                "projection": false
              },
              {
                "value": 38.8078591798797,
                "year": 2017,
                "projection": false
              },
              {
                "value": 48.5044887424269,
                "year": 2018,
                "projection": false
              },
              {
                "value": 48.4523108206094,
                "year": 2019,
                "projection": false
              },
              {
                "value": 54.7130728796589,
                "year": 2020,
                "projection": false
              },
              {
                "value": 59.6659345183529,
                "year": 2021,
                "projection": false
              },
              {
                "value": 63.163660783078,
                "year": 2022,
                "projection": false
              },
              {
                "value": 64.4103774213458,
                "year": 2023,
                "projection": false
              },
              {
                "value": 66.5543408193995,
                "year": 2024,
                "projection": false
              }
            ]
          },
          "debtServiceExports": {
            "value": 26.8148132358465,
            "year": 2024,
            "unit": "percent",
            "series": [
              {
                "value": 7.459044594949,
                "year": 2015,
                "projection": false
              },
              {
                "value": 4.1554230958446,
                "year": 2016,
                "projection": false
              },
              {
                "value": 3.69067991082305,
                "year": 2017,
                "projection": false
              },
              {
                "value": 7.85591733563495,
                "year": 2018,
                "projection": false
              },
              {
                "value": 6.90326941767725,
                "year": 2019,
                "projection": false
              },
              {
                "value": 7.04130686635785,
                "year": 2020,
                "projection": false
              },
              {
                "value": 17.3300274821482,
                "year": 2021,
                "projection": false
              },
              {
                "value": 11.2720641300019,
                "year": 2022,
                "projection": false
              },
              {
                "value": 18.1036453293349,
                "year": 2023,
                "projection": false
              },
              {
                "value": 26.8148132358465,
                "year": 2024,
                "projection": false
              }
            ]
          }
        }
      }
    },
    "angola": {
      "imf": {
        "indicators": {
          "realGdpGrowth": {
            "value": 2.3,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1980,
                "value": 2.4,
                "projection": false
              },
              {
                "year": 1981,
                "value": -4.4,
                "projection": false
              },
              {
                "year": 1982,
                "value": 0,
                "projection": false
              },
              {
                "year": 1983,
                "value": 4.2,
                "projection": false
              },
              {
                "year": 1984,
                "value": 6,
                "projection": false
              },
              {
                "year": 1985,
                "value": 3.5,
                "projection": false
              },
              {
                "year": 1986,
                "value": 2.9,
                "projection": false
              },
              {
                "year": 1987,
                "value": 4.1,
                "projection": false
              },
              {
                "year": 1988,
                "value": 6.1,
                "projection": false
              },
              {
                "year": 1989,
                "value": 0,
                "projection": false
              },
              {
                "year": 1990,
                "value": -3.5,
                "projection": false
              },
              {
                "year": 1991,
                "value": 12.1,
                "projection": false
              },
              {
                "year": 1992,
                "value": 11.4,
                "projection": false
              },
              {
                "year": 1993,
                "value": 11,
                "projection": false
              },
              {
                "year": 1994,
                "value": 10.5,
                "projection": false
              },
              {
                "year": 1995,
                "value": 10.4,
                "projection": false
              },
              {
                "year": 1996,
                "value": 11.2,
                "projection": false
              },
              {
                "year": 1997,
                "value": 7.3,
                "projection": false
              },
              {
                "year": 1998,
                "value": 4.7,
                "projection": false
              },
              {
                "year": 1999,
                "value": 2.2,
                "projection": false
              },
              {
                "year": 2000,
                "value": 3.1,
                "projection": false
              },
              {
                "year": 2001,
                "value": 4.2,
                "projection": false
              },
              {
                "year": 2002,
                "value": 13.7,
                "projection": false
              },
              {
                "year": 2003,
                "value": 3.5,
                "projection": false
              },
              {
                "year": 2004,
                "value": 11.4,
                "projection": false
              },
              {
                "year": 2005,
                "value": 14.1,
                "projection": false
              },
              {
                "year": 2006,
                "value": 11.8,
                "projection": false
              },
              {
                "year": 2007,
                "value": 13,
                "projection": false
              },
              {
                "year": 2008,
                "value": 10.8,
                "projection": false
              },
              {
                "year": 2009,
                "value": 2,
                "projection": false
              },
              {
                "year": 2010,
                "value": 5.3,
                "projection": false
              },
              {
                "year": 2011,
                "value": 3.6,
                "projection": false
              },
              {
                "year": 2012,
                "value": 8.5,
                "projection": false
              },
              {
                "year": 2013,
                "value": 4.9,
                "projection": false
              },
              {
                "year": 2014,
                "value": 4.7,
                "projection": false
              },
              {
                "year": 2015,
                "value": 0.8,
                "projection": false
              },
              {
                "year": 2016,
                "value": -1.7,
                "projection": false
              },
              {
                "year": 2017,
                "value": -0.1,
                "projection": false
              },
              {
                "year": 2018,
                "value": -0.6,
                "projection": false
              },
              {
                "year": 2019,
                "value": -0.2,
                "projection": false
              },
              {
                "year": 2020,
                "value": -4,
                "projection": false
              },
              {
                "year": 2021,
                "value": 2.1,
                "projection": false
              },
              {
                "year": 2022,
                "value": 4.2,
                "projection": false
              },
              {
                "year": 2023,
                "value": 1.3,
                "projection": false
              },
              {
                "year": 2024,
                "value": 5,
                "projection": false
              },
              {
                "year": 2025,
                "value": 3.1,
                "projection": false
              },
              {
                "year": 2026,
                "value": 2.3,
                "projection": true
              },
              {
                "year": 2027,
                "value": 2.6,
                "projection": true
              },
              {
                "year": 2028,
                "value": 2.8,
                "projection": true
              },
              {
                "year": 2029,
                "value": 3,
                "projection": true
              },
              {
                "year": 2030,
                "value": 3,
                "projection": true
              },
              {
                "year": 2031,
                "value": 3.1,
                "projection": true
              }
            ]
          },
          "inflation": {
            "value": 12.9,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1980,
                "value": 46.7,
                "projection": false
              },
              {
                "year": 1981,
                "value": 1.4,
                "projection": false
              },
              {
                "year": 1982,
                "value": 1.8,
                "projection": false
              },
              {
                "year": 1983,
                "value": 1.8,
                "projection": false
              },
              {
                "year": 1984,
                "value": 1.8,
                "projection": false
              },
              {
                "year": 1985,
                "value": 1.8,
                "projection": false
              },
              {
                "year": 1986,
                "value": 1.8,
                "projection": false
              },
              {
                "year": 1987,
                "value": 1.8,
                "projection": false
              },
              {
                "year": 1988,
                "value": 1.8,
                "projection": false
              },
              {
                "year": 1989,
                "value": 1.8,
                "projection": false
              },
              {
                "year": 1990,
                "value": 1.8,
                "projection": false
              },
              {
                "year": 1991,
                "value": 85.3,
                "projection": false
              },
              {
                "year": 1992,
                "value": 299.1,
                "projection": false
              },
              {
                "year": 1993,
                "value": 1379.5,
                "projection": false
              },
              {
                "year": 1994,
                "value": 949.8,
                "projection": false
              },
              {
                "year": 1995,
                "value": 2672.2,
                "projection": false
              },
              {
                "year": 1996,
                "value": 4146,
                "projection": false
              },
              {
                "year": 1997,
                "value": 221.5,
                "projection": false
              },
              {
                "year": 1998,
                "value": 107.4,
                "projection": false
              },
              {
                "year": 1999,
                "value": 248.2,
                "projection": false
              },
              {
                "year": 2000,
                "value": 325,
                "projection": false
              },
              {
                "year": 2001,
                "value": 152.6,
                "projection": false
              },
              {
                "year": 2002,
                "value": 108.9,
                "projection": false
              },
              {
                "year": 2003,
                "value": 98.2,
                "projection": false
              },
              {
                "year": 2004,
                "value": 43.5,
                "projection": false
              },
              {
                "year": 2005,
                "value": 23,
                "projection": false
              },
              {
                "year": 2006,
                "value": 13.3,
                "projection": false
              },
              {
                "year": 2007,
                "value": 12.2,
                "projection": false
              },
              {
                "year": 2008,
                "value": 12.5,
                "projection": false
              },
              {
                "year": 2009,
                "value": 13.7,
                "projection": false
              },
              {
                "year": 2010,
                "value": 14.5,
                "projection": false
              },
              {
                "year": 2011,
                "value": 13.5,
                "projection": false
              },
              {
                "year": 2012,
                "value": 10.3,
                "projection": false
              },
              {
                "year": 2013,
                "value": 8.8,
                "projection": false
              },
              {
                "year": 2014,
                "value": 7.3,
                "projection": false
              },
              {
                "year": 2015,
                "value": 9.2,
                "projection": false
              },
              {
                "year": 2016,
                "value": 30.7,
                "projection": false
              },
              {
                "year": 2017,
                "value": 29.8,
                "projection": false
              },
              {
                "year": 2018,
                "value": 19.6,
                "projection": false
              },
              {
                "year": 2019,
                "value": 17.1,
                "projection": false
              },
              {
                "year": 2020,
                "value": 22.3,
                "projection": false
              },
              {
                "year": 2021,
                "value": 25.8,
                "projection": false
              },
              {
                "year": 2022,
                "value": 21.4,
                "projection": false
              },
              {
                "year": 2023,
                "value": 13.6,
                "projection": false
              },
              {
                "year": 2024,
                "value": 28.2,
                "projection": false
              },
              {
                "year": 2025,
                "value": 20.2,
                "projection": false
              },
              {
                "year": 2026,
                "value": 12.9,
                "projection": true
              },
              {
                "year": 2027,
                "value": 12.8,
                "projection": true
              },
              {
                "year": 2028,
                "value": 10.3,
                "projection": true
              },
              {
                "year": 2029,
                "value": 10,
                "projection": true
              },
              {
                "year": 2030,
                "value": 9.9,
                "projection": true
              },
              {
                "year": 2031,
                "value": 9.8,
                "projection": true
              }
            ]
          },
          "currentAccount": {
            "value": 2.2,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1980,
                "value": 0.8,
                "projection": false
              },
              {
                "year": 1981,
                "value": -2.2,
                "projection": false
              },
              {
                "year": 1982,
                "value": -6.1,
                "projection": false
              },
              {
                "year": 1983,
                "value": -4.2,
                "projection": false
              },
              {
                "year": 1984,
                "value": -1.9,
                "projection": false
              },
              {
                "year": 1985,
                "value": 1.8,
                "projection": false
              },
              {
                "year": 1986,
                "value": -2.9,
                "projection": false
              },
              {
                "year": 1987,
                "value": 3.8,
                "projection": false
              },
              {
                "year": 1988,
                "value": -3.6,
                "projection": false
              },
              {
                "year": 1989,
                "value": -0.9,
                "projection": false
              },
              {
                "year": 1990,
                "value": -1.4,
                "projection": false
              },
              {
                "year": 1991,
                "value": -3.6,
                "projection": false
              },
              {
                "year": 1992,
                "value": -5.9,
                "projection": false
              },
              {
                "year": 1993,
                "value": -7.5,
                "projection": false
              },
              {
                "year": 1994,
                "value": -5.2,
                "projection": false
              },
              {
                "year": 1995,
                "value": -3.6,
                "projection": false
              },
              {
                "year": 1996,
                "value": 31.1,
                "projection": false
              },
              {
                "year": 1997,
                "value": -7.2,
                "projection": false
              },
              {
                "year": 1998,
                "value": -17.8,
                "projection": false
              },
              {
                "year": 1999,
                "value": -17.3,
                "projection": false
              },
              {
                "year": 2000,
                "value": 6.3,
                "projection": false
              },
              {
                "year": 2001,
                "value": -11.6,
                "projection": false
              },
              {
                "year": 2002,
                "value": -0.9,
                "projection": false
              },
              {
                "year": 2003,
                "value": -3.5,
                "projection": false
              },
              {
                "year": 2004,
                "value": 2.5,
                "projection": false
              },
              {
                "year": 2005,
                "value": 12.4,
                "projection": false
              },
              {
                "year": 2006,
                "value": 18.2,
                "projection": false
              },
              {
                "year": 2007,
                "value": 14.5,
                "projection": false
              },
              {
                "year": 2008,
                "value": 7.3,
                "projection": false
              },
              {
                "year": 2009,
                "value": -9.3,
                "projection": false
              },
              {
                "year": 2010,
                "value": 7.9,
                "projection": false
              },
              {
                "year": 2011,
                "value": 10.4,
                "projection": false
              },
              {
                "year": 2012,
                "value": 9.6,
                "projection": false
              },
              {
                "year": 2013,
                "value": 5.4,
                "projection": false
              },
              {
                "year": 2014,
                "value": -2.3,
                "projection": false
              },
              {
                "year": 2015,
                "value": -7.8,
                "projection": false
              },
              {
                "year": 2016,
                "value": -2.6,
                "projection": false
              },
              {
                "year": 2017,
                "value": -0.4,
                "projection": false
              },
              {
                "year": 2018,
                "value": 6.4,
                "projection": false
              },
              {
                "year": 2019,
                "value": 5.4,
                "projection": false
              },
              {
                "year": 2020,
                "value": 1.3,
                "projection": false
              },
              {
                "year": 2021,
                "value": 10.1,
                "projection": false
              },
              {
                "year": 2022,
                "value": 8.5,
                "projection": false
              },
              {
                "year": 2023,
                "value": 3.7,
                "projection": false
              },
              {
                "year": 2024,
                "value": 5.3,
                "projection": false
              },
              {
                "year": 2025,
                "value": 0.4,
                "projection": false
              },
              {
                "year": 2026,
                "value": 2.2,
                "projection": true
              },
              {
                "year": 2027,
                "value": 1,
                "projection": true
              },
              {
                "year": 2028,
                "value": 0.8,
                "projection": true
              },
              {
                "year": 2029,
                "value": 0.8,
                "projection": true
              },
              {
                "year": 2030,
                "value": 0.7,
                "projection": true
              },
              {
                "year": 2031,
                "value": 0.6,
                "projection": true
              }
            ]
          },
          "fiscalBalance": {
            "value": -2.4,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1996,
                "value": 5.2,
                "projection": false
              },
              {
                "year": 1997,
                "value": -0.3,
                "projection": false
              },
              {
                "year": 1998,
                "value": -5.9,
                "projection": false
              },
              {
                "year": 1999,
                "value": -9.4,
                "projection": false
              },
              {
                "year": 2000,
                "value": 2,
                "projection": false
              },
              {
                "year": 2001,
                "value": 2.8,
                "projection": false
              },
              {
                "year": 2002,
                "value": -2.2,
                "projection": false
              },
              {
                "year": 2003,
                "value": -4.1,
                "projection": false
              },
              {
                "year": 2004,
                "value": 1,
                "projection": false
              },
              {
                "year": 2005,
                "value": 6.4,
                "projection": false
              },
              {
                "year": 2006,
                "value": 8.4,
                "projection": false
              },
              {
                "year": 2007,
                "value": 3.8,
                "projection": false
              },
              {
                "year": 2008,
                "value": -3.8,
                "projection": false
              },
              {
                "year": 2009,
                "value": -6.8,
                "projection": false
              },
              {
                "year": 2010,
                "value": 3,
                "projection": false
              },
              {
                "year": 2011,
                "value": 7.2,
                "projection": false
              },
              {
                "year": 2012,
                "value": 3.7,
                "projection": false
              },
              {
                "year": 2013,
                "value": -0.3,
                "projection": false
              },
              {
                "year": 2014,
                "value": -5.1,
                "projection": false
              },
              {
                "year": 2015,
                "value": -2.6,
                "projection": false
              },
              {
                "year": 2016,
                "value": -3.9,
                "projection": false
              },
              {
                "year": 2017,
                "value": -5.7,
                "projection": false
              },
              {
                "year": 2018,
                "value": 2,
                "projection": false
              },
              {
                "year": 2019,
                "value": -0.2,
                "projection": false
              },
              {
                "year": 2020,
                "value": -3,
                "projection": false
              },
              {
                "year": 2021,
                "value": 1.4,
                "projection": false
              },
              {
                "year": 2022,
                "value": 1.8,
                "projection": false
              },
              {
                "year": 2023,
                "value": -2.5,
                "projection": false
              },
              {
                "year": 2024,
                "value": -1.2,
                "projection": false
              },
              {
                "year": 2025,
                "value": -4.1,
                "projection": false
              },
              {
                "year": 2026,
                "value": -2.4,
                "projection": true
              },
              {
                "year": 2027,
                "value": -3.6,
                "projection": true
              },
              {
                "year": 2028,
                "value": -3.9,
                "projection": true
              },
              {
                "year": 2029,
                "value": -4,
                "projection": true
              },
              {
                "year": 2030,
                "value": -3.8,
                "projection": true
              },
              {
                "year": 2031,
                "value": -3.9,
                "projection": true
              }
            ]
          },
          "governmentDebt": {
            "value": 51.6,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 2000,
                "value": 118.2,
                "projection": false
              },
              {
                "year": 2001,
                "value": 100.2,
                "projection": false
              },
              {
                "year": 2002,
                "value": 65.1,
                "projection": false
              },
              {
                "year": 2003,
                "value": 50.8,
                "projection": false
              },
              {
                "year": 2004,
                "value": 41.6,
                "projection": false
              },
              {
                "year": 2005,
                "value": 29.9,
                "projection": false
              },
              {
                "year": 2006,
                "value": 16.7,
                "projection": false
              },
              {
                "year": 2007,
                "value": 18.8,
                "projection": false
              },
              {
                "year": 2008,
                "value": 28.1,
                "projection": false
              },
              {
                "year": 2009,
                "value": 48.4,
                "projection": false
              },
              {
                "year": 2010,
                "value": 32.6,
                "projection": false
              },
              {
                "year": 2011,
                "value": 26.3,
                "projection": false
              },
              {
                "year": 2012,
                "value": 23.8,
                "projection": false
              },
              {
                "year": 2013,
                "value": 29.5,
                "projection": false
              },
              {
                "year": 2014,
                "value": 35.3,
                "projection": false
              },
              {
                "year": 2015,
                "value": 50.4,
                "projection": false
              },
              {
                "year": 2016,
                "value": 65.7,
                "projection": false
              },
              {
                "year": 2017,
                "value": 59.6,
                "projection": false
              },
              {
                "year": 2018,
                "value": 81.6,
                "projection": false
              },
              {
                "year": 2019,
                "value": 100.8,
                "projection": false
              },
              {
                "year": 2020,
                "value": 119.8,
                "projection": false
              },
              {
                "year": 2021,
                "value": 75.5,
                "projection": false
              },
              {
                "year": 2022,
                "value": 57.4,
                "projection": false
              },
              {
                "year": 2023,
                "value": 75.7,
                "projection": false
              },
              {
                "year": 2024,
                "value": 57.1,
                "projection": false
              },
              {
                "year": 2025,
                "value": 51.3,
                "projection": false
              },
              {
                "year": 2026,
                "value": 51.6,
                "projection": true
              },
              {
                "year": 2027,
                "value": 53.5,
                "projection": true
              },
              {
                "year": 2028,
                "value": 55.2,
                "projection": true
              },
              {
                "year": 2029,
                "value": 56.6,
                "projection": true
              },
              {
                "year": 2030,
                "value": 57.1,
                "projection": true
              },
              {
                "year": 2031,
                "value": 57.7,
                "projection": true
              }
            ]
          }
        }
      },
      "worldBank": {
        "indicators": {
          "reserveMonths": {
            "value": 5.32280228774496,
            "year": 2025,
            "unit": "months",
            "series": [
              {
                "value": 6.48204569064842,
                "year": 2015,
                "projection": false
              },
              {
                "value": 9.08387120490077,
                "year": 2016,
                "projection": false
              },
              {
                "value": 5.81818691844858,
                "year": 2017,
                "projection": false
              },
              {
                "value": 5.41264015408642,
                "year": 2018,
                "projection": false
              },
              {
                "value": 6.42509428996665,
                "year": 2019,
                "projection": false
              },
              {
                "value": 8.02614772310759,
                "year": 2020,
                "projection": false
              },
              {
                "value": 6.94915414648974,
                "year": 2021,
                "projection": false
              },
              {
                "value": 4.3768328674863,
                "year": 2022,
                "projection": false
              },
              {
                "value": 5.08927113560434,
                "year": 2023,
                "projection": false
              },
              {
                "value": 5.51374910579315,
                "year": 2024,
                "projection": false
              },
              {
                "value": 5.32280228774496,
                "year": 2025,
                "projection": false
              }
            ]
          },
          "externalDebtGni": {
            "value": 79.5726391511001,
            "year": 2024,
            "unit": "percent",
            "series": [
              {
                "value": 56.7801551813803,
                "year": 2015,
                "projection": false
              },
              {
                "value": 114.845094739154,
                "year": 2016,
                "projection": false
              },
              {
                "value": 84.9404832711627,
                "year": 2017,
                "projection": false
              },
              {
                "value": 84.2843625797666,
                "year": 2018,
                "projection": false
              },
              {
                "value": 96.5947267900598,
                "year": 2019,
                "projection": false
              },
              {
                "value": 148.159899274824,
                "year": 2020,
                "projection": false
              },
              {
                "value": 108.138096106725,
                "year": 2021,
                "projection": false
              },
              {
                "value": 62.7115153094556,
                "year": 2022,
                "projection": false
              },
              {
                "value": 74.5628642843282,
                "year": 2023,
                "projection": false
              },
              {
                "value": 79.5726391511001,
                "year": 2024,
                "projection": false
              }
            ]
          },
          "debtServiceExports": {
            "value": 28.9122414363047,
            "year": 2024,
            "unit": "percent",
            "series": [
              {
                "value": 24.7853019209701,
                "year": 2015,
                "projection": false
              },
              {
                "value": 38.0756437635118,
                "year": 2016,
                "projection": false
              },
              {
                "value": 25.4292237629753,
                "year": 2017,
                "projection": false
              },
              {
                "value": 28.5353974870477,
                "year": 2018,
                "projection": false
              },
              {
                "value": 29.9160622680195,
                "year": 2019,
                "projection": false
              },
              {
                "value": 36.2643591957246,
                "year": 2020,
                "projection": false
              },
              {
                "value": 29.2509172416252,
                "year": 2021,
                "projection": false
              },
              {
                "value": 30.3800197632965,
                "year": 2022,
                "projection": false
              },
              {
                "value": 33.4545527405695,
                "year": 2023,
                "projection": false
              },
              {
                "value": 28.9122414363047,
                "year": 2024,
                "projection": false
              }
            ]
          }
        }
      },
      "trade": {
        "year": 2024,
        "exportsTotal": 42285090254,
        "importsTotal": 14536768346,
        "topExports": [
          {
            "name": "Crude Petroleum",
            "value": 32229011213,
            "share": 76.21838104023266
          },
          {
            "name": "Diamonds",
            "value": 3364232422,
            "share": 7.956072463820169
          },
          {
            "name": "Petroleum Gas",
            "value": 2462284478,
            "share": 5.82305598311234
          },
          {
            "name": "Special Purpose Ships",
            "value": 1414966770,
            "share": 3.3462545816989238
          },
          {
            "name": "Passenger and Cargo Ships",
            "value": 784820026,
            "share": 1.8560206949676763
          }
        ],
        "topImports": [
          {
            "name": "Refined Petroleum",
            "value": 2473192093,
            "share": 17.013355610640478
          },
          {
            "name": "Wheat",
            "value": 593150274,
            "share": 4.080344818614474
          },
          {
            "name": "Valves",
            "value": 422957735,
            "share": 2.9095719552852533
          },
          {
            "name": "Poultry Meat",
            "value": 289880997,
            "share": 1.9941226970144634
          },
          {
            "name": "Rice",
            "value": 267609917,
            "share": 1.8409175315340063
          }
        ],
        "exportPartners": [
          {
            "name": "China",
            "value": 16035662083,
            "share": 37.92273348992815
          },
          {
            "name": "India",
            "value": 5994459436,
            "share": 14.176295710833791
          },
          {
            "name": "Spain",
            "value": 2731556887,
            "share": 6.459858239847568
          },
          {
            "name": "United States",
            "value": 2705258387,
            "share": 6.397664923380632
          },
          {
            "name": "France",
            "value": 1751523579.9999998,
            "share": 4.142177702539756
          }
        ],
        "importPartners": [
          {
            "name": "China",
            "value": 2522676075,
            "share": 17.35376126905228
          },
          {
            "name": "Portugal",
            "value": 1314468619,
            "share": 9.042371644875905
          },
          {
            "name": "India",
            "value": 811008720,
            "share": 5.579016606006249
          },
          {
            "name": "United States",
            "value": 782527496,
            "share": 5.383091189007794
          },
          {
            "name": "United Kingdom",
            "value": 763539862,
            "share": 5.252473203303807
          }
        ]
      }
    },
    "kenya": {
      "imf": {
        "indicators": {
          "realGdpGrowth": {
            "value": 4.5,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1980,
                "value": 5.6,
                "projection": false
              },
              {
                "year": 1981,
                "value": 4.1,
                "projection": false
              },
              {
                "year": 1982,
                "value": 5.1,
                "projection": false
              },
              {
                "year": 1983,
                "value": 1.6,
                "projection": false
              },
              {
                "year": 1984,
                "value": 1.6,
                "projection": false
              },
              {
                "year": 1985,
                "value": 4.1,
                "projection": false
              },
              {
                "year": 1986,
                "value": 7,
                "projection": false
              },
              {
                "year": 1987,
                "value": 5.8,
                "projection": false
              },
              {
                "year": 1988,
                "value": 6.1,
                "projection": false
              },
              {
                "year": 1989,
                "value": 4.6,
                "projection": false
              },
              {
                "year": 1990,
                "value": 4.1,
                "projection": false
              },
              {
                "year": 1991,
                "value": 1.3,
                "projection": false
              },
              {
                "year": 1992,
                "value": -1.1,
                "projection": false
              },
              {
                "year": 1993,
                "value": -0.1,
                "projection": false
              },
              {
                "year": 1994,
                "value": 2.5,
                "projection": false
              },
              {
                "year": 1995,
                "value": 4.3,
                "projection": false
              },
              {
                "year": 1996,
                "value": 4.5,
                "projection": false
              },
              {
                "year": 1997,
                "value": 0.4,
                "projection": false
              },
              {
                "year": 1998,
                "value": 3,
                "projection": false
              },
              {
                "year": 1999,
                "value": 2.2,
                "projection": false
              },
              {
                "year": 2000,
                "value": 0.3,
                "projection": false
              },
              {
                "year": 2001,
                "value": 4,
                "projection": false
              },
              {
                "year": 2002,
                "value": 0.5,
                "projection": false
              },
              {
                "year": 2003,
                "value": 2.9,
                "projection": false
              },
              {
                "year": 2004,
                "value": 4.6,
                "projection": false
              },
              {
                "year": 2005,
                "value": 5.7,
                "projection": false
              },
              {
                "year": 2006,
                "value": 5.9,
                "projection": false
              },
              {
                "year": 2007,
                "value": 6.9,
                "projection": false
              },
              {
                "year": 2008,
                "value": 0.2,
                "projection": false
              },
              {
                "year": 2009,
                "value": 3.3,
                "projection": false
              },
              {
                "year": 2010,
                "value": 8.1,
                "projection": false
              },
              {
                "year": 2011,
                "value": 5.1,
                "projection": false
              },
              {
                "year": 2012,
                "value": 4.6,
                "projection": false
              },
              {
                "year": 2013,
                "value": 3.8,
                "projection": false
              },
              {
                "year": 2014,
                "value": 5,
                "projection": false
              },
              {
                "year": 2015,
                "value": 5,
                "projection": false
              },
              {
                "year": 2016,
                "value": 4.2,
                "projection": false
              },
              {
                "year": 2017,
                "value": 3.8,
                "projection": false
              },
              {
                "year": 2018,
                "value": 5.7,
                "projection": false
              },
              {
                "year": 2019,
                "value": 5.1,
                "projection": false
              },
              {
                "year": 2020,
                "value": -0.3,
                "projection": false
              },
              {
                "year": 2021,
                "value": 7.6,
                "projection": false
              },
              {
                "year": 2022,
                "value": 4.9,
                "projection": false
              },
              {
                "year": 2023,
                "value": 5.7,
                "projection": false
              },
              {
                "year": 2024,
                "value": 4.7,
                "projection": false
              },
              {
                "year": 2025,
                "value": 4.9,
                "projection": false
              },
              {
                "year": 2026,
                "value": 4.5,
                "projection": true
              },
              {
                "year": 2027,
                "value": 4.7,
                "projection": true
              },
              {
                "year": 2028,
                "value": 5.1,
                "projection": true
              },
              {
                "year": 2029,
                "value": 5,
                "projection": true
              },
              {
                "year": 2030,
                "value": 5,
                "projection": true
              },
              {
                "year": 2031,
                "value": 5,
                "projection": true
              }
            ]
          },
          "inflation": {
            "value": 5.9,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1980,
                "value": 13.9,
                "projection": false
              },
              {
                "year": 1981,
                "value": 11.6,
                "projection": false
              },
              {
                "year": 1982,
                "value": 20.7,
                "projection": false
              },
              {
                "year": 1983,
                "value": 11.4,
                "projection": false
              },
              {
                "year": 1984,
                "value": 10.3,
                "projection": false
              },
              {
                "year": 1985,
                "value": 13,
                "projection": false
              },
              {
                "year": 1986,
                "value": 2.5,
                "projection": false
              },
              {
                "year": 1987,
                "value": 8.6,
                "projection": false
              },
              {
                "year": 1988,
                "value": 12.3,
                "projection": false
              },
              {
                "year": 1989,
                "value": 13.8,
                "projection": false
              },
              {
                "year": 1990,
                "value": 17.8,
                "projection": false
              },
              {
                "year": 1991,
                "value": 20.1,
                "projection": false
              },
              {
                "year": 1992,
                "value": 27.3,
                "projection": false
              },
              {
                "year": 1993,
                "value": 46,
                "projection": false
              },
              {
                "year": 1994,
                "value": 28.8,
                "projection": false
              },
              {
                "year": 1995,
                "value": 1.6,
                "projection": false
              },
              {
                "year": 1996,
                "value": 6.8,
                "projection": false
              },
              {
                "year": 1997,
                "value": 11.3,
                "projection": false
              },
              {
                "year": 1998,
                "value": 5.4,
                "projection": false
              },
              {
                "year": 1999,
                "value": 5.8,
                "projection": false
              },
              {
                "year": 2000,
                "value": 10,
                "projection": false
              },
              {
                "year": 2001,
                "value": 5.7,
                "projection": false
              },
              {
                "year": 2002,
                "value": 2,
                "projection": false
              },
              {
                "year": 2003,
                "value": 9.8,
                "projection": false
              },
              {
                "year": 2004,
                "value": 11.8,
                "projection": false
              },
              {
                "year": 2005,
                "value": 9.9,
                "projection": false
              },
              {
                "year": 2006,
                "value": 6,
                "projection": false
              },
              {
                "year": 2007,
                "value": 4.3,
                "projection": false
              },
              {
                "year": 2008,
                "value": 15.1,
                "projection": false
              },
              {
                "year": 2009,
                "value": 10.5,
                "projection": false
              },
              {
                "year": 2010,
                "value": 4.1,
                "projection": false
              },
              {
                "year": 2011,
                "value": 14,
                "projection": false
              },
              {
                "year": 2012,
                "value": 9.4,
                "projection": false
              },
              {
                "year": 2013,
                "value": 5.7,
                "projection": false
              },
              {
                "year": 2014,
                "value": 6.9,
                "projection": false
              },
              {
                "year": 2015,
                "value": 6.6,
                "projection": false
              },
              {
                "year": 2016,
                "value": 6.3,
                "projection": false
              },
              {
                "year": 2017,
                "value": 8,
                "projection": false
              },
              {
                "year": 2018,
                "value": 4.7,
                "projection": false
              },
              {
                "year": 2019,
                "value": 5.2,
                "projection": false
              },
              {
                "year": 2020,
                "value": 5.3,
                "projection": false
              },
              {
                "year": 2021,
                "value": 6.1,
                "projection": false
              },
              {
                "year": 2022,
                "value": 7.6,
                "projection": false
              },
              {
                "year": 2023,
                "value": 7.7,
                "projection": false
              },
              {
                "year": 2024,
                "value": 4.5,
                "projection": false
              },
              {
                "year": 2025,
                "value": 4.1,
                "projection": false
              },
              {
                "year": 2026,
                "value": 5.9,
                "projection": true
              },
              {
                "year": 2027,
                "value": 5.9,
                "projection": true
              },
              {
                "year": 2028,
                "value": 5.7,
                "projection": true
              },
              {
                "year": 2029,
                "value": 5.7,
                "projection": true
              },
              {
                "year": 2030,
                "value": 5.3,
                "projection": true
              },
              {
                "year": 2031,
                "value": 5,
                "projection": true
              }
            ]
          },
          "currentAccount": {
            "value": -4.1,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1980,
                "value": -6.5,
                "projection": false
              },
              {
                "year": 1981,
                "value": -4.4,
                "projection": false
              },
              {
                "year": 1982,
                "value": -2.5,
                "projection": false
              },
              {
                "year": 1983,
                "value": -0.4,
                "projection": false
              },
              {
                "year": 1984,
                "value": -1.1,
                "projection": false
              },
              {
                "year": 1985,
                "value": -1,
                "projection": false
              },
              {
                "year": 1986,
                "value": -0.3,
                "projection": false
              },
              {
                "year": 1987,
                "value": -3.3,
                "projection": false
              },
              {
                "year": 1988,
                "value": -3,
                "projection": false
              },
              {
                "year": 1989,
                "value": -3.8,
                "projection": false
              },
              {
                "year": 1990,
                "value": -4.3,
                "projection": false
              },
              {
                "year": 1991,
                "value": -1.9,
                "projection": false
              },
              {
                "year": 1992,
                "value": -2.4,
                "projection": false
              },
              {
                "year": 1993,
                "value": 8.6,
                "projection": false
              },
              {
                "year": 1994,
                "value": 5.8,
                "projection": false
              },
              {
                "year": 1995,
                "value": -1.8,
                "projection": false
              },
              {
                "year": 1996,
                "value": 0.4,
                "projection": false
              },
              {
                "year": 1997,
                "value": 0.3,
                "projection": false
              },
              {
                "year": 1998,
                "value": 1.4,
                "projection": false
              },
              {
                "year": 1999,
                "value": 5.7,
                "projection": false
              },
              {
                "year": 2000,
                "value": -1.1,
                "projection": false
              },
              {
                "year": 2001,
                "value": -1.7,
                "projection": false
              },
              {
                "year": 2002,
                "value": -0.6,
                "projection": false
              },
              {
                "year": 2003,
                "value": 0.6,
                "projection": false
              },
              {
                "year": 2004,
                "value": -0.6,
                "projection": false
              },
              {
                "year": 2005,
                "value": -1,
                "projection": false
              },
              {
                "year": 2006,
                "value": -1.7,
                "projection": false
              },
              {
                "year": 2007,
                "value": -2.9,
                "projection": false
              },
              {
                "year": 2008,
                "value": -4.8,
                "projection": false
              },
              {
                "year": 2009,
                "value": -3.9,
                "projection": false
              },
              {
                "year": 2010,
                "value": -5.2,
                "projection": false
              },
              {
                "year": 2011,
                "value": -8.2,
                "projection": false
              },
              {
                "year": 2012,
                "value": -7.5,
                "projection": false
              },
              {
                "year": 2013,
                "value": -7.8,
                "projection": false
              },
              {
                "year": 2014,
                "value": -9.3,
                "projection": false
              },
              {
                "year": 2015,
                "value": -5.1,
                "projection": false
              },
              {
                "year": 2016,
                "value": -4.1,
                "projection": false
              },
              {
                "year": 2017,
                "value": -5.6,
                "projection": false
              },
              {
                "year": 2018,
                "value": -4,
                "projection": false
              },
              {
                "year": 2019,
                "value": -2.2,
                "projection": false
              },
              {
                "year": 2020,
                "value": -3.7,
                "projection": false
              },
              {
                "year": 2021,
                "value": -5.1,
                "projection": false
              },
              {
                "year": 2022,
                "value": -5,
                "projection": false
              },
              {
                "year": 2023,
                "value": -3.6,
                "projection": false
              },
              {
                "year": 2024,
                "value": -2.3,
                "projection": false
              },
              {
                "year": 2025,
                "value": -2.7,
                "projection": false
              },
              {
                "year": 2026,
                "value": -4.1,
                "projection": true
              },
              {
                "year": 2027,
                "value": -3.7,
                "projection": true
              },
              {
                "year": 2028,
                "value": -3.4,
                "projection": true
              },
              {
                "year": 2029,
                "value": -3.3,
                "projection": true
              },
              {
                "year": 2030,
                "value": -3.2,
                "projection": true
              },
              {
                "year": 2031,
                "value": -3.2,
                "projection": true
              }
            ]
          },
          "fiscalBalance": {
            "value": -6.4,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1982,
                "value": -3.1,
                "projection": false
              },
              {
                "year": 1983,
                "value": -2.2,
                "projection": false
              },
              {
                "year": 1984,
                "value": -2.6,
                "projection": false
              },
              {
                "year": 1985,
                "value": -3.1,
                "projection": false
              },
              {
                "year": 1986,
                "value": -3,
                "projection": false
              },
              {
                "year": 1987,
                "value": -2.3,
                "projection": false
              },
              {
                "year": 1988,
                "value": -2,
                "projection": false
              },
              {
                "year": 1989,
                "value": -2.4,
                "projection": false
              },
              {
                "year": 1990,
                "value": -3.3,
                "projection": false
              },
              {
                "year": 1991,
                "value": -6.6,
                "projection": false
              },
              {
                "year": 1992,
                "value": -8.3,
                "projection": false
              },
              {
                "year": 1993,
                "value": -8.6,
                "projection": false
              },
              {
                "year": 1994,
                "value": -4.1,
                "projection": false
              },
              {
                "year": 1995,
                "value": -0.2,
                "projection": false
              },
              {
                "year": 1996,
                "value": -0.5,
                "projection": false
              },
              {
                "year": 1997,
                "value": -0.9,
                "projection": false
              },
              {
                "year": 1998,
                "value": 0,
                "projection": false
              },
              {
                "year": 1999,
                "value": 0.8,
                "projection": false
              },
              {
                "year": 2000,
                "value": 0.4,
                "projection": false
              },
              {
                "year": 2001,
                "value": -0.5,
                "projection": false
              },
              {
                "year": 2002,
                "value": -1.3,
                "projection": false
              },
              {
                "year": 2003,
                "value": -0.7,
                "projection": false
              },
              {
                "year": 2004,
                "value": 0.5,
                "projection": false
              },
              {
                "year": 2005,
                "value": -0.2,
                "projection": false
              },
              {
                "year": 2006,
                "value": -0.4,
                "projection": false
              },
              {
                "year": 2007,
                "value": -1,
                "projection": false
              },
              {
                "year": 2008,
                "value": -2,
                "projection": false
              },
              {
                "year": 2009,
                "value": -3.1,
                "projection": false
              },
              {
                "year": 2010,
                "value": -3.7,
                "projection": false
              },
              {
                "year": 2011,
                "value": -3.6,
                "projection": false
              },
              {
                "year": 2012,
                "value": -5.3,
                "projection": false
              },
              {
                "year": 2013,
                "value": -5.2,
                "projection": false
              },
              {
                "year": 2014,
                "value": -5.8,
                "projection": false
              },
              {
                "year": 2015,
                "value": -6.7,
                "projection": false
              },
              {
                "year": 2016,
                "value": -7.5,
                "projection": false
              },
              {
                "year": 2017,
                "value": -7.4,
                "projection": false
              },
              {
                "year": 2018,
                "value": -6.9,
                "projection": false
              },
              {
                "year": 2019,
                "value": -7.4,
                "projection": false
              },
              {
                "year": 2020,
                "value": -8.1,
                "projection": false
              },
              {
                "year": 2021,
                "value": -7.2,
                "projection": false
              },
              {
                "year": 2022,
                "value": -6,
                "projection": false
              },
              {
                "year": 2023,
                "value": -5.6,
                "projection": false
              },
              {
                "year": 2024,
                "value": -5.7,
                "projection": false
              },
              {
                "year": 2025,
                "value": -6.4,
                "projection": false
              },
              {
                "year": 2026,
                "value": -6.4,
                "projection": true
              },
              {
                "year": 2027,
                "value": -6,
                "projection": true
              },
              {
                "year": 2028,
                "value": -6,
                "projection": true
              },
              {
                "year": 2029,
                "value": -6.1,
                "projection": true
              },
              {
                "year": 2030,
                "value": -6.2,
                "projection": true
              },
              {
                "year": 2031,
                "value": -6.3,
                "projection": true
              }
            ]
          },
          "governmentDebt": {
            "value": 71.6,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1998,
                "value": 38.5,
                "projection": false
              },
              {
                "year": 1999,
                "value": 38.4,
                "projection": false
              },
              {
                "year": 2000,
                "value": 43.1,
                "projection": false
              },
              {
                "year": 2001,
                "value": 41.3,
                "projection": false
              },
              {
                "year": 2002,
                "value": 42,
                "projection": false
              },
              {
                "year": 2003,
                "value": 43.8,
                "projection": false
              },
              {
                "year": 2004,
                "value": 40.8,
                "projection": false
              },
              {
                "year": 2005,
                "value": 37.4,
                "projection": false
              },
              {
                "year": 2006,
                "value": 37.1,
                "projection": false
              },
              {
                "year": 2007,
                "value": 34.2,
                "projection": false
              },
              {
                "year": 2008,
                "value": 34.3,
                "projection": false
              },
              {
                "year": 2009,
                "value": 36,
                "projection": false
              },
              {
                "year": 2010,
                "value": 36.7,
                "projection": false
              },
              {
                "year": 2011,
                "value": 35.7,
                "projection": false
              },
              {
                "year": 2012,
                "value": 37.6,
                "projection": false
              },
              {
                "year": 2013,
                "value": 39.8,
                "projection": false
              },
              {
                "year": 2014,
                "value": 41.3,
                "projection": false
              },
              {
                "year": 2015,
                "value": 45.8,
                "projection": false
              },
              {
                "year": 2016,
                "value": 50.4,
                "projection": false
              },
              {
                "year": 2017,
                "value": 53.9,
                "projection": false
              },
              {
                "year": 2018,
                "value": 56.4,
                "projection": false
              },
              {
                "year": 2019,
                "value": 59.1,
                "projection": false
              },
              {
                "year": 2020,
                "value": 68,
                "projection": false
              },
              {
                "year": 2021,
                "value": 68.2,
                "projection": false
              },
              {
                "year": 2022,
                "value": 67.8,
                "projection": false
              },
              {
                "year": 2023,
                "value": 73.4,
                "projection": false
              },
              {
                "year": 2024,
                "value": 67.3,
                "projection": false
              },
              {
                "year": 2025,
                "value": 69.3,
                "projection": false
              },
              {
                "year": 2026,
                "value": 71.6,
                "projection": true
              },
              {
                "year": 2027,
                "value": 72.4,
                "projection": true
              },
              {
                "year": 2028,
                "value": 73.3,
                "projection": true
              },
              {
                "year": 2029,
                "value": 73.6,
                "projection": true
              },
              {
                "year": 2030,
                "value": 74.2,
                "projection": true
              },
              {
                "year": 2031,
                "value": 75.1,
                "projection": true
              }
            ]
          }
        }
      },
      "worldBank": {
        "indicators": {
          "reserveMonths": {
            "value": 4.02886150176484,
            "year": 2024,
            "unit": "months",
            "series": [
              {
                "value": 4.85820155529876,
                "year": 2015,
                "projection": false
              },
              {
                "value": 5.24445206958815,
                "year": 2016,
                "projection": false
              },
              {
                "value": 4.22919808384001,
                "year": 2017,
                "projection": false
              },
              {
                "value": 4.50003970094331,
                "year": 2018,
                "projection": false
              },
              {
                "value": 4.9206748709835,
                "year": 2019,
                "projection": false
              },
              {
                "value": 5.00168160921731,
                "year": 2020,
                "projection": false
              },
              {
                "value": 4.42483155112942,
                "year": 2021,
                "projection": false
              },
              {
                "value": 3.2163509377815,
                "year": 2022,
                "projection": false
              },
              {
                "value": 3.13876976697341,
                "year": 2023,
                "projection": false
              },
              {
                "value": 4.02886150176484,
                "year": 2024,
                "projection": false
              }
            ]
          },
          "externalDebtGni": {
            "value": 34.992669732423,
            "year": 2024,
            "unit": "percent",
            "series": [
              {
                "value": 31.3058278228131,
                "year": 2015,
                "projection": false
              },
              {
                "value": 28.5315668521598,
                "year": 2016,
                "projection": false
              },
              {
                "value": 33.4901470475528,
                "year": 2017,
                "projection": false
              },
              {
                "value": 34.6140434138868,
                "year": 2018,
                "projection": false
              },
              {
                "value": 35.4042862038635,
                "year": 2019,
                "projection": false
              },
              {
                "value": 38.0454096339675,
                "year": 2020,
                "projection": false
              },
              {
                "value": 38.1042168095825,
                "year": 2021,
                "projection": false
              },
              {
                "value": 36.8769031537885,
                "year": 2022,
                "projection": false
              },
              {
                "value": 40.4232521954815,
                "year": 2023,
                "projection": false
              },
              {
                "value": 34.992669732423,
                "year": 2024,
                "projection": false
              }
            ]
          },
          "debtServiceExports": {
            "value": 27.2238636965006,
            "year": 2024,
            "unit": "percent",
            "series": [
              {
                "value": 8.33004713955533,
                "year": 2015,
                "projection": false
              },
              {
                "value": 11.1736382993382,
                "year": 2016,
                "projection": false
              },
              {
                "value": 14.5974443871521,
                "year": 2017,
                "projection": false
              },
              {
                "value": 23.6995062707777,
                "year": 2018,
                "projection": false
              },
              {
                "value": 38.427302443419,
                "year": 2019,
                "projection": false
              },
              {
                "value": 24.2889288609468,
                "year": 2020,
                "projection": false
              },
              {
                "value": 16.7806362225923,
                "year": 2021,
                "projection": false
              },
              {
                "value": 18.1305777110906,
                "year": 2022,
                "projection": false
              },
              {
                "value": 21.1131036239564,
                "year": 2023,
                "projection": false
              },
              {
                "value": 27.2238636965006,
                "year": 2024,
                "projection": false
              }
            ]
          }
        }
      }
    },
    "tanzania": {
      "imf": {
        "indicators": {
          "realGdpGrowth": {
            "value": 5.9,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1980,
                "value": 3.3,
                "projection": false
              },
              {
                "year": 1981,
                "value": 0.5,
                "projection": false
              },
              {
                "year": 1982,
                "value": 0.6,
                "projection": false
              },
              {
                "year": 1983,
                "value": 2.4,
                "projection": false
              },
              {
                "year": 1984,
                "value": 3.4,
                "projection": false
              },
              {
                "year": 1985,
                "value": 4.6,
                "projection": false
              },
              {
                "year": 1986,
                "value": 6.6,
                "projection": false
              },
              {
                "year": 1987,
                "value": 5.9,
                "projection": false
              },
              {
                "year": 1988,
                "value": 4.4,
                "projection": false
              },
              {
                "year": 1989,
                "value": 3.8,
                "projection": false
              },
              {
                "year": 1990,
                "value": 7,
                "projection": false
              },
              {
                "year": 1991,
                "value": 2.1,
                "projection": false
              },
              {
                "year": 1992,
                "value": 0.6,
                "projection": false
              },
              {
                "year": 1993,
                "value": 1.2,
                "projection": false
              },
              {
                "year": 1994,
                "value": 1.6,
                "projection": false
              },
              {
                "year": 1995,
                "value": 3.6,
                "projection": false
              },
              {
                "year": 1996,
                "value": 4.5,
                "projection": false
              },
              {
                "year": 1997,
                "value": 3.5,
                "projection": false
              },
              {
                "year": 1998,
                "value": 3.7,
                "projection": false
              },
              {
                "year": 1999,
                "value": 4.8,
                "projection": false
              },
              {
                "year": 2000,
                "value": 4.9,
                "projection": false
              },
              {
                "year": 2001,
                "value": 6,
                "projection": false
              },
              {
                "year": 2002,
                "value": 7.2,
                "projection": false
              },
              {
                "year": 2003,
                "value": 6.9,
                "projection": false
              },
              {
                "year": 2004,
                "value": 7.8,
                "projection": false
              },
              {
                "year": 2005,
                "value": 7.4,
                "projection": false
              },
              {
                "year": 2006,
                "value": 4.7,
                "projection": false
              },
              {
                "year": 2007,
                "value": 8.5,
                "projection": false
              },
              {
                "year": 2008,
                "value": 5.6,
                "projection": false
              },
              {
                "year": 2009,
                "value": 5.4,
                "projection": false
              },
              {
                "year": 2010,
                "value": 6.4,
                "projection": false
              },
              {
                "year": 2011,
                "value": 7.9,
                "projection": false
              },
              {
                "year": 2012,
                "value": 5.1,
                "projection": false
              },
              {
                "year": 2013,
                "value": 6.8,
                "projection": false
              },
              {
                "year": 2014,
                "value": 6.7,
                "projection": false
              },
              {
                "year": 2015,
                "value": 6.2,
                "projection": false
              },
              {
                "year": 2016,
                "value": 6.9,
                "projection": false
              },
              {
                "year": 2017,
                "value": 6.7,
                "projection": false
              },
              {
                "year": 2018,
                "value": 7,
                "projection": false
              },
              {
                "year": 2019,
                "value": 6.9,
                "projection": false
              },
              {
                "year": 2020,
                "value": 4.5,
                "projection": false
              },
              {
                "year": 2021,
                "value": 4.8,
                "projection": false
              },
              {
                "year": 2022,
                "value": 4.7,
                "projection": false
              },
              {
                "year": 2023,
                "value": 5.1,
                "projection": false
              },
              {
                "year": 2024,
                "value": 5.5,
                "projection": false
              },
              {
                "year": 2025,
                "value": 5.9,
                "projection": false
              },
              {
                "year": 2026,
                "value": 5.9,
                "projection": true
              },
              {
                "year": 2027,
                "value": 6.1,
                "projection": true
              },
              {
                "year": 2028,
                "value": 6.3,
                "projection": true
              },
              {
                "year": 2029,
                "value": 6.3,
                "projection": true
              },
              {
                "year": 2030,
                "value": 6.3,
                "projection": true
              },
              {
                "year": 2031,
                "value": 6.3,
                "projection": true
              }
            ]
          },
          "inflation": {
            "value": 4,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1980,
                "value": 30.2,
                "projection": false
              },
              {
                "year": 1981,
                "value": 25.7,
                "projection": false
              },
              {
                "year": 1982,
                "value": 28.9,
                "projection": false
              },
              {
                "year": 1983,
                "value": 27.1,
                "projection": false
              },
              {
                "year": 1984,
                "value": 36.1,
                "projection": false
              },
              {
                "year": 1985,
                "value": 33.3,
                "projection": false
              },
              {
                "year": 1986,
                "value": 32.4,
                "projection": false
              },
              {
                "year": 1987,
                "value": 29.9,
                "projection": false
              },
              {
                "year": 1988,
                "value": 31.2,
                "projection": false
              },
              {
                "year": 1989,
                "value": 25.8,
                "projection": false
              },
              {
                "year": 1990,
                "value": 36.4,
                "projection": false
              },
              {
                "year": 1991,
                "value": 25.2,
                "projection": false
              },
              {
                "year": 1992,
                "value": 20.7,
                "projection": false
              },
              {
                "year": 1993,
                "value": 26.1,
                "projection": false
              },
              {
                "year": 1994,
                "value": 37.9,
                "projection": false
              },
              {
                "year": 1995,
                "value": 26.8,
                "projection": false
              },
              {
                "year": 1996,
                "value": 21,
                "projection": false
              },
              {
                "year": 1997,
                "value": 16.1,
                "projection": false
              },
              {
                "year": 1998,
                "value": 12.8,
                "projection": false
              },
              {
                "year": 1999,
                "value": 7.9,
                "projection": false
              },
              {
                "year": 2000,
                "value": 6,
                "projection": false
              },
              {
                "year": 2001,
                "value": 5.1,
                "projection": false
              },
              {
                "year": 2002,
                "value": 4.6,
                "projection": false
              },
              {
                "year": 2003,
                "value": 4.4,
                "projection": false
              },
              {
                "year": 2004,
                "value": 4.1,
                "projection": false
              },
              {
                "year": 2005,
                "value": 4.4,
                "projection": false
              },
              {
                "year": 2006,
                "value": 7.3,
                "projection": false
              },
              {
                "year": 2007,
                "value": 7,
                "projection": false
              },
              {
                "year": 2008,
                "value": 10.3,
                "projection": false
              },
              {
                "year": 2009,
                "value": 12.1,
                "projection": false
              },
              {
                "year": 2010,
                "value": 7.2,
                "projection": false
              },
              {
                "year": 2011,
                "value": 12.7,
                "projection": false
              },
              {
                "year": 2012,
                "value": 16,
                "projection": false
              },
              {
                "year": 2013,
                "value": 7.9,
                "projection": false
              },
              {
                "year": 2014,
                "value": 6.1,
                "projection": false
              },
              {
                "year": 2015,
                "value": 5.6,
                "projection": false
              },
              {
                "year": 2016,
                "value": 5.2,
                "projection": false
              },
              {
                "year": 2017,
                "value": 5.3,
                "projection": false
              },
              {
                "year": 2018,
                "value": 3.5,
                "projection": false
              },
              {
                "year": 2019,
                "value": 3.4,
                "projection": false
              },
              {
                "year": 2020,
                "value": 3.3,
                "projection": false
              },
              {
                "year": 2021,
                "value": 3.7,
                "projection": false
              },
              {
                "year": 2022,
                "value": 4.4,
                "projection": false
              },
              {
                "year": 2023,
                "value": 3.8,
                "projection": false
              },
              {
                "year": 2024,
                "value": 3.1,
                "projection": false
              },
              {
                "year": 2025,
                "value": 3.3,
                "projection": false
              },
              {
                "year": 2026,
                "value": 4,
                "projection": true
              },
              {
                "year": 2027,
                "value": 4.3,
                "projection": true
              },
              {
                "year": 2028,
                "value": 4,
                "projection": true
              },
              {
                "year": 2029,
                "value": 4,
                "projection": true
              },
              {
                "year": 2030,
                "value": 4,
                "projection": true
              },
              {
                "year": 2031,
                "value": 4,
                "projection": true
              }
            ]
          },
          "currentAccount": {
            "value": -2.3,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1980,
                "value": -4.8,
                "projection": false
              },
              {
                "year": 1981,
                "value": -3.1,
                "projection": false
              },
              {
                "year": 1982,
                "value": -3.5,
                "projection": false
              },
              {
                "year": 1983,
                "value": -2,
                "projection": false
              },
              {
                "year": 1984,
                "value": -2.6,
                "projection": false
              },
              {
                "year": 1985,
                "value": -3,
                "projection": false
              },
              {
                "year": 1986,
                "value": -2,
                "projection": false
              },
              {
                "year": 1987,
                "value": -5.2,
                "projection": false
              },
              {
                "year": 1988,
                "value": -4.8,
                "projection": false
              },
              {
                "year": 1989,
                "value": -5.2,
                "projection": false
              },
              {
                "year": 1990,
                "value": -10.8,
                "projection": false
              },
              {
                "year": 1991,
                "value": -12.3,
                "projection": false
              },
              {
                "year": 1992,
                "value": -12.8,
                "projection": false
              },
              {
                "year": 1993,
                "value": -17.3,
                "projection": false
              },
              {
                "year": 1994,
                "value": -11.6,
                "projection": false
              },
              {
                "year": 1995,
                "value": -9.2,
                "projection": false
              },
              {
                "year": 1996,
                "value": -5.2,
                "projection": false
              },
              {
                "year": 1997,
                "value": -4.7,
                "projection": false
              },
              {
                "year": 1998,
                "value": -6.1,
                "projection": false
              },
              {
                "year": 1999,
                "value": -6.6,
                "projection": false
              },
              {
                "year": 2000,
                "value": -3.2,
                "projection": false
              },
              {
                "year": 2001,
                "value": -2.5,
                "projection": false
              },
              {
                "year": 2002,
                "value": -1.3,
                "projection": false
              },
              {
                "year": 2003,
                "value": -1.1,
                "projection": false
              },
              {
                "year": 2004,
                "value": -3.2,
                "projection": false
              },
              {
                "year": 2005,
                "value": -5.3,
                "projection": false
              },
              {
                "year": 2006,
                "value": -7.1,
                "projection": false
              },
              {
                "year": 2007,
                "value": -8.4,
                "projection": false
              },
              {
                "year": 2008,
                "value": -7.7,
                "projection": false
              },
              {
                "year": 2009,
                "value": -7.4,
                "projection": false
              },
              {
                "year": 2010,
                "value": -7.4,
                "projection": false
              },
              {
                "year": 2011,
                "value": -10.4,
                "projection": false
              },
              {
                "year": 2012,
                "value": -11.6,
                "projection": false
              },
              {
                "year": 2013,
                "value": -10.7,
                "projection": false
              },
              {
                "year": 2014,
                "value": -9.8,
                "projection": false
              },
              {
                "year": 2015,
                "value": -7.7,
                "projection": false
              },
              {
                "year": 2016,
                "value": -4.2,
                "projection": false
              },
              {
                "year": 2017,
                "value": -2.8,
                "projection": false
              },
              {
                "year": 2018,
                "value": -4.2,
                "projection": false
              },
              {
                "year": 2019,
                "value": -2.3,
                "projection": false
              },
              {
                "year": 2020,
                "value": -2.3,
                "projection": false
              },
              {
                "year": 2021,
                "value": -3.5,
                "projection": false
              },
              {
                "year": 2022,
                "value": -7.4,
                "projection": false
              },
              {
                "year": 2023,
                "value": -3.8,
                "projection": false
              },
              {
                "year": 2024,
                "value": -2.8,
                "projection": false
              },
              {
                "year": 2025,
                "value": -2.4,
                "projection": false
              },
              {
                "year": 2026,
                "value": -2.3,
                "projection": true
              },
              {
                "year": 2027,
                "value": -2.1,
                "projection": true
              },
              {
                "year": 2028,
                "value": -2,
                "projection": true
              },
              {
                "year": 2029,
                "value": -2,
                "projection": true
              },
              {
                "year": 2030,
                "value": -2,
                "projection": true
              },
              {
                "year": 2031,
                "value": -2,
                "projection": true
              }
            ]
          },
          "fiscalBalance": {
            "value": -3.2,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1991,
                "value": 0.6,
                "projection": false
              },
              {
                "year": 1992,
                "value": -5,
                "projection": false
              },
              {
                "year": 1993,
                "value": -2,
                "projection": false
              },
              {
                "year": 1994,
                "value": -3.7,
                "projection": false
              },
              {
                "year": 1995,
                "value": -2.1,
                "projection": false
              },
              {
                "year": 1996,
                "value": 1.6,
                "projection": false
              },
              {
                "year": 1997,
                "value": 0,
                "projection": false
              },
              {
                "year": 1998,
                "value": 0.1,
                "projection": false
              },
              {
                "year": 1999,
                "value": -1.1,
                "projection": false
              },
              {
                "year": 2000,
                "value": -0.7,
                "projection": false
              },
              {
                "year": 2001,
                "value": -0.4,
                "projection": false
              },
              {
                "year": 2002,
                "value": -0.7,
                "projection": false
              },
              {
                "year": 2003,
                "value": -1.8,
                "projection": false
              },
              {
                "year": 2004,
                "value": -2.4,
                "projection": false
              },
              {
                "year": 2005,
                "value": -3.3,
                "projection": false
              },
              {
                "year": 2006,
                "value": -3.4,
                "projection": false
              },
              {
                "year": 2007,
                "value": -1.4,
                "projection": false
              },
              {
                "year": 2008,
                "value": -1.9,
                "projection": false
              },
              {
                "year": 2009,
                "value": -4.5,
                "projection": false
              },
              {
                "year": 2010,
                "value": -4.7,
                "projection": false
              },
              {
                "year": 2011,
                "value": -3.5,
                "projection": false
              },
              {
                "year": 2012,
                "value": -4,
                "projection": false
              },
              {
                "year": 2013,
                "value": -3.8,
                "projection": false
              },
              {
                "year": 2014,
                "value": -2.9,
                "projection": false
              },
              {
                "year": 2015,
                "value": -3.2,
                "projection": false
              },
              {
                "year": 2016,
                "value": -2.1,
                "projection": false
              },
              {
                "year": 2017,
                "value": -1.1,
                "projection": false
              },
              {
                "year": 2018,
                "value": -2,
                "projection": false
              },
              {
                "year": 2019,
                "value": -2.1,
                "projection": false
              },
              {
                "year": 2020,
                "value": -2.6,
                "projection": false
              },
              {
                "year": 2021,
                "value": -3.5,
                "projection": false
              },
              {
                "year": 2022,
                "value": -3.9,
                "projection": false
              },
              {
                "year": 2023,
                "value": -3.7,
                "projection": false
              },
              {
                "year": 2024,
                "value": -3,
                "projection": false
              },
              {
                "year": 2025,
                "value": -3,
                "projection": false
              },
              {
                "year": 2026,
                "value": -3.2,
                "projection": true
              },
              {
                "year": 2027,
                "value": -3.2,
                "projection": true
              },
              {
                "year": 2028,
                "value": -3.2,
                "projection": true
              },
              {
                "year": 2029,
                "value": -3.2,
                "projection": true
              },
              {
                "year": 2030,
                "value": -3.2,
                "projection": true
              },
              {
                "year": 2031,
                "value": -3.2,
                "projection": true
              }
            ]
          },
          "governmentDebt": {
            "value": 48.7,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 2001,
                "value": 50.8,
                "projection": false
              },
              {
                "year": 2002,
                "value": 47.4,
                "projection": false
              },
              {
                "year": 2003,
                "value": 44.4,
                "projection": false
              },
              {
                "year": 2004,
                "value": 44.5,
                "projection": false
              },
              {
                "year": 2005,
                "value": 25.4,
                "projection": false
              },
              {
                "year": 2006,
                "value": 17.4,
                "projection": false
              },
              {
                "year": 2007,
                "value": 23.8,
                "projection": false
              },
              {
                "year": 2008,
                "value": 21.6,
                "projection": false
              },
              {
                "year": 2009,
                "value": 23.9,
                "projection": false
              },
              {
                "year": 2010,
                "value": 27.6,
                "projection": false
              },
              {
                "year": 2011,
                "value": 28.4,
                "projection": false
              },
              {
                "year": 2012,
                "value": 30,
                "projection": false
              },
              {
                "year": 2013,
                "value": 32.7,
                "projection": false
              },
              {
                "year": 2014,
                "value": 36.4,
                "projection": false
              },
              {
                "year": 2015,
                "value": 39.5,
                "projection": false
              },
              {
                "year": 2016,
                "value": 39.8,
                "projection": false
              },
              {
                "year": 2017,
                "value": 40.1,
                "projection": false
              },
              {
                "year": 2018,
                "value": 42,
                "projection": false
              },
              {
                "year": 2019,
                "value": 40.4,
                "projection": false
              },
              {
                "year": 2020,
                "value": 41.3,
                "projection": false
              },
              {
                "year": 2021,
                "value": 43.4,
                "projection": false
              },
              {
                "year": 2022,
                "value": 44.9,
                "projection": false
              },
              {
                "year": 2023,
                "value": 47.8,
                "projection": false
              },
              {
                "year": 2024,
                "value": 49.9,
                "projection": false
              },
              {
                "year": 2025,
                "value": 49.7,
                "projection": false
              },
              {
                "year": 2026,
                "value": 48.7,
                "projection": true
              },
              {
                "year": 2027,
                "value": 47.5,
                "projection": true
              },
              {
                "year": 2028,
                "value": 46.2,
                "projection": true
              },
              {
                "year": 2029,
                "value": 45.1,
                "projection": true
              },
              {
                "year": 2030,
                "value": 44,
                "projection": true
              },
              {
                "year": 2031,
                "value": 42.6,
                "projection": true
              }
            ]
          }
        }
      },
      "worldBank": {
        "indicators": {
          "reserveMonths": {
            "value": 5.39079350340926,
            "year": 2018,
            "unit": "months",
            "series": [
              {
                "value": 4.29719695420776,
                "year": 2015,
                "projection": false
              },
              {
                "value": 5.21352348052124,
                "year": 2016,
                "projection": false
              },
              {
                "value": 6.82823894355722,
                "year": 2017,
                "projection": false
              },
              {
                "value": 5.39079350340926,
                "year": 2018,
                "projection": false
              }
            ]
          },
          "externalDebtGni": {
            "value": 47.3169345002777,
            "year": 2024,
            "unit": "percent",
            "series": [
              {
                "value": 39.2891880346749,
                "year": 2015,
                "projection": false
              },
              {
                "value": 40.0079292679425,
                "year": 2016,
                "projection": false
              },
              {
                "value": 41.3009336301928,
                "year": 2017,
                "projection": false
              },
              {
                "value": 40.1480140958611,
                "year": 2018,
                "projection": false
              },
              {
                "value": 40.7439096992124,
                "year": 2019,
                "projection": false
              },
              {
                "value": 39.7693712686611,
                "year": 2020,
                "projection": false
              },
              {
                "value": 41.4860546069249,
                "year": 2021,
                "projection": false
              },
              {
                "value": 40.9318313478855,
                "year": 2022,
                "projection": false
              },
              {
                "value": 44.5950861063729,
                "year": 2023,
                "projection": false
              },
              {
                "value": 47.3169345002777,
                "year": 2024,
                "projection": false
              }
            ]
          },
          "debtServiceExports": {
            "value": 12.0902915457182,
            "year": 2024,
            "unit": "percent",
            "series": [
              {
                "value": 5.46782036212007,
                "year": 2015,
                "projection": false
              },
              {
                "value": 8.75068736774752,
                "year": 2016,
                "projection": false
              },
              {
                "value": 9.78631284555373,
                "year": 2017,
                "projection": false
              },
              {
                "value": 12.2530206587852,
                "year": 2018,
                "projection": false
              },
              {
                "value": 12.377385688911,
                "year": 2019,
                "projection": false
              },
              {
                "value": 16.1350828868982,
                "year": 2020,
                "projection": false
              },
              {
                "value": 18.5818651087015,
                "year": 2021,
                "projection": false
              },
              {
                "value": 16.4065014653654,
                "year": 2022,
                "projection": false
              },
              {
                "value": 15.5601135966803,
                "year": 2023,
                "projection": false
              },
              {
                "value": 12.0902915457182,
                "year": 2024,
                "projection": false
              }
            ]
          }
        }
      },
      "trade": {
        "year": 2024,
        "exportsTotal": 11979635815,
        "importsTotal": 20548454829,
        "topExports": [
          {
            "name": "Gold",
            "value": 4486595130,
            "share": 37.45184911533139
          },
          {
            "name": "Refined Petroleum",
            "value": 636366313,
            "share": 5.3120672683821475
          },
          {
            "name": "Coconuts, Brazil Nuts, and Cashews",
            "value": 627853419,
            "share": 5.2410058927989205
          },
          {
            "name": "Raw Tobacco",
            "value": 599112381,
            "share": 5.001090102003239
          },
          {
            "name": "Dried Legumes",
            "value": 442784584,
            "share": 3.6961439465929202
          }
        ],
        "topImports": [
          {
            "name": "Refined Petroleum",
            "value": 4978897618,
            "share": 24.230034128762277
          },
          {
            "name": "Cars",
            "value": 436104353,
            "share": 2.1223218807894337
          },
          {
            "name": "Tractors",
            "value": 434733360,
            "share": 2.1156498803329074
          },
          {
            "name": "Palm Oil",
            "value": 375849614,
            "share": 1.8290894236464148
          },
          {
            "name": "Wheat",
            "value": 370111305,
            "share": 1.8011636791184054
          }
        ],
        "exportPartners": [
          {
            "name": "South Africa",
            "value": 2295049632.9999995,
            "share": 19.157924902243778
          },
          {
            "name": "India",
            "value": 1834167538,
            "share": 15.310711997633462
          },
          {
            "name": "Uganda",
            "value": 1714017281,
            "share": 14.30775782727749
          },
          {
            "name": "United Arab Emirates",
            "value": 625152451,
            "share": 5.218459564665823
          },
          {
            "name": "China",
            "value": 593549714,
            "share": 4.954655743848253
          }
        ],
        "importPartners": [
          {
            "name": "China",
            "value": 6076082581,
            "share": 29.569535186776353
          },
          {
            "name": "India",
            "value": 4729384311,
            "share": 23.015766150579008
          },
          {
            "name": "United Arab Emirates",
            "value": 1663687593.0000002,
            "share": 8.096412147992952
          },
          {
            "name": "South Korea",
            "value": 627375553,
            "share": 3.0531519679746717
          },
          {
            "name": "Japan",
            "value": 599967086,
            "share": 2.9197674034023593
          }
        ]
      }
    },
    "ethiopia": {
      "imf": {
        "indicators": {
          "realGdpGrowth": {
            "value": 9.2,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1980,
                "value": 4,
                "projection": false
              },
              {
                "year": 1981,
                "value": 0,
                "projection": false
              },
              {
                "year": 1982,
                "value": 1,
                "projection": false
              },
              {
                "year": 1983,
                "value": 7.8,
                "projection": false
              },
              {
                "year": 1984,
                "value": -2.3,
                "projection": false
              },
              {
                "year": 1985,
                "value": -11.4,
                "projection": false
              },
              {
                "year": 1986,
                "value": 9.7,
                "projection": false
              },
              {
                "year": 1987,
                "value": 13.9,
                "projection": false
              },
              {
                "year": 1988,
                "value": 0.6,
                "projection": false
              },
              {
                "year": 1989,
                "value": -0.5,
                "projection": false
              },
              {
                "year": 1990,
                "value": 2.6,
                "projection": false
              },
              {
                "year": 1991,
                "value": -7.2,
                "projection": false
              },
              {
                "year": 1992,
                "value": -8.9,
                "projection": false
              },
              {
                "year": 1993,
                "value": 13.4,
                "projection": false
              },
              {
                "year": 1994,
                "value": 3.5,
                "projection": false
              },
              {
                "year": 1995,
                "value": 6.1,
                "projection": false
              },
              {
                "year": 1996,
                "value": 13.5,
                "projection": false
              },
              {
                "year": 1997,
                "value": 2.8,
                "projection": false
              },
              {
                "year": 1998,
                "value": -4.2,
                "projection": false
              },
              {
                "year": 1999,
                "value": 6.3,
                "projection": false
              },
              {
                "year": 2000,
                "value": 9.8,
                "projection": false
              },
              {
                "year": 2001,
                "value": 7.4,
                "projection": false
              },
              {
                "year": 2002,
                "value": 1.6,
                "projection": false
              },
              {
                "year": 2003,
                "value": -2.1,
                "projection": false
              },
              {
                "year": 2004,
                "value": 11.7,
                "projection": false
              },
              {
                "year": 2005,
                "value": 12.6,
                "projection": false
              },
              {
                "year": 2006,
                "value": 11.5,
                "projection": false
              },
              {
                "year": 2007,
                "value": 11.8,
                "projection": false
              },
              {
                "year": 2008,
                "value": 11.2,
                "projection": false
              },
              {
                "year": 2009,
                "value": 10,
                "projection": false
              },
              {
                "year": 2010,
                "value": 10.6,
                "projection": false
              },
              {
                "year": 2011,
                "value": 11.4,
                "projection": false
              },
              {
                "year": 2012,
                "value": 8.7,
                "projection": false
              },
              {
                "year": 2013,
                "value": 9.9,
                "projection": false
              },
              {
                "year": 2014,
                "value": 10.3,
                "projection": false
              },
              {
                "year": 2015,
                "value": 10.4,
                "projection": false
              },
              {
                "year": 2016,
                "value": 8,
                "projection": false
              },
              {
                "year": 2017,
                "value": 10.2,
                "projection": false
              },
              {
                "year": 2018,
                "value": 7.7,
                "projection": false
              },
              {
                "year": 2019,
                "value": 9,
                "projection": false
              },
              {
                "year": 2020,
                "value": 6.1,
                "projection": false
              },
              {
                "year": 2021,
                "value": 6.3,
                "projection": false
              },
              {
                "year": 2022,
                "value": 6.4,
                "projection": false
              },
              {
                "year": 2023,
                "value": 7.2,
                "projection": false
              },
              {
                "year": 2024,
                "value": 8.1,
                "projection": false
              },
              {
                "year": 2025,
                "value": 9.2,
                "projection": false
              },
              {
                "year": 2026,
                "value": 9.2,
                "projection": true
              },
              {
                "year": 2027,
                "value": 7.9,
                "projection": true
              },
              {
                "year": 2028,
                "value": 8.2,
                "projection": true
              },
              {
                "year": 2029,
                "value": 8.5,
                "projection": true
              },
              {
                "year": 2030,
                "value": 8,
                "projection": true
              },
              {
                "year": 2031,
                "value": 7.7,
                "projection": true
              }
            ]
          },
          "inflation": {
            "value": 11.8,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1980,
                "value": 12.4,
                "projection": false
              },
              {
                "year": 1981,
                "value": 1.9,
                "projection": false
              },
              {
                "year": 1982,
                "value": 7.8,
                "projection": false
              },
              {
                "year": 1983,
                "value": 3.6,
                "projection": false
              },
              {
                "year": 1984,
                "value": -0.3,
                "projection": false
              },
              {
                "year": 1985,
                "value": 18.4,
                "projection": false
              },
              {
                "year": 1986,
                "value": 5.5,
                "projection": false
              },
              {
                "year": 1987,
                "value": -9.1,
                "projection": false
              },
              {
                "year": 1988,
                "value": 2.2,
                "projection": false
              },
              {
                "year": 1989,
                "value": 9.6,
                "projection": false
              },
              {
                "year": 1990,
                "value": 5.2,
                "projection": false
              },
              {
                "year": 1991,
                "value": 20.9,
                "projection": false
              },
              {
                "year": 1992,
                "value": 21,
                "projection": false
              },
              {
                "year": 1993,
                "value": 10,
                "projection": false
              },
              {
                "year": 1994,
                "value": 1.2,
                "projection": false
              },
              {
                "year": 1995,
                "value": 13.4,
                "projection": false
              },
              {
                "year": 1996,
                "value": 0.9,
                "projection": false
              },
              {
                "year": 1997,
                "value": -6.4,
                "projection": false
              },
              {
                "year": 1998,
                "value": 3.6,
                "projection": false
              },
              {
                "year": 1999,
                "value": 7.9,
                "projection": false
              },
              {
                "year": 2000,
                "value": 0.7,
                "projection": false
              },
              {
                "year": 2001,
                "value": -8.2,
                "projection": false
              },
              {
                "year": 2002,
                "value": 1.7,
                "projection": false
              },
              {
                "year": 2003,
                "value": 17.8,
                "projection": false
              },
              {
                "year": 2004,
                "value": 3.2,
                "projection": false
              },
              {
                "year": 2005,
                "value": 11.7,
                "projection": false
              },
              {
                "year": 2006,
                "value": 13.6,
                "projection": false
              },
              {
                "year": 2007,
                "value": 17.2,
                "projection": false
              },
              {
                "year": 2008,
                "value": 44.4,
                "projection": false
              },
              {
                "year": 2009,
                "value": 8.5,
                "projection": false
              },
              {
                "year": 2010,
                "value": 8.1,
                "projection": false
              },
              {
                "year": 2011,
                "value": 33.2,
                "projection": false
              },
              {
                "year": 2012,
                "value": 24.1,
                "projection": false
              },
              {
                "year": 2013,
                "value": 8.1,
                "projection": false
              },
              {
                "year": 2014,
                "value": 7.4,
                "projection": false
              },
              {
                "year": 2015,
                "value": 9.6,
                "projection": false
              },
              {
                "year": 2016,
                "value": 6.6,
                "projection": false
              },
              {
                "year": 2017,
                "value": 10.7,
                "projection": false
              },
              {
                "year": 2018,
                "value": 13.8,
                "projection": false
              },
              {
                "year": 2019,
                "value": 15.8,
                "projection": false
              },
              {
                "year": 2020,
                "value": 20.4,
                "projection": false
              },
              {
                "year": 2021,
                "value": 26.8,
                "projection": false
              },
              {
                "year": 2022,
                "value": 33.9,
                "projection": false
              },
              {
                "year": 2023,
                "value": 30.2,
                "projection": false
              },
              {
                "year": 2024,
                "value": 21,
                "projection": false
              },
              {
                "year": 2025,
                "value": 13.2,
                "projection": false
              },
              {
                "year": 2026,
                "value": 11.8,
                "projection": true
              },
              {
                "year": 2027,
                "value": 10.7,
                "projection": true
              },
              {
                "year": 2028,
                "value": 8.3,
                "projection": true
              },
              {
                "year": 2029,
                "value": 7.5,
                "projection": true
              },
              {
                "year": 2030,
                "value": 7.5,
                "projection": true
              },
              {
                "year": 2031,
                "value": 7.5,
                "projection": true
              }
            ]
          },
          "currentAccount": {
            "value": -2.4,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1980,
                "value": -3.1,
                "projection": false
              },
              {
                "year": 1981,
                "value": -2.6,
                "projection": false
              },
              {
                "year": 1982,
                "value": -3.7,
                "projection": false
              },
              {
                "year": 1983,
                "value": -2.1,
                "projection": false
              },
              {
                "year": 1984,
                "value": -2.7,
                "projection": false
              },
              {
                "year": 1985,
                "value": 1,
                "projection": false
              },
              {
                "year": 1986,
                "value": -1.9,
                "projection": false
              },
              {
                "year": 1987,
                "value": -0.9,
                "projection": false
              },
              {
                "year": 1988,
                "value": -2.6,
                "projection": false
              },
              {
                "year": 1989,
                "value": -1.4,
                "projection": false
              },
              {
                "year": 1990,
                "value": -1.1,
                "projection": false
              },
              {
                "year": 1991,
                "value": -2.1,
                "projection": false
              },
              {
                "year": 1992,
                "value": 0,
                "projection": false
              },
              {
                "year": 1993,
                "value": 0.1,
                "projection": false
              },
              {
                "year": 1994,
                "value": -1.1,
                "projection": false
              },
              {
                "year": 1995,
                "value": 2.5,
                "projection": false
              },
              {
                "year": 1996,
                "value": 0.3,
                "projection": false
              },
              {
                "year": 1997,
                "value": -0.3,
                "projection": false
              },
              {
                "year": 1998,
                "value": -0.5,
                "projection": false
              },
              {
                "year": 1999,
                "value": -7,
                "projection": false
              },
              {
                "year": 2000,
                "value": -2.5,
                "projection": false
              },
              {
                "year": 2001,
                "value": -1.4,
                "projection": false
              },
              {
                "year": 2002,
                "value": -4,
                "projection": false
              },
              {
                "year": 2003,
                "value": -1.2,
                "projection": false
              },
              {
                "year": 2004,
                "value": -3.8,
                "projection": false
              },
              {
                "year": 2005,
                "value": -7.4,
                "projection": false
              },
              {
                "year": 2006,
                "value": -11.7,
                "projection": false
              },
              {
                "year": 2007,
                "value": -6.2,
                "projection": false
              },
              {
                "year": 2008,
                "value": -5.6,
                "projection": false
              },
              {
                "year": 2009,
                "value": -8.2,
                "projection": false
              },
              {
                "year": 2010,
                "value": -4.5,
                "projection": false
              },
              {
                "year": 2011,
                "value": -0.7,
                "projection": false
              },
              {
                "year": 2012,
                "value": -6.6,
                "projection": false
              },
              {
                "year": 2013,
                "value": -5.9,
                "projection": false
              },
              {
                "year": 2014,
                "value": -7.9,
                "projection": false
              },
              {
                "year": 2015,
                "value": -11.5,
                "projection": false
              },
              {
                "year": 2016,
                "value": -10.9,
                "projection": false
              },
              {
                "year": 2017,
                "value": -8.5,
                "projection": false
              },
              {
                "year": 2018,
                "value": -6.5,
                "projection": false
              },
              {
                "year": 2019,
                "value": -5.3,
                "projection": false
              },
              {
                "year": 2020,
                "value": -4.6,
                "projection": false
              },
              {
                "year": 2021,
                "value": -3.2,
                "projection": false
              },
              {
                "year": 2022,
                "value": -4.3,
                "projection": false
              },
              {
                "year": 2023,
                "value": -2.9,
                "projection": false
              },
              {
                "year": 2024,
                "value": -4.2,
                "projection": false
              },
              {
                "year": 2025,
                "value": -0.9,
                "projection": false
              },
              {
                "year": 2026,
                "value": -2.4,
                "projection": true
              },
              {
                "year": 2027,
                "value": -1.9,
                "projection": true
              },
              {
                "year": 2028,
                "value": -2.1,
                "projection": true
              },
              {
                "year": 2029,
                "value": -2.2,
                "projection": true
              },
              {
                "year": 2030,
                "value": -2.1,
                "projection": true
              },
              {
                "year": 2031,
                "value": -2.6,
                "projection": true
              }
            ]
          },
          "fiscalBalance": {
            "value": -1.8,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1980,
                "value": -2.6,
                "projection": false
              },
              {
                "year": 1981,
                "value": -2.2,
                "projection": false
              },
              {
                "year": 1982,
                "value": -3.6,
                "projection": false
              },
              {
                "year": 1983,
                "value": -7.6,
                "projection": false
              },
              {
                "year": 1984,
                "value": -3.7,
                "projection": false
              },
              {
                "year": 1985,
                "value": -4.7,
                "projection": false
              },
              {
                "year": 1986,
                "value": -4,
                "projection": false
              },
              {
                "year": 1987,
                "value": -3.5,
                "projection": false
              },
              {
                "year": 1988,
                "value": -3.5,
                "projection": false
              },
              {
                "year": 1989,
                "value": -4.3,
                "projection": false
              },
              {
                "year": 1990,
                "value": -6.9,
                "projection": false
              },
              {
                "year": 1991,
                "value": -6,
                "projection": false
              },
              {
                "year": 1992,
                "value": -4.9,
                "projection": false
              },
              {
                "year": 1993,
                "value": -4.1,
                "projection": false
              },
              {
                "year": 1994,
                "value": -5.4,
                "projection": false
              },
              {
                "year": 1995,
                "value": -2.8,
                "projection": false
              },
              {
                "year": 1996,
                "value": -3.9,
                "projection": false
              },
              {
                "year": 1997,
                "value": -1.8,
                "projection": false
              },
              {
                "year": 1998,
                "value": -3.6,
                "projection": false
              },
              {
                "year": 1999,
                "value": -8.5,
                "projection": false
              },
              {
                "year": 2000,
                "value": -8.9,
                "projection": false
              },
              {
                "year": 2001,
                "value": -3.8,
                "projection": false
              },
              {
                "year": 2002,
                "value": -5.8,
                "projection": false
              },
              {
                "year": 2003,
                "value": -5.6,
                "projection": false
              },
              {
                "year": 2004,
                "value": -2.7,
                "projection": false
              },
              {
                "year": 2005,
                "value": -4.1,
                "projection": false
              },
              {
                "year": 2006,
                "value": -3.8,
                "projection": false
              },
              {
                "year": 2007,
                "value": -3.6,
                "projection": false
              },
              {
                "year": 2008,
                "value": -2.9,
                "projection": false
              },
              {
                "year": 2009,
                "value": -0.9,
                "projection": false
              },
              {
                "year": 2010,
                "value": -1.3,
                "projection": false
              },
              {
                "year": 2011,
                "value": -1.6,
                "projection": false
              },
              {
                "year": 2012,
                "value": -1.2,
                "projection": false
              },
              {
                "year": 2013,
                "value": -1.9,
                "projection": false
              },
              {
                "year": 2014,
                "value": -2.6,
                "projection": false
              },
              {
                "year": 2015,
                "value": -1.9,
                "projection": false
              },
              {
                "year": 2016,
                "value": -2.3,
                "projection": false
              },
              {
                "year": 2017,
                "value": -3.2,
                "projection": false
              },
              {
                "year": 2018,
                "value": -3,
                "projection": false
              },
              {
                "year": 2019,
                "value": -2.5,
                "projection": false
              },
              {
                "year": 2020,
                "value": -2.8,
                "projection": false
              },
              {
                "year": 2021,
                "value": -2.8,
                "projection": false
              },
              {
                "year": 2022,
                "value": -4.2,
                "projection": false
              },
              {
                "year": 2023,
                "value": -2.6,
                "projection": false
              },
              {
                "year": 2024,
                "value": -2,
                "projection": false
              },
              {
                "year": 2025,
                "value": -1.2,
                "projection": false
              },
              {
                "year": 2026,
                "value": -1.8,
                "projection": true
              },
              {
                "year": 2027,
                "value": -1,
                "projection": true
              },
              {
                "year": 2028,
                "value": -1.7,
                "projection": true
              },
              {
                "year": 2029,
                "value": -1.5,
                "projection": true
              },
              {
                "year": 2030,
                "value": -1.5,
                "projection": true
              },
              {
                "year": 2031,
                "value": -1.5,
                "projection": true
              }
            ]
          },
          "governmentDebt": {
            "value": 40.4,
            "year": 2026,
            "unit": "percent",
            "projection": true,
            "series": [
              {
                "year": 1992,
                "value": 87.9,
                "projection": false
              },
              {
                "year": 1993,
                "value": 141,
                "projection": false
              },
              {
                "year": 1994,
                "value": 155.2,
                "projection": false
              },
              {
                "year": 1995,
                "value": 146.6,
                "projection": false
              },
              {
                "year": 1996,
                "value": 132.8,
                "projection": false
              },
              {
                "year": 1997,
                "value": 80.3,
                "projection": false
              },
              {
                "year": 1998,
                "value": 89.3,
                "projection": false
              },
              {
                "year": 1999,
                "value": 97.8,
                "projection": false
              },
              {
                "year": 2000,
                "value": 93.6,
                "projection": false
              },
              {
                "year": 2001,
                "value": 97.3,
                "projection": false
              },
              {
                "year": 2002,
                "value": 107.4,
                "projection": false
              },
              {
                "year": 2003,
                "value": 103.7,
                "projection": false
              },
              {
                "year": 2004,
                "value": 103.1,
                "projection": false
              },
              {
                "year": 2005,
                "value": 78.2,
                "projection": false
              },
              {
                "year": 2006,
                "value": 79.6,
                "projection": false
              },
              {
                "year": 2007,
                "value": 55.7,
                "projection": false
              },
              {
                "year": 2008,
                "value": 56.1,
                "projection": false
              },
              {
                "year": 2009,
                "value": 30,
                "projection": false
              },
              {
                "year": 2010,
                "value": 39.4,
                "projection": false
              },
              {
                "year": 2011,
                "value": 44.6,
                "projection": false
              },
              {
                "year": 2012,
                "value": 39.4,
                "projection": false
              },
              {
                "year": 2013,
                "value": 44.1,
                "projection": false
              },
              {
                "year": 2014,
                "value": 44.2,
                "projection": false
              },
              {
                "year": 2015,
                "value": 50.7,
                "projection": false
              },
              {
                "year": 2016,
                "value": 51.8,
                "projection": false
              },
              {
                "year": 2017,
                "value": 55.3,
                "projection": false
              },
              {
                "year": 2018,
                "value": 58.4,
                "projection": false
              },
              {
                "year": 2019,
                "value": 54.7,
                "projection": false
              },
              {
                "year": 2020,
                "value": 53.2,
                "projection": false
              },
              {
                "year": 2021,
                "value": 53.8,
                "projection": false
              },
              {
                "year": 2022,
                "value": 46.9,
                "projection": false
              },
              {
                "year": 2023,
                "value": 38.7,
                "projection": false
              },
              {
                "year": 2024,
                "value": 33.4,
                "projection": false
              },
              {
                "year": 2025,
                "value": 43.1,
                "projection": false
              },
              {
                "year": 2026,
                "value": 40.4,
                "projection": true
              },
              {
                "year": 2027,
                "value": 36.1,
                "projection": true
              },
              {
                "year": 2028,
                "value": 33.6,
                "projection": true
              },
              {
                "year": 2029,
                "value": 31.1,
                "projection": true
              },
              {
                "year": 2030,
                "value": 29.1,
                "projection": true
              },
              {
                "year": 2031,
                "value": 27,
                "projection": true
              }
            ]
          }
        }
      },
      "worldBank": {
        "indicators": {
          "reserveMonths": {
            "value": 1.7806234891991,
            "year": 2024,
            "unit": "months",
            "series": [
              {
                "value": 2.28152768719768,
                "year": 2015,
                "projection": false
              },
              {
                "value": 1.78101039203727,
                "year": 2016,
                "projection": false
              },
              {
                "value": 1.84484716277073,
                "year": 2017,
                "projection": false
              },
              {
                "value": 2.35373732912292,
                "year": 2018,
                "projection": false
              },
              {
                "value": 1.80527864372518,
                "year": 2019,
                "projection": false
              },
              {
                "value": 2.04857901561174,
                "year": 2020,
                "projection": false
              },
              {
                "value": 0.92146131951932,
                "year": 2021,
                "projection": false
              },
              {
                "value": 0.578588743645571,
                "year": 2022,
                "projection": false
              },
              {
                "value": 1.04253332393312,
                "year": 2023,
                "projection": false
              },
              {
                "value": 1.7806234891991,
                "year": 2024,
                "projection": false
              }
            ]
          },
          "externalDebtGni": {
            "value": 24.2638688064282,
            "year": 2022,
            "unit": "percent",
            "series": [
              {
                "value": 31.7812582331685,
                "year": 2015,
                "projection": false
              },
              {
                "value": 31.5941088728904,
                "year": 2016,
                "projection": false
              },
              {
                "value": 32.195990368417,
                "year": 2017,
                "projection": false
              },
              {
                "value": 35.572601682596,
                "year": 2018,
                "projection": false
              },
              {
                "value": 31.8677861051946,
                "year": 2019,
                "projection": false
              },
              {
                "value": 30.2340278652052,
                "year": 2020,
                "projection": false
              },
              {
                "value": 28.9101982304795,
                "year": 2021,
                "projection": false
              },
              {
                "value": 24.2638688064282,
                "year": 2022,
                "projection": false
              }
            ]
          },
          "debtServiceExports": {
            "value": 11.538041500051,
            "year": 2024,
            "unit": "percent",
            "series": [
              {
                "value": 18.2926128660911,
                "year": 2015,
                "projection": false
              },
              {
                "value": 20.9349904391639,
                "year": 2016,
                "projection": false
              },
              {
                "value": 22.2353979988408,
                "year": 2017,
                "projection": false
              },
              {
                "value": 21.4915673746629,
                "year": 2018,
                "projection": false
              },
              {
                "value": 28.9364069267454,
                "year": 2019,
                "projection": false
              },
              {
                "value": 26.1117055633717,
                "year": 2020,
                "projection": false
              },
              {
                "value": 21.2158220927836,
                "year": 2021,
                "projection": false
              },
              {
                "value": 18.3033612266851,
                "year": 2022,
                "projection": false
              },
              {
                "value": 14.3397323570812,
                "year": 2023,
                "projection": false
              },
              {
                "value": 11.538041500051,
                "year": 2024,
                "projection": false
              }
            ]
          }
        }
      }
    }
  }
};
})();
