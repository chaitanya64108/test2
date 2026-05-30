/* tier10 - Template 41: sq_unit_digit (Unit Digit of Powers)
   buildUnitDigitPowSolution(n,power,ans) buildRootUnitFromEndSolution(end,ans)
   buildBadEndSolution(bad) buildUnitDigitSumSolution(a,b,ans) */
(function(){
  var SB=window.SB; if(!SB) return;
  var K=SB.K,POW=SB.POW,T=SB.T,step=SB.step,S=SB.S;

  window.buildUnitDigitPowSolution=function(n,power,ans){
    var u=n%10;
    var val=power===3?n*n*n:n*n;
    var ulast=power===3?u*u*u:u*u;
    var calc=power===3?(POW(n,3)+' = '+n+T+n+T+n+' = '+val):(POW(n,2)+' = '+n+T+n+' = '+val);
    var us=power===3?(u+T+u+T+u):(u+T+u);
    var pwEn=power===3?'cube':'square', pwHi=power===3?'\u0918\u0928':'\u0935\u0930\u094d\u0917';
    return S(
      { steps:[
        step('Step 1 - What is a unit digit','<br>The unit digit is simply the last digit of a number. We need the last digit of the '+pwEn+' of '+K(n)+'.'),
        step('Step 2 - Calculate the '+pwEn,'<br>'+K(calc)),
        step('Step 3 - Read the last digit','<br>The last digit of '+K(val)+' is '+K(ans)+', so that is the unit digit.')
      ], shortcut:'Only the last digit of '+K(n)+' matters: '+K(us+' = '+ulast)+' ends in '+K(ans)+'.', hint:'Work out the value, then look only at its last digit.' },
      { steps:[
        step('Step 1 - Unit digit kya hai','<br>Unit digit matlab number ka last digit. Humein '+K(n)+' ke '+pwEn+' ka last digit chahiye.'),
        step('Step 2 - '+pwEn+' nikalo','<br>'+K(calc)),
        step('Step 3 - Last digit dekho','<br>'+K(val)+' ka last digit '+K(ans)+' hai, yahi unit digit hai.')
      ], shortcut:'Sirf '+K(n)+' ka last digit matter karta hai: '+K(us+' = '+ulast)+' '+K(ans)+' par khatam hota hai.', hint:'Value nikalo, fir sirf last digit dekho.' },
      { steps:[
        step('\u091a\u0930\u0923 1 - \u0907\u0915\u093e\u0908 \u0905\u0902\u0915 \u0915\u094d\u092f\u093e \u0939\u0948','<br>\u0907\u0915\u093e\u0908 \u0905\u0902\u0915 \u092f\u093e\u0928\u0940 \u0938\u0902\u0916\u094d\u092f\u093e \u0915\u093e \u0905\u0902\u0924\u093f\u092e \u0905\u0902\u0915\u0964 \u0939\u092e\u0947\u0902 '+K(n)+' \u0915\u0947 '+pwHi+' \u0915\u093e \u0905\u0902\u0924\u093f\u092e \u0905\u0902\u0915 \u091a\u093e\u0939\u093f\u090f\u0964'),
        step('\u091a\u0930\u0923 2 - '+pwHi+' \u0928\u093f\u0915\u093e\u0932\u094b','<br>'+K(calc)),
        step('\u091a\u0930\u0923 3 - \u0905\u0902\u0924\u093f\u092e \u0905\u0902\u0915 \u0926\u0947\u0916\u094b','<br>'+K(val)+' \u0915\u093e \u0905\u0902\u0924\u093f\u092e \u0905\u0902\u0915 '+K(ans)+' \u0939\u0948, \u092f\u0939\u0940 \u0907\u0915\u093e\u0908 \u0905\u0902\u0915 \u0939\u0948\u0964')
      ], shortcut:'\u0915\u0947\u0935\u0932 '+K(n)+' \u0915\u093e \u0905\u0902\u0924\u093f\u092e \u0905\u0902\u0915 \u092e\u093e\u092f\u0928\u0947 \u0930\u0916\u0924\u093e \u0939\u0948: '+K(us+' = '+ulast)+' '+K(ans)+' \u092a\u0930 \u0938\u092e\u093e\u092a\u094d\u0924 \u0939\u094b\u0924\u093e \u0939\u0948\u0964', hint:'\u092e\u093e\u0928 \u0928\u093f\u0915\u093e\u0932\u094b, \u092b\u093f\u0930 \u0915\u0947\u0935\u0932 \u0905\u0902\u0924\u093f\u092e \u0905\u0902\u0915 \u0926\u0947\u0916\u094b\u0964' }
    );
  };

  window.buildRootUnitFromEndSolution=function(end,ans){
    var prod=ans*ans;
    return S(
      { steps:[
        step('Step 1 - Link the last digits','<br>The last digit of a square depends only on the last digit of its root.'),
        step('Step 2 - Find a matching digit','<br>We need a digit that, when squared, ends in '+K(end)+'. Here '+K(ans+T+ans+' = '+prod)+', which ends in '+K(end)+'.'),
        step('Step 3 - Answer','<br>So a possible unit digit of the square root is '+K(ans)+'.')
      ], shortcut:K(ans+T+ans+' = '+prod)+' ends in '+K(end)+'.', hint:'Square the digits 0-9 and see which give last digit '+end+'.' },
      { steps:[
        step('Step 1 - Last digits ka link','<br>Square ka last digit sirf root ke last digit par depend karta hai.'),
        step('Step 2 - Matching digit dhoondho','<br>Aisa digit chahiye jiska square '+K(end)+' par khatam ho. Yahaan '+K(ans+T+ans+' = '+prod)+', jo '+K(end)+' par khatam hota hai.'),
        step('Step 3 - Answer','<br>Toh square root ka ek possible unit digit '+K(ans)+' hai.')
      ], shortcut:K(ans+T+ans+' = '+prod)+' '+K(end)+' par khatam hota hai.', hint:'0-9 ke squares dekho, kaunsa last digit '+end+' deta hai.' },
      { steps:[
        step('\u091a\u0930\u0923 1 - \u0905\u0902\u0924\u093f\u092e \u0905\u0902\u0915\u094b\u0902 \u0915\u093e \u0938\u0902\u092c\u0902\u0927','<br>\u0935\u0930\u094d\u0917 \u0915\u093e \u0905\u0902\u0924\u093f\u092e \u0905\u0902\u0915 \u0915\u0947\u0935\u0932 \u092e\u0942\u0932 \u0915\u0947 \u0905\u0902\u0924\u093f\u092e \u0905\u0902\u0915 \u092a\u0930 \u0928\u093f\u0930\u094d\u092d\u0930 \u0915\u0930\u0924\u093e \u0939\u0948\u0964'),
        step('\u091a\u0930\u0923 2 - \u092e\u093f\u0932\u0924\u093e \u0939\u0941\u0906 \u0905\u0902\u0915 \u0916\u094b\u091c\u094b','<br>\u0910\u0938\u093e \u0905\u0902\u0915 \u091a\u093e\u0939\u093f\u090f \u091c\u093f\u0938\u0915\u093e \u0935\u0930\u094d\u0917 '+K(end)+' \u092a\u0930 \u0938\u092e\u093e\u092a\u094d\u0924 \u0939\u094b\u0964 \u092f\u0939\u093e\u0901 '+K(ans+T+ans+' = '+prod)+', \u091c\u094b '+K(end)+' \u092a\u0930 \u0938\u092e\u093e\u092a\u094d\u0924 \u0939\u094b\u0924\u093e \u0939\u0948\u0964'),
        step('\u091a\u0930\u0923 3 - \u0909\u0924\u094d\u0924\u0930','<br>\u0924\u094b \u0935\u0930\u094d\u0917\u092e\u0942\u0932 \u0915\u093e \u090f\u0915 \u0938\u0902\u092d\u093e\u0935\u093f\u0924 \u0907\u0915\u093e\u0908 \u0905\u0902\u0915 '+K(ans)+' \u0939\u0948\u0964')
      ], shortcut:K(ans+T+ans+' = '+prod)+' '+K(end)+' \u092a\u0930 \u0938\u092e\u093e\u092a\u094d\u0924 \u0939\u094b\u0924\u093e \u0939\u0948\u0964', hint:'0-9 \u0915\u0947 \u0935\u0930\u094d\u0917 \u0926\u0947\u0916\u094b, \u0915\u094c\u0928 \u0938\u093e \u0905\u0902\u0924\u093f\u092e \u0905\u0902\u0915 '+end+' \u0926\u0947\u0924\u093e \u0939\u0948\u0964' }
    );
  };

  window.buildBadEndSolution=function(bad){
    return S(
      { steps:[
        step('Step 1 - Allowed last digits','<br>A perfect square can only end in 0, 1, 4, 5, 6 or 9.'),
        step('Step 2 - Check the digit','<br>The digit '+K(bad)+' is not in that list. The digits 2, 3, 7 and 8 never appear at the end of a square.'),
        step('Step 3 - Answer','<br>So no perfect square can end with '+K(bad)+'.')
      ], shortcut:'Squares never end in 2, 3, 7 or 8.', hint:'Square 0-9 once and note the last digits you can get.' },
      { steps:[
        step('Step 1 - Allowed last digits','<br>Perfect square sirf 0, 1, 4, 5, 6 ya 9 par khatam ho sakta hai.'),
        step('Step 2 - Digit check karo','<br>Digit '+K(bad)+' is list mein nahi hai. 2, 3, 7 aur 8 kabhi square ke end mein nahi aate.'),
        step('Step 3 - Answer','<br>Toh koi perfect square '+K(bad)+' par khatam nahi ho sakta.')
      ], shortcut:'Squares kabhi 2, 3, 7 ya 8 par khatam nahi hote.', hint:'0-9 ke squares ek baar dekho aur possible last digits note karo.' },
      { steps:[
        step('\u091a\u0930\u0923 1 - \u0938\u0902\u092d\u093e\u0935\u093f\u0924 \u0905\u0902\u0924\u093f\u092e \u0905\u0902\u0915','<br>\u092a\u0942\u0930\u094d\u0923 \u0935\u0930\u094d\u0917 \u0915\u0947\u0935\u0932 0, 1, 4, 5, 6 \u092f\u093e 9 \u092a\u0930 \u0938\u092e\u093e\u092a\u094d\u0924 \u0939\u094b \u0938\u0915\u0924\u093e \u0939\u0948\u0964'),
        step('\u091a\u0930\u0923 2 - \u0905\u0902\u0915 \u091c\u093e\u0901\u091a\u094b','<br>\u0905\u0902\u0915 '+K(bad)+' \u0907\u0938 \u0938\u0942\u091a\u0940 \u092e\u0947\u0902 \u0928\u0939\u0940\u0902 \u0939\u0948\u0964 2, 3, 7 \u0914\u0930 8 \u0915\u092d\u0940 \u0935\u0930\u094d\u0917 \u0915\u0947 \u0905\u0902\u0924 \u092e\u0947\u0902 \u0928\u0939\u0940\u0902 \u0906\u0924\u0947\u0964'),
        step('\u091a\u0930\u0923 3 - \u0909\u0924\u094d\u0924\u0930','<br>\u0924\u094b \u0915\u094b\u0908 \u092a\u0942\u0930\u094d\u0923 \u0935\u0930\u094d\u0917 '+K(bad)+' \u092a\u0930 \u0938\u092e\u093e\u092a\u094d\u0924 \u0928\u0939\u0940\u0902 \u0939\u094b \u0938\u0915\u0924\u093e\u0964')
      ], shortcut:'\u0935\u0930\u094d\u0917 \u0915\u092d\u0940 2, 3, 7 \u092f\u093e 8 \u092a\u0930 \u0938\u092e\u093e\u092a\u094d\u0924 \u0928\u0939\u0940\u0902 \u0939\u094b\u0924\u0947\u0964', hint:'0-9 \u0915\u0947 \u0935\u0930\u094d\u0917 \u090f\u0915 \u092c\u093e\u0930 \u0926\u0947\u0916\u094b \u0914\u0930 \u0938\u0902\u092d\u093e\u0935\u093f\u0924 \u0905\u0902\u0924\u093f\u092e \u0905\u0902\u0915 \u0928\u094b\u091f \u0915\u0930\u094b\u0964' }
    );
  };

  window.buildUnitDigitSumSolution=function(a,b,ans){
    var sa=a*a,sb=b*b,sum=sa+sb;
    return S(
      { steps:[
        step('Step 1 - Find each square','<br>'+K(POW(a,2)+' = '+sa)+' and '+K(POW(b,2)+' = '+sb)+'.'),
        step('Step 2 - Add them','<br>'+K(sa+' + '+sb+' = '+sum)+'.'),
        step('Step 3 - Read the last digit','<br>The last digit of '+K(sum)+' is '+K(ans)+'.')
      ], shortcut:'Add the squares, then take the last digit: '+K(ans)+'.', hint:'Compute both squares, add, then look at the last digit.' },
      { steps:[
        step('Step 1 - Dono square nikalo','<br>'+K(POW(a,2)+' = '+sa)+' aur '+K(POW(b,2)+' = '+sb)+'.'),
        step('Step 2 - Add karo','<br>'+K(sa+' + '+sb+' = '+sum)+'.'),
        step('Step 3 - Last digit dekho','<br>'+K(sum)+' ka last digit '+K(ans)+' hai.')
      ], shortcut:'Squares add karo, fir last digit lo: '+K(ans)+'.', hint:'Dono squares nikalo, add karo, fir last digit dekho.' },
      { steps:[
        step('\u091a\u0930\u0923 1 - \u0926\u094b\u0928\u094b\u0902 \u0935\u0930\u094d\u0917 \u0928\u093f\u0915\u093e\u0932\u094b','<br>'+K(POW(a,2)+' = '+sa)+' \u0914\u0930 '+K(POW(b,2)+' = '+sb)+'\u0964'),
        step('\u091a\u0930\u0923 2 - \u091c\u094b\u0921\u093c\u094b','<br>'+K(sa+' + '+sb+' = '+sum)+'\u0964'),
        step('\u091a\u0930\u0923 3 - \u0905\u0902\u0924\u093f\u092e \u0905\u0902\u0915 \u0926\u0947\u0916\u094b','<br>'+K(sum)+' \u0915\u093e \u0905\u0902\u0924\u093f\u092e \u0905\u0902\u0915 '+K(ans)+' \u0939\u0948\u0964')
      ], shortcut:'\u0935\u0930\u094d\u0917 \u091c\u094b\u0921\u093c\u094b, \u092b\u093f\u0930 \u0905\u0902\u0924\u093f\u092e \u0905\u0902\u0915 \u0932\u094b: '+K(ans)+'\u0964', hint:'\u0926\u094b\u0928\u094b\u0902 \u0935\u0930\u094d\u0917 \u0928\u093f\u0915\u093e\u0932\u094b, \u091c\u094b\u0921\u093c\u094b, \u092b\u093f\u0930 \u0905\u0902\u0924\u093f\u092e \u0905\u0902\u0915 \u0926\u0947\u0916\u094b\u0964' }
    );
  };
})();
