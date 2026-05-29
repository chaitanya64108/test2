// ===================== PYQ LOADQUESTION OVERRIDE =====================
const _origLoadQuestion = loadQuestion;
loadQuestion = function(sameTpl){
  if(!SqrtPyqState.active) return _origLoadQuestion(sameTpl);
  const q = sqrtPyqNavigate(1);
  if(!q){
    toast('No PYQs match these filters — showing generated question.');
    return _origLoadQuestion();
  }
  const built = buildSqrtPyqQuestion(q);
  CurrentQ = built;
  $('#solution').classList.remove('show');
  renderQuestion();
  updateHUD();
};

// ===================== EVENT HANDLERS =====================
$('#langSelect').addEventListener('change', function(){
  State.lang = this.value;
  if(CurrentQ) { renderQuestion(); if($('#solution').classList.contains('show')) showSolution(); }
});
$('#typeSelect').addEventListener('change', function(){
  updateBtnVisibility();
  loadQuestion();
});
$('#newBtn').addEventListener('click', newQuestion);
$('#similarBtn').addEventListener('click', similarQuestion);
$('#prevBtn').addEventListener('click', () => {
  if(!SqrtPyqState.active) { loadQuestion(); return; }
  const q = sqrtPyqNavigate(-1);
  if(!q) return;
  $('#solution').classList.remove('show');
  CurrentQ = buildSqrtPyqQuestion(q);
  renderQuestion();
  updateHUD();
});
$('#nextBtn').addEventListener('click', () => {
  if(!SqrtPyqState.active) { loadQuestion(); return; }
  const q = sqrtPyqNavigate(1);
  if(!q) return;
  $('#solution').classList.remove('show');
  CurrentQ = buildSqrtPyqQuestion(q);
  renderQuestion();
  updateHUD();
});
$('#solveBtn').addEventListener('click', showSolution);
$('#hintBtn').addEventListener('click', function(){
  if(!CurrentQ) return;
  const s = txt(CurrentQ.solution, State.lang);
  const fb = $('#feedback');
  if(s && s.hint){
    fb.innerHTML = '💡 <b>Hint:</b> ' + renderMath(s.hint);
    fb.className = 'feedback hint';
  } else {
    fb.innerHTML = '💡 Hint coming soon for this question type.';
    fb.className = 'feedback hint';
  }
});
$('#subModalBack').addEventListener('click', closeSubModal);
$('#examContinueBtn').addEventListener('click', () => {
  closeExamModal(); updateTypeDropdown();
  if(SqrtPyqState.active){
    if(SqrtPyqState.exam!=='all'&&!sqrtPyqExams().includes(SqrtPyqState.exam)) SqrtPyqState.exam='all';
    SqrtPyqState.year='all'; SqrtPyqState.qCursor=-1; SqrtPyqState.yearCursor=0;
    renderSqrtPyqExamSelect(); renderSqrtPyqYearChips(); updateSqrtPyqStatus();
  }
});
$('#examSkipBtn').addEventListener('click', closeExamModal);
$('#subModalSearch').addEventListener('input', function() {
  renderSubModalList(this.value);
});

// ===================== TAB SWITCHING (PYQ Aware) =====================
document.querySelectorAll('.capsule-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const mode = tab.dataset.tab;
    const newActive = mode === 'pyq';
    if(newActive === SqrtPyqState.active) return;
    SqrtPyqState.active = newActive;
    if(newActive){
      SqrtPyqState.exam = 'all';
      SqrtPyqState.year = 'all';
      SqrtPyqState.qCursor = -1;
      SqrtPyqState.yearCursor = 0;
      renderSqrtPyqYearChips();
      renderSqrtPyqExamSelect();
      updateSqrtPyqStatus();
    }
    toast(newActive ? '📚 PYQ Mode ON — questions from exam bank.' : '🎲 PYQ Mode OFF — back to generator.');
    updateSqrtPyqModeUI();
    loadQuestion();
  });
});

// ===================== PYQ EVENT HANDLERS =====================
$('#pyqExamSelect').addEventListener('change', function(){
  SqrtPyqState.exam = this.value;
  SqrtPyqState.year = 'all';
  SqrtPyqState.qCursor = -1;
  SqrtPyqState.yearCursor = 0;
  renderSqrtPyqYearChips();
  updateSqrtPyqStatus();
  if(SqrtPyqState.active) loadQuestion();
});
$('#pyqHelpBtn').addEventListener('click', () => {
  toast('📚 112 PYQs (2015-2025) from Square Root & Cube Root chapter. Filter by exam or year!');
});

// ===================== RANGE SLIDER =====================
const slider = $('#rangeSlider');
const bubble = $('#rangeBubble');
if(slider && bubble){
  const showBubble = () => {
    const val = slider.value;
    const pct = ((val - slider.min) / (slider.max - slider.min)) * 100;
    bubble.textContent = val;
    bubble.style.left = `calc(${pct}% + (${8 - pct * 0.16}px))`;
  };
  slider.addEventListener('input', showBubble);
  showBubble();
}

// ===================== BOOT =====================
State.selectedExams = Object.values(EXAM_PROFILES).flatMap(p => p.exams.map(e => e.id));
renderExamBar();
updateTypeDropdown();
updateBtnVisibility();
loadQuestion();
