if (self.CavalryLogger) { CavalryLogger.start_js(["YmPpU"]); }

/** __static_js_modules__/adsinterfacescomponentseventcategory.js */




__d("AdsInterfacesComponentsEventCategory",[],(function a(b,c,d,e,f,g){

f.exports={ERRORS:"errors",GENERAL:"general"};}),

null);

/** __static_js_modules__/adsinterfacescomponentseventname.js */




__d("AdsInterfacesComponentsEventName",[],(function a(b,c,d,e,f,g){

f.exports={BIG_ADOPTION_NO_CONTEXT_THEME:"big_adoption_no_context_theme",BIG_ADOPTION_EXCEPTION:"big_adoption_exception",BIG_COMPONENT_ERROR:"big_component_error",DEPRECATE_CALLED:"deprecate_called"};}),

null);

/** __static_js_modules__/adsloggerconstants.js */




__d("AdsLoggerConstants",[],(function a(b,c,d,e,f,g){

f.exports={DAO_ERROR_EVENT_NAME:"dao_error",ERROR_EVENT_CATEGORY:"errors",UNHANDLED_JS_EXCEPTION_EVENT_NAME:"unhandled_js_exception"};}),

null);

/** js/ads/app_framework/AdsLogger.js */



























__d('AdsLogger',['AdsLoggerConstants','AdsUnifiedLoggingConfig','Banzai','ErrorUtils','emptyFunction'],(function a(b,c,d,e,f,g){

'use strict';
















function h
(i,
j,
k,
l){

this.$AdsLogger_loggerConfigName=i;

this.$AdsLogger_getAppContext=
c('ErrorUtils').guard(j||c('emptyFunction').thatReturnsNull);
this.$AdsLogger_getErrorContextUnsafe=
k||c('emptyFunction').thatReturnsNull;

this.$AdsLogger_banzaiRoute=l||'logger';


c('ErrorUtils').addListener(function(m){
if(this.__shouldSilenceError(m))
return;


var n=
{error_message:m.message,
error_type:m.name,
stack_trace:m.stack,
error_data:JSON.stringify(m),
error_script:m.script,
error_line:m.line};


this.logError
(c('AdsLoggerConstants').UNHANDLED_JS_EXCEPTION_EVENT_NAME,
n);}.

bind(this));}
h.prototype.





__shouldSilenceError=function(i){

return !!i.type&&i.type!=='mustfix';};
h.prototype.





logForAnalytics=
function(i,
j,
k){

k=k||{};






var l=k.vital===undefined?true:k.vital;
delete k.vital;

var m=babelHelpers['extends']({},
this.$AdsLogger_getAppContext(),
k,
{event_category:i,
event:j});



this.$AdsLogger_addStackTrace
(j||'',
m,
c('AdsUnifiedLoggingConfig').stack_traces);


if(!m.event)
m.stack_trace=new Error('No Event.').stack||'none';


c('Banzai').post
(this.$AdsLogger_banzaiRoute+':'+this.$AdsLogger_loggerConfigName,
m,
l?c('Banzai').VITAL:c('Banzai').BASIC);};

h.prototype.

$AdsLogger_coinFlip=function(i){
if(i===1){
return true;}else
if(i<=0){
return false;}else 

return Math.floor(Math.random()*Math.floor(i)+1)===1;};

h.prototype.

$AdsLogger_addStackTrace=
function(i,
j,
k){

var l=k[i.toLowerCase()];

if(l&&this.$AdsLogger_coinFlip(l)){
var m=new Error('Requested Stack-Trace.'),
n=c('ErrorUtils').normalizeError(m);
j.stack_trace=n.stack;}};

h.prototype.

logError=function(i,j){
var k=this.$AdsLogger_getErrorContext();
this.logForAnalytics
(c('AdsLoggerConstants').ERROR_EVENT_CATEGORY,
i,babelHelpers['extends']({},
j,k));};

h.prototype.










$AdsLogger_getErrorContext=function(){
var i={};

try{i=this.$AdsLogger_getErrorContextUnsafe();}catch(
j){
i=
{reason:'Error while invoking app error callback!',
rawError:j};}


return i;};



f.exports=h;}),null);

/** js/ads/interfaces/logging/AdsInterfacesLogger.js */






__d('AdsInterfacesLogger',['invariant','Map','Set'],(function a(b,c,d,e,f,g,h){

'use strict';var i,



















j='primary',
k='secondary',

l='ads_interfaces_logger_primary_app',
m='ads_interfaces_logger_secondary_app',

n=(i={},i[
j]=
{data:[],
isRegistered:false},i[

k]=
{data:[],
isRegistered:false},i),



o=new (c('Map'))(),


p=new (c('Set'))();q.














__reset=function(){
n[j]=
{data:[],
isRegistered:false};

if(o.has(l))
o['delete'](l);


n[k]=
{data:[],
isRegistered:false};

if(o.has(m))
o['delete'](m);

p=new (c('Set'))();};
q.

getPath=function(r){
return r===j?
l:m;};
q.

log=
function(r){

var s=arguments.length<=1||arguments[1]===undefined?k:arguments[1];




if(s===k&&
!n[s].isRegistered&&
n[j].isRegistered)

s=j;




if(!n[s].isRegistered){
n[s].data.push(r);
return;}


var t=o.get(this.getPath(s));
t||h(0,'No logger instance was registered.');

t instanceof q||h(0,
'Registered logger is not an instance of AdsInterfacesLogger');


t.__log(r);};
q.




logOnce=
function(r){

var s=arguments.length<=1||arguments[1]===undefined?k:arguments[1],
t=JSON.stringify(r);
if(p.has(t))

return;

q.log(r,s);
p.add(t);};
q.

get=function(){var r=arguments.length<=0||arguments[0]===undefined?k:arguments[0];




if(r===k&&
!n[r].isRegistered&&
n[j].isRegistered)

r=j;


var s=o.get(this.getPath(r));
return s;};


function q(r,s){
this.__log=r.log;
this.__interfaceID=s;}
q.prototype.

getInterfaceID=function(){
return this.__interfaceID;};
q.prototype.

register=function(r){
o.set(this.constructor.getPath(r),this);
n[r].isRegistered=true;


if(n[r].data.length>0){
n[r].data.forEach(this.__log);
n[r].data=[];}




if(r===j&&
n[k].data.length>0){

n[k].data.forEach(this.__log);
n[k].data=[];}};

q.prototype.

unregister=function(r){
o['delete'](this.constructor.getPath(r));
n[r].isRegistered=false;};
q.LOG_TYPE_PRIMARY_APP=j;q.LOG_TYPE_SECONDARY_APP=k;


f.exports=q;}),null);

/** js/ads/interfaces/logging/AdsInterfacesComponentsLogger.js */






__d('AdsInterfacesComponentsLogger',['AdsInterfacesComponentsEventCategory','AdsInterfacesComponentsEventName','AdsInterfacesLogger','AdsLogger'],(function a(b,c,d,e,f,g){

'use strict';var h,i,






j='unified_logging',
k='components';h=babelHelpers.inherits



(l,c('AdsLogger'));i=h&&h.prototype;


function l(){
i.constructor.call(this,k,undefined,undefined,j);}
l.prototype.

getInterfaceID=function(){
return this.__interface_id;};
l.prototype.

setInterfaceID=function(m){
this.__interface_id=m;};
l.prototype.

logForAnalytics=
function(m,
n,
o){

o=o||{};

if(!o.interface_id){

var p=this.getInterfaceID();
if(!p){

var q=c('AdsInterfacesLogger').get();
if(q)
p=q.getInterfaceID();}



if(p)
o.interface_id=p;}



i.logForAnalytics.call(this,m,n,o);};
l.prototype.

logBIGComponentError=function(m,n){





this.logForAnalytics
(c('AdsInterfacesComponentsEventCategory').ERRORS,
c('AdsInterfacesComponentsEventName').BIG_COMPONENT_ERROR,

{caller:n,
message:m.message,
stack_trace:m.stack});};


l.prototype.

__shouldSilenceError=function(m){



return true;};



f.exports=new l();}),null);

/** js/bandicoot/BandicootSession.js */





__d('BandicootSession',[],(function a(b,c,d,e,f,g){

'use strict';

var h=
{ACTIVE:'ACTIVE',
INACTIVE:'INACTIVE',
CLOSED:'CLOSED'},


i=10*60*1000,
j=14*24*60*60*1000;














function k(p){
return Date.now()-p.lastUpdated;}


function l(p){



return !!(typeof p==='object'&&
p&&
p.lastUpdated&&
p.status);}



function m(p){
if(p.status===h.CLOSED){


return false;}else

if(p.status===h.INACTIVE&&
k(p)>i)






return false;

return true;}


function n(p){

return (p.status===h.ACTIVE&&
k(p)>i);}



function o(p){

return (k(p)>j);}



f.exports=
{Status:h,
isValidSession:l,
isTrackedSession:m,
isOrphanSession:o,
isCrashedSession:n};}),null);

/** js/bandicoot/Bandicoot.js */






__d('Bandicoot',['invariant','BandicootSession'],(function a(b,c,d,e,f,g,h){









'use strict';




var i=5*1000,
j=i*2,
k='Bandicoot:',


l=c('BandicootSession').Status,
m=c('BandicootSession').isValidSession,
n=c('BandicootSession').isTrackedSession,
o=c('BandicootSession').isCrashedSession,
p=c('BandicootSession').isOrphanSession;







function q(){

try{var u=window.localStorage;

if(u){
var v='__test'+Date.now();
u.setItem(v,'');
u.removeItem(v);}

return u;}catch(
t){
return null;}}


var r=q();











































function s(t){'use strict';
this.$Bandicoot_storageKey=k+t;
this.$Bandicoot_loggedCrashedSessions={};
this.$Bandicoot_handleVisibilityChangeBound=this.$Bandicoot_handleVisibilityChange.bind(this);


this.sessionID=null;
this.sessionStartTime=null;
this.storage=r;}
s.prototype.








getCrashTimeData=function(){'use strict';
var t=window.performance&&window.performance.memory||{},
u=this.sessionStartTime;

return {duration:u?Date.now()-u:0,


tabs:Object.keys(this.$Bandicoot_readSessions()).length,
jsHeapSizeLimit:t.jsHeapSizeLimit,
totalJSHeapSize:t.totalJSHeapSize,
usedJSHeapSize:t.usedJSHeapSize,
elementsInDOM:document.getElementsByTagName('*').length,
uri:window.location.href};};

s.prototype.








getLogTimeData=function(){'use strict';

return {userAgent:window.navigator.userAgent};};

s.prototype.












logCrash=
function(t,
u,
v){
'use strict';
var w=Object.assign
({sessionID:t},
u,
v);};

s.prototype.








logBrowserUnsupported=function(){'use strict';};

s.prototype.









logTrackingError=function(){'use strict';};

s.prototype.










startSession=function(){'use strict';
if(!this.storage){
this.logBrowserUnsupported();
return;}

if(this.$Bandicoot_heartbeatHandle)

return;



if(!this.sessionID)
this.sessionID=Math.random().toString(36).slice(2,9);

if(!this.sessionStartTime)
this.sessionStartTime=Date.now();


this.$Bandicoot_heartbeatHandle=setInterval(function(){
this.$Bandicoot_updateAndSaveSessions();}.
bind(this),i);
this.$Bandicoot_updateAndSaveSessions();

if(document.addEventListener)
document.addEventListener
('visibilitychange',
this.$Bandicoot_handleVisibilityChangeBound);



this.$Bandicoot_cleanOrphanData();};
s.prototype.







endSession=function(){'use strict';
if(!this.storage)
return;

if(!this.$Bandicoot_heartbeatHandle)

return;


clearInterval(this.$Bandicoot_heartbeatHandle);
this.$Bandicoot_heartbeatHandle=null;

if(!this.$Bandicoot_killSessionWithoutStorageWrite)


this.$Bandicoot_saveSessionProps
({status:l.CLOSED});



this.sessionID=null;
this.sessionStartTime=null;

if(document.removeEventListener)
document.removeEventListener
('visibilitychange',
this.$Bandicoot_handleVisibilityChangeBound);};


s.prototype.





logKnownCrashes=function(){'use strict';
if(!this.storage)
return;




if(!this.$Bandicoot_heartbeatHandle){
var t=this.$Bandicoot_readSessions();
t=this.$Bandicoot_processSessions(t,function(u,v){
if(o(u)){
this.logCrash(v,u,this.getLogTimeData());
return null;}else 

return u;}.

bind(this));
this.$Bandicoot_saveSessions(t);}};

s.prototype.








$Bandicoot_getSessionID=function(){'use strict';
var t=this.sessionID;
t||h(0,'SessionID must be set');
return t;};
s.prototype.





$Bandicoot_updateAndSaveSessions=function(){'use strict';
var t=this.$Bandicoot_readSessions();
this.$Bandicoot_updateCurrentSession(t);
t=this.$Bandicoot_reportCrashedSessions(t);
this.$Bandicoot_saveSessions(t);};
s.prototype.




$Bandicoot_updateCurrentSession=function(t){'use strict';
var u=this.$Bandicoot_getSessionID(),
v=t[u]?t[u]:{};
t[u]=babelHelpers['extends']({},
v,
this.getCrashTimeData(),
{lastUpdated:Date.now(),
status:this.$Bandicoot_getStatusFromPageVisibility()});};

s.prototype.




$Bandicoot_processSessions=
function(t,
u){
'use strict';
var v={};
Object.keys(t).forEach(function(w){
var x=t[w];

if(m(x)&&
n(x)&&
!p(x)){

var y=u(x,w);
if(y)
v[w]=y;}});



return v;};
s.prototype.




$Bandicoot_reportCrashedSessions=function(t){'use strict';
return this.$Bandicoot_processSessions(t,function(u,v){
if(o(u)){
var w=u.loggerReportTime||0;
if(Date.now()-w>j){

u.loggerReportTime=Date.now();
u.loggerReportSession=this.$Bandicoot_getSessionID();}else
if(u.loggerReportSession==this.$Bandicoot_getSessionID()){


this.logCrash(v,u,this.getLogTimeData());
this.$Bandicoot_loggedCrashedSessions[v]=true;
return null;}}


return u;}.
bind(this));};
s.prototype.





$Bandicoot_readSessions=function(t){'use strict';
t=t||this.$Bandicoot_storageKey;
var u=this.storage.getItem(t)||'{}';

try{u=JSON.parse(u);}catch(
v){
u={};

this.storage.removeItem(t);}

return u;};
s.prototype.





$Bandicoot_saveSessionProps=function(t){'use strict';
t.lastUpdated=Date.now();
var u=this.$Bandicoot_readSessions(),
v=this.sessionID;
if(v&&u[v]){
Object.assign(u[v],t);
this.$Bandicoot_saveSessions(u);}};

s.prototype.





$Bandicoot_saveSessions=function(t){'use strict';
var u=JSON.stringify(t);

try{this.storage.setItem(this.$Bandicoot_storageKey,u);}catch(

v){
var w=this.$Bandicoot_timeLastLoggedTrackingError,
x=Date.now();

if(!w||x>w+i){
this.logTrackingError();
this.$Bandicoot_timeLastLoggedTrackingError=x;}




try{this.storage.removeItem(this.$Bandicoot_storageKey);}catch(
y){







this.$Bandicoot_killSessionWithoutStorageWrite=true;
this.endSession();}}};


s.prototype.






$Bandicoot_cleanOrphanData=function(){'use strict';
for(var t=0;t<this.storage.length;++t){
var u=this.storage.key(t);

if(u.indexOf(k)===0&&

u!==this.$Bandicoot_storageKey){

var v=this.$Bandicoot_readSessions(u),
w=Object.keys(v).every(function(x){
var y=v[x];
return !m(y)||p(y);});

if(w)
this.storage.removeItem(u);}}};



s.prototype.

$Bandicoot_handleVisibilityChange=function(){'use strict';
















this.$Bandicoot_saveSessionProps
({status:this.$Bandicoot_getStatusFromPageVisibility()});};

s.prototype.

$Bandicoot_getStatusFromPageVisibility=function(){'use strict';
return document.hidden?l.INACTIVE:l.ACTIVE;};



f.exports=s;}),null);

/** js/components/core/BUI/BUIComponent.js */







__d('BUIComponent',['AdsInterfacesComponentsLogger','React'],(function a(b,c,d,e,f,g){
'use strict';var h,i,




j=c('React').Component;h=babelHelpers.inherits

(k,
j);i=h&&h.prototype;k.prototype.




unstable_handleError=function(l){
c('AdsInterfacesComponentsLogger').logBIGComponentError
(l,
this.constructor.displayName);



throw l;};
function k(){h.apply(this,arguments);}


f.exports=k;}),null);

/** js/components/core/XUI/Button/XUIButtonGroup.react.js */





__d('XUIButtonGroup.react',['cx','invariant','React','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j,k,







l=c('React').PropTypes;j=babelHelpers.inherits

(m,c('React').Component);k=j&&j.prototype;m.prototype.






render=function(){'use strict';
this.validateButtonSize();

var n="_51xa"+

(this.props.isOverlay?' '+"_51xb":'');



return (c('React').createElement('div',babelHelpers['extends']({},
this.props,

{className:c('joinClasses')(this.props.className,n)}),


this.props.children));};


m.prototype.

validateButtonSize=function(){'use strict';
if(!this.props.isOverlay){
var n;

c('React').Children.forEach(this.props.children,function(o){
if(o){

o.type.getButtonSize||i(0,
'All the children of XUIButtonGroup must implement '+
'a static method getButtonSize');

var p=o.type.getButtonSize(o.props);
if(!n){
n=p;}else 


p===n||i(0,
'You may not mix button sizes in a button group.');}});}};





function m(){'use strict';j.apply(this,arguments);}m.propTypes={isOverlay:l.bool};


f.exports=m;}),null);

/** js/modules/fileSliceName.js */















__d('fileSliceName',['UserAgent_DEPRECATED'],(function a(b,c,d,e,f,g){



var h='slice',
i;

if(i=c('UserAgent_DEPRECATED').chrome()){
if(i<21)
h='webkitSlice';}else

if(i=c('UserAgent_DEPRECATED').firefox()){
if(i<13)
h='mozSlice';}else

if(!(i=c('UserAgent_DEPRECATED').safari()))

if(c('UserAgent_DEPRECATED').webkit())
h='webkitSlice';


f.exports=h;}),null);

