/* my-questions-solutions2/mqs2-surd3.js
   Part 2 Surd batch 3.
   Covers: q2_given_sqrt_inv, q2_given_sqrt_ratio, q2_approx_root_expr
   NAYA file; existing kuch modify nahi karta.
*/
(function () {
  'use strict';
  var Q = window.MQS2;
  if (!Q) { try { console.warn('[mqs2-surd3] MQS2 missing'); } catch (e) {} return; }
  var K = Q.K, BOX = Q.BOX, RT = Q.RT, TRI = Q.TRI;
  function AC(out) { return Q.ansClean(out); }
  var U = ['Step 1: Understand the question', 'Step 1: Sawaal samjho', 'चरण 1: प्रश्न समझो'];

  function givenInv(out) {
    var q = out.question.en;
    var gm = q.match(/=[ ]*([0-9]+\.[0-9]+)/);
    var given = gm ? gm[1] : null;
    return TRI([
      { t: U, b: ['We need the value of 1 divided by a surd, using its given decimal value.', 'Ek surd ke diye decimal maan se 1/surd ka maan chahiye.', 'एक करणी के दिए दशमलव मान से 1/करणी का मान चाहिए।'] },
      { t: ['Step 2: Rationalise the reciprocal', 'Step 2: Reciprocal rationalise', 'चरण 2: व्युत्क्रम rationalise'], b: ['Write ' + K('1/' + RT('a')) + ' as ' + K(RT('a') + '/a') + ' by multiplying top and bottom by ' + K(RT('a')) + '.', '1/√a ko √a/a likho (upar-neeche √a se guna).', '1/√a को √a/a लिखो (ऊपर-नीचे √a से गुणा)।'] },
      { t: ['Step 3: Put the decimal value', 'Step 3: Decimal maan rakho', 'चरण 3: दशमलव मान रखो'], b: given ? ['Now substitute ' + K(RT('a') + ' = ' + given) + ' and divide.', '√a = ' + given + ' rakho aur bhag do.', '√a = ' + given + ' रखो और भाग दो।'] : ['Substitute the given decimal value and divide.', 'Diya decimal rakho aur bhag do.', 'दिया दशमलव रखो और भाग दो।'] },
      { t: ['Step 4: Answer', 'Step 4: Uttar', 'चरण 4: उत्तर'], b: K(BOX(AC(out))) }
    ],
      ['1/√a = √a/a, so just divide the given value by a.', '1/√a = √a/a; diya maan a se bhag do.', '1/√a = √a/a; दिया मान a से भाग दो।'],
      ['Never leave a root in the denominator — move it to the top first.', 'Root ko neeche mat chhodo — pehle upar laao.', 'root को नीचे मत छोड़ो — पहले ऊपर लाओ।']);
  }

  function givenRatio(out) {
    return TRI([
      { t: U, b: ['Two surds are given as decimals and we must evaluate an expression that combines them.', 'Do surd decimal me diye hain, inse bana expression evaluate karna hai.', 'दो करणियाँ दशमलव में दी हैं, इनसे बना व्यंजक निकालना है।'] },
      { t: ['Step 2: Rationalise the expression', 'Step 2: Expression rationalise', 'चरण 2: व्यंजक rationalise'], b: ['If a surd sits in the denominator, multiply by the conjugate so the bottom becomes a plain number.', 'Agar surd neeche ho to conjugate se guna karke neeche number banao.', 'अगर करणी नीचे हो तो संयुग्मी से गुणा करके नीचे संख्या बनाओ।'] },
      { t: ['Step 3: Substitute the decimals', 'Step 3: Decimal rakho', 'चरण 3: दशमलव रखो'], b: ['Put the given decimal values for each root and simplify carefully.', 'Har root ka diya decimal rakho aur dhyaan se simplify karo.', 'हर root का दिया दशमलव रखो और ध्यान से सरल करो।'] },
      { t: ['Step 4: Answer', 'Step 4: Uttar', 'चरण 4: उत्तर'], b: K(BOX(AC(out))) }
    ],
      ['Rationalise first, then substitute the given decimal values.', 'Pehle rationalise, phir diye decimal rakho.', 'पहले rationalise, फिर दिए दशमलव रखो।'],
      ['Substituting before rationalising usually causes rounding errors.', 'Rationalise se pehle substitute karne par rounding error aati hai.', 'rationalise से पहले substitute करने पर rounding error आती है।']);
  }

  function approxRoot(out) {
    return TRI([
      { t: U, b: ['We must find the approximate value of an expression made of square or cube roots.', 'Vargmool/ghanmool se bani expression ka approx maan nikaalna hai.', 'वर्गमूल/घनमूल से बनी expression का लगभग मान निकालना है।'] },
      { t: ['Step 2: Find nearest perfect powers', 'Step 2: Nazdeeki perfect power', 'चरण 2: नज़दीकी पूर्ण घात'], b: ['Locate each root between perfect squares (or cubes) to estimate it, e.g. ' + K(RT('50')) + ' is just above ' + K(RT('49') + ' = 7') + '.', 'Har root ko do perfect square ke beech rakho, jaise √50 thoda 7 se zyada.', 'हर root को दो पूर्ण वर्ग के बीच रखो, जैसे √50 थोड़ा 7 से ज़्यादा।'] },
      { t: ['Step 3: Combine and round', 'Step 3: Jodo aur round', 'चरण 3: जोड़ो और round'], b: ['Add or subtract the estimates and round to match the options.', 'Estimate jodo/ghatao aur options ke hisaab se round karo.', 'Estimate जोड़ो/घटाओ और options के हिसाब से round करो।'] },
      { t: ['Step 4: Answer', 'Step 4: Uttar', 'चरण 4: उत्तर'], b: ['The closest value is ' + K(BOX(AC(out))) + '.', 'Sabse nazdeeki maan ' + K(BOX(AC(out))) + '.', 'सबसे नज़दीकी मान ' + K(BOX(AC(out))) + '।'] }
    ],
      ['Bracket each root between known perfect powers, then combine.', 'Har root ko perfect power ke beech rakho, phir jodo.', 'हर root को पूर्ण घात के बीच रखो, फिर जोड़ो।'],
      ['You only need an estimate good enough to pick the right option.', 'Sahi option chunne bhar ka estimate kaafi hai.', 'सही option चुनने भर का estimate काफी है।']);
  }

  Q.wrap({ q2_given_sqrt_inv: givenInv, q2_given_sqrt_ratio: givenRatio, q2_approx_root_expr: approxRoot });
  try { console.log('[mqs2-surd3] ready'); } catch (e) {}
})();
