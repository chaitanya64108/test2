/* my-questions-solutions2/mqs2-age8.js
   Part 2 Age batch 8 (final age): sum of squares + sum of cubes identities.
   Identities: a^2+b^2=(a+b)^2-2ab ; a^3+b^3=(a+b)^3-3ab(a+b) ; a^2-b^2=(a-b)(a+b) ; (a-b)^2=(a+b)^2-4ab.
   NAYA file; existing kuch modify nahi karta.
   Covers: q2_age_sum_squares, q2_age_sum_cubes
*/
(function () {
  'use strict';
  var Q = window.MQS2;
  if (!Q) { try { console.warn('[mqs2-age8] MQS2 missing'); } catch (e) {} return; }
  var K = Q.K, BOX = Q.BOX, X = Q.X, RT = Q.RT, TRI = Q.TRI;
  function AC(out) { return Q.ansClean(out); }
  var U = ['Step 1: Understand the question', 'Step 1: Sawaal samjho', 'चरण 1: प्रश्न समझो'];

  function sumSquaresSol(out) {
    var q = out.question.en, ii = Q.ints(q);
    if (/difference of squares/i.test(q)) {
      var D = ii[0]; var dm = q.match(/difference is ([0-9]+)/i) || q.match(/difference of ([0-9]+)/i); var d = dm ? parseInt(dm[1], 10) : 1;
      return TRI([
        { t: U, b: ['The difference of the squares of the ages is ' + D + ', and the ages differ by ' + d + '.', 'Umron ke vargon ka antar ' + D + ', aur umar me antar ' + d + '.', 'उम्रों के वर्गों का अंतर ' + D + ', और उम्र में अंतर ' + d + '।'] },
        { t: ['Step 2: Use the identity', 'Step 2: Identity lagao', 'चरण 2: सर्वसमिका'], b: K('a^{2} - b^{2} = (a-b)(a+b)') },
        { t: ['Step 3: Find the sum', 'Step 3: Sum nikaalo', 'चरण 3: योग निकालो'], b: K('(a+b) = ' + D + '/' + d + ' = ' + BOX(AC(out))) }
      ],
        ['Sum of ages = (difference of squares) / (difference of ages).', 'Umron ka yog = (vargon ka antar)/(umron ka antar).', 'उम्रों का योग = (वर्गों का अंतर)/(उम्रों का अंतर)।'],
        ['Factor a^2 - b^2 = (a-b)(a+b), then divide.', 'a^2-b^2=(a-b)(a+b), phir bhag do.', 'a²-b²=(a-b)(a+b), फिर भाग दो।']);
    }
    if (/product/i.test(q)) {
      var sm = q.match(/sum[^0-9]*([0-9]+)/i); var pm = q.match(/product[^0-9]*([0-9]+)/i); var S = parseInt(sm[1], 10), P = parseInt(pm[1], 10);
      return TRI([
        { t: U, b: ['The ages have sum ' + S + ' and product ' + P + '; find the sum of their squares.', 'Umron ka yog ' + S + ', product ' + P + '; vargon ka yog nikaalo.', 'उम्रों का योग ' + S + ', गुणनफल ' + P + '; वर्गों का योग निकालो।'] },
        { t: ['Step 2: Use the identity', 'Step 2: Identity lagao', 'चरण 2: सर्वसमिका'], b: K('a^{2}+b^{2} = (a+b)^{2} - 2ab') },
        { t: ['Step 3: Substitute', 'Step 3: Rakho', 'चरण 3: मान रखो'], b: K(S + '^{2} - 2' + X() + P + ' = ' + (S * S) + ' - ' + (2 * P) + ' = ' + BOX(AC(out))) }
      ],
        ['Sum of squares = (sum)^2 - 2(product).', 'Vargon ka yog = (yog)^2 - 2(product).', 'वर्गों का योग = (योग)² - 2(गुणनफल)।'],
        ['Remember (a+b)^2 = a^2 + b^2 + 2ab, so a^2+b^2 = (a+b)^2 - 2ab.', '(a+b)^2 = a^2+b^2+2ab yaad rakho.', '(a+b)² = a²+b²+2ab याद रखो।']);
    }
    var gm = q.match(/one age is ([0-9]+)/i);
    if (gm) {
      var SS = ii[0]; var a = parseInt(gm[1], 10);
      return TRI([
        { t: U, b: ['The sum of the squares of the two ages is ' + SS + ' and one age is ' + a + '.', 'Do umron ke vargon ka yog ' + SS + ', ek umar ' + a + '.', 'दो उम्रों के वर्गों का योग ' + SS + ', एक उम्र ' + a + '।'] },
        { t: ['Step 2: Isolate the other square', 'Step 2: Doosra varg alag karo', 'चरण 2: दूसरा वर्ग अलग करो'], b: K('b^{2} = ' + SS + ' - ' + a + '^{2} = ' + (SS - a * a)) },
        { t: ['Step 3: Take the square root', 'Step 3: Vargmool lo', 'चरण 3: वर्गमूल लो'], b: K('b = ' + RT(SS - a * a) + ' = ' + BOX(AC(out))) }
      ],
        ['Other age = sqrt(sum of squares - known age^2).', 'Doosri umar = sqrt(vargon ka yog - di umar^2).', 'दूसरी उम्र = √(वर्गों का योग - दी उम्र²)।'],
        ['Subtract the known square, then square-root the rest.', 'Di umar ka varg ghatao, phir vargmool lo.', 'दी उम्र का वर्ग घटाओ, फिर वर्गमूल लो।']);
    }
    var dm2 = q.match(/difference is ([0-9]+)/i); var SS2 = ii[0]; var d2 = dm2 ? parseInt(dm2[1], 10) : 0;
    return TRI([
      { t: U, b: ['The sum of the squares of the ages is ' + SS2 + ' and the ages differ by ' + d2 + '.', 'Umron ke vargon ka yog ' + SS2 + ', umar me antar ' + d2 + '.', 'उम्रों के वर्गों का योग ' + SS2 + ', उम्र में अंतर ' + d2 + '।'] },
      { t: ['Step 2: Set up with one variable', 'Step 2: Ek variable me likho', 'चरण 2: एक चर में'], b: K('b^{2} + (b + ' + d2 + ')^{2} = ' + SS2) },
      { t: ['Step 3: Solve', 'Step 3: Hal karo', 'चरण 3: हल करो'], b: ['Solving this gives the ages ' + K(BOX(AC(out))) + '.', 'Solve karne par umar ' + K(BOX(AC(out))) + '.', 'Solve करने पर उम्र ' + K(BOX(AC(out))) + '।'] }
    ],
      ['Let the smaller age be b and the other b + difference, then solve.', 'Choti umar b, doosri b+antar, phir solve.', 'छोटी उम्र b, दूसरी b+अंतर, फिर हल करो।'],
      ['Write both ages with one variable using the difference, then expand.', 'Antar se dono umar ek variable me likho.', 'अंतर से दोनों उम्र एक चर में लिखो।']);
  }

  function sumCubesSol(out) {
    var q = out.question.en, ii = Q.ints(q);
    if (/sum of cubes/i.test(q)) {
      var scm = q.match(/sum of cubes is ([0-9]+)/i); var SC = parseInt(scm[1], 10);
      var saM = q.match(/sum of ages is ([0-9]+)/i); var SA = saM ? parseInt(saM[1], 10) : 0;
      var ab = ((SA * SA * SA) - SC) / (3 * SA);
      if (/product/i.test(q)) {
        return TRI([
          { t: U, b: ['The sum of the cubes is ' + SC + ' and the sum of the ages is ' + SA + '; find the product.', 'Cubes ka yog ' + SC + ', umron ka yog ' + SA + '; product nikaalo.', 'घनों का योग ' + SC + ', उम्रों का योग ' + SA + '; गुणनफल निकालो।'] },
          { t: ['Step 2: Use the identity', 'Step 2: Identity lagao', 'चरण 2: सर्वसमिका'], b: K('a^{3}+b^{3} = (a+b)^{3} - 3ab(a+b)') },
          { t: ['Step 3: Solve for ab', 'Step 3: ab nikaalo', 'चरण 3: ab निकालो'], b: K(SC + ' = ' + (SA * SA * SA) + ' - 3ab' + X() + SA) + ', so ' + K('ab = ' + BOX(AC(out))) }
        ],
          ['Product = ((sum)^3 - (sum of cubes)) / (3 x sum).', 'Product = ((yog)^3 - cubes ka yog)/(3 x yog).', 'गुणनफल = ((योग)³ - घनों का योग)/(3 × योग)।'],
          ['Plug the sum into the identity and solve for ab.', 'Yog ko identity me daalo aur ab nikaalo.', 'योग को identity में डालो और ab निकालो।']);
      }
      return TRI([
        { t: U, b: ['The sum of the cubes is ' + SC + ' and the sum of the ages is ' + SA + '; find the difference.', 'Cubes ka yog ' + SC + ', umron ka yog ' + SA + '; antar nikaalo.', 'घनों का योग ' + SC + ', उम्रों का योग ' + SA + '; अंतर निकालो।'] },
        { t: ['Step 2: Find the product first', 'Step 2: Pehle product', 'चरण 2: पहले गुणनफल'], b: K('ab = ((a+b)^{3} - (a^{3}+b^{3}))/(3(a+b)) = ' + ab) },
        { t: ['Step 3: Difference', 'Step 3: Antar', 'चरण 3: अंतर'], b: K('(a-b) = ' + RT('(a+b)^{2} - 4ab') + ' = ' + BOX(AC(out))) }
      ],
        ['Get ab from the cube identity, then use (a-b)^2 = (a+b)^2 - 4ab.', 'Cube identity se ab, phir (a-b)^2=(a+b)^2-4ab.', 'घन identity से ab, फिर (a-b)²=(a+b)²-4ab।'],
        ['Two identities chain together: first product, then difference.', 'Do identity: pehle product, phir antar.', 'दो identity: पहले गुणनफल, फिर अंतर।']);
    }
    var am = q.match(/ages are[^0-9]*([0-9]+)[^0-9]+and[^0-9]*([0-9]+)/i);
    if (am || /difference of cubes/i.test(q)) {
      var A = am ? parseInt(am[1], 10) : ii[0], B = am ? parseInt(am[2], 10) : ii[1];
      return TRI([
        { t: U, b: ['The ages are ' + A + ' and ' + B + '; find the difference of their cubes.', 'Umar ' + A + ' aur ' + B + '; inke cubes ka antar nikaalo.', 'उम्र ' + A + ' और ' + B + '; इनके घनों का अंतर निकालो।'] },
        { t: ['Step 2: Cube each age', 'Step 2: Har umar ka ghan', 'चरण 2: हर उम्र का घन'], b: K(A + '^{3} - ' + B + '^{3} = ' + (A * A * A) + ' - ' + (B * B * B)) },
        { t: ['Step 3: Subtract', 'Step 3: Ghatao', 'चरण 3: घटाओ'], b: K('= ' + BOX(AC(out))) }
      ],
        ['Cube both ages and subtract.', 'Dono ka ghan karke ghatao.', 'दोनों का घन करके घटाओ।'],
        ['Just compute a^3 and b^3, then take the difference.', 'a^3 aur b^3 nikaalo, phir antar.', 'a³ और b³ निकालो, फिर अंतर।']);
    }
    var spm = q.match(/a\+b *= *([0-9]+)/i); var abm = q.match(/ab *= *([0-9]+)/i);
    if (spm && abm) {
      var S = parseInt(spm[1], 10), P = parseInt(abm[1], 10);
      return TRI([
        { t: U, b: ['Given a + b = ' + S + ' and ab = ' + P + ', find a^{3} + b^{3}.', 'Diya a+b=' + S + ', ab=' + P + '; a^3+b^3 nikaalo.', 'दिया a+b=' + S + ', ab=' + P + '; a³+b³ निकालो।'] },
        { t: ['Step 2: Use the identity', 'Step 2: Identity lagao', 'चरण 2: सर्वसमिका'], b: K('a^{3}+b^{3} = (a+b)^{3} - 3ab(a+b)') },
        { t: ['Step 3: Substitute', 'Step 3: Rakho', 'चरण 3: मान रखो'], b: K(S + '^{3} - 3' + X() + P + X() + S + ' = ' + (S * S * S) + ' - ' + (3 * P * S) + ' = ' + BOX(AC(out))) }
      ],
        ['a^3+b^3 = (a+b)^3 - 3ab(a+b).', 'a^3+b^3 = (a+b)^3 - 3ab(a+b).', 'a³+b³ = (a+b)³ - 3ab(a+b)।'],
        ['Substitute the given sum and product into the cube identity.', 'Diye yog aur product ko identity me daalo.', 'दिए योग और product को identity में डालो।']);
    }
    var sm = q.match(/sum[^0-9]*([0-9]+)/i), pm = q.match(/product[^0-9]*([0-9]+)/i);
    var S2 = sm ? parseInt(sm[1], 10) : ii[0], P2 = pm ? parseInt(pm[1], 10) : ii[1];
    return TRI([
      { t: U, b: ['The ages have sum ' + S2 + ' and product ' + P2 + '; find their positive difference.', 'Umron ka yog ' + S2 + ', product ' + P2 + '; positive antar nikaalo.', 'उम्रों का योग ' + S2 + ', गुणनफल ' + P2 + '; धनात्मक अंतर निकालो।'] },
      { t: ['Step 2: Use the identity', 'Step 2: Identity lagao', 'चरण 2: सर्वसमिका'], b: K('(a-b)^{2} = (a+b)^{2} - 4ab') },
      { t: ['Step 3: Substitute', 'Step 3: Rakho', 'चरण 3: मान रखो'], b: K('(a-b) = ' + RT(S2 + '^{2} - 4' + X() + P2) + ' = ' + RT(S2 * S2 - 4 * P2) + ' = ' + BOX(AC(out))) }
    ],
      ['Difference = sqrt((sum)^2 - 4(product)).', 'Antar = sqrt((yog)^2 - 4(product)).', 'अंतर = √((योग)² - 4(गुणनफल))।'],
      ['(a-b)^2 = (a+b)^2 - 4ab; take the square root.', '(a-b)^2=(a+b)^2-4ab; vargmool lo.', '(a-b)²=(a+b)²-4ab; वर्गमूल लो।']);
  }

  Q.wrap({ q2_age_sum_squares: sumSquaresSol, q2_age_sum_cubes: sumCubesSol });
  try { console.log('[mqs2-age8] ready'); } catch (e) {}
})();