/** js/filehasher/FileHasher.js */







__d('FileHasher',['WebWorker','fileSliceName','emptyFunction','FileHashWorkerResource'],(function a(b,c,d,e,f,g){h.












isSupported=function(){'use strict';
return c('WebWorker').isSupported();};





function h(){'use strict';
var i=c('FileHashWorkerResource');
c('WebWorker').prepareResource(i);
this.$FileHasher_worker=new (c('WebWorker'))(i).
setMessageHandler(function(j){
this.$FileHasher_currCallback(j);}.
bind(this)).
execute();}
h.prototype.








hash=function(i,j){'use strict';
this.$FileHasher_currCallback=j;
this.$FileHasher_worker.postMessage
({file:i,
fileSliceName:c('fileSliceName')});


return this;};
h.prototype.

destroy=function(){'use strict';
this.$FileHasher_currCallback=c('emptyFunction');
this.$FileHasher_worker.terminate();};



f.exports=h;}),null);

/** js/modules/fileSlice.js */








__d('fileSlice',['fileSliceName'],(function a(b,c,d,e,f,g){



var h=b.File&&b.File.prototype[c('fileSliceName')];

f.exports=h;}),null);

/** shared_core/error/ManagedError.js */














__d("ManagedError",[],(function a(b,c,d,e,f,g){

function h(i,j){
Error.prototype.constructor.call(this,i);
this.message=i;
this.innerError=j;}

h.prototype=new Error();
h.prototype.constructor=h;

f.exports=h;}),null);

/** js/sdk/AssertionError.js */







__d('AssertionError',['ManagedError'],(function a(b,c,d,e,f,g){



function h(i){
c('ManagedError').prototype.constructor.apply(this,arguments);}

h.prototype=new (c('ManagedError'))();
h.prototype.constructor=h;

f.exports=h;}),null);

/** js/sdk/Assert.js */








__d('Assert',['AssertionError','sprintf'],(function a(b,c,d,e,f,g){













function h(m,n){
if(typeof m!=='boolean'||!m)
throw new (c('AssertionError'))(n);

return m;}











function i(m,n,o){
var p;

if(n===undefined){
p='undefined';}else
if(n===null){
p='null';}else{

var q=Object.prototype.toString.call(n);
p=/\s(\w*)/.exec(q)[1].toLowerCase();}


h
(m.indexOf(p)!==-1,
o||c('sprintf')('Expression is of type %s, not %s',p,m));

return n;}











function j(m,n,o){
h
(n instanceof m,
o||'Expression not instance of type');

return n;}


function k(m,n){
l['is'+m]=n;
l['maybe'+m]=function(o,p){

if(o!=null)
n(o,p);};}




var l=
{isInstanceOf:j,
isTrue:h,
isTruthy:function m(n,o){
return h(!!n,o);},

type:i,
define:function m(n,o){
n=n.substring(0,1).toUpperCase()+
n.substring(1).toLowerCase();

k(n,function(p,q){
h(o(p),q);});}};





['Array',
'Boolean',
'Date',
'Function',
'Null',
'Number',
'Object',
'Regexp',
'String',
'Undefined'].forEach(function(m){
k(m,i.bind(null,m.toLowerCase()));});


f.exports=l;}),null);

/** js/video/logging/upload/VideoUploadLogger.js */




__d('VideoUploadLogger',['Banzai'],(function a(b,c,d,e,f,g){



function h(i){
this._source=i.source;
this._waterfallID=i.waterfall_id;
this._targetID=i.target_id;
this._delay=i.delay;
this._times=[];
this._isChunkedUpload=i.is_chunked_upload;
this._actorID=i.actor_id;
this._composerEntryPointRef=i.composer_entry_point_ref;
this._isRemoteUpload=i.is_remote_upload;
this._containerType=i.container_type;}


Object.assign(h,


{BANZAI_GK:'videos',
BANZAI_ROUTE:'video_waterfall',


SOURCE_SIMPLE:'simple',
SOURCE_COMPOSER:'composer',


EVENT_STARTED_GENERATE_THUMBNAILS:
'upload.client.started_generate_thumbnails',
EVENT_FINISHED_GENERATE_THUMBNAILS:
'upload.client.finished_generate_thumbnails',
EVENT_SELECTED_CUSTOM_THUMBNAIL:
'upload.client.selected_custom_thumbnail',
EVENT_VIDEO_DIMENSIONS_UNREADABLE:
'upload.client.video_dimensions_unreadable',
EVENT_REPLACE_VIDEO:
'upload.client.replace_video',

EVENT_STARTED_FLOW:'upload.client.started_flow',
EVENT_FINISHED_FLOW:'upload.client.finished_flow',
EVENT_FAILED_FLOW:'upload.client.failed_flow',
EVENT_CANCELED_FLOW:'upload.client.canceled_flow',
EVENT_RESIGNED_FLOW:'upload.client.resigned_flow',

EVENT_REQUESTED_UPLOADING:'upload.client.requested_uploading',
EVENT_INVALIDATED_UPLOADING:'upload.client.invalidated_uploading',
EVENT_STARTED_UPLOADING:'upload.client.started_uploading',
EVENT_PROGRESS_UPLOADING_START_REQUEST:
'upload.client.progress_uploading_start_request',
EVENT_FINISHED_UPLOADING:'upload.client.finished_uploading',
EVENT_CANCELED_UPLOADING:'upload.client.canceled_uploading',
EVENT_ABANDONED_UPLOADING:'upload.client.abandoned_uploading',
EVENT_FAILED_UPLOADING:'upload.client.failed_uploading',

EVENT_STARTED_SENDING_BYTES:'upload.client.started_sending_bytes',
EVENT_FINISHED_SENDING_BYTES:'upload.client.finished_sending_bytes',
EVENT_CANCELED_SENDING_BYTES:'upload.client.canceled_sending_bytes',
EVENT_FAILED_SENDING_BYTES:'upload.client.failed_sending_bytes',

EVENT_STARTED_START_REQUEST:
'upload.client.started_sending_start_request',
EVENT_FINISHED_START_REQUEST:'upload.client.finished_sending_start_request',
EVENT_FAILED_START_REQUEST:'upload.client.failed_sending_start_request',

EVENT_STARTED_POST_REQUEST:
'upload.client.started_sending_post_request',
EVENT_FINISHED_POST_REQUEST:'upload.client.finished_sending_post_request',
EVENT_FAILED_POST_REQUEST:'upload.client.failed_sending_post_request',

EVENT_STARTED_SENDING_CHUNK_BYTES:
'upload.client.started_sending_chunk_bytes',
EVENT_FINISHED_SENDING_CHUNK_BYTES:
'upload.client.finished_sending_chunk_bytes',
EVENT_CANCELED_SENDING_CHUNK_BYTES:
'upload.client.canceled_sending_chunk_bytes',
EVENT_FAILED_SENDING_CHUNK_BYTES:
'upload.client.failed_sending_chunk_bytes',
EVENT_TIMEOUT_SENDING_CHUNK_BYTES:
'upload.client.timeout_sending_chunk_bytes',




EVENT_ENCODING_START_OBSERVED:
'encode.client.encoding_start_observed',

EVENT_ENCODING_SUCCESS_OBSERVED:
'encode.client.encoding_success_observed',

EVENT_ENCODING_FAIL_OBSERVED:
'encode.client.encoding_fail_observed',


EVENT_RECEIVED_RESPONSE:'upload.client.received_response'});



Object.assign(h.prototype,

{logEvent:function i(event,j){


var k=babelHelpers['extends']({},
j);



if(k.elapsed_time==null)
if(event.indexOf('started')!==-1){

this._times[event]=Date.now();}else
if(event.indexOf('finished')!==-1){

k.elapsed_time=this._computeElapsedTime(event,'finished');}else
if(event.indexOf('canceled')!==-1){

k.elapsed_time=this._computeElapsedTime(event,'canceled');}else
if(event.indexOf('failed')!==-1)

k.elapsed_time=this._computeElapsedTime(event,'failed');



k.event=event;
k.source=this._source;
k.waterfall_id=this._waterfallID;
k.target_id=this._targetID;
k.is_chunked_upload=this._isChunkedUpload;
k.actor_id=this._actorID;
k.composer_entry_point_ref=this._composerEntryPointRef;
k.is_remote_upload=this._isRemoteUpload;
k.container_type=this._containerType;


c('Banzai').post
(h.BANZAI_ROUTE,
k,

{delay:this._delay,
retry:true});},




_computeElapsedTime:function i(event,j){
var k=event.replace(j,'started'),
l=this._times[k];
return l?Date.now()-l:null;}});




f.exports=h;}),null);

/** js/video/logging/upload/VideoUploadSphericalLogger.js */





__d('VideoUploadSphericalLogger',['Banzai'],(function a(b,c,d,e,f,g){



var h=3000;










function i(){'use strict';
this.$VideoUploadSphericalLogger_data={};
this.$VideoUploadSphericalLogger_throttle=false;
this.$VideoUploadSphericalLogger_lastThrottleTimestamp=0;}
i.prototype.

log=function(){'use strict';
this.$VideoUploadSphericalLogger_throttle?this.$VideoUploadSphericalLogger_logThrottled():this.$VideoUploadSphericalLogger_log();};
i.prototype.

$VideoUploadSphericalLogger_log=function(){'use strict';
c('Banzai').post('spherical_video_composer_upload',babelHelpers['extends']({},this.$VideoUploadSphericalLogger_data));};
i.prototype.

$VideoUploadSphericalLogger_logThrottled=function(){'use strict';
var j=Date.now();
if(j-this.$VideoUploadSphericalLogger_lastThrottleTimestamp>h){
this.$VideoUploadSphericalLogger_lastThrottleTimestamp=j;
this.$VideoUploadSphericalLogger_log();}};

i.prototype.

setDirectorsCutEnabled=function(j){'use strict';
this.$VideoUploadSphericalLogger_data.directors_cut_enabled=j;
return this;};
i.prototype.

setFieldOfView=function(j){'use strict';
this.$VideoUploadSphericalLogger_data.field_of_view=j;
return this;};
i.prototype.

setFileExtension=function(j){'use strict';
this.$VideoUploadSphericalLogger_data.file_extension=j;
return this;};
i.prototype.

setHasSphericalMetadata=function(j){'use strict';
this.$VideoUploadSphericalLogger_data.has_spherical_metadata=j;
return this;};
i.prototype.

setPitchDegrees=function(j){'use strict';
this.$VideoUploadSphericalLogger_data.pitch_degrees=j;
return this;};
i.prototype.

setTargetID=function(j){'use strict';
this.$VideoUploadSphericalLogger_data.target_id=j;
return this;};
i.prototype.

setVideoID=function(j){'use strict';
this.$VideoUploadSphericalLogger_data.video_id=j;
return this;};
i.prototype.

setUserAction=
function(j){
'use strict';
this.$VideoUploadSphericalLogger_data.user_action=j;
if(j==='drag_video_preview'||j==='scroll_video_preview'){
this.$VideoUploadSphericalLogger_throttle=true;}else 

this.$VideoUploadSphericalLogger_throttle=false;

return this;};
i.prototype.

setVideoPreviewPosition=function(j){'use strict';
this.$VideoUploadSphericalLogger_data.video_preview_position=j;
return this;};
i.prototype.

setYawDegrees=function(j){'use strict';
this.$VideoUploadSphericalLogger_data.yaw_degrees=j;
return this;};
i.prototype.

setIsRedesign=function(j){'use strict';
this.$VideoUploadSphericalLogger_data.is_redesign=j;
return this;};
i.prototype.

setFinalGuideEnabled=function(j){'use strict';
this.$VideoUploadSphericalLogger_data.final_guide_enabled=j;
return this;};
i.prototype.

setFinalNumGuidePoints=function(j){'use strict';
this.$VideoUploadSphericalLogger_data.final_num_guide_points=j;
return this;};
i.prototype.




setIsNuxTest=function(j){'use strict';
this.$VideoUploadSphericalLogger_data.is_nux_test=j;
return this;};




f.exports=new i();}),null);

/** js/video/upload/crash_monitor/VideoUploadCrashMonitor.js */





__d('VideoUploadCrashMonitor',['Bandicoot','VideoUploadLogger'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits




(j,c('Bandicoot'));i=h&&h.prototype;
function j
(k,
l,
m,
n,
o,
p,
q,
r){
'use strict';
i.constructor.call(this,'VideoUploadSession');

this.$VideoUploadCrashMonitor_crashTimeData=
{waterfallID:k,
actorID:l,
source:m,
targetID:n,
loggingDelay:o,
supportsChunking:p,
composerEntryPointRef:q,
flowStarted:r};}

j.prototype.

flowStarted=function(){'use strict';
this.$VideoUploadCrashMonitor_crashTimeData.flowStarted=true;};
j.prototype.

getCrashTimeData=function(){'use strict';
return this.$VideoUploadCrashMonitor_crashTimeData;};
j.prototype.

logCrash=function(k,l,m){'use strict';
if(!l.waterfallID)
return;


var n=new (c('VideoUploadLogger'))
({actor_id:l.actorID,
source:l.source,
waterfall_id:l.waterfallID,
target_id:l.targetID,
delay:l.loggingDelay,
is_chunked_upload:l.supportsChunking,
composer_entry_point_ref:l.composerEntryPointRef}),


o=
{error:'Crash Detected',
error_description:
'Detected video upload did not complete due to a crash'};


n.logEvent(c('VideoUploadLogger').EVENT_FAILED_UPLOADING,o);
if(l.flowStarted)
n.logEvent(c('VideoUploadLogger').EVENT_RESIGNED_FLOW,{});};




f.exports=j;}),null);

/** js/video/upload/file/validator/VideoUploadFileValidator.js */





