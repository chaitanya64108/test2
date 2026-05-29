/* my-questions-solutions.js — DYNAMIC beginner-friendly solutions for my-questions.js (Templates 1-33)
   - NEW file. Does NOT modify any existing file.
   - Wraps EVERY template generator (base + ALL variants in VARIANTS[id]) and injects a fresh,
     question-specific solution computed from the actual generated numbers.
   - Only: solution steps + shortcut + hint  (no mistakes, no teacher-says).
   - Math renders in KaTeX via $...$  (\sqrt bar over the full radicand, \frac stacked, BODMAS brackets).
   - Load in sqrt.html AFTER my-questions.js (utils.js + solution-builders.js must already be loaded):
       <script src="my-questions-solutions.js"></script>
*/
(function () {
  'use strict';
  if (typeof TEMPLATES === 'undefined' || !Array.isArray(TEMPLATES)) {
    console.warn('[my-questions-solutions] TEMPLATES nahi mila. my-questions.js ke baad load karo.');
    return;
  }
  if (typeof VARIANTS === 'undefined') { try { window.VARIANTS = {}; } catch (e) { return; } }
  if (typeof makeStyledSolution !== 'function' || typeof step !== 'function') {
    console.warn('[my-questions-solutions] makeStyledSolution/step missing. utils/solution-builders pehle load karo.');
    return;
  }

  // ===== KaTeX builders (no literal backslashes in source; use BS) =====
  var BS = String.fromCharCode(92), NL = String.fromCharCode(10);
  function K(t) { return '$' + t + '$'; }
  function RT(x) { return BS + 'sqrt{' + x + '}'; }
  function CRT(x) { return BS + 'sqrt[3]{' + x + '}'; }
  function FR(a, b) { return BS + 'frac{' + a + '}{' + b + '}'; }
  function X() { return ' ' + BS + 'times '; }
  function POW(b, e) { return b + '^{' + e + '}'; }
  function BOX(x) { return BS + 'boxed{' + x + '}'; }
  function L() { return [].slice.call(arguments).filter(Boolean).join(NL); }
  function cubeTex(k, val) { return '(' + k + X() + k + ')' + X() + k + ' = ' + val; }

  // ===== math helpers =====
  function isqrt(n) { var c = Math.floor(Math.sqrt(n)); while (c * c > n) c--; while ((c + 1) * (c + 1) <= n) c++; return c; }
  function icbrt(n) { var c = Math.round(Math.cbrt(n)); while (c * c * c > n) c--; while ((c + 1) * (c + 1) * (c + 1) <= n) c++; return c; }
  function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = b; b = a % b; a = t; } return a; }
  function lcm(a, b) { return a / gcd(a, b) * b; }
  function lcmArr(x) { return x.reduce(function (a, b) { return lcm(a, b); }); }
  function pf(n) { var m = {}, x = n; for (var d = 2; d * d <= x; d++) { while (x % d === 0) { m[d] = (m[d] || 0) + 1; x /= d; } } if (x > 1) m[x] = (m[x] || 0) + 1; return m; }
  function pfTex(n) { var m = pf(n), ks = Object.keys(m).map(Number).sort(function (a, b) { return a - b; }), p = []; for (var i = 0; i < ks.length; i++) { p.push(m[ks[i]] > 1 ? POW(ks[i], m[ks[i]]) : String(ks[i])); } return p.join(X()); }
  function oddPrimes(n) { var m = pf(n), r = []; for (var p in m) { if (m[p] % 2) r.push(+p); } return r; }
  function sqMul(n) { return oddPrimes(n).reduce(function (a, b) { return a * b; }, 1); }
  function cubeMissing(n) { var m = pf(n), r = 1; for (var p in m) { var e = m[p] % 3; if (e) r *= Math.pow(+p, 3 - e); } return r; }
  function cubeRemove(n) { var m = pf(n), r = 1; for (var p in m) { var e = m[p] % 3; if (e) r *= Math.pow(+p, e); } return r; }

  // ===== parsing from the (always-present) English question =====
  function ints(s) { return (String(s).match(/[0-9]+/g) || []).map(Number); }
  function ansN(o) { return parseInt(String(o.ans).replace(/[^0-9]/g, ''), 10); }
  function numList(o, which) { var en = o.question.en, m; if (which === 'lcm') { m = en.match(/LCM of ([0-9,\s]+) is/); } else { m = en.match(/divisible by ([0-9,\s]+)/); } var src = m ? m[1] : en; return (src.match(/[0-9]+/g) || []).map(Number); }
  function byNum(o) { var m = o.question.en.match(/by which ([0-9]+) must/); return m ? Number(m[1]) : ints(o.question.en)[0]; }

  // ===== 3-language assembler. Each lang = { s:[steps], c:shortcut, h:hint } =====
  function MK(en, hg, hi) {
    return makeStyledSolution({
      en: { steps: en.s, teachersSay: '', mistakes: [], shortcut: en.c || '', hint: en.h || '' },
      hing: { steps: hg.s, teachersSay: '', mistakes: [], shortcut: hg.c || '', hint: hg.h || '' },
      hi: { steps: hi.s, teachersSay: '', mistakes: [], shortcut: hi.c || '', hint: hi.h || '' }
    });
  }

  // ============================ BUILDERS ============================

  // √N = k
  function solSqrt(N, k) {
    return MK(
      { s: [
        step('Step 1 — What to find', 'We need ' + K(RT(N)) + ' — the number that, multiplied by itself, gives ' + N + '.'),
        step('Step 2 — Take the root', L('Check: ' + K(POW(k, 2) + ' = ' + k + X() + k + ' = ' + N) + '.', 'So ' + K(RT(N) + ' = ' + k) + '.')),
        step('Step 3 — Answer', K(BOX(String(k))))
      ], c: K(POW(k, 2) + ' = ' + N) + ' so ' + K(RT(N) + ' = ' + k) + '.', h: 'Find the number whose square is ' + N + '.' },
      { s: [
        step('Step 1 — Kya nikaalna hai', 'Humein ' + K(RT(N)) + ' nikaalna hai — woh number jo khud se guna karke ' + N + ' de.'),
        step('Step 2 — Root lo', L('Check: ' + K(POW(k, 2) + ' = ' + k + X() + k + ' = ' + N) + '.', 'Isliye ' + K(RT(N) + ' = ' + k) + '.')),
        step('Step 3 — Answer', K(BOX(String(k))))
      ], c: K(POW(k, 2) + ' = ' + N) + ', isliye ' + K(RT(N) + ' = ' + k) + '.', h: 'Woh number dhoondo jiska square ' + N + ' hai.' },
      { s: [
        step('चरण 1 — क्या ज्ञात करना', 'हमें ' + K(RT(N)) + ' ज्ञात करना है — वह संख्या जो स्वयं से गुणा करने पर ' + N + ' दे।'),
        step('चरण 2 — मूल निकालो', L('जाँच: ' + K(POW(k, 2) + ' = ' + k + X() + k + ' = ' + N) + '।', 'इसलिए ' + K(RT(N) + ' = ' + k) + '।')),
        step('चरण 3 — उत्तर', K(BOX(String(k))))
      ], c: K(POW(k, 2) + ' = ' + N) + ', इसलिए ' + K(RT(N) + ' = ' + k) + '।', h: 'वह संख्या ज्ञात करो जिसका वर्ग ' + N + ' है।' }
    );
  }

  // ∛N = k
  function solCbrt(N, k) {
    return MK(
      { s: [
        step('Step 1 — What to find', 'We need ' + K(CRT(N)) + ' — the number that, multiplied by itself three times, gives ' + N + '.'),
        step('Step 2 — Take the cube root', L('Check: ' + K(cubeTex(k, N)) + '.', 'So ' + K(CRT(N) + ' = ' + k) + '.')),
        step('Step 3 — Answer', K(BOX(String(k))))
      ], c: K(POW(k, 3) + ' = ' + N) + ' so ' + K(CRT(N) + ' = ' + k) + '.', h: 'Find the number whose cube is ' + N + '.' },
      { s: [
        step('Step 1 — Kya nikaalna hai', 'Humein ' + K(CRT(N)) + ' nikaalna hai — woh number jo teen baar khud se guna karke ' + N + ' de.'),
        step('Step 2 — Cube root lo', L('Check: ' + K(cubeTex(k, N)) + '.', 'Isliye ' + K(CRT(N) + ' = ' + k) + '.')),
        step('Step 3 — Answer', K(BOX(String(k))))
      ], c: K(POW(k, 3) + ' = ' + N) + ', isliye ' + K(CRT(N) + ' = ' + k) + '.', h: 'Woh number dhoondo jiska cube ' + N + ' hai.' },
      { s: [
        step('चरण 1 — क्या ज्ञात करना', 'हमें ' + K(CRT(N)) + ' ज्ञात करना है — वह संख्या जो तीन बार स्वयं से गुणा करने पर ' + N + ' दे।'),
        step('चरण 2 — घनमूल लो', L('जाँच: ' + K(cubeTex(k, N)) + '।', 'इसलिए ' + K(CRT(N) + ' = ' + k) + '।')),
        step('चरण 3 — उत्तर', K(BOX(String(k))))
      ], c: K(POW(k, 3) + ' = ' + N) + ', इसलिए ' + K(CRT(N) + ' = ' + k) + '।', h: 'वह संख्या ज्ञात करो जिसका घन ' + N + ' है।' }
    );
  }

  // largest square that fits in N; leftover
  function solLeftSq(N) {
    var k = isqrt(N), sq = k * k, r = N - sq, nx = (k + 1) * (k + 1);
    return MK(
      { s: [
        step('Step 1 — Idea', 'Fit the LARGEST perfect square inside ' + N + '; whatever is left over is the answer.'),
        step('Step 2 — Largest square', L('Biggest square not exceeding ' + N + ' is ' + K(POW(k, 2) + ' = ' + sq) + '.', '(Next one ' + K(POW(k + 1, 2) + ' = ' + nx) + ' is too big.)')),
        step('Step 3 — Subtract', K(N + ' - ' + sq + ' = ' + r)),
        step('Step 4 — Answer', K(BOX(String(r))))
      ], c: K(N + ' - ' + POW(k, 2) + ' = ' + r) + '.', h: K(RT(N)) + ' lies between ' + k + ' and ' + (k + 1) + '; subtract ' + K(POW(k, 2)) + '.' },
      { s: [
        step('Step 1 — Soch', N + ' me sabse BADA perfect square fit karo; jo bachega wahi answer.'),
        step('Step 2 — Bada square', L(N + ' se chhota ya barabar sabse bada square ' + K(POW(k, 2) + ' = ' + sq) + ' hai.', '(Agla ' + K(POW(k + 1, 2) + ' = ' + nx) + ' bahut bada hai.)')),
        step('Step 3 — Ghatao', K(N + ' - ' + sq + ' = ' + r)),
        step('Step 4 — Answer', K(BOX(String(r))))
      ], c: K(N + ' - ' + POW(k, 2) + ' = ' + r) + '.', h: K(RT(N)) + ' ka floor ' + k + ' hai; ' + K(POW(k, 2)) + ' ghatao.' },
      { s: [
        step('चरण 1 — विचार', N + ' में सबसे बड़ा पूर्ण वर्ग बिठाओ; जो शेष बचे वही उत्तर।'),
        step('चरण 2 — सबसे बड़ा वर्ग', L(N + ' से छोटा/बराबर सबसे बड़ा वर्ग ' + K(POW(k, 2) + ' = ' + sq) + ' है।', '(अगला ' + K(POW(k + 1, 2) + ' = ' + nx) + ' बहुत बड़ा है।)')),
        step('चरण 3 — घटाओ', K(N + ' - ' + sq + ' = ' + r)),
        step('चरण 4 — उत्तर', K(BOX(String(r))))
      ], c: K(N + ' - ' + POW(k, 2) + ' = ' + r) + '।', h: K(RT(N)) + ' का पूर्णांक ' + k + '; ' + K(POW(k, 2)) + ' घटाओ।' }
    );
  }

  // extra needed to reach the next square above N
  function solMoreSq(N) {
    var k = isqrt(N), nx = (k + 1) * (k + 1), more = nx - N;
    return MK(
      { s: [
        step('Step 1 — Idea', 'We must grow up to the NEXT perfect square above ' + N + '.'),
        step('Step 2 — Next square', K(RT(N)) + ' is between ' + k + ' and ' + (k + 1) + ', so the next square is ' + K(POW(k + 1, 2) + ' = ' + nx) + '.'),
        step('Step 3 — Subtract', K(nx + ' - ' + N + ' = ' + more)),
        step('Step 4 — Answer', K(BOX(String(more))))
      ], c: K(POW(k + 1, 2) + ' - ' + N + ' = ' + more) + '.', h: 'Next square is ' + K(POW(k + 1, 2)) + '.' },
      { s: [
        step('Step 1 — Soch', N + ' ke UPAR wale agle perfect square tak pahunchna hai.'),
        step('Step 2 — Agla square', K(RT(N)) + ' , ' + k + ' aur ' + (k + 1) + ' ke beech hai, to agla square ' +