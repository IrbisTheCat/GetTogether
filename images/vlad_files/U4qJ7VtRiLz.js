if (self.CavalryLogger) { CavalryLogger.start_js(["\/g7p2"]); }

/** __static_js_modules__/chatperfevent.js */




__d("ChatPerfEvent",[],(function a(b,c,d,e,f,g){

f.exports={ASYNC_REQUEST:"async_request",SIDEBAR_FROM_CLIENT_TTI:"sidebar_from_client_tti",SIDEBAR_FROM_SERVER_TTI:"sidebar_from_server_tti",SIDEBAR_DISPLAY_DONE:"sidebar_display_done",TTI:"tti",CHAT_CONVERSATION_TTI:"chat_conversation_tti",CHAT_INIT_STORES:"chat_init_stores",CHAT_INIT_DATA:"chat_init_data",CHAT_INIT_UI:"chat_init_ui",CHAT_INIT_SOUND:"chat_init_sound",CHAT_DISPLAY_DONE:"chat_display_done"};}),

null);

/** __static_js_modules__/reactcomposerconstants.js */




__d("ReactComposerConstants",[],(function a(b,c,d,e,f,g){

f.exports={ID_PREFIX:"rc.",GK_VIDEO_COPYRIGHT:"video_copyright_confirmation_dialog",GK_MULTILINGUAL_COMPOSER:"multilingual_composer_www"};}),

null);

/** js/ads/utils/getByPath.js */







__d('getByPath',[],(function a(b,c,d,e,f,g){

'use strict';






















function h
(i,
j,
k){

var l=i;
for(var m=0;m<j.length;m++){
var n=j[m];


if(l&&n in l){
l=l[n];}else 

return k;}


return l;}


f.exports=h;}),null);

/** js/channel/ChannelConstants.js */




__d('ChannelConstants',[],(function a(b,c,d,e,f,g){

var h='channel/',

i=





{CHANNEL_MANUAL_RECONNECT_DEFER_MSEC:2000,


MUTE_WARNING_TIME_MSEC:25000,



WARNING_COUNTDOWN_THRESHOLD_MSEC:15000,







ON_SHUTDOWN:h+'shutdown',


ON_INVALID_HISTORY:h+'invalid_history',


ON_CONFIG:h+'config',






ON_ENTER_STATE:h+'enter_state',






ON_EXIT_STATE:h+'exit_state',


ATTEMPT_RECONNECT:h+'attempt_reconnect',




RTI_SESSION:h+'new_rti_address',



GET_RTI_SESSION_REQUEST:h+'rti_session_request',


SKYWALKER:h+'skywalker',


CHANNEL_ESTABLISHED:h+'established',


OK:'ok',
ERROR:'error',
ERROR_MAX:'error_max',
ERROR_MISSING:'error_missing',
ERROR_MSG_TYPE:'error_msg_type',
ERROR_SHUTDOWN:'error_shutdown',




ERROR_STALE:'error_stale',


SYS_OWNER:'sys_owner',
SYS_NONOWNER:'sys_nonowner',
SYS_ONLINE:'sys_online',
SYS_OFFLINE:'sys_offline',
SYS_TIMETRAVEL:'sys_timetravel',


HINT_AUTH:'shutdown auth',
HINT_CONN:'shutdown conn',
HINT_DISABLED:'shutdown disabled',
HINT_INVALID_STATE:'shutdown invalid state',
HINT_MAINT:'shutdown maint',
HINT_UNSUPPORTED:'shutdown unsupported',


reason_Unknown:0,
reason_AsyncError:1,
reason_TooLong:2,
reason_Refresh:3,
reason_RefreshDelay:4,
reason_UIRestart:5,
reason_NeedSeq:6,
reason_PrevFailed:7,
reason_IFrameLoadGiveUp:8,
reason_IFrameLoadRetry:9,
reason_IFrameLoadRetryWorked:10,
reason_PageTransitionRetry:11,
reason_IFrameLoadMaxSubdomain:12,
reason_NoChannelInfo:13,
reason_NoChannelHost:14,


CAPABILITY_VOIP_INTEROP:8,


FANTAIL_SERVICE:'WebchatClient',

SUBSCRIBE:'subscribe',
UNSUBSCRIBE:'unsubscribe',


FAKE_DFF:'fake_dff',




getArbiterType:function j(k){
return h+'message:'+k;},


getSkywalkerArbiterType:function j(k){
return h+'skywalker:'+k;}};



f.exports=i;}),null);

