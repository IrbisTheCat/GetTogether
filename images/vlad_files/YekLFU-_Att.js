if (self.CavalryLogger) { CavalryLogger.start_js(["2vINO"]); }

/** js/mercury/clients/rtc/FBRTCAvailability.js */








__d('FBRTCAvailability',['ChannelConstants','PresenceStatus'],(function a(b,c,d,e,f,g){

'use strict';




var h=



{isCallable:function i(j){
var k=c('PresenceStatus').getCapabilities(j),
l=c('ChannelConstants').CAPABILITY_VOIP_INTEROP;
return !!(k&l);}};



f.exports=h;}),null);

/** js/mercury/clients/rtc/actions/FBRTCCallActions.js */






__d('FBRTCCallActions',['FBRTCDispatcher','keyMirror'],(function a(b,c,d,e,f,g){

'use strict';





var h=c('keyMirror')
({START_CALL:null}),


i=
{Types:h,

startCall:function j
(k,
l,
m,
n){

c('FBRTCDispatcher').dispatch
({type:h.START_CALL,
peerID:k,
callID:l,
isCaller:m,
audioOnly:n});}};




f.exports=i;}),null);

/** js/mercury/clients/rtc/FBRTCConfig.js */






__d('FBRTCConfig',['RTCSignalingExperiments'],(function a(b,c,d,e,f,g){



var h={},
i,
j=0,

k=







{setConfig:function l(m,n,o,p){
h=m;
j=n;
i=p;},


isVCEndpointCall:function l(){
return i;},


getPeerID:function l(){
return j;},


statsInterpreterConfig:function l(){

return {rtt_weight:2,
frr_weight:800,
plr_weight:500,
score_threshold:1000,
bad_score_count:3};},



settingsEnabled:function l(){
return h.enable_settings;},







shouldAutoDisableVideo:function l(){
return false;},


unsupportedBrowserUrl:function l(){
if(h.troubleshooting_urls&&
h.troubleshooting_urls.unsupported_browser)
return h.troubleshooting_urls.unsupported_browser;

return 'https://www.facebook.com/help/211644178877843';},


userMediaErrorUrl:function l(){
if(h.troubleshooting_urls&&
h.troubleshooting_urls.user_media_error)
return h.troubleshooting_urls.user_media_error;

return 'https://www.facebook.com/help/232232800134371';},


userMediaPermissionErrorUrl:function l(){
if(h.troubleshooting_urls&&
h.troubleshooting_urls.user_media_permission_error)
return h.troubleshooting_urls.user_media_permission_error;

return 'https://www.facebook.com/help/232232800134371';},






supportedSignalingExperiments:function l(){
return c('RTCSignalingExperiments').getLocal();},





isMessengerDotCom:function l(){
return h.is_messenger_dot_com;},





useMessengerCallUI:function l(){
return h.messenger_call_ui;},





shouldCreateDataChannel:function l(){
return h.data_channel;},





disableURLManager:function l(){
return h.disable_url_manager;},





useCurrentWindow:function l(){
return h.use_current_window;}};



f.exports=k;}),null);

/** js/mercury/clients/rtc/FBRTCStruct.js */






__d('FBRTCStruct',[],(function a(b,c,d,e,f,g){









var h=function j(k,l,m){
var n,
o;

if(typeof k=='string'||k instanceof String){
o=k;
n=k;}else 


for(var p in k)
if(Object.prototype.hasOwnProperty.call(k,p))
if(p==='index'){
m=k[p];}else{

o=p;
n=k[p];}




l[o]=m;
l.strNames[m]=n;};































function i(j){'use strict';
this.strNames=[];
for(var k=0;k<j.length;k++)
h(j[k],this,k);}




f.exports=i;}),null);

/** js/mercury/clients/rtc/FBRTCConstants.js */









