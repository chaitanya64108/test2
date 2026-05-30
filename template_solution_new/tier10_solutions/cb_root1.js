/* tier10 - Template 24: cb_root1 (Cube Root of Perfect Cubes)
   buildCbRoot1Solution(r,n), V1(), V2(), V3(n), V4(n,cube), V5(a,b,ans) */
(function(){
  var SB=window.SB; if(!SB) return;
  var K=SB.K,CRT=SB.CRT,POW=SB.POW,T=SB.T,step=SB.step,S=SB.S;

  window.buildCbRoot1Solution=function(r,n){
    var rb=r<0?'('+r+')':String(r);
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Find the number that, multiplied by itself three times, gives '+n+' (keep the sign in mind).'),
        step('Step 2 - Recognise the cube','<br>'+K(n+' = '+POW(rb,'3'))+'.'),
        step('Step 3 - Take the cube root','<br>'+K(CRT(n)+' = '+r)+'.'),
        step('Step 4 - Final answer','<br>'+K(r)+'.')
      ], shortcut:K(CRT(n)+' = '+r)+'.', hint:'Find which number cubed gives the value (include the sign).' },
      { steps:[
        step('Step 1 - Samjho','<br>Wo number dhoondo jo khud se teen baar multiply hone par '+n+' de (sign dhyaan me rakho).'),
        step('Step 2 - Cube pehchano','<br>'+K(n+' = '+POW(rb,'3'))+'.'),
        step('Step 3 - Cube root lo','<br>'+K(CRT(n)+' = '+r)+'.'),
        step('Step 4 - Final answer','<br>'+K(r)+'.')
      ], shortcut:K(CRT(n)+' = '+r)+'.', hint:'Dekho kaunsa number cube hone par value deta hai (sign ke saath).' },
      { steps:[
        step('चरण 1 - समझो','<br>वह संख्या खोजो जो खुद से तीन बार गुणा होने पर '+n+' दे (चिन्ह ध्यान में रखो)।'),
        step('चरण 2 - घन पहचानो','<br>'+K(n+' = '+POW(rb,'3'))+'।'),
        step('चरण 3 - घनमूल लो','<br>'+K(CRT(n)+' = '+r)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(r)+'।')
      ], shortcut:K(CRT(n)+' = '+r)+'।', hint:'देखो कौन सा नंबर घन होने पर मान देता है (चिन्ह के साथ)।' }
    );
  };

  window.buildCbRoot1V1Solution=function(){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>This is the cube root of zero.'),
        step('Step 2 - Cube of zero','<br>'+K('0'+T+'0'+T+'0 = 0')+', so '+K(CRT(0)+' = 0')+'.'),
        step('Step 3 - Final answer','<br>'+K('0')+'.')
      ], shortcut:K(CRT(0)+' = 0')+'.', hint:'Zero cubed is zero.' },
      { steps:[
        step('Step 1 - Samjho','<br>Ye zero ka cube root hai.'),
        step('Step 2 - Zero ka cube','<br>'+K('0'+T+'0'+T+'0 = 0')+', toh '+K(CRT(0)+' = 0')+'.'),
        step('Step 3 - Final answer','<br>'+K('0')+'.')
      ], shortcut:K(CRT(0)+' = 0')+'.', hint:'Zero ka cube zero hota hai.' },
      { steps:[
        step('चरण 1 - समझो','<br>यह शून्य का घनमूल है।'),
        step('चरण 2 - शून्य का घन','<br>'+K('0'+T+'0'+T+'0 = 0')+', तो '+K(CRT(0)+' = 0')+'।'),
        step('चरण 3 - अंतिम उत्तर','<br>'+K('0')+'।')
      ], shortcut:K(CRT(0)+' = 0')+'।', hint:'शून्य का घन शून्य होता है।' }
    );
  };

  window.buildCbRoot1V2Solution=function(){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Find each cube root first, then add.'),
        step('Step 2 - Cube root of 1','<br>'+K(CRT(1)+' = 1')+' (because '+K('1'+T+'1'+T+'1 = 1')+').'),
        step('Step 3 - Add','<br>'+K('1 + 1 = 2')+'.'),
        step('Step 4 - Final answer','<br>'+K('2')+'.')
      ], shortcut:K(CRT(1)+' + '+CRT(1)+' = 1 + 1 = 2')+'.', hint:'Cube root of 1 is 1; then add the two together.' },
      { steps:[
        step('Step 1 - Samjho','<br>Pehle har cube root nikalo, fir jodo.'),
        step('Step 2 - 1 ka cube root','<br>'+K(CRT(1)+' = 1')+' (kyunki '+K('1'+T+'1'+T+'1 = 1')+').'),
        step('Step 3 - Jodo','<br>'+K('1 + 1 = 2')+'.'),
        step('Step 4 - Final answer','<br>'+K('2')+'.')
      ], shortcut:K(CRT(1)+' + '+CRT(1)+' = 1 + 1 = 2')+'.', hint:'1 ka cube root 1 hai; fir dono ko jodo.' },
      { steps:[
        step('चरण 1 - समझो','<br>पहले हर घनमूल निकालो, फिर जोड़ो।'),
        step('चरण 2 - 1 का घनमूल','<br>'+K(CRT(1)+' = 1')+' (क्योंकि '+K('1'+T+'1'+T+'1 = 1')+')।'),
        step('चरण 3 - जोड़ो','<br>'+K('1 + 1 = 2')+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K('2')+'।')
      ], shortcut:K(CRT(1)+' + '+CRT(1)+' = 1 + 1 = 2')+'।', hint:'1 का घनमूल 1 है; फिर दोनों को जोड़ो।' }
    );
  };

  window.buildCbRoot1V3Solution=function(n){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Cube root of a perfect cube.'),
        step('Step 2 - Cancel the cube','<br>'+K(CRT(POW(n,'3'))+' = '+n)+'.'),
        step('Step 3 - Final answer','<br>'+K(n)+'.')
      ], shortcut:K(CRT(POW(n,'3'))+' = '+n)+'.', hint:'The cube root cancels the cube.' },
      { steps:[
        step('Step 1 - Samjho','<br>Perfect cube ka cube root.'),
        step('Step 2 - Cube cancel karo','<br>'+K(CRT(POW(n,'3'))+' = '+n)+'.'),
        step('Step 3 - Final answer','<br>'+K(n)+'.')
      ], shortcut:K(CRT(POW(n,'3'))+' = '+n)+'.', hint:'Cube root, cube ko cancel kar deta hai.' },
      { steps:[
        step('चरण 1 - समझो','<br>पूर्ण घन का घनमूल।'),
        step('चरण 2 - घन cancel करो','<br>'+K(CRT(POW(n,'3'))+' = '+n)+'।'),
        step('चरण 3 - अंतिम उत्तर','<br>'+K(n)+'।')
      ], shortcut:K(CRT(POW(n,'3'))+' = '+n)+'।', hint:'घनमूल, घन को cancel कर देता है।' }
    );
  };

  window.buildCbRoot1V4Solution=function(n,cube){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Find y whose cube is '+cube+'.'),
        step('Step 2 - Take cube roots of both sides','<br>'+K(cube+' = '+POW(n,'3'))+', so '+K('y = '+CRT(cube)+' = '+n)+'.'),
        step('Step 3 - Final answer','<br>'+K(n)+'.')
      ], shortcut:K('y = '+CRT(cube)+' = '+n)+'.', hint:'Take the cube root of both sides.' },
      { steps:[
        step('Step 1 - Samjho','<br>Aisa y dhoondo jiska cube '+cube+' hai.'),
        step('Step 2 - Dono taraf cube root lo','<br>'+K(cube+' = '+POW(n,'3'))+', toh '+K('y = '+CRT(cube)+' = '+n)+'.'),
        step('Step 3 - Final answer','<br>'+K(n)+'.')
      ], shortcut:K('y = '+CRT(cube)+' = '+n)+'.', hint:'Dono taraf ka cube root lo.' },
      { steps:[
        step('चरण 1 - समझो','<br>ऐसा y खोजो जिसका घन '+cube+' है।'),
        step('चरण 2 - दोनों ओर घनमूल लो','<br>'+K(cube+' = '+POW(n,'3'))+', तो '+K('y = '+CRT(cube)+' = '+n)+'।'),
        step('चरण 3 - अंतिम उत्तर','<br>'+K(n)+'।')
      ], shortcut:K('y = '+CRT(cube)+' = '+n)+'।', hint:'दोनों ओर का घनमूल लो।' }
    );
  };

  window.buildCbRoot1V5Solution=function(a,b,ans){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Take each cube root, then add.'),
        step('Step 2 - Take each cube root','<br>'+K(CRT(a*a*a)+' = '+a)+' and '+K(CRT(b*b*b)+' = '+b)+'.'),
        step('Step 3 - Add','<br>'+K(a+' + '+b+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(CRT(a*a*a)+' + '+CRT(b*b*b)+' = '+ans)+'.', hint:'Take each cube root, then add.' },
      { steps:[
        step('Step 1 - Samjho','<br>Har cube root lo, fir jodo.'),
        step('Step 2 - Har cube root lo','<br>'+K(CRT(a*a*a)+' = '+a)+' aur '+K(CRT(b*b*b)+' = '+b)+'.'),
        step('Step 3 - Jodo','<br>'+K(a+' + '+b+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(CRT(a*a*a)+' + '+CRT(b*b*b)+' = '+ans)+'.', hint:'Har cube root lo, fir jodo.' },
      { steps:[
        step('चरण 1 - समझो','<br>हर घनमूल लो, फिर जोड़ो।'),
        step('चरण 2 - हर घनमूल लो','<br>'+K(CRT(a*a*a)+' = '+a)+' और '+K(CRT(b*b*b)+' = '+b)+'।'),
        step('चरण 3 - जोड़ो','<br>'+K(a+' + '+b+' = '+ans)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:K(CRT(a*a*a)+' + '+CRT(b*b*b)+' = '+ans)+'।', hint:'हर घनमूल लो, फिर जोड़ो।' }
    );
  };
})();
