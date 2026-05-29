// ===================== TEMPLATES (88 Question Types) =====================
// ===================== TEMPLATES (88 Question Types) =====================
const TEMPLATES = [
// ═══════════════════ 10th+ LEVEL ═══════════════════

// 1. Perfect Square - Direct — WIDENED: roots 2-50, diverse wrong answers
{ id:'sq_direct', tier:'10th+', label:'Perfect Square - Direct',
  generate(){
    const r=rint(2,50); const sq=r*r;
    const offsets=shuffle([1,2,3,4,5,-1,-2,-3]);
    const wrongs=[];
    for(const o of offsets){
      const v=r+o;
      if(v>0 && v!==r && wrongs.length<3) wrongs.push(v);
    }
    while(wrongs.length<3) wrongs.push(r+wrongs.length+5);
    const sol=buildSqDirectV0Solution(sq,r);
    return {question:{en:'Find '+N('√'+sq),hing:'Find '+N('√'+sq),hi:N('√'+sq)+' ज्ञात कीजिए'},ans:String(r),w:wrongs.map(String),solution:sol};
  }
},

// 2. Prime Factorization — DYNAMIC: random prime combos
{ id:'sq_pf', tier:'10th+', label:'Prime Factorization',
  generate(){
    const primes=[2,3,5,7,11,13,17,19,23,29];
    const k=rint(2,4);
    const chosen=shuffle(primes).slice(0,k);
    const sq=chosen.reduce((a,p)=>a*p*p,1);
    const r=chosen.reduce((a,p)=>a*p,1);
    const offsets=shuffle([2,-1,3,-2,4,5,-3]);
    const wrongs=[];
    for(const o of offsets){
      const v=r+o;
      if(v>0 && v!==r && wrongs.length<3) wrongs.push(v);
    }
    while(wrongs.length<3) wrongs.push(r+wrongs.length+6);
    const sol=buildSqPfSolution(sq,r,chosen); return {question:{en:'Evaluate '+N('√'+sq),hing:'Evaluate '+N('√'+sq),hi:N('√'+sq)+' का मान ज्ञात कीजिए'},ans:String(r),w:wrongs.map(String),solution:sol};
  }
},

// 3. Long Division Method — WIDENED: 10-50
{ id:'sq_longdiv', tier:'10th+', label:'Long Division Method',
  generate(){
    const a=rint(10,50); const sq=a*a;
    const offsets=shuffle([1,-1,2,-2,3,-3,5,-5]);
    const wrongs=[];
    for(const o of offsets){
      const v=a+o;
      if(v>0 && v!==a && wrongs.length<3) wrongs.push(v);
    }
    while(wrongs.length<3) wrongs.push(a+wrongs.length+7);
    const sol=buildSqLongdivSolution(sq,a); return {question:{en:'Find '+N('√'+sq)+' by long division method',hing:'Long division se '+N('√'+sq)+' find karo',hi:'लम्बी विभाजन विधि से '+N('√'+sq)+' ज्ञात कीजिए'},ans:String(a),w:wrongs.map(String),solution:sol};
  }
},

// 4. Repeated Subtraction — WIDENED: rint(3,25)
{ id:'sq_repsub', tier:'10th+', label:'Repeated Subtraction',
  generate(){
    const r=rint(3,25); const sq=r*r; const steps=r;
    const offsets=shuffle([1,-1,2,-2,3,4,-3,5]);
    const wrongs=[];
    for(const o of offsets){
      const v=steps+o;
      if(v>0 && v!==steps && wrongs.length<3) wrongs.push(v);
    }
    while(wrongs.length<3) wrongs.push(steps+wrongs.length+6);
    const sol=buildSqRepsubSolution(sq,r); return {question:{en:'How many steps to find '+N('√'+sq)+' by repeated subtraction of odd numbers?',hing:N('√'+sq)+' by odd subtraction — kitne steps?',hi:'विषम संख्याओं की बारम्बार घटाव से '+N('√'+sq)+' कितने चरणों में?'},ans:String(steps),w:wrongs.map(String),solution:sol};
  }
},

// 5. Decimal Square Root — WIDENED: multi-digit decimal patterns
{ id:'sq_decimal', tier:'10th+', label:'Decimal Square Root',
  generate(){
    const variant=rint(0,2);
    let r,dec,ans,w1,w2,w3;
    if(variant===0){
      r=rint(1,99); dec=r*r/100; ans=r/10;
      w1=(r+1)/10; w2=(r-1>0?(r-1)/10:0); w3=r/100;
    } else if(variant===1){
      r=rint(1,50); dec=r*r/10000; ans=r/100;
      w1=(r+1)/100; w2=(r-1>0?(r-1)/100:0); w3=r/10;
    } else {
      r=rint(1,99); dec=r*r/100; ans=r/10;
      w1=Math.round((ans+0.1)*100)/100; w2=ans>0.1?Math.round((ans-0.1)*100)/100:0; w3=Math.round(ans*10)/100;
    }
    const decStr=String(dec).includes('.')?String(dec).replace(/0+$/,'').replace(/\.$/,''):String(dec);
    const sol=buildSqDecimalSolution(dec,ans,decStr); return {question:{en:'Evaluate '+N('√'+decStr),hing:'Evaluate '+N('√'+decStr),hi:N('√'+decStr)+' का मान ज्ञात कीजिए'},ans:String(ans),w:[String(w1),String(w2),String(w3)],solution:sol};
  }
},

// 6. Fraction Square Root — WIDENED: larger values, simplification variants
{ id:'sq_frac', tier:'10th+', label:'Fraction Square Root',
  generate(){
    const variant=rint(0,1);
    let n,d,sqN,sqD,ans,w1,w2,w3;
    if(variant===0){
      n=rint(1,15); d=rint(2,20);
      sqN=n*n; sqD=d*d; ans=n+'/'+d;
      w1=(n+1)+'/'+d; w2=n+'/'+(d+1); w3=(n>1?(n-1):1)+'/'+d;
    } else {
      const f1=rint(1,8),f2=rint(2,12);
      n=f1*f2; d=f2*f2; sqN=n*n; sqD=d*d;
      const g=gcd(n,d); ans=(n/g)+'/'+(d/g);
      w1=(n/g+1)+'/'+(d/g); w2=(n/g)+'/'+(d/g+1); w3=(n/g>1?(n/g-1):1)+'/'+(d/g);
    }
    const sol=buildSqFracSolution(sqN,sqD,ans,n,d); return {question:{en:'Find '+N('√('+sqN+'/'+sqD+')'),hing:'Find '+N('√('+sqN+'/'+sqD+')'),hi:N('√('+sqN+'/'+sqD+')')+' ज्ञात कीजिए'},ans:ans,w:[w1,w2,w3],solution:sol};
  }
},

// 7. Make Perfect Square (×) — DYNAMIC: random primes up to 30
{ id:'sq_make_x', tier:'10th+', label:'Make Perfect Square (×)',
  generate(){
    const variant=rint(0,2);
    let num,ans,w1,w2,w3;
    if(variant===0){
      const primes=[2,3,5,7,11,13,17,19,23,29];
      const base=pick(primes); const sqPart=pick(primes.filter(p=>p!==base));
      num=base*sqPart*sqPart; ans=base;
      w1=base*2; w2=sqPart; w3=base+sqPart;
    } else if(variant===1){
      const primes=[2,3,5,7,11,13];
      const [p1,p2]=shuffle(primes).slice(0,2);
      const sqPart=pick(primes.filter(p=>p!==p1&&p!==p2));
      num=p1*p2*sqPart*sqPart; ans=p1*p2;
      w1=p1*p2*2; w2=sqPart; w3=p1+sqPart;
    } else {
      const base=rint(2,15); const sqPart=rint(2,12);
      if(base===sqPart) return this.generate();
      num=base*sqPart*sqPart; ans=base;
      w1=base*2; w2=sqPart; w3=base+sqPart;
    }
    const sol=buildSqMakeXSolution(num,ans); return {question:{en:'Multiply '+N(num)+' by what to make it a perfect square?',hing:N(num)+' ko kisse multiply karein ki perfect square bane?',hi:N(num)+' को किससे गुणा करें कि पूर्ण वर्ग बने?'},ans:String(ans),w:[String(w1),String(w2),String(w3)],solution:sol};
  }
},

// 8. Make Perfect Square (÷) — DYNAMIC: random primes up to 30
{ id:'sq_make_d', tier:'10th+', label:'Make Perfect Square (÷)',
  generate(){
    const variant=rint(0,2);
    let num,ans,w1,w2,w3;
    if(variant===0){
      const primes=[2,3,5,7,11,13,17,19,23,29];
      const base=pick(primes); const sqPart=pick(primes.filter(p=>p!==base));
      num=base*base*sqPart; ans=sqPart;
      w1=base; w2=sqPart*2; w3=base*sqPart;
    } else if(variant===1){
      const primes=[2,3,5,7,11,13];
      const [p1,p2]=shuffle(primes).slice(0,2);
      const sqPart=pick(primes.filter(p=>p!==p1&&p!==p2));
      num=p1*p1*p2*p2*sqPart; ans=sqPart;
      w1=p1*p2; w2=sqPart*2; w3=p1*sqPart;
    } else {
      const base=rint(2,15); const sqPart=rint(2,12);
      if(base===sqPart) return this.generate();
      num=base*base*sqPart; ans=sqPart;
      w1=base; w2=sqPart*2; w3=base*sqPart;
    }
    const sol=buildSqMakeDSolution(num,ans); return {question:{en:'Divide '+N(num)+' by what to make it a perfect square?',hing:N(num)+' ko kisse divide karein ki perfect square bane?',hi:N(num)+' को किससे भाग दें कि पूर्ण वर्ग बने?'},ans:String(ans),w:[String(w1),String(w2),String(w3)],solution:sol};
  }
},

// 9. Make Perfect Square (+) — WIDENED: 5-60
{ id:'sq_make_add', tier:'10th+', label:'Make Perfect Square (+)',
  generate(){
    const a=rint(5,60); const sq=a*a; const num=sq-rint(1,Math.min(30,a)); const ans=sq-num;
    const offsets=shuffle([2,-1,5,-3,7,4,-2,10]);
    const wrongs=[];
    for(const o of offsets){
      const v=ans+o;
      if(v>0 && v!==ans && wrongs.length<3) wrongs.push(v);
    }
    while(wrongs.length<3) wrongs.push(ans+wrongs.length*3+8);
    const sol=buildSqMakeAddSolution(num,ans); return {question:{en:'Add what to '+N(num)+' to make it a perfect square?',hing:N(num)+' mein kya jodein ki perfect square bane?',hi:N(num)+' में क्या जोड़ें कि पूर्ण वर्ग बने?'},ans:String(ans),w:wrongs.map(String),solution:sol};
  }
},

// 10. Estimation (Between) — WIDENED: 2-30
{ id:'sq_est_between', tier:'10th+', label:'Estimation (Between)',
  generate(){
    const a=rint(2,30); const num=a*a+rint(1,a*2);
    const lo=a; const hi=a+1;
    const wrongPairs=[[lo-1,lo],[hi,hi+1],[lo-2,lo-1],[hi+1,hi+2],[lo+1,hi+1],[lo-1,hi]].filter(p=>p[0]>0);
    const picked=shuffle(wrongPairs).slice(0,3);
    while(picked.length<3) picked.push([lo+picked.length+2,hi+picked.length+2]);
    const sol=buildSqEstBetweenSolution(a,num,lo,hi); return {question:{en:N('√'+num)+' lies between:',hing:N('√'+num)+' kiske beech mein hai?',hi:N('√'+num)+' किसके बीच है?'},ans:lo+' & '+hi,w:picked.map(p=>p.join(' & ')),solution:sol};
  }
},

// 11. Basic Simplification — WIDENED: larger values, operation variants
{ id:'sq_simp', tier:'10th+', label:'Basic Simplification',
  generate(){
    const variant=rint(0,3);
    let a,b,c,expr,ans;
    a=rint(2,20); b=rint(2,20); c=rint(2,15);
    const va=a*a, vb=b*b, vc=c*c;
    if(variant===0){ expr=N('√'+va)+' + '+N('√'+vb)+' − '+N('√'+vc); ans=a+b-c; }
    else if(variant===1){ expr=N('√'+va)+' − '+N('√'+vb)+' + '+N('√'+vc); ans=a-b+c; }
    else if(variant===2){ expr=N('√'+va)+' + '+N('√'+vb)+' + '+N('√'+vc); ans=a+b+c; }
    else { expr=N('√'+va)+' − '+N('√'+vb)+' − '+N('√'+vc); ans=a-b-c; }
    const offsets=shuffle([2,-1,3,-2,5,4,-3]);
    const wrongs=[];
    for(const o of offsets){ if(ans+o!==ans && wrongs.length<3) wrongs.push(ans+o); }
    while(wrongs.length<3) wrongs.push(ans+wrongs.length*2+6);
    const sol=buildSqSimpSolution(a,b,c,variant,ans); return {question:{en:expr+' = ?',hing:expr+' = ?',hi:expr+' = ?'},ans:String(ans),w:wrongs.map(String),solution:sol};
  }
},

// 12. Product Under Root — WIDENED: 2-20
{ id:'sq_prod', tier:'10th+', label:'Product Under Root',
  generate(){
    const a=rint(2,20),b=rint(2,20); const prod=a*a*b*b; const ans=a*b;
    const offsets=shuffle([2,-1,3,a,-2,b,5]);
    const wrongs=[];
    for(const o of offsets){ const v=ans+o; if(v>0 && v!==ans && wrongs.length<3) wrongs.push(v); }
    while(wrongs.length<3) wrongs.push(ans+wrongs.length+4);
    const sol=buildSqProdSolution(a,b,ans); return {question:{en:N('√('+a*a+' × '+b*b+')')+' = ?',hing:N('√('+a*a+' × '+b*b+')')+' = ?',hi:N('√('+a*a+' × '+b*b+')')+' = ?'},ans:String(ans),w:wrongs.map(String),solution:sol};
  }
},

// 13. Word Problem: Area → Side — WIDENED: 5-50
{ id:'sq_area_side', tier:'10th+', label:'Word Problem: Area → Side',
  generate(){
    const s=rint(5,50); const area=s*s;
    const offsets=shuffle([5,-3,3,-5,7,-2,10]);
    const wrongs=[];
    for(const o of offsets){ const v=s+o; if(v>0 && v!==s && wrongs.length<3) wrongs.push(v); }
    while(wrongs.length<3) wrongs.push(s+wrongs.length*2+4);
    const sol=buildSqAreaSideSolution(s,area); return {question:{en:'Area of a square field is '+N(area)+' m². Find its side.',hing:'Square field ki area '+N(area)+' m² hai. Side?',hi:'वर्गाकार मैदान का क्षेत्रफल '+N(area)+' m² है। भुजा ज्ञात कीजिए।'},ans:s+' m',w:wrongs.map(v=>v+' m'),solution:sol};
  }
},

// 15. Digits in Square Root — WIDENED: n=1-6
{ id:'sq_digits', tier:'10th+', label:'Digits in Square Root',
  generate(){
    const n=rint(1,6); const lo=Math.pow(10,2*(n-1)); const hi=Math.pow(10,2*n)-1;
    const num=rint(lo,Math.min(hi,lo+9999)); const ans=n;
    const offsets=shuffle([1,-1,2,-2,3]);
    const wrongs=[];
    for(const o of offsets){ const v=ans+o; if(v>0 && v!==ans && wrongs.length<3) wrongs.push(v); }
    while(wrongs.length<3) wrongs.push(ans+wrongs.length+2);
    const sol=buildSqDigitsSolution(n,num,ans); return {question:{en:'Number of digits in '+N('√'+num),hing:N('√'+num)+' mein kitne digits hain?',hi:N('√'+num)+' में कितने अंक हैं?'},ans:String(ans),w:wrongs.map(String),solution:sol};
  }
},

// 16. Square Root of 1 — WIDENED: larger perfect squares
{ id:'sq_root1', tier:'10th+', label:'Square Root of 1',
  generate(){
    const r=rint(0,40); const n=r*r; const ans=r;
    const offsets=shuffle([1,-1,2,-2,3,5]);
    const wrongs=[];
    for(const o of offsets){ const v=ans+o; if(v>=0 && v!==ans && wrongs.length<3) wrongs.push(v); }
    while(wrongs.length<3) wrongs.push(ans+wrongs.length+4);
    const sol=buildSqRoot1Solution(r,n); return {question:{en:'What is '+N('√'+n)+' ?',hing:N('√'+n)+' kya hai?',hi:N('√'+n)+' क्या है?'},ans:String(ans),w:wrongs.map(String),solution:sol};
  }
},

// 17. Approximation — WIDENED: 2-30, multiple sub-variants
{ id:'sq_approx', tier:'10th+', label:'Approximation',
  generate(){
    const variant=rint(0,3);
    let a,num,ans,w1,w2,w3;
    if(variant===0){
      a=rint(2,30); num=a*a+1; ans=a+1/(2*a);
      w1=Number(a.toFixed(2)); w2=Number((a+1).toFixed(2)); w3=Number((a-0.5).toFixed(2));
    } else if(variant===1){
      a=rint(3,25); num=a*a+a; ans=a+0.5;
      w1=Number(a.toFixed(1)); w2=Number((a+1).toFixed(1)); w3=Number((a-0.5).toFixed(1));
    } else if(variant===2){
      a=rint(3,30); num=a*a-1; ans=a-1/(2*a);
      w1=Number(a.toFixed(2)); w2=Number((a-1).toFixed(2)); w3=Number((a+0.5).toFixed(2));
    } else {
      a=rint(2,25); num=a*a+2; ans=a+1/a;
      w1=Number(a.toFixed(2)); w2=Number((a+0.5).toFixed(2)); w3=Number((a+1).toFixed(2));
    }
    const fmt=v=>Number.isInteger(v)?String(v):v.toFixed(2).replace(/0+$/,'').replace(/\.$/,'');
    const sol=buildSqApproxSolution(a,num,ans,variant);
    return {question:{en:N('√'+num)+' ≈ ?',hing:N('√'+num)+' lagbhag kitna hai?',hi:N('√'+num)+' लगभग कितना है?'},ans:fmt(ans),w:[fmt(w1),fmt(w2),fmt(w3)],solution:sol};
  }
},

// 18. Quotient Under Root — WIDENED: guarantee divisibility
{ id:'sq_quot', tier:'10th+', label:'Quotient Under Root',
  generate(){
    const b=rint(2,15); const q=rint(2,20); const a=b*q;
    const num=a*a; const den=b*b; const ans=q;
    const offsets=shuffle([1,-1,2,-2,3,b]);
    const wrongs=[];
    for(const o of offsets){ const v=ans+o; if(v>0 && v!==ans && wrongs.length<3) wrongs.push(v); }
    while(wrongs.length<3) wrongs.push(ans+wrongs.length+3);
    const sol=buildSqQuotSolution(a,b,num,den,ans);
    return {question:{en:N('√'+num)+' / '+N('√'+den)+' = ?',hing:N('√'+num)+' / '+N('√'+den)+' = ?',hi:N('√'+num)+' / '+N('√'+den)+' = ?'},ans:String(ans),w:wrongs.map(String),solution:sol};
  }
},

// 19. √(n²) Property — WIDENED: 2-40, variant formats
{ id:'sq_n2_prop', tier:'10th+', label:'√(n²) Property',
  generate(){
    const variant=rint(0,2);
    let n,ans,question,w1,w2,w3,nsq;
    if(variant===0){
      n=rint(2,40); ans=n; nsq=n*n;
      w1=n*2; w2=n*n; w3=-n;
      question={en:N('√('+n+'²)')+' = ?',hing:N('√('+n+'²)')+' = ?',hi:N('√('+n+'²)')+' = ?'};
    } else if(variant===1){
      n=rint(5,50); ans=n; nsq=n*n;
      w1=n+1; w2=n-1; w3=n*2;
      question={en:N('√'+nsq)+' = ?',hing:N('√'+nsq)+' = ?',hi:N('√'+nsq)+' = ?'};
    } else {
      n=rint(3,30); ans=n; nsq=n*n;
      w1=-n; w2=n*n; w3=n+2;
      question={en:N('√('+n+'²)')+' equals:',hing:N('√('+n+'²)')+' kya hai?',hi:N('√('+n+'²)')+' बराबर है:'};
    }
    const sol=buildSqN2PropSolution(n,nsq,ans,variant);
    return {question,ans:String(ans),w:[String(w1),String(w2),String(w3)],solution:sol};
  }
},

// 20. Perimeter from Area — WIDENED: 5-40
{ id:'sq_perim', tier:'10th+', label:'Perimeter from Area',
  generate(){
    const s=rint(5,40); const area=s*s; const perim=4*s;
    const offsets=shuffle([4,-4,8,-8,s,12]);
    const wrongs=[];
    for(const o of offsets){ const v=perim+o; if(v>0 && v!==perim && wrongs.length<3) wrongs.push(v); }
    while(wrongs.length<3) wrongs.push(perim+wrongs.length*3+5);
    const sol=buildSqPerimSolution(s,area,perim);
    return {question:{en:'Area of a square is '+N(area)+' cm². Find its perimeter.',hing:'Square ki area '+N(area)+' cm². Perimeter?',hi:'वर्ग का क्षेत्रफल '+N(area)+' cm² है। परिमाप ज्ञात कीजिए।'},ans:perim+' cm',w:wrongs.map(v=>v+' cm'),solution:sol};
  }
},

// 21. Make Perfect Square (-) — WIDENED: 5-40
{ id:'sq_make_sub', tier:'10th+', label:'Make Perfect Square (-)',
  generate(){
    const a=rint(5,40); const sq=a*a; const num=sq+rint(1,Math.min(25,a)); const ans=num-sq;
    const offsets=shuffle([3,-2,5,-1,7,4,10]);
    const wrongs=[];
    for(const o of offsets){ const v=ans+o; if(v>0 && v!==ans && wrongs.length<3) wrongs.push(v); }
    while(wrongs.length<3) wrongs.push(ans+wrongs.length*2+6);
    const sol=buildSqMakeSubSolution(num,ans); return {question:{en:'Subtract what from '+N(num)+' to make it a perfect square?',hing:N(num)+' mein se kya ghata dein ki perfect square bane?',hi:N(num)+' से क्या घटाएँ कि पूर्ण वर्ग बने?'},ans:String(ans),w:wrongs.map(String),solution:sol};
  }
},

// ═══════════════════ CUBE ROOT — 10th+ ═══════════════════

// 22. Perfect Cube - Direct — WIDENED: rint(2,25)
{ id:'cb_direct', tier:'10th+', label:'Perfect Cube - Direct',
  generate(){
    const r=rint(2,25); const cube=r*r*r;
    const offsets=shuffle([1,-1,2,-2,3,-3,5]);
    const wrongs=[];
    for(const o of offsets){ const v=r+o; if(v!==0 && v!==r && wrongs.length<3) wrongs.push(v); }
    while(wrongs.length<3) wrongs.push(r+wrongs.length+4);
    const sol=buildCbDirectSolution(cube,r);
    return {question:{en:'Find '+N('∛'+cube),hing:'Find '+N('∛'+cube),hi:N('∛'+cube)+' ज्ञात कीजिए'},ans:String(r),w:wrongs.map(String),solution:sol};
  }
},

// 23. Cube - Prime Factorization — DYNAMIC: random prime combos
{ id:'cb_pf', tier:'10th+', label:'Cube - Prime Factorization',
  generate(){
    const primes=[2,3,5,7,11,13,17,19,23,29];
    const k=rint(2,3);
    const chosen=shuffle(primes).slice(0,k);
    const cube=chosen.reduce((a,p)=>a*p*p*p,1);
    const r=chosen.reduce((a,p)=>a*p,1);
    const offsets=shuffle([2,-1,3,-2,4,5,-3]);
    const wrongs=[];
    for(const o of offsets){ const v=r+o; if(v>0 && v!==r && wrongs.length<3) wrongs.push(v); }
    while(wrongs.length<3) wrongs.push(r+wrongs.length+6);
    const sol=buildCbPfSolution(cube,r,chosen);
    return {question:{en:N('∛'+cube)+' = ?',hing:N('∛'+cube)+' = ?',hi:N('∛'+cube)+' = ?'},ans:String(r),w:wrongs.map(String),solution:sol};
  }
},

// 24. Cube Root of 1 — WIDENED: larger perfect cubes
{ id:'cb_root1', tier:'10th+', label:'Cube Root of 1',
  generate(){
    const r=rint(-3,15); const n=r*r*r; const ans=r;
    const offsets=shuffle([1,-1,2,-2,3]);
    const wrongs=[];
    for(const o of offsets){ if(ans+o!==ans && wrongs.length<3) wrongs.push(ans+o); }
    while(wrongs.length<3) wrongs.push(ans+wrongs.length+2);
    const sol=buildCbRoot1Solution(r,n); return {question:{en:'What is '+N('∛'+n)+' ?',hing:N('∛'+n)+' kya hai?',hi:N('∛'+n)+' क्या है?'},ans:String(ans),w:wrongs.map(String),solution:sol};
  }
},

// 25. Cube Root of Negative — WIDENED: 2-15
{ id:'cb_neg', tier:'10th+', label:'Cube Root of Negative',
  generate(){
    const r=rint(2,15); const cube=-(r*r*r);
    const offsets=shuffle([r,-r*r,r*r,r+1,r-1,r*2]);
    const wrongs=[];
    for(const o of offsets){ if(o!==-r && wrongs.length<3) wrongs.push(o); }
    while(wrongs.length<3) wrongs.push(r+wrongs.length);
    const sol=buildCbNegSolution(r,cube); return {question:{en:N('∛('+cube+')')+' = ?',hing:N('∛('+cube+')')+' = ?',hi:N('∛('+cube+')')+' = ?'},ans:String(-r),w:wrongs.map(String),solution:sol};
  }
},

// 26. Decimal Cube Root — WIDENED: multiple decimal patterns
{ id:'cb_decimal', tier:'10th+', label:'Decimal Cube Root',
  generate(){
    const variant=rint(0,2);
    let r,cube,dec,ans,w1,w2,w3;
    if(variant===0){
      r=rint(1,99); cube=r*r*r; dec=cube/1000; ans=r/10;
      w1=(r+1)/10; w2=(r-1>0?(r-1)/10:0); w3=r/100;
    } else if(variant===1){
      r=rint(1,30); cube=r*r*r; dec=cube/1000000; ans=r/100;
      w1=(r+1)/100; w2=(r-1>0?(r-1)/100:0); w3=r/10;
    } else {
      r=rint(1,9); cube=r*r*r; dec=cube/1000; ans=r/10;
      w1=(r+1)/10; w2=(r>1?(r-1)/10:0); w3=r/100;
    }
    const decStr=String(dec).includes('.')?String(dec).replace(/0+$/,'').replace(/\.$/,''):String(dec);
    const sol=buildCbDecimalSolution(r,cube,dec,decStr,ans);
    return {question:{en:N('∛'+decStr)+' = ?',hing:N('∛'+decStr)+' = ?',hi:N('∛'+decStr)+' = ?'},ans:String(ans),w:[String(w1),String(w2),String(w3)],solution:sol};
  }
},

// 27. Fraction Cube Root — WIDENED: larger values
{ id:'cb_frac', tier:'10th+', label:'Fraction Cube Root',
  generate(){
    const variant=rint(0,1);
    let n,d,cN,cD,ans,w1,w2,w3;
    if(variant===0){
      n=rint(1,12); d=rint(2,15);
      cN=n*n*n; cD=d*d*d; ans=n+'/'+d;
      w1=(n+1)+'/'+d; w2=n+'/'+(d+1); w3=(n>1?(n-1):1)+'/'+d;
    } else {
      const f1=rint(1,6),f2=rint(2,10);
      n=f1*f2; d=f2*f2*f2; cN=n*n*n; cD=d*d*d;
      const g=gcd(n,d); ans=(n/g)+'/'+(d/g);
      w1=(n/g+1)+'/'+(d/g); w2=(n/g)+'/'+(d/g+1); w3=(n/g>1?(n/g-1):1)+'/'+(d/g);
    }
    const sol=buildCbFracSolution(cN,cD,ans,n,d);
    return {question:{en:N('∛('+cN+'/'+cD+')')+' = ?',hing:N('∛('+cN+'/'+cD+')')+' = ?',hi:N('∛('+cN+'/'+cD+')')+' = ?'},ans:ans,w:[w1,w2,w3],solution:sol};
  }
},

// 28. Make Perfect Cube (×) — WIDENED: wider range
{ id:'cb_make_x', tier:'10th+', label:'Make Perfect Cube (×)',
  generate(){
    const variant=rint(0,2);
    let num,ans,w1,w2,w3;
    if(variant===0){
      const primes=[2,3,5,7,11,13,17,19,23,29];
      const base=pick(primes); const sqPart=pick(primes.filter(p=>p!==base));
      num=base*sqPart*sqPart; ans=base;
      w1=base*2; w2=sqPart; w3=base+sqPart;
    } else if(variant===1){
      const primes=[2,3,5,7,11,13,17];
      const [p1,p2]=shuffle(primes).slice(0,2);
      num=p1*p2*p2; ans=p1*p1;
      w1=p1; w2=p2*p2; w3=p1+p2;
    } else {
      const primes=[2,3,5,7,11,13];
      const [p1,p2]=shuffle(primes).slice(0,2);
      const p3=pick(primes.filter(p=>p!==p1&&p!==p2));
      num=p1*p2*p3*p3; ans=p1*p2;
      w1=p1*p2*2; w2=p3; w3=p1+p2;
    }
    const sol=buildCbMakeXSolution(num,ans,variant);
    return {question:{en:'Multiply '+N(num)+' by what to make it a perfect cube?',hing:N(num)+' ko kisse multiply karein ki perfect cube bane?',hi:N(num)+' को किससे गुणा करें कि पूर्ण घन बने?'},ans:String(ans),w:[String(w1),String(w2),String(w3)],solution:sol};
  }
},

// 29. Make Perfect Cube (÷) — WIDENED: wider range
{ id:'cb_make_d', tier:'10th+', label:'Make Perfect Cube (÷)',
  generate(){
    const variant=rint(0,2);
    let num,ans,w1,w2,w3;
    if(variant===0){
      const primes=[2,3,5,7,11,13,17,19,23,29];
      const base=pick(primes); const sqPart=pick(primes.filter(p=>p!==base));
      num=base*base*base*sqPart; ans=sqPart;
      w1=base; w2=sqPart*2; w3=base*sqPart;
    } else if(variant===1){
      const primes=[2,3,5,7,11,13];
      const [p1,p2]=shuffle(primes).slice(0,2);
      const extra=pick(primes.filter(p=>p!==p1&&p!==p2));
      num=p1*p1*p1*p2*p2*p2*extra; ans=extra;
      w1=p1*p2; w2=extra*2; w3=p1*extra;
    } else {
      const base=rint(2,10); const extra=rint(2,8);
      num=base*base*base*extra; ans=extra;
      w1=base; w2=extra*2; w3=base*extra;
    }
    const sol=buildCbMakeDSolution(num,ans,variant);
    return {question:{en:'Divide '+N(num)+' by what to make it a perfect cube?',hing:N(num)+' ko kisse divide karein ki perfect cube bane?',hi:N(num)+' को किससे भाग दें कि पूर्ण घन बने?'},ans:String(ans),w:[String(w1),String(w2),String(w3)],solution:sol};
  }
},

// 30. Make Perfect Cube (+) — WIDENED: 2-12
{ id:'cb_make_add', tier:'10th+', label:'Make Perfect Cube (+)',
  generate(){
    const r=rint(2,12); const cube=r*r*r; const num=cube-rint(1,Math.min(30,r*3)); const ans=cube-num;
    const offsets=shuffle([3,-2,5,-1,7,4,10]);
    const wrongs=[];
    for(const o of offsets){ const v=ans+o; if(v>0 && v!==ans && wrongs.length<3) wrongs.push(v); }
    while(wrongs.length<3) wrongs.push(ans+wrongs.length*3+6);
    return {question:{en:'Add what to '+N(num)+' to make it a perfect cube?',hing:N(num)+' mein kya jodein ki perfect cube bane?',hi:N(num)+' में क्या जोड़ें कि पूर्ण घन बने?'},ans:String(ans),w:wrongs.map(String)};
  }
},

// 31. Make Perfect Cube (-) — WIDENED: 2-12
{ id:'cb_make_sub', tier:'10th+', label:'Make Perfect Cube (-)',
  generate(){
    const r=rint(2,12); const cube=r*r*r; const num=cube+rint(1,Math.min(30,r*3)); const ans=num-cube;
    const offsets=shuffle([3,-2,5,-1,7,4,10]);
    const wrongs=[];
    for(const o of offsets){ const v=ans+o; if(v>0 && v!==ans && wrongs.length<3) wrongs.push(v); }
    while(wrongs.length<3) wrongs.push(ans+wrongs.length*3+6);
    return {question:{en:'Subtract what from '+N(num)+' to make it a perfect cube?',hing:N(num)+' mein se kya ghata dein ki perfect cube bane?',hi:N(num)+' से क्या घटाएँ कि पूर्ण घन बने?'},ans:String(ans),w:wrongs.map(String)};
  }
},

// 32. Cube Estimation — WIDENED: rint(2,20)
{ id:'cb_est', tier:'10th+', label:'Cube Estimation',
  generate(){
    const a=rint(2,20); const num=a*a*a+rint(1,a*3);
    const lo=a; const hi=a+1;
    const wrongPairs=[[lo-1,lo],[hi,hi+1],[lo+1,hi+1],[lo-2,lo-1],[hi+1,hi+2],[lo-1,hi]].filter(p=>p[0]>0);
    const picked=shuffle(wrongPairs).slice(0,3);
    while(picked.length<3) picked.push([lo+picked.length+2,hi+picked.length+2]);
    return {question:{en:N('∛'+num)+' lies between:',hing:N('∛'+num)+' kiske beech mein hai?',hi:N('∛'+num)+' किसके बीच है?'},ans:lo+' & '+hi,w:picked.map(p=>p.join(' & '))};
  }
},

// 33. Digits in Cube Root — WIDENED: n=1-5
{ id:'cb_digits', tier:'10th+', label:'Digits in Cube Root',
  generate(){
    const n=rint(1,5); const lo=Math.pow(10,3*(n-1)); const hi=Math.pow(10,3*n)-1;
    const num=rint(lo,Math.min(hi,lo+99999)); const ans=n;
    const offsets=shuffle([1,-1,2,-2,3]);
    const wrongs=[];
    for(const o of offsets){ const v=ans+o; if(v>0 && v!==ans && wrongs.length<3) wrongs.push(v); }
    while(wrongs.length<3) wrongs.push(ans+wrongs.length+2);
    return {question:{en:'Number of digits in '+N('∛'+num),hing:N('∛'+num)+' mein kitne digits?',hi:N('∛'+num)+' में कितने अंक हैं?'},ans:String(ans),w:wrongs.map(String)};
  }
},

// 34. Cube Simplification — WIDENED: rint(1,10), operation variants
{ id:'cb_simp', tier:'10th+', label:'Cube Simplification',
  generate(){
    const variant=rint(0,3);
    let a,b,c,expr,ans;
    a=rint(1,10); b=rint(1,10); c=rint(1,10);
    const va=a*a*a, vb=b*b*b, vc=c*c*c;
    if(variant===0){ expr=N('∛'+va)+' + '+N('∛'+vb)+' − '+N('∛'+vc); ans=a+b-c; }
    else if(variant===1){ expr=N('∛'+va)+' − '+N('∛'+vb)+' + '+N('∛'+vc); ans=a-b+c; }
    else if(variant===2){ expr=N('∛'+va)+' + '+N('∛'+vb)+' + '+N('∛'+vc); ans=a+b+c; }
    else { expr=N('∛'+va)+' − '+N('∛'+vb)+' − '+N('∛'+vc); ans=a-b-c; }
    const offsets=shuffle([2,-1,3,-2,5,4]);
    const wrongs=[];
    for(const o of offsets){ if(ans+o!==ans && wrongs.length<3) wrongs.push(ans+o); }
    while(wrongs.length<3) wrongs.push(ans+wrongs.length*2+4);
    return {question:{en:expr+' = ?',hing:expr+' = ?',hi:expr+' = ?'},ans:String(ans),w:wrongs.map(String)};
  }
},

// 35. Product Under Cube Root — WIDENED: 2-12
{ id:'cb_prod', tier:'10th+', label:'Product Under Cube Root',
  generate(){
    const a=rint(2,12),b=rint(2,12); const prod=a*a*a*b*b*b; const ans=a*b;
    const offsets=shuffle([2,-1,3,a,-2,b,5]);
    const wrongs=[];
    for(const o of offsets){ const v=ans+o; if(v>0 && v!==ans && wrongs.length<3) wrongs.push(v); }
    while(wrongs.length<3) wrongs.push(ans+wrongs.length+4);
    return {question:{en:N('∛('+a*a*a+' × '+b*b*b+')')+' = ?',hing:N('∛('+a*a*a+' × '+b*b*b+')')+' = ?',hi:N('∛('+a*a*a+' × '+b*b*b+')')+' = ?'},ans:String(ans),w:wrongs.map(String)};
  }
},

// 36. ∛(n³) Property — WIDENED: 2-30, variant formats
{ id:'cb_n3_prop', tier:'10th+', label:'∛(n³) Property',
  generate(){
    const variant=rint(0,2);
    let n,ans,question,w1,w2,w3;
    if(variant===0){
      n=rint(2,30); ans=n;
      w1=n*n; w2=n*2; w3=n*n*n;
      question={en:N('∛('+n+'³)')+' = ?',hing:N('∛('+n+'³)')+' = ?',hi:N('∛('+n+'³)')+' = ?'};
    } else if(variant===1){
      n=rint(3,25); ans=n;
      w1=n+1; w2=n-1; w3=n*n;
      question={en:N('∛'+n*n*n)+' = ?',hing:N('∛'+n*n*n)+' = ?',hi:N('∛'+n*n*n)+' = ?'};
    } else {
      n=rint(2,20); ans=n;
      w1=-n; w2=n*n; w3=n+2;
      question={en:N('∛('+n+'³)')+' equals:',hing:N('∛('+n+'³)')+' kya hai?',hi:N('∛('+n+'³)')+' बराबर है:'};
    }
    return {question,ans:String(ans),w:[String(w1),String(w2),String(w3)]};
  }
},

// 37. Word Problem: Volume → Side — WIDENED: 3-20
{ id:'cb_vol_side', tier:'10th+', label:'Word Problem: Volume → Side',
  generate(){
    const s=rint(3,20); const vol=s*s*s;
    const offsets=shuffle([2,-1,3,-2,5,4]);
    const wrongs=[];
    for(const o of offsets){ const v=s+o; if(v>0 && v!==s && wrongs.length<3) wrongs.push(v); }
    while(wrongs.length<3) wrongs.push(s+wrongs.length+3);
    return {question:{en:'Volume of a cube is '+N(vol)+' cm³. Find its side.',hing:'Cube ka volume '+N(vol)+' cm³ hai. Side?',hi:'घन का आयतन '+N(vol)+' cm³ है। भुजा ज्ञात कीजिए।'},ans:s+' cm',w:wrongs.map(v=>v+' cm')};
  }
},

// 38. True/False Properties — FULLY DYNAMIC: computationally generated
{ id:'sq_tf_prop', tier:'10th+', label:'True/False Properties',
  generate(){
    const variant=rint(0,11);
    let en,hing,hi,ans,w;
    if(variant===0){
      const n=rint(2,30); const sq=n*n;
      const isEven=sq%2===0;
      en='The square of '+N(n)+' is '+(isEven?'odd':'even')+'.';
      hing=N(n)+' ka square '+(isEven?'odd':'even')+' hai.';
      hi=N(n)+' का वर्ग '+(isEven?'विषम':'सम')+' है।';
      ans='False'; w=['True','Sometimes','Depends'];
    } else if(variant===1){
      const n=rint(2,20); const cube=n*n*n;
      const isEven=cube%2===0;
      en='The cube of '+N(n)+' is '+(isEven?'odd':'even')+'.';
      hing=N(n)+' ka cube '+(isEven?'odd':'even')+' hai.';
      hi=N(n)+' का घन '+(isEven?'विषम':'सम')+' है।';
      ans='False'; w=['True','Sometimes','Depends'];
    } else if(variant===2){
      const n=rint(3,40);
      en=N('√('+n+'²)')+' equals '+N(n)+'.';
      hing=N('√('+n+'²)')+' = '+N(n)+'.';
      hi=N('√('+n+'²)')+' = '+N(n)+'.';
      ans='True'; w=['False','Only for odd n','Only for even n'];
    } else if(variant===3){
      const n=rint(2,15);
      en='∛('+N(-(n*n*n))+') is a real number.';
      hing='∛('+N(-(n*n*n))+') ek real number hai.';
      hi='∛('+N(-(n*n*n))+') एक वास्तविक संख्या है।';
      ans='True'; w=['False','Sometimes','Only for positive'];
    } else if(variant===4){
      const n=rint(2,20);
      en='√('+N(-(n*n))+') is a real number.';
      hing='√('+N(-(n*n))+') ek real number hai.';
      hi='√('+N(-(n*n))+') एक वास्तविक संख्या है।';
      ans='False'; w=['True','Sometimes','For even n only'];
    } else if(variant===5){
      const impossible=[2,3,7,8]; const badDigit=pick(impossible);
      en='A perfect square can end with the digit '+N(badDigit)+'.';
      hing='Perfect square digit '+N(badDigit)+' par khatam ho sakta hai.';
      hi='पूर्ण वर्ग अंक '+N(badDigit)+' पर समाप्त हो सकता है।';
      ans='False'; w=['True','Sometimes','For large numbers'];
    } else if(variant===6){
      en='Every perfect square has an odd number of factors.';
      hing='Har perfect square ke factors ki sankhya odd hoti hai.';
      hi='प्रत्येक पूर्ण वर्ग के गुणनखंडों की संख्या विषम होती है।';
      ans='True'; w=['False','Sometimes','Only for primes'];
    } else if(variant===7){
      en='√0 = 0 is a true statement.';
      hing='√0 = 0 ek sahi statement hai.';
      hi='√0 = 0 एक सत्य कथन है।';
      ans='True'; w=['False','Undefined','Depends'];
    } else if(variant===8){
      en='The cube of 0 is 0.';
      hing='0 ka cube 0 hota hai.';
      hi='0 का घन 0 होता है।';
      ans='True'; w=['False','Undefined','1'];
    } else if(variant===9){
      const p=[2,3,5,7,11,13,17,19,23,29]; const n=pick(p);
      const isOdd=(n*n)%2===1;
      en='The square of prime '+N(n)+' is always odd.';
      hing='Prime '+N(n)+' ka square hamesha odd hota hai.';
      hi='अभाज्य '+N(n)+' का वर्ग सदैव विषम होता है।';
      ans=isOdd?'True':'False'; w=isOdd?['False','Sometimes','Depends']:['True','Sometimes','For large primes'];
    } else if(variant===10){
      const n=rint(2,15);
      en='∛('+N((-n)**3)+') = '+N(-n)+'.';
      hing='∛('+N((-n)**3)+') = '+N(-n)+'.';
      hi='∛('+N((-n)**3)+') = '+N(-n)+'.';
      ans='True'; w=['False','No real solution','Undefined'];
    } else {
      en='√1 = ±1.';
      hing='√1 = ±1.';
      hi='√1 = ±1.';
      ans='False'; w=['True','Sometimes','For real numbers'];
    }
    return {question:{en,hing,hi},ans,w};
  }
},

// 39. Identify Perfect Square — WIDENED: 5-40
{ id:'sq_identify', tier:'10th+', label:'Identify Perfect Square',
  generate(){
    const sq=rint(5,40); const perfect=sq*sq;
    const wrongs=[];
    const offsets=shuffle([1,-1,2,-2,3,-3,5,7]);
    for(const o of offsets){
      const v=perfect+o;
      if(v>0 && Math.sqrt(v)!==Math.floor(Math.sqrt(v)) && wrongs.length<3) wrongs.push(v);
    }
    while(wrongs.length<3){
      const v=perfect+wrongs.length+1;
      if(Math.sqrt(v)!==Math.floor(Math.sqrt(v))) wrongs.push(v);
      else wrongs.push(v+1);
    }
    const opts=shuffle([perfect,...wrongs.slice(0,3)]);
    const wrong=wrongs.slice(0,3);
    return {question:{en:'Which of '+opts.join(', ')+' is a perfect square?',hing:opts.join(', ')+' mein se kaunsa perfect square hai?',hi:opts.join(', ')+' में से कौन सा पूर्ण वर्ग है?'},ans:String(perfect),w:wrong.map(String)};
  }
},

// 40. Identify Perfect Cube — WIDENED: 3-15
{ id:'cb_identify', tier:'10th+', label:'Identify Perfect Cube',
  generate(){
    const cb=rint(3,15); const perfect=cb*cb*cb;
    const wrongs=[];
    const offsets=shuffle([1,-1,2,-2,3,-3,5,7]);
    for(const o of offsets){
      const v=perfect+o;
      if(v>0 && Math.round(Math.cbrt(v))**3!==v && wrongs.length<3) wrongs.push(v);
    }
    while(wrongs.length<3){
      const v=perfect+wrongs.length+1;
      if(Math.round(Math.cbrt(v))**3!==v) wrongs.push(v);
      else wrongs.push(v+1);
    }
    const opts=shuffle([perfect,...wrongs.slice(0,3)]);
    const wrong=wrongs.slice(0,3);
    return {question:{en:'Which of '+opts.join(', ')+' is a perfect cube?',hing:opts.join(', ')+' mein se kaunsa perfect cube hai?',hi:opts.join(', ')+' में से कौन सा पूर्ण घन है?'},ans:String(perfect),w:wrong.map(String)};
  }
},

// 41. Unit Digit Logic — WIDENED: 2-30, add n³ variant
{ id:'sq_unit_digit', tier:'10th+', label:'Unit Digit Logic',
  generate(){
    const variant=rint(0,2);
    let n,sq,ans,w1,w2,w3,question;
    if(variant===0){
      n=rint(2,30); sq=n*n; ans=sq%10;
      w1=(ans+1)%10; w2=(ans+2)%10; w3=(ans+3)%10;
      question={en:'Unit digit of '+N(n+'²')+' is:',hing:N(n+'²')+' ka unit digit kya hai?',hi:N(n+'²')+' का इकाई अंक क्या है?'};
    } else if(variant===1){
      n=rint(2,20); const cube=n*n*n; ans=cube%10;
      w1=(ans+1)%10; w2=(ans+2)%10; w3=(ans+3)%10;
      question={en:'Unit digit of '+N(n+'³')+' is:',hing:N(n+'³')+' ka unit digit kya hai?',hi:N(n+'³')+' का इकाई अंक क्या है?'};
    } else {
      const possibleEnds=[0,1,4,5,6,9];
      const end=pick(possibleEnds);
      const validN=[];
      for(let d=0;d<=9;d++){ if((d*d)%10===end) validN.push(d); }
      ans=validN[0];
      const invalid=[0,1,2,3,4,5,6,7,8,9].filter(d=>!validN.includes(d));
      w1=invalid[0]||0; w2=invalid[1]||2; w3=invalid[2]||3;
      question={en:'If '+N('n²')+' ends in '+N(end)+', n can end with:',hing:'Agar '+N('n²')+' '+N(end)+' par khatam hota hai, to n kis digit par khatam ho sakta hai?',hi:'यदि '+N('n²')+' '+N(end)+' पर समाप्त होता है, तो n किस अंक पर समाप्त हो सकता है?'};
    }
    return {question,ans:String(ans),w:[String(w1),String(w2),String(w3)]};
  }
},

// 42. Property Check — FULLY DYNAMIC
{ id:'sq_prop_check', tier:'10th+', label:'Property Check',
  generate(){
    const variant=rint(0,7);
    let en,hing,hi,ans,w;
    if(variant===0){
      const bad=pick([2,3,7,8]);
      en='Which digit can NEVER be at the unit place of a perfect square?';
      hing='Perfect square ke unit place mein kaunsa digit kabhi nahi aata?';
      hi='पूर्ण वर्ग के इकाई स्थान पर कौन सा अंक कभी नहीं आ सकता?';
      ans=String(bad);
      const good=[0,1,4,5,6,9].filter(d=>d!==bad);
      w=shuffle(good).slice(0,3).map(String);
    } else if(variant===1){
      const good=pick([0,1,4,5,6,9]);
      en='Which digit CAN be at the unit place of a perfect square?';
      hing='Perfect square ke unit place mein kaunsa digit aa sakta hai?';
      hi='पूर्ण वर्ग के इकाई स्थान पर कौन सा अंक आ सकता है?';
      ans=String(good);
      const bad=shuffle([2,3,7,8]).slice(0,3);
      w=bad.map(String);
    } else if(variant===2){
      const n=rint(2,30); const sq=n*n; const ud=sq%10;
      en='The unit digit of '+N(n+'²')+' is:';
      hing=N(n+'²')+' ka unit digit hai:';
      hi=N(n+'²')+' का इकाई अंक है:';
      ans=String(ud);
      w=shuffle([0,1,2,3,4,5,6,7,8,9].filter(d=>d!==ud)).slice(0,3).map(String);
    } else if(variant===3){
      en='A perfect square ending in 5 must have its tens digit as:';
      hing='5 par khatam hone wale perfect square ka tens digit hamesha:';
      hi='5 पर समाप्त होने वाले पूर्ण वर्ग का दहाई अंक सदैव:';
      ans='2'; w=['0','5','1'];
    } else if(variant===4){
      en='A perfect square ending in 6 must have its tens digit as:';
      hing='6 par khatam hone wale perfect square ka tens digit kaisa hota hai?';
      hi='6 पर समाप्त होने वाले पूर्ण वर्ग का दहाई अंक कैसा होता है?';
      ans='Odd'; w=['Even','Zero','Any'];
    } else if(variant===5){
      en='If a perfect square ends in 0, how many zeros must it end with?';
      hing='Agar perfect square 0 par khatam hota hai, to kitne zero hone chahiye?';
      hi='यदि पूर्ण वर्ग 0 पर समाप्त होता है, तो कितने शून्य होने चाहिए?';
      ans='At least 2'; w=['1','3','Can be 1'];
    } else if(variant===6){
      const n=rint(2,15);
      en='Number of non-square numbers between '+N(n+'²')+' and '+N((n+1)+'²')+' is:';
      hing=N(n+'²')+' aur '+N((n+1)+'²')+' ke beech kitni non-square numbers hain?';
      hi=N(n+'²')+' और '+N((n+1)+'²')+' के बीच कितनी अपूर्णवर्ग संख्याएँ हैं?';
      ans=String(2*n); w=[String(n),String(2*n+1),String(n+1)];
    } else {
      en='Which digit can NEVER be at the unit place of a perfect cube?';
      hing='Perfect cube ke unit place mein kaunsa digit kabhi nahi aata?';
      hi='पूर्ण घन के इकाई स्थान पर कौन सा अंक कभी नहीं आ सकता?';
      ans='None — all digits possible'; w=['2','5','8'];
    }
    return {question:{en,hing,hi},ans,w};
  }
},

// 43. Concept Trap — FULLY DYNAMIC: random values in true/false checks
{ id:'sq_concept_trap', tier:'10th+', label:'Concept Trap',
  generate(){
    const variant=rint(0,7);
    let en,hing,hi,ans,w;
    if(variant===0){
      const a=rint(2,20),b=rint(2,20);
      en='Is √('+N(a+b)+') = √'+N(a)+' + √'+N(b)+' ?';
      hing='Kya √('+N(a+b)+') = √'+N(a)+' + √'+N(b)+' ?';
      hi='क्या √('+N(a+b)+') = √'+N(a)+' + √'+N(b)+' ?';
      ans='False'; w=['True','Only for a=b','For small numbers'];
    } else if(variant===1){
      const a=rint(2,15),b=rint(2,15);
      en='Is √('+N(a*b)+') = √'+N(a)+' × √'+N(b)+' ? (a,b > 0)';
      hing='Kya √('+N(a*b)+') = √'+N(a)+' × √'+N(b)+' ? (a,b > 0)';
      hi='क्या √('+N(a*b)+') = √'+N(a)+' × √'+N(b)+' ? (a,b > 0)';
      ans='True'; w=['False','Only for primes','Only for even numbers'];
    } else if(variant===2){
      const a=rint(2,15),b=rint(2,15);
      en='Is ∛('+N(a+b)+') = ∛'+N(a)+' + ∛'+N(b)+' ?';
      hing='Kya ∛('+N(a+b)+') = ∛'+N(a)+' + ∛'+N(b)+' ?';
      hi='क्या ∛('+N(a+b)+') = ∛'+N(a)+' + ∛'+N(b)+' ?';
      ans='False'; w=['True','Only for a=b','For perfect cubes'];
    } else if(variant===3){
      const a=rint(3,25);
      en='√('+N(a*a)+') = '+N(a)+'. This is because:';
      hing='√('+N(a*a)+') = '+N(a)+'. Yeh isliye kyunki:';
      hi='√('+N(a*a)+') = '+N(a)+'. यह इसलिए क्योंकि:';
      ans='√(n²) = |n|'; w=['√(n²) = n always','√(n²) = -n','√(n²) = n²'];
    } else if(variant===4){
      en='If √x = −5, then:';
      hing='Agar √x = −5, to:';
      hi='यदि √x = −5, तो:';
      ans='No solution (principal root ≥ 0)'; w=['x = 25','x = −25','x = ±25'];
    } else if(variant===5){
      const n=rint(2,15);
      en='∛('+N(-(n**3))+') = ?';
      hing='∛('+N(-(n**3))+') = ?';
      hi='∛('+N(-(n**3))+') = ?';
      ans=String(-n); w=[String(n),'Not a real number','±'+n];
    } else if(variant===6){
      en='Which property works for cube roots but NOT for square roots?';
      hing='Kaunsi property cube root mein kaam karti hai par square root mein nahi?';
      hi='कौन सा गुण घनमूल में काम करता है पर वर्गमूल में नहीं?';
      ans='Root of a negative number is real'; w=['√(ab)=√a×√b','√(a/b)=√a/√b','√(a²)=|a|'];
    } else {
      const a=rint(2,15),b=rint(2,15);
      en='Is √('+N(a)+'/'+N(b)+') = √'+N(a)+' / √'+N(b)+' ? (a,b > 0)';
      hing='Kya √('+N(a)+'/'+N(b)+') = √'+N(a)+' / √'+N(b)+' ? (a,b > 0)';
      hi='क्या √('+N(a)+'/'+N(b)+') = √'+N(a)+' / √'+N(b)+' ? (a,b > 0)';
      ans='True'; w=['False','Only for perfect squares','Only when a=b'];
    }
    return {question:{en,hing,hi},ans,w};
  }
},

// 44. Formula Rule — FULLY DYNAMIC: random numbers, compute digits in root
{ id:'sq_formula_rule', tier:'10th+', label:'Formula Rule',
  generate(){
    const variant=rint(0,5);
    let en,hing,hi,ans,w;
    if(variant===0){
      const n=rint(2,7);
      const lo=Math.pow(10,2*(n-1)); const hiBound=Math.pow(10,2*n)-1;
      const num=rint(lo,Math.min(hiBound,lo+99999));
      const digits=Math.ceil(n/2);
      en='How many digits are in √'+N(num)+' ?';
      hing='√'+N(num)+' mein kitne digits hain?';
      hi='√'+N(num)+' में कितने अंक हैं?';
      ans=String(digits);
      w=shuffle([digits-1,digits+1,digits+2,digits+3,digits-2].filter(d=>d>0)).slice(0,3).map(String);
    } else if(variant===1){
      const n=rint(2,7);
      const lo=Math.pow(10,3*(n-1)); const hiBound=Math.pow(10,3*n)-1;
      const num=rint(lo,Math.min(hiBound,lo+99999));
      const digits=Math.ceil(n/3);
      en='How many digits are in ∛'+N(num)+' ?';
      hing='∛'+N(num)+' mein kitne digits hain?';
      hi='∛'+N(num)+' में कितने अंक हैं?';
      ans=String(digits);
      w=shuffle([digits-1,digits+1,digits+2,digits+3,digits-2].filter(d=>d>0)).slice(0,3).map(String);
    } else if(variant===2){
      const root=rint(4,999);
      const num=root*root;
      const digits=String(root).length;
      en='√'+N(num)+' has how many digits?';
      hing='√'+N(num)+' mein kitne digits hain?';
      hi='√'+N(num)+' में कितने अंक हैं?';
      ans=String(digits);
      w=shuffle([digits-1,digits+1,digits+2].filter(d=>d>0)).slice(0,3).map(String);
      while(w.length<3) w.push(String(digits+w.length+1));
    } else if(variant===3){
      const root=rint(4,99);
      const num=root*root*root;
      const digits=String(root).length;
      en='∛'+N(num)+' has how many digits?';
      hing='∛'+N(num)+' mein kitne digits hain?';
      hi='∛'+N(num)+' में कितने अंक हैं?';
      ans=String(digits);
      w=shuffle([digits-1,digits+1,digits+2].filter(d=>d>0)).slice(0,3).map(String);
      while(w.length<3) w.push(String(digits+w.length+1));
    } else if(variant===4){
      const n=rint(2,8);
      const digits=Math.ceil(n/2);
      en='A '+N(n)+'-digit number has how many digits in its square root?';
      hing=N(n)+'-digit number ke square root mein kitne digits?';
      hi=N(n)+'-अंकीय संख्या के वर्गमूल में कितने अंक?';
      ans=String(digits);
      w=shuffle([digits-1,digits+1,digits+2,n].filter(d=>d>0&&d!==digits)).slice(0,3).map(String);
      while(w.length<3) w.push(String(digits+w.length));
    } else {
      const n=rint(3,9);
      const digits=Math.ceil(n/3);
      en='A '+N(n)+'-digit number has how many digits in its cube root?';
      hing=N(n)+'-digit number ke cube root mein kitne digits?';
      hi=N(n)+'-अंकीय संख्या के घनमूल में कितने अंक?';
      ans=String(digits);
      w=shuffle([digits-1,digits+1,digits+2,n].filter(d=>d>0&&d!==digits)).slice(0,3).map(String);
      while(w.length<3) w.push(String(digits+w.length));
    }
    return {question:{en,hing,hi},ans,w};
  }
}

,


// ═══════════════════ 12th+ LEVEL ═══════════════════




// 45. Pythagoras Theorem
{
	id: 'sq_pythagoras',
	tier: '12th+',
	label: 'Pythagoras Theorem',
	generate() {
		const triples = [
			[3,4,5],[5,12,13],[8,15,17],[7,24,25],[9,40,41],
			[6,8,10],[12,16,20],[10,24,26],[20,21,29],[12,35,37],
			[15,20,25],[9,12,15],[18,24,30],[16,30,34],[14,48,50],
			[11,60,61],[13,84,85],[28,45,53],[33,56,65],[39,80,89],
			[24,32,40],[21,28,35],[27,36,45]
		];
		const t = pick(triples);
		const k = rint(1, 5);
		const a = t[0]*k, b = t[1]*k, c = t[2]*k;
		const variant = rint(0, 2);

		if (variant === 0) {
			// Both legs given → find hypotenuse
			const w = [c+1, c-1>0 ? c-1 : c+3, c+2];
			return {
				question: {
					en: `Right triangle legs: ${N(a)} cm, ${N(b)} cm. Hypotenuse?`,
					hing: `Right triangle ki legs: ${N(a)} cm, ${N(b)} cm. Hypotenuse?`,
					hi: `समकोण त्रिभुज की भुजाएँ: ${N(a)} cm, ${N(b)} cm। कर्ण?`
				},
				ans: c + ' cm',
				w: w.map(x => x + ' cm'),
				solution: buildSqPythagorasV0Solution(a, b, c)
			};
		} else if (variant === 1) {
			// Hypotenuse + leg b → find leg a
			const w = [a+1, a-1>0 ? a-1 : a+3, a+2];
			return {
				question: {
					en: `Hypotenuse: ${N(c)} cm, one leg: ${N(b)} cm. Other leg?`,
					hing: `Hypotenuse: ${N(c)} cm, ek leg: ${N(b)} cm. Dusra leg?`,
					hi: `कर्ण: ${N(c)} cm, एक भुजा: ${N(b)} cm। दूसरी भुजा?`
				},
				ans: a + ' cm',
				w: w.map(x => x + ' cm'),
				solution: buildSqPythagorasV1Solution(a, b, c)
			};
		} else {
			// Hypotenuse + leg a → find leg b
			const w = [b+1, b-1>0 ? b-1 : b+3, b+2];
			return {
				question: {
					en: `Hypotenuse: ${N(c)} cm, one leg: ${N(a)} cm. Other leg?`,
					hing: `Hypotenuse: ${N(c)} cm, ek leg: ${N(a)} cm. Dusra leg?`,
					hi: `कर्ण: ${N(c)} cm, एक भुजा: ${N(a)} cm। दूसरी भुजा?`
				},
				ans: b + ' cm',
				w: w.map(x => x + ' cm'),
				solution: buildSqPythagorasV1Solution(b, a, c)
			};
		}
	}
},

// 46. Mixed Number Root
{ id:'sq_mixed_num', tier:'12th+', label:'Mixed Number Root',
  generate(){
    const p=rint(2,15), q=rint(2,10);
    const g=gcd(p,q); const ps=p/g, qs=q/g;
    const num=ps*ps, den=qs*qs;
    const whole=Math.floor(num/den), rem=num%den;
    const ansStr=ps+'/'+qs;
    let qDisplay;
    if(rem===0){
      qDisplay=String(num/den);
    } else {
      qDisplay=whole>0?whole+' '+rem+'/'+den:rem+'/'+den;
    }
    const wNums=[ps+1,ps-1>0?ps-1:ps+2,ps+2];
    const wStrs=wNums.map(w=>w+'/'+qs);
    return {question:{en:`${N('√('+qDisplay+')')} = ?`,hing:`${N('√('+qDisplay+')')} = ?`,hi:`${N('√('+qDisplay+')')} = ?`},ans:ansStr,w:wStrs};
  }
},

// 47. Diagonal of Square
{ id:'sq_diagonal', tier:'12th+', label:'Diagonal of Square',
  generate(){
    const variant=rint(0,2);
    if(variant===0){
      const s=rint(3,30);
      return {question:{en:`Side of square = ${N(s)} cm. Diagonal?`,hing:`Square ki side ${N(s)} cm. Diagonal?`,hi:`वर्ग की भुजा = ${N(s)} cm। विकर्ण?`},ans:s+'√2 cm',w:[s+'√3 cm',2*s+' cm',Math.round(s/2)+'√2 cm']};
    } else if(variant===1){
      const s=rint(3,25); const area=s*s;
      return {question:{en:`Area of square = ${N(area)} cm². Diagonal?`,hing:`Square ka area ${N(area)} cm². Diagonal?`,hi:`वर्ग का क्षेत्रफल = ${N(area)} cm²। विकर्ण?`},ans:s+'√2 cm',w:[s+' cm',s+'√3 cm',2*s+' cm']};
    } else {
      const s=rint(3,20); const d=s*2;
      return {question:{en:`Diagonal of square = ${N(d)} cm. Side?`,hing:`Square ka diagonal ${N(d)} cm. Side?`,hi:`वर्ग का विकर्ण = ${N(d)} cm। भुजा?`},ans:s+'√2 cm',w:[s+' cm',d+' cm',s+'√3 cm']};
    }
  }
},

// 48. Fencing Cost → Area
{ id:'sq_fence_area', tier:'12th+', label:'Fencing Cost → Area',
  generate(){
    const variant=rint(0,1);
    if(variant===0){
      const s=rint(10,50); const perim=4*s;
      const rate=rint(5,25); const cost=perim*rate; const area=s*s;
      const w=[area+100,area-100>0?area-100:area+200,area+200];
      return {question:{en:`Fencing a square field costs ₹${N(cost)} at ₹${N(rate)}/m. Area?`,hing:`Square field ki fencing ka kharcha ₹${N(cost)} @ ₹${N(rate)}/m. Area?`,hi:`वर्गाकार खेत की बाड़ लगाने का खर्च ₹${N(cost)} @ ₹${N(rate)}/m। क्षेत्रफल?`},ans:area+' m²',w:w.map(x=>x+' m²')};
    } else {
      const l=rint(10,40), b=rint(5,30); const perim=2*(l+b);
      const rate=rint(5,25); const cost=perim*rate; const area=l*b;
      const w=[area+100,area-100>0?area-100:area+200,area+50];
      return {question:{en:`Fencing a ${N(l)}m × ${N(b)}m field costs ₹${N(cost)} at ₹${N(rate)}/m. Area?`,hing:`${N(l)}m × ${N(b)}m field ki fencing ₹${N(cost)} @ ₹${N(rate)}/m. Area?`,hi:`${N(l)}m × ${N(b)}m खेत की बाड़ ₹${N(cost)} @ ₹${N(rate)}/m। क्षेत्रफल?`},ans:area+' m²',w:w.map(x=>x+' m²')};
    }
  }
},

// 49. Repeating Decimal Root
{ id:'sq_rep_dec', tier:'12th+', label:'Repeating Decimal Root',
  generate(){
    const variant=rint(0,2);
    if(variant===0){
      const a=rint(1,9); const sq=a*a; const dec=(sq/100).toFixed(2);
      return {question:{en:`${N('√'+dec)} = ?`,hing:`${N('√'+dec)} = ?`,hi:`${N('√'+dec)} = ?`},ans:String(a/10),w:[String((a+1)/10),String((a>1?a-1:a+2)/10),String((a+2)/10)]};
    } else if(variant===1){
      const a=rint(1,9); const sq=a*a; const dec=(sq/10000).toFixed(4);
      return {question:{en:`${N('√'+dec)} = ?`,hing:`${N('√'+dec)} = ?`,hi:`${N('√'+dec)} = ?`},ans:String(a/100),w:[String((a+1)/100),String((a>1?a-1:a+2)/100),String((a+2)/100)]};
    } else {
      const a=rint(2,4); const sq=a*a;
      const repStr=String(sq).repeat(sq<10?3:2);
      const ans=a+'/3';
      return {question:{en:`${N('√0.'+repStr+'...')} = ?`,hing:`${N('√0.'+repStr+'...')} = ?`,hi:`${N('√0.'+repStr+'...')} = ?`},ans:ans,w:[(a+1)+'/3',a+'/9',(a-1)+'/3']};
    }
  }
},

// 50. Unit Digit Cube Method
{ id:'cb_unit_digit', tier:'12th+', label:'Unit Digit Cube Method',
  generate(){
    const variant=rint(0,1);
    if(variant===0){
      const r=rint(2,19); const cube=r*r*r;
      const ans=r%10;
      const w=[(ans+1)%10,(ans+2)%10,(ans-1+10)%10];
      return {question:{en:`Cube root of ${N(cube)} ends with:`,hing:`${N(cube)} ka cube root kis digit par khatam?`,hi:`${N(cube)} का घनमूल किस अंक पर समाप्त?`},ans:String(ans),w:w.map(String)};
    } else {
      const r=rint(2,19); const cube=r*r*r;
      const ans=cube%10;
      const w=[(ans+1)%10,(ans+2)%10,(ans-1+10)%10];
      return {question:{en:`Unit digit of ${N('('+r+')³')} is:`,hing:`${N('('+r+')³')} ka unit digit:`,hi:`${N('('+r+')³')} का इकाई अंक:`},ans:String(ans),w:w.map(String)};
    }
  }
},

// 51. Quotient Under Cube Root
{ id:'cb_quot', tier:'12th+', label:'Quotient Under Cube Root',
  generate(){
    for(let attempt=0;attempt<30;attempt++){
      const a=rint(2,15),b=rint(2,10);
      if(a%b!==0) continue;
      const ans=a/b;
      const numA=a*a*a, numB=b*b*b;
      const w=[ans+1,ans-1>0?ans-1:ans+2,ans+2];
      return {question:{en:`${N('∛'+numA)} / ${N('∛'+numB)} = ?`,hing:`${N('∛'+numA)} / ${N('∛'+numB)} = ?`,hi:`${N('∛'+numA)} / ${N('∛'+numB)} = ?`},ans:String(ans),w:w.map(String)};
    }
    return {question:{en:`${N('∛64')} / ${N('∛8')} = ?`,hing:`${N('∛64')} / ${N('∛8')} = ?`,hi:`${N('∛64')} / ${N('∛8')} = ?`},ans:'2',w:['3','1','4']};
  }
},

// 52. Surface Area from Volume
{ id:'cb_surface', tier:'12th+', label:'Surface Area from Volume',
  generate(){
    const variant=rint(0,1);
    const s=rint(3,15); const vol=s*s*s;
    if(variant===0){
      const tsa=6*s*s;
      const w=[tsa+36,tsa-36>0?tsa-36:tsa+72,tsa+6];
      return {question:{en:`Volume of a cube is ${N(vol)} m³. Total surface area?`,hing:`Cube ka volume ${N(vol)} m³. Total surface area?`,hi:`घन का आयतन ${N(vol)} m³। कुल पृष्ठीय क्षेत्रफल?`},ans:tsa+' m²',w:w.map(x=>x+' m²')};
    } else {
      const lsa=4*s*s;
      const w=[lsa+24,lsa-24>0?lsa-24:lsa+48,lsa+4];
      return {question:{en:`Volume of a cube is ${N(vol)} m³. Lateral surface area?`,hing:`Cube ka volume ${N(vol)} m³. Lateral surface area?`,hi:`घन का आयतन ${N(vol)} m³। पार्श्व पृष्ठीय क्षेत्रफल?`},ans:lsa+' m²',w:w.map(x=>x+' m²')};
    }
  }
},

// 53. Mixed Cube Root
{ id:'cb_mixed', tier:'12th+', label:'Mixed Cube Root',
  generate(){
    const p=rint(2,10), q=rint(2,6);
    const g=gcd(p,q); const ps=p/g, qs=q/g;
    const num=ps*ps*ps, den=qs*qs*qs;
    const whole=Math.floor(num/den), rem=num%den;
    const ansStr=ps+'/'+qs;
    let qDisplay;
    if(rem===0){
      qDisplay=String(num/den);
    } else {
      qDisplay=whole>0?whole+' '+rem+'/'+den:rem+'/'+den;
    }
    const wNums=[ps+1,ps-1>0?ps-1:ps+2,ps+2];
    const wStrs=wNums.map(w=>w+'/'+qs);
    return {question:{en:`${N('∛('+qDisplay+')')} = ?`,hing:`${N('∛('+qDisplay+')')} = ?`,hi:`${N('∛('+qDisplay+')')} = ?`},ans:ansStr,w:wStrs};
  }
},

// 54. Mixed √ + ∛ Simp
{ id:'mixed_simp', tier:'12th+', label:'Mixed √ + ∛ Simp',
  generate(){
    const a=rint(2,10),b=rint(2,10),c=rint(2,10);
    const variant=rint(0,2);
    const sqA=a*a, cbB=b*b*b, sqC=c*c;
    let ans, qStr;
    if(variant===0){
      ans=a+b-c;
      qStr=`${N('√'+sqA)} + ${N('∛'+cbB)} − ${N('√'+sqC)}`;
    } else if(variant===1){
      ans=a-b+c;
      qStr=`${N('√'+sqA)} − ${N('∛'+cbB)} + ${N('√'+sqC)}`;
    } else {
      ans=a+b+c;
      qStr=`${N('√'+sqA)} + ${N('∛'+cbB)} + ${N('√'+sqC)}`;
    }
    const w=[ans+2,ans-1>=0?ans-1:ans+3,ans+3];
    return {question:{en:qStr+' = ?',hing:qStr+' = ?',hi:qStr+' = ?'},ans:String(ans),w:w.map(String)};
  }
},

// 55. Surd Simplification
{ id:'surd_simp', tier:'12th+', label:'Surd Simplification',
  generate(){
    const surdBases=[2,3,5,6,7,10,11,13];
    const n=pick(surdBases);
    const k1=rint(1,8), k2=rint(1,8), k3=rint(1,8);
    const aVal=k1*k1*n, bVal=k2*k2*n, cVal=k3*k3*n;
    const resultCoeff=k1+k2-k3;
    if(resultCoeff<=0) return this.generate();
    let ansStr;
    if(resultCoeff===1) ansStr='√'+n;
    else ansStr=resultCoeff+'√'+n;
    const wCoeffs=[resultCoeff+1,resultCoeff-1>0?resultCoeff-1:resultCoeff+2,resultCoeff+2];
    const wStrs=wCoeffs.map(c=>c===1?'√'+n:c+'√'+n);
    return {question:{en:`${N('√'+aVal)} + ${N('√'+bVal)} − ${N('√'+cVal)} = ?`,hing:`${N('√'+aVal)} + ${N('√'+bVal)} − ${N('√'+cVal)} = ?`,hi:`${N('√'+aVal)} + ${N('√'+bVal)} − ${N('√'+cVal)} = ?`},ans:ansStr,w:wStrs};
  }
},

// 56. Cube Root Division
{ id:'cb_div', tier:'12th+', label:'Cube Root Division',
  generate(){
    const aa=rint(2,10),bb=rint(2,8);
    const n1=aa*aa*aa*bb; const n2=bb*bb*bb;
    const ansVal=aa;
    const w=[aa+1,aa-1>0?aa-1:aa+2,aa+2];
    return {question:{en:`${N('∛'+n1)} ÷ ${N('∛'+n2)} = ?`,hing:`${N('∛'+n1)} ÷ ${N('∛'+n2)} = ?`,hi:`${N('∛'+n1)} ÷ ${N('∛'+n2)} = ?`},ans:String(ansVal),w:w.map(String)};
  }
},

// 57. Find x (Square)
{ id:'find_x_sq', tier:'12th+', label:'Find x (Square)',
  generate(){
    const variant=rint(0,2);
    if(variant===0){
      const r=rint(3,30); const sq=r*r;
      const w=[sq+10,sq-10>0?sq-10:sq+20,sq+20];
      return {question:{en:`If ${N('√x')} = ${N(r)}, x = ?`,hing:`Agar ${N('√x')} = ${N(r)}, to x = ?`,hi:`यदि ${N('√x')} = ${N(r)}, तो x = ?`},ans:String(sq),w:w.map(String)};
    } else if(variant===1){
      const r=rint(2,15); const coeff=2; const sq=r*r*coeff*coeff;
      const w=[sq+10,sq-10>0?sq-10:sq+20,sq+20];
      return {question:{en:`If ${N('2√x')} = ${N(2*r)}, x = ?`,hing:`Agar ${N('2√x')} = ${N(2*r)}, to x = ?`,hi:`यदि ${N('2√x')} = ${N(2*r)}, तो x = ?`},ans:String(sq),w:w.map(String)};
    } else {
      const r=rint(2,10); const coeff=3; const sq=r*r*coeff*coeff;
      const w=[sq+10,sq-10>0?sq-10:sq+20,sq+20];
      return {question:{en:`If ${N('3√x')} = ${N(3*r)}, x = ?`,hing:`Agar ${N('3√x')} = ${N(3*r)}, to x = ?`,hi:`यदि ${N('3√x')} = ${N(3*r)}, तो x = ?`},ans:String(sq),w:w.map(String)};
    }
  }
},

// 58. Find x (Cube)
{ id:'find_x_cb', tier:'12th+', label:'Find x (Cube)',
  generate(){
    const variant=rint(0,1);
    if(variant===0){
      const r=rint(2,12); const add=rint(1,15); const target=r+add;
      const cube=r*r*r;
      const w=[cube+30,cube-30>0?cube-30:cube+60,cube+60];
      return {question:{en:`If ${N('∛y + '+add)} = ${N(target)}, y = ?`,hing:`Agar ${N('∛y + '+add)} = ${N(target)}, to y = ?`,hi:`यदि ${N('∛y + '+add)} = ${N(target)}, तो y = ?`},ans:String(cube),w:w.map(String)};
    } else {
      const r=rint(2,8); const target=2*r;
      const cube=r*r*r;
      const w1=(r+1)*(r+1)*(r+1),w2=r>1?(r-1)*(r-1)*(r-1):1,w3=(r+2)*(r+2)*(r+2);
      return {question:{en:`If ${N('2∛y')} = ${N(target)}, y = ?`,hing:`Agar ${N('2∛y')} = ${N(target)}, to y = ?`,hi:`यदि ${N('2∛y')} = ${N(target)}, तो y = ?`},ans:String(cube),w:[String(w1),String(w2),String(w3)]};
    }
  }
},

// 59. Solve √ Equation
{ id:'solve_sq_eq', tier:'12th+', label:'Solve √ Equation',
  generate(){
    const variant=rint(0,1);
    if(variant===0){
      const r=rint(3,25); const add=rint(1,30); const xVal=r*r-add;
      if(xVal<0) return this.generate();
      const w=[xVal+5,xVal-5>=0?xVal-5:xVal+10,xVal+10];
      return {question:{en:`${N('√(x + '+add+')')} = ${N(r)}. Find x.`,hing:`${N('√(x + '+add+')')} = ${N(r)}. x find karo.`,hi:`${N('√(x + '+add+')')} = ${N(r)}। x ज्ञात कीजिए।`},ans:String(xVal),w:w.map(String)};
    } else {
      const r=rint(3,15); const coeff=2; const add=rint(1,20);
      const xVal=(r*r-add)/coeff;
      if(xVal!==Math.floor(xVal)||xVal<0) return this.generate();
      const w=[xVal+3,xVal-3>=0?xVal-3:xVal+6,xVal+6];
      return {question:{en:`${N('√('+coeff+'x + '+add+')')} = ${N(r)}. Find x.`,hing:`${N('√('+coeff+'x + '+add+')')} = ${N(r)}. x find karo.`,hi:`${N('√('+coeff+'x + '+add+')')} = ${N(r)}। x ज्ञात कीजिए।`},ans:String(xVal),w:w.map(String)};
    }
  }
},

// 60. Solve ∛ Equation
{ id:'solve_cb_eq', tier:'12th+', label:'Solve ∛ Equation',
  generate(){
    for(let attempt=0;attempt<30;attempt++){
      const r=rint(2,12); const coeff=rint(1,5);
      const sub=rint(1,10);
      const xVal=(r*r*r+sub)/coeff;
      if(xVal!==Math.floor(xVal)||xVal<0) continue;
      const w=[xVal+coeff,xVal-coeff>=0?xVal-coeff:xVal+2*coeff,xVal+2*coeff];
      return {question:{en:`${N('∛('+coeff+'x − '+sub+')')} = ${N(r)}. Find x.`,hing:`${N('∛('+coeff+'x − '+sub+')')} = ${N(r)}. x find karo.`,hi:`${N('∛('+coeff+'x − '+sub+')')} = ${N(r)}। x ज्ञात कीजिए।`},ans:String(xVal),w:w.map(String)};
    }
    return {question:{en:`${N('∛(2x − 1)')} = ${N('3')}. Find x.`,hing:`${N('∛(2x − 1)')} = ${N('3')}. x find karo.`,hi:`${N('∛(2x − 1)')} = ${N('3')}। x ज्ञात कीजिए।`},ans:'14',w:['16','12','18']};
  }
},

// 61. Compare √ Values
{ id:'compare_sq', tier:'12th+', label:'Compare √ Values',
  generate(){
    const variant=rint(0,1);
    if(variant===0){
      const a=rint(2,30),b=rint(2,30);
      if(a===b) return this.generate();
      const bigger=Math.max(a*a,b*b);
      const smaller=Math.min(a*a,b*b);
      const ans='√'+bigger;
      const w=['√'+smaller,'Equal','Cannot say'];
      return {question:{en:`Greater: ${N('√'+bigger)} or ${N('√'+smaller)}?`,hing:`Bada kaun: ${N('√'+bigger)} ya ${N('√'+smaller)}?`,hi:`बड़ा: ${N('√'+bigger)} या ${N('√'+smaller)}?`},ans:ans,w:w};
    } else {
      const a=rint(2,20),b=rint(2,20),c=rint(2,20);
      if(a===b||b===c||a===c) return this.generate();
      const vals=[{v:a*a,l:'√'+a*a},{v:b*b,l:'√'+b*b},{v:c*c,l:'√'+c*c}];
      vals.sort((x,y)=>y.v-x.v);
      const ans=vals[0].l;
      const w=[vals[1].l,vals[2].l,'All equal'];
      return {question:{en:`Greatest: ${N(vals[0].l)}, ${N(vals[1].l)}, or ${N(vals[2].l)}?`,hing:`Sabse bada: ${N(vals[0].l)}, ${N(vals[1].l)}, ya ${N(vals[2].l)}?`,hi:`सबसे बड़ा: ${N(vals[0].l)}, ${N(vals[1].l)}, या ${N(vals[2].l)}?`},ans:ans,w:w};
    }
  }
},

// 62. Compare √ vs ∛ — DYNAMIC
{ id:'compare_sq_cb', tier:'12th+', label:'Compare √ vs ∛',
  generate(){
    const variant=rint(0,2);
    let sqVal, cbVal, ans, w;
    if(variant===0){
      const a=rint(4,200); const b=rint(2,8);
      const cbCube=b*b*b;
      const sqrtA=Math.sqrt(a); const cbrtB=b;
      if(Math.abs(sqrtA-cbrtB)<0.01) return this.generate();
      ans=sqrtA>cbrtB?'√'+a:'∛'+cbCube;
      w=[sqrtA>cbrtB?'∛'+cbCube:'√'+a,'Both equal','Cannot compare'];
      return {question:{en:`Greater: ${N('√'+a)} or ${N('∛'+cbCube)}?`,hing:`Bada kaun: ${N('√'+a)} ya ${N('∛'+cbCube)}?`,hi:`बड़ा: ${N('√'+a)} या ${N('∛'+cbCube)}?`},ans:ans,w:w};
    } else if(variant===1){
      const a=rint(2,15); const b=rint(8,500);
      const sqA=a*a;
      const cbrtB=Math.cbrt(b);
      const sqrtA=a;
      if(Math.abs(sqrtA-cbrtB)<0.01) return this.generate();
      ans=sqrtA>cbrtB?'√'+sqA:'∛'+b;
      w=[sqrtA>cbrtB?'∛'+b:'√'+sqA,'Both equal','Cannot compare'];
      return {question:{en:`Greater: ${N('√'+sqA)} or ${N('∛'+b)}?`,hing:`Bada kaun: ${N('√'+sqA)} ya ${N('∛'+b)}?`,hi:`बड़ा: ${N('√'+sqA)} या ${N('∛'+b)}?`},ans:ans,w:w};
    } else {
      const a=rint(10,300); const b=rint(10,300);
      const sqrtA=Math.sqrt(a); const cbrtB=Math.cbrt(b);
      if(Math.abs(sqrtA-cbrtB)<0.01) return this.generate();
      ans=sqrtA>cbrtB?'√'+a:'∛'+b;
      w=[sqrtA>cbrtB?'∛'+b:'√'+a,'Both equal','Cannot compare'];
      return {question:{en:`Greater: ${N('√'+a)} or ${N('∛'+b)}?`,hing:`Bada kaun: ${N('√'+a)} ya ${N('∛'+b)}?`,hi:`बड़ा: ${N('√'+a)} या ${N('∛'+b)}?`},ans:ans,w:w};
    }
  }
},

// 63. Property Application
{ id:'sq_prop_app', tier:'12th+', label:'Property Application',
  generate(){
    const variant=rint(0,1);
    if(variant===0){
      const a=rint(2,12),b=rint(2,12);
      const ans=a*b;
      const wRaw=[a+b,ans+2,Math.abs(a-b),ans-1>0?ans-1:ans+3,ans+3];
      const w=wRaw.filter(x=>x!==ans).slice(0,3);
      return {question:{en:`${N('√a')}=${N(a)}, ${N('√b')}=${N(b)}. ${N('√(ab)')}=?`,hing:`${N('√a')}=${N(a)}, ${N('√b')}=${N(b)}. ${N('√(ab)')}=?`,hi:`${N('√a')}=${N(a)}, ${N('√b')}=${N(b)}। ${N('√(ab)')}=?`},ans:String(ans),w:w.map(String)};
    } else {
      const a=rint(2,8),b=rint(2,8);
      const ans=a*b;
      const wRaw=[a+b,ans+2,Math.abs(a-b),ans-1>0?ans-1:ans+3,ans+3];
      const w=wRaw.filter(x=>x!==ans).slice(0,3);
      return {question:{en:`${N('∛a')}=${N(a)}, ${N('∛b')}=${N(b)}. ${N('∛(ab)')}=?`,hing:`${N('∛a')}=${N(a)}, ${N('∛b')}=${N(b)}. ${N('∛(ab)')}=?`,hi:`${N('∛a')}=${N(a)}, ${N('∛b')}=${N(b)}। ${N('∛(ab)')}=?`},ans:String(ans),w:w.map(String)};
    }
  }
},

// 64. Units Digit Pattern
{ id:'sq_unit_pattern', tier:'12th+', label:'Units Digit Pattern',
  generate(){
    const variant=rint(0,1);
    if(variant===0){
      const n=rint(2,25); const sq=n*n; const ans=sq%10;
      const w=[(ans+1)%10,(ans+3)%10,(ans+5)%10];
      return {question:{en:`Units digit of ${N('√'+sq)} is:`,hing:`${N('√'+sq)} ka units digit:`,hi:`${N('√'+sq)} का इकाई अंक:`},ans:String(ans),w:w.map(String)};
    } else {
      const n=rint(2,15); const cb=n*n*n; const ans=cb%10;
      const w=[(ans+1)%10,(ans+3)%10,(ans+5)%10];
      return {question:{en:`Units digit of ${N('∛'+cb)} is:`,hing:`${N('∛'+cb)} ka units digit:`,hi:`${N('∛'+cb)} का इकाई अंक:`},ans:String(ans),w:w.map(String)};
    }
  }
},

// 65. Arrange in Order — DYNAMIC
{ id:'arrange_order', tier:'12th+', label:'Arrange in Order',
  generate(){
    const variant=rint(0,2);
    let items=[];
    if(variant===0){
      const a=rint(2,50),b=rint(2,50),c=rint(2,50);
      if(a===b||b===c||a===c) return this.generate();
      items=[{v:Math.sqrt(a),l:'√'+a},{v:Math.cbrt(b),l:'∛'+b},{v:Math.pow(c,0.25),l:'∜'+c}];
    } else if(variant===1){
      const a=rint(2,30),b=rint(2,30),c=rint(2,30),d=rint(2,30);
      items=[{v:Math.sqrt(a),l:'√'+a},{v:Math.cbrt(b),l:'∛'+b},{v:Math.pow(c,0.25),l:'∜'+c},{v:Math.pow(d,0.2),l:'⁵√'+d}];
    } else {
      const a=rint(2,100),b=rint(2,100),c=rint(2,100);
      if(a===b||b===c||a===c) return this.generate();
      items=[{v:Math.sqrt(a),l:'√'+a},{v:Math.sqrt(b),l:'√'+b},{v:Math.sqrt(c),l:'√'+c}];
    }
    items.sort((x,y)=>x.v-y.v);
    const ans=items.map(x=>x.l).join(', ');
    const rev=items.map(x=>x.l).reverse().join(', ');
    const swap1=[items[1].l,items[0].l,...items.slice(2).map(x=>x.l)].join(', ');
    const last2=[...items.slice(0,-2),items[items.length-1].l,items[items.length-2].l].join(', ');
    const wrongs=[rev,swap1,last2].filter(x=>x!==ans);
    while(wrongs.length<3) wrongs.push('Cannot determine');
    return {question:{en:`Arrange in ascending: ${items.map(x=>N(x.l)).join(', ')}`,hing:`Ascending order: ${items.map(x=>N(x.l)).join(', ')}`,hi:`आरोही क्रम: ${items.map(x=>N(x.l)).join(', ')}`},ans:ans,w:wrongs.slice(0,3)};
  }
},

// 66. Root Multiplication
{ id:'root_mult', tier:'12th+', label:'Root Multiplication',
  generate(){
    for(let attempt=0;attempt<30;attempt++){
      const a=rint(2,15),b=rint(2,15);
      const prod=a*b;
      const s=Math.round(Math.sqrt(prod));
      if(s*s===prod){
        const w=[s+1,s-1>0?s-1:s+2,s+2];
        return {question:{en:`${N('√'+a)} × ${N('√'+b)} = ?`,hing:`${N('√'+a)} × ${N('√'+b)} = ?`,hi:`${N('√'+a)} × ${N('√'+b)} = ?`},ans:String(s),w:w.map(String)};
      }
    }
    return {question:{en:`${N('√8')} × ${N('√2')} = ?`,hing:`${N('√8')} × ${N('√2')} = ?`,hi:`${N('√8')} × ${N('√2')} = ?`},ans:'4',w:['5','3','6']};
  }
},

// 67. Root Division Simp
{ id:'root_div_simp', tier:'12th+', label:'Root Division Simp',
  generate(){
    const ans=rint(1,20);
    const b=rint(2,12);
    const a=ans*b;
    const w=[ans+1,ans-1>0?ans-1:ans+2,ans+2];
    return {question:{en:`${N('√('+a*a+'/'+b*b+')')} = ?`,hing:`${N('√('+a*a+'/'+b*b+')')} = ?`,hi:`${N('√('+a*a+'/'+b*b+')')} = ?`},ans:String(ans),w:w.map(String)};
  }
},

// 68. Solve x² = n
{ id:'solve_x2', tier:'12th+', label:'Solve x² = n',
  generate(){
    const a=rint(3,25); const sq=a*a;
    const variant=rint(0,1);
    if(variant===0){
      return {question:{en:`${N('x²')} = ${N(sq)}. x = ?`,hing:`${N('x²')} = ${N(sq)}. x = ?`,hi:`${N('x²')} = ${N(sq)}। x = ?`},ans:'±'+a,w:[String(a),String(-a),String(a+1)]};
    } else {
      return {question:{en:`If ${N('x²')} = ${N(sq)} and x > 0, then x = ?`,hing:`Agar ${N('x²')} = ${N(sq)} aur x > 0, to x = ?`,hi:`यदि ${N('x²')} = ${N(sq)} और x > 0, तो x = ?`},ans:String(a),w:[String(-a),String(a+1),String(a-1)]};
    }
  }
},

// 69. Decimal Root Addition
{ id:'dec_root_add', tier:'12th+', label:'Decimal Root Addition',
  generate(){
    const a=rint(1,15),b=rint(1,15);
    const dA=a*a/100; const dB=b*b/100;
    const ans=(a+b)/10;
    const w=[(a+b+1)/10,(a+b-1)/10>0?(a+b-1)/10:(a+b+2)/10,(a+b+2)/10];
    return {question:{en:`${N('√'+dA.toFixed(2))} + ${N('√'+dB.toFixed(2))} = ?`,hing:`${N('√'+dA.toFixed(2))} + ${N('√'+dB.toFixed(2))} = ?`,hi:`${N('√'+dA.toFixed(2))} + ${N('√'+dB.toFixed(2))} = ?`},ans:String(ans),w:w.map(String)};
  }
},

// 70. Cube Product Simp
{ id:'cb_prod_simp', tier:'12th+', label:'Cube Product Simp',
  generate(){
    const a=rint(2,10),b=rint(2,10);
    const nA=a*a*a,nB=b*b*b; const ans=a*b;
    const w=[ans+3,ans-2>0?ans-2:ans+5,ans+5];
    return {question:{en:`${N('∛('+nA+' × '+nB+')')} = ?`,hing:`${N('∛('+nA+' × '+nB+')')} = ?`,hi:`${N('∛('+nA+' × '+nB+')')} = ?`},ans:String(ans),w:w.map(String)};
  }
},

// 71. Rationalize Denominator
{ id:'rationalize', tier:'12th+', label:'Rationalize Denominator',
  generate(){
    const surds=[2,3,5,6,7,8,10,11,13];
    const variant=rint(0,1);
    if(variant===0){
      const a=pick(surds); const b=rint(1,6);
      const denom=a-b*b;
      if(denom===0) return this.generate();
      if(denom>0){
        if(denom===1){
          const ans='√'+a+' − '+b;
          return {question:{en:`1/(√${a} + ${b}) simplifies to?`,hing:`1/(√${a} + ${b}) simplify karo?`,hi:`1/(√${a} + ${b}) का सरलीकरण?`},ans:ans,w:['√'+a+' + '+b,b+' − √'+a,'1/(√'+a+' − '+b+')']};
        } else {
          const ans='(√'+a+' − '+b+')/'+denom;
          return {question:{en:`1/(√${a} + ${b}) simplifies to?`,hing:`1/(√${a} + ${b}) simplify karo?`,hi:`1/(√${a} + ${b}) का सरलीकरण?`},ans:ans,w:['(√'+a+' + '+b+')/'+denom,'√'+a+' − '+b,'('+b+' − √'+a+')/'+denom]};
        }
      } else {
        const absD=Math.abs(denom);
        if(absD===1){
          const ans=b+' − √'+a;
          return {question:{en:`1/(√${a} + ${b}) simplifies to?`,hing:`1/(√${a} + ${b}) simplify karo?`,hi:`1/(√${a} + ${b}) का सरलीकरण?`},ans:ans,w:['√'+a+' + '+b,b+' + √'+a,'1/(√'+a+' − '+b+')']};
        } else {
          const ans='('+b+' − √'+a+')/'+absD;
          return {question:{en:`1/(√${a} + ${b}) simplifies to?`,hing:`1/(√${a} + ${b}) simplify karo?`,hi:`1/(√${a} + ${b}) का सरलीकरण?`},ans:ans,w:['(√'+a+' − '+b+')/'+absD,b+' − √'+a,'('+b+' + √'+a+')/'+absD]};
        }
      }
    } else {
      const a=pick(surds); const b=rint(1,6);
      const denom=a-b*b;
      if(denom===0) return this.generate();
      if(denom>0){
        if(denom===1){
          const ans='√'+a+' + '+b;
          return {question:{en:`1/(√${a} − ${b}) simplifies to?`,hing:`1/(√${a} − ${b}) simplify karo?`,hi:`1/(√${a} − ${b}) का सरलीकरण?`},ans:ans,w:['√'+a+' − '+b,b+' + √'+a,'1/(√'+a+' + '+b+')']};
        } else {
          const ans='(√'+a+' + '+b+')/'+denom;
          return {question:{en:`1/(√${a} − ${b}) simplifies to?`,hing:`1/(√${a} − ${b}) simplify karo?`,hi:`1/(√${a} − ${b}) का सरलीकरण?`},ans:ans,w:['(√'+a+' − '+b+')/'+denom,'√'+a+' + '+b,'('+b+' + √'+a+')/'+denom]};
        }
      } else {
        const absD=Math.abs(denom);
        if(absD===1){
          const ans=b+' + √'+a;
          return {question:{en:`1/(√${a} − ${b}) simplifies to?`,hing:`1/(√${a} − ${b}) simplify karo?`,hi:`1/(√${a} − ${b}) का सरलीकरण?`},ans:ans,w:['√'+a+' − '+b,b+' − √'+a,'1/(√'+a+' + '+b+')']};
        } else {
          const ans='('+b+' + √'+a+')/'+absD;
          return {question:{en:`1/(√${a} − ${b}) simplifies to?`,hing:`1/(√${a} − ${b}) simplify karo?`,hi:`1/(√${a} − ${b}) का सरलीकरण?`},ans:ans,w:['(√'+a+' + '+b+')/'+absD,b+' + √'+a,'('+b+' − √'+a+')/'+absD]};
        }
      }
    }
  }
},

// 72. Triplet ID — DYNAMIC
{ id:'triplet_id', tier:'12th+', label:'Triplet ID',
  generate(){
    const genTri=()=>{
      const m=rint(2,10),n=rint(1,m-1);
      const a=m*m-n*n,b=2*m*n,c=m*m+n*n;
      return [a,b,c].sort((x,y)=>x-y);
    };
    const realTri=genTri();
    const modify=rint(0,2);
    const fakeTri=realTri.slice();
    fakeTri[modify]+=rint(1,3);
    const ans=fakeTri.join(', ');
    const wrongs=[];
    for(let i=0;i<3;i++){
      let t;
      do{ t=genTri(); }while(t.join(',')===fakeTri.join(','));
      wrongs.push(t.join(', '));
    }
    const allOpts=shuffle([ans,...wrongs]);
    return {question:{en:`Which of [${allOpts.join('] [')}] is NOT a Pythagorean triplet?`,hing:`[${allOpts.join('] [')}] mein se kaunsa Pythagorean triplet nahi hai?`,hi:`[${allOpts.join('] [')}] में से कौन सा पाइथागोरस त्रिक नहीं है?`},ans:ans,w:wrongs};
  }
},

// ═══════════════════ Grad+ LEVEL ═══════════════════

// 73. Nested Square Root
{ id:'nested_sq', tier:'Grad+', label:'Nested Square Root',
  generate(){
    const m=rint(1,12),n=rint(1,12);
    const inner=m+n; const outer=m*n;
    const mSqrt=Math.sqrt(m),nSqrt=Math.sqrt(n);
    const mStr=mSqrt===Math.floor(mSqrt)?String(Math.floor(mSqrt)):'√'+m;
    const nStr=nSqrt===Math.floor(nSqrt)?String(Math.floor(nSqrt)):'√'+n;
    const ansStr=mStr+'+'+nStr;
    const w1=nStr+'+'+mStr;
    const w2='√'+inner;
    const w3=String(inner);
    return {question:{en:`${N('√['+inner+'+2√'+outer+']')} = ?`,hing:`${N('√['+inner+'+2√'+outer+']')} = ?`,hi:`${N('√['+inner+'+2√'+outer+']')} = ?`},ans:ansStr,w:[w1===ansStr?'1':w1,w2,w3]};
  }
},

// 74. Double Nested Root
{ id:'double_nested', tier:'Grad+', label:'Double Nested Root',
  generate(){
    const m=rint(1,15),n=rint(1,m);
    const a=m+n, b=m*n;
    const ansVal=2*Math.sqrt(m);
    let ansStr;
    const mSqrt=Math.sqrt(m);
    if(mSqrt===Math.floor(mSqrt)) ansStr=String(2*Math.floor(mSqrt));
    else ansStr='2√'+m;
    let w1='2√'+n,w2='√'+(2*m),w3='√'+(m+n);
    if(w1===ansStr) w1='√'+(2*n);
    if(w2===ansStr) w2='√'+(m*n);
    if(w3===ansStr) w3=String(m+n);
    return {question:{en:`${N('√['+a+'+2√'+b+'] + √['+a+'−2√'+b+']')} = ?`,hing:`${N('√['+a+'+2√'+b+'] + √['+a+'−2√'+b+']')} = ?`,hi:`${N('√['+a+'+2√'+b+'] + √['+a+'−2√'+b+']')} = ?`},ans:ansStr,w:[w1,w2,w3]};
  }
},

// 75. Infinite Nested Radical
{ id:'inf_nested', tier:'Grad+', label:'Infinite Nested Radical',
  generate(){
    const ans=rint(2,30);
    const n=ans*ans-ans;
    const w=[ans+2,ans-1>0?ans-1:ans+3,ans+1];
    return {question:{en:`${N('√('+n+'+√('+n+'+...))')} = ?`,hing:`${N('√('+n+'+√('+n+'+...))')} = ?`,hi:`${N('√('+n+'+√('+n+'+...))')} = ?`},ans:String(ans),w:w.map(String)};
  }
},

// 76. Complex Nested Diff
{ id:'complex_nested_diff', tier:'Grad+', label:'Complex Nested Diff',
  generate(){
    const m=rint(2,15),n=rint(1,m-1);
    const a=m+n, b=m*n;
    let ansStr;
    const nSqrt=Math.sqrt(n);
    if(nSqrt===Math.floor(nSqrt)) ansStr='2·'+Math.floor(nSqrt);
    else ansStr='2√'+n;
    const w1='2√'+m,w2='√'+m+'−√'+n,w3='2';
    return {question:{en:`${N('√['+a+'+2√'+b+'] − √['+a+'−2√'+b+']')} = ?`,hing:`${N('√['+a+'+2√'+b+'] − √['+a+'−2√'+b+']')} = ?`,hi:`${N('√['+a+'+2√'+b+'] − √['+a+'−2√'+b+']')} = ?`},ans:ansStr,w:[w1,w2,w3]};
  }
},

// 77. Complex Surd Sum — DYNAMIC
{ id:'complex_surd_sum', tier:'Grad+', label:'Complex Surd Sum',
  generate(){
    for(let attempt=0;attempt<50;attempt++){
      const b=rint(2,40);
      const d=rint(1,20);
      if((4*b)%d!==0) continue;
      const a=b+d;
      const ans=4*b/d+2;
      if(ans<=0) continue;
      const w=[ans+2,ans-2>0?ans-2:ans+4,ans+4];
      return {question:{en:`${N('(√'+a+'+√'+b+')/(√'+a+'−√'+b+') + (√'+a+'−√'+b+')/(√'+a+'+√'+b+')')} = ?`,hing:`${N('(√'+a+'+√'+b+')/(√'+a+'−√'+b+') + (√'+a+'−√'+b+')/(√'+a+'+√'+b+')')} = ?`,hi:`${N('(√'+a+'+√'+b+')/(√'+a+'−√'+b+') + (√'+a+'−√'+b+')/(√'+a+'+√'+b+')')} = ?`},ans:String(ans),w:w.map(String)};
    }
    return {question:{en:`${N('(√3+√2)/(√3−√2) + (√3−√2)/(√3+√2)')} = ?`,hing:`${N('(√3+√2)/(√3−√2) + (√3−√2)/(√3+√2)')} = ?`,hi:`${N('(√3+√2)/(√3−√2) + (√3−√2)/(√3+√2)')} = ?`},ans:'10',w:['8','12','6']};
  }
},

// 78. Infinite Equation
{ id:'inf_eq', tier:'Grad+', label:'Infinite Equation',
  generate(){
    const variant=rint(0,1);
    if(variant===0){
      const ans=rint(2,20); const x=ans*ans-ans;
      const w=[x+2,x-1>0?x-1:x+3,x+5];
      return {question:{en:`${N('√(x+√(x+...))')} = ${N(ans)}. x=?`,hing:`${N('√(x+√(x+...))')} = ${N(ans)}. x=?`,hi:`${N('√(x+√(x+...))')} = ${N(ans)}। x=?`},ans:String(x),w:w.map(String)};
    } else {
      const ans=rint(2,8); const x=ans*ans*ans-ans;
      const w=[x+2,x-1>0?x-1:x+3,x+5];
      return {question:{en:`${N('∛(x+∛(x+...))')} = ${N(ans)}. x=?`,hing:`${N('∛(x+∛(x+...))')} = ${N(ans)}. x=?`,hi:`${N('∛(x+∛(x+...))')} = ${N(ans)}। x=?`},ans:String(x),w:w.map(String)};
    }
  }
},

// 79. Cube Root Identity — DYNAMIC
{ id:'cb_identity', tier:'Grad+', label:'Cube Root Identity',
  generate(){
    const cVals=[2,3,5,6,7];
    const p=rint(1,8), q=rint(1,4);
    const c=pick(cVals);
    const a=p*p*p+3*p*q*q*c;
    const b=3*p*p*q+q*q*q*c;
    const ans=2*p;
    const wRaw=[ans-1,ans+1,ans+2,ans-2,ans+3];
    const w=wRaw.filter(x=>x>0&&x!==ans).slice(0,3);
    return {question:{en:`${N('∛('+a+'+'+b+'√'+c+') + ∛('+a+'−'+b+'√'+c+')')} = ?`,hing:`${N('∛('+a+'+'+b+'√'+c+') + ∛('+a+'−'+b+'√'+c+')')} = ?`,hi:`${N('∛('+a+'+'+b+'√'+c+') + ∛('+a+'−'+b+'√'+c+')')} = ?`},ans:String(ans),w:w.map(String)};
  }
},

// 80. System with Roots
{ id:'system_roots', tier:'Grad+', label:'System with Roots',
  generate(){
    const rx=rint(1,12), ry=rint(1,12);
    const x0=rx*rx, y0=ry*ry;
    const m=rx+y0, n=x0+ry;
    const ans=x0*y0;
    const w=[ans+12,ans-12>0?ans-12:1,ans+24];
    return {question:{en:`${N('√x+y='+m)}, ${N('x+√y='+n)}. xy=?`,hing:`${N('√x+y='+m)}, ${N('x+√y='+n)}. xy=?`,hi:`${N('√x+y='+m)}, ${N('x+√y='+n)}। xy=?`},ans:String(ans),w:w.map(String)};
  }
},

// 81. Combined Geometry
{ id:'combined_geo', tier:'Grad+', label:'Combined Geometry',
  generate(){
    const variant=rint(0,1);
    if(variant===0){
      const k=rint(2,10);
      const s=k*k*k;
      const area=s*s;
      const vol=k*k*k*k*k*k;
      const ans=k*k;
      const w=[ans+1,ans-1>0?ans-1:ans+2,ans+2];
      return {question:{en:`Square Area = Cube Volume. Square side = ${N(s)}. Cube side?`,hing:`Square Area = Cube Volume. Square side ${N(s)}. Cube side?`,hi:`वर्ग क्षेत्रफल = घन आयतन। वर्ग भुजा = ${N(s)}। घन भुजा?`},ans:String(ans),w:w.map(String)};
    } else {
      const k=rint(2,8);
      const cubeSide=k*k;
      const vol=cubeSide*cubeSide*cubeSide;
      const sqSide=k*k*k;
      const area=sqSide*sqSide;
      const ans=sqSide;
      const w=[ans+1,ans-1>0?ans-1:ans+2,cubeSide];
      return {question:{en:`Cube Volume = ${N(vol)}. Square Area = Cube Volume. Square side?`,hing:`Cube Volume = ${N(vol)}. Square Area = Cube Volume. Square side?`,hi:`घन आयतन = ${N(vol)}। वर्ग क्षेत्रफल = घन आयतन। वर्ग भुजा?`},ans:String(ans),w:w.map(String)};
    }
  }
},

// 82. Optimization (Min Value)
{ id:'opt_min', tier:'Grad+', label:'Optimization (Min Value)',
  generate(){
    const variant=rint(0,1);
    if(variant===0){
      const c=rint(1,30);
      const sqrtC=Math.sqrt(c);
      let ansStr;
      if(sqrtC===Math.floor(sqrtC)) ansStr='2·'+Math.floor(sqrtC);
      else ansStr='2√'+c;
      const w=['√'+c,String(c),ansStr==='2'?'3':'2'];
      return {question:{en:`Minimum value of x + ${c}/x (x > 0)?`,hing:`x + ${c}/x (x > 0) ki minimum value?`,hi:`x + ${c}/x (x > 0) का न्यूनतम मान?`},ans:ansStr,w:w};
    } else {
      const n=rint(1,6);
      const k=4*n*n*n;
      const ans=3*n;
      const w=[ans+1,ans-1>0?ans-1:ans+2,ans+2];
      return {question:{en:`Minimum value of x + ${k}/x² (x > 0)?`,hing:`x + ${k}/x² (x > 0) ki minimum value?`,hi:`x + ${k}/x² (x > 0) का न्यूनतम मान?`},ans:String(ans),w:w.map(String)};
    }
  }
},

// 83. Continued Fraction
{ id:'cont_frac', tier:'Grad+', label:'Continued Fraction',
  generate(){
    const a=rint(1,25);
    const disc=a*a+4;
    const sqrtDisc=Math.sqrt(disc);
    let ansStr;
    if(sqrtDisc===Math.floor(sqrtDisc)){
      const num=a+Math.floor(sqrtDisc);
      if(num%2===0) ansStr=String(num/2);
      else ansStr='('+num+')/2';
    } else {
      ansStr='('+a+'+√'+disc+')/2';
    }
    const w1='√'+disc,w2=String(a+1),w3='('+a+'+√'+(disc+4)+')/2';
    return {question:{en:`x = ${a} + 1/(${a}+1/(${a}+...)). x = ?`,hing:`x = ${a} + 1/(${a}+1/(${a}+...)). x = ?`,hi:`x = ${a} + 1/(${a}+1/(${a}+...))। x = ?`},ans:ansStr,w:[w1,w2,w3]};
  }
},

// 84. Algebraic Identity Root — DYNAMIC
{ id:'alg_identity', tier:'Grad+', label:'Algebraic Identity Root',
  generate(){
    const variant=rint(0,5);
    if(variant===0){
      const a=rint(2,20),b=rint(1,a-1);
      const expr=`(${a}+${b})² − 4×${a}×${b}`;
      const ans=a-b;
      return {question:{en:`${N('√['+expr+']')} = ?`,hing:`${N('√['+expr+']')} = ?`,hi:`${N('√['+expr+']')} = ?`},ans:String(ans),w:[String(ans+2),String(ans+4),String(a+b)]};
    } else if(variant===1){
      const a=rint(1,20);
      const ans=2*a+1;
      return {question:{en:`${N('√[4×'+a+'²+4×'+a+'+1]')} = ?`,hing:`${N('√[4×'+a+'²+4×'+a+'+1]')} = ?`,hi:`${N('√[4×'+a+'²+4×'+a+'+1]')} = ?`},ans:String(ans),w:[String(ans+2),String(ans-2),String(2*a-1)]};
    } else if(variant===2){
      const x=rint(1,15);
      const ans=3*x-1;
      return {question:{en:`${N('√[9×'+x+'²−6×'+x+'+1]')} = ?`,hing:`${N('√[9×'+x+'²−6×'+x+'+1]')} = ?`,hi:`${N('√[9×'+x+'²−6×'+x+'+1]')} = ?`},ans:String(ans),w:[String(ans+2),String(ans-2),String(3*x+1)]};
    } else if(variant===3){
      const a=rint(2,20),b=rint(1,a-1);
      const ans=a+b;
      return {question:{en:`${N('√[('+a+'−'+b+')²+4×'+a+'×'+b+']')} = ?`,hing:`${N('√[('+a+'−'+b+')²+4×'+a+'×'+b+']')} = ?`,hi:`${N('√[('+a+'−'+b+')²+4×'+a+'×'+b+']')} = ?`},ans:String(ans),w:[String(a-b),String(ans+2),String(ans-1)]};
    } else if(variant===4){
      const a=rint(1,15);
      const ans=4*a+3;
      return {question:{en:`${N('√[16×'+a+'²+24×'+a+'+9]')} = ?`,hing:`${N('√[16×'+a+'²+24×'+a+'+9]')} = ?`,hi:`${N('√[16×'+a+'²+24×'+a+'+9]')} = ?`},ans:String(ans),w:[String(ans+2),String(ans-2),String(4*a-3)]};
    } else {
      const x=rint(1,15);
      const ans=5*x+1;
      return {question:{en:`${N('√[25×'+x+'²+10×'+x+'+1]')} = ?`,hing:`${N('√[25×'+x+'²+10×'+x+'+1]')} = ?`,hi:`${N('√[25×'+x+'²+10×'+x+'+1]')} = ?`},ans:String(ans),w:[String(ans+2),String(ans-2),String(5*x-1)]};
    }
  }
},

// 85. Complex Simplification — DYNAMIC
{ id:'complex_simp', tier:'Grad+', label:'Complex Simplification',
  generate(){
    const surdBases=[2,3,5,6,7,10,11,13];
    for(let attempt=0;attempt<80;attempt++){
      const c=pick(surdBases);
      const b=rint(1,5);
      const b2c=b*b*c;
      const aStart=Math.ceil(Math.sqrt(b2c))+1;
      const a=rint(aStart,aStart+25);
      const inner=a*a-b2c;
      if(inner<=0) continue;
      const k=Math.round(Math.sqrt(inner));
      if(k*k!==inner||k===0) continue;
      const d=pick(surdBases);
      let ansStr;
      if(k===1) ansStr='√'+d;
      else ansStr=k+'√'+d;
      const wK=[k+1,k-1>0?k-1:k+2,k+2];
      const wStrs=wK.map(kk=>kk===1?'√'+d:kk+'√'+d);
      return {question:{en:`√(${a}+${b}√${c})×√(${a}−${b}√${c})×√${d} = ?`,hing:`√(${a}+${b}√${c})×√(${a}−${b}√${c})×√${d} = ?`,hi:`√(${a}+${b}√${c})×√(${a}−${b}√${c})×√${d} = ?`},ans:ansStr,w:wStrs};
    }
    return {question:{en:'√(7+4√3)×√(7−4√3)×√2 = ?',hing:'√(7+4√3)×√(7−4√3)×√2 = ?',hi:'√(7+4√3)×√(7−4√3)×√2 = ?'},ans:'√2',w:['2√2','3√2','√3']};
  }
},

// 86. Ratio System with Roots
{ id:'ratio_roots', tier:'Grad+', label:'Ratio System with Roots',
  generate(){
    const p=rint(1,8), q=rint(1,8), r=rint(1,8);
    if(p===q||q===r||p===r) return this.generate();
    const a=p*p, b=q*q, c=r*r;
    const g=gcd(gcd(a,b),c);
    const ans=(a/g)+':'+(b/g)+':'+(c/g);
    const w1=(a+1)+':'+b+':'+c, w2=a+':'+(b+1)+':'+c, w3=p+':'+q+':'+r;
    return {question:{en:`If √a:√b:√c = ${p}:${q}:${r}, find a:b:c`,hing:`Agar √a:√b:√c = ${p}:${q}:${r}, to a:b:c?`,hi:`यदि √a:√b:√c = ${p}:${q}:${r}, तो a:b:c?`},ans:ans,w:[w1,w2,w3]};
  }
},

// 87. Adv Algebra
{ id:'adv_algebra', tier:'Grad+', label:'Adv Algebra',
  generate(){
    const variant=rint(0,1);
    if(variant===0){
      const k=rint(3,25);
      const ans=k*k-2;
      const w=[k*k,k*k-4,k*k+2];
      return {question:{en:`If √x + 1/√x = ${k}, find x + 1/x`,hing:`Agar √x + 1/√x = ${k}, to x + 1/x find karo`,hi:`यदि √x + 1/√x = ${k}, तो x + 1/x ज्ञात कीजिए`},ans:String(ans),w:w.map(String)};
    } else {
      const k=rint(2,10);
      const ans=k*k*k-3*k;
      const w=[k*k*k,k*k*k-2*k,k*k*k+3*k];
      return {question:{en:`If ∛x + 1/∛x = ${k}, find x + 1/x`,hing:`Agar ∛x + 1/∛x = ${k}, to x + 1/x find karo`,hi:`यदि ∛x + 1/∛x = ${k}, तो x + 1/x ज्ञात कीजिए`},ans:String(ans),w:w.map(String)};
    }
  }
},

// 88. Tricky Pattern
{ id:'tricky_pattern', tier:'Grad+', label:'Tricky Pattern',
  generate(){
    const gens=[
      ()=>{
        const n=rint(3,20);
        const lo=n*n,hi=(n+1)*(n+1);
        return{en:`How many non-perfect square numbers between ${lo} and ${hi}?`,hing:`${lo} aur ${hi} ke beech kitni non-perfect square numbers?`,hi:`${lo} और ${hi} के बीच कितनी अपूर्णवर्ग संख्याएँ?`,ans:String(2*n),w:[String(2*n-1),String(2*n+1),String(n)]};
      },
      ()=>{
        const n=rint(3,15);
        return{en:`Sum of first ${n} odd numbers = ?`,hing:`Pehle ${n} odd numbers ka sum = ?`,hi:`प्रथम ${n} विषम संख्याओं का योग = ?`,ans:String(n*n),w:[String(n*n+2),String(n*(n+1)),String(n*n-2)]};
      },
      ()=>{
        const a=rint(3,10),b=a+rint(3,5);
        const lo=a*a,hi=b*b;const count=b-a-1;
        return{en:`How many perfect squares between ${lo} and ${hi} (exclusive)?`,hing:`${lo} aur ${hi} ke beech (exclusive) kitne perfect squares?`,hi:`${lo} और ${hi} के बीच (विशेष) कितने पूर्ण वर्ग?`,ans:String(count),w:[String(count+1),String(count-1>=0?count-1:0),String(count+2)]};
      },
      ()=>{
        const n=rint(2,15);const sq=n*n;
        const dr=((sq-1)%9)+1;
        return{en:`Digital root of ${sq} is:`,hing:`${sq} ka digital root:`,hi:`${sq} का अंकीय मूल:`,ans:String(dr),w:[String((dr+1)%9||9),String((dr+2)%9||9),String((dr-1+9)%9||9)]};
      },
      ()=>{
        const n=rint(3,12);
        const lo=n*n*n,hi=(n+1)*(n+1)*(n+1);
        const count=3*n*n+3*n;
        return{en:`How many non-perfect cube numbers between ${lo} and ${hi}?`,hing:`${lo} aur ${hi} ke beech kitni non-perfect cube numbers?`,hi:`${lo} और ${hi} के बीच कितनी अपूर्णघन संख्याएँ?`,ans:String(count),w:[String(count-1),String(count+1),String(3*n)]};
      },
      ()=>{
        const n=rint(3,10);
        const sum=n*n*(n+1)*(n+1)/4;
        const nCube=n*n*n;
        const wRaw=[sum+1,sum+n,sum-nCube>0?sum-nCube:sum+nCube];
        const w=wRaw.filter(x=>x!==sum).slice(0,3);
        return{en:`Sum of first ${n} cubes = ?`,hing:`Pehle ${n} cubes ka sum = ?`,hi:`प्रथम ${n} घनों का योग = ?`,ans:String(sum),w:w.map(String)};
      },
      ()=>{
        const n=rint(5,999);
        const digits=Math.floor(Math.log10(n))+1;
        const sqrtDigits=Math.ceil(digits/2);
        const wPool=[sqrtDigits+1,sqrtDigits+2,sqrtDigits+3,digits,digits+1,digits-1>0?digits-1:0];
        const w=[...new Set(wPool.filter(x=>x!==sqrtDigits&&x>0))].slice(0,3);
        return{en:`If N = ${n} has ${digits} digits, how many digits in √N?`,hing:`Agar N = ${n} mein ${digits} digits hain, to √N mein kitne digits?`,hi:`यदि N = ${n} में ${digits} अंक हैं, तो √N में कितने अंक?`,ans:String(sqrtDigits),w:w.map(String)};
      }
    ];
    const gen=pick(gens);
    const q=gen();
    return {question:{en:q.en,hing:q.hing,hi:q.hi},ans:q.ans,w:q.w};
  }
},

// 89. Speed Trick — DYNAMIC
{ id:'speed_trick', tier:'Grad+', label:'Speed Trick',
  generate(){
    const gens=[
      ()=>{
        const n=rint(2,30);
        const sq=n*n;
        const lastTwo=sq%100;
        return{en:`Last two digits of ${n}² are:`,hing:`${n}² ke last two digits:`,hi:`${n}² के अंतिम दो अंक:`,ans:String(lastTwo),w:[String((lastTwo+11)%100),String((lastTwo+23)%100),String((lastTwo+7)%100)]};
      },
      ()=>{
        const n=rint(2,15);
        const cb=n*n*n;
        const lastTwo=cb%100;
        return{en:`Last two digits of ${n}³ are:`,hing:`${n}³ ke last two digits:`,hi:`${n}³ के अंतिम दो अंक:`,ans:String(lastTwo),w:[String((lastTwo+11)%100),String((lastTwo+23)%100),String((lastTwo+7)%100)]};
      },
      ()=>{
        const n=rint(10,99);
        const sq=n*n;
        const digits=Math.floor(Math.log10(sq))+1;
        return{en:`Number of digits in ${n}² = ?`,hing:`${n}² mein kitne digits?`,hi:`${n}² में कितने अंक?`,ans:String(digits),w:[String(digits-1>0?digits-1:1),String(digits+1),String(digits+2)]};
      },
      ()=>{
        const n=rint(3,20);
        const cb=n*n*n;
        const digits=Math.floor(Math.log10(cb))+1;
        return{en:`Number of digits in ${n}³ = ?`,hing:`${n}³ mein kitne digits?`,hi:`${n}³ में कितने अंक?`,ans:String(digits),w:[String(digits-1>0?digits-1:1),String(digits+1),String(digits+2)]};
      },
      ()=>{
        const n=rint(100,999);
        const sqrtN=Math.floor(Math.sqrt(n));
        const digits=Math.floor(Math.log10(sqrtN))+1;
        return{en:`Number of digits in √${n} = ?`,hing:`√${n} mein kitne digits?`,hi:`√${n} में कितने अंक?`,ans:String(digits),w:[String(digits-1>0?digits-1:1),String(digits+1),String(digits+2)]};
      },
      ()=>{
        const n=rint(2,50);
        const isEven=n%2===0;
        const sqEven=(n*n)%2===0;
        return{en:`If n = ${n}, then n² is:`,hing:`Agar n = ${n}, to n²:`,hi:`यदि n = ${n}, तो n²:`,ans:isEven?'Even':'Odd',w:[isEven?'Odd':'Even','Prime','Cannot say']};
      },
      ()=>{
        const n=rint(11,99);
        const lastDigit=n%10;
        const sqLast=(n*n)%10;
        const allowed='014569';
        const notAllowed='2378';
        const badDigit=pick(notAllowed.split(''));
        return{en:`Can a perfect square end with ${badDigit}?`,hing:`Kya perfect square ${badDigit} par khatam ho sakta hai?`,hi:`क्या पूर्ण वर्ग ${badDigit} पर समाप्त हो सकता है?`,ans:'Never',w:['Always','Sometimes','Only for even squares']};
      },
      ()=>{
        const n=rint(2,20);
        const sq=n*n;
        const dr=((sq-1)%9)+1;
        const validDR=[1,4,7,9];
        const ansStr=validDR.join(', ');
        return{en:`Digital root of a perfect square can be:`,hing:`Perfect square ka digital root kya ho sakta hai?`,hi:`पूर्ण वर्ग का अंकीय मूल क्या हो सकता है?`,ans:ansStr,w:['Any digit 0-9','2, 5, or 8','3, 6, or 9']};
      }
    ];
    const gen=pick(gens);
    const q=gen();
    return {question:{en:q.en,hing:q.hing,hi:q.hi},ans:q.ans,w:q.w};
  }
}

];

