/* tier10 batch7 — templates cb_make_d, cb_make_add, cb_make_sub (base+variants) */
(function(){
  var H=window.QT; if(!H) return;
  var K=H.K,CRT=H.CRT,FR=H.FR,D=H.D,tri=H.tri;

  /* 29. Make Perfect Cube (÷) */
  H.base('cb_make_d', function(){
    var pp=shuffle([2,3,5,7,11]).slice(0,2); var p=pp[0],q=pp[1];
    var num=p*p*p*q, divisor=q, root=p, ans=divisor;
    var w=[p,q*q,p*q];
    var sol=buildCbMakeDSolution(num,divisor,root);
    return {question:tri('By what number should '+K(num)+' be divided to make it a perfect cube?',K(num)+' ko kis number se divide karein ki perfect cube bane?',K(num)+' को किस संख्या से भाग दें कि पूर्ण घन बने?'),ans:String(ans),w:w.map(String),solution:sol};
  });
  H.vars('cb_make_d',[
    function(){ var pp=shuffle([2,3,5,7]).slice(0,2); var p=pp[0],q=pp[1]; var num=p*p*p*q, divisor=q, root=p; var w=[root+1,(root-1>0?root-1:root+2),root+2]; var sol=buildCbMakeDSolution(num,divisor,root); return {question:tri('After dividing '+K(num)+' by '+K(divisor)+', what is the cube root of the result?',K(num)+' ko '+K(divisor)+' se divide karne ke baad result ka cube root kya hai?',K(num)+' को '+K(divisor)+' से भाग देने के बाद परिणाम का घनमूल क्या है?'),ans:String(root),w:w.map(String),solution:sol}; },
    function(){ var pp=shuffle([2,3,5,7]).slice(0,2); var p=pp[0],q=pp[1]; var num=p*p*p*q, divisor=q, root=p; var w=[p,q*q,p*q]; var sol=buildCbMakeDSolution(num,divisor,root); var expr=K(num+D+'?'); return {question:tri(expr+' is a perfect cube. Which value works for the blank?',expr+' perfect cube hai. Blank mein kaunsa value aayega?',expr+' पूर्ण घन है। रिक्त स्थान में कौन सा मान आएगा?'),ans:String(divisor),w:w.map(String),solution:sol}; },
    function(){ var pp=shuffle([2,3,5,7,11]).slice(0,2); var p=pp[0],q=pp[1]; var num=p*p*p*q, divisor=q, root=p; var w=[p,q*q,p*q]; var sol=buildCbMakeDSolution(num,divisor,root); return {question:tri('What is the smallest number you can divide '+K(num)+' by to get a perfect cube?',K(num)+' ko perfect cube banane ke liye sabse chhota divisor kya hai?',K(num)+' को पूर्ण घन बनाने के लिए सबसे छोटा भाजक क्या है?'),ans:String(divisor),w:w.map(String),solution:sol}; },
    function(){ var pp=shuffle([2,3,5,7]).slice(0,2); var p=pp[0],q=pp[1]; var num=p*p*p*q, divisor=q, root=p; var result=num/divisor; var sol=buildCbMakeDSolution(num,divisor,root); var expr=K(num+D+divisor+' = '+result); return {question:tri('Is the result of '+expr+' a perfect cube?',expr+' — kya yeh result perfect cube hai?',expr+' — क्या यह परिणाम पूर्ण घन है?'),ans:'Yes',w:['No','Only if even','Only if odd'],solution:sol}; },
    function(){ var pp=shuffle([2,3,5,7]).slice(0,2); var a=pp[0],b=pp[1]; var num=a*a*a*b, divisor=b, root=a; var w=[root+1,(root-1>0?root-1:root+2),root+2]; var sol=buildCbMakeDSolution(num,divisor,root); return {question:tri('Find the value of '+K(CRT(FR(num,b)))+'.',K(CRT(FR(num,b)))+' ki value nikalo.',K(CRT(FR(num,b)))+' का मान ज्ञात कीजिए।'),ans:String(root),w:w.map(String),solution:sol}; }
  ]);

  /* 30. Make Perfect Cube (+) */
  H.base('cb_make_add', function(){
    var r=rint(2,12); var cube=r*r*r; var add=rint(1,Math.min(30,r*3)); var num=cube-add;
    var offsets=shuffle([3,-2,5,-1,7,4,10]), wrongs=[];
    for(var i=0;i<offsets.length;i++){ var v=add+offsets[i]; if(v>0&&v!==add&&wrongs.indexOf(v)<0&&wrongs.length<3) wrongs.push(v); }
    while(wrongs.length<3) wrongs.push(add+wrongs.length*3+6);
    var sol=buildCbMakeAddSolution(num,add,cube,r);
    return {question:tri('What should be added to '+K(num)+' to make it a perfect cube?',K(num)+' mein kya jodein ki perfect cube bane?',K(num)+' में क्या जोड़ें कि पूर्ण घन बने?'),ans:String(add),w:wrongs.map(String),solution:sol};
  });
  H.vars('cb_make_add',[
    function(){ var r=rint(2,10); var cube=r*r*r; var add=rint(1,Math.min(20,r*3)); var num=cube-add; var w=[add+3,(add-2>0?add-2:add+4),add+7]; var sol=buildCbMakeAddSolution(num,add,cube,r); var expr=K(num+' + ? = '+cube); return {question:tri('In '+expr+', what number was added?',expr+' mein kya joda gaya?',expr+' में क्या जोड़ा गया?'),ans:String(add),w:w.map(String),solution:sol}; },
    function(){ var r=rint(2,10); var num=r*r*r+rint(1,r*2); var nc=(r+1)*(r+1)*(r+1); var ans=nc-num; var w=[ans+3,(ans-2>0?ans-2:ans+5),(r+2)*(r+2)*(r+2)-num]; var sol=buildCbMakeAddSolution(num,ans,nc,r+1); return {question:tri('How much should be added to '+K(num)+' to reach the next perfect cube?',K(num)+' mein kitna jodein ki agla perfect cube mile?',K(num)+' में कितना जोड़ें कि अगला पूर्ण घन मिले?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var r=rint(2,10); var cube=r*r*r; var add=rint(1,Math.min(15,r*2)); var num=cube-add; var w=[cube+1,(cube-1>0?cube-1:cube+1),cube+r]; var sol=buildCbMakeAddSolution(num,add,cube,r); var expr=K(num+' + '+add); return {question:tri(expr+' equals which perfect cube?',expr+' kaunsa perfect cube banata hai?',expr+' कौन सा पूर्ण घन बनाता है?'),ans:String(cube),w:w.map(String),solution:sol}; },
    function(){ var r=rint(2,8); var cube=r*r*r; var add=rint(1,Math.min(10,r*2)); var num=cube-add; var w=[r+1,(r-1>0?r-1:r+2),r+2]; var sol=buildCbMakeAddSolution(num,add,cube,r); return {question:tri('Add '+K(add)+' to '+K(num)+'. What is the cube root of the result?',K(num)+' mein '+K(add)+' jodo. Result ka cube root kya hai?',K(num)+' में '+K(add)+' जोड़ो। परिणाम का घनमूल क्या है?'),ans:String(r),w:w.map(String),solution:sol}; },
    function(){ var a=rint(2,8); var cube=a*a*a; var num=cube-1; var ans=1; var w=[2,3,a*a]; var sol=buildCbMakeAddSolution(num,ans,cube,a); return {question:tri('What should be added to '+K(num)+' to make it a perfect cube?',K(num)+' mein kya jodein ki perfect cube bane?',K(num)+' में क्या जोड़ें कि पूर्ण घन बने?'),ans:String(ans),w:w.map(String),solution:sol}; }
  ]);

  /* 31. Make Perfect Cube (-) */
  H.base('cb_make_sub', function(){
    var r=rint(2,12); var cube=r*r*r; var sub=rint(1,Math.min(30,r*3)); var num=cube+sub;
    var offsets=shuffle([3,-2,5,-1,7,4,10]), wrongs=[];
    for(var i=0;i<offsets.length;i++){ var v=sub+offsets[i]; if(v>0&&v!==sub&&wrongs.indexOf(v)<0&&wrongs.length<3) wrongs.push(v); }
    while(wrongs.length<3) wrongs.push(sub+wrongs.length*3+6);
    var sol=buildCbMakeSubSolution(num,sub,cube,r);
    return {question:tri('What should be subtracted from '+K(num)+' to make it a perfect cube?',K(num)+' mein se kya ghataayein ki perfect cube bane?',K(num)+' में से क्या घटाएँ कि पूर्ण घन बने?'),ans:String(sub),w:wrongs.map(String),solution:sol};
  });
  H.vars('cb_make_sub',[
    function(){ var r=rint(2,10); var cube=r*r*r; var sub=rint(1,Math.min(20,r*3)); var num=cube+sub; var w=[sub+3,(sub-2>0?sub-2:sub+4),sub+7]; var sol=buildCbMakeSubSolution(num,sub,cube,r); var expr=K(num+' - ? = '+cube); return {question:tri('In '+expr+', what number was subtracted?',expr+' mein kya ghataaya gaya?',expr+' में क्या घटाया गया?'),ans:String(sub),w:w.map(String),solution:sol}; },
    function(){ var r=rint(2,10); var num=r*r*r+rint(1,r*2); var ans=num-(r*r*r); var w=[ans+3,(ans-2>0?ans-2:ans+5),(r+1)*(r+1)*(r+1)-num]; var sol=buildCbMakeSubSolution(num,ans,r*r*r,r); return {question:tri('How much should be subtracted from '+K(num)+' to get the previous perfect cube?',K(num)+' mein se kitna ghataayein ki pichla perfect cube mile?',K(num)+' में से कितना घटाएँ कि पिछला पूर्ण घन मिले?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var r=rint(2,8); var cube=r*r*r; var sub=rint(1,Math.min(15,r*2)); var num=cube+sub; var w=[cube+1,(cube-1>0?cube-1:cube+1),cube-r]; var sol=buildCbMakeSubSolution(num,sub,cube,r); var expr=K(num+' - '+sub); return {question:tri(expr+' equals which perfect cube?',expr+' kaunsa perfect cube banata hai?',expr+' कौन सा पूर्ण घन बनाता है?'),ans:String(cube),w:w.map(String),solution:sol}; },
    function(){ var r=rint(2,8); var cube=r*r*r; var sub=rint(1,Math.min(10,r*2)); var num=cube+sub; var w=[r+1,(r-1>0?r-1:r+2),r+2]; var sol=buildCbMakeSubSolution(num,sub,cube,r); return {question:tri('Subtract '+K(sub)+' from '+K(num)+'. What is the cube root of the result?',K(num)+' mein se '+K(sub)+' ghatao. Result ka cube root kya hai?',K(num)+' में से '+K(sub)+' घटाओ। परिणाम का घनमूल क्या है?'),ans:String(r),w:w.map(String),solution:sol}; },
    function(){ var r=rint(2,8); var cube=r*r*r; var num=cube+1; var ans=1; var w=[2,r+1,r*r]; var sol=buildCbMakeSubSolution(num,ans,cube,r); return {question:tri('What should be subtracted from '+K(num)+' to make it a perfect cube?',K(num)+' mein se kya ghataayein ki perfect cube bane?',K(num)+' में से क्या घटाएँ कि पूर्ण घन बने?'),ans:String(ans),w:w.map(String),solution:sol}; }
  ]);
})();
