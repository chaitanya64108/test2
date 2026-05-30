/* tier10 - Template 21: sq_make_sub (Make a Perfect Square by subtracting)
   buildSqMakeSubSolution(num,ans), V1(num,sq,sub,ans), V2(num,ans,a), V3(num1,num2,sq,sub1,sub2,ans), V4(num,sub,ans), V5(num,sub,ans) */
(function(){
  var SB=window.SB; if(!SB) return;
  var K=SB.K,RT=SB.RT,POW=SB.POW,T=SB.T,step=SB.step,S=SB.S;

  window.buildSqMakeSubSolution=function(num,ans){
    var sq=num-ans, r=Math.round(Math.sqrt(sq));
    return S(
      { steps:[
        step('Step 1 - Understand','<br>We want the smallest number to remove from '+num+' so what is left is a perfect square. That means finding the largest perfect square not bigger than '+num+'.'),
        step('Step 2 - Find the nearest lower square','<br>The largest perfect square not exceeding '+num+' is '+K(POW(r,'2')+' = '+sq)+'.'),
        step('Step 3 - Subtract','<br>'+K(num+' - '+sq+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:'Nearest lower square '+K(POW(r,'2')+' = '+sq)+', so subtract '+K(num+' - '+sq+' = '+ans)+'.', hint:'Find the biggest perfect square below the number, then subtract it.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+num+' me se sabse chhoti sankhya hatani hai taaki bacha hua hissa perfect square ho. Matlab '+num+' se chhota sabse bada perfect square dhoondo.'),
        step('Step 2 - Nearest lower square dhoondo','<br>'+num+' se bada na ho aisa sabse bada perfect square hai '+K(POW(r,'2')+' = '+sq)+'.'),
        step('Step 3 - Ghatao','<br>'+K(num+' - '+sq+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:'Nearest lower square '+K(POW(r,'2')+' = '+sq)+', toh ghatao '+K(num+' - '+sq+' = '+ans)+'.', hint:'Number se chhota sabse bada perfect square dhoondo, fir ghatao.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+num+' में से सबसे छोटी संख्या हटानी है ताकि बचा हुआ भाग पूर्ण वर्ग हो। यानी '+num+' से छोटा सबसे बड़ा पूर्ण वर्ग खोजो।'),
        step('चरण 2 - निकटतम छोटा वर्ग खोजो','<br>'+num+' से बड़ा न हो ऐसा सबसे बड़ा पूर्ण वर्ग है '+K(POW(r,'2')+' = '+sq)+'।'),
        step('चरण 3 - घटाओ','<br>'+K(num+' - '+sq+' = '+ans)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:'निकटतम छोटा वर्ग '+K(POW(r,'2')+' = '+sq)+', तो घटाओ '+K(num+' - '+sq+' = '+ans)+'।', hint:'संख्या से छोटा सबसे बड़ा पूर्ण वर्ग खोजो, फिर घटाओ।' }
    );
  };

  window.buildSqMakeSubV1Solution=function(num,sq,sub,ans){
    var r=Math.round(Math.sqrt(sq));
    return S(
      { steps:[
        step('Step 1 - Understand','<br>We know '+num+' minus something gives the perfect square '+sq+'. Find that something.'),
        step('Step 2 - Find the gap','<br>'+K(num+' - '+sq+' = '+sub)+', and '+K(sq+' = '+POW(r,'2'))+' is a perfect square.'),
        step('Step 3 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(num+' - '+sq+' = '+sub)+'.', hint:'Subtracted amount = number - the perfect square.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+num+' me se kuch ghatane par perfect square '+sq+' milta hai. Wo kuch dhoondo.'),
        step('Step 2 - Gap nikalo','<br>'+K(num+' - '+sq+' = '+sub)+', aur '+K(sq+' = '+POW(r,'2'))+' ek perfect square hai.'),
        step('Step 3 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(num+' - '+sq+' = '+sub)+'.', hint:'Ghataai gayi sankhya = number - perfect square.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+num+' में से कुछ घटाने पर पूर्ण वर्ग '+sq+' मिलता है। वह कुछ खोजो।'),
        step('चरण 2 - अंतर निकालो','<br>'+K(num+' - '+sq+' = '+sub)+', और '+K(sq+' = '+POW(r,'2'))+' एक पूर्ण वर्ग है।'),
        step('चरण 3 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:K(num+' - '+sq+' = '+sub)+'।', hint:'घटाई गई संख्या = संख्या - पूर्ण वर्ग।' }
    );
  };

  window.buildSqMakeSubV2Solution=function(num,ans,a){
    var asq=a*a;
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Find the largest perfect square below '+num+', then the gap is the answer.'),
        step('Step 2 - Largest square below','<br>'+K(POW(a,'2')+' = '+asq)+' is the largest perfect square less than '+num+'.'),
        step('Step 3 - Subtract','<br>'+K(num+' - '+asq+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(num+' - '+POW(a,'2')+' = '+ans)+'.', hint:'Find the perfect square just below, then subtract.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+num+' se chhota sabse bada perfect square dhoondo, fir gap hi answer hai.'),
        step('Step 2 - Sabse bada chhota square','<br>'+K(POW(a,'2')+' = '+asq)+' '+num+' se chhota sabse bada perfect square hai.'),
        step('Step 3 - Ghatao','<br>'+K(num+' - '+asq+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(num+' - '+POW(a,'2')+' = '+ans)+'.', hint:'Just neeche wala perfect square dhoondo, fir ghatao.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+num+' से छोटा सबसे बड़ा पूर्ण वर्ग खोजो, फिर अंतर ही उत्तर है।'),
        step('चरण 2 - सबसे बड़ा छोटा वर्ग','<br>'+K(POW(a,'2')+' = '+asq)+' '+num+' से छोटा सबसे बड़ा पूर्ण वर्ग है।'),
        step('चरण 3 - घटाओ','<br>'+K(num+' - '+asq+' = '+ans)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:K(num+' - '+POW(a,'2')+' = '+ans)+'।', hint:'ठीक नीचे वाला पूर्ण वर्ग खोजो, फिर घटाओ।' }
    );
  };

  window.buildSqMakeSubV3Solution=function(num1,num2,sq,sub1,sub2,ans){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Add up the two amounts that were subtracted.'),
        step('Step 2 - Find each amount','<br>'+K(num1+' - '+sq+' = '+sub1)+' and '+K(num2+' - '+sq+' = '+sub2)+'.'),
        step('Step 3 - Add','<br>'+K(sub1+' + '+sub2+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(sub1+' + '+sub2+' = '+ans)+'.', hint:'Find each subtracted amount, then add them.' },
      { steps:[
        step('Step 1 - Samjho','<br>Do ghataai gayi sankhyaon ko jodo.'),
        step('Step 2 - Har amount nikalo','<br>'+K(num1+' - '+sq+' = '+sub1)+' aur '+K(num2+' - '+sq+' = '+sub2)+'.'),
        step('Step 3 - Jodo','<br>'+K(sub1+' + '+sub2+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(sub1+' + '+sub2+' = '+ans)+'.', hint:'Har ghataai gayi sankhya nikalo, fir jodo.' },
      { steps:[
        step('चरण 1 - समझो','<br>दोनों घटाई गई संख्याओं को जोड़ो।'),
        step('चरण 2 - हर संख्या निकालो','<br>'+K(num1+' - '+sq+' = '+sub1)+' और '+K(num2+' - '+sq+' = '+sub2)+'।'),
        step('चरण 3 - जोड़ो','<br>'+K(sub1+' + '+sub2+' = '+ans)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:K(sub1+' + '+sub2+' = '+ans)+'।', hint:'हर घटाई गई संख्या निकालो, फिर जोड़ो।' }
    );
  };

  window.buildSqMakeSubV4Solution=function(num,sub,ans){
    var r=Math.round(Math.sqrt(ans));
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Subtract first, then check which perfect square you get.'),
        step('Step 2 - Subtract','<br>'+K(num+' - '+sub+' = '+ans)+'.'),
        step('Step 3 - Recognise the square','<br>'+K(ans+' = '+POW(r,'2'))+', a perfect square.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(num+' - '+sub+' = '+ans+' = '+POW(r,'2'))+'.', hint:'Do the subtraction, then write the result as a square.' },
      { steps:[
        step('Step 1 - Samjho','<br>Pehle ghatao, fir dekho kaunsa perfect square milta hai.'),
        step('Step 2 - Ghatao','<br>'+K(num+' - '+sub+' = '+ans)+'.'),
        step('Step 3 - Square pehchano','<br>'+K(ans+' = '+POW(r,'2'))+', ek perfect square.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(num+' - '+sub+' = '+ans+' = '+POW(r,'2'))+'.', hint:'Pehle subtract karo, fir result ko square ke roop me likho.' },
      { steps:[
        step('चरण 1 - समझो','<br>पहले घटाओ, फिर देखो कौन सा पूर्ण वर्ग मिलता है।'),
        step('चरण 2 - घटाओ','<br>'+K(num+' - '+sub+' = '+ans)+'।'),
        step('चरण 3 - वर्ग पहचानो','<br>'+K(ans+' = '+POW(r,'2'))+', एक पूर्ण वर्ग।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:K(num+' - '+sub+' = '+ans+' = '+POW(r,'2'))+'।', hint:'पहले घटाओ, फिर परिणाम को वर्ग के रूप में लिखो।' }
    );
  };

  window.buildSqMakeSubV5Solution=function(num,sub,ans){
    var sq=num-sub;
    return S(
      { steps:[
        step('Step 1 - Understand','<br>First subtract, then take the square root of the result.'),
        step('Step 2 - Subtract','<br>'+K(num+' - '+sub+' = '+sq)+'.'),
        step('Step 3 - Take the square root','<br>'+K(RT(sq)+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(RT(num+' - '+sub)+' = '+RT(sq)+' = '+ans)+'.', hint:'Subtract first, then take the square root of the result.' },
      { steps:[
        step('Step 1 - Samjho','<br>Pehle ghatao, fir result ka square root nikalo.'),
        step('Step 2 - Ghatao','<br>'+K(num+' - '+sub+' = '+sq)+'.'),
        step('Step 3 - Square root lo','<br>'+K(RT(sq)+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(RT(num+' - '+sub)+' = '+RT(sq)+' = '+ans)+'.', hint:'Pehle ghatao, fir result ka square root lo.' },
      { steps:[
        step('चरण 1 - समझो','<br>पहले घटाओ, फिर परिणाम का वर्गमूल निकालो।'),
        step('चरण 2 - घटाओ','<br>'+K(num+' - '+sub+' = '+sq)+'।'),
        step('चरण 3 - वर्गमूल लो','<br>'+K(RT(sq)+' = '+ans)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:K(RT(num+' - '+sub)+' = '+RT(sq)+' = '+ans)+'।', hint:'पहले घटाओ, फिर परिणाम का वर्गमूल लो।' }
    );
  };
})();
