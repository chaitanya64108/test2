/* PYQ_template 3 — sq_pyq_23..sq_pyq_34 (corrected + KaTeX rendered) */
(function(){
  var H=window.PYQT; if(!H) return;
  var K=H.K,RT=H.RT,CRT=H.CRT,FR=H.FR,POW=H.POW,T=H.T,tri=H.tri,fix=H.fix;

  fix('sq_pyq_23',{text:tri(K(RT(FR('1.44','0.36'))+' = ?')),ans:'2',opts:['1','2','3','4']});

  fix('sq_pyq_24',{text:tri(K(RT('7225')+' + '+CRT('4913'))+' = ?'),ans:'102',opts:['102','112','88','98']});

  fix('sq_pyq_25',{text:tri('The least perfect square which is divisible by each of 21, 36 and 66 is:','21, 36 aur 66 me se har ek se vibhajit hone wala sabse chhota perfect square kaunsa hai?','21, 36 और 66 में से प्रत्येक से विभाज्य सबसे छोटा पूर्ण वर्ग कौनसा है?'),ans:'213444',opts:['213444','214344','214434','231444']});

  var e26=K(FR('x',RT('128'))+' = '+FR(RT('162'),'x'));
  fix('sq_pyq_26',{text:tri('What should come in place of both x in '+e26+' ?','Dono x ki jagah kya aana chahiye:  '+e26+' ?','दोनों x के स्थान पर क्या आना चाहिए:  '+e26+' ?'),ans:'12',opts:['12','14','144','196']});

  fix('sq_pyq_27',{text:tri('The value of '+K(RT('1.5625'))+' is:'),ans:'1.25',opts:['1.05','1.25','1.45','1.55']});

  fix('sq_pyq_28',{text:tri(K(RT('7 + 3'+RT('5'))+T+RT('7 - 3'+RT('5'))+' = ?')),ans:'2',opts:[K(RT('5')),'2','4',K('3'+RT('5'))]});

  fix('sq_pyq_29',{text:tri(K(RT('2304')+' = ?')),ans:'48',opts:['44','46','48','42']});

  fix('sq_pyq_30',{text:tri('The value of '+K(CRT('0.000216'))+' is:'),ans:'0.06',opts:['0.6','0.06','0.77','0.87']});

  fix('sq_pyq_31',{text:tri(K(POW('('+RT('1089')+' + '+CRT('3375')+')','2'))+' = ?'),ans:'2304',opts:['2304','2209','2401','1936']});

  fix('sq_pyq_32',{text:tri('The least number which should be subtracted from 0.000326 to make it a perfect square is:','0.000326 me se kam-se-kam kya ghatayein taaki wo perfect square ban jaye?','0.000326 में से कम-से-कम क्या घटाएँ ताकि वह पूर्ण वर्ग बन जाए?'),ans:'0.000002',opts:['0.000002','0.0000016','0.0002','0.002']});

  fix('sq_pyq_33',{text:tri('The value of '+K(RT('0.16'))+' is:'),ans:'0.4',opts:['0.004','0.04','0.4','0.48']});

  fix('sq_pyq_34',{text:tri(K(POW('243',FR('3','5'))+' = ?')),ans:'27',opts:['9','27','18','81']});
})();
