/* PYQ solutions 1 of N — sq_pyq_01 to sq_pyq_04 */
(function(){
  var H=window.PYQH; if(!H) return;
  var K=H.K,RT=H.RT,CRT=H.CRT,FR=H.FR,BOX=H.BOX,POW=H.POW,S=H.S,L=H.L,sol=H.sol,T=H.TIMES;

  H.set('sq_pyq_01', sol(
    L([
      S('Step 1: Spot the reciprocal pair','Here '+K('y')+' is just '+K('x')+' turned upside down, so their product is '+K('x'+T+'y=1')+'.'),
      S('Step 2: Find x + y','Add over a common denominator: '+K('x+y='+FR('('+RT('3')+'+1)^{2}+('+RT('3')+'-1)^{2}','('+RT('3')+'-1)('+RT('3')+'+1)')+'='+FR('8','2')+'=4')+'.'),
      S('Step 3: Apply the identity','Now '+K(POW('x','2')+'+'+POW('y','2')+'=(x+y)^{2}-2xy='+POW('4','2')+'-2=14')+', so the value is '+K(BOX('14'))+'.')
    ],'Reciprocal pair? Use '+K(POW('x','2')+'+'+POW('y','2')+'=(x+y)^{2}-2')+' because '+K('xy=1')+'.','Reciprocals multiply to 1, then use the identity.'),
    L([
      S('Step 1: Reciprocal pair pehchaano','Yahan '+K('y')+' bas '+K('x')+' ulta hai, isliye '+K('x'+T+'y=1')+'.'),
      S('Step 2: x + y nikaalo','Common denominator pe jodo: '+K('x+y='+FR('('+RT('3')+'+1)^{2}+('+RT('3')+'-1)^{2}','('+RT('3')+'-1)('+RT('3')+'+1)')+'='+FR('8','2')+'=4')+'.'),
      S('Step 3: Identity lagao','Ab '+K(POW('x','2')+'+'+POW('y','2')+'=(x+y)^{2}-2xy='+POW('4','2')+'-2=14')+', to value '+K(BOX('14'))+'.')
    ],'Reciprocal pair pe '+K(POW('x','2')+'+'+POW('y','2')+'=(x+y)^{2}-2')+' use karo kyunki '+K('xy=1')+'.','Reciprocals ka product 1 hota hai, fir identity lagao.'),
    L([
      S('चरण 1: व्युत्क्रम युग्म पहचानें','यहाँ '+K('y')+' केवल '+K('x')+' का व्युत्क्रम है, इसलिए '+K('x'+T+'y=1')+'.'),
      S('चरण 2: x + y ज्ञात करें','समान हर पर जोड़ें: '+K('x+y='+FR('('+RT('3')+'+1)^{2}+('+RT('3')+'-1)^{2}','('+RT('3')+'-1)('+RT('3')+'+1)')+'='+FR('8','2')+'=4')+'.'),
      S('चरण 3: सर्वसमिका लगाएँ','अब '+K(POW('x','2')+'+'+POW('y','2')+'=(x+y)^{2}-2xy='+POW('4','2')+'-2=14')+', अतः मान '+K(BOX('14'))+'.')
    ],'व्युत्क्रम युग्म पर '+K(POW('x','2')+'+'+POW('y','2')+'=(x+y)^{2}-2')+' लगाएँ क्योंकि '+K('xy=1')+'.','व्युत्क्रमों का गुणनफल 1 होता है, फिर सर्वसमिका लगाएँ।')
  ));

  H.set('sq_pyq_02', sol(
    L([
      S('Step 1: Take the square root','Since '+K(POW('36','2')+'=1296')+', we get '+K(RT('1296')+'=36')+'.'),
      S('Step 2: Take the cube root','Since '+K(POW('12','3')+'=1728')+', we get '+K(CRT('1728')+'=12')+'.'),
      S('Step 3: Add them','So '+K('36+12='+BOX('48'))+'.')
    ],'Know squares to 40 and cubes to 20 and both roots are instant.','1296 is a perfect square and 1728 a perfect cube.'),
    L([
      S('Step 1: Square root lo','Kyunki '+K(POW('36','2')+'=1296')+', '+K(RT('1296')+'=36')+'.'),
      S('Step 2: Cube root lo','Kyunki '+K(POW('12','3')+'=1728')+', '+K(CRT('1728')+'=12')+'.'),
      S('Step 3: Jodo','To '+K('36+12='+BOX('48'))+'.')
    ],'Squares 40 tak aur cubes 20 tak yaad rakho, dono root turant.','1296 perfect square hai, 1728 perfect cube.'),
    L([
      S('चरण 1: वर्गमूल लें','चूँकि '+K(POW('36','2')+'=1296')+', '+K(RT('1296')+'=36')+'.'),
      S('चरण 2: घनमूल लें','चूँकि '+K(POW('12','3')+'=1728')+', '+K(CRT('1728')+'=12')+'.'),
      S('चरण 3: जोड़ें','अतः '+K('36+12='+BOX('48'))+'.')
    ],'40 तक वर्ग और 20 तक घन याद रखें, दोनों मूल तुरंत।','1296 पूर्ण वर्ग है, 1728 पूर्ण घन।')
  ));

  H.set('sq_pyq_03', sol(
    L([
      S('Step 1: Isolate the root','Move every term that is not under the square root to the other side, so only the radical stands alone.'),
      S('Step 2: Square both sides','Squaring removes the square root and leaves a simple equation in the unknown.'),
      S('Step 3: Solve','Solving that equation gives '+K(BOX('4'))+'.')
    ],'Radical equation: isolate the root first, then square once.','Get the root alone, then square both sides.'),
    L([
      S('Step 1: Root ko alag karo','Jo bhi term root ke bahar hai use doosri taraf le jao, sirf radical bache.'),
      S('Step 2: Dono taraf square karo','Square karne se root hat jaata hai aur simple equation milti hai.'),
      S('Step 3: Solve karo','Us equation ko solve karne par '+K(BOX('4'))+'.')
    ],'Radical equation: pehle root alag, fir ek baar square.','Root ko alag karo, fir dono taraf square karo.'),
    L([
      S('चरण 1: मूल को अलग करें','मूल के बाहर के सभी पदों को दूसरी ओर ले जाएँ, केवल मूल बचे।'),
      S('चरण 2: दोनों ओर वर्ग करें','वर्ग करने से मूल हट जाता है और सरल समीकरण बचती है।'),
      S('चरण 3: हल करें','उसे हल करने पर '+K(BOX('4'))+'.')
    ],'मूल समीकरण: पहले मूल अलग करें, फिर एक बार वर्ग।','मूल को अलग करें, फिर दोनों ओर वर्ग करें।')
  ));

  H.set('sq_pyq_04', sol(
    L([
      S('Step 1: Simplify the first bracket','Pull out '+K(RT('7'))+': '+K(RT('63')+'=3'+RT('7'))+' and '+K(RT('252')+'=6'+RT('7'))+', so the sum is '+K('3'+RT('7')+'+6'+RT('7')+'=9'+RT('7'))+'.'),
      S('Step 2: Simplify the second bracket','Again '+K(RT('175')+'=5'+RT('7'))+' and '+K(RT('28')+'=2'+RT('7'))+', so the sum is '+K('5'+RT('7')+'+2'+RT('7')+'=7'+RT('7'))+'.'),
      S('Step 3: Multiply','Now '+K('9'+RT('7')+T+'7'+RT('7')+'=63'+T+'7='+BOX('441'))+'.')
    ],'Take '+K(RT('7'))+' common from every term before multiplying.','Write each root in the form '+K('a'+RT('7'))+'.'),
    L([
      S('Step 1: Pehla bracket simplify karo',K(RT('7'))+' bahar nikaalo: '+K(RT('63')+'=3'+RT('7'))+', '+K(RT('252')+'=6'+RT('7'))+', sum '+K('3'+RT('7')+'+6'+RT('7')+'=9'+RT('7'))+'.'),
      S('Step 2: Doosra bracket simplify karo',K(RT('175')+'=5'+RT('7'))+', '+K(RT('28')+'=2'+RT('7'))+', sum '+K('5'+RT('7')+'+2'+RT('7')+'=7'+RT('7'))+'.'),
      S('Step 3: Multiply karo',K('9'+RT('7')+T+'7'+RT('7')+'=63'+T+'7='+BOX('441'))+'.')
    ],'Multiply se pehle har term se '+K(RT('7'))+' common lo.','Har root ko '+K('a'+RT('7'))+' form mein likho.'),
    L([
      S('चरण 1: पहला कोष्ठक सरल करें',K(RT('7'))+' बाहर निकालें: '+K(RT('63')+'=3'+RT('7'))+', '+K(RT('252')+'=6'+RT('7'))+', योग '+K('3'+RT('7')+'+6'+RT('7')+'=9'+RT('7'))+'.'),
      S('चरण 2: दूसरा कोष्ठक सरल करें',K(RT('175')+'=5'+RT('7'))+', '+K(RT('28')+'=2'+RT('7'))+', योग '+K('5'+RT('7')+'+2'+RT('7')+'=7'+RT('7'))+'.'),
      S('चरण 3: गुणा करें',K('9'+RT('7')+T+'7'+RT('7')+'=63'+T+'7='+BOX('441'))+'.')
    ],'गुणा से पहले हर पद से '+K(RT('7'))+' उभयनिष्ठ लें।','हर मूल को '+K('a'+RT('7'))+' रूप में लिखें।')
  ));
})();
