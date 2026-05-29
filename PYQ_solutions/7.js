/* PYQ solutions 7 of N — sq_pyq_25 to sq_pyq_28 */
(function(){
  var H=window.PYQH; if(!H) return;
  var K=H.K,RT=H.RT,CRT=H.CRT,FR=H.FR,BOX=H.BOX,POW=H.POW,S=H.S,L=H.L,sol=H.sol,T=H.TIMES;

  H.set('sq_pyq_25', sol(
    L([
      S('Step 1: Prime factorise','Break each divisor into primes: '+K('21=3'+T+'7')+', '+K('36='+POW('2','2')+T+POW('3','2'))+', '+K('66=2'+T+'3'+T+'11')+'.'),
      S('Step 2: Take the LCM','Use the highest power of each prime: '+K('LCM='+POW('2','2')+T+POW('3','2')+T+'7'+T+'11=2772')+'.'),
      S('Step 3: Make every power even','In '+K('2772')+' the primes '+K('7')+' and '+K('11')+' appear to an odd power, so multiply by '+K('7'+T+'11=77')+'.'),
      S('Step 4: The answer','This gives '+K('2772'+T+'77='+BOX('213444'))+', and '+K(RT('213444')+'=462')+'.')
    ],'Take the LCM, then pair up every prime that has an odd power.','Pehle LCM nikaalo, fir odd power waale primes ko pair karne ke liye multiply karo.'),
    L([
      S('Step 1: Prime factor karo','Har divisor ko primes me todo: '+K('21=3'+T+'7')+', '+K('36='+POW('2','2')+T+POW('3','2'))+', '+K('66=2'+T+'3'+T+'11')+'.'),
      S('Step 2: LCM lo','Har prime ki highest power lo: '+K('LCM='+POW('2','2')+T+POW('3','2')+T+'7'+T+'11=2772')+'.'),
      S('Step 3: Har power even banao',K('2772')+' me '+K('7')+' aur '+K('11')+' ki power odd hai, isliye '+K('7'+T+'11=77')+' se multiply karo.'),
      S('Step 4: Answer',K('2772'+T+'77='+BOX('213444'))+', aur '+K(RT('213444')+'=462')+'.')
    ],'LCM lo, fir har odd-power prime ko pair karo.','Pehle LCM, fir odd power waale primes pair karne ke liye multiply.'),
    L([
      S('चरण 1: अभाज्य गुणनखंड','हर भाजक को अभाज्य में तोड़ें: '+K('21=3'+T+'7')+', '+K('36='+POW('2','2')+T+POW('3','2'))+', '+K('66=2'+T+'3'+T+'11')+'.'),
      S('चरण 2: ल.स. लें','हर अभाज्य की सबसे बड़ी घात: '+K('LCM='+POW('2','2')+T+POW('3','2')+T+'7'+T+'11=2772')+'.'),
      S('चरण 3: हर घात सम करें',K('2772')+' में '+K('7')+' और '+K('11')+' की घात विषम है, इसलिए '+K('7'+T+'11=77')+' से गुणा करें.'),
      S('चरण 4: उत्तर',K('2772'+T+'77='+BOX('213444'))+', और '+K(RT('213444')+'=462')+'.')
    ],'ल.स. लें, फिर विषम घात वाले हर अभाज्य को जोड़े में करें.','पहले ल.स. निकालें, फिर विषम घात वाले अभाज्यों को गुणा करें.')
  ));

  H.set('sq_pyq_26', sol(
    L([
      S('Step 1: Cross-multiply','From '+K(FR('x',RT('128'))+'='+FR(RT('162'),'x'))+' we get '+K(POW('x','2')+'='+RT('128')+T+RT('162'))+'.'),
      S('Step 2: Combine the roots',K(RT('128')+T+RT('162')+'='+RT('128'+T+'162')+'='+RT('20736'))+'.'),
      S('Step 3: Simplify',K(RT('20736')+'=144')+', so '+K(POW('x','2')+'=144')+'.'),
      S('Step 4: Solve','Taking the positive root, '+K('x='+RT('144')+'='+BOX('12'))+'.')
    ],'Cross-multiply to get x squared, then merge into a single root.','Cross-multiply karke x ka square nikaalo, fir ek hi root me milao.'),
    L([
      S('Step 1: Cross-multiply',K(FR('x',RT('128'))+'='+FR(RT('162'),'x'))+' se '+K(POW('x','2')+'='+RT('128')+T+RT('162'))+'.'),
      S('Step 2: Roots milao',K(RT('128')+T+RT('162')+'='+RT('20736'))+'.'),
      S('Step 3: Simplify',K(RT('20736')+'=144')+', to '+K(POW('x','2')+'=144')+'.'),
      S('Step 4: Solve',K('x='+RT('144')+'='+BOX('12'))+'.')
    ],'Cross-multiply karke x ka square, fir ek root me milao.','Cross-multiply, x ka square nikaalo, fir simplify karke x = 12.'),
    L([
      S('चरण 1: तिर्यक गुणा',K(FR('x',RT('128'))+'='+FR(RT('162'),'x'))+' से '+K(POW('x','2')+'='+RT('128')+T+RT('162'))+'.'),
      S('चरण 2: मूल मिलाएं',K(RT('128')+T+RT('162')+'='+RT('20736'))+'.'),
      S('चरण 3: सरल करें',K(RT('20736')+'=144')+', अतः '+K(POW('x','2')+'=144')+'.'),
      S('चरण 4: हल करें',K('x='+RT('144')+'='+BOX('12'))+'.')
    ],'तिर्यक गुणा करके x का वर्ग, फिर एक मूल में मिलाएं.','तिर्यक गुणा करके x का वर्ग निकालें, फिर सरल करके x = 12.')
  ));

  H.set('sq_pyq_27', sol(
    L([
      S('Step 1: Recognise the decimal square',K('1.5625='+POW('1.25','2'))+'.'),
      S('Step 2: Take the root',K(RT('1.5625')+'='+BOX('1.25'))+'.')
    ],K('1.25'+T+'1.25=1.5625')+' is worth memorising.','The square of 1.25 is 1.5625.'),
    L([
      S('Step 1: Decimal square pehchaano',K('1.5625='+POW('1.25','2'))+'.'),
      S('Step 2: Root lo',K(RT('1.5625')+'='+BOX('1.25'))+'.')
    ],K('1.25'+T+'1.25=1.5625')+' yaad rakho.','1.25 ka square 1.5625 hota hai.'),
    L([
      S('चरण 1: दशमलव वर्ग पहचानें',K('1.5625='+POW('1.25','2'))+'.'),
      S('चरण 2: मूल लें',K(RT('1.5625')+'='+BOX('1.25'))+'.')
    ],K('1.25'+T+'1.25=1.5625')+' याद रखें.','1.25 का वर्ग 1.5625 होता है.')
  ));

  H.set('sq_pyq_28', sol(
    L([
      S('Step 1: Combine under one root','Using '+K(RT('a')+T+RT('b')+'='+RT('ab'))+', the product becomes '+K(RT('(7+3'+RT('5')+')(7-3'+RT('5')+')'))+'.'),
      S('Step 2: Difference of squares','The inside is '+K(POW('7','2')+'-'+POW('(3'+RT('5')+')','2')+'=49-45=4')+'.'),
      S('Step 3: Take the root',K(RT('4')+'='+BOX('2'))+'.')
    ],'Multiply conjugate surds using '+K(POW('a','2')+'-'+POW('b','2'))+'.','Dono ko ek root me milao, fir difference of squares lagao.'),
    L([
      S('Step 1: Ek root me milao',K(RT('a')+T+RT('b')+'='+RT('ab'))+' se product '+K(RT('(7+3'+RT('5')+')(7-3'+RT('5')+')'))+'.'),
      S('Step 2: Difference of squares','Andar '+K(POW('7','2')+'-'+POW('(3'+RT('5')+')','2')+'=49-45=4')+'.'),
      S('Step 3: Root lo',K(RT('4')+'='+BOX('2'))+'.')
    ],'Conjugate surds ko '+K(POW('a','2')+'-'+POW('b','2'))+' se multiply karo.','Dono ko ek root me milao, fir vargon ka antar lo.'),
    L([
      S('चरण 1: एक मूल में मिलाएं',K(RT('a')+T+RT('b')+'='+RT('ab'))+' से गुणनफल '+K(RT('(7+3'+RT('5')+')(7-3'+RT('5')+')'))+'.'),
      S('चरण 2: वर्गों का अंतर','अंदर '+K(POW('7','2')+'-'+POW('(3'+RT('5')+')','2')+'=49-45=4')+'.'),
      S('चरण 3: मूल लें',K(RT('4')+'='+BOX('2'))+'.')
    ],'संयुग्मी करणी को '+K(POW('a','2')+'-'+POW('b','2'))+' से गुणा करें.','दोनों को एक मूल में मिलाएं, फिर वर्गों का अंतर लें.')
  ));
})();
