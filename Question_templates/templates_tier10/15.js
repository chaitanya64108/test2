/* tier10 batch12 — template sq_formula_rule (base+variants) — last tier10 template */
(function(){
  var H=window.QT; if(!H) return;
  var K=H.K,RT=H.RT,CRT=H.CRT,tri=H.tri;

  function wr(d){ var w=[]; var cand=shuffle([d-1,d+1,d+2,d+3,d+4].filter(function(x){return x>0;})); for(var i=0;i<cand.length&&w.length<3;i++){ if(cand[i]!==d&&w.indexOf(cand[i])<0) w.push(cand[i]); } var k=1; while(w.length<3){ var v=d+k; if(v!==d&&w.indexOf(v)<0) w.push(v); k++; } return w.map(String); }

  /* 44. Formula / Digit-count Rules */
  H.base('sq_formula_rule', function(){
    var variant=rint(0,3); var en,hing,hi,ans,sol;
    if(variant===0){ var n0=rint(2,6); ans=Math.ceil(n0/2); en='A whole number has '+K(n0)+' digits. How many digits will its square root have?'; hing=K(n0)+'-digit number ke square root mein kitne digits honge?'; hi=K(n0)+'-अंकीय संख्या के वर्गमूल में कितने अंक होंगे?'; sol=window.buildRootDigitRuleSolution(n0,'sqrt',ans); }
    else if(variant===1){ var n1=rint(2,6); ans=Math.ceil(n1/3); en='A whole number has '+K(n1)+' digits. How many digits will its cube root have?'; hing=K(n1)+'-digit number ke cube root mein kitne digits honge?'; hi=K(n1)+'-अंकीय संख्या के घनमूल में कितने अंक होंगे?'; sol=window.buildRootDigitRuleSolution(n1,'cbrt',ans); }
    else if(variant===2){ var root2=rint(4,99); var num2=root2*root2; ans=String(root2).length; en='How many digits does '+K(RT(num2))+' have?'; hing=K(RT(num2))+' mein kitne digits hain?'; hi=K(RT(num2))+' में कितने अंक हैं?'; sol=window.buildRootValueDigitsSolution(num2,root2,'sqrt',ans); }
    else { var root3=rint(2,20); var num3=root3*root3*root3; ans=String(root3).length; en='How many digits does '+K(CRT(num3))+' have?'; hing=K(CRT(num3))+' mein kitne digits hain?'; hi=K(CRT(num3))+' में कितने अंक हैं?'; sol=window.buildRootValueDigitsSolution(num3,root3,'cbrt',ans); }
    return {question:tri(en,hing,hi),ans:String(ans),w:wr(ans),solution:sol};
  });
  H.vars('sq_formula_rule',[
    function(){ var n=rint(2,6); var d=Math.ceil(n/2); return {question:tri('A number has '+K(n)+' digits. How many digits will its square root have?',K(n)+'-digit number ke square root mein kitne digits?',K(n)+'-अंकीय संख्या के वर्गमूल में कितने अंक?'),ans:String(d),w:wr(d),solution:window.buildRootDigitRuleSolution(n,'sqrt',d)}; },
    function(){ var n=rint(2,6); var d=Math.ceil(n/3); return {question:tri('A number has '+K(n)+' digits. How many digits will its cube root have?',K(n)+'-digit number ke cube root mein kitne digits?',K(n)+'-अंकीय संख्या के घनमूल में कितने अंक?'),ans:String(d),w:wr(d),solution:window.buildRootDigitRuleSolution(n,'cbrt',d)}; },
    function(){ var root=rint(4,99); var num=root*root; var d=String(root).length; return {question:tri('How many digits does '+K(RT(num))+' have?',K(RT(num))+' mein kitne digits hain?',K(RT(num))+' में कितने अंक हैं?'),ans:String(d),w:wr(d),solution:window.buildRootValueDigitsSolution(num,root,'sqrt',d)}; },
    function(){ var root=rint(2,20); var num=root*root*root; var d=String(root).length; return {question:tri('How many digits does '+K(CRT(num))+' have?',K(CRT(num))+' mein kitne digits hain?',K(CRT(num))+' में कितने अंक हैं?'),ans:String(d),w:wr(d),solution:window.buildRootValueDigitsSolution(num,root,'cbrt',d)}; },
    function(){ var k=rint(3,7); var ans=2*k-1; return {question:tri('When a '+K(k)+'-digit number is squared, the result has either (2k−1) or 2k digits. What is the minimum number of digits in the square of a '+K(k)+'-digit number?','Ek '+K(k)+'-digit number ko square karne par result mein (2k−1) ya 2k digits hote hain. '+K(k)+'-digit number ke square mein kam se kam kitne digits honge?',K(k)+'-अंकीय संख्या का वर्ग करने पर (2k−1) या 2k अंक होते हैं। कम से कम कितने अंक होंगे?'),ans:String(ans),w:[String(2*k),String(2*k+1),String(k)],solution:window.buildSquareDigitsMinSolution(k,ans)}; }
  ]);
})();
