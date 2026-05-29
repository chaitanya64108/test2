/* PYQ_solutions helper — builds descriptive, book-style solutions and
   overwrites the .solution field of each SQRT_PYQ_BANK item at load time.
   This does NOT edit pyq.js; it only replaces solution data in memory.
   Load AFTER pyq.js. */
(function(){
  if(typeof window==='undefined') return;
  var B=String.fromCharCode(92);
  function K(t){return '$'+t+'$';}
  function RT(x){return B+'sqrt{'+x+'}';}
  function CRT(x){return B+'sqrt[3]{'+x+'}';}
  function FR(a,b){return B+'dfrac{'+a+'}{'+b+'}';}
  function BOX(x){return B+'boxed{'+x+'}';}
  function POW(b,p){return b+'^{'+p+'}';}
  function S(t,b){return {title:t,body:b};}
  function L(steps,shortcut,hint){return {steps:steps,mistakes:[],teachersSay:'',shortcut:shortcut,hint:hint};}
  function sol(en,hg,hi){return {en:en,hing:hg,hi:hi};}
  var byId=null;
  function set(id,s){
    if(typeof SQRT_PYQ_BANK==='undefined') return;
    if(!byId){byId={};for(var i=0;i<SQRT_PYQ_BANK.length;i++){var q=SQRT_PYQ_BANK[i];if(q&&q.id)byId[q.id]=q;}}
    if(byId[id]) byId[id].solution=s;
  }
  window.PYQH={B:B,K:K,RT:RT,CRT:CRT,FR:FR,BOX:BOX,POW:POW,TIMES:B+'times',DIV:B+'div',AP:B+'approx',RA:B+'Rightarrow',S:S,L:L,sol:sol,set:set};
})();
