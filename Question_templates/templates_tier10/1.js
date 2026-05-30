/* tier10 batch1 — templates 1-3 (sq_direct, sq_pf, sq_longdiv) */
(function(){
  var H=window.QT; if(!H) return;
  var K=H.K,RT=H.RT,POW=H.POW,T=H.T,D=H.D,tri=H.tri;

  /* 1. Perfect Square - Direct */
  H.base('sq_direct', function(){
    var r=rint(2,50), sq=r*r;
    var offsets=shuffle([1,2,3,4,5,-1,-2,-3]), wrongs=[];
    for(var i=0;i<offsets.length;i++){ var v=r+offsets[i]; if(v>0&&v!==r&&wrongs.length<3) wrongs.push(v); }
    while(wrongs.length<3) wrongs.push(r+wrongs.length+5);
    var sol=buildSqDirectV0Solution(sq,r);
    return {question:tri('Find the square root of the perfect square '+K(sq)+', i.e. evaluate '+K(RT(sq))+'.','Perfect square '+K(sq)+' ka square root nikaalo, yaani '+K(RT(sq))+'.','पूर्ण वर्ग '+K(sq)+' का वर्गमूल ज्ञात कीजिए, अर्थात् '+K(RT(sq))+'।'),ans:String(r),w:wrongs.map(String),solution:sol};
  });
  H.vars('sq_direct',[
    function(){ var r=rint(2,30), ans=r*r; var w=[ans+2*r+1,(ans-2*r+1>0?ans-2*r+1:ans+4*r+4),ans+r*2]; var sol=buildSqDirectV1Solution(r,ans); return {question:tri('If '+K(RT('x'))+' = '+K(r)+', find the value of x.','Agar '+K(RT('x'))+' = '+K(r)+' hai, to x ka maan gyaat karo.','यदि '+K(RT('x'))+' = '+K(r)+' है, तो x का मान ज्ञात कीजिए।'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var a=rint(2,15),b=rint(2,15), sa=a*a,sb=b*b, ans=a+b; var w=[a+b+2,(a+b-2>0?a+b-2:a+b+4),a+b+1]; var sol=buildSqDirectV2Solution(a,b,ans); return {question:tri('Find the value of '+K(RT(sa)+' + '+RT(sb))+'.','Maan gyaat karo: '+K(RT(sa)+' + '+RT(sb))+'.','मान ज्ञात कीजिए: '+K(RT(sa)+' + '+RT(sb))+'।'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var r=rint(2,25), ans=r*r; var offsets=shuffle([1,-1,2,-2,3]), w=[]; for(var i=0;i<offsets.length;i++){ var o=offsets[i], v=ans+2*r*o+o*o; if(v>0&&v!==ans&&w.length<3) w.push(v); } while(w.length<3) w.push(ans+w.length*5+10); var sol=buildSqDirectV3Solution(r,ans); return {question:tri('Which number has a square root equal to '+K(r)+'?','Kis number ka square root '+K(r)+' hai?','किस संख्या का वर्गमूल '+K(r)+' है?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var a=rint(5,20),b=rint(2,a-1), sa=a*a,sb=b*b, ans=a-b; var w=[a-b+2,(a-b-1>0?a-b-1:a-b+3),a+b]; var sol=buildSqDirectV4Solution(a,b,ans); return {question:tri('Find the value of '+K(RT(sa)+' - '+RT(sb))+'.','Maan gyaat karo: '+K(RT(sa)+' - '+RT(sb))+'.','मान ज्ञात कीजिए: '+K(RT(sa)+' - '+RT(sb))+'।'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var r=rint(2,30), sq=r*r; var w=[r+1,(r-1>0?r-1:r+2),-r]; var sol=buildSqDirectV5Solution(r,sq); return {question:tri('If '+K(POW('n','2'))+' = '+K(sq)+', what is the positive value of n?','Agar '+K(POW('n','2'))+' = '+K(sq)+', to n ka positive maan kya hai?','यदि '+K(POW('n','2'))+' = '+K(sq)+', तो n का धनात्मक मान क्या है?'),ans:String(r),w:w.map(String),solution:sol}; }
  ]);

  /* 2. Prime Factorization */
  H.base('sq_pf', function(){
    var primes=[2,3,5,7,11,13,17,19,23,29], k=rint(2,4), chosen=shuffle(primes).slice(0,k);
    var sq=chosen.reduce(function(a,p){return a*p*p;},1), r=chosen.reduce(function(a,p){return a*p;},1);
    var offsets=shuffle([2,-1,3,-2,4,5,-3]), wrongs=[];
    for(var i=0;i<offsets.length;i++){ var v=r+offsets[i]; if(v>0&&v!==r&&wrongs.length<3) wrongs.push(v); }
    while(wrongs.length<3) wrongs.push(r+wrongs.length+6);
    var sol=buildSqPfSolution(sq,r,chosen);
    return {question:tri('Using prime factorisation, evaluate '+K(RT(sq))+'.','Prime factorisation se '+K(RT(sq))+' ka maan gyaat karo.','अभाज्य गुणनखंड विधि से '+K(RT(sq))+' का मान ज्ञात कीजिए।'),ans:String(r),w:wrongs.map(String),solution:sol};
  });
  H.vars('sq_pf',[
    function(){ var primes=[2,3,5,7,11,13], k=rint(2,3), chosen=shuffle(primes).slice(0,k); var sq=chosen.reduce(function(a,p){return a*p*p;},1), r=chosen.reduce(function(a,p){return a*p;},1); var w=[r+1,(r-1>0?r-1:r+2),r*2]; var sol=buildSqPfSolution(sq,r,chosen); var pf=chosen.map(function(p){return POW(p,'2');}).join(T); return {question:tri('If '+K(sq+' = '+pf)+', find '+K(RT(sq))+'.','Agar '+K(sq+' = '+pf)+', to '+K(RT(sq))+' gyaat karo.','यदि '+K(sq+' = '+pf)+', तो '+K(RT(sq))+' ज्ञात कीजिए।'),ans:String(r),w:w.map(String),solution:sol}; },
    function(){ var a=rint(2,10),b=rint(2,10), sa=a*a,sb=b*b, ans=a*b; var w=[a*b+2,(a*b-1>0?a*b-1:a*b+3),a+b]; var sol=buildSqPfSolution(sa*sb,ans,[a,b]); return {question:tri('Find the value of '+K(RT(sa)+T+RT(sb))+'.','Maan gyaat karo: '+K(RT(sa)+T+RT(sb))+'.','मान ज्ञात कीजिए: '+K(RT(sa)+T+RT(sb))+'।'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var p=pick([2,3,5,7,11]), num=p*p*p, ans=p; var w=[p*2,p*p,p+1]; var sol=buildSqPfV3Solution(p,num); return {question:tri('Given that '+K(num+' = '+POW(p,'3'))+', by what smallest whole number should it be multiplied to make it a perfect square?','Diya hai '+K(num+' = '+POW(p,'3'))+'. Ise sabse chhote kis number se multiply karein ki perfect square ban jaaye?','दिया है '+K(num+' = '+POW(p,'3'))+'। इसे किस सबसे छोटी संख्या से गुणा करें कि पूर्ण वर्ग बन जाए?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var a=rint(2,12),b=rint(2,8), n=a*a*b; var sol=buildSqPfV4Solution(a,b,n); var ans=K(a+RT(b)), w1=K((a+1)+RT(b)), w2=K(a+RT(b+1)), w3=K((a-1>0?a-1:a+2)+RT(b)); return {question:tri('Simplify the square root '+K(RT(n))+' to its simplest radical form.','Square root '+K(RT(n))+' ko sabse simple radical form me likho.','वर्गमूल '+K(RT(n))+' को सरलतम करणी रूप में लिखिए।'),ans:ans,w:[w1,w2,w3],solution:sol}; },
    function(){ var a=rint(2,15),b=rint(2,10), ans=a, num=a*a*b*b, den=b*b; var w=[a+1,(a-1>0?a-1:a+2),a*b]; var sol=buildSqPfV5Solution(a,b,num,den); return {question:tri('Find the value of '+K(RT(num)+D+RT(den))+'.','Maan gyaat karo: '+K(RT(num)+D+RT(den))+'.','मान ज्ञात कीजिए: '+K(RT(num)+D+RT(den))+'।'),ans:String(ans),w:w.map(String),solution:sol}; }
  ]);

  /* 3. Long Division */
  H.base('sq_longdiv', function(){
    var a=rint(10,50), sq=a*a;
    var offsets=shuffle([1,-1,2,-2,3,-3,5,-5]), wrongs=[];
    for(var i=0;i<offsets.length;i++){ var v=a+offsets[i]; if(v>0&&v!==a&&wrongs.length<3) wrongs.push(v); }
    while(wrongs.length<3) wrongs.push(a+wrongs.length+7);
    var sol=buildSqLongdivSolution(sq,a);
    return {question:tri('Using the long division method, find '+K(RT(sq))+'.','Long division method se '+K(RT(sq))+' gyaat karo.','दीर्घ विभाजन विधि से '+K(RT(sq))+' ज्ञात कीजिए।'),ans:String(a),w:wrongs.map(String),solution:sol};
  });
  H.vars('sq_longdiv',[
    function(){ var r=rint(10,40), ans=r*r; var w=[ans+2*r+1,(ans-2*r+1>0?ans-2*r+1:ans+4*r+4),ans+r]; var sol=buildSqLongdivV1Solution(r,ans); return {question:tri('By the long division method, the square root of a number comes out to be '+K(r)+'. What is that number?','Long division se kisi number ka square root '+K(r)+' aaya. Wo number kya hai?','दीर्घ विभाजन से किसी संख्या का वर्गमूल '+K(r)+' आया। वह संख्या क्या है?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var a,b; do{ a=rint(10,30); b=rint(10,30); }while(a===b); var sa=a*a,sb=b*b, ans=Math.max(a,b); var w=[Math.min(a,b),a+b,Math.abs(a-b)]; var sol=buildSqLongdivV2Solution(a,b,sa,sb); return {question:tri('Which value is larger: '+K(RT(sa))+' or '+K(RT(sb))+'? (give the larger square root)','Bada kaun hai: '+K(RT(sa))+' ya '+K(RT(sb))+'? (bada square root batao)','बड़ा कौन है: '+K(RT(sa))+' या '+K(RT(sb))+'? (बड़ा वर्गमूल बताइए)'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var n=rint(2,4), lo=Math.pow(10,2*(n-1)), num=rint(lo,lo+8999), ans=n; var w=[n+1,(n-1>0?n-1:n+2),n+2]; var sol=buildSqLongdivV3Solution(n,num); return {question:tri('When finding '+K(RT(num))+' by long division, into how many pairs are the digits of '+K(num)+' grouped?','Long division se '+K(RT(num))+' nikaalte waqt '+K(num)+' ke digits kitne jodo (pairs) me bante hain?','दीर्घ विभाजन से '+K(RT(num))+' निकालते समय '+K(num)+' के अंक कितने युग्मों में बँटते हैं?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var r=rint(10,40), sq=r*r, wrong=shuffle([r+1,(r-1>0?r-1:r+2),r+2]); var sol=buildSqLongdivV4Solution(r,sq); return {question:tri('The long division of '+K(RT(sq))+' gives which result?','Long division se '+K(RT(sq))+' ka result kya aata hai?','दीर्घ विभाजन से '+K(RT(sq))+' का परिणाम क्या आता है?'),ans:String(r),w:wrong.map(String),solution:sol}; },
    function(){ var r=rint(10,40), sq=r*r, ans=String(r).split('').reduce(function(a,d){return a+Number(d);},0); var w=[ans+1,(ans-1>0?ans-1:ans+2),ans+2]; var sol=buildSqLongdivV5Solution(r,sq,ans); return {question:tri('Find '+K(RT(sq))+' by long division, then add the digits of the answer. What is the digit sum?','Long division se '+K(RT(sq))+' nikaalo, fir uske digits ko jodo. Digit sum kya hai?','दीर्घ विभाजन से '+K(RT(sq))+' निकालिए, फिर उत्तर के अंकों का योग कीजिए। अंकों का योग क्या है?'),ans:String(ans),w:w.map(String),solution:sol}; }
  ]);
})();
