if (self.CavalryLogger) { CavalryLogger.start_js(["S0AhG"]); }

/** __static_js_modules__/mercuryparticipanttypes.js */




__d("MercuryParticipantTypes",[],(function a(b,c,d,e,f,g){

f.exports={USER:"user",THREAD:"thread",EVENT:"event",PAGE:"page",FRIEND:"friend",FB4C:"fb4c",NON_FRIEND:"non_friend"};}),

null);

/** __static_js_modules__/sidebartype.js */




__d("SidebarType",[],(function a(b,c,d,e,f,g){

f.exports={SIDEBAR:"sidebar",BUDDYLIST:"buddylist",BUDDYLIST_NUB:"buddylist_nub"};}),

null);

/** js/chat/AvailableListConstants.js */




__d('AvailableListConstants',[],(function a(b,c,d,e,f,g){

var h=


{ON_AVAILABILITY_CHANGED:'buddylist/availability-changed',
ON_UPDATE_ERROR:'buddylist/update-error',
ON_UPDATED:'buddylist/updated',
ON_CHAT_NOTIFICATION_CHANGED:'chat-notification-changed',


OFFLINE:0,
IDLE:1,
ACTIVE:2,
MOBILE:3,


WEB_STATUS:'webStatus',
FB_APP_STATUS:'fbAppStatus',
MESSENGER_STATUS:'messengerStatus',
OTHER_STATUS:'otherStatus',

STATUS_ACTIVE:'active',
STATUS_IDLE:'idle',
STATUS_OFFLINE:'offline'};


f.exports=h;}),null);

/** js/chat/ChatConfig.js */




__d('ChatConfig',['ChatConfigInitialData'],(function a(b,c,d,e,f,g){



var h={},

i=
{get:function j(k,l){
return k in h?h[k]:l;},


set:function j(k){
if(arguments.length>1){
var l={};
l[k]=arguments[1];
k=l;}

Object.assign(h,k);},


getDebugInfo:function j(){
return h;}};



i.set(c('ChatConfigInitialData'));

f.exports=i;}),null);

/** shared/presence/PresenceUtil.js */





__d('PresenceUtil',['CurrentUser','randomInt'],(function a(b,c,d,e,f,g){






var h=c('randomInt')(0,4294967295)+1;







function i(){
return h;}







function j(){
return c('CurrentUser').isLoggedInNow();}


f.exports=
{getSessionID:i,
hasUserCookie:j};}),null);

/** js/chat/PresencePrivacy.js */




__d('PresencePrivacy',['Arbiter','AsyncRequest','ChannelConstants','CurrentUser','PresencePrivacyInitialData','JSLogger','PresenceUtil'],(function a(b,c,d,e,f,g){










var h='/ajax/chat/privacy/settings.php',
i='/ajax/chat/privacy/online_policy.php',
j='/ajax/chat/privacy/visibility.php',

k='friend_visibility',
l='visibility',
m='online_policy',


n=babelHelpers['extends']({},
c('PresencePrivacyInitialData').privacyData),

o=c('PresencePrivacyInitialData').visibility,
p=babelHelpers['extends']({},
c('PresencePrivacyInitialData').privacyData),

q=o,
r=c('PresencePrivacyInitialData').onlinePolicy,
s=r,
t=[],
u=false;

function v(){
return c('JSLogger').create('blackbird');}



var w=Object.assign(new (c('Arbiter'))(),
{WHITELISTED:1,
BLACKLISTED:-1,
UNLISTED:0,

ONLINE:1,
OFFLINE:0,

ONLINE_TO_WHITELIST:0,
ONLINE_TO_BLACKLIST:1});


function x(ja){
var ka;
for(ka in ja){
var la=ja[ka];

if(ka==c('CurrentUser').getID()){
v().error('set_viewer_visibility');
throw new Error("Invalid to set current user's visibility");}



switch(la){
case w.WHITELISTED:
case w.BLACKLISTED:
case w.UNLISTED:
break;

default:v().error
('set_invalid_friend_visibility',
{id:ka,value:la});
throw new Error("Invalid state: "+la);}}



for(ka in ja)
n[ka]=ja[ka];

w.inform('privacy-changed');}


function y(ja,ka){
var la={};
la[ja]=ka;
x(la);}


function z(ja){

switch(ja){
case w.ONLINE:
case w.OFFLINE:
break;

default:v().error('set_invalid_visibility',{value:ja});
throw new Error("Invalid visibility: "+ja);}


o=ja;
w.inform('privacy-changed');
w.inform('privacy-user-presence-changed');}


function aa(ja){

switch(ja){
case w.ONLINE_TO_WHITELIST:
case w.ONLINE_TO_BLACKLIST:
break;

default:throw new Error("Invalid default online policy: "+ja);}


r=ja;
w.inform('privacy-user-presence-changed');
w.inform('privacy-changed');}


function ba(ja,ka){
u=true;
ja.send();}








function ca(ja,ka){
t.push({request:ja,data:ka});
if(!u){
var la=t.shift();
ba(la.request,la.data);}}



function da(ja,ka){
var la=ja.type;

if(la===k){

w.inform('privacy-availability-changed');
for(var ma in ja.settings)
p[ma]=ja.settings[ma];}else{


if(la===l){

q=ja.visibility;}else
if(la===m)

s=ja.online_policy;

w.inform('privacy-user-presence-response');}


v().log
('set_update_response',
{data:ja,response:ka});}


function ea(ja,ka){
if(o!==q)
z(q);

if(r!==s)
aa(s);


Object.assign(n,p);
w.inform('privacy-changed');
t=[];

v().log
('set_error_response',
{data:ja,response:ka});}


function fa(ja){
u=false;
if(t.length>0){
var ka=t.shift();
ba(ka.request,ka.data);}}



function ga(ja,ka){
if(c('PresenceUtil')!=null){



var la=ja.getData();
la.window_id=c('PresenceUtil').getSessionID();
ja.setData(la);}


ja.
setHandler(da.bind(this,ka)).
setErrorHandler(ea.bind(this,ka)).
setTransportErrorHandler(ea.bind(this,ka)).
setFinallyHandler(fa.bind(this)).
setAllowCrossPageTransition(true);

return ja;}


function ha(ja,ka,la){
return ga
(new (c('AsyncRequest'))(ja).setData(ka),
la);}



function ia(ja,ka){
var la=ka.obj;
if(la.viewer_id!=c('CurrentUser').getID()){
v().error
('invalid_viewer_for_channel_message',
{type:ja,data:ka});
throw new Error("Viewer got from the channel is not the real viewer");}



if(la.window_id===c('PresenceUtil').getSessionID())
return;


var ma=la.data;
if(la.event=='access_control_entry'){
ma.target_ids.forEach(function(oa){
y(oa,ma.setting);

p[oa]=ma.setting;});}else{


if(la.event=='visibility_update'){
var na=!!ma.visibility?
w.ONLINE:
w.OFFLINE;
z(na);
q=na;}else
if(la.event=='online_policy_update'){
aa(ma.online_policy);
s=ma.online_policy;}

w.inform('privacy-user-presence-response');}


v().log('channel_message_received',{data:ka.obj});}


Object.assign(w,
{WHITELISTED:1,
BLACKLISTED:-1,
UNLISTED:0,

ONLINE:1,
OFFLINE:0,

ONLINE_TO_WHITELIST:0,
ONLINE_TO_BLACKLIST:1,

init:function ja(ka,la,ma){
},

setVisibility:function ja(ka){

q=o;
z(ka);



var la={visibility:ka},
ma=
{type:l,
visibility:ka},


na=
ha(j,la,ma);
ca(na,ma);

v().log('set_visibility',{data:la});

return ka;},


getVisibility:function ja(){
return o;},


setOnlinePolicy:function ja(ka){
s=r;
aa(ka);




var la={online_policy:ka},
ma=
{type:m,
online_policy:ka},


na=
ha(i,la,ma);
ca(na,ma);

v().log('set_online_policy',{data:la});

return ka;},


getOnlinePolicy:function ja(){
return r;},


getFriendVisibility:function ja(ka){
return n[ka]||w.UNLISTED;},


isUserOffline:function ja(){
return this.getVisibility()===w.OFFLINE;},


allows:function ja(ka){
if(this.isUserOffline())
return false;


var la=this.getOnlinePolicy();
return la===w.ONLINE_TO_WHITELIST?
n[ka]==w.WHITELISTED:
n[ka]!=w.BLACKLISTED;},





setFriendsVisibility:function ja(ka,la){
if(ka.length>0){
var ma={};

for(var na=0;na<ka.length;na++){
var oa=ka[na];
p[oa]=n[oa];
ma[oa]=la;}

x(ma);





var pa=la;
if(pa==w.UNLISTED)

pa=p[ka[0]];



var qa=
{users:ka,
setting:la,
setting_type:pa},

ra=
{type:k,
settings:ma},


sa=
ha(h,qa,ra);
ca(sa,ra);

v().log('set_friend_visibility',{data:qa});}


return la;},





setFriendVisibilityMap:function ja(ka,la){
for(var ma in ka)
p[ma]=n[ma];

x(ka);

var na=
{type:k,
settings:ka};

ca
(ga(la,na),
na);


v().log
('set_friend_visibility_from_map',
{data:ka});},






allow:function ja(ka){
if(this.allows(ka)){
v().error('allow_already_allowed');
throw new Error
("allow() should only be called for users that "+
"are not already allowed");}

if(this.getVisibility()===w.OFFLINE){
v().error('allow_called_while_offline');
throw new Error
("allow() should only be called when the user is already online");}


var la=
this.getOnlinePolicy()===w.ONLINE_TO_WHITELIST?
w.WHITELISTED:w.UNLISTED;
return this.setFriendsVisibility([ka],la);},




disallow:function ja(ka){
if(!this.allows(ka)){
v().error('disallow_already_disallowed');
throw new Error
("disallow() should only be called for users that "+
"are not already disallowed");}

if(this.getVisibility()===w.OFFLINE){
v().error('disallow_called_while_offline');
throw new Error
("disallow() should only be called when the user is already online");}


var la=
this.getOnlinePolicy()===w.ONLINE_TO_BLACKLIST?
w.BLACKLISTED:w.UNLISTED;
return this.setFriendsVisibility([ka],la);},


getBlacklist:function ja(){
var ka=[];
for(var la in n)
if(n[la]===w.BLACKLISTED)
ka.push(la);


return ka;},


getWhitelist:function ja(){
var ka=[];
for(var la in n)
if(n[la]===w.WHITELISTED)
ka.push(la);


return ka;},





getMapForTest:function ja(){
return n;},


setMapForTest:function ja(ka){
n=ka;}});



w.inform('privacy-changed');
w.inform('privacy-user-presence-changed',c('Arbiter').BEHAVIOR_STATE);

v().log
('initialized',
{visibility:o,policy:r});

c('Arbiter').subscribe(c('JSLogger').DUMP_EVENT,function(ja,ka){
ka.presence_privacy=
{initial:c('PresencePrivacyInitialData').privacyData,
current:n};});



c('Arbiter').subscribe
(c('ChannelConstants').getArbiterType('privacy_changed'),
ia.bind(this));


c('Arbiter').subscribe(c('ChannelConstants').ON_CONFIG,function(ja,ka){
var la=ka.getConfig('visibility',null);
if(la!==null&&
typeof la!=='undefined'){
var ma=la?
w.ONLINE:w.OFFLINE;
z(ma);
v().log('config_visibility',{vis:ma});}}.

bind(this));

f.exports=w;}),null);

