/* tier10 - Template 42: sq_prop_check (Square Property Check)
   buildNeverDigitSolution(bad) buildCanDigitSolution(good)
   buildBetweenCountSolution(n) buildTrailingZerosSolution()
   buildInclusiveCountSolution(n,sq,nsq) */
(function(){
  var SB=window.SB; if(!SB) return;
  var K=SB.K,POW=SB.POW,T=SB.T,step=SB.step,S=SB.S;

  window.buildNeverDigitSolution=function(bad){
    return S(
      { steps:[
        step('Step 1 - Possible last digits','<br>A perfect square can only end in 0, 1, 4, 5, 6 or 9.'),
        step('Step 2 - Spot the odd one out','<br>The digit '+K(bad)+' is not in that list, and 2, 3, 7, 8 never end a square.'),
        step('Step 3 - Answer','<br>So '+K(bad)+' can never be the unit digit of a perfect square.')
      ], shortcut:'No square ends in 2, 3, 7 or 8.', hint:'Recall the only six possible last digits of squares.' },
      { steps:[
        step('Step 1 - Possible last digits','<br>Perfect square sirf 0, 1, 4, 5, 6 ya 9 par khatam hota hai.'),
        step('Step 2 - Odd one pehchaano','<br>Digit '+K(bad)+' is list mein nahi hai, aur 2, 3, 7, 8 kabhi square ko end nahi karte.'),
        step('Step 3 - Answer','<br>Toh '+K(bad)+' kabhi perfect square ka unit digit nahi ho sakta.')
      ], shortcut:'Koi square 2, 3, 7 ya 8 par khatam nahi hota.', hint:'Squares ke sirf 6 possible last digits yaad rakho.' },
      { steps:[
        step('\u091a\u0930\u0923 1 - \u0938\u0902\u092d\u093e\u0935\u093f\u0924 \u0905\u0902\u0924\u093f\u092e \u0905\u0902\u0915','<br>\u092a\u0942\u0930\u094d\u0923 \u0935\u0930\u094d\u0917 \u0915\u0947\u0935\u0932 0, 1, 4, 5, 6 \u092f\u093e 9 \u092a\u0930 \u0938\u092e\u093e\u092a\u094d\u0924 \u0939\u094b\u0924\u093e \u0939\u0948\u0964'),
        step('\u091a\u0930\u0923 2 - \u0905\u0932\u0917 \u0905\u0902\u0915 \u092a\u0939\u091a\u093e\u0928\u094b','<br>\u0905\u0902\u0915 '+K(bad)+' \u0907\u0938 \u0938\u0942\u091a\u0940 \u092e\u0947\u0902 \u0928\u0939\u0940\u0902 \u0939\u0948, \u0914\u0930 2, 3, 7, 8 \u0915\u092d\u0940 \u0935\u0930\u094d\u0917 \u0915\u094b \u0938\u092e\u093e\u092a\u094d\u0924 \u0928\u0939\u0940\u0902 \u0915\u0930\u0924\u0947\u0964'),
        step('\u091a\u0930\u0923 3 - \u0909\u0924\u094d\u0924\u0930','<br>\u0924\u094b '+K(bad)+' \u0915\u092d\u0940 \u092a\u0942\u0930\u094d\u0923 \u0935\u0930\u094d\u0917 \u0915\u093e \u0907\u0915\u093e\u0908 \u0905\u0902\u0915 \u0928\u0939\u0940\u0902 \u0939\u094b \u0938\u0915\u0924\u093e\u0964')
      ], shortcut:'\u0915\u094b\u0908 \u0935\u0930\u094d\u0917 2, 3, 7 \u092f\u093e 8 \u092a\u0930 \u0938\u092e\u093e\u092a\u094d\u0924 \u0928\u0939\u0940\u0902 \u0939\u094b\u0924\u093e\u0964', hint:'\u0935\u0930\u094d\u0917\u094b\u0902 \u0915\u0947 \u0915\u0947\u0935\u0932 6 \u0938\u0902\u092d\u093e\u0935\u093f\u0924 \u0905\u0902\u0924\u093f\u092e \u0905\u0902\u0915 \u092f\u093e\u0926 \u0930\u0916\u094b\u0964' }
    );
  };

  window.buildCanDigitSolution=function(good){
    var ex={0:10,1:1,4:2,5:5,6:4,9:3}; var e=ex[good]; var sqv=e*e;
    return S(
      { steps:[
        step('Step 1 - Possible last digits','<br>A perfect square can end in 0, 1, 4, 5, 6 or 9.'),
        step('Step 2 - Give an example','<br>'+K(good)+' is in this list, for example '+K(POW(e,2)+' = '+sqv)+' ends in '+K(good)+'.'),
        step('Step 3 - Answer','<br>So '+K(good)+' can appear as the unit digit of a perfect square.')
      ], shortcut:K(POW(e,2)+' = '+sqv)+' ends in '+K(good)+'.', hint:'Find any square that ends in '+good+'.' },
      { steps:[
        step('Step 1 - Possible last digits','<br>Perfect square 0, 1, 4, 5, 6 ya 9 par khatam ho sakta hai.'),
        step('Step 2 - Example do','<br>'+K(good)+' is list mein hai, jaise '+K(POW(e,2)+' = '+sqv)+' '+K(good)+' par khatam hota hai.'),
        step('Step 3 - Answer','<br>Toh '+K(good)+' perfect square ka unit digit ho sakta hai.')
      ], shortcut:K(POW(e,2)+' = '+sqv)+' '+K(good)+' par khatam hota hai.', hint:'Koi bhi square dhoondho jo '+good+' par khatam ho.' },
      { steps:[
        step('\u091a\u0930\u0923 1 - \u0938\u0902\u092d\u093e\u0935\u093f\u0924 \u0905\u0902\u0924\u093f\u092e \u0905\u0902\u0915','<br>\u092a\u0942\u0930\u094d\u0923 \u0935\u0930\u094d\u0917 0, 1, 4, 5, 6 \u092f\u093e 9 \u092a\u0930 \u0938\u092e\u093e\u092a\u094d\u0924 \u0939\u094b \u0938\u0915\u0924\u093e \u0939\u0948\u0964'),
        step('\u091a\u0930\u0923 2 - \u0909\u0926\u093e\u0939\u0930\u0923 \u0926\u094b','<br>'+K(good)+' \u0907\u0938 \u0938\u0942\u091a\u0940 \u092e\u0947\u0902 \u0939\u0948, \u091c\u0948\u0938\u0947 '+K(POW(e,2)+' = '+sqv)+' '+K(good)+' \u092a\u0930 \u0938\u092e\u093e\u092a\u094d\u0924 \u0939\u094b\u0924\u093e \u0939\u0948\u0964'),
        step('\u091a\u0930\u0923 3 - \u0909\u0924\u094d\u0924\u0930','<br>\u0924\u094b '+K(good)+' \u092a\u0942\u0930\u094d\u0923 \u0935\u0930\u094d\u0917 \u0915\u093e \u0907\u0915\u093e\u0908 \u0905\u0902\u0915 \u0939\u094b \u0938\u0915\u0924\u093e \u0939\u0948\u0964')
      ], shortcut:K(POW(e,2)+' = '+sqv)+' '+K(good)+' \u092a\u0930 \u0938\u092e\u093e\u092a\u094d\u0924 \u0939\u094b\u0924\u093e \u0939\u0948\u0964', hint:'\u0915\u094b\u0908 \u092d\u0940 \u0935\u0930\u094d\u0917 \u0916\u094b\u091c\u094b \u091c\u094b '+good+' \u092a\u0930 \u0938\u092e\u093e\u092a\u094d\u0924 \u0939\u094b\u0964' }
    );
  };

  window.buildBetweenCountSolution=function(n){
    var sq=n*n, nsq=(n+1)*(n+1), cnt=2*n;
    return S(
      { steps:[
        step('Step 1 - Two consecutive squares','<br>'+K(POW(n,2)+' = '+sq)+' and '+K(POW(n+1,2)+' = '+nsq)+'. There is no perfect square between them.'),
        step('Step 2 - Count the gap','<br>The whole numbers strictly between them number '+K(nsq+' - '+sq+' - 1 = '+cnt)+'.'),
        step('Step 3 - Answer','<br>All '+K(cnt)+' of these are non-perfect-squares.')
      ], shortcut:'Between '+K(POW(n,2))+' and '+K(POW(n+1,2))+' there are exactly '+K(2)+T+K(n)+' = '+K(cnt)+' numbers.', hint:'Use (n+1)^2 - n^2 - 1 = 2n.' },
      { steps:[
        step('Step 1 - Do consecutive squares','<br>'+K(POW(n,2)+' = '+sq)+' aur '+K(POW(n+1,2)+' = '+nsq)+'. Inke beech koi perfect square nahi hai.'),
        step('Step 2 - Gap gino','<br>Inke beech ki whole numbers '+K(nsq+' - '+sq+' - 1 = '+cnt)+' hain.'),
        step('Step 3 - Answer','<br>Ye saari '+K(cnt)+' non-perfect-squares hain.')
      ], shortcut:K(POW(n,2))+' aur '+K(POW(n+1,2))+' ke beech '+K(cnt)+' numbers hain.', hint:'(n+1)^2 - n^2 - 1 = 2n use karo.' },
      { steps:[
        step('\u091a\u0930\u0923 1 - \u0926\u094b \u0915\u094d\u0930\u092e\u093f\u0915 \u0935\u0930\u094d\u0917','<br>'+K(POW(n,2)+' = '+sq)+' \u0914\u0930 '+K(POW(n+1,2)+' = '+nsq)+'\u0964 \u0907\u0928\u0915\u0947 \u092c\u0940\u091a \u0915\u094b\u0908 \u092a\u0942\u0930\u094d\u0923 \u0935\u0930\u094d\u0917 \u0928\u0939\u0940\u0902 \u0939\u0948\u0964'),
        step('\u091a\u0930\u0923 2 - \u0905\u0902\u0924\u0930\u093e\u0932 \u0917\u093f\u0928\u094b','<br>\u0907\u0928\u0915\u0947 \u0920\u0940\u0915 \u092c\u0940\u091a \u0915\u0940 \u092a\u0942\u0930\u094d\u0923 \u0938\u0902\u0916\u094d\u092f\u093e\u090f\u0901 '+K(nsq+' - '+sq+' - 1 = '+cnt)+' \u0939\u0948\u0902\u0964'),
        step('\u091a\u0930\u0923 3 - \u0909\u0924\u094d\u0924\u0930','<br>\u092f\u0947 \u0938\u092d\u0940 '+K(cnt)+' \u0905\u092a\u0942\u0930\u094d\u0923\u0935\u0930\u094d\u0917 \u0939\u0948\u0902\u0964')
      ], shortcut:K(POW(n,2))+' \u0914\u0930 '+K(POW(n+1,2))+' \u0915\u0947 \u092c\u0940\u091a '+K(cnt)+' \u0938\u0902\u0916\u094d\u092f\u093e\u090f\u0901 \u0939\u0948\u0902\u0964', hint:'(n+1)^2 - n^2 - 1 = 2n \u0915\u093e \u092a\u094d\u0930\u092f\u094b\u0917 \u0915\u0930\u094b\u0964' }
    );
  };

  window.buildTrailingZerosSolution=function(){
    return S(
      { steps:[
        step('Step 1 - Where zeros come from','<br>A square ending in zero must come from a number that ends in zero.'),
        step('Step 2 - Zeros double up','<br>A number ending in one zero, squared, gives two zeros: '+K('10'+T+'10 = 100')+'.'),
        step('Step 3 - Answer','<br>So a perfect square that ends in zero must end in at least 2 zeros.')
      ], shortcut:'Zeros come in pairs in a square - so at least 2.', hint:'Think about 10 squared = 100.' },
      { steps:[
        step('Step 1 - Zeros kahaan se aate hain','<br>0 par khatam hone wala square sirf 0 par khatam hone wale number se aata hai.'),
        step('Step 2 - Zeros double ho jaate hain','<br>Ek zero wale number ka square do zeros deta hai: '+K('10'+T+'10 = 100')+'.'),
        step('Step 3 - Answer','<br>Toh 0 par khatam hone wale perfect square mein kam se kam 2 zeros honge.')
      ], shortcut:'Square mein zeros pairs mein aate hain - kam se kam 2.', hint:'10 ka square = 100 socho.' },
      { steps:[
        step('\u091a\u0930\u0923 1 - \u0936\u0942\u0928\u094d\u092f \u0915\u0939\u093e\u0901 \u0938\u0947 \u0906\u0924\u0947 \u0939\u0948\u0902','<br>\u0936\u0942\u0928\u094d\u092f \u092a\u0930 \u0938\u092e\u093e\u092a\u094d\u0924 \u0939\u094b\u0928\u0947 \u0935\u093e\u0932\u093e \u0935\u0930\u094d\u0917 \u0915\u0947\u0935\u0932 \u0936\u0942\u0928\u094d\u092f \u092a\u0930 \u0938\u092e\u093e\u092a\u094d\u0924 \u0939\u094b\u0928\u0947 \u0935\u093e\u0932\u0940 \u0938\u0902\u0916\u094d\u092f\u093e \u0938\u0947 \u0906\u0924\u093e \u0939\u0948\u0964'),
        step('\u091a\u0930\u0923 2 - \u0936\u0942\u0928\u094d\u092f \u0926\u094b\u0917\u0941\u0928\u0947 \u0939\u094b \u091c\u093e\u0924\u0947 \u0939\u0948\u0902','<br>\u090f\u0915 \u0936\u0942\u0928\u094d\u092f \u0935\u093e\u0932\u0940 \u0938\u0902\u0916\u094d\u092f\u093e \u0915\u093e \u0935\u0930\u094d\u0917 \u0926\u094b \u0936\u0942\u0928\u094d\u092f \u0926\u0947\u0924\u093e \u0939\u0948: '+K('10'+T+'10 = 100')+'\u0964'),
        step('\u091a\u0930\u0923 3 - \u0909\u0924\u094d\u0924\u0930','<br>\u0924\u094b \u0936\u0942\u0928\u094d\u092f \u092a\u0930 \u0938\u092e\u093e\u092a\u094d\u0924 \u0939\u094b\u0928\u0947 \u0935\u093e\u0932\u0947 \u092a\u0942\u0930\u094d\u0923 \u0935\u0930\u094d\u0917 \u092e\u0947\u0902 \u0915\u092e \u0938\u0947 \u0915\u092e 2 \u0936\u0942\u0928\u094d\u092f \u0939\u094b\u0902\u0917\u0947\u0964')
      ], shortcut:'\u0935\u0930\u094d\u0917 \u092e\u0947\u0902 \u0936\u0942\u0928\u094d\u092f \u091c\u094b\u0921\u093c\u094b\u0902 \u092e\u0947\u0902 \u0906\u0924\u0947 \u0939\u0948\u0902 - \u0915\u092e \u0938\u0947 \u0915\u092e 2\u0964', hint:'10 \u0915\u093e \u0935\u0930\u094d\u0917 = 100 \u0938\u094b\u091a\u094b\u0964' }
    );
  };

  window.buildInclusiveCountSolution=function(n,sq,nsq){
    var diff=nsq-sq, cnt=diff+1;
    return S(
      { steps:[
        step('Step 1 - Inclusive counting rule','<br>To count whole numbers from one value to another including both ends, use (last - first + 1).'),
        step('Step 2 - Apply','<br>'+K(nsq+' - '+sq+' + 1 = '+diff+' + 1 = '+cnt)+'.'),
        step('Step 3 - Answer','<br>So there are '+K(cnt)+' integers from '+K(sq)+' to '+K(nsq)+'.')
      ], shortcut:'Inclusive count = last - first + 1 = '+K(cnt)+'.', hint:'Add 1 to the difference when both ends are counted.' },
      { steps:[
        step('Step 1 - Inclusive counting rule','<br>Dono ends sahit ginne ke liye (last - first + 1) use karo.'),
        step('Step 2 - Lagao','<br>'+K(nsq+' - '+sq+' + 1 = '+diff+' + 1 = '+cnt)+'.'),
        step('Step 3 - Answer','<br>Toh '+K(sq)+' se '+K(nsq)+' tak '+K(cnt)+' integers hain.')
      ], shortcut:'Inclusive count = last - first + 1 = '+K(cnt)+'.', hint:'Dono ends ginne par difference mein 1 add karo.' },
      { steps:[
        step('\u091a\u0930\u0923 1 - \u0926\u094b\u0928\u094b\u0902 \u0938\u093f\u0930\u0947 \u0917\u093f\u0928\u0928\u0947 \u0915\u093e \u0928\u093f\u092f\u092e','<br>\u0926\u094b\u0928\u094b\u0902 \u0938\u093f\u0930\u0947 \u0938\u0939\u093f\u0924 \u0917\u093f\u0928\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f (\u0905\u0902\u0924\u093f\u092e - \u092a\u094d\u0930\u0925\u092e + 1) \u0915\u093e \u092a\u094d\u0930\u092f\u094b\u0917 \u0915\u0930\u094b\u0964'),
        step('\u091a\u0930\u0923 2 - \u0932\u093e\u0917\u0942 \u0915\u0930\u094b','<br>'+K(nsq+' - '+sq+' + 1 = '+diff+' + 1 = '+cnt)+'\u0964'),
        step('\u091a\u0930\u0923 3 - \u0909\u0924\u094d\u0924\u0930','<br>\u0924\u094b '+K(sq)+' \u0938\u0947 '+K(nsq)+' \u0924\u0915 '+K(cnt)+' \u092a\u0942\u0930\u094d\u0923\u093e\u0902\u0915 \u0939\u0948\u0902\u0964')
      ], shortcut:'\u0926\u094b\u0928\u094b\u0902 \u0938\u093f\u0930\u0947 \u0917\u093f\u0928\u0924\u0940 = \u0905\u0902\u0924\u093f\u092e - \u092a\u094d\u0930\u0925\u092e + 1 = '+K(cnt)+'\u0964', hint:'\u0926\u094b\u0928\u094b\u0902 \u0938\u093f\u0930\u0947 \u0917\u093f\u0928\u0928\u0947 \u092a\u0930 \u0905\u0902\u0924\u0930 \u092e\u0947\u0902 1 \u091c\u094b\u0921\u093c\u094b\u0964' }
    );
  };
})();