__d('VideoUploadFileValidator',['errorCode','fbt','ErrorDialog','ImageExtensions','JSXDOM'],(function a(b,c,d,e,f,g,h,i){







var j=
[1363019,
1363020,
1363021,
1363022,
1363023,
1363024,
1363025,
1363026,
1363027,
1363030,
1363031,
1363032,
1363033,
1363038,
1363039,
1363040,
1363048],


k=
['VIDEO__INVALID_GUIDE_DATA'];










function l(m){'use strict';
this.$VideoUploadFileValidator_config=m;}
l.prototype.






validate=function(m,n){'use strict';
return this.$VideoUploadFileValidator_validateFormat(m)&&
this.$VideoUploadFileValidator_validateSize(m)&&
this.$VideoUploadFileValidator_validateMetadata
(m.getExtension()===c('ImageExtensions').GIF,
n);};

l.prototype.






getValidationErrorMessage=function(m,n){'use strict';
return this.$VideoUploadFileValidator_getFormatErrorMessage(m)||
this.$VideoUploadFileValidator_getSizeErrorMessage(m)||
this.$VideoUploadFileValidator_getMetadataErrorMessage
(m.getExtension()===c('ImageExtensions').GIF,
n);};

l.

canReplaceVideoForError=function(m){'use strict';
if(!m)

return true;

if(k.indexOf(m)>-1)
return false;

if(j.indexOf(m)>-1)
return true;

return false;};
l.prototype.





$VideoUploadFileValidator_validateFormat=function(m){'use strict';
var n=this.$VideoUploadFileValidator_getFormatErrorMessage(m);

if(n){
c('ErrorDialog').show
(n.summary,
n.description);

return false;}else 

return true;};

l.prototype.

$VideoUploadFileValidator_getFormatErrorMessage=function(m){'use strict';

if(this.$VideoUploadFileValidator_config.extensions[m.getExtension()])
return;


var n="http://www.facebook.com/help/"+
"?faq=218673814818907#What-formats-of-video-files-can-I-upload?",

o=
c('JSXDOM').a
({href:n},i._(["recommended formats","2c854ae82cdc8b04f5195bbbf730b519"]));




return {summary:i._(["Unsupported File Format","6764abd54161bd575b2eda7cb6581b3e"]),



description:i._(["Sorry, the file you selected is in a format that we don't support. Please use one of our {link} for video files.","91d2a2e5a25879724ff8e6ae20e3b010"],


[i.param('link',o)])};};




l.prototype.





$VideoUploadFileValidator_validateSize=function(m){'use strict';
var n=this.$VideoUploadFileValidator_getSizeErrorMessage(m);

if(n){
c('ErrorDialog').show
(n.summary,
n.description);

return false;}else 

return true;};

l.prototype.

$VideoUploadFileValidator_getSizeErrorMessage=function(m){'use strict';
var n;


if(m.getSize()===null)
return;



if(m.getSize()<this.$VideoUploadFileValidator_config.minSize)
n=this.$VideoUploadFileValidator_getMinSizeErrorMessage();



if(m.getSize()>this.$VideoUploadFileValidator_config.maxSize)
n=this.$VideoUploadFileValidator_getMaxSizeErrorMessage();


return n;};
l.prototype.

$VideoUploadFileValidator_getMinSizeErrorMessage=function(){'use strict';

var m=Math.round(this.$VideoUploadFileValidator_config.minSize/1024);


return {summary:i._(["Video File Too Small","7d19b5e39c261e4dcba6090930ee14f5"]),



description:i._(["The video file you tried to upload is too small. The minimum size for a video file is {min-size} KB. Please try again with a larger file.","a4ae81f06722d6e9bbd0eef873c4c6b6"],


[i.param('min-size',m)])};};




l.prototype.

$VideoUploadFileValidator_getMaxSizeErrorMessage=function(){'use strict';
var m=this.$VideoUploadFileValidator_config.maxSize/1024/1024;


return {summary:i._(["Video File Too Large","a9dfd088f35881e69894e8cabebcfbfa"]),



description:i._(["The video file you tried to upload is too large. The maximum size for a video file is {max-size} MB. Please try again with a smaller file.","51590426f522bc306d04e68a07b058b9"],


[i.param('max-size',m)])};};




l.prototype.

$VideoUploadFileValidator_validateMetadata=function(m,n){'use strict';
var o=this.$VideoUploadFileValidator_getMetadataErrorMessage(m,n);

if(o){
c('ErrorDialog').show
(o.summary,
o.description);

return false;}else 

return true;};

l.prototype.

$VideoUploadFileValidator_getMetadataErrorMessage=function(m,n){'use strict';
var o;



if(!n)
return;


var p=n.format.duration;
if(p>this.$VideoUploadFileValidator_config.maxLength)
o=this.$VideoUploadFileValidator_getDurationErrorMessage();



if(p<this.$VideoUploadFileValidator_config.minLength&&!m)
o=this.$VideoUploadFileValidator_getMinLengthErrorMessage();


if(!n.streams.primaryVideo&&n.streams.primaryAudio)
o=this.$VideoUploadFileValidator_getAudioOnlyErrorMessage();


if(n.streams.primaryVideo.width<this.$VideoUploadFileValidator_config.minWidth)
o=this.$VideoUploadFileValidator_getNarrowWidthErrorMessage();


if(n.streams.primaryVideo.height<this.$VideoUploadFileValidator_config.minHeight)
o=this.$VideoUploadFileValidator_getShortHeightErrorMessage();


if(this.$VideoUploadFileValidator_config.require16to9AspectRatio){
var q=
n.streams.primaryVideo.width/n.streams.primaryVideo.height;
if(q>2||q<1.6)
o=this.$VideoUploadFileValidator_getRequire16to9AspectRatioErrorMessage();}



return o;};
l.prototype.

$VideoUploadFileValidator_getDurationErrorMessage=function(){'use strict';
if(this.$VideoUploadFileValidator_config.source==='profile_video'){

return {summary:i._(["Profile Video Duration Too Long","7c9803ce0e39c073f3f1e454e8430897"]),



description:i._(["The maximum length is {max-length} seconds. Please upload a shorter video.","6fef0541627eba54e298c51cdc8314a1"],

[i.param('max-length',this.$VideoUploadFileValidator_config.maxLength)])};}else 






return {summary:i._(["Video Duration Too Long","0c7d494242dd41aa7f50ef91c61db264"]),



description:i._(["The duration of the video you tried to upload is too long. The maximum duration for a video is {max-length} minutes. Please upload a shorter video.","e82bb6af71dc04ce5bd8335d249c1b78"],


[i.param('max-length',Math.round(this.$VideoUploadFileValidator_config.maxLength/60))])};};





l.prototype.

$VideoUploadFileValidator_getMinLengthErrorMessage=function(){'use strict';

return {summary:i._(["Video File Too Short","5dbca7403cc4faaf917b30a7f8d238d6"]),



description:i._({"second":["The duration of the video you tried to upload is too short. The minimum length for a video is {min-length} second. Please upload a longer video.","d650404298ed3fba8a9204cb99e9ed56"],"seconds":["The duration of the video you tried to upload is too short. The minimum length for a video is {min-length} seconds. Please upload a longer video.","2439728e8762a2dcceee241c84852ad5"]},


[i.param('min-length',this.$VideoUploadFileValidator_config.minLength),
i['enum']
(this.$VideoUploadFileValidator_config.minLength===1?'second':'seconds',
{second:'second',seconds:'seconds'})])};};




l.prototype.

$VideoUploadFileValidator_getAudioOnlyErrorMessage=function(){'use strict';
var m="http://www.facebook.com/help/"+
"?faq=218673814818907#What-formats-of-video-files-can-I-upload?",

n=
c('JSXDOM').a
({href:m},i._(["supported video format","0ce0072210e9c4c40666041ff3a9e86a"]));




return {summary:i._(["No Video Detected","cfbeadb4aff321019a1f74b1902b343a"]),



description:i._(["It looks like you're trying to upload a file that isn't a video. Please try uploading a {supported-video-format link}","8e3f89791368518933e76c3ef5b26d7a"],


[i.param('supported-video-format link',n)])};};



l.prototype.

$VideoUploadFileValidator_getNarrowWidthErrorMessage=function(){'use strict';

return {summary:i._(["Video Width Too Narrow","8cac3c1911182b80086554b6d752b1f8"]),



description:i._(["The width of the video you tried to upload is too short. The minimum width for a video is {min-width}. Please upload a wider video.","6ea5816d6cca9651a3bf83c0c0b13ffa"],


[i.param('min-width',this.$VideoUploadFileValidator_config.minWidth)])};};




l.prototype.

$VideoUploadFileValidator_getRequire16to9AspectRatioErrorMessage=function(){'use strict';

return {summary:i._(["Problem Uploading Video","03853a2f3a73fda11a804ebdafa3aabc"]),



description:i._(["Videos look best when they have a 16:9 aspect ratio. Please edit your video and upload again.","6aa3040ddc7bb08d38a305e14e96daa4"])};};





l.prototype.

$VideoUploadFileValidator_getShortHeightErrorMessage=function(){'use strict';

return {summary:i._(["Video Height Too Short","f0ecbe5389131b412a8a89f0e10999ac"]),



description:i._(["The height of the video you tried to upload is too short. The minimum height for a video is {min-height}. Please upload a taller video.","5d32ee7cfbc023a5d0c00b700a79df37"],


[i.param('min-height',this.$VideoUploadFileValidator_config.minHeight)])};};







f.exports=l;}),null);

/** js/video/upload/utilities/feature_detector/VideoUploadFeatureDetector.js */





__d('VideoUploadFeatureDetector',['UserAgent_DEPRECATED','fileSlice'],(function a(b,c,d,e,f,g){





var h=




{supportsChunking:function i(){
return typeof c('fileSlice')==='function'&&this.supportsXHR();},





supportsFullProgress:function i(){
return !c('UserAgent_DEPRECATED').firefox();},








supportsFileAPI:function i(){
return 'FileList' in window;},


supportsFileReading:function i(){
return 'FileReader' in window&&'DataView' in window;},





supportsXHR:function i(){
return 'FormData' in window;}};



f.exports=h;}),null);

/** js/video/upload/progress_bar/VideoUploadProgressBar.js */




__d('VideoUploadProgressBar',['cx','CSS','VideoUploadFeatureDetector'],(function a(b,c,d,e,f,g,h){







function i(j){'use strict';
this.$VideoUploadProgressBar_progressBar=j.progress_bar;
this.$VideoUploadProgressBar_throbber=j.throbber;
this.$VideoUploadProgressBar_uploader=j.uploader;
this.$VideoUploadProgressBar_startMargin=j.start_margin;
this.$VideoUploadProgressBar_startDelay=j.start_delay;
this.$VideoUploadProgressBar_endMargin=j.end_margin;
this.$VideoUploadProgressBar_endDelay=j.end_delay;
this.$VideoUploadProgressBar_progressBarLabel=j.progress_bar_label;
this.$VideoUploadProgressBar_subscribe();}
i.prototype.

reset=function(){'use strict';
this.$VideoUploadProgressBar_progressBar.setPosition(0);};
i.prototype.

getRoot=function(){'use strict';
return this.$VideoUploadProgressBar_progressBar.getRoot();};
i.

computeProgress=
function(j,
k,
l,
m,
n){
'use strict';
var o=Math.min(j+k,l);
return o/l*
(100-m-n)+m;};
i.prototype.

$VideoUploadProgressBar_subscribe=function(){'use strict';
if(c('VideoUploadFeatureDetector').supportsFileAPI()){
this.$VideoUploadProgressBar_uploader.subscribe
('upload-requested',
this.$VideoUploadProgressBar_handleUploadRequested.bind(this));

this.$VideoUploadProgressBar_uploader.subscribe
('upload-progressed',
this.$VideoUploadProgressBar_handleUploadProgressed.bind(this));

this.$VideoUploadProgressBar_uploader.subscribe
('online',
this.$VideoUploadProgressBar_handleConnectionOnline.bind(this));

this.$VideoUploadProgressBar_uploader.subscribe
('offline',
this.$VideoUploadProgressBar_handleConnectionOffline.bind(this));}else 


this.$VideoUploadProgressBar_uploader.subscribe
('upload-requested',
this.$VideoUploadProgressBar_handleUploadRequestedWithThrobber.bind(this));};


i.prototype.

$VideoUploadProgressBar_handleUploadRequested=function(event){'use strict';
c('CSS').show(this.$VideoUploadProgressBar_progressBar.getRoot());

c('CSS').removeClass
(this.$VideoUploadProgressBar_progressBar.getRoot(),
"_5r5a");



this.$VideoUploadProgressBar_progressBar.setTarget(this.$VideoUploadProgressBar_startMargin,this.$VideoUploadProgressBar_startDelay);
this.$VideoUploadProgressBar_setLabel(0);};
i.prototype.

$VideoUploadProgressBar_setLabel=function(j){'use strict';
if(this.$VideoUploadProgressBar_progressBarLabel)
this.$VideoUploadProgressBar_progressBar.changeLabel
(''+j.toFixed(1)+'%');};


i.prototype.

$VideoUploadProgressBar_handleUploadProgressed=function(event,j){'use strict';
c('CSS').removeClass
(this.$VideoUploadProgressBar_progressBar.getRoot(),
"_5r5a");



var k=i.computeProgress
(j.start_offset,
j.sent_bytes,
j.file_size,
this.$VideoUploadProgressBar_startMargin,
this.$VideoUploadProgressBar_endMargin);


this.$VideoUploadProgressBar_progressBar.setPosition(k);
this.$VideoUploadProgressBar_setLabel(k);


if(k>=100-this.$VideoUploadProgressBar_endMargin){
this.$VideoUploadProgressBar_progressBar.setTarget(100,this.$VideoUploadProgressBar_endDelay);
this.$VideoUploadProgressBar_setLabel(100);}};

i.prototype.

$VideoUploadProgressBar_handleConnectionOnline=function(event){'use strict';
c('CSS').removeClass
(this.$VideoUploadProgressBar_progressBar.getRoot(),
"_5r5a");};

i.prototype.

$VideoUploadProgressBar_handleConnectionOffline=function(event){'use strict';
c('CSS').addClass
(this.$VideoUploadProgressBar_progressBar.getRoot(),
"_5r5a");};

i.prototype.

$VideoUploadProgressBar_handleUploadRequestedWithThrobber=function(event){'use strict';
c('CSS').show(this.$VideoUploadProgressBar_throbber);};




f.exports=i;}),null);

/** js/video/upload/request/VideoUploadRequest.js */





__d('VideoUploadRequest',['AsyncRequest','DOM','DTSG','FileForm','Form','PHPQuerySerializer','VideoUploadFeatureDetector','emptyFunction','flattenPHPQueryData','submitForm'],(function a(b,c,d,e,f,g){













var h='video';



function i(j){'use strict';
this.$VideoUploadRequest_uri=j;
this.$VideoUploadRequest_request=null;
this.$VideoUploadRequest_allowCrossOrigin=false;
this.$VideoUploadRequest_data=null;
this.$VideoUploadRequest_waterfall_id=null;
this.$VideoUploadRequest_timeout=null;

this.$VideoUploadRequest_successHandler=c('emptyFunction');
this.$VideoUploadRequest_errorHandler=c('emptyFunction');
this.$VideoUploadRequest_transportErrorHandler=c('emptyFunction');
this.$VideoUploadRequest_uploadProgressHandler=c('emptyFunction');
this.$VideoUploadRequest_timeoutHandler=null;}
i.prototype.



setAllowCrossOrigin=function(j){'use strict';
this.$VideoUploadRequest_allowCrossOrigin=j;
return this;};
i.prototype.

setData=function(j){'use strict';
this.$VideoUploadRequest_data=j;
return this;};
i.prototype.

setWaterfallID=function(j){'use strict';
this.$VideoUploadRequest_waterfall_id=j;
return this;};
i.prototype.

setSuccessHandler=function(j){'use strict';
this.$VideoUploadRequest_successHandler=j;
return this;};
i.prototype.

setErrorHandler=function(j){'use strict';
this.$VideoUploadRequest_errorHandler=j;
return this;};
i.prototype.

setTransportErrorHandler=function(j){'use strict';
this.$VideoUploadRequest_transportErrorHandler=j;
return this;};
i.prototype.

setUploadProgressHandler=function(j){'use strict';
this.$VideoUploadRequest_uploadProgressHandler=j;
return this;};
i.prototype.

setTimeoutHandler=function(j,k){'use strict';
this.$VideoUploadRequest_timeout=j;
this.$VideoUploadRequest_timeoutHandler=k;
return this;};
i.prototype.

setThumbnail=function(j){'use strict';
this.$VideoUploadRequest_thumbnail=j;
return this;};
i.prototype.

setCaptions=function(j){'use strict';
this.$VideoUploadRequest_captions=j;
return this;};
i.prototype.

send=function(){'use strict';
if(this.$VideoUploadRequest_request)
throw new Error('An upload request is already in progress.');


if(c('VideoUploadFeatureDetector').supportsXHR()){
this.$VideoUploadRequest_request=this.$VideoUploadRequest_createAsyncRequest();

if(this.$VideoUploadRequest_thumbnail||this.$VideoUploadRequest_captions){
var j=new FormData();

if(this.$VideoUploadRequest_thumbnail)
j.append('thumb',this.$VideoUploadRequest_thumbnail);

if(this.$VideoUploadRequest_captions)
this.$VideoUploadRequest_captions.forEach(function(l,m){
var n=l.getIsDefault()?
'captions_default':'captions_file'+m;
j.append(n,l.getFile());});




if(this.$VideoUploadRequest_data){
var k=c('flattenPHPQueryData')(this.$VideoUploadRequest_data);
Object.keys(k).forEach(function(l){
j.append(l,k[l]);});}


this.$VideoUploadRequest_request.setRawData(j);}

this.$VideoUploadRequest_request.send();}else{

this.$VideoUploadRequest_request=this.$VideoUploadRequest_createFileForm();
this.$VideoUploadRequest_sendFileForm(this.$VideoUploadRequest_request);}};

i.prototype.

sendChunk=function(j){'use strict';
if(this.$VideoUploadRequest_request)
throw new Error('An upload request is already in progress.');



var k=new FormData();
k.append('video_file_chunk',j);

this.$VideoUploadRequest_request=this.$VideoUploadRequest_createAsyncRequest();
this.$VideoUploadRequest_request.setRawData(k);
this.$VideoUploadRequest_request.send();};
i.prototype.

sendFile=function(j){'use strict';
if(this.$VideoUploadRequest_request)
throw new Error('An upload request is already in progress.');


this.$VideoUploadRequest_request=this.$VideoUploadRequest_createFileForm();


var k=j.cloneNode(false);



j.name=h;

c('DOM').replace(j,k);
c('DOM').appendContent(this.$VideoUploadRequest_request.getRoot(),j);

this.$VideoUploadRequest_sendFileForm(this.$VideoUploadRequest_request);


j.name=k.name;
c('DOM').replace(k,j);};
i.prototype.

abort=function(){'use strict';
if(!this.$VideoUploadRequest_request)
throw new Error('There is no upload request in progress.');


this.$VideoUploadRequest_request.abort();
this.$VideoUploadRequest_request=null;};
i.prototype.



$VideoUploadRequest_createAsyncRequest=function(){'use strict';
var j=this.__getAsyncRequest().
setAllowCrossOrigin(this.$VideoUploadRequest_allowCrossOrigin).
setURI(this.$VideoUploadRequest_uri).
setData(this.$VideoUploadRequest_data).
setRequestHeader('X_FB_VIDEO_WATERFALL_ID',this.$VideoUploadRequest_waterfall_id).
setHandler(this.$VideoUploadRequest_successHandler).
setErrorHandler(this.$VideoUploadRequest_errorHandler).
setTransportErrorHandler(this.$VideoUploadRequest_transportErrorHandler).
setUploadProgressHandler(this.$VideoUploadRequest_uploadProgressHandler);

if(this.$VideoUploadRequest_timeoutHandler)
j.setTimeoutHandler
(this.$VideoUploadRequest_timeout,
this.$VideoUploadRequest_timeoutHandler);



return j;};
i.prototype.

__getAsyncRequest=function(){'use strict';
return new (c('AsyncRequest'))();};
i.prototype.

$VideoUploadRequest_createFileForm=function(){'use strict';
var j=c('DOM').create('form',{action:this.$VideoUploadRequest_uri,method:'POST'});
c('Form').createHiddenInputs(babelHelpers['extends']

({fb_dtsg:c('DTSG').getToken()},
this.$VideoUploadRequest_data),

j);


var k=new (c('FileForm'))
(j,
null,
{allowCrossOrigin:this.$VideoUploadRequest_allowCrossOrigin});


k.subscribe('success',this.$VideoUploadRequest_handleRequestSuccess.bind(this));
k.subscribe('failure',this.$VideoUploadRequest_handleRequestFailure.bind(this));
k.subscribe('progress',this.$VideoUploadRequest_handleRequestProgress.bind(this));

return k;};
i.prototype.

$VideoUploadRequest_sendFileForm=function(j){'use strict';
c('DOM').appendContent(document.body,j.getRoot());
c('submitForm')(j.getRoot());};
i.prototype.

$VideoUploadRequest_handleRequestSuccess=function(event,j){'use strict';
this.$VideoUploadRequest_successHandler(j.response);};
i.prototype.

$VideoUploadRequest_handleRequestFailure=function(event,j){'use strict';
this.$VideoUploadRequest_errorHandler(j.response);};
i.prototype.

$VideoUploadRequest_handleRequestProgress=function(event,j){'use strict';
this.$VideoUploadRequest_uploadProgressHandler(j.event);};



f.exports=i;}),null);

/** js/video/upload/request/context/VideoUploadRequestContext.js */





