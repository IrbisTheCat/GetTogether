if (self.CavalryLogger) { CavalryLogger.start_js(["ztsfa"]); }

/** __static_js_modules__/collabcallmessengerbrowsereventenum.js */




__d("CollabCallMessengerBrowserEventEnum",[],(function a(b,c,d,e,f,g){

f.exports={CALL_START_TRY:"call: try",CALL_PROCESS_STARTED:"call: start process",CALL_CONNECTED:"call: connected",CALL_ENDED:"call: ended",CONNECTION_INFO:"connection info",TURN_CREDENTIALS_RECEIVED:"TURN credentials received",HANGUP_CALL_ID_MISSMATCH:"hangup callID missmatch",OFFER_ACCEPTED:"offer accepted",OFFER_IGNORED:"offer ignored",RENEGOTIATION:"offer renegotiation",LOCAL_STREAM_SET:"local stream: set",LOCAL_STREAM_READY:"local stream: ready",LOCAL_STREAM_STARTED:"local stream: started",LOCAL_STREAM_TRACKS_CHANGED:"local stream: tracks changed",SCREEN_SHARING_TOGGLED:"screen sharing toggled",REMOTE_STREAM_SET:"remote stream: set",REMOTE_STREAM_STARTED:"remote stream: started",REMOTE_STREAM_TRACKS_CHANGED:"remote stream: tracks changed",REMOTE_STREAM_ADDED:"remote stream: added",REMOTE_STREAM_MUTE_TOGGLED:"remote steam: mute toggled",REMOTE_STREAM_REMOVED:"remote stream: removed",FAIL_BROWSER_NOT_SUPPORTED:"browser not supported",CALL_CONTROLLER_INIT:"call controller init",REQUEST_USER_MEDIA:"request user media",USER_SETTINGS_CHANGED:"user settings change",RTC_ERROR:"RTC error",MESSAGE_SENT:"message sent",MESSAGE_RECEIVED:"message received",SDP_UPDATE:"SDP update"};}),

null);

/** __static_js_modules__/fbrtccallconstants.js */




__d("FBRTCCallConstants",[],(function a(b,c,d,e,f,g){

f.exports={FBRTCCallConnectionType:{MISSED_CALL:4,CONNECTED_CALL:5},FBRTCCallType:{VOICE_CALL:1,VIDEO_CALL:2}};}),

null);

/** __static_js_modules__/linkshimcallsites.js */




__d("LinkshimCallsites",[],(function a(b,c,d,e,f,g){

f.exports={INTERNAL_WIKI:1,MZERO_UPSELL:2,EVENTS_TICKET:3,UNIT_TEST:4,WEB_RESULT:5,OG_COMMENT_NOTIF:6,M_DATA_UPSELL:7,FBURL:8,M_URI:9,THIRD_PARTY_URL:10,UI_LINK:11,LANDING_CAMPAIGN:12,STREAM_CONTENT_TICKER:13,SOCIAL_WIFI_DEPRECATED:14,TIMELINE_APP_COLLECTION:15,SAVED_LATER_VIEW_ITEM:16,REQUESTS_CONTROLLER:17,LOGIN_BUTTON:18,COMMENT_PLUGIN_REDIRECT_ENTAPP:19,COMMENT_PLUGIN_REDIRECT_APPOWNED:20,M_DEEPLINK:21,M_DEEPLINK_INVALID:22,EVENT_BUY_TICKET:23,PAGE_TYPEAHEAD:24,EGO_ACTION:25,INTERN_SURVEY:26,RETIRED_ENDPOINT:27,OG_COMMENT_FEEDBACK_TARGET:28,LIKE_COMMON_RENDERER:29,NOTIFICATIONS_LINK:30,COUPON_OFFSITE_LINK:31,MZERO_MAILTO:32,MZERO:33,MERCURY_SHARE_ATTACHMENT:34,EXTERNAL_TOKEN_SURVEY:35,FBURL_INTERN:36,LANDING_PAGE_EXPERIMENT:37,OG_FEEDBACK_TARGET:38,GAMEDAY:39,ENTISH:40,JS_ENV:41,LINKSHIM_AUTOMATION:42,TASKS_APP:45,FEEDBACK_MODEL:46,JP_EMAIL_LINK:47,NOTIFICATION_REWRITE:48,OG_ACTION_PERMALINK:49,MALWARE_SCAN:50,EMAIL_LINK:51,EMAIL_ATTACHMENT:52,RENDER_EMAIL_LEGACY:53,TAGGED_WITH_STORY_EMAIL_NOTIF:54,MSG_INTRO_NOTIF:55,GROUP_COMMENT_NOTIF:56,EVENT_INVITE_LOCATION_EMAIL:57,EVENT_INVITE_MESSAGE_EMAIL:58,CLOSE_FRIEND_ACTIVITY:59,GROUP_DOC_CREATED_URL:60,GROUP_DOC_CREATED_NAME:61,MALL_POST_EMAIL_NOTIF:62,MALL_POST_SOCIAL_MSG:63,NOTIFICATION_REWRITE_RSS:64,WALL_POST_SOCIAL_MSG:65,TITAN_MSG_BODY_EMAIL:66,TITAN_MSG_BODY_SUBJECT:67,GROUP_POST_EMAIL:68,GROUP_POST_URL_EMAIL:69,GROUP_POST_PERMALINK_EMAIL:70,GROUP_POST_OPTOUT_EMAIL:71,GROUP_POST_TEXT_NOTIF:72,CLOSE_FRIEND_EMAIL_SHARE:73,PLACE_TAGGED_IN_CHECKIN:74,QUESTIONS_ANSWER_EMAIL:75,SUPPORT_TASK_COMMENT:76,INVITE_MESSAGE_EMAIL:77,GROUP_REQUEST_TO_JOIN_EMAIL:78,GROUP_POST_COMMENT_PERMALINK:79,GROUP_POST_COMMENT_OPTOUT:80,GROUP_POST_COMMENT_TEXT:81,EVENT_NAME_CHANGE_NOTIF:82,EVENT_NAME_CHANGE_OLD_NAME_NOTIF:83,EVENT_NAME_CHANGE_NEW_NAME_NOTIF:84,EVENT_CANCEL_NOTIFICATION:85,BASE_COMMENT_NOTIF:86,FBPAGE_FAN_INVITE_NAME:87,FBPAGE_FAN_INVITE_MSG:88,MESSAGING_HTML_EMAIL:89,ROLLOUT_TEXT_EMAIL:90,COMMENT_EMAIL_TEXT:91,SHARE_CONTENT_LEGACY_EMAIL:92,MZERO_UPSELL_NOTIF:93,INTERN_DEBUG:94,CALL_TO_ACTION:95,QUICK_PROMOTION_ACTION:96,COMPOSED_TEXT:97,GIF_SEARCH:98,OFFERS:99,MZERO_ATTACHMENTS:100,MZERO_UPLOADS:101,CCTA_LINK:102,M_CCTA_LINK:103,SAVED_ITEM_REDIRECT:104,ADS_PROMOTED_OBJECT:105,EMBEDS_MTOUCH_SELECT:106,IORG_BOOKMARK:107,PAYPAL_INIT:108,FUNDRAISER_NOTIF:109,COMMENTS_PLUGIN_NOTIF:110,INSTANT_SHOPPING_ACTION:111,LINK_MENU:112,TALENT_SEARCH:113,COMET:114,INTERVIEW_STATS:115,SCHEDULR:116,BULK_SCHEDULR:117,CIRCA_LINK:118,MZERO_CHANGE_DESTINATION:119,LINK_REACT:120,LYNX_EXTRA_REDIRECT:121,UI_LINK_EXPERIMENTAL:122,COORD_DASHBOARD:123,WHITEHAT:124,INSTAGRAM_PROFILE_URL:125,INSTAGRAM_DIRECT_MESSAGE:126,SNAPTU:127,RHC_CLICK_TRACKING:128,NOTIFICATIONS_TARGET:129,INSTANT_WORKFLOWS_PAYMENT_RECEIPT:130,INTEGRITY_CRAWLER:131,KILL_LINKSHIM_SECURE_REDIRECT:132,INSTAGRAM_STORY_URL:133,INSTAGRAM_LINKSHIM_URL:134,UNTRUSTED_LINK_JS:135,LYNX_EXPIRED_LINK:136,LYNX_USER_CONFIRMED_LINK:137,LYNX_INVALID_PARAMS:138,REMARKUP:139,PAYMENT_REDIRECT:140,PAGES_PLATFORM_APP_SETTING:141,PAGES_WEBSITE:142,RECRUITING_EMAIL:143,MN_PLATFORM_CTA_WEBVIEW_URL:144};}),

null);

/** __static_js_modules__/rtccallactiontypes.js */




__d("RTCCallActionTypes",[],(function a(b,c,d,e,f,g){

f.exports={INCOMING_CALL_SUCCESS:"INCOMING_CALL_SUCCESS",RESET:"RESET",REMOTE_VIDEO_MUTED:"REMOTE_VIDEO_MUTED",REMOTE_VIDEO_UNMUTED:"REMOTE_VIDEO_UNMUTED"};}),

null);

/** __static_js_modules__/rtcgroupcallactiontypes.js */




__d("RTCGroupCallActionTypes",[],(function a(b,c,d,e,f,g){

f.exports={CALL:"CALL",CALL_SUCCESS:"CALL_SUCCESS",CALL_ERROR:"CALL_ERROR",INIT:"INIT",WAIT_FOR_USER_INPUT:"WAIT_FOR_USER_INPUT",SET_CALL_SUMMARY:"SET_CALL_SUMMARY",SET_LAYOUT:"SET_LAYOUT",INIT_THREAD:"INIT_THREAD",ON_PARTICIPANT_LEFT:"ON_PARTICIPANT_LEFT",ON_PARTICIPANTS_ADDED:"ON_PARTICIPANTS_ADDED",ADD_PARTICIPANTS_TO_RING:"ADD_PARTICIPANTS_TO_RING",JOIN:"JOIN",JOIN_SUCCESS:"JOIN_SUCCESS",JOIN_ERROR:"JOIN_ERROR",HANGUP:"HANGUP",HANGUP_SUCCESS:"HANGUP_SUCCESS",HANGUP_ERROR:"HANGUP_ERROR",ON_CONFERENCE_STATE:"ON_CONFERENCE_STATE",DISMISS:"DISMISS",END_CALL:"END_CALL",ON_JOIN_REQUEST_SENT:"ON_JOIN_REQUEST_SENT",ON_JOIN_RESPONSE:"ON_JOIN_RESPONSE",ON_SERVER_MEDIA_UPDATE_SUCCESS:"ON_SERVER_MEDIA_UPDATE_SUCCESS",ON_CLIENT_MEDIA_UPDATE_RESPONSE:"ON_CLIENT_MEDIA_UPDATE_RESPONSE",INIT_LOCAL_USER:"INIT_LOCAL_USER",INIT_REMOTE_USERS:"INIT_REMOTE_USERS",ADD_REMOTE_STREAM:"ADD_REMOTE_STREAM",REMOVE_REMOTE_STREAM:"REMOVE_REMOTE_STREAM",REMOVE_ALL_REMOTE_STREAMS:"REMOVE_ALL_REMOTE_STREAMS",ADD_REMOTE_TRACK:"ADD_REMOTE_TRACK",REMOVE_REMOTE_TRACK:"REMOVE_REMOTE_TRACK",AUDIO_MUTED:"AUDIO_MUTED",AUDIO_UNMUTED:"AUDIO_UNMUTED",VIDEO_MUTED:"VIDEO_MUTED",VIDEO_UNMUTED:"VIDEO_UNMUTED",SELF_VIEW_COLLAPSED:"SELF_VIEW_COLLAPSED",SELF_VIEW_UNCOLLAPSED:"SELF_VIEW_UNCOLLAPSED",ADD_LOCAL_STREAM:"ADD_LOCAL_STREAM",REMOVE_LOCAL_STREAM:"REMOVE_LOCAL_STREAM",REMOVE_ALL_LOCAL_STREAMS:"REMOVE_ALL_LOCAL_STREAMS",ADD_LOCAL_SCREEN_STREAM:"ADD_LOCAL_SCREEN_STREAM",REMOVE_LOCAL_SCREEN_STREAM:"REMOVE_LOCAL_SCREEN_STREAM",REMOVE_ALL_LOCAL_SCREEN_STREAMS:"REMOVE_ALL_LOCAL_SCREEN_STREAMS",ADD_REMOTE_SCREEN_STREAM:"ADD_REMOTE_SCREEN_STREAM",REMOVE_REMOTE_SCREEN_STREAM:"REMOVE_REMOTE_SCREEN_STREAM",TOGGLE_REMOTE_STREAM:"TOGGLE_REMOTE_STREAM",SUBMIT_RATING:"SUBMIT_RATING",SUBMIT_FEEDBACK:"SUBMIT_FEEDBACK",RATING_SHOWN:"RATING_SHOWN",FEEDBACK_SHOWN:"FEEDBACK_SHOWN"};}),

null);

/** __static_js_modules__/screensharingwebdriverids.js */




__d("ScreenSharingWebDriverIDs",[],(function a(b,c,d,e,f,g){

f.exports={SHARE_SCREEN_BUTTON:"shareScreenButton",INSTALL_EXT_DIALOG:"install_extension_dialog"};}),

null);

/** __static_js_modules__/videocallwebdriverids.js */




__d("VideoCallWebDriverIDs",[],(function a(b,c,d,e,f,g){

f.exports={END_CALL_BUTTON:"endCallButton",FULL_SCREEN_BUTTON:"fullScreenButton",INCALL_VIDEO_CONTAINER:"incallVideoContainer",STAR_RATING_VIEW:"starRatingView",TOGGLE_AUDIO_BUTTON:"toggleAudioButton",TOGGLE_VIDEO_BUTTON:"toggleVideoButton"};}),

null);

/** www/__virtual__/x/XLinkshimLinkAsyncController.js */



__d("XLinkshimLinkAsyncController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/linkshim\/ajax\/link\/",{href:{type:"String",required:true},callsite:{type:"Enum",required:true,enumType:0}});}),

null);

/** js/linkshim/LinkshimURI.js */






__d('LinkshimURI',['AsyncRequest','XLinkshimLinkAsyncController','isFacebookURI'],(function a(b,c,d,e,f,g){

'use strict';








var h=
{asyncGet:function i(j,k,l){
if(c('isFacebookURI')(j)){
l(j);
return null;}


var m=c('XLinkshimLinkAsyncController').getURIBuilder().
setString('href',j.toString()).
setEnum('callsite',k).
getURI(),

n=new (c('AsyncRequest'))(m).
setHandler(function(o){
var p=o.getPayload();
l(p.uri);});

n.send();

return n;}};



f.exports=h;}),null);

/** js/linkshim/components/LinkshimLink.react.js */






__d('LinkshimLink.react',['Link.react','LinkshimURI','React','URI','areEqual'],(function a(b,c,d,e,f,g){

'use strict';var h,i,










j=c('React').PropTypes;h=babelHelpers.inherits

(k,c('React').Component);i=h&&h.prototype;function k(){var l,m;for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.















state=
{shimURI:undefined},m;}k.prototype.


componentWillMount=function(){
this.$LinkshimLink_asyncGetLinkShimURI(this.props);};
k.prototype.

componentWillUnmount=function(){
this.$LinkshimLink_abandonCurrentRequest();};
k.prototype.

componentWillReceiveProps=function(l){
if(!c('areEqual')(this.props,l))
this.$LinkshimLink_asyncGetLinkShimURI(l);};

k.prototype.

$LinkshimLink_abandonCurrentRequest=function(){
if(this.$LinkshimLink_asyncRequest)
this.$LinkshimLink_asyncRequest.abandon();};

k.prototype.

$LinkshimLink_asyncGetLinkShimURI=function(l){
this.$LinkshimLink_abandonCurrentRequest();
this.$LinkshimLink_asyncRequest=c('LinkshimURI').asyncGet
(l.uri,
l.callsite,
function(m){return this.setState
({shimURI:m});}.bind(this));};


k.prototype.

render=function(){
if(!this.state.shimURI)
return this.props.loadingPlaceholder?
this.props.loadingPlaceholder:
null;
var l=

this.props,m=l.children,n=babelHelpers.objectWithoutProperties(l,['children']);

return (c('React').createElement(c('Link.react'),babelHelpers['extends']
({href:this.state.shimURI},
n),
m));};


k.propTypes={uri:j.instanceOf(c('URI')).isRequired,callsite:j.number.isRequired,loadingPlaceholder:j.element};


f.exports=k;}),null);

