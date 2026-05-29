/* my-questions-solutions.js - DYNAMIC beginner-friendly solutions for my-questions.js (Templates 1-33)
   NEW file. Does NOT modify any existing file. Wraps EVERY template generator (base + all VARIANTS[id])
   and injects a fresh, question-specific solution computed from the actual numbers.
   Only: solution steps + shortcut + hint  (no mistakes, no teacher-says).
   Math renders in KaTeX via $...$  (sqrt bar over full radicand, frac stacked, BODMAS brackets).
   Load in sqrt.html AFTER my-questions.js (utils.js + solution-builders.js already loaded):
       <script src="my-questions-solutions.js"></script>
*/
(function () {
  'use strict';
  if (typeof TEMPLATES === 'undefined' || !Array.isArray(TEMPLATES)) { console.warn('[mq-solutions] TEMPLATES missing; load after my-questions.js'); return; }
  if (typeof VARIANTS === 'undefined') { try { window.VARIANTS = {}; } catch (e) { return; } }
  if (typeof makeStyledSolution !== 'function' || typeof step !== 'function') { console.warn('[mq-solutions] makeStyledSolution/step missing'); return; }

  var BS = String.fromCharCode(92), NL = String.fromCharCode(10);
  function K(t) { return '$' + t + '$'; }
  function RT(x) { return BS + 'sqrt{' + x + '}'; }
  function CRT(x) { return BS + 'sqrt[3]{' + x + '}'; }
  function FR(a, b) { return BS + 'frac{' + a + '}{' + b + '}'; }
  function X() { return ' ' + BS + 'times '; }
  function POW(b, e) { return b + '^{' + e + '}'; }
  function BOX(x) { return BS + 'boxed{' + x + '}'; }
  function LE() { return ' ' + BS + 'le '; }
  function GE() { return ' ' + BS + 'ge '; }
  function L() { return [].slice.call(arguments).filter(Boolean).join(NL); }
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

  var TT = { en: ['Understand', 'Solve', 'Answer'], hg: ['Samjho', 'Hal karo', 'Answer'], hi: ['समझो', 'हल करो', 'उत्तर'] };
  function ST(lang, idea, body, ans) { return [step(TT[lang][0], idea), step(TT[lang][1], body), step(TT[lang][2], K(BOX(ans)))]; }
  function MK(en, hg, hi) { return makeStyledSolution({ en: { steps: en.s, teachersSay: '', mistakes: [], shortcut: en.c || '', hint: en.h || '' }, hing: { steps: hg.s, teachersSay: '', mistakes: [], shortcut: hg.c || '', hint: hg.h || '' }, hi: { steps: hi.s, teachersSay: '', mistakes: [], shortcut: hi.c || '', hint: hi.h || '' } }); }

  // ============ BUILDERS (math body shared across languages) ============

  function solSqrt(N, k) {
    var b = L('Check: ' + K(POW(k, 2) + ' = ' + k + X() + k + ' = ' + N), K(RT(N) + ' = ' + k));
    return MK(
      { s: ST('en', 'We need ' + K(RT(N)) + ' - the number that multiplied by itself gives ' + N + '.', b, '' + k), c: K(RT(N) + ' = ' + k), h: 'Square root of ' + N + '.' },
      { s: ST('hg', 'Humein ' + K(RT(N)) + ' chahiye - woh number jo khud se guna karke ' + N + ' de.', b, '' + k), c: K(RT(N) + ' = ' + k), h: N + ' ka square root.' },
      { s: ST('hi', 'हमें ' + K(RT(N)) + ' चाहिए - वह संख्या जो स्वयं से गुणा करने पर ' + N + ' दे।', b, '' + k), c: K(RT(N) + ' = ' + k), h: N + ' का वर्गमूल।' }
    );
  }

  function solCbrt(N, k) {
    var b = L('Check: ' + K(cubeTex(k, N)), K(CRT(N) + ' = ' + k));
    return MK(
      { s: ST('en', 'We need ' + K(CRT(N)) + ' - the number that multiplied by itself three times gives ' + N + '.', b, '' + k), c: K(CRT(N) + ' = ' + k), h: 'Cube root of ' + N + '.' },
      { s: ST('hg', 'Humein ' + K(CRT(N)) + ' chahiye - woh number jo teen baar guna karke ' + N + ' de.', b, '' + k), c: K(CRT(N) + ' = ' + k), h: N + ' ka cube root.' },
      { s: ST('hi', 'हमें ' + K(CRT(N)) + ' चाहिए - वह संख्या जो तीन बार गुणा करने पर ' + N + ' दे।', b, '' + k), c: K(CRT(N) + ' = ' + k), h: N + ' का घनमूल।' }
    );
  }

  function solLeftSq(N) {
    var k = isqrt(N), sq = k * k, r = N - sq, nx = (k + 1) * (k + 1);
    var b = L(K('Biggest square' + LE() + N + ': ' + POW(k, 2) + ' = ' + sq), '(Next ' + K(POW(k + 1, 2) + ' = ' + nx) + ' is too big.)', K(N + ' - ' + sq + ' = ' + r));
    return MK(
      { s: ST('en', 'Fit the LARGEST perfect square inside ' + N + '; what is left over is the answer.', b, '' + r), c: K(N + ' - ' + POW(k, 2) + ' = ' + r), h: 'Floor of ' + K(RT(N)) + ' is ' + k + '.' },
      { s: ST('hg', N + ' me sabse BADA perfect square fit karo; jo bachega wahi answer.', b, '' + r), c: K(N + ' - ' + POW(k, 2) + ' = ' + r), h: K(RT(N)) + ' ka floor ' + k + '.' },
      { s: ST('hi', N + ' में सबसे बड़ा पूर्ण वर्ग बिठाओ; जो शेष बचे वही उत्तर।', b, '' + r), c: K(N + ' - ' + POW(k, 2) + ' = ' + r), h: K(RT(N)) + ' का पूर्णांक ' + k + '।' }
    );
  }

  function solMoreSq(N) {
    var k = isqrt(N), nx = (k + 1) * (k + 1), more = nx - N;
    var b = L('Next square: ' + K(POW(k + 1, 2) + ' = ' + nx), K(nx + ' - ' + N + ' = ' + more));
    return MK(
      { s: ST('en', K(RT(N)) + ' is between ' + k + ' and ' + (k + 1) + '; grow up to the NEXT perfect square.', b, '' + more), c: K(POW(k + 1, 2) + ' - ' + N + ' = ' + more), h: 'Next square is ' + K(POW(k + 1, 2)) + '.' },
      { s: ST('hg', K(RT(N)) + ' , ' + k + ' aur ' + (k + 1) + ' ke beech hai; agle perfect square tak badhao.', b, '' + more), c: K(POW(k + 1, 2) + ' - ' + N + ' = ' + more), h: 'Agla square ' + K(POW(k + 1, 2)) + '.' },
      { s: ST('hi', K(RT(N)) + ' , ' + k + ' और ' + (k + 1) + ' के बीच है; अगले पूर्ण वर्ग तक बढ़ाओ।', b, '' + more), c: K(POW(k + 1, 2) + ' - ' + N + ' = ' + more), h: 'अगला वर्ग ' + K(POW(k + 1, 2)) + '।' }
    );
  }

  function solLeftCb(N) {
    var c = icbrt(N), cu = c * c * c, r = N - cu;
    var b = L(K('Biggest cube' + LE() + N + ': ' + POW(c, 3) + ' = ' + cu), K(N + ' - ' + cu + ' = ' + r));
    return MK(
      { s: ST('en', 'Fit the LARGEST perfect cube inside ' + N + '; the leftover is removed.', b, '' + r), c: K(N + ' - ' + POW(c, 3) + ' = ' + r), h: 'Floor of ' + K(CRT(N)) + ' is ' + c + '.' },
      { s: ST('hg', N + ' me sabse BADA perfect cube fit karo; jo bachega use hatao.', b, '' + r), c: K(N + ' - ' + POW(c, 3) + ' = ' + r), h: K(CRT(N)) + ' ka floor ' + c + '.' },
      { s: ST('hi', N + ' में सबसे बड़ा पूर्ण घन बिठाओ; जो बचे उसे हटाओ।', b, '' + r), c: K(N + ' - ' + POW(c, 3) + ' = ' + r), h: K(CRT(N)) + ' का पूर्णांक ' + c + '।' }
    );
  }

  function solMoreCb(N) {
    var c = icbrt(N), nx = (c + 1) * (c + 1) * (c + 1), more = nx - N;
    var b = L('Next cube: ' + K(POW(c + 1, 3) + ' = ' + nx), K(nx + ' - ' + N + ' = ' + more));
    return MK(
      { s: ST('en', K(CRT(N)) + ' is between ' + c + ' and ' + (c + 1) + '; reach the NEXT perfect cube.', b, '' + more), c: K(POW(c + 1, 3) + ' - ' + N + ' = ' + more), h: 'Next cube is ' + K(POW(c + 1, 3)) + '.' },
      { s: ST('hg', K(CRT(N)) + ' , ' + c + ' aur ' + (c + 1) + ' ke beech; agle perfect cube tak jao.', b, '' + more), c: K(POW(c + 1, 3) + ' - ' + N + ' = ' + more), h: 'Agla cube ' + K(POW(c + 1, 3)) + '.' },
      { s: ST('hi', K(CRT(N)) + ' , ' + c + ' और ' + (c + 1) + ' के बीच; अगले पूर्ण घन तक जाओ।', b, '' + more), c: K(POW(c + 1, 3) + ' - ' + N + ' = ' + more), h: 'अगला घन ' + K(POW(c + 1, 3)) + '।' }
    );
  }

  function solUproot(u, rem, k) {
    var orig = u + rem;
    var b = L('Original = remaining + removed:', K(rem + ' + ' + u + ' = ' + orig), 'Rows = ' + K(RT(orig) + ' = ' + k));
    return MK(
      { s: ST('en', 'Originally all formed a square. Add back the removed ones, then take the root.', b, '' + k), c: K(RT(rem + ' + ' + u) + ' = ' + k), h: 'Add removed + remaining, then square root.' },
      { s: ST('hg', 'Pehle sab square me the. Hataye gaye wapas jodo, phir root lo.', b, '' + k), c: K(RT(rem + ' + ' + u) + ' = ' + k), h: 'Hataye + bache jodo, phir square root.' },
      { s: ST('hi', 'पहले सब वर्ग में थे। हटाए गए वापस जोड़ो, फिर मूल लो।', b, '' + k), c: K(RT(rem + ' + ' + u) + ' = ' + k), h: 'हटाए + शेष जोड़ो, फिर वर्गमूल।' }
    );
  }

  function solFence(cost, rate) {
    var per = cost / rate, side = per / 4, area = side * side;
    var b = L('Perimeter = ' + K('total cost ' + BS + 'div rate'), K('= ' + FR(cost, rate) + ' = ' + per) + ' m', 'Side = ' + K(FR(per, 4) + ' = ' + side) + ' m', 'Area = ' + K('(' + side + X() + side + ') = ' + area) + ' sq.m');
    return MK(
      { s: ST('en', 'Cost = perimeter x rate. So perimeter = cost/rate; side = perimeter/4; area = side x side.', b, '' + area), c: 'side = (cost/rate)/4, area = side' + POW('', 2), h: 'Find perimeter first, then side, then square it.' },
      { s: ST('hg', 'Cost = perimeter x rate. To perimeter = cost/rate; side = perimeter/4; area = side x side.', b, '' + area), c: 'side = (cost/rate)/4', h: 'Pehle perimeter, phir side, phir square.' },
      { s: ST('hi', 'लागत = परिमाप x दर। तो परिमाप = लागत/दर; भुजा = परिमाप/4; क्षेत्रफल = भुजा x भुजा।', b, '' + area), c: 'भुजा = (लागत/दर)/4', h: 'पहले परिमाप, फिर भुजा, फिर वर्ग।' }
    );
  }

  function solPathOut(s, w) {
    var o = s + 2 * w, area = o * o - s * s;
    var b = L('Path is OUTSIDE, so add width on BOTH sides:', K('Outer side = ' + s + ' + (2' + X() + w + ') = ' + o), K('Path area = (' + o + X() + o + ') - (' + s + X() + s + ') = ' + (o * o) + ' - ' + (s * s) + ' = ' + area));
    return MK(
      { s: ST('en', 'Outer square = inner side + 2 x width (one width on each side). Subtract the inner area.', b, '' + area), c: K('(' + o + ')^{2} - (' + s + ')^{2} = ' + area), h: 'Outer side = side + 2 x width.' },
      { s: ST('hg', 'Bahari square = andar side + 2 x width (dono taraf). Andar ka area ghatao.', b, '' + area), c: K('(' + o + ')^{2} - (' + s + ')^{2} = ' + area), h: 'Bahari side = side + 2 x width.' },
      { s: ST('hi', 'बाहरी वर्ग = भीतरी भुजा + 2 x चौड़ाई (दोनों ओर)। भीतरी क्षेत्रफल घटाओ।', b, '' + area), c: K('(' + o + ')^{2} - (' + s + ')^{2} = ' + area), h: 'बाहरी भुजा = भुजा + 2 x चौड़ाई।' }
    );
  }

  function solPathIn(s, w) {
    var inr = s - 2 * w, area = inr * inr;
    var b = L('Path is INSIDE, so remove width from BOTH sides:', K('Inner side = ' + s + ' - (2' + X() + w + ') = ' + inr), K('Inner area = (' + inr + X() + inr + ') = ' + area));
    return MK(
      { s: ST('en', 'Remaining inner square = side - 2 x width. Then square it.', b, '' + area), c: K('(' + inr + ')^{2} = ' + area), h: 'Inner side = side - 2 x width.' },
      { s: ST('hg', 'Bacha andar ka square = side - 2 x width. Phir square karo.', b, '' + area), c: K('(' + inr + ')^{2} = ' + area), h: 'Andar side = side - 2 x width.' },
      { s: ST('hi', 'शेष भीतरी वर्ग = भुजा - 2 x चौड़ाई। फिर वर्ग करो।', b, '' + area), c: K('(' + inr + ')^{2} = ' + area), h: 'भीतरी भुजा = भुजा - 2 x चौड़ाई।' }
    );
  }

  function solTilesTotal(fA, tA) {
    var t = fA / tA, b = K('Tiles = ' + FR(fA, tA) + ' = ' + t);
    return MK(
      { s: ST('en', 'Number of tiles = floor area divided by one tile area.', b, '' + t), c: K(FR(fA, tA) + ' = ' + t), h: 'Divide floor area by tile area.' },
      { s: ST('hg', 'Tiles ki sankhya = floor area / ek tile ka area.', b, '' + t), c: K(FR(fA, tA) + ' = ' + t), h: 'Floor area ko tile area se divide karo.' },
      { s: ST('hi', 'टाइलों की संख्या = फर्श क्षेत्रफल / एक टाइल क्षेत्रफल।', b, '' + t), c: K(FR(fA, tA) + ' = ' + t), h: 'फर्श क्षेत्रफल को टाइल क्षेत्रफल से भाग दो।' }
    );
  }

  function solTilesSide(F, ts) {
    var n = F / ts, b = K('Tiles along one side = ' + FR(F, ts) + ' = ' + n);
    return MK(
      { s: ST('en', 'Tiles along a side = floor side divided by tile side.', b, '' + n), c: K(FR(F, ts) + ' = ' + n), h: 'Divide the side by the tile side.' },
      { s: ST('hg', 'Ek side par tiles = floor side / tile side.', b, '' + n), c: K(FR(F, ts) + ' = ' + n), h: 'Side ko tile side se divide karo.' },
      { s: ST('hi', 'एक भुजा पर टाइलें = फर्श भुजा / टाइल भुजा।', b, '' + n), c: K(FR(F, ts) + ' = ' + n), h: 'भुजा को टाइल भुजा से भाग दो।' }
    );
  }

  function solTileCost(s, rate, cost) {
    var area = s * s;
    var b = L('Area = ' + K('(' + s + X() + s + ') = ' + area) + ' sq.m', 'Cost = area x rate = ' + K('(' + area + X() + rate + ') = ' + cost), 'Total = Rs ' + cost);
    return MK(
      { s: ST('en', 'First the area (side x side), then multiply by the rate per sq.m.', b, '' + cost), c: K('(' + area + X() + rate + ') = ' + cost), h: 'Area = side^{2}, then x rate.' },
      { s: ST('hg', 'Pehle area (side x side), phir rate per sq.m se multiply.', b, '' + cost), c: K('(' + area + X() + rate + ') = ' + cost), h: 'Area = side^{2}, phir x rate.' },
      { s: ST('hi', 'पहले क्षेत्रफल (भुजा x भुजा), फिर दर प्रति वर्ग मी से गुणा।', b, '' + cost), c: K('(' + area + X() + rate + ') = ' + cost), h: 'क्षेत्रफल = भुजा^{2}, फिर x दर।' }
    );
  }

  function solEqual(n) {
    var tot = n * n, b = K('(' + n + X() + n + ') = ' + POW(n, 2) + ' = ' + tot);
    return MK(
      { s: ST('en', n + ' people each give Rs ' + n + ' (equal to their count), so total = ' + n + ' x ' + n + '.', b, '' + tot), c: K(POW(n, 2) + ' = ' + tot), h: 'Total = n x n.' },
      { s: ST('hg', n + ' log har ek Rs ' + n + ' dete hain (sankhya ke barabar), to total = ' + n + ' x ' + n + '.', b, '' + tot), c: K(POW(n, 2) + ' = ' + tot), h: 'Total = n x n.' },
      { s: ST('hi', n + ' लोग हर एक Rs ' + n + ' देते हैं (संख्या के बराबर), तो कुल = ' + n + ' x ' + n + '।', b, '' + tot), c: K(POW(n, 2) + ' = ' + tot), h: 'कुल = n x n।' }
    );
  }

  function solDist(tot, kk, n) {
    var q = tot / kk;
    var b = L('Each share = ' + kk + ' x (count), so total = ' + kk + ' x count' + POW('', 2) + ':', K(POW('count', 2) + ' = ' + FR(tot, kk) + ' = ' + q), K(RT(q) + ' = ' + n));
    return MK(
      { s: ST('en', 'Total = ' + kk + ' x count^{2}. Divide by ' + kk + ', then take the square root.', b, '' + n), c: K('count = ' + RT(FR(tot, kk)) + ' = ' + n), h: 'Divide total by ' + kk + ', then square root.' },
      { s: ST('hg', 'Total = ' + kk + ' x count^{2}. ' + kk + ' se divide karo, phir square root.', b, '' + n), c: K('count = ' + RT(FR(tot, kk)) + ' = ' + n), h: 'Total ko ' + kk + ' se divide, phir root.' },
      { s: ST('hi', 'कुल = ' + kk + ' x संख्या^{2}। ' + kk + ' से भाग दो, फिर वर्गमूल।', b, '' + n), c: K('संख्या = ' + RT(FR(tot, kk)) + ' = ' + n), h: 'कुल को ' + kk + ' से भाग, फिर मूल।' }
    );
  }

  function solSqChk(sq, k) {
    var b = L('The total must be a perfect square.', K(RT(sq) + ' = ' + k) + ' (a whole number), so ' + sq + ' qualifies.');
    return MK(
      { s: ST('en', 'Total = (count)^{2}, so it must be a perfect square. Only the option with an exact root works.', b, '' + sq), c: K(RT(sq) + ' = ' + k), h: 'Pick the option that has an exact square root.' },
      { s: ST('hg', 'Total = (count)^{2}, isliye perfect square hona chahiye. Sirf exact root wala option sahi.', b, '' + sq), c: K(RT(sq) + ' = ' + k), h: 'Exact square root wala option chuno.' },
      { s: ST('hi', 'कुल = (संख्या)^{2}, इसलिए पूर्ण वर्ग होना चाहिए। केवल पूर्ण मूल वाला विकल्प सही।', b, '' + sq), c: K(RT(sq) + ' = ' + k), h: 'पूर्ण वर्गमूल वाला विकल्प चुनो।' }
    );
  }

  function solLeastSq(nums) {
    var L0 = lcmArr(nums), m = sqMul(L0), v = L0 * m;
    var b = (m === 1)
      ? L(K('LCM(' + nums.join(', ') + ') = ' + L0), K(L0 + ' = ' + pfTex(L0)) + ' (already a perfect square)')
      : L(K('LCM(' + nums.join(', ') + ') = ' + L0), K(L0 + ' = ' + pfTex(L0)), 'Odd-power prime(s): ' + oddPrimes(L0).join(', ') + ' -> multiply once to pair them', K(L0 + X() + m + ' = ' + v));
    return MK(
      { s: ST('en', 'Must be divisible by all (take LCM) AND a perfect square (every prime power even).', b, '' + v), c: K(L0 + X() + m + ' = ' + v), h: 'LCM, then make all prime powers even.' },
      { s: ST('hg', 'Sab se divisible (LCM) AUR perfect square (har prime power even) hona chahiye.', b, '' + v), c: K(L0 + X() + m + ' = ' + v), h: 'LCM lo, phir har prime power even karo.' },
      { s: ST('hi', 'सभी से विभाज्य (ल.स.) और पूर्ण वर्ग (हर अभाज्य घात सम) होना चाहिए।', b, '' + v), c: K(L0 + X() + m + ' = ' + v), h: 'ल.स. लो, फिर हर अभाज्य घात सम करो।' }
    );
  }

  function solLeastCb(nums) {
    var L0 = lcmArr(nums), m = cubeMissing(L0), v = L0 * m;
    var b = (m === 1)
      ? L(K('LCM(' + nums.join(', ') + ') = ' + L0), K(L0 + ' = ' + pfTex(L0)) + ' (already a perfect cube)')
      : L(K('LCM(' + nums.join(', ') + ') = ' + L0), K(L0 + ' = ' + pfTex(L0)), 'Make every prime power a multiple of 3 -> multiply by ' + m, K(L0 + X() + m + ' = ' + v));
    return MK(
      { s: ST('en', 'Must be divisible by all (LCM) AND a perfect cube (every prime power a multiple of 3).', b, '' + v), c: K(L0 + X() + m + ' = ' + v), h: 'LCM, then make all prime powers multiples of 3.' },
      { s: ST('hg', 'Sab se divisible (LCM) AUR perfect cube (har prime power 3 ka multiple).', b, '' + v), c: K(L0 + X() + m + ' = ' + v), h: 'LCM, phir har power 3 ka multiple.' },
      { s: ST('hi', 'सभी से विभाज्य (ल.स.) और पूर्ण घन (हर अभाज्य घात 3 का गुणज)।', b, '' + v), c: K(L0 + X() + m + ' = ' + v), h: 'ल.स., फिर हर घात 3 का गुणज।' }
    );
  }

  function solMulSqLcm(nums) {
    var L0 = lcmArr(nums), m = sqMul(L0);
    var b = L(K('LCM = ' + L0 + ' = ' + pfTex(L0)), 'Odd-power prime(s): ' + (oddPrimes(L0).join(', ') || 'none'), 'Multiply by their product = ' + m + ' to make all powers even');
    return MK(
      { s: ST('en', 'For a perfect square every prime power must be even. Multiply by the odd-power primes.', b, '' + m), c: 'product of odd-power primes = ' + m, h: 'Multiply the primes that have an odd power.' },
      { s: ST('hg', 'Perfect square ke liye har prime power even ho. Odd-power primes se multiply karo.', b, '' + m), c: 'odd-power primes ka product = ' + m, h: 'Odd power wale primes se guna karo.' },
      { s: ST('hi', 'पूर्ण वर्ग हेतु हर अभाज्य घात सम हो। विषम-घात अभाज्यों से गुणा करो।', b, '' + m), c: 'विषम-घात अभाज्यों का गुणनफल = ' + m, h: 'विषम घात वाले अभाज्यों से गुणा।' }
    );
  }

  function solMulCbLcm(nums) {
    var L0 = lcmArr(nums), m = cubeMissing(L0);
    var b = L(K('LCM = ' + L0 + ' = ' + pfTex(L0)), 'Bring every prime power up to a multiple of 3', 'Multiply by ' + m);
    return MK(
      { s: ST('en', 'For a perfect cube every prime power must be a multiple of 3. Multiply to complete each.', b, '' + m), c: 'least multiplier = ' + m, h: 'Complete each prime power to a multiple of 3.' },
      { s: ST('hg', 'Perfect cube ke liye har prime power 3 ka multiple ho. Complete karne ke liye multiply.', b, '' + m), c: 'sabse chhota multiplier = ' + m, h: 'Har power 3 ka multiple banao.' },
      { s: ST('hi', 'पूर्ण घन हेतु हर अभाज्य घात 3 का गुणज हो। पूरा करने हेतु गुणा करो।', b, '' + m), c: 'न्यूनतम गुणक = ' + m, h: 'हर घात 3 का गुणज बनाओ।' }
    );
  }

  function solDivSq(N) {
    var m = sqMul(N), res = N / m, rt = isqrt(res);
    var b = L(K(N + ' = ' + pfTex(N)), 'Odd-power prime(s): ' + (oddPrimes(N).join(', ') || 'none') + ' -> divide them out', K(FR(N, m) + ' = ' + res + ' = ' + POW(rt, 2)));
    return MK(
      { s: ST('en', 'Remove the primes with odd powers so the rest is a perfect square.', b, '' + m), c: K(FR(N, m) + ' = ' + POW(rt, 2)), h: 'Divide out the odd-power primes.' },
      { s: ST('hg', 'Odd power wale primes hatao taaki bacha hua perfect square ho.', b, '' + m), c: K(FR(N, m) + ' = ' + POW(rt, 2)), h: 'Odd-power primes ko divide kar do.' },
      { s: ST('hi', 'विषम घात वाले अभाज्य हटाओ ताकि शेष पूर्ण वर्ग हो।', b, '' + m), c: K(FR(N, m) + ' = ' + POW(rt, 2)), h: 'विषम-घात अभाज्यों से भाग दो।' }
    );
  }

  function solDivCb(N) {
    var m = cubeRemove(N), res = N / m, rt = icbrt(res);
    var b = L(K(N + ' = ' + pfTex(N)), 'Remove the extra prime powers (not multiples of 3)', K(FR(N, m) + ' = ' + res + ' = ' + POW(rt, 3)));
    return MK(
      { s: ST('en', 'Remove the leftover prime powers so the rest is a perfect cube.', b, '' + m), c: K(FR(N, m) + ' = ' + POW(rt, 3)), h: 'Divide out the extra prime powers.' },
      { s: ST('hg', 'Extra prime powers hatao taaki bacha hua perfect cube ho.', b, '' + m), c: K(FR(N, m) + ' = ' + POW(rt, 3)), h: 'Extra prime powers ko divide karo.' },
      { s: ST('hi', 'अतिरिक्त अभाज्य घात हटाओ ताकि शेष पूर्ण घन हो।', b, '' + m), c: K(FR(N, m) + ' = ' + POW(rt, 3)), h: 'अतिरिक्त अभाज्य घातों से भाग दो।' }
    );
  }

  function solMulCbNum(N) {
    var m = cubeMissing(N), res = N * m, rt = icbrt(res);
    var b = L(K(N + ' = ' + pfTex(N)), 'Complete each prime power to a multiple of 3 -> multiply by ' + m, K(N + X() + m + ' = ' + res + ' = ' + POW(rt, 3)));
    return MK(
      { s: ST('en', 'Multiply to bring every prime power up to a multiple of 3 (perfect cube).', b, '' + m), c: K(N + X() + m + ' = ' + POW(rt, 3)), h: 'Complete each prime power to a multiple of 3.' },
      { s: ST('hg', 'Multiply karke har prime power 3 ka multiple banao (perfect cube).', b, '' + m), c: K(N + X() + m + ' = ' + POW(rt, 3)), h: 'Har power 3 ka multiple banao.' },
      { s: ST('hi', 'गुणा करके हर अभाज्य घात 3 का गुणज बनाओ (पूर्ण घन)।', b, '' + m), c: K(N + X() + m + ' = ' + POW(rt, 3)), h: 'हर घात 3 का गुणज बनाओ।' }
    );
  }

  function solNdig(o, type) {
    var en = o.question.en, d = ints(en)[0], v = ansN(o);
    var mode = /Smallest/i.test(en) ? 'small' : (/root/i.test(en) ? 'root' : 'large');
    var isCb = type === 'cb', lo = Math.pow(10, d - 1), hi = Math.pow(10, d) - 1;
    var rt = isCb ? icbrt : isqrt, R = isCb ? CRT : RT, word = isCb ? 'cube' : 'square', hword = isCb ? 'घन' : 'वर्ग';
    function pw(r) { return isCb ? r * r * r : r * r; }
    function pwTex(r, val) { return isCb ? cubeTex(r, val) : '(' + r + X() + r + ') = ' + val; }
    var b, idEn, idHg, idHi;
    if (mode === 'small') {
      var rLo = rt(lo); if (pw(rLo) < lo) rLo++; v = pw(rLo);
      b = L(K('Smallest ' + d + '-digit number = ' + lo), 'Smallest whole root whose ' + word + GE() + lo + ' is ' + rLo, K(pwTex(rLo, v)));
      idEn = 'Find the smallest ' + d + '-digit perfect ' + word + '.'; idHg = 'Sabse chhota ' + d + '-digit perfect ' + word + '.'; idHi = 'सबसे छोटा ' + d + '-अंकीय पूर्ण ' + hword + '।';
    } else if (mode === 'root') {
      var rH = rt(hi); v = rH;
      b = L(K('Largest ' + d + '-digit perfect ' + word + ' = ' + pw(rH)), K(R(pw(rH)) + ' = ' + rH));
      idEn = 'Take the root of the largest ' + d + '-digit perfect ' + word + '.'; idHg = 'Sabse bade ' + d + '-digit perfect ' + word + ' ka root.'; idHi = 'सबसे बड़े ' + d + '-अंकीय पूर्ण ' + hword + ' का मूल।';
    } else {
      var rHi = rt(hi); v = pw(rHi);
      b = L(K('Largest ' + d + '-digit number = ' + hi), 'Largest whole root whose ' + word + LE() + hi + ' is ' + rHi, K(pwTex(rHi, v)));
      idEn = 'Find the largest ' + d + '-digit perfect ' + word + '.'; idHg = 'Sabse bada ' + d + '-digit perfect ' + word + '.'; idHi = 'सबसे बड़ा ' + d + '-अंकीय पूर्ण ' + hword + '।';
    }
    return MK({ s: ST('en', idEn, b, '' + v), c: idEn, h: idEn }, { s: ST('hg', idHg, b, '' + v), c: idHg, h: idHg }, { s: ST('hi', idHi, b, '' + v), c: idHi, h: idHi });
  }

  function solSixth(v) {
    var sq = isqrt(v), cb = icbrt(v), r6 = Math.round(Math.pow(v, 1 / 6));
    var b = L(K(RT(v) + ' = ' + sq) + ' (perfect square)', K(CRT(v) + ' = ' + cb) + ' (perfect cube)', K(v + ' = ' + POW(r6, 6)));
    return MK(
      { s: ST('en', 'A number that is BOTH a perfect square and a perfect cube is a perfect 6th power.', b, '' + v), c: K(v + ' = ' + POW(r6, 6)), h: 'Look for a perfect 6th power.' },
      { s: ST('hg', 'Jo number perfect square AUR perfect cube dono ho, woh perfect 6th power hota hai.', b, '' + v), c: K(v + ' = ' + POW(r6, 6)), h: 'Perfect 6th power dhoondo.' },
      { s: ST('hi', 'जो संख्या पूर्ण वर्ग और पूर्ण घन दोनों हो, वह पूर्ण छठी घात होती है।', b, '' + v), c: K(v + ' = ' + POW(r6, 6)), h: 'पूर्ण छठी घात खोजो।' }
    );
  }

  // ============ DISPATCH ============
  var SOL = {
    mq_sq_rows: function (o) { var k = ansN(o); return solSqrt(k * k, k); },
    mq_tree_rows: function (o) { var k = ansN(o); return solSqrt(k * k, k); },
    mq_area: function (o) { var k = ansN(o); return solSqrt(k * k, k); },
    mq_paise: function (o) { var k = ansN(o); return solSqrt(k * k, k); },
    mq_sq_left: function (o) { return solLeftSq(ints(o.question.en)[0]); },
    mq_sq_remove: function (o) { return solLeftSq(ints(o.question.en)[0]); },
    mq_sq_more: function (o) { return solMoreSq(ints(o.question.en)[0]); },
    mq_cube_edge: function (o) { var k = ansN(o); return solCbrt(k * k * k, k); },
    mq_cube_collect: function (o) { var n = ansN(o); return solCbrt(n * n * n, n); },
    mq_cube_left: function (o) { return solLeftCb(ints(o.question.en)[0]); },
    mq_cube_more: function (o) { return solMoreCb(ints(o.question.en)[0]); },
    mq_add_cube: function (o) { return solMoreCb(ints(o.question.en)[0]); },
    mq_sub_cube: function (o) { return solLeftCb(ints(o.question.en)[0]); },
    mq_uproot: function (o) { var p = ints(o.question.en); return solUproot(p[0], p[1], ansN(o)); },
    mq_fence: function (o) { var p = ints(o.question.en); return solFence(p[0], p[1]); },
    mq_path_out: function (o) { var p = ints(o.question.en); return solPathOut(p[1], p[0]); },
    mq_path_in: function (o) { var p = ints(o.question.en); return solPathIn(p[1], p[0]); },
    mq_tiles_total: function (o) { var p = ints(o.question.en); return solTilesTotal(p[0], p[1]); },
    mq_tiles_side: function (o) { var p = ints(o.question.en); return solTilesSide(p[0], p[1]); },
    mq_tile_cost: function (o) { var p = ints(o.question.en); return solTileCost(p[0], p[1], ansN(o)); },
    mq_equal: function (o) { return solEqual(ints(o.question.en)[0]); },
    mq_distrib: function (o) { var p = ints(o.question.en); return solDist(p[0], p[1], ansN(o)); },
    mq_sq_check: function (o) { var sq = ansN(o); return solSqChk(sq, isqrt(sq)); },
    mq_least_sq: function (o) { return solLeastSq(numList(o, 'div')); },
    mq_least_cb: function (o) { return solLeastCb(numList(o, 'div')); },
    mq_mul_sq: function (o) { return solMulSqLcm(numList(o, 'lcm')); },
    mq_mul_cb: function (o) { return solMulCbLcm(numList(o, 'lcm')); },
    mq_div_sq: function (o) { return solDivSq(byNum(o)); },
    mq_div_cb: function (o) { return solDivCb(byNum(o)); },
    mq_mulN_cb: function (o) { return solMulCbNum(byNum(o)); },
    mq_ndigit_cube: function (o) { return solNdig(o, 'cb'); },
    mq_ndigit_sq: function (o) { return solNdig(o, 'sq'); },
    mq_sixth: function (o) { return solSixth(ansN(o)); }
  };

  function wrap(gen, solver) {
    if (typeof gen !== 'function') return gen;
    return function () { var out = gen.apply(this, arguments); try { if (out && typeof out === 'object') { var s = solver(out); if (s) out.solution = s; } } catch (e) {} return out; };
  }
  var n = 0;
  for (var i = 0; i < TEMPLATES.length; i++) {
    var t = TEMPLATES[i];
    if (t && SOL[t.id]) {
      t.generate = wrap(t.generate, SOL[t.id]); n++;
      var vs = VARIANTS[t.id];
      if (vs && vs.length) { for (var j = 0; j < vs.length; j++) { vs[j] = wrap(vs[j], SOL[t.id]); } }
    }
  }
  try { console.log('[mq-solutions] Attached to', n, 'templates (base + all variants).'); } catch (e) {}
})();
