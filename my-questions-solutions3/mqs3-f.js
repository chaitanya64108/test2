/* my-questions-solutions3/mqs3-f.js
   Part 3 batch F.
   Covers: q3_mixed_frac_cuberoot, q3_fourth_root_power, q3_large_cuberoot
   NAYA file; existing kuch modify nahi karta.
*/
(function () {
  'use strict';
  var Q = window.MQS3;
  if (!Q) { try { console.warn('[mqs3-f] MQS3 missing'); } catch (e) {} return; }
  var K = Q.K, BOX = Q.BOX, RT = Q.RT, CRT = Q.CRT, FR = Q.FR, TRI = Q.TRI;
  function AC(out) { return Q.ansClean(out); }
  var U = ['Step 1: Understand the question', 'Step 1: Sawaal samjho', 'चरण 1: प्रश्न समझो'];

  function mixedFracCuberoot(out) {
    return TRI([
      { t: U, b: ['A cube root of a mixed number is asked, e.g. ' + K(CRT('4\\tfrac{12}{125}')) + '.', 'Ek mixed number ka cube root, jaise ∛(4 12/125).', 'एक मिश्र संख्या का cube root, जैसे ∛(4 12/125)।'] },
      { t: ['Step 2: Convert to an improper fraction', 'Step 2: Improper fraction banao', 'चरण 2: अपूर्ण भिन्न'], b: ['Convert the mixed number, e.g. ' + K('4\\tfrac{12}{125} = ' + FR('512', '125')) + '.', 'Mixed ko improper banao: 4 12/125 = 512/125.', 'मिश्र को अपूर्ण बनाओ: 4 12/125 = 512/125।'] },
      { t: ['Step 3: Cube-root numerator and denominator', 'Step 3: Upar-neeche ka cube root', 'चरण 3: अंश-हर का cube root'], b: [K(CRT(FR('512', '125')) + ' = ' + FR(CRT('512'), CRT('125')) + ' = ' + FR('8', '5')) + ', i.e. ' + K('1\\tfrac{3}{5}') + '.', '∛(512/125)=∛512/∛125=8/5 = 1 3/5.', '∛(512/125)=8/5 = 1 3/5।'] },
      { t: ['Step 4: Answer', 'Step 4: Uttar', 'चरण 4: उत्तर'], b: K(BOX(AC(out))) }
    ],
      ['Make it an improper fraction, then cube-root top and bottom separately.', 'Improper fraction banao, phir upar-neeche cube root.', 'अपूर्ण भिन्न बनाओ, फिर अंश-हर का cube root।'],
      ['Know the small cubes: 125=5^3, 512=8^3, 343=7^3, 216=6^3.', 'Chhote cubes yaad: 512=8^3, 125=5^3.', 'छोटे घन याद: 512=8³, 125=5³।']);
  }

  function fourthRootPower(out) {
    return TRI([
      { t: U, b: ['A fourth root of a power is asked, e.g. ' + K('\\sqrt[4]{625^{3}}') + '.', 'Ek power ka fourth root, jaise ⁴√(625^3).', 'एक power का fourth root, जैसे ⁴√(625³)।'] },
      { t: ['Step 2: Write the base as a power', 'Step 2: Base ko power me likho', 'चरण 2: base को power में'], b: ['Express the base in prime-power form, e.g. ' + K('625 = 5^{4}') + ', so ' + K('625^{3} = 5^{12}') + '.', 'Base ko power me likho: 625=5^4, to 625^3=5^12.', 'base को power में: 625=5⁴, तो 625³=5¹²।'] },
      { t: ['Step 3: Divide the exponent by the root index', 'Step 3: Exponent ko index se bhag', 'चरण 3: घात को index से भाग'], b: ['A fourth root divides the exponent by 4: ' + K('\\sqrt[4]{5^{12}} = 5^{12/4} = 5^{3} = 125') + '.', 'Fourth root exponent ko 4 se bhag: 5^(12/4)=5^3=125.', 'fourth root घात को 4 से भाग: 5³=125।'] },
      { t: ['Step 4: Answer', 'Step 4: Uttar', 'चरण 4: उत्तर'], b: K(BOX(AC(out))) }
    ],
      ['Write base as a prime power, multiply exponents, then divide by the root index.', 'Base ko prime power likho, exponent multiply, phir index se bhag.', 'base को prime power, घात गुणा, फिर index से भाग।'],
      ['n-th root of a^m = a^(m/n) — just divide the exponent.', 'a^m ka n-th root = a^(m/n).', 'a^m का n-वाँ root = a^(m/n)।']);
  }

  function largeCuberoot(out) {
    return TRI([
      { t: U, b: ['A cube root of a large perfect cube is asked, e.g. ' + K(CRT('148877')) + '.', 'Ek bade perfect cube ka cube root, jaise ∛148877.', 'एक बड़े perfect cube का cube root, जैसे ∛148877।'] },
      { t: ['Step 2: Use the last digit for the unit digit', 'Step 2: Aakhri ank se unit digit', 'चरण 2: अंतिम अंक से इकाई'], b: ['The last digit fixes the root’s unit digit (cube endings: 1→1, 8→2, 7→3, 4→4, 5→5, 6→6, 3→7, 2→8, 9→9, 0→0). Here ' + K('...7 \u2192 unit digit 3') + '.', 'Aakhri ank se unit digit milta hai. ...7 → 3.', 'अंतिम अंक से इकाई। ...7 → 3।'] },
      { t: ['Step 3: Use the left group for the tens digit', 'Step 3: Bayaan group se tens digit', 'चरण 3: बाएँ समूह से दहाई'], b: ['Strip the last 3 digits; the remaining ' + K('148') + ' lies between ' + K('5^{3}=125') + ' and ' + K('6^{3}=216') + ', so the tens digit is 5. Root ' + K('= 53') + '.', 'Aakhri 3 ank hatao; 148 (125 aur 216 ke beech) → tens 5. Root=53.', 'अंतिम 3 अंक हटाओ; 148 → दहाई 5। Root=53।'] },
      { t: ['Step 4: Answer', 'Step 4: Uttar', 'चरण 4: उत्तर'], b: K(BOX(AC(out))) }
    ],
      ['Last digit gives the unit digit; the left group (between consecutive cubes) gives the tens digit.', 'Aakhri ank se unit, baayaan group se tens digit.', 'अंतिम अंक से इकाई, बाएँ समूह से दहाई।'],
      ['Memorise cube unit-digit endings; only 2 and 8, 3 and 7 swap.', 'Cube unit-digit endings yaad: sirf 2-8, 3-7 swap.', 'घन इकाई endings याद: सिर्फ 2-8, 3-7 swap।']);
  }

  Q.wrap({ q3_mixed_frac_cuberoot: mixedFracCuberoot, q3_fourth_root_power: fourthRootPower, q3_large_cuberoot: largeCuberoot });
  try { console.log('[mqs3-f] ready'); } catch (e) {}
})();
