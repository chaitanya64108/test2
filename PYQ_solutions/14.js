/* PYQ solutions 14 of N — sq_pyq_60,63,66,67 */
(function(){
  var H=window.PYQH; if(!H) return;
  var K=H.K,RT=H.RT,CRT=H.CRT,FR=H.FR,BOX=H.BOX,POW=H.POW,S=H.S,L=H.L,sol=H.sol,T=H.TIMES,AP=H.AP;

  H.set('sq_pyq_60', sol(
    L([
      S('Step 1: Prime factorise',K('9025='+POW('5','2')+T+POW('19','2'))+'.'),
      S('Step 2: Take one of each pair',K(RT('9025')+'=5'+T+'19')+'.'),
      S('Step 3: Multiply',K('5'+T+'19='+BOX('95'))+'.')
    ],'Recall '+K(POW('95','2')+'=9025')+'.','95 squared is 9025.'),
    L([
      S('Step 1: Prime factor',K('9025='+POW('5','2')+T+POW('19','2'))+'.'),
      S('Step 2: Har jodi se ek lo',K(RT('9025')+'=5'+T+'19')+'.'),
      S('Step 3: Multiply',K('5'+T+'19='+BOX('95'))+'.')
    ],K(POW('95','2')+'=9025')+' yaad rakho.','95 ka square 9025 hota hai.'),
    L([
      S('चरण 1: अभाज्य गुणनखंड',K('9025='+POW('5','2')+T+POW('19','2'))+'.'),
      S('चरण 2: हर जोड़ी से एक लें',K(RT('9025')+'=5'+T+'19')+'.'),
      S('चरण 3: गुणा करें',K('5'+T+'19='+BOX('95'))+'.')
    ],K(POW('95','2')+'=9025')+' याद रखें.','95 का वर्ग 9025 होता है.')
  ));

  H.set('sq_pyq_63', sol(
    L([
      S('Step 1: Write as a fraction',K('1.5625='+FR('15625','10000'))+'.'),
      S('Step 2: Root top and bottom',K(RT('15625')+'=125')+' and '+K(RT('10000')+'=100')+'.'),
      S('Step 3: Divide',K(RT('1.5625')+'='+FR('125','100')+'='+BOX('1.25'))+'.')
    ],'Recall '+K(POW('1.25','2')+'=1.5625')+'.','1.25 squared is 1.5625.'),
    L([
      S('Step 1: Fraction me likho',K('1.5625='+FR('15625','10000'))+'.'),
      S('Step 2: Upar-neeche root',K(RT('15625')+'=125')+', '+K(RT('10000')+'=100')+'.'),
      S('Step 3: Divide',K(RT('1.5625')+'='+FR('125','100')+'='+BOX('1.25'))+'.')
    ],K(POW('1.25','2')+'=1.5625')+' yaad rakho.','1.25 ka square 1.5625 hota hai.'),
    L([
      S('चरण 1: भिन्न में लिखें',K('1.5625='+FR('15625','10000'))+'.'),
      S('चरण 2: ऊपर-नीचे मूल',K(RT('15625')+'=125')+', '+K(RT('10000')+'=100')+'.'),
      S('चरण 3: भाग दें',K(RT('1.5625')+'='+FR('125','100')+'='+BOX('1.25'))+'.')
    ],K(POW('1.25','2')+'=1.5625')+' याद रखें.','1.25 का वर्ग 1.5625 होता है.')
  ));

  function cube2197(){ return sol(
    L([
      S('Step 1: Recognise the cube',K('2197='+POW('13','3'))+'.'),
      S('Step 2: Take the cube root',K(CRT('2197')+'='+BOX('13'))+'.')
    ],'Recall '+K(POW('13','3')+'=2197')+'.','13 cubed is 2197.'),
    L([
      S('Step 1: Cube pehchaano',K('2197='+POW('13','3'))+'.'),
      S('Step 2: Cube root lo',K(CRT('2197')+'='+BOX('13'))+'.')
    ],K(POW('13','3')+'=2197')+' yaad rakho.','13 ka cube 2197 hota hai.'),
    L([
      S('चरण 1: घन पहचानें',K('2197='+POW('13','3'))+'.'),
      S('चरण 2: घनमूल लें',K(CRT('2197')+'='+BOX('13'))+'.')
    ],K(POW('13','3')+'=2197')+' याद रखें.','13 का घन 2197 होता है.')
  ); }

  H.set('sq_pyq_66', cube2197());
  H.set('sq_pyq_67', cube2197());
})();
