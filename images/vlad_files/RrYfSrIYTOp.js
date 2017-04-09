if (self.CavalryLogger) { CavalryLogger.start_js(["N8WRQ"]); }

/** __static_js_modules__/chatreliabilityevents.js */




__d("ChatReliabilityEvents",[],(function a(b,c,d,e,f,g){

f.exports={ERROR:"error",CHANNEL_DISCONNECT:"channel_disconnect",CHANNEL_CONNECT:"channel_connect",CHANNEL_INIT:"channel_init",CHANNEL_NOCONFIG:"channel_noconfig",CHANNEL_HISTORY_INVALID:"channel_history_invalid",CHANNEL_STALLED:"channel_stalled",MESSAGE_RECEIVED:"msg_received",THREAD_INFO_ENDPOINT_FATAL:"thread_info_fatal"};}),

null);

/** __static_js_modules__/chatsidebarsections.js */




__d("ChatSidebarSections",[],(function a(b,c,d,e,f,g){

f.exports={ADMINED_PAGES:"admined_pages",MORE_ONLINE_FRIENDS:"more_online_friends",MORE_ONLINE_COWORKERS:"more_online_coworkers",OFFLINE_USERS:"offline_users",ORDERED_LIST:"ordered_list",ORDERED_COWORKERS:"ordered_coworkers",TYPEAHEAD:"typeahead",NOW_PINNED_LIST:"now_pinned_list",NEARBY:"nearby"};}),

null);

/** __static_js_modules__/messagingtag.js */




__d("MessagingTag",[],(function a(b,c,d,e,f,g){

f.exports={GROUPS:"groups",UNREAD:"unread",FLAGGED:"flagged",ACTION_ARCHIVED:"action:archived",INBOX:"inbox",OTHER:"other",PENDING:"pending",MONTAGE:"montage",EVENT:"event",SENT:"sent",SPAM:"spam",UPDATES:"broadcasts_inbox",BCC:"header:bcc",FILTERED_CONTENT:"filtered_content",FILTERED_CONTENT_BH:"filtered_content_bh",FILTERED_CONTENT_ACCOUNT:"filtered_content_account",FILTERED_CONTENT_QUASAR:"filtered_content_quasar",FILTERED_CONTENT_INVALID_APP:"filtered_content_invalid_app",UNAVAILABLE_ATTACHMENT:"unavailable_attachment",ARCHIVED:"archived",EMAIL:"email",VOICEMAIL:"voicemail",SPAM_SPOOFING:"spam:spoofing",SPOOF_WARNING:"MTA:spoof_warning",SMS_TAG_ROOT:"SMSShortcode:",APP_ID_ROOT:"app_id:",DOMAIN_AUTH_PASS:"MTA:dmarc:pass",DOMAIN_AUTH_FAIL:"MTA:dmarc:fail",MTA_SYSTEM_MESSAGE:"MTA:system_message",EMAIL_MESSAGE:"source:email",MARKETPLACE:"marketplace",ROOM:"room",IRIS_MAPPING:{FOLDER_INVALID:null,FOLDER_INBOX:"inbox",FOLDER_OTHER:"other",FOLDER_SPAM:"spam",FOLDER_PENDING:"pending",FOLDER_MONTAGE:"montage",FOLDER_HIDDEN:"hidden",FOLDER_DISABLED:"disabled"}};}),

null);

/** __static_js_modules__/messengerwebdrivertestids.js */




__d("MessengerWebDriverTestIDs",[],(function a(b,c,d,e,f,g){

f.exports={ANIMATED_IMAGE:"animated_image",ATTACHMENT_ROOT:"attachment_root",CHAT_SIDEBAR:"chat_sidebar",INFO_PANEL:"info_panel",INFO_PANEL_BUTTON:"info_panel_button",INFO_PANEL_TOGGLER_OPTION:"info_panel_toggler_option",STICKER:"sticker"};}),

null);

/** __static_js_modules__/workinvitesource.js */




__d("WorkInviteSource",[],(function a(b,c,d,e,f,g){

f.exports={RHC_MODULE:"rhc_module",NEWSFEED_NUX:"newsfeed_nux",IOS_APP:"ios_app",BULK_UPLOAD:"bulk_upload",GROUP_BULK_UPLOAD:"group_bulk_upload",GROUP_BULK_UPLOAD_FROM_SETTINGS:"group_bulk_upload_from_settings",GROUP_BULK_UPLOAD_FROM_RHC:"group_bulk_upload_from_rhc",GROUP_BULK_UPLOAD_FROM_MEMBERS:"group_bulk_upload_from_members",GROUP_INVITE_DIALOG:"group_invite_dialog",GROUP_INVITE_TYPEAHEAD:"group_invite_typeahead",GROUP_RHC_LINK:"group_rhc_link",SEARCH_RESULT:"search_result",SEARCH_RHC:"search_rhc",SEARCH_TYPEAHEAD:"search_typeahead",INSTANCE_INVITE_LINK:"instance_invite_link",SIGN_UP:"sign_up",SELF_INVITE:"self_invite",SELF_INVITE_VIA_INVITE_LINK:"self_invite_via_invite_link",SELF_INVITE_VIA_SSO:"self_invite_via_sso",WORKPLACE_FB_COM:"workplace_fb_com",WORKPLACE_FB_ORGANIC:"workplace_fb_organic",MCG_EXTERNAL_INVITE:"mcg_external_invite",M2_ADS_TO_NGO:"m2_ads_to_ngo",M2_AYMT_TO_NGO:"m2_aymt_to_ngo",MOBILE_APP_CLAIM:"mobile_app_claim",TESTS:"tests",E2E_TESTS:"e2e_tests",WWW_BOOKMARK:"www_bookmark",MSITE_BOOKMARK:"msite_bookmark",WWW_BLUEBAR:"www_bluebar",WWW_CHAT_SIDEBAR:"www_chat_sidebar",WWW_FEED_QP:"www_feed_qp",ANDROID_APP:"android_app",ANDROID_INVITE_OPTION_PICKER:"android_invite_option_picker",ANDROID_TYPED_EMAIL:"android_typed_email",ANDROID_CONTACT_EMAIL:"android_contact_email",ANDROID_ALL_CONTACT_EMAILS:"android_all_contact_emails",WORK_MANAGED_CLAIM_TEST:"work_managed_claim_test",UNKNOWN:"unknown"};}),

null);

/** js/channel/ChatproxyPresence.js */




