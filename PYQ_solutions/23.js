/* PYQ solutions 23 of N — sq_pyq_83,84,85,86 */
(function(){
  var H=window.PYQH; if(!H) return;
  var K=H.K,RT=H.RT,CRT=H.CRT,FR=H.FR,BOX=H.BOX,POW=H.POW,S=H.S,L=H.L,sol=H.sol,T=H.TIMES,AP=H.AP;

  H.set('sq_pyq_83', sol(
    L([
      S('Step 1: Factor into a cube',K('4096='+POW('16','3'))+'.'),
      S('Step 2: Take the cube root',K(CRT('4096')+'='+BOX('16'))+'.')
    ],'Recall '+K(POW('16','3')+'=4096')+' from the cubes table.','Look for the number whose cube is 4096; it is 16.'),
    L([
      S('Step 1: Cube me factor karo',K('4096='+POW('16','3'))+'.'),
      S('Step 2: Cube root lo',K(CRT('4096')+'='+BOX('16'))+'.')
    ],'Cubes table se '+K(POW('16','3')+'=4096')+' yaad karo.','Woh number dhundo jiska cube 4096 ho; woh 16 hai.'),
    L([
      S('चरण 1: घन में गुणनखंड',K('4096='+POW('16','3'))+'.'),
      S('चरण 2: घनमूल लें',K(CRT('4096')+'='+BOX('16'))+'.')
    ],'घन सारणी से '+K(POW('16','3')+'=4096')+' याद करें.','वह संख्या खोजें जिसका घन 4096 हो; वह 16 है.')
  ));

  H.set('sq_pyq_84', sol(
    L([
      S('Step 1: Square root part',K(RT('1369')+'=37')+' because '+K('37^{2}=1369')+'.'),
      S('Step 2: Cube root part',K(CRT('2744')+'=14')+' because '+K('14^{3}=2744')+'.'),
      S('Step 3: Add',K('37+14='+BOX('51'))+'.')
    ],'Evaluate each root, then add.','Square root of 1369 is 37 and cube root of 2744 is 14; add them.'),
    L([
      S('Step 1: Square root part',K(RT('1369')+'=37')+' kyunki '+K('37^{2}=1369')+'.'),
      S('Step 2: Cube root part',K(CRT('2744')+'=14')+' kyunki '+K('14^{3}=2744')+'.'),
      S('Step 3: Jodo',K('37+14='+BOX('51'))+'.')
    ],'Har root nikaalo, fir jodo.','1369 ka square root 37 aur 2744 ka cube root 14; jodo.'),
    L([
      S('चरण 1: वर्गमूल भाग',K(RT('1369')+'=37')+' क्योंकि '+K('37^{2}=1369')+'.'),
      S('चरण 2: घनमूल भाग',K(CRT('2744')+'=14')+' क्योंकि '+K('14^{3}=2744')+'.'),
      S('चरण 3: जोड़ें',K('37+14='+BOX('51'))+'.')
    ],'प्रत्येक मूल निकालें, फिर जोड़ें.','1369 का वर्गमूल 37 और 2744 का घनमूल 14; जोड़ें.')
  ));

  H.set('sq_pyq_85', sol(
    L([
      S('Step 1: Estimate the range',K('60^{2}=3600')+' and '+K('70^{2}=4900')+', so the root is between 60 and 70.'),
      S('Step 2: Use the unit digit','4356 ends in 6, so the root ends in 4 or 6. Test '+K('66^{2}=4356')+'.'),
      S('Step 3: Confirm',K(RT('4356')+'='+BOX('66'))+'.')
    ],'Use the last digit and nearby squares.','4356 lies between 60 and 70 squared and ends in 6, so the root is 66.'),
    L([
      S('Step 1: Range estimate karo',K('60^{2}=3600')+' aur '+K('70^{2}=4900')+', to root 60 aur 70 ke beech.'),
      S('Step 2: Unit digit use karo','4356 ka ant 6 se, to root ka ant 4 ya 6. Test '+K('66^{2}=4356')+'.'),
      S('Step 3: Confirm karo',K(RT('4356')+'='+BOX('66'))+'.')
    ],'Aakhri digit aur paas ke squares use karo.','4356 60 aur 70 ke square ke beech aur 6 par khatam, to root 66.'),
    L([
      S('चरण 1: सीमा अनुमान',K('60^{2}=3600')+' और '+K('70^{2}=4900')+', तो मूल 60 और 70 के बीच.'),
      S('चरण 2: इकाई अंक','4356 का अंत 6 से, तो मूल का अंत 4 या 6. जाँच '+K('66^{2}=4356')+'.'),
      S('चरण 3: पुष्टि',K(RT('4356')+'='+BOX('66'))+'.')
    ],'आखिरी अंक और पास के वर्ग उपयोग करें.','4356 60 और 70 के वर्ग के बीच और 6 पर खत्म, तो मूल 66.')
  ));

  H.set('sq_pyq_86', sol(
    L([
      S('Step 1: Remove the square root','Square both sides: '+K(FR('x','49')+'='+POW('('+FR('4','9')+')','2')+'='+FR('16','81'))+'.'),
      S('Step 2: Solve for x',K('x=49'+T+FR('16','81')+'='+FR('784','81'))+'.'),
      S('Step 3: Divide',K(FR('784','81')+AP+BOX('9.69'))+'.')
    ],'Square both sides, then multiply by 49.','Square both sides to remove the root, then multiply by 49 and divide.'),
    L([
      S('Step 1: Root hatao','Dono taraf square karo: '+K(FR('x','49')+'='+POW('('+FR('4','9')+')','2')+'='+FR('16','81'))+'.'),
      S('Step 2: x ke liye solve karo',K('x=49'+T+FR('16','81')+'='+FR('784','81'))+'.'),
      S('Step 3: Divide',K(FR('784','81')+AP+BOX('9.69'))+'.')
    ],'Dono taraf square karo, fir 49 se multiply karo.','Root hatane ke liye dono taraf square karo, fir 49 se multiply aur divide karo.'),
    L([
      S('चरण 1: वर्गमूल हटाएं','दोनों ओर वर्ग करें: '+K(FR('x','49')+'='+POW('('+FR('4','9')+')','2')+'='+FR('16','81'))+'.'),
      S('चरण 2: x के लिए हल करें',K('x=49'+T+FR('16','81')+'='+FR('784','81'))+'.'),
      S('चरण 3: भाग दें',K(FR('784','81')+AP+BOX('9.69'))+'.')
    ],'दोनों ओर वर्ग करें, फिर 49 से गुणा करें.','मूल हटाने के लिए दोनों ओर वर्ग करें, फिर 49 से गुणा और भाग करें.')
  ));
})();
