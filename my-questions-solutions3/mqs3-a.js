/* my-questions-solutions3/mqs3-a.js
   Part 3 batch A.
   Covers: q3_surd_eq_ratio, q3_missing_under_root, q3_root_diff_missing
   NAYA file; existing kuch modify nahi karta.
*/
(function () {
  'use strict';
  var Q = window.MQS3;
  if (!Q) { try { console.warn('[mqs3-a] MQS3 missing'); } catch (e) {} return; }
  var K = Q.K, BOX = Q.BOX, RT = Q.RT, TRI = Q.TRI;
  function AC(out) { return Q.ansClean(out); }
  var U = ['Step 1: Understand the question', 'Step 1: Sawaal samjho', 'चरण 1: प्रश्न समझो'];

  function eqRatio(out) {
    return TRI([
      { t: U, b: ['A ratio of two surd expressions, like ' + K('(P + Q)/(P - Q)') + ', is given equal to a number, and we must find ' + K('x') + '.', 'Do surd expression ka ratio (P+Q)/(P-Q) ek number ke barabar diya hai, x nikaalna hai.', 'दो करणी व्यंजकों का अनुपात (P+Q)/(P-Q) एक संख्या के बराबर दिया है, x निकालना है।'] },
      { t: ['Step 2: Apply componendo and dividendo', 'Step 2: Componendo-dividendo', 'चरण 2: योगानुपात-अंतरानुपात'], b: ['If ' + K('(P + Q)/(P - Q) = k') + ', then ' + K('P/Q = (k + 1)/(k - 1)') + '. Here ' + K('P = ' + RT('a + x')) + ' and ' + K('Q = ' + RT('a - x')) + '.', 'Agar (P+Q)/(P-Q)=k to P/Q=(k+1)/(k-1). Yaha P=√(a+x), Q=√(a-x).', 'यदि (P+Q)/(P-Q)=k तो P/Q=(k+1)/(k-1)। यहाँ P=√(a+x), Q=√(a-x)।'] },
      { t: ['Step 3: Square and solve', 'Step 3: Varg karke hal', 'चरण 3: वर्ग करके हल'], b: ['Square both sides: ' + K('(a + x)/(a - x) = ((k + 1)/(k - 1))^{2}') + ', then cross-multiply to find ' + K('x') + '.', 'Dono taraf varg karo: (a+x)/(a-x)=((k+1)/(k-1))^2, phir cross-multiply.', 'दोनों ओर वर्ग करो, फिर cross-multiply करके x निकालो।'] },
      { t: ['Step 4: Answer', 'Step 4: Uttar', 'चरण 4: उत्तर'], b: K(BOX(AC(out))) }
    ],
      ['Componendo-dividendo turns the surd ratio into P/Q, then square.', 'Componendo-dividendo se P/Q banao, phir varg karo.', 'Componendo-dividendo से P/Q बनाओ, फिर वर्ग करो।'],
      ['(P+Q)/(P-Q) = k means P/Q = (k+1)/(k-1) — a huge shortcut.', '(P+Q)/(P-Q)=k matlab P/Q=(k+1)/(k-1).', '(P+Q)/(P-Q)=k मतलब P/Q=(k+1)/(k-1)।']);
  }

  function missingUnder(out) {
    return TRI([
      { t: U, b: ['One square (or cube) root in the equation is unknown; we must find the number inside it.', 'Equation me ek root ke andar ka number unknown hai, use nikaalna hai.', 'समीकरण में एक root के अंदर का नंबर अज्ञात है, उसे निकालना है।'] },
      { t: ['Step 2: Simplify the known roots', 'Step 2: Known root nikaalo', 'चरण 2: ज्ञात root निकालो'], b: ['Work out every root you already know, e.g. ' + K(RT('2601') + ' = 51') + '.', 'Jo root pata hain pehle nikaalo, jaise √2601=51.', 'जो root पता हैं पहले निकालो, जैसे √2601=51।'] },
      { t: ['Step 3: Isolate and square', 'Step 3: Alag karke varg', 'चरण 3: अलग करके वर्ग'], b: ['Move the known terms across, leave the unknown root alone, then square (or cube) to remove it.', 'Known term dusri taraf le jao, unknown root akela chhodo, phir varg/ghan karo.', 'ज्ञात पद दूसरी ओर ले जाओ, अज्ञात root अकेला छोड़ो, फिर वर्ग/घन करो।'] },
      { t: ['Step 4: Answer', 'Step 4: Uttar', 'चरण 4: उत्तर'], b: K(BOX(AC(out))) }
    ],
      ['Simplify known roots, isolate the unknown root, then square it.', 'Known root nikaalo, unknown root alag karo, phir varg.', 'ज्ञात root निकालो, अज्ञात root अलग करो, फिर वर्ग।'],
      ['Squaring undoes a square root — do it only after isolating the root.', 'Varg karne se square root hatta hai — pehle root akela karo.', 'वर्ग करने से root हटता है — पहले root अकेला करो।']);
  }

  function rootDiff(out) {
    return TRI([
      { t: U, b: ['The difference of two square roots equals a third root, like ' + K(RT('a') + ' - ' + RT('b') + ' = ' + RT('?')) + '.', 'Do square root ka antar ek teesre root ke barabar hai.', 'दो square root का अंतर एक तीसरे root के बराबर है।'] },
      { t: ['Step 2: Evaluate the two known roots', 'Step 2: Dono known root nikaalo', 'चरण 2: दोनों root निकालो'], b: ['Find each perfect-square root, e.g. ' + K(RT('2116') + ' = 46') + ' and ' + K(RT('1600') + ' = 40') + '.', 'Har perfect-square root nikaalo, jaise √2116=46, √1600=40.', 'हर root निकालो, जैसे √2116=46, √1600=40।'] },
      { t: ['Step 3: Subtract, then square', 'Step 3: Ghatao, phir varg', 'चरण 3: घटाओ, फिर वर्ग'], b: ['Subtract the two values, then square the result to get the number under the last root, e.g. ' + K('(46 - 40)^{2} = 36') + '.', 'Dono ko ghatao, phir result ka varg karo, jaise (46-40)^2=36.', 'दोनों को घटाओ, फिर result का वर्ग, जैसे (46-40)²=36।'] },
      { t: ['Step 4: Answer', 'Step 4: Uttar', 'चरण 4: उत्तर'], b: K(BOX(AC(out))) }
    ],
      ['Compute both roots, subtract, then square the difference.', 'Dono root nikaalo, ghatao, phir antar ka varg.', 'दोनों root निकालो, घटाओ, फिर अंतर का वर्ग।'],
      ['√a - √b is NOT √(a-b); you must subtract the actual root values first.', '√a-√b ≠ √(a-b); pehle asli root values ghatao.', '√a-√b ≠ √(a-b); पहले असली root मान घटाओ।']);
  }

  Q.wrap({ q3_surd_eq_ratio: eqRatio, q3_missing_under_root: missingUnder, q3_root_diff_missing: rootDiff });
  try { console.log('[mqs3-a] ready'); } catch (e) {}
})();