/** js/chat/ChatVisibility.js */




__d('ChatVisibility',['Arbiter','JSLogger','PresencePrivacy'],(function a(b,c,d,e,f,g){





var h=
{isOnline:function i(){
return c('PresencePrivacy').getVisibility()===c('PresencePrivacy').ONLINE;},


hasBlackbirdEnabled:function i(){
return this.isVisibleToMostFriends()||this.isVisibleToSomeFriends();},



isVisibleToMostFriends:function i(){
return c('PresencePrivacy').getOnlinePolicy()===
c('PresencePrivacy').ONLINE_TO_BLACKLIST&&
c('PresencePrivacy').getBlacklist().length>0;},



isVisibleToSomeFriends:function i(){
return c('PresencePrivacy').getOnlinePolicy()===
c('PresencePrivacy').ONLINE_TO_WHITELIST&&
c('PresencePrivacy').getWhitelist().length>0;},







goOnline:function i(j){
if(c('PresencePrivacy').getVisibility()===c('PresencePrivacy').OFFLINE){
c('JSLogger').create('blackbird').log('chat_go_online');
c('PresencePrivacy').setVisibility(c('PresencePrivacy').ONLINE);

c('Arbiter').inform('chat-visibility/go-online');}

j&&j();},


goOffline:function i(j){
if(c('PresencePrivacy').getVisibility()===c('PresencePrivacy').ONLINE){
c('JSLogger').create('blackbird').log('chat_go_offline');
c('PresencePrivacy').setVisibility(c('PresencePrivacy').OFFLINE);

c('Arbiter').inform('chat-visibility/go-offline');}

j&&j();},


toggleVisibility:function i(){
if(h.isOnline()){
h.goOffline();}else 

h.goOnline();}};





f.exports=h;}),null);

/** js/modules/Poller.js */






__d('Poller',['ArbiterMixin','AsyncRequest','CurrentUser','emptyFunction','mixin','setTimeoutAcrossTransitions','setTimeout'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits












(j,c('mixin')(c('ArbiterMixin')));i=h&&h.prototype;


































function j(l){'use strict';
i.constructor.call(this);
this._config=babelHelpers['extends']
({clearOnQuicklingEvents:true,
setupRequest:c('emptyFunction'),
interval:null,
maxRequests:Infinity,
dontStart:false},
l);

this._handle=null;
this._isSkipIndefinitely=false;
this._hasSkippedRequest=false;
this._requests=0;
this._muted=false;
this._polling=false;
this._skip=false;







this._cancelRequest=c('emptyFunction');





if(!this._config.dontStart)
this.start();}

j.prototype.











start=function(){'use strict';
if(this._polling)
return this;

this._requests=0;
this.request();
return this;};
j.prototype.




stop=function(){'use strict';
this._cancelRequest();
return this;};
j.prototype.






mute=function(){'use strict';
this._muted=true;
return this;};
j.prototype.






resume=function(){'use strict';
if(this._muted){
this._muted=false;
if(this._handle===null&&this._polling)
return this.request();}


if(this._isSkipIndefinitely){
this._isSkipIndefinitely=false;
return this.request();}

return this;};
j.prototype.






skip=function(){'use strict';
this._skip=true;
return this;};
j.prototype.









startSkipIndefinitely=function(){'use strict';
this._isSkipIndefinitely=true;
return this;};
j.prototype.





stopSkipIndefinitely=function(){'use strict';
this._isSkipIndefinitely=false;
if(this._hasSkippedRequest){

return this.request();}else 

return this;};

j.prototype.

isSkipIndefinitely=function(){'use strict';
return this._isSkipIndefinitely;};
j.prototype.





reset=function(){'use strict';
return this.
stop().
start();};
j.prototype.









request=function(){'use strict';
this._cancelRequest();
this._polling=true;

if(!this._config.allowNotLoggedIn&&!k())
return this._done();


if(this._muted)
return this;


var l=false;
this._cancelRequest=function(){
l=true;
this._cleanup();}.
bind(this);

if(this._isSkipIndefinitely){
this._deferRequest();
this._hasSkippedRequest=true;
return this;}else 

this._hasSkippedRequest=false;


if(++this._requests>this._config.maxRequests)
return this._done();


var m=new (c('AsyncRequest'))();
m.setIsBackgroundRequest(true);

m.setInitialHandler(function(){
return !l;});


m.setFinallyHandler(this._deferRequest.bind(this));

















m.setInitialHandler=c('emptyFunction');
m.setFinallyHandler=c('emptyFunction');


this._config.setupRequest(m,this);



if(this._skip){
this._skip=false;


c('setTimeoutAcrossTransitions')(this._deferRequest.bind(this),0);}else 

m.send();

return this;};
j.prototype.

isPolling=function(){'use strict';
return this._polling;};
j.prototype.

isMuted=function(){'use strict';
return this._muted;};
j.prototype.

setInterval=function(l){'use strict';
if(l){
this._config.interval=l;
this.start();}};

j.prototype.

getInterval=function(){'use strict';
return this._config.interval;};
j.prototype.

_cleanup=function(){'use strict';
if(this._handle!==null)
clearTimeout(this._handle);

this._handle=null;
this._cancelRequest=c('emptyFunction');
this._polling=false;};
j.prototype.

_done=function(){'use strict';
this._cleanup();
this.inform('done',{sender:this});
return this;};
j.prototype.

_deferRequest=function(){'use strict';
if(!this._polling)
return;


if(this._requests<this._config.maxRequests){
var l=this._config.interval;
l=
typeof l==='function'?
l(this._requests):
l;



l=l>j.MIN_INTERVAL?
l:
j.MIN_INTERVAL;
if(this._config.clearOnQuicklingEvents){
this._handle=c('setTimeout')(this.request.bind(this),l);}else 

this._handle=c('setTimeoutAcrossTransitions')
(this.request.bind(this),
l);}else 



this._done();};




j.MIN_INTERVAL=2000;

function k(){
return c('CurrentUser').isLoggedInNow();}


f.exports=j;}),null);

