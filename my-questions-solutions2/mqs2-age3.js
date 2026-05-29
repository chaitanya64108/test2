/* my-questions-solutions2/mqs2-age3.js
   Part 2 Age batch 3: birth year, one-age-is-root-of-other, difference-is-a-root.
   Dynamic per-sample full worked solutions. NAYA file; existing kuch modify nahi karta.
   Covers: q2_age_birth_year, q2_age_root_of_other, q2_age_diff_root
*/
(function () {
  'use strict';
  var Q = window.MQS2;
  if (!Q) { try { console.warn('[mqs2-age3] MQS2 missing'); } catch (e) {} return; }
  var K = Q.K, RT = Q.RT, CRT = Q.CRT, BOX = Q.BOX, X = Q.X, TRI = Q.TRI, isqrt = Q.isqrt, icbrt = Q.icbrt;
  function AC(out) { return Q.ansClean(out); }
  var U = ['Step 1: Understand the question', 'Step 1: Sawaal samjho', 'चरण 1: प्रश्न समझो'];
  function rootOf(r) { return r.cube ? icbrt(r.inner) : isqrt(Q.evalSum(r.inner)); }
  function rootTex(r) { return r.cube ? CRT(r.inner) : RT(r.inner); }

  function solBirth(out) {
    var q = out.question.en, rad = Q.radicands(q), ii = Q.ints(q);
    var year = null, i; for (i = 0; i < ii.length; i++) { if (ii[i] >= 1000) { year = ii[i]; break; } }
    var age, ageBody;
    if (rad.length) { age = rootOf(rad[0]); ageBody = K(rootTex(rad[0]) + ' = ' + age) + ' years'; }
    else { age = null; for (i = 0; i < ii.length; i++) { if (ii[i] !== year) { age = ii[i]; break; } } ageBody = ['Age = ' + age + ' years.', 'Age = ' + age + '.', 'उम्र = ' + age + '।']; }
    return TRI([
      { t: U, b: ['In year ' + year + ' the age is given. Birth year = year - age.', 'Saal ' + year + ' me umar di hai. Birth year = saal - umar.', 'वर्ष ' + year + ' में उम्र दी है। जन्म वर्ष = वर्ष - उम्र।'] },
      { t: ['Step 2: Find the age', 'Step 2: Umar nikaalo', 'चरण 2: उम्र निकालो'], b: ageBody },
      { t: ['Step 3: Subtract from the year', 'Step 3: Saal me se ghatao', 'चरण 3: वर्ष में से घटाओ'], b: K('(' + year + ' - ' + age + ') = ' + BOX(AC(out))) }
    ],
      ['Birth year = ' + year + ' - age = ' + K(year + ' - ' + age) + '.', 'Birth year = ' + year + ' - umar.', 'जन्म वर्ष = ' + year + ' - उम्र।'],
      ['Subtract the age from the given year.', 'Diye saal me se umar ghatao.', 'दिए वर्ष में से उम्र घटाओ।']);
  }

  function solRootOther(out) {
    var q = out.question.en, rad = Q.radicands(q);
    var Xn = parseInt(rad[0].inner, 10), small = rootOf(rad[0]), rt = rootTex(rad[0]);
    var op = /ratio/i.test(q) ? 'ratio' : (/sum/i.test(q) ? 'sum' : 'diff');
    var s3, sc;
    if (op === 'ratio') { s3 = { t: ['Step 3: Form the ratio', 'Step 3: Ratio banao', 'चरण 3: अनुपात बनाओ'], b: K(Xn + ':' + small + ' = ' + BOX(AC(out))) }; sc = ['Ratio = ' + K(Xn + ':' + small) + ', simplified.', 'Ratio ' + K(Xn + ':' + small) + ' ko simplify karo.', 'अनुपात ' + K(Xn + ':' + small) + ' सरल करो।']; }
    else if (op === 'sum') { s3 = { t: ['Step 3: Add', 'Step 3: Jodo', 'चरण 3: जोड़ो'], b: K('(' + Xn + ' + ' + small + ') = ' + BOX(AC(out))) }; sc = ['Sum = ' + K(Xn + ' + ' + small) + '.', 'Sum = ' + K(Xn + ' + ' + small) + '.', 'योग = ' + K(Xn + ' + ' + small) + '।']; }
    else { s3 = { t: ['Step 3: Subtract', 'Step 3: Ghatao', 'चरण 3: घटाओ'], b: K('(' + Xn + ' - ' + small + ') = ' + BOX(AC(out))) }; sc = ['Difference = ' + K(Xn + ' - ' + small) + '.', 'Difference = ' + K(Xn + ' - ' + small) + '.', 'अंतर = ' + K(Xn + ' - ' + small) + '।']; }
    return TRI([
      { t: U, b: ['One age is ' + Xn + ' and the other is ' + K(rt) + '.', 'Ek umar ' + Xn + ' hai, doosri ' + K(rt) + '.', 'एक उम्र ' + Xn + ' है, दूसरी ' + K(rt) + '।'] },
      { t: ['Step 2: Evaluate the root', 'Step 2: Root nikaalo', 'चरण 2: मूल निकालो'], b: K(rt + ' = ' + small) },
      s3
    ], sc,
      ['First simplify the root, then combine.', 'Pehle root, phir combine karo.', 'पहले मूल, फिर जोड़ो/घटाओ।']);
  }

  function solDiffRoot(out) {
    var q = out.question.en, rad = Q.radicands(q);
    var rv = rootOf(rad[0]), rt = rootTex(rad[0]);
    if (/sum/i.test(q)) {
      var ii = Q.ints(q), sum = null, base = parseInt(rad[0].inner, 10), i;
      for (i = 0; i < ii.length; i++) { if (ii[i] !== base) { sum = ii[i]; break; } }
      var wantOlder = /older/i.test(q);
      return TRI([
        { t: U, b: ['Sum of ages is ' + sum + ' and their difference is ' + K(rt + ' = ' + rv) + '.', 'Umron ka sum ' + sum + ', difference ' + K(rt + ' = ' + rv) + '.', 'उम्रों का योग ' + sum + ', अंतर ' + K(rt + ' = ' + rv) + '।'] },
        { t: ['Step 2: Sum-difference rule', 'Step 2: Sum-difference niyam', 'चरण 2: योग-अंतर नियम'], b: ['older = (sum + diff)/2, younger = (sum - diff)/2.', 'older=(sum+diff)/2, younger=(sum-diff)/2.', 'बड़ी=(योग+अंतर)/2, छोटी=(योग-अंतर)/2।'] },
        { t: ['Step 3: Compute', 'Step 3: Compute', 'चरण 3: गणना'], b: K('(' + sum + (wantOlder ? ' + ' : ' - ') + rv + ')/2 = ' + BOX(AC(out))) }
      ],
        [(wantOlder ? 'Older' : 'Younger') + ' = ' + K('(' + sum + (wantOlder ? '+' : '-') + rv + ')/2') + '.', (wantOlder ? 'Badi' : 'Choti') + ' = (sum' + (wantOlder ? '+' : '-') + 'diff)/2.', (wantOlder ? 'बड़ी' : 'छोटी') + ' = (योग' + (wantOlder ? '+' : '-') + 'अंतर)/2।'],
        ['Find the root first, then use sum and difference.', 'Pehle root, phir sum-difference.', 'पहले मूल, फिर योग-अंतर।']);
    }
    if (/ratio/i.test(q)) {
      var rm = q.match(/([0-9]+) *: *([0-9]+)/); var a = rm ? parseInt(rm[1], 10) : 1, b = rm ? parseInt(rm[2], 10) : 1;
      var kk = rv / (b - a);
      return TRI([
        { t: U, b: ['Ages are in ratio ' + a + ':' + b + ' and their difference is ' + K(rt + ' = ' + rv) + '.', 'Ratio ' + a + ':' + b + ', difference ' + K(rt + ' = ' + rv) + '.', 'अनुपात ' + a + ':' + b + ', अंतर ' + K(rt + ' = ' + rv) + '।'] },
        { t: ['Step 2: One part value', 'Step 2: Ek part', 'चरण 2: एक भाग'], b: K('(' + b + ' - ' + a + ')k = ' + rv) + ', so ' + K('k = ' + kk) },
        { t: ['Step 3: Younger age', 'Step 3: Choti umar', 'चरण 3: छोटी उम्र'], b: K('(' + a + X() + kk + ') = ' + BOX(AC(out))) }
      ],
        ['One part k = diff/(b - a) = ' + kk + '; younger = ' + a + 'k.', 'k = diff/(b-a) = ' + kk + '; choti = ' + a + 'k.', 'k = अंतर/(b-a) = ' + kk + '; छोटी = ' + a + 'k।'],
        ['Difference equals (b - a) parts.', 'Difference = (b-a) parts.', 'अंतर = (b-a) भाग।']);
    }
    if (/after/i.test(q)) {
      return TRI([
        { t: U, b: ['The present difference of ages is ' + K(rt + ' = ' + rv) + '.', 'Abhi umron ka difference ' + K(rt + ' = ' + rv) + '.', 'अभी उम्रों का अंतर ' + K(rt + ' = ' + rv) + '।'] },
        { t: ['Step 2: Key idea', 'Step 2: Mukhya baat', 'चरण 2: मुख्य बात'], b: ['Both ages grow equally, so the difference never changes.', 'Dono umar barabar badhti hain, difference same rehta hai.', 'दोनों उम्र बराबर बढ़ती हैं, अंतर वही रहता है।'] },
        { t: ['Step 3: Answer', 'Step 3: Uttar', 'चरण 3: उत्तर'], b: K(BOX(AC(out))) + ' years' }
      ],
        ['Age difference is invariant over time.', 'Difference time ke saath nahi badalta.', 'अंतर समय के साथ नहीं बदलता।'],
        ['Adding the same years to both keeps the gap same.', 'Dono me same saal jodne se gap same.', 'दोनों में समान वर्ष जोड़ने पर अंतर वही।']);
    }
    return TRI([
      { t: U, b: ['The difference of ages is given as ' + K(rt) + '.', 'Umron ka difference ' + K(rt) + ' diya hai.', 'उम्रों का अंतर ' + K(rt) + ' दिया है।'] },
      { t: ['Step 2: Evaluate the root', 'Step 2: Root nikaalo', 'चरण 2: मूल निकालो'], b: K(rt + ' = ' + BOX(AC(out))) }
    ],
      [K(rt) + ' = ' + rv + '.', K(rt) + ' = ' + rv + '.', K(rt) + ' = ' + rv + '।'],
      ['Just simplify the root.', 'Bas root simplify karo.', 'बस मूल सरल करो।']);
  }

  Q.wrap({ q2_age_birth_year: solBirth, q2_age_root_of_other: solRootOther, q2_age_diff_root: solDiffRoot });
  try { console.log('[mqs2-age3] ready'); } catch (e) {}
})();
