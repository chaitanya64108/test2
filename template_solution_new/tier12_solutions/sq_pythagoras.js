/* tier12 - Template 45: sq_pythagoras (Pythagoras Theorem)
   buildSqPythagorasV0Solution(a,b,c) buildSqPythagorasV1Solution(missing,given,c)
   buildSqPythagorasV2Solution(a,b,c,P) buildSqPythagorasV3Solution(a,b,c,isRight)
   buildSqPythagorasV4Solution(l,wd,d) buildSqPythagorasV5Solution(a,b,cSq) */
(function(){
  var SB=window.SB; if(!SB) return;
  var K=SB.K,RT=SB.RT,POW=SB.POW,T=SB.T,step=SB.step,S=SB.S;

  window.buildSqPythagorasV0Solution=function(a,b,c){
    var aa=a*a,bb=b*b,cc=aa+bb;
    return S(
      { steps:[
        step('Step 1 - Use the Pythagoras rule','<br>The hypotenuse is the longest side, and it follows '+K(POW('c',2)+' = '+POW('a',2)+' + '+POW('b',2))+', where '+K('a')+' and '+K('b')+' are the two legs.'),
        step('Step 2 - Put the numbers in','<br>'+K(POW('c',2)+' = '+POW(a,2)+' + '+POW(b,2)+' = '+aa+' + '+bb+' = '+cc)+'.'),
        step('Step 3 - Take the square root','<br>'+K('c = '+RT(cc)+' = '+c)+', so the hypotenuse is '+K(c)+' cm.')
      ], shortcut:K(RT(POW(a,2)+' + '+POW(b,2))+' = '+RT(cc)+' = '+c)+' cm.', hint:'Square both legs, add them, then take the square root.' },
      { steps:[
        step('Step 1 - Pythagoras rule','<br>Hypotenuse sabse badi side hai, aur '+K(POW('c',2)+' = '+POW('a',2)+' + '+POW('b',2))+', jahan '+K('a')+' aur '+K('b')+' do legs hain.'),
        step('Step 2 - Numbers daalo','<br>'+K(POW('c',2)+' = '+POW(a,2)+' + '+POW(b,2)+' = '+aa+' + '+bb+' = '+cc)+'.'),
        step('Step 3 - Square root lo','<br>'+K('c = '+RT(cc)+' = '+c)+', toh hypotenuse '+K(c)+' cm hai.')
      ], shortcut:K(RT(POW(a,2)+' + '+POW(b,2))+' = '+RT(cc)+' = '+c)+' cm.', hint:'Dono legs ko square karo, add karo, fir square root lo.' },
      { steps:[
        step('चरण 1 - पाइथागोरस नियम','<br>कर्ण सबसे बड़ी भुजा है, और '+K(POW('c',2)+' = '+POW('a',2)+' + '+POW('b',2))+', जहाँ '+K('a')+' और '+K('b')+' दो भुजाएँ हैं।'),
        step('चरण 2 - संख्याएँ रखो','<br>'+K(POW('c',2)+' = '+POW(a,2)+' + '+POW(b,2)+' = '+aa+' + '+bb+' = '+cc)+'।'),
        step('चरण 3 - वर्गमूल लो','<br>'+K('c = '+RT(cc)+' = '+c)+', तो कर्ण '+K(c)+' cm है।')
      ], shortcut:K(RT(POW(a,2)+' + '+POW(b,2))+' = '+RT(cc)+' = '+c)+' cm।', hint:'दोनों भुजाओं का वर्ग करो, जोड़ो, फिर वर्गमूल लो।' }
    );
  };

  window.buildSqPythagorasV1Solution=function(missing,given,c){
    var mm=missing*missing,gg=given*given,cc=c*c;
    return S(
      { steps:[
        step('Step 1 - Rearrange Pythagoras','<br>From '+K(POW('c',2)+' = '+POW('a',2)+' + '+POW('b',2))+', a missing leg becomes '+K(POW('a',2)+' = '+POW('c',2)+' - '+POW('b',2))+'.'),
        step('Step 2 - Put the numbers in','<br>'+K(POW('a',2)+' = '+POW(c,2)+' - '+POW(given,2)+' = '+cc+' - '+gg+' = '+mm)+'.'),
        step('Step 3 - Take the square root','<br>'+K('a = '+RT(mm)+' = '+missing)+', so the other leg is '+K(missing)+' cm.')
      ], shortcut:K(RT(POW(c,2)+' - '+POW(given,2))+' = '+RT(mm)+' = '+missing)+' cm.', hint:'Subtract the known leg squared from the hypotenuse squared, then take the root.' },
      { steps:[
        step('Step 1 - Pythagoras ko rearrange karo','<br>'+K(POW('c',2)+' = '+POW('a',2)+' + '+POW('b',2))+' se, missing leg banta hai '+K(POW('a',2)+' = '+POW('c',2)+' - '+POW('b',2))+'.'),
        step('Step 2 - Numbers daalo','<br>'+K(POW('a',2)+' = '+POW(c,2)+' - '+POW(given,2)+' = '+cc+' - '+gg+' = '+mm)+'.'),
        step('Step 3 - Square root lo','<br>'+K('a = '+RT(mm)+' = '+missing)+', toh doosri leg '+K(missing)+' cm hai.')
      ], shortcut:K(RT(POW(c,2)+' - '+POW(given,2))+' = '+RT(mm)+' = '+missing)+' cm.', hint:'Hypotenuse ke square me se known leg ka square ghatao, fir root lo.' },
      { steps:[
        step('चरण 1 - पाइथागोरस को पुनर्व्यवस्थित करो','<br>'+K(POW('c',2)+' = '+POW('a',2)+' + '+POW('b',2))+' से, लुप्त भुजा बनती है '+K(POW('a',2)+' = '+POW('c',2)+' - '+POW('b',2))+'।'),
        step('चरण 2 - संख्याएँ रखो','<br>'+K(POW('a',2)+' = '+POW(c,2)+' - '+POW(given,2)+' = '+cc+' - '+gg+' = '+mm)+'।'),
        step('चरण 3 - वर्गमूल लो','<br>'+K('a = '+RT(mm)+' = '+missing)+', तो दूसरी भुजा '+K(missing)+' cm है।')
      ], shortcut:K(RT(POW(c,2)+' - '+POW(given,2))+' = '+RT(mm)+' = '+missing)+' cm।', hint:'कर्ण के वर्ग में से ज्ञात भुजा का वर्ग घटाओ, फिर मूल लो।' }
    );
  };

  window.buildSqPythagorasV2Solution=function(a,b,c,P){
    var aa=a*a,bb=b*b,cc=aa+bb;
    return S(
      { steps:[
        step('Step 1 - Find the hypotenuse first','<br>Perimeter needs all three sides, so first find the hypotenuse using '+K(POW('c',2)+' = '+POW('a',2)+' + '+POW('b',2))+'.'),
        step('Step 2 - Work out the hypotenuse','<br>'+K(POW('c',2)+' = '+POW(a,2)+' + '+POW(b,2)+' = '+cc)+', so '+K('c = '+RT(cc)+' = '+c)+'.'),
        step('Step 3 - Add all three sides','<br>Perimeter '+K('= '+a+' + '+b+' + '+c+' = '+P)+' cm.')
      ], shortcut:'Find '+K('c = '+c)+', then perimeter '+K('= '+a+' + '+b+' + '+c+' = '+P)+' cm.', hint:'Perimeter is the sum of all three sides, so you need the hypotenuse too.' },
      { steps:[
        step('Step 1 - Pehle hypotenuse nikalo','<br>Perimeter ke liye teeno sides chahiye, toh pehle hypotenuse nikalo '+K(POW('c',2)+' = '+POW('a',2)+' + '+POW('b',2))+' se.'),
        step('Step 2 - Hypotenuse nikalo','<br>'+K(POW('c',2)+' = '+POW(a,2)+' + '+POW(b,2)+' = '+cc)+', toh '+K('c = '+RT(cc)+' = '+c)+'.'),
        step('Step 3 - Teeno sides jodo','<br>Perimeter '+K('= '+a+' + '+b+' + '+c+' = '+P)+' cm.')
      ], shortcut:K('c = '+c)+' nikalo, fir perimeter '+K('= '+a+' + '+b+' + '+c+' = '+P)+' cm.', hint:'Perimeter teeno sides ka sum hai, toh hypotenuse bhi chahiye.' },
      { steps:[
        step('चरण 1 - पहले कर्ण निकालो','<br>परिमिति के लिए तीनों भुजाएँ चाहिए, तो पहले कर्ण निकालो '+K(POW('c',2)+' = '+POW('a',2)+' + '+POW('b',2))+' से।'),
        step('चरण 2 - कर्ण निकालो','<br>'+K(POW('c',2)+' = '+POW(a,2)+' + '+POW(b,2)+' = '+cc)+', तो '+K('c = '+RT(cc)+' = '+c)+'।'),
        step('चरण 3 - तीनों भुजाएँ जोड़ो','<br>परिमिति '+K('= '+a+' + '+b+' + '+c+' = '+P)+' cm।')
      ], shortcut:K('c = '+c)+' निकालो, फिर परिमिति '+K('= '+a+' + '+b+' + '+c+' = '+P)+' cm।', hint:'परिमिति तीनों भुजाओं का योग है, तो कर्ण भी चाहिए।' }
    );
  };

  window.buildSqPythagorasV3Solution=function(a,b,c,isRight){
    var aa=a*a,bb=b*b,cc=c*c,sum=aa+bb;
    return S(
      { steps:[
        step('Step 1 - The right-angle test','<br>A triangle is right-angled only if the square of the longest side equals the sum of the squares of the other two.'),
        step('Step 2 - Check the numbers','<br>Longest side: '+K(POW(c,2)+' = '+cc)+'. Other two: '+K(POW(a,2)+' + '+POW(b,2)+' = '+aa+' + '+bb+' = '+sum)+'.'),
        step('Step 3 - Compare and decide','<br>'+(isRight?('Both give '+K(cc)+', so they match. The triangle IS right-angled.'):('The two results are '+K(cc)+' and '+K(sum)+', which are not equal, so it is NOT right-angled.')))
      ], shortcut:isRight?(K(POW(a,2)+' + '+POW(b,2)+' = '+POW(c,2))+', so Yes.'):(K(POW(a,2)+' + '+POW(b,2))+' does not equal '+K(POW(c,2))+', so No.'), hint:'Square the longest side and compare with the sum of the other two squares.' },
      { steps:[
        step('Step 1 - Right-angle test','<br>Triangle right-angled tabhi hota hai jab sabse badi side ka square baaki do ke squares ke sum ke barabar ho.'),
        step('Step 2 - Numbers check karo','<br>Sabse badi side: '+K(POW(c,2)+' = '+cc)+'. Baaki do: '+K(POW(a,2)+' + '+POW(b,2)+' = '+aa+' + '+bb+' = '+sum)+'.'),
        step('Step 3 - Compare karke decide karo','<br>'+(isRight?('Dono '+K(cc)+' dete hain, toh match karte hain. Triangle right-angled HAI.'):('Dono results '+K(cc)+' aur '+K(sum)+' hain, jo barabar nahi, toh ye right-angled NAHI hai.')))
      ], shortcut:isRight?(K(POW(a,2)+' + '+POW(b,2)+' = '+POW(c,2))+', toh Yes.'):(K(POW(a,2)+' + '+POW(b,2))+' barabar nahi '+K(POW(c,2))+', toh No.'), hint:'Sabse badi side ko square karo aur baaki do ke squares ke sum se compare karo.' },
      { steps:[
        step('चरण 1 - समकोण जाँच','<br>त्रिभुज समकोण तभी होता है जब सबसे बड़ी भुजा का वर्ग बाकी दो के वर्गों के योग के बराबर हो।'),
        step('चरण 2 - संख्याएँ जाँचो','<br>सबसे बड़ी भुजा: '+K(POW(c,2)+' = '+cc)+'। बाकी दो: '+K(POW(a,2)+' + '+POW(b,2)+' = '+aa+' + '+bb+' = '+sum)+'।'),
        step('चरण 3 - तुलना करके निर्णय करो','<br>'+(isRight?('दोनों '+K(cc)+' देते हैं, तो मेल खाते हैं। त्रिभुज समकोण है।'):('दोनों परिणाम '+K(cc)+' और '+K(sum)+' हैं, जो बराबर नहीं, तो यह समकोण नहीं है।')))
      ], shortcut:isRight?(K(POW(a,2)+' + '+POW(b,2)+' = '+POW(c,2))+', तो हाँ।'):(K(POW(a,2)+' + '+POW(b,2))+' बराबर नहीं '+K(POW(c,2))+', तो नहीं।'), hint:'सबसे बड़ी भुजा को वर्ग करो और बाकी दो के वर्गों के योग से तुलना करो।' }
    );
  };

  window.buildSqPythagorasV4Solution=function(l,wd,d){
    var ll=l*l,ww=wd*wd,dd=ll+ww;
    return S(
      { steps:[
        step('Step 1 - See the right triangle','<br>The diagonal of a rectangle splits it into a right triangle whose legs are the length and the width.'),
        step('Step 2 - Apply Pythagoras','<br>'+K(POW('d',2)+' = '+POW(l,2)+' + '+POW(wd,2)+' = '+ll+' + '+ww+' = '+dd)+'.'),
        step('Step 3 - Take the square root','<br>'+K('d = '+RT(dd)+' = '+d)+', so the diagonal is '+K(d)+' cm.')
      ], shortcut:K(RT(POW(l,2)+' + '+POW(wd,2))+' = '+d)+' cm.', hint:'The diagonal is the hypotenuse of a right triangle with legs equal to the length and width.' },
      { steps:[
        step('Step 1 - Right triangle dekho','<br>Rectangle ka diagonal usko ek right triangle me baant deta hai jiske legs length aur width hote hain.'),
        step('Step 2 - Pythagoras lagao','<br>'+K(POW('d',2)+' = '+POW(l,2)+' + '+POW(wd,2)+' = '+ll+' + '+ww+' = '+dd)+'.'),
        step('Step 3 - Square root lo','<br>'+K('d = '+RT(dd)+' = '+d)+', toh diagonal '+K(d)+' cm hai.')
      ], shortcut:K(RT(POW(l,2)+' + '+POW(wd,2))+' = '+d)+' cm.', hint:'Diagonal ek right triangle ka hypotenuse hai jiske legs length aur width hain.' },
      { steps:[
        step('चरण 1 - समकोण त्रिभुज देखो','<br>आयत का विकर्ण उसे एक समकोण त्रिभुज में बाँट देता है जिसकी भुजाएँ लंबाई और चौड़ाई होती हैं।'),
        step('चरण 2 - पाइथागोरस लगाओ','<br>'+K(POW('d',2)+' = '+POW(l,2)+' + '+POW(wd,2)+' = '+ll+' + '+ww+' = '+dd)+'।'),
        step('चरण 3 - वर्गमूल लो','<br>'+K('d = '+RT(dd)+' = '+d)+', तो विकर्ण '+K(d)+' cm है।')
      ], shortcut:K(RT(POW(l,2)+' + '+POW(wd,2))+' = '+d)+' cm।', hint:'विकर्ण एक समकोण त्रिभुज का कर्ण है जिसकी भुजाएँ लंबाई और चौड़ाई हैं।' }
    );
  };

  window.buildSqPythagorasV5Solution=function(a,b,cSq){
    var aa=a*a,bb=b*b;
    return S(
      { steps:[
        step('Step 1 - Recall Pythagoras','<br>'+K(POW('c',2)+' = '+POW('a',2)+' + '+POW('b',2))+', where '+K('c')+' is the hypotenuse. Here we only need '+K(POW('c',2))+', not '+K('c')+' itself.'),
        step('Step 2 - Add the squares of the legs','<br>'+K(POW('c',2)+' = '+POW(a,2)+' + '+POW(b,2)+' = '+aa+' + '+bb+' = '+cSq)+'.'),
        step('Step 3 - Answer','<br>So the value of the hypotenuse squared is '+K(cSq)+' (no square root needed).')
      ], shortcut:'No root needed: '+K(POW(a,2)+' + '+POW(b,2)+' = '+cSq)+'.', hint:'The question asks for the square of the hypotenuse, so just add the two leg squares.' },
      { steps:[
        step('Step 1 - Pythagoras yaad karo','<br>'+K(POW('c',2)+' = '+POW('a',2)+' + '+POW('b',2))+', jahan '+K('c')+' hypotenuse hai. Yahaan sirf '+K(POW('c',2))+' chahiye, '+K('c')+' nahi.'),
        step('Step 2 - Legs ke squares jodo','<br>'+K(POW('c',2)+' = '+POW(a,2)+' + '+POW(b,2)+' = '+aa+' + '+bb+' = '+cSq)+'.'),
        step('Step 3 - Answer','<br>Toh hypotenuse ke square ki value '+K(cSq)+' hai (koi square root nahi chahiye).')
      ], shortcut:'Root ki zaroorat nahi: '+K(POW(a,2)+' + '+POW(b,2)+' = '+cSq)+'.', hint:'Question hypotenuse ka square poochta hai, toh bas dono legs ke squares jodo.' },
      { steps:[
        step('चरण 1 - पाइथागोरस याद करो','<br>'+K(POW('c',2)+' = '+POW('a',2)+' + '+POW('b',2))+', जहाँ '+K('c')+' कर्ण है। यहाँ केवल '+K(POW('c',2))+' चाहिए, '+K('c')+' नहीं।'),
        step('चरण 2 - भुजाओं के वर्ग जोड़ो','<br>'+K(POW('c',2)+' = '+POW(a,2)+' + '+POW(b,2)+' = '+aa+' + '+bb+' = '+cSq)+'।'),
        step('चरण 3 - उत्तर','<br>तो कर्ण के वर्ग का मान '+K(cSq)+' है (वर्गमूल की आवश्यकता नहीं)।')
      ], shortcut:'मूल की ज़रूरत नहीं: '+K(POW(a,2)+' + '+POW(b,2)+' = '+cSq)+'।', hint:'प्रश्न कर्ण का वर्ग पूछता है, तो बस दोनों भुजाओं के वर्ग जोड़ो।' }
    );
  };
})();