/** www/__virtual__/x/XVideoCallAdminMessageController.js */



__d("XVideoCallAdminMessageController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/videocall\/admin_msg\/",{});}),

null);

/** js/mercury/clients/rtc/FBRTCAdminMessage.js */






__d('FBRTCAdminMessage',['FBRTCConstants','FBRTCCallConstants','FBRTCLogger','FBRTCUtils','XVideoCallAdminMessageController','emptyFunction','performanceNow'],(function a(b,c,d,e,f,g){











function h(i,j){'use strict';
this.$FBRTCAdminMessage_peerID=i;
this.$FBRTCAdminMessage_callID=j;
this.$FBRTCAdminMessage_startTimestamp=Date.now();
this.$FBRTCAdminMessage_connectedTime=null;
this.$FBRTCAdminMessage_endTime=null;}
h.prototype.






onCallConnected=function(){'use strict';
if(!this.$FBRTCAdminMessage_connectedTime)
this.$FBRTCAdminMessage_connectedTime=c('performanceNow')();};

h.prototype.




onCallEnded=function(){'use strict';
if(!this.$FBRTCAdminMessage_endTime)
this.$FBRTCAdminMessage_endTime=c('performanceNow')();};

h.prototype.




submit=function(i,j){'use strict';

if(!this.$FBRTCAdminMessage_endTime)
this.onCallEnded();

var k=0,
l=c('FBRTCCallConstants').FBRTCCallConnectionType.MISSED_CALL;
if(this.$FBRTCAdminMessage_connectedTime){
k=Math.ceil(this.$FBRTCAdminMessage_endTime-this.$FBRTCAdminMessage_connectedTime);
l=c('FBRTCCallConstants').FBRTCCallConnectionType.CONNECTED_CALL;}


var m=
l===c('FBRTCCallConstants').FBRTCCallConnectionType.CONNECTED_CALL||
j===c('FBRTCConstants').CallEndReason.IGNORE_CALL;

this.$FBRTCAdminMessage_publishCallRecord
({peer_id:this.$FBRTCAdminMessage_peerID,
call_id:this.$FBRTCAdminMessage_callID,
start_time:this.$FBRTCAdminMessage_startTimestamp,
call_duration:k,
message_type:l,
call_category:i,
call_acknowledged:m});};

h.prototype.

$FBRTCAdminMessage_publishCallRecord=function(i){'use strict';
var j=c('XVideoCallAdminMessageController').getURIBuilder().getURI();
c('FBRTCUtils').sendServerRequest
(j,c('emptyFunction'),

this.$FBRTCAdminMessage_onServerRequestFailure.bind(this,i.peer_id,i.call_id),
false,
null,
i);};

h.prototype.

$FBRTCAdminMessage_onServerRequestFailure=function(i,j,k){'use strict';
var l;
if(k){
l='Fail to log admin message, error '+k.error;}else 

l='Server timed out on logging admin message';

c('FBRTCLogger').getInstance().logError(i,j,l);};



f.exports=h;}),null);

/** js/mercury/clients/rtc/FBRTCIceCache.js */







__d("FBRTCIceCache",[],(function a(b,c,d,e,f,g){


function h(){"use strict";
this.$FBRTCIceCache_cache={};}
h.prototype.

reset=function(i,j){"use strict";
if(!this.$FBRTCIceCache_cache[i])
this.$FBRTCIceCache_cache[i]={};

this.$FBRTCIceCache_cache[i][j]=[];};
h.prototype.

cacheCandidate=function(i,j,k){"use strict";
if(!this.$FBRTCIceCache_cache[i])
this.$FBRTCIceCache_cache[i]={};

if(!this.$FBRTCIceCache_cache[i][j])
this.$FBRTCIceCache_cache[i][j]=[];


this.$FBRTCIceCache_cache[i][j].unshift(k);};
h.prototype.

drainCandidates=function(i,j,k){"use strict";
if(this.$FBRTCIceCache_cache[i]&&this.$FBRTCIceCache_cache[i][j]){
var l;
while(this.$FBRTCIceCache_cache[i][j].length>0){
l=this.$FBRTCIceCache_cache[i][j].pop();
k(l);}}};





f.exports=h;}),null);

/** js/mercury/clients/rtc/experiment/FBRTCExperiment.js */








__d('FBRTCExperiment',['FBRTCExperimentsConfig','QE'],(function a(b,c,d,e,f,g){
'use strict';h.













gen=function(i){
var j={params:{},in_experiment:false,auto_exposure:false},
k=c('FBRTCExperimentsConfig')[i]||j,
l=new h
(i,
k.params,
k.in_experiment);

if(k.auto_exposure)
l.logExposure(i);

return l;};


function h(i,j,k){
this.$FBRTCExperiment_name=i;
this.$FBRTCExperiment_params=j;
this.$FBRTCExperiment_inExperiment=k;}
h.prototype.






logExposure=function(){

if(this.$FBRTCExperiment_inExperiment)
c('QE').logExposure(this.$FBRTCExperiment_name);};

h.prototype.

getParam=function(i,j){
if(this.$FBRTCExperiment_params[i])
return this.$FBRTCExperiment_params[i].toString();

return j;};
h.prototype.

getInt=function(i,j){
if(this.$FBRTCExperiment_params[i])
return parseInt(this.$FBRTCExperiment_params[i],10);

return j;};
h.prototype.

getBool=function(i,j){
var k=this.$FBRTCExperiment_params;
if(k[i])
return k[i]==='1'||k[i]===1||k[i]==='true';

return j;};



f.exports=h;}),null);

/** js/mercury/clients/rtc/FBRTCSdpUtils.js */






