// ===================== EXAM PROFILES (SAME AS AVG.HTML) =====================
const EXAM_PROFILES = {
  tenth_pass:{
    label:'10th Pass Govt Exams', exams:[
      {id:'ssc_gd', name:'SSC GD (Constable)'}, {id:'ssc_mts', name:'SSC MTS'},
      {id:'railway_group_d', name:'Railway Group D'}, {id:'rrb_alp', name:'RRB ALP'},
      {id:'rpf_constable', name:'RPF Constable'},
      {id:'indian_army_gd', name:'Indian Army GD'}, {id:'indian_army_soldier', name:'Indian Army Soldier Tradesman'},
      {id:'cisf', name:'CISF Constable'},
      {id:'mp_police', name:'MP Police Constable'},
      {id:'mumbai_police', name:'Maharashtra Police Constable'},
      {id:'wb_police', name:'West Bengal Police Constable'}, {id:'tn_police', name:'Tamil Nadu Police Constable'},
      {id:'esic_mts', name:'ESIC MTS'}, {id:'ib_security', name:'IB Security Assistant'},
      {id:'upsssc_pet', name:'UPSSSC PET'},
      {id:'ssc_selection_posts', name:'SSC Selection Posts'},
      {id:'ssc_mts_hav', name:'SSC Havaldar'}
    ], difficulty:[1,3]
  },
  twelfth_pass:{
    label:'12th Pass Govt Exams', exams:[
      {id:'ssc_chsl', name:'SSC CHSL'}, {id:'ssc_steno', name:'SSC Stenographer'},
      {id:'rrb_ntpc', name:'RRB NTPC (Non Tech)'},
      {id:'rrb_paramedical', name:'RRB Paramedical'},
      {id:'nda', name:'NDA'}, {id:'air_force', name:'Air Force X/Y Group'},
      {id:'navy_ssr', name:'Navy SSR/AA'}, {id:'coast_guard', name:'Coast Guard Navik'},
      {id:'indian_army_tech', name:'Indian Army Technical'},
      {id:'delhi_police_hc', name:'Delhi Police Head Constable'}, {id:'cisf_hc', name:'CISF HC Ministerial'},
      {id:'dsssb_ldc', name:'DSSSB LDC'}, {id:'dsssb_steno', name:'DSSSB Stenographer'},
      {id:'dsssb_jja', name:'DSSSB Junior Judgement Assistant'},
      {id:'delhi_police', name:'Delhi Police Constable'}, {id:'bihar_police', name:'Bihar Police Constable'},
      {id:'rajasthan_police', name:'Rajasthan Police Constable'}, {id:'up_police', name:'UP Police Constable'},
      {id:'crpf', name:'CRPF Head Constable'}, {id:'bsf', name:'BSF Head Constable'},
      {id:'ssb', name:'SSB Head Constable'}, {id:'ctet', name:'CTET'}, {id:'state_tet', name:'State TET'}
    ], difficulty:[2,5]
  },
  graduate:{
    label:'Graduate + Bank PO / RBI Level', exams:[
      {id:'ssc_cgl', name:'SSC CGL'}, {id:'ssc_cpo', name:'SSC CPO'},
      {id:'ssc_je', name:'SSC JE'}, {id:'ibps_clerk', name:'IBPS Clerk'},
      {id:'sbi_clerk', name:'SBI Clerk'}, {id:'insurance', name:'Insurance (NIACL/OICL)'},
      {id:'dsssb', name:'DSSSB'}, {id:'upsc_epfo', name:'UPSC EPFO'},
      {id:'upsc_capf', name:'UPSC CAPF'}, {id:'state_psc', name:'State PSC Exams'},
      {id:'kvs', name:'KVS TGT/PGT'}, {id:'nvs', name:'NVS TGT/PGT'},
      {id:'rrb_ntpc_grad', name:'RRB NTPC (Graduate)'},
      {id:'sbi_po', name:'SBI PO'}, {id:'ibps_po', name:'IBPS PO'},
      {id:'rbi_grade_b', name:'RBI Grade B'}, {id:'rbi_assistant', name:'RBI Assistant'},
      {id:'ibps_so', name:'IBPS SO'}, {id:'nabard', name:'NABARD Grade A/B'},
      {id:'sebi', name:'SEBI Grade A'}, {id:'sidbi', name:'SIDBI Assistant Manager'},
      {id:'xat', name:'XAT'}, {id:'mat', name:'MAT'},
      {id:'cmat', name:'CMAT'}, {id:'snap', name:'SNAP'},
      {id:'irdai', name:'IRDAI Assistant Manager'}, {id:'nhb', name:'NHB'},
      {id:'esic_udc', name:'ESIC UDC'}, {id:'idbi_bank', name:'IDBI Bank'},
      {id:'dmrc', name:'DMRC'}, {id:'ibps_rrb_officer', name:'IBPS RRB Officer'},
      {id:'cet_mba', name:'CET Maharashtra MBA'}, {id:'sbi_jr_assoc', name:'SBI Junior Associate'},
      {id:'rpf_si', name:'RPF SI'}, {id:'dfccil', name:'DFCCIL Jr Executive'},
      {id:'rrb_je', name:'RRB JE'}, {id:'fci_grade3', name:'FCI Assistant Grade 3'},
      {id:'fci_steno', name:'FCI Stenographer'}, {id:'ib_acio', name:'IB ACIO Grade-II'},
      {id:'ib_tech', name:'IB Technical Assistant'},
      {id:'bihar_police_si', name:'Bihar Police SI'}, {id:'rajasthan_police_si', name:'Rajasthan Police SI'},
      {id:'up_police_si', name:'UP Police SI'}, {id:'mp_police_si', name:'MP Police SI'},
      {id:'state_police_si', name:'Other State Police SI'}
    ], difficulty:[4,10]
  }
};

