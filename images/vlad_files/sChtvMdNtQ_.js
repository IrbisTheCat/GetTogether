if (self.CavalryLogger) { CavalryLogger.start_js(["1Nat5"]); }

/** shared/core/camelize.js */





__d("camelize",[],(function a(b,c,d,e,f,g){

var h=/-(.)/g;










function i(j){
return j.replace(h,function(k,l){
return l.toUpperCase();});}



f.exports=i;}),null);

/** shared/core/dom/getOpacityStyleName.js */





__d('getOpacityStyleName',[],(function a(b,c,d,e,f,g){

var h=false,
i=null;






function j(){
if(!h){
if('opacity' in document.body.style){
i='opacity';}else{

var k=document.createElement('div');
k.style.filter='alpha(opacity=100)';
if(k.style.filter)
i='filter';

k=null;}

h=true;}

return i;}


f.exports=j;}),null);

/** shared/core/hyphenate.js */





__d('hyphenate',[],(function a(b,c,d,e,f,g){

var h=/([A-Z])/g;













function i(j){
return j.replace(h,'-$1').toLowerCase();}


f.exports=i;}),null);

/** shared/core/dom/getStyleProperty.js */





__d('getStyleProperty',['camelize','hyphenate'],(function a(b,c,d,e,f,g){




function h(j){
return j==null?
j:
String(j);}


function i(j,k){
var l=void 0;


if(window.getComputedStyle){

l=window.getComputedStyle(j,null);
if(l)
return h(l.getPropertyValue(c('hyphenate')(k)));}



if(document.defaultView&&document.defaultView.getComputedStyle){
l=document.defaultView.getComputedStyle(j,null);

if(l)
return h(l.getPropertyValue(c('hyphenate')(k)));

if(k==='display')
return 'none';}



if(j.currentStyle){
if(k==='float')
return h(j.currentStyle.cssFloat||
j.currentStyle.styleFloat);

return h(j.currentStyle[c('camelize')(k)]);}

return h(j.style&&j.style[c('camelize')(k)]);}


f.exports=i;}),null);

/** shared/core/dom/StyleCore.js */





__d('StyleCore',['invariant','camelize','containsNode','ex','getOpacityStyleName','getStyleProperty','hyphenate'],(function a(b,c,d,e,f,g,h){














function i(p,q){
var r=o.get(p,q);
return r==='auto'||r==='scroll';}



var j=new RegExp
('\\s*'+
'([^\\s:]+)'+
'\\s*:\\s*'+
'([^;(\'"]*(?:(?:\\([^)]*\\)|"[^"]*"|\'[^\']*\')[^;(?:\'"]*)*)'+
'(?:;|$)',
'g');





function k(p){
var q={};
p.replace(j,function(r,s,t){
q[s]=t;});

return q;}






function l(p){
var q='';
for(var r in p)
if(p[r])
q+=r+':'+p[r]+';';


return q;}






function m(p){
return p!==''?'alpha(opacity='+p*100+')':'';}







function n(p,q,r){
switch(c('hyphenate')(q)){
case 'font-weight':
case 'line-height':
case 'opacity':
case 'z-index':
case 'animation-iteration-count':
case '-webkit-animation-iteration-count':

break;
case 'width':
case 'height':
var s=parseInt(r,10)<0;

!s||h(0,
'%s: "%s" cannot be set to a negative value: %s',
p,
q,
r);




default:isNaN(r)||!r||r==='0'||h(0,
'%s: Tried to set "%s" to a unitless value, `%s`. Did you mean `%s`?',
p,
q,
r,
r+'px');

break;}}






var o=








{set:function p(q,r,s){
n('Style.set',r,s);

var t=q.style;

switch(r){
case 'opacity':
if(c('getOpacityStyleName')()==='filter'){
t.filter=m(s);}else 

t.opacity=s;

break;
case 'float':
t.cssFloat=t.styleFloat=s||'';
break;


default:try{t[c('camelize')(r)]=s;}catch(
u){
throw new Error
(c('ex')('Style.set: "%s" argument is invalid: %s',r,s));}

}},









apply:function p(q,r){
var s=void 0;
for(s in r)
n('Style.apply',s,r[s]);


if('opacity' in r&&c('getOpacityStyleName')()==='filter'){
r.filter=m(r.opacity);
delete r.opacity;}


var t=k(q.style.cssText);

for(s in r){
var u=r[s];
delete r[s];

var v=c('hyphenate')(s);
for(var w in t)
if(w===v||
w.indexOf(v+'-')===0)
delete t[w];


r[v]=u;}


Object.assign(t,r);

q.style.cssText=l(t);},










get:c('getStyleProperty'),








getFloat:function p(q,r){
return parseFloat(o.get(q,r),10);},








getOpacity:function p(q){
if(c('getOpacityStyleName')()==='filter'){
var r=o.get(q,'filter');
if(r){
var s=/(\d+(?:\.\d+)?)/.exec(r);
if(s)
return parseFloat(s.pop())/100;}}



return o.getFloat(q,'opacity')||1;},










isFixed:function p(q){
while(c('containsNode')(document.body,q)){
if(o.get(q,'position')==='fixed')
return true;

q=q.parentNode;}

return false;},










getScrollParent:function p(q){
if(!q)
return null;

while(q&&q!==document.body){
if(i(q,'overflow')||
i(q,'overflowY')||
i(q,'overflowX'))
return q;

q=q.parentNode;}

return window;}};




f.exports=o;}),null);

/** js/core/dom/Style.js */




__d('Style',['StyleCore','$'],(function a(b,c,d,e,f,g){





var h=babelHelpers['extends']({},c('StyleCore'),







{get:function i(j,k){
typeof j==='string';


return c('StyleCore').get(c('$')(j),k);},







getFloat:function i(j,k){
typeof j==='string';


return c('StyleCore').getFloat(c('$')(j),k);}});



f.exports=h;}),null);

/** js/lib/FBJSON.js */











__d("FBJSON",[],(function a(b,c,d,e,f,g){

f.exports=
{parse:JSON.parse,
stringify:JSON.stringify};}),null);

/** shared_core/service_workers_shared/BGSyncConst.js */




__d('BGSyncConst',[],(function a(b,c,d,e,f,g){

f.exports=
{msgTag:
{requestID:'request-bg-sync-id',
requestUpload:'request-bg-sync-upload',
removeRequest:'remove-cached-request',
queueRequest:'queue-request'},

reqTag:
{banzai:'banzai'}};}),null);

/** shared/env/CurrentUser.js */






__d('CurrentUser',['Cookie','CurrentUserInitialData'],(function a(b,c,d,e,f,g){




var h=










{getID:function i(){
return c('CurrentUserInitialData').USER_ID;},







getAccountID:function i(){
return c('CurrentUserInitialData').ACCOUNT_ID;},





isLoggedIn:function i(){
return c('CurrentUserInitialData').USER_ID&&
c('CurrentUserInitialData').USER_ID!=='0';},








isLoggedInNow:function i(){
if(!h.isLoggedIn())
return false;





if(c('CurrentUserInitialData').IS_INTERN_SITE)
return true;




if(c('CurrentUserInitialData').IS_WORK_USER)
return true;



if(c('CurrentUserInitialData').ORIGINAL_USER_ID)
return c('CurrentUserInitialData').ORIGINAL_USER_ID===c('Cookie').get('c_user');


return c('CurrentUserInitialData').USER_ID===c('Cookie').get('c_user');},





isEmployee:function i(){
return !!c('CurrentUserInitialData').IS_EMPLOYEE;},







hasWorkUser:function i(){
return !!c('CurrentUserInitialData').HAS_WORK_USER;},





isWorkUser:function i(){
return !!c('CurrentUserInitialData').IS_WORK_USER;},





isGray:function i(){
return !!c('CurrentUserInitialData').IS_GRAY;},





isUnderage:function i(){
return !!c('CurrentUserInitialData').IS_UNDERAGE;}};




f.exports=h;}),null);

/** js/logging/Miny.js */








__d('Miny',[],(function a(b,c,d,e,f,g){

var h='Miny1',
i='wxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'.split(''),

j=

{encode:function k(l){
if(/^$|[~\\]|__proto__/.test(l))
return l;



var m=l.match(/\w+|\W+/g),

n,


o=Object.create(null);
for(n=0;n<m.length;n++)
o[m[n]]=(o[m[n]]||0)+1;




var p=Object.keys(o);
p.sort(function(s,t){return o[t]-o[s];});


for(n=0;n<p.length;n++){
var q=(n-n%32)/32;
o[p[n]]=q?q.toString(32)+i[n%32]:i[n%32];}



var r='';
for(n=0;n<m.length;n++)
r+=o[m[n]];


p.unshift(h,p.length);
p.push(r);
return p.join('~');}};



f.exports=j;}),null);

/** shared/service_worker_window/ClientServiceWorkerMessage.js */





__d("ClientServiceWorkerMessage",[],(function a(b,c,d,e,f,g){


















function h(i,j,k){"use strict";
this.$ClientServiceWorkerMessage_command=i;
this.$ClientServiceWorkerMessage_data=j;
this.$ClientServiceWorkerMessage_callback=k;}
h.prototype.




sendViaController=function(){"use strict";
if(!navigator.serviceWorker||
!navigator.serviceWorker.controller)
return;

var i=new self.MessageChannel();
if(this.$ClientServiceWorkerMessage_callback)
i.port1.onmessage=this.$ClientServiceWorkerMessage_callback;

navigator.serviceWorker.controller.postMessage
({command:this.$ClientServiceWorkerMessage_command,data:this.$ClientServiceWorkerMessage_data},
[i.port2]);};





f.exports=h;}),null);

/** shared/haste/cx.js */





__d('cx',[],(function a(b,c,d,e,f,g){


















function h
(i){


throw new Error('cx: Unexpected class transformation.');}


f.exports=h;}),null);

/** shared/service_worker_window/SharedClientServiceWorkerBackgroundSync.js */