__d('ChatproxyPresence',['Arbiter','AvailableListConstants','AvailableListInitialData','BanzaiODS','ChannelConstants','LastActiveTimes','PresenceStatus','debounceAcrossTransitions','ClientChromeExperimentsData'],(function a(b,c,d,e,f,g){











var h=c('ClientChromeExperimentsData').ClientChromeAvailableListInitialDataPreloader;

function i(k){var l=k.activeList,m=k.lastActiveTimes;
if(l)
c('PresenceStatus').setMultiActive(l,'available_list_active');

if(m&&!Array.isArray(m))
c('LastActiveTimes').update(m);}




function j(k){'use strict';
this.$ChatproxyPresence_callback=k;
this.$ChatproxyPresence_invalidHistory=false;
this.$ChatproxyPresence_webChatNotification=c('AvailableListInitialData').chatNotif;
this.$ChatproxyPresence_rtiSession=false;

if(h){
h.onLoaded(i);}else 

i(c('AvailableListInitialData'));}

j.prototype.

subscribe=function(){'use strict';
c('Arbiter').subscribe
(c('ChannelConstants').getArbiterType('chatproxy-presence'),
this.updatePresenceInfo.bind(this));

c('Arbiter').subscribe(c('ChannelConstants').ON_INVALID_HISTORY,function(){
this.$ChatproxyPresence_invalidHistory=true;}.
bind(this));
c('Arbiter').subscribe(c('ChannelConstants').RTI_SESSION,function(k,l){
if(l)
this.$ChatproxyPresence_rtiSession=l;}.

bind(this));

c('Arbiter').subscribe
(c('ChannelConstants').getArbiterType('get_debug_presence'),
function(k,l){
var m=c('PresenceStatus').getAllDebugInfo(),
n=c('LastActiveTimes').getDebugData();
for(var o in n){
var p=m[o];
if(p===undefined){
p={};
m[o]=p;}

p.l=Math.floor(n[o]);}

this.$ChatproxyPresence_rtiSession.issueRequest
('/debug_presence',
{},
m,
function(){
c('BanzaiODS').bumpEntityKey
('ChatproxyPresence',
'debug_presence.sucess');});}.



bind(this));};

j.prototype.

getRTISession=function(){'use strict';
return this.$ChatproxyPresence_rtiSession;};
j.prototype.

updatePresenceInfo=function(k,l){'use strict';
if(this.$ChatproxyPresence_invalidHistory){
this.$ChatproxyPresence_invalidHistory=false;
c('PresenceStatus').resetPresenceData();}


l=l.obj;















var m=l.buddyList;

c('PresenceStatus').setMultiChatproxy(m);

var n=false;
if(l.chatNotif!==undefined)
n=this.$ChatproxyPresence_webChatNotification!==l.chatNotif;


if(n)
this.$ChatproxyPresence_webChatNotification=l.chatNotif;


if(l.gamers)
c('PresenceStatus').setPlayingCanvasGameFriends
(l.gamers);



if(n)
this.$ChatproxyPresence_callback
(c('AvailableListConstants').ON_CHAT_NOTIFICATION_CHANGED,
this.$ChatproxyPresence_webChatNotification);



c('debounceAcrossTransitions')
(function(){
this.$ChatproxyPresence_callback(c('AvailableListConstants').ON_AVAILABILITY_CHANGED);}.
bind(this),
0)();};

j.prototype.

getWebChatNotification=function(){'use strict';
return this.$ChatproxyPresence_webChatNotification;};



f.exports=j;}),null);

/** js/logging/generated/ChatReliabilityTypedLogger.js */





__d('ChatReliabilityTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){
'use strict';



















function h(){
this.clear();}
h.prototype.





log=function(){
c('GeneratedLoggerUtils').log('logger:ChatReliabilityLoggerConfig',this.$ChatReliabilityTypedLogger_data,c('Banzai').BASIC);};
h.prototype.







logVital=function(){
c('GeneratedLoggerUtils').log('logger:ChatReliabilityLoggerConfig',this.$ChatReliabilityTypedLogger_data,c('Banzai').VITAL);};
h.prototype.




clear=function(){
this.$ChatReliabilityTypedLogger_data={};
return this;};
h.prototype.






updateData=function(j){








this.$ChatReliabilityTypedLogger_data=babelHelpers['extends']({},
this.$ChatReliabilityTypedLogger_data,
j);

return this;};
h.prototype.




setEvent=function(j){
this.$ChatReliabilityTypedLogger_data.event=j;
return this;};
h.prototype.




setEventData=function(j){
this.$ChatReliabilityTypedLogger_data.event_data=j;
return this;};






















var i=
{event:true,
event_data:true};


f.exports=h;}),null);

/** js/mercury/clients/chat/ChatReliabilityInstrumentation.js */






__d('ChatReliabilityInstrumentation',['ChatReliabilityEvents','ChatReliabilityTypedLogger','MercuryConfig'],(function a(b,c,d,e,f,g){

'use strict';







var h=function j(event,k){
if(!c('MercuryConfig').EnableReliabilityLogging)
return;

new (c('ChatReliabilityTypedLogger'))().
setEvent(event).
setEventData(k).
log();},


i=
{logERROR:function j(k){
h(c('ChatReliabilityEvents').ERROR,k);},


logCHANNEL_DISCONNECT:function j(k){
h(c('ChatReliabilityEvents').CHANNEL_DISCONNECT,k);},


logCHANNEL_CONNECT:function j(k){
h(c('ChatReliabilityEvents').CHANNEL_CONNECT,k);},


logCHANNEL_HISTORY_INVALID:function j(k){
h(c('ChatReliabilityEvents').CHANNEL_HISTORY_INVALID,k);},


logMESSAGE_RECEIVED:function j(k){
h(c('ChatReliabilityEvents').MESSAGE_RECEIVED,k);},


logCHANNEL_STALLED:function j(k){
h(c('ChatReliabilityEvents').CHANNEL_STALLED,k);},


logCHANNEL_INIT:function j(k){
h(c('ChatReliabilityEvents').CHANNEL_INIT,k);},


logCHANNEL_NOCONFIG:function j(k){
h(c('ChatReliabilityEvents').CHANNEL_NOCONFIG,k);}};



f.exports=i;}),null);

/** js/chat/PresenceStatusActionTypes.js */






__d('PresenceStatusActionTypes',['keyMirror'],(function a(b,c,d,e,f,g){

'use strict';



f.exports=c('keyMirror')
({AVAILABILITY_CHANGED:null});}),null);

/** js/typing/TypingStates.js */




__d("TypingStates",[],(function a(b,c,d,e,f,g){

var h=
{INACTIVE:0,
TYPING:1,
QUITTING:2};


f.exports=h;}),null);

/** js/chat/AvailableList.js */






