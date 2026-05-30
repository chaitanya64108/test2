/* tier_grad batch6 — tricky_pattern, speed_trick (base+variants) */
(function(){
  var H=window.QT; if(!H) return;
  var K=H.K,RT=H.RT,POW=H.POW,T=H.T,B=H.B,tri=H.tri;

  /* 88. Tricky Pattern: sqrt(n(n+1)(n+2)(n+3)+1) = n^2+3n+1 */
  H.base('tricky_pattern', function(){
    var n=rint(2,8); var a=n,b=n+1,c=n+2,d=n+3;
    var expr=K(RT(a+T+b+T+c+T+d+' + 1'));
    return {question:tri(
      'Spot the pattern and find the exact value of '+expr+'. (Hint: product of four consecutive numbers, plus 1, is always a perfect square.)',
      'Pattern pehchaan kar '+expr+' ki exact value nikaalo. (Hint: chaar lagataar numbers ka product + 1 hamesha perfect square hota hai.)',
      'पैटर्न पहचान कर '+expr+' का सही मान ज्ञात कीजिए। (संकेत: चार लगातार संख्याओं का गुणनफल + 1 हमेशा पूर्ण वर्ग होता है।)'
    ),ans:String(n*n+3*n+1),w:[String(n*n+3*n),String(n*n+3*n+2),String((n+1)*(n+1))]};
  });
  H.vars('tricky_pattern',[
    function(){ var n=rint(4,10); var expr=K(RT('1 + 3 + 5 + '+B+'cdots + '+(2*n-1))); return {question:tri('Find the square root of this sum: '+expr+'. (Hint: the sum of the first n odd numbers equals n².)','Is sum ka square root nikaalo: '+expr+'. (Hint: pehli n vishm sankhya ka sum = n².)','इस योग का वर्गमूल ज्ञात कीजिए: '+expr+'। (संकेत: पहली n विषम संख्याओं का योग = n²।)'),ans:String(n),w:[String(2*n-1),String(n+1),String(n*n)]}; }
  ]);

  /* 89. Speed Trick: square of a number ending in 5 => d(d+1) | 25 */
  H.base('speed_trick', function(){
    var d=rint(1,9); var N=10*d+5; var sq=N*N;
    var expr=K(POW(N,2));
    return {question:tri(
      'Use the speed trick for numbers ending in 5 to quickly find '+expr+'. (Trick: take the tens digit d, compute d×(d+1), then attach 25.)',
      'Ant me 5 wali numbers ki speed trick se '+expr+' ko jaldi nikaalo. (Trick: tens digit d lo, d×(d+1) karo, phir 25 jodo.)',
      'अंत में 5 वाली संख्याओं की स्पीड ट्रिक से '+expr+' का मान शीघ्र ज्ञात कीजिए। (ट्रिक: दहाई का अंक d लें, d×(d+1) करें, फिर 25 जोड़ें।)'
    ),ans:String(sq),w:[String(sq+100),String(sq-50),String(d*d*100+25)]};
  });
  H.vars('speed_trick',[
    function(){ var t=rint(11,40); var sq=t*t; var expr=K(RT(sq)); return {question:tri('Quickly find the value of '+expr+' (it is a perfect square).','Jaldi se '+expr+' ka maan nikaalo (yeh perfect square hai).','शीघ्रता से '+expr+' का मान ज्ञात कीजिए (यह एक पूर्ण वर्ग है)।'),ans:String(t),w:[String(t+1),String(t-1),String(t+2)]}; }
  ]);
})();