__d('FBRTCConstants',['FBRTCStruct','keyMirror'],(function a(b,c,d,e,f,g){




var h=
{OFFER:'offer',
ANSWER:'answer',
ICE_CANDIDATE:'ice_candidate',
OK:'ok',
PING:'ping',
PING_ACK:'ping_ack',
HANGUP:'hang_up',
OTHER_DISMISS:'other_dismiss',
MSG_ACK:'msg_ack',
PRANSWER:'pranswer',
ICERESTART_OFFER:'icerestart_offer',
ICERESTART_ANSWER:'icerestart_answer',
PCRESTART_OFFER:'pcrestart_offer',
PCRESTART_ANSWER:'pcrestart_answer',
SDP_UPDATE:'sdp_update',
OFFER_ACK:'offer_ack',
OFFER_NACK:'offer_nack',
ANSWER_ACK:'answer_ack',
SET_VIDEO:'set_video',
VIDEO_REQUEST:'video_request',
ACK:'ack'},


i=
{CHILD_WINDOW_READY:'rtc_child_window_ready',
CHILD_WINDOW_START_CALL:'rtc_child_window_start_call',
CHILD_WINDOW_MESSAGE:'rtc_child_window_message'},


j=
{LL_NONE:0,
LL_BASIC:1,
LL_DEBUG:2,
LL_WARNING:3,
LL_INFO:4,
LL_VERBOSE:5},


k=
{AUDIO_ONLY:'audio_only',
AUDIO_VIDEO:'audio_video',
SCREEN_CONTENT:'screen'},



l=c('keyMirror')
({NO_VIDEO:null,
LQ_VIDEO:null,
SD_VIDEO:null,
HD_VIDEO:null,
FHD_VIDEO:null,
CUSTOM_VIDEO:null}),



m=new (c('FBRTCStruct'))
([{IGNORE_CALL:'IgnoreCall'},
{HANGUP_CALL:'HangupCall'},
{IN_ANOTHER_CALL:'InAnotherCall'},
{ACCEPT_AFTER_HANGUP:'CallEndAcceptAfterHangUp'},
{NO_ANSWER_TIMEOUT:'NoAnswerTimeout'},
{INCOMING_TIMEOUT:'IncomingTimeout'},
{OTHER_INSTANCE_HANDLED:'OtherInstanceHandled'},
{SIGNALING_MESSAGE_FAILED:'SignalingMessageFailed'},
{CONNECTION_DROPPED:'ConnectionDropped'},
{CLIENT_INTERRUPTED:'ClientInterrupted'},
{WEBRTC_ERROR:'WebRTCError'},
{CLIENT_ERROR:'ClientError'},
{NO_PERMISSION:'NoPermission'},
{OTHER_NOT_CAPABLE:'OtherNotCapable'},
{NO_UI_ERROR:'NoUIShown'},
{UNSUPPORTED_VERSION:'VersionUnsupported'},
{CALLER_NOT_VISIBLE:'CallerNotVisible'},
{CARRIER_BLOCKED:'CarrierBlocked'},
{OTHER_CARRIER_BLOCKED:'OtherCarrierBlocked'}]),


n=
{REMOTE_PEER_HANGUP:'CollabRemotePeerHangup',
REMOTE_PEER_REJECT:'CollabRemotePeerReject',
CLOSED_BY_MCU:'CollabClosedByMcu',
CLOSED_AS_STALE:'CollabClosedAsStale',
CALL_INITIALIZATION_FAILED:'CollabCallInitializationFailed',
SIP_CONNECTION_INITIALIZATION_FAILED:
'CollabSipConnectionInitializationFailed',
LOST_MCU_CONNECTION:'CollabLostMcuConnection',
MCU_NO_AUDIO_STREAM:'CollabMcuNoAudioStream',
MCU_INVALID_STREAM_CONFIGURATION:'CollabMcuInvalidStreamConfiguration',
LOST_MCU_THRIFT_CONNECTION:'CollabLostMcuThriftConnection',
LOST_SIP_ADAPTER_THRIFT_CONNECTION:'CollabLostSipAdapterThriftConnection',
UNKNOWN:'CollabUnknown'},


o=
{TOGGLE_SELF_VIEW:5,
SUBMIT_STAR_RATING:6,
SUBMIT_FEEDBACK:7,
START_CALL:9,
OPEN_SCREEN_IN_NEW:10},


p=
{ONE_HOUR:'1hour',
UNTIL_EIGHT_AM:'8am',
ALWAYS:'always'},


q=c('keyMirror')
({VIDEO:null,
AUDIO:null,
SCREEN_SHARE:null}),


r=
{MULTIWAY:'multiway',
P2P:'p2p'},



s=
{NEW:'new',
CHECKING:'checking',
CONNECTED:'connected',
completed:'completed',
FAILED:'failed',
DISCONNECTED:'disconnected',
CLOSED:'closed'},


t=c('keyMirror')
({DOMINANT_SPEAKER:null,
GRID:null,
ONE_TO_ONE:null,
STRIP:null}),


u=
{PayloadType:h,
ChildWindowMessageType:i,
UploadLogLevel:j,
StreamType:k,
VideoQuality:l,
CallEndReason:m,
CollabCallEndSubreason:n,
UIEventType:o,
CallBlockingConstants:p,
IncomingCallDialogTypes:q,
SignalingProtocol:r,
IceConnectionState:s,
GroupVideoViewLayout:t,

convertFromUploadLogLevel:function v(w){
switch(w){
case j.LL_DEBUG:
return 'd';
case j.LL_BASIC:
return 'b';
case j.LL_WARNING:
return 'w';
case j.LL_INFO:
return 'i';
case j.LL_VERBOSE:
return 'v';
case j.LL_NONE:

default:return null;}},



convertToUploadLogLevel:function v(w){
switch(w){
case 'd':
return j.LL_DEBUG;
case 'b':
return j.LL_BASIC;
case 'w':
return j.LL_WARNING;
case 'i':
return j.LL_INFO;
case 'v':
return j.LL_VERBOSE;

default:return j.LL_NONE;}},



uploadLogLevelString:function v(w){
switch(w){
case j.LL_BASIC:
return 'basic';
case j.LL_DEBUG:
return 'debug';
case j.LL_WARNING:
return 'warning';
case j.LL_INFO:
return 'info';
case j.LL_VERBOSE:
return 'verbose';

default:return '';}},



endCallReasonFromString:function v(w){
return m.strNames.indexOf(w);},


callEndReasonString:function v(w){
if(w<0||w>m.strNames.length)
return 'Unknown';

return m.strNames[w];},


fullCallEndReasonString:function v(w,x){
return this.callEndReasonString(w)+'_'+
(x?'remote':'local');}};



f.exports=u;}),null);

/** js/mercury/clients/rtc/FBRTCVersionDetection.js */






__d("FBRTCVersionDetection",[],(function a(b,c,d,e,f,g){

var h=

{isChrome:function i(){
return !!navigator.webkitGetUserMedia;},


isFirefox:function i(){
return !!navigator.mozGetUserMedia;},


webrtcVersion:function i(){
if(this.isFirefox())
return parseInt(navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1],10);

if(this.isChrome()){
var j=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
if(j!==null){
return parseInt(j[2],10);}else 


return 999;}



return 0;}};




f.exports=h;}),null);

/** js/mercury/clients/rtc/FBRTCUtils.js */






__d('FBRTCUtils',['emptyFunction','randomInt','AsyncRequest','CurrentUser','FBID','FBRTCConfig','FBRTCConstants','FBRTCVersionDetection','RTCConfig','UserAgent'],(function a(b,c,d,e,f,g){












var h=6000,

i=window.URL||window.webkitURL,
j=
typeof document.createElement('video').setSinkId==='function',


k=

{attachMediaStream:function l(m,n){
if(window.webkitRTCPeerConnection){
if(m.src)

i.revokeObjectURL(m.src);

if(n){
m.src=i.createObjectURL(n);}else 

m.src='';}else{


m.mozSrcObject=n;
if(n)
m.play();}},




reattachMediaStream:function l(m,n){
if(window.webkitRTCPeerConnection){
m.src=n.src;}else{

m.mozSrcObject=n.mozSrcObject;
m.play();}},






generateRandomInt:function l(){
return c('randomInt')(0,4294967294)+1;},





aboutEqual:function l(m,n){
return m-n<.01&&n-m<.01;},


getUploadLogLevel:function l(m){
return Math.max(this.getLocalUploadLogLevel(),m);},


getLocalUploadLogLevel:function l(){
return c('CurrentUser').isEmployee()?
c('FBRTCConstants').UploadLogLevel.LL_DEBUG:
c('FBRTCConstants').UploadLogLevel.LL_NONE;},





sendServerRequest:function l
(m,
n,
o,
p,
q,
r){

n=n||c('emptyFunction');
o=o||c('emptyFunction');
p=p||false;
q=q||h;
r=r||{};

var s=new (c('AsyncRequest'))().
setURI(m).
setData(r).
setAllowCrossPageTransition(true).
setHandler(n).
setErrorHandler(o).
setTimeoutHandler
(q,
function(){
o();});


if(p)
s.setOption('asynchronous_DEPRECATED',false);


s.send();},






supportsMultipleStreamsPlanB:function l(){
return (c('UserAgent').isBrowser('Chrome')||c('UserAgent').isBrowser('Opera'))&&
c('FBRTCVersionDetection').webrtcVersion()>=34;},





supportsSetSink:function l(){
return j;},







isPeerVCEndpoint:function l(m){
var n=c('FBRTCConfig').isVCEndpointCall();
return n!==undefined?
n:
m&&!c('FBID').isUser(m)&&
c('RTCConfig').CollabVCEndpointsVideoCallGK;}};



f.exports=k;}),null);

