/* tier10 - Template 40: cb_identify (Identify Perfect Cube)
   buildCbIdentifySolution(perfect,root)   buildCbIsPerfectSolution(num,isPerfect)
   buildCbBetweenSolution(cube,root,other) buildCbNextSolution(n,cube,next) */
(function(){
  var SB=window.SB; if(!SB) return;
  var K=SB.K,CRT=SB.CRT,POW=SB.POW,T=SB.T,step=SB.step,S=SB.S;

  window.buildCbIdentifySolution=function(perfect,root){
    return S(
      { steps:[
        step('Step 1 - What to look for','<br>A perfect cube is a number you get by multiplying a whole number by itself three times.'),
        step('Step 2 - Test the options','<br>'+K(POW(root,'3')+' = '+root+T+root+T+root+' = '+perfect)+', so '+K(perfect)+' has a whole-number cube root.'),
        step('Step 3 - Answer','<br>The other options have no whole-number cube root, so '+K(perfect)+' is the perfect cube.')
      ], shortcut:K(POW(root,'3')+' = '+perfect)+', so '+perfect+' is the perfect cube.', hint:'A perfect cube has a whole-number cube root — test each option.' },
      { steps:[
        step('Step 1 - Kya dhoondhna hai','<br>Perfect cube wo number hai jo kisi whole number ko khud se teen baar multiply karke milta hai.'),
        step('Step 2 - Options test karo','<br>'+K(POW(root,'3')+' = '+root+T+root+T+root+' = '+perfect)+', toh '+K(perfect)+' ka whole-number cube root hai.'),
        step('Step 3 - Answer','<br>Baaki options ka whole-number cube root nahi hai, toh '+K(perfect)+' perfect cube hai.')
      ], shortcut:K(POW(root,'3')+' = '+perfect)+', toh '+perfect+' perfect cube hai.', hint:'Perfect cube ka whole-number cube root hota hai — har option test karo.' },
      { steps:[
        step('चरण 1 - क्या देखना है','<br>पूर्ण घन वह संख्या है जो किसी पूर्ण संख्या को स्वयं से तीन बार गुणा करके मिलती है।'),
        step('चरण 2 - विकल्प जाँचो','<br>'+K(POW(root,'3')+' = '+root+T+root+T+root+' = '+perfect)+', तो '+K(perfect)+' का पूर्ण-संख्या घनमूल है।'),
        step('चरण 3 - उत्तर','<br>बाकी विकल्पों का पूर्ण-संख्या घनमूल नहीं है, तो '+K(perfect)+' पूर्ण घन है।')
      ], shortcut:K(POW(root,'3')+' = '+perfect)+', तो '+perfect+' पूर्ण घन है।', hint:'पूर्ण घन का पूर्ण-संख्या घनमूल होता है — हर विकल्प जाँचो।' }
    );
  };

  window.buildCbIsPerfectSolution=function(num,isPerfect){
    var r=Math.round(Math.cbrt(num)); if(r*r*r>num) r--; 
    if(isPerfect){
      var cr=Math.round(Math.cbrt(num));
      return S(
        { steps:[
          step('Step 1 - Look for a whole-number root','<br>Try to find a whole number whose cube is '+K(num)+'.'),
          step('Step 2 - Check','<br>'+K(POW(cr,'3')+' = '+num)+', so '+K(CRT(num)+' = '+cr)+' is a whole number.'),
          step('Step 3 - Answer','<br>Since the cube root is a whole number, '+K(num)+' is a perfect cube — Yes.')
        ], shortcut:K(CRT(num)+' = '+cr)+', a whole number, so Yes.', hint:'If the cube root is a whole number, it is a perfect cube.' },
        { steps:[
          step('Step 1 - Whole-number root dhoondho','<br>Aisa whole number dhoondho jiska cube '+K(num)+' ho.'),
          step('Step 2 - Check karo','<br>'+K(POW(cr,'3')+' = '+num)+', toh '+K(CRT(num)+' = '+cr)+' ek whole number hai.'),
          step('Step 3 - Answer','<br>Cube root whole number hai, toh '+K(num)+' perfect cube hai — Yes.')
        ], shortcut:K(CRT(num)+' = '+cr)+', whole number, toh Yes.', hint:'Agar cube root whole number hai, to wo perfect cube hai.' },
        { steps:[
          step('चरण 1 - पूर्ण-संख्या मूल खोजो','<br>ऐसी पूर्ण संख्या खोजो जिसका घन '+K(num)+' हो।'),
          step('चरण 2 - जाँचो','<br>'+K(POW(cr,'3')+' = '+num)+', तो '+K(CRT(num)+' = '+cr)+' एक पूर्ण संख्या है।'),
          step('चरण 3 - उत्तर','<br>घनमूल पूर्ण संख्या है, तो '+K(num)+' पूर्ण घन है — हाँ।')
        ], shortcut:K(CRT(num)+' = '+cr)+', पूर्ण संख्या, तो हाँ।', hint:'यदि घनमूल पूर्ण संख्या है तो वह पूर्ण घन है।' }
      );
    }
    return S(
      { steps:[
        step('Step 1 - Find the nearest cubes','<br>Look at the whole-number cubes just below and above '+K(num)+'.'),
        step('Step 2 - Bracket the number','<br>'+K(POW(r,'3')+' = '+(r*r*r))+' and '+K(POW(r+1,'3')+' = '+((r+1)*(r+1)*(r+1)))+', and '+K(num)+' lies strictly between them.'),
        step('Step 3 - Answer','<br>No whole number cubes to '+K(num)+', so it is not a perfect cube.')
      ], shortcut:K(num)+' is between '+K(r*r*r)+' and '+K((r+1)*(r+1)*(r+1))+' — not a perfect cube.', hint:'If the cube root is not a whole number, it is not a perfect cube.' },
      { steps:[
        step('Step 1 - Nearest cubes dhoondho','<br>'+K(num)+' ke just niche aur upar wale whole-number cubes dekho.'),
        step('Step 2 - Number ko bracket karo','<br>'+K(POW(r,'3')+' = '+(r*r*r))+' aur '+K(POW(r+1,'3')+' = '+((r+1)*(r+1)*(r+1)))+', aur '+K(num)+' inke beech mein aata hai.'),
        step('Step 3 - Answer','<br>Koi whole number '+K(num)+' nahi banata, toh yeh perfect cube nahi hai.')
      ], shortcut:K(num)+' '+K(r*r*r)+' aur '+K((r+1)*(r+1)*(r+1))+' ke beech hai — perfect cube nahi.', hint:'Agar cube root whole number nahi hai, to wo perfect cube nahi hai.' },
      { steps:[
        step('चरण 1 - निकटतम घन खोजो','<br>'+K(num)+' के ठीक नीचे और ऊपर वाले पूर्ण-संख्या घन देखो।'),
        step('चरण 2 - संख्या को घेरो','<br>'+K(POW(r,'3')+' = '+(r*r*r))+' और '+K(POW(r+1,'3')+' = '+((r+1)*(r+1)*(r+1)))+', और '+K(num)+' इनके बीच में आता है।'),
        step('चरण 3 - उत्तर','<br>कोई पूर्ण संख्या '+K(num)+' नहीं बनाती, तो यह पूर्ण घन नहीं है।')
      ], shortcut:K(num)+' '+K(r*r*r)+' और '+K((r+1)*(r+1)*(r+1))+' के बीच है — पूर्ण घन नहीं।', hint:'यदि घनमूल पूर्ण संख्या नहीं है तो वह पूर्ण घन नहीं है।' }
    );
  };

  window.buildCbBetweenSolution=function(cube,root,other){
    return S(
      { steps:[
        step('Step 1 - Test each number','<br>'+K(POW(root,'3')+' = '+cube)+', so '+K(cube)+' is a perfect cube.'),
        step('Step 2 - Check the other','<br>'+K(other)+' is just one more than a perfect cube, so it has no whole-number cube root.'),
        step('Step 3 - Answer','<br>So '+K(cube)+' is the perfect cube.')
      ], shortcut:K(POW(root,'3')+' = '+cube)+' — the perfect cube is '+cube+'.', hint:'Numbers right next to a perfect cube are not themselves perfect cubes.' },
      { steps:[
        step('Step 1 - Har number test karo','<br>'+K(POW(root,'3')+' = '+cube)+', toh '+K(cube)+' perfect cube hai.'),
        step('Step 2 - Doosra check karo','<br>'+K(other)+' perfect cube se sirf ek zyada hai, toh iska whole-number cube root nahi hai.'),
        step('Step 3 - Answer','<br>Toh '+K(cube)+' perfect cube hai.')
      ], shortcut:K(POW(root,'3')+' = '+cube)+' — perfect cube '+cube+' hai.', hint:'Perfect cube ke bilkul paas wale numbers khud perfect cube nahi hote.' },
      { steps:[
        step('चरण 1 - हर संख्या जाँचो','<br>'+K(POW(root,'3')+' = '+cube)+', तो '+K(cube)+' पूर्ण घन है।'),
        step('चरण 2 - दूसरी जाँचो','<br>'+K(other)+' पूर्ण घन से सिर्फ़ एक ज्यादा है, तो इसका पूर्ण-संख्या घनमूल नहीं है।'),
        step('चरण 3 - उत्तर','<br>तो '+K(cube)+' पूर्ण घन है।')
      ], shortcut:K(POW(root,'3')+' = '+cube)+' — पूर्ण घन '+cube+' है।', hint:'पूर्ण घन के एकदम पास वाली संख्याएँ खुद पूर्ण घन नहीं होतीं।' }
    );
  };

  window.buildCbNextSolution=function(n,cube,next){
    return S(
      { steps:[
        step('Step 1 - Find the current root','<br>'+K(cube+' = '+POW(n,'3'))+', so '+K(cube)+' is the cube of '+K(n)+'.'),
        step('Step 2 - Use the next whole number','<br>The next perfect cube comes from '+K(n+1)+': '+K(POW(n+1,'3')+' = '+next)+'.'),
        step('Step 3 - Answer','<br>So the next perfect cube after '+K(cube)+' is '+K(next)+'.')
      ], shortcut:K(POW(n+1,'3')+' = '+next)+'.', hint:'Cube the next whole number to get the next perfect cube.' },
      { steps:[
        step('Step 1 - Current root nikalo','<br>'+K(cube+' = '+POW(n,'3'))+', toh '+K(cube)+' '+K(n)+' ka cube hai.'),
        step('Step 2 - Agla whole number use karo','<br>Agla perfect cube '+K(n+1)+' se aata hai: '+K(POW(n+1,'3')+' = '+next)+'.'),
        step('Step 3 - Answer','<br>Toh '+K(cube)+' ke baad agla perfect cube '+K(next)+' hai.')
      ], shortcut:K(POW(n+1,'3')+' = '+next)+'.', hint:'Agle whole number ka cube lo to agla perfect cube mil jaata hai.' },
      { steps:[
        step('चरण 1 - वर्तमान मूल निकालो','<br>'+K(cube+' = '+POW(n,'3'))+', तो '+K(cube)+' '+K(n)+' का घन है।'),
        step('चरण 2 - अगली पूर्ण संख्या लो','<br>अगला पूर्ण घन '+K(n+1)+' से आता है: '+K(POW(n+1,'3')+' = '+next)+'।'),
        step('चरण 3 - उत्तर','<br>तो '+K(cube)+' के बाद अगला पूर्ण घन '+K(next)+' है।')
      ], shortcut:K(POW(n+1,'3')+' = '+next)+'।', hint:'अगली पूर्ण संख्या का घन लो तो अगला पूर्ण घन मिल जाता है।' }
    );
  };
})();
