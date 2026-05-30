/* tier10 batch1 — templates 1-6 (sq_direct, sq_pf, sq_longdiv, sq_repsub, sq_decimal, sq_frac) */
(function(){
  var H=window.QT; if(!H) return;
  var K=H.K,RT=H.RT,FR=H.FR,POW=H.POW,T=H.T,D=H.D,tri=H.tri;

  /* 1. Perfect Square - Direct */
  H.base('sq_direct', function(){
    var r=rint(2,50), sq=r*r;
    var offsets=shuffle([1,2,3,4,5,-1,-2,-3]), wrongs=[];
    for(var i=0;i<offsets.length;i++){ var v=r+offsets[i]; if(v>0&&v!==r&&wrongs.length<3) wrongs.push(v); }
    while(wrongs.length<3) wrongs.push(r+wrongs.length+5);
    var sol=buildSqDirectV0Solution(sq,r);
    return {question:tri(
      'Find the square root of the perfect square '+K(sq)+', i.e. evaluate '+K(RT(sq))+'.',
      'Perfect square '+K(sq)+' ka square root nikaalo, yaani '+K(RT(sq))+'.',
      'पूर्ण वर्ग '+K(sq)+' का वर्गमूल ज्ञात कीजिए, अर्थात् '+K(RT(sq))+'।'
    ),ans:String(r),w:wrongs.map(String),solution:sol};
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
    function(){ var p=pick([2,3,5,7,11]), num=p*p*p, ans=p; var w=[p*2,p*p,p+1]; var sol=buildSqPfV3Solution(p,num); return {question:tri('Given that '+K(num+' = '+POW(p,'3'))+', by what smallest number should it be multiplied to make it a perfect square?','Diya hai '+K(num+' = '+POW(p,'3'))+'. Ise sabse chhote kis number se multiply karein ki perfect square ban jaaye?','दिया है '+K(num+' = '+POW(p,'3'))+'। इसे किस सबसे छोटी संख्या से गुणा करें 