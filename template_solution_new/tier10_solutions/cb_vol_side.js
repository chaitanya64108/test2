/* tier10 - Template 37: cb_vol_side (Volume / Side word problems)
   buildCbVolSideSolution(vol,s)            -> volume -> side (cube root)
   buildCbSideVolSolution(s,vol)            -> side -> volume
   buildCbVolDiffSolution(a,b,ans)          -> difference of two side lengths
   buildCbVolCostSolution(s,vol,rate,cost)  -> volume then cost
   buildCbVolDoubleSolution(s,vol,newVol)   -> doubling the side */
(function(){
  var SB=window.SB; if(!SB) return;
  var K=SB.K,CRT=SB.CRT,POW=SB.POW,T=SB.T,step=SB.step,S=SB.S;

  window.buildCbVolSideSolution=function(vol,s){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>For a cube, Volume = side raised to the power 3. To go from volume back to the side, take the cube root.'),
        step('Step 2 - Formula','<br>'+K('side = '+CRT('Volume'))+'.'),
        step('Step 3 - Calculate','<br>'+K('side = '+CRT(vol)+' = '+s)+', because '+K(POW(s,'3')+' = '+vol)+'.'),
        step('Step 4 - Answer','<br>The side is '+K(s)+' cm.')
      ], shortcut:K('side = '+CRT(vol)+' = '+s)+' cm.', hint:'Side of a cube = cube root of its volume.' },
      { steps:[
        step('Step 1 - Samjho','<br>Cube ke liye, Volume = side ka cube. Volume se wapas side paane ke liye cube root lo.'),
        step('Step 2 - Formula','<br>'+K('side = '+CRT('Volume'))+'.'),
        step('Step 3 - Calculate karo','<br>'+K('side = '+CRT(vol)+' = '+s)+', kyunki '+K(POW(s,'3')+' = '+vol)+'.'),
        step('Step 4 - Answer','<br>Side '+K(s)+' cm hai.')
      ], shortcut:K('side = '+CRT(vol)+' = '+s)+' cm.', hint:'Cube ki side = uske volume ka cube root.' },
      { steps:[
        step('चरण 1 - समझो','<br>घन के लिए, आयतन = भुजा का घन। आयतन से वापस भुजा पाने के लिए घनमूल लो।'),
        step('चरण 2 - सूत्र','<br>'+K('side = '+CRT('Volume'))+'।'),
        step('चरण 3 - गणना करो','<br>'+K('side = '+CRT(vol)+' = '+s)+', क्योंकि '+K(POW(s,'3')+' = '+vol)+'।'),
        step('चरण 4 - उत्तर','<br>भुजा '+K(s)+' cm है।')
      ], shortcut:K('side = '+CRT(vol)+' = '+s)+' cm।', hint:'घन की भुजा = उसके आयतन का घनमूल।' }
    );
  };

  window.buildCbSideVolSolution=function(s,vol){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Volume of a cube = side raised to the power 3.'),
        step('Step 2 - Substitute','<br>'+K('Volume = '+POW(s,'3'))+'.'),
        step('Step 3 - Calculate','<br>'+K(s+T+s+T+s+' = '+vol)+'.'),
        step('Step 4 - Answer','<br>The volume is '+K(vol)+' cm cubed.')
      ], shortcut:K('Volume = '+POW(s,'3')+' = '+vol)+' cm cubed.', hint:'Cube the side to get the volume.' },
      { steps:[
        step('Step 1 - Samjho','<br>Cube ka Volume = side ka cube.'),
        step('Step 2 - Substitute karo','<br>'+K('Volume = '+POW(s,'3'))+'.'),
        step('Step 3 - Calculate karo','<br>'+K(s+T+s+T+s+' = '+vol)+'.'),
        step('Step 4 - Answer','<br>Volume '+K(vol)+' cm cubed hai.')
      ], shortcut:K('Volume = '+POW(s,'3')+' = '+vol)+' cm cubed.', hint:'Volume paane ke liye side ka cube karo.' },
      { steps:[
        step('चरण 1 - समझो','<br>घन का आयतन = भुजा का घन।'),
        step('चरण 2 - रखो','<br>'+K('Volume = '+POW(s,'3'))+'।'),
        step('चरण 3 - गणना करो','<br>'+K(s+T+s+T+s+' = '+vol)+'।'),
        step('चरण 4 - उत्तर','<br>आयतन '+K(vol)+' cm³ है।')
      ], shortcut:K('Volume = '+POW(s,'3')+' = '+vol)+' cm³।', hint:'आयतन पाने के लिए भुजा का घन करो।' }
    );
  };

  window.buildCbVolDiffSolution=function(a,b,ans){
    var hi=Math.max(a,b), lo=Math.min(a,b);
    return S(
      { steps:[
        step('Step 1 - Understand','<br>The question only asks for the difference between the two side lengths.'),
        step('Step 2 - Subtract','<br>'+K(hi+' - '+lo+' = '+ans)+'.'),
        step('Step 3 - Answer','<br>The difference is '+K(ans)+' cm.')
      ], shortcut:K(hi+' - '+lo+' = '+ans)+' cm.', hint:'Subtract the smaller side from the larger one.' },
      { steps:[
        step('Step 1 - Samjho','<br>Sawaal sirf do sides ke beech ka antar maang raha hai.'),
        step('Step 2 - Ghatao','<br>'+K(hi+' - '+lo+' = '+ans)+'.'),
        step('Step 3 - Answer','<br>Antar '+K(ans)+' cm hai.')
      ], shortcut:K(hi+' - '+lo+' = '+ans)+' cm.', hint:'Badi side mein se chhoti side ghatao.' },
      { steps:[
        step('चरण 1 - समझो','<br>प्रश्न सिर्फ़ दो भुजाओं के बीच का अंतर पूछ रहा है।'),
        step('चरण 2 - घटाओ','<br>'+K(hi+' - '+lo+' = '+ans)+'।'),
        step('चरण 3 - उत्तर','<br>अंतर '+K(ans)+' cm है।')
      ], shortcut:K(hi+' - '+lo+' = '+ans)+' cm।', hint:'बड़ी भुजा में से छोटी भुजा घटाओ।' }
    );
  };

  window.buildCbVolCostSolution=function(s,vol,rate,cost){
    return S(
      { steps:[
        step('Step 1 - Find the volume','<br>'+K('Volume = '+POW(s,'3')+' = '+vol)+' cubic metres.'),
        step('Step 2 - Set up the cost','<br>Cost = Volume '+SB.T.replace(/\\/g,SB.B)+' rate, so Cost = '+K(vol+' '+SB.T.replace(/\\/g,SB.B)+' '+rate)+'.'),
        step('Step 3 - Calculate','<br>'+K(vol+' '+SB.T.replace(/\\/g,SB.B)+' '+rate+' = '+cost)+'.'),
        step('Step 4 - Answer','<br>Total cost = ₹'+cost+'.')
      ], shortcut:'Cost = '+K(vol+' '+SB.T.replace(/\\/g,SB.B)+' '+rate+' = '+cost)+', i.e. ₹'+cost+'.', hint:'First cube the side for the volume, then multiply by the rate.' },
      { steps:[
        step('Step 1 - Volume nikalo','<br>'+K('Volume = '+POW(s,'3')+' = '+vol)+' cubic metres.'),
        step('Step 2 - Cost set up','<br>Cost = Volume '+SB.T.replace(/\\/g,SB.B)+' rate, toh Cost = '+K(vol+' '+SB.T.replace(/\\/g,SB.B)+' '+rate)+'.'),
        step('Step 3 - Calculate','<br>'+K(vol+' '+SB.T.replace(/\\/g,SB.B)+' '+rate+' = '+cost)+'.'),
        step('Step 4 - Answer','<br>Total cost = ₹'+cost+'.')
      ], shortcut:'Cost = '+K(vol+' '+SB.T.replace(/\\/g,SB.B)+' '+rate+' = '+cost)+', yaani ₹'+cost+'.', hint:'Pehle side ka cube karke volume nikalo, fir rate se multiply karo.' },
      { steps:[
        step('चरण 1 - आयतन निकालो','<br>'+K('Volume = '+POW(s,'3')+' = '+vol)+' घन मीटर।'),
        step('चरण 2 - लागत सेट करो','<br>लागत = आयतन '+SB.T.replace(/\\/g,SB.B)+' दर, तो लागत = '+K(vol+' '+SB.T.replace(/\\/g,SB.B)+' '+rate)+'।'),
        step('चरण 3 - गणना करो','<br>'+K(vol+' '+SB.T.replace(/\\/g,SB.B)+' '+rate+' = '+cost)+'।'),
        step('चरण 4 - उत्तर','<br>कुल लागत = ₹'+cost+'।')
      ], shortcut:'लागत = '+K(vol+' '+SB.T.replace(/\\/g,SB.B)+' '+rate+' = '+cost)+', यानी ₹'+cost+'।', hint:'पहले भुजा का घन करके आयतन निकालो, फिर दर से गुणा करो।' }
    );
  };

  window.buildCbVolDoubleSolution=function(s,vol,newVol){
    return S(
      { steps:[
        step('Step 1 - New side','<br>The side is doubled: '+K('2 '+SB.T.replace(/\\/g,SB.B)+' '+s+' = '+(2*s))+' m.'),
        step('Step 2 - New volume formula','<br>'+K('('+(2*s)+')^{3} = '+POW(2,'3')+T+POW(s,'3')+' = 8 '+SB.T.replace(/\\/g,SB.B)+' '+vol)+'.'),
        step('Step 3 - Calculate','<br>'+K('8 '+SB.T.replace(/\\/g,SB.B)+' '+vol+' = '+newVol)+'.'),
        step('Step 4 - Note','<br>Doubling the side makes the volume 8 times bigger, so the new volume is '+K(newVol)+' cubic metres.')
      ], shortcut:'Double side -> volume '+K('8'+T)+'bigger: '+K(newVol)+' cubic metres.', hint:'Doubling the side multiplies the volume by 2 cubed = 8.' },
      { steps:[
        step('Step 1 - Nayi side','<br>Side double ho gayi: '+K('2 '+SB.T.replace(/\\/g,SB.B)+' '+s+' = '+(2*s))+' m.'),
        step('Step 2 - Naya volume formula','<br>'+K('('+(2*s)+')^{3} = '+POW(2,'3')+T+POW(s,'3')+' = 8 '+SB.T.replace(/\\/g,SB.B)+' '+vol)+'.'),
        step('Step 3 - Calculate','<br>'+K('8 '+SB.T.replace(/\\/g,SB.B)+' '+vol+' = '+newVol)+'.'),
        step('Step 4 - Note','<br>Side double karne se volume 8 guna ho jaata hai, toh naya volume '+K(newVol)+' cubic metres hai.')
      ], shortcut:'Double side -> volume '+K('8'+T)+'guna: '+K(newVol)+' cubic metres.', hint:'Side double karne se volume 2 ka cube = 8 guna ho jaata hai.' },
      { steps:[
        step('चरण 1 - नई भुजा','<br>भुजा दोगुनी हुई: '+K('2 '+SB.T.replace(/\\/g,SB.B)+' '+s+' = '+(2*s))+' m।'),
        step('चरण 2 - नया आयतन सूत्र','<br>'+K('('+(2*s)+')^{3} = '+POW(2,'3')+T+POW(s,'3')+' = 8 '+SB.T.replace(/\\/g,SB.B)+' '+vol)+'।'),
        step('चरण 3 - गणना करो','<br>'+K('8 '+SB.T.replace(/\\/g,SB.B)+' '+vol+' = '+newVol)+'।'),
        step('चरण 4 - ध्यान दो','<br>भुजा दोगुनी करने से आयतन 8 गुना हो जाता है, तो नया आयतन '+K(newVol)+' घन मीटर है।')
      ], shortcut:'दोगुनी भुजा -> आयतन '+K('8'+T)+'गुना: '+K(newVol)+' घन मीटर।', hint:'भुजा दोगुनी करने से आयतन 2 का घन = 8 गुना हो जाता है।' }
    );
  };
})();
