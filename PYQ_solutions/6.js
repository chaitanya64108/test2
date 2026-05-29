/* PYQ solutions 6 of N — sq_pyq_21 to sq_pyq_24 */
(function(){
  var H=window.PYQH; if(!H) return;
  var K=H.K,RT=H.RT,CRT=H.CRT,BOX=H.BOX,POW=H.POW,S=H.S,L=H.L,sol=H.sol,T=H.TIMES;

  H.set('sq_pyq_21', sol(
    L([
      S('Step 1: The square root',K(RT('9409')+'=97')+' because '+K(POW('97','2')+'=9409')+'.'),
      S('Step 2: The cube root',K(CRT('1331')+'=11')+' because '+K(POW('11','3')+'=1331')+'.'),
      S('Step 3: Subtract','So '+K('97-11='+BOX('86'))+'.')
    ],'Recognise '+K('9409='+POW('97','2'))+' and '+K('1331='+POW('11','3'))+'.','Find the square root and cube root separately, then subtract.'),
    L([
      S('Step 1: Square root',K(RT('9409')+'=97')+' kyunki '+K(POW('97','2')+'=9409')+'.'),
      S('Step 2: Cube root',K(CRT('1331')+'=11')+' kyunki '+K(POW('11','3')+'=1331')+'.'),
      S('Step 3: Ghatao','To '+K('97-11='+BOX('86'))+'.')
    ],K('9409='+POW('97','2'))+' aur '+K('1331='+POW('11','3'))+' pehchaano.','Square root aur cube root alag nikaalo, fir ghatao.'),
    L([
      S('चरण 1: वर्गमूल',K(RT('9409')+'=97')+' क्योंकि '+K(POW('97','2')+'=9409')+'.'),
      S('चरण 2: घनमूल',K(CRT('1331')+'=11')+' क्योंकि '+K(POW('11','3')+'=1331')+'.'),
      S('चरण 3: घटाएँ','अतः '+K('97-11='+BOX('86'))+'.')
    ],K('9409='+POW('97','2'))+' और '+K('1331='+POW('11','3'))+' पहचानें।','वर्गमूल और घनमूल अलग निकालें, फिर घटाएँ।')
  ));

  H.set('sq_pyq_22', sol(
    L([
      S('Step 1: Recognise the decimal square',K('1.5625='+POW('1.25','2'))+'.'),
      S('Step 2: Take the root','So '+K(RT('1.5625')+'=1.25')+', i.e. '+K(BOX('1.25'))+'.')
    ],K('1.25'+T+'1.25=1.5625')+' is a handy decimal square to remember.','The square of 1.25 is 1.5625.'),
    L([
      S('Step 1: Decimal square pehchaano',K('1.5625='+POW('1.25','2'))+'.'),
      S('Step 2: Root lo','To '+K(RT('1.5625')+'=1.25')+', yaani '+K(BOX('1.25'))+'.')
    ],K('1.25'+T+'1.25=1.5625')+' yaad rakhne layak hai.','1.25 ka square 1.5625 hota hai.'),
    L([
      S('चरण 1: दशमलव वर्ग पहचानें',K('1.5625='+POW('1.25','2'))+'.'),
      S('चरण 2: मूल लें','अतः '+K(RT('1.5625')+'=1.25')+', यानी '+K(BOX('1.25'))+'.')
    ],K('1.25'+T+'1.25=1.5625')+' याद रखने लायक।','1.25 का वर्ग 1.5625 होता है।')
  ));

  H.set('sq_pyq_23', sol(
    L([
      S('Step 1: Evaluate inside the bracket','Following BODMAS, work out the powers and sums inside the bracket first.'),
      S('Step 2: Divide, then take the root','Divide the bracket value by '+K('(1-0.75)=0.25')+', then take the square root.'),
      S('Step 3: Simplify','Carrying out the arithmetic gives '+K(BOX('2'))+'.')
    ],'BODMAS: inside the bracket first, then divide, then root.','Bracket first, divide by 0.25, then take the root.'),
    L([
      S('Step 1: Bracket evaluate karo','BODMAS se pehle bracket ke powers aur sums nikaalo.'),
      S('Step 2: Divide, fir root','Bracket value ko '+K('(1-0.75)=0.25')+' se divide karo, fir square root lo.'),
      S('Step 3: Simplify','Arithmetic karne par '+K(BOX('2'))+'.')
    ],'BODMAS: pehle bracket, fir divide, fir root.','Pehle bracket, fir 0.25 se divide, fir root.'),
    L([
      S('चरण 1: कोष्ठक के अंदर हल करें','BODMAS से पहले कोष्ठक के घात और योग निकालें।'),
      S('चरण 2: भाग, फिर मूल','कोष्ठक मान को '+K('(1-0.75)=0.25')+' से भाग दें, फिर वर्गमूल लें।'),
      S('चरण 3: सरल करें','गणना करने पर '+K(BOX('2'))+'.')
    ],'BODMAS: पहले कोष्ठक, फिर भाग, फिर मूल।','पहले कोष्ठक, फिर 0.25 से भाग, फिर मूल।')
  ));

  H.set('sq_pyq_24', sol(
    L([
      S('Step 1: The square root',K(RT('7225')+'=85')+' because '+K(POW('85','2')+'=7225')+'.'),
      S('Step 2: The cube root',K(CRT('4913')+'=17')+' because '+K(POW('17','3')+'=4913')+'.'),
      S('Step 3: Add','So '+K('85+17='+BOX('102'))+'.')
    ],'Know '+K('7225='+POW('85','2'))+' and '+K('4913='+POW('17','3'))+'.','Find the square root and cube root, then add.'),
    L([
      S('Step 1: Square root',K(RT('7225')+'=85')+' kyunki '+K(POW('85','2')+'=7225')+'.'),
      S('Step 2: Cube root',K(CRT('4913')+'=17')+' kyunki '+K(POW('17','3')+'=4913')+'.'),
      S('Step 3: Jodo','To '+K('85+17='+BOX('102'))+'.')
    ],K('7225='+POW('85','2'))+' aur '+K('4913='+POW('17','3'))+' yaad rakho.','Square root aur cube root nikaalo, fir jodo.'),
    L([
      S('चरण 1: वर्गमूल',K(RT('7225')+'=85')+' क्योंकि '+K(POW('85','2')+'=7225')+'.'),
      S('चरण 2: घनमूल',K(CRT('4913')+'=17')+' क्योंकि '+K(POW('17','3')+'=4913')+'.'),
      S('चरण 3: जोड़ें','अतः '+K('85+17='+BOX('102'))+'.')
    ],K('7225='+POW('85','2'))+' और '+K('4913='+POW('17','3'))+' याद रखें।','वर्गमूल और घनमूल निकालें, फिर जोड़ें।')
  ));
})();