__d('FBRTCSdpUtils',['UserAgent'],(function a(b,c,d,e,f,g){



var h='m=video 0',

i=function m(n){
return n.match(/^a=rtpmap:(\d+)\s/)[1];},


j=function m(n,o,p){
var q=i(n[o]),
r=n[p].split('RTP/SAVPF'),
s=r[1].split(/\s+/),
t=s.indexOf(q);
s.splice(t,1);
r[1]=s.join(' ');
n[p]=r.join('RTP/SAVPF');
n.splice(o,1);},


k=function m
(n,
o,
p){

var q=i(n[o]);
j(n,o,p);


var r=new RegExp('^a=(rtcp-fb|fmtp):'+q+' ');
n=n.filter(function(v){return !r.test(v);});



var s=new RegExp('^a=fmtp:(\\d+)\\s+apt='+q+'($|;)'),
t=n.reduce(function(v,w,x){
var y=w.match(s);
return y?[].concat(v,[y[1]]):v;},
[]).join('|'),



u=new RegExp('^a=rtpmap:('+
t+')\\s+rtx/|^a=fmtp:('+t+')\\s+apt=');

return n.filter(function(v){return !u.test(v);});},


l=

{replaceRTPSAVPFProfile:function m(n){





var o='UDP/TLS/RTP/SAVPF',
p='RTP/SAVPF';
while(n.indexOf(o)>=0)
n=n.replace(o,p);

return n;},





addIceOptionToSdp:function m(n,o){
"use strict";
var p="a=ice-options:",
q=n.indexOf(p);
if(q>=0){

var r=n.indexOf("\r",q);
return [n.slice(0,r),
" ",o,
n.slice(r)].join('');}





var s=p+o,
t=n.split("\r\n"),
u=false,
v=-1;
for(var w=0;w<t.length;w++){
var x=t[w].slice(0,2);
if(x=="s="){
u=true;
continue;}

if(u&&x=="a="){
v=w;
break;}}


if(v>=0){
t.splice(v,0,s);
return t.join("\r\n");}




return [n,s,"\r\n"].join('');},


preferIsac:function m(n){
var o=n.split("\r\n"),
p=-1,
q=-1,
r=-1;
for(var s=0;s<o.length;s++){
var t=o[s];
if(t.match(/m=audio\s+\d+\s+RTP\/SAVPF(\s+\d+)+/))
p=s;

if(r===-1&&p>-1&&t.match(/^a=rtpmap:/))
r=s;

if(t.match(/^a=rtpmap:\d+\s+ISAC\/16000/))
q=s;}


if(p===-1||q===-1||r===-1)

return o.join("\r\n");

var u=o[q];
j(o,q,p);
o.splice(r,0,u);
o[p]=o[p].replace
('RTP/SAVPF',
'RTP/SAVPF '+i(u));

return o.join("\r\n");},


preferCodec:function m(n,o,p){
var q=n.split('\r\n'),

r=new RegExp('m='+
(p?'video':'audio')+'\\s+\\d+\\s+RTP/SAVPF(\\s+\\d+)+'),

s=q.findIndex(function(y){return r.test(y);}),

t=new RegExp('^a=rtpmap:\\d+\\s+'+o),
u=q.findIndex(function(y){return t.test(y);}),

v=/^a=rtpmap:/,
w=q.findIndex
(function(y,z){return z>s&&v.test(y);});


if(s!==-1&&u!==-1&&w!==-1){
var x=q[u];
j(q,u,s);
q.splice(w,0,x);
q[s]=q[s].replace
('RTP/SAVPF','RTP/SAVPF '+
i(x));}



return q.join('\r\n');},





disableVideo:function m(n){

var o=/m=video\s+\S+/;
n=n.replace(o,h);
if(c('UserAgent').isBrowser('Firefox <= 37'))
n=this._makeDisabledVideoReceiveOnly(n);

return n;},







_makeDisabledVideoReceiveOnly:function m(n){
if(n.indexOf(h)>-1){
var o=n.split(h);
o[1]=o[1].replace(/send(recv|only)/,'recvonly');
n=o.join(h);}

return n;},







fixMobileIceSdp:function m(n){



n=n.replace(/^a=/,'');

n=n.split(/\s+username\s+.+password.+/)[0];

var o=n.match(/\s+relay\s+|\s+srflx\s+/),
p=n.match(/raddr.+rport.+/);


if(o&&!p){
o=o[0];
var q=n.split(o),
r=q[1].match(/^(\d+\.\d+\.\d+\.\d+)\s+(\d+)\s+/),
s=void 0,t=void 0;
if(r){


s=r[1];
t=r[2];
q[1]=q[1].replace(r[0],'');}else{





r=q[0].split(/\s+/);
s=r[4];
t=r[5];}

n=''+q[0]+o+'raddr '+s+' rport '+t+' '+q[1];}

return n;},


addAudioNack:function m(n){
var o=[];
n=n.split('\r\n').map(function(p){
var q='';

if(o.length>0&&



(/^a=rtpmap:(\d+)/.test(p)||

/^a=ssrc/.test(p)||
/^m=/.test(p))){


q+=this._getrtcpFeedbackLinesFromAudioFMTs(o)+'\r\n';
o=[];}


if(/^m=audio/.test(p))
o=p.
match(/^m=audio\s+[\d\/]+\s+[\w\/]+([\s+\d+]+)/)[1].
trim().
split(' ');

return q+p;}.
bind(this)).join('\r\n');

if(o.length>0)

n+='\r\n'+this._getrtcpFeedbackLinesFromAudioFMTs(o);

return n;},


_getrtcpFeedbackLinesFromAudioFMTs:function m(n){
return n.map(function(o){return 'a=rtcp-fb:'+o+' nack';}).join('\r\n');},


removeFEC:function m(n){
var o=n.split('\r\n'),
p=void 0,q=void 0;
for(var r=0;r<o.length;r++){
if(o[r].match(/^a=rtpmap:\d+\s+red\//))
p=r;

if(o[r].match(/^m=video/))
q=r;}


if(p&&q)
j(o,p,q);

return o.join('\r\n');},


removeH264:function m(n){
var o=n.split('\r\n'),

p=/^a=rtpmap:\d+\s+H264\//,
q=o.findIndex(function(t){return p.test(t);}),

r=/^m=video/,
s=o.findIndex(function(t){return r.test(t);});

return q!==-1&&s!==-1?
k(o,q,s).join('\r\n'):
n;},


removeVP9:function m(n){
var o=n.split('\r\n'),

p=/^a=rtpmap:\d+\s+VP9\//,
q=o.findIndex(function(t){return p.test(t);}),

r=/^m=video/,
s=o.findIndex(function(t){return r.test(t);});

return q!==-1&&s!==-1?
k(o,q,s).join('\r\n'):
n;},


isVideoSupported:function m(n){

return (n&&
n.indexOf('m=video')>-1&&
n.indexOf(h)===-1);},



setDtlsRole:function m(n,o){
if(!n.match(/setup:(active|passive|actpass)/)){


return n.replace(/(a=fingerprint:.+)/g,'$1\r\na=setup:'+o);}else 

return n.replace(/setup:actpass/g,'setup:'+o);},



setVideoBitrateConstraint:function m(n){


var o=720;
if(n.match(/^b=AS:/m))

return n;

n=n.replace
(/^a=mid:video\r\n/m,'a=mid:video\r\nb=AS:'+
o+'\r\n');

return n;},







removeSdparta:function m(n){
var o=n.split('\r\n'),
p='audio',
q=false,
r=-1;
for(var s=0;s<o.length;s++){
var t=o[s];
if(t.indexOf('m=audio')===0)
p='audio';

if(t.indexOf('m=video')===0){
q=true;
p='video';}

if(t.indexOf('a=mid:sdparta_')===0)
o[s]='a=mid:'+p;

if(t.indexOf('a=group:BUNDLE sdparta_')===0)
r=s;}


if(r>-1)
if(q){
o[r]='a=group:BUNDLE audio video';}else 

o[r]='a=group:BUNDLE audio';


return o.join('\r\n');}};



f.exports=l;}),null);

/** js/mercury/clients/rtc/FBRTCMessage.js */






__d('FBRTCMessage',['FBRTCConstants','FBRTCExperiment','FBRTCSdpUtils','FBRTCSupport','UserAgent'],(function a(b,c,d,e,f,g){








var h='mobile';



function i(j){'use strict';
if(!this.$FBRTCMessage_isValidMessage(j))
throw new Error('invalid webrtc message');

this.originalMessageData=j;
this.peerID=j.from;
this.callID=parseInt(j.call_id,10);
this.msg=JSON.parse(j.payload);
this.msgType=this.msg.type;
this.msgID=this.msg.msg_id;
this.ackID=this.msg.ack_id;
this.source=j.source;
this.peerSupportsVideoInterop=!!this.msg.supports_video_interop;

this.$FBRTCMessage_maybeDisableVideo();
this.$FBRTCMessage_maybeDisableFEC();
this.$FBRTCMessage_maybeDisableH264();
this.$FBRTCMessage_maybeDisableVP9();}
i.prototype.





$FBRTCMessage_isValidMessage=function(j){'use strict';
return j.from&&j.call_id&&j.payload;};
i.prototype.






$FBRTCMessage_maybeDisableVideo=function(){'use strict';


if(c('FBRTCSupport').isVideoInteropSupported()&&
this.peerSupportsVideoInterop)
return;


if(this.isFromMobile())
this.disableVideo();};

i.prototype.

disableVideo=function(){'use strict';
if(this.msg.sdp)
this.msg.sdp=c('FBRTCSdpUtils').disableVideo(this.msg.sdp);

if(this.msgType===c('FBRTCConstants').PayloadType.SET_VIDEO||
this.msgType===c('FBRTCConstants').PayloadType.OFFER||
this.msgType===c('FBRTCConstants').PayloadType.ICERESTART_OFFER||
this.msgType===c('FBRTCConstants').PayloadType.ANSWER||
this.msgType===c('FBRTCConstants').PayloadType.ICERESTART_ANSWER)



this.msg.videoon=false;};

i.prototype.





$FBRTCMessage_maybeDisableFEC=function(){'use strict';
if(this.isFromMobile()&&this.msg.sdp&&
this.msgType!==c('FBRTCConstants').PayloadType.ICE_CANDIDATE)
this.msg.sdp=c('FBRTCSdpUtils').removeFEC(this.msg.sdp);};

i.prototype.





$FBRTCMessage_maybeDisableH264=function(){'use strict';

if(this.isFromMobile()&&
c('FBRTCSupport').isWebrtcSupported()&&
this.msg.sdp&&
this.msgType!==c('FBRTCConstants').PayloadType.ICE_CANDIDATE){

var j=c('FBRTCExperiment').gen('rtc_browser_use_h264'),
k=j.getParam('allow_h264','no');
if(k!=='yes')
this.msg.sdp=c('FBRTCSdpUtils').removeH264(this.msg.sdp);}};


i.prototype.





$FBRTCMessage_maybeDisableVP9=function(){'use strict';

if(this.isFromMobile()&&
c('FBRTCSupport').isWebrtcSupported()&&
this.msg.sdp&&
this.msgType!==c('FBRTCConstants').PayloadType.ICE_CANDIDATE){

var j=c('FBRTCExperiment').gen('rtc_browser_use_vp9'),
k=j.getParam('allow_vp9','no');
if(k!=='yes')
this.msg.sdp=c('FBRTCSdpUtils').removeVP9(this.msg.sdp);}};


i.prototype.





isOffer=function(){'use strict';
return this.msgType===c('FBRTCConstants').PayloadType.OFFER;};
i.prototype.




isFromMobile=function(){'use strict';
return this.source===h;};
i.prototype.




isRemoteVideoSupported=function(){'use strict';
if(!this.msg.sdp||
this.msgType===c('FBRTCConstants').PayloadType.ICE_CANDIDATE)


return true;

return c('FBRTCSdpUtils').isVideoSupported(this.msg.sdp);};
i.prototype.




isRetry=function(){'use strict';
return !!this.msg.flag;};
i.prototype.






isForCall=function(j){'use strict';
return !j||
j===this.callID||
this.msgType===c('FBRTCConstants').PayloadType.OFFER||

this.msgType===c('FBRTCConstants').PayloadType.ICERESTART_OFFER||
this.msgType===c('FBRTCConstants').PayloadType.PCRESTART_OFFER||
this.msgType===c('FBRTCConstants').PayloadType.ICE_CANDIDATE;};
i.prototype.

getSignalingExperiments=function(){'use strict';
return this.msg.experiments;};




f.exports=i;}),null);

/** js/mercury/clients/rtc/FBRTCMessageDedup.js */






__d("FBRTCMessageDedup",[],(function a(b,c,d,e,f,g){

var h={},

i=






{check:function j(k,l,m){

if(!h[k])
h[k]={};



if(!h[k][l])
h[k][l]={};



if(h[k][l][m])
return false;



h[k][l][m]=true;

return true;}};



f.exports=i;}),null);

/** shared/banzai/BanzaiScribe.js */

























__d('BanzaiScribe',['Banzai'],(function a(b,c,d,e,f,g){








function h(j){










return {log:function k(l,m,n){






var o=[m];
if(n!=null)
o.push(n);


c('Banzai').post('scribe:'+l,o,j);}};}




var i=h({});
i.create=h;

f.exports=i;}),null);

/** js/modules/SamplingPolicyBase.js */









































__d('SamplingPolicyBase',[],(function a(b,c,d,e,f,g){


function h(){'use strict';

throw new Error('Tried to instantiate SamplingPolicyBase');}
h.prototype.




getName=function(){'use strict';return this.name;};h.prototype.




isSampled=function(){'use strict';
if(typeof this.sampled=='undefined')
this.sampled=this.decideIfSampled();

return this.sampled;};



f.exports=h;}),null);

/** js/modules/FbtraceForcedByServerPolicy.js */








__d('FbtraceForcedByServerPolicy',['FbtraceForcedByServer','SamplingPolicyBase'],(function a(b,c,d,e,f,g){

'use strict';




var h=void 0;

function i(){
this.name='FbtraceForcedByServerPolicy';}





i.get=function(){
if(typeof h=='undefined')
h=new i();

return h;};





function j(){
return c('FbtraceForcedByServer').forced;}


Object.assign
(i.prototype,
c('SamplingPolicyBase').prototype,
{decideIfSampled:j});


f.exports=i;}),null);

/** js/modules/guardFunction.js */







__d("guardFunction",[],(function a(b,c,d,e,f,g){

function h(i,j,
k){
return function(){
if(i.apply(k||this,arguments))
j.apply(k||this,arguments);};}




f.exports=h;}),null);

/** js/modules/Fbtrace.js */





__d('Fbtrace',['Arbiter','ArtilleryTraceIDUtils','BanzaiScribe','FbtraceForcedByServer','FbtraceForcedByServerPolicy','SiteData','guardFunction'],(function a(b,c,d,e,f,g){







































'use strict';














function h(){
Object.assign(this,h);}


Object.assign(h,



{isOn:function s(){return false;},






replySend:function s(t,u){
},










requestSend:function s(t,u,v){
m(t,u);


return {metadata:function w(){
return undefined;},






replyReceive:function w(x){
}};}});




var i=new h();







function j(s,t,u){
if(!s)

throw {name:'ArgumentError',
message:'no valid service name specified'};



if(!t)

throw {name:'ArgumentError',
message:'no valid version specified'};





var v=c('BanzaiScribe'),

w=0,

x=c('ArtilleryTraceIDUtils').newTraceId(),

y=c('ArtilleryTraceIDUtils').newObjectId(),

z=c('ArtilleryTraceIDUtils').traceIdToBucket(x),

aa=
{service:s,
version:t},


ba=function ga(ha){




if(typeof ha=='undefined')
return 'undefined';

if(typeof ha!='string')
ha=ga(JSON.stringify(ha));


return ha;},


ca=function ga(ha){
var ia='';
for(var ja in ha){
if(ia.length>0)
ia+='\x02';

ia+=ba(ja)+'\x03'+ba(ha[ja]);}

return ia;},


da=function ga
(ha,
ia,
event,
ja,
ka){

w++;

return [ka,w,x,ha,ia,
ba(event),ca(ja)].join('\x01');},


ea=function ga
(ha,
ia,
event,
ja,
ka){

if(!ka&&typeof ka=='undefined')
ka=Date.now()*1000;


var la=da(ha,ia,event,ja,ka);

v.log('fbtrace',la,z);},


fa=function ga(){
return y;};


ea
(c('ArtilleryTraceIDUtils').getDummyId(),
y,
'#rqrecv',
Object.assign(u||{},aa));


Object.assign(this,j,





{replySend:function ga(ha,ia){
ia=babelHelpers['extends']({},
ia,
aa,
{success:ha?'true':'false'});

ea(c('ArtilleryTraceIDUtils').getDummyId(),y,'#rpsend',ia);},











requestSend:function ga(ha,ia,ja){
m(ha,ia);

var ka=fa(),
la=c('ArtilleryTraceIDUtils').newObjectId();

ja=babelHelpers['extends']({},
ja,
aa,
{op:ha,
'remote:service':ia});


ea(ka,la,'#rqsend',ja);



return {metadata:function ma(){
return x+la;},






replyReceive:function ma(na){
ea(ka,la,'#rprecv',
Object.assign(na||{},aa));},


parentNode:this};}});}





Object.assign(j,



{isOn:function s(){return true;}});





function k(){
return i;}














function l(s,t,u){
u=u||{};
u.init=true;
var v=c('FbtraceForcedByServerPolicy').get();
if(v.isSampled()){
return new j(s,t,u);}else 

return new h();}



function m(s,t){
if(!s)

throw {name:'ArgumentError',
message:'no valid operation specified'};



if(!t)

throw {name:'ArgumentError',
message:'no valid remote:service specified'};}










function n(s,t){
var u=i,
v=void 0;
i=s;

try{v=t();}finally{

i=u;}

return v;}


var o=function s(t,u){
var v=k(),
w=u.request,






x=false;
if(!v.isOn()&&c('FbtraceForcedByServer').forced&&
/\/upload\/(?:composer|photos)\/|\/ajax\/composerx\/attachment\/media\//.
test(w.uri.toString())){
v=
l('photo_upload_kludge',String(c('SiteData').revision||'dev'),
{policy:'PhotoUpload'});

x=true;}


if(v.isOn()){
var y=x?{policy:'PhotoUpload'}:{};
if(w.userActionId)
y.user_action_id=w.userActionId;

var z=v.requestSend
(w.uri.toString(),
'www',
y);


w.fbtraceRemoteNode=z;
w.transport.setRequestHeader('X-Fbtrace-Meta',
z.metadata());}},




p=function s(t,u){
u.request.fbtraceRemoteNode.replyReceive
({is_last:u.response.is_last,
success:true});

setTimeout(function(){
u.request.fbtraceRemoteNode.parentNode.replySend(true,{});},
0);},


q=function s(t,u){
u.request.fbtraceRemoteNode.replyReceive
({is_last:u.response.is_last,
success:false,
error_code:u.response.error,
error_summary:u.response.errorSummary,
error_description:u.response.errorDescription});

setTimeout(function(){
u.request.fbtraceRemoteNode.parentNode.replySend(false,{});},
0);},


r=function s(t,u){
return u.request.fbtraceRemoteNode;};


c('Arbiter').subscribe('AsyncRequest/will_send',o);
c('Arbiter').subscribe('AsyncRequest/response',
c('guardFunction')(r,p));
c('Arbiter').subscribe('AsyncRequest/error',
c('guardFunction')(r,q));


f.exports=
{defaultNode:k,
requestReceive:l,
withDefaultNode:n};}),null);

/** www/__virtual__/x/XCollabCallSendMessageController.js */



__d("XCollabCallSendMessageController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/collab\/sendmessage\/",{recipient_id:{type:"Int",required:true},msg_id:{type:"Int",required:true},message_info:{type:"String",required:true},webrtc_fbtrace:{type:"Int"}});}),

null);

/** www/__virtual__/x/XVideoCallSendMessageController.js */



__d("XVideoCallSendMessageController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/videocall\/sendmessage\/",{recipient_id:{type:"Int",required:true},msg_id:{type:"Int",required:true},message_info:{type:"String",required:true},webrtc_fbtrace:{type:"Int"}});}),

null);

/** js/mercury/clients/rtc/FBRTCMessageSender.js */