__d("VideoUploadRequestContext",[],(function a(b,c,d,e,f,g){



function h(){"use strict";
this.reset();}
h.prototype.

setFile=function(i){"use strict";
this.$VideoUploadRequestContext_file=i;
return this;};
h.prototype.

getFile=function(){"use strict";
return this.$VideoUploadRequestContext_file;};
h.prototype.

setMetadata=function(i){"use strict";
this.$VideoUploadRequestContext_metadata=i;
return this;};
h.prototype.

getMetadata=function(){"use strict";
return this.$VideoUploadRequestContext_metadata;};
h.prototype.

setVideoID=function(i){"use strict";
this.$VideoUploadRequestContext_videoID=i;
return this;};
h.prototype.

getVideoID=function(){"use strict";
return this.$VideoUploadRequestContext_videoID;};
h.prototype.

setStartOffset=function(i){"use strict";
this.$VideoUploadRequestContext_startOffset=i;
return this;};
h.prototype.

getStartOffset=function(){"use strict";
return this.$VideoUploadRequestContext_startOffset;};
h.prototype.

setEndOffset=function(i){"use strict";
this.$VideoUploadRequestContext_endOffset=i;
return this;};
h.prototype.

getEndOffset=function(){"use strict";
return this.$VideoUploadRequestContext_endOffset;};
h.prototype.

setPartitionStartOffset=function(i){"use strict";
this.$VideoUploadRequestContext_partitionStartOffset=i;
return this;};
h.prototype.

getPartitionStartOffset=function(){"use strict";
return this.$VideoUploadRequestContext_partitionStartOffset;};
h.prototype.

setPartitionEndOffset=function(i){"use strict";
this.$VideoUploadRequestContext_partitionEndOffset=i;
return this;};
h.prototype.

getPartitionEndOffset=function(){"use strict";
return this.$VideoUploadRequestContext_partitionEndOffset;};
h.prototype.

setTargetID=function(i){"use strict";
this.$VideoUploadRequestContext_targetID=i;
return this;};
h.prototype.

getTargetID=function(){"use strict";
return this.$VideoUploadRequestContext_targetID;};
h.prototype.

setSource=function(i){"use strict";
this.$VideoUploadRequestContext_source=i;
return this;};
h.prototype.

getSource=function(){"use strict";
return this.$VideoUploadRequestContext_source;};
h.prototype.

setWaterfallID=function(i){"use strict";
this.$VideoUploadRequestContext_waterfallID=i;
return this;};
h.prototype.

getWaterfallID=function(){"use strict";
return this.$VideoUploadRequestContext_waterfallID;};
h.prototype.

setComposerEntryPointRef=function(i){"use strict";
this.$VideoUploadRequestContext_composerEntryPointRef=i;};
h.prototype.

getComposerEntryPointRef=function(){"use strict";
return this.$VideoUploadRequestContext_composerEntryPointRef;};
h.prototype.

setSupportsChunking=function(i){"use strict";
this.$VideoUploadRequestContext_supportsChunking=i;
return this;};
h.prototype.

getSupportsChunking=function(){"use strict";
return this.$VideoUploadRequestContext_supportsChunking;};
h.prototype.

setSupportsFileAPI=function(i){"use strict";
this.$VideoUploadRequestContext_supportsFileAPI=i;
return this;};
h.prototype.

getSupportsFileAPI=function(){"use strict";
return this.$VideoUploadRequestContext_supportsFileAPI;};
h.prototype.

setCreatorProduct=function(i){"use strict";
this.$VideoUploadRequestContext_creatorProduct=i;
return this;};
h.prototype.

getCreatorProduct=function(){"use strict";
return this.$VideoUploadRequestContext_creatorProduct;};
h.prototype.

setLastKnownUploadSpeed=function(i){"use strict";
this.$VideoUploadRequestContext_lastKnownUploadSpeed=i;};
h.prototype.

getLastKnownUploadSpeed=function(){"use strict";
return this.$VideoUploadRequestContext_lastKnownUploadSpeed||0;};
h.prototype.

setUseParallelChunks=function(i){"use strict";
this.$VideoUploadRequestContext_useParallelChunks=i;};
h.prototype.

getUseParallelChunks=function(){"use strict";
return this.$VideoUploadRequestContext_useParallelChunks;};
h.prototype.

setIsSphericalVideo=function(i){"use strict";
this.$VideoUploadRequestContext_isSphericalVideo=i;};
h.prototype.

getIsSphericalVideo=function(){"use strict";
return this.$VideoUploadRequestContext_isSphericalVideo;};
h.prototype.

setSphericalMetadata=function(i){"use strict";
this.$VideoUploadRequestContext_sphericalMetadata=i;};
h.prototype.

getSphericalMetadata=function(){"use strict";
return this.$VideoUploadRequestContext_sphericalMetadata;};
h.prototype.

setEnableOmnistab=function(i){"use strict";
this.$VideoUploadRequestContext_enableOmnistab=i;};
h.prototype.

getEnableOmnistab=function(){"use strict";
return this.$VideoUploadRequestContext_enableOmnistab;};
h.prototype.

reset=function(){"use strict";
this.$VideoUploadRequestContext_file=null;
this.$VideoUploadRequestContext_videoID=null;
this.$VideoUploadRequestContext_startOffset=null;
this.$VideoUploadRequestContext_endOffset=null;
this.$VideoUploadRequestContext_targetID=null;
this.$VideoUploadRequestContext_source=null;
this.$VideoUploadRequestContext_waterfallID=null;
this.$VideoUploadRequestContext_composerEntryPointRef=null;
this.$VideoUploadRequestContext_supportsChunking=null;
this.$VideoUploadRequestContext_supportsFileAPI=null;
this.$VideoUploadRequestContext_partitionStartOffset=null;
this.$VideoUploadRequestContext_partitionEndOffset=null;
this.$VideoUploadRequestContext_creatorProduct=null;
this.$VideoUploadRequestContext_lastKnownUploadSpeed=0;
this.$VideoUploadRequestContext_useParallelChunks=false;
this.$VideoUploadRequestContext_isSphericalVideo=false;
this.$VideoUploadRequestContext_metadata={};
this.$VideoUploadRequestContext_sphericalMetadata={};
this.$VideoUploadRequestContext_enableOmnistab=false;};



f.exports=h;}),null);

/** js/video/upload/request/managers/post/VideoUploadPostRequestManager.js */





__d('VideoUploadPostRequestManager',['ArbiterMixin','VideoUploadRequest','mixin'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits






(j,c('mixin')(c('ArbiterMixin')));i=h&&h.prototype;




function j
(k,
l,
m,
n,
o){'use strict';
i.constructor.call(this);
this.$VideoUploadPostRequestManager_uri=k;
this.$VideoUploadPostRequestManager_maxTransportRetries=l;
this.$VideoUploadPostRequestManager_transportRetryIntervalBase=m;
this.$VideoUploadPostRequestManager_transportRetries=0;
this.$VideoUploadPostRequestManager_maxServerRetries=n;
this.$VideoUploadPostRequestManager_serverRetryIntervalBase=o;
this.$VideoUploadPostRequestManager_serverRetries=0;}
j.prototype.






getRequest=function(){'use strict';
return this.$VideoUploadPostRequestManager_request;};
j.prototype.




sendRequest=function(k){'use strict';
if(this.$VideoUploadPostRequestManager_request)






return;



this.$VideoUploadPostRequestManager_postData=babelHelpers['extends']({},
k.getMetadata(),
this.__createRequestData(k));


this.$VideoUploadPostRequestManager_thumbnail=this.$VideoUploadPostRequestManager_postData.thumb;

delete this.$VideoUploadPostRequestManager_postData.thumb;

this.$VideoUploadPostRequestManager_captions=this.$VideoUploadPostRequestManager_postData.captions;
delete this.$VideoUploadPostRequestManager_postData.captions;

this.$VideoUploadPostRequestManager_waterfallID=k.getWaterfallID();

this.$VideoUploadPostRequestManager_sendRequest();

this.inform('request-started');};
j.prototype.

$VideoUploadPostRequestManager_sendRequest=function(){'use strict';
clearTimeout(this.$VideoUploadPostRequestManager_timer);
this.$VideoUploadPostRequestManager_timer=null;

this.$VideoUploadPostRequestManager_request=this.__getVideoUploadRequest(this.$VideoUploadPostRequestManager_uri).
setAllowCrossOrigin(true).
setData(this.$VideoUploadPostRequestManager_postData).
setThumbnail(this.$VideoUploadPostRequestManager_thumbnail).
setCaptions(this.$VideoUploadPostRequestManager_captions).
setWaterfallID(this.$VideoUploadPostRequestManager_waterfallID).
setSuccessHandler(this.$VideoUploadPostRequestManager_handleSuccessResponse.bind(this)).
setErrorHandler(this.$VideoUploadPostRequestManager_handleServerFailureResponse.bind(this)).
setTransportErrorHandler
(this.$VideoUploadPostRequestManager_handleTransportFailureResponse.bind(this));

this.$VideoUploadPostRequestManager_request.send();};
j.prototype.

__createRequestData=function(k){'use strict';

return {video_id:k.getVideoID(),
target_id:k.getTargetID(),
source:k.getSource(),
waterfall_id:k.getWaterfallID(),
creator_product:k.getCreatorProduct(),
composer_entry_point_ref:

k.getComposerEntryPointRef&&k.getComposerEntryPointRef(),
supports_chunking:k.getSupportsChunking()};};

j.prototype.

__getVideoUploadRequest=function(k){'use strict';
return new (c('VideoUploadRequest'))(k);};
j.prototype.

clearRequest=function(){'use strict';
this.$VideoUploadPostRequestManager_request=null;
this.$VideoUploadPostRequestManager_serverRetries=0;
this.$VideoUploadPostRequestManager_transportRetries=0;};
j.prototype.




isInProgress=function(){'use strict';
return !!this.$VideoUploadPostRequestManager_request;};
j.prototype.

$VideoUploadPostRequestManager_sendRequestAfter=function(k){'use strict';
clearTimeout(this.$VideoUploadPostRequestManager_timer);
this.$VideoUploadPostRequestManager_timer=setTimeout(this.$VideoUploadPostRequestManager_sendRequest.bind(this),k);};
j.prototype.

$VideoUploadPostRequestManager_computeExponentialRetryDelay=function(k,l){'use strict';
return Math.pow(k,l)*1000;};
j.prototype.






$VideoUploadPostRequestManager_handleSuccessResponse=function(k){'use strict';
var l=k.getPayload();
this.inform
('request-finished',

{video_id:l.video_id,
video_asset_id:l.video_asset_id,
container_type:l.container_type,
transport_retries:this.$VideoUploadPostRequestManager_transportRetries,
server_retries:this.$VideoUploadPostRequestManager_serverRetries});



this.clearRequest();};
j.prototype.




$VideoUploadPostRequestManager_handleFailureResponse=function(k){'use strict';
this.inform
('request-failed',

{error_code:k.getError(),
error_description:k.getErrorDescription(),
error_summary:k.getErrorSummary(),
transport_retries:this.$VideoUploadPostRequestManager_transportRetries,
server_retries:this.$VideoUploadPostRequestManager_serverRetries,
error_is_transient:k.isTransient()});



this.clearRequest();};
j.prototype.




$VideoUploadPostRequestManager_handleServerFailureResponse=function(k){'use strict';
this.$VideoUploadPostRequestManager_request=null;
this.$VideoUploadPostRequestManager_transportRetries=0;

if(k.isTransient()&&
this.$VideoUploadPostRequestManager_serverRetries<this.$VideoUploadPostRequestManager_maxServerRetries){


this.$VideoUploadPostRequestManager_serverRetries++;
this.$VideoUploadPostRequestManager_sendRequestAfter
(this.$VideoUploadPostRequestManager_computeExponentialRetryDelay
(this.$VideoUploadPostRequestManager_serverRetryIntervalBase,
this.$VideoUploadPostRequestManager_serverRetries));}else 




this.$VideoUploadPostRequestManager_handleFailureResponse(k);};

j.prototype.




$VideoUploadPostRequestManager_handleTransportFailureResponse=function(k){'use strict';
if(this.$VideoUploadPostRequestManager_maxTransportRetries===0||
this.$VideoUploadPostRequestManager_transportRetries>=this.$VideoUploadPostRequestManager_maxTransportRetries){
this.$VideoUploadPostRequestManager_handleFailureResponse(k);}else{

this.$VideoUploadPostRequestManager_transportRetries++;
this.$VideoUploadPostRequestManager_request=null;
this.$VideoUploadPostRequestManager_sendRequestAfter
(this.$VideoUploadPostRequestManager_computeExponentialRetryDelay
(this.$VideoUploadPostRequestManager_transportRetryIntervalBase,
this.$VideoUploadPostRequestManager_transportRetries));}};






f.exports=j;}),null);

/** js/video/upload/utilities/VideoUploadConnectionMonitor.js */




__d('VideoUploadConnectionMonitor',['ArbiterMixin','Network','VideoUploadFeatureDetector','debounce','mixin'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits





































(j,c('mixin')(c('ArbiterMixin')));i=h&&h.prototype;

function j(){'use strict';
i.constructor.call(this);
this.$VideoUploadConnectionMonitor_seenProgress=false;
this.$VideoUploadConnectionMonitor_subscriptions=[];
this.$VideoUploadConnectionMonitor_active=false;


this.$VideoUploadConnectionMonitor_isOnline=true;

this.$VideoUploadConnectionMonitor_debouncer=c('debounce')(function(){
this.$VideoUploadConnectionMonitor_online(false);}.
bind(this),2000);}
j.prototype.

notifyStart=function(){'use strict';
if(this.$VideoUploadConnectionMonitor_active)







return;


if(this.$VideoUploadConnectionMonitor_subscriptions.length===0){
this.$VideoUploadConnectionMonitor_subscriptions.push
(c('Network').addListener('online',function(){
this.$VideoUploadConnectionMonitor_online(true);}.
bind(this)));


this.$VideoUploadConnectionMonitor_subscriptions.push
(c('Network').addListener('offline',function(){
if(this.$VideoUploadConnectionMonitor_seenProgress){
this.$VideoUploadConnectionMonitor_debouncer();}else{

this.$VideoUploadConnectionMonitor_debouncer.reset();
setTimeout(this.$VideoUploadConnectionMonitor_debouncer,2000);}}.

bind(this)));}



this.$VideoUploadConnectionMonitor_active=true;};
j.prototype.

notifyProgress=function(event){'use strict';
if(!this.$VideoUploadConnectionMonitor_active)







return;


if(!event)






return;








if(c('VideoUploadFeatureDetector').supportsFullProgress()){
this.$VideoUploadConnectionMonitor_seenProgress=true;

if(event.total&&event.loaded===event.total){
this.$VideoUploadConnectionMonitor_debouncer.reset();}else 

this.$VideoUploadConnectionMonitor_debouncer();}};


j.prototype.

notifySuccess=function(){'use strict';
if(!this.$VideoUploadConnectionMonitor_active)







return;


this.reset();
this.$VideoUploadConnectionMonitor_online(true);};
j.prototype.

notifyTransportError=function(){'use strict';
if(!this.$VideoUploadConnectionMonitor_active)







return;


this.$VideoUploadConnectionMonitor_active=false;
this.$VideoUploadConnectionMonitor_online(false);};
j.prototype.

notifyError=function(){'use strict';
if(!this.$VideoUploadConnectionMonitor_active)







return;


this.reset();
this.$VideoUploadConnectionMonitor_online(true);};
j.prototype.

isOnline=function(){'use strict';
return this.$VideoUploadConnectionMonitor_isOnline;};
j.prototype.

reset=function(){'use strict';
while(this.$VideoUploadConnectionMonitor_subscriptions.length)
this.$VideoUploadConnectionMonitor_subscriptions.pop().remove();


this.$VideoUploadConnectionMonitor_debouncer.reset();
this.$VideoUploadConnectionMonitor_active=false;};
j.prototype.

$VideoUploadConnectionMonitor_online=function(k){'use strict';
this.$VideoUploadConnectionMonitor_debouncer.reset();

if(this.$VideoUploadConnectionMonitor_isOnline!==k){
this.$VideoUploadConnectionMonitor_isOnline=k;

if(this.$VideoUploadConnectionMonitor_isOnline){
this.inform('online');}else 

this.inform('offline');}};





f.exports=j;}),null);

/** js/video/upload/request/managers/receive/VideoUploadReceiveRequestManager.js */





