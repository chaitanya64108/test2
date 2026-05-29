/* PYQ solutions 9 of N — sq_pyq_33, sq_pyq_34 */
(function(){
  var H=window.PYQH; if(!H) return;
  var K=H.K,RT=H.RT,CRT=H.CRT,FR=H.FR,BOX=H.BOX,POW=H.POW,S=H.S,L=H.L,sol=H.sol,T=H.TIMES,AP=H.AP;

  H.set('sq_pyq_33', sol(
    L([
      S('Step 1: Write as a fraction',K('0.16='+FR('16','100'))+'.'),
      S('Step 2: Roots of top and bottom',K(RT('16')+'=4')+' and '+K(RT('100')+'=10')+'.'),
      S('Step 3: Divide',K(RT('0.16')+'='+FR('4','10')+'='+BOX('0.4'))+'.')
    ],'An even number of decimals halves under a square root.','root 16 = 4, root 100 = 10, so root 0.16 = 0.4.'),
    L([
      S('Step 1: Fraction me likho',K('0.16='+FR('16','100'))+'.'),
      S('Step 2: Upar-neeche ka root',K(RT('16')+'=4')+', '+K(RT('100')+'=10')+'.'),
      S('Step 3: Divide',K(RT('0.16')+'='+FR('4','10')+'='+BOX('0.4'))+'.')
    ],'Square root me do decimal se ek decimal ban jaata hai.','root 16 = 4, root 100 = 10, to root 0.16 = 0.4.'),
    L([
      S('चरण 1: भिन्न में लिखें',K('0.16='+FR('16','100'))+'.'),
      S('चरण 2: ऊपर-नीचे का मूल',K(RT('16')+'=4')+', '+K(RT('100')+'=10')+'.'),
      S('चरण 3: भाग दें',K(RT('0.16')+'='+FR('4','10')+'='+BOX('0.4'))+'.')
    ],'वर्गमूल में दो दशमलव से एक दशमलव बनता है.','मूल 16 = 4, मूल 100 = 10, तो मूल 0.16 = 0.4.')
  ));

  H.set('sq_pyq_34', sol(
    L([
      S('Step 1: Express the base as a power',K('243='+POW('3','5'))+'.'),
      S('Step 2: Apply the index','Reading it as '+K(POW('243','3/5'))+', multiply the exponents: '+K(POW('('+POW('3','5')+')','3/5')+'='+POW('3','3'))+'.'),
      S('Step 3: Simplify',K(POW('3','3')+'=27')+', so the value is '+K(BOX('27'))+'.')
    ],'Convert the base to a prime power, then multiply the exponents.','243 ko 3 ki power me likho, fir index ke niyam lagao.'),
    L([
      S('Step 1: Base ko power me likho',K('243='+POW('3','5'))+'.'),
      S('Step 2: Index lagao',K(POW('243','3/5'))+' padhkar exponents multiply: '+K(POW('('+POW('3','5')+')','3/5')+'='+POW('3','3'))+'.'),
      S('Step 3: Simplify',K(POW('3','3')+'=27')+', to value '+K(BOX('27'))+'.')
    ],'Base ko prime power banao, fir exponents multiply karo.','243 ko 3 ki power me likho, fir index niyam lagao.'),
    L([
      S('चरण 1: आधार को घात में लिखें',K('243='+POW('3','5'))+'.'),
      S('चरण 2: घातांक नियम',K(POW('243','3/5'))+' पढ़कर घातांक गुणा करें: '+K(POW('('+POW('3','5')+')','3/5')+'='+POW('3','3'))+'.'),
      S('चरण 3: सरल करें',K(POW('3','3')+'=27')+', अतः मान '+K(BOX('27'))+'.')
    ],'आधार को अभाज्य घात बनाएं, फिर घातांक गुणा करें.','243 को 3 की घात में लिखें, फिर घातांक नियम लगाएं.')
  ));
})();
