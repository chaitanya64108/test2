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
        step('Step 1 - Samjho','<br>'+K(num)+' ko sabse chhoti kis sankhya se guna karein ki wo poorn varg ban jaaye.'),
        step('Step 2 - Abhajya gunankhand','<br>'+K(num+' = '+fs)+'.  <i>Poorn varg me har abhajya gunank sam (even) baar, yaani jodi me aana chahiye.</i>'),
        step('Step 3 - Akeli abhajya dhoondo','<br>Ye abhajya vishm (odd) baar aati hain: '+K(oddStr)+'. Inke gunanfal '+K('= '+ans)+' se guna karo.'),
        step('Step 4 - Antim uttar','<br>'+K(ans)+'.')
      ], shortcut:'Vishm-ghaat abhajyaon ke gunanfal '+K('= '+ans)+' se guna karo.', hint:'Poorn varg tabhi banta hai jab har abhajya gunank sam baar aaye.' }
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
        step('Step 1 - Samjho','<br>'+K(num)+' ko '+K(multiplier)+' se guna karke jaancho ki parinaam poorn varg hai ya nahi.'),
        step('Step 2 - Guna','<br>'+K(num+T+multiplier+' = '+ans)+'.'),
        step('Step 3 - Poorn varg jaanch','<br>'+K(RT(ans)+' = '+root)+', ek poorn sankhya, to haan '+K(ans)+' poorn varg hai.'),
        step('Step 4 - Antim uttar','<br>Yes - '+K(ans)+'.')
      ], shortcut:K(num+T+multiplier+' = '+ans+' = '+POW(root,'2'))+'.', hint:'Poorn varg ka vargmool poorn sankhya hota hai.' }
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
        step('Step 1 - Samjho','<br>'+K(na+T+nb)+' kis sankhya ka poorn varg hai?'),
        step('Step 2 - Har ko varg likho','<br>'+K(na+' = '+POW(sa,'2'))+' aur '+K(nb+' = '+POW(sb,'2'))+'.'),
        step('Step 3 - Milao','<br>'+K(na+T+nb+' = ('+sa+T+sb+')^{2} = '+POW(ans,'2'))+', to sankhya hai '+K(ans)+'.'),
        step('Step 4 - Antim uttar','<br>'+K(ans)+'.')
      ], shortcut:'Sankhya '+K('= '+sa+T+sb+' = '+ans)+'.', hint:'$a^{2}\\times b^{2} = (ab)^{2}$.' }
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
        step('Step 1 - Samjho','<br>'+K(num)+' ko '+K(p)+' se guna karke gunanfal ka vargmool nikaalo.'),
        step('Step 2 - Guna','<br>'+K(num+T+p+' = '+prod)+'.'),
        step('Step 3 - Vargmool lo','<br>'+K(prod+' = '+POW(ans,'2'))+', to '+K(RT(prod)+' = '+ans)+'.'),
        step('Step 4 - Antim uttar','<br>'+K(ans)+'.')
      ], shortcut:K(RT(num+T+p)+' = '+ans)+'.', hint:'Pehle guna karo, phir gunanfal ka vargmool lo.' }
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
        step('Step 1 - Samjho','<br>'+K(num)+' ko kisi sankhya se guna karke poorn varg banana hai.'),
        step('Step 2 - Gunankhand','<br>'+K(num+' = '+base+T+POW(sqPart,'2'))+'. Yahan '+K(POW(sqPart,'2'))+' pehle se poorn varg hai, par '+K(base)+' akela hai.'),
        step('Step 3 - Akele gunank ko jodi do','<br>'+K(base)+' se guna karo: '+K(fin)+'.'),
        step('Step 4 - Antim uttar','<br>'+K(ans)+' se guna karo.')
      ], shortcut:'Bina-jodi gunank '+K('= '+ans)+' se guna karo.', hint:'Jis gunank ki jodi nahi hai usse guna karo.' }
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
        step('Step 1 - Samjho','<br>'+K(num)+' ko poorn varg banane ke liye sabse chhota gunak nikaalo.'),
        step('Step 2 - Gunankhand','<br>'+K(num+' = '+base+T+POW(sqPart,'2'))+'. '+K(POW(sqPart,'2'))+' jodi me hai; '+K(base)+' akela hai.'),
        step('Step 3 - Akele gunank se guna','<br>'+K(fin)+'.'),
        step('Step 4 - Antim uttar','<br>'+K(ans)+'.')
      ], shortcut:'Sabse chhota gunak = bina-jodi gunank '+K('= '+ans)+'.', hint:'Jis gunank ki jodi nahi hai usse guna karo.' }
    );
  };
})();
