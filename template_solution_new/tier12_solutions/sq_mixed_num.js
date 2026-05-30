/* tier12 - Template 46: sq_mixed_num (Fraction / Mixed Number Root)
   buildMixedSimplifySolution(ps,qs) buildMixedDecimalSolution(ps,qs,ans)
   buildMixedFindXSolution(ps,qs,num,den) buildMixedSumSolution(a,b)
   buildMixedCompareSolution(p1,p2) */
(function(){
  var SB=window.SB; if(!SB) return;
  var K=SB.K,RT=SB.RT,FR=SB.FR,POW=SB.POW,T=SB.T,D=SB.D,step=SB.step,S=SB.S;

  window.buildMixedSimplifySolution=function(ps,qs){
    var num=ps*ps,den=qs*qs;
    return S(
      { steps:[
        step('Step 1 - Split the root over the fraction','<br>'+K(RT(FR(num,den))+' = '+FR(RT(num),RT(den)))+', because the root of a fraction is the root of the top over the root of the bottom.'),
        step('Step 2 - Take each root','<br>'+K(RT(num)+' = '+ps)+' and '+K(RT(den)+' = '+qs)+'.'),
        step('Step 3 - Answer','<br>'+K(RT(FR(num,den))+' = '+FR(ps,qs))+'.')
      ], shortcut:K(RT(FR(num,den))+' = '+FR(ps,qs))+'.', hint:'Take the square root of the numerator and the denominator separately.' },
      { steps:[
        step('Step 1 - Root ko fraction par tod do','<br>'+K(RT(FR(num,den))+' = '+FR(RT(num),RT(den)))+', kyunki fraction ka root = upar ka root bata neeche ka root.'),
        step('Step 2 - Har root nikalo','<br>'+K(RT(num)+' = '+ps)+' aur '+K(RT(den)+' = '+qs)+'.'),
        step('Step 3 - Answer','<br>'+K(RT(FR(num,den))+' = '+FR(ps,qs))+'.')
      ], shortcut:K(RT(FR(num,den))+' = '+FR(ps,qs))+'.', hint:'Numerator aur denominator ka square root alag-alag lo.' },
      { steps:[
        step('चरण 1 - मूल को भिन्न पर बाँटो','<br>'+K(RT(FR(num,den))+' = '+FR(RT(num),RT(den)))+', क्योंकि भिन्न का मूल = ऊपर का मूल बटा नीचे का मूल।'),
        step('चरण 2 - प्रत्येक मूल निकालो','<br>'+K(RT(num)+' = '+ps)+' और '+K(RT(den)+' = '+qs)+'।'),
        step('चरण 3 - उत्तर','<br>'+K(RT(FR(num,den))+' = '+FR(ps,qs))+'।')
      ], shortcut:K(RT(FR(num,den))+' = '+FR(ps,qs))+'।', hint:'अंश और हर का वर्गमूल अलग-अलग लो।' }
    );
  };

  window.buildMixedDecimalSolution=function(ps,qs,ans){
    var num=ps*ps,den=qs*qs;
    return S(
      { steps:[
        step('Step 1 - Simplify the root','<br>'+K(RT(FR(num,den))+' = '+FR(ps,qs))+', taking the root of the top and bottom.'),
        step('Step 2 - Divide to get a decimal','<br>'+K(FR(ps,qs)+' = '+ps+D+qs+' = '+ans)+'.'),
        step('Step 3 - Answer','<br>So '+K(RT(FR(num,den))+' = '+ans)+'.')
      ], shortcut:K(FR(ps,qs)+' = '+ans)+'.', hint:'Simplify first, then divide the top by the bottom.' },
      { steps:[
        step('Step 1 - Root simplify karo','<br>'+K(RT(FR(num,den))+' = '+FR(ps,qs))+', upar aur neeche ka root lekar.'),
        step('Step 2 - Decimal ke liye divide karo','<br>'+K(FR(ps,qs)+' = '+ps+D+qs+' = '+ans)+'.'),
        step('Step 3 - Answer','<br>Toh '+K(RT(FR(num,den))+' = '+ans)+'.')
      ], shortcut:K(FR(ps,qs)+' = '+ans)+'.', hint:'Pehle simplify karo, fir upar ko neeche se divide karo.' },
      { steps:[
        step('चरण 1 - मूल सरल करो','<br>'+K(RT(FR(num,den))+' = '+FR(ps,qs))+', ऊपर और नीचे का मूल लेकर।'),
        step('चरण 2 - दशमलव के लिए भाग दो','<br>'+K(FR(ps,qs)+' = '+ps+D+qs+' = '+ans)+'।'),
        step('चरण 3 - उत्तर','<br>तो '+K(RT(FR(num,den))+' = '+ans)+'।')
      ], shortcut:K(FR(ps,qs)+' = '+ans)+'।', hint:'पहले सरल करो, फिर अंश को हर से भाग दो।' }
    );
  };

  window.buildMixedFindXSolution=function(ps,qs,num,den){
    return S(
      { steps:[
        step('Step 1 - Undo the square root','<br>If '+K(RT('x')+' = '+FR(ps,qs))+', square both sides to remove the root.'),
        step('Step 2 - Square the top and bottom','<br>'+K('x = '+FR(POW(ps,2),POW(qs,2))+' = '+FR(num,den))+'.'),
        step('Step 3 - Answer','<br>So '+K('x = '+FR(num,den))+'.')
      ], shortcut:'Square both sides: '+K('x = '+FR(num,den))+'.', hint:'Squaring is the opposite of taking a square root.' },
      { steps:[
        step('Step 1 - Square root ko undo karo','<br>Agar '+K(RT('x')+' = '+FR(ps,qs))+', to dono sides ko square karo taaki root hat jaaye.'),
        step('Step 2 - Upar aur neeche square karo','<br>'+K('x = '+FR(POW(ps,2),POW(qs,2))+' = '+FR(num,den))+'.'),
        step('Step 3 - Answer','<br>Toh '+K('x = '+FR(num,den))+'.')
      ], shortcut:'Dono sides square karo: '+K('x = '+FR(num,den))+'.', hint:'Squaring, square root ka ulta hai.' },
      { steps:[
        step('चरण 1 - वर्गमूल को पलटो','<br>यदि '+K(RT('x')+' = '+FR(ps,qs))+', तो दोनों पक्षों का वर्ग करो ताकि मूल हट जाए।'),
        step('चरण 2 - ऊपर और नीचे का वर्ग करो','<br>'+K('x = '+FR(POW(ps,2),POW(qs,2))+' = '+FR(num,den))+'।'),
        step('चरण 3 - उत्तर','<br>तो '+K('x = '+FR(num,den))+'।')
      ], shortcut:'दोनों पक्षों का वर्ग करो: '+K('x = '+FR(num,den))+'।', hint:'वर्ग करना, वर्गमूल का उल्टा है।' }
    );
  };

  window.buildMixedSumSolution=function(a,b){
    var na=a*a,nb=b*b;
    return S(
      { steps:[
        step('Step 1 - Simplify each root','<br>'+K(RT(FR(na,4))+' = '+FR(a,2))+' and '+K(RT(FR(nb,4))+' = '+FR(b,2))+'.'),
        step('Step 2 - Add over the common bottom','<br>Both have denominator 2, so '+K(FR(a,2)+' + '+FR(b,2)+' = '+FR(a+' + '+b,2)+' = '+FR(a+b,2))+'.'),
        step('Step 3 - Answer','<br>'+K(RT(FR(na,4))+' + '+RT(FR(nb,4))+' = '+FR(a+b,2))+'.')
      ], shortcut:'Same bottom, so just add the tops: '+K(FR(a+b,2))+'.', hint:'Simplify each square root first, then add the fractions.' },
      { steps:[
        step('Step 1 - Har root simplify karo','<br>'+K(RT(FR(na,4))+' = '+FR(a,2))+' aur '+K(RT(FR(nb,4))+' = '+FR(b,2))+'.'),
        step('Step 2 - Common neeche par jodo','<br>Dono ka denominator 2 hai, toh '+K(FR(a,2)+' + '+FR(b,2)+' = '+FR(a+' + '+b,2)+' = '+FR(a+b,2))+'.'),
        step('Step 3 - Answer','<br>'+K(RT(FR(na,4))+' + '+RT(FR(nb,4))+' = '+FR(a+b,2))+'.')
      ], shortcut:'Same neeche, toh upar wale jodo: '+K(FR(a+b,2))+'.', hint:'Pehle har square root simplify karo, fir fractions jodo.' },
      { steps:[
        step('चरण 1 - प्रत्येक मूल सरल करो','<br>'+K(RT(FR(na,4))+' = '+FR(a,2))+' और '+K(RT(FR(nb,4))+' = '+FR(b,2))+'।'),
        step('चरण 2 - समान हर पर जोड़ो','<br>दोनों का हर 2 है, तो '+K(FR(a,2)+' + '+FR(b,2)+' = '+FR(a+' + '+b,2)+' = '+FR(a+b,2))+'।'),
        step('चरण 3 - उत्तर','<br>'+K(RT(FR(na,4))+' + '+RT(FR(nb,4))+' = '+FR(a+b,2))+'।')
      ], shortcut:'समान हर, तो बस अंश जोड़ो: '+K(FR(a+b,2))+'।', hint:'पहले प्रत्येक वर्गमूल सरल करो, फिर भिन्न जोड़ो।' }
    );
  };

  window.buildMixedCompareSolution=function(p1,p2){
    var n1=p1*p1,n2=p2*p2,bigP=p1>p2?p1:p2;
    var bigExpr=RT(FR(bigP*bigP,4));
    return S(
      { steps:[
        step('Step 1 - Simplify both roots','<br>'+K(RT(FR(n1,4))+' = '+FR(p1,2))+' and '+K(RT(FR(n2,4))+' = '+FR(p2,2))+'.'),
        step('Step 2 - Compare the tops','<br>Both fractions have the same bottom 2, so the larger top wins. Here '+K(p1)+' and '+K(p2)+' give '+K(bigP)+' as the larger top.'),
        step('Step 3 - Answer','<br>So '+K(bigExpr)+' is the greater value.')
      ], shortcut:'Same bottom, bigger top wins: '+K(bigExpr)+'.', hint:'Simplify both, then compare the numerators since the bottoms match.' },
      { steps:[
        step('Step 1 - Dono roots simplify karo','<br>'+K(RT(FR(n1,4))+' = '+FR(p1,2))+' aur '+K(RT(FR(n2,4))+' = '+FR(p2,2))+'.'),
        step('Step 2 - Upar wale compare karo','<br>Dono fractions ka neeche same 2 hai, toh bada upar wala jeetega. Yahaan '+K(p1)+' aur '+K(p2)+' me bada '+K(bigP)+' hai.'),
        step('Step 3 - Answer','<br>Toh '+K(bigExpr)+' badi value hai.')
      ], shortcut:'Same neeche, bada upar jeetega: '+K(bigExpr)+'.', hint:'Dono simplify karo, fir numerators compare karo kyunki neeche same hai.' },
      { steps:[
        step('चरण 1 - दोनों मूल सरल करो','<br>'+K(RT(FR(n1,4))+' = '+FR(p1,2))+' और '+K(RT(FR(n2,4))+' = '+FR(p2,2))+'।'),
        step('चरण 2 - अंशों की तुलना करो','<br>दोनों भिन्नों का हर समान 2 है, तो बड़ा अंश जीतेगा। यहाँ '+K(p1)+' और '+K(p2)+' में बड़ा '+K(bigP)+' है।'),
        step('चरण 3 - उत्तर','<br>तो '+K(bigExpr)+' बड़ा मान है।')
      ], shortcut:'समान हर, बड़ा अंश जीतेगा: '+K(bigExpr)+'।', hint:'दोनों सरल करो, फिर अंशों की तुलना करो क्योंकि हर समान है।' }
    );
  };
})();
