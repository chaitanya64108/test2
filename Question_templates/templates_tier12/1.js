/* tier12 batch1 — templates sq_pythagoras, sq_mixed_num (base+variants) */
(function(){
  var H=window.QT; if(!H) return;
  var K=H.K,RT=H.RT,FR=H.FR,tri=H.tri;

  /* 45. Pythagoras Theorem */
  H.base('sq_pythagoras', function(){
    var triples=[[3,4,5],[5,12,13],[8,15,17],[7,24,25],[9,40,41],[6,8,10],[12,16,20],[10,24,26],[20,21,29],[12,35,37],[15,20,25],[9,12,15],[18,24,30],[16,30,34],[14,48,50],[11,60,61],[13,84,85],[28,45,53],[33,56,65],[39,80,89],[24,32,40],[21,28,35],[27,36,45]];
    var t=pick(triples); var k=rint(1,5); var a=t[0]*k,b=t[1]*k,c=t[2]*k; var variant=rint(0,2);
    if(variant===0){ var w=[c+1,(c-1>0?c-1:c+3),c+2]; return {question:tri('In a right-angled triangle, the two legs measure '+K(a)+' cm and '+K(b)+' cm. Find the length of the hypotenuse.','Ek right-angle triangle ke do legs '+K(a)+' cm aur '+K(b)+' cm hain. Hypotenuse (karn) ki length nikaalo.','एक समकोण त्रिभुज की दो भुजाएँ '+K(a)+' cm और '+K(b)+' cm हैं। कर्ण की लंबाई ज्ञात कीजिए।'),ans:c+' cm',w:w.map(function(x){return x+' cm';}),solution:buildSqPythagorasV0Solution(a,b,c)}; }
    else if(variant===1){ var w=[a+1,(a-1>0?a-1:a+3),a+2]; return {question:tri('In a right-angled triangle, the hypotenuse is '+K(c)+' cm and one leg is '+K(b)+' cm. Find the length of the other leg.','Ek right triangle ka hypotenuse '+K(c)+' cm hai aur ek leg '+K(b)+' cm hai. Doosri leg ki length nikaalo.','एक समकोण त्रिभुज का कर्ण '+K(c)+' cm है और एक भुजा '+K(b)+' cm है। दूसरी भुजा की लंबाई ज्ञात कीजिए।'),ans:a+' cm',w:w.map(function(x){return x+' cm';}),solution:buildSqPythagorasV1Solution(a,b,c)}; }
    else { var w=[b+1,(b-1>0?b-1:b+3),b+2]; return {question:tri('In a right-angled triangle, the hypotenuse is '+K(c)+' cm and one leg is '+K(a)+' cm. Find the length of the other leg.','Ek right triangle ka hypotenuse '+K(c)+' cm hai aur ek leg '+K(a)+' cm hai. Doosri leg ki length nikaalo.','एक समकोण त्रिभुज का कर्ण '+K(c)+' cm है और एक भुजा '+K(a)+' cm है। दूसरी भुजा की लंबाई ज्ञात कीजिए।'),ans:b+' cm',w:w.map(function(x){return x+' cm';}),solution:buildSqPythagorasV1Solution(b,a,c)}; }
  });
  H.vars('sq_pythagoras',[
    function(){ var triples=[[3,4,5],[5,12,13],[6,8,10],[9,12,15]]; var t=pick(triples); var a=t[0],b=t[1],c=t[2]; var P=a+b+c; return {question:tri('A right-angled triangle has legs of '+K(a)+' cm and '+K(b)+' cm. Find its perimeter.','Ek right triangle ke legs '+K(a)+' cm aur '+K(b)+' cm hain. Iski perimeter nikaalo.','एक समकोण त्रिभुज के पाद '+K(a)+' cm और '+K(b)+' cm हैं। इसकी परिमिति ज्ञात कीजिए।'),ans:String(P),w:shuffle([String(a+b),String(a*b),String(c*2),String(P+1)]).slice(0,3),solution:buildSqPythagorasV2Solution(a,b,c,P)}; },
    function(){ var isRight=rint(0,1)===1; var t; if(isRight){ t=pick([[3,4,5],[5,12,13],[8,15,17],[6,8,10],[9,12,15]]); } else { t=pick([[4,5,6],[5,6,8],[6,7,9],[7,8,10]]); } var a=t[0],b=t[1],c=t[2]; return {question:tri('Is a triangle with sides '+K(a)+' cm, '+K(b)+' cm and '+K(c)+' cm a right-angled triangle?','Kya '+K(a)+' cm, '+K(b)+' cm, '+K(c)+' cm sides wala triangle right-angled hai?','क्या '+K(a)+' cm, '+K(b)+' cm, '+K(c)+' cm भुजाओं वाला त्रिभुज समकोण है?'),ans:isRight?'Yes':'No',w:[isRight?'No':'Yes','Cannot determine','Only if scaled'],solution:buildSqPythagorasV3Solution(a,b,c,isRight)}; },
    function(){ var pairs=[[3,4,5],[5,12,13],[8,15,17],[6,8,10],[9,12,15]]; var t=pick(pairs); var l=t[0],wd=t[1],d=t[2]; return {question:tri('A rectangle has length '+K(l)+' cm and width '+K(wd)+' cm. Find the length of its diagonal.','Ek rectangle ki length '+K(l)+' cm aur width '+K(wd)+' cm hai. Iska diagonal nikaalo.','एक आयत की लंबाई '+K(l)+' cm और चौड़ाई '+K(wd)+' cm है। इसके विकर्ण की लंबाई ज्ञात कीजिए।'),ans:String(d),w:shuffle([String(l+wd),String(d-1),String(d+1),String(Math.round(Math.sqrt(l*l-wd*wd)))]).slice(0,3),solution:buildSqPythagorasV4Solution(l,wd,d)}; },
    function(){ var a=rint(3,12),b=rint(3,12); var cSq=a*a+b*b; return {question:tri('In a right-angled triangle, the legs are '+K(a)+' cm and '+K(b)+' cm. Find the value of (hypotenuse)².','Ek right triangle ke legs '+K(a)+' cm aur '+K(b)+' cm hain. (hypotenuse)² ki value nikaalo.','एक समकोण त्रिभुज के पाद '+K(a)+' cm और '+K(b)+' cm हैं। (कर्ण)² का मान ज्ञात कीजिए।'),ans:String(cSq),w:shuffle([String(a*a),String(b*b),String(cSq-1),String(cSq+1),String((a+b)*(a+b))]).slice(0,3),solution:buildSqPythagorasV5Solution(a,b,cSq)}; }
  ]);

  /* 46. Mixed Number / Fraction Root */
  function frRootQ(num,den){ return K(RT(FR(num,den))); }
  H.base('sq_mixed_num', function(){
    var p=rint(2,15),q=rint(2,10); var g=gcd(p,q); var ps=p/g,qs=q/g; if(qs===1)qs=2;
    var num=ps*ps,den=qs*qs; var Q=frRootQ(num,den);
    return {question:tri('Simplify '+Q+'.',Q+' ko simplify karo.',Q+' को सरल कीजिए।'),ans:K(FR(ps,qs)),w:[K(FR(ps+1,qs)),K(FR(ps-1>0?ps-1:ps+2,qs)),K(FR(ps,qs+1))]};
  });
  H.vars('sq_mixed_num',[
    function(){ var p=rint(2,12),q=rint(2,8); var g=gcd(p,q); var ps=p/g,qs=q/g; if(qs===1)qs=2; var num=ps*ps,den=qs*qs; return {question:tri('Find the value of '+frRootQ(num,den)+'.',frRootQ(num,den)+' ka value nikaalo.',frRootQ(num,den)+' का मान ज्ञात कीजिए।'),ans:K(FR(ps,qs)),w:[K(FR(ps+1,qs)),K(FR(ps-1>0?ps-1:ps+2,qs)),K(FR(ps,qs+1))]}; },
    function(){ var p=rint(2,10),q=rint(2,6); var g=gcd(p,q); var ps=p/g,qs=q/g; if(qs===1)qs=2; var num=ps*ps,den=qs*qs; var ans=(ps/qs).toFixed(2); return {question:tri('Express '+frRootQ(num,den)+' as a decimal.',frRootQ(num,den)+' ko decimal mein likho.',frRootQ(num,den)+' को दशमलव में लिखिए।'),ans:ans,w:[(ps/qs+0.5).toFixed(2),(ps/qs>0.5?ps/qs-0.5:ps/qs+1).toFixed(2),(ps/qs+1).toFixed(2)]}; },
    function(){ var ps=rint(2,8),qs=2; var num=ps*ps,den=qs*qs; return {question:tri('For which value is '+K(RT('x'))+' = '+K(FR(ps,qs))+'?','Kis value ke liye '+K(RT('x'))+' = '+K(FR(ps,qs))+' hai?','किस मान के लिए '+K(RT('x'))+' = '+K(FR(ps,qs))+' है?'),ans:K(FR(num,den)),w:[K(FR((ps+1)*(ps+1),den)),K(FR(num,den+1)),K(FR(num+1,den))]}; },
    function(){ var a=rint(2,8),b=rint(2,8); while(b===a)b=rint(2,8); return {question:tri(K(RT(FR(a*a,4)))+' + '+K(RT(FR(b*b,4)))+' = ?',K(RT(FR(a*a,4)))+' + '+K(RT(FR(b*b,4)))+' = ?',K(RT(FR(a*a,4)))+' + '+K(RT(FR(b*b,4)))+' = ?'),ans:K(FR(a+b,2)),w:[K(FR(a+b+1,2)),K(FR(a+b,3)),K(FR(Math.abs(a-b),2))]}; },
    function(){ var p1=rint(2,8),p2=rint(2,8); while(p2===p1)p2=rint(2,8); var v1=p1/2,v2=p2/2; var A=K(RT(FR(p1*p1,4))),B=K(RT(FR(p2*p2,4))); return {question:tri('Which is greater: '+A+' or '+B+'?','Bada kaun: '+A+' ya '+B+'?','बड़ा कौन: '+A+' या '+B+'?'),ans:v1>v2?A:B,w:['Equal',v1>v2?B:A,'Cannot determine']}; }
  ]);
})();
