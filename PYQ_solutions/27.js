/* PYQ solutions 27 of N — sq_pyq_100,101,102,103 */
(function(){
  var H=window.PYQH; if(!H) return;
  var K=H.K,RT=H.RT,CRT=H.CRT,FR=H.FR,BOX=H.BOX,POW=H.POW,S=H.S,L=H.L,sol=H.sol,T=H.TIMES,D=H.DIV,AP=H.AP;

  H.set('sq_pyq_100', sol(
    L([
      S('Step 1: Test each for a perfect square',K(RT('2916')+'=54')+', '+K(RT('4489')+'=67')+', '+K(RT('1024')+'=32')+' are all exact.'),
      S('Step 2: Find the odd one out','7840 is not a perfect square, so '+K(RT('7840'))+' is irrational.'),
      S('Step 3: Answer',K(BOX('7840'))+'.')
    ],'A perfect square has an exact integer root; the rest are irrational.','Three values are perfect squares; 7840 is not, so its root is irrational.'),
    L([
      S('Step 1: Har ek perfect square test karo',K(RT('2916')+'=54')+', '+K(RT('4489')+'=67')+', '+K(RT('1024')+'=32')+' sab exact hain.'),
      S('Step 2: Odd one out','7840 perfect square nahi hai, to '+K(RT('7840'))+' irrational hai.'),
      S('Step 3: Answer',K(BOX('7840'))+'.')
    ],'Perfect square ka exact integer root hota hai; baaki irrational.','Teen values perfect square hain; 7840 nahi, to iska root irrational.'),
    L([
      S('चरण 1: प्रत्येक को पूर्ण वर्ग के लिए जाँचें',K(RT('2916')+'=54')+', '+K(RT('4489')+'=67')+', '+K(RT('1024')+'=32')+' सब सटीक हैं.'),
      S('चरण 2: भिन्न पहचानें','7840 पूर्ण वर्ग नहीं है, तो '+K(RT('7840'))+' अपरिमेय है.'),
      S('चरण 3: उत्तर',K(BOX('7840'))+'.')
    ],'पूर्ण वर्ग का सटीक पूर्णांक मूल होता है; बाकी अपरिमेय.','तीन मान पूर्ण वर्ग हैं; 7840 नहीं, तो इसका मूल अपरिमेय.')
  ));

  H.set('sq_pyq_101', sol(
    L([
      S('Step 1: Remove the square root','Square both sides: '+K(FR('x','49')+'='+FR('16','81'))+'.'),
      S('Step 2: Solve for x',K('x=49'+T+FR('16','81')+'='+FR('784','81'))+'.'),
      S('Step 3: Divide',K(FR('784','81')+AP+BOX('9.69'))+'.')
    ],'Square both sides, then multiply by 49.','Square both sides, multiply by 49 and divide to get about 9.69.'),
    L([
      S('Step 1: Root hatao','Dono taraf square karo: '+K(FR('x','49')+'='+FR('16','81'))+'.'),
      S('Step 2: x ke liye solve karo',K('x=49'+T+FR('16','81')+'='+FR('784','81'))+'.'),
      S('Step 3: Divide',K(FR('784','81')+AP+BOX('9.69'))+'.')
    ],'Dono taraf square karo, fir 49 se multiply karo.','Dono taraf square karo, 49 se multiply aur divide karke lagbhag 9.69.'),
    L([
      S('चरण 1: मूल हटाएं','दोनों ओर वर्ग करें: '+K(FR('x','49')+'='+FR('16','81'))+'.'),
      S('चरण 2: x के लिए हल करें',K('x=49'+T+FR('16','81')+'='+FR('784','81'))+'.'),
      S('चरण 3: भाग दें',K(FR('784','81')+AP+BOX('9.69'))+'.')
    ],'दोनों ओर वर्ग करें, फिर 49 से गुणा करें.','दोनों ओर वर्ग करें, 49 से गुणा और भाग करके लगभग 9.69.')
  ));

  H.set('sq_pyq_102', sol(
    L([
      S('Step 1: Find the next perfect square',K(POW('70','2')+'=4900')+' and '+K(POW('71','2')+'=5041')+', so the next square above 4931 is 5041.'),
      S('Step 2: Subtract',K('5041-4931='+BOX('110'))+'.')
    ],'Find the perfect square just above the number, then subtract.','The next perfect square after 4931 is 5041; subtract to get 110.'),
    L([
      S('Step 1: Agla perfect square',K(POW('70','2')+'=4900')+' aur '+K(POW('71','2')+'=5041')+', to 4931 se bada agla square 5041.'),
      S('Step 2: Ghatao',K('5041-4931='+BOX('110'))+'.')
    ],'Number se thoda bade perfect square ko dhundo, fir ghatao.','4931 ke baad agla perfect square 5041; ghatakar 110.'),
    L([
      S('चरण 1: अगला पूर्ण वर्ग',K(POW('70','2')+'=4900')+' और '+K(POW('71','2')+'=5041')+', तो 4931 से बड़ा अगला वर्ग 5041.'),
      S('चरण 2: घटाएं',K('5041-4931='+BOX('110'))+'.')
    ],'संख्या से थोड़ा बड़े पूर्ण वर्ग को खोजें, फिर घटाएं.','4931 के बाद अगला पूर्ण वर्ग 5041; घटाकर 110.')
  ));

  H.set('sq_pyq_103', sol(
    L([
      S('Step 1: Find nearby cubes',K('14^{3}=2744')+' and '+K('15^{3}=3375')+'.'),
      S('Step 2: Compare the distances','2750 is only 6 above 2744 but 625 below 3375, so 2744 is nearest.'),
      S('Step 3: Answer',K(BOX('2744'))+'.')
    ],'Check the cubes just below and above the number.','The cube of 14 is 2744, which is closest to 2750.'),
    L([
      S('Step 1: Paas ke cubes',K('14^{3}=2744')+' aur '+K('15^{3}=3375')+'.'),
      S('Step 2: Distance compare karo','2750 sirf 6 upar 2744 se par 625 neeche 3375 se, to 2744 sabse paas.'),
      S('Step 3: Answer',K(BOX('2744'))+'.')
    ],'Number ke just neeche aur upar ke cubes check karo.','14 ka cube 2744, jo 2750 ke sabse paas.'),
    L([
      S('चरण 1: पास के घन',K('14^{3}=2744')+' और '+K('15^{3}=3375')+'.'),
      S('चरण 2: दूरी तुलना','2750 केवल 6 ऊपर 2744 से पर 625 नीचे 3375 से, तो 2744 सबसे पास.'),
      S('चरण 3: उत्तर',K(BOX('2744'))+'.')
    ],'संख्या के ठीक नीचे और ऊपर के घन जाँचें.','14 का घन 2744, जो 2750 के सबसे पास.')
  ));
})();