/* ---------- MATH HELPERS ---------- */
const gcd = (a,b)=>{ a=Math.abs(a);b=Math.abs(b); while(b){[a,b]=[b,a%b]} return a; };
const lcm = (a,b)=> a/gcd(a,b)*b;
const gcdArr = arr => arr.reduce(gcd);
const lcmArr = arr => arr.reduce(lcm);

function rint(a,b){ return Math.floor(Math.random()*(b-a+1))+a; }
function pick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
function shuffle(a){ a=a.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]} return a; }

/* =========================================================
   MATH RENDERING SYSTEM — recursive parser + KaTeX
   Converts plain-text math (√, ∛, ², ³, /, ×, ÷, −, …)
   into proper LaTeX and renders with KaTeX at generation time.
   ========================================================= */

/* --- Detect whether a string contains math symbols --- */
function hasMath(s){
  // Strip unit patterns (cm² m² cm³ m³) so they don't trigger math rendering
  const c = s.replace(/cm[²³]/g,'').replace(/\sm[²³]/g,'');
  return /[√∛×÷−±²³]/.test(c) || /\d\/\d/.test(s) || /\)\//.test(s) || /\/\(/.test(s);
}

/* --- Extract balanced content between open/close delimiters --- */
function _eb(s,start,open,close){
  if(start>=s.length||s[start]!==open) return ['',start+1];
  let d=1, j=start+1;
  while(j<s.length&&d>0){
    if(s[j]===open) d++;
    if(s[j]===close) d--;
    j++;
  }
  return [s.substring(start+1,j-1), j];
}

/* --- Core recursive parser: plain-text math\n=> LaTeX string --- */
function toLatex(s){
  let p=0; // shared position cursor for nested calls

  function parse(){
    let r='';
    while(p<s.length){
      const ch=s[p];
      if(ch==='∛'){
        p++;
        r+='\\sqrt[3]{'+toLatex(rootArg())+'}';
      } else if(ch==='√'){
        p++;
        r+='\\sqrt{'+toLatex(rootArg())+'}';
      } else if(ch==='²'){
        r+='^{2}'; p++;
      } else if(ch==='³'){
        r+='^{3}'; p++;
      } else if(ch==='×'){
        r+='\\times'; p++;
      } else if(ch==='÷'){
        r+='\\div'; p++;
      } else if(ch==='−'){
        r+='-'; p++;
      } else if(ch==='±'){
        r+='\\pm'; p++;
      } else if(p+2<s.length && s.substr(p,3)==='...'){
        r+='\\ldots'; p+=3;
      } else if(ch==='('){
        const [content,end]=_eb(s,p,'(',')');
        // Check for fraction: (A)/(B) or (A)/digits
        if(end<s.length && s[end]==='/'){
          p=end+1; // skip "/"
          let den='';
          if(p<s.length && s[p]==='('){
            const [dc,de]=_eb(s,p,'(',')');
            den=dc; p=de;
          } else {
            const dm=s.substr(p).match(/^([\d.]+)/);
            if(dm){ den=dm[1]; p+=dm[1].length; }
          }
          r+='\\dfrac{'+toLatex(content)+'}{'+toLatex(den)+'}';
        } else {
          r+='('+toLatex(content)+')';
          p=end;
        }
      } else if(ch==='/'){
        // Simple fraction: extract numerator from result, read denominator ahead
        p++; // skip "/"
        let den='';
        if(p<s.length && s[p]==='('){
          const [dc,de]=_eb(s,p,'(',')');
          den=dc; p=de;
        } else {
          const dm=s.substr(p).match(/^([\d.]+)/);
          if(dm){ den=dm[1]; p+=dm[1].length; }
        }
        // Pull numerator off the end of r (last number or variable)
        const nm=r.match(/([\d.]+|[a-zA-Z])$/);
        if(nm && den){
          r=r.substring(0,r.length-nm[1].length);
          r+='\\dfrac{'+nm[1]+'}{'+toLatex(den)+'}';
        } else {
          r+='/'+den;
        }
      } else {
        r+=ch; p++;
      }
    }
    return r;
  }

  function rootArg(){
    if(p>=s.length) return '';
    if(s[p]==='['){
      const [c,e]=_eb(s,p,'[',']'); p=e; return c;
    }
    if(s[p]==='('){
      const [c,e]=_eb(s,p,'(',')'); p=e; return c;
    }
    // Number (don't consume "…" / "..."")
    const nm=s.substr(p).match(/^\d+(?:\.\d+)?/);
    if(nm){
      let c=nm[0]; p+=c.length;
      if(s.substr(p,3)==='...'){ c+='...'; p+=3; }
      return c;
    }
    // Single variable letter
    if(/[a-zA-Z]/.test(s[p])){ const ch=s[p]; p++; return ch; }
    return '';
  }

  return parse();
}

