/* my-questions-solutions2/mqs2-age7.js
   Part 2 Age batch 7: past-square + future-square / future-cube.
   Branches: validity (reject negative age), perfect-square/cube search, future-age, two-clue present.
   NAYA file; existing kuch modify nahi karta.
   Covers: q2_age_sq_fut_sq, q2_age_sq_fut_cube
*/
(function () {
  'use strict';
  var Q = window.MQS2;
  if (!Q) { try { console.warn('[mqs2-age7] MQS2 missing'); } catch (e) {} return; }
  var K = Q.K, BOX = Q.BOX, TRI = Q.TRI;
  function AC(out) { return Q.ansClean(out); }
  var U = ['Step 1: Understand the question', 'Step 1: Sawaal samjho', 'चरण 1: प्रश्न समझो'];

  function sqFutSol(out, kind) {
    var q = out.question.en;
    var fl = kind === 'sq' ? ['perfect square', 'पूर्ण वर्ग'] : ['perfect cube', 'पूर्ण घन'];
    var word = kind === 'sq' ? 'squares' : 'cubes';
    if (/valid|invalid|possible|can it|positive[- ]time/i.test(q)) {
      return TRI([
        { t: U, b: ['We must check whether the described situation gives a real, positive age.', 'Check karna hai ki situation se real positive umar banti hai ya nahi.', 'जाँचो कि इस स्थिति से वास्तविक धनात्मक उम्र बनती है या नहीं।'] },
        { t: ['Step 2: Reason it out', 'Step 2: Soch kar dekho', 'चरण 2: तर्क से देखो'], b: ['An age cannot be negative. The cube root of a negative number is negative, so it cannot be a real age, and a future age cannot be smaller than a past age.', 'Umar negative nahi ho sakti. Negative ka cube root negative aata hai, jo umar nahi ho sakti.', 'उम्र ऋणात्मक नहीं हो सकती। ऋण संख्या का घनमूल ऋण होता है, जो उम्र नहीं हो सकती।'] },
        { t: ['Step 3: Conclusion', 'Step 3: Nishkarsh', 'चरण 3: निष्कर्ष'], b: ['So the answer is ' + K(BOX(AC(out))) + '.', 'To answer ' + K(BOX(AC(out))) + '.', 'इसलिए उत्तर ' + K(BOX(AC(out))) + '।'] }
      ],
        ['Always check positivity before accepting an age.', 'Umar lene se pehle positivity check karo.', 'उम्र लेने से पहले धनात्मकता जाँचो।'],
        ['An age must be a positive number; reject negatives or impossible time gaps.', 'Umar positive honi chahiye; negative ya impossible gap reject karo.', 'उम्र धनात्मक होनी चाहिए।']);
    }
    if (/perfect (?:square|cube)/i.test(q)) {
      return TRI([
        { t: U, b: ['We need an age such that subtracting and adding the given years each gives ' + fl[0] + '.', 'Aisi umar chahiye jisme diye saal ghatane aur jodne par har baar ' + fl[0] + ' bane.', 'ऐसी उम्र चाहिए जिसमें दिए साल घटाने और जोड़ने पर हर बार ' + fl[1] + ' बने।'] },
        { t: ['Step 2: Test the choices', 'Step 2: Options test karo', 'चरण 2: विकल्प जाँचो'], b: ['Check each option: keep the age for which (age - past gap) and (age + future gap) are both perfect ' + word + '.', 'Har option check karo: jo umar (umar - past gap) aur (umar + future gap) dono ko perfect ' + word + ' banaye wahi sahi.', 'हर विकल्प जाँचो: जो उम्र (उम्र - past gap) और (उम्र + future gap) दोनों को perfect ' + word + ' बनाए वही सही।'] },
        { t: ['Step 3: Answer', 'Step 3: Uttar', 'चरण 3: उत्तर'], b: K(BOX(AC(out))) }
      ],
        ['Test the options against both perfect-' + word + ' conditions.', 'Dono conditions par options test karo.', 'दोनों शर्तों पर विकल्प जाँचो।'],
        ['Plug each choice in; keep the one giving perfect ' + word + ' both times.', 'Har choice daalo; jo dono baar perfect bane wahi rakho.', 'हर विकल्प डालो; जो दोनों बार perfect बने वही।']);
    }
    var agoD = q.match(/([0-9]+) years? ago/i);
    var pastM = q.match(/(?:ago|was)[^0-9]*([0-9]+)/i);
    var afterAsk = q.match(/age after[^0-9]*([0-9]+) year/i);
    var futYrM = q.match(/([0-9]+) years? later/i) || q.match(/after[^0-9]*([0-9]+) years/i);
    var futValM = q.match(/will be[^0-9]*([0-9]+)/i) || q.match(/later[^0-9]*([0-9]+)/i);
    var pastVal = pastM ? parseInt(pastM[1], 10) : null;
    if (afterAsk) {
      var ya = agoD ? parseInt(agoD[1], 10) : 0; var present = (pastVal || 0) + ya; var af = parseInt(afterAsk[1], 10);
      return TRI([
        { t: U, b: [ya + ' years ago the age was ' + pastVal + '; we want the age after ' + af + ' more years.', ya + ' saal pehle umar ' + pastVal + ' thi; ' + af + ' saal baad ki umar chahiye.', ya + ' साल पहले उम्र ' + pastVal + ' थी; ' + af + ' साल बाद की उम्र चाहिए।'] },
        { t: ['Step 2: Present age', 'Step 2: Abhi ki umar', 'चरण 2: अभी की उम्र'], b: K(pastVal + ' + ' + ya + ' = ' + present) },
        { t: ['Step 3: Add the future years', 'Step 3: Future saal jodo', 'चरण 3: भविष्य के साल जोड़ो'], b: K(present + ' + ' + af + ' = ' + BOX(AC(out))) }
      ],
        ['Present = past age + years ago; then add the future years.', 'Present = past + years ago; phir future saal jodo.', 'अभी = पिछली + बीते साल; फिर भविष्य के साल जोड़ो।'],
        ['Go from the past age to now, then forward again.', 'Past se ab tak aao, phir aage badho.', 'पिछले से अब तक आओ, फिर आगे बढ़ो।']);
    }
    var ya2 = agoD ? parseInt(agoD[1], 10) : null;
    var fv = futValM ? parseInt(futValM[1], 10) : null;
    var fy = futYrM ? parseInt(futYrM[1], 10) : null;
    var steps = [{ t: U, b: ['Two clues are given: a past age and a future age. Either one fixes the present age.', 'Do clue diye: ek past umar, ek future umar. Koi bhi ek present umar de deta hai.', 'दो संकेत: एक पिछली उम्र, एक भविष्य की उम्र। कोई भी एक अभी की उम्र दे देता है।'] }];
    if (ya2 != null && pastVal != null) {
      steps.push({ t: ['Step 2: From the past clue', 'Step 2: Past clue se', 'चरण 2: पिछले संकेत से'], b: K('\\text{present} = ' + pastVal + ' + ' + ya2 + ' = ' + (pastVal + ya2)) });
    }
    if (fv != null && fy != null) {
      steps.push({ t: ['Step 3: From the future clue', 'Step 3: Future clue se', 'चरण 3: भविष्य संकेत से'], b: K('\\text{present} = ' + fv + ' - ' + fy + ' = ' + (fv - fy)) });
    }
    steps.push({ t: ['Step 4: Answer', 'Step 4: Uttar', 'चरण 4: उत्तर'], b: ['The intended present age is ' + K(BOX(AC(out))) + '.', 'Intended present age ' + K(BOX(AC(out))) + '.', 'अभी की उम्र ' + K(BOX(AC(out))) + '।'] });
    return TRI(steps,
      ['Use either clue: past age + years, or future age - years.', 'Koi bhi clue: past + saal, ya future - saal.', 'कोई भी संकेत: पिछली + साल, या भविष्य - साल।'],
      ['Convert a past or future age to the present by adding or subtracting the time gap.', 'Past/future umar ko gap se present me badlo.', 'गैप जोड़/घटा कर अभी की उम्र निकालो।']);
  }
  function solSqFutSq(out) { return sqFutSol(out, 'sq'); }
  function solSqFutCube(out) { return sqFutSol(out, 'cube'); }

  Q.wrap({ q2_age_sq_fut_sq: solSqFutSq, q2_age_sq_fut_cube: solSqFutCube });
  try { console.log('[mqs2-age7] ready'); } catch (e) {}
})();
