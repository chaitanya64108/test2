/* tier12 - Template 48: sq_fence_area (Fencing Cost <-> Area)
   buildFenceSqAreaSolution(cost,rate,perim,s,area) buildFenceRectAreaSolution(cost,rate,perim,l,b,area)
   buildFenceSqSideSolution(cost,rate,perim,s) buildFenceRectFindBSolution(cost,rate,perim,l,b,area)
   buildFenceDoubleSolution(cost,rate,perim,s,area) buildFenceCostFromAreaSolution(area,s,perim,rate,cost)
   buildFenceDiffSolution(s1,s2,rate,c1,c2,diff) */
(function(){
  var SB=window.SB; if(!SB) return;
  var K=SB.K,RT=SB.RT,FR=SB.FR,POW=SB.POW,T=SB.T,D=SB.D,step=SB.step,S=SB.S;

  window.buildFenceSqAreaSolution=function(cost,rate,perim,s,area){
    return S(
      { steps:[
        step('Step 1 - Find the perimeter from the cost','<br>Cost = perimeter '+T+' rate, so perimeter '+K('= '+FR(cost,rate)+' = '+perim)+' m.'),
        step('Step 2 - Find the side','<br>A square has 4 equal sides, so side '+K('= '+FR(perim,4)+' = '+s)+' m.'),
        step('Step 3 - Find the area','<br>Area '+K('= '+POW(s,2)+' = '+area)+' m².')
      ], shortcut:K('side = '+FR(FR(cost,rate),4)+' = '+s)+', area '+K('= '+area)+' m².', hint:'Cost divided by rate gives the perimeter; divide by 4 for the side, then square it.' },
      { steps:[
        step('Step 1 - Cost se perimeter nikalo','<br>Cost = perimeter '+T+' rate, toh perimeter '+K('= '+FR(cost,rate)+' = '+perim)+' m.'),
        step('Step 2 - Side nikalo','<br>Square ki 4 barabar sides, toh side '+K('= '+FR(perim,4)+' = '+s)+' m.'),
        step('Step 3 - Area nikalo','<br>Area '+K('= '+POW(s,2)+' = '+area)+' m².')
      ], shortcut:K('side = '+FR(FR(cost,rate),4)+' = '+s)+', area '+K('= '+area)+' m².', hint:'Cost bata rate = perimeter; 4 se divide karke side, fir square karo.' },
      { steps:[
        step('चरण 1 - लागत से परिमिति निकालो','<br>लागत = परिमिति '+T+' दर, तो परिमिति '+K('= '+FR(cost,rate)+' = '+perim)+' m।'),
        step('चरण 2 - भुजा निकालो','<br>वर्ग की 4 बराबर भुजाएँ, तो भुजा '+K('= '+FR(perim,4)+' = '+s)+' m।'),
        step('चरण 3 - क्षेत्रफल निकालो','<br>क्षेत्रफल '+K('= '+POW(s,2)+' = '+area)+' m²।')
      ], shortcut:K('भुजा = '+FR(FR(cost,rate),4)+' = '+s)+', क्षेत्रफल '+K('= '+area)+' m²।', hint:'लागत बटा दर = परिमिति; 4 से भाग देकर भुजा, फिर वर्ग करो।' }
    );
  };

  window.buildFenceRectAreaSolution=function(cost,rate,perim,l,b,area){
    return S(
      { steps:[
        step('Step 1 - Find the perimeter from the cost','<br>Perimeter '+K('= '+FR(cost,rate)+' = '+perim)+' m.'),
        step('Step 2 - Confirm the sides','<br>For a rectangle, perimeter '+K('= 2(l + b)')+', and here '+K(l)+' m '+T+' '+K(b)+' m fit this.'),
        step('Step 3 - Find the area','<br>Area '+K('= l '+T+' b = '+l+T+b+' = '+area)+' m².')
      ], shortcut:'Area '+K('= '+l+T+b+' = '+area)+' m².', hint:'Cost divided by rate gives the perimeter; the area is length times width.' },
      { steps:[
        step('Step 1 - Cost se perimeter nikalo','<br>Perimeter '+K('= '+FR(cost,rate)+' = '+perim)+' m.'),
        step('Step 2 - Sides confirm karo','<br>Rectangle ke liye perimeter '+K('= 2(l + b)')+', aur yahaan '+K(l)+' m '+T+' '+K(b)+' m fit hote hain.'),
        step('Step 3 - Area nikalo','<br>Area '+K('= l '+T+' b = '+l+T+b+' = '+area)+' m².')
      ], shortcut:'Area '+K('= '+l+T+b+' = '+area)+' m².', hint:'Cost bata rate = perimeter; area = length guna width.' },
      { steps:[
        step('चरण 1 - लागत से परिमिति निकालो','<br>परिमिति '+K('= '+FR(cost,rate)+' = '+perim)+' m।'),
        step('चरण 2 - भुजाएँ सुनिश्चित करो','<br>आयत के लिए परिमिति '+K('= 2(l + b)')+', और यहाँ '+K(l)+' m '+T+' '+K(b)+' m फिट होते हैं।'),
        step('चरण 3 - क्षेत्रफल निकालो','<br>क्षेत्रफल '+K('= l '+T+' b = '+l+T+b+' = '+area)+' m²।')
      ], shortcut:'क्षेत्रफल '+K('= '+l+T+b+' = '+area)+' m²।', hint:'लागत बटा दर = परिमिति; क्षेत्रफल = लंबाई गुना चौड़ाई।' }
    );
  };

  window.buildFenceSqSideSolution=function(cost,rate,perim,s){
    return S(
      { steps:[
        step('Step 1 - Find the perimeter from the cost','<br>Perimeter '+K('= '+FR(cost,rate)+' = '+perim)+' m.'),
        step('Step 2 - Find the side','<br>A square has 4 equal sides, so side '+K('= '+FR(perim,4)+' = '+s)+' m.'),
        step('Step 3 - Answer','<br>So each side is '+K(s)+' m.')
      ], shortcut:K('side = '+FR(FR(cost,rate),4)+' = '+s)+' m.', hint:'Cost divided by rate gives the perimeter; divide by 4 for one side.' },
      { steps:[
        step('Step 1 - Cost se perimeter nikalo','<br>Perimeter '+K('= '+FR(cost,rate)+' = '+perim)+' m.'),
        step('Step 2 - Side nikalo','<br>Square ki 4 barabar sides, toh side '+K('= '+FR(perim,4)+' = '+s)+' m.'),
        step('Step 3 - Answer','<br>Toh har side '+K(s)+' m hai.')
      ], shortcut:K('side = '+FR(FR(cost,rate),4)+' = '+s)+' m.', hint:'Cost bata rate = perimeter; 4 se divide karo ek side ke liye.' },
      { steps:[
        step('चरण 1 - लागत से परिमिति निकालो','<br>परिमिति '+K('= '+FR(cost,rate)+' = '+perim)+' m।'),
        step('चरण 2 - भुजा निकालो','<br>वर्ग की 4 बराबर भुजाएँ, तो भुजा '+K('= '+FR(perim,4)+' = '+s)+' m।'),
        step('चरण 3 - उत्तर','<br>तो हर भुजा '+K(s)+' m है।')
      ], shortcut:K('भुजा = '+FR(FR(cost,rate),4)+' = '+s)+' m।', hint:'लागत बटा दर = परिमिति; एक भुजा के लिए 4 से भाग दो।' }
    );
  };

  window.buildFenceRectFindBSolution=function(cost,rate,perim,l,b,area){
    var half=perim/2;
    return S(
      { steps:[
        step('Step 1 - Find the perimeter','<br>Perimeter '+K('= '+FR(cost,rate)+' = '+perim)+' m.'),
        step('Step 2 - Find the width','<br>Perimeter '+K('= 2(l + b)')+', so '+K('l + b = '+FR(perim,2)+' = '+half)+', giving '+K('b = '+half+' - '+l+' = '+b)+' m.'),
        step('Step 3 - Find the area','<br>Area '+K('= '+l+T+b+' = '+area)+' m².')
      ], shortcut:K('b = '+half+' - '+l+' = '+b)+', area '+K('= '+area)+' m².', hint:'Get the perimeter, halve it for length plus width, subtract the length, then multiply.' },
      { steps:[
        step('Step 1 - Perimeter nikalo','<br>Perimeter '+K('= '+FR(cost,rate)+' = '+perim)+' m.'),
        step('Step 2 - Width nikalo','<br>Perimeter '+K('= 2(l + b)')+', toh '+K('l + b = '+FR(perim,2)+' = '+half)+', isse '+K('b = '+half+' - '+l+' = '+b)+' m.'),
        step('Step 3 - Area nikalo','<br>Area '+K('= '+l+T+b+' = '+area)+' m².')
      ], shortcut:K('b = '+half+' - '+l+' = '+b)+', area '+K('= '+area)+' m².', hint:'Perimeter nikalo, aadha karo (l+b), length ghatao, fir guna karo.' },
      { steps:[
        step('चरण 1 - परिमिति निकालो','<br>परिमिति '+K('= '+FR(cost,rate)+' = '+perim)+' m।'),
        step('चरण 2 - चौड़ाई निकालो','<br>परिमिति '+K('= 2(l + b)')+', तो '+K('l + b = '+FR(perim,2)+' = '+half)+', इससे '+K('b = '+half+' - '+l+' = '+b)+' m।'),
        step('चरण 3 - क्षेत्रफल निकालो','<br>क्षेत्रफल '+K('= '+l+T+b+' = '+area)+' m²।')
      ], shortcut:K('b = '+half+' - '+l+' = '+b)+', क्षेत्रफल '+K('= '+area)+' m²।', hint:'परिमिति निकालो, आधा करो (l+b), लंबाई घटाओ, फिर गुना करो।' }
    );
  };

  window.buildFenceDoubleSolution=function(cost,rate,perim,s,area){
    return S(
      { steps:[
        step('Step 1 - Account for the double layer','<br>Two layers mean the fenced length is '+K('2 '+T+' perimeter')+'. So '+K('2 '+T+' perimeter = '+FR(cost,rate)+' = '+(2*perim))+' m, giving perimeter '+K('= '+perim)+' m.'),
        step('Step 2 - Find the side','<br>Side '+K('= '+FR(perim,4)+' = '+s)+' m.'),
        step('Step 3 - Find the area','<br>Area '+K('= '+POW(s,2)+' = '+area)+' m².')
      ], shortcut:'Halve the fenced length for the real perimeter, then side '+K('= '+s)+', area '+K('= '+area)+' m².', hint:'Double fencing doubles the length, so divide that out before finding the perimeter.' },
      { steps:[
        step('Step 1 - Double layer ka dhyaan rakho','<br>Do layers matlab fenced length '+K('2 '+T+' perimeter')+' hai. Toh '+K('2 '+T+' perimeter = '+FR(cost,rate)+' = '+(2*perim))+' m, isse perimeter '+K('= '+perim)+' m.'),
        step('Step 2 - Side nikalo','<br>Side '+K('= '+FR(perim,4)+' = '+s)+' m.'),
        step('Step 3 - Area nikalo','<br>Area '+K('= '+POW(s,2)+' = '+area)+' m².')
      ], shortcut:'Fenced length ko aadha karke real perimeter, fir side '+K('= '+s)+', area '+K('= '+area)+' m².', hint:'Double fencing length double kar deti hai, toh perimeter se pehle usse divide karo.' },
      { steps:[
        step('चरण 1 - दोहरी परत का ध्यान रखो','<br>दो परतें यानी बाड़ की लंबाई '+K('2 '+T+' परिमिति')+' है। तो '+K('2 '+T+' परिमिति = '+FR(cost,rate)+' = '+(2*perim))+' m, इससे परिमिति '+K('= '+perim)+' m।'),
        step('चरण 2 - भुजा निकालो','<br>भुजा '+K('= '+FR(perim,4)+' = '+s)+' m।'),
        step('चरण 3 - क्षेत्रफल निकालो','<br>क्षेत्रफल '+K('= '+POW(s,2)+' = '+area)+' m²।')
      ], shortcut:'बाड़ की लंबाई आधी करके वास्तविक परिमिति, फिर भुजा '+K('= '+s)+', क्षेत्रफल '+K('= '+area)+' m²।', hint:'दोहरी बाड़ लंबाई दोगुनी कर देती है, तो परिमिति से पहले उसे भाग दो।' }
    );
  };

  window.buildFenceCostFromAreaSolution=function(area,s,perim,rate,cost){
    return S(
      { steps:[
        step('Step 1 - Find the side from the area','<br>Side '+K('= '+RT(area)+' = '+s)+' m.'),
        step('Step 2 - Find the perimeter','<br>Perimeter '+K('= 4 '+T+' '+s+' = '+perim)+' m.'),
        step('Step 3 - Find the cost','<br>Cost '+K('= '+perim+T+rate+' = '+cost)+', so the total cost is ₹'+K(cost)+'.')
      ], shortcut:K('Cost = 4'+RT(area)+T+rate+' = '+cost)+'.', hint:'Side is the square root of the area; perimeter is 4 times the side; cost is perimeter times rate.' },
      { steps:[
        step('Step 1 - Area se side nikalo','<br>Side '+K('= '+RT(area)+' = '+s)+' m.'),
        step('Step 2 - Perimeter nikalo','<br>Perimeter '+K('= 4 '+T+' '+s+' = '+perim)+' m.'),
        step('Step 3 - Cost nikalo','<br>Cost '+K('= '+perim+T+rate+' = '+cost)+', toh total cost ₹'+K(cost)+'.')
      ], shortcut:K('Cost = 4'+RT(area)+T+rate+' = '+cost)+'.', hint:'Side = area ka root; perimeter = 4 guna side; cost = perimeter guna rate.' },
      { steps:[
        step('चरण 1 - क्षेत्रफल से भुजा निकालो','<br>भुजा '+K('= '+RT(area)+' = '+s)+' m।'),
        step('चरण 2 - परिमिति निकालो','<br>परिमिति '+K('= 4 '+T+' '+s+' = '+perim)+' m।'),
        step('चरण 3 - लागत निकालो','<br>लागत '+K('= '+perim+T+rate+' = '+cost)+', तो कुल लागत ₹'+K(cost)+'।')
      ], shortcut:K('लागत = 4'+RT(area)+T+rate+' = '+cost)+'।', hint:'भुजा = क्षेत्रफल का मूल; परिमिति = 4 गुना भुजा; लागत = परिमिति गुना दर।' }
    );
  };

  window.buildFenceDiffSolution=function(s1,s2,rate,c1,c2,diff){
    return S(
      { steps:[
        step('Step 1 - Cost of the first field','<br>Cost '+K('= 4 '+T+' '+s1+T+rate+' = '+c1)+'.'),
        step('Step 2 - Cost of the second field','<br>Cost '+K('= 4 '+T+' '+s2+T+rate+' = '+c2)+'.'),
        step('Step 3 - Find the difference','<br>Difference '+K('= |'+c1+' - '+c2+'| = '+diff)+', so the answer is ₹'+K(diff)+'.')
      ], shortcut:K('4'+T+rate+T+'|'+s1+' - '+s2+'| = '+diff)+'.', hint:'Find each fencing cost, then subtract the smaller from the larger.' },
      { steps:[
        step('Step 1 - Pehle field ki cost','<br>Cost '+K('= 4 '+T+' '+s1+T+rate+' = '+c1)+'.'),
        step('Step 2 - Doosre field ki cost','<br>Cost '+K('= 4 '+T+' '+s2+T+rate+' = '+c2)+'.'),
        step('Step 3 - Antar nikalo','<br>Antar '+K('= |'+c1+' - '+c2+'| = '+diff)+', toh answer ₹'+K(diff)+'.')
      ], shortcut:K('4'+T+rate+T+'|'+s1+' - '+s2+'| = '+diff)+'.', hint:'Har fencing cost nikalo, fir chhote ko bade se ghatao.' },
      { steps:[
        step('चरण 1 - पहले खेत की लागत','<br>लागत '+K('= 4 '+T+' '+s1+T+rate+' = '+c1)+'।'),
        step('चरण 2 - दूसरे खेत की लागत','<br>लागत '+K('= 4 '+T+' '+s2+T+rate+' = '+c2)+'।'),
        step('चरण 3 - अंतर निकालो','<br>अंतर '+K('= |'+c1+' - '+c2+'| = '+diff)+', तो उत्तर ₹'+K(diff)+'।')
      ], shortcut:K('4'+T+rate+T+'|'+s1+' - '+s2+'| = '+diff)+'।', hint:'हर बाड़ की लागत निकालो, फिर छोटे को बड़े से घटाओ।' }
    );
  };
})();
