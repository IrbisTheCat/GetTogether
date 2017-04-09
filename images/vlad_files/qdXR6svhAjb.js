if (self.CavalryLogger) { CavalryLogger.start_js(["mO6x1"]); }

/** __static_js_modules__/genderconst.js */




__d("GenderConst",[],(function a(b,c,d,e,f,g){

f.exports={NOT_A_PERSON:0,FEMALE_SINGULAR:1,MALE_SINGULAR:2,FEMALE_SINGULAR_GUESS:3,MALE_SINGULAR_GUESS:4,MIXED_SINGULAR:5,MIXED_PLURAL:5,NEUTER_SINGULAR:6,UNKNOWN_SINGULAR:7,FEMALE_PLURAL:8,MALE_PLURAL:9,NEUTER_PLURAL:10,UNKNOWN_PLURAL:11,UNKNOWN:0};}),

null);

/** __static_js_modules__/intlvariations.js */




__d("IntlVariations",[],(function a(b,c,d,e,f,g){

f.exports={BITMASK_NUMBER:805306368,NUMBER_ZERO:1073741824,NUMBER_ONE:268435456,NUMBER_TWO:536870912,NUMBER_FEW:1342177280,NUMBER_MANY:805306368,NUMBER_OTHER:1610612736,BITMASK_GENDER:50331648,GENDER_MALE:16777216,GENDER_FEMALE:33554432,GENDER_UNKNOWN:50331648};}),

null);

/** js/modules/PageHooks.js */




__d('PageHooks',['Arbiter','ErrorUtils','InitialJSLoader','PageEvents'],(function a(b,c,d,e,f,g){






var h=
{DOMREADY_HOOK:'domreadyhooks',
ONLOAD_HOOK:'onloadhooks'};












function i(){
var p=b.CavalryLogger;
if(!window.domready&&p)
p.getInstance().setTimeStamp('t_prehooks');


l(o.DOMREADY_HOOK);

if(!window.domready&&p)
p.getInstance().setTimeStamp('t_hooks');


window.domready=true;
c('Arbiter').inform('uipage_onload',true,c('Arbiter').BEHAVIOR_STATE);}


function j(){
l(o.ONLOAD_HOOK);
window.loaded=true;}


function k(p,q){
return c('ErrorUtils').applyWithGuard(p,null,null,function(r){
r.event_type=q;
r.category='runhook';},
'PageHooks:'+q);}


function l(p){
var q=p=='onbeforeleavehooks'||
p=='onbeforeunloadhooks';


do{var r=window[p];
if(!r)
break;

if(!q)
window[p]=null;


for(var s=0;s<r.length;s++){
var t=k(r[s],p);
if(q&&t)
return t;}}while(


!q&&window[p]);}


































function m(){
if(!window.domready){
window.domready=true;
l('onloadhooks');}

if(!window.loaded){
window.loaded=true;
l('onafterloadhooks');}}



function n(){
c('Arbiter').registerCallback(i,
[c('PageEvents').BIGPIPE_DOMREADY,
c('InitialJSLoader').INITIAL_JS_READY]);


c('Arbiter').registerCallback(j,
[c('PageEvents').BIGPIPE_DOMREADY,
c('PageEvents').BIGPIPE_ONLOAD,
c('InitialJSLoader').INITIAL_JS_READY]);


c('Arbiter').subscribe(c('PageEvents').NATIVE_ONBEFOREUNLOAD,function(p,q){
q.warn=l('onbeforeleavehooks')||
l('onbeforeunloadhooks');
if(!q.warn){
window.domready=false;
window.loaded=false;}},

c('Arbiter').SUBSCRIBE_NEW);

c('Arbiter').subscribe(c('PageEvents').NATIVE_ONUNLOAD,function(p,q){
l('onunloadhooks');
l('onafterunloadhooks');},
c('Arbiter').SUBSCRIBE_NEW);}


var o=babelHelpers['extends']
({_domreadyHook:i,
_onloadHook:j,
runHook:k,
runHooks:l,
keepWindowSetAsLoaded:m},
h);



n();


b.PageHooks=f.exports=o;}),null);

/** js/lib/event/onload_action.js */




__d('legacy:onload-action',['PageHooks'],(function a(b,c,d,e,f,g){



b._domreadyHook=c('PageHooks')._domreadyHook;
b._onloadHook=c('PageHooks')._onloadHook;
b.runHook=c('PageHooks').runHook;
b.runHooks=c('PageHooks').runHooks;
b.keep_window_set_as_loaded=c('PageHooks').keepWindowSetAsLoaded;}),3);

/** js/modules/AsyncResponse.js */






__d('AsyncResponse',['errorCode','invariant','AsyncFeature','Bootloader','DTSG','SiteData'],(function a(b,c,d,e,f,g,h,i){











function j(l){

}






































function k(l,m){'use strict';
this.__sf='';
this.error=0;
this.errorSummary=null;
this.errorDescription=null;
this.onload=null;
this.replay=false;
this.payload=m;
this.request=l;
this.silentError=false;
this.transientError=false;
this.blockedAction=false;
this.is_last=true;
this.responseHeaders=null;}
k.prototype.






getRequest=function(){'use strict';
return this.request;};
k.prototype.






getPayload=function(){'use strict';
return this.payload;};
k.prototype.












getError=function(){'use strict';
return this.error;};
k.prototype.












getErrorSummary=function(){'use strict';
return this.errorSummary;};
k.prototype.







setErrorSummary=function(l){'use strict';
l=l===undefined?null:l;
this.errorSummary=l;
return this;};
k.prototype.











getErrorDescription=function(){'use strict';
return this.errorDescription;};
k.prototype.








getErrorIsWarning=function(){'use strict';
return !!this.errorIsWarning;};
k.prototype.







isTransient=function(){'use strict';
return !!this.transientError;};
k.prototype.








isBlockedAction=function(){'use strict';
return !!this.blockedAction;};
k.prototype.















getResponseHeader=function(l){'use strict';
var m=this.responseHeaders;
if(!m)
return null;



l=l.toLowerCase();

var n=m.split('\r\n');
for(var o=0;o<n.length;++o){
var p=n[o],
q=p.indexOf(': ');




if(q<=0)
continue;


var r=p.substring(0,q).
toLowerCase();

if(r===l)
return p.substring(q+2);}



return null;};
k.prototype.







logError=
function(l,
m){
'use strict';
var n=b.ErrorSignal;
if(n&&this.request){
var o=this.request.getURI(),
p=
{err_code:this.error,
vip:c('SiteData').vip||'-',
path:o||'-',
aid:this.request?this.request.userActionID:null};

if(m){

p.duration=m.duration;

p.xfb_ip=m.xfb_ip;}



if(o&&o.indexOf('scribe_endpoint.php')!=-1)
l='async_error_double';


n.sendErrorSignal(l,JSON.stringify(p));}};

k.prototype.

















logErrorByGroup=function(l,m){'use strict';
if(Math.floor(Math.random()*m)===0)
if(this.error==1357010||
this.error<15000){

this.logError('async_error_oops_'+l);}else 



this.logError('async_error_logic_'+l);};


k.prototype.




















SERVER_HAS_FEATURE=function(l){'use strict';


i(0,
'You made a call to asyncResponse.SERVER'+"_HAS_FEATURE('%s') in an "+
'environment where it was not transformed properly. Do not try to '+
'use asyncResponse.SERVER_HAS_FEATURE() dynamically or outside of '+
'a transformed JavaScript environment!',
l);};


k.prototype.

__serverHasFeatureImpl=function(l){'use strict';
if(typeof this.__sf!=='string'||this.__sf===''){
j('AsyncResponse does not contain a `__sf` (server features) property!');

return true;}

return c('AsyncFeature').__getBitMapFromString(this.__sf).contains(l);};
k.







defaultErrorHandler=function(l){'use strict';

try{if(!l.silentError){


k.verboseErrorHandler(l);}else 













l.logErrorByGroup('silent',10);}catch(


m){
alert(l);}};

k.






verboseErrorHandler=function(l){'use strict';
c('Bootloader').loadModules(["ExceptionDialog"],
function(m){return m.showAsyncError(l);},'AsyncResponse');};

k.











renewDTSG=function(l){'use strict';
c('DTSG').setToken(l);};



f.exports=k;}),null);

