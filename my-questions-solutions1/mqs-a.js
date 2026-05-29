/* my-questions-solutions1/mqs-a.js
   Descriptive (page-style) DYNAMIC solutions - Part A: squares & cubes basics.
   Covers (13): mq_sq_rows, mq_tree_rows, mq_area, mq_paise, mq_sq_left, mq_sq_remove,
                mq_sq_more, mq_cube_edge, mq_cube_collect, mq_cube_left, mq_cube_more,
                mq_add_cube, mq_sub_cube.
   NEW file - does NOT modify any existing file. Requires mqs-helpers.js loaded first.
   Steps + shortcuts are descriptive (beginner-friendly); hints are one-liners.
   Every base generator AND all VARIANTS are wrapped, so solutions are per-question dynamic.
*/
(function () {
  'use strict';
  var M = window.MQS;
  if (!M) { try { console.warn('[mqs-a] MQS missing; load mqs-helpers.js first'); } catch (e) {} return; }
  var K = M.K, RT = M.RT, CRT = M.CRT, POW = M.POW, BOX = M.BOX, L = M.L,
      sqTex = M.sqTex, cubeTex = M.cubeTex, steps = M.steps, MK = M.MK,
      isqrt = M.isqrt, icbrt = M.icbrt, ints = M.ints, ansN = M.ansN;

  function solSqrt(N, k) {
    var vf = K(sqTex(k, N)), rs = K(RT(N) + ' = ' + k), ans = K(BOX(k));
    var tbl = K('1, 4, 9, 16, 25, 36, 49, 64, 81, 100, ...');
    return MK(
      { s: steps([
        ['Step 1 - Understand the question', 'The total is ' + N + ' and the items are arranged in a perfect-square shape. We need the number that, multiplied by itself, gives ' + N + '. That number is the square root ' + K(RT(N)) + '.'],
        ['Step 2 - Recall the perfect squares', 'List the squares of small numbers: ' + tbl + '. We look for the one that is exactly ' + N + '.'],
        ['Step 3 - Match and verify', L('The match is ' + k + ', because ' + vf + '.', rs)],
        ['Step 4 - Answer', ans]
      ]), c: 'Memorise the squares table (' + tbl + '). The moment you recognise ' + N + ' as a known square, you simply read off the root ' + k + ' with no long working. For example ' + K(RT(225) + ' = 15') + '.', h: K(RT(N)) + ' is the number whose square is ' + N + '.' },
      { s: steps([
        ['Step 1 - Samjho', 'Total ' + N + ' hai aur cheezein ek perfect-square shape me lagi hain. Humein woh number chahiye jise khud se guna karne par ' + N + ' mile - yahi square root ' + K(RT(N)) + ' hai.'],
        ['Step 2 - Perfect squares yaad karo', 'Chhote numbers ke squares: ' + tbl + '. Inme se dekho konsa theek ' + N + ' ke barabar hai.'],
        ['Step 3 - Match aur verify', L('Match hai ' + k + ', kyunki ' + vf + '.', rs)],
        ['Step 4 - Answer', ans]
      ]), c: 'Squares table yaad rakho (' + tbl + '). Jaise hi ' + N + ' ko ek jaani-pehchaani square ki tarah pehchaano, root ' + k + ' bina lambi calculation ke seedha mil jaata hai. Jaise ' + K(RT(225) + ' = 15') + '.', h: K(RT(N)) + ' = woh number jiska square ' + N + ' ho.' },
      { s: steps([
        ['चरण 1 - प्रश्न समझो', 'कुल ' + N + ' है और वस्तुएँ एक पूर्ण-वर्ग आकार में लगी हैं। हमें वह संख्या चाहिए जो स्वयं से गुणा करने पर ' + N + ' दे - यही वर्गमूल ' + K(RT(N)) + ' है।'],
        ['चरण 2 - पूर्ण वर्ग याद करो', 'छोटी संख्याओं के वर्ग: ' + tbl + '। इनमें से देखो कौन सा ठीक ' + N + ' के बराबर है।'],
        ['चरण 3 - मिलान और जाँच', L('मिलान है ' + k + ', क्योंकि ' + vf + '।', rs)],
        ['चरण 4 - उत्तर', ans]
      ]), c: 'वर्गों की तालिका याद रखो (' + tbl + ')। जैसे ही ' + N + ' को जानी-पहचानी वर्ग संख्या के रूप में पहचानो, मूल ' + k + ' बिना लंबी गणना के सीधे मिल जाता है। जैसे ' + K(RT(225) + ' = 15') + '।', h: K(RT(N)) + ' = वह संख्या जिसका वर्ग ' + N + ' हो।' }
    );
  }

  function solCbrt(N, k) {
    var vf = K(cubeTex(k, N)), rs = K(CRT(N) + ' = ' + k), ans = K(BOX(k));
    var tbl = K('1, 8, 27, 64, 125, 216, 343, 512, 729, 1000');
    return MK(
      { s: steps([
        ['Step 1 - Understand the question', 'Here the total ' + N + ' is a perfect cube. We need the number that, multiplied by itself three times, gives ' + N + ' - the cube root ' + K(CRT(N)) + '.'],
        ['Step 2 - Recall the perfect cubes', 'Cubes of 1 to 10: ' + tbl + '. Find the one that equals ' + N + '.'],
        ['Step 3 - Match and verify', L('It is ' + k + ', since ' + vf + '.', rs)],
        ['Step 4 - Answer', ans]
      ]), c: 'Keep the cube table ready (' + tbl + '). Recognising ' + N + ' as a known cube gives the root ' + k + ' instantly. For example ' + K(CRT(343) + ' = 7') + '.', h: K(CRT(N)) + ' is the number whose cube is ' + N + '.' },
      { s: steps([
        ['Step 1 - Samjho', 'Yahan total ' + N + ' ek perfect cube hai. Humein woh number chahiye jise teen baar guna karne par ' + N + ' mile - cube root ' + K(CRT(N)) + '.'],
        ['Step 2 - Perfect cubes yaad karo', '1 se 10 tak ke cubes: ' + tbl + '. Inme se ' + N + ' ke barabar wala dhoondo.'],
        ['Step 3 - Match aur verify', L('Woh hai ' + k + ', kyunki ' + vf + '.', rs)],
        ['Step 4 - Answer', ans]
      ]), c: 'Cube table taiyaar rakho (' + tbl + '). ' + N + ' ko jaane-pehchaane cube ki tarah pehchaante hi root ' + k + ' turant mil jaata hai. Jaise ' + K(CRT(343) + ' = 7') + '.', h: K(CRT(N)) + ' = woh number jiska cube ' + N + ' ho.' },
      { s: steps([
        ['चरण 1 - प्रश्न समझो', 'यहाँ कुल ' + N + ' एक पूर्ण घन है। हमें वह संख्या चाहिए जो तीन बार गुणा करने पर ' + N + ' दे - घनमूल ' + K(CRT(N)) + '।'],
        ['चरण 2 - पूर्ण घन याद करो', '1 से 10 तक के घन: ' + tbl + '। इनमें से ' + N + ' के बराबर वाला खोजो।'],
        ['चरण 3 - मिलान और जाँच', L('वह है ' + k + ', क्योंकि ' + vf + '।', rs)],
        ['चरण 4 - उत्तर', ans]
      ]), c: 'घन तालिका तैयार रखो (' + tbl + ')। ' + N + ' को जाने-पहचाने घन की तरह पहचानते ही मूल ' + k + ' तुरंत मिल जाता है। जैसे ' + K(CRT(343) + ' = 7') + '।', h: K(CRT(N)) + ' = वह संख्या जिसका घन ' + N + ' हो।' }
    );
  }

  function solLeftSq(N) {
    var k = isqrt(N), sq = k * k, r = N - sq, nx = (k + 1) * (k + 1);
    var big = 'The biggest perfect square that fits is ' + K(POW(k, 2) + ' = ' + sq) + '.';
    var nxt = '(The next square ' + K(POW(k + 1, 2) + ' = ' + nx) + ' is already more than ' + N + '.)';
    var sub = K(N + ' - ' + sq + ' = ' + r), ans = K(BOX(r));
    return MK(
      { s: steps([
        ['Step 1 - Understand', 'We arrange ' + N + ' items into the biggest possible perfect square. Whatever is left over (it cannot complete the next full square) is the answer.'],
        ['Step 2 - Find the biggest square that fits', L(big, nxt)],
        ['Step 3 - Subtract to get the leftover', sub],
        ['Step 4 - Answer', ans]
      ]), c: 'Take the floor of ' + K(RT(N)) + ' (here ' + k + '), square it, and subtract from ' + N + ': leftover = ' + K(N + ' - ' + POW(k, 2) + ' = ' + r) + '.', h: 'Subtract the largest perfect square below ' + N + '.' },
      { s: steps([
        ['Step 1 - Samjho', N + ' cheezon ko sabse bade possible perfect square me lagana hai. Jo bach jaaye (agla pura square nahi ban sakta) wahi answer hai.'],
        ['Step 2 - Sabse bada fitting square', L(big, nxt)],
        ['Step 3 - Leftover nikaalo', sub],
        ['Step 4 - Answer', ans]
      ]), c: K(RT(N)) + ' ka floor lo (yahan ' + k + '), use square karo, aur ' + N + ' me se ghatao: leftover = ' + K(N + ' - ' + POW(k, 2) + ' = ' + r) + '.', h: N + ' se chhota sabse bada perfect square ghatao.' },
      { s: steps([
        ['चरण 1 - समझो', N + ' वस्तुओं को सबसे बड़े संभव पूर्ण वर्ग में लगाना है। जो शेष बचे (अगला पूरा वर्ग नहीं बनता) वही उत्तर है।'],
        ['चरण 2 - सबसे बड़ा फिट होने वाला वर्ग', L(big, nxt)],
        ['चरण 3 - शेष निकालो', sub],
        ['चरण 4 - उत्तर', ans]
      ]), c: K(RT(N)) + ' का पूर्णांक लो (यहाँ ' + k + '), उसका वर्ग करो, और ' + N + ' में से घटाओ: शेष = ' + K(N + ' - ' + POW(k, 2) + ' = ' + r) + '।', h: N + ' से छोटा सबसे बड़ा पूर्ण वर्ग घटाओ।' }
    );
  }

  function solMoreSq(N) {
    var k = isqrt(N), nx = (k + 1) * (k + 1), more = nx - N;
    var nxt = 'The next perfect square is ' + K(POW(k + 1, 2) + ' = ' + nx) + '.';
    var sub = K(nx + ' - ' + N + ' = ' + more), ans = K(BOX(more));
    return MK(
      { s: steps([
        ['Step 1 - Understand', K(RT(N)) + ' lies between ' + k + ' and ' + (k + 1) + ', so ' + N + ' is NOT a perfect square. We must add just enough to reach the NEXT perfect square.'],
        ['Step 2 - Find the next perfect square', nxt],
        ['Step 3 - How much more is needed', sub],
        ['Step 4 - Answer', ans]
      ]), c: 'Next square is ' + K(POW(k + 1, 2) + ' = ' + nx) + '; subtract ' + N + ': more needed = ' + more + '.', h: 'Add up to the next perfect square after ' + N + '.' },
      { s: steps([
        ['Step 1 - Samjho', K(RT(N)) + ' , ' + k + ' aur ' + (k + 1) + ' ke beech hai, yaani ' + N + ' perfect square NAHI hai. Utna add karo jisse agla perfect square ban jaaye.'],
        ['Step 2 - Agla perfect square', nxt],
        ['Step 3 - Kitna aur chahiye', sub],
        ['Step 4 - Answer', ans]
      ]), c: 'Agla square ' + K(POW(k + 1, 2) + ' = ' + nx) + '; ' + N + ' ghatao: aur chahiye = ' + more + '.', h: N + ' ke baad wale perfect square tak badhao.' },
      { s: steps([
        ['चरण 1 - समझो', K(RT(N)) + ' , ' + k + ' और ' + (k + 1) + ' के बीच है, यानी ' + N + ' पूर्ण वर्ग नहीं है। उतना जोड़ो जिससे अगला पूर्ण वर्ग बने।'],
        ['चरण 2 - अगला पूर्ण वर्ग', nxt],
        ['चरण 3 - कितना और चाहिए', sub],
        ['चरण 4 - उत्तर', ans]
      ]), c: 'अगला वर्ग ' + K(POW(k + 1, 2) + ' = ' + nx) + '; ' + N + ' घटाओ: और चाहिए = ' + more + '।', h: N + ' के बाद वाले पूर्ण वर्ग तक बढ़ाओ।' }
    );
  }

  function solLeftCb(N) {
    var c = icbrt(N), cu = c * c * c, r = N - cu, nx = (c + 1) * (c + 1) * (c + 1);
    var big = 'The biggest perfect cube that fits is ' + K(POW(c, 3) + ' = ' + cu) + '.';
    var nxt = '(The next cube ' + K(POW(c + 1, 3) + ' = ' + nx) + ' is more than ' + N + '.)';
    var sub = K(N + ' - ' + cu + ' = ' + r), ans = K(BOX(r));
    return MK(
      { s: steps([
        ['Step 1 - Understand', 'We remove the smallest amount from ' + N + ' so that what remains becomes a perfect cube. So find the biggest perfect cube inside ' + N + ' and subtract.'],
        ['Step 2 - Biggest cube that fits', L(big, nxt)],
        ['Step 3 - Subtract to reach the cube', sub],
        ['Step 4 - Answer', ans]
      ]), c: 'Floor of ' + K(CRT(N)) + ' is ' + c + '; amount to remove = ' + K(N + ' - ' + POW(c, 3) + ' = ' + r) + '.', h: 'Remove down to the largest perfect cube below ' + N + '.' },
      { s: steps([
        ['Step 1 - Samjho', N + ' me se kam se kam kitna hatayein ki bacha hua perfect cube ban jaaye. ' + N + ' ke andar sabse bada perfect cube dhoondo aur ghatao.'],
        ['Step 2 - Sabse bada fitting cube', L(big, nxt)],
        ['Step 3 - Cube tak ghatao', sub],
        ['Step 4 - Answer', ans]
      ]), c: K(CRT(N)) + ' ka floor ' + c + '; hataane wala amount = ' + K(N + ' - ' + POW(c, 3) + ' = ' + r) + '.', h: N + ' se chhota sabse bada perfect cube tak ghatao.' },
      { s: steps([
        ['चरण 1 - समझो', N + ' में से कम से कम कितना हटाएँ कि शेष पूर्ण घन बने। ' + N + ' के अंदर सबसे बड़ा पूर्ण घन खोजो और घटाओ।'],
        ['चरण 2 - सबसे बड़ा फिट घन', L(big, nxt)],
        ['चरण 3 - घन तक घटाओ', sub],
        ['चरण 4 - उत्तर', ans]
      ]), c: K(CRT(N)) + ' का पूर्णांक ' + c + '; हटाने वाला मान = ' + K(N + ' - ' + POW(c, 3) + ' = ' + r) + '।', h: N + ' से छोटा सबसे बड़ा पूर्ण घन तक घटाओ।' }
    );
  }

  function solMoreCb(N) {
    var c = icbrt(N), nx = (c + 1) * (c + 1) * (c + 1), more = nx - N;
    var nxt = 'The next perfect cube is ' + K(POW(c + 1, 3) + ' = ' + nx) + '.';
    var sub = K(nx + ' - ' + N + ' = ' + more), ans = K(BOX(more));
    return MK(
      { s: steps([
        ['Step 1 - Understand', K(CRT(N)) + ' lies between ' + c + ' and ' + (c + 1) + ', so ' + N + ' is not a perfect cube. Add just enough to reach the NEXT perfect cube.'],
        ['Step 2 - Find the next perfect cube', nxt],
        ['Step 3 - How much more is needed', sub],
        ['Step 4 - Answer', ans]
      ]), c: 'Next cube is ' + K(POW(c + 1, 3) + ' = ' + nx) + '; subtract ' + N + ': more needed = ' + more + '.', h: 'Add up to the next perfect cube after ' + N + '.' },
      { s: steps([
        ['Step 1 - Samjho', K(CRT(N)) + ' , ' + c + ' aur ' + (c + 1) + ' ke beech hai, to ' + N + ' perfect cube nahi. Utna add karo jisse agla perfect cube ban jaaye.'],
        ['Step 2 - Agla perfect cube', nxt],
        ['Step 3 - Kitna aur chahiye', sub],
        ['Step 4 - Answer', ans]
      ]), c: 'Agla cube ' + K(POW(c + 1, 3) + ' = ' + nx) + '; ' + N + ' ghatao: aur chahiye = ' + more + '.', h: N + ' ke baad wale perfect cube tak badhao.' },
      { s: steps([
        ['चरण 1 - समझो', K(CRT(N)) + ' , ' + c + ' और ' + (c + 1) + ' के बीच है, तो ' + N + ' पूर्ण घन नहीं। उतना जोड़ो जिससे अगला पूर्ण घन बने।'],
        ['चरण 2 - अगला पूर्ण घन', nxt],
        ['चरण 3 - कितना और चाहिए', sub],
        ['चरण 4 - उत्तर', ans]
      ]), c: 'अगला घन ' + K(POW(c + 1, 3) + ' = ' + nx) + '; ' + N + ' घटाओ: और चाहिए = ' + more + '।', h: N + ' के बाद वाले पूर्ण घन तक बढ़ाओ।' }
    );
  }

  var SOL = {
    mq_sq_rows: function (o) { var k = ansN(o); return solSqrt(k * k, k); },
    mq_tree_rows: function (o) { var k = ansN(o); return solSqrt(k * k, k); },
    mq_area: function (o) { var k = ansN(o); return solSqrt(k * k, k); },
    mq_paise: function (o) { var k = ansN(o); return solSqrt(k * k, k); },
    mq_sq_left: function (o) { return solLeftSq(ints(o.question.en)[0]); },
    mq_sq_remove: function (o) { return solLeftSq(ints(o.question.en)[0]); },
    mq_sq_more: function (o) { return solMoreSq(ints(o.question.en)[0]); },
    mq_cube_edge: function (o) { var k = ansN(o); return solCbrt(k * k * k, k); },
    mq_cube_collect: function (o) { var n = ansN(o); return solCbrt(n * n * n, n); },
    mq_cube_left: function (o) { return solLeftCb(ints(o.question.en)[0]); },
    mq_cube_more: function (o) { return solMoreCb(ints(o.question.en)[0]); },
    mq_add_cube: function (o) { return solMoreCb(ints(o.question.en)[0]); },
    mq_sub_cube: function (o) { return solLeftCb(ints(o.question.en)[0]); }
  };
  var n = M.wrapAll(SOL);
  try { console.log('[mqs-a] descriptive solutions attached to', n, 'templates (base + all variants).'); } catch (e) {}
})();
