/* tier10 - Template 29: cb_make_d (Make Perfect Cube by Division)
   buildCbMakeDSolution(num,divisor,root) -> num / divisor = root^3 */
(function(){
  var SB=window.SB; if(!SB) return;
  var K=SB.K,CRT=SB.CRT,POW=SB.POW,T=SB.T,D=SB.D,step=SB.step,S=SB.S;

  window.buildCbMakeDSolution=function(num,divisor,root){
    var cube=root*root*root;
    return S(
      { steps:[
        step('Step 1 - Understand','<br>To make a perfect cube by dividing, remove the leftover factor that does not complete a group of three equal numbers.'),
        step('Step 2 - Factorize','<br>'+K(num+' = '+root+T+root+T+root+T+divisor+' = '+POW(root,'3')+T+divisor)+'. The '+K(POW(root,'3'))+' part is a perfect cube and '+K(divisor)+' is the leftover.'),
        step('Step 3 - Divide out the leftover','<br>'+K(num+D+divisor+' = '+POW(root,'3')+' = '+cube)+'.'),
        step('Step 4 - Result','<br>'+K(cube)+' is a perfect cube and '+K(CRT(cube)+' = '+root)+'.')
      ], shortcut:K(num+D+divisor+' = '+cube)+', a perfect cube with cube root '+K(root)+'.', hint:'Drop the factor that is not part of a triple of equal numbers.' },
      { steps:[
        step('Step 1 - Samjho','<br>Divide karke perfect cube banane ke liye, wo leftover factor hatao jo teen barabar numbers ka group poora nahi karta.'),
        step('Step 2 - Factorize karo','<br>'+K(num+' = '+root+T+root+T+root+T+divisor+' = '+POW(root,'3')+T+divisor)+'. '+K(POW(root,'3'))+' perfect cube hai aur '+K(divisor)+' leftover hai.'),
        step('Step 3 - Leftover ko divide karo','<br>'+K(num+D+divisor+' = '+POW(root,'3')+' = '+cube)+'.'),
        step('Step 4 - Result','<br>'+K(cube)+' perfect cube hai aur '+K(CRT(cube)+' = '+root)+'.')
      ], shortcut:K(num+D+divisor+' = '+cube)+', perfect cube jiska cube root '+K(root)+' hai.', hint:'Wo factor hatao jo teen barabar numbers ke group ka hissa nahi hai.' },
      { steps:[
        step('चरण 1 - समझो','<br>भाग देकर पूर्ण घन बनाने के लिए, वह बचा हुआ गुणनखंड हटाओ जो तीन बराबर संख्याओं का समूह पूरा नहीं करता।'),
        step('चरण 2 - गुणनखंड करो','<br>'+K(num+' = '+root+T+root+T+root+T+divisor+' = '+POW(root,'3')+T+divisor)+'। '+K(POW(root,'3'))+' पूर्ण घन है और '+K(divisor)+' बचा हुआ है।'),
        step('चरण 3 - बचे हुए को भाग दो','<br>'+K(num+D+divisor+' = '+POW(root,'3')+' = '+cube)+'।'),
        step('चरण 4 - परिणाम','<br>'+K(cube)+' पूर्ण घन है और '+K(CRT(cube)+' = '+root)+'।')
      ], shortcut:K(num+D+divisor+' = '+cube)+', पूर्ण घन जिसका घनमूल '+K(root)+' है।', hint:'वह गुणनखंड हटाओ जो तीन बराबर संख्याओं के समूह का हिस्सा नहीं है।' }
    );
  };
})();
