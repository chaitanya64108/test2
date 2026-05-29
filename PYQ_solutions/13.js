/* PYQ solutions 13 of N — sq_pyq_54,56,58,59 */
(function(){
  var H=window.PYQH; if(!H) return;
  var K=H.K,RT=H.RT,CRT=H.CRT,FR=H.FR,BOX=H.BOX,POW=H.POW,S=H.S,L=H.L,sol=H.sol,T=H.TIMES,AP=H.AP;

  function cubeDec(){ return sol(
    L([
      S('Step 1: Write as a fraction',K('0.000216='+FR('216','1000000'))+'.'),
      S('Step 2: Cube root top and bottom',K(CRT('216')+'=6')+' and '+K(CRT('1000000')+'=100')+'.'),
      S('Step 3: Divide',K(CRT('0.000216')+'='+FR('6','100')+'='+BOX('0.06'))+'.')
    ],'A cube root takes one digit for every three decimal places.','cube root 216 is 6, cube root 1000000 is 100, so the answer is 0.06.'),
    L([
      S('Step 1: Fraction me likho',K('0.000216='+FR('216','1000000'))+'.'),
      S('Step 2: Upar-neeche cube root',K(CRT('216')+'=6')+', '+K(CRT('1000000')+'=100')+'.'),
      S('Step 3: Divide',K(CRT('0.000216')+'='+FR('6','100')+'='+BOX('0.06'))+'.')
    ],'Cube root me har teen decimal se ek digit banta hai.','cube root 216 = 6, cube root 1000000 = 100, to answer 0.06.'),
    L([
      S('चरण 1: भिन्न में लिखें',K('0.000216='+FR('216','1000000'))+'.'),
      S('चरण 2: ऊपर-नीचे घनमूल',K(CRT('216')+'=6')+', '+K(CRT('1000000')+'=100')+'.'),
      S('चरण 3: भाग दें',K(CRT('0.000216')+'='+FR('6','100')+'='+BOX('0.06'))+'.')
    ],'घनमूल में हर तीन दशमलव से एक अंक बनता है.','घनमूल 216 = 6, घनमूल 1000000 = 100, तो उत्तर 0.06.')
  ); }

  H.set('sq_pyq_54', cubeDec());
  H.set('sq_pyq_56', cubeDec());
  H.set('sq_pyq_59', cubeDec());

  H.set('sq_pyq_58', sol(
    L([
      S('Step 1: Prime factorise',K('3364='+POW('2','2')+T+POW('29','2'))+'.'),
      S('Step 2: Take one of each pair',K(RT('3364')+'=2'+T+'29')+'.'),
      S('Step 3: Multiply',K('2'+T+'29='+BOX('58'))+'.')
    ],'Recall '+K(POW('58','2')+'=3364')+'.','58 squared is 3364.'),
    L([
      S('Step 1: Prime factor',K('3364='+POW('2','2')+T+POW('29','2'))+'.'),
      S('Step 2: Har jodi se ek lo',K(RT('3364')+'=2'+T+'29')+'.'),
      S('Step 3: Multiply',K('2'+T+'29='+BOX('58'))+'.')
    ],K(POW('58','2')+'=3364')+' yaad rakho.','58 ka square 3364 hota hai.'),
    L([
      S('चरण 1: अभाज्य गुणनखंड',K('3364='+POW('2','2')+T+POW('29','2'))+'.'),
      S('चरण 2: हर जोड़ी से एक लें',K(RT('3364')+'=2'+T+'29')+'.'),
      S('चरण 3: गुणा करें',K('2'+T+'29='+BOX('58'))+'.')
    ],K(POW('58','2')+'=3364')+' याद रखें.','58 का वर्ग 3364 होता है.')
  ));
})();