/** js/chat/LastActiveTimes.js */





__d('LastActiveTimes',['fbt','ServerTime'],(function a(b,c,d,e,f,g,h){






var i={};

function j(n){

if(!n||n<0)
return null;


var o=c('ServerTime').get()/1000-n,
p=Math.floor(o/60),
q=Math.floor(p/60),
r=Math.floor(q/24);
if(p<=1){
return h._({"*":["{count}m","d9556afc45d65ef0cd55dd8af4e79181"]},[h.param('count',1,[0])]);}else

if(p<60){
return h._({"*":["{count}m","d9556afc45d65ef0cd55dd8af4e79181"]},[h.param('count',p,[0])]);}else

if(q<24){
return h._({"*":["{count}h","52c7196b72db58ffd67add089f5842ac"]},[h.param('count',q,[0])]);}else

if(r<3){
return h._({"*":["{count}d","a1fc689d6cbee128afe3e7d0db598383"]},[h.param('count',r,[0])]);}else 


return null;}









function k(n,o){
if(!(n in i)||i[n]<o)
i[n]=o;}



function l(n){
if(n in i){
return i[n];}else 

return 0;}



var m=
{update:function n(o){
for(var p in o)
k(p,o[p]);},



getShortDisplay:function n(o){
return j(l(o));},


get:function n(o){
return l(o);},


getDebugData:function n(){
return i;}};



f.exports=m;}),null);

/** js/chat/PresenceStatus.js */




__d('PresenceStatus',['ArbiterMixin','AvailableListConstants','BanzaiODS','Bootloader','ChatConfig','ChatVisibility','CurrentUser','FBID','LastActiveTimes','PresencePrivacy','ServerTime','createObjectFrom','debounceAcrossTransitions'],(function a(b,c,d,e,f,g){
















c('BanzaiODS').setEntitySample('presence',.0001);

var h={},
i={},
j={},
k={},

l=Object.assign({},c('ArbiterMixin')),

m=c('debounceAcrossTransitions')
(function(){return l.inform('change');},
0);


function n(o){var p,
q=parseInt(o.topic.match(/\d+$/),10),
r=parseInt(JSON.parse(o.payload).lat,10),
s=Date.now()-r*1000,
t=
c('ChatConfig').get('active_cutoff')*1000-s;

c('LastActiveTimes').update((p={},p[q]=r,p));
l.checkPresence(q);


if(l.get(q)===c('AvailableListConstants').ACTIVE){
clearTimeout(k[q].timeout);
k[q].timeout=setTimeout
(function(){
l.checkPresence(q);},

t);}}




Object.assign(l,
{resetPresenceData:function o(){
h={};
i={};},


reset:function o(){
l.resetPresenceData();
j={};},





get:function o(p){
if(p==c('CurrentUser').getID())


return c('ChatVisibility').isOnline()?
c('AvailableListConstants').ACTIVE:c('AvailableListConstants').OFFLINE;


if(c('ChatConfig').get('presence_page_green_dot_sub')&&
!c('FBID').isUser(p)&&
!k[p]){
k[p]={};
c('Bootloader').loadModules
(["RTISubscriptionManager"],
function(r){
r.subscribe
('presence_push/fb/'+p,
n);},

'PresenceStatus');}



var q=c('AvailableListConstants').OFFLINE;
if(p in h)
q=h[p];


if(!c('PresencePrivacy').allows(p))


q=c('AvailableListConstants').OFFLINE;


return q;},





getCapabilities:function o(p){
var q=i[p];
return q?q:0;},


isPlayingCanvasGameUser:function o(p){
return !!j[p];},







getGroup:function o(p){
return p.some(function(q){
if(q==c('CurrentUser').getID())
return false;

return l.get(q)===c('AvailableListConstants').ACTIVE;})?
c('AvailableListConstants').ACTIVE:c('AvailableListConstants').OFFLINE;},








set:function o(p,q,r,s,t,u){
if(p==c('CurrentUser').getID())



return false;


var v;
if(q!==null&&q!==undefined){
q=q==c('AvailableListConstants').ACTIVE?
c('AvailableListConstants').ACTIVE:
c('AvailableListConstants').OFFLINE;
var w=l.get(p);
v=w!=q;
if((v||q==c('AvailableListConstants').ACTIVE)&&
c('FBID').isUser(p)){var x;
c('LastActiveTimes').update((x={},x[p]=c('ServerTime').get()/1000,x));}

h[p]=q;}


var y=false;
if(t!==undefined&&t!==null){


y=l.getCapabilities(p)!=t;
i[p]=t;}


var z=v||y;
if(z&&!u)
m();

return z;},


setPlayingCanvasGameFriends:function o(p){
j=c('createObjectFrom')(p);},





getOnlineIDs:function o(){
var p,q=[];
for(p in h)
if(l.get(p)===c('AvailableListConstants').ACTIVE)
q.push(p);



return q;},


getAllIDs:function o(){
return Object.keys(h);},






getOnlineCount:function o(){
return l.getOnlineIDs().length;},










getPresenceStats:function o(){
var p=0,
q=0,
r=0;
for(var s in h){
p+=1;
switch(l.get(s)){
case c('AvailableListConstants').OFFLINE:
q+=1;
break;
case c('AvailableListConstants').ACTIVE:
r+=1;
break;

default:break;}}



return {total:p,
offline:q,
active:r};},



getAllDebugInfo:function o(){
var p={};
for(var q in h)
p[q]=
{p:h[q],
vc:i[q]};


return p;},


setMultiChatproxy:function o(p){
var q={};
for(var r in p){
if(p[r].lat)
q[r]=p[r].lat;

var s=p[r].p;
l.set
(r,
s,
false,
'chatproxy',
p[r].vc,
true);}


c('LastActiveTimes').update(q);

m();},



setMultiActive:function o(p,q){
var r=false;
p.forEach(function(s){
l.set
(s,
c('AvailableListConstants').ACTIVE,
false,
q,
null,
true)&&
(r=true);});

if(r)
m();},



checkPresence:function o(p){
var q=false,
r=
Math.ceil(Date.now()/1000)-c('LastActiveTimes').get(p);

l.set
(p,
r<c('ChatConfig').get('active_cutoff')?
c('AvailableListConstants').ACTIVE:
c('AvailableListConstants').OFFLINE,
false,
'pylon',
null,
true)&&
(q=true);

if(q)
m();}});




f.exports=l;}),null);

