/* my-questions-solutions3/mqs3-k.js
   Part 3 batch K (final) - pattern/series reasoning.
   Covers: q3_sq_cube_analogy, q3_sq_cube_series
   NAYA file; existing kuch modify nahi karta.
*/
(function () {
  'use strict';
  var Q = window.MQS3;
  if (!Q) { try { console.warn('[mqs3-k] MQS3 missing'); } catch (e) {} return; }
  var K = Q.K, BOX = Q.BOX, TRI = Q.TRI;
  function AC(out) { return Q.ansClean(out); }
  var U = ['Step 1: Understand the question', 'Step 1: Sawaal samjho', 'चरण 1: प्रश्न समझो'];

  function sqCubeAnalogy(out) {
    return TRI([
      { t: U, b: ['An analogy of the form ' + K('A : B :: C : ?') + ' is given, based on squares or cubes, e.g. ' + K('49 : 7 :: 64 : ?') + '.', 'Ek analogy A:B::C:? di hai (square/cube par), jaise 49:7::64:?.', 'एक समानता A:B::C:? दी है (वर्ग/घन पर), जैसे 49:7::64:?।'] },
      { t: ['Step 2: Find the rule in the first pair', 'Step 2: Pehli jodi ka niyam', 'चरण 2: पहली जोड़ी का नियम'], b: ['Work out how ' + K('A') + ' becomes ' + K('B') + ', e.g. ' + K('49 = 7^{2}') + ' so the rule is “take the square root”.', 'A se B kaise bana dekho, jaise 49=7^2, niyam = square root lo.', 'A से B कैसे बना, जैसे 49=7², नियम = square root।'] },
      { t: ['Step 3: Apply the same rule to C', 'Step 3: Wahi niyam C par', 'चरण 3: वही नियम C पर'], b: ['Apply the identical operation: ' + K('64 = 8^{2} \u2192 8') + '. (For cube-based analogies, use cube roots instead.)', 'Wahi operation C par: 64=8^2 → 8. (Cube ho to cube root.)', 'वही क्रिया C पर: 64=8² → 8।'] },
      { t: ['Step 4: Answer', 'Step 4: Uttar', 'चरण 4: उत्तर'], b: K(BOX(AC(out))) }
    ],
      ['Decode the rule from the first pair (square or cube root), then apply it to the third term.', 'Pehli jodi se niyam pakdo, phir teesre term par lagao.', 'पहली जोड़ी से नियम, फिर तीसरे पर लगाओ।'],
      ['Check whether the pair is linked by a square or a cube before applying the rule.', 'Pehle dekho jodi square se judi hai ya cube se.', 'पहले देखो जोड़ी वर्ग से है या घन से।']);
  }

  function sqCubeSeries(out) {
    return TRI([
      { t: U, b: ['A number series is given and we must find the next term, e.g. ' + K('1, 4, 9, 16, 25, ?') + ' or ' + K('1, 8, 27, 64, ?') + '.', 'Ek series di hai, agla term nikaalna hai, jaise 1,4,9,16,25,? ya 1,8,27,64,?.', 'एक श्रेणी दी है, अगला पद निकालना है।'] },
      { t: ['Step 2: Recognise the pattern', 'Step 2: Pattern pehchaano', 'चरण 2: pattern पहचानो'], b: ['Check if the terms are consecutive squares ' + K('n^{2}') + ', cubes ' + K('n^{3}') + ', or a small variant like ' + K('n^{2}+1') + '.', 'Dekho terms n^2, n^3, ya n^2+1 jaise hain.', 'देखो terms n², n³, या n²+1 जैसे हैं।'] },
      { t: ['Step 3: Extend to the next term', 'Step 3: Agla term banao', 'चरण 3: अगला पद'], b: ['Apply the pattern to the next ' + K('n') + ', e.g. squares ' + K('1,4,9,16,25 \u2192 6^{2} = 36') + '; cubes ' + K('1,8,27,64 \u2192 5^{3} = 125') + '.', 'Pattern agle n par: squares → 36; cubes → 125.', 'pattern अगले n पर: वर्ग → 36; घन → 125।'] },
      { t: ['Step 4: Answer', 'Step 4: Uttar', 'चरण 4: उत्तर'], b: K(BOX(AC(out))) }
    ],
      ['Identify whether the series is squares, cubes, or a small offset, then extend by one.', 'Series square/cube/offset pehchaano, phir ek aage badhao.', 'श्रेणी वर्ग/घन/offset पहचानो, फिर एक आगे।'],
      ['Compare differences — squares grow by odd numbers (3,5,7…), cubes faster.', 'Antar dekho: squares 3,5,7 se badhte hain.', 'अंतर देखो: वर्ग 3,5,7 से बढ़ते हैं।']);
  }

  Q.wrap({ q3_sq_cube_analogy: sqCubeAnalogy, q3_sq_cube_series: sqCubeSeries });
  try { console.log('[mqs3-k] ready'); } catch (e) {}
})();