/** js/clientufi/UFIRootRegistry.js */






__d('UFIRootRegistry',[],(function a(b,c,d,e,f,g){

'use strict';




var h={},
i={},
j={},
k=[],

l=
{registerController:function m
(n,
o,
p,
q){

h[n]=q;
i[p]=[].concat
(i[p]||[],
[o]);

j[o]=p;},



registerSnowliftID:function m(n){
k.push(n);},


isSnowliftNode:function m(n){
return k.indexOf(n)>=0;},


getInstanceIDFromFTEntIdentifier:function m
(n){

return i[n]||null;},


getFTEntIdentifierFromInstanceID:function m
(n){

return j[n]||null;},


cleanupInstance:function m(n){
var o=j[n],
p=i[o];
if(p&&p.includes(n)){
i[o]=
p.filter(function(q){return q!=n;});

if(i[o].length==0)
delete i[o];}



delete j[n];},


cleanupSnowliftNodes:function m(){
k.forEach
(function(n){return h[n]&&h[n]();});


h={};
k=[];}};




f.exports=l;}),null);

/** js/clientufi/actions/UFIInstanceAction.js */






__d('UFIInstanceAction',['UFIInstanceActionType'],(function a(b,c,d,e,f,g){

'use strict';












































































var h=
{changeOrderingMode:function i
(j,
k){


return {type:c('UFIInstanceActionType').CHANGE_ORDER_MODE,
instanceID:j.instanceid,
ftentidentifier:j.ftentidentifier,
mode:k};},



toggleComments:function i(j){

return {type:c('UFIInstanceActionType').TOGGLE_COMMENTS,
instanceID:j.instanceid,
ftentidentifier:j.ftentidentifier};},



changeCommentListVisibility:function i
(j,
k){


return {type:c('UFIInstanceActionType').CHANGE_VISIBILITY,
instanceID:j.instanceid,
ftentidentifier:j.ftentidentifier,
visibility:k};},



init:function i
(j,
k){


return {type:c('UFIInstanceActionType').INIT,
instanceID:j.instanceid,
ftentidentifier:j.ftentidentifier,
payload:k};},



didRequestVODComments:function i
(j){


return {type:c('UFIInstanceActionType').REQUESTED_VOD_COMMENTS,
instanceID:j.instanceid,
ftentidentifier:j.ftentidentifier};},



didReceiveVODComments:function i
(j){


return {type:c('UFIInstanceActionType').RECEIVED_VOD_COMMENTS,
instanceID:j.instanceid,
ftentidentifier:j.ftentidentifier};},



remove:function i(j){

return {type:c('UFIInstanceActionType').REMOVE,
instanceID:j.instanceid,
ftentidentifier:j.ftentidentifier};},



toggleCommercialBreak:function i
(j,
k){


return {type:c('UFIInstanceActionType').TOGGLE_COMMERCIAL_BREAK,
instanceID:j.instanceid,
ftentidentifier:j.ftentidentifier,
inCommercial:k};},



translateAll:function i(j){

return {type:c('UFIInstanceActionType').TRANSLATE_ALL,
instanceID:j.instanceid,
ftentidentifier:j.ftentidentifier};}};




f.exports=h;}),null);

/** js/components/core/XUI/Card/XUICardSection.react.js */






__d('XUICardSection.react',['cx','React','XUIBlock','joinClasses'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;i=babelHelpers.inherits







(k,c('React').Component);j=i&&i.prototype;k.prototype.



render=function(){
var l=c('joinClasses')
("_4-u3",
c('XUIBlock').getBackgroundClass(this.props));



return (c('React').createElement('div',babelHelpers['extends']({},
this.props,
{className:c('joinClasses')(this.props.className,l)}),
this.props.children));};


function k(){i.apply(this,arguments);}k.propTypes=c('XUIBlock').propTypes;k.defaultProps=c('XUIBlock').getDefaultProps();


f.exports=k;}),null);

/** js/litestand/stream/LitestandStoryInsertionStatus.js */







__d('LitestandStoryInsertionStatus',['ArbiterMixin'],(function a(b,c,d,e,f,g){



var h='check',







i=






{registerBlocker:function j(k){
return this.subscribe
(h,
function(l,m){


if(m.can_insert&&k())
m.can_insert=false;});},










canInsert:function j(){
var k={can_insert:true};
this.inform(h,k);
return k.can_insert;}};



Object.assign(i,c('ArbiterMixin'));

f.exports=i;}),null);

/** js/mercury/utils/MercuryLoggingHelper.js */





