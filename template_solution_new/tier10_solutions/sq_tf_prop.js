/* tier10 - Template 38: sq_tf_prop (True/False properties)
   buildTfParity(n,power,statedEven)   buildTfSqrtSquare(n)
   buildTfCbrtNegReal(val)             buildTfSqrtNegReal(val)
   buildTfLastDigit(d)                 buildTfOddFactors()
   buildTfSqrtZero()                   buildTfCubeZero()
   buildTfPrimeSquareOdd(p)            buildTfCbrtNegEquals(root,cube)
   buildTfSqrtPlusMinus(n)             buildTfCbrtPerfect(n,cube)
   buildTfDigitCount(n,len) */
(function(){
  var SB=window.SB; if(!SB) return;
  var K=SB.K,RT=SB.RT,CRT=SB.CRT,POW=SB.POW,T=SB.T,PM=SB.PM,step=SB.step,S=SB.S;

  window.buildTfParity=function(n,power,statedEven){
    var pwE=power===2?'square':'cube', pwH=power===2?'वर्ग':'घन';
    var nEven=n%2===0, match=(statedEven===nEven);
    var aE=match?'True':'False', aH=match?'सत्य':'असत्य';
    return S(
      { steps:[
        step('Step 1 - The rule','<br>A number and its '+pwE+' always share the same parity. Since '+K(n)+' is '+(nEven?'even':'odd')+', its '+pwE+' is also '+(nEven?'even':'odd')+'.'),
        step('Step 2 - Check the claim','<br>The statement calls it '+(statedEven?'even':'odd')+', which is '+(match?'correct':'incorrect')+'. So the statement is '+aE+'.')
      ], shortcut:'Parity of a '+pwE+' = parity of the number, so the answer is '+aE+'.', hint:'Even numbers give even squares/cubes; odd numbers give odd ones.' },
      { steps:[
        step('Step 1 - Niyam','<br>Kisi number aur uske '+pwE+' ki parity hamesha same hoti hai. '+K(n)+' '+(nEven?'even':'odd')+' hai, isliye uska '+pwE+' bhi '+(nEven?'even':'odd')+' hai.'),
        step('Step 2 - Claim check karo','<br>Statement ise '+(statedEven?'even':'odd')+' keh raha hai, jo '+(match?'sahi':'galat')+' hai. Toh statement '+aE+' hai.')
      ], shortcut:pwE+' ki parity = number ki parity, toh answer '+aE+' hai.', hint:'Even number ka square/cube even; odd ka odd hota hai.' },
      { steps:[
        step('चरण 1 - नियम','<br>किसी संख्या और उसके '+pwH+' की सम/विषम प्रकृति सदैव समान होती है। '+K(n)+' '+(nEven?'सम':'विषम')+' है, इसलिए उसका '+pwH+' भी '+(nEven?'सम':'विषम')+' है।'),
        step('चरण 2 - कथन जाँचो','<br>कथन इसे '+(statedEven?'सम':'विषम')+' कहता है, जो '+(match?'सही':'गलत')+' है। तो कथन '+aH+' है।')
      ], shortcut:pwH+' की सम/विषमता = संख्या की सम/विषमता, तो उत्तर '+aH+' है।', hint:'सम संख्या का वर्ग/घन सम; विषम का विषम होता है।' }
    );
  };

  window.buildTfSqrtSquare=function(n){
    return S(
      { steps:[
        step('Step 1 - The rule','<br>Square root and squaring are inverse operations, so '+K(RT(POW('n','2'))+' = n')+' for any positive number.'),
        step('Step 2 - Apply','<br>'+K(RT(POW(n,'2'))+' = '+RT(n*n)+' = '+n)+', so the statement is True.')
      ], shortcut:'Square root undoes squaring: '+K(RT(n*n)+' = '+n)+', so True.', hint:'For a positive number, the square root of its square is the number itself.' },
      { steps:[
        step('Step 1 - Niyam','<br>Square root aur squaring ulte operations hain, isliye '+K(RT(POW('n','2'))+' = n')+' har positive number ke liye.'),
        step('Step 2 - Lagao','<br>'+K(RT(POW(n,'2'))+' = '+RT(n*n)+' = '+n)+', toh statement True hai.')
      ], shortcut:'Square root, squaring ko undo karta hai: '+K(RT(n*n)+' = '+n)+', toh True.', hint:'Positive number ke square ka square root wahi number hota hai.' },
      { steps:[
        step('चरण 1 - नियम','<br>वर्गमूल और वर्ग करना उलटे संक्रियाएँ हैं, इसलिए '+K(RT(POW('n','2'))+' = n')+' हर धनात्मक संख्या के लिए।'),
        step('चरण 2 - लागू करो','<br>'+K(RT(POW(n,'2'))+' = '+RT(n*n)+' = '+n)+', तो कथन सत्य है।')
      ], shortcut:'वर्गमूल, वर्ग को undo करता है: '+K(RT(n*n)+' = '+n)+', तो सत्य।', hint:'धनात्मक संख्या के वर्ग का वर्गमूल वही संख्या होती है।' }
    );
  };

  window.buildTfCbrtNegReal=function(val){
    return S(
      { steps:[
        step('Step 1 - Cube roots of negatives','<br>Every real number has exactly one real cube root, including negatives, because a negative times a negative times a negative is negative.'),
        step('Step 2 - Conclusion','<br>So '+K(CRT('('+val+')'))+' is a real (negative) number. The statement is True.')
      ], shortcut:'Negative numbers do have real cube roots, so True.', hint:'Odd roots (like cube roots) of negative numbers are real.' },
      { steps:[
        step('Step 1 - Negatives ke cube root','<br>Har real number ka exactly ek real cube root hota hai, negatives ka bhi, kyunki negative x negative x negative = negative.'),
        step('Step 2 - Nishkarsh','<br>Toh '+K(CRT('('+val+')'))+' ek real (negative) number hai. Statement True hai.')
      ], shortcut:'Negative numbers ke real cube roots hote hain, toh True.', hint:'Negative numbers ke odd roots (jaise cube root) real hote hain.' },
      { steps:[
        step('चरण 1 - ऋणात्मक के घनमूल','<br>हर वास्तविक संख्या का ठीक एक वास्तविक घनमूल होता है, ऋणात्मक का भी, क्योंकि ऋण × ऋण × ऋण = ऋण।'),
        step('चरण 2 - निष्कर्ष','<br>तो '+K(CRT('('+val+')'))+' एक वास्तविक (ऋणात्मक) संख्या है। कथन सत्य है।')
      ], shortcut:'ऋणात्मक संख्याओं के वास्तविक घनमूल होते हैं, तो सत्य।', hint:'ऋणात्मक संख्याओं के विषम मूल (जैसे घनमूल) वास्तविक होते हैं।' }
    );
  };

  window.buildTfSqrtNegReal=function(val){
    return S(
      { steps:[
        step('Step 1 - Square roots of negatives','<br>The square of any real number is never negative, so no real number squares to a negative value.'),
        step('Step 2 - Conclusion','<br>So '+K(RT('('+val+')'))+' is not a real number. The statement is False.')
      ], shortcut:'Negative numbers have no real square root, so False.', hint:'Even roots (like square roots) of negative numbers are not real.' },
      { steps:[
        step('Step 1 - Negatives ke square root','<br>Kisi bhi real number ka square kabhi negative nahi hota, isliye koi real number negative nahi banata.'),
        step('Step 2 - Nishkarsh','<br>Toh '+K(RT('('+val+')'))+' real number nahi hai. Statement False hai.')
      ], shortcut:'Negative numbers ka real square root nahi hota, toh False.', hint:'Negative numbers ke even roots (jaise square root) real nahi hote.' },
      { steps:[
        step('चरण 1 - ऋणात्मक के वर्गमूल','<br>किसी भी वास्तविक संख्या का वर्ग कभी ऋणात्मक नहीं होता, इसलिए कोई वास्तविक संख्या ऋणात्मक नहीं बनाती।'),
        step('चरण 2 - निष्कर्ष','<br>तो '+K(RT('('+val+')'))+' वास्तविक संख्या नहीं है। कथन असत्य है।')
      ], shortcut:'ऋणात्मक संख्याओं का वास्तविक वर्गमूल नहीं होता, तो असत्य।', hint:'ऋणात्मक संख्याओं के सम मूल (जैसे वर्गमूल) वास्तविक नहीं होते।' }
    );
  };

  window.buildTfLastDigit=function(d){
    return S(
      { steps:[
        step('Step 1 - Possible last digits','<br>A perfect square can only end in the digits 0, 1, 4, 5, 6 or 9.'),
        step('Step 2 - Conclusion','<br>The digit '+K(d)+' is not in that list, so no perfect square can end in '+K(d)+'. The statement is False.')
      ], shortcut:'Squares end only in 0, 1, 4, 5, 6, 9 — not '+d+', so False.', hint:'Memorise the six possible last digits of perfect squares.' },
      { steps:[
        step('Step 1 - Possible last digits','<br>Perfect square sirf 0, 1, 4, 5, 6 ya 9 par khatam ho sakta hai.'),
        step('Step 2 - Nishkarsh','<br>Digit '+K(d)+' is list mein nahi hai, toh koi perfect square '+K(d)+' par khatam nahi ho sakta. Statement False hai.')
      ], shortcut:'Squares sirf 0,1,4,5,6,9 par khatam hote hain — '+d+' par nahi, toh False.', hint:'Perfect squares ke 6 possible last digits yaad rakho.' },
      { steps:[
        step('चरण 1 - संभव अंतिम अंक','<br>पूर्ण वर्ग केवल अंक 0, 1, 4, 5, 6 या 9 पर समाप्त हो सकता है।'),
        step('चरण 2 - निष्कर्ष','<br>अंक '+K(d)+' इस सूची में नहीं है, तो कोई पूर्ण वर्ग '+K(d)+' पर समाप्त नहीं हो सकता। कथन असत्य है।')
      ], shortcut:'वर्ग केवल 0,1,4,5,6,9 पर समाप्त होते हैं — '+d+' पर नहीं, तो असत्य।', hint:'पूर्ण वर्गों के 6 संभव अंतिम अंक याद रखो।' }
    );
  };

  window.buildTfOddFactors=function(){
    return S(
      { steps:[
        step('Step 1 - Why factors pair up','<br>Factors normally come in pairs (a divisor and its partner). For a perfect square, the square root pairs with itself, so it is counted only once.'),
        step('Step 2 - Conclusion','<br>That single unpaired factor makes the total count odd. The statement is True.')
      ], shortcut:'Only perfect squares have an odd number of factors — True.', hint:'The square root is the factor that pairs with itself.' },
      { steps:[
        step('Step 1 - Factors pair kyun hote hain','<br>Factors aam taur par pairs mein aate hain (ek divisor aur uska partner). Perfect square mein square root khud ke saath pair hota hai, isliye ek hi baar count hota hai.'),
        step('Step 2 - Nishkarsh','<br>Wo akela unpaired factor total count ko odd bana deta hai. Statement True hai.')
      ], shortcut:'Sirf perfect squares ke factors ki sankhya odd hoti hai — True.', hint:'Square root wo factor hai jo khud ke saath pair hota hai.' },
      { steps:[
        step('चरण 1 - गुणनखंड जोड़ों में क्यों','<br>गुणनखंड आम तौर पर जोड़ों में आते हैं (एक भाजक और उसका साथी)। पूर्ण वर्ग में वर्गमूल स्वयं के साथ जोड़ा बनाता है, इसलिए एक ही बार गिना जाता है।'),
        step('चरण 2 - निष्कर्ष','<br>वह अकेला बिना-जोड़ा गुणनखंड कुल संख्या को विषम बना देता है। कथन सत्य है।')
      ], shortcut:'केवल पूर्ण वर्गों के गुणनखंडों की संख्या विषम होती है — सत्य।', hint:'वर्गमूल वही गुणनखंड है जो स्वयं के साथ जोड़ा बनाता है।' }
    );
  };

  window.buildTfSqrtZero=function(){
    return S(
      { steps:[
        step('Step 1 - Meaning','<br>The square root asks which number times itself gives 0. Only 0 works: '+K('0'+T+'0 = 0')+'.'),
        step('Step 2 - Conclusion','<br>So '+K(RT(0)+' = 0')+'. The statement is True.')
      ], shortcut:K(RT(0)+' = 0')+' — True.', hint:'Zero is its own square root.' },
      { steps:[
        step('Step 1 - Matlab','<br>Square root poochta hai kaunsa number khud se multiply hokar 0 deta hai. Sirf 0: '+K('0'+T+'0 = 0')+'.'),
        step('Step 2 - Nishkarsh','<br>Toh '+K(RT(0)+' = 0')+'. Statement True hai.')
      ], shortcut:K(RT(0)+' = 0')+' — True.', hint:'Zero apna khud ka square root hai.' },
      { steps:[
        step('चरण 1 - अर्थ','<br>वर्गमूल पूछता है कौन सी संख्या स्वयं से गुणा होकर 0 देती है। केवल 0: '+K('0'+T+'0 = 0')+'.'),
        step('चरण 2 - निष्कर्ष','<br>तो '+K(RT(0)+' = 0')+'। कथन सत्य है।')
      ], shortcut:K(RT(0)+' = 0')+' — सत्य।', hint:'शून्य अपना स्वयं का वर्गमूल है।' }
    );
  };

  window.buildTfCubeZero=function(){
    return S(
      { steps:[
        step('Step 1 - Meaning','<br>The cube of 0 means '+K('0'+T+'0'+T+'0 = 0')+'.'),
        step('Step 2 - Conclusion','<br>So the cube of 0 is 0. The statement is True.')
      ], shortcut:'0 cubed = 0 — True.', hint:'Zero multiplied by itself any number of times stays 0.' },
      { steps:[
        step('Step 1 - Matlab','<br>0 ka cube matlab '+K('0'+T+'0'+T+'0 = 0')+'.'),
        step('Step 2 - Nishkarsh','<br>Toh 0 ka cube 0 hai. Statement True hai.')
      ], shortcut:'0 ka cube = 0 — True.', hint:'Zero ko kitni bhi baar khud se multiply karo, 0 hi rehta hai.' },
      { steps:[
        step('चरण 1 - अर्थ','<br>0 का घन यानी '+K('0'+T+'0'+T+'0 = 0')+'।'),
        step('चरण 2 - निष्कर्ष','<br>तो 0 का घन 0 है। कथन सत्य है।')
      ], shortcut:'0 का घन = 0 — सत्य।', hint:'शून्य को कितनी भी बार स्वयं से गुणा करो, 0 ही रहता है।' }
    );
  };

  window.buildTfPrimeSquareOdd=function(p){
    var pOdd=p%2===1;
    return S(
      { steps:[
        step('Step 1 - Odd vs even primes','<br>An odd number squared is odd, but '+K(2)+' is the only even prime and '+K('2'+T+'2 = 4')+' is even.'),
        step('Step 2 - Apply',pOdd?'<br>'+K(p)+' is odd, so '+K(POW(p,'2')+' = '+(p*p))+' is odd. The claim holds — True.':'<br>'+K(p)+' is even, so '+K(POW(p,'2')+' = '+(p*p))+' is even. The claim that it is always odd is False.')
      ], shortcut:pOdd?'An odd prime squared is odd — True.':'The even prime 2 squared is even — False.', hint:'2 is the only even prime; every other prime is odd.' },
      { steps:[
        step('Step 1 - Odd vs even primes','<br>Odd number ka square odd hota hai, lekin '+K(2)+' hi ek even prime hai aur '+K('2'+T+'2 = 4')+' even hai.'),
        step('Step 2 - Lagao',pOdd?'<br>'+K(p)+' odd hai, toh '+K(POW(p,'2')+' = '+(p*p))+' odd hai. Claim sahi — True.':'<br>'+K(p)+' even hai, toh '+K(POW(p,'2')+' = '+(p*p))+' even hai. Hamesha odd wala claim False hai.')
      ], shortcut:pOdd?'Odd prime ka square odd — True.':'Even prime 2 ka square even — False.', hint:'2 hi ek even prime hai; baaki sab odd hote hain.' },
      { steps:[
        step('चरण 1 - विषम बनाम सम अभाज्य','<br>विषम संख्या का वर्ग विषम होता है, परंतु '+K(2)+' ही एकमात्र सम अभाज्य है और '+K('2'+T+'2 = 4')+' सम है।'),
        step('चरण 2 - लागू करो',pOdd?'<br>'+K(p)+' विषम है, तो '+K(POW(p,'2')+' = '+(p*p))+' विषम है। दावा सही — सत्य।':'<br>'+K(p)+' सम है, तो '+K(POW(p,'2')+' = '+(p*p))+' सम है। सदैव विषम वाला दावा असत्य है।')
      ], shortcut:pOdd?'विषम अभाज्य का वर्ग विषम — सत्य।':'सम अभाज्य 2 का वर्ग सम — असत्य।', hint:'2 ही एकमात्र सम अभाज्य है; बाकी सब विषम होते हैं।' }
    );
  };

  window.buildTfCbrtNegEquals=function(root,cube){
    return S(
      { steps:[
        step('Step 1 - Check by cubing','<br>'+K('('+root+')^{3} = '+cube)+', since a negative number cubed stays negative.'),
        step('Step 2 - Conclusion','<br>So '+K(CRT('('+cube+')')+' = '+root)+'. The statement is True.')
      ], shortcut:K(CRT('('+cube+')')+' = '+root)+' — True.', hint:'Cube the proposed answer; if you get the number under the root, it is correct.' },
      { steps:[
        step('Step 1 - Cube karke check','<br>'+K('('+root+')^{3} = '+cube)+', kyunki negative number cube karne par negative rehta hai.'),
        step('Step 2 - Nishkarsh','<br>Toh '+K(CRT('('+cube+')')+' = '+root)+'. Statement True hai.')
      ], shortcut:K(CRT('('+cube+')')+' = '+root)+' — True.', hint:'Diye answer ko cube karo; agar root ke andar wala number mile to sahi hai.' },
      { steps:[
        step('चरण 1 - घन करके जाँचो','<br>'+K('('+root+')^{3} = '+cube)+', क्योंकि ऋणात्मक संख्या घन करने पर ऋणात्मक रहती है।'),
        step('चरण 2 - निष्कर्ष','<br>तो '+K(CRT('('+cube+')')+' = '+root)+'। कथन सत्य है।')
      ], shortcut:K(CRT('('+cube+')')+' = '+root)+' — सत्य।', hint:'दिए उत्तर को घन करो; यदि मूल के अंदर वाली संख्या मिले तो सही है।' }
    );
  };

  window.buildTfSqrtPlusMinus=function(n){
    return S(
      { steps:[
        step('Step 1 - Principal root','<br>The radical symbol gives only the non-negative (principal) root, not both signs.'),
        step('Step 2 - Apply','<br>So '+K(RT(n*n)+' = '+n)+', not '+K(PM+' '+n)+'. Writing the ± sign is incorrect, so the statement is False.')
      ], shortcut:'The radical gives only the positive root, so the ± makes it False.', hint:'A square root sign means the principal (non-negative) root only.' },
      { steps:[
        step('Step 1 - Principal root','<br>Radical symbol sirf non-negative (principal) root deta hai, dono signs nahi.'),
        step('Step 2 - Lagao','<br>Toh '+K(RT(n*n)+' = '+n)+', '+K(PM+' '+n)+' nahi. ± likhna galat hai, isliye statement False hai.')
      ], shortcut:'Radical sirf positive root deta hai, toh ± ke kaaran False.', hint:'Square root sign ka matlab sirf principal (non-negative) root hota hai.' },
      { steps:[
        step('चरण 1 - मुख्य मूल','<br>मूल चिह्न केवल अऋणात्मक (मुख्य) मूल देता है, दोनों चिह्न नहीं।'),
        step('चरण 2 - लागू करो','<br>तो '+K(RT(n*n)+' = '+n)+', '+K(PM+' '+n)+' नहीं। ± लिखना गलत है, इसलिए कथन असत्य है।')
      ], shortcut:'मूल चिह्न केवल धनात्मक मूल देता है, तो ± के कारण असत्य।', hint:'वर्गमूल चिह्न का अर्थ केवल मुख्य (अऋणात्मक) मूल होता है।' }
    );
  };

  window.buildTfCbrtPerfect=function(n,cube){
    return S(
      { steps:[
        step('Step 1 - Inverse operations','<br>The cube root undoes cubing, so the cube root of a perfect cube is its base.'),
        step('Step 2 - Apply','<br>Since '+K(POW(n,'3')+' = '+cube)+', we get '+K(CRT(cube)+' = '+n)+'. The statement is True.')
      ], shortcut:K(CRT(cube)+' = '+n)+' — True.', hint:'The cube root of a perfect cube is just its base number.' },
      { steps:[
        step('Step 1 - Ulte operations','<br>Cube root cubing ko undo karta hai, toh perfect cube ka cube root uska base hota hai.'),
        step('Step 2 - Lagao','<br>Kyunki '+K(POW(n,'3')+' = '+cube)+', toh '+K(CRT(cube)+' = '+n)+'. Statement True hai.')
      ], shortcut:K(CRT(cube)+' = '+n)+' — True.', hint:'Perfect cube ka cube root sirf uska base number hota hai.' },
      { steps:[
        step('चरण 1 - उलटी संक्रियाएँ','<br>घनमूल, घन को undo करता है, तो पूर्ण घन का घनमूल उसका आधार होता है।'),
        step('चरण 2 - लागू करो','<br>क्योंकि '+K(POW(n,'3')+' = '+cube)+', तो '+K(CRT(cube)+' = '+n)+'। कथन सत्य है।')
      ], shortcut:K(CRT(cube)+' = '+n)+' — सत्य।', hint:'पूर्ण घन का घनमूल सिर्फ़ उसका आधार संख्या होता है।' }
    );
  };

  window.buildTfDigitCount=function(n,len){
    var pl=len>1?'s':'';
    return S(
      { steps:[
        step('Step 1 - Count the digits','<br>'+K(POW(n,'2')+' = '+(n*n))+', which has '+K(len)+' digit'+pl+'.'),
        step('Step 2 - Conclusion','<br>A perfect square can certainly have '+K(len)+' digit'+pl+', so the statement is True.')
      ], shortcut:K(n*n)+' has '+len+' digit'+pl+' — True.', hint:'Just compute the square and count its digits.' },
      { steps:[
        step('Step 1 - Digits gino','<br>'+K(POW(n,'2')+' = '+(n*n))+', jisme '+K(len)+' digit'+pl+' hain.'),
        step('Step 2 - Nishkarsh','<br>Perfect square mein '+K(len)+' digit'+pl+' ho hi sakte hain, toh statement True hai.')
      ], shortcut:K(n*n)+' mein '+len+' digit'+pl+' — True.', hint:'Bas square nikaalo aur uske digits gino.' },
      { steps:[
        step('चरण 1 - अंक गिनो','<br>'+K(POW(n,'2')+' = '+(n*n))+', जिसमें '+K(len)+' अंक हैं।'),
        step('चरण 2 - निष्कर्ष','<br>पूर्ण वर्ग में '+K(len)+' अंक हो ही सकते हैं, तो कथन सत्य है।')
      ], shortcut:K(n*n)+' में '+len+' अंक — सत्य।', hint:'बस वर्ग निकालो और उसके अंक गिनो।' }
    );
  };
})();
