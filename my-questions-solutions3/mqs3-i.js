/* my-questions-solutions3/mqs3-i.js
   Part 3 batch I.
   Covers: q3_diff_sq_consecutive, q3_sum_product_diff, q3_sqrt_eq_n_cuberoot
   NAYA file; existing kuch modify nahi karta.
*/
(function () {
  'use strict';
  var Q = window.MQS3;
  if (!Q) { try { console.warn('[mqs3-i] MQS3 missing'); } catch (e) {} return; }
  var K = Q.K, BOX = Q.BOX, RT = Q.RT, CRT = Q.CRT, TRI = Q.TRI;
  function AC(out) { return Q.ansClean(out); }
  var U = ['Step 1: Understand the question', 'Step 1: Sawaal samjho', 'चरण 1: प्रश्न समझो'];

  function diffSqConsecutive(out) {
    return TRI([
      { t: U, b: ['The difference of squares of two consecutive numbers is given, e.g. ' + K('41') + '; find the numbers.', 'Do consecutive numbers ke vargon ka antar diya, jaise 41; numbers nikaalo.', 'दो क्रमिक संख्याओं के वर्गों का अंतर दिया।'] },
      { t: ['Step 2: Use the consecutive-square identity', 'Step 2: Identity lagao', 'चरण 2: सर्वसमिका'], b: ['For consecutive ' + K('n') + ' and ' + K('n+1') + ': ' + K('(n+1)^{2} - n^{2} = 2n + 1') + ' (the sum of the two numbers).', 'Consecutive n, n+1: (n+1)^2-n^2=2n+1 (dono ka yog).', 'क्रमिक n, n+1: (n+1)²-n²=2n+1।'] },
      { t: ['Step 3: Solve for the numbers', 'Step 3: Numbers nikaalo', 'चरण 3: संख्याएँ'], b: ['Set ' + K('2n + 1 = 41 \u2192 n = 20') + ', so the numbers are ' + K('20 and 21') + ' (larger = 21).', '2n+1=41 → n=20, numbers 20 aur 21.', '2n+1=41 → n=20, संख्याएँ 20 और 21।'] },
      { t: ['Step 4: Answer', 'Step 4: Uttar', 'चरण 4: उत्तर'], b: K(BOX(AC(out))) }
    ],
      ['Difference of consecutive squares = 2n+1 = sum of the two numbers.', 'Consecutive squares ka antar = 2n+1 = dono ka yog.', 'क्रमिक वर्गों का अंतर = 2n+1।'],
      ['The difference equals the sum of the two numbers — just split it.', 'Antar dono numbers ka yog hota hai.', 'अंतर दोनों का योग होता है।']);
  }

  function sumProductDiff(out) {
    return TRI([
      { t: U, b: ['The sum and product of two numbers are given; find their difference (or ' + K('a^{2}+b^{2}') + ').', 'Do numbers ka sum aur product diya; antar (ya a^2+b^2) nikaalo.', 'दो संख्याओं का योग और गुणनफल दिया; अंतर निकालो।'] },
      { t: ['Step 2: Use the squared-difference identity', 'Step 2: (a-b)^2 identity', 'चरण 2: (a-b)² सर्वसमिका'], b: [K('(a - b)^{2} = (a + b)^{2} - 4ab') + '. Substitute the given sum and product.', '(a-b)^2=(a+b)^2-4ab; sum aur product daalo.', '(a-b)²=(a+b)²-4ab; मान रखो।'] },
      { t: ['Step 3: Take the square root', 'Step 3: Root lo', 'चरण 3: root लो'], b: ['Compute the right side, then ' + K('a - b = ' + RT('(a+b)^{2} - 4ab')) + ' gives the difference.', 'Right side compute karo, phir a-b=√(...).', 'right side निकालो, फिर a-b=√(...)।'] },
      { t: ['Step 4: Answer', 'Step 4: Uttar', 'चरण 4: उत्तर'], b: K(BOX(AC(out))) }
    ],
      ['(a-b)^2 = (a+b)^2 - 4ab — then square-root for the difference.', '(a-b)^2=(a+b)^2-4ab, phir root.', '(a-b)²=(a+b)²-4ab, फिर root।'],
      ['Sum and product unlock every symmetric quantity (difference, a^2+b^2, etc.).', 'Sum aur product se har symmetric value milti hai.', 'योग और गुणनफल से हर symmetric मान मिलता है।']);
  }

  function sqrtEqNCuberoot(out) {
    return TRI([
      { t: U, b: ['A number satisfies ' + K(RT('N') + ' = 3 ' + CRT('N')) + ' (a square root equals a multiple of its cube root); find ' + K('N') + '.', 'Ek number √N = 3∛N ko satisfy karta hai; N nikaalo.', 'एक संख्या √N = 3∛N को संतुष्ट करती है; N निकालो।'] },
      { t: ['Step 2: Write roots as powers', 'Step 2: Roots ko power me likho', 'चरण 2: roots को power में'], b: [K(RT('N') + ' = N^{1/2}') + ' and ' + K(CRT('N') + ' = N^{1/3}') + ', so ' + K('N^{1/2} = 3 N^{1/3}') + '.', '√N=N^(1/2), ∛N=N^(1/3), to N^(1/2)=3N^(1/3).', '√N=N^(1/2), ∛N=N^(1/3)।'] },
      { t: ['Step 3: Combine the powers and solve', 'Step 3: Power milao aur hal', 'चरण 3: power मिलाओ'], b: ['Divide: ' + K('N^{1/2 - 1/3} = N^{1/6} = 3') + ', so ' + K('N = 3^{6} = 729') + '.', 'Bhag: N^(1/6)=3, to N=3^6=729.', 'भाग: N^(1/6)=3, तो N=3⁶=729।'] },
      { t: ['Step 4: Answer', 'Step 4: Uttar', 'चरण 4: उत्तर'], b: K(BOX(AC(out))) }
    ],
      ['Turn roots into fractional powers, subtract exponents, then solve N^(1/6)=k.', 'Roots ko fractional power banao, exponent ghatao, N^(1/6)=k hal karo.', 'roots को fractional power, घात घटाओ, N^(1/6)=k।'],
      ['√N ÷ ∛N = N^(1/6) — the leftover power is one-sixth.', '√N ÷ ∛N = N^(1/6).', '√N ÷ ∛N = N^(1/6)।']);
  }

  Q.wrap({ q3_diff_sq_consecutive: diffSqConsecutive, q3_sum_product_diff: sumProductDiff, q3_sqrt_eq_n_cuberoot: sqrtEqNCuberoot });
  try { console.log('[mqs3-i] ready'); } catch (e) {}
})();
