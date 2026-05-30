/* tier10 - Template 26: cb_decimal (Decimal Cube Root)
   buildCbDecimalSolution(r,cube,dec,decStr,ans), V1(r,ans), V2(a,b,da,db,ans), V3(a,n,ans), V4(a,dec,ans), V5(a,b,da,db) */
(function(){
  var SB=window.SB; if(!SB) return;
  var K=SB.K,CRT=SB.CRT,FR=SB.FR,POW=SB.POW,T=SB.T,step=SB.step,S=SB.S;

  window.buildCbDecimalSolution=function(r,cube,dec,decStr,ans){
    var denom=Math.round(cube/dec), droot=Math.round(Math.cbrt(denom));
    return S(
      { steps:[
        step('Step 1 - Understand','<br>A decimal cube root splits into two easy parts: the cube root of the top number, and the cube root of the power of ten at the bottom.'),
        step('Step 2 - Write as a fraction','<br>'+K(decStr+' = '+FR(cube,denom))+'.'),
        step('Step 3 - Cube root of each part','<br>'+K(CRT(cube)+' = '+r)+' and '+K(CRT(denom)+' = '+droot)+'.'),
        step('Step 4 - Divide','<br>'+K(FR(r,droot)+' = '+ans)+'.')
      ], shortcut:K(CRT(decStr)+' = '+ans)+'.', hint:'Cube root the top number and the power of ten separately, then divide.' },
      { steps:[
        step('Step 1 - Samjho','<br>Decimal cube root do aasaan hisson me bat-ta hai: upar wale number ka cube root, aur neeche wale power-of-ten ka cube root.'),
        step('Step 2 - Fraction me likho','<br>'+K(decStr+' = '+FR(cube,denom))+'.'),
        step('Step 3 - Har part ka cube root','<br>'+K(CRT(cube)+' = '+r)+' aur '+K(CRT(denom)+' = '+droot)+'.'),
        step('Step 4 - Divide karo','<br>'+K(FR(r,droot)+' = '+ans)+'.')
      ], shortcut:K(CRT(decStr)+' = '+ans)+'.', hint:'Upar ka number aur power-of-ten alag-alag cube root karo, fir divide.' },
      { steps:[
        step('चरण 1 - समझो','<br>दशमलव घनमूल दो आसान हिस्सों में बँटता है: ऊपर वाली संख्या का घनमूल, और नीचे वाले दस-की-घात का घनमूल।'),
        step('चरण 2 - भिन्न में लिखो','<br>'+K(decStr+' = '+FR(cube,denom))+'।'),
        step('चरण 3 - हर भाग का घनमूल','<br>'+K(CRT(cube)+' = '+r)+' और '+K(CRT(denom)+' = '+droot)+'।'),
        step('चरण 4 - भाग करो','<br>'+K(FR(r,droot)+' = '+ans)+'।')
      ], shortcut:K(CRT(decStr)+' = '+ans)+'।', hint:'ऊपर की संख्या और दस-की-घात अलग-अलग घनमूल करो, फिर भाग दो।' }
    );
  };

  window.buildCbDecimalV1Solution=function(r,ans){
    var cr=r/10;
    return S(
      { steps:[
        step('Step 1 - Understand','<br>To find the original number, cube its given cube root.'),
        step('Step 2 - Cube the cube root','<br>'+K('('+cr+')^{3} = '+ans)+'.'),
        step('Step 3 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K('('+cr+')^{3} = '+ans)+'.', hint:'The original number is the cube of its cube root.' },
      { steps:[
        step('Step 1 - Samjho','<br>Original number nikalne ke liye uske diye gaye cube root ko cube karo.'),
        step('Step 2 - Cube root ko cube karo','<br>'+K('('+cr+')^{3} = '+ans)+'.'),
        step('Step 3 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K('('+cr+')^{3} = '+ans)+'.', hint:'Original number, uske cube root ka cube hota hai.' },
      { steps:[
        step('चरण 1 - समझो','<br>मूल संख्या निकालने के लिए उसके दिए गए घनमूल का घन करो।'),
        step('चरण 2 - घनमूल का घन करो','<br>'+K('('+cr+')^{3} = '+ans)+'।'),
        step('चरण 3 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:K('('+cr+')^{3} = '+ans)+'।', hint:'मूल संख्या, उसके घनमूल का घन होती है