__d('SharedClientServiceWorkerBackgroundSync',['BGSyncConst','ClientServiceWorkerMessage','DOM','memoize','ServiceWorkerBackgroundSyncGK'],(function a(b,c,d,e,f,g){






var h=c('memoize')(function(){
var l=new Uint32Array(1);
return self.crypto.getRandomValues(l)[0].
toString().
substring(2,16);});


function i
(event,
l,
m){

var n=h(),
o=event.data&&event.data.data?
event.data.data:
{},
p=l.toString();
if(n&&o.param){
if(p.indexOf('?')>-1){
p+='&';}else 

p+='?';



p=''+p+o.param+'&client_id='+n;}

if(m)
m(p,o);}



function j
(l,
m,
n,
o){

new (c('ClientServiceWorkerMessage'))
('bgSync',

{clientID:h(),
data:n,
msgTag:l,
reqTag:m},

o).
sendViaController();}


var k=
{getBackgroundSyncUri:function l
(m,
n,
o,
p){

if(k.isBackgroundSyncAvailable()){
j
(c('BGSyncConst').msgTag.requestID,
n,
o,
function(event){return i(event,m,p);});}else 


if(p)
p(m,o);},




isBackgroundSyncAvailable:function l(){

return (self&&
'serviceWorker' in self.navigator&&
'SyncManager' in self&&
!!self.navigator.serviceWorker.controller&&
c('ServiceWorkerBackgroundSyncGK').background_sync_sw);},



makeFileList:function l(m){
var n={},
o=c('DOM').scry(m,'input'),
p=0;
for(var q=o,r=Array.isArray(q),s=0,q=r?q:q[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var t;if(r){if(s>=q.length)break;t=q[s++];}else{s=q.next();if(s.done)break;t=s.value;}var u=t,
v=u.files;
if(v)
for(var w=v,x=Array.isArray(w),y=0,w=x?w:w[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var z;if(x){if(y>=w.length)break;z=w[y++];}else{y=w.next();if(y.done)break;z=y.value;}var aa=z;
n[p++]=aa;}}



return n;},


makeFormData:function l(m){
var n=c('DOM').convertFormToDictionary(m),
o=k.makeFileList(m),
p=new FormData();
Object.values(o).forEach(function(r){

p.append('filelist[]',r);});

for(var q in n)
p.append(q,n[q]);

return p;},


postFailureHandler:function l(m,n){
j
(c('BGSyncConst').msgTag.requestUpload,
n,
null,
null);},



postSuccessHandler:function l
(m,
n,
o){

j
(c('BGSyncConst').msgTag.removeRequest,
n,

{bgSyncID:o},

null);},



queueRequest:function l
(m,
n){

if(k.isBackgroundSyncAvailable())
j
(c('BGSyncConst').msgTag.queueRequest,
n,
m,
null);}};





f.exports=k;}),null);

/** shared/request/getCrossOriginTransport.js */




__d('getCrossOriginTransport',['invariant','ex'],(function a(b,c,d,e,f,g,h){






function i(){

try{var k=new XMLHttpRequest();
if(!('withCredentials' in k)&&
typeof XDomainRequest!=='undefined')
k=new XDomainRequest();

return k;}catch(
j){
throw new Error(c('ex')('getCrossOriginTransport: %s',j.message));}}



i.withCredentials=function(){
var j=i();

'withCredentials' in j||h(0,
'getCrossOriginTransport: Client does not support `withCredentials`.');

var k=j.open;
j.open=function(){
k.apply(this,arguments);
this.withCredentials=true;};

return j;};


f.exports=i;}),null);

/** shared/request/ZeroRewrites.js */





__d('ZeroRewrites',['getSameOriginTransport','getCrossOriginTransport','isFacebookURI','URI','ZeroRewriteRules'],(function a(b,c,d,e,f,g){











var h=
{rewriteURI:function i(j){
if(!c('isFacebookURI')(j)||h._isWhitelisted(j))
return j;


var k=h._getRewrittenSubdomain(j);
if(k!==null&&k!==undefined)
j=j.setSubdomain(k);

return j;},



getTransportBuilderForURI:function i(j){
return h._isRewritten(j)?
c('getCrossOriginTransport').withCredentials:c('getSameOriginTransport');},






isRewriteSafe:function i(j){
if(Object.keys(c('ZeroRewriteRules').rewrite_rules).length===0||
!c('isFacebookURI')(j))

return false;

var k=h._getCurrentURI().getDomain(),
l=new (c('URI'))(j).qualify().getDomain();

return k===l||h._isRewritten(j);},


_isWhitelisted:function i(j){
var k=j.getPath();
if(!k.endsWith('/'))
k+='/';

return c('ZeroRewriteRules').whitelist&&
c('ZeroRewriteRules').whitelist[k]==1;},


_getRewrittenSubdomain:function i(j){
var k=new (c('URI'))(j).qualify().getSubdomain();
return c('ZeroRewriteRules').rewrite_rules[k];},


_isRewritten:function i(j){
j=new (c('URI'))(j).qualify();
if(Object.keys(c('ZeroRewriteRules').rewrite_rules).length===0||
!c('isFacebookURI')(j)||
h._isWhitelisted(j))

return false;


var k=j.getSubdomain(),
l=h._getCurrentURI(),

m=h._getRewrittenSubdomain
(l);


return j.getDomain()!==l.getDomain()&&
k===m;},


_getCurrentURI:function i(){
return new (c('URI'))('/').qualify();}};



f.exports=h;}),null);

/** shared/request/getAsyncHeaders.js */





__d('getAsyncHeaders',['isFacebookURI','ZeroCategoryHeader'],(function a(b,c,d,e,f,g){









function h(i){
var j={};

if(c('isFacebookURI')(i)&&c('ZeroCategoryHeader').value)
j[c('ZeroCategoryHeader').header]=c('ZeroCategoryHeader').value;


return j;}


f.exports=h;}),null);

/** js/service_worker_www/ServiceWorkerBackgroundSyncRequest.js */





__d('ServiceWorkerBackgroundSyncRequest',['getAsyncHeaders','SharedClientServiceWorkerBackgroundSync','URI','ZeroRewrites'],(function a(b,c,d,e,f,g){















function h
(i,
j){
'use strict';
this.setMethod('POST');
this.setPostData(null);
this.setTag(i);
this.setBgSyncID('default');

if(j!==undefined)
this.setURI(j);}

h.prototype.

queueRequest=function(){'use strict';
if(this.$ServiceWorkerBackgroundSyncRequest_uri===undefined)
return;

c('SharedClientServiceWorkerBackgroundSync').getBackgroundSyncUri
(this.getURI(),
this.$ServiceWorkerBackgroundSyncRequest_tag,
null,
function(i,j){return this.$ServiceWorkerBackgroundSyncRequest_queueRequest2SW(i,j);}.bind(this));};

h.prototype.

send=function(){'use strict';
if(this.$ServiceWorkerBackgroundSyncRequest_uri===undefined)
return;

c('SharedClientServiceWorkerBackgroundSync').getBackgroundSyncUri
(this.getURI(),
this.$ServiceWorkerBackgroundSyncRequest_tag,
null,
function(i,j){return this.$ServiceWorkerBackgroundSyncRequest_sendRequest2SW(i,j);}.bind(this));};

h.prototype.

setBgSyncID=function(i){'use strict';
this.$ServiceWorkerBackgroundSyncRequest_bgSyncID=i;
return this;};
h.prototype.

getBgSyncID=function(){'use strict';
return this.$ServiceWorkerBackgroundSyncRequest_bgSyncID;};
h.prototype.

setMethod=function(i){'use strict';
this.$ServiceWorkerBackgroundSyncRequest_method=i;
return this;};
h.prototype.

setPostData=function(i){'use strict';
this.$ServiceWorkerBackgroundSyncRequest_postData=i;
return this;};
h.prototype.

setTag=function(i){'use strict';
this.$ServiceWorkerBackgroundSyncRequest_tag=i;
return this;};
h.prototype.

getTag=function(){'use strict';
return this.$ServiceWorkerBackgroundSyncRequest_tag;};
h.prototype.

setURI=function(i){'use strict';
this.$ServiceWorkerBackgroundSyncRequest_uri=c('ZeroRewrites').rewriteURI(new (c('URI'))(i));
return this;};
h.prototype.

getURI=function(){'use strict';
return this.$ServiceWorkerBackgroundSyncRequest_uri.getQualifiedURI().toString();};
h.prototype.

setErrorHandler=function(i){'use strict';
this.$ServiceWorkerBackgroundSyncRequest_onError=i;
return this;};
h.prototype.

setSuccessHandler=function(i){'use strict';
this.$ServiceWorkerBackgroundSyncRequest_onSuccess=i;
return this;};
h.prototype.

$ServiceWorkerBackgroundSyncRequest_queueRequest2SW=function(i,j){'use strict';
this.setBgSyncID(j.bgSyncID);
var k=new Blob
([this.$ServiceWorkerBackgroundSyncRequest_postData],
{type:'application/x-www-form-urlencoded'}),

l=
{request:
{body:k,
credentials:'include',
headers:c('getAsyncHeaders')(new (c('URI'))(i)),
method:this.$ServiceWorkerBackgroundSyncRequest_method,
referrer:self.location.href,
registeredTime:Date.now(),
tryCount:1,
url:i},

bgSyncID:this.getBgSyncID()};

c('SharedClientServiceWorkerBackgroundSync').queueRequest
(l,
this.$ServiceWorkerBackgroundSyncRequest_tag);};

h.prototype.

$ServiceWorkerBackgroundSyncRequest_sendRequest2SW=function(i,j){'use strict';
if(c('SharedClientServiceWorkerBackgroundSync').isBackgroundSyncAvailable())


this.setBgSyncID(j.bgSyncID);

var k=c('ZeroRewrites').getTransportBuilderForURI(this.$ServiceWorkerBackgroundSyncRequest_uri)();
k.open(this.$ServiceWorkerBackgroundSyncRequest_method,this.$ServiceWorkerBackgroundSyncRequest_uri.toString(),true);
k.onreadystatechange=function(){
if(k.readyState>=4){
var l=void 0;

try{l=k.status;}catch(
m){
l=0;}


if(l===200){
this.$ServiceWorkerBackgroundSyncRequest_successHandler(k.responseText);}else 

this.$ServiceWorkerBackgroundSyncRequest_errorHandler(k.statusText);}}.


bind(this);

k.send(this.$ServiceWorkerBackgroundSyncRequest_postData);};
h.prototype.

$ServiceWorkerBackgroundSyncRequest_errorHandler=function(i){'use strict';
if(this.$ServiceWorkerBackgroundSyncRequest_onError)
this.$ServiceWorkerBackgroundSyncRequest_onError(i);

if(c('SharedClientServiceWorkerBackgroundSync').isBackgroundSyncAvailable())
c('SharedClientServiceWorkerBackgroundSync').postFailureHandler
(i,
this.$ServiceWorkerBackgroundSyncRequest_tag);};


h.prototype.

$ServiceWorkerBackgroundSyncRequest_successHandler=function(i){'use strict';
if(this.$ServiceWorkerBackgroundSyncRequest_onSuccess)
this.$ServiceWorkerBackgroundSyncRequest_onSuccess(i);

if(c('SharedClientServiceWorkerBackgroundSync').isBackgroundSyncAvailable())

c('SharedClientServiceWorkerBackgroundSync').postSuccessHandler
(i,
this.$ServiceWorkerBackgroundSyncRequest_tag,
this.$ServiceWorkerBackgroundSyncRequest_bgSyncID);};





f.exports=h;}),null);

/** js/logging/BanzaiAdapter.js */






__d('BanzaiAdapter',['Arbiter','CurrentUser','Miny','QueryString','Run','SiteData','UserAgent','URI','ZeroRewrites','BGSyncConst','ServiceWorkerBackgroundSyncRequest','SharedClientServiceWorkerBackgroundSync','getAsyncParams','setTimeoutAcrossTransitions','BanzaiConfig'],(function a(b,c,d,e,f,g){

















var h=[],
i=new (c('Arbiter'))(),







j='/ajax/bz',
k='POST',

l={},



m=l.adapter=
{config:c('BanzaiConfig'),
endpoint:j,

getUserID:function n(){
return c('CurrentUser').getID();},


inform:function n(o){
i.inform(o);},


subscribe:function n(o,p){
return i.subscribe(o,p);},


cleanup:function n(){
var o=h;
h=[];
o.forEach(function(p){
if(p.readyState<4)
p.abort();});},




readyToSend:function n(){


return c('UserAgent').isBrowser('IE <= 8')||navigator.onLine;},


send:function n(o,p,q,r){
if(c('SharedClientServiceWorkerBackgroundSync').isBackgroundSyncAvailable()){
var s=
new (c('ServiceWorkerBackgroundSyncRequest'))(c('BGSyncConst').reqTag.banzai);
s.setURI(new (c('URI'))(j));
s.setMethod(k);
s.setSuccessHandler(function(){
if(p)
p();

if(!r)
m.inform(l.OK);});


s.setErrorHandler(function(v){
if(q)
q(v.status);

if(!r)
m.inform(l.ERROR);});


s.setPostData(m.prepForTransit(o));
s.send();
return;}

var t=c('ZeroRewrites').rewriteURI(new (c('URI'))(j)),
u=c('ZeroRewrites').getTransportBuilderForURI(t)();
u.open(k,t.toString(),true);
u.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

u.onreadystatechange=function(){
if(u.readyState>=4){






var v;

try{v=u.status;}catch(
w){
v=0;}









if(v==200){
if(p)
p();

if(!r)
m.inform(l.OK);}else{


if(q)
q(v);

if(!r)
m.inform(l.ERROR);}}};





h.push(u);


u.send(m.prepForTransit(o));},


addRequestAuthData:function n(o){

return o;},


prepForTransit:function n(o){
var p=c('getAsyncParams')(k);
p.q=JSON.stringify(o);
p.ts=Date.now();
p.ph=c('SiteData').push_phase;

if(l.FBTRACE)
p.fbtrace=l.FBTRACE;


if(l.isEnabled('miny_compression')){
var q=Date.now(),
r=c('Miny').encode(p.q);


if(r.length<p.q.length){
p.q=r;
p.miny_encode_ms=Date.now()-q;}}


return c('QueryString').encode(p);},


setHooks:function n(){









},

setUnloadHook:function n(){
c('Run').onAfterUnload(l._unload);},


onUnload:function n(o){
c('Run').onAfterUnload(o);},


isOkToSendViaBeacon:function n(){
return true;},


queueRequest:function n(o){
var p=new (c('ServiceWorkerBackgroundSyncRequest'))
(c('BGSyncConst').reqTag.banzai,
new (c('URI'))(j).getQualifiedURI());

p.setMethod(k);
p.setPostData(m.prepForTransit(o));
p.queueRequest();}};



f.exports=l;}),null);

/** shared/core/guid.js */









__d('guid',[],(function a(b,c,d,e,f,g){



function h(){
return 'f'+(Math.random()*(1<<30)).toString(16).replace('.','');}


f.exports=h;}),null);

/** js/modules/ArbiterMixin.js */




__d('ArbiterMixin',['Arbiter','guid'],(function a(b,c,d,e,f,g){




var h="arbiter$"+c('guid')(),
i=Object.prototype.hasOwnProperty,





j=



{_getArbiterInstance:function k(){
return i.call(this,h)?
this[h]:
this[h]=new (c('Arbiter'))();},


inform:function k(l,m,n){
return this._getArbiterInstance().inform(l,m,n);},


subscribe:function k(l,m,n){
return this._getArbiterInstance().subscribe(l,m,n);},


subscribeOnce:function k(l,m,n){
return this._getArbiterInstance().subscribeOnce(l,m,n);},


unsubscribe:function k(l){
this._getArbiterInstance().unsubscribe(l);},


unsubscribeCurrentSubscription:function k(){
this._getArbiterInstance().unsubscribeCurrentSubscription();},


releaseCurrentPersistentEvent:function k(){
this._getArbiterInstance().releaseCurrentPersistentEvent();},


registerCallback:function k(l,m){
return this._getArbiterInstance().registerCallback(l,m);},


query:function k(l){
return this._getArbiterInstance().query(l);}};



f.exports=j;}),null);

/** shared/page/setImmediate.js */




__d('setImmediate',['TimerStorage','setImmediateAcrossTransitions'],(function a(b,c,d,e,f,g){








f.exports=function(){for(var h=arguments.length,i=Array(h),j=0;j<h;j++)i[j]=arguments[j];
var k,
l=i[0];
i[0]=function(){
c('TimerStorage').unset(c('TimerStorage').IMMEDIATE,k);
Function.prototype.apply.call(l,this,arguments);};

k=c('setImmediateAcrossTransitions').apply(b,i);
c('TimerStorage').set(c('TimerStorage').IMMEDIATE,k);
return k;}.
bind(this);}),null);

/** shared/core/Promise.js */





__d('Promise',['invariant','TimeSlice','setImmediate','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g,h){



'use strict';
















function i(){}

















var j=null,
k={};
function l(da){

try{return da.then;}catch(
ea){
j=ea;
return k;}}



function m(da,ea){

try{return da(ea);}catch(
fa){
j=fa;
return k;}}


function n(da,ea,fa){

try{da(ea,fa);}catch(
ga){
j=ga;
return k;}}



function o(da){
if(typeof this!=='object')
throw new TypeError('Promises must be constructed via new');

if(typeof da!=='function')
throw new TypeError('not a function');

this._state=0;
this._value=null;
this._deferreds=[];
if(da===i)return;
v(da,this);}

o._noop=i;

o.prototype.then=function(da,ea){
if(this.constructor!==o)
return p(this,da,ea);

var fa=new o(i);
q(this,new u(da,ea,fa));
return fa;};


function p(da,ea,fa){
return new da.constructor(function(ga,ha){
var ia=new o(i);
ia.then(ga,ha);
q(da,new u(ea,fa,ia));});}


function q(da,ea){
while(da._state===3)
da=da._value;

if(da._state===0){
da._deferreds.push(ea);
return;}

c('setImmediate')(function fa(){
var ga=da._state===1?ea.onFulfilled:ea.onRejected;
if(ga===null){
ea.continuation(function(){});
if(da._state===1){
r(ea.promise,da._value);}else 

s(ea.promise,da._value);

return;}

var ha=m(ea.continuation.bind(null,ga),da._value);
if(ha===k){
s(ea.promise,j);}else 

r(ea.promise,ha);});}



function r(da,ea){

if(ea===da)
return s
(da,
new TypeError('A promise cannot be resolved with itself.'));



if(ea&&
(typeof ea==='object'||typeof ea==='function')){

var fa=l(ea);
if(fa===k)
return s(da,j);


if(fa===da.then&&
ea instanceof o){

da._state=3;
da._value=ea;
t(da);
return;}else
if(typeof fa==='function'){
v(fa.bind(ea),da);
return;}}


da._state=1;
da._value=ea;
t(da);}


function s(da,ea){
da._state=2;
da._value=ea;
t(da);}

function t(da){
for(var ea=0;ea<da._deferreds.length;ea++)
q(da,da._deferreds[ea]);

da._deferreds=null;}


function u(da,ea,fa){
this.onFulfilled=typeof da==='function'?da:null;
this.onRejected=typeof ea==='function'?ea:null;
this.continuation=c('TimeSlice').getGuardedContinuation('Promise Handler');
this.promise=fa;}








function v(da,ea){
var fa=false,
ga=n(da,function(ha){
if(fa)return;
fa=true;
r(ea,ha);},
function(ha){
if(fa)return;
fa=true;
s(ea,ha);});

if(!fa&&ga===k){
fa=true;
s(ea,j);}}



o.prototype.done=function(da,ea){
var fa=arguments.length?this.then.apply(this,arguments):this;
fa.then(null,function(ga){
c('setTimeoutAcrossTransitions')(function(){
throw ga;},
0);});};







var w=ca(true),
x=ca(false),
y=ca(null),
z=ca(undefined),
aa=ca(0),
ba=ca('');

function ca(da){
var ea=new o(o._noop);
ea._state=1;
ea._value=da;
return ea;}

o.resolve=function(da){
if(da instanceof o)return da;

if(da===null)return y;
if(da===undefined)return z;
if(da===true)return w;
if(da===false)return x;
if(da===0)return aa;
if(da==='')return ba;

if(typeof da==='object'||typeof da==='function')

try{var fa=da.then;
if(typeof fa==='function')
return new o(fa.bind(da));}catch(

ea){
return new o(function(ga,ha){
ha(ea);});}



return ca(da);};


o.all=function(da){



if(!Array.isArray(da))
da=[new o(function(){
throw new TypeError('Promise.all must be passed an iterable.');})];




var ea=Array.prototype.slice.call(da);

return new o(function(fa,ga){
if(ea.length===0)return fa([]);
var ha=ea.length;
function ia(ka,la){
if(la&&(typeof la==='object'||typeof la==='function'))
if(la instanceof o&&la.then===o.prototype.then){
while(la._state===3)
la=la._value;

if(la._state===1)return ia(ka,la._value);
if(la._state===2)ga(la._value);
la.then(function(oa){
ia(ka,oa);},
ga);
return;}else{

var ma=la.then;
if(typeof ma==='function'){
var na=new o(ma.bind(la));
na.then(function(oa){
ia(ka,oa);},
ga);
return;}}



ea[ka]=la;
if(--ha===0)
fa(ea);}


for(var ja=0;ja<ea.length;ja++)
ia(ja,ea[ja]);});};




o.reject=function(da){
return new o(function(ea,fa){
fa(da);});};



o.race=function(da){
return new o(function(ea,fa){
da.forEach(function(ga){
o.resolve(ga).then(ea,fa);});});};






o.prototype['catch']=function(da){
return this.then(null,da);};


f.exports=o;}),null);

/** shared/iframe/NonBlockingIFrame.js */




__d('NonBlockingIFrame',['Promise','DOM','TimeSlice'],(function a(b,c,d,e,f,g){















var h={},

i,
j;

function k(){


var n=arguments.length<=0||arguments[0]===undefined?h:arguments[0],o=arguments.length<=1||arguments[1]===undefined?document.body:arguments[1],
p,
q=
{className:'nonBlockingIframe',
width:0,
height:0,
frameborder:0,
scrolling:'no',
'aria-hidden':'true'};


if(n!==h)
q.src=n;


p=c('DOM').create('iframe',q);
p.style.left='-1000px';
p.style.position='absolute';
c('DOM').appendContent(o,p);

if(n===h){



p.contentDocument.open();
p.contentDocument.close();}


return p;}


function l(){
return new (c('Promise'))(function(n){
if(!i)
i=k();


if(i.contentDocument.readyState==='complete'){
n(i);}else{

if(!j)
j=new (c('Promise'))(function(o){
i.contentWindow.onload=c('TimeSlice').guard(function(){
o(i);},
'NonBlockingIFrame window.onload');});


n(j);}});}




var m=
{loadImage:function n(o){
return l().then(function(p){
return new (c('Promise'))(function(q,r){
var s=p.contentWindow.Image,
t=new s();

t.onload=c('TimeSlice').guard(function(){
q(t);},
'NonBlockingIFrame image.onload');
t.onerror=c('TimeSlice').guard(function(){
r(t);},
'NonBlockingIFrame image.onerror');
t.onabort=c('TimeSlice').guard(function(){
r(t);},
'NonBlockingIFrame image.onabort');
t.src=o;});});},




loadIFrame:function n(){var o=arguments.length<=0||arguments[0]===undefined?h:arguments[0];
return l().then(function(p){
var q=p.contentDocument.body;
return k(o,q);});}};




f.exports=m;}),null);

/** js/modules/isAdsExcelAddinURI.js */






__d('isAdsExcelAddinURI',[],(function a(b,c,d,e,f,g){

var h=new RegExp('(^|\\.)fbaddins\\.com$','i'),

i=['https'];










function j(k){
if(k.isEmpty()&&k.toString()!=='#')
return false;


if(!k.getDomain()&&!k.getProtocol())
return false;



return (i.indexOf(k.getProtocol())!==-1&&
h.test(k.getDomain()));}



f.exports=j;}),null);

/** js/modules/isValidURI.js */






__d('isValidURI',[],(function a(b,c,d,e,f,g){

var h=new RegExp
('((^|\\.)atlassolutions\\.com$)|'+
'((^|\\.)instagram\\.com$)|'+
'((^|\\.)wit\\.ai$)|'+
'((^|\\.)accountkit\\.com$)',
'i'),


i=['https'];










function j(k){
if(k.isEmpty()&&k.toString()!=='#')
return false;


if(!k.getDomain()&&!k.getProtocol())
return false;



return (i.includes(k.getProtocol())&&
h.test(k.getDomain()));}



f.exports=j;}),null);

/** js/modules/AsyncSignal.js */




__d('AsyncSignal',['Promise','ErrorUtils','NonBlockingIFrame','Run','QueryString','TrackingConfig','URI','WebSpeedExperiments','ZeroRewrites','isValidURI','isAdsExcelAddinURI','isFacebookURI','isMessengerDotComURI','getAsyncParams','memoize'],(function a(b,c,d,e,f,g){

















var h;




















































function i(j,k){
this.data=k||{};
this.uri=j.toString();
if(c('TrackingConfig').domain&&this.uri.charAt(0)=='/')
this.uri=c('TrackingConfig').domain+this.uri;}


















i.prototype.setHandler=function(j){
this.handler=j;

return this;};










i.prototype.setTimeout=function(j){
this.timeout=j;

return this;};









i.prototype.send=function(){
var j=this.handler,
k=this.data;

k.asyncSignal=(Math.random()*10000|0)+1;



var l=c('ZeroRewrites').rewriteURI(new (c('URI'))(this.uri)),
m=
c('isFacebookURI')(l)||
c('isMessengerDotComURI')(l)||
c('isAdsExcelAddinURI')(l)||
c('isValidURI')(l);
if(m){
Object.assign(k,c('getAsyncParams')('POST'));}else 

throw new Error("'"+this.uri+"' "+
"is an external URL, you should not send async signals to offsite links.");



var n=c('QueryString').appendToUrl(this.uri,k),
o;
if(c('WebSpeedExperiments').non_blocking_logger){
o=c('NonBlockingIFrame').
loadImage(n);}else{




if(!h)
h=new (c('Promise'))(function(r){
c('Run').onAfterLoad(r);});


o=h.then(function(){
return new (c('Promise'))(function(r,s){
var t=new Image();
t.onload=r;
t.onerror=t.onabort=s;
t.src=n;});});}




if(j){
var p=false,
q=c('memoize')(function(){
c('ErrorUtils').applyWithGuard(j,null,[p]);});


o.then
(function(){
p=true;
q();},

q).
done();

if(this.timeout)
setTimeout(q,this.timeout);}



return this;};


f.exports=i;}),null);

/** js/modules/BootloadedReact.js */




__d('BootloadedReact',['Bootloader'],(function a(b,c,d,e,f,g){



var h=
typeof Symbol==='function'&&Symbol['for']&&Symbol['for']('react.element')||
60103,

i=function k(l){
c('Bootloader').loadModules(["ReactDOM"],l,'BootloadedReact');},











j=






{isValidElement:function k(l){

return !!(typeof l==='object'&&
l!==null&&
l.$$typeof===h);},


render:function k(l,m,n){
i(function(o){
o.render(l,m,function(){
n&&n(this);});});},



unmountComponentAtNode:function k(l,m){
i(function(n){
n.unmountComponentAtNode(l);
m&&m();});}};




f.exports=j;}),null);

/** js/modules/ContextualThing.js */





__d('ContextualThing',['CSS','containsNode','ge','getOrCreateDOMID'],(function a(b,c,d,e,f,g){





















var h=

{register:function i(j,k){
j.setAttribute('data-ownerid',c('getOrCreateDOMID')(k));},


containsIncludingLayers:function i(j,k){
var l=k;
while(l){
if(c('containsNode')(j,l))
return true;

l=h.getContext(l);}

return false;},


getContext:function i(j){
var k=j,
l=void 0;
while(k){


if(k.getAttribute&&(l=k.getAttribute('data-ownerid')))
return c('ge')(l);

k=k.parentNode;}

return null;},






parentByClass:function i(j,k){
var l=j,
m=void 0;
while(l&&!c('CSS').hasClass(l,k))


if(l.getAttribute&&(m=l.getAttribute('data-ownerid'))){
l=c('ge')(m);}else 

l=l.parentNode;


return l;}};



f.exports=h;}),null);

/** js/modules/DOMDimensions.js */




__d('DOMDimensions',['Style','getDocumentScrollElement'],(function a(b,c,d,e,f,g){





var h=












{getElementDimensions:function i(j){

return {width:j.offsetWidth||0,
height:j.offsetHeight||0};},








getDocumentDimensions:function i(j){
var k=c('getDocumentScrollElement')(j),
l=k.scrollWidth||0,
m=k.scrollHeight||0;

return {width:l,height:m};},































measureElementBox:function i(j,k,l,m,n){
var o;
switch(k){
case 'left':
case 'right':
case 'top':
case 'bottom':
o=[k];
break;

case 'width':
o=['left','right'];
break;

case 'height':
o=['top','bottom'];
break;


default:throw Error('Invalid plane: '+k);}


var p=function q(r,s){
var t=0;
for(var u=0;u<o.length;u++)
t+=parseInt
(c('Style').get(j,r+'-'+o[u]+s),10)||0;

return t;};


return (l?p('padding',''):0)+
(m?p('border','-width'):0)+
(n?p('margin',''):0);}};




f.exports=h;}),null);

/** js/modules/Random.js */











































__d('Random',['ServerNonce','Alea'],(function a(b,c,d,e,f,g){

'use strict';


var h=4294967296,

i=c('ServerNonce').ServerNonce,

j=c('Alea')(i),

k=
{random:function l(){
if(typeof window!=='undefined'&&typeof Uint32Array!=='undefined'){
var m=new Uint32Array(1);
if(window.crypto&&window.crypto.getRandomValues){
return window.crypto.getRandomValues(m)[0]/h;}else
if(window.msCrypto&&window.msCrypto.getRandomValues)
return window.msCrypto.getRandomValues(m)[0]/h;}


return j();},


uint32:function l(){
return Math.floor(this.random()*h);}};



f.exports=k;}),null);

/** js/modules/Form.js */





__d('Form',['DataStore','DOM','DOMQuery','DTSG','Input','LSD','Random','PHPQuerySerializer','URI','getElementPosition','isFacebookURI','isNode'],(function a(b,c,d,e,f,g){















var h='FileList' in window,
i='FormData' in window;







function j(l){
var m={};
c('PHPQuerySerializer').serialize(l).split('&').forEach(function(n){
if(n){
var o=/^([^=]*)(?:=(.*))?$/.exec(n),
p=c('URI').decodeComponent(o[1]),
q=o[2]!==undefined,
r=q?c('URI').decodeComponent(o[2]):null;
m[p]=r;}});


return m;}


var k=

{getInputs:function l(){var m=arguments.length<=0||arguments[0]===undefined?document:arguments[0];
return [].concat
(c('DOMQuery').scry(m,'input'),
c('DOMQuery').scry(m,'select'),
c('DOMQuery').scry(m,'textarea'),
c('DOMQuery').scry(m,'button'));},



getInputsByName:function l(m){
var n={};
k.getInputs(m).forEach(function(o){
var p=n[o.name];
n[o.name]=typeof p==='undefined'?
o:[o].concat(p);});

return n;},


getSelectValue:function l(m){
return m.options[m.selectedIndex].value;},


setSelectValue:function l(m,n){
for(var o=0;o<m.options.length;++o)
if(m.options[o].value==n){
m.selectedIndex=o;
break;}},




getRadioValue:function l(m){
for(var n=0;n<m.length;n++)
if(m[n].checked)
return m[n].value;


return null;},


getElements:function l(m){


return m.tagName=='FORM'&&m.elements!=m?
Array.from(m.elements):
k.getInputs(m);},













getAttribute:function l(m,n){
return (m.getAttributeNode(n)||{}).value||null;},














setDisabled:function l(m,n){
k.getElements(m).forEach(function(o){
if(o.disabled!==undefined){
var p=c('DataStore').get(o,'origDisabledState');
if(n){




if(p===undefined)
c('DataStore').set(o,'origDisabledState',o.disabled);

o.disabled=n;}else 


if(p===false)
o.disabled=false;}});},

















forEachValue:function l(m,n,o){
k.getElements(m).forEach(function(p){

if(!p.name||p.disabled)
return;


if(p.type==='submit')
return;


if(p.type==='reset'||
p.type==='button'||
p.type==='image')
return;


if((p.type==='radio'||p.type==='checkbox')&&
!p.checked)
return;



if(p.nodeName==='SELECT'){
for(var q=0,r=p.options.length;q<r;q++){
var s=p.options[q];
if(s.selected)
o('select',p.name,s.value);}


return;}



if(p.type==='file'){
if(h){
var t=p.files;








for(var u=0;u<t.length;u++)
o('file',p.name,t.item(u));}


return;}



o(p.type,p.name,c('Input').getValue(p));});

if(n&&
n.name&&
n.type==='submit'&&
c('DOMQuery').contains(m,n)&&
c('DOMQuery').isNodeOfType(n,['input','button']))
o('submit',n.name,n.value);},







createFormData:function l(m,n){
if(!i)
return null;

var o=new FormData();
if(m)
if(c('isNode')(m)){
k.forEachValue(m,n,function(r,s,t){
o.append(s,t);});}else{


var p=j(m);
for(var q in p)
if(p[q]==null){


o.append(q,'');}else 

o.append(q,p[q]);}




return o;},


serialize:function l(m,n){
var o={};
k.forEachValue(m,n,function(p,q,r){
if(p==='file')

return;

k._serializeHelper(o,q,r);});

return k._serializeFix(o);},


_serializeHelper:function l(m,n,o){
var p=Object.prototype.hasOwnProperty,
q=/([^\]]+)\[([^\]]*)\](.*)/.exec(n);
if(q){




if(!m[q[1]]||!p.call(m,q[1])){
var r;
m[q[1]]=r={};
if(m[q[1]]!==r)


return;}


var s=0;
if(q[2]===''){
while(m[q[1]][s]!==undefined)
s++;}else 


s=q[2];

if(q[3]===''){
m[q[1]][s]=o;}else 

k._serializeHelper(m[q[1]],s.concat(q[3]),o);}else 


m[n]=o;},









_serializeFix:function l(m){
for(var n in m)
if(m[n] instanceof Object)
m[n]=k._serializeFix(m[n]);


var o=Object.keys(m);
if(o.length===0||o.some(isNaN))
return m;


o.sort(function(r,s){
return r-s;});

var p=0,
q=o.every(function(r){
return +r===p++;});

if(q)
return o.map(function(r){
return m[r];});


return m;},




post:function l(m,n,o){var p=arguments.length<=3||arguments[3]===undefined?true:arguments[3],
q=new (c('URI'))(m),
r=document.createElement('form');
r.action=q.toString();
r.method='POST';
r.style.display='none';

var s=!c('isFacebookURI')(q);

if(o){

if(s){
r.rel='noopener';
if(o==='_blank'){
o=btoa(c('Random').uint32());
var t=window.open('about:blank',o);
if(!(t===undefined))
t.opener=null;}}



r.target=o;}




if(p)



if(!s&&q.getSubdomain()!=='apps'){
n.fb_dtsg=c('DTSG').getToken();
if(c('LSD').token)
n.lsd=c('LSD').token;}




k.createHiddenInputs(n,r);

c('DOMQuery').getRootElement().appendChild(r);
r.submit();

return false;},














createHiddenInputs:function l(m,n,o){var p=arguments.length<=3||arguments[3]===undefined?false:arguments[3];
o=o||{};
var q=j(m);
for(var r in q){
if(q[r]===null)
continue;

if(o[r]&&p){
o[r].value=q[r];}else{

var s=c('DOM').create('input',
{type:'hidden',
name:r,
value:q[r]});

o[r]=s;
n.appendChild(s);}}


return o;},











getFirstElement:function l
(m){







var n=arguments.length<=1||arguments[1]===undefined?['input[type="text"]','textarea','input[type="password"]','input[type="button"]','input[type="submit"]']:arguments[1],
o=[];
for(var p=0;p<n.length;p++){
o=c('DOMQuery').scry(m,n[p]);
for(var q=0;q<o.length;q++){
var r=o[q];

try{var t=c('getElementPosition')(r);
if(t.y>0&&t.x>0)
return r;}catch(

s){}}}




return null;},













focusFirst:function l(m){
var n=k.getFirstElement(m);
if(n){
n.focus();
return true;}

return false;}};



f.exports=k;}),null);

