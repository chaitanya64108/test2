// ===================== LOAD QUESTION =====================
// Helper: get all available generators for a template (original + variants)
function getTemplateGenerators(tpl){
  const gens = [tpl.generate];
  const vars = VARIANTS[tpl.id];
  if(vars && vars.length) gens.push(...vars);
  return gens;
}

function loadQuestion(sameTpl){
  const val = $('#typeSelect').value;
  let pool = TEMPLATES;
  if(val !== 'all') pool = TEMPLATES.filter(t => t.label === val);
  if(sameTpl) {
    if(State.currentTplId) pool = TEMPLATES.filter(t => t.id === State.currentTplId);
  }
  if(pool.length === 0) pool = TEMPLATES;
  const tpl = pick(pool);
  State.currentTplId = tpl.id;
  // Pick variant: for similar, pick DIFFERENT variant; for new, random
  const gens = getTemplateGenerators(tpl);
  let variantIdx = 0;
  if(sameTpl && gens.length > 1){
    do { variantIdx = Math.floor(Math.random() * gens.length); }
    while(variantIdx === State.currentVariantIdx && gens.length > 1);
  } else {
    variantIdx = Math.floor(Math.random() * gens.length);
  }
  State.currentVariantIdx = variantIdx;
  const gen = gens[variantIdx]();
  const shuffled = shuffleOpts(gen.ans, gen.w);
  CurrentQ = { question: gen.question, options: shuffled.options, answer: shuffled.answer, tier: tpl.tier, label: tpl.label, id: tpl.id, solution: gen.solution || null };
  renderQuestion();
  updateHUD();
}

function newQuestion(){
  const val = $('#typeSelect').value;
  let pool = TEMPLATES;
  if(val !== 'all') pool = TEMPLATES.filter(t => t.label === val);
  if(val === 'all' && CurrentQ && CurrentQ.label) {
    const others = pool.filter(t => t.label !== CurrentQ.label);
    if(others.length > 0) pool = others;
  }
  if(pool.length === 0) pool = TEMPLATES;
  const tpl = pick(pool);
  State.currentTplId = tpl.id;
  // For new question, pick random variant
  const gens = getTemplateGenerators(tpl);
  const variantIdx = Math.floor(Math.random() * gens.length);
  State.currentVariantIdx = variantIdx;
  const gen = gens[variantIdx]();
  const shuffled = shuffleOpts(gen.ans, gen.w);
  CurrentQ = { question: gen.question, options: shuffled.options, answer: shuffled.answer, tier: tpl.tier, label: tpl.label, id: tpl.id, solution: gen.solution || null };
  renderQuestion();
  updateHUD();
}

function similarQuestion(){
  // Similar = same template, DIFFERENT variant
  loadQuestion(true);
}

function updateBtnVisibility(){
  const val = $('#typeSelect').value;
  $('#newBtn').classList.toggle('hide', val !== 'all');
}