__d('FBRTCMessageSender',['errorCode','CurrentUser','FBRTCConfig','FBRTCConstants','FBRTCLogger','FBRTCUtils','Fbtrace','Map','SiteData','FBRTCSupport','XVideoCallSendMessageController','XCollabCallSendMessageController'],(function a(b,c,d,e,f,g,h){
















var i=0;


function j(){'use strict';
this.onSendFailure=null;
this.$FBRTCMessageSender_logger=c('FBRTCLogger').getInstance();}
j.prototype.


sendOffer=function(k,l,m,n,o){'use strict';
return this.$FBRTCMessageSender_sendSdpMessage
(c('FBRTCConstants').PayloadType.OFFER,
k,
l,
m,
n,
o);};

j.prototype.

sendAnswer=function(k,l,m,n,o){'use strict';
return this.$FBRTCMessageSender_sendSdpMessage
(c('FBRTCConstants').PayloadType.ANSWER,
k,
l,
m,
n,
o);};

j.prototype.

sendPCRestartOffer=function(k,l,m,n,o){'use strict';
return this.$FBRTCMessageSender_sendSdpMessage
(c('FBRTCConstants').PayloadType.PCRESTART_OFFER,
k,
l,
m,
n,
o);};

j.prototype.

sendSdpUpdate=function(k,l,m,n,o){'use strict';
return this.$FBRTCMessageSender_sendSdpMessage
(c('FBRTCConstants').PayloadType.SDP_UPDATE,
k,
l,
m,
n,
o);};

j.prototype.







resendSdpMessage=function(k,l){'use strict';
l.flag=1;
this.$FBRTCMessageSender_sendSdpSignalingMessage(k,l);};
j.prototype.






resendPayload=function(k,l){'use strict';
l.flag=1;
this.$FBRTCMessageSender_sendSignalingMessage(k,l);};
j.prototype.

$FBRTCMessageSender_sendSdpMessage=function(k,l,m,n,o,p){'use strict';
var q=this.$FBRTCMessageSender_generateBasePayload(m,k);
q.sdp=n;
if(k===c('FBRTCConstants').PayloadType.OFFER){
q.handlescollision=true;
q.pranswer=false;}

if(k===c('FBRTCConstants').PayloadType.OFFER||
k===c('FBRTCConstants').PayloadType.ANSWER){
q.icerestart=false;
q.experiments=c('FBRTCConfig').supportedSignalingExperiments();}

q.videoon=o;
q.attributes=p;
q.ull=c('FBRTCConstants').convertFromUploadLogLevel
(c('FBRTCUtils').getLocalUploadLogLevel());

this.$FBRTCMessageSender_sendSdpSignalingMessage(l,q);
return q;};
j.prototype.

sendIceCandidate=function(k,l,m){'use strict';
var n=this.$FBRTCMessageSender_generateBasePayload
(l,
c('FBRTCConstants').PayloadType.ICE_CANDIDATE);

n.sdp_mid=m.sdpMid;
n.label=m.sdpMLineIndex;
n.sdp=m.candidate;


if(m.isDirectScreenShareFromRecipient){
n.attributes={};
n.attributes.isDirectScreenShareFromRecipient=
m.isDirectScreenShareFromRecipient;}


this.$FBRTCMessageSender_sendSignalingMessage(k,n);};
j.prototype.

sendHangup=function(k,l,m,n,o){'use strict';
var p=this.$FBRTCMessageSender_generateBasePayload
(l,
c('FBRTCConstants').PayloadType.HANGUP);

p.reason=c('FBRTCConstants').callEndReasonString(m);
p.subreason=o||'';
this.$FBRTCMessageSender_sendSignalingMessage(k,p,n);};
j.prototype.

sendOtherDismiss=function(k){'use strict';
var l=this.$FBRTCMessageSender_generateBasePayload
(k,
c('FBRTCConstants').PayloadType.OTHER_DISMISS);

this.$FBRTCMessageSender_sendSignalingMessage(c('CurrentUser').getID(),l);};
j.prototype.

sendOfferAck=function(k,l,m){var n=arguments.length<=3||arguments[3]===undefined?new (c('Map'))():arguments[3];'use strict';
this.$FBRTCMessageSender_sendAck
(k,
l,
m,
c('FBRTCConstants').PayloadType.OFFER_ACK,
n);};

j.prototype.

sendOfferNack=function(k,l,m){'use strict';
this.$FBRTCMessageSender_sendAck
(k,
l,
m,
c('FBRTCConstants').PayloadType.OFFER_NACK,
new (c('Map'))([['error_code',1356043]]));};

j.prototype.

sendAnswerAck=function(k,l,m){'use strict';
this.$FBRTCMessageSender_sendAck
(k,
l,
m,
c('FBRTCConstants').PayloadType.ANSWER_ACK);};

j.prototype.

sendAck=function(k,l,m){'use strict';
this.$FBRTCMessageSender_sendAck
(k,
l,
m,
c('FBRTCConstants').PayloadType.ACK,
new (c('Map'))([['ack_type',m.type]]));};

j.prototype.

sendMuteStateUpdate=function(k,l,m){'use strict';

var n=this.$FBRTCMessageSender_generateBasePayload
(l,
c('FBRTCConstants').PayloadType.SET_VIDEO);

n.videoon=m;
this.$FBRTCMessageSender_sendSignalingMessage(k,n);};
j.prototype.

sendVideoEscalationRequest=function(k,l,m){'use strict';

return this.sendVideoRequestResponse(k,l,0,m);};
j.prototype.

sendVideoRequestResponse=function(k,l,m,n){'use strict';
var o=this.$FBRTCMessageSender_generateBasePayload
(l,
c('FBRTCConstants').PayloadType.VIDEO_REQUEST);

o.ack_id=m;
o.videoon=n;
o.capability=c('FBRTCSupport').getCapabilities();
this.$FBRTCMessageSender_sendSignalingMessage(k,o);

return o;};
j.prototype.



sendMsgAck=function(){'use strict';};j.prototype.
sendOk=function(){'use strict';};j.prototype.
sendPranswer=function(){'use strict';};j.prototype.
sendIcerestartAnswer=function(){'use strict';};j.prototype.






$FBRTCMessageSender_generateBasePayload=function(k,l){'use strict';
var m=c('FBRTCUtils').generateRandomInt(),
n=
{version:i,
type:l,
call_id:k,
msg_id:m};

if(this.$FBRTCMessageSender_shouldSetVideoInteropFlag(l))



n.supports_video_interop=true;


return n;};
j.prototype.

$FBRTCMessageSender_shouldSetVideoInteropFlag=function(k){'use strict';
if(c('FBRTCSupport').isVideoInteropSupported())


return (k===c('FBRTCConstants').PayloadType.OFFER||
k===c('FBRTCConstants').PayloadType.ANSWER||
k===c('FBRTCConstants').PayloadType.PRANSWER||
k===c('FBRTCConstants').PayloadType.ICERESTART_OFFER||
k===c('FBRTCConstants').PayloadType.ICERESTART_ANSWER||
k===c('FBRTCConstants').PayloadType.PCRESTART_OFFER||
k===c('FBRTCConstants').PayloadType.PCRESTART_ANSWER||
k===c('FBRTCConstants').PayloadType.SDP_UPDATE||
k===c('FBRTCConstants').PayloadType.SET_VIDEO||
k===c('FBRTCConstants').PayloadType.VIDEO_REQUEST);


return false;};
j.prototype.





$FBRTCMessageSender_sendSdpSignalingMessage=function(k,l){'use strict';
this.$FBRTCMessageSender_sendSignalingMessage
(k,
l,
false,
true,
true);};

j.prototype.




$FBRTCMessageSender_sendAck=function(k,l,m,n){'use strict';
var o=(arguments.length<=4?undefined:arguments[4])||new (c('Map'))(),
p=this.$FBRTCMessageSender_generateBasePayload(l,n);
p.ack_id=m.msg_id;
if(m.flag===1)
p.flag=1;

p.ull=c('FBRTCConstants').convertFromUploadLogLevel
(c('FBRTCUtils').getLocalUploadLogLevel());

o.forEach(function(q,r,s){
p[r]=q;});

this.$FBRTCMessageSender_sendSignalingMessage(k,p);};
j.prototype.




$FBRTCMessageSender_sendSignalingMessage=
function(k,
l,
m,
n,
o){
'use strict';
var p=l.msg_id,
q=
{peer_id:k,
call_id:l.call_id,
msg_id:p,
msg_type:l.type},






r=
{call_id:l.call_id,
msg_id:p,
user_id:c('CurrentUser').getID(),
recipient_id:k,
msg_type:l.type,
app_id:256281040558,
app_version:String(c('SiteData').revision||'dev'),
op:'sendServerRequest:'+l.type,
policy:'WebRTC'},


s=c('Fbtrace').requestReceive
('browser',String(c('SiteData').revision||'dev'),r),

t=(c('FBRTCUtils').isPeerVCEndpoint(k)?c('XCollabCallSendMessageController'):c('XVideoCallSendMessageController')).


getURIBuilder().
setInt('recipient_id',k).
setInt('msg_id',p).
setString('message_info',JSON.stringify(l)).
setInt('webrtc_fbtrace',s.isOn()?1:0).
getURI();

if(n)
var u=this.$FBRTCMessageSender_sendSignalingMessage.bind
(this,
k,
l,
m,
false,
o);



var v=this.$FBRTCMessageSender_onServerRequestSuccess.bind(this,q),
w=this.$FBRTCMessageSender_onServerRequestFailure.bind
(this,q,u,o);

c('Fbtrace').withDefaultNode(s,function(){
c('FBRTCUtils').sendServerRequest
(t,
v,
w,
m);});



if(this.onMessageSent)
this.onMessageSent(k,l);


this.$FBRTCMessageSender_logger.logSentMessage(k,l.call_id,l);};
j.prototype.




$FBRTCMessageSender_onServerRequestSuccess=function(k){'use strict';
this.$FBRTCMessageSender_logger.logSentMessageSuccess
(k.peer_id,
k.call_id,
k.msg_type,
k.msg_id);};

j.prototype.




$FBRTCMessageSender_onServerRequestFailure=function(k,l,m,n){'use strict';
if(n)
var o=n.getError?n.getError():n;

this.$FBRTCMessageSender_logger.logSentMessageFailure
(k.peer_id,
k.call_id,
k.msg_type,
k.msg_id,
o);





var p=null;
if(o===1356001||
o===1356049){
p=c('FBRTCConstants').CallEndReason.NO_PERMISSION;}else
if(o===1356046||
o===1356045){
p=c('FBRTCConstants').CallEndReason.CALLER_NOT_VISIBLE;}else
if(o===1356003||
o===1356002||
o===1356044)
p=c('FBRTCConstants').CallEndReason.OTHER_NOT_CAPABLE;



if(!p&&l){
l();
return;}



if(m&&this.onSendFailure){
if(!p)
p=c('FBRTCConstants').CallEndReason.SIGNALING_MESSAGE_FAILED;

this.onSendFailure(p,o,k.msg_type);}};




f.exports=j;}),null);

/** js/mercury/clients/rtc/FBRTCPCConfig.js */






__d('FBRTCPCConfig',['FBRTCConfig','FBRTCVersionDetection','RTCConfig'],(function a(b,c,d,e,f,g){




var h="stun:stun.fbsbx.com:3478",


i=function k(l,m,n){
if(c('FBRTCVersionDetection').isChrome()&&
c('FBRTCVersionDetection').webrtcVersion()>=34){


var o={urls:l};
if(m&&n){
o.username=m;
o.credential=n;}

return [o];}

var p=[];
for(var q=0;q<l.length;q++)
if(m&&n){
p.push
({url:l[q],
username:m,
credential:n});}else 


p.push({url:l[q]});


return p;},


j=

{setTurnCredentials:function k(l){
this.turnIP=l.ip;
this.udpPort=l.udp_port;
this.tcpPort=l.tcp_port;
this.sslPort=l.ssl_tcp_port;
this.turnUsername=l.username;
this.turnPassword=l.password;},


getConfig:function k(){
if(c('FBRTCConfig').isVCEndpointCall()&&
c('RTCConfig').CollabDisableBrowserTurnDiscoveryGK)
return {iceServers:[]};


var l=i([h]).concat
(i(this._turnUrls(),this.turnUsername,this.turnPassword));
return {iceServers:l};},


getConstraints:function k(){


return {mandatory:{},
optional:
[{DtlsSrtpKeyAgreement:true},
{googHighBitrate:true},
{googVeryHighBitrate:true}]};},





_turnUrls:function k(){
if(c('FBRTCVersionDetection').isFirefox()&&
c('FBRTCVersionDetection').webrtcVersion()<27){

return ['turn:'+this.turnIP+':'+this.udpPort];}else 

return ['turn:'+
this.turnIP+':'+this.udpPort+'?transport=udp','turn:'+
this.turnIP+':'+this.tcpPort+'?transport=tcp','turn:'+
this.turnIP+':'+this.sslPort+'?transport=tcp'];}};






f.exports=j;}),null);

/** js/mercury/clients/rtc/FBRTCRetriableMessage.js */








__d('FBRTCRetriableMessage',['mixInEventEmitter','FBRTCConstants'],(function a(b,c,d,e,f,g){













var h=10000,
i=7000,

j=1;



function k(l){'use strict';
this.$FBRTCRetriableMessage_messageSender=l;
this.$FBRTCRetriableMessage_retryInterval=h;
this.$FBRTCRetriableMessage_retriesRemaining=j;
this.$FBRTCRetriableMessage_peerID=null;
this.$FBRTCRetriableMessage_payload=null;
this.$FBRTCRetriableMessage_timeout=null;}
k.prototype.

sendMessage=function(l,m,n,o,p,q){'use strict';
this.$FBRTCRetriableMessage_peerID=m;
switch(l){
case c('FBRTCConstants').PayloadType.PCRESTART_OFFER:
this.$FBRTCRetriableMessage_payload=this.$FBRTCRetriableMessage_messageSender.sendPCRestartOffer
(m,
n,
o,
p,
q);

break;
case c('FBRTCConstants').PayloadType.OFFER:
this.$FBRTCRetriableMessage_payload=this.$FBRTCRetriableMessage_messageSender.sendOffer
(m,
n,
o,
p,
q);

break;
case c('FBRTCConstants').PayloadType.ANSWER:

this.$FBRTCRetriableMessage_retryInterval=i;
this.$FBRTCRetriableMessage_payload=this.$FBRTCRetriableMessage_messageSender.sendAnswer
(m,
n,
o,
p,
q);

break;}

this.$FBRTCRetriableMessage_setTimeout();};
k.prototype.




isAckMsg=function(l){'use strict';
return this.$FBRTCRetriableMessage_payload&&this.$FBRTCRetriableMessage_payload.msg_id===l.ack_id;};
k.prototype.

stopRetrying=function(){'use strict';
if(this.$FBRTCRetriableMessage_timeout){
clearTimeout(this.$FBRTCRetriableMessage_timeout);
this.$FBRTCRetriableMessage_peerID=null;
this.$FBRTCRetriableMessage_payload=null;
this.$FBRTCRetriableMessage_timeout=null;}};

k.prototype.

$FBRTCRetriableMessage_setTimeout=function(){'use strict';
this.$FBRTCRetriableMessage_timeout=setTimeout(this.$FBRTCRetriableMessage_onTimeout.bind(this),this.$FBRTCRetriableMessage_retryInterval);};
k.prototype.

$FBRTCRetriableMessage_onTimeout=function(){'use strict';
if(this.$FBRTCRetriableMessage_retriesRemaining<1){
this.emit('timeoutFailure');}else{

this.emit('sendingRetry');
this.$FBRTCRetriableMessage_messageSender.resendSdpMessage(this.$FBRTCRetriableMessage_peerID,this.$FBRTCRetriableMessage_payload);
this.$FBRTCRetriableMessage_setTimeout();
this.$FBRTCRetriableMessage_retriesRemaining-=1;}};




c('mixInEventEmitter')(k,

{sendingRetry:true,

timeoutFailure:true});


f.exports=k;}),null);

/** js/mercury/clients/rtc/FBRTCStreamWrapper.js */








__d('FBRTCStreamWrapper',['mixInEventEmitter','FBRTCUtils'],(function a(b,c,d,e,f,g){






var h=100,


i=window.AudioContext||
window.webkitAudioContext||
window.mozAudioContext,



j;







function k(){'use strict';
this.$FBRTCStreamWrapper_audioEnabled=true;
this.$FBRTCStreamWrapper_videoEnabled=true;
this.$FBRTCStreamWrapper_stream=null;
this.$FBRTCStreamWrapper_el=null;
this.aspectRatio=k.aspectRatios.other;
this.videoWidth=0;
this.videoHeight=0;}
k.prototype.





setStream=function(l){var m=arguments.length<=1||arguments[1]===undefined?true:arguments[1];'use strict';
var n=this.hasStream();
this.stop();
this.$FBRTCStreamWrapper_stream=l;
this.$FBRTCStreamWrapper_setAudioTracksEnabledState();
this.$FBRTCStreamWrapper_setVideoTracksEnabledState();
if(m){
this.$FBRTCStreamWrapper_stream.onaddtrack=this.$FBRTCStreamWrapper_onTracksChanged.bind(this);
this.$FBRTCStreamWrapper_stream.onremovetrack=this.$FBRTCStreamWrapper_onTracksChanged.bind(this);
this.$FBRTCStreamWrapper_stream.onended=this.$FBRTCStreamWrapper_onStreamEnded.bind(this);
if(n)
this.emit('tracksChanged');}};


k.prototype.

getStreamId=function(){'use strict';
return this.$FBRTCStreamWrapper_stream&&this.$FBRTCStreamWrapper_stream.id;};
k.prototype.

getStream=function(){'use strict';
return this.$FBRTCStreamWrapper_stream;};
k.prototype.

hasStream=function(){'use strict';
return !!this.$FBRTCStreamWrapper_stream;};
k.prototype.

stop=function(){'use strict';
if(this.$FBRTCStreamWrapper_stream){
k.stopStream(this.$FBRTCStreamWrapper_stream);


this.$FBRTCStreamWrapper_stream=null;}};

k.prototype.




hasVideoTracks=function(){'use strict';
if(this.$FBRTCStreamWrapper_stream&&this.$FBRTCStreamWrapper_stream.getVideoTracks)
return this.$FBRTCStreamWrapper_stream.getVideoTracks().length>0;


return true;};
k.prototype.




hasVideo=function(){'use strict';
return this.$FBRTCStreamWrapper_videoEnabled&&this.hasVideoTracks();};
k.prototype.




hasAudioTracks=function(){'use strict';
if(this.$FBRTCStreamWrapper_stream&&this.$FBRTCStreamWrapper_stream.getAudioTracks)
return this.$FBRTCStreamWrapper_stream.getAudioTracks().length>0;


return true;};
k.prototype.




hasAudio=function(){'use strict';
return this.$FBRTCStreamWrapper_audioEnabled&&this.hasAudioTracks();};
k.prototype.






attachToVideoTag=function(l){'use strict';
if(this.$FBRTCStreamWrapper_stream){
this.$FBRTCStreamWrapper_el=l;
c('FBRTCUtils').attachMediaStream(l,this.$FBRTCStreamWrapper_stream);
this.$FBRTCStreamWrapper_waitForStream(l);}};

k.prototype.






getAudioAnalyser=function(){'use strict';
if(this.$FBRTCStreamWrapper_stream){
var l=this.$FBRTCStreamWrapper_getAudioContext(),
m=l.createMediaStreamSource(this.$FBRTCStreamWrapper_stream),
n=l.createAnalyser();
n.fftSize=2048;
m.connect(n);
return n;}};

k.prototype.

$FBRTCStreamWrapper_getAudioContext=function(){'use strict';
if(!j)
j=new i();

return j;};
k.prototype.

toggleMuteAudio=function(){'use strict';
if(!this.hasAudioTracks())
return;





this.$FBRTCStreamWrapper_audioEnabled=!this.$FBRTCStreamWrapper_audioEnabled;
this.$FBRTCStreamWrapper_setAudioTracksEnabledState();};
k.prototype.

$FBRTCStreamWrapper_setAudioTracksEnabledState=function(){'use strict';
if(this.$FBRTCStreamWrapper_stream){
var l=this.$FBRTCStreamWrapper_stream.getAudioTracks();
for(var m=0;m<l.length;m++)
l[m].enabled=this.$FBRTCStreamWrapper_audioEnabled;}};


k.prototype.

toggleMuteVideo=function(){'use strict';
this.$FBRTCStreamWrapper_videoEnabled=!this.$FBRTCStreamWrapper_videoEnabled;
if(this.$FBRTCStreamWrapper_videoEnabled){
this.$FBRTCStreamWrapper_setVideoTracksEnabledState();}else 



setTimeout(this.$FBRTCStreamWrapper_setVideoTracksEnabledState.bind(this),500);

this.$FBRTCStreamWrapper_onTracksChanged();};
k.prototype.

$FBRTCStreamWrapper_setVideoTracksEnabledState=function(){'use strict';
if(this.$FBRTCStreamWrapper_stream){
var l=this.$FBRTCStreamWrapper_stream.getVideoTracks();
for(var m=0;m<l.length;m++)
l[m].enabled=this.$FBRTCStreamWrapper_videoEnabled;}};


k.prototype.

setVideoEnabled=function(l){'use strict';
this.$FBRTCStreamWrapper_videoEnabled=l;
this.$FBRTCStreamWrapper_setVideoTracksEnabledState();
this.$FBRTCStreamWrapper_onTracksChanged();};
k.prototype.

$FBRTCStreamWrapper_waitForStream=function(l){'use strict';
if(!this.hasVideo()||l.currentTime>0){
this.$FBRTCStreamWrapper_onStreamStarted(l);}else 

setTimeout(this.$FBRTCStreamWrapper_waitForStream.bind(this,l),h);};

k.prototype.








$FBRTCStreamWrapper_detectVideoAttributes=function(l){'use strict';
this.videoWidth=l.videoWidth;
this.videoHeight=l.videoHeight;
var m=l.videoWidth/l.videoHeight;

if(c('FBRTCUtils').aboutEqual(m,16/9))
return k.aspectRatios['16:9'];


if(c('FBRTCUtils').aboutEqual(m,4/3))
return k.aspectRatios['4:3'];


return k.aspectRatios.other;};
k.prototype.

$FBRTCStreamWrapper_onStreamStarted=function(l){'use strict';
if(this.hasVideo()){
this.aspectRatio=this.$FBRTCStreamWrapper_detectVideoAttributes(l);}else 

this.aspectRatio=k.aspectRatios.other;

this.emit('streamStarted');};
k.prototype.

$FBRTCStreamWrapper_onStreamEnded=function(){'use strict';
this.emit('streamEnded');};
k.prototype.

$FBRTCStreamWrapper_onTracksChanged=function(event){'use strict';
if(this.$FBRTCStreamWrapper_shouldReattachVideo(event))
this.attachToVideoTag(this.$FBRTCStreamWrapper_el);

this.emit('tracksChanged');};
k.prototype.

$FBRTCStreamWrapper_shouldReattachVideo=function(l){'use strict';


return this.$FBRTCStreamWrapper_el&&l&&
l.type==='addtrack'&&
l.track.kind==='video';};




k.aspectRatios=
{'16:9':1,
'4:3':2,
other:3};


c('mixInEventEmitter')(k,


{streamStarted:true,

streamEnded:true,


tracksChanged:true});





k.stopStream=function(l){
if('active' in l){
if(l.active)
l.getTracks().forEach(function(m){
m.stop();});}else


if('stop' in l)
l.stop();};



f.exports=k;}),null);

