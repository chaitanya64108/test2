/* tier_grad batch3 — cb_identity, system_roots, combined_geo (base+variants) */
(function(){
  var H=window.QT; if(!H) return;
  var K=H.K,RT=H.RT,CRT=H.CRT,tri=H.tri;

  /* 79. Cube Root Identity: cbrt(a+sqrt b) + cbrt(a-sqrt b) = t */
  H.base('cb_identity', function(){
    var P=pick([[2,5,1],[7,50,2],[9,80,3],[10,108,2]]);
    var a=P[0],b=P[1],t=P[2];
    var expr=K(CRT(a+' + '+RT(b))+' + '+CRT(a+' - '+RT(b)));
    return {question:tri(
      'Find the exact value of '+expr+'. (Hint: call the whole sum x and cube both sides.)',
      'Iski exact value nikaalo: '+expr+'. (Hint: pure sum ko x maano aur dono taraf cube karo.)',
      'इसका सही मान ज्ञात कीजिए: '+expr+'। (संकेत: पूरे योग को x मानकर दोनों ओर घन (cube) कीजिए।)'
    ),ans:String(t),w:[String(t+1),String(t+2),'0']};
  });
  H.vars('cb_identity',[
    function(){ var a=rint(2,6),b=rint(2,6); var c=-(a+b); var ans=3*a*b*c; return {question:tri('If a + b + c = 0 with a = '+a+', b = '+b+' and c = '+c+', find the value of a³ + b³ + c³.','Agar a + b + c = 0 jahan a = '+a+', b = '+b+' aur c = '+c+', to a³ + b³ + c³ ka value nikaalo.','यदि a + b + c = 0 जहाँ a = '+a+', b = '+b+' और c = '+c+', तो a³ + b³ + c³ का मान ज्ञात कीजिए।'),ans:String(ans),w:[String(a*b*c),'0',String(-ans)]}; }
  ]);

  /* 80. System with Roots: sqrt x + sqrt y = a, sqrt x - sqrt y = b */
  H.base('system_roots', function(){
    var m=rint(3,8),n=rint(1,m-1);
    var a=m+n,b=m-n;
    var e1=K(RT('x')+' + '+RT('y')+' = '+a);
    var e2=K(RT('x')+' - '+RT('y')+' = '+b);
    return {question:tri(
      'Solve the system '+e1+' and '+e2+'. Find the value of x.',
      'Is system ko solve karo: '+e1+' aur '+e2+'. x ki value nikaalo.',
      'इस निकाय को हल कीजिए: '+e1+' और '+e2+'। x का मान ज्ञात कीजिए।'
    ),ans:String(m*m),w:[String(n*n),String((m+n)*(m+n)),String(m*n)]};
  });
  H.vars('system_roots',[
    function(){ var m=rint(3,8),n=rint(1,m-1); var a=m+n,g=m*n; var e1=K(RT('x')+' + '+RT('y')+' = '+a); var e2=K(RT('xy')+' = '+g); return {question:tri('Given '+e1+' and '+e2+', find the value of x + y.','Diya gaya '+e1+' aur '+e2+', x + y ki value nikaalo.','दिया गया '+e1+' और '+e2+', x + y का मान ज्ञात कीजिए।'),ans:String(m*m+n*n),w:[String(a*a),String(a*a+2*g),String(2*g)]}; }
  ]);

  /* 81. Combined Geometry: square diagonal = s sqrt 2 */
  H.base('combined_geo', function(){
    var s=rint(4,12); var A=s*s;
    return {question:tri(
      'A square has an area of '+A+' cm². Find the exact length of its diagonal.',
      'Ek square ka area '+A+' cm² hai. Iske diagonal ki exact length nikaalo.',
      'एक वर्ग का क्षेत्रफल '+A+' cm² है। इसके विकर्ण की सही लंबाई ज्ञात कीजिए।'
    ),ans:K(s+RT(2))+' cm',w:[K(s+RT(3))+' cm',K((2*s)+RT(2))+' cm',String(2*s)+' cm']};
  });
  H.vars('combined_geo',[
    function(){ var a=rint(3,10); return {question:tri('A cube has a side of '+a+' cm. Find the exact length of its space (longest) diagonal.','Ek cube ki side '+a+' cm hai. Iske space (sabse lambe) diagonal ki exact length nikaalo.','एक घन की भुजा '+a+' cm है। इसके विकर्ण (सबसे लंबे) की सही लंबाई ज्ञात कीजिए।'),ans:K(a+RT(3))+' cm',w:[K(a+RT(2))+' cm',K((a+1)+RT(3))+' cm',String(a*3)+' cm']}; }
  ]);
})();
