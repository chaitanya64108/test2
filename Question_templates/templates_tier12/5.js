/* tier12 batch5 — templates cb_div, find_x_sq, find_x_cb (base+variants) */
(function(){
  var H=window.QT; if(!H) return;
  var K=H.K,RT=H.RT,CRT=H.CRT,FR=H.FR,T=H.T,tri=H.tri;

  /* 56. Cube Root Division */
  H.base('cb_div', function(){
    var a=rint(2,10),b=rint(2,8); var n1=a*a*a*b*b*b,n2=b*b*b; var w=[a+1,a-1>0?a-1:a+2,a+2]; return {question:tri('Simplify '+K(FR(CRT(n1),CRT(n2)))+'.',K(FR(CRT(n1),CRT(n2)))+' ko simplify karo.',K(FR(CRT(n1),CRT(n2)))+' को सरल कीजिए।'),ans:String(a),w:w.map(String)};
  });
  H.vars('cb_div',[
    function(){ var a=rint(2,7),b=rint(2,5); var n1=a*a*a*b*b*b,n2=b*b*b; var w=[a+1,a-1>0?a-1:a+2,a+2]; return {question:tri('Simplify '+K(FR(CRT(n1),CRT(n2)))+'.',K(FR(CRT(n1),CRT(n2)))+' ko simplify karo.',K(FR(CRT(n1),CRT(n2)))+' को सरल कीजिए।'),ans:String(a),w:w.map(String)}; },
    function(){ for(var i=0;i<30;i++){ var a=rint(2,6),b=rint(2,4),c=rint(2,3); var ans=a*b/c; if(ans!==Math.floor(ans)) continue; var w=[ans+1,ans-1>0?ans-1:ans+2,ans+2]; var q=K(FR(CRT(a*a*a)+T+CRT(b*b*b),CRT(c*c*c))); return {question:tri('Simplify '+q+'.',q+' ko simplify karo.',q+' को सरल कीजिए।'),ans:String(ans),w:w.map(String)}; } var q0=K(FR(CRT(8)+T+CRT(27),CRT(8))); return {question:tri('Simplify '+q0+'.',q0+' ko simplify karo.',q0+' को सरल कीजिए।'),ans:'3',w:['2','4','5']}; },
    function(){ var a=rint(2,6),b=rint(2,4); var n1=a*a*a*b*b*b; var bm=b-1>0?b-1:b+2; var w=[String((b+1)*(b+1)*(b+1)),String(bm*bm*bm),String((b+2)*(b+2)*(b+2))]; return {question:tri('If '+K(FR(CRT(n1),CRT('x')))+' = '+K(a)+', find x.','Agar '+K(FR(CRT(n1),CRT('x')))+' = '+K(a)+', to x = ?','यदि '+K(FR(CRT(n1),CRT('x')))+' = '+K(a)+', तो x = ?'),ans:String(b*b*b),w:w}; },
    function(){ var b=pick([2,3,4]); var a=b*rint(2,5); var ans=a/b; var w=[ans+1,ans-1>0?ans-1:ans+2,ans+2]; return {question:tri('Simplify '+K(CRT(FR(a*a*a,b*b*b)))+'.',K(CRT(FR(a*a*a,b*b*b)))+' ko simplify karo.',K(CRT(FR(a*a*a,b*b*b)))+' को सरल कीजिए।'),ans:String(ans),w:w.map(String)}; },
    function(){ var b=pick([2,3]); var a=b*rint(2,5); var ans=a/b; var w=[ans+1,ans-1>0?ans-1:ans+2,ans+2]; return {question:tri('Evaluate '+K(FR(CRT(a*a*a),CRT(b*b*b)))+'.',K(FR(CRT(a*a*a),CRT(b*b*b)))+' ka maan nikaalo.',K(FR(CRT(a*a*a),CRT(b*b*b)))+' का मान ज्ञात कीजिए।'),ans:String(ans),w:w.map(String)}; }
  ]);

  /* 57. Find x (Square) */
  H.base('find_x_sq', function(){
    var variant=rint(0,2);
    if(variant===0){ var r=rint(3,30); var sq=r*r; var w=[sq+10,sq-10>0?sq-10:sq+20,sq+20]; return {question:tri('If '+K(RT('x'))+' = '+K(r)+', find the value of x.','Agar '+K(RT('x'))+' = '+K(r)+', to x = ?','यदि '+K(RT('x'))+' = '+K(r)+', तो x का मान ज्ञात कीजिए।'),ans:String(sq),w:w.map(String)}; }
    else if(variant===1){ var k=rint(2,4),r=rint(2,15); var sq=r*r; var val=k*r; var w=[sq+10,sq-10>0?sq-10:sq+20,sq+20]; return {question:tri('If '+K(k+RT('x'))+' = '+K(val)+', find the value of x.','Agar '+K(k+RT('x'))+' = '+K(val)+', to x = ?','यदि '+K(k+RT('x'))+' = '+K(val)+', तो x का मान ज्ञात कीजिए।'),ans:String(sq),w:w.map(String)}; }
    else { var r=rint(2,20),add=rint(1,15); var b=r+add; var sq=r*r; var w=[sq+10,sq-10>0?sq-10:sq+20,sq+20]; return {question:tri('If '+K(RT('x')+' + '+add)+' = '+K(b)+', find the value of x.','Agar '+K(RT('x')+' + '+add)+' = '+K(b)+', to x = ?','यदि '+K(RT('x')+' + '+add)+' = '+K(b)+', तो x का मान ज्ञात कीजिए।'),ans:String(sq),w:w.map(String)}; }
  });
  H.vars('find_x_sq',[
    function(){ for(var i=0;i<30;i++){ var r=rint(3,20),add=rint(1,30); var x=r*r-add; if(x<0) continue; var w=[x+5,x-5>=0?x-5:x+10,x+10]; return {question:tri('If '+K(RT('x + '+add))+' = '+K(r)+', find x.','Agar '+K(RT('x + '+add))+' = '+K(r)+', to x = ?','यदि '+K(RT('x + '+add))+' = '+K(r)+', तो x = ?'),ans:String(x),w:w.map(String)}; } return {question:tri('If '+K(RT('x + 4'))+' = '+K(5)+', find x.','Agar '+K(RT('x + 4'))+' = '+K(5)+', to x = ?','यदि '+K(RT('x + 4'))+' = '+K(5)+', तो x = ?'),ans:'21',w:['20','22','25']}; },
    function(){ var r=rint(2,15),add=rint(1,10); var b=r+add; var x=r*r; var w=[x+5,x-5>=0?x-5:x+10,x+10]; return {question:tri('If '+K(RT('x')+' + '+add)+' = '+K(b)+', find x.','Agar '+K(RT('x')+' + '+add)+' = '+K(b)+', to x = ?','यदि '+K(RT('x')+' + '+add)+' = '+K(b)+', तो x = ?'),ans:String(x),w:w.map(String)}; },
    function(){ var k=rint(2,4),r=rint(2,15); var v=k*r; var x=r*r; var w=[x+5,x-5>=0?x-5:x+10,x+10]; return {question:tri('If '+K(k+RT('x'))+' = '+K(v)+', find x.','Agar '+K(k+RT('x'))+' = '+K(v)+', to x = ?','यदि '+K(k+RT('x'))+' = '+K(v)+', तो x = ?'),ans:String(x),w:w.map(String)}; },
    function(){ var r=rint(3,20); var sub=rint(1,r-1); var b=r-sub; var x=r*r; var w=[x+5,x-5>=0?x-5:x+10,x+10]; return {question:tri('If '+K(RT('x')+' - '+sub)+' = '+K(b)+', find x.','Agar '+K(RT('x')+' - '+sub)+' = '+K(b)+', to x = ?','यदि '+K(RT('x')+' - '+sub)+' = '+K(b)+', तो x = ?'),ans:String(x),w:w.map(String)}; },
    function(){ var k=rint(2,5),n=rint(2,12); var x=k*n*n; var w=[x+k,x-k>=0?x-k:x+2*k,x+2*k]; return {question:tri('If '+K(RT(FR('x',k)))+' = '+K(n)+', find x.','Agar '+K(RT(FR('x',k)))+' = '+K(n)+', to x = ?','यदि '+K(RT(FR('x',k)))+' = '+K(n)+', तो x = ?'),ans:String(x),w:w.map(String)}; }
  ]);

  /* 58. Find x (Cube) */
  H.base('find_x_cb', function(){
    var variant=rint(0,1);
    if(variant===0){ var r=rint(2,12),add=rint(1,15); var target=r+add; var cube=r*r*r; var w=[cube+30,cube-30>0?cube-30:cube+60,cube+60]; return {question:tri('If '+K(CRT('y')+' + '+add)+' = '+K(target)+', find the value of y.','Agar '+K(CRT('y')+' + '+add)+' = '+K(target)+', to y = ?','यदि '+K(CRT('y')+' + '+add)+' = '+K(target)+', तो y का मान ज्ञात कीजिए।'),ans:String(cube),w:w.map(String)}; }
    else { var r=rint(2,8); var target=2*r; var cube=r*r*r; var w1=(r+1)*(r+1)*(r+1),w2=r>1?(r-1)*(r-1)*(r-1):1,w3=(r+2)*(r+2)*(r+2); return {question:tri('If '+K('2'+CRT('y'))+' = '+K(target)+', find the value of y.','Agar '+K('2'+CRT('y'))+' = '+K(target)+', to y = ?','यदि '+K('2'+CRT('y'))+' = '+K(target)+', तो y का मान ज्ञात कीजिए।'),ans:String(cube),w:[String(w1),String(w2),String(w3)]}; }
  });
  H.vars('find_x_cb',[
    function(){ for(var i=0;i<30;i++){ var n=rint(2,10),add=rint(1,40); var y=n*n*n-add; if(y<0) continue; var w=[y+10,y-10>=0?y-10:y+20,y+20]; return {question:tri('If '+K(CRT('y + '+add))+' = '+K(n)+', find y.','Agar '+K(CRT('y + '+add))+' = '+K(n)+', to y = ?','यदि '+K(CRT('y + '+add))+' = '+K(n)+', तो y = ?'),ans:String(y),w:w.map(String)}; } return {question:tri('If '+K(CRT('y + 1'))+' = '+K(3)+', find y.','Agar '+K(CRT('y + 1'))+' = '+K(3)+', to y = ?','यदि '+K(CRT('y + 1'))+' = '+K(3)+', तो y = ?'),ans:'26',w:['25','27','30']}; },
    function(){ var n=rint(2,8),sub=rint(1,n-1<1?1:n-1); var b=n-sub; var y=n*n*n; var w=[y+10,y-10>=0?y-10:y+20,y+20]; return {question:tri('If '+K(CRT('y')+' - '+sub)+' = '+K(b)+', find y.','Agar '+K(CRT('y')+' - '+sub)+' = '+K(b)+', to y = ?','यदि '+K(CRT('y')+' - '+sub)+' = '+K(b)+', तो y = ?'),ans:String(y),w:w.map(String)}; },
    function(){ var k=rint(2,4),n=rint(2,9); var v=k*n; var y=n*n*n; var w=[y+10,y-10>=0?y-10:y+20,y+20]; return {question:tri('If '+K(k+CRT('y'))+' = '+K(v)+', find y.','Agar '+K(k+CRT('y'))+' = '+K(v)+', to y = ?','यदि '+K(k+CRT('y'))+' = '+K(v)+', तो y = ?'),ans:String(y),w:w.map(String)}; },
    function(){ var k=rint(2,5),n=rint(2,8); var y=k*n*n*n; var w=[y+k,y-k>=0?y-k:y+2*k,y+2*k]; return {question:tri('If '+K(CRT(FR('y',k)))+' = '+K(n)+', find y.','Agar '+K(CRT(FR('y',k)))+' = '+K(n)+', to y = ?','यदि '+K(CRT(FR('y',k)))+' = '+K(n)+', तो y = ?'),ans:String(y),w:w.map(String)}; },
    function(){ var n=rint(2,9),add=rint(1,10); var b=n+add; var y=n*n*n; var w=[y+10,y-10>=0?y-10:y+20,y+20]; return {question:tri('If '+K(CRT('y')+' + '+add)+' = '+K(b)+', find y.','Agar '+K(CRT('y')+' + '+add)+' = '+K(b)+', to y = ?','यदि '+K(CRT('y')+' + '+add)+' = '+K(b)+', तो y = ?'),ans:String(y),w:w.map(String)}; }
  ]);
})();
