/* tier10 batch9 — templates cb_prod, cb_n3_prop, cb_vol_side (base+variants) */
(function(){
  var H=window.QT; if(!H) return;
  var K=H.K,CRT=H.CRT,POW=H.POW,T=H.T,tri=H.tri;

  function W3(ans,cand){ var w=[],i; for(i=0;i<cand.length&&w.length<3;i++){ var v=cand[i]; if(v!==ans&&w.indexOf(v)<0) w.push(v); } var k=1; while(w.length<3){ var u=ans+k; if(u!==ans&&w.indexOf(u)<0) w.push(u); k++; } return w; }

  /* 35. Product Under Cube Root */
  H.base('cb_prod', function(){
    var a=rint(2,12),b=rint(2,12); var ans=a*b;
    var w=W3(ans,[ans+2,(ans-1>0?ans-1:ans+1),ans+3,ans+5,ans+4]);
    var Q=K(CRT(a*a*a+T+b*b*b)+' = ?');
    return {question:tri('Find the value of '+Q,'Value nikaalo: '+Q,'मान ज्ञात कीजिए: '+Q),ans:String(ans),w:w.map(String)};
  });
  H.vars('cb_prod',[
    function(){ var a=rint(2,8),b=rint(2,8); var n=a*a*a*b*b*b; var ans=a*b; var w=W3(ans,[a+b,ans+1,(ans-1>0?ans-1:ans+2),ans+3]); return {question:tri('If '+K(n)+' equals '+K(a*a*a+T+b*b*b)+', find '+K(CRT(n))+'.','Agar '+K(n)+' = '+K(a*a*a+T+b*b*b)+' hai, to '+K(CRT(n))+' nikaalo.','यदि '+K(n)+' = '+K(a*a*a+T+b*b*b)+' है, तो '+K(CRT(n))+' ज्ञात कीजिए।'),ans:String(ans),w:w.map(String)}; },
    function(){ var a=rint(2,6),b=rint(2,6); var n=a*a*a*b*b*b; var ans=a*a*a; var w=W3(ans,[b*b*b,a*b,a+b,ans+1,ans+2]); return {question:tri('Given '+K(CRT(n))+' = '+K(a*b)+', which value is one factor under the cube root?',K(CRT(n))+' = '+K(a*b)+' diya hai. Cube root ke andar ek factor kaunsa hai?',K(CRT(n))+' = '+K(a*b)+' दिया है। घनमूल के अंदर एक गुणनखंड कौन सा है?'),ans:String(ans),w:w.map(String)}; },
    function(){ var a=rint(2,4),b=rint(2,4),c=rint(2,4); var ans=a*b*c; var w=W3(ans,[a+b+c,ans+1,(ans-1>0?ans-1:ans+2),ans+3]); var Q=K(CRT(a*a*a+T+b*b*b+T+c*c*c)+' = ?'); return {question:tri('Evaluate: '+Q,'Value nikaalo: '+Q,'मान ज्ञात कीजिए: '+Q),ans:String(ans),w:w.map(String)}; },
    function(){ var a=rint(2,6),b=rint(2,5); var ans=b*b*b; var w=W3(ans,[a*a*a,a*b,a*a*a+b*b*b,ans+1,ans+2]); var Q=K(CRT(a*a*a+T+'?')+' = '+(a*b)); return {question:tri('In '+Q+', what value goes in place of the question mark?',Q+' mein ? ki jagah kaunsa value aayega?',Q+' में ? के स्थान पर कौन सा मान आएगा?'),ans:String(ans),w:w.map(String)}; },
    function(){ var a=rint(2,6),b=rint(2,6); var Qexpr=K(CRT(a*a*a)+T+CRT(b*b*b)+' = '+(a*b)); var ans=K(CRT('a')+T+CRT('b')+' = '+CRT('ab')); var w=[K(CRT('a')+' + '+CRT('b')+' = '+CRT('a+b')),K(CRT('a')+T+CRT('b')+' = '+CRT('a')+T+'b'),K(CRT('ab')+' = a + b')]; return {question:tri('Look at '+Qexpr+'. Which property does this illustrate?',Qexpr+' — yeh kaunsi property dikhata hai?',Qexpr+' — यह कौन सा गुण दर्शाता है?'),ans:ans,w:w}; }
  ]);

  /* 36. cube-root of n^3 Property */
  H.base('cb_n3_prop', function(){
    var variant=rint(0,2); var n,ans,question,w;
    if(variant===0){ n=rint(2,30); ans=n; w=W3(n,[n*n,n*2,n*n*n]); question=tri('Simplify and find the value of '+K(CRT(POW(n,3)))+'.',K(CRT(POW(n,3)))+' ka value nikaalo.',K(CRT(POW(n,3)))+' का मान ज्ञात कीजिए।'); }
    else if(variant===1){ n=rint(3,25); ans=n; w=W3(n,[n+1,(n-1>0?n-1:n+2),n*n]); question=tri('Find the cube root: '+K(CRT(n*n*n)+' = ?'),K(CRT(n*n*n))+' = ? nikaalo.',K(CRT(n*n*n))+' = ? ज्ञात कीजिए।'); }
    else { n=rint(2,20); ans=n; w=W3(n,[-n,n*n,n+2]); question=tri(K(CRT(POW(n,3)))+' equals which value?',K(CRT(POW(n,3)))+' kis value ke barabar hai?',K(CRT(POW(n,3)))+' किस मान के बराबर है?'); }
    return {question:question,ans:String(ans),w:w.map(String)};
  });
  H.vars('cb_n3_prop',[
    function(){ var n=-1*rint(2,15); var ans=n; var w=W3(n,[Math.abs(n),n*n,n*n*n]); return {question:tri('Find the value of '+K(CRT('('+n+')^{3}'))+'.',K(CRT('('+n+')^{3}'))+' ka value nikaalo.',K(CRT('('+n+')^{3}'))+' का मान ज्ञात कीजिए।'),ans:String(ans),w:w.map(String)}; },
    function(){ var a=rint(2,10),b=rint(2,10); var ans=a+b; var w=W3(ans,[a*b,Math.abs(a-b),a+b+1,ans+2,ans+3]); var Q=K(CRT(POW(a,3))+' + '+CRT(POW(b,3))+' = ?'); return {question:tri('Simplify: '+Q,'Simplify karo: '+Q,'सरल कीजिए: '+Q),ans:String(ans),w:w.map(String)}; },
    function(){ var n=rint(2,15); var ans='True'; var w=['False','Only for positive n','Only for odd n']; return {question:tri(K(CRT(POW(n,3)))+' always equals '+K(n)+'. Is this true or false?',K(CRT(POW(n,3)))+' hamesha '+K(n)+' ke barabar hota hai. Sahi ya galat?',K(CRT(POW(n,3)))+' सदैव '+K(n)+' के बराबर होता है। सही या गलत?'),ans:ans,w:w}; },
    function(){ var a=rint(3,15),b=rint(2,a-1); var ans=a-b; var w=W3(ans,[a+b,b-a,a*b,ans+2,ans+3]); var Q=K(CRT(POW(a,3))+' - '+CRT(POW(b,3))+' = ?'); return {question:tri('Simplify: '+Q,'Simplify karo: '+Q,'सरल कीजिए: '+Q),ans:String(ans),w:w.map(String)}; },
    function(){ var n=rint(2,15); var cube=n*n*n; var ans=n; var w=W3(n,[-n,n+1,n*n]); var Q=K(CRT(cube)+' = ?'); return {question:tri('Find the missing value: '+Q,'Missing value nikaalo: '+Q,'लुप्त मान ज्ञात कीजिए: '+Q),ans:String(ans),w:w.map(String)}; }
  ]);

  /* 37. Word Problem: Volume to Side */
  H.base('cb_vol_side', function(){
    var s=rint(3,20); var vol=s*s*s;
    var offsets=shuffle([2,-1,3,-2,5,4]); var wrongs=[];
    for(var i=0;i<offsets.length;i++){ var v=s+offsets[i]; if(v>0&&v!==s&&wrongs.indexOf(v)<0&&wrongs.length<3) wrongs.push(v); }
    while(wrongs.length<3) wrongs.push(s+wrongs.length+3);
    return {question:tri('The volume of a cube is '+K(vol)+' cm³. Find the length of its side.','Ek cube ka volume '+K(vol)+' cm³ hai. Uski side (bhuja) ki length nikaalo.','एक घन का आयतन '+K(vol)+' cm³ है। उसकी भुजा की लंबाई ज्ञात कीजिए।'),ans:s+' cm',w:wrongs.map(function(v){return v+' cm';})};
  });
  H.vars('cb_vol_side',[
    function(){ var s=rint(3,15); var vol=s*s*s; var ans=s; var w=W3(s,[s+1,(s-1>0?s-1:s+2),2*s]); return {question:tri('The volume of a cube is '+K(vol)+' cm³. What is the length of its side?','Ek cube ka volume '+K(vol)+' cm³ hai. Uski side kitni hai?','एक घन का आयतन '+K(vol)+' cm³ है। उसकी भुजा कितनी है?'),ans:ans+' cm',w:w.map(function(v){return v+' cm';})}; },
    function(){ var s=rint(3,15); var vol=s*s*s; var ans=vol; var w=W3(vol,[vol+10,(vol-10>0?vol-10:vol+20),4*s]); return {question:tri('The side of a cube is '+K(s)+' cm. What is its volume?','Ek cube ki side '+K(s)+' cm hai. Uska volume kya hai?','एक घन की भुजा '+K(s)+' cm है। उसका आयतन क्या है?'),ans:ans+' cm³',w:w.map(function(v){return v+' cm³';})}; },
    function(){ var a=rint(3,10),b=rint(3,10); while(b===a){ b=rint(3,10); } var ans=Math.abs(a-b); var w=W3(ans,[a+b,Math.abs(a*a*a-b*b*b),ans+2,ans+3,ans+4]); return {question:tri('Two cubes have sides '+K(a)+' cm and '+K(b)+' cm. What is the difference between their side lengths?','Do cubes ki sides '+K(a)+' cm aur '+K(b)+' cm hain. Unki sides mein kitna difference hai?','दो घनों की भुजाएँ '+K(a)+' cm और '+K(b)+' cm हैं। उनकी भुजाओं में कितना अंतर है?'),ans:ans+' cm',w:w.map(function(v){return v+' cm';})}; },
    function(){ var s=rint(5,20); var vol=s*s*s; var rate=rint(20,100); var cost=vol*rate; var w=[cost+1000,(cost-1000>0?cost-1000:cost+2000),cost+2000]; return {question:tri('A cube has side '+K(s)+' m, so its volume is '+K(vol)+' m³. At ₹'+rate+' per m³, what is the total cost?','Ek cube ki side '+K(s)+' m hai, volume '+K(vol)+' m³. ₹'+rate+' per m³ ke hisaab se total cost kya hai?','एक घन की भुजा '+K(s)+' m है, आयतन '+K(vol)+' m³। ₹'+rate+' प्रति m³ के हिसाब से कुल लागत क्या है?'),ans:'₹'+cost,w:w.map(function(v){return '₹'+v;})}; },
    function(){ var s=rint(5,15); var vol=s*s*s; var newVol=(2*s)*(2*s)*(2*s); var ans=newVol; var w=[2*vol,3*vol,newVol-100]; return {question:tri('The side of a cube is doubled from '+K(s)+' m. What is its new volume?','Ek cube ki side '+K(s)+' m se double kar di gayi. Naya volume kya hai?','एक घन की भुजा '+K(s)+' m से दोगुनी कर दी गयी। नया आयतन क्या है?'),ans:ans+' m³',w:w.map(function(v){return v+' m³';})}; }
  ]);
})();