__d('AvailableList',['Arbiter','ArbiterMixin','AsyncRequest','AvailableListConstants','BanzaiODS','Bootloader','ChannelConstants','ChatConfig','ChatDispatcher','ChatproxyPresence','ChatReliabilityInstrumentation','ChatVisibility','CurrentUser','FBID','ErrorUtils','JSLogger','LastActiveTimes','PresencePrivacy','PresenceStatus','PresenceStatusActionTypes','Run','ServerTime','TypingStates','debounceAcrossTransitions','emptyFunction','requireWeak'],(function a(b,c,d,e,f,g){

'use strict';





























c('BanzaiODS').setEntitySample('presence',.0001);

var h=babelHelpers['extends']({},c('AvailableListConstants'),c('ArbiterMixin')),




i=/\D/;

h.subscribe

([c('AvailableListConstants').ON_AVAILABILITY_CHANGED,
c('AvailableListConstants').ON_UPDATE_ERROR],

function(q,r){c('Arbiter').inform(q,r);});


c('PresenceStatus').subscribe
('change',
c('debounceAcrossTransitions')
(function(){
h.inform
(c('AvailableListConstants').ON_AVAILABILITY_CHANGED);},


0));



var j=c('debounceAcrossTransitions')
(function(){
h.inform
(c('AvailableListConstants').ON_AVAILABILITY_CHANGED);

c('ChatDispatcher').dispatch
({type:c('PresenceStatusActionTypes').AVAILABILITY_CHANGED});},


0);


function k
(q,
r,
s,
t,
u){

if(q===c('CurrentUser').getID())

return;

var v=
c('PresenceStatus').set(q,r,s,t,u);

if(v){
var w=c('debounceAcrossTransitions')
(function(){
h.inform
(c('AvailableListConstants').ON_AVAILABILITY_CHANGED,
q);

c('ChatDispatcher').dispatch
({type:c('PresenceStatusActionTypes').AVAILABILITY_CHANGED,
id:q});},


0);

w();}}



function l(q){
var r=q.payload.availability||{};

for(var s in r)
k
(s&&s.toString(),
r[s].a,
true,
'mercury_tabs',
r[s].c);}




function m(q){
if(!q||i.test(q)){

c('ChatReliabilityInstrumentation').logERROR('bad id for available list: '+q);
return;}

new (c('AsyncRequest'))('/ajax/mercury/tabs_presence.php').
setData({target_id:q}).
setHandler(l).
setErrorHandler(c('emptyFunction')).
setAllowCrossPageTransition(true).
send();}


function n
(q,
r){

r.chat_config=c('ChatConfig').getDebugInfo();
r.available_list_debug_info=
{count:c('PresenceStatus').getOnlineIDs().length};}



var o=undefined;

try{o=new (c('ChatproxyPresence'))(function(event){
h.inform(event);});

o.subscribe();}catch(
p){
c('ErrorUtils').reportError&&c('ErrorUtils').reportError(p,false);
c('ChatReliabilityInstrumentation').logERROR(p.getMessage());}



Object.assign(h,


{getChatproxyPresenceObject:function q(){
return o;},






get:function q(r){
return c('PresenceStatus').get(r);},


updateForID:function q(r){
if(c('ChatConfig').get('presence_page_green_dot_sub')&&!c('FBID').isUser(r))
return;


m(r);

if(c('PresencePrivacy').getVisibility()==c('PresencePrivacy').ONLINE)
c('Run').onAfterLoad(function(){
return (c('Bootloader').loadModules
(["ChannelManager","ChannelTransport"],
function(s,t){
s.startChannelManager();
t.sendAdditionalBuddyRequest
(s.getCompleteConfig(),
r);},

'AvailableList'));});},










getWebChatNotification:function q(){
return o&&o.getWebChatNotification();},






isReady:function q(){
return !!o;},







set:function q
(r,
s,
t,
u){

k(r,s,true,t,u);}});





c('Arbiter').subscribe(c('JSLogger').DUMP_EVENT,n);

c('PresencePrivacy').subscribe
(['privacy-changed',
'privacy-availability-changed',
'privacy-user-presence-response'],
j);

c('requireWeak')('ChannelConnection',function(q){
return (q.subscribe
([q.CONNECTED,
q.RECONNECTING,
q.SHUTDOWN,
q.MUTE_WARNING,
q.UNMUTE_WARNING],
j));});


c('Arbiter').subscribe
(c('ChannelConstants').getArbiterType('buddylist_overlay'),
function(q,r){
var s={},
t=r.obj.overlay;
for(var u in t){
h.set
(u,
t[u].a,
t[u].s||'channel',
t[u].vc);


if(t[u].la)
s[u]=t[u].la;}



c('LastActiveTimes').update(s);});




c('Arbiter').subscribe
([c('ChannelConstants').getArbiterType('typ'),
c('ChannelConstants').getArbiterType('ttyp')],
function(q,r){
var s=r.obj;

if(s.st===c('TypingStates').TYPING){
var t=s.from;


if(c('ChatVisibility').isOnline()){
c('BanzaiODS').bumpEntityKey('presence','stale_presence_check_typing');
var u=c('PresenceStatus').get(t);
if(u!=c('AvailableListConstants').ACTIVE){
var v=c('LastActiveTimes').get(t)*1000,
w=c('ServerTime').get();
if(!v){
c('BanzaiODS').bumpEntityKey
('presence',
'no_detailed_presence_typing');}else

if(w-v>5*60*1000){
var x='stale_presence_typing',
y=w-v;
if(y<10*60*1000){
x+='600';}else
if(y<60*60*1000)
x+='3600';

c('BanzaiODS').bumpEntityKey('presence',x);}}}




h.set
(t&&t.toString(),
c('AvailableListConstants').ACTIVE,
'channel-typing');}});






c('Arbiter').subscribe
(c('ChannelConstants').getArbiterType('messaging'),
function(q,r){
if(!c('ChatVisibility').isOnline())
return;


var s=r.obj;
if(s.message&&s.message.timestamp&&s.message.sender_fbid){
var t=c('ServerTime').get(),
u=s.message.timestamp;

if(t-u<2*60*1000){
c('BanzaiODS').bumpEntityKey('presence','stale_presence_check');

var v=s.message.sender_fbid,
w=c('PresenceStatus').get(v);
if(w==c('AvailableListConstants').ACTIVE)
return;


var x=c('LastActiveTimes').get(v)*1000;
if(!x){
c('BanzaiODS').bumpEntityKey('presence','no_detailed_presence');}else
if(u-x>5*60*1000){
var y='stale_presence',
z=u-x;
if(z<10*60*1000){
y+='600';}else
if(z<60*60*1000)
y+='3600';

c('BanzaiODS').bumpEntityKey('presence',y);}}}});






f.exports=h;}),null);

