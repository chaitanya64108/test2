/* PYQ solutions 17 of N — sq_pyq_35,36,47,49 */
(function(){
  var H=window.PYQH; if(!H) return;
  var K=H.K,RT=H.RT,CRT=H.CRT,FR=H.FR,BOX=H.BOX,POW=H.POW,S=H.S,L=H.L,sol=H.sol,T=H.TIMES,AP=H.AP;

  H.set('sq_pyq_35', sol(
    L([
      S('Step 1: Simplify each term','With '+K(RT('5')+'=2.236')+', '+K(FR('10',RT('5'))+'=2'+RT('5'))+' and '+K(RT('125')+'=5'+RT('5'))+'.'),
      S('Step 2: Collect the surd',K(FR(RT('5'),'2')+'-2'+RT('5')+'+5'+RT('5')+'='+FR('7','2')+RT('5'))+'.'),
      S('Step 3: Put the value',K(FR('7','2')+T+'2.236='+BOX('7.826'))+'.')
    ],'Collect all the '+K(RT('5'))+' terms first, then multiply by 2.236 once.','Turn every term into multiples of root five, add the coefficients, then multiply by 2.236.'),
    L([
      S('Step 1: Har term simplify karo','Diya hai '+K(RT('5')+'=2.236')+'; '+K(FR('10',RT('5'))+'=2'+RT('5'))+' aur '+K(RT('125')+'=5'+RT('5'))+'.'),
      S('Step 2: Surd ikattha karo',K(FR(RT('5'),'2')+'-2'+RT('5')+'+5'+RT('5')+'='+FR('7','2')+RT('5'))+'.'),
      S('Step 3: Value rakho',K(FR('7','2')+T+'2.236='+BOX('7.826'))+'.')
    ],'Pehle saare '+K(RT('5'))+' wale terms jodo, fir ek hi baar 2.236 se multiply karo.','Har term ko root five ke multiple me badlo, coefficients jodo, fir 2.236 se guna karo.'),
    L([
      S('चरण 1: हर पद सरल करें','दिया है '+K(RT('5')+'=2.236')+'; '+K(FR('10',RT('5'))+'=2'+RT('5'))+' और '+K(RT('125')+'=5'+RT('5'))+'.'),
      S('चरण 2: करणी इकट्ठा करें',K(FR(RT('5'),'2')+'-2'+RT('5')+'+5'+RT('5')+'='+FR('7','2')+RT('5'))+'.'),
      S('चरण 3: मान रखें',K(FR('7','2')+T+'2.236='+BOX('7.826'))+'.')
    ],'पहले सारे '+K(RT('5'))+' वाले पद जोड़ें, फिर एक ही बार 2.236 से गुणा करें.','हर पद को root five के गुणज में बदलें, गुणांक जोड़ें, फिर 2.236 से गुणा करें.')
  ));

  H.set('sq_pyq_36', sol(
    L([
      S('Step 1: Take each root',K(RT('5041')+'=71')+' and '+K(CRT('729')+'=9')+'.'),
      S('Step 2: Multiply',K('71'+T+'9='+BOX('639'))+'.')
    ],'Evaluate each root separately, then multiply.','Square root of 5041 is 71 and cube root of 729 is 9; multiply them.'),
    L([
      S('Step 1: Dono root nikaalo',K(RT('5041')+'=71')+' aur '+K(CRT('729')+'=9')+'.'),
      S('Step 2: Multiply',K('71'+T+'9='+BOX('639'))+'.')
    ],'Har root alag se nikaalo, fir multiply karo.','5041 ka square root 71 aur 729 ka cube root 9 hota hai; inhe multiply karo.'),
    L([
      S('चरण 1: दोनों मूल निकालें',K(RT('5041')+'=71')+' और '+K(CRT('729')+'=9')+'.'),
      S('चरण 2: गुणा करें',K('71'+T+'9='+BOX('639'))+'.')
    ],'हर मूल अलग से निकालें, फिर गुणा करें.','5041 का वर्गमूल 71 और 729 का घनमूल 9 होता है; इन्हें गुणा करें.')
  ));

  H.set('sq_pyq_47', sol(
    L([
      S('Step 1: The percentage part','17.32% of 190 is '+K('0.1732'+T+'190'+AP+'32.9')+'.'),
      S('Step 2: The cube root part',K(CRT('26.881')+AP+'3')+' since '+K(POW('3','3')+'=27')+'.'),
      S('Step 3: Subtract',K('32.9-3'+AP+'29.9')+', and the nearest listed value is '+K(BOX('29.3'))+'.')
    ],'Round the cube root to a whole number and the percentage to one decimal.','Take about 17.32 percent of 190, subtract the cube root of 26.881 which is near 3, then pick the closest option.'),
    L([
      S('Step 1: Percentage wala part','190 ka 17.32% = '+K('0.1732'+T+'190'+AP+'32.9')+'.'),
      S('Step 2: Cube root wala part',K(CRT('26.881')+AP+'3')+' kyunki '+K(POW('3','3')+'=27')+'.'),
      S('Step 3: Ghatao',K('32.9-3'+AP+'29.9')+', aur sabse paas wali value '+K(BOX('29.3'))+' hai.')
    ],'Cube root ko whole number me aur percentage ko ek decimal tak round karo.','190 ka lagbhag 17.32% lo, 26.881 ka cube root (jo 3 ke paas hai) ghatao, fir sabse paas wala option chuno.'),
    L([
      S('चरण 1: प्रतिशत वाला भाग','190 का 17.32% = '+K('0.1732'+T+'190'+AP+'32.9')+'.'),
      S('चरण 2: घनमूल वाला भाग',K(CRT('26.881')+AP+'3')+' क्योंकि '+K(POW('3','3')+'=27')+'.'),
      S('चरण 3: घटाएं',K('32.9-3'+AP+'29.9')+', और सबसे पास वाला मान '+K(BOX('29.3'))+' है.')
    ],'घनमूल को पूर्ण संख्या और प्रतिशत को एक दशमलव तक पूर्णांकित करें.','190 का लगभग 17.32% लें, 26.881 का घनमूल (जो 3 के पास है) घटाएं, फिर सबसे पास वाला विकल्प चुनें.')
  ));

  H.set('sq_pyq_49', sol(
    L([
      S('Step 1: Recognise the cube',K('50653='+POW('37','3'))+'.'),
      S('Step 2: Take the cube root',K(CRT('50653')+'='+BOX('37'))+'.')
    ],'Recall '+K(POW('37','3')+'=50653')+'.','37 cubed is 50653.'),
    L([
      S('Step 1: Cube pehchaano',K('50653='+POW('37','3'))+'.'),
      S('Step 2: Cube root lo',K(CRT('50653')+'='+BOX('37'))+'.')
    ],K(POW('37','3')+'=50653')+' yaad rakho.','37 ka cube 50653 hota hai.'),
    L([
      S('चरण 1: घन पहचानें',K('50653='+POW('37','3'))+'.'),
      S('चरण 2: घनमूल लें',K(CRT('50653')+'='+BOX('37'))+'.')
    ],K(POW('37','3')+'=50653')+' याद रखें.','37 का घन 50653 होता है.')
  ));
})();
