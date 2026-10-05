// Bounded IMF-only transport. World Bank transport is unchanged.
export async function imfBatch(items, worker, {budgetMs=90000, concurrency=2, now=Date.now}={}) {
  const deadline=now()+budgetMs, results=new Array(items.length);let cursor=0;
  await Promise.all(Array.from({length:Math.min(concurrency,items.length)},async()=>{
    while(cursor<items.length){const index=cursor++;
      try {if(now()>=deadline)throw Error('IMF country request budget exhausted');
        results[index]={status:'fulfilled',value:await worker(items[index],deadline)};
      }catch(reason){results[index]={status:'rejected',reason};}
    }
  }));return results;
}
export async function imfJson(url, deadline, {fetchImpl=fetch,now=Date.now,pause=ms=>new Promise(r=>setTimeout(r,ms)),log=console.log,timeoutMs=30000}={}) {
  for(let attempt=1;attempt<=2;attempt++){
    const remaining=deadline-now();if(remaining<=0)throw Error('IMF country request budget exhausted');
    const controller=new AbortController();const limit=Math.min(timeoutMs,remaining);
    const timer=setTimeout(()=>controller.abort(),limit);let retryable=true;
    try {
      const response=await fetchImpl(url,{signal:controller.signal,headers:{accept:'application/json','user-agent':'CountryDashboard/2.0'}});
      if(!response.ok){retryable=response.status===429||response.status>=500;throw Error(`IMF HTTP ${response.status}`);}
      const body=await response.text();
      try{return JSON.parse(body);}catch{retryable=false;throw Error('IMF returned invalid JSON');}
    }catch(error){
      const reason=controller.signal.aborted?`IMF request timed out after ${Math.round(limit/1000)} seconds`:error.message;
      log(`[IMF] attempt ${attempt}/2: ${reason}`);
      if(!retryable||attempt===2||deadline-now()<=1000)throw Error(reason);
    }finally{clearTimeout(timer);}
    await pause(1000);
  }
}
