/* tier12 batch4 — templates cb_mixed, mixed_simp, surd_simp (base+variants) */
(function(){
  var H=window.QT; if(!H) return;
  var K=H.K,RT=H.RT,CRT=H.CRT,FR=H.FR,POW=H.POW,T=H.T,tri=H.tri;
  function uniq3(ans,arr){ var out=[]; for(var i=0;i<arr.length&&out.length<3;i++){ var v=arr[i]; if(v!==ans&&out.indexOf(v)<0) out.push(v); } var k=1; while(out.length<3){ var c=ans+k; if(c!==ans&&out.indexOf(c)<0) out.push(c); k++; } return out; }

  /* 53. Mixed Cube Root */
  H.base('cb_mixed', function(){
    var p=rint(2,10),q=rint(2,6); var g=gcd(p,q); var ps=p/g,qs=q/g; if(qs===1)qs=2; var num=ps*ps*ps,den=qs*qs*qs; return {question:tri('Simplify '+K(CRT(FR(num,den)))+'.',K(CRT(FR(num,den)))+' ko simplify karo.',K(CRT(FR(num,den)))+' को सरल कीजिए।'),ans:K(FR(ps,qs)),w:[K(FR(ps+1,qs)),K(FR(ps-1>0?ps-1:ps+2,qs)),K(FR(ps,qs+1))]};
  });
  H.vars('cb_mixed',[
    function(){ var p=rint(2,8),q=rint(2,5); var g=gcd(p,q); var ps=p/g,qs=q/g; if(qs===1)qs=2; return {question:tri('Find '+K(CRT(FR(ps*ps*ps,qs*qs*qs)))+'.',K(CRT(FR(ps*ps*ps,qs*qs*qs)))+' nikaalo.',K(CRT(FR(ps*ps*ps,qs*qs*qs)))+' ज्ञात कीजिए।'),ans:K(FR(ps,qs)),w:[K(FR(ps+1,qs)),K(FR(ps-1>0?ps-1:ps+2,qs)),K(FR(ps,qs+1))]}; },
    function(){ var p=rint(2,6),q=rint(2,4); var g=gcd(p,q); var ps=p/g,qs=q/g; if(qs===1)qs=2; var ans=(ps/qs).toFixed(2); return {question:tri('Express '+K(CRT(FR(ps*ps*ps,qs*qs*qs)))+' as a decimal.',K(CRT(FR(ps*ps*ps,qs*qs*qs)))+' ko decimal mein likho.',K(CRT(FR(ps*ps*ps,qs*qs*qs)))+' को दशमलव में लिखिए।'),ans:ans,w:[(ps/qs+0.5).toFixed(2),(ps/qs>0.5?ps/qs-0.5:ps/qs+1).toFixed(2),(ps/qs+1).toFixed(2)]}; },
    function(){ var r=rint(2,5),qs=2; var num=r*r*r,den=qs*qs*qs; return {question:tri('For which value is '+K(CRT('x'))+' = '+K(FR(r,qs))+'?','Kis value ke liye '+K(CRT('x'))+' = '+K(FR(r,qs))+' hai?','किस मान के लिए '+K(CRT('x'))+' = '+K(FR(r,qs))+' है?'),ans:K(FR(num,den)),w:[K(FR((r+1)*(r+1)*(r+1),den)),K(FR(num,den+1)),K(FR(num+1,den))]}; },
    function(){ var a=rint(2,6),b=rint(2,6); while(b===a)b=rint(2,6); return {question:tri(K(CRT(FR(a*a*a,27)))+' + '+K(CRT(FR(b*b*b,27)))+' = ?',K(CRT(FR(a*a*a,27)))+' + '+K(CRT(FR(b*b*b,27)))+' = ?',K(CRT(FR(a*a*a,27)))+' + '+K(CRT(FR(b*b*b,27)))+' = ?'),ans:K(FR(a+b,3)),w:[K(FR(a+b+1,3)),K(FR(a+b,4)),K(FR(Math.abs(a-b),3))]}; },
    function(){ var p1=rint(2,6),p2=rint(2,6); while(p2===p1)p2=rint(2,6); var v1=p1/2,v2=p2/2; var A=K(CRT(FR(p1*p1*p1,8))),B=K(CRT(FR(p2*p2*p2,8))); return {question:tri('Which is greater: '+A+' or '+B+'?','Bada kaun: '+A+' ya '+B+'?','बड़ा कौन: '+A+' या '+B+'?'),ans:v1>v2?A:B,w:['Equal',v1>v2?B:A,'Cannot determine']}; }
  ]);

  /* 54. Mixed √ + ∛ Simplification */
  H.base('mixed_simp', function(){
    var a=rint(2,10),b=rint(2,10),c=rint(2,10); var variant=rint(0,2); var sqA=a*a,cbB=b*b*b,sqC=c*c; var ans,qStr;
    if(variant===0){ ans=a+b-c; qStr=K(RT(sqA)+' + '+CRT(cbB)+' - '+RT(sqC)); }
    else if(variant===1){ ans=a-b+c; qStr=K(RT(sqA)+' - '+CRT(cbB)+' + '+RT(sqC)); }
    else { ans=a+b+c; qStr=K(RT(sqA)+' + '+CRT(cbB)+' + '+RT(sqC)); }
    var w=uniq3(ans,[ans+2,ans-1>=0?ans-1:ans+3,ans+3,ans+4]);
    return {question:tri(qStr+' = ?',qStr+' = ?',qStr+' = ?'),ans:String(ans),w:w.map(String)};
  });
  H.vars('mixed_simp',[
    function(){ var a=rint(2,8),b=rint(2,6),c=rint(2,8); var ans=a+b-c; var w=uniq3(ans,[a-b+c,a+b+c,Math.abs(a-b-c),ans+2,ans+3]); var q=K(RT(a*a)+' + '+CRT(b*b*b)+' - '+RT(c*c)); return {question:tri(q+' = ?',q+' = ?',q+' = ?'),ans:String(ans),w:w.map(String)}; },
    function(){ var a=rint(2,6),b=rint(2,4); var ans=a*b; var w=uniq3(ans,[a*b+2,a*b-1,a+b,ans+3]); var q=K(RT(a*a)+T+CRT(b*b*b)); return {question:tri(q+' = ?',q+' = ?',q+' = ?'),ans:String(ans),w:w.map(String)}; },
    function(){ var a=rint(2,6),b=rint(2,6),c=rint(2,6); var ans=a+b-c; var w=uniq3(ans,[a-b+c,a+b+c,Math.abs(a-b-c),ans+2,ans+3]); var q=K(CRT(a*a*a)+' + '+CRT(b*b*b)+' - '+CRT(c*c*c)); return {question:tri(q+' = ?',q+' = ?',q+' = ?'),ans:String(ans),w:w.map(String)}; },
    function(){ var a=rint(2,8); var ans=a*a; var w=uniq3(ans,[ans+1,ans-1,a,ans+3]); var q=K('('+CRT(a*a*a)+')^{2}'); return {question:tri(q+' = ?',q+' = ?',q+' = ?'),ans:String(ans),w:w.map(String)}; },
    function(){ var a=rint(2,6); var ans=a*a*a; var w=uniq3(ans,[ans+1,ans-1,a,ans+3]); var q=K('('+RT(a*a)+')^{3}'); return {question:tri(q+' = ?',q+' = ?',q+' = ?'),ans:String(ans),w:w.map(String)}; }
  ]);

  /* 55. Surd Simplification */
  function surdStr(c,n){ return c===1?K(RT(n)):K(c+RT(n)); }
  H.base('surd_simp', function(){
    var surdBases=[2,3,5,6,7,10,11,13];
    for(var i=0;i<40;i++){ var n=pick(surdBases); var k1=rint(1,8),k2=rint(1,8),k3=rint(1,8); var aVal=k1*k1*n,bVal=k2*k2*n,cVal=k3*k3*n; var rc=k1+k2-k3; if(rc<=0) continue; var wc=uniq3(rc,[rc+1,rc-1>0?rc-1:rc+2,rc+2]); var q=K(RT(aVal)+' + '+RT(bVal)+' - '+RT(cVal)); return {question:tri(q+' = ?',q+' = ?',q+' = ?'),ans:surdStr(rc,n),w:wc.map(function(c){return surdStr(c,n);})}; }
    var q0=K(RT(8)+' + '+RT(18)+' - '+RT(2)); return {question:tri(q0+' = ?',q0+' = ?',q0+' = ?'),ans:surdStr(4,2),w:[surdStr(3,2),surdStr(5,2),surdStr(1,2)]};
  });
  H.vars('surd_simp',[
    function(){ for(var i=0;i<40;i++){ var n=pick([2,3,5,6,7]); var k1=rint(1,6),k2=rint(1,6),k3=rint(1,6),k4=rint(1,6); var aVal=k1*k1*n,bVal=k2*k2*n,cVal=k3*k3*n,dVal=k4*k4*n; var rc=k1+k2-k3-k4; if(rc<=0) continue; var wc=uniq3(rc,[rc+1,rc-1>0?rc-1:rc+2,rc+2]); var q=K(RT(aVal)+' + '+RT(bVal)+' - '+RT(cVal)+' - '+RT(dVal)); return {question:tri(q+' = ?',q+' = ?',q+' = ?'),ans:surdStr(rc,n),w:wc.map(function(c){return surdStr(c,n);})}; } var q0=K(RT(8)+' + '+RT(32)+' - '+RT(2)+' - '+RT(2)); return {question:tri(q0+' = ?',q0+' = ?',q0+' = ?'),ans:surdStr(4,2),w:[surdStr(3,2),surdStr(5,2),surdStr(2,2)]}; },
    function(){ var n=pick([2,3,5,6,7]); var k=rint(2,9); var val=k*k*n; return {question:tri('Express '+K(RT(val))+' in its simplest surd form.',K(RT(val))+' ko simplest surd form mein likho.',K(RT(val))+' को सरलतम करणी रूप में लिखिए।'),ans:surdStr(k,n),w:[surdStr(k+1,n),surdStr(k-1>0?k-1:k+2,n),K(k+RT(n+1))]}; },
    function(){ for(var i=0;i<40;i++){ var n=pick([2,3,5,7]); var a=rint(2,6),b=rint(1,5),c=rint(1,4); var rc=a+b-c; if(rc<=0) continue; var q=K(a+RT(n)+' + '+b+RT(n)+' - '+c+RT(n)); var wc=uniq3(rc,[rc+1,rc-1>0?rc-1:rc+2,rc+2]); return {question:tri(q+' = ?',q+' = ?',q+' = ?'),ans:surdStr(rc,n),w:wc.map(function(x){return surdStr(x,n);})}; } var q0=K('2'+RT(2)+' + 3'+RT(2)+' - '+RT(2)); return {question:tri(q0+' = ?',q0+' = ?',q0+' = ?'),ans:surdStr(4,2),w:[surdStr(3,2),surdStr(5,2),surdStr(2,2)]}; },
    function(){ var n=pick([2,3,5,7,11]); var k=rint(2,8); var val=k*k*n; return {question:tri('Simplify '+K(RT(val))+'.',K(RT(val))+' ko simplify karo.',K(RT(val))+' को सरल कीजिए।'),ans:surdStr(k,n),w:[surdStr(k+1,n),surdStr(k-1>0?k-1:k+2,n),surdStr(k+2,n)]}; },
    function(){ for(var i=0;i<40;i++){ var s=rint(2,10); var prod=s*s; var f=rint(2,prod-1); if(prod%f!==0) continue; var a=f,b=prod/f; if(a===b) continue; var q=K(RT(a)+T+RT(b)); return {question:tri(q+' = ?',q+' = ?',q+' = ?'),ans:String(s),w:[String(s+1),String(s-1>0?s-1:s+2),String(s+2)]}; } var q0=K(RT(2)+T+RT(8)); return {question:tri(q0+' = ?',q0+' = ?',q0+' = ?'),ans:'4',w:['5','3','6']}; }
  ]);
})();
