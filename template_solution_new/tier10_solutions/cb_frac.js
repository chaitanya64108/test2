/* tier10 - Template 27: cb_frac (Fraction Cube Root)
   buildCbFracSolution(cN,cD,ans,n,d), V1(n,d,cN,cD,ans), V2(a,b,c,dd,ans), V3(sn,sd,cN,cD,ans), V4(n,d,cN,cD,ans), V5(a,b,cN,cD,ans) */
(function(){
  var SB=window.SB; if(!SB) return;
  var K=SB.K,CRT=SB.CRT,FR=SB.FR,POW=SB.POW,T=SB.T,step=SB.step,S=SB.S;
  function FX(s){ if(typeof s==='string'&&s.indexOf('/')>=0){var p=s.split('/');return FR(p[0],p[1]);} return ''+s; }

  window.buildCbFracSolution=function(cN,cD,ans,n,d){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>The cube root of a fraction is the cube root of the top divided by the cube root of the bottom.'),
        step('Step 2 - Split top and bottom','<br>'+K(CRT(FR(cN,cD))+' = '+FR(CRT(cN),CRT(cD)))+'.'),
        step('Step 3 - Cube root of each part','<br>'+K(CRT(cN)+' = '+n)+' and '+K(CRT(cD)+' = '+d)+'.'),
        step('Step 4 - Final answer','<br>'+K(FR(n,d)+' = '+FX(ans))+'.')
      ], shortcut:K(CRT(FR(cN,cD))+' = '+FX(ans))+'.', hint:'Cube root the numerator and the denominator separately.' },
      { steps:[
        step('Step 1 - Samjho','<br>Fraction ka cube root = upar ka cube root divided by neeche ka cube root.'),
        step('Step 2 - Upar-neeche alag karo','<br>'+K(CRT(FR(cN,cD))+' = '+FR(CRT(cN),CRT(cD)))+'.'),
        step('Step 3 - Har part ka cube root','<br>'+K(CRT(cN)+' = '+n)+' aur '+K(CRT(cD)+' = '+d)+'.'),
        step('Step 4 - Final answer','<br>'+K(FR(n,d)+' = '+FX(ans))+'.')
      ], shortcut:K(CRT(FR(cN,cD))+' = '+FX(ans))+'.', hint:'Numerator aur denominator ko alag-alag cube root karo.' },
      { steps:[
        step('चरण 1 - समझो','<br>भिन्न का घनमूल = ऊपर का घनमूल भाग नीचे का घनमूल।'),
        step('चरण 2 - ऊपर-नीचे अलग करो','<br>'+K(CRT(FR(cN,cD))+' = '+FR(CRT(cN),CRT(cD)))+'।'),
        step('चरण 3 - हर भाग का घनमूल','<br>'+K(CRT(cN)+' = '+n)+' और '+K(CRT(cD)+' = '+d)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(FR(n,d)+' = '+FX(ans))+'।')
      ], shortcut:K(CRT(FR(cN,cD))+' = '+FX(ans))+'।', hint:'अंश और हर को अलग-अलग घनमूल करो।' }
    );
  };

  window.buildCbFracV1Solution=function(n,d,cN,cD,ans){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>To cube a fraction, cube the top and the bottom separately.'),
        step('Step 2 - Cube each part','<br>'+K(POW('('+FR(n,d)+')','3')+' = '+FR(POW(n,'3'),POW(d,'3')))+'.'),
        step('Step 3 - Compute','<br>'+K(FR(n+'^{3}',d+'^{3}')+' = '+FR(cN,cD))+'.'),
        step('Step 4 - Final answer','<br>'+K(FX(ans))+'.')
      ], shortcut:K(POW('('+FR(n,d)+')','3')+' = '+FR(cN,cD))+'.', hint:'Cube the numerator and denominator separately.' },
      { steps:[
        step('Step 1 - Samjho','<br>Fraction ka cube karne ke liye, upar aur neeche dono ko alag cube karo.'),
        step('Step 2 - Har part ko cube karo','<br>'+K(POW('('+FR(n,d)+')','3')+' = '+FR(POW(n,'3'),POW(d,'3')))+'.'),
        step('Step 3 - Nikalo','<br>'+K(FR(n+'^{3}',d+'^{3}')+' = '+FR(cN,cD))+'.'),
        step('Step 4 - Final answer','<br>'+K(FX(ans))+'.')
      ], shortcut:K(POW('('+FR(n,d)+')','3')+' = '+FR(cN,cD))+'.', hint:'Numerator aur denominator ko alag-alag cube karo.' },
      { steps:[
        step('चरण 1 - समझो','<br>भिन्न का घन करने के लिए, ऊपर और नीचे दोनों का अलग घन करो।'),
        step('चरण 2 - हर भाग का घन करो','<br>'+K(POW('('+FR(n,d)+')','3')+' = '+FR(POW(n,'3'),POW(d,'3')))+'।'),
        step('चरण 3 - निकालो','<br>'+K(FR(n+'^{3}',d+'^{3}')+' = '+FR(cN,cD))+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(FX(ans))+'।')
      ], shortcut:K(POW('('+FR(n,d)+')','3')+' = '+FR(cN,cD))+'।', hint:'अंश और हर का अलग-अलग घन करो।' }
    );
  };

  window.buildCbFracV2Solution=function(a,b,c,dd,ans){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Take each cube root first, then multiply the two fractions.'),
        step('Step 2 - Each cube root','<br>'+K(CRT(FR(a*a*a,b*b*b))+' = '+FR(a,b))+' and '+K(CRT(FR(c*c*c,dd*dd*dd))+' = '+FR(c,dd))+'.'),
        step('Step 3 - Multiply','<br>'+K(FR(a,b)+T+FR(c,dd)+' = '+FR(a*c,b*dd))+'.'),
        step('Step 4 - Final answer','<br>'+K(FX(ans))+'.')
      ], shortcut:K(FR(a,b)+T+FR(c,dd)+' = '+FX(ans))+'.', hint:'Cube root each fraction, then multiply across.' },
      { steps:[
        step('Step 1 - Samjho','<br>Pehle har cube root nikalo, fir dono fractions ko multiply karo.'),
        step('Step 2 - Har cube root','<br>'+K(CRT(FR(a*a*a,b*b*b))+' = '+FR(a,b))+' aur '+K(CRT(FR(c*c*c,dd*dd*dd))+' = '+FR(c,dd))+'.'),
        step('Step 3 - Multiply karo','<br>'+K(FR(a,b)+T+FR(c,dd)+' = '+FR(a*c,b*dd))+'.'),
        step('Step 4 - Final answer','<br>'+K(FX(ans))+'.')
      ], shortcut:K(FR(a,b)+T+FR(c,dd)+' = '+FX(ans))+'.', hint:'Har fraction ka cube root nikalo, fir multiply karo.' },
      { steps:[
        step('चरण 1 - समझो','<br>पहले हर घनमूल निकालो, फिर दोनों भिन्नों को गुणा करो।'),
        step('चरण 2 - हर घनमूल','<br>'+K(CRT(FR(a*a*a,b*b*b))+' = '+FR(a,b))+' और '+K(CRT(FR(c*c*c,dd*dd*dd))+' = '+FR(c,dd))+'।'),
        step('चरण 3 - गुणा करो','<br>'+K(FR(a,b)+T+FR(c,dd)+' = '+FR(a*c,b*dd))+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(FX(ans))+'।')
      ], shortcut:K(FR(a,b)+T+FR(c,dd)+' = '+FX(ans))+'।', hint:'हर भिन्न का घनमूल निकालो, फिर गुणा करो।' }
    );
  };

  window.buildCbFracV3Solution=function(sn,sd,cN,cD,ans){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>The same factor on the top and bottom cancels, leaving a simpler fraction.'),
        step('Step 2 - Cancel the common factor','<br>'+K(FR(cN,cD)+' = '+FR(sn+'^{3}',sd+'^{3}'))+' (the common factor cancels).'),
        step('Step 3 - Cube root each part','<br>'+K(CRT(sn+'^{3}')+' = '+sn)+' and '+K(CRT(sd+'^{3}')+' = '+sd)+'.'),
        step('Step 4 - Final answer','<br>'+K(FR(sn,sd)+' = '+FX(ans))+'.')
      ], shortcut:K(CRT(FR(cN,cD))+' = '+FX(ans))+'.', hint:'Cancel the common factor first, then take cube roots.' },
      { steps:[
        step('Step 1 - Samjho','<br>Upar aur neeche ka same factor cancel ho jaata hai, fraction simple ho jaati hai.'),
        step('Step 2 - Common factor cancel karo','<br>'+K(FR(cN,cD)+' = '+FR(sn+'^{3}',sd+'^{3}'))+' (common factor cancel).'),
        step('Step 3 - Har part ka cube root','<br>'+K(CRT(sn+'^{3}')+' = '+sn)+' aur '+K(CRT(sd+'^{3}')+' = '+sd)+'.'),
        step('Step 4 - Final answer','<br>'+K(FR(sn,sd)+' = '+FX(ans))+'.')
      ], shortcut:K(CRT(FR(cN,cD))+' = '+FX(ans))+'.', hint:'Pehle common factor cancel karo, fir cube root lo.' },
      { steps:[
        step('चरण 1 - समझो','<br>ऊपर और नीचे का एक जैसा गुणनखंड कट जाता है, भिन्न सरल हो जाती है।'),
        step('चरण 2 - उभयनिष्ठ गुणनखंड काटो','<br>'+K(FR(cN,cD)+' = '+FR(sn+'^{3}',sd+'^{3}'))+' (उभयनिष्ठ गुणनखंड कटा)।'),
        step('चरण 3 - हर भाग का घनमूल','<br>'+K(CRT(sn+'^{3}')+' = '+sn)+' और '+K(CRT(sd+'^{3}')+' = '+sd)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(FR(sn,sd)+' = '+FX(ans))+'।')
      ], shortcut:K(CRT(FR(cN,cD))+' = '+FX(ans))+'।', hint:'पहले उभयनिष्ठ गुणनखंड काटो, फिर घनमूल लो।' }
    );
  };

  window.buildCbFracV4Solution=function(n,d,cN,cD,ans){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Cubing and cube-rooting undo each other, so cubing a cube root gives back the original.'),
        step('Step 2 - The cube root','<br>'+K(CRT(FR(cN,cD))+' = '+FR(n,d))+'.'),
        step('Step 3 - Cube it back','<br>'+K(POW('('+FR(n,d)+')','3')+' = '+FR(cN,cD))+'.'),
        step('Step 4 - Final answer','<br>'+K(FX(ans))+'.')
      ], shortcut:K(POW('('+CRT(FR(cN,cD))+')','3')+' = '+FR(cN,cD))+'.', hint:'Cube of a cube root returns the original number.' },
      { steps:[
        step('Step 1 - Samjho','<br>Cube aur cube root ek dusre ko undo karte hain, isliye cube root ka cube wapas original deta hai.'),
        step('Step 2 - Cube root','<br>'+K(CRT(FR(cN,cD))+' = '+FR(n,d))+'.'),
        step('Step 3 - Wapas cube karo','<br>'+K(POW('('+FR(n,d)+')','3')+' = '+FR(cN,cD))+'.'),
        step('Step 4 - Final answer','<br>'+K(FX(ans))+'.')
      ], shortcut:K(POW('('+CRT(FR(cN,cD))+')','3')+' = '+FR(cN,cD))+'.', hint:'Cube root ka cube wapas original number deta hai.' },
      { steps:[
        step('चरण 1 - समझो','<br>घन और घनमूल एक दूसरे को रद्द करते हैं, इसलिए घनमूल का घन वापस मूल देता है।'),
        step('चरण 2 - घनमूल','<br>'+K(CRT(FR(cN,cD))+' = '+FR(n,d))+'।'),
        step('चरण 3 - वापस घन करो','<br>'+K(POW('('+FR(n,d)+')','3')+' = '+FR(cN,cD))+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(FX(ans))+'।')
      ], shortcut:K(POW('('+CRT(FR(cN,cD))+')','3')+' = '+FR(cN,cD))+'।', hint:'घनमूल का घन वापस मूल संख्या देता है।' }
    );
  };

  window.buildCbFracV5Solution=function(a,b,cN,cD,ans){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Match the denominators on both sides to find the missing number under the cube root.'),
        step('Step 2 - Cube root of the top','<br>'+K(CRT(cN)+' = '+a)+', so the left side is '+K(FR(a,CRT('?')))+'.'),
        step('Step 3 - Compare with '+K(FR(a,b)),'<br>For the bottoms to match, '+K(CRT('?')+' = '+b)+', so '+K('? = '+POW(b,'3')+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(FX(ans))+'.')
      ], shortcut:K('? = '+POW(b,'3')+' = '+ans)+'.', hint:'The denominator b must be the cube root of the unknown, so the unknown is b cubed.' },
      { steps:[
        step('Step 1 - Samjho','<br>Dono taraf ke denominator match karke cube root ke neeche ka missing number nikalo.'),
        step('Step 2 - Upar ka cube root','<br>'+K(CRT(cN)+' = '+a)+', toh left side '+K(FR(a,CRT('?')))+' hai.'),
        step('Step 3 - '+K(FR(a,b))+' se compare','<br>Neeche match karne ke liye, '+K(CRT('?')+' = '+b)+', toh '+K('? = '+POW(b,'3')+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(FX(ans))+'.')
      ], shortcut:K('? = '+POW(b,'3')+' = '+ans)+'.', hint:'Denominator b unknown ka cube root hai, toh unknown b ka cube hai.' },
      { steps:[
        step('चरण 1 - समझो','<br>दोनों ओर के हर को मिलाकर घनमूल के नीचे की गायब संख्या निकालो।'),
        step('चरण 2 - ऊपर का घनमूल','<br>'+K(CRT(cN)+' = '+a)+', तो बाईं ओर '+K(FR(a,CRT('?')))+' है।'),
        step('चरण 3 - '+K(FR(a,b))+' से तुलना','<br>नीचे मिलान के लिए, '+K(CRT('?')+' = '+b)+', तो '+K('? = '+POW(b,'3')+' = '+ans)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(FX(ans))+'।')
      ], shortcut:K('? = '+POW(b,'3')+' = '+ans)+'।', hint:'हर b अज्ञात का घनमूल है, तो अज्ञात b का घन है।' }
    );
  };
})();
