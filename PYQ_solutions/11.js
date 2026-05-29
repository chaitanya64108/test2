/* PYQ solutions 11 of N — sq_pyq_41,42,43,45 */
(function(){
  var H=window.PYQH; if(!H) return;
  var K=H.K,RT=H.RT,CRT=H.CRT,FR=H.FR,BOX=H.BOX,POW=H.POW,S=H.S,L=H.L,sol=H.sol,T=H.TIMES,AP=H.AP;

  H.set('sq_pyq_41', sol(
    L([
      S('Step 1: Write as a fraction',K('1.5625='+FR('15625','10000'))+'.'),
      S('Step 2: Root top and bottom',K(RT('15625')+'=125')+' and '+K(RT('10000')+'=100')+'.'),
      S('Step 3: Divide',K(RT('1.5625')+'='+FR('125','100')+'='+BOX('1.25'))+'.')
    ],'Recall '+K(POW('1.25','2')+'=1.5625')+'.','1.25 squared is 1.5625.'),
    L([
      S('Step 1: Fraction me likho',K('1.5625='+FR('15625','10000'))+'.'),
      S('Step 2: Upar-neeche root',K(RT('15625')+'=125')+', '+K(RT('10000')+'=100')+'.'),
      S('Step 3: Divide',K(RT('1.5625')+'='+FR('125','100')+'='+BOX('1.25'))+'.')
    ],K(POW('1.25','2')+'=1.5625')+' yaad rakho.','1.25 ka square 1.5625 hota hai.'),
    L([
      S('चरण 1: भिन्न में लिखें',K('1.5625='+FR('15625','10000'))+'.'),
      S('चरण 2: ऊपर-नीचे मूल',K(RT('15625')+'=125')+', '+K(RT('10000')+'=100')+'.'),
      S('चरण 3: भाग दें',K(RT('1.5625')+'='+FR('125','100')+'='+BOX('1.25'))+'.')
    ],K(POW('1.25','2')+'=1.5625')+' याद रखें.','1.25 का वर्ग 1.5625 होता है.')
  ));

  H.set('sq_pyq_42', sol(
    L([
      S('Step 1: Prime factorise',K('1470=2'+T+'3'+T+'5'+T+POW('7','2'))+'.'),
      S('Step 2: Spot the unpaired primes','The primes '+K('2, 3, 5')+' each appear once, so divide them out.'),
      S('Step 3: The divisor',K('2'+T+'3'+T+'5='+BOX('30'))+', leaving '+K(POW('7','2')+'=49')+'.')
    ],'Divide out every prime that has an odd power.','Jo primes akele hain unka product hi divisor hai.'),
    L([
      S('Step 1: Prime factor',K('1470=2'+T+'3'+T+'5'+T+POW('7','2'))+'.'),
      S('Step 2: Akele primes dhoondo',K('2, 3, 5')+' ek-ek baar aate hain, inhe divide karo.'),
      S('Step 3: Divisor',K('2'+T+'3'+T+'5='+BOX('30'))+', bachta hai '+K(POW('7','2')+'=49')+'.')
    ],'Har vishm-power prime ko divide kar do.','Jo primes akele hain unka product hi divisor hai.'),
    L([
      S('चरण 1: अभाज्य गुणनखंड',K('1470=2'+T+'3'+T+'5'+T+POW('7','2'))+'.'),
      S('चरण 2: अकेले अभाज्य पहचानें',K('2, 3, 5')+' एक-एक बार आते हैं, इन्हें भाग दें.'),
      S('चरण 3: भाजक',K('2'+T+'3'+T+'5='+BOX('30'))+', बचता है '+K(POW('7','2')+'=49')+'.')
    ],'हर विषम-घात अभाज्य को भाग दें.','जो अभाज्य अकेले हैं उनका गुणनफल ही भाजक है.')
  ));

  H.set('sq_pyq_43', sol(
    L([
      S('Step 1: Prime factorise',K('294=2'+T+'3'+T+POW('7','2'))+'.'),
      S('Step 2: Pair the primes','The primes '+K('2')+' and '+K('3')+' are unpaired, so multiply by '+K('2'+T+'3')+'.'),
      S('Step 3: The multiplier',K('2'+T+'3='+BOX('6'))+', giving '+K(POW('42','2')+'=1764')+'.')
    ],'Multiply by every prime that has an odd power.','Jo primes akele hain unka product multiply karo.'),
    L([
      S('Step 1: Prime factor',K('294=2'+T+'3'+T+POW('7','2'))+'.'),
      S('Step 2: Primes jodo',K('2')+' aur '+K('3')+' akele hain, '+K('2'+T+'3')+' se multiply.'),
      S('Step 3: Multiplier',K('2'+T+'3='+BOX('6'))+', milta hai '+K(POW('42','2')+'=1764')+'.')
    ],'Har vishm-power prime se multiply karo.','Jo primes akele hain unka product multiply karo.'),
    L([
      S('चरण 1: अभाज्य गुणनखंड',K('294=2'+T+'3'+T+POW('7','2'))+'.'),
      S('चरण 2: अभाज्य जोड़ें','अभाज्य '+K('2')+' और '+K('3')+' अकेले हैं, '+K('2'+T+'3')+' से गुणा करें.'),
      S('चरण 3: गुणक',K('2'+T+'3='+BOX('6'))+', मिलता है '+K(POW('42','2')+'=1764')+'.')
    ],'हर विषम-घात अभाज्य से गुणा करें.','जो अभाज्य अकेले हैं उनका गुणनफल गुणा करें.')
  ));

  H.set('sq_pyq_45', sol(
    L([
      S('Step 1: Prime factorise',K('600='+POW('2','3')+T+'3'+T+POW('5','2'))+'.'),
      S('Step 2: Find the odd powers','Here '+K('2')+' has power 3 and '+K('3')+' has power 1, both odd, so multiply by '+K('2'+T+'3')+'.'),
      S('Step 3: The multiplier',K('2'+T+'3='+BOX('6'))+', giving '+K(POW('60','2')+'=3600')+'.')
    ],'Multiply by each prime whose power is odd.','Vishm power waale primes ka product multiply karo.'),
    L([
      S('Step 1: Prime factor',K('600='+POW('2','3')+T+'3'+T+POW('5','2'))+'.'),
      S('Step 2: Vishm power dhoondo',K('2')+' ki power 3 aur '+K('3')+' ki power 1, dono vishm, '+K('2'+T+'3')+' se multiply.'),
      S('Step 3: Multiplier',K('2'+T+'3='+BOX('6'))+', milta hai '+K(POW('60','2')+'=3600')+'.')
    ],'Har vishm-power prime se multiply karo.','Vishm power waale primes ka product multiply karo.'),
    L([
      S('चरण 1: अभाज्य गुणनखंड',K('600='+POW('2','3')+T+'3'+T+POW('5','2'))+'.'),
      S('चरण 2: विषम घात पहचानें',K('2')+' की घात 3 और '+K('3')+' की घात 1, दोनों विषम, '+K('2'+T+'3')+' से गुणा करें.'),
      S('चरण 3: गुणक',K('2'+T+'3='+BOX('6'))+', मिलता है '+K(POW('60','2')+'=3600')+'.')
    ],'हर विषम-घात अभाज्य से गुणा करें.','विषम घात वाले अभाज्य का गुणनफल गुणा करें.')
  ));
})();
