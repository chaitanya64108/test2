/* tier10 batch3 — templates sq_area_side, sq_digits, sq_root1 (base+variants) */
(function(){
  var H=window.QT; if(!H) return;
  var K=H.K,RT=H.RT,POW=H.POW,tri=H.tri;

  /* 13. Word Problem: Area → Side */
  H.base('sq_area_side', function(){
    var s=rint(5,50), area=s*s;
    var offsets=shuffle([5,-3,3,-5,7,-2,10]), wrongs=[];
    for(var i=0;i<offsets.length;i++){ var v=s+offsets[i]; if(v>0&&v!==s&&wrongs.length<3) wrongs.push(v); }
    while(wrongs.length<3) wrongs.push(s+wrongs.length*2+4);
    var sol=buildSqAreaSideSolution(s,area);
    return {question:tri('The area of a square field is '+area+' square metres. Find the length of one side.','Ek square field ka area '+area+' square metre hai. Ek side ki length kya hogi?','एक वर्गाकार मैदान का क्षेत्रफल '+area+' वर्ग मीटर है। एक भुजा की लंबाई ज्ञात कीजिए।'),ans:s+' m',w:wrongs.map(function(v){return v+' m';}),solution:sol};
  });
  H.vars('sq_area_side',[
    function(){ var s=rint(5,40), ans=s*s; var w=[ans+10,(ans-10>0?ans-10:ans+20),4*s]; var sol=buildSqAreaSideV1Solution(s,ans); return {question:tri('The side of a square field is '+s+' m. What is its area?','Ek square field ki side '+s+' m hai. Iska area kya hoga?','एक वर्गाकार मैदान की भुजा '+s+' m है। इसका क्षेत्रफल क्या होगा?'),ans:ans+' sq m',w:w.map(function(v){return v+' sq m';}),solution:sol}; },
    function(){ var s=rint(3,20), area=s*s, ans=s; var w=[s+1,(s-1>0?s-1:s+2),2*s]; var sol=buildSqAreaSideV2Solution(s,area); return {question:tri('A square room has an area of '+area+' square feet. What is the length of one wall?','Ek square room ka area '+area+' square feet hai. Ek diwar ki length kya hai?','एक वर्गाकार कमरे का क्षेत्रफल '+area+' वर्ग फुट है। एक दीवार की लंबाई क्या है?'),ans:ans+' ft',w:w.map(function(v){return v+' ft';}),solution:sol}; },
    function(){ var a=rint(5,20),b=rint(5,20), ans=Math.abs(a-b); var w=[a+b,Math.abs(a*a-b*b),ans+2]; var sol=buildSqAreaSideV3Solution(a,b,ans); return {question:tri('Two square fields have sides of '+a+' m and '+b+' m. What is the difference between their sides?','Do square field ki sides '+a+' m aur '+b+' m hain. Sides me kitna difference hai?','दो वर्गाकार मैदानों की भुजाएँ '+a+' m और '+b+' m हैं। भुजाओं में कितना अंतर है?'),ans:ans+' m',w:w.map(function(v){return v+' m';}),solution:sol}; },
    function(){ var s=rint(5,25), area=s*s, rate=rint(10,50), cost=area*rate; var w=[cost+500,(cost-500>0?cost-500:cost+1000),cost+1000]; var sol=buildSqAreaSideV4Solution(s,area,rate,cost); return {question:tri('A square floor has a side of '+s+' m. Tiling it costs Rs '+rate+' per square metre. What is the total cost?','Ek square floor ki side '+s+' m hai. Tiling Rs '+rate+' per square metre hai. Total cost kitna hoga?','एक वर्गाकार फर्श की भुजा '+s+' m है। टाइलिंग Rs '+rate+' प्रति वर्ग मीटर है। कुल खर्च कितना होगा?'),ans:'Rs '+cost,w:w.map(function(v){return 'Rs '+v;}),solution:sol}; },
    function(){ var s=rint(10,30), w2=rint(1,3), outer=(s+2*w2)*(s+2*w2), inner=s*s, ans=outer-inner; var wrongs=[ans+10,(ans-10>0?ans-10:ans+20),2*w2*(s+w2)]; var sol=buildSqAreaSideV5Solution(s,w2,ans); return {question:tri('A path '+w2+' m wide runs all around a square field of side '+s+' m. What is the area of the path?','Ek '+w2+' m chauda path '+s+' m side ke square field ke chaaro taraf hai. Path ka area kya hai?','एक '+w2+' m चौड़ा पथ '+s+' m भुजा वाले वर्गाकार मैदान के चारों ओर है। पथ का क्षेत्रफल क्या है?'),ans:ans+' sq m',w:wrongs.map(function(v){return v+' sq m';}),solution:sol}; }
  ]);

  /* 15. Digits in Square Root */
  H.base('sq_digits', function(){
    var n=rint(1,6), lo=Math.pow(10,2*(n-1)), hi=Math.pow(10,2*n)-1, num=rint(lo,Math.min(hi,lo+9999)), ans=n;
    var offsets=shuffle([1,-1,2,-2,3]), wrongs=[];
    for(var i=0;i<offsets.length;i++){ var v=ans+offsets[i]; if(v>0&&v!==ans&&wrongs.length<3) wrongs.push(v); }
    while(wrongs.length<3) wrongs.push(ans+wrongs.length+2);
    var sol=buildSqDigitsSolution(n,num,ans);
    return {question:tri('How many digits will the value of '+K(RT(num))+' have?',K(RT(num))+' ki value me kitne digits honge?',K(RT(num))+' के मान में कितने अंक होंगे?'),ans:String(ans),w:wrongs.map(String),solution:sol};
  });
  H.vars('sq_digits',[
    function(){ var n=rint(2,5), lo=Math.pow(10,2*(n-1)), hi=Math.pow(10,2*n)-1, ans=n; var w=[n+1,(n-1>0?n-1:n+2),n+2]; var sol=buildSqDigitsV1Solution(n,lo,hi); return {question:tri('A number lies between '+lo+' and '+hi+'. How many digits will its square root have?','Ek number '+lo+' se '+hi+' ke beech me hai. Iske square root me kitne digits honge?','एक संख्या '+lo+' से '+hi+' के बीच है। इसके वर्गमूल में कितने अंक होंगे?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var n=rint(2,4), ans=2*n; var w=[n+1,(n-1>0?n-1:n+2),n*2+1]; var sol=buildSqDigitsV2Solution(n); return {question:tri('The square root of a number has '+n+' digits. How many digits does the number itself have?','Ek number ke square root me '+n+' digits hain. To number me kitne digits honge?','एक संख्या के वर्गमूल में '+n+' अंक हैं। तो संख्या में कितने अंक होंगे?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var num=pick([100,400,900,1600,2500,3600,4900,6400,8100,10000]), ans=String(Math.sqrt(num)).length; var w=[ans+1,(ans-1>0?ans-1:ans+2),ans+2]; var sol=buildSqDigitsV3Solution(num,ans); return {question:tri('How many digits are there in the value of '+K(RT(num))+'?',K(RT(num))+' ki value me kitne digits hain?',K(RT(num))+' के मान में कितने अंक हैं?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var k=rint(2,4), ans=Math.pow(10,2*(k-1)); var w=[(ans-1>0?ans-1:1),ans+1,ans*2]; var sol=buildSqDigitsV4Solution(k,ans); return {question:tri('What is the smallest number whose square root has exactly '+k+' digits?','Sabse chhota number kaunsa hai jiske square root me theek '+k+' digits hon?','सबसे छोटी संख्या कौन सी है जिसके वर्गमूल में ठीक '+k+' अंक हों?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var a=rint(2,20),b=rint(2,20), sa=a*a,sb=b*b, da=String(a).length,db=String(b).length, ans,w; if(da===db){ ans='They are equal'; w=[K(RT(sa)),K(RT(sb)),'Cannot be determined']; } else { ans=(da>db?K(RT(sa)):K(RT(sb))); w=[(da>db?K(RT(sb)):K(RT(sa))),'They are equal','Cannot be determined']; } var sol=buildSqDigitsV5Solution(a,b,sa,sb); return {question:tri('Whose square root has more digits: '+K(RT(sa))+' or '+K(RT(sb))+'?',K(RT(sa))+' ya '+K(RT(sb))+', kiske square root me zyada digits hain?',K(RT(sa))+' या '+K(RT(sb))+', किसके वर्गमूल में अधिक अंक हैं?'),ans:ans,w:w,solution:sol}; }
  ]);

  /* 16. Square Root of a Perfect Square */
  H.base('sq_root1', function(){
    var r=rint(0,40), n=r*r, ans=r;
    var offsets=shuffle([1,-1,2,-2,3,5]), wrongs=[];
    for(var i=0;i<offsets.length;i++){ var v=ans+offsets[i]; if(v>=0&&v!==ans&&wrongs.length<3) wrongs.push(v); }
    while(wrongs.length<3) wrongs.push(ans+wrongs.length+4);
    var sol=buildSqRoot1Solution(r,n);
    return {question:tri('What is the value of '+K(RT(n))+'?',K(RT(n))+' ki value kya hai?',K(RT(n))+' का मान क्या है?'),ans:String(ans),w:wrongs.map(String),solution:sol};
  });
  H.vars('sq_root1',[
    function(){ var ans=0; var w=[1,-1,10]; var sol=buildSqRoot1V1Solution(); return {question:tri('What is the value of '+K(RT(0))+'?',K(RT(0))+' ki value kya hai?',K(RT(0))+' का मान क्या है?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var ans=2; var w=[1,0,'1.41']; var sol=buildSqRoot1V2Solution(); return {question:tri('Find the value of '+K(RT(1)+' + '+RT(1))+'.','Maan gyaat karo: '+K(RT(1)+' + '+RT(1))+'.','मान ज्ञात कीजिए: '+K(RT(1)+' + '+RT(1))+'।'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var n=rint(2,25), ans=n; var w=[-n,n*n,n+1]; var sol=buildSqRoot1V3Solution(n); return {question:tri('What is the value of '+K(RT(POW(n,2)))+'?',K(RT(POW(n,2)))+' ki value kya hai?',K(RT(POW(n,2)))+' का मान क्या है?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var a=rint(2,15), ps=a*a, non=ps+1, ans=non; var w=[a*a,(a+1)*(a+1),(a>1?(a-1)*(a-1):4)]; var sol=buildSqRoot1V4Solution(a,ps,non); return {question:tri('Which one of these numbers is NOT a perfect square?','Inme se kaunsa number perfect square NAHI hai?','इनमें से कौन सी संख्या पूर्ण वर्ग नहीं है?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var a=rint(2,15), ans=a; var w=[a+1,(a-1>0?a-1:a+2),-a]; var sol=buildSqRoot1V5Solution(a); return {question:tri('Without doing a long calculation, what is '+K(RT(a*a))+'?','Bina lambi calculation ke, '+K(RT(a*a))+' kya hai?','बिना लंबी गणना के, '+K(RT(a*a))+' क्या है?'),ans:String(ans),w:w.map(String),solution:sol}; }
  ]);
})();
