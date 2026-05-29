/* PYQ solutions 29 of N — sq_pyq_108,109,110,111,112 (final) */
(function(){
  var H=window.PYQH; if(!H) return;
  var K=H.K,RT=H.RT,CRT=H.CRT,FR=H.FR,BOX=H.BOX,POW=H.POW,S=H.S,L=H.L,sol=H.sol,T=H.TIMES,D=H.DIV,AP=H.AP;

  H.set('sq_pyq_108', sol(
    L([
      S('Step 1: Cube root',K(CRT('19683')+'=27')+'.'),
      S('Step 2: Split into the given factor','Since '+K('27=9'+T+'3')+', the missing number is '+K(BOX('9'))+'.')
    ],'Take the cube root, then divide by 3.','Cube root of 19683 is 27, and 27 is 9 times 3, so the missing number is 9.'),
    L([
      S('Step 1: Cube root',K(CRT('19683')+'=27')+'.'),
      S('Step 2: Diye gaye factor me todo','Kyunki '+K('27=9'+T+'3')+', missing number '+K(BOX('9'))+'.')
    ],'Cube root lo, fir 3 se divide karo.','19683 ka cube root 27 hai, aur 27 = 9 guna 3, to missing number 9.'),
    L([
      S('चरण 1: घनमूल',K(CRT('19683')+'=27')+'.'),
      S('चरण 2: दिए गए गुणनखंड में तोड़ें','क्योंकि '+K('27=9'+T+'3')+', लुप्त संख्या '+K(BOX('9'))+'.')
    ],'घनमूल लें, फिर 3 से भाग दें.','19683 का घनमूल 27 है, और 27 = 9 गुना 3, तो लुप्त संख्या 9.')
  ));

  H.set('sq_pyq_109', sol(
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

  H.set('sq_pyq_110', sol(
    L([
      S('Step 1: Factor as a cube',K('50653='+POW('37','3'))+'.'),
      S('Step 2: Take the cube root',K(CRT('50653')+'='+BOX('37'))+'.')
    ],'Find which number cubed gives 50653.','37 cubed is 50653, so the cube root is 37.'),
    L([
      S('Step 1: Cube ke roop me factor',K('50653='+POW('37','3'))+'.'),
      S('Step 2: Cube root lo',K(CRT('50653')+'='+BOX('37'))+'.')
    ],'Kaun se number ka cube 50653 deta hai dhundo.','37 ka cube 50653 hai, to cube root 37.'),
    L([
      S('चरण 1: घन के रूप में गुणनखंड',K('50653='+POW('37','3'))+'.'),
      S('चरण 2: घनमूल लें',K(CRT('50653')+'='+BOX('37'))+'.')
    ],'कौन सी संख्या का घन 50653 देता है खोजें.','37 का घन 50653 है, तो घनमूल 37.')
  ));

  H.set('sq_pyq_111', sol(
    L([
      S('Step 1: Recognise the square',K(POW('124','2')+'=15376')+'.'),
      S('Step 2: Take the root',K(RT('15376')+'='+BOX('124'))+'.')
    ],'Recall '+K(POW('124','2')+'=15376')+'.','The number whose square is 15376 is 124.'),
    L([
      S('Step 1: Square pehchaano',K(POW('124','2')+'=15376')+'.'),
      S('Step 2: Root lo',K(RT('15376')+'='+BOX('124'))+'.')
    ],K(POW('124','2')+'=15376')+' yaad rakho.','Jiska square 15376 hai woh 124.'),
    L([
      S('चरण 1: वर्ग पहचानें',K(POW('124','2')+'=15376')+'.'),
      S('चरण 2: मूल लें',K(RT('15376')+'='+BOX('124'))+'.')
    ],K(POW('124','2')+'=15376')+' याद रखें.','जिसका वर्ग 15376 है वह 124.')
  ));

  H.set('sq_pyq_112', sol(
    L([
      S('Step 1: Cube root',K(CRT('19683')+'=27')+'.'),
      S('Step 2: Split into the given factor','Since '+K('27=9'+T+'3')+', the missing number is '+K(BOX('9'))+'.')
    ],'Take the cube root, then divide by 3.','Cube root of 19683 is 27, and 27 is 9 times 3, so the missing number is 9.'),
    L([
      S('Step 1: Cube root',K(CRT('19683')+'=27')+'.'),
      S('Step 2: Diye gaye factor me todo','Kyunki '+K('27=9'+T+'3')+', missing number '+K(BOX('9'))+'.')
    ],'Cube root lo, fir 3 se divide karo.','19683 ka cube root 27 hai, aur 27 = 9 guna 3, to missing number 9.'),
    L([
      S('चरण 1: घनमूल',K(CRT('19683')+'=27')+'.'),
      S('चरण 2: दिए गए गुणनखंड में तोड़ें','क्योंकि '+K('27=9'+T+'3')+', लुप्त संख्या '+K(BOX('9'))+'.')
    ],'घनमूल लें, फिर 3 से भाग दें.','19683 का घनमूल 27 है, और 27 = 9 गुना 3, तो लुप्त संख्या 9.')
  ));
})();
