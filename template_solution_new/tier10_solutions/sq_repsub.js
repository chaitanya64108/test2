/* tier10 - Template 4: sq_repsub (Repeated Subtraction)
   buildSqRepsubSolution(sq,r), V1(r,ans), V2(r,sq), V3(r,sq,step,ans), V4(r,sq,step,ans), V5(a,b,sa,sb,diff) */
(function(){
  var SB=window.SB; if(!SB) return;
  var K=SB.K,RT=SB.RT,POW=SB.POW,T=SB.T,step=SB.step,S=SB.S;

  window.buildSqRepsubSolution=function(sq,r){
    var odds='1 + 3 + 5 + ... + '+(2*r-1);
    return S(
      { steps:[
        step('Step 1 - Understand','<br>To find '+K(RT(sq))+' by repeated subtraction, we subtract the odd numbers 1, 3, 5, ... one by one until we reach 0, and count how many subtractions we did.'),
        step('Step 2 - Key idea','<br>The sum of the first $k$ odd numbers is always $k^{2}$: '+K('1 + 3 + 5 + ... + (2k-1) = '+POW('k','2'))+'.'),
        step('Step 3 - Apply it','<br>Here '+K(sq+' = '+POW(r,'2'))+', so '+K(odds+' = '+sq)+'. That took '+K(r)+' steps.'),
        step('Step 4 - Final answer','<br>Number of steps '+K('= '+r)+'.')
      ], shortcut:'Steps needed '+K('= '+RT(sq)+' = '+r)+'.', hint:'Sum of the first $k$ odd numbers = '+K(POW('k','2'))+', so steps = the square root.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(RT(sq))+' ko repeated subtraction se nikaalne ke liye hum odd numbers 1, 3, 5, ... ek-ek karke 0 aane tak ghatate hain, aur ginte hain kitni baar ghataya.'),
        step('Step 2 - Main idea','<br>Pehle $k$ odd numbers ka sum hamesha $k^{2}$ hota hai: '+K('1 + 3 + 5 + ... + (2k-1) = '+POW('k','2'))+'.'),
        step('Step 3 - Lagao','<br>Yahan '+K(sq+' = '+POW(r,'2'))+', toh '+K(odds+' = '+sq)+'. Isme '+K(r)+' steps lage.'),
        step('Step 4 - Final answer','<br>Steps ki sankhya '+K('= '+r)+'.')
      ], shortcut:'Steps chahiye '+K('= '+RT(sq)+' = '+r)+'.', hint:'Pehle $k$ odd numbers ka sum = '+K(POW('k','2'))+', isliye steps = square root.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(RT(sq))+' ko baar-baar ghatav se nikaalne ke liye hum visham sankhyaayein 1, 3, 5, ... ek-ek karke 0 aane tak ghatate hain, aur ginte hain kitni baar.'),
        step('Step 2 - Mukhya vichaar','<br>Pehli $k$ visham sankhyaon ka yog hamesha $k^{2}$ hota hai: '+K('1 + 3 + 5 + ... + (2k-1) = '+POW('k','2'))+'.'),
        step('Step 3 - Lagao','<br>Yahan '+K(sq+' = '+POW(r,'2'))+', to '+K(odds+' = '+sq)+'. Isme '+K(r)+' charan lage.'),
        step('Step 4 - Antim uttar','<br>Charano ki sankhya '+K('= '+r)+'.')
      ], shortcut:'Charan chahiye '+K('= '+RT(sq)+' = '+r)+'.', hint:'Pehli $k$ visham sankhyaon ka yog = '+K(POW('k','2'))+', isliye charan = vargmool.' }
    );
  };

  window.buildSqRepsubV1Solution=function(r,ans){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Subtracting odd numbers reached 0 in exactly '+K(r)+' steps. We must find the original number.'),
        step('Step 2 - Key idea','<br>The number of steps equals the square root, so the number '+K('= '+POW(r,'2'))+'.'),
        step('Step 3 - Calculate','<br>'+K('('+r+T+r+') = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:'Number '+K('= '+POW(r,'2')+' = '+ans)+'.', hint:'Steps = square root, so number = '+K(POW(r,'2'))+'.' },
      { steps:[
        step('Step 1 - Samjho','<br>Odd numbers ghatate hue theek '+K(r)+' steps me 0 aaya. Original number nikaalna hai.'),
        step('Step 2 - Main idea','<br>Steps ki sankhya square root ke barabar hoti hai, toh number '+K('= '+POW(r,'2'))+'.'),
        step('Step 3 - Calculate','<br>'+K('('+r+T+r+') = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:'Number '+K('= '+POW(r,'2')+' = '+ans)+'.', hint:'Steps = square root, isliye number = '+K(POW(r,'2'))+'.' },
      { steps:[
        step('Step 1 - Samjho','<br>Visham sankhyaayein ghatate hue theek '+K(r)+' charan me 0 aaya. Mool sankhya nikaalni hai.'),
        step('Step 2 - Main vichaar','<br>Charano ki sankhya vargmool ke barabar hoti hai, to sankhya '+K('= '+POW(r,'2'))+'.'),
        step('Step 3 - Ganana','<br>'+K('('+r+T+r+') = '+ans)+'.'),
        step('Step 4 - Antim uttar','<br>'+K(ans)+'.')
      ], shortcut:'Sankhya '+K('= '+POW(r,'2')+' = '+ans)+'.', hint:'Charan = vargmool, isliye sankhya = '+K(POW(r,'2'))+'.' }
    );
  };

  window.buildSqRepsubV2Solution=function(r,sq){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>We count how many odd-number subtractions are needed to find '+K(RT(sq))+'.'),
        step('Step 2 - Key idea','<br>Number of steps = the square root, and '+K(sq+' = '+POW(r,'2'))+'.'),
        step('Step 3 - Final answer','<br>'+K(RT(sq)+' = '+r)+', so '+K(r)+' steps.')
      ], shortcut:'Steps '+K('= '+RT(sq)+' = '+r)+'.', hint:'Steps = '+K(RT(sq))+'.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(RT(sq))+' nikaalne ke liye kitne odd-number subtractions chahiye, woh ginna hai.'),
        step('Step 2 - Main idea','<br>Steps ki sankhya = square root, aur '+K(sq+' = '+POW(r,'2'))+'.'),
        step('Step 3 - Final answer','<br>'+K(RT(sq)+' = '+r)+', isliye '+K(r)+' steps.')
      ], shortcut:'Steps '+K('= '+RT(sq)+' = '+r)+'.', hint:'Steps = '+K(RT(sq))+'.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(RT(sq))+' nikaalne ke liye kitne visham-sankhya ghatav chahiye, woh ginna hai.'),
        step('Step 2 - Main vichaar','<br>Charano ki sankhya = vargmool, aur '+K(sq+' = '+POW(r,'2'))+'.'),
        step('Step 3 - Antim uttar','<br>'+K(RT(sq)+' = '+r)+', isliye '+K(r)+' charan.')
      ], shortcut:'Charan '+K('= '+RT(sq)+' = '+r)+'.', hint:'Charan = '+K(RT(sq))+'.' }
    );
  };

  window.buildSqRepsubV3Solution=function(r,sq,stp,ans){
    return S(
      { steps:[
        step('Step 1 - Understand','<br>We must find which odd number is subtracted at step '+K(stp)+'.'),
        step('Step 2 - Key idea','<br>The odd numbers go 1, 3, 5, ...; the $k$-th odd number is '+K('(2k - 1)')+'.'),
        step('Step 3 - Apply it','<br>At step '+K(stp)+': '+K('(2'+T+stp+') - 1 = '+(2*stp)+' - 1 = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(stp)+'-th odd number '+K('= (2'+T+stp+') - 1 = '+ans)+'.', hint:'The $k$-th odd number is '+K('(2k - 1)')+'.' },
      { steps:[
        step('Step 1 - Samjho','<br>Step '+K(stp)+' par kaunsa odd number ghataya jaata hai, woh nikaalna hai.'),
        step('Step 2 - Main idea','<br>Odd numbers hain 1, 3, 5, ...; $k$-va odd number hota hai '+K('(2k - 1)')+'.'),
        step('Step 3 - Lagao','<br>Step '+K(stp)+' par: '+K('(2'+T+stp+') - 1 = '+(2*stp)+' - 1 = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:K(stp)+'-va odd number '+K('= (2'+T+stp+') - 1 = '+ans)+'.', hint:'$k$-va odd number = '+K('(2k - 1)')+'.' },
      { steps:[
        step('Step 1 - Samjho','<br>Charan '+K(stp)+' par kaunsi visham sankhya ghatayi jaati hai, woh nikaalni hai.'),
        step('Step 2 - Main vichaar','<br>Visham sankhyaayein hain 1, 3, 5, ...; $k$-vi visham sankhya hoti hai '+K('(2k - 1)')+'.'),
        step('Step 3 - Lagao','<br>Charan '+K(stp)+' par: '+K('(2'+T+stp+') - 1 = '+(2*stp)+' - 1 = '+ans)+'.'),
        step('Step 4 - Antim uttar','<br>'+K(ans)+'.')
      ], shortcut:K(stp)+'-vi visham sankhya '+K('= (2'+T+stp+') - 1 = '+ans)+'.', hint:'$k$-vi visham sankhya = '+K('(2k - 1)')+'.' }
    );
  };

  window.buildSqRepsubV4Solution=function(r,sq,stp,ans){
    var ss=stp*stp;
    return S(
      { steps:[
        step('Step 1 - Understand','<br>Start with '+K(sq)+' and subtract the first '+K(stp)+' odd numbers; find the remainder.'),
        step('Step 2 - Key idea','<br>The sum of the first '+K(stp)+' odd numbers '+K('= '+POW(stp,'2')+' = '+ss)+'.'),
        step('Step 3 - Subtract','<br>'+K(sq+' - '+ss+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:'Remainder '+K('= '+sq+' - '+POW(stp,'2')+' = '+ans)+'.', hint:'Sum of first $n$ odd numbers = '+K(POW('n','2'))+'.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(sq)+' se shuru karke pehle '+K(stp)+' odd numbers ghatao; remainder nikaalo.'),
        step('Step 2 - Main idea','<br>Pehle '+K(stp)+' odd numbers ka sum '+K('= '+POW(stp,'2')+' = '+ss)+'.'),
        step('Step 3 - Ghatao','<br>'+K(sq+' - '+ss+' = '+ans)+'.'),
        step('Step 4 - Final answer','<br>'+K(ans)+'.')
      ], shortcut:'Remainder '+K('= '+sq+' - '+POW(stp,'2')+' = '+ans)+'.', hint:'Pehle $n$ odd numbers ka sum = '+K(POW('n','2'))+'.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(sq)+' se shuru karke pehli '+K(stp)+' visham sankhyaayein ghatao; shesh nikaalo.'),
        step('Step 2 - Main vichaar','<br>Pehli '+K(stp)+' visham sankhyaon ka yog '+K('= '+POW(stp,'2')+' = '+ss)+'.'),
        step('Step 3 - Ghatao','<br>'+K(sq+' - '+ss+' = '+ans)+'.'),
        step('Step 4 - Antim uttar','<br>'+K(ans)+'.')
      ], shortcut:'Shesh '+K('= '+sq+' - '+POW(stp,'2')+' = '+ans)+'.', hint:'Pehli $n$ visham sankhyaon ka yog = '+K(POW('n','2'))+'.' }
    );
  };

  window.buildSqRepsubV5Solution=function(a,b,sa,sb,diff){
    var big=Math.max(a,b), sml=Math.min(a,b), bigN=big*big, smlN=sml*sml;
    return S(
      { steps:[
        step('Step 1 - Understand','<br>How many more subtraction steps does '+K(RT(bigN))+' need than '+K(RT(smlN))+'?'),
        step('Step 2 - Key idea','<br>The number of steps equals the square root: '+K(RT(bigN)+' = '+big)+' and '+K(RT(smlN)+' = '+sml)+'.'),
        step('Step 3 - Difference','<br>'+K(big+' - '+sml+' = '+diff)+'.'),
        step('Step 4 - Final answer','<br>'+K(diff)+'.')
      ], shortcut:'Extra steps '+K('= '+big+' - '+sml+' = '+diff)+'.', hint:'Steps for a perfect square = its square root.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(RT(bigN))+' ko '+K(RT(smlN))+' se kitne steps zyada chahiye?'),
        step('Step 2 - Main idea','<br>Steps ki sankhya = square root: '+K(RT(bigN)+' = '+big)+' aur '+K(RT(smlN)+' = '+sml)+'.'),
        step('Step 3 - Antar','<br>'+K(big+' - '+sml+' = '+diff)+'.'),
        step('Step 4 - Final answer','<br>'+K(diff)+'.')
      ], shortcut:'Extra steps '+K('= '+big+' - '+sml+' = '+diff)+'.', hint:'Perfect square ke steps = uska square root.' },
      { steps:[
        step('Step 1 - Samjho','<br>'+K(RT(bigN))+' ko '+K(RT(smlN))+' se kitne charan adhik chahiye?'),
        step('Step 2 - Main vichaar','<br>Charano ki sankhya = vargmool: '+K(RT(bigN)+' = '+big)+' aur '+K(RT(smlN)+' = '+sml)+'.'),
        step('Step 3 - Antar','<br>'+K(big+' - '+sml+' = '+diff)+'.'),
        step('Step 4 - Antim uttar','<br>'+K(diff)+'.')
      ], shortcut:'Adhik charan '+K('= '+big+' - '+sml+' = '+diff)+'.', hint:'Poorn varg ke charan = uska vargmool.' }
    );
  };
})();
