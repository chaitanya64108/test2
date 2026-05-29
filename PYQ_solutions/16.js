/* PYQ solutions 16 of N — sq_pyq_72,73,74 */
(function(){
  var H=window.PYQH; if(!H) return;
  var K=H.K,RT=H.RT,CRT=H.CRT,FR=H.FR,BOX=H.BOX,POW=H.POW,S=H.S,L=H.L,sol=H.sol,T=H.TIMES,AP=H.AP;

  H.set('sq_pyq_72', sol(
    L([
      S('Step 1: Recognise the square',K('5041='+POW('71','2'))+'.'),
      S('Step 2: Take the root',K(RT('5041')+'='+BOX('71'))+'.')
    ],'Recall '+K(POW('71','2')+'=5041')+'.','71 squared is 5041.'),
    L([
      S('Step 1: Square pehchaano',K('5041='+POW('71','2'))+'.'),
      S('Step 2: Root lo',K(RT('5041')+'='+BOX('71'))+'.')
    ],K(POW('71','2')+'=5041')+' yaad rakho.','71 ka square 5041 hota hai.'),
    L([
      S('चरण 1: वर्ग पहचानें',K('5041='+POW('71','2'))+'.'),
      S('चरण 2: मूल लें',K(RT('5041')+'='+BOX('71'))+'.')
    ],K(POW('71','2')+'=5041')+' याद रखें.','71 का वर्ग 5041 होता है.')
  ));

  H.set('sq_pyq_73', sol(
    L([
      S('Step 1: Prime factorise',K('15376='+POW('2','4')+T+POW('31','2'))+'.'),
      S('Step 2: Take one of each pair',K(RT('15376')+'='+POW('2','2')+T+'31')+'.'),
      S('Step 3: Multiply',K('4'+T+'31='+BOX('124'))+'.')
    ],'Recall '+K(POW('124','2')+'=15376')+'.','124 squared is 15376.'),
    L([
      S('Step 1: Prime factor',K('15376='+POW('2','4')+T+POW('31','2'))+'.'),
      S('Step 2: Har jodi se ek lo',K(RT('15376')+'='+POW('2','2')+T+'31')+'.'),
      S('Step 3: Multiply',K('4'+T+'31='+BOX('124'))+'.')
    ],K(POW('124','2')+'=15376')+' yaad rakho.','124 ka square 15376 hota hai.'),
    L([
      S('चरण 1: अभाज्य गुणनखंड',K('15376='+POW('2','4')+T+POW('31','2'))+'.'),
      S('चरण 2: हर जोड़ी से एक लें',K(RT('15376')+'='+POW('2','2')+T+'31')+'.'),
      S('चरण 3: गुणा करें',K('4'+T+'31='+BOX('124'))+'.')
    ],K(POW('124','2')+'=15376')+' याद रखें.','124 का वर्ग 15376 होता है.')
  ));

  H.set('sq_pyq_74', sol(
    L([
      S('Step 1: Write as a power of two',K('16384='+POW('2','14'))+'.'),
      S('Step 2: Halve the exponent',K(RT('16384')+'='+POW('2','7')+'='+BOX('128'))+'.')
    ],'Recall '+K(POW('128','2')+'=16384')+'.','128 squared is 16384.'),
    L([
      S('Step 1: Do ki power me likho',K('16384='+POW('2','14'))+'.'),
      S('Step 2: Exponent aadha karo',K(RT('16384')+'='+POW('2','7')+'='+BOX('128'))+'.')
    ],K(POW('128','2')+'=16384')+' yaad rakho.','128 ka square 16384 hota hai.'),
    L([
      S('चरण 1: दो की घात में लिखें',K('16384='+POW('2','14'))+'.'),
      S('चरण 2: घातांक आधा करें',K(RT('16384')+'='+POW('2','7')+'='+BOX('128'))+'.')
    ],K(POW('128','2')+'=16384')+' याद रखें.','128 का वर्ग 16384 होता है.')
  ));
})();