/** js/mercury/clients/rtc/screen_sharing/FBRTCScreenSharingLogger.js */









__d('FBRTCScreenSharingLogger',['Log','MarauderLogger','formatDate','keyMirror'],(function a(b,c,d,e,f,g){

'use strict';







var h='webrtc_screen_sharing',

i=c('keyMirror')
({P2P_VIDEO_CALL:null,
DIRECT_SCREEN_SHARING:null}),



j=c('keyMirror')
({screen_sharing_action:null,
screen_sharing_error:null}),



k=c('keyMirror')
({PEER_ID:null,
SESSION_ID:null,
CONTEXT_TYPE:null,
CONTENT:null}),


l=c('keyMirror')
({SCREEN_SHARING_TOGGLED:null,
SCREEN_SHARING_CANCELLED:null,
SCREEN_SHARING_ENABLED:null,
SCREEN_SHARING_DISABLED:null,
SCREEN_SHARING_EXT_DIALOG:null,
SCREEN_SHARING_EXT_LINK:null,
SCREEN_SHARING_DIALOG_SUCCESS:null,
SCREEN_SHARING_DIALOG_CANCEL:null}),


m=null;n.








getInstance=function(){
if(!m)
m=new n();

return m;};
n.prototype.




logAction=
function(o,
p,
q,
r,
s){

var t={};
t[j.screen_sharing_action]=q;

t[k.PEER_ID]=o;
t[k.SESSION_ID]=p;
t[k.CONTEXT_TYPE]=this.$FBRTCScreenSharingLogger_getContextType(r);
t[k.CONTENT]=s;

this.$FBRTCScreenSharingLogger_log(j.screen_sharing_action,t);
this.logToConsole(o,p,q);};
n.prototype.




logError=
function(o,
p,
q,
r){

var s={};
s[k.PEER_ID]=o;
s[k.SESSION_ID]=p;
s[k.CONTEXT_TYPE]=this.$FBRTCScreenSharingLogger_getContextType(q);
s[k.CONTENT]=r;

this.$FBRTCScreenSharingLogger_log(j.screen_sharing_error,s);
this.logToConsole(o,p,r);};
n.prototype.

logToConsole=function(o,p,q){













};n.prototype.

$FBRTCScreenSharingLogger_getContextType=function(o){
return o?
i.DIRECT_SCREEN_SHARING:i.P2P_VIDEO_CALL;};
n.prototype.


$FBRTCScreenSharingLogger_log=function(o,p){
c('MarauderLogger').log
(o,
h,
p);};

function n(){}


n.Action=l;

f.exports=n;}),null);

/** js/mercury/clients/rtc/FBRTCSupport.js */







__d('FBRTCSupport',['ChannelConstants','RTCConfig','UserAgent'],(function a(b,c,d,e,f,g){





var h=




{isSendWebrtcSupported:function i(){
return c('RTCConfig').SendNewVCGK;},





isReceiveWebrtcSupported:function i(){
return c('RTCConfig').ReceiveNewVCGK;},





isVideoInteropSupported:function i(){
return c('RTCConfig').VideoInteropGK;},





isVideoCallBlockingSupported:function i(){
return c('RTCConfig').VideoCallBlockingGK;},





isWebrtcSupported:function i(){

return (c('UserAgent').isBrowser('Chrome >= 28')||
c('UserAgent').isBrowser('Firefox >= 25')||
c('RTCConfig').RtcUseWebRTCForEdge&&
c('UserAgent').isBrowser('Edge >= 15.15042')||
c('UserAgent').isBrowser('Opera >= 20'));},



isGroupCallWebtrcSupported:function i(){

return (c('UserAgent').isBrowser('Chrome >= 28')||
c('UserAgent').isBrowser('Opera >= 20'));},






isCollabSupported:function i(){
return c('RTCConfig').CollabWhitelistedBrowserGK||
c('UserAgent').isBrowser('Chrome >= 48');},





isOSSupported:function i(){
return !c('UserAgent').isPlatform('Android')&&!c('UserAgent').isPlatform('iOS');},





getCapabilities:function i(){
var j=0;
if(this.isReceiveWebrtcSupported())

j=c('ChannelConstants').CAPABILITY_VOIP_INTEROP;

return j;}};



f.exports=h;}),null);

/** js/mercury/clients/rtc/screen_sharing/FBRTCScreenSharingUtils.js */









__d('FBRTCScreenSharingUtils',['Promise','FBRTCScreenSharingLogger','FBRTCStruct','FBRTCVersionDetection','RTCConfig','FBRTCSupport'],(function a(b,c,d,e,f,g){

'use strict';







var h=new (c('FBRTCStruct'))
(['UNKNOWN',
'INSTALLED']),


i=h.UNKNOWN,

j=
{RECIPIENT:'SC_CONTENT_SCRIPT',




isScreenSharingSupported:function k(){
return c('RTCConfig').ScreenSharingGK;},





isSupportedBrowser:function k(){
return c('FBRTCVersionDetection').isChrome()&&
c('FBRTCVersionDetection').webrtcVersion()>=34;},





canUserReceiveScreenSharing:function k(){
return c('RTCConfig').ReceiveScreenGK&&
c('FBRTCSupport').isOSSupported()&&
j.isSupportedBrowser();},





isExtensionInstalled:function k(){
return i===h.INSTALLED;},


getExtensionStatus:function k(){
return i;},





checkExtensionInstalled:function k(){
if(this.isExtensionInstalled())
return c('Promise').resolve();


var l=void 0,




m=new (c('Promise'))(function(n){
l=function o(p){var q=p.origin,r=p.data;
if(q!=window.location.origin||!r.type)
return;


if(r.type==='SC_EXT_INSTALLED'){
window.removeEventListener('message',l);
i=h.INSTALLED;
n();}};



window.addEventListener('message',l);});


return c('Promise').race
([m,
this._pokeExtension()])['catch']

(function(n){
window.removeEventListener('message',l);

return c('Promise').reject(n);});},







_pokeExtension:function k(){var l=arguments.length<=0||arguments[0]===undefined?13:arguments[0];
return new (c('Promise'))(function(m,n){
var o=setInterval(function(){
setTimeout(function(){
if(i===h.UNKNOWN)
window.postMessage

({recipient:j.RECIPIENT,
type:'SC_IS_EXT_INSTALLED',
text:'is extension installed'},

'*');});




if(l>0){
l--;}else{

clearInterval(o);
n('extension unavailable');}},

200);});},






logFailedAttempt:function k(l,m){
c('FBRTCScreenSharingLogger').getInstance().logAction
(l,
m,
c('FBRTCScreenSharingLogger').Action.SCREEN_SHARING_TOGGLED,
this._isDirect,
'feature not available');}};




f.exports=j;}),null);

