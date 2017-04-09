if (self.CavalryLogger) { CavalryLogger.start_js(["RsUE+"]); }

/** js/deprecated/cookie.js */




__d('legacy:cookie',['Cookie'],(function a(b,c,d,e,f,g){



b.getCookie=c('Cookie').get;
b.setCookie=c('Cookie').set;
b.clearCookie=c('Cookie').clear;}),3);

/** js/modules/FBTraceHelper.js */




__d('FBTraceHelper',['Arbiter','CSS','Event','URI'],(function a(b,c,d,e,f,g){










var h=



{refreshPageWithFBTraceOn:function i(){
var j=new (c('URI'))();
j.addQueryData('fbtrace',1);
j.go(true);},









registerButtons:function i
(j,
k,
l){

c('Event').listen(k,'click',this.refreshPageWithFBTraceOn);
if(l)
this._registerTransitionCallback(j,k);},



_transitionCallback:function i
(j,
k){



c('CSS').hide(j);
c('CSS').show(k);},


_registerTransitionCallback:function i
(j,
k){

c('Arbiter').subscribeOnce('page_transition',function(){
h._transitionCallback(j,k);});}};




f.exports=h;}),null);
