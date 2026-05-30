/* tier10 batch10 — templates sq_tf_prop, sq_identify, cb_identify (base+variants) */
(function(){
  var H=window.QT; if(!H) return;
  var K=H.K,RT=H.RT,CRT=H.CRT,POW=H.POW,tri=H.tri;

  /* 38. True/False Properties */
  H.base('sq_tf_prop', function(){
    var variant=rint(0,11);
    var en,hing,hi,ans,w,sol;
    if(variant===0){ var n0=rint(2,30); var s0=n0*n0; var ev0=s0%2===0; en='The square of '+K(n0)+' is '+(ev0?'odd':'even')+'. Is this statement true or false?'; hing=K(n0)+' ka square '+(ev0?'odd':'even')+' hai. Sahi ya galat?'; hi=K(n0)+' का वर्ग '+(ev0?'विषम':'सम')+' है। सत्य या असत्य?'; ans='False'; w=['True','Sometimes','Depends']; sol=buildTfParity(n0,2,!ev0); }
    else if(variant===1){ var n1=rint(2,20); var c1=n1*n1*n1; var ev1=c1%2===0; en='The cube of '+K(n1)+' is '+(ev1?'odd':'even')+'. Is this true or false?'; hing=K(n1)+' ka cube '+(ev1?'odd':'even')+' hai. Sahi ya galat?'; hi=K(n1)+' का घन '+(ev1?'विषम':'सम')+' है। सत्य या असत्य?'; ans='False'; w=['True','Sometimes','Depends']; sol=buildTfParity(n1,3,!ev1); }
    else if(variant===2){ var n2=rint(3,40); en=K(RT(POW(n2,2)))+' equals '+K(n2)+'. Is this true or false?'; hing=K(RT(POW(n2,2)))+' = '+K(n2)+' hai. Sahi ya galat?'; hi=K(RT(POW(n2,2)))+' = '+K(n2)+' है। सत्य या असत्य?'; ans='True'; w=['False','Only for odd n','Only for even n']; sol=buildTfSqrtSquare(n2); }
    else if(variant===3){ var n3=rint(2,15); var r3=-(n3*n3*n3); en=K(CRT('('+r3+')'))+' is a real number. Is this true or false?'; hing=K(CRT('('+r3+')'))+' ek real number hai. Sahi ya galat?'; hi=K(CRT('('+r3+')'))+' एक वास्तविक संख्या है। सत्य या असत्य?'; ans='True'; w=['False','Sometimes','Only for positive']; sol=buildTfCbrtNegReal(r3); }
    else if(variant===4){ var n4=rint(2,20); var r4=-(n4*n4); en=K(RT('('+r4+')'))+' is a real number. Is this true or false?'; hing=K(RT('('+r4+')'))+' ek real number hai. Sahi ya galat?'; hi=K(RT('('+r4+')'))+' एक वास्तविक संख्या है। सत्य या असत्य?'; ans='False'; w=['True','Sometimes','For even n only']; sol=buildTfSqrtNegReal(r4); }
    else if(variant===5){ var bad5=pick([2,3,7,8]); en='A perfect square can end with the digit '+K(bad5)+'. Is this true or false?'; hing='Perfect square digit '+K(bad5)+' par khatam ho sakta hai. Sahi ya galat?'; hi='पूर्ण वर्ग अंक '+K(bad5)+' पर समाप्त हो सकता है। सत्य या असत्य?'; ans='False'; w=['True','Sometimes','For large numbers']; sol=buildTfLastDigit(bad5); }
    else if(variant===6){ en='Every perfect square has an odd number of factors. Is this true or false?'; hing='Har perfect square ke factors ki sankhya odd hoti hai. Sahi ya galat?'; hi='प्रत्येक पूर्ण वर्ग के गुणनखंडों की संख्या विषम होती है। सत्य या असत्य?'; ans='True'; w=['False','Sometimes','Only for primes']; sol=buildTfOddFactors(); }
    else if(variant===7){ en=K(RT(0)+' = 0')+' is a true statement. Is this true or false?'; hing=K(RT(0)+' = 0')+' ek sahi statement hai. Sahi ya galat?'; hi=K(RT(0)+' = 0')+' एक सत्य कथन है। सत्य या असत्य?'; ans='True'; w=['False','Undefined','Depends']; sol=buildTfSqrtZero(); }
    else if(variant===8){ en='The cube of 0 is 0. Is this true or false?'; hing='0 ka cube 0 hota hai. Sahi ya galat?'; hi='0 का घन 0 होता है। सत्य या असत्य?'; ans='True'; w=['False','Undefined','1']; sol=buildTfCubeZero(); }
    else if(variant===9){ var p9=pick([2,3,5,7,11,13,17,19,23,29]); var odd9=(p9*p9)%2===1; en='The square of the prime number '+K(p9)+' is always odd. Is this true or false?'; hing='Prime '+K(p9)+' ka square hamesha odd hota hai. Sahi ya galat?'; hi='अभाज्य '+K(p9)+' का वर्ग सदैव विषम होता है। सत्य या असत्य?'; ans=odd9?'True':'False'; w=odd9?['False','Sometimes','Depends']:['True','Sometimes','For large primes']; sol=buildTfPrimeSquareOdd(p9); }
    else if(variant===10){ var n10=rint(2,15); var v10=(-n10)*(-n10)*(-n10); en=K(CRT('('+v10+')')+' = '+(-n10))+'. Is this true or false?'; hing=K(CRT('('+v10+')')+' = '+(-n10))+'. Sahi ya galat?'; hi=K(CRT('('+v10+')')+' = '+(-n10))+'। सत्य या असत्य?'; ans='True'; w=['False','No real solution','Undefined']; sol=buildTfCbrtNegEquals(-n10,v10); }
    else { en=K(RT(1))+' = ±1. Is this true or false?'; hing=K(RT(1))+' = ±1. Sahi ya galat?'; hi=K(RT(1))+' = ±1। सत्य या असत्य?'; ans='False'; w=['True','Sometimes','For real numbers']; sol=buildTfSqrtPlusMinus(1); }
    return {question:tri(en,hing,hi),ans:ans,w:w,solution:sol};
  });
  H.vars('sq_tf_prop',[
    function(){ var n=rint(2,20); var sq=n*n; var len=String(sq).length; return {question:tri('The square of '+K(n)+' has '+K(len)+' digits. Is this always possible?',K(n)+' ka square mein '+K(len)+' digits hain. Kya yeh hamesha possible hai?',K(n)+' का वर्ग में '+K(len)+' अंक हैं। क्या यह सदैव संभव है?'),ans:'True',w:['False','Only for even n','Only for odd n'],solution:buildTfDigitCount(n,len)}; },
    function(){ var n=rint(2,15); var cube=n*n*n; return {question:tri(K(CRT(cube))+' = '+K(n)+'. Is this true, because the cube root of a perfect cube returns the original number?',K(CRT(cube))+' = '+K(n)+'. Kya yeh sahi hai, kyunki perfect cube ka cube root original number deta hai?',K(CRT(cube))+' = '+K(n)+'। क्या यह सही है, क्योंकि पूर्ण घन का घनमूल मूल संख्या देता है?'),ans:'True',w:['False','Only for positive','Not always'],solution:buildTfCbrtPerfect(n,cube)}; },
    function(){ var n=rint(2,15); var sq=n*n; return {question:tri(K(RT(sq))+' = ±'+K(n)+'. Is the ± sign correct here?',K(RT(sq))+' = ±'+K(n)+'. Kya yahaan ± sahi hai?',K(RT(sq))+' = ±'+K(n)+'। क्या यहाँ ± सही है?'),ans:'False',w:['True','Sometimes','For large n'],solution:buildTfSqrtPlusMinus(n)}; },
    function(){ var n=rint(2,10); var r=-(n*n); return {question:tri(K(RT('('+r+')'))+' is a real number. Is this true or false?',K(RT('('+r+')'))+' ek real number hai. Sahi ya galat?',K(RT('('+r+')'))+' एक वास्तविक संख्या है। सत्य या असत्य?'),ans:'False',w:['True','Sometimes','For negative n'],solution:buildTfSqrtNegReal(r)}; },
    function(){ var a=rint(2,10),b=rint(2,10); var r=-(a*a*a*b*b*b); return {question:tri(K(CRT('('+r+')')+' = '+(-(a*b)))+'. Is this a real value? True or false?',K(CRT('('+r+')')+' = '+(-(a*b)))+'. Kya yeh real hai? Sahi ya galat?',K(CRT('('+r+')')+' = '+(-(a*b)))+'। क्या यह वास्तविक है? सत्य या असत्य?'),ans:'True',w:['False','Only for perfect cubes','Only for integers'],solution:buildTfCbrtNegEquals(-(a*b),r)}; }
  ]);

  /* 39. Identify Perfect Square */
  H.base('sq_identify', function(){
    var sq=rint(5,40); var perfect=sq*sq; var wrongs=[]; var offsets=shuffle([1,-1,2,-2,3,-3,5,7]);
    for(var i=0;i<offsets.length;i++){ var v=perfect+offsets[i]; if(v>0 && Math.sqrt(v)!==Math.floor(Math.sqrt(v)) && wrongs.indexOf(v)<0 && wrongs.length<3) wrongs.push(v); }
    while(wrongs.length<3){ var u=perfect+wrongs.length+1; if(Math.sqrt(u)!==Math.floor(Math.sqrt(u))&&wrongs.indexOf(u)<0) wrongs.push(u); else wrongs.push(u+2); }
    var opts=shuffle([perfect].concat(wrongs.slice(0,3)));
    return {question:tri('Which of these numbers is a perfect square: '+opts.join(', ')+'?','In numbers mein se kaunsa perfect square hai: '+opts.join(', ')+'?','इनमें से कौन सी संख्या पूर्ण वर्ग है: '+opts.join(', ')+'?'),ans:String(perfect),w:wrongs.slice(0,3).map(String),solution:buildSqIdentifySolution(perfect,sq)};
  });
  H.vars('sq_identify',[
    function(){ var sq=rint(5,30); var perfect=sq*sq; return {question:tri('Is '+K(perfect)+' a perfect square?','Kya '+K(perfect)+' perfect square hai?','क्या '+K(perfect)+' पूर्ण वर्ग है?'),ans:'Yes',w:['No','Sometimes','Only if even'],solution:buildSqIsPerfectSolution(perfect,true)}; },
    function(){ var non=pick([2,3,7,8,11,12]); return {question:tri('Can '+K(non)+' be a perfect square?','Kya '+K(non)+' perfect square ho sakta hai?','क्या '+K(non)+' पूर्ण वर्ग हो सकता है?'),ans:'No',w:['Yes','Sometimes','For large numbers'],solution:buildSqIsPerfectSolution(non,false)}; },
    function(){ var n=rint(2,15); var sq=n*n; var non=sq+1; return {question:tri('Between '+K(sq)+' and '+K(non)+', which one is a perfect square?',K(sq)+' aur '+K(non)+' mein se kaunsa perfect square hai?',K(sq)+' और '+K(non)+' में से कौन सा पूर्ण वर्ग है?'),ans:String(sq),w:[String(non),String(sq+2),String(sq-1>0?sq-1:sq+3)],solution:buildSqBetweenSolution(sq,n,non)}; },
    function(){ var a=rint(2,10); var ps=a*a; var ns=ps+1; return {question:tri('Is '+K(ns)+' a perfect square?','Kya '+K(ns)+' perfect square hai?','क्या '+K(ns)+' पूर्ण वर्ग है?'),ans:'Not a perfect square',w:['Perfect square','Depends on a','Only for even a'],solution:buildSqIsPerfectSolution(ns,false)}; },
    function(){ var n=rint(2,20); var sq=n*n; var next=(n+1)*(n+1); return {question:tri('What is the next perfect square after '+K(sq)+'?',K(sq)+' ke baad agla perfect square kaunsa hai?',K(sq)+' के बाद अगला पूर्ण वर्ग कौन सा है?'),ans:String(next),w:[String(sq),String(next+1),String(sq-1>0?sq-1:sq+3)],solution:buildSqNextSolution(n,sq,next)}; }
  ]);

  /* 40. Identify Perfect Cube */
  H.base('cb_identify', function(){
    var cb=rint(3,15); var perfect=cb*cb*cb; var wrongs=[]; var offsets=shuffle([1,-1,2,-2,3,-3,5,7]);
    for(var i=0;i<offsets.length;i++){ var v=perfect+offsets[i]; if(v>0 && Math.round(Math.cbrt(v))*Math.round(Math.cbrt(v))*Math.round(Math.cbrt(v))!==v && wrongs.indexOf(v)<0 && wrongs.length<3) wrongs.push(v); }
    while(wrongs.length<3){ var u=perfect+wrongs.length+1; var rc=Math.round(Math.cbrt(u)); if(rc*rc*rc!==u&&wrongs.indexOf(u)<0) wrongs.push(u); else wrongs.push(u+2); }
    var opts=shuffle([perfect].concat(wrongs.slice(0,3)));
    return {question:tri('Which of these numbers is a perfect cube: '+opts.join(', ')+'?','In numbers mein se kaunsa perfect cube hai: '+opts.join(', ')+'?','इनमें से कौन सी संख्या पूर्ण घन है: '+opts.join(', ')+'?'),ans:String(perfect),w:wrongs.slice(0,3).map(String),solution:buildCbIdentifySolution(perfect,cb)};
  });
  H.vars('cb_identify',[
    function(){ var cb=rint(3,10); var perfect=cb*cb*cb; return {question:tri('Is '+K(perfect)+' a perfect cube?','Kya '+K(perfect)+' perfect cube hai?','क्या '+K(perfect)+' पूर्ण घन है?'),ans:'Yes',w:['No','Sometimes','Only if odd'],solution:buildCbIsPerfectSolution(perfect,true)}; },
    function(){ var non=pick([2,3,4,5,7,9,10]); return {question:tri('Can '+K(non)+' be a perfect cube?','Kya '+K(non)+' perfect cube ho sakta hai?','क्या '+K(non)+' पूर्ण घन हो सकता है?'),ans:'No',w:['Yes','Sometimes','For large numbers'],solution:buildCbIsPerfectSolution(non,false)}; },
    function(){ var n=rint(2,10); var cube=n*n*n; var non=cube+1; return {question:tri('Between '+K(cube)+' and '+K(non)+', which one is a perfect cube?',K(cube)+' aur '+K(non)+' mein se kaunsa perfect cube hai?',K(cube)+' और '+K(non)+' में से कौन सा पूर्ण घन है?'),ans:String(cube),w:[String(non),String(cube+2),String(cube-1>0?cube-1:cube+3)],solution:buildCbBetweenSolution(cube,n,non)}; },
    function(){ var n=rint(2,8); var cube=n*n*n; var next=(n+1)*(n+1)*(n+1); return {question:tri('What is the next perfect cube after '+K(cube)+'?',K(cube)+' ke baad agla perfect cube kaunsa hai?',K(cube)+' के बाद अगला पूर्ण घन कौन सा है?'),ans:String(next),w:[String(cube),String(next+1),String(cube-1>0?cube-1:cube+3)],solution:buildCbNextSolution(n,cube,next)}; },
    function(){ var n=rint(2,8); var cube=n*n*n; return {question:tri('Is '+K(cube+1)+' a perfect cube?','Kya '+K(cube+1)+' perfect cube hai?','क्या '+K(cube+1)+' पूर्ण घन है?'),ans:'Not a perfect cube',w:['Perfect cube','Depends','Sometimes'],solution:buildCbIsPerfectSolution(cube+1,false)}; }
  ]);
})();
