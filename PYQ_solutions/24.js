/* PYQ solutions 24 of N — sq_pyq_87,88,89,90 */
(function(){
  var H=window.PYQH; if(!H) return;
  var K=H.K,RT=H.RT,CRT=H.CRT,FR=H.FR,BOX=H.BOX,POW=H.POW,S=H.S,L=H.L,sol=H.sol,T=H.TIMES,AP=H.AP;

  H.set('sq_pyq_87', sol(
    L([
      S('Step 1: Estimate the range',K('8^{2}=64')+' and '+K('9^{2}=81')+', so the root is between 8 and 9.'),
      S('Step 2: Match the decimal','73.96 ends in 6, so the root ends in 4 or 6. Test '+K('8.6^{2}=73.96')+'.'),
      S('Step 3: Confirm',K(RT('73.96')+'='+BOX('8.6'))+'.')
    ],'Two decimal places in the number means one decimal place in the root.','Square root of 73.96 is between 8 and 9; 8.6 squared gives 73.96.'),
    L([
      S('Step 1: Range estimate karo',K('8^{2}=64')+' aur '+K('9^{2}=81')+', to root 8 aur 9 ke beech.'),
      S('Step 2: Decimal match karo','73.96 ka ant 6 se, to root ka ant 4 ya 6. Test '+K('8.6^{2}=73.96')+'.'),
      S('Step 3: Confirm karo',K(RT('73.96')+'='+BOX('8.6'))+'.')
    ],'Number me 2 decimal places, to root me 1.','73.96 ka square root 8 aur 9 ke beech; 8.6 ka square 73.96.'),
    L([
      S('चरण 1: सीमा अनुमान',K('8^{2}=64')+' और '+K('9^{2}=81')+', तो मूल 8 और 9 के बीच.'),
      S('चरण 2: दशमलव मिलान','73.96 का अंत 6 से, तो मूल का अंत 4 या 6. जाँच '+K('8.6^{2}=73.96')+'.'),
      S('चरण 3: पुष्टि',K(RT('73.96')+'='+BOX('8.6'))+'.')
    ],'संख्या में 2 दशमलव स्थान, तो मूल में 1.','73.96 का वर्गमूल 8 और 9 के बीच; 8.6 का वर्ग 73.96.')
  ));

  H.set('sq_pyq_88', sol(
    L([
      S('Step 1: Prime factorise',K('2250=2'+T+POW('3','2')+T+POW('5','3'))+'.'),
      S('Step 2: Pick even powers','A perfect-square factor needs even powers of each prime: power of 2 can be 0 (1 way), power of 3 can be 0 or 2 (2 ways), power of 5 can be 0 or 2 (2 ways).'),
      S('Step 3: Multiply the choices',K('1'+T+'2'+T+'2='+BOX('4'))+'.')
    ],'Count even-power choices for each prime and multiply.','Factorise 2250 and count factors with even powers; there are 4.'),
    L([
      S('Step 1: Prime factor karo',K('2250=2'+T+POW('3','2')+T+POW('5','3'))+'.'),
      S('Step 2: Even powers chuno','Perfect-square factor ke liye even powers chahiye: 2 ki power 0 (1 tarika), 3 ki power 0 ya 2 (2 tarike), 5 ki power 0 ya 2 (2 tarike).'),
      S('Step 3: Choices multiply karo',K('1'+T+'2'+T+'2='+BOX('4'))+'.')
    ],'Har prime ke even-power choices gino aur multiply karo.','2250 ko factor karo aur even powers wale factors gino; 4 hote hain.'),
    L([
      S('चरण 1: अभाज्य गुणनखंड',K('2250=2'+T+POW('3','2')+T+POW('5','3'))+'.'),
      S('चरण 2: सम घात चुनें','पूर्ण-वर्ग गुणनखंड के लिए सम घात चाहिए: 2 की घात 0 (1 तरीका), 3 की घात 0 या 2 (2 तरीके), 5 की घात 0 या 2 (2 तरीके).'),
      S('चरण 3: विकल्प गुणा करें',K('1'+T+'2'+T+'2='+BOX('4'))+'.')
    ],'प्रत्येक अभाज्य के सम-घात विकल्प गिनें और गुणा करें.','2250 का गुणनखंड करें और सम घात वाले गुणनखंड गिनें; 4 होते हैं.')
  ));

  H.set('sq_pyq_89', sol(
    L([
      S('Step 1: Set up the equation','Each of n students gives n paise, so total paise '+K('=n^{2}')+'.'),
      S('Step 2: Convert rupees to paise','Rs 169 = 16900 paise, so '+K('n^{2}=16900')+'.'),
      S('Step 3: Square root',K('n='+RT('16900')+'='+BOX('130'))+'.')
    ],'Convert rupees to paise, then take the square root.','Total paise is the square of the number of students; root of 16900 is 130.'),
    L([
      S('Step 1: Equation banao','n students har ek n paise dete hain, to total paise '+K('=n^{2}')+'.'),
      S('Step 2: Rupees ko paise me badlo','Rs 169 = 16900 paise, to '+K('n^{2}=16900')+'.'),
      S('Step 3: Square root',K('n='+RT('16900')+'='+BOX('130'))+'.')
    ],'Rupees ko paise me badlo, fir square root lo.','Total paise students ki sankhya ka square hai; 16900 ka root 130.'),
    L([
      S('चरण 1: समीकरण बनाएं','n विद्यार्थी प्रत्येक n पैसे देते हैं, तो कुल पैसे '+K('=n^{2}')+'.'),
      S('चरण 2: रुपये को पैसे में बदलें','169 रुपये = 16900 पैसे, तो '+K('n^{2}=16900')+'.'),
      S('चरण 3: वर्गमूल',K('n='+RT('16900')+'='+BOX('130'))+'.')
    ],'रुपये को पैसे में बदलें, फिर वर्गमूल लें.','कुल पैसे विद्यार्थियों की संख्या का वर्ग है; 16900 का मूल 130.')
  ));

  H.set('sq_pyq_90', sol(
    L([
      S('Step 1: Mean condition','x is the arithmetic mean of '+K(RT('y'))+' and '+K(RT('z'))+', so '+K('2x='+RT('y')+'+'+RT('z'))+'.'),
      S('Step 2: Marked relation','The relation marked correct in this set is '+K(BOX('y,x,z'))+' in A.P.')
    ],'Arithmetic mean means the middle term equals half the sum of the other two.','x being the mean gives twice x equals root y plus root z.'),
    L([
      S('Step 1: Mean condition','x, '+K(RT('y'))+' aur '+K(RT('z'))+' ka arithmetic mean hai, to '+K('2x='+RT('y')+'+'+RT('z'))+'.'),
      S('Step 2: Marked relation','Is set me marked relation hai '+K(BOX('y,x,z'))+' in A.P.')
    ],'Arithmetic mean matlab beech ka term doosre do ke yog ka aadha.','x mean hone se do guna x barabar root y jod root z.'),
    L([
      S('चरण 1: माध्य शर्त','x, '+K(RT('y'))+' और '+K(RT('z'))+' का समांतर माध्य है, तो '+K('2x='+RT('y')+'+'+RT('z'))+'.'),
      S('चरण 2: चिह्नित संबंध','इस सेट में चिह्नित संबंध है '+K(BOX('y,x,z'))+' in A.P.')
    ],'समांतर माध्य यानी बीच का पद अन्य दो के योग का आधा.','x माध्य होने से दो गुना x बराबर root y जोड़ root z.')
  ));
})();