/** js/modules/KeyEventController.js */




__d('KeyEventController',['DOMQuery','Event','Run','emptyFunction','getElementText','isEmpty'],(function a(b,c,d,e,f,g){










var h=null,


i=['input','select','textarea','object','embed'],


j={button:1,checkbox:1,radio:1,submit:1,file:1},


k=
{BACKSPACE:[8],
TAB:[9],
RETURN:[13],
ALT:[18],
ESCAPE:[27],
LEFT:[37,63234],
UP:[38,63232],
RIGHT:[39,63235],
DOWN:[40,63233],
DELETE:[46],
COMMA:[188],
PERIOD:[190],
SLASH:[191],
'`':[192],
'[':[219],
']':[221],
PAGE_UP:[33],
PAGE_DOWN:[34],
END:[35],
HOME:[36],
SPACE:[32],
KP_DOT:[46,110],
'-':[189],
'=':[187]},



l=
{8:1,
9:1,
13:1,
27:1,
32:1,
37:1,63234:1,
38:1,63232:1,
39:1,63235:1,
40:1,63233:1,
46:1};

















































function m(){'use strict';
this.handlers={};
document.onkeyup=this.onkeyevent.bind(this,'onkeyup');
document.onkeydown=this.onkeyevent.bind(this,'onkeydown');
document.onkeypress=this.onkeyevent.bind(this,'onkeypress');}
m.prototype.

mapKey=function(n){'use strict';
if(n>=0&&n<=9){


if(typeof n!='number')

n=n.charCodeAt(0)-48;



return [48+n,96+n];}


var o=k[n.toUpperCase()];
if(o)
return o;



return [n.toUpperCase().charCodeAt(0)];};
m.prototype.

onkeyevent=function(n,o){'use strict';
o=c('Event').$E(o);

var p=this.handlers[o.keyCode]||this.handlers[o.which],
q,r,s;

if(p)
for(var t=0;t<p.length;t++){
q=p[t].callback;
r=p[t].filter;


try{if(!r||r(o,n)){
s=q(o,n);
if(s===false)
return c('Event').kill(o);}}catch(


u){
}}




return true;};
m.prototype.

resetHandlers=function(){'use strict';
for(var n in this.handlers)
if(Object.prototype.hasOwnProperty.call(this.handlers,n)){
var o=this.handlers[n].filter
(function(p){return p.preserve();});


if(o.length){
this.handlers[n]=o;}else 

delete this.handlers[n];}};



m.

getInstance=function(){'use strict';
return h||(h=new m());};
m.

defaultFilter=function(event,n){'use strict';
event=c('Event').$E(event);
return m.filterEventTypes(event,n)&&
m.filterEventTargets(event,n)&&
m.filterEventModifiers(event,n);};
m.

filterEventTypes=function(event,n){'use strict';
if(n==='onkeydown')
return true;


return false;};
m.

filterEventTargets=function(event,n){'use strict';
var o=event.getTarget(),



p=
o.contentEditable==='true'||
o.contentEditable==='plaintext-only';




return (!(p||c('DOMQuery').isNodeOfType(o,i))||

o.type in j||


event.keyCode in l&&
(c('DOMQuery').isNodeOfType(o,['input','textarea'])&&
o.value.length===0||
p&&c('getElementText')(o).length===0));};

m.

filterEventModifiers=function(event,n){'use strict';
if(event.ctrlKey||event.altKey||event.metaKey||event.repeat)
return false;


return true;};
m.






registerKey=
function(n,
o){



var p=arguments.length<=2||arguments[2]===undefined?m.defaultFilter:arguments[2],q=arguments.length<=3||arguments[3]===undefined?false:arguments[3],r=arguments.length<=4||arguments[4]===undefined?c('emptyFunction').thatReturnsFalse:arguments[4];'use strict';
var s=m.getInstance(),
t=s.mapKey(n);

if(c('isEmpty')(s.handlers))





c('Run').onLeave(s.resetHandlers.bind(s));


var u={};
for(var v=0;v<t.length;v++){
n=t[v];
if(!s.handlers[n]||q)
s.handlers[n]=[];


var w=
{callback:o,
filter:p,
preserve:r};

u[n]=w;
s.handlers[n].push(w);}




return {remove:function x(){
for(var y in u){
if(s.handlers[y]&&s.handlers[y].length){
var z=s.handlers[y].indexOf(u[y]);
z>=0&&s.handlers[y].splice(z,1);}

delete u[y];}}};};






f.exports=m;}),null);

