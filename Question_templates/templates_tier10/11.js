/* tier10 batch8 — templates cb_est, cb_digits, cb_simp (base+variants) */
(function(){
  var H=window.QT; if(!H) return;
  var K=H.K,CRT=H.CRT,T=H.T,tri=H.tri;

  /* distinct wrong-option builder: returns 3 numbers != ans, no duplicates */
  function W3(ans,cand){ var w=[],i; for(i=0;i<cand.length&&w.length<3;i++){ var v=cand[i]; if(v!==ans&&w.indexOf(v)<0) w.push(v); } var k=1; while(w.length<3){ var u=ans+k; if(u!==ans&&w.indexOf(u)<0) w.push(u); k++; } return w; }

  /* 32. Cube Estimation */
  H.base('cb_est', function(){
    var a=rint(2,20); var num=a*a*a+rint(1,a*3); var lo=a, hi=a+1;
    var wrongPairs=[[lo-1,lo],[hi,hi+1],[lo+1,hi+1],[lo-2,lo-1],[hi+1,hi+2],[lo-1,hi]].filter(function(p){return p[0]>0;});
    var picked=shuffle(wrongPairs).slice(0,3);
    while(picked.length<3) picked.push([lo+picked.length+2,hi+picked.length+2]);
    return {question:tri('Between which two consecutive whole numbers does '+K(CRT(num))+' lie?',K(CRT(num))+' kin do consecutive (lagataar) whole numbers ke beech mein aata hai?',K(CRT(num))+' किन दो क्रमागत पूर्ण संख्याओं के बीच में आता है?'),ans:lo+' & '+hi,w:picked.map(function(p){return p.join(' & ');})};
  });
  H.vars('cb_est',[
    function(){ var a=rint(2,15); var num=a*a*a+rint(1,a*2); var ans=a; var w=W3(a,[a+1,(a-1>0?a-1:a+2),a+2]); return {question:tri('Which integer is '+K(CRT(num))+' closest to?',K(CRT(num))+' sabse kareeb kis integer ke hai?',K(CRT(num))+' सबसे निकट किस पूर्णांक के है?'),ans:String(ans),w:w.map(String)}; },
    function(){ var a=rint(3,15); var num=a*a*a+a; var ans=a; var w=W3(a,[a+1,(a-1>0?a-1:a+2),a+2]); return {question:tri('Find the nearest whole number to '+K(CRT(num))+'.',K(CRT(num))+' ke sabse nazdeek whole number kaunsa hai?',K(CRT(num))+' के सबसे निकट पूर्ण संख्या कौन सी है?'),ans:String(ans),w:w.map(String)}; },
    function(){ var a=rint(2,12); var num=a*a*a+1; var ans='Closer to '+a; var w=['Closer to '+(a+1),'Exactly midway','Closer to '+(a+2)]; return {question:tri('Is '+K(CRT(num))+' closer to '+K(a)+' or to '+K(a+1)+'?','Kya '+K(CRT(num))+', '+K(a)+' ke zyada kareeb hai ya '+K(a+1)+' ke?','क्या '+K(CRT(num))+', '+K(a)+' के अधिक निकट है या '+K(a+1)+' के?'),ans:ans,w:w}; },
    function(){ var a=rint(2,10),b=rint(2,10); var n1=a*a*a+1,n2=b*b*b+1; var ans=a+b; var w=W3(ans,[a+b+1,(a+b-1>0?a+b-1:a+b+2),a*b]); return {question:tri('Estimate the value of '+K(CRT(n1)+' + '+CRT(n2))+' to the nearest whole number.',K(CRT(n1)+' + '+CRT(n2))+' ki value sabse nazdeek whole number tak estimate karo.',K(CRT(n1)+' + '+CRT(n2))+' का मान निकटतम पूर्ण संख्या तक आकलित कीजिए।'),ans:String(ans),w:w.map(String)}; },
    function(){ var a=rint(2,15); var num=a*a*a+a*2; var ans='Between '+a+' and '+(a+1); var w=['Between '+(a-1)+' and '+a,'Between '+(a+1)+' and '+(a+2),'Between '+(a-2)+' and '+(a-1)]; return {question:tri(K(CRT(num))+' lies between which two whole numbers?',K(CRT(num))+' kin do whole numbers ke beech mein hai?',K(CRT(num))+' किन दो पूर्ण संख्याओं के बीच में है?'),ans:ans,w:w}; }
  ]);

  /* 33. Digits in Cube Root */
  H.base('cb_digits', function(){
    var n=rint(1,5); var lo=Math.pow(10,3*(n-1)); var hi=Math.pow(10,3*n)-1;
    var num=rint(lo,Math.min(hi,lo+99999)); var ans=n;
    var w=W3(n,[n+1,(n-1>0?n-1:n+2),n+2,n+3,n+4]);
    return {question:tri('How many digits will there be in '+K(CRT(num))+'?',K(CRT(num))+' mein kitne digits (ank) honge?',K(CRT(num))+' में कितने अंक होंगे?'),ans:String(ans),w:w.map(String)};
  });
  H.vars('cb_digits',[
    function(){ var n=rint(2,4); var lo=Math.pow(10,3*(n-1)); var hi=Math.pow(10,3*n)-1; var ans=n; var w=W3(n,[n+1,(n-1>0?n-1:n+2),n+2]); return {question:tri('A number lies between '+K(lo)+' and '+K(hi)+'. How many digits will its cube root have?','Ek number '+K(lo)+' se '+K(hi)+' ke beech hai. Uske cube root mein kitne digits honge?','एक संख्या '+K(lo)+' और '+K(hi)+' के बीच है। उसके घनमूल में कितने अंक होंगे?'),ans:String(ans),w:w.map(String)}; },
    function(){ var n=rint(2,3); var ans=3*n; var w=W3(ans,[3*n+1,(3*n-1>0?3*n-1:3*n+2),2*n]); return {question:tri('If a cube root has '+K(n)+' digits, how many digits does the original number have?','Agar cube root mein '+K(n)+' digits hain, to original number mein kitne digits honge?','यदि घनमूल में '+K(n)+' अंक हैं, तो मूल संख्या में कितने अंक होंगे?'),ans:String(ans),w:w.map(String)}; },
    function(){ var num=pick([8,27,64,125,216,343,512,729,1000,1331]); var d=String(Math.round(Math.cbrt(num))).length; var w=W3(d,[d+1,d+2,(d-1>0?d-1:d+3)]); return {question:tri('How many digits are there in '+K(CRT(num))+'?',K(CRT(num))+' mein kitne digits hain?',K(CRT(num))+' में कितने अंक हैं?'),ans:String(d),w:w.map(String)}; },
    function(){ var k=rint(2,3); var ans=Math.pow(10,3*(k-1)); var w=W3(ans,[(ans-1>0?ans-1:1),ans+1,ans*2]); return {question:tri('What is the smallest number whose cube root has exactly '+K(k)+' digits?','Sabse chhota number kaunsa hai jiske cube root mein theek '+K(k)+' digits hon?','सबसे छोटी संख्या कौन सी है जिसके घनमूल में ठीक '+K(k)+' अंक हों?'),ans:String(ans),w:w.map(String)}; },
    function(){ var n=rint(1,3); var w=W3(n,[n+1,n+2,(n-1>0?n-1:n+3)]); return {question:tri('A '+K(3*n)+'-digit number has how many digits in its cube root?',K(3*n)+'-digit number ke cube root mein kitne digits honge?',K(3*n)+'-अंकीय संख्या के घनमूल में कितने अंक होंगे?'),ans:String(n),w:w.map(String)}; }
  ]);

  /* 34. Cube Simplification */
  H.base('cb_simp', function(){
    var variant=rint(0,3);
    var a=rint(1,10),b=rint(1,10),c=rint(1,10);
    var va=a*a*a,vb=b*b*b,vc=c*c*c;
    var expr,ans;
    if(variant===0){ expr=CRT(va)+' + '+CRT(vb)+' - '+CRT(vc); ans=a+b-c; }
    else if(variant===1){ expr=CRT(va)+' - '+CRT(vb)+' + '+CRT(vc); ans=a-b+c; }
    else if(variant===2){ expr=CRT(va)+' + '+CRT(vb)+' + '+CRT(vc); ans=a+b+c; }
    else { expr=CRT(va)+' - '+CRT(vb)+' - '+CRT(vc); ans=a-b-c; }
    var w=W3(ans,[ans+2,(ans-1!==ans?ans-1:ans+3),ans+3,ans+5,ans-2]);
    var Q=K(expr+' = ?');
    return {question:tri('Simplify and evaluate: '+Q,'Simplify karke value nikaalo: '+Q,'सरल करके मान ज्ञात कीजिए: '+Q),ans:String(ans),w:w.map(String)};
  });
  H.vars('cb_simp',[
    function(){ var a=rint(1,8),b=rint(1,8); var ans=a*b; var w=W3(ans,[a+b,Math.abs(a-b),a*b+2]); var Q=K(CRT(a*a*a)+T+CRT(b*b*b)+' = ?'); return {question:tri('Multiply and simplify: '+Q,'Multiply karke simplify karo: '+Q,'गुणा करके सरल कीजिए: '+Q),ans:String(ans),w:w.map(String)}; },
    function(){ var a=rint(1,8),b=rint(1,6),c=rint(1,5),d=rint(1,4); var ans=a+b-c+d; var w=W3(ans,[ans+2,(ans-1!==ans?ans-1:ans+3),a-b+c+d,ans+4,ans+5]); var Q=K(CRT(a*a*a)+' + '+CRT(b*b*b)+' - '+CRT(c*c*c)+' + '+CRT(d*d*d)+' = ?'); return {question:tri('Simplify and evaluate: '+Q,'Simplify karke value nikaalo: '+Q,'सरल करके मान ज्ञात कीजिए: '+Q),ans:String(ans),w:w.map(String)}; },
    function(){ var a=rint(1,8),b=rint(1,8); var ans=a+b; var sum=(a+b)*(a+b)*(a+b); var w=W3(ans,[a*b,(a-b>0?a-b:b-a),ans+1,ans+2,ans+3]); var Q=K(CRT(sum)+' = ?'); return {question:tri('Find the value: '+Q,'Value nikaalo: '+Q,'मान ज्ञात कीजिए: '+Q),ans:String(ans),w:w.map(String)}; },
    function(){ var a=rint(1,10); var ans=3*a; var w=W3(ans,[3*a+2,(3*a-2>0?3*a-2:3*a+4),a*4,ans+1,ans+5]); var Q=K(CRT(a*a*a)+' + '+CRT(a*a*a)+' + '+CRT(a*a*a)+' = ?'); return {question:tri('Add and simplify: '+Q,'Jodkar simplify karo: '+Q,'जोड़कर सरल कीजिए: '+Q),ans:String(ans),w:w.map(String)}; },
    function(){ var a=rint(1,8),b=rint(1,8); var sum=a+b; var w=W3(b,[(a-b>0?a-b:b-a),a+1,a*b,b+1,b+2]); var Q=K(CRT(a*a*a)+' + ? = '+sum); return {question:tri('Find the missing value: '+Q,'Missing value nikaalo: '+Q,'लुप्त मान ज्ञात कीजिए: '+Q),ans:String(b),w:w.map(String)}; }
  ]);
})();
