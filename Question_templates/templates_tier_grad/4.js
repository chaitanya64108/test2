/* tier_grad batch4 — opt_min, cont_frac, alg_identity (base+variants) */
(function(){
  var H=window.QT; if(!H) return;
  var K=H.K,RT=H.RT,FR=H.FR,B=H.B,tri=H.tri;

  /* 82. Optimization Min Value: min of x + n/x (x>0) = 2 sqrt n */
  H.base('opt_min', function(){
    var n=pick([2,3,5,6,7,8,10]);
    var expr=K('x + '+FR(n,'x'));
    return {question:tri(
      'For x > 0, find the minimum possible value of '+expr+'. (Hint: use AM–GM, equality at x = √n.)',
      'x > 0 ke liye, '+expr+' ka minimum value nikaalo. (Hint: AM–GM use karo, equality x = √n par.)',
      'x > 0 के लिए, '+expr+' का न्यूनतम (minimum) मान ज्ञात कीजिए। (संकेत: AM–GM से, समानता x = √n पर।)'
    ),ans:K('2'+RT(n)),w:[K('2'+RT(n+1)),K(RT(n)),String(n)]};
  });
  H.vars('opt_min',[
    function(){ var P=pick([[2,8,8],[2,2,4],[5,5,10],[4,9,12],[2,18,12]]); var a=P[0],b=P[1],t=P[2]; var expr=K(a+'x + '+FR(b,'x')); return {question:tri('For x > 0, find the minimum possible value of '+expr+'.','x > 0 ke liye, '+expr+' ka minimum value nikaalo.','x > 0 के लिए, '+expr+' का न्यूनतम मान ज्ञात कीजिए।'),ans:String(t),w:[String(t+2),String(t-2),String(2*t)]}; }
  ]);

  /* 83. Continued Fraction: a + 1/(a + 1/(a + ...)) = (a + sqrt(a^2+4))/2 */
  H.base('cont_frac', function(){
    var a=rint(1,5); var D=a*a+4;
    var expr=K(a+' + '+FR(1, a+' + '+FR(1, a+' + '+B+'cdots')));
    return {question:tri(
      'Find the value of the infinite continued fraction '+expr+'.',
      'Is infinite continued fraction '+expr+' ki value nikaalo.',
      'इस अनंत सतत भिन्न (continued fraction) '+expr+' का मान ज्ञात कीजिए।'
    ),ans:K(FR(a+' + '+RT(D),2)),w:[K(FR(a+' - '+RT(D),2)),K(RT(D)),K(FR(a,2))]};
  });
  H.vars('cont_frac',[
    function(){ var a=rint(3,6); var D=a*a-4; var expr=K(a+' - '+FR(1, a+' - '+FR(1, a+' - '+B+'cdots'))); return {question:tri('Find the smaller value of the infinite continued fraction '+expr+'.','Is infinite continued fraction '+expr+' ki chhoti value nikaalo.','इस अनंत सतत भिन्न '+expr+' का छोटा मान ज्ञात कीजिए।'),ans:K(FR(a+' - '+RT(D),2)),w:[K(FR(a+' + '+RT(D),2)),K(RT(D)),K(FR(a,2))]}; }
  ]);

  /* 84. Algebraic Identity Root: x = sqrt a + sqrt(a-1) => x + 1/x = 2 sqrt a */
  H.base('alg_identity', function(){
    var a=pick([2,3,5,6,7,8,10]);
    var xe=K('x = '+RT(a)+' + '+RT(a-1));
    var tgt=K('x + '+FR(1,'x'));
    return {question:tri(
      'Given '+xe+', find the exact value of '+tgt+'. (Hint: 1/x rationalizes neatly.)',
      'Diya gaya '+xe+', '+tgt+' ki exact value nikaalo. (Hint: 1/x saaf rationalize ho jata hai.)',
      'दिया गया '+xe+', '+tgt+' का सही मान ज्ञात कीजिए। (संकेत: 1/x साफ rationalize हो जाता है।)'
    ),ans:K('2'+RT(a)),w:[K('2'+RT(a-1)),K(RT(a)),K('2'+RT(a+1))]};
  });
  H.vars('alg_identity',[
    function(){ var a=pick([2,3,5,6,7,8,10]); var xe=K('x = '+RT(a)+' + '+RT(a-1)); var tgt=K(FR(1,'x')); return {question:tri('Given '+xe+', find the exact value of '+tgt+' (that is, 1/x).','Diya gaya '+xe+', '+tgt+' (yaani 1/x) ki exact value nikaalo.','दिया गया '+xe+', '+tgt+' (यानी 1/x) का सही मान ज्ञात कीजिए।'),ans:K(RT(a)+' - '+RT(a-1)),w:[K(RT(a)+' + '+RT(a-1)),K('2'+RT(a)),K(RT(a-1)+' - '+RT(a))]}; }
  ]);
})();
