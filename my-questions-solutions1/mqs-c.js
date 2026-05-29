/* my-questions-solutions1/mqs-c.js
   Descriptive (page-style) DYNAMIC solutions - Part C: prime-factorisation problems
   (least number / multiply / divide to make perfect square or cube), n-digit, sixth power.
   Covers (10): mq_least_sq, mq_least_cb, mq_mul_sq, mq_mul_cb, mq_div_sq, mq_div_cb,
                mq_mulN_cb, mq_ndigit_cube, mq_ndigit_sq, mq_sixth.
   NEW file - does NOT modify any existing file. Requires mqs-helpers.js loaded first.
   Steps + shortcuts are descriptive (beginner-friendly); hints are one-liners.
   Every base generator AND all VARIANTS are wrapped, so solutions are per-question dynamic.
*/
(function () {
  'use strict';
  var M = window.MQS;
  if (!M) { try { console.warn('[mqs-c] MQS missing; load mqs-helpers.js first'); } catch (e) {} return; }
  var K = M.K, RT = M.RT, CRT = M.CRT, FR = M.FR, POW = M.POW, BOX = M.BOX, X = M.X, L = M.L,
      steps = M.steps, MK = M.MK, ints = M.ints, ansN = M.ansN;

  function solLeastSq(nums) {
    var L0 = M.lcmArr(nums), m = M.sqMul(L0), v = L0 * m, odd = M.oddPrimes(L0);
    var lcmEq = K('LCM(' + nums.join(', ') + ') = ' + L0), pfEq = K(L0 + ' = ' + M.pfTex(L0)), mulEq = K(L0 + X() + m + ' = ' + v), ans = K(BOX(v));
    var fixEn = (m === 1) ? L(pfEq + ' - every prime already appears an even number of times, so the LCM itself is a perfect square.') : L(pfEq, 'The prime(s) ' + odd.join(', ') + ' appear an ODD number of times. Multiply once by their product ' + m + ' to pair them up:', mulEq);
    var fixHg = (m === 1) ? L(pfEq + ' - har prime pehle se even baar aata hai, isliye LCM khud perfect square hai.') : L(pfEq, 'Prime(s) ' + odd.join(', ') + ' ODD baar aate hain. Inke product ' + m + ' se ek baar multiply karke pair karo:', mulEq);
    var fixHi = (m === 1) ? L(pfEq + ' - \u0939\u0930 \u0905\u092d\u093e\u091c\u094d\u092f \u092a\u0939\u0932\u0947 \u0938\u0947 \u0938\u092e \u092c\u093e\u0930 \u0906\u0924\u093e \u0939\u0948, \u0907\u0938\u0932\u093f\u090f \u0932.\u0938. \u0938\u094d\u0935\u092f\u0902 \u092a\u0942\u0930\u094d\u0923 \u0935\u0930\u094d\u0917 \u0939\u0948\u0964') : L(pfEq, '\u0905\u092d\u093e\u091c\u094d\u092f ' + odd.join(', ') + ' \u0935\u093f\u0937\u092e \u092c\u093e\u0930 \u0906\u0924\u0947 \u0939\u0948\u0902\u0964 \u0907\u0928\u0915\u0947 \u0917\u0941\u0923\u0928\u092b\u0932 ' + m + ' \u0938\u0947 \u090f\u0915 \u092c\u093e\u0930 \u0917\u0941\u0923\u093e \u0915\u0930\u0915\u0947 \u092f\u0941\u0917\u094d\u092e \u092c\u0928\u093e\u0913:', mulEq);
    return MK(
      { s: steps([
        ['Step 1 - Understand the question', 'The number must be divisible by every one of ' + nums.join(', ') + ' AND be a perfect square. "Divisible by all" means take their LCM; "perfect square" means every prime power must be even.'],
        ['Step 2 - Find the LCM', lcmEq + '.'],
        ['Step 3 - Make it a perfect square', fixEn],
        ['Step 4 - Answer', ans]
      ]), c: 'Take the LCM, then multiply by the product of any primes that appear an odd number of times. Here LCM x ' + m + ' = ' + v + '.', h: 'LCM first, then make every prime power even.' },
      { s: steps([
        ['Step 1 - Samjho', 'Number ' + nums.join(', ') + ' sab se divisible ho AUR perfect square ho. "Sab se divisible" matlab LCM; "perfect square" matlab har prime power even ho.'],
        ['Step 2 - LCM nikaalo', lcmEq + '.'],
        ['Step 3 - Perfect square banao', fixHg],
        ['Step 4 - Answer', ans]
      ]), c: 'LCM lo, phir un primes ke product se multiply karo jo odd baar aate hain. Yahan LCM x ' + m + ' = ' + v + '.', h: 'Pehle LCM, phir har prime power even karo.' },
      { s: steps([
        ['\u091a\u0930\u0923 1 - \u092a\u094d\u0930\u0936\u094d\u0928 \u0938\u092e\u091d\u094b', '\u0938\u0902\u0916\u094d\u092f\u093e ' + nums.join(', ') + ' \u0938\u092d\u0940 \u0938\u0947 \u0935\u093f\u092d\u093e\u091c\u094d\u092f \u0939\u094b \u0914\u0930 \u092a\u0942\u0930\u094d\u0923 \u0935\u0930\u094d\u0917 \u0939\u094b\u0964 "\u0938\u092d\u0940 \u0938\u0947 \u0935\u093f\u092d\u093e\u091c\u094d\u092f" \u092f\u093e\u0928\u0940 \u0932.\u0938.; "\u092a\u0942\u0930\u094d\u0923 \u0935\u0930\u094d\u0917" \u092f\u093e\u0928\u0940 \u0939\u0930 \u0905\u092d\u093e\u091c\u094d\u092f \u0918\u093e\u0924 \u0938\u092e \u0939\u094b\u0964'],
        ['\u091a\u0930\u0923 2 - \u0932.\u0938. \u0928\u093f\u0915\u093e\u0932\u094b', lcmEq + '\u0964'],
        ['\u091a\u0930\u0923 3 - \u092a\u0942\u0930\u094d\u0923 \u0935\u0930\u094d\u0917 \u092c\u0928\u093e\u0913', fixHi],
        ['\u091a\u0930\u0923 4 - \u0909\u0924\u094d\u0924\u0930', ans]
      ]), c: '\u0932.\u0938. \u0932\u094b, \u092b\u093f\u0930 \u0935\u093f\u0937\u092e \u092c\u093e\u0930 \u0906\u0928\u0947 \u0935\u093e\u0932\u0947 \u0905\u092d\u093e\u091c\u094d\u092f\u094b\u0902 \u0915\u0947 \u0917\u0941\u0923\u0928\u092b\u0932 \u0938\u0947 \u0917\u0941\u0923\u093e \u0915\u0930\u094b\u0964 \u092f\u0939\u093e\u0901 \u0932.\u0938. x ' + m + ' = ' + v + '\u0964', h: '\u092a\u0939\u0932\u0947 \u0932.\u0938., \u092b\u093f\u0930 \u0939\u0930 \u0905\u092d\u093e\u091c\u094d\u092f \u0918\u093e\u0924 \u0938\u092e \u0915\u0930\u094b\u0964' }
    );
  }

  function solLeastCb(nums) {
    var L0 = M.lcmArr(nums), m = M.cubeMissing(L0), v = L0 * m;
    var lcmEq = K('LCM(' + nums.join(', ') + ') = ' + L0), pfEq = K(L0 + ' = ' + M.pfTex(L0)), mulEq = K(L0 + X() + m + ' = ' + v), ans = K(BOX(v));
    var fixEn = (m === 1) ? L(pfEq + ' - every prime power is already a multiple of 3, so the LCM itself is a perfect cube.') : L(pfEq, 'Bring every prime power up to a multiple of 3 by multiplying by ' + m + ':', mulEq);
    var fixHg = (m === 1) ? L(pfEq + ' - har prime power pehle se 3 ka multiple hai, isliye LCM khud perfect cube hai.') : L(pfEq, 'Har prime power ko 3 ke multiple tak laao - ' + m + ' se multiply karo:', mulEq);
    var fixHi = (m === 1) ? L(pfEq + ' - \u0939\u0930 \u0905\u092d\u093e\u091c\u094d\u092f \u0918\u093e\u0924 \u092a\u0939\u0932\u0947 \u0938\u0947 3 \u0915\u093e \u0917\u0941\u0923\u091c \u0939\u0948, \u0907\u0938\u0932\u093f\u090f \u0932.\u0938. \u0938\u094d\u0935\u092f\u0902 \u092a\u0942\u0930\u094d\u0923 \u0918\u0928 \u0939\u0948\u0964') : L(pfEq, '\u0939\u0930 \u0905\u092d\u093e\u091c\u094d\u092f \u0918\u093e\u0924 \u0915\u094b 3 \u0915\u0947 \u0917\u0941\u0923\u091c \u0924\u0915 \u0932\u093e\u0913 - ' + m + ' \u0938\u0947 \u0917\u0941\u0923\u093e \u0915\u0930\u094b:', mulEq);
    return MK(
      { s: steps([
        ['Step 1 - Understand the question', 'The number must be divisible by all of ' + nums.join(', ') + ' (so take the LCM) AND be a perfect cube (every prime power a multiple of 3).'],
        ['Step 2 - Find the LCM', lcmEq + '.'],
        ['Step 3 - Make it a perfect cube', fixEn],
        ['Step 4 - Answer', ans]
      ]), c: 'Take the LCM, then multiply to make every prime power a multiple of 3. LCM x ' + m + ' = ' + v + '.', h: 'LCM first, then make every prime power a multiple of 3.' },
      { s: steps([
        ['Step 1 - Samjho', 'Number ' + nums.join(', ') + ' sab se divisible ho (LCM) AUR perfect cube ho (har prime power 3 ka multiple).'],
        ['Step 2 - LCM nikaalo', lcmEq + '.'],
        ['Step 3 - Perfect cube banao', fixHg],
        ['Step 4 - Answer', ans]
      ]), c: 'LCM lo, phir har prime power ko 3 ke multiple banane ke liye multiply. LCM x ' + m + ' = ' + v + '.', h: 'Pehle LCM, phir har prime power 3 ka multiple.' },
      { s: steps([
        ['\u091a\u0930\u0923 1 - \u092a\u094d\u0930\u0936\u094d\u0928 \u0938\u092e\u091d\u094b', '\u0938\u0902\u0916\u094d\u092f\u093e ' + nums.join(', ') + ' \u0938\u092d\u0940 \u0938\u0947 \u0935\u093f\u092d\u093e\u091c\u094d\u092f \u0939\u094b (\u0932.\u0938.) \u0914\u0930 \u092a\u0942\u0930\u094d\u0923 \u0918\u0928 \u0939\u094b (\u0939\u0930 \u0905\u092d\u093e\u091c\u094d\u092f \u0918\u093e\u0924 3 \u0915\u093e \u0917\u0941\u0923\u091c)\u0964'],
        ['\u091a\u0930\u0923 2 - \u0932.\u0938. \u0928\u093f\u0915\u093e\u0932\u094b', lcmEq + '\u0964'],
        ['\u091a\u0930\u0923 3 - \u092a\u0942\u0930\u094d\u0923 \u0918\u0928 \u092c\u0928\u093e\u0913', fixHi],
        ['\u091a\u0930\u0923 4 - \u0909\u0924\u094d\u0924\u0930', ans]
      ]), c: '\u0932.\u0938. \u0932\u094b, \u092b\u093f\u0930 \u0939\u0930 \u0905\u092d\u093e\u091c\u094d\u092f \u0918\u093e\u0924 \u0915\u094b 3 \u0915\u093e \u0917\u0941\u0923\u091c \u092c\u0928\u093e\u0928\u0947 \u0939\u0947\u0924\u0941 \u0917\u0941\u0923\u093e\u0964 \u0932.\u0938. x ' + m + ' = ' + v + '\u0964', h: '\u092a\u0939\u0932\u0947 \u0932.\u0938., \u092b\u093f\u0930 \u0939\u0930 \u0918\u093e\u0924 3 \u0915\u093e \u0917\u0941\u0923\u091c\u0964' }
    );
  }

  function solMulSqLcm(nums) {
    var L0 = M.lcmArr(nums), m = M.sqMul(L0), odd = M.oddPrimes(L0);
    var pfEq = K('LCM = ' + L0 + ' = ' + M.pfTex(L0)), ans = K(BOX(m)), oddTxt = (odd.join(', ') || 'none');
    return MK(
      { s: steps([
        ['Step 1 - Understand the question', 'We have the LCM of ' + nums.join(', ') + '. We want the SMALLEST number to multiply it by so the product becomes a perfect square - i.e. every prime power becomes even.'],
        ['Step 2 - Prime factorise the LCM', pfEq + '.'],
        ['Step 3 - Pair the odd powers', 'Odd-power prime(s): ' + oddTxt + '. Multiply by their product = ' + m + ' so all powers become even.'],
        ['Step 4 - Answer', ans]
      ]), c: 'Multiply by the product of the primes that have an odd power = ' + m + '.', h: 'Multiply by the primes that appear an odd number of times.' },
      { s: steps([
        ['Step 1 - Samjho', nums.join(', ') + ' ka LCM hai. Sabse CHHOTA number chahiye jisse multiply karke product perfect square ban jaaye - yaani har prime power even ho.'],
        ['Step 2 - LCM ko prime factorise karo', pfEq + '.'],
        ['Step 3 - Odd powers ko pair karo', 'Odd-power prime(s): ' + oddTxt + '. Inke product = ' + m + ' se multiply karo, sab powers even ho jaayengi.'],
        ['Step 4 - Answer', ans]
      ]), c: 'Odd power wale primes ke product = ' + m + ' se multiply karo.', h: 'Odd baar aane wale primes se multiply karo.' },
      { s: steps([
        ['\u091a\u0930\u0923 1 - \u092a\u094d\u0930\u0936\u094d\u0928 \u0938\u092e\u091d\u094b', nums.join(', ') + ' \u0915\u093e \u0932.\u0938. \u0939\u0948\u0964 \u0938\u092c\u0938\u0947 \u091b\u094b\u091f\u0940 \u0938\u0902\u0916\u094d\u092f\u093e \u091a\u093e\u0939\u093f\u090f \u091c\u093f\u0938\u0938\u0947 \u0917\u0941\u0923\u093e \u0915\u0930\u0915\u0947 \u0917\u0941\u0923\u0928\u092b\u0932 \u092a\u0942\u0930\u094d\u0923 \u0935\u0930\u094d\u0917 \u092c\u0928\u0947 - \u092f\u093e\u0928\u0940 \u0939\u0930 \u0905\u092d\u093e\u091c\u094d\u092f \u0918\u093e\u0924 \u0938\u092e \u0939\u094b\u0964'],
        ['\u091a\u0930\u0923 2 - \u0932.\u0938. \u0915\u094b \u0905\u092d\u093e\u091c\u094d\u092f \u0917\u0941\u0923\u0928\u0916\u0902\u0921 \u0915\u0930\u094b', pfEq + '\u0964'],
        ['\u091a\u0930\u0923 3 - \u0935\u093f\u0937\u092e \u0918\u093e\u0924\u094b\u0902 \u0915\u094b \u092f\u0941\u0917\u094d\u092e \u0915\u0930\u094b', '\u0935\u093f\u0937\u092e-\u0918\u093e\u0924 \u0905\u092d\u093e\u091c\u094d\u092f: ' + oddTxt + '\u0964 \u0907\u0928\u0915\u0947 \u0917\u0941\u0923\u0928\u092b\u0932 = ' + m + ' \u0938\u0947 \u0917\u0941\u0923\u093e \u0915\u0930\u094b\u0964'],
        ['\u091a\u0930\u0923 4 - \u0909\u0924\u094d\u0924\u0930', ans]
      ]), c: '\u0935\u093f\u0937\u092e \u0918\u093e\u0924 \u0935\u093e\u0932\u0947 \u0905\u092d\u093e\u091c\u094d\u092f\u094b\u0902 \u0915\u0947 \u0917\u0941\u0923\u0928\u092b\u0932 = ' + m + ' \u0938\u0947 \u0917\u0941\u0923\u093e \u0915\u0930\u094b\u0964', h: '\u0935\u093f\u0937\u092e \u092c\u093e\u0930 \u0906\u0928\u0947 \u0935\u093e\u0932\u0947 \u0905\u092d\u093e\u091c\u094d\u092f\u094b\u0902 \u0938\u0947 \u0917\u0941\u0923\u093e\u0964' }
    );
  }

  function solMulCbLcm(nums) {
    var L0 = M.lcmArr(nums), m = M.cubeMissing(L0);
    var pfEq = K('LCM = ' + L0 + ' = ' + M.pfTex(L0)), ans = K(BOX(m));
    return MK(
      { s: steps([
        ['Step 1 - Understand the question', 'From the LCM of ' + nums.join(', ') + ', find the SMALLEST number to multiply by so the product is a perfect cube - every prime power a multiple of 3.'],
        ['Step 2 - Prime factorise the LCM', pfEq + '.'],
        ['Step 3 - Complete each power to a multiple of 3', 'Multiply by ' + m + ' so every prime power becomes a multiple of 3.'],
        ['Step 4 - Answer', ans]
      ]), c: 'Multiply by ' + m + ' to complete every prime power to a multiple of 3.', h: 'Complete each prime power to a multiple of 3.' },
      { s: steps([
        ['Step 1 - Samjho', nums.join(', ') + ' ke LCM se sabse CHHOTA number chahiye jisse multiply karke product perfect cube bane - har prime power 3 ka multiple.'],
        ['Step 2 - LCM ko prime factorise karo', pfEq + '.'],
        ['Step 3 - Har power ko 3 ke multiple tak laao', m + ' se multiply karo taaki har prime power 3 ka multiple ho.'],
        ['Step 4 - Answer', ans]
      ]), c: m + ' se multiply karke har prime power 3 ka multiple banao.', h: 'Har prime power 3 ka multiple banao.' },
      { s: steps([
        ['\u091a\u0930\u0923 1 - \u092a\u094d\u0930\u0936\u094d\u0928 \u0938\u092e\u091d\u094b', nums.join(', ') + ' \u0915\u0947 \u0932.\u0938. \u0938\u0947 \u0938\u092c\u0938\u0947 \u091b\u094b\u091f\u0940 \u0938\u0902\u0916\u094d\u092f\u093e \u091a\u093e\u0939\u093f\u090f \u091c\u093f\u0938\u0938\u0947 \u0917\u0941\u0923\u093e \u0915\u0930\u0915\u0947 \u0917\u0941\u0923\u0928\u092b\u0932 \u092a\u0942\u0930\u094d\u0923 \u0918\u0928 \u092c\u0928\u0947 - \u0939\u0930 \u0905\u092d\u093e\u091c\u094d\u092f \u0918\u093e\u0924 3 \u0915\u093e \u0917\u0941\u0923\u091c\u0964'],
        ['\u091a\u0930\u0923 2 - \u0932.\u0938. \u0915\u094b \u0905\u092d\u093e\u091c\u094d\u092f \u0917\u0941\u0923\u0928\u0916\u0902\u0921 \u0915\u0930\u094b', pfEq + '\u0964'],
        ['\u091a\u0930\u0923 3 - \u0939\u0930 \u0918\u093e\u0924 \u0915\u094b 3 \u0915\u0947 \u0917\u0941\u0923\u091c \u0924\u0915 \u0932\u093e\u0913', m + ' \u0938\u0947 \u0917\u0941\u0923\u093e \u0915\u0930\u094b \u0924\u093e\u0915\u093f \u0939\u0930 \u0905\u092d\u093e\u091c\u094d\u092f \u0918\u093e\u0924 3 \u0915\u093e \u0917\u0941\u0923\u091c \u0939\u094b\u0964'],
        ['\u091a\u0930\u0923 4 - \u0909\u0924\u094d\u0924\u0930', ans]
      ]), c: m + ' \u0938\u0947 \u0917\u0941\u0923\u093e \u0915\u0930\u0915\u0947 \u0939\u0930 \u0905\u092d\u093e\u091c\u094d\u092f \u0918\u093e\u0924 3 \u0915\u093e \u0917\u0941\u0923\u091c \u092c\u0928\u093e\u0913\u0964', h: '\u0939\u0930 \u0905\u092d\u093e\u091c\u094d\u092f \u0918\u093e\u0924 3 \u0915\u093e \u0917\u0941\u0923\u091c \u092c\u0928\u093e\u0913\u0964' }
    );
  }

  function solDivSq(N) {
    var m = M.sqMul(N), res = N / m, rt = M.isqrt(res), odd = M.oddPrimes(N);
    var pfEq = K(N + ' = ' + M.pfTex(N)), divEq = K(FR(N, m) + ' = ' + res + ' = ' + POW(rt, 2)), ans = K(BOX(m)), oddTxt = (odd.join(', ') || 'none');
    return MK(
      { s: steps([
        ['Step 1 - Understand the question', 'We want the LEAST number to DIVIDE ' + N + ' by so the result is a perfect square. Remove exactly the primes that occur an odd number of times.'],
        ['Step 2 - Prime factorise', pfEq + '.'],
        ['Step 3 - Divide out the odd-power primes', 'Odd-power prime(s): ' + oddTxt + '. ' + divEq + '.'],
        ['Step 4 - Answer', ans]
      ]), c: 'Divide by the product of the odd-power primes = ' + m + ', leaving the perfect square ' + res + '.', h: 'Divide out the primes that have an odd power.' },
      { s: steps([
        ['Step 1 - Samjho', 'Sabse CHHOTA number chahiye jisse ' + N + ' ko DIVIDE karne par result perfect square ho. Jo primes odd baar aate hain unhe theek hatao.'],
        ['Step 2 - Prime factorise karo', pfEq + '.'],
        ['Step 3 - Odd-power primes ko divide karo', 'Odd-power prime(s): ' + oddTxt + '. ' + divEq + '.'],
        ['Step 4 - Answer', ans]
      ]), c: 'Odd-power primes ke product = ' + m + ' se divide karo, perfect square ' + res + ' bachta hai.', h: 'Odd power wale primes ko divide kar do.' },
      { s: steps([
        ['\u091a\u0930\u0923 1 - \u092a\u094d\u0930\u0936\u094d\u0928 \u0938\u092e\u091d\u094b', '\u0938\u092c\u0938\u0947 \u091b\u094b\u091f\u0940 \u0938\u0902\u0916\u094d\u092f\u093e \u091a\u093e\u0939\u093f\u090f \u091c\u093f\u0938\u0938\u0947 ' + N + ' \u0915\u094b \u092d\u093e\u0917 \u0926\u0947\u0928\u0947 \u092a\u0930 \u092a\u0942\u0930\u094d\u0923 \u0935\u0930\u094d\u0917 \u092e\u093f\u0932\u0947\u0964 \u091c\u094b \u0905\u092d\u093e\u091c\u094d\u092f \u0935\u093f\u0937\u092e \u092c\u093e\u0930 \u0906\u0924\u0947 \u0939\u0948\u0902 \u0909\u0928\u094d\u0939\u0947\u0902 \u0939\u091f\u093e\u0913\u0964'],
        ['\u091a\u0930\u0923 2 - \u0905\u092d\u093e\u091c\u094d\u092f \u0917\u0941\u0923\u0928\u0916\u0902\u0921 \u0915\u0930\u094b', pfEq + '\u0964'],
        ['\u091a\u0930\u0923 3 - \u0935\u093f\u0937\u092e-\u0918\u093e\u0924 \u0905\u092d\u093e\u091c\u094d\u092f\u094b\u0902 \u0938\u0947 \u092d\u093e\u0917 \u0926\u094b', '\u0935\u093f\u0937\u092e-\u0918\u093e\u0924 \u0905\u092d\u093e\u091c\u094d\u092f: ' + oddTxt + '\u0964 ' + divEq + '\u0964'],
        ['\u091a\u0930\u0923 4 - \u0909\u0924\u094d\u0924\u0930', ans]
      ]), c: '\u0935\u093f\u0937\u092e-\u0918\u093e\u0924 \u0905\u092d\u093e\u091c\u094d\u092f\u094b\u0902 \u0915\u0947 \u0917\u0941\u0923\u0928\u092b\u0932 = ' + m + ' \u0938\u0947 \u092d\u093e\u0917 \u0926\u094b, \u092a\u0942\u0930\u094d\u0923 \u0935\u0930\u094d\u0917 ' + res + ' \u092c\u091a\u0924\u093e \u0939\u0948\u0964', h: '\u0935\u093f\u0937\u092e \u0918\u093e\u0924 \u0935\u093e\u0932\u0947 \u0905\u092d\u093e\u091c\u094d\u092f\u094b\u0902 \u0938\u0947 \u092d\u093e\u0917 \u0926\u094b\u0964' }
    );
  }

  function solDivCb(N) {
    var m = M.cubeRemove(N), res = N / m, rt = M.icbrt(res);
    var pfEq = K(N + ' = ' + M.pfTex(N)), divEq = K(FR(N, m) + ' = ' + res + ' = ' + POW(rt, 3)), ans = K(BOX(m));
    return MK(
      { s: steps([
        ['Step 1 - Understand the question', 'We want the LEAST number to DIVIDE ' + N + ' by so the result is a perfect cube. Remove the extra prime powers that are not multiples of 3.'],
        ['Step 2 - Prime factorise', pfEq + '.'],
        ['Step 3 - Remove the extra prime powers', divEq + '.'],
        ['Step 4 - Answer', ans]
      ]), c: 'Divide by ' + m + ' to leave only prime powers that are multiples of 3, giving the cube ' + res + '.', h: 'Divide out the extra prime powers (the part beyond a multiple of 3).' },
      { s: steps([
        ['Step 1 - Samjho', 'Sabse CHHOTA number chahiye jisse ' + N + ' ko DIVIDE karne par perfect cube mile. Jo prime powers 3 ke multiple nahi hain woh extra hata do.'],
        ['Step 2 - Prime factorise karo', pfEq + '.'],
        ['Step 3 - Extra prime powers hatao', divEq + '.'],
        ['Step 4 - Answer', ans]
      ]), c: m + ' se divide karo taaki sirf 3 ke multiple wale prime powers bachein, cube ' + res + ' milta hai.', h: 'Extra prime powers (3 ke multiple se zyada wala hissa) divide karo.' },
      { s: steps([
        ['\u091a\u0930\u0923 1 - \u092a\u094d\u0930\u0936\u094d\u0928 \u0938\u092e\u091d\u094b', '\u0938\u092c\u0938\u0947 \u091b\u094b\u091f\u0940 \u0938\u0902\u0916\u094d\u092f\u093e \u091a\u093e\u0939\u093f\u090f \u091c\u093f\u0938\u0938\u0947 ' + N + ' \u0915\u094b \u092d\u093e\u0917 \u0926\u0947\u0928\u0947 \u092a\u0930 \u092a\u0942\u0930\u094d\u0923 \u0918\u0928 \u092e\u093f\u0932\u0947\u0964 \u091c\u094b \u0905\u092d\u093e\u091c\u094d\u092f \u0918\u093e\u0924 3 \u0915\u0947 \u0917\u0941\u0923\u091c \u0928\u0939\u0940\u0902 \u0939\u0948\u0902 \u0909\u0928\u094d\u0939\u0947\u0902 \u0939\u091f\u093e\u0913\u0964'],
        ['\u091a\u0930\u0923 2 - \u0905\u092d\u093e\u091c\u094d\u092f \u0917\u0941\u0923\u0928\u0916\u0902\u0921 \u0915\u0930\u094b', pfEq + '\u0964'],
        ['\u091a\u0930\u0923 3 - \u0905\u0924\u093f\u0930\u093f\u0915\u094d\u0924 \u0918\u093e\u0924 \u0939\u091f\u093e\u0913', divEq + '\u0964'],
        ['\u091a\u0930\u0923 4 - \u0909\u0924\u094d\u0924\u0930', ans]
      ]), c: m + ' \u0938\u0947 \u092d\u093e\u0917 \u0926\u094b \u0924\u093e\u0915\u093f \u0915\u0947\u0935\u0932 3 \u0915\u0947 \u0917\u0941\u0923\u091c \u0935\u093e\u0932\u0947 \u0918\u093e\u0924 \u092c\u091a\u0947\u0902, \u0918\u0928 ' + res + ' \u092e\u093f\u0932\u0924\u093e \u0939\u0948\u0964', h: '\u0905\u0924\u093f\u0930\u093f\u0915\u094d\u0924 \u0905\u092d\u093e\u091c\u094d\u092f \u0918\u093e\u0924\u094b\u0902 \u0938\u0947 \u092d\u093e\u0917 \u0926\u094b\u0964' }
    );
  }

  function solMulCbNum(N) {
    var m = M.cubeMissing(N), res = N * m, rt = M.icbrt(res);
    var pfEq = K(N + ' = ' + M.pfTex(N)), mulEq = K(N + X() + m + ' = ' + res + ' = ' + POW(rt, 3)), ans = K(BOX(m));
    return MK(
      { s: steps([
        ['Step 1 - Understand the question', 'We want the LEAST number to MULTIPLY ' + N + ' by so it becomes a perfect cube. Complete every prime power up to the next multiple of 3.'],
        ['Step 2 - Prime factorise', pfEq + '.'],
        ['Step 3 - Complete each power to a multiple of 3', mulEq + '.'],
        ['Step 4 - Answer', ans]
      ]), c: 'Multiply by ' + m + ' to make every prime power a multiple of 3, giving the cube ' + res + '.', h: 'Complete each prime power to a multiple of 3.' },
      { s: steps([
        ['Step 1 - Samjho', 'Sabse CHHOTA number chahiye jisse ' + N + ' ko MULTIPLY karne par perfect cube bane. Har prime power ko agle 3 ke multiple tak poora karo.'],
        ['Step 2 - Prime factorise karo', pfEq + '.'],
        ['Step 3 - Har power ko 3 ke multiple tak poora karo', mulEq + '.'],
        ['Step 4 - Answer', ans]
      ]), c: m + ' se multiply karo taaki har prime power 3 ka multiple ho, cube ' + res + ' milta hai.', h: 'Har prime power ko 3 ke multiple tak poora karo.' },
      { s: steps([
        ['\u091a\u0930\u0923 1 - \u092a\u094d\u0930\u0936\u094d\u0928 \u0938\u092e\u091d\u094b', '\u0938\u092c\u0938\u0947 \u091b\u094b\u091f\u0940 \u0938\u0902\u0916\u094d\u092f\u093e \u091a\u093e\u0939\u093f\u090f \u091c\u093f\u0938\u0938\u0947 ' + N + ' \u0915\u094b \u0917\u0941\u0923\u093e \u0915\u0930\u0928\u0947 \u092a\u0930 \u092a\u0942\u0930\u094d\u0923 \u0918\u0928 \u092c\u0928\u0947\u0964 \u0939\u0930 \u0905\u092d\u093e\u091c\u094d\u092f \u0918\u093e\u0924 \u0915\u094b \u0905\u0917\u0932\u0947 3 \u0915\u0947 \u0917\u0941\u0923\u091c \u0924\u0915 \u092a\u0942\u0930\u093e \u0915\u0930\u094b\u0964'],
        ['\u091a\u0930\u0923 2 - \u0905\u092d\u093e\u091c\u094d\u092f \u0917\u0941\u0923\u0928\u0916\u0902\u0921 \u0915\u0930\u094b', pfEq + '\u0964'],
        ['\u091a\u0930\u0923 3 - \u0939\u0930 \u0918\u093e\u0924 \u0915\u094b 3 \u0915\u0947 \u0917\u0941\u0923\u091c \u0924\u0915 \u092a\u0942\u0930\u093e \u0915\u0930\u094b', mulEq + '\u0964'],
        ['\u091a\u0930\u0923 4 - \u0909\u0924\u094d\u0924\u0930', ans]
      ]), c: m + ' \u0938\u0947 \u0917\u0941\u0923\u093e \u0915\u0930\u094b \u0924\u093e\u0915\u093f \u0939\u0930 \u0905\u092d\u093e\u091c\u094d\u092f \u0918\u093e\u0924 3 \u0915\u093e \u0917\u0941\u0923\u091c \u0939\u094b, \u0918\u0928 ' + res + ' \u092e\u093f\u0932\u0924\u093e \u0939\u0948\u0964', h: '\u0939\u0930 \u0905\u092d\u093e\u091c\u094d\u092f \u0918\u093e\u0924 \u0915\u094b 3 \u0915\u0947 \u0917\u0941\u0923\u091c \u0924\u0915 \u092a\u0942\u0930\u093e \u0915\u0930\u094b\u0964' }
    );
  }

  function solNdig(o, type) {
    var en = o.question.en, d = ints(en)[0];
    var mode = /Smallest/i.test(en) ? 'small' : (/root/i.test(en) ? 'root' : 'large');
    var isCb = type === 'cb', lo = Math.pow(10, d - 1), hi = Math.pow(10, d) - 1;
    var rt = isCb ? M.icbrt : M.isqrt, R = isCb ? CRT : RT, wEn = isCb ? 'cube' : 'square', wHi = isCb ? '\u0918\u0928' : '\u0935\u0930\u094d\u0917';
    function pw(r) { return isCb ? r * r * r : r * r; }
    function pwTex(r, val) { return isCb ? M.cubeTex(r, val) : '(' + r + X() + r + ') = ' + val; }
    var v, body, idEn, idHg, idHi, bound;
    if (mode === 'small') {
      var rLo = rt(lo); if (pw(rLo) < lo) rLo++; v = pw(rLo); bound = lo;
      body = L(K('Smallest ' + d + '-digit number = ' + lo), 'The smallest whole root whose ' + wEn + ' is at least ' + lo + ' is ' + rLo + '.', K(pwTex(rLo, v)));
      idEn = 'Find the smallest ' + d + '-digit perfect ' + wEn + '.'; idHg = 'Sabse chhota ' + d + '-digit perfect ' + wEn + ' dhoondna hai.'; idHi = '\u0938\u092c\u0938\u0947 \u091b\u094b\u091f\u093e ' + d + '-\u0905\u0902\u0915\u0940\u092f \u092a\u0942\u0930\u094d\u0923 ' + wHi + ' \u0916\u094b\u091c\u0928\u093e \u0939\u0948\u0964';
    } else if (mode === 'root') {
      var rH = rt(hi); v = rH; bound = hi;
      body = L(K('Largest ' + d + '-digit perfect ' + wEn + ' = ' + pw(rH)), K(R(pw(rH)) + ' = ' + rH));
      idEn = 'Take the root of the largest ' + d + '-digit perfect ' + wEn + '.'; idHg = 'Sabse bade ' + d + '-digit perfect ' + wEn + ' ka root lena hai.'; idHi = '\u0938\u092c\u0938\u0947 \u092c\u0921\u093c\u0947 ' + d + '-\u0905\u0902\u0915\u0940\u092f \u092a\u0942\u0930\u094d\u0923 ' + wHi + ' \u0915\u093e \u092e\u0942\u0932 \u0932\u0947\u0928\u093e \u0939\u0948\u0964';
    } else {
      var rHi = rt(hi); v = pw(rHi); bound = hi;
      body = L(K('Largest ' + d + '-digit number = ' + hi), 'The largest whole root whose ' + wEn + ' is at most ' + hi + ' is ' + rHi + '.', K(pwTex(rHi, v)));
      idEn = 'Find the largest ' + d + '-digit perfect ' + wEn + '.'; idHg = 'Sabse bada ' + d + '-digit perfect ' + wEn + ' dhoondna hai.'; idHi = '\u0938\u092c\u0938\u0947 \u092c\u0921\u093c\u093e ' + d + '-\u0905\u0902\u0915\u0940\u092f \u092a\u0942\u0930\u094d\u0923 ' + wHi + ' \u0916\u094b\u091c\u0928\u093e \u0939\u0948\u0964';
    }
    var ans = K(BOX(v));
    return MK(
      { s: steps([
        ['Step 1 - Understand the question', idEn + ' A ' + d + '-digit number lies between ' + lo + ' and ' + hi + '.'],
        ['Step 2 - Work it out', body],
        ['Step 3 - Answer', ans]
      ]), c: idEn + ' Use the boundary ' + bound + ' and round to the nearest whole root.', h: idEn },
      { s: steps([
        ['Step 1 - Samjho', idHg + ' ' + d + '-digit number ' + lo + ' aur ' + hi + ' ke beech hota hai.'],
        ['Step 2 - Hal karo', body],
        ['Step 3 - Answer', ans]
      ]), c: idHg + ' Boundary ' + bound + ' lo aur nearest whole root tak round karo.', h: idHg },
      { s: steps([
        ['\u091a\u0930\u0923 1 - \u092a\u094d\u0930\u0936\u094d\u0928 \u0938\u092e\u091d\u094b', idHi + ' ' + d + '-\u0905\u0902\u0915\u0940\u092f \u0938\u0902\u0916\u094d\u092f\u093e ' + lo + ' \u0914\u0930 ' + hi + ' \u0915\u0947 \u092c\u0940\u091a \u0939\u094b\u0924\u0940 \u0939\u0948\u0964'],
        ['\u091a\u0930\u0923 2 - \u0939\u0932 \u0915\u0930\u094b', body],
        ['\u091a\u0930\u0923 3 - \u0909\u0924\u094d\u0924\u0930', ans]
      ]), c: idHi + ' \u0938\u0940\u092e\u093e ' + bound + ' \u0932\u0947\u0915\u0930 \u0928\u093f\u0915\u091f\u0924\u092e \u092a\u0942\u0930\u094d\u0923 \u092e\u0942\u0932 \u0924\u0915 \u0930\u093e\u0909\u0902\u0921 \u0915\u0930\u094b\u0964', h: idHi }
    );
  }

  function solSixth(v) {
    var sq = M.isqrt(v), cb = M.icbrt(v), r6 = Math.round(Math.pow(v, 1 / 6));
    var sqEq = K(RT(v) + ' = ' + sq), cbEq = K(CRT(v) + ' = ' + cb), sixEq = K(v + ' = ' + POW(r6, 6)), ans = K(BOX(v));
    return MK(
      { s: steps([
        ['Step 1 - Understand the question', 'We need a number that is BOTH a perfect square and a perfect cube. Such a number is always a perfect 6th power, because 6 is the smallest number divisible by both 2 and 3.'],
        ['Step 2 - Check both properties', L(sqEq + ' (a perfect square)', cbEq + ' (a perfect cube)')],
        ['Step 3 - Write it as a 6th power', sixEq + '.'],
        ['Step 4 - Answer', ans]
      ]), c: 'The number that is a square and a cube together is a 6th power: ' + v + ' = ' + r6 + ' to the power 6.', h: 'Look for a perfect 6th power.' },
      { s: steps([
        ['Step 1 - Samjho', 'Aisa number chahiye jo perfect square AUR perfect cube dono ho. Aisa number hamesha perfect 6th power hota hai, kyunki 6 hi sabse chhota number hai jo 2 aur 3 dono se divisible hai.'],
        ['Step 2 - Dono properties check karo', L(sqEq + ' (perfect square)', cbEq + ' (perfect cube)')],
        ['Step 3 - 6th power likho', sixEq + '.'],
        ['Step 4 - Answer', ans]
      ]), c: 'Jo number square aur cube dono ho woh 6th power hota hai: ' + v + ' = ' + r6 + ' ki power 6.', h: 'Perfect 6th power dhoondo.' },
      { s: steps([
        ['\u091a\u0930\u0923 1 - \u092a\u094d\u0930\u0936\u094d\u0928 \u0938\u092e\u091d\u094b', '\u0910\u0938\u0940 \u0938\u0902\u0916\u094d\u092f\u093e \u091a\u093e\u0939\u093f\u090f \u091c\u094b \u092a\u0942\u0930\u094d\u0923 \u0935\u0930\u094d\u0917 \u0914\u0930 \u092a\u0942\u0930\u094d\u0923 \u0918\u0928 \u0926\u094b\u0928\u094b\u0902 \u0939\u094b\u0964 \u0910\u0938\u0940 \u0938\u0902\u0916\u094d\u092f\u093e \u0939\u092e\u0947\u0936\u093e \u092a\u0942\u0930\u094d\u0923 \u091b\u0920\u0940 \u0918\u093e\u0924 \u0939\u094b\u0924\u0940 \u0939\u0948, \u0915\u094d\u092f\u094b\u0902\u0915\u093f 6 \u0939\u0940 \u0938\u092c\u0938\u0947 \u091b\u094b\u091f\u0940 \u0938\u0902\u0916\u094d\u092f\u093e \u0939\u0948 \u091c\u094b 2 \u0914\u0930 3 \u0926\u094b\u0928\u094b\u0902 \u0938\u0947 \u0935\u093f\u092d\u093e\u091c\u094d\u092f \u0939\u0948\u0964'],
        ['\u091a\u0930\u0923 2 - \u0926\u094b\u0928\u094b\u0902 \u0917\u0941\u0923 \u091c\u093e\u0901\u091a\u094b', L(sqEq + ' (\u092a\u0942\u0930\u094d\u0923 \u0935\u0930\u094d\u0917)', cbEq + ' (\u092a\u0942\u0930\u094d\u0923 \u0918\u0928)')],
        ['\u091a\u0930\u0923 3 - \u091b\u0920\u0940 \u0918\u093e\u0924 \u0915\u0947 \u0930\u0942\u092a \u092e\u0947\u0902 \u0932\u093f\u0916\u094b', sixEq + '\u0964'],
        ['\u091a\u0930\u0923 4 - \u0909\u0924\u094d\u0924\u0930', ans]
      ]), c: '\u091c\u094b \u0938\u0902\u0916\u094d\u092f\u093e \u0935\u0930\u094d\u0917 \u0914\u0930 \u0918\u0928 \u0926\u094b\u0928\u094b\u0902 \u0939\u094b \u0935\u0939 \u091b\u0920\u0940 \u0918\u093e\u0924 \u0939\u094b\u0924\u0940 \u0939\u0948: ' + v + ' = ' + r6 + ' \u0915\u0940 \u0918\u093e\u0924 6\u0964', h: '\u092a\u0942\u0930\u094d\u0923 \u091b\u0920\u0940 \u0918\u093e\u0924 \u0916\u094b\u091c\u094b\u0964' }
    );
  }

  var SOL = {
    mq_least_sq: function (o) { return solLeastSq(M.numList(o, 'div')); },
    mq_least_cb: function (o) { return solLeastCb(M.numList(o, 'div')); },
    mq_mul_sq: function (o) { return solMulSqLcm(M.numList(o, 'lcm')); },
    mq_mul_cb: function (o) { return solMulCbLcm(M.numList(o, 'lcm')); },
    mq_div_sq: function (o) { return solDivSq(M.byNum(o)); },
    mq_div_cb: function (o) { return solDivCb(M.byNum(o)); },
    mq_mulN_cb: function (o) { return solMulCbNum(M.byNum(o)); },
    mq_ndigit_cube: function (o) { return solNdig(o, 'cb'); },
    mq_ndigit_sq: function (o) { return solNdig(o, 'sq'); },
    mq_sixth: function (o) { return solSixth(ansN(o)); }
  };
  var n = M.wrapAll(SOL);
  try { console.log('[mqs-c] descriptive solutions attached to', n, 'templates (base + all variants).'); } catch (e) {}
})();