/** js/chat/typeahead/ChatTypeaheadConstants.js */




__d('ChatTypeaheadConstants',[],(function a(b,c,d,e,f,g){

var h=
{USER_TYPE:'user',
THREAD_TYPE:'thread',
FRIEND_TYPE:'friend',
NON_FRIEND_TYPE:'non_friend',
FB4C_TYPE:'fb4c',
PAGE_TYPE:'page',
MEETING_ROOM_PAGE_TYPE:'meeting_room_page',
COMMERCE_PAGE_TYPE:'commerce_page',
HEADER_TYPE:'header',
INTERNAL_BOT_PAGE_TYPE:'internal_bot_page',
GAME_TYPE:'game'};


f.exports=h;}),null);

/** js/chat/ChatOpenTabEventLogger.js */






__d('ChatOpenTabEventLogger',['Banzai','ChatImpressionLogger','ChatTypeaheadConstants','MercuryIDs','MercuryParticipantTypes'],(function a(b,c,d,e,f,g){

'use strict';







var h='messaging_tracking',

i=
{log:function j
(k,
l,
m,
n){

var o=
{referrer:k||'',
message_thread_id:l,
message_view:'chat',
timestamp_send:Date.now(),
message_target_ids:[]};


if(m!==undefined)
o.message_target_ids=
[m];



c('ChatImpressionLogger').logImpression(k,m,n);
c('Banzai').post(h,o,{delay:0,retry:true});
var p=c('MercuryIDs').getUserIDFromThreadID(String(l));
c('Banzai').post('page_message_button_click',
{page_id:p,
ref:k});},



logUser:function j(k,l,m){
var n=c('MercuryIDs').getThreadIDFromUserID(l);
this.log(k,n,l,m);},


logPage:function j(k,l){
this.logUser(k,l);},


logByType:function j(k,l,m){
if(k===c('ChatTypeaheadConstants').THREAD_TYPE){
this.log(l,m);}else
if(k===c('ChatTypeaheadConstants').MEETING_ROOM_PAGE_TYPE){
var n=c('MercuryIDs').getUserIDFromThreadID(m);
this.log(l,m,n);}else
if(!k||
k===c('MercuryParticipantTypes').FRIEND||
k===c('ChatTypeaheadConstants').FRIEND_TYPE||
k===c('ChatTypeaheadConstants').PAGE_TYPE||
k===c('ChatTypeaheadConstants').USER_TYPE){

var o=void 0;
if(c('MercuryIDs').isValidThreadID(m))
o=c('MercuryIDs').getUserIDFromThreadID(m);

this.log(l,m,o);}else 

this.log(l,m);}};




f.exports=i;}),null);

/** js/mercury/clients/rtc/stores/FBRTCStore.js */






__d('FBRTCStore',['FBRTCDispatcher','FluxStore'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits




(j,c('FluxStore'));i=h&&h.prototype;
function j(){
i.constructor.call(this,c('FBRTCDispatcher'));}
j.prototype.






__emitChange=function(){
this.__emitter.emit(this.__changeEvent);};



f.exports=j;}),null);

/** js/mercury/clients/rtc/FBRTCCallBlockingStore.js */






__d('FBRTCCallBlockingStore',['Arbiter','AsyncRequest','BanzaiLogger','ChannelConstants','FBRTCDispatcher','FBRTCStore','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g){

'use strict';var h,i,









j=false,
k=0,
l=null,

m='call_block_setting_changed';h=babelHelpers.inherits

(n,c('FBRTCStore'));i=h&&h.prototype;n.prototype.
init=function(o){
this.$FBRTCCallBlockingStore_setBlockingStatus(o);
c('Arbiter').subscribe
(c('ChannelConstants').getArbiterType('videocall_block_setting'),
this.$FBRTCCallBlockingStore_onChannelMessageReceived.bind(this));};

n.prototype.

__onDispatch=function(o){
if(o.type!==m)
return;

this.$FBRTCCallBlockingStore_setBlockingStatus(o.data);};
n.prototype.

$FBRTCCallBlockingStore_setBlockingStatus=function(o){
switch(o){
case 0:
j=false;
this.$FBRTCCallBlockingStore_clearTimeoutToken();
break;
case -1:
j=true;
this.$FBRTCCallBlockingStore_clearTimeoutToken();
break;

default:j=true;
this.$FBRTCCallBlockingStore_setTimeoutCallBack(o);}


this.__emitChange();};
n.prototype.

$FBRTCCallBlockingStore_setTimeoutCallBack=function(o){
if(l===null)
l=c('setTimeoutAcrossTransitions')
(this.turnOnVideoCalling.bind(this),
o*1000);};


n.prototype.

getBlockingStatus=function(){
return j;};
n.prototype.

turnOnVideoCalling=function(){
new (c('AsyncRequest'))('/ajax/chat/settings.php').
setHandler(this.$FBRTCCallBlockingStore_onTurnOnVideoCalling.bind(this)).
setData
({call_blocked_until:0}).

send();};
n.prototype.

turnOffVideoCalling=function(o){
k=o;
new (c('AsyncRequest'))('/ajax/chat/settings.php').
setHandler(this.$FBRTCCallBlockingStore_onTurnOffVideoCalling.bind(this)).
setData
({call_blocked_until:o}).

send();};
n.prototype.

$FBRTCCallBlockingStore_clearTimeoutToken=function(){
if(l){
clearTimeout(l);
l=null;}};

n.prototype.

$FBRTCCallBlockingStore_onTurnOnVideoCalling=function(){
c('FBRTCDispatcher').dispatch
({type:m,
data:0});

c('BanzaiLogger').log
('VideoCallLoggerConfig',

{event:m,
message:'enable'});};

n.prototype.

$FBRTCCallBlockingStore_onTurnOffVideoCalling=function(){
c('FBRTCDispatcher').dispatch
({type:m,
data:k});

c('BanzaiLogger').log
('VideoCallLoggerConfig',

{event:m,
message:'disable_'+k});};

n.prototype.

$FBRTCCallBlockingStore_onChannelMessageReceived=function(o,p){
c('FBRTCDispatcher').dispatch
({type:m,
data:p.obj.value});};

function n(){h.apply(this,arguments);}



f.exports=new n();}),null);

/** js/chat/ChatOptions.js */