__d('MercuryLoggingHelper',[],(function a(b,c,d,e,f,g){






















function h(j){
return Array.from(j).slice(0,6).join('');}


var i=






{obfuscateThread:function j(k){
var l=babelHelpers['extends']({},k);
if(k&&k.snippet&&k.snippet.length>9)
l.snippet=
h(k.snippet)+'...';


return l;},








obfuscateMessage:function j(k){
var l=babelHelpers['extends']({},k);
if(k&&k.body&&k.body.length>9)
l.body=h(k.body)+'...';


return l;}};



f.exports=i;}),null);

/** js/mercury/utils/MercuryServerURIs.js */






__d('MercuryServerURIs',[],(function a(b,c,d,e,f,g){

'use strict';

f.exports=
{THREAD_INFO:'/ajax/mercury/thread_info.php',
MARK_FOLDER_READ:'/ajax/mercury/mark_folder_as_read.php',
CHANGE_READ_STATUS:'/ajax/mercury/change_read_status.php',
MARK_SEEN:'/ajax/mercury/mark_seen.php',
THREADLIST_INFO:'/ajax/mercury/threadlist_info.php',
MARK_SPAM:'/ajax/mercury/mark_spam.php',
UNMARK_SPAM:'/ajax/mercury/unmark_spam.php',
UNREAD_THREADS:'/ajax/mercury/unread_threads.php',
CHANGE_ARCHIVED_STATUS:'/ajax/mercury/change_archived_status.php',
DELETE_THREAD:'/ajax/mercury/delete_thread.php',
DELETE_MESSAGES:'/ajax/mercury/delete_messages.php',
DELIVERY_RECEIPTS:'/ajax/mercury/delivery_receipts.php',
MOVE_THREAD:'/ajax/mercury/move_thread.php',
CHANGE_MUTE_THREAD:'/ajax/mercury/change_mute_thread.php'};}),null);

/** js/mercury/models/MercuryServerDispatcher.js */




