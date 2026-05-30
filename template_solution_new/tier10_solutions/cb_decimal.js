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
        step('Step 1 - Samjho','<br>Decimal cube root do hisson me bat-ta hai: upar wale number ka cube root, aur neeche wale power-of-ten ka cube root.'),
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
      ], shortcut:K('('+cr+')^{3} = '+ans)+'।', hint:'मूल संख्या, उसके घनमूल का घन होती है।' }
    );
  };

  window.buildCbDecimalV2Solution=function(a,b,da,db,ans){
    var ra=a/10, rb=b/10;
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Find each decimal cube root, then add them.'),
        step('Step 2 - Each cube root','<br>'+K(CRT(da)+' = '+ra)+' and '+K(CRT(db)+' = '+rb)+'.'),
        step('Step 3 - Add','<br>'+K(ra+' + '+rb+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(CRT(da)+' + '+CRT(db)+' = '+ans)+'.', hint:'Find both decimal cube roots, then add.' },
      { steps:[
        step('Step 1 - Samjho','<br>Har decimal cube root nikalo, fir jodo.'),
        step('Step 2 - Har cube root','<br>'+K(CRT(da)+' = '+ra)+' aur '+K(CRT(db)+' = '+rb)+'.'),
        step('Step 3 - Jodo','<br>'+K(ra+' + '+rb+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(CRT(da)+' + '+CRT(db)+' = '+ans)+'.', hint:'Dono decimal cube root nikalo, fir jodo.' },
      { steps:[
        step('चरण 1 - समझो','<br>हर दशमलव घनमूल निकालो, फिर जोड़ो।'),
        step('चरण 2 - हर घनमूल','<br>'+K(CRT(da)+' = '+ra)+' और '+K(CRT(db)+' = '+rb)+'।'),
        step('चरण 3 - जोड़ो','<br>'+K(ra+' + '+rb+' = '+ans)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:K(CRT(da)+' + '+CRT(db)+' = '+ans)+'।', hint:'दोनों दशमलव घनमूल निकालो, फिर जोड़ो।' }
    );
  };

  window.buildCbDecimalV3Solution=function(a,n,ans){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>This is the cube root of a large number. Write it as a small cube times a power of ten.'),
        step('Step 2 - Break it up','<br>'+K(n+' = '+POW(a,'3')+T+POW(100,'3'))+', so '+K(n+' = '+POW('('+a+T+100+')','3'))+'.'),
        step('Step 3 - Take the cube root','<br>'+K(CRT(n)+' = '+a+T+100+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(CRT(n)+' = '+ans)+'.', hint:'A million is 100 cubed, so the cube root of a million is 100.' },
      { steps:[
        step('Step 1 - Samjho','<br>Ye ek bade number ka cube root hai. Ise chhote cube aur power-of-ten ke roop me likho.'),
        step('Step 2 - Tod-do','<br>'+K(n+' = '+POW(a,'3')+T+POW(100,'3'))+', toh '+K(n+' = '+POW('('+a+T+100+')','3'))+'.'),
        step('Step 3 - Cube root lo','<br>'+K(CRT(n)+' = '+a+T+100+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(CRT(n)+' = '+ans)+'.', hint:'Das lakh = 100 ka cube, isliye das lakh ka cube root 100 hai.' },
      { steps:[
        step('चरण 1 - समझो','<br>यह एक बड़ी संख्या का घनमूल है। इसे छोटे घन और दस-की-घात के रूप में लिखो।'),
        step('चरण 2 - तोड़ो','<br>'+K(n+' = '+POW(a,'3')+T+POW(100,'3'))+', तो '+K(n+' = '+POW('('+a+T+100+')','3'))+'।'),
        step('चरण 3 - घनमूल लो','<br>'+K(CRT(n)+' = '+a+T+100+' = '+ans)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:K(CRT(n)+' = '+ans)+'।', hint:'दस लाख = 100 का घन, इसलिए दस लाख का घनमूल 100 है।' }
    );
  };

  window.buildCbDecimalV4Solution=function(a,dec,ans){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Split into the cube root of the top number and the cube root of 1000.'),
        step('Step 2 - Write as a fraction','<br>'+K(dec+' = '+FR(a*a*a,1000))+'.'),
        step('Step 3 - Cube root of each part','<br>'+K(CRT(a*a*a)+' = '+a)+' and '+K(CRT(1000)+' = 10')+'.'),
        step('Step 4 - Divide','<br>'+K(FR(a,10)+' = '+ans)+'.')
      ], shortcut:K(CRT(dec)+' = '+ans)+'.', hint:'Cube root of 1000 is 10; divide the top cube root by 10.' },
      { steps:[
        step('Step 1 - Samjho','<br>Upar ke number ka cube root aur 1000 ka cube root alag karo.'),
        step('Step 2 - Fraction me likho','<br>'+K(dec+' = '+FR(a*a*a,1000))+'.'),
        step('Step 3 - Har part ka cube root','<br>'+K(CRT(a*a*a)+' = '+a)+' aur '+K(CRT(1000)+' = 10')+'.'),
        step('Step 4 - Divide karo','<br>'+K(FR(a,10)+' = '+ans)+'.')
      ], shortcut:K(CRT(dec)+' = '+ans)+'.', hint:'1000 ka cube root 10 hai; upar wale cube root ko 10 se divide karo.' },
      { steps:[
        step('चरण 1 - समझो','<br>ऊपर की संख्या का घनमूल और 1000 का घनमूल अलग करो।'),
        step('चरण 2 - भिन्न में लिखो','<br>'+K(dec+' = '+FR(a*a*a,1000))+'।'),
        step('चरण 3 - हर भाग का घनमूल','<br>'+K(CRT(a*a*a)+' = '+a)+' और '+K(CRT(1000)+' = 10')+'।'),
        step('चरण 4 - भाग करो','<br>'+K(FR(a,10)+' = '+ans)+'।')
      ], shortcut:K(CRT(dec)+' = '+ans)+'।', hint:'1000 का घनमूल 10 है; ऊपर वाले घनमूल को 10 से भाग दो।' }
    );
  };

  window.buildCbDecimalV5Solution=function(a,b,da,db){
    var ra=a/10, rb=b/10, bigger=Math.max(ra,rb), smaller=Math.min(ra,rb);
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Find both decimal cube roots, then compare them.'),
        step('Step 2 - Each cube root','<br>'+K(CRT(da)+' = '+ra)+' and '+K(CRT(db)+' = '+rb)+'.'),
        step('Step 3 - Compare','<br>Since '+K(bigger)+' is more than '+K(smaller)+', the greater value is '+K(bigger)+'.'),
        step('Step 4 - Final answer','<br>'+K(bigger)+'.')
      ], shortcut:'Compare the two cube roots; the larger is '+K(bigger)+'.', hint:'Find both cube roots first, then see which decimal is bigger.' },
      { steps:[
        step('Step 1 - Samjho','<br>Dono decimal cube root nikalo, fir compare karo.'),
        step('Step 2 - Har cube root','<br>'+K(CRT(da)+' = '+ra)+' aur '+K(CRT(db)+' = '+rb)+'.'),
        step('Step 3 - Compare karo','<br>Kyunki '+K(bigger)+', '+K(smaller)+' se bada hai, bada value '+K(bigger)+' hai.'),
        step('Step 4 - Final answer','<br>'+K(bigger)+'.')
      ], shortcut:'Dono cube root compare karo; bada '+K(bigger)+' hai.', hint:'Pehle dono cube root nikalo, fir dekho kaunsa decimal bada hai.' },
      { steps:[
        step('चरण 1 - समझो','<br>दोनों दशमलव घनमूल निकालो, फिर तुलना करो।'),
        step('चरण 2 - हर घनमूल','<br>'+K(CRT(da)+' = '+ra)+' और '+K(CRT(db)+' = '+rb)+'।'),
        step('चरण 3 - तुलना करो','<br>चूँकि '+K(bigger)+', '+K(smaller)+' से बड़ा है, बड़ा मान '+K(bigger)+' है।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(bigger)+'।')
      ], shortcut:'दोनों घनमूल की तुलना करो; बड़ा '+K(bigger)+' है।', hint:'पहले दोनों घनमूल निकालो, फिर देखो कौन सा दशमलव बड़ा है।' }
    );
  };
})();
