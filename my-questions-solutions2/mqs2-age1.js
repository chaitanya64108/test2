/* my-questions-solutions2/mqs2-age1.js
   Part 2 Age batch 1: present square/cube root, 'after N years' square.
   Dynamic per-sample full worked solutions. NAYA file; existing kuch modify nahi karta.
   Covers: q2_age_sqrt, q2_age_cbrt, q2_age_after_sq
*/
(function () {
  'use strict';
  var Q = window.MQS2;
  if (!Q) { try { console.warn('[mqs2-age1] MQS2 missing'); } catch (e) {} return; }
  var K = Q.K, RT = Q.RT, CRT = Q.CRT, BOX = Q.BOX, X = Q.X, TRI = Q.TRI, isqrt = Q.isqrt;
  function AC(out) { return Q.ansClean(out); }
  var U = ['Step 1: Understand the question', 'Step 1: Sawaal samjho', 'चरण 1: प्रश्न समझो'];

  function solAgeSqrt(out) {
    var q = out.question.en, rad = Q.radicands(q);
    if (/difference/i.test(q) && rad.length >= 2) {
      var s1 = Q.evalSum(rad[0].inner), s2 = Q.evalSum(rad[1].inner), r1 = isqrt(s1), r2 = isqrt(s2);
      var hi = Math.max(r1, r2), lo = Math.min(r1, r2);
      return TRI([
        { t: U, b: ['Two ages are given as square roots; find the difference between them.', 'Do umar square root me di hain; unka difference nikalna hai.', 'दो उम्र वर्गमूल रूप में दी हैं; अंतर ज्ञात करो।'] },
        { t: ['Step 2: First age', 'Step 2: Pehli umar', 'चरण 2: पहली उम्र'], b: K(RT(s1) + ' = ' + r1) + ' years' },
        { t: ['Step 3: Second age', 'Step 3: Doosri umar', 'चरण 3: दूसरी उम्र'], b: K(RT(s2) + ' = ' + r2) + ' years' },
        { t: ['Step 4: Subtract', 'Step 4: Ghatao', 'चरण 4: घटाओ'], b: K('(' + hi + ' - ' + lo + ') = ' + BOX(AC(out))) + ' years' }
      ],
        ['Take both roots, then subtract: ' + K(hi + ' - ' + lo) + '.', 'Dono root nikaalo, phir ghatao.', 'दोनों मूल निकालो, फिर घटाओ।'],
        ['Difference of two square roots.', 'Do square roots ka antar.', 'दो वर्गमूलों का अंतर।']);
    }
    var inner = rad[0].inner, s = Q.evalSum(inner), r = isqrt(s), hasSum = inner.indexOf('+') >= 0;
    var st = [{ t: U, b: ['The age equals ' + K(RT(inner)) + ' years, so evaluate this square root.', 'Umar ' + K(RT(inner)) + ' years hai, is square root ko nikaalo.', 'उम्र ' + K(RT(inner)) + ' वर्ष है, यह वर्गमूल निकालो।'] }];
    if (hasSum) st.push({ t: ['Step 2: Add inside the root', 'Step 2: Root ke andar jodo', 'चरण 2: मूल के अंदर जोड़ो'], b: K(inner + ' = ' + s) });
    var n = hasSum ? 3 : 2;
    st.push({ t: ['Step ' + n + ': Perfect square', 'Step ' + n + ': Perfect square', 'चरण ' + n + ': पूर्ण वर्ग'], b: K(r + X() + r + ' = ' + s) + ', so ' + K(RT(s) + ' = ' + r) });
    st.push({ t: ['Step ' + (n + 1) + ': Final answer', 'Step ' + (n + 1) + ': Final answer', 'चरण ' + (n + 1) + ': अंतिम उत्तर'], b: K(RT(s) + ' = ' + BOX(AC(out))) + ' years' });
    return TRI(st,
      [K(RT(s)) + ' = ' + r + ' because ' + K(r + '^2 = ' + s) + '.', K(RT(s)) + ' = ' + r + ' kyunki ' + K(r + '^2 = ' + s) + '.', K(RT(s)) + ' = ' + r + ' क्योंकि ' + K(r + '^2 = ' + s) + '।'],
      ['Which number squared gives ' + s + '?', 'Kaunsa number square karke ' + s + ' deta hai?', 'किस संख्या का वर्ग ' + s + ' देता है?']);
  }

  function solAgeCbrt(out) {
    var q = out.question.en, rad = Q.radicands(q), inner = rad[0].inner;
    if (/after/i.test(q) && q.indexOf('?') >= 0) {
      var km = q.match(/after[^0-9]*([0-9]+)/i); var k = km ? parseInt(km[1], 10) : 0;
      var pres = Math.round(Math.cbrt(parseFloat(inner)));
      return TRI([
        { t: U, b: ['Present age is ' + K(CRT(inner)) + ' years; then add the extra years.', 'Present umar ' + K(CRT(inner)) + ' years hai; phir extra saal jodo.', 'वर्तमान उम्र ' + K(CRT(inner)) + ' वर्ष है; फिर अतिरिक्त वर्ष जोड़ो।'] },
        { t: ['Step 2: Cube root', 'Step 2: Cube root', 'चरण 2: घनमूल'], b: K(pres + '^3 = ' + inner) + ', so ' + K(CRT(inner) + ' = ' + pres) },
        { t: ['Step 3: Add the years', 'Step 3: Saal jodo', 'चरण 3: वर्ष जोड़ो'], b: K('(' + pres + ' + ' + k + ') = ' + BOX(AC(out))) + ' years' }
      ],
        ['Cube root, then add ' + k + ': ' + K(pres + ' + ' + k) + '.', 'Cube root nikaalo phir ' + k + ' jodo.', 'घनमूल निकालो फिर ' + k + ' जोड़ो।'],
        ['First find ' + K(CRT(inner)) + ', then add the years.', 'Pehle ' + K(CRT(inner)) + ', phir saal jodo.', 'पहले ' + K(CRT(inner)) + ', फिर वर्ष जोड़ो।']);
    }
    if (q.indexOf('times') >= 0) {
      var mm = q.match(/([0-9]+)[^0-9{}]*?times/); var mult = mm ? parseInt(mm[1], 10) : 1;
      var cr = Q.cbrtR(parseFloat(inner));
      return TRI([
        { t: U, b: ['The age is ' + K(mult + X() + CRT(inner)) + ' years.', 'Umar ' + K(mult + X() + CRT(inner)) + ' years hai.', 'उम्र ' + K(mult + X() + CRT(inner)) + ' वर्ष है।'] },
        { t: ['Step 2: Cube root of the decimal', 'Step 2: Decimal ka cube root', 'चरण 2: दशमलव का घनमूल'], b: K(CRT(inner) + ' = ' + cr) },
        { t: ['Step 3: Multiply', 'Step 3: Multiply karo', 'चरण 3: गुणा करो'], b: K('(' + mult + X() + cr + ') = ' + BOX(AC(out))) + ' years' }
      ],
        ['Cube root the decimal, then multiply by ' + mult + '.', 'Decimal ka cube root, phir ' + mult + ' se multiply.', 'दशमलव का घनमूल, फिर ' + mult + ' से गुणा।'],
        [K(CRT(inner) + ' = ' + cr) + '.', K(CRT(inner) + ' = ' + cr) + '.', K(CRT(inner) + ' = ' + cr) + '।']);
    }
    var rr = Math.round(Math.cbrt(parseFloat(inner)));
    return TRI([
      { t: U, b: ['The age is ' + K(CRT(inner)) + ' years, so evaluate this cube root.', 'Umar ' + K(CRT(inner)) + ' years hai, cube root nikaalo.', 'उम्र ' + K(CRT(inner)) + ' वर्ष है, घनमूल निकालो।'] },
      { t: ['Step 2: Perfect cube', 'Step 2: Perfect cube', 'चरण 2: पूर्ण घन'], b: K(rr + X() + rr + X() + rr + ' = ' + inner) },
      { t: ['Step 3: Final answer', 'Step 3: Final answer', 'चरण 3: अंतिम उत्तर'], b: K(CRT(inner) + ' = ' + BOX(AC(out))) + ' years' }
    ],
      [K(CRT(inner)) + ' = ' + rr + ' because ' + K(rr + '^3 = ' + inner) + '.', K(CRT(inner)) + ' = ' + rr + ' kyunki ' + K(rr + '^3 = ' + inner) + '.', K(CRT(inner)) + ' = ' + rr + ' क्योंकि ' + K(rr + '^3 = ' + inner) + '।'],
      ['Which number cubed gives ' + inner + '?', 'Kaunsa number cube karke ' + inner + ' deta hai?', 'किस संख्या का घन ' + inner + ' देता है?']);
  }

  function solAfterSq(out) {
    var q = out.question.en;
    if (/how many years/i.test(q)) {
      var ii = Q.ints(q); var P = ii[0], V = ii[ii.length - 1]; var root = isqrt(V);
      return TRI([
        { t: U, b: ['Present age is ' + P + '; find when the age becomes ' + V + ', the perfect square ' + K(root + '^2') + '.', 'Present umar ' + P + '; kab umar ' + V + ' (perfect square ' + K(root + '^2') + ') hogi.', 'वर्तमान उम्र ' + P + '; कब उम्र ' + V + ' (पूर्ण वर्ग ' + K(root + '^2') + ') होगी।'] },
        { t: ['Step 2: Subtract', 'Step 2: Ghatao', 'चरण 2: घटाओ'], b: K('(' + V + ' - ' + P + ') = ' + BOX(AC(out))) + ' years' }
      ],
        ['Years = future age - present age = ' + K(V + ' - ' + P) + '.', 'Saal = future - present.', 'वर्ष = भविष्य - वर्तमान।'],
        ['Subtract present age from the target square.', 'Target square me se present age ghatao.', 'लक्ष्य वर्ग में से वर्तमान उम्र घटाओ।']);
    }
    var km = q.match(/after[^0-9]*([0-9]+)/i); var k = km ? parseInt(km[1], 10) : 0;
    var present = Q.ansNum(out); var future = present + k; var root2 = isqrt(future);
    return TRI([
      { t: U, b: ['After ' + k + ' years the age becomes ' + future + ', the perfect square ' + K(root2 + '^2') + '.', 'After ' + k + ' years umar ' + future + ' = perfect square ' + K(root2 + '^2') + '.', 'After ' + k + ' years उम्र ' + future + ' = पूर्ण वर्ग ' + K(root2 + '^2') + '।'] },
      { t: ['Step 2: Work backwards', 'Step 2: Ulta chalo', 'चरण 2: उल्टा चलो'], b: ['Present age = future age - ' + k + ' years.', 'Present = future - ' + k + '.', 'वर्तमान = भविष्य - ' + k + '।'] },
      { t: ['Step 3: Final answer', 'Step 3: Final answer', 'चरण 3: अंतिम उत्तर'], b: K('(' + future + ' - ' + k + ') = ' + BOX(AC(out))) + ' years' }
    ],
      ['Subtract the added years: ' + K(future + ' - ' + k) + '.', 'Jode hue saal ghatao.', 'जोड़े गए वर्ष घटाओ।'],
      ['Present age = (perfect square) - ' + k + '.', 'Present = (perfect square) - ' + k + '.', 'वर्तमान = (पूर्ण वर्ग) - ' + k + '।']);
  }

  Q.wrap({ q2_age_sqrt: solAgeSqrt, q2_age_cbrt: solAgeCbrt, q2_age_after_sq: solAfterSq });
  try { console.log('[mqs2-age1] ready'); } catch (e) {}
})();