/** www/__virtual__/x/XVideoCallTurnDiscoveryController.js */



__d("XVideoCallTurnDiscoveryController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/videocall\/turndiscovery\/",{version:{type:"Int",required:true}});}),

null);

/** js/mercury/clients/rtc/FBRTCTurnDiscovery.js */






__d('FBRTCTurnDiscovery',['Promise','FBRTCLogger','FBRTCUtils','XVideoCallTurnDiscoveryController'],(function a(b,c,d,e,f,g){





var h=3,











i=null,

j=



{requestTurnCreds:function k
(l,
m){

var n=arguments.length<=2||arguments[2]===undefined?h:arguments[2];
if(i)
return i;



var o=1,
p=c('XVideoCallTurnDiscoveryController').getURIBuilder().
setInt('version',o).
getURI();

i=new (c('Promise'))(function(q,r){
s(n);

function s(t){
c('FBRTCUtils').sendServerRequest
(p,
function(u){var v=u.payload;return q(v);},
function(){
if(t>0){
c('FBRTCLogger').getInstance().logError
(m,
l,
'Failed turn; going to retry');

s(t-1);}else 

r(new Error('failed'));});}});






return i;}};



f.exports=j;}),null);

/** www/__virtual__/x/XGroupCallController.js */



__d("XGroupCallController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/groupcall\/{?conference_name}\/",{conference_name:{type:"String",required:true},call_id:{type:"Int"},users_to_ring:{type:"FBIDSet",defaultValue:[]},has_video:{type:"Bool",defaultValue:false},server_info_data:{type:"String"},nonce:{type:"String"}});}),

null);

/** www/__virtual__/x/XGroupCallSigningController.js */



__d("XGroupCallSigningController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/groupcall\/init\/",{conference_name:{type:"String",required:true},call_id:{type:"Int"},users_to_ring:{type:"FBIDSet",defaultValue:[]},has_video:{type:"Bool",defaultValue:false},server_info_data:{type:"String"},nonce:{type:"String"}});}),

null);

/** www/__virtual__/x/XVideoCallController.js */



__d("XVideoCallController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/videocall\/incall\/",{peer_id:{type:"Int",required:true},call_id:{type:"Int"},is_caller:{type:"Bool",defaultValue:false},audio_only:{type:"Bool",defaultValue:false},nonce:{type:"String"}});}),

null);

/** www/__virtual__/x/XVideoCallInitController.js */



__d("XVideoCallInitController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/videocall\/init\/",{peer_id:{type:"Int",required:true},call_id:{type:"Int",required:true},is_caller:{type:"Bool",defaultValue:false},audio_only:{type:"Bool",defaultValue:false}});}),

null);

/** js/mercury/clients/rtc/FBRTCUrlManager.js */
























__d('FBRTCUrlManager',['regeneratorRuntime','Promise','FBRTCConfig','FBRTCLogger','FBRTCUtils','XVideoCallInitController','XVideoCallController','XGroupCallSigningController','XGroupCallController','CurrentUser','URI'],(function a(b,c,d,e,f,g){












var h=3,













i=function p(q,r,s,t){
c('FBRTCLogger').getInstance().logCallAction
(q,
r,
c('FBRTCLogger').CallAction.OLD_URI);

return c('XVideoCallController').getURIBuilder().
setInt('peer_id',q).
setInt('call_id',r).
setBool('is_caller',s).
setBool('audio_only',t).
getURI();},





j=function p
(q,
r,
s,
t,
u,
v,
w){

var x=arguments.length<=7||arguments[7]===undefined?'':arguments[7];
if(w===undefined||w===null)
w=h;


var y=c('XVideoCallInitController').getURIBuilder().
setInt('peer_id',q).
setInt('call_id',r).
setBool('is_caller',s).
setBool('audio_only',t).
getURI();

y=c('FBRTCUtils').isPeerVCEndpoint(q)||x==='quickdial'?
k(y):
y;

c('FBRTCUtils').sendServerRequest
(y,


function(z){
u(z.payload.uri);},



function(z){
if(w>0){
p
(q,r,s,t,
u,
v,
w-1,
x);}else 




u(i(q,r,s,t));});};





function k(p){
if(c('CurrentUser').isEmployee()){
p=p.setSubdomain
(c('CurrentUser').hasWorkUser()||c('CurrentUser').isWorkUser()?'fb':'www');



var q='/intern/';
return c('URI').getRequestURI().getPath().substr(0,q.length)!==q?
p:
p.setDomain
(p.getDomain().toString().replace(/.(intern|cstools)./,'.'));}



return p;}


function l(p){
var q=p.conferenceName,
r=p.callID,
s=p.usersToRing,
t=p.hasVideo,
u=p.nonce,
v=p.serverInfoData,

w;return c('regeneratorRuntime').async(function x(y){while(1)switch(y.prev=y.next){case 0:w=c('XGroupCallSigningController').getURIBuilder().
setString('conference_name',q).
setInt('call_id',r).
setFBIDSet('users_to_ring',s).
setBool('has_video',t).
setString('server_info_data',v).
setString('nonce',u).
getURI();return y.abrupt('return',

new (c('Promise'))(function(z,aa){
c('FBRTCUtils').sendServerRequest
(w,
function(ba){
z(ba.payload.uri);},

function(ba){
aa(ba);});}));


case 2:case 'end':return y.stop();}},null,this);}


var m=function p(q,r,s,t,
u,v,
w){
if(w===undefined||w===null)
w=h;


var x=c('XGroupCallSigningController').getURIBuilder().
setFBID('call_id',q).
setBool('is_caller',s).
setBool('audio_only',t).
setFBIDSet('users_to_ring',r).
getURI();

c('FBRTCUtils').sendServerRequest
(x,
function(y){
u(y.payload.uri);},

function(y){
if(w>0){
p
(q,
r,
s,
t,
u,
v,
w-1);}else{


var z=c('XGroupCallController').getURIBuilder().
setFBID('call_id',q).
setBool('is_caller',s).
setBool('audio_only',t).
setFBIDSet('users_to_ring',r).
getURI();
u(z);}});},








n=function p(q){
if(c('FBRTCConfig').disableURLManager())
return;

window.history.replaceState({},'',q);},


o=





{init:function p(q){
this._peerID=q;},






onCallStarted:function p(){
n(i(this._peerID));},





getCallUri:j,




getGroupCallUri:function p
(q,
r,
s,
t,
u,
v){

var w;return c('regeneratorRuntime').async(function x(y){while(1)switch(y.prev=y.next){case 0:w=0;case 1:if(!(w<3)){y.next=14;break;}y.prev=2;y.next=5;return c('regeneratorRuntime').awrap

(l
({conferenceName:q,
callID:r,
usersToRing:s,
hasVideo:t,
nonce:u,
serverInfoData:v}));case 5:return y.abrupt('return',y.sent);case 8:y.prev=8;y.t0=y['catch'](2);


case 11:w++;y.next=1;break;case 14:return y.abrupt('return',



c('XGroupCallController').getURIBuilder().
setString('conference_name',q).
setInt('call_id',r).
setFBIDSet('users_to_ring',s).
setBool('has_video',t).
setString('server_info_data',v).
setString('nonce',u).
getURI());case 15:case 'end':return y.stop();}},null,this,[[2,8]]);},


getNonceUri:function p
(q,
r,
s,
t,
u){

var v=arguments.length<=5||arguments[5]===undefined?'':arguments[5],
w=c('XVideoCallController').getURIBuilder().
setInt('peer_id',q).
setInt('call_id',r).
setBool('is_caller',s).
setBool('audio_only',t).
setString('nonce',u).
getURI();
return c('FBRTCUtils').isPeerVCEndpoint(q)||v==='quickdial'?
k(w):
w;}};



f.exports=o;}),null);

/** js/mercury/clients/rtc/groupcall/RTCMediaDevices.js */






__d('RTCMediaDevices',['invariant','Promise','RTCOnDeviceChangePoller'],(function a(b,c,d,e,f,g,h){

'use strict';






















var i=navigator.mediaDevices&&
typeof navigator.mediaDevices.enumerateDevices==='function',
j=window.MediaStreamTrack&&
window.MediaStreamTrack.getSources==='function',

k=1000,
l=void 0,

m=
{addEventListener:function o(p,q){
if(p==='devicechange'&&c('RTCOnDeviceChangePoller').isNeeded()){
if(!l)
l=new (c('RTCOnDeviceChangePoller'))
(k);


l.add(q);
return;}
var r=

navigator,s=r.mediaDevices;

if(s&&'addEventListener' in s)
s.addEventListener(p,q);},



removeEventListener:function o(p,q){
if(p==='devicechange'&&c('RTCOnDeviceChangePoller').isNeeded()){
if(l)
l.remove(q);

return;}
var r=

navigator,s=r.mediaDevices;

if(s&&'removeEventListener' in s)
s.removeEventListener(p,q);},



isSupported:function o(p){
switch(p){
case 'enumerateDevices':
return i||j;


default:return Boolean(navigator.mediaDevices);}},



enumerateDevices:function o(){
if(i){

navigator.mediaDevices||h(0,
'navigator.mediaDevices should be defined');

return c('Promise').resolve(navigator.mediaDevices.enumerateDevices());}else
if(j)
return new (c('Promise'))(function(p){return window.MediaStreamTrack.getSources(p);}).
then(n);


return c('Promise').reject(new Error('enumerateDevices() not supported'));},


filterDevicesOfKind:function o(p,q){
return p.filter(function(r){return r.kind===q;});}};




function n(o){
return o.map(function(p){
var q=p.id,
r=p.kind,
s=p.label;

return ({deviceId:q,
groupId:'',
kind:r==='video'?
'videoinput':
'audioinput',
label:s});});}



f.exports=m;}),null);

/** js/mercury/clients/rtc/groupcall/adapters/RTCOnDeviceChangePoller.js */