__d('VideoUploadReceiveRequestManager',['fbt','ArbiterMixin','VideoUploadConnectionMonitor','VideoUploadRequest','mixin'],(function a(b,c,d,e,f,g,h){var i,j,









k=1363037;i=babelHelpers.inherits

(l,c('mixin')(c('ArbiterMixin')));j=i&&i.prototype;




















function l
(m,
n,
o,
p,
q,
r,
s,
t,
u){
'use strict';
j.constructor.call(this);
this.$VideoUploadReceiveRequestManager_uri=m;
this.$VideoUploadReceiveRequestManager_maxTransportRetries=n;
this.$VideoUploadReceiveRequestManager_maxServerRetries=o;
this.$VideoUploadReceiveRequestManager_responseTimeoutEnabled=p;
this.$VideoUploadReceiveRequestManager_maxResponseTimeoutRetries=q;
this.$VideoUploadReceiveRequestManager_responseTimeoutSpeedVariationFactor=
r;
this.$VideoUploadReceiveRequestManager_transportRetryIntervalBase=s;
this.$VideoUploadReceiveRequestManager_serverRetryIntervalBase=t;
this.$VideoUploadReceiveRequestManager_receiveErrorsForceRetry=u;
this.$VideoUploadReceiveRequestManager_transportRetries=0;
this.$VideoUploadReceiveRequestManager_serverRetries=0;
this.$VideoUploadReceiveRequestManager_responseTimeoutRetries=0;
this.$VideoUploadReceiveRequestManager_requestStartTime=null;
this.$VideoUploadReceiveRequestManager_lastKnownUploadSpeed=null;
this.$VideoUploadReceiveRequestManager_initialChunkSize=0;
this.$VideoUploadReceiveRequestManager_currentStateLog='constructed';


this.$VideoUploadReceiveRequestManager_connectionMonitor=new (c('VideoUploadConnectionMonitor'))();
this.$VideoUploadReceiveRequestManager_connectionMonitor.subscribe
('online',
this.$VideoUploadReceiveRequestManager_handleConnectionOnline.bind(this));

this.$VideoUploadReceiveRequestManager_connectionMonitor.subscribe
('offline',
this.$VideoUploadReceiveRequestManager_handleConnectionOffline.bind(this));}

l.prototype.






sendRequest=function(m){'use strict';
this.$VideoUploadReceiveRequestManager_currentStateLog='sending request';
if(this.$VideoUploadReceiveRequestManager_request){







this.$VideoUploadReceiveRequestManager_currentStateLog='request already in progress';

return;}


this.$VideoUploadReceiveRequestManager_initialChunkSize=
m.getEndOffset()-
m.getStartOffset();
this.$VideoUploadReceiveRequestManager_context=m;
this.$VideoUploadReceiveRequestManager_sendRequest();};
l.prototype.

cancelRequest=function(){'use strict';
if(!this.$VideoUploadReceiveRequestManager_request)
return;


this.$VideoUploadReceiveRequestManager_request.abort();
this.$VideoUploadReceiveRequestManager_reset();};
l.prototype.

appendStateLogData=function(m,n){'use strict';
m[n+'last_log_entry']=this.$VideoUploadReceiveRequestManager_currentStateLog;
m[n+'upload_speed']=this.$VideoUploadReceiveRequestManager_lastKnownUploadSpeed;
m[n+'transport_retries']=this.$VideoUploadReceiveRequestManager_transportRetries;
m[n+'server_retries']=this.$VideoUploadReceiveRequestManager_serverRetries;
m[n+'timeout_retries']=this.$VideoUploadReceiveRequestManager_responseTimeoutRetries;
m[n+'last_timeout_value']=this.$VideoUploadReceiveRequestManager_lastUsedTimeoutValue;
m[n+'last_request_start_time']=this.$VideoUploadReceiveRequestManager_requestStartTime;
m[n+'pending_request']=this.$VideoUploadReceiveRequestManager_request!=null;
m[n+'pending_timer']=this.$VideoUploadReceiveRequestManager_timer!=null;
m[n+'cached_chunk']=this.$VideoUploadReceiveRequestManager_chunk!=null;

if(this.$VideoUploadReceiveRequestManager_context!=null){
m[n+'start_offset']=this.$VideoUploadReceiveRequestManager_context.getStartOffset();
m[n+'end_offset']=this.$VideoUploadReceiveRequestManager_context.getEndOffset();
m[n+'partition_start_offset']=
this.$VideoUploadReceiveRequestManager_context.getPartitionStartOffset();
m[n+'partition_end_offset']=
this.$VideoUploadReceiveRequestManager_context.getPartitionEndOffset();}


if(this.$VideoUploadReceiveRequestManager_connectionMonitor!=null)
m[n+'connection_monitor_online']=
this.$VideoUploadReceiveRequestManager_connectionMonitor.isOnline();};

l.prototype.



$VideoUploadReceiveRequestManager_reset=function(){'use strict';
this.$VideoUploadReceiveRequestManager_request=null;
this.$VideoUploadReceiveRequestManager_chunk=null;
this.$VideoUploadReceiveRequestManager_transportRetries=0;
this.$VideoUploadReceiveRequestManager_serverRetries=0;
this.$VideoUploadReceiveRequestManager_responseTimeoutRetries=0;
this.$VideoUploadReceiveRequestManager_requestStartTime=null;
this.$VideoUploadReceiveRequestManager_lastKnownUploadSpeed=null;
this.$VideoUploadReceiveRequestManager_initialChunkSize=0;

this.$VideoUploadReceiveRequestManager_context.reset();
this.$VideoUploadReceiveRequestManager_connectionMonitor.reset();

clearTimeout(this.$VideoUploadReceiveRequestManager_timer);
this.$VideoUploadReceiveRequestManager_timer=null;};
l.prototype.

$VideoUploadReceiveRequestManager_sendRequest=function(m){'use strict';
clearTimeout(this.$VideoUploadReceiveRequestManager_timer);
this.$VideoUploadReceiveRequestManager_timer=null;



if(this.$VideoUploadReceiveRequestManager_context.getSupportsChunking()&&
this.$VideoUploadReceiveRequestManager_context.getStartOffset()>=
this.$VideoUploadReceiveRequestManager_context.getPartitionEndOffset()){
if(!m){










this.inform
('request-finished',

{start_offset:this.$VideoUploadReceiveRequestManager_context.getEndOffset()-1,
end_offset:this.$VideoUploadReceiveRequestManager_context.getEndOffset(),
transport_retries:this.$VideoUploadReceiveRequestManager_transportRetries,
server_retries:this.$VideoUploadReceiveRequestManager_serverRetries,
upload_speed:this.$VideoUploadReceiveRequestManager_lastKnownUploadSpeed});


this.$VideoUploadReceiveRequestManager_currentStateLog='request finished - notified';}else 

this.$VideoUploadReceiveRequestManager_currentStateLog='request finished - not notified';

return;}


this.$VideoUploadReceiveRequestManager_request=this.__getVideoUploadRequest(this.$VideoUploadReceiveRequestManager_uri).
setAllowCrossOrigin(true).
setData(this.__createRequestData(this.$VideoUploadReceiveRequestManager_context)).
setWaterfallID(this.$VideoUploadReceiveRequestManager_context.getWaterfallID()).
setSuccessHandler(this.__handleSuccessResponse.bind(this)).
setErrorHandler(this.__handleServerFailureResponse.bind(this)).
setTransportErrorHandler(this.$VideoUploadReceiveRequestManager_handleTransportFailureResponse.bind(this)).
setUploadProgressHandler(this.$VideoUploadReceiveRequestManager_handleProgressEvent.bind(this));

this.$VideoUploadReceiveRequestManager_requestStartTime=Date.now();

if(this.$VideoUploadReceiveRequestManager_context.getSupportsChunking()){
if(this.$VideoUploadReceiveRequestManager_responseTimeoutEnabled){
var n=
this.$VideoUploadReceiveRequestManager_computeResponseTimeout
(this.$VideoUploadReceiveRequestManager_context.getEndOffset()-this.$VideoUploadReceiveRequestManager_context.getStartOffset(),
this.$VideoUploadReceiveRequestManager_lastKnownUploadSpeed);


this.$VideoUploadReceiveRequestManager_request.setTimeoutHandler
(n,
this.__handleResponseTimeout.bind(this));

this.$VideoUploadReceiveRequestManager_currentStateLog='sending chunk with timeout = '+
n;
this.$VideoUploadReceiveRequestManager_lastUsedTimeoutValue=n;}else 

this.$VideoUploadReceiveRequestManager_currentStateLog='sending chunk without timeout';

this.$VideoUploadReceiveRequestManager_request.sendChunk(this.$VideoUploadReceiveRequestManager_createChunk());}else{

this.$VideoUploadReceiveRequestManager_currentStateLog='sending file';
this.$VideoUploadReceiveRequestManager_request.sendFile(this.$VideoUploadReceiveRequestManager_context.getFile().getFileInput());}


this.$VideoUploadReceiveRequestManager_connectionMonitor.notifyStart();

this.inform
('request-started',

{start_offset:this.$VideoUploadReceiveRequestManager_context.getStartOffset(),
end_offset:this.$VideoUploadReceiveRequestManager_context.getEndOffset(),
transport_retries:this.$VideoUploadReceiveRequestManager_transportRetries,
server_retries:this.$VideoUploadReceiveRequestManager_serverRetries,
upload_speed:this.$VideoUploadReceiveRequestManager_lastKnownUploadSpeed});};


l.prototype.

__getVideoUploadRequest=function(m){'use strict';
return new (c('VideoUploadRequest'))(m);};
l.prototype.

$VideoUploadReceiveRequestManager_sendRequestAfter=function(m){'use strict';
this.$VideoUploadReceiveRequestManager_currentStateLog='setting request to send after'+m;
clearTimeout(this.$VideoUploadReceiveRequestManager_timer);
this.$VideoUploadReceiveRequestManager_timer=setTimeout(this.$VideoUploadReceiveRequestManager_sendRequest.bind(this),m);};
l.prototype.

$VideoUploadReceiveRequestManager_createChunk=function(){'use strict';

if(this.$VideoUploadReceiveRequestManager_chunk)
return this.$VideoUploadReceiveRequestManager_chunk;



this.$VideoUploadReceiveRequestManager_chunk=this.$VideoUploadReceiveRequestManager_context.getFile().getChunk
(this.$VideoUploadReceiveRequestManager_context.getStartOffset(),
this.$VideoUploadReceiveRequestManager_context.getEndOffset());


return this.$VideoUploadReceiveRequestManager_chunk;};
l.prototype.

__createRequestData=function(m){'use strict';

return {video_id:m.getVideoID(),
start_offset:m.getStartOffset(),
source:m.getSource(),
target_id:m.getTargetID(),
waterfall_id:m.getWaterfallID(),
composer_entry_point_ref:

m.getComposerEntryPointRef&&m.getComposerEntryPointRef(),
supports_chunking:m.getSupportsChunking(),
upload_speed:this.$VideoUploadReceiveRequestManager_lastKnownUploadSpeed,
partition_start_offset:m.getPartitionStartOffset(),
partition_end_offset:m.getPartitionEndOffset()};};

l.prototype.

__handleSuccessResponse=function(m){'use strict';
this.$VideoUploadReceiveRequestManager_currentStateLog='success response received';
var n=Date.now()-this.$VideoUploadReceiveRequestManager_requestStartTime;
n=n===0?1:n;

var o=m.getPayload();

if(o.start_offset===this.$VideoUploadReceiveRequestManager_context.getEndOffset()){
var p=this.$VideoUploadReceiveRequestManager_context.getEndOffset()-
this.$VideoUploadReceiveRequestManager_context.getStartOffset();
this.$VideoUploadReceiveRequestManager_lastKnownUploadSpeed=
Math.floor(p/n);}else 

this.$VideoUploadReceiveRequestManager_lastKnownUploadSpeed=null;


this.$VideoUploadReceiveRequestManager_connectionMonitor.notifySuccess();

this.inform
('request-finished',

{start_offset:this.$VideoUploadReceiveRequestManager_context.getStartOffset(),
end_offset:this.$VideoUploadReceiveRequestManager_context.getEndOffset(),
transport_retries:this.$VideoUploadReceiveRequestManager_transportRetries,
server_retries:this.$VideoUploadReceiveRequestManager_serverRetries,
upload_speed:this.$VideoUploadReceiveRequestManager_lastKnownUploadSpeed});



this.$VideoUploadReceiveRequestManager_context.setStartOffset(o.start_offset);
this.$VideoUploadReceiveRequestManager_context.setEndOffset(o.end_offset);
this.$VideoUploadReceiveRequestManager_context.setLastKnownUploadSpeed(this.$VideoUploadReceiveRequestManager_lastKnownUploadSpeed);


this.$VideoUploadReceiveRequestManager_request=null;
this.$VideoUploadReceiveRequestManager_chunk=null;
this.$VideoUploadReceiveRequestManager_transportRetries=0;
this.$VideoUploadReceiveRequestManager_serverRetries=0;
this.$VideoUploadReceiveRequestManager_responseTimeoutRetries=0;


if(this.$VideoUploadReceiveRequestManager_context.getSupportsChunking())
this.$VideoUploadReceiveRequestManager_sendRequest(true);};

l.prototype.

__handleServerFailureResponse=function(m){'use strict';
this.$VideoUploadReceiveRequestManager_currentStateLog='failure response received';
this.$VideoUploadReceiveRequestManager_request=null;
this.$VideoUploadReceiveRequestManager_transportRetries=0;
this.$VideoUploadReceiveRequestManager_lastKnownUploadSpeed=null;
this.$VideoUploadReceiveRequestManager_responseTimeoutRetries=0;

this.$VideoUploadReceiveRequestManager_connectionMonitor.notifyError();

if(this.__hasInvalidStartOffsetAndHasRetries(m.getError())){


this.$VideoUploadReceiveRequestManager_serverRetries++;
var n=m.getPayload();
this.$VideoUploadReceiveRequestManager_currentStateLog=
'invalid offset response received start='+n.start_offset+
' end='+n.end_offset;

if(this.$VideoUploadReceiveRequestManager_context.getStartOffset()!=n.start_offset||
this.$VideoUploadReceiveRequestManager_context.getEndOffset()!=n.end_offset){


this.$VideoUploadReceiveRequestManager_context.setStartOffset(n.start_offset);
this.$VideoUploadReceiveRequestManager_context.setEndOffset(n.end_offset);
this.$VideoUploadReceiveRequestManager_chunk=null;}


this.$VideoUploadReceiveRequestManager_sendRequest();}else
if((m.isTransient()||this.$VideoUploadReceiveRequestManager_receiveErrorsForceRetry)&&
this.$VideoUploadReceiveRequestManager_serverRetries<this.$VideoUploadReceiveRequestManager_maxServerRetries){
this.$VideoUploadReceiveRequestManager_currentStateLog='transient server error';


this.$VideoUploadReceiveRequestManager_serverRetries++;
this.$VideoUploadReceiveRequestManager_sendRequestAfter
(this.$VideoUploadReceiveRequestManager_computeExponentialRetryDelay
(this.$VideoUploadReceiveRequestManager_serverRetryIntervalBase,
this.$VideoUploadReceiveRequestManager_serverRetries));}else 




this.$VideoUploadReceiveRequestManager_handleFailureResponse(m);};

l.prototype.

__handleResponseTimeout=function(m){'use strict';
this.inform
('request-timeout',

{start_offset:this.$VideoUploadReceiveRequestManager_context.getStartOffset(),
end_offset:this.$VideoUploadReceiveRequestManager_context.getEndOffset(),
transport_retries:this.$VideoUploadReceiveRequestManager_transportRetries,
server_retries:this.$VideoUploadReceiveRequestManager_serverRetries,
timeout_retries:this.$VideoUploadReceiveRequestManager_responseTimeoutRetries,
upload_speed:this.$VideoUploadReceiveRequestManager_lastKnownUploadSpeed});



this.$VideoUploadReceiveRequestManager_request.abort();
this.$VideoUploadReceiveRequestManager_request=null;
this.$VideoUploadReceiveRequestManager_lastKnownUploadSpeed=null;


this.$VideoUploadReceiveRequestManager_connectionMonitor.notifyTransportError();

if(++this.$VideoUploadReceiveRequestManager_responseTimeoutRetries<=this.$VideoUploadReceiveRequestManager_maxResponseTimeoutRetries){
var n=
this.$VideoUploadReceiveRequestManager_context.getEndOffset()-this.$VideoUploadReceiveRequestManager_context.getStartOffset();
n=Math.floor(n/2);
n=Math.max(n,this.$VideoUploadReceiveRequestManager_initialChunkSize);
var o=this.$VideoUploadReceiveRequestManager_context.getEndOffset();
o=
Math.min
(o,
this.$VideoUploadReceiveRequestManager_context.getStartOffset()+n);

this.$VideoUploadReceiveRequestManager_context.setEndOffset(o);
this.$VideoUploadReceiveRequestManager_chunk=null;

this.$VideoUploadReceiveRequestManager_currentStateLog='resending after timeout with chunksize='+
n;

this.$VideoUploadReceiveRequestManager_sendRequest();}else 



this.$VideoUploadReceiveRequestManager_handleFailureError

({error_code:1006,
error_description:h._(["Your browser appears to be offline. Please check your internet connection and try again.","b5d43882be1fd7f064bc74361edee38a"]),




error_summary:h._(["No Network Connection","fbc4152c44fd4245d426a5f8d177cb49"]),




error_is_transient:true});};



l.prototype.


__hasInvalidStartOffsetAndHasRetries=function(m){'use strict';
return m===k&&
this.$VideoUploadReceiveRequestManager_serverRetries<this.$VideoUploadReceiveRequestManager_maxServerRetries;};
l.prototype.

$VideoUploadReceiveRequestManager_handleTransportFailureResponse=function(m){'use strict';
this.$VideoUploadReceiveRequestManager_connectionMonitor.notifyTransportError();
this.$VideoUploadReceiveRequestManager_lastKnownUploadSpeed=null;
this.$VideoUploadReceiveRequestManager_responseTimeoutRetries=0;

if(this.$VideoUploadReceiveRequestManager_transportRetries<this.$VideoUploadReceiveRequestManager_maxTransportRetries){


this.$VideoUploadReceiveRequestManager_currentStateLog='resending after transport failure';
this.$VideoUploadReceiveRequestManager_transportRetries++;
this.$VideoUploadReceiveRequestManager_request=null;
this.$VideoUploadReceiveRequestManager_sendRequestAfter
(this.$VideoUploadReceiveRequestManager_computeExponentialRetryDelay
(this.$VideoUploadReceiveRequestManager_transportRetryIntervalBase,
this.$VideoUploadReceiveRequestManager_transportRetries));}else 




this.$VideoUploadReceiveRequestManager_handleFailureResponse(m);};

l.prototype.

$VideoUploadReceiveRequestManager_handleFailureResponse=function(m){'use strict';
this.$VideoUploadReceiveRequestManager_handleFailureError

({error_code:m.getError(),
error_description:m.getErrorDescription(),
error_summary:m.getErrorSummary(),
error_is_transient:m.isTransient()});};


l.prototype.


$VideoUploadReceiveRequestManager_handleFailureError=function(m){'use strict';
this.$VideoUploadReceiveRequestManager_currentStateLog='handling failure error';
this.inform
('request-failed',
m);


this.$VideoUploadReceiveRequestManager_reset();};
l.prototype.

$VideoUploadReceiveRequestManager_handleProgressEvent=function(event){'use strict';
this.$VideoUploadReceiveRequestManager_connectionMonitor.notifyProgress(event);

this.inform
('request-progressed',

{file_size:this.$VideoUploadReceiveRequestManager_context.getFile().getSize(),
start_offset:this.$VideoUploadReceiveRequestManager_context.getStartOffset(),
sent_bytes:event.loaded});};


l.prototype.

$VideoUploadReceiveRequestManager_handleConnectionOnline=function(event){'use strict';
this.inform('online');







this.$VideoUploadReceiveRequestManager_transportRetries=0;
this.$VideoUploadReceiveRequestManager_responseTimeoutRetries=0;

if(this.$VideoUploadReceiveRequestManager_timer)
this.$VideoUploadReceiveRequestManager_sendRequest();};

l.prototype.

$VideoUploadReceiveRequestManager_handleConnectionOffline=function(event){'use strict';
this.inform('offline');};
l.prototype.








$VideoUploadReceiveRequestManager_computeExponentialRetryDelay=function(m,n){'use strict';
return Math.pow(m,n)*1000;};
l.prototype.

$VideoUploadReceiveRequestManager_computeResponseTimeout=
function(m,
n){
'use strict';
var o;

if(n>0){
o=n;}else 


o=10;



var p=
Math.floor
(m/o*
this.$VideoUploadReceiveRequestManager_responseTimeoutSpeedVariationFactor/
100);





return Math.max(p,30000);};



f.exports=l;}),null);

/** js/video/upload/request/managers/start/VideoUploadStartRequestManager.js */