/* --- Render a LaTeX string to KaTeX HTML (safe wrapper) --- */
function katexRender(tex){
  if(typeof katex==='undefined') return '<span style="color:var(--bad)">['+tex+']</span>';
  try{
    return katex.renderToString(tex,{throwOnError:false,output:'html',displayMode:false});
  } catch(e){
    return '<span style="color:var(--bad)">['+tex+']</span>';
  }
}

/* --- N(): wrap content in styled span; render math with KaTeX --- */
const N = n => {
  const s=String(n);
  if(!hasMath(s)) return '<span class="num">'+s+'</span>';
  try{
    const latex=toLatex(s);
    return '<span class="math">'+katexRender(latex)+'</span>';
  } catch(e){
    return '<span class="num">'+s+'</span>';
  }
};
const NS = arr => arr.map(N);

/* --- Format unit strings (cm²\n=> cm + superscript HTML) --- */
function fmtUnit(u){
  return u.replace(/²/g,'<span class="sup">2</span>').replace(/³/g,'<span class="sup">3</span>');
}

/* --- renderMath(): process HTML to render math expressions --- */
function renderMath(html){
  if(!html) return html;
  let out=html;

  // Phase 1 — Process old-style <span class="num">MATH</span> blocks
  // (only those that still contain plain-text math, not already-rendered KaTeX)
  out=out.replace(/<span class="num">([\s\S]*?)<\/span>/g,(match,inner)=>{
    if(inner.includes('katex')) return match;           // already rendered
    if(!hasMath(inner)) return match;                   // plain number
    try{
      const latex=toLatex(inner);
      return '<span class="math">'+katexRender(latex)+'</span>';
    } catch(e){ return match; }
  });

  // Phase 2 — Unit superscripts everywhere (cm² m² cm³ m³ → HTML sup)
  out=out.replace(/cm²/g,'cm<span class="sup">2</span>');
  out=out.replace(/m²(?!<)/g,'m<span class="sup">2</span>');
  out=out.replace(/cm³/g,'cm<span class="sup">3</span>');
  out=out.replace(/m³/g,'m<span class="sup">3</span>');

  // Phase 3 — Standalone plain-text math (option strings, PYQ text, etc.)
  if(!html.includes('<span class="num">') && !html.includes('class="math"') && !html.includes('class="katex"')){
    if(hasMath(html)){
      // Check for trailing unit (cm m cm² m² cm³ m³)
      const um=html.match(/^(.*?)\s+(cm[²³]?|m[²³]?)$/);
      if(um && um[1].trim()){
        const mp=um[1].trim(), unit=um[2];
        if(hasMath(mp)){
          try{
            return '<span class="math">'+katexRender(toLatex(mp))+'</span> '+fmtUnit(unit);
          } catch(e){}
        } else {
          return mp+' '+fmtUnit(unit);
        }
      }
      // Pure math string (no English words = 3+ consecutive alpha chars)
      // But NOT if it contains Devanagari (Hindi) text — that should render as normal text
      if(!/[a-zA-Z]{3,}/.test(html) && !/[\u0900-\u097F]/.test(html)){
        try{
          return '<span class="math">'+katexRender(toLatex(html))+'</span>';
        } catch(e){}
      }
      // Mixed content: render individual math tokens as inline KaTeX
      out=html;
      out=out.replace(/∛\(([^)]+)\)/g,(_,c)=>katexRender('\\sqrt[3]{'+toLatex(c)+'}'));
      out=out.replace(/√\(([^)]+)\)/g,(_,c)=>katexRender('\\sqrt{'+toLatex(c)+'}'));
      out=out.replace(/∛([\d.]+)/g,(_,n)=>katexRender('\\sqrt[3]{'+n+'}'));
      out=out.replace(/∛([a-zA-Z])/g,(_,v)=>katexRender('\\sqrt[3]{'+v+'}'));
      out=out.replace(/√([\d.]+)/g,(_,n)=>katexRender('\\sqrt{'+n+'}'));
      out=out.replace(/√([a-zA-Z])/g,(_,v)=>katexRender('\\sqrt{'+v+'}'));
      out=out.replace(/(\d+)\/(\d+)/g,(_,n,d)=>katexRender('\\dfrac{'+n+'}{'+d+'}'));
      out=out.replace(/([a-zA-Z])²/g,(_,b)=>katexRender(b+'^{2}'));
      out=out.replace(/([a-zA-Z])³/g,(_,b)=>katexRender(b+'^{3}'));
      out=out.replace(/(\d)²/g,(_,b)=>katexRender(b+'^{2}'));
      out=out.replace(/(\d)³/g,(_,b)=>katexRender(b+'^{3}'));
      out=out.replace(/×/g,katexRender('\\times'));
      out=out.replace(/÷/g,katexRender('\\div'));
      out=out.replace(/−/g,katexRender('-'));
      out=out.replace(/±/g,katexRender('\\pm'));
      // Unit superscripts
      out=out.replace(/cm²/g,'cm<span class="sup">2</span>');
      out=out.replace(/m²/g,'m<span class="sup">2</span>');
      out=out.replace(/cm³/g,'cm<span class="sup">3</span>');
      out=out.replace(/m³/g,'m<span class="sup">3</span>');
    }
  }

  return out;
}
const joinAnd = (arr, andWord) => {
  if(arr.length<=1) return arr.join('');
  if(arr.length===2) return `${arr[0]} ${andWord} ${arr[1]}`;
  return arr.slice(0,-1).join(', ') + ` ${andWord} ` + arr[arr.length-1];
};

