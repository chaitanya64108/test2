/* PYQ_template 2 — sq_pyq_13..sq_pyq_22 (corrected + KaTeX rendered) */
(function(){
  var H=window.PYQT; if(!H) return;
  var K=H.K,RT=H.RT,CRT=H.CRT,FR=H.FR,POW=H.POW,T=H.T,tri=H.tri,fix=H.fix;

  var e13=K(RT(POW('45','2')+' + 28'+T+'?')+' = 53');
  fix('sq_pyq_13',{text:tri('Find ? :  '+e13,'? nikaalo:  '+e13,'? ज्ञात करें:  '+e13),ans:'28',opts:['28','24','32','18']});

  var a14=K(CRT('33')+' = 5.745'), b14=K(FR(CRT('33'),'11'));
  fix('sq_pyq_14',{text:tri('If '+a14+', then '+b14+' = ?','If '+a14+', to '+b14+' = ?','यदि '+a14+', तो '+b14+' = ?'),ans:'0.5223',opts:['1','6.32','0.5223','2.035']});

  fix('sq_pyq_15',{text:tri(K(CRT(FR('0.008 + 0.000064','0.064 + 0.000512'))+' = ?')),ans:'0.5',opts:['0.125','0.25','0.5','0.75']});

  fix('sq_pyq_16',{text:tri('The value of '+K(CRT('0.000216'))+' is:'),ans:'0.06',opts:['0.6','0.06','0.77','0.87']});

  fix('sq_pyq_17',{text:tri('A group of students collected as many paise from each member as the number of members. The total collection was Rs. 59.29. How many members were there?','Ek group mein har member ne utne hi paise diye jitne members the. Total collection Rs. 59.29 thi. Kitne members the?','एक समूह में प्रत्येक सदस्य ने उतने ही पैसे दिए जितने सदस्य थे। कुल राशि Rs. 59.29 थी। सदस्य कितने थे?'),ans:'77',opts:['57','67','77','87']});

  fix('sq_pyq_18',{text:tri('The least perfect square which is exactly divisible by 21, 36 and 66 is:','21, 36 aur 66 se poori tarah vibhajit hone wala sabse chhota perfect square kaunsa hai?','21, 36 और 66 से पूर्णतः विभाज्य सबसे छोटा पूर्ण वर्ग कौनसा है?'),ans:'213444',opts:['213444','214344','214434','231444']});

  fix('sq_pyq_19',{text:tri(K(FR(RT('5 + '+RT('10')),RT('5'+RT('5')+' - 2'+RT('20')+' - 3'+RT('2')+' + '+RT('50')))+' = ?'),ans:'None of these',opts:['5',K(FR('5',RT('5'))),K('2 + '+RT('3')),'None of these']});

  fix('sq_pyq_20',{text:tri(K(RT('10 + 2'+RT('6')+' + 2'+RT('10')+' + 2'+RT('15'))+' = ?'),ans:K(RT('2')+' + '+RT('3')+' + '+RT('5')),opts:[K(RT('2')+' + '+RT('3')+' + '+RT('5')),K(RT('2')+' + '+RT('3')+' - '+RT('5')),K(RT('2')+' + '+RT('5')+' - '+RT('3')),'None']});

  fix('sq_pyq_21',{text:tri(K(RT('9409')+' - '+CRT('1331'))+' = ?'),ans:'86',opts:['86','80','90','76']});

  fix('sq_pyq_22',{text:tri('The value of '+K(RT('1.5625'))+' is:'),ans:'1.25',opts:['1.05','1.25','1.45','1.55']});
})();
