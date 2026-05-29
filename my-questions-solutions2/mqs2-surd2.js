/* my-questions-solutions2/mqs2-surd2.js
   Part 2 Surd batch 2.
   Covers: q2_surd_conj_pair_sum, q2_surd_denom_3roots, q2_given_sqrt_frac
   NAYA file; existing kuch modify nahi karta.
*/
(function () {
  'use strict';
  var Q = window.MQS2;
  if (!Q) { try { console.warn('[mqs2-surd2] MQS2 missing'); } catch (e) {} return; }
  var K = Q.K, BOX = Q.BOX, RT = Q.RT, TRI = Q.TRI;
  function AC(out) { return Q.ansClean(out); }
  var U = ['Step 1: Understand the question', 'Step 1: Sawaal samjho', 'चरण 1: प्रश्न समझो'];

  function conjPairSum(out) {
    return TRI([
      { t: U, b: ['We add a fraction and its reciprocal, like ' + K('(' + RT('a') + ' + ' + RT('b') + ')/(' + RT('a') + ' - ' + RT('b') + ') + (' + RT('a') + ' - ' + RT('b') + ')/(' + RT('a') + ' + ' + RT('b') + ')') + '.', 'Ek fraction aur uska reciprocal jodte hain.', 'एक भिन्न और उसका व्युत्क्रम जोड़ते हैं।'] },
      { t: ['Step 2: Common denominator', 'Step 2: Common denominator', 'चरण 2: समान हर'], b: ['The bottom becomes ' + K('(' + RT('a') + ' - ' + RT('b') + ')(' + RT('a') + ' + ' + RT('b') + ') = a - b') + ' and the top is the sum of the two squares.', 'Neeche (a-b) banta hai, upar dono vargon ka yog.', 'नीचे (a-b) बनता है, ऊपर दोनों वर्गों का योग।'] },
      { t: ['Step 3: Simplify the numerator', 'Step 3: Upar simplify', 'चरण 3: ऊपर सरल करो'], b: K('(' + RT('a') + ' + ' + RT('b') + ')^{2} + (' + RT('a') + ' - ' + RT('b') + ')^{2} = 2(a + b)') },
      { t: ['Step 4: Answer', 'Step 4: Uttar', 'चरण 4: उत्तर'], b: ['So the value is ' + K('2(a+b)/(a-b)') + ' = ' + K(BOX(AC(out))) + ', a clean rational number.', 'To value 2(a+b)/(a-b) = ' + K(BOX(AC(out))) + '.', 'तो मान 2(a+b)/(a-b) = ' + K(BOX(AC(out))) + '।'] }
    ],
      ['x + 1/x with conjugates gives 2(a+b)/(a-b) — always rational.', 'Conjugate ke saath x+1/x = 2(a+b)/(a-b), hamesha rational.', 'संयुग्मी के साथ x+1/x = 2(a+b)/(a-b), हमेशा परिमेय।'],
      ['The surds cancel because the cross terms are opposite in sign.', 'Cross term ulte sign ke hone se surd cancel ho jaate hain.', 'क्रॉस पद उलटे चिह्न के होने से करणी कट जाती हैं।']);
  }

  function denom3(out) {
    return TRI([
      { t: U, b: ['The denominator is a sum of three square roots, so a single conjugate is not enough.', 'Denominator me teen vargmool hain, ek conjugate kaafi nahi.', 'हर में तीन वर्गमूल हैं, एक संयुग्मी काफी नहीं।'] },
      { t: ['Step 2: Group and rationalise once', 'Step 2: Group karke ek baar', 'चरण 2: समूह बनाकर एक बार'], b: ['Group two of the roots, e.g. ' + K('(' + RT('a') + ' + ' + RT('b') + ') + ' + RT('c')) + ', and multiply by its conjugate.', 'Do root group karo, jaise (√a+√b)+√c, conjugate se guna.', 'दो root समूह करो, जैसे (√a+√b)+√c, संयुग्मी से गुणा।'] },
      { t: ['Step 3: Rationalise the leftover', 'Step 3: Bachi root rationalise', 'चरण 3: बची root rationalise'], b: ['This leaves one surd; rationalise once more to finish.', 'Ek surd bachegi; use phir rationalise karo.', 'एक करणी बचेगी; उसे फिर rationalise करो।'] },
      { t: ['Step 4: Answer', 'Step 4: Uttar', 'चरण 4: उत्तर'], b: K(BOX(AC(out))) }
    ],
      ['Group two roots, rationalise, then rationalise the remaining surd.', 'Do root group, rationalise, phir bachi surd rationalise.', 'दो root समूह, rationalise, फिर बची करणी rationalise।'],
      ['Two rounds of conjugate multiplication clear three-root denominators.', 'Do baar conjugate guna se teen-root denominator saaf hota hai.', 'दो बार संयुग्मी गुणा से तीन-root हर साफ होता है।']);
  }

  function givenFrac(out) {
    var q = out.question.en;
    var gm = q.match(/=[ ]*([0-9]+\.[0-9]+)/);
    var given = gm ? gm[1] : null;
    var s2 = [];
    if (given) {
      s2 = ['You are told a surd ≈ ' + given + '. Substitute this value wherever that surd appears.', 'Diya hai ek surd ≈ ' + given + '. Jaha bhi wo surd aaye uska maan rakho.', 'दिया है एक करणी ≈ ' + given + '। जहाँ भी वह करणी आए उसका मान रखो।'];
    } else {
      s2 = ['You are given the decimal value of a surd. Substitute it into the expression.', 'Surd ka decimal maan diya hai. Use expression me rakho.', 'करणी का दशमलव मान दिया है। उसे व्यंजक में रखो।'];
    }
    return TRI([
      { t: U, b: ['We must evaluate a fraction using a given approximate value of a square root.', 'Vargmool ke diye maan se ek fraction ka maan nikaalna hai.', 'वर्गमूल के दिए मान से एक भिन्न का मान निकालना है।'] },
      { t: ['Step 2: Substitute the value', 'Step 2: Maan rakho', 'चरण 2: मान रखो'], b: s2 },
      { t: ['Step 3: Simplify (rationalise first if needed)', 'Step 3: Simplify karo', 'चरण 3: सरल करो'], b: ['If the surd is in the denominator, rationalise first, then put the decimal value and compute.', 'Agar surd neeche ho to pehle rationalise, phir decimal daal kar compute.', 'अगर करणी नीचे हो तो पहले rationalise, फिर दशमलव डालकर गणना।'] },
      { t: ['Step 4: Answer', 'Step 4: Uttar', 'चरण 4: उत्तर'], b: ['Rounding sensibly gives ' + K(BOX(AC(out))) + '.', 'Theek se round karne par ' + K(BOX(AC(out))) + '.', 'सही round करने पर ' + K(BOX(AC(out))) + '।'] }
    ],
      ['Rationalise if needed, then plug in the given decimal.', 'Zarurat ho to rationalise, phir diya decimal rakho.', 'जरूरत हो तो rationalise, फिर दिया दशमलव रखो।'],
      ['Keep the decimal value handy and substitute only at the end.', 'Decimal maan ant me rakho.', 'दशमलव मान अंत में रखो।']);
  }

  Q.wrap({ q2_surd_conj_pair_sum: conjPairSum, q2_surd_denom_3roots: denom3, q2_given_sqrt_frac: givenFrac });
  try { console.log('[mqs2-surd2] ready'); } catch (e) {}
})();
