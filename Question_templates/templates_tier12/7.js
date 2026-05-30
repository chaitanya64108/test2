/* tier12 batch7 — templates compare_sq_cb, sq_prop_app, sq_unit_pattern (base+variants) */
(function(){
  var H=window.QT; if(!H) return;
  var K=H.K,RT=H.RT,CRT=H.CRT,FR=H.FR,POW=H.POW,T=H.T,tri=H.tri;
  function cbrt(x){ return Math.pow(x,1/3); }

  /* 62. Compare √ vs ∛ */
  H.base('compare_sq_cb', function(){
    for(var i=0;i<40;i++){ var a=rint(4,50),b=rint(8,120); var va=Math.sqrt(a),vb=cbrt(b); if(Math.abs(va-vb)<0.2) continue; var A=K(RT(a)),B=K(CRT(b)); var ans=va>vb?A:B,lo=va>vb?B:A; return {question:tri('Which is greater: '+A+' or '+B+'?','Bada kaun: '+A+' ya '+B+'?','बड़ा कौन: '+A+' या '+B+'?'),ans:ans,w:[lo,'Equal','Cannot determine']}; }
    var A=K(RT(16)),B=K(CRT(27)); return {question:tri('Which is greater: '+A+' or '+B+'?','Bada kaun: '+A+' ya '+B+'?','बड़ा कौन: '+A+' या '+B+'?'),ans:A,w:[B,'Equal','Cannot determine']};
  });
  H.vars('compare_sq_cb',[
    function(){ var p=rint(2,9),q=rint(2,7); while(p===q)q=rint(2,7); var A=K(RT(p*p)),B=K(CRT(q*q*q)); var ans=p>q?A:B,lo=p>q?B:A; return {question:tri('Which is greater: '+A+' or '+B+'?','Bada kaun: '+A+' ya '+B+'?','बड़ा कौन: '+A+' या '+B+'?'),ans:ans,w:[lo,'Equal','Cannot determine']}; },
    function(){ for(var i=0;i<40;i++){ var a=rint(20,90),b=rint(20,200); var va=Math.sqrt(a),vb=cbrt(b); if(Math.abs(va-vb)<0.2) continue; var A=K(RT(a)),B=K(CRT(b)); var ans=va>vb?A:B,lo=va>vb?B:A; return {question:tri('Which is greater: '+A+' or '+B+'?','Bada kaun: '+A+' ya '+B+'?','बड़ा कौन: '+A+' या '+B+'?'),ans:ans,w:[lo,'Equal','Cannot determine']}; } var A=K(RT(50)),B=K(CRT(100)); return {question:tri('Which is greater: '+A+' or '+B+'?','Bada kaun: '+A+' ya '+B+'?','बड़ा कौन: '+A+' या '+B+'?'),ans:A,w:[B,'Equal','Cannot determine']}; },
    function(){ for(var i=0;i<40;i++){ var a=rint(4,40),b=rint(8,90),k=rint(2,6); var arr=[{v:Math.sqrt(a),l:K(RT(a))},{v:cbrt(b),l:K(CRT(b))},{v:k,l:K(k)}]; arr.sort(function(x,y){return x.v-y.v;}); if(arr[1].v-arr[0].v<0.25||arr[2].v-arr[1].v<0.25) continue; return {question:tri('Which is the smallest: '+K(RT(a))+', '+K(CRT(b))+', '+K(k)+'?','Sabse chhota kaun: '+K(RT(a))+', '+K(CRT(b))+', '+K(k)+'?','सबसे छोटा कौन: '+K(RT(a))+', '+K(CRT(b))+', '+K(k)+'?'),ans:arr[0].l,w:[arr[1].l,arr[2].l,'All equal']}; } return {question:tri('Which is the smallest: '+K(RT(5))+', '+K(CRT(30))+', '+K(2)+'?','Sabse chhota kaun: '+K(RT(5))+', '+K(CRT(30))+', '+K(2)+'?','सबसे छोटा कौन: '+K(RT(5))+', '+K(CRT(30))+', '+K(2)+'?'),ans:K(2),w:[K(RT(5)),K(CRT(30)),'All equal']}; },
    function(){ for(var i=0;i<40;i++){ var a=rint(30,99),b=rint(30,300); var va=Math.sqrt(a),vb=cbrt(b); if(Math.abs(va-vb)<0.2) continue; var A=K(RT(a)),B=K(CRT(b)); var ans=va>vb?A:B,lo=va>vb?B:A; return {question:tri('Which is greater: '+A+' or '+B+'?','Bada kaun: '+A+' ya '+B+'?','बड़ा कौन: '+A+' या '+B+'?'),ans:ans,w:[lo,'Equal','Cannot determine']}; } var A=K(RT(80)),B=K(CRT(200)); return {question:tri('Which is greater: '+A+' or '+B+'?','Bada kaun: '+A+' ya '+B+'?','बड़ा कौन: '+A+' या '+B+'?'),ans:A,w:[B,'Equal','Cannot determine']}; },
    function(){ var k=rint(2,8); var A=K(RT(k*k)),B=K(CRT(k*k*k)); return {question:tri('Compare '+A+' and '+B+'.','Compare karo '+A+' aur '+B+'.','तुलना कीजिए '+A+' और '+B+'।'),ans:'Equal (both = '+k+')',w:[A+' is greater',B+' is greater','Cannot determine']}; }
  ]);

  /* 63. Property Application */
  H.base('sq_prop_app', function(){
    for(var i=0;i<40;i++){ var s=rint(3,12); var prod=s*s; var a=rint(2,prod-1); if(prod%a!==0) continue; var b=prod/a; if(a===b) continue; var w=[s+1,s-1>0?s-1:s+2,s+2]; var rule=K(RT('a')+T+RT('b')+' = '+RT('ab')); return {question:tri('Using the rule '+rule+', evaluate '+K(RT(a)+T+RT(b))+'.','Niyam '+rule+' se '+K(RT(a)+T+RT(b))+' ka maan nikaalo.','नियम '+rule+' का प्रयोग कर '+K(RT(a)+T+RT(b))+' ज्ञात कीजिए।'),ans:String(s),w:w.map(String)}; }
    var w0=[5,3,7]; return {question:tri('Evaluate '+K(RT(2)+T+RT(8))+'.','. '+K(RT(2)+T+RT(8))+' nikaalo.',K(RT(2)+T+RT(8))+' ज्ञात कीजिए।'),ans:'4',w:w0.map(String)};
  });
  H.vars('sq_prop_app',[
    function(){ var s=rint(3,12),b=rint(2,6); var a=s*s*b; var w=[s+1,s-1>0?s-1:s+2,s+2]; var rule=K(FR(RT('a'),RT('b'))+' = '+RT(FR('a','b'))); return {question:tri('Using '+rule+', evaluate '+K(FR(RT(a),RT(b)))+'.','. '+rule+' se '+K(FR(RT(a),RT(b)))+' nikaalo.','. '+rule+' से '+K(FR(RT(a),RT(b)))+' ज्ञात कीजिए।'),ans:String(s),w:w.map(String)}; },
    function(){ var a=rint(2,7),b=pick([2,3,5,6,7]); var rule=K(RT('a^{2}b')+' = a'+RT('b')); return {question:tri('Simplify '+K(RT(a*a*b))+' using '+rule+'.',K(RT(a*a*b))+' ko '+rule+' se simplify karo.',K(RT(a*a*b))+' को '+rule+' से सरल कीजिए।'),ans:K(a+RT(b)),w:[K((a+1)+RT(b)),K((a-1>0?a-1:a+2)+RT(b)),K(a+RT(b+1))]}; },
    function(){ var a=rint(5,50); var w=[a+1,a-1>0?a-1:a+2,a+2]; return {question:tri('Evaluate '+K('('+RT(a)+')^{2}')+'.',K('('+RT(a)+')^{2}')+' ka maan nikaalo.',K('('+RT(a)+')^{2}')+' ज्ञात कीजिए।'),ans:String(a),w:w.map(String)}; },
    function(){ var a=rint(3,30); var w=[a+1,a-1>0?a-1:a+2,a+2]; return {question:tri('Evaluate '+K(RT(a)+T+RT(a))+'.',K(RT(a)+T+RT(a))+' nikaalo.',K(RT(a)+T+RT(a))+' ज्ञात कीजिए।'),ans:String(a),w:w.map(String)}; },
    function(){ var a=rint(4,12),b=rint(2,5); var g=gcd(a,b); var as=a/g,bs=b/g; if(bs===1)bs=2; return {question:tri('Evaluate '+K(RT(FR(as*as,bs*bs)))+'.',K(RT(FR(as*as,bs*bs)))+' nikaalo.',K(RT(FR(as*as,bs*bs)))+' ज्ञात कीजिए।'),ans:K(FR(as,bs)),w:[K(FR(as+1,bs)),K(FR(as,bs+1)),K(FR(as-1>0?as-1:as+2,bs))]}; }
  ]);

  /* 64. Units Digit Pattern */
  H.base('sq_unit_pattern', function(){
    var n=rint(12,99); var u=(n*n)%10; var w=[(u+1)%10,(u+2)%10,(u+3)%10]; return {question:tri('What is the unit (last) digit of '+K(POW(n,2))+'?','. '+K(POW(n,2))+' ka unit (last) digit kya hai?',K(POW(n,2))+' का इकाई (अंतिम) अंक क्या है?'),ans:String(u),w:w.map(String)};
  });
  H.vars('sq_unit_pattern',[
    function(){ var n=rint(13,120); var u=(n*n)%10; var w=[(u+1)%10,(u+2)%10,(u+3)%10]; return {question:tri('Find the last digit of '+K(POW(n,2))+'.',K(POW(n,2))+' ka last digit nikaalo.',K(POW(n,2))+' का अंतिम अंक ज्ञात कीजिए।'),ans:String(u),w:w.map(String)}; },
    function(){ var cannot=[2,3,7,8]; var can=[0,1,4,5,6,9]; var ans=pick(cannot); var w=shuffle(can.slice()).slice(0,3).map(String); return {question:tri('Which of these can NEVER be the unit digit of a perfect square?','In mein se kaun perfect square ka unit digit kabhi nahi ho sakta?','इनमें से कौन सा अंक एक पूर्ण वर्ग का इकाई अंक कभी नहीं हो सकता?'),ans:String(ans),w:w}; },
    function(){ var n=rint(11,40); var u=(n*n*n)%10; var w=[(u+1)%10,(u+2)%10,(u+3)%10]; return {question:tri('What is the unit digit of '+K(POW(n,3))+'?',K(POW(n,3))+' ka unit digit kya hai?',K(POW(n,3))+' का इकाई अंक क्या है?'),ans:String(u),w:w.map(String)}; },
    function(){ var d=rint(0,9); var u=(d*d)%10; var w=[(u+1)%10,(u+2)%10,(u+3)%10]; return {question:tri('A number ends in '+d+'. What is the unit digit of its square?','Ek number '+d+' par khatam hota hai. Uske square ka unit digit kya hoga?','एक संख्या '+d+' पर समाप्त होती है। उसके वर्ग का इकाई अंक क्या होगा?'),ans:String(u),w:w.map(String)}; },
    function(){ var n=rint(101,499); var u=(n*n)%10; var w=[(u+1)%10,(u+2)%10,(u+3)%10]; return {question:tri('Find the unit digit of '+K(POW(n,2))+'.',K(POW(n,2))+' ka unit digit nikaalo.',K(POW(n,2))+' का इकाई अंक ज्ञात कीजिए।'),ans:String(u),w:w.map(String)}; }
  ]);
})();
