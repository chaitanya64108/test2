/* PYQ_template 4 — sq_pyq_35..sq_pyq_46 (corrected + KaTeX rendered) */
(function(){
  var H=window.PYQT; if(!H) return;
  var K=H.K,RT=H.RT,CRT=H.CRT,FR=H.FR,POW=H.POW,T=H.T,tri=H.tri,fix=H.fix;

  var a35=K(RT('5')+' = 2.236'), b35=K(FR(RT('5'),'2')+' - '+FR('10',RT('5'))+' + '+RT('125'));
  fix('sq_pyq_35',{text:tri('If '+a35+', then '+b35+' = ?','If '+a35+', to '+b35+' = ?','यदि '+a35+', तो '+b35+' = ?'),ans:'7.826',opts:['5.59','7.826','8.944','10.062']});

  fix('sq_pyq_36',{text:tri(K(RT('5041')+T+CRT('729'))+' = ?'),ans:'639',opts:['639','629','649','613']});

  fix('sq_pyq_37',{text:tri('The least number to multiply with 750 to make it a perfect cube is:','750 ko perfect cube banane ke liye usse kam-se-kam kis sankhya se guna karein?','750 को पूर्ण घन बनाने के लिए उसे कम-से-कम किस संख्या से गुणा करें?'),ans:'36',opts:['2','5','6','36']});

  var e38=K(FR(POW('324','1.5'),POW('256','1.5'))+' = ?');
  fix('sq_pyq_38',{text:tri(e38),ans:K(FR('729','512')),opts:[K(FR('729','512')),K(FR('27','64')),K(FR('243','256')),K(FR('9','16'))]});

  fix('sq_pyq_39',{text:tri('How many perfect squares are there between 200 and 1000?','200 aur 1000 ke beech kitne perfect squares hote hain?','200 और 1000 के बीच कितने पूर्ण वर्ग होते हैं?'),ans:'17',opts:['17','18','16','19']});

  fix('sq_pyq_40',{text:tri(K(RT('6400')+' = ?')),ans:'80',opts:['70','80','90','60']});

  fix('sq_pyq_41',{text:tri('The value of '+K(RT('1.5625'))+' is:'),ans:'1.25',opts:['1.05','1.25','1.45','1.55']});

  fix('sq_pyq_42',{text:tri('The least number by which 1470 must be divided to get a perfect square is:','1470 ko kis sabse chhoti sankhya se bhaag dein taaki perfect square mile?','1470 को किस सबसे छोटी संख्या से भाग दें ताकि पूर्ण वर्ग मिले?'),ans:'30',opts:['5','10','20','30']});

  fix('sq_pyq_43',{text:tri('The least number by which 294 must be multiplied to make it a perfect square is:','294 ko kis sabse chhoti sankhya se guna karein taaki perfect square ban jaye?','294 को किस सबसे छोटी संख्या से गुणा करें ताकि पूर्ण वर्ग बने?'),ans:'6',opts:['3','5','6','24']});

  fix('sq_pyq_44',{text:tri('The value of '+K(CRT('0.004096'))+' is:'),ans:'0.16',opts:['0.16','1.6','0.016','0.4']});

  fix('sq_pyq_45',{text:tri('The smallest number with which 600 should be multiplied to make it a perfect square is:','600 ko kis sabse chhoti sankhya se guna karein taaki perfect square ban jaye?','600 को किस सबसे छोटी संख्या से गुणा करें ताकि पूर्ण वर्ग बने?'),ans:'6',opts:['3','5','6','10']});

  fix('sq_pyq_46',{text:tri(K(RT('1296')+' = ?')),ans:'36',opts:['34','36','38','32']});
})();
