/* tier12 batch3 — templates cb_unit_digit, cb_quot, cb_surface (base+variants) */
(function(){
  var H=window.QT; if(!H) return;
  var K=H.K,CRT=H.CRT,FR=H.FR,POW=H.POW,T=H.T,tri=H.tri;

  /* 50. Unit Digit Cube Method */
  H.base('cb_unit_digit', function(){
    var variant=rint(0,1);
    if(variant===0){ var r=rint(2,19); var cube=r*r*r; var ans=r%10; var w=[(ans+1)%10,(ans+2)%10,(ans-1+10)%10]; return {question:tri('The cube root of '+K(cube)+' ends in which digit?','​'+K(cube)+' ke cube root ka last digit kya hoga?','​'+K(cube)+' के घनमूल का अंतिम अंक क्या होगा?'),ans:String(ans),w:w.map(String)}; }
    else { var r=rint(2,19); var cube=r*r*r; var ans=cube%10; var w=[(ans+1)%10,(ans+2)%10,(ans-1+10)%10]; return {question:tri('What is the unit (last) digit of '+K(POW(r,3))+'?','​'+K(POW(r,3))+' ka unit (last) digit kya hai?','​'+K(POW(r,3))+' का इकाई (अंतिम) अंक क्या है?'),ans:String(ans),w:w.map(String)}; }
  });
  H.vars('cb_unit_digit',[
    function(){ var n=rint(2,25); var cb=n*n*n; var ans=cb%10; var w=[(ans+1)%10,(ans+2)%10,(ans-1+10)%10]; return {question:tri('What is the unit digit of '+K(POW(n,3))+'?','​'+K(POW(n,3))+' ka unit digit kya hai?','​'+K(POW(n,3))+' का इकाई अंक क्या है?'),ans:String(ans),w:w.map(String)}; },
    function(){ var d=pick([1,8,7,4,5,6,3,2,9,0]); var ansMap={1:1,8:2,7:3,4:4,5:5,6:6,3:7,2:8,9:9,0:10}; var ans=ansMap[d]; var wPool=[ans+1,ans-1>0?ans-1:ans+2,ans+2,ans+3]; var w=wPool.filter(function(x){return x>0&&x<=10&&x!==ans;}).slice(0,3); return {question:tri('The cube of which number ends in the digit '+K(d)+'?','Kis number ke cube ka last digit '+K(d)+' hai?','किस संख्या के घन का अंतिम अंक '+K(d)+' है?'),ans:String(ans),w:w.map(String)}; },
    function(){ var n=rint(2,15); var sqD=(n*n)%10,cbD=(n*n*n)%10; var ans=sqD===cbD?'Same':'Different'; return {question:tri('For n = '+K(n)+', is the unit digit of '+K(POW(n,2))+' the same as that of '+K(POW(n,3))+'?','n = '+K(n)+' ke liye, '+K(POW(n,2))+' aur '+K(POW(n,3))+' ka unit digit same hai?','n = '+K(n)+' के लिए, '+K(POW(n,2))+' और '+K(POW(n,3))+' का इकाई अंक समान है?'),ans:ans,w:[ans==='Same'?'Different':'Same','Cannot determine','Depends on n']}; },
    function(){ var n=rint(11,30); var cb=n*n*n; var ans=n%10; var w=[(ans+1)%10,(ans+2)%10,(ans-1+10)%10]; return {question:tri('The cube root '+K(CRT(cb))+' ends in which digit?','​'+K(CRT(cb))+' ka last digit kya hoga?','​'+K(CRT(cb))+' का अंतिम अंक क्या होगा?'),ans:String(ans),w:w.map(String)}; },
    function(){ var a=rint(2,10),b=rint(2,10); var da=(a*a*a)%10,db=(b*b*b)%10; var ans=(da+db)%10; var w=[(ans+1)%10,(ans+2)%10,(ans-1+10)%10]; return {question:tri('What is the unit digit of '+K(POW(a,3)+' + '+POW(b,3))+'?','​'+K(POW(a,3)+' + '+POW(b,3))+' ka unit digit kya hai?','​'+K(POW(a,3)+' + '+POW(b,3))+' का इकाई अंक क्या है?'),ans:String(ans),w:w.map(String)}; }
  ]);

  /* 51. Quotient Under Cube Root */
  H.base('cb_quot', function(){
    for(var i=0;i<30;i++){ var a=rint(2,15),b=rint(2,10); if(a%b!==0) continue; var ans=a/b; var numA=a*a*a,numB=b*b*b; var w=[ans+1,ans-1>0?ans-1:ans+2,ans+2]; return {question:tri('Simplify '+K(FR(CRT(numA),CRT(numB)))+'.',K(FR(CRT(numA),CRT(numB)))+' ko simplify karo.',K(FR(CRT(numA),CRT(numB)))+' को सरल कीजिए।'),ans:String(ans),w:w.map(String)}; }
    return {question:tri('Simplify '+K(FR(CRT(64),CRT(8)))+'.',K(FR(CRT(64),CRT(8)))+' ko simplify karo.',K(FR(CRT(64),CRT(8)))+' को सरल कीजिए।'),ans:'2',w:['3','1','4']};
  });
  H.vars('cb_quot',[
    function(){ var p=rint(2,8),q=rint(2,5); var g=gcd(p,q); var ps=p/g,qs=q/g; if(qs===1)qs=2; return {question:tri('Simplify '+K(CRT(FR(ps*ps*ps,qs*qs*qs)))+'.',K(CRT(FR(ps*ps*ps,qs*qs*qs)))+' ko simplify karo.',K(CRT(FR(ps*ps*ps,qs*qs*qs)))+' को सरल कीजिए।'),ans:K(FR(ps,qs)),w:[K(FR(ps+1,qs)),K(FR(ps,qs+1)),K(FR(ps-1>0?ps-1:ps+2,qs))]}; },
    function(){ var a=rint(2,8),b=rint(2,6); var ans=a*b; var w=[ans+1,ans-1>0?ans-1:ans+2,a+b]; return {question:tri(K(CRT(a*a*a)+T+CRT(b*b*b))+' = ?',K(CRT(a*a*a)+T+CRT(b*b*b))+' = ?',K(CRT(a*a*a)+T+CRT(b*b*b))+' = ?'),ans:String(ans),w:w.map(String)}; },
    function(){ for(var i=0;i<30;i++){ var a=rint(2,8),b=rint(2,4); if(a%b!==0)continue; var q=a/b; var ans=a*a*a; var w=[ans+1,ans-1>0?ans-1:ans+2,ans+b*b*b]; return {question:tri('If '+K(FR(CRT('x'),CRT(b*b*b)))+' = '+K(q)+', find x.','Agar '+K(FR(CRT('x'),CRT(b*b*b)))+' = '+K(q)+', to x = ?','यदि '+K(FR(CRT('x'),CRT(b*b*b)))+' = '+K(q)+', तो x = ?'),ans:String(ans),w:w.map(String)}; } return {question:tri('If '+K(FR(CRT('x'),CRT(8)))+' = '+K(2)+', find x.','Agar '+K(FR(CRT('x'),CRT(8)))+' = '+K(2)+', to x = ?','यदि '+K(FR(CRT('x'),CRT(8)))+' = '+K(2)+', तो x = ?'),ans:'64',w:['65','63','72']}; },
    function(){ for(var i=0;i<30;i++){ var a=rint(2,10),b=rint(2,6); if((a*a*a)%(b*b*b)!==0)continue; var ans=a/b; var w=[ans+1,ans-1>0?ans-1:ans+2,ans+2]; return {question:tri('Simplify '+K(CRT(FR(a*a*a,b*b*b)))+'.',K(CRT(FR(a*a*a,b*b*b)))+' ko simplify karo.',K(CRT(FR(a*a*a,b*b*b)))+' को सरल कीजिए।'),ans:String(ans),w:w.map(String)}; } return {question:tri('Simplify '+K(CRT(FR(64,8)))+'.',K(CRT(FR(64,8)))+' ko simplify karo.',K(CRT(FR(64,8)))+' को सरल कीजिए।'),ans:'2',w:['3','1','4']}; },
    function(){ for(var i=0;i<30;i++){ var a=rint(2,8),b=rint(2,4); if(a%b!==0)continue; var q=a/b; var lhs=a*a*a,rhs=b*b*b; var w=[q+1,q-1>0?q-1:q+2,q+2]; return {question:tri('Evaluate '+K(FR(CRT(lhs),CRT(rhs)))+'.',K(FR(CRT(lhs),CRT(rhs)))+' ka maan nikaalo.',K(FR(CRT(lhs),CRT(rhs)))+' का मान ज्ञात कीजिए।'),ans:String(q),w:w.map(String)}; } return {question:tri('Evaluate '+K(FR(CRT(64),CRT(8)))+'.',K(FR(CRT(64),CRT(8)))+' ka maan nikaalo.',K(FR(CRT(64),CRT(8)))+' का मान ज्ञात कीजिए।'),ans:'2',w:['3','1','4']}; }
  ]);

  /* 52. Surface Area from Volume */
  H.base('cb_surface', function(){
    var variant=rint(0,1); var s=rint(3,15); var vol=s*s*s;
    if(variant===0){ var tsa=6*s*s; var w=[tsa+36,tsa-36>0?tsa-36:tsa+72,tsa+6]; return {question:tri('The volume of a cube is '+K(vol)+' m³. Find its total surface area.','Ek cube ka volume '+K(vol)+' m³ hai. Iska total surface area nikaalo.','एक घन का आयतन '+K(vol)+' m³ है। इसका कुल पृष्ठीय क्षेत्रफल ज्ञात कीजिए।'),ans:tsa+' m²',w:w.map(function(x){return x+' m²';})}; }
    else { var lsa=4*s*s; var w=[lsa+24,lsa-24>0?lsa-24:lsa+48,lsa+4]; return {question:tri('The volume of a cube is '+K(vol)+' m³. Find its lateral surface area.','Ek cube ka volume '+K(vol)+' m³ hai. Iska lateral surface area nikaalo.','एक घन का आयतन '+K(vol)+' m³ है। इसका पार्श्व पृष्ठीय क्षेत्रफल ज्ञात कीजिए।'),ans:lsa+' m²',w:w.map(function(x){return x+' m²';})}; }
  });
  H.vars('cb_surface',[
    function(){ return {question:tri('For any cube, what is the ratio of its total surface area to its lateral surface area?','Kisi bhi cube mein total surface area aur lateral surface area ka ratio kya hota hai?','किसी भी घन में कुल पृष्ठीय क्षेत्रफल और पार्श्व पृष्ठीय क्षेत्रफल का अनुपात क्या होता है?'),ans:'1.5',w:['2','1','2.5']}; },
    function(){ var s=rint(3,10); var tsa=6*s*s; var vol=s*s*s; var w=[vol+10,vol-10>0?vol-10:vol+20,vol+30]; return {question:tri('The total surface area of a cube is '+K(tsa)+' m². Find its volume.','Ek cube ka total surface area '+K(tsa)+' m² hai. Iska volume nikaalo.','एक घन का कुल पृष्ठीय क्षेत्रफल '+K(tsa)+' m² है। इसका आयतन ज्ञात कीजिए।'),ans:vol+' m³',w:w.map(function(x){return x+' m³';})}; },
    function(){ var s=rint(3,12); var tsa=6*s*s; var w=[s+1,s-1>0?s-1:s+2,s+2]; return {question:tri('The total surface area of a cube is '+K(tsa)+' m². Find the length of its edge.','Ek cube ka total surface area '+K(tsa)+' m² hai. Iski edge ki length nikaalo.','एक घन का कुल पृष्ठीय क्षेत्रफल '+K(tsa)+' m² है। इसकी कोर की लंबाई ज्ञात कीजिए।'),ans:s+' m',w:w.map(function(x){return x+' m';})}; },
    function(){ var s=rint(3,10); var tsa=6*s*s; var rate=rint(5,20); var cost=tsa*rate; return {question:tri('A cube of edge '+K(s)+' m is painted on all faces at ₹'+K(rate)+' per m². Find the total cost of painting.','Edge '+K(s)+' m wale cube ko sabhi faces par ₹'+K(rate)+'/m² se paint karna hai. Total kharcha nikaalo.','कोर '+K(s)+' m वाले घन को सभी फलकों पर ₹'+K(rate)+'/m² की दर से पेंट करना है। कुल खर्च ज्ञात कीजिए।'),ans:'₹'+cost,w:['₹'+(cost+100),'₹'+(cost-100>0?cost-100:cost+200),'₹'+(cost+50)]}; },
    function(){ var s1=rint(2,8),s2=rint(2,8); while(s2===s1)s2=rint(2,8); return {question:tri('Two cubes have edges '+K(s1)+' m and '+K(s2)+' m. Find the ratio of their volumes.','Do cubes ki edges '+K(s1)+' m aur '+K(s2)+' m hain. Inke volumes ka ratio nikaalo.','दो घनों की कोरें '+K(s1)+' m और '+K(s2)+' m हैं। इनके आयतनों का अनुपात ज्ञात कीजिए।'),ans:(s1*s1*s1)+':'+(s2*s2*s2),w:[s1*s1+':'+s2*s2,s1+':'+s2,(s1*s1*s1+1)+':'+(s2*s2*s2)]}; }
  ]);
})();