__d('MercuryServerDispatcher',['Promise','AsyncRequest','AsyncResponse','BanzaiLogger','Bootloader','ChatPerfEvent','CurrentUser','FBID','LogHistory','MercuryConfig','MercuryLoggingHelper','MercuryServerURIs','areJSONRepresentationsEqual','debounceAcrossTransitions','getByPath','performanceAbsoluteNow'],(function a(b,c,d,e,f,g){

'use strict';


















var h={},

i=c('LogHistory').getInstance('mercury_server_dispatcher'),

j=false,

k=


{IMMEDIATE:'immediate',
IDEMPOTENT:'idempotent',
BATCH_SUCCESSIVE:'batch-successive',
BATCH_SUCCESSIVE_UNIQUE:'batch-successive-unique',
BATCH_SUCCESSIVE_PIGGYBACK_ON_ERROR:'batch-successive-piggyback-retry',
BATCH_DEFERRED_MULTI:'batch-deferred-multi',
BATCH_CONDITIONAL:'batch-conditional',


DEFAULT_ENDPOINT_ID:'mercuryServerDispatcherDefaultEndpointID',

registerEndpoints:function n(o){
for(var p in o){
var q=o[p],
r=q.request_user_id||c('CurrentUser').getID(),
s=
q.endpoint_id||k.DEFAULT_ENDPOINT_ID;

if(!h[p])
h[p]={};

if(!h[p][r])
h[p][r]={};


h[p][r][s]=
new l
(p,
q);}},




trySend:function n(o,p,q,r,s){
r=r||c('CurrentUser').getID();
s=s||k.DEFAULT_ENDPOINT_ID;
h[o][r][s].
trySend(p,q);}};



function l(n,o){
var p=o.mode||k.IMMEDIATE;

switch(p){
case k.IMMEDIATE:
case k.IDEMPOTENT:
case k.BATCH_SUCCESSIVE:
case k.BATCH_SUCCESSIVE_UNIQUE:
case k.BATCH_SUCCESSIVE_PIGGYBACK_ON_ERROR:
case k.BATCH_DEFERRED_MULTI:
case k.BATCH_CONDITIONAL:
break;

default:throw new Error('Invalid MercuryServerDispatcher mode '+p);}


this._endpoint=n;
this._mode=p;
this._customHeader=o.customHeader;
this._requestUserID=o.request_user_id;

this._combineData=o.batch_function;
this._combineDataIf=o.batch_if;
this._batches=[];

this._handler=o.handler;

this._errorHandler=o.error_handler;
this._transportErrorHandler=
o.transport_error_handler||o.error_handler;
this._connectionRetries=o.connection_retries||0;
this._timeoutHandler=o.timeout_handler;
this._timeout=o.timeout;
this._serverDialogCancelHandler=
o.server_dialog_cancel_handler||o.error_handler;

this._deferredSend=c('debounceAcrossTransitions')(this._batchSend,0,this);}


Object.assign(l.prototype,
{_inFlight:0,
_handler:null,
_errorHandler:null,
_transportErrorHandler:null,
_timeoutHandler:null,
_timeout:null,
_serverDialogCancelHandler:null,
_combineData:null,













trySend:function n(o,p){
if(j)
return;


if(o===undefined)
o=null;


var q=p||this._mode;
if(q==k.IMMEDIATE){
this._send(o);}else
if(q==k.IDEMPOTENT){
if(!this._inFlight)
this._send(o);}else

if(q==k.BATCH_SUCCESSIVE||
q==k.BATCH_SUCCESSIVE_UNIQUE){
if(!this._inFlight){
this._send(o);}else 

this._batchData(o);}else

if(q==k.BATCH_CONDITIONAL){





var r=this._batches[0]&&this._batches[0].getData();
if(this._inFlight&&
(this._combineDataIf(this._pendingRequestData,o)||
this._combineDataIf(r,o))){
this._batchData(o);}else 

this._send(o);}else

if(q==k.BATCH_DEFERRED_MULTI){
this._batchData(o);
this._deferredSend();}else
if(q==k.BATCH_SUCCESSIVE_PIGGYBACK_ON_ERROR){


this._batchData(o);
if(!this._inFlight)
this._batchSend();}},




_send:function n(o){var p,q=this;
this._inFlight++;
this._pendingRequestData=babelHelpers['extends']({},
o);





if(this._requestUserID!=c('CurrentUser').getID())
o.request_user_id=this._requestUserID;


i.log('send',JSON.stringify
({endpoint:this._endpoint,
inflight_count:this._inFlight}));


var r=c('performanceAbsoluteNow')(),

s=new (c('AsyncRequest'))(this._endpoint).
setData(o).
setOption('retries',this._connectionRetries).
setAllowCrossPageTransition(true);
if(this._customHeader)
s.setRequestHeader
(this._customHeader.name,
this._customHeader.value);



if(this._endpoint===c('MercuryServerURIs').THREAD_INFO&&
c('MercuryConfig').SulfurThreadFetcher){var p=function(){
var t=c('getByPath')(o,['threads','user_ids'],[]),
u=c('getByPath')(o,['threads','thread_fbids'],[]),
v=o.request_user_id&&
!c('FBID').isUser(o.request_user_id);
c('Bootloader').loadModules
(["messengerGraphQLThreadFetcherRe"],
function(w){
var x=t.map(function(z){return v?
w.forIDCanonicalWithPageAsActor
(z,
o.request_user_id):

w.forIDCanonical(z);}),

y=u.map(function(z){return v?
w.forIDNonCanonicalWithPageAsActor
(z,
o.request_user_id):

w.forIDNonCanonical(z);});

c('Promise').all
([s.exec()].concat
(x,
y)).
done
(function(z){var aa=z[0],ba=z.slice(1);

if(ba.length>0){
aa.payload.threads=
ba.map(function(ca){return ca.thread;}).filter(Boolean);
aa.payload.end_of_history=
ba.map(function(ca){return ca.end_of_history;}).filter(Boolean);}

this._handleResponse(aa);}.
bind(this),
function(z){
if(typeof z.getRequest!=='function')



z=new (c('AsyncResponse'))(s,null);

this._handleError(z);}.
bind(this));}.

bind(q),'MercuryServerDispatcher');

return {v:void 0};}();if(typeof p==="object")return p.v;}


s.
setHandler(function(t){
c('BanzaiLogger').log('ChatPerfLoggerConfig',
{event:c('ChatPerfEvent').ASYNC_REQUEST,
duration:c('performanceAbsoluteNow')()-r,
endpoint:this._endpoint});

this._handleResponse(t);}.
bind(this)).
setErrorHandler(this._handleError.bind(this)).
setTransportErrorHandler(this._handleTransportError.bind(this)).
setServerDialogCancelHandler(this._handleServerDialogCancel.bind(this));
if(this._timeout&&this._timeoutHandler)
s.setTimeoutHandler
(this._timeout,
this._handleTimeout.bind(this));


s.send();},


_batchData:function n(o,p){
if(this._mode==k.BATCH_SUCCESSIVE_UNIQUE&&
this._pendingRequestData!==undefined&&
c('areJSONRepresentationsEqual')(o,this._pendingRequestData)){



return;}else{

var q=this._batches.length-1;
if(q>=0){

p?
this._batches[q].combineWithOlder(o,this._combineData):
this._batches[q].combineWith(o,this._combineData);}else 



this._batches.push(new m(o));


i.debug('batch',JSON.stringify
({endpoint:this._endpoint}));}},




_batchSend:function n(){
if(this._batches[0]){
this._send(this._batches[0].getData());
this._batches.shift();}},



_handleResponse:function n(o){
this._inFlight--;
i.log('response',JSON.stringify
({endpoint:this._endpoint,
inflight_count:this._inFlight}));


var p=o.getPayload();
j=p&&p.kill_chat;
if(j)
i.log('killswitch_enabled',JSON.stringify
({endpoint:this._endpoint,
inflight_count:this._inFlight}));



if(p&&p.error_payload){
if(this._errorHandler)
this._errorHandler(o);}else 






this._handler&&this._handler(p,o.getRequest());


if(this._mode==k.BATCH_SUCCESSIVE||
this._mode==k.BATCH_SUCCESSIVE_UNIQUE||
this._mode==k.BATCH_SUCCESSIVE_PIGGYBACK_ON_ERROR||
this._mode==k.BATCH_CONDITIONAL)
this._batchSend();


delete this._pendingRequestData;},


_postErrorHandler:function n(){
this._inFlight--;
i.error('error',JSON.stringify
({endpoint:this._endpoint,
inflight_count:this._inFlight}));


var o=this._mode;
if(o==k.BATCH_SUCCESSIVE||
o==k.BATCH_SUCCESSIVE_UNIQUE||
o==k.BATCH_CONDITIONAL){
this._batchSend();}else
if(o==k.BATCH_SUCCESSIVE_PIGGYBACK_ON_ERROR)



if(this._batches[0]){
this._batchData(this._pendingRequestData,true);
this._batchSend();}else 

this._batchData(this._pendingRequestData,true);



delete this._pendingRequestData;},


_handleError:function n(o){
this._errorHandler&&this._errorHandler(o);
this._postErrorHandler();},


_handleTransportError:function n(o){
this._transportErrorHandler&&this._transportErrorHandler(o);
this._postErrorHandler();},


_handleTimeout:function n(o){
this._timeoutHandler&&this._timeoutHandler(o);
this._postErrorHandler();},


_handleServerDialogCancel:function n(o){
this._serverDialogCancelHandler&&
this._serverDialogCancelHandler(o);
this._postErrorHandler();}});




function m(n){
this._data=n;
this._size=1;}


Object.assign(m.prototype,
{getData:function n(){
return this._data;},


getSize:function n(){
return this._size;},


combineWith:function n(o,p){
this._data=p(this._data,o);
this._size++;},


combineWithOlder:function n(o,p){
this._data=p(o,this._data);
this._size++;}});



f.exports=k;}),null);

