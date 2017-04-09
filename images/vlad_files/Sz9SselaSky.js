if (self.CavalryLogger) { CavalryLogger.start_js(["BA+uc"]); }

/** __static_js_modules__/messagingrealtimeconstants.js */




__d("MessagingRealtimeConstants",[],(function a(b,c,d,e,f,g){

f.exports={VIEWER_FBID:"realtime_viewer_fbid"};}),

null);

/** js/channel/AjaxRequest.js */




__d('AjaxRequest',['ErrorUtils','Keys','PHPQuerySerializer','TimeSlice','URI','UserAgent_DEPRECATED','ZeroRewrites','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g){
























































































































function h(l,m,n){

if(!(m instanceof c('URI')))
m=new (c('URI'))(m);


this.xhr=c('ZeroRewrites').getTransportBuilderForURI(m)();

if(n&&l=='GET'){
m.setQueryData(n);}else 

this._params=n;


this.method=l;
this.uri=m;

this.xhr.open(l,m);}


var i=window.XMLHttpRequest&&
'withCredentials' in new XMLHttpRequest();
h.supportsCORS=function(){return i;};



h.ERROR='ar:error';
h.TIMEOUT='ar:timeout';
h.PROXY_ERROR='ar:proxy error';
h.TRANSPORT_ERROR='ar:transport error';
h.SERVER_ERROR='ar:http error';
h.PARSE_ERROR='ar:parse error';
h.SERVICE_UNAVAILABLE='ar:noservice';

h._inflight=[];


function j(){
var l=h._inflight;
h._inflight=[];
l.forEach(function(m){
m.abort();});}




function k(l){

l.onJSON=l.onError=l.onSuccess=null;


clearTimeout(l._timer);


if(l.xhr&&l.xhr.readyState<4){
l.xhr.abort();
l.xhr=null;}



h._inflight=h._inflight.filter(function(m){
return m&&m!=l&&m.xhr&&m.xhr.readyState<4;});}



Object.assign(h.prototype,
{timeout:60000,

streamMode:true,

prelude:/^for \(;;\);/,


status:null,


_eol:-1,




_call:function l(m){
if(this[m])
this[m](this);},








_parseStatus:function l(){
var m;

try{this.status=this.xhr.status;
m=this.xhr.statusText;}catch(
n){

if(this.xhr.readyState>=4){
this.errorType=h.TRANSPORT_ERROR;
this.errorText=n.message;}

return;}


if(this.status===0&&!/^(file|ftp)/.test(this.uri)){




this.errorType=h.TRANSPORT_ERROR;}else
if(this.status>=100&&this.status<200){
this.errorType=h.PROXY_ERROR;}else
if(this.status>=200&&this.status<300){
return;}else
if(this.status>=300&&this.status<400){




this.errorType=h.PROXY_ERROR;}else
if(this.status>=400&&this.status<500){
this.errorType=h.SERVER_ERROR;}else
if(this.status===503){
this.errorType=h.SERVICE_UNAVAILABLE;}else
if(this.status>500&&this.status<600){
this.errorType=h.PROXY_ERROR;}else
if(this.status==1223){

return;}else
if(this.status>=12001&&this.status<=12156){










this.errorType=h.TRANSPORT_ERROR;}else{

m='unrecognized status code: '+this.status;
this.errorType=h.ERROR;}


if(!this.errorText)
this.errorText=m;},







_parseResponse:function l(){
var m,
n=this.xhr.readyState;


try{m=this.xhr.responseText||'';}catch(
o){

if(n>=4){
this.errorType=h.ERROR;
this.errorText='responseText not available - '+o.message;}

return;}



while(this.xhr){
var p=this._eol+1,
q=this.streamMode?m.indexOf('\n',p):m.length;
if(q<0&&n==4)

q=m.length;



if(q<=this._eol)
break;


var r=m;
if(this.streamMode)

r=m.substr(p,q-p).replace(/^\s*|\s*$/g,'');



if(p===0&&this.prelude)
if(this.prelude.test(r))
r=r.replace(this.prelude,'');









this._eol=q;


if(r){

try{this.json=JSON.parse(r);}catch(
o){

var s=/(<body[\S\s]+?<\/body>)/i.test(m)&&RegExp.$1,
t=
{message:o.message,
'char':p,
excerpt:(p===0&&s||r).substr(512)};

this.errorType=h.PARSE_ERROR;
this.errorText='parse error - '+JSON.stringify(t);
return;}


c('ErrorUtils').applyWithGuard(this._call,this,['onJSON']);}}},







_onReadyState:function l(m,n){
var o=this.xhr&&this.xhr.readyState||0;

if(this.status==null&&o>=2)
this._parseStatus();


if(!this.errorType&&this.status!=null)


if(o==3&&this.streamMode||o==4)
m.call(this);




if(this.errorType||o==4){
this._time=Date.now()-this._sentAt;
n.call
(this,
this._call,
!this.errorType?'onSuccess':'onError');

k(this);}},






send:function l(m){
var n=c('TimeSlice').getGuardedContinuation
('AjaxRequest xhr.onreadystatechange',
true),


o=c('TimeSlice').guard
(this._parseResponse.bind(this),
'AjaxRequest xhr.parseResponse',
{isContinuation:false});


this.xhr.onreadystatechange=
this._onReadyState.bind(this,o,n);

var p=this.timeout;
if(p)
this._timer=c('setTimeoutAcrossTransitions')
(function(){
this.errorType=h.TIMEOUT;
this.errorText='timeout';
this._time=Date.now()-this._sentAt;
this._call('onError');
k(this);}.
bind(this),
p);




h._inflight.push(this);

if(this.method=='POST')
this.xhr.setRequestHeader('Content-Type',
'application/x-www-form-urlencoded');


this._sentAt=Date.now();
this.xhr.send(m?c('PHPQuerySerializer').serialize(m):'');},





abort:function l(){
k(this);},





toString:function l(){
var m='[AjaxRequest readyState='+this.xhr.readyState;
if(this.errorType)
m+=' errorType='+this.errorType+' ('+this.errorText+')';

return m+']';},





toJSON:function l(){
var m=
{json:this.json,
status:this.status,
errorType:this.errorType,
errorText:this.errorText,
time:this._time};



if(this.errorType)
m.uri=this.uri;



for(var n in m)
if(m[n]==null)
delete m[n];



return m;}});




if(window.addEventListener&&c('UserAgent_DEPRECATED').firefox())
window.addEventListener('keydown',function(event){
if(event.keyCode===c('Keys').ESC)
event.prevent();},

false);


if(window.attachEvent)


window.attachEvent('onunload',j);


f.exports=h;}),null);

/** js/channel/ChannelSubdomain.js */









__d('ChannelSubdomain',['Event','JSLogger','Run','LogHistory','setTimeoutAcrossTransitions','WebStorage'],(function a(b,c,d,e,f,g){



var h=c('LogHistory').getInstance('channel'),



i=c('JSLogger').create('channel'),


j='channel_sub:',
k=7,
l=100*1000,


m=null,n;




function o(){
var q=c('WebStorage').getLocalStorage();

if(n){
clearTimeout(n);
n=null;}


if(q&&m!=null)
q.removeItem(j+m);


m=null;}























function p(q,r,s){var t,
u=(q-1)*k;

if(s){
if(n)
clearTimeout(n);

m=n=null;}


if(r==null)
r=Math.floor(Math.random()*u);


if(m==null){




var v,


w,
x,

y,





z,

aa,








ba;(function(){var ca=c('WebStorage').getLocalStorage();if(ca){v=[];for(w=0;w<ca.length;w++){x=ca.key(w);if(x.indexOf(j)===0){y=parseInt(x.substr(j.length),10);v[y]=parseInt(ca.getItem(x),10);}}z=Date.now()-l;for(w=0;w<u;w++){aa=(w+r)%u;if(!v[aa]||v[aa]<z){m=aa;break;}}if(m!=null){ba=function da(){

try{ca.setItem(j+m,Date.now());}catch(
ea){
h.warn('subdomain set failed',ea.message);}

n=c('setTimeoutAcrossTransitions')(ba,l/2);};

ba();}else{

h.warn('no channel subdomain',v);




i.error('subdomain_overflow');}



if(typeof window.onpageshow!='undefined'){
c('Event').listen(window,'pagehide',o);}else 

c('Run').onUnload(o);}else 






m=r;})
();}


return m==null?null:m%k;}


f.exports=
{allocate:p,
clear:o};}),null);

/** js/logging/generated/ChatproxyClientErrorsTypedLogger.js */





__d('ChatproxyClientErrorsTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){
'use strict';



















function h(){
this.clear();}
h.prototype.





log=function(){
c('GeneratedLoggerUtils').log('logger:ChatproxyClientErrorsLoggerConfig',this.$ChatproxyClientErrorsTypedLogger_data,c('Banzai').BASIC);};
h.prototype.







logVital=function(){
c('GeneratedLoggerUtils').log('logger:ChatproxyClientErrorsLoggerConfig',this.$ChatproxyClientErrorsTypedLogger_data,c('Banzai').VITAL);};
h.prototype.




clear=function(){
this.$ChatproxyClientErrorsTypedLogger_data={};
return this;};
h.prototype.






updateData=function(j){








this.$ChatproxyClientErrorsTypedLogger_data=babelHelpers['extends']({},
this.$ChatproxyClientErrorsTypedLogger_data,
j);

return this;};
h.prototype.




setErrorMessage=function(j){
this.$ChatproxyClientErrorsTypedLogger_data.error_message=j;
return this;};
h.prototype.




setErrorReason=function(j){
this.$ChatproxyClientErrorsTypedLogger_data.error_reason=j;
return this;};
h.prototype.




setStatusCode=function(j){
this.$ChatproxyClientErrorsTypedLogger_data.status_code=j;
return this;};
h.prototype.




setTopicPrefixes=function(j){
this.$ChatproxyClientErrorsTypedLogger_data.topic_prefixes=c('GeneratedLoggerUtils').serializeVector(j);
return this;};
h.prototype.




setURL=function(j){
this.$ChatproxyClientErrorsTypedLogger_data.url=j;
return this;};














var i=
{error_message:true,
error_reason:true,
status_code:true,
topic_prefixes:true,
url:true};


f.exports=h;}),null);

/** js/modules/DocRPC.js */




__d('DocRPC',['ErrorUtils'],(function a(b,c,d,e,f,g){










































var h=
{_apis:{},

_dispatch:function i(j){
var k;

try{j=JSON.parse(j);}catch(
l){
throw new Error('DocRPC unparsable dispatch: "'+j+'"');}


if(Object.prototype.hasOwnProperty.call(h._apis,j.api)){
var m=h._apis[j.api];
if(m[j.method])
k=c('ErrorUtils').applyWithGuard(m[j.method],m,j.args);}




if(k===undefined)
k=null;


return JSON.stringify(k);},








publish:function i(j,k){
h._apis[k]=j;},









proxy:function i(j,k,l){





var i={};

l.forEach(function(m){
i[m]=function(){
var n=
{api:k,
method:m,
args:Array.prototype.slice.call(arguments)},


o;

try{if(j.closed)
throw new Error('DocRPC window closed');

o=j.DocRPC._dispatch(JSON.stringify(n));}catch(
p){
c('ErrorUtils').reportError(p);
return;}


if(typeof o=='string')

try{o=JSON.parse(o);}catch(
p){
throw new Error('DocRPC '+k+'.'+m+
' unparsable return: "'+o+'"');}


return o;};});



return i;}};





f.exports=b.DocRPC=h;}),null);

/** js/channel/ChannelTransport.js */




