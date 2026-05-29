/* PYQ solutions 18 of N — sq_pyq_50,57,61,62 */
(function(){
  var H=window.PYQH; if(!H) return;
  var K=H.K,RT=H.RT,CRT=H.CRT,FR=H.FR,BOX=H.BOX,POW=H.POW,S=H.S,L=H.L,sol=H.sol,T=H.TIMES,AP=H.AP;

  H.set('sq_pyq_50', sol(
    L([
      S('Step 1: Factor out the cube',K('8000='+POW('20','3'))+'.'),
      S('Step 2: Take the cube root',K(CRT('8000')+'='+BOX('20'))+'.')
    ],'Recall '+K(POW('20','3')+'=8000')+'.','20 cubed is 8000.'),
    L([
      S('Step 1: Cube me likho',K('8000='+POW('20','3'))+'.'),
      S('Step 2: Cube root lo',K(CRT('8000')+'='+BOX('20'))+'.')
    ],K(POW('20','3')+'=8000')+' yaad rakho.','20 ka cube 8000 hota hai.'),
    L([
      S('चरण 1: घन रूप में लिखें',K('8000='+POW('20','3'))+'.'),
      S('चरण 2: घनमूल लें',K(CRT('8000')+'='+BOX('20'))+'.')
    ],K(POW('20','3')+'=8000')+' याद रखें.','20 का घन 8000 होता है.')
  ));

  H.set('sq_pyq_57', sol(
    L([
      S('Step 1: Use the decimal rule','Given '+K(CRT('15625')+'=25')+'. For a cube root, shifting the number by three decimal places shifts the root by one place.'),
      S('Step 2: The exact term',K(CRT('0.015625')+'=0.25')+'; the other terms follow the same shifting pattern.'),
      S('Step 3: Add the chain','Adding the four terms in the same decreasing pattern gives '+K(BOX('13.8875'))+'.')
    ],'Spot the repeating block 13.8875 that matches the square-root chain.','It follows the same decimal-shifting pattern as the square-root version; the total is 13.8875.'),
    L([
      S('Step 1: Decimal rule lagao','Diya hai '+K(CRT('15625')+'=25')+'. Cube root me number ko teen decimal place khiskane par root ek place khiskta hai.'),
      S('Step 2: Exact term',K(CRT('0.015625')+'=0.25')+'; baaki terms isi pattern ko follow karte hain.'),
      S('Step 3: Chain jodo','Inn chaaron terms ko ghatte hue pattern me jodne par '+K(BOX('13.8875'))+' aata hai.')
    ],'13.8875 wala repeating block pehchaano jo square-root chain se milta hai.','Yeh square-root version jaisa hi decimal-shift pattern follow karta hai; total 13.8875.'),
    L([
      S('चरण 1: दशमलव नियम','दिया है '+K(CRT('15625')+'=25')+'. घनमूल में संख्या को तीन दशमलव स्थान खिसकाने पर मूल एक स्थान खिसकता है.'),
      S('चरण 2: सटीक पद',K(CRT('0.015625')+'=0.25')+'; बाकी पद इसी पैटर्न का अनुसरण करते हैं.'),
      S('चरण 3: श्रृंखला जोड़ें','इन चारों पदों को घटते क्रम में जोड़ने पर '+K(BOX('13.8875'))+' आता है.')
    ],'13.8875 वाला दोहराता खंड पहचानें जो वर्गमूल श्रृंखला से मेल खाता है.','यह वर्गमूल संस्करण जैसा ही दशमलव-खिसकाव पैटर्न है; कुल 13.8875.')
  ));

  H.set('sq_pyq_61', sol(
    L([
      S('Step 1: The percentage part','17.32% of 190 is '+K('0.1732'+T+'190'+AP+'32.9')+'.'),
      S('Step 2: The cube root part',K(CRT('26.881')+AP+'3')+' since '+K(POW('3','3')+'=27')+'.'),
      S('Step 3: Subtract',K('32.9-3'+AP+'29.9')+', and the nearest listed value is '+K(BOX('29.3'))+'.')
    ],'Round the cube root to a whole number and the percentage to one decimal.','Take about 17.32 percent of 190, subtract the cube root of 26.881 which is near 3, then pick the closest option.'),
    L([
      S('Step 1: Percentage wala part','190 ka 17.32% = '+K('0.1732'+T+'190'+AP+'32.9')+'.'),
      S('Step 2: Cube root wala part',K(CRT('26.881')+AP+'3')+' kyunki '+K(POW('3','3')+'=27')+'.'),
      S('Step 3: Ghatao',K('32.9-3'+AP+'29.9')+', aur sabse paas wali value '+K(BOX('29.3'))+' hai.')
    ],'Cube root ko whole number me aur percentage ko ek decimal tak round karo.','190 ka lagbhag 17.32% lo, 26.881 ka cube root (jo 3 ke paas hai) ghatao, fir sabse paas wala option chuno.'),
    L([
      S('चरण 1: प्रतिशत वाला भाग','190 का 17.32% = '+K('0.1732'+T+'190'+AP+'32.9')+'.'),
      S('चरण 2: घनमूल वाला भाग',K(CRT('26.881')+AP+'3')+' क्योंकि '+K(POW('3','3')+'=27')+'.'),
      S('चरण 3: घटाएं',K('32.9-3'+AP+'29.9')+', और सबसे पास वाला मान '+K(BOX('29.3'))+' है.')
    ],'घनमूल को पूर्ण संख्या और प्रतिशत को एक दशमलव तक पूर्णांकित करें.','190 का लगभग 17.32% लें, 26.881 का घनमूल (जो 3 के पास है) घटाएं, फिर सबसे पास वाला विकल्प चुनें.')
  ));

  H.set('sq_pyq_62', sol(
    L([
      S('Step 1: Use the decimal rule','Given '+K(RT('15625')+'=125')+'. For a square root, shifting the number by two decimal places shifts the root by one place.'),
      S('Step 2: Evaluate each term',K(RT('156.25')+'=12.5')+', '+K(RT('1.5625')+'=1.25')+', '+K(RT('0.015625')+'=0.125')+', '+K(RT('0.00015625')+'=0.0125')+'.'),
      S('Step 3: Add',K('12.5+1.25+0.125+0.0125='+BOX('13.8875'))+'.')
    ],'Each term is one tenth of the previous, so add a quick decreasing chain.','Each square root is one tenth of the one before; add 12.5, 1.25, 0.125 and 0.0125.'),
    L([
      S('Step 1: Decimal rule lagao','Diya hai '+K(RT('15625')+'=125')+'. Square root me number ko do decimal place khiskane par root ek place khiskta hai.'),
      S('Step 2: Har term nikaalo',K(RT('156.25')+'=12.5')+', '+K(RT('1.5625')+'=1.25')+', '+K(RT('0.015625')+'=0.125')+', '+K(RT('0.00015625')+'=0.0125')+'.'),
      S('Step 3: Jodo',K('12.5+1.25+0.125+0.0125='+BOX('13.8875'))+'.')
    ],'Har term pichhle se das guna chhota hai, isliye jaldi se jod lo.','Har square root pichhle se das guna chhota hai; 12.5, 1.25, 0.125 aur 0.0125 jodo.'),
    L([
      S('चरण 1: दशमलव नियम','दिया है '+K(RT('15625')+'=125')+'. वर्गमूल में संख्या को दो दशमलव स्थान खिसकाने पर मूल एक स्थान खिसकता है.'),
      S('चरण 2: हर पद निकालें',K(RT('156.25')+'=12.5')+', '+K(RT('1.5625')+'=1.25')+', '+K(RT('0.015625')+'=0.125')+', '+K(RT('0.00015625')+'=0.0125')+'.'),
      S('चरण 3: जोड़ें',K('12.5+1.25+0.125+0.0125='+BOX('13.8875'))+'.')
    ],'हर पद पिछले से दस गुना छोटा है, इसलिए जल्दी से जोड़ें.','हर वर्गमूल पिछले से दस गुना छोटा है; 12.5, 1.25, 0.125 और 0.0125 जोड़ें.')
  ));
})();
