/* Question_templates/qt-helpers.js
   LaTeX rendering helpers + override installer for TEMPLATES / VARIANTS.
   Emits real $...$ LaTeX so the KaTeX auto-render observer draws full sqrt
   vinculums, stacked fractions and proper BODMAS. No literal backslashes
   anywhere (built via String.fromCharCode(92)) to keep pushes JSON-clean. */
(function(){
  var B=String.fromCharCode(92);
  function K(t){ return '$'+t+'$'; }
  function RT(x){ return B+'sqrt{'+x+'}'; }
  function CRT(x){ return B+'sqrt[3]{'+x+'}'; }
  function NRT(n,x){ return B+'sqrt['+n+']{'+x+'}'; }
  function FR(a,b){ return B+'dfrac{'+a+'}{'+b+'}'; }
  function POW(b,p){ return b+'^{'+p+'}'; }
  var T=' '+B+'times ';
  var D=' '+B+'div ';
  var PM=B+'pm ';
  function tri(en,hg,hi){ return { en:en, hing:(hg===undefined?en:hg), hi:(hi===undefined?(hg===undefined?en:hg):hi) }; }
  function base(id,fn){
    if(typeof TEMPLATES==='undefined'||!TEMPLATES) return;
    for(var i=0;i<TEMPLATES.length;i++){ if(TEMPLATES[i].id===id){ TEMPLATES[i].generate=fn; return; } }
  }
  function vars(id,arr){
    if(typeof VARIANTS==='undefined'||!VARIANTS) return;
    VARIANTS[id]=arr;
  }
  window.QT={ B:B,K:K,RT:RT,CRT:CRT,NRT:NRT,FR:FR,POW:POW,T:T,D:D,PM:PM,tri:tri,base:base,vars:vars };
})();
