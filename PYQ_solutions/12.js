/* PYQ solutions 12 of N — sq_pyq_46,51,52,53 */
(function(){
  var H=window.PYQH; if(!H) return;
  var K=H.K,RT=H.RT,CRT=H.CRT,FR=H.FR,BOX=H.BOX,POW=H.POW,S=H.S,L=H.L,sol=H.sol,T=H.TIMES,AP=H.AP;

  H.set('sq_pyq_46', sol(
    L([
      S('Step 1: Recognise the square',K('1296='+POW('36','2'))+'.'),
      S('Step 2: Take the root',K(RT('1296')+'='+BOX('36'))+'.')
    ],'Recall '+K(POW('36','2')+'=1296')+'.','36 squared is 1296.'),
    L([
      S('Step 1: Square pehchaano',K('1296='+POW('36','2'))+'.'),
      S('Step 2: Root lo',K(RT('1296')+'='+BOX('36'))+'.')
    ],K(POW('36','2')+'=1296')+' yaad rakho.','36 ka square 1296 hota hai.'),
    L([
      S('चरण 1: वर्ग पहचानें',K('1296='+POW('36','2'))+'.'),
      S('चरण 2: मूल लें',K(RT('1296')+'='+BOX('36'))+'.')
    ],K(POW('36','2')+'=1296')+' याद रखें.','36 का वर्ग 1296 होता है.')
  ));

  H.set('sq_pyq_51', sol(
    L([
      S('Step 1: Take the LCM',K('LCM(3,4,5,6,8)=120='+POW('2','3')+T+'3'+T+'5')+'.'),
      S('Step 2: Make it a perfect square','Raise each prime to an even power by multiplying by '+K('2'+T+'3'+T+'5=30')+'.'),
      S('Step 3: The number',K('120'+T+'30=3600='+POW('60','2'))+', so the answer is '+K(BOX('3600'))+'.')
    ],'First the LCM, then make every prime power even.','First find the LCM, then make it a perfect square.'),
    L([
      S('Step 1: LCM lo',K('LCM(3,4,5,6,8)=120='+POW('2','3')+T+'3'+T+'5')+'.'),
      S('Step 2: Perfect square banao','Har prime ki power even karo: '+K('2'+T+'3'+T+'5=30')+' se multiply.'),
      S('Step 3: Number',K('120'+T+'30=3600='+POW('60','2'))+', answer '+K(BOX('3600'))+'.')
    ],'Pehle LCM, fir har prime power even karo.','Pehle LCM nikalo, fir use perfect square banao.'),
    L([
      S('चरण 1: ल.स. लें',K('LCM(3,4,5,6,8)=120='+POW('2','3')+T+'3'+T+'5')+'.'),
      S('चरण 2: पूर्ण वर्ग बनाएं','हर अभाज्य की घात सम करें: '+K('2'+T+'3'+T+'5=30')+' से गुणा.'),
      S('चरण 3: संख्या',K('120'+T+'30=3600='+POW('60','2'))+', उत्तर '+K(BOX('3600'))+'.')
    ],'पहले ल.स., फिर हर अभाज्य की घात सम करें.','पहले ल.स. निकालें, फिर उसे पूर्ण वर्ग बनाएं.')
  ));

  H.set('sq_pyq_52', sol(
    L([
      S('Step 1: Prime factorise',K('27225='+POW('3','2')+T+POW('5','2')+T+POW('11','2'))+'.'),
      S('Step 2: Take one of each pair',K(RT('27225')+'=3'+T+'5'+T+'11')+'.'),
      S('Step 3: Multiply',K('3'+T+'5'+T+'11='+BOX('165'))+'.')
    ],'Prime-factorise, then take one factor from each pair.','27225 ke prime factor: 3, 5, 11.'),
    L([
      S('Step 1: Prime factor',K('27225='+POW('3','2')+T+POW('5','2')+T+POW('11','2'))+'.'),
      S('Step 2: Har jodi se ek lo',K(RT('27225')+'=3'+T+'5'+T+'11')+'.'),
      S('Step 3: Multiply',K('3'+T+'5'+T+'11='+BOX('165'))+'.')
    ],'Prime factor karo, fir har jodi se ek lo.','27225 ke prime factor: 3, 5, 11.'),
    L([
      S('चरण 1: अभाज्य गुणनखंड',K('27225='+POW('3','2')+T+POW('5','2')+T+POW('11','2'))+'.'),
      S('चरण 2: हर जोड़ी से एक लें',K(RT('27225')+'=3'+T+'5'+T+'11')+'.'),
      S('चरण 3: गुणा करें',K('3'+T+'5'+T+'11='+BOX('165'))+'.')
    ],'अभाज्य गुणनखंड करें, फिर हर जोड़ी से एक लें.','27225 के अभाज्य गुणनखंड: 3, 5, 11.')
  ));

  H.set('sq_pyq_53', sol(
    L([
      S('Step 1: Prime factorise',K('27225='+POW('3','2')+T+POW('5','2')+T+POW('11','2'))+'.'),
      S('Step 2: Take one of each pair',K(RT('27225')+'=3'+T+'5'+T+'11')+'.'),
      S('Step 3: Multiply',K('3'+T+'5'+T+'11='+BOX('165'))+'.')
    ],'Prime-factorise, then take one factor from each pair.','27225 ke prime factor: 3, 5, 11.'),
    L([
      S('Step 1: Prime factor',K('27225='+POW('3','2')+T+POW('5','2')+T+POW('11','2'))+'.'),
      S('Step 2: Har jodi se ek lo',K(RT('27225')+'=3'+T+'5'+T+'11')+'.'),
      S('Step 3: Multiply',K('3'+T+'5'+T+'11='+BOX('165'))+'.')
    ],'Prime factor karo, fir har jodi se ek lo.','27225 ke prime factor: 3, 5, 11.'),
    L([
      S('चरण 1: अभाज्य गुणनखंड',K('27225='+POW('3','2')+T+POW('5','2')+T+POW('11','2'))+'.'),
      S('चरण 2: हर जोड़ी से एक लें',K(RT('27225')+'=3'+T+'5'+T+'11')+'.'),
      S('चरण 3: गुणा करें',K('3'+T+'5'+T+'11='+BOX('165'))+'.')
    ],'अभाज्य गुणनखंड करें, फिर हर जोड़ी से एक लें.','27225 के अभाज्य गुणनखंड: 3, 5, 11.')
  ));
})();
