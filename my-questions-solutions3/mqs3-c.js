/* my-questions-solutions3/mqs3-c.js
   Part 3 batch C.
   Covers: q3_root_cross_multiply, q3_surd_x_plus_inv, q3_surd_x2_inv2
   NAYA file; existing kuch modify nahi karta.
*/
(function () {
  'use strict';
  var Q = window.MQS3;
  if (!Q) { try { console.warn('[mqs3-c] MQS3 missing'); } catch (e) {} return; }
  var K = Q.K, BOX = Q.BOX, RT = Q.RT, FR = Q.FR, X = Q.X, TRI = Q.TRI;
  function AC(out) { return Q.ansClean(out); }
  var U = ['Step 1: Understand the question', 'Step 1: Sawaal samjho', 'चरण 1: प्रश्न समझो'];

  function crossMultiply(out) {
    return TRI([
      { t: U, b: ['A proportion like ' + K(FR('x', RT('a')) + ' = ' + FR(RT('b'), 'x')) + ' is given; we must find ' + K('x') + '.', 'Ek proportion x/√a = √b/x diya hai; x nikaalna hai.', 'एक अनुपात x/√a = √b/x दिया है; x निकालना है।'] },
      { t: ['Step 2: Cross-multiply', 'Step 2: Cross-multiply', 'चरण 2: तिरछा गुणा'], b: ['Cross-multiplying gives ' + K('x^{2} = ' + RT('a') + ' ' + X() + ' ' + RT('b') + ' = ' + RT('a' + X() + 'b')) + '.', 'Cross-multiply karne par x^2 = √a×√b = √(ab).', 'Cross-multiply से x² = √a×√b = √(ab)।'] },
      { t: ['Step 3: Simplify and take the root', 'Step 3: Simplify karke root', 'चरण 3: सरल करके root'], b: ['Multiply under one root, simplify the perfect square, then take ' + K(RT('') + 'x^{2}') + ', e.g. ' + K('x^{2} = ' + RT('128 ' + X() + ' 162') + ' = ' + RT('20736') + ' = 144') + '.', 'Ek root ke andar guna karo, perfect square simplify, phir root lo, jaise x^2=√20736=144.', 'एक root के अंदर गुणा करो, simplify, फिर root, जैसे x²=√20736=144।'] },
      { t: ['Step 4: Answer', 'Step 4: Uttar', 'चरण 4: उत्तर'], b: K(BOX(AC(out))) }
    ],
      ['Cross-multiply to get x^2 = √(ab), then simplify.', 'Cross-multiply se x^2=√(ab), phir simplify.', 'Cross-multiply से x²=√(ab), फिर simplify।'],
      ['√a × √b = √(ab) — combine first, then look for a perfect square.', '√a×√b=√(ab) — pehle jodo, phir perfect square dhoondo.', '√a×√b=√(ab) — पहले जोड़ो, फिर perfect square देखो।']);
  }

  function xPlusInv(out) {
    return TRI([
      { t: U, b: ['We are given a surd value of ' + K('x') + ' (like ' + K('x = 7 - 4' + RT('3')) + ') and must find ' + K('x + 1/x') + ' (or ' + K('1/x') + ').', 'x ka surd maan diya hai (jaise x=7-4√3), x+1/x ya 1/x nikaalna hai.', 'x का करणी मान दिया है (जैसे x=7-4√3), x+1/x या 1/x निकालना है।'] },
      { t: ['Step 2: Rationalise 1/x', 'Step 2: 1/x rationalise', 'चरण 2: 1/x rationalise'], b: ['Multiply ' + K('1/x') + ' by the conjugate. For ' + K('x = 7 - 4' + RT('3')) + ', the conjugate product is ' + K('(7 - 4' + RT('3') + ')(7 + 4' + RT('3') + ') = 49 - 48 = 1') + ', so ' + K('1/x = 7 + 4' + RT('3')) + '.', '1/x ko conjugate se guna karo. (7-4√3)(7+4√3)=1, to 1/x=7+4√3.', '1/x को conjugate से गुणा। (7-4√3)(7+4√3)=1, तो 1/x=7+4√3।'] },
      { t: ['Step 3: Add (the surds cancel)', 'Step 3: Jodo (surd cancel)', 'चरण 3: जोड़ो (करणी cancel)'], b: ['Adding ' + K('x + 1/x') + ' cancels the irrational parts and leaves a clean integer, e.g. ' + K('(7 - 4' + RT('3') + ') + (7 + 4' + RT('3') + ') = 14') + '.', 'x+1/x jodne par irrational part cancel, integer bachta hai, jaise 14.', 'x+1/x जोड़ने पर irrational भाग cancel, integer बचता है, जैसे 14।'] },
      { t: ['Step 4: Answer', 'Step 4: Uttar', 'चरण 4: उत्तर'], b: K(BOX(AC(out))) }
    ],
      ['Rationalise 1/x; when the product of conjugates is 1, x and 1/x are conjugates.', 'Conjugates ka product 1 ho to x aur 1/x conjugate hote hain.', 'conjugate का product 1 हो तो x और 1/x conjugate होते हैं।'],
      ['x + 1/x keeps only the rational part; x - 1/x keeps only the surd part.', 'x+1/x me rational, x-1/x me surd part bachta hai.', 'x+1/x में rational, x-1/x में करणी भाग बचता है।']);
  }

  function x2Inv2(out) {
    return TRI([
      { t: U, b: ['We must find ' + K('x^{2} + 1/x^{2}') + ', usually after knowing ' + K('x + 1/x') + ' or a surd value of ' + K('x') + '.', 'x^2+1/x^2 nikaalna hai, aksar x+1/x ya x ka surd maan pata hone par.', 'x²+1/x² निकालना है, अक्सर x+1/x या x का करणी मान पता होने पर।'] },
      { t: ['Step 2: Get x + 1/x first', 'Step 2: Pehle x+1/x', 'चरण 2: पहले x+1/x'], b: ['If ' + K('x') + ' is a surd, rationalise ' + K('1/x') + ' and add to get ' + K('x + 1/x') + ' (a whole number).', 'Agar x surd hai to 1/x rationalise karke x+1/x (poora number) nikaalo.', 'यदि x करणी है तो 1/x rationalise करके x+1/x निकालो।'] },
      { t: ['Step 3: Use the squaring identity', 'Step 3: Squaring identity', 'चरण 3: वर्ग सर्वसमिका'], b: [K('x^{2} + 1/x^{2} = (x + 1/x)^{2} - 2') + '. For example, ' + K('6^{2} - 2 = 34') + '.', 'x^2+1/x^2 = (x+1/x)^2 - 2. Jaise 6^2-2=34.', 'x²+1/x² = (x+1/x)² - 2। जैसे 6²-2=34।'] },
      { t: ['Step 4: Answer', 'Step 4: Uttar', 'चरण 4: उत्तर'], b: K(BOX(AC(out))) }
    ],
      ['x^2 + 1/x^2 = (x + 1/x)^2 - 2 — find x+1/x first.', 'x^2+1/x^2 = (x+1/x)^2 - 2.', 'x²+1/x² = (x+1/x)² - 2।'],
      ['Squaring x+1/x gives x^2 + 1/x^2 + 2, so subtract 2.', 'x+1/x ka varg = x^2+1/x^2+2, to 2 ghatao.', 'x+1/x का वर्ग = x²+1/x²+2, तो 2 घटाओ।']);
  }

  Q.wrap({ q3_root_cross_multiply: crossMultiply, q3_surd_x_plus_inv: xPlusInv, q3_surd_x2_inv2: x2Inv2 });
  try { console.log('[mqs3-c] ready'); } catch (e) {}
})();
