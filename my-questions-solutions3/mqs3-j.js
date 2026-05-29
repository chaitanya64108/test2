/* my-questions-solutions3/mqs3-j.js
   Part 3 batch J (conceptual digit-property questions).
   Covers: q3_perfect_sq_unit_digit, q3_cuberoot_unit_digit, q3_zeros_sq_cube
   NAYA file; existing kuch modify nahi karta.
*/
(function () {
  'use strict';
  var Q = window.MQS3;
  if (!Q) { try { console.warn('[mqs3-j] MQS3 missing'); } catch (e) {} return; }
  var K = Q.K, BOX = Q.BOX, TRI = Q.TRI;
  function AC(out) { return Q.ansClean(out); }
  var U = ['Step 1: Understand the question', 'Step 1: Sawaal samjho', 'चरण 1: प्रश्न समझो'];

  function perfectSqUnitDigit(out) {
    return TRI([
      { t: U, b: ['We must decide which number can (or cannot) be a perfect square, judging by its last digit.', 'Aakhri ank dekhkar batana hai konsa number perfect square ho sakta hai ya nahi.', 'अंतिम अंक देखकर बताना है कौन सा संख्या perfect square हो सकती है।'] },
      { t: ['Step 2: Recall the allowed last digits', 'Step 2: Square ke ant ke ank', 'चरण 2: वर्ग के अंतिम अंक'], b: ['A perfect square can only end in ' + K('0, 1, 4, 5, 6, or 9') + '. It can never end in ' + K('2, 3, 7, or 8') + '.', 'Perfect square sirf 0,1,4,5,6,9 par khatam ho sakta hai; 2,3,7,8 par kabhi nahi.', 'perfect square केवल 0,1,4,5,6,9 पर; 2,3,7,8 पर कभी नहीं।'] },
      { t: ['Step 3: Check each option’s last digit', 'Step 3: Har option ka aakhri ank', 'चरण 3: हर option का अंतिम अंक'], b: ['Any number ending in ' + K('2, 3, 7, or 8') + ' is rejected immediately; the valid one ends in an allowed digit.', 'Jo 2,3,7,8 par khatam ho use hatao; sahi wala allowed ank par.', 'jo 2,3,7,8 पर खत्म हो उसे हटाओ।'] },
      { t: ['Step 4: Answer', 'Step 4: Uttar', 'चरण 4: उत्तर'], b: K(BOX(AC(out))) }
    ],
      ['Perfect squares end only in 0,1,4,5,6,9 — reject 2,3,7,8 instantly.', 'Perfect square 0,1,4,5,6,9 par; 2,3,7,8 reject.', 'perfect square 0,1,4,5,6,9 पर।'],
      ['No full calculation needed — just look at the unit digit.', 'Poora calculation nahi, sirf unit digit dekho.', 'पूरा calculation नहीं, सिर्फ unit digit।']);
  }

  function cuberootUnitDigit(out) {
    return TRI([
      { t: U, b: ['Given the last digit of a perfect cube, we find the unit digit of its cube root.', 'Perfect cube ka aakhri ank dekhkar uske cube root ka unit digit nikaalna hai.', 'perfect cube का अंतिम अंक से cube root का unit digit।'] },
      { t: ['Step 2: Recall the cube unit-digit map', 'Step 2: Cube unit-digit map', 'चरण 2: घन unit-digit map'], b: ['Endings: ' + K('1\u21921, 8\u21922, 7\u21923, 4\u21924, 5\u21925, 6\u21926, 3\u21927, 2\u21928, 9\u21929, 0\u21920') + '. Only ' + K('2\u21948') + ' and ' + K('3\u21947') + ' swap; the rest stay the same.', 'Endings: 8→2, 7→3, baaki same; sirf 2-8, 3-7 swap.', 'endings: 8→2, 7→3; सिर्फ 2-8, 3-7 swap।'] },
      { t: ['Step 3: Read off the unit digit', 'Step 3: Unit digit padho', 'चरण 3: unit digit पढ़ो'], b: ['Match the cube’s last digit to the map, e.g. a cube ending in ' + K('8') + ' has a root ending in ' + K('2') + '.', 'Cube ka aakhri ank map se milao, jaise ...8 → root ...2.', 'cube का अंतिम अंक map से, जैसे ...8 → ...2।'] },
      { t: ['Step 4: Answer', 'Step 4: Uttar', 'चरण 4: उत्तर'], b: K(BOX(AC(out))) }
    ],
      ['Use the cube unit-digit map; only 2↔8 and 3↔7 swap, all others stay.', 'Cube unit-digit map: sirf 2-8, 3-7 swap.', 'घन unit-digit map: सिर्फ 2-8, 3-7 swap।'],
      ['Cubes preserve most unit digits — only 2/8 and 3/7 trade places.', 'Cube zyaadatar unit digit same rakhta hai.', 'घन ज़्यादातर unit digit same रखता है।']);
  }

  function zerosSqCube(out) {
    return TRI([
      { t: U, b: ['A question asks about the number of trailing zeros in a perfect square or perfect cube.', 'Perfect square ya cube ke ant me kitne zero honge, ye poocha hai.', 'perfect square या cube के अंत में कितने शून्य।'] },
      { t: ['Step 2: Recall the zero-count rule', 'Step 2: Zero-count niyam', 'चरण 2: शून्य नियम'], b: ['Trailing zeros come in pairs for a perfect square (must be even) and in triples for a perfect cube (must be a multiple of 3).', 'Perfect square ke trailing zero even hote hain; cube ke 3 ke multiple.', 'perfect square में trailing zero सम (even); cube में 3 के गुणज।'] },
      { t: ['Step 3: Apply the parity/multiple test', 'Step 3: Test lagao', 'चरण 3: जांच करो'], b: ['Reject any number whose trailing-zero count is odd (for a square) or not a multiple of 3 (for a cube); the valid option follows the rule.', 'Jiska zero count odd ho (square) ya 3 ka multiple na ho (cube) use hatao.', 'odd zero (square) या 3 का गुणज नहीं (cube) हटाओ।'] },
      { t: ['Step 4: Answer', 'Step 4: Uttar', 'चरण 4: उत्तर'], b: K(BOX(AC(out))) }
    ],
      ['Square: trailing zeros must be even; cube: must be a multiple of 3.', 'Square: zero even; cube: zero 3 ka multiple.', 'square: सम शून्य; cube: 3 का गुणज।'],
      ['Each trailing zero is a factor of 10; squares need them in 2s, cubes in 3s.', 'Har zero ek 10 ka factor; square me 2-2, cube me 3-3.', 'हर शून्य 10 का factor; square 2-2, cube 3-3।']);
  }

  Q.wrap({ q3_perfect_sq_unit_digit: perfectSqUnitDigit, q3_cuberoot_unit_digit: cuberootUnitDigit, q3_zeros_sq_cube: zerosSqCube });
  try { console.log('[mqs3-j] ready'); } catch (e) {}
})();