/** js/chat/ChatImpressionLogger.js */






__d('ChatImpressionLogger',['AsyncSignal','ChatConfig','ChatVisibility','Poller','PresencePrivacy','PresenceStatus','requireWeak','debounceAcrossTransitions'],(function a(b,c,d,e,f,g){











var h=null;
c('requireWeak')('AvailableList',function(m){return h=m;});

var i=null;

function j(m){
if(!i){
m([]);}else 

i.getSortedList(function(n){return m(n);});}



function k(m){
if(!i||!h)
return '';


var n=[];
for(var o=0;o<m.length;o++)
n[o]=h.get(m[o]);

return n.toString();}


var l=
{init:function m(n){
i=n;
j(function(o){var p,
q=o.toString(),
r=k(o),
s=
c('ChatConfig').get('chat_impression_logging_periodical',0);
if(s)(function(){
var t=
c('ChatConfig').get('periodical_impression_logging_config.interval'),
u=new (c('Poller'))
({interval:t,
setupRequest:function v(w){
w.
setURI('/ajax/chat/imps_logging.php').
setData
({list_availability:r,
sorted_list:q,
source:'periodical_imps'});},


clearOnQuicklingEvents:false,
dontStart:true});

c('PresencePrivacy').subscribe
('privacy-user-presence-changed',
c('debounceAcrossTransitions')(function(){
if(c('ChatVisibility').isOnline()){
u.start();}else 

u.stop();}));})

();});




this.init=function(){};},










logImpression:function m(n,o,p){
j(function(q){
var r=c('ChatConfig').get
('chat_impression_logging_with_click'),

s=
{list_availability:r?k(q):'',
sorted_list:r?q.toString():'',
source:n,
target:o,
target_presence:c('PresenceStatus').get(o),
viewport_width:document.body.clientWidth};


new (c('AsyncSignal'))
('/ajax/chat/ct.php',
Object.assign(s,p)).
send();});}};




f.exports=l;}),null);

/** js/chat/ChatSidebarPreloadStore.js */







__d('ChatSidebarPreloadStore',['ChatSidebarData','InitialChatFriendsList'],(function a(b,c,d,e,f,g){

'use strict';




var h=
{onLoaded:function i
(j){











if(c('ChatSidebarData').AsyncDataPreloader){
c('ChatSidebarData').AsyncDataPreloader.onLoaded
(function(k){var l=k.result,
m=l.list,
n=l.groups,
o=l.shortProfiles,
p=l.nearby,
q=l.adminedPages,
r=l.pageListModule;

return (j
({buddies:m,
groups:n,
shortProfiles:o,
nearby:p,
adminedPages:q,
pageListModule:r,
profiles:[]}));});}else


if(c('ChatSidebarData').WebGraphQLPreloader){
c('ChatSidebarData').WebGraphQLPreloader.onLoaded
(function(k){
return (j(c('ChatSidebarData').WebGraphQLNormalizer.normalize(k)));});}else 


j
({buddies:c('InitialChatFriendsList').list||[],
groups:c('InitialChatFriendsList').groups||[],
shortProfiles:c('InitialChatFriendsList').shortProfiles||{},
nearby:c('InitialChatFriendsList').nearby||[],
adminedPages:c('InitialChatFriendsList').adminedPages||[],
pageListModule:c('InitialChatFriendsList').pageListModule,
profiles:[]});}};





f.exports=h;}),null);

/** js/chat/ChatProfileStore.js */







__d('ChatProfileStore',['ChatSidebarPreloadStore'],(function a(b,c,d,e,f,g){

'use strict';



var h={},









i=

{init:function j(){
c('ChatSidebarPreloadStore').onLoaded
(function(k){var l=k.profiles,m=k.nearby;return l.filter


(function(n){return !m||m.indexOf(n.id)===-1;}).
forEach(function(n){
var o=new Date(),
p=n.birthdate&&
o.getDate()===n.birthdate.day&&
o.getMonth()+1===n.birthdate.month,
q=n.profile_picture&&n.profile_picture.uri?
n.profile_picture.uri:
null;
h[n.id]=
{id:n.id,
is_birthday:p,
thumbSrc:q,
name:n.name,
is_messenger_only:!!n.is_messenger_only};});});},





get:function j(k){
return h[k];}};



f.exports=i;}),null);

/** shared/mercury/utils/MercuryIDs.js */






__d('MercuryIDs',[],(function a(b,c,d,e,f,g){

'use strict';






var h=

{isValid:function i(j){
if(!j||typeof j!=='string')
return false;

return /^\w{3,12}:.+/.test(j);},


isValidThreadID:function i(j){
if(!h.isValid(j))
return false;


var k=h.tokenize(j);
switch(k.type){
case 'user':
case 'group':
case 'support':
case 'thread':
case 'root':
case 'pending':
return true;

default:return false;}},






tokenize:function i(j){
if(!j||!h.isValid(j))
throw new Error('bad_id_format '+String(j));


var k=j.indexOf(':');

return {type:j.substr(0,k),
value:j.substr(k+1)};},






getUserIDFromParticipantID:function i(j){
if(!h.isValid(j))
throw new Error('bad_id_format '+j);
var k=

h.tokenize(j),l=k.type,m=k.value;
return l==='fbid'?m:null;},





getParticipantIDFromUserID:function i(j){
if(isNaN(j))
throw new Error('Not a user ID: '+j);

return 'fbid:'+j;},






getUserIDFromThreadID:function i(j){
if(!this.isCanonical(j))
return null;


return this.tokenize(j).value;},





getThreadIDFromUserID:function i(j){
return 'user:'+j;},





getThreadIDFromThreadFBID:function i(j){
return 'thread:'+j;},





getThreadIDFromSupportInboxItemID:function i(j){
return 'support:'+j;},





getThreadFBIDFromThreadID:function i(j){
return this.tokenize(j).value;},





getThreadIDFromParticipantID:function i(j){
var k=this.getUserIDFromParticipantID(j);
return k?this.getThreadIDFromUserID(k):null;},





getParticipantIDFromFromThreadID:function i(j){
var k=this.getUserIDFromThreadID(j);
return k?
this.getParticipantIDFromUserID(k):
null;},





getSupportInboxItemIDFromThreadID:function i(j){
return this.tokenize(j).value;},


isCanonical:function i(j){
return this.isValid(j)&&this.tokenize(j).type==='user';},


isGroupChat:function i(j){
return this.isValid(j)&&this.tokenize(j).type!=='user';},







isLocalThread:function i(j){
return this.isValid(j)&&this.tokenize(j).type==='root';}};



f.exports=h;}),null);

/** js/chat/OrderedFriendsList.js */




