/* my-questions-solutions1/mqs-helpers.js
   Shared toolkit for the descriptive (page-style) solution files in this folder.
   NEW file - does NOT modify any existing file.
   Provides window.MQS: math + KaTeX format helpers, the MK solution builder
   (descriptive steps + descriptive shortcut + one-line hint; NO teacher-says, NO mistakes),
   and wrapAll() which injects fresh dynamic solutions into base + ALL variants.

   Manual load order in sqrt.html:
       <script src="my-questions.js"></script>
       <script src="my-questions-solutions1/mqs-helpers.js"></script>
       <script src="my-questions-solutions1/mqs-a.js"></script>
       <script src="my-questions-solutions1/mqs-b.js"></script>
       <script src="my-questions-solutions1/mqs-c.js"></script>
   (helpers MUST load before mqs-a/b/c; all of them AFTER my-questions.js,
    and after utils.js + solution-builders.js which define step/makeStyledSolution)
*/
(function () {
  'use strict';
  var BS = String.fromCharCode(92), NL = String.fromCharCode(10);
  function K(t) { return '$' + t + '$'; }
  function RT(x) { return BS + 'sqrt{' + x + '}'; }
  function CRT(x) { return BS + 'sqrt[3]{' + x + '}'; }
  function FR(a, b) { return BS + 'frac{' + a + '}{' + b + '}'; }
  function DFR(a, b) { return BS + 'dfrac{' + a + '}{' + b + '}'; }
  function X() { return ' ' + BS + 'times '; }
  function POW(b, e) { return b + '^{' + e + '}'; }
  function BOX(x) { return BS + 'boxed{' + x + '}'; }
  function LE() { return ' ' + BS + 'le '; }
  function GE() { return ' ' + BS + 'ge '; }
  function NE() { return ' ' + BS + 'ne '; }
  function APPROX() { return ' ' + BS + 'approx '; }
  function L() { return [].slice.call(arguments).filter(function (s) { return s !== '' && s != null; }).join(NL); }
  function sqTex(k, v) { return '(' + k + X() + k + ') = ' + v; }
  function cubeTex(k, v) { return '(' + k + X() + k + ')' + X() + k + ' = ' + v; }

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

  function ints(s) { return (String(s).match(/[0-9]+/g) || []).map(Number); }
  function ansN(o) { return parseInt(String(o.ans).replace(/[^0-9]/g, ''), 10); }
  function numList(o, which) { var en = o.question.en, m; if (which === 'lcm') { m = en.match(/LCM of ([0-9, ]+) is/); } else { m = en.match(/divisible by ([0-9, ]+)/); } var src = m ? m[1] : en; return (src.match(/[0-9]+/g) || []).map(Number); }
  function byNum(o) { var m = o.question.en.match(/by which ([0-9]+) must/); return m ? Number(m[1]) : ints(o.question.en)[0]; }

  function steps(arr) {
    if (typeof step !== 'function') return [];
    return arr.map(function (p) { return step(p[0], p[1]); });
  }
  function MK(en, hg, hi) {
    return makeStyledSolution({
      en:   { steps: en.s, teachersSay: '', mistakes: [], shortcut: en.c || '', hint: en.h || '' },
      hing: { steps: hg.s, teachersSay: '', mistakes: [], shortcut: hg.c || '', hint: hg.h || '' },
      hi:   { steps: hi.s, teachersSay: '', mistakes: [], shortcut: hi.c || '', hint: hi.h || '' }
    });
  }
  function wrapAll(SOL) {
    if (typeof TEMPLATES === 'undefined' || !Array.isArray(TEMPLATES)) { try { console.warn('[mqs] TEMPLATES missing; load after my-questions.js'); } catch (e) {} return 0; }
    var V = (typeof VARIANTS !== 'undefined' && VARIANTS) ? VARIANTS : {};
    function wrap(gen, solver) { if (typeof gen !== 'function') return gen; return function () { var out = gen.apply(this, arguments); try { if (out && typeof out === 'object') { var s = solver(out); if (s) out.solution = s; } } catch (e) {} return out; }; }
    var n = 0;
    for (var i = 0; i < TEMPLATES.length; i++) { var t = TEMPLATES[i]; if (t && SOL[t.id]) { t.generate = wrap(t.generate, SOL[t.id]); n++; var vs = V[t.id]; if (vs && vs.length) { for (var j = 0; j < vs.length; j++) { vs[j] = wrap(vs[j], SOL[t.id]); } } } }
    return n;
  }

  window.MQS = {
    BS: BS, NL: NL, K: K, RT: RT, CRT: CRT, FR: FR, DFR: DFR, X: X, POW: POW, BOX: BOX,
    LE: LE, GE: GE, NE: NE, APPROX: APPROX, L: L, sqTex: sqTex, cubeTex: cubeTex,
    isqrt: isqrt, icbrt: icbrt, gcd: gcd, lcm: lcm, lcmArr: lcmArr, pf: pf, pfTex: pfTex,
    oddPrimes: oddPrimes, sqMul: sqMul, cubeMissing: cubeMissing, cubeRemove: cubeRemove,
    ints: ints, ansN: ansN, numList: numList, byNum: byNum,
    steps: steps, MK: MK, wrapAll: wrapAll
  };
  try { console.log('[mqs-helpers] MQS toolkit ready.'); } catch (e) {}
})();