/** js/mercury/clients/rtc/groupcall/RTCSignalingExperiments.js */









__d('RTCSignalingExperiments',['FBRTCUtils','FBRTCScreenSharingUtils','Set','UserAgent'],(function a(b,c,d,e,f,g){

'use strict';
















function h(i){this.$RTCSignalingExperiments_remote=new (c('Set'))();
this.$RTCSignalingExperiments_local=new (c('Set'))(h.getLocal());
if(i)
this.$RTCSignalingExperiments_remote=new (c('Set'))(i);}

h.prototype.

getLocal=function(){
return Array.from(this.$RTCSignalingExperiments_local);};
h.prototype.

setRemote=function(i){
if(!i)
return this;

return new h(i);};
h.prototype.

getRemote=function(){
return Array.from(this.$RTCSignalingExperiments_remote);};
h.prototype.

support=function(i){
return this.localSupport(i)&&this.remoteSupport(i);};
h.prototype.

localSupport=function(i){
return this.$RTCSignalingExperiments_local.has(i);};
h.prototype.

remoteSupport=function(i){
return this.$RTCSignalingExperiments_remote.has(i);};
h.

getLocal=function(){
var i=[];

if(c('UserAgent').isBrowser('Chrome')||c('UserAgent').isBrowser('Opera'))
i.push('sdp_update');

if(c('FBRTCUtils').supportsMultipleStreamsPlanB())
i.push('multiple_streams_plan_b');

if(c('FBRTCScreenSharingUtils').canUserReceiveScreenSharing())
i.push('screen_sharing');


return i;};



f.exports=h;}),null);

/** js/mercury/clients/rtc/actions/FBRTCCallControlActions.js */






__d('FBRTCCallControlActions',['FBRTCDispatcher','keyMirror'],(function a(b,c,d,e,f,g){

'use strict';







var h=c('keyMirror')
({ACCEPT_ESCALATION:null,
HANG_UP:null,
PARENT_WINDOW_START_CALL:null,
TOGGLE_FULL_SCREEN:null,
TOGGLE_MUTE_AUDIO:null,
TOGGLE_MUTE_VIDEO:null,
TOGGLE_SCREEN_SHARING:null,
TOGGLE_SELF_VIEW:null,
SHOW_SETTINGS:null,
START_CALL:null,
DECLINE_ESCALATION:null,
RECEIVED_SIGNALING_MESSAGE:null,
RESET_CALL:null,
OPEN_SCREEN_IN_NEW:null,
CLOSE_STANDALONE_SCREEN:null,
REDIAL_CALL:null}),


i=
{Types:h,

hangUp:function j(){
c('FBRTCDispatcher').dispatch
({type:h.HANG_UP});},



toggleMuteAudio:function j(){
c('FBRTCDispatcher').dispatch
({type:h.TOGGLE_MUTE_AUDIO});},



toggleMuteVideo:function j(){
c('FBRTCDispatcher').dispatch
({type:h.TOGGLE_MUTE_VIDEO});},



toggleFullScreen:function j(){
c('FBRTCDispatcher').dispatch
({type:h.TOGGLE_FULL_SCREEN});},



toggleSelfView:function j(){
c('FBRTCDispatcher').dispatch
({type:h.TOGGLE_SELF_VIEW});},



showSettings:function j(){
c('FBRTCDispatcher').dispatch
({type:h.SHOW_SETTINGS});},



toggleScreenSharing:function j(){
c('FBRTCDispatcher').dispatch
({type:h.TOGGLE_SCREEN_SHARING});},



startCall:function j(){
c('FBRTCDispatcher').dispatch
({type:h.START_CALL});},



openScreenInNewWindow:function j(){
c('FBRTCDispatcher').dispatch
({type:h.OPEN_SCREEN_IN_NEW});},



receivedSignalingMessage:function j(k){
c('FBRTCDispatcher').dispatch
({type:h.RECEIVED_SIGNALING_MESSAGE,
message_type:k.msgType,
message:k});},



acceptEscalation:function j(){
c('FBRTCDispatcher').dispatch
({type:h.ACCEPT_ESCALATION});},



declineEscalation:function j(){
c('FBRTCDispatcher').dispatch
({type:h.DECLINE_ESCALATION});},



resetCall:function j(k){
c('FBRTCDispatcher').dispatch
({type:h.RESET_CALL,
trigger:k});},



redialCall:function j(){
c('FBRTCDispatcher').dispatch
({type:h.REDIAL_CALL});},



parentWindowStartCall:function j(){
c('FBRTCDispatcher').dispatch
({type:h.PARENT_WINDOW_START_CALL});}};




f.exports=i;}),null);

/** js/mercury/clients/rtc/FBRTCLogger.js */







