// World Bank IDS uses country, series, time and counterpart-area dimensions.
// https://worldbank.github.io/debt-data/api-guide/ids-api-guide-python-2.html
// https://datahelpdesk.worldbank.org/knowledgebase/articles/1886686-advanced-data-api-queries
export function idsRows(json, iso3, code, sourceId) {
  if (json?.message || json?.[0]?.message) throw new Error(`IDS API error: ${JSON.stringify(json.message || json[0].message)}`);
  if (!json || Number(json.pages) > 1) throw new Error('IDS response missing or paginated');
  const source = Array.isArray(json.source) ? json.source.find(s => String(s.id) === String(sourceId)) : json.source;
  if (!source || String(source.id) !== String(sourceId) || !Array.isArray(source.data)) throw new Error('Unrecognised IDS response');
  return source.data.map(row => {
    const vars = Object.fromEntries((row.variable || []).map(v => [String(v.concept).toLowerCase(),v.id]));
    if (vars.country !== iso3 || vars.series !== code || vars['counterpart-area'] !== 'WLD') throw new Error('IDS country, series or creditor-total mismatch');
    const date = String(vars.time || '').replace(/^YR/i,'');
    if (!/^\d{4}$/.test(date)) throw new Error('Invalid IDS observation year');
    return {date,value:row.value};
  });
}
export function annualSeries(rows, currentYear) {
  const years = new Map();
  for (const row of rows) {
    if (row.value === null || row.value === undefined || typeof row.value === 'boolean' || String(row.value).trim() === '') continue;
    const year=Number(row.date),value=Number(row.value);
    if (!Number.isInteger(year) || year < 2015 || year > currentYear || !Number.isFinite(value)) continue;
    if (years.has(year) && years.get(year) !== value) throw new Error(`Conflicting observations for ${year}`);
    years.set(year,value);
  }
  return [...years].sort((a,b)=>a[0]-b[0]).map(([year,value])=>({year,value,projection:false,observationClass:'historical'}));
}
export function concessionalRatio(numerator, denominator) {
  const totals = new Map(denominator.map(p=>[p.year,p.value]));
  return numerator.flatMap(p => {
    const total = totals.get(p.year);
    if (total === undefined || total <= 0) return [];
    if (p.value < 0 || p.value > total) throw new Error('Concessional stock is outside the total debt stock');
    return [{year:p.year,value:100*p.value/total,projection:false,observationClass:'historical'}];
  });
}
export async function fetchConcessionalDebt({iso3,sourceId,currentYear,fetchJson}) {
  const requests=[];
  async function get(code) {
    const url=`https://api.worldbank.org/v2/sources/${sourceId}/country/${encodeURIComponent(iso3)}/series/${code}/counterpart-area/WLD/time/all/data?format=json&per_page=1000`;
    try {
      const json=await fetchJson(url);
      const series=annualSeries(idsRows(json,iso3,code,sourceId),currentYear);
      requests.push({url,status:series.length?'ok':'no_observations'});
      return {series,url,lastUpdated:json.lastupdated || null};
    } catch(error) {requests.push({url,status:'retrieval_failed',error:error.message});throw error;}
  }
  try {
    const direct=await get('DT.DOD.ALLC.ZS');
    if(direct.series.length){
      if(direct.series.some(p=>p.value<0||p.value>100)){ requests.at(-1).status='retrieval_failed'; requests.at(-1).error='Concessional share outside 0–100%'; throw new Error(requests.at(-1).error); }
      return {...direct,sourceCode:'DT.DOD.ALLC.ZS',method:'reported',requests};
    }
  }catch(error){ /* Try same-database stock components; keep every failed request. */ }
  try {
    const results=await Promise.allSettled([get('DT.DOD.ALLC.CD'),get('DT.DOD.DECT.CD')]);
    const failures=results.filter(r=>r.status==='rejected');
    if(failures.length)throw new Error(failures.map(r=>r.reason.message).join(' | '));
    const [n,d]=results.map(r=>r.value);
    if(n.lastUpdated && d.lastUpdated && n.lastUpdated !== d.lastUpdated)throw new Error('Debt components have different publication vintages');
    const series=concessionalRatio(n.series,d.series);
    if(!series.length)throw new Error('No common observation year for concessional and total external debt');
    return {series,url:n.url,sourceCode:'DT.DOD.ALLC.CD / DT.DOD.DECT.CD × 100',method:'calculated',
      definition:'Calculated as concessional external debt stocks divided by total external debt stocks, multiplied by 100; same IDS database, country, World creditor total and observation year.',
      inputSources:[{code:'DT.DOD.ALLC.CD',url:n.url,lastUpdated:n.lastUpdated},{code:'DT.DOD.DECT.CD',url:d.url,lastUpdated:d.lastUpdated}],requests};
  } catch(error) {
    const failure=new Error(`IDS concessional-debt retrieval failed: ${error.message}`);
    failure.requests=requests;throw failure;
  }
}
export function metricRefreshStatuses(previous, metadata, indicators, diagnostics, attemptedAt) {
  return Object.fromEntries(Object.entries(metadata).map(([key, meta])=> {
    const point=indicators[key], issue=diagnostics[key];
    return [key,{sourceCode:point?.sourceCode || meta.code,status:point?'ok':issue?.status || 'retrieval_failed',
      lastAttemptAt:attemptedAt,lastSuccessAt:point?attemptedAt:previous?.[key]?.lastSuccessAt || null,
      error:point?null:issue?.error || 'Metric did not return a value',requests:point?.requests || issue?.requests || []}];
  }));
}
