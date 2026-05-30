/* tier10 batch2 — templates 10-12 (sq_est_between, sq_simp, sq_prod) */
(function(){
  var H=window.QT; if(!H) return;
  var K=H.K,RT=H.RT,T=H.T,tri=H.tri;

  /* 10. Estimate Between Integers */
  H.base('sq_est_between', function(){
    var a=rint(2,30), num=a*a+rint(1,a*2), lo=a, hi=a+1;
    var pairs=[[lo-1,lo],[hi,hi+1],[lo-2,lo-1],[hi+1,hi+2],[lo+1,hi+1]].filter(function(p){return p[0]>0&&!(p[0]===lo&&p[1]===hi);});
    var picked=shuffle(pairs).slice(0,3);
    while(picked.length<3) picked.push([lo+picked.length+2,hi+picked.length+2]);
    var sol=buildSqEstBetweenSolution(a,num,lo,hi);
    return {question:tri(K(RT(num))+' lies between which two consecutive whole numbers?',K(RT(num))+' kin do lagataar whole numbers ke beech me hai?',K(RT(num))+' किन दो क्रमागत पूर्ण संख्याओं के बीच है?'),ans:lo+' and '+hi,w:picked.map(function(p){return p[0]+' and '+p[1];}),solution:sol};
  });
  H.vars('sq_est_between',[
    function(){ var a=rint(2,25), num=a*a+rint(1,a), ans=a; var w=[a+1,(a-1>0?a-1:a+2),a+2]; var sol=buildSqEstBetweenV1Solution(a,num,ans); return {question:tri(K(RT(num))+' is closest to which whole number?',K(RT(num))+' sabse kareeb kis whole number ke hai?',K(RT(num))+' सबसे निकट किस पूर्ण संख्या के है?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var a=rint(3,20), num=a*a+a, ans='Closer to '+a; var w=['Closer to '+(a+1),'Exactly midway','Closer to '+(a+2)]; var sol=buildSqEstBetweenV2Solution(a,num); return {question:tri('Is '+K(RT(num))+' closer to '+a+' or to '+(a+1)+'?',K(RT(num))+' '+a+' ke kareeb hai ya '+(a+1)+' ke?',K(RT(num))+' '+a+' के निकट है या '+(a+1)+' के?'),ans:ans,w:w,solution:sol}; },
    function(){ var a=rint(2,15), num=a*a+1, ans=a; var w=[a+1,(a-1>0?a-1:0),a+0.5]; var fmt=function(v){return Number.isInteger(v)?String(v):v.toFixed(1);}; var sol=buildSqEstBetweenV3Solution(a,num); return {question:tri(K(RT(num))+' is approximately equal to which whole number (nearest)?',K(RT(num))+' lagbhag kis nearest whole number ke barabar hai?',K(RT(num))+' लगभग किस निकटतम पूर्ण संख्या के बराबर है?'),ans:String(ans),w:w.map(fmt),solution:sol}; },
    function(){ var a=rint(3,15), n1=a*a+1, n2=a*a+a, ans='Both lie between '+a+' and '+(a+1); var w=['They lie in different ranges',K(RT(n1))+' lies between '+(a-1)+' and '+a,K(RT(n2))+' lies between '+(a+1)+' and '+(a+2)]; var sol=buildSqEstBetweenV4Solution(a,n1,n2); return {question:tri('Do '+K(RT(n1))+' and '+K(RT(n2))+' lie between the same two consecutive whole numbers?',K(RT(n1))+' aur '+K(RT(n2))+' kya same do lagataar whole numbers ke beech me hain?',K(RT(n1))+' और '+K(RT(n2))+' क्या समान दो क्रमागत पूर्ण संख्याओं के बीच हैं?'),ans:ans,w:w,solution:sol}; },
    function(){ var a=rint(3,20), num=a*a+a, ans='Between '+a+' and '+(a+1); var w=['Between '+(a-1)+' and '+a,'Between '+(a+1)+' and '+(a+2),'Between '+(a-2>0?a-2:a+3)+' and '+(a-1>0?a-1:a+4)]; var sol=buildSqEstBetweenV5Solution(a,num); return {question:tri(K(RT(num))+' lies between which two consecutive whole numbers?',K(RT(num))+' kin do lagataar whole numbers ke beech me hai?',K(RT(num))+' किन दो क्रमागत पूर्ण संख्याओं के बीच है?'),ans:ans,w:w,solution:sol}; }
  ]);

  /* 11. Simplify Root Expression */
  H.base('sq_simp', function(){
    var variant=rint(0,3), a=rint(2,20), b=rint(2,20), c=rint(2,15), va=a*a, vb=b*b, vc=c*c, expr, ans;
    if(variant===0){ expr=K(RT(va)+' + '+RT(vb)+' - '+RT(vc)); ans=a+b-c; }
    else if(variant===1){ expr=K(RT(va)+' - '+RT(vb)+' + '+RT(vc)); ans=a-b+c; }
    else if(variant===2){ expr=K(RT(va)+' + '+RT(vb)+' + '+RT(vc)); ans=a+b+c; }
    else { expr=K(RT(va)+' - '+RT(vb)+' - '+RT(vc)); ans=a-b-c; }
    var offsets=shuffle([2,-1,3,-2,5,4,-3]), wrongs=[];
    for(var i=0;i<offsets.length;i++){ if(offsets[i]!==0&&wrongs.indexOf(ans+offsets[i])<0&&wrongs.length<3) wrongs.push(ans+offsets[i]); }
    while(wrongs.length<3) wrongs.push(ans+wrongs.length*2+6);
    var sol=buildSqSimpSolution(a,b,c,variant,ans);
    return {question:tri('Simplify and find the value of '+expr+'.','Simplify karke maan gyaat karo: '+expr+'.','सरल करके मान ज्ञात कीजिए: '+expr+'।'),ans:String(ans),w:wrongs.map(String),solution:sol};
  });
  H.vars('sq_simp',[
    function(){ var a=rint(2,12),b=rint(2,12), ans=a*b; var w=[a+b,Math.abs(a-b),a*b+2]; var sol=buildSqSimpV1Solution(a,b,ans); return {question:tri('Find the value of '+K(RT(a*a)+T+RT(b*b))+'.','Maan gyaat karo: '+K(RT(a*a)+T+RT(b*b))+'.','मान ज्ञात कीजिए: '+K(RT(a*a)+T+RT(b*b))+'।'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var a=rint(2,10),b=rint(2,8),c=rint(2,6),d=rint(2,5), ans=a+b-c+d; var w=[ans+2,(ans-1>0?ans-1:ans+3),a-b+c+d]; var sol=buildSqSimpV2Solution(a,b,c,d,ans); return {question:tri('Find the value of '+K(RT(a*a)+' + '+RT(b*b)+' - '+RT(c*c)+' + '+RT(d*d))+'.','Maan gyaat karo: '+K(RT(a*a)+' + '+RT(b*b)+' - '+RT(c*c)+' + '+RT(d*d))+'.','मान ज्ञात कीजिए: '+K(RT(a*a)+' + '+RT(b*b)+' - '+RT(c*c)+' + '+RT(d*d))+'।'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var a=rint(2,10),b=rint(2,10), ans=a+b, sum=(a+b)*(a+b); var w=[a*b,(a-b>0?a-b:b-a),a+b+1]; var sol=buildSqSimpV3Solution(a,b,ans); return {question:tri('Find the value of '+K(RT(sum))+'.','Maan gyaat karo: '+K(RT(sum))+'.','मान ज्ञात कीजिए: '+K(RT(sum))+'।'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var a=rint(2,15), ans=3*a; var w=[3*a+2,(3*a-2>0?3*a-2:3*a+4),a*4]; var sol=buildSqSimpV4Solution(a,ans); return {question:tri('Find the value of '+K(RT(a*a)+' + '+RT(a*a)+' + '+RT(a*a))+'.','Maan gyaat karo: '+K(RT(a*a)+' + '+RT(a*a)+' + '+RT(a*a))+'.','मान ज्ञात कीजिए: '+K(RT(a*a)+' + '+RT(a*a)+' + '+RT(a*a))+'।'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var a=rint(2,12),b=rint(2,12), sum=a+b; var w=[(a-b>0?a-b:b-a),a+1,a*b]; var sol=buildSqSimpV5Solution(a,b,sum); return {question:tri(K(RT(a*a))+' + ? = '+sum+'. What number goes in the blank?',K(RT(a*a))+' + ? = '+sum+'. Blank me kya aayega?',K(RT(a*a))+' + ? = '+sum+'. रिक्त स्थान में क्या आएगा?'),ans:String(b),w:w.map(String),solution:sol}; }
  ]);

  /* 12. Product Under Root */
  H.base('sq_prod', function(){
    var a=rint(2,20),b=rint(2,20), ans=a*b;
    var offsets=shuffle([2,-1,3,a,-2,b,5]), wrongs=[];
    for(var i=0;i<offsets.length;i++){ var v=ans+offsets[i]; if(v>0&&v!==ans&&wrongs.indexOf(v)<0&&wrongs.length<3) wrongs.push(v); }
    while(wrongs.length<3) wrongs.push(ans+wrongs.length+4);
    var sol=buildSqProdSolution(a,b,ans);
    return {question:tri('Find the value of '+K(RT(a*a+T+b*b))+'.','Maan gyaat karo: '+K(RT(a*a+T+b*b))+'.','मान ज्ञात कीजिए: '+K(RT(a*a+T+b*b))+'।'),ans:String(ans),w:wrongs.map(String),solution:sol};
  });
  H.vars('sq_prod',[
    function(){ var a=rint(2,12),b=rint(2,12), n=a*a*b*b, ans=a*b; var w=[a+b,a*b+1,(a*b-1>0?a*b-1:a*b+2)]; var sol=buildSqProdV1Solution(a,b,ans); return {question:tri('Given that '+n+' = '+K((a*a)+T+(b*b))+', find '+K(RT(n))+'.','Agar '+n+' = '+K((a*a)+T+(b*b))+', to '+K(RT(n))+' gyaat karo.','यदि '+n+' = '+K((a*a)+T+(b*b))+', तो '+K(RT(n))+' ज्ञात कीजिए।'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var a=rint(2,10),b=rint(2,10), n=a*a*b*b, ans=a*a; var w=[b*b,a*b,a+b]; var sol=buildSqProdV2Solution(a,b,ans); return {question:tri('It is given that '+K(RT(n))+' = '+(a*b)+'. One of the perfect-square factors under the root is:',K(RT(n))+' = '+(a*b)+'. Root ke andar ek perfect-square factor:',K(RT(n))+' = '+(a*b)+'. मूल के अंदर एक पूर्ण-वर्ग गुणनखंड:'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var a=rint(2,6),b=rint(2,6),c=rint(2,6), n=a*a*b*b*c*c, ans=a*b*c; var w=[a+b+c,a*b*c+1,(a*b*c-1>0?a*b*c-1:a*b*c+2)]; var sol=buildSqProdV3Solution(a,b,c,ans); return {question:tri('Find the value of '+K(RT((a*a)+T+(b*b)+T+(c*c)))+'.','Maan gyaat karo: '+K(RT((a*a)+T+(b*b)+T+(c*c)))+'.','मान ज्ञात कीजिए: '+K(RT((a*a)+T+(b*b)+T+(c*c)))+'।'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var a=rint(2,10),b=rint(2,10), ans=a*b; var sol=buildSqProdV4Solution(a,b); return {question:tri('We see that '+K(RT(a*a)+T+RT(b*b))+' = '+(a*b)+'. Which property of square roots does this illustrate?',K(RT(a*a)+T+RT(b*b))+' = '+(a*b)+'. Yeh square root ki kaunsi property dikhata hai?',K(RT(a*a)+T+RT(b*b))+' = '+(a*b)+'. यह वर्गमूल का कौन सा गुण दर्शाता है?'),ans:K(RT('a')+T+RT('b')+' = '+RT('ab')),w:[K(RT('a')+' + '+RT('b')+' = '+RT('a+b')),K(RT('a')+T+RT('b')+' = '+RT('a')+T+'b'),K(RT('ab')+' = a + b')],solution:sol}; },
    function(){ var a=rint(2,10),b=rint(2,8), n=a*a*b*b, ans=b*b; var w=[a*a,a*b,a*a+b*b]; var sol=buildSqProdV5Solution(a,b,ans); return {question:tri('In '+K(RT((a*a)+T+'?'))+' = '+(a*b)+', what number replaces the ? under the root?',K(RT((a*a)+T+'?'))+' = '+(a*b)+'. Root ke andar ? ki jagah kya aayega?',K(RT((a*a)+T+'?'))+' = '+(a*b)+'. मूल के अंदर ? के स्थान पर क्या आएगा?'),ans:String(ans),w:w.map(String),solution:sol}; }
  ]);
})();
