/* tier10 batch7 — templates cb_make_d, cb_make_add, cb_make_sub (base+variants) */
(function(){
  var H=window.QT; if(!H) return;
  var K=H.K,CRT=H.CRT,FR=H.FR,D=H.D,tri=H.tri;

  /* 29. Make Perfect Cube (÷) */
  H.base('cb_make_d', function(){
    var variant=rint(0,2);
    var num,ans,w1,w2,w3;
    if(variant===0){ var primes=[2,3,5,7,11,13,17,19,23,29]; var base=pick(primes); var sqPart=pick(primes.filter(function(p){return p!==base;})); num=base*base*base*sqPart; ans=sqPart; w1=base; w2=sqPart*2; w3=base*sqPart; }
    else if(variant===1){ var pr=[2,3,5,7,11,13]; var pp=shuffle(pr).slice(0,2); var p1=pp[0],p2=pp[1]; var extra=pick(pr.filter(function(p){return p!==p1&&p!==p2;})); num=p1*p1*p1*p2*p2*p2*extra; ans=extra; w1=p1*p2; w2=extra*2; w3=p1*extra; }
    else { var b2=rint(2,10); var e2=rint(2,8); num=b2*b2*b2*e2; ans=e2; w1=b2; w2=e2*2; w3=b2*e2; }
    var sol=buildCbMakeDSolution(num,ans,variant);
    return {question:tri('By what number should '+K(num)+' be divided to make it a perfect cube?',K(num)+' ko kis number se divide karein ki perfect cube bane?',K(num)+' को किस संख्या से भाग दें कि पूर्ण घन बने?'),ans:String(ans),w:[String(w1),String(w2),String(w3)],solution:sol};
  });
  H.vars('cb_make_d',[
    function(){ var base=rint(2,6),sqPart=rint(2,6); var num=base*base*base*sqPart; var ans=base; var w=[base+1,(base-1>0?base-1:base+2),sqPart]; var sol=buildCbMakeDSolution(num,ans,0); return {question:tri('After dividing '+K(num)+' by '+K(sqPart)+', what is the cube root of the result?',K(num)+' ko '+K(sqPart)+' se divide karne ke baad result ka cube root kya hai?',K(num)+' को '+K(sqPart)+' से भाग देने के बाद परिणाम का घनमूल क्या है?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var base=rint(2,6),sqPart=rint(2,5); var num=base*base*base*sqPart; var ans=sqPart; var w=[base,sqPart*2,base*sqPart]; var sol=buildCbMakeDSolution(num,ans,1); var expr=K(num+D+'?'); return {question:tri(expr+' is a perfect cube. Which value works for the blank?',expr+' perfect cube hai. Blank mein kaunsa value aayega?',expr+' पूर्ण घन है। रिक्त स्थान में कौन सा मान आएगा?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var base=rint(2,8),sqPart=rint(2,5); var num=base*base*base*sqPart; var ans=sqPart; var w=[base,sqPart*2,base*sqPart]; var sol=buildCbMakeDSolution(num,ans,2); return {question:tri('What is the smallest number you can divide '+K(num)+' by to get a perfect cube?',K(num)+' ko perfect cube banane ke liye sabse chhota divisor kya hai?',K(num)+' को पूर्ण घन बनाने के लिए सबसे छोटा भाजक क्या है?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var base=rint(2,6),sqPart=rint(2,4); var num=base*base*base*sqPart; var result=num/sqPart; var ans='Yes'; var w=['No','Only if even','Only if odd']; var sol=buildCbMakeDSolution(num,ans,3); var expr=K(num+D+sqPart+' = '+result); return {question:tri('Is the result of '+expr+' a perfect cube?',expr+' — kya yeh result perfect cube hai?',expr+' — क्या यह परिणाम पूर्ण घन है?'),ans:ans,w:w,solution:sol}; },
    function(){ var a=rint(2,8),b=rint(2,5); var num=a*a*a*b; var ans=a; var w=[a+1,b,a*b]; var sol=buildCbMakeDSolution(num,ans,4); return {question:tri('Find the value of '+K(CRT(FR(num,b)))+'.',K(CRT(FR(num,b)))+' ki value nikalo.',K(CRT(FR(num,b)))+' का मान ज्ञात कीजिए।'),ans:String(ans),w:w.map(String),solution:sol}; }
  ]);

  /* 30. Make Perfect Cube (+) */
  H.base('cb_make_add', function(){
    var r=rint(2,12); var cube=r*r*r; var num=cube-rint(1,Math.min(30,r*3)); var ans=cube-num;
    var offsets=shuffle([3,-2,5,-1,7,4,10]), wrongs=[];
    for(var i=0;i<offsets.length;i++){ var v=ans+offsets[i]; if(v>0&&v!==ans&&wrongs.length<3) wrongs.push(v); }
    while(wrongs.length<3) wrongs.push(ans+wrongs.length*3+6);
    return {question:tri('What should be added to '+K(num)+' to make it a perfect cube?',K(num)+' mein kya jodein ki perfect cube bane?',K(num)+' में क्या जोड़ें कि पूर्ण घन बने?'),ans:String(ans),w:wrongs.map(String)};
  });
  H.vars('cb_make_add',[
    function(){ var r=rint(2,10); var cube=r*r*r; var add=rint(1,Math.min(20,r*3)); var num=cube-add; var ans=add; var w=[add+3,(add-2>0?add-2:add+4),add+7]; var expr=K(num+' + ? = '+cube); return {question:tri('In '+expr+', what number was added?',expr+' mein kya joda gaya?',expr+' में क्या जोड़ा गया?'),ans:String(ans),w:w.map(String)}; },
    function(){ var r=rint(2,10); var num=r*r*r+rint(1,r*2); var ans=(r+1)*(r+1)*(r+1)-num; var w=[ans+3,(ans-2>0?ans-2:ans+5),(r+2)*(r+2)*(r+2)-num]; return {question:tri('How much should be added to '+K(num)+' to reach the next perfect cube?',K(num)+' mein kitna jodein ki agla perfect cube mile?',K(num)+' में कितना जोड़ें कि अगला पूर्ण घन मिले?'),ans:String(ans),w:w.map(String)}; },
    function(){ var r=rint(2,10); var cube=r*r*r; var add=rint(1,Math.min(15,r*2)); var num=cube-add; var ans=cube; var w=[cube+1,(cube-1>0?cube-1:cube+1),cube+r]; var expr=K(num+' + '+add); return {question:tri(expr+' equals which perfect cube?',expr+' kaunsa perfect cube banata hai?',expr+' कौन सा पूर्ण घन बनाता है?'),ans:String(ans),w:w.map(String)}; },
    function(){ var r=rint(2,8); var cube=r*r*r; var add=rint(1,Math.min(10,r*2)); var num=cube-add; var ans=r; var w=[r+1,(r-1>0?r-1:r+2),r+2]; return {question:tri('Add '+K(add)+' to '+K(num)+'. What is the cube root of the result?',K(num)+' mein '+K(add)+' jodo. Result ka cube root kya hai?',K(num)+' में '+K(add)+' जोड़ो। परिणाम का घनमूल क्या है?'),ans:String(ans),w:w.map(String)}; },
    function(){ var a=rint(2,8); var cube=a*a*a; var num=cube-1; var ans=1; var w=[2,3,a]; return {question:tri('What should be added to '+K(num)+' to make it a perfect cube?',K(num)+' mein kya jodein ki perfect cube bane?',K(num)+' में क्या जोड़ें कि पूर्ण घन बने?'),ans:String(ans),w:w.map(String)}; }
  ]);

  /* 31. Make Perfect Cube (-) */
  H.base('cb_make_sub', function(){
    var r=rint(2,12); var cube=r*r*r; var num=cube+rint(1,Math.min(30,r*3)); var ans=num-cube;
    var offsets=shuffle([3,-2,5,-1,7,4,10]), wrongs=[];
    for(var i=0;i<offsets.length;i++){ var v=ans+offsets[i]; if(v>0&&v!==ans&&wrongs.length<3) wrongs.push(v); }
    while(wrongs.length<3) wrongs.push(ans+wrongs.length*3+6);
    return {question:tri('What should be subtracted from '+K(num)+' to make it a perfect cube?',K(num)+' mein se kya ghataayein ki perfect cube bane?',K(num)+' में से क्या घटाएँ कि पूर्ण घन बने?'),ans:String(ans),w:wrongs.map(String)};
  });
  H.vars('cb_make_sub',[
    function(){ var r=rint(2,10); var cube=r*r*r; var sub=rint(1,Math.min(20,r*3)); var num=cube+sub; var ans=sub; var w=[sub+3,(sub-2>0?sub-2:sub+4),sub+7]; var expr=K(num+' - '+sub+' = '+cube); return {question:tri('In '+expr+', what number was subtracted?',expr+' mein kya ghataaya gaya?',expr+' में क्या घटाया गया?'),ans:String(ans),w:w.map(String)}; },
    function(){ var r=rint(2,10); var num=r*r*r+rint(1,r*2); var ans=num-(r*r*r); var w=[ans+3,(ans-2>0?ans-2:ans+5),(r+1)*(r+1)*(r+1)-num]; return {question:tri('How much should be subtracted from '+K(num)+' to get the previous perfect cube?',K(num)+' mein se kitna ghataayein ki pichla perfect cube mile?',K(num)+' में से कितना घटाएँ कि पिछला पूर्ण घन मिले?'),ans:String(ans),w:w.map(String)}; },
    function(){ var r=rint(2,8); var cube=r*r*r; var sub=rint(1,Math.min(15,r*2)); var num=cube+sub; var ans=cube; var w=[cube+1,(cube-1>0?cube-1:cube+1),cube-r]; var expr=K(num+' - '+sub); return {question:tri(expr+' equals which perfect cube?',expr+' kaunsa perfect cube banata hai?',expr+' कौन सा पूर्ण घन बनाता है?'),ans:String(ans),w:w.map(String)}; },
    function(){ var r=rint(2,8); var cube=r*r*r; var sub=rint(1,Math.min(10,r*2)); var num=cube+sub; var ans=r; var w=[r+1,(r-1>0?r-1:r+2),r+2]; return {question:tri('Subtract '+K(sub)+' from '+K(num)+'. What is the cube root of the result?',K(num)+' mein se '+K(sub)+' ghatao. Result ka cube root kya hai?',K(num)+' में से '+K(sub)+' घटाओ। परिणाम का घनमूल क्या है?'),ans:String(ans),w:w.map(String)}; },
    function(){ var r=rint(2,8); var cube=r*r*r; var num=cube+1; var ans=1; var w=[2,r,r*r]; return {question:tri('What should be subtracted from '+K(num)+' to make it a perfect cube?',K(num)+' mein se kya ghataayein ki perfect cube bane?',K(num)+' में से क्या घटाएँ कि पूर्ण घन बने?'),ans:String(ans),w:w.map(String)}; }
  ]);
})();