__d('OrderedFriendsList',['AvailableListConstants','ChatProfileStore','ChatSidebarPreloadStore','MercuryIDs','PresenceStatus','SearchableEntry','ShortProfiles','WorkModeConfig','createArrayFromMixed','isValidUniqueID'],(function a(b,c,d,e,f,g){

'use strict';













var h=null,
i={},

j=[],
k={};

function l(r){
r=String(r);
return c('MercuryIDs').isValid(r)?
r:
c('MercuryIDs').getParticipantIDFromUserID(r);}


function m(r,s){
var t=c('createArrayFromMixed')(r);
s(t.filter(function(u){
var v=c('ShortProfiles').getNow(u);
return !v||
p(v)||
v.is_nonfriend_messenger_contact;}));}






function n(r){
h=[];


var s=0;
r.forEach(function(t){

var u=t.slice(0,-2),
v=t.slice(-1);
if(c('PresenceStatus').get(u)==v){


h[s]=u;
i[u]=s++;}});}








function o(r){
var s=0;
r.forEach(function(t){
var u=t.slice(0,-2),
v=t.slice(-1);
if(v==c('AvailableListConstants').ACTIVE){
j[s]=u;
k[u]=s++;}});}




function p(r){
return r.type==='friend'||
c('WorkModeConfig').is_work_user&&r.type==='fb4c';}








var q=







{contains:function r(s){
return s in i;},





getList:function r(s){
if(h&&h.length){
m(h,s);
return;}


c('ChatSidebarPreloadStore').onLoaded(function(t){var u=t.buddies;
n(u);
m(h,s);});},







getSearchableEntries:function r(s,t){
q.getList(function(u){
c('ChatSidebarPreloadStore').onLoaded(function(v){var w=v.groups;
c('ShortProfiles').getMulti
(u.slice(0,s),
function(x){
var y=[];
for(var z in x)
y.push
(q.normalizeProfileEntry(x[z],z));


var aa=w.map
(q.normalizeThreadEntry);


t
(y.
concat(aa).
filter(function(ba){return !!ba;}).
sort(function(ba,ca){return ba.getOrder()-ca.getOrder();}));});});});},







normalizeProfileEntry:function r(s,t){
var u=s.searchTokens||[],

v=s.name,
w=null;
return new (c('SearchableEntry'))
({uniqueID:s.id||t,
keywordString:u.join(' '),
order:q.getRank(s.id||t),
photo:s.thumbSrc,
title:v,
subtitle:w,
type:s.type,
uri:s.uri,
auxiliaryData:{isMessengerUser:s.is_messenger_user}});},








normalizeThreadEntry:function r(s,t){
var u=s.mercury_thread,
v=s.participants_to_render.map(function(aa){return babelHelpers['extends']({},
aa,
{id:l(aa.id)});});

u.participants=u.participants.map(l);

var w=s.text,
x=null;
if(!w)
w=u.name;


var y=v.
map(function(aa){return aa.name;}).
join(', ');
if(!w){


w=y;}else 

x=y;

var z=s.uid;
if(!w||!c('isValidUniqueID')(z))
return null;


return new (c('SearchableEntry'))
({uniqueID:z,
order:t,
photo:u.image_src,
title:w,
subtitle:x,
type:'thread',
auxiliaryData:{participantsToRender:v,thread:u}});},










getRank:function r(s){
if(s in i)
return i[s];


return h?h.length:0;},


getActiveList:function r(s){
if(j.length>0){
s(j);
return;}

q.getList(function(t){return s(t);});},


getActiveRank:function r(s){
return s in k?
k[s]:
q.getRank(s);}};



(function(){
c('ChatSidebarPreloadStore').onLoaded(function(r){var s=r.buddies,t=r.shortProfiles;
c('ShortProfiles').setMulti(t);
o(s);
n(s);});

c('ChatProfileStore').init();})
();

f.exports=q;}),null);

/** js/chat/core/ChatDispatcher.js */






__d('ChatDispatcher',['ExplicitRegistrationDispatcher'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits



(j,c('ExplicitRegistrationDispatcher'));i=h&&h.prototype;function j(){h.apply(this,arguments);}


f.exports=new j({strict:false});}),null);

/** js/logging/generated/ChatPerfTypedLogger.js */





__d('ChatPerfTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){
'use strict';



















function h(){
this.clear();}
h.prototype.





log=function(){
c('GeneratedLoggerUtils').log('logger:ChatPerfLoggerConfig',this.$ChatPerfTypedLogger_data,c('Banzai').BASIC);};
h.prototype.







logVital=function(){
c('GeneratedLoggerUtils').log('logger:ChatPerfLoggerConfig',this.$ChatPerfTypedLogger_data,c('Banzai').VITAL);};
h.prototype.




clear=function(){
this.$ChatPerfTypedLogger_data={};
return this;};
h.prototype.






updateData=function(j){








this.$ChatPerfTypedLogger_data=babelHelpers['extends']({},
this.$ChatPerfTypedLogger_data,
j);

return this;};
h.prototype.




setDuration=function(j){
this.$ChatPerfTypedLogger_data.duration=j;
return this;};
h.prototype.




setEndpoint=function(j){
this.$ChatPerfTypedLogger_data.endpoint=j;
return this;};
h.prototype.




setEvent=function(j){
this.$ChatPerfTypedLogger_data.event=j;
return this;};
h.prototype.




setTabsOpen=function(j){
this.$ChatPerfTypedLogger_data.tabs_open=j;
return this;};


























var i=
{duration:true,
endpoint:true,
event:true,
tabs_open:true};


f.exports=h;}),null);

/** js/modules/Dcode.js */
























__d('Dcode',[],(function a(b,c,d,e,f,g){

var h,i={},j=


{_:'%',
A:'%2',
B:'000',
C:'%7d',
D:'%7b%22',
E:'%2c%22',
F:'%22%3a',
G:'%2c%22ut%22%3a1',
H:'%2c%22bls%22%3a',
I:'%2c%22n%22%3a%22%',
J:'%22%3a%7b%22i%22%3a0%7d',
K:'%2c%22pt%22%3a0%2c%22vis%22%3a',
L:'%2c%22ch%22%3a%7b%22h%22%3a%22',
M:'%7b%22v%22%3a2%2c%22time%22%3a1',
N:'.channel%22%2c%22sub%22%3a%5b',
O:'%2c%22sb%22%3a1%2c%22t%22%3a%5b',
P:'%2c%22ud%22%3a100%2c%22lc%22%3a0',
Q:'%5d%2c%22f%22%3anull%2c%22uct%22%3a',
R:'.channel%22%2c%22sub%22%3a%5b1%5d',
S:'%22%2c%22m%22%3a0%7d%2c%7b%22i%22%3a',
T:'%2c%22blc%22%3a1%2c%22snd%22%3a1%2c%22ct%22%3a',
U:'%2c%22blc%22%3a0%2c%22snd%22%3a1%2c%22ct%22%3a',
V:'%2c%22blc%22%3a0%2c%22snd%22%3a0%2c%22ct%22%3a',
W:'%2c%22s%22%3a0%2c%22blo%22%3a0%7d%2c%22bl%22%3a%7b%22ac%22%3a',
X:'%2c%22ri%22%3a0%7d%2c%22state%22%3a%7b%22p%22%3a0%2c%22ut%22%3a1',
Y:'%2c%22pt%22%3a0%2c%22vis%22%3a1%2c%22bls%22%3a0%2c%22blc%22%3a0%2c%22snd%22%3a1%2c%22ct%22%3a',
Z:'%2c%22sb%22%3a1%2c%22t%22%3a%5b%5d%2c%22f%22%3anull%2c%22uct%22%3a0%2c%22s%22%3a0%2c%22blo%22%3a0%7d%2c%22bl%22%3a%7b%22ac%22%3a'};


(function(){

var l=[];
for(var m in j){i[j[m]]=m;l.push(j[m]);}
l.reverse();
h=new RegExp(l.join("|"),'g');})
();

var k=
{encode:function l(m){
return encodeURIComponent(m).
replace(/([_A-Z])|%../g,function(n,o){
return o?'%'+o.charCodeAt(0).toString(16):n;}).

toLowerCase().
replace(h,function(n){return i[n];});},

decode:function l(m){
return decodeURIComponent(m.replace(/[_A-Z]/g,function(n){
return j[n];}));}};




f.exports=k;}),null);

/** js/presence/PresenceCookieManager.js */





