/* tier10 solutions - Template 1: sq_direct (Perfect Square - Direct)
   Builder functions called by Question_templates/templates_tier10/1.js:
   buildSqDirectV0Solution(sq,r), V1(r,ans), V2(a,b,ans), V3(r,ans), V4(a,b,ans), V5(r,sq)
   Beginner-friendly, trilingual (en / hing / hi), all math in $...$. */
(function(){
  var SB=window.SB; if(!SB) return;
  var K=SB.K,RT=SB.RT,POW=SB.POW,T=SB.T,step=SB.step,S=SB.S;

  /* V0: find sqrt(sq), where sq = r*r */
  window.buildSqDirectV0Solution=function(sq,r){
    return S(
      { steps:[
        step('Step 1 - Understand the question','<br>We have to find '+K(RT(sq))+'. A square root means: <b>the number which, multiplied by itself, gives '+K(sq)+'</b>.'),
        step('Step 2 - Recall the rule','<br>Find a number $n$ such that '+K(POW('n','2')+' = ('+'n'+T+'n) = '+sq)+'.'),
        step('Step 3 - Find that number','<br>Because '+K('('+r+T+r+') = '+sq)+', the number is '+K(r)+'.'),
        step('Step 4 - Final answer','<br>'+K(RT(sq)+' = '+r)+'.')
      ], shortcut:'Remember '+K('('+r+T+r+') = '+sq)+', so '+K(RT(sq)+' = '+r)+' at once.', hint:'Think: which number multiplied by itself gives '+K(sq)+'?' },
      { steps:[
        step('Step 1 - Samjho kya poochha hai','<br>Humein '+K(RT(sq))+' nikaalna hai. Square root ka matlab: <b>woh number jo khud se multiply hoke '+K(sq)+' banta hai</b>.'),
        step('Step 2 - Rule yaad karo','<br>Aisa number $n$ dhoondo jisme '+K(POW('n','2')+' = ('+'n'+T+'n) = '+sq)+'.'),
        step('Step 3 - Woh number dhoondo','<br>Kyunki '+K('('+r+T+r+') = '+sq)+', woh number '+K(r)+' hai.'),
        step('Step 4 - Final answer','<br>'+K(RT(sq)+' = '+r)+'.')
      ], shortcut:K('('+r+T+r+') = '+sq)+' yaad rakho, toh '+K(RT(sq)+' = '+r)+' turant.', hint:'Socho: kaunsa number khud se guna karke '+K(sq)+' deta hai?' },
      { steps:[
        step('चरण 1 - प्रश्न समझो','<br>हमें '+K(RT(sq))+' निकालना है। वर्गमूल का अर्थ: <b>वह संख्या जो स्वयं से गुणा होकर '+K(sq)+' बनती है</b>।'),
        step('चरण 2 - नियम याद करो','<br>ऐसी संख्या $n$ खोजो जिसमें '+K(POW('n','2')+' = ('+'n'+T+'n) = '+sq)+'।'),
        step('चरण 3 - वह संख्या खोजो','<br>क्योंकि '+K('('+r+T+r+') = '+sq)+', वह संख्या '+K(r)+' है।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(RT(sq)+' = '+r)+'।')
      ], shortcut:K('('+r+T+r+') = '+sq)+' याद रखो, तो '+K(RT(sq)+' = '+r)+' तुरंत।', hint:'सोचो: कौन-सी संख्या स्वयं से गुणा करके '+K(sq)+' देती है?' }
    );
  };

  /* V1: given sqrt(x) = r, find x. ans = r*r */
  window.buildSqDirectV1Solution=function(r,ans){
    return S(
      { steps:[
        step('Step 1 - Understand the question','<br>We are given '+K(RT('x')+' = '+r)+'. We must find '+K('x')+'.'),
        step('Step 2 - Use the opposite of square root','<br>If '+K(RT('x')+' = '+r)+', then squaring both sides gives '+K('x = '+POW(r,'2'))+'.'),
        step('Step 3 - Calculate','<br>'+K('x = ('+r+T+r+') = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K('x = '+ans)+'.')
      ], shortcut:'Square the given root: '+K('x = '+POW(r,'2')+' = '+ans)+'.', hint:'If '+K(RT('x')+' = '+r)+', then '+K('x = '+POW(r,'2'))+'.' },
      { steps:[
        step('Step 1 - Samjho kya poochha hai','<br>Diya hai '+K(RT('x')+' = '+r)+'. Humein '+K('x')+' nikaalna hai.'),
        step('Step 2 - Square root ka ulta use karo','<br>Agar '+K(RT('x')+' = '+r)+', toh dono taraf square karne par '+K('x = '+POW(r,'2'))+'.'),
        step('Step 3 - Calculate karo','<br>'+K('x = ('+r+T+r+') = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K('x = '+ans)+'.')
      ], shortcut:'Diye gaye root ko square karo: '+K('x = '+POW(r,'2')+' = '+ans)+'.', hint:'Agar '+K(RT('x')+' = '+r)+', toh '+K('x = '+POW(r,'2'))+'.' },
      { steps:[
        step('चरण 1 - प्रश्न समझो','<br>दिया है '+K(RT('x')+' = '+r)+'। हमें '+K('x')+' निकालना है।'),
        step('चरण 2 - वर्गमूल का उल्टा लगाओ','<br>अगर '+K(RT('x')+' = '+r)+', तो दोनों ओर वर्ग करने पर '+K('x = '+POW(r,'2'))+'।'),
        step('चरण 3 - गणना करो','<br>'+K('x = ('+r+T+r+') = '+ans)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K('x = '+ans)+'।')
      ], shortcut:'दिए गए मूल को वर्ग करो: '+K('x = '+POW(r,'2')+' = '+ans)+'।', hint:'अगर '+K(RT('x')+' = '+r)+', तो '+K('x = '+POW(r,'2'))+'।' }
    );
  };

  /* V2: sqrt(a^2) + sqrt(b^2), ans = a+b */
  window.buildSqDirectV2Solution=function(a,b,ans){
    var aa=a*a, bb=b*b;
    return S(
      { steps:[
        step('Step 1 - Understand the question','<br>We must find '+K(RT(aa)+' + '+RT(bb))+'.'),
        step('Step 2 - Solve each root','<br>'+K(RT(aa)+' = '+a)+' and '+K(RT(bb)+' = '+b)+'.<br><i>Tip: the square root of a perfect square is just its base number.</i>'),
        step('Step 3 - Add the results','<br>'+K('('+a+') + ('+b+') = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(RT(aa)+' + '+RT(bb)+' = '+a+' + '+b+' = '+ans)+'.', hint:'Take each square root first, then add: '+K(RT(aa)+' = '+a)+'.' },
      { steps:[
        step('Step 1 - Samjho kya poochha hai','<br>Humein '+K(RT(aa)+' + '+RT(bb))+' nikaalna hai.'),
        step('Step 2 - Har root solve karo','<br>'+K(RT(aa)+' = '+a)+' aur '+K(RT(bb)+' = '+b)+'.<br><i>Tip: perfect square ka square root uska base number hi hota hai.</i>'),
        step('Step 3 - Dono ko jodo','<br>'+K('('+a+') + ('+b+') = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(RT(aa)+' + '+RT(bb)+' = '+a+' + '+b+' = '+ans)+'.', hint:'Pehle har square root nikaalo, phir jodo: '+K(RT(aa)+' = '+a)+'.' },
      { steps:[
        step('चरण 1 - प्रश्न समझो','<br>हमें '+K(RT(aa)+' + '+RT(bb))+' निकालना है।'),
        step('चरण 2 - हर मूल हल करो','<br>'+K(RT(aa)+' = '+a)+' और '+K(RT(bb)+' = '+b)+'।<br><i>सुझाव: पूर्ण वर्ग का वर्गमूल उसका आधार संख्या ही होता है।</i>'),
        step('चरण 3 - दोनों को जोड़ो','<br>'+K('('+a+') + ('+b+') = '+ans)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:K(RT(aa)+' + '+RT(bb)+' = '+a+' + '+b+' = '+ans)+'।', hint:'पहले हर वर्गमूल निकालो, फिर जोड़ो: '+K(RT(aa)+' = '+a)+'।' }
    );
  };

  /* V3: which number has square root r. ans = r*r */
  window.buildSqDirectV3Solution=function(r,ans){
    return S(
      { steps:[
        step('Step 1 - Understand the question','<br>We need the number whose square root is '+K(r)+'.'),
        step('Step 2 - Use the opposite of square root','<br>If '+K(RT('?')+' = '+r)+', then the number is '+K('? = '+POW(r,'2'))+'.'),
        step('Step 3 - Calculate','<br>'+K('? = ('+r+T+r+') = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:'The number is '+K(POW(r,'2')+' = '+ans)+'.', hint:'Squaring is the reverse of square root: number = '+K(POW(r,'2'))+'.' },
      { steps:[
        step('Step 1 - Samjho kya poochha hai','<br>Humein woh number chahiye jiska square root '+K(r)+' hai.'),
        step('Step 2 - Square root ka ulta use karo','<br>Agar '+K(RT('?')+' = '+r)+', toh number '+K('? = '+POW(r,'2'))+' hai.'),
        step('Step 3 - Calculate karo','<br>'+K('? = ('+r+T+r+') = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:'Number hai '+K(POW(r,'2')+' = '+ans)+'.', hint:'Square karna square root ka ulta hai: number = '+K(POW(r,'2'))+'.' },
      { steps:[
        step('चरण 1 - प्रश्न समझो','<br>हमें वह संख्या चाहिए जिसका वर्गमूल '+K(r)+' है।'),
        step('चरण 2 - वर्गमूल का उल्टा लगाओ','<br>अगर '+K(RT('?')+' = '+r)+', तो संख्या '+K('? = '+POW(r,'2'))+' है।'),
        step('चरण 3 - गणना करो','<br>'+K('? = ('+r+T+r+') = '+ans)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:'संख्या है '+K(POW(r,'2')+' = '+ans)+'।', hint:'वर्ग करना वर्गमूल का उल्टा है: संख्या = '+K(POW(r,'2'))+'।' }
    );
  };

  /* V4: sqrt(a^2) - sqrt(b^2), ans = a-b */
  window.buildSqDirectV4Solution=function(a,b,ans){
    var aa=a*a, bb=b*b;
    return S(
      { steps:[
        step('Step 1 - Understand the question','<br>We must find '+K(RT(aa)+' - '+RT(bb))+'.'),
        step('Step 2 - Solve each root','<br>'+K(RT(aa)+' = '+a)+' and '+K(RT(bb)+' = '+b)+'.'),
        step('Step 3 - Subtract the results','<br>'+K('('+a+') - ('+b+') = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(RT(aa)+' - '+RT(bb)+' = '+a+' - '+b+' = '+ans)+'.', hint:'Take each square root first, then subtract: '+K(RT(aa)+' = '+a)+'.' },
      { steps:[
        step('Step 1 - Samjho kya poochha hai','<br>Humein '+K(RT(aa)+' - '+RT(bb))+' nikaalna hai.'),
        step('Step 2 - Har root solve karo','<br>'+K(RT(aa)+' = '+a)+' aur '+K(RT(bb)+' = '+b)+'.'),
        step('Step 3 - Ghatao','<br>'+K('('+a+') - ('+b+') = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(RT(aa)+' - '+RT(bb)+' = '+a+' - '+b+' = '+ans)+'.', hint:'Pehle har square root nikaalo, phir ghatao: '+K(RT(aa)+' = '+a)+'.' },
      { steps:[
        step('चरण 1 - प्रश्न समझो','<br>हमें '+K(RT(aa)+' - '+RT(bb))+' निकालना है।'),
        step('चरण 2 - हर मूल हल करो','<br>'+K(RT(aa)+' = '+a)+' और '+K(RT(bb)+' = '+b)+'।'),
        step('चरण 3 - घटाओ','<br>'+K('('+a+') - ('+b+') = '+ans)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:K(RT(aa)+' - '+RT(bb)+' = '+a+' - '+b+' = '+ans)+'।', hint:'पहले हर वर्गमूल निकालो, फिर घटाओ: '+K(RT(aa)+' = '+a)+'।' }
    );
  };

  /* V5: n^2 = sq, find positive n = r */
  window.buildSqDirectV5Solution=function(r,sq){
    return S(
      { steps:[
        step('Step 1 - Understand the question','<br>We are given '+K(POW('n','2')+' = '+sq)+'. We must find the positive value of '+K('n')+'.'),
        step('Step 2 - Take the square root','<br>'+K('n = '+RT(sq))+'.'),
        step('Step 3 - Find the number','<br>Because '+K('('+r+T+r+') = '+sq)+', we get '+K('n = '+r)+'.'),
        step('Step 4 - Final answer','<br>'+K('n = '+r)+'.')
      ], shortcut:K('n = '+RT(sq)+' = '+r)+'.', hint:'To undo a square, take the square root: '+K('n = '+RT(sq))+'.' },
      { steps:[
        step('Step 1 - Samjho kya poochha hai','<br>Diya hai '+K(POW('n','2')+' = '+sq)+'. Humein '+K('n')+' ka positive maan nikaalna hai.'),
        step('Step 2 - Square root lo','<br>'+K('n = '+RT(sq))+'.'),
        step('Step 3 - Number dhoondo','<br>Kyunki '+K('('+r+T+r+') = '+sq)+', '+K('n = '+r)+'.'),
        step('Step 4 - Final answer','<br>'+K('n = '+r)+'.')
      ], shortcut:K('n = '+RT(sq)+' = '+r)+'.', hint:'Square hatane ke liye square root lo: '+K('n = '+RT(sq))+'.' },
      { steps:[
        step('चरण 1 - प्रश्न समझो','<br>दिया है '+K(POW('n','2')+' = '+sq)+'। हमें '+K('n')+' का धनात्मक मान निकालना है।'),
        step('चरण 2 - वर्गमूल लो','<br>'+K('n = '+RT(sq))+'।'),
        step('चरण 3 - संख्या खोजो','<br>क्योंकि '+K('('+r+T+r+') = '+sq)+', '+K('n = '+r)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K('n = '+r)+'।')
      ], shortcut:K('n = '+RT(sq)+' = '+r)+'।', hint:'वर्ग हटाने के लिए वर्गमूल लो: '+K('n = '+RT(sq))+'।' }
    );
  };
})();
