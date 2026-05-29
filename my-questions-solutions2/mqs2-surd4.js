/* my-questions-solutions2/mqs2-surd4.js
   Part 2 Surd batch 4: infinite nested radicals.
   Covers: q2_surd_nested_x_plus, q2_surd_nested_golden, q2_surd_nested_range
   NOTE: template ids may also be registered as q2_nested_x_plus etc.; we wrap both spellings.
   NAYA file; existing kuch modify nahi karta.
*/
(function () {
  'use strict';
  var Q = window.MQS2;
  if (!Q) { try { console.warn('[mqs2-surd4] MQS2 missing'); } catch (e) {} return; }
  var K = Q.K, BOX = Q.BOX, RT = Q.RT, TRI = Q.TRI;
  function AC(out) { return Q.ansClean(out); }
  var U = ['Step 1: Understand the question', 'Step 1: Sawaal samjho', 'चरण 1: प्रश्न समझो'];

  function nestedXplus(out) {
    var q = out.question.en, ii = Q.ints(q);
    var a = ii.length ? ii[0] : null;
    return TRI([
      { t: U, b: ['We have an infinite nested radical ' + K('x = ' + RT('a + ' + RT('a + ' + RT('a + \\cdots')))) + ' that repeats forever.', 'Ek infinite nested radical x = √(a+√(a+...)) diya hai jo hamesha repeat hota hai.', 'एक अनंत nested radical x = √(a+√(a+...)) दिया है जो हमेशा दोहराता है।'] },
      { t: ['Step 2: Use self-similarity', 'Step 2: Self-similar property', 'चरण 2: स्व-समानता'], b: ['Because the pattern repeats, the part under the first root equals x again, so ' + K('x = ' + RT('a + x')) + '.', 'Pattern repeat hota hai, isliye andar bhi x hi hai: x = √(a+x).', 'pattern दोहराता है, इसलिए अंदर भी x ही है: x = √(a+x)।'] },
      { t: ['Step 3: Square and solve', 'Step 3: Varg karke hal', 'चरण 3: वर्ग करके हल'], b: K('x^{2} = a + x \\;\\Rightarrow\\; x^{2} - x - a = 0') },
      { t: ['Step 4: Answer', 'Step 4: Uttar', 'चरण 4: उत्तर'], b: ['Taking the positive root gives ' + K(BOX(AC(out))) + '.', 'Positive root lene par ' + K(BOX(AC(out))) + '.', 'धनात्मक root लेने पर ' + K(BOX(AC(out))) + '।'] }
    ],
      ['Set x = √(a+x), square to get x^2 - x - a = 0, take the positive root.', 'x=√(a+x) maano, varg karke x^2-x-a=0, positive root lo.', 'x=√(a+x) मानो, वर्ग करके x²-x-a=0, धनात्मक root लो।'],
      ['The whole infinite tail equals x itself — that is the trick.', 'Poori infinite tail khud x ke barabar hai — yahi trick hai.', 'पूरी अनंत पूंछ खुद x के बराबर है — यही trick है।']);
  }

  function nestedGolden(out) {
    return TRI([
      { t: U, b: ['This is the special nested radical ' + K('x = ' + RT('1 + ' + RT('1 + ' + RT('1 + \\cdots')))) + ' with all 1s.', 'Yeh khaas nested radical hai jisme sab 1 hain: x=√(1+√(1+...)).', 'यह खास nested radical है जिसमें सब 1 हैं: x=√(1+√(1+...))।'] },
      { t: ['Step 2: Form the equation', 'Step 2: Equation banao', 'चरण 2: समीकरण बनाओ'], b: K('x = ' + RT('1 + x') + ' \\;\\Rightarrow\\; x^{2} - x - 1 = 0') },
      { t: ['Step 3: Solve the quadratic', 'Step 3: Quadratic hal', 'चरण 3: वर्ग समीकरण हल'], b: K('x = (1 + ' + RT('5') + ')/2 \\approx 1.618') },
      { t: ['Step 4: Answer', 'Step 4: Uttar', 'चरण 4: उत्तर'], b: ['This famous number is the golden ratio, ' + K(BOX(AC(out))) + '.', 'Yeh prasiddh golden ratio hai, ' + K(BOX(AC(out))) + '.', 'यह प्रसिद्ध golden ratio है, ' + K(BOX(AC(out))) + '।'] }
    ],
      ['All-ones nested radical = golden ratio (1+√5)/2 ≈ 1.618.', 'Sab-1 nested radical = golden ratio (1+√5)/2 ≈ 1.618.', 'सब-1 nested radical = golden ratio (1+√5)/2 ≈ 1.618।'],
      ['Same self-similar trick: replace the inner tail by x.', 'Wahi self-similar trick: andar wali tail ko x se badlo.', 'वही trick: अंदर की tail को x से बदलो।']);
  }

  function nestedRange(out) {
    return TRI([
      { t: U, b: ['We are asked which whole numbers the infinite nested radical lies between (its range), not an exact value.', 'Poochha hai ki yeh nested radical kin do poorn ankon ke beech hai (range), exact maan nahi.', 'पूछा है कि यह nested radical किन दो पूर्ण अंकों के बीच है (range), exact मान नहीं।'] },
      { t: ['Step 2: Solve for the exact value', 'Step 2: Exact maan nikaalo', 'चरण 2: exact मान निकालो'], b: ['Use ' + K('x = ' + RT('a + x')) + ' to get the positive root, just like the standard nested radical.', 'x=√(a+x) se positive root nikaalo, jaise standard nested radical me.', 'x=√(a+x) से धनात्मक root निकालो।'] },
      { t: ['Step 3: Place it between integers', 'Step 3: Ankon ke beech rakho', 'चरण 3: अंकों के बीच रखो'], b: ['Compare the value with nearby whole numbers to see which two it falls between.', 'Maan ko nazdeeki poorn ankon se compare karke range batao.', 'मान को नज़दीकी अंकों से तुलना करके range बताओ।'] },
      { t: ['Step 4: Answer', 'Step 4: Uttar', 'चरण 4: उत्तर'], b: K(BOX(AC(out))) }
    ],
      ['Find the exact value with x=√(a+x), then see which integers bound it.', 'x=√(a+x) se maan nikaalo, phir range batao.', 'x=√(a+x) से मान निकालो, फिर range बताओ।'],
      ['You do not need decimals — just compare with the nearest integers.', 'Decimal ki zarurat nahi — nazdeeki ankon se compare karo.', 'दशमलव की जरूरत नहीं — नज़दीकी अंकों से तुलना करो।']);
  }

  Q.wrap({
    q2_surd_nested_x_plus: nestedXplus, q2_nested_x_plus: nestedXplus,
    q2_surd_nested_golden: nestedGolden, q2_nested_golden: nestedGolden,
    q2_surd_nested_range: nestedRange, q2_nested_range: nestedRange
  });
  try { console.log('[mqs2-surd4] ready'); } catch (e) {}
})();