__d('RTCOnDeviceChangePoller',['Promise','RTCMediaDevices'],(function a(b,c,d,e,f,g){h.





isNeeded=function(){'use strict';var i=
navigator,j=i.mediaDevices;

if(!c('RTCMediaDevices').isSupported('enumerateDevices')||
j&&'ondevicechange' in j)
return false;


return true;};







function h(i){'use strict';this.$RTCOnDeviceChangePoller_callbacks=[];this.$RTCOnDeviceChangePoller_checksum='';this.$RTCOnDeviceChangePoller_interval=0;this.$RTCOnDeviceChangePoller_timer=0;this.





















$RTCOnDeviceChangePoller_enumerate=function(){
c('RTCMediaDevices').enumerateDevices().
then(function(j){
var k=j.
map(function(r){return r.deviceId+':'+r.label+':'+r.groupId;}).
sort().
join('~');

if(k===this.$RTCOnDeviceChangePoller_checksum)
return;


this.$RTCOnDeviceChangePoller_checksum=k;

for(var l=this.$RTCOnDeviceChangePoller_callbacks,m=Array.isArray(l),n=0,l=m?l:l[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var o;if(m){if(n>=l.length)break;o=l[n++];}else{n=l.next();if(n.done)break;o=n.value;}var p=o;

try{p();}catch(
q){



}}}.

bind(this))['catch']
(function(j){





return c('Promise').resolve();}).

then(function(){
this.$RTCOnDeviceChangePoller_timer=setTimeout(this.$RTCOnDeviceChangePoller_enumerate,this.$RTCOnDeviceChangePoller_interval);}.
bind(this))['catch']
(function(j){



});}.
bind(this);this.$RTCOnDeviceChangePoller_interval=i;}h.prototype.add=function(i){'use strict';this.$RTCOnDeviceChangePoller_callbacks.push(i);this.$RTCOnDeviceChangePoller_start();};h.prototype.remove=function(i){'use strict';this.$RTCOnDeviceChangePoller_callbacks=this.$RTCOnDeviceChangePoller_callbacks.filter(function(j){return j!==i;});this.$RTCOnDeviceChangePoller_stop();};h.prototype.$RTCOnDeviceChangePoller_start=function(){'use strict';if(this.$RTCOnDeviceChangePoller_timer!==0)return;this.$RTCOnDeviceChangePoller_timer=setTimeout(this.$RTCOnDeviceChangePoller_enumerate,0);};h.prototype.

$RTCOnDeviceChangePoller_stop=function(){'use strict';
if(this.$RTCOnDeviceChangePoller_callbacks.length>0)
return;


if(this.$RTCOnDeviceChangePoller_timer!==0){
clearTimeout(this.$RTCOnDeviceChangePoller_timer);
this.$RTCOnDeviceChangePoller_timer=0;}};




f.exports=h;}),null);

/** js/mercury/clients/rtc/FBRTCUserSettings.js */








__d('FBRTCUserSettings',['Promise','FBRTCConfig','RTCMediaDevices','mixInEventEmitter'],(function a(b,c,d,e,f,g){

'use strict';







var h=

{audioInput:'',
audioOutput:'default',
videoInput:'',
remoteStream:null,

_audioInputLabel:null,
_videoInputLabel:null,





isEnabled:function i(){
return Boolean(c('RTCMediaDevices').isSupported('enumerateDevices')&&
c('FBRTCConfig').settingsEnabled());},


selectAudioInputByLabel:function i(j){
if(!this.audioInput)
this.audioInput=this._selectByLabel(j,this._audioInputLabel);


return this.audioInput;},


selectVideoInputByLabel:function i(j){
if(!this.videoInput)
this.videoInput=this._selectByLabel(j,this._videoInputLabel);


return this.videoInput;},


_selectByLabel:function i(j,k){
for(var l=j,m=Array.isArray(l),n=0,l=m?l:l[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var o;if(m){if(n>=l.length)break;o=l[n++];}else{n=l.next();if(n.done)break;o=n.value;}var p=o;
if(k&&k===p.label)
return p.deviceId;}


return null;},






previewStart:function i(){
this.emit('previewStarted');},





previewEnd:function i(){
this.emit('previewEnded');},





save:function i(j){var k=j.audioInput,l=j.audioOutput,m=j.videoInput;
return new (c('Promise'))(function(n){
var o=
!!(k&&this.audioInput!==k||
m&&this.videoInput!==m);


this.audioInput=k;
this.audioOutput=l;
this.videoInput=m;

this.emit('saved',o);

n(o);}.
bind(this));},








updateForLocalStream:function i(j){
if(j.videoMediaSourceId){
this.videoInput=j.videoMediaSourceId;}else{
var k=
j.getVideoTracks(),l=k[0];
if(l)
this._videoInputLabel=l.label;}



if(j.audioMediaSourceId){
this.audioInput=j.audioMediaSourceId;}else{
var m=
j.getAudioTracks(),n=m[0];
if(n)
this._audioInputLabel=n.label;}},




updateForRemoteStream:function i(j){
this.remoteStream=j;
this.emit('remoteStreamChanged');},



addListener:function i(){},
emit:function i(){}};


c('mixInEventEmitter')(h,

{previewStarted:true,
previewEnded:true,
remoteStreamChanged:true,

saved:true});


f.exports=h;}),null);

/** js/mercury/clients/rtc/components/FBRTCButton.react.js */






__d('FBRTCButton.react',['cx','MessengerButton.react','React','XUIOverlayButton.react','joinClasses'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,








k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').PureComponent);j=i&&i.prototype;l.prototype.












render=function(){var m=

this.props,n=m.className,o=m.messengerUI,p=m.type,q=babelHelpers.objectWithoutProperties(m,['className','messengerUI','type']);
if(o)

return (c('React').createElement(c('MessengerButton.react'),babelHelpers['extends']
({className:n,
type:p},
q)));




return (c('React').createElement(c('XUIOverlayButton.react'),babelHelpers['extends']
({className:c('joinClasses')("_1-7l",n)},
q)));};


function l(){i.apply(this,arguments);}l.propTypes={label:k.node.isRequired,messengerUI:k.bool.isRequired,type:k.oneOf(['primary','secondary']).isRequired};


f.exports=l;}),null);

/** js/mercury/clients/rtc/components/FBRTCCallControlPopover.react.js */








__d('FBRTCCallControlPopover.react',['fbt','LayerFadeOnHide','LayerFadeOnShow','React','XUIContextualDialog.react','XUIContextualDialogBody.react','XUIContextualDialogTitle.react'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,










k=c('React').PropTypes,




l=
{NONE:0,
REMOTE_VIDEO_UNSUPPORTED:1,
NO_VIDEO_TRACKS:2,
VIDEO_AUTO_DISABLED:3,
SCREENSHARING_UNAVAILABLE:4,
PEER_IS_SHARING_SCREEN:5,
IS_AUDIO_CALL:6};i=babelHelpers.inherits







(m,c('React').PureComponent);j=i&&i.prototype;m.prototype.



















render=function(){
var n=this.$FBRTCCallControlPopover_getTitle();

if(n)

return (c('React').createElement(c('XUIContextualDialog.react'),this.$FBRTCCallControlPopover_popoverProps(),
n,
this.$FBRTCCallControlPopover_getBody()));





return (c('React').createElement(c('XUIContextualDialog.react'),this.$FBRTCCallControlPopover_popoverProps(),
this.$FBRTCCallControlPopover_getBody()));};


m.prototype.

$FBRTCCallControlPopover_getTitle=function(){
if(this.props.reason===l.NO_VIDEO_TRACKS)

return (c('React').createElement(c('XUIContextualDialogTitle.react'),
{className:this.props.className},h._(["Can't find camera","d4f0b3197e106831ee7ea2a9310a79dc"])));









return null;};
m.prototype.

$FBRTCCallControlPopover_getBody=function(){
var n=null;

switch(this.props.reason){
case l.NONE:
break;
case l.REMOTE_VIDEO_UNSUPPORTED:
n=h._(["Video is disabled for this call because {name}'s device does not support video.","4ea520683db726fb00d1374e4d470057"],[h.param


('name',this.props.peerName)]);



break;
case l.NO_VIDEO_TRACKS:
n=h._(["Connect your camera and refresh the page to turn on video. If your camera is already connected, try restarting your browser.","018495574c2221d1b278826f996b0d30"]);







break;
case l.VIDEO_AUTO_DISABLED:
n=h._(["Video is paused because the connection is slow.","09062cc629ce02f7e80625e39be3e81d"]);






break;
case l.SCREENSHARING_UNAVAILABLE:
n=this.props.isVCEndpointCall?h._(["Screen sharing is not currently available for Messenger to room calls.","f3a49ccb571634550c9f66b9d51f92e4"]):h._(["Screen sharing is disabled for this call because {name}'s device does not support receiving screen sharing.","d3d196cbb35baa892a0bb201c8804d21"],[h.param













('name',this.props.peerName)]);



break;
case l.PEER_IS_SHARING_SCREEN:
n=h._(["{name} is already sharing their screen. You can share your screen as soon as they stop sharing.","2ccae0fc73f31f31bf14b28efbbd60be"],[h.param



('name',this.props.peerName)]);




break;
case l.IS_AUDIO_CALL:
n=h._(["Screen sharing is only available for video calls.","bd56fb073aaf0f26f220600f44cf9342"]);






break;}



return (c('React').createElement(c('XUIContextualDialogBody.react'),
{className:this.props.className},
n));};


m.prototype.

$FBRTCCallControlPopover_popoverProps=function(){
var n=
{alignment:'left',
behaviors:
{LayerFadeOnHide:c('LayerFadeOnHide'),
LayerFadeOnShow:c('LayerFadeOnShow')},

contextRef:function(){return this.props.reference;}.bind(this),
hoverContextRef:function(){return this.props.reference;}.bind(this),
position:'above',
shown:false,
width:this.props.width};


return n;};
function m(){i.apply(this,arguments);}m.Types=l;m.propTypes={reason:k.number.isRequired,peerName:k.string.isRequired,isVCEndpointCall:k.bool,reference:k.object.isRequired,width:k.number.isRequired};


f.exports=m;}),null);

/** js/mercury/clients/rtc/components/FBRTCCallTimer.react.js */






__d('FBRTCCallTimer.react',['React'],(function a(b,c,d,e,f,g){

'use strict';var h,i,



j=c('React').PureComponent;h=babelHelpers.inherits









(k,j);i=h&&h.prototype;function k(){var l,m;for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.

state=
{secondsElapsed:Math.floor(Date.now()/1000)-this.props.start},this.























$FBRTCCallTimer_tick=function(){
this.setState
({secondsElapsed:Math.floor(Date.now()/1000)-this.props.start});}.

bind(this),m;}k.prototype.componentDidMount=function(){this.$FBRTCCallTimer_intervalId=setInterval(this.$FBRTCCallTimer_tick,1000);};k.prototype.componentWillUnmount=function(){clearInterval(this.$FBRTCCallTimer_intervalId);};k.prototype.render=function(){var l=this.state.secondsElapsed;return c('React').createElement('span',null,l>=3600?('0'+Math.floor(l/3600)).slice(-2)+':':'',('0'+Math.floor(l%3600/60)).slice(-2),':',('0'+l%60).slice(-2));};


f.exports=k;}),null);

/** js/mercury/clients/rtc/components/FBRTCFadeInMixin.js */







__d('FBRTCFadeInMixin',['cx','ReactDOM','joinClasses'],(function a(b,c,d,e,f,g,h){






var i=

{componentDidMount:function j(){
var k=c('ReactDOM').findDOMNode(this);
k.style.opacity=0;
k.className=c('joinClasses')(k.className,"_2hy");
setTimeout(function(){
k.style.opacity=1;},
1);}};




f.exports=i;}),null);

/** js/mercury/clients/rtc/components/FBRTCFeedbackCompleteView.react.js */





__d('FBRTCFeedbackCompleteView.react',['cx','fbt','FBRTCButton.react','FBRTCCallControlActions','FBRTCFadeInMixin','React'],(function a(b,c,d,e,f,g,h,i){









var j=c('React').createClass({displayName:'FBRTCFeedbackCompleteView',

mixins:[c('FBRTCFadeInMixin')],

onCallBackButtonClicked:function k(){

return;},


onCloseButtonClicked:function k(){
window.close();
return;},


messageString:function k(){
if(this.props.skipped)
return i._(["Your call has ended","fb3a401edf9925de137a55f63e90f0a3"]);




return i._(["Thank you for your feedback!","a149c9f0b730519cf64c041d2533f5df"]);},





render:function k(){

return (c('React').createElement('div',{className:"_1-7k"},
c('React').createElement('p',{className:"_4j_k"},
this.messageString()),

c('React').createElement('div',null,
c('React').createElement(c('FBRTCButton.react'),
{className:"_g6b",
label:i._(["Close Window","b80e2bbbfd01c25921574092c2a9a34d"]),



messengerUI:this.props.messengerUI,
onClick:this.onCloseButtonClicked,
type:'primary'}),

this.props.isGroupCall?null:c('React').createElement(c('FBRTCButton.react'),
{className:"_g6b",
label:i._(["Call Back","0579390609b1bf0234c7496d03d46e62"]),



messengerUI:this.props.messengerUI,
onClick:c('FBRTCCallControlActions').redialCall,
type:'primary'}))));}});








f.exports=j;}),null);

/** js/mercury/clients/rtc/components/FBRTCVideo.react.js */






__d('FBRTCVideo.react',['cx','EmitterSubscription','FBRTCStreamWrapper','FBRTCUtils','React','ReactDOM','joinClasses','shallowEqual'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,











k=c('React').PropTypes,l=c('React').Component;i=babelHelpers.inherits

















(m,l);j=i&&i.prototype;function m(){var n,o;for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=j.constructor).call.apply(n,[this].concat(q)),this.












state=
{currentStream:null},this.


streamListener=null,o;}m.prototype.

componentWillReceiveProps=function(n){
var o=n.stream;
if(o!==this.props.stream){
if(this.streamListener)
this.streamListener.remove();


this.streamListener=o?
o.addListener('streamStarted',function(){return this.$FBRTCVideo_attachAudio();}.bind(this)):
null;}};

m.prototype.

shouldComponentUpdate=function(n){
return !c('shallowEqual')(this.props,n)||this.$FBRTCVideo_streamDidChange(n);};
m.prototype.

$FBRTCVideo_streamDidChange=function(n){var o=n.stream,
p=o?o.getStream():null;
return p!==this.state.currentStream;};
m.prototype.

render=function(){

return (c('React').createElement('video',
{className:c('joinClasses')
(this.props.className,
"_1yvx"),

autoPlay:true,
muted:this.props.muted,
onContextMenu:function n(o){return o.preventDefault();}}));};


m.prototype.

componentDidMount=function(){
this.$FBRTCVideo_attachStream();
this.$FBRTCVideo_attachAudio();};
m.prototype.

componentDidUpdate=function(n){
if(this.$FBRTCVideo_streamDidChange(n)||
n.mediaStream!==this.props.mediaStream)
this.$FBRTCVideo_attachStream();


if(n.audioSinkID!==this.props.audioSinkID)
this.$FBRTCVideo_attachAudio();};

m.prototype.

$FBRTCVideo_attachStream=function(){var n=
this.props,o=n.stream,p=n.mediaStream,
q=c('ReactDOM').findDOMNode(this);
if(q)
if(o){
o.attachToVideoTag(q);
this.setState
({currentStream:o.getStream()});}else

if(p)


c('FBRTCUtils').attachMediaStream(q,p);};


m.prototype.

$FBRTCVideo_attachAudio=function(){
var n=this.props.audioSinkID,
o=c('ReactDOM').findDOMNode(this);

if(n&&o&&o.setSinkId)

o.setSinkId(n);};

m.defaultProps={muted:false};m.propTypes={audioSinkID:k.string,className:k.string,mediaStream:k.any,muted:k.bool,stream:k.instanceOf(c('FBRTCStreamWrapper'))};



f.exports=m;}),null);

/** js/mercury/clients/rtc/groupcall/RTCEndCallReason.js */







