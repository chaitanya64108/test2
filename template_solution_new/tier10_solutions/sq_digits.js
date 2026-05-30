/* tier10 - Template 15: sq_digits (Digits in Square Root)
   buildSqDigitsSolution(n,num,ans), V1(n,lo,hi), V2(n), V3(num,ans), V4(k,ans), V5(a,b,sa,sb) */
(function(){
  var SB=window.SB; if(!SB) return;
  var K=SB.K,RT=SB.RT,POW=SB.POW,step=SB.step,S=SB.S;

  window.buildSqDigitsSolution=function(n,num,ans){
    var D=String(num).length;
    return S(
      { steps:[
        step('Step 1 - Understand','<br>We can count the digits of '+K(RT(num))+' without actually finding the root, by grouping digits.'),
        step('Step 2 - The pairing rule','<br>Group the digits of the number in pairs from the right. The number of groups = number of digits in the square root.'),
        step('Step 3 - Apply','<br>'+num+' has '+D+' digits, which form '+n+' group(s), so the root has '+n+' digit(s).'),
        step('Step 4 - Final answer','<br>'+K(n)+'.')
      ], shortcut:n+' pairs of digits (from the right) -> '+n+' digits in the root.', hint:'Digits in the root = number of 2-digit groups (from the right) in the number.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(RT(num))+' ke digits, root nikaale bina, digits ko group karke gin sakte hain.'),
        step('Step 2 - Pairing rule','<br>Number ke digits ko right se pairs me grouped karo. Groups ki sankhya = root ke digits.'),
        step('Step 3 - Lagao','<br>'+num+' me '+D+' digits hain, jo '+n+' group(s) bante hain, toh root me '+n+' digit(s) honge.'),
        step('Step 4 - Final answer','<br>'+K(n)+'.')
      ], shortcut:n+' digit pairs (right se) -> root me '+n+' digits.', hint:'Root ke digits = number me 2-digit groups (right se) ki sankhya.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(RT(num))+' के अंक, मूल निकाले बिना, अंकों को समूह बनाकर गिन सकते हैं।'),
        step('चरण 2 - जोड़ा नियम','<br>संख्या के अंकों को दाएँ से जोड़ों में बांटो। समूहों की संख्या = वर्गमूल के अंक।'),
        step('चरण 3 - लगाओ','<br>'+num+' में '+D+' अंक हैं, जो '+n+' समूह बनाते हैं, तो मूल में '+n+' अंक होंगे।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(n)+'।')
      ], shortcut:n+' अंक जोड़े (दाएँ से) -> मूल में '+n+' अंक।', hint:'मूल के अंक = संख्या में 2-अंक समूहों (दाएँ से) की संख्या।' }
    );
  };

  window.buildSqDigitsV1Solution=function(n,lo,hi){
    var dlo=String(lo).length, dhi=String(hi).length;
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Any number in this range - how many digits will its square root have?'),
        step('Step 2 - Check the range','<br>The smallest, '+lo+', has '+dlo+' digits; the largest, '+hi+', has '+dhi+' digits. Grouping in pairs from the right gives '+n+' group(s).'),
        step('Step 3 - Apply the rule','<br>'+n+' group(s) -> the square root has '+n+' digit(s).'),
        step('Step 4 - Final answer','<br>'+K(n)+'.')
      ], shortcut:n+' digit-pairs -> '+n+' digits in the root.', hint:'Group the digits in twos from the right and count the groups.' },
      { steps:[
        step('Step 1 - Samjho','<br>Is range me koi bhi number - uske square root me kitne digits honge?'),
        step('Step 2 - Range check karo','<br>Sabse chhota '+lo+' me '+dlo+' digits; sabse bada '+hi+' me '+dhi+' digits. Right se pairs banane par '+n+' group(s) milte hain.'),
        step('Step 3 - Rule lagao','<br>'+n+' group(s) -> square root me '+n+' digit(s).'),
        step('Step 4 - Final answer','<br>'+K(n)+'.')
      ], shortcut:n+' digit-pairs -> root me '+n+' digits.', hint:'Digits ko right se do-do me group karo, groups gino.' },
      { steps:[
        step('चरण 1 - समझो','<br>इस रेंज में कोई भी संख्या - उसके वर्गमूल में कितने अंक होंगे?'),
        step('चरण 2 - रेंज जाँचो','<br>सबसे छोटी '+lo+' में '+dlo+' अंक; सबसे बड़ी '+hi+' में '+dhi+' अंक। दाएँ से जोड़े बनाने पर '+n+' समूह मिलते हैं।'),
        step('चरण 3 - नियम लगाओ','<br>'+n+' समूह -> वर्गमूल में '+n+' अंक।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(n)+'।')
      ], shortcut:n+' अंक-जोड़े -> मूल में '+n+' अंक।', hint:'अंकों को दाएँ से दो-दो में बांटो, समूह गिनो।' }
    );
  };

  window.buildSqDigitsV2Solution=function(n){
    var ans=2*n;
    return S(
      { steps:[
        step('Step 1 - Understand','<br>If the square root has '+n+' digits, how many digits does the number (its square) have?'),
        step('Step 2 - Reverse the rule','<br>Each digit of the root matches a pair of digits in the number, so '+n+' root-digits -> up to '+ans+' digits in the number.'),
        step('Step 3 - Conclude','<br>The number has '+ans+' digit(s).'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:n+' root digits -> '+ans+' number digits.', hint:'Squaring roughly doubles the number of digits.' },
      { steps:[
        step('Step 1 - Samjho','<br>Agar square root me '+n+' digits hain, to number (uska square) me kitne digits honge?'),
        step('Step 2 - Rule ulta karo','<br>Root ka har digit number me ek pair se match karta hai, toh '+n+' root-digits -> number me '+ans+' tak digits.'),
        step('Step 3 - Nishkarsh','<br>Number me '+ans+' digit(s) hain.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:n+' root digits -> '+ans+' number digits.', hint:'Square karne se digits lagbhag double ho jaate hain.' },
      { steps:[
        step('चरण 1 - समझो','<br>अगर वर्गमूल में '+n+' अंक हैं, तो संख्या (उसका वर्ग) में कितने अंक होंगे?'),
        step('चरण 2 - नियम उलटा करो','<br>मूल का हर अंक संख्या में एक जोड़े से मेल खाता है, तो '+n+' मूल-अंक -> संख्या में '+ans+' तक अंक।'),
        step('चरण 3 - निष्कर्ष','<br>संख्या में '+ans+' अंक हैं।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:n+' मूल अंक -> '+ans+' संख्या अंक।', hint:'वर्ग करने से अंक लगभग दुगुने हो जाते हैं।' }
    );
  };

  window.buildSqDigitsV3Solution=function(num,ans){
    var r=Math.sqrt(num);
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Find '+K(RT(num))+' and count its digits.'),
        step('Step 2 - Find the root','<br>'+K(RT(num)+' = '+r)+'.'),
        step('Step 3 - Count the digits','<br>'+r+' has '+ans+' digit(s).'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(RT(num)+' = '+r)+', which has '+ans+' digit(s).', hint:'Find the root first, then count its digits.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(RT(num))+' nikaalo aur uske digits gino.'),
        step('Step 2 - Root nikaalo','<br>'+K(RT(num)+' = '+r)+'.'),
        step('Step 3 - Digits gino','<br>'+r+' me '+ans+' digit(s) hain.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(RT(num)+' = '+r)+', jisme '+ans+' digit(s) hain.', hint:'Pehle root nikaalo, fir uske digits gino.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(RT(num))+' निकालो और उसके अंक गिनो।'),
        step('चरण 2 - मूल निकालो','<br>'+K(RT(num)+' = '+r)+'।'),
        step('चरण 3 - अंक गिनो','<br>'+r+' में '+ans+' अंक हैं।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:K(RT(num)+' = '+r)+', जिसमें '+ans+' अंक हैं।', hint:'पहले मूल निकालो, फिर उसके अंक गिनो।' }
    );
  };

  window.buildSqDigitsV4Solution=function(k,ans){
    var sr=Math.pow(10,k-1);
    return S(
      { steps:[
        step('Step 1 - Understand','<br>We want the smallest number whose square root has exactly '+k+' digits.'),
        step('Step 2 - Smallest root','<br>The smallest '+k+'-digit number is '+sr+' (1 followed by '+(k-1)+' zeros).'),
        step('Step 3 - Square it','<br>'+K(POW(sr,'2')+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:'Smallest '+k+'-digit root '+sr+', squared -> '+ans+'.', hint:'Smallest k-digit number is 1 with (k-1) zeros; square it.' },
      { steps:[
        step('Step 1 - Samjho','<br>Sabse chhota number chahiye jiske square root me theek '+k+' digits hon.'),
        step('Step 2 - Sabse chhota root','<br>Sabse chhota '+k+'-digit number '+sr+' hai (1 ke baad '+(k-1)+' zeros).'),
        step('Step 3 - Use square karo','<br>'+K(POW(sr,'2')+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:'Sabse chhota '+k+'-digit root '+sr+', square -> '+ans+'.', hint:'Sabse chhota k-digit number 1 ke baad (k-1) zeros; use square karo.' },
      { steps:[
        step('चरण 1 - समझो','<br>सबसे छोटी संख्या चाहिए जिसके वर्गमूल में ठीक '+k+' अंक हों।'),
        step('चरण 2 - सबसे छोटा मूल','<br>सबसे छोटी '+k+'-अंक संख्या '+sr+' है (1 के बाद '+(k-1)+' शून्य)।'),
        step('चरण 3 - इसे वर्ग करो','<br>'+K(POW(sr,'2')+' = '+ans)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+'।')
      ], shortcut:'सबसे छोटा '+k+'-अंक मूल '+sr+', वर्ग -> '+ans+'।', hint:'सबसे छोटी k-अंक संख्या 1 के बाद (k-1) शून्य; वर्ग करो।' }
    );
  };

  window.buildSqDigitsV5Solution=function(a,b,sa,sb){
    var da=String(a).length, db=String(b).length, eq=(da===db);
    var fin_en=eq?'They have an equal number of digits.':(da>db?K(RT(sa))+' has more digits.':K(RT(sb))+' has more digits.');
    var fin_hi=eq?'दोनों में अंकों की संख्या बराबर है।':(da>db?K(RT(sa))+' में अधिक अंक हैं।':K(RT(sb))+' में अधिक अंक हैं।');
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Compare how many digits '+K(RT(sa))+' and '+K(RT(sb))+' have.'),
        step('Step 2 - Find the roots','<br>'+K(RT(sa)+' = '+a)+' ('+da+' digit(s)) and '+K(RT(sb)+' = '+b)+' ('+db+' digit(s)).'),
        step('Step 3 - Compare the digit counts','<br>'+fin_en),
        step('Step 4 - Final answer','<br>'+fin_en)
      ], shortcut:eq?'Both roots have '+da+' digit(s) - equal.':'The root with more digits is '+(da>db?K(RT(sa)):K(RT(sb)))+'.', hint:'Find each root, then compare how many digits each has.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(RT(sa))+' aur '+K(RT(sb))+' me kitne digits hain, compare karo.'),
        step('Step 2 - Roots nikaalo','<br>'+K(RT(sa)+' = '+a)+' ('+da+' digit(s)) aur '+K(RT(sb)+' = '+b)+' ('+db+' digit(s)).'),
        step('Step 3 - Digit counts compare karo','<br>'+fin_en),
        step('Step 4 - Final answer','<br>'+fin_en)
      ], shortcut:eq?'Dono roots me '+da+' digit(s) - barabar.':'Zyada digits wala root '+(da>db?K(RT(sa)):K(RT(sb)))+' hai.', hint:'Har root nikaalo, fir digits compare karo.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(RT(sa))+' और '+K(RT(sb))+' में कितने अंक हैं, तुलना करो।'),
        step('चरण 2 - मूल निकालो','<br>'+K(RT(sa)+' = '+a)+' ('+da+' अंक) और '+K(RT(sb)+' = '+b)+' ('+db+' अंक)।'),
        step('चरण 3 - अंकों की संख्या की तुलना करो','<br>'+fin_hi),
        step('चरण 4 - अंतिम उत्तर','<br>'+fin_hi)
      ], shortcut:eq?'दोनों मूलों में '+da+' अंक - बराबर।':'अधिक अंक वाला मूल '+(da>db?K(RT(sa)):K(RT(sb)))+' है।', hint:'हर मूल निकालो, फिर अंकों की तुलना करो।' }
    );
  };
})();
