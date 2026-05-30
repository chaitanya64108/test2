/* tier10 - Template 10: sq_est_between (Estimate Between Integers)
   buildSqEstBetweenSolution(a,num,lo,hi), V1(a,num,ans), V2(a,num), V3(a,num), V4(a,n1,n2), V5(a,num) */
(function(){
  var SB=window.SB; if(!SB) return;
  var K=SB.K,RT=SB.RT,POW=SB.POW,T=SB.T,B=SB.B,step=SB.step,S=SB.S;

  window.buildSqEstBetweenSolution=function(a,num,lo,hi){
    var lo2=lo*lo, hi2=hi*hi, ap=Math.sqrt(num).toFixed(2);
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Find the two consecutive whole numbers that '+K(RT(num))+' lies between.'),
        step('Step 2 - Find the nearby perfect squares','<br>'+K(POW(lo,'2')+' = '+lo2)+' and '+K(POW(hi,'2')+' = '+hi2)+'. Notice '+K(lo2+' '+B+'lt '+num+' '+B+'lt '+hi2)+'.'),
        step('Step 3 - Take the square root of every part','<br>Since '+K(lo2+' '+B+'lt '+num+' '+B+'lt '+hi2)+', we get '+K(lo+' '+B+'lt '+RT(num)+' '+B+'lt '+hi)+'.'),
        step('Step 4 - Final answer','<br>'+K(RT(num))+' (≈ '+ap+') lies between '+K(lo)+' and '+K(hi)+'.')
      ], shortcut:'Nearest squares '+K(lo2)+' and '+K(hi2)+', so '+K(RT(num))+' is between '+K(lo)+' and '+K(hi)+'.', hint:'Find the perfect square just below and just above the number.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(RT(num))+' kin do lagataar whole numbers ke beech hai, nikaalo.'),
        step('Step 2 - Aas-paas ke perfect squares dhoondo','<br>'+K(POW(lo,'2')+' = '+lo2)+' aur '+K(POW(hi,'2')+' = '+hi2)+'. Dekho '+K(lo2+' '+B+'lt '+num+' '+B+'lt '+hi2)+'.'),
        step('Step 3 - Har part ka square root lo','<br>Kyunki '+K(lo2+' '+B+'lt '+num+' '+B+'lt '+hi2)+', isliye '+K(lo+' '+B+'lt '+RT(num)+' '+B+'lt '+hi)+'.'),
        step('Step 4 - Final answer','<br>'+K(RT(num))+' (≈ '+ap+') '+K(lo)+' aur '+K(hi)+' ke beech hai.')
      ], shortcut:'Aas-paas ke squares '+K(lo2)+' aur '+K(hi2)+', toh '+K(RT(num))+' '+K(lo)+' aur '+K(hi)+' ke beech hai.', hint:'Number ke just neeche aur just upar wala perfect square dhoondo.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(RT(num))+' किन दो क्रमागत पूर्ण संख्याओं के बीच है, ज्ञात करो।'),
        step('चरण 2 - आस-पास के पूर्ण वर्ग खोजो','<br>'+K(POW(lo,'2')+' = '+lo2)+' और '+K(POW(hi,'2')+' = '+hi2)+'। देखो '+K(lo2+' '+B+'lt '+num+' '+B+'lt '+hi2)+'।'),
        step('चरण 3 - हर भाग का वर्गमूल लो','<br>चूँकि '+K(lo2+' '+B+'lt '+num+' '+B+'lt '+hi2)+', इसलिए '+K(lo+' '+B+'lt '+RT(num)+' '+B+'lt '+hi)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(RT(num))+' (≈ '+ap+') '+K(lo)+' और '+K(hi)+' के बीच है।')
      ], shortcut:'निकटतम वर्ग '+K(lo2)+' और '+K(hi2)+', तो '+K(RT(num))+' '+K(lo)+' और '+K(hi)+' के बीच है।', hint:'संख्या के ठीक नीचे और ठीक ऊपर वाला पूर्ण वर्ग खोजो।' }
    );
  };

  window.buildSqEstBetweenV1Solution=function(a,num,ans){
    var va=a*a, hi2=(a+1)*(a+1), ap=Math.sqrt(num).toFixed(2);
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Which whole number is '+K(RT(num))+' closest to?'),
        step('Step 2 - Locate between squares','<br>'+K(POW(a,'2')+' = '+va)+' and '+K(POW(a+1,'2')+' = '+hi2)+', and '+K(va+' '+B+'lt '+num+' '+B+'lt '+hi2)+', so '+K(RT(num))+' is between '+K(a)+' and '+K(a+1)+'.'),
        step('Step 3 - See which is closer','<br>'+K(num)+' is only a little above '+K(va)+' (far from '+K(hi2)+'), so '+K(RT(num))+' ≈ '+ap+' is closest to '+K(a)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(RT(num))+' ≈ '+ap+', closest whole number is '+K(ans)+'.', hint:'See which perfect square the number is nearest to.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(RT(num))+' sabse kareeb kis whole number ke hai?'),
        step('Step 2 - Squares ke beech rakho','<br>'+K(POW(a,'2')+' = '+va)+' aur '+K(POW(a+1,'2')+' = '+hi2)+', aur '+K(va+' '+B+'lt '+num+' '+B+'lt '+hi2)+', toh '+K(RT(num))+' '+K(a)+' aur '+K(a+1)+' ke beech hai.'),
        step('Step 3 - Kaun kareeb hai dekho','<br>'+K(num)+' '+K(va)+' se thoda hi upar hai ('+K(hi2)+' se door), toh '+K(RT(num))+' ≈ '+ap+' '+K(a)+' ke sabse kareeb hai.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(RT(num))+' ≈ '+ap+', sabse kareeb whole number '+K(ans)+'.', hint:'Dekho number kis perfect square ke sabse paas hai.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(RT(num))+' सबसे निकट किस पूर्ण संख्या के है?'),
        step('चरण 2 - वर्गों के बीच रखो','<br>'+K(POW(a,'2')+' = '+va)+' और '+K(POW(a+1,'2')+' = '+hi2)+', और '+K(va+' '+B+'lt '+num+' '+B+'lt '+hi2)+', तो '+K(RT(num))+' '+K(a)+' और '+K(a+1)+' के बीच है।'),
        step('चरण 3 - कौन निकट है देखो','<br>'+K(num)+' '+K(va)+' से थोड़ा ही ऊपर है ('+K(hi2)+' से दूर), तो '+K(RT(num))+' ≈ '+ap+' '+K(a)+' के सबसे निकट है।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:K(RT(num))+' ≈ '+ap+', निकटतम पूर्ण संख्या '+K(ans)+'।', hint:'देखो संख्या किस पूर्ण वर्ग के सबसे पास है।' }
    );
  };

  window.buildSqEstBetweenV2Solution=function(a,num){
    var mid=(a*a+a)+'.25', ap=Math.sqrt(num).toFixed(2);
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Is '+K(RT(num))+' closer to '+K(a)+' or to '+K(a+1)+'?'),
        step('Step 2 - Find the halfway mark','<br>The halfway point between '+K(a)+' and '+K(a+1)+' is '+K(a+'.5')+'. Squaring it: '+K(POW(a+'.5','2')+' = '+mid)+'.'),
        step('Step 3 - Compare','<br>Our number is '+K(num)+'. Since '+K(num+' '+B+'lt '+mid)+', the root '+K(RT(num))+' (≈ '+ap+') is below '+K(a+'.5')+' - so it is closer to '+K(a)+'.'),
        step('Step 4 - Final answer','<br>Closer to '+K(a)+'.')
      ], shortcut:'Halfway-square is '+K(mid)+'; '+K(num)+' is below it, so closer to '+K(a)+'.', hint:'Compare the number with the square of the halfway value (a.5).' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(RT(num))+' '+K(a)+' ke kareeb hai ya '+K(a+1)+' ke?'),
        step('Step 2 - Madhya-bindu nikaalo','<br>'+K(a)+' aur '+K(a+1)+' ka madhya-bindu '+K(a+'.5')+' hai. Use square karo: '+K(POW(a+'.5','2')+' = '+mid)+'.'),
        step('Step 3 - Tulna karo','<br>Hamara number '+K(num)+' hai. Kyunki '+K(num+' '+B+'lt '+mid)+', root '+K(RT(num))+' (≈ '+ap+') '+K(a+'.5')+' se neeche hai - toh '+K(a)+' ke kareeb hai.'),
        step('Step 4 - Final answer','<br>'+K(a)+' ke kareeb.')
      ], shortcut:'Madhya-square '+K(mid)+'; '+K(num)+' usse neeche hai, toh '+K(a)+' ke kareeb.', hint:'Number ko madhya-maan (a.5) ke square se compare karo.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(RT(num))+' '+K(a)+' के निकट है या '+K(a+1)+' के?'),
        step('चरण 2 - मध्य-बिंदु निकालो','<br>'+K(a)+' और '+K(a+1)+' का मध्य-बिंदु '+K(a+'.5')+' है। इसे वर्ग करो: '+K(POW(a+'.5','2')+' = '+mid)+'।'),
        step('चरण 3 - तुलना करो','<br>हमारी संख्या '+K(num)+' है। चूँकि '+K(num+' '+B+'lt '+mid)+', मूल '+K(RT(num))+' (≈ '+ap+') '+K(a+'.5')+' से नीचे है - तो यह '+K(a)+' के निकट है।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(a)+' के निकट।')
      ], shortcut:'मध्य-वर्ग '+K(mid)+'; '+K(num)+' उससे नीचे है, तो '+K(a)+' के निकट।', hint:'संख्या को मध्य-मान (a.5) के वर्ग से तुलना करो।' }
    );
  };

  window.buildSqEstBetweenV3Solution=function(a,num){
    var va=a*a, ap=Math.sqrt(num).toFixed(2);
    return S(
      { steps:[
        step('Step 1 - Understand','<br>'+K(RT(num))+' is approximately equal to which nearest whole number?'),
        step('Step 2 - Compare with a perfect square','<br>'+K(num+' = '+POW(a,'2')+' + 1)+', just one more than the perfect square '+K(va)+'.'),
        step('Step 3 - Estimate','<br>So '+K(RT(num))+' (≈ '+ap+') is just a tiny bit above '+K(a)+', nearest whole number is '+K(a)+'.'),
        step('Step 4 - Final answer','<br>'+K(a)+'.')
      ], shortcut:K(num+' ≈ '+POW(a,'2'))+', so '+K(RT(num)+' ≈ '+a)+'.', hint:'The number is barely above a perfect square.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(RT(num))+' lagbhag kis nearest whole number ke barabar hai?'),
        step('Step 2 - Perfect square se compare karo','<br>'+K(num+' = '+POW(a,'2')+' + 1)+', perfect square '+K(va)+' se sirf 1 zyada.'),
        step('Step 3 - Andaaza lagao','<br>Toh '+K(RT(num))+' (≈ '+ap+') '+K(a)+' se zara hi upar hai, nearest whole number '+K(a)+'.'),
        step('Step 4 - Final answer','<br>'+K(a)+'.')
      ], shortcut:K(num+' ≈ '+POW(a,'2'))+', toh '+K(RT(num)+' ≈ '+a)+'.', hint:'Number kisi perfect square se zara hi upar hai.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(RT(num))+' लगभग किस निकटतम पूर्ण संख्या के बराबर है?'),
        step('चरण 2 - पूर्ण वर्ग से तुलना','<br>'+K(num+' = '+POW(a,'2')+' + 1)+', पूर्ण वर्ग '+K(va)+' से सिर्फ 1 ज्यादा।'),
        step('चरण 3 - अनुमान लगाओ','<br>तो '+K(RT(num))+' (≈ '+ap+') '+K(a)+' से ज़रा ही ऊपर है, निकटतम पूर्ण संख्या '+K(a)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(a)+'।')
      ], shortcut:K(num+' ≈ '+POW(a,'2'))+', तो '+K(RT(num)+' ≈ '+a)+'।', hint:'संख्या किसी पूर्ण वर्ग से ज़रा ही ऊपर है।' }
    );
  };

  window.buildSqEstBetweenV4Solution=function(a,n1,n2){
    var va=a*a, hi2=(a+1)*(a+1);
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Do '+K(RT(n1))+' and '+K(RT(n2))+' lie between the same two consecutive whole numbers?'),
        step('Step 2 - Bracket the first','<br>'+K(va+' '+B+'lt '+n1+' '+B+'lt '+hi2)+', so '+K(RT(n1))+' is between '+K(a)+' and '+K(a+1)+'.'),
        step('Step 3 - Bracket the second','<br>'+K(va+' '+B+'lt '+n2+' '+B+'lt '+hi2)+', so '+K(RT(n2))+' is also between '+K(a)+' and '+K(a+1)+'.'),
        step('Step 4 - Final answer','<br>Both lie between '+K(a)+' and '+K(a+1)+'.')
      ], shortcut:'Both '+K(n1)+' and '+K(n2)+' are between '+K(va)+' and '+K(hi2)+', so both roots lie between '+K(a)+' and '+K(a+1)+'.', hint:'Check the perfect squares just below and above each number.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(RT(n1))+' aur '+K(RT(n2))+' kya same do lagataar whole numbers ke beech hain?'),
        step('Step 2 - Pehle ko bracket karo','<br>'+K(va+' '+B+'lt '+n1+' '+B+'lt '+hi2)+', toh '+K(RT(n1))+' '+K(a)+' aur '+K(a+1)+' ke beech hai.'),
        step('Step 3 - Doosre ko bracket karo','<br>'+K(va+' '+B+'lt '+n2+' '+B+'lt '+hi2)+', toh '+K(RT(n2))+' bhi '+K(a)+' aur '+K(a+1)+' ke beech hai.'),
        step('Step 4 - Final answer','<br>Dono '+K(a)+' aur '+K(a+1)+' ke beech hain.')
      ], shortcut:'Dono '+K(n1)+' aur '+K(n2)+' '+K(va)+' aur '+K(hi2)+' ke beech hain, toh dono roots '+K(a)+' aur '+K(a+1)+' ke beech hain.', hint:'Har number ke just neeche aur upar wale perfect square dekho.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(RT(n1))+' और '+K(RT(n2))+' क्या समान दो क्रमागत पूर्ण संख्याओं के बीच हैं?'),
        step('चरण 2 - पहले को ब्रैकेट करो','<br>'+K(va+' '+B+'lt '+n1+' '+B+'lt '+hi2)+', तो '+K(RT(n1))+' '+K(a)+' और '+K(a+1)+' के बीच है।'),
        step('चरण 3 - दूसरे को ब्रैकेट करो','<br>'+K(va+' '+B+'lt '+n2+' '+B+'lt '+hi2)+', तो '+K(RT(n2))+' भी '+K(a)+' और '+K(a+1)+' के बीच है।'),
        step('चरण 4 - अंतिम उत्तर','<br>दोनों '+K(a)+' और '+K(a+1)+' के बीच हैं।')
      ], shortcut:'दोनों '+K(n1)+' और '+K(n2)+' '+K(va)+' और '+K(hi2)+' के बीच हैं।', hint:'हर संख्या के नीचे और ऊपर वाले पूर्ण वर्ग देखो।' }
    );
  };

  window.buildSqEstBetweenV5Solution=function(a,num){
    var va=a*a, hi2=(a+1)*(a+1), ap=Math.sqrt(num).toFixed(2);
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Between which two consecutive whole numbers does '+K(RT(num))+' lie?'),
        step('Step 2 - Nearby perfect squares','<br>'+K(POW(a,'2')+' = '+va)+' and '+K(POW(a+1,'2')+' = '+hi2)+', and '+K(va+' '+B+'lt '+num+' '+B+'lt '+hi2)+'.'),
        step('Step 3 - Take the square root','<br>So '+K(a+' '+B+'lt '+RT(num)+' '+B+'lt '+(a+1))+'.'),
        step('Step 4 - Final answer','<br>'+K(RT(num))+' (≈ '+ap+') is between '+K(a)+' and '+K(a+1)+'.')
      ], shortcut:'Between '+K(va)+' and '+K(hi2)+', so '+K(RT(num))+' is between '+K(a)+' and '+K(a+1)+'.', hint:'Find the perfect squares just below and above the number.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(RT(num))+' kin do lagataar whole numbers ke beech hai?'),
        step('Step 2 - Aas-paas ke perfect squares','<br>'+K(POW(a,'2')+' = '+va)+' aur '+K(POW(a+1,'2')+' = '+hi2)+', aur '+K(va+' '+B+'lt '+num+' '+B+'lt '+hi2)+'.'),
        step('Step 3 - Square root lo','<br>Toh '+K(a+' '+B+'lt '+RT(num)+' '+B+'lt '+(a+1))+'.'),
        step('Step 4 - Final answer','<br>'+K(RT(num))+' (≈ '+ap+') '+K(a)+' aur '+K(a+1)+' ke beech hai.')
      ], shortcut:K(va)+' aur '+K(hi2)+' ke beech, toh '+K(RT(num))+' '+K(a)+' aur '+K(a+1)+' ke beech hai.', hint:'Number ke neeche aur upar wale perfect square dhoondo.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(RT(num))+' किन दो क्रमागत पूर्ण संख्याओं के बीच है?'),
        step('चरण 2 - आस-पास के पूर्ण वर्ग','<br>'+K(POW(a,'2')+' = '+va)+' और '+K(POW(a+1,'2')+' = '+hi2)+', और '+K(va+' '+B+'lt '+num+' '+B+'lt '+hi2)+'।'),
        step('चरण 3 - वर्गमूल लो','<br>तो '+K(a+' '+B+'lt '+RT(num)+' '+B+'lt '+(a+1))+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(RT(num))+' (≈ '+ap+') '+K(a)+' और '+K(a+1)+' के बीच है।')
      ], shortcut:K(va)+' और '+K(hi2)+' के बीच, तो '+K(RT(num))+' '+K(a)+' और '+K(a+1)+' के बीच है।', hint:'संख्या के नीचे और ऊपर वाले पूर्ण वर्ग खोजो।' }
    );
  };
})();
