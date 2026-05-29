/* PYQ solutions 21 of N — sq_pyq_75,76,77,78 */
(function(){
  var H=window.PYQH; if(!H) return;
  var K=H.K,RT=H.RT,CRT=H.CRT,FR=H.FR,BOX=H.BOX,POW=H.POW,S=H.S,L=H.L,sol=H.sol,T=H.TIMES,AP=H.AP;
  var B=String.fromCharCode(92);

  H.set('sq_pyq_75', sol(
    L([
      S('Step 1: Rewrite the surd','Write '+K('4'+RT('35')+'=2'+RT('140'))+', so the value becomes '+K('27-2'+RT('140'))+'.'),
      S('Step 2: Split 27','Find two numbers with sum 27 and product 140: 20 and 7.'),
      S('Step 3: Make a perfect square',K('27-2'+RT('140')+'=('+RT('20')+'-'+RT('7')+')^{2}=(2'+RT('5')+'-'+RT('7')+')^{2}')+'.'),
      S('Step 4: Take the root',K(RT('27-4'+RT('35'))+'='+BOX(B+'pm(2'+RT('5')+'-'+RT('7')+')'))+'.')
    ],'Match '+K('a-2'+RT('b'))+' with '+K('('+RT('m')+'-'+RT('n')+')^{2}')+' where m+n=a and mn=b.','First write 4 root 35 as 2 root 140, then split 27 into 20 and 7 to form a perfect square.'),
    L([
      S('Step 1: Surd rewrite karo','Likho '+K('4'+RT('35')+'=2'+RT('140'))+', to value ban jaati hai '+K('27-2'+RT('140'))+'.'),
      S('Step 2: 27 ko todo','Do numbers dhundo jinka sum 27 aur product 140 ho: 20 aur 7.'),
      S('Step 3: Perfect square banao',K('27-2'+RT('140')+'=('+RT('20')+'-'+RT('7')+')^{2}=(2'+RT('5')+'-'+RT('7')+')^{2}')+'.'),
      S('Step 4: Root lo',K(RT('27-4'+RT('35'))+'='+BOX(B+'pm(2'+RT('5')+'-'+RT('7')+')'))+'.')
    ],K('a-2'+RT('b'))+' ko '+K('('+RT('m')+'-'+RT('n')+')^{2}')+' se match karo jahan m+n=a, mn=b.','Pehle 4 root 35 ko 2 root 140 likho, fir 27 ko 20 aur 7 me todo taaki perfect square bane.'),
    L([
      S('चरण 1: सर्ड फिर से लिखें','लिखें '+K('4'+RT('35')+'=2'+RT('140'))+', तो मान बनता है '+K('27-2'+RT('140'))+'.'),
      S('चरण 2: 27 को तोड़ें','दो संख्याएँ खोजें जिनका योग 27 और गुणनफल 140 हो: 20 और 7.'),
      S('चरण 3: पूर्ण वर्ग बनाएं',K('27-2'+RT('140')+'=('+RT('20')+'-'+RT('7')+')^{2}=(2'+RT('5')+'-'+RT('7')+')^{2}')+'.'),
      S('चरण 4: मूल लें',K(RT('27-4'+RT('35'))+'='+BOX(B+'pm(2'+RT('5')+'-'+RT('7')+')'))+'.')
    ],K('a-2'+RT('b'))+' को '+K('('+RT('m')+'-'+RT('n')+')^{2}')+' से मिलाएं जहाँ m+n=a, mn=b.','पहले 4 root 35 को 2 root 140 लिखें, फिर 27 को 20 और 7 में तोड़ें ताकि पूर्ण वर्ग बने.')
  ));

  H.set('sq_pyq_76', sol(
    L([
      S('Step 1: Estimate the range',K('160^{2}=25600')+' and '+K('170^{2}=28900')+', so the root is between 160 and 170.'),
      S('Step 2: Use the unit digit','27225 ends in 5, so the root ends in 5. Test '+K('165^{2}=27225')+'.'),
      S('Step 3: Confirm',K(RT('27225')+'='+BOX('165'))+'.')
    ],'A number ending in 5 has a square root ending in 5; check the nearest one.','27225 ends in 5 and lies between 160 and 170 squared, so the root is 165.'),
    L([
      S('Step 1: Range estimate karo',K('160^{2}=25600')+' aur '+K('170^{2}=28900')+', to root 160 aur 170 ke beech hai.'),
      S('Step 2: Unit digit use karo','27225 ka ant 5 se, to root ka ant bhi 5. Test '+K('165^{2}=27225')+'.'),
      S('Step 3: Confirm karo',K(RT('27225')+'='+BOX('165'))+'.')
    ],'5 par khatam hone wali sankhya ka root bhi 5 par khatam hota hai; nearest check karo.','27225 ka ant 5 se aur yeh 160 se 170 ke square ke beech hai, to root 165.'),
    L([
      S('चरण 1: सीमा का अनुमान',K('160^{2}=25600')+' और '+K('170^{2}=28900')+', तो मूल 160 और 170 के बीच है.'),
      S('चरण 2: इकाई अंक का उपयोग','27225 का अंत 5 से, तो मूल का अंत भी 5. जाँच '+K('165^{2}=27225')+'.'),
      S('चरण 3: पुष्टि',K(RT('27225')+'='+BOX('165'))+'.')
    ],'5 पर खत्म होने वाली संख्या का मूल भी 5 पर खत्म होता है.','27225 का अंत 5 से और यह 160 से 170 के वर्ग के बीच है, तो मूल 165.')
  ));

  H.set('sq_pyq_77', sol(
    L([
      S('Step 1: Estimate the range',K('90^{2}=8100')+' and '+K('100^{2}=10000')+', so the root is between 90 and 100.'),
      S('Step 2: Use the unit digit','9409 ends in 9, so the root ends in 3 or 7. Test '+K('97^{2}=9409')+'.'),
      S('Step 3: Confirm',K(RT('9409')+'='+BOX('97'))+'.')
    ],'Use the last digit to narrow the root, then verify by squaring.','9409 lies between 90 and 100 squared and ends in 9, so the root is 97.'),
    L([
      S('Step 1: Range estimate karo',K('90^{2}=8100')+' aur '+K('100^{2}=10000')+', to root 90 aur 100 ke beech hai.'),
      S('Step 2: Unit digit use karo','9409 ka ant 9 se, to root ka ant 3 ya 7. Test '+K('97^{2}=9409')+'.'),
      S('Step 3: Confirm karo',K(RT('9409')+'='+BOX('97'))+'.')
    ],'Aakhri digit se root ko narrow karo, fir square karke verify karo.','9409 90 aur 100 ke square ke beech hai aur 9 par khatam, to root 97.'),
    L([
      S('चरण 1: सीमा का अनुमान',K('90^{2}=8100')+' और '+K('100^{2}=10000')+', तो मूल 90 और 100 के बीच है.'),
      S('चरण 2: इकाई अंक का उपयोग','9409 का अंत 9 से, तो मूल का अंत 3 या 7. जाँच '+K('97^{2}=9409')+'.'),
      S('चरण 3: पुष्टि',K(RT('9409')+'='+BOX('97'))+'.')
    ],'आखिरी अंक से मूल को सीमित करें, फिर वर्ग करके जाँचें.','9409 90 और 100 के वर्ग के बीच है और 9 पर खत्म, तो मूल 97.')
  ));

  H.set('sq_pyq_78', sol(
    L([
      S('Step 1: Whole-number cube root',K(CRT('216')+'=6')+'.'),
      S('Step 2: Count the decimals','0.000216 has 6 decimal places; dividing by 3 gives 2 decimal places in the root.'),
      S('Step 3: Place the decimal',K(CRT('0.000216')+'='+BOX('0.06'))+'.')
    ],'Take the cube root of the digits, then divide the decimal-place count by 3.','Cube root of 216 is 6; 6 decimal places become 2, giving 0.06.'),
    L([
      S('Step 1: Whole number cube root',K(CRT('216')+'=6')+'.'),
      S('Step 2: Decimals gino','0.000216 me 6 decimal places hain; 3 se divide karne par root me 2 decimal places.'),
      S('Step 3: Decimal lagao',K(CRT('0.000216')+'='+BOX('0.06'))+'.')
    ],'Digits ka cube root lo, fir decimal places ko 3 se divide karo.','216 ka cube root 6; 6 decimal places ban jaate hain 2, to 0.06.'),
    L([
      S('चरण 1: पूर्ण संख्या घनमूल',K(CRT('216')+'=6')+'.'),
      S('चरण 2: दशमलव गिनें','0.000216 में 6 दशमलव स्थान हैं; 3 से भाग देने पर मूल में 2 दशमलव स्थान.'),
      S('चरण 3: दशमलव लगाएं',K(CRT('0.000216')+'='+BOX('0.06'))+'.')
    ],'अंकों का घनमूल लें, फिर दशमलव स्थानों को 3 से भाग दें.','216 का घनमूल 6; 6 दशमलव स्थान बन जाते हैं 2, तो 0.06.')
  ));
})();
