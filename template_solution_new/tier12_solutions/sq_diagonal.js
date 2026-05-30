/* tier12 - Template 47: sq_diagonal (Diagonal of Square / Rectangle / Rhombus)
   buildDiagSideToDiagSolution(s) buildDiagAreaToDiagSolution(s,area) buildDiagDiagToSideSolution(s,d)
   buildDiagRectSolution(l,wd,dg) buildDiagRhombusSolution(d1,d2,c) buildDiagRatioSolution()
   buildDiagPerimSolution(s,P) buildDiagToAreaSolution(s,area) */
(function(){
  var SB=window.SB; if(!SB) return;
  var K=SB.K,RT=SB.RT,FR=SB.FR,POW=SB.POW,T=SB.T,step=SB.step,S=SB.S;
  var R2='\\sqrt{2}';

  window.buildDiagSideToDiagSolution=function(s){
    var two=2*s*s;
    return S(
      { steps:[
        step('Step 1 - Split the square with its diagonal','<br>The diagonal makes a right triangle with the two equal sides, so '+K(POW('d',2)+' = '+POW(s,2)+' + '+POW(s,2)+' = '+two)+'.'),
        step('Step 2 - Take the square root','<br>'+K('d = '+RT(two)+' = '+s+R2)+'.'),
        step('Step 3 - Answer','<br>So the diagonal is '+K(s+R2)+' cm.')
      ], shortcut:'Diagonal of a square '+K('= side '+T+' '+R2+' = '+s+R2)+' cm.', hint:'For a square, diagonal = side multiplied by the square root of 2.' },
      { steps:[
        step('Step 1 - Diagonal se square ko todo','<br>Diagonal do barabar sides ke saath right triangle banata hai, toh '+K(POW('d',2)+' = '+POW(s,2)+' + '+POW(s,2)+' = '+two)+'.'),
        step('Step 2 - Square root lo','<br>'+K('d = '+RT(two)+' = '+s+R2)+'.'),
        step('Step 3 - Answer','<br>Toh diagonal '+K(s+R2)+' cm hai.')
      ], shortcut:'Square ka diagonal '+K('= side '+T+' '+R2+' = '+s+R2)+' cm.', hint:'Square ke liye, diagonal = side guna root 2.' },
      { steps:[
        step('चरण 1 - विकर्ण से वर्ग को बाँटो','<br>विकर्ण दो बराबर भुजाओं के साथ समकोण त्रिभुज बनाता है, तो '+K(POW('d',2)+' = '+POW(s,2)+' + '+POW(s,2)+' = '+two)+'।'),
        step('चरण 2 - वर्गमूल लो','<br>'+K('d = '+RT(two)+' = '+s+R2)+'।'),
        step('चरण 3 - उत्तर','<br>तो विकर्ण '+K(s+R2)+' cm है।')
      ], shortcut:'वर्ग का विकर्ण '+K('= भुजा '+T+' '+R2+' = '+s+R2)+' cm।', hint:'वर्ग के लिए, विकर्ण = भुजा गुना रूट 2।' }
    );
  };

  window.buildDiagAreaToDiagSolution=function(s,area){
    return S(
      { steps:[
        step('Step 1 - Find the side from the area','<br>Area '+K('= '+POW('side',2))+', so '+K('side = '+RT(area)+' = '+s)+' cm.'),
        step('Step 2 - Use the diagonal rule','<br>Diagonal '+K('= side '+T+' '+R2+' = '+s+R2)+'.'),
        step('Step 3 - Answer','<br>So the diagonal is '+K(s+R2)+' cm.')
      ], shortcut:K('Diagonal = '+RT(area)+' '+T+' '+R2+' = '+s+R2)+' cm.', hint:'First get the side from the area, then multiply by the square root of 2.' },
      { steps:[
        step('Step 1 - Area se side nikalo','<br>Area '+K('= '+POW('side',2))+', toh '+K('side = '+RT(area)+' = '+s)+' cm.'),
        step('Step 2 - Diagonal rule lagao','<br>Diagonal '+K('= side '+T+' '+R2+' = '+s+R2)+'.'),
        step('Step 3 - Answer','<br>Toh diagonal '+K(s+R2)+' cm hai.')
      ], shortcut:K('Diagonal = '+RT(area)+' '+T+' '+R2+' = '+s+R2)+' cm.', hint:'Pehle area se side nikalo, fir root 2 se guna karo.' },
      { steps:[
        step('चरण 1 - क्षेत्रफल से भुजा निकालो','<br>क्षेत्रफल '+K('= '+POW('भुजा',2))+', तो '+K('भुजा = '+RT(area)+' = '+s)+' cm.'),
        step('चरण 2 - विकर्ण नियम लगाओ','<br>विकर्ण '+K('= भुजा '+T+' '+R2+' = '+s+R2)+'।'),
        step('चरण 3 - उत्तर','<br>तो विकर्ण '+K(s+R2)+' cm है।')
      ], shortcut:K('विकर्ण = '+RT(area)+' '+T+' '+R2+' = '+s+R2)+' cm।', hint:'पहले क्षेत्रफल से भुजा निकालो, फिर रूट 2 से गुना करो।' }
    );
  };

  window.buildDiagDiagToSideSolution=function(s,d){
    return S(
      { steps:[
        step('Step 1 - Rearrange the diagonal rule','<br>Since diagonal '+K('= side '+T+' '+R2)+', we get '+K('side = '+FR('diagonal',R2))+'.'),
        step('Step 2 - Put the number in','<br>'+K('side = '+FR(d,R2)+' = '+FR(d,2)+T+R2+' = '+s+R2)+' cm.'),
        step('Step 3 - Answer','<br>So the side is '+K(s+R2)+' cm.')
      ], shortcut:'Side '+K('= '+FR('diagonal',R2)+' = '+s+R2)+' cm.', hint:'Divide the diagonal by the square root of 2 to get the side.' },
      { steps:[
        step('Step 1 - Diagonal rule rearrange karo','<br>Kyunki diagonal '+K('= side '+T+' '+R2)+', toh '+K('side = '+FR('diagonal',R2))+'.'),
        step('Step 2 - Number daalo','<br>'+K('side = '+FR(d,R2)+' = '+FR(d,2)+T+R2+' = '+s+R2)+' cm.'),
        step('Step 3 - Answer','<br>Toh side '+K(s+R2)+' cm hai.')
      ], shortcut:'Side '+K('= '+FR('diagonal',R2)+' = '+s+R2)+' cm.', hint:'Side ke liye diagonal ko root 2 se divide karo.' },
      { steps:[
        step('चरण 1 - विकर्ण नियम रीअरेंज करो','<br>चूँकि विकर्ण '+K('= भुजा '+T+' '+R2)+', तो '+K('भुजा = '+FR('विकर्ण',R2))+'।'),
        step('चरण 2 - संख्या रखो','<br>'+K('भुजा = '+FR(d,R2)+' = '+FR(d,2)+T+R2+' = '+s+R2)+' cm।'),
        step('चरण 3 - उत्तर','<br>तो भुजा '+K(s+R2)+' cm है।')
      ], shortcut:'भुजा '+K('= '+FR('विकर्ण',R2)+' = '+s+R2)+' cm।', hint:'भुजा के लिए विकर्ण को रूट 2 से भाग दो।' }
    );
  };

  window.buildDiagRectSolution=function(l,wd,dg){
    var ll=l*l,ww=wd*wd,dd=ll+ww;
    return S(
      { steps:[
        step('Step 1 - Use Pythagoras','<br>The diagonal is the hypotenuse, so '+K(POW('d',2)+' = '+POW(l,2)+' + '+POW(wd,2)+' = '+ll+' + '+ww+' = '+dd)+'.'),
        step('Step 2 - Take the square root','<br>'+K('d = '+RT(dd)+' = '+dg)+' cm.'),
        step('Step 3 - Answer','<br>So the diagonal is '+K(dg)+' cm.')
      ], shortcut:K(RT(POW(l,2)+' + '+POW(wd,2))+' = '+dg)+' cm.', hint:'The diagonal of a rectangle is the hypotenuse of a right triangle with the length and width as legs.' },
      { steps:[
        step('Step 1 - Pythagoras lagao','<br>Diagonal hypotenuse hai, toh '+K(POW('d',2)+' = '+POW(l,2)+' + '+POW(wd,2)+' = '+ll+' + '+ww+' = '+dd)+'.'),
        step('Step 2 - Square root lo','<br>'+K('d = '+RT(dd)+' = '+dg)+' cm.'),
        step('Step 3 - Answer','<br>Toh diagonal '+K(dg)+' cm hai.')
      ], shortcut:K(RT(POW(l,2)+' + '+POW(wd,2))+' = '+dg)+' cm.', hint:'Rectangle ka diagonal ek right triangle ka hypotenuse hai jiske legs length aur width hain.' },
      { steps:[
        step('चरण 1 - पाइथागोरस लगाओ','<br>विकर्ण कर्ण है, तो '+K(POW('d',2)+' = '+POW(l,2)+' + '+POW(wd,2)+' = '+ll+' + '+ww+' = '+dd)+'।'),
        step('चरण 2 - वर्गमूल लो','<br>'+K('d = '+RT(dd)+' = '+dg)+' cm।'),
        step('चरण 3 - उत्तर','<br>तो विकर्ण '+K(dg)+' cm है।')
      ], shortcut:K(RT(POW(l,2)+' + '+POW(wd,2))+' = '+dg)+' cm।', hint:'आयत का विकर्ण एक समकोण त्रिभुज का कर्ण है जिसके पाद लंबाई और चौड़ाई हैं।' }
    );
  };

  window.buildDiagRhombusSolution=function(d1,d2,c){
    var a=d1/2,b=d2/2,aa=a*a,bb=b*b,cc=aa+bb;
    return S(
      { steps:[
        step('Step 1 - Use the half-diagonals','<br>A rhombus diagonals cross at right angles and cut each other in half, giving a right triangle with legs '+K(a)+' and '+K(b)+'.'),
        step('Step 2 - Apply Pythagoras','<br>'+K(POW('side',2)+' = '+POW(a,2)+' + '+POW(b,2)+' = '+aa+' + '+bb+' = '+cc)+'.'),
        step('Step 3 - Take the square root','<br>'+K('side = '+RT(cc)+' = '+c)+' cm.')
      ], shortcut:K(RT(POW(a,2)+' + '+POW(b,2))+' = '+c)+' cm.', hint:'Half of each diagonal forms the two legs of a right triangle; the side is the hypotenuse.' },
      { steps:[
        step('Step 1 - Aadhe diagonals use karo','<br>Rhombus ke diagonals right angle par cross karte hain aur ek-doosre ko aadha kaatte hain, isse legs '+K(a)+' aur '+K(b)+' ka right triangle banta hai.'),
        step('Step 2 - Pythagoras lagao','<br>'+K(POW('side',2)+' = '+POW(a,2)+' + '+POW(b,2)+' = '+aa+' + '+bb+' = '+cc)+'.'),
        step('Step 3 - Square root lo','<br>'+K('side = '+RT(cc)+' = '+c)+' cm.')
      ], shortcut:K(RT(POW(a,2)+' + '+POW(b,2))+' = '+c)+' cm.', hint:'Har diagonal ka aadha right triangle ke do legs banata hai; side hypotenuse hai.' },
      { steps:[
        step('चरण 1 - आधे विकर्णों का उपयोग करो','<br>समचतुर्भुज के विकर्ण समकोण पर एक-दूसरे को आधा काटते हैं, जिससे पाद '+K(a)+' और '+K(b)+' का समकोण त्रिभुज बनता है।'),
        step('चरण 2 - पाइथागोरस लगाओ','<br>'+K(POW('side',2)+' = '+POW(a,2)+' + '+POW(b,2)+' = '+aa+' + '+bb+' = '+cc)+'।'),
        step('चरण 3 - वर्गमूल लो','<br>'+K('side = '+RT(cc)+' = '+c)+' cm।')
      ], shortcut:K(RT(POW(a,2)+' + '+POW(b,2))+' = '+c)+' cm।', hint:'प्रत्येक विकर्ण का आधा समकोण त्रिभुज के दो पाद बनाता है; भुजा कर्ण है।' }
    );
  };

  window.buildDiagRatioSolution=function(){
    return S(
      { steps:[
        step('Step 1 - Recall the rule','<br>For any square, diagonal '+K('= side '+T+' '+R2)+'.'),
        step('Step 2 - Form the ratio','<br>'+K(FR('diagonal','side')+' = '+FR('side'+T+R2,'side')+' = '+R2)+'.'),
        step('Step 3 - Answer','<br>So the ratio of diagonal to side is '+K(R2)+', the same for every square.')
      ], shortcut:'Diagonal : side '+K('= '+R2+' : 1')+'.', hint:'The side cancels out, leaving the square root of 2.' },
      { steps:[
        step('Step 1 - Rule yaad karo','<br>Kisi bhi square ke liye, diagonal '+K('= side '+T+' '+R2)+'.'),
        step('Step 2 - Ratio banao','<br>'+K(FR('diagonal','side')+' = '+FR('side'+T+R2,'side')+' = '+R2)+'.'),
        step('Step 3 - Answer','<br>Toh diagonal aur side ka ratio '+K(R2)+' hai, har square ke liye same.')
      ], shortcut:'Diagonal : side '+K('= '+R2+' : 1')+'.', hint:'Side cancel ho jaata hai, root 2 bachta hai.' },
      { steps:[
        step('चरण 1 - नियम याद करो','<br>किसी भी वर्ग के लिए, विकर्ण '+K('= भुजा '+T+' '+R2)+'।'),
        step('चरण 2 - अनुपात बनाओ','<br>'+K(FR('विकर्ण','भुजा')+' = '+R2)+'।'),
        step('चरण 3 - उत्तर','<br>तो विकर्ण और भुजा का अनुपात '+K(R2)+' है, हर वर्ग के लिए समान।')
      ], shortcut:'विकर्ण : भुजा '+K('= '+R2+' : 1')+'।', hint:'भुजा कट जाती है, रूट 2 बचता है।' }
    );
  };

  window.buildDiagPerimSolution=function(s,P){
    return S(
      { steps:[
        step('Step 1 - Find the side from the perimeter','<br>A square has 4 equal sides, so '+K('side = '+FR(P,4)+' = '+s)+' cm.'),
        step('Step 2 - Use the diagonal rule','<br>Diagonal '+K('= side '+T+' '+R2+' = '+s+R2)+'.'),
        step('Step 3 - Answer','<br>So the diagonal is '+K(s+R2)+' cm.')
      ], shortcut:K('Diagonal = '+FR(P,4)+' '+T+' '+R2+' = '+s+R2)+' cm.', hint:'Divide the perimeter by 4 to get the side, then multiply by the square root of 2.' },
      { steps:[
        step('Step 1 - Perimeter se side nikalo','<br>Square ki 4 barabar sides hoti hain, toh '+K('side = '+FR(P,4)+' = '+s)+' cm.'),
        step('Step 2 - Diagonal rule lagao','<br>Diagonal '+K('= side '+T+' '+R2+' = '+s+R2)+'.'),
        step('Step 3 - Answer','<br>Toh diagonal '+K(s+R2)+' cm hai.')
      ], shortcut:K('Diagonal = '+FR(P,4)+' '+T+' '+R2+' = '+s+R2)+' cm.', hint:'Perimeter ko 4 se divide karke side nikalo, fir root 2 se guna karo.' },
      { steps:[
        step('चरण 1 - परिमिति से भुजा निकालो','<br>वर्ग की 4 बराबर भुजाएँ होती हैं, तो '+K('भुजा = '+FR(P,4)+' = '+s)+' cm।'),
        step('चरण 2 - विकर्ण नियम लगाओ','<br>विकर्ण '+K('= भुजा '+T+' '+R2+' = '+s+R2)+'।'),
        step('चरण 3 - उत्तर','<br>तो विकर्ण '+K(s+R2)+' cm है।')
      ], shortcut:K('विकर्ण = '+FR(P,4)+' '+T+' '+R2+' = '+s+R2)+' cm।', hint:'परिमिति को 4 से भाग देकर भुजा निकालो, फिर रूट 2 से गुना करो।' }
    );
  };

  window.buildDiagToAreaSolution=function(s,area){
    return S(
      { steps:[
        step('Step 1 - Find the side from the diagonal','<br>Diagonal '+K('= side '+T+' '+R2)+', and here the diagonal is '+K(s+R2)+', so the side is '+K(s)+' cm.'),
        step('Step 2 - Find the area','<br>Area '+K('= '+POW('side',2)+' = '+POW(s,2)+' = '+area)+'.'),
        step('Step 3 - Answer','<br>So the area is '+K(area)+' cm².')
      ], shortcut:'Side '+K('= '+s)+', area '+K('= '+POW(s,2)+' = '+area)+' cm².', hint:'Read the side from the diagonal, then square it for the area.' },
      { steps:[
        step('Step 1 - Diagonal se side nikalo','<br>Diagonal '+K('= side '+T+' '+R2)+', aur yahaan diagonal '+K(s+R2)+' hai, toh side '+K(s)+' cm hai.'),
        step('Step 2 - Area nikalo','<br>Area '+K('= '+POW('side',2)+' = '+POW(s,2)+' = '+area)+'.'),
        step('Step 3 - Answer','<br>Toh area '+K(area)+' cm² hai.')
      ], shortcut:'Side '+K('= '+s)+', area '+K('= '+POW(s,2)+' = '+area)+' cm².', hint:'Diagonal se side padho, fir area ke liye square karo.' },
      { steps:[
        step('चरण 1 - विकर्ण से भुजा निकालो','<br>विकर्ण '+K('= भुजा '+T+' '+R2)+', और यहाँ विकर्ण '+K(s+R2)+' है, तो भुजा '+K(s)+' cm है।'),
        step('चरण 2 - क्षेत्रफल निकालो','<br>क्षेत्रफल '+K('= '+POW('भुजा',2)+' = '+POW(s,2)+' = '+area)+'।'),
        step('चरण 3 - उत्तर','<br>तो क्षेत्रफल '+K(area)+' cm² है।')
      ], shortcut:'भुजा '+K('= '+s)+', क्षेत्रफल '+K('= '+POW(s,2)+' = '+area)+' cm²।', hint:'विकर्ण से भुजा पढ़ो, फिर क्षेत्रफल के लिए वर्ग करो।' }
    );
  };
})();
