/* my-questions-solutions2/mqs2-age6.js
   Part 2 Age batch 6: product-is-perfect-square, product-is-perfect-cube.
   Branches: find-product, equal split, ratio split, one-age-given, difference (quadratic).
   NAYA file; existing kuch modify nahi karta.
   Covers: q2_age_prod_sq, q2_age_prod_cube
*/
(function () {
  'use strict';
  var Q = window.MQS2;
  if (!Q) { try { console.warn('[mqs2-age6] MQS2 missing'); } catch (e) {} return; }
  var K = Q.K, BOX = Q.BOX, X = Q.X, TRI = Q.TRI, isqrt = Q.isqrt, icbrt = Q.icbrt;
  function AC(out) { return Q.ansClean(out); }
  var U = ['Step 1: Understand the question', 'Step 1: Sawaal samjho', 'चरण 1: प्रश्न समझो'];

  function prodSol(out, kind) {
    var q = out.question.en, ii = Q.ints(q);
    if (/product/i.test(q) && /find product|the product|find .*product/i.test(q)) {
      var q2 = q.replace(/after ([0-9]+)/i, ' ').replace(/([0-9]+) years/i, ' ');
      var jj = Q.ints(q2); var a0 = jj[0], b0 = jj[1];
      return TRI([
        { t: U, b: ['The two ages are ' + a0 + ' and ' + b0 + '. Find their product.', 'Do umar ' + a0 + ' aur ' + b0 + '. Inka product nikaalo.', 'दो उम्र ' + a0 + ' और ' + b0 + '। इनका गुणनफल निकालो।'] },
        { t: ['Step 2: Multiply', 'Step 2: Guna karo', 'चरण 2: गुणा करो'], b: K(a0 + X() + b0 + ' = ' + BOX(AC(out))) }
      ],
        ['Product = first age ' + X() + ' second age.', 'Product = pehli umar ' + X() + ' doosri umar.', 'गुणनफल = पहली उम्र ' + X() + ' दूसरी उम्र।'],
        ['Just multiply the two ages together.', 'Bas dono umar ko guna karo.', 'बस दोनों उम्र गुणा करो।']);
    }
    var pM = q.match(/product[a-z ]*?([0-9]+)/i); var P = pM ? parseInt(pM[1], 10) : ii[0];
    if (/equal/i.test(q)) {
      var cnt = 3; var each = icbrt(P);
      return TRI([
        { t: U, b: ['The product of ' + cnt + ' equal ages is ' + P + '.', cnt + ' barabar umron ka product ' + P + '.', cnt + ' बराबर उम्रों का गुणनफल ' + P + '।'] },
        { t: ['Step 2: Take the cube root', 'Step 2: Ghanmool lo', 'चरण 2: घनमूल लो'], b: K(Q.CRT(P) + ' = ' + BOX(AC(out))) }
      ],
        ['Each age = cube root of the product.', 'Har umar = product ka cube root.', 'हर उम्र = गुणनफल का घनमूल।'],
        ['Three equal factors means take the cube root.', 'Teen barabar factor = cube root.', 'तीन बराबर गुणनखंड = घनमूल।']);
    }
    if (/ratio/i.test(q)) {
      var rm = q.match(/([0-9]+) *: *([0-9]+)/); var a = parseInt(rm[1], 10), b = parseInt(rm[2], 10); var k = isqrt(P / (a * b));
      return TRI([
        { t: U, b: ['The ages are in ratio ' + a + ':' + b + ' with product ' + P + '.', 'Umar ratio ' + a + ':' + b + ', product ' + P + '.', 'उम्र अनुपात ' + a + ':' + b + ', गुणनफल ' + P + '।'] },
        { t: ['Step 2: Take ages as ' + a + 'k and ' + b + 'k', 'Step 2: Umar ' + a + 'k aur ' + b + 'k', 'चरण 2: उम्र ' + a + 'k और ' + b + 'k'], b: K('(' + a + 'k)(' + b + 'k) = ' + (a * b) + 'k^{2} = ' + P) + ', so ' + K('k = ' + k) },
        { t: ['Step 3: The ages', 'Step 3: Umar', 'चरण 3: उम्र'], b: K((a * k) + ', \\; ' + (b * k)) + ' → ' + K(BOX(AC(out))) }
      ],
        ['Write ages as a' + X() + 'k and b' + X() + 'k, then solve for k.', 'Umar a' + X() + 'k, b' + X() + 'k lo, k nikaalo.', 'उम्र ak, bk लो, k निकालो।'],
        ['Let one part be k; the product gives a square in k.', 'Ek part k; product me k ka square aata hai.', 'एक भाग k; गुणनफल में k² आता है।']);
    }
    var gm = q.match(/(?:one age is|child is) ([0-9]+)/i);
    if (gm) {
      var given = parseInt(gm[1], 10);
      return TRI([
        { t: U, b: ['The product of the two ages is ' + P + ' and one age is ' + given + '.', 'Do umron ka product ' + P + ', ek umar ' + given + '.', 'दो उम्रों का गुणनफल ' + P + ', एक उम्र ' + given + '।'] },
        { t: ['Step 2: Divide', 'Step 2: Bhag do', 'चरण 2: भाग दो'], b: K(P + '/' + given + ' = ' + BOX(AC(out))) }
      ],
        ['Other age = product / known age.', 'Doosri umar = product / di umar.', 'दूसरी उम्र = गुणनफल / दी उम्र।'],
        ['Divide the product by the known age.', 'Product ko di umar se bhag do.', 'गुणनफल को दी उम्र से भाग दो।']);
    }
    var dM = q.match(/([0-9]+) years older/i) || q.match(/difference is ([0-9]+)/i) || q.match(/difference of ([0-9]+)/i); var d = dM ? parseInt(dM[1], 10) : 0;
    return TRI([
      { t: U, b: ['The product of the two ages is ' + P + ' and their difference is ' + d + '.', 'Do umron ka product ' + P + ', difference ' + d + '.', 'दो उम्रों का गुणनफल ' + P + ', अंतर ' + d + '।'] },
      { t: ['Step 2: Set up the equation', 'Step 2: Samikaran banao', 'चरण 2: समीकरण बनाओ'], b: K('y(y + ' + d + ') = ' + P) + ', i.e. ' + K('y^{2} + ' + d + 'y - ' + P + ' = 0') },
      { t: ['Step 3: Solve for the ages', 'Step 3: Umar nikaalo', 'चरण 3: उम्र निकालो'], b: ['Solving gives the ages: ' + K(BOX(AC(out))) + '.', 'Solve karne par umar: ' + K(BOX(AC(out))) + '.', 'Solve करने पर उम्र: ' + K(BOX(AC(out))) + '।'] }
    ],
      ['Let the younger age be y; then y(y + d) = product.', 'Choti umar y; y(y+d) = product.', 'छोटी उम्र y; y(y+d) = गुणनफल।'],
      ['Form a quadratic from product and difference, then solve.', 'Product aur difference se quadratic, phir solve.', 'गुणनफल और अंतर से quadratic, फिर solve।']);
  }
  function solProdSq(out) { return prodSol(out, 'sq'); }
  function solProdCube(out) { return prodSol(out, 'cube'); }

  Q.wrap({ q2_age_prod_sq: solProdSq, q2_age_prod_cube: solProdCube });
  try { console.log('[mqs2-age6] ready'); } catch (e) {}
})();
