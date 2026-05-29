/* PYQ solutions 4 of N — sq_pyq_13 to sq_pyq_16 */
(function(){
  var H=window.PYQH; if(!H) return;
  var K=H.K,RT=H.RT,CRT=H.CRT,FR=H.FR,BOX=H.BOX,POW=H.POW,S=H.S,L=H.L,sol=H.sol,T=H.TIMES;

  H.set('sq_pyq_13', sol(
    L([
      S('Step 1: Round to neat numbers','In an approximation question, replace every value by the nearest neat number before calculating.'),
      S('Step 2: Clear the outer root','Square both sides to remove the outer square root, then move the known product to the other side.'),
      S('Step 3: Solve for the unknown','Solving the resulting equation and picking the closest option gives '+K(BOX('1582'))+'.')
    ],'Approximation: round first, compute with easy numbers, then pick the nearest option.','Replace each value with a near round number, then solve.'),
    L([
      S('Step 1: Round numbers lo','Approximation me har value ko paas ke neat number se badal do.'),
      S('Step 2: Outer root hatao','Dono taraf square karo, fir known product doosri taraf le aao.'),
      S('Step 3: Unknown solve karo','Equation solve karke closest option lene par '+K(BOX('1582'))+'.')
    ],'Approximation: pehle round, easy numbers se compute, fir nearest option.','Har value ko paas ke round number se badlo, fir solve karo.'),
    L([
      S('चरण 1: निकटतम सरल संख्या लें','सन्निकटन में हर मान को निकटतम सरल संख्या से बदलें।'),
      S('चरण 2: बाहरी मूल हटाएँ','दोनों ओर वर्ग करें, फिर ज्ञात गुणनफल दूसरी ओर लाएँ।'),
      S('चरण 3: अज्ञात ज्ञात करें','समीकरण हल करके निकटतम विकल्प लेने पर '+K(BOX('1582'))+'.')
    ],'सन्निकटन: पहले गोल करें, सरल संख्याओं से गणना, फिर निकटतम विकल्प।','हर मान को निकट गोल संख्या से बदलें, फिर हल करें।')
  ));

  H.set('sq_pyq_14', sol(
    L([
      S('Step 1: Use the given root','Take the given value '+K(RT('33')+'=5.745')+'.'),
      S('Step 2: Divide by 11','Now '+K(FR(RT('33'),'11')+'='+FR('5.745','11')+'=0.5223')+'.'),
      S('Step 3: Answer','So the value is '+K(BOX('0.5223'))+'.')
    ],'Substitute the given root value, then just do the division.','Put in the given root value, then divide by 11.'),
    L([
      S('Step 1: Di gayi root value lo','Diya hai '+K(RT('33')+'=5.745')+'.'),
      S('Step 2: 11 se divide karo','Ab '+K(FR(RT('33'),'11')+'='+FR('5.745','11')+'=0.5223')+'.'),
      S('Step 3: Jawab','To value '+K(BOX('0.5223'))+'.')
    ],'Di gayi root value daalo, fir division kar do.','Di gayi root value daalo, fir 11 se divide karo.'),
    L([
      S('चरण 1: दिया गया मूल लें','दिया है '+K(RT('33')+'=5.745')+'.'),
      S('चरण 2: 11 से भाग दें','अब '+K(FR(RT('33'),'11')+'='+FR('5.745','11')+'=0.5223')+'.'),
      S('चरण 3: उत्तर','अतः मान '+K(BOX('0.5223'))+'.')
    ],'दिया गया मूल मान रखें, फिर भाग करें।','दिया गया मूल मान रखें, फिर 11 से भाग दें।')
  ));

  H.set('sq_pyq_15', sol(
    L([
      S('Step 1: Recognise the cubes','Numerator is '+K(POW('0.2','3')+'+'+POW('0.04','3'))+' and denominator is '+K(POW('0.4','3')+'+'+POW('0.08','3'))+'.'),
      S('Step 2: Factor out the common cube','Since '+K('0.4=2'+T+'0.2')+' and '+K('0.08=2'+T+'0.04')+', the denominator equals '+K(POW('2','3')+'=8')+' times the numerator.'),
      S('Step 3: Take the cube root','So the fraction is '+K(FR('1','8'))+' and '+K(CRT(FR('1','8'))+'='+FR('1','2')+'=0.5')+', i.e. '+K(BOX('0.5'))+'.')
    ],'When every base doubles, a sum of cubes scales by '+K(POW('2','3')+'=8')+'.','Both top and bottom are cube-sums; their ratio is '+K(FR('1','8'))+'.'),
    L([
      S('Step 1: Cubes pehchaano','Numerator '+K(POW('0.2','3')+'+'+POW('0.04','3'))+' aur denominator '+K(POW('0.4','3')+'+'+POW('0.08','3'))+'.'),
      S('Step 2: Common cube nikaalo','Kyunki '+K('0.4=2'+T+'0.2')+' aur '+K('0.08=2'+T+'0.04')+', denominator '+K(POW('2','3')+'=8')+' guna numerator hai.'),
      S('Step 3: Cube root lo','To fraction '+K(FR('1','8'))+' aur '+K(CRT(FR('1','8'))+'='+FR('1','2')+'=0.5')+', yaani '+K(BOX('0.5'))+'.')
    ],'Har base double hone par cube-sum '+K(POW('2','3')+'=8')+' guna ho jaata hai.','Upar-neeche dono cube-sum hain; ratio '+K(FR('1','8'))+'.'),
    L([
      S('चरण 1: घन पहचानें','अंश '+K(POW('0.2','3')+'+'+POW('0.04','3'))+' और हर '+K(POW('0.4','3')+'+'+POW('0.08','3'))+'.'),
      S('चरण 2: उभयनिष्ठ घन निकालें','चूँकि '+K('0.4=2'+T+'0.2')+' और '+K('0.08=2'+T+'0.04')+', हर '+K(POW('2','3')+'=8')+' गुना अंश है।'),
      S('चरण 3: घनमूल लें','अतः भिन्न '+K(FR('1','8'))+' और '+K(CRT(FR('1','8'))+'='+FR('1','2')+'=0.5')+', अर्थात् '+K(BOX('0.5'))+'.')
    ],'हर आधार दुगुना होने पर घन-योग '+K(POW('2','3')+'=8')+' गुना होता है।','ऊपर-नीचे दोनों घन-योग हैं; अनुपात '+K(FR('1','8'))+'.')
  ));

  H.set('sq_pyq_16', sol(
    L([
      S('Step 1: Write as a cube',K('0.000216='+POW('0.06','3'))+'.'),
      S('Step 2: Take the cube root','So '+K(CRT('0.000216')+'=0.06')+', giving '+K(BOX('0.06'))+'.')
    ],K('216='+POW('6','3'))+'; group the decimals in threes for a cube root.','216 is 6 cubed; count decimal places in groups of three.'),
    L([
      S('Step 1: Cube ke roop mein likho',K('0.000216='+POW('0.06','3'))+'.'),
      S('Step 2: Cube root lo','To '+K(CRT('0.000216')+'=0.06')+', yaani '+K(BOX('0.06'))+'.')
    ],K('216='+POW('6','3'))+'; decimals ko 3-3 ke group mein dekho.','216 ka cube root 6; decimal places 3 ke group mein.'),
    L([
      S('चरण 1: घन के रूप में लिखें',K('0.000216='+POW('0.06','3'))+'.'),
      S('चरण 2: घनमूल लें','तो '+K(CRT('0.000216')+'=0.06')+', अर्थात् '+K(BOX('0.06'))+'.')
    ],K('216='+POW('6','3'))+'; दशमलव को तीन-तीन के समूह में देखें।','216 का घनमूल 6; दशमलव स्थान तीन के समूह में।')
  ));
})();