__d('FBRTCLogger',['Log','LogHistory','MarauderLogger','formatDate','pageID'],(function a(b,c,d,e,f,g){








var h='webrtc',


i='sent_message',
j='received_message',
k='send_succeeded',
l='send_failed',
m='info',
n='call_action',
o='client_event',
p='client_error',


q='type',
r='msg_id',
s='ack_msg_id',
t='call_id',
u='from',
v='to',
w='content',
x='tag',
y='peer_id',
z='error_code',
aa='trigger',
ba='endcallstats',

ca=null;da.






getInstance=function(){'use strict';
if(!ca)
ca=new da();

return ca;};





function da(){'use strict';
this.$FBRTCLogger_logHistory=c('LogHistory').getInstance(h);}
da.prototype.





logToConsole=function(ea){'use strict';
var fa='Console';
this.$FBRTCLogger_consoleLog(null,null,fa,ea);
this.$FBRTCLogger_logHistory.log(fa,ea);};
da.prototype.




logReceivedMessage=function(ea,fa,ga){'use strict';
var ha={};
ha[u]=ea;
ha[t]=fa;
ha[q]=ga.type;
ha[r]=ga.msg_id;
if(ga.sdp)
ha[w]=ga.sdp;

if(ga.ack_id)
ha[s]=ga.ack_id;


this.$FBRTCLogger_coreLog(j,ha);
this.$FBRTCLogger_consoleLog(ea,fa,'Received',ga.type+', '+ga.msg_id);};
da.prototype.




logSentMessage=function(ea,fa,ga){'use strict';
var ha={};
ha[v]=ea;
ha[t]=fa;
ha[q]=ga.type;
ha[r]=ga.msg_id;
if(ga.sdp)
ha[w]=ga.sdp;

if(ga.ack_id)
ha[s]=ga.ack_id;


this.$FBRTCLogger_coreLog(i,ha);
this.$FBRTCLogger_consoleLog(ea,fa,'Sent',ga.type+', '+ga.msg_id);};
da.prototype.




logSentMessageSuccess=function(ea,fa,ga,ha){'use strict';
var ia={};
ia[y]=ea;
ia[t]=fa;
ia[q]=ga;
ia[r]=ha;

this.$FBRTCLogger_coreLog(k,ia);};
da.prototype.




logSentMessageFailure=function(ea,fa,ga,ha,ia){'use strict';
var ja={};
ja[y]=ea;
ja[t]=fa;
ja[q]=ga;
ja[r]=ha;
ja[z]=ia;

this.$FBRTCLogger_coreLog(l,ja);
this.$FBRTCLogger_consoleLog(ea,fa,'Send Failed',ga+', '+ia);};
da.prototype.




logCallAction=function(ea,fa,ga,ha,ia){'use strict';
var ja={};
ja[y]=ea;
ja[t]=fa;
ja[n]=ga;
ja[w]=ha;
if(ia)
ja[aa]=ia;


this.$FBRTCLogger_coreLog(n,ja);
this.$FBRTCLogger_consoleLog(ea,fa,'CallAction',ga+', '+ha);};
da.prototype.




logEvent=function(ea,fa,event){'use strict';
var ga={};
ga[y]=ea;
ga[t]=fa;
ga[w]=event;

this.$FBRTCLogger_coreLog(o,ga);
this.$FBRTCLogger_consoleLog(ea,fa,'Event',event);};
da.prototype.




logInfo=function(ea,fa,ga){'use strict';
var ha={};
ha[y]=ea;
ha[t]=fa;
ha[w]=ga;

this.$FBRTCLogger_coreLog(m,ha);
this.$FBRTCLogger_consoleLog(ea,fa,'Info',ga);};
da.prototype.




logError=function(ea,fa,ga){'use strict';
var ha={};
ha[y]=ea;
ha[t]=fa;
ha[w]=ga;

this.$FBRTCLogger_coreLog(p,ha);
this.$FBRTCLogger_consoleLog(ea,fa,'Error',ga);};
da.prototype.

logErrorWithoutID=function(ea){'use strict';
this.logError(null,null,ea);};
da.prototype.




logEndCallSummary=function(ea){'use strict';
if(!ea)return;

var fa={};
fa[y]=ea.peerID;
fa[t]=ea.callID;
fa[x]=ba;
fa[w]=ea.toString();


var ga=ea.getExtraInfo();
for(var ha in ga)
if(Object.prototype.hasOwnProperty.call(ga,ha))
fa[ha]=ga[ha];



this.$FBRTCLogger_coreLog(m,fa);
this.$FBRTCLogger_consoleLog
(ea.peerID,
ea.callID,
'Call Summary',
fa);};

da.prototype.




$FBRTCLogger_coreLog=function(ea,fa){'use strict';
fa.page_id=c('pageID');


this.$FBRTCLogger_logHistory.log(ea,fa);


c('MarauderLogger').log
(ea,
h,
fa);};

da.prototype.




$FBRTCLogger_consoleLog=function(ea,fa,ga,ha){'use strict';};

















da.CallAction=
{START_CALL:'start_call',
RECEIVED_CALL:'received_call',
ANSWER_CALL:'answer_call',
END_CALL:'end_call',
DENIED_PERMISSION:'denied_permission',
SET_MUTE:'set_mute',
SET_VIDEO_ON:'set_video_on',
SET_SELF_VIEW_ON:'set_self_view_on',
SET_FULLSCREEN_ON:'set_fullscreen_on',
START_SKYPE:'start_skype',
TRY_NEW:'try_new',
OPEN_POPUP:'open_popup',
POPUP_OPENED:'popup_opened',
AUTO_DISABLE_VIDEO:'auto_disable_video',
FAILED_GETTING_URI:'failed_getting_uri',
OLD_URI:'old_uri',
USER_SETTINGS_CHANGED:'user_settings_changed'};


da.Trigger=
{ADMIN_MESSAGE:'admin_message',
CHAT_TAB_ICON:'chat_tab_icon',
CHAT_TAB_ICON_TOUR:'chat_tab_icon_tour',
CHAT_TAB_VOICE_ICON:'chat_tab_voice_icon',
SKYPE_DEPRECATION_DIALOG:'skype_deprecation_dialog',
REDIAL_BUTTON:'redial_button',
RETURN_CALL:'return_call',
WEB_MESSENGER:'web_messenger',
POPUP_CALL_START_BUTTON:'popup_start_call_button',
TIMELINE_PROFILE:'timeline_profile',
UNKNOWN:'unknown',
RESET_CALL:'install_screen_sharing_ext_dialog',
MULTIWAY_CHAT_TAB_SHEET_JOIN_CALL_BUTTON:
'multiway_chat_tab_sheet_join_call_button',
MULTIWAY_POPUP_START_CALL_BUTTON:'multiway_popup_start_call_button',
MULTIWAY_THREAD_HEADER_AUDIO_BUTTON:'multiway_thread_header_audio_button',
MULTIWAY_THREAD_HEADER_VIDEO_BUTTON:'multiway_thread_header_video_button',
MULTIWAY_THREAD_HEADER_JOIN_AUDIO_CALL_AUDIO_BUTTON:
'multiway_thread_header_join_audio_call_audio_button',
MULTIWAY_THREAD_HEADER_JOIN_AUDIO_CALL_VIDEO_BUTTON:
'multiway_thread_header_join_audio_call_video_button',
MULTIWAY_THREAD_HEADER_JOIN_VIDEO_CALL_AUDIO_BUTTON:
'multiway_thread_header_join_video_call_audio_button',
MULTIWAY_THREAD_HEADER_JOIN_VIDEO_CALL_VIDEO_BUTTON:
'multiway_thread_header_join_video_call_video_button',
MULTIWAY_THREAD_LIST_JOIN_CALL_BUTTON:
'multiway_thread_list_join_call_button'};



da.Key=
{DEVICE_INFO:'device_info',
RATING:'rating5',
RATING_SHOWN:'rating_shown',
SURVEY_CHOICE:'survey_choice',
SURVEY_DETAILS:'survey_details',
SURVEY_SHOWN:'survey_shown',
INITIATED_BY_PAGE_ID:'initiated_by_page_id',
PEER_IS_MOBILE:'peer_is_mobile'};


f.exports=da;}),null);

/** js/mercury/clients/rtc/FBRTCLocalMessageQueue.js */





















