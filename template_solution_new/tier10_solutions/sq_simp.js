/* tier10 - Template 11: sq_simp (Simplify Root Expression)
   buildSqSimpSolution(a,b,c,variant,ans), V1(a,b,ans), V2(a,b,c,d,ans), V3(a,b,ans), V4(a,ans), V5(a,b,sum) */
(function(){
  var SB=window.SB; if(!SB) return;
  var K=SB.K,RT=SB.RT,POW=SB.POW,T=SB.T,step=SB.step,S=SB.S;

  window.buildSqSimpSolution=function(a,b,c,variant,ans){
    var va=a*a, vb=b*b, vc=c*c;
    var sb=(variant===1||variant===3)?'-':'+';
    var sc=(variant===0||variant===3)?'-':'+';
    var rootExpr=RT(va)+' '+sb+' '+RT(vb)+' '+sc+' '+RT(vc);
    var subExpr=a+' '+sb+' '+b+' '+sc+' '+c;
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Each term is the square root of a perfect square, so each one becomes a whole number. Simplify them one by one, then combine using the given + and - signs.'),
        step('Step 2 - Take each root','<br>'+K(RT(va)+' = '+a)+', '+K(RT(vb)+' = '+b)+', '+K(RT(vc)+' = '+c)+'.'),
        step('Step 3 - Substitute and compute','<br>'+K(rootExpr)+' = '+K(subExpr)+' = '+K(ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:'Replace each root with its whole-number value, then add/subtract: '+K(subExpr+' = '+ans)+'.', hint:'Find the square root of each number first, then combine with the signs.' },
      { steps:[
        step('Step 1 - Samjho','<br>Har pad ek perfect square ka square root hai, isliye har ek pure number ban jaata hai. Ek-ek karke simplify karo, fir diye gaye + aur - signs se jodo-ghatao.'),
        step('Step 2 - Har root lo','<br>'+K(RT(va)+' = '+a)+', '+K(RT(vb)+' = '+b)+', '+K(RT(vc)+' = '+c)+'.'),
        step('Step 3 - Maan rakho aur hal karo','<br>'+K(rootExpr)+' = '+K(subExpr)+' = '+K(ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:'Har root ko uske pure number maan se badlo, fir jodo/ghatao: '+K(subExpr+' = '+ans)+'.', hint:'Pehle har sankhya ka square root nikaalo, fir signs ke saath jodo-ghatao.' },
      { steps:[
        step('चरण 1 - समझो','<br>हर पद एक पूर्ण वर्ग का वर्गमूल है, इसलिए हर एक पूर्ण संख्या बन जाता है। एक-एक करके सरल करो, फिर दिए गए + और - चिह्नों से जोड़ो-घटाओ।'),
        step('चरण 2 - हर वर्गमूल लो','<br>'+K(RT(va)+' = '+a)+', '+K(RT(vb)+' = '+b)+', '+K(RT(vc)+' = '+c)+'।'),
        step('चरण 3 - मान रखो और हल करो','<br>'+K(rootExpr)+' = '+K(subExpr)+' = '+K(ans)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:'हर वर्गमूल को उसके पूर्ण-संख्या मान से बदलो, फिर जोड़ो/घटाओ: '+K(subExpr+' = '+ans)+'।', hint:'पहले हर संख्या का वर्गमूल निकालो, फिर चिह्नों के साथ जोड़ो-घटाओ।' }
    );
  };

  window.buildSqSimpV1Solution=function(a,b,ans){
    var va=a*a, vb=b*b;
    return S(
      { steps:[
        step('Step 1 - Understand','<br>'+K(RT(va)+T+RT(vb))+' means: take each root, then multiply the results.'),
        step('Step 2 - Take each root','<br>'+K(RT(va)+' = '+a)+' and '+K(RT(vb)+' = '+b)+'.'),
        step('Step 3 - Multiply','<br>'+K(a+T+b+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(RT(va)+T+RT(vb)+' = '+a+T+b+' = '+ans)+'.', hint:'Take each root, then multiply them.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(RT(va)+T+RT(vb))+' ka matlab: har root lo, fir results ko multiply karo.'),
        step('Step 2 - Har root lo','<br>'+K(RT(va)+' = '+a)+' aur '+K(RT(vb)+' = '+b)+'.'),
        step('Step 3 - Guna karo','<br>'+K(a+T+b+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(RT(va)+T+RT(vb)+' = '+a+T+b+' = '+ans)+'.', hint:'Har root lo, fir unhe guna karo.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(RT(va)+T+RT(vb))+' का अर्थ: हर वर्गमूल लो, फिर परिणामों को गुणा करो।'),
        step('चरण 2 - हर वर्गमूल लो','<br>'+K(RT(va)+' = '+a)+' और '+K(RT(vb)+' = '+b)+'।'),
        step('चरण 3 - गुणा करो','<br>'+K(a+T+b+' = '+ans)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:K(RT(va)+T+RT(vb)+' = '+a+T+b+' = '+ans)+'।', hint:'हर वर्गमूल लो, फिर उन्हें गुणा करो।' }
    );
  };

  window.buildSqSimpV2Solution=function(a,b,c,d,ans){
    var rootExpr=RT(a*a)+' + '+RT(b*b)+' - '+RT(c*c)+' + '+RT(d*d);
    var subExpr=a+' + '+b+' - '+c+' + '+d;
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Four terms, each a root of a perfect square. Simplify each, then combine left to right.'),
        step('Step 2 - Take each root','<br>'+K(RT(a*a)+' = '+a)+', '+K(RT(b*b)+' = '+b)+', '+K(RT(c*c)+' = '+c)+', '+K(RT(d*d)+' = '+d)+'.'),
        step('Step 3 - Substitute and compute','<br>'+K(rootExpr)+' = '+K(subExpr)+' = '+K(ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:'Roots first, then add/subtract in order: '+K(subExpr+' = '+ans)+'.', hint:'Replace each root with its value, then go left to right.' },
      { steps:[
        step('Step 1 - Samjho','<br>Chaar pad, har ek perfect square ka root. Har ek ko simplify karo, fir left se right combine karo.'),
        step('Step 2 - Har root lo','<br>'+K(RT(a*a)+' = '+a)+', '+K(RT(b*b)+' = '+b)+', '+K(RT(c*c)+' = '+c)+', '+K(RT(d*d)+' = '+d)+'.'),
        step('Step 3 - Maan rakho aur hal karo','<br>'+K(rootExpr)+' = '+K(subExpr)+' = '+K(ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:'Pehle roots, fir kram se jodo/ghatao: '+K(subExpr+' = '+ans)+'.', hint:'Har root ko uske maan se badlo, fir left se right chalo.' },
      { steps:[
        step('चरण 1 - समझो','<br>चार पद, हर एक पूर्ण वर्ग का वर्गमूल। हर एक को सरल करो, फिर बाएँ से दाएँ जोड़ो-घटाओ।'),
        step('चरण 2 - हर वर्गमूल लो','<br>'+K(RT(a*a)+' = '+a)+', '+K(RT(b*b)+' = '+b)+', '+K(RT(c*c)+' = '+c)+', '+K(RT(d*d)+' = '+d)+'।'),
        step('चरण 3 - मान रखो और हल करो','<br>'+K(rootExpr)+' = '+K(subExpr)+' = '+K(ans)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:'पहले वर्गमूल, फिर क्रम से जोड़ो/घटाओ: '+K(subExpr+' = '+ans)+'।', hint:'हर वर्गमूल को उसके मान से बदलो, फिर बाएँ से दाएँ चलो।' }
    );
  };

  window.buildSqSimpV3Solution=function(a,b,ans){
    var sum=ans*ans;
    return S(
      { steps:[
        step('Step 1 - Understand','<br>We need '+K(RT(sum))+'. First check whether the number under the root is a perfect square.'),
        step('Step 2 - Recognise the perfect square','<br>'+K(sum+' = '+POW(ans,'2'))+', so it is a perfect square.'),
        step('Step 3 - Take the square root','<br>'+K(RT(sum)+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(RT(sum)+' = '+ans)+' (since '+K(POW(ans,'2')+' = '+sum)+').', hint:'The number under the root is a perfect square - find what squares to it.' },
      { steps:[
        step('Step 1 - Samjho','<br>Humein '+K(RT(sum))+' chahiye. Pehle dekho ki root ke andar ki sankhya perfect square hai ya nahi.'),
        step('Step 2 - Perfect square pehchano','<br>'+K(sum+' = '+POW(ans,'2'))+', toh yeh perfect square hai.'),
        step('Step 3 - Square root lo','<br>'+K(RT(sum)+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(RT(sum)+' = '+ans)+' (kyunki '+K(POW(ans,'2')+' = '+sum)+').', hint:'Root ke andar ki sankhya ek perfect square hai - dekho kiska varg wo hai.' },
      { steps:[
        step('चरण 1 - समझो','<br>हमें '+K(RT(sum))+' चाहिए। पहले देखो कि मूल के अंदर की संख्या पूर्ण वर्ग है या नहीं।'),
        step('चरण 2 - पूर्ण वर्ग पहचानो','<br>'+K(sum+' = '+POW(ans,'2'))+', तो यह पूर्ण वर्ग है।'),
        step('चरण 3 - वर्गमूल लो','<br>'+K(RT(sum)+' = '+ans)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:K(RT(sum)+' = '+ans)+' (क्योंकि '+K(POW(ans,'2')+' = '+sum)+')।', hint:'मूल के अंदर की संख्या एक पूर्ण वर्ग है - देखो किसका वर्ग वह है।' }
    );
  };

  window.buildSqSimpV4Solution=function(a,ans){
    var va=a*a;
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Three equal roots are added: '+K(RT(va)+' + '+RT(va)+' + '+RT(va))+'.'),
        step('Step 2 - Take each root','<br>'+K(RT(va)+' = '+a)+', and all three are the same.'),
        step('Step 3 - Add them','<br>'+K(a+' + '+a+' + '+a+' = '+ans)+' (same as '+K('3'+T+a+' = '+ans)+').'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K('3'+T+a+' = '+ans)+'.', hint:'All three roots are equal; add them (or multiply by 3).' },
      { steps:[
        step('Step 1 - Samjho','<br>Teen barabar roots jode gaye hain: '+K(RT(va)+' + '+RT(va)+' + '+RT(va))+'.'),
        step('Step 2 - Har root lo','<br>'+K(RT(va)+' = '+a)+', aur teeno same hain.'),
        step('Step 3 - Unhe jodo','<br>'+K(a+' + '+a+' + '+a+' = '+ans)+' (yeh '+K('3'+T+a+' = '+ans)+' ke barabar hai).'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K('3'+T+a+' = '+ans)+'.', hint:'Teeno roots barabar hain; unhe jodo (ya 3 se guna karo).' },
      { steps:[
        step('चरण 1 - समझो','<br>तीन बराबर वर्गमूल जोड़े गए हैं: '+K(RT(va)+' + '+RT(va)+' + '+RT(va))+'।'),
        step('चरण 2 - हर वर्गमूल लो','<br>'+K(RT(va)+' = '+a)+', और तीनों समान हैं।'),
        step('चरण 3 - उन्हें जोड़ो','<br>'+K(a+' + '+a+' + '+a+' = '+ans)+' (यह '+K('3'+T+a+' = '+ans)+' के बराबर है)।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:K('3'+T+a+' = '+ans)+'।', hint:'तीनों वर्गमूल बराबर हैं; उन्हें जोड़ो (या 3 से गुणा करो)।' }
    );
  };

  window.buildSqSimpV5Solution=function(a,b,sum){
    var va=a*a;
    return S(
      { steps:[
        step('Step 1 - Understand','<br>'+K(RT(va)+' + ? = '+sum)+'. We must find the missing number.'),
        step('Step 2 - Simplify the root','<br>'+K(RT(va)+' = '+a)+', so the equation becomes '+K(a+' + ? = '+sum)+'.'),
        step('Step 3 - Subtract to find ?','<br>'+K('? = '+sum+' - '+a+' = '+b)+'.'),
        step('Step 4 - Final answer','<br>'+K(b)+'.')
      ], shortcut:K(sum+' - '+a+' = '+b)+'.', hint:'Replace the root with its value, then subtract it from the total.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(RT(va)+' + ? = '+sum)+'. Missing number nikaalna hai.'),
        step('Step 2 - Root simplify karo','<br>'+K(RT(va)+' = '+a)+', toh equation ban jaata hai '+K(a+' + ? = '+sum)+'.'),
        step('Step 3 - Ghatakar ? nikaalo','<br>'+K('? = '+sum+' - '+a+' = '+b)+'.'),
        step('Step 4 - Final answer','<br>'+K(b)+'.')
      ], shortcut:K(sum+' - '+a+' = '+b)+'.', hint:'Root ko uske maan se badlo, fir use total me se ghatao.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(RT(va)+' + ? = '+sum)+'। लुप्त संख्या ज्ञात करनी है।'),
        step('चरण 2 - वर्गमूल सरल करो','<br>'+K(RT(va)+' = '+a)+', तो समीकरण बनता है '+K(a+' + ? = '+sum)+'।'),
        step('चरण 3 - घटाकर ? निकालो','<br>'+K('? = '+sum+' - '+a+' = '+b)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(b)+'।')
      ], shortcut:K(sum+' - '+a+' = '+b)+'।', hint:'वर्गमूल को उसके मान से बदलो, फिर उसे कुल में से घटाओ।' }
    );
  };
})();
