/* template_solution_new/sol-helpers.js
   Shared helpers for the NEW beginner-friendly solution builders.
   - All math is emitted as $...$ so the KaTeX auto-render observer draws
     full sqrt vinculums, stacked \dfrac fractions and explicit BODMAS brackets.
   - No literal backslashes anywhere (built from char code 92) so GitHub
     pushes stay JSON-clean.
   - Each builder returns { en:{steps,shortcut,hint}, hing:{...}, hi:{...} }.
   - showSolution() reads steps:[{title,body}] + shortcut; the Hint button reads hint.
   - We intentionally OMIT mistakes/teachersSay (those sections are hidden in the UI). */
(function(){
  var B=String.fromCharCode(92);
  function K(t){ return '$'+t+'$'; }                 // inline math
  function RT(x){ return B+'sqrt{'+x+'}'; }           // full-vinculum square root
  function CRT(x){ return B+'sqrt[3]{'+x+'}'; }       // cube root
  function NRT(n,x){ return B+'sqrt['+n+']{'+x+'}'; }
  function FR(a,b){ return B+'dfrac{'+a+'}{'+b+'}'; } // stacked fraction (num over den)
  function POW(b,p){ return b+'^{'+p+'}'; }
  var T=' '+B+'times ';
  var D=' '+B+'div ';
  var PM=B+'pm ';
  function step(title,body){ return { title:title, body:body }; }
  function S(en,hing,hi){ return { en:en, hing:(hing||en), hi:(hi||hing||en) }; }
  function pf(n){ var f=[],x=Math.abs(n),d=2; while(d*d<=x){ while(x%d===0){ f.push(d); x=x/d; } d++; } if(x>1) f.push(x); return f; }
  function counts(arr){ var c={}; for(var i=0;i<arr.length;i++){ c[arr[i]]=(c[arr[i]]||0)+1; } return c; }
  function chain(arr){ return arr.join(T); }
  function pairView(arr){ var c=counts(arr),ks=Object.keys(c).map(Number).sort(function(a,b){return a-b;}),out=[]; ks.forEach(function(p){ var n=c[p],pr=Math.floor(n/2),lo=n%2,i; for(i=0;i<pr;i++) out.push('('+p+T+p+')'); for(i=0;i<lo;i++) out.push(''+p); }); return out.join(T); }
  function tripletView(arr){ var c=counts(arr),ks=Object.keys(c).map(Number).sort(function(a,b){return a-b;}),out=[]; ks.forEach(function(p){ var n=c[p],tr=Math.floor(n/3),lo=n%3,i; for(i=0;i<tr;i++) out.push('('+p+T+p+T+p+')'); for(i=0;i<lo;i++) out.push(''+p); }); return out.join(T); }
  function oneFromPair(arr){ var c=counts(arr),ks=Object.keys(c).map(Number).sort(function(a,b){return a-b;}),out=[]; ks.forEach(function(p){ var pr=Math.floor(c[p]/2),i; for(i=0;i<pr;i++) out.push(p); }); return out; }
  function oneFromTriplet(arr){ var c=counts(arr),ks=Object.keys(c).map(Number).sort(function(a,b){return a-b;}),out=[]; ks.forEach(function(p){ var tr=Math.floor(c[p]/3),i; for(i=0;i<tr;i++) out.push(p); }); return out; }
  window.SB={ B:B,K:K,RT:RT,CRT:CRT,NRT:NRT,FR:FR,POW:POW,T:T,D:D,PM:PM,step:step,S:S,pf:pf,counts:counts,chain:chain,pairView:pairView,tripletView:tripletView,oneFromPair:oneFromPair,oneFromTriplet:oneFromTriplet };
})();