__d('ChatOptions',['Arbiter','ChannelConstants','ChatSidebarActions','ChatSidebarVisibility','FBRTCCallBlockingStore','JSLogger','PresenceUtil','SidebarType','ChatOptionsInitialData'],(function a(b,c,d,e,f,g){










var h=c('JSLogger').create('chat_options'),

i={};

(function(){
var k=c('ChatOptionsInitialData');
for(var l in k){
var m=k[l];
if(l==='call_blocked_until'){
c('FBRTCCallBlockingStore').init(m);}else 

i[l]=!!m;}})


();

var j=Object.assign(new (c('Arbiter'))(),

{getSetting:function k(l){
return i[l];},


setSetting:function k(l,m,n){


if(l==='sidebar_mode'){
c('ChatSidebarVisibility').shouldShowSidebarIgnoreEnabled(null,function(o,p){
if(m){
c('ChatSidebarActions').enable
(o?c('SidebarType').SIDEBAR:c('SidebarType').BUDDYLIST);}else 


c('ChatSidebarActions').disable();});


return;}


if(this.getSetting(l)==m)

return;


if(n){
n='from_'+n;
h.log(n,{name:l,
new_value:m,
old_value:this.getSetting(l)});}


i[l]=!!m;

c('Arbiter').inform('chat/option-changed',
{name:l,
value:m});}});





c('Arbiter').subscribe
(c('ChannelConstants').getArbiterType('setting'),
function(k,l){
var m=l.obj;

if(m.window_id===c('PresenceUtil').getSessionID())
return;

j.setSetting(m.setting,!!m.value,'channel');});



c('Arbiter').subscribe(c('JSLogger').DUMP_EVENT,function(k,l){
l.chat_options=i;});


f.exports=j;}),null);

/** js/chat/ChatQuietLinks.js */




__d('ChatQuietLinks',['DataStore','DOM','Event','Parent','UserAgent_DEPRECATED','getOrCreateDOMID'],(function a(b,c,d,e,f,g){










var h={},





i=








{silenceLinks:function m(n){
j(n,this.removeEmptyHrefs.bind(this));},








nukeLinks:function m(n){
j(n,this.removeAllHrefs.bind(this));},






removeEmptyHrefs:function m(n){
k(n,function(o){
return !o||o==='#';});},







removeAllHrefs:function m(n){
k(n);}};











































function j(m,n){




var o=!!c('UserAgent_DEPRECATED').chrome(),
p=!!c('UserAgent_DEPRECATED').chrome()||c('UserAgent_DEPRECATED').ie()>=9||
c('UserAgent_DEPRECATED').firefox()>=4;


if(h[c('getOrCreateDOMID')(m)])
return;

h[c('getOrCreateDOMID')(m)]=true;

if(!p)
return;



if(!o){
n&&n(m);
return;}



c('Event').listen(m,'mouseover',
function q(r){
var s=c('Parent').byTag(r.getTarget(),'a');

if(s){
var t=s.getAttribute('href');

if(l(t)){
c('DataStore').set(s,'stashedHref',s.getAttribute('href'));
s.removeAttribute('href');}}});






c('Event').listen(m,'mouseout',
function q(r){
var s=c('Parent').byTag(r.getTarget(),'a'),
t=s&&c('DataStore').remove(s,'stashedHref');

if(l(t))
s.setAttribute('href',t);});






c('Event').listen(m,'mousedown',
function(q){
if(!q.isDefaultRequested())
return true;


var r=c('Parent').byTag(q.getTarget(),'a'),
s=r&&c('DataStore').get(r,'stashedHref');

if(l(s))
r.setAttribute('href',s);});}












function k(m,n){
var o=c('DOM').scry(m,'a');

if(n)
o=o.filter(function(p){
return n(p.getAttribute('href'));});



o.forEach(function(p){
p.removeAttribute('href');
if(!p.tabIndex)
p.setAttribute('tabindex',0);});}




function l(m){
return m&&m!=='#';}


f.exports=i;}),null);

/** js/chat/ChatUnreadCountActionTypes.js */






__d('ChatUnreadCountActionTypes',['keyMirror'],(function a(b,c,d,e,f,g){

'use strict';



f.exports=c('keyMirror')
({COUNT_UPDATED:null});}),null);

/** js/components/Image/SplitImage.react.js */




__d('SplitImage.react',['cx','React','Image.react','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits
















(k,c('React').Component);j=i&&i.prototype;function k(){var l,m;'use strict';for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=j.constructor).call.apply(l,[this].concat(o)),this.



















renderImages=function(){
if(!this.props.srcs)
return null;


var q=this.props.srcs,
r=Array.isArray(q);
if(r){
q=q.filter(function(s){return s!==null;});
if(!q.length)
return null;}


if(!r||q.length==1)
return this.renderOne(r?q[0]:q);


return q.length==2?
this.renderTwo(q):
this.renderThree(q);}.
bind(this),this.

renderOne=function(q){

return (c('React').createElement(c('Image.react'),
{src:q,
width:this.props.size,
height:this.props.size,
alt:''}));}.


bind(this),this.

renderTwo=function(q){
var r=this.props.size,
s=Math.floor(r/2),
t=-Math.floor(s/2),

u="_55lu"+

(this.props.border?' '+"_57xo":'');



return (c('React').createElement('div',null,
c('React').createElement('div',{className:"_55lu",style:{width:s}},
c('React').createElement(c('Image.react'),
{src:q[0],
width:r,
height:r,
style:{marginLeft:t},
alt:''})),


c('React').createElement('div',{className:u,style:{width:s}},
c('React').createElement(c('Image.react'),
{src:q[1],
width:r,
height:r,
style:{marginLeft:t},
alt:''}))));}.




bind(this),this.

renderThree=function(q){
var r=this.props.size,

s=Math.floor(r/3*2),
t=-Math.floor((r-s)/2),

u=Math.floor(r/2),
v=r-s,
w=-Math.floor((u-v)/2),

x="_55lu"+

(this.props.border?' '+"_57pl":''),


y="_55lu"+

(this.props.border?' '+"_57pm":'');



return (c('React').createElement('div',null,
c('React').createElement('div',{className:x,style:{width:s}},
c('React').createElement(c('Image.react'),
{src:q[0],
width:r,
height:r,
style:{marginLeft:t},
alt:''})),


c('React').createElement('div',{className:y,
style:{width:v,height:u}},
c('React').createElement(c('Image.react'),
{src:q[1],
width:u,
height:u,
style:{marginLeft:w},
alt:''})),


c('React').createElement('div',{className:"_55lu",
style:{width:v,height:u}},
c('React').createElement(c('Image.react'),
{src:q[2],
width:u,
height:u,
style:{marginLeft:w},
alt:''}))));}.




bind(this),m;}k.prototype.render=function(){'use strict';var l=babelHelpers['extends']({},this.props);delete l.srcs;var m=this.props.size;return c('React').createElement('div',babelHelpers['extends']({},l,{className:c('joinClasses')(this.props.className,"_55lt"),style:babelHelpers['extends']({},this.props.style||{},{width:m,height:m})}),this.renderImages());};


f.exports=k;}),null);

