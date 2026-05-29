/* my-questions-solutions3/mqs3-h.js
   Part 3 batch H.
   Covers: q3_root_perfect_sq_poly, q3_algebraic_identity_root, q3_sum_cubes_word
   NAYA file; existing kuch modify nahi karta.
*/
(function () {
  'use strict';
  var Q = window.MQS3;
  if (!Q) { try { console.warn('[mqs3-h] MQS3 missing'); } catch (e) {} return; }
  var K = Q.K, BOX = Q.BOX, RT = Q.RT, X = Q.X, TRI = Q.TRI;
  function AC(out) { return Q.ansClean(out); }
  var U = ['Step 1: Understand the question', 'Step 1: Sawaal samjho', 'चरण 1: प्रश्न समझो'];

  function rootPerfectSqPoly(out) {
    return TRI([
      { t: U, b: ['A square root of a quadratic that is a perfect square is asked, e.g. ' + K(RT('9x^{2} - 30x + 25')) + '.', 'Ek perfect-square quadratic ka square root, jaise √(9x^2-30x+25).', 'एक perfect-square वर्ग समीकरण का square root।'] },
      { t: ['Step 2: Factor the quadratic as a square', 'Step 2: Quadratic ko square me likho', 'चरण 2: वर्ग समीकरण को वर्ग में'], b: ['Recognise the perfect-square form, e.g. ' + K('9x^{2} - 30x + 25 = (3x - 5)^{2}') + '.', 'Perfect-square form pehchaano: 9x^2-30x+25=(3x-5)^2.', 'perfect-square रूप: 9x²-30x+25=(3x-5)²।'] },
      { t: ['Step 3: Take the root as an absolute value', 'Step 3: Root = absolute value', 'चरण 3: root = निरपेक्ष मान'], b: [K(RT('(3x - 5)^{2}') + ' = |3x - 5|') + '. Drop the bars only if the range guarantees the sign; otherwise keep the modulus.', '√((3x-5)^2)=|3x-5|. Range pata ho to bars hatao, warna modulus rakho.', '√((3x-5)²)=|3x-5|। range पता हो तो bars हटाओ।'] },
      { t: ['Step 4: Answer', 'Step 4: Uttar', 'चरण 4: उत्तर'], b: K(BOX(AC(out))) }
    ],
      ['Write the quadratic as (ax±b)^2, then √ gives |ax±b|.', 'Quadratic ko (ax±b)^2 likho, √ se |ax±b|.', 'वर्ग समीकरण को (ax±b)², √ से |ax±b|।'],
      ['√(square) = |value|, not just value — mind the sign over the given range.', '√(square)=|value|, sign ka dhyaan rakho.', '√(वर्ग)=|मान|, चिह्न का ध्यान।']);
  }

  function algebraicIdentityRoot(out) {
    return TRI([
      { t: U, b: ['A root of a symmetric expression is asked, e.g. ' + K(RT('(a+b)^{2} - 4ab')) + '.', 'Ek symmetric expression ka root, jaise √((a+b)^2-4ab).', 'एक symmetric व्यंजक का root, जैसे √((a+b)²-4ab)।'] },
      { t: ['Step 2: Simplify inside using an identity', 'Step 2: Andar identity lagao', 'चरण 2: अंदर सर्वसमिका'], b: ['Use ' + K('(a+b)^{2} - 4ab = (a-b)^{2}') + ' (and similarly ' + K('(a-b)^{2} + 4ab = (a+b)^{2}') + ').', 'Identity: (a+b)^2-4ab=(a-b)^2.', 'सर्वसमिका: (a+b)²-4ab=(a-b)²।'] },
      { t: ['Step 3: Take the root', 'Step 3: Root lo', 'चरण 3: root लो'], b: [K(RT('(a-b)^{2}') + ' = |a - b|') + '; substitute the given values to get a number.', '√((a-b)^2)=|a-b|; values daalo.', '√((a-b)²)=|a-b|; मान रखो।'] },
      { t: ['Step 4: Answer', 'Step 4: Uttar', 'चरण 4: उत्तर'], b: K(BOX(AC(out))) }
    ],
      ['Spot the identity (a+b)^2 - 4ab = (a-b)^2, then √ gives |a-b|.', 'Identity (a+b)^2-4ab=(a-b)^2 pakdo, √ se |a-b|.', 'सर्वसमिका पकड़ो, √ से |a-b|।'],
      ['These collapse to a perfect square inside — then the root is clean.', 'Andar perfect square ban jaata hai, root saaf aata hai.', 'अंदर perfect square बनता है, root साफ।']);
  }

  function sumCubesWord(out) {
    return TRI([
      { t: U, b: ['A word problem gives ' + K('a + b') + ' and ' + K('a^{3} + b^{3}') + ' and asks for ' + K('ab') + ' or ' + K('a - b') + '.', 'Word problem me a+b aur a^3+b^3 diya, ab ya a-b poocha.', 'word problem में a+b और a³+b³ दिया, ab या a-b पूछा।'] },
      { t: ['Step 2: Use the sum-of-cubes identity', 'Step 2: Sum-of-cubes identity', 'चरण 2: घन योग सर्वसमिका'], b: [K('a^{3} + b^{3} = (a+b)^{3} - 3ab(a+b)') + '. Plug in the known ' + K('a+b') + ' and ' + K('a^{3}+b^{3}') + ' to solve for ' + K('ab') + '.', 'a^3+b^3=(a+b)^3-3ab(a+b); ab nikaalo.', 'a³+b³=(a+b)³-3ab(a+b); ab निकालो।'] },
      { t: ['Step 3: Find what is asked', 'Step 3: Maanga value nikaalo', 'चरण 3: मांगा मान'], b: ['With ' + K('ab') + ' and ' + K('a+b') + ' known, use ' + K('(a-b)^{2} = (a+b)^{2} - 4ab') + ' if a difference is asked. E.g. ' + K('a+b=32, a^{3}+b^{3}=9728 \u2192 ab=240 \u2192 a-b=8') + '.', 'ab aur a+b se (a-b)^2=(a+b)^2-4ab. Jaise a-b=8.', 'ab और a+b से (a-b)²=(a+b)²-4ab। जैसे a-b=8।'] },
      { t: ['Step 4: Answer', 'Step 4: Uttar', 'चरण 4: उत्तर'], b: K(BOX(AC(out))) }
    ],
      ['Use a^3+b^3 = (a+b)^3 - 3ab(a+b) to get ab, then (a-b)^2 = (a+b)^2 - 4ab.', 'a^3+b^3=(a+b)^3-3ab(a+b) se ab, phir (a-b)^2.', 'a³+b³ सर्वसमिका से ab, फिर (a-b)²।'],
      ['Two symmetric facts (sum and sum-of-cubes) are enough to pin down ab.', 'a+b aur a^3+b^3 do facts se ab pata chal jaata hai.', 'a+b और a³+b³ से ab निकल आता है।']);
  }

  Q.wrap({ q3_root_perfect_sq_poly: rootPerfectSqPoly, q3_algebraic_identity_root: algebraicIdentityRoot, q3_sum_cubes_word: sumCubesWord });
  try { console.log('[mqs3-h] ready'); } catch (e) {}
})();
