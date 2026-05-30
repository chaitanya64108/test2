/* PYQ_template 9 — sq_pyq_95..sq_pyq_106 (corrected + KaTeX rendered) */
(function(){
  var H=window.PYQT; if(!H) return;
  var K=H.K,RT=H.RT,CRT=H.CRT,FR=H.FR,POW=H.POW,B=H.B,D=H.D,tri=H.tri,fix=H.fix;
  var FL=B+'lfloor ',RF=B+'rfloor ',CD=B+'cdots ';

  fix('sq_pyq_95',{text:tri(K(RT('4096')+D+CRT('512'))+' = ?'),ans:'8',opts:['2','4','6','8']});

  fix('sq_pyq_96',{text:tri(K(CRT('0.000216')+' + '+RT('0.16'))+' = ?'),ans:'0.46',opts:['0.46','0.1','0.22','0.36']});

  fix('sq_pyq_97',{text:tri('Which three-digit number has both an integer square root and an integer cube root?','Kaunsa teen-digit number aisa hai jiska square root bhi integer ho aur cube root bhi integer ho?','कौनसी तीन-अंकीय संख्या ऐसी है जिसका वर्गमूल भी पूर्णांक हो और घनमूल भी पूर्णांक हो?'),ans:'729',opts:['512','729','256','1000']});

  fix('sq_pyq_98',{text:tri(K(CRT('24389')+' = ?')),ans:'29',opts:['29','39','31','49']});

  fix('sq_pyq_99',{text:tri(K(RT('16384')+' = ?')),ans:'128',opts:['132','128','118','122']});

  fix('sq_pyq_100',{text:tri('The square root of which of these numbers is irrational?','Inme se kis number ka square root irrational hai?','इनमें से किस संख्या का वर्गमूल अपरिमेय (irrational) है?'),ans:'7840',opts:['2916','4489','1024','7840']});

  fix('sq_pyq_101',{text:tri('If '+K(RT(FR('x','49'))+' = '+FR('4','9'))+', then x = ?','Agar '+K(RT(FR('x','49'))+' = '+FR('4','9'))+', to x = ?','यदि '+K(RT(FR('x','49'))+' = '+FR('4','9'))+', तो x = ?'),ans:'9.69',opts:['9.69','10.5','12.44','8.62']});

  fix('sq_pyq_102',{text:tri('What is the least number that must be added to 4931 to make it a perfect square?','4931 me kam se kam kaunsa number joda jaaye taaki wo perfect square ban jaaye?','4931 में कम से कम कौनसी संख्या जोड़ी जाए ताकि वह पूर्ण वर्ग बन जाए?'),ans:'110',opts:['110','28','100','125']});

  fix('sq_pyq_103',{text:tri('The perfect cube nearest to 2750 is:','2750 ke sabse nazdeek perfect cube kaunsa hai?','2750 के सबसे नज़दीक पूर्ण घन कौनसा है?'),ans:'2744',opts:['2749','2747','2744','2754']});

  fix('sq_pyq_104',{text:tri(K(RT('73.96')+' = ?')),ans:'8.6',opts:['8.6','86','0.86','0.086']});

  fix('sq_pyq_105',{text:tri('For each natural number n, let '+K('a_n = '+FL+RT('n')+RF)+' (the largest integer not exceeding '+K(RT('n'))+'). Find '+K('a_1 + a_2 + '+CD+' + a_{50}')+'.','Har natural number n ke liye '+K('a_n = '+FL+RT('n')+RF)+' (yaani '+K(RT('n'))+' se bada na ho aisa sabse bada integer). '+K('a_1 + a_2 + '+CD+' + a_{50}')+' ka value kya hai?','प्रत्येक प्राकृत संख्या n के लिए '+K('a_n = '+FL+RT('n')+RF)+' (अर्थात् '+K(RT('n'))+' से बड़ा न हो ऐसा सबसे बड़ा पूर्णांक)। '+K('a_1 + a_2 + '+CD+' + a_{50}')+' का मान क्या है?'),ans:'217',opts:['217','210','225','200']});

  fix('sq_pyq_106',{text:tri('If '+K('(a + b'+RT('n')+')')+' is the positive square root of '+K('(29 - 12'+RT('5')+')')+', where a, b are integers and n is a natural number, then the maximum value of '+K('(a + b + n)')+' is:','Agar '+K('(a + b'+RT('n')+')')+', '+K('(29 - 12'+RT('5')+')')+' ka positive square root hai, jaha a, b integers hain aur n natural number hai, to '+K('(a + b + n)')+' ki maximum value kya hai?','यदि '+K('(a + b'+RT('n')+')')+', '+K('(29 - 12'+RT('5')+')')+' का धनात्मक वर्गमूल है, जहाँ a, b पूर्णांक हैं और n प्राकृत संख्या है, तो '+K('(a + b + n)')+' का अधिकतम मान क्या है?'),ans:'18',opts:['4','18','6','22']});
})();
