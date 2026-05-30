/* tier10 - Template 19: sq_n2_prop (Square Root of n-squared Property)
   buildSqN2PropSolution(n,nsq,ans,variant), V1(n,nsq,ans), V2(a,b,ans), V3(n), V4(a,b,ans), V5(n,nsq,ans) */
(function(){
  var SB=window.SB; if(!SB) return;
  var K=SB.K,RT=SB.RT,POW=SB.POW,T=SB.T,step=SB.step,S=SB.S;

  window.buildSqN2PropSolution=function(n,nsq,ans,variant){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Find the square root of a number that is itself a perfect square.'),
        step('Step 2 - Recognise the perfect square','<br>'+K(nsq+' = '+POW(n,'2'))+', so '+K(RT(nsq)+' = '+RT(POW(n,'2'))+' = '+n)+'.'),
        step('Step 3 - Final answer','<br>'+K(n)+'.')
      ], shortcut:K(RT(POW(n,'2'))+' = '+n)+'.', hint:'The square root cancels the square.' },
      { steps:[
        step('Step 1 - Samjho','<br>Aise number ka square root nikaalo jo khud perfect square hai.'),
        step('Step 2 - Perfect square pehchano','<br>'+K(nsq+' = '+POW(n,'2'))+', toh '+K(RT(nsq)+' = '+RT(POW(n,'2'))+' = '+n)+'.'),
        step('Step 3 - Final answer','<br>'+K(n)+'.')
      ], shortcut:K(RT(POW(n,'2'))+' = '+n)+'.', hint:'Square root, square ko cancel kar deta hai.' },
      { steps:[
        step('चरण 1 - समझो','<br>ऐसी संख्या का वर्गमूल निकालो जो खुद पूर्ण वर्ग है।'),
        step('चरण 2 - पूर्ण वर्ग पहचानो','<br>'+K(nsq+' = '+POW(n,'2'))+', तो '+K(RT(nsq)+' = '+RT(POW(n,'2'))+' = '+n)+'।'),
        step('चरण 3 - अंतिम उत्तर','<br>'+K(n)+'।')
      ], shortcut:K(RT(POW(n,'2'))+' = '+n)+'।', hint:'वर्गमूल, वर्ग को काट देता है।' }
    );
  };

  window.buildSqN2PropV1Solution=function(n,nsq,ans){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>The number inside is negative, but it is squared first.'),
        step('Step 2 - Squaring removes the sign','<br>'+K('('+n+')^{2} = '+nsq)+' (a negative times a negative is positive).'),
        step('Step 3 - Take the root','<br>'+K(RT(nsq)+' = '+ans)+'. Remember '+K(RT('x^{2}')+' = |x|')+', the non-negative value.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(RT('('+n+')^{2}')+' = '+RT(nsq)+' = '+ans)+'.', hint:'Squaring makes it positive; the root is the positive value, |n|.' },
      { steps:[
        step('Step 1 - Samjho','<br>Andar ka number negative hai, par pehle square hota hai.'),
        step('Step 2 - Square sign hata deta hai','<br>'+K('('+n+')^{2} = '+nsq)+' (negative x negative = positive).'),
        step('Step 3 - Root lo','<br>'+K(RT(nsq)+' = '+ans)+'. Yaad rakho '+K(RT('x^{2}')+' = |x|')+', non-negative value.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(RT('('+n+')^{2}')+' = '+RT(nsq)+' = '+ans)+'.', hint:'Square karne se positive ho jaata hai; root positive value hota hai, |n|.' },
      { steps:[
        step('चरण 1 - समझो','<br>अंदर की संख्या ऋणात्मक है, पर पहले वर्ग होता है।'),
        step('चरण 2 - वर्ग चिन्ह हटा देता है','<br>'+K('('+n+')^{2} = '+nsq)+' (ऋणात्मक x ऋणात्मक = धनात्मक)।'),
        step('चरण 3 - मूल लो','<br>'+K(RT(nsq)+' = '+ans)+'। याद रखो '+K(RT('x^{2}')+' = |x|')+', अऋणात्मक मान।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:K(RT('('+n+')^{2}')+' = '+RT(nsq)+' = '+ans)+'।', hint:'वर्ग करने से धनात्मक हो जाता है; मूल धनात्मक मान होता है, |n|।' }
    );
  };

  window.buildSqN2PropV2Solution=function(a,b,ans){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Two square roots of perfect squares, then add.'),
        step('Step 2 - Take each root','<br>'+K(RT(POW(a,'2'))+' = '+a)+' and '+K(RT(POW(b,'2'))+' = '+b)+'.'),
        step('Step 3 - Add','<br>'+K(a+' + '+b+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(RT(POW(a,'2'))+' + '+RT(POW(b,'2'))+' = '+a+' + '+b+' = '+ans)+'.', hint:'Take each root first, then add.' },
      { steps:[
        step('Step 1 - Samjho','<br>Do perfect squares ke roots, fir jodo.'),
        step('Step 2 - Har root lo','<br>'+K(RT(POW(a,'2'))+' = '+a)+' aur '+K(RT(POW(b,'2'))+' = '+b)+'.'),
        step('Step 3 - Jodo','<br>'+K(a+' + '+b+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(RT(POW(a,'2'))+' + '+RT(POW(b,'2'))+' = '+a+' + '+b+' = '+ans)+'.', hint:'Pehle har root lo, fir jodo.' },
      { steps:[
        step('चरण 1 - समझो','<br>दो पूर्ण वर्गों के मूल, फिर जोड़ो।'),
        step('चरण 2 - हर मूल लो','<br>'+K(RT(POW(a,'2'))+' = '+a)+' और '+K(RT(POW(b,'2'))+' = '+b)+'।'),
        step('चरण 3 - जोड़ो','<br>'+K(a+' + '+b+' = '+ans)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:K(RT(POW(a,'2'))+' + '+RT(POW(b,'2'))+' = '+a+' + '+b+' = '+ans)+'।', hint:'पहले हर मूल लो, फिर जोड़ो।' }
    );
  };

  window.buildSqN2PropV3Solution=function(n){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Is the identity '+K(RT('n^{2}')+' = |n|')+' always correct?'),
        step('Step 2 - Key idea','<br>Squaring gives a non-negative result, and the square root sign is defined as the non-negative value. For example '+K(RT(POW(n,'2'))+' = '+n)+' and '+K(RT(POW('(-'+n+')','2'))+' = '+n)+'.'),
        step('Step 3 - Conclude','<br>So it holds for every value of n.'),
        step('Step 4 - Final answer','<br>True.')
      ], shortcut:K(RT('n^{2}')+' = |n|')+' for all n - True.', hint:'The square root symbol always gives the non-negative value.' },
      { steps:[
        step('Step 1 - Samjho','<br>Kya identity '+K(RT('n^{2}')+' = |n|')+' hamesha sahi hai?'),
        step('Step 2 - Key idea','<br>Square karne se non-negative result milta hai, aur square root sign non-negative value deta hai. Jaise '+K(RT(POW(n,'2'))+' = '+n)+' aur '+K(RT(POW('(-'+n+')','2'))+' = '+n)+'.'),
        step('Step 3 - Nishkarsh','<br>Toh ye har n ke liye sahi hai.'),
        step('Step 4 - Final answer','<br>True (sahi).')
      ], shortcut:K(RT('n^{2}')+' = |n|')+' har n ke liye - True.', hint:'Square root chinh hamesha non-negative value deta hai.' },
      { steps:[
        step('चरण 1 - समझो','<br>क्या सर्वसमिका '+K(RT('n^{2}')+' = |n|')+' हमेशा सही है?'),
        step('चरण 2 - मुख्य विचार','<br>वर्ग करने से अऋणात्मक परिणाम मिलता है, और वर्गमूल चिन्ह अऋणात्मक मान देता है। जैसे '+K(RT(POW(n,'2'))+' = '+n)+' और '+K(RT(POW('(-'+n+')','2'))+' = '+n)+'।'),
        step('चरण 3 - निष्कर्ष','<br>तो यह हर n के लिए सही है।'),
        step('चरण 4 - अंतिम उत्तर','<br>True (सही)।')
      ], shortcut:K(RT('n^{2}')+' = |n|')+' हर n के लिए - True।', hint:'वर्ग