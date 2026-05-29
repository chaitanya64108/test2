/* my-questions-solutions2/mqs2-age4.js
   Part 2 Age batch 4: average-is-a-root, one-age-square-of-other, one-age-cube-of-other.
   Dynamic per-sample worked solutions. NAYA file; existing kuch modify nahi karta.
   Covers: q2_age_avg_root, q2_age_sq_of_other, q2_age_cube_of_other
*/
(function () {
  'use strict';
  var Q = window.MQS2;
  if (!Q) { try { console.warn('[mqs2-age4] MQS2 missing'); } catch (e) {} return; }
  var K = Q.K, RT = Q.RT, CRT = Q.CRT, BOX = Q.BOX, X = Q.X, TRI = Q.TRI, isqrt = Q.isqrt, icbrt = Q.icbrt;
  function AC(out) { return Q.ansClean(out); }
  var U = ['Step 1: Understand the question', 'Step 1: Sawaal samjho', 'चरण 1: प्रश्न समझो'];
  function rootOf(r) { return r.cube ? icbrt(r.inner) : isqrt(Q.evalSum(r.inner)); }
  function rootTex(r) { return r.cube ? CRT(r.inner) : RT(r.inner); }

  function solAvg(out) {
    var q = out.question.en, rad = Q.radicands(q), ii = Q.ints(q), i;
    var nM = q.match(/(?:of|for) ([0-9]+)/); var n = nM ? parseInt(nM[1], 10) : 0;
    var afterM = q.match(/after ([0-9]+)/);
    var rt = rad.length ? rootTex(rad[0]) : null;
    var avg = rad.length ? rootOf(rad[0]) : null;
    if (avg === null) {
      var used = {}; if (n) used[n] = 1; if (afterM) used[parseInt(afterM[1], 10)] = 1;
      var gt0 = q.match(/total of [0-9]+ [a-z]+ is ([0-9]+)/i);
      if (gt0) { used[parseInt(gt0[1], 10)] = 1; var sc0 = q.match(/total of ([0-9]+)/i); if (sc0) used[parseInt(sc0[1], 10)] = 1; }
      for (i = 0; i < ii.length; i++) { if (!used[ii[i]]) { avg = ii[i]; break; } }
    }
    var avgBody = rad.length ? K(rt + ' = ' + avg) : ['Average = ' + avg + '.', 'Average = ' + avg + '.', 'औसत = ' + avg + '।'];
    if (afterM) {
      var N = parseInt(afterM[1], 10);
      return TRI([
        { t: U, b: ['Current average age of ' + n + ' people is given; each grows by ' + N + ' years.', n + ' logo ka average umar di hai; har ek ' + N + ' saal badhega.', n + ' लोगों का औसत दिया है; हर एक ' + N + ' साल बढ़ेगा।'] },
        { t: ['Step 2: Find the average', 'Step 2: Average nikaalo', 'चरण 2: औसत निकालो'], b: avgBody },
        { t: ['Step 3: Add the years', 'Step 3: Saal jodo', 'चरण 3: वर्ष जोड़ो'], b: K('(' + avg + ' + ' + N + ') = ' + BOX(AC(out))) }
      ],
        ['New average = old average + ' + N + '.', 'Naya average = purana + ' + N + '.', 'नया औसत = पुराना + ' + N + '।'],
        ['Everyone ages equally, so the average rises by the same years.', 'Sab barabar badhte hain, average utna hi badhta hai.', 'सब बराबर बढ़ते हैं, औसत उतना ही बढ़ता है।']);
    }
    if (/fourth|fifth/i.test(q)) {
      var gt = q.match(/total of [0-9]+ [a-z]+ is ([0-9]+)/i); var givenTotal = gt ? parseInt(gt[1], 10) : 0;
      var totalAll = avg * n;
      return TRI([
        { t: U, b: ['Average of ' + n + ' members is ' + (rad.length ? K(rt + ' = ' + avg) : avg) + '; the total of the others is given.', n + ' members ka average ' + avg + '; baaki ka total diya hai.', n + ' सदस्यों का औसत ' + avg + '; बाकी का योग दिया है।'] },
        { t: ['Step 2: Total of all', 'Step 2: Sabka total', 'चरण 2: सबका योग'], b: K(avg + X() + n + ' = ' + totalAll) },
        { t: ['Step 3: Subtract the known total', 'Step 3: Diya total ghatao', 'चरण 3: दिया योग घटाओ'], b: K('(' + totalAll + ' - ' + givenTotal + ') = ' + BOX(AC(out))) }
      ],
        ['Missing age = total of all - total of the rest.', 'Missing umar = sabka total - baaki ka total.', 'गायब उम्र = सबका योग - बाकी का योग।'],
        ['Average times count gives the grand total.', 'Average × count = grand total.', 'औसत × संख्या = कुल योग।']);
    }
    return TRI([
      { t: U, b: ['The average age of ' + n + ' people is ' + (rad.length ? K(rt) : avg) + '. Find the total age.', n + ' logo ka average ' + (rad.length ? K(rt) : avg) + '. Total nikaalo.', n + ' लोगों का औसत ' + (rad.length ? K(rt) : avg) + '। कुल योग निकालो।'] },
      { t: ['Step 2: Find the average', 'Step 2: Average nikaalo', 'चरण 2: औसत निकालो'], b: avgBody },
      { t: ['Step 3: Multiply by the count', 'Step 3: Count se guna', 'चरण 3: संख्या से गुणा'], b: K(avg + X() + n + ' = ' + BOX(AC(out))) }
    ],
      ['Total = average ' + X() + ' number of people.', 'Total = average ' + X() + ' logo ki sankhya.', 'कुल = औसत ' + X() + ' लोगों की संख्या।'],
      ['Simplify the root to get the average, then multiply.', 'Root se average, phir guna.', 'मूल से औसत, फिर गुणा।']);
  }

  function powerSol(out, p) {
    var q = out.question.en;
    var q2 = q.split('^2').join('').split('^3').join('').replace(/after ([0-9]+)/, ' ').replace(/([0-9]+) years ago/, ' ');
    var ii = Q.ints(q2); var base = ii.length ? Math.min.apply(null, ii) : 0;
    var val = Math.pow(base, p);
    var rel = (p === 2 ? 'square' : 'cube'), relH = (p === 2 ? 'वर्ग' : 'घन');
    var afterM = q.match(/after ([0-9]+)/), ago = /ago/i.test(q);
    var isSum = /sum/i.test(q), isDiff = /difference/i.test(q) || /[A-Za-z] *- *[A-Za-z]/.test(q);
    var s3;
    if (afterM && isSum) {
      var N = parseInt(afterM[1], 10);
      s3 = { t: ['Step 3: Sum after ' + N + ' years', 'Step 3: ' + N + ' saal baad sum', 'चरण 3: ' + N + ' वर्ष बाद योग'], b: K('(' + base + ' + ' + N + ') + (' + val + ' + ' + N + ') = ' + BOX(AC(out))) };
    } else if ((afterM || ago) && isDiff) {
      s3 = { t: ['Step 3: Difference (unchanged)', 'Step 3: Difference (same)', 'चरण 3: अंतर (वही)'], b: K('(' + val + ' - ' + base + ') = ' + BOX(AC(out))) + ' — difference stays the same over time' };
    } else if (isSum) {
      s3 = { t: ['Step 3: Add the two ages', 'Step 3: Dono jodo', 'चरण 3: दोनों जोड़ो'], b: K('(' + val + ' + ' + base + ') = ' + BOX(AC(out))) };
    } else if (isDiff) {
      s3 = { t: ['Step 3: Subtract the smaller', 'Step 3: Chota ghatao', 'चरण 3: छोटा घटाओ'], b: K('(' + val + ' - ' + base + ') = ' + BOX(AC(out))) };
    } else {
      s3 = { t: ['Step 3: That is the larger age', 'Step 3: Yahi badi umar', 'चरण 3: यही बड़ी उम्र'], b: K(base + '^{' + p + '} = ' + BOX(AC(out))) };
    }
    return TRI([
      { t: U, b: ['One age is the ' + rel + ' of the other. The smaller age is ' + base + '.', 'Ek umar doosri ka ' + rel + ' hai. Choti umar ' + base + '.', 'एक उम्र दूसरी का ' + relH + ' है। छोटी उम्र ' + base + '।'] },
      { t: ['Step 2: Find the larger age', 'Step 2: Badi umar nikaalo', 'चरण 2: बड़ी उम्र निकालो'], b: K(base + '^{' + p + '} = ' + val) },
      s3
    ],
      ['Larger age = ' + base + '^{' + p + '} = ' + val + '; then apply the asked operation.', 'Badi umar = ' + base + '^{' + p + '} = ' + val + '; phir poocha gaya kaam karo.', 'बड़ी उम्र = ' + base + '^{' + p + '} = ' + val + '; फिर पूछा काम करो।'],
      ['First raise the smaller age to the power, then combine.', 'Pehle choti umar ki power, phir combine.', 'पहले छोटी उम्र की power, फिर combine।']);
  }
  function solSqOther(out) { return powerSol(out, 2); }
  function solCubeOther(out) { return powerSol(out, 3); }

  Q.wrap({ q2_age_avg_root: solAvg, q2_age_sq_of_other: solSqOther, q2_age_cube_of_other: solCubeOther });
  try { console.log('[mqs2-age4] ready'); } catch (e) {}
})();