__d('ChannelTransport',['AjaxRequest','ChannelConstants','DocRPC','LogHistory','TimeSlice','URI','bind','setTimeoutAcrossTransitions','BanzaiODS','ChatproxyClientErrorsTypedLogger'],(function a(b,c,d,e,f,g){

























var h=c('LogHistory').getInstance('channel');

function i(v){
var w=new (c('ChatproxyClientErrorsTypedLogger'))();
w.setStatusCode(v.status);




w.setErrorMessage(v.errorType);
if(v.uri!==undefined)
w.setURL(v.uri.getPath());

w.log();}



function j(){
return (1048576*Math.random()|0).toString(36);}


function k(v){
return !isNaN(v)&&isFinite(v)&&0<=v&&v<=6;}


function l(v,w){
var x='';

if(k(v.subdomain))
x=v.subdomain+'-';




var y=v.host;
y=y===null||y===undefined?'edge-chat':v.host;

var z=new (c('URI'))(w).
setDomain(x+y+'.'+v.domain).
setPort(v.port).
setSecure(new (c('URI'))(window.location.href).isSecure());
return z;}



function m(v){
var w=
{partition:v.partition,
cb:j(),
failure:v.pingFailuresOnSubdomain};

if(v.sticky_token)
w.sticky_token=v.sticky_token;

if(v.sticky_pool)
w.sticky_pool=v.sticky_pool;


var x=l(v,'/p').setQueryData(w);
h.log('start_p',{uri:x.toString()});

var y=new (c('AjaxRequest'))('GET',x);
if(c('AjaxRequest').supportsCORS())
y.xhr.withCredentials=true;


var z=function aa(ba){
h.log('finish_p',
{xhr:ba.toJSON?ba.toJSON():ba,
subdomain:v.subdomain,
fullHost:v.fullHost});};



y.onError=function(aa){
c('BanzaiODS').bumpEntityKey('ChannelTransport','sendP.error');
i(y);
z(aa);
if(v.subdomain===null)
return;









if(k(v.subdomain)){
v.pingFailuresOnSubdomain++;
v.subdomain++;
if(v.subdomain>6)


v.subdomain=0;}};



y.timeout=v.P_TIMEOUT;
y.onSuccess=function(aa){
c('BanzaiODS').bumpEntityKey('ChannelTransport','sendP.success');
z(aa);};

y.send();}



function n(v,w,x){
var y=new Image(),
z=0,

aa=function da(ea){
y.abort();
return ea?w():x();};


y.onload=c('TimeSlice').guard(function(){
h.log('ping_ok',{duration:Date.now()-z});
c('BanzaiODS').bumpEntityKey('ChannelTransport','sendPing.success');
aa(true);},
'ChannelTransport image.onload');
y.onerror=c('TimeSlice').guard(function(){
m(v);
c('BanzaiODS').bumpEntityKey('ChannelTransport','sendPing.error');
i(y);
aa(false);},
'ChannelTransport image.onerror');

var ba=c('setTimeoutAcrossTransitions')(y.onerror,10000);


y.abort=function(){
if(ba){
clearTimeout(ba);
ba=null;}

y.onload=y.onerror=null;};



var ca=
{partition:v.partition,
cb:j()};


if(v.sticky_token)
ca.sticky_token=v.sticky_token;


if(v.sticky_pool)
ca.sticky_pool=v.sticky_pool;

if(v.lastRequestErrorReason){
ca.reason=v.lastRequestErrorReason;
v.lastRequestErrorReason=null;}

if(v.uid&&v.viewerUid){
ca.uid=v.uid;
ca.viewer_uid=v.viewerUid;}


z=Date.now();
y.src=l(v,'/ping').setQueryData(ca);

return y;}


function o(v,w){
var x=
{channel:v.user_channel,
partition:v.partition,
clientid:v.sessionID,
cb:j(),
cap:0,
uid:v.uid,
viewer_uid:v.viewerUid};


if(v.sticky_token)
x.sticky_token=v.sticky_token;


if(v.sticky_pool)
x.sticky_pool=v.sticky_pool;


if(v.profile)
x.profile=v.profile;

if(v.capabilities)
x.cap=v.capabilities;


x.id=w;

var y=l(v,'/add_bud').setQueryData(x),
z=new (c('AjaxRequest'))('GET',y);
if(c('AjaxRequest').supportsCORS())
z.xhr.withCredentials=true;


z.onError=function(aa){
c('BanzaiODS').bumpEntityKey('ChannelTransport','sendAdditionalBuddy.error');
h.warn('add_buddy_error');
i(z);};

z.onSuccess=function(aa){
c('BanzaiODS').bumpEntityKey('ChannelTransport','sendAdditionalBuddy.success');
h.log('add_buddy_ok');};

z.timeout=v.P_TIMEOUT;
z.send();}


function p(v){
var w=
{channel:v.user_channel,
partition:v.partition,
clientid:v.sessionID,
cb:j(),
cap:0,
uid:v.uid,
viewer_uid:v.viewerUid};


if(v.sticky_token)
w.sticky_token=v.sticky_token;


if(v.sticky_pool)
w.sticky_pool=v.sticky_pool;


if(v.is_offline||v.shouldSuppressPresence){
w.state='offline';}else 

w.state='active';


if(w.state===v.lastPresenceState)
return;


v.lastPresenceState=w.state;

if(v.profile)
w.profile=v.profile;

if(v.capabilities)
w.cap=v.capabilities;


var x=l(v,'/active_ping').setQueryData(w),
y=new (c('AjaxRequest'))('GET',x);
if(c('AjaxRequest').supportsCORS())
y.xhr.withCredentials=true;


y.onError=function(z){
c('BanzaiODS').bumpEntityKey('ChannelTransport','sendActivePing.error');
h.warn('active_ping_error');
i(y);};

y.onSuccess=function(z){
c('BanzaiODS').bumpEntityKey('ChannelTransport','sendActivePing.success');
h.log('active_ping_ok');};

y.timeout=v.P_TIMEOUT;
y.send();}



function q(v,w,x,y){
var z=new Date(),
aa=-1;
if(v.userActive>0){
aa=(z-v.userActive)/1000|0;
if(aa<0)
h.warn('idle_regression',
{idleTime:aa,
now:z.getTime(),
userActive:v.userActive});}




var ba=
{channel:v.user_channel,
seq:v.seq,
partition:v.partition,
clientid:v.sessionID,
cb:j(),
idle:aa,
qp:'y',
cap:0};


if(v.state.aiq)
ba.aiq=v.state.aiq;


if(v.ready)
if(v.seqTurSentAt==-1||v.seqTurSentAt==v.seq){
ba.tur=v.timeUntilReady;
ba.qpmade=v.queueMade;
v.seqTurSentAt=v.seq;}


ba.pws=v.pws;

if(v.sequenceId>0)
ba.isq=v.sequenceId;


ba.msgs_recv=v.estimatedReceived;

if(v.uid&&v.viewerUid){
ba.uid=v.uid;
ba.viewer_uid=v.viewerUid;}


if(v.sticky_token){
ba.sticky_token=v.sticky_token;}else{

ba.request_batch=1;
if(v.msgr_region)

ba.msgr_region=v.msgr_region;}



if(v.sticky_pool)
ba.sticky_pool=v.sticky_pool;


if('trace_id' in v)
ba.traceid=v.trace_id;


if(v.is_offline||v.shouldSuppressPresence){
ba.state='offline';}else
if(v.userActive>0&&aa<60)
ba.state='active';

v.lastPresenceState=ba.state;

if(v.streamingCapable){
ba.mode='stream';
ba.format='json';}

if(v.profile)
ba.profile=v.profile;

if(v.capabilities)
ba.cap=v.capabilities;


var ca=l(v,'/pull').setQueryData(ba),
da='GET',
ea=new (c('AjaxRequest'))(da,ca);
if(c('AjaxRequest').supportsCORS())
ea.xhr.withCredentials=true;

ea.timeout=v.streamingCapable?
v.STREAMING_TIMEOUT:v.LONGPOLL_TIMEOUT;
ea.onJSON=function(fa){
c('BanzaiODS').bumpEntityKey('ChannelTransport','sendPull.json');
w(fa);};

ea.onSuccess=function(fa){
c('BanzaiODS').bumpEntityKey('ChannelTransport','sendPull.success');
x(fa);};

ea.onError=function(){


var fa=this.status==12002&&
this._time>=v.MIN_12002_TIMEOUT||
this.status==504&&this._time>=v.MIN_504_TIMEOUT,
ga=fa?x:y;
if(fa){
c('BanzaiODS').bumpEntityKey('ChannelTransport','sendPull.success');}else{

c('BanzaiODS').bumpEntityKey('ChannelTransport','sendPull.error');
i(ea);}

return ga&&ga.apply(this,arguments);};


ea.send();
v.inStreaming=v.streamingCapable;

return ea;}






function r(v){
this.manager=v;
this.init&&this.init();}









function s(v){

r.apply(this,arguments);}


Object.assign(s.prototype,
{logName:'CORS',




enterState:function v(w,x){

if(this._request){

this._request.abort();
this._request=null;}


if(w=='init')
c('setTimeoutAcrossTransitions')
(c('bind')(this.manager,'exitState',
{status:c('ChannelConstants').OK,
stateId:x.stateId}),

0);




if(!/pull|ping/.test(w))
return;


var y=this.manager;

if(w=='ping'){
this._request=n(x,
c('bind')(y,'exitState',
{status:c('ChannelConstants').OK,
stateId:x.stateId}),

c('bind')(y,'exitState',
{status:c('ChannelConstants').ERROR,
stateId:x.stateId}));}else


if(w=='pull')
this._request=q(x,
c('bind')(y,'_processTransportData',x.stateId),
c('bind')(y,'exitState',
{status:c('ChannelConstants').OK,stateId:x.stateId}),
c('bind')(y,'exitState',
{status:c('ChannelConstants').ERROR,stateId:x.stateId}));}});









function t(v){
h.log('iframe_init_constructor');

r.apply(this,arguments);


this._iframe=document.createElement('iframe');
this._iframe.style.display='none';
document.body.appendChild(this._iframe);


c('DocRPC').publish(this,'outerTransport');}


Object.assign(t.prototype,
{logName:'iframe',






_initIframe:function v(w){
h.log('iframe_init_start');


window.onchanneliframeready=function(){
h.log('iframe_resources');
return w.resources;};



window.onchanneliframeloaded=function(){
h.log('iframe_loaded');};


if(w){
this._iframeURI=l(w,w.path);

if(w.resources){












var x=this._iframeURI.getDomain();
w.resources=w.resources.map(function(z){
var aa=new (c('URI'))(z);
if(aa.getPath().startsWith('/intern/rsrc.php')&&
aa.getQueryData().origin!==undefined)
return aa.addQueryData('origin',x).toString();

return z;});}}else 



this._iframeURI='about:blank';


this._iframeProxy=null;



try{this._iframe.contentWindow.location.replace(this._iframeURI);
h.log('iframe_uri_set');}catch(
y){


h.error('iframe_uri_set_error',y);
this.exitState
({status:c('ChannelConstants').ERROR,
stateId:w.stateId},
y+'');}},






enterState:function v(w,x){
if(w=='init'){
this._initIframe(x);}else
if(/idle|ping|pull/.test(w)){

if(this._iframeProxy){
this._iframeProxy.enterState.apply(this._iframeProxy,arguments);}else
if(w!='idle')
this.exitState
({status:c('ChannelConstants').ERROR,
stateId:x.stateId},
'iframe not yet loaded');}else

if(w=='shutdown')
this._initIframe();},






_processTransportData:function v(){
this.manager._processTransportData.apply(this.manager,arguments);},





exitState:function v(w){

if(this.manager.state=='init'&&w.status==c('ChannelConstants').OK)

this._iframeProxy=c('DocRPC').proxy
(this._iframe.contentWindow,
'innerTransport',
['enterState'],
(this._iframeURI+'').replace(/iframe.*/,''));





if(/ping|pull/.test(this.manager.state)&&!this._iframeProxy)
return;


this.manager.exitState.apply(this.manager,arguments);}});







function u(){

this.init=this.init.bind(this);


r.apply(this,arguments);}


Object.assign(u.prototype,
{logName:'iframe(inner)',

init:function v(){

c('DocRPC').publish(this,'innerTransport');







try{var x=c('DocRPC').proxy(window.parent,'outerTransport',
['_processTransportData','exitState'],
top.DocRPC.origin);

Object.assign(this,x);




this.exitState({status:c('ChannelConstants').OK,stateId:1e+06});}catch(
w){
h.error('iframe_inner_init_error',w);}},







enterState:function v(w,x){

if(this._request){
this._request.abort();
this._request=null;}


if(w=='ping'){
this._request=n(x,
c('bind')(this,'exitState',
{status:c('ChannelConstants').OK,
stateId:x.stateId}),

c('bind')(this,'exitState',
{status:c('ChannelConstants').ERROR,
stateId:x.stateId}));}else


if(w=='pull')
this._request=q(x,
c('bind')(this,'_processTransportData',x.stateId),
c('bind')(this,'exitState',
{status:c('ChannelConstants').OK,stateId:x.stateId}),
c('bind')(this,'exitState',
{status:c('ChannelConstants').ERROR,stateId:x.stateId}));}});





f.exports=
{isSubdomain:k,
getURI:l,
Transport:r,
CORSTransport:s,
IframeTransport:t,
IframeInnerTransport:u,
sendActivePing:p,
sendAdditionalBuddyRequest:o};}),null);

/** js/channel/ChannelTransportDataLogger.js */






