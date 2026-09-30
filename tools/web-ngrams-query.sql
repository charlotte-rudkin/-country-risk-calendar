-- Stage-one BigQuery template. It intentionally produces review candidates,
-- not publishable dashboard records. Supply @scan_date and @anchor_terms as
-- query parameters when a Google Cloud project and cost controls are ready.
SELECT
  date,
  url,
  lang,
  pre,
  ngram,
  post
FROM `gdelt-bq.gdeltv2.webngrams`
WHERE DATE(date) = @scan_date
  AND lang = 'en'
  AND LOWER(ngram) IN UNNEST(@anchor_terms)
QUALIFY ROW_NUMBER() OVER (
  PARTITION BY url, LOWER(ngram)
  ORDER BY date DESC
) = 1
ORDER BY date DESC;