/** js/components/core/XUI/Badge/AbstractBadge.react.js */





__d('AbstractBadge.react',['cx','invariant','React','formatNumber','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j,k,







l=c('React').PropTypes;

function m(o){
return parseInt(o,10)===o;}
j=babelHelpers.inherits

(n,c('React').Component);k=j&&j.prototype;n.prototype.


















render=function(){'use strict';var o=
this.props,p=o.count,q=o.maxcount,r=babelHelpers.objectWithoutProperties(o,['count','maxcount']);

m(p)||i(0,'`count` must be an integer');
m(q)||i(0,'`maxcount` must be an integer');

var s="_51lp"+

(p>q?' '+"_51lr":'')+
(p===0?' '+"hidden_elem":'');




return (c('React').createElement('span',babelHelpers['extends']({},
r,
{className:c('joinClasses')(this.props.className,s)}),
c('formatNumber').withMaxLimit(p,q)));};


function n(){'use strict';j.apply(this,arguments);}n.propTypes={count:l.number.isRequired,maxcount:l.number};n.defaultProps={maxcount:20};


f.exports=n;}),null);

/** js/components/core/XUI/Badge/XUIBadge.react.js */




__d('XUIBadge.react',['cx','React','AbstractBadge.react','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,







k=c('React').PropTypes;i=babelHelpers.inherits





















(l,c('React').Component);j=i&&i.prototype;l.prototype.



















render=function(){'use strict';
var m=this.props.type,

n="_5ugh"+

(m==='regular'?' '+"_5ugf":'')+
(m==='special'?' '+"_5ugg":'');




return (c('React').createElement(c('AbstractBadge.react'),babelHelpers['extends']({},
this.props,
{className:c('joinClasses')(this.props.className,n),
type:null})));};


function l(){'use strict';i.apply(this,arguments);}l.propTypes={type:k.oneOf(['regular','special'])};l.defaultProps={type:'regular'};


f.exports=l;}),null);

/** js/fbx/BlueBarFixedBehaviorController.js */





__d('BlueBarFixedBehaviorController',['Arbiter','Bootloader'],(function a(b,c,d,e,f,g){




f.exports=

{init:function h(i){
if(!('getBoundingClientRect' in i))
return;


var j=void 0,
k=document.documentElement;

function l(){var m=
i.getBoundingClientRect(),n=m.top,



o=Math.round(n)-k.clientTop<=0;

if(j!==o){
j=o;
c('Arbiter').inform
('bluebarFixedBehaviorController/isfixed',
j,
c('Arbiter').BEHAVIOR_STATE);}}




l();
c('Bootloader').loadModules(["Event"],function(m){
m.listen(window,'scroll',l);},
'BlueBarFixedBehaviorController');}};}),
null);

/** js/mercury/clients/fanta/FantaDispatcher.js */






__d('FantaDispatcher',['ExplicitRegistrationDispatcher'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits



(j,c('ExplicitRegistrationDispatcher'));i=h&&h.prototype;function j(){h.apply(this,arguments);}


f.exports=new j({strict:false});}),null);

/** js/mercury/clients/web_messenger/permalinks/WebMessengerThreadPermalinks.js */






__d('WebMessengerThreadPermalinks',['MercuryIDs','MessagingTag','MessengerURIConstants','URI','WWWBase','requireWeak'],(function a(b,c,d,e,f,g){

'use strict';












var h=








{getThreadURI:function j
(k,
l,
m){

var n='';
if(c('MercuryIDs').isCanonical(k)){
n=c('MercuryIDs').tokenize(k).value;}else 

c('requireWeak')('MercuryThreadIDMap',function(p){
n=p.get().getServerIDFromClientIDNow
(k);});



var o=h.getThreadURIFromServerID
(n,
m);

l&&l(o);},


getThreadURIFromServerID:function j
(k,
l){

var m=new (c('URI'))(c('WWWBase').uri),
n=c('MessengerURIConstants').FACEBOOK_PREFIX;
if(l&&l!=c('MessagingTag').INBOX)
n+='/'+l;

m.setPath(n+c('MessengerURIConstants').THREAD_PREFIX+k);
return m.toString();},










getThreadURIFromUserID:function j(k,l){
var m=new (c('URI'))(c('WWWBase').uri),
n=c('MessengerURIConstants').FACEBOOK_PREFIX;
m.setPath(i(n,l)+'/t/'+k);

return m.toString();}};



function i(j,k){
if(k&&k!=c('MessagingTag').INBOX)
j+='/'+k;

return j;}


f.exports=h;}),null);

/** js/mercury/clients/fanta/FantaTabActions.js */






