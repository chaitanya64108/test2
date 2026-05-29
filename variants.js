// ===================== VARIANT MAP — 5+ genuinely different variants per template =====================
// Each key = template id, value = array of generate functions
// Variant 0 = original generate(), variants 1-5 = different question structures
const VARIANTS = {
// ═══════════════════ 10th+ SQUARE ROOT ═══════════════════
sq_direct: [
  // V1: Reverse — given root, find the number
  function(){ const r=rint(2,30); const ans=r*r; const w=[ans+2*r+1,ans-2*r+1>0?ans-2*r+1:ans+4*r+4,ans+r*2]; const sol=buildSqDirectV1Solution(r,ans); return {question:{en:'If '+N('√x')+' = '+N(r)+', find x',hing:'Agar '+N('√x')+' = '+N(r)+', to x?',hi:'यदि '+N('√x')+' = '+N(r)+', तो x ज्ञात कीजिए'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V2: Sum of two roots
  function(){ const a=rint(2,15),b=rint(2,15); const sa=a*a,sb=b*b; const ans=a+b; const w=[a+b+2,a+b-2>0?a+b-2:a+b+4,a+b+1]; const sol=buildSqDirectV2Solution(a,b,ans); return {question:{en:N('√'+sa)+' + '+N('√'+sb)+' = ?',hing:N('√'+sa)+' + '+N('√'+sb)+' = ?',hi:N('√'+sa)+' + '+N('√'+sb)+' = ?'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V3: Which number has this root?
  function(){ const r=rint(2,25); const ans=r*r; const offsets=shuffle([1,-1,2,-2,3]); const w=[]; for(const o of offsets){const v=ans+2*r*o+o*o; if(v>0&&v!==ans&&w.length<3)w.push(v);} while(w.length<3)w.push(ans+w.length*5+10); const sol=buildSqDirectV3Solution(r,ans); return {question:{en:'Which number has square root '+N(r)+' ?',hing:'Kis number ka square root '+N(r)+' hai?',hi:'किस संख्या का वर्गमूल '+N(r)+' है?'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V4: Difference of two roots
  function(){ const a=rint(5,20),b=rint(2,a-1); const sa=a*a,sb=b*b; const ans=a-b; const w=[a-b+2,a-b-1>0?a-b-1:a-b+3,a+b]; const sol=buildSqDirectV4Solution(a,b,ans); return {question:{en:N('√'+sa)+' − '+N('√'+sb)+' = ?',hing:N('√'+sa)+' − '+N('√'+sb)+' = ?',hi:N('√'+sa)+' − '+N('√'+sb)+' = ?'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V5: n² = given, find n
  function(){ const r=rint(2,30); const sq=r*r; const w=[r+1,r-1>0?r-1:r+2,-r]; const sol=buildSqDirectV5Solution(r,sq); return {question:{en:'If '+N('n²')+' = '+N(sq)+', what is n?',hing:'Agar '+N('n²')+' = '+N(sq)+', to n?',hi:'यदि '+N('n²')+' = '+N(sq)+', तो n क्या है?'},ans:String(r),w:w.map(String),solution:sol}; },
],
sq_pf: [
  // V1: Given prime factorization, find root
  function(){ const primes=[2,3,5,7,11,13]; const k=rint(2,3); const chosen=shuffle(primes).slice(0,k); const sq=chosen.reduce((a,p)=>a*p*p,1); const r=chosen.reduce((a,p)=>a*p,1); const w=[r+1,r-1>0?r-1:r+2,r*2]; const sol=buildSqPfSolution(sq,r,chosen); return {question:{en:'If '+N(sq)+' = '+chosen.map(p=>N(p)+'²').join(' × ')+', find '+N('√'+sq),hing:'Agar '+N(sq)+' = '+chosen.map(p=>N(p)+'²').join(' × ')+', '+N('√'+sq)+' find karo',hi:'यदि '+N(sq)+' = '+chosen.map(p=>N(p)+'²').join(' × ')+', '+N('√'+sq)+' ज्ञात कीजिए'},ans:String(r),w:w.map(String),solution:sol}; },
  // V2: Product of two root values
  function(){ const a=rint(2,10),b=rint(2,10); const sa=a*a,sb=b*b; const ans=a*b; const w=[a*b+2,a*b-1>0?a*b-1:a*b+3,a+b]; const sol=buildSqPfSolution(sa*sb,ans,[a,b]); return {question:{en:N('√'+sa)+' × '+N('√'+sb)+' = ?',hing:N('√'+sa)+' × '+N('√'+sb)+' = ?',hi:N('√'+sa)+' × '+N('√'+sb)+' = ?'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V3: Find smallest number to make perfect square via prime factors
  function(){ const p=pick([2,3,5,7,11]); const num=p*p*p; const ans=p; const w=[p*2,p*p,p+1]; const sol=buildSqPfV3Solution(p,num); return {question:{en:N(num)+' = '+N(p)+'³. What to multiply to make it a perfect square?',hing:N(num)+' = '+N(p)+'³. Kisse multiply karein ki perfect square bane?',hi:N(num)+' = '+N(p)+'³। किससे गुणा करें कि पूर्ण वर्ग बने?'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V4: Simplify root using known squares
  function(){ const a=rint(2,12),b=rint(2,8); const n=a*a*b; const ans=a+N('√'+b); const w1=(a+1)+N('√'+b),w2=a+N('√'+(b+1)),w3=(a-1>0?a-1:a+2)+N('√'+b); const sol=buildSqPfV4Solution(a,b,n); return {question:{en:'Simplify: '+N('√'+n),hing:'Simplify karo: '+N('√'+n),hi:'सरल कीजिए: '+N('√'+n)},ans:ans,w:[w1,w2,w3],solution:sol}; },
  // V5: Divide to get root
  function(){ const a=rint(2,15),b=rint(2,10); const ans=a; const num=a*a*b*b,den=b*b; const w=[a+1,a-1>0?a-1:a+2,a*b]; const sol=buildSqPfV5Solution(a,b,num,den); return {question:{en:N('√'+num)+' ÷ '+N('√'+den)+' = ?',hing:N('√'+num)+' ÷ '+N('√'+den)+' = ?',hi:N('√'+num)+' ÷ '+N('√'+den)+' = ?'},ans:String(ans),w:w.map(String),solution:sol}; },
],
sq_longdiv: [
  // V1: Find number whose root is given by long division
  function(){ const r=rint(10,40); const ans=r*r; const w=[ans+2*r+1,ans-2*r+1>0?ans-2*r+1:ans+4*r+4,ans+r]; const sol=buildSqLongdivV1Solution(r,ans); return {question:{en:'A number has square root '+N(r)+' by long division. The number is:',hing:'Long division se square root '+N(r)+' hai. Number kya hai?',hi:'लम्बी विभाजन से वर्गमूल '+N(r)+' है। संख्या क्या है?'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V2: Compare two long division results
  function(){ const a=rint(10,30),b=rint(10,30); if(a===b) return this.generate(); const sa=a*a,sb=b*b; const ans=Math.max(a,b); const w=[Math.min(a,b),a+b,Math.abs(a-b)]; const sol=buildSqLongdivV2Solution(a,b,sa,sb); return {question:{en:'Which is larger: '+N('√'+sa)+' or '+N('√'+sb)+'?',hing:'Bada kaun: '+N('√'+sa)+' ya '+N('√'+sb)+'?',hi:'बड़ा कौन: '+N('√'+sa)+' या '+N('√'+sb)+'?'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V3: Long division — how many pairs of digits?
  function(){ const n=rint(2,5); const lo=Math.pow(10,2*(n-1)); const hi=Math.pow(10,2*n)-1; const num=rint(lo,Math.min(hi,lo+9999)); const ans=n; const w=[n+1,n-1>0?n-1:n+2,n+2]; const sol=buildSqLongdivV3Solution(n,num); return {question:{en:'How many pairs of digits when finding '+N('√'+num)+' by long division?',hing:N('√'+num)+' long division mein kitne digit pairs?',hi:N('√'+num)+' लम्बी विभाजन में कितने अंक युग्म?'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V4: Verify long division result
  function(){ const r=rint(10,40); const sq=r*r; const wrong=shuffle([r+1,r-1>0?r-1:r+2,r+2]); const sol=buildSqLongdivV4Solution(r,sq); return {question:{en:'Long division of '+N('√'+sq)+' gives:',hing:N('√'+sq)+' ki long division se answer:',hi:N('√'+sq)+' की लम्बी विभाजन से उत्तर:'},ans:String(r),w:wrong.map(String),solution:sol}; },
  // V5: Sum of digits of root found by long division
  function(){ const r=rint(10,40); const sq=r*r; const ans=String(r).split('').reduce((a,d)=>a+Number(d),0); const w=[ans+1,ans-1>0?ans-1:ans+2,ans+2]; const sol=buildSqLongdivV5Solution(r,sq,ans); return {question:{en:'Sum of digits of '+N('√'+sq)+' (found by long division):',hing:N('√'+sq)+' (long division) ke digits ka sum:',hi:N('√'+sq)+' (लम्बी विभाजन) के अंकों का योग:'},ans:String(ans),w:w.map(String),solution:sol}; },
],
sq_repsub: [
  // V1: Given steps, find the number
  function(){ const r=rint(3,20); const sq=r*r; const ans=sq; const w=[sq+2*r+1,sq-2*r+1>0?sq-2*r+1:sq+4*r+4,sq+r]; const sol=buildSqRepsubV1Solution(r,ans); return {question:{en:'If '+N(r)+' steps of odd subtraction give 0, the original number was:',hing:'Agar '+N(r)+' odd subtraction steps mein 0 mila, to original number:',hi:'यदि '+N(r)+' विषम घटाव चरणों में 0 मिला, तो मूल संख्या:'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V2: Verify number of steps
  function(){ const r=rint(3,15); const sq=r*r; const ans=r; const w=[r+1,r-1>0?r-1:r+2,r+2]; const sol=buildSqRepsubV2Solution(r,sq); return {question:{en:N('√'+sq)+' by repeated subtraction takes how many steps?',hing:N('√'+sq)+' baar baar ghatane mein kitne steps?',hi:N('√'+sq)+' बारम्बार घटाव में कितने चरण?'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V3: Which odd number is subtracted at step k?
  function(){ const r=rint(5,25); const sq=r*r; const step=rint(1,r); const ans=2*step-1; const w=[2*step+1,2*step-3>0?2*step-3:2*step+3,2*step]; const sol=buildSqRepsubV3Solution(r,sq,step,ans); return {question:{en:'At step '+N(step)+' of finding '+N('√'+sq)+', what odd number is subtracted?',hing:N('√'+sq)+' ke step '+N(step)+' mein kaunsa odd number subtract hoga?',hi:N('√'+sq)+' के चरण '+N(step)+' में कौन सी विषम संख्या घटाई जाएगी?'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V4: After k steps, what remains?
  function(){ const r=rint(5,20); const sq=r*r; const step=rint(1,r-1); const ans=sq-step*step; const w=[sq-step*step+2,sq-(step+1)*(step+1),sq-step*step-2>0?sq-step*step-2:sq-step*step+4]; const sol=buildSqRepsubV4Solution(r,sq,step,ans); return {question:{en:'After '+N(step)+' steps of repeated subtraction on '+N(sq)+', remainder is:',hing:N(sq)+' ke '+N(step)+' steps ke baad remainder:',hi:N(sq)+' के '+N(step)+' चरणों के बाद शेष:'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V5: Compare steps for two numbers
  function(){ const a=rint(3,15),b=rint(3,15); const sa=a*a,sb=b*b; const diff=Math.abs(a-b); const w=[a+b,Math.abs(a+b),diff+2]; const sol=buildSqRepsubV5Solution(a,b,sa,sb,diff); return {question:{en:'How many more steps for '+N('√'+Math.max(sa,sb))+' than '+N('√'+Math.min(sa,sb))+'?',hing:N('√'+Math.max(sa,sb))+' mein '+N('√'+Math.min(sa,sb))+' se kitne steps zyada?',hi:N('√'+Math.max(sa,sb))+' में '+N('√'+Math.min(sa,sb))+' से कितने चरण अधिक?'},ans:String(diff),w:w.map(String),solution:sol}; },
],
sq_decimal: [
  // V1: Reverse — given root, find the decimal
  function(){ const r=rint(1,30); const ans=(r*r)/100; const w=[(r*r+1)/100,(r>1?(r-1)*(r-1)/100:ans+0.01),(r*r)/10]; const sol=buildSqDecimalV1Solution(r,ans); return {question:{en:'What number has square root '+N(r/10)+'?',hing:'Kis number ka square root '+N(r/10)+' hai?',hi:'किस संख्या का वर्गमूल '+N(r/10)+' है?'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V2: Two decimal roots sum
  function(){ const a=rint(1,9),b=rint(1,9); const da=a*a/100,db=b*b/100; const ans=a/10+b/10; const w=[ans+0.1,ans-0.1>0?ans-0.1:ans+0.2,ans+0.2]; const sol=buildSqDecimalV2Solution(a,b,da,db,ans); return {question:{en:N('√'+da)+' + '+N('√'+db)+' = ?',hing:N('√'+da)+' + '+N('√'+db)+' = ?',hi:N('√'+da)+' + '+N('√'+db)+' = ?'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V3: Decimal inside, integer outside
  function(){ const a=rint(1,9); const n=a*a*100; const ans=a*10; const w=[ans+10,ans-10>0?ans-10:ans+20,ans+5]; const sol=buildSqDecimalV3Solution(a,n,ans); return {question:{en:N('√'+n)+' = ?',hing:N('√'+n)+' = ?',hi:N('√'+n)+' = ?'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V4: Which is the square root of decimal?
  function(){ const a=rint(1,9); const dec=a*a/100; const ans=a/10; const w=[(a+1)/10,(a>1?(a-1)/10:0.1),a/100]; const sol=buildSqDecimalV4Solution(a,dec,ans); return {question:{en:'Which is '+N('√'+dec)+'?',hing:N('√'+dec)+' kya hai?',hi:N('√'+dec)+' क्या है?'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V5: Decimal root comparison
  function(){ const a=rint(1,9),b=rint(1,9); if(a===b) return this.generate(); const da=a*a/100,db=b*b/100; const bigger=Math.max(a/10,b/10); const w=[Math.min(a/10,b/10),a/10+b/10,Math.abs(a/10-b/10)]; const sol=buildSqDecimalV5Solution(a,b,da,db); return {question:{en:'Which is greater: '+N('√'+da)+' or '+N('√'+db)+'?',hing:'Bada kaun: '+N('√'+da)+' ya '+N('√'+db)+'?',hi:'बड़ा कौन: '+N('√'+da)+' या '+N('√'+db)+'?'},ans:String(bigger),w:w.map(String),solution:sol}; },
],
sq_frac: [
  // V1: Reverse — given root, find fraction
  function(){ const n=rint(1,10),d=rint(2,12); const sqN=n*n,sqD=d*d; const ans=sqN+'/'+sqD; const w=[(sqN+1)+'/'+sqD,sqN+'/'+(sqD+1),(n+1)*(n+1)+'/'+(d+1)*(d+1)]; const sol=buildSqFracV1Solution(n,d,sqN,sqD,ans); return {question:{en:'What fraction has square root '+N(n+'/'+d)+'?',hing:'Kis fraction ka square root '+N(n+'/'+d)+' hai?',hi:'किस भिन्न का वर्गमूल '+N(n+'/'+d)+' है?'},ans:ans,w:w,solution:sol}; },
  // V2: Product of two fraction roots
  function(){ const a=rint(1,8),b=rint(2,10),c=rint(1,8),dd=rint(2,10); const ans=(a*c)+'/'+(b*dd); const w=[(a+c)+'/'+(b+dd),(a*c+1)+'/'+(b*dd),(a*c)+'/'+(b*dd+1)]; const sol=buildSqFracV2Solution(a,b,c,dd,ans); return {question:{en:N('√('+a*a+'/'+b*b+')')+' × '+N('√('+c*c+'/'+dd*dd+')')+' = ?',hing:N('√('+a*a+'/'+b*b+')')+' × '+N('√('+c*c+'/'+dd*dd+')')+' = ?',hi:N('√('+a*a+'/'+b*b+')')+' × '+N('√('+c*c+'/'+dd*dd+')')+' = ?'},ans:ans,w:w,solution:sol}; },
  // V3: Simplify fraction then find root
  function(){ const n=rint(2,8),d=rint(2,8); const g=gcd(n,d); const sn=n/g,sd=d/g; const sqN=sn*sn*4,sqD=sd*sd*4; const ans=sn+'/'+sd; const w=[(sn+1)+'/'+sd,sn+'/'+(sd+1),(sn-1>0?sn-1:1)+'/'+sd]; const sol=buildSqFracV3Solution(sn,sd,sqN,sqD,ans); return {question:{en:'Simplify and find: '+N('√('+sqN+'/'+sqD+')'),hing:'Simplify karo: '+N('√('+sqN+'/'+sqD+')'),hi:'सरल कीजिए: '+N('√('+sqN+'/'+sqD+')')},ans:ans,w:w,solution:sol}; },
  // V4: Which fraction has this square root?
  function(){ const n=rint(1,8),d=rint(2,10); const sqN=n*n,sqD=d*d; const ans=sqN+'/'+sqD; const w=[(sqN+d)+'/'+sqD,sqN+'/'+(sqD+n),(sqN+2*n+1)+'/'+sqD]; const sol=buildSqFracV4Solution(n,d,sqN,sqD,ans); return {question:{en:'Which fraction equals '+N('√('+sqN+'/'+sqD+')')+'²?',hing:'Kaunsi fraction '+N('√('+sqN+'/'+sqD+')')+'² ke barabar hai?',hi:'कौन सी भिन्न '+N('√('+sqN+'/'+sqD+')')+'² के बराबर है?'},ans:ans,w:w,solution:sol}; },
  // V5: Compare two fraction roots
  function(){ const a=rint(1,6),b=rint(3,10); const c=rint(1,6),d=rint(3,10); const v1=a/b,v2=c/d; if(Math.abs(v1-v2)<0.001) return this.generate(); const ans=v1>v2?(a*a)+'/'+(b*b):(c*c)+'/'+(d*d); const w1=v1<=v2?(a*a)+'/'+(b*b):(c*c)+'/'+(d*d); const w2=(a*a+c*c)+'/'+(b*b+d*d); const w3=(a+c)+'/'+(b+d); const sol=buildSqFracV5Solution(a,b,c,d,ans); return {question:{en:'Which is larger: '+N('√('+a*a+'/'+b*b+')')+' or '+N('√('+c*c+'/'+d*d+')')+'?',hing:'Bada kaun: '+N('√('+a*a+'/'+b*b+')')+' ya '+N('√('+c*c+'/'+d*d+')')+'?',hi:'बड़ा कौन: '+N('√('+a*a+'/'+b*b+')')+' या '+N('√('+c*c+'/'+d*d+')')+'?'},ans:ans,w:[w1,w2,w3],solution:sol}; },
],
sq_make_x: [
  // V1: Given the multiplier, what's the smallest perfect square?
  function(){ const p=pick([2,3,5,7]); const k=rint(2,8); const num=p*k*k; const multiplier=p; const ans=num*multiplier; const w=[ans+p,ans-p>0?ans-p:ans+2*p,ans+k]; const sol=buildSqMakeXV1Solution(num,multiplier,ans); return {question:{en:'Multiply '+N(num)+' by '+N(multiplier)+'. Is the result a perfect square?',hing:N(num)+' ko '+N(multiplier)+' se multiply karo. Kya perfect square hai?',hi:N(num)+' को '+N(multiplier)+' से गुणा करो। क्या पूर्ण वर्ग है?'},ans:'Yes — '+ans,w:['No','Yes — '+(ans+p),'Yes — '+(ans+k)],solution:sol}; },
  // V2: Find two numbers that make perfect square when multiplied
  function(){ const a=rint(2,10),b=rint(2,10); if(a===b) return this.generate(); const na=a*a, nb=b*b; const ans=a*b; const w=[a*b+1,a*b-1>0?a*b-1:a*b+2,a+b]; const sol=buildSqMakeXV2Solution(na,nb,ans); return {question:{en:N(na)+' × '+N(nb)+' is a perfect square of?',hing:N(na)+' × '+N(nb)+' kiska perfect square hai?',hi:N(na)+' × '+N(nb)+' किसका पूर्ण वर्ग है?'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V3: What's the square root after multiplying?
  function(){ const p=pick([2,3,5,7]); const k=rint(2,10); const num=p*k*k; const ans=k; const w=[k+1,k-1>0?k-1:k+2,p*k]; const sol=buildSqMakeXV3Solution(num,p,ans); return {question:{en:'After multiplying '+N(num)+' by '+N(p)+', the square root is:',hing:N(num)+' ko '+N(p)+' se multiply karne par square root:',hi:N(num)+' को '+N(p)+' से गुणा करने पर वर्गमूल:'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V4: Which multiplier gives a perfect square?
  function(){ const base=rint(2,10),sqPart=rint(2,8); if(base===sqPart) return this.generate(); const num=base*sqPart*sqPart; const ans=base; const w=[base*2,sqPart,base+sqPart]; const sol=buildSqMakeXV4Solution(num,base,sqPart,ans); return {question:{en:N(num)+' × ? = perfect square. Which of these works?',hing:N(num)+' × ? = perfect square. Kaunsa kaam karega?',hi:N(num)+' × ? = पूर्ण वर्ग। इनमें से कौन सा काम करेगा?'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V5: Compare two possible multipliers
  function(){ const base=rint(2,8),sqPart=rint(2,6); const num=base*sqPart*sqPart; const ans=base; const w=[base*sqPart,sqPart*sqPart,base*base]; const sol=buildSqMakeXV5Solution(num,base,sqPart,ans); return {question:{en:'The smallest number to multiply '+N(num)+' to get a perfect square is:',hing:N(num)+' ko perfect square banane ke liye sabse chhota multiplier:',hi:N(num)+' को पूर्ण वर्ग बनाने के लिए सबसे छोटा गुणक:'},ans:String(ans),w:w.map(String),solution:sol}; },
],
sq_make_d: [
  // V1: After dividing, what's the square root?
  function(){ const base=rint(2,8),sqPart=rint(2,8); if(base===sqPart) return this.generate(); const num=base*base*sqPart; const ans=base; const w=[base+1,base-1>0?base-1:base+2,sqPart]; const sol=buildSqMakeDV1Solution(num,sqPart,ans); return {question:{en:'After dividing '+N(num)+' by '+N(sqPart)+', the square root is:',hing:N(num)+' ko '+N(sqPart)+' se divide karne par square root:',hi:N(num)+' को '+N(sqPart)+' से भाग देने पर वर्गमूल:'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V2: Which divisor gives perfect square?
  function(){ const base=rint(2,8),sqPart=rint(2,6); if(base===sqPart) return this.generate(); const num=base*base*sqPart; const ans=sqPart; const w=[base*base,sqPart+base,base*sqPart]; const sol=buildSqMakeDV2Solution(num,base,sqPart,ans); return {question:{en:N(num)+' ÷ ? = perfect square. Which of these works?',hing:N(num)+' ÷ ? = perfect square. Kaunsa kaam karega?',hi:N(num)+' ÷ ? = पूर्ण वर्ग। इनमें से कौन सा काम करेगा?'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V3: Smallest divisor for perfect square
  function(){ const base=rint(2,10),sqPart=rint(2,8); if(base===sqPart) return this.generate(); const num=base*base*sqPart; const ans=sqPart; const w=[base,sqPart*2,base*sqPart]; const sol=buildSqMakeDV3Solution(num,base,sqPart,ans); return {question:{en:'The smallest number to divide '+N(num)+' for a perfect square is:',hing:N(num)+' ko perfect square banane ke liye sabse chhota divisor:',hi:N(num)+' को पूर्ण वर्ग बनाने के लिए सबसे छोटा भाजक:'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V4: Verify division result
  function(){ const base=rint(2,8),sqPart=rint(2,6); const num=base*base*sqPart; const result=num/sqPart; const ans=result; const w=[result+1,result-1>0?result-1:result+2,result*2]; const sol=buildSqMakeDV4Solution(num,sqPart,result,ans); return {question:{en:N(num)+' ÷ '+N(sqPart)+' = '+N(result)+'. Is this a perfect square?',hing:N(num)+' ÷ '+N(sqPart)+' = '+N(result)+'. Kya perfect square hai?',hi:N(num)+' ÷ '+N(sqPart)+' = '+N(result)+'. क्या पूर्ण वर्ग है?'},ans:'Yes',w:['No','Only if even','Only if odd'],solution:sol}; },
  // V5: Division and root combined
  function(){ const a=rint(2,10),b=rint(2,8); if(a===b) return this.generate(); const num=a*a*b; const ans=a; const w=[a+1,b,a*b]; const sol=buildSqMakeDV5Solution(num,b,ans); return {question:{en:N('√('+num+'/'+b+')')+' = ?',hing:N('√('+num+'/'+b+')')+' = ?',hi:N('√('+num+'/'+b+')')+' = ?'},ans:String(ans),w:w.map(String),solution:sol}; },
],
sq_make_add: [
  // V1: Given what was added, find the number
  function(){ const a=rint(5,30); const sq=a*a; const add=rint(1,Math.min(20,a)); const num=sq-add; const ans=add; const w=[add+2,add-1>0?add-1:add+3,add+5]; const sol=buildSqMakeAddV1Solution(num,sq,add,ans); return {question:{en:N(num)+' + ? = '+N(sq)+'. What was added?',hing:N(num)+' + ? = '+N(sq)+'. Kya joda?',hi:N(num)+' + ? = '+N(sq)+'. क्या जोड़ा गया?'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V2: What's the next perfect square after this number?
  function(){ const a=rint(5,30); const num=a*a+rint(1,2*a); const ans=(a+1)*(a+1)-num; const w=[ans+2,ans-1>0?ans-1:ans+3,ans+5]; const sol=buildSqMakeAddV2Solution(num,ans,a); return {question:{en:'How much to add to '+N(num)+' to reach the next perfect square?',hing:N(num)+' mein kitna jodein ki next perfect square mile?',hi:N(num)+' में कितना जोड़ें कि अगला पूर्ण वर्ग मिले?'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V3: Two numbers added to same perfect square
  function(){ const a=rint(10,30); const sq=a*a; const add1=rint(1,10); const add2=rint(1,10); const num1=sq-add1, num2=sq-add2; const ans=add1+add2; const w=[ans+2,Math.abs(add1-add2),ans-1>0?ans-1:ans+3]; const sol=buildSqMakeAddV3Solution(num1,num2,sq,add1,add2,ans); return {question:{en:'Add '+N(add1)+' to '+N(num1)+' and '+N(add2)+' to '+N(num2)+'. Both become '+N(sq)+'. Total added?',hing:N(num1)+' mein '+N(add1)+' aur '+N(num2)+' mein '+N(add2)+' jodein = '+N(sq)+'. Total kitna joda?',hi:N(num1)+' में '+N(add1)+' और '+N(num2)+' में '+N(add2)+' जोड़ें = '+N(sq)+'. कुल कितना जोड़ा?'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V4: Which perfect square results?
  function(){ const a=rint(5,30); const sq=a*a; const add=rint(1,Math.min(20,a)); const num=sq-add; const ans=sq; const w=[sq+1,sq-1,sq+2*a+1]; const sol=buildSqMakeAddV4Solution(num,add,ans); return {question:{en:N(num)+' + '+N(add)+' equals which perfect square?',hing:N(num)+' + '+N(add)+' kaunsa perfect square banaata hai?',hi:N(num)+' + '+N(add)+' कौन सा पूर्ण वर्ग बनाता है?'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V5: Add same number to two different values
  function(){ const a=rint(5,25),b=a+1; const add1=a*a-rint(1,10),add2=b*b-rint(1,15); const ans=b*b-add2; const w=[ans+2,ans-2>0?ans-2:ans+4,b*b-a*a]; const sol=buildSqMakeAddV5Solution(add1,add2,a,b,ans); return {question:{en:'Adding '+N(a*a-add1)+' to '+N(add1)+' gives a perfect square. Adding what to '+N(add2)+' gives the next perfect square?',hing:N(add1)+' mein '+N(a*a-add1)+' jodein = perfect square. '+N(add2)+' mein kitna jodein ki next perfect square mile?',hi:N(add1)+' में '+N(a*a-add1)+' जोड़ें = पूर्ण वर्ग। '+N(add2)+' में कितना जोड़ें कि अगला पूर्ण वर्ग मिले?'},ans:String(ans),w:w.map(String),solution:sol}; },
],
sq_est_between: [
  // V1: Which integer is closest?
  function(){ const a=rint(2,25); const num=a*a+rint(1,a); const ans=a; const w=[a+1,a-1>0?a-1:a+2,a+2]; const sol=buildSqEstBetweenV1Solution(a,num,ans); return {question:{en:N('√'+num)+' is closest to which integer?',hing:N('√'+num)+' sabse kareebi kis integer hai?',hi:N('√'+num)+' सबसे निकट कौन सा पूर्णांक है?'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V2: Is it closer to lower or upper bound?
  function(){ const a=rint(3,20); const num=a*a+a; const ans='Closer to '+(a+1); const w=['Closer to '+a,'Exactly midway','Closer to '+(a+2)]; const sol=buildSqEstBetweenV2Solution(a,num); return {question:{en:'Is '+N('√'+num)+' closer to '+N(a)+' or '+N(a+1)+'?',hing:N('√'+num)+' '+N(a)+' ke kareeb ya '+N(a+1)+' ke?',hi:N('√'+num)+' '+N(a)+' के निकट या '+N(a+1)+' के?'},ans:ans,w:w,solution:sol}; },
  // V3: Estimate to one decimal
  function(){ const a=rint(2,15); const num=a*a+1; const ans=a; const w=[a+1,a-1>0?a-1:0,a+0.5]; const fmt=v=>Number.isInteger(v)?String(v):v.toFixed(1); const sol=buildSqEstBetweenV3Solution(a,num); return {question:{en:N('√'+num)+' ≈ ? (nearest integer)',hing:N('√'+num)+' ≈ ? (sabse kareebi integer)',hi:N('√'+num)+' ≈ ? (निकटतम पूर्णांक)'},ans:String(ans),w:w.map(fmt),solution:sol}; },
  // V4: Which is between the same pair?
  function(){ const a=rint(3,15); const n1=a*a+1,n2=a*a+a; const ans='Both between '+a+' and '+(a+1); const w=['Different ranges',n1+' is between '+(a-1)+' and '+a,n2+' is between '+(a+1)+' and '+(a+2)]; const sol=buildSqEstBetweenV4Solution(a,n1,n2); return {question:{en:'Are '+N('√'+n1)+' and '+N('√'+n2)+' between the same consecutive integers?',hing:N('√'+n1)+' aur '+N('√'+n2)+' same consecutive integers ke beech hain?',hi:N('√'+n1)+' और '+N('√'+n2)+' क्या उन्हीं क्रमिक पूर्णांकों के बीच हैं?'},ans:ans,w:w,solution:sol}; },
  // V5: How far from the lower integer?
  function(){ const a=rint(3,20); const num=a*a+a; const ans='Between '+a+' and '+(a+1); const w=['Between '+(a-1)+' and '+a,'Between '+(a+1)+' and '+(a+2),'Between '+(a-2)+' and '+(a-1)]; const sol=buildSqEstBetweenV5Solution(a,num); return {question:{en:N('√'+num)+' lies between:',hing:N('√'+num)+' kiske beech mein hai?',hi:N('√'+num)+' किसके बीच है?'},ans:ans,w:w,solution:sol}; },
],
sq_simp: [
  // V1: Multiply two roots then simplify
  function(){ const a=rint(2,12),b=rint(2,12); const ans=a*b; const w=[a+b,Math.abs(a-b),a*b+2]; const sol=buildSqSimpV1Solution(a,b,ans); return {question:{en:N('√'+a*a)+' × '+N('√'+b*b)+' = ?',hing:N('√'+a*a)+' × '+N('√'+b*b)+' = ?',hi:N('√'+a*a)+' × '+N('√'+b*b)+' = ?'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V2: Nested operations
  function(){ const a=rint(2,10),b=rint(2,8),c=rint(2,6),d=rint(2,5); const ans=a+b-c+d; const w=[ans+2,ans-1>0?ans-1:ans+3,a-b+c+d]; const sol=buildSqSimpV2Solution(a,b,c,d,ans); return {question:{en:N('√'+a*a)+' + '+N('√'+b*b)+' − '+N('√'+c*c)+' + '+N('√'+d*d)+' = ?',hing:N('√'+a*a)+' + '+N('√'+b*b)+' − '+N('√'+c*c)+' + '+N('√'+d*d)+' = ?',hi:N('√'+a*a)+' + '+N('√'+b*b)+' − '+N('√'+c*c)+' + '+N('√'+d*d)+' = ?'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V3: Root of a sum
  function(){ const a=rint(2,10),b=rint(2,10); const ans=a+b; const sum=(a+b)*(a+b); const w=[a*b,a-b>0?a-b:b-a,a+b+1]; const sol=buildSqSimpV3Solution(a,b,ans); return {question:{en:N('√'+sum)+' = ?',hing:N('√'+sum)+' = ?',hi:N('√'+sum)+' = ?'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V4: Evaluate expression with all same root
  function(){ const a=rint(2,15); const ans=3*a; const w=[3*a+2,3*a-2>0?3*a-2:3*a+4,a*4]; const sol=buildSqSimpV4Solution(a,ans); return {question:{en:N('√'+a*a)+' + '+N('√'+a*a)+' + '+N('√'+a*a)+' = ?',hing:N('√'+a*a)+' + '+N('√'+a*a)+' + '+N('√'+a*a)+' = ?',hi:N('√'+a*a)+' + '+N('√'+a*a)+' + '+N('√'+a*a)+' = ?'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V5: Fill in the blank
  function(){ const a=rint(2,12),b=rint(2,12); const sum=a+b; const w=[a-b>0?a-b:b-a,a+1,a*b]; const sol=buildSqSimpV5Solution(a,b,sum); return {question:{en:N('√'+a*a)+' + ? = '+N(sum)+'. What is ?',hing:N('√'+a*a)+' + ? = '+N(sum)+'. ? kya hai?',hi:N('√'+a*a)+' + ? = '+N(sum)+'. ? क्या है?'},ans:String(b),w:w.map(String),solution:sol}; },
],
sq_prod: [
  // V1: Split and find root
  function(){ const a=rint(2,12),b=rint(2,12); const n=a*a*b*b; const ans=a*b; const w=[a+b,a*b+1,a*b-1>0?a*b-1:a*b+2]; const sol=buildSqProdV1Solution(a,b,ans); return {question:{en:'If '+N(n)+' = '+N(a*a)+' × '+N(b*b)+', find '+N('√'+n),hing:'Agar '+N(n)+' = '+N(a*a)+' × '+N(b*b)+', '+N('√'+n)+' find karo',hi:'यदि '+N(n)+' = '+N(a*a)+' × '+N(b*b)+', '+N('√'+n)+' ज्ञात कीजिए'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V2: Find one factor given the root
  function(){ const a=rint(2,10),b=rint(2,10); const n=a*a*b*b; const ans=a*a; const w=[b*b,a*b,a+b]; const sol=buildSqProdV2Solution(a,b,ans); return {question:{en:N('√'+n)+' = '+N(a*b)+'. One factor under the root is:',hing:N('√'+n)+' = '+N(a*b)+'. Root ke andar ek factor:',hi:N('√'+n)+' = '+N(a*b)+'. मूल के अंदर एक गुणनखंड:'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V3: Product of three squares
  function(){ const a=rint(2,6),b=rint(2,6),c=rint(2,6); const n=a*a*b*b*c*c; const ans=a*b*c; const w=[a+b+c,a*b*c+1,a*b*c-1>0?a*b*c-1:a*b*c+2]; const sol=buildSqProdV3Solution(a,b,c,ans); return {question:{en:N('√('+a*a+' × '+b*b+' × '+c*c+')')+' = ?',hing:N('√('+a*a+' × '+b*b+' × '+c*c+')')+' = ?',hi:N('√('+a*a+' × '+b*b+' × '+c*c+')')+' = ?'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V4: Verify the property
  function(){ const a=rint(2,10),b=rint(2,10); const ans=a*b; const w=[a+b,Math.abs(a-b)+1,a*b+2]; const sol=buildSqProdV4Solution(a,b); return {question:{en:N('√'+a*a)+' × '+N('√'+b*b)+' = '+N(a*b)+'. This illustrates which property?',hing:N('√'+a*a)+' × '+N('√'+b*b)+' = '+N(a*b)+'. Yeh kaunsi property dikhata hai?',hi:N('√'+a*a)+' × '+N('√'+b*b)+' = '+N(a*b)+'. यह कौन सा गुण दर्शाता है?'},ans:'√(a) × √(b) = √(ab)',w:['√(a) + √(b) = √(a+b)','√(a) × √(b) = √(a) × b','√(ab) = a + b'],solution:sol}; },
  // V5: Missing factor
  function(){ const a=rint(2,10),b=rint(2,8); const n=a*a*b*b; const ans=b*b; const w=[a*a,a*b,a*a+b*b]; const sol=buildSqProdV5Solution(a,b,ans); return {question:{en:N('√('+a*a+' × ?)')+' = '+N(a*b)+'. What is ?',hing:N('√('+a*a+' × ?)')+' = '+N(a*b)+'. ? kya hai?',hi:N('√('+a*a+' × ?)')+' = '+N(a*b)+'. ? क्या है?'},ans:String(ans),w:w.map(String),solution:sol}; },
],
sq_area_side: [
  // V1: Given side, find area
  function(){ const s=rint(5,40); const ans=s*s; const w=[ans+10,ans-10>0?ans-10:ans+20,4*s]; const sol=buildSqAreaSideV1Solution(s,ans); return {question:{en:'Side of a square field is '+N(s)+' m. Area?',hing:'Square field ki side '+N(s)+' m. Area?',hi:'वर्गाकार खेत की भुजा '+N(s)+' m। क्षेत्रफल?'},ans:ans+' m²',w:w.map(v=>v+' m²'),solution:sol}; },
  // V2: Room dimensions
  function(){ const s=rint(3,20); const area=s*s; const ans=s; const w=[s+1,s-1>0?s-1:s+2,2*s]; const sol=buildSqAreaSideV2Solution(s,area); return {question:{en:'A square room has area '+N(area)+' ft². Length of one wall?',hing:'Square room ka area '+N(area)+' ft². Ek diwar ki length?',hi:'वर्गाकार कमरे का क्षेत्रफल '+N(area)+' ft²। एक दीवार की लंबाई?'},ans:ans+' ft',w:w.map(v=>v+' ft'),solution:sol}; },
  // V3: Two squares comparison
  function(){ const a=rint(5,20),b=rint(5,20); const ans=Math.abs(a-b); const w=[a+b,Math.abs(a*a-b*b),ans+2]; const sol=buildSqAreaSideV3Solution(a,b,ans); return {question:{en:'Two square fields have sides '+N(a)+' m and '+N(b)+' m. Difference in sides?',hing:'Do square field ki sides '+N(a)+' m aur '+N(b)+' m. Side mein difference?',hi:'दो वर्गाकार खेतों की भुजाएँ '+N(a)+' m और '+N(b)+' m। भुजाओं में अंतर?'},ans:ans+' m',w:w.map(v=>v+' m'),solution:sol}; },
  // V4: Cost of tiling
  function(){ const s=rint(5,25); const area=s*s; const rate=rint(10,50); const cost=area*rate; const w=[cost+500,cost-500>0?cost-500:cost+1000,cost+1000]; const sol=buildSqAreaSideV4Solution(s,area,rate,cost); return {question:{en:'Square floor side '+N(s)+' m. Tiling at ₹'+rate+'/m² costs:',hing:'Square floor side '+N(s)+' m. ₹'+rate+'/m² par tiling ka kharcha:',hi:'वर्गाकार फर्श भुजा '+N(s)+' m। ₹'+rate+'/m² पर टाइलिंग खर्च:'},ans:'₹'+cost,w:w.map(v=>'₹'+v),solution:sol}; },
  // V5: Area of path around square
  function(){ const s=rint(10,30); const w2=rint(1,3); const outer=(s+2*w2)*(s+2*w2); const inner=s*s; const ans=outer-inner; const wrongs=[ans+10,ans-10>0?ans-10:ans+20,2*w2*(s+w2)]; const sol=buildSqAreaSideV5Solution(s,w2,ans); return {question:{en:'A path of width '+N(w2)+' m surrounds a square field of side '+N(s)+' m. Area of the path?',hing:N(w2)+' m wide path '+N(s)+' m side ke square field ke around. Path ka area?',hi:N(w2)+' m चौड़ा पथ '+N(s)+' m भुजा वाले वर्गाकार खेत के चारों ओर। पथ का क्षेत्रफल?'},ans:ans+' m²',w:wrongs.map(v=>v+' m²'),solution:sol}; },
],
sq_digits: [
  // V1: Given digits, give range of numbers
  function(){ const n=rint(2,5); const lo=Math.pow(10,2*(n-1)); const hi=Math.pow(10,2*n)-1; const ans=n; const w=[n+1,n-1>0?n-1:n+2,n+2]; const sol=buildSqDigitsV1Solution(n,lo,hi); return {question:{en:'A number from '+N(lo)+' to '+N(hi)+'. How many digits in its square root?',hing:N(lo)+' se '+N(hi)+' tak ki number. Square root mein kitne digits?',hi:N(lo)+' से '+N(hi)+' तक की संख्या। वर्गमूल में कितने अंक?'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V2: Reverse — given root digits, find number range
  function(){ const n=rint(2,4); const lo=Math.pow(10,n-1); const hi=Math.pow(10,n)-1; const ans=n; const w=[n+1,n-1>0?n-1:n+2,n*2]; const sol=buildSqDigitsV2Solution(n); return {question:{en:'A square root has '+N(n)+' digits. The number has how many digits?',hing:'Square root mein '+N(n)+' digits. Number mein kitne digits?',hi:'वर्गमूल में '+N(n)+' अंक। संख्या में कितने अंक?'},ans:String(2*n),w:w.map(String),solution:sol}; },
  // V3: Specific number digit count
  function(){ const num=pick([100,400,900,1600,2500,3600,4900,6400,8100,10000]); const ans=String(Math.sqrt(num)).length; const w=[ans+1,ans-1>0?ans-1:ans+2,ans+2]; const sol=buildSqDigitsV3Solution(num,ans); return {question:{en:'How many digits in '+N('√'+num)+'?',hing:N('√'+num)+' mein kitne digits?',hi:N('√'+num)+' में कितने अंक?'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V4: Minimum n-digit number whose root has k digits
  function(){ const k=rint(2,4); const ans=Math.pow(10,2*(k-1)); const w=[ans-1>0?ans-1:1,ans+1,ans*2]; const sol=buildSqDigitsV4Solution(k,ans); return {question:{en:'Smallest number whose square root has '+N(k)+' digits:',hing:'Sabse chhota number jiska square root '+N(k)+' digits wala:',hi:'सबसे छोटी संख्या जिसके वर्गमूल में '+N(k)+' अंक:'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V5: Compare digit counts
  function(){ const a=rint(2,20),b=rint(2,20); const sa=a*a,sb=b*b; const da=String(a).length,db=String(b).length; const ans=da===db?'Same':da>db?'√'+sa:'√'+sb; const w=[da===db?'Different':ans,da>db?'√'+sb:'√'+sa,'Cannot determine']; const sol=buildSqDigitsV5Solution(a,b,sa,sb); return {question:{en:'Which has more digits in its root: '+N(sa)+' or '+N(sb)+'?',hing:'Jiska root mein zyada digits: '+N(sa)+' ya '+N(sb)+'?',hi:'जिसके मूल में अधिक अंक: '+N(sa)+' या '+N(sb)+'?'},ans:ans,w:w,solution:sol}; },
],
sq_root1: [
  // V1: √0 = ?
  function(){ const ans=0; const w=[1,-1,undefined]; const sol=buildSqRoot1V1Solution(); return {question:{en:'What is '+N('√0')+'?',hing:N('√0')+' kya hai?',hi:N('√0')+' क्या है?'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V2: √1 + √1 = ?
  function(){ const ans=2; const w=[1,0,Math.sqrt(2).toFixed(2)]; const sol=buildSqRoot1V2Solution(); return {question:{en:N('√1')+' + '+N('√1')+' = ?',hing:N('√1')+' + '+N('√1')+' = ?',hi:N('√1')+' + '+N('√1')+' = ?'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V3: √(n²) for specific n
  function(){ const n=rint(2,25); const ans=n; const w=[-n,n*n,n+1]; const sol=buildSqRoot1V3Solution(n); return {question:{en:N('√('+n+'²)')+' = ?',hing:N('√('+n+'²)')+' = ?',hi:N('√('+n+'²)')+' = ?'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V4: Which is NOT a perfect square?
  function(){ const a=rint(2,15); const ps=a*a; const non=ps+1; const ans=non; const w=[a*a,(a+1)*(a+1),(a>1?(a-1)*(a-1):4)]; const sol=buildSqRoot1V4Solution(a,ps,non); return {question:{en:'Which is NOT a perfect square?',hing:'Kaunsa perfect square NAHI hai?',hi:'कौन सा पूर्ण वर्ग नहीं है?'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V5: Quick calculation
  function(){ const a=rint(2,15); const ans=a; const w=[a+1,a-1>0?a-1:a+2,-a]; const sol=buildSqRoot1V5Solution(a); return {question:{en:'Without calculation, '+N('√'+a*a)+' = ?',hing:'Bina calculation ke, '+N('√'+a*a)+' = ?',hi:'बिना गणना के, '+N('√'+a*a)+' = ?'},ans:String(ans),w:w.map(String),solution:sol}; },
],
sq_approx: [
  // V1: Between which two integers?
  function(){ const a=rint(3,25); const num=a*a+rint(1,a*2); const lo=a; const hi=a+1; const w=[[lo-1,lo],[hi,hi+1],[lo+1,hi+1]]; const sol=buildSqApproxV1Solution(a,num,lo,hi); return {question:{en:N('√'+num)+' lies between which integers?',hing:N('√'+num)+' kis integer ke beech hai?',hi:N('√'+num)+' किन पूर्णांकों के बीच है?'},ans:lo+' and '+hi,w:w.map(p=>p[0]+' and '+p[1]),solution:sol}; },
  // V2: Better approximation
  function(){ const a=rint(2,15); const num=a*a+a; const ans=a+0.5; const w=[a,a+1,a+0.25]; const sol=buildSqApproxV2Solution(a,num,ans); return {question:{en:'Better approximation of '+N('√'+num)+':',hing:N('√'+num)+' ka better approximation:',hi:N('√'+num)+' का बेहतर सन्निकटन:'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V3: Error in approximation
  function(){ const a=rint(2,10); const num=a*a+1; const approx=a+1/(2*a); const ans='Overestimate'; const w=['Underestimate','Exact','Cannot say']; const sol=buildSqApproxV3Solution(a,num,approx,ans); return {question:{en:'Using '+N(a)+' as '+N('√'+num)+': overestimate or underestimate?',hing:N(a)+' ko '+N('√'+num)+' maana: zyada ya kam?',hi:N(a)+' को '+N('√'+num)+' माना: अधिक या कम?'},ans:ans,w:w,solution:sol}; },
  // V4: Approximate and add
  function(){ const a=rint(2,8),b=rint(2,8); const n1=a*a+1,n2=b*b+1; const ans=a+b; const w=[a+b+1,a+b-1>0?a+b-1:a+b+2,a*b]; const sol=buildSqApproxV4Solution(a,b,n1,n2,ans); return {question:{en:N('√'+n1)+' + '+N('√'+n2)+' ≈ ? (nearest integer)',hing:N('√'+n1)+' + '+N('√'+n2)+' ≈ ? (kareebi integer)',hi:N('√'+n1)+' + '+N('√'+n2)+' ≈ ? (निकटतम पूर्णांक)'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V5: Compare approximation methods
  function(){ const a=rint(3,15); const num=a*a+2; const ans=a+1/a; const w=[a,a+1,a+0.5]; const fmt=v=>Number.isInteger(v)?String(v):v.toFixed(2); const sol=buildSqApproxV5Solution(a,num,ans); return {question:{en:N('√'+num)+' ≈ ? (use formula)',hing:N('√'+num)+' ≈ ? (formula lagao)',hi:N('√'+num)+' ≈ ? (सूत्र लगाओ)'},ans:fmt(ans),w:w.map(fmt),solution:sol}; },
],
sq_quot: [
  // V1: Reverse — given answer, find numerator
  function(){ const b=rint(2,10),q=rint(2,15); const a=b*q; const num=a*a,den=b*b; const ans=a*a; const w=[(a+1)*(a+1),(a-1)*(a-1)>0?(a-1)*(a-1):(a+2)*(a+2),a*b]; const sol=buildSqQuotV1Solution(a,b,q,num,den,ans); return {question:{en:N('√?')+' / '+N('√'+den)+' = '+N(q)+'. What is ?',hing:N('√?')+' / '+N('√'+den)+' = '+N(q)+'. ? kya hai?',hi:N('√?')+' / '+N('√'+den)+' = '+N(q)+'. ? क्या है?'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V2: Three-part quotient (a always divisible by b so ans is integer)
  function(){ const b=rint(2,8),k=rint(1,4),c=rint(2,8); const a=b*k; const ans=k*c; const w=[ans+2,ans-1>0?ans-1:ans+3,a+b+c]; const sol=buildSqQuotV2Solution(a,b,c,ans); return {question:{en:N('√'+a*a)+' / '+N('√'+b*b)+' × '+N('√'+c*c)+' = ?',hing:N('√'+a*a)+' / '+N('√'+b*b)+' × '+N('√'+c*c)+' = ?',hi:N('√'+a*a)+' / '+N('√'+b*b)+' × '+N('√'+c*c)+' = ?'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V3: Verify quotient property
  function(){ const a=rint(2,10),b=rint(2,10); const ans='Yes'; const w=['No','Only for perfect squares','Only when a>b']; const sol=buildSqQuotV3Solution(a,b); return {question:{en:'Is '+N('√('+a*a+'/'+b*b+')')+' = '+N(a+'/'+b)+' ?',hing:'Kya '+N('√('+a*a+'/'+b*b+')')+' = '+N(a+'/'+b)+' ?',hi:'क्या '+N('√('+a*a+'/'+b*b+')')+' = '+N(a+'/'+b)+' ?'},ans:ans,w:w,solution:sol}; },
  // V4: Simplify fraction under root
  function(){ const n=rint(2,8),d=rint(2,8); const g=gcd(n,d); const num=n*n,den=d*d; const ans=(n/g)+'/'+(d/g); const w=[(n/g+1)+'/'+(d/g),(n/g)+'/'+(d/g+1),(n-1>0?n-1:1)+'/'+d]; const sol=buildSqQuotV4Solution(n,d,g,num,den,ans); return {question:{en:'Simplify: '+N('√('+num+'/'+den+')'),hing:'Simplify karo: '+N('√('+num+'/'+den+')'),hi:'सरल कीजिए: '+N('√('+num+'/'+den+')')},ans:ans,w:w,solution:sol}; },
  // V5: Find the denominator (display quotient as fraction a/b, not decimal)
  function(){ const a=rint(2,12),b=rint(2,8); const num=a*a,den=b*b; const ans=den; const w=[(b+1)*(b+1),(b-1>0?(b-1)*(b-1):(b+2)*(b+2)),b*b*4]; const sol=buildSqQuotV5Solution(a,b,num,den,ans); return {question:{en:N('√'+num)+' / '+N('√?')+' = '+N(a+'/'+b)+'. Find ?',hing:N('√'+num)+' / '+N('√?')+' = '+N(a+'/'+b)+'. ? find karo',hi:N('√'+num)+' / '+N('√?')+' = '+N(a+'/'+b)+'. ? ज्ञात कीजिए'},ans:String(ans),w:w.map(String),solution:sol}; },
],
sq_n2_prop: [
  // V1: Apply to negative
  function(){ const n=-1*rint(2,20); const nsq=n*n; const ans=Math.abs(n); const w=[n,n*n,n+1]; const sol=buildSqN2PropV1Solution(n,nsq,ans); return {question:{en:N('√('+n+'²)')+' = ?',hing:N('√('+n+'²)')+' = ?',hi:N('√('+n+'²)')+' = ?'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V2: Combine two
  function(){ const a=rint(2,15),b=rint(2,15); const ans=a+b; const w=[a*b,Math.abs(a-b),a+b+1]; const sol=buildSqN2PropV2Solution(a,b,ans); return {question:{en:N('√('+a+'²)')+' + '+N('√('+b+'²)')+' = ?',hing:N('√('+a+'²)')+' + '+N('√('+b+'²)')+' = ?',hi:N('√('+a+'²)')+' + '+N('√('+b+'²)')+' = ?'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V3: True/False about the property
  function(){ const n=rint(2,20); const ans='True'; const w=['False','Only for positive n','Only for even n']; const sol=buildSqN2PropV3Solution(n); return {question:{en:N('√('+n+'²)')+' always equals '+N(Math.abs(n))+'. True or False?',hing:N('√('+n+'²)')+' hamesha '+N(Math.abs(n))+' ke barabar. Sahi ya galat?',hi:N('√('+n+'²)')+' सदैव '+N(Math.abs(n))+' के बराबर। सत्य या असत्य?'},ans:ans,w:w,solution:sol}; },
  // V4: Difference of two
  function(){ const a=rint(5,25),b=rint(2,a-1); const ans=a-b; const w=[a+b,b-a,a*b]; const sol=buildSqN2PropV4Solution(a,b,ans); return {question:{en:N('√('+a+'²)')+' − '+N('√('+b+'²)')+' = ?',hing:N('√('+a+'²)')+' − '+N('√('+b+'²)')+' = ?',hi:N('√('+a+'²)')+' − '+N('√('+b+'²)')+' = ?'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V5: Fill in the blank
  function(){ const n=rint(3,20); const nsq=n*n; const ans=n; const w=[-n,n+1,n*n]; const sol=buildSqN2PropV5Solution(n,nsq,ans); return {question:{en:N('√('+nsq+')')+' = '+N('?')+'. What is ?',hing:N('√('+nsq+')')+' = '+N('?')+'. ? kya hai?',hi:N('√('+nsq+')')+' = '+N('?')+'. ? क्या है?'},ans:String(ans),w:w.map(String),solution:sol}; },
],
sq_perim: [
  // V1: Given perimeter, find area
  function(){ const s=rint(5,30); const perim=4*s; const ans=s*s; const w=[ans+10,ans-10>0?ans-10:ans+20,s*4]; const sol=buildSqPerimV1Solution(s,perim,ans); return {question:{en:'Perimeter of a square is '+N(perim)+' m. Area?',hing:'Square ka perimeter '+N(perim)+' m. Area?',hi:'वर्ग का परिमाप '+N(perim)+' m। क्षेत्रफल?'},ans:ans+' m²',w:w.map(v=>v+' m²'),solution:sol}; },
  // V2: Side given, find perimeter
  function(){ const s=rint(5,25); const d=s; const perim=4*s; const w=[perim+4,perim-4>0?perim-4:perim+8,2*s]; const sol=buildSqPerimV2Solution(s,perim); return {question:{en:'Side of square is '+N(s)+' cm. Perimeter?',hing:'Square ki side '+N(s)+' cm. Perimeter?',hi:'वर्ग की भुजा '+N(s)+' cm। परिमाप?'},ans:perim+' cm',w:w.map(v=>v+' cm'),solution:sol}; },
  // V3: Compare two squares
  function(){ const a=rint(5,20),b=rint(5,20); const pa=4*a,pb=4*b; const ans=Math.abs(pa-pb); const w=[pa+pb,Math.abs(a-b),ans+4]; const sol=buildSqPerimV3Solution(a,b,ans); return {question:{en:'Squares of sides '+N(a)+' m and '+N(b)+' m. Difference in perimeters?',hing:'Sides '+N(a)+' m aur '+N(b)+' m wale squares. Perimeter mein difference?',hi:'भुजाएँ '+N(a)+' m और '+N(b)+' m वाले वर्ग। परिमाप में अंतर?'},ans:ans+' m',w:w.map(v=>v+' m'),solution:sol}; },
  // V4: Fencing cost
  function(){ const s=rint(10,40); const rate=rint(5,25); const cost=4*s*rate; const w=[cost+100,cost-100>0?cost-100:cost+200,s*s*rate]; const sol=buildSqPerimV4Solution(s,rate,cost); return {question:{en:'Fencing a square field of side '+N(s)+' m at ₹'+rate+'/m costs:',hing:'Side '+N(s)+' m wale square field ki fencing ₹'+rate+'/m par:',hi:'भुजा '+N(s)+' m वाले वर्गाकार खेत की बाड़ ₹'+rate+'/m पर:'},ans:'₹'+cost,w:w.map(v=>'₹'+v),solution:sol}; },
  // V5: Double the side
  function(){ const s=rint(5,25); const p1=4*s,p2=4*2*s; const ans=p2; const w=[2*p1,p2+4,p2-4]; const sol=buildSqPerimV5Solution(s,p2); return {question:{en:'Side of a square is doubled from '+N(s)+' m. New perimeter?',hing:'Square ki side '+N(s)+' m se double. Naya perimeter?',hi:'वर्ग की भुजा '+N(s)+' m से दोगुनी। नया परिमाप?'},ans:ans+' m',w:w.map(v=>v+' m'),solution:sol}; },
],
sq_make_sub: [
  // V1: Given what was subtracted, find the number
  function(){ const a=rint(5,30); const sq=a*a; const sub=rint(1,Math.min(20,a)); const num=sq+sub; const ans=sub; const w=[sub+2,sub-1>0?sub-1:sub+3,sub+5]; const sol=buildSqMakeSubV1Solution(num,sq,sub,ans); return {question:{en:N(num)+' − '+N(sub)+' = '+N(sq)+' (perfect square). What was subtracted?',hing:N(num)+' − '+N(sub)+' = '+N(sq)+'. Kya ghataaya?',hi:N(num)+' − '+N(sub)+' = '+N(sq)+'. क्या घटाया गया?'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V2: Previous perfect square
  function(){ const a=rint(5,30); const num=a*a+rint(1,2*a); const ans=num-(a*a); const w=[ans+2,ans-1>0?ans-1:ans+3,(a+1)*(a+1)-num]; const sol=buildSqMakeSubV2Solution(num,ans,a); return {question:{en:'How much to subtract from '+N(num)+' to get the previous perfect square?',hing:N(num)+' mein se kitna ghataayein ki pichla perfect square mile?',hi:N(num)+' से कितना घटाएँ कि पिछला पूर्ण वर्ग मिले?'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V3: Two numbers subtracted to same perfect square
  function(){ const a=rint(10,30); const sq=a*a; const sub1=rint(1,15),sub2=rint(1,15); const num1=sq+sub1,num2=sq+sub2; const ans=sub1+sub2; const w=[ans+2,Math.abs(sub1-sub2),ans-1>0?ans-1:ans+3]; const sol=buildSqMakeSubV3Solution(num1,num2,sq,sub1,sub2,ans); return {question:{en:'Subtract '+N(sub1)+' from '+N(num1)+' and '+N(sub2)+' from '+N(num2)+'. Both reach '+N(sq)+'. Total subtracted?',hing:N(num1)+' se '+N(sub1)+' aur '+N(num2)+' se '+N(sub2)+' ghatao = '+N(sq)+'. Total kitna ghataaya?',hi:N(num1)+' से '+N(sub1)+' और '+N(num2)+' से '+N(sub2)+' घटाओ = '+N(sq)+'. कुल कितना घटाया?'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V4: Which perfect square results?
  function(){ const a=rint(5,30); const sq=a*a; const sub=rint(1,Math.min(20,a)); const num=sq+sub; const ans=sq; const w=[sq-1>0?sq-1:sq+1,sq+1,a*a-a]; const sol=buildSqMakeSubV4Solution(num,sub,ans); return {question:{en:N(num)+' − '+N(sub)+' equals which perfect square?',hing:N(num)+' − '+N(sub)+' kaunsa perfect square banaata hai?',hi:N(num)+' − '+N(sub)+' कौन सा पूर्ण वर्ग बनाता है?'},ans:String(ans),w:w.map(String),solution:sol}; },
  // V5: Subtract and find root
  function(){ const a=rint(5,25); const sq=a*a; const sub=rint(1,Math.min(15,a)); const num=sq+sub; const ans=a; const w=[a+1,a-1>0?a-1:a+2,a+2]; const sol=buildSqMakeSubV5Solution(num,sub,ans); return {question:{en:'Subtract '+N(sub)+' from '+N(num)+'. Square root of result?',hing:N(num)+' se '+N(sub)+' ghatao. Result ka square root?',hi:N(num)+' से '+N(sub)+' घटाओ। परिणाम का वर्गमूल?'},ans:String(ans),w:w.map(String),solution:sol}; },
],
// ═══════════════════ 10th+ CUBE ROOT ═══════════════════
cb_direct: [
  function(){ const r=rint(2,20); const ans=r*r*r; const w=[ans+3*r*r+3*r+1,ans-3*r*r+3*r-1>0?ans-3*r*r+3*r-1:ans+6*r*r+6*r+2,ans+r*r*r]; const sol=buildCbDirectV1Solution(r,ans); return {question:{en:'If '+N('∛x')+' = '+N(r)+', find x',hing:'Agar '+N('∛x')+' = '+N(r)+', to x?',hi:'यदि '+N('∛x')+' = '+N(r)+', तो x?'},ans:String(ans),w:w.map(String),solution:sol}; },
  function(){ const a=rint(2,10),b=rint(2,10); const ans=a+b; const w=[a+b+2,a+b-2>0?a+b-2:a+b+4,Math.abs(a-b)]; const sol=buildCbDirectV2Solution(a,b,ans); return {question:{en:N('∛'+a*a*a)+' + '+N('∛'+b*b*b)+' = ?',hing:N('∛'+a*a*a)+' + '+N('∛'+b*b*b)+' = ?',hi:N('∛'+a*a*a)+' + '+N('∛'+b*b*b)+' = ?'},ans:String(ans),w:w.map(String),solution:sol}; },
  function(){ const r=rint(2,20); const ans=r; const w=[r+1,r-1>0?r-1:r+2,-r]; const sol=buildCbDirectV3Solution(r); return {question:{en:'Which number has cube root '+N(r)+'?',hing:'Kis number ka cube root '+N(r)+' hai?',hi:'किस संख्या का घनमूल '+N(r)+' है?'},ans:String(r*r*r),w:w.map(v=>String(v*v*v)),solution:sol}; },
  function(){ const a=rint(5,15),b=rint(2,a-1); const ans=a-b; const w=[a+b,a-b+2,a*b]; const sol=buildCbDirectV4Solution(a,b,ans); return {question:{en:N('∛'+a*a*a)+' − '+N('∛'+b*b*b)+' = ?',hing:N('∛'+a*a*a)+' − '+N('∛'+b*b*b)+' = ?',hi:N('∛'+a*a*a)+' − '+N('∛'+b*b*b)+' = ?'},ans:String(ans),w:w.map(String),solution:sol}; },
  function(){ const r=rint(2,15); const cube=r*r*r; const w=[r+1,r-1>0?r-1:r+2,r*2]; const sol=buildCbDirectV5Solution(r,cube); return {question:{en:'If '+N('n³')+' = '+N(cube)+', find n',hing:'Agar '+N('n³')+' = '+N(cube)+', to n?',hi:'यदि '+N('n³')+' = '+N(cube)+', तो n?'},ans:String(r),w:w.map(String),solution:sol}; },
],
cb_pf: [
  function(){ const primes=[2,3,5,7,11]; const k=rint(2,3); const chosen=shuffle(primes).slice(0,k); const cube=chosen.reduce((a,p)=>a*p*p*p,1); const r=chosen.reduce((a,p)=>a*p,1); const w=[r+1,r-1>0?r-1:r+2,r*2]; const sol=buildCbPfV1Solution(cube,r,chosen); return {question:{en:'If '+N(cube)+' = '+chosen.map(p=>N(p)+'³').join(' × ')+', find '+N('∛'+cube),hing:'Agar '+N(cube)+' = '+chosen.map(p=>N(p)+'³').join(' × ')+', '+N('∛'+cube)+' find karo',hi:'यदि '+N(cube)+' = '+chosen.map(p=>N(p)+'³').join(' × ')+', '+N('∛'+cube)+' ज्ञात कीजिए'},ans:String(r),w:w.map(String),solution:sol}; },
  function(){ const a=rint(2,8),b=rint(2,8); const ans=a*b; const w=[a*b+2,a+b,a*b-1>0?a*b-1:a*b+3]; const sol=buildCbPfV2Solution(a,b,ans); return {question:{en:N('∛'+a*a*a)+' × '+N('∛'+b*b*b)+' = ?',hing:N('∛'+a*a*a)+' × '+N('∛'+b*b*b)+' = ?',hi:N('∛'+a*a*a)+' × '+N('∛'+b*b*b)+' = ?'},ans:String(ans),w:w.map(String),solution:sol}; },
  function(){ const p=pick([2,3,5,7]); const n=p*p; const ans=p; const w=[p*2,p*p,p+1]; const sol=buildCbPfV3Solution(p,n); return {question:{en:N(n)+' = '+N(p)+'². What to multiply to make it a perfect cube?',hing:N(n)+' = '+N(p)+'². Kisse multiply karein ki perfect cube bane?',hi:N(n)+' = '+N(p)+'²। किससे गुणा करें कि पूर्ण घन बने?'},ans:String(ans),w:w.map(String),solution:sol}; },
  function(){ const a=rint(2,8),b=rint(2,8); const ans=a*b; const w=[a+b,Math.abs(a-b),a*b+1]; const sol=buildCbPfV4Solution(a,b,ans); return {question:{en:N('∛('+a*a*a+' × '+b*b*b+')')+' = ?',hing:N('∛('+a*a*a+' × '+b*b*b+')')+' = ?',hi:N('∛('+a*a*a+' × '+b*b*b+')')+' = ?'},ans:String(ans),w:w.map(String),solution:sol}; },
  function(){ const a=rint(2,10),b=rint(2,8); const ans=a; const num=a*a*a*b*b*b,den=b*b*b; const w=[a+1,a-1>0?a-1:a+2,a*b]; const sol=buildCbPfV5Solution(a,b,num,den,ans); return {question:{en:N('∛'+num)+' ÷ '+N('∛'+den)+' = ?',hing:N('∛'+num)+' ÷ '+N('∛'+den)+' = ?',hi:N('∛'+num)+' ÷ '+N('∛'+den)+' = ?'},ans:String(ans),w:w.map(String),solution:sol}; },
],
cb_root1: [
  function(){ const ans=0; const w=[1,-1,undefined]; const sol=buildCbRoot1V1Solution(); return {question:{en:'What is '+N('∛0')+'?',hing:N('∛0')+' kya hai?',hi:N('∛0')+' क्या है?'},ans:String(ans),w:w.map(String),solution:sol}; },
  function(){ const ans=1; const w=[0,-1,2]; const sol=buildCbRoot1V2Solution(); return {question:{en:N('∛1')+' + '+N('∛1')+' = ?',hing:N('∛1')+' + '+N('∛1')+' = ?',hi:N('∛1')+' + '+N('∛1')+' = ?'},ans:String(ans),w:w.map(String),solution:sol}; },
  function(){ const n=rint(2,15); const ans=n; const w=[-n,n*n,n*n*n]; const sol=buildCbRoot1V3Solution(n); return {question:{en:N('∛('+n+'³)')+' = ?',hing:N('∛('+n+'³)')+' = ?',hi:N('∛('+n+'³)')+' = ?'},ans:String(ans),w:w.map(String),solution:sol}; },
  function(){ const n=rint(2,10); const cube=n*n*n; const w=[n+1,n-1>0?n-1:n+2,-n]; const sol=buildCbRoot1V4Solution(n,cube); return {question:{en:'If '+N('y³')+' = '+N(cube)+', what is y?',hing:'Agar '+N('y³')+' = '+N(cube)+', to y?',hi:'यदि '+N('y³')+' = '+N(cube)+', तो y?'},ans:String(n),w:w.map(String),solution:sol}; },
  function(){ const a=rint(1,5),b=rint(1,5); const ans=a+b; const w=[a*b,a-b>0?a-b:0,ans+1]; const sol=buildCbRoot1V5Solution(a,b,ans); return {question:{en:N('∛'+a*a*a)+' + '+N('∛'+b*b*b)+' = ?',hing:N('∛'+a*a*a)+' + '+N('∛'+b*b*b)+' = ?',hi:N('∛'+a*a*a)+' + '+N('∛'+b*b*b)+' = ?'},ans:String(ans),w:w.map(String),solution:sol}; },
],
cb_neg: [
  function(){ const r=rint(2,12); const pos=r*r*r; const ans=-(r); const w=[r,r*r,-(r*r*r)]; const sol=buildCbNegV1Solution(r,pos); return {question:{en:N('∛(−'+pos+')')+' = ?',hing:N('∛(−'+pos+')')+' = ?',hi:N('∛(−'+pos+')')+' = ?'},ans:String(ans),w:w.map(String),solution:sol}; },
  function(){ const r=rint(2,10); const negCube=-(r*r*r); const ans=r; const w=[-r,r*r,negCube]; const sol=buildCbNegV2Solution(r,negCube); return {question:{en:'If '+N('∛y')+' = '+N(-r)+', what is y?',hing:'Agar '+N('∛y')+' = '+N(-r)+', to y?',hi:'यदि '+N('∛y')+' = '+N(-r)+', तो y?'},ans:String(negCube),w:w.map(String),solution:sol}; },
  function(){ const r=rint(2,8); const ans=-r; const w=[r,-r*r,r*r*r]; const sol=buildCbNegV3Solution(r); return {question:{en:N('∛'+r*r*r)+' + '+N('∛(−'+r*r*r+')')+' = ?',hing:N('∛'+r*r*r)+' + '+N('∛(−'+r*r*r+')')+' = ?',hi:N('∛'+r*r*r)+' + '+N('∛(−'+r*r*r+')')+' = ?'},ans:String(0),w:w.map(String),solution:sol}; },
  function(){ const a=rint(2,8),b=rint(2,8); const ans=a-b; const w=[a+b,b-a,Math.abs(a-b)+2]; const sol=buildCbNegV4Solution(a,b,ans); return {question:{en:N('∛'+a*a*a)+' − '+N('∛'+b*b*b)+' when b > a gives:',hing:'Jab b > a: '+N('∛'+a*a*a)+' − '+N('∛'+b*b*b)+' = ?',hi:'जब b > a: '+N('∛'+a*a*a)+' − '+N('∛'+b*b*b)+' = ?'},ans:String(ans),w:w.map(String),solution:sol}; },
  function(){ const r=rint(2,10); const negCube=-(r*r*r); const ans=r*r*r; const w=[r*r*r+1,r*r*r-1,r*r]; const sol=buildCbNegV5Solution(r,negCube,ans); return {question:{en:'Cube of '+N('∛(−'+negCube+')')+' is:',hing:N('∛(−'+negCube+')')+' ka cube hai:',hi:N('∛(−'+negCube+')')+' का घन है:'},ans:String(ans),w:w.map(String),solution:sol}; },
],
cb_decimal: [
  function(){ const r=rint(1,20); const ans=(r*r*r)/1000; const w=[(r+1)*(r+1)*(r+1)/1000,(r>1?(r-1)*(r-1)*(r-1)/1000:ans+0.001),r*r*r/100]; const sol=buildCbDecimalV1Solution(r,ans); return {question:{en:'What number has cube root '+N(r/10)+'?',hing:'Kis number ka cube root '+N(r/10)+' hai?',hi:'किस संख्या का घनमूल '+N(r/10)+' है?'},ans:String(ans),w:w.map(String),solution:sol}; },
  function(){ const a=rint(1,5),b=rint(1,5); const da=a*a*a/1000,db=b*b*b/1000; const ans=a/10+b/10; const w=[ans+0.1,ans-0.1>0?ans-0.1:ans+0.2,ans+0.2]; const sol=buildCbDecimalV2Solution(a,b,da,db,ans); return {question:{en:N('∛'+da)+' + '+N('∛'+db)+' = ?',hing:N('∛'+da)+' + '+N('∛'+db)+' = ?',hi:N('∛'+da)+' + '+N('∛'+db)+' = ?'},ans:String(ans),w:w.map(String),solution:sol}; },
  function(){ const a=rint(1,9); const n=a*a*a*1000000; const ans=a*100; const w=[ans+100,ans-100>0?ans-100:ans+200,ans+50]; const sol=buildCbDecimalV3Solution(a,n,ans); return {question:{en:N('∛'+n/1000000000)+' = ?',hing:N('∛'+n/1000000000)+' = ?',hi:N('∛'+n/1000000000)+' = ?'},ans:String(ans),w:w.map(String),solution:sol}; },
  function(){ const a=rint(1,9); const dec=a*a*a/1000; const ans=a/10; const w=[(a+1)/10,(a>1?(a-1)/10:0.1),a/100]; const sol=buildCbDecimalV4Solution(a,dec,ans); return {question:{en:'Which is '+N('∛'+dec)+'?',hing:N('∛'+dec)+' kya hai?',hi:N('∛'+dec)+' क्या है?'},ans:String(ans),w:w.map(String),solution:sol}; },
  function(){ const a=rint(1,6),b=rint(1,6); const da=a*a*a/1000,db=b*b*b/1000; const bigger=Math.max(a/10,b/10); const w=[Math.min(a/10,b/10),a/10+b/10,Math.abs(a/10-b/10)]; const sol=buildCbDecimalV5Solution(a,b,da,db); return {question:{en:'Which is greater: '+N('∛'+da)+' or '+N('∛'+db)+'?',hing:'Bada kaun: '+N('∛'+da)+' ya '+N('∛'+db)+'?',hi:'बड़ा कौन: '+N('∛'+da)+' या '+N('∛'+db)+'?'},ans:String(bigger),w:w.map(String),solution:sol}; },
],
cb_frac: [
  function(){ const n=rint(1,8),d=rint(2,10); const cN=n*n*n,cD=d*d*d; const ans=cN+'/'+cD; const w=[(cN+1)+'/'+cD,cN+'/'+(cD+1),(n+1)*(n+1)*(n+1)+'/'+(d+1)*(d+1)*(d+1)]; const sol=buildCbFracV1Solution(n,d,cN,cD,ans); return {question:{en:'What fraction has cube root '+N(n+'/'+d)+'?',hing:'Kis fraction ka cube root '+N(n+'/'+d)+' hai?',hi:'किस भिन्न का घनमूल '+N(n+'/'+d)+' है?'},ans:ans,w:w,solution:sol}; },
  function(){ const a=rint(1,5),b=rint(2,8),c=rint(1,5),dd=rint(2,8); const ans=(a*c)+'/'+(b*dd); const w=[(a+c)+'/'+(b+dd),(a*c+1)+'/'+(b*dd),(a*c)+'/'+(b*dd+1)]; const sol=buildCbFracV2Solution(a,b,c,dd,ans); return {question:{en:N('∛('+a*a*a+'/'+b*b*b+')')+' × '+N('∛('+c*c*c+'/'+dd*dd*dd+')')+' = ?',hing:N('∛('+a*a*a+'/'+b*b*b+')')+' × '+N('∛('+c*c*c+'/'+dd*dd*dd+')')+' = ?',hi:N('∛('+a*a*a+'/'+b*b*b+')')+' × '+N('∛('+c*c*c+'/'+dd*dd*dd+')')+' = ?'},ans:ans,w:w,solution:sol}; },
  function(){ const n=rint(2,6),d=rint(2,6); const g=gcd(n,d); const sn=n/g,sd=d/g; const cN=sn*sn*sn*8,cD=sd*sd*sd*8; const ans=sn+'/'+sd; const w=[(sn+1)+'/'+sd,sn+'/'+(sd+1),(sn-1>0?sn-1:1)+'/'+sd]; const sol=buildCbFracV3Solution(sn,sd,cN,cD,ans); return {question:{en:'Simplify: '+N('∛('+cN+'/'+cD+')'),hing:'Simplify karo: '+N('∛('+cN+'/'+cD+')'),hi:'सरल कीजिए: '+N('∛('+cN+'/'+cD+')')},ans:ans,w:w,solution:sol}; },
  function(){ const n=rint(1,6),d=rint(2,8); const cN=n*n*n,cD=d*d*d; const ans=cN+'/'+cD; const w=[(cN+d)+'/'+cD,cN+'/'+(cD+n),(cN+3*n*n+3*n+1)+'/'+cD]; const sol=buildCbFracV4Solution(n,d,cN,cD,ans); return {question:{en:'Which fraction equals '+N('∛('+cN+'/'+cD+')')+'³?',hing:'Kaunsi fraction '+N('∛('+cN+'/'+cD+')')+'³ ke barabar hai?',hi:'कौन सी भिन्न '+N('∛('+cN+'/'+cD+')')+'³ के बराबर है?'},ans:ans,w:w,solution:sol}; },
  function(){ const a=rint(1,5),b=rint(2,8); const cN=a*a*a,cD=b*b*b; const ans=cD; const w=[(b+1)*(b+1)*(b+1),(b-1>0?(b-1)*(b-1)*(b-1):(b+2)*(b+2)*(b+2)),b*b*b*8]; const sol=buildCbFracV5Solution(a,b,cN,cD,ans); return {question:{en:N('∛'+cN)+' / '+N('∛?')+' = '+N(a+'/'+b)+'. Find ?',hing:N('∛'+cN)+' / '+N('∛?')+' = '+N(a+'/'+b)+'. ? find karo',hi:N('∛'+cN)+' / '+N('∛?')+' = '+N(a+'/'+b)+'. ? ज्ञात कीजिए'},ans:String(ans),w:w.map(String),solution:sol}; },
],
cb_make_x: [
  function(){ const p=pick([2,3,5,7]); const k=rint(2,6); const num=p*k*k; const ans=num*p; const w=[ans+p,ans-p>0?ans-p:ans+2*p,ans+k]; const sol=buildCbMakeXSolution(num,ans,0); return {question:{en:'Multiply '+N(num)+' by '+N(p)+'. Is the result a perfect cube?',hing:N(num)+' ko '+N(p)+' se multiply karo. Kya perfect cube hai?',hi:N(num)+' को '+N(p)+' से गुणा करो। क्या पूर्ण घन है?'},ans:'Yes — '+ans,w:['No','Yes — '+(ans+p),'Yes — '+(ans+k)],solution:sol}; },
  function(){ const a=rint(2,6),b=rint(2,6); const na=a*b*b, nb=a*a*b; const ans=a*b; const w=[a*b+1,a*b-1>0?a*b-1:a*b+2,a+b]; const sol=buildCbMakeXSolution(na,ans,1); return {question:{en:N(na)+' × '+N(nb)+' is a perfect cube of?',hing:N(na)+' × '+N(nb)+' kiska perfect cube hai?',hi:N(na)+' × '+N(nb)+' किसका पूर्ण घन है?'},ans:String(ans),w:w.map(String),solution:sol}; },
  function(){ const base=rint(2,6),sqPart=rint(2,6); const num=base*sqPart*sqPart; const ans=base; const w=[base*2,sqPart,base+sqPart]; const sol=buildCbMakeXSolution(num,ans,2); return {question:{en:N(num)+' × ? = perfect cube. Which works?',hing:N(num)+' × ? = perfect cube. Kaunsa kaam karega?',hi:N(num)+' × ? = पूर्ण घन। कौन सा काम करेगा?'},ans:String(ans),w:w.map(String),solution:sol}; },
  function(){ const base=rint(2,8),sqPart=rint(2,5); const num=base*sqPart*sqPart; const ans=base; const w=[base*sqPart,sqPart*sqPart,base*base]; const sol=buildCbMakeXSolution(num,ans,3); return {question:{en:'Smallest number to multiply '+N(num)+' for a perfect cube:',hing:N(num)+' ko perfect cube banane ke liye sabse chhota multiplier:',hi:N(num)+' को पूर्ण घन बनाने के लिए सबसे छोटा गुणक:'},ans:String(ans),w:w.map(String),solution:sol}; },
  function(){ const p=pick([2,3,5]); const k=rint(2,5); const num=p*k*k; const ans=k; const w=[k+1,k-1>0?k-1:k+2,p*k]; const sol=buildCbMakeXSolution(num,ans,4); return {question:{en:'After multiplying '+N(num)+' by '+N(p)+', the cube root is:',hing:N(num)+' ko '+N(p)+' se multiply karne par cube root:',hi:N(num)+' को '+N(p)+' से गुणा करने पर घनमूल:'},ans:String(ans),w:w.map(String),solution:sol}; },
],
cb_make_d: [
  function(){ const base=rint(2,6),sqPart=rint(2,6); const num=base*base*base*sqPart; const ans=base; const w=[base+1,base-1>0?base-1:base+2,sqPart]; const sol=buildCbMakeDSolution(num,ans,0); return {question:{en:'After dividing '+N(num)+' by '+N(sqPart)+', the cube root is:',hing:N(num)+' ko '+N(sqPart)+' se divide karne par cube root:',hi:N(num)+' को '+N(sqPart)+' से भाग देने पर घनमूल:'},ans:String(ans),w:w.map(String),solution:sol}; },
  function(){ const base=rint(2,6),sqPart=rint(2,5); const num=base*base*base*sqPart; const ans=sqPart; const w=[base,sqPart*2,base*sqPart]; const sol=buildCbMakeDSolution(num,ans,1); return {question:{en:N(num)+' ÷ ? = perfect cube. Which works?',hing:N(num)+' ÷ ? = perfect cube. Kaunsa kaam karega?',hi:N(num)+' ÷ ? = पूर्ण घन। कौन सा काम करेगा?'},ans:String(ans),w:w.map(String),solution:sol}; },
  function(){ const base=rint(2,8),sqPart=rint(2,5); const num=base*base*base*sqPart; const ans=sqPart; const w=[base,sqPart*2,base*sqPart]; const sol=buildCbMakeDSolution(num,ans,2); return {question:{en:'Smallest number to divide '+N(num)+' for a perfect cube:',hing:N(num)+' ko perfect cube banane ke liye sabse chhota divisor:',hi:N(num)+' को पूर्ण घन बनाने के लिए सबसे छोटा भाजक:'},ans:String(ans),w:w.map(String),solution:sol}; },
  function(){ const base=rint(2,6),sqPart=rint(2,4); const num=base*base*base*sqPart; const result=num/sqPart; const ans='Yes'; const w=['No','Only if even','Only if odd']; const sol=buildCbMakeDSolution(num,ans,3); return {question:{en:N(num)+' ÷ '+N(sqPart)+' = '+N(result)+'. Is this a perfect cube?',hing:N(num)+' ÷ '+N(sqPart)+' = '+N(result)+'. Kya perfect cube hai?',hi:N(num)+' ÷ '+N(sqPart)+' = '+N(result)+'. क्या पूर्ण घन है?'},ans:ans,w:w,solution:sol}; },
  function(){ const a=rint(2,8),b=rint(2,5); const num=a*a*a*b; const ans=a; const w=[a+1,b,a*b]; const sol=buildCbMakeDSolution(num,ans,4); return {question:{en:N('∛('+num+'/'+b+')')+' = ?',hing:N('∛('+num+'/'+b+')')+' = ?',hi:N('∛('+num+'/'+b+')')+' = ?'},ans:String(ans),w:w.map(String),solution:sol}; },
],
cb_make_add: [
  function(){ const r=rint(2,10); const cube=r*r*r; const add=rint(1,Math.min(20,r*3)); const num=cube-add; const ans=add; const w=[add+3,add-2>0?add-2:add+4,add+7]; return {question:{en:N(num)+' + ? = '+N(cube)+'. What was added?',hing:N(num)+' + ? = '+N(cube)+'. Kya joda?',hi:N(num)+' + ? = '+N(cube)+'. क्या जोड़ा गया?'},ans:String(ans),w:w.map(String)}; },
  function(){ const r=rint(2,10); const num=r*r*r+rint(1,r*2); const ans=(r+1)*(r+1)*(r+1)-num; const w=[ans+3,ans-2>0?ans-2:ans+5,(r+2)*(r+2)*(r+2)-num]; return {question:{en:'How much to add to '+N(num)+' to reach the next perfect cube?',hing:N(num)+' mein kitna jodein ki next perfect cube mile?',hi:N(num)+' में कितना जोड़ें कि अगला पूर्ण घन मिले?'},ans:String(ans),w:w.map(String)}; },
  function(){ const r=rint(2,10); const cube=r*r*r; const add=rint(1,Math.min(15,r*2)); const num=cube-add; const ans=cube; const w=[cube+1,cube-1>0?cube-1:cube+1,cube+r]; return {question:{en:N(num)+' + '+N(add)+' equals which perfect cube?',hing:N(num)+' + '+N(add)+' kaunsa perfect cube banaata hai?',hi:N(num)+' + '+N(add)+' कौन सा पूर्ण घन बनाता है?'},ans:String(ans),w:w.map(String)}; },
  function(){ const r=rint(2,8); const cube=r*r*r; const add=rint(1,Math.min(10,r*2)); const num=cube-add; const ans=r; const w=[r+1,r-1>0?r-1:r+2,r+2]; return {question:{en:'Add '+N(add)+' to '+N(num)+'. Cube root of result?',hing:N(num)+' mein '+N(add)+' jodein. Result ka cube root?',hi:N(num)+' में '+N(add)+' जोड़ें। परिणाम का घनमूल?'},ans:String(ans),w:w.map(String)}; },
  function(){ const a=rint(2,8); const cube=a*a*a; const num=cube-1; const ans=1; const w=[2,3,a]; return {question:{en:'Add what to '+N(num)+' to make it a perfect cube?',hing:N(num)+' mein kya jodein ki perfect cube bane?',hi:N(num)+' में क्या जोड़ें कि पूर्ण घन बने?'},ans:String(ans),w:w.map(String)}; },
],
cb_make_sub: [
  function(){ const r=rint(2,10); const cube=r*r*r; const sub=rint(1,Math.min(20,r*3)); const num=cube+sub; const ans=sub; const w=[sub+3,sub-2>0?sub-2:sub+4,sub+7]; return {question:{en:N(num)+' − '+N(sub)+' = '+N(cube)+'. What was subtracted?',hing:N(num)+' − '+N(sub)+' = '+N(cube)+'. Kya ghataaya?',hi:N(num)+' − '+N(sub)+' = '+N(cube)+'. क्या घटाया गया?'},ans:String(ans),w:w.map(String)}; },
  function(){ const r=rint(2,10); const num=r*r*r+rint(1,r*2); const ans=num-(r*r*r); const w=[ans+3,ans-2>0?ans-2:ans+5,(r+1)*(r+1)*(r+1)-num]; return {question:{en:'How much to subtract from '+N(num)+' to get the previous perfect cube?',hing:N(num)+' mein se kitna ghataayein ki pichla perfect cube mile?',hi:N(num)+' से कितना घटाएँ कि पिछला पूर्ण घन मिले?'},ans:String(ans),w:w.map(String)}; },
  function(){ const r=rint(2,8); const cube=r*r*r; const sub=rint(1,Math.min(15,r*2)); const num=cube+sub; const ans=cube; const w=[cube+1,cube-1>0?cube-1:cube+1,cube-r]; return {question:{en:N(num)+' − '+N(sub)+' equals which perfect cube?',hing:N(num)+' − '+N(sub)+' kaunsa perfect cube banaata hai?',hi:N(num)+' − '+N(sub)+' कौन सा पूर्ण घन बनाता है?'},ans:String(ans),w:w.map(String)}; },
  function(){ const r=rint(2,8); const cube=r*r*r; const sub=rint(1,Math.min(10,r*2)); const num=cube+sub; const ans=r; const w=[r+1,r-1>0?r-1:r+2,r+2]; return {question:{en:'Subtract '+N(sub)+' from '+N(num)+'. Cube root of result?',hing:N(num)+' se '+N(sub)+' ghatao. Cube root?',hi:N(num)+' से '+N(sub)+' घटाओ। घनमूल?'},ans:String(ans),w:w.map(String)}; },
  function(){ const r=rint(2,8); const cube=r*r*r; const num=cube+1; const ans=1; const w=[2,r,r*r]; return {question:{en:'Subtract what from '+N(num)+' to make it a perfect cube?',hing:N(num)+' se kya ghatao ki perfect cube bane?',hi:N(num)+' से क्या घटाओ कि पूर्ण घन बने?'},ans:String(ans),w:w.map(String)}; },
],
cb_est: [
  function(){ const a=rint(2,15); const num=a*a*a+rint(1,a*2); const ans=a; const w=[a+1,a-1>0?a-1:a+2,a+2]; return {question:{en:N('∛'+num)+' is closest to which integer?',hing:N('∛'+num)+' sabse kareebi kis integer hai?',hi:N('∛'+num)+' सबसे निकट कौन सा पूर्णांक है?'},ans:String(ans),w:w.map(String)}; },
  function(){ const a=rint(3,15); const num=a*a*a+a; const ans=a; const w=[a+1,a-1>0?a-1:0,a+2]; return {question:{en:N('∛'+num)+' ≈ ? (nearest integer)',hing:N('∛'+num)+' ≈ ? (kareebi integer)',hi:N('∛'+num)+' ≈ ? (निकटतम पूर्णांक)'},ans:String(ans),w:w.map(String)}; },
  function(){ const a=rint(2,12); const num=a*a*a+1; const ans='Closer to '+a; const w=['Closer to '+(a+1),'Exactly midway','Closer to '+(a+2)]; return {question:{en:'Is '+N('∛'+num)+' closer to '+N(a)+' or '+N(a+1)+'?',hing:N('∛'+num)+' '+N(a)+' ke kareeb ya '+N(a+1)+' ke?',hi:N('∛'+num)+' '+N(a)+' के निकट या '+N(a+1)+' के?'},ans:ans,w:w}; },
  function(){ const a=rint(2,10),b=rint(2,10); const n1=a*a*a+1,n2=b*b*b+1; const ans=a+b; const w=[a+b+1,a+b-1>0?a+b-1:a+b+2,a*b]; return {question:{en:N('∛'+n1)+' + '+N('∛'+n2)+' ≈ ? (nearest integer)',hing:N('∛'+n1)+' + '+N('∛'+n2)+' ≈ ? (kareebi integer)',hi:N('∛'+n1)+' + '+N('∛'+n2)+' ≈ ? (निकटतम पूर्णांक)'},ans:String(ans),w:w.map(String)}; },
  function(){ const a=rint(2,15); const num=a*a*a+a*2; const ans='Between '+a+' and '+(a+1); const w=['Between '+(a-1)+' and '+a,'Between '+(a+1)+' and '+(a+2),'Between '+(a-2)+' and '+(a-1)]; return {question:{en:N('∛'+num)+' lies between:',hing:N('∛'+num)+' kiske beech mein hai?',hi:N('∛'+num)+' किसके बीच है?'},ans:ans,w:w}; },
],
cb_digits: [
  function(){ const n=rint(2,4); const lo=Math.pow(10,3*(n-1)); const hi=Math.pow(10,3*n)-1; const ans=n; const w=[n+1,n-1>0?n-1:n+2,n+2]; return {question:{en:'A number from '+N(lo)+' to '+N(hi)+'. How many digits in its cube root?',hing:N(lo)+' se '+N(hi)+' tak ki number. Cube root mein kitne digits?',hi:N(lo)+' से '+N(hi)+' तक की संख्या। घनमूल में कितने अंक?'},ans:String(ans),w:w.map(String)}; },
  function(){ const n=rint(2,3); const lo=Math.pow(10,n-1); const hi=Math.pow(10,n)-1; const ans=3*n; const w=[3*n+1,3*n-1>0?3*n-1:3*n+2,2*n]; return {question:{en:'A cube root has '+N(n)+' digits. The number has how many digits?',hing:'Cube root mein '+N(n)+' digits. Number mein kitne digits?',hi:'घनमूल में '+N(n)+' अंक। संख्या में कितने अंक?'},ans:String(ans),w:w.map(String)}; },
  function(){ const num=pick([8,27,64,125,216,343,512,729,1000,1331]); const ans=String(Math.cbrt(num)).length; const w=[ans+1,ans-1>0?ans-1:ans+2,ans+2]; return {question:{en:'How many digits in '+N('∛'+num)+'?',hing:N('∛'+num)+' mein kitne digits?',hi:N('∛'+num)+' में कितने अंक?'},ans:String(ans),w:w.map(String)}; },
  function(){ const k=rint(2,3); const ans=Math.pow(10,3*(k-1)); const w=[ans-1>0?ans-1:1,ans+1,ans*2]; return {question:{en:'Smallest number whose cube root has '+N(k)+' digits:',hing:'Sabse chhota number jiska cube root '+N(k)+' digits wala:',hi:'सबसे छोटी संख्या जिसके घनमूल में '+N(k)+' अंक:'},ans:String(ans),w:w.map(String)}; },
  function(){ const n=rint(1,3); const ans=3*n; const w=[ans+1,ans-1>0?ans-1:ans+2,2*n]; return {question:{en:'A '+N(ans)+'-digit number has how many digits in its cube root?',hing:N(ans)+'-digit number ke cube root mein kitne digits?',hi:N(ans)+'-अंकीय संख्या के घनमूल में कितने अंक?'},ans:String(n),w:w.map(String)}; },
],
cb_simp: [
  function(){ const a=rint(1,8),b=rint(1,8); const ans=a*b; const w=[a+b,Math.abs(a-b),a*b+2]; return {question:{en:N('∛'+a*a*a)+' × '+N('∛'+b*b*b)+' = ?',hing:N('∛'+a*a*a)+' × '+N('∛'+b*b*b)+' = ?',hi:N('∛'+a*a*a)+' × '+N('∛'+b*b*b)+' = ?'},ans:String(ans),w:w.map(String)}; },
  function(){ const a=rint(1,8),b=rint(1,6),c=rint(1,5),d=rint(1,4); const ans=a+b-c+d; const w=[ans+2,ans-1>0?ans-1:ans+3,a-b+c+d]; return {question:{en:N('∛'+a*a*a)+' + '+N('∛'+b*b*b)+' − '+N('∛'+c*c*c)+' + '+N('∛'+d*d*d)+' = ?',hing:N('∛'+a*a*a)+' + '+N('∛'+b*b*b)+' − '+N('∛'+c*c*c)+' + '+N('∛'+d*d*d)+' = ?',hi:N('∛'+a*a*a)+' + '+N('∛'+b*b*b)+' − '+N('∛'+c*c*c)+' + '+N('∛'+d*d*d)+' = ?'},ans:String(ans),w:w.map(String)}; },
  function(){ const a=rint(1,8),b=rint(1,8); const ans=a+b; const sum=(a+b)*(a+b)*(a+b); const w=[a*b,a-b>0?a-b:b-a,ans+1]; return {question:{en:N('∛'+sum)+' = ?',hing:N('∛'+sum)+' = ?',hi:N('∛'+sum)+' = ?'},ans:String(ans),w:w.map(String)}; },
  function(){ const a=rint(1,10); const ans=3*a; const w=[3*a+2,3*a-2>0?3*a-2:3*a+4,a*4]; return {question:{en:N('∛'+a*a*a)+' + '+N('∛'+a*a*a)+' + '+N('∛'+a*a*a)+' = ?',hing:N('∛'+a*a*a)+' + '+N('∛'+a*a*a)+' + '+N('∛'+a*a*a)+' = ?',hi:N('∛'+a*a*a)+' + '+N('∛'+a*a*a)+' + '+N('∛'+a*a*a)+' = ?'},ans:String(ans),w:w.map(String)}; },
  function(){ const a=rint(1,8),b=rint(1,8); const sum=a+b; const w=[a-b>0?a-b:b-a,a+1,a*b]; return {question:{en:N('∛'+a*a*a)+' + ? = '+N(sum)+'. What is ?',hing:N('∛'+a*a*a)+' + ? = '+N(sum)+'. ? kya hai?',hi:N('∛'+a*a*a)+' + ? = '+N(sum)+'. ? क्या है?'},ans:String(b),w:w.map(String)}; },
],
cb_prod: [
  function(){ const a=rint(2,8),b=rint(2,8); const n=a*a*a*b*b*b; const ans=a*b; const w=[a+b,a*b+1,a*b-1>0?a*b-1:a*b+2]; return {question:{en:'If '+N(n)+' = '+N(a*a*a)+' × '+N(b*b*b)+', find '+N('∛'+n),hing:'Agar '+N(n)+' = '+N(a*a*a)+' × '+N(b*b*b)+', '+N('∛'+n)+' find karo',hi:'यदि '+N(n)+' = '+N(a*a*a)+' × '+N(b*b*b)+', '+N('∛'+n)+' ज्ञात कीजिए'},ans:String(ans),w:w.map(String)}; },
  function(){ const a=rint(2,6),b=rint(2,6); const n=a*a*a*b*b*b; const ans=a*a*a; const w=[b*b*b,a*b,a+b]; return {question:{en:N('∛'+n)+' = '+N(a*b)+'. One factor under the cube root is:',hing:N('∛'+n)+' = '+N(a*b)+'. Cube root ke andar ek factor:',hi:N('∛'+n)+' = '+N(a*b)+'. घनमूल के अंदर एक गुणनखंड:'},ans:String(ans),w:w.map(String)}; },
  function(){ const a=rint(2,4),b=rint(2,4),c=rint(2,4); const n=a*a*a*b*b*b*c*c*c; const ans=a*b*c; const w=[a+b+c,a*b*c+1,a*b*c-1>0?a*b*c-1:a*b*c+2]; return {question:{en:N('∛('+a*a*a+' × '+b*b*b+' × '+c*c*c+')')+' = ?',hing:N('∛('+a*a*a+' × '+b*b*b+' × '+c*c*c+')')+' = ?',hi:N('∛('+a*a*a+' × '+b*b*b+' × '+c*c*c+')')+' = ?'},ans:String(ans),w:w.map(String)}; },
  function(){ const a=rint(2,6),b=rint(2,5); const n=a*a*a*b*b*b; const ans=b*b*b; const w=[a*a*a,a*b,a*a*a+b*b*b]; return {question:{en:N('∛('+a*a*a+' × ?)')+' = '+N(a*b)+'. What is ?',hing:N('∛('+a*a*a+' × ?)')+' = '+N(a*b)+'. ? kya hai?',hi:N('∛('+a*a*a+' × ?)')+' = '+N(a*b)+'. ? क्या है?'},ans:String(ans),w:w.map(String)}; },
  function(){ const a=rint(2,6),b=rint(2,6); const ans=a*b; const w=[a+b,Math.abs(a-b)+1,a*b+2]; return {question:{en:N('∛'+a*a*a)+' × '+N('∛'+b*b*b)+' = '+N(a*b)+'. This illustrates:',hing:N('∛'+a*a*a)+' × '+N('∛'+b*b*b)+' = '+N(a*b)+'. Yeh dikhata hai:',hi:N('∛'+a*a*a)+' × '+N('∛'+b*b*b)+' = '+N(a*b)+'. यह दर्शाता है:'},ans:'∛(a) × ∛(b) = ∛(ab)',w:['∛(a) + ∛(b) = ∛(a+b)','∛(a) × ∛(b) = ∛(a) × b','∛(ab) = a + b']}; },
],
cb_n3_prop: [
  function(){ const n=-1*rint(2,15); const nsq=n*n*n; const ans=n; const w=[Math.abs(n),n*n,n*n*n]; return {question:{en:N('∛('+n+'³)')+' = ?',hing:N('∛('+n+'³)')+' = ?',hi:N('∛('+n+'³)')+' = ?'},ans:String(ans),w:w.map(String)}; },
  function(){ const a=rint(2,10),b=rint(2,10); const ans=a+b; const w=[a*b,Math.abs(a-b),a+b+1]; return {question:{en:N('∛('+a+'³)')+' + '+N('∛('+b+'³)')+' = ?',hing:N('∛('+a+'³)')+' + '+N('∛('+b+'³)')+' = ?',hi:N('∛('+a+'³)')+' + '+N('∛('+b+'³)')+' = ?'},ans:String(ans),w:w.map(String)}; },
  function(){ const n=rint(2,15); const ans='True'; const w=['False','Only for positive n','Only for odd n']; return {question:{en:N('∛('+n+'³)')+' always equals '+N(n)+'. True or False?',hing:N('∛('+n+'³)')+' hamesha '+N(n)+' ke barabar. Sahi ya galat?',hi:N('∛('+n+'³)')+' सदैव '+N(n)+' के बराबर। सत्य या असत्य?'},ans:ans,w:w}; },
  function(){ const a=rint(3,15),b=rint(2,a-1); const ans=a-b; const w=[a+b,b-a,a*b]; return {question:{en:N('∛('+a+'³)')+' − '+N('∛('+b+'³)')+' = ?',hing:N('∛('+a+'³)')+' − '+N('∛('+b+'³)')+' = ?',hi:N('∛('+a+'³)')+' − '+N('∛('+b+'³)')+' = ?'},ans:String(ans),w:w.map(String)}; },
  function(){ const n=rint(2,15); const cube=n*n*n; const ans=n; const w=[-n,n+1,n*n]; return {question:{en:N('∛'+cube)+' = '+N('?')+'. What is ?',hing:N('∛'+cube)+' = '+N('?')+'. ? kya hai?',hi:N('∛'+cube)+' = '+N('?')+'. ? क्या है?'},ans:String(ans),w:w.map(String)}; },
],
cb_vol_side: [
  function(){ const s=rint(3,15); const vol=s*s*s; const ans=s; const w=[s+1,s-1>0?s-1:s+2,2*s]; return {question:{en:'Volume of a cube is '+N(vol)+' cm³. Side?',hing:'Cube ka volume '+N(vol)+' cm³. Side?',hi:'घन का आयतन '+N(vol)+' cm³। भुजा?'},ans:ans+' cm',w:w.map(v=>v+' cm')}; },
  function(){ const s=rint(3,15); const vol=s*s*s; const ans=vol; const w=[vol+10,vol-10>0?vol-10:vol+20,4*s]; return {question:{en:'Side of a cube is '+N(s)+' cm. Volume?',hing:'Cube ki side '+N(s)+' cm. Volume?',hi:'घन की भुजा '+N(s)+' cm। आयतन?'},ans:ans+' cm³',w:w.map(v=>v+' cm³')}; },
  function(){ const a=rint(3,10),b=rint(3,10); const ans=Math.abs(a-b); const w=[a+b,Math.abs(a*a*a-b*b*b),ans+2]; return {question:{en:'Two cubes with sides '+N(a)+' cm and '+N(b)+' cm. Difference in sides?',hing:'Do cubes sides '+N(a)+' cm aur '+N(b)+' cm. Side mein difference?',hi:'दो घन भुजाएँ '+N(a)+' cm और '+N(b)+' cm। भुजाओं में अंतर?'},ans:ans+' cm',w:w.map(v=>v+' cm')}; },
  function(){ const s=rint(5,20); const vol=s*s*s; const rate=rint(20,100); const cost=vol*rate; const w=[cost+1000,cost-1000>0?cost-1000:cost+2000,cost+2000]; return {question:{en:'Cube side '+N(s)+' m. Painting at ₹'+rate+'/m³ costs:',hing:'Cube side '+N(s)+' m. ₹'+rate+'/m³ par painting ka kharcha:',hi:'घन भुजा '+N(s)+' m। ₹'+rate+'/m³ पर पेंटिंग खर्च:'},ans:'₹'+cost,w:w.map(v=>'₹'+v)}; },
  function(){ const s=rint(5,15); const vol=s*s*s; const newS=2*s; const newVol=newS*newS*newS; const ans=newVol; const w=[2*vol,3*vol,newVol-100]; return {question:{en:'Side of a cube is doubled from '+N(s)+' m. New volume?',hing:'Cube ki side '+N(s)+' m se double. Naya volume?',hi:'घन की भुजा '+N(s)+' m से दोगुनी। नया आयतन?'},ans:ans+' m³',w:w.map(v=>v+' m³')}; },
],
sq_tf_prop: [
  function(){ const n=rint(2,20); const sq=n*n; const ans='True'; const w=['False','Only for even n','Only for odd n']; return {question:{en:'The square of '+N(n)+' has '+N(String(sq).length)+' digits. This is always possible.',hing:N(n)+' ka square mein '+N(String(sq).length)+' digits. Yeh hamesha possible hai.',hi:N(n)+' का वर्ग में '+N(String(sq).length)+' अंक। यह सदैव संभव है।'},ans:ans,w:w}; },
  function(){ const n=rint(2,15); const cube=n*n*n; const ans='True'; const w=['False','Only for positive','Not always']; return {question:{en:N('∛'+cube)+' = '+N(n)+'. This is because ∛(n³) = n.',hing:N('∛'+cube)+' = '+N(n)+'. Yeh isliye kyunki ∛(n³) = n.',hi:N('∛'+cube)+' = '+N(n)+'. यह इसलिए क्योंकि ∛(n³) = n.'},ans:ans,w:w}; },
  function(){ const n=rint(2,15); const sq=n*n; const ans='False'; const w=['True','Sometimes','For large n']; return {question:{en:N('√'+sq)+' = ±'+N(n)+'. (Is ± correct?)',hing:N('√'+sq)+' = ±'+N(n)+'. (Kya ± sahi hai?)',hi:N('√'+sq)+' = ±'+N(n)+'। (क्या ± सही है?)'},ans:ans,w:w}; },
  function(){ const n=rint(2,10); const ans='False'; const w=['True','Sometimes','For negative n']; return {question:{en:N('√(−'+n*n+')')+' is a real number.',hing:N('√(−'+n*n+')')+' ek real number hai.',hi:N('√(−'+n*n+')')+' एक वास्तविक संख्या है।'},ans:ans,w:w}; },
  function(){ const a=rint(2,10),b=rint(2,10); const ans='True'; const w=['False','Only for perfect cubes','Only for integers']; return {question:{en:N('∛(−'+a*a*a*b*b*b+')')+' = '+N(-(a*b))+'. (Real or not?)',hing:N('∛(−'+a*a*a*b*b*b+')')+' = '+N(-(a*b))+'. (Real ya nahi?)',hi:N('∛(−'+a*a*a*b*b*b+')')+' = '+N(-(a*b))+'. (वास्तविक या नहीं?)'},ans:ans,w:w}; },
],
sq_identify: [
  function(){ const sq=rint(5,30); const perfect=sq*sq; const near=pick([perfect+1,perfect+2,perfect-1>0?perfect-1:perfect+3]); const ans='Yes'; const w=['No','Sometimes','Only if even']; return {question:{en:'Is '+N(perfect)+' a perfect square?',hing:'Kya '+N(perfect)+' perfect square hai?',hi:'क्या '+N(perfect)+' पूर्ण वर्ग है?'},ans:ans,w:w}; },
  function(){ const non=pick([2,3,7,8,11,12]); const ans='No'; const w=['Yes','Sometimes','For large numbers']; return {question:{en:'Can '+N(non)+' be a perfect square?',hing:'Kya '+N(non)+' perfect square ho sakta hai?',hi:'क्या '+N(non)+' पूर्ण वर्ग हो सकता है?'},ans:ans,w:w}; },
  function(){ const n=rint(2,15); const sq=n*n; const non=sq+1; const ans=String(sq); const w=[String(non),String(sq+2),String(sq-1>0?sq-1:sq+3)]; return {question:{en:'Between '+N(sq)+' and '+N(non)+', which is a perfect square?',hing:N(sq)+' aur '+N(non)+' mein se kaunsa perfect square hai?',hi:N(sq)+' और '+N(non)+' में से कौन सा पूर्ण वर्ग है?'},ans:ans,w:w}; },
  function(){ const a=rint(2,10); const ps=a*a; const ns=ps+1; const ans='Not a perfect square'; const w=['Perfect square','Depends on a','Only for even a']; return {question:{en:'Is '+N(ns)+' a perfect square?',hing:'Kya '+N(ns)+' perfect square hai?',hi:'क्या '+N(ns)+' पूर्ण वर्ग है?'},ans:ans,w:w}; },
  function(){ const n=rint(2,20); const sq=n*n; const next=(n+1)*(n+1); const ans=String(next); const w=[String(sq),String(next+1),String(sq-1>0?sq-1:sq+3)]; return {question:{en:'Next perfect square after '+N(sq)+'?',hing:N(sq)+' ke baad next perfect square?',hi:N(sq)+' के बाद अगला पूर्ण वर्ग?'},ans:ans,w:w}; },
],
cb_identify: [
  function(){ const cb=rint(3,10); const perfect=cb*cb*cb; const ans='Yes'; const w=['No','Sometimes','Only if odd']; return {question:{en:'Is '+N(perfect)+' a perfect cube?',hing:'Kya '+N(perfect)+' perfect cube hai?',hi:'क्या '+N(perfect)+' पूर्ण घन है?'},ans:ans,w:w}; },
  function(){ const non=pick([2,3,4,5,7,9,10]); const ans='No'; const w=['Yes','Sometimes','For large numbers']; return {question:{en:'Can '+N(non)+' be a perfect cube?',hing:'Kya '+N(non)+' perfect cube ho sakta hai?',hi:'क्या '+N(non)+' पूर्ण घन हो सकता है?'},ans:ans,w:w}; },
  function(){ const n=rint(2,10); const cube=n*n*n; const non=cube+1; const ans=String(cube); const w=[String(non),String(cube+2),String(cube-1>0?cube-1:cube+3)]; return {question:{en:'Between '+N(cube)+' and '+N(non)+', which is a perfect cube?',hing:N(cube)+' aur '+N(non)+' mein se kaunsa perfect cube hai?',hi:N(cube)+' और '+N(non)+' में से कौन सा पूर्ण घन है?'},ans:ans,w:w}; },
  function(){ const n=rint(2,8); const cube=n*n*n; const next=(n+1)*(n+1)*(n+1); const ans=String(next); const w=[String(cube),String(next+1),String(cube-1>0?cube-1:cube+3)]; return {question:{en:'Next perfect cube after '+N(cube)+'?',hing:N(cube)+' ke baad next perfect cube?',hi:N(cube)+' के बाद अगला पूर्ण घन?'},ans:ans,w:w}; },
  function(){ const n=rint(2,8); const cube=n*n*n; const ans='Not a perfect cube'; const w=['Perfect cube','Depends','Sometimes']; return {question:{en:'Is '+N(cube+1)+' a perfect cube?',hing:'Kya '+N(cube+1)+' perfect cube hai?',hi:'क्या '+N(cube+1)+' पूर्ण घन है?'},ans:ans,w:w}; },
],
sq_unit_digit: [
  function(){ const n=rint(2,20); const sq=n*n; const ans=sq%10; const w=[(ans+1)%10,(ans+2)%10,(ans-1+10)%10]; return {question:{en:'What is the unit digit of '+N(n+'²')+'?',hing:N(n+'²')+' ka unit digit kya hai?',hi:N(n+'²')+' का इकाई अंक क्या है?'},ans:String(ans),w:w.map(String)}; },
  function(){ const n=rint(2,15); const cube=n*n*n; const ans=cube%10; const w=[(ans+1)%10,(ans+2)%10,(ans-1+10)%10]; return {question:{en:'What is the unit digit of '+N(n+'³')+'?',hing:N(n+'³')+' ka unit digit kya hai?',hi:N(n+'³')+' का इकाई अंक क्या है?'},ans:String(ans),w:w.map(String)}; },
  function(){ const end=pick([0,1,4,5,6,9]); const valid=[]; for(let d=0;d<=9;d++){if((d*d)%10===end)valid.push(d);} const ans=valid[0]; const invalid=[0,1,2,3,4,5,6,7,8,9].filter(d=>!valid.includes(d)); const w=[invalid[0]||0,invalid[1]||2,invalid[2]||3]; return {question:{en:'If a square ends in '+N(end)+', the root can end with:',hing:'Agar square '+N(end)+' par khatam, to root kis par khatam ho sakta?',hi:'यदि वर्ग '+N(end)+' पर समाप्त, तो मूल किस पर समाप्त हो सकता है?'},ans:String(ans),w:w.map(String)}; },
  function(){ const badEnd=pick([2,3,7,8]); const ans='Cannot end with '+badEnd; const w=['Can end with '+badEnd,'Only for large numbers','Sometimes possible']; return {question:{en:'A perfect square can end with digit '+N(badEnd)+'. True?',hing:'Perfect square digit '+N(badEnd)+' par khatam ho sakta hai. Sahi?',hi:'पूर्ण वर्ग अंक '+N(badEnd)+' पर समाप्त हो सकता है। सत्य?'},ans:ans,w:w}; },
  function(){ const a=rint(2,15),b=rint(2,15); const sa=a*a,sb=b*b; const ans=(sa+sb)%10; const w=[(ans+1)%10,(ans+2)%10,(ans-1+10)%10]; return {question:{en:'Unit digit of '+N(a+'²')+' + '+N(b+'²')+'?',hing:N(a+'²')+' + '+N(b+'²')+' ka unit digit?',hi:N(a+'²')+' + '+N(b+'²')+' का इकाई अंक?'},ans:String(ans),w:w.map(String)}; },
],
sq_prop_check: [
  function(){ const bad=pick([2,3,7,8]); const ans=String(bad); const good=[0,1,4,5,6,9].filter(d=>d!==bad); const w=shuffle(good).slice(0,3).map(String); return {question:{en:'Which digit can NEVER be at unit place of a perfect square?',hing:'Perfect square ke unit place mein kaunsa digit kabhi nahi aata?',hi:'पूर्ण वर्ग के इकाई स्थान पर कौन सा अंक कभी नहीं आ सकता?'},ans:ans,w:w}; },
  function(){ const good=pick([0,1,4,5,6,9]); const ans=String(good); const w=shuffle([2,3,7,8]).slice(0,3).map(String); return {question:{en:'Which digit CAN be at unit place of a perfect square?',hing:'Perfect square ke unit place mein kaunsa digit aa sakta hai?',hi:'पूर्ण वर्ग के इकाई स्थान पर कौन सा अंक आ सकता है?'},ans:ans,w:w}; },
  function(){ const n=rint(2,15); const ans=2*n; const w=[n,2*n+1,n+1]; return {question:{en:'Non-square numbers between '+N(n+'²')+' and '+N((n+1)+'²')+':',hing:N(n+'²')+' aur '+N((n+1)+'²')+' ke beech non-square numbers:',hi:N(n+'²')+' और '+N((n+1)+'²')+' के बीच अपूर्णवर्ग संख्याएँ:'},ans:String(ans),w:w.map(String)}; },
  function(){ const ans='At least 2'; const w=['1','3','Can be 1']; return {question:{en:'If a perfect square ends in 0, how many zeros at the end?',hing:'Agar perfect square 0 par khatam, to end mein kitne zeros?',hi:'यदि पूर्ण वर्ग 0 पर समाप्त, तो अंत में कितने शून्य?'},ans:ans,w:w}; },
  function(){ const n=rint(2,15); const sq=n*n; const nsq=(n+1)*(n+1); const ans=2*n+1; const w=[2*n,2*n+2,n+1]; return {question:{en:'How many numbers between '+N(sq)+' and '+N(nsq)+'?',hing:N(sq)+' aur '+N(nsq)+' ke beech kitne numbers?',hi:N(sq)+' और '+N(nsq)+' के बीच कितनी संख्याएँ?'},ans:String(ans),w:w.map(String)}; },
],
sq_concept_trap: [
  function(){ const a=rint(2,15),b=rint(2,15); const ans='False'; const w=['True','Only for a=b','For small numbers']; return {question:{en:'Is '+N('√('+a+'+'+b+')')+' = '+N('√'+a)+' + '+N('√'+b)+'?',hing:'Kya '+N('√('+a+'+'+b+')')+' = '+N('√'+a)+' + '+N('√'+b)+'?',hi:'क्या '+N('√('+a+'+'+b+')')+' = '+N('√'+a)+' + '+N('√'+b)+' ?'},ans:ans,w:w}; },
  function(){ const a=rint(2,12),b=rint(2,12); const ans='True'; const w=['False','Only for primes','Only for even numbers']; return {question:{en:'Is '+N('√('+a*b+')')+' = '+N('√'+a)+' × '+N('√'+b)+'? (a,b > 0)',hing:'Kya '+N('√('+a*b+')')+' = '+N('√'+a)+' × '+N('√'+b)+'? (a,b > 0)',hi:'क्या '+N('√('+a*b+')')+' = '+N('√'+a)+' × '+N('√'+b)+' ? (a,b > 0)'},ans:ans,w:w}; },
  function(){ const a=rint(2,10),b=rint(2,10); const ans='False'; const w=['True','Only for a=b','For perfect cubes']; return {question:{en:'Is '+N('∛('+a+'+'+b+')')+' = '+N('∛'+a)+' + '+N('∛'+b)+'?',hing:'Kya '+N('∛('+a+'+'+b+')')+' = '+N('∛'+a)+' + '+N('∛'+b)+'?',hi:'क्या '+N('∛('+a+'+'+b+')')+' = '+N('∛'+a)+' + '+N('∛'+b)+' ?'},ans:ans,w:w}; },
  function(){ const ans='Root of negative is real'; const w=['√(ab)=√a×√b','√(a/b)=√a/√b','√(a²)=|a|']; return {question:{en:'Which works for cube roots but NOT square roots?',hing:'Kaunsi property cube root mein kaam karti hai par square root mein nahi?',hi:'कौन सा गुण घनमूल में काम करता है पर वर्गमूल में नहीं?'},ans:ans,w:w}; },
  function(){ const a=rint(2,10),b=rint(2,10); const ans='True'; const w=['False','Only for perfect squares','Only when a=b']; return {question:{en:'Is '+N('√('+a+'/'+b+')')+' = '+N('√'+a)+' / '+N('√'+b)+'? (a,b > 0)',hing:'Kya '+N('√('+a+'/'+b+')')+' = '+N('√'+a)+' / '+N('√'+b)+'? (a,b > 0)',hi:'क्या '+N('√('+a+'/'+b+')')+' = '+N('√'+a)+' / '+N('√'+b)+' ? (a,b > 0)'},ans:ans,w:w}; },
],
sq_formula_rule: [
  function(){ const n=rint(2,6); const lo=Math.pow(10,2*(n-1)); const hi=Math.pow(10,2*n)-1; const num=rint(lo,Math.min(hi,lo+9999)); const digits=Math.ceil(n/2); const ans=String(digits); const w=shuffle([digits-1,digits+1,digits+2].filter(d=>d>0)).slice(0,3).map(String); while(w.length<3)w.push(String(digits+w.length)); return {question:{en:N(n)+'-digit number: how many digits in its square root?',hing:N(n)+'-digit number ke square root mein kitne digits?',hi:N(n)+'-अंकीय संख्या के वर्गमूल में कितने अंक?'},ans:ans,w:w}; },
  function(){ const n=rint(2,5); const lo=Math.pow(10,3*(n-1)); const hi=Math.pow(10,3*n)-1; const num=rint(lo,Math.min(hi,lo+9999)); const digits=Math.ceil(n/3); const ans=String(digits); const w=shuffle([digits-1,digits+1,digits+2].filter(d=>d>0)).slice(0,3).map(String); while(w.length<3)w.push(String(digits+w.length)); return {question:{en:N(n)+'-digit number: how many digits in its cube root?',hing:N(n)+'-digit number ke cube root mein kitne digits?',hi:N(n)+'-अंकीय संख्या के घनमूल में कितने अंक?'},ans:ans,w:w}; },
  function(){ const root=rint(4,99); const num=root*root; const digits=String(root).length; const ans=String(digits); const w=shuffle([digits-1,digits+1,digits+2].filter(d=>d>0)).slice(0,3).map(String); while(w.length<3)w.push(String(digits+w.length)); return {question:{en:N('√'+num)+' has how many digits?',hing:N('√'+num)+' mein kitne digits?',hi:N('√'+num)+' में कितने अंक?'},ans:ans,w:w}; },
  function(){ const root=rint(2,20); const num=root*root*root; const digits=String(root).length; const ans=String(digits); const w=shuffle([digits-1,digits+1,digits+2].filter(d=>d>0)).slice(0,3).map(String); while(w.length<3)w.push(String(digits+w.length)); return {question:{en:N('∛'+num)+' has how many digits?',hing:N('∛'+num)+' mein kitne digits?',hi:N('∛'+num)+' में कितने अंक?'},ans:ans,w:w}; },
  function(){ const n=rint(3,7); const ans=2*n-1; const w=[2*n,2*n+1,n]; return {question:{en:'Number of integers between '+N('√'+Math.pow(10,2*(n-1)))+' and '+N('√'+Math.pow(10,2*n))+':',hing:N('√'+Math.pow(10,2*(n-1)))+' aur '+N('√'+Math.pow(10,2*n))+' ke beech kitne integers:',hi:N('√'+Math.pow(10,2*(n-1)))+' और '+N('√'+Math.pow(10,2*n))+' के बीच कितने पूर्णांक:'},ans:String(ans),w:w.map(String)}; },
],

// ═══════════════════ 12th+ LEVEL ═══════════════════

'sq_pythagoras': [
	// V2: Both legs → perimeter of right triangle
	function() {
		const triples = [[3,4,5],[5,12,13],[6,8,10],[9,12,15]];
		const [a, b, c] = pick(triples);
		const P = a + b + c;
		const sol = buildSqPythagorasV2Solution(a, b, c, P);
		return {
			question: {
				en: `A right triangle has legs ${a} cm and ${b} cm. Find its perimeter.`,
				hing: `Ek right triangle ke legs ${a} cm aur ${b} cm hain. Iski perimeter kya hogi?`,
				hi: `एक समकोण त्रिभुज के पाद ${a} cm और ${b} cm हैं। इसकी परिमिति ज्ञात करो।`
			},
			ans: String(P),
			w: shuffle([String(a+b), String(a*b), String(c*2), String(P+1)]).slice(0, 3),
			solution: sol
		};
	},
	// V3: 3 sides given → check if right triangle (yes/no)
	function() {
		const isRight = rint(0, 1) === 1;
		let a, b, c;
		if (isRight) {
			[a, b, c] = pick([[3,4,5],[5,12,13],[8,15,17],[6,8,10],[9,12,15]]);
		} else {
			[a, b, c] = pick([[4,5,6],[5,6,8],[6,7,9],[7,8,10]]);
		}
		const sol = buildSqPythagorasV3Solution(a, b, c, isRight);
		return {
			question: {
				en: `Is a triangle with sides ${a} cm, ${b} cm, ${c} cm a right-angled triangle?`,
				hing: `Kya ${a} cm, ${b} cm, ${c} cm sides wala triangle right-angled hai?`,
				hi: `क्या ${a} cm, ${b} cm, ${c} cm भुजाओं वाला त्रिभुज समकोण त्रिभुज है?`
			},
			ans: isRight ? 'Yes' : 'No',
			w: [isRight ? 'No' : 'Yes', 'Cannot determine', 'Only if scaled'],
			solution: sol
		};
	},
	// V4: Rectangle length+width → diagonal
	function() {
		const pairs = [[3,4,5],[5,12,13],[8,15,17],[6,8,10],[9,12,15]];
		const [l, w, d] = pick(pairs);
		const sol = buildSqPythagorasV4Solution(l, w, d);
		return {
			question: {
				en: `A rectangle has length ${l} cm and width ${w} cm. Find the length of its diagonal.`,
				hing: `Ek rectangle ki length ${l} cm aur width ${w} cm hai. Iska diagonal kya hoga?`,
				hi: `एक आयत की लंबाई ${l} cm और चौड़ाई ${w} cm है। इसके विकर्ण की लंबाई ज्ञात करो।`
			},
			ans: String(d),
			w: shuffle([String(l+w), String(d-1), String(d+1), String(Math.round(Math.sqrt(l*l-w*w)))]).slice(0, 3),
			solution: sol
		};
	},
	// V5: Both legs → hypotenuse SQUARED (no root extraction — trap variant)
	function() {
		const a = rint(3, 12), b = rint(3, 12);
		const cSq = a*a + b*b;
		const sol = buildSqPythagorasV5Solution(a, b, cSq);
		return {
			question: {
				en: `In a right triangle, the legs are ${a} cm and ${b} cm. Find the value of (hypotenuse)².`,
				hing: `Ek right triangle ke legs ${a} cm aur ${b} cm hain. (Hypotenuse)² ki value kya hogi?`,
				hi: `एक समकोण त्रिभुज के पाद ${a} cm और ${b} cm हैं। (कर्ण)² का मान ज्ञात करो।`
			},
			ans: String(cSq),
			w: shuffle([String(a*a), String(b*b), String(cSq-1), String(cSq+1), String((a+b)*(a+b))]).slice(0, 3),
			solution: sol
		};
	}
],
sq_mixed_num: [
  // V1: Root of whole number that's a mixed fraction equivalent
  function(){ const p=rint(3,12),q=rint(2,8); const g=gcd(p,q); const ps=p/g,qs=q/g; const num=ps*ps,den=qs*qs; const whole=Math.floor(num/den),rem=num%den; const ansWhole=whole,ansRem=rem,ansDen=den; let ansStr; if(rem===0)ansStr=String(whole); else ansStr=whole+' '+rem+'/'+den; const w1=whole>0?(whole-1)+' '+(rem+den)+'/'+den:ansStr; const w2=rem===0?(whole+1)+' 1/'+den:whole+' '+(rem+1)+'/'+den; const w3=(whole+1)+' '+rem+'/'+den; return {question:{en:N('√('+whole+(rem>0?' '+rem+'/'+den:'')+')')+' = ?',hing:N('√('+whole+(rem>0?' '+rem+'/'+den:'')+')')+' = ?',hi:N('√('+whole+(rem>0?' '+rem+'/'+den:'')+')')+' = ?'},ans:ansStr,w:[w1,w2,w3]}; },
  // V2: Convert root result to decimal
  function(){ const p=rint(2,10),q=rint(2,6); const g=gcd(p,q); const ps=p/g,qs=q/g; const ans=(ps/qs).toFixed(2); const w=[(ps/qs+0.1).toFixed(2),(ps/qs-0.1>0?ps/qs-0.1:ps/qs+0.2).toFixed(2),(ps/qs+0.2).toFixed(2)]; return {question:{en:N('√('+(ps*ps)+'/'+(qs*qs)+')')+' as decimal = ?',hing:N('√('+(ps*ps)+'/'+(qs*qs)+')')+' decimal mein = ?',hi:N('√('+(ps*ps)+'/'+(qs*qs)+')')+' दशमलव में = ?'},ans:ans,w:w}; },
  // V3: Which mixed number has this root?
  function(){ const r=rint(2,8); const num=r*r; const whole=Math.floor(num/4),rem=num%4; let qDisplay; if(rem===0)qDisplay=String(num/4); else qDisplay=whole+' '+rem+'/4'; const w=[]; for(let i=0;i<3;i++){const wr=r+i+1;const wn=wr*wr;const wh=Math.floor(wn/4),wrem=wn%4;w.push(wrem===0?String(wn/4):wh+' '+wrem+'/4');} return {question:{en:'Which mixed number has '+N('√x')+' = '+N(r/2)+'?',hing:'Kis mixed number ka '+N('√x')+' = '+N(r/2)+' hai?',hi:'किस मिश्र संख्या का '+N('√x')+' = '+N(r/2)+' है?'},ans:qDisplay,w:w}; },
  // V4: Root of sum of mixed numbers
  function(){ const a=rint(1,5),b=rint(1,5); const total=a+b; const sq=total*total; const whole=Math.floor(sq/4),rem=sq%4; let ansStr; if(rem===0)ansStr=String(sq/4); else ansStr=whole+' '+rem+'/4'; const w=[ansStr+' + 1',String(total+1),total-1>0?String(total-1):String(total+2)]; return {question:{en:N('√('+(a>1?a+' 1/4':'1/4')+' + '+(b>1?b+' 1/4':'1/4')+')')+' = ?',hing:N('√('+(a>1?a+' 1/4':'1/4')+' + '+(b>1?b+' 1/4':'1/4')+')')+' = ?',hi:N('√('+(a>1?a+' 1/4':'1/4')+' + '+(b>1?b+' 1/4':'1/4')+')')+' = ?'},ans:ansStr,w:w}; },
  // V5: Compare roots of two mixed numbers
  function(){ const p1=rint(2,8),q1=rint(2,6),p2=rint(2,8),q2=rint(2,6); const g1=gcd(p1,q1),g2=gcd(p2,q2); const v1=(p1/g1)/(q1/g1),v2=(p2/g2)/(q2/g2); if(Math.abs(v1-v2)<0.01)return this.generate(); const ans=v1>v2?N('√('+(p1/g1)*(p1/g1)+'/'+(q1/g1)*(q1/g1)+')'):N('√('+(p2/g2)*(p2/g2)+'/'+(q2/g2)*(q2/g2)+')'); const bigger=v1>v2?p1/g1:p2/g2; return {question:{en:'Greater: '+N('√('+(p1/g1)*(p1/g1)+'/'+(q1/g1)*(q1/g1)+')')+' or '+N('√('+(p2/g2)*(p2/g2)+'/'+(q2/g2)*(q2/g2)+')')+'?',hing:'Bada kaun: '+N('√('+(p1/g1)*(p1/g1)+'/'+(q1/g1)*(q1/g1)+')')+' ya '+N('√('+(p2/g2)*(p2/g2)+'/'+(q2/g2)*(q2/g2)+')')+'?',hi:'बड़ा: '+N('√('+(p1/g1)*(p1/g1)+'/'+(q1/g1)*(q1/g1)+')')+' या '+N('√('+(p2/g2)*(p2/g2)+'/'+(q2/g2)*(q2/g2)+')')+'?'},ans:ans,w:['Equal','Cannot determine',v1<=v2?N('√('+(p1/g1)*(p1/g1)+'/'+(q1/g1)*(q1/g1)+')'):N('√('+(p2/g2)*(p2/g2)+'/'+(q2/g2)*(q2/g2)+')')]}; },
],
sq_diagonal: [
  // V1: Diagonal of rectangle
  function(){ const l=rint(3,20),w=rint(3,15); const dsq=l*l+w*w; const s=Math.round(Math.sqrt(dsq)); if(s*s!==dsq)return this.generate(); const wrongs=[s+1,s-1>0?s-1:s+2,l+w]; return {question:{en:'Rectangle '+N(l)+' × '+N(w)+' cm. Diagonal?',hing:'Rectangle '+N(l)+' × '+N(w)+' cm. Diagonal?',hi:'आयत '+N(l)+' × '+N(w)+' cm। विकर्ण?'},ans:s+' cm',w:wrongs.map(x=>x+' cm')}; },
  // V2: Perimeter from diagonal
  function(){ const s=rint(3,15); const d=s*Math.SQRT2; const perim=4*s; const w=[perim+4,perim-4>0?perim-4:perim+8,2*s]; return {question:{en:'Square diagonal = '+N(s)+'√2 cm. Perimeter?',hing:'Square diagonal '+N(s)+'√2 cm. Perimeter?',hi:'वर्ग विकर्ण = '+N(s)+'√2 cm। परिमाप?'},ans:perim+' cm',w:w.map(x=>x+' cm')}; },
  // V3: Area from diagonal
  function(){ const s=rint(3,20); const dSq=2*s*s; const area=s*s; const w=[area+4,area-4>0?area-4:area+8,s*s*2]; return {question:{en:'Square diagonal = '+N(s)+'√2 cm. Area?',hing:'Square diagonal '+N(s)+'√2 cm. Area?',hi:'वर्ग विकर्ण = '+N(s)+'√2 cm। क्षेत्रफल?'},ans:area+' cm²',w:w.map(x=>x+' cm²')}; },
  // V4: Ratio of diagonal to side
  function(){ const s=rint(2,15); const ans='√2'; const w=['√3','2','√2/2']; return {question:{en:'Square: ratio of diagonal to side?',hing:'Square: diagonal aur side ka ratio?',hi:'वर्ग: विकर्ण और भुजा का अनुपात?'},ans:ans,w:w}; },
  // V5: Diagonal of rhombus from side
  function(){ const d1=rint(4,20),d2=rint(4,20); const dsq=(d1*d1+d2*d2)/4; const s=Math.round(Math.sqrt(dsq)); if(s*s!==dsq)return this.generate(); const wrongs=[s+1,s-1>0?s-1:s+2,(d1+d2)/2|0]; return {question:{en:'Rhombus diagonals: '+N(d1)+' cm, '+N(d2)+' cm. Side?',hing:'Rhombus ke diagonals: '+N(d1)+' cm, '+N(d2)+' cm. Side?',hi:'समचतुर्भुज विकर्ण: '+N(d1)+' cm, '+N(d2)+' cm। भुजा?'},ans:s+' cm',w:wrongs.map(x=>x+' cm')}; },
],
sq_fence_area: [
  // V1: Given cost and rate, find side
  function(){ const s=rint(10,40); const perim=4*s; const rate=rint(5,20); const cost=perim*rate; const w=[s+2,s-2>0?s-2:s+4,cost/4/rate+1|0]; return {question:{en:'Fencing a square field costs ₹'+N(cost)+' at ₹'+N(rate)+'/m. Side length?',hing:'Square field ki fencing ₹'+N(cost)+' @ ₹'+N(rate)+'/m. Side?',hi:'वर्गाकार खेत की बाड़ ₹'+N(cost)+' @ ₹'+N(rate)+'/m। भुजा?'},ans:s+' m',w:w.map(x=>x+' m')}; },
  // V2: Area from perimeter cost
  function(){ const l=rint(10,30),b=rint(5,25); const perim=2*(l+b); const rate=rint(10,30); const cost=perim*rate; const area=l*b; const w=[area+50,area-50>0?area-50:area+100,(l+1)*(b+1)]; return {question:{en:'Rectangular field fencing: ₹'+N(cost)+' at ₹'+N(rate)+'/m. Length='+N(l)+'m. Area?',hing:'Rectangular field fencing: ₹'+N(cost)+' @ ₹'+N(rate)+'/m. Length='+N(l)+'m. Area?',hi:'आयताकार खेत बाड़: ₹'+N(cost)+' @ ₹'+N(rate)+'/m। लंबाई='+N(l)+'m। क्षेत्रफल?'},ans:area+' m²',w:w.map(x=>x+' m²')}; },
  // V3: Double fencing cost
  function(){ const s=rint(5,25); const perim=4*s; const rate=rint(5,15); const cost=2*perim*rate; const area=s*s; const w=[2*area,area+100,area-100>0?area-100:area+200]; return {question:{en:'Double fencing a square of side '+N(s)+'m at ₹'+N(rate)+'/m. Cost? Then area?',hing:'Square side '+N(s)+'m ka double fencing @ ₹'+N(rate)+'/m. Cost? Area?',hi:'वर्ग भुजा '+N(s)+'m की दोहरी बाड़ @ ₹'+N(rate)+'/m। खर्चा? क्षेत्रफल?'},ans:area+' m²',w:w.map(x=>x+' m²')}; },
  // V4: Perimeter from area and rate
  function(){ const s=rint(8,30); const area=s*s; const rate=rint(5,20); const cost=4*s*rate; const perim=4*s; const w=[perim+8,perim-8>0?perim-8:perim+16,2*perim]; return {question:{en:'Square area = '+N(area)+' m². Fencing at ₹'+N(rate)+'/m. Total cost?',hing:'Square area '+N(area)+' m². Fencing @ ₹'+N(rate)+'/m. Total kharcha?',hi:'वर्ग क्षेत्रफल = '+N(area)+' m²। बाड़ @ ₹'+N(rate)+'/m। कुल खर्चा?'},ans:'₹'+cost,w:['₹'+(cost+100),'₹'+(cost-100>0?cost-100:cost+200),'₹'+(2*cost)]}; },
  // V5: Compare fencing costs
  function(){ const s1=rint(5,15),s2=rint(5,15); if(s1===s2)return this.generate(); const rate=rint(5,15); const c1=4*s1*rate,c2=4*s2*rate; const diff=Math.abs(c1-c2); const bigger=s1>s2?'first':'second'; const w=[diff+rate*4,diff-rate*4>0?diff-rate*4:diff+rate*8,2*diff]; return {question:{en:'Two square fields: side '+N(s1)+'m and '+N(s2)+'m. Fencing ₹'+N(rate)+'/m each. Difference in cost?',hing:'Do square fields: side '+N(s1)+'m aur '+N(s2)+'m. Fencing ₹'+N(rate)+'/m. Kharche mein farq?',hi:'दो वर्गाकार खेत: भुजा '+N(s1)+'m और '+N(s2)+'m। बाड़ ₹'+N(rate)+'/m। खर्चे में अंतर?'},ans:'₹'+diff,w:w.map(x=>'₹'+x)}; },
],
sq_rep_dec: [
  // V1: Root of 0.0xxx pattern
  function(){ const a=rint(1,9); const sq=a*a; const dec=(sq/10000).toFixed(4); const ans=a/100; const w=[(a+1)/100,(a>1?(a-1)/100:(a+2)/100),(a+2)/100]; return {question:{en:N('√'+dec)+' = ?',hing:N('√'+dec)+' = ?',hi:N('√'+dec)+' = ?'},ans:String(ans),w:w.map(String)}; },
  // V2: Root of number like 2.25
  function(){ const a=rint(1,9); const sq=a*a; const dec=sq/4; const ans=a/2; const w=[(a+1)/2,(a>1?(a-1)/2:(a+2)/2),(a+2)/2]; return {question:{en:N('√'+dec)+' = ?',hing:N('√'+dec)+' = ?',hi:N('√'+dec)+' = ?'},ans:String(ans),w:w.map(String)}; },
  // V3: Root of 0.xxx repeating\n=> fraction
  function(){ const a=rint(1,6); const sq=a*a; const numStr=String(sq).padStart(2,'0'); const ans=a/3; const w=[(a+1)/3,(a>1?(a-1)/3:(a+2)/3),a/9]; return {question:{en:N('√(0.'+numStr+numStr+numStr+'...)')+' = ?',hing:N('√(0.'+numStr+numStr+numStr+'...)')+' = ?',hi:N('√(0.'+numStr+numStr+numStr+'...)')+' = ?'},ans:String(ans),w:w.map(String)}; },
  // V4: Which decimal has this root?
  function(){ const a=rint(1,9); const sq=a*a; const dec=(sq/100).toFixed(2); const wDec1=((a+1)*(a+1)/100).toFixed(2),wDec2=((a>1?(a-1):(a+2))*(a>1?a-1:a+2)/100).toFixed(2),wDec3=((a+2)*(a+2)/100).toFixed(2); return {question:{en:'Which decimal has '+N('√x')+' = '+N(a/10)+'?',hing:'Kis decimal ka '+N('√x')+' = '+N(a/10)+'?',hi:'किस दशमलव का '+N('√x')+' = '+N(a/10)+'?'},ans:dec,w:[wDec1,wDec2,wDec3]}; },
  // V5: Root of decimal sum
  function(){ const a=rint(1,6),b=rint(1,6); const dA=(a*a/100).toFixed(2),dB=(b*b/100).toFixed(2); const ans=(a+b)/10; const w=[(a+b+1)/10,(a+b-1)/10>0?(a+b-1)/10:(a+b+2)/10,(a+b+2)/10]; return {question:{en:N('√'+dA)+' + '+N('√'+dB)+' = ?',hing:N('√'+dA)+' + '+N('√'+dB)+' = ?',hi:N('√'+dA)+' + '+N('√'+dB)+' = ?'},ans:String(ans),w:w.map(String)}; },
],
cb_unit_digit: [
  // V1: Unit digit of cube
  function(){ const n=rint(2,25); const cb=n*n*n; const ans=cb%10; const w=[(ans+1)%10,(ans+2)%10,(ans-1+10)%10]; return {question:{en:'Unit digit of '+N(n+'³')+' is:',hing:N(n+'³')+' ka unit digit:',hi:N(n+'³')+' का इकाई अंक:'},ans:String(ans),w:w.map(String)}; },
  // V2: Which number has cube ending in this digit?
  function(){ const d=pick([1,8,7,4,5,6,3,2,9,0]); const ansMap={1:1,8:2,7:3,4:4,5:5,6:6,3:7,2:8,9:9,0:10}; const ans=ansMap[d]; const wPool=[ans+1,ans-1>0?ans-1:ans+2,ans+2,ans+3]; const w=wPool.filter(x=>x>0&&x<=10&&x!==ans).slice(0,3); return {question:{en:'Which number\'s cube ends in '+N(d)+'?',hing:'Kis number ke cube ka last digit '+N(d)+' hai?',hi:'किस संख्या के घन का अंतिम अंक '+N(d)+' है?'},ans:String(ans),w:w.map(String)}; },
  // V3: Compare unit digits of square and cube
  function(){ const n=rint(2,15); const sqD=(n*n)%10, cbD=(n*n*n)%10; const ans=sqD===cbD?'Same':'Different'; const w=[sqD>cbD?'Same':'Different','Cannot determine','Depends on n']; return {question:{en:'Unit digit of '+N(n+'²')+' and '+N(n+'³')+': same or different?',hing:N(n+'²')+' aur '+N(n+'³')+' ka unit digit: same ya different?',hi:N(n+'²')+' और '+N(n+'³')+' का इकाई अंक: समान या भिन्न?'},ans:ans,w:w}; },
  // V4: Cube root unit digit from large cube
  function(){ const n=rint(11,30); const cb=n*n*n; const ans=n%10; const w=[(ans+1)%10,(ans+2)%10,(ans-1+10)%10]; return {question:{en:N('∛'+cb)+' ends with which digit?',hing:N('∛'+cb)+' kis digit par khatam?',hi:N('∛'+cb)+' किस अंक पर समाप्त?'},ans:String(ans),w:w.map(String)}; },
  // V5: Sum of unit digits
  function(){ const a=rint(2,10),b=rint(2,10); const da=(a*a*a)%10, db=(b*b*b)%10; const ans=(da+db)%10; const w=[(ans+1)%10,(ans+2)%10,(ans-1+10)%10]; return {question:{en:'Unit digit of '+N(a+'³ + '+b+'³')+':',hing:N(a+'³ + '+b+'³')+' ka unit digit:',hi:N(a+'³ + '+b+'³')+' का इकाई अंक:'},ans:String(ans),w:w.map(String)}; },
],
cb_quot: [
  // V1: Simplify fraction under cube root
  function(){ const a=rint(2,10),b=rint(2,6); const g=gcd(a,b); const ps=a/g,qs=b/g; const ans=ps/qs; if(ans!==Math.floor(ans))return this.generate(); const w=[ans+1,ans-1>0?ans-1:ans+2,ans+2]; return {question:{en:N('∛('+ps*ps*ps+'/'+qs*qs*qs+')')+' = ?',hing:N('∛('+ps*ps*ps+'/'+qs*qs*qs+')')+' = ?',hi:N('∛('+ps*ps*ps+'/'+qs*qs*qs+')')+' = ?'},ans:String(ans),w:w.map(String)}; },
  // V2: Product of two cube root quotients
  function(){ const a=rint(2,6),b=rint(2,6); const ans=a*b; const w=[ans+1,ans-1>0?ans-1:ans+2,a+b]; return {question:{en:N('∛'+a*a*a)+'/'+N('∛'+a)+' × '+N('∛'+b*b*b)+'/'+N('∛'+b)+' = ?',hing:N('∛'+a*a*a)+'/'+N('∛'+a)+' × '+N('∛'+b*b*b)+'/'+N('∛'+b)+' = ?',hi:N('∛'+a*a*a)+'/'+N('∛'+a)+' × '+N('∛'+b*b*b)+'/'+N('∛'+b)+' = ?'},ans:String(ans),w:w.map(String)}; },
  // V3: Reverse — given quotient, find original numbers
  function(){ const a=rint(2,8),b=rint(2,4); const q=a/b; if(q!==Math.floor(q))return this.generate(); const ans=a*a*a; const w=[ans+1,ans-1>0?ans-1:ans+2,ans+b*b*b]; return {question:{en:N('∛x')+'/'+N('∛'+b*b*b)+' = '+N(q)+'. x = ?',hing:N('∛x')+'/'+N('∛'+b*b*b)+' = '+N(q)+'. x = ?',hi:N('∛x')+'/'+N('∛'+b*b*b)+' = '+N(q)+'। x = ?'},ans:String(ans),w:w.map(String)}; },
  // V4: Division under single cube root
  function(){ const a=rint(2,10),b=rint(2,6); if(a*a*a%(b*b*b)!==0)return this.generate(); const ans=a/b; const w=[ans+1,ans-1>0?ans-1:ans+2,ans+2]; return {question:{en:N('∛('+a*a*a+'/'+b*b*b+')')+' = ?',hing:N('∛('+a*a*a+'/'+b*b*b+')')+' = ?',hi:N('∛('+a*a*a+'/'+b*b*b+')')+' = ?'},ans:String(ans),w:w.map(String)}; },
  // V5: Verify quotient property
  function(){ const a=rint(2,8),b=rint(2,4); if(a%b!==0)return this.generate(); const q=a/b; const lhs=a*a*a; const rhs=b*b*b; const w=[q+1,q-1>0?q-1:q+2,q+2]; return {question:{en:'If '+N('∛'+lhs)+' / '+N('∛'+rhs)+' = '+N(q)+', verify. Answer?',hing:'Agar '+N('∛'+lhs)+' / '+N('∛'+rhs)+' = '+N(q)+', verify karo. Answer?',hi:'यदि '+N('∛'+lhs)+' / '+N('∛'+rhs)+' = '+N(q)+', सत्यापित करें। उत्तर?'},ans:String(q),w:w.map(String)}; },
],
cb_surface: [
  // V1: Lateral surface area ratio
  function(){ const s=rint(3,12); const tsa=6*s*s,lsa=4*s*s; const ans=tsa/lsa; const w=[ans+0.5,ans-0.5>0?ans-0.5:ans+1,2]; return {question:{en:'Cube: ratio of total to lateral surface area?',hing:'Cube: total aur lateral surface area ka ratio?',hi:'घन: कुल और पार्श्व पृष्ठीय क्षेत्रफल का अनुपात?'},ans:String(ans),w:w.map(String)}; },
  // V2: Volume from surface area
  function(){ const s=rint(3,10); const tsa=6*s*s; const vol=s*s*s; const w=[vol+10,vol-10>0?vol-10:vol+20,vol+30]; return {question:{en:'Cube total surface area = '+N(tsa)+' m². Volume?',hing:'Cube total surface area '+N(tsa)+' m². Volume?',hi:'घन कुल पृष्ठीय क्षेत्रफल = '+N(tsa)+' m²। आयतन?'},ans:vol+' m³',w:w.map(x=>x+' m³')}; },
  // V3: Edge from surface area
  function(){ const s=rint(3,12); const tsa=6*s*s; const w=[s+1,s-1>0?s-1:s+2,s+2]; return {question:{en:'Cube total surface area = '+N(tsa)+' m². Edge?',hing:'Cube total surface area '+N(tsa)+' m². Edge?',hi:'घन कुल पृष्ठीय क्षेत्रफल = '+N(tsa)+' m²। कोर?'},ans:s+' m',w:w.map(x=>x+' m')}; },
  // V4: Paint cost for cube
  function(){ const s=rint(3,10); const tsa=6*s*s; const rate=rint(5,20); const cost=tsa*rate; const w=[cost+100,cost-100>0?cost-100:cost+200,cost+50]; return {question:{en:'Paint a cube of edge '+N(s)+'m at ₹'+N(rate)+'/m². Cost?',hing:'Edge '+N(s)+'m ke cube ko ₹'+N(rate)+'/m² pe paint karo. Kharcha?',hi:'कोर '+N(s)+'m के घन को ₹'+N(rate)+'/m² पर पेंट करें। खर्चा?'},ans:'₹'+cost,w:['₹'+(cost+100),'₹'+(cost-100>0?cost-100:cost+200),'₹'+(cost+50)]}; },
  // V5: Compare two cubes
  function(){ const s1=rint(2,8),s2=rint(2,8); if(s1===s2)return this.generate(); const v1=s1*s1*s1,v2=s2*s2*s2; const ratio=v1/v2; const ans=s1+':'+s2; const w=[s1*s1+':'+s2*s2,s1*s1*s1+':'+s2*s2*s2,String(Math.round(ratio))+' : 1']; return {question:{en:'Two cubes: edge '+N(s1)+'m and '+N(s2)+'m. Ratio of volumes?',hing:'Do cubes: edge '+N(s1)+'m aur '+N(s2)+'m. Volume ka ratio?',hi:'दो घन: कोर '+N(s1)+'m और '+N(s2)+'m। आयतन का अनुपात?'},ans:s1*s1*s1+':'+s2*s2*s2,w:w}; },
],
cb_mixed: [
  // V1: Cube root of improper fraction
  function(){ const p=rint(2,8),q=rint(2,5); const g=gcd(p,q); const ps=p/g,qs=q/g; const num=ps*ps*ps,den=qs*qs*qs; const ans=ps+'/'+qs; const w=[(ps+1)+'/'+qs,(ps-1>0?ps-1:ps+2)+'/'+qs,(ps+2)+'/'+qs]; return {question:{en:N('∛('+num+'/'+den+')')+' = ?',hing:N('∛('+num+'/'+den+')')+' = ?',hi:N('∛('+num+'/'+den+')')+' = ?'},ans:ans,w:w}; },
  // V2: Cube root of whole + fraction\n=> decimal
  function(){ const p=rint(2,6),q=rint(2,4); const g=gcd(p,q); const ps=p/g,qs=q/g; const num=ps*ps*ps,den=qs*qs*qs; const ans=(ps/qs).toFixed(2); const w=[((ps+1)/qs).toFixed(2),((ps-1>0?ps-1:ps+2)/qs).toFixed(2),((ps+2)/qs).toFixed(2)]; return {question:{en:N('∛('+(ps*ps*ps)+'/'+(qs*qs*qs)+')')+' as decimal = ?',hing:N('∛('+(ps*ps*ps)+'/'+(qs*qs*qs)+')')+' decimal mein = ?',hi:N('∛('+(ps*ps*ps)+'/'+(qs*qs*qs)+')')+' दशमलव में = ?'},ans:ans,w:w}; },
  // V3: Which mixed number has this cube root?
  function(){ const r=rint(2,5); const num=r*r*r; const whole=Math.floor(num/8),rem=num%8; let qDisplay; if(rem===0)qDisplay=String(num/8); else qDisplay=whole+' '+rem+'/8'; const ans=r+'/2'; const w=[(r+1)+'/2',(r>1?(r-1):r+2)+'/2',(r+2)+'/2']; return {question:{en:'Which mixed number has '+N('∛x')+' = '+N(r+'/2')+'?',hing:'Kis mixed number ka '+N('∛x')+' = '+N(r+'/2')+'?',hi:'किस मिश्र संख्या का '+N('∛x')+' = '+N(r+'/2')+'?'},ans:qDisplay,w:w}; },
  // V4: Cube root of sum of mixed numbers
  function(){ const a=rint(1,4),b=rint(1,4); const total=a+b; const cube=total*total*total; const whole=Math.floor(cube/8),rem=cube%8; let ansStr; if(rem===0)ansStr=String(cube/8); else ansStr=whole+' '+rem+'/8'; const w=[ansStr+' 1/2',String(total+1),total-1>0?String(total-1):String(total+2)]; return {question:{en:N('∛('+(a>1?a+' 1/8':'1/8')+' + '+(b>1?b+' 1/8':'1/8')+')')+' = ?',hing:N('∛('+(a>1?a+' 1/8':'1/8')+' + '+(b>1?b+' 1/8':'1/8')+')')+' = ?',hi:N('∛('+(a>1?a+' 1/8':'1/8')+' + '+(b>1?b+' 1/8':'1/8')+')')+' = ?'},ans:ansStr,w:w}; },
  // V5: Compare cube roots of two mixed numbers
  function(){ const p1=rint(2,5),q1=2,p2=rint(2,5),q2=3; const v1=p1/q1,v2=p2/q2; if(Math.abs(v1-v2)<0.01)return this.generate(); const bigger=v1>v2?p1+'/'+q1:p2+'/'+q2; const bIdx=v1>v2?1:2; return {question:{en:'Greater: '+N('∛('+(p1*p1*p1)+'/'+(q1*q1*q1)+')')+' or '+N('∛('+(p2*p2*p2)+'/'+(q2*q2*q2)+')')+'?',hing:'Bada: '+N('∛('+(p1*p1*p1)+'/'+(q1*q1*q1)+')')+' ya '+N('∛('+(p2*p2*p2)+'/'+(q2*q2*q2)+')')+'?',hi:'बड़ा: '+N('∛('+(p1*p1*p1)+'/'+(q1*q1*q1)+')')+' या '+N('∛('+(p2*p2*p2)+'/'+(q2*q2*q2)+')')+'?'},ans:N('∛('+(v1>v2?p1*p1*p1:p2*p2*p2)+'/'+(v1>v2?q1*q1*q1:q2*q2*q2)+')'),w:['Equal',N('∛('+(v1<=v2?p1*p1*p1:p2*p2*p2)+'/'+(v1<=v2?q1*q1*q1:q2*q2*q2)+')'),'Cannot determine']}; },
],
mixed_simp: [
  // V1: Three operations mixed
  function(){ const a=rint(2,8),b=rint(2,6),c=rint(2,8); const sqA=a*a,cbB=b*b*b,sqC=c*c; const ans=a+b-c; const w=[a-b+c,a+b+c,Math.abs(a-b-c)]; return {question:{en:N('√'+sqA)+' + '+N('∛'+cbB)+' − '+N('√'+sqC)+' = ?',hing:N('√'+sqA)+' + '+N('∛'+cbB)+' − '+N('√'+sqC)+' = ?',hi:N('√'+sqA)+' + '+N('∛'+cbB)+' − '+N('√'+sqC)+' = ?'},ans:String(ans),w:w.map(String)}; },
  // V2: Product of square root and cube root
  function(){ const a=rint(2,6),b=rint(2,4); const sqA=a*a,cbB=b*b*b; const ans=a*b; const w=[a*b+2,a*b-1>0?a*b-1:a*b+3,a+b]; return {question:{en:N('√'+sqA)+' × '+N('∛'+cbB)+' = ?',hing:N('√'+sqA)+' × '+N('∛'+cbB)+' = ?',hi:N('√'+sqA)+' × '+N('∛'+cbB)+' = ?'},ans:String(ans),w:w.map(String)}; },
  // V3: Only cube roots mixed
  function(){ const a=rint(2,6),b=rint(2,6),c=rint(2,6); const cbA=a*a*a,cbB=b*b*b,cbC=c*c*c; const ans=a+b-c; const w=[a-b+c,a+b+c,Math.abs(a-b-c)]; return {question:{en:N('∛'+cbA)+' + '+N('∛'+cbB)+' − '+N('∛'+cbC)+' = ?',hing:N('∛'+cbA)+' + '+N('∛'+cbB)+' − '+N('∛'+cbC)+' = ?',hi:N('∛'+cbA)+' + '+N('∛'+cbB)+' − '+N('∛'+cbC)+' = ?'},ans:String(ans),w:w.map(String)}; },
  // V4: Square of a cube root
  function(){ const a=rint(2,8); const cbA=a*a*a; const ans=a*a; const w=[ans+1,ans-1>0?ans-1:ans+2,a]; return {question:{en:N('(∛'+cbA+')²')+' = ?',hing:N('(∛'+cbA+')²')+' = ?',hi:N('(∛'+cbA+')²')+' = ?'},ans:String(ans),w:w.map(String)}; },
  // V5: Cube of a square root
  function(){ const a=rint(2,6); const sqA=a*a; const ans=a*a*a; const w=[ans+1,ans-1>0?ans-1:ans+2,a]; return {question:{en:N('(√'+sqA+')³')+' = ?',hing:N('(√'+sqA+')³')+' = ?',hi:N('(√'+sqA+')³')+' = ?'},ans:String(ans),w:w.map(String)}; },
],
surd_simp: [
  // V1: Four surds combined
  function(){ const surdBases=[2,3,5,6,7]; const n=pick(surdBases); const k1=rint(1,6),k2=rint(1,6),k3=rint(1,6),k4=rint(1,6); const aVal=k1*k1*n,bVal=k2*k2*n,cVal=k3*k3*n,dVal=k4*k4*n; const resultCoeff=k1+k2-k3-k4; if(resultCoeff<=0)return this.generate(); let ansStr; if(resultCoeff===1)ansStr='√'+n; else ansStr=resultCoeff+'√'+n; const wCoeffs=[resultCoeff+1,resultCoeff-1>0?resultCoeff-1:resultCoeff+2,resultCoeff+2]; const wStrs=wCoeffs.map(c=>c===1?'√'+n:c+'√'+n); return {question:{en:N('√'+aVal)+' + '+N('√'+bVal)+' − '+N('√'+cVal)+' − '+N('√'+dVal)+' = ?',hing:N('√'+aVal)+' + '+N('√'+bVal)+' − '+N('√'+cVal)+' − '+N('√'+dVal)+' = ?',hi:N('√'+aVal)+' + '+N('√'+bVal)+' − '+N('√'+cVal)+' − '+N('√'+dVal)+' = ?'},ans:ansStr,w:wStrs}; },
  // V2: Surd multiplication then simplification
  function(){ const n=pick([2,3,5]); const k=rint(1,5); const val=k*k*n; const m=rint(1,5); const prod=val*m; const s=Math.round(Math.sqrt(prod)); const ks=Math.round(Math.sqrt(m)); if(ks*ks===m&&s*s===prod){let ansStr; if(ks*k===1)ansStr='√'+n; else ansStr=ks*k+'√'+n; const w=[(ks*k+1)+'√'+n,(ks*k-1>0?ks*k-1:ks*k+2)+'√'+n,(ks*k+2)+'√'+n]; return {question:{en:N('√'+val)+' × '+N('√'+m)+' = ?',hing:N('√'+val)+' × '+N('√'+m)+' = ?',hi:N('√'+val)+' × '+N('√'+m)+' = ?'},ans:ansStr,w:w};} return this.generate(); },
  // V3: Different bases — identify which simplifies
  function(){ const n=pick([2,3,5]); const vals=[n*4,n*9,n*7]; const ans='√'+n*4; const w=['√'+n*9,'√'+n*7,'None']; return {question:{en:'Which simplifies to integer: '+N('√'+vals[0])+', '+N('√'+vals[1])+' or '+N('√'+vals[2])+'?',hing:'Kaun integer banega: '+N('√'+vals[0])+', '+N('√'+vals[1])+' ya '+N('√'+vals[2])+'?',hi:'कौन पूर्णांक बनेगा: '+N('√'+vals[0])+', '+N('√'+vals[1])+' या '+N('√'+vals[2])+'?'},ans:'2√'+n,w:['3√'+n,'√'+(7*n),'All']}; },
  // V4: Rational coefficient outside surd
  function(){ const n=pick([2,3,5,7]); const num=rint(2,12)*n; const s=Math.round(Math.sqrt(num)); const k=Math.floor(Math.sqrt(num/n)); if(k*k*n===num){let ansStr; if(k===1)ansStr='√'+n; else ansStr=k+'√'+n; const w=[(k+1)+'√'+n,(k-1>0?k-1:k+2)+'√'+n,(k+2)+'√'+n]; return {question:{en:N('√'+num)+' = ?',hing:N('√'+num)+' = ?',hi:N('√'+num)+' = ?'},ans:ansStr,w:w};} return this.generate(); },
  // V5: Surd addition with different coefficients
  function(){ const n=pick([2,3,5]); const a=rint(1,5),b=rint(1,5),c=rint(1,a+b-1>0?a+b-1:1); const ansCoeff=a+b-c; if(ansCoeff<=0)return this.generate(); let ansStr; if(ansCoeff===1)ansStr='√'+n; else ansStr=ansCoeff+'√'+n; const w=[(ansCoeff+1)+'√'+n,(ansCoeff-1>0?ansCoeff-1:ansCoeff+2)+'√'+n,(a-b>0?a-b:b-a)+'√'+n]; return {question:{en:a+'√'+n+' + '+b+'√'+n+' − '+c+'√'+n+' = ?',hing:a+'√'+n+' + '+b+'√'+n+' − '+c+'√'+n+' = ?',hi:a+'√'+n+' + '+b+'√'+n+' − '+c+'√'+n+' = ?'},ans:ansStr,w:w}; },
],
cb_div: [
  // V1: Cube root division with simplification
  function(){ const a=rint(2,8),b=rint(2,6),c=rint(2,4); const n1=a*a*a*b*b; const n2=b*b*b; const ans=a; const w=[a+1,a-1>0?a-1:a+2,a+2]; return {question:{en:N('∛'+n1)+' ÷ '+N('∛'+n2)+' = ?',hing:N('∛'+n1)+' ÷ '+N('∛'+n2)+' = ?',hi:N('∛'+n1)+' ÷ '+N('∛'+n2)+' = ?'},ans:String(ans),w:w.map(String)}; },
  // V2: Multiple cube root divisions
  function(){ const a=rint(2,6),b=rint(2,4),c=rint(2,3); const ans=a*b/c; if(ans!==Math.floor(ans))return this.generate(); const w=[ans+1,ans-1>0?ans-1:ans+2,ans+2]; return {question:{en:N('∛'+a*a*a)+' × '+N('∛'+b*b*b)+' ÷ '+N('∛'+c*c*c)+' = ?',hing:N('∛'+a*a*a)+' × '+N('∛'+b*b*b)+' ÷ '+N('∛'+c*c*c)+' = ?',hi:N('∛'+a*a*a)+' × '+N('∛'+b*b*b)+' ÷ '+N('∛'+c*c*c)+' = ?'},ans:String(ans),w:w.map(String)}; },
  // V3: Reverse — given result, find divisor
  function(){ const a=rint(2,8),b=rint(2,4); const ans=b; const w=[b+1,b-1>0?b-1:b+2,b+2]; return {question:{en:N('∛'+a*a*a*b*b*b)+' ÷ '+N('∛x')+' = '+N(a)+'. x = ?',hing:N('∛'+a*a*a*b*b*b)+' ÷ '+N('∛x')+' = '+N(a)+'. x = ?',hi:N('∛'+a*a*a*b*b*b)+' ÷ '+N('∛x')+' = '+N(a)+'। x = ?'},ans:String(b*b*b),w:w.map(x=>String(x*x*x))}; },
  // V4: Cube root of fraction = division result
  function(){ const a=rint(2,8),b=rint(2,4); if(a*a*a%(b*b*b)!==0)return this.generate(); const ans=a/b; const w=[ans+1,ans-1>0?ans-1:ans+2,ans+2]; return {question:{en:N('∛('+a*a*a+'/'+b*b*b+')')+' = ?',hing:N('∛('+a*a*a+'/'+b*b*b+')')+' = ?',hi:N('∛('+a*a*a+'/'+b*b*b+')')+' = ?'},ans:String(ans),w:w.map(String)}; },
  // V5: Verify division identity
  function(){ const a=rint(2,6),b=rint(2,4); const result=a/b; if(result!==Math.floor(result))return this.generate(); const w=[result+1,result-1>0?result-1:result+2,a-b>0?a-b:1]; return {question:{en:N('∛'+a*a*a)+' / '+N('∛'+b*b*b)+' = '+N(result)+'. True or find correct answer.',hing:N('∛'+a*a*a)+' / '+N('∛'+b*b*b)+' = '+N(result)+'. Sahi answer?',hi:N('∛'+a*a*a)+' / '+N('∛'+b*b*b)+' = '+N(result)+'। सही उत्तर?'},ans:String(result),w:w.map(String)}; },
],
find_x_sq: [
  // V1: If √(x+a) = n, find x
  function(){ const r=rint(3,20); const add=rint(1,30); const xVal=r*r-add; if(xVal<0)return this.generate(); const w=[xVal+5,xVal-5>=0?xVal-5:xVal+10,xVal+10]; return {question:{en:'If '+N('√(x + '+add+')')+' = '+N(r)+', x = ?',hing:'Agar '+N('√(x + '+add+')')+' = '+N(r)+', to x = ?',hi:'यदि '+N('√(x + '+add+')')+' = '+N(r)+', तो x = ?'},ans:String(xVal),w:w.map(String)}; },
  // V2: If √x + a = b, find x
  function(){ const r=rint(2,15); const add=rint(1,10); const target=r+add; const xVal=r*r; const w=[xVal+10,(r+1)*(r+1),(r-1>0?r-1:r+2)*(r-1>0?r-1:r+2)]; return {question:{en:'If '+N('√x + '+add)+' = '+N(target)+', x = ?',hing:'Agar '+N('√x + '+add)+' = '+N(target)+', to x = ?',hi:'यदि '+N('√x + '+add)+' = '+N(target)+', तो x = ?'},ans:String(xVal),w:w.map(String)}; },
  // V3: If a√x = b, find x
  function(){ const r=rint(2,12); const coeff=rint(2,5); const target=coeff*r; const xVal=r*r; const w=[xVal+10,(r+1)*(r+1),(r+2)*(r+2)]; return {question:{en:'If '+N(coeff+'√x')+' = '+N(target)+', x = ?',hing:'Agar '+N(coeff+'√x')+' = '+N(target)+', to x = ?',hi:'यदि '+N(coeff+'√x')+' = '+N(target)+', तो x = ?'},ans:String(xVal),w:w.map(String)}; },
  // V4: If √(ax) = b, find x
  function(){ const r=rint(2,12); const coeff=rint(2,5); const sq=coeff*r*r; const w=[sq+coeff,sq-coeff>0?sq-coeff:sq+2*coeff,sq+2*coeff]; return {question:{en:'If '+N('√('+coeff+'x)')+' = '+N(r)+', x = ?',hing:'Agar '+N('√('+coeff+'x)')+' = '+N(r)+', to x = ?',hi:'यदि '+N('√('+coeff+'x)')+' = '+N(r)+', तो x = ?'},ans:String(r*r),w:w.map(String)}; },
  // V5: Compare two x values from square roots
  function(){ const r1=rint(2,10),r2=rint(2,10); const x1=r1*r1,x2=r2*r2; const ans=x1>x2?'x₁':'x₂'; const w=[x1<x2?'x₁':'x₂','Equal','Cannot determine']; return {question:{en:'If '+N('√x₁')+' = '+N(r1)+' and '+N('√x₂')+' = '+N(r2)+', which is greater?',hing:'Agar '+N('√x₁')+' = '+N(r1)+' aur '+N('√x₂')+' = '+N(r2)+', kaun bada?',hi:'यदि '+N('√x₁')+' = '+N(r1)+' और '+N('√x₂')+' = '+N(r2)+', कौन बड़ा?'},ans:ans,w:w}; },
],
find_x_cb: [
  // V1: If ∛(x+a) = n, find x
  function(){ const r=rint(2,8); const add=rint(1,15); const target=r; const xVal=r*r*r-add; if(xVal<0)return this.generate(); const w=[xVal+5,xVal-5>=0?xVal-5:xVal+10,xVal+10]; return {question:{en:'If '+N('∛(x + '+add+')')+' = '+N(r)+', x = ?',hing:'Agar '+N('∛(x + '+add+')')+' = '+N(r)+', to x = ?',hi:'यदि '+N('∛(x + '+add+')')+' = '+N(r)+', तो x = ?'},ans:String(xVal),w:w.map(String)}; },
  // V2: If ∛x - a = b, find x
  function(){ const r=rint(2,8); const sub=rint(1,5); const target=r-sub; if(target<=0)return this.generate(); const xVal=r*r*r; const w=[xVal+10,(r+1)*(r+1)*(r+1),xVal-10>0?xVal-10:xVal+20]; return {question:{en:'If '+N('∛x − '+sub)+' = '+N(target)+', x = ?',hing:'Agar '+N('∛x − '+sub)+' = '+N(target)+', to x = ?',hi:'यदि '+N('∛x − '+sub)+' = '+N(target)+', तो x = ?'},ans:String(xVal),w:w.map(String)}; },
  // V3: If a∛x = b, find x
  function(){ const r=rint(2,6); const coeff=rint(2,4); const target=coeff*r; const xVal=r*r*r; const w=[xVal+10,(r+1)*(r+1)*(r+1),(r-1>0?r-1:1)*(r-1>0?r-1:1)*(r-1>0?r-1:1)]; return {question:{en:'If '+N(coeff+'∛x')+' = '+N(target)+', x = ?',hing:'Agar '+N(coeff+'∛x')+' = '+N(target)+', to x = ?',hi:'यदि '+N(coeff+'∛x')+' = '+N(target)+', तो x = ?'},ans:String(xVal),w:w.map(String)}; },
  // V4: If ∛(ax) = b, find x
  function(){ const r=rint(2,6); const coeff=rint(2,4); const cube=coeff*r*r*r; const w=[r*r*r+10,r*r*r-10>0?r*r*r-10:r*r*r+20,(r+1)*(r+1)*(r+1)]; return {question:{en:'If '+N('∛('+coeff+'x)')+' = '+N(r)+', x = ?',hing:'Agar '+N('∛('+coeff+'x)')+' = '+N(r)+', to x = ?',hi:'यदि '+N('∛('+coeff+'x)')+' = '+N(r)+', तो x = ?'},ans:String(r*r*r),w:w.map(String)}; },
  // V5: Find x+y from cube root equations
  function(){ const a=rint(2,5),b=rint(2,5); const xVal=a*a*a,yVal=b*b*b; const ans=xVal+yVal; const w=[ans+10,ans-10>0?ans-10:ans+20,(a+b)*(a+b)*(a+b)]; return {question:{en:'If '+N('∛x')+' = '+N(a)+' and '+N('∛y')+' = '+N(b)+', x + y = ?',hing:'Agar '+N('∛x')+' = '+N(a)+' aur '+N('∛y')+' = '+N(b)+', x + y = ?',hi:'यदि '+N('∛x')+' = '+N(a)+' और '+N('∛y')+' = '+N(b)+', x + y = ?'},ans:String(ans),w:w.map(String)}; },
],
solve_sq_eq: [
  // V1: √(x) + a = b, find x
  function(){ const r=rint(3,20); const add=rint(1,10); const target=r+add; const xVal=r*r; const w=[xVal+10,(r+1)*(r+1),(r-1>0?r-1:1)*(r-1>0?r-1:1)]; return {question:{en:N('√x + '+add)+' = '+N(target)+'. x = ?',hing:N('√x + '+add)+' = '+N(target)+'. x = ?',hi:N('√x + '+add)+' = '+N(target)+'। x = ?'},ans:String(xVal),w:w.map(String)}; },
  // V2: √(x-a) = n, find x
  function(){ const r=rint(3,15); const sub=rint(1,r*r-1); const xVal=r*r+sub; const w=[xVal+5,xVal-5>0?xVal-5:xVal+10,r*r]; return {question:{en:N('√(x − '+sub+')')+' = '+N(r)+'. x = ?',hing:N('√(x − '+sub+')')+' = '+N(r)+'. x = ?',hi:N('√(x − '+sub+')')+' = '+N(r)+'। x = ?'},ans:String(xVal),w:w.map(String)}; },
  // V3: √(ax+b) = n, find x
  function(){ const r=rint(3,12); const coeff=2; const add=rint(1,15); const xVal=(r*r-add)/coeff; if(xVal!==Math.floor(xVal)||xVal<0)return this.generate(); const w=[xVal+3,xVal-3>=0?xVal-3:xVal+6,xVal+6]; return {question:{en:N('√('+coeff+'x + '+add+')')+' = '+N(r)+'. x = ?',hing:N('√('+coeff+'x + '+add+')')+' = '+N(r)+'. x = ?',hi:N('√('+coeff+'x + '+add+')')+' = '+N(r)+'। x = ?'},ans:String(xVal),w:w.map(String)}; },
  // V4: √x × a = b, find x
  function(){ const r=rint(2,12); const coeff=rint(2,4); const target=coeff*r; const xVal=r*r; const w=[xVal+10,(r+1)*(r+1),(r-1>0?r-1:1)*(r-1>0?r-1:1)]; return {question:{en:N(coeff+'√x')+' = '+N(target)+'. x = ?',hing:N(coeff+'√x')+' = '+N(target)+'. x = ?',hi:N(coeff+'√x')+' = '+N(target)+'। x = ?'},ans:String(xVal),w:w.map(String)}; },
  // V5: Two solutions of √ equation
  function(){ const r=rint(3,15); const add=rint(1,20); const xVal=r*r-add; if(xVal<0)return this.generate(); const w=[xVal+add+1,-xVal,xVal+2*add]; return {question:{en:N('√(x + '+add+')')+' = '+N(r)+'. What is x + '+add+'?',hing:N('√(x + '+add+')')+' = '+N(r)+'. x + '+add+' kya hai?',hi:N('√(x + '+add+')')+' = '+N(r)+'। x + '+add+' क्या है?'},ans:String(r*r),w:w.map(String)}; },
],
solve_cb_eq: [
  // V1: ∛(x) + a = b, find x
  function(){ const r=rint(2,10); const add=rint(1,8); const target=r+add; const xVal=r*r*r; const w=[xVal+10,(r+1)*(r+1)*(r+1),(r-1>0?r-1:1)*(r-1>0?r-1:1)*(r-1>0?r-1:1)]; return {question:{en:N('∛x + '+add)+' = '+N(target)+'. x = ?',hing:N('∛x + '+add)+' = '+N(target)+'. x = ?',hi:N('∛x + '+add)+' = '+N(target)+'। x = ?'},ans:String(xVal),w:w.map(String)}; },
  // V2: ∛(x-a) = n, find x
  function(){ const r=rint(2,8); const sub=rint(1,20); const xVal=r*r*r+sub; const w=[xVal+5,xVal-5>0?xVal-5:xVal+10,r*r*r]; return {question:{en:N('∛(x − '+sub+')')+' = '+N(r)+'. x = ?',hing:N('∛(x − '+sub+')')+' = '+N(r)+'. x = ?',hi:N('∛(x − '+sub+')')+' = '+N(r)+'। x = ?'},ans:String(xVal),w:w.map(String)}; },
  // V3: a∛x = b, find x
  function(){ const r=rint(2,6); const coeff=rint(2,3); const target=coeff*r; const xVal=r*r*r; const w=[xVal+10,(r+1)*(r+1)*(r+1),(r-1>0?r-1:1)*(r-1>0?r-1:1)*(r-1>0?r-1:1)]; return {question:{en:N(coeff+'∛x')+' = '+N(target)+'. x = ?',hing:N(coeff+'∛x')+' = '+N(target)+'. x = ?',hi:N(coeff+'∛x')+' = '+N(target)+'। x = ?'},ans:String(xVal),w:w.map(String)}; },
  // V4: ∛(ax) = n, find x
  function(){ for(let attempt=0;attempt<30;attempt++){const r=rint(2,6); const coeff=rint(2,4); const xVal=r*r*r/coeff; if(xVal===Math.floor(xVal)&&xVal>0){const w=[xVal+coeff,xVal-coeff>=0?xVal-coeff:xVal+2*coeff,xVal+2*coeff]; return {question:{en:N('∛('+coeff+'x)')+' = '+N(r)+'. x = ?',hing:N('∛('+coeff+'x)')+' = '+N(r)+'. x = ?',hi:N('∛('+coeff+'x)')+' = '+N(r)+'। x = ?'},ans:String(xVal),w:w.map(String)};} } return {question:{en:N('∛(8x)')+' = '+N('4')+'. x = ?',hing:N('∛(8x)')+' = '+N('4')+'. x = ?',hi:N('∛(8x)')+' = '+N('4')+'। x = ?'},ans:'8',w:['6','10','12']}; },
  // V5: Two-step cube root equation
  function(){ const r=rint(2,6); const mul=2; const add=rint(1,10); const target=mul*r+add; const xVal=r*r*r; const w=[xVal+20,(r+1)*(r+1)*(r+1),xVal-10>0?xVal-10:xVal+20]; return {question:{en:N('2∛x + '+add)+' = '+N(target)+'. x = ?',hing:N('2∛x + '+add)+' = '+N(target)+'. x = ?',hi:N('2∛x + '+add)+' = '+N(target)+'। x = ?'},ans:String(xVal),w:w.map(String)}; },
],
compare_sq: [
  // V1: Which is smallest?
  function(){ const a=rint(2,20),b=rint(2,20),c=rint(2,20); if(a===b||b===c||a===c)return this.generate(); const vals=[{v:a*a,l:'√'+a*a},{v:b*b,l:'√'+b*b},{v:c*c,l:'√'+c*c}]; vals.sort((x,y)=>x.v-y.v); const ans=vals[0].l; const w=[vals[1].l,vals[2].l,'All equal']; return {question:{en:'Smallest: '+N(vals[0].l)+', '+N(vals[1].l)+', or '+N(vals[2].l)+'?',hing:'Sabse chhota: '+N(vals[0].l)+', '+N(vals[1].l)+', ya '+N(vals[2].l)+'?',hi:'सबसे छोटा: '+N(vals[0].l)+', '+N(vals[1].l)+', या '+N(vals[2].l)+'?'},ans:ans,w:w}; },
  // V2: Is √a > √b?
  function(){ const a=rint(10,200),b=rint(10,200); if(a===b)return this.generate(); const bigger=Math.max(a,b); const ans=bigger===a?'Yes':'No'; const w=[bigger===a?'No':'Yes','Cannot determine','Equal']; return {question:{en:'Is '+N('√'+a)+' > '+N('√'+b)+'?',hing:'Kya '+N('√'+a)+' > '+N('√'+b)+' hai?',hi:'क्या '+N('√'+a)+' > '+N('√'+b)+' है?'},ans:ans,w:w}; },
  // V3: Difference between two roots
  function(){ const a=rint(5,20),b=rint(2,a-1); const ans=a-b; const w=[a-b+1,a-b-1>0?a-b-1:a-b+3,a+b]; return {question:{en:N('√'+a*a)+' − '+N('√'+b*b)+' = ?',hing:N('√'+a*a)+' − '+N('√'+b*b)+' = ?',hi:N('√'+a*a)+' − '+N('√'+b*b)+' = ?'},ans:String(ans),w:w.map(String)}; },
  // V4: Sum of two roots comparison
  function(){ const a=rint(2,10),b=rint(2,10); const sum=a+b; const sqSum=a*a+b*b; const w=[sum+1,sum-1>0?sum-1:sum+2,a*b]; return {question:{en:N('√'+a*a)+' + '+N('√'+b*b)+' = ?',hing:N('√'+a*a)+' + '+N('√'+b*b)+' = ?',hi:N('√'+a*a)+' + '+N('√'+b*b)+' = ?'},ans:String(sum),w:w.map(String)}; },
  // V5: Which is closer to an integer?
  function(){ const a=rint(2,50); const s=Math.sqrt(a); const lo=Math.floor(s),hi=Math.ceil(s); const ans=s-lo<hi-s?'√'+a+' is closer to '+lo:'√'+a+' is closer to '+hi; const w=[s-lo<hi-s?'√'+a+' is closer to '+hi:'√'+a+' is closer to '+lo,'Exactly between','√'+a+' = '+s.toFixed(2)]; return {question:{en:N('√'+a)+' is closer to which integer?',hing:N('√'+a)+' kis integer ke sabse qareeb hai?',hi:N('√'+a)+' किस पूर्णांक के सबसे निकट है?'},ans:ans,w:w}; },
],
compare_sq_cb: [
  // V1: Is √a > ∛b?
  function(){ const a=rint(2,100),b=rint(8,500); const sqV=Math.sqrt(a),cbV=Math.cbrt(b); if(Math.abs(sqV-cbV)<0.01)return this.generate(); const ans=sqV>cbV?'√'+a:'∛'+b; const w=[sqV>cbV?'∛'+b:'√'+a,'Equal','Cannot compare']; return {question:{en:'Is '+N('√'+a)+' > '+N('∛'+b)+'?',hing:'Kya '+N('√'+a)+' > '+N('∛'+b)+' hai?',hi:'क्या '+N('√'+a)+' > '+N('∛'+b)+' है?'},ans:ans,w:w}; },
  // V2: Compare three values
  function(){ const a=rint(2,50),b=rint(2,50),c=rint(2,50); const vals=[{v:Math.sqrt(a),l:'√'+a},{v:Math.cbrt(b),l:'∛'+b},{v:Math.sqrt(c),l:'√'+c}]; vals.sort((x,y)=>y.v-x.v); const ans=vals[0].l; const w=[vals[1].l,vals[2].l,'All equal']; return {question:{en:'Greatest: '+N(vals[0].l)+', '+N(vals[1].l)+', or '+N(vals[2].l)+'?',hing:'Sabse bada: '+N(vals[0].l)+', '+N(vals[1].l)+', ya '+N(vals[2].l)+'?',hi:'सबसे बड़ा: '+N(vals[0].l)+', '+N(vals[1].l)+', या '+N(vals[2].l)+'?'},ans:ans,w:w}; },
  // V3: Find when √a = ∛b
  function(){ const n=rint(2,10); const a=n*n,b=n*n*n; const w=['Only when a = b','Never','Always']; return {question:{en:'If '+N('√a')+' = '+N(n)+' and '+N('∛b')+' = '+N(n)+', then a : b = ?',hing:'Agar '+N('√a')+' = '+N(n)+' aur '+N('∛b')+' = '+N(n)+', to a : b = ?',hi:'यदि '+N('√a')+' = '+N(n)+' और '+N('∛b')+' = '+N(n)+', तो a : b = ?'},ans:a+':'+b,w:w}; },
  // V4: Which grows faster?
  function(){ const ans='∛x'; const w=['√x','Both same','Depends on x']; return {question:{en:'For large x, which grows faster: '+N('√x')+' or '+N('∛x')+'?',hing:'Bade x ke liye kaun tez badhta hai: '+N('√x')+' ya '+N('∛x')+'?',hi:'बड़े x के लिए कौन तेज़ बढ़ता है: '+N('√x')+' या '+N('∛x')+'?'},ans:ans,w:w}; },
  // V5: Difference √a - ∛b
  function(){ const a=rint(4,100),b=rint(8,216); const sqV=Math.sqrt(a),cbV=Math.cbrt(b); const diff=sqV-cbV; const ans=diff>0?'√'+a:'∛'+b; const w=[diff>0?'∛'+b:'√'+a,'0','Cannot find']; return {question:{en:N('√'+a)+' − '+N('∛'+b)+' is positive or negative?',hing:N('√'+a)+' − '+N('∛'+b)+' positive ya negative?',hi:N('√'+a)+' − '+N('∛'+b)+' धनात्मक या ऋणात्मक?'},ans:ans,w:w}; },
],
sq_prop_app: [
  // V1: √a/√b = √(a/b)
  function(){ const a=rint(2,12),b=rint(2,8); if(a*a%(b*b)!==0)return this.generate(); const ans=a/b; const w=[ans+1,ans-1>0?ans-1:ans+2,a+b]; return {question:{en:N('√'+a*a)+' / '+N('√'+b*b)+' = ?',hing:N('√'+a*a)+' / '+N('√'+b*b)+' = ?',hi:N('√'+a*a)+' / '+N('√'+b*b)+' = ?'},ans:String(ans),w:w.map(String)}; },
  // V2: (√a)² = a
  function(){ const a=rint(2,20); const ans=a; const w=[a*a,a+1,2*a]; return {question:{en:N('(√'+a*a+')²')+' = ?',hing:N('(√'+a*a+')²')+' = ?',hi:N('(√'+a*a+')²')+' = ?'},ans:String(ans),w:w.map(String)}; },
  // V3: √(a²×b²) = ?
  function(){ const a=rint(2,10),b=rint(2,10); const ans=a*b; const w=[a*b+1,a*b-1>0?a*b-1:a*b+2,a*a*b*b]; return {question:{en:N('√('+a*a+' × '+b*b+')')+' = ?',hing:N('√('+a*a+' × '+b*b+')')+' = ?',hi:N('√('+a*a+' × '+b*b+')')+' = ?'},ans:String(ans),w:w.map(String)}; },
  // V4: ∛a × ∛b = ∛(ab)
  function(){ const a=rint(2,6),b=rint(2,6); const ans=a*b; const w=[a*b+1,a*b-1>0?a*b-1:a*b+2,a+b]; return {question:{en:N('∛'+a*a*a)+' × '+N('∛'+b*b*b)+' = ?',hing:N('∛'+a*a*a)+' × '+N('∛'+b*b*b)+' = ?',hi:N('∛'+a*a*a)+' × '+N('∛'+b*b*b)+' = ?'},ans:String(ans),w:w.map(String)}; },
  // V5: (∛a)³ = a
  function(){ const a=rint(2,15); const ans=a; const w=[a*a*a,a+1,a*a]; return {question:{en:N('(∛'+a*a*a+')³')+' = ?',hing:N('(∛'+a*a*a+')³')+' = ?',hi:N('(∛'+a*a*a+')³')+' = ?'},ans:String(ans),w:w.map(String)}; },
],
sq_unit_pattern: [
  // V1: Possible unit digits of perfect squares
  function(){ const ans='0,1,4,5,6,9'; const w=['0,1,2,4,5,6','1,4,5,6,7,9','0,1,3,5,7,9']; return {question:{en:'Possible unit digits of a perfect square:',hing:'Perfect square ke possible unit digits:',hi:'पूर्ण वर्ग के संभावित इकाई अंक:'},ans:ans,w:w}; },
  // V2: Which cannot be unit digit of a square?
  function(){ const d=pick([2,3,7,8]); const wPool=[0,1,4,5,6,9]; const w=shuffle(wPool).slice(0,3).map(String); return {question:{en:'Which digit can NOT be the unit digit of a perfect square?',hing:'Kaunsa digit perfect square ka unit digit nahi ho sakta?',hi:'कौन सा अंक पूर्ण वर्ग का इकाई अंक नहीं हो सकता?'},ans:String(d),w:w}; },
  // V3: Possible unit digits of perfect cubes
  function(){ const ans='0,1,2,3,4,5,6,7,8,9'; const w=['0,1,8,7,4,5,6,3,2,9','Only 0,1,8','0,1,4,5,6,9']; return {question:{en:'How many possible unit digits for perfect cubes?',hing:'Perfect cube ke kitne possible unit digits?',hi:'पूर्ण घन के कितने संभावित इकाई अंक?'},ans:'All 10 digits',w:['6','8','5']}; },
  // V4: Square ends in 5 — what about root?
  function(){ const ans='5'; const w=['0','1','5 or 0','Any odd digit']; return {question:{en:'If a perfect square ends in 5, its root ends in:',hing:'Agar perfect square 5 par khatam, to root khatam hoga:',hi:'यदि पूर्ण वर्ग 5 पर समाप्त, तो इसका मूल समाप्त होगा:'},ans:ans,w:w}; },
  // V5: Cube ends in 8 — root ends in?
  function(){ const ans='2'; const w=['8','4','6']; return {question:{en:'If a perfect cube ends in 8, its cube root ends in:',hing:'Agar perfect cube 8 par khatam, to cube root khatam hoga:',hi:'यदि पूर्ण घन 8 पर समाप्त, तो इसका घनमूल समाप्त होगा:'},ans:ans,w:w}; },
],
arrange_order: [
  // V1: Two values ascending
  function(){ const a=rint(2,50),b=rint(2,50); if(a===b)return this.generate(); const vals=[{v:Math.sqrt(a),l:'√'+a},{v:Math.sqrt(b),l:'√'+b}]; vals.sort((x,y)=>x.v-y.v); const ans=vals.map(x=>x.l).join(', '); const rev=vals.map(x=>x.l).reverse().join(', '); return {question:{en:'Arrange ascending: '+N(vals[0].l)+', '+N(vals[1].l),hing:'Ascending order: '+N(vals[0].l)+', '+N(vals[1].l),hi:'आरोही क्रम: '+N(vals[0].l)+', '+N(vals[1].l)},ans:ans,w:[rev,'Equal','Cannot determine']}; },
  // V2: Descending order
  function(){ const a=rint(2,40),b=rint(2,40),c=rint(2,40); if(a===b||b===c||a===c)return this.generate(); const vals=[{v:Math.sqrt(a),l:'√'+a},{v:Math.sqrt(b),l:'√'+b},{v:Math.sqrt(c),l:'√'+c}]; vals.sort((x,y)=>y.v-x.v); const ans=vals.map(x=>x.l).join(', '); const asc=vals.map(x=>x.l).reverse().join(', '); const swap1=[vals[1].l,vals[0].l,vals[2].l].join(', '); return {question:{en:'Arrange descending: '+vals.map(x=>N(x.l)).join(', '),hing:'Descending order: '+vals.map(x=>N(x.l)).join(', '),hi:'अवरोही क्रम: '+vals.map(x=>N(x.l)).join(', ')},ans:ans,w:[asc,swap1,'All equal']}; },
  // V3: Mix of √ and ∛ ascending
  function(){ const a=rint(2,30),b=rint(2,30); const vals=[{v:Math.sqrt(a),l:'√'+a},{v:Math.cbrt(b),l:'∛'+b}]; vals.sort((x,y)=>x.v-y.v); const ans=vals.map(x=>x.l).join(', '); const rev=vals.map(x=>x.l).reverse().join(', '); return {question:{en:'Ascending: '+N(vals[0].l)+', '+N(vals[1].l),hing:'Ascending: '+N(vals[0].l)+', '+N(vals[1].l),hi:'आरोही: '+N(vals[0].l)+', '+N(vals[1].l)},ans:ans,w:[rev,'Equal','Cannot determine']}; },
  // V4: Four roots ascending
  function(){ const nums=[]; for(let i=0;i<4;i++)nums.push(rint(2,50)); const vals=nums.map(n=>({v:Math.sqrt(n),l:'√'+n})); vals.sort((x,y)=>x.v-y.v); const ans=vals.map(x=>x.l).join(', '); const rev=vals.map(x=>x.l).reverse().join(', '); const mid=[vals[0].l,vals[2].l,vals[1].l,vals[3].l].join(', '); return {question:{en:'Ascending: '+vals.map(x=>N(x.l)).join(', '),hing:'Ascending: '+vals.map(x=>N(x.l)).join(', '),hi:'आरोही: '+vals.map(x=>N(x.l)).join(', ')},ans:ans,w:[rev,mid,'All equal']}; },
  // V5: Integer values of roots in order
  function(){ const a=rint(2,8),b=rint(2,8),c=rint(2,8); if(a===b||b===c||a===c)return this.generate(); const vals=[a,b,c].sort((x,y)=>x-y); const ans=vals.map(v=>'√'+v*v).join(', '); const rev=vals.map(v=>'√'+v*v).reverse().join(', '); return {question:{en:'Ascending: '+vals.map(v=>N('√'+v*v)).join(', '),hing:'Ascending: '+vals.map(v=>N('√'+v*v)).join(', '),hi:'आरोही: '+vals.map(v=>N('√'+v*v)).join(', ')},ans:ans,w:[rev,vals.reverse().map(v=>'√'+v*v).join(', '),'Equal']}; },
],
root_mult: [
  // V1: Multiply and simplify
  function(){ const a=rint(2,12),b=rint(2,12); const prod=a*b; const s=Math.round(Math.sqrt(prod)); if(s*s===prod){const w=[s+1,s-1>0?s-1:s+2,s+2]; return {question:{en:N('√'+a)+' × '+N('√'+b)+' = ?',hing:N('√'+a)+' × '+N('√'+b)+' = ?',hi:N('√'+a)+' × '+N('√'+b)+' = ?'},ans:String(s),w:w.map(String)};} let ansStr='√'+prod; const w=['√'+(prod+1),String(a*b+2),String(a+b)]; return {question:{en:N('√'+a)+' × '+N('√'+b)+' = ?',hing:N('√'+a)+' × '+N('√'+b)+' = ?',hi:N('√'+a)+' × '+N('√'+b)+' = ?'},ans:ansStr,w:w}; },
  // V2: Three roots multiplied
  function(){ const a=rint(2,6),b=rint(2,6),c=rint(2,6); const prod=a*b*c; const s=Math.round(Math.sqrt(prod)); if(s*s===prod){const w=[s+1,s-1>0?s-1:s+2,s+2]; return {question:{en:N('√'+a)+' × '+N('√'+b)+' × '+N('√'+c)+' = ?',hing:N('√'+a)+' × '+N('√'+b)+' × '+N('√'+c)+' = ?',hi:N('√'+a)+' × '+N('√'+b)+' × '+N('√'+c)+' = ?'},ans:String(s),w:w.map(String)};} return this.generate(); },
  // V3: Multiply surds with coefficients
  function(){ const n=pick([2,3,5]); const a=rint(1,5),b=rint(1,5); const ansCoeff=a*b; let ansStr; if(ansCoeff*n===Math.round(Math.sqrt(ansCoeff*ansCoeff*n))) {const s=Math.round(Math.sqrt(ansCoeff*ansCoeff*n)); if(s*s===ansCoeff*ansCoeff*n){ansStr=String(s); const w=[s+1,s-1>0?s-1:s+2,s+2]; return {question:{en:a+'√'+n+' × '+b+'√'+n+' = ?',hing:a+'√'+n+' × '+b+'√'+n+' = ?',hi:a+'√'+n+' × '+b+'√'+n+' = ?'},ans:ansStr,w:w.map(String)};}} ansStr=ansCoeff+'×'+n; const w=[(ansCoeff+1)+'×'+n,ansCoeff*(n+1)+'',String(a*b*n)]; return {question:{en:a+'√'+n+' × '+b+'√'+n+' = ?',hing:a+'√'+n+' × '+b+'√'+n+' = ?',hi:a+'√'+n+' × '+b+'√'+n+' = ?'},ans:String(ansCoeff*n),w:w}; },
  // V4: √a × √b = √(ab) property
  function(){ const a=rint(2,15),b=rint(2,15); const ans='√'+(a*b); const w=['√'+(a+b),'√'+(a*b+1),String(a*b)]; return {question:{en:N('√'+a)+' × '+N('√'+b)+' = ?',hing:N('√'+a)+' × '+N('√'+b)+' = ?',hi:N('√'+a)+' × '+N('√'+b)+' = ?'},ans:ans,w:w}; },
  // V5: Verify product property
  function(){ const a=rint(2,10),b=rint(2,10); const product=a*b; const sqrtP=Math.round(Math.sqrt(product)); const w=[sqrtP+1,sqrtP-1>0?sqrtP-1:sqrtP+2,a+b]; return {question:{en:N('√'+a*a)+' × '+N('√'+b*b)+' = '+N('√'+product)+'?',hing:N('√'+a*a)+' × '+N('√'+b*b)+' = '+N('√'+product)+'?',hi:N('√'+a*a)+' × '+N('√'+b*b)+' = '+N('√'+product)+'?'},ans:String(a*b),w:w.map(String)}; },
],
root_div_simp: [
  // V1: Simplify √(a/b) with different values
  function(){ const a=rint(2,15),b=rint(2,8); if((a*a)%(b*b)!==0){const g=gcd(a*a,b*b); const num=a*a/g, den=b*b/g; if(den===1){const s=Math.round(Math.sqrt(num)); if(s*s===num)return {question:{en:N('√('+a*a+'/'+b*b+')')+' = ?',hing:N('√('+a*a+'/'+b*b+')')+' = ?',hi:N('√('+a*a+'/'+b*b+')')+' = ?'},ans:String(a/b),w:[String(a/b+1),String(a/b-1>0?a/b-1:a/b+2),String(a/b+2)]};} let ansStr='√'+num+'/√'+den; if(den===1)ansStr='√'+num; const w=['√'+(num+1)+'/√'+den,ansStr+'+1','√'+num+'/'+String(den+1)]; return {question:{en:N('√('+a*a+'/'+b*b+')')+' = ?',hing:N('√('+a*a+'/'+b*b+')')+' = ?',hi:N('√('+a*a+'/'+b*b+')')+' = ?'},ans:ansStr,w:w};} const ans=a/b; const w=[ans+1,ans-1>0?ans-1:ans+2,ans+2]; return {question:{en:N('√('+a*a+'/'+b*b+')')+' = ?',hing:N('√('+a*a+'/'+b*b+')')+' = ?',hi:N('√('+a*a+'/'+b*b+')')+' = ?'},ans:String(ans),w:w.map(String)}; },
  // V2: √a / √b = ?
  function(){ const a=rint(2,12),b=rint(2,8); if(a%b!==0)return this.generate(); const ans=a/b; const w=[ans+1,ans-1>0?ans-1:ans+2,a+b]; return {question:{en:N('√'+a*a)+' / '+N('√'+b*b)+' = ?',hing:N('√'+a*a)+' / '+N('√'+b*b)+' = ?',hi:N('√'+a*a)+' / '+N('√'+b*b)+' = ?'},ans:String(ans),w:w.map(String)}; },
  // V3: Simplify fraction under root then divide
  function(){ const n=rint(2,10),d=rint(2,6); const g=gcd(n,d); const pn=n/g,pd=d/g; const ans=pn/pd; if(ans!==Math.floor(ans))return this.generate(); const w=[ans+1,ans-1>0?ans-1:ans+2,n/d>Math.floor(n/d)?Math.floor(n/d)+1:n/d+1]; return {question:{en:N('√('+n*n+'/'+d*d+')')+' = ?',hing:N('√('+n*n+'/'+d*d+')')+' = ?',hi:N('√('+n*n+'/'+d*d+')')+' = ?'},ans:String(ans),w:w.map(String)}; },
  // V4: Division results in surd
  function(){ const a=rint(2,12),b=rint(2,6); const ans='√'+a+'/'+b; const w=['√'+(a/b>0?a/b:1),String(a/b),ans+'²']; return {question:{en:N('√'+a)+' / '+N(b)+' = ?',hing:N('√'+a)+' / '+N(b)+' = ?',hi:N('√'+a)+' / '+N(b)+' = ?'},ans:ans,w:w}; },
  // V5: Two divisions compared
  function(){ const a=rint(2,10),b=rint(2,6),c=rint(2,10),d=rint(2,6); if(a===c&&b===d)return this.generate(); const v1=a/b,v2=c/d; if(v1===v2)return this.generate(); const ans=v1>v2?'√'+a*a+'/√'+b*b:'√'+c*c+'/√'+d*d; return {question:{en:'Greater: '+N('√'+a*a+'/'+b*b)+' or '+N('√'+c*c+'/'+d*d)+'?',hing:'Bada: '+N('√'+a*a+'/'+b*b)+' ya '+N('√'+c*c+'/'+d*d)+'?',hi:'बड़ा: '+N('√'+a*a+'/'+b*b)+' या '+N('√'+c*c+'/'+d*d)+'?'},ans:ans,w:['Equal','Cannot determine',v1<=v2?'√'+a*a+'/'+b*b:'√'+c*c+'/'+d*d]}; },
],
solve_x2: [
  // V1: x² = n, both solutions
  function(){ const a=rint(3,25); const sq=a*a; return {question:{en:N('x²')+' = '+N(sq)+'. x = ?',hing:N('x²')+' = '+N(sq)+'. x = ?',hi:N('x²')+' = '+N(sq)+'। x = ?'},ans:'±'+a,w:[String(a),String(-a),String(a+1)]}; },
  // V2: x² = n, x > 0
  function(){ const a=rint(3,25); const sq=a*a; const w=[-a,a+1,a-1>0?a-1:a+2]; return {question:{en:'If '+N('x²')+' = '+N(sq)+' and x > 0, x = ?',hing:'Agar '+N('x²')+' = '+N(sq)+' aur x > 0, to x = ?',hi:'यदि '+N('x²')+' = '+N(sq)+' और x > 0, तो x = ?'},ans:String(a),w:w.map(String)}; },
  // V3: x² = n, x < 0
  function(){ const a=rint(3,25); const sq=a*a; const w=[a,-(a+1),-(a-1>0?a-1:a+2)]; return {question:{en:'If '+N('x²')+' = '+N(sq)+' and x < 0, x = ?',hing:'Agar '+N('x²')+' = '+N(sq)+' aur x < 0, to x = ?',hi:'यदि '+N('x²')+' = '+N(sq)+' और x < 0, तो x = ?'},ans:String(-a),w:w.map(String)}; },
  // V4: ax² = n
  function(){ const a=rint(2,5); const r=rint(2,12); const sq=a*r*r; const w=[String(r),String(-r),String(a*r)]; return {question:{en:N(a+'x²')+' = '+N(sq)+'. x = ?',hing:N(a+'x²')+' = '+N(sq)+'. x = ?',hi:N(a+'x²')+' = '+N(sq)+'। x = ?'},ans:'±'+r,w:w}; },
  // V5: x² - a = b
  function(){ const a=rint(1,50); const r=rint(3,15); const b=r*r-a; if(b<0)return this.generate(); const w=[String(r+1),String(-(r+1)),String(r-1>0?r-1:r+2)]; return {question:{en:N('x²')+' − '+N(a)+' = '+N(b)+'. x = ?',hing:N('x²')+' − '+N(a)+' = '+N(b)+'. x = ?',hi:N('x²')+' − '+N(a)+' = '+N(b)+'। x = ?'},ans:'±'+r,w:w}; },
],
dec_root_add: [
  // V1: Subtract decimal roots
  function(){ const a=rint(2,10),b=rint(1,a-1>0?a-1:1); const dA=(a*a/100).toFixed(2),dB=(b*b/100).toFixed(2); const ans=(a-b)/10; const w=[(a-b+1)/10,(a-b-1)/10>0?(a-b-1)/10:(a-b+2)/10,(a+b)/10]; return {question:{en:N('√'+dA)+' − '+N('√'+dB)+' = ?',hing:N('√'+dA)+' − '+N('√'+dB)+' = ?',hi:N('√'+dA)+' − '+N('√'+dB)+' = ?'},ans:String(ans),w:w.map(String)}; },
  // V2: Three decimal roots
  function(){ const a=rint(1,6),b=rint(1,6),c=rint(1,6); const dA=(a*a/100).toFixed(2),dB=(b*b/100).toFixed(2),dC=(c*c/100).toFixed(2); const ans=(a+b+c)/10; const w=[(a+b+c+1)/10,(a+b+c-1)/10>0?(a+b+c-1)/10:(a+b+c+2)/10,(a+b-c)/10]; return {question:{en:N('√'+dA)+' + '+N('√'+dB)+' + '+N('√'+dC)+' = ?',hing:N('√'+dA)+' + '+N('√'+dB)+' + '+N('√'+dC)+' = ?',hi:N('√'+dA)+' + '+N('√'+dB)+' + '+N('√'+dC)+' = ?'},ans:String(ans),w:w.map(String)}; },
  // V3: Multiply decimal roots
  function(){ const a=rint(1,8),b=rint(1,8); const dA=(a*a/100).toFixed(2),dB=(b*b/100).toFixed(2); const ans=a*b/100; const w=[(a*b+1)/100,(a*b-1)/100>0?(a*b-1)/100:(a*b+2)/100,(a+b)/100]; return {question:{en:N('√'+dA)+' × '+N('√'+dB)+' = ?',hing:N('√'+dA)+' × '+N('√'+dB)+' = ?',hi:N('√'+dA)+' × '+N('√'+dB)+' = ?'},ans:String(ans),w:w.map(String)}; },
  // V4: Which decimal has this root?
  function(){ const a=rint(1,9); const dec=(a*a/100).toFixed(2); const wDec1=((a+1)*(a+1)/100).toFixed(2),wDec2=((a>1?a-1:a+2)*(a>1?a-1:a+2)/100).toFixed(2),wDec3=(a*a/10).toFixed(1); return {question:{en:'Which decimal gives '+N('√x')+' = '+N(a/10)+'?',hing:'Kis decimal se '+N('√x')+' = '+N(a/10)+' milta hai?',hi:'किस दशमलव से '+N('√x')+' = '+N(a/10)+' मिलता है?'},ans:dec,w:[wDec1,wDec2,wDec3]}; },
  // V5: Decimal root squared
  function(){ const a=rint(1,9); const dA=(a*a/100).toFixed(2); const ans=a*a/100; const w=[ans+0.01,ans-0.01>0?ans-0.01:ans+0.02,a/10]; return {question:{en:N('(√'+dA+')²')+' = ?',hing:N('(√'+dA+')²')+' = ?',hi:N('(√'+dA+')²')+' = ?'},ans:String(ans),w:w.map(String)}; },
],
cb_prod_simp: [
  // V1: Cube root of product of three cubes
  function(){ const a=rint(2,5),b=rint(2,5),c=rint(2,5); const ans=a*b*c; const w=[ans+1,ans-1>0?ans-1:ans+2,a+b+c]; return {question:{en:N('∛('+a*a*a+' × '+b*b*b+' × '+c*c*c+')')+' = ?',hing:N('∛('+a*a*a+' × '+b*b*b+' × '+c*c*c+')')+' = ?',hi:N('∛('+a*a*a+' × '+b*b*b+' × '+c*c*c+')')+' = ?'},ans:String(ans),w:w.map(String)}; },
  // V2: Cube root of square × cube
  function(){ const a=rint(2,6),b=rint(2,4); const sq=a*a,cb=b*b*b; const prod=sq*cb; const s=Math.round(Math.cbrt(prod)); if(s*s*s!==prod)return this.generate(); const w=[s+1,s-1>0?s-1:s+2,s+2]; return {question:{en:N('∛('+sq+' × '+cb+')')+' = ?',hing:N('∛('+sq+' × '+cb+')')+' = ?',hi:N('∛('+sq+' × '+cb+')')+' = ?'},ans:String(s),w:w.map(String)}; },
  // V3: Simplify ∛(a³b³)
  function(){ const a=rint(2,8),b=rint(2,6); const ans=a*b; const w=[ans+1,ans-1>0?ans-1:ans+2,a+b]; return {question:{en:N('∛('+a*a*a*b*b*b+')')+' = ?',hing:N('∛('+a*a*a*b*b*b+')')+' = ?',hi:N('∛('+a*a*a*b*b*b+')')+' = ?'},ans:String(ans),w:w.map(String)}; },
  // V4: Reverse — given result, find product
  function(){ const a=rint(2,6),b=rint(2,4); const ans=a*b; const w=[ans+3,ans-2>0?ans-2:ans+5,a*a*b*b]; return {question:{en:N('∛x')+' = '+N(a)+' × '+N(b)+'. x = ?',hing:N('∛x')+' = '+N(a)+' × '+N(b)+'. x = ?',hi:N('∛x')+' = '+N(a)+' × '+N(b)+'। x = ?'},ans:String(a*a*a*b*b*b),w:w.map(String)}; },
  // V5: Compare two cube root products
  function(){ const a=rint(2,5),b=rint(2,5); const v1=a*b; const c=rint(2,5),d=rint(2,5); const v2=c*d; if(v1===v2)return this.generate(); const bigger=v1>v2?'∛('+a*a*a+'×'+b*b*b+')':'∛('+c*c*c+'×'+d*d*d+')'; return {question:{en:'Greater: '+N('∛('+a*a*a+'×'+b*b*b+')')+' or '+N('∛('+c*c*c+'×'+d*d*d+')')+'?',hing:'Bada: '+N('∛('+a*a*a+'×'+b*b*b+')')+' ya '+N('∛('+c*c*c+'×'+d*d*d+')')+'?',hi:'बड़ा: '+N('∛('+a*a*a+'×'+b*b*b+')')+' या '+N('∛('+c*c*c+'×'+d*d*d+')')+'?'},ans:bigger,w:['Equal',v1<=v2?'∛('+a*a*a+'×'+b*b*b+')':'∛('+c*c*c+'×'+d*d*d+')','Cannot determine']}; },
],
rationalize: [
  // V1: Rationalize 1/(√a - b)
  function(){ const surds=[2,3,5,6,7,10]; const a=pick(surds); const b=rint(1,5); const denom=a-b*b; if(denom===0)return this.generate(); if(denom>0&&denom===1){const ans='√'+a+' + '+b; return {question:{en:'1/(√'+a+' − '+b+') simplifies to?',hing:'1/(√'+a+' − '+b+') simplify karo?',hi:'1/(√'+a+' − '+b+') का सरलीकरण?'},ans:ans,w:['√'+a+' − '+b,b+' + √'+a,'1/(√'+a+' + '+b+')']};} if(denom>0){const ans='(√'+a+' + '+b+')/'+denom; return {question:{en:'1/(√'+a+' − '+b+') simplifies to?',hing:'1/(√'+a+' − '+b+') simplify karo?',hi:'1/(√'+a+' − '+b+') का सरलीकरण?'},ans:ans,w:['(√'+a+' − '+b+')/'+denom,'√'+a+' + '+b,'(b+√'+a+')/'+denom]};} const absD=Math.abs(denom); const ans='('+b+' + √'+a+')/'+absD; return {question:{en:'1/(√'+a+' − '+b+') simplifies to?',hing:'1/(√'+a+' − '+b+') simplify karo?',hi:'1/(√'+a+' − '+b+') का सरलीकरण?'},ans:ans,w:['(√'+a+' + '+b+')/'+absD,b+' + √'+a,'('+b+' − √'+a+')/'+absD]}; },
  // V2: Rationalize a/(√b + c)
  function(){ const surds=[2,3,5,6,7]; const b=pick(surds); const c=rint(1,4); const a=rint(1,5); const denom=b-c*c; if(denom===0)return this.generate(); if(denom>0&&denom===1){const ans=a+'(√'+b+' − '+c+')'; return {question:{en:a+'/(√'+b+' + '+c+') simplifies to?',hing:a+'/(√'+b+' + '+c+') simplify karo?',hi:a+'/(√'+b+' + '+c+') का सरलीकरण?'},ans:ans,w:[a+'(√'+b+' + '+c+')',a+'('+c+' − √'+b+')',a+'/(√'+b+' − '+c+')']};} if(denom>0){const ans=a+'(√'+b+' − '+c+')/'+denom; return {question:{en:a+'/(√'+b+' + '+c+') simplifies to?',hing:a+'/(√'+b+' + '+c+') simplify karo?',hi:a+'/(√'+b+' + '+c+') का सरलीकरण?'},ans:ans,w:[a+'(√'+b+' + '+c+')/'+denom,a+'√'+b+' − '+a*c,a+'('+c+' − √'+b+')/'+denom]};} return this.generate(); },
  // V3: Rationalize (√a)/(√b)
  function(){ const a=rint(2,20),b=rint(2,10); if(b%a===0){const ans='√'+(b/a); return {question:{en:N('√'+a+' ÷ '+b)+' simplified = ?',hing:N('√'+a+' ÷ '+b)+' simplified = ?',hi:N('√'+a+' ÷ '+b)+' सरलीकृत = ?'},ans:ans,w:['√'+a+' ÷ '+b,String(a/b),'√'+(a*b)]};} const ans='√'+a+'/√'+b; return {question:{en:N('√'+a+' ÷ '+b)+' = ?',hing:N('√'+a+' ÷ '+b)+' = ?',hi:N('√'+a+' ÷ '+b)+' = ?'},ans:ans,w:['√'+(a/b),String(a/b),'√'+(a*b)]}; },
  // V4: Rationalize denominator of fraction
  function(){ const surds=[2,3,5]; const a=pick(surds); const ans='√'+a+'/'+a; const w=['1/√'+a,String(1/a),'√'+a+'/'+(a*a)]; return {question:{en:'Rationalize 1/√'+a+':',hing:'1/√'+a+' rationalize karo:',hi:'1/√'+a+' परिमेयकृत करें:'},ans:ans,w:w}; },
  // V5: Verify rationalization result
  function(){ const surds=[2,3,5,7]; const a=pick(surds); const b=1; const ans='√'+a+' − '+b; return {question:{en:'1/(√'+a+' + 1) × (√'+a+' − 1)/(√'+a+' − 1) = ?',hing:'1/(√'+a+' + 1) × (√'+a+' − 1)/(√'+a+' − 1) = ?',hi:'1/(√'+a+' + 1) × (√'+a+' − 1)/(√'+a+' − 1) = ?'},ans:ans,w:['√'+a+' + 1','1/(√'+a+' − 1)','(√'+a+' − 1)/'+(a-1)]}; },
],
triplet_id: [
  // V1: Which IS a Pythagorean triplet?
  function(){ const t=pick([[3,4,5],[5,12,13],[8,15,17],[7,24,25],[6,8,10]]); const k=rint(1,3); const ans=[t[0]*k,t[1]*k,t[2]*k].join(', '); const w1=[t[0]*k+1,t[1]*k,t[2]*k].join(', '); const w2=[t[0]*k,t[1]*k+1,t[2]*k].join(', '); const w3=[t[0]*k,t[1]*k,t[2]*k+1].join(', '); return {question:{en:'Which is a Pythagorean triplet?',hing:'Kaunsa Pythagorean triplet hai?',hi:'कौन सा पाइथागोरस त्रिक है?'},ans:ans,w:[w1,w2,w3]}; },
  // V2: Find the missing number in triplet
  function(){ const t=pick([[3,4,5],[5,12,13],[8,15,17],[6,8,10]]); const k=rint(1,2); const missing=rint(0,2); const ans=t[missing]*k; const vals=t.map(x=>x*k); const display=vals.map((v,i)=>i===missing?'?':v).join(', '); const w=[ans+1,ans-1>0?ans-1:ans+2,ans+2]; return {question:{en:'Complete triplet: ['+display+']',hing:'Triplet complete karo: ['+display+']',hi:'त्रिक पूर्ण करें: ['+display+']'},ans:String(ans),w:w.map(String)}; },
  // V3: Verify if triplet is valid
  function(){ const t=pick([[3,4,5],[5,12,13],[8,15,17]]); const k=rint(1,2); const ans='Yes'; const w=['No','Only for integer sides','Depends on units']; return {question:{en:'Is '+[t[0]*k,t[1]*k,t[2]*k].join(', ')+' a valid Pythagorean triplet?',hing:'Kya '+[t[0]*k,t[1]*k,t[2]*k].join(', ')+' valid Pythagorean triplet hai?',hi:'क्या '+[t[0]*k,t[1]*k,t[2]*k].join(', ')+' वैध पाइथागोरस त्रिक है?'},ans:ans,w:w}; },
  // V4: Generate triplet from m,n rule
  function(){ const m=rint(2,6),n=rint(1,m-1); const a=m*m-n*n,b=2*m*n,c=m*m+n*n; const vals=[a,b,c].sort((x,y)=>x-y); const ans=vals.join(', '); const w1=[a+1,b,c].join(', '); const w2=[a,b+1,c].join(', '); const w3=[a,b,c+1].join(', '); return {question:{en:'Pythagorean triplet from m='+N(m)+', n='+N(n)+'?',hing:'m='+N(m)+', n='+N(n)+' se Pythagorean triplet?',hi:'m='+N(m)+', n='+N(n)+' से पाइथागोरस त्रिक?'},ans:ans,w:[w1,w2,w3]}; },
  // V5: How many primitive triplets have hypotenuse < N?
  function(){ const n=rint(2,6); const ans=n; const w=[n+1,n-1>0?n-1:n+2,2*n]; return {question:{en:'A Pythagorean triplet has legs '+N(3*n)+' and '+N(4*n)+'. Hypotenuse?',hing:'Pythagorean triplet ki legs '+N(3*n)+' aur '+N(4*n)+'. Hypotenuse?',hi:'पाइथागोरस त्रिक की भुजाएँ '+N(3*n)+' और '+N(4*n)+'। कर्ण?'},ans:String(5*n),w:w.map(String)}; },
],

// ═══════════════════ Grad+ LEVEL ═══════════════════

nested_sq: [
  // V1: Nested root with non-integer inner part
  function(){ const m=rint(2,10),n=rint(1,m); const inner=m+n; const outer=m*n; const mS=Math.sqrt(m),nS=Math.sqrt(n); const mStr=Number.isInteger(mS)?String(mS):'√'+m; const nStr=Number.isInteger(nS)?String(nS):'√'+n; const ansStr=mStr+'+'+nStr; const w1=nStr+'+'+mStr; const w2='√'+inner; const w3=String(inner); return {question:{en:N('√['+inner+'+2√'+outer+']')+' = ?',hing:N('√['+inner+'+2√'+outer+']')+' = ?',hi:N('√['+inner+'+2√'+outer+']')+' = ?'},ans:ansStr,w:[w1===ansStr?'1':w1,w2,w3]}; },
  // V2: Verify nested root decomposition
  function(){ const m=rint(2,8),n=rint(1,m); const inner=m+n; const outer=m*n; const ans='(√'+m+'+√'+n+')²'; const w=['(√'+inner+')²','(√'+m+'−√'+n+')²',String(inner+2*Math.round(Math.sqrt(outer)))]; return {question:{en:N('√['+inner+'+2√'+outer+']')+'² = ?',hing:N('√['+inner+'+2√'+outer+']')+'² = ?',hi:N('√['+inner+'+2√'+outer+']')+'² = ?'},ans:ans,w:w}; },
  // V3: Nested root with subtraction inside
  function(){ const m=rint(3,15),n=rint(1,m-1); const inner=m-n; if(inner<=0)return this.generate(); const outer=m*n; const mS=Math.sqrt(m),nS=Math.sqrt(n); const mStr=Number.isInteger(mS)?String(mS):'√'+m; const nStr=Number.isInteger(nS)?String(nS):'√'+n; const ansStr=mStr+'−'+nStr; const w1=nStr+'−'+mStr; const w2='√'+inner; const w3=String(Math.abs(m-n)); return {question:{en:N('√['+inner+'+2√'+(m*n)+']')+' = ?',hing:N('√['+inner+'+2√'+(m*n)+']')+' = ?',hi:N('√['+inner+'+2√'+(m*n)+']')+' = ?'},ans:ansStr,w:[w1===ansStr?'√'+inner:w1,w2,w3]}; },
  // V4: Find m,n from nested root
  function(){ const m=rint(2,8),n=rint(1,m); const inner=m+n; const outer=m*n; const ans='m='+m+', n='+n; const w=['m='+n+', n='+m,'m='+(m+1)+', n='+(n-1>0?n-1:1),'m='+(m-1>0?m-1:1)+', n='+(n+1)]; return {question:{en:N('√['+inner+'+2√'+outer+']')+' = √m + √n. Find m, n.',hing:N('√['+inner+'+2√'+outer+']')+' = √m + √n. m, n find karo.',hi:N('√['+inner+'+2√'+outer+']')+' = √m + √n। m, n ज्ञात कीजिए।'},ans:ans,w:w}; },
  // V5: Nested root squared equals what?
  function(){ const m=rint(2,8),n=rint(1,m); const inner=m+n; const outer=m*n; const ans=inner+'+2√'+outer; const w=[inner+'−2√'+outer,String(inner),inner+'+√'+outer]; return {question:{en:'If '+N('√x')+' = '+N('√['+inner+'+2√'+outer+']')+', then x = ?',hing:'Agar '+N('√x')+' = '+N('√['+inner+'+2√'+outer+']')+', to x = ?',hi:'यदि '+N('√x')+' = '+N('√['+inner+'+2√'+outer+']')+', तो x = ?'},ans:ans,w:w}; },
],
double_nested: [
  // V1: Different m,n values
  function(){ const m=rint(2,20),n=rint(1,m); const a=m+n, b=m*n; const ansVal=2*Math.sqrt(m); let ansStr; if(Number.isInteger(Math.sqrt(m)))ansStr=String(2*Math.floor(Math.sqrt(m))); else ansStr='2√'+m; let w1='2√'+n,w2='√'+(2*m),w3='√'+(m+n); if(w1===ansStr)w1='√'+(2*n); if(w2===ansStr)w2='√'+(m*n); if(w3===ansStr)w3=String(m+n); return {question:{en:N('√['+a+'+2√'+b+'] + √['+a+'−2√'+b+']')+' = ?',hing:N('√['+a+'+2√'+b+'] + √['+a+'−2√'+b+']')+' = ?',hi:N('√['+a+'+2√'+b+'] + √['+a+'−2√'+b+']')+' = ?'},ans:ansStr,w:[w1,w2,w3]}; },
  // V2: Sum and difference separately
  function(){ const m=rint(2,15),n=rint(1,m); const a=m+n, b=m*n; const mS=Math.sqrt(m), nS=Math.sqrt(n); const sumVal=mS+nS, diffVal=mS-nS>0?mS-nS:nS-mS; const ans=Number.isInteger(sumVal)?String(sumVal):'√'+m+'+√'+n; const w=[Number.isInteger(diffVal)?String(diffVal):'√'+m+'−√'+n,String(2*mS),String(m+n)]; return {question:{en:N('√['+a+'+2√'+b+']')+' = ?',hing:N('√['+a+'+2√'+b+']')+' = ?',hi:N('√['+a+'+2√'+b+']')+' = ?'},ans:ans,w:w}; },
  // V3: What is the difference?
  function(){ const m=rint(2,15),n=rint(1,m); const a=m+n, b=m*n; const diffVal=2*Math.sqrt(n); let ansStr; if(Number.isInteger(Math.sqrt(n)))ansStr=String(2*Math.floor(Math.sqrt(n))); else ansStr='2√'+n; let w1='2√'+m,w2='√'+(2*n),w3=String(Math.abs(m-n)); if(w1===ansStr)w1='√'+(2*m); return {question:{en:N('√['+a+'+2√'+b+'] − √['+a+'−2√'+b+']')+' = ?',hing:N('√['+a+'+2√'+b+'] − √['+a+'−2√'+b+']')+' = ?',hi:N('√['+a+'+2√'+b+'] − √['+a+'−2√'+b+']')+' = ?'},ans:ansStr,w:[w1,w2,w3]}; },
  // V4: Square of double nested result
  function(){ const m=rint(1,12),n=rint(1,m); const a=m+n, b=m*n; const ans=4*m; const w=[4*n,2*(m+n),m+n]; return {question:{en:N('(√['+a+'+2√'+b+'] + √['+a+'−2√'+b+'])²')+' = ?',hing:N('(√['+a+'+2√'+b+'] + √['+a+'−2√'+b+'])²')+' = ?',hi:N('(√['+a+'+2√'+b+'] + √['+a+'−2√'+b+'])²')+' = ?'},ans:String(ans),w:w.map(String)}; },
  // V5: Product of the two nested roots
  function(){ const m=rint(2,15),n=rint(1,m); const a=m+n, b=m*n; const inner=a*a-4*b; const ansStr=Number.isInteger(Math.sqrt(inner))?'√'+inner:'√'+inner; const w=[String(a),String(a-2),String(m-n>0?m-n:n-m)]; return {question:{en:N('√['+a+'+2√'+b+']')+' × '+N('√['+a+'−2√'+b+']')+' = ?',hing:N('√['+a+'+2√'+b+']')+' × '+N('√['+a+'−2√'+b+']')+' = ?',hi:N('√['+a+'+2√'+b+']')+' × '+N('√['+a+'−2√'+b+']')+' = ?'},ans:ansStr,w:w}; },
],
inf_nested: [
  // V1: Different starting value
  function(){ const ans=rint(2,40); const n=ans*ans-ans; const w=[ans+2,ans-1>0?ans-1:ans+3,ans+1]; return {question:{en:N('√('+n+'+√('+n+'+...))')+' = ?',hing:N('√('+n+'+√('+n+'+...))')+' = ?',hi:N('√('+n+'+√('+n+'+...))')+' = ?'},ans:String(ans),w:w.map(String)}; },
  // V2: Cube root infinite nested
  function(){ const ans=rint(2,10); const n=ans*ans*ans-ans; const w=[ans+1,ans-1>0?ans-1:ans+2,ans+2]; return {question:{en:N('∛('+n+'+∛('+n+'+...))')+' = ?',hing:N('∛('+n+'+∛('+n+'+...))')+' = ?',hi:N('∛('+n+'+∛('+n+'+...))')+' = ?'},ans:String(ans),w:w.map(String)}; },
  // V3: Find n given the answer
  function(){ const ans=rint(3,25); const n=ans*ans-ans; const w=[n+1,n-1>0?n-1:n+2,n+ans]; return {question:{en:'If '+N('√(n+√(n+...))')+' = '+N(ans)+', find n.',hing:'Agar '+N('√(n+√(n+...))')+' = '+N(ans)+', to n?',hi:'यदि '+N('√(n+√(n+...))')+' = '+N(ans)+', n ज्ञात कीजिए।'},ans:String(n),w:w.map(String)}; },
  // V4: Two-step verification
  function(){ const ans=rint(3,20); const n=ans*ans-ans; const w=[ans*ans,ans+ans,n+ans]; return {question:{en:N('√('+n+'+√('+n+'+...))')+'² = ?',hing:N('√('+n+'+√('+n+'+...))')+'² = ?',hi:N('√('+n+'+√('+n+'+...))')+'² = ?'},ans:String(ans*ans),w:w.map(String)}; },
  // V5: Compare two infinite radicals
  function(){ const a=rint(2,15),b=rint(2,15); if(a===b)return this.generate(); const va=a+1, vb=b+1; const ans=va>vb?'√('+(a*a-a)+'+...)':'√('+(b*b-b)+'+...)'; const w=[va<=vb?'√('+(a*a-a)+'+...)':'√('+(b*b-b)+'+...)','Equal','Cannot compare']; return {question:{en:'Greater: '+N('√('+(a*a-a)+'+...)')+' or '+N('√('+(b*b-b)+'+...)')+'?',hing:'Bada: '+N('√('+(a*a-a)+'+...)')+' ya '+N('√('+(b*b-b)+'+...)')+'?',hi:'बड़ा: '+N('√('+(a*a-a)+'+...)')+' या '+N('√('+(b*b-b)+'+...)')+'?'},ans:ans,w:w}; },
],
complex_nested_diff: [
  // V1: Different m,n range
  function(){ const m=rint(3,25),n=rint(1,m-1); const a=m+n, b=m*n; let ansStr; const nS=Math.sqrt(n); if(Number.isInteger(nS))ansStr='2·'+Math.floor(nS); else ansStr='2√'+n; const w1='2√'+m,w2='√'+m+'−√'+n,w3='2'; return {question:{en:N('√['+a+'+2√'+b+'] − √['+a+'−2√'+b+']')+' = ?',hing:N('√['+a+'+2√'+b+'] − √['+a+'−2√'+b+']')+' = ?',hi:N('√['+a+'+2√'+b+'] − √['+a+'−2√'+b+']')+' = ?'},ans:ansStr,w:[w1,w2,w3]}; },
  // V2: Find m,n from difference
  function(){ const n=rint(2,9); const nS=Math.sqrt(n); const diffStr=Number.isInteger(nS)?String(2*Math.floor(nS)):'2√'+n; const m=n+2; const a=m+n, b=m*n; const w=['2√'+m,'√'+m+'−√'+n,'2']; return {question:{en:N('√['+a+'+2√'+b+'] − √['+a+'−2√'+b+']')+' = '+N(diffStr)+'. Find n.',hing:N('√['+a+'+2√'+b+'] − √['+a+'−2√'+b+']')+' = '+N(diffStr)+'. n?',hi:N('√['+a+'+2√'+b+'] − √['+a+'−2√'+b+']')+' = '+N(diffStr)+'। n?'},ans:String(n),w:w.map(String)}; },
  // V3: Square the difference
  function(){ const m=rint(3,15),n=rint(1,m-1); const a=m+n, b=m*n; const ans=4*n; const w=[4*m,(m-n)*(m-n),2*n]; return {question:{en:N('(√['+a+'+2√'+b+'] − √['+a+'−2√'+b+'])²')+' = ?',hing:N('(√['+a+'+2√'+b+'] − √['+a+'−2√'+b+'])²')+' = ?',hi:N('(√['+a+'+2√'+b+'] − √['+a+'−2√'+b+'])²')+' = ?'},ans:String(ans),w:w.map(String)}; },
  // V4: When is the difference an integer?
  function(){ const n=rint(1,5); const nS=Math.sqrt(n); const ans=Number.isInteger(nS)?'Yes':'No'; const w=[Number.isInteger(nS)?'No':'Yes','Always','Never']; return {question:{en:'Can '+N('√[a+2√b] − √[a−2√b]')+' be an integer?',hing:'Kya '+N('√[a+2√b] − √[a−2√b]')+' integer ho sakta hai?',hi:'क्या '+N('√[a+2√b] − √[a−2√b]')+' पूर्णांक हो सकता है?'},ans:ans,w:w}; },
  // V5: Sum + difference
  function(){ const m=rint(2,10),n=rint(1,m); const a=m+n, b=m*n; const sumAns=Number.isInteger(Math.sqrt(m))?String(2*Math.floor(Math.sqrt(m))):'2√'+m; const diffAns=Number.isInteger(Math.sqrt(n))?String(2*Math.floor(Math.sqrt(n))):'2√'+n; const w=['2√'+(m+n),String(2*Math.sqrt(m+n)),sumAns]; return {question:{en:'Sum and difference of '+N('√['+a+'+2√'+b+']')+' and '+N('√['+a+'−2√'+b+')')+' = ?',hing:N('√['+a+'+2√'+b+']')+' aur '+N('√['+a+'−2√'+b+']')+' ka sum + diff = ?',hi:N('√['+a+'+2√'+b+']')+' और '+N('√['+a+'−2√'+b+']')+' का योग + अंतर = ?'},ans:sumAns+' + '+diffAns,w:w}; },
],
complex_surd_sum: [
  // V1: Different a,b values
  function(){ for(let attempt=0;attempt<50;attempt++){const b=rint(2,30); const d=rint(1,15); if((4*b)%d!==0)continue; const a=b+d; const ans=4*b/d+2; if(ans<=0)continue; const w=[ans+2,ans-2>0?ans-2:ans+4,ans+4]; return {question:{en:N('(√'+a+'+√'+b+')/(√'+a+'−√'+b+') + (√'+a+'−√'+b+')/(√'+a+'+√'+b+')')+' = ?',hing:N('(√'+a+'+√'+b+')/(√'+a+'−√'+b+') + (√'+a+'−√'+b+')/(√'+a+'+√'+b+')')+' = ?',hi:N('(√'+a+'+√'+b+')/(√'+a+'−√'+b+') + (√'+a+'−√'+b+')/(√'+a+'+√'+b+')')+' = ?'},ans:String(ans),w:w.map(String)};} return this.generate(); },
  // V2: With specific numbers
  function(){ const a=5,b=3; const ans=10; const w=['8','12','6']; return {question:{en:N('(√5+√3)/(√5−√3) + (√5−√3)/(√5+√3)')+' = ?',hing:N('(√5+√3)/(√5−√3) + (√5−√3)/(√5+√3)')+' = ?',hi:N('(√5+√3)/(√5−√3) + (√5−√3)/(√5+√3)')+' = ?'},ans:String(ans),w:w}; },
  // V3: General formula for (√a+√b)²/(a-b) + (√a-√b)²/(a-b)
  function(){ const a=rint(3,20),b=rint(2,a-1); const ans=2*(a+b)/(a-b); const w=[2*(a-b)/(a+b),(a+b)/(a-b),2]; const numStr='[(√'+a+'+√'+b+')² + (√'+a+'−√'+b+')²]'; const qStr=numStr+' ÷ '+(a-b)+' = ?'; return {question:{en:N(qStr),hing:N(qStr),hi:N(qStr)},ans:String(ans),w:w.map(String)}; },
  // V4: Verify the identity
  function(){ const a=7,b=3; const ans=10; const w=['7','14','5']; return {question:{en:N('(√7+√3)/(√7−√3) + (√7−√3)/(√7+√3)')+' = ?',hing:N('(√7+√3)/(√7−√3) + (√7−√3)/(√7+√3)')+' = ?',hi:N('(√7+√3)/(√7−√3) + (√7−√3)/(√7+√3)')+' = ?'},ans:String(ans),w:w}; },
  // V5: Pattern recognition
  function(){ const ans='2(a+b)/(a-b)'; const w=['2(a-b)/(a+b)','(a+b)/(a-b)','2']; return {question:{en:'General formula for (√a+√b)/(√a−√b) + (√a−√b)/(√a+√b):',hing:'(√a+√b)/(√a−√b) + (√a−√b)/(√a+√b) ka formula:',hi:'(√a+√b)/(√a−√b) + (√a−√b)/(√a+√b) का सूत्र:'},ans:ans,w:w}; },
],
inf_eq: [
  // V1: Different x value
  function(){ const ans=rint(2,15); const x=ans*ans-ans; const w=[x+2,x-1>0?x-1:x+3,x+5]; return {question:{en:N('√(x+√(x+...))')+' = '+N(ans)+'. x=?',hing:N('√(x+√(x+...))')+' = '+N(ans)+'. x=?',hi:N('√(x+√(x+...))')+' = '+N(ans)+'। x=?'},ans:String(x),w:w.map(String)}; },
  // V2: Cube root version
  function(){ const ans=rint(2,8); const x=ans*ans*ans-ans; const w=[x+2,x-1>0?x-1:x+3,x+5]; return {question:{en:N('∛(x+∛(x+...))')+' = '+N(ans)+'. x=?',hing:N('∛(x+∛(x+...))')+' = '+N(ans)+'. x=?',hi:N('∛(x+∛(x+...))')+' = '+N(ans)+'। x=?'},ans:String(x),w:w.map(String)}; },
  // V3: Given x, find the value
  function(){ const ans=rint(3,15); const x=ans*ans-ans; const w=[ans+1,ans-1>0?ans-1:ans+2,ans+2]; return {question:{en:'If x = '+N(x)+', '+N('√(x+√(x+...))')+' = ?',hing:'Agar x = '+N(x)+', '+N('√(x+√(x+...))')+' = ?',hi:'यदि x = '+N(x)+', '+N('√(x+√(x+...))')+' = ?'},ans:String(ans),w:w.map(String)}; },
  // V4: Solve x² + x = n
  function(){ const ans=rint(2,12); const n=ans*ans+ans; const w=[ans+1,ans-1>0?ans-1:ans+2,n]; return {question:{en:'If '+N('x²')+' + x = '+N(n)+', find x.',hing:'Agar '+N('x²')+' + x = '+N(n)+', x = ?',hi:'यदि '+N('x²')+' + x = '+N(n)+', x = ?'},ans:String(ans),w:w.map(String)}; },
  // V5: Verify solution
  function(){ const ans=rint(3,12); const x=ans*ans-ans; const w=[x+ans,x-ans>0?x-ans:x+2*ans,ans*ans]; return {question:{en:N('√('+x+'+√('+x+'+...))')+' = '+N(ans)+'. Verify x = '+N(x)+'. x + ans = ?',hing:N('√('+x+'+√('+x+'+...))')+' = '+N(ans)+'. Verify karo. x + ans = ?',hi:N('√('+x+'+√('+x+'+...))')+' = '+N(ans)+'। सत्यापित करें। x + ans = ?'},ans:String(x+ans),w:w.map(String)}; },
],
cb_identity: [
  // V1: Different p,q values
  function(){ const cVals=[2,3,5,6,7]; const p=rint(1,6), q=rint(1,3); const c=pick(cVals); const a=p*p*p+3*p*q*q*c; const b=3*p*p*q+q*q*q*c; const ans=2*p; const wRaw=[ans-1,ans+1,ans+2,ans-2,ans+3]; const w=wRaw.filter(x=>x>0&&x!==ans).slice(0,3); return {question:{en:N('∛('+a+'+'+b+'√'+c+') + ∛('+a+'−'+b+'√'+c+')')+' = ?',hing:N('∛('+a+'+'+b+'√'+c+') + ∛('+a+'−'+b+'√'+c+')')+' = ?',hi:N('∛('+a+'+'+b+'√'+c+') + ∛('+a+'−'+b+'√'+c+')')+' = ?'},ans:String(ans),w:w.map(String)}; },
  // V2: Specific example
  function(){ const a=2,b=3,c=2; const p=1; const ans=2; const w=['0','3','4']; return {question:{en:N('∛(2+3√2) + ∛(2−3√2)')+' = ?',hing:N('∛(2+3√2) + ∛(2−3√2)')+' = ?',hi:N('∛(2+3√2) + ∛(2−3√2)')+' = ?'},ans:String(ans),w:w}; },
  // V3: Find p from result
  function(){ const cVals=[2,3,5]; const p=rint(2,5), q=1; const c=pick(cVals); const a=p*p*p+3*p*q*q*c; const b=3*p*p*q+q*q*q*c; const ans=p; const w=[p+1,p-1>0?p-1:p+2,p+2]; return {question:{en:N('∛('+a+'+'+b+'√'+c+') + ∛('+a+'−'+b+'√'+c+')')+' = '+N(2*p)+'. Find p.',hing:N('∛('+a+'+'+b+'√'+c+') + ∛('+a+'−'+b+'√'+c+')')+' = '+N(2*p)+'. p?',hi:N('∛('+a+'+'+b+'√'+c+') + ∛('+a+'−'+b+'√'+c+')')+' = '+N(2*p)+'। p?'},ans:String(p),w:w.map(String)}; },
  // V4: Verify identity
  function(){ const cVals=[2,3]; const p=2,q=1; const c=pick(cVals); const a=8+12*c; const b=12+2*c; const ans=4; const w=['2','6','8']; return {question:{en:'Verify: '+N('∛('+a+'+'+b+'√'+c+') + ∛('+a+'−'+b+'√'+c+')')+' = ?',hing:'Verify karo: '+N('∛('+a+'+'+b+'√'+c+') + ∛('+a+'−'+b+'√'+c+')')+' = ?',hi:'सत्यापित करें: '+N('∛('+a+'+'+b+'√'+c+') + ∛('+a+'−'+b+'√'+c+')')+' = ?'},ans:String(ans),w:w}; },
  // V5: Cube of result
  function(){ const cVals=[2,3,5]; const p=rint(1,4), q=1; const c=pick(cVals); const a=p*p*p+3*p*q*q*c; const b=3*p*p*q+q*q*q*c; const ans=8*p*p*p+6*p*3*p*q*q*c; const w=[ans+2,ans-2>0?ans-2:ans+4,ans+10]; return {question:{en:N('[∛('+a+'+'+b+'√'+c+') + ∛('+a+'−'+b+'√'+c+')]³')+' = ?',hing:N('[∛('+a+'+'+b+'√'+c+') + ∛('+a+'−'+b+'√'+c+')]³')+' = ?',hi:N('[∛('+a+'+'+b+'√'+c+') + ∛('+a+'−'+b+'√'+c+')]³')+' = ?'},ans:String(ans),w:w.map(String)}; },
],
system_roots: [
  // V1: Different rx,ry range
  function(){ const rx=rint(1,15), ry=rint(1,15); const x0=rx*rx, y0=ry*ry; const m=rx+y0, n=x0+ry; const ans=x0*y0; const w=[ans+12,ans-12>0?ans-12:1,ans+24]; return {question:{en:N('√x+y='+m)+', '+N('x+√y='+n)+'. xy=?',hing:N('√x+y='+m)+', '+N('x+√y='+n)+'. xy=?',hi:N('√x+y='+m)+', '+N('x+√y='+n)+'। xy=?'},ans:String(ans),w:w.map(String)}; },
  // V2: Find x and y separately
  function(){ const rx=rint(1,10), ry=rint(1,10); const x0=rx*rx, y0=ry*ry; const m=rx+y0, n=x0+ry; const w1=[x0+1,y0]; const w2=[x0,y0+1]; const w3=[x0+1,y0+1]; return {question:{en:N('√x+y='+m)+', '+N('x+√y='+n)+'. x = ?',hing:N('√x+y='+m)+', '+N('x+√y='+n)+'. x = ?',hi:N('√x+y='+m)+', '+N('x+√y='+n)+'। x = ?'},ans:String(x0),w:[String(x0+1),String(x0-1>0?x0-1:x0+2),String(rx)]}; },
  // V3: Find y
  function(){ const rx=rint(1,10), ry=rint(1,10); const x0=rx*rx, y0=ry*ry; const m=rx+y0, n=x0+ry; return {question:{en:N('√x+y='+m)+', '+N('x+√y='+n)+'. y = ?',hing:N('√x+y='+m)+', '+N('x+√y='+n)+'. y = ?',hi:N('√x+y='+m)+', '+N('x+√y='+n)+'। y = ?'},ans:String(y0),w:[String(y0+1),String(y0-1>0?y0-1:y0+2),String(ry)]}; },
  // V4: Sum x+y
  function(){ const rx=rint(1,12), ry=rint(1,12); const x0=rx*rx, y0=ry*ry; const m=rx+y0, n=x0+ry; const ans=x0+y0; const w=[ans+1,ans-1>0?ans-1:ans+2,m+n]; return {question:{en:N('√x+y='+m)+', '+N('x+√y='+n)+'. x+y=?',hing:N('√x+y='+m)+', '+N('x+√y='+n)+'. x+y=?',hi:N('√x+y='+m)+', '+N('x+√y='+n)+'। x+y=?'},ans:String(ans),w:w.map(String)}; },
  // V5: Verify the system
  function(){ const rx=4, ry=3; const x0=16, y0=9; const m=4+9, n=16+3; const ans=144; const w=['156','132','169']; return {question:{en:N('√x+y='+m)+', '+N('x+√y='+n)+'. xy=?',hing:N('√x+y='+m)+', '+N('x+√y='+n)+'. xy=?',hi:N('√x+y='+m)+', '+N('x+√y='+n)+'। xy=?'},ans:String(ans),w:w}; },
],
combined_geo: [
  // V1: Different variant
  function(){ const k=rint(2,8); const s=k*k; const area=s*s; const vol=k*k*k*k*k*k; const ans=k*k; const w=[ans+1,ans-1>0?ans-1:ans+2,ans+2]; return {question:{en:'Square Area = Cube Volume. Square side = '+N(s)+'. Cube side?',hing:'Square Area = Cube Volume. Square side '+N(s)+'. Cube side?',hi:'वर्ग क्षेत्रफल = घन आयतन। वर्ग भुजा = '+N(s)+'। घन भुजा?'},ans:String(ans),w:w.map(String)}; },
  // V2: Given cube side, find square side
  function(){ const k=rint(2,8); const cubeSide=k*k; const vol=cubeSide*cubeSide*cubeSide; const sqSide=k*k*k; const ans=sqSide; const w=[ans+1,ans-1>0?ans-1:ans+2,cubeSide]; return {question:{en:'Cube side = '+N(cubeSide)+'. Square Area = Cube Volume. Square side?',hing:'Cube side '+N(cubeSide)+'. Square Area = Cube Volume. Square side?',hi:'घन भुजा = '+N(cubeSide)+'। वर्ग क्षेत्रफल = घन आयतन। वर्ग भुजा?'},ans:String(ans),w:w.map(String)}; },
  // V3: Different relationship
  function(){ const k=rint(2,6); const s=k*k; const cubeVol=k*k*k; const sqArea=s*s; const ans=k; const w=[k+1,k-1>0?k-1:k+2,2*k]; return {question:{en:'Square side = '+N(s)+'. Cube side = '+N(k)+'. Square Area / Cube Volume = ?',hing:'Square side '+N(s)+'. Cube side '+N(k)+'. Square Area / Cube Volume = ?',hi:'वर्ग भुजा = '+N(s)+'। घन भुजा = '+N(k)+'। वर्ग क्षेत्रफल / घन आयतन = ?'},ans:'1',w:['2','k','k²']}; },
  // V4: Rectangle and cube relationship
  function(){ const l=rint(2,6),w=rint(2,6); const rectArea=l*w; const cubeSide=rint(2,6); const cubeVol=cubeSide*cubeSide*cubeSide; if(rectArea!==cubeVol)return this.generate(); const ans=cubeSide; const wOpts=[ans+1,ans-1>0?ans-1:ans+2,l+w]; return {question:{en:'Rectangle '+N(l)+'×'+N(w)+' area = Cube volume. Cube side = '+N(cubeSide)+'. Verify.',hing:'Rectangle '+N(l)+'×'+N(w)+' area = Cube volume. Cube side '+N(cubeSide)+'. Verify.',hi:'आयत '+N(l)+'×'+N(w)+' क्षेत्रफल = घन आयतन। घन भुजा = '+N(cubeSide)+'। सत्यापित।'},ans:String(ans),w:wOpts.map(String)}; },
  // V5: Find ratio
  function(){ const k=rint(2,5); const sqSide=k*k*k; const cubeSide=k*k; const ans=k; const w=[k+1,k-1>0?k-1:k+2,2*k]; return {question:{en:'Square side : Cube side = '+N(sqSide)+' : '+N(cubeSide)+'. Ratio = ?',hing:'Square side : Cube side = '+N(sqSide)+' : '+N(cubeSide)+'. Ratio = ?',hi:'वर्ग भुजा : घन भुजा = '+N(sqSide)+' : '+N(cubeSide)+'। अनुपात = ?'},ans:String(k),w:w.map(String)}; },
],
opt_min: [
  // V1: Different c values
  function(){ const c=rint(1,30); const sqrtC=Math.sqrt(c); let ansStr; if(Number.isInteger(sqrtC))ansStr='2·'+Math.floor(sqrtC); else ansStr='2√'+c; const w=['√'+c,String(c),ansStr==='2'?'3':'2']; return {question:{en:'Minimum value of x + '+c+'/x (x > 0)?',hing:'x + '+c+'/x (x > 0) ki minimum value?',hi:'x + '+c+'/x (x > 0) का न्यूनतम मान?'},ans:ansStr,w:w}; },
  // V2: x + k/x² form
  function(){ const n=rint(1,6); const k=4*n*n*n; const ans=3*n; const w=[ans+1,ans-1>0?ans-1:ans+2,ans+2]; return {question:{en:'Minimum of x + '+k+'/x² (x > 0)?',hing:'x + '+k+'/x² (x > 0) ki minimum value?',hi:'x + '+k+'/x² (x > 0) का न्यूनतम मान?'},ans:String(ans),w:w.map(String)}; },
  // V3: Using AM-GM for three terms
  function(){ const n=rint(1,4); const k=27*n*n*n*n; const ans=4*n; const w=[ans+1,ans-1>0?ans-1:ans+2,ans+2]; return {question:{en:'Minimum of x + '+k+'/x³ (x > 0)?',hing:'x + '+k+'/x³ (x > 0) ki minimum value?',hi:'x + '+k+'/x³ (x > 0) का न्यूनतम मान?'},ans:String(ans),w:w.map(String)}; },
  // V4: Find c given minimum
  function(){ const n=rint(2,8); const minVal=2*n; const c=n*n; const w=[(n+1)*(n+1),(n-1)*(n-1),n*n+2*n]; return {question:{en:'If min of x + c/x is '+N(minVal)+', find c.',hing:'Agar x + c/x ki minimum '+N(minVal)+' hai, to c?',hi:'यदि x + c/x का न्यूनतम '+N(minVal)+' है, तो c?'},ans:String(c),w:w.map(String)}; },
  // V5: Compare two minima
  function(){ const c1=rint(4,25),c2=rint(4,25); const m1=Math.sqrt(c1),m2=Math.sqrt(c2); let s1,s2; if(Number.isInteger(m1))s1=String(2*m1); else s1='2√'+c1; if(Number.isInteger(m2))s2=String(2*m2); else s2='2√'+c2; const ans=m1>m2?'x+'+c1+'/x':'x+'+c2+'/x'; const wrong3=m1<=m2?'x+'+c1+'/x':'x+'+c2+'/x'; return {question:{en:'Which has larger minimum: x+'+c1+'/x or x+'+c2+'/x?',hing:'Kis ki minimum badi: x+'+c1+'/x ya x+'+c2+'/x?',hi:'किसका न्यूनतम बड़ा: x+'+c1+'/x या x+'+c2+'/x?'},ans:ans,w:['Equal','Cannot determine',wrong3]}; },
],
cont_frac: [
  // V1: Different a values
  function(){ const a=rint(1,25); const disc=a*a+4; const sqrtDisc=Math.sqrt(disc); let ansStr; if(Number.isInteger(sqrtDisc)){const num=a+Math.floor(sqrtDisc); if(num%2===0)ansStr=String(num/2); else ansStr='('+num+')/2';} else {ansStr='('+a+'+√'+disc+')/2';} const w1='√'+disc,w2=String(a+1),w3='('+a+'+√'+(disc+4)+')/2'; return {question:{en:'x = '+a+' + 1/('+a+'+1/('+a+'+...)). x = ?',hing:'x = '+a+' + 1/('+a+'+1/('+a+'+...)). x = ?',hi:'x = '+a+' + 1/('+a+'+1/('+a+'+...))। x = ?'},ans:ansStr,w:[w1,w2,w3]}; },
  // V2: Verify by substituting back
  function(){ const a=1; const ans='(1+√5)/2'; const w=['√5','2','(1+√5)/4']; return {question:{en:'x = 1 + 1/(1+1/(1+...)). x = ?',hing:'x = 1 + 1/(1+1/(1+...)). x = ?',hi:'x = 1 + 1/(1+1/(1+...))। x = ?'},ans:ans,w:w}; },
  // V3: Solve x² - ax - 1 = 0
  function(){ const a=rint(2,10); const disc=a*a+4; const ans='('+a+'+√'+disc+')/2'; const w1='('+a+'−√'+disc+')/2',w2='√'+disc,w3=String(a); return {question:{en:N('x² − '+a+'x − 1 = 0')+' (positive root). x = ?',hing:N('x² − '+a+'x − 1 = 0')+' (positive root). x = ?',hi:N('x² − '+a+'x − 1 = 0')+' (धनात्मक मूल)। x = ?'},ans:ans,w:[w1,w2,w3]}; },
  // V4: Find a from x
  function(){ const a=rint(2,8); const disc=a*a+4; const xStr='('+a+'+√'+disc+')/2'; const w=[a+1,a-1>0?a-1:a+2,a+2]; return {question:{en:'If x = '+a+' + 1/(x), find x−1/x.',hing:'Agar x = '+a+' + 1/(x), to x−1/x?',hi:'यदि x = '+a+' + 1/(x), तो x−1/x?'},ans:String(a),w:w.map(String)}; },
  // V5: Continued fraction equals quadratic
  function(){ const a=rint(2,10); const ans=a; const w=[a+1,a-1>0?a-1:a+2,2*a]; return {question:{en:'x = '+a+' + 1/(x) implies x − 1/x = ?',hing:'x = '+a+' + 1/(x) matlab x − 1/x = ?',hi:'x = '+a+' + 1/(x) अर्थात x − 1/x = ?'},ans:String(ans),w:w.map(String)}; },
],
alg_identity: [
  // V1: Different identity pattern
  function(){ const a=rint(2,15),b=rint(1,a-1); const ans=a-b; return {question:{en:N('√[(a+b)² − 4ab]')+' = ? (in terms of a,b)',hing:N('√[(a+b)² − 4ab]')+' = ? (a,b mein)',hi:N('√[(a+b)² − 4ab]')+' = ? (a,b में)'},ans:'|a−b|',w:['a+b','2ab','a−b']}; },
  // V2: Specific numeric
  function(){ const a=rint(2,20),b=rint(1,a-1); const expr='('+a+'+'+b+')² − 4×'+a+'×'+b; const ans=a-b; return {question:{en:N('√['+expr+']')+' = ?',hing:N('√['+expr+']')+' = ?',hi:N('√['+expr+']')+' = ?'},ans:String(ans),w:[String(ans+2),String(ans+4),String(a+b)]}; },
  // V3: 4a² + 4a + 1 form
  function(){ const a=rint(1,15); const ans=2*a+1; return {question:{en:N('√[4×'+a+'²+4×'+a+'+1]')+' = ?',hing:N('√[4×'+a+'²+4×'+a+'+1]')+' = ?',hi:N('√[4×'+a+'²+4×'+a+'+1]')+' = ?'},ans:String(ans),w:[String(ans+2),String(ans-2),String(2*a-1)]}; },
  // V4: 9x² - 6x + 1 form
  function(){ const x=rint(1,15); const ans=3*x-1; return {question:{en:N('√[9×'+x+'²−6×'+x+'+1]')+' = ?',hing:N('√[9×'+x+'²−6×'+x+'+1]')+' = ?',hi:N('√[9×'+x+'²−6×'+x+'+1]')+' = ?'},ans:String(ans),w:[String(ans+2),String(ans-2),String(3*x+1)]}; },
  // V5: 25x² + 10x + 1 form
  function(){ const x=rint(1,15); const ans=5*x+1; return {question:{en:N('√[25×'+x+'²+10×'+x+'+1]')+' = ?',hing:N('√[25×'+x+'²+10×'+x+'+1]')+' = ?',hi:N('√[25×'+x+'²+10×'+x+'+1]')+' = ?'},ans:String(ans),w:[String(ans+2),String(ans-2),String(5*x-1)]}; },
],
complex_simp: [
  // V1: Different surd bases
  function(){ const surdBases=[2,3,5,6,7,10]; for(let attempt=0;attempt<40;attempt++){const c=pick(surdBases); const b=rint(1,4); const b2c=b*b*c; const aStart=Math.ceil(Math.sqrt(b2c))+1; const a=rint(aStart,aStart+15); const inner=a*a-b2c; if(inner<=0)continue; const k=Math.round(Math.sqrt(inner)); if(k*k!==inner||k===0)continue; const d=pick(surdBases); let ansStr; if(k===1)ansStr='√'+d; else ansStr=k+'√'+d; const wK=[k+1,k-1>0?k-1:k+2,k+2]; const wStrs=wK.map(kk=>kk===1?'√'+d:kk+'√'+d); return {question:{en:'√('+a+'+'+b+'√'+c+')×√('+a+'−'+b+'√'+c+')×√'+d+' = ?',hing:'√('+a+'+'+b+'√'+c+')×√('+a+'−'+b+'√'+c+')×√'+d+' = ?',hi:'√('+a+'+'+b+'√'+c+')×√('+a+'−'+b+'√'+c+')×√'+d+' = ?'},ans:ansStr,w:wStrs};} return {question:{en:'√(7+4√3)×√(7−4√3)×√2 = ?',hing:'√(7+4√3)×√(7−4√3)×√2 = ?',hi:'√(7+4√3)×√(7−4√3)×√2 = ?'},ans:'√2',w:['2√2','3√2','√3']}; },
  // V2: Without the extra √d factor
  function(){ const surdBases=[2,3,5]; for(let attempt=0;attempt<40;attempt++){const c=pick(surdBases); const b=rint(1,3); const b2c=b*b*c; const aStart=Math.ceil(Math.sqrt(b2c))+1; const a=rint(aStart,aStart+10); const inner=a*a-b2c; if(inner<=0)continue; const k=Math.round(Math.sqrt(inner)); if(k*k!==inner||k===0)continue; const ans=String(k); const w=[String(k+1),String(k-1>0?k-1:k+2),String(k+2)]; return {question:{en:'√('+a+'+'+b+'√'+c+')×√('+a+'−'+b+'√'+c+') = ?',hing:'√('+a+'+'+b+'√'+c+')×√('+a+'−'+b+'√'+c+') = ?',hi:'√('+a+'+'+b+'√'+c+')×√('+a+'−'+b+'√'+c+') = ?'},ans:ans,w:w};} return {question:{en:'√(7+4√3)×√(7−4√3) = ?',hing:'√(7+4√3)×√(7−4√3) = ?',hi:'√(7+4√3)×√(7−4√3) = ?'},ans:'1',w:['2','3','0']}; },
  // V3: Specific example
  function(){ return {question:{en:'√(3+2√2)×√(3−2√2) = ?',hing:'√(3+2√2)×√(3−2√2) = ?',hi:'√(3+2√2)×√(3−2√2) = ?'},ans:'1',w:['2','√2','0']}; },
  // V4: With multiplier
  function(){ return {question:{en:'2×√(3+2√2)×√(3−2√2) = ?',hing:'2×√(3+2√2)×√(3−2√2) = ?',hi:'2×√(3+2√2)×√(3−2√2) = ?'},ans:'2',w:['4','2√2','0']}; },
  // V5: Verify identity
  function(){ const a=5,b=2,c=6; return {question:{en:'Verify: √('+a+'+'+b+'√'+c+')×√('+a+'−'+b+'√'+c+') = ?',hing:'Verify karo: √('+a+'+'+b+'√'+c+')×√('+a+'−'+b+'√'+c+') = ?',hi:'सत्यापित: √('+a+'+'+b+'√'+c+')×√('+a+'−'+b+'√'+c+') = ?'},ans:'1',w:['√6','2','3']}; },
],
ratio_roots: [
  // V1: Different range
  function(){ const p=rint(1,12), q=rint(1,12), r=rint(1,12); if(p===q||q===r||p===r)return this.generate(); const a=p*p, b=q*q, c=r*r; const g=gcd(gcd(a,b),c); const ans=(a/g)+':'+(b/g)+':'+(c/g); const w1=(a+1)+':'+b+':'+c, w2=a+':'+(b+1)+':'+c, w3=p+':'+q+':'+r; return {question:{en:'If √a:√b:√c = '+p+':'+q+':'+r+', a:b:c',hing:'Agar √a:√b:√c = '+p+':'+q+':'+r+', to a:b:c',hi:'यदि √a:√b:√c = '+p+':'+q+':'+r+', तो a:b:c'},ans:ans,w:[w1,w2,w3]}; },
  // V2: Given ratio of roots, find individual values
  function(){ const p=rint(2,6),q=rint(2,6),r=rint(2,6); if(p===q||q===r)return this.generate(); const k=rint(2,5); const a=p*p*k*k,b=q*q*k*k,c=r*r*k*k; const ans=a+':'+b+':'+c; const w1=p*k+':'+q*k+':'+r*k,w2=(p*p)+':'+(q*q)+':'+(r*r),w3=p*k*k+':'+q*k*k+':'+r*k*k; return {question:{en:'√a:√b:√c = '+(p*k)+':'+(q*k)+':'+(r*k)+'. a:b:c = ?',hing:'√a:√b:√c = '+(p*k)+':'+(q*k)+':'+(r*k)+'. a:b:c = ?',hi:'√a:√b:√c = '+(p*k)+':'+(q*k)+':'+(r*k)+'। a:b:c = ?'},ans:ans,w:[w1,w2,w3]}; },
  // V3: Two values ratio
  function(){ const p=rint(2,8),q=rint(2,8); if(p===q)return this.generate(); const a=p*p,b=q*q; const g=gcd(a,b); const ans=(a/g)+':'+(b/g); const w=p+':'+q; const w2=(a+1)+':'+b; return {question:{en:'If √a:√b = '+p+':'+q+', a:b = ?',hing:'Agar √a:√b = '+p+':'+q+', to a:b = ?',hi:'यदि √a:√b = '+p+':'+q+', तो a:b = ?'},ans:ans,w:[w,w2]}; },
  // V4: Reverse — given a:b, find √a:√b
  function(){ const p=rint(2,5),q=rint(2,5); const a=p*p,b=q*q; const ans=p+':'+q; const w=[a+':'+b,(p+1)+':'+q,p+':'+(q+1)]; return {question:{en:'If a:b = '+a+':'+b+', √a:√b = ?',hing:'Agar a:b = '+a+':'+b+', √a:√b = ?',hi:'यदि a:b = '+a+':'+b+', √a:√b = ?'},ans:ans,w:w}; },
  // V5: Product in ratio
  function(){ const p=rint(2,6),q=rint(2,6); if(p===q)return this.generate(); const a=p*p,b=q*q; const ans=p*q; const w=[a*b,p+q,a+b]; return {question:{en:'If √a:√b = '+p+':'+q+', √(ab) = '+N(ans*k)+' for some k. If a = '+a+'k², √(ab) = ?',hing:'Agar √a:√b = '+p+':'+q+', √(ab) = ?',hi:'यदि √a:√b = '+p+':'+q+', √(ab) = ?'},ans:p*q+'k',w:[a*b+'k²',p+q+'k',a+b+'k²']}; },
],
adv_algebra: [
  // V1: Different k range
  function(){ const k=rint(3,20); const ans=k*k-2; const w=[k*k,k*k-4,k*k+2]; return {question:{en:'If √x + 1/√x = '+k+', find x + 1/x',hing:'Agar √x + 1/√x = '+k+', to x + 1/x find karo',hi:'यदि √x + 1/√x = '+k+', तो x + 1/x ज्ञात कीजिए'},ans:String(ans),w:w.map(String)}; },
  // V2: Cube version with different k
  function(){ const k=rint(2,10); const ans=k*k*k-3*k; const w=[k*k*k,k*k*k-2*k,k*k*k+3*k]; return {question:{en:'If ∛x + 1/∛x = '+k+', find x + 1/x',hing:'Agar ∛x + 1/∛x = '+k+', to x + 1/x find karo',hi:'यदि ∛x + 1/∛x = '+k+', तो x + 1/x ज्ञात कीजिए'},ans:String(ans),w:w.map(String)}; },
  // V3: Find √x + 1/√x from x + 1/x
  function(){ const k=rint(3,15); const val=k*k-2; const w=[k+2,k-2>0?k-2:k+4,k+1]; return {question:{en:'If x + 1/x = '+val+', find √x + 1/√x',hing:'Agar x + 1/x = '+val+', to √x + 1/√x',hi:'यदि x + 1/x = '+val+', √x + 1/√x ज्ञात कीजिए'},ans:String(k),w:w.map(String)}; },
  // V4: Find x² + 1/x²
  function(){ const k=rint(3,15); const xPlusInv=k*k-2; const ans=xPlusInv*xPlusInv-2; const w=[ans+2,ans-2>0?ans-2:ans+4,xPlusInv+2]; return {question:{en:'If √x + 1/√x = '+k+', find x² + 1/x²',hing:'Agar √x + 1/√x = '+k+', to x² + 1/x²',hi:'यदि √x + 1/√x = '+k+', तो x² + 1/x²'},ans:String(ans),w:w.map(String)}; },
  // V5: Compare √x + 1/√x and ∛x + 1/∛x
  function(){ const k=rint(3,8); const sqAns=k*k-2; const cbAns=k*k*k-3*k; const w=[String(sqAns+1),String(sqAns-1>0?sqAns-1:sqAns+2),String(cbAns+3)]; return {question:{en:'If √x + 1/√x = '+k+', then x + 1/x = '+sqAns+'. If ∛y + 1/∛y = '+k+', y + 1/y = ?',hing:'Agar √x + 1/√x = '+k+', x+1/x = '+sqAns+'. ∛y + 1/∛y = '+k+', y+1/y = ?',hi:'यदि √x + 1/√x = '+k+', x+1/x = '+sqAns+'। ∛y + 1/∛y = '+k+', y+1/y = ?'},ans:String(cbAns),w:w}; },
],
tricky_pattern: [
  // V1: Non-perfect squares between consecutive squares
  function(){ const n=rint(3,20); const lo=n*n,hi=(n+1)*(n+1); const ans=2*n; const w=[2*n-1,2*n+1,n]; return {question:{en:'How many non-perfect square numbers between '+lo+' and '+hi+'?',hing:lo+' aur '+hi+' ke beech kitni non-perfect square numbers?',hi:lo+' और '+hi+' के बीच कितनी अपूर्णवर्ग संख्याएँ?'},ans:String(ans),w:w.map(String)}; },
  // V2: Sum of first n odd numbers
  function(){ const n=rint(3,15); const ans=n*n; const w=[n*n+2,n*(n+1),n*n-2]; return {question:{en:'Sum of first '+n+' odd numbers = ?',hing:'Pehle '+n+' odd numbers ka sum = ?',hi:'प्रथम '+n+' विषम संख्याओं का योग = ?'},ans:String(ans),w:w.map(String)}; },
  // V3: Digital root of perfect square
  function(){ const n=rint(2,15); const sq=n*n; const dr=((sq-1)%9)+1; const w=[(dr+1)%9||9,(dr+2)%9||9,(dr-1+9)%9||9]; return {question:{en:'Digital root of '+sq+' is:',hing:sq+' ka digital root:',hi:sq+' का अंकीय मूल:'},ans:String(dr),w:w.map(String)}; },
  // V4: Perfect squares between two numbers
  function(){ const a=rint(3,10),b=a+rint(3,5); const lo=a*a,hi=b*b; const count=b-a-1; const w=[count+1,count-1>=0?count-1:0,count+2]; return {question:{en:'How many perfect squares between '+lo+' and '+hi+' (exclusive)?',hing:lo+' aur '+hi+' ke beech (exclusive) kitne perfect squares?',hi:lo+' और '+hi+' के बीच (विशेष) कितने पूर्ण वर्ग?'},ans:String(count),w:w.map(String)}; },
  // V5: Non-perfect cubes between consecutive cubes
  function(){ const n=rint(3,12); const lo=n*n*n,hi=(n+1)*(n+1)*(n+1); const count=3*n*n+3*n; const w=[count-1,count+1,3*n]; return {question:{en:'How many non-perfect cube numbers between '+lo+' and '+hi+'?',hing:lo+' aur '+hi+' ke beech kitni non-perfect cube numbers?',hi:lo+' और '+hi+' के बीच कितनी अपूर्णघन संख्याएँ?'},ans:String(count),w:w.map(String)}; },
],
speed_trick: [
  // V1: Last two digits of square
  function(){ const n=rint(2,30); const sq=n*n; const lastTwo=sq%100; const w=[(lastTwo+11)%100,(lastTwo+23)%100,(lastTwo+7)%100]; return {question:{en:'Last two digits of '+n+'² are:',hing:n+'² ke last two digits:',hi:n+'² के अंतिम दो अंक:'},ans:String(lastTwo),w:w.map(String)}; },
  // V2: Last two digits of cube
  function(){ const n=rint(2,15); const cb=n*n*n; const lastTwo=cb%100; const w=[(lastTwo+11)%100,(lastTwo+23)%100,(lastTwo+7)%100]; return {question:{en:'Last two digits of '+n+'³ are:',hing:n+'³ ke last two digits:',hi:n+'³ के अंतिम दो अंक:'},ans:String(lastTwo),w:w.map(String)}; },
  // V3: Number of digits in square
  function(){ const n=rint(10,99); const sq=n*n; const digits=Math.floor(Math.log10(sq))+1; const w=[digits-1>0?digits-1:1,digits+1,digits+2]; return {question:{en:'Number of digits in '+n+'² = ?',hing:n+'² mein kitne digits?',hi:n+'² में कितने अंक?'},ans:String(digits),w:w.map(String)}; },
  // V4: Number of digits in cube
  function(){ const n=rint(3,20); const cb=n*n*n; const digits=Math.floor(Math.log10(cb))+1; const w=[digits-1>0?digits-1:1,digits+1,digits+2]; return {question:{en:'Number of digits in '+n+'³ = ?',hing:n+'³ mein kitne digits?',hi:n+'³ में कितने अंक?'},ans:String(digits),w:w.map(String)}; },
  // V5: Quick square of number ending in 5
  function(){ const n=rint(1,9); const num=n*10+5; const sq=n*(n+1)*100+25; const w=[sq+100,sq-100>0?sq-100:sq+200,sq+50]; return {question:{en:'Quick: '+num+'² = ?',hing:'Jaldi: '+num+'² = ?',hi:'तुरंत: '+num+'² = ?'},ans:String(sq),w:w.map(String)}; },
],
};

