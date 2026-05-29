/* my-questions-solutions2/mqs2-surd1.js
   Part 2 Surd batch 1: rationalising denominators.
   Covers: q2_surd_rat_2term, q2_surd_rat_3term, q2_surd_sum_fracs
   NAYA file; existing kuch modify nahi karta.
*/
(function () {
  'use strict';
  var Q = window.MQS2;
  if (!Q) { try { console.warn('[mqs2-surd1] MQS2 missing'); } catch (e) {} return; }
  var K = Q.K, BOX = Q.BOX, RT = Q.RT, TRI = Q.TRI;
  function AC(out) { return Q.ansClean(out); }
  var U = ['Step 1: Understand the question', 'Step 1: Sawaal samjho', 'चरण 1: प्रश्न समझो'];

  function ratTwo(out) {
    return TRI([
      { t: U, b: ['We must rationalise the denominator — remove the surd from the bottom of the fraction.', 'Denominator ko rationalise karna hai — neeche se surd hatao.', 'हर (denominator) को rationalise करना है — नीचे से करणी हटाओ।'] },
      { t: ['Step 2: Multiply by the conjugate', 'Step 2: Conjugate se guna', 'चरण 2: संयुग्मी से गुणा'], b: ['Multiply the top and bottom by the conjugate of the denominator. For ' + K(RT('a') + ' + ' + RT('b')) + ' the conjugate is ' + K(RT('a') + ' - ' + RT('b')) + '.', 'Upar-neeche ko denominator ke conjugate se guna karo. ' + K(RT('a') + ' + ' + RT('b')) + ' ka conjugate ' + K(RT('a') + ' - ' + RT('b')) + '.', 'ऊपर-नीचे को संयुग्मी से गुणा करो। ' + K(RT('a') + ' + ' + RT('b')) + ' का संयुग्मी ' + K(RT('a') + ' - ' + RT('b')) + '।'] },
      { t: ['Step 3: Denominator becomes an integer', 'Step 3: Denominator integer ban jaata hai', 'चरण 3: हर पूर्णांक बनता है'], b: K('(' + RT('a') + ' + ' + RT('b') + ')(' + RT('a') + ' - ' + RT('b') + ') = a - b') },
      { t: ['Step 4: Answer', 'Step 4: Uttar', 'चरण 4: उत्तर'], b: ['So the rationalised form is ' + K(BOX(AC(out))) + '.', 'To rationalised roop ' + K(BOX(AC(out))) + '.', 'तो rationalised रूप ' + K(BOX(AC(out))) + '।'] }
    ],
      ['Multiply by the conjugate; the denominator turns into a - b (an integer).', 'Conjugate se guna karo; denominator a-b ban jaata hai.', 'संयुग्मी से गुणा करो; हर a-b बन जाता है।'],
      ['The conjugate of ' + K(RT('a') + ' + ' + RT('b')) + ' just flips the middle sign.', 'Conjugate me sirf beech ka sign badalta hai.', 'संयुग्मी में सिर्फ बीच का चिह्न बदलता है।']);
  }

  function ratThree(out) {
    return TRI([
      { t: U, b: ['The denominator has three terms (for example ' + K(RT('a') + ' + ' + RT('b') + ' + ' + RT('c')) + '), so we rationalise in two stages.', 'Denominator me teen term hain, isliye do charno me rationalise karenge.', 'हर में तीन पद हैं, इसलिए दो चरणों में rationalise करेंगे।'] },
      { t: ['Step 2: Group two terms', 'Step 2: Do term group karo', 'चरण 2: दो पद समूह करो'], b: ['Write it as ' + K('(' + RT('a') + ' + ' + RT('b') + ') + ' + RT('c')) + ' and multiply by the conjugate ' + K('(' + RT('a') + ' + ' + RT('b') + ') - ' + RT('c')) + '.', 'Ise (√a+√b)+√c maano aur conjugate se guna karo.', 'इसे (√a+√b)+√c मानो और संयुग्मी से गुणा करो।'] },
      { t: ['Step 3: Rationalise again', 'Step 3: Dobara rationalise', 'चरण 3: दोबारा rationalise'], b: ['One surd will still remain, so rationalise a second time to clear it.', 'Ek surd bachega, use dobara rationalise karke hatao.', 'एक करणी बचेगी, उसे दोबारा rationalise करके हटाओ।'] },
      { t: ['Step 4: Answer', 'Step 4: Uttar', 'चरण 4: उत्तर'], b: K(BOX(AC(out))) }
    ],
      ['Group two surds together and rationalise twice.', 'Do surd group karo aur do baar rationalise karo.', 'दो करणी एक साथ लो और दो बार rationalise करो।'],
      ['Treat two of the three surds as a single block, then use its conjugate.', 'Teen me se do ko ek block maano, phir conjugate lo.', 'तीन में से दो को एक ब्लॉक मानो।']);
  }

  function sumFracs(out) {
    return TRI([
      { t: U, b: ['We are adding several fractions whose denominators are sums of consecutive surds.', 'Aise kai fraction jodne hain jinke denominator lagaatar surd ke yog hain.', 'ऐसे कई भिन्न जोड़ने हैं जिनके हर लगातार करणियों के योग हैं।'] },
      { t: ['Step 2: Rationalise each fraction', 'Step 2: Har fraction rationalise', 'चरण 2: हर भिन्न rationalise'], b: ['Each term ' + K('1/(' + RT('n') + ' + ' + RT('n+1') + ')') + ' becomes ' + K(RT('n+1') + ' - ' + RT('n')) + ' after rationalising.', 'Har term rationalise karne par √(n+1)-√n ban jaata hai.', 'हर पद rationalise करने पर √(n+1)-√n बन जाता है।'] },
      { t: ['Step 3: Telescoping cancellation', 'Step 3: Beech ke term cancel', 'चरण 3: बीच के पद कटते हैं'], b: ['When you add them, every middle surd cancels, leaving only the last minus the first.', 'Jodne par beech ke saare surd cancel, sirf last minus first bachta hai.', 'जोड़ने पर बीच के सारे कट जाते हैं, सिर्फ अंतिम माइनस पहला बचता है।'] },
      { t: ['Step 4: Answer', 'Step 4: Uttar', 'चरण 4: उत्तर'], b: K(BOX(AC(out))) }
    ],
      ['Rationalise each term; it telescopes to (last surd) - (first surd).', 'Har term rationalise karo; telescoping se last-first bachta hai.', 'हर पद rationalise करो; telescoping से last-first बचता है।'],
      ['1/(√n+√(n+1)) = √(n+1)-√n, so the sum collapses.', '1/(√n+√(n+1)) = √(n+1)-√n.', '1/(√n+√(n+1)) = √(n+1)-√n।']);
  }

  Q.wrap({ q2_surd_rat_2term: ratTwo, q2_surd_rat_3term: ratThree, q2_surd_sum_fracs: sumFracs });
  try { console.log('[mqs2-surd1] ready'); } catch (e) {}
})();