/** js/react_composer/utils/ReactComposerEvents.js */





__d('ReactComposerEvents',[],(function a(b,c,d,e,f,g){

var h=
{CHANGE:'change',
INSTANCE_MOUNTED:'composer/instanceMounted/',
ACTIVATE_ATTACHMENT:'composer/activateAttachment/',
MENTION_INPUT_FOCUS:'composer/mentionInputFocused/',
TEXT_PREFILL_BEFORE_BOOTLOAD:'composer/textPrefillBeforeBootload/',
RERENDER_MENTION_INPUT:'reactComposer/rerenderMentionInput/',
OPTIMISTIC_POSTING_STARTED:'composer/optimisticPostingStarted/',
POST_STARTED:'composer/postStarted/',
POST_SUCCEEDED:'composer/postSucceeded/',
COMPOSER_RESET:'composer/reset/',
COMPOSER_UNMOUNT:'composer/unmount/',
SET_PREFILL_DATA:'reactComposer/setPrefillData/'};


f.exports=h;}),null);

/** js/react_composer/utils/ReactComposerIDGenerator.js */





__d('ReactComposerIDGenerator',['ReactComposerConstants','uniqueID'],(function a(b,c,d,e,f,g){

'use strict';











var h=
{getID:function i(){
return c('ReactComposerConstants').ID_PREFIX+c('uniqueID')();},


isComposerID:function i(j){
return !!j&&j.startsWith(c('ReactComposerConstants').ID_PREFIX);}};



f.exports=h;}),null);

