/* my-questions-solutions3/mqs3-d.js
   Part 3 batch D.
   Covers: q3_conj_pair_sq_sum, q3_surd_ab_identity, q3_surd_pair_xy
   NAYA file; existing kuch modify nahi karta.
*/
(function () {
  'use strict';
  var Q = window.MQS3;
  if (!Q) { try { console.warn('[mqs3-d] MQS3 missing'); } catch (e) {} return; }
  var K = Q.K, BOX = Q.BOX, RT = Q.RT, TRI = Q.TRI;
  function AC(out) { return Q.ansClean(out); }
  var U = ['Step 1: Understand the question', 'Step 1: Sawaal samjho', 'चरण 1: प्रश्न समझो'];

  function conjPairSqSum(out) {
    return TRI([
      { t: U, b: ['Two numbers ' + K('a') + ' and ' + K('b') + ' are reciprocal conjugate surds (like ' + K('a = (' + RT('3') + '+' + RT('2') + ')/(' + RT('3') + '-' + RT('2') + ')') + ' and ' + K('b') + ' its reciprocal); find ' + K('a^{2} + b^{2}') + '.', 'a aur b reciprocal conjugate surd hain; a^2+b^2 nikaalna hai.', 'a और b reciprocal conjugate करणी हैं; a²+b² निकालना है।'] },
      { t: ['Step 2: Rationalise a (and b)', 'Step 2: a (aur b) rationalise', 'चरण 2: a (और b) rationalise'], b: ['Multiply by the conjugate to simplify, e.g. ' + K('a = (' + RT('3') + '+' + RT('2') + ')^{2}/(3-2) = 5 + 2' + RT('6')) + ', and ' + K('b = 5 - 2' + RT('6')) + '.', 'Conjugate se guna: a=5+2√6, b=5-2√6.', 'conjugate से गुणा: a=5+2√6, b=5-2√6।'] },
      { t: ['Step 3: Use a^{2}+b^{2} = (a+b)^{2} - 2ab', 'Step 3: a^2+b^2 = (a+b)^2 - 2ab', 'चरण 3: a²+b² = (a+b)² - 2ab'], b: ['Here ' + K('a + b = 10') + ' and ' + K('ab = 1') + ' (reciprocals), so ' + K('a^{2} + b^{2} = 10^{2} - 2 = 98') + '.', 'a+b=10, ab=1, to a^2+b^2 = 100-2 = 98.', 'a+b=10, ab=1, तो a²+b² = 100-2 = 98।'] },
      { t: ['Step 4: Answer', 'Step 4: Uttar', 'चरण 4: उत्तर'], b: K(BOX(AC(out))) }
    ],
      ['Simplify each surd, then use a^2+b^2 = (a+b)^2 - 2ab with ab = 1.', 'Surd simplify, phir a^2+b^2=(a+b)^2-2ab, ab=1.', 'करणी simplify, फिर a²+b²=(a+b)²-2ab, ab=1।'],
      ['Reciprocal conjugates multiply to 1, so only a+b is needed.', 'Reciprocal conjugate ka product 1 hota hai, sirf a+b chahiye.', 'reciprocal conjugate का product 1, केवल a+b चाहिए।']);
  }

  function abIdentity(out) {
    return TRI([
      { t: U, b: ['Given a reciprocal pair ' + K('a, b') + ' (with ' + K('ab = 1') + '), evaluate a symmetric expression such as ' + K('(a^{2}+ab+b^{2})/(a^{2}-ab+b^{2})') + '.', 'Reciprocal pair a,b (ab=1) ka symmetric expression evaluate karna hai.', 'reciprocal जोड़ी a,b (ab=1) का symmetric व्यंजक निकालना है।'] },
      { t: ['Step 2: Find a+b and use ab=1', 'Step 2: a+b nikaalo, ab=1', 'चरण 2: a+b निकालो, ab=1'], b: ['Rationalise to get ' + K('a + b') + '; since ' + K('ab = 1') + ', write ' + K('a^{2} + b^{2} = (a+b)^{2} - 2') + '.', 'Rationalise se a+b; ab=1 hone se a^2+b^2=(a+b)^2-2.', 'rationalise से a+b; ab=1 से a²+b²=(a+b)²-2।'] },
      { t: ['Step 3: Substitute into the expression', 'Step 3: Expression me daalo', 'चरण 3: व्यंजक में रखो'], b: ['Replace ' + K('a^{2}+b^{2}') + ' and ' + K('ab=1') + ': numerator ' + K('= (a^{2}+b^{2}) + 1') + ', denominator ' + K('= (a^{2}+b^{2}) - 1') + ', then simplify the fraction.', 'a^2+b^2 aur ab=1 rakho: numerator=(a^2+b^2)+1, denominator=(a^2+b^2)-1.', 'a²+b² और ab=1 रखो: अंश=(a²+b²)+1, हर=(a²+b²)-1।'] },
      { t: ['Step 4: Answer', 'Step 4: Uttar', 'चरण 4: उत्तर'], b: K(BOX(AC(out))) }
    ],
      ['Use ab = 1 and a^2+b^2 = (a+b)^2 - 2 to collapse the expression.', 'ab=1 aur a^2+b^2=(a+b)^2-2 se expression simplify karo.', 'ab=1 और a²+b²=(a+b)²-2 से व्यंजक सरल करो।'],
      ['When ab=1, the ab terms become 1 — the whole thing depends only on a+b.', 'ab=1 hone se ab term 1 ban jaata hai; sab a+b par nirbhar.', 'ab=1 से ab term 1 बनता है; सब a+b पर निर्भर।']);
  }

  function pairXY(out) {
    return TRI([
      { t: U, b: ['Two conjugate surds are given, e.g. ' + K('x = 2 + ' + RT('3')) + ' and ' + K('y = 2 - ' + RT('3')) + '; find a symmetric value like ' + K('x^{2}+y^{2}') + ', ' + K('xy') + ', or ' + K('x^{3}+y^{3}') + '.', 'Do conjugate surd x=2+√3, y=2-√3; x^2+y^2, xy ya x^3+y^3 nikaalna hai.', 'दो conjugate करणी x=2+√3, y=2-√3; x²+y², xy या x³+y³ निकालना है।'] },
      { t: ['Step 2: Find x+y and xy', 'Step 2: x+y aur xy', 'चरण 2: x+y और xy'], b: ['The surds cancel in the sum: ' + K('x + y = 4') + '; the product is a difference of squares: ' + K('xy = (2)^{2} - (' + RT('3') + ')^{2} = 1') + '.', 'Sum me surd cancel: x+y=4; product: xy=4-3=1.', 'योग में करणी cancel: x+y=4; गुणनफल: xy=4-3=1।'] },
      { t: ['Step 3: Use the symmetric identity', 'Step 3: Symmetric identity', 'चरण 3: symmetric सर्वसमिका'], b: [K('x^{2}+y^{2} = (x+y)^{2} - 2xy') + ' and ' + K('x^{3}+y^{3} = (x+y)^{3} - 3xy(x+y)') + '. E.g. ' + K('4^{2} - 2 = 14') + ', ' + K('4^{3} - 3(1)(4) = 52') + '.', 'x^2+y^2=(x+y)^2-2xy; x^3+y^3=(x+y)^3-3xy(x+y). Jaise 14, 52.', 'x²+y²=(x+y)²-2xy; x³+y³=(x+y)³-3xy(x+y)।'] },
      { t: ['Step 4: Answer', 'Step 4: Uttar', 'चरण 4: उत्तर'], b: K(BOX(AC(out))) }
    ],
      ['Find x+y and xy first, then plug into the symmetric identity asked.', 'Pehle x+y aur xy, phir symmetric identity me daalo.', 'पहले x+y और xy, फिर symmetric सर्वसमिका में रखो।'],
      ['Conjugate surds: sum is rational, product is a^2 - b^2 (difference of squares).', 'Conjugate surd: sum rational, product a^2-b^2.', 'conjugate करणी: योग rational, गुणनफल a²-b²।']);
  }

  Q.wrap({ q3_conj_pair_sq_sum: conjPairSqSum, q3_surd_ab_identity: abIdentity, q3_surd_pair_xy: pairXY });
  try { console.log('[mqs3-d] ready'); } catch (e) {}
})();