/** js/modules/bind.js */




__d('bind',[],(function a(b,c,d,e,f,g){

































































































function h(i,j){
var k=Array.prototype.slice.call(arguments,2);

if(typeof j!='string')
return Function.prototype.bind.apply(j,[i].concat(k));


function l(){
var m=k.concat(Array.prototype.slice.call(arguments));
if(i[j])
return i[j].apply(i,m);}






l.toString=function(){
return 'bound lazily: '+i[j];};

return l;}


f.exports=h;}),null);

/** shared/core/debounceCore.js */





__d("debounceCore",[],(function a(b,c,d,e,f,g){



























function h(i,j,k,l,m){
l=l||setTimeout;
m=m||clearTimeout;
var n=void 0;

function o(){for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];
o.reset();

var s=function t(){
i.apply(k,q);};

s.__SMmeta=i.__SMmeta;
n=l(s,j);}


o.reset=function(){
m(n);};


return o;}


f.exports=h;}),null);

/** js/modules/utils/debounce.js */






__d('debounce',['debounceCore','setTimeout'],(function a(b,c,d,e,f,g){















function h



(i,
j,
k,
l){

if(j==null)
j=100;

var m=function n(o,p,q){

return c('setTimeout')(o,p,q,!l);};


return c('debounceCore')(i,j,k,m);}


f.exports=h;}),null);

