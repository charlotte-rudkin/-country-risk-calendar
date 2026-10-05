import fs from 'node:fs';
import vm from 'node:vm';
const context = { window: {} };
vm.runInNewContext(fs.readFileSync('data/economics.js', 'utf8'), context);
const data = context.window.ECONOMIC_DATA;
if (data.schemaVersion !== 2 || !data.jurisdictions) throw new Error('Audit requires schema v2 economic data');
const expected = {
  imf: ['realGdpGrowth','inflation','currentAccount','fiscalBalance','governmentDebt'],
  worldBank: ['reserveMonths','interestPaymentsRevenue','externalDebtGni','shortTermDebtPct','concessionalDebtPct','debtServiceExports','gdpPerCapita']
};
const debt = new Set(['externalDebtGni','shortTermDebtPct','concessionalDebtPct','debtServiceExports']);
const codes = {reserveMonths:'FI.RES.TOTL.MO',interestPaymentsRevenue:'GC.XPN.INTP.RV.ZS',externalDebtGni:'DT.DOD.DECT.GN.ZS',shortTermDebtPct:'DT.DOD.DSTC.ZS',concessionalDebtPct:'DT.DOD.ALLC.ZS',debtServiceExports:'DT.TDS.DECT.EX.ZS',gdpPerCapita:'NY.GDP.PCAP.CD'};
const rows = [];
for (const [iso3, record] of Object.entries(data.jurisdictions)) {
  for (const [provider, metrics] of Object.entries(expected)) {
    const refresh = record.refresh?.[provider] || {};
    for (const metric of metrics) {
      const point = record[provider]?.indicators?.[metric];
      const present = point && typeof point.value === 'number' && Number.isFinite(point.value);
      const retained = refresh.retainedMetricKeys?.includes(metric) || (refresh.retainedPrevious && ['error','failed','stale'].includes(refresh.status));
      const perMetric = refresh.metrics?.[metric];
      const matchingWarnings = provider === 'imf' ? (refresh.warnings || []) : (refresh.warnings || []).filter(w=>codes[metric] && w.startsWith(codes[metric]+':'));
      const requestFailed = perMetric?.status === 'retrieval_failed' || (!perMetric && matchingWarnings.some(w=>/API error|fetch failed|HTTP |timeout|aborted|not found/i.test(w)));
      const status = retained ? 'retained_previous' : requestFailed ? 'retrieval_failed' : !present ? 'missing' : point.stale ? 'stale_observation' : 'available';
      rows.push({iso3, provider, metric, status, value: present ? point.value : null, year: point?.year ?? null,
        sourceCode: point?.sourceCode ?? perMetric?.sourceCode ?? codes[metric] ?? null,
        lastAttempt: perMetric?.lastAttemptAt ?? refresh.lastAttemptAt ?? null,
        lastSuccess: perMetric ? perMetric.lastSuccessAt : present && !retained && !requestFailed ? refresh.lastSuccessAt ?? null : null,
        metricRefreshStatus: perMetric?.status || (requestFailed ? 'retrieval_failed' : 'not_recorded'),
        requests: perMetric?.requests || [], sourceUrl: point?.sourceUrl || null,
        calculationMethod: point?.calculationMethod || null, inputSources: point?.inputSources || [],
        providerStatus: refresh.status ?? 'unknown', error: perMetric?.error ?? (requestFailed ? matchingWarnings.join(' | ') : refresh.error) ?? null, warnings: perMetric ? (perMetric.error ? [perMetric.error] : []) : matchingWarnings,
        coverageNote: requestFailed ? 'Retrieval failed; this does not establish missing country coverage.' : !present && provider === 'worldBank' && debt.has(metric)
          ? iso3 === 'USA' ? 'Outside IDS country coverage; not zero.' : 'Check IDS reporting-country coverage before treating as retrieval failure.'
          : null});
    }
  }
  for (const provider of ['oec','unctad']) rows.push({iso3, provider, metric:'provider', status:record.refresh?.[provider]?.status ?? 'pending', refresh:record.refresh?.[provider] ?? {}});
}
const counts = {};
for (const row of rows) { const key = `${row.provider}: ${row.status}`; counts[key] = (counts[key] || 0) + 1; }
fs.mkdirSync('audit-output', {recursive:true});
fs.writeFileSync('audit-output/economic-coverage.json', JSON.stringify({auditedAt:new Date().toISOString(),dataGeneratedAt:data.generatedAt,jurisdictions:Object.keys(data.jurisdictions).length,counts,rows},null,2));
const missing = rows.filter(r => ['missing','retained_previous','stale_observation','retrieval_failed'].includes(r.status));
const report = ['# Economic coverage audit', '', `Data file timestamp: ${data.generatedAt}`, '',
  'Availability is not verification of numerical accuracy. Provider success does not prove every metric refreshed. Missing values are not zero.', '',
  ...Object.entries(counts).map(([k,v]) => `- ${k}: ${v}`), '', '## Metric gaps and retained values', '',
  '| Country | Provider | Metric | Status | Observation year |', '|---|---|---|---|---|',
  ...missing.map(r => `| ${r.iso3} | ${r.provider} | ${r.metric} | ${r.status} | ${r.year ?? '—'} |`), '',
  'Full provider diagnostics and coverage notes are in economic-coverage.json.', ''].join('\n');
fs.writeFileSync('audit-output/economic-coverage.md',report);
if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, report.slice(0,900000));
console.log(JSON.stringify(counts,null,2));