__d('PresenceCookieManager',['Cookie','CurrentUser','Dcode','ErrorUtils','JSLogger','PresenceInitialData','PresenceUtil','WebStorage','WorkModeConfig'],(function a(b,c,d,e,f,g){























var h=c('PresenceInitialData').cookieVersion,
i='presence',

j={},
k=null,
l=null,
m=c('JSLogger').create('presence_cookie');






function n(y){
var z=c('Cookie').get(i)||'';
if(z.length===0)
return null;

if(z[0]!==y)
return null;

return z.substring(1);}





function o(y,z){
c('Cookie').set(i,y+z);}






function p(){
if(!(c('PresenceInitialData').useWebStorage||false))
return null;

return c('WebStorage').getSessionStorage();}


function q(){



var y=p(),
z=y!=null?
y.getItem(i):
null;
if(z!=null)

return z.substring(1);

return null;}


function r(y){
var z=p();
if(z==null)
return false;


z.setItem(i,'E'+y);
return true;}





function s(){
var y=q();
if(y!=null)
return y;



return n('E');}







function t(y){
var z=y.state;
if(z==null)
return '';

var aa=n('S')||'',

ba=c('WorkModeConfig').is_work_user?'w':'f',


ca=c('WorkModeConfig').is_work_user?z.t3w:z.t3,
da=ca!=null?ca.length>0:false,
ea=aa.indexOf(ba)!==-1;
if(ea&&!da)
aa=aa.replace(ba,'');

if(!ea&&da)
aa+=ba;

return aa;}


function u(y,z){
var aa=r(y);
if(aa){

o('S',z);}else{


if(y.length>1024)
m.warn('big_cookie',y.length);

o('E',y);}}



function v(){

try{var z=s();


if(k!==z){
k=z;
l=null;


if(z){
z=c('Dcode').decode(z);
l=JSON.parse(z);}}



if(l){

if(l.user&&
l.user!==c('CurrentUser').getID())
return null;



if(l.v!==h)
return null;


return l;}}catch(

y){


m.warn('getcookie_error',y);}

return null;}


function w(){
return parseInt(Date.now()/1000,10);}


var x=


{register:function y(z,aa){
j[z]=aa;},




store:function y(){

var z=v();

if(z&&z.v&&h<z.v){
m.debug('stale_cookie',h);
return;}



var aa=
{v:h,
time:w(),
user:c('CurrentUser').getID()};


for(var ba in j)
aa[ba]=c('ErrorUtils').applyWithGuard
(j[ba],
j,
[z&&z[ba]],
function(da){
da.presence_subcookie=ba;});



var ca=c('Dcode').encode(JSON.stringify(aa));


if(c('PresenceUtil').hasUserCookie())
u(ca,t(aa));},





clear:function y(){
c('Cookie').clear(i);
var z=c('WebStorage').getSessionStorage();
if(z!=null)
z.removeItem(i);},




getSubCookie:function y(z){
var aa=v();
if(!aa)
return null;

return aa[z];}};



f.exports=x;}),null);

/** js/presence/PresenceState.js */










__d('PresenceState',['Arbiter','ErrorUtils','JSLogger','PresenceCookieManager','debounceAcrossTransitions','setIntervalAcrossTransitions','PresenceInitialData'],(function a(b,c,d,e,f,g){











var h=c('PresenceInitialData').cookiePollInterval||2000,
i=c('PresenceInitialData').shouldSuppress||false,

j=[],
k=[],

l=null,
m=null,
n=0,
o=null,


p=0,


q=['sb2','t2','lm2','uct2','tr','tw','at','wml'],

r=c('JSLogger').create('presence_state');

function s(){
return c('PresenceCookieManager').getSubCookie('state');}


function t(){

n=Date.now();
c('PresenceCookieManager').store();


x(m);}


var u=c('debounceAcrossTransitions')(t,0);

function v(ca){
if(typeof ca=='undefined'||isNaN(ca)||
ca==Number.POSITIVE_INFINITY||ca==Number.NEGATIVE_INFINITY)
ca=0;

return ca;}


function w(ca){
var da={};
if(ca){
q.forEach(function(ga){da[ga]=ca[ga];});

if(n<ca.ut)

r.error('new_cookie',{cookie_time:ca.ut,
local_time:n});}




da.ut=n;


for(var ea=0,fa=j.length;ea<fa;ea++)
c('ErrorUtils').applyWithGuard(j[ea],null,[da]);


m=da;
return m;}


function x(ca){

p++;
n=v(ca.ut);


if(!l)
l=c('setIntervalAcrossTransitions')(aa,h);


m=ca;
if(o===null)
o=ca;



for(var da=0,ea=k.length;da<ea;da++)
c('ErrorUtils').applyWithGuard(k[da],null,[ca]);


p--;}





function y(ca){
if(ca&&ca.ut)
if(n<ca.ut){

return true;}else
if(ca.ut<n)

r.error('old_cookie',{cookie_time:ca.ut,
local_time:n});



return false;}







function z(){
var ca=s();
if(y(ca))
m=ca;


return m;}





function aa(){
var ca=s();
if(y(ca))
x(ca);}






c('PresenceCookieManager').register
('state',
w);


c('Arbiter').subscribe(c('JSLogger').DUMP_EVENT,function(ca,da){
da.presence_state=
{initial:babelHelpers['extends']({},
o),

state:babelHelpers['extends']({},
m),

update_time:n,
sync_paused:p,
poll_time:h};});



(function(){
var ca=z();

if(ca){
x(ca);}else{



r.debug('no_cookie_initial');
x(w());
return;}})

();

var ba=

{doSync:function ca(da){

if(p)
return;


if(da){



t();}else 



u();},




registerStateStorer:function ca(da){
j.push(da);},

registerStateLoader:function ca(da){
k.push(da);},


get:function ca(){
return z();},


getInitial:function ca(){
return o;},





shouldSuppress:function ca(){
return i;},


verifyNumber:v};


f.exports=ba;}),null);

/** js/mercury/clients/chat/ChatPerfInstrumentation.js */






__d('ChatPerfInstrumentation',['Promise','BaseEventEmitter','ChatPerfEvent','ChatPerfTypedLogger','PresenceState','WorkModeConfig','emptyFunction','performanceAbsoluteNow'],(function a(b,c,d,e,f,g){

'use strict';













var h=c('WorkModeConfig').is_work_user,
i=h?'t3w':'t3',
j=c('PresenceState').getInitial()&&
c('PresenceState').getInitial()[i]?
c('PresenceState').getInitial()[i].length:
0,

k=void 0,

l=
{_startTime:(Number),
_sidebarStartTime:(Number),

init:function m(){
this._startTime=c('performanceAbsoluteNow')();
return new (c('Promise'))(function(n){return n();});},


initDivebar:function m(){
this._sidebarStartTime=c('performanceAbsoluteNow')();},


_log:function m(event,n){
var o=c('performanceAbsoluteNow')()-(n||this._startTime);
if(k)
k.emit(event,o);

var p=new (c('ChatPerfTypedLogger'))();
p.setEvent(event).
setDuration(o);

p.setTabsOpen(j);

p.log();},


addPerfTimingsListener:function m
(event,
n){

if(!k)
k=new (c('BaseEventEmitter'))();


return k.once(event,n);},


logInitStores:function m(){
this.logInitStores=c('emptyFunction');
this._log(c('ChatPerfEvent').CHAT_INIT_STORES);},


logInitData:function m(){
this.logInitData=c('emptyFunction');
this._log(c('ChatPerfEvent').CHAT_INIT_DATA);},


logInitUI:function m(){
this.logInitUI=c('emptyFunction');
this._log(c('ChatPerfEvent').CHAT_INIT_UI);},


logInitSound:function m(){
this.logInitSound=c('emptyFunction');
this._log(c('ChatPerfEvent').CHAT_INIT_SOUND);},


logDisplayDone:function m(){
this.logDisplayDone=c('emptyFunction');
this._log(c('ChatPerfEvent').CHAT_DISPLAY_DONE);},


logTTI:function m(){
this.logTTI=c('emptyFunction');
this._log(c('ChatPerfEvent').TTI);},


logCHAT_CONVERSATION_TTI:function m(){
this.logCHAT_CONVERSATION_TTI=c('emptyFunction');
this._log(c('ChatPerfEvent').CHAT_CONVERSATION_TTI);},


logSIDEBAR_FROM_CLIENT_TTI:function m(){
this.logSIDEBAR_FROM_CLIENT_TTI=c('emptyFunction');
this._log(c('ChatPerfEvent').SIDEBAR_FROM_CLIENT_TTI,this._sidebarStartTime);},


logSIDEBAR_DISPLAY_DONE:function m(){
this.logSIDEBAR_DISPLAY_DONE=c('emptyFunction');
this._log(c('ChatPerfEvent').SIDEBAR_DISPLAY_DONE,this._sidebarStartTime);}};



f.exports=l;}),null);