/** js/react_stubs/EventListener.js */




__d('EventListener',['Event','TimeSlice','emptyFunction','setImmediateAcrossTransitions'],(function a(b,c,d,e,f,g){













var h=








{listen:c('Event').listen,









capture:function i(j,k,l){
l=c('TimeSlice').guard(l,'EventListener capture '+k);
if(j.addEventListener){
j.addEventListener(k,l,true);

return {remove:function m(){
j.removeEventListener(k,l,true);}};}else 











return {remove:c('emptyFunction')};},











registerDefault:function i(j,k){
var l=void 0,
m=c('Event').listen
(document.documentElement,
j,
n,
c('Event').Priority._BUBBLE);

function n(){
o();
l=c('Event').listen(document,j,k);
c('setImmediateAcrossTransitions')(o);}

function o(){
l&&l.remove();
l=null;}


return {remove:function p(){
o();
m&&m.remove();
m=null;}};}};






f.exports=h;}),null);

/** shared/banzai/BanzaiServiceWorker.js */




__d('BanzaiServiceWorker',['BanzaiAdapter','BGSyncConst','setTimeoutAcrossTransitions','SharedClientServiceWorkerBackgroundSync','ServiceWorkerBackgroundSyncBanzaiGK'],(function a(b,c,d,e,f,g){







var h=c('BanzaiAdapter').adapter,
i=60000,

j=void 0,
k=void 0;



function l(o){
var p=Date.now()+o;
if(!k||p<k){
k=p;
clearTimeout(j);
j=c('setTimeoutAcrossTransitions')(n.sync,o);}}



function m(o){
h.queueRequest(o);}


var n=
{flush:function o(){
clearTimeout(j);
j=0;
n.sync();},


isEnabled:function o(){

return (c('SharedClientServiceWorkerBackgroundSync').isBackgroundSyncAvailable()&&
c('ServiceWorkerBackgroundSyncBanzaiGK').sw_background_sync_banzai);},



send:function o
(p,
q,
r,
s){

if(q){
h.send(p);
if(!s)
return;}



m(p);
l(r);},


sync:function o(){

k=null;
l(i);


c('SharedClientServiceWorkerBackgroundSync').postFailureHandler
(null,
c('BGSyncConst').reqTag.banzai);}};




f.exports=n;}),null);

/** shared/core/Visibility.js */



























__d('Visibility',['TimeSlice','mixInEventEmitter'],(function a(b,c,d,e,f,g){







var h=void 0,i=void 0;
if(document.hidden!==undefined){
h='hidden';
i='visibilitychange';}else
if(document.mozHidden!==undefined){
h='mozHidden';
i='mozvisibilitychange';}else
if(document.msHidden!==undefined){
h='msHidden';
i='msvisibilitychange';}else
if(document.webkitHidden!==undefined){
h='webkitHidden';
i='webkitvisibilitychange';}









function j(){
return h?document[h]:false;}


function k(){
return document.addEventListener&&i!==undefined;}


var l=

{HIDDEN:'hidden',


VISIBLE:'visible',

isHidden:j,


isSupported:k};


c('mixInEventEmitter')(l,{visible:true,hidden:true});

if(k())
document.addEventListener(i,c('TimeSlice').guard
(function m(){
l.emit(j()?l.HIDDEN:l.VISIBLE);},
'visibility change'));



f.exports=l;}),null);

/** shared/storage/WebStorageMutex.js */




