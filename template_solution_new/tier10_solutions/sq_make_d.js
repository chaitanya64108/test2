/* tier10 - Template 8: sq_make_d (Make Perfect Square by Dividing)
   buildSqMakeDSolution(num,ans), V1(num,sqPart,ans), V2(num,base,sqPart,ans), V3(num,base,sqPart,ans), V4(num,sqPart,result,ans), V5(num,b,ans) */
(function(){
  var SB=window.SB; if(!SB) return;
  var K=SB.K,RT=SB.RT,FR=SB.FR,POW=SB.POW,T=SB.T,D=SB.D,step=SB.step,S=SB.S;
  function fact(n){ var f={},d=2,m=n; while(d*d<=m){ while(m%d===0){ f[d]=(f[d]||0)+1; m=m/d; } d++; } if(m>1) f[m]=(f[m]||0)+1; return f; }
  function fstr(f){ var s=[]; for(var p in f){ s.push(f[p]>1?POW(p,f[p]):String(p)); } return s.join(T); }

  window.buildSqMakeDSolution=function(num,ans){
    var f=fact(num), fs=fstr(f), odd=[]; for(var p in f){ if(f[p]%2) odd.push(p); }
    var oddStr=odd.length?odd.join(T):String(ans), res=num/ans, rr=Math.round(Math.sqrt(res));
    return S(
      { steps:[
        step('Step 1 - Understand','<br>We want the smallest whole number to divide '+K(num)+' by so that it becomes a perfect square.'),
        step('Step 2 - Break into prime factors','<br>'+K(num+' = '+fs)+'.  <i>A perfect square needs every prime factor to appear an even number of times (in pairs).</i>'),
        step('Step 3 - Find the unpaired primes','<br>These primes appear an odd number of times: '+K(oddStr)+'. Divide by their product '+K('= '+ans)+' to throw out the extras and leave only pairs.'),
        step('Step 4 - Check','<br>'+K(num+D+ans+' = '+res)+', and '+K(RT(res)+' = '+rr)+' (a whole number).'),
        step('Step 5 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:'Divide by the product of the odd-power primes '+K('= '+ans)+'.', hint:'A perfect square has every prime factor an even number of times; divide out the extras.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(num)+' ko sabse chhote kis number se divide karein ki wo perfect square ban jaaye.'),
        step('Step 2 - Prime factors me todo','<br>'+K(num+' = '+fs)+'.  <i>Perfect square me har prime factor even number of times (jodi me) aana chahiye.</i>'),
        step('Step 3 - Akeli primes dhoondo','<br>Ye primes odd number of times aati hain: '+K(oddStr)+'. Inke product '+K('= '+ans)+' se divide karo taaki extra hat jaaye aur sirf jodi bache.'),
        step('Step 4 - Check','<br>'+K(num+D+ans+' = '+res)+', aur '+K(RT(res)+' = '+rr)+' (ek whole number).'),
        step('Step 5 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:'Odd-power primes ke product '+K('= '+ans)+' se divide karo.', hint:'Perfect square me har prime factor even baar aata hai; extra ko divide karke hatao.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(num)+' को सबसे छोटी किस संख्या से भाग दें कि वह पूर्ण वर्ग बन जाए।'),
        step('चरण 2 - अभाज्य गुणनखंड','<br>'+K(num+' = '+fs)+'.  <i>पूर्ण वर्ग में हर अभाज्य गुणनखंड सम (even) बार, यानी जोड़े में आना चाहिए।</i>'),
        step('चरण 3 - अकेली अभाज्य खोजो','<br>ये अभाज्य विषम (odd) बार आती हैं: '+K(oddStr)+'। इनके गुणनफल '+K('= '+ans)+' से भाग दो ताकि अतिरिक्त हट जाए और सिर्फ जोड़े बचें।'),
        step('चरण 4 - जाँच','<br>'+K(num+D+ans+' = '+res)+', और '+K(RT(res)+' = '+rr)+' (एक पूर्ण संख्या)।'),
        step('चरण 5 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:'विषम-घात अभाज्यों के गुणनफल '+K('= '+ans)+' से भाग दो।', hint:'पूर्ण वर्ग में हर अभाज्य गुणनखंड सम बार आता है; अतिरिक्त को भाग देकर हटाओ।' }
    );
  };

  window.buildSqMakeDV1Solution=function(num,sqPart,ans){
    var res=num/sqPart;
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Divide '+K(num)+' by '+K(sqPart)+', then find the square root of the result.'),
        step('Step 2 - Divide','<br>'+K(num+D+sqPart+' = '+res)+'.'),
        step('Step 3 - Take the square root','<br>'+K(res+' = '+POW(ans,'2'))+', so '+K(RT(res)+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(RT(num+D+sqPart)+' = '+ans)+'.', hint:'Divide first, then take the square root of the result.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(num)+' ko '+K(sqPart)+' se divide karke result ka square root nikaalo.'),
        step('Step 2 - Divide','<br>'+K(num+D+sqPart+' = '+res)+'.'),
        step('Step 3 - Square root lo','<br>'+K(res+' = '+POW(ans,'2'))+', toh '+K(RT(res)+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(RT(num+D+sqPart)+' = '+ans)+'.', hint:'Pehle divide karo, phir result ka square root lo.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(num)+' को '+K(sqPart)+' से भाग देकर परिणाम का वर्गमूल निकालो।'),
        step('चरण 2 - भाग','<br>'+K(num+D+sqPart+' = '+res)+'।'),
        step('चरण 3 - वर्गमूल लो','<br>'+K(res+' = '+POW(ans,'2'))+', तो '+K(RT(res)+' = '+ans)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:K(RT(num+D+sqPart)+' = '+ans)+'।', hint:'पहले भाग दो, फिर परिणाम का वर्गमूल लो।' }
    );
  };

  window.buildSqMakeDV2Solution=function(num,base,sqPart,ans){
    var res=num/sqPart;
    return S(
      { steps:[
        step('Step 1 - Understand','<br>We want to divide '+K(num)+' by a number so it becomes a perfect square.'),
        step('Step 2 - Factor it','<br>'+K(num+' = '+POW(base,'2')+T+sqPart)+'. Here '+K(POW(base,'2'))+' is already a perfect square (paired), but '+K(sqPart)+' is alone (unpaired).'),
        step('Step 3 - Divide out the lonely factor','<br>'+K(num+D+sqPart+' = '+res+' = '+POW(base,'2'))+', which is a perfect square.'),
        step('Step 4 - Final answer','<br>Divide by '+K(ans)+'.')
      ], shortcut:'Divide by the unpaired factor '+K('= '+ans)+'.', hint:'Find the factor that has no pair, and divide by it.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(num)+' ko kisi number se divide karke perfect square banana hai.'),
        step('Step 2 - Factor karo','<br>'+K(num+' = '+POW(base,'2')+T+sqPart)+'. Yahan '+K(POW(base,'2'))+' pehle se perfect square hai (jodi me), par '+K(sqPart)+' akela hai.'),
        step('Step 3 - Akele factor ko divide karo','<br>'+K(num+D+sqPart+' = '+res+' = '+POW(base,'2'))+', jo perfect square hai.'),
        step('Step 4 - Final answer','<br>'+K(ans)+' se divide karo.')
      ], shortcut:'Bina-jodi factor '+K('= '+ans)+' se divide karo.', hint:'Jis factor ki jodi nahi hai usse divide karo.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(num)+' को किसी संख्या से भाग देकर पूर्ण वर्ग बनाना है।'),
        step('चरण 2 - गुणनखंड','<br>'+K(num+' = '+POW(base,'2')+T+sqPart)+'. यहाँ '+K(POW(base,'2'))+' पहले से पूर्ण वर्ग है (जोड़ी में), पर '+K(sqPart)+' अकेला है।'),
        step('चरण 3 - अकेले गुणनखंड को भाग दो','<br>'+K(num+D+sqPart+' = '+res+' = '+POW(base,'2'))+', जो पूर्ण वर्ग है।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+' से भाग दो।')
      ], shortcut:'बिना-जोड़ी गुणनखंड '+K('= '+ans)+' से भाग दो।', hint:'जिस गुणनखंड की जोड़ी नहीं है उससे भाग दो।' }
    );
  };

  window.buildSqMakeDV3Solution=function(num,base,sqPart,ans){
    var res=num/sqPart;
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Find the smallest number to divide '+K(num)+' by to get a perfect square.'),
        step('Step 2 - Factor it','<br>'+K(num+' = '+POW(base,'2')+T+sqPart)+'. The '+K(POW(base,'2'))+' part is paired; '+K(sqPart)+' is unpaired.'),
        step('Step 3 - Divide by the lonely factor','<br>'+K(num+D+sqPart+' = '+res+' = '+POW(base,'2'))+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:'Smallest divisor = unpaired factor '+K('= '+ans)+'.', hint:'Divide by the factor that has no pair.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(num)+' ko perfect square banane ke liye sabse chhota divisor nikaalo.'),
        step('Step 2 - Factor karo','<br>'+K(num+' = '+POW(base,'2')+T+sqPart)+'. '+K(POW(base,'2'))+' jodi me hai; '+K(sqPart)+' akela hai.'),
        step('Step 3 - Akele factor se divide','<br>'+K(num+D+sqPart+' = '+res+' = '+POW(base,'2'))+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:'Sabse chhota divisor = bina-jodi factor '+K('= '+ans)+'.', hint:'Jis factor ki jodi nahi hai usse divide karo.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(num)+' को पूर्ण वर्ग बनाने के लिए सबसे छोटा भाजक निकालो।'),
        step('चरण 2 - गुणनखंड','<br>'+K(num+' = '+POW(base,'2')+T+sqPart)+'. '+K(POW(base,'2'))+' जोड़ी में है; '+K(sqPart)+' अकेला है।'),
        step('चरण 3 - अकेले गुणनखंड से भाग','<br>'+K(num+D+sqPart+' = '+res+' = '+POW(base,'2'))+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:'सबसे छोटा भाजक = बिना-जोड़ी गुणनखंड '+K('= '+ans)+'।', hint:'जिस गुणनखंड की जोड़ी नहीं है उससे भाग दो।' }
    );
  };

  window.buildSqMakeDV4Solution=function(num,sqPart,result,ans){
    var root=Math.round(Math.sqrt(result));
    return S(
      { steps:[
        step('Step 1 - Understand','<br>'+K(num+D+sqPart+' = '+result)+'. We must check whether '+K(result)+' is a perfect square.'),
        step('Step 2 - Test for a perfect square','<br>'+K(result+' = '+POW(root,'2'))+', so '+K(RT(result)+' = '+root)+' - a whole number.'),
        step('Step 3 - Conclude','<br>Since the square root is a whole number, '+K(result)+' is a perfect square.'),
        step('Step 4 - Final answer','<br>Yes.')
      ], shortcut:K(RT(result)+' = '+root)+' (whole number), so yes.', hint:'A perfect square has a whole-number square root.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(num+D+sqPart+' = '+result)+'. Check karna hai ki '+K(result)+' perfect square hai ya nahi.'),
        step('Step 2 - Perfect square test','<br>'+K(result+' = '+POW(root,'2'))+', toh '+K(RT(result)+' = '+root)+' - ek whole number.'),
        step('Step 3 - Conclusion','<br>Square root whole number hai, isliye '+K(result)+' perfect square hai.'),
        step('Step 4 - Final answer','<br>Yes.')
      ], shortcut:K(RT(result)+' = '+root)+' (whole number), toh haan.', hint:'Perfect square ka square root whole number hota hai.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(num+D+sqPart+' = '+result)+'। जाँचना है कि '+K(result)+' पूर्ण वर्ग है या नहीं।'),
        step('चरण 2 - पूर्ण वर्ग जाँच','<br>'+K(result+' = '+POW(root,'2'))+', तो '+K(RT(result)+' = '+root)+' - एक पूर्ण संख्या।'),
        step('चरण 3 - निष्कर्ष','<br>वर्गमूल पूर्ण संख्या है, इसलिए '+K(result)+' पूर्ण वर्ग है।'),
        step('चरण 4 - अंतिम उत्तर','<br>हाँ।')
      ], shortcut:K(RT(result)+' = '+root)+' (पूर्ण संख्या), तो हाँ।', hint:'पूर्ण वर्ग का वर्गमूल पूर्ण संख्या होता है।' }
    );
  };

  window.buildSqMakeDV5Solution=function(num,b,ans){
    var inner=num/b;
    return S(
      { steps:[
        step('Step 1 - Understand','<br>We must find '+K(RT(FR(num,b)))+'.'),
        step('Step 2 - Simplify inside the root','<br>'+K(FR(num,b)+' = '+inner)+'  (because '+K(num+D+b+' = '+inner)+').'),
        step('Step 3 - Take the square root','<br>'+K(inner+' = '+POW(ans,'2'))+', so '+K(RT(inner)+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(RT(FR(num,b))+' = '+RT(inner)+' = '+ans)+'.', hint:'Simplify the fraction inside the root first, then take the square root.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(RT(FR(num,b)))+' nikaalna hai.'),
        step('Step 2 - Root ke andar simplify karo','<br>'+K(FR(num,b)+' = '+inner)+'  (kyunki '+K(num+D+b+' = '+inner)+').'),
        step('Step 3 - Square root lo','<br>'+K(inner+' = '+POW(ans,'2'))+', toh '+K(RT(inner)+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(RT(FR(num,b))+' = '+RT(inner)+' = '+ans)+'.', hint:'Pehle root ke andar ka fraction simplify karo, phir square root lo.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(RT(FR(num,b)))+' निकालना है।'),
        step('चरण 2 - मूल के अंदर सरल करो','<br>'+K(FR(num,b)+' = '+inner)+'  (क्योंकि '+K(num+D+b+' = '+inner)+')।'),
        step('चरण 3 - वर्गमूल लो','<br>'+K(inner+' = '+POW(ans,'2'))+', तो '+K(RT(inner)+' = '+ans)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:K(RT(FR(num,b))+' = '+RT(inner)+' = '+ans)+'।', hint:'पहले मूल के अंदर की भिन्न सरल करो, फिर वर्गमूल लो।' }
    );
  };
})();