/** js/mercury/clients/rtc/FBRTCDispatcher.js */






__d('FBRTCDispatcher',['Dispatcher_DEPRECATED'],(function a(b,c,d,e,f,g){

'use strict';



f.exports=new (c('Dispatcher_DEPRECATED'))();}),null);

/** js/mercury/clients/sidebar/ChatSidebarActionTypes.js */






__d('ChatSidebarActionTypes',['keyMirror'],(function a(b,c,d,e,f,g){

'use strict';



f.exports=c('keyMirror')
({INIT:null,
LOADED:null,
SET_ENABLED:null,
SHOW:null});}),null);

/** js/mercury/clients/sidebar/ChatSidebarHideReason.js */






__d("ChatSidebarHideReason",[],(function a(b,c,d,e,f,g){

var h=
{VIEWPORT_INCAPABLE:0,
LOW_FRIEND_COUNT:1,
NOT_ENABLED:2};


f.exports=h;}),null);

/** js/mercury/clients/sidebar/ChatSidebarStore.js */






__d('ChatSidebarStore',['ChatDispatcher','ChatOptionsInitialData','ChatSidebarActionTypes','FluxStore','SidebarType','performanceAbsoluteNow'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits

















(j,c('FluxStore'));i=h&&h.prototype;
















function j(){
i.constructor.call(this,c('ChatDispatcher'));
this.$ChatSidebarStore_state=
{initialized:false,
initTime:c('performanceAbsoluteNow')(),
loaded:false,
enabled:!!c('ChatOptionsInitialData').sidebar_mode,
visible:null};

this.$ChatSidebarStore_prevState={};}
j.prototype.

__onDispatch=function(k){
var l=k.type;
this.$ChatSidebarStore_prevState=babelHelpers['extends']({},this.$ChatSidebarStore_state);
switch(l){
case c('ChatSidebarActionTypes').INIT:
if(!this.$ChatSidebarStore_prevState.initialized)
this.$ChatSidebarStore_state.initTime=c('performanceAbsoluteNow')();

this.$ChatSidebarStore_state.initialized=true;
break;
case c('ChatSidebarActionTypes').LOADED:
this.$ChatSidebarStore_state.loaded=true;
break;
case c('ChatSidebarActionTypes').SHOW:
this.$ChatSidebarStore_state.visible=k.sidebarType;
break;
case c('ChatSidebarActionTypes').SET_ENABLED:
this.$ChatSidebarStore_state.enabled=k.enabled;
this.$ChatSidebarStore_state.visible=k.sidebarType;
break;}

for(var m in this.$ChatSidebarStore_state)
if(Object.prototype.hasOwnProperty.call(this.$ChatSidebarStore_state,m))
if(this.$ChatSidebarStore_state[m]!==this.$ChatSidebarStore_prevState[m]){
this.__emitChange();
break;}};



j.prototype.

getPrevState=function(){
return this.$ChatSidebarStore_prevState;};
j.prototype.

getState=function(){
return this.$ChatSidebarStore_state;};
j.prototype.

isInitialized=function(){
return this.$ChatSidebarStore_state.initialized;};
j.prototype.

isLoaded=function(){
return this.$ChatSidebarStore_state.loaded;};
j.prototype.

isEnabled=function(){
return this.$ChatSidebarStore_state.enabled;};
j.prototype.

getInitTime=function(){
return this.$ChatSidebarStore_state.initTime;};
j.prototype.

getVisibleType=function(){
return this.$ChatSidebarStore_state.visible;};



f.exports=new j();}),null);

/** js/mercury/clients/sidebar/ChatSidebarVisibility.js */






__d('ChatSidebarVisibility',['ChatConfig','ChatSidebarHideReason','ChatSidebarStore','OrderedFriendsList','SidebarType','getViewportDimensions'],(function a(b,c,d,e,f,g){

'use strict';









var h=c('ChatConfig').get('sidebar.min_friends'),
i=c('ChatConfig').get('sidebar.minimum_width'),






j=
{getViewport:function k(){
return c('getViewportDimensions').withoutScrollbars();},








shouldShowSidebar:function k
(l,
m){

j.shouldShowSidebarIgnoreEnabled
(l,
function(n,o){
var p=c('ChatSidebarStore').isEnabled();
m
(n&&p,
p?o:o.concat([c('ChatSidebarHideReason').NOT_ENABLED]));});},









shouldShowSidebarIgnoreEnabled:function k
(l,
m){

c('OrderedFriendsList').getActiveList(function(n){
var o=l||j.getViewport(),
p=o.width>i,
q=n.length<=h,
r=true,
s=[];
if(!p){
r=false;
s.push(c('ChatSidebarHideReason').VIEWPORT_INCAPABLE);}

if(q){
r=false;
s.push(c('ChatSidebarHideReason').LOW_FRIEND_COUNT);}

m(r,s);});},



isSidebarVisible:function k(){
return c('ChatSidebarStore').getVisibleType()===c('SidebarType').SIDEBAR;},


isBuddyListVisible:function k(){
return c('ChatSidebarStore').getVisibleType()===c('SidebarType').BUDDYLIST;}};



f.exports=j;}),null);

/** js/mercury/clients/sidebar/ChatSidebarActions.js */






__d('ChatSidebarActions',['ChatDispatcher','ChatSidebarActionTypes','ChatSidebarVisibility','SidebarType'],(function a(b,c,d,e,f,g){

'use strict';








var h=
{init:function i(){
c('ChatDispatcher').dispatch
({type:c('ChatSidebarActionTypes').INIT});},



loaded:function i(){
c('ChatDispatcher').dispatch
({type:c('ChatSidebarActionTypes').LOADED});},



disable:function i(){
c('ChatDispatcher').dispatch
({type:c('ChatSidebarActionTypes').SET_ENABLED,
enabled:false,
sidebarType:c('SidebarType').BUDDYLIST});},



enable:function i(j){
c('ChatDispatcher').dispatch
({type:c('ChatSidebarActionTypes').SET_ENABLED,
enabled:true,
sidebarType:j});},



show:function i(j){
c('ChatDispatcher').dispatch
({type:c('ChatSidebarActionTypes').SHOW,
sidebarType:j});}};




f.exports=h;}),null);

/** js/mercury/clients/sidebar/ChatSidebar.js */