__d('VideoUploadStartRequestManager',['ArbiterMixin','VideoUploadRequest','FileHasher','performanceNow','mixin','Assert'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits








(j,c('mixin')(c('ArbiterMixin')));i=h&&h.prototype;
















function j
(k,
l,
m,
n,
o,
p,
q){
'use strict';
i.constructor.call(this);
this.$VideoUploadStartRequestManager_uri=k;
this.$VideoUploadStartRequestManager_maxTransportRetries=l;
this.$VideoUploadStartRequestManager_transportRetryIntervalBase=m;
this.$VideoUploadStartRequestManager_transportRetries=0;
this.$VideoUploadStartRequestManager_skipUploadEnabled=n;
this.$VideoUploadStartRequestManager_skipUploadFileSizeLimit=o;
this.$VideoUploadStartRequestManager_maxServerRetries=p;
this.$VideoUploadStartRequestManager_serverRetryIntervalBase=q;
this.$VideoUploadStartRequestManager_serverRetries=0;}
j.prototype.






getRequest=function(){'use strict';
return this.$VideoUploadStartRequestManager_request;};
j.prototype.





sendRequest=function(k){'use strict';
if(this.$VideoUploadStartRequestManager_fileHasher||this.$VideoUploadStartRequestManager_request)








return;


this.$VideoUploadStartRequestManager_context=k;

if(this.$VideoUploadStartRequestManager_skipUploadEnabled&&
this.$VideoUploadStartRequestManager_context.getFile().getFile()&&
this.$VideoUploadStartRequestManager_context.getFile().getFile().size<
this.$VideoUploadStartRequestManager_skipUploadFileSizeLimit&&
c('FileHasher').isSupported()){

this.$VideoUploadStartRequestManager_hashTime=c('performanceNow')();
this.$VideoUploadStartRequestManager_fileHasher=new (c('FileHasher'))();
this.$VideoUploadStartRequestManager_fileHasher.hash
(this.$VideoUploadStartRequestManager_context.getFile().getFile(),
function(l){
this.$VideoUploadStartRequestManager_hashTime=c('performanceNow')()-this.$VideoUploadStartRequestManager_hashTime;
this.$VideoUploadStartRequestManager_originalFileHash=l.hash;
this.$VideoUploadStartRequestManager_fileHasher.destroy();
this.$VideoUploadStartRequestManager_fileHasher=null;
if(!l.hash)
this.$VideoUploadStartRequestManager_hashException=l.exception;

this.$VideoUploadStartRequestManager_continueSendRequest();}.
bind(this));}else 


this.$VideoUploadStartRequestManager_continueSendRequest();};

j.prototype.

$VideoUploadStartRequestManager_continueSendRequest=function(){'use strict';
this.$VideoUploadStartRequestManager_sendRequest();





this.inform
('request-started',

{hash_time:this.$VideoUploadStartRequestManager_hashTime,
hash_exception:this.$VideoUploadStartRequestManager_hashException});};


j.prototype.

$VideoUploadStartRequestManager_sendRequest=function(){'use strict';
clearTimeout(this.$VideoUploadStartRequestManager_timer);
this.$VideoUploadStartRequestManager_timer=null;

this.$VideoUploadStartRequestManager_request=this.__getVideoUploadRequest(this.$VideoUploadStartRequestManager_uri).
setAllowCrossOrigin(true).
setData(this.__getDataToSend(this.$VideoUploadStartRequestManager_context,this.$VideoUploadStartRequestManager_originalFileHash)).
setWaterfallID(this.$VideoUploadStartRequestManager_context.getWaterfallID()).
setSuccessHandler(this.$VideoUploadStartRequestManager_handleSuccessResponse.bind(this)).
setErrorHandler(this.$VideoUploadStartRequestManager_handleServerFailureResponse.bind(this)).
setTransportErrorHandler
(this.$VideoUploadStartRequestManager_handleTransportFailureResponse.bind(this));


this.$VideoUploadStartRequestManager_request.send();};
j.prototype.

__getVideoUploadRequest=function(k){'use strict';
return new (c('VideoUploadRequest'))(k);};
j.prototype.

__getDataToSend=function(k,l){'use strict';

return {file_size:k.getFile().getSize(),
file_extension:k.getFile().getExtension(),
target_id:k.getTargetID(),
source:k.getSource(),
waterfall_id:k.getWaterfallID(),
composer_entry_point_ref:

k.getComposerEntryPointRef&&k.getComposerEntryPointRef(),
supports_chunking:k.getSupportsChunking(),
supports_file_api:k.getSupportsFileAPI(),
partition_start_offset:k.getPartitionStartOffset(),
partition_end_offset:k.getPartitionEndOffset(),
creator_product:k.getCreatorProduct(),
original_file_hash:l,
spherical:k.getIsSphericalVideo(),
spherical_metadata:k.getSphericalMetadata()};};

j.prototype.

cancelRequest=function(){'use strict';
this.$VideoUploadStartRequestManager_reset();};
j.prototype.

$VideoUploadStartRequestManager_sendRequestAfter=function(k){'use strict';
clearTimeout(this.$VideoUploadStartRequestManager_timer);
this.$VideoUploadStartRequestManager_timer=setTimeout(this.$VideoUploadStartRequestManager_sendRequest.bind(this),k);};
j.prototype.



$VideoUploadStartRequestManager_reset=function(){'use strict';
if(this.$VideoUploadStartRequestManager_fileHasher){
this.$VideoUploadStartRequestManager_fileHasher.destroy();
this.$VideoUploadStartRequestManager_fileHasher=null;}


if(this.$VideoUploadStartRequestManager_request){
this.$VideoUploadStartRequestManager_request.abort();
this.$VideoUploadStartRequestManager_request=null;}


this.$VideoUploadStartRequestManager_serverRetries=0;
this.$VideoUploadStartRequestManager_transportRetries=0;
this.$VideoUploadStartRequestManager_context=null;
clearTimeout(this.$VideoUploadStartRequestManager_timer);
this.$VideoUploadStartRequestManager_timer=null;};
j.prototype.








$VideoUploadStartRequestManager_computeExponentialRetryDelay=function(k,l){'use strict';
return Math.pow(k,l)*1000;};
j.prototype.




$VideoUploadStartRequestManager_handleSuccessResponse=function(k){'use strict';
var l=k.getPayload();
this.inform
('request-finished',
this.__getSuccessInformData(l));


this.$VideoUploadStartRequestManager_request=null;
c('Assert').isTrue
(this.$VideoUploadStartRequestManager_fileHasher==null,
'Unexpected: if file hasher is not null, clean up is required.');};

j.prototype.

__getSuccessInformData=function(k){'use strict';

return {video_id:k.video_id,
start_offset:k.start_offset,
end_offset:k.end_offset,
transport_retries:this.$VideoUploadStartRequestManager_transportRetries,
server_retries:this.$VideoUploadStartRequestManager_serverRetries,
skip_upload:k.skip_upload,
hash_time:this.$VideoUploadStartRequestManager_hashTime};};

j.prototype.




$VideoUploadStartRequestManager_handleFailureResponse=function(k){'use strict';
this.inform
('request-failed',
this.$VideoUploadStartRequestManager_getFailureInformData(k));


this.$VideoUploadStartRequestManager_request=null;
c('Assert').isTrue
(this.$VideoUploadStartRequestManager_fileHasher==null,
'Unexpected: if file hasher is not null, clean up is required.');};

j.prototype.




$VideoUploadStartRequestManager_handleServerFailureResponse=function(k){'use strict';
this.$VideoUploadStartRequestManager_request=null;
this.$VideoUploadStartRequestManager_transportRetries=0;

if(k.isTransient()&&
this.$VideoUploadStartRequestManager_serverRetries<this.$VideoUploadStartRequestManager_maxServerRetries){
this.$VideoUploadStartRequestManager_serverRetries++;


this.$VideoUploadStartRequestManager_sendRequestAfter
(this.$VideoUploadStartRequestManager_computeExponentialRetryDelay
(this.$VideoUploadStartRequestManager_serverRetryIntervalBase,
this.$VideoUploadStartRequestManager_serverRetries));}else 




this.$VideoUploadStartRequestManager_handleFailureResponse(k);};

j.prototype.




$VideoUploadStartRequestManager_handleTransportFailureResponse=function(k){'use strict';
if(this.$VideoUploadStartRequestManager_maxTransportRetries===0||
this.$VideoUploadStartRequestManager_transportRetries>=this.$VideoUploadStartRequestManager_maxTransportRetries){
this.$VideoUploadStartRequestManager_handleFailureResponse(k);}else{

this.$VideoUploadStartRequestManager_transportRetries++;
this.$VideoUploadStartRequestManager_request=null;
this.$VideoUploadStartRequestManager_sendRequestAfter
(this.$VideoUploadStartRequestManager_computeExponentialRetryDelay
(this.$VideoUploadStartRequestManager_transportRetryIntervalBase,
this.$VideoUploadStartRequestManager_transportRetries));}};



j.prototype.

$VideoUploadStartRequestManager_getFailureInformData=function(k){'use strict';

return {error_code:k.getError(),
error_description:k.getErrorDescription(),
error_summary:k.getErrorSummary(),
transport_retries:this.$VideoUploadStartRequestManager_transportRetries,
server_retries:this.$VideoUploadStartRequestManager_serverRetries,
error_is_transient:k.isTransient()};};




f.exports=j;}),null);

/** js/video/upload/utilities/VideoUploadMetadataParser.js */





__d('VideoUploadMetadataParser',['VideoUploadFeatureDetector','VideoUploadSphericalLogger','fileSlice'],(function a(b,c,d,e,f,g){








var h=4,
i=4,
j=5242880,
k=24,
l=88,
m=20,
n=16,
o=4,
p=84,
q=20,
r=62,
s=
[255,204,130,99,248,85,74,147,
136,20,88,122,2,82,31,221],

t=16,
u=36,
v=1,
w=1,
x=4,
y=1,
z=1,
aa=4,
ba=4;











function ca(da,ea){'use strict';
this.$VideoUploadMetadataParser_videoFile=da;
this.$VideoUploadMetadataParser_metadataHandler=ea;}
ca.prototype.

getHandler=function(){'use strict';
return this.$VideoUploadMetadataParser_metadataHandler;};
ca.prototype.

parse=function(){'use strict';
if(!c('VideoUploadFeatureDetector').supportsFileReading()){
this.$VideoUploadMetadataParser_metadataHandler(null);
return;}


switch(this.$VideoUploadMetadataParser_videoFile.getExtension()){

case 'mp4':
case 'mov':
case 'm4v':
case '3gp':
case '3g2':
c('VideoUploadSphericalLogger').setFileExtension
(this.$VideoUploadMetadataParser_videoFile.getExtension());

break;

default:this.$VideoUploadMetadataParser_metadataHandler(null);
return;}



this.$VideoUploadMetadataParser_parseImpl
(0,
Math.min(j,this.$VideoUploadMetadataParser_videoFile.getSize()),
null);};

ca.prototype.






$VideoUploadMetadataParser_parseImpl=function(da,ea,fa){'use strict';
var ga=new FileReader();
ga.onload=function(event){

try{var ja=this.$VideoUploadMetadataParser_parseAtoms
(new DataView(ga.result),
0,
ea-da,
da,
fa);

if(ja.completed){
ja=this.$VideoUploadMetadataParser_packageParseResult(ja);
this.$VideoUploadMetadataParser_metadataHandler(ja);}else 

this.$VideoUploadMetadataParser_parseImpl
(da+ja.nextOffset,
Math.min
(this.$VideoUploadMetadataParser_videoFile.getSize(),
da+ja.nextOffset+j),

ja);}catch(


ia){
this.$VideoUploadMetadataParser_metadataHandler(null);}}.

bind(this);

var ha=this.$VideoUploadMetadataParser_videoFile.getFile();
ga.readAsArrayBuffer(c('fileSlice').call(ha,da,ea));};
ca.prototype.






$VideoUploadMetadataParser_readStringFromChars=function(da,ea,fa){'use strict';
var ga=[];
for(var ha=0;ha<fa;ha++)
ga.push(String.fromCharCode(da.getUint8(ea+ha)));

return ga.join('');};
ca.prototype.








$VideoUploadMetadataParser_parseSA3D=function(da,ea,fa){'use strict';
var ga=
{version:null,
ambisonic_type:null,
ambisonic_order:null,
ambisonic_channel_ordering:null,
ambisonic_normalization:null,
num_channels:null,
channel_maps:[]},


ha=0;
ga.version=da.getUint8(ea+ha);
ha=v;
ga.ambisonic_type=da.getUint8(ea+ha);
ha+=w;
ga.ambisonic_order=da.getUint32(ea+ha);
ha+=x;
ga.ambisonic_channel_ordering=
da.getUint8(ea+ha);
ha+=y;
ga.ambisonic_normalization=da.getUint8(ea+ha);
ha+=z;
ga.num_channels=da.getUint32(ea+ha);
ha+=aa;
for(var ia=0;ia<ga.num_channels;ia++){
ga.channel_maps.push(da.getUint32(ea+ha));
ha+=ba;
if(ha>fa)
return null;}


return JSON.stringify(ga);};
ca.prototype.










$VideoUploadMetadataParser_parseSphericalMetadata=function(da,ea,fa,ga){'use strict';

try{var ia=i+h;
if(ia+s.length<fa&&
this.$VideoUploadMetadataParser_checkIfSphericalUuid(da,ea+ia)){
ia+=s.length;
if(ia<fa){
var ja=this.$VideoUploadMetadataParser_readStringFromChars
(da,
ea+ia,
fa-ia),

ka;
if(window.DOMParser){
var la=new DOMParser();
ka=la.parseFromString(ja,'text/xml');}else{

ka=new window.ActiveXObject('Microsoft.XMLDOM');
ka.async='false';
ka.loadXML(ja);}


var ma=ka.
getElementsByTagNameNS('*','Spherical')[0].
childNodes[0].
nodeValue;

if(ma.toLowerCase()==='true'){
var na=ka.getElementsByTagNameNS('*','StereoMode')[0],
oa=
na?na.childNodes[0].nodeValue:undefined;
ga.sphericalMetadata.spherical=true;
ga.sphericalMetadata.originalSphericalMetadata=
{spherical:true,
stereoMode:oa};

ga.sphericalMetadata.sphericalMetadataXml=ja;}}}}catch(



ha){
}};
ca.prototype.





$VideoUploadMetadataParser_checkIfSphericalUuid=function(da,ea){'use strict';
for(var fa=0;fa<s.length;fa++)
if(da.getUint8(ea+fa)!==s[fa])
return false;


return true;};
ca.prototype.








$VideoUploadMetadataParser_parseAtoms=function(da,ea,fa,ga,ha){'use strict';
if(!ha)
ha=
{widths:[],
heights:[],
streamTypes:[],
streamDurations:[],
spherical:false,
sphericalMetadata:
{originalSphericalMetadata:{},
sphericalMetadataXml:null,
fbSpatialAudioMetadataXml:null,
ytSa3dMetadataJson:null},

isParsingInMediaInformationAtom:false,
endOfMediaInformationAtomOffset:null};



var ia=null;
while(ea<fa){
var ja=da.getUint32(ea),
ka=this.$VideoUploadMetadataParser_readStringFromChars
(da,
ea+h,
i);



if(ea+ja>fa){
ha.completed=false;
ha.nextOffset=ea;



if(ja>fa)
ha.nextOffset+=ja;

return ha;}


if(ha.isParsingInMediaInformationAtom&&
ea>=ha.endOfMediaInformationAtomOffset){

ha.isParsingInMediaInformationAtom=false;
ha.endOfMediaInformationAtomOffset=null;}





if(ea+ga===0&&ka!=='ftyp')
throw new Error('No ftyp atom');




if(ja===0)
throw new Error('len is 0');


var la=function xa(){
var ya=da.getUint32(ea+m),
za=da.getUint32(ea+k);
return za/ya;};


switch(ka){
case 'moov':
case 'trak':
case 'mdia':
case 'stbl':


ea+=h+i;
break;
case 'mvhd':
ha.duration=la();
ea+=ja;
break;
case 'tkhd':
var ma=da.getUint16(ea+p),
na=da.getUint16(ea+l);
ha.widths.push(ma);
ha.heights.push(na);
ia=da.getUint32(ea+q);
ea+=ja;
break;
case 'hdlr':
if(!ha.isParsingInMediaInformationAtom){
var oa=this.$VideoUploadMetadataParser_readStringFromChars
(da,
ea+n,
o);

switch(oa){
case 'vide':
oa='video';
break;
case 'soun':
oa='audio';
break;
case 'subt':
oa='subtitle';
break;

default:oa='data';}

ha.streamTypes.push(oa);}

ea+=ja;
break;
case 'mdhd':
ha.streamDurations.push(la());
ea+=ja;
break;
case 'uuid':
this.$VideoUploadMetadataParser_parseSphericalMetadata
(da,
ea,
ja,
ha);

ea+=ja;
break;
case 'meta':
if(ia===null){
ea+=ja;
break;}




var pa=
h+i+r,
qa=this.$VideoUploadMetadataParser_readStringFromChars
(da,
ea+pa,
ja-pa);


if(qa!==null){
if(ha.sphericalMetadata.fbSpatialAudioMetadataXml===null)
ha.sphericalMetadata.fbSpatialAudioMetadataXml=
'<fb360_spatial_audio>';

ha.sphericalMetadata.fbSpatialAudioMetadataXml+='\n              <track id="'+
ia.toString()+'">\n                '+
qa+'\n              </track>\n            ';}




ea+=ja;
break;
case 'minf':
var ra=this.$VideoUploadMetadataParser_readStringFromChars
(da,
ea+2*h+i,
i);



if(ra==='smhd'){
ea+=h+i;




ha.isParsingInMediaInformationAtom=true;
ha.endOfMediaInformationAtomOffset=ea+ja;}else 

ea+=ja;

break;
case 'stsd':
var sa=this.$VideoUploadMetadataParser_readStringFromChars
(da,
ea+i+t,
i);

if(sa==='mp4a'){
ea+=t;}else 

ea+=ja;

break;
case 'mp4a':
var ta=da.getUint32(ea+u),
ua=da.getUint32(ea+u+ta),
va=this.$VideoUploadMetadataParser_readStringFromChars
(da,
ea+u+ta+h,
i);




if(va==='SA3D'){
var wa=this.$VideoUploadMetadataParser_parseSA3D
(da,
ea+u+ta+h+
i,
ua);


if(wa!==null)

if(ha.sphericalMetadata.ytSa3dMetadataJson===null)
ha.sphericalMetadata.ytSa3dMetadataJson=
wa;}



ea+=ja;
break;

default:ea+=ja;}}



ha.completed=true;

if(ha.sphericalMetadata.fbSpatialAudioMetadataXml)
ha.sphericalMetadata.fbSpatialAudioMetadataXml+=
'</fb360_spatial_audio>';


return ha;};
ca.prototype.




$VideoUploadMetadataParser_packageParseResult=function(da){'use strict';
var ea={streams:{},format:{},metadata:{}},




fa=da.widths.length,
ga=da.heights.length,
ha=da.streamTypes.length,
ia=da.streamDurations.length;
if(fa!==ga||
fa!==ha||
fa!==ia)
return null;


for(var ja=0;ja<fa;ja++){
var ka=
{width:da.widths[ja],
height:da.heights[ja],
duration:da.streamDurations[ja],
type:da.streamTypes[ja]};


if(ka.type==='video'){
var la=ka.width*ka.height,
ma=ea.streams.primaryVideo;


if(!ma||ma.width*
ma.height>la)
ea.streams.primaryVideo=ka;}else

if(ka.type==='audio'){
var na=ea.streams.primaryAudio;


if(!na||na.duration<
ka.duration)
ea.streams.primaryAudio=ka;}}




ea.format.duration=da.duration;
ea.format.isSpherical=da.sphericalMetadata.spherical;
if(da.sphericalMetadata.spherical){
ea.metadata.originalSphericalMetadata=
da.sphericalMetadata.originalSphericalMetadata;
ea.metadata.sphericalMetadataXml=
da.sphericalMetadata.sphericalMetadataXml;
ea.metadata.fbSpatialAudioMetadataXml=
da.sphericalMetadata.fbSpatialAudioMetadataXml;
ea.metadata.ytSa3dMetadataJson=
da.sphericalMetadata.ytSa3dMetadataJson;}

c('VideoUploadSphericalLogger').setHasSphericalMetadata
(da.sphericalMetadata.spherical);


return ea;};




f.exports=ca;}),null);