/* =========================================================
   Utilities
   ========================================================= */
const $ = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);
let RENDER_ID = 0;
let CurrentQ = null;

function renderQuestion(){
  if(!CurrentQ) return;
  State.qAnswered = false;
  const pyqTag=$('#pyqTag');
  if(SqrtPyqState.active && CurrentQ && CurrentQ.pyq){
    $('#typeTag').classList.add('hide');
    pyqTag.textContent=(CurrentQ.pyq.subExam||CurrentQ.pyq.exam)+' '+CurrentQ.pyq.year;
    pyqTag.classList.remove('hide');
  } else {
    $('#typeTag').classList.remove('hide');
    $('#typeTag').textContent = CurrentQ.label || CurrentQ.tier || 'Square Root';
    pyqTag.classList.add('hide');
  }
  const optLabels = ['(a)','(b)','(c)','(d)'];
  const mcq = $('#mcqArea');
  mcq.innerHTML = CurrentQ.options.map((o,i) =>
    `<button class="opt" data-idx="${i}"><span><span class="opt-label">${optLabels[i]}</span>${renderMath(o)}</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button>`
  ).join('');
  $$('#mcqArea .opt').forEach(b => b.addEventListener('click', () => handleMCQ(b)));
  $('#qText').innerHTML = renderMath(txt(CurrentQ.question, State.lang));
  $('#feedback').textContent = '';
  $('#feedback').className = 'feedback';
  $('#solution').classList.remove('show');
}

function graphToHTML(g){ return ''; }
function renderGraph(){}

/* ---------- EFFECTS ---------- */
function sfx(type){
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    if(type==='ok'){
      osc.frequency.value = 880;
      gain.gain.value = 0.08;
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.08);
    } else {
      osc.frequency.value = 240;
      gain.gain.value = 0.1;
      osc.type = 'sawtooth';
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.15);
    }
  } catch(e){}
}

