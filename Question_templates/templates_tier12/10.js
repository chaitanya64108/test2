/* tier12 batch10 — templates dec_root_add, cb_prod_simp (base+variants) */
(function(){
  var H=window.QT; if(!H) return;
  var K=H.K,RT=H.RT,CRT=H.CRT,T=H.T,tri=H.tri;

  /* 69. Decimal Root Addition */
  H.base('dec_root_add', function(){
    var a=rint(1,15),b=rint(1,15); var dA=a*a/100,dB=b*b/100; var ans=((a+b)/10).toFixed(1); var w=[((a+b+1)/10).toFixed(1),((a+b)>1?(a+b-1)/10:(a+b+2)/10).toFixed(1),((a+b+2)/10).toFixed(1)]; return {question:tri(K(RT(dA.toFixed(2)))+' + '+K(RT(dB.toFixed(2)))+' = ?',K(RT(dA.toFixed(2)))+' + '+K(RT(dB.toFixed(2)))+' = ?',K(RT(dA.toFixed(2)))+' + '+K(RT(dB.toFixed(2)))+' = ?'),ans:ans,w:w};
  });
  H.vars('dec_root_add',[
    function(){ var a=rint(1,12),b=rint(1,12); var dA=a*a/100,dB=b*b/100; var ans=((a+b)/10).toFixed(1); var w=[((a+b+2)/10).toFixed(1),((a+b)>1?(a+b-1)/10:(a+b+3)/10).toFixed(1),((a+b+1)/10).toFixed(1)]; return {question:tri(K(RT(dA.toFixed(2)))+' + '+K(RT(dB.toFixed(2)))+' = ?',K(RT(dA.toFixed(2)))+' + '+K(RT(dB.toFixed(2)))+' = ?',K(RT(dA.toFixed(2)))+' + '+K(RT(dB.toFixed(2)))+' = ?'),ans:ans,w:w}; },
    function(){ var a=rint(2,20); var d=a*a/100; var ans=(a/10).toFixed(1); var w=[((a+1)/10).toFixed(1),((a-1)/10).toFixed(1),((a+2)/10).toFixed(1)]; return {question:tri('Find '+K(RT(d.toFixed(2)))+'.',K(RT(d.toFixed(2)))+' nikaalo.',K(RT(d.toFixed(2)))+' ज्ञात कीजिए।'),ans:ans,w:w}; },
    function(){ var a=rint(5,15),b=rint(1,4); var dA=a*a/100,dB=b*b/100; var ans=((a-b)/10).toFixed(1); var w=[((a-b+1)/10).toFixed(1),((a-b+2)/10).toFixed(1),((a-b>1)?(a-b-1)/10:(a-b+3)/10).toFixed(1)]; return {question:tri(K(RT(dA.toFixed(2)))+' - '+K(RT(dB.toFixed(2)))+' = ?',K(RT(dA.toFixed(2)))+' - '+K(RT(dB.toFixed(2)))+' = ?',K(RT(dA.toFixed(2)))+' - '+K(RT(dB.toFixed(2)))+' = ?'),ans:ans,w:w}; },
    function(){ var a=rint(2,9); var area=a*a/100; var ans=(a/10).toFixed(1); var w=[((a+1)/10).toFixed(1),((a-1)/10).toFixed(1),((a+2)/10).toFixed(1)]; return {question:tri('A square has area '+area.toFixed(2)+' m². Find its side (in m).','Ek varga ka area '+area.toFixed(2)+' m² hai. Uski bhuja (m) nikaalo.','एक वर्ग का क्षेत्रफल '+area.toFixed(2)+' m² है। उसकी भुजा (m) ज्ञात कीजिए।'),ans:ans,w:w}; }
  ]);

  /* 70. Cube Product Simplification */
  H.base('cb_prod_simp', function(){
    var a=rint(2,10),b=rint(2,10); var ans=a*b; var w=[ans+3,ans-2>0?ans-2:ans+5,ans+5]; return {question:tri('Evaluate '+K(CRT(a*a*a+T+b*b*b))+'.',K(CRT(a*a*a+T+b*b*b))+' ka maan nikaalo.',K(CRT(a*a*a+T+b*b*b))+' ज्ञात कीजिए।'),ans:String(ans),w:w.map(String)};
  });
  H.vars('cb_prod_simp',[
    function(){ var a=rint(2,8),b=rint(2,8); var ans=a*b; var w=[ans+3,ans-2>0?ans-2:ans+5,ans+5]; return {question:tri('Evaluate '+K(CRT(a*a*a+T+b*b*b))+'.',K(CRT(a*a*a+T+b*b*b))+' ka maan nikaalo.',K(CRT(a*a*a+T+b*b*b))+' ज्ञात कीजिए।'),ans:String(ans),w:w.map(String)}; },
    function(){ var a=rint(2,9),b=rint(2,9); var ans=a*b; var w=[ans+2,ans-1>0?ans-1:ans+3,ans+3]; return {question:tri('Evaluate '+K(CRT(a*a*a)+T+CRT(b*b*b))+'.',K(CRT(a*a*a)+T+CRT(b*b*b))+' ka maan nikaalo.',K(CRT(a*a*a)+T+CRT(b*b*b))+' ज्ञात कीजिए।'),ans:String(ans),w:w.map(String)}; },
    function(){ var a=rint(2,5),b=rint(2,5),c=rint(2,4); var ans=a*b*c; var w=[ans+3,ans-2>0?ans-2:ans+5,ans+5]; return {question:tri('Evaluate '+K(CRT(a*a*a+T+b*b*b+T+c*c*c))+'.',K(CRT(a*a*a+T+b*b*b+T+c*c*c))+' ka maan nikaalo.',K(CRT(a*a*a+T+b*b*b+T+c*c*c))+' ज्ञात कीजिए।'),ans:String(ans),w:w.map(String)}; },
    function(){ var a=rint(2,7); var n=a*a*a*a*a*a; var ans=a*a; var w=[ans+1,ans-1>0?ans-1:ans+2,a*a*a]; return {question:tri('Evaluate '+K(CRT(n))+'.',K(CRT(n))+' ka maan nikaalo.',K(CRT(n))+' ज्ञात कीजिए।'),ans:String(ans),w:w.map(String)}; },
    function(){ var a=rint(2,7),b=rint(2,7); var ans=a*a*a; var am=a-1>0?a-1:a+2; return {question:tri('If '+K(CRT('x'+T+b*b*b))+' = '+K(a*b)+', find x.','Agar '+K(CRT('x'+T+b*b*b))+' = '+K(a*b)+', to x = ?','यदि '+K(CRT('x'+T+b*b*b))+' = '+K(a*b)+', तो x = ?'),ans:String(ans),w:[String((a+1)*(a+1)*(a+1)),String(am*am*am),String(a*a)]}; }
  ]);
})();
