/* PYQ solutions 3 of N — sq_pyq_09 to sq_pyq_12 */
(function(){
  var H=window.PYQH; if(!H) return;
  var K=H.K,RT=H.RT,CRT=H.CRT,BOX=H.BOX,POW=H.POW,S=H.S,L=H.L,sol=H.sol,T=H.TIMES;

  H.set('sq_pyq_09', sol(
    L([
      S('Step 1: Two perfect-square roots',K(RT('2116')+'=46')+' and '+K(RT('1600')+'=40')+'.'),
      S('Step 2: Subtract','Their difference is '+K('46-40=6')+'.'),
      S('Step 3: Match the form','This 6 equals '+K(RT('?'))+', so '+K('?='+POW('6','2')+'=36')+', i.e. '+K(BOX('36'))+'.')
    ],K(POW('46','2')+'=2116')+' and '+K(POW('40','2')+'=1600')+' — recognise the squares.','Root both perfect squares, subtract, then square the result.'),
    L([
      S('Step 1: Do perfect-square root',K(RT('2116')+'=46')+' aur '+K(RT('1600')+'=40')+'.'),
      S('Step 2: Ghatao','Difference '+K('46-40=6')+'.'),
      S('Step 3: Form match karo','Ye 6 '+K(RT('?'))+' ke barabar hai, to '+K('?='+POW('6','2')+'=36')+', yaani '+K(BOX('36'))+'.')
    ],K(POW('46','2')+'=2116')+', '+K(POW('40','2')+'=1600')+' pehchaano.','Dono perfect square ke root lo, ghatao, fir square.'),
    L([
      S('चरण 1: दो पूर्ण-वर्ग मूल',K(RT('2116')+'=46')+' और '+K(RT('1600')+'=40')+'.'),
      S('चरण 2: घटाएँ','अंतर '+K('46-40=6')+'.'),
      S('चरण 3: रूप मिलाएँ','यह 6 '+K(RT('?'))+' के बराबर है, अतः '+K('?='+POW('6','2')+'=36')+', अर्थात् '+K(BOX('36'))+'.')
    ],K(POW('46','2')+'=2116')+', '+K(POW('40','2')+'=1600')+' पहचानें।','दोनों पूर्ण वर्ग के मूल लें, घटाएँ, फिर वर्ग करें।')
  ));

  H.set('sq_pyq_10', sol(
    L([
      S('Step 1: Write as a cube',K('0.000216='+POW('0.06','3'))+'.'),
      S('Step 2: Take the cube root','So '+K(CRT('0.000216')+'=0.06')+', giving '+K(BOX('0.06'))+'.')
    ],K('216='+POW('6','3'))+'; group decimals in threes for a cube root.','216 is 6 cubed; count decimal places in groups of three.'),
    L([
      S('Step 1: Cube ke roop mein likho',K('0.000216='+POW('0.06','3'))+'.'),
      S('Step 2: Cube root lo','To '+K(CRT('0.000216')+'=0.06')+', yaani '+K(BOX('0.06'))+'.')
    ],K('216='+POW('6','3'))+'; decimals ko 3-3 ke group mein dekho.','216 ka cube root 6; decimal places 3 ke group mein.'),
    L([
      S('चरण 1: घन के रूप में लिखें',K('0.000216='+POW('0.06','3'))+'.'),
      S('चरण 2: घनमूल लें','तो '+K(CRT('0.000216')+'=0.06')+', अर्थात् '+K(BOX('0.06'))+'.')
    ],K('216='+POW('6','3'))+'; दशमलव को तीन-तीन के समूह में देखें।','216 का घनमूल 6; दशमलव स्थान तीन के समूह में