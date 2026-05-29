/* PYQ solutions 25 of N — sq_pyq_91,92,93,94,95 */
(function(){
  var H=window.PYQH; if(!H) return;
  var K=H.K,RT=H.RT,CRT=H.CRT,FR=H.FR,BOX=H.BOX,POW=H.POW,S=H.S,L=H.L,sol=H.sol,T=H.TIMES,D=H.DIV,AP=H.AP;

  H.set('sq_pyq_91', sol(
    L([
      S('Step 1: Recognise perfect squares',K('7+4'+RT('3')+'='+POW('(2+'+RT('3')+')','2'))+' and '+K('7-4'+RT('3')+'='+POW('(2-'+RT('3')+')','2'))+'.'),
      S('Step 2: Take the roots',K(RT('7+4'+RT('3'))+'=2+'+RT('3'))+' and '+K(RT('7-4'+RT('3'))+'=2-'+RT('3'))+'.'),
      S('Step 3: Add',K('(2+'+RT('3')+')+(2-'+RT('3')+')='+BOX('4'))+'.')
    ],'Write each surd as a perfect square, then the root parts cancel.','Each term is a perfect square; the root parts cancel and leave 4.'),
    L([
      S('Step 1: Perfect squares pehchaano',K('7+4'+RT('3')+'='+POW('(2+'+RT('3')+')','2'))+' aur '+K('7-4'+RT('3')+'='+POW('(2-'+RT('3')+')','2'))+'.'),
      S('Step 2: Roots lo',K(RT('7+4'+RT('3'))+'=2+'+RT('3'))+' aur '+K(RT('7-4'+RT('3'))+'=2-'+RT('3'))+'.'),
      S('Step 3: Jodo',K('(2+'+RT('3')+')+(2-'+RT('3')+')='+BOX('4'))+'.')
    ],'Har surd ko perfect square likho, fir root parts cancel ho jaate hain.','Dono term perfect square hain; root parts cancel hokar 4 bachta hai.'),
    L([
      S('चरण 1: पूर्ण वर्ग पहचानें',K('7+4'+RT('3')+'='+POW('(2+'+RT('3')+')','2'))+' और '+K('7-4'+RT('3')+'='+POW('(2-'+RT('3')+')','2'))+'.'),
      S('चरण 2: मूल लें',K(RT('7+4'+RT('3'))+'=2+'+RT('3'))+' और '+K(RT('7-4'+RT('3'))+'=2-'+RT('3'))+'.'),
      S('चरण 3: जोड़ें',K('(2+'+RT('3')+')+(2-'+RT('3')+')='+BOX('4'))+'.')
    ],'प्रत्येक सर्ड को पूर्ण वर्ग लिखें, फिर मूल भाग कट जाते हैं.','दोनों पद पूर्ण वर्ग हैं; मूल भाग कटकर 4 बचता है.')
  ));

  H.set('sq_pyq_92', sol(
    L([
      S('Step 1: Find nearby cubes',K('14^{3}=2744')+' and '+K('15^{3}=3375')+'.'),
      S('Step 2: Compare the distances','2750 is only 6 above 2744 but 625 below 3375, so 2744 is nearest.'),
      S('Step 3: Answer',K(BOX('2744'))+'.')
    ],'Check the cubes just below and above the number.','The cube of 14 is 2744, which is closest to 2750.'),
    L([
      S('Step 1: Paas ke cubes',K('14^{3}=2744')+' aur '+K('15^{3}=3375')+'.'),
      S('Step 2: Distance compare karo','2750 sirf 6 upar hai 2744 se par 625 neeche 3375 se, to 2744 sabse paas.'),
      S('Step 3: Answer',K(BOX('2744'))+'.')
    ],'Number ke just neeche aur upar ke cubes check karo.','14 ka cube 2744 hai, jo 2750 ke sabse paas.'),
    L([
      S('चरण 1: पास के घन',K('14^{3}=2744')+' और '+K('15^{3}=3375')+'.'),
      S('चरण 2: दूरी तुलना','2750 केवल 6 ऊपर है 2744 से पर 625 नीचे 3375 से, तो 2744 सबसे पास.'),
      S('चरण 3: उत्तर',K(BOX('2744'))+'.')
    ],'संख्या के ठीक नीचे और ऊपर के घन जाँचें.','14 का घन 2744 है, जो 2750 के सबसे पास.')
  ));

  H.set('sq_pyq_93', sol(
    L([
      S('Step 1: Square root term',K(RT('0.81')+'=0.9')+'.'),
      S('Step 2: Cube root term',K(CRT('0.008')+'=0.2')+'.'),
      S('Step 3: Add',K('0.9+0.2='+BOX('1.1'))+'.')
    ],'Evaluate each root separately, then add.','Square root of 0.81 is 0.9 and cube root of 0.008 is 0.2; add to get 1.1.'),
    L([
      S('Step 1: Square root wala part',K(RT('0.81')+'=0.9')+'.'),
      S('Step 2: Cube root wala part',K(CRT('0.008')+'=0.2')+'.'),
      S('Step 3: Jodo',K('0.9+0.2='+BOX('1.1'))+'.')
    ],'Dono root alag nikaalo, fir jodo.','0.81 ka square root 0.9 aur 0.008 ka cube root 0.2; jodkar 1.1.'),
    L([
      S('चरण 1: वर्गमूल वाला भाग',K(RT('0.81')+'=0.9')+'.'),
      S('चरण 2: घनमूल वाला भाग',K(CRT('0.008')+'=0.2')+'.'),
      S('चरण 3: जोड़ें',K('0.9+0.2='+BOX('1.1'))+'.')
    ],'दोनों मूल अलग निकालें, फिर जोड़ें.','0.81 का वर्गमूल 0.9 और 0.008 का घनमूल 0.2; जोड़कर 1.1.')
  ));

  H.set('sq_pyq_94', sol(
    L([
      S('Step 1: Each root',K(RT('0.64')+'=0.8')+', '+K(RT('1.44')+'=1.2')+', '+K(RT('0.0009')+'=0.03')+'.'),
      S('Step 2: Add them',K('0.8+1.2+0.03='+BOX('2.03'))+'.')
    ],'Take each square root, then add.','Roots are 0.8, 1.2 and 0.03; their sum is 2.03.'),
    L([
      S('Step 1: Har root',K(RT('0.64')+'=0.8')+', '+K(RT('1.44')+'=1.2')+', '+K(RT('0.0009')+'=0.03')+'.'),
      S('Step 2: Jodo',K('0.8+1.2+0.03='+BOX('2.03'))+'.')
    ],'Har square root nikaalo, fir jodo.','Roots hain 0.8, 1.2 aur 0.03; sum 2.03.'),
    L([
      S('चरण 1: प्रत्येक मूल',K(RT('0.64')+'=0.8')+', '+K(RT('1.44')+'=1.2')+', '+K(RT('0.0009')+'=0.03')+'.'),
      S('चरण 2: जोड़ें',K('0.8+1.2+0.03='+BOX('2.03'))+'.')
    ],'प्रत्येक वर्गमूल निकालें, फिर जोड़ें.','मूल हैं 0.8, 1.2 और 0.03; योग 2.03.')
  ));

  H.set('sq_pyq_95', sol(
    L([
      S('Step 1: Square root',K(RT('4096')+'=64')+'.'),
      S('Step 2: Cube root',K(CRT('512')+'=8')+'.'),
      S('Step 3: Divide',K('64'+D+'8='+BOX('8'))+'.')
    ],'Find each root, then divide.','Square root of 4096 is 64 and cube root of 512 is 8; divide to get 8.'),
    L([
      S('Step 1: Square root',K(RT('4096')+'=64')+'.'),
      S('Step 2: Cube root',K(CRT('512')+'=8')+'.'),
      S('Step 3: Divide',K('64'+D+'8='+BOX('8'))+'.')
    ],'Har root nikaalo, fir divide karo.','4096 ka square root 64 aur 512 ka cube root 8; divide karke 8.'),
    L([
      S('चरण 1: वर्गमूल',K(RT('4096')+'=64')+'.'),
      S('चरण 2: घनमूल',K(CRT('512')+'=8')+'.'),
      S('चरण 3: भाग दें',K('64'+D+'8='+BOX('8'))+'.')
    ],'प्रत्येक मूल निकालें, फिर भाग दें.','4096 का वर्गमूल 64 और 512 का घनमूल 8; भाग देकर 8.')
  ));
})();
