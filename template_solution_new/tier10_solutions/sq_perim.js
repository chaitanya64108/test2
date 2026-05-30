/* tier10 - Template 20: sq_perim (Perimeter of a Square from Area)
   buildSqPerimSolution(s,area,perim), V1(s,perim,ans), V2(s,perim), V3(a,b,ans), V4(s,rate,cost), V5(s,p2) */
(function(){
  var SB=window.SB; if(!SB) return;
  var K=SB.K,RT=SB.RT,FR=SB.FR,POW=SB.POW,T=SB.T,step=SB.step,S=SB.S;

  window.buildSqPerimSolution=function(s,area,perim){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>For a square, area = side x side. So first find the side from the area, then perimeter = 4 x side.'),
        step('Step 2 - Find the side','<br>side = '+K(RT(area)+' = '+s)+' cm.'),
        step('Step 3 - Find the perimeter','<br>A square has 4 equal sides, so perimeter = '+K('4'+T+s+' = '+perim)+' cm.'),
        step('Step 4 - Final answer','<br>'+perim+' cm.')
      ], shortcut:'side = '+K(RT(area)+' = '+s)+', perimeter = '+K('4'+T+s+' = '+perim)+' cm.', hint:'Area = side squared. Find the side first, then multiply by 4.' },
      { steps:[
        step('Step 1 - Samjho','<br>Square me area = side x side. Toh pehle area se side nikalo, fir perimeter = 4 x side.'),
        step('Step 2 - Side nikalo','<br>side = '+K(RT(area)+' = '+s)+' cm.'),
        step('Step 3 - Perimeter nikalo','<br>Square ki 4 barabar sides hoti hain, toh perimeter = '+K('4'+T+s+' = '+perim)+' cm.'),
        step('Step 4 - Final answer','<br>'+perim+' cm.')
      ], shortcut:'side = '+K(RT(area)+' = '+s)+', perimeter = '+K('4'+T+s+' = '+perim)+' cm.', hint:'Area = side ka square. Pehle side nikalo, fir 4 se multiply karo.' },
      { steps:[
        step('चरण 1 - समझो','<br>वर्ग में क्षेत्रफल = भुजा x भुजा। तो पहले क्षेत्रफल से भुजा निकालो, फिर परिमाप = 4 x भुजा।'),
        step('चरण 2 - भुजा निकालो','<br>भुजा = '+K(RT(area)+' = '+s)+' सेमी।'),
        step('चरण 3 - परिमाप निकालो','<br>वर्ग की 4 बराबर भुजाएँ होती हैं, तो परिमाप = '+K('4'+T+s+' = '+perim)+' सेमी।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+perim+' सेमी।')
      ], shortcut:'भुजा = '+K(RT(area)+' = '+s)+', परिमाप = '+K('4'+T+s+' = '+perim)+' सेमी।', hint:'क्षेत्रफल = भुजा²। पहले भुजा निकालो, फिर 4 से गुणा करो।' }
    );
  };

  window.buildSqPerimV1Solution=function(s,perim,ans){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Perimeter = 4 x side, so side = perimeter / 4. Then area = side x side.'),
        step('Step 2 - Find the side','<br>side = '+K(FR(perim,'4')+' = '+s)+' m.'),
        step('Step 3 - Find the area','<br>area = '+K(POW(s,'2')+' = '+ans)+' sq m.'),
        step('Step 4 - Final answer','<br>'+ans+' sq m.')
      ], shortcut:'side = '+K(FR(perim,'4')+' = '+s)+', area = '+K(POW(s,'2')+' = '+ans)+' sq m.', hint:'Divide the perimeter by 4 to get the side, then square it.' },
      { steps:[
        step('Step 1 - Samjho','<br>Perimeter = 4 x side, toh side = perimeter / 4. Fir area = side x side.'),
        step('Step 2 - Side nikalo','<br>side = '+K(FR(perim,'4')+' = '+s)+' m.'),
        step('Step 3 - Area nikalo','<br>area = '+K(POW(s,'2')+' = '+ans)+' sq m.'),
        step('Step 4 - Final answer','<br>'+ans+' sq m.')
      ], shortcut:'side = '+K(FR(perim,'4')+' = '+s)+', area = '+K(POW(s,'2')+' = '+ans)+' sq m.', hint:'Perimeter ko 4 se divide karke side nikalo, fir use square karo.' },
      { steps:[
        step('चरण 1 - समझो','<br>परिमाप = 4 x भुजा, तो भुजा = परिमाप / 4। फिर क्षेत्रफल = भुजा x भुजा।'),
        step('चरण 2 - भुजा निकालो','<br>भुजा = '+K(FR(perim,'4')+' = '+s)+' मीटर।'),
        step('चरण 3 - क्षेत्रफल निकालो','<br>क्षेत्रफल = '+K(POW(s,'2')+' = '+ans)+' वर्ग मीटर।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+ans+' वर्ग मीटर।')
      ], shortcut:'भुजा = '+K(FR(perim,'4')+' = '+s)+', क्षेत्रफल = '+K(POW(s,'2')+' = '+ans)+' वर्ग मीटर।', hint:'परिमाप को 4 से भाग देकर भुजा निकालो, फिर उसे वर्ग करो।' }
    );
  };

  window.buildSqPerimV2Solution=function(s,perim){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>A square has 4 equal sides, so perimeter = 4 x side.'),
        step('Step 2 - Multiply','<br>'+K('4'+T+s+' = '+perim)+' cm.'),
        step('Step 3 - Final answer','<br>'+perim+' cm.')
      ], shortcut:K('4'+T+s+' = '+perim)+' cm.', hint:'Perimeter of a square = 4 x side.' },
      { steps:[
        step('Step 1 - Samjho','<br>Square ki 4 barabar sides hoti hain, toh perimeter = 4 x side.'),
        step('Step 2 - Multiply karo','<br>'+K('4'+T+s+' = '+perim)+' cm.'),
        step('Step 3 - Final answer','<br>'+perim+' cm.')
      ], shortcut:K('4'+T+s+' = '+perim)+' cm.', hint:'Square ka perimeter = 4 x side.' },
      { steps:[
        step('चरण 1 - समझो','<br>वर्ग की 4 बराबर भुजाएँ होती हैं, तो परिमाप = 4 x भुजा।'),
        step('चरण 2 - गुणा करो','<br>'+K('4'+T+s+' = '+perim)+' सेमी।'),
        step('चरण 3 - अंतिम उत्तर','<br>'+perim+' सेमी।')
      ], shortcut:K('4'+T+s+' = '+perim)+' सेमी।', hint:'वर्ग का परिमाप = 4 x भुजा।' }
    );
  };

  window.buildSqPerimV3Solution=function(a,b,ans){
    var pa=4*a, pb=4*b, big=Math.max(pa,pb), small=Math.min(pa,pb);
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Find each perimeter (4 x side), then subtract the smaller from the larger.'),
        step('Step 2 - Find both perimeters','<br>'+K('4'+T+a+' = '+pa)+' m and '+K('4'+T+b+' = '+pb)+' m.'),
        step('Step 3 - Difference','<br>'+K(big+' - '+small+' = '+ans)+' m.'),
        step('Step 4 - Final answer','<br>'+ans+' m.')
      ], shortcut:'Difference = '+K(big+' - '+small+' = '+ans)+' m.', hint:'Find both perimeters with 4 x side, then subtract.' },
      { steps:[
        step('Step 1 - Samjho','<br>Har perimeter (4 x side) nikalo, fir bade me se chhota ghatao.'),
        step('Step 2 - Dono perimeter nikalo','<br>'+K('4'+T+a+' = '+pa)+' m aur '+K('4'+T+b+' = '+pb)+' m.'),
        step('Step 3 - Antar','<br>'+K(big+' - '+small+' = '+ans)+' m.'),
        step('Step 4 - Final answer','<br>'+ans+' m.')
      ], shortcut:'Antar = '+K(big+' - '+small+' = '+ans)+' m.', hint:'4 x side se dono perimeter nikalo, fir ghatao.' },
      { steps:[
        step('चरण 1 - समझो','<br>हर परिमाप (4 x भुजा) निकालो, फिर बड़े में से छोटा घटाओ।'),
        step('चरण 2 - दोनों परिमाप निकालो','<br>'+K('4'+T+a+' = '+pa)+' मीटर और '+K('4'+T+b+' = '+pb)+' मीटर।'),
        step('चरण 3 - अंतर','<br>'+K(big+' - '+small+' = '+ans)+' मीटर।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+ans+' मीटर।')
      ], shortcut:'अंतर = '+K(big+' - '+small+' = '+ans)+' मीटर।', hint:'4 x भुजा से दोनों परिमाप निकालो, फिर घटाओ।' }
    );
  };

  window.buildSqPerimV4Solution=function(s,rate,cost){
    var per=4*s;
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Fencing goes around the square, so the length needed = perimeter = 4 x side. Cost = length x rate.'),
        step('Step 2 - Find the perimeter','<br>'+K('4'+T+s+' = '+per)+' m.'),
        step('Step 3 - Find the cost','<br>'+K(per+T+rate+' = '+cost)+'. So the total cost is Rs '+cost+'.'),
        step('Step 4 - Final answer','<br>Rs '+cost+'.')
      ], shortcut:'Cost = '+K('4'+T+s+T+rate+' = '+cost)+' rupees.', hint:'Fencing length = perimeter (4 x side). Multiply by the rate per metre.' },
      { steps:[
        step('Step 1 - Samjho','<br>Fencing square ke chaaro taraf lagti hai, toh length = perimeter = 4 x side. Cost = length x rate.'),
        step('Step 2 - Perimeter nikalo','<br>'+K('4'+T+s+' = '+per)+' m.'),
        step('Step 3 - Cost nikalo','<br>'+K(per+T+rate+' = '+cost)+'. Toh total cost Rs '+cost+' hai.'),
        step('Step 4 - Final answer','<br>Rs '+cost+'.')
      ], shortcut:'Cost = '+K('4'+T+s+T+rate+' = '+cost)+' rupees.', hint:'Fencing length = perimeter (4 x side). Rate per metre se multiply karo.' },
      { steps:[
        step('चरण 1 - समझो','<br>बाड़ वर्ग के चारों ओर लगती है, तो लंबाई = परिमाप = 4 x भुजा। लागत = लंबाई x दर।'),
        step('चरण 2 - परिमाप निकालो','<br>'+K('4'+T+s+' = '+per)+' मीटर।'),
        step('चरण 3 - लागत निकालो','<br>'+K(per+T+rate+' = '+cost)+'। तो कुल लागत '+cost+' रुपये है।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+cost+' रुपये।')
      ], shortcut:'लागत = '+K('4'+T+s+T+rate+' = '+cost)+' रुपये।', hint:'बाड़ की लंबाई = परिमाप (4 x भुजा)। प्रति मीटर दर से गुणा करो।' }
    );
  };

  window.buildSqPerimV5Solution=function(s,p2){
    var ns=2*s;
    return S(
      { steps:[
        step('Step 1 - Understand','<br>The side is doubled, so new side = 2 x old side. Then new perimeter = 4 x new side.'),
        step('Step 2 - New side','<br>'+K('2'+T+s+' = '+ns)+' m.'),
        step('Step 3 - New perimeter','<br>'+K('4'+T+ns+' = '+p2)+' m.'),
        step('Step 4 - Final answer','<br>'+p2+' m.')
      ], shortcut:'New perimeter = '+K('4'+T+ns+' = '+p2)+' m (same as 8 x '+s+').', hint:'Double the side first, then multiply by 4.' },
      { steps:[
        step('Step 1 - Samjho','<br>Side double ho gayi, toh nayi side = 2 x purani side. Fir naya perimeter = 4 x nayi side.'),
        step('Step 2 - Nayi side','<br>'+K('2'+T+s+' = '+ns)+' m.'),
        step('Step 3 - Naya perimeter','<br>'+K('4'+T+ns+' = '+p2)+' m.'),
        step('Step 4 - Final answer','<br>'+p2+' m.')
      ], shortcut:'Naya perimeter = '+K('4'+T+ns+' = '+p2)+' m (8 x '+s+' ke barabar).', hint:'Pehle side double karo, fir 4 se multiply karo.' },
      { steps:[
        step('चरण 1 - समझो','<br>भुजा दोगुनी हो गई, तो नई भुजा = 2 x पुरानी भुजा। फिर नया परिमाप = 4 x नई भुजा।'),
        step('चरण 2 - नई भुजा','<br>'+K('2'+T+s+' = '+ns)+' मीटर।'),
        step('चरण 3 - नया परिमाप','<br>'+K('4'+T+ns+' = '+p2)+' मीटर।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+p2+' मीटर।')
      ], shortcut:'नया परिमाप = '+K('4'+T+ns+' = '+p2)+' मीटर (8 x '+s+' के बराबर)।', hint:'पहले भुजा दोगुनी करो, फिर 4 से गुणा करो।' }
    );
  };
})();
