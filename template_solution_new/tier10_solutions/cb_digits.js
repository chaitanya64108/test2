/* tier10 - Template 33: cb_digits (Digits in Cube Root)
   Rule: group the number's digits in 3s from the right; #groups = digits in cube root.
   buildCbDigitsSolution(num,ans)        -> concrete number
   buildCbDigitsRangeSolution(lo,hi,ans) -> number lies in a range / fixed digit count
   buildCbDigitsInvSolution(n,ans)       -> cube root has n digits -> original at most 3n
   buildCbDigitsSmallestSolution(k,ans)  -> smallest number whose cube root has k digits */
(function(){
  var SB=window.SB; if(!SB) return;
  var K=SB.K,CRT=SB.CRT,POW=SB.POW,B=SB.B,step=SB.step,S=SB.S;

  window.buildCbDigitsSolution=function(num,ans){
    var D=String(num).length;
    return S(
      { steps:[
        step('Step 1 - The rule','<br>To find the digits in a cube root, group the number\'s digits into sets of 3 starting from the right. The number of groups = digits in the cube root.'),
        step('Step 2 - Count the digits','<br>'+K(num)+' has '+K(D)+' digits.'),
        step('Step 3 - Make groups of 3','<br>'+K(D)+' digits make '+K(ans)+' group(s) of three (the leftmost group may be short).'),
        step('Step 4 - Answer','<br>So '+K(CRT(num))+' has '+K(ans)+' digit(s).')
      ], shortcut:'Digits in cube root = number of 3-digit groups from the right = '+K(ans)+'.', hint:'Group the digits in threes from the right and count the groups.' },
      { steps:[
        step('Step 1 - Rule','<br>Cube root mein digits nikalne ke liye, number ke digits ko right se 3-3 ke groups mein baanto. Groups ki ginti = cube root ke digits.'),
        step('Step 2 - Digits gino','<br>'+K(num)+' mein '+K(D)+' digits hain.'),
        step('Step 3 - 3-3 ke groups banao','<br>'+K(D)+' digits se '+K(ans)+' group(s) bante hain (sabse left wala group chhota ho sakta hai).'),
        step('Step 4 - Answer','<br>Toh '+K(CRT(num))+' mein '+K(ans)+' digit(s) honge.')
      ], shortcut:'Cube root ke digits = right se 3-digit groups ki ginti = '+K(ans)+'.', hint:'Digits ko right se 3-3 mein baanto aur groups gino.' },
      { steps:[
        step('चरण 1 - नियम','<br>घनमूल में अंक निकालने के लिए, संख्या के अंकों को दाएँ से 3-3 के समूहों में बाँटो। समूहों की संख्या = घनमूल के अंक।'),
        step('चरण 2 - अंक गिनो','<br>'+K(num)+' में '+K(D)+' अंक हैं।'),
        step('चरण 3 - 3-3 के समूह बनाओ','<br>'+K(D)+' अंकों से '+K(ans)+' समूह बनते हैं (सबसे बाएँ वाला समूह छोटा हो सकता है)।'),
        step('चरण 4 - उत्तर','<br>तो '+K(CRT(num))+' में '+K(ans)+' अंक होंगे।')
      ], shortcut:'घनमूल के अंक = दाएँ से 3-अंक समूहों की संख्या = '+K(ans)+'।', hint:'अंकों को दाएँ से 3-3 में बाँटो और समूह गिनो।' }
    );
  };

  window.buildCbDigitsRangeSolution=function(lo,hi,ans){
    var dLo=String(lo).length, dHi=String(hi).length;
    return S(
      { steps:[
        step('Step 1 - The rule','<br>Group a number\'s digits into sets of 3 from the right. The number of groups = digits in its cube root.'),
        step('Step 2 - Digit count of the range','<br>The numbers range from '+K(lo)+' ('+K(dLo)+' digits) to '+K(hi)+' ('+K(dHi)+' digits).'),
        step('Step 3 - Group into 3s','<br>Every number in this range makes '+K(ans)+' group(s) of three digits.'),
        step('Step 4 - Answer','<br>So the cube root has '+K(ans)+' digit(s).')
      ], shortcut:'Digits of any number here, grouped in 3s, give '+K(ans)+' groups, so the cube root has '+K(ans)+' digits.', hint:'Use the digit count, then divide by 3 and round up.' },
      { steps:[
        step('Step 1 - Rule','<br>Number ke digits ko right se 3-3 ke groups mein baanto. Groups ki ginti = cube root ke digits.'),
        step('Step 2 - Range ke digits','<br>Numbers '+K(lo)+' ('+K(dLo)+' digits) se '+K(hi)+' ('+K(dHi)+' digits) tak hain.'),
        step('Step 3 - 3-3 mein baanto','<br>Is range ka har number '+K(ans)+' group(s) banata hai.'),
        step('Step 4 - Answer','<br>Toh cube root mein '+K(ans)+' digit(s) honge.')
      ], shortcut:'Yahan kisi bhi number ke digits 3-3 mein baantne par '+K(ans)+' groups, toh cube root mein '+K(ans)+' digits.', hint:'Digit count lo, fir 3 se divide karke upar round karo.' },
      { steps:[
        step('चरण 1 - नियम','<br>संख्या के अंकों को दाएँ से 3-3 के समूहों में बाँटो। समूहों की संख्या = घनमूल के अंक।'),
        step('चरण 2 - रेंज के अंक','<br>संख्याएँ '+K(lo)+' ('+K(dLo)+' अंक) से '+K(hi)+' ('+K(dHi)+' अंक) तक हैं।'),
        step('चरण 3 - 3-3 में बाँटो','<br>इस रेंज की हर संख्या '+K(ans)+' समूह बनाती है।'),
        step('चरण 4 - उत्तर','<br>तो घनमूल में '+K(ans)+' अंक होंगे।')
      ], shortcut:'यहाँ किसी भी संख्या के अंक 3-3 में बाँटने पर '+K(ans)+' समूह, तो घनमूल में '+K(ans)+' अंक।', hint:'अंकों की संख्या लो, फिर 3 से भाग देकर ऊपर round करो।' }
    );
  };

  window.buildCbDigitsInvSolution=function(n,ans){
    var lo=POW(10,String(n-1)), hi=POW(10,String(n))+' - 1';
    return S(
      { steps:[
        step('Step 1 - Understand','<br>We know the cube root has '+K(n)+' digits. We want the maximum digits of the original (cubed) number.'),
        step('Step 2 - Range of the cube root','<br>A '+K(n)+'-digit number lies from '+K(lo)+' up to '+K(hi)+'.'),
        step('Step 3 - Cube the largest','<br>Cubing the largest '+K(n)+'-digit value stays just below '+K(POW(10,String(3*n)))+', which has '+K(3*n)+' digits.'),
        step('Step 4 - Answer','<br>So the original number has at most '+K(ans)+' digits.')
      ], shortcut:'Max digits of the number = '+K('3 '+B+'times '+n+' = '+ans)+'.', hint:'Multiply the cube-root digit count by 3 for the maximum.' },
      { steps:[
        step('Step 1 - Samjho','<br>Cube root mein '+K(n)+' digits hain. Hamein original (cubed) number ke maximum digits chahiye.'),
        step('Step 2 - Cube root ki range','<br>'+K(n)+'-digit number '+K(lo)+' se '+K(hi)+' tak hota hai.'),
        step('Step 3 - Sabse bade ka cube','<br>Sabse bade '+K(n)+'-digit value ko cube karne par '+K(POW(10,String(3*n)))+' se thoda neeche rehta hai, jiske '+K(3*n)+' digits hain.'),
        step('Step 4 - Answer','<br>Toh original number mein zyada se zyada '+K(ans)+' digits honge.')
      ], shortcut:'Number ke max digits = '+K('3 '+B+'times '+n+' = '+ans)+'.', hint:'Cube-root ke digit count ko 3 se multiply karo maximum ke liye.' },
      { steps:[
        step('चरण 1 - समझो','<br>घनमूल में '+K(n)+' अंक हैं। हमें मूल (cubed) संख्या के अधिकतम अंक चाहिए।'),
        step('चरण 2 - घनमूल की रेंज','<br>'+K(n)+'-अंकीय संख्या '+K(lo)+' से '+K(hi)+' तक होती है।'),
        step('चरण 3 - सबसे बड़े का घन','<br>सबसे बड़े '+K(n)+'-अंकीय मान का घन '+K(POW(10,String(3*n)))+' से थोड़ा नीचे रहता है, जिसमें '+K(3*n)+' अंक हैं।'),
        step('चरण 4 - उत्तर','<br>तो मूल संख्या में अधिकतम '+K(ans)+' अंक होंगे।')
      ], shortcut:'संख्या के अधिकतम अंक = '+K('3 '+B+'times '+n+' = '+ans)+'।', hint:'घनमूल के अंक को 3 से गुणा करो अधिकतम के लिए।' }
    );
  };

  window.buildCbDigitsSmallestSolution=function(k,ans){
    var smallest=POW(10,String(k-1));
    return S(
      { steps:[
        step('Step 1 - Understand','<br>We want the smallest number whose cube root has exactly '+K(k)+' digits.'),
        step('Step 2 - Smallest cube root','<br>The smallest '+K(k)+'-digit number is '+K(smallest)+'.'),
        step('Step 3 - Cube it','<br>'+K('('+smallest+')^{3} = '+POW(10,String(3*(k-1)))+' = '+ans)+'.'),
        step('Step 4 - Answer','<br>Any smaller number gives a cube root with fewer digits, so the answer is '+K(ans)+'.')
      ], shortcut:K('('+smallest+')^{3} = '+ans)+'.', hint:'Cube the smallest k-digit number, '+K(smallest)+'.' },
      { steps:[
        step('Step 1 - Samjho','<br>Hamein sabse chhota number chahiye jiske cube root mein theek '+K(k)+' digits hon.'),
        step('Step 2 - Sabse chhota cube root','<br>Sabse chhota '+K(k)+'-digit number '+K(smallest)+' hai.'),
        step('Step 3 - Cube karo','<br>'+K('('+smallest+')^{3} = '+POW(10,String(3*(k-1)))+' = '+ans)+'.'),
        step('Step 4 - Answer','<br>Isse chhota koi number cube root mein kam digits dega, toh answer '+K(ans)+' hai.')
      ], shortcut:K('('+smallest+')^{3} = '+ans)+'.', hint:'Sabse chhote k-digit number '+K(smallest)+' ka cube karo.' },
      { steps:[
        step('चरण 1 - समझो','<br>हमें सबसे छोटी संख्या चाहिए जिसके घनमूल में ठीक '+K(k)+' अंक हों।'),
        step('चरण 2 - सबसे छोटा घनमूल','<br>सबसे छोटा '+K(k)+'-अंकीय संख्या '+K(smallest)+' है।'),
        step('चरण 3 - घन करो','<br>'+K('('+smallest+')^{3} = '+POW(10,String(3*(k-1)))+' = '+ans)+'।'),
        step('चरण 4 - उत्तर','<br>इससे छोटी कोई संख्या घनमूल में कम अंक देगी, तो उत्तर '+K(ans)+' है।')
      ], shortcut:K('('+smallest+')^{3} = '+ans)+'।', hint:'सबसे छोटे '+K(k)+'-अंकीय संख्या '+K(smallest)+' का घन करो।' }
    );
  };
})();
