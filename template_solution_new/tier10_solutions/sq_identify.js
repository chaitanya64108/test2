/* tier10 - Template 39: sq_identify (Identify Perfect Square)
   buildSqIdentifySolution(perfect,root)   buildSqIsPerfectSolution(num,isPerfect)
   buildSqBetweenSolution(sq,root,other)   buildSqNextSolution(n,sq,next) */
(function(){
  var SB=window.SB; if(!SB) return;
  var K=SB.K,RT=SB.RT,POW=SB.POW,T=SB.T,step=SB.step,S=SB.S;

  window.buildSqIdentifySolution=function(perfect,root){
    return S(
      { steps:[
        step('Step 1 - What to look for','<br>A perfect square is a number you get by multiplying a whole number by itself.'),
        step('Step 2 - Test the options','<br>'+K(POW(root,'2')+' = '+root+T+root+' = '+perfect)+', so '+K(perfect)+' has a whole-number square root.'),
        step('Step 3 - Answer','<br>The other options have no whole-number square root, so '+K(perfect)+' is the perfect square.')
      ], shortcut:K(POW(root,'2')+' = '+perfect)+', so '+perfect+' is the perfect square.', hint:'A perfect square has a whole-number square root — test each option.' },
      { steps:[
        step('Step 1 - Kya dhoondhna hai','<br>Perfect square wo number hai jo kisi whole number ko khud se multiply karke milta hai.'),
        step('Step 2 - Options test karo','<br>'+K(POW(root,'2')+' = '+root+T+root+' = '+perfect)+', toh '+K(perfect)+' ka whole-number square root hai.'),
        step('Step 3 - Answer','<br>Baaki options ka whole-number square root nahi hai, toh '+K(perfect)+' perfect square hai.')
      ], shortcut:K(POW(root,'2')+' = '+perfect)+', toh '+perfect+' perfect square hai.', hint:'Perfect square ka whole-number square root hota hai — har option test karo.' },
      { steps:[
        step('चरण 1 - क्या देखना है','<br>पूर्ण वर्ग वह संख्या है जो किसी पूर्ण संख्या को स्वयं से गुणा करके मिलती है।'),
        step('चरण 2 - विकल्प जाँचो','<br>'+K(POW(root,'2')+' = '+root+T+root+' = '+perfect)+', तो '+K(perfect)+' का पूर्ण-संख्या वर्गमूल है।'),
        step('चरण 3 - उत्तर','<br>बाकी विकल्पों का पूर्ण-संख्या वर्गमूल नहीं है, तो '+K(perfect)+' पूर्ण वर्ग है।')
      ], shortcut:K(POW(root,'2')+' = '+perfect)+', तो '+perfect+' पूर्ण वर्ग है।', hint:'पूर्ण वर्ग का पूर्ण-संख्या वर्गमूल होता है — हर विकल्प जाँचो।' }
    );
  };

  window.buildSqIsPerfectSolution=function(num,isPerfect){
    var r=Math.floor(Math.sqrt(num));
    if(isPerfect){
      return S(
        { steps:[
          step('Step 1 - Look for a whole-number root','<br>Try to find a whole number whose square is '+K(num)+'.'),
          step('Step 2 - Check','<br>'+K(POW(r,'2')+' = '+num)+', so '+K(RT(num)+' = '+r)+' is a whole number.'),
          step('Step 3 - Answer','<br>Since the square root is a whole number, '+K(num)+' is a perfect square — Yes.')
        ], shortcut:K(RT(num)+' = '+r)+', a whole number, so Yes.', hint:'If the square root is a whole number, it is a perfect square.' },
        { steps:[
          step('Step 1 - Whole-number root dhoondho','<br>Aisa whole number dhoondho jiska square '+K(num)+' ho.'),
          step('Step 2 - Check karo','<br>'+K(POW(r,'2')+' = '+num)+', toh '+K(RT(num)+' = '+r)+' ek whole number hai.'),
          step('Step 3 - Answer','<br>Square root whole number hai, toh '+K(num)+' perfect square hai — Yes.')
        ], shortcut:K(RT(num)+' = '+r)+', whole number, toh Yes.', hint:'Agar square root whole number hai, to wo perfect square hai.' },
        { steps:[
          step('चरण 1 - पूर्ण-संख्या मूल खोजो','<br>ऐसी पूर्ण संख्या खोजो जिसका वर्ग '+K(num)+' हो।'),
          step('चरण 2 - जाँचो','<br>'+K(POW(r,'2')+' = '+num)+', तो '+K(RT(num)+' = '+r)+' एक पूर्ण संख्या है।'),
          step('चरण 3 - उत्तर','<br>वर्गमूल पूर्ण संख्या है, तो '+K(num)+' पूर्ण वर्ग है — हाँ।')
        ], shortcut:K(RT(num)+' = '+r)+', पूर्ण संख्या, तो हाँ।', hint:'यदि वर्गमूल पूर्ण संख्या है तो वह पूर्ण वर्ग है।' }
      );
    }
    return S(
      { steps:[
        step('Step 1 - Find the nearest squares','<br>Look at the whole-number squares just below and above '+K(num)+'.'),
        step('Step 2 - Bracket the number','<br>'+K(POW(r,'2')+' = '+(r*r))+' and '+K(POW(r+1,'2')+' = '+((r+1)*(r+1)))+', and '+K(num)+' lies strictly between them.'),
        step('Step 3 - Answer','<br>No whole number squares to '+K(num)+', so it is not a perfect square.')
      ], shortcut:K((r*r)+' '+SB.PM)+' ... '+K(num)+' is between '+K(r*r)+' and '+K((r+1)*(r+1))+' — not a perfect square.', hint:'If the square root is not a whole number, it is not a perfect square.' },
      { steps:[
        step('Step 1 - Nearest squares dhoondho','<br>'+K(num)+' ke just niche aur upar wale whole-number squares dekho.'),
        step('Step 2 - Number ko bracket karo','<br>'+K(POW(r,'2')+' = '+(r*r))+' aur '+K(POW(r+1,'2')+' = '+((r+1)*(r+1)))+', aur '+K(num)+' inke beech mein aata hai.'),
        step('Step 3 - Answer','<br>Koi whole number '+K(num)+' nahi banata, toh yeh perfect square nahi hai.')
      ], shortcut:K(num)+' '+K(r*r)+' aur '+K((r+1)*(r+1))+' ke beech hai — perfect square nahi.', hint:'Agar square root whole number nahi hai, to wo perfect square nahi hai.' },
      { steps:[
        step('चरण 1 - निकटतम वर्ग खोजो','<br>'+K(num)+' के ठीक नीचे और ऊपर वाले पूर्ण-संख्या वर्ग देखो।'),
        step('चरण 2 - संख्या को घेरो','<br>'+K(POW(r,'2')+' = '+(r*r))+' और '+K(POW(r+1,'2')+' = '+((r+1)*(r+1)))+', और '+K(num)+' इनके बीच में आता है।'),
        step('चरण 3 - उत्तर','<br>कोई पूर्ण संख्या '+K(num)+' नहीं बनाती, तो यह पूर्ण वर्ग नहीं है।')
      ], shortcut:K(num)+' '+K(r*r)+' और '+K((r+1)*(r+1))+' के बीच है — पूर्ण वर्ग नहीं।', hint:'यदि वर्गमूल पूर्ण संख्या नहीं है तो वह पूर्ण वर्ग नहीं है।' }
    );
  };

  window.buildSqBetweenSolution=function(sq,root,other){
    return S(
      { steps:[
        step('Step 1 - Test each number','<br>'+K(POW(root,'2')+' = '+sq)+', so '+K(sq)+' is a perfect square.'),
        step('Step 2 - Check the other','<br>'+K(other)+' is just one more than a perfect square, so it has no whole-number square root.'),
        step('Step 3 - Answer','<br>So '+K(sq)+' is the perfect square.')
      ], shortcut:K(POW(root,'2')+' = '+sq)+' — the perfect square is '+sq+'.', hint:'Numbers right next to a perfect square are not themselves perfect squares.' },
      { steps:[
        step('Step 1 - Har number test karo','<br>'+K(POW(root,'2')+' = '+sq)+', toh '+K(sq)+' perfect square hai.'),
        step('Step 2 - Doosra check karo','<br>'+K(other)+' perfect square se sirf ek zyada hai, toh iska whole-number square root nahi hai.'),
        step('Step 3 - Answer','<br>Toh '+K(sq)+' perfect square hai.')
      ], shortcut:K(POW(root,'2')+' = '+sq)+' — perfect square '+sq+' hai.', hint:'Perfect square ke bilkul paas wale numbers khud perfect square nahi hote.' },
      { steps:[
        step('चरण 1 - हर संख्या जाँचो','<br>'+K(POW(root,'2')+' = '+sq)+', तो '+K(sq)+' पूर्ण वर्ग है।'),
        step('चरण 2 - दूसरी जाँचो','<br>'+K(other)+' पूर्ण वर्ग से सिर्फ़ एक ज्यादा है, तो इसका पूर्ण-संख्या वर्गमूल नहीं है।'),
        step('चरण 3 - उत्तर','<br>तो '+K(sq)+' पूर्ण वर्ग है।')
      ], shortcut:K(POW(root,'2')+' = '+sq)+' — पूर्ण वर्ग '+sq+' है।', hint:'पूर्ण वर्ग के एकदम पास वाली संख्याएँ खुद पूर्ण वर्ग नहीं होतीं।' }
    );
  };

  window.buildSqNextSolution=function(n,sq,next){
    return S(
      { steps:[
        step('Step 1 - Find the current root','<br>'+K(sq+' = '+POW(n,'2'))+', so '+K(sq)+' is the square of '+K(n)+'.'),
        step('Step 2 - Use the next whole number','<br>The next perfect square comes from '+K(n+1)+': '+K(POW(n+1,'2')+' = '+next)+'.'),
        step('Step 3 - Answer','<br>So the next perfect square after '+K(sq)+' is '+K(next)+'.')
      ], shortcut:K(POW(n+1,'2')+' = '+next)+'.', hint:'Square the next whole number to get the next perfect square.' },
      { steps:[
        step('Step 1 - Current root nikalo','<br>'+K(sq+' = '+POW(n,'2'))+', toh '+K(sq)+' '+K(n)+' ka square hai.'),
        step('Step 2 - Agla whole number use karo','<br>Agla perfect square '+K(n+1)+' se aata hai: '+K(POW(n+1,'2')+' = '+next)+'.'),
        step('Step 3 - Answer','<br>Toh '+K(sq)+' ke baad agla perfect square '+K(next)+' hai.')
      ], shortcut:K(POW(n+1,'2')+' = '+next)+'.', hint:'Agle whole number ka square lo to agla perfect square mil jaata hai.' },
      { steps:[
        step('चरण 1 - वर्तमान मूल निकालो','<br>'+K(sq+' = '+POW(n,'2'))+', तो '+K(sq)+' '+K(n)+' का वर्ग है।'),
        step('चरण 2 - अगली पूर्ण संख्या लो','<br>अगला पूर्ण वर्ग '+K(n+1)+' से आता है: '+K(POW(n+1,'2')+' = '+next)+'।'),
        step('चरण 3 - उत्तर','<br>तो '+K(sq)+' के बाद अगला पूर्ण वर्ग '+K(next)+' है।')
      ], shortcut:K(POW(n+1,'2')+' = '+next)+'।', hint:'अगली पूर्ण संख्या का वर्ग लो तो अगला पूर्ण वर्ग मिल जाता है।' }
    );
  };
})();
