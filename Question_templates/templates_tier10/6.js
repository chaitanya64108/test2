/* tier10 batch3 — templates sq_approx, sq_quot, sq_n2_prop (base+variants) */
(function(){
  var H=window.QT; if(!H) return;
  var K=H.K,RT=H.RT,FR=H.FR,POW=H.POW,T=H.T,tri=H.tri;

  /* 17. Approximation of a Square Root */
  H.base('sq_approx', function(){
    var variant=rint(0,3), a,num,ans,w1,w2,w3;
    if(variant===0){ a=rint(2,30); num=a*a+1; ans=a+1/(2*a); w1=Number(a.toFixed(2)); w2=Number((a+1).toFixed(2)); w3=Number((a-0.5).toFixed(2)); }
    else if(variant===1){ a=rint(3,25); num=a*a+a; ans=a+0.5; w1=Number(a.toFixed(1)); w2=Number((a+1).toFixed(1)); w3=Number((a-0.5).toFixed(1)); }
    else if(variant===2){ a=rint(3,30); num=a*a-1; ans=a-1/(2*a); w1=Number(a.toFixed(2)); w2=Number((a-1).toFixed(2)); w3=Number((a+0.5).toFixed(2)); }
    else { a=rint(2,25); num=a*a+2; ans=a+1/a; w1=Number(a.toFixed(2)); w2=Number((a+0.5).toFixed(2)); w3=Number((a+1).toFixed(2)); }
    var fmt=function(v){ return Number.isInteger(v)?String(v):v.toFixed(2).replace(/0+$/,'').replace(/\.$/,''); };
    var sol=buildSqApproxSolution(a,num,ans,variant);
    return {question:tri('Approximately, what is the value of '+K(RT(num))+'?',K(RT(num))+' ka approximate value kya hai?',K(RT(num))+' का लगभग मान क्या है?'),ans:fmt(ans),w:[fmt(w1),fmt(w2),fmt(w3)],solution:sol};
  });
  H.vars('sq_approx',[
    function(){ var a=rint(3,25), num=a*a+rint(1,a*2), lo=a, hi=a+1; var w=[[lo-1,lo],[hi,hi+1],[lo+1,hi+1]]; var sol=buildSqApproxV1Solution(a,num,lo,hi); return {question:tri(K(RT(num))+' lies between which two whole numbers?',K(RT(num))+' kin do whole numbers ke beech me aata hai?',K(RT(num))+' किन दो पूर्ण संख्याओं के बीच आता है?'),ans:lo+' and '+hi,w:w.map(function(p){return p[0]+' and '+p[1];}),solution:sol}; },
    function(){ var a=rint(2,15), num=a*a+a, ans=a+0.5; var w=[a,a+1,a+0.25]; var sol=buildSqApproxV2Solution(a,num,ans); return {question:tri('What is the closest approximate value of '+K(RT(num))+'?',K(RT(num))+' ka sabse kareebi approximate value kya hai?',K(RT(num))+' का सबसे निकटतम सन्निकट मान क्या है?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var a=rint(2,10), num=a*a+1, approx=a+1/(2*a), ans='Underestimate'; var w=['Overestimate','Exactly correct','Cannot say']; var sol=buildSqApproxV3Solution(a,num,approx,ans); return {question:tri('If we use '+K(a)+' as an estimate for '+K(RT(num))+', is it an overestimate or an underestimate?',K(a)+' ko '+K(RT(num))+' ka estimate maanein, to ye zyada hai ya kam?',K(a)+' को '+K(RT(num))+' का अनुमान मानें, तो यह अधिक है या कम?'),ans:ans,w:w,solution:sol}; },
    function(){ var a=rint(2,8),b=rint(2,8), n1=a*a+1,n2=b*b+1, ans=a+b; var w=[a+b+1,(a+b-1>0?a+b-1:a+b+2),a*b]; var sol=buildSqApproxV4Solution(a,b,n1,n2,ans); return {question:tri('What is '+K(RT(n1)+' + '+RT(n2))+', rounded to the nearest whole number?',K(RT(n1)+' + '+RT(n2))+' ko nearest whole number tak kya hoga?',K(RT(n1)+' + '+RT(n2))+' को निकटतम पूर्ण संख्या तक क्या होगा?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var a=rint(3,15), num=a*a+2, ans=a+1/a; var w=[a,a+1,a+0.5]; var fmt=function(v){ return Number.isInteger(v)?String(v):v.toFixed(2); }; var sol=buildSqApproxV5Solution(a,num,ans); return {question:tri('Using the approximation formula, what is '+K(RT(num))+'?','Approximation formula se '+K(RT(num))+' kitna hoga?','सन्निकटन सूत्र से '+K(RT(num))+' कितना होगा?'),ans:fmt(ans),w:w.map(fmt),solution:sol}; }
  ]);

  /* 18. Quotient Under Root (shown as a fraction) */
  H.base('sq_quot', function(){
    var b=rint(2,15), q=rint(2,20), a=b*q, num=a*a, den=b*b, ans=q;
    var offsets=shuffle([1,-1,2,-2,3,b]), wrongs=[];
    for(var i=0;i<offsets.length;i++){ var v=ans+offsets[i]; if(v>0&&v!==ans&&wrongs.length<3) wrongs.push(v); }
    while(wrongs.length<3) wrongs.push(ans+wrongs.length+3);
    var sol=buildSqQuotSolution(a,b,num,den,ans);
    return {question:tri('Simplify and find the value of '+K(FR(RT(num),RT(den)))+'.',K(FR(RT(num),RT(den)))+' ko simplify karke value nikalo.',K(FR(RT(num),RT(den)))+' को सरल करके मान ज्ञात कीजिए।'),ans:String(ans),w:wrongs.map(String),solution:sol};
  });
  H.vars('sq_quot',[
    function(){ var b=rint(2,10),q=rint(2,15), a=b*q, num=a*a,den=b*b, ans=a*a; var w=[(a+1)*(a+1),((a-1)*(a-1)>0?(a-1)*(a-1):(a+2)*(a+2)),a*b]; var sol=buildSqQuotV1Solution(a,b,q,num,den,ans); return {question:tri('In '+K(FR(RT('?'),RT(den))+' = '+q)+', what number should replace the question mark?',K(FR(RT('?'),RT(den))+' = '+q)+' me question mark ki jagah kaunsa number aayega?',K(FR(RT('?'),RT(den))+' = '+q)+' में प्रश्नचिह्न की जगह कौन सी संख्या आएगी?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var b=rint(2,8),k=rint(1,4),c=rint(2,8), a=b*k, ans=k*c; var w=[ans+2,(ans-1>0?ans-1:ans+3),a+b+c]; var sol=buildSqQuotV2Solution(a,b,c,ans); return {question:tri('Find the value of '+K(FR(RT(a*a),RT(b*b))+T+RT(c*c))+'.',K(FR(RT(a*a),RT(b*b))+T+RT(c*c))+' ki value nikalo.',K(FR(RT(a*a),RT(b*b))+T+RT(c*c))+' का मान ज्ञात कीजिए।'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var a=rint(2,10),b=rint(2,10), ans='Yes'; var w=['No','Only for perfect squares','Only when a is greater than b']; var sol=buildSqQuotV3Solution(a,b); return {question:tri('Is it true that '+K(RT(FR(a*a,b*b))+' = '+FR(a,b))+'?','Kya ye sahi hai ki '+K(RT(FR(a*a,b*b))+' = '+FR(a,b))+'?','क्या यह सही है कि '+K(RT(FR(a*a,b*b))+' = '+FR(a,b))+'?'),ans:ans,w:w,solution:sol}; },
    function(){ var n=rint(2,8),d=rint(2,8), g=gcd(n,d), num=n*n,den=d*d; var ans=K(FR(n/g,d/g)); var w=[K(FR(n/g+1,d/g)),K(FR(n/g,d/g+1)),K(FR((n/g>1?n/g-1:1),d/g))]; var sol=buildSqQuotV4Solution(n,d,g,num,den,(n/g)+'/'+(d/g)); return {question:tri('Simplify '+K(RT(FR(num,den)))+' to its lowest terms.',K(RT(FR(num,den)))+' ko simplest form me likho.',K(RT(FR(num,den)))+' को सरलतम रूप में लिखिए।'),ans:ans,w:w,solution:sol}; },
    function(){ var a=rint(2,12),b=rint(2,8), num=a*a,den=b*b, ans=den; var w=[(b+1)*(b+1),((b-1)*(b-1)>0?(b-1)*(b-1):(b+2)*(b+2)),b*b*4]; var sol=buildSqQuotV5Solution(a,b,num,den,ans); return {question:tri('In '+K(FR(RT(num),RT('?'))+' = '+FR(a,b))+', what number should replace the question mark?',K(FR(RT(num),RT('?'))+' = '+FR(a,b))+' me question mark ki jagah kya aayega?',K(FR(RT(num),RT('?'))+' = '+FR(a,b))+' में प्रश्नचिह्न की जगह क्या आएगा?'),ans:String(ans),w:w.map(String),solution:sol}; }
  ]);

  /* 19. Square Root of (n squared) Property */
  H.base('sq_n2_prop', function(){
    var variant=rint(0,2), n,ans,question,w1,w2,w3,nsq;
    if(variant===0){ n=rint(2,40); ans=n; nsq=n*n; w1=n*2; w2=n*n; w3=-n; question=tri('What is the value of '+K(RT(POW(n,2)))+'?',K(RT(POW(n,2)))+' ki value kya hai?',K(RT(POW(n,2)))+' का मान क्या है?'); }
    else if(variant===1){ n=rint(5,50); ans=n; nsq=n*n; w1=n+1; w2=n-1; w3=n*2; question=tri('What is the value of '+K(RT(nsq))+'?',K(RT(nsq))+' ki value kya hai?',K(RT(nsq))+' का मान क्या है?'); }
    else { n=rint(3,30); ans=n; nsq=n*n; w1=-n; w2=n*n; w3=n+2; question=tri(K(RT(POW(n,2)))+' is equal to which value?',K(RT(POW(n,2)))+' kiske barabar hai?',K(RT(POW(n,2)))+' किसके बराबर है?'); }
    var sol=buildSqN2PropSolution(n,nsq,ans,variant);
    return {question:question,ans:String(ans),w:[String(w1),String(w2),String(w3)],solution:sol};
  });
  H.vars('sq_n2_prop',[
    function(){ var n=-1*rint(2,20), nsq=n*n, ans=Math.abs(n); var w=[n,n*n,n+1]; var sol=buildSqN2PropV1Solution(n,nsq,ans); return {question:tri('What is the value of '+K(RT('('+n+')^{2}'))+'?',K(RT('('+n+')^{2}'))+' ki value kya hai?',K(RT('('+n+')^{2}'))+' का मान क्या है?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var a=rint(2,15),b=rint(2,15), ans=a+b; var w=[a*b,Math.abs(a-b),a+b+1]; var sol=buildSqN2PropV2Solution(a,b,ans); return {question:tri('What is '+K(RT(POW(a,2))+' + '+RT(POW(b,2)))+'?',K(RT(POW(a,2))+' + '+RT(POW(b,2)))+' kitna hai?',K(RT(POW(a,2))+' + '+RT(POW(b,2)))+' कितना है?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var n=rint(2,20), ans='True'; var w=['False','Only for positive n','Only for even n']; var sol=buildSqN2PropV3Solution(n); return {question:tri('Is the statement '+K(RT(POW(n,2))+' = '+Math.abs(n))+' always true?','Kya ye statement '+K(RT(POW(n,2))+' = '+Math.abs(n))+' hamesha sahi hai?','क्या यह कथन '+K(RT(POW(n,2))+' = '+Math.abs(n))+' हमेशा सही है?'),ans:ans,w:w,solution:sol}; },
    function(){ var a=rint(5,25),b=rint(2,a-1), ans=a-b; var w=[a+b,b-a,a*b]; var sol=buildSqN2PropV4Solution(a,b,ans); return {question:tri('What is '+K(RT(POW(a,2))+' - '+RT(POW(b,2)))+'?',K(RT(POW(a,2))+' - '+RT(POW(b,2)))+' kitna hai?',K(RT(POW(a,2))+' - '+RT(POW(b,2)))+' कितना है?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var n=rint(3,20), nsq=n*n, ans=n; var w=[-n,n+1,n*n]; var sol=buildSqN2PropV5Solution(n,nsq,ans); return {question:tri('If '+K(RT(nsq))+' equals a whole number, what is that number?',K(RT(nsq))+' ek whole number ke barabar hai, wo number kya hai?',K(RT(nsq))+' एक पूर्ण संख्या के बराबर है, वह संख्या क्या है?'),ans:String(ans),w:w.map(String),solution:sol}; }
  ]);
})();
