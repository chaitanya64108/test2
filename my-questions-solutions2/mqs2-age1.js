/* my-questions-solutions2/mqs2-age1.js
   Part 2 Age templates (batch 1): present root, after-years, years-ago.
   Dynamic per-sample full worked solutions. NAYA file; existing kuch modify nahi karta.
   Covers: q2_age_sqrt, q2_age_cbrt, q2_age_after_sq, q2_age_after_cube, q2_age_ago_sq, q2_age_ago_cube
*/
(function () {
  'use strict';
  var Q = window.MQS2;
  if (!Q) { try { console.warn('[mqs2-age1] MQS2 missing'); } catch (e) {} return; }
  var K = Q.K, RT = Q.RT, CRT = Q.CRT, BOX = Q.BOX, X = Q.X, TRI = Q.TRI, isqrt = Q.isqrt, icbrt = Q.icbrt;
  function AC(out) { return Q.ansClean(out); }

  var U = ['Step 1: Understand the question', 'Step 1: Sawaal samjho', 'चरण 1: प्रश्न समझो'];
  var SANS = ['Step 3: Final answer', 'Step 3: Final answer', 'चरण 3: अंतिम उत्तर'];

  function solAgeSqrt(out) {
    var q = out.question.en, rad = Q.radicands(q);
    if (/difference/i.test(q) && rad.length >= 2) {
      var s1 = Q.evalSum(rad[0].inner), s2 = Q.evalSum(rad[1].inner), r1 = isqrt(s1), r2 = isqrt(s2);
      var hi = Math.max(r1, r2), lo = Math.min(r1, r2);
      return TRI([
        { t: U, b: ['Two ages are given as square roots; we need the difference between them.', 'Do umar square root me di hain; unka difference nikalna hai.', 'दो उम्र वर्गमूल रूप में दी हैं; उनका अंतर ज्ञात करना है।'] },
        { t: ['Step 2: First age', 'Step 2: Pehli umar', 'चरण 2: पहली उम्र'], b: K(RT(s1) + ' = ' + r1) + ' years' },
        { t: ['Step 3: Second age', 'Step 3: Doosri umar', 'चरण 3: दूसरी उम्र'], b: K(RT(s2) + ' = ' + r2) + ' years' },
        { t: ['Step 4: Subtract', 'Step 4: Ghatao', 'चरण 4: घटाओ'], b: K(hi + ' - ' + lo + ' = ' + BOX(AC(out))) + ' years' }
      ],
        ['Take both roots, then subtract: ' + K(hi + ' - ' + lo) + '.', 'Dono root nikaalo, phir ghatao: ' + K(hi + ' - ' + lo) + '.', 'दोनों मूल निकालो, फिर घटाओ: ' + K(hi + ' - ' + lo) + '।'],
        ['Difference of two square roots.', 'Do square roots ka antar.', 'दो वर्गमूलों का अंतर।']);
    }
    var inner = rad[0].inner, s = Q.evalSum(inner), r = isqrt(s), hasSum = inner.indexOf('+') >= 0;
    var steps = [{ t: U, b: ['The age equals ' + K(RT(inner)) + ' years, so we evaluate this square root.', 'Umar ' + K(RT(inner)) + ' years ke barabar hai, is square root ko nikaalo.', 'उम्र ' + K(RT(inner)) + ' वर्ष के बराबर है, यह वर्गमूल निकालो।'] }];
    if (hasSum) steps.push({ t: ['Step 2: Add inside the root', 'Step 2: Root ke andar jodo', 'चरण 2: मूल के अंदर जोड़ो'], b: K(inner + ' = ' + s) });
    steps.push({ t: ['Step ' + (hasSum ? 3 : 2) + ': Recognise the perfect square', 'Step ' + (hasSum ? 3 : 2) + ': Perfect square pehchaano', 'चरण ' + (hasSum ? 3 : 2) + ': पूर्ण वर्ग पहचानो'], b: K(r + X() + r + ' = ' + s) + ', so ' + K(RT(s) + ' = ' + r) });
    steps.push({ t: ['Step ' + (hasSum ? 4 : 3) + ': Final answer', 'Step ' + (hasSum ? 4 : 3) + ': Final answer', 'चरण ' + (hasSum ? 4 : 3) + ': अंतिम उत्तर'], b: K(RT(s) + ' = ' + BOX(AC(out))) + ' years' });
    return TRI(steps,
      [K(RT(s)) + ' = ' + r + ' because ' + K(r + '^2 = ' + s) + '.', K(RT(s)) + ' = ' + r + ' kyunki ' + K(r + '^