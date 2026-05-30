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
        step('चरण 1 - समझो','<br>'+K(RT(sq))+' को दीर्घ विभाजन विधि से निकालेंगे - एक-एक अंक करके।'),
        step('चरण 2 - जोड़े बनाओ','<br>'+K(sq)+' के अंकों को दायें से दो-दो में समूह करो: '+K(grp)+'। दो समूह मतलब उत्तर 2 अंक का होगा।'),
        step('चरण 3 - पहला अंक','<br>सबसे बड़ी संख्या जिसका वर्ग '+K(G1)+' से कम या बराबर हो, वह '+K(t)+' है (क्योंकि '+K('('+t+T+t+') = '+(t*t))+')। घटाओ: '+K(G1+' - '+(t*t)+' = '+R1)+'।'),
        step('चरण 4 - दूसरा अंक','<br>अगला जोड़ा नीचे लाओ: '+K(bd)+'। पहले अंक को दुगुना करो: '+K('2'+T+t+' = '+(2*t))+'। ऐसा अंक '+K('u')+' खोजो कि '+K('('+div+')'+T+u+' = '+bd)+'। तो '+K('u = '+u)+'।'),
        step('चरण 5 - अंतिम उत्तर','<br>शेष 0 है, इसलिए '+K(RT(sq)+' = '+a)+'।')
      ], shortcut:'पूर्ण वर्ग के लिए '+K(RT(sq)+' = '+a)+' (ठीक 2-अंक मूल)।', hint:'अंकों को दायें से जोड़े बनाओ, फिर एक-एक अंक करके मूल निकालो।' }
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
        step('चरण 1 - समझो','<br>दीर्घ विभाजन से '+K(RT('?')+' = '+r)+' आया। वह संख्या निकालनी है।'),
        step('चरण 2 - उल्टा करो','<br>वर्गमूल का उल्टा है वर्ग करना, तो संख्या '+K('= '+POW(r,'2'))+'।'),
        step('चरण 3 - गणना','<br>'+K('('+r+T+r+') = '+ans)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:'संख्या '+K('= '+POW(r,'2')+' = '+ans)+'।', hint:'अगर मूल '+K(r)+' है, तो संख्या '+K(POW(r,'2'))+'।' }
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
        step('चरण 1 - समझो','<br>'+K(RT(sa))+' और '+K(RT(sb))+' में से बड़ा बताना है।'),
        step('चरण 2 - दोनों मूल हल करो','<br>'+K(RT(sa)+' = '+a)+'  और  '+K(RT(sb)+' = '+b)+'।'),
        step('चरण 3 - तुलना करो','<br>'+K(a)+' और '+K(b)+' में बड़ा है '+K(big)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(big)+'।')
      ], shortcut:'मूल के अंदर बड़ी संख्या, उसका वर्गमूल भी बड़ा: '+K(big)+'।', hint:'दोनों मूल निकालो, फिर बड़ा मान चुनो।' }
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
        step('चरण 1 - समझो','<br>दीर्घ विभाजन में अंकों को दायें से जोड़ों में बनाते हैं। '+K(num)+' के लिए जोड़े गिनने हैं।'),
        step('चरण 2 - जोड़े बनाओ','<br>'+K(grp)+'।'),
        step('चरण 3 - गिनो','<br>कुल '+K(n)+' जोड़े हैं।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(n)+'।')
      ], shortcut:'जोड़ों की संख्या (दायें से) = '+K(n)+'।', hint:'सबसे दायें अंक से शुरू करके जोड़े बनाओ।' }
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
        step('चरण 1 - समझो','<br>'+K(RT(sq))+' को दीर्घ विभाजन से निकालना है।'),
        step('चरण 2 - जोड़े बनाओ','<br>दायें से समूह करो: '+K(grp)+'।'),
        step('चरण 3 - एक-एक अंक करके मूल निकालो','<br>'+K(sq)+' पूर्ण वर्ग है, इसलिए विभाजन शेष 0 पर खत्म होता है और '+K(r)+' देता है।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(RT(sq)+' = '+r)+'।')
      ], shortcut:K(RT(sq)+' = '+r)+'।', hint:K(sq)+' पूर्ण वर्ग है, तो मूल ठीक '+K(r)+' है।' }
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
        step('चरण 1 - समझो','<br>पहले दीर्घ विभाजन से '+K(RT(sq))+' निकालो, फिर उत्तर के अंकों का योग करो।'),
        step('चरण 2 - मूल निकालो','<br>'+K(RT(sq)+' = '+r)+'।'),
        step('चरण 3 - अंकों का योग','<br>'+K(ds+' = '+ans)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:K(RT(sq)+' = '+r)+', अंकों का योग '+K('= '+ans)+'।', hint:'पहले मूल निकालो, फिर उसके अंकों को जोड़ो।' }
    );
  };
})();
