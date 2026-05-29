/* my-questions-part3.js — Templates 68-99 (Surd / Algebra / Number-theory banks)
   - NAYA file; kisi existing file ko modify nahi karta.
   - Fixed-form MCQs ka curated bank: variant cycle + options shuffle.
   - Trilingual lead-in (en / hing / hi). Math KaTeX same rehta hai.
   - Engine me khud register: TEMPLATES + VARIANTS.
   - sqrt.html me variants.js ke baad, app.js se pehle load karo:
       <script src=\"my-questions-part3.js\"></script>
   - NOTE: LaTeX backslash ke liye '#' placeholder use hua hai (L() convert karta hai).
*/
(function () {
  'use strict';
  if (typeof TEMPLATES === 'undefined' || !Array.isArray(TEMPLATES)) { console.warn('[part3] TEMPLATES nahi mila. variants.js ke baad load karo.'); return; }
  if (typeof VARIANTS === 'undefined') { try { window.VARIANTS = {}; } catch (e) { return; } }
  var BS = String.fromCharCode(92);
  function L(s){ return s.split('#').join(BS); }
  function tri(raw){
    var hg=raw.replace(/^Find /,'Nikaalo: ').replace(/^Evaluate /,'Hal karo: ').replace(/^Simplify /,'Simplify karo: ').replace(/^Complete the series: /,'Series poori karo: ').replace(/^Approximate /,'Approx: ').replace(/^Factor /,'Factor karo: ');
    var hi=raw.replace(/^Find /,'ज्ञात करो: ').replace(/^Evaluate /,'हल करो: ').replace(/^Simplify /,'सरल करो: ').replace(/^Complete the series: /,'श्रृंखला पूरी करो: ').replace(/^Approximate /,'लगभग: ').replace(/^Factor /,'गुणनखंड करो: ');
    return { en:L(raw), hing:L(hg), hi:L(hi) };
  }
  function mk(samples){ return function(){ var s=samples[Math.floor(Math.random()*samples.length)]; var opts=s.o.map(L); var ans=opts[s.a]; var w=[]; for(var i=0;i<opts.length;i++){ if(i!==s.a) w.push(opts[i]); } return { question:tri(s.q), ans:ans, w:w, solution:null }; }; }
  function reg(id,tier,label,vs){ TEMPLATES.push({id:id,tier:tier,label:label,generate:mk(vs[0])}); VARIANTS[id]=(VARIANTS[id]||[]).concat(vs.slice(1).map(mk)); }

  reg('q3_surd_eq_ratio','Grad+','Surd: Equation Ratio Two Roots',[
    [{q:'If $#frac{#sqrt{3+x}+#sqrt{3-x}}{#sqrt{3+x}-#sqrt{3-x}}=2$, find $x$.',o:['$#frac{5}{7}$','$#frac{7}{5}$','$#frac{5}{12}$','$#frac{12}{5}$'],a:3},{q:'If $#frac{#sqrt{3+x}+#sqrt{3-x}}{#sqrt{3+x}-#sqrt{3-x}}=3$, find $x$.',o:['$#frac{3}{2}$','$2$','$#frac{12}{5}$','$3$'],a:2}],
    [{q:'If $#frac{#sqrt{5+x}+#sqrt{5-x}}{#sqrt{5+x}-#sqrt{5-x}}=3$, find $x$.',o:['$3$','$4$','$5$','$6$'],a:1},{q:'If $#frac{#sqrt{4+x}+#sqrt{4-x}}{#sqrt{4+x}-#sqrt{4-x}}=2$, find $x$.',o:['$#frac{16}{5}$','$#frac{8}{5}$','$#frac{5}{8}$','$#frac{5}{16}$'],a:0}],
    [{q:'If $#frac{#sqrt{3+x}-#sqrt{3-x}}{#sqrt{3+x}+#sqrt{3-x}}=#frac{1}{2}$, find $x$.',o:['$#frac{12}{5}$','$#frac{5}{12}$','$#frac{7}{5}$','$#frac{5}{7}$'],a:3},{q:'If the reciprocal ratio is $2$, find $x$.',o:['$#frac{12}{5}$','$#frac{7}{5}$','$#frac{5}{12}$','$#frac{5}{7}$'],a:0}],
    [{q:'If $#sqrt{a+x}=3$ and $a=5$, find $x$.',o:['$2$','$3$','$4$','$5$'],a:2},{q:'If $#sqrt{a-x}=2$ and $a=9$, find $x$.',o:['$3$','$4$','$5$','$6$'],a:2}],
    [{q:'In solving the ratio equation, first square relates which terms?',o:['roots','products','logarithms','cubes'],a:0},{q:'Product $#sqrt{3+x}#times#sqrt{3-x}$ equals?',o:['$#sqrt{9-x^2}$','$9-x$','$3+x$','$3-x$'],a:0}]]);

  reg('q3_missing_under_root','Grad+','Surd: Missing Under Square Root',[
    [{q:'If $#sqrt{?}+14=#sqrt{2601}$, find $?$.',o:['$1521$','$1369$','$1225$','$961$'],a:1},{q:'If $#sqrt{?}+10=#sqrt{1600}$, find $?$.',o:['$900$','$1000$','$1200$','$1400$'],a:0}],
    [{q:'$#sqrt{2116}-#sqrt{1600}=#sqrt{?}$. Find $?$.',o:['$20$','$36$','$64$','$81$'],a:1},{q:'$#sqrt{2025}-#sqrt{1521}=#sqrt{?}$. Find $?$.',o:['$16$','$25$','$36$','$49$'],a:2}],
    [{q:'If $?-#sqrt{784}=6#sqrt{324}$, find $?$.',o:['$128$','$136$','$160$','$236$'],a:1},{q:'If $?-#sqrt{400}=3#sqrt{225}$, find $?$.',o:['$55$','$65$','$75$','$85$'],a:1}],
    [{q:'If $#sqrt{?}=#sqrt{144}+#sqrt{25}$, find $?$.',o:['$169$','$289$','$196$','$361$'],a:1},{q:'If $#sqrt{?}=#sqrt{81}+#sqrt{16}$, find $?$.',o:['$121$','$169$','$144$','$100$'],a:1}],
    [{q:'If $#sqrt{?}=37$, find $?$.',o:['$1225$','$1296$','$1369$','$1521$'],a:2},{q:'If $#sqrt{?}=43$, find $?$.',o:['$1681$','$1849$','$1936$','$2025$'],a:1}]]);

  reg('q3_root_diff_missing','Grad+','Surd: Root Difference Find Missing',[
    [{q:'$#sqrt{2116}-#sqrt{1600}=#sqrt{?}$. Find $?$.',o:['$20$','$36$','$64$','$81$'],a:1},{q:'$#sqrt{625}-#sqrt{400}=#sqrt{?}$. Find $?$.',o:['$9$','$16$','$25$','$36$'],a:2}],
    [{q:'$#sqrt{9801}-#sqrt{7921}=#sqrt{?}$. Find $?$.',o:['$100$','$121$','$144$','$169$'],a:0},{q:'$#sqrt{14641}-#sqrt{10609}=#sqrt{?}$. Find $?$.',o:['$256$','$324$','$361$','$400$'],a:1}],
    [{q:'Evaluate $#left(#sqrt{144}-#sqrt{25}#right)^2$.',o:['$7$','$49$','$119$','$169$'],a:1},{q:'Evaluate $#left(#sqrt{400}-#sqrt{81}#right)^2$.',o:['$121$','$144$','$169$','$196$'],a:0}],
    [{q:'If $#sqrt{?}=#left(#sqrt{900}-#sqrt{400}#right)$, find $?$.',o:['$25$','$100$','$400$','$2500$'],a:1},{q:'If $#sqrt{?}=#left(#sqrt{1600}-#sqrt{625}#right)$, find $?$.',o:['$25$','$225$','$625$','$1225$'],a:1}],
    [{q:'$#sqrt{625}-#sqrt{400}$ equals?',o:['$#sqrt{225}$','$5$','$25$','$45$'],a:1},{q:'$#sqrt{900}-#sqrt{576}$ equals?',o:['$#sqrt{324}$','$6$','$54$','$324$'],a:1}]]);

  reg('q3_root_linear_missing','Grad+','Surd: Root Linear Equation Missing',[
    [{q:'If $(99#times21)-#sqrt[3]{?}=1968$, find $?$.',o:['$1367631$','$111$','$1366731$','$1367$'],a:0},{q:'If $(20#times50)-#sqrt[3]{?}=973$, find $?$.',o:['$19683$','$27$','$729$','$1331$'],a:0}],
    [{q:'If $#sqrt{?}+14=51$, find $?$.',o:['$1369$','$1225$','$1521$','$961$'],a:0},{q:'If $#sqrt{?}+9=34$, find $?$.',o:['$529$','$625$','$729$','$841$'],a:1}],
    [{q:'If $100-#sqrt{?}=76$, find $?$.',o:['$400$','$576$','$625$','$729$'],a:1},{q:'If $75-#sqrt{?}=60$, find $?$.',o:['$225$','$256$','$289$','$324$'],a:0}],
    [{q:'If $200-#sqrt[3]{?}=190$, find $?$.',o:['$100$','$1000$','$10000$','$100000$'],a:1},{q:'If $125+#sqrt[3]{?}=137$, find $?$.',o:['$144$','$1728$','$2197$','$2744$'],a:1}],
    [{q:'If $#sqrt{?}=24$, find $?$.',o:['$576$','$625$','$512$','$729$'],a:0},{q:'If $#sqrt[3]{?}=24$, find $?$.',o:['$576$','$13824$','$1728$','$4096$'],a:1}]]);

  reg('q3_cuberoot_linear','Grad+','Surd: Cube Root Linear Equation',[
    [{q:'If $#left(#frac{1728}{#sqrt[3]{262144}}#times ?#right)-288=4491$, find $?$.',o:['$148$','$156$','$173$','$177$'],a:3},{q:'If $#left(#frac{729}{#sqrt[3]{19683}}#times ?#right)+100=262$, find $?$.',o:['$4$','$5$','$6$','$7$'],a:2}],
    [{q:'If $(?#times#sqrt[3]{125})-20=80$, find $?$.',o:['$10$','$15$','$20$','$25$'],a:2},{q:'If $(?#times#sqrt[3]{216})+12=60$, find $?$.',o:['$6$','$8$','$10$','$12$'],a:1}],
    [{q:'If $100+#left(#sqrt[3]{1000}#times ?#right)=160$, find $?$.',o:['$4$','$5$','$6$','$7$'],a:2},{q:'If $50+#left(#sqrt[3]{729}#times ?#right)=113$, find $?$.',o:['$5$','$6$','$7$','$8$'],a:2}],
    [{q:'If $20+#sqrt[3]{?}=35$, find $?$.',o:['$225$','$3375$','$4096$','$8000$'],a:1},{q:'If $100-#sqrt[3]{?}=88$, find $?$.',o:['$1728$','$1331$','$1000$','$729$'],a:0}],
    [{q:'Find $#sqrt[3]{681472}$.',o:['$76$','$88$','$96$','$98$'],a:1},{q:'Find $#sqrt[3]{148877}$.',o:['$43$','$49$','$53$','$59$'],a:2}]]);

  reg('q3_root_eq_var_ratio','Grad+','Surd: Equation Find Variable Ratio',[
    [{q:'If $#sqrt{y}=4x$, find $#frac{x^2}{y}$.',o:['$2$','$#frac{1}{16}$','$#frac{1}{4}$','$4$'],a:1},{q:'If $#sqrt{y}=5x$, find $#frac{x^2}{y}$.',o:['$#frac{1}{25}$','$#frac{1}{5}$','$5$','$25$'],a:0}],
    [{q:'If $#sqrt[3]{y}=3x$, find $#frac{x^3}{y}$.',o:['$#frac{1}{27}$','$#frac{1}{9}$','$3$','$27$'],a:0},{q:'If $#sqrt[3]{y}=2x$, find $#frac{x^3}{y}$.',o:['$#frac{1}{8}$','$#frac{1}{4}$','$2$','$8$'],a:0}],
    [{q:'If $#sqrt{y}=7x$, find $#frac{x^2}{y}$.',o:['$#frac{1}{49}$','$#frac{1}{7}$','$7$','$49$'],a:0},{q:'If $#sqrt{y}=2x$, find $#frac{x^2}{y}$.',o:['$#frac{1}{4}$','$#frac{1}{2}$','$2$','$4$'],a:0}],
    [{q:'If $#sqrt{y}=4x$, find $#frac{y}{x^2}$.',o:['$4$','$8$','$16$','$32$'],a:2},{q:'If $#sqrt{y}=6x$, find $#frac{y}{x^2}$.',o:['$6$','$12$','$36$','$72$'],a:2}],
    [{q:'If $#sqrt[3]{y}=4x$, find $#frac{y}{x^3}$.',o:['$16$','$32$','$64$','$128$'],a:2},{q:'If $#sqrt[3]{y}=5x$, find $#frac{y}{x^3}$.',o:['$25$','$75$','$100$','$125$'],a:3}]]);

  reg('q3_root_cross_multiply','Grad+','Surd: Equation Cross Multiply',[
    [{q:'If $#frac{x}{#sqrt{128}}=#frac{#sqrt{162}}{x}$, find $x$.',o:['$12$','$16$','$18$','$24$'],a:0},{q:'If $#frac{x}{#sqrt{50}}=#frac{#sqrt{98}}{x}$, find $x$.',o:['$7$','$8$','$9$','$10$'],a:0}],
    [{q:'If $#frac{x}{#sqrt{200}}=#frac{#sqrt{288}}{x}$, find $x$.',o:['$16$','$18$','$20$','$24$'],a:1},{q:'If $#frac{x}{#sqrt{72}}=#frac{#sqrt{128}}{x}$, find $x$.',o:['$8$','$10$','$12$','$14$'],a:0}],
    [{q:'If $x^2=#sqrt{(32)(162)}$, find $x$.',o:['$#sqrt{72}$','$12$','$18$','$24$'],a:1},{q:'If $x^2=#sqrt{(50)(98)}$, find $x$.',o:['$7$','$#sqrt{70}$','$70$','$14$'],a:0}],
    [{q:'If $#frac{x}{#sqrt{18}}=#frac{#sqrt{32}}{x}$, find $x$.',o:['$4$','$6$','$8$','$9$'],a:0},{q:'If $#frac{x}{#sqrt{8}}=#frac{#sqrt{18}}{x}$, find $x$.',o:['$2$','$3$','$4$','$6$'],a:0}],
    [{q:'If $#frac{x}{#sqrt{12}}=#frac{#sqrt{75}}{x}$, find $x$.',o:['$#sqrt{30}$','$30$','$3#sqrt{10}$','$10$'],a:0},{q:'If $#frac{x}{#sqrt{27}}=#frac{#sqrt{48}}{x}$, find $x$.',o:['$6$','$#sqrt{36}$','$4#sqrt{3}$','$12$'],a:0}]]);

  reg('q3_surd_x_plus_inv','Grad+','Surd: x + 1/x',[
    [{q:'If $x=7-4#sqrt{3}$, find $x+#frac{1}{x}$.',o:['$3#sqrt{3}$','$8#sqrt{3}$','$14$','$14+8#sqrt{3}$'],a:2},{q:'If $x=7-4#sqrt{3}$, find $#frac{1}{x}$.',o:['$7+4#sqrt{3}$','$7-4#sqrt{3}$','$14$','$1$'],a:0}],
    [{q:'If $x=3+#sqrt{8}$, find $x+#frac{1}{x}$.',o:['$3$','$4$','$6$','$8$'],a:2},{q:'If $x=3+#sqrt{8}$, find $x-#frac{1}{x}$.',o:['$2#sqrt{2}$','$4#sqrt{2}$','$6$','$8$'],a:1}],
    [{q:'If $x=2+#sqrt{3}$, find $#frac{1}{x}$.',o:['$2-#sqrt{3}$','$2+#sqrt{3}$','$#sqrt{3}-2$','$1$'],a:0},{q:'If $x=5+2#sqrt{6}$, find $#frac{1}{x}$.',o:['$5-2#sqrt{6}$','$5+2#sqrt{6}$','$1$','$2#sqrt{6}-5$'],a:0}],
    [{q:'If $x=2+#sqrt{3}$, find $x+#frac{1}{x}$.',o:['$2$','$3$','$4$','$5$'],a:2},{q:'If $x=5+2#sqrt{6}$, find $x+#frac{1}{x}$.',o:['$5$','$8$','$10$','$12$'],a:2}],
    [{q:'If $x=7-4#sqrt{3}$, is $#frac{1}{x}=7+4#sqrt{3}$?',o:['Yes','No','only approx','undefined'],a:0},{q:'For $x=2+#sqrt{3}$, $x+#frac{1}{x}$ is not?',o:['$4$','$2x$','integer','real'],a:1}]]);

  reg('q3_surd_x2_inv2','Grad+','Surd: x^2 + 1/x^2',[
    [{q:'If $x+#frac{1}{x}=6$, find $x^2+#frac{1}{x^2}$.',o:['$32$','$34$','$36$','$38$'],a:1},{q:'If $x+#frac{1}{x}=4$, find $x^2+#frac{1}{x^2}$.',o:['$12$','$14$','$16$','$18$'],a:1}],
    [{q:'If $x=2+#sqrt{3}$, find $x^2+#frac{1}{x^2}$.',o:['$12$','$14$','$16$','$18$'],a:1},{q:'If $x=5+2#sqrt{6}$, find $x^2+#frac{1}{x^2}$.',o:['$96$','$98$','$100$','$102$'],a:1}],
    [{q:'If $x=3+#sqrt{8}$, find $x^2+#frac{1}{x^2}$.',o:['$30$','$34$','$36$','$38$'],a:1},{q:'If $x=3+#sqrt{8}$, find $x-#frac{1}{x}$.',o:['$2#sqrt{2}$','$4#sqrt{2}$','$6#sqrt{2}$','$8#sqrt{2}$'],a:1}],
    [{q:'If $x=7+4#sqrt{3}$, find $x^2+#frac{1}{x^2}$.',o:['$192$','$194$','$196$','$198$'],a:1},{q:'If $x=9+4#sqrt{5}$, find $x^2+#frac{1}{x^2}$.',o:['$160$','$162$','$164$','$166$'],a:1}],
    [{q:'If $x+#frac{1}{x}=10$, find $x^2+#frac{1}{x^2}$.',o:['$96$','$98$','$100$','$102$'],a:1},{q:'If $x+#frac{1}{x}=8$, find $x^2+#frac{1}{x^2}$.',o:['$60$','$62$','$64$','$66$'],a:1}]]);

  reg('q3_conj_pair_sq_sum','Grad+','Surd: Conjugate Pair Square Sum',[
    [{q:'If $a=#frac{#sqrt{3}+#sqrt{2}}{#sqrt{3}-#sqrt{2}}$ and $b=#frac{#sqrt{3}-#sqrt{2}}{#sqrt{3}+#sqrt{2}}$, find $a^2+b^2$.',o:['$10$','$98$','$99$','$100$'],a:1},{q:'Find $a+b$ for that pair.',o:['$8$','$10$','$12$','$14$'],a:1}],
    [{q:'If $a=#frac{#sqrt{5}+#sqrt{3}}{#sqrt{5}-#sqrt{3}}$ and $b=#frac{#sqrt{5}-#sqrt{3}}{#sqrt{5}+#sqrt{3}}$, find $a^2+b^2$.',o:['$62$','$64$','$66$','$68$'],a:0},{q:'Find $a+b$ for that pair.',o:['$6$','$8$','$10$','$12$'],a:1}],
    [{q:'For $#sqrt{3},#sqrt{2}$ pair, find $a+b$.',o:['$8$','$10$','$12$','$14$'],a:1},{q:'For $#sqrt{5},#sqrt{3}$ pair, find $a+b$.',o:['$6$','$8$','$10$','$12$'],a:1}],
    [{q:'If $b=#frac{1}{a}$, find $ab$.',o:['$0$','$1$','$2$','$4$'],a:1},{q:'If $a=#frac{#sqrt{7}+#sqrt{5}}{#sqrt{7}-#sqrt{5}}$ and $b=#frac{1}{a}$, find $ab$.',o:['$1$','$2$','$3$','$4$'],a:0}],
    [{q:'If $a+b=10$ and $ab=1$, find $a^2+b^2$.',o:['$98$','$99$','$100$','$102$'],a:0},{q:'If $a+b=8$ and $ab=1$, find $a^2+b^2$.',o:['$60$','$62$','$64$','$66$'],a:1}]]);

  reg('q3_surd_ab_identity','Grad+','Surd: ab Expression Identity',[
    [{q:'If $a=#frac{#sqrt{5}+1}{#sqrt{5}-1}$ and $b=#frac{#sqrt{5}-1}{#sqrt{5}+1}$, find $ab$.',o:['$0$','$1$','$2$','$#sqrt{5}$'],a:1},{q:'Find $a+b$ for that pair.',o:['$2$','$3$','$4$','$5$'],a:1}],
    [{q:'If $a+b=3$ and $ab=1$, find $#frac{a^2+ab+b^2}{a^2-ab+b^2}$.',o:['$#frac{3}{4}$','$#frac{4}{3}$','$#frac{3}{5}$','$#frac{5}{3}$'],a:1},{q:'For same $a,b$, find the same ratio.',o:['$#frac{4}{3}$','$#frac{3}{4}$','$#frac{5}{3}$','$#frac{3}{5}$'],a:0}],
    [{q:'If $a=#frac{#sqrt{5}+1}{#sqrt{5}-1}$ and $b=#frac{#sqrt{5}-1}{#sqrt{5}+1}$, find $a+b$.',o:['$2$','$3$','$4$','$5$'],a:1},{q:'If $a=#frac{#sqrt{3}+1}{#sqrt{3}-1}$ and $b=#frac{#sqrt{3}-1}{#sqrt{3}+1}$, find $a+b$.',o:['$2$','$4$','$6$','$8$'],a:1}],
    [{q:'For $#sqrt{5}$ pair, find $a-b$.',o:['$#sqrt{5}$','$2#sqrt{5}$','$#frac{3#sqrt{5}}{2}$','$0$'],a:2},{q:'For $#sqrt{3}$ pair, find $a-b$.',o:['$2#sqrt{3}$','$#sqrt{3}$','$0$','$4$'],a:0}],
    [{q:'Product of reciprocal surd pair equals?',o:['$0$','$1$','$-1$','$2$'],a:1},{q:'If $a=#frac{#sqrt{7}+1}{#sqrt{7}-1}$ and $b=#frac{#sqrt{7}-1}{#sqrt{7}+1}$, find $ab$.',o:['$0$','$1$','$2$','$7$'],a:1}]]);

  reg('q3_surd_pair_xy','Grad+','Surd: Pair x,y Expression',[
    [{q:'If $x=2+#sqrt{3}$ and $y=2-#sqrt{3}$, find $x^2+y^2$.',o:['$14$','$8$','$16$','$12$'],a:0},{q:'Find $xy$ for that pair.',o:['$1$','$2$','$3$','$4$'],a:0}],
    [{q:'If $x=3+2#sqrt{2}$ and $y=3-2#sqrt{2}$, find $x^2+y^2$.',o:['$30$','$32$','$34$','$36$'],a:2},{q:'If $x=#sqrt{5}+2$ and $y=#sqrt{5}-2$, find $x^2+y^2$.',o:['$14$','$18$','$20$','$22$'],a:1}],
    [{q:'If $x=2+#sqrt{3}$ and $y=2-#sqrt{3}$, find $x^3+y^3$.',o:['$52$','$56$','$60$','$64$'],a:0},{q:'If $x+y=6$ and $xy=1$, find $x^3+y^3$.',o:['$198$','$204$','$216$','$220$'],a:0}],
    [{q:'If $x=2+#sqrt{3}$ and $y=2-#sqrt{3}$, find $#frac{1}{x}+#frac{1}{y}$.',o:['$2$','$3$','$4$','$5$'],a:2},{q:'If $x=3+2#sqrt{2}$ and $y=3-2#sqrt{2}$, find $#frac{1}{x}+#frac{1}{y}$.',o:['$4$','$5$','$6$','$7$'],a:2}],
    [{q:'If $x+y=4$ and $xy=1$, find $x^4+y^4$.',o:['$194$','$196$','$198$','$200$'],a:0},{q:'If $x+y=6$ and $xy=1$, find $x^4+y^4$.',o:['$1154$','$1156$','$1158$','$1160$'],a:0}]]);

  reg('q3_nested_sq_cube_dec','Grad+','Root: Nested Square/Cube Decimal',[
    [{q:'Find $#sqrt[3]{#sqrt{0.000064}}$.',o:['$0.02$','$0.2$','$2$','None'],a:1},{q:'Find $#sqrt[3]{#sqrt{0.000001}}$.',o:['$0.01$','$0.1$','$1$','$10$'],a:1}],
    [{q:'Find $#sqrt{#sqrt[3]{0.000064}}$.',o:['$0.2$','$#sqrt{0.04}$','$0.04$','None'],a:0},{q:'Find $#sqrt{#sqrt[3]{0.000216}}$.',o:['$0.06$','$0.6$','$#sqrt{0.06}$','None'],a:2}],
    [{q:'$0.000064$ as a fraction is?',o:['$#frac{64}{10^6}$','$#frac{64}{10^5}$','$#frac{64}{10^4}$','$#frac{64}{10^3}$'],a:0},{q:'Find $#sqrt{0.000064}$.',o:['$0.008$','$0.08$','$0.8$','$8$'],a:0}],
    [{q:'Find $#sqrt[3]{0.000216}$.',o:['$0.6$','$0.06$','$0.006$','None'],a:1},{q:'Find $#sqrt[3]{0.008}$.',o:['$0.02$','$0.2$','$2$','$20$'],a:1}],
    [{q:'Find $#sqrt[3]{0.000001}$.',o:['$0.1$','$0.01$','$0.001$','$1$'],a:1},{q:'Find $#sqrt{0.0004}$.',o:['$0.2$','$0.02$','$0.002$','$2$'],a:1}]]);

  reg('q3_decimal_root_expr','Grad+','Root: Decimal Root Expression',[
    [{q:'Evaluate $#left(#sqrt{0.01}#times#sqrt[3]{0.008}#right)-0.02$.',o:['$0$','$1$','$2$','$3$'],a:0},{q:'Evaluate $#left(#sqrt{0.04}#times#sqrt[3]{0.027}#right)-0.06$.',o:['$0$','$0.03$','$0.06$','$0.09$'],a:0}],
    [{q:'Evaluate $#sqrt{0.04}+#sqrt[3]{0.027}$.',o:['$0.3$','$0.4$','$0.5$','$0.6$'],a:2},{q:'Evaluate $#sqrt{0.09}+#sqrt[3]{0.008}$.',o:['$0.3$','$0.4$','$0.5$','$0.6$'],a:2}],
    [{q:'Evaluate $#frac{#sqrt{0.25}}{#sqrt[3]{0.008}}$.',o:['$1.5$','$2$','$2.5$','$3$'],a:2},{q:'Evaluate $#frac{#sqrt{0.16}}{#sqrt[3]{0.064}}$.',o:['$1$','$1.5$','$2$','$2.5$'],a:0}],
    [{q:'Evaluate $#sqrt{0.81}-#sqrt[3]{0.027}$.',o:['$0.4$','$0.5$','$0.6$','$0.7$'],a:2},{q:'Evaluate $#sqrt{0.49}+#sqrt[3]{0.001}$.',o:['$0.7$','$0.8$','$0.9$','$1.0$'],a:1}],
    [{q:'Evaluate $#left(#sqrt{0.01}#times#sqrt[3]{0.008}#right)-0.02$.',o:['$0$','$1$','$2$','$3$'],a:0},{q:'Evaluate $#left(#sqrt{1}#times#sqrt[3]{1}#right)+1$.',o:['$0$','$1$','$2$','$3$'],a:2}]]);

  reg('q3_cuberoot_frac_dec','Grad+','Root: Cube Root Fraction Decimal',[
    [{q:'Evaluate $#sqrt[3]{#frac{(0.2)^3+(0.04)^3}{(0.4)^3+(0.08)^3}}$.',o:['$0.125$','$0.25$','$0.5$','$0.75$'],a:2},{q:'Evaluate $#sqrt[3]{#frac{(0.3)^3+(0.06)^3}{(0.6)^3+(0.12)^3}}$.',o:['$0.25$','$0.5$','$0.75$','$1$'],a:1}],
    [{q:'Evaluate $#sqrt[3]{0.2#times0.2#times0.2}$.',o:['$0.02$','$0.2$','$2$','$0.002$'],a:1},{q:'Evaluate $#sqrt[3]{(0.05)^3}$.',o:['$0.005$','$0.05$','$0.5$','$5$'],a:1}],
    [{q:'Evaluate $#sqrt[3]{#frac{(0.2)^3}{(0.4)^3}}$.',o:['$0.25$','$0.5$','$0.75$','$1$'],a:1},{q:'Evaluate $#sqrt[3]{#frac{(0.3)^3}{(0.6)^3}}$.',o:['$0.25$','$0.5$','$0.75$','$1$'],a:1}],
    [{q:'Evaluate $#sqrt[3]{#frac{8+1}{64+8}}$.',o:['$0.25$','$0.5$','$0.75$','$1$'],a:1},{q:'Evaluate $#sqrt[3]{#frac{27+1}{216+8}}$.',o:['$0.25$','$0.5$','$0.75$','$1$'],a:1}],
    [{q:'Find $#sqrt[3]{0.125}$.',o:['$0.25$','$0.5$','$0.75$','$1$'],a:1},{q:'Find $#sqrt[3]{0.064}$.',o:['$0.2$','$0.3$','$0.4$','$0.5$'],a:2}]]);

  reg('q3_mixed_frac_cuberoot','Grad+','Root: Mixed Fraction Cube Root',[
    [{q:'Evaluate $#sqrt[3]{4#frac{12}{125}}$.',o:['$1#frac{2}{5}$','$1#frac{3}{5}$','$1#frac{4}{5}$','$2#frac{2}{5}$'],a:1},{q:'Evaluate $#sqrt[3]{3#frac{3}{8}}$.',o:['$1#frac{1}{2}$','$1#frac{3}{4}$','$2$','$2#frac{1}{2}$'],a:0}],
    [{q:'Evaluate $#sqrt[3]{#frac{512}{125}}$.',o:['$#frac{6}{5}$','$#frac{7}{5}$','$#frac{8}{5}$','$#frac{9}{5}$'],a:2},{q:'Evaluate $#sqrt[3]{#frac{729}{64}}$.',o:['$#frac{7}{4}$','$#frac{8}{4}$','$#frac{9}{4}$','$#frac{10}{4}$'],a:2}],
    [{q:'Evaluate $#sqrt[3]{1#frac{331}{512}}$.',o:['$1#frac{1}{8}$','$1#frac{3}{8}$','$1#frac{5}{8}$','$2$'],a:1},{q:'Evaluate $#sqrt[3]{2#frac{197}{512}}$.',o:['$1#frac{1}{8}$','$1#frac{3}{8}$','$1#frac{5}{8}$','$2$'],a:1}],
    [{q:'Find $#sqrt[3]{0.001728}$.',o:['$0.10$','$0.12$','$0.14$','$0.16$'],a:1},{q:'Find $#sqrt[3]{0.000216}$.',o:['$0.006$','$0.06$','$0.6$','None'],a:1}],
    [{q:'Evaluate $#sqrt[3]{#frac{5832}{729}}$.',o:['$1$','$2$','$3$','$4$'],a:1},{q:'Evaluate $#sqrt[3]{#frac{46656}{216}}$.',o:['$4$','$5$','$6$','$7$'],a:2}]]);

  reg('q3_fourth_root_power','Grad+','Root: Fourth Root Power Expression',[
    [{q:'Evaluate $#sqrt[4]{625^3}$.',o:['$#sqrt[3]{1875}$','$25$','$125$','None'],a:2},{q:'Evaluate $#sqrt[4]{16^3}$.',o:['$4$','$8$','$16$','$64$'],a:1}],
    [{q:'Simplify $#sqrt[4]{a^8}$.',o:['$a$','$a^2$','$a^3$','$a^4$'],a:1},{q:'Evaluate $#sqrt[5]{32^3}$.',o:['$4$','$6$','$8$','$10$'],a:2}],
    [{q:'Evaluate $#sqrt[4]{81^2}$.',o:['$3$','$9$','$27$','$81$'],a:1},{q:'Evaluate $#sqrt[4]{256^2}$.',o:['$4$','$8$','$16$','$32$'],a:2}],
    [{q:'Evaluate $#sqrt[4]{16}$.',o:['$2$','$4$','$#sqrt{2}$','$8$'],a:0},{q:'Evaluate $#sqrt[4]{8}$.',o:['$#sqrt{2}$','$2$','$#sqrt[4]{8}$','$8$'],a:2}],
    [{q:'In $#sqrt[4]{625^3}$, which option is a cube-root distractor?',o:['$#sqrt[3]{1875}$','$25$','$125$','None'],a:0},{q:'In $#sqrt[4]{81^2}$, which option is a cube-root distractor?',o:['$#sqrt[3]{81}$','$9$','$3$','$27$'],a:0}]]);

  reg('q3_large_cuberoot','12th+','Root: Large Cube Root Estimation',[
    [{q:'Find $#sqrt[3]{148877}$.',o:['$43$','$49$','$53$','$59$'],a:2},{q:'Unit digit of $#sqrt[3]{148877}$ is?',o:['$3$','$7$','$9$','$1$'],a:0}],
    [{q:'Find $#sqrt[3]{681472}$.',o:['$76$','$88$','$96$','$98$'],a:1},{q:'Last digit of $#sqrt[3]{681472}$ is?',o:['$2$','$4$','$6$','$8$'],a:3}],
    [{q:'Find $#sqrt[3]{32768}$.',o:['$28$','$30$','$32$','$34$'],a:2},{q:'Find $#sqrt[3]{59319}$.',o:['$37$','$39$','$41$','$43$'],a:1}],
    [{q:'Find $#sqrt[3]{262144}$.',o:['$54$','$60$','$64$','$68$'],a:2},{q:'Find $#sqrt[3]{551368}$.',o:['$78$','$80$','$82$','$84$'],a:2}],
    [{q:'$#sqrt[3]{79507}$ ends with which digit?',o:['$1$','$3$','$7$','$9$'],a:1},{q:'$#sqrt[3]{117649}$ ends with which digit?',o:['$3$','$7$','$9$','$1$'],a:2}]]);

  reg('q3_large_sqrt','12th+','Root: Large Square Root Estimation',[
    [{q:'Find $#sqrt{772641}$.',o:['$891$','$889$','$879$','$871$'],a:2},{q:'Last digit of $#sqrt{772641}$ is?',o:['$1$','$3$','$7$','$9$'],a:3}],
    [{q:'Find $#sqrt{7921}$.',o:['$89$','$87$','$37$','$47$'],a:0},{q:'Find $#sqrt{10201}$.',o:['$99$','$101$','$103$','$109$'],a:1}],
    [{q:'Find $#sqrt{571536}$.',o:['$746$','$756$','$766$','$776$'],a:1},{q:'Find $#sqrt{998001}$.',o:['$997$','$998$','$999$','$1000$'],a:2}],
    [{q:'In $#sqrt{772641}$, digit groups from right are?',o:['$77|26|41$','$7|726|41$','$772|641$','$77|264|1$'],a:0},{q:'Number of digit-pairs in $772641$ is?',o:['$2$','$3$','$4$','$5$'],a:1}],
    [{q:'Find $#sqrt{11881}$.',o:['$107$','$109$','$111$','$113$'],a:1},{q:'Find $#sqrt{14161}$.',o:['$117$','$119$','$121$','$123$'],a:1}]]);

  reg('q3_approx_root_product','Grad+','Root: Approx Large Root Product',[
    [{q:'Approximate $#left(#sqrt{2025.11}#times#sqrt{256.04}#right)+#left(#sqrt{399.95}#times#sqrt{?}#right)=33.98#times40.11$. Find $?$.',o:['$1682$','$1024$','$1582$','$678$'],a:1},{q:'Approximate $#sqrt{1680}#times#sqrt{40}$.',o:['$240$','$259$','$280$','$320$'],a:1}],
    [{q:'$#sqrt{399.95}$ is approximately?',o:['$18$','$19$','$20$','$21$'],a:2},{q:'$#sqrt{2025.11}$ is approximately?',o:['$43$','$44$','$45$','$46$'],a:2}],
    [{q:'If $#sqrt{400}#times#sqrt{x}#approx800$, then $x#approx?$.',o:['$1600$','$900$','$400$','$100$'],a:0},{q:'If $#sqrt{900}#times#sqrt{x}#approx600$, then $x#approx?$.',o:['$100$','$200$','$300$','$400$'],a:3}],
    [{q:'Approximate $#sqrt{255}#times#sqrt{1025}$.',o:['$480$','$512$','$540$','$600$'],a:1},{q:'Approximate $#sqrt{624}#times#sqrt{81}$.',o:['$225$','$250$','$275$','$300$'],a:0}],
    [{q:'Approximate $#sqrt{1600}#times#sqrt{625}$.',o:['$100$','$500$','$1000$','$1500$'],a:2},{q:'Approximate $#sqrt{2500}#times#sqrt{400}$.',o:['$500$','$1000$','$1500$','$2000$'],a:1}]]);

  reg('q3_perfect_sq_trinomial','Grad+','Algebra: Perfect Square Trinomial',[
    [{q:'$9x^2+25-30x$ is the square of?',o:['$3x^2-25$','$3x-5$','$-3x-5$','$3x+5$'],a:1},{q:'Factor $9x^2-30x+25$.',o:['$(3x-5)^2$','$(3x+5)^2$','$(x-5)^2$','$(9x-5)^2$'],a:0}],
    [{q:'$a^2+b^2+2ab$ equals?',o:['$(a+b)^2$','$(a-b)^2$','$a^2-b^2$','$2ab$'],a:0},{q:'$4x^2+12x+9$ equals?',o:['$(2x+3)^2$','$(2x-3)^2$','$(4x+3)^2$','$(x+3)^2$'],a:0}],
    [{q:'$a^2+b^2-2ab$ equals?',o:['$(a+b)^2$','$(a-b)^2$','$a^2-b^2$','$ab$'],a:1},{q:'$16x^2-24x+9$ equals?',o:['$(4x-3)^2$','$(4x+3)^2$','$(2x-3)^2$','$(8x-3)^2$'],a:0}],
    [{q:'$25x^2+10x+1$ is the square of?',o:['$5x+1$','$5x-1$','$25x+1$','$x+5$'],a:0},{q:'$49x^2-14x+1$ is the square of?',o:['$7x-1$','$7x+1$','$49x-1$','$x-7$'],a:0}],
    [{q:'$9x^2-30x+25$ equals?',o:['$(3x-5)^2$','$(3x+5)^2$','$9(x-5)^2$','$x^2$'],a:0},{q:'Which expression equals $(3x-5)^2$?',o:['$9x^2-30x+25$','$9x^2+30x+25$','$3x^2-5x$','$9x^2-25$'],a:0}]]);

  reg('q3_root_perfect_sq_poly','Grad+','Algebra: Root of Perfect Square Polynomial',[
    [{q:'If $x>#frac{5}{3}$, find $#sqrt{9x^2-30x+25}$.',o:['$3x-5$','$5-3x$','$9x-25$','$3x+5$'],a:0},{q:'If $x<#frac{5}{3}$, find $#sqrt{9x^2-30x+25}$.',o:['$3x-5$','$5-3x$','$9x-25$','$3x+5$'],a:1}],
    [{q:'$#sqrt{(3x-5)^2}$ equals?',o:['$3x-5$ always','$|3x-5|$','$5-3x$ always','$9x^2-25$'],a:1},{q:'$#sqrt{x^2}$ equals?',o:['$x$ always','$|x|$','$-x$','$x^2$'],a:1}],
    [{q:'If $x>-#frac{3}{2}$, find $#sqrt{4x^2+12x+9}$.',o:['$2x+3$','$2x-3$','$4x+9$','$x+3$'],a:0},{q:'If $x>-5$, find $#sqrt{x^2+10x+25}$.',o:['$x+5$','$x-5$','$|x-5|$','$5-x$'],a:0}],
    [{q:'If $x>#frac{2}{5}$, find $#sqrt{25x^2-20x+4}$.',o:['$5x-2$','$2-5x$','$25x-4$','$5x+2$'],a:0},{q:'If $x>-#frac{1}{4}$, find $#sqrt{16x^2+8x+1}$.',o:['$4x+1$','$4x-1$','$16x+1$','$1-4x$'],a:0}],
    [{q:'If $x>3$, find $#sqrt{x^2-6x+9}$.',o:['$x-3$','$x+3$','$3-x$','$x^2$'],a:0},{q:'If $x>-4$, find $#sqrt{x^2+8x+16}$.',o:['$x+4$','$x-4$','$4-x$','$x^2$'],a:0}]]);

  reg('q3_algebraic_identity_root','Grad+','Algebra: Identity Root Expression',[
    [{q:'Simplify $#sqrt{(a+b)^2-4ab}$.',o:['$|a-b|$','$a+b$','$2ab$','$a-b$ always'],a:0},{q:'If $a=7$ and $b=3$, find $#sqrt{(a+b)^2-4ab}$.',o:['$4$','$6$','$10$','$21$'],a:0}],
    [{q:'Simplify $#sqrt{(a-b)^2+4ab}$.',o:['$|a+b|$','$|a-b|$','$ab$','$2a$'],a:0},{q:'If $a=5$ and $b=2$, find $#sqrt{(a-b)^2+4ab}$.',o:['$3$','$5$','$7$','$10$'],a:2}],
    [{q:'Evaluate $#sqrt{(8+3)^2-(4#times8#times3)}$.',o:['$5$','$8$','$11$','$24$'],a:0},{q:'Evaluate $#sqrt{(9-4)^2+(4#times9#times4)}$.',o:['$5$','$9$','$13$','$36$'],a:2}],
    [{q:'Simplify $#sqrt{m^2-2mn+n^2}$.',o:['$|m-n|$','$m+n$','$mn$','$m^2$'],a:0},{q:'Simplify $#sqrt{m^2+2mn+n^2}$.',o:['$|m+n|$','$|m-n|$','$mn$','$2m$'],a:0}],
    [{q:'$#sqrt{(a-b)^2}$ equals?',o:['$a-b$ always','$|a-b|$','$a+b$','$ab$'],a:1},{q:'If $a<b$, then $#sqrt{(a-b)^2}$ equals?',o:['$a-b$','$b-a$','$a+b$','$0$'],a:1}]]);

  reg('q3_sum_cubes_word','Grad+','Algebra: Sum of Cubes Identity (Word)',[
    [{q:'If $a+b=32$ and $a^3+b^3=9728$, find $ab$.',o:['$180$','$220$','$240$','$260$'],a:2},{q:'If $a+b=10$ and $a^3+b^3=370$, find $ab$.',o:['$18$','$21$','$24$','$27$'],a:1}],
    [{q:'If $a+b=32$ and $ab=240$, find positive $a-b$.',o:['$6$','$8$','$10$','$12$'],a:1},{q:'If $a+b=18$ and $ab=80$, find the difference.',o:['$2$','$4$','$6$','$8$'],a:0}],
    [{q:'If $a+b=32$, $ab=240$, and $a-b=8$, find $a^3-b^3$.',o:['$6272$','$6200$','$6000$','$5800$'],a:0},{q:'If $a=10$ and $b=8$, find $a^3-b^3$.',o:['$488$','$496$','$512$','$520$'],a:0}],
    [{q:'Two brothers’ ages have sum $32$ and sum of cubes $9728$. Find age difference.',o:['$6$','$8$','$10$','$12$'],a:1},{q:'Two sisters’ ages have sum $18$ and product $80$. Find age difference.',o:['$2$','$4$','$6$','$8$'],a:0}],
    [{q:'If $a+b=10$ and $ab=21$, find the natural pair.',o:['$3,7$','$4,6$','$2,8$','$5,5$'],a:0},{q:'If $a+b=18$ and $ab=80$, find the pair.',o:['$8,10$','$9,9$','$6,12$','$5,13$'],a:0}]]);

  reg('q3_diff_sq_consecutive','Grad+','Algebra: Diff of Squares (Consecutive)',[
    [{q:'Difference of squares of two consecutive numbers is $41$. Find the larger number.',o:['$19$','$20$','$21$','$22$'],a:2},{q:'Difference of squares of two consecutive numbers is $25$. Find the larger number.',o:['$11$','$12$','$13$','$14$'],a:2}],
    [{q:'Difference of squares of consecutive odd numbers is $40$. Find the numbers.',o:['$7,9$','$9,11$','$11,13$','$13,15$'],a:1},{q:'Difference is $56$. Find the numbers.',o:['$11,13$','$13,15$','$15,17$','$17,19$'],a:1}],
    [{q:'Consecutive numbers have square difference $31$. Find the numbers.',o:['$14,15$','$15,16$','$16,17$','$17,18$'],a:1},{q:'Difference is $51$. Find the numbers.',o:['$24,25$','$25,26$','$26,27$','$27,28$'],a:1}],
    [{q:'Difference of squares is $60$ and numbers differ by $2$. Find their sum.',o:['$20$','$30$','$40$','$60$'],a:1},{q:'Difference of squares is $144$ and difference is $6$. Find their sum.',o:['$18$','$24$','$30$','$36$'],a:1}],
    [{q:'Two consecutive page numbers have square difference $41$. Find the larger page number.',o:['$19$','$20$','$21$','$22$'],a:2},{q:'Two consecutive odd seat numbers have square difference $72$. Find the smaller seat number.',o:['$15$','$17$','$19$','$21$'],a:1}]]);

  reg('q3_sum_product_diff','Grad+','Algebra: Sum & Product Find Difference',[
    [{q:'If sum is $32$ and product is $240$, find the difference.',o:['$4$','$6$','$8$','$10$'],a:2},{q:'If sum is $18$ and product is $80$, find the difference.',o:['$2$','$4$','$6$','$8$'],a:0}],
    [{q:'If $a+b=32$ and $ab=240$, find $(a-b)^2$.',o:['$16$','$36$','$64$','$100$'],a:2},{q:'If $a+b=20$ and $ab=96$, find $(a-b)^2$.',o:['$4$','$16$','$25$','$36$'],a:1}],
    [{q:'If $a+b=10$ and $ab=21$, find $a^3+b^3$.',o:['$280$','$300$','$370$','$420$'],a:2},{q:'If $a+b=12$ and $ab=35$, find $a^3+b^3$.',o:['$468$','$508$','$548$','$608$'],a:0}],
    [{q:'Two numbers have sum $32$ and product $240$. Find positive difference.',o:['$6$','$8$','$10$','$12$'],a:1},{q:'Two numbers have sum $14$ and product $45$. Find difference.',o:['$2$','$3$','$4$','$5$'],a:2}],
    [{q:'Two ages have sum $18$ and product $80$. Find age difference.',o:['$2$','$4$','$6$','$8$'],a:0},{q:'Two ages have sum $25$ and product $150$. Find age difference.',o:['$5$','$7$','$9$','$11$'],a:0}]]);

  reg('q3_sqrt_eq_n_cuberoot','Grad+','Number: √N = n·∛ N (Word)',[
    [{q:'If $#sqrt{N}=3#sqrt[3]{N}$, find $N$.',o:['$27$','$81$','$729$','$6561$'],a:2},{q:'If $#sqrt{N}=2#sqrt[3]{N}$, find $N$.',o:['$16$','$32$','$64$','$128$'],a:2}],
    [{q:'Square root of a number is $3$ times its cube root. Find the number.',o:['$729$','$81$','$27$','$9$'],a:0},{q:'Square root of a number is $4$ times its cube root. Find the number.',o:['$256$','$1024$','$4096$','$65536$'],a:2}],
    [{q:'If $N^{#frac{1}{2}}=5N^{#frac{1}{3}}$, find $N$.',o:['$125$','$625$','$15625$','$3125$'],a:2},{q:'If $N^{#frac{1}{2}}=6N^{#frac{1}{3}}$, find $N$.',o:['$46656$','$1296$','$216$','$7776$'],a:0}],
    [{q:'For $N=729$, if $#sqrt{N}=k#sqrt[3]{N}$, find $k$.',o:['$2$','$3$','$4$','$5$'],a:1},{q:'For $N=4096$, if $#sqrt{N}=k#sqrt[3]{N}$, find $k$.',o:['$2$','$4$','$8$','$16$'],a:1}],
    [{q:'If $N$ is natural and $#sqrt{N}=3#sqrt[3]{N}$, then $N$ is?',o:['perfect square only','perfect cube only','perfect sixth-power multiple','prime'],a:2},{q:'If both $#sqrt{N}$ and $#sqrt[3]{N}$ are natural, then $N$ must be?',o:['square','cube','sixth power','odd'],a:2}]]);

  reg('q3_perfect_sq_unit_digit','10th+','Number: Perfect Square Unit Digit',[
    [{q:'Can a perfect square end in digit $8$?',o:['Always','Sometimes','Never','Only even'],a:2},{q:'Which digit cannot be the last digit of a perfect square?',o:['$0$','$4$','$6$','$8$'],a:3}],
    [{q:'Which digit can never be the unit digit of a perfect square?',o:['$1$','$5$','$7$','$9$'],a:2},{q:'Which digit can be the unit digit of a perfect square?',o:['$2$','$3$','$6$','$8$'],a:2}],
    [{q:'If a perfect square ends in $6$, its square root may end in?',o:['$2$ or $8$','$4$ or $6$','$3$ or $7$','$1$ or $9$'],a:1},{q:'If a perfect square ends in $9$, its square root may end in?',o:['$1$ or $9$','$3$ or $7$','$4$ or $6$','$2$ or $8$'],a:1}],
    [{q:'If a perfect square ends in $5$, its square root ends in?',o:['$0$','$1$','$5$','any odd digit'],a:2},{q:'Square of a number ending in $5$ has last two digits?',o:['$15$','$25$','$35$','$75$'],a:1}],
    [{q:'A perfect square ending in zero must have at least how many trailing zeros?',o:['$1$ zero','$2$ zeros','$3$ zeros','any'],a:1},{q:'Can a perfect square end in exactly one zero?',o:['Yes','No','Sometimes','only $10$'],a:1}]]);

  reg('q3_cuberoot_unit_digit','10th+','Number: Cube Root Unit Digit',[
    [{q:'If a perfect cube ends in $8$, its cube root ends in?',o:['$2$','$4$','$6$','$8$'],a:0},{q:'Unit digit of $#sqrt[3]{74088}$ is?',o:['$2$','$4$','$6$','$8$'],a:0}],
    [{q:'If a perfect cube ends in $7$, its cube root ends in?',o:['$1$','$3$','$7$','$9$'],a:1},{q:'If a perfect cube ends in $3$, its cube root ends in?',o:['$3$','$7$','$1$','$9$'],a:1}],
    [{q:'If a perfect cube ends in $2$, its cube root ends in?',o:['$2$','$4$','$6$','$8$'],a:3},{q:'If a perfect cube ends in $9$, its cube root ends in?',o:['$1$','$3$','$7$','$9$'],a:3}],
    [{q:'$#sqrt[3]{681472}$ ends with which digit?',o:['$2$','$4$','$6$','$8$'],a:3},{q:'$#sqrt[3]{148877}$ ends with which digit?',o:['$3$','$7$','$9$','$1$'],a:0}],
    [{q:'If cube root ends in $4$, the cube ends in?',o:['$4$','$6$','$8$','$2$'],a:0},{q:'If cube root ends in $8$, the cube ends in?',o:['$2$','$4$','$6$','$8$'],a:3}]]);

  reg('q3_zeros_sq_cube','10th+','Number: Zeros in Perfect Square/Cube',[
    [{q:'A perfect square ending in zeros must end with at least how many zeros?',o:['$1$','$2$','$3$','any'],a:1},{q:'Which can be a perfect square?',o:['$10$','$100$','$1000$','$10000$'],a:1}],
    [{q:'A perfect cube ending in zeros must have trailing zeros in multiples of?',o:['$1$','$2$','$3$','$4$'],a:2},{q:'Can $1000$ be a perfect cube?',o:['Yes','No','only square','cannot say'],a:0}],
    [{q:'Is $9000$ a perfect cube?',o:['Yes','No','always','maybe'],a:1},{q:'Is $27000$ a perfect cube?',o:['Yes','No','maybe','only square'],a:0}],
    [{q:'Minimum trailing zeros in a perfect square ending with zero?',o:['$1$','$2$','$3$','$4$'],a:1},{q:'Minimum trailing zeros in a perfect cube ending with zero?',o:['$1$','$2$','$3$','$4$'],a:2}],
    [{q:'Which cannot be a perfect cube?',o:['$1000$','$8000$','$27000$','$9000$'],a:3},{q:'Which cannot be a perfect square?',o:['$100$','$400$','$1000$','$2500$'],a:2}]]);

  reg('q3_sq_cube_analogy','10th+','Reasoning: Square/Cube Analogy',[
    [{q:'$49:7::64:?$',o:['$6$','$7$','$8$','$9$'],a:2},{q:'$81:9::121:?$',o:['$9$','$10$','$11$','$12$'],a:2}],
    [{q:'$5:25::9:?$',o:['$18$','$27$','$81$','$729$'],a:2},{q:'$7:49::12:?$',o:['$24$','$121$','$144$','$169$'],a:2}],
    [{q:'$3:27::5:?$',o:['$25$','$75$','$100$','$125$'],a:3},{q:'$4:64::6:?$',o:['$36$','$126$','$216$','$256$'],a:2}],
    [{q:'$125:5::216:?$',o:['$4$','$5$','$6$','$7$'],a:2},{q:'$144:12::225:?$',o:['$13$','$14$','$15$','$16$'],a:2}],
    [{q:'$4:16::5:125$ shows which relation?',o:['square then cube','cube then square','add','subtract'],a:0},{q:'$64:8::81:9$ uses which relation?',o:['cube root and square root','addition','multiplication','prime'],a:0}]]);

  reg('q3_sq_cube_series','10th+','Reasoning: Square/Cube Number Series',[
    [{q:'Complete the series: $1,4,9,16,?$',o:['$20$','$24$','$25$','$36$'],a:2},{q:'Complete the series: $4,9,16,25,?$',o:['$30$','$36$','$40$','$49$'],a:1}],
    [{q:'Complete the series: $1,8,27,64,?$',o:['$81$','$100$','$125$','$144$'],a:2},{q:'Complete the series: $8,27,64,125,?$',o:['$196$','$216$','$225$','$256$'],a:1}],
    [{q:'Complete the series: $4,8,9,27,16,?$',o:['$32$','$64$','$81$','$125$'],a:1},{q:'Complete the series: $1,1,4,8,9,27,?$',o:['$12$','$16$','$25$','$64$'],a:1}],
    [{q:'Complete the series: $2,5,10,17,?$',o:['$24$','$25$','$26$','$29$'],a:2},{q:'Complete the series: $5,10,17,26,?$',o:['$35$','$36$','$37$','$40$'],a:2}],
    [{q:'Complete the series: $0,7,26,63,?$',o:['$100$','$124$','$125$','$126$'],a:1},{q:'Complete the series: $7,26,63,124,?$',o:['$215$','$216$','$217$','$218$'],a:0}]]);

  try { console.log('[part3] Registered. TEMPLATES total =', TEMPLATES.length); } catch (e) {}
})();
