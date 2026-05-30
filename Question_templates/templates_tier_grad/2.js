/* tier_grad batch2 — complex_nested_diff, complex_surd_sum, inf_eq (base+variants) */
(function(){
  var H=window.QT; if(!H) return;
  var K=H.K,RT=H.RT,B=H.B,tri=H.tri;

  /* 76. Complex Nested Diff: sqrt(N+2 sqrt M) - sqrt(N-2 sqrt M) = 2 sqrt q */
  H.base('complex_nested_diff', function(){
    var v=rint(1,2); var p = v===1 ? pick([2,3,5,6,7]) : pick([5,6,7]);
    var q=v*v, N=p+q, M=p*q;
    var expr=K(RT(N+' + 2'+RT(M))+' - '+RT(N+' - 2'+RT(M)));
    return {question:tri(
      'Find the exact value of '+expr+'. (Hint: each radical opens up as √p ± √q.)',
      'Iski exact value nikaalo: '+expr+'. (Hint: har root √p ± √q ke roop me khulta hai.)',
      'इसका सही मान ज्ञात कीजिए: '+expr+'। (संकेत: हर रूट √p ± √q के रूप में खुलता है।)'
    ),ans:String(2*v),w:[K('2'+RT(p)),String(v),String(2*v+2)]};
  });
  H.vars('complex_nested_diff',[
    function(){ var pool=[2,3,5,6,7,8,10]; var p=pick(pool),q=pick(pool); while(q===p)q=pick(pool); if(p<q){var t=p;p=q;q=t;} var N=p+q,M=p*q; var expr=K(RT(N+' + 2'+RT(M))+' - '+RT(N+' - 2'+RT(M))); return {question:tri('Simplify '+expr+' to a single surd of the form 2√m.','Is '+expr+' ko 2√m form ke single surd me simplify karo.','इस '+expr+' को 2√m रूप के एक सर्ड में सरल कीजिए।'),ans:K('2'+RT(q)),w:[K('2'+RT(p)),K(RT(q)),K('2'+RT(p+q))]}; }
  ]);

  /* 77. Complex Surd Sum: sqrt(N+2 sqrt M) + sqrt(N-2 sqrt M) = 2 sqrt p */
  H.base('complex_surd_sum', function(){
    var u=rint(2,3); var p=u*u; var q = u===2 ? pick([2,3]) : pick([2,3,5,6,7,8]);
    var N=p+q, M=p*q;
    var expr=K(RT(N+' + 2'+RT(M))+' + '+RT(N+' - 2'+RT(M)));
    return {question:tri(
      'Find the exact value of '+expr+'. (Hint: the two roots are √p + √q and √p − √q.)',
      'Iski exact value nikaalo: '+expr+'. (Hint: dono root √p + √q aur √p − √q hain.)',
      'इसका सही मान ज्ञात कीजिए: '+expr+'। (संकेत: दोनों रूट √p + √q और √p − √q हैं।)'
    ),ans:String(2*u),w:[K('2'+RT(q)),String(u),String(2*u+1)]};
  });
  H.vars('complex_surd_sum',[
    function(){ var p=pick([2,3,5,6,7,8,10]); var q=1,N=p+1,M=p; var expr=K(RT(N+' + 2'+RT(M))+' + '+RT(N+' - 2'+RT(M))); return {question:tri('Simplify '+expr+' to a single surd of the form 2√m.','Is '+expr+' ko 2√m form ke single surd me simplify karo.','इस '+expr+' को 2√m रूप के एक सर्ड में सरल कीजिए।'),ans:K('2'+RT(p)),w:[K('2'+RT(p+1)),K(RT(p)),String(2)]}; }
  ]);

  /* 78. Infinite Equation: sqrt(x + sqrt(x + ...)) = k  => x = k(k-1) */
  H.base('inf_eq', function(){
    var k=rint(3,7); var x=k*(k-1);
    var eq=K(RT('x + '+RT('x + '+RT('x + '+B+'cdots')))+' = '+k);
    return {question:tri(
      'The infinite nested radical '+eq+' holds true. Find the value of x.',
      'Yeh infinite nested radical '+eq+' sahi hai. x ki value nikaalo.',
      'यह अनंत नेस्टेड रेडिकल '+eq+' सही है। x का मान ज्ञात कीजिए।'
    ),ans:String(x),w:[String(k*k),String(k*k+k),String(k)]};
  });
  H.vars('inf_eq',[
    function(){ var n=rint(3,7); var a=n*(n-1); var eq=K('x = '+RT(a+' + '+RT(a+' + '+RT(a+' + '+B+'cdots')))); return {question:tri('Given '+eq+', find the value of x.','Diya gaya '+eq+', x ki value nikaalo.','दिया गया '+eq+', x का मान ज्ञात कीजिए।'),ans:String(n),w:[String(n+1),String(n-1),String(a)]}; }
  ]);
})();