__d('RTCEndCallReason',['fbt','FBRTCConstants','MultiwayTypes'],(function a(b,c,d,e,f,g,h){

'use strict';

var i=c('FBRTCConstants').CallEndReason,j=c('FBRTCConstants').CollabCallEndSubreason,
k=c('MultiwayTypes').DismissReason,l=c('MultiwayTypes').HangupReason,m=c('MultiwayTypes').RtcResponseStatusCode;














function n(o){this.$RTCEndCallReason_reason=-1;this.$RTCEndCallReason_origin='local';this.$RTCEndCallReason_remoteEnded=false;


if(typeof o==='string'||o instanceof String){
this.$RTCEndCallReason_reason=i.strNames.indexOf(o);}else 

this.$RTCEndCallReason_reason=o;}

n.prototype.

setSubreason=function(o){
this.$RTCEndCallReason_subreason=o;

return this;};
n.prototype.

getSubreason=function(){
return this.$RTCEndCallReason_subreason;};
n.prototype.

setRemoteEnded=function(o){
this.$RTCEndCallReason_origin=o?
'remote':
'local';

return this;};
n.prototype.

toStrName=function(){var o=arguments.length<=0||arguments[0]===undefined?true:arguments[0];
return o?
this.$RTCEndCallReason_toStrName()+'_'+this.$RTCEndCallReason_origin:
this.$RTCEndCallReason_toStrName();};
n.prototype.

$RTCEndCallReason_toStrName=function(){
if(this.$RTCEndCallReason_reason<0||this.$RTCEndCallReason_reason>i.strNames.length)
return 'Unknown';

return i.strNames[this.$RTCEndCallReason_reason];};
n.prototype.

getReasonID=function(){
return this.$RTCEndCallReason_reason;};
n.prototype.

toString=function(){var o=arguments.length<=0||arguments[0]===undefined?false:arguments[0],
p=(this.$RTCEndCallReason_toStringReason()||'').toString();

return o?
p+' '+this.$RTCEndCallReason_toStringSubreason():
p;};
n.prototype.

$RTCEndCallReason_toStringReason=function(){
switch(this.$RTCEndCallReason_reason){
case i.NO_ANSWER_TIMEOUT:
case i.IGNORE_CALL:
return h._(["No Answer","2ab245644934fd7c3f9f351230fb2b5e"]);





case i.OTHER_NOT_CAPABLE:
if(this.$RTCEndCallReason_subreason===
j.MCU_INVALID_STREAM_CONFIGURATION)
return h._(["Too many clients connected to the room","1afe9a99600593a238ae8facba6aacdc"]);








case i.INCOMING_TIMEOUT:
case i.NO_PERMISSION:
case i.OTHER_CARRIER_BLOCKED:
return h._(["Not Reachable","755e80b29d3601ff59067bda78978ca5"]);





case i.SIGNALING_MESSAGE_FAILED:
case i.WEBRTC_ERROR:
case i.NO_UI_ERROR:
case i.CALLER_NOT_VISIBLE:
case i.CLIENT_ERROR:
return h._(["Call Failed","2fcbddb7a01574dde83290fafde61852"]);






case i.UNSUPPORTED_VERSION:
return h._(["Can't Connect Call","5a14c69827c2ea487b393b3e579a70dd"]);





case i.IN_ANOTHER_CALL:
return h._(["In Another Call","1d46964b40143865f6ba8dae42786996"]);





case i.CARRIER_BLOCKED:
return h._(["Switch to Wi-Fi to complete your call","72825d0e4f44a8a2b317e3085a4371c2"]);






case i.CLIENT_INTERRUPTED:
return h._(["Call Interrupted","f9c5d0199e7865e230e1027f7060c77b"]);





case i.HANGUP_CALL:
case i.ACCEPT_AFTER_HANGUP:
return h._(["Call Ended","c8fc0f9645ad08fe5b7cc7d731fa21b1"]);





case i.CONNECTION_DROPPED:
return h._(["Connection Lost","a64b596fbbe06327940f26a0e24423d5"]);







case i.OTHER_INSTANCE_HANDLED:
return null;







default:return null;}};

n.prototype.

$RTCEndCallReason_toStringSubreason=function(){

if(this.$RTCEndCallReason_reason!==i.OTHER_NOT_CAPABLE&&
this.$RTCEndCallReason_reason!==i.SIGNALING_MESSAGE_FAILED)

return '';


switch(this.$RTCEndCallReason_subreason){
case j.REMOTE_PEER_HANGUP:
case j.REMOTE_PEER_REJECT:
return '';



case j.CLOSED_BY_MCU:
return '- Call expired';

case j.CLOSED_AS_STALE:
return '- Server failed, call is stale';

case j.CALL_INITIALIZATION_FAILED:
return '- Call initialization to room failed';

case j.SIP_CONNECTION_INITIALIZATION_FAILED:
return 'or No Answer';

case j.LOST_MCU_CONNECTION:
return '- MCU Media connection failed';

case j.LOST_MCU_THRIFT_CONNECTION:
return '- MCU infrastructure dropped connection';

case j.LOST_SIP_ADAPTER_CONNECTION:
return '- SIP infrastructure dropped connection';

case j.MCU_NO_AUDIO_STREAM:
return '- Invalid audio stream';

case j.MCU_INVALID_STREAM_CONFIGURATION:
return '- Invalid stream configuration';

case j.UNKNOWN:

default:return '- Unexpected call failure: '+(this.$RTCEndCallReason_subreason||'null');}};

n.

fromHangupReason=

function(o){

switch(o){
case l.IGNORE_CALL:
return new n(i.IGNORE_CALL);

case l.NO_ANSWER_TIMEOUT:
return new n(i.NO_ANSWER_TIMEOUT);

case l.HANGUP_CALL:
return new n(i.HANGUP_CALL);

case l.CLIENT_ERROR:
return new n(i.CLIENT_ERROR);

case l.IN_ANOTHER_CALL:
return new n(i.IN_ANOTHER_CALL);

case l.CLIENT_INTERRUPTED:
return new n(i.CLIENT_INTERRUPTED);


default:return new n(i.HANGUP_CALL);}};

n.

fromDismissRequest=
function(o){

if(!o)
return new n(i.HANGUP_CALL);


switch(o.reason){
case k.ANSWERED_ON_ANOTHER_DEVICE:
case k.REJECTED_ON_ANOTHER_DEVICE:
return new n(i.OTHER_INSTANCE_HANDLED);

case k.CALL_ENDED:
return new n(i.HANGUP_CALL);

case k.IN_ANOTHER_CALL:
return new n(i.IN_ANOTHER_CALL);

case k.CONNECTION_DROPPED:
return new n(i.CONNECTION_DROPPED);

case k.REMOVED_BY_PARTICIPANT:
return new n(i.HANGUP_CALL);

case k.REJECTED_BY_CALLEE:
return new n(i.IGNORE_CALL);

case k.INTERNAL_ERROR:
return new n(i.SIGNALING_MESSAGE_FAILED);


default:return new n(i.HANGUP_CALL);}};

n.

fromResponseStatusCode=

function(o){

switch(o){
case m.PRECONDITION_FAILURE:
case m.METHOD_NOT_ALLOWED:
case m.UNAUTHORIZED:
return new n(i.NO_PERMISSION);

case m.SERVICE_UNAVAILABLE:
return new n(i.SIGNALING_MESSAGE_FAILED);

case m.SERVER_INTERNAL_ERROR:
case m.BAD_REQUEST:
case m.BUSY_HERE:
case m.CONDITIONAL_REQUEST_FAILED:
case m.NOT_FOUND:
return new n(i.CLIENT_ERROR);


default:return new n(i.HANGUP_CALL);}};




f.exports=n;}),null);

/** js/mercury/clients/rtc/groupcall/RTCGroupCallDispatcher.js */





__d('RTCGroupCallDispatcher',['ExplicitRegistrationDispatcher'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits




(j,c('ExplicitRegistrationDispatcher'));i=h&&h.prototype;


function j(k){'use strict';
i.constructor.call(this,k);
this.dispatch=this.dispatch.bind(this);}



f.exports=new j({strict:true});}),null);

/** js/mercury/clients/rtc/groupcall/RTCUserMediaConstraints.js */







