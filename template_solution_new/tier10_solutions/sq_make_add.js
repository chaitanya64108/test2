/* tier10 - Template 9: sq_make_add (Make Perfect Square by Adding)
   buildSqMakeAddSolution(num,ans), V1(num,sq,add,ans), V2(num,ans,a), V3(num1,num2,sq,add1,add2,ans), V4(num,add,ans), V5(add1,add2,a,b,ans) */
(function(){
  var SB=window.SB; if(!SB) return;
  var K=SB.K,RT=SB.RT,POW=SB.POW,T=SB.T,step=SB.step,S=SB.S;

  window.buildSqMakeAddSolution=function(num,ans){
    var sq=num+ans, a=Math.round(Math.sqrt(sq));
    return S(
      { steps:[
        step('Step 1 - Understand','<br>We need the smallest number to add to '+K(num)+' so it becomes a perfect square.'),
        step('Step 2 - Find the next perfect square','<br>The first perfect square at or above '+K(num)+' is '+K(POW(a,'2')+' = '+sq)+'  (since '+K(a+T+a+' = '+sq)+').'),
        step('Step 3 - Subtract to find the gap','<br>Add '+K(sq+' - '+num+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:'Next square '+K('= '+sq)+'; add '+K(sq+' - '+num+' = '+ans)+'.', hint:'Find the next perfect square above the number, then subtract the number from it.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(num)+' me sabse chhota kya jodein ki wo perfect square ban jaaye.'),
        step('Step 2 - Agla perfect square dhoondo','<br>'+K(num)+' ke barabar ya uske upar pehla perfect square hai '+K(POW(a,'2')+' = '+sq)+'  (kyunki '+K(a+T+a+' = '+sq)+').'),
        step('Step 3 - Gap nikaalo','<br>Jodo '+K(sq+' - '+num+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:'Agla square '+K('= '+sq)+'; jodo '+K(sq+' - '+num+' = '+ans)+'.', hint:'Number ke upar agla perfect square dhoondo, phir number ko usme se ghatao.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(num)+' में सबसे छोटा क्या जोड़ें कि वह पूर्ण वर्ग बन जाए।'),
        step('चरण 2 - अगला पूर्ण वर्ग खोजो','<br>'+K(num)+' के बराबर या उससे ऊपर पहला पूर्ण वर्ग है '+K(POW(a,'2')+' = '+sq)+'  (क्योंकि '+K(a+T+a+' = '+sq)+')।'),
        step('चरण 3 - अंतर निकालो','<br>जोड़ो '+K(sq+' - '+num+' = '+ans)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:'अगला वर्ग '+K('= '+sq)+'; जोड़ो '+K(sq+' - '+num+' = '+ans)+'।', hint:'संख्या के ऊपर अगला पूर्ण वर्ग खोजो, फिर संख्या को उसमें से घटाओ।' }
    );
  };

  window.buildSqMakeAddV1Solution=function(num,sq,add,ans){
    var a=Math.round(Math.sqrt(sq));
    return S(
      { steps:[
        step('Step 1 - Understand','<br>A number was added to '+K(num)+' to turn it into the perfect square '+K(sq)+'. We must find that number.'),
        step('Step 2 - Note the target','<br>'+K(sq+' = '+POW(a,'2'))+'  (because '+K(a+T+a+' = '+sq)+').'),
        step('Step 3 - Subtract','<br>Number added '+K('= '+sq+' - '+num+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(sq+' - '+num+' = '+ans)+'.', hint:'Amount added = target square - original number.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(num)+' me kuch joda gaya taaki wo perfect square '+K(sq)+' ban jaaye. Wahi nikaalna hai.'),
        step('Step 2 - Target note karo','<br>'+K(sq+' = '+POW(a,'2'))+'  (kyunki '+K(a+T+a+' = '+sq)+').'),
        step('Step 3 - Ghatao','<br>Joda gaya '+K('= '+sq+' - '+num+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(sq+' - '+num+' = '+ans)+'.', hint:'Joda gaya = target square - original number.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(num)+' में कुछ जोड़ा गया ताकि वह पूर्ण वर्ग '+K(sq)+' बन जाए। वही निकालना है।'),
        step('चरण 2 - लक्ष्य नोट करो','<br>'+K(sq+' = '+POW(a,'2'))+'  (क्योंकि '+K(a+T+a+' = '+sq)+')।'),
        step('चरण 3 - घटाओ','<br>जोड़ा गया '+K('= '+sq+' - '+num+' = '+ans)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:K(sq+' - '+num+' = '+ans)+'।', hint:'जोड़ी गई संख्या = लक्ष्य वर्ग - मूल संख्या।' }
    );
  };

  window.buildSqMakeAddV2Solution=function(num,ans,a){
    var b=a+1, lo=a*a, hi=b*b;
    return S(
      { steps:[
        step('Step 1 - Understand','<br>How much must be added to '+K(num)+' to reach the next perfect square?'),
        step('Step 2 - Place the number between squares','<br>'+K(num)+' is just above '+K(POW(a,'2')+' = '+lo)+' and below '+K(POW(b,'2')+' = '+hi)+'. So the next perfect square is '+K(hi)+'.'),
        step('Step 3 - Subtract','<br>Add '+K(hi+' - '+num+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:'Next square '+K('= '+hi)+'; add '+K(hi+' - '+num+' = '+ans)+'.', hint:'Find the next perfect square after the number, then subtract.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(num)+' me kitna jodein ki agla perfect square mile?'),
        step('Step 2 - Number ko squares ke beech rakho','<br>'+K(num)+' bas '+K(POW(a,'2')+' = '+lo)+' ke upar aur '+K(POW(b,'2')+' = '+hi)+' ke niche hai. Toh agla perfect square hai '+K(hi)+'.'),
        step('Step 3 - Ghatao','<br>Jodo '+K(hi+' - '+num+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:'Agla square '+K('= '+hi)+'; jodo '+K(hi+' - '+num+' = '+ans)+'.', hint:'Number ke baad agla perfect square dhoondo, phir ghatao.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(num)+' में कितना जोड़ें कि अगला पूर्ण वर्ग मिले?'),
        step('चरण 2 - संख्या को वर्गों के बीच रखो','<br>'+K(num)+' बस '+K(POW(a,'2')+' = '+lo)+' के ऊपर और '+K(POW(b,'2')+' = '+hi)+' के नीचे है। तो अगला पूर्ण वर्ग है '+K(hi)+'।'),
        step('चरण 3 - घटाओ','<br>जोड़ो '+K(hi+' - '+num+' = '+ans)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:'अगला वर्ग '+K('= '+hi)+'; जोड़ो '+K(hi+' - '+num+' = '+ans)+'।', hint:'संख्या के बाद अगला पूर्ण वर्ग खोजो, फिर घटाओ।' }
    );
  };

  window.buildSqMakeAddV3Solution=function(num1,num2,sq,add1,add2,ans){
    var a=Math.round(Math.sqrt(sq));
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Both '+K(num1)+' and '+K(num2)+' are raised to the same perfect square '+K(sq)+'. We need the total amount added.'),
        step('Step 2 - First amount','<br>'+K(sq+' - '+num1+' = '+add1)+'.'),
        step('Step 3 - Second amount','<br>'+K(sq+' - '+num2+' = '+add2)+'.'),
        step('Step 4 - Add the two','<br>'+K(add1+' + '+add2+' = '+ans)+'.'),
        step('Step 5 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K('('+sq+' - '+num1+') + ('+sq+' - '+num2+') = '+ans)+'.', hint:'Find each amount separately (target - number), then add them.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(num1)+' aur '+K(num2)+' dono ko same perfect square '+K(sq)+' tak laaya gaya. Kul jodi gayi sankhya nikaalni hai.'),
        step('Step 2 - Pehli sankhya','<br>'+K(sq+' - '+num1+' = '+add1)+'.'),
        step('Step 3 - Doosri sankhya','<br>'+K(sq+' - '+num2+' = '+add2)+'.'),
        step('Step 4 - Dono jodo','<br>'+K(add1+' + '+add2+' = '+ans)+'.'),
        step('Step 5 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K('('+sq+' - '+num1+') + ('+sq+' - '+num2+') = '+ans)+'.', hint:'Har sankhya alag se nikaalo (target - number), phir jodo.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(num1)+' और '+K(num2)+' दोनों को एक ही पूर्ण वर्ग '+K(sq)+' तक लाया गया। कुल जोड़ी गई संख्या निकालनी है।'),
        step('चरण 2 - पहली संख्या','<br>'+K(sq+' - '+num1+' = '+add1)+'।'),
        step('चरण 3 - दूसरी संख्या','<br>'+K(sq+' - '+num2+' = '+add2)+'।'),
        step('चरण 4 - दोनों जोड़ो','<br>'+K(add1+' + '+add2+' = '+ans)+'।'),
        step('चरण 5 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:K('('+sq+' - '+num1+') + ('+sq+' - '+num2+') = '+ans)+'।', hint:'हर संख्या अलग से निकालो (लक्ष्य - संख्या), फिर जोड़ो।' }
    );
  };

  window.buildSqMakeAddV4Solution=function(num,add,ans){
    var a=Math.round(Math.sqrt(ans));
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Adding '+K(add)+' to '+K(num)+' - which perfect square do we get?'),
        step('Step 2 - Add','<br>'+K(num+' + '+add+' = '+ans)+'.'),
        step('Step 3 - Confirm it is a perfect square','<br>'+K(ans+' = '+POW(a,'2'))+', so '+K(RT(ans)+' = '+a)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(num+' + '+add+' = '+ans+' = '+POW(a,'2'))+'.', hint:'Just add, then confirm the total is a perfect square.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(num)+' me '+K(add)+' jodne par kaunsa perfect square milta hai?'),
        step('Step 2 - Jodo','<br>'+K(num+' + '+add+' = '+ans)+'.'),
        step('Step 3 - Perfect square confirm karo','<br>'+K(ans+' = '+POW(a,'2'))+', toh '+K(RT(ans)+' = '+a)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(num+' + '+add+' = '+ans+' = '+POW(a,'2'))+'.', hint:'Bas jodo, phir confirm karo ki total perfect square hai.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(num)+' में '+K(add)+' जोड़ने पर कौन सा पूर्ण वर्ग मिलता है?'),
        step('चरण 2 - जोड़ो','<br>'+K(num+' + '+add+' = '+ans)+'।'),
        step('चरण 3 - पूर्ण वर्ग पुष्टि करो','<br>'+K(ans+' = '+POW(a,'2'))+', तो '+K(RT(ans)+' = '+a)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:K(num+' + '+add+' = '+ans+' = '+POW(a,'2'))+'।', hint:'बस जोड़ो, फिर पुष्टि करो कि योग पूर्ण वर्ग है।' }
    );
  };

  window.buildSqMakeAddV5Solution=function(add1,add2,a,b,ans){
    var sa=a*a, sb=b*b, first=sa-add1;
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Example: adding '+K(first)+' to '+K(add1)+' gives the perfect square '+K(sa)+'. Now we must take '+K(add2)+' to the NEXT perfect square.'),
        step('Step 2 - Find the next square for '+K(add2),'<br>'+K(add2)+' lies just below '+K(POW(b,'2')+' = '+sb)+', so the next perfect square is '+K(sb)+'.'),
        step('Step 3 - Subtract','<br>Add '+K(sb+' - '+add2+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:'Next square '+K('= '+sb)+'; add '+K(sb+' - '+add2+' = '+ans)+'.', hint:'Find the next perfect square above the number, then subtract.' },
      { steps:[
        step('Step 1 - Samjho','<br>Example: '+K(add1)+' me '+K(first)+' jodne par perfect square '+K(sa)+' milta hai. Ab '+K(add2)+' ko AGLE perfect square tak le jaana hai.'),
        step('Step 2 - '+K(add2)+' ka agla square dhoondo','<br>'+K(add2)+' bas '+K(POW(b,'2')+' = '+sb)+' ke niche hai, toh agla perfect square hai '+K(sb)+'.'),
        step('Step 3 - Ghatao','<br>Jodo '+K(sb+' - '+add2+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:'Agla square '+K('= '+sb)+'; jodo '+K(sb+' - '+add2+' = '+ans)+'.', hint:'Number ke upar agla perfect square dhoondo, phir ghatao.' },
      { steps:[
        step('चरण 1 - समझो','<br>उदाहरण: '+K(add1)+' में '+K(first)+' जोड़ने पर पूर्ण वर्ग '+K(sa)+' मिलता है। अब '+K(add2)+' को अगले पूर्ण वर्ग तक ले जाना है।'),
        step('चरण 2 - '+K(add2)+' का अगला वर्ग खोजो','<br>'+K(add2)+' बस '+K(POW(b,'2')+' = '+sb)+' के नीचे है, तो अगला पूर्ण वर्ग है '+K(sb)+'।'),
        step('चरण 3 - घटाओ','<br>जोड़ो '+K(sb+' - '+add2+' = '+ans)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:'अगला वर्ग '+K('= '+sb)+'; जोड़ो '+K(sb+' - '+add2+' = '+ans)+'।', hint:'संख्या के ऊपर अगला पूर्ण वर्ग खोजो, फिर घटाओ।' }
    );
  };
})();
