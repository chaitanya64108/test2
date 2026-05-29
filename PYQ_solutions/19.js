/* PYQ solutions 19 of N — sq_pyq_64,65,68,69 */
(function(){
  var H=window.PYQH; if(!H) return;
  var K=H.K,RT=H.RT,CRT=H.CRT,FR=H.FR,BOX=H.BOX,POW=H.POW,S=H.S,L=H.L,sol=H.sol,T=H.TIMES,AP=H.AP;

  H.set('sq_pyq_64', sol(
    L([
      S('Step 1: Remove the extra men','From 15440 take away the 64 extra, leaving '+K('15376')+' arranged as a perfect square.'),
      S('Step 2: Square root',K(RT('15376')+'='+BOX('124'))+', so the front row has 124 men.')
    ],'Subtract the leftover first, then take the square root.','Take 64 away from 15440 and find the square root of 15376.'),
    L([
      S('Step 1: Extra men hatao','15440 me se 64 extra hatao, bachte hain '+K('15376')+' jo perfect square me sajaaye gaye.'),
      S('Step 2: Square root',K(RT('15376')+'='+BOX('124'))+', to front row me 124 log.')
    ],'Pehle bache hue ghatao, fir square root lo.','15440 me se 64 ghatao aur 15376 ka square root nikaalo.'),
    L([
      S('चरण 1: अतिरिक्त लोग हटाएं','15440 में से 64 अतिरिक्त हटाएं, बचते हैं '+K('15376')+' जो पूर्ण वर्ग में सजाए गए.'),
      S('चरण 2: वर्गमूल',K(RT('15376')+'='+BOX('124'))+', तो अगली पंक्ति में 124 लोग.')
    ],'पहले बचे हुए घटाएं, फिर वर्गमूल लें.','15440 में से 64 घटाएं और 15376 का वर्गमूल निकालें.')
  ));

  H.set('sq_pyq_65', sol(
    L([
      S('Step 1: Find the next perfect square',K(POW('70','2')+'=4900')+' and '+K(POW('71','2')+'=5041')+', so the smallest square above 4931 is 5041.'),
      S('Step 2: Subtract',K('5041-4931='+BOX('110'))+'.')
    ],'Find the square just above the number, then subtract.','The next perfect square after 4931 is 5041; subtract to get the number to add.'),
    L([
      S('Step 1: Agla perfect square',K(POW('70','2')+'=4900')+' aur '+K(POW('71','2')+'=5041')+', to 4931 se bada sabse chhota square 5041 hai.'),
      S('Step 2: Ghatao',K('5041-4931='+BOX('110'))+'.')
    ],'Number se thoda bade square ko dhundo, fir ghatao.','4931 ke baad agla perfect square 5041 hai; jodne wali sankhya ke liye ghatao.'),
    L([
      S('चरण 1: अगला पूर्ण वर्ग',K(POW('70','2')+'=4900')+' और '+K(POW('71','2')+'=5041')+', तो 4931 से बड़ा सबसे छोटा वर्ग 5041 है.'),
      S('चरण 2: घटाएं',K('5041-4931='+BOX('110'))+'.')
    ],'संख्या से थोड़ा बड़े वर्ग को खोजें, फिर घटाएं.','4931 के बाद अगला पूर्ण वर्ग 5041 है; जोड़ी जाने वाली संख्या के लिए घटाएं.')
  ));

  H.set('sq_pyq_68', sol(
    L([
      S('Step 1: Cube root term',K(CRT('0.000512')+'=0.08')+' because '+K(POW('0.08','3')+'=0.000512')+'.'),
      S('Step 2: Square root term',K(RT('0.04')+'=0.2')+'.'),
      S('Step 3: Add',K('0.08+0.2='+BOX('0.28'))+'.')
    ],'Evaluate the two roots separately, then add.','Cube root of 0.000512 is 0.08 and square root of 0.04 is 0.2; add them.'),
    L([
      S('Step 1: Cube root wala part',K(CRT('0.000512')+'=0.08')+' kyunki '+K(POW('0.08','3')+'=0.000512')+'.'),
      S('Step 2: Square root wala part',K(RT('0.04')+'=0.2')+'.'),
      S('Step 3: Jodo',K('0.08+0.2='+BOX('0.28'))+'.')
    ],'Dono root alag nikaalo, fir jodo.','0.000512 ka cube root 0.08 aur 0.04 ka square root 0.2; jodo.'),
    L([
      S('चरण 1: घनमूल वाला भाग',K(CRT('0.000512')+'=0.08')+' क्योंकि '+K(POW('0.08','3')+'=0.000512')+'.'),
      S('चरण 2: वर्गमूल वाला भाग',K(RT('0.04')+'=0.2')+'.'),
      S('चरण 3: जोड़ें',K('0.08+0.2='+BOX('0.28'))+'.')
    ],'दोनों मूल अलग निकालें, फिर जोड़ें.','0.000512 का घनमूल 0.08 और 0.04 का वर्गमूल 0.2; जोड़ें.')
  ));

  H.set('sq_pyq_69', sol(
    L([
      S('Step 1: Sum and product','For '+K(POW('x','2')+'-8x+14=0')+', the roots give '+K('a+b=8')+' and '+K('ab=14')+'.'),
      S('Step 2: Factor the ratio',K(FR(POW('a','2')+'-'+POW('b','2'),POW('a','3')+'-'+POW('b','3'))+'='+FR('(a-b)(a+b)','(a-b)('+POW('a','2')+'+ab+'+POW('b','2')+')')+'='+FR('a+b',POW('a','2')+'+ab+'+POW('b','2')))+'.'),
      S('Step 3: Substitute','Here '+K(POW('a','2')+'+'+POW('b','2')+'=64-28=36')+', so the ratio '+K('='+FR('8','50')+'='+FR('4','25')+'='+BOX(POW('('+FR('2','5')+')','2')))+'.')
    ],'Factor both differences; the common '+K('(a-b)')+' cancels.','Use sum of roots 8 and product 14; the ratio becomes the square of two fifths.'),
    L([
      S('Step 1: Sum aur product','Samikaran '+K(POW('x','2')+'-8x+14=0')+' me '+K('a+b=8')+' aur '+K('ab=14')+'.'),
      S('Step 2: Ratio factor karo',K(FR(POW('a','2')+'-'+POW('b','2'),POW('a','3')+'-'+POW('b','3'))+'='+FR('(a-b)(a+b)','(a-b)('+POW('a','2')+'+ab+'+POW('b','2')+')')+'='+FR('a+b',POW('a','2')+'+ab+'+POW('b','2')))+'.'),
      S('Step 3: Value rakho','Yahan '+K(POW('a','2')+'+'+POW('b','2')+'=64-28=36')+', to ratio '+K('='+FR('8','50')+'='+FR('4','25')+'='+BOX(POW('('+FR('2','5')+')','2')))+'.')
    ],'Dono difference ko factor karo; common '+K('(a-b)')+' cancel ho jata hai.','Roots ka sum 8 aur product 14 use karo; ratio do-bataa-paanch ke square ke barabar aata hai.'),
    L([
      S('चरण 1: योग और गुणनफल','समीकरण '+K(POW('x','2')+'-8x+14=0')+' में '+K('a+b=8')+' और '+K('ab=14')+'.'),
      S('चरण 2: अनुपात गुणनखंड करें',K(FR(POW('a','2')+'-'+POW('b','2'),POW('a','3')+'-'+POW('b','3'))+'='+FR('(a-b)(a+b)','(a-b)('+POW('a','2')+'+ab+'+POW('b','2')+')')+'='+FR('a+b',POW('a','2')+'+ab+'+POW('b','2')))+'.'),
      S('चरण 3: मान रखें','यहाँ '+K(POW('a','2')+'+'+POW('b','2')+'=64-28=36')+', तो अनुपात '+K('='+FR('8','50')+'='+FR('4','25')+'='+BOX(POW('('+FR('2','5')+')','2')))+'.')
    ],'दोनों अंतर का गुणनखंड करें; उभयनिष्ठ '+K('(a-b)')+' कट जाता है.','मूलों का योग 8 और गुणनफल 14 उपयोग करें; अनुपात दो-बटा-पाँच के वर्ग के बराबर आता है.')
  ));
})();
