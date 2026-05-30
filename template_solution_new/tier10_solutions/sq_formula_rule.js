/* tier10 - Template 44: sq_formula_rule (Formula / Digit-count Rules)
   buildRootDigitRuleSolution(numDigits,kind,ans)
   buildRootValueDigitsSolution(num,root,kind,ans)
   buildSquareDigitsMinSolution(k,ans) */
(function(){
  var SB=window.SB; if(!SB) return;
  var K=SB.K,RT=SB.RT,CRT=SB.CRT,POW=SB.POW,T=SB.T,step=SB.step,S=SB.S;

  window.buildRootDigitRuleSolution=function(numDigits,kind,ans){
    var isSq=(kind==='sqrt'); var grp=isSq?2:3;
    var rEn=isSq?'square root':'cube root';
    var pEn=isSq?'pairs (groups of 2)':'groups of 3';
    var nEn=isSq?'2s':'3s';
    return S(
      { steps:[
        step('Step 1 - The grouping rule','<br>To know how many digits a '+rEn+' has, group the original number\u2019s digits into '+pEn+', starting from the right side.'),
        step('Step 2 - Count the groups','<br>A '+K(numDigits)+'-digit number breaks into '+K(ans)+' such groups (even a single leftover digit counts as one full group).'),
        step('Step 3 - Answer','<br>The number of groups is exactly the number of digits in the '+rEn+', so the answer is '+K(ans)+'.')
      ], shortcut:'Digits in '+rEn+' = digits grouped in '+nEn+' = '+K(ans)+'.', hint:'Group the digits from the right in '+nEn+' and count how many groups you get.' },
      { steps:[
        step('Step 1 - Grouping rule','<br>'+rEn+' mein kitne digits honge ye jaanne ke liye, original number ke digits ko right se '+pEn+' mein group karo.'),
        step('Step 2 - Groups gino','<br>Ek '+K(numDigits)+'-digit number aise '+K(ans)+' groups mein toot-ta hai (bacha hua ek digit bhi ek pura group ginega).'),
        step('Step 3 - Answer','<br>Groups ki ginti hi '+rEn+' ke digits ki ginti hai, toh answer '+K(ans)+' hai.')
      ], shortcut:rEn+' ke digits = '+nEn+' mein grouped digits = '+K(ans)+'.', hint:'Digits ko right se '+nEn+' mein group karo aur groups gino.' },
      { steps:[
        step('\u091a\u0930\u0923 1 - \u0938\u092e\u0942\u0939 \u092c\u0928\u093e\u0928\u0947 \u0915\u093e \u0928\u093f\u092f\u092e','<br>'+(isSq?'\u0935\u0930\u094d\u0917\u092e\u0942\u0932':'\u0918\u0928\u092e\u0942\u0932')+' \u092e\u0947\u0902 \u0915\u093f\u0924\u0928\u0947 \u0905\u0902\u0915 \u0939\u094b\u0902\u0917\u0947 \u092f\u0939 \u091c\u093e\u0928\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f, \u092e\u0942\u0932 \u0938\u0902\u0916\u094d\u092f\u093e \u0915\u0947 \u0905\u0902\u0915\u094b\u0902 \u0915\u094b \u0926\u093e\u092f\u0940\u0902 \u0913\u0930 \u0938\u0947 '+(isSq?'2-2':'3-3')+' \u0915\u0947 \u0938\u092e\u0942\u0939\u094b\u0902 \u092e\u0947\u0902 \u092c\u093e\u0902\u091f\u094b\u0964'),
        step('\u091a\u0930\u0923 2 - \u0938\u092e\u0942\u0939 \u0917\u093f\u0928\u094b','<br>\u090f\u0915 '+K(numDigits)+'-\u0905\u0902\u0915\u0940\u092f \u0938\u0902\u0916\u094d\u092f\u093e \u0910\u0938\u0947 '+K(ans)+' \u0938\u092e\u0942\u0939\u094b\u0902 \u092e\u0947\u0902 \u092c\u0902\u091f\u0924\u0940 \u0939\u0948 (\u092c\u091a\u093e \u0939\u0941\u0906 \u090f\u0915 \u0905\u0902\u0915 \u092d\u0940 \u090f\u0915 \u092a\u0942\u0930\u093e \u0938\u092e\u0942\u0939 \u0917\u093f\u0928\u093e \u091c\u093e\u0924\u093e \u0939\u0948)\u0964'),
        step('\u091a\u0930\u0923 3 - \u0909\u0924\u094d\u0924\u0930','<br>\u0938\u092e\u0942\u0939\u094b\u0902 \u0915\u0940 \u0938\u0902\u0916\u094d\u092f\u093e \u0939\u0940 '+(isSq?'\u0935\u0930\u094d\u0917\u092e\u0942\u0932':'\u0918\u0928\u092e\u0942\u0932')+' \u0915\u0947 \u0905\u0902\u0915\u094b\u0902 \u0915\u0940 \u0938\u0902\u0916\u094d\u092f\u093e \u0939\u0948, \u0924\u094b \u0909\u0924\u094d\u0924\u0930 '+K(ans)+' \u0939\u0948\u0964')
      ], shortcut:(isSq?'\u0935\u0930\u094d\u0917\u092e\u0942\u0932':'\u0918\u0928\u092e\u0942\u0932')+' \u0915\u0947 \u0905\u0902\u0915 = '+(isSq?'2-2':'3-3')+' \u0915\u0947 \u0938\u092e\u0942\u0939 = '+K(ans)+'\u0964', hint:'\u0905\u0902\u0915\u094b\u0902 \u0915\u094b \u0926\u093e\u092f\u0940\u0902 \u0913\u0930 \u0938\u0947 '+(isSq?'2-2':'3-3')+' \u092e\u0947\u0902 \u092c\u093e\u0902\u091f\u094b \u0914\u0930 \u0938\u092e\u0942\u0939 \u0917\u093f\u0928\u094b\u0964' }
    );
  };

  window.buildRootValueDigitsSolution=function(num,root,kind,ans){
    var isSq=(kind==='sqrt'); var R=isSq?RT:CRT;
    var check=isSq?(root+T+root+' = '+num):(root+T+root+T+root+' = '+num);
    var rEn=isSq?'square root':'cube root';
    return S(
      { steps:[
        step('Step 1 - Find the root first','<br>'+K(R(num)+' = '+root)+', because '+K(check)+'.'),
        step('Step 2 - Count its digits','<br>The number '+K(root)+' is made of '+K(ans)+' digit'+(ans>1?'s':'')+'.'),
        step('Step 3 - Answer','<br>So '+K(R(num))+' has '+K(ans)+' digit'+(ans>1?'s':'')+'.')
      ], shortcut:K(R(num)+' = '+root)+', which has '+K(ans)+' digits.', hint:'Work out the actual '+rEn+' value, then simply count its digits.' },
      { steps:[
        step('Step 1 - Pehle root nikalo','<br>'+K(R(num)+' = '+root)+', kyunki '+K(check)+'.'),
        step('Step 2 - Uske digits gino','<br>Number '+K(root)+' mein '+K(ans)+' digit'+(ans>1?'s':'')+' hain.'),
        step('Step 3 - Answer','<br>Toh '+K(R(num))+' mein '+K(ans)+' digit'+(ans>1?'s':'')+' hain.')
      ], shortcut:K(R(num)+' = '+root)+', jisme '+K(ans)+' digits hain.', hint:rEn+' ki actual value nikalo, fir uske digits gino.' },
      { steps:[
        step('\u091a\u0930\u0923 1 - \u092a\u0939\u0932\u0947 \u092e\u0942\u0932 \u0928\u093f\u0915\u093e\u0932\u094b','<br>'+K(R(num)+' = '+root)+', \u0915\u094d\u092f\u094b\u0902\u0915\u093f '+K(check)+'\u0964'),
        step('\u091a\u0930\u0923 2 - \u0909\u0938\u0915\u0947 \u0905\u0902\u0915 \u0917\u093f\u0928\u094b','<br>\u0938\u0902\u0916\u094d\u092f\u093e '+K(root)+' \u092e\u0947\u0902 '+K(ans)+' \u0905\u0902\u0915 \u0939\u0948\u0902\u0964'),
        step('\u091a\u0930\u0923 3 - \u0909\u0924\u094d\u0924\u0930','<br>\u0924\u094b '+K(R(num))+' \u092e\u0947\u0902 '+K(ans)+' \u0905\u0902\u0915 \u0939\u0948\u0902\u0964')
      ], shortcut:K(R(num)+' = '+root)+', \u091c\u093f\u0938\u092e\u0947\u0902 '+K(ans)+' \u0905\u0902\u0915 \u0939\u0948\u0902\u0964', hint:(isSq?'\u0935\u0930\u094d\u0917\u092e\u0942\u0932':'\u0918\u0928\u092e\u0942\u0932')+' \u0915\u0940 \u0935\u093e\u0938\u094d\u0924\u0935\u093f\u0915 \u092e\u093e\u0928 \u0928\u093f\u0915\u093e\u0932\u094b, \u092b\u093f\u0930 \u0909\u0938\u0915\u0947 \u0905\u0902\u0915 \u0917\u093f\u0928\u094b\u0964' }
    );
  };

  window.buildSquareDigitsMinSolution=function(k,ans){
    return S(
      { steps:[
        step('Step 1 - The digit rule for squares','<br>When a '+K(k)+'-digit number is squared, the result always has either '+K('2k - 1')+' or '+K('2k')+' digits.'),
        step('Step 2 - Pick the smaller option','<br>The minimum is the smaller count: '+K('2'+T+k+' - 1 = '+ans)+'.'),
        step('Step 3 - Answer','<br>So the least number of digits in the square is '+K(ans)+'.')
      ], shortcut:'Minimum digits = '+K('2k - 1')+' = '+K(ans)+'.', hint:'Two outcomes are possible; the minimum uses '+K('2k - 1')+'.' },
      { steps:[
        step('Step 1 - Square ka digit rule','<br>Ek '+K(k)+'-digit number ko square karne par result mein hamesha ya to '+K('2k - 1')+' ya '+K('2k')+' digits hote hain.'),
        step('Step 2 - Chhota option lo','<br>Minimum chhoti ginti se aata hai: '+K('2'+T+k+' - 1 = '+ans)+'.'),
        step('Step 3 - Answer','<br>Toh square mein kam se kam '+K(ans)+' digits honge.')
      ], shortcut:'Minimum digits = '+K('2k - 1')+' = '+K(ans)+'.', hint:'Do outcomes possible hain; minimum '+K('2k - 1')+' se aata hai.' },
      { steps:[
        step('\u091a\u0930\u0923 1 - \u0935\u0930\u094d\u0917 \u0915\u093e \u0905\u0902\u0915 \u0928\u093f\u092f\u092e','<br>\u090f\u0915 '+K(k)+'-\u0905\u0902\u0915\u0940\u092f \u0938\u0902\u0916\u094d\u092f\u093e \u0915\u093e \u0935\u0930\u094d\u0917 \u0915\u0930\u0928\u0947 \u092a\u0930 \u092a\u0930\u093f\u0923\u093e\u092e \u092e\u0947\u0902 \u0939\u092e\u0947\u0936\u093e \u092f\u093e \u0924\u094b '+K('2k - 1')+' \u092f\u093e '+K('2k')+' \u0905\u0902\u0915 \u0939\u094b\u0924\u0947 \u0939\u0948\u0902\u0964'),
        step('\u091a\u0930\u0923 2 - \u091b\u094b\u091f\u093e \u0935\u093f\u0915\u0932\u094d\u092a \u0932\u094b','<br>\u0928\u094d\u092f\u0942\u0928\u0924\u092e \u091b\u094b\u091f\u0940 \u0917\u093f\u0928\u0924\u0940 \u0938\u0947 \u0906\u0924\u093e \u0939\u0948: '+K('2'+T+k+' - 1 = '+ans)+'\u0964'),
        step('\u091a\u0930\u0923 3 - \u0909\u0924\u094d\u0924\u0930','<br>\u0924\u094b \u0935\u0930\u094d\u0917 \u092e\u0947\u0902 \u0915\u092e \u0938\u0947 \u0915\u092e '+K(ans)+' \u0905\u0902\u0915 \u0939\u094b\u0902\u0917\u0947\u0964')
      ], shortcut:'\u0928\u094d\u092f\u0942\u0928\u0924\u092e \u0905\u0902\u0915 = '+K('2k - 1')+' = '+K(ans)+'\u0964', hint:'\u0926\u094b \u0938\u0902\u092d\u093e\u0935\u0928\u093e\u090f\u0901 \u0939\u0948\u0902; \u0928\u094d\u092f\u0942\u0928\u0924\u092e '+K('2k - 1')+' \u0938\u0947 \u0906\u0924\u093e \u0939\u0948\u0964' }
    );
  };
})();
