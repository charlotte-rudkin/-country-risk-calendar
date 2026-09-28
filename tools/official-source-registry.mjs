export const WORLD_BANK_COUNTRY_NAMES = Object.freeze({
  usa: "United States",
  mexico: "Mexico",
  bahamas: "Bahamas, The",
  serbia: "Serbia",
  turkey: "Turkiye",
  egypt: "Egypt, Arab Republic of",
  uzbekistan: "Uzbekistan",
  vietnam: "Vietnam",
  senegal: "Senegal",
  cotedivoire: "Cote d'Ivoire",
  benin: "Benin",
  angola: "Angola",
  kenya: "Kenya",
  tanzania: "Tanzania",
  ethiopia: "Ethiopia"
});

export const GLOBAL_OFFICIAL_SOURCES = Object.freeze([
  {
    id: "imf-news",
    label: "International Monetary Fund",
    kind: "feed-discovery",
    url: "https://www.imf.org/en/News/RSS"
  },
  {
    id: "eu-council-press",
    label: "Council of the European Union",
    kind: "rss",
    url: "https://www.consilium.europa.eu/en/rss/pressreleases.ashx"
  },
  {
    id: "fatf-news",
    label: "Financial Action Task Force",
    kind: "html",
    url: "https://www.fatf-gafi.org/en/the-fatf/news.html"
  },
  {
    id: "ofac-recent-actions",
    label: "US Treasury OFAC",
    kind: "html",
    url: "https://ofac.treasury.gov/recent-actions"
  },
  {
    id: "fitch-sovereigns",
    label: "Fitch Ratings",
    kind: "html",
    url: "https://www.fitchratings.com/research/sovereigns"
  },
  {
    id: "moodys-sovereigns",
    label: "Moody's Ratings",
    kind: "html",
    url: "https://ratings.moodys.com/sovereign-ratings"
  },
  {
    id: "sp-sovereign-actions",
    label: "S&P Global Ratings",
    kind: "html",
    url: "https://www.spglobal.com/ratings/en/regulatory/ratings-actions?app=sp"
  }
]);

export const COUNTRY_OFFICIAL_SOURCES = Object.freeze([
  { id: "us-fed", countryKey: "usa", label: "Federal Reserve", kind: "rss", url: "https://www.federalreserve.gov/feeds/press_all.xml" },
  { id: "mx-banxico", countryKey: "mexico", label: "Banco de México", kind: "html", url: "https://www.banxico.org.mx/publications-and-press/press-releases/" },
  { id: "bs-central-bank", countryKey: "bahamas", label: "Central Bank of The Bahamas", kind: "html", url: "https://www.centralbankbahamas.com/news.php" },
  { id: "rs-nbs", countryKey: "serbia", label: "National Bank of Serbia", kind: "html", url: "https://www.nbs.rs/en/scripts/showcontent/index.html?id=1827" },
  { id: "tr-tcmb", countryKey: "turkey", label: "Central Bank of the Republic of Türkiye", kind: "html", url: "https://www.tcmb.gov.tr/wps/wcm/connect/EN/TCMB+EN/Main+Menu/Announcements/Press+Releases" },
  { id: "eg-cbe", countryKey: "egypt", label: "Central Bank of Egypt", kind: "html", url: "https://www.cbe.org.eg/en/news-publications/news" },
  { id: "uz-cbu", countryKey: "uzbekistan", label: "Central Bank of Uzbekistan", kind: "html", url: "https://cbu.uz/en/press_center/news/" },
  { id: "vn-sbv", countryKey: "vietnam", label: "State Bank of Vietnam", kind: "html", url: "https://www.sbv.gov.vn/webcenter/portal/en/home/sbv/news" },
  { id: "sn-bceao", countryKey: "senegal", label: "BCEAO", kind: "html", url: "https://www.bceao.int/en/communique-presse" },
  { id: "ci-bceao", countryKey: "cotedivoire", label: "BCEAO", kind: "html", url: "https://www.bceao.int/en/communique-presse" },
  { id: "bj-bceao", countryKey: "benin", label: "BCEAO", kind: "html", url: "https://www.bceao.int/en/communique-presse" },
  { id: "ao-bna", countryKey: "angola", label: "Banco Nacional de Angola", kind: "html", url: "https://www.bna.ao/Conteudos/Artigos/lista_artigos.aspx?idc=178&idsc=186&idl=1" },
  { id: "ke-cbk", countryKey: "kenya", label: "Central Bank of Kenya", kind: "html", url: "https://www.centralbank.go.ke/press/" },
  { id: "tz-bot", countryKey: "tanzania", label: "Bank of Tanzania", kind: "html", url: "https://www.bot.go.tz/News/NewsAndPressRelease" },
  { id: "et-nbe", countryKey: "ethiopia", label: "National Bank of Ethiopia", kind: "html", url: "https://nbe.gov.et/news/" }
]);