__d('FBRTCLocalMessageQueue',['CacheStorage','FBRTCLogger','Map','RTCConfig'],(function a(b,c,d,e,f,g){






var h='localstorage',
i='RTC_',
j='offer',
k='offer_msg',
l='data_',
m=30*1000,
n=15*1000,
o=500,

p=new (c('Map'))();


function q(){'use strict';

this.$FBRTCLocalMessageQueue_logger=c('FBRTCLogger').getInstance();}
q.prototype.







enqueueOffer=function(r,s){'use strict';
var t=this.$FBRTCLocalMessageQueue_getStorage(r,k);
this.$FBRTCLocalMessageQueue_storeData(t,j,s);};
q.prototype.









getOffer=function(r){'use strict';
var s=this.$FBRTCLocalMessageQueue_getStorage(r,k);
return this.$FBRTCLocalMessageQueue_getData(s,j);};
q.prototype.





removeOffer=function(r){'use strict';
var s=this.$FBRTCLocalMessageQueue_getStorage(r,k);
s.remove(j);};
q.prototype.








enqueueMessage=function(r,s,t,u){'use strict';
var v=l+t.toString(),
w=p.get(r)||new (c('Map'))();

w.set(v,u);


p.set(r,w);

this.$FBRTCLocalMessageQueue_logger.logToConsole('Queued '+v);};
q.prototype.

drainQueue=function(r,s){'use strict';
var t=p.get(r)||new (c('Map'))(),

u,v;

for(var w=t,x=Array.isArray(w),y=0,w=x?w:w[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var z;if(x){if(y>=w.length)break;z=w[y++];}else{y=w.next();if(y.done)break;z=y.value;}var aa=z,u=aa[0],v=aa[1];
void u;
s(v);}


p.set(r,new (c('Map'))());};
q.prototype.










enableDequeuing=function(r,s,t,u){'use strict';
if(u===undefined)
u=n;

this.$FBRTCLocalMessageQueue_dequeueMessages(r,s,t,u);};
q.prototype.








$FBRTCLocalMessageQueue_dequeueMessages=function(r,s,t,u){'use strict';
var v=this.$FBRTCLocalMessageQueue_getStorage(r,s),
w=v.keys(),
x=w.length;
for(var y=0;y<x;y++){
var z=this.$FBRTCLocalMessageQueue_getAndRemoveData(v,w[y]);
if(z&&t)
t(z);}



this.$FBRTCLocalMessageQueue_logger.logToConsole('Dequeued '+x+' ('+r+') with '+
u+' left)');





if(u>0){
u-=o;
setTimeout(function(){
this.$FBRTCLocalMessageQueue_dequeueMessages(r,s,t,u);}.
bind(this),o);}};

q.prototype.




$FBRTCLocalMessageQueue_storeData=function(r,s,t){'use strict';
var u=
{__t:Date.now(),
__d:t};

r.set(s,u);};
q.prototype.




$FBRTCLocalMessageQueue_getData=function(r,s){'use strict';
var t=r.get(s);
if(t&&this.$FBRTCLocalMessageQueue_isValid(t)){
return t.__d;}else
if(t)

r.remove(s);

return null;};
q.prototype.




$FBRTCLocalMessageQueue_getAndRemoveData=function(r,s){'use strict';
var t=this.$FBRTCLocalMessageQueue_getData(r,s);
if(t!==null){
r.remove(s);
return t;}

return null;};
q.prototype.







$FBRTCLocalMessageQueue_isValid=function(r){'use strict';
return Date.now()-r.__t<m;};
q.prototype.




$FBRTCLocalMessageQueue_getStorage=function(r,s){'use strict';
return new (c('CacheStorage'))(h,''+i+r+'_'+s+'_');};



f.exports=q;}),null);

/** js/mercury/clients/rtc/FBRTCMessageListener.js */








__d('FBRTCMessageListener',['invariant','Arbiter','ChannelConstants','FBRTCConstants','FBRTCCallControlActions','FBRTCLocalMessageQueue','FBRTCSupport','RTCConfig','guid','mixInEventEmitter'],(function a(b,c,d,e,f,g,h){

'use strict';



var i=c('FBRTCConstants').ChildWindowMessageType,









j=45*1000,



k=[],
l=null,
m=null,
n=null,
o=null,
p=null,

q=false,


r=null,


s=void 0,

t=



{init:function u(v,w){
if(q)
return;

q=true;

c('Arbiter').subscribe
(c('ChannelConstants').getArbiterType('webrtc'),
function(y,z){this._onMessage(z.obj);}.bind(this));


c('Arbiter').subscribe
(c('ChannelConstants').getArbiterType('webrtc_offer'),
function(y,z){this._onMessage(z.obj);}.bind(this));


c('Arbiter').subscribe
(c('ChannelConstants').getArbiterType('webrtc_offerack'),
function(y,z){this._onMessage(z.obj);}.bind(this));



if(c('RTCConfig').RtcConferencingGK)

c('Arbiter').subscribe
(c('ChannelConstants').getArbiterType('rtc_multi_json'),
function(y,z){this._onMultiwayMessage(z.obj);}.bind(this));



this._localMessageQueue=new (c('FBRTCLocalMessageQueue'))();
if(c('RTCConfig').PassMessagesBetweenWindowsGK){
if(c('FBRTCSupport').isWebrtcSupported()&&window.addEventListener){
var x=v?
this._handleWindowMessageToChild.bind(this):
this._handleWindowMessageToParent.bind(this);

window.addEventListener
('message',
x,
false);}


if(v)
this._connectToParentWindow(w);}},





setParentWindowNonce:function u(v){
o=v;},


generateNewNonce:function u(){
p=c('guid')();
return p;},





setMultiwayMessageHandler:function u(v,w){

!r||h(0,
'rtc multiway message handler should only be set once per page load');

r=w?v.bind(w):v;},


_onMultiwayMessage:function u(v){
this.emit('multiwayMessageReceived',v);
if(r)
r(v);},







setMessageHandler:function u(v,w){

!l||h(0,
'rtc message handler should only be set once per page load');

l=w?v.bind(w):v;
while(k.length)
l(k.shift());},



removeMessageHandler:function u(){
l=null;},


setParentWindowStartCallHandler:function u(v){
s=v;

return function(){return s=null;};},







_onMessage:function u(v){
this.emit('messageReceived',v);
if(l){
l(v);}else 

k.push(v);

this._passMessageToChildWindow(v);},






_connectToParentWindow:function u(v){
if(window.opener&&window.opener.postMessage){
var w=
{type:i.CHILD_WINDOW_READY,
nonce:o,
childNonce:this.generateNewNonce(),
peerID:v};

window.opener.postMessage(w,window.location.origin);}},









_verifyWindowMessage:function u(event){
return event.origin===window.location.origin&&event.data&&
p&&event.data.nonce===p;},





_handleWindowMessageToParent:function u(event){
if(!this._verifyWindowMessage(event))
return;

if(event.data.type===i.CHILD_WINDOW_READY){

this.setParentWindowNonce(event.data.childNonce);
this._setChildWindow(event.source);
this._replayQueuedMessagesToChild(event.data.peerID,m);}},






_handleWindowMessageToChild:function u(event){
if(!this._verifyWindowMessage(event))
return;

if(event.data.type===i.CHILD_WINDOW_MESSAGE)
this._onMessage(event.data.message);

if(event.data.type===i.CHILD_WINDOW_START_CALL)
if(s){
s();}else 

c('FBRTCCallControlActions').parentWindowStartCall();},




_replayQueuedMessagesToChild:function u(v,w){
this._localMessageQueue.drainQueue(v,function(x){
var y=
{type:i.CHILD_WINDOW_MESSAGE,
nonce:o,
message:x};

w.postMessage(y,window.location.origin);});},








_setChildWindow:function u(v){
m=v;


clearTimeout(n);


n=setTimeout(function(){
m=null;},
j);
this._startCallInChildWindow();


this.generateNewNonce();},





_passMessageToChildWindow:function u(v){
if(m){
var w=
{type:i.CHILD_WINDOW_MESSAGE,
nonce:o,
message:v};

m.postMessage(w,window.location.origin);}},



_startCallInChildWindow:function u(){
if(m){
var v=
{type:i.CHILD_WINDOW_START_CALL,
nonce:o};

m.postMessage(v,window.location.origin);}}};




c('mixInEventEmitter')(t,

{messageReceived:true,

multiwayMessageReceived:true});


f.exports=t;}),null);

/** js/mercury/clients/rtc/FBRTCCallUIWrapper.js */






__d('FBRTCCallUIWrapper',['regeneratorRuntime','Bootloader','FBRTCCallActions','FBRTCConfig','FBRTCMessageListener','UserAgent'],(function a(b,c,d,e,f,g){







var h=null,

i=




{openGroupCallUI:function j
(k,
l,
m,
n,
o,
p){return c('regeneratorRuntime').async(function q(r){while(1)switch(r.prev=r.next){case 0:

h=this._openWindow('Group Call');

c('Bootloader').loadModules(["FBRTCCallUI"],function(s){
s.openGroupCallUI
(k,
l,
m,
n,
o,
h,
p);},

'FBRTCCallUIWrapper');case 2:case 'end':return r.stop();}},null,this);},



openGroupCallURI:function j
(k,
l,
m,
n,
o,
p){return c('regeneratorRuntime').async(function q(r){while(1)switch(r.prev=r.next){case 0:

h=this._openWindow('Group Call');

c('Bootloader').loadModules(["FBRTCCallUI"],function(s){
s.openGroupCallURI
({conferenceName:k,
callID:l,
hasVideo:m,
serverInfoData:n,
trigger:o,
callSummary:p,
callWindow:h});},

'FBRTCCallUIWrapper');case 2:case 'end':return r.stop();}},null,this);},





openAsCaller:function j(k,l,m,n){
if(!h&&window.rtcCallChildWindow){
h=window.rtcCallChildWindow;
window.rtcCallChildWindow=null;}

if(this._shouldFocusCallWindow(k)){

h.focus();
return;}

if(this._shouldCloseCallWindow())

h.close();


if(c('FBRTCConfig').useCurrentWindow()){
c('FBRTCMessageListener').removeMessageHandler();
c('FBRTCCallActions').startCall(k,l,true,n);

c('Bootloader').loadModules(["FBRTCCallUI"],function(o){
o.openAsCaller(k,l,m,n);},
'FBRTCCallUIWrapper');
return;}


h=this._openWindow('Video Call');

c('Bootloader').loadModules(["FBRTCCallUI"],function(o){
o.openAsCaller(k,l,m,n,h);},
'FBRTCCallUIWrapper');},





openAsCallee:function j(k,l,m,n,o){
if(c('FBRTCConfig').useCurrentWindow()){
c('FBRTCMessageListener').removeMessageHandler();
c('FBRTCCallActions').startCall(k,l,false,o);

c('Bootloader').loadModules(["FBRTCCallUI"],function(p){
p.openAsCallee
(k,
l,
m,
n,
o,
null);},

'FBRTCCallUIWrapper');
return;}


h=this._openWindow('Video Call');

c('Bootloader').loadModules(["FBRTCCallUI"],function(p){
p.openAsCallee
(k,
l,
m,
n,
o,
h);},

'FBRTCCallUIWrapper');},


_shouldFocusCallWindow:function j(k){
return h&&!h.closed&&
h.rtcCallInProgessWith===k;},


_shouldCloseCallWindow:function j(){
return h&&!h.closed&&
!h.rtcCallInProgessWith;},


_openWindow:function j(k){
var l=this._windowPosition(),
m=['menubar=no',
'location=no',
'scrollbars=no',
'status=no',
'personalbar=no',
l.height,
l.width,
l.top,
l.left].join(',');
if(this._isSparkBrowser())


m='';


return window.open('',k,m);},






_windowPosition:function j(){

var k=960,
l=540,
m,
n,
o,
p;

if(screen&&screen.width>1280){

k=1280;
l=720;}

if(window.innerWidth!==undefined){
n=window.innerWidth;
m=window.innerHeight;}else{

n=screen.width;
m=screen.height;}


if(window.screenLeft!==undefined){
o=window.screenLeft;
p=window.screenTop;}else{

o=window.screenX;
p=window.screenY;}


var q=Math.floor(n/2-k/2+o),
r=Math.floor(m/2-l/2+p);

return {height:'height='+l.toString(),
width:'width='+k.toString(),
top:'top='+r.toString(),
left:'left='+q.toString()};},







_isSparkBrowser:function j(){

return c('UserAgent').isBrowser('Chrome < 34')&&
c('UserAgent').isBrowser('Chrome > 33');}};



f.exports=i;}),null);

/** js/mercury/clients/rtc/FBRTCCore.js */






__d('FBRTCCore',['invariant','Bootloader','FBRTCAvailability','FBRTCCallUIWrapper','FBRTCSupport','randomInt'],(function a(b,c,d,e,f,g,h){









var i=false,









j=











{startOutgoingCall:function k
(l,
m,
n){

var o=arguments.length<=3||arguments[3]===undefined?false:arguments[3];
!isNaN(parseInt(l,10))||h(0,'calleeID must be an integer');
if(i)



return;

i=true;
setTimeout(function(){i=false;},1000);
if(c('FBRTCSupport').isWebrtcSupported()){
if(o&&!c('FBRTCSupport').isCollabSupported()){
c('Bootloader').loadModules
(["FBRTCUnsupportedBrowserMessage","CollabMessengerLogger"],
function(q,r){
q.showForUnsupportedCollabCall();
r.logBrowserNotSupported({peerID:l});},
'FBRTCCore');}else{


var p=this._generateCallID();
c('FBRTCCallUIWrapper').openAsCaller(l,p,m,n);}}else 


c('Bootloader').loadModules
(["FBRTCUnsupportedBrowserMessage"],
function(q){
q.showForOutgoingCall();},
'FBRTCCore');},




startGroupCall:function k(l){





var m=l.conferenceName,n=l.hasVideo,o=l.serverInfoData,p=l.trigger,q=l.usersToRing,r=q===undefined?[]:q;

if(i)
return;

i=true;
setTimeout(function(){i=false;},1000);


if(!c('FBRTCSupport').isGroupCallWebtrcSupported()){
c('Bootloader').loadModules
(["MessengerRTCGroupCallUnsupportedBrowserDialogController"],
function(s){
s.render
({hasVideo:n});},

'FBRTCCore');

return;}



c('FBRTCCallUIWrapper').openGroupCallUI
(m,
this._generateCallID(),
r,
n,
p,
o);},







isAvailableForWebrtcCalling:function k(l){
return c('FBRTCAvailability').isCallable(l);},





shouldEnableVideoCalling:function k(){
return c('FBRTCSupport').isOSSupported();},





_generateCallID:function k(){
return c('randomInt')(0,4294967295);}};



f.exports=j;}),null);

/** js/mercury/clients/rtc/actions/FBRTCCallabilityActions.js */






__d('FBRTCCallabilityActions',['keyMirror'],(function a(b,c,d,e,f,g){

'use strict';





var h=c('keyMirror')
({CALLABILITY_FETCHED:null,
CALLABILITY_FETCH_ERROR:null});






function i(j){
this.$FBRTCCallabilityActions_dispatcher=j;}
i.prototype.

callabilityFetched=function(j,k){
this.$FBRTCCallabilityActions_dispatcher.dispatch
({type:h.CALLABILITY_FETCHED,
userID:j,
callability:k});};

i.prototype.

callabilityFetchError=function(j){
this.$FBRTCCallabilityActions_dispatcher.dispatch
({type:h.CALLABILITY_FETCH_ERROR,
userID:j});};




i.Types=h;

f.exports=i;}),null);

/** www/__virtual__/x/XRTCCallabilityController.js */



__d("XRTCCallabilityController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/rtc\/callability\/",{user_id:{type:"Int",required:true}});}),

