/* tier10 - Template 3: sq_longdiv (Long Division)
   Functions called by templates_tier10/1.js:
   buildSqLongdivSolution(sq,a), V1(r,ans), V2(a,b,sa,sb), V3(n,num), V4(r,sq), V5(r,sq,ans) */
(function(){
  var SB=window.SB; if(!SB) return;
  var K=SB.K,RT=SB.RT,POW=SB.POW,T=SB.T,step=SB.step,S=SB.S;
  function pad2(x){ return x<10?'0'+x:''+x; }
  function groups(num){ var s=String(num),g=[],i=s.length; while(i>0){ g.unshift(s.slice(Math.max(0,i-2),i)); i-=2; } return g; }

  /* base: two-digit perfect-square root (a in 10..50) by long division */
  window.buildSqLongdivSolution=function(sq,a){
    var t=Math.floor(a/10), u=a%10, G1=Math.floor(sq/100), G2=sq%100, R1=G1-t*t, bd=R1*100+G2, div=20*t+u, grp=G1+' | '+pad2(G2);
    return S(
      { steps:[
        step('Step 1 - Understand','<br>We find '+K(RT(sq))+' by the long division method - one digit at a time.'),
        step('Step 2 - Make pairs','<br>Group the digits of '+K(sq)+' from the right in pairs: '+K(grp)+'. Two groups means the answer has 2 digits.'),
        step('Step 3 - First digit','<br>Largest number whose square is at most '+K(G1)+' is '+K(t)+' (because '+K('('+t+T+t+') = '+(t*t))+'). Subtract: '+K(G1+' - '+(t*t)+' = '+R1)+'.'),
        step('Step 4 - Second digit','<br>Bring down the next pair to get '+K(bd)+'. Double the first digit: '+K('2'+T+t+' = '+(2*t))+'. Find a digit '+K('u')+' so that '+K('('+div+')'+T+u+' = '+bd)+'. So '+K('u = '+u)+'.'),
        step('Step 5 - Final answer','<br>Remainder is 0, so '+K(RT(sq)+' = '+a)+'.')
      ], shortcut:'For a perfect square, '+K(RT(sq)+' = '+a)+' (the exact two-digit root).', hint:'Pair the digits from the right, then find the root digit by digit.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(RT(sq))+' ko long division method se nikaalenge - ek-ek digit karke.'),
        step('Step 2 - Pairs banao','<br>'+K(sq)+' ke digits ko right se do-do me group karo: '+K(grp)+'. Do groups matlab answer 2 digit ka hoga.'),
        step('Step 3 - Pehla digit','<br>Sabse bada number jiska square '+K(G1)+' se kam ya barabar ho, woh '+K(t)+' hai (kyunki '+K('('+t+T+t+') = '+(t*t))+'). Ghatao: '+K(G1+' - '+(t*t)+' = '+R1)+'.'),
        step('Step 4 - Doosra digit','<br>Agla pair niche laao: '+K(bd)+'. Pehle digit ko double karo: '+K('2'+T+t+' = '+(2*t))+'. Aisa digit '+K('u')+' dhoondo ki '+K('('+div+')'+T+u+' = '+bd)+'. Toh '+K('u = '+u)+'.'),
        step('Step 5 - Final answer','<br>Remainder 0 hai, isliye '+K(RT(sq)+' = '+a)+'.')
      ], shortcut:'Perfect square ke liye '+K(RT(sq)+' = '+a)+' (exact 2-digit root).', hint:'Digits ko right se pair karo, phir ek-ek digit karke root nikaalo.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(RT(sq))+' ko deergh vibhajan vidhi se nikaalenge - ek-ek ank karke.'),
        step('Step 2 - Jode banao','<br>'+K(sq)+' ke anko ko dayein se do-do me group karo: '+K(grp)+'. Do group matlab uttar 2 ank ka hoga.'),
        step('Step 3 - Pehla ank','<br>Sabse badi sankhya jiska varg '+K(G1)+' se kam ya barabar ho, woh '+K(t)+' hai (kyunki '+K('('+t+T+t+') = '+(t*t))+'). Ghatao: '+K(G1+' - '+(t*t)+' = '+R1)+'.'),
        step('Step 4 - Doosra ank','<br>Agla joda niche laao: '+K(bd)+'. Pehle ank ko dugna karo: '+K('2'+T+t+' = '+(2*t))+'. Aisa ank '+K('u')+' khojo ki '+K('('+div+')'+T+u+' = '+bd)+'. To '+K('u = '+u)+'.'),
        step('Step 5 - Antim uttar','<br>Shesh 0 hai, isliye '+K(RT(sq)+' = '+a)+'.')
      ], shortcut:'Poorn varg ke liye '+K(RT(sq)+' = '+a)+' (theek 2-ank mool).', hint:'Anko ko dayein se jode banao, phir ek-ek ank karke mool nikaalo.' }
    );
  };

  window.buildSqLongdivV1Solution=function(r,ans){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Long division gave '+K(RT('?')+' = '+r)+'. We must find that number.'),
        step('Step 2 - Reverse it','<br>The opposite of square root is squaring, so number '+K('= '+POW(r,'2'))+'.'),
        step('Step 3 - Calculate','<br>'+K('('+r+T+r+') = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:'Number '+K('= '+POW(r,'2')+' = '+ans)+'.', hint:'If the root is '+K(r)+', the number is '+K(POW(r,'2'))+'.' },
      { steps:[
        step('Step 1 - Samjho','<br>Long division se '+K(RT('?')+' = '+r)+' aaya. Woh number nikaalna hai.'),
        step('Step 2 - Ulta karo','<br>Square root ka ulta hai squaring, toh number '+K('= '+POW(r,'2'))+'.'),
        step('Step 3 - Calculate','<br>'+K('('+r+T+r+') = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:'Number '+K('= '+POW(r,'2')+' = '+ans)+'.', hint:'Agar root '+K(r)+' hai, toh number '+K(POW(r,'2'))+'.' },
      { steps:[
        step('Step 1 - Samjho','<br>Deergh vibhajan se '+K(RT('?')+' = '+r)+' aaya. Woh sankhya nikaalni hai.'),
        step('Step 2 - Ulta karo','<br>Vargmool ka ulta hai varg karna, to sankhya '+K('= '+POW(r,'2'))+'.'),
        step('Step 3 - Ganana','<br>'+K('('+r+T+r+') = '+ans)+'.'),
        step('Step 4 - Antim uttar','<br>'+K(ans)+'.')
      ], shortcut:'Sankhya '+K('= '+POW(r,'2')+' = '+ans)+'.', hint:'Agar mool '+K(r)+' hai, to sankhya '+K(POW(r,'2'))+'.' }
    );
  };

  window.buildSqLongdivV2Solution=function(a,b,sa,sb){
    var big=Math.max(a,b);
    return S(
      { steps:[
        step('Step 1 - Understand','<br>We compare '+K(RT(sa))+' and '+K(RT(sb))+', and give the larger one.'),
        step('Step 2 - Solve each root','<br>'+K(RT(sa)+' = '+a)+'  and  '+K(RT(sb)+' = '+b)+'.'),
        step('Step 3 - Compare','<br>Between '+K(a)+' and '+K(b)+', the larger is '+K(big)+'.'),
        step('Step 4 - Final answer','<br>'+K(big)+'.')
      ], shortcut:'Bigger number under the root gives the bigger square root: '+K(big)+'.', hint:'Find both roots, then pick the larger value.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(RT(sa))+' aur '+K(RT(sb))+' me se bada batana hai.'),
        step('Step 2 - Dono root solve karo','<br>'+K(RT(sa)+' = '+a)+'  aur  '+K(RT(sb)+' = '+b)+'.'),
        step('Step 3 - Compare karo','<br>'+K(a)+' aur '+K(b)+' me bada hai '+K(big)+'.'),
        step('Step 4 - Final answer','<br>'+K(big)+'.')
      ], shortcut:'Root ke andar bada number, uska square root bhi bada: '+K(big)+'.', hint:'Dono root nikaalo, phir bada maan chuno.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(RT(sa))+' aur '+K(RT(sb))+' me se bada batana hai.'),
        step('Step 2 - Dono mool hal karo','<br>'+K(RT(sa)+' = '+a)+'  aur  '+K(RT(sb)+' = '+b)+'.'),
        step('Step 3 - Tulna karo','<br>'+K(a)+' aur '+K(b)+' me bada hai '+K(big)+'.'),
        step('Step 4 - Antim uttar','<br>'+K(big)+'.')
      ], shortcut:'Mool ke andar badi sankhya, uska vargmool bhi bada: '+K(big)+'.', hint:'Dono mool nikaalo, phir bada maan chuno.' }
    );
  };

  window.buildSqLongdivV3Solution=function(n,num){
    var g=groups(num), grp=g.join(' | ');
    return S(
      { steps:[
        step('Step 1 - Understand','<br>In long division we group the digits in pairs from the right. We must count the groups for '+K(num)+'.'),
        step('Step 2 - Make the groups','<br>'+K(grp)+'.'),
        step('Step 3 - Count them','<br>There are '+K(n)+' groups.'),
        step('Step 4 - Final answer','<br>'+K(n)+'.')
      ], shortcut:'Number of pairs (from the right) = '+K(n)+'.', hint:'Start from the rightmost digit and make pairs.' },
      { steps:[
        step('Step 1 - Samjho','<br>Long division me digits ko right se pairs me group karte hain. '+K(num)+' ke liye groups ginne hain.'),
        step('Step 2 - Groups banao','<br>'+K(grp)+'.'),
        step('Step 3 - Gino','<br>Total '+K(n)+' groups hain.'),
        step('Step 4 - Final answer','<br>'+K(n)+'.')
      ], shortcut:'Pairs ki sankhya (right se) = '+K(n)+'.', hint:'Sabse dayein digit se shuru karke pairs banao.' },
      { steps:[
        step('Step 1 - Samjho','<br>Deergh vibhajan me anko ko dayein se jodo me banate hain. '+K(num)+' ke liye jode ginne hain.'),
        step('Step 2 - Jode banao','<br>'+K(grp)+'.'),
        step('Step 3 - Gino','<br>Kul '+K(n)+' jode hain.'),
        step('Step 4 - Antim uttar','<br>'+K(n)+'.')
      ], shortcut:'Jodo ki sankhya (dayein se) = '+K(n)+'.', hint:'Sabse dayein ank se shuru karke jode banao.' }
    );
  };

  window.buildSqLongdivV4Solution=function(r,sq){
    var grp=Math.floor(sq/100)+' | '+pad2(sq%100);
    return S(
      { steps:[
        step('Step 1 - Understand','<br>We find '+K(RT(sq))+' by long division.'),
        step('Step 2 - Make pairs','<br>Group from the right: '+K(grp)+'.'),
        step('Step 3 - Find the root digit by digit','<br>Since '+K(sq)+' is a perfect square, the division ends with remainder 0 and gives '+K(r)+'.'),
        step('Step 4 - Final answer','<br>'+K(RT(sq)+' = '+r)+'.')
      ], shortcut:K(RT(sq)+' = '+r)+'.', hint:K(sq)+' is a perfect square, so its root is the exact number '+K(r)+'.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(RT(sq))+' ko long division se nikaalna hai.'),
        step('Step 2 - Pairs banao','<br>Right se group karo: '+K(grp)+'.'),
        step('Step 3 - Ek-ek digit karke root nikaalo','<br>'+K(sq)+' perfect square hai, isliye division remainder 0 pe khatam hota hai aur '+K(r)+' deta hai.'),
        step('Step 4 - Final answer','<br>'+K(RT(sq)+' = '+r)+'.')
      ], shortcut:K(RT(sq)+' = '+r)+'.', hint:K(sq)+' perfect square hai, toh root exact number '+K(r)+' hai.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(RT(sq))+' ko deergh vibhajan se nikaalna hai.'),
        step('Step 2 - Jode banao','<br>Dayein se group karo: '+K(grp)+'.'),
        step('Step 3 - Ek-ek ank karke mool nikaalo','<br>'+K(sq)+' poorn varg hai, isliye vibhajan shesh 0 pe khatam hota hai aur '+K(r)+' deta hai.'),
        step('Step 4 - Antim uttar','<br>'+K(RT(sq)+' = '+r)+'.')
      ], shortcut:K(RT(sq)+' = '+r)+'.', hint:K(sq)+' poorn varg hai, to mool theek '+K(r)+' hai.' }
    );
  };

  window.buildSqLongdivV5Solution=function(r,sq,ans){
    var ds=String(r).split('').join(' + ');
    return S(
      { steps:[
        step('Step 1 - Understand','<br>First find '+K(RT(sq))+' by long division, then add the digits of the answer.'),
        step('Step 2 - Find the root','<br>'+K(RT(sq)+' = '+r)+'.'),
        step('Step 3 - Add the digits','<br>'+K(ds+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(RT(sq)+' = '+r)+', digit sum '+K('= '+ans)+'.', hint:'Find the root first, then add its digits.' },
      { steps:[
        step('Step 1 - Samjho','<br>Pehle long division se '+K(RT(sq))+' nikaalo, phir answer ke digits jodo.'),
        step('Step 2 - Root nikaalo','<br>'+K(RT(sq)+' = '+r)+'.'),
        step('Step 3 - Digits jodo','<br>'+K(ds+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(RT(sq)+' = '+r)+', digit sum '+K('= '+ans)+'.', hint:'Pehle root nikaalo, phir uske digits jodo.' },
      { steps:[
        step('Step 1 - Samjho','<br>Pehle deergh vibhajan se '+K(RT(sq))+' nikaalo, phir uttar ke anko ka yog karo.'),
        step('Step 2 - Mool nikaalo','<br>'+K(RT(sq)+' = '+r)+'.'),
        step('Step 3 - Anko ka yog','<br>'+K(ds+' = '+ans)+'.'),
        step('Step 4 - Antim uttar','<br>'+K(ans)+'.')
      ], shortcut:K(RT(sq)+' = '+r)+', anko ka yog '+K('= '+ans)+'.', hint:'Pehle mool nikaalo, phir uske anko ko jodo.' }
    );
  };
})();