/** js/video/upload/session/VideoUploadSession.js */





__d('VideoUploadSession',['ArbiterMixin','AsyncRequest','VideoUploadCrashMonitor','VideoUploadFeatureDetector','VideoUploadFileValidator','VideoUploadLogger','VideoUploadMetadataParser','VideoUploadPostRequestManager','VideoUploadReceiveRequestManager','VideoUploadRequestContext','VideoUploadStartRequestManager','WaterfallIDGenerator','mixin'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits
















(j,c('mixin')(c('ArbiterMixin')));i=h&&h.prototype;
function j(k){'use strict';
i.constructor.call(this);
this.$VideoUploadSession_source=k.source;
this.$VideoUploadSession_targetID=k.target_id;
this.$VideoUploadSession_loggingDelay=k.logging_delay;
this.$VideoUploadSession_silentFileValidation=k.silent_file_validation;
this.$VideoUploadSession_backgroundUpload=k.background_upload;
this.$VideoUploadSession_actorID=k.actor_id;
this.$VideoUploadSession_composerEntryPointRef=k.composer_entry_point_ref;
this.$VideoUploadSession_monitorCrashes=k.monitor_crashes;
this.$VideoUploadSession_isMultiMediaPost=k.isMultiMediaPost;
this.$VideoUploadSession_containerType=k.container_type;

this.$VideoUploadSession_fileValidator=new (c('VideoUploadFileValidator'))
({minSize:k.min_size,
maxSize:k.max_size,
minLength:k.min_length,
maxLength:k.max_length,
minWidth:k.min_width,
minHeight:k.min_height,
extensions:k.extensions,
source:k.source,
require16to9AspectRatio:k.require_16to9_aspect_ratio});



this.$VideoUploadSession_supportsChunking=c('VideoUploadFeatureDetector').supportsChunking();
this.$VideoUploadSession_supportsFileAPI=c('VideoUploadFeatureDetector').supportsFileAPI();
if(this.$VideoUploadSession_supportsChunking){


this.$VideoUploadSession_parallelChunkUploads=k.parallel_chunk_uploads;
if(this.$VideoUploadSession_parallelChunkUploads){
this.$VideoUploadSession_parallelChunkUploadFilesize=
k.parallel_chunk_upload_filesize;
this.$VideoUploadSession_defaultChunkSize=k.default_chunk_size;}}else 


this.$VideoUploadSession_parallelChunkUploads=false;



this.$VideoUploadSession_startRequestManager=this.$VideoUploadSession_createStartRequestManager(k);

this.$VideoUploadSession_receiveRequestManager=this.$VideoUploadSession_createReceiveRequestManager(k);
if(this.$VideoUploadSession_parallelChunkUploads)





this.$VideoUploadSession_receiveRequestManagerEx=this.$VideoUploadSession_createReceiveRequestManager(k);

this.$VideoUploadSession_postRequestManager=this.$VideoUploadSession_createPostRequestManager(k);}
j.prototype.

$VideoUploadSession_createLogger=function(){'use strict';
this.$VideoUploadSession_waterfallID=c('WaterfallIDGenerator').generate();
this.$VideoUploadSession_logger=new (c('VideoUploadLogger'))
({actor_id:this.$VideoUploadSession_actorID,
source:this.$VideoUploadSession_source,
waterfall_id:this.$VideoUploadSession_waterfallID,
target_id:this.$VideoUploadSession_targetID,
delay:this.$VideoUploadSession_loggingDelay,
is_chunked_upload:this.$VideoUploadSession_supportsChunking,
composer_entry_point_ref:this.$VideoUploadSession_composerEntryPointRef,
container_type:this.$VideoUploadSession_containerType});};

j.prototype.

getLogger=function(){'use strict';
if(!this.$VideoUploadSession_logger)



return null;


return this.$VideoUploadSession_logger;};
j.prototype.








start=function(k){'use strict';

this.$VideoUploadSession_videoID=null;
this.$VideoUploadSession_isInProgress=false;
this.$VideoUploadSession_uploadFinished=false;
this.$VideoUploadSession_file=k;
this.$VideoUploadSession_sent_bytes=0;
this.$VideoUploadSession_isSphericalVideo=false;
this.$VideoUploadSession_metadata=
{sphericalMetadataXml:null,
fbSpatialAudioMetadataXml:null,
ytSa3dMetadataJson:null};

this.$VideoUploadSession_enableOmnistab=false;
this.$VideoUploadSession_createLogger();


this.__logEvent(c('VideoUploadLogger').EVENT_REQUESTED_UPLOADING);
this.inform('upload-requested');


var l=new (c('VideoUploadMetadataParser'))
(this.$VideoUploadSession_file,
this.$VideoUploadSession_upload.bind(this));

l.parse();};
j.prototype.






post=function(k){'use strict';
this.__logEvent(c('VideoUploadLogger').EVENT_STARTED_POST_REQUEST);
this.inform('post-started',k);
var l=this.__createPostRequestContext(k);
this.$VideoUploadSession_postRequestManager.sendRequest(l);

this.$VideoUploadSession_postData=k;};
j.prototype.

__createPostRequestContext=function(k){'use strict';
var l=new (c('VideoUploadRequestContext'))();
this.__setupPostRequestContext(l,k);
return l;};
j.prototype.

__setupPostRequestContext=function(k,l){'use strict';
k.setMetadata(l).
setVideoID(this.$VideoUploadSession_videoID).
setTargetID(this.$VideoUploadSession_targetID).
setSource(this.$VideoUploadSession_source).
setWaterfallID(this.$VideoUploadSession_waterfallID).
setSupportsChunking(this.$VideoUploadSession_supportsChunking).
setCreatorProduct(this.$VideoUploadSession_file.getCreatorProduct()).
setFile(this.$VideoUploadSession_file);
if(l){
if(l.spherical){
this.$VideoUploadSession_isSphericalVideo=true;
k.setIsSphericalVideo(this.$VideoUploadSession_isSphericalVideo);}

if(l.enable_omnistab){
this.$VideoUploadSession_enableOmnistab=true;
k.setEnableOmnistab(this.$VideoUploadSession_enableOmnistab);}}



if(k.setComposerEntryPointRef)
k.setComposerEntryPointRef(this.$VideoUploadSession_composerEntryPointRef);};

j.prototype.




cancel=function(){'use strict';
if(!this.$VideoUploadSession_isInProgress)
return;


var k=this.__fetchReceiveRequestManagerStateLogData();

this.$VideoUploadSession_sendAbortRequests();
if(this.$VideoUploadSession_backgroundUpload){
if(!this.$VideoUploadSession_uploadFinished)
this.__logEvent(c('VideoUploadLogger').EVENT_CANCELED_UPLOADING);

if(this.$VideoUploadSession_flowStarted){
this.__logEvent(c('VideoUploadLogger').EVENT_CANCELED_FLOW,k);
this.$VideoUploadSession_flowStarted=false;}}else{


this.__logEvent(c('VideoUploadLogger').EVENT_CANCELED_UPLOADING);
this.__logEvent(c('VideoUploadLogger').EVENT_CANCELED_FLOW,k);}};

j.prototype.




abandon=function(){'use strict';
if(!this.$VideoUploadSession_isInProgress)
return;


var k=this.__fetchReceiveRequestManagerStateLogData();

this.$VideoUploadSession_sendAbortRequests();
if(this.$VideoUploadSession_backgroundUpload){
if(!this.$VideoUploadSession_uploadFinished)
this.__logEvent(c('VideoUploadLogger').EVENT_ABANDONED_UPLOADING);

if(this.$VideoUploadSession_flowStarted){
this.__logEvent(c('VideoUploadLogger').EVENT_CANCELED_FLOW,k);
this.$VideoUploadSession_flowStarted=false;}}else{


this.__logEvent(c('VideoUploadLogger').EVENT_ABANDONED_UPLOADING);
this.__logEvent(c('VideoUploadLogger').EVENT_CANCELED_FLOW,k);}};

j.prototype.




isPostInProgress=function(){'use strict';
return this.$VideoUploadSession_postRequestManager.isInProgress();};
j.prototype.




isInProgress=function(){'use strict';
return this.$VideoUploadSession_isInProgress;};
j.prototype.




getVideoID=function(){'use strict';
return this.$VideoUploadSession_videoID;};
j.prototype.

getUploadTime=function(){'use strict';
return this.$VideoUploadSession_uploadElapsedTime;};
j.prototype.

startFlow=function(){'use strict';
if(!this.$VideoUploadSession_backgroundUpload||this.$VideoUploadSession_flowStarted)
return;


this.__logEvent(c('VideoUploadLogger').EVENT_STARTED_FLOW,

{is_spherical:this.$VideoUploadSession_isSphericalVideo?'true':null});

this.$VideoUploadSession_flowStarted=true;
if(this.$VideoUploadSession_crashMonitor)
this.$VideoUploadSession_crashMonitor.flowStarted();};

j.prototype.








$VideoUploadSession_upload=function(k){'use strict';
var l,
m;

if(this.$VideoUploadSession_silentFileValidation){
var n=this.$VideoUploadSession_fileValidator.getValidationErrorMessage
(this.$VideoUploadSession_file,
k);

if(n){
m=
{error_summary:n.summary,
error_description:n.description};

l=false;}else 

l=true;}else 


l=this.$VideoUploadSession_fileValidator.validate(this.$VideoUploadSession_file,k);



if(!l){
this.__logEvent(c('VideoUploadLogger').EVENT_INVALIDATED_UPLOADING);
this.inform('upload-failed',m);
return;}


if(k&&k.format){
this.$VideoUploadSession_isSphericalVideo=k.format.isSpherical;

if(k.metadata){
this.$VideoUploadSession_metadata.sphericalMetadataXml=
k.metadata.sphericalMetadataXml;
this.$VideoUploadSession_metadata.fbSpatialAudioMetadataXml=
k.metadata.fbSpatialAudioMetadataXml;
this.$VideoUploadSession_metadata.ytSa3dMetadataJson=
k.metadata.ytSa3dMetadataJson;}}



if(!this.$VideoUploadSession_backgroundUpload)
this.__logEvent
(c('VideoUploadLogger').EVENT_STARTED_FLOW,

{is_spherical:this.$VideoUploadSession_isSphericalVideo?'true':null});



this.$VideoUploadSession_useExPartition=this.$VideoUploadSession_parallelChunkUploads&&
this.$VideoUploadSession_file.getSize()>=this.$VideoUploadSession_parallelChunkUploadFilesize;

this.$VideoUploadSession_primaryPartitionCompleted=false;
this.$VideoUploadSession_exPartitionCompleted=false;

this.$VideoUploadSession_primaryPartitionStart=0;
this.$VideoUploadSession_primaryLastStartOffset=this.$VideoUploadSession_primaryPartitionStart;
this.$VideoUploadSession_primaryLastSentBytes=0;

if(this.$VideoUploadSession_useExPartition){
this.$VideoUploadSession_primaryPartitionEnd=Math.floor(this.$VideoUploadSession_file.getSize()/2);
this.$VideoUploadSession_exPartitionStart=this.$VideoUploadSession_primaryPartitionEnd;
this.$VideoUploadSession_exLastStartOffset=this.$VideoUploadSession_exPartitionStart;
this.$VideoUploadSession_exLastSentBytes=0;
this.$VideoUploadSession_exPartitionEnd=this.$VideoUploadSession_file.getSize();}else 

this.$VideoUploadSession_primaryPartitionEnd=this.$VideoUploadSession_file.getSize();



var o=new (c('VideoUploadRequestContext'))().
setFile(this.$VideoUploadSession_file).
setTargetID(this.$VideoUploadSession_targetID).
setSource(this.$VideoUploadSession_source).
setWaterfallID(this.$VideoUploadSession_waterfallID).
setSupportsChunking(this.$VideoUploadSession_supportsChunking).
setSupportsFileAPI(this.$VideoUploadSession_supportsFileAPI).
setCreatorProduct(this.$VideoUploadSession_file.getCreatorProduct()).
setPartitionStartOffset(this.$VideoUploadSession_primaryPartitionStart).
setPartitionEndOffset(this.$VideoUploadSession_primaryPartitionEnd);

if(this.$VideoUploadSession_parallelChunkUploads)
o.setUseParallelChunks(this.$VideoUploadSession_parallelChunkUploads);

if(this.$VideoUploadSession_isSphericalVideo){
o.setIsSphericalVideo(this.$VideoUploadSession_isSphericalVideo);
o.setSphericalMetadata(this.$VideoUploadSession_metadata);}



if(o.setComposerEntryPointRef)
o.setComposerEntryPointRef(this.$VideoUploadSession_composerEntryPointRef);


this.$VideoUploadSession_startProgress();
this.$VideoUploadSession_startRequestManager.sendRequest(o);

this.inform
('metadata-parsed',
k);};

j.prototype.







$VideoUploadSession_createStartRequestManager=function(k){'use strict';
var l=this.$VideoUploadSession_supportsChunking?
k.chunk_start_uri:
k.start_uri,

m=this.__getVideoUploadStartRequestManager
(l,
k.start_max_transport_retries,
k.start_transport_retry_interval_base,
k.skip_upload_enabled,
k.skip_upload_file_size_limit,
k.start_max_server_retries,
k.start_server_retry_interval_base);


m.subscribe
('request-started',
this.$VideoUploadSession_handleStartRequestStarted.bind(this));

m.subscribe
('request-finished',
this.$VideoUploadSession_handleStartRequestFinished.bind(this));

m.subscribe
('request-failed',
this.$VideoUploadSession_handleStartRequestFailed.bind(this));


return m;};
j.prototype.







$VideoUploadSession_createReceiveRequestManager=function(k){'use strict';
var l=this.$VideoUploadSession_supportsChunking?
k.chunk_receive_uri:
k.receive_uri,

m=this.__getVideoUploadReceiveRequestManager(l,k);

m.subscribe
('request-started',
this.$VideoUploadSession_handleReceiveRequestStarted.bind(this));

m.subscribe
('request-progressed',
this.$VideoUploadSession_handleReceiveRequestProgressed.bind(this));

m.subscribe
('request-finished',
this.$VideoUploadSession_handleReceiveRequestFinished.bind(this));

m.subscribe
('request-failed',
this.$VideoUploadSession_handleReceiveRequestFailed.bind(this));

m.subscribe
('request-timeout',
this.$VideoUploadSession_handleReceiveRequestTimeout.bind(this));

m.subscribe
('online',
this.$VideoUploadSession_handleReceiveRequestOnline.bind(this));

m.subscribe
('offline',
this.$VideoUploadSession_handleReceiveRequestOffline.bind(this));


return m;};
j.prototype.







$VideoUploadSession_createPostRequestManager=function(k){'use strict';
var l=this.$VideoUploadSession_supportsChunking?
k.chunk_post_uri:
k.post_uri,

m=this.__getVideoUploadPostRequestManager(l,k);

m.subscribe
('request-finished',
this.__handlePostRequestFinished.bind(this));

m.subscribe
('request-failed',
this.$VideoUploadSession_handlePostRequestFailed.bind(this));


return m;};
j.prototype.

$VideoUploadSession_handleStartRequestStarted=function(event,k){'use strict';
this.__logEvent
(c('VideoUploadLogger').EVENT_STARTED_UPLOADING,

{hash_time:k.hash_time,
hash_exception:k.hash_exception});


this.__logEvent(c('VideoUploadLogger').EVENT_STARTED_START_REQUEST);
this.$VideoUploadSession_uploadStartedTime=Date.now();
this.inform('upload-started');};
j.prototype.

$VideoUploadSession_handleStartRequestFinished=function(event,k){'use strict';
this.__logEvent
(c('VideoUploadLogger').EVENT_PROGRESS_UPLOADING_START_REQUEST,

{transport_retries:k.transport_retries,
hash_time:k.hash_time,
skip_upload:k.skip_upload?1:null});


this.__logEvent(c('VideoUploadLogger').EVENT_FINISHED_START_REQUEST);

this.$VideoUploadSession_videoID=k.video_id;
this.$VideoUploadSession_skipUpload=k.skip_upload;

if(!k.skip_upload){
var l;
l=this.__createReceiveRequestContext(k,false);
this.$VideoUploadSession_receiveRequestManager.sendRequest(l);
if(this.$VideoUploadSession_useExPartition){
l=this.__createReceiveRequestContext(k,true);
this.$VideoUploadSession_receiveRequestManagerEx.sendRequest(l);}}else{



this.inform
('upload-progressed',

{start_offset:0,
end_offset:this.$VideoUploadSession_file.getSize(),
file_size:this.$VideoUploadSession_file.getSize(),
sent_bytes:this.$VideoUploadSession_file.getSize(),
video_id:k.video_id,
skip_upload:k.skip_upload});



if(this.$VideoUploadSession_backgroundUpload)
this.__logFinishedUploading();

this.inform
('upload-finished',

{start_offset:0,
end_offset:this.$VideoUploadSession_file.getSize(),
video_id:k.video_id});}};




j.prototype.

__fetchReceiveRequestManagerStateLogData=function(){'use strict';
var k={};

if(this.$VideoUploadSession_receiveRequestManager!=null)
this.$VideoUploadSession_receiveRequestManager.appendStateLogData(k,'requestManager_');


if(this.$VideoUploadSession_receiveRequestManagerEx!=null)
this.$VideoUploadSession_receiveRequestManagerEx.appendStateLogData
(k,
'requestManagerEx_');


return k;};
j.prototype.

__createReceiveRequestContext=
function(k,l){'use strict';
if(!l)
l=false;

var m=new (c('VideoUploadRequestContext'))();
this.__setupReceiveRequestContext(m,k,l);
return m;};
j.prototype.

__setupReceiveRequestContext=
function(k,l,m){'use strict';
var n,
o,
p,
q;

if(!m){
n=this.$VideoUploadSession_primaryPartitionStart;
o=this.$VideoUploadSession_primaryPartitionEnd;
p=l.start_offset;
q=l.end_offset;}else{

n=this.$VideoUploadSession_exPartitionStart;
o=this.$VideoUploadSession_exPartitionEnd;
p=this.$VideoUploadSession_exPartitionStart;
q=
this.$VideoUploadSession_exPartitionStart+this.$VideoUploadSession_defaultChunkSize>=
this.$VideoUploadSession_exPartitionEnd?
this.$VideoUploadSession_exPartitionEnd:
this.$VideoUploadSession_exPartitionStart+this.$VideoUploadSession_defaultChunkSize;}


k.setFile(this.$VideoUploadSession_file).
setVideoID(l.video_id).
setStartOffset(p).
setEndOffset(q).
setPartitionStartOffset(n).
setPartitionEndOffset(o).
setTargetID(this.$VideoUploadSession_targetID).
setSource(this.$VideoUploadSession_source).
setWaterfallID(this.$VideoUploadSession_waterfallID).
setSupportsChunking(this.$VideoUploadSession_supportsChunking);

if(this.$VideoUploadSession_parallelChunkUploads)
k.setUseParallelChunks(this.$VideoUploadSession_parallelChunkUploads);



if(k.setComposerEntryPointRef)
k.setComposerEntryPointRef(this.$VideoUploadSession_composerEntryPointRef);};

j.prototype.

$VideoUploadSession_handleStartRequestFailed=function(event,k){'use strict';
var l=this.__getLogErrorData(k);

this.__logEvent(c('VideoUploadLogger').EVENT_FAILED_START_REQUEST,l);
this.__logEvent(c('VideoUploadLogger').EVENT_FAILED_UPLOADING,l);


var m=k.error_is_transient?
c('VideoUploadLogger').EVENT_RESIGNED_FLOW:
c('VideoUploadLogger').EVENT_FAILED_FLOW;

if(this.$VideoUploadSession_backgroundUpload){
if(this.$VideoUploadSession_flowStarted){
this.__logEvent(m);
this.$VideoUploadSession_flowStarted=false;}}else 


this.__logEvent(m);


this.$VideoUploadSession_endProgress();
this.inform('upload-failed',k);};
j.prototype.

$VideoUploadSession_handleReceiveRequestStarted=function(event,k){'use strict';


if(!k.start_offset&&!k.transport_retries&&!k.server_retries)
this.__logEvent
(c('VideoUploadLogger').EVENT_STARTED_SENDING_BYTES,
{total_bytes:this.$VideoUploadSession_file.getSize()});



if(this.$VideoUploadSession_supportsChunking)
this.__logEvent
(c('VideoUploadLogger').EVENT_STARTED_SENDING_CHUNK_BYTES,

{start_offset:k.start_offset,
total_bytes:k.end_offset-k.start_offset,
transport_retries:k.transport_retries,
server_retries:k.server_retries,
upload_speed:k.upload_speed});};



j.prototype.

$VideoUploadSession_handleReceiveRequestProgressed=function(event,k){'use strict';
if(k.start_offset<this.$VideoUploadSession_primaryPartitionEnd){
this.$VideoUploadSession_primaryLastStartOffset=k.start_offset;
this.$VideoUploadSession_primaryLastSentBytes=k.sent_bytes;}else{

this.$VideoUploadSession_exLastStartOffset=k.start_offset;
this.$VideoUploadSession_exLastSentBytes=k.sent_bytes;}


k.start_offset=this.$VideoUploadSession_primaryLastStartOffset;
k.sent_bytes=this.$VideoUploadSession_primaryLastSentBytes;
if(this.$VideoUploadSession_useExPartition){
k.start_offset+=
this.$VideoUploadSession_exLastStartOffset-this.$VideoUploadSession_exPartitionStart;
k.sent_bytes+=this.$VideoUploadSession_exLastSentBytes;}


var l=Math.min
(k.start_offset+k.sent_bytes,
k.file_size);


if(l>this.$VideoUploadSession_sent_bytes){
this.$VideoUploadSession_sent_bytes=l;
this.inform('upload-progressed',k);}};

j.prototype.

$VideoUploadSession_handleReceiveRequestFinished=function(event,k){'use strict';
if(this.$VideoUploadSession_supportsChunking)
this.__logEvent
(c('VideoUploadLogger').EVENT_FINISHED_SENDING_CHUNK_BYTES,

{start_offset:k.start_offset,
sent_bytes:k.end_offset-k.start_offset,
transport_retries:k.transport_retries,
server_retries:k.server_retries,
upload_speed:k.upload_speed});




if(k.start_offset<this.$VideoUploadSession_primaryPartitionEnd){
this.$VideoUploadSession_primaryPartitionCompleted=
k.end_offset>=this.$VideoUploadSession_primaryPartitionEnd;}else 

this.$VideoUploadSession_exPartitionCompleted=
k.end_offset>=this.$VideoUploadSession_exPartitionEnd;


if(!this.$VideoUploadSession_supportsFileAPI||
this.$VideoUploadSession_primaryPartitionCompleted&&
(!this.$VideoUploadSession_useExPartition||this.$VideoUploadSession_exPartitionCompleted)){
this.__logEvent
(c('VideoUploadLogger').EVENT_FINISHED_SENDING_BYTES,
{sent_bytes:this.$VideoUploadSession_file.getSize()});

this.$VideoUploadSession_uploadElapsedTime=Date.now()-this.$VideoUploadSession_uploadStartedTime;
if(this.$VideoUploadSession_backgroundUpload)
this.__logFinishedUploading();

k.video_id=this.$VideoUploadSession_videoID;
this.inform
('upload-finished',
k);

if(this.$VideoUploadSession_isMultiMediaPost){
this.__logEvent(c('VideoUploadLogger').EVENT_FINISHED_FLOW);
this.$VideoUploadSession_flowStarted=false;
this.$VideoUploadSession_endProgress();
this.inform('multimedia-upload-finished',k);}}};


j.prototype.

$VideoUploadSession_handleReceiveRequestFailed=function(event,k){'use strict';
var l=this.__getLogErrorData(k);

if(this.$VideoUploadSession_supportsChunking)
this.__logEvent
(c('VideoUploadLogger').EVENT_FAILED_SENDING_CHUNK_BYTES,
l);


this.__logEvent(c('VideoUploadLogger').EVENT_FAILED_UPLOADING,l);


var m=k.error_is_transient?
c('VideoUploadLogger').EVENT_RESIGNED_FLOW:
c('VideoUploadLogger').EVENT_FAILED_FLOW;

if(this.$VideoUploadSession_backgroundUpload){
if(this.$VideoUploadSession_flowStarted){
this.__logEvent(m);
this.$VideoUploadSession_flowStarted=false;}}else 


this.__logEvent(m);


this.$VideoUploadSession_endProgress();
this.inform('upload-failed',k);};
j.prototype.

$VideoUploadSession_handleReceiveRequestTimeout=function(event,k){'use strict';
this.__logEvent
(c('VideoUploadLogger').EVENT_TIMEOUT_SENDING_CHUNK_BYTES,

{start_offset:k.start_offset,
sent_bytes:k.end_offset-k.start_offset,
transport_retries:k.transport_retries,
server_retries:k.server_retries,
timeout_retries:k.timeout_retries,
upload_speed:k.upload_speed});};


j.prototype.

$VideoUploadSession_handleReceiveRequestOnline=function(event,k){'use strict';
this.inform('online',k);};
j.prototype.

$VideoUploadSession_handleReceiveRequestOffline=function(event,k){'use strict';
this.inform('offline',k);};
j.prototype.

__handlePostRequestFinished=function(event,k){'use strict';
this.__logEvent(c('VideoUploadLogger').EVENT_FINISHED_POST_REQUEST);

if(!k.video_id)
k.video_id=this.$VideoUploadSession_videoID;

if(!this.$VideoUploadSession_backgroundUpload)
this.__logFinishedUploading();

this.__logEvent(c('VideoUploadLogger').EVENT_FINISHED_FLOW);
this.$VideoUploadSession_flowStarted=false;

this.$VideoUploadSession_endProgress();

var l=babelHelpers['extends']({},

k,
this.$VideoUploadSession_postData);

this.inform('post-finished',l);};
j.prototype.

__logFinishedUploading=function(){'use strict';
this.__logEvent
(c('VideoUploadLogger').EVENT_FINISHED_UPLOADING,

{elapsed_time:this.$VideoUploadSession_uploadElapsedTime,
skip_upload:this.$VideoUploadSession_skipUpload?1:null});


this.$VideoUploadSession_uploadFinished=true;};
j.prototype.

$VideoUploadSession_handlePostRequestFailed=function(event,k){'use strict';
var l=this.__getLogErrorData(k);
this.__logEvent(c('VideoUploadLogger').EVENT_FAILED_POST_REQUEST,l);


if(this.$VideoUploadSession_isInProgress){
this.__logEvent(c('VideoUploadLogger').EVENT_FAILED_UPLOADING,l);


var m=k.error_is_transient?
c('VideoUploadLogger').EVENT_RESIGNED_FLOW:
c('VideoUploadLogger').EVENT_FAILED_FLOW;
this.__logEvent(m);}


this.$VideoUploadSession_endProgress();
this.inform('post-failed',k);};
j.prototype.





$VideoUploadSession_sendAbortRequests=function(){'use strict';
this.$VideoUploadSession_startRequestManager.cancelRequest();
this.$VideoUploadSession_receiveRequestManager.cancelRequest();
if(this.$VideoUploadSession_useExPartition)
this.$VideoUploadSession_receiveRequestManagerEx.cancelRequest();


this.$VideoUploadSession_endProgress();

if(this.$VideoUploadSession_videoID){
new (c('AsyncRequest'))('/ajax/video/actions/delete').
setData({fbid:this.$VideoUploadSession_videoID,redirect:false}).
send();

this.$VideoUploadSession_videoID=null;}};

j.prototype.

$VideoUploadSession_startProgress=function(){'use strict';
this.$VideoUploadSession_isInProgress=true;

if(this.$VideoUploadSession_monitorCrashes){
this.$VideoUploadSession_crashMonitor=new (c('VideoUploadCrashMonitor'))
(this.$VideoUploadSession_waterfallID,
this.$VideoUploadSession_actorID,
this.$VideoUploadSession_source,
this.$VideoUploadSession_targetID,
this.$VideoUploadSession_loggingDelay,
this.$VideoUploadSession_supportsChunking,
this.$VideoUploadSession_composerEntryPointRef,
!this.$VideoUploadSession_backgroundUpload||this.$VideoUploadSession_flowStarted);

this.$VideoUploadSession_crashMonitor.startSession();}};

j.prototype.

$VideoUploadSession_endProgress=function(){'use strict';
this.$VideoUploadSession_isInProgress=false;
if(this.$VideoUploadSession_crashMonitor){
this.$VideoUploadSession_crashMonitor.endSession();
this.$VideoUploadSession_crashMonitor=null;}};

j.prototype.

__getLogErrorData=function(k){'use strict';

return {error:k.error_summary,
error_code:k.error_code,
error_description:k.error_description,
transport_retries:k.transport_retries,
server_retries:k.server_retries};};

j.prototype.

__logEvent=function(event,k){'use strict';
var l=this.getLogger();

k=k||{};


if(this.$VideoUploadSession_file){
k.file_size=this.$VideoUploadSession_file.getSize();
k.file_extension=this.$VideoUploadSession_file.getExtension();
k.sent_bytes=this.$VideoUploadSession_sent_bytes;}


l.logEvent(event,k);};
j.prototype.

__getVideoUploadStartRequestManager=
function(k,
l,
m,
n,
o,
p,
q){
'use strict';
return new (c('VideoUploadStartRequestManager'))
(k,
l,
m,
n,
o,
p,
q);};

j.prototype.

__getVideoUploadReceiveRequestManager=function(k,l){'use strict';
return new (c('VideoUploadReceiveRequestManager'))
(k,
l.max_transport_retries,
l.max_server_retries,
l.response_timeout_enabled,
l.max_response_timeout_retries,
l.response_timeout_speed_variation_factor_ppt,
l.transport_retry_interval_base,
l.server_retry_interval_base,
l.receive_errors_force_retry);};

j.prototype.

__getVideoUploadPostRequestManager=
function(k,
l){
'use strict';
return new (c('VideoUploadPostRequestManager'))
(k,
l.post_max_transport_retries,
l.post_transport_retry_interval_base,
l.post_max_server_retries,
l.post_server_retry_interval_base);};




f.exports=j;}),null);

