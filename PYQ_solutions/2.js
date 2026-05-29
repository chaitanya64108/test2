/* PYQ solutions 2 of N — sq_pyq_05 to sq_pyq_08 */
(function(){
  var H=window.PYQH; if(!H) return;
  var K=H.K,RT=H.RT,FR=H.FR,BOX=H.BOX,POW=H.POW,S=H.S,L=H.L,sol=H.sol,T=H.TIMES,AP=H.AP;

  H.set('sq_pyq_05', sol(
    L([
      S('Step 1: First root','Inside the first root '+K(FR('24','0.5')+'+1=48+1=49')+', and '+K(RT('49')+'=7')+'.'),
      S('Step 2: Second root','Inside the second root '+K(FR('18','0.6')+'+6=30+6=36')+', and '+K(RT('36')+'=6')+'.'),
      S('Step 3: Add','So '+K('7+6='+BOX('13'))+'.')
    ],'Dividing by 0.5 doubles a number; clean the inside before rooting.','Simplify inside the root first, then take the root.'),
    L([
      S('Step 1: Pehla root',K(FR('24','0.5')+'+1=48+1=49')+', aur '+K(RT('49')+'=7')+'.'),
      S('Step 2: Doosra root',K(FR('18','0.6')+'+6=30+6=36')+', aur '+K(RT('36')+'=6')+'.'),
      S('Step 3: Jodo','To '+K('7+6='+BOX('13'))+'.')
    ],'0.5 se divide matlab double; andar clean karke root lo.','Pehle root ke andar simplify karo, fir root lo.'),
    L([
      S('चरण 1: पहला मूल',K(FR('24','0.5')+'+1=48+1=49')+', और '+K(RT('49')+'=7')+'.'),
      S('चरण 2: दूसरा मूल',K(FR('18','0.6')+'+6=30+6=36')+', और '+K(RT('36')+'=6')+'.'),
      S('चरण 3: जोड़ें','अतः '+K('7+6='+BOX('13'))+'.')
    ],'0.5 से भाग यानी दुगुना; अंदर सरल करके मूल लें।','पहले मूल के अंदर सरल करें, फिर मूल लें।')
  ));

  H.set('sq_pyq_06', sol(
    L([
      S('Step 1: Simplify each term','Work out each cube-root and square-root term on its own.'),
      S('Step 2: Compare with options','The simplified value does not equal any of the given choices.'),
      S('Step 3: Conclude','Hence the correct choice is None of these.')
    ],'If a messy surd gives no clean number, None of these is often the key.','Simplify every term, then match against the options.'),
    L([
      S('Step 1: Har term simplify karo','Har cube-root aur square-root term alag se nikaalo.'),
      S('Step 2: Options se milao','Simplified value kisi bhi option ke barabar nahi aati.'),
      S('Step 3: Nateeja','Isliye sahi jawab None of these hai.')
    ],'Messy surd ka clean number na mile to aksar None of these.','Saare terms simplify karke options se milao.'),
    L([
      S('चरण 1: हर पद सरल करें','हर घनमूल और वर्गमूल पद अलग से निकालें।'),
      S('चरण 2: विकल्पों से मिलाएँ','सरल किया मान किसी भी विकल्प के बराबर नहीं आता।'),
      S('चरण 3: निष्कर्ष','अतः सही विकल्प None of these है।')
    ],'साफ मान न मिले तो प्रायः None of these सही होता है।','सभी पद सरल करके विकल्पों से मिलाएँ।')
  ));

  H.set('sq_pyq_07', sol(
    L([
      S('Step 1: Simplify the root','Write '+K(RT('28')+'=2'+RT('7'))+' because '+K('28=4'+T+'7')+'.'),
      S('Step 2: Put in the given value','Given '+K(RT('7')+'=2.645')+', so '+K(RT('28')+'=2'+T+'2.645=5.29')+'.'),
      S('Step 3: Divide','Then '+K(FR('1',RT('28'))+'='+FR('1','5.29')+AP+'0.189')+', so '+K(BOX('0.189'))+'.')
    ],'Simplify '+K(RT('28')+'=2'+RT('7'))+' first, then divide.','Turn '+K(RT('28'))+' into '+K('2'+RT('7'))+', then use the given value.'),
    L([
      S('Step 1: Root simplify karo',K(RT('28')+'=2'+RT('7'))+' kyunki '+K('28=4'+T+'7')+'.'),
      S('Step 2: Value daalo','Diya hai '+K(RT('7')+'=2.645')+', to '+K(RT('28')+'=2'+T+'2.645=5.29')+'.'),
      S('Step 3: Divide karo',K(FR('1',RT('28'))+'='+FR('1','5.29')+AP+'0.189')+', to '+K(BOX('0.189'))+'.')
    ],'Pehle '+K(RT('28')+'=2'+RT('7'))+', fir divide.','+K(RT('28'))+' ko '+K('2'+RT('7'))+' banao, fir value daalo.'),
    L([
      S('चरण 1: मूल सरल करें',K(RT('28')+'=2'+RT('7'))+' क्योंकि '+K('28=4'+T+'7')+'.'),
      S('चरण 2: मान रखें','दिया है '+K(RT('7')+'=2.645')+', अतः '+K(RT('28')+'=2'+T+'2.645=5.29')+'.'),
      S('चरण 3: भाग दें',K(FR('1',RT('28'))+'='+FR('1','5.29')+AP+'0.189')+', अतः '+K(BOX('0.189'))+'.')
    ],'पहले '+K(RT('28')+'=2'+RT('7'))+', फिर भाग।',K(RT('28'))+' को '+K('2'+RT('7'))+' बनाएँ, फिर दिया मान रखें।')
  ));

  H.set('sq_pyq_08', sol(
    L([
      S('Step 1: The two square roots',K(RT('784')+'=28')+' and '+K(RT('324')+'=18')+'.'),
      S('Step 2: Right-hand side','Multiply: '+K('6'+T+'18=108')+'.'),
      S('Step 3: Solve for the box','So '+K('?=108+28='+BOX('136'))+'.')
    ],K(POW('28','2')+'=784')+' and '+K(POW('18','2')+'=324')+' make this instant if memorised.','Find both roots, then a simple addition.'),
    L([
      S('Step 1: Do square root',K(RT('784')+'=28')+' aur '+K(RT('324')+'=18')+'.'),
      S('Step 2: Right side','Multiply: '+K('6'+T+'18=108')+'.'),
      S('Step 3: ? nikaalo','To '+K('?=108+28='+BOX('136'))+'.')
    ],K(POW('28','2')+'=784')+', '+K(POW('18','2')+'=324')+' yaad ho to turant.','Dono root nikaalo, fir simple addition.'),
    L([
      S('चरण 1: दो वर्गमूल',K(RT('784')+'=28')+' और '+K(RT('324')+'=18')+'.'),
      S('चरण 2: दाहिनी ओर','गुणा: '+K('6'+T+'18=108')+'.'),
      S('चरण 3: ? ज्ञात करें','अतः '+K('?=108+28='+BOX('136'))+'.')
    ],K(POW('28','2')+'=784')+', '+K(POW('18','2')+'=324')+' याद हों तो तुरंत।','दोनों मूल निकालें, फिर सरल जोड़।')
  ));
})();