null);

/** js/mercury/clients/rtc/data_managers/FBRTCCallabilityDataManager.js */






__d('FBRTCCallabilityDataManager',['AsyncRequest','FBRTCCallabilityActions','XRTCCallabilityController'],(function a(b,c,d,e,f,g){

'use strict';










function h(i){
this.$FBRTCCallabilityDataManager_callabilityActions=new (c('FBRTCCallabilityActions'))(i);}
h.prototype.

fetchCallability=function(i){
var j=c('XRTCCallabilityController').getURIBuilder().
setInt('user_id',parseInt(i,10)).
getURI(),
k=this.$FBRTCCallabilityDataManager_handleResponse.bind(this,i),
l=this.$FBRTCCallabilityDataManager_handleError.bind(this,i);

new (c('AsyncRequest'))().
setURI(j).
setHandler(k).
setErrorHandler(l).
setAllowCrossPageTransition(true).
send();};
h.prototype.

$FBRTCCallabilityDataManager_handleResponse=function(i,j){
this.$FBRTCCallabilityDataManager_callabilityActions.callabilityFetched(i,j.payload);};
h.prototype.

$FBRTCCallabilityDataManager_handleError=function(i,j){
this.$FBRTCCallabilityDataManager_callabilityActions.callabilityFetchError(i);};



f.exports=h;}),null);

