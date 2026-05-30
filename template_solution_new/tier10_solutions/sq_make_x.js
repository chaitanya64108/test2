/* tier10 - Template 7: sq_make_x (Make Perfect Square by Multiplying)
   buildSqMakeXSolution(num,ans), V1(num,multiplier,ans), V2(na,nb,ans), V3(num,p,ans), V4(num,base,sqPart,ans), V5(num,base,sqPart,ans) */
(function(){
  var SB=window.SB; if(!SB) return;
  var K=SB.K,RT=SB.RT,POW=SB.POW,T=SB.T,step=SB.step,S=SB.S;
  function fact(n){ var f={},d=2,m=n; while(d*d<=m){ while(m%d===0){ f[d]=(f[d]||0)+1; m=m/d; } d++; } if(m>1) f[m]=(f[m]||0)+1; return f; }
  function fstr(f){ var s=[]; for(var p in f){ s.push(f[p]>1?POW(p,f[p]):String(p)); } return s.join(T); }

  window.buildSqMakeXSolution=function(num,ans){
    var f=fact(num), fs=fstr(f), odd=[]; for(var p in f){ if(f[p]%2) odd.push(p); }
    var oddStr=odd.length?odd.join(T):String(ans);
    return S(
      { steps:[
        step('Step 1 - Understand','<br>We want the smallest whole number to multiply '+K(num)+' by so that it becomes a perfect square.'),
        step('Step 2 - Break into prime factors','<br>'+K(num+' = '+fs)+'.  <i>A perfect square needs every prime factor to appear an even number of times (in pairs).</i>'),
        step('Step 3 - Find the unpaired primes','<br>These primes appear an odd number of times: '+K(oddStr)+'. Multiply by their product '+K('= '+ans)+' to complete the pairs.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:'Multiply by the product of the odd-power primes '+K('= '+ans)+'.', hint:'A number is a perfect square only when every prime factor appears an even number of times.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(num)+' ko sabse chhote kis number se multiply karein ki wo perfect square ban jaaye.'),
        step('Step 2 - Prime factors me todo','<br>'+K(num+' = '+fs)+'.  <i>Perfect square me har prime factor even number of times (jodi me) aana chahiye.</i>'),
        step('Step 3 - Akeli primes dhoondo','<br>Ye primes odd number of times aati hain: '+K(oddStr)+'. Inke product '+K('= '+ans)+' se multiply karo taaki jodi poori ho.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:'Odd-power primes ke product '+K('= '+ans)+' se multiply karo.', hint:'Perfect square tabhi banta hai jab har prime factor even baar aaye.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(num)+' को सबसे छोटी किस संख्या से गुणा करें कि वह पूर्ण वर्ग बन जाए।'),
        step('चरण 2 - अभाज्य गुणनखंड','<br>'+K(num+' = '+fs)+'.  <i>पूर्ण वर्ग में हर अभाज्य गुणनखंड सम (even) बार, यानी जोड़े में आना चाहिए।</i>'),
        step('चरण 3 - अकेली अभाज्य खोजो','<br>ये अभाज्य विषम (odd) बार आती हैं: '+K(oddStr)+'। इनके गुणनफल '+K('= '+ans)+' से गुणा करो।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:'विषम-घात अभाज्यों के गुणनफल '+K('= '+ans)+' से गुणा करो।', hint:'पूर्ण वर्ग तभी बनता है जब हर अभाज्य गुणनखंड सम बार आए।' }
    );
  };

  window.buildSqMakeXV1Solution=function(num,multiplier,ans){
    var root=Math.round(Math.sqrt(ans));
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Multiply '+K(num)+' by '+K(multiplier)+' and check whether the result is a perfect square.'),
        step('Step 2 - Multiply','<br>'+K(num+T+multiplier+' = '+ans)+'.'),
        step('Step 3 - Check it is a perfect square','<br>'+K(RT(ans)+' = '+root)+', a whole number, so yes '+K(ans)+' is a perfect square.'),
        step('Step 4 - Final answer','<br>Yes - '+K(ans)+'.')
      ], shortcut:K(num+T+multiplier+' = '+ans+' = '+POW(root,'2'))+'.', hint:'A perfect square has a whole-number square root.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(num)+' ko '+K(multiplier)+' se multiply karke check karo ki result perfect square hai ya nahi.'),
        step('Step 2 - Multiply','<br>'+K(num+T+multiplier+' = '+ans)+'.'),
        step('Step 3 - Perfect square check','<br>'+K(RT(ans)+' = '+root)+', ek whole number, toh haan '+K(ans)+' perfect square hai.'),
        step('Step 4 - Final answer','<br>Yes - '+K(ans)+'.')
      ], shortcut:K(num+T+multiplier+' = '+ans+' = '+POW(root,'2'))+'.', hint:'Perfect square ka square root whole number hota hai.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(num)+' को '+K(multiplier)+' से गुणा करके जाँचो कि परिणाम पूर्ण वर्ग है या नहीं।'),
        step('चरण 2 - गुणा','<br>'+K(num+T+multiplier+' = '+ans)+'।'),
        step('चरण 3 - पूर्ण वर्ग जाँच','<br>'+K(RT(ans)+' = '+root)+', एक पूर्ण संख्या, तो हाँ '+K(ans)+' पूर्ण वर्ग है।'),
        step('चरण 4 - अंतिम उत्तर','<br>हाँ - '+K(ans)+'।')
      ], shortcut:K(num+T+multiplier+' = '+ans+' = '+POW(root,'2'))+'।', hint:'पूर्ण वर्ग का वर्गमूल पूर्ण संख्या होता है।' }
    );
  };

  window.buildSqMakeXV2Solution=function(na,nb,ans){
    var sa=Math.round(Math.sqrt(na)), sb=Math.round(Math.sqrt(nb));
    return S(
      { steps:[
        step('Step 1 - Understand','<br>'+K(na+T+nb)+' is the perfect square of which number?'),
        step('Step 2 - Write each as a square','<br>'+K(na+' = '+POW(sa,'2'))+' and '+K(nb+' = '+POW(sb,'2'))+'.'),
        step('Step 3 - Combine','<br>'+K(na+T+nb+' = ('+sa+T+sb+')^{2} = '+POW(ans,'2'))+', so the number is '+K(ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:'Number '+K('= '+sa+T+sb+' = '+ans)+'.', hint:'$a^{2}\\times b^{2} = (ab)^{2}$.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(na+T+nb)+' kis number ka perfect square hai?'),
        step('Step 2 - Har ko square likho','<br>'+K(na+' = '+POW(sa,'2'))+' aur '+K(nb+' = '+POW(sb,'2'))+'.'),
        step('Step 3 - Jodo','<br>'+K(na+T+nb+' = ('+sa+T+sb+')^{2} = '+POW(ans,'2'))+', toh number hai '+K(ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:'Number '+K('= '+sa+T+sb+' = '+ans)+'.', hint:'$a^{2}\\times b^{2} = (ab)^{2}$.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(na+T+nb)+' किस संख्या का पूर्ण वर्ग है?'),
        step('चरण 2 - हर को वर्ग लिखो','<br>'+K(na+' = '+POW(sa,'2'))+' और '+K(nb+' = '+POW(sb,'2'))+'।'),
        step('चरण 3 - मिलाओ','<br>'+K(na+T+nb+' = ('+sa+T+sb+')^{2} = '+POW(ans,'2'))+', तो संख्या है '+K(ans)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:'संख्या '+K('= '+sa+T+sb+' = '+ans)+'।', hint:'$a^{2}\\times b^{2} = (ab)^{2}$.' }
    );
  };

  window.buildSqMakeXV3Solution=function(num,p,ans){
    var prod=num*p;
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Multiply '+K(num)+' by '+K(p)+', then find the square root of the product.'),
        step('Step 2 - Multiply','<br>'+K(num+T+p+' = '+prod)+'.'),
        step('Step 3 - Take the square root','<br>'+K(prod+' = '+POW(ans,'2'))+', so '+K(RT(prod)+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(RT(num+T+p)+' = '+ans)+'.', hint:'Multiply first, then take the square root of the product.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(num)+' ko '+K(p)+' se multiply karke product ka square root nikaalo.'),
        step('Step 2 - Multiply','<br>'+K(num+T+p+' = '+prod)+'.'),
        step('Step 3 - Square root lo','<br>'+K(prod+' = '+POW(ans,'2'))+', toh '+K(RT(prod)+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(RT(num+T+p)+' = '+ans)+'.', hint:'Pehle multiply karo, phir product ka square root lo.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(num)+' को '+K(p)+' से गुणा करके गुणनफल का वर्गमूल निकालो।'),
        step('चरण 2 - गुणा','<br>'+K(num+T+p+' = '+prod)+'।'),
        step('चरण 3 - वर्गमूल लो','<br>'+K(prod+' = '+POW(ans,'2'))+', तो '+K(RT(prod)+' = '+ans)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:K(RT(num+T+p)+' = '+ans)+'।', hint:'पहले गुणा करो, फिर गुणनफल का वर्गमूल लो।' }
    );
  };

  window.buildSqMakeXV4Solution=function(num,base,sqPart,ans){
    var fin=num+T+base+' = '+POW(base,'2')+T+POW(sqPart,'2')+' = '+POW(base*sqPart,'2');
    return S(
      { steps:[
        step('Step 1 - Understand','<br>We want to multiply '+K(num)+' by a number so it becomes a perfect square.'),
        step('Step 2 - Factor it','<br>'+K(num+' = '+base+T+POW(sqPart,'2'))+'. Here '+K(POW(sqPart,'2'))+' is already a perfect square, but '+K(base)+' is alone (unpaired).'),
        step('Step 3 - Pair up the lonely factor','<br>Multiply by '+K(base)+': '+K(fin)+'.'),
        step('Step 4 - Final answer','<br>Multiply by '+K(ans)+'.')
      ], shortcut:'Multiply by the unpaired factor '+K('= '+ans)+'.', hint:'Find the prime/factor that has no pair, and multiply by it.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(num)+' ko kisi number se multiply karke perfect square banana hai.'),
        step('Step 2 - Factor karo','<br>'+K(num+' = '+base+T+POW(sqPart,'2'))+'. Yahan '+K(POW(sqPart,'2'))+' pehle se perfect square hai, par '+K(base)+' akela (bina jodi) hai.'),
        step('Step 3 - Akele factor ko jodi do','<br>'+K(base)+' se multiply karo: '+K(fin)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+' se multiply karo.')
      ], shortcut:'Bina-jodi factor '+K('= '+ans)+' se multiply karo.', hint:'Jis factor ki jodi nahi hai usse multiply karo.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(num)+' को किसी संख्या से गुणा करके पूर्ण वर्ग बनाना है।'),
        step('चरण 2 - गुणनखंड','<br>'+K(num+' = '+base+T+POW(sqPart,'2'))+'. यहाँ '+K(POW(sqPart,'2'))+' पहले से पूर्ण वर्ग है, पर '+K(base)+' अकेला है।'),
        step('चरण 3 - अकेले गुणनखंड को जोड़ी दो','<br>'+K(base)+' से गुणा करो: '+K(fin)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+' से गुणा करो।')
      ], shortcut:'बिना-जोड़ी गुणनखंड '+K('= '+ans)+' से गुणा करो।', hint:'जिस गुणनखंड की जोड़ी नहीं है उससे गुणा करो।' }
    );
  };

  window.buildSqMakeXV5Solution=function(num,base,sqPart,ans){
    var fin=num+T+base+' = '+POW(base*sqPart,'2');
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Find the smallest number to multiply '+K(num)+' by to get a perfect square.'),
        step('Step 2 - Factor it','<br>'+K(num+' = '+base+T+POW(sqPart,'2'))+'. The '+K(POW(sqPart,'2'))+' part is paired; '+K(base)+' is unpaired.'),
        step('Step 3 - Multiply by the lonely factor','<br>'+K(fin)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:'Smallest multiplier = unpaired factor '+K('= '+ans)+'.', hint:'Multiply by the factor that has no pair.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(num)+' ko perfect square banane ke liye sabse chhota multiplier nikaalo.'),
        step('Step 2 - Factor karo','<br>'+K(num+' = '+base+T+POW(sqPart,'2'))+'. '+K(POW(sqPart,'2'))+' jodi me hai; '+K(base)+' akela hai.'),
        step('Step 3 - Akele factor se multiply','<br>'+K(fin)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:'Sabse chhota multiplier = bina-jodi factor '+K('= '+ans)+'.', hint:'Jis factor ki jodi nahi hai usse multiply karo.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(num)+' को पूर्ण वर्ग बनाने के लिए सबसे छोटा गुणक निकालो।'),
        step('चरण 2 - गुणनखंड','<br>'+K(num+' = '+base+T+POW(sqPart,'2'))+'. '+K(POW(sqPart,'2'))+' जोड़ी में है; '+K(base)+' अकेला है।'),
        step('चरण 3 - अकेले गुणनखंड से गुणा','<br>'+K(fin)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:'सबसे छोटा गुणक = बिना-जोड़ी गुणनखंड '+K('= '+ans)+' से गुणा करो।', hint:'जिस गुणनखंड की जोड़ी नहीं है उससे गुणा करो।' }
    );
  };
})();
