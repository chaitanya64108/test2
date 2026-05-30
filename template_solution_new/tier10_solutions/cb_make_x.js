/* tier10 - Template 28: cb_make_x (Make a Perfect Cube)
   buildCbMakeXSolution(num,ans,s,d), V2(a,b,na,nb,ans), V5(num,mult,ans) */
(function(){
  var SB=window.SB; if(!SB) return;
  var K=SB.K,CRT=SB.CRT,POW=SB.POW,T=SB.T,step=SB.step,S=SB.S;

  window.buildCbMakeXSolution=function(num,ans,s,d){
    var factStr=[s,d,d].sort(function(x,y){return x-y;}).join(T);
    var sd=s*d, cube=num*ans;
    return S(
      { steps:[
        step('Step 1 - Understand','<br>A number is a perfect cube when every prime factor appears a number of times that is a multiple of 3 (3, 6, 9, ...).'),
        step('Step 2 - Factorize','<br>'+K(num+' = '+factStr)+'. Here '+K(s)+' appears once and '+K(d)+' appears twice.'),
        step('Step 3 - Find what is missing','<br>'+K(s)+' needs 2 more (so '+K(POW(s,'2'))+') and '+K(d)+' needs 1 more (so '+K(d)+'). Multiply by '+K(POW(s,'2')+T+d+' = '+ans)+'.'),
        step('Step 4 - Check','<br>'+K(num+T+ans+' = '+cube+' = '+POW(sd,'3'))+', a perfect cube.')
      ], shortcut:'Multiply by '+K(ans)+' to make it a perfect cube.', hint:'Count each prime factor; add just enough so every count becomes a multiple of 3.' },
      { steps:[
        step('Step 1 - Samjho','<br>Number perfect cube tab hota hai jab har prime factor ka count 3 ka multiple ho (3, 6, 9, ...).'),
        step('Step 2 - Factorize karo','<br>'+K(num+' = '+factStr)+'. Yahan '+K(s)+' ek baar aur '+K(d)+' do baar aata hai.'),
        step('Step 3 - Kya missing hai dekho','<br>'+K(s)+' ko 2 aur chahiye (yaani '+K(POW(s,'2'))+') aur '+K(d)+' ko 1 aur chahiye (yaani '+K(d)+'). Multiply karo '+K(POW(s,'2')+T+d+' = '+ans)+' se.'),
        step('Step 4 - Check karo','<br>'+K(num+T+ans+' = '+cube+' = '+POW(sd,'3'))+', ek perfect cube.')
      ], shortcut:K(ans)+' se multiply karo to perfect cube ban jaayega.', hint:'Har prime factor ka count gino; utna add karo ki har count 3 ka multiple ban jaaye.' },
      { steps:[
        step('चरण 1 - समझो','<br>कोई संख्या पूर्ण घन तब होती है जब हर अभाज्य गुणनखंड की गिनती 3 का गुणज हो (3, 6, 9, ...)।'),
        step('चरण 2 - गुणनखंड करो','<br>'+K(num+' = '+factStr)+'। यहाँ '+K(s)+' एक बार और '+K(d)+' दो बार आता है।'),
        step('चरण 3 - देखो क्या कम है','<br>'+K(s)+' को 2 और चाहिए (यानी '+K(POW(s,'2'))+') और '+K(d)+' को 1 और चाहिए (यानी '+K(d)+')। '+K(POW(s,'2')+T+d+' = '+ans)+' से गुणा करो।'),
        step('चरण 4 - जाँच करो','<br>'+K(num+T+ans+' = '+cube+' = '+POW(sd,'3'))+', एक पूर्ण घन।')
      ], shortcut:K(ans)+' से गुणा करो तो पूर्ण घन बन जाएगा।', hint:'हर अभाज्य गुणनखंड की गिनती करो; इतना जोड़ो कि हर गिनती 3 का गुणज बन जाए।' }
    );
  };

  window.buildCbMakeXV2Solution=function(a,b,na,nb,ans){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>When two numbers multiply to a perfect cube, factorize each and combine the primes.'),
        step('Step 2 - Factorize each','<br>'+K(na+' = '+a+T+POW(b,'2'))+' and '+K(nb+' = '+POW(a,'2')+T+b)+'.'),
        step('Step 3 - Multiply','<br>'+K(na+T+nb+' = '+POW(a,'3')+T+POW(b,'3')+' = '+POW('('+a+T+b+')','3'))+'.'),
        step('Step 4 - Cube root','<br>'+K(CRT(na*nb)+' = '+a+T+b+' = '+ans)+'.')
      ], shortcut:K(na+T+nb+' = '+POW(ans,'3'))+', so the answer is '+K(ans)+'.', hint:'Combine the primes of both numbers; the product is the cube of their base.' },
      { steps:[
        step('Step 1 - Samjho','<br>Jab do numbers multiply hokar perfect cube bante hain, har ek ko factorize karke primes combine karo.'),
        step('Step 2 - Har ek ko factorize karo','<br>'+K(na+' = '+a+T+POW(b,'2'))+' aur '+K(nb+' = '+POW(a,'2')+T+b)+'.'),
        step('Step 3 - Multiply karo','<br>'+K(na+T+nb+' = '+POW(a,'3')+T+POW(b,'3')+' = '+POW('('+a+T+b+')','3'))+'.'),
        step('Step 4 - Cube root','<br>'+K(CRT(na*nb)+' = '+a+T+b+' = '+ans)+'.')
      ], shortcut:K(na+T+nb+' = '+POW(ans,'3'))+', toh answer '+K(ans)+' hai.', hint:'Dono numbers ke primes combine karo; product unke base ka cube hai.' },
      { steps:[
        step('चरण 1 - समझो','<br>जब दो संख्याएँ गुणा होकर पूर्ण घन बनती हैं, हर एक को गुणनखंड करके primes मिलाओ।'),
        step('चरण 2 - हर एक को गुणनखंड करो','<br>'+K(na+' = '+a+T+POW(b,'2'))+' और '+K(nb+' = '+POW(a,'2')+T+b)+'।'),
        step('चरण 3 - गुणा करो','<br>'+K(na+T+nb+' = '+POW(a,'3')+T+POW(b,'3')+' = '+POW('('+a+T+b+')','3'))+'।'),
        step('चरण 4 - घनमूल','<br>'+K(CRT(na*nb)+' = '+a+T+b+' = '+ans)+'।')
      ], shortcut:K(na+T+nb+' = '+POW(ans,'3'))+', तो उत्तर '+K(ans)+' है।', hint:'दोनों संख्याओं के primes मिलाओ; गुणनफल उनके आधार का घन है।' }
    );
  };

  window.buildCbMakeXV5Solution=function(num,mult,ans){
    var result=num*mult;
    return S(
      { steps:[
        step('Step 1 - Understand','<br>First do the multiplication, then take the cube root of the result.'),
        step('Step 2 - Multiply','<br>'+K(num+T+mult+' = '+result)+'.'),
        step('Step 3 - Cube root','<br>'+K(result+' = '+POW(ans,'3'))+', so '+K(CRT(result)+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(CRT(num+T+mult)+' = '+ans)+'.', hint:'Multiply first, then take the cube root of the product.' },
      { steps:[
        step('Step 1 - Samjho','<br>Pehle multiplication karo, fir result ka cube root lo.'),
        step('Step 2 - Multiply karo','<br>'+K(num+T+mult+' = '+result)+'.'),
        step('Step 3 - Cube root','<br>'+K(result+' = '+POW(ans,'3'))+', toh '+K(CRT(result)+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(CRT(num+T+mult)+' = '+ans)+'.', hint:'Pehle multiply karo, fir product ka cube root lo.' },
      { steps:[
        step('चरण 1 - समझो','<br>पहले गुणा करो, फिर परिणाम का घनमूल लो।'),
        step('चरण 2 - गुणा करो','<br>'+K(num+T+mult+' = '+result)+'।'),
        step('चरण 3 - घनमूल','<br>'+K(result+' = '+POW(ans,'3'))+', तो '+K(CRT(result)+' = '+ans)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:K(CRT(num+T+mult)+' = '+ans)+'।', hint:'पहले गुणा करो, फिर गुणनफल का घनमूल लो।' }
    );
  };
})();