__d('ChannelTransportDataLogger',['Arbiter','JSLogger','MercuryLoggingHelper'],(function a(b,c,d,e,f,g){

'use strict';












var h=[],
i=10,

j=function l(m){
return m.map(function(n){
var o=n;
if(n.message||n.delta&&n.delta.body){
o=babelHelpers['extends']({},n);
if(n.message)
o.message=c('MercuryLoggingHelper').obfuscateMessage(n.message);

if(n.delta&&n.delta.body)
o.delta=c('MercuryLoggingHelper').obfuscateMessage(n.delta);}


return o;});},



k=
{log:function l(m){
var n=
{t:m.t,
seq:m.seq};

if(m.ms)
n.ms=j(m.ms);

h.push(n);
if(h.length>i)
h.shift();}};




c('Arbiter').subscribe(c('JSLogger').DUMP_EVENT,function(l,m){
m.channelTransportLog=h;});


f.exports=k;}),null);

/** js/channel/ChatProxyConnectionState.js */






__d('ChatProxyConnectionState',[],(function a(b,c,d,e,f,g){

'use strict';











function h(){
this.auxiliaryIrisQueues={};
this.aiq=null;}
h.prototype.


subscribeIrisQueue=function(i,j){
this.auxiliaryIrisQueues[i]=j;
this.updateCaches();};
h.prototype.


unsubscribeIrisQueue=function(i){
delete this.auxiliaryIrisQueues[i];
this.updateCaches();};
h.prototype.


updateCaches=function(){


var i=[];
for(var j in this.auxiliaryIrisQueues)
if(Object.prototype.hasOwnProperty.call(this.auxiliaryIrisQueues,j)){
i.push(j);
i.push(this.auxiliaryIrisQueues[j]);}


if(i.length===0){
this.aiq=null;}else 

this.aiq=i.join(',');};





f.exports=h;}),null);

/** js/channel/FBAjaxRequest.js */




__d('FBAjaxRequest',['AjaxRequest','getAsyncParams'],(function a(b,c,d,e,f,g){









function h(i,j,k){


k=babelHelpers['extends']({},
c('getAsyncParams')(i),
k);


var l=new (c('AjaxRequest'))(i,j,k);

l.streamMode=false;


var m=l._call;
l._call=function(n){
if(n=='onJSON'&&this.json){
if(this.json.error){
this.errorType=c('AjaxRequest').SERVER_ERROR;
this.errorText='AsyncResponse error: '+this.json.error;}

this.json=this.json.payload;}

m.apply(this,arguments);};

l.ajaxReqSend=l.send;
l.send=function(n){
this.ajaxReqSend(babelHelpers['extends']({},n,k));};


return l;}


f.exports=h;}),null);

/** shared/fantail/FantailLogger.js */









__d('FantailLogger',['FantailConfig'],(function a(b,c,d,e,f,g){



var h=c('FantailConfig').FantailLogQueue,

i=
{debug:function j(k,l){var m;for(var n=arguments.length,o=Array(n>2?n-2:0),p=2;p<n;p++)o[p-2]=arguments[p];
h&&(m=h.get(k)).debug.apply(m,[l].concat(o));},

info:function j(k,l){var m;for(var n=arguments.length,o=Array(n>2?n-2:0),p=2;p<n;p++)o[p-2]=arguments[p];
h&&(m=h.get(k)).info.apply(m,[l].concat(o));},

warn:function j(k,l){var m;for(var n=arguments.length,o=Array(n>2?n-2:0),p=2;p<n;p++)o[p-2]=arguments[p];
h&&(m=h.get(k)).warn.apply(m,[l].concat(o));},

error:function j(k,l){var m;for(var n=arguments.length,o=Array(n>2?n-2:0),p=2;p<n;p++)o[p-2]=arguments[p];
h&&(m=h.get(k)).error.apply(m,[l].concat(o));}};



f.exports=i;}),null);

/** js/channel/MovingStat.js */




__d("MovingStat",[],(function a(b,c,d,e,f,g){



































function h(i){
i=i||60000;
var j={t:new Date(),count:0,v:0},
k=j,l=0,m=0;


function n(){
var o=new Date()-i;
while(k&&k.next&&k.t<o){
l-=k.v;
m-=k.count;
k=k.next;}}



this.add=function(o){
l+=o;
m++;

var p=new Date();
if(p-j.t<1000){

j.v+=o;
j.count++;}else{

j.next={t:p,v:o,count:1};
j=j.next;
n();}};



this.tally=function(o){
o=o||1000;
n();

return {sum:l,
count:m,
timeAverage:l*o/i};};}




f.exports=h;}),null);

/** js/channel/RTISession.js */





__d('RTISession',['invariant','URI','AjaxRequest','ErrorUtils','ChatproxyClientErrorsTypedLogger','BanzaiODS','Set'],(function a(b,c,d,e,f,g,h){

'use strict';









var i='.facebook.com';






















function j(k,
l,
m,
n,
o,
p,
q,
r,
s){
k||h(0,'constructor expecting param: domain');
n||h(0,'constructor expecting param: stickyToken');
o||h(0,'constructor expecting param: loggedInId');
this.domain=k;
this.port=l;
this.edgePoolName=m;
this.stickyToken=n;
this.loggedInId=o;
this.accountId=p;
this.clientProfile=q||'desktop';
this.clientId=r;
this.capabilities=s;}
j.prototype.

















issueRequest=function(k,l,m,n,o){
k||h(0,'newPostSessionRequest expects: resource');
l||h(0,'newPostSessionRequest expects: callerParams');
n||h(0,'newPostSessionRequest expects: callback');
var p=this.domain.length-i.length,
q=p>0&&this.domain.indexOf(i,p)!==
-1,
r=q?this.domain:this.domain+i,
s=(1048576*Math.random()|0).toString(36),
t=
{cb:s,
sticky_token:this.stickyToken,
uid:this.loggedInId,
viewer_uid:this.accountId,
sticky_pool:this.edgePoolName,
profile:this.clientProfile,
clientid:this.clientId,
cap:this.capabilities};


for(var u in t)
!l[u]||h(0,'param already exists');

Object.assign(t,l);
var v=new (c('URI'))(k).
setDomain(r).
setPort(this.port).
setSecure(new (c('URI'))(window.location.href).isSecure()).
setQueryData(t),
w=m?'POST':'GET',
x=new (c('AjaxRequest'))(w,v);
x.timeout=o?o*1000:30000;
if(x.xhr)
x.xhr.withCredentials=true;

var y={};
x.onSuccess=function(){
c('BanzaiODS').bumpEntityKey('RTISession','request.success');};

x.onJSON=function(){
y.data=x.json;
y.error=null;
c('ErrorUtils').applyWithGuard(n,this,[y]);}.
bind(this);
x.onError=function(){
var z=new (c('Set'))();
if(m!==undefined&&m.subscriptions!==undefined)
for(var aa=0;aa<m.subscriptions.length;aa++){
var ba=m.subscriptions[aa].topic.split('/');
ba.pop();
z.add(ba.join('/'));}


y.data=null;
y.error=x.errorType||'error';
c('BanzaiODS').bumpEntityKey('RTISession','request.error');
this.logRequestFailure(x,z);
c('ErrorUtils').applyWithGuard(n,this,[y]);}.
bind(this);
x.send(JSON.stringify(m));};
j.prototype.

logRequestFailure=function(k,l){
var m=new (c('ChatproxyClientErrorsTypedLogger'))();
m.setStatusCode(k.status);




m.setErrorMessage(k.errorType);
m.setTopicPrefixes(l);
m.setURL(k.uri.getPath());
m.log();};




f.exports=j;}),null);

/** js/channel/ChannelManager.js */





