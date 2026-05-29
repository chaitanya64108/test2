/* my-questions-solutions2/mqs2-age5.js
   Part 2 Age batch 5: sum-is-perfect-square, sum-is-perfect-cube.
   Branches: ratio split, difference, equal split, one-age-given, after-years, average.
   NAYA file; existing kuch modify nahi karta.
   Covers: q2_age_sum_sq, q2_age_sum_cube
*/
(function () {
  'use strict';
  var Q = window.MQS2;
  if (!Q) { try { console.warn('[mqs2-age5] MQS2 missing'); } catch (e) {} return; }
  var K = Q.K, BOX = Q.BOX, X = Q.X, TRI = Q.TRI;
  function AC(out) { return Q.ansClean(out); }
  var U = ['Step 1: Understand the question', 'Step 1: Sawaal samjho', 'चरण 1: प्रश्न समझो'];

  function sumSol(out, kind) {
    var q = out.question.en, ii = Q.ints(q);
    var flav = kind === 'sq' ? ['a perfect square', 'perfect square', 'पूर्ण वर्ग'] : ['a perfect cube', 'perfect cube', 'पूर्ण घन'];
    if (/average/i.test(q)) {
      var tM = q.match(/total[a-z ]*?([0-9]+)/i); var total = tM ? parseInt(tM[1], 10) : ii[0];
      var mM = q.match(/(?:of|for) ([0-9]+)/i); var members = mM ? parseInt(mM[1], 10) : 1;
      return TRI([
        { t: U, b: ['The total age of ' + members + ' members is ' + total + '; find the average.', members + ' members ki total umar ' + total + '; average nikaalo.', members + ' सदस्यों की कुल उम्र ' + total + '; औसत निकालो।'] },
        { t: ['Step 2: Divide', 'Step 2: Bhag do', 'चरण 2: भाग दो'], b: K(total + '/' + members + ' = ' + BOX(AC(out))) }
      ],
        ['Average = total / number of members.', 'Average = total / members.', 'औसत = कुल / सदस्य।'],
        ['Divide the total age by how many members there are.', 'Total ko members se bhag do.', 'कुल को सदस्यों से भाग दो।']);
    }
    var sM = q.match(/sum[a-z ]*?([0-9]+)/i); var S = sM ? parseInt(sM[1], 10) : ii[0];
    if (/after/i.test(q)) {
      var yM = q.match(/after ([0-9]+)/i); var yrs = yM ? parseInt(yM[1], 10) : 0;
      var ppl = /three ages|three /i.test(q) ? 3 : 2;
      return TRI([
        { t: U, b: ['The current sum of ' + ppl + ' ages is ' + S + '. Each ages by ' + yrs + ' years.', 'Abhi ' + ppl + ' umron ka sum ' + S + '. Har ek ' + yrs + ' saal badhega.', 'अभी ' + ppl + ' उम्रों का योग ' + S + '। हर एक ' + yrs + ' साल बढ़ेगा।'] },
        { t: ['Step 2: Total added years', 'Step 2: Kul jude saal', 'चरण 2: कुल जुड़े साल'], b: K(ppl + X() + yrs + ' = ' + (ppl * yrs)) },
        { t: ['Step 3: New sum', 'Step 3: Naya sum', 'चरण 3: नया योग'], b: K('(' + S + ' + ' + (ppl * yrs) + ') = ' + BOX(AC(out))) }
      ],
        ['New sum = old sum + (people ' + X() + ' years).', 'Naya sum = purana + (log ' + X() + ' saal).', 'नया योग = पुराना + (लोग ' + X() + ' साल)।'],
        ['Each person adds the same years, so add years times the count.', 'Har ek utne saal jodta hai, to saal ' + X() + ' count jodo.', 'हर एक उतने साल जोड़ता है, तो साल ' + X() + ' संख्या जोड़ो।']);
    }
    if (/ratio/i.test(q)) {
      var rm = q.match(/([0-9]+) *: *([0-9]+)/); var a = parseInt(rm[1], 10), b = parseInt(rm[2], 10); var part = S / (a + b);
      var older = /older|larger/i.test(q); var f = older ? b : a;
      return TRI([
        { t: U, b: ['The ages are in ratio ' + a + ':' + b + ' and their sum ' + S + ' is ' + flav[0] + '.', 'Umar ratio ' + a + ':' + b + ', sum ' + S + ' jo ' + flav[1] + ' hai.', 'उम्र अनुपात ' + a + ':' + b + ', योग ' + S + ' जो ' + flav[2] + ' है।'] },
        { t: ['Step 2: One part', 'Step 2: Ek part', 'चरण 2: एक भाग'], b: K(S + '/(' + a + ' + ' + b + ') = ' + part) },
        { t: ['Step 3: ' + (older ? 'Larger' : 'Smaller') + ' age', 'Step 3: ' + (older ? 'Badi' : 'Choti') + ' umar', 'चरण 3: ' + (older ? 'बड़ी' : 'छोटी') + ' उम्र'], b: K(f + X() + part + ' = ' + BOX(AC(out))) }
      ],
        ['One part = sum/(a+b); multiply by the required share.', 'Ek part = sum/(a+b); zaroori share se guna.', 'एक भाग = योग/(a+b); ज़रूरी share से गुणा।'],
        ['Add the ratio numbers, divide the sum, then scale.', 'Ratio jodo, sum baato, phir scale.', 'अनुपात जोड़ो, योग बांटो, फिर scale।']);
    }
    if (/equal/i.test(q)) {
      var cnt = /three|3/i.test(q) ? 3 : 2;
      return TRI([
        { t: U, b: [cnt + ' equal ages add up to ' + S + '.', cnt + ' barabar umar ka sum ' + S + '.', cnt + ' बराबर उम्रों का योग ' + S + '।'] },
        { t: ['Step 2: Divide equally', 'Step 2: Barabar baato', 'चरण 2: बराबर बांटो'], b: K(S + '/' + cnt + ' = ' + BOX(AC(out))) }
      ],
        ['Each age = sum / count.', 'Har umar = sum / count.', 'हर उम्र = योग / संख्या।'],
        ['Equal ages mean simply divide the sum.', 'Barabar umar = sum ko baat do.', 'बराबर उम्र = योग को बांटो।']);
    }
    var gm = q.match(/one age is ([0-9]+)/i);
    if (gm) {
      var given = parseInt(gm[1], 10);
      return TRI([
        { t: U, b: ['The sum of the two ages is ' + S + ' and one age is ' + given + '.', 'Do umron ka sum ' + S + ', ek umar ' + given + '.', 'दो उम्रों का योग ' + S + ', एक उम्र ' + given + '।'] },
        { t: ['Step 2: Subtract', 'Step 2: Ghatao', 'चरण 2: घटाओ'], b: K('(' + S + ' - ' + given + ') = ' + BOX(AC(out))) }
      ],
        ['Other age = sum - known age.', 'Doosri umar = sum - di umar.', 'दूसरी उम्र = योग - दी उम्र।'],
        ['Subtract the known age from the total.', 'Total me se di umar ghatao.', 'कुल में से दी उम्र घटाओ।']);
    }
    var dM = q.match(/([0-9]+) years older/i) || q.match(/difference is ([0-9]+)/i) || q.match(/diff[a-z]* ([0-9]+)/i); var D = dM ? parseInt(dM[1], 10) : 0;
    var wantOlder = /older age|find older|the older/i.test(q);
    return TRI([
      { t: U, b: ['The sum of the two ages is ' + S + ' and their difference is ' + D + '.', 'Do umron ka sum ' + S + ', difference ' + D + '.', 'दो उम्रों का योग ' + S + ', अंतर ' + D + '।'] },
      { t: ['Step 2: Sum-difference rule', 'Step 2: Sum-difference niyam', 'चरण 2: योग-अंतर नियम'], b: ['older = (sum + diff)/2, younger = (sum - diff)/2.', 'older=(sum+diff)/2, younger=(sum-diff)/2.', 'बड़ी=(योग+अंतर)/2, छोटी=(योग-अंतर)/2।'] },
      { t: ['Step 3: Compute', 'Step 3: Compute', 'चरण 3: गणना'], b: K('(' + S + (wantOlder ? ' + ' : ' - ') + D + ')/2 = ' + BOX(AC(out))) }
    ],
      [(wantOlder ? 'Older' : 'Younger') + ' = (sum' + (wantOlder ? '+' : '-') + 'diff)/2.', (wantOlder ? 'Badi' : 'Choti') + ' = (sum' + (wantOlder ? '+' : '-') + 'diff)/2.', (wantOlder ? 'बड़ी' : 'छोटी') + ' = (योग' + (wantOlder ? '+' : '-') + 'अंतर)/2।'],
      ['Use the sum and difference together to split the ages.', 'Sum aur difference se umar baato.', 'योग और अंतर से उम्र बांटो।']);
  }
  function solSumSq(out) { return sumSol(out, 'sq'); }
  function solSumCube(out) { return sumSol(out, 'cube'); }

  Q.wrap({ q2_age_sum_sq: solSumSq, q2_age_sum_cube: solSumCube });
  try { console.log('[mqs2-age5] ready'); } catch (e) {}
})();
