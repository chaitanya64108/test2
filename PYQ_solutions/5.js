/* PYQ solutions 5 of N — sq_pyq_17 to sq_pyq_20 */
(function(){
  var H=window.PYQH; if(!H) return;
  var K=H.K,RT=H.RT,BOX=H.BOX,POW=H.POW,S=H.S,L=H.L,sol=H.sol,T=H.TIMES;

  H.set('sq_pyq_17', sol(
    L([
      S('Step 1: Set up the total','If each of '+K('n')+' members gives '+K('n')+' paise, the collection is '+K(POW('n','2'))+' paise.'),
      S('Step 2: Convert rupees to paise','Rs 59.29 is '+K('5929')+' paise, so '+K(POW('n','2')+'=5929')+'.'),
      S('Step 3: Take the root','Then '+K('n='+RT('5929')+'=77')+', so there are '+K(BOX('77'))+' members.')
    ],'Equal contribution by all members makes the total a perfect square.','Convert to paise, then square-root the total.'),
    L([
      S('Step 1: Total banao','Agar '+K('n')+' members har ek '+K('n')+' paise dein, to collection '+K(POW('n','2'))+' paise.'),
      S('Step 2: Rupaye ko paise mein badlo','Rs 59.29 yaani '+K('5929')+' paise, to '+K(POW('n','2')+'=5929')+'.'),
      S('Step 3: Root lo','To '+K('n='+RT('5929')+'=77')+', yaani '+K(BOX('77'))+' members.')
    ],'Sabhi members barabar dein to total perfect square ban jaata hai.','Paise mein badlo, fir total ka square root lo.'),
    L([
      S('चरण 1: कुल बनाएँ','यदि '+K('n')+' सदस्य हर एक '+K('n')+' पैसे दें, तो संग्रह '+K(POW('n','2'))+' पैसे।'),
      S('चरण 2: रुपये को पैसे में बदलें','Rs 59.29 यानी '+K('5929')+' पैसे, अतः '+K(POW('n','2')+'=5929')+'.'),
      S('चरण 3: मूल लें','तो '+K('n='+RT('5929')+'=77')+', यानी '+K(BOX('77'))+' सदस्य।')
    ],'सभी सदस्य बराबर दें तो कुल पूर्ण वर्ग बनता है।','पैसे में बदलें, फिर कुल का वर्गमूल लें।')
  ));

  H.set('sq_pyq_18', sol(
    L([
      S('Step 1: Take the LCM','The LCM of 21, 36 and 66 is '+K('2772')+'.'),
      S('Step 2: Spot the unpaired primes','Factorise '+K('2772='+POW('2','2')+T+POW('3','2')+T+'7'+T+'11')+'; here '+K('7')+' and '+K('11')+' are unpaired.'),
      S('Step 3: Multiply and take the root','Multiply by '+K('7'+T+'11=77')+': '+K('2772'+T+'77=213444')+', and '+K(RT('213444')+'=462')+', so '+K(BOX('462'))+'.')
    ],'Least perfect square = LCM multiplied by its unpaired primes.','Take the LCM, multiply by the unpaired primes, then root it.'),
    L([
      S('Step 1: LCM lo','21, 36 aur 66 ka LCM '+K('2772')+' hai.'),
      S('Step 2: Unpaired primes dekho','Factorise '+K('2772='+POW('2','2')+T+POW('3','2')+T+'7'+T+'11')+'; yahan '+K('7')+' aur '+K('11')+' unpaired hain.'),
      S('Step 3: Multiply aur root','Multiply by '+K('7'+T+'11=77')+': '+K('2772'+T+'77=213444')+', aur '+K(RT('213444')+'=462')+', to '+K(BOX('462'))+'.')
    ],'Least perfect square = LCM ko uske unpaired primes se multiply.','LCM lo, unpaired primes se multiply karo, fir root.'),
    L([
      S('चरण 1: LCM लें','21, 36 और 66 का LCM '+K('2772')+' है।'),
      S('चरण 2: अयुग्मित अभाज्य देखें','गुणनखंड '+K('2772='+POW('2','2')+T+POW('3','2')+T+'7'+T+'11')+'; यहाँ '+K('7')+' और '+K('11')+' अयुग्मित हैं।'),
      S('चरण 3: गुणा कर मूल लें','गुणा '+K('7'+T+'11=77')+': '+K('2772'+T+'77=213444')+', और '+K(RT('213444')+'=462')+', अतः '+K(BOX('462'))+'.')
    ],'न्यूनतम पूर्ण वर्ग = LCM को अयुग्मित अभाज्यों से गुणा।','LCM लें, अयुग्मित अभाज्यों से गुणा करें, फिर मूल।')
  ));

  H.set('sq_pyq_19', sol(
    L([
      S('Step 1: Simplify each term','Reduce every surd term to its simplest form.'),
      S('Step 2: Compare with the options','The simplified value does not match any of the listed choices.'),
      S('Step 3: Conclude','Hence the correct answer is None of these.')
    ],'No clean match among the options usually points to None of these.','Simplify fully, then check against every option.'),
    L([
      S('Step 1: Har term simplify karo','Har surd term ko simplest form mein laao.'),
      S('Step 2: Options se milao','Simplified value kisi option se match nahi karti.'),
      S('Step 3: Nateeja','Isliye sahi jawab None of these hai.')
    ],'Koi clean match na ho to aksar None of these.','Pura simplify karo, fir har option check karo.'),
    L([
      S('चरण 1: हर पद सरल करें','हर करणी पद को सरलतम रूप में लाएँ।'),
      S('चरण 2: विकल्पों से मिलाएँ','सरल किया मान किसी विकल्प से मेल नहीं खाता।'),
      S('चरण 3: निष्कर्ष','अतः सही उत्तर None of these है।')
    ],'कोई साफ मेल न हो तो प्रायः None of these।','पूरा सरल करें, फिर हर विकल्प जाँचें।')
  ));

  H.set('sq_pyq_20', sol(
    L([
      S('Step 1: Aim for a square form','We want '+K('('+RT('a')+'+'+RT('b')+'+'+RT('c')+')^{2}=a+b+c+2'+RT('ab')+'+2'+RT('ac')+'+2'+RT('bc'))+'.'),
      S('Step 2: Match the terms','Comparing with '+K('10+2'+RT('6')+'+2'+RT('10')+'+2'+RT('15'))+' gives '+K('a+b+c=10')+', '+K('ab=6')+', '+K('ac=10')+', '+K('bc=15')+', so '+K('a=2, b=3, c=5')+'.'),
      S('Step 3: Write the root','Hence the value is '+K(BOX(RT('2')+'+'+RT('3')+'+'+RT('5')))+'.')
    ],'Express the nested surd as '+K('('+RT('a')+'+'+RT('b')+'+'+RT('c')+')^{2}')+' and match terms.','Find numbers whose sum is 10 and whose products are 6, 10 and 15.'),
    L([
      S('Step 1: Square form ka target','Hum chahte hain '+K('('+RT('a')+'+'+RT('b')+'+'+RT('c')+')^{2}=a+b+c+2'+RT('ab')+'+2'+RT('ac')+'+2'+RT('bc'))+'.'),
      S('Step 2: Terms match karo',K('10+2'+RT('6')+'+2'+RT('10')+'+2'+RT('15'))+' se compare: '+K('a+b+c=10')+', '+K('ab=6')+', '+K('ac=10')+', '+K('bc=15')+', to '+K('a=2, b=3, c=5')+'.'),
      S('Step 3: Root likho','To value '+K(BOX(RT('2')+'+'+RT('3')+'+'+RT('5')))+'.')
    ],'Nested surd ko '+K('('+RT('a')+'+'+RT('b')+'+'+RT('c')+')^{2}')+' likhkar terms match karo.','Aise numbers dhoondo jinka sum 10 aur products 6, 10, 15 hon.'),
    L([
      S('चरण 1: वर्ग रूप का लक्ष्य','हमें चाहिए '+K('('+RT('a')+'+'+RT('b')+'+'+RT('c')+')^{2}=a+b+c+2'+RT('ab')+'+2'+RT('ac')+'+2'+RT('bc'))+'.'),
      S('चरण 2: पद मिलाएँ',K('10+2'+RT('6')+'+2'+RT('10')+'+2'+RT('15'))+' से तुलना: '+K('a+b+c=10')+', '+K('ab=6')+', '+K('ac=10')+', '+K('bc=15')+', अतः '+K('a=2, b=3, c=5')+'.'),
      S('चरण 3: मूल लिखें','अतः मान '+K(BOX(RT('2')+'+'+RT('3')+'+'+RT('5')))+'.')
    ],'नेस्टेड करणी को '+K('('+RT('a')+'+'+RT('b')+'+'+RT('c')+')^{2}')+' लिखकर पद मिलाएँ।','ऐसी संख्याएँ खोजें जिनका योग 10 और गुणनफल 6, 10, 15 हों।')
  ));
})();
