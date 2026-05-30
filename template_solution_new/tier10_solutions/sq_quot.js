/* tier10 - Template 18: sq_quot (Quotient Under Root)
   buildSqQuotSolution(a,b,num,den,ans), V1(a,b,q,num,den,ans), V2(a,b,c,ans), V3(a,b), V4(n,d,g,num,den,ansStr), V5(a,b,num,den,ans) */
(function(){
  var SB=window.SB; if(!SB) return;
  var K=SB.K,RT=SB.RT,FR=SB.FR,POW=SB.POW,T=SB.T,step=SB.step,S=SB.S;

  window.buildSqQuotSolution=function(a,b,num,den,ans){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>The square root of a fraction = root of the top divided by root of the bottom.'),
        step('Step 2 - Take each root','<br>'+K(RT(num)+' = '+a)+' and '+K(RT(den)+' = '+b)+'.'),
        step('Step 3 - Divide','<br>'+K(FR(a,b)+' = '+ans)+' (because '+K(b+T+ans+' = '+a)+').'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(FR(RT(num),RT(den))+' = '+FR(a,b)+' = '+ans)+'.', hint:'Root of the top over root of the bottom, then simplify.' },
      { steps:[
        step('Step 1 - Samjho','<br>Fraction ka square root = top ka root divided by bottom ka root.'),
        step('Step 2 - Har root lo','<br>'+K(RT(num)+' = '+a)+' aur '+K(RT(den)+' = '+b)+'.'),
        step('Step 3 - Divide karo','<br>'+K(FR(a,b)+' = '+ans)+' (kyunki '+K(b+T+ans+' = '+a)+').'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(FR(RT(num),RT(den))+' = '+FR(a,b)+' = '+ans)+'.', hint:'Top ka root upar, bottom ka root neeche, fir simplify.' },
      { steps:[
        step('चरण 1 - समझो','<br>किसी भिन्न का वर्गमूल = ऊपर का मूल भागित नीचे का मूल।'),
        step('चरण 2 - हर मूल लो','<br>'+K(RT(num)+' = '+a)+' और '+K(RT(den)+' = '+b)+'।'),
        step('चरण 3 - भाग करो','<br>'+K(FR(a,b)+' = '+ans)+' (क्योंकि '+K(b+T+ans+' = '+a)+')।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:K(FR(RT(num),RT(den))+' = '+FR(a,b)+' = '+ans)+'।', hint:'ऊपर का मूल ऊपर, नीचे का मूल नीचे, फिर सरल करो।' }
    );
  };

  window.buildSqQuotV1Solution=function(a,b,q,num,den,ans){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>We need the number under the top root.'),
        step('Step 2 - Simplify the bottom','<br>'+K(RT(den)+' = '+b)+', so the equation is '+K(FR(RT('?'),b)+' = '+q)+'.'),
        step('Step 3 - Work backwards','<br>'+K(RT('?')+' = '+q+T+b+' = '+a)+', then square: '+K('? = '+POW(a,'2')+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:'? = '+K('('+q+T+b+')^{2} = '+ans)+'.', hint:'Work backwards: multiply by the bottom root, then square.' },
      { steps:[
        step('Step 1 - Samjho','<br>Top root ke andar ka number nikaalna hai.'),
        step('Step 2 - Bottom simplify karo','<br>'+K(RT(den)+' = '+b)+', toh equation '+K(FR(RT('?'),b)+' = '+q)+' ban gaya.'),
        step('Step 3 - Ulta chalo','<br>'+K(RT('?')+' = '+q+T+b+' = '+a)+', fir square karo: '+K('? = '+POW(a,'2')+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:'? = '+K('('+q+T+b+')^{2} = '+ans)+'.', hint:'Ulta chalo: bottom root se multiply karo, fir square.' },
      { steps:[
        step('चरण 1 - समझो','<br>ऊपर के मूल के अंदर की संख्या निकालनी है।'),
        step('चरण 2 - नीचे वाला सरल करो','<br>'+K(RT(den)+' = '+b)+', तो समीकरण '+K(FR(RT('?'),b)+' = '+q)+' बन गया।'),
        step('चरण 3 - उलटा चलो','<br>'+K(RT('?')+' = '+q+T+b+' = '+a)+', फिर वर्ग करो: '+K('? = '+POW(a,'2')+' = '+ans)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:'? = '+K('('+q+T+b+')^{2} = '+ans)+'।', hint:'उलटा चलो: नीचे के मूल से गुणा करो, फिर वर्ग।' }
    );
  };

  window.buildSqQuotV2Solution=function(a,b,c,ans){
    var k=a/b;
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Simplify the fraction of roots first, then multiply by the last root.'),
        step('Step 2 - Take the roots','<br>'+K(RT(a*a)+' = '+a)+', '+K(RT(b*b)+' = '+b)+', '+K(RT(c*c)+' = '+c)+'.'),
        step('Step 3 - Simplify and multiply','<br>'+K(FR(a,b)+' = '+k)+', then '+K(k+T+c+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(FR(RT(a*a),RT(b*b))+T+RT(c*c)+' = '+FR(a,b)+T+c+' = '+ans)+'.', hint:'Simplify the fraction of roots, then multiply by the last root.' },
      { steps:[
        step('Step 1 - Samjho','<br>Pehle roots ka fraction simplify karo, fir last root se multiply karo.'),
        step('Step 2 - Roots lo','<br>'+K(RT(a*a)+' = '+a)+', '+K(RT(b*b)+' = '+b)+', '+K(RT(c*c)+' = '+c)+'.'),
        step('Step 3 - Simplify aur multiply karo','<br>'+K(FR(a,b)+' = '+k)+', fir '+K(k+T+c+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(FR(RT(a*a),RT(b*b))+T+RT(c*c)+' = '+FR(a,b)+T+c+' = '+ans)+'.', hint:'Roots ka fraction simplify karo, fir last root se multiply karo.' },
      { steps:[
        step('चरण 1 - समझो','<br>पहले मूलों का भिन्न सरल करो, फिर अंतिम मूल से गुणा करो।'),
        step('चरण 2 - मूल लो','<br>'+K(RT(a*a)+' = '+a)+', '+K(RT(b*b)+' = '+b)+', '+K(RT(c*c)+' = '+c)+'।'),
        step('चरण 3 - सरल करो और गुणा करो','<br>'+K(FR(a,b)+' = '+k)+', फिर '+K(k+T+c+' = '+ans)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:K(FR(RT(a*a),RT(b*b))+T+RT(c*c)+' = '+FR(a,b)+T+c+' = '+ans)+'।', hint:'मूलों का भिन्न सरल करो, फिर अंतिम मूल से गुणा करो।' }
    );
  };

  window.buildSqQuotV3Solution=function(a,b){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Check the quotient property of square roots.'),
        step('Step 2 - The rule','<br>Root of a fraction = root of top over root of bottom: '+K(RT(FR(a*a,b*b))+' = '+FR(RT(a*a),RT(b*b))+' = '+FR(a,b))+'.'),
        step('Step 3 - Compare','<br>This matches the right-hand side, so the statement is correct.'),
        step('Step 4 - Final answer','<br>Yes, it is true.')
      ], shortcut:'Quotient rule: '+K(RT(FR(a*a,b*b))+' = '+FR(a,b))+'. True.', hint:'The square root of a fraction equals root of top over root of bottom.' },
      { steps:[
        step('Step 1 - Samjho','<br>Square roots ki quotient property check karo.'),
        step('Step 2 - Rule','<br>Fraction ka root = top ka root upar, bottom ka root neeche: '+K(RT(FR(a*a,b*b))+' = '+FR(RT(a*a),RT(b*b))+' = '+FR(a,b))+'.'),
        step('Step 3 - Compare karo','<br>Ye right-hand side se match karta hai, toh statement sahi hai.'),
        step('Step 4 - Final answer','<br>Haan, ye sahi hai.')
      ], shortcut:'Quotient rule: '+K(RT(FR(a*a,b*b))+' = '+FR(a,b))+'. Sahi.', hint:'Fraction ka square root = top ka root upar, bottom ka root neeche.' },
      { steps:[
        step('चरण 1 - समझो','<br>वर्गमूलों की भागफल (quotient) गुणधर्म जाँचो।'),
        step('चरण 2 - नियम','<br>भिन्न का मूल = ऊपर का मूल ऊपर, नीचे का मूल नीचे: '+K(RT(FR(a*a,b*b))+' = '+FR(RT(a*a),RT(b*b))+' = '+FR(a,b))+'।'),
        step('चरण 3 - तुलना करो','<br>यह दाएं पक्ष से मेल खाता है, इसलिए कथन सही है।'),
        step('चरण 4 - अंतिम उत्तर','<br>हाँ, यह सही है।')
      ], shortcut:'भागफल नियम: '+K(RT(FR(a*a,b*b))+' = '+FR(a,b))+'। सही।', hint:'भिन्न का वर्गमूल = ऊपर का मूल ऊपर, नीचे का मूल नीचे।' }
    );
  };

  window.buildSqQuotV4Solution=function(n,d,g,num,den,ansStr){
    var ng=n/g, dg=d/g;
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Take the root of the fraction, then reduce to lowest terms.'),
        step('Step 2 - Take the roots','<br>'+K(RT(FR(num,den))+' = '+FR(RT(num),RT(den))+' = '+FR(n,d))+'.'),
        step('Step 3 - Simplify','<br>Divide top and bottom by '+g+': '+K(FR(n,d)+' = '+FR(ng,dg))+'.'),
        step('Step 4 - Final answer','<br>'+K(FR(ng,dg))+'.')
      ], shortcut:K(RT(FR(num,den))+' = '+FR(ng,dg))+'.', hint:'Root of fraction = root of top over root of bottom; then cancel common factors.' },
      { steps:[
        step('Step 1 - Samjho','<br>Fraction ka root lo, fir lowest terms me reduce karo.'),
        step('Step 2 - Roots lo','<br>'+K(RT(FR(num,den))+' = '+FR(RT(num),RT(den))+' = '+FR(n,d))+'.'),
        step('Step 3 - Simplify karo','<br>Top aur bottom ko '+g+' se divide karo: '+K(FR(n,d)+' = '+FR(ng,dg))+'.'),
        step('Step 4 - Final answer','<br>'+K(FR(ng,dg))+'.')
      ], shortcut:K(RT(FR(num,den))+' = '+FR(ng,dg))+'.', hint:'Fraction ka root = top ka root upar, bottom ka root neeche; fir common factors cancel karo.' },
      { steps:[
        step('चरण 1 - समझो','<br>भिन्न का मूल लो, फिर सरलतम रूप में लाओ।'),
        step('चरण 2 - मूल लो','<br>'+K(RT(FR(num,den))+' = '+FR(RT(num),RT(den))+' = '+FR(n,d))+'।'),
        step('चरण 3 - सरल करो','<br>ऊपर और नीचे को '+g+' से भाग दो: '+K(FR(n,d)+' = '+FR(ng,dg))+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(FR(ng,dg))+'।')
      ], shortcut:K(RT(FR(num,den))+' = '+FR(ng,dg))+'।', hint:'भिन्न का मूल = ऊपर का मूल ऊपर, नीचे का मूल नीचे; फिर उभयनिष्ठ गुणनखंड काटो।' }
    );
  };

  window.buildSqQuotV5Solution=function(a,b,num,den,ans){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Find the number under the bottom root.'),
        step('Step 2 - Simplify the top','<br>'+K(RT(num)+' = '+a)+', so the equation is '+K(FR(a,RT('?'))+' = '+FR(a,b))+'.'),
        step('Step 3 - Match the bottoms','<br>'+K(RT('?')+' = '+b)+', so '+K('? = '+POW(b,'2')+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:'? = '+K(POW(b,'2')+' = '+ans)+'.', hint:'Match the bottoms: the bottom root must be b, so square it.' },
      { steps:[
        step('Step 1 - Samjho','<br>Bottom root ke andar ka number nikaalo.'),
        step('Step 2 - Top simplify karo','<br>'+K(RT(num)+' = '+a)+', toh equation '+K(FR(a,RT('?'))+' = '+FR(a,b))+' ban gaya.'),
        step('Step 3 - Bottoms match karo','<br>'+K(RT('?')+' = '+b)+', toh '+K('? = '+POW(b,'2')+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:'? = '+K(POW(b,'2')+' = '+ans)+'.', hint:'Bottoms match karo: neeche ka root b hona chahiye, toh use square karo.' },
      { steps:[
        step('चरण 1 - समझो','<br>नीचे के मूल के अंदर की संख्या निकालो।'),
        step('चरण 2 - ऊपर वाला सरल करो','<br>'+K(RT(num)+' = '+a)+', तो समीकरण '+K(FR(a,RT('?'))+' = '+FR(a,b))+' बन गया।'),
        step('चरण 3 - नीचे वाले match करो','<br>'+K(RT('?')+' = '+b)+', तो '+K('? = '+POW(b,'2')+' = '+ans)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:'? = '+K(POW(b,'2')+' = '+ans)+'।', hint:'नीचे वाले match करो: नीचे का मूल b होना चाहिए, तो उसे वर्ग करो।' }
    );
  };
})();
