// Annual merchandise trade. Shares use reported world totals, never top-five sums.
export function rank(rows, flow, year, reporter, products, total) {
  const selected = rows.filter(r => r.flowCode === flow && Number(r.period) === year && Number(r.reporterCode) === reporter &&
    (products ? /^\d{2}$/.test(String(r.cmdCode)) && Number(r.partnerCode) === 0 : r.cmdCode === 'TOTAL' && Number(r.partnerCode) !== 0));
  const seen = new Set();
  return selected.filter(r => {
    const key = products ? r.cmdCode : r.partnerCode;
    if (seen.has(key)) throw new Error('Duplicate trade category returned; refusing to double count');
    seen.add(key);
    return r.primaryValue !== null && Number.isFinite(Number(r.primaryValue)) && Number(r.primaryValue) > 0;
  }).sort((a,b) => b.primaryValue-a.primaryValue).slice(0,5).map(r => ({
    name: products ? r.cmdDesc : r.partnerDesc, value:Number(r.primaryValue), share:total > 0 ? Number(r.primaryValue)/total*100 : null
  }));
}
export async function fetchComtrade(iso3) {
  const key = process.env.COMTRADE_API_KEY;
  if (!key) throw new Error('COMTRADE_API_KEY is missing');
  async function get(url, authenticated = false) {
    const response = await fetch(url, {signal:AbortSignal.timeout(20000), headers:authenticated ? {'Ocp-Apim-Subscription-Key':key} : {}});
    if (!response.ok) {
  const retryAfter = response.headers.get('retry-after');
  const raw = await response.text();
  const detail = raw.split(key).join('[REDACTED]').slice(0, 1000);

  throw new Error(
    `Comtrade HTTP ${response.status}; ` +
    `Retry-After: ${retryAfter || 'not provided'}; ` +
    `Details: ${detail}`
  );
}
    const body = await response.json();
    return body;
  }
  const catalogue = await get('https://comtradeapi.un.org/files/v1/app/reference/Reporters.json');
  const reporterEntry = catalogue.results?.find(r => r.reporterCodeIsoAlpha3 === iso3);
  if (!reporterEntry) throw new Error(`No Comtrade reporter mapping for ${iso3}`);
  const reporter = Number(reporterEntry.reporterCode ?? reporterEntry.id);
  if (!Number.isInteger(reporter)) throw new Error('Invalid Comtrade reporter code');
  const firstYear = new Date().getUTCFullYear()-1;
  for (let year=firstYear;year>=firstYear-2;year--) {
    const query = async (cmdCode, partnerCode) => {
      const url = new URL('https://comtradeapi.un.org/data/v1/get/C/A/HS');
      for (const [k,v] of Object.entries({period:year,reporterCode:reporter,cmdCode,flowCode:'X,M',partner2Code:0,customsCode:'C00',motCode:0,maxRecords:10000,includeDesc:true})) url.searchParams.set(k,String(v));
      if (partnerCode !== null) url.searchParams.set('partnerCode',String(partnerCode));
      const body = await get(url,true);
      if (!Array.isArray(body.data)) throw new Error('Comtrade response has no data array');
      if (body.data.length>=10000) throw new Error('Trade response may be truncated');
      return body.data;
    };
    console.log(`[comtrade] ${iso3}: checking ${year}`);
    const totals = await query('TOTAL',0);
    const total = flow => totals.find(r=>r.flowCode===flow && Number(r.partnerCode)===0 && Number(r.period)===year && Number(r.reporterCode)===reporter)?.primaryValue;
    if (!(total('X')>0 && total('M')>0)) continue;
    const products = await query('AG2',0);
    const partners = await query('TOTAL',null);
    const result = {year, dataset:'UN Comtrade — annual reported merchandise trade (HS2)', provider:'comtrade', sourceUrl:'https://comtradeplus.un.org/', exportsTotal:Number(total('X')),importsTotal:Number(total('M')),retainedSections:[],warnings:[],coverage:{}};
    for (const [field,flow,isProduct] of [['topExports','X',true],['topImports','M',true],['exportPartners','X',false],['importPartners','M',false]]) {
      result[field]=rank(isProduct?products:partners,flow,year,reporter,isProduct,total(flow));
      result.coverage[field]=result[field].length>0;
      if (!result.coverage[field]) throw new Error(`${field}: no usable observations; previous trade retained`);
    }
    return result;
  }
  throw new Error('No year with both reported imports and exports in the three-year search window');
}
