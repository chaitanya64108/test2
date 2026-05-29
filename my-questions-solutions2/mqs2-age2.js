/* my-questions-solutions2/mqs2-age2.js
   Part 2 Age batch 2: after-years (cube), years-ago (square), years-ago (cube + validity).
   Dynamic per-sample worked solutions. NAYA file; existing kuch modify nahi karta.
   Covers: q2_age_after_cube, q2_age_ago_sq, q2_age_ago_cube
*/
(function () {
  'use strict';
  var Q = window.MQS2;
  if (!Q) { try { console.warn('[mqs2-age2] MQS2 missing'); } catch (e) {} return; }
  var K = Q.K, RT = Q.RT, CRT = Q.CRT, BOX = Q.BOX, TRI = Q.TRI, isqrt = Q.isqrt, icbrt = Q.icbrt;
  function AC(out) { return Q.ansClean(out); }
  var U = ['Step 1: Understand the question', 'Step 1: Sawaal samjho', 'चरण 1: प्रश्न समझो'];
  function rootOf(r) { return r.cube ? icbrt(r.inner) : isqrt(Q.evalSum(r.inner)); }
  function rootTex(r) { return r.cube ? CRT(r.inner) : RT(r.inner); }
  function powBase(q, mark) { var ix = q.indexOf(mark); if (ix < 0) return null; var j = ix - 1, s = ''; while (j >= 0 && q.charAt(j) >= '0' && q.charAt(j) <= '9') { s = q.charAt(j) + s; j--; } return s ? parseInt(s, 10) : null; }

  function solAfterCube(out) {
    var q = out.question.en, rad = Q.radicands(q), ii = Q.ints(q), i;
    if (/how many years/i.test(q)) {
      var pm = q.match(/Present age is ([0-9]+)/i); var present = pm ? parseInt(pm[1], 10) : null;
      var target = null; for (i = 0; i < ii.length; i++) { if (ii[i] !== present) { target = ii[i]; break; } }
      return TRI([
        { t: U, b: ['Present age is ' + present + ' and the future age (a perfect cube) is ' + target + '.', 'Abhi umar ' + present + ', aage wali umar (perfect cube) ' + target + '.', 'अभी उम्र ' + present + ', आगे की उम्र (perfect cube) ' + target + '।'] },
        { t: ['Step 2: Years needed', 'Step 2: Kitne saal', 'चरण 2: कितने साल'], b: ['Years = future age - present age.', 'Saal = aage umar - abhi umar.', 'वर्ष = आगे उम्र - अभी उम्र।'] },
        { t: ['Step 3: Compute', 'Step 3: Compute', 'चरण 3: गणना'], b: K('(' + target + ' - ' + present + ') = ' + BOX(AC(out))) }
      ],
        ['Years = future - present = ' + K(target + ' - ' + present) + '.', 'Saal = aage - abhi.', 'वर्ष = आगे - अभी।'],
        ['Subtract the present age from the target cube age.', 'Target cube umar me se abhi ki umar ghatao.', 'लक्ष्य उम्र में से अभी की उम्र घटाओ।']);
    }
    var k = parseInt(q.match(/After ([0-9]+)/i)[1], 10);
    var V, Vtex;
    if (rad.length) { V = rootOf(rad[0]); Vtex = K(rootTex(rad[0]) + ' = ' + V); }
    else { var cb = powBase(q, '^3'); if (cb !== null) { V = cb * cb * cb; Vtex = K(cb + '^{3} = ' + V); } else { var t = null; for (i = 0; i < ii.length; i++) { if (ii[i] !== k) { t = ii[i]; break; } } V = t; Vtex = K('' + V) + ' (a perfect cube)'; } }
    return TRI([
      { t: U, b: ['After ' + k + ' years the age will be ' + Vtex + '. Find the present age.', k + ' saal baad umar ' + Vtex + ' hogi. Abhi ki umar nikaalo.', k + ' साल बाद उम्र ' + Vtex + ' होगी। अभी की उम्र निकालो।'] },
      { t: ['Step 2: Future age value', 'Step 2: Aage ki umar', 'चरण 2: आगे की उम्र'], b: ['Future age = ' + V + '.', 'Future age = ' + V + '.', 'आगे उम्र = ' + V + '।'] },
      { t: ['Step 3: Subtract the years', 'Step 3: Saal ghatao', 'चरण 3: वर्ष घटाओ'], b: K('(' + V + ' - ' + k + ') = ' + BOX(AC(out))) }
    ],
      ['Present age = future age - ' + k + ' = ' + K(V + ' - ' + k) + '.', 'Abhi umar = aage umar - ' + k + '.', 'अभी उम्र = आगे उम्र - ' + k + '।'],
      ['Find the cube value, then subtract the elapsed years.', 'Cube nikaalo, phir beete saal ghatao.', 'घन निकालो, फिर बीते वर्ष घटाओ।']);
  }

  function solAgoSq(out) {
    var q = out.question.en, rad = Q.radicands(q), ii = Q.ints(q), i;
    if (/how many years ago/i.test(q)) {
      var pm = q.match(/Present age is ([0-9]+)/i); var present = pm ? parseInt(pm[1], 10) : null;
      var past = null; for (i = 0; i < ii.length; i++) { if (ii[i] !== present) { past = ii[i]; break; } }
      return TRI([
        { t: U, b: ['Present age is ' + present + ' and the past age (a perfect square) was ' + past + '.', 'Abhi umar ' + present + ', pehle ki umar (perfect square) ' + past + '.', 'अभी उम्र ' + present + ', पहले की उम्र (perfect square) ' + past + '।'] },
        { t: ['Step 2: Years passed', 'Step 2: Kitne saal pehle', 'चरण 2: कितने साल पहले'], b: ['Years ago = present age - past age.', 'Saal pehle = abhi - pehle.', 'वर्ष पहले = अभी - पहले।'] },
        { t: ['Step 3: Compute', 'Step 3: Compute', 'चरण 3: गणना'], b: K('(' + present + ' - ' + past + ') = ' + BOX(AC(out))) }
      ],
        ['Years ago = present - past = ' + K(present + ' - ' + past) + '.', 'Saal pehle = abhi - pehle.', 'वर्ष पहले = अभी - पहले।'],
        ['Subtract the past age from the present age.', 'Abhi umar me se pehle ki umar ghatao.', 'अभी उम्र में से पहले की उम्र घटाओ।']);
    }
    var agoM = q.match(/([0-9]+) years ago/i); var k1 = agoM ? parseInt(agoM[1], 10) : 0;
    var afterM = q.match(/after ([0-9]+)/i);
    var V, Vtex;
    if (rad.length) { V = rootOf(rad[0]); Vtex = K(rootTex(rad[0]) + ' = ' + V); }
    else { var used = {}; used[k1] = 1; if (afterM) used[parseInt(afterM[1], 10)] = 1; V = null; for (i = 0; i < ii.length; i++) { if (!used[ii[i]]) { V = ii[i]; break; } } Vtex = K('' + V); }
    var present = V + k1;
    if (afterM) {
      var k2 = parseInt(afterM[1], 10);
      return TRI([
        { t: U, b: [k1 + ' years ago the age was ' + Vtex + '; find the age after ' + k2 + ' more years.', k1 + ' saal pehle umar ' + Vtex + ' thi; ' + k2 + ' saal baad ki umar nikaalo.', k1 + ' साल पहले उम्र ' + Vtex + ' थी; ' + k2 + ' साल बाद की उम्र निकालो।'] },
        { t: ['Step 2: Present age', 'Step 2: Abhi ki umar', 'चरण 2: अभी की उम्र'], b: K('(' + V + ' + ' + k1 + ') = ' + present) },
        { t: ['Step 3: Add ' + k2 + ' more years', 'Step 3: ' + k2 + ' saal aur jodo', 'चरण 3: ' + k2 + ' साल और जोड़ो'], b: K('(' + present + ' + ' + k2 + ') = ' + BOX(AC(out))) }
      ],
        ['First present = past + ' + k1 + ', then add ' + k2 + '.', 'Pehle present = past + ' + k1 + ', phir + ' + k2 + '.', 'पहले present = past + ' + k1 + ', फिर + ' + k2 + '।'],
        ['Recover the present age first, then move forward.', 'Pehle present nikaalo, phir aage badho.', 'पहले present निकालो, फिर आगे बढ़ो।']);
    }
    return TRI([
      { t: U, b: [k1 + ' years ago the age was ' + Vtex + '. Find the present age.', k1 + ' saal pehle umar ' + Vtex + ' thi. Abhi ki umar nikaalo.', k1 + ' साल पहले उम्र ' + Vtex + ' थी। अभी की उम्र निकालो।'] },
      { t: ['Step 2: Past age value', 'Step 2: Pehle ki umar', 'चरण 2: पहले की उम्र'], b: ['Past age = ' + V + '.', 'Past age = ' + V + '.', 'पहले उम्र = ' + V + '।'] },
      { t: ['Step 3: Add the years', 'Step 3: Saal jodo', 'चरण 3: वर्ष जोड़ो'], b: K('(' + V + ' + ' + k1 + ') = ' + BOX(AC(out))) }
    ],
      ['Present age = past age + ' + k1 + ' = ' + K(V + ' + ' + k1) + '.', 'Abhi umar = pehle umar + ' + k1 + '.', 'अभी उम्र = पहले उम्र + ' + k1 + '।'],
      ['Find the square value, then add the elapsed years.', 'Square nikaalo, phir beete saal jodo.', 'वर्ग निकालो, फिर बीते वर्ष जोड़ो।']);
  }

  function solAgoCube(out) {
    var q = out.question.en, rad = Q.radicands(q), ii = Q.ints(q), i;
    if (/valid/i.test(q)) {
      var inner = rad.length ? rad[0].inner : '?'; var rv = rad.length ? icbrt(rad[0].inner) : null;
      return TRI([
        { t: U, b: ['The past age is given as ' + K(rad.length ? rootTex(rad[0]) : '?') + ', a cube root of a negative number.', 'Pehle ki umar ' + K(rad.length ? rootTex(rad[0]) : '?') + ' di hai, jo negative ka cube root hai.', 'पहले की उम्र ' + K(rad.length ? rootTex(rad[0]) : '?') + ' दी है, जो ऋणात्मक का घनमूल है।'] },
        { t: ['Step 2: Evaluate the cube root', 'Step 2: Ghanmool nikaalo', 'चरण 2: घनमूल निकालो'], b: K(rad.length ? rootTex(rad[0]) + ' = ' + rv : '?') },
        { t: ['Step 3: Check the age context', 'Step 3: Umar ke hisaab se jaancho', 'चरण 3: उम्र के संदर्भ में जाँचो'], b: ['An age can never be negative, so this is ' + AC(out) + '.', 'Umar kabhi negative nahi hoti, isliye ' + AC(out) + '.', 'उम्र कभी ऋणात्मक नहीं होती, इसलिए ' + AC(out) + '।'] }
      ],
        ['A cube root of a negative number is negative; ages cannot be negative.', 'Negative ka cube root negative; umar negative nahi ho sakti.', 'ऋणात्मक का घनमूल ऋणात्मक; उम्र ऋणात्मक नहीं।'],
        ['Can a real-life age ever be a negative number?', 'Kya asli umar negative ho sakti hai?', 'क्या वास्तविक उम्र ऋणात्मक हो सकती है?']);
    }
    if (/how many years ago/i.test(q)) {
      var pm = q.match(/Present age is ([0-9]+)/i); var present = pm ? parseInt(pm[1], 10) : null;
      var past = null; for (i = 0; i < ii.length; i++) { if (ii[i] !== present) { past = ii[i]; break; } }
      return TRI([
        { t: U, b: ['Present age is ' + present + ' and the past age (a perfect cube) was ' + past + '.', 'Abhi umar ' + present + ', pehle (perfect cube) ' + past + '.', 'अभी उम्र ' + present + ', पहले (perfect cube) ' + past + '।'] },
        { t: ['Step 2: Years passed', 'Step 2: Kitne saal pehle', 'चरण 2: कितने साल पहले'], b: ['Years ago = present - past.', 'Saal pehle = abhi - pehle.', 'वर्ष पहले = अभी - पहले।'] },
        { t: ['Step 3: Compute', 'Step 3: Compute', 'चरण 3: गणना'], b: K('(' + present + ' - ' + past + ') = ' + BOX(AC(out))) }
      ],
        ['Years ago = present - past.', 'Saal pehle = abhi - pehle.', 'वर्ष पहले = अभी - पहले।'],
        ['Subtract the past cube age from the present age.', 'Abhi me se pehle ki cube umar ghatao.', 'अभी में से पहले की घन उम्र घटाओ।']);
    }
    var agoM = q.match(/([0-9]+) years ago/i); var k1 = agoM ? parseInt(agoM[1], 10) : 0;
    var afterM = q.match(/after ([0-9]+)/i);
    var V, Vtex;
    if (rad.length) { V = rootOf(rad[0]); Vtex = K(rootTex(rad[0]) + ' = ' + V); }
    else { var used = {}; used[k1] = 1; if (afterM) used[parseInt(afterM[1], 10)] = 1; V = null; for (i = 0; i < ii.length; i++) { if (!used[ii[i]]) { V = ii[i]; break; } } Vtex = K('' + V); }
    var present = V + k1;
    if (afterM) {
      var k2 = parseInt(afterM[1], 10);
      return TRI([
        { t: U, b: [k1 + ' years ago the age was ' + Vtex + '; find the age after ' + k2 + ' more years.', k1 + ' saal pehle umar ' + Vtex + ' thi; ' + k2 + ' saal baad ki umar nikaalo.', k1 + ' साल पहले उम्र ' + Vtex + ' थी; ' + k2 + ' साल बाद की उम्र निकालो।'] },
        { t: ['Step 2: Present age', 'Step 2: Abhi ki umar', 'चरण 2: अभी की उम्र'], b: K('(' + V + ' + ' + k1 + ') = ' + present) },
        { t: ['Step 3: Add ' + k2 + ' more years', 'Step 3: ' + k2 + ' saal aur jodo', 'चरण 3: ' + k2 + ' साल और जोड़ो'], b: K('(' + present + ' + ' + k2 + ') = ' + BOX(AC(out))) }
      ],
        ['Present = past + ' + k1 + ', then add ' + k2 + '.', 'Present = past + ' + k1 + ', phir + ' + k2 + '.', 'Present = past + ' + k1 + ', फिर + ' + k2 + '।'],
        ['Recover the present age first, then move forward.', 'Pehle present nikaalo, phir aage badho.', 'पहले present निकालो, फिर आगे बढ़ो।']);
    }
    return TRI([
      { t: U, b: [k1 + ' years ago the age was ' + Vtex + '. Find the present age.', k1 + ' saal pehle umar ' + Vtex + ' thi. Abhi ki umar nikaalo.', k1 + ' साल पहले उम्र ' + Vtex + ' थी। अभी की उम्र निकालो।'] },
      { t: ['Step 2: Past age value', 'Step 2: Pehle ki umar', 'चरण 2: पहले की उम्र'], b: ['Past age = ' + V + '.', 'Past age = ' + V + '.', 'पहले उम्र = ' + V + '।'] },
      { t: ['Step 3: Add the years', 'Step 3: Saal jodo', 'चरण 3: वर्ष जोड़ो'], b: K('(' + V + ' + ' + k1 + ') = ' + BOX(AC(out))) }
    ],
      ['Present age = past age + ' + k1 + ' = ' + K(V + ' + ' + k1) + '.', 'Abhi umar = pehle umar + ' + k1 + '.', 'अभी उम्र = पहले उम्र + ' + k1 + '।'],
      ['Find the cube value, then add the elapsed years.', 'Cube nikaalo, phir beete saal jodo.', 'घन निकालो, फिर बीते वर्ष जोड़ो।']);
  }

  Q.wrap({ q2_age_after_cube: solAfterCube, q2_age_ago_sq: solAgoSq, q2_age_ago_cube: solAgoCube });
  try { console.log('[mqs2-age2] ready'); } catch (e) {}
})();