/** js/stream/fbfeed/FbFeedHighlight.js */




__d('FbFeedHighlight',['cx','JSXDOM','CSS','DOM','DOMScroll'],(function a(b,c,d,e,f,g,h){









var i=1000,

j=1000,

k=null;

function l(){

return (c('JSXDOM').div({className:"_1usz"},
c('JSXDOM').div({className:"_1us-"}),
c('JSXDOM').div({className:"_1us_"}),
c('JSXDOM').div({className:"_1ut0"}),
c('JSXDOM').div({className:"_1ut1"})));}




var m=


{highlightAndScrollTo:function n(o){
m.highlightAndScrollToWithTime
(o,
j,
0);},




highlightAndScrollToWithTime:function n
(o,
p,
q){

m.highlightWithTime(o,p);
m.scrollTo(o,q);},


highlightSingle:function n(o){
m.highlightSingleWithTime(o,j);},


highlightSingleWithTime:function n(o,p){
var q=l();
c('DOM').appendContent(o,q);

setTimeout
(function(){
if(k)
c('DOM').remove(k);

k=q;
c('CSS').addClass(o,"_1ut2");},

0);

setTimeout(function(){
c('CSS').removeClass(o,"_1ut2");


setTimeout(function(){
c('DOM').remove(q);
if(q==k)
k=null;},

i+p);},
i+p);},



highlight:function n(o){
m.highlightWithTime(o,j);},


highlightWithTime:function n(o,p){
var q=m.highlightPermanent(o);
setTimeout(function(){
c('CSS').removeClass(o,"_1ut2");


setTimeout(c('DOM').remove.bind(null,q),i+i);},
i+p);},




highlightPermanent:function n(o){
var p=l();
c('DOM').appendContent(o,p);

setTimeout
(c('CSS').addClass.bind(null,o,"_1ut2"),
0);

return p;},



scrollTo:function n(o,p){var q=arguments.length<=2||arguments[2]===undefined?0:arguments[2];
setTimeout(c('DOMScroll').scrollTo.bind
(null,
o,
750,
false,
false,
p),
q);}};




f.exports=m;}),null);

/** shared/core/escapeRegex.js */




__d('escapeRegex',[],(function a(b,c,d,e,f,g){





function h(i){

return i.replace(/([.?*+\^$\[\]\\(){}|\-])/g,'\\$1');}


f.exports=h;}),null);

/** shared/intl/intlNumUtils.js */