__d('WebStorageMutex',['WebStorage','setTimeoutAcrossTransitions','pageID'],(function a(b,c,d,e,f,g){


























var h=null,
i=false,
j=c('pageID');

function k(){
if(!i){
i=true;
h=c('WebStorage').getLocalStorage();}

return h;}







function l(m){'use strict';
this.name=m;}
l.




testSetPageID=function(m){'use strict';
j=m;};
l.prototype.





$WebStorageMutex_owner=function(){'use strict';
if(!k())

return j;

var m=k().getItem('mutex_'+this.name);
m=m?m.split(':'):null;
return m&&m[1]>=Date.now()?m[0]:null;};
l.prototype.






$WebStorageMutex_writeLock=function(m){'use strict';
if(!k())
return;


var n=Date.now()+(m||10000);
c('WebStorage').setItemGuarded
(k(),
'mutex_'+this.name,
j+':'+n);};

l.prototype.




hasLock=function(){'use strict';
return this.$WebStorageMutex_owner()==j;};
l.prototype.










lock=function(m,n,o){'use strict';
if(this.$WebStorageMutex_locking)
clearTimeout(this.$WebStorageMutex_locking);



if(j==(this.$WebStorageMutex_owner()||j))
this.$WebStorageMutex_writeLock(o);





this.$WebStorageMutex_locking=c('setTimeoutAcrossTransitions')
(function(){
this.$WebStorageMutex_locking=null;
var p=this.hasLock()?m:n;
if(p)
p(this);}.

bind(this),
0);};

l.prototype.




unlock=function(){'use strict';
if(this.$WebStorageMutex_locking)
clearTimeout(this.$WebStorageMutex_locking);

if(k()&&this.hasLock())
k().removeItem('mutex_'+this.name);};




f.exports=l;}),null);

/** shared/banzai/Banzai.js */




__d('Banzai',['BanzaiAdapter','BanzaiServiceWorker','CurrentUser','ErrorUtils','ExecutionEnvironment','FBJSON','NavigationMetrics','TimeSlice','Visibility','WebStorage','emptyFunction','isInIframe','lowerFacebookDomain','pageID','setTimeoutAcrossTransitions','WebStorageMutex'],(function a(b,c,d,e,f,g){










































































































var h=c('BanzaiAdapter').adapter,
i=c('isInIframe')(),

j='bz:',

k='ods:banzai',
l='send_via_beacon_failure',


m=0,
n=1,
o=2,

p,
q,

r=[],

s=null,

t=[];

function u(ia){
return ia[2]>=Date.now()-(h.config.EXPIRY||c('BanzaiAdapter').EXPIRY);}



function v(ia,ja){

ia.__meta.status=m;
ia[3]=(ia[3]||0)+1;





if(!ia.__meta.retry&&ja>=400&&ja<600)
r.push(ia);}




function w(ia,ja,ka,la){
var ma=
[ia,
ja,
ka,
0];



ma.__meta=
{retry:la===true,
pageID:c('pageID'),
userID:c('CurrentUser').getID(),
status:m};


return ma;}


function x(){
var ia=[];
t.forEach(function(na){
var oa=na.cb();
oa.forEach(function(pa){
var qa=na.route;
if(qa){
var ra=w(qa,pa,Date.now());
ra.__meta.onSuccess=na.onSuccess;
ra.__meta.onFailure=na.onFailure;
ia.push(ra);}});});



t=[];
var ja=[],
ka=[];
ca(ja,ka,true,ia);
if(ja.length>0){
ja[0].send_method='beacon';
var la=new Blob
([h.addRequestAuthData(h.prepForTransit(ja))],
{type:'application/x-www-form-urlencoded'}),

ma=navigator.sendBeacon(c('BanzaiAdapter').adapter.endpoint,la);

if(ma){
ka.forEach(function(na){return ia.__meta&&
na.__meta.onSuccess&&na.__meta.onSuccess();});}else 

ka.forEach(function(na){return ia.__meta&&
na.__meta.onFailure&&na.__meta.onFailure();});}}








function y(ia){
var ja=Date.now()+ia;
if(!q||ja<q){
q=ja;
clearTimeout(p);
p=c('setTimeoutAcrossTransitions')(z,ia);
return true;}

return false;}



var z=c('TimeSlice').guard(function(){
aa(null,null);},
'Banzai.send',{isContinuation:false});

function aa(ia,ja){

q=null;
y(c('BanzaiAdapter').BASIC.delay);


if(!h.readyToSend()){
if(ja)
ja();

return;}



h.inform(c('BanzaiAdapter').SEND);

var ka=[],
la=[];
r=ca
(ka,
la,
true,
r);




if(ka.length<=0){

h.inform(c('BanzaiAdapter').OK);
if(ia)
ia();

return;}







ka[0].trigger=s;
s=null;

ka[0].send_method='ajax';

h.send(ka,
function(){

la.forEach(function(ma){
ma.__meta.status=o;});

if(ia)
ia();},


function(ma){


la.forEach(function(na){
v(na,ma);});


if(ja)
ja();});}








function ba(){

if(!(navigator&&navigator.sendBeacon&&h.isOkToSendViaBeacon()))
return;


var ia=[],
ja=[];
r=ca
(ia,
ja,
false,
r);


if(ia.length<=0)
return;


ia[0].send_method='beacon';

var ka=new Blob
([h.addRequestAuthData(h.prepForTransit(ia))],
{type:'application/x-www-form-urlencoded'}),


la=navigator.sendBeacon(c('BanzaiAdapter').adapter.endpoint,ka);
if(!la){var ma;


ja.forEach(function(na){
r.push(na);});



r.push
(w
(k,(ma={},ma[
l]=[1],ma),
Date.now()));}}
















function ca
(ia,
ja,
ka,
la){

var ma={};

return la.filter(function(na){
var oa=na.__meta;


if(oa.status>=o||!u(na))
return false;



if(oa.status>=n)
return true;



var pa=oa.pageID+oa.userID,
qa=ma[pa];
if(!qa){
qa=
{user:oa.userID,
page_id:oa.pageID,
posts:[]};

ma[pa]=qa;
ia.push(qa);}



oa.status=n;
qa.posts.push(na);
ja.push(na);



return ka&&oa.retry;});}




var da,
ea,
fa=false;

function ga(){
if(!fa){
fa=true;
ea=c('WebStorage').getLocalStorage();}

return ea;}


function ha(){
if(!da)
if(!i){
da=
{store:function ia(){
var ja=ga();
if(!ja||r.length<=0)
return;


var ka=r.map(function(la){
return [la[0],la[1],la[2],la[3]||0,la.__meta];});

r=[];


ja.setItem
(j+c('pageID')+'.'+Date.now(),
c('FBJSON').stringify(ka));},



restore:function ia(){
var ja=ga();
if(!ja)
return;



var ka=c('WebStorageMutex');
new ka('banzai').lock(function(la){



var ma=[];
for(var na=0;na<ja.length;na++){
var oa=ja.key(na);


if(oa.indexOf(j)===0&&
oa.indexOf('bz:__')!==0)
ma.push(oa);}




ma.forEach(function(pa){


var qa=ja.getItem(pa);
ja.removeItem(pa);

if(!qa)
return;



var ra=c('FBJSON').parse(qa,f.id);
ra.forEach(function(sa){
if(!sa)return;

var ta=sa.__meta=sa.pop(),

ua=u(sa);

if(!ua)
return;


var va=c('CurrentUser').getID();
if(ta.userID===va||va==='0'){
ta.status=m;
r.push(sa);}});});




la.unlock();});}};}else 




da=
{store:c('emptyFunction'),
restore:c('emptyFunction')};}










c('BanzaiAdapter').SEND='Banzai:SEND';
c('BanzaiAdapter').OK='Banzai:OK';
c('BanzaiAdapter').ERROR='Banzai:ERROR';
c('BanzaiAdapter').SHUTDOWN='Banzai:SHUTDOWN';

c('BanzaiAdapter').VITAL_WAIT=1000;
c('BanzaiAdapter').BASIC_WAIT=60000;



c('BanzaiAdapter').EXPIRY=30*60000;




c('BanzaiAdapter').VITAL={delay:h.config.MIN_WAIT||c('BanzaiAdapter').VITAL_WAIT};
c('BanzaiAdapter').BASIC={delay:h.config.MAX_WAIT||c('BanzaiAdapter').BASIC_WAIT};

c('BanzaiAdapter').FBTRACE=h.config.fbtrace;

c('BanzaiAdapter').isEnabled=function(ia){





return h.config.gks&&h.config.gks[ia];};



c('BanzaiAdapter').post=function(ia,ja,ka){

if(!ia)
c('ErrorUtils').reportError
(new Error('Banzai.post called without specifying a route'));


ka=ka||{};
var la=ka.retry;


if(h.config.disabled)
return;


if(!c('ExecutionEnvironment').canUseDOM)
return;



var ma=h.config.blacklist;
if(ma)
if(ma.indexOf)
if(typeof ma.indexOf=='function')
if(ma.indexOf(ia)!=-1)
return;







if(i&&c('lowerFacebookDomain').isValidDocumentDomain()){
var na=void 0;

try{na=b.top.require('Banzai');}catch(
oa){


na=null;}


if(na){
na.post.apply(na,arguments);
return;}}




var pa=w(ia,ja,Date.now(),la),

qa=ka.delay;
if(qa==null)
qa=c('BanzaiAdapter').BASIC_WAIT;


if(c('BanzaiServiceWorker').isEnabled()){
var ra=
[{user:c('CurrentUser').getID(),
page_id:c('pageID'),
posts:[pa],
trigger:ia}];

c('BanzaiServiceWorker').send
(ra,
ka.signal,
qa,
la);

return;}

if(ka.signal){


pa.__meta.status=n;

var sa=
[{user:c('CurrentUser').getID(),
page_id:c('pageID'),
posts:[pa],
trigger:ia}];


h.send
(sa,
function(){
pa.__meta.status=o;},

function(ta){
v(pa,ta);},

true);




if(!la)
return;}



r.push(pa);


if(y(qa)||!s)
s=ia;};





c('BanzaiAdapter').registerToSendWithBeacon=
function(ia,
ja,
ka,
la){

if(!(navigator&&navigator.sendBeacon&&h.isOkToSendViaBeacon()))
return false;


if(!ia){
c('ErrorUtils').reportError(new Error
('Banzai.registerToSendWithBeacon called without specifying a route'));

return false;}


t.push
({cb:ja,
route:ia,
onSuccess:ka,
onFailure:la});

return true;};


c('BanzaiAdapter').flush=function(ia,ja){
clearTimeout(p);
p=0;
aa(ia,ja);};


c('BanzaiAdapter').subscribe=h.subscribe;

c('BanzaiAdapter').canUseNavigatorBeacon=function(){
return navigator&&navigator.sendBeacon&&h.isOkToSendViaBeacon();};




c('BanzaiAdapter')._schedule=y;




c('BanzaiAdapter')._store=function(ia){
ha();
c('ErrorUtils').applyWithGuard(da.store,da);};





c('BanzaiAdapter')._restore=function(ia){
ha();
c('ErrorUtils').applyWithGuard(da.restore,da);


y(h.config.RESTORE_WAIT||c('BanzaiAdapter').VITAL_WAIT);};





c('BanzaiAdapter')._unload=function(){
if(c('BanzaiServiceWorker').isEnabled())
c('BanzaiServiceWorker').sync();


if(navigator&&navigator.sendBeacon&&h.isOkToSendViaBeacon())
x();


h.cleanup();
h.inform(c('BanzaiAdapter').SHUTDOWN);
if(c('BanzaiAdapter').isEnabled('beacon_hailmary')&&r.length>0)
ba();

if(r.length>0){
ha();
c('ErrorUtils').applyWithGuard(da.store,da);}};







c('BanzaiAdapter')._testState=function(){

return {postBuffer:r,
triggerRoute:s};};







(c('BanzaiAdapter')._initialize=function(){
if(c('ExecutionEnvironment').canUseDOM){
if(c('BanzaiAdapter').isEnabled('beacon_hailmary')&&c('Visibility').isSupported()){



c('Visibility').addListener
(c('Visibility').HIDDEN,
function(){
if(r.length>0)
ba();

if(r.length>0){
ha();
c('ErrorUtils').applyWithGuard(da.store,da);}});}else 





h.setHooks();

h.setUnloadHook();


c('NavigationMetrics').addListener
(c('NavigationMetrics').Events.NAVIGATION_DONE,
function(ia,ja){
if(ja.pageType!=='normal')
return;

c('BanzaiAdapter')._restore();
c('NavigationMetrics').removeCurrentListener();});}})



();

f.exports=c('BanzaiAdapter');}),null);

