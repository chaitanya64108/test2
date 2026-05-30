/* tier10 - Template 12: sq_prod (Product Under Root)
   buildSqProdSolution(a,b,ans), V1(a,b,ans), V2(a,b,ans), V3(a,b,c,ans), V4(a,b), V5(a,b,ans) */
(function(){
  var SB=window.SB; if(!SB) return;
  var K=SB.K,RT=SB.RT,POW=SB.POW,T=SB.T,D=SB.D,step=SB.step,S=SB.S;

  window.buildSqProdSolution=function(a,b,ans){
    var va=a*a, vb=b*b;
    return S(
      { steps:[
        step('Step 1 - Understand','<br>We need '+K(RT(va+T+vb))+'. Use the rule: the root of a product equals the product of the roots.'),
        step('Step 2 - Split using the product rule','<br>'+K(RT(va+T+vb)+' = '+RT(va)+T+RT(vb))+'.'),
        step('Step 3 - Take each root and multiply','<br>'+K(RT(va)+T+RT(vb)+' = '+a+T+b+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(RT(va+T+vb)+' = '+a+T+b+' = '+ans)+'.', hint:'Square root of a product = product of the square roots.' },
      { steps:[
        step('Step 1 - Samjho','<br>Humein '+K(RT(va+T+vb))+' chahiye. Rule: product ka root = roots ka product.'),
        step('Step 2 - Product rule se alag karo','<br>'+K(RT(va+T+vb)+' = '+RT(va)+T+RT(vb))+'.'),
        step('Step 3 - Har root lekar guna karo','<br>'+K(RT(va)+T+RT(vb)+' = '+a+T+b+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(RT(va+T+vb)+' = '+a+T+b+' = '+ans)+'.', hint:'Product ka square root = square roots ka product.' },
      { steps:[
        step('चरण 1 - समझो','<br>हमें '+K(RT(va+T+vb))+' चाहिए। नियम: गुणनफल का मूल = मूलों का गुणनफल।'),
        step('चरण 2 - गुणनफल नियम से अलग करो','<br>'+K(RT(va+T+vb)+' = '+RT(va)+T+RT(vb))+'।'),
        step('चरण 3 - हर वर्गमूल लेकर गुणा करो','<br>'+K(RT(va)+T+RT(vb)+' = '+a+T+b+' = '+ans)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:K(RT(va+T+vb)+' = '+a+T+b+' = '+ans)+'।', hint:'गुणनफल का वर्गमूल = वर्गमूलों का गुणनफल।' }
    );
  };

  window.buildSqProdV1Solution=function(a,b,ans){
    var va=a*a, vb=b*b, n=va*vb;
    return S(
      { steps:[
        step('Step 1 - Understand','<br>We are given '+K(n+' = '+va+T+vb)+' and must find '+K(RT(n))+'.'),
        step('Step 2 - Split into perfect-square parts','<br>'+K(RT(n)+' = '+RT(va+T+vb)+' = '+RT(va)+T+RT(vb))+'.'),
        step('Step 3 - Take roots and multiply','<br>'+K(RT(va)+T+RT(vb)+' = '+a+T+b+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(RT(n)+' = '+a+T+b+' = '+ans)+'.', hint:'Break the number into its perfect-square parts, then root each.' },
      { steps:[
        step('Step 1 - Samjho','<br>Diya hai '+K(n+' = '+va+T+vb)+', aur '+K(RT(n))+' nikaalna hai.'),
        step('Step 2 - Perfect-square parts me todo','<br>'+K(RT(n)+' = '+RT(va+T+vb)+' = '+RT(va)+T+RT(vb))+'.'),
        step('Step 3 - Roots lekar guna karo','<br>'+K(RT(va)+T+RT(vb)+' = '+a+T+b+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(RT(n)+' = '+a+T+b+' = '+ans)+'.', hint:'Sankhya ko perfect-square parts me todo, fir har ek ka root lo.' },
      { steps:[
        step('चरण 1 - समझो','<br>दिया है '+K(n+' = '+va+T+vb)+', और '+K(RT(n))+' ज्ञात करना है।'),
        step('चरण 2 - पूर्ण-वर्ग भागों में तोड़ो','<br>'+K(RT(n)+' = '+RT(va+T+vb)+' = '+RT(va)+T+RT(vb))+'।'),
        step('चरण 3 - वर्गमूल लेकर गुणा करो','<br>'+K(RT(va)+T+RT(vb)+' = '+a+T+b+' = '+ans)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:K(RT(n)+' = '+a+T+b+' = '+ans)+'।', hint:'संख्या को पूर्ण-वर्ग भागों में तोड़ो, फिर हर एक का वर्गमूल लो।' }
    );
  };

  window.buildSqProdV2Solution=function(a,b,ans){
    var va=a*a, vb=b*b, n=va*vb;
    return S(
      { steps:[
        step('Step 1 - Understand','<br>'+K(RT(n)+' = '+(a*b))+'. We must name one perfect-square factor sitting under the root.'),
        step('Step 2 - Factor the number under the root','<br>'+K(n+' = '+va+T+vb)+'.'),
        step('Step 3 - Pick a perfect square','<br>Both '+K(va)+' and '+K(vb)+' are perfect squares ('+K(va+' = '+POW(a,'2'))+'), so one perfect-square factor is '+K(va)+'.'),
        step('Step 4 - Final answer','<br>'+K(va)+'.')
      ], shortcut:K(n+' = '+va+T+vb)+', so a perfect-square factor is '+K(va)+'.', hint:'Split the number into squared parts.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(RT(n)+' = '+(a*b))+'. Root ke andar ek perfect-square factor batana hai.'),
        step('Step 2 - Root ke andar ki sankhya ke factor karo','<br>'+K(n+' = '+va+T+vb)+'.'),
        step('Step 3 - Ek perfect square chuno','<br>'+K(va)+' aur '+K(vb)+' dono perfect squares hain ('+K(va+' = '+POW(a,'2'))+'), toh ek perfect-square factor '+K(va)+' hai.'),
        step('Step 4 - Final answer','<br>'+K(va)+'.')
      ], shortcut:K(n+' = '+va+T+vb)+', toh ek perfect-square factor '+K(va)+' hai.', hint:'Sankhya ko varg waale parts me todo.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(RT(n)+' = '+(a*b))+'। मूल के अंदर एक पूर्ण-वर्ग गुणनखंड बताना है।'),
        step('चरण 2 - मूल के अंदर की संख्या के गुणनखंड करो','<br>'+K(n+' = '+va+T+vb)+'।'),
        step('चरण 3 - एक पूर्ण वर्ग चुनो','<br>'+K(va)+' और '+K(vb)+' दोनों पूर्ण वर्ग हैं ('+K(va+' = '+POW(a,'2'))+'), तो एक पूर्ण-वर्ग गुणनखंड '+K(va)+' है।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(va)+'।')
      ], shortcut:K(n+' = '+va+T+vb)+', तो एक पूर्ण-वर्ग गुणनखंड '+K(va)+' है।', hint:'संख्या को वर्ग वाले भागों में तोड़ो।' }
    );
  };

  window.buildSqProdV3Solution=function(a,b,c,ans){
    var va=a*a, vb=b*b, vc=c*c;
    return S(
      { steps:[
        step('Step 1 - Understand','<br>We need '+K(RT(va+T+vb+T+vc))+'. Apply the product rule to all three parts.'),
        step('Step 2 - Split using the product rule','<br>'+K(RT(va+T+vb+T+vc)+' = '+RT(va)+T+RT(vb)+T+RT(vc))+'.'),
        step('Step 3 - Take roots and multiply','<br>'+K(RT(va)+T+RT(vb)+T+RT(vc)+' = '+a+T+b+T+c+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(RT(va+T+vb+T+vc)+' = '+a+T+b+T+c+' = '+ans)+'.', hint:'Root of a product = product of the roots, even with three parts.' },
      { steps:[
        step('Step 1 - Samjho','<br>Humein '+K(RT(va+T+vb+T+vc))+' chahiye. Teeno parts par product rule lagao.'),
        step('Step 2 - Product rule se alag karo','<br>'+K(RT(va+T+vb+T+vc)+' = '+RT(va)+T+RT(vb)+T+RT(vc))+'.'),
        step('Step 3 - Roots lekar guna karo','<br>'+K(RT(va)+T+RT(vb)+T+RT(vc)+' = '+a+T+b+T+c+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(RT(va+T+vb+T+vc)+' = '+a+T+b+T+c+' = '+ans)+'.', hint:'Product ka root = roots ka product, teen parts ke saath bhi.' },
      { steps:[
        step('चरण 1 - समझो','<br>हमें '+K(RT(va+T+vb+T+vc))+' चाहिए। तीनों भागों पर गुणनफल नियम लगाओ।'),
        step('चरण 2 - गुणनफल नियम से अलग करो','<br>'+K(RT(va+T+vb+T+vc)+' = '+RT(va)+T+RT(vb)+T+RT(vc))+'।'),
        step('चरण 3 - वर्गमूल लेकर गुणा करो','<br>'+K(RT(va)+T+RT(vb)+T+RT(vc)+' = '+a+T+b+T+c+' = '+ans)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:K(RT(va+T+vb+T+vc)+' = '+a+T+b+T+c+' = '+ans)+'।', hint:'गुणनफल का मूल = मूलों का गुणनफल, तीन भागों के साथ भी।' }
    );
  };

  window.buildSqProdV4Solution=function(a,b){
    var va=a*a, vb=b*b;
    return S(
      { steps:[
        step('Step 1 - Understand','<br>We saw '+K(RT(va)+T+RT(vb)+' = '+(a*b))+'. Which square-root property does this show?'),
        step('Step 2 - State the property','<br>The square root of a product equals the product of the roots: '+K(RT('xy')+' = '+RT('x')+T+RT('y'))+'.'),
        step('Step 3 - Check with our numbers','<br>'+K(RT(va)+T+RT(vb)+' = '+RT(va+T+vb)+' = '+(a*b))+' - both routes give the same answer.'),
        step('Step 4 - Final answer','<br>'+K(RT('a')+T+RT('b')+' = '+RT('ab'))+'.')
      ], shortcut:K(RT('a')+T+RT('b')+' = '+RT('ab'))+'.', hint:'Think about how square roots behave with multiplication.' },
      { steps:[
        step('Step 1 - Samjho','<br>Humne dekha '+K(RT(va)+T+RT(vb)+' = '+(a*b))+'. Yeh square root ki kaunsi property hai?'),
        step('Step 2 - Property batao','<br>Product ka square root = roots ka product: '+K(RT('xy')+' = '+RT('x')+T+RT('y'))+'.'),
        step('Step 3 - Apne numbers se check karo','<br>'+K(RT(va)+T+RT(vb)+' = '+RT(va+T+vb)+' = '+(a*b))+' - dono tarike same answer dete hain.'),
        step('Step 4 - Final answer','<br>'+K(RT('a')+T+RT('b')+' = '+RT('ab'))+'.')
      ], shortcut:K(RT('a')+T+RT('b')+' = '+RT('ab'))+'.', hint:'Socho square roots multiplication ke saath kaise behave karte hain.' },
      { steps:[
        step('चरण 1 - समझो','<br>हमने देखा '+K(RT(va)+T+RT(vb)+' = '+(a*b))+'। यह वर्गमूल का कौन सा गुण है?'),
        step('चरण 2 - गुण बताओ','<br>गुणनफल का वर्गमूल = मूलों का गुणनफल: '+K(RT('xy')+' = '+RT('x')+T+RT('y'))+'।'),
        step('चरण 3 - अपने अंकों से जाँचो','<br>'+K(RT(va)+T+RT(vb)+' = '+RT(va+T+vb)+' = '+(a*b))+' - दोनों तरीके समान उत्तर देते हैं।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(RT('a')+T+RT('b')+' = '+RT('ab'))+'।')
      ], shortcut:K(RT('a')+T+RT('b')+' = '+RT('ab'))+'।', hint:'सोचो वर्गमूल गुणा के साथ कैसे व्यवहार करते हैं।' }
    );
  };

  window.buildSqProdV5Solution=function(a,b,ans){
    var va=a*a, vb=b*b, n=va*vb;
    return S(
      { steps:[
        step('Step 1 - Understand','<br>'+K(RT(va+T+'?')+' = '+(a*b))+'. Find the number that replaces the ? under the root.'),
        step('Step 2 - Square both sides','<br>'+K(va+T+'?'+' = '+POW(a*b,'2')+' = '+n)+'.'),
        step('Step 3 - Divide by the known square','<br>'+K('? = '+n+D+va+' = '+vb)+'.'),
        step('Step 4 - Final answer','<br>'+K(vb)+'.')
      ], shortcut:K('? = '+vb)+' (since '+K(RT(va+T+vb)+' = '+(a*b))+').', hint:'Square both sides, then divide by the known perfect square.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(RT(va+T+'?')+' = '+(a*b))+'. Root ke andar ? ki jagah kya aayega, nikaalo.'),
        step('Step 2 - Dono taraf square karo','<br>'+K(va+T+'?'+' = '+POW(a*b,'2')+' = '+n)+'.'),
        step('Step 3 - Known square se divide karo','<br>'+K('? = '+n+D+va+' = '+vb)+'.'),
        step('Step 4 - Final answer','<br>'+K(vb)+'.')
      ], shortcut:K('? = '+vb)+' (kyunki '+K(RT(va+T+vb)+' = '+(a*b))+').', hint:'Dono taraf square karo, fir known perfect square se divide karo.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(RT(va+T+'?')+' = '+(a*b))+'। मूल के अंदर ? के स्थान पर क्या आएगा, ज्ञात करो।'),
        step('चरण 2 - दोनों ओर वर्ग करो','<br>'+K(va+T+'?'+' = '+POW(a*b,'2')+' = '+n)+'।'),
        step('चरण 3 - ज्ञात वर्ग से भाग दो','<br>'+K('? = '+n+D+va+' = '+vb)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(vb)+'।')
      ], shortcut:K('? = '+vb)+' (क्योंकि '+K(RT(va+T+vb)+' = '+(a*b))+')।', hint:'दोनों ओर वर्ग करो, फिर ज्ञात पूर्ण वर्ग से भाग दो।' }
    );
  };
})();
