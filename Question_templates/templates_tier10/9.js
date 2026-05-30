/* tier10 batch6 — templates cb_decimal, cb_frac, cb_make_x (base+variants) */
(function(){
  var H=window.QT; if(!H) return;
  var K=H.K,CRT=H.CRT,FR=H.FR,POW=H.POW,T=H.T,tri=H.tri;
  function FX(s){ var p=String(s).split('/'); return p.length===2?K(FR(p[0],p[1])):K(String(s)); }

  /* 26. Decimal Cube Root */
  H.base('cb_decimal', function(){
    var variant=rint(0,2);
    var r,cube,dec,ans,w1,w2,w3;
    if(variant===0){ r=rint(1,99); cube=r*r*r; dec=cube/1000; ans=r/10; w1=(r+1)/10; w2=(r-1>0?(r-1)/10:0); w3=r/100; }
    else if(variant===1){ r=rint(1,30); cube=r*r*r; dec=cube/1000000; ans=r/100; w1=(r+1)/100; w2=(r-1>0?(r-1)/100:0); w3=r/10; }
    else { r=rint(1,9); cube=r*r*r; dec=cube/1000; ans=r/10; w1=(r+1)/10; w2=(r>1?(r-1)/10:0); w3=r/100; }
    var decStr=String(dec).includes('.')?String(dec).replace(/0+$/,'').replace(/\.$/,''):String(dec);
    var sol=buildCbDecimalSolution(r,cube,dec,decStr,ans);
    return {question:tri('Find the value of '+K(CRT(decStr))+'.',K(CRT(decStr))+' ki value nikalo.',K(CRT(decStr))+' का मान ज्ञात कीजिए।'),ans:String(ans),w:[String(w1),String(w2),String(w3)],solution:sol};
  });
  H.vars('cb_decimal',[
    function(){ var r=rint(1,20); var ans=(r*r*r)/1000; var w=[(r+1)*(r+1)*(r+1)/1000,(r>1?(r-1)*(r-1)*(r-1)/1000:ans+0.001),r*r*r/100]; var sol=buildCbDecimalV1Solution(r,ans); return {question:tri('Which number has '+K(r/10)+' as its cube root?','Kis number ka cube root '+K(r/10)+' hai?','किस संख्या का घनमूल '+K(r/10)+' है?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var a=rint(1,5),b=rint(1,5); var da=a*a*a/1000,db=b*b*b/1000; var ans=(a+b)/10; var w=[(a+b+1)/10,((a+b-1)>0?(a+b-1)/10:(a+b+2)/10),(a+b+2)/10]; var sol=buildCbDecimalV2Solution(a,b,da,db,ans); return {question:tri('What is the value of '+K(CRT(da)+' + '+CRT(db))+'?',K(CRT(da)+' + '+CRT(db))+' kitna hai?',K(CRT(da)+' + '+CRT(db))+' कितना है?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var a=rint(1,9); var n=a*a*a*1000000; var ans=a*100; var w=[ans+100,(ans-100>0?ans-100:ans+200),ans+50]; var sol=buildCbDecimalV3Solution(a,n,ans); return {question:tri('Find the value of '+K(CRT(n))+'.',K(CRT(n))+' ki value nikalo.',K(CRT(n))+' का मान ज्ञात कीजिए।'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var a=rint(1,9); var dec=a*a*a/1000; var ans=a/10; var w=[(a+1)/10,(a>1?(a-1)/10:0.1),a/100]; var sol=buildCbDecimalV4Solution(a,dec,ans); return {question:tri('What is the value of '+K(CRT(dec))+'?',K(CRT(dec))+' kya hai?',K(CRT(dec))+' का मान क्या है?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var a=rint(1,6),b=rint(1,6); while(b===a){ b=rint(1,6); } var da=a*a*a/1000,db=b*b*b/1000; var bigger=Math.max(a/10,b/10); var w=[Math.min(a/10,b/10),(a+b)/10,Math.abs(a-b)/10]; var sol=buildCbDecimalV5Solution(a,b,da,db); return {question:tri('Which value is greater: '+K(CRT(da))+' or '+K(CRT(db))+'?','Bada kaun hai: '+K(CRT(da))+' ya '+K(CRT(db))+'?','बड़ा कौन है: '+K(CRT(da))+' या '+K(CRT(db))+'?'),ans:String(bigger),w:w.map(String),solution:sol}; }
  ]);

  /* 27. Fraction Cube Root */
  H.base('cb_frac', function(){
    var variant=rint(0,1);
    var n,d,cN,cD,ans,w1,w2,w3;
    if(variant===0){ n=rint(1,12); d=rint(2,15); cN=n*n*n; cD=d*d*d; ans=n+'/'+d; w1=(n+1)+'/'+d; w2=n+'/'+(d+1); w3=(n>1?(n-1):1)+'/'+d; }
    else { var f1=rint(1,6),f2=rint(2,10); n=f1*f2; d=f2*f2*f2; cN=n*n*n; cD=d*d*d; var g=gcd(n,d); ans=(n/g)+'/'+(d/g); w1=(n/g+1)+'/'+(d/g); w2=(n/g)+'/'+(d/g+1); w3=(n/g>1?(n/g-1):1)+'/'+(d/g); }
    var sol=buildCbFracSolution(cN,cD,ans,n,d);
    return {question:tri('Find the value of '+K(CRT(FR(cN,cD)))+'.',K(CRT(FR(cN,cD)))+' ki value nikalo.',K(CRT(FR(cN,cD)))+' का मान ज्ञात कीजिए।'),ans:FX(ans),w:[FX(w1),FX(w2),FX(w3)],solution:sol};
  });
  H.vars('cb_frac',[
    function(){ var n=rint(1,8),d=rint(2,10); var cN=n*n*n,cD=d*d*d; var ans=cN+'/'+cD; var w=[(cN+1)+'/'+cD,cN+'/'+(cD+1),(n+1)*(n+1)*(n+1)+'/'+(d+1)*(d+1)*(d+1)]; var sol=buildCbFracV1Solution(n,d,cN,cD,ans); return {question:tri('Which fraction has '+FX(n+'/'+d)+' as its cube root?','Kis fraction ka cube root '+FX(n+'/'+d)+' hai?','किस भिन्न का घनमूल '+FX(n+'/'+d)+' है?'),ans:FX(ans),w:w.map(FX),solution:sol}; },
    function(){ var a=rint(1,5),b=rint(2,8),c=rint(1,5),dd=rint(2,8); var ans=(a*c)+'/'+(b*dd); var w=[(a+c)+'/'+(b+dd),(a*c+1)+'/'+(b*dd),(a*c)+'/'+(b*dd+1)]; var sol=buildCbFracV2Solution(a,b,c,dd,ans); var expr=K(CRT(FR(a*a*a,b*b*b))+T+CRT(FR(c*c*c,dd*dd*dd))); return {question:tri('What is the value of '+expr+'?',expr+' kitna hai?',expr+' कितना है?'),ans:FX(ans),w:w.map(FX),solution:sol}; },
    function(){ var n=rint(2,6),d=rint(2,6); var g=gcd(n,d); var sn=n/g,sd=d/g; var cN=sn*sn*sn*8,cD=sd*sd*sd*8; var ans=sn+'/'+sd; var w=[(sn+1)+'/'+sd,sn+'/'+(sd+1),(sn-1>0?sn-1:1)+'/'+sd]; var sol=buildCbFracV3Solution(sn,sd,cN,cD,ans); return {question:tri('Simplify '+K(CRT(FR(cN,cD)))+'.',K(CRT(FR(cN,cD)))+' ko simplify karo.',K(CRT(FR(cN,cD)))+' को सरल कीजिए।'),ans:FX(ans),w:w.map(FX),solution:sol}; },
    function(){ var n=rint(1,6),d=rint(2,8); var cN=n*n*n,cD=d*d*d; var ans=cN+'/'+cD; var w=[(cN+d)+'/'+cD,cN+'/'+(cD+n),(cN+3*n*n+3*n+1)+'/'+cD]; var sol=buildCbFracV4Solution(n,d,cN,cD,ans); var expr=K(POW(CRT(FR(cN,cD)),3)); return {question:tri('Which fraction is equal to '+expr+'?','Kaunsi fraction '+expr+' ke barabar hai?','कौन सी भिन्न '+expr+' के बराबर है?'),ans:FX(ans),w:w.map(FX),solution:sol}; },
    function(){ var a=rint(1,5),b=rint(2,8); var cN=a*a*a,cD=b*b*b; var ans=cD; var w=[(b+1)*(b+1)*(b+1),(b-1>0?(b-1)*(b-1)*(b-1):(b+2)*(b+2)*(b+2)),b*b*b*8]; var sol=buildCbFracV5Solution(a,b,cN,cD,ans); var lhs=K(FR(CRT(cN),CRT('?'))); return {question:tri('If '+lhs+' = '+FX(a+'/'+b)+', find the missing number.','Agar '+lhs+' = '+FX(a+'/'+b)+', to missing number nikalo.','यदि '+lhs+' = '+FX(a+'/'+b)+', तो लुप्त संख्या ज्ञात कीजिए।'),ans:String(ans),w:w.map(String),solution:sol}; }
  ]);

  /* 28. Make Perfect Cube (x) */
  H.base('cb_make_x', function(){
    var pp=shuffle([2,3,5,7]).slice(0,2); var a=pp[0],b=pp[1];
    var num=a*b*b, s=a, d=b, ans=s*s*d;
    var w=[s*d,s*s,d*d];
    var sol=buildCbMakeXSolution(num,ans,s,d);
    return {question:tri('By what number should '+K(num)+' be multiplied to make it a perfect cube?',K(num)+' ko kis number se multiply karein ki perfect cube bane?',K(num)+' को किस संख्या से गुणा करें कि पूर्ण घन बने?'),ans:String(ans),w:w.map(String),solution:sol};
  });
  H.vars('cb_make_x',[
    function(){ var pp=shuffle([2,3,5,7]).slice(0,2); var a=pp[0],b=pp[1]; var num=a*a*b, s=b, d=a, ans=s*s*d; var w=[s*d,s*s,d*d]; var sol=buildCbMakeXSolution(num,ans,s,d); return {question:tri('By what number should '+K(num)+' be multiplied to make it a perfect cube?',K(num)+' ko kis number se multiply karein ki perfect cube bane?',K(num)+' को किस संख्या से गुणा करें कि पूर्ण घन बने?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var pp=shuffle([2,3,4,5,6]).slice(0,2); var a=pp[0],b=pp[1]; var na=a*b*b, nb=a*a*b; var ans=a*b; var w=[a*b+1,a*b+2,a+b]; var sol=buildCbMakeXV2Solution(a,b,na,nb,ans); var expr=K(na+T+nb); return {question:tri(expr+' is the perfect cube of which number?',expr+' kis number ka perfect cube hai?',expr+' किस संख्या का पूर्ण घन है?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var pp=shuffle([2,3,5,7]).slice(0,2); var a=pp[0],b=pp[1]; var num=a*b*b, s=a, d=b, ans=s*s*d; var w=[s*d,s*s,d*d]; var sol=buildCbMakeXSolution(num,ans,s,d); var expr=K(num+T+'?'); return {question:tri(expr+' is a perfect cube. Which value works for the blank?',expr+' perfect cube hai. Blank mein kaunsa value aayega?',expr+' पूर्ण घन है। रिक्त स्थान में कौन सा मान आएगा?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var pp=shuffle([2,3,5,7]).slice(0,2); var a=pp[0],b=pp[1]; var num=a*b*b, s=a, d=b, ans=s*s*d; var w=[s*d,d,s*s*d*d]; var sol=buildCbMakeXSolution(num,ans,s,d); return {question:tri('What is the smallest number you can multiply '+K(num)+' by to get a perfect cube?',K(num)+' ko perfect cube banane ke liye sabse chhota multiplier kya hai?',K(num)+' को पूर्ण घन बनाने के लिए सबसे छोटा गुणक क्या है?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var pp=shuffle([2,3,5,7]).slice(0,2); var a=pp[0],b=pp[1]; var num=a*b*b, s=a, d=b, mult=s*s*d, ans=s*d; var w=[ans+1,ans+2,s+d]; var sol=buildCbMakeXV5Solution(num,mult,ans); return {question:tri('After multiplying '+K(num)+' by '+K(mult)+', what is the cube root of the result?',K(num)+' ko '+K(mult)+' se multiply karne ke baad result ka cube root kya hai?',K(num)+' को '+K(mult)+' से गुणा करने के बाद परिणाम का घनमूल क्या है?'),ans:String(ans),w:w.map(String),solution:sol}; }
  ]);
})();
