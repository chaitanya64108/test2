/* tier_grad batch1 — nested_sq(73), double_nested(74) base+variants */
(function(){
  var H=window.QT; if(!H) return;
  var K=H.K,RT=H.RT,tri=H.tri;

  /* 73. Nested Square Root: sqrt(m+n+2sqrt(mn)) = sqrt(m)+sqrt(n) */
  H.base('nested_sq', function(){
    var pool=[2,3,5,6,7,10,11,13];
    var m=pick(pool), n=pick(pool); while(n===m) n=pick(pool);
    var S=m+n, P=m*n;
    var q=K(RT(S+' + 2'+RT(P)));
    return {question:tri(
      'Simplify the nested square root '+q+'. Method: rewrite the inside as a perfect square, since m + n + 2√(mn) = (√m + √n)². So the answer is √m + √n.',
      'Is nested square root ko simplify karo: '+q+'. Tarika: andar wale ko perfect square ki tarah likho, kyunki m + n + 2√(mn) = (√m + √n)². Toh answer hai √m + √n.',
      'इस nested square root को सरल कीजिए: '+q+'। विधि: अंदर वाले को पूर्ण वर्ग के रूप में लिखें, क्योंकि m + n + 2√(mn) = (√m + √n)²। अतः उत्तर है √m + √n।'
    ),ans:K(RT(m)+' + '+RT(n)),w:[K(RT(S)),K(RT(m)+' - '+RT(n)),K(RT(P))]};
  });
  H.vars('nested_sq',[
    function(){ var pool=[2,3,5,6,7,10,11,13]; var m=pick(pool),n=pick(pool); while(n===m)n=pick(pool); if(m<n){var t=m;m=n;n=t;} var S=m+n,P=m*n; var q=K(RT(S+' - 2'+RT(P))); return {question:tri('Simplify '+q+'. Here m + n − 2√(mn) = (√m − √n)² with m > n, so the answer is √m − √n.','Simplify karo '+q+'. Yahan m + n − 2√(mn) = (√m − √n)² jahan m > n, toh answer hai √m − √n.','सरल कीजिए '+q+'। यहाँ m + n − 2√(mn) = (√m − √n)², जहाँ m > n, अतः उत्तर है √m − √n।'),ans:K(RT(m)+' - '+RT(n)),w:[K(RT(n)+' - '+RT(m)),K(RT(S)),K(RT(m)+' + '+RT(n))]}; },
    function(){ var sq=pick([4,9,16,25]); var ns=pick([2,3,5,6,7,10,11]); var S=sq+ns,P=sq*ns; var rm=Math.sqrt(sq); var q=K(RT(S+' + 2'+RT(P))); return {question:tri('Simplify '+q+' and give the answer in simplest form (one term becomes a whole number).','Simplify karo '+q+' aur answer simplest form me do (ek term whole number ban jaata hai).','सरल कीजिए '+q+' और उत्तर सरलतम रूप में दीजिए (एक पद पूर्ण संख्या बन जाता है)।'),ans:K(rm+' + '+RT(ns)),w:[K(rm+' + '+RT(P)),K((rm+1)+' + '+RT(ns)),K(rm+' - '+RT(ns))]}; },
    function(){ var pool=[2,3,5,6,7,10]; var a=pick(pool),b=pick(pool); while(b===a)b=pick(pool); var sum=a+b,prod=a*b; var q=K('('+RT(a)+' + '+RT(b)+')^{2}'); return {question:tri('Expand '+q+' and write it in the form p + q√r.','Expand karo '+q+' aur ise p + q√r form me likho.','विस्तार कीजिए '+q+' और इसे p + q√r रूप में लिखिए।'),ans:K(sum+' + 2'+RT(prod)),w:[K(sum+' + '+RT(prod)),K(sum+' - 2'+RT(prod)),K((a+b)+' + 2'+RT(a+b))]}; }
  ]);

  /* 74. Double Nested Root: sqrt(a+2sqrt(b))+sqrt(a-2sqrt(b)) = 2sqrt(m), a=m+n b=mn m>n */
  H.base('double_nested', function(){
    var bigs=[5,6,7,10,12,13], smalls=[2,3,4];
    var m=pick(bigs), n=pick(smalls);
    var a=m+n, b=m*n;
    var q1=K(RT(a+' + 2'+RT(b))), q2=K(RT(a+' - 2'+RT(b)));
    return {question:tri(
      'Find the value of '+q1+' + '+q2+'. Method: each part is a perfect-square surd — a + 2√b = (√m + √n)² and a − 2√b = (√m − √n)². Adding them, the √n cancels and you get 2√m.',
      'Value nikaalo: '+q1+' + '+q2+'. Tarika: dono part perfect-square surd hain — a + 2√b = (√m + √n)² aur a − 2√b = (√m − √n)². Jodne par √n cancel ho jaata hai aur milta hai 2√m.',
      'मान ज्ञात कीजिए: '+q1+' + '+q2+'। विधि: दोनों भाग पूर्ण-वर्ग करणी हैं — a + 2√b = (√m + √n)² और a − 2√b = (√m − √n)²। जोड़ने पर √n कट जाता है और मिलता है 2√m।'
    ),ans:K('2'+RT(m)),w:[K('2'+RT(n)),K(RT(m)+' + '+RT(n)),K('2'+RT(a))]};
  });
  H.vars('double_nested',[
    function(){ var bigs=[5,6,7,10,12,13],smalls=[2,3]; var m=pick(bigs),n=pick(smalls); var a=m+n,b=m*n; var q1=K(RT(a+' + 2'+RT(b))),q2=K(RT(a+' - 2'+RT(b))); return {question:tri('Find the value of '+q1+' − '+q2+'. (Subtracting, the √m cancels and you get 2√n.)','Value nikaalo: '+q1+' − '+q2+'. (Ghatane par √m cancel hota hai aur milta hai 2√n.)','मान ज्ञात कीजिए: '+q1+' − '+q2+'। (घटाने पर √m कट जाता है और मिलता है 2√n।)'),ans:K('2'+RT(n)),w:[K('2'+RT(m)),K(RT(m)+' - '+RT(n)),K('2'+RT(a))]}; },
    function(){ var bigs=[5,6,7,10,11,13],smalls=[2,3]; var m=pick(bigs),n=pick(smalls); var a=m+n,b=m*n; var q=K(RT(a+' + 2'+RT(b))); return {question:tri('Simplify the nested radical '+q+' (write as √m + √n).','Is nested radical ko simplify karo: '+q+' (√m + √n ki tarah likho).','इस nested radical को सरल कीजिए: '+q+' (√m + √n के रूप में लिखें)।'),ans:K(RT(m)+' + '+RT(n)),w:[K('2'+RT(m)),K(RT(a)),K(RT(m)+' - '+RT(n))]}; }
  ]);
})();
