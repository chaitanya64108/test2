/* =========================================================
 SQUARE ROOT & CUBE ROOT ARENA — Gamified Practice for Competitive Exams
 ========================================================= */

// ===================== STATE =====================
let State = { lang: "hinglish", qAnswered: false, attempts: 0, correct: 0, selectedExams: [], examModalDismissed: false, currentTplId: null, currentVariantIdx: 0 };

function txt(obj, lang) {
 if(!obj || typeof obj === 'string') return obj || '';
 return obj[lang] || obj.hing || obj.en || '';
}

function shuffleOpts(correctVal, wrongVals){
 const items = [{v:correctVal, ok:true}, ...wrongVals.map(v=>({v, ok:false}))];
 for(let i=items.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[items[i],items[j]]=[items[j],items[i]]}
 return { options: items.map(o => o.v), answer: items.findIndex(o => o.ok) };
}

// ===================== DYNAMIC SOLUTION BUILDERS =====================
// These functions generate step-by-step solutions with numeric values
// computed from the actual random parameters of each question.

// Helper: last digit of a perfect square → possible root endings
function lastDigitRootClue(sq){
 const ld=sq%10;
 if(ld===0) return '0';
 if(ld===1) return '1 ya 9';
 if(ld===4) return '2 ya 8';
 if(ld===5) return '5';
 if(ld===6) return '4 ya 6';
 if(ld===9) return '3 ya 7';
 return '?';
}

// Helper: cube units digit → possible root units digit (1-to-1 mapping!)
function cubeUnitDigitClue(cube){
 const ld=cube%10;
 const map={0:'0',1:'1',2:'8',3:'7',4:'4',5:'5',6:'6',7:'3',8:'2',9:'9'};
 return map[ld]||'?';
}

// Helper: find range for root
function rootRange(sq){
 if(sq<=81) return {lo:1,hi:9,loS:1,hiS:81};
 if(sq<=361) return {lo:10,hi:19,loS:100,hiS:361};
 if(sq<=961) return {lo:20,hi:31,loS:400,hiS:961};
 if(sq<=2401) return {lo:32,hi:49,loS:1024,hiS:2401};
 return {lo:50,hi:70,loS:2500,hiS:4900};
}

// Helper: prime factorize a number
function primeFactors(n){
 const factors=[];
 let d=2;
 while(d*d<=n){
 while(n%d===0){factors.push(d);n/=d;}
 d++;
 }
 if(n>1) factors.push(n);
 return factors;
}

// Helper: format prime factorization as exponent string
function factorStr(factors){
 const map={};
 factors.forEach(f=>map[f]=(map[f]||0)+1);
 return Object.entries(map).map(([p,e])=>e>1?p+'^'+e:p).join(' x ');
}

// ===================== KATEX MATH RENDERING =====================
// Default KaTeX delimiters used everywhere:
//   $$...$$ → display (block) math
//   $...$   → inline math
const KATEX_DELIMS = [
  { left: '$$', right: '$$', display: true  },
  { left: '$',  right: '$',  display: false }
];

// Render math inside a specific DOM element. Safe to call anytime —
// silently no-ops if KaTeX hasn't loaded yet.
function renderMathIn(el){
  if(!el || !window.renderMathInElement) return;
  try {
    renderMathInElement(el, {
      delimiters: KATEX_DELIMS,
      ignoredTags: ['script','noscript','style','textarea','pre','code','option'],
      ignoredClasses: ['katex'],
      throwOnError: false
    });
  } catch(e){ console.warn('[KaTeX] render error:', e); }
}

// Render math inside a string and return HTML.
// Useful for inline cases like hint feedback where you can't pass a DOM node.
function renderMath(str){
  if(!str) return '';
  if(!window.katex) return str; // KaTeX not loaded yet — return raw
  // Block math first ($$...$$), then inline ($...$)
  let out = str.replace(/\$\$([^$]+)\$\$/g, (_, expr) => {
    try { return katex.renderToString(expr, { throwOnError: false, displayMode: true }); }
    catch(e){ return expr; }
  });
  out = out.replace(/\$([^$]+)\$/g, (_, expr) => {
    try { return katex.renderToString(expr, { throwOnError: false, displayMode: false }); }
    catch(e){ return expr; }
  });
  return out;
}

// ===================== AUTO-RENDER OBSERVER =====================
// Watches key containers for content changes and re-renders math automatically.
// This means sqrt.js / showSolution / renderQuestion don't need any changes —
// jab bhi unka innerHTML update hota hai, KaTeX yahan se trigger ho jaata hai.
(function setupKatexAutoRender(){
  const WATCH_IDS = ['qText','mcqArea','feedback','solution','solHeader','solutionContent','mistakes','teacher','shortcut'];
  const debounceMap = new WeakMap();

  function scheduleRender(el){
    clearTimeout(debounceMap.get(el));
    debounceMap.set(el, setTimeout(() => renderMathIn(el), 30));
  }

  function attachObserver(el){
    if(!el || el._katexObserved) return;
    el._katexObserved = true;
    new MutationObserver(() => scheduleRender(el)).observe(el, {
      childList: true, subtree: true, characterData: true
    });
    // Initial render if content already present
    scheduleRender(el);
  }

  function init(){
    WATCH_IDS.forEach(id => attachObserver(document.getElementById(id)));
    // Fallback: also render full body once on load (covers any missed elements)
    if(document.body) scheduleRender(document.body);
  }

  // Wait for both DOM and KaTeX auto-render extension to be ready.
  function waitAndInit(){
    if(window.renderMathInElement && document.body){
      init();
    } else {
      setTimeout(waitAndInit, 50);
    }
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', waitAndInit);
  } else {
    waitAndInit();
  }
})();