/** js/modules/HTTPErrors.js */




__d('HTTPErrors',['emptyFunction'],(function a(b,c,d,e,f,g){



var h=
{get:c('emptyFunction'),
getAll:c('emptyFunction')};





















































































































f.exports=h;}),null);

/** js/modules/JSONPTransport.js */





__d('JSONPTransport',['ArbiterMixin','DOM','HTML','TimeSlice','URI','mixin'],(function a(b,c,d,e,f,g){var h,i,








j={},



k=2,


l='jsonp',

m='iframe';


function n(p){
delete j[p];}
h=babelHelpers.inherits

(o,c('mixin')(c('ArbiterMixin')));i=h&&h.prototype;







function o(p,q){'use strict';
i.constructor.call(this);





this._type=p;
this._uri=q;
this._hasResponse=false;

j[this.getID()]=this;}
o.prototype.

getID=function(){'use strict';
return this._id||(this._id=k++);};
o.prototype.

hasFinished=function(){'use strict';
return !(this.getID() in j);};
o.prototype.

getRequestURI=function(){'use strict';

return new (c('URI'))(this._uri).addQueryData
({__a:1,
__adt:this.getID(),
__req:'jsonp_'+this.getID()});};

o.prototype.

getTransportFrame=function(){'use strict';
if(this._iframe)
return this._iframe;

var p='transport_frame_'+this.getID(),




q=c('HTML')
('<iframe class="hidden_elem" name="'+p+'" src="javascript:void(0)" />');

return this._iframe=c('DOM').appendContent(document.body,q)[0];};
o.prototype.

send=function(){'use strict';






if(this._type===l){


setTimeout(function(){
c('DOM').appendContent
(document.body,
c('DOM').create('script',
{src:this.getRequestURI().toString(),
type:'text/javascript'}));}.


bind(this),0);}else{

this.getTransportFrame().onload=this._checkForErrors.bind(this);
this.getTransportFrame().src=this.getRequestURI().toString();}};

o.prototype.

handleResponse=function(p){'use strict';
this.inform('response',p);
if(this.hasFinished())


setTimeout(this._cleanup.bind(this),0);};

o.prototype.

abort=function(){'use strict';
if(this._aborted)
return;

this._aborted=true;
this._cleanup();
n(this.getID());
this.inform('abort');};
o.prototype.

_checkForErrors=function(){'use strict';
if(!this._hasResponse)
this.abort();};

o.prototype.

_cleanup=function(){'use strict';
if(this._iframe){

c('DOM').remove(this._iframe);
this._iframe=null;}};

o.








respond=function(p,q,r){'use strict';
var s=j[p];
if(s){
s._hasResponse=true;
if(!r)
n(p);

if(s._type==m)






if(typeof q==='string'){
q=JSON.parse(q);}else 


q=JSON.parse(JSON.stringify(q));



s.handleResponse(q);}else{


var t=b.ErrorSignal;
if(t&&!r)
t.logJSError('ajax',
{error:'UnexpectedJsonResponse',
extra:
{id:p,
uri:q.payload&&q.payload.uri||''}});}};











o.respond=c('TimeSlice').guard
(o.respond,
'JSONPTransport.respond',

{root:true});



f.exports=o;}),null);

/** js/modules/executeAfter.js */









__d("executeAfter",[],(function a(b,c,d,e,f,g){

function h(i,j,
k){
return function l(){
i.apply(k||this,arguments);
j.apply(k||this,arguments);};}



f.exports=h;}),null);

/** shared/intl/FbtNumberType.js */









__d('FbtNumberType',['IntlVariations'],(function a(b,c,d,e,f,g){

var h=
{getNumberVariationType:function i(j){
if(j===1){
return c('IntlVariations').NUMBER_ONE;}else 

return c('IntlVariations').NUMBER_OTHER;}};




f.exports=h;}),null);

/** shared/intl/Intl.js */





__d('Intl',['IntlPhonologicalRules','memoize'],(function a(b,c,d,e,f,g){


















var h='[.!?'+
'\u3002'+
'\uFF01'+
'\uFF1F'+
'\u0964'+
'\u2026'+
'\u0EAF'+
'\u1801'+
'\u0E2F'+
'\uFF0E'+
']',

i=new RegExp
(h+
'[)"\''+







'\u00BB'+
'\u0F3B'+
'\u0F3D'+
'\u2019'+
'\u201D'+
'\u203A'+
'\u3009'+
'\u300B'+
'\u300D'+
'\u300F'+
'\u3011'+
'\u3015'+
'\u3017'+
'\u3019'+
'\u301B'+
'\u301E'+
'\u301F'+
'\uFD3F'+
'\uFF07'+
'\uFF09'+
'\uFF3D'+
'\\s'+
']*$'),


j=c('memoize')(function(){
var m=[];


for(var n in c('IntlPhonologicalRules').patterns){
var o=c('IntlPhonologicalRules').patterns[n];


for(var p in c('IntlPhonologicalRules').meta){
var q=new RegExp(p.slice(1,-1),'g'),
r=c('IntlPhonologicalRules').meta[p];
n=n.replace(q,r);
o=o.replace(q,r);}

if(o==='javascript')
o=function s(t){return t.slice(1).toLowerCase();};

m.push([new RegExp(n.slice(1,-1),'g'),o]);}


return m;});















function k(m){
var n=j();

for(var o=0;o<n.length;o++){var p=
n[o],q=p[0],r=p[1];
m=m.replace(q,r);}



return m.replace(/\x01/g,'');}








function l(m){
if(typeof m!=='string')
return false;

return i.test(m);}


f.exports=
{PUNCT_CHAR_CLASS:h,
endsInPunct:l,
applyPhonologicalRules:k};}),null);

/** shared/intl/substituteTokens.js */





__d('substituteTokens',['invariant','Intl'],(function a(b,c,d,e,f,g,h){







var i=new RegExp
('\\{([^}]+)\\}('+c('Intl').PUNCT_CHAR_CLASS+'*)',
'g');



function j(l){














return l;}






function k
(l,
m){


var n=m;

if(!n)
return l;



typeof n==='object'||h(0,
'The 2nd argument must be an object (not a string) for tx(%s, ...)',
l);



var o=[],
p=[],
q=l.replace
(i,
function(t,u,v){






var w=n[u];
if(w&&typeof w==='object'){
o.push(w);
p.push(u);

return '\x17'+v;}else
if(w===null)
return '';

return w+(c('Intl').endsInPunct(w)?'':v);}).


split('\x17').
map(c('Intl').applyPhonologicalRules);

if(q.length===1)
return q[0];



var r=[q[0]];
for(var s=0;s<o.length;s++)
r.push
(j(o[s]),
q[s+1]);


return r;}


f.exports=k;}),null);

/** shared/intl/fbt.js */





