/* tier12 batch9 — template solve_x2 (base+variants) */
(function(){
  var H=window.QT; if(!H) return;
  var K=H.K,RT=H.RT,PM=H.PM,tri=H.tri;

  /* 68. Solve x^2 = n */
  H.base('solve_x2', function(){
    var variant=rint(0,2); var r=rint(2,20); var n=r*r;
    if(variant===0){ return {question:tri('Find all real values of x: '+K('x^{2}')+' = '+K(n)+'.','x ke sabhi real maan nikaalo: '+K('x^{2}')+' = '+K(n)+'.','x के सभी वास्तविक मान ज्ञात कीजिए: '+K('x^{2}')+' = '+K(n)+'।'),ans:K(PM+r),w:[K(r),K('-'+r),K(PM+(r+1))]}; }
    else if(variant===1){ var w=[r+1,r-1>0?r-1:r+2,r+2]; return {question:tri('Find the positive value of x: '+K('x^{2}')+' = '+K(n)+'.','x ka positive maan nikaalo: '+K('x^{2}')+' = '+K(n)+'.','x का धनात्मक मान ज्ञात कीजिए: '+K('x^{2}')+' = '+K(n)+'।'),ans:String(r),w:w.map(String)}; }
    else { var w=[r+1,r-1>0?r-1:r+2,r+2]; return {question:tri('A square plot has area '+K(n)+' m². Find the length of its side (in m).','Ek varga plot ka area '+K(n)+' m² hai. Uski bhuja ki lambai (m) nikaalo.','एक वर्गाकार प्लॉट का क्षेत्रफल '+K(n)+' m² है। उसकी भुजा की लंबाई (m) ज्ञात कीजिए।'),ans:String(r),w:w.map(String)}; }
  });
  H.vars('solve_x2',[
    function(){ var r=rint(2,25); var n=r*r; return {question:tri('Solve for all real x: '+K('x^{2}')+' = '+K(n)+'.','Sabhi real x nikaalo: '+K('x^{2}')+' = '+K(n)+'.','सभी वास्तविक x ज्ञात कीजिए: '+K('x^{2}')+' = '+K(n)+'।'),ans:K(PM+r),w:[K(r),K('-'+r),K(PM+(r+1))]}; },
    function(){ var r=rint(2,30); var n=r*r; var w=[r+1,r-1>0?r-1:r+2,r+2]; return {question:tri('If '+K('x^{2}')+' = '+K(n)+' and x > 0, find x.','Agar '+K('x^{2}')+' = '+K(n)+' aur x > 0, to x = ?','यदि '+K('x^{2}')+' = '+K(n)+' और x > 0, तो x = ?'),ans:String(r),w:w.map(String)}; },
    function(){ var r=rint(2,20); var n=r*r; return {question:tri('Solve: '+K('x^{2} - '+n)+' = 0.','Solve karo: '+K('x^{2} - '+n)+' = 0.','हल कीजिए: '+K('x^{2} - '+n)+' = 0।'),ans:K(PM+r),w:[K(r),K('-'+r),K(PM+(r+1))]}; },
    function(){ var k=rint(2,4),r=rint(2,15); var n=k*r*r; return {question:tri('Solve for all real x: '+K(k+'x^{2}')+' = '+K(n)+'.','Sabhi real x nikaalo: '+K(k+'x^{2}')+' = '+K(n)+'.','सभी वास्तविक x ज्ञात कीजिए: '+K(k+'x^{2}')+' = '+K(n)+'।'),ans:K(PM+r),w:[K(r),K('-'+r),K(PM+(r+1))]}; },
    function(){ var n=pick([2,3,5,6,7,8,10,11,12,15,18,20]); return {question:tri('Solve for all real x: '+K('x^{2}')+' = '+K(n)+'.','Sabhi real x nikaalo: '+K('x^{2}')+' = '+K(n)+'.','सभी वास्तविक x ज्ञात कीजिए: '+K('x^{2}')+' = '+K(n)+'।'),ans:K(PM+RT(n)),w:[K(RT(n)),K('-'+RT(n)),K(PM+RT(n+1))]}; }
  ]);
})();
