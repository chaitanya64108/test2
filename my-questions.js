/* my-questions.js — Naye DYNAMIC questions (Templates 1-33)
   - NAYA file; kisi existing file ko modify nahi karta.
   - Solutions/hints ka math KaTeX me render hota hai (_kx): root bar poore number pe, division stacked fraction.
   - sqrt.html me load karo: variants.js ke BAAD, app.js se PEHLE:
       <script src="my-questions.js"></script>
*/
(function () {
  'use strict';
  if (typeof TEMPLATES === 'undefined' || !Array.isArray(TEMPLATES)) {
    console.warn('[my-questions] TEMPLATES nahi mila. variants.js ke baad, app.js se pehle load karo.');
    return;
  }
  if (typeof VARIANTS === 'undefined') { try { window.VARIANTS = {}; } catch (e) { return; } }

  function rint(a,b){ return Math.floor(Math.random()*(b-a+1))+a; }
  function pick(a){ return a[Math.floor(Math.random()*a.length)]; }
  function shuf(a){ a=a.slice(); for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=a[i];a[i]=a[j];a[j]=t;} return a; }
  function gcd2(a,b){ a=Math.abs(a);b=Math.abs(b); while(b){var t=b;b=a%b;a=t;} return a; }
  function lcm2(a,b){ return a/gcd2(a,b)*b; }
  function lcmArr(x){ return x.reduce(function(a,b){return lcm2(a,b);}); }
  function isqrt(n){ var c=Math.floor(Math.sqrt(n)); while(c*c>n)c--; while((c+1)*(c+1)<=n)c++; return c; }
  function icbrt(n){ var c=Math.round(Math.cbrt(n)); while(c*c*c>n)c--; while((c+1)*(c+1)*(c+1)<=n)c++; return c; }
  function isSq(n){ var s=isqrt(n); return s*s===n; }
  function pf(n){ var m={},x=n; for(var d=2;d*d<=x;d++){ while(x%d===0){ m[d]=(m[d]||0)+1; x/=d; } } if(x>1)m[x]=(m[x]||0)+1; return m; }
  function mulSq(n){ var m=pf(n),r=1; for(var p in m){ if(m[p]%2)r*=+p; } return r; }
  function mulCb(n){ var m=pf(n),r=1; for(var p in m){ var e=m[p]%3; if(e)r*=Math.pow(+p,3-e); } return r; }
  function divSq(n){ var m=pf(n),r=1; for(var p in m){ if(m[p]%2)r*=+p; } return r; }
  function divCb(n){ var m=pf(n),r=1; for(var p in m){ var e=m[p]%3; if(e)r*=Math.pow(+p,e); } return r; }

  // ===== KaTeX-ify solution/hint math (unicode roots & numeric division -> LaTeX) =====
  var _BS = String.fromCharCode(92);
  function _kx(s){ if(s==null) return s; s=String(s);
    s=s.replace(/∛[(]([^)]*)[)]/g, function(m,x){ return '$'+_BS+'sqrt[3]{'+x+'}$'; });
    s=s.replace(/∛([0-9]+)/g, function(m,x){ return '$'+_BS+'sqrt[3]{'+x+'}$'; });
    s=s.replace(/√[(]([^)]*)[)]/g, function(m,x){ return '$'+_BS+'sqrt{'+x+'}$'; });
    s=s.replace(/√([0-9]+)/g, function(m,x){ return '$'+_BS+'sqrt{'+x+'}$'; });
    s=s.replace(/([0-9]+)[/]([0-9]+)/g, function(m,a,b){ return '$'+_BS+'frac{'+a+'}{'+b+'}$'; });
    return s;
  }

  function T(en,hing,hi){ return { en:en, hing:hing, hi:hi }; }
  function rs(n){ return '₹'+n; }
  function rp(p){ return '₹'+(p/100).toFixed(2); }
  function W(ans,c){ var A=String(ans),s={},o=[]; s[A]=1; c=shuf(c); for(var i=0;i<c.length&&o.length<3;i++){ var v=c[i]; if(Number(v)>0&&!s[String(v)]){s[String(v)]=1;o.push(String(v));} } var e=Number(ans)+1; while(o.length<3){ if(!s[String(e)]){s[String(e)]=1;o.push(String(e));} e++; } return o; }
  function near(a,g){ g=g||[1,2,3,4,5,6,7,8]; var c=[]; for(var i=0;i<g.length;i++){ c.push(a+g[i]); c.push(a-g[i]); } return W(a,c.filter(function(v){return v>0;})); }
  function sol1(en,hing,hi,hint){ if(typeof makeStyledSolution!=='function'||typeof step!=='function') return null; en=_kx(en); hing=_kx(hing); hi=_kx(hi); hint=_kx(hint); var mk=function(b){return {steps:[step('Solution',b)],teachersSay:'',mistakes:[],shortcut:'',hint:hint||''};}; try{ return makeStyledSolution({en:mk(en),hing:mk(hing),hi:mk(hi)}); }catch(e){ return null; } }
  function reg(id,tier,label,themes,mk){ TEMPLATES.push({id:id,tier:tier,label:label,generate:mk(themes[0])}); VARIANTS[id]=(VARIANTS[id]||[]).concat(themes.slice(1).map(mk)); }

  var TRIP=[[12,18,30],[8,12,15],[10,12,15],[6,10,15],[20,30,45],[18,24,30],[24,36,54],[12,20,30],[16,24,36],[9,12,15],[8,12,18],[10,15,20],[14,21,35],[4,6,9],[16,20,25],[18,24,32]];
  var CSQ=[180,1800,14700,1080,52920,1260,96,360,21600,1350,4500,500,72,5400,7200,13500,63000,9000,5000,450,392,2400];
  var CCB=[180,1800,360,1350,4500,500,72,5400,7200,13500,63000,9000,5000,450,392,2400,21600,52920,1080,96,14700,2700];

  // ===== GENERATORS =====
  function gSide(t){ return function(){ var k=rint(t.min||25,t.max||80), N=k*k;
    return { question:T(
      N+' '+t.e+' are arranged in a perfect square (equal rows & columns). How many '+t.e+' in each row?',
      N+' '+t.g+' ko perfect square me arrange kiya (rows = columns). Har row me kitne '+t.g+'?',
      N+' '+t.h+' को पूर्ण वर्ग में व्यवस्थित किया (पंक्तियाँ = स्तंभ)। प्रत्येक पंक्ति में कितने '+t.h+'?'),
      ans:String(k), w:near(k), solution:sol1('Rows = √'+N+' = '+k+'.','Rows = √'+N+' = '+k+'.','पंक्तियाँ = √'+N+' = '+k+'।','√'+N) };
  };}

  function gLeft(t){ return function(){ var k=rint(t.min||25,t.max||70), r=rint(1,2*k), N=k*k+r;
    return { question:T(
      N+' '+t.e+' are arranged to form the largest possible perfect square. How many '+t.e+' are left over?',
      N+' '+t.g+' ko largest perfect square banane ke liye arrange kiya. Kitne '+t.g+' bach gaye?',
      N+' '+t.h+' को सबसे बड़ा पूर्ण वर्ग बनाने हेतु व्यवस्थित किया। कितने '+t.h+' शेष बचे?'),
      ans:String(r), w:W(r,[r+1,r-1,r+2,r-2,2*k+1-r,r+5,r+10,k]), solution:sol1('Largest square ≤ '+N+' = '+(k*k)+'; left = '+r+'.','Left = '+N+' − '+(k*k)+' = '+r+'.','शेष = '+N+' − '+(k*k)+' = '+r+'।','N − ⌊√N⌋²') };
  };}

  function gRem(t){ return function(){ var k=rint(t.min||25,t.max||70), r=rint(1,2*k), N=k*k+r;
    return { question:T(
      'Least number of '+t.e+' to be removed from '+N+' '+t.e+' so that the rest form a perfect square?',
      N+' '+t.g+' me se kam se kam kitne '+t.g+' hatayein taaki bache hue perfect square ban jayein?',
      N+' '+t.h+' में से कम से कम कितने '+t.h+' हटाएँ ताकि शेष पूर्ण वर्ग बनें?'),
      ans:String(r), w:W(r,[r+1,r-1,2*k+1-r,r+2,r+5,k]), solution:sol1('Remove = '+N+' − '+(k*k)+' = '+r+'.','Hatao = '+N+' − '+(k*k)+' = '+r+'.','हटाएँ = '+N+' − '+(k*k)+' = '+r+'।','N − ⌊√N⌋²') };
  };}

  function gMore(t){ return function(){ var k=rint(t.min||25,t.max||75), r=rint(1,2*k), N=k*k+r, more=2*k+1-r;
    return { question:T(
      N+' '+t.e+' are arranged in a square. Least extra '+t.e+' to make the next bigger perfect square?',
      N+' '+t.g+' square me hain. Agla bada perfect square banane ke liye kam se kam kitne extra '+t.g+'?',
      N+' '+t.h+' वर्ग में हैं। अगला बड़ा पूर्ण वर्ग बनाने हेतु कम से कम कितने अतिरिक्त '+t.h+'?'),
      ans:String(more), w:W(more,[more+1,more-1,r,2*k-r,more+2,more+5,k]), solution:sol1('Need '+((k+1)*(k+1))+' − '+N+' = '+more+'.','Need = '+((k+1)*(k+1))+' − '+N+' = '+more+'.','चाहिए = '+((k+1)*(k+1))+' − '+N+' = '+more+'।','(k+1)² − N') };
  };}

  function gCEdge(t){ return function(){ var k=rint(6,16), N=k*k*k;
    return { question:T(
      N+' small '+t.e+' form one big cube. How many '+t.e+' lie along one edge?',
      N+' chhote '+t.g+' jod kar ek bada cube banaya. Ek edge par kitne '+t.g+'?',
      N+' छोटे '+t.h+' जोड़कर एक बड़ा घन बना। एक किनारे पर कितने '+t.h+'?'),
      ans:String(k), w:near(k,[1,2,3,4]), solution:sol1('edge = ∛'+N+' = '+k+'.','edge = ∛'+N+' = '+k+'.','किनारा = ∛'+N+' = '+k+'।','∛'+N) };
  };}

  function gCLeft(t){ return function(){ var k=rint(5,12), mx=(k+1)*(k+1)*(k+1)-k*k*k-1, r=rint(1,mx), N=k*k*k+r;
    return { question:T(
      N+' '+t.e+' are used to build the largest possible cube. How many '+t.e+' are left over?',
      N+' '+t.g+' se largest possible cube banaya. Kitne '+t.g+' bach gaye?',
      N+' '+t.h+' से सबसे बड़ा घन बनाया। कितने '+t.h+' शेष बचे?'),
      ans:String(r), w:W(r,[r+1,r-1,r+2,(k+1)*(k+1)*(k+1)-N,r+10,r+5,k]), solution:null };
  };}

  function gCMore(t){ return function(){ var k=rint(5,12), mx=(k+1)*(k+1)*(k+1)-k*k*k-1, r=rint(1,mx), N=k*k*k+r, more=(k+1)*(k+1)*(k+1)-N;
    return { question:T(
      N+' '+t.e+' are arranged as a cube. Least extra '+t.e+' to make the next perfect cube?',
      N+' '+t.g+' cube me hain. Agla perfect cube banane ke liye kam se kam kitne extra '+t.g+'?',
      N+' '+t.h+' घन में हैं। अगला पूर्ण घन बनाने हेतु कम से कम कितने अतिरिक्त '+t.h+'?'),
      ans:String(more), w:W(more,[more+1,more-1,r,more+10,more+5,mx]), solution:null };
  };}

  function gUproot(t){ return function(){ var k=rint(50,125), u=rint(20,Math.min(150,2*k-2)), rem=k*k-u;
    return { question:T(
      u+' '+t.ae+', and '+rem+' '+t.e+' remain which can be arranged in a perfect square. How many rows were there originally?',
      u+' '+t.ag+', aur '+rem+' '+t.g+' bache jo perfect square me arrange ho jaate hain. Originally kitni rows thi?',
      u+' '+t.ah+', और '+rem+' '+t.h+' बचे जो पूर्ण वर्ग में आ जाते हैं। मूल रूप से कितनी पंक्तियाँ थीं?'),
      ans:String(k), w:near(k,[1,2,3,5]), solution:sol1('Original = '+rem+' + '+u+' = '+(k*k)+'; rows = '+k+'.','Original = '+(k*k)+'; rows = '+k+'.','मूल = '+(k*k)+'; पंक्तियाँ = '+k+'।','√(remain+removed)') };
  };}

  function gArea(t){ return function(){ var k=rint(30,95), A=k*k;
    return { question:T(
      'The area of a square '+t.e+' is '+A+' sq.m. Find its side (m).',
      'Ek square '+t.g+' ka area '+A+' sq.m hai. Iski side (m)?',
      'एक वर्गाकार '+t.h+' का क्षेत्रफल '+A+' वर्ग मी। इसकी भुजा (m)?'),
      ans:String(k), w:near(k,[2,3,4,5]), solution:sol1('side = √'+A+' = '+k+' m.','side = √'+A+' = '+k+' m.','भुजा = √'+A+' = '+k+' m।','√(area)') };
  };}

  function gFence(t){ return function(){ var k=rint(50,130), rate=pick([10,15,20,25,30]), cost=4*k*rate, A=k*k;
    return { question:T(
      'Fencing a square '+t.e+' costs '+rs(cost)+' at '+rs(rate)+' per metre. Find its area (sq.m).',
      'Ek square '+t.g+' ki fencing '+rs(cost)+' me hui, rate '+rs(rate)+'/m. Area (sq.m)?',
      'एक वर्गाकार '+t.h+' की बाड़ '+rs(cost)+' में लगी, दर '+rs(rate)+'/m। क्षेत्रफल (वर्ग मी)?'),
      ans:String(A), w:W(A,[(k-1)*(k-1),(k+1)*(k+1),(k+2)*(k+2),(k-2)*(k-2),4*k*rate,k*rate]), solution:sol1('perimeter = '+cost+'/'+rate+' = '+(4*k)+'; side = '+k+'; area = '+A+'.','side = '+k+'; area = '+A+'.','भुजा = '+k+'; क्षेत्रफल = '+A+'।','side=(cost/rate)/4') };
  };}

  function gPathO(t){ return function(){ var s=rint(12,50), w=rint(1,4), a=(s+2*w)*(s+2*w)-s*s;
    return { question:T(
      'A '+w+' m wide path runs all around the outside of a square '+t.e+' of side '+s+' m. Find the path area (sq.m).',
      'Square '+t.g+' (side '+s+' m) ke baahar charo taraf '+w+' m chauda path hai. Path ka area (sq.m)?',
      'वर्गाकार '+t.h+' (भुजा '+s+' m) के बाहर चारों ओर '+w+' m चौड़ा रास्ता है। रास्ते का क्षेत्रफल (वर्ग मी)?'),
      ans:String(a), w:W(a,[a+8,a-8,a+16,(s+2*w)*(s+2*w),4*w*s,4*w*w,a+4*w]), solution:null };
  };}

  function gPathI(t){ return function(){ var w=rint(1,4), s=rint(2*w+6,60), inr=(s-2*w)*(s-2*w);
    return { question:T(
      'A '+w+' m wide path is built inside along the borders of a square '+t.e+' of side '+s+' m. Find the remaining inner area (sq.m).',
      'Square '+t.g+' (side '+s+' m) ke andar border ke saath '+w+' m ka path bana. Bacha andar ka area (sq.m)?',
      'वर्गाकार '+t.h+' (भुजा '+s+' m) के अंदर किनारों पर '+w+' m चौड़ा रास्ता बना। शेष आंतरिक क्षेत्रफल (वर्ग मी)?'),
      ans:String(inr), w:W(inr,[(s-2*w+1)*(s-2*w+1),(s-2*w-1)*(s-2*w-1),(s-w)*(s-w),s*s-inr,inr+20,inr+40]), solution:null };
  };}

  function gTilesT(t){ return function(){ var ts=pick([2,3,4,5,6]), m=rint(6,30), tiles=m*m, tA=ts*ts, fA=ts*m*ts*m;
    return { question:T(
      'A square '+t.e+' has area '+fA+' sq.m. Square tiles of area '+tA+' sq.m are used. How many tiles are needed?',
      'Square '+t.g+' ka area '+fA+' sq.m hai. '+tA+' sq.m ki tiles use hoti hain. Kitni tiles chahiye?',
      'वर्गाकार '+t.h+' का क्षेत्रफल '+fA+' वर्ग मी। '+tA+' वर्ग मी की टाइलें प्रयोग होती हैं। कितनी टाइलें चाहिए?'),
      ans:String(tiles), w:near(tiles,[m,5,10,m+1,m+2]), solution:sol1('tiles = '+fA+'/'+tA+' = '+tiles+'.','tiles = '+fA+'/'+tA+' = '+tiles+'.','टाइलें = '+fA+'/'+tA+' = '+tiles+'।','floorArea/tileArea') };
  };}

  function gTilesS(t){ return function(){ var ts=pick([2,3,4,5]), m=rint(6,25), F=ts*m;
    return { question:T(
      'A square '+t.e+' of side '+F+' m is tiled with square tiles of side '+ts+' m. How many tiles fit along one side?',
      'Square '+t.g+' (side '+F+' m) me '+ts+' m side ki tiles lagti hain. Ek side par kitni tiles?',
      'वर्गाकार '+t.h+' (भुजा '+F+' m) में '+ts+' m भुजा की टाइलें लगती हैं। एक भुजा पर कितनी?'),
      ans:String(m), w:near(m,[1,2,3,4]), solution:sol1('= '+F+'/'+ts+' = '+m+'.','= '+F+'/'+ts+' = '+m+'.','= '+F+'/'+ts+' = '+m+'।','side/tileSide') };
  };}

  function gTileCost(t){ return function(){ var s=rint(10,50), rate=pick([20,25,40,50,60,80,100]), cost=s*s*rate;
    return { question:T(
      'A square '+t.e+' has side '+s+' m. '+t.we+' costs '+rs(rate)+' per sq.m. Find the total cost.',
      'Square '+t.g+' ki side '+s+' m. '+t.wg+' ka rate '+rs(rate)+'/sq.m. Total cost?',
      'वर्गाकार '+t.h+' की भुजा '+s+' m। '+t.wh+' की दर '+rs(rate)+'/वर्ग मी। कुल लागत?'),
      ans:rs(cost), w:W(cost,[cost+rate*s,cost-rate*s,(s+2)*(s+2)*rate,(s-2)*(s-2)*rate,cost+1000,cost+rate]).map(rs), solution:sol1('cost = '+(s*s)+' × '+rate+' = '+rs(cost)+'.','cost = '+(s*s)+' × '+rate+' = '+rs(cost)+'.','लागत = '+(s*s)+' × '+rate+' = '+rs(cost)+'।','area × rate') };
  };}

  function gPaise(t){ return function(){ var k=rint(35,95), p=k*k;
    return { question:T(
      'In a '+t.e+', each member contributes as many paise as the number of members. Total is '+rp(p)+'. How many members?',
      'Ek '+t.g+' me har member utne paise deta hai jitne members hain. Total '+rp(p)+' hua. Kitne members?',
      'एक '+t.h+' में हर सदस्य उतने पैसे देता है जितने सदस्य हैं। कुल '+rp(p)+' एकत्र हुआ। कितने सदस्य?'),
      ans:String(k), w:near(k,[2,3,4,6]), solution:sol1('members = √'+p+' = '+k+'.','members = √'+p+' = '+k+'.','सदस्य = √'+p+' = '+k+'।','√(paise)') };
  };}

  function gEqual(t){ return function(){ var n=rint(30,65), tot=n*n;
    return { question:T(
      n+' '+t.e+' each contribute '+rs(n)+' (rupees equal to their number). Total amount collected?',
      n+' '+t.g+' har ek '+rs(n)+' dete hain (rupaye = unki sankhya). Total kitna?',
      n+' '+t.h+' प्रत्येक '+rs(n)+' देते हैं (रुपये = उनकी संख्या)। कुल कितना?'),
      ans:rs(tot), w:W(tot,[tot+n,tot-n,(n+1)*(n+1),(n-1)*(n-1),tot+100,2*n]).map(rs), solution:sol1('= '+n+'² = '+rs(tot)+'.','= '+n+'² = '+rs(tot)+'.','= '+n+'² = '+rs(tot)+'।','n²') };
  };}

  function gCubeCol(t){ return function(){ var n=rint(6,15), tot=n*n*n;
    return { question:T(
      'In a '+t.e+': n groups, each group has n members, each member gives '+rs('n')+'. Total is '+rs(tot)+'. Find n.',
      'Ek '+t.g+': n groups, har group me n members, har member '+rs('n')+' deta hai. Total '+rs(tot)+'. n nikaalo.',
      'एक '+t.h+': n समूह, हर समूह में n सदस्य, हर सदस्य '+rs('n')+' देता है। कुल '+rs(tot)+'। n ज्ञात करें।'),
      ans:String(n), w:near(n,[1,2,3]), solution:sol1('n³ = '+tot+' → n = ∛'+tot+' = '+n+'.','n³ = '+tot+' → n = '+n+'.','n³ = '+tot+' → n = '+n+'।','∛(total)') };
  };}

  function gSqChk(t){ return function(){ var k=rint(30,99), sq=k*k, w=[], d=1;
    while(w.length<3){ var c=sq+(d%2?d:-d); d++; if(c>0&&!isSq(c)&&w.indexOf(c)<0)w.push(c); }
    return { question:T(
      'In a '+t.e+', the total amount (in rupees) equals the square of the number of '+t.ue+'. Which of these can be the total?',
      'Ek '+t.g+' me total rakam (rupaye) '+t.ug+' ki sankhya ke square ke barabar hai. Inme se kaun sa total ho sakta hai?',
      'एक '+t.h+' में कुल राशि '+t.uh+' की संख्या के वर्ग के बराबर है। इनमें कौन सा कुल हो सकता है?'),
      ans:String(sq), w:w.map(String), solution:null };
  };}

  function gDist(t){ return function(){ var n=rint(20,50), kk=pick([2,3]), tot=kk*n*n;
    return { question:T(
      tot+' '+t.e+' are distributed among some '+t.we+' so each gets '+kk+' times the number of '+t.we+'. How many '+t.we+'?',
      tot+' '+t.g+' kuch '+t.wg+' me baante gaye, har ek ko '+t.wg+' ki sankhya ka '+kk+' guna mila. Kitne '+t.wg+'?',
      tot+' '+t.h+' कुछ '+t.wh+' में बाँटे गए, हर एक को '+t.wh+' की संख्या का '+kk+' गुना मिला। कितने '+t.wh+'?'),
      ans:String(n), w:near(n,[2,3,5,10]), solution:sol1(kk+'·n² = '+tot+' → n = '+n+'.','n² = '+(tot/kk)+' → n = '+n+'.','n² = '+(tot/kk)+' → n = '+n+'।','total/'+kk) };
  };}

  function gLeastSq(t){ return function(){ var nums=pick(TRIP), L=lcmArr(nums), v=L*mulSq(L);
    return { question:T(
      t.s?('Find the least number of '+t.s.e+' that can form a perfect square and is exactly divisible by '+nums.join(', ')+'.'):('Find the least perfect square exactly divisible by '+nums.join(', ')+'.'),
      t.s?('Kam se kam kitne '+t.s.g+' jo perfect square ban sakein aur '+nums.join(', ')+' se divisible hon?'):(nums.join(', ')+' se divisible sabse chhota perfect square?'),
      t.s?('कम से कम कितने '+t.s.h+' जो पूर्ण वर्ग बनें और '+nums.join(', ')+' से विभाज्य हों?'):(nums.join(', ')+' से विभाज्य सबसे छोटा पूर्ण वर्ग?')),
      ans:String(v), w:W(v,[L,L*2,v*4,Math.floor(v/4),v+L,v*9]), solution:null };
  };}

  function gLeastCb(t){ return function(){ var nums=pick(TRIP), L=lcmArr(nums), v=L*mulCb(L);
    return { question:T(
      t.s?('Find the least number of '+t.s.e+' that can form a perfect cube and is exactly divisible by '+nums.join(', ')+'.'):('Find the least perfect cube exactly divisible by '+nums.join(', ')+'.'),
      t.s?('Kam se kam kitne '+t.s.g+' jo perfect cube ban sakein aur '+nums.join(', ')+' se divisible hon?'):(nums.join(', ')+' se divisible sabse chhota perfect cube?'),
      t.s?('कम से कम कितने '+t.s.h+' जो पूर्ण घन बनें और '+nums.join(', ')+' से विभाज्य हों?'):(nums.join(', ')+' से विभाज्य सबसे छोटा पूर्ण घन?')),
      ans:String(v), w:W(v,[L,L*2,v*8,Math.floor(v/8),v+L,v*27]), solution:null };
  };}

  function gMulSq(t){ return function(){ var nums,L,m,g=0; do{ nums=pick(TRIP); L=lcmArr(nums); m=mulSq(L); g++; }while(m===1&&g<25);
    return { question:T(
      'The LCM of '+nums.join(', ')+' is multiplied by the least number to make a perfect square. Find that number.',
      nums.join(', ')+' ke LCM ko kam se kam kis number se multiply karein ki perfect square ban jaye?',
      nums.join(', ')+' के ल.स. को किस सबसे छोटी संख्या से गुणा करें कि पूर्ण वर्ग बने?'),
      ans:String(m), w:W(m,[2,3,5,m+1,m*2,Math.max(2,m-1),m+2]), solution:null };
  };}

  function gMulCb(t){ return function(){ var nums,L,m,g=0; do{ nums=pick(TRIP); L=lcmArr(nums); m=mulCb(L); g++; }while(m===1&&g<25);
    return { question:T(
      'The LCM of '+nums.join(', ')+' is multiplied by the least number to make a perfect cube. Find that number.',
      nums.join(', ')+' ke LCM ko kam se kam kis number se multiply karein ki perfect cube ban jaye?',
      nums.join(', ')+' के ल.स. को किस सबसे छोटी संख्या से गुणा करें कि पूर्ण घन बने?'),
      ans:String(m), w:W(m,[2,3,5,6,m+1,m*2,Math.max(2,m-1)]), solution:null };
  };}

  function gDivSq(t){ return function(){ var N=pick(CSQ), m=divSq(N);
    return { question:T(
      'Find the least number by which '+N+' must be divided to make it a perfect square.',
      N+' ko perfect square banane ke liye kam se kam kis number se divide karein?',
      N+' को पूर्ण वर्ग बनाने हेतु किस सबसे छोटी संख्या से भाग दें?'),
      ans:String(m), w:W(m,[2,3,5,m+1,m*2,Math.max(2,m-1),m+5]), solution:null };
  };}

  function gDivCb(t){ return function(){ var N=pick(CCB), m=divCb(N);
    return { question:T(
      'Find the least number by which '+N+' must be divided to make it a perfect cube.',
      N+' ko perfect cube banane ke liye kam se kam kis number se divide karein?',
      N+' को पूर्ण घन बनाने हेतु किस सबसे छोटी संख्या से भाग दें?'),
      ans:String(m), w:W(m,[2,3,5,m+1,m*2,Math.max(2,m-1),m+5,m+10]), solution:null };
  };}

  function gMulCbN(t){ return function(){ var N=pick(CCB), m=mulCb(N);
    return { question:T(
      'Find the least number by which '+N+' must be multiplied to make it a perfect cube.',
      N+' ko perfect cube banane ke liye kam se kam kis number se multiply karein?',
      N+' को पूर्ण घन बनाने हेतु किस सबसे छोटी संख्या से गुणा करें?'),
      ans:String(m), w:W(m,[2,3,4,5,m+1,m*2,Math.max(2,m-1),m+5]), solution:null };
  };}

  function gAddCb(t){ return function(){ var N=rint(120,9000), c=icbrt(N), tg=(c+1)*(c+1)*(c+1), a=tg-N;
    return { question:T(
      N+' '+t.e+' are stacked. Least extra '+t.e+' needed to arrange all into a perfect cube?',
      N+' '+t.g+' stack hain. Inhe perfect cube me arrange karne ke liye kam se kam kitne extra '+t.g+' chahiye?',
      N+' '+t.h+' रखे हैं। इन्हें पूर्ण घन में व्यवस्थित करने हेतु कम से कम कितने अतिरिक्त '+t.h+' चाहिए?'),
      ans:String(a), w:W(a,[a+1,a-1,N-c*c*c,a+10,a+20,c]), solution:sol1('Next cube = '+(c+1)+'³ = '+tg+'; extra = '+a+'.','Agla cube = '+tg+'; extra = '+a+'.','अगला घन = '+tg+'; अतिरिक्त = '+a+'।','next cube − N') };
  };}

  function gSubCb(t){ return function(){ var N=rint(120,9000), c=icbrt(N), a=N-c*c*c;
    return { question:T(
      N+' '+t.e+' are to be arranged into the largest possible cube. Least '+t.e+' to be removed?',
      N+' '+t.g+' ko largest possible cube me arrange karna hai. Kam se kam kitne '+t.g+' hatane padenge?',
      N+' '+t.h+' को सबसे बड़े घन में व्यवस्थित करना है। कम से कम कितने '+t.h+' हटाने होंगे?'),
      ans:String(a), w:W(a,[a+1,a-1,(c+1)*(c+1)*(c+1)-N,a+10,a+20,c]), solution:sol1('Largest cube ≤ '+N+' = '+(c*c*c)+'; remove = '+a+'.','Bada cube = '+(c*c*c)+'; hatao = '+a+'.','सबसे बड़ा घन = '+(c*c*c)+'; हटाएँ = '+a+'।','N − prev cube') };
  };}

  function ndig(isCube){ return function(t){ return function(){ var d=pick(t.ds||(isCube?[4,5]:[3,4,5])); var hi=Math.pow(10,d)-1, lo=Math.pow(10,d-1); var rt=isCube?icbrt:isqrt, pw=isCube?function(x){return x*x*x;}:function(x){return x*x;}; var rHi=rt(hi), rLo=rt(lo-1)+1; var nm=isCube?['cube','cube','घन']:['square','square','वर्ग']; var v,q,w;
    if(t.mode==='small'){ v=pw(rLo); q=['Smallest '+d+'-digit perfect '+nm[0]+'?','Sabse chhota '+d+'-digit perfect '+nm[1]+'?','सबसे छोटा '+d+'-अंकीय पूर्ण '+nm[2]+'?']; w=W(v,[lo,pw(rLo-1),pw(rLo+1),v+1,v+2]); }
    else if(t.mode==='root'){ v=rHi; q=['The '+nm[0]+' root of the largest '+d+'-digit perfect '+nm[0]+'?','Sabse bade '+d+'-digit perfect '+nm[1]+' ka root?','सबसे बड़े '+d+'-अंकीय पूर्ण '+nm[2]+' का मूल?']; w=near(v,[1,2,3]); }
    else { v=pw(rHi); q=['Largest '+d+'-digit perfect '+nm[0]+'?','Sabse bada '+d+'-digit perfect '+nm[1]+'?','सबसे बड़ा '+d+'-अंकीय पूर्ण '+nm[2]+'?']; w=W(v,[hi,pw(rHi+1),pw(rHi-1),v+1,v+3]); }
    return { question:T(q[0],q[1],q[2]), ans:String(v), w:w, solution:null };
  }; }; }

  function gSixth(t){ return function(){ var list=[64,729,4096,15625], v=pick(list); var sq=[16,36,49,81,100,121,144,196,225], cb=[8,27,125,216,343,512,1000]; var s={}, w=[]; s[String(v)]=1; var cand=[pick(sq),pick(cb),pick(cb.concat(sq))]; for(var i=0;i<cand.length;i++){ var c=String(cand[i]); if(!s[c]){s[c]=1;w.push(c);} } var f=2; while(w.length<3){ var x=String(v+f); if(!s[x]){s[x]=1;w.push(x);} f++; }
    return { question:T(
      'Which of the following is both a perfect square AND a perfect cube?',
      'Inme se kaun sa number perfect square bhi hai aur perfect cube bhi?',
      'निम्न में से कौन सी संख्या पूर्ण वर्ग भी है और पूर्ण घन भी?'),
      ans:String(v), w:w, solution:null };
  };}

  // ===== REGISTRATION (33) =====
  reg('mq_sq_rows','Grad+','Word: Square Rows',[{e:'students',g:'students',h:'विद्यार्थी'},{e:'trees',g:'trees',h:'पेड़'},{e:'soldiers',g:'soldiers',h:'सैनिक'},{e:'chairs',g:'chairs',h:'कुर्सियाँ'},{e:'balls',g:'balls',h:'गेंदें'}],gSide);
  reg('mq_tree_rows','Grad+','Word: Trees Square Rows',[{e:'trees',g:'trees',h:'पेड़',min:70,max:140},{e:'saplings',g:'saplings',h:'पौधे',min:60,max:95},{e:'plants',g:'plants',h:'पौधे',min:27,max:60},{e:'garden plants',g:'garden plants',h:'बगीचे के पौधे',min:50,max:95},{e:'park trees',g:'park trees',h:'पार्क के पेड़',min:50,max:85}],gSide);
  reg('mq_sq_left','Grad+','Word: Square Leftover',[{e:'soldiers',g:'soldiers',h:'सैनिक'},{e:'students',g:'students',h:'विद्यार्थी'},{e:'saplings',g:'saplings',h:'पौधे'},{e:'oranges',g:'oranges',h:'संतरे'},{e:'tiles',g:'tiles',h:'टाइलें'}],gLeft);
  reg('mq_sq_remove','Grad+','Word: Square Remove Least',[{e:'balls',g:'balls',h:'गेंदें'},{e:'students',g:'students',h:'विद्यार्थी'},{e:'trees',g:'trees',h:'पेड़'},{e:'tiles',g:'tiles',h:'टाइलें'},{e:'packets',g:'packets',h:'पैकेट'}],gRem);
  reg('mq_sq_more','Grad+','Word: Square Extra Needed',[{e:'students',g:'students',h:'विद्यार्थी'},{e:'soldiers',g:'soldiers',h:'सैनिक'},{e:'trees',g:'trees',h:'पेड़'},{e:'tiles',g:'tiles',h:'टाइलें'},{e:'boxes',g:'boxes',h:'डिब्बे'}],gMore);
  reg('mq_cube_edge','Grad+','Word: Cube Edge Count',[{e:'cubes',g:'cubes',h:'घन'},{e:'boxes',g:'boxes',h:'डिब्बे'},{e:'sugar cubes',g:'sugar cubes',h:'शक्कर के घन'},{e:'bricks',g:'bricks',h:'ईंटें'},{e:'toy blocks',g:'toy blocks',h:'खिलौना ब्लॉक'}],gCEdge);
  reg('mq_cube_left','Grad+','Word: Cube Leftover',[{e:'cubes',g:'cubes',h:'घन'},{e:'boxes',g:'boxes',h:'डिब्बे'},{e:'bricks',g:'bricks',h:'ईंटें'},{e:'balls',g:'balls',h:'गेंदें'},{e:'cartons',g:'cartons',h:'कार्टन'}],gCLeft);
  reg('mq_cube_more','Grad+','Word: Cube Extra Needed',[{e:'cubes',g:'cubes',h:'घन'},{e:'boxes',g:'boxes',h:'डिब्बे'},{e:'bricks',g:'bricks',h:'ईंटें'},{e:'packets',g:'packets',h:'पैकेट'},{e:'blocks',g:'blocks',h:'ब्लॉक'}],gCMore);
  reg('mq_uproot','Grad+','Word: Uprooted Trees Rows',[{e:'trees',g:'trees',h:'पेड़',ae:'trees were uprooted in a storm',ag:'trees toofan me ukhad gaye',ah:'पेड़ तूफ़ान में उखड़ गए'},{e:'trees',g:'trees',h:'पेड़',ae:'trees were removed for renovation',ag:'trees renovation me hata diye gaye',ah:'पेड़ नवीनीकरण में हटा दिए गए'},{e:'trees',g:'trees',h:'पेड़',ae:'trees were destroyed by animals',ag:'trees jaanwaron ne nasht kar diye',ah:'पेड़ जानवरों ने नष्ट कर दिए'},{e:'trees',g:'trees',h:'पेड़',ae:'trees were cut down',ag:'trees kaat diye gaye',ah:'पेड़ काट दिए गए'},{e:'trees',g:'trees',h:'पेड़',ae:'trees were damaged',ag:'trees kshatigrast ho gaye',ah:'पेड़ क्षतिग्रस्त हो गए'}],gUproot);
  reg('mq_area','Grad+','Word: Area to Side',[{e:'field',g:'field',h:'मैदान'},{e:'garden',g:'garden',h:'बगीचा'},{e:'plot',g:'plot',h:'प्लॉट'},{e:'playground',g:'playground',h:'खेल मैदान'},{e:'farmland',g:'farmland',h:'खेत'}],gArea);
  reg('mq_fence','Grad+','Word: Fencing to Area',[{e:'field',g:'field',h:'मैदान'},{e:'plot',g:'plot',h:'प्लॉट'},{e:'garden',g:'garden',h:'बगीचा'},{e:'lawn',g:'lawn',h:'लॉन'},{e:'park',g:'park',h:'पार्क'}],gFence);
  reg('mq_path_out','Grad+','Word: Path Around Square',[{e:'field',g:'field',h:'मैदान'},{e:'garden',g:'garden',h:'बगीचा'},{e:'lawn',g:'lawn',h:'लॉन'},{e:'park',g:'park',h:'पार्क'},{e:'courtyard',g:'courtyard',h:'आँगन'}],gPathO);
  reg('mq_path_in','Grad+','Word: Path Inside Square',[{e:'garden',g:'garden',h:'बगीचा'},{e:'park',g:'park',h:'पार्क'},{e:'plot',g:'plot',h:'प्लॉट'},{e:'lawn',g:'lawn',h:'लॉन'},{e:'courtyard',g:'courtyard',h:'आँगन'}],gPathI);
  reg('mq_tiles_total','Grad+','Word: Tiles Count',[{e:'floor',g:'floor',h:'फर्श'},{e:'hall',g:'hall',h:'हॉल'},{e:'bathroom',g:'bathroom',h:'बाथरूम'},{e:'classroom',g:'classroom',h:'कक्षा'},{e:'courtyard',g:'courtyard',h:'आँगन'}],gTilesT);
  reg('mq_tiles_side','Grad+','Word: Tiles Along Side',[{e:'floor',g:'floor',h:'फर्श'},{e:'hall',g:'hall',h:'हॉल'},{e:'courtyard',g:'courtyard',h:'आँगन'},{e:'room',g:'room',h:'कमरा'},{e:'classroom',g:'classroom',h:'कक्षा'}],gTilesS);
  reg('mq_tile_cost','Grad+','Word: Tiling Cost',[{e:'floor',g:'floor',h:'फर्श',we:'Tiling',wg:'Tiling',wh:'टाइलिंग'},{e:'hall',g:'hall',h:'हॉल',we:'Marble flooring',wg:'Marble flooring',wh:'मार्बल फर्श'},{e:'room',g:'room',h:'कमरा',we:'Carpeting',wg:'Carpeting',wh:'कारपेट'},{e:'floor',g:'floor',h:'फर्श',we:'Painting',wg:'Painting',wh:'पेंटिंग'},{e:'courtyard',g:'courtyard',h:'आँगन',we:'Paving',wg:'Paving',wh:'पेविंग'}],gTileCost);
  reg('mq_paise','Grad+','Word: Paise Collection',[{e:'group',g:'group',h:'समूह'},{e:'class',g:'class',h:'कक्षा'},{e:'club',g:'club',h:'क्लब'},{e:'charity fund',g:'charity fund',h:'चैरिटी फंड'},{e:'class fund',g:'class fund',h:'कक्षा फंड'}],gPaise);
  reg('mq_equal','Grad+','Word: Equal Contribution',[{e:'persons',g:'persons',h:'व्यक्ति'},{e:'donors',g:'donors',h:'दानकर्ता'},{e:'members',g:'members',h:'सदस्य'},{e:'employees',g:'employees',h:'कर्मचारी'},{e:'people',g:'people',h:'लोग'}],gEqual);
  reg('mq_cube_collect','Grad+','Word: Cube Collection',[{e:'collection drive',g:'collection drive',h:'संग्रह अभियान'},{e:'class system',g:'class system',h:'कक्षा प्रणाली'},{e:'team setup',g:'team setup',h:'टीम व्यवस्था'},{e:'club',g:'club',h:'क्लब'},{e:'packing system',g:'packing system',h:'पैकिंग व्यवस्था'}],gCubeCol);
  reg('mq_sq_check','Grad+','Word: Perfect Square Check',[{e:'cricket match',g:'cricket match',h:'क्रिकेट मैच',ue:'runs',ug:'runs',uh:'रन'},{e:'football match',g:'football match',h:'फुटबॉल मैच',ue:'goals',ug:'goals',uh:'गोल'},{e:'charity event',g:'charity event',h:'चैरिटी इवेंट',ue:'points',ug:'points',uh:'अंक'},{e:'company reward',g:'company reward',h:'कंपनी इनाम',ue:'runs',ug:'runs',uh:'रन'},{e:'school event',g:'school event',h:'स्कूल इवेंट',ue:'tickets',ug:'tickets',uh:'टिकट'}],gSqChk);
  reg('mq_distrib','Grad+','Word: Distribution k.n^2',[{e:'oranges',g:'oranges',h:'संतरे',we:'girls',wg:'girls',wh:'लड़कियाँ'},{e:'sweets',g:'sweets',h:'मिठाइयाँ',we:'children',wg:'children',wh:'बच्चे'},{e:'books',g:'books',h:'किताबें',we:'students',wg:'students',wh:'विद्यार्थी'},{e:'chocolates',g:'chocolates',h:'चॉकलेट',we:'children',wg:'children',wh:'बच्चे'},{e:'pens',g:'pens',h:'पेन',we:'students',wg:'students',wh:'विद्यार्थी'}],gDist);
  reg('mq_least_sq','12th+','Least Square divisible by many',[{s:null},{s:{e:'packets',g:'packets',h:'पैकेट'}},{s:null},{s:{e:'boxes',g:'boxes',h:'डिब्बे'}},{s:{e:'tiles',g:'tiles',h:'टाइलें'}}],gLeastSq);
  reg('mq_least_cb','12th+','Least Cube divisible by many',[{s:null},{s:{e:'boxes',g:'boxes',h:'डिब्बे'}},{s:null},{s:{e:'packets',g:'packets',h:'पैकेट'}},{s:{e:'bricks',g:'bricks',h:'ईंटें'}}],gLeastCb);
  reg('mq_mul_sq','12th+','Multiplier to Square',[{},{},{},{},{}],gMulSq);
  reg('mq_mul_cb','12th+','Multiplier to Cube',[{},{},{},{},{}],gMulCb);
  reg('mq_div_sq','10th+','Divide to Square',[{},{},{},{},{}],gDivSq);
  reg('mq_div_cb','12th+','Divide to Cube',[{},{},{},{},{}],gDivCb);
  reg('mq_mulN_cb','12th+','Multiply to Cube',[{},{},{},{},{}],gMulCbN);
  reg('mq_add_cube','Grad+','Add to Next Cube',[{e:'bricks',g:'bricks',h:'ईंटें'},{e:'cubes',g:'cubes',h:'घन'},{e:'packets',g:'packets',h:'पैकेट'},{e:'items',g:'items',h:'वस्तुएँ'},{e:'blocks',g:'blocks',h:'ब्लॉक'}],gAddCb);
  reg('mq_sub_cube','Grad+','Subtract to Prev Cube',[{e:'packets',g:'packets',h:'पैकेट'},{e:'boxes',g:'boxes',h:'डिब्बे'},{e:'blocks',g:'blocks',h:'ब्लॉक'},{e:'items',g:'items',h:'वस्तुएँ'},{e:'cartons',g:'cartons',h:'कार्टन'}],gSubCb);
  reg('mq_ndigit_cube','12th+','Largest n-digit Cube',[{mode:'large'},{mode:'root'},{mode:'small'},{mode:'large',ds:[5]},{mode:'small',ds:[4]}],ndig(true));
  reg('mq_ndigit_sq','10th+','Largest n-digit Square',[{mode:'large'},{mode:'root'},{mode:'small'},{mode:'large',ds:[5]},{mode:'small',ds:[3]}],ndig(false));
  reg('mq_sixth','12th+','Sixth Power (square & cube)',[{},{},{},{},{}],gSixth);

  try { console.log('[my-questions] Registered. TEMPLATES total =', TEMPLATES.length); } catch (e) {}
})();