__d('ChatSidebar',['csx','Arbiter','AsyncRequest','Bootloader','ChatDispatcher','ChatImpressionLogger','ChatPerfInstrumentation','ChatSidebarActions','ChatSidebarHideReason','ChatSidebarStore','ChatSidebarVisibility','CSS','DOM','DOMDimensions','Event','LogHistory','JSLogger','KeyEventController','LitestandClassicPlaceHolders','Parent','PresencePrivacy','PresenceUtil','ScrollableArea','SidebarType','Style','TimeSlice','ViewportBounds','debounce','emptyFunction','ge'],(function a(b,c,d,e,f,g,h){

































var i,
j,
k,
l,
m,
n,
o=false,

p,


q=true,



r=null,

s=c('LogHistory').getInstance('chat_sidebar');

function t(){
return c('ChatSidebarStore').getVisibleType()===c('SidebarType').SIDEBAR;}


function u(ea,fa){
if(!t())
return;


if(fa){
m.hide();}else{

m.show();
x();}}



function v(){
return !t()||!l?
0:
206;}


function w(){






c('CSS').removeClass(document.documentElement,'sidebarMode');

if(c('ChatSidebarStore').isInitialized()){
m.hide();
c('CSS').hide(l);
c('CSS').hide(k);}


c('Arbiter').inform('sidebar/visibility',false,c('Arbiter').BEHAVIOR_STATE);
c('Arbiter').inform('reflow');
c('ViewportBounds').inform('change');}


function x(ea){
if(!ea||ea.width!==r.width)
c('ChatSidebarVisibility').shouldShowSidebar(r,function(fa,ga){
c('ChatSidebarActions').show
(fa?c('SidebarType').SIDEBAR:c('SidebarType').BUDDYLIST);});



if(!ea||ea.height!==r.height)
aa();}



function y(ea){
var fa=r||c('ChatSidebarVisibility').getViewport(),
ga=fa.height;

ea.forEach(function(ha){
if(ha&&ha!==i&&!c('CSS').hasClass(ha,'hidden_elem'))
ga-=c('DOMDimensions').getElementDimensions(ha).height;});



if(p)
ga-=p.getOffset();

if(n)
ga-=c('DOMDimensions').getElementDimensions(n).height;



return Math.max(0,ga);}


function z(){
c('CSS').show(k);

c('CSS').show(l);
c('CSS').addClass(document.documentElement,'sidebarMode');

m.show();

s.log('sidebar_show','{}');
c('Arbiter').inform('sidebar/visibility',true,c('Arbiter').BEHAVIOR_STATE);

c('LitestandClassicPlaceHolders').destroy('sidebar');
c('ViewportBounds').inform('change');

if(!o){


aa();
o=true;}}



function aa(){
if(!t())
return;


var ea=da.getBodyHeight(),


fa=m.getItemHeight(),
ga=8;

c('Style').set(i,'height',ea+'px');


var ha=Math.floor((ea-ga)/fa);

m.setNumTopFriends(ha,q);
q=false;

var ia=Math.floor(ea-ga);

c('Arbiter').inform
('sidebar/resized',
ia,
c('Arbiter').BEHAVIOR_STATE);

c('Arbiter').inform('reflow');}


function ba(){
new (c('AsyncRequest'))('/ajax/chat/settings.php').
setHandler(c('emptyFunction')).
setErrorHandler(c('emptyFunction')).
setData
({sidebar_mode:c('ChatSidebarStore').isEnabled(),
window_id:c('PresenceUtil').getSessionID()}).

setAllowCrossPageTransition(true).
send();}



function ca(){
c('ChatSidebarVisibility').shouldShowSidebar(null,function(ea,fa){
var ga=true;
fa.forEach(function(ia){
if(ia===null)
return;


switch(ia){
case c('ChatSidebarHideReason').NOT_ENABLED:
s.log('state_not_enabled','{}');
ga=false;
break;
case c('ChatSidebarHideReason').LOW_FRIEND_COUNT:
s.log('state_not_shown_num_friends','{}');
ga=false;
break;
case c('ChatSidebarHideReason').VIEWPORT_INCAPABLE:
ga=false;}});



var ha=ga?'state_shown':'state_not_shown';

s.log(ha,'{}');
c('ChatPerfInstrumentation').logSIDEBAR_FROM_CLIENT_TTI();});}



var da=


{init:function ea(fa,ga){
da.init=c('emptyFunction');
c('ChatPerfInstrumentation').initDivebar();

c('ChatDispatcher').explicitlyRegisterStore(c('ChatSidebarStore'));
c('ChatSidebarActions').loaded();

l=fa;
m=ga;

i=c('DOM').find(fa,'div.fbChatSidebarBody');

k=c('DOM').find(fa,"._51x_");
n=
c('DOM').find(fa,"._5qqe");

c('Event').listen(window,'resize',function(){
var ha=babelHelpers['extends']({},r)||{};
da._cacheViewport();
x(ha);});


c('KeyEventController').registerKey('q',function(event){
if(c('ChatSidebarStore').getVisibleType()!==c('SidebarType').SIDEBAR)
return;


if(!j){
var ha=c('DOM').scry
(fa,
"._3rhb input");

if(ha.length>0)
j=ha[0];}


if(j){
j.focus();
event.prevent();}});




m.setScrollContainer
(c('Parent').byClass(m.getRoot(),'uiScrollableAreaWrap'));



m.subscribe
(['render','show','hide'],
c('debounce')(function(ha){
var ia=c('ScrollableArea').getInstance(m.getRoot());
ia&&ia.adjustGripper();}));



c('Arbiter').subscribe('chat/option-changed',function(ha,ia){
if(ia.name==='hide_groups'||ia.name==='hide_admined_pages')
aa();});



c('Arbiter').subscribe
(['AppsDivebar/show-apps',
'AppsDivebar/hide-apps',
'Ticker/resized',
'PagesDivebar/show-pages',
'PagesDivebar/hide-pages'],

aa);




c('Arbiter').subscribe
('sidebar/typeahead/active',
u);


c('PresencePrivacy').subscribe
('privacy-user-presence-changed',
x);


c('ChatSidebarStore').addListener(function(){
var ha=c('ChatSidebarStore').getState(),
ia=c('ChatSidebarStore').getPrevState();
if(ha.visible!==ia.visible)
switch(ha.visible){
case c('SidebarType').SIDEBAR:
z();
break;
case c('SidebarType').BUDDYLIST:
w();
break;}


if(ha.enabled!==ia.enabled)
ba();});



da._cacheViewport();
x();
c('ChatImpressionLogger').init(m);

c('ViewportBounds').addPersistentRight(v);

c('Arbiter').inform('sidebar/initialized',da,c('Arbiter').BEHAVIOR_STATE);

c('ChatSidebarActions').init();
ca();

c('ChatPerfInstrumentation').logSIDEBAR_DISPLAY_DONE();},



ensureLoaded:function ea(){
if(!c('ChatSidebarStore').isEnabled())
return;


if(c('ChatSidebarStore').isLoaded())
return;


if(c('ge')('pagelet_sidebar'))
return;


c('Bootloader').loadModules(["UIPagelet"],function(fa){
var ga=c('DOM').create('div',{id:'pagelet_sidebar'});
c('DOM').appendContent(document.body,ga);

fa.loadFromEndpoint('SidebarPagelet','pagelet_sidebar');},
'ChatSidebar');

c('ChatSidebarActions').loaded();},



hide:function ea(){
if(!c('ChatSidebarStore').isEnabled())
return;

c('ChatSidebarActions').disable();},



unhide:function ea(){
if(c('ChatSidebarStore').isEnabled())
return;

c('ChatSidebarVisibility').shouldShowSidebarIgnoreEnabled(null,function(fa,ga){
c('ChatSidebarActions').enable
(fa?c('SidebarType').SIDEBAR:c('SidebarType').BUDDYLIST);});},




_cacheViewport:function ea(){
r=c('ChatSidebarVisibility').getViewport();},


getBodyHeight:function ea(){
return y
(Array.from(k.childNodes));}};




c('Arbiter').subscribe(c('JSLogger').DUMP_EVENT,function(ea,fa){
fa.sidebar_visible=t();});


da.init=c('TimeSlice').guard(da.init,'ChatSidebar init');

f.exports=da;}),null);
