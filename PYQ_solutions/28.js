/* PYQ solutions 28 of N — sq_pyq_104,105,106,107 */
(function(){
  var H=window.PYQH; if(!H) return;
  var K=H.K,RT=H.RT,CRT=H.CRT,FR=H.FR,BOX=H.BOX,POW=H.POW,S=H.S,L=H.L,sol=H.sol,T=H.TIMES,D=H.DIV,AP=H.AP;

  H.set('sq_pyq_104', sol(
    L([
      S('Step 1: Recognise the square',K(POW('8.6','2')+'=73.96')+'.'),
      S('Step 2: Take the root',K(RT('73.96')+'='+BOX('8.6'))+'.')
    ],'Place the decimal so the square matches.','8.6 squared is 73.96, so the root is 8.6.'),
    L([
      S('Step 1: Square pehchaano',K(POW('8.6','2')+'=73.96')+'.'),
      S('Step 2: Root lo',K(RT('73.96')+'='+BOX('8.6'))+'.')
    ],'Decimal aise rakho ki square match kare.','8.6 ka square 73.96 hai, to root 8.6.'),
    L([
      S('चरण 1: वर्ग पहचानें',K(POW('8.6','2')+'=73.96')+'.'),
      S('चरण 2: मूल लें',K(RT('73.96')+'='+BOX('8.6'))+'.')
    ],'दशमलव ऐसे रखें कि वर्ग मेल खाए.','8.6 का वर्ग 73.96 है, तो मूल 8.6.')
  ));

  H.set('sq_pyq_105', sol(
    L([
      S('Step 1: Count how often each value repeats',K('1')+' for n=1 to 3 (3 times), '+K('2')+' for n=4 to 8 (5 times), '+K('3')+' for n=9 to 15 (7 times), '+K('4')+' for n=16 to 24 (9 times).'),
      S('Step 2: Continue the blocks',K('5')+' for n=25 to 35 (11 times), '+K('6')+' for n=36 to 48 (13 times), '+K('7')+' for n=49 to 50 (2 times).'),
      S('Step 3: Multiply and add',K('3+10+21+36+55+78+14='+BOX('217'))+'.')
    ],'The floor of the root is constant between consecutive squares; count each block.','Between consecutive squares the floor of the root stays constant; add each block to get 217.'),
    L([
      S('Step 1: Har value kitni baar repeat hoti hai',K('1')+' n=1 to 3 (3 baar), '+K('2')+' n=4 to 8 (5 baar), '+K('3')+' n=9 to 15 (7 baar), '+K('4')+' n=16 to 24 (9 baar).'),
      S('Step 2: Blocks aage badhao',K('5')+' n=25 to 35 (11 baar), '+K('6')+' n=36 to 48 (13 baar), '+K('7')+' n=49 to 50 (2 baar).'),
      S('Step 3: Multiply aur jodo',K('3+10+21+36+55+78+14='+BOX('217'))+'.')
    ],'Lagatar squares ke beech root ka floor constant; har block count karo.','Do lagatar squares ke beech root ka floor constant rehta hai; har block jodkar 217.'),
    L([
      S('चरण 1: प्रत्येक मान कितनी बार आता है',K('1')+' n=1 से 3 (3 बार), '+K('2')+' n=4 से 8 (5 बार), '+K('3')+' n=9 से 15 (7 बार), '+K('4')+' n=16 से 24 (9 बार).'),
      S('चरण 2: ब्लॉक आगे बढ़ाएं',K('5')+' n=25 से 35 (11 बार), '+K('6')+' n=36 से 48 (13 बार), '+K('7')+' n=49 से 50 (2 बार).'),
      S('चरण 3: गुणा करके जोड़ें',K('3+10+21+36+55+78+14='+BOX('217'))+'.')
    ],'लगातार वर्गों के बीच मूल का फ़्लोर स्थिर रहता है; हर ब्लॉक गिनें.','दो लगातार वर्गों के बीच मूल का फ़्लोर स्थिर रहता है; हर ब्लॉक जोड़कर 217.')
  ));

  H.set('sq_pyq_106', sol(
    L([
      S('Step 1: Write it as a perfect square',K('('+RT('20')+'-3)^{2}=29-12'+RT('5'))+'.'),
      S('Step 2: Take the square root',K(RT('29-12'+RT('5'))+'='+RT('20')+'-3')+'.'),
      S('Step 3: Match the form','Here '+K('a=-3')+', '+K('b=1')+', '+K('n=20')+', so '+K('a+b+n=-3+1+20='+BOX('18'))+'.')
    ],'Express the surd as (root-p minus q) squared, then read off a, b and n.','Write 29 minus 12 root5 as (root20 minus 3) squared; then a plus b plus n is minus 3 plus 1 plus 20, which is 18.'),
    L([
      S('Step 1: Perfect square ke roop me likho',K('('+RT('20')+'-3)^{2}=29-12'+RT('5'))+'.'),
      S('Step 2: Square root lo',K(RT('29-12'+RT('5'))+'='+RT('20')+'-3')+'.'),
      S('Step 3: Form match karo','Yahan '+K('a=-3')+', '+K('b=1')+', '+K('n=20')+', to '+K('a+b+n=-3+1+20='+BOX('18'))+'.')
    ],'Surd ko (root-p minus q) ka square banao, fir a, b, n padho.','29 minus 12 root5 ko (root20 minus 3) ka square likho; fir a plus b plus n hota hai minus 3 plus 1 plus 20, yaani 18.'),
    L([
      S('चरण 1: पूर्ण वर्ग के रूप में लिखें',K('('+RT('20')+'-3)^{2}=29-12'+RT('5'))+'.'),
      S('चरण 2: वर्गमूल लें',K(RT('29-12'+RT('5'))+'='+RT('20')+'-3')+'.'),
      S('चरण 3: रूप मिलाएं','यहाँ '+K('a=-3')+', '+K('b=1')+', '+K('n=20')+', तो '+K('a+b+n=-3+1+20='+BOX('18'))+'.')
    ],'सर्ड को (रूट-p माइनस q) का वर्ग बनाएं, फिर a, b, n पढ़ें.','29 माइनस 12 रूट5 को (रूट20 माइनस 3) का वर्ग लिखें; फिर a जोड़ b जोड़ n होता है माइनस 3 जोड़ 1 जोड़ 20, यानी 18.')
  ));

  H.set('sq_pyq_107', sol(
    L([
      S('Step 1: Sum and pairwise product','The three cube roots of -8 are roots of '+K('x^{3}+8=0')+', so '+K('a+b+c=0')+' and '+K('ab+bc+ca=0')+'.'),
      S('Step 2: Sum of squares',K('a^{2}+b^{2}+c^{2}=(a+b+c)^{2}-2(ab+bc+ca)=0')+'.'),
      S('Step 3: Add the two parts',K('(a^{2}+b^{2}+c^{2})+(ab+bc+ca)=0+0='+BOX('0'))+'.')
    ],'For roots of '+K('x^{3}+8=0')+', the sum and pairwise-product sums are both zero.','Both the sum of squares and the sum of pairwise products are zero, so the expression equals 0.'),
    L([
      S('Step 1: Sum aur pairwise product','-8 ke cube roots '+K('x^{3}+8=0')+' ko satisfy karte hain, to '+K('a+b+c=0')+' aur '+K('ab+bc+ca=0')+'.'),
      S('Step 2: Vargon ka sum',K('a^{2}+b^{2}+c^{2}=(a+b+c)^{2}-2(ab+bc+ca)=0')+'.'),
      S('Step 3: Dono parts jodo',K('(a^{2}+b^{2}+c^{2})+(ab+bc+ca)=0+0='+BOX('0'))+'.')
    ],K('x^{3}+8=0')+' ke roots ke liye sum aur pairwise-product dono zero.','Squares ka sum aur pairwise products ka sum dono zero, to expression 0.'),
    L([
      S('चरण 1: योग और युग्म गुणनफल','-8 के घनमूल '+K('x^{3}+8=0')+' को संतुष्ट करते हैं, तो '+K('a+b+c=0')+' और '+K('ab+bc+ca=0')+'.'),
      S('चरण 2: वर्गों का योग',K('a^{2}+b^{2}+c^{2}=(a+b+c)^{2}-2(ab+bc+ca)=0')+'.'),
      S('चरण 3: दोनों भाग जोड़ें',K('(a^{2}+b^{2}+c^{2})+(ab+bc+ca)=0+0='+BOX('0'))+'.')
    ],K('x^{3}+8=0')+' के मूलों के लिए योग और युग्म-गुणनफल दोनों शून्य.','वर्गों का योग और युग्म गुणनफलों का योग दोनों शून्य, तो व्यंजक 0.')
  ));
})();
