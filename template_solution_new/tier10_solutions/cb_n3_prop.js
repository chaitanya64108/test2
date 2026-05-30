/* tier10 - Template 36: cb_n3_prop (cube-root of n^3 property)
   buildCbN3Solution(n,cube)          -> cube-root(n^3) = n (works for negative n)
   buildCbN3SumSolution(a,b,op,ans)   -> combine cube-root(a^3) op cube-root(b^3)
   buildCbN3TfSolution(n)             -> true/false: cube-root(n^3) always = n */
(function(){
  var SB=window.SB; if(!SB) return;
  var K=SB.K,CRT=SB.CRT,POW=SB.POW,step=SB.step,S=SB.S;

  function ns(n){ return (n<0)?'('+n+')':String(n); }

  window.buildCbN3Solution=function(n,cube){
    var p=ns(n);
    return S(
      { steps:[
        step('Step 1 - Key idea','<br>Cube root and cubing are opposite operations, so a cube root cancels a cube: '+K(CRT(POW('n','3'))+' = n')+'.'),
        step('Step 2 - Verify','<br>'+K(p+' '+SB.T.replace(/\\/g,SB.B)+' '+p+' '+SB.T.replace(/\\/g,SB.B)+' '+p+' = '+cube)+'.'),
        step('Step 3 - Answer','<br>So '+K(CRT(cube)+' = '+n)+'.')
      ], shortcut:'A cube root undoes a cube, so '+K(CRT(POW(n,'3'))+' = '+n)+'.', hint:'The cube root of a perfect cube is just its base.' },
      { steps:[
        step('Step 1 - Mool baat','<br>Cube root aur cubing ulte operations hain, isliye cube root cube ko cancel kar deta hai: '+K(CRT(POW('n','3'))+' = n')+'.'),
        step('Step 2 - Verify karo','<br>'+K(p+' '+SB.T.replace(/\\/g,SB.B)+' '+p+' '+SB.T.replace(/\\/g,SB.B)+' '+p+' = '+cube)+'.'),
        step('Step 3 - Answer','<br>Toh '+K(CRT(cube)+' = '+n)+'.')
      ], shortcut:'Cube root cube ko undo karta hai, toh '+K(CRT(POW(n,'3'))+' = '+n)+'.', hint:'Perfect cube ka cube root sirf uska base hota hai.' },
      { steps:[
        step('चरण 1 - मुख्य बात','<br>घनमूल और घन बनाना उलटे संक्रियाएँ हैं, इसलिए घनमूल घन को रद्द कर देता है: '+K(CRT(POW('n','3'))+' = n')+'।'),
        step('चरण 2 - पुष्टि करो','<br>'+K(p+' '+SB.T.replace(/\\/g,SB.B)+' '+p+' '+SB.T.replace(/\\/g,SB.B)+' '+p+' = '+cube)+'।'),
        step('चरण 3 - उत्तर','<br>तो '+K(CRT(cube)+' = '+n)+'।')
      ], shortcut:'घनमूल घन को undo करता है, तो '+K(CRT(POW(n,'3'))+' = '+n)+'।', hint:'पूर्ण घन का घनमूल सिर्फ़ उसका आधार होता है।' }
    );
  };

  window.buildCbN3SumSolution=function(a,b,op,ans){
    return S(
      { steps:[
        step('Step 1 - Key idea','<br>The cube root of a perfect cube is its base, so evaluate each term first.'),
        step('Step 2 - Evaluate each','<br>'+K(CRT(POW(a,'3'))+' = '+a)+' and '+K(CRT(POW(b,'3'))+' = '+b)+'.'),
        step('Step 3 - Combine','<br>'+K(a+' '+op+' '+b+' = '+ans)+'.')
      ], shortcut:K(CRT(POW(a,'3'))+' '+op+' '+CRT(POW(b,'3'))+' = '+a+' '+op+' '+b+' = '+ans)+'.', hint:'Replace each cube root with its base, then add or subtract.' },
      { steps:[
        step('Step 1 - Mool baat','<br>Perfect cube ka cube root uska base hota hai, toh pehle har term nikalo.'),
        step('Step 2 - Har ek nikalo','<br>'+K(CRT(POW(a,'3'))+' = '+a)+' aur '+K(CRT(POW(b,'3'))+' = '+b)+'.'),
        step('Step 3 - Combine karo','<br>'+K(a+' '+op+' '+b+' = '+ans)+'.')
      ], shortcut:K(CRT(POW(a,'3'))+' '+op+' '+CRT(POW(b,'3'))+' = '+a+' '+op+' '+b+' = '+ans)+'.', hint:'Har cube root ko base se badlo, fir add/subtract karo.' },
      { steps:[
        step('चरण 1 - मुख्य बात','<br>पूर्ण घन का घनमूल उसका आधार होता है, तो पहले हर पद निकालो।'),
        step('चरण 2 - हर एक निकालो','<br>'+K(CRT(POW(a,'3'))+' = '+a)+' और '+K(CRT(POW(b,'3'))+' = '+b)+'।'),
        step('चरण 3 - संयोजित करो','<br>'+K(a+' '+op+' '+b+' = '+ans)+'।')
      ], shortcut:K(CRT(POW(a,'3'))+' '+op+' '+CRT(POW(b,'3'))+' = '+a+' '+op+' '+b+' = '+ans)+'।', hint:'हर घनमूल को आधार से बदलो, फिर जोड़ो/घटाओ।' }
    );
  };

  window.buildCbN3TfSolution=function(n){
    return S(
      { steps:[
        step('Step 1 - Test the rule','<br>'+K(CRT(POW(n,'3'))+' = '+n)+', because cubing then taking the cube root returns the original number.'),
        step('Step 2 - Check signs','<br>It also holds for negatives, e.g. '+K(CRT('(-'+Math.abs(n)+')^{3}')+' = -'+Math.abs(n))+'.'),
        step('Step 3 - Conclusion','<br>So '+K(CRT(POW('n','3'))+' = n')+' is always True.')
      ], shortcut:'Cube root undoes cubing for every real number, so the statement is True.', hint:'Cube root is the exact inverse of cubing, even for negative numbers.' },
      { steps:[
        step('Step 1 - Rule test karo','<br>'+K(CRT(POW(n,'3'))+' = '+n)+', kyunki cube karke cube root lene par original number wapas aata hai.'),
        step('Step 2 - Signs check karo','<br>Negatives ke liye bhi sahi hai, jaise '+K(CRT('(-'+Math.abs(n)+')^{3}')+' = -'+Math.abs(n))+'.'),
        step('Step 3 - Nishkarsh','<br>Toh '+K(CRT(POW('n','3'))+' = n')+' hamesha True hai.')
      ], shortcut:'Cube root har real number ke liye cubing ko undo karta hai, toh statement True hai.', hint:'Cube root, cubing ka exact inverse hai, negative numbers ke liye bhi.' },
      { steps:[
        step('चरण 1 - नियम जाँचो','<br>'+K(CRT(POW(n,'3'))+' = '+n)+', क्योंकि घन करके घनमूल लेने पर मूल संख्या वापस आती है।'),
        step('चरण 2 - चिह्न जाँचो','<br>ऋणात्मक के लिए भी सही है, जैसे '+K(CRT('(-'+Math.abs(n)+')^{3}')+' = -'+Math.abs(n))+'।'),
        step('चरण 3 - निष्कर्ष','<br>तो '+K(CRT(POW('n','3'))+' = n')+' सदैव True है।')
      ], shortcut:'घनमूल हर वास्तविक संख्या के लिए cubing को undo करता है, तो कथन True है।', hint:'घनमूल, cubing का ठीक उलटा है, ऋणात्मक संख्याओं के लिए भी।' }
    );
  };
})();
