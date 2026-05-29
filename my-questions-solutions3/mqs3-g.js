/* my-questions-solutions3/mqs3-g.js
   Part 3 batch G.
   Covers: q3_large_sqrt, q3_approx_root_product, q3_perfect_sq_trinomial
   NAYA file; existing kuch modify nahi karta.
*/
(function () {
  'use strict';
  var Q = window.MQS3;
  if (!Q) { try { console.warn('[mqs3-g] MQS3 missing'); } catch (e) {} return; }
  var K = Q.K, BOX = Q.BOX, RT = Q.RT, X = Q.X, TRI = Q.TRI;
  function AC(out) { return Q.ansClean(out); }
  var U = ['Step 1: Understand the question', 'Step 1: Sawaal samjho', 'चरण 1: प्रश्न समझो'];

  function largeSqrt(out) {
    return TRI([
      { t: U, b: ['A square root of a large perfect square is asked, e.g. ' + K(RT('772641')) + '.', 'Ek bade perfect square ka square root, jaise √772641.', 'एक बड़े perfect square का square root, जैसे √772641।'] },
      { t: ['Step 2: Pair the digits and use the last digit', 'Step 2: Ank pair karo, aakhri ank dekho', 'चरण 2: अंक pair, अंतिम अंक'], b: ['Group digits in pairs from the right. The last digit ' + K('1') + ' means the root ends in ' + K('1 or 9') + ' (square endings: 1→1/9, 4→2/8, 9→3/7, 6→4/6, 5→5, 0→0).', 'Daayein se do-do ank pair karo. Aakhri 1 → root 1 ya 9 par khatam.', 'दाएँ से जोड़े बनाओ। अंतिम 1 → root 1 या 9 पर।'] },
      { t: ['Step 3: Bound with the left group', 'Step 3: Bayaan group se range', 'चरण 3: बाएँ समूह से सीमा'], b: ['The left group ' + K('77') + ' lies between ' + K('8^{2}=64') + ' and ' + K('9^{2}=81') + ', so the hundreds part is 8; choosing the right ending gives ' + K('879') + '.', 'Baayaan group 77 (64 aur 81 ke beech) → 8; sahi ending se 879.', 'बाएँ समूह 77 → 8; सही ending से 879।'] },
      { t: ['Step 4: Answer', 'Step 4: Uttar', 'चरण 4: उत्तर'], b: K(BOX(AC(out))) }
    ],
      ['Pair digits from the right; last digit fixes the ending, left group fixes the leading digits.', 'Daayein se pair; aakhri ank ending, baayaan group leading digits.', 'दाएँ से pair; अंतिम अंक ending, बाएँ समूह leading।'],
      ['Square unit-digit endings: 1/9→1, 2/8→4, 3/7→9, 4/6→6, 5→5, 0→0.', 'Square ki unit-digit endings yaad rakho.', 'square की unit-digit endings याद रखो।']);
  }

  function approxRootProduct(out) {
    return TRI([
      { t: U, b: ['We must approximate an expression with large roots, e.g. ' + K(RT('a') + ' ' + X() + ' ' + RT('b')) + ', and pick the nearest option.', 'Bade roots wale expression ko approximate karke nazdeeki option chunna hai.', 'बड़े roots वाले व्यंजक को approximate करके नहिकटतम option चुनना है।'] },
      { t: ['Step 2: Round each number to a near perfect square', 'Step 2: Paas ke perfect square', 'चरण 2: पास का perfect square'], b: ['Replace each radicand by the closest perfect square so its root is exact, e.g. ' + K(RT('99') + ' \u2248 ' + RT('100') + ' = 10') + '.', 'Har radicand ko paas ke perfect square se badlo, jaise √99≈10.', 'हर radicand को पास के perfect square से, जैसे √99≈10।'] },
      { t: ['Step 3: Combine the approximations', 'Step 3: Approx values jodo/guna', 'चरण 3: approx मान जोड़ो/गुणा'], b: ['Multiply or add the rounded roots, then match to the closest option.', 'Rounded roots ko guna/jodo, phir nazdeeki option pakdo.', 'rounded roots को गुणा/जोड़ो, फिर नहिकट option।'] },
      { t: ['Step 4: Answer', 'Step 4: Uttar', 'चरण 4: उत्तर'], b: K(BOX(AC(out))) }
    ],
      ['Round each radicand to a nearby perfect square, combine, then pick the closest option.', 'Har radicand ko paas ke perfect square se badlo, combine, nazdeeki option.', 'हर radicand को पास के perfect square से, फिर नहिकट option।'],
      ['These are estimate questions — exact arithmetic is not needed, just the nearest value.', 'Ye estimate sawaal hain; exact nahi, nazdeeki maan chahiye.', 'ये अनुमान वाले सवाल हैं।']);
  }

  function perfectSqTrinomial(out) {
    return TRI([
      { t: U, b: ['A quadratic is given that is actually a perfect square, e.g. ' + K('9x^{2} - 30x + 25') + '; write it as a square.', 'Ek quadratic jo perfect square hai, jaise 9x^2-30x+25; use square me likho.', 'एक वर्ग समीकरण जो perfect square है, जैसे 9x²-30x+25।'] },
      { t: ['Step 2: Identify the square terms', 'Step 2: Square terms pehchaano', 'चरण 2: वर्ग पद पहचानो'], b: ['First and last terms are perfect squares: ' + K('9x^{2} = (3x)^{2}') + ' and ' + K('25 = 5^{2}') + '.', 'Pehla aur aakhri term perfect square: 9x^2=(3x)^2, 25=5^2.', 'पहला और अंतिम पद वर्ग: 9x²=(3x)², 25=5²।'] },
      { t: ['Step 3: Check the middle term, write the square', 'Step 3: Middle term check, square likho', 'चरण 3: मध्य पद जांचो'], b: ['Middle term should be ' + K('2 ' + X() + ' 3x ' + X() + ' 5 = 30x') + '; sign is minus, so ' + K('9x^{2} - 30x + 25 = (3x - 5)^{2}') + '.', 'Middle term 2×3x×5=30x; minus, to (3x-5)^2.', 'मध्य पद 30x; ऋण, तो (3x-5)²।'] },
      { t: ['Step 4: Answer', 'Step 4: Uttar', 'चरण 4: उत्तर'], b: K(BOX(AC(out))) }
    ],
      ['Match a^2 and b^2 from the ends, verify 2ab is the middle term, then write (a±b)^2.', 'Sire se a^2,b^2 lo, 2ab middle term check, (a±b)^2 likho.', 'सिरों से a²,b², 2ab मध्य जाँच, (a±b)²।'],
      ['Sign of the middle term gives the sign inside the bracket.', 'Middle term ka sign bracket ka sign deta hai.', 'मध्य पद का चिह्न bracket का चिह्न देता है।']);
  }

  Q.wrap({ q3_large_sqrt: largeSqrt, q3_approx_root_product: approxRootProduct, q3_perfect_sq_trinomial: perfectSqTrinomial });
  try { console.log('[mqs3-g] ready'); } catch (e) {}
})();