__d('intlNumUtils',['NumberFormatConfig','escapeRegex'],(function a(b,c,d,e,f,g){





var h=/(\d)(\d\d\d)($|\D)/,
i=3,


j=

{'\u060C':'.',
'\u0660':'0',
'\u0661':'1',
'\u0662':'2',
'\u0663':'3',
'\u0664':'4',
'\u0665':'5',
'\u0666':'6',
'\u0667':'7',
'\u0668':'8',
'\u0669':'9',
'\u066B':'.',


'\u06F0':'0',
'\u06F1':'1',
'\u06F2':'2',
'\u06F3':'3',
'\u06F4':'4',
'\u06F5':'5',
'\u06F6':'6',
'\u06F7':'7',
'\u06F8':'8',
'\u06F9':'9'},


k=
['\u0433\u0440\u043d.',
'\u0434\u0435\u043d.',
'\u043b\u0432.',
'\u043c\u0430\u043d.',
'\u0564\u0580.',
'\u062c.\u0645.',
'\u062f.\u0625.',
'\u062f.\u0627.',
'\u062f.\u0628.',
'\u062f.\u062a.',
'\u062f.\u062c.',
'\u062f.\u0639.',
'\u062f.\u0643.',
'\u062f.\u0644.',
'\u062f.\u0645.',
'\u0631.\u0633.',
'\u0631.\u0639.',
'\u0631.\u0642.',
'\u0631.\u064a.',
'\u0644.\u0633.',
'\u0644.\u0644.',
'\u0783.',
'B/.',
'Bs.',
'Fr.',
'kr.',
'L.',
'p.',
'S/.'],


l={};
function m(ca){
if(!l[ca])
l[ca]=new RegExp
(ca,
'i');


return l[ca];}


var n=m(k.reduce
(function(ca,da,ea){
return ca+(ea?'|':'')+'('+c('escapeRegex')(da)+')';},

''));









function o
(ca,
da,
ea,
fa,
ga,
ha,
ia){

ea=ea||'';
fa=fa||'.';
ga=ga||0;
ha=ha||
{primaryGroupSize:i,
secondaryGroupSize:i};

var ja=
ha.primaryGroupSize||i,
ka=
ha.secondaryGroupSize||ja,

la=ia&&ia.digits;
if(da===undefined||da===null){
ca=ca.toString();}else
if(typeof ca==='string'){
ca=v(ca,da);}else 

ca=t(ca,da);


var ma=ca.split('.'),
na=ma[0],
oa=ma[1];

if(Math.abs(parseInt(na,10)).toString().length>=
ga){
var pa='',
qa='$1'+ea+'$2$3';
if(c('NumberFormatConfig').switchImplementationGK){
var ra='(\\d)(\\d{'+
(ja-0)+
'})($|\\D)';
pa=na.replace(m(ra),qa);
if(pa!=na){
na=pa;
var sa='(\\d)(\\d{'+
(ka-0)+
'})('+
c('escapeRegex')(ea)+
')',
ta=m(sa);
while((pa=na.replace(ta,qa))!=
na)
na=pa;}}else 



while((pa=na.replace(h,qa))!=
na)
na=pa;}



if(la&&c('NumberFormatConfig').switchImplementationGK){
na=p(na,la);
oa=oa&&p(oa,la);}


var ua=na;
if(oa)
ua+=fa+oa;


return ua;}


function p(ca,da){
var ea='';
for(var fa=0;fa<ca.length;++fa){
var ga=da[ca.charCodeAt(fa)-48];
ea+=ga!==undefined?ga:ca[fa];}

return ea;}













function q
(ca,
da){

return o
(ca,
da,
'',
c('NumberFormatConfig').decimalSeparator,
c('NumberFormatConfig').minDigitsForThousandsSeparator,
c('NumberFormatConfig').standardDecimalPatternInfo,
c('NumberFormatConfig').numberingSystemData);}














function r
(ca,
da){

return o
(ca,
da,
c('NumberFormatConfig').numberDelimiter,
c('NumberFormatConfig').decimalSeparator,
c('NumberFormatConfig').minDigitsForThousandsSeparator,
c('NumberFormatConfig').standardDecimalPatternInfo,
c('NumberFormatConfig').numberingSystemData);}




















function s
(ca,
da,
ea){


var fa=Math.floor(Math.log(ca)/Math.LN10),
ga=ca;
if(fa<ea)
ga=ca*Math.pow(10,-fa+ea);


var ha=Math.pow
(10,
Math.floor(Math.log(ga)/Math.LN10)-ea+1),

ia=Math.round(ga/ha)*ha;

if(fa<ea)
ia/=Math.pow(10,-fa+ea);


return r(ia,da);}



function t(ca,da){
var ea=da==null?0:da,
fa=Math.pow(10,ea),
ga=ca;
ga=Math.round(ga*fa)/fa;
ga=ga+'';
if(!ea)
return ga;


var ha=ga.indexOf('.'),
ia=0;
if(ha==-1){
ga+='.';
ia=ea;}else 

ia=ea-(ga.length-ha-1);

for(var ja=0,ka=ia;ja<ka;ja++)
ga+='0';

return ga;}


var u=function ca(da,ea){
for(var fa=0;fa<ea;fa++)
da+='0';

return da;};


function v
(ca,
da){

var ea=ca.indexOf('.'),
fa=ea===-1?
ca:
ca.slice(0,ea),
ga=ea===-1?
'':
ca.slice(ea+1);

return da?
fa+'.'+
u(ga.slice(0,da),da-ga.length):
fa;}


var w={},
x=function ca(da){
if(!w[da])
w[da]=new RegExp
('([^\\/p]|^)'+c('escapeRegex')(da)+'(\\d*).*',
'i');


return w[da];};













function y
(ca,
da,
ea){



ca=ca.
split('').
map(function(la){
return (Object.prototype.hasOwnProperty.call(j,la)?
j[la]:
la);}).

join('').
trim();

ca=ca.replace(/^[^\d]*\-/,'\u0002');
ca=ca.replace(n,'');

ea=ea||'';

var fa=c('escapeRegex')(da),
ga=c('escapeRegex')(ea),

ha=m
('^[^\\d]*\\d.*'+fa+'.*\\d[^\\d]*$');

if(!ha.test(ca)){
var ia=m
('(^[^\\d]*)'+fa+'(\\d*[^\\d]*$)');

if(ia.test(ca)){
ca=ca.replace(ia,'$1\u0001$2');
return z(ca);}

var ja=m
('^[^\\d]*[\\d '+c('escapeRegex')(ga)+']*[^\\d]*$');

if(!ja.test(ca))
ca='';

return z(ca);}

var ka=m
('(^[^\\d]*[\\d '+ga+']*)'+fa+'(\\d*[^\\d]*$)');

ca=ka.test(ca)?
ca.replace(ka,'$1\u0001$2'):
'';
return z(ca);}






function z(ca){
ca=ca.
replace(/[^0-9\u0001\u0002]/g,'').

replace('\u0001','.').
replace('\u0002','-');
var da=Number(ca);
return ca===''||isNaN(da)?null:da;}


function aa(ca){
return y
(ca,
c('NumberFormatConfig').decimalSeparator||'.',
c('NumberFormatConfig').numberDelimiter);}



var ba=

{formatNumber:q,
formatNumberRaw:o,
formatNumberWithThousandDelimiters:r,
formatNumberWithLimitedSigFig:s,
parseNumber:aa,
parseNumberRaw:y,









getFloatString:function ca
(da,
ea,
fa){

var ga=String(da),
ha=ga.split('.'),

ia=ba.getIntegerString(ha[0],ea);
if(ha.length===1)
return ia;


return ia+fa+ha[1];},










getIntegerString:function ca
(da,
ea){

if(ea==='')



ea=',';


var fa=String(da),
ga=/(\d+)(\d{3})/;
while(ga.test(fa))
fa=fa.replace(ga,'$1'+ea+'$2');

return fa;}};



f.exports=ba;}),null);

