/* PYQ solutions 8 of N — sq_pyq_29 to sq_pyq_32 */
(function(){
  var H=window.PYQH; if(!H) return;
  var K=H.K,RT=H.RT,CRT=H.CRT,FR=H.FR,BOX=H.BOX,POW=H.POW,S=H.S,L=H.L,sol=H.sol,T=H.TIMES;

  H.set('sq_pyq_29', sol(
    L([
      S('Step 1: Recognise the perfect square',K('2304='+POW('48','2'))+'.'),
      S('Step 2: Take the root',K(RT('2304')+'='+BOX('48'))+'.')
    ],'Remember '+K(POW('48','2')+'=2304')+'.','Find n with n squared equal to 2304.'),
    L([
      S('Step 1: Perfect square pehchaano',K('2304='+POW('48','2'))+'.'),
      S('Step 2: Root lo',K(RT('2304')+'='+BOX('48'))+'.')
    ],K(POW('48','2')+'=2304')+' yaad rakho.','Woh n dhoondo jiska square 2304 ho.'),
    L([
      S('चरण 1: पूर्ण वर्ग पहचानें',K('2304='+POW('48','2'))+'.'),
      S('चरण 2: मूल लें',K(RT('2304')+'='+BOX('48'))+'.')
    ],K(POW('48','2')+'=2304')+' याद रखें.','वह n खोजें जिसका वर्ग 2304 हो.')
  ));

  H.set('sq_pyq_30', sol(
    L([
      S('Step 1: Write as a fraction',K('0.000216='+FR('216','1000000'))+'.'),
      S('Step 2: Cube root of each part',K(CRT('216')+'=6')+' and '+K(CRT('1000000')+'=100')+'.'),
      S('Step 3: Divide',K(CRT('0.000216')+'='+FR('6','100')+'='+BOX('0.06'))+'.')
    ],'For cube roots, group decimals in threes: six decimals give two decimals.','216 ka cube root 6 hai; decimal ko teen ke group me ginno.'),
    L([
      S('Step 1: Fraction me likho',K('0.000216='+FR('216','1000000'))+'.'),
      S('Step 2: Har part ka cube root',K(CRT('216')+'=6')+', '+K(CRT('1000000')+'=100')+'.'),
      S('Step 3: Divide',K(CRT('0.000216')+'='+FR('6','100')+'='+BOX('0.06'))+'.')
    ],'Cube root me decimals ko teen ke group me ginno.','216 ka cube root 6; chhah decimal se do decimal.'),
    L([
      S('चरण 1: भिन्न में लिखें',K('0.000216='+FR('216','1000000'))+'.'),
      S('चरण 2: हर भाग का घनमूल',K(CRT('216')+'=6')+', '+K(CRT('1000000')+'=100')+'.'),
      S('चरण 3: भाग दें',K(CRT('0.000216')+'='+FR('6','100')+'='+BOX('0.06'))+'.')
    ],'घनमूल में दशमलव को तीन के समूह में गिनें.','216 का घनमूल 6; छह दशमलव से दो दशमलव.')
  ));

  H.set('sq_pyq_31', sol(
    L([
      S('Step 1: The square root',K(RT('1089')+'=33')+'.'),
      S('Step 2: The cube root',K(CRT('3375')+'=15')+'.'),
      S('Step 3: Add then square',K(POW('(33+15)','2')+'='+POW('48','2')+'='+BOX('2304'))+'.')
    ],'Evaluate each root first, then square the sum.','Pehle dono root (33 aur 15), fir sum ka square.'),
    L([
      S('Step 1: Square root',K(RT('1089')+'=33')+'.'),
      S('Step 2: Cube root',K(CRT('3375')+'=15')+'.'),
      S('Step 3: Jodo fir square',K(POW('(33+15)','2')+'='+POW('48','2')+'='+BOX('2304'))+'.')
    ],'Pehle har root, fir sum ka square.','Dono root nikaalo (33, 15), fir sum ka square.'),
    L([
      S('चरण 1: वर्गमूल',K(RT('1089')+'=33')+'.'),
      S('चरण 2: घनमूल',K(CRT('3375')+'=15')+'.'),
      S('चरण 3: जोड़कर वर्ग',K(POW('(33+15)','2')+'='+POW('48','2')+'='+BOX('2304'))+'.')
    ],'पहले हर मूल, फिर योग का वर्ग.','दोनों मूल (33, 15), फिर योग का वर्ग.')
  ));

  H.set('sq_pyq_32', sol(
    L([
      S('Step 1: Nearest perfect square below','Just below '+K('0.000326')+' lies '+K('0.000324='+POW('0.018','2'))+'.'),
      S('Step 2: Subtract','Remove '+K('0.000326-0.000324='+BOX('0.000002'))+', that is '+K('2'+T+POW('10','-6'))+'.')
    ],'Find the closest perfect square just below, here '+K(POW('0.018','2'))+'.','Sabse paas neeche wala perfect square 0.018 ka square hai.'),
    L([
      S('Step 1: Neeche ka nearest perfect square',K('0.000326')+' ke theek neeche '+K('0.000324='+POW('0.018','2'))+'.'),
      S('Step 2: Ghatao',K('0.000326-0.000324='+BOX('0.000002'))+', yaani '+K('2'+T+POW('10','-6'))+'.')
    ],'Theek neeche wala perfect square dhoondo, yahan '+K(POW('0.018','2'))+'.','Neeche wala perfect square 0.018 ka square hai.'),
    L([
      S('चरण 1: नीचे का निकटतम पूर्ण वर्ग',K('0.000326')+' के ठीक नीचे '+K('0.000324='+POW('0.018','2'))+'.'),
      S('चरण 2: घटाएं',K('0.000326-0.000324='+BOX('0.000002'))+', अर्थात '+K('2'+T+POW('10','-6'))+'.')
    ],'ठीक नीचे वाला पूर्ण वर्ग खोजें, यहाँ '+K(POW('0.018','2'))+'.','नीचे वाला पूर्ण वर्ग 0.018 का वर्ग है.')
  ));
})();
