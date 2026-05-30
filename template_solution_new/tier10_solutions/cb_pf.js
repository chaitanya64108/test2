/* tier10 - Template 23: cb_pf (Cube Root by Prime Factorization)
   buildCbPfSolution(cube,r,chosen), V1(cube,r,chosen), V2(a,b,ans), V3(p,n), V4(a,b,ans), V5(a,b,num,den,ans) */
(function(){
  var SB=window.SB; if(!SB) return;
  var K=SB.K,CRT=SB.CRT,FR=SB.FR,POW=SB.POW,T=SB.T,step=SB.step,S=SB.S;

  window.buildCbPfSolution=function(cube,r,chosen){
    var facts=chosen.map(function(p){return POW(p,'3');}).join(T), roots=chosen.join(T);
    return S(
      { steps:[
        step('Step 1 - Understand','<br>To find a cube root by prime factorization, break the number into prime factors and group them in threes. Each group of three identical primes gives one factor of the root.'),
        step('Step 2 - Prime factorization','<br>'+K(cube+' = '+facts)+'.'),
        step('Step 3 - Take one from each triple','<br>'+K(CRT(cube)+' = '+roots+' = '+r)+'.'),
        step('Step 4 - Final answer','<br>'+K(r)+'.')
      ], shortcut:K(CRT(cube)+' = '+roots+' = '+r)+'.', hint:'Break into primes, group in threes, take one prime from each group.' },
      { steps:[
        step('Step 1 - Samjho','<br>Prime factorization se cube root nikalne ke liye number ko prime factors me todo aur teen-teen ke group banao. Har teen same prime ka group root me ek factor deta hai.'),
        step('Step 2 - Prime factorization','<br>'+K(cube+' = '+facts)+'.'),
        step('Step 3 - Har triple se ek lo','<br>'+K(CRT(cube)+' = '+roots+' = '+r)+'.'),
        step('Step 4 - Final answer','<br>'+K(r)+'.')
      ], shortcut:K(CRT(cube)+' = '+roots+' = '+r)+'.', hint:'Primes me todo, teen-teen ke group banao, har group se ek prime lo.' },
      { steps:[
        step('चरण 1 - समझो','<br>अभाज्य गुणनखंडन से घनमूल निकालने के लिए संख्या को अभाज्य गुणनखंडों में तोड़ो और तीन-तीन के समूह बनाओ। हर तीन समान अभाज्य का समूह मूल में एक गुणनखंड देता है।'),
        step('चरण 2 - अभाज्य गुणनखंडन','<br>'+K(cube+' = '+facts)+'।'),
        step('चरण 3 - हर तिगुट से एक लो','<br>'+K(CRT(cube)+' = '+roots+' = '+r)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(r)+'।')
      ], shortcut:K(CRT(cube)+' = '+roots+' = '+r)+'।', hint:'अभाज्य गुणनखंडों में तोड़ो, तीन-तीन के समूह बनाओ, हर समूह से एक अभाज्य लो।' }
    );
  };

  window.buildCbPfV1Solution=function(cube,r,chosen){
    var facts=chosen.map(function(p){return POW(p,'3');}).join(T), roots=chosen.join(T);
    return S(
      { steps:[
        step('Step 1 - Understand','<br>The number is already written as primes cubed. The cube root takes one base from each cube.'),
        step('Step 2 - Read the cubes','<br>'+K(cube+' = '+facts)+'.'),
        step('Step 3 - Take the cube root','<br>'+K(CRT(cube)+' = '+roots+' = '+r)+'.'),
        step('Step 4 - Final answer','<br>'+K(r)+'.')
      ], shortcut:K(CRT(cube)+' = '+r)+'.', hint:'Cube root of a product of cubes = product of the bases.' },
      { steps:[
        step('Step 1 - Samjho','<br>Number pehle se primes cubed me likha hai. Cube root har cube se ek base leta hai.'),
        step('Step 2 - Cubes padho','<br>'+K(cube+' = '+facts)+'.'),
        step('Step 3 - Cube root lo','<br>'+K(CRT(cube)+' = '+roots+' = '+r)+'.'),
        step('Step 4 - Final answer','<br>'+K(r)+'.')
      ], shortcut:K(CRT(cube)+' = '+r)+'.', hint:'Cubes ke product ka cube root = bases ka product.' },
      { steps:[
        step('चरण 1 - समझो','<br>संख्या पहले से अभाज्यों के घन के रूप में लिखी है। घनमूल हर घन से एक आधार लेता है।'),
        step('चरण 2 - घन पढ़ो','<br>'+K(cube+' = '+facts)+'।'),
        step('चरण 3 - घनमूल लो','<br>'+K(CRT(cube)+' = '+roots+' = '+r)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(r)+'।')
      ], shortcut:K(CRT(cube)+' = '+r)+'।', hint:'घनों के गुणनफल का घनमूल = आधारों का गुणनफल।' }
    );
  };

  window.buildCbPfV2Solution=function(a,b,ans){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Take each cube root, then multiply.'),
        step('Step 2 - Take each cube root','<br>'+K(CRT(a*a*a)+' = '+a)+' and '+K(CRT(b*b*b)+' = '+b)+'.'),
        step('Step 3 - Multiply','<br>'+K(a+T+b+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(CRT(a*a*a)+T+CRT(b*b*b)+' = '+a+T+b+' = '+ans)+'.', hint:'Take each cube root, then multiply.' },
      { steps:[
        step('Step 1 - Samjho','<br>Har cube root lo, fir multiply karo.'),
        step('Step 2 - Har cube root lo','<br>'+K(CRT(a*a*a)+' = '+a)+' aur '+K(CRT(b*b*b)+' = '+b)+'.'),
        step('Step 3 - Multiply karo','<br>'+K(a+T+b+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(CRT(a*a*a)+T+CRT(b*b*b)+' = '+a+T+b+' = '+ans)+'.', hint:'Har cube root lo, fir multiply karo.' },
      { steps:[
        step('चरण 1 - समझो','<br>हर घनमूल लो, फिर गुणा करो।'),
        step('चरण 2 - हर घनमूल लो','<br>'+K(CRT(a*a*a)+' = '+a)+' और '+K(CRT(b*b*b)+' = '+b)+'।'),
        step('चरण 3 - गुणा करो','<br>'+K(a+T+b+' = '+ans)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:K(CRT(a*a*a)+T+CRT(b*b*b)+' = '+a+T+b+' = '+ans)+'।', hint:'हर घनमूल लो, फिर गुणा करो।' }
    );
  };

  window.buildCbPfV3Solution=function(p,n){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>A perfect cube needs every prime factor in groups of three. Look at how many times the prime appears.'),
        step('Step 2 - Factorize','<br>'+K(n+' = '+POW(p,'2'))+', so the prime '+p+' appears only two times.'),
        step('Step 3 - Complete the triple','<br>Multiply by one more '+K(p)+': '+K(n+T+p+' = '+POW(p,'3')+' = '+(n*p))+', a perfect cube.'),
        step('Step 4 - Final answer','<br>'+K(p)+'.')
      ], shortcut:'Multiply by '+K(p)+' to complete the group of three primes.', hint:'A perfect cube needs each prime factor in groups of three.' },
      { steps:[
        step('Step 1 - Samjho','<br>Perfect cube me har prime factor teen-teen ke group me chahiye. Dekho prime kitni baar aaya.'),
        step('Step 2 - Factorize karo','<br>'+K(n+' = '+POW(p,'2'))+', toh prime '+p+' sirf do baar aaya.'),
        step('Step 3 - Triple poora karo','<br>Ek aur '+K(p)+' se multiply karo: '+K(n+T+p+' = '+POW(p,'3')+' = '+(n*p))+', perfect cube.'),
        step('Step 4 - Final answer','<br>'+K(p)+'.')
      ], shortcut:K(p)+' se multiply karo taaki teen primes ka group poora ho.', hint:'Perfect cube me har prime factor teen-teen ke group me chahiye.' },
      { steps:[
        step('चरण 1 - समझो','<br>पूर्ण घन में हर अभाज्य गुणनखंड तीन-तीन के समूह में चाहिए। देखो अभाज्य कितनी बार आया।'),
        step('चरण 2 - गुणनखंडन','<br>'+K(n+' = '+POW(p,'2'))+', तो अभाज्य '+p+' सिर्फ दो बार आया।'),
        step('चरण 3 - तिगुट पूरा करो','<br>एक और '+K(p)+' से गुणा करो: '+K(n+T+p+' = '+POW(p,'3')+' = '+(n*p))+', पूर्ण घन।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(p)+'।')
      ], shortcut:K(p)+' से गुणा करो ताकि तीन अभाज्यों का समूह पूरा हो।', hint:'पूर्ण घन में हर अभाज्य गुणनखंड तीन-तीन के समूह में चाहिए।' }
    );
  };

  window.buildCbPfV4Solution=function(a,b,ans){
    var prodStr=(a*a*a)+T+(b*b*b), prod=a*a*a*b*b*b;
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Multiply inside the root first, then recognise it as a perfect cube.'),
        step('Step 2 - Inside the root','<br>'+K(prodStr+' = '+prod)+', and '+K(prod+' = '+POW(a*b,'3'))+'.'),
        step('Step 3 - Take the cube root','<br>'+K(CRT(prodStr)+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(CRT(a*a*a)+T+CRT(b*b*b)+' = '+a+T+b+' = '+ans)+'.', hint:'a cubed times b cubed = (a times b) cubed.' },
      { steps:[
        step('Step 1 - Samjho','<br>Pehle root ke andar multiply karo, fir use perfect cube ke roop me pehchano.'),
        step('Step 2 - Root ke andar','<br>'+K(prodStr+' = '+prod)+', aur '+K(prod+' = '+POW(a*b,'3'))+'.'),
        step('Step 3 - Cube root lo','<br>'+K(CRT(prodStr)+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(CRT(a*a*a)+T+CRT(b*b*b)+' = '+a+T+b+' = '+ans)+'.', hint:'a ka cube x b ka cube = (a x b) ka cube.' },
      { steps:[
        step('चरण 1 - समझो','<br>पहले रूट के अंदर गुणा करो, फिर उसे पूर्ण घन के रूप में पहचानो।'),
        step('चरण 2 - रूट के अंदर','<br>'+K(prodStr+' = '+prod)+', और '+K(prod+' = '+POW(a*b,'3'))+'।'),
        step('चरण 3 - घनमूल लो','<br>'+K(CRT(prodStr)+' = '+ans)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:K(CRT(a*a*a)+T+CRT(b*b*b)+' = '+a+T+b+' = '+ans)+'।', hint:'a का घन x b का घन = (a x b) का घन।' }
    );
  };

  window.buildCbPfV5Solution=function(a,b,num,den,ans){
    var ab=a*b;
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Cube root of the top divided by cube root of the bottom.'),
        step('Step 2 - Take each cube root','<br>'+K(CRT(num)+' = '+ab)+' and '+K(CRT(den)+' = '+b)+'.'),
        step('Step 3 - Divide','<br>'+K(FR(ab,b)+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(FR(CRT(num),CRT(den))+' = '+FR(ab,b)+' = '+ans)+'.', hint:'Cube root of top over cube root of bottom, then simplify.' },
      { steps:[
        step('Step 1 - Samjho','<br>Top ka cube root divided by bottom ka cube root.'),
        step('Step 2 - Har cube root lo','<br>'+K(CRT(num)+' = '+ab)+' aur '+K(CRT(den)+' = '+b)+'.'),
        step('Step 3 - Divide karo','<br>'+K(FR(ab,b)+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(FR(CRT(num),CRT(den))+' = '+FR(ab,b)+' = '+ans)+'.', hint:'Top ka cube root upar, bottom ka cube root neeche, fir simplify.' },
      { steps:[
        step('चरण 1 - समझो','<br>ऊपर का घनमूल भागित नीचे का घनमूल।'),
        step('चरण 2 - हर घनमूल लो','<br>'+K(CRT(num)+' = '+ab)+' और '+K(CRT(den)+' = '+b)+'।'),
        step('चरण 3 - भाग करो','<br>'+K(FR(ab,b)+' = '+ans)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:K(FR(CRT(num),CRT(den))+' = '+FR(ab,b)+' = '+ans)+'।', hint:'ऊपर का घनमूल ऊपर, नीचे का घनमूल नीचे, फिर सरल करो।' }
    );
  };
})();
