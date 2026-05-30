/* tier10 - Template 13: sq_area_side (Word Problem: Area <-> Side)
   buildSqAreaSideSolution(s,area), V1(s,ans), V2(s,area), V3(a,b,ans), V4(s,area,rate,cost), V5(s,w2,ans) */
(function(){
  var SB=window.SB; if(!SB) return;
  var K=SB.K,RT=SB.RT,POW=SB.POW,T=SB.T,step=SB.step,S=SB.S;

  window.buildSqAreaSideSolution=function(s,area){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>For a square, area = side x side. So if we know the area, the side is the square root of the area.'),
        step('Step 2 - Recall the formula','<br>side = square root of the area = '+K(RT(area))+'.'),
        step('Step 3 - Compute','<br>'+K(RT(area)+' = '+s)+' (because '+K(POW(s,'2')+' = '+area)+').'),
        step('Step 4 - Final answer','<br>'+K(s)+' m.')
      ], shortcut:'side = '+K(RT(area)+' = '+s)+' m.', hint:'For a square, side = square root of the area.' },
      { steps:[
        step('Step 1 - Samjho','<br>Square ke liye, area = side x side. Toh agar area pata hai, side = area ka square root.'),
        step('Step 2 - Formula yaad karo','<br>side = area ka square root = '+K(RT(area))+'.'),
        step('Step 3 - Hal karo','<br>'+K(RT(area)+' = '+s)+' (kyunki '+K(POW(s,'2')+' = '+area)+').'),
        step('Step 4 - Final answer','<br>'+K(s)+' m.')
      ], shortcut:'side = '+K(RT(area)+' = '+s)+' m.', hint:'Square ke liye, side = area ka square root.' },
      { steps:[
        step('चरण 1 - समझो','<br>वर्ग के लिए, क्षेत्रफल = भुजा x भुजा। तो यदि क्षेत्रफल पता है, भुजा = क्षेत्रफल का वर्गमूल।'),
        step('चरण 2 - सूत्र याद करो','<br>भुजा = क्षेत्रफल का वर्गमूल = '+K(RT(area))+'।'),
        step('चरण 3 - हल करो','<br>'+K(RT(area)+' = '+s)+' (क्योंकि '+K(POW(s,'2')+' = '+area)+')।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(s)+' मीटर।')
      ], shortcut:'भुजा = '+K(RT(area)+' = '+s)+' मीटर।', hint:'वर्ग के लिए, भुजा = क्षेत्रफल का वर्गमूल।' }
    );
  };

  window.buildSqAreaSideV1Solution=function(s,ans){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>The side is given; we need the area of the square.'),
        step('Step 2 - Recall the formula','<br>area = side x side = side^2.'),
        step('Step 3 - Compute','<br>'+K(POW(s,'2')+' = '+s+T+s+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+' sq m.')
      ], shortcut:K(s+T+s+' = '+ans)+' sq m.', hint:'Area of a square = side x side.' },
      { steps:[
        step('Step 1 - Samjho','<br>Side di hai; square ka area nikaalna hai.'),
        step('Step 2 - Formula yaad karo','<br>area = side x side = side^2.'),
        step('Step 3 - Hal karo','<br>'+K(POW(s,'2')+' = '+s+T+s+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+' sq m.')
      ], shortcut:K(s+T+s+' = '+ans)+' sq m.', hint:'Square ka area = side x side.' },
      { steps:[
        step('चरण 1 - समझो','<br>भुजा दी है; वर्ग का क्षेत्रफल निकालना है।'),
        step('चरण 2 - सूत्र याद करो','<br>क्षेत्रफल = भुजा x भुजा।'),
        step('चरण 3 - हल करो','<br>'+K(POW(s,'2')+' = '+s+T+s+' = '+ans)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(ans)+' वर्ग मीटर।')
      ], shortcut:K(s+T+s+' = '+ans)+' वर्ग मीटर।', hint:'वर्ग का क्षेत्रफल = भुजा x भुजा।' }
    );
  };

  window.buildSqAreaSideV2Solution=function(s,area){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>The room is square with a known area. One wall length = side = square root of the area.'),
        step('Step 2 - Recall the formula','<br>side = '+K(RT(area))+'.'),
        step('Step 3 - Compute','<br>'+K(RT(area)+' = '+s)+' (because '+K(POW(s,'2')+' = '+area)+').'),
        step('Step 4 - Final answer','<br>'+K(s)+' ft.')
      ], shortcut:K(RT(area)+' = '+s)+' ft.', hint:'Wall length = square root of the area.' },
      { steps:[
        step('Step 1 - Samjho','<br>Room square hai aur area pata hai. Ek wall ki length = side = area ka square root.'),
        step('Step 2 - Formula yaad karo','<br>side = '+K(RT(area))+'.'),
        step('Step 3 - Hal karo','<br>'+K(RT(area)+' = '+s)+' (kyunki '+K(POW(s,'2')+' = '+area)+').'),
        step('Step 4 - Final answer','<br>'+K(s)+' ft.')
      ], shortcut:K(RT(area)+' = '+s)+' ft.', hint:'Wall ki length = area ka square root.' },
      { steps:[
        step('चरण 1 - समझो','<br>कमरा वर्गाकार है और क्षेत्रफल पता है। एक दीवार की लंबाई = भुजा = क्षेत्रफल का वर्गमूल।'),
        step('चरण 2 - सूत्र याद करो','<br>भुजा = '+K(RT(area))+'।'),
        step('चरण 3 - हल करो','<br>'+K(RT(area)+' = '+s)+' (क्योंकि '+K(POW(s,'2')+' = '+area)+')।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(s)+' फुट।')
      ], shortcut:K(RT(area)+' = '+s)+' फुट।', hint:'दीवार की लंबाई = क्षेत्रफल का वर्गमूल।' }
    );
  };

  window.buildSqAreaSideV3Solution=function(a,b,ans){
    var hi=Math.max(a,b), lo=Math.min(a,b);
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Both sides are given directly, so no square root is needed - just find the difference.'),
        step('Step 2 - Subtract the smaller from the larger','<br>'+K(hi+' - '+lo+' = '+ans)+'.'),
        step('Step 3 - Final answer','<br>'+K(ans)+' m.')
      ], shortcut:K(hi+' - '+lo+' = '+ans)+' m.', hint:'The sides are already given; just subtract.' },
      { steps:[
        step('Step 1 - Samjho','<br>Dono sides seedhe di hain, toh square root ki zaroorat nahi - bas difference nikaalo.'),
        step('Step 2 - Bade me se chhota ghatao','<br>'+K(hi+' - '+lo+' = '+ans)+'.'),
        step('Step 3 - Final answer','<br>'+K(ans)+' m.')
      ], shortcut:K(hi+' - '+lo+' = '+ans)+' m.', hint:'Sides pehle se di hain; bas ghatao.' },
      { steps:[
        step('चरण 1 - समझो','<br>दोनों भुजाएँ सीधे दी गई हैं, इसलिए वर्गमूल की ज़रूरत नहीं - बस अंतर निकालो।'),
        step('चरण 2 - बड़ी में से छोटी घटाओ','<br>'+K(hi+' - '+lo+' = '+ans)+'।'),
        step('चरण 3 - अंतिम उत्तर','<br>'+K(ans)+' मीटर।')
      ], shortcut:K(hi+' - '+lo+' = '+ans)+' मीटर।', hint:'भुजाएँ पहले से दी हैं; बस घटाओ।' }
    );
  };

  window.buildSqAreaSideV4Solution=function(s,area,rate,cost){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>First find the floor area (side^2), then multiply by the cost per square metre.'),
        step('Step 2 - Find the area','<br>'+K(POW(s,'2')+' = '+area)+' sq m.'),
        step('Step 3 - Multiply by the rate','<br>'+K(area+T+rate+' = '+cost)+'.'),
        step('Step 4 - Final answer','<br>Rs '+K(cost)+'.')
      ], shortcut:'area '+K(area)+' '+K(T+rate)+' = Rs '+K(cost)+'.', hint:'Cost = area x rate. Find area first.' },
      { steps:[
        step('Step 1 - Samjho','<br>Pehle floor ka area (side^2) nikaalo, fir cost per square metre se multiply karo.'),
        step('Step 2 - Area nikaalo','<br>'+K(POW(s,'2')+' = '+area)+' sq m.'),
        step('Step 3 - Rate se multiply karo','<br>'+K(area+T+rate+' = '+cost)+'.'),
        step('Step 4 - Final answer','<br>Rs '+K(cost)+'.')
      ], shortcut:'area '+K(area)+' '+K(T+rate)+' = Rs '+K(cost)+'.', hint:'Cost = area x rate. Pehle area nikaalo.' },
      { steps:[
        step('चरण 1 - समझो','<br>पहले फर्श का क्षेत्रफल (भुजा^2) निकालो, फिर प्रति वर्ग मीटर खर्च से गुणा करो।'),
        step('चरण 2 - क्षेत्रफल निकालो','<br>'+K(POW(s,'2')+' = '+area)+' वर्ग मीटर।'),
        step('चरण 3 - दर से गुणा करो','<br>'+K(area+T+rate+' = '+cost)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>Rs '+K(cost)+'।')
      ], shortcut:'क्षेत्रफल '+K(area)+' '+K(T+rate)+' = Rs '+K(cost)+'।', hint:'खर्च = क्षेत्रफल x दर। पहले क्षेत्रफल निकालो।' }
    );
  };

  window.buildSqAreaSideV5Solution=function(s,w2,ans){
    var side2=s+2*w2, outer=side2*side2, inner=s*s;
    return S(
      { steps:[
        step('Step 1 - Understand','<br>The path runs all around the field. Path area = (big outer square) - (inner field).'),
        step('Step 2 - Outer square','<br>Outer side = field side + path on both sides = '+K(s+' + 2'+T+w2+' = '+side2)+'. Outer area = '+K(POW(side2,'2')+' = '+outer)+' sq m.'),
        step('Step 3 - Inner field area','<br>'+K(POW(s,'2')+' = '+inner)+' sq m.'),
        step('Step 4 - Final answer','<br>Path area = '+K(outer+' - '+inner+' = '+ans)+' sq m.')
      ], shortcut:K(outer+' - '+inner+' = '+ans)+' sq m.', hint:'Big square side = field side + twice the path width. Subtract the inner area.' },
      { steps:[
        step('Step 1 - Samjho','<br>Path field ke chaaro taraf hai. Path area = (bada outer square) - (andar ka field).'),
        step('Step 2 - Outer square','<br>Outer side = field side + dono taraf path = '+K(s+' + 2'+T+w2+' = '+side2)+'. Outer area = '+K(POW(side2,'2')+' = '+outer)+' sq m.'),
        step('Step 3 - Andar ke field ka area','<br>'+K(POW(s,'2')+' = '+inner)+' sq m.'),
        step('Step 4 - Final answer','<br>Path area = '+K(outer+' - '+inner+' = '+ans)+' sq m.')
      ], shortcut:K(outer+' - '+inner+' = '+ans)+' sq m.', hint:'Bada square side = field side + 2 x path width. Andar ka area ghatao.' },
      { steps:[
        step('चरण 1 - समझो','<br>पथ मैदान के चारों ओर है। पथ का क्षेत्रफल = (बड़ा बाहरी वर्ग) - (अंदर का मैदान)।'),
        step('चरण 2 - बाहरी वर्ग','<br>बाहरी भुजा = मैदान की भुजा + दोनों ओर पथ = '+K(s+' + 2'+T+w2+' = '+side2)+'। बाहरी क्षेत्रफल = '+K(POW(side2,'2')+' = '+outer)+' वर्ग मीटर।'),
        step('चरण 3 - अंदर के मैदान का क्षेत्रफल','<br>'+K(POW(s,'2')+' = '+inner)+' वर्ग मीटर।'),
        step('चरण 4 - अंतिम उत्तर','<br>पथ का क्षेत्रफल = '+K(outer+' - '+inner+' = '+ans)+' वर्ग मीटर।')
      ], shortcut:K(outer+' - '+inner+' = '+ans)+' वर्ग मीटर।', hint:'बड़े वर्ग की भुजा = मैदान भुजा + 2 x पथ चौड़ाई। अंदर का क्षेत्रफल घटाओ।' }
    );
  };
})();
