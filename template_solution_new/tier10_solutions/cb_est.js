/* tier10 - Template 32: cb_est (Cube Estimation)
   buildCbEstSolution(num,lo) -> cube root between lo and lo+1, nearest lo
   buildCbEstSumSolution(n1,n2,a,b) -> estimate sum of two cube roots */
(function(){
  var SB=window.SB; if(!SB) return;
  var K=SB.K,CRT=SB.CRT,POW=SB.POW,B=SB.B,step=SB.step,S=SB.S;

  window.buildCbEstSolution=function(num,lo){
    var cubeLo=lo*lo*lo, cubeHi=(lo+1)*(lo+1)*(lo+1);
    return S(
      { steps:[
        step('Step 1 - Understand','<br>To estimate a cube root, find the two perfect cubes that the number sits between.'),
        step('Step 2 - Find the bracketing cubes','<br>'+K(POW(lo,'3')+' = '+cubeLo)+' and '+K(POW(lo+1,'3')+' = '+cubeHi)+'.'),
        step('Step 3 - Locate the number','<br>Since '+K(cubeLo+' '+B+'le '+num+' '+B+'lt '+cubeHi)+', the cube root lies between '+K(lo)+' and '+K(lo+1)+'.'),
        step('Step 4 - Nearest whole number','<br>'+K(num)+' is close to '+K(cubeLo)+', so '+K(CRT(num))+' is nearest to '+K(lo)+'.')
      ], shortcut:K(POW(lo,'3')+' '+B+'le '+num+' '+B+'lt '+POW(lo+1,'3'))+', so the cube root is between '+K(lo)+' and '+K(lo+1)+'.', hint:'Find the perfect cubes just below and just above the number.' },
      { steps:[
        step('Step 1 - Samjho','<br>Cube root estimate karne ke liye, wo do perfect cubes dhoondo jinke beech number aata hai.'),
        step('Step 2 - Bracketing cubes dhoondo','<br>'+K(POW(lo,'3')+' = '+cubeLo)+' aur '+K(POW(lo+1,'3')+' = '+cubeHi)+'.'),
        step('Step 3 - Number ko locate karo','<br>Kyunki '+K(cubeLo+' '+B+'le '+num+' '+B+'lt '+cubeHi)+', cube root '+K(lo)+' aur '+K(lo+1)+' ke beech hai.'),
        step('Step 4 - Nazdeeki whole number','<br>'+K(num)+' '+K(cubeLo)+' ke kareeb hai, isliye '+K(CRT(num))+' '+K(lo)+' ke sabse nazdeek hai.')
      ], shortcut:K(POW(lo,'3')+' '+B+'le '+num+' '+B+'lt '+POW(lo+1,'3'))+', toh cube root '+K(lo)+' aur '+K(lo+1)+' ke beech hai.', hint:'Number ke just neeche aur just upar wale perfect cubes dhoondo.' },
      { steps:[
        step('चरण 1 - समझो','<br>घनमूल का आकलन करने के लिए, वे दो पूर्ण घन ढूँढो जिनके बीच संख्या आती है।'),
        step('चरण 2 - सीमा वाले घन ढूँढो','<br>'+K(POW(lo,'3')+' = '+cubeLo)+' और '+K(POW(lo+1,'3')+' = '+cubeHi)+'।'),
        step('चरण 3 - संख्या को ढूँढो','<br>चूँकि '+K(cubeLo+' '+B+'le '+num+' '+B+'lt '+cubeHi)+', घनमूल '+K(lo)+' और '+K(lo+1)+' के बीच है।'),
        step('चरण 4 - निकटतम पूर्ण संख्या','<br>'+K(num)+' '+K(cubeLo)+' के करीब है, इसलिए '+K(CRT(num))+' '+K(lo)+' के सबसे निकट है।')
      ], shortcut:K(POW(lo,'3')+' '+B+'le '+num+' '+B+'lt '+POW(lo+1,'3'))+', तो घनमूल '+K(lo)+' और '+K(lo+1)+' के बीच है।', hint:'संख्या के ठीक नीचे और ठीक ऊपर वाले पूर्ण घन ढूँढो।' }
    );
  };

  window.buildCbEstSumSolution=function(n1,n2,a,b){
    var ca=a*a*a, cb=b*b*b, ans=a+b;
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Estimate each cube root to the nearest whole number, then add.'),
        step('Step 2 - First cube root','<br>'+K(POW(a,'3')+' = '+ca)+', and '+K(n1)+' is just above, so '+K(CRT(n1))+' '+B+'approx '+a+'.'),
        step('Step 3 - Second cube root','<br>'+K(POW(b,'3')+' = '+cb)+', and '+K(n2)+' is just above, so '+K(CRT(n2))+' '+B+'approx '+b+'.'),
        step('Step 4 - Add','<br>'+K(a+' + '+b+' = '+ans)+'.')
      ], shortcut:K(CRT(n1)+' + '+CRT(n2)+' '+B+'approx '+a+' + '+b+' = '+ans)+'.', hint:'Round each cube root to the nearest whole number, then add.' },
      { steps:[
        step('Step 1 - Samjho','<br>Har cube root ko nazdeeki whole number tak estimate karo, fir jodo.'),
        step('Step 2 - Pehla cube root','<br>'+K(POW(a,'3')+' = '+ca)+', aur '+K(n1)+' just upar hai, toh '+K(CRT(n1))+' '+B+'approx '+a+'.'),
        step('Step 3 - Doosra cube root','<br>'+K(POW(b,'3')+' = '+cb)+', aur '+K(n2)+' just upar hai, toh '+K(CRT(n2))+' '+B+'approx '+b+'.'),
        step('Step 4 - Jodo','<br>'+K(a+' + '+b+' = '+ans)+'.')
      ], shortcut:K(CRT(n1)+' + '+CRT(n2)+' '+B+'approx '+a+' + '+b+' = '+ans)+'.', hint:'Har cube root ko nazdeeki whole number tak round karo, fir jodo.' },
      { steps:[
        step('चरण 1 - समझो','<br>हर घनमूल को निकटतम पूर्ण संख्या तक आकलित करो, फिर जोड़ो।'),
        step('चरण 2 - पहला घनमूल','<br>'+K(POW(a,'3')+' = '+ca)+', और '+K(n1)+' ठीक ऊपर है, तो '+K(CRT(n1))+' '+B+'approx '+a+'।'),
        step('चरण 3 - दूसरा घनमूल','<br>'+K(POW(b,'3')+' = '+cb)+', और '+K(n2)+' ठीक ऊपर है, तो '+K(CRT(n2))+' '+B+'approx '+b+'।'),
        step('चरण 4 - जोड़ो','<br>'+K(a+' + '+b+' = '+ans)+'।')
      ], shortcut:K(CRT(n1)+' + '+CRT(n2)+' '+B+'approx '+a+' + '+b+' = '+ans)+'।', hint:'हर घनमूल को निकटतम पूर्ण संख्या तक round करो, फिर जोड़ो।' }
    );
  };
})();
