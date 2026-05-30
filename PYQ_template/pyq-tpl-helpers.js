/* PYQ_template helper — corrects question text / answer / options of
   SQRT_PYQ_BANK items at load time, with proper KaTeX ($...$) rendering:
   full square-root vinculum, stacked fractions, BODMAS-friendly brackets.
   This does NOT edit pyq.js; it only overrides data in memory.
   Load AFTER pyq.js. */
(function(){
  if(typeof window==='undefined') return;
  var B=String.fromCharCode(92);
  function K(t){return '$'+t+'$';}
  function RT(x){return B+'sqrt{'+x+'}';}
  function CRT(x){return B+'sqrt[3]{'+x+'}';}
  function NRT(n,x){return B+'sqrt['+n+']{'+x+'}';}
  function FR(a,b){return B+'dfrac{'+a+'}{'+b+'}';}
  function POW(b,p){return b+'^{'+p+'}';}
  var T=' '+B+'times ';
  var D=' '+B+'div ';
  function tri(en,hg,hi){
    if(hg===undefined||hg===null) hg=en;
    if(hi===undefined||hi===null) hi=en;
    return {en:en,hing:hg,hi:hi};
  }
  var byId=null;
  function ensure(){
    if(byId) return byId;
    byId={};
    var arr=(typeof SQRT_PYQ_BANK!=='undefined')?SQRT_PYQ_BANK:(window.SQRT_PYQ_BANK||[]);
    for(var i=0;i<arr.length;i++){ if(arr[i]&&arr[i].id) byId[arr[i].id]=arr[i]; }
    return byId;
  }
  function fix(id,patch){
    var q=ensure()[id];
    if(!q||!patch) return;
    if(patch.text!=null) q.text=(typeof patch.text==='string')?{en:patch.text,hing:patch.text,hi:patch.text}:patch.text;
    if(patch.opts!=null) q.opts=patch.opts;
    if(patch.ans!=null) q.ans=patch.ans;
  }
  window.PYQT={B:B,K:K,RT:RT,CRT:CRT,NRT:NRT,FR:FR,POW:POW,T:T,D:D,tri:tri,fix:fix};
})();