__d('fbt',['invariant','Banzai','FbtNumberType','FbtResult','FbtResultGK','GenderConst','IntlVariations','IntlViewerContext','substituteTokens','FbtLogger','FbtQTOverrides'],(function a(b,c,d,e,f,g,h){


















var i=c('FbtLogger').logger,
j=c('FbtQTOverrides').overrides,





k=
{INDEX:0,
SUBSTITUTION:1},


l=
{NUMBER:0,
GENDER:1},



m=
{OBJECT:0,
POSSESSIVE:1,
REFLEXIVE:2,
SUBJECT:3},


n=function q(){};
























n._=function(q,r){








var s={},
t=q;

if(q.__vcg){
r=r||[];
r.unshift([[c('IntlViewerContext').GENDER,'*'],null]);}


if(r!==undefined){
t=this._accessTable(q,s,r,0);
t!==null||h(0,'Table access failed');}


var u=t,
v=null;

typeof t==='string'||Array.isArray(t)||h(0,
'Table access did not result in string: %s.',
JSON.stringify(t));

if(Array.isArray(t)){



u=t[0];
v=t[1];


var w='1_'+v;
u=j[w]||u;
if(j[w])
n.logQTImpression(v);

n.logImpression(v);}

var x=c('substituteTokens')(u,s);
return p(x,u,v);};



















































n._accessTable=function(q,r,s,t){



if(t>=s.length){
return q;}else
if(q==null)
return null;

var u=null,
v=s[t],
w=v[k.INDEX];


if(Array.isArray(w)){
for(var x=0;x<w.length;++x){
var y=q[w[x]];
u=this._accessTable(y,r,s,t+1);
if(u!=null)
break;}}else{



q=w!==null?q[w]:q;
u=this._accessTable(q,r,s,t+1);}

if(u!=null)
Object.assign(r,v[k.SUBSTITUTION]);

return u;};








n['enum']=function(q,r){



return [q,null];};











n.param=function(q,r,s){
var t=null;
if(s)
if(s[0]===l.NUMBER){
var u=s.length>1?s[1]:r;

typeof u==='number'||h(0,
'fbt.param expected number');

t=[c('FbtNumberType').getNumberVariationType(u),'*'];}else
if(s[0]===l.GENDER){


s.length>1&&
s[1]&c('IntlVariations').BITMASK_GENDER||h(0,
'expected gender value');


t=[s[1],'*'];}else 

h(0,'Unknown invariant mask');


var v={};
v[q]=r;
return [t,v];};












n.plural=function(q,r,s){
var t=[c('FbtNumberType').getNumberVariationType(q),'*'],
u={};
if(r)

u[r]=s||q+'';

return [t,u];};









n.pronoun=function(q,r,s){

r!==c('GenderConst').NOT_A_PERSON||!s||!s.human||h(0,
'Gender cannot be GenderConst.NOT_A_PERSON if you set "human" to true');


var t=o(q,r);
return [[t,'*'],null];};



function o(q,r){
switch(r){
case c('GenderConst').NOT_A_PERSON:
return q===m.OBJECT||q===m.REFLEXIVE?
c('GenderConst').NOT_A_PERSON:
c('GenderConst').UNKNOWN_PLURAL;

case c('GenderConst').FEMALE_SINGULAR:
case c('GenderConst').FEMALE_SINGULAR_GUESS:
return c('GenderConst').FEMALE_SINGULAR;

case c('GenderConst').MALE_SINGULAR:
case c('GenderConst').MALE_SINGULAR_GUESS:
return c('GenderConst').MALE_SINGULAR;

case c('GenderConst').MIXED_SINGULAR:
case c('GenderConst').FEMALE_PLURAL:
case c('GenderConst').MALE_PLURAL:
case c('GenderConst').NEUTER_PLURAL:
case c('GenderConst').UNKNOWN_PLURAL:
return c('GenderConst').UNKNOWN_PLURAL;

case c('GenderConst').NEUTER_SINGULAR:
case c('GenderConst').UNKNOWN_SINGULAR:
return q===m.REFLEXIVE?
c('GenderConst').NOT_A_PERSON:
c('GenderConst').UNKNOWN_PLURAL;}



return c('GenderConst').NOT_A_PERSON;}











n.name=function(q,r,s){


s&c('IntlVariations').BITMASK_GENDER||h(0,
'expected gender value');


var t=[s,'*'],
u={};
u[q]=r;
return [t,u];};









n.genderOfMany=function(q){
0<q.length||h(0,'Cannot have pronoun for zero people');
return q.length===1?q[0]:c('GenderConst').UNKNOWN_PLURAL;};







n.logImpression=function(q){
if(i)
i.logImpression(q);

return q;};


n.logQTImpression=function(q){
c('Banzai').post('intl_qt_event',{hash:q});
return q;};


function p(q,r,s){

if(!c('FbtResultGK').shouldReturnFbtResult&&
c('FbtResultGK').inlineMode!=='REPORT')

return q;

return new (c('FbtResult'))
(typeof q==='string'?[q]:q,
c('FbtResultGK').inlineMode,
r,
s);}



f.exports=n;}),null);

/** js/modules/AsyncRequest.js */







