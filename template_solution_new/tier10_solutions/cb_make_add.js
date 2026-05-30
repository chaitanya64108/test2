/* tier10 - Template 30: cb_make_add (Make Perfect Cube by Addition)
   buildCbMakeAddSolution(num,add,cube,root) -> num + add = cube = root^3 */
(function(){
  var SB=window.SB; if(!SB) return;
  var K=SB.K,CRT=SB.CRT,POW=SB.POW,step=SB.step,S=SB.S;

  window.buildCbMakeAddSolution=function(num,add,cube,root){
    var prev=(root-1)*(root-1)*(root-1);
    return S(
      { steps:[
        step('Step 1 - Understand','<br>To make a perfect cube by adding, find the smallest perfect cube just above the number, then add the gap.'),
        step('Step 2 - Find the cube just above','<br>'+K(POW(root-1,'3')+' = '+prev)+' is below and '+K(POW(root,'3')+' = '+cube)+' is the next perfect cube above '+K(num)+'.'),
        step('Step 3 - Find the gap','<br>'+K(cube+' - '+num+' = '+add)+'.'),
        step('Step 4 - Check','<br>'+K(num+' + '+add+' = '+cube+' = '+POW(root,'3'))+'.')
      ], shortcut:'Next cube '+K(cube)+' minus '+K(num)+' gives '+K(add)+'.', hint:'Find the next perfect cube above the number; the gap is what you add.' },
      { steps:[
        step('Step 1 - Samjho','<br>Jodkar perfect cube banane ke liye, number ke just upar ka sabse chhota perfect cube dhoondo, fir gap jodo.'),
        step('Step 2 - Upar ka cube dhoondo','<br>'+K(POW(root-1,'3')+' = '+prev)+' neeche hai aur '+K(POW(root,'3')+' = '+cube)+' '+K(num)+' ke upar agla perfect cube hai.'),
        step('Step 3 - Gap nikalo','<br>'+K(cube+' - '+num+' = '+add)+'.'),
        step('Step 4 - Check karo','<br>'+K(num+' + '+add+' = '+cube+' = '+POW(root,'3'))+'.')
      ], shortcut:'Agla cube '+K(cube)+' minus '+K(num)+' = '+K(add)+'.', hint:'Number ke upar agla perfect cube dhoondo; gap hi jodne wali sankhya hai.' },
      { steps:[
        step('चरण 1 - समझो','<br>जोड़कर पूर्ण घन बनाने के लिए, संख्या के ठीक ऊपर का सबसे छोटा पूर्ण घन ढूँढो, फिर अंतर जोड़ो।'),
        step('चरण 2 - ऊपर का घन ढूँढो','<br>'+K(POW(root-1,'3')+' = '+prev)+' नीचे है और '+K(POW(root,'3')+' = '+cube)+', '+K(num)+' के ऊपर अगला पूर्ण घन है।'),
        step('चरण 3 - अंतर निकालो','<br>'+K(cube+' - '+num+' = '+add)+'।'),
        step('चरण 4 - जाँच','<br>'+K(num+' + '+add+' = '+cube+' = '+POW(root,'3'))+'।')
      ], shortcut:'अगला घन '+K(cube)+' में से '+K(num)+' = '+K(add)+'।', hint:'संख्या के ऊपर अगला पूर्ण घन ढूँढो; अंतर ही जोड़ने वाली संख्या है।' }
    );
  };
})();
