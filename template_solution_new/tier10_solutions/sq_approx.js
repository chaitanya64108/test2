/* tier10 - Template 17: sq_approx (Approximation of a Square Root)
   buildSqApproxSolution(a,num,ans,variant), V1(a,num,lo,hi), V2(a,num,ans), V3(a,num,approx,ans), V4(a,b,n1,n2,ans), V5(a,num,ans) */
(function(){
  var SB=window.SB; if(!SB) return;
  var K=SB.K,RT=SB.RT,FR=SB.FR,POW=SB.POW,B=SB.B,step=SB.step,S=SB.S;

  window.buildSqApproxSolution=function(a,num,ans,variant){
    var kk=num-a*a, ak=Math.abs(kk), sg=kk<0?' - ':' + ', a2=a*a, ansR=parseFloat(ans.toFixed(2));
    return S(
      { steps:[
        step('Step 1 - Understand','<br>'+num+' is very close to a perfect square. We can estimate '+K(RT(num))+' using the nearest perfect square.'),
        step('Step 2 - Nearest perfect square','<br>'+K(POW(a,'2')+' = '+a2)+', and '+K(num+' = '+a2+sg+ak)+'.'),
        step('Step 3 - Apply the approximation formula','<br>'+K(RT('a^{2}+k')+' '+B+'approx a + '+FR('k','2a'))+'. Here '+K(RT(num)+' '+B+'approx '+a+sg+FR(ak,2*a)+' = '+ansR)+'.'),
        step('Step 4 - Final answer','<br>'+K(RT(num)+' '+B+'approx '+ansR)+'.')
      ], shortcut:K(RT(num)+' '+B+'approx '+ansR)+'.', hint:'Estimate = nearest root + (difference) / (2 x root).' },
      { steps:[
        step('Step 1 - Samjho','<br>'+num+' ek perfect square ke bahut kareeb hai. '+K(RT(num))+' ko nearest perfect square se estimate karte hain.'),
        step('Step 2 - Nearest perfect square','<br>'+K(POW(a,'2')+' = '+a2)+', aur '+K(num+' = '+a2+sg+ak)+'.'),
        step('Step 3 - Approximation formula lagao','<br>'+K(RT('a^{2}+k')+' '+B+'approx a + '+FR('k','2a'))+'. Yahan '+K(RT(num)+' '+B+'approx '+a+sg+FR(ak,2*a)+' = '+ansR)+'.'),
        step('Step 4 - Final answer','<br>'+K(RT(num)+' '+B+'approx '+ansR)+'.')
      ], shortcut:K(RT(num)+' '+B+'approx '+ansR)+'.', hint:'Estimate = nearest root + (antar) / (2 x root).' },
      { steps:[
        step('चरण 1 - समझो','<br>'+num+' एक पूर्ण वर्ग के बहुत करीब है। '+K(RT(num))+' को निकटतम पूर्ण वर्ग से अनुमान करते हैं।'),
        step('चरण 2 - निकटतम पूर्ण वर्ग','<br>'+K(POW(a,'2')+' = '+a2)+', और '+K(num+' = '+a2+sg+ak)+'।'),
        step('चरण 3 - सन्निकटन सूत्र लगाओ','<br>'+K(RT('a^{2}+k')+' '+B+'approx a + '+FR('k','2a'))+'। यहाँ '+K(RT(num)+' '+B+'approx '+a+sg+FR(ak,2*a)+' = '+ansR)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(RT(num)+' '+B+'approx '+ansR)+'।')
      ], shortcut:K(RT(num)+' '+B+'approx '+ansR)+'।', hint:'अनुमान = निकटतम मूल + (अंतर) / (2 x मूल)।' }
    );
  };

  window.buildSqApproxV1Solution=function(a,num,lo,hi){
    var a2=a*a, h2=(a+1)*(a+1);
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Find the two consecutive whole numbers that '+K(RT(num))+' lies between.'),
        step('Step 2 - Perfect squares around the number','<br>'+K(POW(a,'2')+' = '+a2)+' and '+K(POW(a+1,'2')+' = '+h2)+'.'),
        step('Step 3 - Place the number','<br>Since '+K(a2+' '+B+'lt '+num+' '+B+'lt '+h2)+', taking roots gives '+K(a+' '+B+'lt '+RT(num)+' '+B+'lt '+(a+1))+'.'),
        step('Step 4 - Final answer','<br>'+K(a)+' and '+K(a+1)+'.')
      ], shortcut:K(a+' '+B+'lt '+RT(num)+' '+B+'lt '+(a+1))+'.', hint:'Find the perfect squares just below and just above the number.' },
      { steps:[
        step('Step 1 - Samjho','<br>Wo do consecutive whole numbers dhoondo jinke beech '+K(RT(num))+' aata hai.'),
        step('Step 2 - Aas-paas ke perfect squares','<br>'+K(POW(a,'2')+' = '+a2)+' aur '+K(POW(a+1,'2')+' = '+h2)+'.'),
        step('Step 3 - Number ko rakho','<br>Kyunki '+K(a2+' '+B+'lt '+num+' '+B+'lt '+h2)+', root lene par '+K(a+' '+B+'lt '+RT(num)+' '+B+'lt '+(a+1))+'.'),
        step('Step 4 - Final answer','<br>'+K(a)+' aur '+K(a+1)+'.')
      ], shortcut:K(a+' '+B+'lt '+RT(num)+' '+B+'lt '+(a+1))+'.', hint:'Number ke just neeche aur just upar wale perfect squares dhoondo.' },
      { steps:[
        step('चरण 1 - समझो','<br>वे दो क्रमिक पूर्ण संख्याएँ खोजो जिनके बीच '+K(RT(num))+' आता है।'),
        step('चरण 2 - आस-पास के पूर्ण वर्ग','<br>'+K(POW(a,'2')+' = '+a2)+' और '+K(POW(a+1,'2')+' = '+h2)+'।'),
        step('चरण 3 - संख्या को रखो','<br>चूँकि '+K(a2+' '+B+'lt '+num+' '+B+'lt '+h2)+', मूल लेने पर '+K(a+' '+B+'lt '+RT(num)+' '+B+'lt '+(a+1))+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(a)+' और '+K(a+1)+'।')
      ], shortcut:K(a+' '+B+'lt '+RT(num)+' '+B+'lt '+(a+1))+'।', hint:'संख्या के ठीक नीचे और ठीक ऊपर के पूर्ण वर्ग खोजो।' }
    );
  };

  window.buildSqApproxV2Solution=function(a,num,ans){
    var a2=a*a, mid=(a*a+a);
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Estimate '+K(RT(num))+' to the nearest half.'),
        step('Step 2 - Compare with the midpoint','<br>'+K(num+' = '+a2+' + '+a)+'. The midpoint value '+a+'.5 gives '+K('('+a+'.5)^{2} = '+mid+'.25')+', just above '+num+'.'),
        step('Step 3 - Estimate','<br>So '+K(RT(num)+' '+B+'approx '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(RT(num)+' '+B+'approx '+ans)+'.', hint:'If the number is about halfway between two perfect squares, the root is about halfway too.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(RT(num))+' ko nearest half tak estimate karo.'),
        step('Step 2 - Midpoint se compare karo','<br>'+K(num+' = '+a2+' + '+a)+'. Midpoint value '+a+'.5 deta hai '+K('('+a+'.5)^{2} = '+mid+'.25')+', jo '+num+' se thoda upar hai.'),
        step('Step 3 - Estimate','<br>Toh '+K(RT(num)+' '+B+'approx '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(RT(num)+' '+B+'approx '+ans)+'.', hint:'Agar number do perfect squares ke lagbhag beech me hai, to root bhi lagbhag beech me hota hai.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(RT(num))+' को निकटतम आधे तक अनुमान करो।'),
        step('चरण 2 - मध्यबिंदु से तुलना','<br>'+K(num+' = '+a2+' + '+a)+'। मध्य मान '+a+'.5 देता है '+K('('+a+'.5)^{2} = '+mid+'.25')+', जो '+num+' से थोड़ा ऊपर है।'),
        step('चरण 3 - अनुमान','<br>तो '+K(RT(num)+' '+B+'approx '+ans)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:K(RT(num)+' '+B+'approx '+ans)+'।', hint:'अगर संख्या दो पूर्ण वर्गों के लगभग बीच है, तो मूल भी लगभग बीच में होता है।' }
    );
  };

  window.buildSqApproxV3Solution=function(a,num,approx,ans){
    var a2=a*a;
    return S(
      { steps:[
        step('Step 1 - Understand','<br>We use '+K(a)+' as an estimate of '+K(RT(num))+'. Is '+K(a)+' bigger or smaller than the true value?'),
        step('Step 2 - Compare with the perfect square','<br>'+K(num+' = '+POW(a,'2')+' + 1')+', so '+K(num+' '+B+'gt '+a2)+'.'),
        step('Step 3 - Take roots','<br>'+K(RT(num)+' '+B+'gt '+a)+'. Since '+K(a)+' is smaller than the true root, it is an underestimate.'),
        step('Step 4 - Final answer','<br>Underestimate.')
      ], shortcut:'Since '+K(num+' '+B+'gt '+a2)+', '+K(RT(num))+' is a bit more than '+K(a)+' - so '+K(a)+' underestimates it.', hint:'If the number is bigger than a perfect square, its root is bigger than that square root.' },
      { steps:[
        step('Step 1 - Samjho','<br>Hum '+K(a)+' ko '+K(RT(num))+' ka estimate maan rahe hain. '+K(a)+' true value se bada hai ya chhota?'),
        step('Step 2 - Perfect square se compare karo','<br>'+K(num+' = '+POW(a,'2')+' + 1')+', toh '+K(num+' '+B+'gt '+a2)+'.'),
        step('Step 3 - Root lo','<br>'+K(RT(num)+' '+B+'gt '+a)+'. Kyunki '+K(a)+' true root se chhota hai, ye underestimate hai.'),
        step('Step 4 - Final answer','<br>Underestimate.')
      ], shortcut:'Kyunki '+K(num+' '+B+'gt '+a2)+', '+K(RT(num))+' '+K(a)+' se thoda zyada hai - toh '+K(a)+' usse kam aankta hai.', hint:'Agar number perfect square se bada hai, to uska root us square root se bada hota hai.' },
      { steps:[
        step('चरण 1 - समझो','<br>हम '+K(a)+' को '+K(RT(num))+' का अनुमान मान रहे हैं। क्या '+K(a)+' सच्चे मान से बड़ा है या छोटा?'),
        step('चरण 2 - पूर्ण वर्ग से तुलना','<br>'+K(num+' = '+POW(a,'2')+' + 1')+', इसलिए '+K(num+' '+B+'gt '+a2)+'।'),
        step('चरण 3 - मूल लो','<br>'+K(RT(num)+' '+B+'gt '+a)+'। चूँकि '+K(a)+' सच्चे मूल से छोटा है, यह कम आँकना (underestimate) है।'),
        step('चरण 4 - अंतिम उत्तर','<br>Underestimate (कम आँकना)।')
      ], shortcut:'चूँकि '+K(num+' '+B+'gt '+a2)+', '+K(RT(num))+' '+K(a)+' से थोड़ा अधिक है - इसलिए '+K(a)+' इसे कम आँकता है।', hint:'अगर संख्या पूर्ण वर्ग से बड़ी है, तो उसका मूल उस वर्गमूल से बड़ा होता है।' }
    );
  };

  window.buildSqApproxV4Solution=function(a,b,n1,n2,ans){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Estimate each root, then add and round.'),
        step('Step 2 - Estimate each root','<br>'+n1+' is just above '+K(POW(a,'2'))+', so '+K(RT(n1)+' '+B+'approx '+a)+'. Similarly '+K(RT(n2)+' '+B+'approx '+b)+'.'),
        step('Step 3 - Add','<br>'+K(a+' + '+b+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(RT(n1)+' + '+RT(n2)+' '+B+'approx '+a+' + '+b+' = '+ans)+'.', hint:'Each number is just above a perfect square, so round each root to that square root.' },
      { steps:[
        step('Step 1 - Samjho','<br>Har root ko estimate karo, fir jodo aur round karo.'),
        step('Step 2 - Har root estimate karo','<br>'+n1+' '+K(POW(a,'2'))+' se thoda upar hai, toh '+K(RT(n1)+' '+B+'approx '+a)+'. Waise hi '+K(RT(n2)+' '+B+'approx '+b)+'.'),
        step('Step 3 - Jodo','<br>'+K(a+' + '+b+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(RT(n1)+' + '+RT(n2)+' '+B+'approx '+a+' + '+b+' = '+ans)+'.', hint:'Har number ek perfect square se thoda upar hai, toh har root ko us square root tak round karo.' },
      { steps:[
        step('चरण 1 - समझो','<br>हर मूल का अनुमान करो, फिर जोड़ो और round करो।'),
        step('चरण 2 - हर मूल का अनुमान','<br>'+n1+' '+K(POW(a,'2'))+' से थोड़ा ऊपर है, तो '+K(RT(n1)+' '+B+'approx '+a)+'। इसी तरह '+K(RT(n2)+' '+B+'approx '+b)+'।'),
        step('चरण 3 - जोड़ो','<br>'+K(a+' + '+b+' = '+ans)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:K(RT(n1)+' + '+RT(n2)+' '+B+'approx '+a+' + '+b+' = '+ans)+'।', hint:'हर संख्या एक पूर्ण वर्ग से थोड़ा ऊपर है, तो हर मूल को उस वर्गमूल तक round करो।' }
    );
  };

  window.buildSqApproxV5Solution=function(a,num,ans){
    var ansR=parseFloat(ans.toFixed(2));
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Use the approximation formula with the nearest perfect square '+K(POW(a,'2'))+'.'),
        step('Step 2 - Find the difference','<br>'+K(num+' = '+POW(a,'2')+' + 2')+', so the difference k = 2.'),
        step('Step 3 - Apply the formula','<br>'+K(RT('a^{2}+k')+' '+B+'approx a + '+FR('k','2a'))+': '+K(RT(num)+' '+B+'approx '+a+' + '+FR(2,2*a)+' = '+a+' + '+FR(1,a)+' = '+ansR)+'.'),
        step('Step 4 - Final answer','<br>'+K(ansR)+'.')
      ], shortcut:K(RT(num)+' '+B+'approx '+ansR)+'.', hint:'Approx = nearest root + (difference) / (2 x root).' },
      { steps:[
        step('Step 1 - Samjho','<br>Nearest perfect square '+K(POW(a,'2'))+' ke saath approximation formula use karo.'),
        step('Step 2 - Antar nikaalo','<br>'+K(num+' = '+POW(a,'2')+' + 2')+', toh antar k = 2.'),
        step('Step 3 - Formula lagao','<br>'+K(RT('a^{2}+k')+' '+B+'approx a + '+FR('k','2a'))+': '+K(RT(num)+' '+B+'approx '+a+' + '+FR(2,2*a)+' = '+a+' + '+FR(1,a)+' = '+ansR)+'.'),
        step('Step 4 - Final answer','<br>'+K(ansR)+'.')
      ], shortcut:K(RT(num)+' '+B+'approx '+ansR)+'.', hint:'Approx = nearest root + (antar) / (2 x root).' },
      { steps:[
        step('चरण 1 - समझो','<br>निकटतम पूर्ण वर्ग '+K(POW(a,'2'))+' के साथ सन्निकटन सूत्र उपयोग करो।'),
        step('चरण 2 - अंतर निकालो','<br>'+K(num+' = '+POW(a,'2')+' + 2')+', तो अंतर k = 2।'),
        step('चरण 3 - सूत्र लगाओ','<br>'+K(RT('a^{2}+k')+' '+B+'approx a + '+FR('k','2a'))+': '+K(RT(num)+' '+B+'approx '+a+' + '+FR(2,2*a)+' = '+a+' + '+FR(1,a)+' = '+ansR)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ansR)+'।')
      ], shortcut:K(RT(num)+' '+B+'approx '+ansR)+'।', hint:'अनुमान = निकटतम मूल + (अंतर) / (2 x मूल)।' }
    );
  };
})();
