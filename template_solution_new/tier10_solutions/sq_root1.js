/* tier10 - Template 16: sq_root1 (Square Root of a Perfect Square)
   buildSqRoot1Solution(r,n), V1(), V2(), V3(n), V4(a,ps,non), V5(a) */
(function(){
  var SB=window.SB; if(!SB) return;
  var K=SB.K,RT=SB.RT,POW=SB.POW,step=SB.step,S=SB.S;

  window.buildSqRoot1Solution=function(r,n){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Find '+K(RT(n))+', where the number under the root is a perfect square.'),
        step('Step 2 - Key idea','<br>'+K(RT(n))+' asks: which number times itself gives '+n+'? Here '+K(POW(r,'2')+' = '+n)+'.'),
        step('Step 3 - Take the root','<br>'+K(RT(n)+' = '+r)+'.'),
        step('Step 4 - Final answer','<br>'+K(r)+'.')
      ], shortcut:K(RT(n)+' = '+r)+'.', hint:'Find the number that, multiplied by itself, gives the number under the root.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(RT(n))+' nikaalo, jahan root ke andar perfect square hai.'),
        step('Step 2 - Key idea','<br>'+K(RT(n))+' poochta hai: kaunsa number khud se guna karne par '+n+' deta hai? Yahan '+K(POW(r,'2')+' = '+n)+'.'),
        step('Step 3 - Root lo','<br>'+K(RT(n)+' = '+r)+'.'),
        step('Step 4 - Final answer','<br>'+K(r)+'.')
      ], shortcut:K(RT(n)+' = '+r)+'.', hint:'Wo number dhoondo jo khud se guna karne par root ke andar ki sankhya de.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(RT(n))+' ज्ञात करो, जहाँ मूल के अंदर पूर्ण वर्ग है।'),
        step('चरण 2 - मुख्य विचार','<br>'+K(RT(n))+' पूछता है: कौन सा अंक खुद से गुणा करने पर '+n+' देता है? यहाँ '+K(POW(r,'2')+' = '+n)+'।'),
        step('चरण 3 - मूल लो','<br>'+K(RT(n)+' = '+r)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(r)+'।')
      ], shortcut:K(RT(n)+' = '+r)+'।', hint:'वह संख्या खोजो जो खुद से गुणा करने पर मूल के अंदर की संख्या दे।' }
    );
  };

  window.buildSqRoot1V1Solution=function(){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Find '+K(RT(0))+'.'),
        step('Step 2 - Key idea','<br>'+K('0'+SB.T+'0 = 0')+', so the square root of 0 is 0.'),
        step('Step 3 - Final answer','<br>'+K('0')+'.')
      ], shortcut:K(RT(0)+' = 0')+'.', hint:'0 times 0 is 0.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(RT(0))+' nikaalo.'),
        step('Step 2 - Key idea','<br>'+K('0'+SB.T+'0 = 0')+', toh 0 ka square root 0 hai.'),
        step('Step 3 - Final answer','<br>'+K('0')+'.')
      ], shortcut:K(RT(0)+' = 0')+'.', hint:'0 guna 0 = 0.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(RT(0))+' ज्ञात करो।'),
        step('चरण 2 - मुख्य विचार','<br>'+K('0'+SB.T+'0 = 0')+', तो 0 का वर्गमूल 0 है।'),
        step('चरण 3 - अंतिम उत्तर','<br>'+K('0')+'।')
      ], shortcut:K(RT(0)+' = 0')+'।', hint:'0 गुणा 0 = 0।' }
    );
  };

  window.buildSqRoot1V2Solution=function(){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Find '+K(RT(1)+' + '+RT(1))+'.'),
        step('Step 2 - Take each root','<br>'+K(RT(1)+' = 1')+' (since '+K('1'+SB.T+'1 = 1')+').'),
        step('Step 3 - Add','<br>'+K('1 + 1 = 2')+'.'),
        step('Step 4 - Final answer','<br>'+K('2')+'.')
      ], shortcut:K(RT(1)+' + '+RT(1)+' = 1 + 1 = 2')+'.', hint:'The square root of 1 is 1.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(RT(1)+' + '+RT(1))+' nikaalo.'),
        step('Step 2 - Har root lo','<br>'+K(RT(1)+' = 1')+' (kyunki '+K('1'+SB.T+'1 = 1')+').'),
        step('Step 3 - Jodo','<br>'+K('1 + 1 = 2')+'.'),
        step('Step 4 - Final answer','<br>'+K('2')+'.')
      ], shortcut:K(RT(1)+' + '+RT(1)+' = 1 + 1 = 2')+'.', hint:'1 ka square root 1 hota hai.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(RT(1)+' + '+RT(1))+' ज्ञात करो।'),
        step('चरण 2 - हर मूल लो','<br>'+K(RT(1)+' = 1')+' (क्योंकि '+K('1'+SB.T+'1 = 1')+')।'),
        step('चरण 3 - जोड़ो','<br>'+K('1 + 1 = 2')+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K('2')+'।')
      ], shortcut:K(RT(1)+' + '+RT(1)+' = 1 + 1 = 2')+'।', hint:'1 का वर्गमूल 1 होता है।' }
    );
  };

  window.buildSqRoot1V3Solution=function(n){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Find '+K(RT(POW(n,'2')))+'.'),
        step('Step 2 - Key idea','<br>The square root undoes the square: '+K(RT(POW(n,'2')))+' = '+n+'.'),
        step('Step 3 - Final answer','<br>'+K(n)+'.')
      ], shortcut:K(RT(POW(n,'2'))+' = '+n)+'.', hint:'Square root and square cancel each other out.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(RT(POW(n,'2')))+' nikaalo.'),
        step('Step 2 - Key idea','<br>Square root, square ko undo kar deta hai: '+K(RT(POW(n,'2')))+' = '+n+'.'),
        step('Step 3 - Final answer','<br>'+K(n)+'.')
      ], shortcut:K(RT(POW(n,'2'))+' = '+n)+'.', hint:'Square root aur square ek doosre ko cancel karte hain.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(RT(POW(n,'2')))+' ज्ञात करो।'),
        step('चरण 2 - मुख्य विचार','<br>वर्गमूल, वर्ग को उलट देता है: '+K(RT(POW(n,'2')))+' = '+n+'।'),
        step('चरण 3 - अंतिम उत्तर','<br>'+K(n)+'।')
      ], shortcut:K(RT(POW(n,'2'))+' = '+n)+'।', hint:'वर्गमूल और वर्ग एक दूसरे को काट देते हैं।' }
    );
  };

  window.buildSqRoot1V4Solution=function(a,ps,non){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Spot the number that is NOT a perfect square. A perfect square is a whole number times itself.'),
        step('Step 2 - Check the options','<br>'+K(ps+' = '+POW(a,'2'))+' is a perfect square, but '+K(non+' = '+POW(a,'2')+' + 1')+' sits just after one.'),
        step('Step 3 - Conclude','<br>Since '+K(non)+' lies between two perfect squares, it is NOT a perfect square.'),
        step('Step 4 - Final answer','<br>'+K(non)+'.')
      ], shortcut:K(non)+' = '+K(POW(a,'2')+' + 1')+', so it is not a perfect square.', hint:'A perfect square is some whole number multiplied by itself.' },
      { steps:[
        step('Step 1 - Samjho','<br>Wo number pehchano jo perfect square NAHI hai. Perfect square = koi whole number khud se guna.'),
        step('Step 2 - Options check karo','<br>'+K(ps+' = '+POW(a,'2'))+' perfect square hai, par '+K(non+' = '+POW(a,'2')+' + 1')+' ek perfect square ke just baad hai.'),
        step('Step 3 - Nishkarsh','<br>'+K(non)+' do perfect squares ke beech hai, isliye perfect square NAHI hai.'),
        step('Step 4 - Final answer','<br>'+K(non)+'.')
      ], shortcut:K(non)+' = '+K(POW(a,'2')+' + 1')+', toh perfect square nahi hai.', hint:'Perfect square = koi whole number khud se guna.' },
      { steps:[
        step('चरण 1 - समझो','<br>वह संख्या पहचानो जो पूर्ण वर्ग नहीं है। पूर्ण वर्ग = कोई पूर्ण संख्या खुद से गुणा।'),
        step('चरण 2 - विकल्प जाँचो','<br>'+K(ps+' = '+POW(a,'2'))+' पूर्ण वर्ग है, पर '+K(non+' = '+POW(a,'2')+' + 1')+' एक पूर्ण वर्ग के ठीक बाद है।'),
        step('चरण 3 - निष्कर्ष','<br>'+K(non)+' दो पूर्ण वर्गों के बीच है, इसलिए पूर्ण वर्ग नहीं है।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(non)+'।')
      ], shortcut:K(non)+' = '+K(POW(a,'2')+' + 1')+', तो पूर्ण वर्ग नहीं।', hint:'पूर्ण वर्ग = कोई पूर्ण संख्या खुद से गुणा।' }
    );
  };

  window.buildSqRoot1V5Solution=function(a){
    var va=a*a;
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Find '+K(RT(va))+' quickly, without long working.'),
        step('Step 2 - Key idea','<br>The square root of a number squared is the number itself: '+K(RT(POW(a,'2'))+' = '+a)+'.'),
        step('Step 3 - Final answer','<br>'+K(a)+'.')
      ], shortcut:K(RT(va)+' = '+a)+'.', hint:'Square root of a number squared is the number itself.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(RT(va))+' jaldi se nikaalo, bina lambi calculation ke.'),
        step('Step 2 - Key idea','<br>Kisi number ke square ka square root wahi number hota hai: '+K(RT(POW(a,'2'))+' = '+a)+'.'),
        step('Step 3 - Final answer','<br>'+K(a)+'.')
      ], shortcut:K(RT(va)+' = '+a)+'.', hint:'Number ke square ka square root wahi number hota hai.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(RT(va))+' जल्दी से ज्ञात करो, बिना लंबी गणना के।'),
        step('चरण 2 - मुख्य विचार','<br>किसी संख्या के वर्ग का वर्गमूल वही संख्या होती है: '+K(RT(POW(a,'2'))+' = '+a)+'।'),
        step('चरण 3 - अंतिम उत्तर','<br>'+K(a)+'।')
      ], shortcut:K(RT(va)+' = '+a)+'।', hint:'संख्या के वर्ग का वर्गमूल वही संख्या होती है।' }
    );
  };
})();
