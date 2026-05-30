/* tier10 batch2 — templates 7-9 (sq_make_x, sq_make_d, sq_make_add) */
(function(){
  var H=window.QT; if(!H) return;
  var K=H.K,RT=H.RT,FR=H.FR,T=H.T,tri=H.tri;

  /* 7. Make Perfect Square (×) */
  H.base('sq_make_x', function(){
    var variant=rint(0,2), num,ans,w1,w2,w3;
    if(variant===0){ var primes=[2,3,5,7,11,13,17,19,23,29]; var base=pick(primes); var sqPart=pick(primes.filter(function(p){return p!==base;})); num=base*sqPart*sqPart; ans=base; w1=base*2; w2=sqPart; w3=base+sqPart; }
    else if(variant===1){ var primes=[2,3,5,7,11,13]; var pr=shuffle(primes).slice(0,2),p1=pr[0],p2=pr[1]; var sqPart=pick(primes.filter(function(p){return p!==p1&&p!==p2;})); num=p1*p2*sqPart*sqPart; ans=p1*p2; w1=p1*p2*2; w2=sqPart; w3=p1+sqPart; }
    else { var base,sqPart; do{ base=rint(2,15); sqPart=rint(2,12); }while(base===sqPart); num=base*sqPart*sqPart; ans=base; w1=base*2; w2=sqPart; w3=base+sqPart; }
    var sol=buildSqMakeXSolution(num,ans);
    return {question:tri('What is the smallest whole number that '+num+' must be multiplied by to become a perfect square?',num+' ko sabse chhote kis number se multiply karein ki wo perfect square ban jaaye?',num+' को सबसे छोटी किस संख्या से गुणा करें कि वह पूर्ण वर्ग बन जाए?'),ans:String(ans),w:[String(w1),String(w2),String(w3)],solution:sol};
  });
  H.vars('sq_make_x',[
    function(){ var p=pick([2,3,5,7]), k=rint(2,8), num=p*k*k, multiplier=p, ans=num*multiplier; var sol=buildSqMakeXV1Solution(num,multiplier,ans); return {question:tri('Multiply '+num+' by '+multiplier+'. Will the result be a perfect square (and if yes, what is it)?',num+' ko '+multiplier+' se multiply karo. Kya result perfect square hoga (aur kitna)?',num+' को '+multiplier+' से गुणा करो। क्या परिणाम पूर्ण वर्ग होगा (और कितना)?'),ans:'Yes - '+ans,w:['No','Yes - '+(ans+p),'Yes - '+(ans+k)],solution:sol}; },
    function(){ var a,b; do{ a=rint(2,10); b=rint(2,10); }while(a===b); var na=a*a,nb=b*b, ans=a*b; var w=[a*b+1,(a*b-1>0?a*b-1:a*b+2),a+b]; var sol=buildSqMakeXV2Solution(na,nb,ans); return {question:tri('The product '+K(na+T+nb)+' is the perfect square of which number?',K(na+T+nb)+' kis number ka perfect square hai?',K(na+T+nb)+' किस संख्या का पूर्ण वर्ग है?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var p=pick([2,3,5,7]), k=rint(2,10), num=p*k*k, ans=k; var w=[k+1,(k-1>0?k-1:k+2),p*k]; var sol=buildSqMakeXV3Solution(num,p,ans); return {question:tri('After multiplying '+num+' by '+p+', what is the square root of the product?',num+' ko '+p+' se multiply karne ke baad product ka square root kya hoga?',num+' को '+p+' से गुणा करने के बाद गुणनफल का वर्गमूल क्या होगा?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var base,sqPart; do{ base=rint(2,10); sqPart=rint(2,8); }while(base===sqPart); var num=base*sqPart*sqPart, ans=base; var w=[base*2,sqPart,base+sqPart]; var sol=buildSqMakeXV4Solution(num,base,sqPart,ans); return {question:tri('We want to multiply '+num+' by a number so it becomes a perfect square. Which of the given numbers works?',num+' ko kisi number se multiply karke perfect square banana hai. Diye gaye numbers me se kaunsa kaam karega?',num+' को किसी संख्या से गुणा करके पूर्ण वर्ग बनाना है। दिए गए नंबरों में से कौन सा काम करेगा?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var base=rint(2,8),sqPart=rint(2,6), num=base*sqPart*sqPart, ans=base; var w=[base*sqPart,sqPart*sqPart,base*base]; var sol=buildSqMakeXV5Solution(num,base,sqPart,ans); return {question:tri('What is the smallest number that '+num+' must be multiplied by to get a perfect square?',num+' ko perfect square banane ke liye sabse chhota multiplier kya hai?',num+' को पूर्ण वर्ग बनाने के लिए सबसे छोटा गुणक क्या है?'),ans:String(ans),w:w.map(String),solution:sol}; }
  ]);

  /* 8. Make Perfect Square (÷) */
  H.base('sq_make_d', function(){
    var variant=rint(0,2), num,ans,w1,w2,w3;
    if(variant===0){ var primes=[2,3,5,7,11,13,17,19,23,29]; var base=pick(primes); var sqPart=pick(primes.filter(function(p){return p!==base;})); num=base*base*sqPart; ans=sqPart; w1=base; w2=sqPart*2; w3=base*sqPart; }
    else if(variant===1){ var primes=[2,3,5,7,11,13]; var pr=shuffle(primes).slice(0,2),p1=pr[0],p2=pr[1]; var sqPart=pick(primes.filter(function(p){return p!==p1&&p!==p2;})); num=p1*p1*p2*p2*sqPart; ans=sqPart; w1=p1*p2; w2=sqPart*2; w3=p1*sqPart; }
    else { var base,sqPart; do{ base=rint(2,15); sqPart=rint(2,12); }while(base===sqPart); num=base*base*sqPart; ans=sqPart; w1=base; w2=sqPart*2; w3=base*sqPart; }
    var sol=buildSqMakeDSolution(num,ans);
    return {question:tri('What is the smallest whole number that '+num+' must be divided by to become a perfect square?',num+' ko sabse chhote kis number se divide karein ki wo perfect square ban jaaye?',num+' को सबसे छोटी किस संख्या से भाग दें कि वह पूर्ण वर्ग बन जाए?'),ans:String(ans),w:[String(w1),String(w2),String(w3)],solution:sol};
  });
  H.vars('sq_make_d',[
    function(){ var base,sqPart; do{ base=rint(2,8); sqPart=rint(2,8); }while(base===sqPart); var num=base*base*sqPart, ans=base; var w=[base+1,(base-1>0?base-1:base+2),sqPart]; var sol=buildSqMakeDV1Solution(num,sqPart,ans); return {question:tri('After dividing '+num+' by '+sqPart+', what is the square root of the result?',num+' ko '+sqPart+' se divide karne ke baad result ka square root kya hoga?',num+' को '+sqPart+' से भाग देने के बाद परिणाम का वर्गमूल क्या होगा?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var base,sqPart; do{ base=rint(2,8); sqPart=rint(2,6); }while(base===sqPart); var num=base*base*sqPart, ans=sqPart; var w=[base*base,sqPart+base,base*sqPart]; var sol=buildSqMakeDV2Solution(num,base,sqPart,ans); return {question:tri('We want to divide '+num+' by a number so it becomes a perfect square. Which of the given numbers works?',num+' ko kisi number se divide karke perfect square banana hai. Kaunsa kaam karega?',num+' को किसी संख्या से भाग देकर पूर्ण वर्ग बनाना है। कौन सा काम करेगा?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var base,sqPart; do{ base=rint(2,10); sqPart=rint(2,8); }while(base===sqPart); var num=base*base*sqPart, ans=sqPart; var w=[base,sqPart*2,base*sqPart]; var sol=buildSqMakeDV3Solution(num,base,sqPart,ans); return {question:tri('What is the smallest number that '+num+' must be divided by to get a perfect square?',num+' ko perfect square banane ke liye sabse chhota divisor kya hai?',num+' को पूर्ण वर्ग बनाने के लिए सबसे छोटा भाजक क्या है?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var base=rint(2,8),sqPart=rint(2,6), num=base*base*sqPart, result=num/sqPart, ans=result; var sol=buildSqMakeDV4Solution(num,sqPart,result,ans); return {question:tri(num+' divided by '+sqPart+' equals '+result+'. Is '+result+' a perfect square?',num+' ko '+sqPart+' se divide karne par '+result+' aata hai. Kya '+result+' perfect square hai?',num+' को '+sqPart+' से भाग देने पर '+result+' आता है। क्या '+result+' पूर्ण वर्ग है?'),ans:'Yes',w:['No','Only if it is even','Only if it is odd'],solution:sol}; },
    function(){ var a,b; do{ a=rint(2,10); b=rint(2,8); }while(a===b); var num=a*a*b, ans=a; var w=[a+1,b,a*b]; var sol=buildSqMakeDV5Solution(num,b,ans); return {question:tri('Find the value of '+K(RT(FR(num,b)))+'.','Maan gyaat karo: '+K(RT(FR(num,b)))+'.','मान ज्ञात कीजिए: '+K(RT(FR(num,b)))+'।'),ans:String(ans),w:w.map(String),solution:sol}; }
  ]);

  /* 9. Make Perfect Square (+) */
  H.base('sq_make_add', function(){
    var a=rint(5,60), sq=a*a, num=sq-rint(1,Math.min(30,a)), ans=sq-num;
    var offsets=shuffle([2,-1,5,-3,7,4,-2,10]), wrongs=[];
    for(var i=0;i<offsets.length;i++){ var v=ans+offsets[i]; if(v>0&&v!==ans&&wrongs.length<3) wrongs.push(v); }
    while(wrongs.length<3) wrongs.push(ans+wrongs.length*3+8);
    var sol=buildSqMakeAddSolution(num,ans);
    return {question:tri('What is the smallest number that must be added to '+num+' to make it a perfect square?',num+' me sabse chhota kya jodein ki wo perfect square ban jaaye?',num+' में सबसे छोटा क्या जोड़ें कि वह पूर्ण वर्ग बन जाए?'),ans:String(ans),w:wrongs.map(String),solution:sol};
  });
  H.vars('sq_make_add',[
    function(){ var a=rint(5,30), sq=a*a, add=rint(1,Math.min(20,a)), num=sq-add, ans=add; var w=[add+2,(add-1>0?add-1:add+3),add+5]; var sol=buildSqMakeAddV1Solution(num,sq,add,ans); return {question:tri('A number was added to '+num+' to turn it into the perfect square '+sq+'. What number was added?',num+' me kuch joda gaya taaki wo perfect square '+sq+' ban jaaye. Kya joda gaya?',num+' में कुछ जोड़ा गया ताकि वह पूर्ण वर्ग '+sq+' बन जाए। क्या जोड़ा गया?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var a=rint(5,30), num=a*a+rint(1,2*a), ans=(a+1)*(a+1)-num; var w=[ans+2,(ans-1>0?ans-1:ans+3),ans+5]; var sol=buildSqMakeAddV2Solution(num,ans,a); return {question:tri('How much must be added to '+num+' to reach the next perfect square?',num+' me kitna jodein ki agla perfect square mile?',num+' में कितना जोड़ें कि अगला पूर्ण वर्ग मिले?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var a=rint(10,30), sq=a*a, add1=rint(1,10), add2=rint(1,10), num1=sq-add1, num2=sq-add2, ans=add1+add2; var w=[ans+2,Math.abs(add1-add2),(ans-1>0?ans-1:ans+3)]; var sol=buildSqMakeAddV3Solution(num1,num2,sq,add1,add2,ans); return {question:tri('Adding '+add1+' to '+num1+', and '+add2+' to '+num2+', makes both equal to the perfect square '+sq+'. What is the total amount added?','Hum '+num1+' me '+add1+' aur '+num2+' me '+add2+' jodte hain, dono perfect square '+sq+' ban jaate hain. Kul kitna joda gaya?',num1+' में '+add1+' और '+num2+' में '+add2+' जोड़ते हैं, दोनों पूर्ण वर्ग '+sq+' बन जाते हैं। कुल कितना जोड़ा गया?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var a=rint(5,30), sq=a*a, add=rint(1,Math.min(20,a)), num=sq-add, ans=sq; var w=[sq+1,sq-1,sq+2*a+1]; var sol=buildSqMakeAddV4Solution(num,add,ans); return {question:tri('Adding '+add+' to '+num+' gives which perfect square?',num+' me '+add+' jodne par kaunsa perfect square milta hai?',num+' में '+add+' जोड़ने पर कौन सा पूर्ण वर्ग मिलता है?'),ans:String(ans),w:w.map(String),solution:sol}; },
    function(){ var a=rint(5,25),b=a+1, add1=a*a-rint(1,10), add2=b*b-rint(1,15), ans=b*b-add2; var w=[ans+2,(ans-2>0?ans-2:ans+4),b*b-a*a]; var sol=buildSqMakeAddV5Solution(add1,add2,a,b,ans); return {question:tri('Adding '+(a*a-add1)+' to '+add1+' gives a perfect square. How much must be added to '+add2+' to give the next perfect square?',add1+' me '+(a*a-add1)+' jodne par perfect square milta hai. '+add2+' me kitna jodein ki agla perfect square mile?',add1+' में '+(a*a-add1)+' जोड़ने पर पूर्ण वर्ग मिलता है। '+add2+' में कितना जोड़ें कि अगला पूर्ण वर्ग मिले?'),ans:String(ans),w:w.map(String),solution:sol}; }
  ]);
})();
