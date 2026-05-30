/* tier_grad batch1 — nested_sq, double_nested, inf_nested (base+variants) */
(function(){
  var H=window.QT; if(!H) return;
  var K=H.K,RT=H.RT,POW=H.POW,B=H.B,tri=H.tri;

  /* 73. Nested Square Root: sqrt(N + 2 sqrt(M)) = r + sqrt(s) */
  H.base('nested_sq', function(){
    var r=rint(2,5); var s=pick([2,3,5,6,7,10]);
    var N=r*r+s, M=r*r*s;
    var q=K(RT(N+' + 2'+RT(M)));
    var ans=K(r+' + '+RT(s));
    var w=[K(r+' - '+RT(s)),K((r+1)+' + '+RT(s)),K(RT(r)+' + '+RT(s))];
    return {question:tri(
      'A number is written as the nested radical '+q+'. Rewrite it in the simpler form a + √b. What is its value?',
      'Ek number nested radical '+q+' ki tarah likha hai. Ise simple form a + √b me likho. Iski value kya hai?',
      'एक संख्या नेस्टेड रेडिकल '+q+' के रूप में लिखी है। इसे सरल रूप a + √b में लिखिए। इसका मान क्या है?'
    ),ans:ans,w:w};
  });
  H.vars('nested_sq',[
    function(){ var r=rint(3,6); var s=pick([2,3,5,6,7]); var N=r*r+s,M=r*r*s; var q=K(RT(N+' - 2'+RT(M))); return {question:tri('Simplify the nested radical '+q+' into the form a − √b. What is its value?','Is nested radical '+q+' ko a − √b form me simplify karo. Value kya hai?','इस नेस्टेड रेडिकल '+q+' को a − √b रूप में सरल कीजिए। इसका मान क्या है?'),ans:K(r+' - '+RT(s)),w:[K(r+' + '+RT(s)),K((r-1)+' - '+RT(s)),K(RT(r)+' - '+RT(s))]}; },
    function(){ var u=rint(2,5),v=rint(2,5); while(v===u)v=rint(2,5); var p=u*u,qq=v*v; var N=p+qq,M=p*qq; var q=K(RT(N+' + 2'+RT(M))); var a=u+v; return {question:tri('Here both inner parts are perfect squares. Find the exact value of '+q+'.','Yahan andar dono parts perfect square hain. '+q+' ki exact value nikaalo.','यहाँ भीतर दोनों भाग पूर्ण वर्ग हैं। '+q+' का सही मान ज्ञात कीजिए।'),ans:String(a),w:[String(a+1),String(a-1),String(N)]}; }
  ]);

  /* 74. Double Nested Root: sqrt(k sqrt(k sqrt(k^2))) = k */
  H.base('double_nested', function(){
    var k=rint(3,9);
    var q=K(RT(k+RT(k+RT(POW(k,2)))));
    return {question:tri(
      'Evaluate the double nested root '+q+'. Tip: start from the innermost root and work outward.',
      'Is double nested root '+q+' ko solve karo. Tip: sabse andar wale root se shuru karke bahar ki taraf badho.',
      'इस दोहरे नेस्टेड रूट '+q+' का मान निकालिए। संकेत: सबसे भीतरी रूट से शुरू करके बाहर की ओर बढ़ें।'
    ),ans:String(k),w:[String(k*k),String(k*2),String(k+1)]};
  });
  H.vars('double_nested',[
    function(){ var P=pick([[2,64,4],[8,4,4],[3,9,3],[5,25,5],[6,36,6],[8,64,8]]); var q=K(RT(P[0]+RT(P[1]))); return {question:tri('Evaluate the nested root '+q+'. Simplify the inner root first, then multiply.','Is nested root '+q+' ko solve karo. Pehle andar wala root, phir multiply.','इस नेस्टेड रूट '+q+' का मान निकालिए। पहले भीतरी रूट हल करें, फिर गुणा करें।'),ans:String(P[2]),w:[String(P[2]+2),String(P[2]*2),String(P[1])]}; }
  ]);

  /* 75. Infinite Nested Radical: sqrt(a + sqrt(a + ...)) = n, a=n(n-1) */
  H.base('inf_nested', function(){
    var n=rint(3,7); var a=n*(n-1);
    var q=K(RT(a+' + '+RT(a+' + '+RT(a+' + '+B+'cdots'))));
    return {question:tri(
      'Find the value of the infinite nested radical '+q+' (it continues forever).',
      'Is infinite nested radical '+q+' ki value nikaalo (yeh hamesha chalta rehta hai).',
      'इस अनंत नेस्टेड रेडिकल '+q+' का मान ज्ञात कीजिए (यह हमेशा चलता रहता है)।'
    ),ans:String(n),w:[String(n+1),String(n-1),String(a)]};
  });
  H.vars('inf_nested',[
    function(){ var a=rint(2,9); var q=K(RT(a+RT(a+RT(a+B+'cdots')))); return {question:tri('Find the value of the infinite product radical '+q+'.','Is infinite product radical '+q+' ki value nikaalo.','इस अनंत गुणनफल रेडिकल '+q+' का मान ज्ञात कीजिए।'),ans:String(a),w:[String(a*a),String(a+1),String(a-1>1?a-1:a+2)]}; }
  ]);
})();