function confettiBurst(){
  try {
    const c = document.getElementById('confetti');
    if(!c) return;
    const ctx = c.getContext('2d');
    if(!ctx) return;
    const W = c.width = window.innerWidth;
    const H = c.height = window.innerHeight;
    const colors = ['#7c5cff','#22d3ee','#f472b6','#ffd66b','#22c55e','#ef4444'];
    const pieces = [];
    for(let i=0;i<60;i++){
      pieces.push({
        x: W/2 + (Math.random()-0.5)*200,
        y: H/2,
        vx: (Math.random()-0.5)*12,
        vy: -Math.random()*14 - 4,
        w: 6+Math.random()*6,
        h: 4+Math.random()*4,
        color: colors[Math.floor(Math.random()*colors.length)],
        rot: Math.random()*360,
        rv: (Math.random()-0.5)*20,
        life: 1
      });
    }
    let frames = 0;
    function draw(){
      if(frames++ > 70) { ctx.clearRect(0,0,W,H); return; }
      ctx.clearRect(0,0,W,H);
      let alive = false;
      for(const p of pieces){
        if(p.life <= 0) continue;
        alive = true;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35;
        p.rot += p.rv;
        p.life -= 0.018;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot * Math.PI / 180);
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
        ctx.restore();
      }
      if(alive) requestAnimationFrame(draw);
    }
    draw();
  } catch(e){}
}

function handleMCQ(btn){
  if(State.qAnswered) { btn.classList.add('correct'); return; }
  const idx = parseInt(btn.dataset.idx);
  const opts = $$('#mcqArea .opt');
  opts.forEach(o => { o.style.pointerEvents = 'none'; });
  State.attempts++;
  if(idx === CurrentQ.answer){
    btn.classList.add('correct');
    State.correct++;
    feedback('\u2705 Correct! Well done!', 'ok');
    confettiBurst(); sfx('ok');
  } else {
    btn.classList.add('wrong');
    opts[CurrentQ.answer].classList.add('correct');
    feedback('\u274c Incorrect. The correct answer is highlighted.', 'bad');
    sfx('bad');
  }
  State.qAnswered = true;
  updateHUD();
}

function feedback(msg, cls){ const f=$('#feedback'); f.innerHTML=msg; f.className='feedback '+(cls||''); }

