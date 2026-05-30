/* tier12 batch11 — templates rationalize, triplet_id (base+variants) */
(function(){
  var H=window.QT; if(!H) return;
  var K=H.K,RT=H.RT,FR=H.FR,tri=H.tri;

  /* 71. Rationalize Denominator */
  H.base('rationalize', function(){
    var surds=[2,3,5,6,7,8,10,11,13]; var a,b,denom;
    do{ a=pick(surds); b=rint(1,4); denom=a-b*b; }while(denom===0);
    var q=K(FR(1,RT(a)+' + '+b));
    var ans,w;
    if(denom===1){ ans=K(RT(a)+' - '+b); w=[K(RT(a)+' + '+b),K(b+' - '+RT(a)),K(FR(1,RT(a)+' - '+b))]; }
    else if(denom>0){ ans=K(FR(RT(a)+' - '+b,denom)); w=[K(FR(RT(a)+' + '+b,denom)),K(RT(a)+' - '+b),K(FR(b+' - '+RT(a),denom))]; }
    else { var absD=Math.abs(denom); ans=K(FR(b+' - '+RT(a),absD)); w=[K(FR(RT(a)+' - '+b,absD)),K(b+' - '+RT(a)),K(FR(b+' + '+RT(a),absD))]; }
    return {question:tri('Rationalize the denominator: '+q+'.','Denominator ko rationalize karo: '+q+'.','हर का प्रसारणीकरण (rationalize) कीजिए: '+q+'।'),ans:ans,w:w};
  });
  H.vars('rationalize',[
    function(){ var surds=[2,3,5,6,7,8,10,11,13]; var a,b,denom; do{ a=pick(surds); b=rint(1,4); denom=a-b*b; }while(denom===0); var q=K(FR(1,RT(a)+' - '+b)); var ans,w; if(denom===1){ ans=K(RT(a)+' + '+b); w=[K(RT(a)+' - '+b),K(b+' + '+RT(a)),K(FR(1,RT(a)+' + '+b))]; } else if(denom>0){ ans=K(FR(RT(a)+' + '+b,denom)); w=[K(FR(RT(a)+' - '+b,denom)),K(RT(a)+' + '+b),K(FR(b+' + '+RT(a),denom))]; } else { var absD=Math.abs(denom); ans=K(FR('-('+RT(a)+' + '+b+')',absD)); w=[K(FR(RT(a)+' + '+b,absD)),K(b+' + '+RT(a)),K(FR(RT(a)+' - '+b,absD))]; } return {question:tri('Rationalize the denominator: '+q+'.','Denominator ko rationalize karo: '+q+'.','हर का प्रसारणीकरण कीजिए: '+q+'।'),ans:ans,w:w}; },
    function(){ var a=pick([2,3,5,6,7,10,11,13]); return {question:tri('Rationalize the denominator: '+K(FR(1,RT(a)))+'.','Denominator ko rationalize karo: '+K(FR(1,RT(a)))+'.','हर का प्रसारणीकरण कीजिए: '+K(FR(1,RT(a)))+'।'),ans:K(FR(RT(a),a)),w:[K(FR(1,a)),K(RT(a)),K(FR(a,RT(a)))]}; },
    function(){ var a=pick([2,3,5,7,11]),k=rint(2,9); return {question:tri('Rationalize the denominator: '+K(FR(k,RT(a)))+'.','Denominator ko rationalize karo: '+K(FR(k,RT(a)))+'.','हर का प्रसारणीकरण कीजिए: '+K(FR(k,RT(a)))+'।'),ans:K(FR(k+RT(a),a)),w:[K(FR(k,a)),K(k+RT(a)),K(FR(a,k+RT(a)))]}; },
    function(){ var pool=[2,3,5,6,7,8,10,11]; var a=pick(pool),b=pick(pool); while(b===a)b=pick(pool); if(a<b){var t=a;a=b;b=t;} var denom=a-b; var q=K(FR(1,RT(a)+' + '+RT(b))); var ans=denom===1?K(RT(a)+' - '+RT(b)):K(FR(RT(a)+' - '+RT(b),denom)); var w=[denom===1?K(RT(a)+' + '+RT(b)):K(FR(RT(a)+' + '+RT(b),denom)),K(RT(a)+' - '+RT(b)),K(FR(RT(b)+' - '+RT(a),denom))]; return {question:tri('Rationalize the denominator: '+q+'.','Denominator ko rationalize karo: '+q+'.','हर का प्रसारणीकरण कीजिए: '+q+'।'),ans:ans,w:w}; }
  ]);

  /* 72. Triplet ID */
  function genTri(){ var m=rint(2,10),n=rint(1,m-1); var a=m*m-n*n,b=2*m*n,c=m*m+n*n; return [a,b,c].sort(function(x,y){return x-y;}); }
  function isTrip(t){ return t[0]*t[0]+t[1]*t[1]===t[2]*t[2]; }
  H.base('triplet_id', function(){
    var fake; do{ fake=genTri(); fake[rint(0,2)]+=rint(1,3); }while(isTrip(fake)); var ans=fake.join(', ');
    var wrongs=[],g=0; while(wrongs.length<3&&g<200){ var t=genTri().join(', '); if(t!==ans&&wrongs.indexOf(t)<0) wrongs.push(t); g++; } while(wrongs.length<3) wrongs.push(genTri().map(function(x){return x+1;}).join(', '));
    return {question:tri('Which of the following is NOT a Pythagorean triplet (a, b, c with a² + b² = c²)?','Inmein se kaunsa Pythagorean triplet NAHI hai (a, b, c jahan a² + b² = c²)?','निम्नलिखित में से कौन सा पाइथागोरस त्रिक नहीं है (a, b, c जहाँ a² + b² = c²)?'),ans:ans,w:wrongs};
  });
  H.vars('triplet_id',[
    function(){ var real=genTri().join(', '); var fakes=[],g=0; while(fakes.length<3&&g<200){ var f=genTri(); f[rint(0,2)]+=rint(1,3); var s=f.join(', '); if(!isTrip(f)&&s!==real&&fakes.indexOf(s)<0) fakes.push(s); g++; } while(fakes.length<3) fakes.push(genTri().map(function(x){return x+1;}).join(', ')); return {question:tri('Which of the following IS a Pythagorean triplet (a² + b² = c²)?','Inmein se kaunsa Pythagorean triplet HAI (a² + b² = c²)?','निम्नलिखित में से कौन सा पाइथागोरस त्रिक है (a² + b² = c²)?'),ans:real,w:fakes}; },
    function(){ var m=rint(2,8),n=rint(1,m-1); var a=m*m-n*n,b=2*m*n,c=m*m+n*n; var lo=Math.min(a,b),hi=Math.max(a,b); var w=[c+1,c-1,c+2]; return {question:tri('A right triangle has legs '+lo+' and '+hi+'. Find the length of the hypotenuse.','Ek samkon tribhuj ki bhujayein '+lo+' aur '+hi+' hain. Karna (hypotenuse) ki lambai nikaalo.','एक समकोण त्रिभुज की भुजाएँ '+lo+' और '+hi+' हैं। कर्ण की लंबाई ज्ञात कीजिए।'),ans:String(c),w:w.map(String)}; },
    function(){ var base=pick([[3,4,5],[5,12,13],[8,15,17],[7,24,25]]); var k=rint(2,5); var real=base.map(function(x){return x*k;}).join(', '); var fakes=[[base[0]*k+1,base[1]*k,base[2]*k].join(', '),[base[0]*k,base[1]*k+2,base[2]*k].join(', '),[base[0]*k,base[1]*k,base[2]*k+1].join(', ')]; return {question:tri('Which of these is a valid Pythagorean triplet (a multiple of a known triple)?','Inmein se kaunsa valid Pythagorean triplet hai (kisi known triple ka multiple)?','इनमें से कौन सा वैध पाइथागोरस त्रिक है (किसी ज्ञात त्रिक का गुणज)?'),ans:real,w:fakes}; }
  ]);
})();
