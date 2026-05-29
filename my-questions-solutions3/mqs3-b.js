/* my-questions-solutions3/mqs3-b.js
   Part 3 batch B.
   Covers: q3_root_linear_missing, q3_cuberoot_linear, q3_root_eq_var_ratio
   NAYA file; existing kuch modify nahi karta.
*/
(function () {
  'use strict';
  var Q = window.MQS3;
  if (!Q) { try { console.warn('[mqs3-b] MQS3 missing'); } catch (e) {} return; }
  var K = Q.K, BOX = Q.BOX, RT = Q.RT, CRT = Q.CRT, FR = Q.FR, TRI = Q.TRI;
  function AC(out) { return Q.ansClean(out); }
  var U = ['Step 1: Understand the question', 'Step 1: Sawaal samjho', 'चरण 1: प्रश्न समझो'];

  function rootLinear(out) {
    return TRI([
      { t: U, b: ['A root term sits inside a simple linear equation (with +, - or ×), and we must find the number under the root.', 'Ek root term ek simple linear equation me hai (+, -, × ke saath), root ke andar ka number nikaalna hai.', 'एक root एक साधारण रैखिक समीकरण में है; root के अंदर का नंबर निकालना है।'] },
      { t: ['Step 2: Do the plain arithmetic first', 'Step 2: Pehle simple arithmetic', 'चरण 2: पहले साधारण गणित'], b: ['Compute any products or sums that do not involve the root, e.g. ' + K('99 ' + Q.X() + ' 21 = 2079') + '.', 'Jo bina root ke hai use pehle compute karo, jaise 99×21=2079.', 'जो बिना root के है उसे पहले करो, जैसे 99×21=2079।'] },
      { t: ['Step 3: Isolate the root, then square or cube', 'Step 3: Root alag karke varg/ghan', 'चरण 3: root अलग करके वर्ग/घन'], b: ['Move everything else to the other side so the root is alone, then square it (or cube it for a cube root) to get the answer.', 'Baaki sab dusri taraf le jao, root akela karo, phir varg (cube root ho to ghan) karo.', 'बाकी सब दूसरी ओर, root अकेला, फिर वर्ग (घनमूल हो तो घन) करो।'] },
      { t: ['Step 4: Answer', 'Step 4: Uttar', 'चरण 4: उत्तर'], b: K(BOX(AC(out))) }
    ],
      ['Simplify the arithmetic, isolate the root, then raise to the matching power.', 'Arithmetic karo, root alag karo, phir uchit power lagao.', 'गणित करो, root अलग करो, फिर सही power लगाओ।'],
      ['Square root → square; cube root → cube. Match the power to the root.', 'Square root → varg; cube root → ghan.', 'square root → वर्ग; cube root → घन।']);
  }

  function cubeRootLinear(out) {
    return TRI([
      { t: U, b: ['Here a cube root of a known number multiplies a missing value inside a linear equation.', 'Yaha ek known number ka cube root ek missing value se guna ho raha hai (linear equation me).', 'यहाँ एक known नंबर का cube root एक missing value से गुणा हो रहा है (रैखिक समीकरण में)।'] },
      { t: ['Step 2: Evaluate the cube root', 'Step 2: Cube root nikaalo', 'चरण 2: cube root निकालो'], b: ['Simplify the cube root, e.g. ' + K(CRT('262144') + ' = 64') + ', so a term like ' + K(FR('1728', CRT('262144'))) + ' becomes ' + K(FR('1728', '64') + ' = 27') + '.', 'Cube root simplify karo, jaise ∛262144=64, to 1728/∛262144 = 1728/64 = 27.', 'cube root सरल करो, जैसे ∛262144=64, तो 1728/∛262144 = 27।'] },
      { t: ['Step 3: Solve the linear equation', 'Step 3: Linear equation hal', 'चरण 3: रैखिक समीकरण हल'], b: ['Now it is an ordinary equation in the unknown; move the constants across and divide.', 'Ab simple equation hai; constants hatao aur bhag do.', 'अब साधारण समीकरण है; constants हटाओ और भाग दो।'] },
      { t: ['Step 4: Answer', 'Step 4: Uttar', 'चरण 4: उत्तर'], b: K(BOX(AC(out))) }
    ],
      ['Replace each cube root by its value, then solve the simple equation.', 'Har cube root ko maan se badlo, phir simple equation hal karo.', 'हर cube root को मान से बदलो, फिर समीकरण हल करो।'],
      ['Cube roots of 6-digit perfect cubes are 2-digit — estimate from the first/last digits.', '6-ank perfect cube ka cube root 2-ank hota hai.', '6-अंक perfect cube का cube root 2-अंक होता है।']);
  }

  function varRatio(out) {
    return TRI([
      { t: U, b: ['A relation like ' + K(RT('y') + ' = k x') + ' is given, and we must find a ratio such as ' + K('x^{2}/y') + ' or ' + K('y/x^{2}') + '.', 'Ek relation √y=kx diya hai, aur x^2/y ya y/x^2 jaisa ratio nikaalna hai.', 'एक संबंध √y=kx दिया है, x²/y या y/x² जैसा अनुपात निकालना है।'] },
      { t: ['Step 2: Remove the root by squaring', 'Step 2: Varg karke root hatao', 'चरण 2: वर्ग करके root हटाओ'], b: ['Square both sides: ' + K(RT('y') + ' = k x \u21d2 y = k^{2} x^{2}') + ' (for a cube root, cube both sides instead).', 'Dono taraf varg: √y=kx ⇒ y=k^2 x^2 (cube root ho to ghan karo).', 'दोनों ओर वर्ग: √y=kx ⇒ y=k²x² (cube root हो तो घन)।'] },
      { t: ['Step 3: Form the asked ratio', 'Step 3: Maanga ratio banao', 'चरण 3: मांगा अनुपात'], b: ['Now ' + K('x^{2}/y = 1/k^{2}') + ' and ' + K('y/x^{2} = k^{2}') + '; the variables cancel and only the constant remains.', 'Ab x^2/y=1/k^2 aur y/x^2=k^2; variable cancel, sirf constant bachta hai.', 'अब x²/y=1/k² और y/x²=k²; variable cancel, केवल constant बचता है।'] },
      { t: ['Step 4: Answer', 'Step 4: Uttar', 'चरण 4: उत्तर'], b: K(BOX(AC(out))) }
    ],
      ['Square (or cube) to clear the root; the ratio becomes just 1/k^2 or k^2.', 'Varg/ghan karke root hatao; ratio sirf 1/k^2 ya k^2 ban jaata hai.', 'वर्ग/घन से root हटाओ; अनुपात 1/k² या k² बनता है।'],
      ['Notice x and y cancel, so the answer is a pure number, not an expression.', 'x aur y cancel ho jaate hain, answer ek number hota hai.', 'x और y cancel हो जाते हैं, उत्तर एक संख्या होता है।']);
  }

  Q.wrap({ q3_root_linear_missing: rootLinear, q3_cuberoot_linear: cubeRootLinear, q3_root_eq_var_ratio: varRatio });
  try { console.log('[mqs3-b] ready'); } catch (e) {}
})();
