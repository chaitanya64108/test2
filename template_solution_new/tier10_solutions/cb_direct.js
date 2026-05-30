/* tier10 - Template 22: cb_direct (Perfect Cube - Direct)
   buildCbDirectSolution(cube,r), V1(r,ans), V2(a,b,ans), V3(r), V4(a,b,ans), V5(r,cube) */
(function(){
  var SB=window.SB; if(!SB) return;
  var K=SB.K,CRT=SB.CRT,POW=SB.POW,T=SB.T,step=SB.step,S=SB.S;

  window.buildCbDirectSolution=function(cube,r){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>A cube root asks: which number, multiplied by itself three times, gives this value?'),
        step('Step 2 - Recognise the cube','<br>'+K(cube+' = '+POW(r,'3'))+' (because '+K(r+T+r+T+r+' = '+cube)+').'),
        step('Step 3 - Take the cube root','<br>'+K(CRT(cube)+' = '+r)+'.'),
        step('Step 4 - Final answer','<br>'+K(r)+'.')
      ], shortcut:K(CRT(cube)+' = '+r)+'.', hint:'Find the number that, multiplied by itself three times, gives the number under the cube root.' },
      { steps:[
        step('Step 1 - Samjho','<br>Cube root poochta hai: kaunsa number khud se teen baar multiply hone par ye value deta hai?'),
        step('Step 2 - Cube pehchano','<br>'+K(cube+' = '+POW(r,'3'))+' (kyunki '+K(r+T+r+T+r+' = '+cube)+').'),
        step('Step 3 - Cube root lo','<br>'+K(CRT(cube)+' = '+r)+'.'),
        step('Step 4 - Final answer','<br>'+K(r)+'.')
      ], shortcut:K(CRT(cube)+' = '+r)+'.', hint:'Wo number dhoondo jo khud se teen baar multiply hone par cube root ke andar wala number de.' },
      { steps:[
        step('चरण 1 - समझो','<br>घनमूल पूछता है: कौन सा नंबर खुद से तीन बार गुणा होने पर यह मान देता है?'),
        step('चरण 2 - घन पहचानो','<br>'+K(cube+' = '+POW(r,'3'))+' (क्योंकि '+K(r+T+r+T+r+' = '+cube)+')।'),
        step('चरण 3 - घनमूल लो','<br>'+K(CRT(cube)+' = '+r)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(r)+'।')
      ], shortcut:K(CRT(cube)+' = '+r)+'।', hint:'वह संख्या खोजो जो खुद से तीन बार गुणा होने पर घनमूल के अंदर वाली संख्या दे।' }
    );
  };

  window.buildCbDirectV1Solution=function(r,ans){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>The cube root of x is '+r+', so x is '+r+' cubed.'),
        step('Step 2 - Cube it','<br>'+K('x = '+POW(r,'3')+' = '+r+T+r+T+r+' = '+ans)+'.'),
        step('Step 3 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K('x = '+POW(r,'3')+' = '+ans)+'.', hint:'If the cube root is r, the number is r x r x r.' },
      { steps:[
        step('Step 1 - Samjho','<br>x ka cube root '+r+' hai, toh x = '+r+' ka cube.'),
        step('Step 2 - Cube karo','<br>'+K('x = '+POW(r,'3')+' = '+r+T+r+T+r+' = '+ans)+'.'),
        step('Step 3 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K('x = '+POW(r,'3')+' = '+ans)+'.', hint:'Agar cube root r hai, to number r x r x r hai.' },
      { steps:[
        step('चरण 1 - समझो','<br>x का घनमूल '+r+' है, तो x = '+r+' का घन।'),
        step('चरण 2 - घन करो','<br>'+K('x = '+POW(r,'3')+' = '+r+T+r+T+r+' = '+ans)+'।'),
        step('चरण 3 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:K('x = '+POW(r,'3')+' = '+ans)+'।', hint:'अगर घनमूल r है, तो संख्या r x r x r है।' }
    );
  };

  window.buildCbDirectV2Solution=function(a,b,ans){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Take each cube root, then add.'),
        step('Step 2 - Take each cube root','<br>'+K(CRT(a*a*a)+' = '+a)+' and '+K(CRT(b*b*b)+' = '+b)+'.'),
        step('Step 3 - Add','<br>'+K(a+' + '+b+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(CRT(a*a*a)+' + '+CRT(b*b*b)+' = '+a+' + '+b+' = '+ans)+'.', hint:'Take each cube root first, then add.' },
      { steps:[
        step('Step 1 - Samjho','<br>Har cube root lo, fir jodo.'),
        step('Step 2 - Har cube root lo','<br>'+K(CRT(a*a*a)+' = '+a)+' aur '+K(CRT(b*b*b)+' = '+b)+'.'),
        step('Step 3 - Jodo','<br>'+K(a+' + '+b+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(CRT(a*a*a)+' + '+CRT(b*b*b)+' = '+a+' + '+b+' = '+ans)+'.', hint:'Pehle har cube root lo, fir jodo.' },
      { steps:[
        step('चरण 1 - समझो','<br>हर घनमूल लो, फिर जोड़ो।'),
        step('चरण 2 - हर घनमूल लो','<br>'+K(CRT(a*a*a)+' = '+a)+' और '+K(CRT(b*b*b)+' = '+b)+'।'),
        step('चरण 3 - जोड़ो','<br>'+K(a+' + '+b+' = '+ans)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:K(CRT(a*a*a)+' + '+CRT(b*b*b)+' = '+a+' + '+b+' = '+ans)+'।', hint:'पहले हर घनमूल लो, फिर जोड़ो।' }
    );
  };

  window.buildCbDirectV3Solution=function(r){
    var cube=r*r*r;
    return S(
      { steps:[
        step('Step 1 - Understand','<br>We need the number whose cube root is '+r+'.'),
        step('Step 2 - Cube the value','<br>'+K(POW(r,'3')+' = '+r+T+r+T+r+' = '+cube)+'.'),
        step('Step 3 - Check','<br>'+K(CRT(cube)+' = '+r)+', correct.'),
        step('Step 4 - Final answer','<br>'+K(cube)+'.')
      ], shortcut:'The number = '+K(POW(r,'3')+' = '+cube)+'.', hint:'Cube root r means the number is r cubed.' },
      { steps:[
        step('Step 1 - Samjho','<br>Wo number chahiye jiska cube root '+r+' hai.'),
        step('Step 2 - Value ko cube karo','<br>'+K(POW(r,'3')+' = '+r+T+r+T+r+' = '+cube)+'.'),
        step('Step 3 - Check karo','<br>'+K(CRT(cube)+' = '+r)+', sahi.'),
        step('Step 4 - Final answer','<br>'+K(cube)+'.')
      ], shortcut:'Number = '+K(POW(r,'3')+' = '+cube)+'.', hint:'Cube root r ka matlab number r ka cube hai.' },
      { steps:[
        step('चरण 1 - समझो','<br>वह संख्या चाहिए जिसका घनमूल '+r+' है।'),
        step('चरण 2 - मान को घन करो','<br>'+K(POW(r,'3')+' = '+r+T+r+T+r+' = '+cube)+'।'),
        step('चरण 3 - जाँचो','<br>'+K(CRT(cube)+' = '+r)+', सही।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(cube)+'।')
      ], shortcut:'संख्या = '+K(POW(r,'3')+' = '+cube)+'।', hint:'घनमूल r का मतलब संख्या r का घन है।' }
    );
  };

  window.buildCbDirectV4Solution=function(a,b,ans){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Take each cube root, then subtract.'),
        step('Step 2 - Take each cube root','<br>'+K(CRT(a*a*a)+' = '+a)+' and '+K(CRT(b*b*b)+' = '+b)+'.'),
        step('Step 3 - Subtract','<br>'+K(a+' - '+b+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(CRT(a*a*a)+' - '+CRT(b*b*b)+' = '+a+' - '+b+' = '+ans)+'.', hint:'Take each cube root, then subtract.' },
      { steps:[
        step('Step 1 - Samjho','<br>Har cube root lo, fir ghatao.'),
        step('Step 2 - Har cube root lo','<br>'+K(CRT(a*a*a)+' = '+a)+' aur '+K(CRT(b*b*b)+' = '+b)+'.'),
        step('Step 3 - Ghatao','<br>'+K(a+' - '+b+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(CRT(a*a*a)+' - '+CRT(b*b*b)+' = '+a+' - '+b+' = '+ans)+'.', hint:'Har cube root lo, fir ghatao.' },
      { steps:[
        step('चरण 1 - समझो','<br>हर घनमूल लो, फिर घटाओ।'),
        step('चरण 2 - हर घनमूल लो','<br>'+K(CRT(a*a*a)+' = '+a)+' और '+K(CRT(b*b*b)+' = '+b)+'।'),
        step('चरण 3 - घटाओ','<br>'+K(a+' - '+b+' = '+ans)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:K(CRT(a*a*a)+' - '+CRT(b*b*b)+' = '+a+' - '+b+' = '+ans)+'।', hint:'हर घनमूल लो, फिर घटाओ।' }
    );
  };

  window.buildCbDirectV5Solution=function(r,cube){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Find n such that n cubed equals '+cube+'.'),
        step('Step 2 - Recognise the cube','<br>'+K(cube+' = '+POW(r,'3'))+', so '+K('n = '+CRT(cube)+' = '+r)+'.'),
        step('Step 3 - Final answer','<br>'+K(r)+'.')
      ], shortcut:K('n = '+CRT(cube)+' = '+r)+'.', hint:'Find which number cubed gives the value.' },
      { steps:[
        step('Step 1 - Samjho','<br>Aisa n dhoondo jiska cube '+cube+' ke barabar ho.'),
        step('Step 2 - Cube pehchano','<br>'+K(cube+' = '+POW(r,'3'))+', toh '+K('n = '+CRT(cube)+' = '+r)+'.'),
        step('Step 3 - Final answer','<br>'+K(r)+'.')
      ], shortcut:K('n = '+CRT(cube)+' = '+r)+'.', hint:'Dekho kaunsa number cube hone par value deta hai.' },
      { steps:[
        step('चरण 1 - समझो','<br>ऐसा n खोजो जिसका घन '+cube+' के बराबर हो।'),
        step('चरण 2 - घन पहचानो','<br>'+K(cube+' = '+POW(r,'3'))+', तो '+K('n = '+CRT(cube)+' = '+r)+'।'),
        step('चरण 3 - अंतिम उत्तर','<br>'+K(r)+'।')
      ], shortcut:K('n = '+CRT(cube)+' = '+r)+'।', hint:'देखो कौन सा नंबर घन होने पर मान देता है।' }
    );
  };
})();