function toast(msg){
  const el = $('#toast');
  if(!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(()=>{ el.classList.remove('show'); }, 2500);
}

function updateHUD(){
  $('#attLbl').textContent = State.attempts || 0;
  $('#correctLbl').textContent = State.correct || 0;
  $('#wrongLbl').textContent = (State.attempts - State.correct) || 0;
}

function showSolution(){
  if(!CurrentQ) return;
  const sol = $('#solution');
  sol.classList.toggle('show');
  if(sol.classList.contains('show')){
    const s = txt(CurrentQ.solution, State.lang);
    if(s && s.steps){
      $('#solutionContent').innerHTML = s.steps.map(st => {
        let body = renderMath(st.body);
        // Auto-style Formula / Calculation / Kyun? lines
        body = body.replace(/^Formula:/gm,'<span class="sol-formula">Formula:</span>');
        body = body.replace(/^Calculation:/gm,'<span class="sol-calc">Calculation:</span>');
        body = body.replace(/^Kyun\?/gm,'<span class="sol-kyun">Kyun?</span>');
        // Hindi labels
        body = body.replace(/^सूत्र:/gm,'<span class="sol-formula">सूत्र:</span>');
        body = body.replace(/^गणना:/gm,'<span class="sol-calc">गणना:</span>');
        body = body.replace(/^क्यों\?/gm,'<span class="sol-kyun">क्यों?</span>');
        return `<div class="sol-step"><strong>${st.title}</strong>${body}</div>`;
      }).join('');
    } else {
      $('#solutionContent').innerHTML = '<div class="sol-step">Detailed solutions coming soon for this question type.</div>';
    }
    if(s && s.mistakes && s.mistakes.length){
      $('#mistakes').innerHTML = s.mistakes.map(m =>
        `<div class="mistake-item"><span class="mistake-desc">❌ ${m.description}</span><br><span class="mistake-why muted">💡 ${m.whyWrong}</span></div>`
      ).join('');
    } else {
      $('#mistakes').textContent = '';
    }
    $('#teacher').innerHTML = (s && s.teachersSay) ? renderMath(s.teachersSay) : '';
    $('#shortcut').innerHTML = (s && s.shortcut) ? renderMath(s.shortcut) : '';
  }
}

/* ===================== EXAM MODAL FUNCTIONS ===================== */
function getExamIdsForGroup(key){
  const p=EXAM_PROFILES[key];
  return p?p.exams.map(e=>e.id):[];
}
function isGroupFullySelected(key){
  const ids=getExamIdsForGroup(key);
  return ids.length>0&&ids.every(id=>State.selectedExams.includes(id));
}
function isGroupPartiallySelected(key){
  const ids=getExamIdsForGroup(key);
  return ids.some(id=>State.selectedExams.includes(id));
}
function toggleGroup(key){
  const ids=getExamIdsForGroup(key);
  const allSelected=isGroupFullySelected(key);
  if(allSelected){
    State.selectedExams=State.selectedExams.filter(id=>!ids.includes(id));
  }else{
    const existing=new Set(State.selectedExams);
    for(const id of ids) existing.add(id);
    State.selectedExams=[...existing];
  }
  renderExamTabs();
  renderQuickPicks();
  renderExamBar();
  updateTypeDropdown();
  if(SqrtPyqState.active){
    if(SqrtPyqState.exam!=='all'&&!sqrtPyqExams().includes(SqrtPyqState.exam)) SqrtPyqState.exam='all';
    SqrtPyqState.year='all'; SqrtPyqState.qCursor=-1; SqrtPyqState.yearCursor=0;
    renderSqrtPyqExamSelect(); renderSqrtPyqYearChips(); updateSqrtPyqStatus();
  }
  renderQuestion();
}
function renderExamTabs(){
  const wrap=$('#examTabs');
  const keys=Object.keys(EXAM_PROFILES);
  wrap.innerHTML=keys.map(k=>{
    const p=EXAM_PROFILES[k];
    const selCount=p.exams.filter(e=>State.selectedExams.includes(e.id)).length;
    const active=isGroupFullySelected(k);
    const partial=isGroupPartiallySelected(k);
    const cls=active?'modal-tab toggle active':'modal-tab toggle'+(partial?' active':'');
    const cbState=active?'☑':(partial?'◐':'☐');
    return `<button class="${cls}" data-key="${k}"><span style="display:inline-flex;align-items:center;gap:6px"><span style="font-size:16px">${cbState}</span> ${p.label}</span></button>`;
  }).join('');
  wrap.querySelectorAll('.modal-tab.toggle').forEach(t=>{
    const key=t.dataset.key;
    const p=EXAM_PROFILES[key];
    if(!p) return;
    t.onclick=()=>toggleGroup(key);
    const showTooltip=()=>{
      const tip=$('#examTooltip');
      const content=$('#examTooltipContent');
      let html=`<span class="tt-label">${p.label}</span>`;
      const show=p.exams.slice(0,5);
      html+=`<span class="tt-name">${show.map(e=>e.name).join(', ')}</span>`;
      if(p.exams.length>5) html+=`<span class="tt-name">+ ${p.exams.length-5} more</span>`;
      content.innerHTML=html;
      const rect=t.getBoundingClientRect();
      const tw=Math.min(tip.offsetWidth||180,180);
      let l=rect.left, tb=rect.bottom+6;
      if(l+tw>window.innerWidth-8) l=window.innerWidth-tw-8;
      if(l<8) l=8;
      if(tb+120>window.innerHeight) tb=rect.top-6-120;
      if(tb<8) tb=8;
      tip.style.left=l+'px'; tip.style.top=tb+'px';
      tip.classList.add('exam-tooltip-show');
    };
    const hideTooltip=()=>hideExamTooltip();
    t.addEventListener('mouseenter',showTooltip);
    t.addEventListener('mouseleave',hideTooltip);
  });
  renderQuickPicks();
}
function renderQuickPicks(){
  const body=$('#examModalBody');
  const keys=Object.keys(EXAM_PROFILES);
  const selectedGroups=keys.filter(k=>isGroupPartiallySelected(k));
  if(selectedGroups.length===0){
    body.innerHTML=`<div class="qp-empty">Tap a tab above to browse exams</div>`;
    return;
  }
  body.innerHTML=selectedGroups.map(k=>{
    const p=EXAM_PROFILES[k];
    const selIds=State.selectedExams;
    const matched=p.exams.filter(e=>selIds.includes(e.id));
    const chips=matched.slice(0,6).map(e=>`<span class="qp-chip">${e.name}</span>`).join('');
    const remaining=matched.length-6;
    const moreHtml=remaining>0?`<span class="qp-more" data-key="${k}">+ ${remaining} more\n=> </span>`:'';
    return `<div class="quick-picks">
      <h4>${p.label} · ${matched.length}/${p.exams.length} selected</h4>
      <div class="qp-wrap">${chips}${moreHtml}</div>
    </div>`;
  }).join('');
  body.querySelectorAll('.qp-more').forEach(el=>{
    el.onclick=()=>openSubModal(el.dataset.key);
  });
}
function updateTypeDropdown(){
  const PROFILE_TIER = { tenth_pass:'10th+', twelfth_pass:'12th+', graduate:'Grad+' };
  const sel = $('#typeSelect');
  const activeKeys = Object.keys(EXAM_PROFILES).filter(k => isGroupPartiallySelected(k));
  let tiers = activeKeys.map(k => PROFILE_TIER[k]).filter(Boolean);
  tiers = [...new Set(tiers)];
  const allTiers = Object.values(PROFILE_TIER);
  const allSelected = tiers.length === 0 || tiers.length === allTiers.length;
  
  const groups = [
    { tier:'10th+', label:'── 10th+ Level ──', labels:['Perfect Square - Direct','Prime Factorization','Long Division Method','Repeated Subtraction','Decimal Square Root','Fraction Square Root','Make Perfect Square (×)','Make Perfect Square (÷)','Make Perfect Square (+)','Make Perfect Square (-)','Estimation (Between)','Basic Simplification','Product Under Root','Word Problem: Area → Side','Digits in Square Root','Square Root of 1','Approximation','Quotient Under Root','√(n²) Property','Perimeter from Area','Perfect Cube - Direct','Cube - Prime Factorization','Cube Root of 1','Cube Root of Negative','Decimal Cube Root','Fraction Cube Root','Make Perfect Cube (×)','Make Perfect Cube (÷)','Make Perfect Cube (+)','Make Perfect Cube (-)','Cube Estimation','Digits in Cube Root','Cube Simplification','Product Under Cube Root','∛(n³) Property','Word Problem: Volume → Side','True/False Properties','Identify Perfect Square','Identify Perfect Cube','Unit Digit Logic','Property Check','Concept Trap','Formula Rule'] },
    { tier:'12th+', label:'── 12th+ Level ──', labels:['Pythagoras Theorem','Mixed Number Root','Diagonal of Square','Fencing Cost → Area','Repeating Decimal Root','Unit Digit Cube Method','Quotient Under Cube Root','Surface Area from Volume','Mixed Cube Root','Mixed √ + ∛ Simp','Surd Simplification','Cube Root Division','Find x (Square)','Find x (Cube)','Solve √ Equation','Solve ∛ Equation','Compare √ Values','Compare √ vs ∛','Property Application','Units Digit Pattern','Arrange in Order','Root Multiplication','Root Division Simp','Solve x² = n','Decimal Root Addition','Cube Product Simp','Rationalize Denominator','Triplet ID'] },
    { tier:'Grad+', label:'── Grad+ Level ──', labels:['Nested Square Root','Double Nested Root','Infinite Nested Radical','Complex Nested Diff','Complex Surd Sum','Infinite Equation','Cube Root Identity','System with Roots','Combined Geometry','Optimization (Min Value)','Continued Fraction','Algebraic Identity Root','Complex Simplification','Ratio System with Roots','Adv Algebra','Tricky Pattern','Speed Trick'] }
  ];
  
  const currentVal = sel.value;
  while(sel.firstChild) sel.removeChild(sel.firstChild);
  const allOpt = document.createElement('option');
  allOpt.value = 'all'; allOpt.textContent = '🎯 Mix (all types)';
  sel.appendChild(allOpt);
  groups.forEach(g => {
    if(allSelected || tiers.includes(g.tier)){
      const og = document.createElement('optgroup');
      og.label = g.label;
      g.labels.forEach(lbl => {
        const opt = document.createElement('option');
        opt.value = lbl; opt.textContent = lbl;
        og.appendChild(opt);
      });
      sel.appendChild(og);
    }
  });
  sel.value = Array.from(sel.options).some(o => o.value === currentVal) ? currentVal : 'all';
}

function openExamModal(){
  const modal=$('#examModal');
  modal.classList.remove('hide');
  renderExamTabs();
}
function closeExamModal(){
  document.getElementById('examModal').classList.add('hide');
  document.getElementById('examSubModal').classList.add('hide');
  State.examModalDismissed = true;
}

/* ─── Sub-Modal ─── */
let _subModalKey='';
function openSubModal(key){
  _subModalKey=key;
  const p=EXAM_PROFILES[key];
  if(!p) return;
  $('#subModalTitle').textContent=p.label;
  renderSubModalList('');
  $('#examSubModal').classList.remove('hide');
}
function closeSubModal(){
  $('#examSubModal').classList.add('hide');
}
function renderSubModalList(filter){
  const p=EXAM_PROFILES[_subModalKey];
  if(!p) return;
  const list=$('#subModalList');
  const filtered=p.exams.filter(e=>!filter||e.name.toLowerCase().includes(filter.toLowerCase()));
  list.innerHTML=filtered.map(e=>`<div class="exam-card"><span class="el">${e.name}</span></div>`).join('');
}
function renderExamBar(){
  const bar=$('#examBar');
  if(!bar) return;
  const groups=Object.keys(EXAM_PROFILES).filter(k=>isGroupPartiallySelected(k));
  if(groups.length===0){
    bar.innerHTML=`<span class="exam-bar-placeholder" id="examBarPlaceholder">🎯 No exams selected — tap to choose</span>`;
    const ph=bar.querySelector('#examBarPlaceholder');
    if(ph) ph.onclick=()=>openExamModal();
    return;
  }
  const isMobile=window.innerWidth<=980;
  const shortLabels={'tenth_pass':'10th<sup>+</sup>','twelfth_pass':'12th<sup>+</sup>','graduate':'Grad<sup>+</sup>'};
  bar.innerHTML=groups.map(k=>{
    const p=EXAM_PROFILES[k];
    const label=isMobile?(shortLabels[k]||p.label):p.label;
    return `<span class="exam-chip" data-key="${k}"><span>${label}</span><span class="x" data-key="${k}">✕</span></span>`;
  }).join('')+`<span class="exam-edit-btn" id="examEditBtn">⚙️ Edit</span>`;
  bar.querySelectorAll('.exam-chip').forEach(el=>{
    const key=el.dataset.key;
    const p=EXAM_PROFILES[key];
    if(!p) return;
    const showTooltip=()=>{
      const tip=$('#examTooltip');
      const content=$('#examTooltipContent');
      let html=`<span class="tt-label">${p.label}</span>`;
      const show=p.exams.slice(0,5);
      html+=`<span class="tt-name">${show.map(e=>e.name).join(', ')}</span>`;
      if(p.exams.length>5) html+=`<span class="tt-name">+ ${p.exams.length-5} more</span>`;
      content.innerHTML=html;
      const rect=el.getBoundingClientRect();
      const tw=Math.min(tip.offsetWidth||180,180);
      let l=rect.left, t=rect.bottom+6;
      if(l+tw>window.innerWidth-8) l=window.innerWidth-tw-8;
      if(l<8) l=8;
      if(t+120>window.innerHeight) t=rect.top-6-120;
      if(t<8) t=8;
      tip.style.left=l+'px'; tip.style.top=t+'px';
      tip.classList.add('exam-tooltip-show');
    };
    const hideTooltip=()=>hideExamTooltip();
    el.addEventListener('mouseenter',showTooltip);
    el.addEventListener('mouseleave',hideTooltip);
  });
  bar.querySelectorAll('.exam-chip .x').forEach(x=>{
    x.onclick=e=>{
      hideExamTooltip();
      e.stopPropagation(); e.preventDefault();
      const key=x.dataset.key;
      const ids=getExamIdsForGroup(key);
      State.selectedExams=State.selectedExams.filter(id=>!ids.includes(id));
      renderExamBar();
      updateTypeDropdown();
      if(SqrtPyqState.active){
        if(SqrtPyqState.exam!=='all'&&!sqrtPyqExams().includes(SqrtPyqState.exam)) SqrtPyqState.exam='all';
        SqrtPyqState.year='all'; SqrtPyqState.qCursor=-1; SqrtPyqState.yearCursor=0;
        renderSqrtPyqExamSelect(); renderSqrtPyqYearChips(); updateSqrtPyqStatus();
      }
      loadQuestion();
    };
  });
  bar.querySelectorAll('.exam-chip').forEach(c=>{
    c.onclick=e=>{
      e.stopPropagation();
      const key=c.dataset.key;
      openSubModal(key);
    };
  });
  const eb=bar.querySelector('#examEditBtn');
  if(eb) eb.onclick=()=>openExamModal();
}
function hideExamTooltip(){
  const tip=$('#examTooltip');
  if(tip) tip.classList.remove('exam-tooltip-show');
}
document.addEventListener('click', e=>{
  if(!e.target.closest('#examTooltip')&&!e.target.closest('.exam-chip')&&!e.target.closest('.modal-tab.toggle')) hideExamTooltip();
});

