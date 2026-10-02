import fs from 'node:fs';
import { fetchComtrade } from './comtrade.mjs';
fs.mkdirSync('comtrade-test-output',{recursive:true});
try {
  const trade = await fetchComtrade('AGO');
  fs.writeFileSync('comtrade-test-output/angola-trade.json',JSON.stringify(trade,null,2));
  const summary = `# Angola Comtrade test\n\nReporting year: ${trade.year}\n\n` +
    ['topExports','topImports','exportPartners','importPartners'].map(k=>`## ${k}\n\n`+trade[k].map(r=>`- ${r.name}: ${r.share.toFixed(2)}%`).join('\n')).join('\n\n');
  if(process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY,summary);
  console.log(summary);
} catch(e) {
  fs.writeFileSync('comtrade-test-output/error.txt',e.message);
  console.error(e.message);
  process.exitCode=1;
}