__d('AsyncRequest',['errorCode','invariant','ix','fbt','Promise','Arbiter','TimeSliceInteraction','ArtilleryJSPointTypes','AsyncFeature','AsyncFeatureLogging','AsyncRequestConfig','AsyncResponse','Bootloader','CSS','DTSG','Env','ErrorUtils','Event','HTTPErrors','JSCC','Parent','WebPixelRatio','PixelRatioConst','PHPQuerySerializer','ProfilingCounters','Run','ServerJS','SessionName','TimeSlice','URI','UserAgent_DEPRECATED','ZeroRewrites','isFacebookURI','isMessengerDotComURI','bind','emptyFunction','evalGlobal','executeAfter','ge','getAsyncHeaders','getAsyncParams','goURI','isEmpty','setTimeout','setTimeoutAcrossTransitions'],(function a(global,require,requireDynamic,requireLazy,module,exports,errorCode,invariant,ix,fbt){
























































var EVENTS=
{SR_PAYLOAD:'asyncRequest/srPayload'};








function hasUnloaded(){

try{return !window.domready;}catch(
ignore){
return true;}}







function supportsUploadProgress(transport){
return 'upload' in transport&&'onprogress' in transport.upload;}






function supportsCrossOrigin(transport){
return 'withCredentials' in transport;}








function isNetworkError(transport){

return transport.status in
{'0':1,
'12029':1,
'12030':1,
'12031':1,
'12152':1};}









function validateResponseHandler(handler){
var valid=!handler||typeof handler==='function';






return valid;}



var last_id=2,







id_threshold=last_id;

require('Arbiter').subscribe('page_transition',function(_,message){
id_threshold=message.id;});







































































































function AsyncRequest(uri){'use strict';this.



























































































































































































































































































































































































































































































_dispatchErrorResponse=
function(asyncResponse,
errorHandler){

var error=asyncResponse.getError();

this.clearStatusIndicator();



var log_data=this._sendTimeStamp&&
{duration:Date.now()-this._sendTimeStamp,
xfb_ip:this._xFbServer||'-'};

asyncResponse.logError('async_error',log_data);


if(!this._isRelevant()||error===1010){




this.abort();
return;}


if(error==1357008||
error==1357007||
error==1357041||
error==1442002||
error==1357001){

var is_confirmation=
error==1357008||
error==1357007;

require('AsyncFeature').__invokeWithServerBitMap
(asyncResponse.__sf,
function(){return this.interceptHandler(asyncResponse);}.bind(this));

if(error==1357041){
this._solveQuicksandChallenge(asyncResponse);}else
if(error==1357007){
this._displayServerDialog(asyncResponse,is_confirmation,true);}else 

this._displayServerDialog(asyncResponse,is_confirmation);}else

if(this._invokeInitialHandler(asyncResponse)!==false){
clearTimeout(this.timer);

try{require('AsyncFeature').__invokeWithServerBitMap
(asyncResponse.__sf,
function(){return errorHandler(asyncResponse);});}catch(

e){
this._applyFinallyHandler(asyncResponse);
throw e;}

this._applyFinallyHandler(asyncResponse);}}.

bind(this);this.






























































































































































































































































_onStateChange=function(){
var transport=this.transport;
if(!transport)
return;



try{AsyncRequest._inflightCount--;
AsyncRequest._inflightPurge();



try{if(typeof transport.getResponseHeader!=='undefined'&&
transport.getResponseHeader('X-FB-Debug'))
this._xFbServer=transport.getResponseHeader('X-FB-Debug');}catch(

ignore){}

if(transport.status>=200&&transport.status<300){

AsyncRequest.lastSuccessTime=Date.now();

this._handleXHRResponse(transport);}else 

if(require('UserAgent_DEPRECATED').webkit()&&
typeof transport.status=='undefined'){


this._invokeErrorHandler(1002);}else

if(require('AsyncRequestConfig').retryOnNetworkError&&
isNetworkError(transport)&&
this.remainingRetries>0&&
!this._requestTimeout){


this.remainingRetries--;
delete this.transport;
this.send(true);
return;}else 

this._invokeErrorHandler();








if(this.getOption('asynchronous_DEPRECATED')!==false)
delete this.transport;}catch(

exception){
if(hasUnloaded())
return;

delete this.transport;



if(this.remainingRetries>0){
this.remainingRetries--;
this.send(true);}else{

!this.getOption('suppressErrorAlerts');






var ErrorSignal=global.ErrorSignal;
ErrorSignal&&ErrorSignal.sendErrorSignal
('async_xport_resp',
[1007,
this._xFbServer||'-',
this.getURI(),
exception.message].
join(':'));

this._invokeErrorHandler(1007);}}}.


bind(this);this.transport=null;this.method='POST';this.uri='';this.timeout=null;this.timer=null;this.initialHandler=require('emptyFunction');this.handler=null;this.uploadProgressHandler=null;this.errorHandler=require('AsyncResponse').defaultErrorHandler;this.transportErrorHandler=null;this.timeoutHandler=null;this.interceptHandler=require('emptyFunction');this.finallyHandler=require('emptyFunction');this.abortHandler=require('emptyFunction');this.serverDialogCancelHandler=null;this.relativeTo=null;this.statusElement=null;this.statusClass='';this.data={};this.headers={};this.file=null;this.context={};this.readOnly=false;this.writeRequiredParams=[];this.remainingRetries=0;this.userActionID='-';this.logErrorsEnabled=require('AsyncRequestConfig').logAsyncRequest;this.shouldTraceWithArtillery=true;this.option={asynchronous_DEPRECATED:true,suppressErrorHandlerWarning:false,suppressEvaluation:false,suppressErrorAlerts:false,retries:0,jsonp:false,bundle:false,useIframeTransport:false,handleErrorAfterUnload:false};this.transportErrorHandler=require('bind')(this,'errorHandler');if(uri!==undefined)this.setURI(uri);this.setAllowCrossPageTransition(require('AsyncRequestConfig').asyncRequestsSurviveTransitionsDefault||false);}AsyncRequest.prototype._invokeInitialHandler=function(asyncResponse){'use strict';return require('AsyncFeature').__invokeWithServerBitMap(asyncResponse.__sf,function(){return this.initialHandler(asyncResponse);}.bind(this));};AsyncRequest.prototype._dispatchResponse=function(asyncResponse){'use strict';this.clearStatusIndicator();if(!this._isRelevant()){this._invokeErrorHandler(1010);return;}if(this._invokeInitialHandler(asyncResponse)===false)return;clearTimeout(this.timer);if(asyncResponse.jscc_map){var jsccMap=require('JSCC').parse(asyncResponse.jscc_map);require('JSCC').init(jsccMap);}var suppress_js,handler=this.getHandler();if(handler)try{suppress_js=this._shouldSuppressJS(require('AsyncFeature').__invokeWithServerBitMap(asyncResponse.__sf,function(){return handler(asyncResponse);}));}catch(e){asyncResponse.is_last&&this._applyFinallyHandler(asyncResponse);throw e;}if(!suppress_js)this._handleJSResponse(asyncResponse);asyncResponse.is_last&&this._applyFinallyHandler(asyncResponse);};AsyncRequest.prototype._shouldSuppressJS=function(handler_return_value){'use strict';return handler_return_value===AsyncRequest.suppressOnloadToken;};AsyncRequest.prototype._handleJSResponse=function(asyncResponse){'use strict';var relativeTo=this.getRelativeTo(),domOps=asyncResponse.domops,dtsgToken=asyncResponse.dtsgToken,jsMods=asyncResponse.jsmods,serverJS=new (require('ServerJS'))();serverJS.setRelativeTo(relativeTo);serverJS.setServerFeatures(asyncResponse.__sf);var requires;if(jsMods&&jsMods.require){requires=jsMods.require;delete jsMods.require;}if(jsMods)serverJS.handle(jsMods);if(dtsgToken)require('DTSG').setToken(dtsgToken);var finishHandleResp=function(AsyncDOM){if(domOps&&AsyncDOM)AsyncDOM.invoke(domOps,relativeTo);if(requires)serverJS.handle({require:requires});this._handleJSRegisters(asyncResponse,'onload');if(this.lid)require('Arbiter').inform('tti_ajax',{s:this.lid,d:[this._sendTimeStamp||0,this._sendTimeStamp&&this._responseTime?this._responseTime-this._sendTimeStamp:0]},require('Arbiter').BEHAVIOR_EVENT);this._handleJSRegisters(asyncResponse,'onafterload');serverJS.cleanup();}.bind(this);if(domOps){require('Bootloader').loadModules(["AsyncDOM"],finishHandleResp,'AsyncRequest');}else finishHandleResp(null);};AsyncRequest.prototype._handleJSRegisters=function(asyncResponse,phase){'use strict';var registers=asyncResponse[phase];if(registers)for(var ii=0;ii<registers.length;ii++)require('ErrorUtils').applyWithGuard(new Function(registers[ii]),this);};AsyncRequest.prototype.invokeResponseHandler=function(interpreted){'use strict';if(typeof interpreted.redirect!=='undefined'){require('setTimeout')(function(){this.setURI(interpreted.redirect).send();}.bind(this),0);return;}if(!this.handler&&!this.errorHandler&&!this.transportErrorHandler)return;var response=interpreted.asyncResponse;if(typeof response!=='undefined'){if(this._timesliceInteraction!=null)this._timesliceInteraction.receiveAsyncResponse(response).inform('async_response_received',{type:require('ArtilleryJSPointTypes').ASYNC_RESPONSE_RECEIVED});if(!this._isRelevant()){this._invokeErrorHandler(1010);return;}if(response.inlinejs)require('evalGlobal')(response.inlinejs);if(response.lid){this._responseTime=Date.now();if(global.CavalryLogger)this.cavalry=global.CavalryLogger.getInstance(response.lid);this.lid=response.lid;}var resourceCounts=[0,0,0];if(response.resource_map)resourceCounts=require('Bootloader').setResourceMap(response.resource_map);if(response.bootloadable)require('Bootloader').enableBootload(response.bootloadable);ix.add(response.ixData);var dispatch,arbiter_event;if(response.getError()&&!response.getErrorIsWarning()){var handler=function(){var _getErrorHandler;for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return require('AsyncFeature').__invokeWithServerBitMap(response.__sf,(_getErrorHandler=this.getErrorHandler()).bind.apply(_getErrorHandler,[this].concat(args)));}.bind(this);dispatch=require('ErrorUtils').guard(this._dispatchErrorResponse,'AsyncRequest#_dispatchErrorResponse for '+this.getURI());dispatch=dispatch.bind(this,response,handler);this._logError(response);arbiter_event='error';}else{dispatch=require('ErrorUtils').guard(this._dispatchResponse.bind(this),'AsyncRequest#_dispatchResponse for '+this.getURI());dispatch=dispatch.bind(this,response);arbiter_event='response';}dispatch=require('executeAfter')(dispatch,function(){require('Arbiter').inform('AsyncRequest/'+arbiter_event,{request:this,response:response});}.bind(this));var replace=false;if(this.preBootloadHandler)replace=this.preBootloadHandler(response);response.css=response.css||[];response.js=response.js||[];require('Bootloader').loadResources(response.css.concat(response.js),require('AsyncRequestConfig').immediateDispatch?dispatch:function(){return require('setTimeout')(dispatch,0);},replace,this.getURI());var fields={uri:this.uri,components:Object.keys(response.bootloadable||{}),resourceCounts:resourceCounts};require('Arbiter').inform(EVENTS.SR_PAYLOAD,fields,require('Arbiter').BEHAVIOR_PERSISTENT);}else if(typeof interpreted.transportError!=='undefined'){if(this._xFbServer){this._invokeErrorHandler(1008);}else this._invokeErrorHandler(1012);}else this._invokeErrorHandler(1007);};AsyncRequest.prototype._logError=function(response){'use strict';if(this.logErrorsEnabled&&!this.getOption('suppressErrorAlerts')){var message=void 0;try{message=JSON.stringify(response);}catch(e){try{message=JSON.stringify({error:response.error,errorSummary:response.errorSummary,errorDescription:response.errorDescription});}catch(ee){message='Too many circular references in the error message.';}}require('ErrorUtils').reportError(new Error(message),true);}};AsyncRequest.prototype._invokeErrorHandler=function(explicitError){'use strict';var transport=this.transport;if(!transport)return;var error;if(this.responseText===''){error=1002;}else if(this._requestAborted){error=1011;}else{try{error=explicitError||transport.status||1004;}catch(e2){error=1005;}if(false===navigator.onLine)error=1006;}var desc,summary,silent=true;if(error===1006){summary=fbt._(["No Network Connection","fbc4152c44fd4245d426a5f8d177cb49"]);desc=fbt._(["Your browser appears to be offline. Please check your internet connection and try again.","b5d43882be1fd7f064bc74361edee38a"]);}else if(error>=300&&error<=399){summary=fbt._(["Redirection","9d016e87d877d3112cca6ea940f868ea"]);desc=fbt._(["Your access to Facebook was redirected or blocked by a third party at this time, please contact your ISP or reload.","2429eb81de05c0e470d0316ac5e6f085"]);var location=transport.getResponseHeader('Location');if(location)require('goURI')(location,true);silent=true;}else{summary=fbt._(["Oops","addd0a6b84b1f7492a5571bc94d954d8"]);desc=fbt._(["Something went wrong. We're working on getting this fixed as soon as we can. You may be able to try again.","9cdd2bce2961b2066d48b4f260fb483b"]);}var async_response=new (require('AsyncResponse'))(this,transport);Object.assign(async_response,{error:error,errorSummary:summary,errorDescription:desc,silentError:silent});require('AsyncFeatureLogging').maybeLogAsyncResponse('_invokeErrorHandler',this,async_response);if(this._timesliceInteraction!=null)this._timesliceInteraction.inform('async_transport_error_received').addStringAnnotation('error_code',error.toString());this._logError(async_response);require('setTimeout')(function(){require('Arbiter').inform('AsyncRequest/error',{request:this,response:async_response});}.bind(this),0);if(hasUnloaded()&&!this.getOption('handleErrorAfterUnload'))return;if(!this.transportErrorHandler)return;var error_handler=this.getTransportErrorHandler().bind(this);!this.getOption('suppressErrorAlerts');require('ErrorUtils').applyWithGuard(this._dispatchErrorResponse,this,[async_response,error_handler]);};AsyncRequest.prototype._solveQuicksandChallenge=function(async_response){'use strict';var payload=async_response.getPayload();require('Bootloader').loadModules(["QuickSandSolver"],function(QuickSandSolver){QuickSandSolver.solveAndSendRequestBack(this,payload);}.bind(this),'AsyncRequest');};AsyncRequest.prototype._displayServerDialog=function(async_response,is_confirmation){var allow_get=arguments.length<=2||arguments[2]===undefined?false:arguments[2];'use strict';var payload=async_response.getPayload();if(payload.__dialog!==undefined){this._displayServerLegacyDialog(async_response,is_confirmation);return;}var json=payload.__dialogx;new (require('ServerJS'))().handle(json);require('Bootloader').loadModules(["ConfirmationDialog"],function(ConfirmationDialog){ConfirmationDialog.setupConfirmation(async_response,this,allow_get);}.bind(this),'AsyncRequest');};AsyncRequest.prototype._displayServerLegacyDialog=function(async_response,is_confirmation){'use strict';var model=async_response.getPayload().__dialog;require('Bootloader').loadModules(["Dialog"],function(Dialog){var dialog=new Dialog(model);if(is_confirmation)dialog.setHandler(this._displayConfirmationHandler.bind(this,dialog));dialog.setCancelHandler(function(){var handler=this.getServerDialogCancelHandler();try{handler&&handler(async_response);}catch(e){throw e;}finally{this._applyFinallyHandler(async_response);}}.bind(this)).setCausalElement(this.relativeTo).show();}.bind(this),'AsyncRequest');};AsyncRequest.prototype._displayConfirmationHandler=function(dialog){'use strict';this.data.confirmed=1;Object.assign(this.data,dialog.getFormData());this.send();};AsyncRequest.prototype.setJSONPTransport=function(transport){'use strict';transport.subscribe('response',this._handleJSONPResponse.bind(this));transport.subscribe('abort',this._handleJSONPAbort.bind(this));this.transport=transport;};AsyncRequest.prototype._handleJSONPResponse=function(_,data){'use strict';var transport=this.transport;if(!transport)return;this.is_first=this.is_first===undefined;var interpreted=this._interpretResponse(data);interpreted.asyncResponse.is_first=this.is_first;interpreted.asyncResponse.is_last=transport.hasFinished();this.invokeResponseHandler(interpreted);if(transport.hasFinished())delete this.transport;};AsyncRequest.prototype._handleJSONPAbort=function(){'use strict';this._invokeErrorHandler();delete this.transport;};AsyncRequest.prototype._handleXHRResponse=function(transport){'use strict';var interpreted;if(this.getOption('suppressEvaluation')){interpreted={asyncResponse:new (require('AsyncResponse'))(this,transport)};require('AsyncFeatureLogging').maybeLogAsyncResponse('_handleXHRResponse:suppressEvaluation',this,interpreted.asyncResponse);}else{var text=transport.responseText,error=null;try{var safe_text=this._unshieldResponseText(text);try{var response=eval('('+safe_text+')');interpreted=this._interpretResponse(response);}catch(exception){error='excep';interpreted={transportError:'eval() failed on async to '+this.getURI()};}}catch(exception){error='empty';interpreted={transportError:exception.message};}if(error){var ErrorSignal=global.ErrorSignal;ErrorSignal&&ErrorSignal.sendErrorSignal('async_xport_resp',[(this._xFbServer?'1008_':'1012_')+error,this._xFbServer||'-',this.getURI(),text.length,text.substr(0,1600)].join(':'));}}this.invokeResponseHandler(interpreted);};AsyncRequest.prototype._unshieldResponseText=function(text){'use strict';var shield="for (;;);",shieldlen=shield.length;if(text.length<=shieldlen)throw new Error('Response too short on async to '+this.getURI());var offset=0;while(text.charAt(offset)==" "||text.charAt(offset)=="\n")offset++;offset&&text.substring(offset,offset+shieldlen)==shield;return text.substring(offset+shieldlen);};AsyncRequest.prototype._interpretResponse=function(response){'use strict';if(response.redirect)return {redirect:response.redirect};var r=new (require('AsyncResponse'))(this);if(response.__ar!=1){r.payload=response;}else{Object.assign(r,response);var transport=this.transport;if(transport&&transport.getAllResponseHeaders!==undefined)r.responseHeaders=transport.getAllResponseHeaders();}require('AsyncFeatureLogging').maybeLogAsyncResponse('_interpretResponse',this,response);return {asyncResponse:r};};AsyncRequest.prototype.




_isMultiplexable=function(){'use strict';
if(this.getOption('jsonp')||this.getOption('useIframeTransport'))



return false;

if(!require('isFacebookURI')(new (require('URI'))(this.uri)))


return false;

if(!this.getOption('asynchronous_DEPRECATED'))

return false;

return true;};
AsyncRequest.prototype.

_applyFinallyHandler=function(response){'use strict';
require('AsyncFeature').__invokeWithServerBitMap
(response.__sf,
function(){
var timesliceInteraction=this._timesliceInteraction;
if(timesliceInteraction){
timesliceInteraction.invokeWithProfiling
('finally_handler',
function(){return this.finallyHandler(response);}.bind(this));

timesliceInteraction.finishAsyncRequest();}else 

this.finallyHandler(response);}.

bind(this));};

AsyncRequest.prototype.

handleResponse=function(response){'use strict';
var interpreted=this._interpretResponse(response);
this.invokeResponseHandler(interpreted);};
AsyncRequest.prototype.











setMethod=function(m){'use strict';
this.method=m.toString().toUpperCase();
return this;};
AsyncRequest.prototype.






getMethod=function(){'use strict';
return this.method;};
AsyncRequest.prototype.

















setData=function(obj){'use strict';
this.data=obj;
return this;};
AsyncRequest.prototype.

















setRequestHeader=function(name,value){'use strict';
this.headers[name]=value;
return this;};
AsyncRequest.prototype.





setRawData=function(raw_data){'use strict';
this.rawData=raw_data;
return this;};
AsyncRequest.prototype.






getData=function(){'use strict';
return this.data;};
AsyncRequest.prototype.











setContextData=function(key,value,enabled){'use strict';
enabled=enabled===undefined?true:enabled;
if(enabled)
this.context['_log_'+key]=value;

return this;};
AsyncRequest.prototype.







_setUserActionID=function(){'use strict';
this.userActionID=(require('SessionName').getName()||'-')+'/-';};
AsyncRequest.prototype.









setURI=function(uri){'use strict';

var uri_obj=new (require('URI'))(uri);

if(this.getOption('useIframeTransport')&&
!require('isFacebookURI')(uri_obj))






return this;


if(!this._allowCrossOrigin&&
!this.getOption('jsonp')&&
!this.getOption('useIframeTransport')&&
!uri_obj.isSameOrigin())










return this;


this._setUserActionID();



if(!uri||uri_obj.isEmpty()){


var ErrorSignal=global.ErrorSignal;
if(ErrorSignal){
var data=
{err_code:1013,
vip:'-',
duration:0,
xfb_ip:'-',
path:window.location.href,
aid:this.userActionID};

ErrorSignal.sendErrorSignal('async_error',JSON.stringify(data));
ErrorSignal.sendErrorSignal('async_xport_stack',
[1013,
window.location.href,
null,
require('ErrorUtils').normalizeError(new Error()).stack].
join(':'));}

return this;}


this.uri=require('ZeroRewrites').rewriteURI(uri_obj);

return this;};
AsyncRequest.prototype.






getURI=function(){'use strict';
return this.uri.toString();};
AsyncRequest.prototype.












setInitialHandler=function(fn){'use strict';
this.initialHandler=fn;
return this;};
AsyncRequest.prototype.



























setHandler=function(fn){'use strict';
if(validateResponseHandler(fn))
this.handler=fn;

return this;};
AsyncRequest.prototype.






getHandler=function(){'use strict';
var func=this.handler||require('emptyFunction'),
timesliceInteraction=this._timesliceInteraction;
if(timesliceInteraction)

return function(response){return timesliceInteraction.invokeWithProfiling
('handler',
function(){return func(response);});};


return func;};
AsyncRequest.prototype.








setUploadProgressHandler=function(fn){'use strict';
if(validateResponseHandler(fn))
this.uploadProgressHandler=fn;

return this;};
AsyncRequest.prototype.
















setErrorHandler=function(fn){'use strict';
if(validateResponseHandler(fn))
this.errorHandler=fn;

return this;};
AsyncRequest.prototype.








setTransportErrorHandler=function(fn){'use strict';
this.transportErrorHandler=fn;
return this;};
AsyncRequest.prototype.




getErrorHandler=function(){'use strict';
var func=this.errorHandler||require('emptyFunction'),
timesliceInteraction=this._timesliceInteraction;
if(timesliceInteraction)

return function(response){return timesliceInteraction.invokeWithProfiling
('error_handler',
function(){return func(response);});};


return func;};
AsyncRequest.prototype.




getTransportErrorHandler=function(){'use strict';
var func=this.transportErrorHandler||require('emptyFunction'),
timesliceInteraction=this._timesliceInteraction;
if(timesliceInteraction)

return function(response){return timesliceInteraction.invokeWithProfiling
('transport_error_handler',
function(){return func(response);});};


return func;};
AsyncRequest.prototype.












setTimeoutHandler=function(timeout,fn){'use strict';
if(validateResponseHandler(fn)){
this.timeout=timeout;
this.timeoutHandler=fn;}

return this;};
AsyncRequest.prototype.










resetTimeout=function(timeout){'use strict';
if(!(this.timeoutHandler===null))


if(timeout===null){
this.timeout=null;
clearTimeout(this.timer);
this.timer=null;}else{

var clear_on_quickling_event=!this._allowCrossPageTransition;

this.timeout=timeout;
clearTimeout(this.timer);
if(clear_on_quickling_event){
this.timer=require('setTimeout')
(this._handleTimeout.bind(this),
this.timeout);}else 


this.timer=require('setTimeoutAcrossTransitions')
(this._handleTimeout.bind(this),
this.timeout);}



return this;};
AsyncRequest.prototype.




_handleTimeout=function(){'use strict';
this._requestTimeout=true;
var func=this.timeoutHandler;
this.abandon();
if(this._timesliceInteraction){
this._timesliceInteraction.invokeWithProfiling
('timeout_handler',
function(){return func&&func(this);}.bind(this));}else 


func&&func(this);

this._logError({timeout:this});};
AsyncRequest.prototype.







disableArtilleryTracing=function(){'use strict';
this.shouldTraceWithArtillery=false;
this._timesliceInteraction=null;
return this;};
AsyncRequest.prototype.






setNewSerial=function(){'use strict';
this.id=++last_id;
return this;};
AsyncRequest.prototype.







setInterceptHandler=function(fn){'use strict';
this.interceptHandler=fn;
return this;};
AsyncRequest.prototype.











setFinallyHandler=function(fn){'use strict';
this.finallyHandler=fn;
return this;};
AsyncRequest.prototype.









setAbortHandler=function(fn){'use strict';
this.abortHandler=fn;
return this;};
AsyncRequest.prototype.









getServerDialogCancelHandler=function(){'use strict';
return this.serverDialogCancelHandler;};
AsyncRequest.prototype.








setServerDialogCancelHandler=function(fn){'use strict';
this.serverDialogCancelHandler=fn;
return this;};
AsyncRequest.prototype.















setPreBootloadHandler=function(fn){'use strict';
this.preBootloadHandler=fn;
return this;};
AsyncRequest.prototype.











































setReadOnly=function(readOnly){'use strict';
if(!(typeof readOnly!='boolean'))




this.readOnly=readOnly;


return this;};
AsyncRequest.prototype.








getReadOnly=function(){'use strict';
return this.readOnly;};
AsyncRequest.prototype.












setRelativeTo=function(element){'use strict';
this.relativeTo=element;
return this;};
AsyncRequest.prototype.







getRelativeTo=function(){'use strict';
return this.relativeTo;};
AsyncRequest.prototype.








setStatusClass=function(c){'use strict';
this.statusClass=c;
return this;};
AsyncRequest.prototype.











setStatusElement=function(element){'use strict';
this.statusElement=element;
return this;};
AsyncRequest.prototype.






getStatusElement=function(){'use strict';
return require('ge')(this.statusElement);};
AsyncRequest.prototype.





_isRelevant=function(){'use strict';
if(this._allowCrossPageTransition)
return true;

if(!this.id)


return true;

return this.id>id_threshold;};
AsyncRequest.prototype.




clearStatusIndicator=function(){'use strict';
var statusElem=this.getStatusElement();
if(statusElem){
require('CSS').removeClass(statusElem,'async_saving');
require('CSS').removeClass(statusElem,this.statusClass);}};

AsyncRequest.prototype.




addStatusIndicator=function(){'use strict';
var statusElem=this.getStatusElement();
if(statusElem){
require('CSS').addClass(statusElem,'async_saving');
require('CSS').addClass(statusElem,this.statusClass);}};

AsyncRequest.prototype.









specifiesWriteRequiredParams=function(){'use strict';
return this.writeRequiredParams.every(function(param){
this.data[param]=
this.data[param]||
require('Env')[param]||
(require('ge')(param)||{}).value;

if(this.data[param]!==undefined)
return true;

return false;},
this);};
AsyncRequest.prototype.































































































setOption=function(opt,v){'use strict';
if(typeof this.option[opt]!='undefined')
this.option[opt]=v;






return this;};
AsyncRequest.prototype.








getOption=function(opt){'use strict';
typeof this.option[opt]=='undefined';





return this.option[opt];};
AsyncRequest.prototype.




abort=function(){'use strict';
var transport=this.transport;
if(transport){
var old_handler=this.getTransportErrorHandler();


this.setOption('suppressErrorAlerts',true);
this.setTransportErrorHandler(require('emptyFunction'));
this._requestAborted=true;
transport.abort();


this.setTransportErrorHandler(old_handler);}


this.abortHandler();
AsyncMultiplex.unschedule(this);};
AsyncRequest.prototype.






abandon=function(){'use strict';
clearTimeout(this.timer);

this.setOption('suppressErrorAlerts',true).
setHandler(require('emptyFunction')).
setErrorHandler(require('emptyFunction')).
setTransportErrorHandler(require('emptyFunction'));

if(this.transport){
this._requestAborted=true;
this.transport.abort();}


this.abortHandler();
AsyncMultiplex.unschedule(this);};
AsyncRequest.prototype.









setNectarData=function(nctrParams){'use strict';
if(nctrParams){
if(this.data.nctr===undefined)
this.data.nctr={};

Object.assign(this.data.nctr,nctrParams);}

return this;};
AsyncRequest.prototype.









setNectarModuleDataSafe=function(elem){'use strict';
var setNectarModuleData=this.setNectarModuleData;
if(setNectarModuleData)
setNectarModuleData.call(this,elem);

return this;};
AsyncRequest.prototype.













setAllowCrossPageTransition=function(allow){'use strict';
this._allowCrossPageTransition=!!allow;










if(this.timer)
this.resetTimeout(this.timeout);


return this;};
AsyncRequest.prototype.

setAllowIrrelevantRequests=function(allowIrrelevantRequests){'use strict';
this._allowIrrelevantRequests=allowIrrelevantRequests;
return this;};
AsyncRequest.prototype.







setAllowCrossOrigin=function(allow){'use strict';
this._allowCrossOrigin=allow;
return this;};
AsyncRequest.prototype.












setAllowCredentials=function(allow){'use strict';
this._allowCredentials=allow;
return this;};
AsyncRequest.prototype.





setIsBackgroundRequest=function(isBackgroundRequest){'use strict';
this._isBackgroundRequest=isBackgroundRequest;
return this;};
AsyncRequest.prototype.










setTimeSliceInteraction=function(interaction){'use strict';
if(this.shouldTraceWithArtillery)
this._timesliceInteraction=interaction;

return this;};
AsyncRequest.prototype.










send=function(isRetry){var _uri$addQueryData;'use strict';
isRetry=isRetry||false;

if(!this.uri)




return false;


!this.errorHandler&&!this.getOption('suppressErrorHandlerWarning');








if(this.getOption('jsonp')&&this.method!='GET')


this.setMethod('GET');

if(this.getOption('useIframeTransport')&&this.method!='GET')

this.setMethod('GET');


this.timeoutHandler!==null&&
(this.getOption('jsonp')||this.getOption('useIframeTransport'));




if(!this.getReadOnly()){
this.specifiesWriteRequiredParams();

if(this.method!='POST')






return false;}




Object.assign(this.data,require('getAsyncParams')(this.method));
var timesliceInteraction=this._timesliceInteraction;
if(this.shouldTraceWithArtillery){
if(!timesliceInteraction){
timesliceInteraction=
require('TimeSliceInteraction').create('async_request');

timesliceInteraction.setIsDefaultAsyncInteraction().
addArtilleryIDHeader(this);
this._timesliceInteraction=timesliceInteraction;}

timesliceInteraction.trace().
addStringAnnotation('uri',this.getURI());

timesliceInteraction.inform
('async_request_sent',
{type:require('ArtilleryJSPointTypes').ASYNC_REQUEST_SENT});}



if(!require('isEmpty')(this.context)){
Object.assign(this.data,this.context);
this.data.ajax_log=1;}


if(require('Env').force_param)
Object.assign(this.data,require('Env').force_param);




this._setUserActionID();

if(this.getOption('bundle')&&this._isMultiplexable()){
AsyncMultiplex.schedule(this);
return true;}



this.setNewSerial();


if(!this.getOption('asynchronous_DEPRECATED'))

this.uri.addQueryData({__s:1});




this.uri.addQueryData((_uri$addQueryData={},_uri$addQueryData[
require('PixelRatioConst').cookieName]=require('WebPixelRatio').getOriginalValue(),_uri$addQueryData));



require('Arbiter').inform('AsyncRequest/send',{request:this});

var uri_str,query;

if(this.method=='GET'||this.rawData){




uri_str=this.uri.addQueryData(this.data).toString();
query=this.rawData||'';}else{

if(this._allowCrossOrigin)



this.uri.addQueryData({__a:1});

uri_str=this.uri.toString();
query=require('PHPQuerySerializer').serialize(this.data);}


if(this.transport)




return false;


if(this.getOption('jsonp')||this.getOption('useIframeTransport')){
requireLazy(['JSONPTransport'],function(JSONPTransport){
var transport=new JSONPTransport
(this.getOption('jsonp')?'jsonp':'iframe',
this.uri);

this.setJSONPTransport(transport);
transport.send();}.
bind(this));

return true;}



var transport=require('ZeroRewrites').getTransportBuilderForURI(this.uri)();

if(!transport)

return false;

var guardedOnReadyStateChange=require('TimeSlice').guard
(this._onStateChange,
'XHR.onreadystatechange',
{isContinuation:true});

transport.onreadystatechange=function(){
if(transport.readyState===4)
guardedOnReadyStateChange();};



if(this.uploadProgressHandler&&supportsUploadProgress(transport))
transport.upload.onprogress=this.uploadProgressHandler.bind(this);


if(!isRetry)

this.remainingRetries=this.getOption('retries');




if(global.ErrorSignal)
this._sendTimeStamp=this._sendTimeStamp||Date.now();


this.transport=transport;


try{transport.open(this.method,uri_str,this.getOption('asynchronous_DEPRECATED'));}catch(
exception){





return false;}



if(!this.uri.isSameOrigin()&&
!this.getOption('jsonp')&&
!this.getOption('useIframeTransport')){
if(!supportsCrossOrigin(transport))





return false;


if((require('isFacebookURI')(new (require('URI'))(this.uri))||require('isMessengerDotComURI')(this.uri))&&
this._allowCredentials!==false)


transport.withCredentials=true;}



if(this.method=='POST'&&!this.rawData)
transport.setRequestHeader
('Content-Type',
'application/x-www-form-urlencoded');



if(this._isBackgroundRequest)
transport.setRequestHeader('X_FB_BACKGROUND_STATE','1');



var asyncHeaders=require('getAsyncHeaders')(this.uri);
Object.keys(asyncHeaders).forEach(function(name){
transport&&transport.setRequestHeader
(name,
asyncHeaders[name]);});





require('Arbiter').inform('AsyncRequest/will_send',{request:this});

if(transport)
for(var headerName in this.headers)
if(Object.prototype.hasOwnProperty.call(this.headers,headerName))
transport.setRequestHeader
(headerName,
this.headers[headerName]);





this.addStatusIndicator();

transport.send(query);

if(this.timeout!==null)
this.resetTimeout(this.timeout);



AsyncRequest._inflightCount++;
AsyncRequest._inflightAdd(this);
require('ProfilingCounters').incrementCounter('ASYNC_REQUEST_COUNT',1);

return true;};
AsyncRequest.

_inflightAdd=function(ar){'use strict';
this._inflight.push(ar);};
AsyncRequest.

_inflightPurge=function(){'use strict';
AsyncRequest._inflight=AsyncRequest._inflight.filter(function(ar){
return ar.transport&&ar.transport.readyState<4;});};

AsyncRequest.prototype.













exec=function(isRetry){'use strict';
if(this.getHandler()!==require('emptyFunction')||
this.getErrorHandler()!==require('AsyncResponse').defaultErrorHandler)
throw new Error
('exec is an async function and does not allow previously set handlers');


return new (require('Promise'))(function(resolve,reject){
this.
setHandler(resolve).
setErrorHandler(reject).
send(isRetry);}.
bind(this));};
AsyncRequest.






bootstrap=function(href,elem,is_post){'use strict';
var method='GET',
readonly=true,
data={};



if(is_post||elem&&elem.rel=='async-post'){
method='POST';
readonly=false;
if(href){
href=new (require('URI'))(href);
data=href.getQueryData();
href.setQueryData({});}}


var status_elem=require('Parent').byClass(elem,'stat_elem')||elem;
if(status_elem&&require('CSS').hasClass(status_elem,'async_saving'))
return false;


var async=new AsyncRequest(href).
setReadOnly(readonly).
setMethod(method).
setData(data).
setNectarModuleDataSafe(elem).
setRelativeTo(elem);

if(elem){
async.setHandler(function(response){
require('Event').fire(elem,'success',{response:response});});

async.setErrorHandler(function(response){
if(require('Event').fire(elem,'error',{response:response})!==false)
require('AsyncResponse').defaultErrorHandler(response);});}




if(status_elem){
async.setStatusElement(status_elem);
var status_class=status_elem.getAttribute('data-status-class');
status_class&&async.setStatusClass(status_class);}


async.send();
return false;};
AsyncRequest.


post=function(href,data){'use strict';
new AsyncRequest(href).
setReadOnly(false).
setMethod('POST').
setData(data).
send();
return false;};
AsyncRequest.

getLastID=function(){'use strict';
return last_id;};
AsyncRequest.


getInflightCount=function(){'use strict';
return this._inflightCount;};
AsyncRequest.





_inflightEnable=function(){'use strict';
if(require('UserAgent_DEPRECATED').ie())

require('Run').onUnload(function(){
AsyncRequest._inflight.forEach(function(ar){
if(ar.transport&&ar.transport.readyState<4){
ar.transport.abort();
delete ar.transport;}});});};













var _asyncMultiplex,





_pendingAsyncMultiplexes=[];









function AsyncMultiplex(){'use strict';
this._requests=[];}
AsyncMultiplex.prototype.





add=function(request){'use strict';
this._requests.push(request);};
AsyncMultiplex.prototype.




remove=function(request){'use strict';
var requests=this._requests,
requestsSent=this._requestsSent;
for(var ii=0,jj=requests.length;ii<jj;ii++)
if(requests[ii]===request)
if(requestsSent){




requests[ii]=null;}else 


requests.splice(ii,1);};



AsyncMultiplex.prototype.




send=function(){'use strict';

!this._requestsSent||invariant(0,
'AsyncMultiplex should only send requests once');


this._requestsSent=true;
this._wrapperRequest=null;

var requests=this._requests;
if(!requests.length)
return;

var request;
if(requests.length===1){

request=requests[0];}else{

var data=requests.filter(Boolean).map(function(request){


return [request.uri.getPath(),require('PHPQuerySerializer').serialize(request.data)];});


request=this._wrapperRequest=new AsyncRequest('/ajax/proxy.php').

setAllowCrossPageTransition(true).
setData({data:data}).
setHandler(this._handler.bind(this)).
setTransportErrorHandler(this._transportErrorHandler.bind(this));}


request&&request.setOption('bundle',false).send();};
AsyncMultiplex.prototype.




_handler=function(response){'use strict';
var responses=response.getPayload().responses;
if(responses.length!==this._requests.length)



return;

for(var ii=0;ii<this._requests.length;ii++){
var request=this._requests[ii];
if(!request)
continue;


var request_path=request.uri.getPath();

if(this._wrapperRequest)
request.id=this._wrapperRequest.id;


if(responses[ii][0]!==request_path){

request.invokeResponseHandler
({transportError:
'Wrong response order in bundled request to '+request_path});

continue;}

request.handleResponse(responses[ii][1]);}


_pendingAsyncMultiplexes.splice(_pendingAsyncMultiplexes.indexOf(this,1));};
AsyncMultiplex.prototype.




_transportErrorHandler=function(response){'use strict';
var interpreted={transportError:response.errorDescription},
paths=this._requests.
filter(Boolean).
map(function(request){
if(this._wrapperRequest)
request.id=this._wrapperRequest.id;

request.invokeResponseHandler(interpreted);
return request.uri.getPath();},
this);};



AsyncMultiplex.






schedule=function(request){'use strict';
if(!_asyncMultiplex){
_asyncMultiplex=new AsyncMultiplex();
_pendingAsyncMultiplexes.push(_asyncMultiplex);
require('setTimeout')(function(){
if(_asyncMultiplex){
_asyncMultiplex.send();
_asyncMultiplex=null;}},

0);}

_asyncMultiplex.add(request);
return _asyncMultiplex;};
AsyncMultiplex.





unschedule=function(request){'use strict';



_pendingAsyncMultiplexes.forEach
(function(asyncMultiplex){
asyncMultiplex.remove(request);});};





AsyncRequest.EVENTS=EVENTS;
AsyncRequest.suppressOnloadToken={};










AsyncRequest._inflight=[];
AsyncRequest._inflightCount=0;
AsyncRequest._inflightAdd=require('emptyFunction');
AsyncRequest._inflightPurge=require('emptyFunction');

global.AsyncRequest=AsyncRequest;
module.exports=AsyncRequest;}),null);
