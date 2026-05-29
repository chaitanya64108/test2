/* my-questions-part2.js — Templates 34-67 (Age + Surd banks)
   - NAYA file; kisi existing file ko modify nahi karta.
   - Fixed-form MCQs ka curated bank: variant cycle + options shuffle.
   - Trilingual lead-in (en / hing / hi). Math KaTeX same rehta hai.
   - Engine me khud register: TEMPLATES + VARIANTS.
   - sqrt.html me variants.js ke baad, app.js se pehle load karo:
       <script src=\"my-questions-part2.js\"></script>
   - NOTE: LaTeX backslash ke liye '#' placeholder use hua hai (L() convert karta hai).
*/
(function () {
  'use strict';
  if (typeof TEMPLATES === 'undefined' || !Array.isArray(TEMPLATES)) { console.warn('[part2] TEMPLATES nahi mila. variants.js ke baad load karo.'); return; }
  if (typeof VARIANTS === 'undefined') { try { window.VARIANTS = {}; } catch (e) { return; } }
  var BS = String.fromCharCode(92);
  function L(s){ return s.split('#').join(BS); }
  function shuf(a){ a=a.slice(); for(var i=a.length-1;i>0;i--){ var j=Math.floor(Math.random()*(i+1)),t=a[i];a[i]=a[j];a[j]=t;} return a; }
  function tri(raw){
    var hg=raw.replace(/^Find /,'Nikaalo: ').replace(/^Evaluate /,'Hal karo: ').replace(/^Simplify /,'Simplify karo: ').replace(/^Complete the series: /,'Series poori karo: ').replace(/^Approximate /,'Approx: ').replace(/^Nearest integer to /,'Nearest integer: ');
    var hi=raw.replace(/^Find /,'ज्ञात करो: ').replace(/^Evaluate /,'हल करो: ').replace(/^Simplify /,'सरल करो: ').replace(/^Complete the series: /,'श्रृंखला पूरी करो: ').replace(/^Approximate /,'लगभग: ').replace(/^Nearest integer to /,'निकटतम पूर्णांक: ');
    return { en:L(raw), hing:L(hg), hi:L(hi) };
  }
  function mk(samples){ return function(){ var s=samples[Math.floor(Math.random()*samples.length)]; var opts=s.o.map(L); var ans=opts[s.a]; var w=[]; for(var i=0;i<opts.length;i++){ if(i!==s.a) w.push(opts[i]); } return { question:tri(s.q), ans:ans, w:w, solution:null }; }; }
  function reg(id,tier,label,vs){ TEMPLATES.push({id:id,tier:tier,label:label,generate:mk(vs[0])}); VARIANTS[id]=(VARIANTS[id]||[]).concat(vs.slice(1).map(mk)); }

  reg('q2_age_sqrt','Grad+','Age: Present Square Root',[
    [{q:'A person’s age is $#sqrt{625}$ years. Find the age.',o:['$20$','$25$','$30$','$35$'],a:1},{q:'A person’s age is $#sqrt{900}$ years. Find the age.',o:['$25$','$30$','$35$','$40$'],a:1}],
    [{q:'Father’s age is $#sqrt{2025}$ years. Find the age.',o:['$35$','$40$','$45$','$50$'],a:2},{q:'Father’s age is $#sqrt{1600}$ years. Find the age.',o:['$35$','$40$','$45$','$50$'],a:1}],
    [{q:'Student’s age is $#sqrt{324}$ years. Find the age.',o:['$16$','$17$','$18$','$19$'],a:2},{q:'Student’s age is $#sqrt{256}$ years. Find the age.',o:['$14$','$15$','$16$','$17$'],a:2}],
    [{q:'A’s age is $#sqrt{400+225}$ years. Find the age.',o:['$20$','$25$','$30$','$35$'],a:1},{q:'B’s age is $#sqrt{900+700}$ years. Find the age.',o:['$35$','$40$','$45$','$50$'],a:1}],
    [{q:'A’s age is $#sqrt{2025}$ and B’s age is $#sqrt{900}$. Find the difference.',o:['$10$','$15$','$20$','$25$'],a:1},{q:'A’s age is $#sqrt{1600}$ and B’s age is $#sqrt{625}$. Find the difference.',o:['$10$','$15$','$20$','$25$'],a:1}]]);

  reg('q2_age_cbrt','Grad+','Age: Present Cube Root',[
    [{q:'A person’s age is $#sqrt[3]{8000}$ years. Find the age.',o:['$10$','$15$','$20$','$25$'],a:2},{q:'A person’s age is $#sqrt[3]{27000}$ years. Find the age.',o:['$20$','$25$','$30$','$35$'],a:2}],
    [{q:'Child’s age is $#sqrt[3]{512}$ years. Find the age.',o:['$6$','$7$','$8$','$9$'],a:2},{q:'Child’s age is $#sqrt[3]{343}$ years. Find the age.',o:['$5$','$6$','$7$','$8$'],a:2}],
    [{q:'Grandfather’s age is $#sqrt[3]{216000}$ years. Find the age.',o:['$50$','$55$','$60$','$65$'],a:2},{q:'Grandfather’s age is $#sqrt[3]{125000}$ years. Find the age.',o:['$40$','$45$','$50$','$55$'],a:2}],
    [{q:'A child’s age is $10#times#sqrt[3]{0.512}$ years. Find the age.',o:['$6$','$7$','$8$','$9$'],a:2},{q:'Age is $100#times#sqrt[3]{0.008}$ years. Find the age.',o:['$10$','$20$','$30$','$40$'],a:1}],
    [{q:'Present age is $#sqrt[3]{1000}$ years. Age after $5$ years?',o:['$10$','$12$','$15$','$20$'],a:2},{q:'Present age is $#sqrt[3]{1728}$ years. Age after $8$ years?',o:['$18$','$20$','$22$','$24$'],a:1}]]);

  reg('q2_age_after_sq','Grad+','Age: After Years (Square)',[
    [{q:'After $5$ years, age will be $49$. Find present age.',o:['$40$','$42$','$44$','$45$'],a:2},{q:'After $5$ years, age will be $64$. Find present age.',o:['$57$','$58$','$59$','$60$'],a:2}],
    [{q:'After $9$ years, age will be $#sqrt{625}$. Find present age.',o:['$14$','$15$','$16$','$18$'],a:2},{q:'After $4$ years, age will be $#sqrt{900}$. Find present age.',o:['$24$','$25$','$26$','$30$'],a:2}],
    [{q:'After $6$ years, age will be $8^2$. Find present age.',o:['$56$','$58$','$60$','$62$'],a:1},{q:'After $10$ years, age will be $7^2$. Find present age.',o:['$37$','$39$','$41$','$43$'],a:1}],
    [{q:'After $12$ years, age will be $81$. Find present age.',o:['$67$','$68$','$69$','$70$'],a:2},{q:'After $15$ years, age will be $100$. Find present age.',o:['$80$','$82$','$85$','$90$'],a:2}],
    [{q:'Present age is $40$. After how many years will age be $49$?',o:['$7$','$8$','$9$','$10$'],a:2},{q:'Present age is $24$. After how many years will age be $36$?',o:['$10$','$11$','$12$','$13$'],a:2}]]);

  reg('q2_age_after_cube','Grad+','Age: After Years (Cube)',[
    [{q:'After $3$ years, age will be $64$. Find present age.',o:['$58$','$60$','$61$','$62$'],a:2},{q:'After $5$ years, age will be $27$. Find present age.',o:['$20$','$21$','$22$','$23$'],a:2}],
    [{q:'After $4$ years, age will be $#sqrt[3]{1728}$. Find present age.',o:['$6$','$8$','$10$','$12$'],a:1},{q:'After $2$ years, age will be $#sqrt[3]{1000}$. Find present age.',o:['$6$','$8$','$10$','$12$'],a:1}],
    [{q:'After $6$ years, age will be $3^3$. Find present age.',o:['$19$','$20$','$21$','$22$'],a:2},{q:'After $1$ year, age will be $2^3$. Find present age.',o:['$5$','$6$','$7$','$8$'],a:2}],
    [{q:'After $8$ years, age will be $125$. Find present age.',o:['$115$','$116$','$117$','$118$'],a:2},{q:'After $7$ years, age will be $216$. Find present age.',o:['$207$','$208$','$209$','$210$'],a:2}],
    [{q:'Present age is $20$. After how many years will age be $27$?',o:['$5$','$6$','$7$','$8$'],a:2},{q:'Present age is $56$. After how many years will age be $64$?',o:['$6$','$7$','$8$','$9$'],a:2}]]);

  reg('q2_age_ago_sq','Grad+','Age: Years Ago (Square)',[
    [{q:'$5$ years ago, age was $36$. Find present age.',o:['$39$','$40$','$41$','$42$'],a:2},{q:'$5$ years ago, age was $49$. Find present age.',o:['$52$','$54$','$56$','$58$'],a:1}],
    [{q:'$4$ years ago, age was $#sqrt{400}$. Find present age.',o:['$22$','$24$','$26$','$28$'],a:1},{q:'$6$ years ago, age was $#sqrt{625}$. Find present age.',o:['$29$','$31$','$33$','$35$'],a:1}],
    [{q:'$9$ years ago, age was $64$. Find present age.',o:['$71$','$72$','$73$','$74$'],a:2},{q:'$10$ years ago, age was $81$. Find present age.',o:['$89$','$90$','$91$','$92$'],a:2}],
    [{q:'Present age is $45$. How many years ago was age $36$?',o:['$7$','$8$','$9$','$10$'],a:2},{q:'Present age is $30$. How many years ago was age $25$?',o:['$3$','$4$','$5$','$6$'],a:2}],
    [{q:'$5$ years ago age was $36$. Age after $8$ years?',o:['$47$','$48$','$49$','$50$'],a:2},{q:'$4$ years ago age was $25$. Age after $12$ years?',o:['$39$','$40$','$41$','$42$'],a:2}]]);

  reg('q2_age_ago_cube','Grad+','Age: Years Ago (Cube)',[
    [{q:'$2$ years ago, age was $27$. Find present age.',o:['$27$','$28$','$29$','$30$'],a:2},{q:'$3$ years ago, age was $64$. Find present age.',o:['$65$','$66$','$67$','$68$'],a:2}],
    [{q:'$5$ years ago, age was $#sqrt[3]{1000}$. Find present age.',o:['$12$','$14$','$15$','$20$'],a:2},{q:'$2$ years ago, age was $#sqrt[3]{512}$. Find present age.',o:['$8$','$9$','$10$','$11$'],a:2}],
    [{q:'$4$ years ago, age was $125$. Find present age.',o:['$127$','$128$','$129$','$130$'],a:2},{q:'$6$ years ago, age was $216$. Find present age.',o:['$220$','$221$','$222$','$223$'],a:2}],
    [{q:'$10$ years ago age was $#sqrt[3]{-8}$. Valid in age context?',o:['Yes','No','present age $6$','present age $14$'],a:1},{q:'$5$ years ago age was $#sqrt[3]{-27}$. Valid in age context?',o:['$2$','$3$','$5$','Invalid'],a:3}],
    [{q:'$2$ years ago age was $27$. Age after $7$ years?',o:['$34$','$35$','$36$','$37$'],a:2},{q:'$3$ years ago age was $64$. Age after $5$ years?',o:['$70$','$71$','$72$','$73$'],a:2}]]);

  reg('q2_age_sq_fut_sq','Grad+','Age: Past Square + Future Square',[
    [{q:'$5$ years ago age was $36$ and $8$ years later it will be $49$. Find present age.',o:['$39$','$41$','$42$','$44$'],a:1},{q:'$4$ years ago age was $25$ and $12$ years later it will be $81$. Find present age.',o:['$29$','$33$','$37$','$69$'],a:0}],
    [{q:'Age was $49$ ten years ago and will be $81$ after $22$ years. Find present age.',o:['$57$','$59$','$60$','$61$'],a:1},{q:'Age was $16$ two years ago and will be $25$ after $7$ years. Find present age.',o:['$16$','$18$','$20$','$22$'],a:1}],
    [{q:'$7$ years ago age was $64$. Age after $10$ years?',o:['$77$','$79$','$81$','$83$'],a:2},{q:'$8$ years ago age was $49$. Age after $15$ years?',o:['$70$','$72$','$74$','$76$'],a:1}],
    [{q:'$4$ years ago $36$, and $9$ years later $49$. Find present age.',o:['$40$','$42$','$44$','$45$'],a:0},{q:'$1$ year ago $81$; $19$ years later $100$. Find present age.',o:['$82$','$83$','$84$','No solution'],a:0}],
    [{q:'Age under $100$; $5$ years ago a perfect square and $6$ years later a perfect square. Find age.',o:['$30$','$31$','$32$','$43$'],a:3},{q:'Age under $50$; $1$ year ago a perfect square and $8$ years later a perfect square. Find age.',o:['$17$','$18$','$20$','$28$'],a:0}]]);

  reg('q2_age_sq_fut_cube','Grad+','Age: Past Square + Future Cube',[
    [{q:'$3$ years ago age was $9$ and $15$ years later it will be $27$. Find present age.',o:['$12$','$15$','$18$','$24$'],a:0},{q:'$7$ years ago age was $25$ and $2$ years later it will be $64$. Find present age.',o:['$32$','$36$','$62$','No solution'],a:0}],
    [{q:'Age under $100$; $2$ years ago square $25$ and later cube $64$. Find present age.',o:['$27$','$32$','$35$','$62$'],a:0},{q:'$5$ years ago $36$; $3$ years later $64$. Find age.',o:['$41$','$61$','$63$','No solution'],a:1}],
    [{q:'Age was $25$ seven years ago and will be $216$ four years later. Valid present age?',o:['$32$','$36$','$212$','No valid age'],a:3},{q:'If age one year ago was $8$, can it be a past square?',o:['$9$','$10$','Invalid','$11$'],a:2}],
    [{q:'A child $4$ years ago was $9$; after $11$ years age will be $64$. Find age.',o:['$13$','$14$','$15$','$16$'],a:0},{q:'Adult $8$ years ago was $49$; after $8$ years age will be $125$. Find age.',o:['$57$','$65$','$117$','No solution'],a:3}],
    [{q:'If $10$ years ago age was $-4$ and later becomes a cube, valid?',o:['Yes','No','$6$','$14$'],a:1},{q:'Past age $81$ and future age $64$ given. Positive-time present age possible?',o:['Yes','No','$70$','$80$'],a:1}]]);

  reg('q2_age_birth_year','Grad+','Age: Birth Year from Root',[
    [{q:'In year $2026$, age is $#sqrt{625}$. Find birth year.',o:['$1999$','$2000$','$2001$','$2002$'],a:2},{q:'In year $2026$, age is $#sqrt{900}$. Find birth year.',o:['$1994$','$1995$','$1996$','$1997$'],a:2}],
    [{q:'In year $2026$, age is $#sqrt[3]{15625}$. Find birth year.',o:['$2000$','$2001$','$2002$','$2003$'],a:1},{q:'In year $2026$, age is $#sqrt[3]{27000}$. Find birth year.',o:['$1994$','$1995$','$1996$','$1997$'],a:2}],
    [{q:'Age in $2025$ is $45$. Find birth year.',o:['$1978$','$1979$','$1980$','$1981$'],a:2},{q:'Age in $2030$ is $#sqrt{1600}$. Find birth year.',o:['$1988$','$1989$','$1990$','$1991$'],a:2}],
    [{q:'In year $2035$, age is $#sqrt{1225}$. Find birth year.',o:['$1998$','$1999$','$2000$','$2001$'],a:2},{q:'In year $2040$, age is $#sqrt[3]{64000}$. Find birth year.',o:['$1998$','$1999$','$2000$','$2001$'],a:2}],
    [{q:'In year $2020$, age is $#sqrt{400}$. Find birth year.',o:['$1998$','$1999$','$2000$','$2001$'],a:2},{q:'In year $2019$, age is $#sqrt[3]{8000}$. Find birth year.',o:['$1997$','$1998$','$1999$','$2000$'],a:2}]]);

  reg('q2_age_sq_of_other','Grad+','Age: One is Square of Other',[
    [{q:'Father’s age is square of son’s age. If son is $7$, find father’s age.',o:['$42$','$45$','$49$','$56$'],a:2},{q:'Son is $6$ and father’s age is its square. Find difference.',o:['$24$','$30$','$36$','$42$'],a:1}],
    [{q:'A’s age is square of B’s age. If B is $5$, find A.',o:['$20$','$25$','$30$','$35$'],a:1},{q:'B is $4$ and A is $4^2$. Find sum.',o:['$16$','$18$','$20$','$22$'],a:2}],
    [{q:'A’s age is square of B’s age. If $B=8$, find $A-B$.',o:['$54$','$56$','$58$','$60$'],a:1},{q:'If $B=9$, find $B^2-B$.',o:['$70$','$72$','$74$','$76$'],a:1}],
    [{q:'One age is $6^2$ and the other is $6$. Find sum.',o:['$40$','$42$','$44$','$46$'],a:1},{q:'One age is $7^2$ and the other is $7$. Find sum.',o:['$54$','$56$','$58$','$60$'],a:1}],
    [{q:'Son is $5$ and father is $25$. Find their sum after $5$ years.',o:['$35$','$40$','$45$','$50$'],a:1},{q:'B is $6$ and A is $36$. Find difference after $4$ years.',o:['$28$','$30$','$32$','$34$'],a:1}]]);

  reg('q2_age_cube_of_other','Grad+','Age: One is Cube of Other',[
    [{q:'A’s age is cube of B’s age. If $B=4$, find A.',o:['$16$','$32$','$64$','$81$'],a:2},{q:'If $B=3$, find A.',o:['$9$','$18$','$27$','$36$'],a:2}],
    [{q:'Grandfather’s age is cube of grandson’s age. If grandson is $4$, find difference.',o:['$56$','$60$','$64$','$68$'],a:1},{q:'Grandmother’s age is cube of child’s age $3$. Find difference.',o:['$21$','$24$','$27$','$30$'],a:1}],
    [{q:'Ages are $64$ and $4$. Find sum.',o:['$66$','$68$','$70$','$72$'],a:1},{q:'Ages are $125$ and $5$. Find difference.',o:['$115$','$120$','$125$','$130$'],a:1}],
    [{q:'Adult age under $100$ is cube of child age $4$. Find adult age.',o:['$64$','$81$','$100$','$125$'],a:0},{q:'Which cube age under $100$ is greater than $50$?',o:['$64$','$81$','$100$','$125$'],a:0}],
    [{q:'B is $3$ now and A is $27$. Find their sum after $3$ years.',o:['$32$','$34$','$36$','$40$'],a:2},{q:'B is $4$ and A is $64$. Find difference $2$ years ago.',o:['$58$','$60$','$62$','$64$'],a:1}]]);

  reg('q2_age_root_of_other','Grad+','Age: One is Root of Other',[
    [{q:'Father is $49$ and son is $#sqrt{49}$. Find difference.',o:['$40$','$41$','$42$','$43$'],a:2},{q:'Father is $64$ and son is $#sqrt{64}$. Find difference.',o:['$54$','$56$','$58$','$60$'],a:1}],
    [{q:'Grandfather is $64$ and child is $#sqrt[3]{64}$. Find difference.',o:['$56$','$58$','$60$','$62$'],a:2},{q:'Grandfather is $125$ and child is $#sqrt[3]{125}$. Find difference.',o:['$115$','$120$','$125$','$130$'],a:1}],
    [{q:'Ages are $81$ and $#sqrt{81}$. Find difference.',o:['$70$','$72$','$74$','$76$'],a:1},{q:'Ages are $216$ and $#sqrt[3]{216}$. Find difference.',o:['$206$','$208$','$210$','$212$'],a:2}],
    [{q:'Ages are $49$ and $#sqrt{49}$. Find sum.',o:['$54$','$56$','$58$','$60$'],a:1},{q:'Ages are $125$ and $#sqrt[3]{125}$. Find sum.',o:['$125$','$130$','$135$','$140$'],a:1}],
    [{q:'Ages are $64$ and $#sqrt{64}$. Find ratio older:younger.',o:['$4:1$','$6:1$','$8:1$','$10:1$'],a:2},{q:'Ages are $216$ and $#sqrt[3]{216}$. Find ratio older:younger.',o:['$24:1$','$30:1$','$36:1$','$42:1$'],a:2}]]);

  reg('q2_age_sum_sq','Grad+','Age: Sum is Perfect Square',[
    [{q:'Sum of ages is $64$ and one is $12$ years older. Find younger age.',o:['$24$','$26$','$28$','$30$'],a:1},{q:'Sum is $100$ and difference is $20$. Find younger age.',o:['$35$','$40$','$45$','$50$'],a:1}],
    [{q:'Ages in ratio $3:5$ and sum is $64$. Find smaller age.',o:['$20$','$24$','$28$','$40$'],a:1},{q:'Ages in ratio $4:5$ and sum is $81$. Find younger age.',o:['$32$','$36$','$40$','$45$'],a:1}],
    [{q:'Sum is $49$ and difference is $7$. Find older age.',o:['$21$','$24$','$28$','$30$'],a:2},{q:'Sum is $81$ and difference is $9$. Find younger age.',o:['$34$','$36$','$40$','$45$'],a:1}],
    [{q:'Current sum of two ages is $54$. After $5$ years each, find sum.',o:['$60$','$64$','$66$','$70$'],a:1},{q:'Current sum is $90$. After $5$ years, find sum.',o:['$100$','$105$','$110$','$121$'],a:0}],
    [{q:'Family total age is $121$. Average of $11$ members is?',o:['$9$','$10$','$11$','$12$'],a:2},{q:'Total age is $144$ for $6$ members. Find average.',o:['$20$','$22$','$24$','$26$'],a:2}]]);

  reg('q2_age_sum_cube','Grad+','Age: Sum is Perfect Cube',[
    [{q:'Ages in ratio $2:3$ and sum is $125$. Find younger age.',o:['$40$','$45$','$50$','$75$'],a:2},{q:'Sum of $3$ equal children’s ages is $27$. Find each age.',o:['$7$','$8$','$9$','$10$'],a:2}],
    [{q:'Three equal ages sum to $63$. Find each age.',o:['$19$','$20$','$21$','$22$'],a:2},{q:'Three equal ages sum to $27$. Find each age.',o:['$7$','$8$','$9$','$10$'],a:2}],
    [{q:'Ages in ratio $1:4$ and sum is $125$. Find younger age.',o:['$20$','$25$','$30$','$35$'],a:1},{q:'Ages in ratio $2:6$ and sum is $216$. Find younger age.',o:['$48$','$54$','$60$','$66$'],a:1}],
    [{q:'Current sum of two ages is $115$. After $5$ years each, find sum.',o:['$120$','$121$','$125$','$130$'],a:2},{q:'Current sum of three ages is $110$. After $5$ years each, find sum.',o:['$120$','$125$','$130$','$135$'],a:1}],
    [{q:'Sum is $125$ and one age is $60$. Find other age.',o:['$55$','$60$','$65$','$70$'],a:2},{q:'Sum is $64$ and one age is $27$. Find other age.',o:['$35$','$36$','$37$','$38$'],a:2}]]);

  reg('q2_age_prod_sq','Grad+','Age: Product is Perfect Square',[
    [{q:'Product of two ages is $196$ and one is $5$ years older. Find younger age.',o:['$9$','$10$','$11$','$12$'],a:3},{q:'Product is $225$ and one is $10$ years older. Find younger age.',o:['$5$','$10$','$15$','$20$'],a:2}],
    [{q:'Product is $144$ and difference is $10$. Find ages.',o:['$8,18$','$9,16$','$6,24$','$12,12$'],a:0},{q:'Product is $400$ and difference is $30$. Find ages.',o:['$10,40$','$20,20$','$15,45$','$25,55$'],a:0}],
    [{q:'Product is $144$ and ratio is $1:4$. Find ages.',o:['$6,24$','$8,18$','$9,16$','$12,12$'],a:0},{q:'Product is $324$ and ratio is $1:4$. Find younger age.',o:['$8$','$9$','$10$','$12$'],a:1}],
    [{q:'Product of siblings’ ages is $120$ and one age is $15$. Find other age.',o:['$5$','$6$','$7$','$8$'],a:3},{q:'Product is $256$ and one age is $16$. Find other age.',o:['$12$','$14$','$16$','$18$'],a:2}],
    [{q:'Parent age $#times$ child age is $196$; child is $7$. Find parent’s age.',o:['$24$','$26$','$28$','$30$'],a:2},{q:'Product is $400$ and child is $10$. Find parent’s age.',o:['$30$','$35$','$40$','$45$'],a:2}]]);

  reg('q2_age_prod_cube','Grad+','Age: Product is Perfect Cube',[
    [{q:'Product of three equal siblings’ ages is $216$. Find each age.',o:['$4$','$5$','$6$','$8$'],a:2},{q:'Product of two ages is $216$ and one age is $6$. Find other age.',o:['$30$','$32$','$36$','$40$'],a:2}],
    [{q:'Three equal ages have product $125$. Find each age.',o:['$3$','$4$','$5$','$6$'],a:2},{q:'Product is $512$. Find each equal age.',o:['$6$','$7$','$8$','$9$'],a:2}],
    [{q:'Ages in ratio $1:2$ and product is $128$. Find younger age.',o:['$6$','$8$','$10$','$12$'],a:1},{q:'Ages in ratio $1:3$ and product is $243$. Find younger age.',o:['$7$','$8$','$9$','$10$'],a:2}],
    [{q:'Product is $1000$ and one age is $10$. Find other age.',o:['$50$','$75$','$100$','$125$'],a:2},{q:'Product is $729$ and one age is $9$. Find other age.',o:['$72$','$81$','$90$','$99$'],a:1}],
    [{q:'Two ages are $8$ and $27$. Find product.',o:['$216$','$224$','$256$','$512$'],a:0},{q:'Ages after $2$ years become $5$ and $8$. Find product.',o:['$27$','$40$','$64$','$125$'],a:1}]]);

  reg('q2_age_diff_root','Grad+','Age: Difference is a Root',[
    [{q:'Difference of ages is $#sqrt{81}$. Find difference.',o:['$7$','$8$','$9$','$10$'],a:2},{q:'Difference is $#sqrt{144}$. Find difference.',o:['$10$','$11$','$12$','$13$'],a:2}],
    [{q:'Difference is $#sqrt[3]{729}$. Find difference.',o:['$7$','$8$','$9$','$10$'],a:2},{q:'Difference is $#sqrt[3]{1000}$. Find difference.',o:['$8$','$9$','$10$','$11$'],a:2}],
    [{q:'Sum is $49$ and difference is $#sqrt{81}$. Find older age.',o:['$27$','$29$','$31$','$33$'],a:1},{q:'Sum is $64$ and difference is $#sqrt{100}$. Find younger age.',o:['$25$','$27$','$30$','$35$'],a:1}],
    [{q:'Ratio is $4:5$ and difference is $#sqrt{81}$. Find younger age.',o:['$27$','$36$','$45$','$54$'],a:1},{q:'Ratio is $3:4$ and difference is $#sqrt[3]{343}$. Find younger age.',o:['$14$','$18$','$21$','$28$'],a:2}],
    [{q:'Difference is $#sqrt{64}$ now. Find difference after $10$ years.',o:['$6$','$8$','$10$','$18$'],a:1},{q:'Difference is $#sqrt[3]{512}$ now. Find difference after $5$ years.',o:['$6$','$8$','$10$','$13$'],a:1}]]);

  reg('q2_age_avg_root','Grad+','Age: Average is a Root',[
    [{q:'Average age of $4$ members is $#sqrt{625}$. Find total age.',o:['$80$','$90$','$100$','$125$'],a:2},{q:'Average age of $5$ members is $#sqrt{400}$. Find total age.',o:['$80$','$90$','$100$','$120$'],a:2}],
    [{q:'Average age of $5$ students is $#sqrt[3]{8000}$. Find total age.',o:['$80$','$90$','$100$','$120$'],a:2},{q:'Average age of $4$ students is $#sqrt[3]{1000}$. Find total age.',o:['$30$','$40$','$50$','$60$'],a:1}],
    [{q:'Average is $#sqrt{900}$ for $6$ people. Find total.',o:['$150$','$160$','$180$','$200$'],a:2},{q:'Average is $#sqrt[3]{27000}$ for $3$ people. Find total.',o:['$80$','$90$','$100$','$110$'],a:1}],
    [{q:'Average of $4$ members is $25$; total of $3$ members is $70$. Find fourth age.',o:['$20$','$25$','$30$','$35$'],a:2},{q:'Average of $5$ members is $#sqrt{625}$; total of $4$ members is $90$. Find fifth age.',o:['$30$','$35$','$40$','$45$'],a:1}],
    [{q:'Current average of $4$ people is $20$. Average after $5$ years?',o:['$20$','$25$','$30$','$35$'],a:1},{q:'Average now is $#sqrt[3]{8000}$ for $5$ people. Average after $3$ years?',o:['$20$','$21$','$23$','$25$'],a:2}]]);

  reg('q2_age_sum_squares','Grad+','Age: Sum of Squares',[
    [{q:'Sum of squares of two ages is $625$ and one age is $15$. Find other age.',o:['$10$','$15$','$20$','$25$'],a:2},{q:'Sum of squares is $1000$ and one age is $24$. Find other age.',o:['$18$','$20$','$22$','$24$'],a:1}],
    [{q:'Sum of squares is $625$ and age difference is $5$. Find ages.',o:['$15,20$','$10,25$','$7,24$','$12,23$'],a:0},{q:'Sum of squares is $325$ and difference is $5$. Find ages.',o:['$10,15$','$5,20$','$12,17$','$9,14$'],a:0}],
    [{q:'Sum of squares is $169$ and one age is $5$. Find other age.',o:['$10$','$11$','$12$','$13$'],a:2},{q:'Sum of squares is $481$ and one age is $20$. Find other age.',o:['$7$','$8$','$9$','$10$'],a:2}],
    [{q:'Difference of squares of ages is $144$ and age difference is $6$. Find sum of ages.',o:['$18$','$24$','$30$','$36$'],a:1},{q:'Difference of squares is $280$ and difference is $10$. Find sum.',o:['$24$','$26$','$28$','$30$'],a:2}],
    [{q:'Ages have sum $25$ and product $150$. Find sum of squares.',o:['$325$','$350$','$375$','$400$'],a:0},{q:'Ages have sum $18$ and product $80$. Find sum of squares.',o:['$164$','$180$','$200$','$220$'],a:0}]]);

  reg('q2_age_sum_cubes','Grad+','Age: Sum of Cubes Identity',[
    [{q:'Sum of cubes is $9728$ and sum of ages is $32$. Find difference.',o:['$6$','$8$','$10$','$12$'],a:1},{q:'Sum of cubes is $945$ and sum of ages is $15$. Find product.',o:['$42$','$48$','$54$','$60$'],a:2}],
    [{q:'Sum of ages is $32$ and product is $240$. Find difference.',o:['$4$','$6$','$8$','$10$'],a:2},{q:'Sum of ages is $18$ and product is $80$. Find difference.',o:['$2$','$4$','$6$','$8$'],a:0}],
    [{q:'Ages are $20$ and $12$. Find difference of cubes.',o:['$6272$','$6200$','$6172$','$6000$'],a:0},{q:'Ages are $10$ and $8$. Find difference of cubes.',o:['$488$','$496$','$500$','$512$'],a:0}],
    [{q:'Brothers’ ages have sum $32$ and product $240$. Find positive difference.',o:['$6$','$8$','$10$','$12$'],a:1},{q:'Sisters’ ages have sum $14$ and product $45$. Find difference.',o:['$2$','$3$','$4$','$5$'],a:2}],
    [{q:'If $a+b=10$ and $ab=21$, find $a^3+b^3$.',o:['$280$','$300$','$370$','$420$'],a:2},{q:'If $a+b=12$ and $ab=35$, find $a^3+b^3$.',o:['$288$','$468$','$508$','$728$'],a:1}]]);

  reg('q2_surd_rat_2term','Grad+','Surd: Rationalize 2-Term',[
    [{q:'Simplify $#frac{1}{#sqrt{5}+#sqrt{3}}$.',o:['$#frac{#sqrt{5}-#sqrt{3}}{2}$','$#frac{#sqrt{5}+#sqrt{3}}{2}$','$#sqrt{2}$','$1$'],a:0},{q:'Simplify $#frac{1}{#sqrt{7}+#sqrt{5}}$.',o:['$#frac{#sqrt{7}-#sqrt{5}}{2}$','$#sqrt{35}$','$#frac{#sqrt{7}+#sqrt{5}}{2}$','$1$'],a:0}],
    [{q:'Simplify $#frac{1}{#sqrt{5}-#sqrt{3}}$.',o:['$#frac{#sqrt{5}+#sqrt{3}}{2}$','$#frac{#sqrt{5}-#sqrt{3}}{2}$','$2$','$#sqrt{15}$'],a:0},{q:'Simplify $#frac{1}{#sqrt{7}-#sqrt{3}}$.',o:['$#frac{#sqrt{7}+#sqrt{3}}{4}$','$#frac{#sqrt{7}-#sqrt{3}}{4}$','$#sqrt{10}$','$4$'],a:0}],
    [{q:'Simplify $#frac{2}{#sqrt{7}-#sqrt{3}}$.',o:['$#frac{#sqrt{7}+#sqrt{3}}{2}$','$#frac{#sqrt{7}-#sqrt{3}}{2}$','$#sqrt{10}$','$2#sqrt{7}$'],a:0},{q:'Simplify $#frac{4}{#sqrt{6}+#sqrt{2}}$.',o:['$#sqrt{6}-#sqrt{2}$','$#sqrt{6}+#sqrt{2}$','$2#sqrt{6}$','$2$'],a:0}],
    [{q:'Simplify $#frac{1}{2+#sqrt{3}}$.',o:['$2-#sqrt{3}$','$2+#sqrt{3}$','$1$','$#sqrt{3}$'],a:0},{q:'Simplify $#frac{1}{3-2#sqrt{2}}$.',o:['$3+2#sqrt{2}$','$3-2#sqrt{2}$','$#frac{1}{2}$','$2$'],a:0}],
    [{q:'Simplify $#frac{3}{#sqrt{5}+#sqrt{2}}$.',o:['$#sqrt{5}-#sqrt{2}$','$#sqrt{5}+#sqrt{2}$','$3$','$#sqrt{10}$'],a:0},{q:'Simplify $#frac{5}{#sqrt{7}+#sqrt{2}}$.',o:['$#sqrt{7}-#sqrt{2}$','$#sqrt{7}+#sqrt{2}$','$5$','$#sqrt{14}$'],a:0}]]);

  reg('q2_surd_rat_3term','Grad+','Surd: Rationalize 3-Term',[
    [{q:'Simplify $#frac{12}{3+#sqrt{5}+2#sqrt{2}}$.',o:['$1+#sqrt{5}-#sqrt{2}+#sqrt{10}$','$2$','$4$','None'],a:0},{q:'Simplify $#frac{4}{1+#sqrt{2}+#sqrt{3}}$.',o:['$#sqrt{2}+#sqrt{3}-1$','$#sqrt{3}-#sqrt{2}+1$','$2$','None'],a:3}],
    [{q:'For $#frac{1}{#sqrt{2}+#sqrt{3}-#sqrt{5}}$, is a single simple conjugate enough?',o:['Yes','No','$0$','$1$'],a:1},{q:'In $#frac{1}{#sqrt{5}+#sqrt{3}-#sqrt{2}}$, which group should be paired first?',o:['$#sqrt{5}+#sqrt{3}$','$#sqrt{5}-#sqrt{3}$','only $#sqrt{2}$','none'],a:0}],
    [{q:'Rationalizing $#frac{1}{#sqrt{2}+#sqrt{3}+#sqrt{5}}$ usually needs how many conjugate stages?',o:['$1$','$2$','$3$','$0$'],a:1},{q:'In $#frac{1}{2+#sqrt{3}+#sqrt{5}}$, first group should be?',o:['$2+#sqrt{3}$','$#sqrt{5}$','$2-#sqrt{3}$','all'],a:0}],
    [{q:'$#frac{12}{3+#sqrt{5}+2#sqrt{2}}$ equals?',o:['$1+#sqrt{5}-#sqrt{2}+#sqrt{10}$','$1-#sqrt{5}+#sqrt{2}+#sqrt{10}$','$2$','$4$'],a:0},{q:'Which denominator needs two-step rationalization?',o:['$#sqrt{5}+#sqrt{3}$','$3+#sqrt{5}+2#sqrt{2}$','$2+#sqrt{3}$','$#sqrt{7}-#sqrt{5}$'],a:1}],
    [{q:'$#frac{1}{#sqrt{3}+#sqrt{2}+#sqrt{5}}$: denominator after first rationalization contains?',o:['one radical','no radical','same expression','zero'],a:0},{q:'If denominator becomes $1$ after conjugate, answer type is?',o:['integer','conjugate surd','impossible','decimal only'],a:1}]]);

  reg('q2_surd_sum_fracs','Grad+','Surd: Sum of Fractions',[
    [{q:'Simplify $#frac{1}{#sqrt{5}+#sqrt{3}}+#frac{2}{3+#sqrt{5}}-#frac{3}{3+#sqrt{3}}$.',o:['$-#frac{1}{2}$','$0$','$#frac{1}{2}$','$1$'],a:1},{q:'Simplify $#frac{1}{#sqrt{3}+1}+#frac{1}{#sqrt{3}-1}-#sqrt{3}$.',o:['$0$','$1$','$-1$','$#sqrt{3}$'],a:0}],
    [{q:'Simplify $#frac{1}{#sqrt{5}+#sqrt{3}}+#frac{1}{#sqrt{5}-#sqrt{3}}$.',o:['$#sqrt{5}$','$#sqrt{3}$','$2#sqrt{5}$','$0$'],a:0},{q:'Simplify $#frac{1}{#sqrt{7}+#sqrt{3}}+#frac{1}{#sqrt{7}-#sqrt{3}}$.',o:['$#frac{#sqrt{7}}{2}$','$#frac{#sqrt{3}}{2}$','$#sqrt{7}$','$#sqrt{21}$'],a:0}],
    [{q:'Simplify $#frac{1}{2+#sqrt{3}}+#frac{1}{2-#sqrt{3}}$.',o:['$2$','$4$','$1$','$#sqrt{3}$'],a:1},{q:'Simplify $#frac{1}{3+2#sqrt{2}}+#frac{1}{3-2#sqrt{2}}$.',o:['$3$','$6$','$1$','$2#sqrt{2}$'],a:1}],
    [{q:'Simplify $#frac{1}{#sqrt{3}+1}-#frac{1}{#sqrt{3}-1}+1$.',o:['$-1$','$0$','$1$','$2$'],a:1},{q:'Simplify $#frac{1}{2+#sqrt{3}}-(2-#sqrt{3})$.',o:['$0$','$1$','$2$','$#sqrt{3}$'],a:0}],
    [{q:'Simplify $#frac{1}{#sqrt{5}+#sqrt{3}}-#frac{1}{#sqrt{5}-#sqrt{3}}$.',o:['$-#sqrt{3}$','$#sqrt{3}$','$#sqrt{5}$','$-#sqrt{5}$'],a:0},{q:'Simplify $#frac{1}{#sqrt{7}+#sqrt{3}}-#frac{1}{#sqrt{7}-#sqrt{3}}$.',o:['$-#frac{#sqrt{3}}{2}$','$#frac{#sqrt{3}}{2}$','$#sqrt{7}$','$0$'],a:0}]]);

  reg('q2_surd_conj_pair_sum','Grad+','Surd: Conjugate Pair Sum',[
    [{q:'Simplify $#frac{#sqrt{3}+#sqrt{2}}{#sqrt{3}-#sqrt{2}}+#frac{#sqrt{3}-#sqrt{2}}{#sqrt{3}+#sqrt{2}}$.',o:['$10$','$8$','$6$','$4$'],a:0},{q:'Simplify $#frac{#sqrt{5}+#sqrt{3}}{#sqrt{5}-#sqrt{3}}+#frac{#sqrt{5}-#sqrt{3}}{#sqrt{5}+#sqrt{3}}$.',o:['$7$','$8$','$9$','$10$'],a:1}],
    [{q:'Simplify $#frac{#sqrt{5}+#sqrt{3}}{#sqrt{5}-#sqrt{3}}-#frac{#sqrt{5}-#sqrt{3}}{#sqrt{5}+#sqrt{3}}$.',o:['$2#sqrt{15}$','$4#sqrt{15}$','$8#sqrt{15}$','$10$'],a:1},{q:'Simplify $#frac{#sqrt{3}+#sqrt{2}}{#sqrt{3}-#sqrt{2}}-#frac{#sqrt{3}-#sqrt{2}}{#sqrt{3}+#sqrt{2}}$.',o:['$4#sqrt{6}$','$8#sqrt{6}$','$10$','$12$'],a:0}],
    [{q:'Evaluate $#frac{(#sqrt{5}+#sqrt{3})^2+(#sqrt{5}-#sqrt{3})^2}{2}$.',o:['$8$','$10$','$16$','$20$'],a:0},{q:'Evaluate $#frac{(#sqrt{7}+#sqrt{2})^2+(#sqrt{7}-#sqrt{2})^2}{2}$.',o:['$9$','$18$','$14$','$4$'],a:0}],
    [{q:'Evaluate $#left(#frac{#sqrt{5}+#sqrt{3}}{#sqrt{5}-#sqrt{3}}#right)#times#left(#frac{#sqrt{5}-#sqrt{3}}{#sqrt{5}+#sqrt{3}}#right)$.',o:['$0$','$1$','$2$','$4$'],a:1},{q:'Product of conjugate reciprocal ratios equals?',o:['$-1$','$0$','$1$','$2$'],a:2}],
    [{q:'Simplify $#frac{#sqrt{7}+#sqrt{6}}{#sqrt{7}-#sqrt{6}}+#frac{#sqrt{7}-#sqrt{6}}{#sqrt{7}+#sqrt{6}}$.',o:['$26$','$24$','$22$','$20$'],a:0},{q:'Simplify $#frac{#sqrt{2}+1}{#sqrt{2}-1}+#frac{#sqrt{2}-1}{#sqrt{2}+1}$.',o:['$4$','$5$','$6$','$8$'],a:2}]]);

  reg('q2_surd_denom_3roots','Grad+','Surd: Denominator Three Roots',[
    [{q:'Is $#sqrt{2}+#sqrt{3}-#sqrt{5}$ a zero denominator?',o:['Yes','No','always zero','negative'],a:1},{q:'First group for rationalizing $#frac{1}{#sqrt{2}+#sqrt{3}-#sqrt{5}}$ should be?',o:['$#sqrt{2}+#sqrt{3}$','$#sqrt{5}$','$#sqrt{2}-#sqrt{3}$','none'],a:0}],
    [{q:'Simplify $#frac{1}{#sqrt{2}+#sqrt{3}-#sqrt{5}}+#frac{1}{#sqrt{2}-#sqrt{3}-#sqrt{5}}$.',o:['$0$','$#frac{1}{#sqrt{2}}$','$1$','$#sqrt{2}$'],a:0},{q:'In $#frac{1}{#sqrt{5}+#sqrt{3}-#sqrt{2}}+#frac{1}{#sqrt{5}-#sqrt{3}-#sqrt{2}}$, which sign-pair cancels?',o:['$#sqrt{3}$','$#sqrt{5}$','$#sqrt{2}$','none'],a:0}],
    [{q:'Which result can occur in conjugate sum?',o:['$#sqrt{2}$','$#pi$','$0$ only','undefined only'],a:0},{q:'If a surd sum simplifies to $#sqrt{2}$, the rationalized denominator is generally?',o:['rational','irrational only','zero','impossible'],a:0}],
    [{q:'Symmetric denominators with opposite middle signs may sum to?',o:['$0$','$1$','$2$','$#sqrt{3}$'],a:0},{q:'If two terms are reciprocals of negatives, their sum is?',o:['$0$','$1$','$-1$','$2$'],a:0}],
    [{q:'A three-root denominator like $#sqrt{a}+#sqrt{b}+#sqrt{c}$ usually requires?',o:['no step','one grouping then conjugate','cube root','logarithm'],a:1},{q:'Rationalizing $#sqrt{a}+#sqrt{b}+#sqrt{c}$ starts by grouping?',o:['one term vs two terms','all separately','no grouping','square root only'],a:0}]]);

  reg('q2_given_sqrt_frac','Grad+','Surd: Given Root, Eval Fraction',[
    [{q:'If $#sqrt{2}=1.4142$, find $#frac{7}{3+#sqrt{2}}$.',o:['$1.5858$','$3.4852$','$3.5858$','$4.4142$'],a:0},{q:'If $#sqrt{2}=1.414$, find $#frac{1}{1+#sqrt{2}}$.',o:['$0.414$','$0.586$','$1.414$','$2.414$'],a:0}],
    [{q:'If $#sqrt{7}=2.645$, find $#frac{1}{#sqrt{7}+2}$ approximately.',o:['$0.215$','$0.245$','$0.300$','$0.385$'],a:0},{q:'Find $#frac{2}{#sqrt{7}+1}$ approximately.',o:['$0.548$','$0.678$','$0.732$','$0.845$'],a:0}],
    [{q:'If $#sqrt{3}=1.732$, find $#frac{2}{#sqrt{3}+1}$ approximately.',o:['$0.732$','$0.852$','$1.268$','$1.732$'],a:0},{q:'If $#sqrt{5}=2.236$, find $#frac{1}{#sqrt{5}+2}$ approximately.',o:['$0.236$','$0.300$','$0.472$','$4.236$'],a:0}],
    [{q:'If $#sqrt{7}=2.645$, find $#frac{1}{#sqrt{7}}$ approximately.',o:['$0.378$','$0.398$','$0.418$','$0.448$'],a:0},{q:'If $#sqrt{2}=1.414$, find $#frac{1}{#sqrt{2}}$ approximately.',o:['$0.707$','$0.714$','$0.727$','$0.747$'],a:0}],
    [{q:'If $#sqrt{3}=1.732$, find $#frac{5}{2+#sqrt{3}}$ nearest.',o:['$1.34$','$1.44$','$1.54$','$1.64$'],a:0},{q:'If $#sqrt{2}=1.414$, find $#frac{3}{1+#sqrt{2}}$ nearest.',o:['$1.24$','$1.34$','$1.44$','$1.54$'],a:0}]]);

  reg('q2_given_sqrt_inv','Grad+','Surd: Given Root, Inverse Root',[
    [{q:'If $#sqrt{7}=2.645$, find $#frac{1}{#sqrt{28}}$ to three decimals.',o:['$0.183$','$0.185$','$0.187$','$0.189$'],a:3},{q:'If $#sqrt{7}=2.646$, find $#frac{1}{#sqrt{28}}$ approximately.',o:['$0.189$','$0.199$','$0.209$','$0.219$'],a:0}],
    [{q:'If $#sqrt{3}=1.732$, find $#frac{1}{#sqrt{12}}$ approximately.',o:['$0.289$','$0.300$','$0.333$','$0.577$'],a:0},{q:'Find $#frac{1}{#sqrt{27}}$ approximately.',o:['$0.192$','$0.202$','$0.212$','$0.222$'],a:0}],
    [{q:'If $#sqrt{5}=2.236$, find $#frac{1}{#sqrt{45}}$ approximately.',o:['$0.149$','$0.159$','$0.169$','$0.179$'],a:0},{q:'Find $#frac{1}{#sqrt{20}}$ approximately.',o:['$0.224$','$0.236$','$0.250$','$0.500$'],a:0}],
    [{q:'Find $#frac{1}{#sqrt{8}}$ to three decimals.',o:['$0.354$','$0.364$','$0.374$','$0.384$'],a:0},{q:'Find $#frac{1}{#sqrt{18}}$ approximately.',o:['$0.236$','$0.246$','$0.256$','$0.266$'],a:0}],
    [{q:'Given $#sqrt{2}=1.414$, find $#frac{1}{#sqrt{50}}$ approximately.',o:['$0.141$','$0.151$','$0.161$','$0.171$'],a:0},{q:'Given $#sqrt{3}=1.732$, find $#frac{1}{#sqrt{75}}$ approximately.',o:['$0.115$','$0.125$','$0.135$','$0.145$'],a:0}]]);

  reg('q2_given_sqrt_ratio','Grad+','Surd: Given Root, Ratio Root',[
    [{q:'If $#sqrt{33}=5.745$, approximate $#sqrt{#frac{3}{11}}$.',o:['$1$','$6.32$','$0.5223$','$2.035$'],a:2},{q:'Approximate $#sqrt{#frac{11}{3}}$.',o:['$1.915$','$2.015$','$2.115$','$2.215$'],a:0}],
    [{q:'If $#sqrt{2}=1.414$, approximate $#sqrt{#frac{1}{8}}$.',o:['$0.177$','$0.354$','$0.707$','$1.414$'],a:1},{q:'Approximate $#sqrt{#frac{1}{18}}$.',o:['$0.236$','$0.333$','$0.424$','$0.471$'],a:0}],
    [{q:'Find $#sqrt{#frac{5}{20}}$.',o:['$0.25$','$0.5$','$1$','$2$'],a:1},{q:'Find $#sqrt{#frac{3}{12}}$.',o:['$0.25$','$0.5$','$0.75$','$1$'],a:1}],
    [{q:'Find $#sqrt{#frac{2}{8}}$.',o:['$0.25$','$0.50$','$0.75$','$1$'],a:1},{q:'Find $#sqrt{#frac{9}{16}}$.',o:['$0.25$','$0.50$','$0.75$','$1$'],a:2}],
    [{q:'Approximate $#sqrt{#frac{4}{17}}$.',o:['$0.48$','$0.58$','$0.68$','$0.78$'],a:0},{q:'Approximate $#sqrt{#frac{5}{19}}$.',o:['$0.41$','$0.51$','$0.61$','$0.71$'],a:1}]]);

  reg('q2_approx_root_expr','Grad+','Surd: Approx Root Expression',[
    [{q:'Approximate $#sqrt{2025.11}#times#sqrt{256.04}$.',o:['$720$','$780$','$820$','$900$'],a:0},{q:'Approximate $#sqrt{399.95}#times#sqrt{64.05}$.',o:['$120$','$140$','$160$','$180$'],a:2}],
    [{q:'Approximate $#frac{#sqrt{1600}}{#sqrt{25}}$.',o:['$6$','$7$','$8$','$9$'],a:2},{q:'Approximate $#frac{#sqrt{2500}}{#sqrt{4}}$.',o:['$20$','$25$','$30$','$35$'],a:1}],
    [{q:'Approximate $#sqrt{0.01}+#sqrt{0.04}$.',o:['$0.1$','$0.2$','$0.3$','$0.4$'],a:2},{q:'Approximate $#sqrt{0.09}#times#sqrt{0.16}$.',o:['$0.06$','$0.12$','$0.18$','$0.24$'],a:1}],
    [{q:'Nearest integer to $#sqrt{980}$ is?',o:['$30$','$31$','$32$','$33$'],a:1},{q:'Nearest integer to $#sqrt{1680}$ is?',o:['$39$','$40$','$41$','$42$'],a:2}],
    [{q:'Approximate $#sqrt{1680}#times#sqrt{40}$.',o:['$240$','$259$','$280$','$320$'],a:1},{q:'Approximate $#sqrt{250}#times#sqrt{40}$.',o:['$80$','$90$','$100$','$110$'],a:2}]]);

  reg('q2_nested_x_plus','Grad+','Surd: Infinite Nested (x=√(a+x))',[
    [{q:'If $x=#sqrt{1+#sqrt{1+#sqrt{1+#cdots}}}$, find $x$.',o:['$#frac{#sqrt{5}+1}{2}$','$1$','$2$','$#sqrt{2}$'],a:0},{q:'Positive $x$ satisfies $x^2=x+1$. Find $x$.',o:['$#frac{1+#sqrt{5}}{2}$','$#frac{1-#sqrt{5}}{2}$','$1$','$2$'],a:0}],
    [{q:'Find $#sqrt{2+#sqrt{2+#sqrt{2+#cdots}}}$.',o:['$1$','$1.5$','$2$','$2.5$'],a:2},{q:'If $x^2=x+2$ and $x>0$, find $x$.',o:['$1$','$2$','$3$','$4$'],a:1}],
    [{q:'Find $#sqrt{3+#sqrt{3+#sqrt{3+#cdots}}}$.',o:['$#frac{1+#sqrt{13}}{2}$','$2$','$3$','$4$'],a:0},{q:'Its value lies between?',o:['$1,2$','$2,3$','$3,4$','$4,5$'],a:1}],
    [{q:'Find positive value of $#sqrt{6+#sqrt{6+#sqrt{6+#cdots}}}$.',o:['$2$','$3$','$4$','$5$'],a:1},{q:'Find positive value of $#sqrt{12+#sqrt{12+#sqrt{12+#cdots}}}$.',o:['$3$','$4$','$5$','$6$'],a:1}],
    [{q:'If $x=#sqrt{n+x}$, the equation is?',o:['$x^2-x-n=0$','$x^2+x-n=0$','$x^2=n$','$x=n$'],a:0},{q:'If $x=#sqrt{20+x}$ and $x>0$, find $x$.',o:['$4$','$5$','$6$','$7$'],a:1}]]);

  reg('q2_nested_golden','Grad+','Surd: Nested Golden Ratio',[
    [{q:'Find $#sqrt{1+#sqrt{1+#sqrt{1+#cdots}}}$.',o:['$#frac{#sqrt{5}+1}{2}$','$#frac{#sqrt{3}+1}{2}$','$1$','$2$'],a:0},{q:'Its decimal value is about?',o:['$1.41$','$1.62$','$2$','$2.62$'],a:1}],
    [{q:'Positive root of $x^2-x-1=0$ is?',o:['$#frac{1+#sqrt{5}}{2}$','$#frac{1-#sqrt{5}}{2}$','$1$','$0$'],a:0},{q:'The nested radical positive value is?',o:['$#phi$','$#frac{1}{#phi}$','$2$','$#sqrt{2}$'],a:0}],
    [{q:'$#sqrt{1+#sqrt{1+#cdots}}$ lies between?',o:['$0,1$','$1,2$','$2,3$','$3,4$'],a:1},{q:'Is it greater than $1.5$?',o:['Yes','No','Equal','Cannot say'],a:0}],
    [{q:'Which equals $x=#sqrt{1+#sqrt{1+#cdots}}$?',o:['$#frac{#sqrt{5}+1}{2}$','$#sqrt{5}-1$','$2-#sqrt{5}$','$#sqrt{3}$'],a:0},{q:'Which is smaller?',o:['$x$','$2$','$3$','all equal'],a:0}],
    [{q:'If $x=#sqrt{1+x}$, find $x^2-x$.',o:['$0$','$1$','$2$','$-1$'],a:1},{q:'If $x=#sqrt{1+x}$, find $x^2$.',o:['$x$','$x+1$','$x-1$','$1$'],a:1}]]);

  reg('q2_nested_range','Grad+','Surd: Nested Radical Range',[
    [{q:'If $a=#sqrt{3+#sqrt{3+#sqrt{3+#cdots}}}$, which is true?',o:['$1<a<2$','$2<a<3$','$3<a<4$','$a=3$'],a:1},{q:'Approximate value is?',o:['$1.3$','$2.3$','$3.3$','$4.3$'],a:1}],
    [{q:'$#sqrt{5+#sqrt{5+#sqrt{5+#cdots}}}$ lies between?',o:['$1,2$','$2,3$','$3,4$','$4,5$'],a:1},{q:'$#sqrt{12+#sqrt{12+#sqrt{12+#cdots}}}$ lies between?',o:['$3,4$','$4,5$','$5,6$','$6,7$'],a:1}],
    [{q:'If $x=#sqrt{2+x}$, which is true?',o:['$x=1$','$x=2$','$2<x<3$','$x=3$'],a:1},{q:'If $x=#sqrt{3+x}$, which is true?',o:['$x=2$','$x>2$','$x=3$','$x<1$'],a:1}],
    [{q:'Does $#sqrt{3+#sqrt{3+#cdots}}$ equal $3$?',o:['True','False','Only approx','Cannot say'],a:1},{q:'Does $#sqrt{5+#sqrt{5+#cdots}}$ equal $#sqrt{5}$?',o:['True','False','Always','Sometimes'],a:1}],
    [{q:'Which is larger: $#sqrt{2+#sqrt{2+#cdots}}$ or $#sqrt{3+#sqrt{3+#cdots}}$?',o:['first','second','equal','cannot'],a:1},{q:'$#sqrt{5+#sqrt{5+#cdots}}$ compared to $3$ is?',o:['less','equal','greater','cannot'],a:0}]]);

  reg('q2_finite_nested','Grad+','Surd: Finite Nested Decompose',[
    [{q:'Evaluate $#sqrt{10+2#sqrt{6}+2#sqrt{10+2#sqrt{15}}}$.',o:['$#sqrt{2}+#sqrt{3}+#sqrt{5}$','$#sqrt{2}+#sqrt{3}-#sqrt{5}$','$#sqrt{5}$','None'],a:0},{q:'It has how many simple surd terms?',o:['$1$','$2$','$3$','$4$'],a:2}],
    [{q:'$(#sqrt{2}+#sqrt{3}+#sqrt{5})^2$ equals?',o:['$10+2#sqrt{6}+2#sqrt{10}+2#sqrt{15}$','$10$','$2#sqrt{30}$','$15$'],a:0},{q:'Evaluate $#sqrt{10+2#sqrt{6}+2#sqrt{10}+2#sqrt{15}}$.',o:['$#sqrt{2}+#sqrt{3}+#sqrt{5}$','$5$','$#sqrt{10}$','None'],a:0}],
    [{q:'Evaluate $#sqrt{7-4#sqrt{3}}$.',o:['$2-#sqrt{3}$','$2+#sqrt{3}$','$#sqrt{7}$','$1$'],a:0},{q:'Evaluate $#sqrt{7+4#sqrt{3}}$.',o:['$2+#sqrt{3}$','$2-#sqrt{3}$','$#sqrt{3}$','$7$'],a:0}],
    [{q:'Evaluate $#sqrt{5+2#sqrt{6}}$.',o:['$#sqrt{2}+#sqrt{3}$','$#sqrt{3}-#sqrt{2}$','$5$','$1$'],a:0},{q:'Evaluate $#sqrt{5-2#sqrt{6}}$.',o:['$#sqrt{3}-#sqrt{2}$','$#sqrt{3}+#sqrt{2}$','$1$','$5$'],a:0}],
    [{q:'Evaluate $#sqrt{3+2#sqrt{2}}$.',o:['$1+#sqrt{2}$','$#sqrt{2}-1$','$2+#sqrt{2}$','$3$'],a:0},{q:'Evaluate $#sqrt{3-2#sqrt{2}}$.',o:['$#sqrt{2}-1$','$#sqrt{2}+1$','$3$','$1$'],a:0}]]);

  reg('q2_double_nested','Grad+','Surd: Double Nested Sum/Diff',[
    [{q:'Evaluate $#sqrt{5+2#sqrt{6}}+#sqrt{5-2#sqrt{6}}$.',o:['$2#sqrt{2}$','$2#sqrt{3}$','$5$','$1$'],a:0},{q:'Evaluate $#sqrt{7+4#sqrt{3}}+#sqrt{7-4#sqrt{3}}$.',o:['$2$','$4$','$2#sqrt{3}$','$#sqrt{7}$'],a:1}],
    [{q:'Evaluate $#sqrt{5+2#sqrt{6}}-#sqrt{5-2#sqrt{6}}$.',o:['$2#sqrt{2}$','$2#sqrt{3}$','$#sqrt{6}$','$1$'],a:1},{q:'Evaluate $#sqrt{7+4#sqrt{3}}-#sqrt{7-4#sqrt{3}}$.',o:['$2#sqrt{3}$','$4$','$2$','$#sqrt{3}$'],a:0}],
    [{q:'Evaluate $#left(#sqrt{5+2#sqrt{6}}+#sqrt{5-2#sqrt{6}}#right)^2$.',o:['$8$','$12$','$16$','$20$'],a:0},{q:'Evaluate $#left(#sqrt{7+4#sqrt{3}}+#sqrt{7-4#sqrt{3}}#right)^2$.',o:['$8$','$12$','$16$','$20$'],a:2}],
    [{q:'Evaluate $#sqrt{5+2#sqrt{6}}#times#sqrt{5-2#sqrt{6}}$.',o:['$1$','$2$','$3$','$4$'],a:0},{q:'Evaluate $#sqrt{7+4#sqrt{3}}#times#sqrt{7-4#sqrt{3}}$.',o:['$1$','$2$','$3$','$4$'],a:0}],
    [{q:'Since $#sqrt{m+n+2#sqrt{mn}}=#sqrt{m}+#sqrt{n}$, for $#sqrt{5+2#sqrt{6}}$ find $m,n$.',o:['$2,3$','$1,4$','$5,6$','$1,6$'],a:0},{q:'For $#sqrt{7+4#sqrt{3}}$, find $m,n$.',o:['$3,4$','$1,6$','$1,3$','$2,5$'],a:2}]]);

  try { console.log('[part2] Registered. TEMPLATES total =', TEMPLATES.length); } catch (e) {}
})();
