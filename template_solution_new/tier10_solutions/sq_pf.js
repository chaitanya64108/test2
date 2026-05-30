/* tier10 - Template 2: sq_pf (Prime Factorisation)
   Functions called by templates_tier10/1.js:
   buildSqPfSolution(sq,r,chosen)  [base + v1 + v2],
   buildSqPfV3Solution(p,num), buildSqPfV4Solution(a,b,n), buildSqPfV5Solution(a,b,num,den) */
(function(){
  var SB=window.SB; if(!SB) return;
  var K=SB.K,RT=SB.RT,FR=SB.FR,POW=SB.POW,T=SB.T,D=SB.D,step=SB.step,S=SB.S,pf=SB.pf,chain=SB.chain,pairView=SB.pairView,oneFromPair=SB.oneFromPair;

  window.buildSqPfSolution=function(sq,r,chosen){
    var f=pf(sq), ch=chain(f), pv=pairView(f), one=oneFromPair(f), oneTex=one.join(T);
    return S(
      { steps:[
        step('Step 1 - Understand','<br>We must find '+K(RT(sq))+' using prime factorisation (breaking '+K(sq)+' into prime building blocks).'),
        step('Step 2 - Break into primes','<br>'+K(sq+' = '+ch)+'.'),
        step('Step 3 - Make equal pairs','<br>'+K(sq+' = '+pv)+'.<br>Group the same primes two-by-two.'),
        step('Step 4 - Take one from each pair','<br>'+K(RT(sq)+' = '+oneTex)+'.'),
        step('Step 5 - Final answer','<br>'+K(RT(sq)+' = '+r)+'.')
      ], shortcut:'Pair equal primes, take one from each pair, multiply: '+K(RT(sq)+' = '+r)+'.', hint:'Break '+K(sq)+' into primes, then make pairs.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(RT(sq))+' ko prime factorisation se nikaalna hai (yaani '+K(sq)+' ko chhote prime tukdo me todna).'),
        step('Step 2 - Primes me todo','<br>'+K(sq+' = '+ch)+'.'),
        step('Step 3 - Equal pairs banao','<br>'+K(sq+' = '+pv)+'.<br>Same primes ko do-do me group karo.'),
        step('Step 4 - Har pair se ek lo','<br>'+K(RT(sq)+' = '+oneTex)+'.'),
        step('Step 5 - Final answer','<br>'+K(RT(sq)+' = '+r)+'.')
      ], shortcut:'Same primes ki pair banao, har pair se ek lo, multiply karo: '+K(RT(sq)+' = '+r)+'.', hint:K(sq)+' ko primes me todo, phir pair banao.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(RT(sq))+' को अभाज्य गुणनखंड विधि से निकालना है (यानी '+K(sq)+' को छोटे अभाज्य टुकड़ों में तोड़ना)।'),
        step('चरण 2 - अभाज्य में तोड़ो','<br>'+K(sq+' = '+ch)+'।'),
        step('चरण 3 - समान जोड़े बनाओ','<br>'+K(sq+' = '+pv)+'।<br>समान अभाज्य को दो-दो में समूह करो।'),
        step('चरण 4 - हर जोड़े से एक लो','<br>'+K(RT(sq)+' = '+oneTex)+'।'),
        step('चरण 5 - अंतिम उत्तर','<br>'+K(RT(sq)+' = '+r)+'।')
      ], shortcut:'समान अभाज्य के जोड़े बनाओ, हर जोड़े से एक लो, गुणा करो: '+K(RT(sq)+' = '+r)+'।', hint:K(sq)+' को अभाज्य में तोड़ो, फिर जोड़े बनाओ।' }
    );
  };

  window.buildSqPfV3Solution=function(p,num){
    var sq2=POW(p*p,'2');
    return S(
      { steps:[
        step('Step 1 - Understand','<br>We have '+K(num+' = '+POW(p,'3'))+'. We must multiply it by the smallest number to make it a perfect square.'),
        step('Step 2 - Write the primes','<br>'+K(num+' = '+p+T+p+T+p)+'.'),
        step('Step 3 - Make pairs','<br>'+K(num+' = ('+p+T+p+')'+T+p)+'.<br>One '+K(p)+' has no partner.'),
        step('Step 4 - Complete the pair','<br>Multiply by '+K(p)+' so the lonely '+K(p)+' also gets a partner.'),
        step('Step 5 - Check','<br>'+K(num+T+p+' = '+(num*p)+' = '+sq2)+', which is a perfect square.'),
        step('Step 6 - Final answer','<br>'+K(p)+'.')
      ], shortcut:'The lonely prime is '+K(p)+', so multiply by '+K(p)+'.', hint:'For a perfect square every prime must come in a pair.' },
      { steps:[
        step('Step 1 - Samjho','<br>Diya hai '+K(num+' = '+POW(p,'3'))+'. Ise sabse chhote number se multiply karke perfect square banana hai.'),
        step('Step 2 - Primes likho','<br>'+K(num+' = '+p+T+p+T+p)+'.'),
        step('Step 3 - Pair banao','<br>'+K(num+' = ('+p+T+p+')'+T+p)+'.<br>Ek '+K(p)+' akela bach gaya.'),
        step('Step 4 - Pair poora karo','<br>'+K(p)+' se multiply karo taaki akela '+K(p)+' ko bhi partner mil jaaye.'),
        step('Step 5 - Check karo','<br>'+K(num+T+p+' = '+(num*p)+' = '+sq2)+', perfect square.'),
        step('Step 6 - Final answer','<br>'+K(p)+'.')
      ], shortcut:'Akela prime '+K(p)+' hai, isliye '+K(p)+' se multiply karo.', hint:'Perfect square me har prime pair me hona chahiye.' },
      { steps:[
        step('चरण 1 - समझो','<br>दिया है '+K(num+' = '+POW(p,'3'))+'। इसे सबसे छोटी संख्या से गुणा करके पूर्ण वर्ग बनाना है।'),
        step('चरण 2 - अभाज्य लिखो','<br>'+K(num+' = '+p+T+p+T+p)+'।'),
        step('चरण 3 - जोड़े बनाओ','<br>'+K(num+' = ('+p+T+p+')'+T+p)+'।<br>एक '+K(p)+' अकेला बचा।'),
        step('चरण 4 - जोड़ा पूरा करो','<br>'+K(p)+' से गुणा करो ताकि अकेले '+K(p)+' को भी साथी मिल जाए।'),
        step('चरण 5 - जाँच करो','<br>'+K(num+T+p+' = '+(num*p)+' = '+sq2)+', पूर्ण वर्ग।'),
        step('चरण 6 - अंतिम उत्तर','<br>'+K(p)+'।')
      ], shortcut:'अकेला अभाज्य '+K(p)+' है, इसलिए '+K(p)+' से गुणा करो।', hint:'पूर्ण वर्ग में हर अभाज्य जोड़े में होना चाहिए।' }
    );
  };

  window.buildSqPfV4Solution=function(a,b,n){
    var aa=a*a;
    return S(
      { steps:[
        step('Step 1 - Understand','<br>We must simplify '+K(RT(n))+' to its simplest radical form.'),
        step('Step 2 - Find a perfect-square factor','<br>'+K(n+' = '+POW(a,'2')+T+b)+'  (here '+K(POW(a,'2')+' = '+aa)+' is a perfect square).'),
        step('Step 3 - Split the root','<br>'+K(RT(n)+' = '+RT(POW(a,'2'))+T+RT(b))+'.'),
        step('Step 4 - Take the square root out','<br>'+K(RT(POW(a,'2'))+' = '+a)+', so '+K(RT(n)+' = '+a+RT(b))+'.')
      ], shortcut:'Pull the perfect square out: '+K(RT(n)+' = '+a+RT(b))+'.', hint:'Find the biggest perfect square that divides '+K(n)+'.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(RT(n))+' ko simplest radical form me likhna hai.'),
        step('Step 2 - Perfect-square factor dhoondo','<br>'+K(n+' = '+POW(a,'2')+T+b)+'  (yahan '+K(POW(a,'2')+' = '+aa)+' perfect square hai).'),
        step('Step 3 - Root ko todo','<br>'+K(RT(n)+' = '+RT(POW(a,'2'))+T+RT(b))+'.'),
        step('Step 4 - Square root bahar nikaalo','<br>'+K(RT(POW(a,'2'))+' = '+a)+', toh '+K(RT(n)+' = '+a+RT(b))+'.')
      ], shortcut:'Perfect square bahar nikaalo: '+K(RT(n)+' = '+a+RT(b))+'.', hint:K(n)+' ko divide karne wala sabse bada perfect square dhoondo.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(RT(n))+' को सरलतम करणी रूप में लिखना है।'),
        step('चरण 2 - पूर्ण-वर्ग गुणनखंड खोजो','<br>'+K(n+' = '+POW(a,'2')+T+b)+'  (यहाँ '+K(POW(a,'2')+' = '+aa)+' पूर्ण वर्ग है)।'),
        step('चरण 3 - मूल को तोड़ो','<br>'+K(RT(n)+' = '+RT(POW(a,'2'))+T+RT(b))+'।'),
        step('चरण 4 - वर्गमूल बाहर निकालो','<br>'+K(RT(POW(a,'2'))+' = '+a)+', तो '+K(RT(n)+' = '+a+RT(b))+'।')
      ], shortcut:'पूर्ण वर्ग बाहर निकालो: '+K(RT(n)+' = '+a+RT(b))+'।', hint:K(n)+' को विभाजित करने वाला सबसे बड़ा पूर्ण वर्ग खोजो।' }
    );
  };

  window.buildSqPfV5Solution=function(a,b,num,den){
    var ab=a*b;
    return S(
      { steps:[
        step('Step 1 - Understand','<br>We must find '+K(RT(num)+D+RT(den))+'.'),
        step('Step 2 - Solve each root','<br>'+K(RT(num)+' = '+ab)+'  and  '+K(RT(den)+' = '+b)+'.'),
        step('Step 3 - Divide (numerator over denominator)','<br>'+K(FR(ab,b)+' = '+a)+'.'),
        step('Step 4 - Final answer','<br>'+K(a)+'.')
      ], shortcut:K(RT(num)+D+RT(den)+' = '+FR(ab,b)+' = '+a)+'.', hint:'Find each square root first, then divide.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(RT(num)+D+RT(den))+' nikaalna hai.'),
        step('Step 2 - Dono root solve karo','<br>'+K(RT(num)+' = '+ab)+'  aur  '+K(RT(den)+' = '+b)+'.'),
        step('Step 3 - Divide karo (upar numerator, niche denominator)','<br>'+K(FR(ab,b)+' = '+a)+'.'),
        step('Step 4 - Final answer','<br>'+K(a)+'.')
      ], shortcut:K(RT(num)+D+RT(den)+' = '+FR(ab,b)+' = '+a)+'.', hint:'Pehle dono square root nikaalo, phir divide karo.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(RT(num)+D+RT(den))+' निकालना है।'),
        step('चरण 2 - दोनों मूल हल करो','<br>'+K(RT(num)+' = '+ab)+'  और  '+K(RT(den)+' = '+b)+'।'),
        step('चरण 3 - भाग दो (ऊपर अंश, नीचे हर)','<br>'+K(FR(ab,b)+' = '+a)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(a)+'।')
      ], shortcut:K(RT(num)+D+RT(den)+' = '+FR(ab,b)+' = '+a)+'।', hint:'पहले दोनों वर्गमूल निकालो, फिर भाग दो।' }
    );
  };
})();