/** js/video/upload/uploader/VideoUploader.js */






__d('VideoUploader',['ArbiterMixin','VideoUploadCrashMonitor','VideoUploadLogger','VideoUploadSession','arrayContains','mixin'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits









(j,c('mixin')(c('ArbiterMixin')));i=h&&h.prototype;




function j(k){'use strict';
i.constructor.call(this);
this.$VideoUploader_data=k;
this.$VideoUploader_session=null;

if(k.monitor_crashes){
this.$VideoUploader_crashMonitor=new (c('VideoUploadCrashMonitor'))();
this.$VideoUploader_crashMonitor.logKnownCrashes();}}

j.prototype.

getLogger=function(){'use strict';
if(!this.$VideoUploader_session)



return;



if(this.$VideoUploader_session.getLogger)
return this.$VideoUploader_session.getLogger();};

j.prototype.








upload=function(k){'use strict';
if(this.$VideoUploader_session)



return;



this.$VideoUploader_session=this.__getVideoUploadSession(this.$VideoUploader_data);
this.$VideoUploader_session.subscribe
(this.__getEventsWhichShouldListenFromSession(),
function(event,l){return this.$VideoUploader_handleUploadSessionEvent(event,l);}.bind(this));

this.$VideoUploader_session.start(k);};
j.prototype.

__getVideoUploadSession=function(k){'use strict';
return new (c('VideoUploadSession'))(k);};
j.prototype.

__getEventsWhichShouldListenFromSession=function(){'use strict';

return ['upload-requested',
'upload-started',
'upload-progressed',
'upload-finished',
'upload-failed',
'post-started',
'post-finished',
'post-failed',
'online',
'offline',
'metadata-parsed'];};

j.prototype.

postUserRequest=function(){'use strict';
if(!this.$VideoUploader_session)



return;



if(this.$VideoUploader_session.startFlow)
this.$VideoUploader_session.startFlow();};

j.prototype.






post=function(k){'use strict';
if(!this.$VideoUploader_session)



return;


this.$VideoUploader_session.post(k);};
j.prototype.

getVideoID=function(){'use strict';
return this.$VideoUploader_session.getVideoID();};
j.prototype.




cancel=function(){'use strict';
if(!this.$VideoUploader_session)
return;


this.$VideoUploader_session.cancel();
this.$VideoUploader_session=null;};
j.prototype.




abandon=function(){'use strict';
if(!this.$VideoUploader_session)
return;


this.$VideoUploader_session.abandon();
this.$VideoUploader_session=null;};
j.prototype.




reset=function(){'use strict';
this.$VideoUploader_session=null;};
j.prototype.




getUploadSession=function(){'use strict';
return this.$VideoUploader_session;};
j.prototype.

getLoggerData=function(){'use strict';

return {waterfall_id:this.$VideoUploader_session?this.$VideoUploader_session.$VideoUploader_waterfallID:null,
actor_id:this.$VideoUploader_data.actor_id,
target_id:this.$VideoUploader_data.target_id,
target_type:this.$VideoUploader_data.target_type,
composer_entry_point_ref:this.$VideoUploader_data.composer_entry_point_ref};};

j.prototype.




isPostInProgress=function(){'use strict';
return !!this.$VideoUploader_session&&this.$VideoUploader_session.isPostInProgress();};
j.prototype.




isSessionInProgress=function(){'use strict';
return !!this.$VideoUploader_session&&this.$VideoUploader_session.isInProgress();};
j.prototype.

getUploadParameters=function(){'use strict';
return this.$VideoUploader_data;};
j.prototype.

__getSession=function(){'use strict';
return this.$VideoUploader_session;};
j.prototype.

__getEventsForWhichSessionShouldBeSetToNull=function(){'use strict';



return ['upload-failed',
'post-finished',
'multimedia-upload-finished'];};

j.prototype.









$VideoUploader_handleUploadSessionEvent=function(event,k){'use strict';
if(c('arrayContains')
(this.__getEventsForWhichSessionShouldBeSetToNull(),
event))

this.$VideoUploader_session=null;


this.__delegateEvent(event,k);};
j.prototype.

__delegateEvent=function(event,k){'use strict';
this.inform(event,k);};



f.exports=j;}),null);
