/* tier10 batch1 — templates 4-6 (sq_repsub, sq_decimal, sq_frac) */
(function(){
  var H=window.QT; if(!H) return;
  var K=H.K,RT=H.RT,FR=H.FR,T=H.T,tri=H.tri;

  /* 4. Repeated Subtraction */
  H.base('sq_repsub', function(){
    var r=rint(3,25), sq=r*r, steps=r;
    var offsets=shuffle([1,-1,2,-2,3,4,-3,5]), wrongs=[];
    for(var i=0;i<offsets.length;i++){ var v=steps+offsets[i]; if(v>0&&v!==steps&&wrongs.length<3) wrongs.push(v); }
    while(wrongs.length<3) wrongs.push(steps+wrongs.length+6);
    var sol=buildSqRepsubSolution(sq,r);
    return {question:tri('To find '+K(RT(sq))+', we keep subtracting consecutive odd numbers (1, 3, 5, ...) until we reach 0. How many subtraction steps are needed?',K(RT(sq))+' nikaalne ke liye hum lagataar odd numbers (1, 3, 5, ...) tab tak ghatate hain jab tak 0 na aaye. Kitne steps lagenge?',K(RT(sq))+' ज्ञात करने के लिए हम क्रमागत विषम संख्याएँ (1, 3, 5, ...) तब तक घटाते हैं जब तक 0 न आ जाए। कितने चरण लगेंगे?'),ans:String(steps),w:wrongs.map(String),solution:sol};
  });
  H.vars('sq_repsub',[
    function(){ var r=rint(3,20), sq=r*r, ans=sq; var w=[sq+2*r+1,(sq-2*r+1>0?sq-2*r+1:sq+4*r+4),sq+r]; var sol=buildSqRepsubV1Solution(r,ans); return {question:tri('Subtracting consecutive odd numbers from a number reaches 0 in exactly '+K(r)+' steps. What was the original number?','Kisi number me se lagataar odd numbers ghatane par theek '+K(r)+' steps me 0 aata hai. Original number kya tha?','किसी संख्या में से क्रमागत विषम संख्याएँ घटाने पर ठीक '+K(r)+' चरणों में 0 आ जाता है। मूल संख्या क्या थी?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var r=rint(3,15), sq=r*r; var w=[r+1,(r-1>0?r-1:r+2),r+2]; var sol=buildSqRepsubV2Solution(r,sq); return {question:tri('How many steps of repeated odd-number subtraction are needed to find '+K(RT(sq))+'?',K(RT(sq))+' nikaalne ke liye baar-baar odd number ghatane ke kitne steps chahiye?',K(RT(sq))+' ज्ञात करने के लिए बार-बार विषम संख्या घटाने के कितने चरण चाहिए?'),ans:String(r),w:w.map(String),solution:sol}; },
    function(){ var r=rint(5,25), sq=r*r, step=rint(1,r), ans=2*step-1; var w=[2*step+1,(2*step-3>0?2*step-3:2*step+3),step]; var sol=buildSqRepsubV3Solution(r,sq,step,ans); return {question:tri('While finding '+K(RT(sq))+' by repeated subtraction, which odd number is subtracted at step '+K(step)+'?',K(RT(sq))+' ko repeated subtraction se nikaalte waqt step '+K(step)+' par kaunsa odd number ghataya jaata hai?',K(RT(sq))+' को बार-बार घटाव से निकालते समय चरण '+K(step)+' पर कौन सी विषम संख्या घटाई जाती है?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var r=rint(5,20), sq=r*r, step=rint(1,r-1), ans=sq-step*step; var w=[sq-(step-1>0?(step-1)*(step-1):0),sq-(step+1)*(step+1)>0?sq-(step+1)*(step+1):ans+step,ans+2*step+1]; var sol=buildSqRepsubV4Solution(r,sq,step,ans); return {question:tri('Start with '+K(sq)+' and subtract the first '+K(step)+' consecutive odd numbers (1, 3, 5, ...). What remainder is left?',K(sq)+' se shuru karke pehle '+K(step)+' lagataar odd numbers (1, 3, 5, ...) ghatao. Kitna remainder bachega?',K(sq)+' से शुरू करके पहले '+K(step)+' क्रमागत विषम संख्याएँ (1, 3, 5, ...) घटाइए। कितना शेष बचेगा?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var a,b; do{ a=rint(3,15); b=rint(3,15); }while(a===b); var sa=a*a,sb=b*b, big=Math.max(a,b), sml=Math.min(a,b), bigN=Math.max(sa,sb), smlN=Math.min(sa,sb), diff=big-sml; var w=[a+b,diff+2,big]; var sol=buildSqRepsubV5Solution(a,b,sa,sb,diff); return {question:tri('By repeated subtraction, '+K(RT(bigN))+' needs how many more steps than '+K(RT(smlN))+'?','Repeated subtraction me '+K(RT(bigN))+' ko '+K(RT(smlN))+' se kitne steps zyada chahiye?','बार-बार घटाव में '+K(RT(bigN))+' को '+K(RT(smlN))+' से कितने चरण अधिक चाहिए?'),ans:String(diff),w:w.map(String),solution:sol}; }
  ]);

  /* 5. Decimal Square Root */
  H.base('sq_decimal', function(){
    var variant=rint(0,2), r,dec,ans,w1,w2,w3;
    if(variant===0){ r=rint(1,99); dec=r*r/100; ans=r/10; w1=(r+1)/10; w2=(r-1>0?(r-1)/10:r/100); w3=r/100; }
    else if(variant===1){ r=rint(1,50); dec=r*r/10000; ans=r/100; w1=(r+1)/100; w2=(r-1>0?(r-1)/100:r/1000); w3=r/10; }
    else { r=rint(1,99); dec=r*r/100; ans=r/10; w1=Math.round((ans+0.1)*100)/100; w2=ans>0.1?Math.round((ans-0.1)*100)/100:r/100; w3=Math.round(ans*1000)/100; }
    var decStr=String(dec);
    var sol=buildSqDecimalSolution(dec,ans,decStr);
    return {question:tri('Find the square root of the decimal number '+K(decStr)+', i.e. evaluate '+K(RT(decStr))+'.','Decimal number '+K(decStr)+' ka square root nikaalo, yaani '+K(RT(decStr))+'.','दशमलव संख्या '+K(decStr)+' का वर्गमूल ज्ञात कीजिए, अर्थात् '+K(RT(decStr))+'।'),ans:String(ans),w:[String(w1),String(w2),String(w3)],solution:sol};
  });
  H.vars('sq_decimal',[
    function(){ var r=rint(1,30), ans=(r*r)/100; var w=[(r*r+1)/100,(r>1?(r-1)*(r-1)/100:ans+0.01),(r*r)/10]; var sol=buildSqDecimalV1Solution(r,ans); return {question:tri('Which number has a square root equal to '+K(r/10)+'?','Kis number ka square root '+K(r/10)+' hai?','किस संख्या का वर्गमूल '+K(r/10)+' है?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var a=rint(1,9),b=rint(1,9), da=a*a/100,db=b*b/100, ans=a/10+b/10; var w=[ans+0.1,(ans-0.1>0?Math.round((ans-0.1)*10)/10:ans+0.2),ans+0.2]; var sol=buildSqDecimalV2Solution(a,b,da,db,ans); return {question:tri('Find the value of '+K(RT(da)+' + '+RT(db))+'.','Maan gyaat karo: '+K(RT(da)+' + '+RT(db))+'.','मान ज्ञात कीजिए: '+K(RT(da)+' + '+RT(db))+'।'),ans:String(Math.round(ans*10)/10),w:w.map(function(x){return String(Math.round(x*10)/10);}),solution:sol}; },
    function(){ var a=rint(1,9), n=a*a*100, ans=a*10; var w=[ans+10,(ans-10>0?ans-10:ans+20),ans+5]; var sol=buildSqDecimalV3Solution(a,n,ans); return {question:tri('Find the square root '+K(RT(n))+'.','Square root '+K(RT(n))+' gyaat karo.','वर्गमूल '+K(RT(n))+' ज्ञात कीजिए।'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var a=rint(1,9), dec=a*a/100, ans=a/10; var w=[(a+1)/10,(a>1?(a-1)/10:0.1),a/100]; var sol=buildSqDecimalV4Solution(a,dec,ans); return {question:tri('What is the value of '+K(RT(dec))+'?','Iska maan kya hai '+K(RT(dec))+'?','इसका मान क्या है '+K(RT(dec))+'?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var a,b; do{ a=rint(1,9); b=rint(1,9); }while(a===b); var da=a*a/100,db=b*b/100, bigger=Math.max(a/10,b/10); var w=[Math.min(a/10,b/10),Math.round((a/10+b/10)*10)/10,Math.round(Math.abs(a/10-b/10)*10)/10]; var sol=buildSqDecimalV5Solution(a,b,da,db); return {question:tri('Which is greater: '+K(RT(da))+' or '+K(RT(db))+'?','Bada kaun: '+K(RT(da))+' ya '+K(RT(db))+'?','बड़ा कौन: '+K(RT(da))+' या '+K(RT(db))+'?'),ans:String(bigger),w:w.map(String),solution:sol}; }
  ]);

  /* 6. Fraction Square Root */
  H.base('sq_frac', function(){
    var variant=rint(0,1), n,d,sqN,sqD,ans,w1,w2,w3,solAns;
    if(variant===0){ n=rint(1,15); d=rint(2,20); sqN=n*n; sqD=d*d; solAns=n+'/'+d; ans=K(FR(n,d)); w1=K(FR(n+1,d)); w2=K(FR(n,d+1)); w3=K(FR((n>1?n-1:1),d)); }
    else { var f1=rint(1,8),f2=rint(2,12); n=f1*f2; d=f2*f2; sqN=n*n; sqD=d*d; var g=gcd(n,d), rn=n/g, rd=d/g; solAns=rn+'/'+rd; ans=K(FR(rn,rd)); w1=K(FR(rn+1,rd)); w2=K(FR(rn,rd+1)); w3=K(FR((rn>1?rn-1:1),rd)); }
    var sol=buildSqFracSolution(sqN,sqD,solAns,n,d);
    return {question:tri('Find the square root of the fraction '+K(FR(sqN,sqD))+', i.e. evaluate '+K(RT(FR(sqN,sqD)))+'.','Bhinn '+K(FR(sqN,sqD))+' ka square root nikaalo, yaani '+K(RT(FR(sqN,sqD)))+'.','भिन्न '+K(FR(sqN,sqD))+' का वर्गमूल ज्ञात कीजिए, अर्थात् '+K(RT(FR(sqN,sqD)))+'।'),ans:ans,w:[w1,w2,w3],solution:sol};
  });
  H.vars('sq_frac',[
    function(){ var n=rint(1,10),d=rint(2,12), sqN=n*n,sqD=d*d, solAns=sqN+'/'+sqD; var sol=buildSqFracV1Solution(n,d,sqN,sqD,solAns); var ans=K(FR(sqN,sqD)), w1=K(FR(sqN+1,sqD)), w2=K(FR(sqN,sqD+1)), w3=K(FR((n+1)*(n+1),(d+1)*(d+1))); return {question:tri('Which fraction has a square root equal to '+K(FR(n,d))+'?','Kis bhinn ka square root '+K(FR(n,d))+' hai?','किस भिन्न का वर्गमूल '+K(FR(n,d))+' है?'),ans:ans,w:[w1,w2,w3],solution:sol}; },
    function(){ var a=rint(1,8),b=rint(2,10),c=rint(1,8),dd=rint(2,10), solAns=(a*c)+'/'+(b*dd); var sol=buildSqFracV2Solution(a,b,c,dd,solAns); var ans=K(FR(a*c,b*dd)), w1=K(FR(a+c,b+dd)), w2=K(FR(a*c+1,b*dd)), w3=K(FR(a*c,b*dd+1)); return {question:tri('Find the value of '+K(RT(FR(a*a,b*b))+T+RT(FR(c*c,dd*dd)))+'.','Maan gyaat karo: '+K(RT(FR(a*a,b*b))+T+RT(FR(c*c,dd*dd)))+'.','मान ज्ञात कीजिए: '+K(RT(FR(a*a,b*b))+T+RT(FR(c*c,dd*dd)))+'।'),ans:ans,w:[w1,w2,w3],solution:sol}; },
    function(){ var n=rint(2,8),d=rint(2,8), g=gcd(n,d), sn=n/g,sd=d/g, sqN=sn*sn*4,sqD=sd*sd*4, solAns=sn+'/'+sd; var sol=buildSqFracV3Solution(sn,sd,sqN,sqD,solAns); var ans=K(FR(sn,sd)), w1=K(FR(sn+1,sd)), w2=K(FR(sn,sd+1)), w3=K(FR((sn-1>0?sn-1:1),sd)); return {question:tri('Simplify and find the value of '+K(RT(FR(sqN,sqD)))+'.','Simplify karke maan gyaat karo: '+K(RT(FR(sqN,sqD)))+'.','सरल करके मान ज्ञात कीजिए: '+K(RT(FR(sqN,sqD)))+'।'),ans:ans,w:[w1,w2,w3],solution:sol}; },
    function(){ var n=rint(1,8),d=rint(2,10), sqN=n*n,sqD=d*d, solAns=sqN+'/'+sqD; var sol=buildSqFracV4Solution(n,d,sqN,sqD,solAns); var ans=K(FR(sqN,sqD)), w1=K(FR(sqN+d,sqD)), w2=K(FR(sqN,sqD+n)), w3=K(FR(sqN+2*n+1,sqD)); return {question:tri('Squaring '+K(RT(FR(sqN,sqD)))+' gives which fraction?','Jab '+K(RT(FR(sqN,sqD)))+' ka square kiya jaaye to kaunsi bhinn milegi?','जब '+K(RT(FR(sqN,sqD)))+' का वर्ग किया जाए तो कौन सी भिन्न मिलेगी?'),ans:ans,w:[w1,w2,w3],solution:sol}; },
    function(){ var a,b,c,d,v1,v2; do{ a=rint(1,6);b=rint(3,10);c=rint(1,6);d=rint(3,10); v1=a/b;v2=c/d; }while(Math.abs(v1-v2)<0.001); var solAns=v1>v2?(a*a)+'/'+(b*b):(c*c)+'/'+(d*d); var sol=buildSqFracV5Solution(a,b,c,d,solAns); var ans=v1>v2?K(FR(a*a,b*b)):K(FR(c*c,d*d)); var w1=v1<=v2?K(FR(a*a,b*b)):K(FR(c*c,d*d)); var w2=K(FR(a*a+c*c,b*b+d*d)); var w3=K(FR(a+c,b+d)); return {question:tri('Which fraction is larger: '+K(RT(FR(a*a,b*b)))+' or '+K(RT(FR(c*c,d*d)))+'?','Bada kaun: '+K(RT(FR(a*a,b*b)))+' ya '+K(RT(FR(c*c,d*d)))+'?','बड़ा कौन: '+K(RT(FR(a*a,b*b)))+' या '+K(RT(FR(c*c,d*d)))+'?'),ans:ans,w:[w1,w2,w3],solution:sol}; }
  ]);
})();
