/* my-questions-solutions2/mqs2-age2.js
   Part 2 Age batch 2: 'after N years' cube, 'N years ago' square & cube.
   Dynamic per-sample full worked solutions. NAYA file; existing kuch modify nahi karta.
   Covers: q2_age_after_cube, q2_age_ago_sq, q2_age_ago_cube
*/
(function () {
  'use strict';
  var Q = window.MQS2;
  if (!Q) { try { console.warn('[mqs2-age2] MQS2 missing'); } catch (e) {} return; }
  var K = Q.K, RT = Q.RT, CRT = Q.CRT, BOX = Q.BOX, X = Q.X, TRI = Q.TRI, isqrt = Q.isqrt, icbrt = Q.icbrt;
  function AC(out) { return Q.ansClean(out); }
  var U = ['Step 1: Understand the question', 'Step 1: Sawaal samjho', 'चरण 1: प्रश्न समझो'];
  var SANS = ['Step 3: Final answer', 'Step 3: Final answer', 'चरण 3: अंतिम उत्तर'];

  function solAfterCube(out) {
    var q = out.question.en;
    if (/how many years/i.test(q)) {
      var ii = Q.ints(q); var P = ii[0], V = ii[ii.length - 1]; var root = icbrt(V);
      return TRI([
        { t: U, b: ['Present age is ' + P + '; find when it becomes the perfect cube ' + V + ' (' + K(root + '^3') + ').', 'Present umar ' + P + '; kab ' + V + ' (perfect cube ' + K(root + '^3') + ') hogi.', 'वर्तमान उम्र ' + P + '; कब ' + V + ' (पूर्ण घन ' + K(root + '^3') + ') होगी।'] },
        { t: ['Step 2: Subtract', 'Step 2: Ghatao', 'चरण 2: घटाओ'], b: K('(' + V + ' - ' + P + ') = ' + BOX(AC(out))) + ' years' }
      ],
        ['Years = cube age - present age = ' + K(V + ' - ' + P) + '.', 'Saal = cube - present.', 'वर्ष = घन - वर्तमान।'],
        ['Subtract present age from the target cube.', 'Target cube me se present ghatao.', 'लक्ष्य घन में से वर्तमान घटाओ।']);
    }
    var km = q.match(/after[^0-9]*([0-9]+)/i); var k = km ? parseInt(km[1], 10) : 0;
    var present = Q.ansNum(out); var future = present + k; var root2 = icbrt(future);
    return TRI([
      { t: U, b: ['After ' + k + ' years the age becomes ' + future + ', the perfect cube ' + K(root2 + '^3') + '.', 'After ' + k + ' years umar ' + future + ' = perfect cube ' + K(root2 + '^3') + '.', 'After ' + k + ' years उम्र ' + future + ' = पूर्ण घन ' + K(root2 + '^3') + '।'] },
      { t: ['Step 2: Work backwards', 'Step 2: Ulta chalo', 'चरण 2: उल्टा चलो'], b: ['Present age = future age - ' + k + ' years.', 'Present = future - ' + k + '.', 'वर्तमान = भविष्य - ' + k + '।'] },
      { t: SANS, b: K('(' + future + ' - ' + k + ') = ' + BOX(AC(out))) + ' years' }
    ],
      ['Subtract the added years: ' + K(future + ' - ' + k) + '.', 'Jode hue saal ghatao.', 'जोड़े गए वर्ष घटाओ।'],
      ['Present age = (perfect cube) - ' + k + '.', 'Present = (perfect cube) - ' + k + '.', 'वर्तमान = (पूर्ण घन) - ' + k + '।']);
  }

  function agoYears(q) { var m = q.match(/([0-9]+)[^A-Za-z0-9]*years ago/i); return m ? parseInt(m[1], 10) : 0; }

  function solAgoSq(out) {
    var q = out.question.en, rad = Q.radicands(q);
    if (/how many years ago/i.test(q)) {
      var ii = Q.ints(q); var P = ii[0], V = ii[ii.length - 1]; var root = isqrt(V);
      return TRI([
        { t: U, b: ['Present age is ' + P + '; find how long ago the age was the perfect square ' + V + ' (' + K(root + '^2') + ').', 'Present ' + P + '; kitne saal pehle umar ' + V + ' (square ' + K(root + '^2') + ') thi.', 'वर्तमान ' + P + '; कितने वर्ष पहले उम्र ' + V + ' (वर्ग ' + K(root + '^2') + ') थी।'] },
        { t: ['Step 2: Subtract', 'Step 2: Ghatao', 'चरण 2: घटाओ'], b: K('(' + P + ' - ' + V + ') = ' + BOX(AC(out))) + ' years ago' }
      ],
        ['Years ago = present - past age = ' + K(P + ' - ' + V) + '.', 'Saal pehle = present - past.', 'वर्ष पहले = वर्तमान - भूत।'],
        ['Subtract the past square from present age.', 'Present me se past square ghatao.', 'वर्तमान में से भूत वर्ग घटाओ।']);
    }
    if (/after/i.test(q) && q.indexOf('?') >= 0) {
      var k1 = agoYears(q);
      var pastV = rad.length ? isqrt(Q.evalSum(rad[0].inner)) : Q.ints(q)[1];
      var afm = q.match(/after[^0-9]*([0-9]+)/i); var k2 = afm ? parseInt(afm[1], 10) : 0;
      var present = pastV + k1;
      return TRI([
        { t: U, b: ['First find the present age, then the age after ' + k2 + ' more years.', 'Pehle present nikaalo, phir ' + k2 + ' saal baad ki umar.', 'पहले वर्तमान निकालो, फिर ' + k2 + ' वर्ष बाद की उम्र।'] },
        { t: ['Step 2: Present age', 'Step 2: Present umar', 'चरण 2: वर्तमान उम्र'], b: ['Present = past age + years ago = ' + K('(' + pastV + ' + ' + k1 + ') = ' + present) + '.', 'Present = past + saal pehle = ' + K('(' + pastV + ' + ' + k1 + ') = ' + present) + '.', 'वर्तमान = भूत + वर्ष पहले = ' + K('(' + pastV + ' + ' + k1 + ') = ' + present) + '।'] },
        { t: ['Step 3: Add future years', 'Step 3: Future saal jodo', 'चरण 3: भविष्य वर्ष जोड़ो'], b: K('(' + present + ' + ' + k2 + ') = ' + BOX(AC(out))) + ' years' }
      ],
        ['Present = ' + present + ', then + ' + k2 + ' = ' + AC(out) + '.', 'Present ' + present + ', phir + ' + k2 + '.', 'वर्तमान ' + present + ', फिर + ' + k2 + '।'],
        ['Two steps: reach the present, then go forward ' + k2 + ' years.', 'Do step: present pe aao, phir aage.', 'दो चरण: वर्तमान, फिर आगे।']);
    }
    var k = agoYears(q);
    var V = rad.length ? isqrt(Q.evalSum(rad[0].inner)) : Q.ints(q)[Q.ints(q).length - 1];
    return TRI([
      { t: U, b: [k + ' years ago the age was ' + V + (rad.length ? ' (= ' + K(RT(rad[0].inner)) + ')' : '') + '.', k + ' saal pehle umar ' + V + ' thi.', k + ' वर्ष पहले उम्र ' + V + ' थी।'] },
      { t: ['Step 2: Move to the present', 'Step 2: Present pe aao', 'चरण 2: वर्तमान पर आओ'], b: ['Present age = past age + years passed.', 'Present = past + bite saal.', 'वर्तमान = भूत + बीते वर्ष।'] },
      { t: SANS, b: K('(' + V + ' + ' + k + ') = ' + BOX(AC(out))) + ' years' }
    ],
      ['Add the elapsed years: ' + K(V + ' + ' + k) + '.', 'Bite saal jodo.', 'बीते वर्ष जोड़ो।'],
      ['Present age = past age + ' + k + '.', 'Present = past + ' + k + '.', 'वर्तमान = भूत + ' + k + '।']);
  }

  function solAgoCube(out) {
    var q = out.question.en, rad = Q.radicands(q);
    if (/valid/i.test(q)) {
      var inner = rad.length ? rad[0].inner : '';
      var val = inner ? Math.round(Math.cbrt(parseFloat(inner))) : null;
      return TRI([
        { t: U, b: ['We are told the past age equals ' + K(CRT(inner)) + '.', 'Kaha gaya hai past umar ' + K(CRT(inner)) + ' hai.', 'कहा गया है भूत उम्र ' + K(CRT(inner)) + ' है।'] },
        { t: ['Step 2: Evaluate the cube root', 'Step 2: Cube root nikaalo', 'चरण 2: घनमूल निकालो'], b: K(CRT(inner) + ' = ' + val) },
        { t: ['Step 3: Check feasibility', 'Step 3: Sambhav hai?', 'चरण 3: संभव है?'], b: ['A real age can never be negative, so ' + val + ' is impossible as an age.', 'Umar kabhi negative nahi hoti, isliye ' + val + ' age ho hi nahi sakti.', 'उम्र कभी ऋणात्मक नहीं होती, इसलिए ' + val + ' संभव नहीं।'] },
        { t: ['Step 4: Conclusion', 'Step 4: Nishkarsh', 'चरण 4: निष्कर्ष'], b: 'Therefore the answer is ' + K(BOX(AC(out))) + '.' }
      ],
        ['A negative cube root means a negative age — not valid.', 'Negative cube root = negative age — valid nahi.', 'ऋणात्मक घनमूल = ऋणात्मक उम्र — मान्य नहीं।'],
        ['Can an age be negative?', 'Kya umar negative ho sakti hai?', 'क्या उम्र ऋणात्मक हो सकती है?']);
    }
    if (/after/i.test(q) && q.indexOf('?') >= 0) {
      var k1 = agoYears(q);
      var pastV = rad.length ? Math.round(Math.cbrt(parseFloat(rad[0].inner))) : Q.ints(q)[1];
      var afm = q.match(/after[^0-9]*([0-9]+)/i); var k2 = afm ? parseInt(afm[1], 10) : 0;
      var present = pastV + k1;
      return TRI([
        { t: U, b: ['First find the present age, then the age after ' + k2 + ' more years.', 'Pehle present, phir ' + k2 + ' saal baad.', 'पहले वर्तमान, फिर ' + k2 + ' वर्ष बाद।'] },
        { t: ['Step 2: Present age', 'Step 2: Present', 'चरण 2: वर्तमान'], b: K('(' + pastV + ' + ' + k1 + ') = ' + present) },
        { t: ['Step 3: Add future years', 'Step 3: Aage jodo', 'चरण 3: आगे जोड़ो'], b: K('(' + present + ' + ' + k2 + ') = ' + BOX(AC(out))) + ' years' }
      ],
        ['Present ' + present + ', then + ' + k2 + '.', 'Present ' + present + ', phir + ' + k2 + '.', 'वर्तमान ' + present + ', फिर + ' + k2 + '।'],
        ['Two steps: reach present, then move forward.', 'Do step.', 'दो चरण।']);
    }
    var k = agoYears(q);
    var V = rad.length ? Math.round(Math.cbrt(parseFloat(rad[0].inner))) : Q.ints(q)[Q.ints(q).length - 1];
    return TRI([
      { t: U, b: [k + ' years ago the age was ' + V + (rad.length ? ' (= ' + K(CRT(rad[0].inner)) + ')' : '') + '.', k + ' saal pehle umar ' + V + ' thi.', k + ' वर्ष पहले उम्र ' + V + ' थी।'] },
      { t: ['Step 2: Move to the present', 'Step 2: Present pe aao', 'चरण 2: वर्तमान पर आओ'], b: ['Present age = past age + years passed.', 'Present = past + bite saal.', 'वर्तमान = भूत + बीते वर्ष।'] },
      { t: SANS, b: K('(' + V + ' + ' + k + ') = ' + BOX(AC(out))) + ' years' }
    ],
      ['Add elapsed years: ' + K(V + ' + ' + k) + '.', 'Bite saal jodo.', 'बीते वर्ष जोड़ो।'],
      ['Present = past + ' + k + '.', 'Present = past + ' + k + '.', 'वर्तमान = भूत + ' + k + '।']);
  }

  Q.wrap({ q2_age_after_cube: solAfterCube, q2_age_ago_sq: solAgoSq, q2_age_ago_cube: solAgoCube });
  try { console.log('[mqs2-age2] ready'); } catch (e) {}
})();
