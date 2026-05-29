/* PYQ solutions 10 of N — sq_pyq_37 to sq_pyq_40 */
(function(){
  var H=window.PYQH; if(!H) return;
  var K=H.K,RT=H.RT,CRT=H.CRT,FR=H.FR,BOX=H.BOX,POW=H.POW,S=H.S,L=H.L,sol=H.sol,T=H.TIMES,AP=H.AP;

  H.set('sq_pyq_37', sol(
    L([
      S('Step 1: Prime factorise',K('750=2'+T+'3'+T+POW('5','3'))+'.'),
      S('Step 2: Make every power a multiple of 3','The primes '+K('2')+' and '+K('3')+' need to reach a power of three, so multiply by '+K(POW('2','2')+T+POW('3','2'))+'.'),
      S('Step 3: The multiplier',K(POW('2','2')+T+POW('3','2')+'=4'+T+'9='+BOX('36'))+'.')
    ],'For a perfect cube, every prime power must be a multiple of 3.','Har prime ki power ko 3 ke multiple tak laane ke liye multiply karo.'),
    L([
      S('Step 1: Prime factor',K('750=2'+T+'3'+T+POW('5','3'))+'.'),
      S('Step 2: Har power ko 3 ka multiple banao',K('2')+' aur '+K('3')+' ko power-of-three tak laao, '+K(POW('2','2')+T+POW('3','2'))+' se multiply.'),
      S('Step 3: Multiplier',K(POW('2','2')+T+POW('3','2')+'=4'+T+'9='+BOX('36'))+'.')
    ],'Perfect cube ke liye har prime power 3 ka multiple ho.','Har prime ki power 3 ke multiple tak laane ke liye multiply.'),
    L([
      S('चरण 1: अभाज्य गुणनखंड',K('750=2'+T+'3'+T+POW('5','3'))+'.'),
      S('चरण 2: हर घात को 3 का गुणज बनाएं',K('2')+' और '+K('3')+' को तीन की घात तक लाएं, '+K(POW('2','2')+T+POW('3','2'))+' से गुणा करें.'),
      S('चरण 3: गुणक',K(POW('2','2')+T+POW('3','2')+'=4'+T+'9='+BOX('36'))+'.')
    ],'पूर्ण घन के लिए हर अभाज्य की घात 3 का गुणज हो.','हर अभाज्य की घात को 3 के गुणज तक लाने के लिए गुणा करें.')
  ));

  H.set('sq_pyq_38', sol(
    L([
      S('Step 1: Read the power','A power of '+K('1.5')+' means cube the square root: '+K(POW('n','1.5')+'='+POW('('+RT('n')+')','3'))+'.'),
      S('Step 2: Square roots',K(RT('324')+'=18')+' and '+K(RT('256')+'=16')+'.'),
      S('Step 3: Cube each',K(POW('324','1.5')+'='+POW('18','3')+'=5832')+' and '+K(POW('256','1.5')+'='+POW('16','3')+'=4096')+'.'),
      S('Step 4: Divide',K(FR('5832','4096')+'='+BOX(FR('729','512')))+'.')
    ],'Power 1.5 equals the cube of the square root.','Power 1.5 ka matlab square root ko cube karna.'),
    L([
      S('Step 1: Power padho',K('1.5')+' power matlab square root ko cube: '+K(POW('n','1.5')+'='+POW('('+RT('n')+')','3'))+'.'),
      S('Step 2: Square roots',K(RT('324')+'=18')+', '+K(RT('256')+'=16')+'.'),
      S('Step 3: Cube karo',K(POW('18','3')+'=5832')+', '+K(POW('16','3')+'=4096')+'.'),
      S('Step 4: Divide',K(FR('5832','4096')+'='+BOX(FR('729','512')))+'.')
    ],'Power 1.5 = square root ka cube.','Power 1.5 ka matlab square root ko cube karna.'),
    L([
      S('चरण 1: घात पढ़ें',K('1.5')+' घात अर्थात वर्गमूल का घन: '+K(POW('n','1.5')+'='+POW('('+RT('n')+')','3'))+'.'),
      S('चरण 2: वर्गमूल',K(RT('324')+'=18')+', '+K(RT('256')+'=16')+'.'),
      S('चरण 3: घन करें',K(POW('18','3')+'=5832')+', '+K(POW('16','3')+'=4096')+'.'),
      S('चरण 4: भाग दें',K(FR('5832','4096')+'='+BOX(FR('729','512')))+'.')
    ],'घात 1.5 = वर्गमूल का घन.','घात 1.5 अर्थात वर्गमूल को घन करना.')
  ));

  H.set('sq_pyq_39', sol(
    L([
      S('Step 1: Square-root the bounds',K(RT('200')+' '+AP+' 14.1')+' and '+K(RT('1000')+' '+AP+' 31.6')+'.'),
      S('Step 2: Whole numbers in between','Integers '+K('15')+' to '+K('31')+' give perfect squares, from '+K(POW('15','2')+'=225')+' up to '+K(POW('31','2')+'=961')+'.'),
      S('Step 3: Count them',K('31-15+1='+BOX('17'))+' perfect squares.')
    ],'Count the whole numbers whose squares fall inside the range.','root 200 aur root 1000 ke beech ke poore numbers gino.'),
    L([
      S('Step 1: Seemao ka root',K(RT('200')+' '+AP+' 14.1')+', '+K(RT('1000')+' '+AP+' 31.6')+'.'),
      S('Step 2: Beech ke poore number',K('15')+' se '+K('31')+' tak ke squares range me aate hain, '+K(POW('15','2')+'=225')+' se '+K(POW('31','2')+'=961')+'.'),
      S('Step 3: Gino',K('31-15+1='+BOX('17'))+' perfect squares.')
    ],'Range me aane waale poore numbers ke squares gino.','root 200 aur root 1000 ke beech ke poore numbers gino.'),
    L([
      S('चरण 1: सीमाओं का मूल',K(RT('200')+' '+AP+' 14.1')+', '+K(RT('1000')+' '+AP+' 31.6')+'.'),
      S('चरण 2: बीच की पूर्ण संख्याएं',K('15')+' से '+K('31')+' तक के वर्ग परास में आते हैं, '+K(POW('15','2')+'=225')+' से '+K(POW('31','2')+'=961')+'.'),
      S('चरण 3: गिनें',K('31-15+1='+BOX('17'))+' पूर्ण वर्ग.')
    ],'परास में आने वाली पूर्ण संख्याओं के वर्ग गिनें.','मूल 200 और मूल 1000 के बीच की पूर्ण संख्याएं गिनें.')
  ));

  H.set('sq_pyq_40', sol(
    L([
      S('Step 1: Recognise the perfect square',K('6400='+POW('80','2'))+'.'),
      S('Step 2: Take the root',K(RT('6400')+'='+BOX('80'))+'.')
    ],'Recall '+K(POW('80','2')+'=6400')+'.','Find n with n squared equal to 6400.'),
    L([
      S('Step 1: Perfect square pehchaano',K('6400='+POW('80','2'))+'.'),
      S('Step 2: Root lo',K(RT('6400')+'='+BOX('80'))+'.')
    ],K(POW('80','2')+'=6400')+' yaad rakho.','Woh n jiska square 6400 ho.'),
    L([
      S('चरण 1: पूर्ण वर्ग पहचानें',K('6400='+POW('80','2'))+'.'),
      S('चरण 2: मूल लें',K(RT('6400')+'='+BOX('80'))+'.')
    ],K(POW('80','2')+'=6400')+' याद रखें.','वह n जिसका वर्ग 6400 हो.')
  ));
})();
