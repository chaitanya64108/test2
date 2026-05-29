/* my-questions-solutions2/mqs2-surd5.js
   Part 2 Surd batch 5 (final surd): finite nested + double nested (denesting).
   Covers: q2_finite_nested, q2_double_nested
   NAYA file; existing kuch modify nahi karta.
*/
(function () {
  'use strict';
  var Q = window.MQS2;
  if (!Q) { try { console.warn('[mqs2-surd5] MQS2 missing'); } catch (e) {} return; }
  var K = Q.K, BOX = Q.BOX, RT = Q.RT, TRI = Q.TRI;
  function AC(out) { return Q.ansClean(out); }
  var U = ['Step 1: Understand the question', 'Step 1: Sawaal samjho', 'चरण 1: प्रश्न समझो'];

  function finiteNested(out) {
    return TRI([
      { t: U, b: ['This nested radical stops after a few steps (it is finite), so we just work from the inside out.', 'Yeh nested radical kuch hi step me khatam hota hai (finite), to andar se bahar ki taraf hal karo.', 'यह nested radical कुछ ही चरण में खत्म होता है (finite), इसलिए अंदर से बाहर हल करो।'] },
      { t: ['Step 2: Start from the innermost root', 'Step 2: Sabse andar wali root se', 'चरण 2: सबसे अंदर से'], b: ['Evaluate the innermost square root first, then substitute it into the next root outward.', 'Pehle sabse andar wali root nikaalo, phir use agli root me rakho.', 'पहले सबसे अंदर वाली root निकालो, फिर उसे अगली root में रखो।'] },
      { t: ['Step 3: Work outward step by step', 'Step 3: Bahar ki taraf', 'चरण 3: बाहर की ओर'], b: ['Each layer becomes a perfect square, so the roots peel off neatly, e.g. ' + K(RT('12 + ' + RT('64')) + ' = ' + RT('12 + 8') + ' = ' + RT('20')) + '.', 'Har layer perfect square banti hai, root saaf-saaf khulti jaati hai.', 'हर layer पूर्ण वर्ग बनती है, root साफ-साफ खुलती जाती है।'] },
      { t: ['Step 4: Answer', 'Step 4: Uttar', 'चरण 4: उत्तर'], b: K(BOX(AC(out))) }
    ],
      ['Solve a finite nested radical from the innermost root outward.', 'Finite nested radical ko andar se bahar hal karo.', 'finite nested radical को अंदर से बाहर हल करो।'],
      ['Each inner root is a perfect square here, so no quadratic is needed.', 'Har andar wali root perfect square hai, quadratic ki zarurat nahi.', 'हर अंदर वाली root पूर्ण वर्ग है, quadratic की जरूरत नहीं।']);
  }

  function doubleNested(out) {
    return TRI([
      { t: U, b: ['We must denest a double surd like ' + K(RT('p + 2' + RT('q'))) + ' — write it as a sum of two simpler roots.', 'Double surd √(p+2√q) ko denest karna hai — do simple root ke yog me likho.', 'Double surd √(p+2√q) को denest करना है — दो सरल root के योग में लिखो।'] },
      { t: ['Step 2: Assume the denested form', 'Step 2: Form maan lo', 'चरण 2: रूप मान लो'], b: ['Assume ' + K(RT('p + 2' + RT('q')) + ' = ' + RT('m') + ' + ' + RT('n')) + ', so we need ' + K('m + n = p') + ' and ' + K('mn = q') + '.', '√(p+2√q)=√m+√n maano; to m+n=p aur mn=q chahiye.', '√(p+2√q)=√m+√n मानो; तो m+n=p और mn=q चाहिए।'] },
      { t: ['Step 3: Find m and n', 'Step 3: m aur n nikaalo', 'चरण 3: m और n निकालो'], b: ['Find two numbers that add to p and multiply to q, e.g. ' + K(RT('5 + 2' + RT('6')) + ' = ' + RT('2') + ' + ' + RT('3')) + '.', 'Aise do number jo jodne par p aur guna par q dein.', 'ऐसे दो संख्याएँ जो जोड़ने पर p और गुणा पर q दें।'] },
      { t: ['Step 4: Answer', 'Step 4: Uttar', 'चरण 4: उत्तर'], b: K(BOX(AC(out))) }
    ],
      ['√(p+2√q) = √m+√n where m+n=p and mn=q.', '√(p+2√q)=√m+√n jaha m+n=p, mn=q.', '√(p+2√q)=√m+√n जहाँ m+n=p, mn=q।'],
      ['Match the middle term: the 2 in front of the inner root means mn = q.', 'Beech ke pad ka 2 batata hai ki mn=q.', 'बीच के पद का 2 बताता है कि mn=q।']);
  }

  Q.wrap({ q2_finite_nested: finiteNested, q2_double_nested: doubleNested });
  try { console.log('[mqs2-surd5] ready'); } catch (e) {}
})();
