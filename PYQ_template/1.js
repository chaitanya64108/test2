/* PYQ_template 1 — sq_pyq_01..sq_pyq_12 (corrected + KaTeX rendered) */
(function(){
  var H=window.PYQT; if(!H) return;
  var K=H.K,RT=H.RT,CRT=H.CRT,FR=H.FR,POW=H.POW,T=H.T,tri=H.tri,fix=H.fix;

  fix('sq_pyq_01',{text:tri('If '+K('x='+FR(RT('3')+'+1',RT('3')+'-1'))+' and '+K('y='+FR(RT('3')+'-1',RT('3')+'+1'))+', then '+K(POW('x','2')+'+'+POW('y','2'))+' = ?'),ans:'14',opts:['10','13','14','15']});

  fix('sq_pyq_02',{text:tri(K(RT('1296')+' + '+CRT('1728'))+' = ?'),ans:'48',opts:['48','36','42','54']});

  var e3=K(RT('4'+T+'?')+' = 4');
  fix('sq_pyq_03',{text:tri('Find ? :  '+e3,'? nikaalo:  '+e3,'? ज्ञात करें:  '+e3),ans:'4',opts:['2','6','10','4']});

  fix('sq_pyq_04',{text:tri(K('('+RT('63')+' + '+RT('252')+')'+T+'('+RT('175')+' + '+RT('28')+')')+' = ?'),ans:'441',opts:[K('16'+RT('7')),'441','16',K('7'+RT('7'))]});

  fix('sq_pyq_05',{text:tri(K(RT(FR('24','0.5')+' + 1')+' + '+RT(FR('18','0.6')+' + 6'))+' = ?'),ans:'13',opts:['19','13','12','15']});

  fix('sq_pyq_06',{text:tri(K(CRT('7 + '+RT('11'))+' = '+POW('(?)','2')+' + 2'+T+CRT('847')+' + '+RT('122'))),ans:'None of these',opts:['2','6','None of these','4']});

  var a7=K(RT('7')+' = 2.645'), b7=K(FR('1',RT('28')));
  fix('sq_pyq_07',{text:tri('If '+a7+', the value of '+b7+' (up to 3 decimal places) is:','If '+a7+', '+b7+' ki value (3 decimal places tak) kya hogi?','यदि '+a7+', तो '+b7+' का मान (3 दशमलव स्थान तक) क्या होगा?'),ans:'0.189',opts:['0.183','0.185','0.187','0.189']});

  fix('sq_pyq_08',{text:tri(K('? - '+RT('784')+' = 6'+T+RT('324'))),ans:'136',opts:['128','160','236','136']});

  fix('sq_pyq_09',{text:tri(K(RT('2116')+' - '+RT('1600')+' = '+RT('?'))),ans:'36',opts:['20','64','81','36']});

  fix('sq_pyq_10',{text:tri('The value of '+K(CRT('0.000216'))+' is:'),ans:'0.06',opts:['0.6','0.06','0.77','0.87']});

  fix('sq_pyq_11',{text:tri('The least number by which 750 must be multiplied to make it a perfect cube is:','750 ko perfect cube banane ke liye use kam-se-kam kis sankhya se guna karna hoga?','750 को पूर्ण घन बनाने के लिए उसे कम-से-कम किस संख्या से गुणा करना होगा?'),ans:'36',opts:['2','5','6','36']});

  fix('sq_pyq_12',{text:tri(K('9'+POW('x','2')+' + 25 - 30x')+' is the square of?'),ans:K('3x-5'),opts:[K('3'+POW('x','2')+'-25'),K('3x-5'),K('-3x-5'),K('3x-5')]});
})();
