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
        step('Step 1 - Samjho','<br>'+K(RT(sq))+' ko abhajya gunankhand vidhi se nikaalna hai (yaani '+K(sq)+' ko chhote abhajya tukdo me todna).'),
        step('Step 2 - Abhajya me todo','<br>'+K(sq+' = '+ch)+'.'),
        step('Step 3 - Saman jode banao','<br>'+K(sq+' = '+pv)+'.<br>Saman abhajya ko do-do me group karo.'),
        step('Step 4 - Har jode se ek lo','<br>'+K(RT(sq)+' = '+oneTex)+'.'),
        step('Step 5 - Antim uttar','<br>'+K(RT(sq)+' = '+r)+'.')
      ], shortcut:'Saman abhajya ke jode banao, har jode se ek lo, guna karo: '+K(RT(sq)+' = '+r)+'.', hint:K(sq)+' ko abhajya me todo, phir jode banao.' }
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
        step('Step 1 - Samjho','<br>Diya hai '+K(num+' = '+POW(p,'3'))+'. Ise sabse chhoti sankhya se guna karke poorn varg banana hai.'),
        step('Step 2 - Abhajya likho','<br>'+K(num+' = '+p+T+p+T+p)+'.'),
        step('Step 3 - Jode banao','<br>'+K(num+' = ('+p+T+p+')'+T+p)+'.<br>Ek '+K(p)+' akela bacha.'),
        step('Step 4 - Joda poora karo','<br>'+K(p)+' se guna karo taaki akele '+K(p)+' ko bhi saathi mil jaaye.'),
        step('Step 5 - Janch karo','<br>'+K(num+T+p+' = '+(num*p)+' = '+sq2)+', poorn varg.'),
        step('Step 6 - Antim uttar','<br>'+K(p)+'.')
      ], shortcut:'Akela abhajya '+K(p)+' hai, isliye '+K(p)+' se guna karo.', hint:'Poorn varg me har abhajya jode me hona chahiye.' }
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
        step('Step 1 - Samjho','<br>'+K(RT(n))+' ko saraltam karni roop me likhna hai.'),
        step('Step 2 - Poorn-varg gunankhand dhoondo','<br>'+K(n+' = '+POW(a,'2')+T+b)+'  (yahan '+K(POW(a,'2')+' = '+aa)+' poorn varg hai).'),
        step('Step 3 - Mool ko todo','<br>'+K(RT(n)+' = '+RT(POW(a,'2'))+T+RT(b))+'.'),
        step('Step 4 - Vargmool bahar nikaalo','<br>'+K(RT(POW(a,'2'))+' = '+a)+', to '+K(RT(n)+' = '+a+RT(b))+'.')
      ], shortcut:'Poorn varg bahar nikaalo: '+K(RT(n)+' = '+a+RT(b))+'.', hint:K(n)+' ko vibhajit karne wala sabse bada poorn varg dhoondo.' }
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
        step('Step 1 - Samjho','<br>'+K(RT(num)+D+RT(den))+' nikaalna hai.'),
        step('Step 2 - Dono mool hal karo','<br>'+K(RT(num)+' = '+ab)+'  aur  '+K(RT(den)+' = '+b)+'.'),
        step('Step 3 - Bhag do (upar ansh, niche har)','<br>'+K(FR(ab,b)+' = '+a)+'.'),
        step('Step 4 - Antim uttar','<br>'+K(a)+'.')
      ], shortcut:K(RT(num)+D+RT(den)+' = '+FR(ab,b)+' = '+a)+'.', hint:'Pehle dono vargmool nikaalo, phir bhag do.' }
    );
  };
})();
