/* PYQ_template 6 — sq_pyq_59..sq_pyq_70 (corrected + KaTeX rendered) */
(function(){
  var H=window.PYQT; if(!H) return;
  var K=H.K,RT=H.RT,CRT=H.CRT,FR=H.FR,POW=H.POW,T=H.T,tri=H.tri,fix=H.fix;

  fix('sq_pyq_59',{text:tri('The value of '+K(CRT('0.000216'))+' is:'),ans:'0.06',opts:['0.6','0.06','0.77','0.87']});

  fix('sq_pyq_60',{text:tri(K(RT('9025')+' = ?')),ans:'95',opts:['95','85','105','75']});

  fix('sq_pyq_61',{text:tri('17.32% of 190 - '+K(CRT('26.881'))+' = ? (approx)'),ans:'29.3',opts:['27.3','29.3','31.3','25.3']});

  var e62=K(RT('15625')+' = 125'), b62=K(RT('156.25')+' + '+RT('1.5625')+' + '+RT('0.015625')+' + '+RT('0.00015625'));
  fix('sq_pyq_62',{text:tri('If '+e62+', then '+b62+' = ?','If '+e62+', to '+b62+' = ?','यदि '+e62+', तो '+b62+' = ?'),ans:'13.8875',opts:['12.5','13.8875','15.625','11.5']});

  fix('sq_pyq_63',{text:tri(K(RT('1.5625')+' = ?')),ans:'1.25',opts:['1.05','1.25','1.45','1.55']});

  fix('sq_pyq_64',{text:tri('An army general arranges soldiers in a perfect square formation, but 64 soldiers are left over. If there are 15440 soldiers in total, how many soldiers are in the front row?','Ek general sainikon ko perfect square me arrange karta hai, par 64 sainik bach jaate hain. Kul 15440 sainik hain, to front row me kitne sainik honge?','एक जनरल सैनिकों को पूर्ण वर्ग में सजाता है, पर 64 सैनिक बच जाते हैं। कुल 15440 सैनिक हैं, तो सामने की पंक्ति में कितने सैनिक होंगे?'),ans:'124',opts:['120','122','124','126']});

  fix('sq_pyq_65',{text:tri('The smallest number which must be added to 4931 to make it a perfect square is:','4931 me kam-se-kam kya jodein taaki wo perfect square ban jaye?','4931 में कम-से-कम क्या जोड़ें ताकि वह पूर्ण वर्ग बन जाए?'),ans:'110',opts:['110','28','100','125']});

  fix('sq_pyq_66',{text:tri(K(CRT('2197')+' = ?')),ans:'13',opts:['11','13','15','17']});

  fix('sq_pyq_67',{text:tri(K(CRT('2197')+' = ?')),ans:'13',opts:['11','13','15','17']});

  fix('sq_pyq_68',{text:tri(K(CRT('0.000512')+' + '+RT('0.04'))+' = ?'),ans:'0.28',opts:['0.18','0.12','0.28','0.22']});

  var eq69=K(POW('x','2')+' - 8x + 14 = 0'), r1=K('('+POW('a','2')+' - '+POW('b','2')+')'), r2=K('('+POW('a','3')+' - '+POW('b','3')+')'), o69=K(POW('('+FR('2','5')+')','2'));
  fix('sq_pyq_69',{text:tri('If the roots of '+eq69+' are a and b, then the ratio of '+r1+' to '+r2+' is:','Agar '+eq69+' ke roots a aur b hain, to '+r1+' aur '+r2+' ka ratio kya hai?','अगर '+eq69+' के roots a और b हैं, तो '+r1+' और '+r2+' का अनुपात क्या है?'),ans:o69,opts:[K(FR('2','25')),o69,K(FR('25','4')),'None of these']});

  fix('sq_pyq_70',{text:tri('The value of '+K(RT('0.9'))+' is:'),ans:'0.9487',opts:['0.03','0.3','0.9487','0.9463']});
})();
