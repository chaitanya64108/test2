/* PYQ solutions 26 of N — sq_pyq_96,97,98,99 */
(function(){
  var H=window.PYQH; if(!H) return;
  var K=H.K,RT=H.RT,CRT=H.CRT,FR=H.FR,BOX=H.BOX,POW=H.POW,S=H.S,L=H.L,sol=H.sol,T=H.TIMES,D=H.DIV,AP=H.AP;

  H.set('sq_pyq_96', sol(
    L([
      S('Step 1: Cube root term',K(CRT('0.000216')+'=0.06')+'.'),
      S('Step 2: Square root term',K(RT('0.16')+'=0.4')+'.'),
      S('Step 3: Add',K('0.06+0.4='+BOX('0.46'))+'.')
    ],'Evaluate each root, then add.','Cube root of 0.000216 is 0.06 and square root of 0.16 is 0.4; add to get 0.46.'),
    L([
      S('Step 1: Cube root wala part',K(CRT('0.000216')+'=0.06')+'.'),
      S('Step 2: Square root wala part',K(RT('0.16')+'=0.4')+'.'),
      S('Step 3: Jodo',K('0.06+0.4='+BOX('0.46'))+'.')
    ],'Har root nikaalo, fir jodo.','0.000216 ka cube root 0.06 aur 0.16 ka square root 0.4; jodkar 0.46.'),
    L([
      S('चरण 1: घनमूल वाला भाग',K(CRT('0.000216')+'=0.06')+'.'),
      S('चरण 2: वर्गमूल वाला भाग',K(RT('0.16')+'=0.4')+'.'),
      S('चरण 3: जोड़ें',K('0.06+0.4='+BOX('0.46'))+'.')
    ],'प्रत्येक मूल निकालें, फिर जोड़ें.','0.000216 का घनमूल 0.06 और 0.16 का वर्गमूल 0.4; जोड़कर 0.46.')
  ));

  H.set('sq_pyq_97', sol(
    L([
      S('Step 1: Need a perfect sixth power','A number whose square root and cube root are both integers must be a perfect sixth power.'),
      S('Step 2: Test the options',K('729='+POW('3','6')+'='+POW('27','2')+'='+POW('9','3'))+'.'),
      S('Step 3: Confirm',K(RT('729')+'=27')+' and '+K(CRT('729')+'=9')+', so the number is '+K(BOX('729'))+'.')
    ],'Look for a perfect sixth power among the options.','Only 729 is both a perfect square and a perfect cube; its sixth root is 3.'),
    L([
      S('Step 1: Perfect sixth power chahiye','Jis number ka square root aur cube root dono integer ho, woh perfect sixth power hota hai.'),
      S('Step 2: Options test karo',K('729='+POW('3','6')+'='+POW('27','2')+'='+POW('9','3'))+'.'),
      S('Step 3: Confirm',K(RT('729')+'=27')+' aur '+K(CRT('729')+'=9')+', to number '+K(BOX('729'))+'.')
    ],'Options me perfect sixth power dhundo.','Sirf 729 perfect square aur perfect cube dono hai; iska sixth root 3.'),
    L([
      S('चरण 1: पूर्ण छठी घात चाहिए','जिस संख्या का वर्गमूल और घनमूल दोनों पूर्णांक हों, वह पूर्ण छठी घात होती है.'),
      S('चरण 2: विकल्प जाँचें',K('729='+POW('3','6')+'='+POW('27','2')+'='+POW('9','3'))+'.'),
      S('चरण 3: पुष्टि',K(RT('729')+'=27')+' और '+K(CRT('729')+'=9')+', तो संख्या '+K(BOX('729'))+'.')
    ],'विकल्पों में पूर्ण छठी घात खोजें.','केवल 729 पूर्ण वर्ग और पूर्ण घन दोनों है; इसका छठा मूल 3.')
  ));

  H.set('sq_pyq_98', sol(
    L([
      S('Step 1: Factor the number',K('24389='+POW('29','3'))+', so it is a perfect cube.'),
      S('Step 2: Take the integer root',K(CRT('24389')+'='+BOX('29'))+'.')
    ],'Check whether the number is a perfect cube of one of the options.','Since 29 cubed is 24389, the integer root is 29.'),
    L([
      S('Step 1: Number factor karo',K('24389='+POW('29','3'))+', to yeh perfect cube hai.'),
      S('Step 2: Integer root lo',K(CRT('24389')+'='+BOX('29'))+'.')
    ],'Check karo number kisi option ka perfect cube hai ya nahi.','29 ka cube 24389 hai, to integer root 29.'),
    L([
      S('चरण 1: संख्या का गुणनखंड',K('24389='+POW('29','3'))+', तो यह पूर्ण घन है.'),
      S('चरण 2: पूर्णांक मूल लें',K(CRT('24389')+'='+BOX('29'))+'.')
    ],'जाँचें कि संख्या किसी विकल्प का पूर्ण घन है या नहीं.','29 का घन 24389 है, तो पूर्णांक मूल 29.')
  ));

  H.set('sq_pyq_99', sol(
    L([
      S('Step 1: Factor into a square',K('16384='+POW('128','2'))+'.'),
      S('Step 2: Take the square root',K(RT('16384')+'='+BOX('128'))+'.')
    ],'Recall '+K(POW('128','2')+'=16384')+'.','The number whose square is 16384 is 128.'),
    L([
      S('Step 1: Square me factor karo',K('16384='+POW('128','2'))+'.'),
      S('Step 2: Square root lo',K(RT('16384')+'='+BOX('128'))+'.')
    ],K(POW('128','2')+'=16384')+' yaad karo.','Jiska square 16384 hai woh 128 hai.'),
    L([
      S('चरण 1: वर्ग में गुणनखंड',K('16384='+POW('128','2'))+'.'),
      S('चरण 2: वर्गमूल लें',K(RT('16384')+'='+BOX('128'))+'.')
    ],K(POW('128','2')+'=16384')+' याद करें.','जिसका वर्ग 16384 है वह 128 है.')
  ));
})();
