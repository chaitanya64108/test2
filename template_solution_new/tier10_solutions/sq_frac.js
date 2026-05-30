/* tier10 - Template 6: sq_frac (Fraction Square Root)
   buildSqFracSolution(sqN,sqD,solAns,n,d), V1(n,d,sqN,sqD,solAns), V2(a,b,c,dd,solAns), V3(sn,sd,sqN,sqD,solAns), V4(n,d,sqN,sqD,solAns), V5(a,b,c,d,solAns) */
(function(){
  var SB=window.SB; if(!SB) return;
  var K=SB.K,RT=SB.RT,FR=SB.FR,POW=SB.POW,T=SB.T,step=SB.step,S=SB.S;
  function fr(s){ var p=String(s).split('/'); return p.length===2?FR(p[0].trim(),p[1].trim()):String(s); }

  window.buildSqFracSolution=function(sqN,sqD,solAns,n,d){
    var simp=(String(n)+'/'+String(d))!==String(solAns);
    var chain=RT(FR(sqN,sqD))+' = '+FR(RT(sqN),RT(sqD))+' = '+FR(n,d)+(simp?' = '+fr(solAns):'');
    return S(
      { steps:[
        step('Step 1 - Understand','<br>We must find '+K(RT(FR(sqN,sqD)))+'.'),
        step('Step 2 - The rule for fractions','<br>The square root of a fraction = square root of the top over square root of the bottom: '+K(RT(FR('a','b'))+' = '+FR(RT('a'),RT('b')))+'.'),
        step('Step 3 - Apply it','<br>'+K(chain)+'.'),
        step('Step 4 - Final answer','<br>'+K(fr(solAns))+'.')
      ], shortcut:K(RT(FR(sqN,sqD))+' = '+fr(solAns))+'.', hint:'$\\sqrt{\\frac{top}{bottom}} = \\frac{\\sqrt{top}}{\\sqrt{bottom}}$.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(RT(FR(sqN,sqD)))+' nikaalna hai.'),
        step('Step 2 - Fraction ka rule','<br>Bhinn ka square root = upar ka root bata niche ka root: '+K(RT(FR('a','b'))+' = '+FR(RT('a'),RT('b')))+'.'),
        step('Step 3 - Lagao','<br>'+K(chain)+'.'),
        step('Step 4 - Final answer','<br>'+K(fr(solAns))+'.')
      ], shortcut:K(RT(FR(sqN,sqD))+' = '+fr(solAns))+'.', hint:'Upar aur niche ka root alag-alag lo.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(RT(FR(sqN,sqD)))+' निकालना है।'),
        step('चरण 2 - भिन्न का नियम','<br>भिन्न का वर्गमूल = अंश का मूल बटा हर का मूल: '+K(RT(FR('a','b'))+' = '+FR(RT('a'),RT('b')))+'।'),
        step('चरण 3 - लगाओ','<br>'+K(chain)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(fr(solAns))+'।')
      ], shortcut:K(RT(FR(sqN,sqD))+' = '+fr(solAns))+'।', hint:'अंश और हर का मूल अलग-अलग लो।' }
    );
  };

  window.buildSqFracV1Solution=function(n,d,sqN,sqD,solAns){
    var calc=POW('('+FR(n,d)+')','2')+' = '+FR(POW(n,'2'),POW(d,'2'))+' = '+FR(sqN,sqD);
    return S(
      { steps:[
        step('Step 1 - Understand','<br>We need the fraction whose square root is '+K(FR(n,d))+'.'),
        step('Step 2 - Reverse the square root','<br>To undo a square root, we square. So we square '+K(FR(n,d))+'.'),
        step('Step 3 - Square top and bottom','<br>'+K(calc)+'.'),
        step('Step 4 - Final answer','<br>'+K(FR(sqN,sqD))+'.')
      ], shortcut:'Square it: '+K(FR(n,d)+' \\to '+FR(sqN,sqD))+'.', hint:'Squaring is the opposite of square root.' },
      { steps:[
        step('Step 1 - Samjho','<br>Woh bhinn chahiye jiska square root '+K(FR(n,d))+' hai.'),
        step('Step 2 - Ulta karo','<br>Square root ko undo karne ke liye square karo. Toh '+K(FR(n,d))+' ko square karo.'),
        step('Step 3 - Upar-niche square karo','<br>'+K(calc)+'.'),
        step('Step 4 - Final answer','<br>'+K(FR(sqN,sqD))+'.')
      ], shortcut:'Square karo: '+K(FR(n,d)+' \\to '+FR(sqN,sqD))+'.', hint:'Square karna square root ka ulta hai.' },
      { steps:[
        step('चरण 1 - समझो','<br>वह भिन्न चाहिए जिसका वर्गमूल '+K(FR(n,d))+' है।'),
        step('चरण 2 - उल्टा करो','<br>वर्गमूल को उल्टा करने के लिए वर्ग करो। तो '+K(FR(n,d))+' का वर्ग करो।'),
        step('चरण 3 - अंश-हर का वर्ग','<br>'+K(calc)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(FR(sqN,sqD))+'।')
      ], shortcut:'वर्ग करो: '+K(FR(n,d)+' \\to '+FR(sqN,sqD))+'।', hint:'वर्ग करना वर्गमूल का उल्टा है।' }
    );
  };

  window.buildSqFracV2Solution=function(a,b,c,dd,solAns){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>We must find '+K(RT(FR(a*a,b*b))+T+RT(FR(c*c,dd*dd)))+'.'),
        step('Step 2 - Solve each root','<br>'+K(RT(FR(a*a,b*b))+' = '+FR(a,b))+' and '+K(RT(FR(c*c,dd*dd))+' = '+FR(c,dd))+'.'),
        step('Step 3 - Multiply the fractions','<br>'+K(FR(a,b)+T+FR(c,dd)+' = '+FR(a*c,b*dd))+'  (top'+T+'top, bottom'+T+'bottom).'),
        step('Step 4 - Final answer','<br>'+K(FR(a*c,b*dd))+'.')
      ], shortcut:K(RT(FR(a*a,b*b))+T+RT(FR(c*c,dd*dd))+' = '+FR(a*c,b*dd))+'.', hint:'Take each square root first, then multiply the fractions.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(RT(FR(a*a,b*b))+T+RT(FR(c*c,dd*dd)))+' nikaalna hai.'),
        step('Step 2 - Har root solve karo','<br>'+K(RT(FR(a*a,b*b))+' = '+FR(a,b))+' aur '+K(RT(FR(c*c,dd*dd))+' = '+FR(c,dd))+'.'),
        step('Step 3 - Bhinn guna karo','<br>'+K(FR(a,b)+T+FR(c,dd)+' = '+FR(a*c,b*dd))+'  (upar'+T+'upar, niche'+T+'niche).'),
        step('Step 4 - Final answer','<br>'+K(FR(a*c,b*dd))+'.')
      ], shortcut:K(RT(FR(a*a,b*b))+T+RT(FR(c*c,dd*dd))+' = '+FR(a*c,b*dd))+'.', hint:'Pehle har square root nikaalo, phir bhinn guna karo.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(RT(FR(a*a,b*b))+T+RT(FR(c*c,dd*dd)))+' निकालना है।'),
        step('चरण 2 - हर मूल हल करो','<br>'+K(RT(FR(a*a,b*b))+' = '+FR(a,b))+' और '+K(RT(FR(c*c,dd*dd))+' = '+FR(c,dd))+'।'),
        step('चरण 3 - भिन्न का गुणा','<br>'+K(FR(a,b)+T+FR(c,dd)+' = '+FR(a*c,b*dd))+'  (अंश'+T+'अंश, हर'+T+'हर)।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(FR(a*c,b*dd))+'।')
      ], shortcut:K(RT(FR(a*a,b*b))+T+RT(FR(c*c,dd*dd))+' = '+FR(a*c,b*dd))+'।', hint:'पहले हर वर्गमूल निकालो, फिर भिन्न का गुणा करो।' }
    );
  };

  window.buildSqFracV3Solution=function(sn,sd,sqN,sqD,solAns){
    var chain=RT(FR(sqN,sqD))+' = '+FR(RT(sqN),RT(sqD))+' = '+FR(2*sn,2*sd)+' = '+FR(sn,sd);
    return S(
      { steps:[
        step('Step 1 - Understand','<br>We must simplify '+K(RT(FR(sqN,sqD)))+'.'),
        step('Step 2 - Root of top and bottom','<br>'+K(RT(FR(sqN,sqD))+' = '+FR(RT(sqN),RT(sqD))+' = '+FR(2*sn,2*sd))+'.'),
        step('Step 3 - Cancel the common factor','<br>Both '+K(2*sn)+' and '+K(2*sd)+' share a 2, so '+K(FR(2*sn,2*sd)+' = '+FR(sn,sd))+'.'),
        step('Step 4 - Final answer','<br>'+K(FR(sn,sd))+'.')
      ], shortcut:K(chain)+'.', hint:'Root the top and bottom, then cancel common factors.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(RT(FR(sqN,sqD)))+' ko simplify karna hai.'),
        step('Step 2 - Upar-niche ka root','<br>'+K(RT(FR(sqN,sqD))+' = '+FR(RT(sqN),RT(sqD))+' = '+FR(2*sn,2*sd))+'.'),
        step('Step 3 - Common factor cancel karo','<br>'+K(2*sn)+' aur '+K(2*sd)+' dono me 2 hai, toh '+K(FR(2*sn,2*sd)+' = '+FR(sn,sd))+'.'),
        step('Step 4 - Final answer','<br>'+K(FR(sn,sd))+'.')
      ], shortcut:K(chain)+'.', hint:'Upar-niche ka root lo, phir common factor cancel karo.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(RT(FR(sqN,sqD)))+' को सरल करना है।'),
        step('चरण 2 - अंश-हर का मूल','<br>'+K(RT(FR(sqN,sqD))+' = '+FR(RT(sqN),RT(sqD))+' = '+FR(2*sn,2*sd))+'।'),
        step('चरण 3 - उभयनिष्ठ गुणनखंड रद्द करो','<br>'+K(2*sn)+' और '+K(2*sd)+' दोनों में 2 है, तो '+K(FR(2*sn,2*sd)+' = '+FR(sn,sd))+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(FR(sn,sd))+'।')
      ], shortcut:K(chain)+'।', hint:'अंश-हर का मूल लो, फिर उभयनिष्ठ गुणनखंड रद्द करो।' }
    );
  };

  window.buildSqFracV4Solution=function(n,d,sqN,sqD,solAns){
    var calc=POW('('+RT(FR(sqN,sqD))+')','2')+' = '+FR(sqN,sqD);
    return S(
      { steps:[
        step('Step 1 - Understand','<br>We square the value '+K(RT(FR(sqN,sqD)))+'.'),
        step('Step 2 - Key idea','<br>Squaring is the opposite of square root, so they cancel each other out.'),
        step('Step 3 - Result','<br>'+K(calc)+'.'),
        step('Step 4 - Final answer','<br>'+K(FR(sqN,sqD))+'.')
      ], shortcut:'Square and root cancel: answer '+K('= '+FR(sqN,sqD))+'.', hint:'$(\\sqrt{x})^{2} = x$.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(RT(FR(sqN,sqD)))+' ko square karna hai.'),
        step('Step 2 - Main idea','<br>Square karna square root ka ulta hai, toh dono cancel ho jaate hain.'),
        step('Step 3 - Result','<br>'+K(calc)+'.'),
        step('Step 4 - Final answer','<br>'+K(FR(sqN,sqD))+'.')
      ], shortcut:'Square aur root cancel: answer '+K('= '+FR(sqN,sqD))+'.', hint:'$(\\sqrt{x})^{2} = x$.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(RT(FR(sqN,sqD)))+' का वर्ग करना है।'),
        step('चरण 2 - मुख्य विचार','<br>वर्ग करना वर्गमूल का उल्टा है, तो दोनों रद्द हो जाते हैं।'),
        step('चरण 3 - परिणाम','<br>'+K(calc)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>'+K(FR(sqN,sqD))+'।')
      ], shortcut:'वर्ग और मूल रद्द: उत्तर '+K('= '+FR(sqN,sqD))+'।', hint:'$(\\sqrt{x})^{2} = x$.' }
    );
  };

  window.buildSqFracV5Solution=function(a,b,c,d,solAns){
    var ad=a*d, bc=b*c, sign=(ad>bc?' > ':' < ');
    return S(
      { steps:[
        step('Step 1 - Understand','<br>We compare '+K(RT(FR(a*a,b*b)))+' and '+K(RT(FR(c*c,d*d)))+'.'),
        step('Step 2 - Solve each root','<br>'+K(RT(FR(a*a,b*b))+' = '+FR(a,b))+' and '+K(RT(FR(c*c,d*d))+' = '+FR(c,d))+'.'),
        step('Step 3 - Compare by cross-multiplying','<br>Compare '+K(FR(a,b))+' and '+K(FR(c,d))+': '+K('('+a+T+d+')'+sign+'('+b+T+c+')')+', i.e. '+K(ad+sign+bc)+'.'),
        step('Step 4 - Final answer','<br>The larger fraction is '+K(fr(solAns))+'.')
      ], shortcut:'Cross-multiply: larger fraction = '+K(fr(solAns))+'.', hint:'To compare two fractions, cross-multiply.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(RT(FR(a*a,b*b)))+' aur '+K(RT(FR(c*c,d*d)))+' compare karna hai.'),
        step('Step 2 - Har root solve karo','<br>'+K(RT(FR(a*a,b*b))+' = '+FR(a,b))+' aur '+K(RT(FR(c*c,d*d))+' = '+FR(c,d))+'.'),
        step('Step 3 - Cross-multiply karke compare','<br>'+K(FR(a,b))+' aur '+K(FR(c,d))+': '+K('('+a+T+d+')'+sign+'('+b+T+c+')')+', yaani '+K(ad+sign+bc)+'.'),
        step('Step 4 - Final answer','<br>Badi bhinn hai '+K(fr(solAns))+'.')
      ], shortcut:'Cross-multiply: badi bhinn = '+K(fr(solAns))+'.', hint:'Do bhinn compare karne ke liye cross-multiply karo.' },
      { steps:[
        step('चरण 1 - समझो','<br>'+K(RT(FR(a*a,b*b)))+' और '+K(RT(FR(c*c,d*d)))+' की तुलना करनी है।'),
        step('चरण 2 - हर मूल हल करो','<br>'+K(RT(FR(a*a,b*b))+' = '+FR(a,b))+' और '+K(RT(FR(c*c,d*d))+' = '+FR(c,d))+'।'),
        step('चरण 3 - तिरछा गुणा करके तुलना','<br>'+K(FR(a,b))+' और '+K(FR(c,d))+': '+K('('+a+T+d+')'+sign+'('+b+T+c+')')+', अर्थात् '+K(ad+sign+bc)+'।'),
        step('चरण 4 - अंतिम उत्तर','<br>बड़ी भिन्न है '+K(fr(solAns))+'।')
      ], shortcut:'तिरछा गुणा: बड़ी भिन्न = '+K(fr(solAns))+'।', hint:'दो भिन्न की तुलना के लिए तिरछा गुणा (cross-multiply) करो।' }
    );
  };
})();