__d('FantaTabActions',['Bootloader','FantaDispatcher','MercuryConfig','MessengerURIConstants','URI','WebMessengerThreadPermalinks','goURI','ifRequired','keyMirror'],(function a(b,c,d,e,f,g){

'use strict';












var h=c('keyMirror')
({BLUR_TAB:null,
CLOSE_ALL_TABS:null,
CLOSE_AND_TAB_NEXT:null,
CLOSE_TAB:null,
FOCUS_NEXT_TAB:null,
FOCUS_PREVIOUS_TAB:null,
FOCUS_TAB:null,
LOAD_FROM_DATA:null,
MERCURY_REGISTER_TAB_FOCUS_DEPRECATED:null,
MINIMIZE_ALL_TABS:null,
MINIMIZE_TAB:null,
OPEN_TAB:null,
REPLACE_TAB:null,
SCROLL_BOTTOM_CHANGED:null,
SET_ALLOWED_RAISED_TABS:null,
SET_MESSAGE_COUNT:null,
SHOW_UNSEEN_MESSAGES:null,
UNMINIMIZE_TAB:null});


function i(k){
var l=k?
new (c('URI'))
(c('WebMessengerThreadPermalinks').getThreadURIFromServerID(k)):

new (c('URI'))
(c('MessengerURIConstants').BASE_PATH+
c('MessengerURIConstants').COMPOSE_SUBPATH);

c('ifRequired')
('BusinessURI.brands',
function(m){return c('goURI')(m(l));},
function(){return c('goURI')(l);});}



var j=
{Types:h,

openTab:function k(l){
this.dispatchOrBootloadGetMessages(function(){
c('FantaDispatcher').dispatch
({type:h.OPEN_TAB,
tabID:l});



if(c('MercuryConfig').FantaTabView){
c('ifRequired')('FantaTabsReactApp',
function(m){



this._tryLoadSlimApp(l);}.
bind(this),
function(){
this._tryLoadSlimApp(l,function(){return i(l);});}.
bind(this));}else 


c('ifRequired')('FantaTabsApp',
function(m){



this._tryLoadSlimApp(l);}.
bind(this),
function(){
this._tryLoadSlimApp(l,function(){return i(l);});}.
bind(this));}.


bind(this));},


_tryLoadSlimApp:function k(l,m){
c('ifRequired')('FantaTabsSlimApp',
function(n){
c('ifRequired')('FantaAppStore',
function(){},
function(){
n.getPumpedUp(function(){
c('FantaDispatcher').dispatch
({type:h.OPEN_TAB,
tabID:l});});});},





function(){return m&&m(l);});},



registerTabFocusDeprecated:function k
(l,
m,
n,
o){

c('FantaDispatcher').dispatch
({type:h.MERCURY_REGISTER_TAB_FOCUS_DEPRECATED,
tabID:l,
focusCallback:m,
blurCallback:n,
focusOnMountDEPRECATED:o});},



replaceTab:function k(l,m){
c('FantaDispatcher').dispatch
({type:h.REPLACE_TAB,
tabID:l,
newTabID:m});},



minimizeTab:function k(l){
c('FantaDispatcher').dispatch
({type:h.MINIMIZE_TAB,
tabID:l});},



minimizeAllTabs:function k(){
c('FantaDispatcher').dispatch
({type:h.MINIMIZE_ALL_TABS});},



unminimizeTab:function k(l){
c('FantaDispatcher').dispatch
({type:h.UNMINIMIZE_TAB,
tabID:l});},



closeTab:function k(l){
c('FantaDispatcher').dispatch
({type:h.CLOSE_TAB,
tabID:l});},



closeAllTabs:function k(){
c('FantaDispatcher').dispatch
({type:h.CLOSE_ALL_TABS});},



closeAndTabNext:function k(l){
c('FantaDispatcher').dispatch
({type:h.CLOSE_AND_TAB_NEXT,
tabID:l});},



focusTab:function k(l){
c('FantaDispatcher').dispatch
({type:h.FOCUS_TAB,
tabID:l});},



blurTab:function k(l){
c('FantaDispatcher').dispatch
({type:h.BLUR_TAB,
tabID:l});},



setAllowedRaisedTabs:function k(l){
c('FantaDispatcher').dispatch
({type:h.SET_ALLOWED_RAISED_TABS,
allowedRaisedTabs:l});},



setMessageCount:function k(l,m){
c('FantaDispatcher').dispatch
({type:h.SET_MESSAGE_COUNT,
threadID:l,
messageCount:m});},



loadFromData:function k(l){
this.dispatchOrBootloadGetMessages(function(){
c('FantaDispatcher').dispatch
({type:h.LOAD_FROM_DATA,
tabData:l});});},




focusNextTab:function k(event){
c('FantaDispatcher').dispatch
({type:h.FOCUS_NEXT_TAB,
event:event});},



focusPreviousTab:function k(event){
c('FantaDispatcher').dispatch
({type:h.FOCUS_PREVIOUS_TAB,
event:event});},



scrollBottomChanged:function k
(l,
m,
n){

c('FantaDispatcher').dispatch
({type:h.SCROLL_BOTTOM_CHANGED,
isScrolledToBottom:m,
tabID:l,
showUnseenMessages:n});},



showUnseenMessages:function k
(l){

c('FantaDispatcher').dispatch
({type:h.SHOW_UNSEEN_MESSAGES,
tabID:l});},



dispatchOrBootloadGetMessages:function k(l){
if(c('MercuryConfig').FantaTabView){
c('ifRequired')('FantaReducersGetMessages',function(){
l();},
function(){





c('ifRequired')('FantaAppStore',function(m){
c('Bootloader').loadModules
(["FantaReducersGetMessages"],
function(n){
m.addReducers(n);
l();},
'FantaTabActions');},

function(){
l();});});}else 



l();}};




f.exports=j;}),null);

/** js/mercury/renderers/MercuryParticipantListRenderer.js */






__d('MercuryParticipantListRenderer',['fbt','MercuryIDs'],(function a(b,c,d,e,f,g,h){

'use strict';









function i(){
this.$MercuryParticipantListRenderer_isNewThread=false;
this.$MercuryParticipantListRenderer_useShortName=false;
this.$MercuryParticipantListRenderer_useAndSeparator=false;
this.$MercuryParticipantListRenderer_totalParticipantCount=0;
this.$MercuryParticipantListRenderer_nicknames=null;
this.$MercuryParticipantListRenderer_nameRenderer=function(s){
if(this.$MercuryParticipantListRenderer_nicknames){
var t=c('MercuryIDs').getUserIDFromParticipantID(s.id);
if(this.$MercuryParticipantListRenderer_nicknames[t])
return this.$MercuryParticipantListRenderer_nicknames[t];}


return this.$MercuryParticipantListRenderer_useShortName?s.short_name:s.name;}.
bind(this);}
i.prototype.






renderParticipantList=function(s){
var t=s.map(this.$MercuryParticipantListRenderer_nameRenderer);
switch(t.length){
case 0:
return j(this.$MercuryParticipantListRenderer_isNewThread);
case 1:
return k(t);
case 2:
return this.$MercuryParticipantListRenderer_useAndSeparator?
m(t):
l(t);
case 3:
return this.$MercuryParticipantListRenderer_useAndSeparator?
o(t):
n(t);

default:return this.$MercuryParticipantListRenderer_useAndSeparator?
q(t,this.$MercuryParticipantListRenderer_totalParticipantCount):
p(t,this.$MercuryParticipantListRenderer_totalParticipantCount);}};

i.prototype.





setIsNewThread=function(s){
this.$MercuryParticipantListRenderer_isNewThread=s;
return this;};
i.prototype.





setNameRenderer=function(s){
this.$MercuryParticipantListRenderer_nameRenderer=s;
return this;};
i.prototype.






setUseShortName=function(s){
this.$MercuryParticipantListRenderer_useShortName=s;
return this;};
i.prototype.

setNickname=function(s){
this.$MercuryParticipantListRenderer_nicknames=s;
return this;};
i.prototype.






setUseAndSeparator=function(s){
this.$MercuryParticipantListRenderer_useAndSeparator=s;
return this;};
i.prototype.





setTotalParticipantCount=function(s){
this.$MercuryParticipantListRenderer_totalParticipantCount=s;
return this;};



function j(s){
if(s){
return h._(["New Message","c2e45d6b1b1043131add652eb099d0b7"]);}else 





return h._(["No Participants","e4e348c816b4416bcf68481452caf22b"]);}









function k(s){
return s[0];}


function l(s){
return h._(["{participant1}, {participant2}","424d303e149b47764bf9b8f3667c54a9"],[h.param




('participant1',s[0]),h.param
('participant2',s[1])]);}




function m(s){
return h._(["{participant1} and {participant2}","3ad29ef006230b2d125be4abd2ad9ceb"],[h.param




('participant1',s[0]),h.param
('participant2',s[1])]);}




function n(s){
return h._(["{participant1}, {participant2}, {participant3}","ef67c44cb1e065c379efd4ac03dc121c"],[h.param




('participant1',s[0]),h.param
('participant2',s[1]),h.param
('participant3',s[2])]);}




function o(s){
return h._(["{participant1}, {participant2} and {participant3}","fb60c91838d2ec8cdb1d7378f729d628"],[h.param




('participant1',s[0]),h.param
('participant2',s[1]),h.param
('participant3',s[2])]);}




function p(s,t){
return h._(["{participant1}, {participant2}, {participant3}, {others_link}","491612e1e81932de4a022129313395cf"],[h.param




('participant1',s[0]),h.param
('participant2',s[1]),h.param
('participant3',s[2]),h.param
('others_link',
r((t||s.length)-3))]);}





function q(s,t){
return h._(["{participant1}, {participant2} and {others_link}","f7b9c2569c8663f6160f79b063996077"],[h.param




('participant1',s[0]),h.param
('participant2',s[1]),h.param
('others_link',
r((t||s.length)-2))]);}





function r(s){
if(s>1){
return h._({"*":["{others_count} others","e3f2c94aed402988232109e294cff16f"]},[h.param




('others_count',s,[0])]);}else 




return h._(["1 other","d5e958dcde63fd753dfa7aae6a6e20fd"]);}










f.exports=i;}),null);