__d('RTCUserMediaConstraints',['FBRTCConstants','RTCConfig'],(function a(b,c,d,e,f,g){

'use strict';

var h=c('FBRTCConstants').VideoQuality,


















































































i=
{width:1920,
height:1080,
frameRate:30},


j=
{width:1280,
height:720,
frameRate:30},


k=
{width:854,
height:480,
frameRate:30},


l=
{width:320,
height:180,
frameRate:15},


m=
{audio:function r(s){
return s?{deviceId:s}:true;},


video:function r
(s,
t){

var u=arguments.length<=2||arguments[2]===undefined?c('RTCConfig').CollaborationCallQuality.videoToRoom:arguments[2];
if(s===h.NO_VIDEO)
return false;


var v=t?{deviceId:t}:null;

if(s===h.CUSTOM_VIDEO)
return babelHelpers['extends']({},
u,
v);



var w=n(s);

return babelHelpers['extends']
({width:o(w,'width'),
height:o(w,'height'),
frameRate:o(w,'frameRate')},
v);},



chromeMediaSource:function r(s,

t){
var u=s.video,
v=m.chromify(u);

if(typeof v!=='object')

return {audio:false,
video:Boolean(v)};



var w=v.mandatory,x=v.optional,y=x===undefined?[]:x;


return {audio:false,
video:
{mandatory:babelHelpers['extends']({},
w,
{chromeMediaSource:'desktop',
chromeMediaSourceId:t}),

optional:
[{googTemporalLayeredScreencast:true}].concat
(y)}};},







chromify:function r
(s){

if(!s||typeof s!=='object')
return Boolean(s);



if(!q(s))
return s;
var t=

s.mandatory,u=t===undefined?{}:t,v=s.optional,w=v===undefined?[]:v;

for(var x=Object.entries(s),y=Array.isArray(x),z=0,x=y?x:x[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var aa;if(y){if(z>=x.length)break;aa=x[z++];}else{z=x.next();if(z.done)break;aa=z.value;}var ba=aa,ca=ba[0],da=ba[1];
if(ca==='require'||ca==='advanced'||ca==='mediaSource')
continue;


var ea=da&&typeof da==='object'?
da:
{ideal:da};

if(Number.isFinite(ea.exact)){
ea.min=ea.exact;
ea.max=ea.exact;}


var fa=ea.ideal,ga=ea.exact;

if(fa!==undefined)
if(Number.isFinite(fa)){var ha,ia;
w.push((ha={},ha[
p(ca,'min')]=fa,ha),(ia={},ia[
p(ca,'max')]=fa,ia));}else{

var ja;
w.push((ja={},ja[p(ca)]=fa,ja));}



if(ga!==undefined&&!Number.isFinite(ga)){
u[p(ca)]=ga;}else{
var ka=
['min','max'];for(var la=0;la<ka.length;la++){var ma=ka[la];
if(Number.isFinite(ea[ma]))
u[p(ca,ma)]=ea[ma];}}}





if(s.advanced)
w.push.apply(w,s.advanced);


var na={};

if(Object.keys(u).length>0)
na.mandatory=u;

if(w.length>0)
na.optional=w;


return na;}};



function n(r){
switch(r){
case h.FHD_VIDEO:
return i;

case h.HD_VIDEO:
return j;

case h.LQ_VIDEO:
return l;

case h.SD_VIDEO:
return k;





default:return j;}}



function o
(r,
s){

var t=r[s];


return {min:Math.min(l[s],t),
max:Math.max(i[s],t),
ideal:t};}



function p(r,s){
if(s)
return ''+s+r.charAt(0).toUpperCase()+r.slice(1);


return r==='deviceId'?
'sourceId':
r;}


function q(r){


return Object.keys(r).
some(function(s){return s!=='mandatory'&&s!=='optional';});}


f.exports=m;}),null);

/** js/mercury/clients/rtc/groupcall/adapters/MediaStream.js */






__d("MediaStream",[],(function a(b,c,d,e,f,g){

f.exports=window.MediaStream||window.webkitMediaStream;}),null);

/** js/mercury/clients/rtc/groupcall/utils/RTCAudioTrackNoiseDetector.js */









__d('RTCAudioTrackNoiseDetector',['invariant','Promise','MediaStream'],(function a(b,c,d,e,f,g,h){

'use strict';





var i='audio track with absolute silence',
j='audio track data timeout',
k='wrong track type, expected "audio"',
l=100,

m=

{ABSOLUTE_SILENCE_ERROR:i,
DATA_TIMEOUT_ERROR:j,
WRONG_TRACK_TYPE_ERROR:k,

detect:function n(o,p){
if('kind' in o&&o.kind!=='audio')
return c('Promise').reject(new Error(k));


var q=new (c('MediaStream'))();
q.addTrack(o);

var r=new AudioContext(),
s=r.createMediaStreamSource(q),
t=r.createScriptProcessor(0,1,1),

u=l,

v=function w(){
t!=null||h(0,'noise detector should be defined');

t.onaudioprocess=null;
t.disconnect();
t=null;

s!=null||h(0,'stream source should be defined');
s.disconnect();
s=null;

q!=null||h(0,'stream should be defined');
q.removeTrack(o);
q=null;

r!=null||h(0,'audio context should be defined');
return c('Promise').resolve(r.close())['catch']
(function(){return c('Promise').resolve();}).
then(function(){
r=null;});};



return c('Promise').race
([new (c('Promise'))(function(w,x){
t!=null||h(0,'noise detector should be defined');
t.onaudioprocess=function(y){var z=y.inputBuffer;

for(var aa=z.getChannelData(0),ba=Array.isArray(aa),ca=0,aa=ba?aa:aa[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var da;if(ba){if(ca>=aa.length)break;da=aa[ca++];}else{ca=aa.next();if(ca.done)break;da=ca.value;}var ea=da;
if(ea!==0){
w();
return;}}



if(u>0){
u--;}else 

x(new Error(i));};



s!=null||h(0,'stream source should be defined');
s.connect(t);

r!=null||h(0,'audio context should be defined');
t.connect(r.destination);}),


new (c('Promise'))(function(w){return setTimeout(w,p);}).
then(function(){throw new Error(j);})]).

then(function(){return v();})['catch']
(function(w){return v().then(function(){throw w;});});}};



f.exports=m;}),null);

/** js/mercury/clients/rtc/groupcall/utils/RTCVideoTrackActivityDetector.js */









__d('RTCVideoTrackActivityDetector',['invariant','Promise','MediaStream'],(function a(b,c,d,e,f,g,h){

'use strict';





var i=window.URL||window.webkitURL,
j=
HTMLMediaElement&&'srcObject' in HTMLMediaElement.prototype,

k='video track playback timeout',
l='unexpected video track ready state',
m='wrong track type, expected "video"',

n=

{PLAYBACK_TIMEOUT_ERROR:k,
WRONG_READY_STATE_ERROR:l,
WRONG_TRACK_TYPE_ERROR:m,

detect:function o(p,q){
if('kind' in p&&p.kind!=='video')
return c('Promise').reject(new Error(m));


var r=document.createElement('video');
r.muted=true;

var s=new (c('MediaStream'))();
s.addTrack(p);

var t=void 0,
u=0,

v=function w(){
clearInterval(u);

if(r){
r.pause();
if(j){
r.srcObject=null;}else
if(r.src){
i.revokeObjectURL(r.src);
r.src='';}

r.removeEventListener('timeupdate',t);
r=null;}


if(s){
s.removeTrack(p);
s=null;}};



return c('Promise').race
([new (c('Promise'))(function(w,x){
r!=null||h(0,'video element should be defined');

if(j){
r.srcObject=s;}else 

r.src=i.createObjectURL(s);


t=function y(z){
r!=null||h(0,'video element should be defined');
if(r.currentTime>0)
if(p.readyState==='live'){
w();
v();}else 

x(new Error(l));};




c('Promise').resolve(r.pause()).
then(function(){
r!=null||h(0,'video element should be defined');
return r.play();}).

then(function(){
t();

r!=null||h(0,'video element should be defined');
r.addEventListener('timeupdate',t);


u=setInterval(t,50);})[
'catch']
(function(y){return x(y);});}),


new (c('Promise'))(function(w){return setTimeout(w,q);}).
then(function(){
throw new Error(k);})])[
'catch']

(function(w){
v();
throw w;});}};




f.exports=n;}),null);

/** js/mercury/clients/rtc/groupcall/utils/RTCMediaStreamValidator.js */











__d('RTCMediaStreamValidator',['Promise','MediaStream','RTCAudioTrackNoiseDetector','RTCVideoTrackActivityDetector'],(function a(b,c,d,e,f,g){

'use strict';






var h='no audio tracks',
i='no video tracks',
j='too many audio tracks',
k='too many video tracks',
l='unexpected audio track(s)',
m='unexpected video track(s)',






n=

{NO_AUDIO_TRACKS_ERROR:h,
NO_VIDEO_TRACKS_ERROR:i,
TOO_MANY_AUDIO_TRACKS_ERROR:j,
TOO_MANY_VIDEO_TRACKS_ERROR:k,
UNEXPECTED_AUDIO_TRACKS_ERROR:l,
UNEXPECTED_VIDEO_TRACKS_ERROR:m,

validate:function q
(r,
s){

var t=arguments.length<=2||arguments[2]===undefined?{}:arguments[2],u=



t.audio,v=u===undefined?1000:u,w=t.video,x=w===undefined?1000:w;
return c('Promise').all
([o(r,s,v),
p(r,s,x)]).

then(function(){return r;});}};



function o
(q,
r,
s){

var t=q.getAudioTracks();

if(!r.audio)
return t.length>0?
c('Promise').reject(new Error(l)):
c('Promise').resolve(q);


if(t.length<1){
return c('Promise').reject(new Error(h));}else
if(t.length>1)
return c('Promise').reject(new Error(j));


return c('RTCAudioTrackNoiseDetector').detect(t[0],s).
then(function(){return q;});}


function p
(q,
r,
s){

var t=q.getVideoTracks();

if(!r.video)
return t.length>0?
c('Promise').reject(new Error(m)):
c('Promise').resolve(q);


if(t.length<1){
return c('Promise').reject(new Error(i));}else
if(t.length>1)
return c('Promise').reject(new Error(k));


return c('RTCVideoTrackActivityDetector').detect(t[0],s).
then(function(){return q;});}


f.exports=n;}),null);

/** js/mercury/clients/rtc/groupcall/RTCUtils.js */








__d('RTCUtils',['Promise','CurrentUser','RTCConfig','RTCEndCallReason','RTCMediaStreamValidator','RTCScreenSharing','RTCUserMediaConstraints','UserAgent','FBRTCConstants','randomInt'],(function a(b,c,d,e,f,g){

'use strict';











var h=c('FBRTCConstants').VideoQuality,



i=



{generateRandomInt:function j(){
return c('randomInt')(0,4294967294)+1;},


isGroupCall:function j(k){
return k.split(':')[0]==='GROUP';},


getPeerID:function j(k){
if(this.isGroupCall(k))
throw new Error('Not a P2P call: '+k);
var l=
k.split(':'),m=l.slice(1);
return m[0]===c('CurrentUser').getID()?
m[1]:
m[0];},


createRequestHeader:function j
(k,l,m){

var n=
{type:k,
transactionId:i.generateRandomInt().toString(),
retryCount:0,
conferenceName:l};


if(m)
n.serverInfoData=m;


return n;},


createResponseHeader:function j
(k,l){

var m=
{type:k.type,
transactionId:k.transactionId,
retryCount:0,
conferenceName:k.conferenceName,
responseStatusCode:l};


if(k.serverInfoData)
m.serverInfoData=k.serverInfoData;


return m;},


getUserMedia:function j
(k){
var l=
navigator,m=l.mediaDevices;


if(typeof k.video==='object'&&
k.video.mediaSource)
return c('RTCScreenSharing').getUserMedia(k);


var n=this._parseConstraints(k);

if(m&&typeof m.getUserMedia==='function')
return c('Promise').resolve(m.getUserMedia(n));


return new (c('Promise'))(function(o,p){
if(navigator.getUserMedia){
navigator.getUserMedia(n,o,p);}else
if(navigator.webkitGetUserMedia){
navigator.webkitGetUserMedia(n,o,p);}else
if(navigator.mozGetUserMedia){
navigator.mozGetUserMedia(n,o,p);}else
if(navigator.msGetUserMedia){
navigator.msGetUserMedia(n,o,p);}else 

p('getUserMedia not supported');});},




_parseConstraints:function j
(k){

if(c('UserAgent').isBrowser('Chrome')||c('UserAgent').isBrowser('Opera')){
var l=k.audio,m=k.video,
n={};

if(l!=undefined)
n.audio=c('RTCUserMediaConstraints').chromify(l);

if(m!=undefined)
n.video=c('RTCUserMediaConstraints').chromify(m);


return n;}


return k;},


getUserMediaWithValidation:function j
(k){

var l=arguments.length<=1||arguments[1]===undefined?5:arguments[1],
m=
{audio:1000,
video:1000};


return new (c('Promise'))(function(n,o){
var p=function(q){
this.getUserMedia(k).
then
(function(r){
return c('RTCMediaStreamValidator').validate
(r,
k,
m).

then(n)['catch']
(function(s){





this.stopMediaStream(r);

throw s;}.
bind(this));}.
bind(this),
o)['catch']

(function(r){
if(q>0){
p(q-1);}else 

o(r);});}.


bind(this);

p(l);}.
bind(this));},


initLocalStream:function j(k){
return i.getUserMedia
({audio:c('RTCUserMediaConstraints').audio(),
video:c('RTCUserMediaConstraints').video
(k?
h.HD_VIDEO:
h.NO_VIDEO)});},




initLocalScreenStream:function j(){

var k=arguments.length<=0||arguments[0]===undefined?'screen':arguments[0];
return i.getUserMedia
({audio:false,
video:babelHelpers['extends']({},

c('RTCConfig').CollaborationCallQuality.screen_v2||

c('RTCConfig').CollaborationCallQuality.screen,

{mediaSource:k})});},




isFullScreen:function j(){

return !!(document.fullscreenElement||
document.mozFullScreenElement||
document.webkitFullscreenElement||
document.msFullscreenElement);},





requestFullScreen:function j(){var k=arguments.length<=0||arguments[0]===undefined?document.documentElement:arguments[0];
if(typeof k.requestFullscreen==='function'){
k.requestFullscreen();}else
if(typeof k.msRequestFullscreen==='function'){
k.msRequestFullscreen();}else
if(typeof k.mozRequestFullScreen==='function'){
k.mozRequestFullScreen();}else
if(typeof k.webkitRequestFullscreen==='function')
k.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);},



exitFullScreen:function j(){
if(typeof document.exitFullscreen==='function'){
document.exitFullscreen();}else
if(typeof document.msExitFullscreen==='function'){
document.msExitFullscreen();}else
if(typeof document.mozCancelFullScreen==='function'){
document.mozCancelFullScreen();}else
if(typeof document.webkitExitFullscreen==='function')
document.webkitExitFullscreen();},



toggleFullScreen:function j(){
if(this.isFullScreen()){
this.exitFullScreen();}else 

this.requestFullScreen();},



endCallReasonFromHangupReason:function j

(k){

return c('RTCEndCallReason').fromHangupReason(k).getReasonID();},


endCallReasonFromDismissRequest:function j
(k){

return c('RTCEndCallReason').fromDismissRequest(k).getReasonID();},


endCallReasonFromResponseStatusCode:function j

(k){

return c('RTCEndCallReason').fromResponseStatusCode(k).getReasonID();},


stopMediaStream:function j(k){

if(!k.active&&'active' in k)
return;


for(var l=k.getTracks(),m=Array.isArray(l),n=0,l=m?l:l[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var o;if(m){if(n>=l.length)break;o=l[n++];}else{n=l.next();if(n.done)break;o=n.value;}var p=o;
if(p.readyState!=='ended')
p.stop();}}};





f.exports=i;}),null);

/** js/mercury/clients/rtc/groupcall/actions/RTCCallActions.js */






__d('RTCCallActions',['RTCCallActionTypes','RTCGroupCallActionTypes','RTCGroupCallDispatcher','RTCUtils','emptyFunction','mixInEventEmitter'],(function a(b,c,d,e,f,g){

'use strict';













var h=
{addListener:c('emptyFunction'),
emit:c('emptyFunction'),

initialize:function i
(j,
k,
l,
m,
n){

c('RTCGroupCallDispatcher').dispatch
({type:c('RTCGroupCallActionTypes').INIT,
conferenceName:k,
callID:m,
serverInfoData:l,
protocol:j,
callTrigger:n});},



reset:function i(j){
c('RTCGroupCallDispatcher').dispatch
({type:c('RTCCallActionTypes').RESET,
conferenceName:j});},



setCallSummary:function i(j){
c('RTCGroupCallDispatcher').dispatch
({type:c('RTCGroupCallActionTypes').SET_CALL_SUMMARY,
callSummary:j});},



call:function i(j,k){
c('RTCGroupCallDispatcher').dispatch
({type:c('RTCGroupCallActionTypes').CALL,
usersToRing:j,
peerConnection:k});},



callSuccess:function i(){var j=arguments.length<=0||arguments[0]===undefined?false:arguments[0];
c('RTCGroupCallDispatcher').dispatch
({type:c('RTCGroupCallActionTypes').CALL_SUCCESS,
connected:j});},



incomingCallSuccess:function i(){
c('RTCGroupCallDispatcher').dispatch
({type:c('RTCCallActionTypes').INCOMING_CALL_SUCCESS});},




callError:function i(j){
c('RTCGroupCallDispatcher').dispatch
({type:c('RTCGroupCallActionTypes').CALL_ERROR,
endCallReason:c('RTCUtils').endCallReasonFromResponseStatusCode
(j),

endCallSubreason:'Call error: '+(j||0)});},



hangupSuccess:function i(){
c('RTCGroupCallDispatcher').dispatch
({type:c('RTCGroupCallActionTypes').HANGUP_SUCCESS});},




hangupError:function i(j){
c('RTCGroupCallDispatcher').dispatch
({type:c('RTCGroupCallActionTypes').HANGUP_ERROR,
error:j});},



join:function i(j){
this.call([],j);},


hangup:function i

(j,
k){

c('RTCGroupCallDispatcher').dispatch
({type:c('RTCGroupCallActionTypes').HANGUP,
hangupReason:j,
detailedReasonString:k,
endCallReason:c('RTCUtils').endCallReasonFromHangupReason(j)});},



initLocalUser:function i(j){
c('RTCGroupCallDispatcher').dispatch
({type:c('RTCGroupCallActionTypes').INIT_LOCAL_USER,
localUser:j});},



initRemoteUsers:function i(j){
c('RTCGroupCallDispatcher').dispatch
({type:c('RTCGroupCallActionTypes').INIT_REMOTE_USERS,
remoteUsers:j});},



addLocalStream:function i(j){
c('RTCGroupCallDispatcher').dispatch
({type:c('RTCGroupCallActionTypes').ADD_LOCAL_STREAM,
stream:j});},



removeLocalStream:function i(j){
c('RTCGroupCallDispatcher').dispatch
({type:c('RTCGroupCallActionTypes').REMOVE_LOCAL_STREAM,
stream:j});},



removeAllLocalStreams:function i(){var j=arguments.length<=0||arguments[0]===undefined?false:arguments[0];
c('RTCGroupCallDispatcher').dispatch
({type:c('RTCGroupCallActionTypes').REMOVE_ALL_LOCAL_STREAMS,
stopStreams:j});},



removeAllLocalScreenStreams:function i(){var j=arguments.length<=0||arguments[0]===undefined?false:arguments[0];
c('RTCGroupCallDispatcher').dispatch
({type:c('RTCGroupCallActionTypes').REMOVE_ALL_LOCAL_SCREEN_STREAMS,
stopStreams:j});},



addRemoteStream:function i(j,k){
c('RTCGroupCallDispatcher').dispatch
({type:c('RTCGroupCallActionTypes').ADD_REMOTE_STREAM,
stream:j,
userID:k});},



removeRemoteStream:function i(j,k){
c('RTCGroupCallDispatcher').dispatch
({type:c('RTCGroupCallActionTypes').REMOVE_REMOTE_STREAM,
stream:j,
userID:k});},



removeAllRemoteStreams:function i(j){
c('RTCGroupCallDispatcher').dispatch
({type:c('RTCGroupCallActionTypes').REMOVE_ALL_REMOTE_STREAMS,
userID:j});},



addRemoteTrack:function i(j,k){
c('RTCGroupCallDispatcher').dispatch
({type:c('RTCGroupCallActionTypes').ADD_REMOTE_TRACK,
stream:j,
track:k});},



removeRemoteTrack:function i(j,k){
c('RTCGroupCallDispatcher').dispatch
({type:c('RTCGroupCallActionTypes').REMOVE_REMOTE_TRACK,
stream:j,
track:k});},



addLocalScreenStream:function i(j){
c('RTCGroupCallDispatcher').dispatch
({type:c('RTCGroupCallActionTypes').ADD_LOCAL_SCREEN_STREAM,
stream:j});},



removeLocalScreenStream:function i(j){
c('RTCGroupCallDispatcher').dispatch
({type:c('RTCGroupCallActionTypes').REMOVE_LOCAL_SCREEN_STREAM,
stream:j});},



addRemoteScreenStream:function i(j,k){
c('RTCGroupCallDispatcher').dispatch
({type:c('RTCGroupCallActionTypes').ADD_REMOTE_SCREEN_STREAM,
stream:j,
userID:k});},



removeRemoteScreenStream:function i(j,k){
c('RTCGroupCallDispatcher').dispatch
({type:c('RTCGroupCallActionTypes').REMOVE_REMOTE_SCREEN_STREAM,
stream:j,
userID:k});},



endCall:function i(j,k){
c('RTCGroupCallDispatcher').dispatch
({type:c('RTCGroupCallActionTypes').END_CALL,
endCallReason:j,
endCallSubreason:k});},



waitForUserInput:function i(){
c('RTCGroupCallDispatcher').dispatch
({type:c('RTCGroupCallActionTypes').WAIT_FOR_USER_INPUT});},



toggleMuteAudio:function i(j){
c('RTCGroupCallDispatcher').dispatch
({type:j?
c('RTCGroupCallActionTypes').AUDIO_UNMUTED:
c('RTCGroupCallActionTypes').AUDIO_MUTED});},



toggleMuteVideo:function i(j){
c('RTCGroupCallDispatcher').dispatch
({type:j?
c('RTCGroupCallActionTypes').VIDEO_UNMUTED:
c('RTCGroupCallActionTypes').VIDEO_MUTED});},



toggleMuteRemoteVideo:function i(j,k){
c('RTCGroupCallDispatcher').dispatch
({type:j?
c('RTCCallActionTypes').REMOTE_VIDEO_MUTED:
c('RTCCallActionTypes').REMOTE_VIDEO_UNMUTED,
userID:k});},



toggleSelfView:function i(j){
c('RTCGroupCallDispatcher').dispatch
({type:j?
c('RTCGroupCallActionTypes').SELF_VIEW_COLLAPSED:
c('RTCGroupCallActionTypes').SELF_VIEW_UNCOLLAPSED});},



submitRating:function i(j){
c('RTCGroupCallDispatcher').dispatch
({type:c('RTCGroupCallActionTypes').SUBMIT_RATING,
rating:j});},



submitFeedback:function i(j){
c('RTCGroupCallDispatcher').dispatch
({type:c('RTCGroupCallActionTypes').SUBMIT_FEEDBACK,
feedback:j});},



ratingShown:function i(){
c('RTCGroupCallDispatcher').dispatch
({type:c('RTCGroupCallActionTypes').RATING_SHOWN});},



feedbackShown:function i(){
c('RTCGroupCallDispatcher').dispatch
({type:c('RTCGroupCallActionTypes').FEEDBACK_SHOWN});}};




c('mixInEventEmitter')(h,
{onIceConnectionStateChange:true});


f.exports=h;}),null);

/** js/mercury/clients/rtc/groupcall/ui/settings/RTCSettingsMediaDeviceSelector.react.js */







__d('RTCSettingsMediaDeviceSelector.react',['fbt','React','XUISingleSelector.react'],(function a(b,c,d,e,f,g,h){

'use strict';







var i=c('XUISingleSelector.react').Option,








j=function m(n){
var o=n.devices,
p=n.defaultValue,
q=babelHelpers.objectWithoutProperties(n,['devices','defaultValue']);
return (o.length>0?

c('React').createElement(c('XUISingleSelector.react'),babelHelpers['extends']
({defaultValue:p||o[0].deviceId},
q),
l(o)):



c('React').createElement(c('XUISingleSelector.react'),babelHelpers['extends']({},q,{disabled:true}),
c('React').createElement(i,{value:null},'---')));},



k=
{videoinput:'Camera',
audioinput:'Microphone',
audiooutput:'Audio Output'};


function l
(m){

var n=0;

return m.map(function(o){
var p=o.label?
o.label:h._({"Camera":["Camera{number}","96904e103771afff052369d4076c6ac0"],"Microphone":["Microphone{number}","24e03123f7a83a751a51e3ff4de3decf"],"Audio Output":["Audio Output{number}","d34e177afbd079ccdb57f44671f1d3ae"]},[h['enum']




(k[o.kind],
{Camera:'Camera',Microphone:'Microphone','Audio Output':'Audio Output'}),h.param

('number',++n)]);




return (c('React').createElement(i,{value:o.deviceId,key:o.deviceId},
p));});}





f.exports=j;}),null);

/** www/__virtual__/x/XScreenSharingController.js */



__d("XScreenSharingController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/videocall\/screen_sharing\/",{peer_id:{type:"Int",required:true}});}),

null);