__d('ChannelManager',['errorCode','Promise','AjaxRequest','Arbiter','AsyncRequest','BanzaiODS','ChannelClientID','ChannelConstants','ChannelInitialData','ChannelSubdomain','ChannelTransport','ChannelTransportDataLogger','ChatVisibility','ChatReliabilityInstrumentation','DTSG','Env','FantailLogger','FBAjaxRequest','FBRTCSupport','ISB','JSLogger','LogHistory','MessagingRealtimeConstants','MovingStat','PresenceCookieManager','PresenceState','PresenceUtil','RTISession','SystemEvents','URI','UserActivity','ChatProxyConnectionState','emptyFunction','requestAnimationFrameAcrossTransitions','setIntervalAcrossTransitions','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g,h){
















































var i,

j=c('JSLogger').create('channel'),
k=c('LogHistory').getInstance('channel_manager'),

l=null,
m=c('emptyFunction'),
n=new (c('Promise'))(function(z,aa){
m=z;});


function o(z){
l=z;}














var p=
{idle:
{ok:'init!'},

init:
{ok:'pull!',
error:'reconnect',

sys_online:'init',
sys_timetravel:'init'},

pull:
{ok:'pull!',
error:'ping',
error_missing:'pull',
error_msg_type:'pull',



refresh_0:'reconnect',
refresh_110:'reconnect',
refresh_111:'reconnect',
refresh_112:'pull',
refresh_113:'pull',
refresh_117:'reconnect'},

ping:
{ok:'pull!',
error:'ping',
error_stale:'reconnect!'},

reconnect:
{ok:'init!',
error:'reconnect',
sys_online:'reconnect',
sys_timetravel:'reconnect'},

shutdown:{},





_all:
{error_max:'shutdown!',
error_shutdown:'shutdown!',




sys_owner:'reconnect',
sys_nonowner:'idle!',
sys_online:'ping',
sys_offline:'idle!',
sys_timetravel:'ping'}},




q=

{state:new (c('ChatProxyConnectionState'))(),

userActive:Date.now(),


created:Date.now(),
ready:false,
seqTurSentAt:-1,
queueMade:'',
sequenceId:0,

lastPresenceState:null,

lastRequestErrorReason:null,


seq:0,
pingFailuresOnSubdomain:0,


pws:'fresh',


estimatedReceived:0,

sessionID:c('ChannelClientID').getID(),


capabilities:c('FBRTCSupport').getCapabilities(),


streamingCapable:false,


inStreaming:false,


shouldSuppressPresence:c('PresenceState').shouldSuppress(),







LONGPOLL_TIMEOUT:60000,
STREAMING_TIMEOUT:60000,


P_TIMEOUT:30000,


IFRAME_LOAD_TIMEOUT:30000,


MIN_RETRY_INTERVAL:5000,
MAX_RETRY_INTERVAL:320000,


MIN_12002_TIMEOUT:9000,
MIN_504_TIMEOUT:20000,



STALL_THRESHOLD:180000,



JUMPSTART_THRESHOLD:90000,


MIN_INIT_PROBE_DELAY:3000,



INIT_PROBE_DELAY_RANDOMIZE_RANGE:12000,


CHANNEL_PROXY_REPORTING_MIN_INTERVAL:10000,


PROBE_DELAY:60000,


PROBE_HEARTBEATS_INTERVAL_LOW:1000,
PROBE_HEARTBEATS_INTERVAL_HIGH:5000,


STREAMING_EXIT_STATE_ON_CONTINUE:false},



r=1,


s={},


t=0;





function u(){
return c('AsyncRequest').lastSuccessTime?
Math.round((Date.now()-c('AsyncRequest').lastSuccessTime)/1000):-1;}








function v(){
var z={};


if(i.getConfig('host'))

z[i.getConfig('user_channel')]=
i.getConfig('seq',0);


return z;}





function w(){

var z=Date.now(),
aa=Date.now(),
ba={total:0},
ca='idle',
da=false;


c('SystemEvents').subscribe
([c('SystemEvents').USER,c('SystemEvents').ONLINE,c('SystemEvents').TIME_TRAVEL],
function(ga,ha){



x(true);
aa=null;



i.lastPullTime=Date.now();

var ia;
switch(ga){
case c('SystemEvents').USER:

ia=c('SystemEvents').isPageOwner()?c('ChannelConstants').SYS_OWNER:
c('ChannelConstants').SYS_NONOWNER;
break;

case c('SystemEvents').ONLINE:

ia=ha?c('ChannelConstants').SYS_ONLINE:
c('ChannelConstants').SYS_OFFLINE;
break;

case c('SystemEvents').TIME_TRAVEL:

if(q.skipTimeTravel)
return;


if(0<ha){
c('FantailLogger').warn
(c('ChannelConstants').FANTAIL_SERVICE,
'skipping time travel failure. %s',
ha);



return;}

ia=c('ChannelConstants').SYS_TIMETRAVEL;
break;}


i.exitState({status:ia,stateId:r});});




var ea=function ga(ha,ia){
var ja=Date.now(),
ka=null;

if(ia){

z=ja;
ka=ia.nextState||ia.state;}else 


ka=ca;



c('SystemEvents').checkTimeTravel();

if(aa){

var la=Math.round((ja-aa)/1000);
if(la>0){
ba[ca]=(ba[ca]||0)+la;
ba.total+=la;}}


ca=ka;
aa=ja;

if(!ha){

ba.lastSuccessTime=u();
ba.online=c('SystemEvents').isOnline();
k.log('rollup',JSON.stringify(ba));}};



c('Arbiter').subscribe(c('ChannelConstants').ON_ENTER_STATE,ea);


c('setIntervalAcrossTransitions')(ea,60000);


c('Arbiter').subscribe(c('JSLogger').DUMP_EVENT,function(ga,ha){
ha.channelRollup=ba;});


var fa=function ga(){

if(i.isShutdown()||i.shouldIdle())
return;




c('SystemEvents').checkTimeTravel();



var ha=Date.now()-(i.lastPullTime||c('Env').start);
if(!da&&ha>q.STALL_THRESHOLD){
var ia=u();
k.error('stall',JSON.stringify
({lastSuccessTime:ia,
rollupState:ca}));

c('ChatReliabilityInstrumentation').logCHANNEL_STALLED(ha.toString());
da=true;}



var ja=Date.now()-z;
if(i.state=='pull'&&
ja>q.JUMPSTART_THRESHOLD){
z=null;
k.warn('jumpstart',JSON.stringify
({state:i.state,
dormant:ja}));

i.enterState('init');}};



c('setIntervalAcrossTransitions')(fa,5000);}







function x(z){
if(z){
t=0;
s={};}else 

t++;}



function y(z,aa){

var ba=!c('AjaxRequest').supportsCORS();


if(!Object.prototype.hasOwnProperty.call(q,'host'))
c('ChatReliabilityInstrumentation').logERROR('channel: no host in config');

var ca=c('ChannelTransport').isSubdomain(q.subdomain);
if(!ca||ba){
q.fullHost=q.host;}else 

q.fullHost=q.subdomain+'-'+q.host;


c('FantailLogger').info
(c('ChannelConstants').FANTAIL_SERVICE,
'received lb info: %s at seq: %s{%s} with '.concat
('sticky: %s/%s, subdomain: %s, fullHost: %s, state: %s,').
concat(' source: %s, args: %s'),
q.sessionID,
q.seq,
q.sequenceId,
q.sticky_token,
q.sticky_pool,
q.subdomain,
q.fullHost,
i.state,
z,
aa);}



i=

{state:'idle',


nextState:null,




proxyDown:false,


lastPullTime:Date.now(),

lastReportOnMisguidedMsgTime:Date.now(),


heartbeats:[],


setTestCallback:o,


backoff:false,


sessionRegistered:false,




init:function z(aa,ba){
c('FantailLogger').info
(c('ChannelConstants').FANTAIL_SERVICE,
'initializing sessionid:%s at iris-seq:%s',
q.sessionID,
q.sequenceId);


this.init=c('emptyFunction');
c('Arbiter').subscribe
(c('ChannelConstants').GET_RTI_SESSION_REQUEST,
function(event,fa){
this.informCurrentSession();}.
bind(this));


c('requestAnimationFrameAcrossTransitions')(function(){
c('FantailLogger').info
(c('ChannelConstants').FANTAIL_SERVICE,
'using session id: %s at seq: %s {%s} with sticky: %s/%s',
q.sessionID,
q.seq,
q.sequenceId,
q.sticky_token,
q.sticky_pool);


c('UserActivity').subscribe(function(){
var fa=c('ChannelTransport').getURI(q,'/U');
c('FantailLogger').info
(c('ChannelConstants').FANTAIL_SERVICE,
'user activity sessionid: %s at seq: %s/{%s} '+
'with sticky: %s/%s state: %s uri:%s',
q.sessionID,
q.seq,
q.sequenceId,
q.sticky_token,
q.sticky_pool,
i.state,
fa);

if(i.state=='pull'){
q.userActive=Date.now();
c('ChannelTransport').sendActivePing(q);}});});





c('PresenceCookieManager').register('ch',v);


var ca=this.getConfig('max_conn',2);
q.subdomain=c('ChannelSubdomain').allocate(ca);
if(!c('ChannelTransport').isSubdomain(q.subdomain)){
c('FantailLogger').info
(c('ChannelConstants').FANTAIL_SERVICE,
'invalid subdomain from ChannelSubdomain: %s',
q.subdomain);
q.subdomain=null;}



this._transportRate=new (c('MovingStat'))(30000);


var da=c('AjaxRequest').supportsCORS()?
'CORSTransport':'IframeTransport';
this.transport=new (c('ChannelTransport')[da])(this);
m(this.transport);


if(aa)
this.enterState(aa,ba);


c('requestAnimationFrameAcrossTransitions')(function(){

c('Arbiter').subscribe(c('JSLogger').DUMP_EVENT,function(event,fa){
if(this._transportRate){
fa.transportRate=this._transportRate.tally();
fa.transportType=da;
fa.transportVersion=2;}}.

bind(this));

w();}.
bind(this));

if(i.getConfig('tryStreaming')&&
i.getConfig('fullHost')&&
c('AjaxRequest').supportsCORS()){


var ea=q.MIN_INIT_PROBE_DELAY+
Math.random()*q.INIT_PROBE_DELAY_RANDOMIZE_RANGE;
c('setTimeoutAcrossTransitions')(this._probeTest,ea);}},






configure:function z(){for(var aa=arguments.length,ba=Array(aa),ca=0;ca<aa;ca++)ba[ca]=arguments[ca];
k.log('configure',JSON.stringify(ba));
ba.forEach(function(da){return Object.assign(q,da);});
y('reconnect',JSON.stringify(ba));
c('Arbiter').inform(c('ChannelConstants').ON_CONFIG,this);},





getConfig:function z(aa,ba){
return Object.prototype.hasOwnProperty.call(q,aa)?q[aa]:ba;},





getCompleteConfig:function z(){
return q;},





subscribeIrisQueue:function z(aa,ba){
q.state.subscribeIrisQueue(aa,ba);
this.exitState
({status:c('ChannelConstants').OK,
stateId:r});},





unsubscribeIrisQueue:function z(aa){
q.state.unsubscribeIrisQueue(aa);},









informCurrentSession:function z(){
var aa=null;



if(this.sessionRegistered&&
q&&
q.fullHost&&
q.sticky_token&&
q.uid)
aa=new (c('RTISession'))
(q.fullHost,
q.port,
q.sticky_pool,
q.sticky_token,
q.uid,
q.viewerUid,
q.profile,
q.sessionID,
q.capabilities);


c('Arbiter').inform
(c('ChannelConstants').RTI_SESSION,
aa);},





isShutdown:function z(){
return this.state=='shutdown';},





shouldIdle:function z(){
return !(c('SystemEvents').isPageOwner()&&c('SystemEvents').isOnline());},







_sendIframeError:function z(aa){
var ba=new (c('AsyncRequest'))().
setURI('/ajax/presence/reconnect.php').
setData({reason:aa,fb_dtsg:c('DTSG').getToken()}).
setOption('suppressErrorHandlerWarning',true).
setOption('retries',1).
setMethod('GET').
setReadOnly(true).
setAllowCrossPageTransition(true);
ba.specifiesWriteRequiredParams()&&ba.send();},































_getDelay:function z(){
var aa=Math.min(q.MIN_RETRY_INTERVAL*Math.pow(2,
Math.max(0,t-1)),q.MAX_RETRY_INTERVAL);
if(this.proxyDown&&'proxy_down_delay_millis' in q)
aa=q.proxy_down_delay_millis;

this.proxyDown=false;

return Math.floor(aa*(1+Math.random()*.5));},


resetDelay:function z(){
x(true);},
















enterState:function z(){
if(this._inEnterState){
k.warn('enterstate_recursion',JSON.stringify
({state:this.state,
args:arguments}));

c('ChatReliabilityInstrumentation').logERROR('enterstate_recursion');}


this._inEnterState=true;






try{this._enterState.apply(this,arguments);
this._inEnterState=false;}catch(
aa){
this._inEnterState=false;
throw aa;}},



_enterState:function z(aa){
var ba=this.backoff?this._getDelay():0;
this.backoff=false;


if(this.isShutdown()){
c('FantailLogger').warn
(c('ChannelConstants').FANTAIL_SERVICE,
'not executing state due to shutdown mode: %s',
aa);
return;}




if(aa!='idle!'&&this.shouldIdle()){
c('FantailLogger').warn(c('ChannelConstants').FANTAIL_SERVICE,'forced idleness');
return;}



r++;
q.stateId=r;


clearTimeout(this._deferredTransition);
this._deferredTransition=null;




if(!this.transport){
n.done(function(ha){return ha.enterState('idle');});
c('ChatReliabilityInstrumentation').logERROR('called enterState '+
aa+' before transport init');}else 


this.transport.enterState('idle');

this.state='idle';
this.nextState=null;

if(/!$/.test(aa)){


if(this._transportRate){
var ca=this._transportRate.tally().timeAverage,
da=i.getConfig('MAX_CHANNEL_STATES_PER_SEC',1);
if(ca>=da){
if(!this._throttled){

this._throttled=true;
k.warn('throttled','{}');}

j.bump('throttle');
ba=1000/da;}}}else


if(!(/#$/.test(aa)))



ba=this._getDelay();



aa=aa.replace(/\W*$/,'');

if(!p[aa]){

c('FantailLogger').error
(c('ChannelConstants').FANTAIL_SERVICE,
'invalid state: %s',
aa);
throw new Error('invalid state:'+aa);}


var ea=Array.from(arguments),


fa;


if(ba<=0){
fa={state:aa};

if(this._transportRate)
this._transportRate.add(1);

this.state=aa;


var ga=this['_enter_'+this.state];
if(ga){
ea.shift();
ga.apply(this,ea);}



if(/init|idle|pull|ping/.test(this.state)){

if(q.streamingCapable&&/pull/.test(this.state))
this.heartbeats=[];



q.is_offline=!c('ChatVisibility').isOnline();

q.capabilities=c('FBRTCSupport').getCapabilities();
c('FantailLogger').info
(c('ChannelConstants').FANTAIL_SERVICE,
'entering transport state: %s',
this.state);
if(!this.transport){
n.done(function(ha){return ha.enterState
(this.state,
q);}.bind(this));

c('ChatReliabilityInstrumentation').logERROR('called enterState '+
aa+' before transport init');}else 


this.transport.enterState(this.state,q);

if(this.state=='ping'){
fa.url=c('ChannelTransport').getURI(q).toString();
fa.port=q.port||'undefined';}}}else{




this.state='idle';
this.nextState=aa;
fa=
{state:this.state,
delay:ba,
nextState:aa};


ea[0]=aa+'#';
this._deferredTransition=c('setTimeoutAcrossTransitions')(function(){
this._deferredTransition=null;
this.enterState.apply(this,ea);}.
bind(this),ba);}


if(/pull/.test(aa)){
fa.client_id=q.sessionID;
fa.streaming=q.inStreaming;}



c('Arbiter').inform
(c('ChannelConstants').ON_ENTER_STATE,
fa);},










exitState:function z(aa,ba){
var ca=aa.stateId,
da=aa.status;








if(this.isShutdown()||ca<r)
return;


var ea=this.state,
fa=Array.from(arguments);
fa[0]=aa.status;


var ga={state:ea,status:da};
if(/pull/.test(ea)){
ga.client_id=q.sessionID;
ga.streaming=q.inStreaming;}



if(/ping/.test(ea)&&da!=c('ChannelConstants').OK)
ga.url=c('ChannelTransport').getURI(q).toString();


if(this.nextState)
ga.nextState=this.nextState;

if(ba&&ba.errorType){
q.lastRequestErrorReason=ba.errorType;


ga.xhr=ba.toJSON?ba.toJSON():ba;

if(ba.errorType==c('AjaxRequest').SERVICE_UNAVAILABLE){


c('FantailLogger').error
(c('ChannelConstants').FANTAIL_SERVICE,
'got 5xx http status code, setting long delay');
this.proxyDown=true;}



delete ga.xhr.json;}else
if(da!=c('ChannelConstants').OK)
q.lastRequestErrorReason=da;



if(ba&&ba.json){
if(ba.json.t)
ga.t=ba.json.t;

if(ba.json.reason)
ga.reason=ba.json.reason;

if(ba.json.seq)
ga.seq=ba.json.seq;}



c('Arbiter').inform(c('ChannelConstants').ON_EXIT_STATE,ga);


var ha=this['_exit_'+ea];
if(ha)
da=ha.apply(this,fa)||da;



if(da!=c('ChannelConstants').OK){
x();
s[ea]=(s[ea]||0)+1;}







var ia=p[this.nextState||ea][da]||
p._all[da],
ja=ia&&ia.replace(/!*$/,'');
if(!ja){






k.error('terminal_transition',JSON.stringify(ga));
this._shutdownHint=c('ChannelConstants').HINT_INVALID_STATE;
ia='shutdown!';
c('FantailLogger').error
(c('ChannelConstants').FANTAIL_SERVICE,
'entering shutdown state');}



this._lastState=ea;
this._lastStatus=da;
this.enterState(ia);},







_processTransportData:function z(aa,ba){
this._processTransportData0(aa,ba,ba.json);},


_processTransportData0:function z(aa,ba,ca){
var da=ca.t;


if('s' in ca){
ca.seq=ca.s;
delete ca.s;}


if(ca.u&&q.user&&ca.u!=q.user){
k.warn('misguided_msg',JSON.stringify
({user:q.user,
target:ca.u}));


this._reportProxyMisguidedMsg(ca.u,q.user);
return;}


c('ChannelTransportDataLogger').log(ca);


var ea=q.seq;
if('seq' in ca){
q.seq=ca.seq;
c('PresenceState').doSync();}



switch(da){
case 'continue':



if(q.inStreaming&&this.heartbeats.length<1){
q.streamingCapable=false;
k.log('switch_to_longpoll','{}');
c('setTimeoutAcrossTransitions')(this._probeTest,q.PROBE_DELAY);}


x(true);

if(!q.inStreaming||
q.STREAMING_EXIT_STATE_ON_CONTINUE)
this.exitState({status:c('ChannelConstants').OK,stateId:aa});

break;

case 'refresh':
case 'refreshDelay':
c('FantailLogger').info
(c('ChannelConstants').FANTAIL_SERVICE,
'got refresh with reason: %s',
ca.reason);
this.exitState
({status:'refresh_'+(ca.reason||0),stateId:aa},
ba);

break;

case 'backoff':
c('FantailLogger').warn
(c('ChannelConstants').FANTAIL_SERVICE,
'server told client to back off');
x();
this.backoff=true;
break;

case 'lb':
var fa=ca.lb_info;

if(fa){
q.sticky_token=fa.sticky;




if('pool' in fa)
q.sticky_pool=fa.pool;



if('sd' in fa){
var ga=fa.subdomain;
if(c('ChannelTransport').isSubdomain(ga))
q.subdomain=fa.subdomain;}




if('vip' in fa)



q.host=fa.vip;

y('chatproxy',JSON.stringify(ca));}else 

k.error('missing_lb_info','{}');

break;

case 'test_streaming':
c('setTimeoutAcrossTransitions')(this._probeTest,500);
break;

case 'fullReload':




c('PresenceCookieManager').clear();

k.log('full_reload','{}');

this.sessionRegistered=true;
this.informCurrentSession();
c('Arbiter').inform(c('ChannelConstants').ON_INVALID_HISTORY);

x(true);

c('FantailLogger').info
(c('ChannelConstants').FANTAIL_SERVICE,
'full reload incurred');

var ha=c('ChannelConstants').OK;
this.exitState
({status:ha,stateId:aa},
ba);

if('ms' in ca)
this._processMessages(ca,ea);

break;

case 'msg':
x(true);
this._processMessages(ca,ea);
break;

case 'heartbeat':
if(q.inStreaming){
var ia=Date.now();
if(this.heartbeats.length>0)
var ja=ia-
this.heartbeats[this.heartbeats.length-1];

k.log('heartbeat_interval',JSON.stringify
({client_id:q.sessionID,
interval:ja}));

this.heartbeats.push(ia);}

break;
case 'batched':
var ka=ca.batches,
la;
for(la=0;la<ka.length;la++)
this._processTransportData0(aa,ba,ka[la]);

break;


default:c('FantailLogger').error
(c('ChannelConstants').FANTAIL_SERVICE,
'got an unknown protocol message: %s',
da);
k.error('unknown_msg_type',JSON.stringify({type:da}));
break;}},



_processMessages:function z(aa,ba){
var ca,da,ea,fa;


if('tr' in aa)
q.trace_id=aa.tr;

da=aa.ms;
ea=q.seq-da.length;


for(ca=0;ca<da.length;ca++,ea++){
q.estimatedReceived++;
if(ea>=ba){
fa=da[ca];
if(fa.type){
var ga=c('ChannelConstants').getArbiterType
(fa.type);

if(fa.type==='messaging'){
var ha=
{type:'messaging',
event:fa.event};

if(fa.message){
ha.inbox_unread=
fa.unread_counts&&fa.unread_counts.inbox;
ha.tid=fa.message.tid;
ha.mid=fa.message.mid;
c('FantailLogger').info
(c('ChannelConstants').FANTAIL_SERVICE,
'got message with id: %s',
fa.message.mid);}}else

if(fa.type==='skywalker'){
ga=c('ChannelConstants').SKYWALKER;}else

if(fa.type==='qprimer'){
fa.first=!q.ready;
if(fa.first){
q.ready=true;
q.timeUntilReady=Date.now()-q.created;
q.queueMade=fa.made;}

ga=c('ChannelConstants').CHANNEL_ESTABLISHED;}else
if(fa.type==='pws'){
q.pws=fa.pws;}else
if(fa.type==='delta')
q.sequenceId=fa.iseq;


try{c('Arbiter').inform(ga,{obj:fa});}catch(
ia){
c('BanzaiODS').bumpEntityKey
('ChannelManager',
'processMessages.error.'+fa.type);
c('FantailLogger').info
(c('ChannelConstants').FANTAIL_SERVICE,
'message threw exception: %s %s',
ia,
fa);}}}else 






k.warn
('seq_regression',
JSON.stringify
({last_seq:ba,
messages:da.length,
seq:ea}));}},










_enter_init:function z(){
if(s.init>=i.getConfig('MAX_INIT_FAILS',2))
return c('setTimeoutAcrossTransitions')(function(){return this.exitState
({status:c('ChannelConstants').ERROR_MAX,
stateId:r});}.bind(this),
0);


this._initTimer=c('setTimeoutAcrossTransitions')(function(){return this.exitState
({status:c('ChannelConstants').ERROR,
stateId:r},
'timeout');}.bind(this),q.IFRAME_LOAD_TIMEOUT);},


_enter_reconnect:function z(aa){
k.warn('enter_reconnect',aa);
c('FantailLogger').info
(c('ChannelConstants').FANTAIL_SERVICE,
'entered reconnect with reason: %s',
aa);
var ba=r;


if(!c('PresenceUtil').hasUserCookie()){
c('FantailLogger').warn
(c('ChannelConstants').FANTAIL_SERVICE,
'user has no cookie???');
k.warn('no_user_cookie','{}');
c('setTimeoutAcrossTransitions')(function(){
this._shutdownHint=c('ChannelConstants').HINT_AUTH;
this.exitState
({status:c('ChannelConstants').ERROR_SHUTDOWN,
stateId:ba});}.

bind(this),0);
return;}



var ca={reason:aa,fb_dtsg:c('DTSG').getToken()};



if(c('ISB').token)
ca.fb_isb=c('ISB').token;




if(l)
l(ca);


var da=new (c('FBAjaxRequest'))('GET',
'/ajax/presence/reconnect.php',
ca);


da.onSuccess=function(){
i.configure(da.json);


c('PresenceCookieManager').store();

this.exitState({status:c('ChannelConstants').OK,stateId:ba});}.
bind(this);

da.onError=function(){

var ea=da.json&&da.json.error;
c('FantailLogger').error
(c('ChannelConstants').FANTAIL_SERVICE,
'reconnect error: %s',
da.errorType);
if(da.errorType==c('AjaxRequest').TRANSPORT_ERROR||
da.errorType==c('AjaxRequest').PROXY_ERROR||
da.errorType==c('AjaxRequest').SERVICE_UNAVAILABLE)
this._shutdownHint=c('ChannelConstants').HINT_CONN;
if(ea&&ea==1356007){
this._shutdownHint=c('ChannelConstants').HINT_MAINT;}else
if(ea==1357001||
ea==1357004||
ea==1348009){
this._shutdownHint=c('ChannelConstants').HINT_AUTH;}else 

this._shutdownHint=null;


this.exitState
({status:this._shutdownHint?c('ChannelConstants').ERROR_SHUTDOWN:
c('ChannelConstants').ERROR,
stateId:ba},
da);}.
bind(this);

da.send();},


_enter_shutdown:function z(){
c('Arbiter').inform(c('ChannelConstants').ON_SHUTDOWN,{reason:this._shutdownHint});
if('shutdown_recovery_interval_seconds' in q&&
q.shutdown_recovery_interval_seconds>0){
var aa=q.shutdown_recovery_interval_seconds*1000;
c('setTimeoutAcrossTransitions')(function(){
c('Arbiter').inform(c('ChannelConstants').ATTEMPT_RECONNECT);
this._shutdownHint=null;
this.state='reconnect!';
this.enterState('reconnect!');}.
bind(this),aa);}},







_exit_init:function z(aa){

if(this._initTimer)
this._initTimer=clearTimeout(this._initTimer);


if(aa==c('ChannelConstants').ERROR_MAX)

this._sendIframeError(c('ChannelConstants').reason_IFrameLoadGiveUp);},



_exit_pull:function z(aa,ba){
var ca=aa==c('ChannelConstants').OK;
if(ca){

this.lastPullTime=Date.now();}else{

var da='exit status: '+aa;
if(ba&&ba.errorType)
da+=' ajax request error: '+ba.errorType;

c('FantailLogger').error
(c('ChannelConstants').FANTAIL_SERVICE,
'pull failed with status: %s',
da);}},



_exit_ping:function z(aa){
if(aa==c('ChannelConstants').OK){
var ba=Date.now()-(this.lastPullTime||c('Env').start);
if(ba>q.STALL_THRESHOLD){
c('FantailLogger').error
(c('ChannelConstants').FANTAIL_SERVICE,
'didnt complete a successful pull for too long');
return c('ChannelConstants').ERROR_STALE;}}else 


c('FantailLogger').error
(c('ChannelConstants').FANTAIL_SERVICE,
'ping failed with status: %s',
aa);},






_reportProxyMisguidedMsg:function z(aa,ba){
c('FantailLogger').error
(c('ChannelConstants').FANTAIL_SERVICE,
'misguided message to %s meant for %s',
ba,
aa);
var ca=Date.now();

if(ca-this.lastReportOnMisguidedMsgTime<=
q.CHANNEL_PROXY_REPORTING_MIN_INTERVAL)
return;


this.lastReportOnMisguidedMsgTime=ca;
var da=
{received_uid:aa,
expected_uid:ba};

if(q.sticky_token)
da.sticky_token=q.sticky_token;


var ea=new (c('URI'))('/err_misguided_msg').
setDomain(q.host+'.'+q.domain).
setPort(q.port).
setSecure(new (c('URI'))(window.location.href).isSecure()).
setQueryData(da),

fa=new (c('AjaxRequest'))('GET',ea);
if(c('AjaxRequest').supportsCORS())
fa.xhr.withCredentials=true;


fa.onSuccess=function(ga){};
fa.onError=function(ga){};
fa.onJSON=function(ga,ha){};
fa.send();},





_probeTest:function z(){

q.streamingCapable=false;

var aa=[],

ba=
{mode:'stream',
format:'json'};


if(q.sticky_token)
ba.sticky_token=q.sticky_token;


var ca=new (c('URI'))('/probe').
setDomain(q.fullHost+'.'+q.domain).
setPort(q.port).
setSecure(new (c('URI'))(window.location.href).isSecure()).
setQueryData(ba),

da=new (c('AjaxRequest'))('GET',ca);
da.onJSON=function(ea,fa){
if(ea&&ea.json&&ea.json.t==='heartbeat'){
aa.push(Date.now());
if(aa.length>=2){
var ga=aa[1]-aa[0];
if(ga>=q.PROBE_HEARTBEATS_INTERVAL_LOW&&
ga<=q.PROBE_HEARTBEATS_INTERVAL_HIGH){
q.streamingCapable=true;
k.log('switch_to_streaming','{}');}}}};





da.onSuccess=function(ea){
if(aa.length!=2){
q.streamingCapable=false;
k.error('probe_error',JSON.stringify
({error:'beats.length = '+aa.length}));}


k.log('probe_success','{}');};


da.onError=function(ea){
q.streamingCapable=false;
k.error('probe_error',JSON.stringify(ea));};


da.send();},


startChannelManager:function z(){
if(c('ChannelInitialData').channelConfig){
i.configure(c('ChannelInitialData').channelConfig);

if(/shutdown/.test(c('ChannelInitialData').state))
i._shutdownHint=c('ChannelConstants')[c('ChannelInitialData').reason];

i.init(c('ChannelInitialData').state,c('ChannelInitialData').reason);
c('ChatReliabilityInstrumentation').logCHANNEL_INIT();
this.startChannelManager=c('emptyFunction');}else 

c('ChatReliabilityInstrumentation').logCHANNEL_NOCONFIG();}};




f.exports=i;}),null);

/** js/channel/ChannelConnection.js */















__d('ChannelConnection',['Arbiter','ChannelConstants','ChannelManager','JSLogger','Run','SystemEvents','Visibility','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g){











var h=c('JSLogger').create('channel_connection'),

i=null,
j=null,
k=null,
l=null,











m=0;

c('ChannelManager').startChannelManager();

var n=Object.assign(new (c('Arbiter'))(),
{CONNECTED:'chat-connection/connected',
RECONNECTING:'chat-connection/reconnecting',
SHUTDOWN:'chat-connection/shutdown',

MUTE_WARNING:'chat-connection/mute',
UNMUTE_WARNING:'chat-connection/unmute'});











c('Run').onBeforeUnload(function(){});




function o(){
if(j){
clearTimeout(j);
j=null;}}






function p(){
o();

h.log('unmute_warning');
n.inform(n.UNMUTE_WARNING);}









function q(v){
o();

j=c('setTimeoutAcrossTransitions')(p,v);

h.log('mute_warning',{time:v});
n.inform(n.MUTE_WARNING);}


function r(){
if(k){
clearTimeout(k);
k=null;}}









function s(v,w){
r();
if(v===c('ChannelConstants').ON_ENTER_STATE&&
(w.nextState||w.state)==='pull'){

if(l!==n.CONNECTED){
h.log('connected');
var x=!l;
l=n.CONNECTED;
m=0;
n.inform(n.CONNECTED,{init:x});}}else

if(v===c('ChannelConstants').ON_ENTER_STATE&&
((w.nextState||w.state)==='ping'||
!w.nextState&&w.state==='idle')){


k=c('setTimeoutAcrossTransitions')(function(){
var y=null;
if(!(w.state==='idle'&&!w.nextState))
y=w.delay||0;

h.log('reconnecting',{delay:y});


if(n.disconnected())
h.log('reconnecting_ui',{delay:y});

l=n.RECONNECTING;
w.state==='idle'&&m++;
if(m>1){
n.inform(n.RECONNECTING,y);}else
if(!w.nextState&&w.state==='idle')


s(v,w);},

500);}else
if(v===c('ChannelConstants').ON_SHUTDOWN){
h.log('shutdown',{reason:w.reason});
l=n.SHUTDOWN;
m=0;
n.inform(n.SHUTDOWN,w.reason);}}



function t(){


if(c('ChannelManager').isShutdown()){
s
(c('ChannelConstants').ON_SHUTDOWN,
c('ChannelManager')._shutdownHint);}else 


s
(c('ChannelConstants').ON_ENTER_STATE,

{state:c('ChannelManager').state,
nextState:c('ChannelManager').nextState,
delay:0});




c('Visibility').addListener
(c('Visibility').VISIBLE,
n.reconnect);}





c('Run').onAfterLoad(t);

Object.assign(n,






{disconnected:function v(){

return l===n.SHUTDOWN||
l===n.RECONNECTING&&
!j&&
m>1;},





isShutdown:function v(){
return l===n.SHUTDOWN;},








reconnect:function v(w){

if(c('ChannelManager').state==='ping'||
c('ChannelManager').state==='pull'||
c('ChannelManager').isShutdown())

return;


h.log('reconnect',{now:w});



n.inform(n.RECONNECTING,0);

if(!!w){
if(i!==null){
clearTimeout(i);
i=null;}

c('ChannelManager').enterState('ping!');}else
if(!i)
i=c('setTimeoutAcrossTransitions')
(function(){
c('ChannelManager').enterState('ping!');
i=null;},

c('ChannelConstants').CHANNEL_MANUAL_RECONNECT_DEFER_MSEC);


c('ChannelManager').resetDelay();},









unmuteWarning:p});



function u(){
c('Arbiter').subscribe
([c('ChannelConstants').ON_ENTER_STATE,c('ChannelConstants').ON_SHUTDOWN],
s);


c('Arbiter').subscribe
(c('ChannelConstants').ATTEMPT_RECONNECT,
function(){
if(n.disconnected())
n.reconnect();});




c('SystemEvents').subscribe(c('SystemEvents').TIME_TRAVEL,function(){
n.reconnect();
q(c('ChannelConstants').MUTE_WARNING_TIME_MSEC);});


c('Run').onBeforeUnload(r,false);}



c('Run').onAfterLoad(u);

n.mockAfterLoad=function(){

t();
u();};


c('Arbiter').subscribe(c('JSLogger').DUMP_EVENT,function(v,w){
w.channel_connected=!n.disconnected();});


f.exports=n;}),3);