/** shared/lazy_component/LoadOnRender.react.js */





__d('LoadOnRender.react',['React','createCancelableFunction'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits
















(j,c('React').Component);i=h&&h.prototype;













function j(k){'use strict';
i.constructor.call(this,k);this.







$LoadOnRender_onComponentLoad=function(l){
this.setState({Component:l});}.
bind(this);this.state={Component:null,cancelableOnComponentLoad:c('createCancelableFunction')(this.$LoadOnRender_onComponentLoad)};}j.prototype.

componentWillMount=function(){'use strict';
this.props.loader(this.state.cancelableOnComponentLoad);};
j.prototype.

componentWillUnmount=function(){'use strict';


this.state.cancelableOnComponentLoad.cancel();};
j.prototype.

render=function(){'use strict';
var k=this.state.Component;
if(!k||this.props.forcePlaceholder)
return this.props.placeholder;

return c('React').cloneElement(this.props.component,
{LazyLoadedComponent:k});};

j.defaultProps={forcePlaceholder:false};


f.exports=j;}),null);

/** shared/lazy_component/BootloadOnRender.react.js */





__d('BootloadOnRender.react',['JSResource','LoadOnRender.react','React'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits














(j,c('React').Component);i=h&&h.prototype;function j(){var k,l;'use strict';for(var m=arguments.length,n=Array(m),o=0;o<m;o++)n[o]=arguments[o];return l=(k=i.constructor).call.apply(k,[this].concat(n)),this.




$BootloadOnRender_loader=function(p){
c('JSResource').loadAll([this.props.loader],p);}.
bind(this),l;}j.prototype.

render=function(){'use strict';

return (c('React').createElement(c('LoadOnRender.react'),
{placeholder:this.props.placeholder,
loader:this.$BootloadOnRender_loader,
component:this.props.component}));};





f.exports=j;}),null);

/** shared/react_contrib/isReactClassComponent.js */





__d('isReactClassComponent',[],(function a(b,c,d,e,f,g){





function h(i){
return Boolean
(typeof i==='function'&&
i.prototype&&
i.prototype.isReactComponent);}



f.exports=h;}),null);

/** shared/lazy_component/LazyComponent.react.js */





__d('LazyComponent.react',['React','isReactClassComponent'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits






(j,c('React').Component);i=h&&h.prototype;j.prototype.















getComponent=function(){'use strict';
return this.$LazyComponent_component;};
j.prototype.

render=function(){'use strict';var k=
this.props,l=k.LazyLoadedComponent,m=babelHelpers.objectWithoutProperties(k,['LazyLoadedComponent']),
n=c('isReactClassComponent')(l)?
function(o){return this.$LazyComponent_component=o;}.bind(this):
null;
return c('React').createElement(l,babelHelpers['extends']({ref:n},m));};
function j(){'use strict';h.apply(this,arguments);}j.defaultProps={LazyLoadedComponent:function k(){return null;}};


f.exports=j;}),null);
