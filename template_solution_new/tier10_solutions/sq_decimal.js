/* tier10 - Template 5: sq_decimal (Decimal Square Root)
   buildSqDecimalSolution(dec,ans,decStr), V1(r,ans), V2(a,b,da,db,ans), V3(a,n,ans), V4(a,dec,ans), V5(a,b,da,db) */
(function(){
  var SB=window.SB; if(!SB) return;
  var K=SB.K,RT=SB.RT,FR=SB.FR,POW=SB.POW,T=SB.T,D=SB.D,step=SB.step,S=SB.S;
  function dparts(decStr){ var s=decStr.indexOf('.')>=0?decStr.split('.')[1].length:0, den=Math.pow(10,s), num=Math.round(parseFloat(decStr)*den); return {s:s,den:den,num:num,sNum:Math.round(Math.sqrt(num)),sDen:Math.round(Math.sqrt(den))}; }

  window.buildSqDecimalSolution=function(dec,ans,decStr){
    var p=dparts(decStr);
    if(p.s===0){
      return S(
        { steps:[ step('Step 1 - Understand','<br>We must find '+K(RT(decStr))+'.'), step('Step 2 - Recognise the perfect square','<br>'+K('('+ans+T+ans+') = '+decStr)+'.'), step('Step 3 - Final answer','<br>'+K(RT(decStr)+' = '+ans)+'.') ], shortcut:K(RT(decStr)+' = '+ans)+'.', hint:'Which number times itself gives '+K(decStr)+'?' },
        { steps:[ step('Step 1 - Samjho','<br>'+K(RT(decStr))+' nikaalna hai.'), step('Step 2 - Perfect square pehchaano','<br>'+K('('+ans+T+ans+') = '+decStr)+'.'), step('Step 3 - Final answer','<br>'+K(RT(decStr)+' = '+ans)+'.') ], shortcut:K(RT(decStr)+' = '+ans)+'.', hint:'Kaunsa number khud se guna karke '+K(decStr)+' deta hai?' },
        { steps:[ step('चरण 1 - समझो','<br>'+K(RT(decStr))+' निकालना है।'), step('चरण 2 - पूर्ण वर्ग पहचानो','<br>'+K('('+ans+T+ans+') = '+decStr)+'।'), step('चरण 3 - अंतिम उत्तर','<br>'+K(RT(decStr)+' = '+ans)+'।') ], shortcut:K(RT(decStr)+' = '+ans)+'।', hint:'कौन-सी संख्या स्वयं से गुणा करके '+K(decStr)+' देती है?' }
      );
    }
    return S(
      { steps:[
        step('Step 1 - Understand','<br>We must find '+K(RT(decStr))+'. A decimal square root is easiest as a fraction.'),
        step('Step 2 - Write it as a fraction','<br>'+K(decStr+' = '+FR(p.num,p.den))+'  (move the decimal: '+p.s+' decimal places means divide by '+K(p.den)+').'),
        step('Step 3 - Take the root of top and bottom','<br>'+K(RT(decStr)+' = '+FR(RT(p.num),RT(p.den))+' = '+FR(p.sNum,p.sDen)+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(RT(decStr)+' = '+FR(RT(p.num),RT(p.den))+' = '+ans)+'.', hint:'Turn the decimal into a fraction, then take the root of top and bottom.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(RT(decStr))+' nikaalna hai. Decimal ka square root fraction banakar aasaan hai.'),
        step('Step 2 - Fraction me likho','<br>'+K(decStr+' = '+FR(p.num,p.den))+'  ('+p.s+' decimal places matlab '+K(p.den)+' se divide).'),
        step('Step 3 - Upar aur niche ka root lo','<br>'+K(RT(decStr)+' = '+FR(RT(p.num),RT(p.den))+' = '+FR(p.sNum,p.sDen)+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(RT(decStr)+' = '+FR(RT(p.num),RT(p.den))+' = '+ans)+'.', hint:'Decimal ko fraction banao, phir upar-niche ka root lo.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(RT(decStr))+' निकालना है। दशमलव का वर्गमूल भिन्न बनाकर आसान है।'),
        step('चरण 2 - भिन्न में लिखो','<br>'+K(decStr+' = '+FR(p.num,p.den))+'  ('+p.s+' दशमलव स्थान मतलब '+K(p.den)+' से भाग)।'),
        step('चरण 3 - ऊपर और नीचे का मूल लो','<br>'+K(RT(decStr)+' = '+FR(RT(p.num),RT(p.den))+' = '+FR(p.sNum,p.sDen)+' = '+ans)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:K(RT(decStr)+' = '+FR(RT(p.num),RT(p.den))+' = '+ans)+'।', hint:'दशमलव को भिन्न बनाओ, फिर ऊपर-नीचे का मूल लो।' }
    );
  };

  window.buildSqDecimalV1Solution=function(r,ans){
    var root=r/10;
    return S(
      { steps:[
        step('Step 1 - Understand','<br>We need the number whose square root is '+K(root)+'.'),
        step('Step 2 - Square it','<br>Number '+K('= ('+root+T+root+') = '+ans)+'.'),
        step('Step 3 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:'Number '+K('= ('+root+')^{2} = '+ans)+'.', hint:'Squaring is the reverse of square root.' },
      { steps:[
        step('Step 1 - Samjho','<br>Woh number chahiye jiska square root '+K(root)+' hai.'),
        step('Step 2 - Square karo','<br>Number '+K('= ('+root+T+root+') = '+ans)+'.'),
        step('Step 3 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:'Number '+K('= ('+root+')^{2} = '+ans)+'.', hint:'Square karna square root ka ulta hai.' },
      { steps:[
        step('चरण 1 - समझो','<br>वह संख्या चाहिए जिसका वर्गमूल '+K(root)+' है।'),
        step('चरण 2 - वर्ग करो','<br>संख्या '+K('= ('+root+T+root+') = '+ans)+'।'),
        step('चरण 3 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:'संख्या '+K('= ('+root+')^{2} = '+ans)+'।', hint:'वर्ग करना वर्गमूल का उल्टा है।' }
    );
  };

  window.buildSqDecimalV2Solution=function(a,b,da,db,ans){
    var ra=a/10, rb=b/10, res=Math.round(ans*10)/10;
    return S(
      { steps:[
        step('Step 1 - Understand','<br>We must find '+K(RT(String(da))+' + '+RT(String(db)))+'.'),
        step('Step 2 - Solve each root','<br>'+K(RT(String(da))+' = '+ra)+' and '+K(RT(String(db))+' = '+rb)+'.'),
        step('Step 3 - Add','<br>'+K('('+ra+') + ('+rb+') = '+res)+'.'),
        step('Step 4 - Final answer','<br>'+K(res)+'.')
      ], shortcut:K(RT(String(da))+' + '+RT(String(db))+' = '+ra+' + '+rb+' = '+res)+'.', hint:'Take each decimal root first, then add.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(RT(String(da))+' + '+RT(String(db)))+' nikaalna hai.'),
        step('Step 2 - Har root solve karo','<br>'+K(RT(String(da))+' = '+ra)+' aur '+K(RT(String(db))+' = '+rb)+'.'),
        step('Step 3 - Jodo','<br>'+K('('+ra+') + ('+rb+') = '+res)+'.'),
        step('Step 4 - Final answer','<br>'+K(res)+'.')
      ], shortcut:K(RT(String(da))+' + '+RT(String(db))+' = '+ra+' + '+rb+' = '+res)+'.', hint:'Pehle har decimal root nikaalo, phir jodo.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(RT(String(da))+' + '+RT(String(db)))+' निकालना है।'),
        step('चरण 2 - हर मूल हल करो','<br>'+K(RT(String(da))+' = '+ra)+' और '+K(RT(String(db))+' = '+rb)+'।'),
        step('चरण 3 - जोड़ो','<br>'+K('('+ra+') + ('+rb+') = '+res)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(res)+'।')
      ], shortcut:K(RT(String(da))+' + '+RT(String(db))+' = '+ra+' + '+rb+' = '+res)+'।', hint:'पहले हर दशमलव मूल निकालो, फिर जोड़ो।' }
    );
  };

  window.buildSqDecimalV3Solution=function(a,n,ans){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>We must find '+K(RT(n))+'.'),
        step('Step 2 - See the perfect square','<br>'+K(n+' = '+POW(ans,'2'))+'  (because '+K('('+ans+T+ans+') = '+n)+').'),
        step('Step 3 - Final answer','<br>'+K(RT(n)+' = '+ans)+'.')
      ], shortcut:K(RT(n)+' = '+ans)+'.', hint:'Find which whole number squared gives '+K(n)+'.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(RT(n))+' nikaalna hai.'),
        step('Step 2 - Perfect square dekho','<br>'+K(n+' = '+POW(ans,'2'))+'  (kyunki '+K('('+ans+T+ans+') = '+n)+').'),
        step('Step 3 - Final answer','<br>'+K(RT(n)+' = '+ans)+'.')
      ], shortcut:K(RT(n)+' = '+ans)+'.', hint:'Kaunsa whole number square karke '+K(n)+' deta hai?' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(RT(n))+' निकालना है।'),
        step('चरण 2 - पूर्ण वर्ग देखो','<br>'+K(n+' = '+POW(ans,'2'))+'  (क्योंकि '+K('('+ans+T+ans+') = '+n)+')।'),
        step('चरण 3 - अंतिम उत्तर','<br>'+K(RT(n)+' = '+ans)+'।')
      ], shortcut:K(RT(n)+' = '+ans)+'।', hint:'कौन-सी संख्या वर्ग करके '+K(n)+' देती है?' }
    );
  };

  window.buildSqDecimalV4Solution=function(a,dec,ans){
    var decStr=String(dec), p=dparts(decStr);
    return S(
      { steps:[
        step('Step 1 - Understand','<br>We must find '+K(RT(decStr))+'.'),
        step('Step 2 - Write as a fraction','<br>'+K(decStr+' = '+FR(p.num,p.den))+'.'),
        step('Step 3 - Root of top and bottom','<br>'+K(RT(decStr)+' = '+FR(p.sNum,p.sDen)+' = '+ans)+'.')
      ], shortcut:K(RT(decStr)+' = '+ans)+'.', hint:'Decimal to fraction, then root the top and bottom.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(RT(decStr))+' nikaalna hai.'),
        step('Step 2 - Fraction me likho','<br>'+K(decStr+' = '+FR(p.num,p.den))+'.'),
        step('Step 3 - Upar-niche ka root','<br>'+K(RT(decStr)+' = '+FR(p.sNum,p.sDen)+' = '+ans)+'.')
      ], shortcut:K(RT(decStr)+' = '+ans)+'.', hint:'Decimal ko fraction banao, phir upar-niche ka root lo.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(RT(decStr))+' निकालना है।'),
        step('चरण 2 - भिन्न में लिखो','<br>'+K(decStr+' = '+FR(p.num,p.den))+'।'),
        step('चरण 3 - ऊपर-नीचे का मूल','<br>'+K(RT(decStr)+' = '+FR(p.sNum,p.sDen)+' = '+ans)+'।')
      ], shortcut:K(RT(decStr)+' = '+ans)+'।', hint:'दशमलव को भिन्न बनाओ, फिर ऊपर-नीचे का मूल लो।' }
    );
  };

  window.buildSqDecimalV5Solution=function(a,b,da,db){
    var ra=a/10, rb=b/10, big=Math.max(ra,rb);
    return S(
      { steps:[
        step('Step 1 - Understand','<br>We compare '+K(RT(String(da)))+' and '+K(RT(String(db)))+'.'),
        step('Step 2 - Solve each root','<br>'+K(RT(String(da))+' = '+ra)+' and '+K(RT(String(db))+' = '+rb)+'.'),
        step('Step 3 - Compare','<br>The larger value is '+K(big)+'.'),
        step('Step 4 - Final answer','<br>'+K(big)+'.')
      ], shortcut:'Bigger root = '+K(big)+'.', hint:'Find both roots, then pick the larger.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(RT(String(da)))+' aur '+K(RT(String(db)))+' me bada batana hai.'),
        step('Step 2 - Har root solve karo','<br>'+K(RT(String(da))+' = '+ra)+' aur '+K(RT(String(db))+' = '+rb)+'.'),
        step('Step 3 - Compare karo','<br>Bada maan hai '+K(big)+'.'),
        step('Step 4 - Final answer','<br>'+K(big)+'.')
      ], shortcut:'Bada root = '+K(big)+'.', hint:'Dono root nikaalo, phir bada chuno.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(RT(String(da)))+' और '+K(RT(String(db)))+' में बड़ा बताना है।'),
        step('चरण 2 - हर मूल हल करो','<br>'+K(RT(String(da))+' = '+ra)+' और '+K(RT(String(db))+' = '+rb)+'।'),
        step('चरण 3 - तुलना करो','<br>बड़ा मान है '+K(big)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(big)+'।')
      ], shortcut:'बड़ा मूल = '+K(big)+'।', hint:'दोनों मूल निकालो, फिर बड़ा चुनो।' }
    );
  };
})();
