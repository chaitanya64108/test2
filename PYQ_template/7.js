/* PYQ_template 7 — sq_pyq_71..sq_pyq_82 (corrected + KaTeX rendered) */
(function(){
  var H=window.PYQT; if(!H) return;
  var K=H.K,RT=H.RT,CRT=H.CRT,FR=H.FR,POW=H.POW,B=H.B,tri=H.tri,fix=H.fix;
  var PM=B+'pm ';

  fix('sq_pyq_71',{text:tri('The square root of which of the following is a rational number?','Inme se kis sankhya ka square root rational hai?','इनमें से किस संख्या का वर्गमूल परिमेय (rational) है?'),ans:'2361.96',opts:['2361.96','2758.28','72568.4','62504.9']});

  fix('sq_pyq_72',{text:tri('What is '+K(RT('5041'))+'?'),ans:'71',opts:['79','81','71','69']});

  fix('sq_pyq_73',{text:tri('What is '+K(RT('15376'))+'?'),ans:'124',opts:['122','124','134','128']});

  fix('sq_pyq_74',{text:tri('What is '+K(RT('16384'))+'?'),ans:'128',opts:['132','128','118','122']});

  var o75a=K(PM+'('+RT('5')+' + 2'+RT('7')+')'), o75b=K(PM+'('+RT('5')+' - 2'+RT('7')+')'), o75c=K(PM+'('+RT('7')+' - 2'+RT('5')+')'), o75d=K(PM+'('+RT('7')+' + 2'+RT('5')+')');
  fix('sq_pyq_75',{text:tri('The value of '+K(RT('27 - 4'+RT('35')))+' is:'),ans:o75c,opts:[o75a,o75b,o75c,o75d]});

  fix('sq_pyq_76',{text:tri(K(RT('27225')+' = ?')),ans:'165',opts:['165','155','175','145']});

  fix('sq_pyq_77',{text:tri(K(RT('9409')+' = ?')),ans:'97',opts:['83','87','89','97']});

  fix('sq_pyq_78',{text:tri(K(CRT('0.000216')+' = ?')),ans:'0.06',opts:['0.6','0.06','0.77','0.87']});

  fix('sq_pyq_79',{text:tri('What is the digit in the units place of the square root of 15876?','15876 ke square root ke units place me kaunsa ank hai?','15876 के वर्गमूल के इकाई स्थान पर कौनसा अंक है?'),ans:'6',opts:['1','3','6','9']});

  fix('sq_pyq_80',{text:tri('The value of '+K(RT('0.64')+' + '+RT('1.44')+' + '+RT('0.0009'))+' is:'),ans:'2.03',opts:['1.03','2.03','2.13','1.83']});

  fix('sq_pyq_81',{text:tri('What is '+K(RT('0.9'))+'?'),ans:'0.9487',opts:['0.03','0.3','0.9487','0.9463']});

  fix('sq_pyq_82',{text:tri('A person arranges their colleagues in a perfect square formation, but 9 are left over. If there are 2410 colleagues in total, how many are in the front row?','Ek vyakti apne colleagues ko perfect square me arrange karta hai, par 9 bach jaate hain. Kul 2410 colleagues hain, to front row me kitne honge?','एक व्यक्ति अपने सहकर्मियों को पूर्ण वर्ग में सजाता है, पर 9 बच जाते हैं। कुल 2410 सहकर्मी हैं, तो सामने की पंक्ति में कितने होंगे?'),ans:'49',opts:['47','48','49','50']});
})();
