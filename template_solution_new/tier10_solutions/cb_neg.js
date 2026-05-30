/* tier10 - Template 25: cb_neg (Cube Root of a Negative Number)
   buildCbNegSolution(r,cube), V1(r,pos), V2(r,negCube), V3(r), V4(a,b,ans), V5(r,negCube,ans) */
(function(){
  var SB=window.SB; if(!SB) return;
  var K=SB.K,CRT=SB.CRT,POW=SB.POW,T=SB.T,step=SB.step,S=SB.S;

  window.buildCbNegSolution=function(r,cube){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>The cube root of a negative number is negative, because a negative times a negative times a negative stays negative.'),
        step('Step 2 - Recognise the cube','<br>'+K(cube+' = (-'+r+')^{3}')+' (since '+K('(-'+r+')'+T+'(-'+r+')'+T+'(-'+r+') = '+cube)+').'),
        step('Step 3 - Take the cube root','<br>'+K(CRT('('+cube+')')+' = '+(-r))+'.'),
        step('Step 4 - Final answer','<br>'+K(-r)+'.')
      ], shortcut:K(CRT('('+cube+')')+' = '+(-r))+'.', hint:'Cube root of a negative = negative of the cube root of the positive.' },
      { steps:[
        step('Step 1 - Samjho','<br>Negative number ka cube root negative hota hai, kyunki negative x negative x negative bhi negative rehta hai.'),
        step('Step 2 - Cube pehchano','<br>'+K(cube+' = (-'+r+')^{3}')+' (kyunki '+K('(-'+r+')'+T+'(-'+r+')'+T+'(-'+r+') = '+cube)+').'),
        step('Step 3 - Cube root lo','<br>'+K(CRT('('+cube+')')+' = '+(-r))+'.'),
        step('Step 4 - Final answer','<br>'+K(-r)+'.')
      ], shortcut:K(CRT('('+cube+')')+' = '+(-r))+'.', hint:'Negative ka cube root = positive ke cube root ka negative.' },
      { steps:[
        step('चरण 1 - समझो','<br>ऋणात्मक संख्या का घनमूल ऋणात्मक होता है, क्योंकि ऋणात्मक x ऋणात्मक x ऋणात्मक भी ऋणात्मक रहता है।'),
        step('चरण 2 - घन पहचानो','<br>'+K(cube+' = (-'+r+')^{3}')+' (क्योंकि '+K('(-'+r+')'+T+'(-'+r+')'+T+'(-'+r+') = '+cube)+')।'),
        step('चरण 3 - घनमूल लो','<br>'+K(CRT('('+cube+')')+' = '+(-r))+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(-r)+'।')
      ], shortcut:K(CRT('('+cube+')')+' = '+(-r))+'।', hint:'ऋणात्मक का घनमूल = धनात्मक के घनमूल का ऋणात्मक।' }
    );
  };

  window.buildCbNegV1Solution=function(r,pos){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>A negative under the cube root gives a negative answer.'),
        step('Step 2 - Recognise the cube','<br>'+K((-pos)+' = (-'+r+')^{3}')+'.'),
        step('Step 3 - Take the cube root','<br>'+K(CRT('('+(-pos)+')')+' = '+(-r))+'.'),
        step('Step 4 - Final answer','<br>'+K(-r)+'.')
      ], shortcut:K(CRT('('+(-pos)+')')+' = '+(-r))+'.', hint:'The cube root keeps the negative sign.' },
      { steps:[
        step('Step 1 - Samjho','<br>Cube root ke andar negative ho to answer negative aata hai.'),
        step('Step 2 - Cube pehchano','<br>'+K((-pos)+' = (-'+r+')^{3}')+'.'),
        step('Step 3 - Cube root lo','<br>'+K(CRT('('+(-pos)+')')+' = '+(-r))+'.'),
        step('Step 4 - Final answer','<br>'+K(-r)+'.')
      ], shortcut:K(CRT('('+(-pos)+')')+' = '+(-r))+'.', hint:'Cube root negative sign rakhta hai.' },
      { steps:[
        step('चरण 1 - समझो','<br>घनमूल के अंदर ऋणात्मक हो तो उत्तर ऋणात्मक आता है।'),
        step('चरण 2 - घन पहचानो','<br>'+K((-pos)+' = (-'+r+')^{3}')+'।'),
        step('चरण 3 - घनमूल लो','<br>'+K(CRT('('+(-pos)+')')+' = '+(-r))+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(-r)+'।')
      ], shortcut:K(CRT('('+(-pos)+')')+' = '+(-r))+'।', hint:'घनमूल ऋणात्मक चिन्ह रखता है।' }
    );
  };

  window.buildCbNegV2Solution=function(r,negCube){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>If the cube root of y is -'+r+', then y is (-'+r+') cubed.'),
        step('Step 2 - Cube the root','<br>'+K('y = (-'+r+')^{3} = '+negCube)+'.'),
        step('Step 3 - Final answer','<br>'+K(negCube)+'.')
      ], shortcut:K('y = (-'+r+')^{3} = '+negCube)+'.', hint:'Cube the given root, keeping the sign.' },
      { steps:[
        step('Step 1 - Samjho','<br>Agar y ka cube root -'+r+' hai, to y = (-'+r+') ka cube.'),
        step('Step 2 - Root ko cube karo','<br>'+K('y = (-'+r+')^{3} = '+negCube)+'.'),
        step('Step 3 - Final answer','<br>'+K(negCube)+'.')
      ], shortcut:K('y = (-'+r+')^{3} = '+negCube)+'.', hint:'Diye gaye root ko cube karo, sign ke saath.' },
      { steps:[
        step('चरण 1 - समझो','<br>अगर y का घनमूल -'+r+' है, तो y = (-'+r+') का घन।'),
        step('चरण 2 - रूट को घन करो','<br>'+K('y = (-'+r+')^{3} = '+negCube)+'।'),
        step('चरण 3 - अंतिम उत्तर','<br>'+K(negCube)+'।')
      ], shortcut:K('y = (-'+r+')^{3} = '+negCube)+'।', hint:'दिए गए रूट को घन करो, चिन्ह के साथ।' }
    );
  };

  window.buildCbNegV3Solution=function(r){
    var cube=r*r*r;
    return S(
      { steps:[
        step('Step 1 - Understand','<br>One positive cube root and one negative cube root.'),
        step('Step 2 - Take each cube root','<br>'+K(CRT(cube)+' = '+r)+' and '+K(CRT('('+(-cube)+')')+' = '+(-r))+'.'),
        step('Step 3 - Add','<br>'+K(r+' + ('+(-r)+') = 0')+'.'),
        step('Step 4 - Final answer','<br>'+K('0')+'.')
      ], shortcut:K(CRT(cube)+' + '+CRT('('+(-cube)+')')+' = '+r+' - '+r+' = 0')+'.', hint:'A number and its negative add to zero.' },
      { steps:[
        step('Step 1 - Samjho','<br>Ek positive cube root aur ek negative cube root.'),
        step('Step 2 - Har cube root lo','<br>'+K(CRT(cube)+' = '+r)+' aur '+K(CRT('('+(-cube)+')')+' = '+(-r))+'.'),
        step('Step 3 - Jodo','<br>'+K(r+' + ('+(-r)+') = 0')+'.'),
        step('Step 4 - Final answer','<br>'+K('0')+'.')
      ], shortcut:K(CRT(cube)+' + '+CRT('('+(-cube)+')')+' = '+r+' - '+r+' = 0')+'.', hint:'Koi number aur uska negative jodne par zero.' },
      { steps:[
        step('चरण 1 - समझो','<br>एक धनात्मक घनमूल और एक ऋणात्मक घनमूल।'),
        step('चरण 2 - हर घनमूल लो','<br>'+K(CRT(cube)+' = '+r)+' और '+K(CRT('('+(-cube)+')')+' = '+(-r))+'।'),
        step('चरण 3 - जोड़ो','<br>'+K(r+' + ('+(-r)+') = 0')+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K('0')+'।')
      ], shortcut:K(CRT(cube)+' + '+CRT('('+(-cube)+')')+' = '+r+' - '+r+' = 0')+'।', hint:'कोई संख्या और उसका ऋणात्मक जोड़ने पर शून्य।' }
    );
  };

  window.buildCbNegV4Solution=function(a,b,ans){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Take each cube root, then subtract. When the second base is bigger, the result is negative.'),
        step('Step 2 - Take each cube root','<br>'+K(CRT(a*a*a)+' = '+a)+' and '+K(CRT(b*b*b)+' = '+b)+'.'),
        step('Step 3 - Subtract','<br>'+K(a+' - '+b+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(CRT(a*a*a)+' - '+CRT(b*b*b)+' = '+a+' - '+b+' = '+ans)+'.', hint:'Subtracting a bigger number gives a negative result.' },
      { steps:[
        step('Step 1 - Samjho','<br>Har cube root lo, fir ghatao. Jab doosra base bada ho, result negative aata hai.'),
        step('Step 2 - Har cube root lo','<br>'+K(CRT(a*a*a)+' = '+a)+' aur '+K(CRT(b*b*b)+' = '+b)+'.'),
        step('Step 3 - Ghatao','<br>'+K(a+' - '+b+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(CRT(a*a*a)+' - '+CRT(b*b*b)+' = '+a+' - '+b+' = '+ans)+'.', hint:'Bade number ko ghatane par result negative aata hai.' },
      { steps:[
        step('चरण 1 - समझो','<br>हर घनमूल लो, फिर घटाओ। जब दूसरा आधार बड़ा हो, तो परिणाम ऋणात्मक आता है।'),
        step('चरण 2 - हर घनमूल लो','<br>'+K(CRT(a*a*a)+' = '+a)+' और '+K(CRT(b*b*b)+' = '+b)+'।'),
        step('चरण 3 - घटाओ','<br>'+K(a+' - '+b+' = '+ans)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:K(CRT(a*a*a)+' - '+CRT(b*b*b)+' = '+a+' - '+b+' = '+ans)+'।', hint:'बड़ी संख्या घटाने पर परिणाम ऋणात्मक आता है।' }
    );
  };

  window.buildCbNegV5Solution=function(r,negCube,ans){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Cube root and cube are opposite operations, so they cancel each other.'),
        step('Step 2 - Cube root then cube','<br>'+K(CRT(r*r*r)+' = '+r)+', then '+K(POW(r,'3')+' = '+ans)+'.'),
        step('Step 3 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:'Cubing undoes the cube root: '+K(CRT(r*r*r)+' = '+r)+', cube = '+K(ans)+'.', hint:'Cubing reverses the cube root.' },
      { steps:[
        step('Step 1 - Samjho','<br>Cube root aur cube ulte operations hain, toh ye ek doosre ko cancel karte hain.'),
        step('Step 2 - Cube root fir cube','<br>'+K(CRT(r*r*r)+' = '+r)+', fir '+K(POW(r,'3')+' = '+ans)+'.'),
        step('Step 3 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:'Cube karne se cube root cancel: '+K(CRT(r*r*r)+' = '+r)+', cube = '+K(ans)+'.', hint:'Cube karna cube root ko ulta deta hai.' },
      { steps:[
        step('चरण 1 - समझो','<br>घनमूल और घन उलट क्रियाएँ हैं, तो ये एक दूसरे को cancel करती हैं।'),
        step('चरण 2 - घनमूल फिर घन','<br>'+K(CRT(r*r*r)+' = '+r)+', फिर '+K(POW(r,'3')+' = '+ans)+'।'),
        step('चरण 3 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:'घन करने से घनमूल cancel: '+K(CRT(r*r*r)+' = '+r)+', घन = '+K(ans)+'।', hint:'घन करना घनमूल को उलट देता है।' }
    );
  };
})();
