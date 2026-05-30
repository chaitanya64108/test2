/* tier10 batch4 — templates sq_perim, sq_make_sub, cb_direct (base+variants) */
(function(){
  var H=window.QT; if(!H) return;
  var K=H.K,RT=H.RT,CRT=H.CRT,POW=H.POW,tri=H.tri;

  /* 20. Perimeter of a Square from Area */
  H.base('sq_perim', function(){
    var s=rint(5,40), area=s*s, perim=4*s;
    var offsets=shuffle([4,-4,8,-8,s,12]), wrongs=[];
    for(var i=0;i<offsets.length;i++){ var v=perim+offsets[i]; if(v>0&&v!==perim&&wrongs.length<3) wrongs.push(v); }
    while(wrongs.length<3) wrongs.push(perim+wrongs.length*3+5);
    var sol=buildSqPerimSolution(s,area,perim);
    return {question:tri('The area of a square is '+area+' square cm. Find its perimeter (the total length of all four sides).','Ek square ka area '+area+' square cm hai. Iska perimeter (chaaro side ki total length) nikalo.','एक वर्ग का क्षेत्रफल '+area+' वर्ग सेमी है। इसका परिमाप (चारों भुजाओं का योग) ज्ञात कीजिए।'),ans:perim+' cm',w:wrongs.map(function(v){return v+' cm';}),solution:sol};
  });
  H.vars('sq_perim',[
    function(){ var s=rint(5,30), perim=4*s, ans=s*s; var w=[ans+10,(ans-10>0?ans-10:ans+20),s*4]; var sol=buildSqPerimV1Solution(s,perim,ans); return {question:tri('The perimeter of a square is '+perim+' m. Find its area.','Ek square ka perimeter '+perim+' m hai. Iska area nikalo.','एक वर्ग का परिमाप '+perim+' मीटर है। इसका क्षेत्रफल ज्ञात कीजिए।'),ans:ans+' sq m',w:w.map(function(v){return v+' sq m';}),solution:sol}; },
    function(){ var s=rint(5,25), perim=4*s; var w=[perim+4,(perim-4>0?perim-4:perim+8),2*s]; var sol=buildSqPerimV2Solution(s,perim); return {question:tri('The side of a square is '+s+' cm. Find its perimeter.','Ek square ki side '+s+' cm hai. Iska perimeter nikalo.','एक वर्ग की भुजा '+s+' सेमी है। इसका परिमाप ज्ञात कीजिए।'),ans:perim+' cm',w:w.map(function(v){return v+' cm';}),solution:sol}; },
    function(){ var a=rint(5,20),b=rint(5,20), pa=4*a,pb=4*b, ans=Math.abs(pa-pb); var w=[pa+pb,Math.abs(a-b),ans+4]; var sol=buildSqPerimV3Solution(a,b,ans); return {question:tri('Two squares have sides '+a+' m and '+b+' m. What is the difference between their perimeters?','Do square ki sides '+a+' m aur '+b+' m hain. Inke perimeters me kitna difference hai?','दो वर्गों की भुजाएँ '+a+' मीटर और '+b+' मीटर हैं। इनके परिमापों में कितना अंतर है?'),ans:ans+' m',w:w.map(function(v){return v+' m';}),solution:sol}; },
    function(){ var s=rint(10,40), rate=rint(5,25), cost=4*s*rate; var w=[cost+100,(cost-100>0?cost-100:cost+200),s*s*rate]; var sol=buildSqPerimV4Solution(s,rate,cost); return {question:tri('A square field has a side of '+s+' m. Fencing it costs Rs '+rate+' per metre. What is the total cost of fencing?','Ek square field ki side '+s+' m hai. Fencing Rs '+rate+' per metre hai. Total fencing cost kitna hoga?','एक वर्गाकार मैदान की भुजा '+s+' मीटर है। बाड़ लगाने का खर्च '+rate+' रुपये प्रति मीटर है। कुल खर्च कितना होगा?'),ans:'Rs '+cost,w:w.map(function(v){return 'Rs '+v;}),solution:sol}; },
    function(){ var s=rint(5,25), p1=4*s, p2=8*s, ans=p2; var w=[p2+8,p2+4,(p2-4>0?p2-4:p2+12)]; var sol=buildSqPerimV5Solution(s,p2); return {question:tri('The side of a square is doubled from '+s+' m. What is its new perimeter?','Ek square ki side '+s+' m se double kar di gayi. Naya perimeter kya hoga?','एक वर्ग की भुजा '+s+' मीटर से दोगुनी कर दी गई। नया परिमाप क्या होगा?'),ans:ans+' m',w:w.map(function(v){return v+' m';}),solution:sol}; }
  ]);

  /* 21. Make a Perfect Square (by subtracting) */
  H.base('sq_make_sub', function(){
    var a=rint(5,40), sq=a*a, num=sq+rint(1,Math.min(25,a)), ans=num-sq;
    var offsets=shuffle([3,-2,5,-1,7,4,10]), wrongs=[];
    for(var i=0;i<offsets.length;i++){ var v=ans+offsets[i]; if(v>0&&v!==ans&&wrongs.length<3) wrongs.push(v); }
    while(wrongs.length<3) wrongs.push(ans+wrongs.length*2+6);
    var sol=buildSqMakeSubSolution(num,ans);
    return {question:tri('What is the smallest number that should be subtracted from '+num+' to make it a perfect square?','Sabse chhoti kaunsi sankhya '+num+' me se ghatani chahiye taaki wo perfect square ban jaye?','सबसे छोटी कौन सी संख्या '+num+' में से घटानी चाहिए ताकि वह पूर्ण वर्ग बन जाए?'),ans:String(ans),w:wrongs.map(String),solution:sol};
  });
  H.vars('sq_make_sub',[
    function(){ var a=rint(5,30), sq=a*a, sub=rint(1,Math.min(20,a)), num=sq+sub, ans=sub; var w=[sub+2,(sub-1>0?sub-1:sub+3),sub+5]; var sol=buildSqMakeSubV1Solution(num,sq,sub,ans); return {question:tri(num+' - '+sub+' = '+sq+', which is a perfect square. What number was subtracted?',num+' - '+sub+' = '+sq+' (perfect square). Kaunsi sankhya ghataai gayi?',num+' - '+sub+' = '+sq+' (पूर्ण वर्ग)। कौन सी संख्या घटाई गई?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var a=rint(5,30), num=a*a+rint(1,2*a), ans=num-(a*a); var w=[ans+2,(ans-1>0?ans-1:ans+3),(a+1)*(a+1)-num]; var sol=buildSqMakeSubV2Solution(num,ans,a); return {question:tri('How much should be subtracted from '+num+' to get the largest perfect square below it?',num+' me se kitna ghatayein ki usse chhota sabse bada perfect square mile?',num+' में से कितना घटाएँ कि उससे छोटा सबसे बड़ा पूर्ण वर्ग मिले?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var a=rint(10,30), sq=a*a, sub1=rint(1,15), sub2=rint(1,15), num1=sq+sub1, num2=sq+sub2, ans=sub1+sub2; var w=[ans+2,Math.abs(sub1-sub2),(ans-1>0?ans-1:ans+3)]; var sol=buildSqMakeSubV3Solution(num1,num2,sq,sub1,sub2,ans); return {question:tri('Subtracting '+sub1+' from '+num1+' and '+sub2+' from '+num2+' both give '+sq+'. What is the total amount subtracted?',num1+' me se '+sub1+' aur '+num2+' me se '+sub2+' ghatane par dono '+sq+' dete hain. Total kitna ghataaya?',num1+' में से '+sub1+' और '+num2+' में से '+sub2+' घटाने पर दोनों '+sq+' देते हैं। कुल कितना घटाया गया?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var a=rint(5,30), sq=a*a, sub=rint(1,Math.min(20,a)), num=sq+sub, ans=sq; var w=[(sq-1>0?sq-1:sq+1),sq+1,a*a-a]; var sol=buildSqMakeSubV4Solution(num,sub,ans); return {question:tri(num+' - '+sub+' equals which perfect square?',num+' - '+sub+' kaunsa perfect square banaata hai?',num+' - '+sub+' कौन सा पूर्ण वर्ग बनाता है?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var a=rint(5,25), sq=a*a, sub=rint(1,Math.min(15,a)), num=sq+sub, ans=a; var w=[a+1,(a-1>0?a-1:a+2),a+2]; var sol=buildSqMakeSubV5Solution(num,sub,ans); return {question:tri('Subtract '+sub+' from '+num+', then find the square root of the result.',num+' me se '+sub+' ghatao, phir result ka square root nikalo.',num+' में से '+sub+' घटाओ, फिर परिणाम का वर्गमूल ज्ञात करो।'),ans:String(ans),w:w.map(String),solution:sol}; }
  ]);

  /* 22. Perfect Cube - Direct */
  H.base('cb_direct', function(){
    var r=rint(2,25), cube=r*r*r;
    var offsets=shuffle([1,-1,2,-2,3,-3,5]), wrongs=[];
    for(var i=0;i<offsets.length;i++){ var v=r+offsets[i]; if(v!==0&&v!==r&&wrongs.length<3) wrongs.push(v); }
    while(wrongs.length<3) wrongs.push(r+wrongs.length+4);
    var sol=buildCbDirectSolution(cube,r);
    return {question:tri('Find the value of '+K(CRT(cube))+'.',K(CRT(cube))+' ki value nikalo.',K(CRT(cube))+' का मान ज्ञात कीजिए।'),ans:String(r),w:wrongs.map(String),solution:sol};
  });
  H.vars('cb_direct',[
    function(){ var r=rint(2,20), ans=r*r*r; var w=[ans+3*r*r+3*r+1,(ans-3*r*r+3*r-1>0?ans-3*r*r+3*r-1:ans+6*r*r+6*r+2),ans+r*r*r]; var sol=buildCbDirectV1Solution(r,ans); return {question:tri('If '+K(CRT('x')+' = '+r)+', what is the value of x?','Agar '+K(CRT('x')+' = '+r)+', to x ki value kya hai?','यदि '+K(CRT('x')+' = '+r)+', तो x का मान क्या है?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var a=rint(2,10),b=rint(2,10), ans=a+b; var w=[a+b+2,(a+b-2>0?a+b-2:a+b+4),Math.abs(a-b)]; var sol=buildCbDirectV2Solution(a,b,ans); return {question:tri('What is the value of '+K(CRT(a*a*a)+' + '+CRT(b*b*b))+'?',K(CRT(a*a*a)+' + '+CRT(b*b*b))+' kitna hai?',K(CRT(a*a*a)+' + '+CRT(b*b*b))+' कितना है?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var r=rint(2,20); var w=[r+1,(r-1>0?r-1:r+2),-r]; var sol=buildCbDirectV3Solution(r); return {question:tri('Which of these numbers has a cube root equal to '+K(r)+'?','Inme se kis number ka cube root '+K(r)+' ke barabar hai?','इनमें से किस संख्या का घनमूल '+K(r)+' के बराबर है?'),ans:String(r*r*r),w:w.map(function(v){return String(v*v*v);}),solution:sol}; },
    function(){ var a=rint(5,15),b=rint(2,a-1), ans=a-b; var w=[a+b,a-b+2,a*b]; var sol=buildCbDirectV4Solution(a,b,ans); return {question:tri('What is the value of '+K(CRT(a*a*a)+' - '+CRT(b*b*b))+'?',K(CRT(a*a*a)+' - '+CRT(b*b*b))+' kitna hai?',K(CRT(a*a*a)+' - '+CRT(b*b*b))+' कितना है?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var r=rint(2,15), cube=r*r*r; var w=[r+1,(r-1>0?r-1:r+2),r*2]; var sol=buildCbDirectV5Solution(r,cube); return {question:tri('If '+K(POW('n',3)+' = '+cube)+', what is the value of n?','Agar '+K(POW('n',3)+' = '+cube)+', to n ki value kya hai?','यदि '+K(POW('n',3)+' = '+cube)+', तो n का मान क्या है?'),ans:String(r),w:w.map(String),solution:sol}; }
  ]);
})();