/** js/mercury/clients/rtc/stores/RTCCallabilityStore.js */







__d('RTCCallabilityStore',['fbt','Cache','FBRTCAvailability','FluxStore','FBRTCCallabilityActions','FBRTCCallabilityDataManager'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,











k=.5,
l=5;i=babelHelpers.inherits

(m,c('FluxStore'));j=i&&i.prototype;



function m(n){
j.constructor.call(this,n);
this.$RTCCallabilityStore_dataManager=new (c('FBRTCCallabilityDataManager'))(n);
this.$RTCCallabilityStore_cache=new (c('Cache'))();}
m.prototype.

__onDispatch=function(n){
var o=n.type;
switch(o){
case c('FBRTCCallabilityActions').Types.CALLABILITY_FETCHED:
var p=n.userID,q=n.callability;
this.$RTCCallabilityStore_cache.set
(p,
q.is_callable,
null,
q.is_callable?l:k);

this.__emitChange();
break;

case c('FBRTCCallabilityActions').Types.CALLABILITY_FETCH_ERROR:
this.$RTCCallabilityStore_cache.set(n.userID,false,null,k);
this.__emitChange();
break;}};

m.prototype.

isCallable=function(n){


if(c('FBRTCAvailability').isCallable(n))
return true;

if(!this.$RTCCallabilityStore_cache.has(n)){
this.$RTCCallabilityStore_dataManager.fetchCallability(n);
this.$RTCCallabilityStore_cache.set(n,false,null,k);}

return !!this.$RTCCallabilityStore_cache.get(n);};
m.prototype.




callButtonTooltip=function(n,o){
if(this.isCallable(n))
return h._(["Start a video call with {shortname}","ad668f2489a4ecdf686948dce9337036"],
[h.param('shortname',o)]);



return h._(["{shortname} is currently unavailable for video calling","50927e1d94d399b6863e25acfb459c87"],
[h.param('shortname',o)]);};



m.prototype.




voiceCallButtonTooltip=function(n,o){
if(this.isCallable(n))
return h._(["Start a voice call with {shortname}","12f008f95163c40b6533cfcd31b04aea"],
[h.param('shortname',o)]);



return h._(["{shortname} is currently unavailable for voice calling","257a062ea5a61ec07d95667c59274281"],
[h.param('shortname',o)]);};






f.exports=m;}),null);

/** js/mercury/clients/rtc/stores/FBRTCCallabilityStore.js */









__d('FBRTCCallabilityStore',['FBRTCDispatcher','RTCCallabilityStore'],(function a(b,c,d,e,f,g){

'use strict';




f.exports=new (c('RTCCallabilityStore'))(c('FBRTCDispatcher'));}),null);
