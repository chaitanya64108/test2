/* my-questions-solutions3/mqs3-e.js
   Part 3 batch E.
   Covers: q3_nested_sq_cube_dec, q3_decimal_root_expr, q3_cuberoot_frac_dec
   NAYA file; existing kuch modify nahi karta.
*/
(function () {
  'use strict';
  var Q = window.MQS3;
  if (!Q) { try { console.warn('[mqs3-e] MQS3 missing'); } catch (e) {} return; }
  var K = Q.K, BOX = Q.BOX, RT = Q.RT, CRT = Q.CRT, TRI = Q.TRI;
  function AC(out) { return Q.ansClean(out); }
  var U = ['Step 1: Understand the question', 'Step 1: Sawaal samjho', 'चरण 1: प्रश्न समझो'];

  function nestedSqCubeDec(out) {
    return TRI([
      { t: U, b: ['A decimal sits inside nested roots, e.g. ' + K(CRT(RT('0.000064'))) + '; we must evaluate it.', 'Ek decimal nested roots ke andar hai, jaise ∛(√0.000064); evaluate karna hai.', 'एक दशमलव nested roots के अंदर है, जैसे ∛(√0.000064); हल करना है।'] },
      { t: ['Step 2: Work from the innermost root', 'Step 2: Sabse andar wale root se', 'चरण 2: सबसे अंदर वाले root से'], b: ['Count decimal places carefully. ' + K(RT('0.000064') + ' = 0.008') + ' (since ' + K('0.008^{2} = 0.000064') + ', and the digit count of decimals halves under a square root).', 'Decimal places ginlo. √0.000064=0.008 (0.008^2=0.000064).', 'decimal places गिनो। √0.000064=0.008।'] },
      { t: ['Step 3: Apply the outer root', 'Step 3: Bahar wala root', 'चरण 3: बाहर वाला root'], b: ['Now take the outer cube root: ' + K(CRT('0.008') + ' = 0.2') + ' (since ' + K('0.2^{3} = 0.008') + ').', 'Ab bahar ka cube root: ∛0.008=0.2 (0.2^3=0.008).', 'अब बाहर का cube root: ∛0.008=0.2।'] },
      { t: ['Step 4: Answer', 'Step 4: Uttar', 'चरण 4: उत्तर'], b: K(BOX(AC(out))) }
    ],
      ['Solve innermost root first; track decimal places (square halves them, cube thirds them).', 'Andar se shuru karo; decimal places dhyaan se.', 'अंदर से शुरू; decimal places ध्यान से।'],
      ['Write the decimal as an integer × power of 10; roots of each are easy.', 'Decimal ko integer × 10 ki power likho.', 'दशमलव को integer × 10 की power लिखो।']);
  }

  function decimalRootExpr(out) {
    return TRI([
      { t: U, b: ['An expression mixes decimal square and cube roots, e.g. ' + K(RT('0.04') + ' + ' + CRT('0.027')) + '; evaluate it.', 'Ek expression me decimal square aur cube root, jaise √0.04 + ∛0.027.', 'एक व्यंजक में decimal square और cube root, जैसे √0.04 + ∛0.027।'] },
      { t: ['Step 2: Evaluate each root separately', 'Step 2: Har root alag', 'चरण 2: हर root अलग'], b: [K(RT('0.04') + ' = 0.2') + ' and ' + K(CRT('0.027') + ' = 0.3') + ' (check: ' + K('0.2^{2}=0.04') + ', ' + K('0.3^{3}=0.027') + ').', '√0.04=0.2 aur ∛0.027=0.3.', '√0.04=0.2 और ∛0.027=0.3।'] },
      { t: ['Step 3: Combine', 'Step 3: Jodo/ghatao', 'चरण 3: जोड़ो/घटाओ'], b: ['Add or subtract the decimal values as the expression requires, e.g. ' + K('0.2 + 0.3 = 0.5') + '.', 'Decimal values jodo/ghatao, jaise 0.2+0.3=0.5.', 'decimal मान जोड़ो/घटाओ, जैसे 0.2+0.3=0.5।'] },
      { t: ['Step 4: Answer', 'Step 4: Uttar', 'चरण 4: उत्तर'], b: K(BOX(AC(out))) }
    ],
      ['Find each decimal root on its own, then add/subtract.', 'Har decimal root alag nikaalo, phir jodo/ghatao.', 'हर decimal root अलग, फिर जोड़ो/घटाओ।'],
      ['Memorise: √0.04=0.2, √0.09=0.3, ∛0.008=0.2, ∛0.027=0.3.', 'Yaad rakho: √0.04=0.2, ∛0.027=0.3.', 'याद रखो: √0.04=0.2, ∛0.027=0.3।']);
  }

  function cuberootFracDec(out) {
    return TRI([
      { t: U, b: ['A cube root of a fraction of decimal cubes is given, e.g. ' + K(CRT('(0.2^{3}+0.04^{3})/(0.4^{3}+0.08^{3})')) + '.', 'Decimal cubes ke fraction ka cube root, jaise ∛((0.2^3+0.04^3)/(0.4^3+0.08^3)).', 'decimal घनों के fraction का cube root।'] },
      { t: ['Step 2: Spot the common ratio / factor', 'Step 2: Common factor pakdo', 'चरण 2: common factor पकड़ो'], b: ['Each numerator term is half the matching denominator term ' + K('(0.2 = 0.4/2, 0.04 = 0.08/2)') + '. Factor ' + K('(1/2)^{3} = 1/8') + ' out of the numerator.', 'Numerator ke har term denominator ka aadha hai; (1/2)^3=1/8 bahar.', 'अंश का हर पद हर का आधा है; (1/2)³=1/8 बाहर।'] },
      { t: ['Step 3: Simplify, then take the cube root', 'Step 3: Simplify, phir cube root', 'चरण 3: simplify, फिर cube root'], b: ['The bracket reduces to ' + K('1/8') + ', so ' + K(CRT('1/8') + ' = 1/2 = 0.5') + '.', 'Bracket = 1/8, to ∛(1/8)=0.5.', 'bracket=1/8, तो ∛(1/8)=0.5।'] },
      { t: ['Step 4: Answer', 'Step 4: Uttar', 'चरण 4: उत्तर'], b: K(BOX(AC(out))) }
    ],
      ['Factor the common ratio out of numerator and denominator, then take the cube root.', 'Common ratio bahar nikaalo, phir cube root.', 'common ratio बाहर, फिर cube root।'],
      ['If every top term is k times the bottom term, the fraction is k^3 inside a cube root.', 'Har upar ka term k guna ho to fraction k^3 hota hai.', 'हर ऊपरी पद k गुना हो तो fraction k³।']);
  }

  Q.wrap({ q3_nested_sq_cube_dec: nestedSqCubeDec, q3_decimal_root_expr: decimalRootExpr, q3_cuberoot_frac_dec: cuberootFracDec });
  try { console.log('[mqs3-e] ready'); } catch (e) {}
})();
