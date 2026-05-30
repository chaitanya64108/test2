/* tier10 - Template 35: cb_prod (Product Under Cube Root)
   Rule: cube-root(a^3 x b^3) = cube-root(a^3) x cube-root(b^3) = a x b
   buildCbProdSolution(factors,ans)      -> factors:[{r,c}] product of perfect cubes
   buildCbProdFactorSolution(a,b)        -> identify one factor under the root
   buildCbProdMissingSolution(a,b,ans)   -> find missing perfect cube under root
   buildCbProdPropSolution(a,b)          -> product property (conceptual) */
(function(){
  var SB=window.SB; if(!SB) return;
  var K=SB.K,CRT=SB.CRT,POW=SB.POW,T=SB.T,step=SB.step,S=SB.S;

  function rootLines(f){ var s=''; for(var i=0;i<f.length;i++){ s+=(i>0?'<br>':'')+K(CRT(f[i].c)+' = '+f[i].r); } return s; }
  function rootProd(f){ var s=''; for(var i=0;i<f.length;i++){ s+=(i>0?T:'')+CRT(f[i].c); } return s; }
  function baseProd(f){ var s=''; for(var i=0;i<f.length;i++){ s+=(i>0?T:'')+f[i].r; } return s; }

  window.buildCbProdSolution=function(factors,ans){
    var rl=rootLines(factors), rp=rootProd(factors), bp=baseProd(factors);
    return S(
      { steps:[
        step('Step 1 - Key idea','<br>The cube root of a product of perfect cubes equals the product of their cube roots: '+K(rp)+'.'),
        step('Step 2 - Evaluate each cube root','<br>'+rl),
        step('Step 3 - Multiply the results','<br>'+K(bp+' = '+ans)+'.')
      ], shortcut:'Split the product, take each cube root, then multiply: '+K(bp+' = '+ans)+'.', hint:'Cube root of a product = product of the cube roots. Solve each, then multiply.' },
      { steps:[
        step('Step 1 - Mool baat','<br>Perfect cubes ke product ka cube root, unke cube roots ke product ke barabar hota hai: '+K(rp)+'.'),
        step('Step 2 - Har cube root nikalo','<br>'+rl),
        step('Step 3 - Results multiply karo','<br>'+K(bp+' = '+ans)+'.')
      ], shortcut:'Product ko todo, har cube root lo, fir multiply karo: '+K(bp+' = '+ans)+'.', hint:'Product ka cube root = cube roots ka product. Har ek solve karo, fir multiply.' },
      { steps:[
        step('चरण 1 - मुख्य बात','<br>पूर्ण घनों के गुणनफल का घनमूल, उनके घनमूलों के गुणनफल के बराबर होता है: '+K(rp)+'।'),
        step('चरण 2 - हर घनमूल निकालो','<br>'+rl),
        step('चरण 3 - परिणामों को गुणा करो','<br>'+K(bp+' = '+ans)+'।')
      ], shortcut:'गुणनफल को तोड़ो, हर घनमूल लो, फिर गुणा करो: '+K(bp+' = '+ans)+'।', hint:'गुणनफल का घनमूल = घनमूलों का गुणनफल। हर एक हल करो, फिर गुणा।' }
    );
  };

  window.buildCbProdFactorSolution=function(a,b){
    var n=a*a*a*b*b*b, ab=a*b, ca=a*a*a, cb=b*b*b;
    return S(
      { steps:[
        step('Step 1 - Use the given root','<br>'+K(CRT(n)+' = '+ab)+', so cubing back gives '+K('('+ab+')^{3} = '+n)+'.'),
        step('Step 2 - Break into perfect cubes','<br>'+K(n+' = '+POW(a,'3')+T+POW(b,'3')+' = '+ca+T+cb)+'.'),
        step('Step 3 - Pick one factor','<br>So one perfect-cube factor under the root is '+K(ca)+' (the other is '+K(cb)+').')
      ], shortcut:K(n+' = '+ca+T+cb)+', so '+K(ca)+' is one factor.', hint:'Cube the given root, then split it into the two perfect-cube factors.' },
      { steps:[
        step('Step 1 - Diye gaye root ka use','<br>'+K(CRT(n)+' = '+ab)+', toh wapas cube karne par '+K('('+ab+')^{3} = '+n)+'.'),
        step('Step 2 - Perfect cubes mein todo','<br>'+K(n+' = '+POW(a,'3')+T+POW(b,'3')+' = '+ca+T+cb)+'.'),
        step('Step 3 - Ek factor chuno','<br>Toh root ke andar ek perfect-cube factor '+K(ca)+' hai (doosra '+K(cb)+').')
      ], shortcut:K(n+' = '+ca+T+cb)+', toh '+K(ca)+' ek factor hai.', hint:'Diye gaye root ko cube karo, fir do perfect-cube factors mein todo.' },
      { steps:[
        step('चरण 1 - दिए गए root का उपयोग','<br>'+K(CRT(n)+' = '+ab)+', तो वापस घन करने पर '+K('('+ab+')^{3} = '+n)+'।'),
        step('चरण 2 - पूर्ण घनों में तोड़ो','<br>'+K(n+' = '+POW(a,'3')+T+POW(b,'3')+' = '+ca+T+cb)+'।'),
        step('चरण 3 - एक गुणनखंड चुनो','<br>तो root के अंदर एक पूर्ण-घन गुणनखंड '+K(ca)+' है (दूसरा '+K(cb)+')।')
      ], shortcut:K(n+' = '+ca+T+cb)+', तो '+K(ca)+' एक गुणनखंड है।', hint:'दिए गए root को घन करो, फिर दो पूर्ण-घन गुणनखंडों में तोड़ो।' }
    );
  };

  window.buildCbProdMissingSolution=function(a,b,ans){
    var ab=a*b, ca=a*a*a;
    return S(
      { steps:[
        step('Step 1 - Set up','<br>'+K(CRT(POW(a,'3')+T+'?')+' = '+ab)+'. Cube both sides to remove the root.'),
        step('Step 2 - Cube both sides','<br>'+K(POW(a,'3')+T+'? = ('+ab+')^{3} = '+POW(a,'3')+T+POW(b,'3'))+'.'),
        step('Step 3 - Solve for ?','<br>Divide by '+K(ca)+': '+K('? = '+POW(b,'3')+' = '+ans)+'.')
      ], shortcut:'Cube the answer, then divide out the known cube: '+K('? = '+ans)+'.', hint:'Cube both sides, then divide by the known perfect cube.' },
      { steps:[
        step('Step 1 - Set up','<br>'+K(CRT(POW(a,'3')+T+'?')+' = '+ab)+'. Dono taraf cube karo taaki root hate.'),
        step('Step 2 - Dono taraf cube karo','<br>'+K(POW(a,'3')+T+'? = ('+ab+')^{3} = '+POW(a,'3')+T+POW(b,'3'))+'.'),
        step('Step 3 - ? solve karo','<br>'+K(ca)+' se divide karo: '+K('? = '+POW(b,'3')+' = '+ans)+'.')
      ], shortcut:'Answer ko cube karo, fir known cube se divide karo: '+K('? = '+ans)+'.', hint:'Dono taraf cube karo, fir known perfect cube se divide karo.' },
      { steps:[
        step('चरण 1 - समीकरण','<br>'+K(CRT(POW(a,'3')+T+'?')+' = '+ab)+'। root हटाने के लिए दोनों ओर घन करो।'),
        step('चरण 2 - दोनों ओर घन करो','<br>'+K(POW(a,'3')+T+'? = ('+ab+')^{3} = '+POW(a,'3')+T+POW(b,'3'))+'।'),
        step('चरण 3 - ? हल करो','<br>'+K(ca)+' से भाग दो: '+K('? = '+POW(b,'3')+' = '+ans)+'।')
      ], shortcut:'उत्तर को घन करो, फिर known घन से भाग दो: '+K('? = '+ans)+'।', hint:'दोनों ओर घन करो, फिर known पूर्ण घन से भाग दो।' }
    );
  };

  window.buildCbProdPropSolution=function(a,b){
    var ab=a*b;
    return S(
      { steps:[
        step('Step 1 - Read the expression','<br>'+K(CRT(POW(a,'3'))+T+CRT(POW(b,'3'))+' = '+ab)+'.'),
        step('Step 2 - Recognise the rule','<br>This shows that a cube root of a product splits across multiplication: '+K(CRT('x')+T+CRT('y')+' = '+CRT('xy'))+'.'),
        step('Step 3 - Conclusion','<br>So the illustrated property is '+K(CRT('a')+T+CRT('b')+' = '+CRT('ab'))+'.')
      ], shortcut:K(CRT('a')+T+CRT('b')+' = '+CRT('ab'))+' (the product property of cube roots).', hint:'Two cube roots multiplied combine into a single cube root of the product.' },
      { steps:[
        step('Step 1 - Expression padho','<br>'+K(CRT(POW(a,'3'))+T+CRT(POW(b,'3'))+' = '+ab)+'.'),
        step('Step 2 - Rule pehchaano','<br>Yeh dikhata hai ki product ka cube root multiplication par split hota hai: '+K(CRT('x')+T+CRT('y')+' = '+CRT('xy'))+'.'),
        step('Step 3 - Nishkarsh','<br>Toh dikhayi gayi property hai '+K(CRT('a')+T+CRT('b')+' = '+CRT('ab'))+'.')
      ], shortcut:K(CRT('a')+T+CRT('b')+' = '+CRT('ab'))+' (cube roots ki product property).', hint:'Do cube roots multiply hokar product ke ek hi cube root mein mil jaate hain.' },
      { steps:[
        step('चरण 1 - व्यंजक पढ़ो','<br>'+K(CRT(POW(a,'3'))+T+CRT(POW(b,'3'))+' = '+ab)+'।'),
        step('चरण 2 - नियम पहचानो','<br>यह दिखाता है कि गुणनफल का घनमूल गुणा पर बंट जाता है: '+K(CRT('x')+T+CRT('y')+' = '+CRT('xy'))+'।'),
        step('चरण 3 - निष्कर्ष','<br>तो दिखाया गया गुण है '+K(CRT('a')+T+CRT('b')+' = '+CRT('ab'))+'।')
      ], shortcut:K(CRT('a')+T+CRT('b')+' = '+CRT('ab'))+' (घनमूलों का गुणनफल गुण)।', hint:'दो घनमूल गुणा होकर गुणनफल के एक ही घनमूल में मिल जाते हैं।' }
    );
  };
})();