/** shared/core/memoizeWithArgs.js */






__d("memoizeWithArgs",[],(function a(b,c,d,e,f,g){

var h=Object.prototype.hasOwnProperty;





function i
(j,
k){

var l=void 0;
return function(){
if(!l)
l={};

var m=k.apply(this,arguments);
if(!h.call(l,m))
l[m]=j.apply(this,arguments);

return l[m];};}



f.exports=i;}),null);

/** shared/core_components/BaseTextWithDecoration/BaseTextWithDecoration.react.js */






__d('BaseTextWithDecoration.react',['React','ReactFragment'],(function a(b,c,d,e,f,g){

'use strict';var h,i;
























function j
(l,
m,
n,
o){

var p=l[m];


if(!p){
o.push(n);
return;}



p
(n,
function(q){
o.push(q);},

function(q){
j(l,m+1,q,o);});}


h=babelHelpers.inherits






(k,c('React').Component);i=h&&h.prototype;k.prototype.
render=function(){var l=
this.props,m=l.decorators,n=l.text,
o=[],
p={};

j(m,0,n,o);
o.forEach(function(q,r){
p['i'+r]=q;});


return c('React').createElement('span',null,c('ReactFragment').create(p));};
function k(){h.apply(this,arguments);}


f.exports=k;}),null);

/** shared/emoji/messengerIterateEmoji.js */






__d('messengerIterateEmoji',['MessengerSupportedEmoji'],(function a(b,c,d,e,f,g){

'use strict';








function h
(i,
j,
k,
l){

var m=String(i);

while(m){
var n=c('MessengerSupportedEmoji').getEmojiMatchObj(m);
if(n){
var o=n.offset+n.length,
p=
m.substr(0,n.is_supported?n.offset:o);
k(p);
if(n.is_supported)
j(n.emoji_str,n.emoji_key,l);

var q=m.substr(o);
m=q;}else 

break;}



k(m);}


f.exports=h;}),null);

/** shared/emoticons/messengerIterateEmoticons.js */






__d('messengerIterateEmoticons',['EmoticonEmojiList'],(function a(b,c,d,e,f,g){

'use strict';









function h
(i,
j,
k,
l){

var m,n,o,p,q,
r=String(i);

while(r){
var s=c('EmoticonEmojiList').regexp.exec(r);
if(s){
m=s.index+s[1].length;
n=r.substr(0,m);
o=s[2];
p=r.substr(m+o.length);
q=c('EmoticonEmojiList').names[o];

k(n);
j(o,q,l);
r=p;}else 

break;}



k(r);}


f.exports=h;}),null);

/** shared/core_components/TextWithEntities/MessengerTextWithEmoticons.react.js */






__d('MessengerTextWithEmoticons.react',['cx','fbt','BaseTextWithDecoration.react','EmojiImageURL','EmoticonEmojiList','Image.react','React','messengerIterateEmoticons','messengerIterateEmoji'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,

















l=c('React').PropTypes;






function m
(q,
r,
s){

var t=s?128:16,
u=c('EmojiImageURL').getMessengerURL(r,t),
v=s?
"_1ift _5m3a":
"_1ift _2560";

return (c('React').createElement(c('Image.react'),
{alt:q,
className:v,
src:u}));}








function n
(q,
r,
s){

var t=s?128:16,
u=c('EmoticonEmojiList').emote2emojis[r],
v=u?c('EmojiImageURL').getMessengerURL(u,t):null;
if(v){
var w=String.fromCodePoint(parseInt(u,t)),
x=s?
"_1ift _5m3a":
"_1ift _2560";

return (c('React').createElement(c('Image.react'),
{alt:w,
className:x,
src:v}));}



var y=i._(["{emoticonName} emoticon","8aaffc55ceff77e2f69571615f06296a"],[i.param





('emoticonName',r)]);



return (c('React').createElement('span',{'aria-label':y},
q));}












function o
(q,






r,




s){






return function(t,u,v){
var w=function x(y,z,aa){
u(r(y,z,aa));};


q(String(t),w,v,s);};}

j=babelHelpers.inherits

(p,c('React').Component);k=j&&j.prototype;p.prototype.










shouldComponentUpdate=function(q){
return q.text!==this.props.text;};
p.prototype.

render=function(){
var q=
[o(c('messengerIterateEmoji'),

m,
this.props.customSize),

o(c('messengerIterateEmoticons'),

n,
this.props.customSize)];



return (c('React').createElement(c('BaseTextWithDecoration.react'),babelHelpers['extends']({},
this.props,
{text:this.props.text,
decorators:q})));};


function p(){j.apply(this,arguments);}p.propTypes={text:l.string,customSize:l.bool};


f.exports=p;}),null);

/** www/__virtual__/x/XWorkInviteCoworkersDialogController.js */



__d("XWorkInviteCoworkersDialogController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/work\/invite_coworkers\/dialog\/",{source:{type:"Enum",required:true,enumType:1},__asyncDialog:{type:"Int"}});}),

null);
