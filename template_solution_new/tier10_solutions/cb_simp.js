/* tier10 - Template 34: cb_simp (Cube Simplification)
   buildCbSimpSolution(parts,ans)             -> add/subtract cube roots of perfect cubes
   buildCbSimpProdSolution(a,b,ans)           -> multiply two cube roots
   buildCbSimpMissingSolution(a,cubeA,sum,ans)-> find missing cube root term
   parts: [{op:'+'|'-', r:base, c:cube}] (first item's op ignored) */
(function(){
  var SB=window.SB; if(!SB) return;
  var K=SB.K,CRT=SB.CRT,T=SB.T,step=SB.step,S=SB.S;

  function evalLines(parts){ var s=''; for(var i=0;i<parts.length;i++){ s+=(i>0?'<br>':'')+K(CRT(parts[i].c)+' = '+parts[i].r); } return s; }
  function combExpr(parts){ var s=''; for(var i=0;i<parts.length;i++){ s+=(i===0?String(parts[i].r):' '+parts[i].op+' '+parts[i].r); } return s; }

  window.buildCbSimpSolution=function(parts,ans){
    var ev=evalLines(parts), cb=combExpr(parts);
    return S(
      { steps:[
        step('Step 1 - Key idea','<br>The cube root of a perfect cube is just its base. Replace each cube root with its base, then combine.'),
        step('Step 2 - Evaluate each cube root','<br>'+ev),
        step('Step 3 - Combine in order','<br>'+K(cb+' = '+ans)+'.')
      ], shortcut:'Each cube root becomes its base, then add/subtract: '+K(cb+' = '+ans)+'.', hint:'Cube root of a perfect cube = its base. Replace, then add or subtract left to right.' },
      { steps:[
        step('Step 1 - Mool baat','<br>Perfect cube ka cube root sirf uska base hota hai. Har cube root ko uske base se badlo, fir combine karo.'),
        step('Step 2 - Har cube root nikalo','<br>'+ev),
        step('Step 3 - Order mein combine karo','<br>'+K(cb+' = '+ans)+'.')
      ], shortcut:'Har cube root apna base ban jaata hai, fir add/subtract: '+K(cb+' = '+ans)+'.', hint:'Perfect cube ka cube root = uska base. Badlo, fir left se right add/subtract karo.' },
      { steps:[
        step('चरण 1 - मुख्य बात','<br>पूर्ण घन का घनमूल सिर्फ़ उसका आधार होता है। हर घनमूल को उसके आधार से बदलो, फिर संयोजित करो।'),
        step('चरण 2 - हर घनमूल निकालो','<br>'+ev),
        step('चरण 3 - क्रम में जोड़ो/घटाओ','<br>'+K(cb+' = '+ans)+'।')
      ], shortcut:'हर घनमूल अपना आधार बन जाता है, फिर जोड़/घटाव: '+K(cb+' = '+ans)+'।', hint:'पूर्ण घन का घनमूल = उसका आधार। बदलो, फिर बाएँ से दाएँ जोड़ो/घटाओ।' }
    );
  };

  window.buildCbSimpProdSolution=function(a,b,ans){
    return S(
      { steps:[
        step('Step 1 - Key idea','<br>The cube root of a perfect cube is its base.'),
        step('Step 2 - Evaluate each','<br>'+K(CRT(a*a*a)+' = '+a)+' and '+K(CRT(b*b*b)+' = '+b)+'.'),
        step('Step 3 - Multiply','<br>'+K(a+T+b+' = '+ans)+'.')
      ], shortcut:K(CRT(a*a*a)+T+CRT(b*b*b)+' = '+a+T+b+' = '+ans)+'.', hint:'Turn each cube root into its base, then multiply.' },
      { steps:[
        step('Step 1 - Mool baat','<br>Perfect cube ka cube root uska base hota hai.'),
        step('Step 2 - Har ek nikalo','<br>'+K(CRT(a*a*a)+' = '+a)+' aur '+K(CRT(b*b*b)+' = '+b)+'.'),
        step('Step 3 - Multiply karo','<br>'+K(a+T+b+' = '+ans)+'.')
      ], shortcut:K(CRT(a*a*a)+T+CRT(b*b*b)+' = '+a+T+b+' = '+ans)+'.', hint:'Har cube root ko base banao, fir multiply karo.' },
      { steps:[
        step('चरण 1 - मुख्य बात','<br>पूर्ण घन का घनमूल उसका आधार होता है।'),
        step('चरण 2 - हर एक निकालो','<br>'+K(CRT(a*a*a)+' = '+a)+' और '+K(CRT(b*b*b)+' = '+b)+'।'),
        step('चरण 3 - गुणा करो','<br>'+K(a+T+b+' = '+ans)+'।')
      ], shortcut:K(CRT(a*a*a)+T+CRT(b*b*b)+' = '+a+T+b+' = '+ans)+'।', hint:'हर घनमूल को आधार बनाओ, फिर गुणा करो।' }
    );
  };

  window.buildCbSimpMissingSolution=function(a,cubeA,sum,ans){
    return S(
      { steps:[
        step('Step 1 - Evaluate the cube root','<br>'+K(CRT(cubeA)+' = '+a)+'.'),
        step('Step 2 - Set up the equation','<br>'+K(a+' + ? = '+sum)+'.'),
        step('Step 3 - Solve for the blank','<br>'+K('? = '+sum+' - '+a+' = '+ans)+'.')
      ], shortcut:K('? = '+sum+' - '+a+' = '+ans)+'.', hint:'Replace the cube root with its base, then subtract from the total.' },
      { steps:[
        step('Step 1 - Cube root nikalo','<br>'+K(CRT(cubeA)+' = '+a)+'.'),
        step('Step 2 - Equation banao','<br>'+K(a+' + ? = '+sum)+'.'),
        step('Step 3 - Blank solve karo','<br>'+K('? = '+sum+' - '+a+' = '+ans)+'.')
      ], shortcut:K('? = '+sum+' - '+a+' = '+ans)+'.', hint:'Cube root ko base se badlo, fir total mein se ghatao.' },
      { steps:[
        step('चरण 1 - घनमूल निकालो','<br>'+K(CRT(cubeA)+' = '+a)+'।'),
        step('चरण 2 - समीकरण बनाओ','<br>'+K(a+' + ? = '+sum)+'।'),
        step('चरण 3 - रिक्त स्थान हल करो','<br>'+K('? = '+sum+' - '+a+' = '+ans)+'।')
      ], shortcut:K('? = '+sum+' - '+a+' = '+ans)+'।', hint:'घनमूल को आधार से बदलो, फिर कुल में से घटाओ।' }
    );
  };
})();
