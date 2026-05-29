/* PYQ solutions 20 of N — sq_pyq_70,71 */
(function(){
  var H=window.PYQH; if(!H) return;
  var K=H.K,RT=H.RT,CRT=H.CRT,FR=H.FR,BOX=H.BOX,POW=H.POW,S=H.S,L=H.L,sol=H.sol,T=H.TIMES,AP=H.AP;

  H.set('sq_pyq_70', sol(
    L([
      S('Step 1: Write as a fraction',K('0.9='+FR('9','10'))+'.'),
      S('Step 2: Split the root',K(RT('0.9')+'='+FR('3',RT('10')))+'.'),
      S('Step 3: Divide',K(FR('3','3.1623')+AP+BOX('0.9487'))+'.')
    ],'Use '+K(RT('10')+AP+'3.1623')+' and divide 3 by it.','Square root of 0.9 is 3 divided by root ten, about 0.9487.'),
    L([
      S('Step 1: Fraction me likho',K('0.9='+FR('9','10'))+'.'),
      S('Step 2: Root todo',K(RT('0.9')+'='+FR('3',RT('10')))+'.'),
      S('Step 3: Divide',K(FR('3','3.1623')+AP+BOX('0.9487'))+'.')
    ],K(RT('10')+AP+'3.1623')+' use karo aur 3 ko isse divide karo.','0.9 ka square root 3 bataa root ten hai, lagbhag 0.9487.'),
    L([
      S('चरण 1: भिन्न में लिखें',K('0.9='+FR('9','10'))+'.'),
      S('चरण 2: मूल तोड़ें',K(RT('0.9')+'='+FR('3',RT('10')))+'.'),
      S('चरण 3: भाग दें',K(FR('3','3.1623')+AP+BOX('0.9487'))+'.')
    ],K(RT('10')+AP+'3.1623')+' का उपयोग करें और 3 को इससे भाग दें.','0.9 का वर्गमूल 3 बटा root ten है, लगभग 0.9487.')
  ));

  H.set('sq_pyq_71', sol(
    L([
      S('Step 1: Test for a perfect square','A decimal has a rational square root only when it is a perfect square. Check '+K('2361.96')+'.'),
      S('Step 2: Find the root',K(RT('2361.96')+'=48.6')+' because '+K(POW('48.6','2')+'=2361.96')+'.'),
      S('Step 3: Conclude','So '+K(BOX('2361.96'))+' is the only value with a rational square root.')
    ],'Look for the number whose square root ends cleanly.','Only 2361.96 is a perfect square; its square root is 48.6.'),
    L([
      S('Step 1: Perfect square test','Kisi decimal ka rational square root tabhi hota hai jab woh perfect square ho. '+K('2361.96')+' check karo.'),
      S('Step 2: Root nikaalo',K(RT('2361.96')+'=48.6')+' kyunki '+K(POW('48.6','2')+'=2361.96')+'.'),
      S('Step 3: Nishkarsh','To sirf '+K(BOX('2361.96'))+' ka square root rational hai.')
    ],'Woh number dhundo jiska square root saaf khatam ho.','Sirf 2361.96 perfect square hai; iska square root 48.6 hai.'),
    L([
      S('चरण 1: पूर्ण वर्ग परीक्षण','किसी दशमलव का परिमेय वर्गमूल तभी होता है जब वह पूर्ण वर्ग हो. '+K('2361.96')+' जाँचें.'),
      S('चरण 2: मूल निकालें',K(RT('2361.96')+'=48.6')+' क्योंकि '+K(POW('48.6','2')+'=2361.96')+'.'),
      S('चरण 3: निष्कर्ष','तो केवल '+K(BOX('2361.96'))+' का वर्गमूल परिमेय है.')
    ],'वह संख्या खोजें जिसका वर्गमूल साफ खत्म हो.','केवल 2361.96 पूर्ण वर्ग है; इसका वर्गमूल 48.6 है.')
  ));
})();
