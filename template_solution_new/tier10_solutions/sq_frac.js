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
        step('Step 1 - Samjho','<br>'+K(RT(FR(sqN,sqD)))+' gyaat karna hai.'),
        step('Step 2 - Bhinn ka niyam','<br>Bhinn ka vargmool = ansh ka mool bata har ka mool: '+K(RT(FR('a','b'))+' = '+FR(RT('a'),RT('b')))+'.'),
        step('Step 3 - Lagao','<br>'+K(chain)+'.'),
        step('Step 4 - Antim uttar','<br>'+K(fr(solAns))+'.')
      ], shortcut:K(RT(FR(sqN,sqD))+' = '+fr(solAns))+'.', hint:'Ansh aur har ka mool alag-alag lo.' }
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
        step('Step 1 - Samjho','<br>Woh bhinn chahiye jiska vargmool '+K(FR(n,d))+' hai.'),
        step('Step 2 - Ulta karo','<br>Vargmool ko ulta karne ke liye varg karo. Toh '+K(FR(n,d))+' ka varg karo.'),
        step('Step 3 - Ansh-har ka varg','<br>'+K(calc)+'.'),
        step('Step 4 - Antim uttar','<br>'+K(FR(sqN,sqD))+'.')
      ], shortcut:'Varg karo: '+K(FR(n,d)+' \\to '+FR(sqN,sqD))+'.', hint:'Varg karna vargmool ka ulta hai.' }
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
        step('Step 1 - Samjho','<br>'+K(RT(FR(a*a,b*b))+T+RT(FR(c*c,dd*dd)))+' gyaat karna hai.'),
        step('Step 2 - Har mool hal karo','<br>'+K(RT(FR(a*a,b*b))+' = '+FR(a,b))+' aur '+K(RT(FR(c*c,dd*dd))+' = '+FR(c,dd))+'.'),
        step('Step 3 - Bhinn ka guna','<br>'+K(FR(a,b)+T+FR(c,dd)+' = '+FR(a*c,b*dd))+'  (ansh'+T+'ansh, har'+T+'har).'),
        step('Step 4 - Antim uttar','<br>'+K(FR(a*c,b*dd))+'.')
      ], shortcut:K(RT(FR(a*a,b*b))+T+RT(FR(c*c,dd*dd))+' = '+FR(a*c,b*dd))+'.', hint:'Pehle har vargmool nikaalo, phir bhinn ka guna karo.' }
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
        step('Step 1 - Samjho','<br>'+K(RT(FR(sqN,sqD)))+' ko saral karna hai.'),
        step('Step 2 - Ansh-har ka mool','<br>'+K(RT(FR(sqN,sqD))+' = '+FR(RT(sqN),RT(sqD))+' = '+FR(2*sn,2*sd))+'.'),
        step('Step 3 - Ubhaynishth gunank cancel','<br>'+K(2*sn)+' aur '+K(2*sd)+' dono me 2 hai, to '+K(FR(2*sn,2*sd)+' = '+FR(sn,sd))+'.'),
        step('Step 4 - Antim uttar','<br>'+K(FR(sn,sd))+'.')
      ], shortcut:K(chain)+'.', hint:'Ansh-har ka mool lo, phir ubhaynishth gunank cancel karo.' }
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
        step('Step 1 - Samjho','<br>'+K(RT(FR(sqN,sqD)))+' ka varg karna hai.'),
        step('Step 2 - Main vichaar','<br>Varg karna vargmool ka ulta hai, to dono cancel ho jaate hain.'),
        step('Step 3 - Parinaam','<br>'+K(calc)+'.'),
        step('Step 4 - Antim uttar','<br>'+K(FR(sqN,sqD))+'.')
      ], shortcut:'Varg aur mool cancel: uttar '+K('= '+FR(sqN,sqD))+'.', hint:'$(\\sqrt{x})^{2} = x$.' }
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
        step('Step 1 - Samjho','<br>'+K(RT(FR(a*a,b*b)))+' aur '+K(RT(FR(c*c,d*d)))+' ki tulna karni hai.'),
        step('Step 2 - Har mool hal karo','<br>'+K(RT(FR(a*a,b*b))+' = '+FR(a,b))+' aur '+K(RT(FR(c*c,d*d))+' = '+FR(c,d))+'.'),
        step('Step 3 - Tirchha guna karke tulna','<br>'+K(FR(a,b))+' aur '+K(FR(c,d))+': '+K('('+a+T+d+')'+sign+'('+b+T+c+')')+', arthaat '+K(ad+sign+bc)+'.'),
        step('Step 4 - Antim uttar','<br>Badi bhinn hai '+K(fr(solAns))+'.')
      ], shortcut:'Tirchha guna: badi bhinn = '+K(fr(solAns))+'.', hint:'Do bhinn ki tulna ke liye tirchha guna (cross-multiply) karo.' }
    );
  };
})();
