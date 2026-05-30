/* tier10 batch11 — templates sq_unit_digit, sq_prop_check, sq_concept_trap (base+variants) */
(function(){
  var H=window.QT; if(!H) return;
  var K=H.K,RT=H.RT,CRT=H.CRT,POW=H.POW,FR=H.FR,T=H.T,tri=H.tri;

  function ud(ans){ return [(ans+1)%10,(ans+2)%10,(ans-1+10)%10]; }

  /* 41. Unit Digit of Powers */
  H.base('sq_unit_digit', function(){
    var variant=rint(0,2); var en,hing,hi,ans,w,sol;
    if(variant===0){ var n0=rint(2,30); var sq0=n0*n0; ans=sq0%10; w=ud(ans); en='What is the unit (ones) digit of '+K(POW(n0,2))+'?'; hing=K(POW(n0,2))+' ka unit (ekai) digit kya hai?'; hi=K(POW(n0,2))+' का इकाई अंक क्या है?'; sol=window.buildUnitDigitPowSolution(n0,2,ans); }
    else if(variant===1){ var n1=rint(2,20); var c1=n1*n1*n1; ans=c1%10; w=ud(ans); en='What is the unit (ones) digit of '+K(POW(n1,3))+'?'; hing=K(POW(n1,3))+' ka unit (ekai) digit kya hai?'; hi=K(POW(n1,3))+' का इकाई अंक क्या है?'; sol=window.buildUnitDigitPowSolution(n1,3,ans); }
    else { var end=pick([0,1,4,5,6,9]); var valid=[]; for(var d=0;d<=9;d++){ if((d*d)%10===end) valid.push(d); } ans=valid[0]; var inv=[0,1,2,3,4,5,6,7,8,9].filter(function(x){return valid.indexOf(x)<0;}); w=[inv[0],inv[1],inv[2]]; en='A perfect square ends in the digit '+K(end)+'. One possible unit digit of its square root is:'; hing='Ek perfect square '+K(end)+' par khatam hota hai. Uske square root ka ek possible unit digit:'; hi='एक पूर्ण वर्ग अंक '+K(end)+' पर समाप्त होता है। उसके वर्गमूल का एक संभावित इकाई अंक:'; sol=window.buildRootUnitFromEndSolution(end,ans); }
    return {question:tri(en,hing,hi),ans:String(ans),w:w.map(String),solution:sol};
  });
  H.vars('sq_unit_digit',[
    function(){ var n=rint(2,20); var sq=n*n; var ans=sq%10; return {question:tri('What is the unit digit of '+K(POW(n,2))+'?',K(POW(n,2))+' ka unit digit kya hai?',K(POW(n,2))+' का इकाई अंक क्या है?'),ans:String(ans),w:ud(ans).map(String),solution:window.buildUnitDigitPowSolution(n,2,ans)}; },
    function(){ var n=rint(2,15); var cube=n*n*n; var ans=cube%10; return {question:tri('What is the unit digit of '+K(POW(n,3))+'?',K(POW(n,3))+' ka unit digit kya hai?',K(POW(n,3))+' का इकाई अंक क्या है?'),ans:String(ans),w:ud(ans).map(String),solution:window.buildUnitDigitPowSolution(n,3,ans)}; },
    function(){ var end=pick([0,1,4,5,6,9]); var valid=[]; for(var d=0;d<=9;d++){ if((d*d)%10===end) valid.push(d); } var ans=valid[0]; var inv=[0,1,2,3,4,5,6,7,8,9].filter(function(x){return valid.indexOf(x)<0;}); return {question:tri('If a perfect square ends in '+K(end)+', one possible unit digit of its root is:','Agar perfect square '+K(end)+' par khatam ho, to root ka ek possible unit digit:','यदि पूर्ण वर्ग '+K(end)+' पर समाप्त हो, तो मूल का एक संभावित इकाई अंक:'),ans:String(ans),w:[inv[0],inv[1],inv[2]].map(String),solution:window.buildRootUnitFromEndSolution(end,ans)}; },
    function(){ var bad=pick([2,3,7,8]); return {question:tri('Can a perfect square end with the digit '+K(bad)+'?','Kya ek perfect square digit '+K(bad)+' par khatam ho sakta hai?','क्या एक पूर्ण वर्ग अंक '+K(bad)+' पर समाप्त हो सकता है?'),ans:'No, it cannot',w:['Yes, it can','Only for large numbers','Sometimes'],solution:window.buildBadEndSolution(bad)}; },
    function(){ var a=rint(2,15),b=rint(2,15); var ans=(a*a+b*b)%10; return {question:tri('What is the unit digit of '+K(POW(a,2)+' + '+POW(b,2))+'?',K(POW(a,2)+' + '+POW(b,2))+' ka unit digit kya hai?',K(POW(a,2)+' + '+POW(b,2))+' का इकाई अंक क्या है?'),ans:String(ans),w:ud(ans).map(String),solution:window.buildUnitDigitSumSolution(a,b,ans)}; }
  ]);

  /* 42. Square Property Check */
  H.base('sq_prop_check', function(){
    var variant=rint(0,3); var en,hing,hi,ans,w,sol;
    if(variant===0){ var bad=pick([2,3,7,8]); ans=String(bad); var good=[0,1,4,5,6,9]; w=shuffle(good).slice(0,3).map(String); en='Which digit can NEVER appear at the unit place of a perfect square?'; hing='Perfect square ke unit place par kaunsa digit kabhi nahi aa sakta?'; hi='पूर्ण वर्ग के इकाई स्थान पर कौन सा अंक कभी नहीं आ सकता?'; sol=window.buildNeverDigitSolution(bad); }
    else if(variant===1){ var gd=pick([0,1,4,5,6,9]); ans=String(gd); w=shuffle([2,3,7,8]).slice(0,3).map(String); en='Which digit CAN appear at the unit place of a perfect square?'; hing='Perfect square ke unit place par kaunsa digit aa sakta hai?'; hi='पूर्ण वर्ग के इकाई स्थान पर कौन सा अंक आ सकता है?'; sol=window.buildCanDigitSolution(gd); }
    else if(variant===2){ var n=rint(2,15); ans=String(2*n); w=[String(2*n+1),String(2*n+2),String(n+1)]; en='How many non-perfect-square numbers lie strictly between '+K(POW(n,2))+' and '+K(POW(n+1,2))+'?'; hing=K(POW(n,2))+' aur '+K(POW(n+1,2))+' ke beech kitni non-perfect-square numbers hain?'; hi=K(POW(n,2))+' और '+K(POW(n+1,2))+' के ठीक बीच कितनी अपूर्णवर्ग संख्याएँ हैं?'; sol=window.buildBetweenCountSolution(n); }
    else { ans='At least 2 zeros'; w=['Exactly 1 zero','Exactly 3 zeros','Any number of zeros']; en='If a perfect square ends in zero, how many zeros must it end with?'; hing='Agar perfect square 0 par khatam ho, to end mein kam se kam kitne zeros hone chahiye?'; hi='यदि पूर्ण वर्ग शून्य पर समाप्त हो, तो अंत में कम से कम कितने शून्य होने चाहिए?'; sol=window.buildTrailingZerosSolution(); }
    return {question:tri(en,hing,hi),ans:ans,w:w,solution:sol};
  });
  H.vars('sq_prop_check',[
    function(){ var bad=pick([2,3,7,8]); var good=[0,1,4,5,6,9].filter(function(d){return d!==bad;}); return {question:tri('Which digit can NEVER be at the unit place of a perfect square?','Perfect square ke unit place par kaunsa digit kabhi nahi aata?','पूर्ण वर्ग के इकाई स्थान पर कौन सा अंक कभी नहीं आ सकता?'),ans:String(bad),w:shuffle(good).slice(0,3).map(String),solution:window.buildNeverDigitSolution(bad)}; },
    function(){ var good=pick([0,1,4,5,6,9]); return {question:tri('Which digit CAN be at the unit place of a perfect square?','Perfect square ke unit place par kaunsa digit aa sakta hai?','पूर्ण वर्ग के इकाई स्थान पर कौन सा अंक आ सकता है?'),ans:String(good),w:shuffle([2,3,7,8]).slice(0,3).map(String),solution:window.buildCanDigitSolution(good)}; },
    function(){ var n=rint(2,15); return {question:tri('How many non-perfect-square numbers lie strictly between '+K(POW(n,2))+' and '+K(POW(n+1,2))+'?',K(POW(n,2))+' aur '+K(POW(n+1,2))+' ke beech kitni non-square numbers hain?',K(POW(n,2))+' और '+K(POW(n+1,2))+' के ठीक बीच कितनी अपूर्णवर्ग संख्याएँ हैं?'),ans:String(2*n),w:[String(2*n+1),String(2*n+2),String(n+1)],solution:window.buildBetweenCountSolution(n)}; },
    function(){ return {question:tri('If a perfect square ends in zero, how many trailing zeros must it have?','Agar perfect square 0 par khatam ho, to kam se kam kitne trailing zeros honge?','यदि पूर्ण वर्ग शून्य पर समाप्त हो, तो कम से कम कितने शून्य होंगे?'),ans:'At least 2',w:['Exactly 1','Exactly 3','Any number'],solution:window.buildTrailingZerosSolution()}; },
    function(){ var n=rint(2,15); var sq=n*n; var nsq=(n+1)*(n+1); return {question:tri('How many integers are there from '+K(sq)+' to '+K(nsq)+', counting both endpoints?',K(sq)+' se '+K(nsq)+' tak (dono ends sahit) kitne integers hain?',K(sq)+' से '+K(nsq)+' तक (दोनों सिरे सहित) कितने पूर्णांक हैं?'),ans:String(2*n+2),w:[String(2*n),String(2*n+1),String(2*n+3)],solution:window.buildInclusiveCountSolution(n,sq,nsq)}; }
  ]);

  /* 43. Concept Trap (root properties) */
  H.base('sq_concept_trap', function(){
    var variant=rint(0,7); var en,hing,hi,ans,w,sol;
    if(variant===0){ var a=rint(2,15),b=rint(2,15); var L=K(RT(a+' + '+b))+' = '+K(RT(a))+' + '+K(RT(b)); en='Is the equation '+L+' correct? (a, b > 0)'; hing='Kya '+L+' sahi hai? (a, b > 0)'; hi='क्या '+L+' सही है? (a, b > 0)'; ans='False'; w=['True','Only for a=b','For small numbers']; sol=window.buildTrapAddSolution(a,b,'sqrt'); }
    else if(variant===1){ var a=rint(2,12),b=rint(2,12); var L=K(RT(a*b))+' = '+K(RT(a))+T+K(RT(b)); en='Is the equation '+L+' correct? (a, b > 0)'; hing='Kya '+L+' sahi hai? (a, b > 0)'; hi='क्या '+L+' सही है? (a, b > 0)'; ans='True'; w=['False','Only for primes','Only for even numbers']; sol=window.buildTrapMulSolution(a,b,'sqrt'); }
    else if(variant===2){ var a=rint(2,10),b=rint(2,10); var L=K(CRT(a+' + '+b))+' = '+K(CRT(a))+' + '+K(CRT(b)); en='Is the equation '+L+' correct?'; hing='Kya '+L+' sahi hai?'; hi='क्या '+L+' सही है?'; ans='False'; w=['True','Only for a=b','For perfect cubes']; sol=window.buildTrapAddSolution(a,b,'cbrt'); }
    else if(variant===3){ var n=rint(2,15); var L=K(RT(POW(n,2))+' = |'+n+'|'); en='Is the statement '+L+' correct?'; hing='Kya '+L+' sahi hai?'; hi='क्या '+L+' सही है?'; ans='True'; w=['False','Only for positive n','Only for even n']; sol=window.buildTrapAbsSolution(n); }
    else if(variant===4){ var L=K(RT('x')+' = -5'); en='Does '+L+' have a real solution for x?'; hing=L+' ka koi real solution hai kya?'; hi=L+' का कोई वास्तविक हल है क्या?'; ans='No'; w=['Yes','Only x=25','Only x=-25']; sol=window.buildTrapNegRootSolution(5); }
    else if(variant===5){ var n=rint(2,12); var r=-(n*n*n); var L=K(CRT('('+r+')')+' = '+(-n)); en='Is the statement '+L+' correct?'; hing='Kya '+L+' sahi hai?'; hi='क्या '+L+' सही है?'; ans='True'; w=['False','No real value','Undefined']; sol=window.buildTrapCbrtNegSolution(n,r); }
    else if(variant===6){ en=K(RT(POW('a',2)))+' equals which of these (for any real a)?'; hing=K(RT(POW('a',2)))+' kis ke barabar hota hai (kisi bhi real a ke liye)?'; hi=K(RT(POW('a',2)))+' किसके बराबर होता है (किसी भी वास्तविक a के लिए)?'; ans=K('|a|'); w=[K('a'),K('\\pm a'),K(POW('a',2))]; sol=window.buildTrapAbsConceptSolution(); }
    else { var a=rint(2,10),b=rint(2,10); var L=K(RT(FR(a,b)))+' = '+K(FR(RT(a),RT(b))); en='Is the equation '+L+' correct? (a, b > 0)'; hing='Kya '+L+' sahi hai? (a, b > 0)'; hi='क्या '+L+' सही है? (a, b > 0)'; ans='True'; w=['False','Only for perfect squares','Only when a=b']; sol=window.buildTrapDivSolution(a,b); }
    return {question:tri(en,hing,hi),ans:ans,w:w,solution:sol};
  });
  H.vars('sq_concept_trap',[
    function(){ var a=rint(2,15),b=rint(2,15); var L=K(RT(a+' + '+b))+' = '+K(RT(a))+' + '+K(RT(b)); return {question:tri('Is '+L+' correct? (a, b > 0)','Kya '+L+' sahi hai? (a, b > 0)','क्या '+L+' सही है? (a, b > 0)'),ans:'False',w:['True','Only for a=b','For small numbers'],solution:window.buildTrapAddSolution(a,b,'sqrt')}; },
    function(){ var a=rint(2,12),b=rint(2,12); var L=K(RT(a*b))+' = '+K(RT(a))+T+K(RT(b)); return {question:tri('Is '+L+' correct? (a, b > 0)','Kya '+L+' sahi hai? (a, b > 0)','क्या '+L+' सही है? (a, b > 0)'),ans:'True',w:['False','Only for primes','Only for even numbers'],solution:window.buildTrapMulSolution(a,b,'sqrt')}; },
    function(){ var a=rint(2,10),b=rint(2,10); var L=K(CRT(a+' + '+b))+' = '+K(CRT(a))+' + '+K(CRT(b)); return {question:tri('Is '+L+' correct?','Kya '+L+' sahi hai?','क्या '+L+' सही है?'),ans:'False',w:['True','Only for a=b','For perfect cubes'],solution:window.buildTrapAddSolution(a,b,'cbrt')}; },
    function(){ var w=[K(RT('ab')+' = '+RT('a')+T+RT('b')),K(RT(FR('a','b'))+' = '+FR(RT('a'),RT('b'))),K(RT(POW('a',2))+' = |a|')]; return {question:tri('Which property works for cube roots but NOT for square roots?','Kaunsi property cube root mein kaam karti hai par square root mein nahi?','कौन सा गुण घनमूल में काम करता है पर वर्गमूल में नहीं?'),ans:'The cube root of a negative number is real',w:w,solution:window.buildTrapCbrtVsSqrtSolution()}; },
    function(){ var a=rint(2,10),b=rint(2,10); var L=K(RT(FR(a,b)))+' = '+K(FR(RT(a),RT(b))); return {question:tri('Is '+L+' correct? (a, b > 0)','Kya '+L+' sahi hai? (a, b > 0)','क्या '+L+' सही है? (a, b > 0)'),ans:'True',w:['False','Only for perfect squares','Only when a=b'],solution:window.buildTrapDivSolution(a,b)}; }
  ]);
})();
