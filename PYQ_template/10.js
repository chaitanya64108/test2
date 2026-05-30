/* PYQ_template 10 — sq_pyq_107..sq_pyq_112 (FINAL, corrected + KaTeX rendered) */
(function(){
  var H=window.PYQT; if(!H) return;
  var K=H.K,RT=H.RT,CRT=H.CRT,B=H.B,tri=H.tri,fix=H.fix;
  var AL=B+'alpha ',BE=B+'beta ',GA=B+'gamma ';
  var EXPR=AL+'^2 + '+BE+'^2 + '+GA+'^2 + '+AL+BE+' + '+BE+GA+' + '+GA+AL;

  fix('sq_pyq_107',{text:tri('If '+K(AL+', '+BE+', '+GA)+' are the cube roots of '+K('-8')+', then '+K(EXPR)+' = ?','Agar '+K(AL+', '+BE+', '+GA)+', '+K('-8')+' ke cube roots hain, to '+K(EXPR)+' = ?','\u092f\u0926\u093f '+K(AL+', '+BE+', '+GA)+', '+K('-8')+' \u0915\u0947 \u0918\u0928\u092e\u0942\u0932 \u0939\u0948\u0902, \u0924\u094b '+K(EXPR)+' = ?'),ans:'0',opts:['0','-2','2','4']});

  fix('sq_pyq_108',{text:tri(K(CRT('19683')+' = ?')),ans:'27',opts:['3','18','9','27']});

  fix('sq_pyq_109',{text:tri('The square root of which of these numbers is irrational?','Inme se kis number ka square root irrational hai?','\u0907\u0928\u092e\u0947\u0902 \u0938\u0947 \u0915\u093f\u0938 \u0938\u0902\u0916\u094d\u092f\u093e \u0915\u093e \u0935\u0930\u094d\u0917\u092e\u0942\u0932 \u0905\u092a\u0930\u093f\u092e\u0947\u092f (irrational) \u0939\u0948?'),ans:'7840',opts:['2916','4489','1024','7840']});

  fix('sq_pyq_110',{text:tri(K(CRT('50653')+' = ?')),ans:'37',opts:['37','33','43','47']});

  fix('sq_pyq_111',{text:tri(K(RT('15376')+' = ?')),ans:'124',opts:['122','124','134','128']});

  fix('sq_pyq_112',{text:tri(K(CRT('19683')+' = ?')),ans:'27',opts:['3','18','9','27']});
})();