/** shared/banzai/BanzaiScuba.js */



















__d("BanzaiScuba",["Banzai"],(function a(b,c,d,e,f,g){

var h="scuba_sample";



function i(l,m,n){
this.fields={};
this.post=function(o){

if(!l)



return;


var p=babelHelpers["extends"]({},this.fields);


p._ds=l;



if(m)p._lid=m;


p._options=n;


c("Banzai").post(h,p,o);


this.post=function(){



};
this.posted=true;};


this.lid=m;

return this;}


function j(l,m,n){
if(!this.fields[l])
this.fields[l]={};


this.fields[l][m]=n;
return this;}


function k(l){
return function(m,n){
if(this.posted)




return this;


return j.call(this,l,m,n);};}



Object.assign(i.prototype,
{post:function l(){},
addNormal:k('normal'),
addInteger:k('int'),
addDenorm:k('denorm'),
addTagset:k('tags'),
addNormVector:k('normvector')});


f.exports=i;}),null);

/** js/ui/behavior/UITinyViewportAction.js */










__d('UITinyViewportAction',['Arbiter','ArbiterMixin','BanzaiScuba','CSS','Event','getDocumentScrollElement','queryThenMutateDOM'],(function a(b,c,d,e,f,g){










var h=document.documentElement,
i,
j,
k,
l,
m=false,
n=false,
o=false,
p=false,

q=

{init:function r(s){
var t=c('queryThenMutateDOM').bind
(null,
function(){
l=l||c('getDocumentScrollElement')();

j=h.clientWidth<l.scrollWidth-1;
k=h.clientHeight<400;
i=k||j;},

function(){
if(i!==m||
j!==n||
k!==o){
c('CSS').conditionClass(h,'tinyViewport',i);
c('CSS').conditionClass(h,'tinyWidth',j);
c('CSS').conditionClass(h,'tinyHeight',k);
c('CSS').conditionClass(h,'canHaveFixedElements',!i);
q.inform('change',i);
c('Arbiter').inform('tinyViewport/change',
{tiny:i,
tinyWidth:j,
tinyHeight:k},
c('Arbiter').BEHAVIOR_STATE);
m=i;
n=j;
o=k;}




if(!p){
var u=new (c('BanzaiScuba'))
('www_tinyview_port',
null,

{addBrowserFields:true});


u.addInteger('clientWidth',h.clientWidth);
u.addInteger('clientHeight',h.clientHeight);
u.addNormal('view',i?'tiny':'normal');
u.post();
p=true;}},


'TinyViewport');


t();
c('Arbiter').subscribe('quickling/response',t);
c('Event').listen(window,'resize',t);},


isTiny:function r(){
return i;},


isTinyWidth:function r(){
return j;},


isTinyHeight:function r(){
return k;}};



Object.assign(q,c('ArbiterMixin'));

f.exports=q;}),null);

/** js/ui/core/ui/button/Button.js */






__d('Button',['csx','cx','CSS','DataStore','DOM','Event','Parent','emptyFunction','isNode'],(function a(b,c,d,e,f,g,h,i){












var j='uiButtonDisabled',
k='uiButtonDepressed',
l="_42fr",
m="_42fs",
n='button:blocker',
o='href',
p='ajaxify';

function q(w,x){
var y=c('DataStore').get(w,n);
if(x){
if(y){
y.remove();
c('DataStore').remove(w,n);}}else

if(!y)
c('DataStore').set
(w,
n,
c('Event').listen
(w,'click',c('emptyFunction').thatReturnsFalse,c('Event').Priority.URGENT));}





function r(w){
var x=c('Parent').byClass(w,'uiButton')||
c('Parent').bySelector(w,"._42ft");
if(!x)
throw new Error('invalid use case');

return x;}


function s(w){
return c('DOM').isNodeOfType(w,'a');}


function t(w){
return c('DOM').isNodeOfType(w,'button');}


function u(w){
return c('CSS').matchesSelector(w,"._42ft");}


var v=






{getInputElement:function w(x){
x=r(x);
if(s(x))
throw new Error('invalid use case');

return t(x)?x:c('DOM').find(x,'input');},








isEnabled:function w(x){
return !(c('CSS').hasClass(r(x),j)||
c('CSS').hasClass(r(x),l));},








setEnabled:function w(x,y){
x=r(x);
var z=u(x)?l:j;
c('CSS').conditionClass(x,z,!y);

if(s(x)){
var aa=x.getAttribute('href'),
ba=x.getAttribute('ajaxify'),
ca=c('DataStore').get(x,o,'#'),
da=c('DataStore').get(x,p);
if(y){
if(!aa)
x.setAttribute('href',ca);

if(!ba&&da)
x.setAttribute('ajaxify',da);

x.removeAttribute('tabIndex');}else{

if(aa&&aa!==ca)
c('DataStore').set(x,o,aa);

if(ba&&ba!==da)
c('DataStore').set(x,p,ba);

x.removeAttribute('href');
x.removeAttribute('ajaxify');
x.setAttribute('tabIndex','-1');}


q(x,y);}else{

var ea=v.getInputElement(x);
ea.disabled=!y;

q(ea,y);}},









setDepressed:function w(x,y){
x=r(x);
var z=u(x)?
m:
k;
c('CSS').conditionClass(x,z,y);},








isDepressed:function w(x){
x=r(x);
var y=u(x)?
m:
k;
return c('CSS').hasClass(x,y);},









setLabel:function w(x,y){
x=r(x);
if(u(x)){
var z=[];
if(y)
z.push(y);

var aa=c('DOM').scry(x,'.img')[0];
if(aa)
if(x.firstChild==aa){
z.unshift(aa);}else 

z.push(aa);


c('DOM').setContent(x,z);}else
if(s(x)){
var ba=c('DOM').find(x,'span.uiButtonText');
c('DOM').setContent(ba,y);}else 

v.getInputElement(x).value=y;

var ca=u(x)?
"_42fv":
'uiButtonNoText';
c('CSS').conditionClass(x,ca,!y);},


getIcon:function w(x){
x=r(x);
return c('DOM').scry(x,'.img')[0];},








setIcon:function w(x,y){
if(y&&!c('isNode')(y))
return;

var z=v.getIcon(x);
if(!y){
z&&c('DOM').remove(z);
return;}

c('CSS').addClass(y,'customimg');
if(z!=y)
if(z){
c('DOM').replace(z,y);}else 

c('DOM').prependContent(r(x),y);}};





f.exports=v;}),null);

/** shared/core/BehaviorsMixin.js */










__d('BehaviorsMixin',[],(function a(b,c,d,e,f,g){






function h(l){'use strict';
this.$InstalledBehavior_behavior=l;
this.$InstalledBehavior_enabled=false;}









h.prototype.
enable=function(){'use strict';
if(!this.$InstalledBehavior_enabled){
this.$InstalledBehavior_enabled=true;
this.$InstalledBehavior_behavior.enable();}};

h.prototype.
disable=function(){'use strict';
if(this.$InstalledBehavior_enabled){
this.$InstalledBehavior_enabled=false;
this.$InstalledBehavior_behavior.disable();}};





var i=1;

function j(l){
if(!l.__BEHAVIOR_ID)
l.__BEHAVIOR_ID=i++;

return l.__BEHAVIOR_ID;}


var k=






{enableBehavior:function l(m){
if(!this._behaviors)
this._behaviors={};

var n=j(m);
if(!this._behaviors[n])
this._behaviors[n]=new h(new m(this));

this._behaviors[n].enable();
return this;},








disableBehavior:function l(m){
if(this._behaviors){
var n=j(m);
if(this._behaviors[n])
this._behaviors[n].disable();}


return this;},








enableBehaviors:function l(m){
m.forEach(this.enableBehavior,this);
return this;},









destroyBehaviors:function l(){
if(this._behaviors){
for(var m in this._behaviors)
this._behaviors[m].disable();

this._behaviors={};}},










hasBehavior:function l(m){
return this._behaviors&&j(m) in this._behaviors;}};



f.exports=k;}),null);

/** shared/core/areJSONRepresentationsEqual.js */




__d("areJSONRepresentationsEqual",[],(function a(b,c,d,e,f,g){

function h(i,j){
return JSON.stringify(i)==JSON.stringify(j);}


f.exports=h;}),null);

/** shared/core/mixin.js */




__d('mixin',[],(function a(b,c,d,e,f,g){






























function h(i,j,k,l,m,n,o,p,q,r,s){
var t=function y(){},







u=[i,j,k,l,m,n,o,p,q,r],
v=0,w=void 0;
while(u[v]){
w=u[v];
for(var x in w)
if(Object.prototype.hasOwnProperty.call(w,x))
t.prototype[x]=w[x];


v+=1;}

return t;}


f.exports=h;}),null);

/** js/ui/core/ui/form/modules/UIForm.js */





__d('UIForm',['ArbiterMixin','BehaviorsMixin','DOM','Event','Form','Run','areJSONRepresentationsEqual','mixin'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits











(j,c('mixin')(c('ArbiterMixin'),c('BehaviorsMixin')));i=h&&h.prototype;












function j(k,l,m,n,o){'use strict';
i.constructor.call(this);
this._root=k;



this.controller=k;


this._message=l;
if(n){
this._confirm_dialog=n;
n.subscribe('confirm',this._handleDialogConfirm.bind(this));



c('DOM').prependContent
(this._root,
c('DOM').create('input',{type:'hidden',name:'confirmed',value:'true'}));}




c('Run').onAfterLoad
(function(){
this._originalState=c('Form').serialize(this._root);}.
bind(this));


this._forceDirty=m;
this._confirmed=false;
this._submitted=false;

c('Event').listen(this._root,'submit',this._handleSubmit.bind(this));

if(o&&o.length)
this.enableBehaviors(o);



var p=true;
c('Run').onBeforeUnload
(this.checkUnsaved.bind(this),
p);}

j.prototype.

getRoot=function(){'use strict';
return this._root;};
j.prototype.

_handleSubmit=function(){'use strict';
if(this._confirm_dialog&&!this._confirmed){
this._confirm_dialog.show();
return false;}

if(this.inform('submit')===false)
return false;

this._submitted=true;
return true;};
j.prototype.

_handleDialogConfirm=function(){'use strict';
this._confirmed=true;
this._confirm_dialog.hide();
if(this._root.getAttribute('ajaxify')){
c('Event').fire(this._root,'submit');}else
if(this._handleSubmit())
this._root.submit();};

j.prototype.




reset=function(){'use strict';
this.inform('reset');
this._submitted=false;
this._confirmed=false;};
j.prototype.




isDirty=function(){'use strict';

if(this._submitted||!c('DOM').contains(document.body,this._root))
return false;


if(this._forceDirty)
return true;




if(!this._originalState)
return false;


var k=c('Form').serialize(this._root);
return !c('areJSONRepresentationsEqual')(k,this._originalState);};
j.prototype.




checkUnsaved=function(){'use strict';
if(this.isDirty())
return this._message;


return null;};



f.exports=b.UIForm||j;}),null);

