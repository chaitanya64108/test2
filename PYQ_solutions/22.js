/* PYQ solutions 22 of N — sq_pyq_79,80,81,82 */
(function(){
  var H=window.PYQH; if(!H) return;
  var K=H.K,RT=H.RT,CRT=H.CRT,FR=H.FR,BOX=H.BOX,POW=H.POW,S=H.S,L=H.L,sol=H.sol,T=H.TIMES,AP=H.AP;

  H.set('sq_pyq_79', sol(
    L([
      S('Step 1: Find the square root',K(RT('15876')+'=126')+' because '+K('126^{2}=15876')+'.'),
      S('Step 2: Read the unit digit','The unit digit of 126 is '+K(BOX('6'))+'.')
    ],'Find the root first, then look at its last digit.','The square root of 15876 is 126, whose unit digit is 6.'),
    L([
      S('Step 1: Square root nikaalo',K(RT('15876')+'=126')+' kyunki '+K('126^{2}=15876')+'.'),
      S('Step 2: Unit digit padho','126 ka unit digit hai '+K(BOX('6'))+'.')
    ],'Pehle root nikaalo, fir uska aakhri digit dekho.','15876 ka square root 126 hai, jiska unit digit 6 hai.'),
    L([
      S('चरण 1: वर्गमूल निकालें',K(RT('15876')+'=126')+' क्योंकि '+K('126^{2}=15876')+'.'),
      S('चरण 2: इकाई अंक पढ़ें','126 का इकाई अंक है '+K(BOX('6'))+'.')
    ],'पहले मूल निकालें, फिर उसका आखिरी अंक देखें.','15876 का वर्गमूल 126 है, जिसका इकाई अंक 6 है.')
  ));

  H.set('sq_pyq_80', sol(
    L([
      S('Step 1: Each root',K(RT('0.64')+'=0.8')+', '+K(RT('1.44')+'=1.2')+', '+K(RT('0.0009')+'=0.03')+'.'),
      S('Step 2: Add them',K('0.8+1.2+0.03='+BOX('2.03'))+'.')
    ],'Take each square root separately, then add.','Roots are 0.8, 1.2 and 0.03; their sum is 2.03.'),
    L([
      S('Step 1: Har root',K(RT('0.64')+'=0.8')+', '+K(RT('1.44')+'=1.2')+', '+K(RT('0.0009')+'=0.03')+'.'),
      S('Step 2: Jodo',K('0.8+1.2+0.03='+BOX('2.03'))+'.')
    ],'Har square root alag nikaalo, fir jodo.','Roots hain 0.8, 1.2 aur 0.03; inka sum 2.03.'),
    L([
      S('चरण 1: प्रत्येक मूल',K(RT('0.64')+'=0.8')+', '+K(RT('1.44')+'=1.2')+', '+K(RT('0.0009')+'=0.03')+'.'),
      S('चरण 2: जोड़ें',K('0.8+1.2+0.03='+BOX('2.03'))+'.')
    ],'प्रत्येक वर्गमूल अलग निकालें, फिर जोड़ें.','मूल हैं 0.8, 1.2 और 0.03; इनका योग 2.03.')
  ));

  H.set('sq_pyq_81', sol(
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

  H.set('sq_pyq_82', sol(
    L([
      S('Step 1: Remove the extra people',K('2410-9=2401')+', which is a perfect square.'),
      S('Step 2: Square root',K(RT('2401')+'='+BOX('49'))+', so the front row has 49 people.')
    ],'Subtract the extra people first, then take the square root.','Take 9 away from 2410 to get 2401, whose square root is 49.'),
    L([
      S('Step 1: Extra log hatao',K('2410-9=2401')+', jo perfect square hai.'),
      S('Step 2: Square root',K(RT('2401')+'='+BOX('49'))+', to front row me 49 log.')
    ],'Pehle extra log ghatao, fir square root lo.','2410 me se 9 ghatao to 2401 milta hai, jiska square root 49.'),
    L([
      S('चरण 1: अतिरिक्त लोग हटाएं',K('2410-9=2401')+', जो पूर्ण वर्ग है.'),
      S('चरण 2: वर्गमूल',K(RT('2401')+'='+BOX('49'))+', तो अगली पंक्ति में 49 लोग.')
    ],'पहले अतिरिक्त लोग घटाएं, फिर वर्गमूल लें.','2410 में से 9 घटाएं तो 2401 मिलता है, जिसका वर्गमूल 49.')
  ));
})();
