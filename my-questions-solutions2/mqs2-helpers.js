/* my-questions-solutions2/mqs2-helpers.js
   Part 2 (Age + Surd) ke descriptive per-sample solutions ka shared helper.
   NAYA file; kisi existing file ko modify nahi karta.
   window.MQS (my-questions-solutions1/mqs-helpers.js) ko reuse karta hai.
   Load order (sqrt.html):
     <script src="my-questions-part2.js"></script>
     <script src="my-questions-solutions1/mqs-helpers.js"></script>
     <script src="my-questions-solutions2/mqs2-helpers.js"></script>
     <script src="my-questions-solutions2/mqs2-age1.js"></script> (aur baaki mqs2-*.js)
   NOTE: Saara LaTeX backslash MQS helpers (RT/CRT/FR/BOX/X) se runtime par banta hai;
   is file me jaan-bujh kar koi literal backslash nahi hai.
*/
(function () {
  'use strict';
  var M = window.MQS;
  if (!M) { try { console.warn('[mqs2] window.MQS missing. Load my-questions-solutions1/mqs-helpers.js first.'); } catch (e) {} return; }

  function isArr(b) { return Object.prototype.toString.call(b) === '[object Array]'; }
  function pick(b, i) { return isArr(b) ? b[i] : b; }

  function TRI(steps, sc, hint) {
    function LL(i) {
      return {
        s: M.steps(steps.map(function (p) { return [pick(p.t, i), pick(p.b, i)]; })),
        c: pick(sc || '', i),
        h: pick(hint || '', i)
      };
    }
    return M.MK(LL(0), LL(1), LL(2));
  }

  function radicands(q) {
    var r = [], i = 0;
    while (true) {
      var p = q.indexOf('sqrt', i); if (p < 0) break;
      var b = q.indexOf('{', p); if (b < 0) break;
      var e = q.indexOf('}', b); if (e < 0) break;
      r.push({ inner: q.slice(b + 1, e), cube: q.slice(p + 4, b).indexOf('[3]') >= 0 });
      i = e + 1;
    }
    return r;
  }

  function ints(q) { return (String(q).match(/[0-9]+/g) || []).map(Number); }
  function ansClean(out) { return String(out.ans).split('$').join(''); }
  function ansNum(out) { return parseFloat(ansClean(out)); }
  function evalSum(expr) { return String(expr).split('+').reduce(function (a, b) { return a + parseFloat(b); }, 0); }
  function cbrtR(x) { return Math.round(Math.cbrt(x) * 1000) / 1000; }

  window.MQS2 = {
    M: M, TRI: TRI,
    K: M.K, RT: M.RT, CRT: M.CRT, FR: M.FR, DFR: M.DFR, BOX: M.BOX, X: M.X, POW: M.POW,
    isqrt: M.isqrt, icbrt: M.icbrt, cbrtR: cbrtR,
    radicands: radicands, ints: ints, ansClean: ansClean, ansNum: ansNum, evalSum: evalSum,
    wrap: function (SOL) { return M.wrapAll(SOL); }
  };
  try { console.log('[mqs2-helpers] ready'); } catch (e) {}
})();
