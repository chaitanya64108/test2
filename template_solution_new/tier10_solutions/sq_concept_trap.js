/* tier10 - Template 43: sq_concept_trap (Concept Trap True/False)
   buildTrapAddSolution(a,b,kind) buildTrapMulSolution(a,b,kind)
   buildTrapAbsSolution(n) buildTrapNegRootSolution(v)
   buildTrapCbrtNegSolution(n,r) buildTrapAbsConceptSolution()
   buildTrapDivSolution(a,b) buildTrapCbrtVsSqrtSolution() */
(function(){
  var SB=window.SB; if(!SB) return;
  var K=SB.K,RT=SB.RT,CRT=SB.CRT,POW=SB.POW,FR=SB.FR,T=SB.T,step=SB.step,S=SB.S;

  // sqrt(a+b) vs sqrt(a)+sqrt(b)  OR cbrt for kind='cbrt'  -> FALSE
  window.buildTrapAddSolution=function(a,b,kind){
    var isCb=(kind==='cbrt');
    var R=isCb?CRT:RT, ra=Math.round(isCb?Math.cbrt(a):Math.sqrt(a)), rb=Math.round(isCb?Math.cbrt(b):Math.sqrt(b));
    var sum=a+b; var rootSum=isCb?Math.cbrt(sum):Math.sqrt(sum);
    var sumIsNice=Math.abs(rootSum-Math.round(rootSum))<1e-9; var rs=Math.round(rootSum);
    var lhs=R(sum), rhs=R(a)+' + '+R(b);
    var lhsVal=sumIsNice?rs:rootSum.toFixed(2);
    return S(
      { steps:[
        step('Step 1 - Read the claim','<br>The claim says '+K(lhs+' = '+rhs)+'.'),
        step('Step 2 - Test with numbers','<br>Left side: '+K(lhs+' = '+(isCb?CRT(sum):RT(sum))+(sumIsNice?(' = '+rs):(' \\approx '+lhsVal)))+'. Right side: '+K(rhs+' = '+ra+' + '+rb+' = '+(ra+rb))+'.'),
        step('Step 3 - Answer','<br>The two sides are not equal, so the statement is False. Roots do not split over addition.')
      ], shortcut:'Root of a sum is NOT the sum of roots.', hint:'Try plugging the actual numbers into both sides.' },
      { steps:[
        step('Step 1 - Claim padho','<br>Claim kehta hai '+K(lhs+' = '+rhs)+'.'),
        step('Step 2 - Numbers se test karo','<br>Left side: '+K(lhs+' = '+(isCb?CRT(sum):RT(sum))+(sumIsNice?(' = '+rs):(' \\approx '+lhsVal)))+'. Right side: '+K(rhs+' = '+ra+' + '+rb+' = '+(ra+rb))+'.'),
        step('Step 3 - Answer','<br>Dono sides barabar nahi hain, toh statement False hai. Roots addition par split nahi hote.')
      ], shortcut:'Sum ka root, roots ke sum ke barabar NAHI hota.', hint:'Dono sides mein actual numbers daal ke dekho.' },
      { steps:[
        step('\u091a\u0930\u0923 1 - \u0926\u093e\u0935\u093e \u092a\u0922\u093c\u094b','<br>\u0926\u093e\u0935\u093e \u0915\u0939\u0924\u093e \u0939\u0948 '+K(lhs+' = '+rhs)+'\u0964'),
        step('\u091a\u0930\u0923 2 - \u0938\u0902\u0916\u094d\u092f\u093e\u0913\u0902 \u0938\u0947 \u091c\u093e\u0901\u091a\u094b','<br>\u092c\u093e\u092f\u0901 \u0913\u0930: '+K(lhs+' = '+(isCb?CRT(sum):RT(sum))+(sumIsNice?(' = '+rs):(' \\approx '+lhsVal)))+'\u0964 \u0926\u093e\u092f\u0901 \u0913\u0930: '+K(rhs+' = '+ra+' + '+rb+' = '+(ra+rb))+'\u0964'),
        step('\u091a\u0930\u0923 3 - \u0909\u0924\u094d\u0924\u0930','<br>\u0926\u094b\u0928\u094b\u0902 \u092a\u0915\u094d\u0937 \u092c\u0930\u093e\u092c\u0930 \u0928\u0939\u0940\u0902 \u0939\u0948\u0902, \u0907\u0938\u0932\u093f\u090f \u0915\u0925\u0928 \u0917\u0932\u0924 \u0939\u0948\u0964 \u092e\u0942\u0932 \u091c\u094b\u0921\u093c \u092a\u0930 \u0935\u093f\u092d\u093e\u091c\u093f\u0924 \u0928\u0939\u0940\u0902 \u0939\u094b\u0924\u0947\u0964')
      ], shortcut:'\u091c\u094b\u0921\u093c \u0915\u093e \u092e\u0942\u0932, \u092e\u0942\u0932\u094b\u0902 \u0915\u0947 \u091c\u094b\u0921\u093c \u0915\u0947 \u092c\u0930\u093e\u092c\u0930 \u0928\u0939\u0940\u0902 \u0939\u094b\u0924\u093e\u0964', hint:'\u0926\u094b\u0928\u094b\u0902 \u092a\u0915\u094d\u0937\u094b\u0902 \u092e\u0947\u0902 \u0935\u093e\u0938\u094d\u0924\u0935\u093f\u0915 \u0938\u0902\u0916\u094d\u092f\u093e\u090f\u0901 \u0921\u093e\u0932\u0915\u0930 \u0926\u0947\u0916\u094b\u0964' }
    );
  };

  // sqrt(ab)=sqrt(a)sqrt(b) -> TRUE
  window.buildTrapMulSolution=function(a,b,kind){
    var ab=a*b, ra=Math.round(Math.sqrt(a)), rb=Math.round(Math.sqrt(b)), rab=Math.round(Math.sqrt(ab));
    return S(
      { steps:[
        step('Step 1 - Read the claim','<br>The claim says '+K(RT(a+T+b)+' = '+RT(a)+T+RT(b))+'.'),
        step('Step 2 - Test with numbers','<br>Left: '+K(RT(ab)+' = '+rab)+'. Right: '+K(RT(a)+T+RT(b)+' = '+ra+T+rb+' = '+(ra*rb))+'.'),
        step('Step 3 - Answer','<br>Both sides give '+K(rab)+', so the statement is True. Roots DO split over multiplication.')
      ], shortcut:'Root of a product = product of roots (this one is True).', hint:'Multiplication is friendly to roots, unlike addition.' },
      { steps:[
        step('Step 1 - Claim padho','<br>Claim kehta hai '+K(RT(a+T+b)+' = '+RT(a)+T+RT(b))+'.'),
        step('Step 2 - Numbers se test karo','<br>Left: '+K(RT(ab)+' = '+rab)+'. Right: '+K(RT(a)+T+RT(b)+' = '+ra+T+rb+' = '+(ra*rb))+'.'),
        step('Step 3 - Answer','<br>Dono sides '+K(rab)+' dete hain, toh statement True hai. Roots multiplication par split hote hain.')
      ], shortcut:'Product ka root = roots ka product (ye True hai).', hint:'Addition ke ulat, multiplication roots ke saath theek chalta hai.' },
      { steps:[
        step('\u091a\u0930\u0923 1 - \u0926\u093e\u0935\u093e \u092a\u0922\u093c\u094b','<br>\u0926\u093e\u0935\u093e \u0915\u0939\u0924\u093e \u0939\u0948 '+K(RT(a+T+b)+' = '+RT(a)+T+RT(b))+'\u0964'),
        step('\u091a\u0930\u0923 2 - \u0938\u0902\u0916\u094d\u092f\u093e\u0913\u0902 \u0938\u0947 \u091c\u093e\u0901\u091a\u094b','<br>\u092c\u093e\u092f\u0901: '+K(RT(ab)+' = '+rab)+'\u0964 \u0926\u093e\u092f\u0901: '+K(RT(a)+T+RT(b)+' = '+ra+T+rb+' = '+(ra*rb))+'\u0964'),
        step('\u091a\u0930\u0923 3 - \u0909\u0924\u094d\u0924\u0930','<br>\u0926\u094b\u0928\u094b\u0902 \u092a\u0915\u094d\u0937 '+K(rab)+' \u0926\u0947\u0924\u0947 \u0939\u0948\u0902, \u0907\u0938\u0932\u093f\u090f \u0915\u0925\u0928 \u0938\u0939\u0940 \u0939\u0948\u0964 \u092e\u0942\u0932 \u0917\u0941\u0923\u093e \u092a\u0930 \u0935\u093f\u092d\u093e\u091c\u093f\u0924 \u0939\u094b\u0924\u0947 \u0939\u0948\u0902\u0964')
      ], shortcut:'\u0917\u0941\u0923\u0928\u092b\u0932 \u0915\u093e \u092e\u0942\u0932 = \u092e\u0942\u0932\u094b\u0902 \u0915\u093e \u0917\u0941\u0923\u0928\u092b\u0932 (\u092f\u0939 \u0938\u0939\u0940 \u0939\u0948)\u0964', hint:'\u091c\u094b\u0921\u093c \u0915\u0947 \u0935\u093f\u092a\u0930\u0940\u0924, \u0917\u0941\u0923\u093e \u092e\u0942\u0932\u094b\u0902 \u0915\u0947 \u0938\u093e\u0925 \u0920\u0940\u0915 \u091a\u0932\u0924\u093e \u0939\u0948\u0964' }
    );
  };

  // sqrt(n^2)=|n| -> TRUE (n given positive)
  window.buildTrapAbsSolution=function(n){
    var sq=n*n;
    return S(
      { steps:[
        step('Step 1 - Read the claim','<br>The claim says '+K(RT(POW(n,2))+' = '+n)+'.'),
        step('Step 2 - Simplify the left side','<br>'+K(RT(POW(n,2))+' = '+RT(sq)+' = '+n)+', since the square root of a square is the positive value.'),
        step('Step 3 - Answer','<br>Both sides equal '+K(n)+', so the statement is True.')
      ], shortcut:K(RT(POW('n',2))+' = |n|')+', and for positive n that is just n.', hint:'Square root undoes squaring, giving the positive root.' },
      { steps:[
        step('Step 1 - Claim padho','<br>Claim kehta hai '+K(RT(POW(n,2))+' = '+n)+'.'),
        step('Step 2 - Left side simplify karo','<br>'+K(RT(POW(n,2))+' = '+RT(sq)+' = '+n)+', kyunki square ka square root positive value hota hai.'),
        step('Step 3 - Answer','<br>Dono sides '+K(n)+' ke barabar hain, toh statement True hai.')
      ], shortcut:K(RT(POW('n',2))+' = |n|')+', positive n ke liye ye sirf n hai.', hint:'Square root squaring ko undo karta hai, positive root deta hai.' },
      { steps:[
        step('\u091a\u0930\u0923 1 - \u0926\u093e\u0935\u093e \u092a\u0922\u093c\u094b','<br>\u0926\u093e\u0935\u093e \u0915\u0939\u0924\u093e \u0939\u0948 '+K(RT(POW(n,2))+' = '+n)+'\u0964'),
        step('\u091a\u0930\u0923 2 - \u092c\u093e\u092f\u0947\u0902 \u092a\u0915\u094d\u0937 \u0915\u094b \u0938\u0930\u0932 \u0915\u0930\u094b','<br>'+K(RT(POW(n,2))+' = '+RT(sq)+' = '+n)+', \u0915\u094d\u092f\u094b\u0902\u0915\u093f \u0935\u0930\u094d\u0917 \u0915\u093e \u0935\u0930\u094d\u0917\u092e\u0942\u0932 \u0927\u0928\u093e\u0924\u094d\u092e\u0915 \u092e\u093e\u0928 \u0939\u094b\u0924\u093e \u0939\u0948\u0964'),
        step('\u091a\u0930\u0923 3 - \u0909\u0924\u094d\u0924\u0930','<br>\u0926\u094b\u0928\u094b\u0902 \u092a\u0915\u094d\u0937 '+K(n)+' \u0915\u0947 \u092c\u0930\u093e\u092c\u0930 \u0939\u0948\u0902, \u0907\u0938\u0932\u093f\u090f \u0915\u0925\u0928 \u0938\u0939\u0940 \u0939\u0948\u0964')
      ], shortcut:K(RT(POW('n',2))+' = |n|')+', \u0927\u0928\u093e\u0924\u094d\u092e\u0915 n \u0915\u0947 \u0932\u093f\u090f \u092f\u0939 \u0915\u0947\u0935\u0932 n \u0939\u0948\u0964', hint:'\u0935\u0930\u094d\u0917\u092e\u0942\u0932 \u0935\u0930\u094d\u0917 \u0915\u094b \u092a\u0932\u091f\u0924\u093e \u0939\u0948, \u0927\u0928\u093e\u0924\u094d\u092e\u0915 \u092e\u0942\u0932 \u0926\u0947\u0924\u093e \u0939\u0948\u0964' }
    );
  };

  // sqrt(x) = -v  -> no real solution (FALSE)
  window.buildTrapNegRootSolution=function(v){
    return S(
      { steps:[
        step('Step 1 - Read the claim','<br>The claim says '+K(RT('x')+' = -'+v)+' has a real solution.'),
        step('Step 2 - Sign of a square root','<br>The square root symbol always gives a value that is zero or positive, never negative.'),
        step('Step 3 - Answer','<br>Since '+K('-'+v)+' is negative, no real number works. The statement is False.')
      ], shortcut:'A square root is never negative.', hint:'Can a principal square root ever be below zero?' },
      { steps:[
        step('Step 1 - Claim padho','<br>Claim kehta hai '+K(RT('x')+' = -'+v)+' ka real solution hai.'),
        step('Step 2 - Square root ka sign','<br>Square root ka symbol hamesha zero ya positive value deta hai, kabhi negative nahi.'),
        step('Step 3 - Answer','<br>Kyunki '+K('-'+v)+' negative hai, koi real number kaam nahi karta. Statement False hai.')
      ], shortcut:'Square root kabhi negative nahi hota.', hint:'Kya principal square root kabhi zero se neeche ja sakta hai?' },
      { steps:[
        step('\u091a\u0930\u0923 1 - \u0926\u093e\u0935\u093e \u092a\u0922\u093c\u094b','<br>\u0926\u093e\u0935\u093e \u0915\u0939\u0924\u093e \u0939\u0948 '+K(RT('x')+' = -'+v)+' \u0915\u093e \u0935\u093e\u0938\u094d\u0924\u0935\u093f\u0915 \u0939\u0932 \u0939\u0948\u0964'),
        step('\u091a\u0930\u0923 2 - \u0935\u0930\u094d\u0917\u092e\u0942\u0932 \u0915\u093e \u091a\u093f\u0939\u094d\u0928','<br>\u0935\u0930\u094d\u0917\u092e\u0942\u0932 \u0915\u093e \u092a\u094d\u0930\u0924\u0940\u0915 \u0939\u092e\u0947\u0936\u093e \u0936\u0942\u0928\u094d\u092f \u092f\u093e \u0927\u0928\u093e\u0924\u094d\u092e\u0915 \u092e\u093e\u0928 \u0926\u0947\u0924\u093e \u0939\u0948, \u0915\u092d\u0940 \u090b\u0923\u093e\u0924\u094d\u092e\u0915 \u0928\u0939\u0940\u0902\u0964'),
        step('\u091a\u0930\u0923 3 - \u0909\u0924\u094d\u0924\u0930','<br>\u091a\u0942\u0902\u0915\u093f '+K('-'+v)+' \u090b\u0923\u093e\u0924\u094d\u092e\u0915 \u0939\u0948, \u0915\u094b\u0908 \u0935\u093e\u0938\u094d\u0924\u0935\u093f\u0915 \u0938\u0902\u0916\u094d\u092f\u093e \u0915\u093e\u092e \u0928\u0939\u0940\u0902 \u0915\u0930\u0924\u0940\u0964 \u0915\u0925\u0928 \u0917\u0932\u0924 \u0939\u0948\u0964')
      ], shortcut:'\u0935\u0930\u094d\u0917\u092e\u0942\u0932 \u0915\u092d\u0940 \u090b\u0923\u093e\u0924\u094d\u092e\u0915 \u0928\u0939\u0940\u0902 \u0939\u094b\u0924\u093e\u0964', hint:'\u0915\u094d\u092f\u093e \u092e\u0941\u0916\u094d\u092f \u0935\u0930\u094d\u0917\u092e\u0942\u0932 \u0915\u092d\u0940 \u0936\u0942\u0928\u094d\u092f \u0938\u0947 \u0928\u0940\u091a\u0947 \u091c\u093e \u0938\u0915\u0924\u093e \u0939\u0948?' }
    );
  };

  // cbrt(r) = -n where r = -(n^3) -> TRUE
  window.buildTrapCbrtNegSolution=function(n,r){
    return S(
      { steps:[
        step('Step 1 - Read the claim','<br>The claim says '+K(CRT(r)+' = -'+n)+'.'),
        step('Step 2 - Cube the answer','<br>Check: '+K('(-'+n+')^{3} = '+r)+', so the cube root of '+K(r)+' really is '+K('-'+n)+'.'),
        step('Step 3 - Answer','<br>Cube roots of negative numbers are allowed, so the statement is True.')
      ], shortcut:'Cube roots CAN be negative (unlike square roots).', hint:'Cube the proposed answer and see if you get back '+r+'.' },
      { steps:[
        step('Step 1 - Claim padho','<br>Claim kehta hai '+K(CRT(r)+' = -'+n)+'.'),
        step('Step 2 - Answer ko cube karo','<br>Check: '+K('(-'+n+')^{3} = '+r)+', toh '+K(r)+' ka cube root sach mein '+K('-'+n)+' hai.'),
        step('Step 3 - Answer','<br>Negative numbers ke cube roots allowed hain, toh statement True hai.')
      ], shortcut:'Cube roots negative ho SAKTE hain (square roots ke ulat).', hint:'Proposed answer ko cube karke dekho '+r+' wapas aata hai ya nahi.' },
      { steps:[
        step('\u091a\u0930\u0923 1 - \u0926\u093e\u0935\u093e \u092a\u0922\u093c\u094b','<br>\u0926\u093e\u0935\u093e \u0915\u0939\u0924\u093e \u0939\u0948 '+K(CRT(r)+' = -'+n)+'\u0964'),
        step('\u091a\u0930\u0923 2 - \u0909\u0924\u094d\u0924\u0930 \u0915\u094b \u0918\u0928 \u0915\u0930\u094b','<br>\u091c\u093e\u0901\u091a: '+K('(-'+n+')^{3} = '+r)+', \u0924\u094b '+K(r)+' \u0915\u093e \u0918\u0928\u092e\u0942\u0932 \u0935\u093e\u0915\u0908 '+K('-'+n)+' \u0939\u0948\u0964'),
        step('\u091a\u0930\u0923 3 - \u0909\u0924\u094d\u0924\u0930','<br>\u090b\u0923\u093e\u0924\u094d\u092e\u0915 \u0938\u0902\u0916\u094d\u092f\u093e\u0913\u0902 \u0915\u0947 \u0918\u0928\u092e\u0942\u0932 \u0938\u0902\u092d\u0935 \u0939\u0948\u0902, \u0907\u0938\u0932\u093f\u090f \u0915\u0925\u0928 \u0938\u0939\u0940 \u0939\u0948\u0964')
      ], shortcut:'\u0918\u0928\u092e\u0942\u0932 \u090b\u0923\u093e\u0924\u094d\u092e\u0915 \u0939\u094b \u0938\u0915\u0924\u0947 \u0939\u0948\u0902 (\u0935\u0930\u094d\u0917\u092e\u0942\u0932 \u0915\u0947 \u0935\u093f\u092a\u0930\u0940\u0924)\u0964', hint:'\u092a\u094d\u0930\u0938\u094d\u0924\u093e\u0935\u093f\u0924 \u0909\u0924\u094d\u0924\u0930 \u0915\u094b \u0918\u0928 \u0915\u0930\u0915\u0947 \u0926\u0947\u0916\u094b '+r+' \u0935\u093e\u092a\u0938 \u0906\u0924\u093e \u0939\u0948 \u092f\u093e \u0928\u0939\u0940\u0902\u0964' }
    );
  };

  // sqrt(a^2)=|a| for any real a -> TRUE (concept)
  window.buildTrapAbsConceptSolution=function(){
    return S(
      { steps:[
        step('Step 1 - Read the claim','<br>The claim says '+K(RT(POW('a',2))+' = |a|')+' for every real number a.'),
        step('Step 2 - Why the absolute value','<br>Squaring removes any minus sign, and the root gives back the positive size, so we get the magnitude |a|.'),
        step('Step 3 - Answer','<br>This holds for positive, negative and zero a, so the statement is True.')
      ], shortcut:K(RT(POW('a',2))+' = |a|')+' always.', hint:'Test a negative value like a = -3 to confirm.' },
      { steps:[
        step('Step 1 - Claim padho','<br>Claim kehta hai har real number a ke liye '+K(RT(POW('a',2))+' = |a|')+'.'),
        step('Step 2 - Absolute value kyun','<br>Squaring minus sign hata deta hai, aur root positive size wapas deta hai, toh magnitude |a| milta hai.'),
        step('Step 3 - Answer','<br>Ye positive, negative aur zero a ke liye sach hai, toh statement True hai.')
      ], shortcut:K(RT(POW('a',2))+' = |a|')+' hamesha.', hint:'a = -3 jaisa negative value test karke confirm karo.' },
      { steps:[
        step('\u091a\u0930\u0923 1 - \u0926\u093e\u0935\u093e \u092a\u0922\u093c\u094b','<br>\u0926\u093e\u0935\u093e \u0915\u0939\u0924\u093e \u0939\u0948 \u0915\u093f \u0939\u0930 \u0935\u093e\u0938\u094d\u0924\u0935\u093f\u0915 \u0938\u0902\u0916\u094d\u092f\u093e a \u0915\u0947 \u0932\u093f\u090f '+K(RT(POW('a',2))+' = |a|')+'\u0964'),
        step('\u091a\u0930\u0923 2 - \u0928\u093f\u0930\u092a\u0947\u0915\u094d\u0937 \u092e\u093e\u0928 \u0915\u094d\u092f\u094b\u0902','<br>\u0935\u0930\u094d\u0917 \u0915\u0930\u0928\u0947 \u0938\u0947 \u090b\u0923 \u091a\u093f\u0939\u094d\u0928 \u0939\u091f \u091c\u093e\u0924\u093e \u0939\u0948, \u0914\u0930 \u092e\u0942\u0932 \u0927\u0928\u093e\u0924\u094d\u092e\u0915 \u0906\u0915\u093e\u0930 \u0935\u093e\u092a\u0938 \u0926\u0947\u0924\u093e \u0939\u0948, \u0924\u094b |a| \u092e\u093f\u0932\u0924\u093e \u0939\u0948\u0964'),
        step('\u091a\u0930\u0923 3 - \u0909\u0924\u094d\u0924\u0930','<br>\u092f\u0939 \u0927\u0928\u093e\u0924\u094d\u092e\u0915, \u090b\u0923\u093e\u0924\u094d\u092e\u0915 \u0914\u0930 \u0936\u0942\u0928\u094d\u092f a \u0915\u0947 \u0932\u093f\u090f \u0938\u091a \u0939\u0948, \u0907\u0938\u0932\u093f\u090f \u0915\u0925\u0928 \u0938\u0939\u0940 \u0939\u0948\u0964')
      ], shortcut:K(RT(POW('a',2))+' = |a|')+' \u0939\u092e\u0947\u0936\u093e\u0964', hint:'a = -3 \u091c\u0948\u0938\u093e \u090b\u0923\u093e\u0924\u094d\u092e\u0915 \u092e\u093e\u0928 \u091c\u093e\u0901\u091a\u0915\u0930 \u092a\u0941\u0937\u094d\u091f\u093f \u0915\u0930\u094b\u0964' }
    );
  };

  // sqrt(a/b)=sqrt(a)/sqrt(b) -> TRUE
  window.buildTrapDivSolution=function(a,b){
    var ra=Math.round(Math.sqrt(a)), rb=Math.round(Math.sqrt(b)), q=a/b, rq=Math.round(Math.sqrt(q));
    return S(
      { steps:[
        step('Step 1 - Read the claim','<br>The claim says '+K(RT(FR(a,b))+' = '+FR(RT(a),RT(b)))+'.'),
        step('Step 2 - Test with numbers','<br>Left: '+K(RT(FR(a,b))+' = '+RT(q)+' = '+rq)+'. Right: '+K(FR(RT(a),RT(b))+' = '+FR(ra,rb)+' = '+rq)+'.'),
        step('Step 3 - Answer','<br>Both sides equal '+K(rq)+', so the statement is True. Roots split over division too.')
      ], shortcut:'Root of a quotient = quotient of roots (True).', hint:'Division behaves like multiplication for roots.' },
      { steps:[
        step('Step 1 - Claim padho','<br>Claim kehta hai '+K(RT(FR(a,b))+' = '+FR(RT(a),RT(b)))+'.'),
        step('Step 2 - Numbers se test karo','<br>Left: '+K(RT(FR(a,b))+' = '+RT(q)+' = '+rq)+'. Right: '+K(FR(RT(a),RT(b))+' = '+FR(ra,rb)+' = '+rq)+'.'),
        step('Step 3 - Answer','<br>Dono sides '+K(rq)+' dete hain, toh statement True hai. Roots division par bhi split hote hain.')
      ], shortcut:'Quotient ka root = roots ka quotient (True).', hint:'Division roots ke liye multiplication jaisa behave karta hai.' },
      { steps:[
        step('\u091a\u0930\u0923 1 - \u0926\u093e\u0935\u093e \u092a\u0922\u093c\u094b','<br>\u0926\u093e\u0935\u093e \u0915\u0939\u0924\u093e \u0939\u0948 '+K(RT(FR(a,b))+' = '+FR(RT(a),RT(b)))+'\u0964'),
        step('\u091a\u0930\u0923 2 - \u0938\u0902\u0916\u094d\u092f\u093e\u0913\u0902 \u0938\u0947 \u091c\u093e\u0901\u091a\u094b','<br>\u092c\u093e\u092f\u0901: '+K(RT(FR(a,b))+' = '+RT(q)+' = '+rq)+'\u0964 \u0926\u093e\u092f\u0901: '+K(FR(RT(a),RT(b))+' = '+FR(ra,rb)+' = '+rq)+'\u0964'),
        step('\u091a\u0930\u0923 3 - \u0909\u0924\u094d\u0924\u0930','<br>\u0926\u094b\u0928\u094b\u0902 \u092a\u0915\u094d\u0937 '+K(rq)+' \u0926\u0947\u0924\u0947 \u0939\u0948\u0902, \u0907\u0938\u0932\u093f\u090f \u0915\u0925\u0928 \u0938\u0939\u0940 \u0939\u0948\u0964 \u092e\u0942\u0932 \u092d\u093e\u0917 \u092a\u0930 \u092d\u0940 \u0935\u093f\u092d\u093e\u091c\u093f\u0924 \u0939\u094b\u0924\u0947 \u0939\u0948\u0902\u0964')
      ], shortcut:'\u092d\u093e\u0917\u092b\u0932 \u0915\u093e \u092e\u0942\u0932 = \u092e\u0942\u0932\u094b\u0902 \u0915\u093e \u092d\u093e\u0917\u092b\u0932 (\u0938\u0939\u0940)\u0964', hint:'\u092d\u093e\u0917 \u092e\u0942\u0932\u094b\u0902 \u0915\u0947 \u0932\u093f\u090f \u0917\u0941\u0923\u093e \u091c\u0948\u0938\u093e \u0935\u094d\u092f\u0935\u0939\u093e\u0930 \u0915\u0930\u0924\u093e \u0939\u0948\u0964' }
    );
  };

  // property true for cube roots not square roots: cube root of a negative number is real
  window.buildTrapCbrtVsSqrtSolution=function(){
    return S(
      { steps:[
        step('Step 1 - What is being asked','<br>We want a property that is true for cube roots but not for square roots.'),
        step('Step 2 - Compare the two roots','<br>'+K(CRT('-8')+' = -2')+' is a real number, but '+K(RT('-4'))+' is not real.'),
        step('Step 3 - Answer','<br>So the special property is: the cube root of a negative number is real (square roots of negatives are not).')
      ], shortcut:'Cube roots of negatives are real; square roots of negatives are not.', hint:'Think about what '+K(CRT('-8'))+' and '+K(RT('-4'))+' give.' },
      { steps:[
        step('Step 1 - Kya poocha gaya hai','<br>Hamein aisi property chahiye jo cube roots ke liye sach ho par square roots ke liye nahi.'),
        step('Step 2 - Dono roots compare karo','<br>'+K(CRT('-8')+' = -2')+' ek real number hai, par '+K(RT('-4'))+' real nahi hai.'),
        step('Step 3 - Answer','<br>Toh special property hai: negative number ka cube root real hota hai (negatives ke square roots nahi).')
      ], shortcut:'Negatives ke cube roots real hote hain; square roots nahi.', hint:K(CRT('-8'))+' aur '+K(RT('-4'))+' kya dete hain socho.' },
      { steps:[
        step('\u091a\u0930\u0923 1 - \u0915\u094d\u092f\u093e \u092a\u0942\u091b\u093e \u0917\u092f\u093e \u0939\u0948','<br>\u0939\u092e\u0947\u0902 \u0910\u0938\u0940 \u0917\u0941\u0923 \u091a\u093e\u0939\u093f\u090f \u091c\u094b \u0918\u0928\u092e\u0942\u0932 \u0915\u0947 \u0932\u093f\u090f \u0938\u091a \u0939\u094b \u092a\u0930 \u0935\u0930\u094d\u0917\u092e\u0942\u0932 \u0915\u0947 \u0932\u093f\u090f \u0928\u0939\u0940\u0902\u0964'),
        step('\u091a\u0930\u0923 2 - \u0926\u094b\u0928\u094b\u0902 \u092e\u0942\u0932\u094b\u0902 \u0915\u0940 \u0924\u0941\u0932\u0928\u093e \u0915\u0930\u094b','<br>'+K(CRT('-8')+' = -2')+' \u090f\u0915 \u0935\u093e\u0938\u094d\u0924\u0935\u093f\u0915 \u0938\u0902\u0916\u094d\u092f\u093e \u0939\u0948, \u092a\u0930 '+K(RT('-4'))+' \u0935\u093e\u0938\u094d\u0924\u0935\u093f\u0915 \u0928\u0939\u0940\u0902 \u0939\u0948\u0964'),
        step('\u091a\u0930\u0923 3 - \u0909\u0924\u094d\u0924\u0930','<br>\u0924\u094b \u0935\u093f\u0936\u0947\u0937 \u0917\u0941\u0923 \u0939\u0948: \u090b\u0923\u093e\u0924\u094d\u092e\u0915 \u0938\u0902\u0916\u094d\u092f\u093e \u0915\u093e \u0918\u0928\u092e\u0942\u0932 \u0935\u093e\u0938\u094d\u0924\u0935\u093f\u0915 \u0939\u094b\u0924\u093e \u0939\u0948 (\u090b\u0923\u093e\u0924\u094d\u092e\u0915 \u0915\u0947 \u0935\u0930\u094d\u0917\u092e\u0942\u0932 \u0928\u0939\u0940\u0902)\u0964')
      ], shortcut:'\u090b\u0923\u093e\u0924\u094d\u092e\u0915 \u0915\u0947 \u0918\u0928\u092e\u0942\u0932 \u0935\u093e\u0938\u094d\u0924\u0935\u093f\u0915 \u0939\u094b\u0924\u0947 \u0939\u0948\u0902; \u0935\u0930\u094d\u0917\u092e\u0942\u0932 \u0928\u0939\u0940\u0902\u0964', hint:K(CRT('-8'))+' \u0914\u0930 '+K(RT('-4'))+' \u0915\u094d\u092f\u093e \u0926\u0947\u0924\u0947 \u0939\u0948\u0902 \u0938\u094b\u091a\u094b\u0964' }
    );
  };
})();
