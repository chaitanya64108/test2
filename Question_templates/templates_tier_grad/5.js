/* tier_grad batch5 — complex_simp, ratio_roots, adv_algebra (base+variants) */
(function(){
  var H=window.QT; if(!H) return;
  var K=H.K,RT=H.RT,FR=H.FR,POW=H.POW,tri=H.tri;

  /* 85. Complex Simplification: (a-b)/(sqrt a + sqrt b) = sqrt a - sqrt b */
  H.base('complex_simp', function(){
    var pool=[2,3,5,6,7,10,11]; var a=pick(pool),b=pick(pool); while(b===a)b=pick(pool); if(a<b){var t=a;a=b;b=t;}
    var expr=K(FR(a-b, RT(a)+' + '+RT(b)));
    return {question:tri(
      'Simplify the expression '+expr+' completely. (Hint: a − b factors as (√a+√b)(√a−√b).)',
      'Is expression '+expr+' ko poori tarah simplify karo. (Hint: a − b = (√a+√b)(√a−√b).)',
      'इस व्यंजक '+expr+' को पूरी तरह सरल कीजिए। (संकेत: a − b = (√a+√b)(√a−√b)।)'
    ),ans:K(RT(a)+' - '+RT(b)),w:[K(RT(a)+' + '+RT(b)),K(RT(a-b)),K(RT(b)+' - '+RT(a))]};
  });
  H.vars('complex_simp',[
    function(){ var pool=[2,3,5,6,7,10]; var a=pick(pool),b=pick(pool); while(b===a)b=pick(pool); if(a<b){var t=a;a=b;b=t;} var expr=K('('+RT(a)+' + '+RT(b)+')^{2}'); return {question:tri('Expand and simplify '+expr+'.','Is '+expr+' ko expand karke simplify karo.','इस '+expr+' को विस्तृत करके सरल कीजिए।'),ans:K((a+b)+' + 2'+RT(a*b)),w:[K((a+b)+' - 2'+RT(a*b)),K(String(a+b)),K((a+b)+' + '+RT(a*b))]}; }
  ]);

  /* 86. Ratio System with Roots: sqrt x : sqrt y = m : n => x : y = m^2 : n^2 */
  H.base('ratio_roots', function(){
    var P=pick([[2,3],[3,4],[2,5],[3,5],[4,5],[5,6],[2,7],[3,7]]); var m=P[0],n=P[1];
    var expr=K(RT('x')+' : '+RT('y')+' = '+m+' : '+n);
    return {question:tri(
      'If '+expr+', find the ratio x : y.',
      'Agar '+expr+', to ratio x : y nikaalo.',
      'यदि '+expr+', तो अनुपात x : y ज्ञात कीजिए।'
    ),ans:String(m*m)+' : '+String(n*n),w:[String(m)+' : '+String(n),String(m*m)+' : '+String(n),String(m)+' : '+String(n*n)]};
  });
  H.vars('ratio_roots',[
    function(){ var P=pick([[2,3],[3,4],[2,5],[3,5],[4,5],[5,6]]); var p=P[0],q=P[1]; var expr=K('x : y = '+POW(p,2)+' : '+POW(q,2)); var tgt=K(RT('x')+' : '+RT('y')); return {question:tri('If '+expr+', find the ratio '+tgt+'.','Agar '+expr+', to ratio '+tgt+' nikaalo.','यदि '+expr+', तो अनुपात '+tgt+' ज्ञात कीजिए।'),ans:String(p)+' : '+String(q),w:[String(p*p)+' : '+String(q*q),String(p*p)+' : '+String(q),String(p)+' : '+String(q*q)]}; }
  ]);

  /* 87. Adv Algebra: sqrt x + 1/sqrt x = k => x + 1/x = k^2 - 2 */
  H.base('adv_algebra', function(){
    var k=rint(3,7);
    var lhs=K(RT('x')+' + '+FR(1,RT('x'))+' = '+k);
    var tgt=K('x + '+FR(1,'x'));
    return {question:tri(
      'If '+lhs+', find the value of '+tgt+'. (Hint: square both sides.)',
      'Agar '+lhs+', to '+tgt+' ki value nikaalo. (Hint: dono taraf square karo.)',
      'यदि '+lhs+', तो '+tgt+' का मान ज्ञात कीजिए। (संकेत: दोनों ओर वर्ग कीजिए।)'
    ),ans:String(k*k-2),w:[String(k*k),String(k*k+2),String(k*k-1)]};
  });
  H.vars('adv_algebra',[
    function(){ var k=rint(3,8); var lhs=K('x - '+FR(1,'x')+' = '+k); var tgt=K(POW('x',2)+' + '+FR(1,POW('x',2))); return {question:tri('If '+lhs+', find the value of '+tgt+'.','Agar '+lhs+', to '+tgt+' ki value nikaalo.','यदि '+lhs+', तो '+tgt+' का मान ज्ञात कीजिए।'),ans:String(k*k+2),w:[String(k*k-2),String(k*k),String(k*k+1)]}; }
  ]);
})();