/** js/ui/layer/Layer.js */






__d('Layer',['KeyStatus','ArbiterMixin','BehaviorsMixin','BootloadedReact','ContextualThing','CSS','DataStore','DOM','Event','HTML','KeyEventController','Parent','Style','ge','isNode','mixin','removeFromArray','setImmediate'],(function a(b,c,d,e,f,g){var h,i;

c('KeyStatus');






















var j=[];h=babelHelpers.inherits

(k,c('mixin')(c('ArbiterMixin'),c('BehaviorsMixin')));i=h&&h.prototype;
function k(n,o){'use strict';
i.constructor.call(this);


this._config=n||{};
if(o){
this._configure(this._config,o);
var p=this._config.addedBehaviors||[];
this.enableBehaviors(this._getDefaultBehaviors().concat(p));}}

k.prototype.










init=function(n){'use strict';






this._configure(this._config,n);

var o=this._config.addedBehaviors||[];
this.enableBehaviors(this._getDefaultBehaviors().concat(o));

this._initialized=true;
return this;};
k.prototype.










_configure=function(n,o){var p,q=this;'use strict';
if(o){
var r=c('isNode')(o),
s=typeof o==='string'||c('HTML').isHTML(o);
this.containsReactComponent=c('BootloadedReact').isValidElement(o);







if(s){
o=c('HTML')(o).getRootNode();}else
if(this.containsReactComponent){
var t;(function(){t=document.createElement('div');





var u=true;
c('BootloadedReact').render(o,t,function(){
this.inform('reactshow');
if(!u)


this.updatePosition();}.

bind(q));
u=false;
o=q._reactContainer=t;})();}}


this._root=this._buildWrapper(n,o);
if(n.attributes)
c('DOM').setAttributes(this._root,n.attributes);

if(n.classNames)
n.classNames.forEach(c('CSS').addClass.bind(null,this._root));

c('CSS').addClass(this._root,'uiLayer');
if(n.causalElement)
this._causalElement=c('ge')(n.causalElement);











if(n.permanent)
this._permanent=n.permanent;


c('DataStore').set(this._root,'layer',this);};
k.prototype.







_getDefaultBehaviors=function(){'use strict';
return [];};
k.prototype.





getCausalElement=function(){'use strict';
return this._causalElement;};
k.prototype.

setCausalElement=function(n){'use strict';
this._causalElement=n;
return this;};
k.prototype.








getInsertParent=function(){'use strict';
return this._insertParent||document.body;};
k.prototype.




getRoot=function(){'use strict';








return this._root;};
k.prototype.




getContentRoot=function(){'use strict';
return this._root;};
k.prototype.




_buildWrapper=function(n,o){'use strict';
return o;};
k.prototype.











setInsertParent=function(n){'use strict';
if(n){
if(this._shown&&n!==this.getInsertParent()){
c('DOM').appendContent(n,this.getRoot());
this.updatePosition();}

this._insertParent=n;}

return this;};
k.prototype.

showAfterDelay=function(n){'use strict';
setTimeout(this.show.bind(this),n);};
k.prototype.

show=function(){'use strict';
if(this._shown)
return this;


var n=this.getRoot();
this.inform('beforeshow');



c('Style').set(n,'visibility','hidden');


c('Style').set(n,'overflow','hidden');

c('CSS').show(n);
c('DOM').appendContent(this.getInsertParent(),n);
if(this.updatePosition()!==false){
this._shown=true;
this.inform('show');
k.inform('show',this);



if(!this._permanent)
setTimeout(function(){
if(this._shown)
j.push(this);}.

bind(this),0);}else 


c('CSS').hide(n);

c('Style').set(n,'visibility','');
c('Style').set(n,'overflow','');
this.inform('aftershow');
return this;};
k.prototype.

hide=function(){'use strict';

if(this._hiding||!this._shown||this.inform('beforehide')===false)
return this;




this._hiding=true;




if(this.inform('starthide')!==false)
this.finishHide();


return this;};
k.prototype.

conditionShow=function(n){'use strict';
return n?this.show():this.hide();};
k.prototype.







finishHide=function(){'use strict';
if(this._shown){
if(!this._permanent)
c('removeFromArray')(j,this);

this._hiding=false;
this._shown=false;
c('CSS').hide(this.getRoot());
this.inform('hide');
k.inform('hide',this);}};

k.prototype.

isShown=function(){'use strict';
return this._shown;};
k.prototype.





updatePosition=function(){'use strict';
return true;};
k.prototype.








destroy=function(){'use strict';
if(this.containsReactComponent)
c('BootloadedReact').unmountComponentAtNode(this._reactContainer);

this.finishHide();
var n=this.getRoot();
c('DOM').remove(n);
this.destroyBehaviors();
this.inform('destroy');
k.inform('destroy',this);
c('DataStore').remove(n,'layer');
this._root=this._causalElement=null;};
k.


init=function(n,o){'use strict';
n.init(o);};
k.


initAndShow=function(n,o){'use strict';
n.init(o).show();};
k.


show=function(n){'use strict';
n.show();};
k.


showAfterDelay=function(n,o){'use strict';
n.showAfterDelay(o);};
k.







getTopmostLayer=function(){'use strict';
return j[j.length-1];};



Object.assign(k,c('ArbiterMixin'));

Object.assign(k.prototype,
{_initialized:false,
_root:null,
_shown:false,
_hiding:false,
_causalElement:null,
_reactContainer:null});



c('Event').listen(document.documentElement,'keydown',function(event){



if(c('KeyEventController').filterEventTargets(event,'keydown'))
for(var n=j.length-1;n>=0;n--)
if(j[n].inform('key',event)===false)
return false;},



c('Event').Priority.URGENT);

var l;
c('Event').listen(document.documentElement,'mousedown',function(event){
l=event.getTarget();});


var m;
c('Event').listen(document.documentElement,'mouseup',function(event){
m=event.getTarget();

c('setImmediate')(function(){
l=null;
m=null;});});




c('Event').listen(document.documentElement,'click',function(event){
var n=l,
o=m;
l=null;
m=null;

var p=j.length;
if(!p)
return;


var q=event.getTarget();

if(q!==o||q!==n)




return;




if(!c('DOM').contains(document.documentElement,q))
return;



if(!q.offsetWidth)
return;






if(c('Parent').byClass(q,'generic_dialog'))
return;


while(p--){
var r=j[p],
s=r.getContentRoot();


if(c('ContextualThing').containsIncludingLayers(s,q))
return;



if(r.inform('blur',{target:q})===false||r.isShown())
return;}});




f.exports=k;}),null);

/** shared/banzai/BanzaiLogger.js */







__d('BanzaiLogger',['Banzai'],(function a(b,c,d,e,f,g){



var h='logger';


function i(k){

return {log:function l(m,n){
c('Banzai').post(j._getRoute(m),n,k);},

registerToSendWithBeacon:function l
(m,
n,
o,
p){

c('Banzai').registerToSendWithBeacon
(j._getRoute(m),
n,
o,
p);},


_getRoute:function l(m){
return h+':'+m;}};}




var j=i();
j.create=i;

f.exports=j;}),null);

/** shared/core/classWithMixins.js */





__d("classWithMixins",[],(function a(b,c,d,e,f,g){



































function h(i,j){
var k=function l(){
i.apply(this,arguments);};


k.prototype=Object.assign
(Object.create(i.prototype),
j.prototype);


return k;}


f.exports=h;}),null);

/** shared/core/dom/getOffsetParent.js */





__d('getOffsetParent',['Style'],(function a(b,c,d,e,f,g){















function h(i){
var j=i.parentNode;
if(!j||j===document.documentElement)
return document.documentElement;

if(c('Style').get(j,'position')!=='static')
return j;

return j===document.body?
document.documentElement:
h(j);}


f.exports=h;}),null);

/** shared/core/dom/getUnboundedScrollPosition.js */





__d('getUnboundedScrollPosition',['Scroll'],(function a(b,c,d,e,f,g){

'use strict';













function h(i){
if(i===window)

return {x:window.pageXOffset||c('Scroll').getLeft(document.documentElement),
y:window.pageYOffset||c('Scroll').getTop(document.documentElement)};



return {x:c('Scroll').getLeft(i),
y:c('Scroll').getTop(i)};}



f.exports=h;}),null);

/** shared/core/flattenArray.js */






__d("flattenArray",[],(function a(b,c,d,e,f,g){














function h(j){
var k=[];
i(j,k);
return k;}


function i(j,k){
var l=j.length,
m=0;

while(l--){
var n=j[m++];
if(Array.isArray(n)){
i(n,k);}else 

k.push(n);}}




f.exports=h;}),null);

/** shared/core/joinClasses.js */






__d('joinClasses',[],(function a(b,c,d,e,f,g){

'use strict';




function h(i){
var j=i||'',
k=arguments.length;

if(k>1)
for(var l=1;l<k;l++){
var m=arguments[l];
if(m)
j=(j?j+' ':'')+m;}



return j;}


f.exports=h;}),null);

/** shared/fbjs/functional/forEachObject.js */





__d('forEachObject',[],(function a(b,c,d,e,f,g){

'use strict';

var h=Object.prototype.hasOwnProperty;



















function i(j,k,l){
for(var m in j)
if(h.call(j,m))
k.call(l,j[m],m,j);}




f.exports=i;}),null);

/** shared/jsxdom/JSXDOM.js */




__d('JSXDOM',['DOM','FbtResult','flattenArray'],(function a(b,c,d,e,f,g){
























var h=
['a',
'blockquote',
'br',
'button',
'canvas',
'checkbox',
'dd',
'div',
'dl',
'dt',
'em',
'form',
'h1',
'h2',
'h3',
'h4',
'h5',
'h6',
'hr',
'i',
'iframe',
'img',
'input',
'label',
'li',
'option',
'p',
'pre',
'select',
'span',
'strong',
'table',
'tbody',
'thead',
'td',
'textarea',
'th',
'tr',
'ul',
'video'],


i={};
h.forEach(function(j){
var k=function l(m,n){


if(arguments.length>2)
n=Array.prototype.slice.call(arguments,1);

if(!n&&m){
n=m.children;
delete m.children;}


if(n){
n=Array.isArray(n)?n:[n];
n=n.map(function(o){
if(o instanceof c('FbtResult'))
return o.flattenToArray();

return o;});

n=c('flattenArray')(n);}

return c('DOM').create(j,m,n);};

i[j]=k;});


f.exports=i;}),null);

/** shared/log/Log.js */













__d('Log',['sprintf'],(function a(b,c,d,e,f,g){



var h=
{DEBUG:3,
INFO:2,
WARNING:1,
ERROR:0};


function i(k,l){
var m=Array.prototype.slice.call(arguments,2),
n=c('sprintf').apply(null,m),
o=window.console;
if(o&&j.level>=l)
o[k in o?k:'log'](n);}



var j=



{level:-1,






Level:h,








debug:i.bind(null,'debug',h.DEBUG),
info:i.bind(null,'info',h.INFO),
warn:i.bind(null,'warn',h.WARNING),
error:i.bind(null,'error',h.ERROR)};

f.exports=j;}),null);
