/* tier10 - Template 31: cb_make_sub (Make Perfect Cube by Subtraction)
   buildCbMakeSubSolution(num,sub,cube,root) -> num - sub = cube = root^3 */
(function(){
  var SB=window.SB; if(!SB) return;
  var K=SB.K,CRT=SB.CRT,POW=SB.POW,step=SB.step,S=SB.S;

  window.buildCbMakeSubSolution=function(num,sub,cube,root){
    var next=(root+1)*(root+1)*(root+1);
    return S(
      { steps:[
        step('Step 1 - Understand','<br>To make a perfect cube by subtracting, find the largest perfect cube just below the number, then subtract the extra.'),
        step('Step 2 - Find the cube just below','<br>'+K(POW(root,'3')+' = '+cube)+' is the perfect cube just below '+K(num)+', and '+K(POW(root+1,'3')+' = '+next)+' is above.'),
        step('Step 3 - Find the extra','<br>'+K(num+' - '+cube+' = '+sub)+'.'),
        step('Step 4 - Check','<br>'+K(num+' - '+sub+' = '+cube+' = '+POW(root,'3'))+'.')
      ], shortcut:K(num)+' minus the cube '+K(cube)+' gives '+K(sub)+'.', hint:'Find the largest perfect cube below the number; the extra is what you subtract.' },
      { steps:[
        step('Step 1 - Samjho','<br>Ghatakar perfect cube banane ke liye, number ke just neeche ka sabse bada perfect cube dhoondo, fir extra ghatao.'),
        step('Step 2 - Neeche ka cube dhoondo','<br>'+K(POW(root,'3')+' = '+cube)+' '+K(num)+' ke just neeche perfect cube hai, aur '+K(POW(root+1,'3')+' = '+next)+' upar hai.'),
        step('Step 3 - Extra nikalo','<br>'+K(num+' - '+cube+' = '+sub)+'.'),
        step('Step 4 - Check karo','<br>'+K(num+' - '+sub+' = '+cube+' = '+POW(root,'3'))+'.')
      ], shortcut:K(num)+' me se cube '+K(cube)+' ghatane par '+K(sub)+'.', hint:'Number ke neeche sabse bada perfect cube dhoondo; extra hi ghatane wali sankhya hai.' },
      { steps:[
        step('चरण 1 - समझो','<br>घटाकर पूर्ण घन बनाने के लिए, संख्या के ठीक नीचे का सबसे बड़ा पूर्ण घन ढूँढो, फिर अतिरिक्त घटाओ।'),
        step('चरण 2 - नीचे का घन ढूँढो','<br>'+K(POW(root,'3')+' = '+cube)+', '+K(num)+' के ठीक नीचे पूर्ण घन है, और '+K(POW(root+1,'3')+' = '+next)+' ऊपर है।'),
        step('चरण 3 - अतिरिक्त निकालो','<br>'+K(num+' - '+cube+' = '+sub)+'।'),
        step('चरण 4 - जाँच','<br>'+K(num+' - '+sub+' = '+cube+' = '+POW(root,'3'))+'।')
      ], shortcut:K(num)+' में से घन '+K(cube)+' घटाने पर '+K(sub)+'।', hint:'संख्या के नीचे सबसे बड़ा पूर्ण घन ढूँढो; अतिरिक्त ही घटाने वाली संख्या है।' }
    );
  };
})();
