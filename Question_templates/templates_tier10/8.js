/* tier10 batch5 — templates cb_pf, cb_root1, cb_neg (base+variants) */
(function(){
  var H=window.QT; if(!H) return;
  var K=H.K,CRT=H.CRT,FR=H.FR,POW=H.POW,T=H.T,tri=H.tri;

  /* 23. Cube Root by Prime Factorization */
  H.base('cb_pf', function(){
    var primes=[2,3,5,7,11,13,17,19,23,29];
    var k=rint(2,3);
    var chosen=shuffle(primes).slice(0,k);
    var cube=chosen.reduce(function(x,p){return x*p*p*p;},1);
    var r=chosen.reduce(function(x,p){return x*p;},1);
    var offsets=shuffle([2,-1,3,-2,4,5,-3]), wrongs=[];
    for(var i=0;i<offsets.length;i++){ var v=r+offsets[i]; if(v>0&&v!==r&&wrongs.length<3) wrongs.push(v); }
    while(wrongs.length<3) wrongs.push(r+wrongs.length+6);
    var sol=buildCbPfSolution(cube,r,chosen);
    return {question:tri('Find the value of '+K(CRT(cube))+'.',K(CRT(cube))+' ki value nikalo.',K(CRT(cube))+' का मान ज्ञात कीजिए।'),ans:String(r),w:wrongs.map(String),solution:sol};
  });
  H.vars('cb_pf',[
    function(){ var primes=[2,3,5,7,11]; var k=rint(2,3); var chosen=shuffle(primes).slice(0,k); var cube=chosen.reduce(function(x,p){return x*p*p*p;},1); var r=chosen.reduce(function(x,p){return x*p;},1); var factor=chosen.map(function(p){return POW(p,3);}).join(T); var w=[r+1,(r-1>0?r-1:r+2),r*2]; var sol=buildCbPfV1Solution(cube,r,chosen); return {question:tri('Given that '+K(cube+' = '+factor)+', find '+K(CRT(cube))+'.',K(cube+' = '+factor)+' diya hai. '+K(CRT(cube))+' nikalo.',K(cube+' = '+factor)+' दिया है। '+K(CRT(cube))+' ज्ञात कीजिए।'),ans:String(r),w:w.map(String),solution:sol}; },
    function(){ var a=rint(2,8),b=rint(2,8), ans=a*b; var w=[a*b+2,a+b,(a*b-1>0?a*b-1:a*b+3)]; var sol=buildCbPfV2Solution(a,b,ans); return {question:tri('What is the value of '+K(CRT(a*a*a)+T+CRT(b*b*b))+'?',K(CRT(a*a*a)+T+CRT(b*b*b))+' kitna hai?',K(CRT(a*a*a)+T+CRT(b*b*b))+' कितना है?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var p=pick([2,3,5,7]), n=p*p, ans=p; var w=[p*2,p*p,p+1]; var sol=buildCbPfV3Solution(p,n); return {question:tri('We know '+K(n+' = '+POW(p,2))+'. By what number should it be multiplied to make it a perfect cube?',K(n+' = '+POW(p,2))+'. Ise kis number se multiply karein ki perfect cube bane?',K(n+' = '+POW(p,2))+'। इसे किस संख्या से गुणा करें कि पूर्ण घन बने?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var a=rint(2,8),b=rint(2,8), ans=a*b; var w=[a+b,Math.abs(a-b),a*b+1]; var sol=buildCbPfV4Solution(a,b,ans); return {question:tri('Find the value of '+K(CRT(a*a*a+T+b*b*b))+'.',K(CRT(a*a*a+T+b*b*b))+' ki value nikalo.',K(CRT(a*a*a+T+b*b*b))+' का मान ज्ञात कीजिए।'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var a=rint(2,10),b=rint(2,8), ans=a, num=a*a*a*b*b*b, den=b*b*b; var w=[a+1,(a-1>0?a-1:a+2),a*b]; var sol=buildCbPfV5Solution(a,b,num,den,ans); return {question:tri('Simplify and find the value of '+K(FR(CRT(num),CRT(den)))+'.',K(FR(CRT(num),CRT(den)))+' ko simplify karke value nikalo.',K(FR(CRT(num),CRT(den)))+' को सरल करके मान ज्ञात कीजिए।'),ans:String(ans),w:w.map(String),solution:sol}; }
  ]);

  /* 24. Cube Root of Perfect Cubes */
  H.base('cb_root1', function(){
    var r=rint(-3,15), n=r*r*r, ans=r;
    var offsets=shuffle([1,-1,2,-2,3]), wrongs=[];
    for(var i=0;i<offsets.length;i++){ if(ans+offsets[i]!==ans && wrongs.length<3) wrongs.push(ans+offsets[i]); }
    while(wrongs.length<3) wrongs.push(ans+wrongs.length+2);
    var sol=buildCbRoot1Solution(r,n);
    return {question:tri('What is the value of '+K(CRT(n))+'?',K(CRT(n))+' kya hai?',K(CRT(n))+' क्या है?'),ans:String(ans),w:wrongs.map(String),solution:sol};
  });
  H.vars('cb_root1',[
    function(){ var ans=0; var w=[1,-1,2]; var sol=buildCbRoot1V1Solution(); return {question:tri('What is the value of '+K(CRT(0))+'?',K(CRT(0))+' kya hai?',K(CRT(0))+' क्या है?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var ans=2; var w=[1,0,-1]; var sol=buildCbRoot1V2Solution(); return {question:tri('What is '+K(CRT(1)+' + '+CRT(1))+'?',K(CRT(1)+' + '+CRT(1))+' kitna hai?',K(CRT(1)+' + '+CRT(1))+' कितना है?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var n=rint(2,15), ans=n; var w=[-n,n*n,n*n*n]; var sol=buildCbRoot1V3Solution(n); return {question:tri('What is the value of '+K(CRT(POW(n,3)))+'?',K(CRT(POW(n,3)))+' kya hai?',K(CRT(POW(n,3)))+' का मान क्या है?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var n=rint(2,10), cube=n*n*n; var w=[n+1,(n-1>0?n-1:n+2),-n]; var sol=buildCbRoot1V4Solution(n,cube); return {question:tri('If '+K(POW('y',3)+' = '+cube)+', what is the value of y?','Agar '+K(POW('y',3)+' = '+cube)+', to y ki value kya hai?','यदि '+K(POW('y',3)+' = '+cube)+', तो y का मान क्या है?'),ans:String(n),w:w.map(String),solution:sol}; },
    function(){ var a=rint(1,5),b=rint(1,5), ans=a+b; var w=[a*b,(a-b>0?a-b:0),ans+1]; var sol=buildCbRoot1V5Solution(a,b,ans); return {question:tri('What is '+K(CRT(a*a*a)+' + '+CRT(b*b*b))+'?',K(CRT(a*a*a)+' + '+CRT(b*b*b))+' kitna hai?',K(CRT(a*a*a)+' + '+CRT(b*b*b))+' कितना है?'),ans:String(ans),w:w.map(String),solution:sol}; }
  ]);

  /* 25. Cube Root of a Negative Number */
  H.base('cb_neg', function(){
    var r=rint(2,15), cube=-(r*r*r);
    var offsets=shuffle([r,-r*r,r*r,r+1,r-1,r*2]), wrongs=[];
    for(var i=0;i<offsets.length;i++){ if(offsets[i]!==-r && wrongs.length<3) wrongs.push(offsets[i]); }
    while(wrongs.length<3) wrongs.push(r+wrongs.length);
    var sol=buildCbNegSolution(r,cube);
    return {question:tri('What is the value of '+K(CRT('('+cube+')'))+'?',K(CRT('('+cube+')'))+' kya hai?',K(CRT('('+cube+')'))+' का मान क्या है?'),ans:String(-r),w:wrongs.map(String),solution:sol};
  });
  H.vars('cb_neg',[
    function(){ var r=rint(2,12), pos=r*r*r, ans=-r; var w=[r,r*r,-(r*r*r)]; var sol=buildCbNegV1Solution(r,pos); return {question:tri('What is the value of '+K(CRT('('+(-pos)+')'))+'?',K(CRT('('+(-pos)+')'))+' kya hai?',K(CRT('('+(-pos)+')'))+' का मान क्या है?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var r=rint(2,10), negCube=-(r*r*r), ans=r; var w=[-r,r*r,negCube]; var sol=buildCbNegV2Solution(r,negCube); return {question:tri('If '+K(CRT('y')+' = '+(-r))+', what is the value of y?','Agar '+K(CRT('y')+' = '+(-r))+', to y kya hai?','यदि '+K(CRT('y')+' = '+(-r))+', तो y क्या है?'),ans:String(negCube),w:w.map(String),solution:sol}; },
    function(){ var r=rint(2,8); var w=[r,-r*r,r*r*r]; var sol=buildCbNegV3Solution(r); return {question:tri('What is '+K(CRT(r*r*r)+' + '+CRT('('+(-(r*r*r))+')'))+'?',K(CRT(r*r*r)+' + '+CRT('('+(-(r*r*r))+')'))+' kitna hai?',K(CRT(r*r*r)+' + '+CRT('('+(-(r*r*r))+')'))+' कितना है?'),ans:String(0),w:w.map(String),solution:sol}; },
    function(){ var a=rint(2,8),b=rint(2,8), ans=a-b; var w=[a+b,b-a,Math.abs(a-b)+2]; var sol=buildCbNegV4Solution(a,b,ans); return {question:tri('When b is greater than a, what is the value of '+K(CRT(a*a*a)+' - '+CRT(b*b*b))+'?','Jab b, a se bada ho, to '+K(CRT(a*a*a)+' - '+CRT(b*b*b))+' kitna hai?','जब b, a से बड़ा हो, तो '+K(CRT(a*a*a)+' - '+CRT(b*b*b))+' कितना है?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var r=rint(2,10), negCube=-(r*r*r), ans=r*r*r; var w=[r*r*r+1,r*r*r-1,r*r]; var sol=buildCbNegV5Solution(r,negCube,ans); return {question:tri('What do you get when you cube '+K(CRT(r*r*r))+'?',K(CRT(r*r*r))+' ka cube karne par kya milta hai?',K(CRT(r*r*r))+' का घन करने पर क्या मिलता है?'),ans:String(ans),w:w.map(String),solution:sol}; }
  ]);
})();
