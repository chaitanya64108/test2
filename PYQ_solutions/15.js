/* PYQ solutions 15 of N — sq_pyq_44,48,55 */
(function(){
  var H=window.PYQH; if(!H) return;
  var K=H.K,RT=H.RT,CRT=H.CRT,FR=H.FR,BOX=H.BOX,POW=H.POW,S=H.S,L=H.L,sol=H.sol,T=H.TIMES,AP=H.AP;

  H.set('sq_pyq_44', sol(
    L([
      S('Step 1: Write as a fraction',K('0.004096='+FR('4096','1000000'))+'.'),
      S('Step 2: Cube root top and bottom',K(CRT('4096')+'=16')+' and '+K(CRT('1000000')+'=100')+'.'),
      S('Step 3: Divide',K(CRT('0.004096')+'='+FR('16','100')+'='+BOX('0.16'))+'.')
    ],'Recall '+K(POW('16','3')+'=4096')+'.','cube root 4096 is 16, cube root 1000000 is 100, so 0.16.'),
    L([
      S('Step 1: Fraction me likho',K('0.004096='+FR('4096','1000000'))+'.'),
      S('Step 2: Upar-neeche cube root',K(CRT('4096')+'=16')+', '+K(CRT('1000000')+'=100')+'.'),
      S('Step 3: Divide',K(CRT('0.004096')+'='+FR('16','100')+'='+BOX('0.16'))+'.')
    ],K(POW('16','3')+'=4096')+' yaad rakho.','cube root 4096 = 16, cube root 1000000 = 100, to 0.16.'),
    L([
      S('चरण 1: भिन्न में लिखें',K('0.004096='+FR('4096','1000000'))+'.'),
      S('चरण 2: ऊपर-नीचे घनमूल',K(CRT('4096')+'=16')+', '+K(CRT('1000000')+'=100')+'.'),
      S('चरण 3: भाग दें',K(CRT('0.004096')+'='+FR('16','100')+'='+BOX('0.16'))+'.')
    ],K(POW('16','3')+'=4096')+' याद रखें.','घनमूल 4096 = 16, घनमूल 1000000 = 100, तो 0.16.')
  ));

  H.set('sq_pyq_48', sol(
    L([
      S('Step 1: Recognise the cube',K('24389='+POW('29','3'))+'.'),
      S('Step 2: Take the cube root',K(CRT('24389')+'='+BOX('29'))+'.')
    ],'Recall '+K(POW('29','3')+'=24389')+'.','29 cubed is 24389.'),
    L([
      S('Step 1: Cube pehchaano',K('24389='+POW('29','3'))+'.'),
      S('Step 2: Cube root lo',K(CRT('24389')+'='+BOX('29'))+'.')
    ],K(POW('29','3')+'=24389')+' yaad rakho.','29 ka cube 24389 hota hai.'),
    L([
      S('चरण 1: घन पहचानें',K('24389='+POW('29','3'))+'.'),
      S('चरण 2: घनमूल लें',K(CRT('24389')+'='+BOX('29'))+'.')
    ],K(POW('29','3')+'=24389')+' याद रखें.','29 का घन 24389 होता है.')
  ));

  H.set('sq_pyq_55', sol(
    L([
      S('Step 1: Spot the perfect square',K('4'+POW('a','2')+'-4a+1='+POW('(2a-1)','2'))+'.'),
      S('Step 2: Take the square root','Since '+K('2a=0.2078')+' is less than 1, '+K(RT(POW('(2a-1)','2'))+'=1-2a')+'.'),
      S('Step 3: Add the last term',K('(1-2a)+3a=1+a=1+0.1039='+BOX('1.1039'))+'.')
    ],K(RT('4'+POW('a','2')+'-4a+1')+'+3a=1+a')+', a clean identity.','Inside the root is 2a minus 1 squared, so the whole expression becomes 1 plus a.'),
    L([
      S('Step 1: Perfect square pehchaano',K('4'+POW('a','2')+'-4a+1='+POW('(2a-1)','2'))+'.'),
      S('Step 2: Root lo',K('2a=0.2078')+' ek se kam hai, isliye '+K(RT(POW('(2a-1)','2'))+'=1-2a')+'.'),
      S('Step 3: Aakhri term jodo',K('(1-2a)+3a=1+a=1+0.1039='+BOX('1.1039'))+'.')
    ],K(RT('4'+POW('a','2')+'-4a+1')+'+3a=1+a')+', saaf identity.','Root ke andar 2a minus 1 ka square hai, isliye poora expression 1 plus a ban jaata hai.'),
    L([
      S('चरण 1: पूर्ण वर्ग पहचानें',K('4'+POW('a','2')+'-4a+1='+POW('(2a-1)','2'))+'.'),
      S('चरण 2: मूल लें',K('2a=0.2078')+' एक से कम है, इसलिए '+K(RT(POW('(2a-1)','2'))+'=1-2a')+'.'),
      S('चरण 3: अंतिम पद जोड़ें',K('(1-2a)+3a=1+a=1+0.1039='+BOX('1.1039'))+'.')
    ],K(RT('4'+POW('a','2')+'-4a+1')+'+3a=1+a')+', साफ सर्वसमिका.','मूल के अंदर 2a minus 1 का वर्ग है, इसलिए पूरा व्यंजक 1 plus a बन जाता है.')
  ));
})();
