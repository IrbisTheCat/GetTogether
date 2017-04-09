if (self.CavalryLogger) { CavalryLogger.start_js(["knA8n"]); }

/** __static_js_modules__/messagebordertype.js */




__d("MessageBorderType",[],(function a(b,c,d,e,f,g){

f.exports={FLOWERS:"flowers"};}),

null);

/** __static_js_modules__/messagecustomizationtype.js */




__d("MessageCustomizationType",[],(function a(b,c,d,e,f,g){

f.exports={BORDER:"border"};}),

null);

/** __static_js_modules__/messagesviewersetid.js */




__d("MessagesViewerSetID",[],(function a(b,c,d,e,f,g){

f.exports={MESSAGES:"messages",MESSAGES_VIEW_ALL_IN_THREAD:"messages:view_all_in_thread"};}),

null);

/** __static_js_modules__/mncommercemessagetype.js */




__d("MNCommerceMessageType",[],(function a(b,c,d,e,f,g){

f.exports={TEXT:"text",IMAGE:"image",VIDEO:"video",AUDIO:"audio",FILE:"file",ROBOT_TEXT:"robot_text",LOCATION:"location",FORCED_FETCH_MESSAGE:"forced_fetch_message",SENDER_ACTION:"sender_action",RETAIL_PRODUCT_SUBSCRIPTION:"retail_product_subscription",RETAIL_PROMOTION:"retail_promotion",RETAIL_CANCELLATION:"retail_cancellation",RETAIL_SHIPMENT:"retail_shipment",SHIPMENT_TRACKING_EVENT:"shipment_tracking_event",AIRLINE_CHECKIN_REMINDER:"airline_checkin_reminder",AIRLINE_BOARDING_PASS:"airline_boarding_pass",AIRLINE_CHECKIN:"airline_checkin",AIRLINE_BOARDINGPASS:"airline_boardingpass",AIRLINE_UPDATE:"airline_update",AIRLINE_ITINERARY:"airline_itinerary",CONTENT_SUBSCRIPTION:"content_subscription",AD_ADMIN_TEXT:"ad_admin_text",AD_TEXT:"ad_text",AD_BUBBLE:"ad_bubble",NON_AD:"non_ad",UNKNOWN:"unknown",OTHER:"other",TEMPLATE:"template",OPEN_GRAPH:"open_graph",GENERIC:"generic",LIST:"list",COMPACT_LIST:"compact_list",BUTTON:"button",RECEIPT:"receipt",GENERIC_LEGACY:"generic_legacy",FALLBACK:"fallback",RIDE_INTENT:"ride_intent",RIDE_SIGNUP:"ride_signup",RIDE_WELCOME:"ride_welcome",RIDE_ORDER_CONFIRMATION:"ride_order_confirmation",RIDE_REQUESTED:"ride_requested",RIDE_DRIVER_ON_THE_WAY:"ride_driver_on_the_way",RIDE_NO_DRIVER:"ride_no_driver",RIDE_DRIVER_ARRIVING:"ride_driver_arriving",RIDE_DRIVER_CANCELED:"ride_driver_canceled",RIDE_RIDER_CANCELED:"ride_rider_canceled",RIDE_COMPLETE:"ride_complete",RIDE_ADMIN_MESSAGE:"ride_admin_message",RIDE_RECEIPT:"ride_receipt",RIDE_REENGAGEMENT_FIRST_RIDE:"ride_reengagement_first_ride",GET_RIDE:"give_get_ride",GIVE_RIDE:"send_give_get_ride",REFERER_PROMO:"referer_promo",INSTANT_GAMES_SHARE:"instant_games_share",INSTANT_GAMES_SCORE:"instant_games_score",LINK:"link_admin_message",UNLINK:"unlink_admin_message",BLOCK_ALL:"block_all_admin_message",UNBLOCK_ALL:"unblock_all_admin_message",BLOCK_PROMOTION:"block_promotion_admin_message",UNBLOCK_PROMOTION:"unblock_promotion_admin_message",INITIAL_PROMOTION:"initial_promotion_admin_message",WEAK_CONSENT_ADMIN_MESSAGE:"weak_consent_admin_message",MESSENGER_TEAM_BOT_MESSAGE:"messenger_team_bot",MESSENGER_BOT_BASE_GENERIC:"messenger_bot_base_generic",COMMERCE_COMPACT_LIST:"commerce_compact_list"};}),

null);

/** __static_js_modules__/mncommercepagesetting.js */




__d("MNCommercePageSetting",[],(function a(b,c,d,e,f,g){

f.exports={COMMERCE_FAQ_ENABLED:"COMMERCE_FAQ_ENABLED",IN_MESSENGER_SHOPPING_ENABLED:"IN_MESSENGER_SHOPPING_ENABLED",COMMERCE_NUX_ENABLED:"COMMERCE_NUX_ENABLED",NULL_STATE_CTA_BUTTON_ALWAYS_ENABLED:"NULL_STATE_CTA_BUTTON_ALWAYS_ENABLED",STRUCTURED_MENU_ENABLED:"STRUCTURED_MENU_ENABLED",USER_CONTROL_TOPIC_MANAGE_ENABLED:"USER_CONTROL_TOPIC_MANAGE_ENABLED",COMPOSER_INPUT_DISABLED:"COMPOSER_INPUT_DISABLED"};}),

null);

/** __static_js_modules__/stickerassettype.js */




__d("StickerAssetType",[],(function a(b,c,d,e,f,g){

f.exports={IMAGE:"BestEffortImage",SPRITE:"SpriteImage",PADDED_SPRITE:"PaddedSpriteImage"};}),

null);

/** __static_js_modules__/textwithentitiesmetadatatype.js */




__d("TextWithEntitiesMetadataType",[],(function a(b,c,d,e,f,g){

f.exports={NONE:0,CONCEPT:1,INTENT:2};}),

null);

/** js/typing/TypingDetector.js */




__d('TypingDetector',['ArbiterMixin','Event','Input','Run','SubscriptionsHandler','TypingStates','createObjectFrom','emptyFunction'],(function a(b,c,d,e,f,g){











function h(i,j){
this._input=i;
this._ignoreKeys={};
this._getValueFn=j;}


Object.assign(h.prototype,c('ArbiterMixin'),


{_timeout:7000,


_currentState:c('TypingStates').INACTIVE,

init:function i(){
this.init=c('emptyFunction');
this.reset();

this._subscriptions=new (c('SubscriptionsHandler'))();
this._subscriptions.addSubscriptions
(c('Event').listen(this._input,'keyup',this._update.bind(this)),
c('Run').onUnload(this._onunload.bind(this)));},



reset:function i(){
clearTimeout(this._checkTimer);
this._checkTimer=null;
this._lastKeystrokeAt=null;
this._currentState=c('TypingStates').INACTIVE;},


setIgnoreKeys:function i(j){
this._ignoreKeys=c('createObjectFrom')(j);},


destroy:function i(){
this._subscriptions.release();},


_onunload:function i(){

if(this._currentState==c('TypingStates').TYPING)
this._transition(c('TypingStates').QUITTING);},



_update:function i(event){
var j=c('Event').getKeyCode(event),
k=this._currentState;

if(!this._ignoreKeys[j]){
var l=this._getValueFn?
this._getValueFn():
c('Input').getValue(this._input);
if(l.trim().length===0){
if(k==c('TypingStates').TYPING)
this._transition(c('TypingStates').INACTIVE);}else

if(k==c('TypingStates').TYPING){
this._recordKeystroke();}else
if(k==c('TypingStates').INACTIVE){
this._transition(c('TypingStates').TYPING);
this._recordKeystroke();}}},




_transition:function i(j){
this.reset();
this._currentState=j;
this.inform('change',j);},


_recordKeystroke:function i(){
this._lastKeystrokeTime=Date.now();
if(!this._checkTimer)
this._checkTimer=setTimeout(this._checkTyping.
bind(this),this._timeout);},



_checkTyping:function i(){
var j=this._lastKeystrokeTime+this._timeout,
k=Date.now();

if(k>j){
this._transition(c('TypingStates').INACTIVE);}else{


clearTimeout(this._checkTimer);
this._checkTimer=setTimeout(this._checkTyping.
bind(this),j-k+10);}}});




f.exports=h;}),null);

/** js/chat/TypingDetectorController.js */





__d('TypingDetectorController',['AsyncRequest','AvailableList','AvailableListConstants','ChatVisibility','Keys','MercuryServerRequestsConfig','TypingDetector','TypingStates','emptyFunction','ifRequired','setTimeoutAcrossTransitions','shield'],(function a(b,c,d,e,f,g){

'use strict';






























function h(i,j,k,l,m,n){
this.userID=i;
this.input=j;
this.source=k;
this.threadID=m;


this.remoteState=c('TypingStates').INACTIVE;

this.notifyTimer=null;


l=l||{};
this.notifyDelay=l.notifyDelay||this.notifyDelay;

this._typingDetector=new (c('TypingDetector'))(j,n);
this._typingDetector.init(l);
this._typingDetector.subscribe('change',this._stateChange.bind(this));}
h.prototype.

setUserAndThread=function(i,j){
if(this.userID!==i||this.threadID!==j){
this.resetState();
this.userID=i;
this.threadID=j;}};

h.prototype.





setIgnoreEnter=function(i){
var j=i?[c('Keys').RETURN]:[];
this._typingDetector.setIgnoreKeys(j);};
h.prototype.

resetState=function(){
this._notifyState(c('TypingStates').INACTIVE);
this.remoteState=c('TypingStates').INACTIVE;
this._typingDetector.reset();
clearTimeout(this.notifyTimer);
this.notifyTimer=null;};
h.prototype.

destroy=function(){
this.resetState();
this._typingDetector.destroy();};
h.prototype.

_stateChange=function(i,j){
if(j!=c('TypingStates').QUITTING){

clearTimeout(this.notifyTimer);
this.notifyTimer=c('setTimeoutAcrossTransitions')(c('shield')(this._notifyState,this,j),this.notifyDelay);}else 


this._notifyState(j,true);};

h.prototype.

_notifyState=function(i,j){


if(!this.userID&&!this.threadID||
!c('ChatVisibility').isOnline()||
i===this.remoteState||
c('ifRequired')('ChannelConnection',
function(k){return k.disconnected();},
function(){return true;}))

return;

this._sendRequest(i,this.userID,j);};
h.prototype.

_sendRequest=function(i,j,k){
this.remoteState=i;

var l={typ:i,
to:j,
source:this.source,
thread:this.threadID},


m=new (c('AsyncRequest'))().
setHandler(this._onTypResponse.bind(this,j)).
setErrorHandler(c('emptyFunction')).
setData(l).
setURI('/ajax/messaging/typ.php').
setAllowCrossPageTransition(true).
setOption('asynchronous_DEPRECATED',!k);
if(c('MercuryServerRequestsConfig').msgrRegion)
m.setRequestHeader
('X-MSGR-Region',c('MercuryServerRequestsConfig').msgrRegion);


m.send();};
h.prototype.

_onTypResponse=function(i,j){
var k=j.getPayload()||{};

if(k.offline)

c('AvailableList').set(i,
c('AvailableListConstants').OFFLINE,
'typing_response');};




Object.assign(h.prototype,

{notifyDelay:1000});


f.exports=h;}),null);

/** shared/hashtag/EmployeeLinkMatcher.js */









__d('EmployeeLinkMatcher',['CurrentUser'],(function a(b,c,d,e,f,g){

'use strict';



var h=new RegExp('^[\\s.,:]'),

i=
new RegExp('(?:\\b)([BDTPSX]\\d{4,})(?:\\b)','im'),
j=
new RegExp('(?:\\b)(designpack:\/\/.+)(?:\\b)','im'),






k=function n(o){
if(!c('CurrentUser').isEmployee())
return null;

var p=i.exec(o)||
j.exec(o);
if(p===null)
return null;


return {lnk:p[1],
idx:
p.index+
(h.exec(p[0])?1:0)};},



l=function n(o){
var p=
c('CurrentUser').isEmployee()&&

(i.exec(o)!==null||
j.exec(o)!==null);

return p;},


m={match:k,isMatch:l};

f.exports=m;}),null);

/** js/modules/EmployeeLinkRanges.js */






__d('EmployeeLinkRanges',['EmployeeLinkMatcher','UnicodeUtils'],(function a(b,c,d,e,f,g){

'use strict';











var h=
{PHABRICATOR_PREFIX:'https://phabricator.intern.facebook.com/',
TASKS_PREFIX:'https://our.intern.facebook.com/intern/tasks/?t=',
BUSINESS_PREFIX:'https://our.intern.facebook.com/intern/business/?q=',
SEV_PREFIX:'https://our.intern.facebook.com/intern/sevmanager/view/s/',
CHRONOS_PREFIX:'https://our.intern.facebook.com/intern/chronos/lucky/?query=',





get:function i(j){var k=arguments.length<=1||arguments[1]===undefined?0:arguments[1],
l=j.substr(k),
m=c('EmployeeLinkMatcher').match(l);
if(!m)
return [];

var n=m.lnk,
o=m.idx,
p=c('UnicodeUtils').strlen(l.substr(0,o));
k+=p;
var q='';
switch(n[0].toLowerCase()){
case 'd':
if(n.indexOf('designpack://')===0){
q=n;}else 

q=this.PHABRICATOR_PREFIX+n.toUpperCase();

break;
case 'p':
q=this.PHABRICATOR_PREFIX+n.toUpperCase();
break;
case 't':
q=this.TASKS_PREFIX+n.substr(1);
break;
case 'b':
q=this.BUSINESS_PREFIX+n.substr(1);
break;
case 's':
q=this.SEV_PREFIX+n.substr(1);
break;
case 'x':
q=this.CHRONOS_PREFIX+n.substr(1);
break;

default:return [];}

var r=n.length,
s=
[{offset:k,
length:r,
entity:{url:q}}];


return s.concat
(this.get(j,k+r));}};




f.exports=h;}),null);

/** js/mercury/clients/shared/MessengerSupportedEmojiUtils.js */






__d('MessengerSupportedEmojiUtils',['cx','EmojiImageURL','EmojiLikeConstants','EmojiRenderer','EmoticonEmojiList','Image.react','MessengerSupportedEmoji','React','Utf16','joinClasses'],(function a(b,c,d,e,f,g,h){

'use strict';
























var i=65039,
j='_fe0f',

k=new RegExp('(\r\n|[ \r\n]|\s)'),






















l=

{getSupportedEmojiKey:function m(n){
if(!n)
return null;


var o=null,
p=this.parse(n);
if(p.length===1&&p[0].length===n.length){
var q=p[0].emoji.map(function(r){return c('Utf16').decode(r);});
q[q.length-1]===i&&q.pop();
o=q.map(function(r){return r.toString(16);}).join('_');}

return this.isSupportedEmojiKey(o)?o:null;},


isSupportedEmoji:function m(n){
return !!this.getSupportedEmojiKey(n);},


isSupportedEmojiKey:function m(n){
return !!c('MessengerSupportedEmoji').emoji[n];},


getSupportedEmojiCodesArray:function m(n){
if(!n)
return null;


var o=this.parse(n);
if(o.length===1&&o[0].length===n.length){
var p=o[0].emoji.map(function(r){return c('Utf16').decode(r);});
p[p.length-1]===i&&p.pop();
var q=p.map(function(r){return r.toString(16);}).join('_');
if(c('MessengerSupportedEmoji').emoji[q])
return p;}


return null;},


getEmojiKeyFromCodes:function m(n){
return n.map(function(o){return o.toString(16);}).join('_');},


getClassSizeMap:function m(){var n,
o=c('EmojiLikeConstants').size;
return n={},n[
o.XSMALL]="_2560",n[
o.SMALL]="_1ifu",n[
o.MEDIUM]="_19_r",n[
o.LARGE]="_19_s",n;},



getEmojiMatchObj:function m(n){
var o=this.parse(n,1);
if(o.length!==1)
return null;

var p=o[0].emoji,
q=p.map(function(s){return c('Utf16').decode(s);});
if(q[q.length-1]===i)
q.pop();

var r=q.map(function(s){return s.toString(16);}).join('_');

return {emoji_key:r,
emoji_str:p.join(''),
is_supported:this.isSupportedEmojiKey(r),
offset:o[0].offset,
length:o[0].length};},



getNewEmojiData:function m(n,o){
if(!n)
return null;


var p=this.getSupportedEmojiKey(n);
if(!p)
return null;


var q=this.getClassSizeMap();
o=this.transferSize(o);
var r=c('joinClasses')
(q[o],
"_1ift"),

s=c('EmojiImageURL').getMessengerURL
(p,
c('EmojiLikeConstants').sizeMap[o]);



return {emoji:c('React').createElement(c('Image.react'),{className:r,src:s}),
emoji_key:p,
url:s};},



getEmojiOnlyContents:function m(n){
var o=n||'',
p=[];

while(o.length>0&&o.trim().length>0){

var q=k.exec(o),
r='';
while(q&&q.length&&q.index===0){
r+=q[0];
o=o.replace(k,'');
q=k.exec(o);}

if(r.length>0)
p.push
({text:r});




var s=c('EmoticonEmojiList').noncapturingRegexp.exec(o);
if(s&&s.index===0){
var t=c('EmoticonEmojiList').names[s[1]],
u=c('EmoticonEmojiList').emote2emojis[t];
p.push
({emojiKey:u,
text:s[1]});

o=o.replace(s[1],'');}else{


s=this.getEmojiMatchObj(o);
if(s&&s.is_supported){
p.push
({emojiKey:s.emoji_key,
text:s.emoji_str});

o=o.replace(s.emoji_str,'');}else 

return null;}}



return p;},


getUrl:function m(n,o){
if(n.endsWith(j))
n=n.replace(j,'');

if(!c('MessengerSupportedEmoji').emoji[n])
return null;

o=this.transferSize(o);
return c('EmojiImageURL').getMessengerURL
(n,
c('EmojiLikeConstants').sizeMap[o]);},



containsEmoji:function m(n){
return this.parse(n,1).length===1;},


parse:function m(n,o){
return c('EmojiRenderer').parse(n,o);},


transferSize:function m(n){
return c('EmojiLikeConstants').sizeMapTransfer[n]||n;}};



f.exports=l;}),null);

/** js/p2p/components/triggers/P2PTriggersUtils.js */








__d('P2PTriggersUtils',['P2PGKValues'],(function a(b,c,d,e,f,g){



var h=
/\$((\d{1,3}(,\d{3})*)|\d+)(\.\d{1,2})?(?=\s|\.\s|\,\s|$|\.$|\,$|\?|\!|\")/,

i=
{canSeeTriggers:function j(k){
if(!c('P2PGKValues').P2PEnabled)
return false;


return true;},


getMatches:function j(k){
return k.match(h);}};



f.exports=i;}),null);

/** shared/hashtag/RedditLinkMatcher.js */









__d('RedditLinkMatcher',[],(function a(b,c,d,e,f,g){

'use strict';

var h=
new RegExp('(?:^|\\s)(\\/[ru]\\/[a-zA-Z0-9_]{1,21})(?:\\b)','im'),






i=function l(m){
var n=h.exec(m);
if(n===null)
return null;


return {lnk:n[1],
idx:n.index};},



j=function l(m){
return h.exec(m)!==null;},


k={match:i,isMatch:j};

f.exports=k;}),null);

/** js/modules/RedditLinkRanges.js */






__d('RedditLinkRanges',['RedditLinkMatcher','UnicodeUtils'],(function a(b,c,d,e,f,g){

'use strict';











var h=
{REDDIT_PREFIX:'https://reddit.com',





get:function i(j){var k=arguments.length<=1||arguments[1]===undefined?0:arguments[1],
l=j.substr(k),
m=c('RedditLinkMatcher').match(l);
if(!m)
return [];

var n=m.lnk,
o=m.idx,
p=c('UnicodeUtils').strlen(l.substr(0,o));
k+=p;
var q='';
switch(n[1].toLowerCase()){
case 'r':
q=this.REDDIT_PREFIX+n;
break;
case 'u':
q=this.REDDIT_PREFIX+n;
break;

default:return [];}

var r=n.length,
s=
[{offset:k,
length:r,
entity:{url:q}}];


return s.concat
(this.get(j,k+r));}};




f.exports=h;}),null);

/** js/mercury/utils/shouldAddMRefParam.js */






__d('shouldAddMRefParam',['URI','isFacebookURI'],(function a(b,c,d,e,f,g){





var h=function i(j){
if(!c('isFacebookURI')(j)||j.getFragment())
return false;





if(/^\/events\//.test(j.getPath()))
return true;

return false;};


f.exports=h;}),null);

/** js/components/Mercury/MercuryMessageBody.react.js */






__d('MercuryMessageBody.react',['cx','fbt','BootloadedComponent.react','EmojiRenderer','EmoticonsList','EmoticonEmojiList','EmployeeLinkMatcher','EmployeeLinkRanges','RedditLinkMatcher','RedditLinkRanges','JSResource','Link.react','MercuryConfig','MessengerSupportedEmojiUtils','MessengerTextWithEntities.react','P2PTriggersUtils','React','TextWithEntities.react','TextWithEntitiesMetadataType','URI','URLMatcher','emptyFunction','getURLRanges','ifRequired','shouldAddMRefParam'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,




























l=c('React').PropTypes,

m=function o(){
m=c('emptyFunction');

c('ifRequired')
('ChatAppActions',
function(p){
p.setInitialDisplayDone();});};


j=babelHelpers.inherits

(n,c('React').PureComponent);k=j&&j.prototype;function n(){var o,p;for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=k.constructor).call.apply(o,[this].concat(r)),this.



























targetBlankLinkInterpolator=
function(t,
u){



if(u.className)
return c('React').createElement('span',{className:u.className},t);

if(u.id){
var v={};
if(!this.props.isFromViewer&&this.props.threadCustomColor)
v.color=this.props.threadCustomColor;


return (c('React').createElement(c('Link.react'),
{className:"_ih-",
href:u.url,
style:v,
onClick:this.props.onContactSelect?
this.props.onContactSelect.bind(this,u):
undefined},

t));}



if(u.entity&&u.entity.url){

var w=new (c('URI'))(u.entity.url.replace(/#+$/,''));
if(c('shouldAddMRefParam')(w))
w.addQueryData({__mref:'mb'});



return (c('React').createElement(c('Link.react'),
{href:
{url:w.toString(),
shimhash:u.entity.shimhash},

s:u.entity.s,
target:'_blank'},
t));}else


if(!u.entity)

switch(u.type){
case c('TextWithEntitiesMetadataType').NONE:

return (c('React').createElement('span',
{className:"_2y9",
title:JSON.stringify(u.data)},
t));


case c('TextWithEntitiesMetadataType').CONCEPT:
return this.renderConceptMetadata(t,u.data);
case c('TextWithEntitiesMetadataType').INTENT:
return this.renderIntentMetadata(t,u.data);

default:return t;}


return t;}.
bind(this),p;}n.prototype.

renderConceptMetadata=function(o,p){
if(!p)
return o;

if(p.intent_name)
return this.renderIntentMetadata(o,p);

return o;};
n.prototype.

renderIntentMetadata=function(o,p){
if(!p)
return o;

var q=p.intent_name||p.name;
switch(q){
case 'request_time':

return (c('React').createElement(c('BootloadedComponent.react'),
{bootloadLoader:
c('JSResource')('ServicesVerticalRequestTimeTriggers.react').__setRef('MercuryMessageBody.react'),

bootloadPlaceholder:c('React').createElement('span',null,o),
data:p,
text:o,
threadID:this.props.threadID}));



default:return o;}};

n.prototype.

renderIntentCTA=function(o){
if(o){
var p=o.intent_name||o.name;
switch(p){
case 'request_time':

return (c('React').createElement(c('BootloadedComponent.react'),
{bootloadLoader:
c('JSResource')('ServicesRequestTimeIntentCTA.react').__setRef('MercuryMessageBody.react'),

bootloadPlaceholder:c('React').createElement('span',null),
data:o,
threadID:this.props.threadID}));}}




return null;};
n.prototype.

renderCTAs=function(o){
var p=null;
if(o.length>0){
var q=o[0]||{};
switch(q.type){
case c('TextWithEntitiesMetadataType').CONCEPT:
case c('TextWithEntitiesMetadataType').INTENT:
p=this.renderIntentCTA(q.data);
break;}}


return p;};
n.prototype.

render=function(){var o=
this.props,p=o.body,q=o.ranges,r=o.metaRanges;
p=p||'';

if(p.startsWith('?OTR'))

return (c('React').createElement('span',{className:"_89h"},i._(["[encrypted message]","c75894795228faf5cc7d616147d606d3"])));










p=p.replace(/\s+$/,'');
if(p.length===0)
return null;


var s=false,


t=
!!(this.props.threadID&&
c('P2PTriggersUtils').canSeeTriggers(this.props.threadID)&&
c('P2PTriggersUtils').getMatches(p));



if(q&&q.length||
r&&r.length||
c('EmoticonsList').noncapturingRegexp.test(p)||
c('EmojiRenderer').containsEmoji(p)||
c('URLMatcher').match(p)||
c('EmployeeLinkMatcher').isMatch(p)||
c('RedditLinkMatcher').isMatch(p)||
t||
c('MessengerSupportedEmojiUtils').containsEmoji(p)||
c('EmoticonEmojiList').noncapturingRegexp.test(p))

s=true;


if(!s){
m();
return c('React').createElement('span',{className:this.props.className},p);}




if(c('MercuryConfig').DisableRanges&&
q&&
q.length===1&&
q[0].className==="__in")
q=c('getURLRanges')(p).concat(q);


if(q==undefined)



q=c('getURLRanges')(p);

if(q==undefined){
q=c('EmployeeLinkRanges').get(p);}else{

q=q.concat(c('EmployeeLinkRanges').get(p));
q=q.filter(function(y){return y!=undefined;});}


if(c('MercuryConfig').WWWRedditLinksGK)
if(q==undefined){
q=c('RedditLinkRanges').get(p);}else{

q=q.concat(c('RedditLinkRanges').get(p));
q=q.filter(function(y){return y!=undefined;});}



var u=
{className:this.props.className,
interpolator:this.targetBlankLinkInterpolator,
metaRanges:this.props.metaRanges,
ranges:q,
renderEmoji:true,
renderEmoticons:true,
text:p},


v=
c('React').createElement(c('TextWithEntities.react'),
u);



m();
if(t){

return (c('React').createElement(c('BootloadedComponent.react'),babelHelpers['extends']
({bootloadPlaceholder:v,
bootloadLoader:c('JSResource')('TextWithEntitiesAndP2P.react').__setRef('MercuryMessageBody.react')},
u,
{getMessengerEmote:this.$MercuryMessageBody_getMessengerEmote,
isSupportedEmoji:this.$MercuryMessageBody_isSupportedEmoji,
threadID:this.props.threadID})));}else{



var w=this.renderCTAs(this.props.metaRanges||[]),
x=
c('React').createElement(c('MessengerTextWithEntities.react'),
u);

if(!w)
return x;


return (c('React').createElement('span',null,
x,
w));}};



n.prototype.

$MercuryMessageBody_isSupportedEmoji=function(o){
return c('MessengerSupportedEmojiUtils').isSupportedEmojiKey(o);};
n.prototype.

$MercuryMessageBody_getMessengerEmote=function(o){
var p=c('EmoticonEmojiList').emote2emojis[o];
return c('MessengerSupportedEmojiUtils').isSupportedEmojiKey(p)?
p:
null;};
n.propTypes={body:l.string,customLike:l.object,isFromViewer:l.bool,metaRanges:l.array,ranges:l.array,threadCustomColor:l.string,threadID:l.string,onContactSelect:l.func};


f.exports=n;}),null);

/** js/mercury/info/MercuryMessageDeliveryState.js */






__d('MercuryMessageDeliveryState',[],(function a(b,c,d,e,f,g){

'use strict';

var h=
{SENDING:1,
SENT:2,
DELIVERED:3,
ERROR:0,
UNKNOWN:-1};


f.exports=h;}),null);

/** js/mercury/info/MercuryMessageInfo.js */






__d('MercuryMessageInfo',['MercuryActionStatus','MercuryMessageDeliveryState','MercuryViewer'],(function a(b,c,d,e,f,g){

'use strict';









var h=



{isOutbound:function i(j){
return j.author===c('MercuryViewer').getID();},





isInbound:function i(j){
return !h.isOutbound(j);},





isSending:function i(j){

return (j.status===c('MercuryActionStatus').UNSENT||
j.status===c('MercuryActionStatus').UNCONFIRMED||
j.status===c('MercuryActionStatus').UNABLE_TO_CONFIRM||
j.status===c('MercuryActionStatus').RESENDING);},






isSent:function i(j){



return (j.status===undefined||
j.status===c('MercuryActionStatus').SUCCESS);},






hasError:function i(j){

return (j.status===c('MercuryActionStatus').FAILED_UNKNOWN_REASON||
j.status===c('MercuryActionStatus').UNABLE_TO_CONFIRM||
j.status===c('MercuryActionStatus').ERROR);},






getDeliveryState:function i(j,k){

if(this.hasError(j))
return c('MercuryMessageDeliveryState').ERROR;

if(this.isSending(j))
return c('MercuryMessageDeliveryState').SENDING;

if(this.isSent(j)){
if(j.timestamp<=k)
return c('MercuryMessageDeliveryState').DELIVERED;

return c('MercuryMessageDeliveryState').SENT;}

return c('MercuryMessageDeliveryState').UNKNOWN;}};



f.exports=h;}),null);

/** js/mercury/errors/MercuryErrorInfo.js */





__d('MercuryErrorInfo',['fbt','MercuryErrorType','MercuryMessageInfo'],(function a(b,c,d,e,f,g,h){






var i=



{getMessage:function j(k){
var l='';
if(i.isConnectionError(k)){
l=h._(["This message didn't send.","43309bd4643cdc67a2d2a3ca2a44377c"]);





if(i.isTransient(k))
l=h._(["{message} Check your internet connection and click to try again.","5f382758f9329ff2f48a27deef205b69"],
[h.param('message',l)]);}else{








if(k&&k.description){
l=k.description;}else 

l=h._(["This message failed to send.","209c78fa7ecead75d3a7c00cdb6d9d4d"]);





if(i.isTransient(k))
l=h._(["{message} Click to send again.","616fc38efc0fef44e52fe9199759c783"],
[h.param('message',l)]);}







return l;},





isConnectionError:function j(k){
if(k&&k.type==c('MercuryErrorType').TRANSPORT)
return k.code===1001||
k.code===1004||
k.code===1006;

return false;},


isTransient:function j(k){
return k&&k.is_transient;},


isPermanent:function j(k){
return k?!this.isTransient(k):false;},


hasErrorStatus:function j(k){
return c('MercuryMessageInfo').hasError(k);}};



f.exports=i;}),null);

/** js/components/Mercury/MercuryMessageError.react.js */






__d('MercuryMessageError.react',['cx','CurrentUser','ImmutableObject','Link.react','MercuryErrorInfo','MercuryMessageActions','React','joinClasses'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,










k=c('React').PropTypes;i=babelHelpers.inherits



(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.





































messageResend=function(r){
r.preventDefault();
var s=this.props.message,
t=s.error_data;
if(c('MercuryErrorInfo').isTransient(t))
c('MercuryMessageActions').
getForFBID(this.props.authorFBID).
resend(this.props.message);}.

bind(this),this.

$MercuryMessageError_getClassNameFromStatus=function(r){
if(c('MercuryErrorInfo').hasErrorStatus(r)){
return "_2fs2"+(' '+"_2fs3")+



(c('MercuryErrorInfo').isTransient(r.error_data)?' '+"_2fs4":'')+

(c('MercuryErrorInfo').isPermanent(r.error_data)?' '+"_2fs5":'');}else 


return "_2fs6 _2fs2";},

n;}l.prototype.render=function(){var m=this.props.message,n=m.error_data;return c('React').createElement(c('Link.react'),babelHelpers['extends']({},this.props,{href:'#',className:c('joinClasses')(this.props.className,this.$MercuryMessageError_getClassNameFromStatus(m)),tabIndex:c('MercuryErrorInfo').isTransient(n)?0:null,onClick:this.messageResend}),c('React').createElement('i',{className:"_2fs1"}),c('React').createElement('span',{dangerouslySetInnerHTML:{__html:this.$MercuryMessageError_getTextFromStatus(m)}}));};l.prototype.

$MercuryMessageError_getTextFromStatus=function(m){
var n='',
o=m.error_data;

if(c('MercuryErrorInfo').hasErrorStatus(m)){
var p=c('MercuryErrorInfo').getMessage(o);
if(p)
n=p.toString();}



if(typeof n==='object'&&n.__html)
n=n.__html;


return n;};
l.propTypes={authorFBID:k.string,message:k.instanceOf(c('ImmutableObject')).isRequired};l.defaultProps={authorFBID:c('CurrentUser').getID()};


f.exports=l;}),null);

/** js/games/instantgames/isWebGLEnabled.js */





__d('isWebGLEnabled',[],(function a(b,c,d,e,f,g){

'use strict';

var h=null;

function i(){

try{var l=document.createElement('canvas');
return Boolean(window.WebGLRenderingContext)&&Boolean
(l.getContext('webgl')||
l.getContext('experimental-webgl'));}catch(

k){
return false;}}



function j(){
if(h===null)
h=i();


return h;}



f.exports=j;}),null);

/** js/logging/generated/MessengerMessageActionsTypedLogger.js */





__d('MessengerMessageActionsTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){
'use strict';



















function h(){
this.clear();}
h.prototype.





log=function(){
c('GeneratedLoggerUtils').log('logger:MessengerMessageActionsLoggerConfig',this.$MessengerMessageActionsTypedLogger_data,c('Banzai').BASIC);};
h.prototype.







logVital=function(){
c('GeneratedLoggerUtils').log('logger:MessengerMessageActionsLoggerConfig',this.$MessengerMessageActionsTypedLogger_data,c('Banzai').VITAL);};
h.prototype.




clear=function(){
this.$MessengerMessageActionsTypedLogger_data={};
return this;};
h.prototype.






updateData=function(j){








this.$MessengerMessageActionsTypedLogger_data=babelHelpers['extends']({},
this.$MessengerMessageActionsTypedLogger_data,
j);

return this;};
h.prototype.




setAction=function(j){
this.$MessengerMessageActionsTypedLogger_data.action=j;
return this;};
h.prototype.




setAppID=function(j){
this.$MessengerMessageActionsTypedLogger_data.appid=j;
return this;};
h.prototype.




setAppversion=function(j){
this.$MessengerMessageActionsTypedLogger_data.appversion=j;
return this;};
h.prototype.







setClienttime=function(j){
this.$MessengerMessageActionsTypedLogger_data.clienttime=j;
return this;};
h.prototype.




setContainermodule=function(j){
this.$MessengerMessageActionsTypedLogger_data.containermodule=j;
return this;};
h.prototype.




setCountry=function(j){
this.$MessengerMessageActionsTypedLogger_data.country=j;
return this;};
h.prototype.




setEntryPoint=function(j){
this.$MessengerMessageActionsTypedLogger_data.entry_point=j;
return this;};
h.prototype.




setErrorText=function(j){
this.$MessengerMessageActionsTypedLogger_data.error_text=j;
return this;};
h.prototype.




setGroupSize=function(j){
this.$MessengerMessageActionsTypedLogger_data.group_size=j;
return this;};
h.prototype.




setMessageType=function(j){
this.$MessengerMessageActionsTypedLogger_data.message_type=j;
return this;};
h.prototype.




setMid=function(j){
this.$MessengerMessageActionsTypedLogger_data.mid=j;
return this;};
h.prototype.




setName=function(j){
this.$MessengerMessageActionsTypedLogger_data.name=j;
return this;};
h.prototype.




setOfflineThreadid=function(j){
this.$MessengerMessageActionsTypedLogger_data.offline_threadid=j;
return this;};
h.prototype.




setPreviousReaction=function(j){
this.$MessengerMessageActionsTypedLogger_data.previous_reaction=j;
return this;};
h.prototype.




setReaction=function(j){
this.$MessengerMessageActionsTypedLogger_data.reaction=j;
return this;};
h.prototype.




setRecipientID=function(j){
this.$MessengerMessageActionsTypedLogger_data.recipient_id=j;
return this;};
h.prototype.




setThreadType=function(j){
this.$MessengerMessageActionsTypedLogger_data.thread_type=j;
return this;};
h.prototype.




setThreadid=function(j){
this.$MessengerMessageActionsTypedLogger_data.threadid=j;
return this;};
h.prototype.




setVC=function(j){
this.$MessengerMessageActionsTypedLogger_data.vc=j;
return this;};
h.prototype.




updateExtraData=function(j){
j=c('nullthrows')(c('GeneratedLoggerUtils').serializeMap(j));
c('GeneratedLoggerUtils').checkExtraDataFieldNames
(j,
i);

this.$MessengerMessageActionsTypedLogger_data=babelHelpers['extends']({},
this.$MessengerMessageActionsTypedLogger_data,
j);

return this;};
h.prototype.




addToExtraData=function(j,k){
var l={};
l[j]=k;
return this.updateExtraData(l);};


























var i=
{action:true,
appid:true,
appversion:true,
clienttime:true,
containermodule:true,
country:true,
entry_point:true,
error_text:true,
group_size:true,
message_type:true,
mid:true,
name:true,
offline_threadid:true,
previous_reaction:true,
reaction:true,
recipient_id:true,
thread_type:true,
threadid:true,
vc:true};


f.exports=h;}),null);

/** js/logging/generated/MessengerWebViewReactionsTypedLogger.js */





__d('MessengerWebViewReactionsTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){
'use strict';



















function h(){
this.clear();}
h.prototype.





log=function(){
c('GeneratedLoggerUtils').log('logger:MessengerWebViewReactionsLoggerConfig',this.$MessengerWebViewReactionsTypedLogger_data,c('Banzai').BASIC);};
h.prototype.







logVital=function(){
c('GeneratedLoggerUtils').log('logger:MessengerWebViewReactionsLoggerConfig',this.$MessengerWebViewReactionsTypedLogger_data,c('Banzai').VITAL);};
h.prototype.




clear=function(){
this.$MessengerWebViewReactionsTypedLogger_data={};
return this;};
h.prototype.






updateData=function(j){








this.$MessengerWebViewReactionsTypedLogger_data=babelHelpers['extends']({},
this.$MessengerWebViewReactionsTypedLogger_data,
j);

return this;};
h.prototype.




setEmojiGroup=function(j){
this.$MessengerWebViewReactionsTypedLogger_data.emoji_group=j;
return this;};
h.prototype.




setEmojiGroupCount=function(j){
this.$MessengerWebViewReactionsTypedLogger_data.emoji_group_count=j;
return this;};
h.prototype.




setEvent=function(j){
this.$MessengerWebViewReactionsTypedLogger_data.event=j;
return this;};
h.prototype.




setMid=function(j){
this.$MessengerWebViewReactionsTypedLogger_data.mid=j;
return this;};
h.prototype.




setSenderID=function(j){
this.$MessengerWebViewReactionsTypedLogger_data.sender_id=j;
return this;};
h.prototype.




setVC=function(j){
this.$MessengerWebViewReactionsTypedLogger_data.vc=j;
return this;};



















var i=
{emoji_group:true,
emoji_group_count:true,
event:true,
mid:true,
sender_id:true,
vc:true};


f.exports=h;}),null);

/** js/mercury/clients/chat/components/ChatPhotoUploader.react.js */







__d('ChatPhotoUploader.react',['cx','fbt','Promise','Bootloader','InlineBlock.react','Link.react','MercuryConfig','React','ReactDOM','SubscriptionsHandler','emptyFunction','joinClasses'],(function a(b,c,d,e,f,g,h,i){

'use strict';














var j=c('React').PropTypes,




















k=c('React').createClass({displayName:'ChatPhotoUploader',
_uploader:null,
_uploaderPromiseIsResolving:false,
_uploaderPromise:null,
_subscriptions:null,

propTypes:
{actionURI:j.string,
allowCrossPage:j.bool,
customUI:j.bool,
disabled:j.bool,
imageClassName:j.string,
imagesOnly:j.bool,
inputClassname:j.string,
linkClassName:j.string,
onSubmit:j.func,
onAllUploadsComplete:j.func,
onLastUploadFail:j.func,
onLastUploadCancel:j.func,
onMount:j.func,
onUploadError:j.func},


getDefaultProps:function l(){

return {actionURI:c('MercuryConfig').upload_url,
allowCrossPage:true,
costomUI:false,
disabled:false,
imageClassName:"_509w",
imagesOnly:true,
linkClassName:'',
onSubmit:c('emptyFunction'),
onAllUploadsComplete:c('emptyFunction'),
onLastUploadFail:c('emptyFunction'),
onLastUploadCancel:c('emptyFunction')};},



shouldComponentUpdate:function l(m){
return m.actionURI!=this.props.actionURI||
m.disabled!==this.props.disabled;},


componentDidMount:function l(){
if(this.props.onMount)
this.props.onMount(this);},



componentDidUpdate:function l(m){
if(this._uploader)
this._uploader.setAllowCrossPage(this.props.allowCrossPage);},



componentWillUnmount:function l(){
if(!this.isUploading()||!this.props.allowCrossPage)
this._cleanup();},



render:function l(){
var m=this.props.imagesOnly?i._(["Add Photos","364d4a6693fc45b5c888f9d46dfa04fd"]):i._(["Add Files","eea997db077aaf8f65cb07ab03a29f67"]),


n=c('joinClasses')("_4q61"+


(!this.props.customUI?' '+"_5f0v":'')+
(!this.props.customUI?' '+"_509v":''),

this.props.linkClassName);


return (c('React').createElement('form',
{action:this.props.actionURI,
className:"_vzk",
title:m,
method:'post',
onClick:function(o){
o.stopPropagation();
if(this.props.disabled)
o.preventDefault();}.

bind(this),
ref:'form'},
c('React').createElement('input',{type:'hidden',name:'attach_id',ref:'attachID'}),
c('React').createElement('input',{type:'hidden',name:'images_only',value:this.props.imagesOnly}),
c('React').createElement(c('InlineBlock.react'),
{onClick:this._bootloadChatAutoSendPhotoUploader,
className:c('joinClasses')

(this.props.className,
"_m _4q60 _3rzn")},


c('React').createElement('input',
{disabled:this.props.disabled,
type:'file',
className:c('joinClasses')
(this.props.inputClassname,
"_n _2__f"),

name:'attachment[]',
multiple:'true',
accept:this.props.imagesOnly?'image/*':'*',
ref:'input',
title:m}),

c('React').createElement(c('Link.react'),
{className:n,
tabIndex:-1},
c('React').createElement('i',
{className:this.props.imageClassName,
alt:i._(["Camera","cf29dc70def66d4e0f0be704dad611e9"])})))));},














_handleSubmit:function l(m,n){
this.props.onSubmit&&this.props.onSubmit(m,n);},


_handleAllUploadsCompleted:function l(m,n){
this.props.onAllUploadsComplete&&this.props.onAllUploadsComplete(m,n);
if(!this.isMounted())
this._cleanup();},



_handleLastUploadFailed:function l(m,n){
this.props.onLastUploadFail&&this.props.onLastUploadFail(m,n);
if(!this.isMounted())
this._cleanup();},



_handleLastUploadCanceled:function l(m,n){
this.props.onLastUploadCancel&&this.props.onLastUploadCancel(m,n);
if(!this.isMounted())
this._cleanup();},



_handleUploadError:function l(m,n){
this.props.onUploadError&&this.props.onUploadError(n);
if(!this.isMounted())
this._cleanup();},







isUploading:function l(){

return (this._uploader&&
this._uploader.isUploading()||
this._uploaderPromiseIsResolving);},



_bootloadChatAutoSendPhotoUploader:function l(){
if(!this._uploaderPromise){
this._uploaderPromiseIsResolving=true;
this._uploaderPromise=new (c('Promise'))(function(m){
c('Bootloader').loadModules
(["ChatAutoSendPhotoUploader"],
function(n){
this._uploaderPromiseIsResolving=false;
var o=new n
(c('ReactDOM').findDOMNode(this.refs.form),
c('ReactDOM').findDOMNode(this.refs.input),
c('ReactDOM').findDOMNode(this.refs.attachID),
c('MercuryConfig').msgr_region);


o.setAllowCrossPage(this.props.allowCrossPage);

var p=new (c('SubscriptionsHandler'))();
p.addSubscriptions
(o.subscribe
('submit',
this._handleSubmit),

o.subscribe
('all-uploads-completed',
this._handleAllUploadsCompleted),

o.subscribe
('last-upload-failed',
this._handleLastUploadFailed),

o.subscribe
('last-upload-canceled',
this._handleLastUploadCanceled),

o.subscribe
('file-upload-error',
this._handleUploadError));



this._subscriptions=p;
this._uploader=o;
m(this._uploader);}.
bind(this),'ChatPhotoUploader.react');}.

bind(this));}

return this._uploaderPromise;},


uploadFiles:function l(m){
this._bootloadChatAutoSendPhotoUploader().then(function(n){
n.uploadFiles(m);});},



uploadURL:function l(m){
this._bootloadChatAutoSendPhotoUploader().then(function(n){
n.uploadURL(m);});},



_cleanup:function l(){
this._subscriptions&&this._subscriptions.release();
this._uploader&&this._uploader.destroy();}});




f.exports=k;}),null);

/** js/mercury/clients/chat/components/ChatTypingIndicator.react.js */






__d('ChatTypingIndicator.react',['cx','fbt','ChatConfig','Image.react','MercuryParticipants','MercuryTypingAnimation.react','ReactComponentWithPureRenderMixin','React'],(function a(b,c,d,e,f,g,h,i){













var j=c('React').PropTypes,

k=c('ChatConfig').get('chattab_rounded_profile',false),

l=c('React').createClass({displayName:'ChatTypingIndicator',
mixins:[c('ReactComponentWithPureRenderMixin')],

propTypes:
{userID:j.string,
showName:j.bool},


render:function n(){
var o=void 0;
if(this.props.userID)
o=c('MercuryParticipants').getNow(this.props.userID);

if(!o)
return null;


return (c('React').createElement('div',{className:"_4tdt"},
m(o),
this._renderBubble()));},




getBubble:function n(){
return this.refs.bubble;},


_renderBubble:function n(){
var o=this.props.showName;

return (c('React').createElement('div',{className:"_4tdv"},
c('React').createElement('div',{className:"_5wd4"+(' '+"_1nc7")+(' '+"_2cnu")+



(o?' '+"_5ysy":'')},

c('React').createElement('div',{className:"_5wd9"+(' '+"_n4o")},



c('React').createElement('div',{className:"_5w1r"+(' '+"_5wdf")+(' '+"_3_om")},




c('React').createElement(c('MercuryTypingAnimation.react'),
{className:"_5x7x",
ref:'bubble'}))))));}});









function m(n){
var o=i._(["{name}","766a98254e194db9224fd995c8d07ec8"],
[i.param('name',n.name)]);





return (c('React').createElement('div',
{className:"_31o4"+

(k?' '+"_3njy":'')},

c('React').createElement('a',
{'aria-label':o,
className:"_4tdw",
'data-hover':'tooltip',
'data-tooltip-content':o,
'data-tooltip-position':'left',
href:n.href||'#',
ref:'link'},
c('React').createElement(c('Image.react'),{src:n.image_src,ref:'image'}))));}





f.exports=l;}),null);

/** js/mercury/models/MercuryTypingReceiver.js */










__d('MercuryTypingReceiver',['Arbiter','ChannelConstants','FBID','MercuryActionType','MercuryIDs','MercuryPayloadSource','MercuryDispatcher','MercurySingletonMixin','MercuryThreadIDMap','MercuryViewer','TypingStates','isEmpty','mixInEventEmitter','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g){









var h=c('MercuryThreadIDMap').get(),









i=30000;

function j(k){'use strict';
this.$MercuryTypingReceiver_timeout=null;
this.$MercuryTypingReceiver_typing={};
this.$MercuryTypingReceiver_dispatcher=c('MercuryDispatcher').getForFBID(k);
this.$MercuryTypingReceiver_dispatcher.subscribe('update-typing-state',function(m,n){
var o=n.payload_source;
if(o!=c('MercuryPayloadSource').CLIENT_CHANNEL_MESSAGE)
return;


var p=n.actions;
if(!p||!p.length)
return;


var q=c('MercuryActionType').USER_GENERATED_MESSAGE;

p.forEach(function(r){
if(r.action_type==q&&
r.author!=c('MercuryViewer').getID())
this.$MercuryTypingReceiver_stopTyping(r.thread_id,r.author);}.

bind(this));}.
bind(this));
var l;
if(c('FBID').isUser(k)){
l=
[c('ChannelConstants').getArbiterType('typ'),
c('ChannelConstants').getArbiterType('ttyp')];}else 


l=[c('ChannelConstants').getArbiterType('page_typing')];



c('Arbiter').subscribe
(l,
function(m,n){
var o=n.obj,
p=this.$MercuryTypingReceiver_getClientThreadID(o);
if(p){
var q=c('MercuryIDs').getParticipantIDFromUserID(o.from.toString());
if(o.st==c('TypingStates').TYPING){
this.$MercuryTypingReceiver_typing[p]=this.$MercuryTypingReceiver_typing[p]||{};

var r=this.$MercuryTypingReceiver_typing[p][q];
this.$MercuryTypingReceiver_typing[p][q]=Date.now();

if(!this.$MercuryTypingReceiver_timeout)
this.$MercuryTypingReceiver_timeout=c('setTimeoutAcrossTransitions')
(function(){this.$MercuryTypingReceiver_updateState();}.bind(this),
3000);



!r&&this.$MercuryTypingReceiver_informStateChange(p);}else
if(o.st==c('TypingStates').INACTIVE)
this.$MercuryTypingReceiver_stopTyping(p,q);}}.


bind(this));}

j.prototype.





$MercuryTypingReceiver_getTyping=function(k){'use strict';
var l=this.$MercuryTypingReceiver_typing[k]||{},
m=Object.keys(l);
m.sort(function(n,o){return l[n]-l[o];});
return m;};
j.prototype.

$MercuryTypingReceiver_updateState=function(){'use strict';
this.$MercuryTypingReceiver_timeout=null;

var k=Date.now(),
l={},
m=false;



for(var n in this.$MercuryTypingReceiver_typing){
var o=false;
for(var p in this.$MercuryTypingReceiver_typing[n]||{})
if(this.$MercuryTypingReceiver_typing[n][p]<k-i){
delete this.$MercuryTypingReceiver_typing[n][p];
o=true;}else 

m=true;



if(o)
l[n]=this.$MercuryTypingReceiver_getTyping(n);}



if(!c('isEmpty')(l))
this.$MercuryTypingReceiver_emitStateChange(l);


if(m)
this.$MercuryTypingReceiver_timeout=
c('setTimeoutAcrossTransitions')(function(){this.$MercuryTypingReceiver_updateState();}.bind(this),3000);};

j.prototype.

$MercuryTypingReceiver_stopTyping=function(k,l){'use strict';
if(k in this.$MercuryTypingReceiver_typing)
if(l in this.$MercuryTypingReceiver_typing[k]){
delete this.$MercuryTypingReceiver_typing[k][l];
this.$MercuryTypingReceiver_informStateChange(k);}};


j.prototype.

$MercuryTypingReceiver_emitStateChange=function(k){'use strict';
this.releaseHeldEventType('state-changed');
this.emitAndHold('state-changed',k);};
j.prototype.

$MercuryTypingReceiver_informStateChange=function(k){'use strict';
var l={};
l[k]=this.$MercuryTypingReceiver_getTyping(k);
this.$MercuryTypingReceiver_emitStateChange(l);};
j.prototype.

$MercuryTypingReceiver_getClientThreadID=function(k){'use strict';
if(k.thread_fbid)

return h.getClientIDFromServerIDNow
(k.thread_fbid.toString());



if(k.type==='typ'||k.type==='page_typing')
return c('MercuryIDs').getThreadIDFromUserID(k.from.toString());


return null;};



c('mixInEventEmitter')
(j,

{'state-changed':true});



Object.assign(j,c('MercurySingletonMixin'));

f.exports=j;}),null);

/** js/mercury/clients/chat/components/ChatTypingIndicators.react.js */




__d('ChatTypingIndicators.react',['fbt','ChatTypingIndicator.react','DOM','MercuryIDs','MercuryThreadInformer','MercuryThreads','MercuryTypingReceiver','MercuryParticipants','React','ReactDOM','SubscriptionsHandler','TooltipData','createObjectFrom','emptyFunction'],(function a(b,c,d,e,f,g,h){





var i=c('MercuryThreads').get(),












j=c('React').PropTypes,

k=c('React').createClass({displayName:'ChatTypingIndicators',
propTypes:
{indicatorClass:j.func,
indicatorsWillShow:j.func,
indicatorsDidShow:j.func,
rootClassName:j.string,
threadID:j.string.isRequired,
viewer:j.string.isRequired},


getDefaultProps:function l(){

return {indicatorClass:c('ChatTypingIndicator.react'),
indicatorsWillShow:c('emptyFunction'),
indicatorsDidShow:c('emptyFunction')};},



getInitialState:function l(){
return {typingUserIDs:[]};},


componentDidMount:function l(){
var m=c('MercuryThreadInformer').getForFBID(this.props.viewer),
n=c('MercuryTypingReceiver').getForFBID(this.props.viewer);

this._subscriptions=new (c('SubscriptionsHandler'))();
this._subscriptions.addSubscriptions
(n.addRetroactiveListener
('state-changed',
this.typingStateChanged),

m.subscribe('messages-received',this.messagesReceived));},



componentWillReceiveProps:function l(m){
if(m.threadID!=this.props.threadID)
this.setState({typingUserIDs:[]});},



componentWillUpdate:function l(m,n){
if(n.typingUserIDs.length>0)
this.props.indicatorsWillShow();},



componentDidUpdate:function l(){
if(this.state.typingUserIDs.length>0)
this.props.indicatorsDidShow();


c('MercuryParticipants').getMulti(this.state.typingUserIDs,function(m){
if(this.isMounted())
this.state.typingUserIDs.forEach(function(n){
var o=m[n],
p=this.refs[n]&&this.refs[n].getBubble();
if(p&&o)
c('TooltipData').set
(c('ReactDOM').findDOMNode(p),
this.renderTooltip(o.short_name),
'above',
'left');}.


bind(this));}.

bind(this));},


componentWillUnmount:function l(){
this._subscriptions.release();},


render:function l(){
if(!c('MercuryIDs').isValid(this.props.threadID))
return null;

var m=i.getThreadMetaNow(this.props.threadID);
if(m&&!m.is_subscribed)
return null;

var n=c('MercuryIDs').isGroupChat(this.props.threadID);

return (c('React').createElement('div',{className:this.props.rootClassName},
this.state.typingUserIDs.map(function(o){
return (this._renderTypingIndicator(o,!!n));}.bind(this))));},





_renderTypingIndicator:function l(m,n){
var o=this.props.indicatorClass;

return (c('React').createElement(o,
{key:m,
ref:m,
showName:n,
userID:m}));},




renderTooltip:function l(m){
var n=c('DOM').create('span');
c('ReactDOM').render
(c('React').createElement('span',null,h._(["{name} is typing...","8569f322f0c6f14767dc5d1dcbed9c98"],[h.param



('name',
m)])),




n);


return n;},


typingStateChanged:function l(m){
if(this.props.threadID in m)
this.setState
({typingUserIDs:m[this.props.threadID].slice().sort()});},




messagesReceived:function l(m,n){
if(this.props.threadID in n){
var o=n[this.props.threadID],
p=c('createObjectFrom')(o.map(function(q){return q.author;}));
this.setState
({typingUserIDs:
this.state.typingUserIDs.filter(function(q){return !p[q];}).sort()});}}});





f.exports=k;}),null);

/** js/messaging/flowerborder/MessagingFlowerCornerArrangements.js */






__d('MessagingFlowerCornerArrangements',['invariant','ix','Random','randomShuffle'],(function a(b,c,d,e,f,g,h,i){

'use strict';



































var j=
{TOP_LEFT:'topLeft',
BOTTOM_RIGHT:'bottomRight'},


k=
{PINK:'pink',
PURPLE:'purple',
YELLOW:'yellow'},


l=
{ROUND:'round',
POINTY:'pointy'},


m=-10;







function n(r,s){

this.$ElementProducer_corner=r;

this.$ElementProducer_offset=s;

this.$ElementProducer_flippedXY=c('Random').random()<.5;




this.$ElementProducer_flowerImages=[];

var t=
[k.PINK,
k.PURPLE,
k.YELLOW],

u=
[l.ROUND,
l.POINTY,
c('Random').random()>=.5?l.ROUND:l.POINTY];

c('randomShuffle')(t);
c('randomShuffle')(u);

for(var v=0;v<3;v++)
this.$ElementProducer_flowerImages.push
(this.$ElementProducer_getImagePath(t[v],u[v]));}


n.prototype.

$ElementProducer_getPointyImagePath=function(r){
switch(r){
case k.PINK:
return i("86995");
case k.PURPLE:
return i("86997");
case k.YELLOW:

default:return i("86999");}};

n.prototype.

$ElementProducer_getRoundImagePath=function(r){
switch(r){
case k.PINK:
return i("86996");
case k.PURPLE:
return i("86998");
case k.YELLOW:

default:return i("87000");}};

n.prototype.

$ElementProducer_getImagePath=function(r,s){
return s===l.POINTY?
this.$ElementProducer_getPointyImagePath(r):
this.$ElementProducer_getRoundImagePath(r);};
n.prototype.

$ElementProducer_nextFlowerImage=function(){
return this.$ElementProducer_flowerImages.pop();};
n.prototype.

flower=function(r){
var s=c('Random').random()*360;
return this.$ElementProducer_element
(this.$ElementProducer_nextFlowerImage(),

{pivot:.5,
rotationStart:s+r.rotationStartOffset,
rotationEnd:s,
scale:r.scale,
x:r.x,
y:r.y});};


n.prototype.

leaf=function(r){
return this.$ElementProducer_element
(i("86994"),

{pivot:1,
rotationStart:0,
rotationEnd:r.rotationEnd,
scale:r.scale,
x:r.x,
y:r.y});};


n.prototype.

$ElementProducer_element=
function(r,
s){

var t=s.pivot*100+'%',

u=s.x+m,
v=s.y+m,

w=-s.pivot*100,
x=s.scale,
y=s.rotationEnd,
z=void 0,aa=void 0,ba=void 0,ca=void 0;
if(this.$ElementProducer_flippedXY){
var da=u;
u=v;
v=da;
y=-y;}

if(this.$ElementProducer_corner===j.BOTTOM_RIGHT){




ca=this.$ElementProducer_offset+u+'px';
aa=this.$ElementProducer_offset+v+'px';
w=100+w;
y+=180;}else
if(this.$ElementProducer_corner===j.TOP_LEFT){
ba=this.$ElementProducer_offset+u+'px';
z=this.$ElementProducer_offset+v+'px';}else 

h(0,'invalid flower border corner value');


var ea=[];
if(w!==0)
ea.push('translate('+w+'%, '+w+'%)');

ea.push('scale('+x+')');
if(y!==0)
ea.push('rotate('+y+'deg)');



return {style:
{bottom:aa,
left:ba,
position:'absolute',
right:ca,
top:z,
transform:ea.join(' '),
transformOrigin:t+' '+t},

image:r};};




function o
(r){



return [r.leaf
({x:20.5,
y:38,
scale:.225,
rotationEnd:-80}),



r.leaf
({x:29,
y:22.5,
scale:.35,
rotationEnd:35}),



r.flower
({x:31.5,
y:22,
scale:.6,
rotationStartOffset:-70}),



r.flower
({x:21,
y:35,
scale:.65,
rotationStartOffset:-70}),




r.flower
({x:21.75,
y:24.75,
scale:1,
rotationStartOffset:50})];}





function p
(r){



return [r.leaf
({x:22.25,
y:35.25,
scale:.225,
rotationEnd:-115}),



r.leaf
({x:35,
y:24,
scale:.35,
rotationEnd:110}),



r.flower
({x:21.5,
y:32.5,
scale:.68,
rotationStartOffset:-60}),



r.flower
({x:21.5,
y:23.5,
scale:.67,
rotationStartOffset:-70}),



r.flower
({x:31,
y:21,
scale:.95,
rotationStartOffset:50})];}





function q
(r,
s){

var t=new n(r,s);
return c('Random').random()<.5?
o(t):
p(t);}


f.exports=
{createFlowers:q,
corners:j};}),null);

/** js/messaging/flowerborder/MessagingFlowerBorder.react.js */






__d('MessagingFlowerBorder.react',['Image.react','MessagingFlowerCornerArrangements','React'],(function a(b,c,d,e,f,g){

'use strict';var h,i,







j=c('React').PropTypes;h=babelHelpers.inherits

(k,c('React').PureComponent);i=h&&h.prototype;function k(){var l,m;for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.










$MessagingFlowerBorder_createElements=function(){
return c('MessagingFlowerCornerArrangements').createFlowers
(c('MessagingFlowerCornerArrangements').corners.TOP_LEFT,

this.props.offset).
concat(c('MessagingFlowerCornerArrangements').createFlowers
(c('MessagingFlowerCornerArrangements').corners.BOTTOM_RIGHT,

this.props.offset));}.

bind(this),this.

state=
{elements:this.$MessagingFlowerBorder_createElements()},m;}k.prototype.


render=function(){

return (c('React').createElement('div',null,

this.state.elements.map(function(l,m){
return c('React').createElement(c('Image.react'),{key:m,style:l.style,src:l.image});})));};




k.propTypes={ChildClass:j.number};k.defaultProps={offset:0};


f.exports=k;}),null);

/** js/messaging/giftwrap/MessagingGiftWrap.react.js */






__d('MessagingGiftWrap.react',['cx','MessengerEnvironment','React','emptyFunction'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,







k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').PureComponent);j=i&&i.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.














state=
{unwrapped:false},this.


































$MessagingGiftWrap_handleClick=function(r){
r.stopPropagation();
this.setState({unwrapped:true});
this.props.onUnwrap&&this.props.onUnwrap();}.
bind(this),n;}l.prototype.render=function(){var m=c('MessengerEnvironment').messengerui;return c('React').createElement('div',{className:"_4p0m"+(this.state.unwrapped?' '+"_4p0o":'')+(m?' '+"_mxz":'')+(m?' '+"_4br2":'')+(!m?' '+"_3_om":'')+(this.props.isSticker?' '+"_52vq":''),onClick:this.$MessagingGiftWrap_handleClick,role:'presentation'},c('React').createElement('div',{className:"_4p0r"}),c('React').createElement('div',{className:"_4p0s _4p0t"}),c('React').createElement('div',{className:"_4p0s _4p0u"}));};l.propTypes={isSticker:k.bool,onUnwrap:k.func};l.defaultProps={onUnwrap:c('emptyFunction')};


f.exports=l;}),null);

/** www/__virtual__/webgraphql/MessageReactionMutationWebGraphQLMutation.js */






__d("MessageReactionMutationWebGraphQLMutation",["WebGraphQLMutationHelper"],(function a(b,c,d,e,f,g){

'use strict';



f.exports=c("WebGraphQLMutationHelper").getExports
({docID:"1491398900900362",
queryID:"254517288326467"});}),null);

/** js/mercury/clients/messenger/components/MessengerReactionsContextualDialog.react.js */






__d('MessengerReactionsContextualDialog.react',['cx','AccessibleLayer','ContextualLayerAutoFlipHorizontal','ContextualLayerHideOnScrollOut','ContextualLayerUpdateOnScroll','LayerHideOnEscape','ReactAbstractContextualDialog','ReactLayer'],(function a(b,c,d,e,f,g,h){

'use strict';











var i=c('ReactLayer').createClass
(c('ReactAbstractContextualDialog').createSpec
({addedBehaviors:[c('ContextualLayerAutoFlipHorizontal'),c('ContextualLayerHideOnScrollOut'),c('ContextualLayerUpdateOnScroll'),c('LayerHideOnEscape'),c('AccessibleLayer')],






displayName:'MessengerReactionsContextualDialog',
shouldSetARIAProperties:false,
theme:
{wrapperClassName:"_4owc"}}));




f.exports=i;}),null);

/** js/mercury/clients/messenger/MessengerReactionsUtil.js */






__d('MessengerReactionsUtil',['EmojiFormat'],(function a(b,c,d,e,f,g){

'use strict';



var h=
[[128525],
[128518],
[128558],
[128546],
[128544],
[128077],
[128078]],


i={};
h.forEach(function(j,k){
i[c('EmojiFormat').codeArrayToUnicode(j)]=k+1;});


f.exports=
{sortFunction:function j(k,l){
if(!i[k]&&!i[l]){
return 0;}else
if(!i[k]){
return 1;}else
if(!i[l])
return -1;


return i[k]-i[l];},

defaultReactions:h.map(c('EmojiFormat').codeArrayToUnicode)};}),null);

/** js/mercury/clients/shared/getThreadTypeNameFromThreadType.js */






__d('getThreadTypeNameFromThreadType',['MessagingThreadType'],(function a(b,c,d,e,f,g){

'use strict';



function h(i){
for(var j in c('MessagingThreadType'))
if(c('MessagingThreadType')[j]===i)
return j;


return '';}


f.exports=h;}),null);

/** js/mercury/clients/messenger/components/MessengerReactionsMenu.react.js */





__d('MessengerReactionsMenu.react',['cx','CurrentUser','MercuryIDs','MercuryMessages','MercuryThreads','MessengerMessageActionsTypedLogger','MessengerReactionsContextualDialog.react','MessengerTextWithEmoticons.react','MessengerReactionsUtil','MessageReactionMutationWebGraphQLMutation','React','XAsyncRequest','getThreadTypeNameFromThreadType'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;i=babelHelpers.inherits



























(k,c('React').Component);j=i&&i.prototype;function k(){var l,m;for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=j.constructor).call.apply(l,[this].concat(o)),this.







































$MessengerReactionsMenu_handleToggle=function(q){
!q&&this.props.onHide();}.
bind(this),m;}k.prototype.render=function(){var l=c('CurrentUser').getID(),m=this.props.message.reactions&&this.props.message.reactions[l];return c('React').createElement(c('MessengerReactionsContextualDialog.react'),{alignment:'center',contextRef:this.props.refProp,shown:true,onBlur:this.props.onHide,onToggle:this.$MessengerReactionsMenu_handleToggle},c('React').createElement('div',{className:"_1z8q _fy2"},c('MessengerReactionsUtil').defaultReactions.map(function(n){return c('React').createElement('span',{className:"_1z8r"+(n===m?' '+"_5-2b":''),key:n,onClick:function(){return this.$MessengerReactionsMenu_selectReaction(n);}.bind(this)},c('React').createElement(c('MessengerTextWithEmoticons.react'),{customSize:true,renderEmoticons:true,renderEmoji:true,text:n}));}.bind(this))));};k.prototype.

$MessengerReactionsMenu_selectReaction=function(l){var m=
this.props,n=m.message,o=m.entryPoint,
p=c('CurrentUser').getID(),
q=n.reactions&&n.reactions[p],
r=c('MercuryMessages').get().getServerMessageID(n.message_id),
s=c('MessageReactionMutationWebGraphQLMutation').getURI
({action:l===q?'REMOVE_REACTION':'ADD_REACTION',
message_id:r,
actor_id:p,
reaction:l}),

t=function u(v){
var w=n.other_user_fbid||n.thread_fbid,
x=c('MercuryThreads').get().getThreadMetaNow(n.thread_id),
y=x&&x.participants?
x.participants.length:
0,
z=c('getThreadTypeNameFromThreadType')
(x&&x.thread_type),

aa=n.attachments[0],
ba=new (c('MessengerMessageActionsTypedLogger'))().
setAction('reaction').
setOfflineThreadid(n.offline_threading_id).
setMid(r).
setRecipientID(c('MercuryIDs').getUserIDFromParticipantID(n.author)).
setEntryPoint(o).
setReaction(l).
setPreviousReaction(q).
setGroupSize(y).
setThreadType(z).
setThreadid(w);
if(v.errorSummary)
ba=ba.setErrorText(v.errorSummary.toString());

if(aa)
ba=ba.setMessageType(aa.attach_type);

ba.log();};

new (c('XAsyncRequest'))(s).setMethod('POST').setHandler(t).send();
this.props.onHide();};



f.exports=k;}),null);

/** js/mercury/clients/messenger/components/MessengerReactionsPrompt.react.js */





__d('MessengerReactionsPrompt.react',['cx','ix','Image.react','MessengerReactionsMenu.react','React'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k;j=babelHelpers.inherits


















(l,c('React').Component);k=j&&j.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=k.constructor).call.apply(m,[this].concat(p)),this.

state={open:false},this.










































$MessengerReactionsPrompt_openPopover=function(){
this.setState({open:true},function(){
return (this.props.onShowMenu&&this.props.onShowMenu(this.state.open));}.bind(this));}.
bind(this),this.

$MessengerReactionsPrompt_hidePopover=function(){
this.setState
({open:false},
function(){return this.props.onShowMenu&&this.props.onShowMenu(this.state.open);}.bind(this));}.

bind(this),n;}l.prototype.render=function(){if(!this.props.messageIsSelected&&!this.state.open)return null;return c('React').createElement('span',{className:(!this.props.isQuickAdd?"_5zvq":'')+(this.props.isQuickAdd?' '+"_yav":''),onClick:this.state.open?null:this.$MessengerReactionsPrompt_openPopover,ref:'button'},c('React').createElement(c('Image.react'),{src:this.props.isQuickAdd?i("278123"):this.state.open?i("277597"):i("277596")}),this.renderMenu());};l.prototype.renderMenu=function(){if(!this.state.open)return null;return c('React').createElement(c('MessengerReactionsMenu.react'),{entryPoint:'awareness_plus',message:this.props.message,onHide:this.$MessengerReactionsPrompt_hidePopover,refProp:function(){return this.refs.button;}.bind(this)});};


f.exports=l;}),null);

/** js/mercury/clients/messenger/MessengerReactions.react.js */






__d('MessengerReactions.react',['cx','Bootloader','CurrentUser','MercuryConfig','MessengerEnvironment','MessengerReactionsUtil','MessengerReactionsPrompt.react','MessengerTextWithEmoticons.react','MessengerWebViewReactionsTypedLogger','React'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,













k=c('React').PropTypes,



l='ALL',
m=c('CurrentUser').getID();i=babelHelpers.inherits








(n,c('React').Component);j=i&&i.prototype;function n(){var o,p;for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=j.constructor).call.apply(o,[this].concat(r)),this.












































































































$MessengerReactions_openDialog=function(){
var t=c('MessengerEnvironment').messengerui,u=
this.props,v=u.isFromViewer,w=u.message,x=u.participants,
y=w.reactions;

new (c('MessengerWebViewReactionsTypedLogger'))().
setEvent('open_details').
setMid(w.message_id).
setSenderID(w.author).
setEmojiGroup(l).
setEmojiGroupCount(Object.values(y).length).
log();

if(t){
c('Bootloader').loadModules
(["messengerDialogsRe","messengerReactionsDialogReact"],
function(z,aa){var ba=aa.comp;
z.showDialog(function(){
return (c('React').createElement(ba,
{isFromViewer:v,
participants:x,
message:w}));});},


'MessengerReactions.react');}else 


c('Bootloader').loadModules(["ChatReactionsDialog"],function(z){
z.show(w,x,v);},
'MessengerReactions.react');}.

bind(this),p;}n.prototype.render=function(){var o=this.props,p=o.message,q=o.participants,r=o.renderQuickAdd,s=p.reactions;if((!s||!q)&&!r)return null;var t={},u=0,v=false;Object.entries(s||{}).forEach(function(z){var aa=z[0],ba=z[1];if(typeof ba==='string'){if(aa===m)v=true;if(!t[ba])t[ba]=0;t[ba]++;u++;}});var w=Object.keys(t).sort(c('MessengerReactionsUtil').sortFunction).map(function(z,aa,ba){return c('React').createElement('span',{className:"_4kf5",style:{zIndex:ba.length-aa,marginLeft:aa===0?0:'-4px'},key:z},c('React').createElement(c('MessengerTextWithEmoticons.react'),{customSize:true,renderEmoticons:true,renderEmoji:true,text:z}));}),x=u>0?c('React').createElement('span',{className:"_4kf5"+(' '+"_4kf6")+(v?' '+"_fy2":'')},u):null,y=r&&!v?c('React').createElement('div',{className:"_aou _aov"},c('React').createElement('span',{className:"_aow"},c('React').createElement(c('MessengerReactionsPrompt.react'),{message:p,messageIsSelected:true,isQuickAdd:true}))):null;if(c('MercuryConfig').ReactionsPreview){return c('React').createElement('div',{className:"_4kf7 preview"},c('React').createElement('div',{className:"_aou",onClick:this.$MessengerReactions_openDialog,role:'button',tabIndex:'0'},w,x),y);}else return c('React').createElement('div',{className:"_4kf7"},c('React').createElement('div',{className:"_aou"},w,x),y);};n.propTypes={isFromViewer:k.bool.isRequired,message:k.object.isRequired,participants:k.object,renderQuickAdd:k.bool};


f.exports=n;}),null);

/** js/mercury/clients/messenger/MessengerDecorator.js */






__d('MessengerDecorator',['cssVar','cx','BootloadedComponent.react','CurrentUser','JSResource','MercuryAttachment','MercuryConfig','MercuryMessageActions','MercuryMessageCustomizations','MercuryTagHelper','MessageBorderType','MessageCustomizationType','MessagingFlowerBorder.react','MessagingGiftWrap.react','MessagingGiftWrapConstants','MessengerEnvironment','MessengerReactions.react','React'],(function a(b,c,d,e,f,g,h,i){

'use strict';


































var j=function r(s){
return !!(s.attachments&&s.attachments.length===1&&
s.attachments[0]&&
c('MercuryAttachment').isPhotoGroupAttachment(s.attachments[0]));},


k=function r(s){
var t=[];
s.attachments.forEach(function(u){
if(u.metadata&&u.metadata.fbid)
t.push(u.metadata.fbid.toString());});


return t;},


l=

[{name:'GiftWrap',
check:function r(s){
var t=function v(w){
return c('MercuryTagHelper').get
(w,
c('MessagingGiftWrapConstants').TAG_PREFIX)===
c('MessagingGiftWrapConstants').VALENTINES_GIFT;},


u=function v(w){
return !!c('MercuryTagHelper').get(w,
c('MessagingGiftWrapConstants').UNWRAPPED_TAG);};


return !!(c('MercuryConfig').GiftWrapViewerGK&&
s.tags&&
t(s.tags)&&
!u(s.tags));},


render:function r(s,t){

return (c('React').createElement(c('MessagingGiftWrap.react'),
{key:'giftwrap',
onUnwrap:function u(){
var v=
"2500ms",
w=parseInt
(v.substring(0,v.length-2),
10);

setTimeout
(function(){return c('MercuryMessageActions').get().unwrap(s);},
w);}}));},





getAdditionalClassNames:function r(){
return null;}},



{name:'FlowerBorder',
check:function r(s){

return (c('MercuryConfig').WWWMessengerFlowerBorderViewer&&
c('MercuryMessageCustomizations').getCustomizationValue
(s,c('MessageCustomizationType').BORDER)===
c('MessageBorderType').FLOWERS);},


render:function r(s,t){
if(c('MessengerEnvironment').messengerui)
return c('React').createElement(c('MessagingFlowerBorder.react'),{offset:-10,
key:'giftwrap:'+s.message_id});

return c('React').createElement(c('MessagingFlowerBorder.react'),{key:'giftwrap:'+s.message_id});},

getAdditionalClassNames:function r(){
if(!c('MessengerEnvironment').messengerui)
return "_337n";

return null;}},



{name:'Reactions',
check:function r(s,t){
var u=
!!(s.reactions&&
Object.keys(s.reactions).length>0),

v=
!!(c('MercuryConfig').Reactions&&u),

w=
!!(c('MercuryConfig').SendReactions&&!t&&j(s));

return v||w;},

render:function r
(s,
t,
u){


return (c('React').createElement(c('MessengerReactions.react'),
{isFromViewer:t,
key:s.message_id+'-reactions',
message:s,
renderQuickAdd:
c('MercuryConfig').SendReactions&&
j(s)&&
!t,

participants:u&&u.participants}));},



getAdditionalClassNames:function r(){
return "_5z-5";}}],




m=[],


n=

[{name:'ViewerMentioned',
check:function r(s){
return !!(c('MercuryConfig').Mentions&&
c('MercuryConfig').MentionsReply&&
s.profile_ranges&&
s.profile_ranges.some
(function(t){return t.id===c('CurrentUser').getID();}));},


render:function r
(s,
t,
u){

var v=u?
u.thread?
u.thread.custom_color:
u.threadCustomColor||u.customColor:
undefined;

return (c('React').createElement(c('BootloadedComponent.react'),
{key:'mention-reply:'+s.message_id,
bootloadPlaceholder:c('React').createElement('div',null),
bootloadLoader:c('JSResource')('MessengerReplyToMention.react').__setRef('MessengerDecorator'),
message:s,
color:v}));},



getAdditionalClassNames:function r(){
return "_aol";}}],




o=

[{name:'MontageReply',
check:function r(s){
if(!c('MercuryConfig').MontageThreadViewer)
return false;

var t=s.montage_reply_data&&
s.montage_reply_data.message_id;
return !!t;},

render:function r(s,t){
var u=s.montage_reply_data&&
s.montage_reply_data.message_id;

return (c('React').createElement(c('BootloadedComponent.react'),
{key:'montagereply:'+s.message_id,
bootloadPlaceholder:c('React').createElement('div',null),
bootloadLoader:c('JSResource')('MontageReplyDecoratorContainer.react').__setRef('MessengerDecorator'),
isFromViewer:t,
messageID:u,
replyAuthorID:s.author,
threadID:s.thread_id}));},



getAdditionalClassNames:function r(){
return null;}}],




p=

[{name:'ForwardImages',
check:function r(s){
return j(s);},

render:function r
(s,
t){


return (c('React').createElement(c('BootloadedComponent.react'),
{key:'forwardimages:'+s.message_id,
bootloadPlaceholder:c('React').createElement('div',null),
bootloadLoader:
c('MessengerEnvironment').messengerui?
c('JSResource')('MessengerPhotoForwardButton.react').__setRef('MessengerDecorator'):
c('JSResource')('ChatPhotoForwardButton.react').__setRef('MessengerDecorator'),

photoIDs:k(s),
isFromViewer:t}));},



getAdditionalClassNames:function r(){
return "_ylc";}},



{name:'ReactionPrompt',
check:function r(s){
return c('MercuryConfig').SendReactions&&!j(s);},

render:function r
(s,
t,
u){


return (c('React').createElement(c('BootloadedComponent.react'),
{key:'reactionprompt:'+s.message_id,
bootloadPlaceholder:c('React').createElement('div',null),
bootloadLoader:
c('JSResource')('MessengerReactionsPrompt.react').__setRef('MessengerDecorator'),

message:s,
messageIsSelected:u&&u.messageIsSelected,
onShowMenu:u&&u.onShowMenu}));},



getAdditionalClassNames:function r(){
return null;}},



{name:'MessageActions',
check:function r(s){
return c('MessengerEnvironment').messengerui;},

render:function r
(s,
t,
u){


return (c('React').createElement(c('BootloadedComponent.react'),
{key:'messageactions:'+s.message_id,
bootloadPlaceholder:c('React').createElement('div',null),
bootloadLoader:
c('JSResource')('MessengerMessageActions.react').__setRef('MessengerDecorator'),

message:s,
isActive:u&&u.messageIsSelected,
onShowMenu:u&&u.onShowMenu,
includeReactions:c('MercuryConfig').SendReactions&&j(s)}));},



getAdditionalClassNames:function r(){
return null;}}],






q=

{getBeforeDecorators:function r(){
return o;},


getAfterDecorators:function r(){
return l;},


getInnerDecorators:function r(){
return p;},


getAfterExternalDecorators:function r(){
return m;},


getInsideDecorators:function r(){
return n;}};



f.exports=q;}),null);

/** js/mercury/clients/messenger/MessengerHotLikePreviewEvents.js */





__d('MessengerHotLikePreviewEvents',['mixInEventEmitter'],(function a(b,c,d,e,f,g){

'use strict';



var h=
{START:'start',
STOP:'stop',
STOP_EMOJI:'stop_emoji',
POP:'pop',
REMOVE:'remove',
FINISH_ANIMATION:'finish_animation',
FINISH_EMOJI_ANIMATION:'finish_emoji_animation'};


c('mixInEventEmitter')(h,
{start:true,
stop:true,
stop_emoji:true,
pop:true,
remove:'remove',
finish_animation:'finish_animation',
finish_emoji_animation:'finish_emoji_animation'});


f.exports=h;}),null);

/** www/__virtual__/x/XStickerAssetController.js */



__d("XStickerAssetController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/stickers\/asset\/",{sticker_id:{type:"Int",required:true},image_type:{type:"Enum",defaultValue:"BestEffortImage",enumType:1}});}),

null);

/** js/mercury/clients/messenger/MessengerHotLikeUtils.js */






__d('MessengerHotLikeUtils',['EmojiLikeConstants','StickerAssetType','StickerConstants','XStickerAssetController'],(function a(b,c,d,e,f,g){

'use strict';








var h=
{SizeTimes:
{small:1000,
medium:2000,
large:3000},


getStickerIDForTime:function i(j){
var k=c('StickerConstants').HOT_LIKE_SMALL_STICKER_ID;
switch(true){
case j<this.SizeTimes.small:
k=c('StickerConstants').HOT_LIKE_SMALL_STICKER_ID;
break;
case j<this.SizeTimes.medium:
k=c('StickerConstants').HOT_LIKE_MEDIUM_STICKER_ID;
break;
case j<this.SizeTimes.large:
k=c('StickerConstants').HOT_LIKE_LARGE_STICKER_ID;
break;}

return k;},


getEmojiSizeForTime:function i(j){
var k=c('EmojiLikeConstants').size.SMALL;
if(j<this.SizeTimes.small){
k=c('EmojiLikeConstants').size.SMALL;}else
if(j<this.SizeTimes.medium){
k=c('EmojiLikeConstants').size.MEDIUM;}else
if(j<this.SizeTimes.large)
k=c('EmojiLikeConstants').size.LARGE;

return k;},


getMetadataForHotLike:function i(j){
var k=void 0;
switch(j){
case c('StickerConstants').HOT_LIKE_LARGE_STICKER_ID:
k=120;
break;
case c('StickerConstants').HOT_LIKE_MEDIUM_STICKER_ID:
k=84;
break;
case c('StickerConstants').HOT_LIKE_SMALL_STICKER_ID:
k=35;
break;
case c('EmojiLikeConstants').size.LARGE:
k=64;
break;
case c('EmojiLikeConstants').size.MEDIUM:
k=64;
break;
case c('EmojiLikeConstants').size.SMALL:
k=32;
break;}

return k?
{height:k,width:k}:
undefined;},


getPreviewURI:function i(){
return c('XStickerAssetController').getURIBuilder().
setInt('sticker_id',c('StickerConstants').HOT_LIKE_LARGE_STICKER_ID).
setEnum('image_type',c('StickerAssetType').IMAGE).
getURI().
toString();},


getURIWithID:function i(j){
return c('XStickerAssetController').getURIBuilder().
setInt('sticker_id',j).
setEnum('image_type',c('StickerAssetType').IMAGE).
getURI().
toString();},


getCustomEmojiFromThread:function i(j){
return j&&j.custom_like_icon;}};



f.exports=h;}),null);

/** js/mercury/clients/messenger/MessengerLightweightActionUtils.js */






__d('MessengerLightweightActionUtils',['MercuryAttachmentType'],(function a(b,c,d,e,f,g){

'use strict';





function h(k){

return !!(k&&
k.attach_type===c('MercuryAttachmentType').SHARE&&
k.share&&
k.share.target&&
k.share.target.lwa_type);}



function i(k){
var l=k.attachments;

return !!(l&&
l.length===1&&
h(l[0]));}



function j(k){
return k.attachments[0].share.title;}


f.exports=
{isLWAMessage:i,
isLWAAttachment:h,
getCollapsedLWAText:j};}),null);

/** js/mercury/clients/messenger/components/MessengerInnerDecorators.react.js */





__d('MessengerInnerDecorators.react',['cx','MessengerDecorator','React'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;i=babelHelpers.inherits

















(k,c('React').Component);j=i&&i.prototype;function k(){var l,m;for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=j.constructor).call.apply(l,[this].concat(o)),this.

state={shown:false},this.























$MessengerInnerDecorators_handleShowMenu=function(q){
this.setState({shown:q});}.
bind(this),m;}k.prototype.render=function(){var l=c('MessengerDecorator').getInnerDecorators().map(function(m){if(m.check(this.props.message))return m.render(this.props.message,this.props.isFromViewer,babelHelpers['extends']({},this.props.messageProps,{messageIsSelected:this.props.hovered||this.state.shown,onShowMenu:this.$MessengerInnerDecorators_handleShowMenu}));return null;}.bind(this)).filter(Boolean);return c('React').createElement('span',{className:"_40fu"},c('React').createElement('span',{className:"_2u_d"},l));};


f.exports=k;}),null);

/** js/mercury/clients/messenger/components/MessengerQuickCam/MessengerQuickCamDispatcher.js */






__d('MessengerQuickCamDispatcher',['ExplicitRegistrationReactDispatcher'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits



(j,c('ExplicitRegistrationReactDispatcher'));i=h&&h.prototype;function j(){h.apply(this,arguments);}



f.exports=new j({strict:false});}),null);

/** js/mercury/clients/messenger/components/MessengerQuickCam/MessengerQuickCamActions.js */






__d('MessengerQuickCamActions',['MessengerQuickCamDispatcher','keyMirror'],(function a(b,c,d,e,f,g){

'use strict';







var h=c('keyMirror')
({CLOSE:null,
COUNT_DOWN_TIMER:null,
COUNT_DOWN_TIMER_START:null,
PROCESS_RECORDING:null,
REGISTER_QUICKCAM:null,
REMOVE_ALL_LISTENERS:null,
REQUEST_USER_MEDIA:null,
RETAKE:null,
SEND_PHOTO:null,
SEND_VIDEO:null,
SET_MEDIA:null,
SHUTTER_OFF:null,
STOP_VIDEO:null,
TAKE_VIDEO:null,
UPDATE_PROGRESS:null,
UPLOAD_COMPLETE:null,
UPLOAD_ERROR:null,
USER_MEDIA_ERROR:null}),


i=
{Types:h,

close:function j(){
c('MessengerQuickCamDispatcher').dispatch
({type:h.CLOSE});},



countDownTimer:function j(){
c('MessengerQuickCamDispatcher').dispatch
({type:h.COUNT_DOWN_TIMER});},



countDownTimerStart:function j(){
c('MessengerQuickCamDispatcher').dispatch
({type:h.COUNT_DOWN_TIMER_START});},



processRecording:function j(k){
c('MessengerQuickCamDispatcher').dispatch
({type:h.PROCESS_RECORDING,
videoBlob:k});},



registerQuickCam:function j(k,l){
c('MessengerQuickCamDispatcher').dispatch
({type:h.REGISTER_QUICKCAM,
source:k,
quickcam:l});},



requestUserMedia:function j(k,l){
c('MessengerQuickCamDispatcher').dispatch
({type:h.REQUEST_USER_MEDIA,
viewer:k,
threadID:l});},



retake:function j(){
c('MessengerQuickCamDispatcher').dispatch
({type:h.RETAKE});},



sendPhoto:function j(){
c('MessengerQuickCamDispatcher').dispatch
({type:h.SEND_PHOTO});},



sendVideo:function j(){
c('MessengerQuickCamDispatcher').dispatch
({type:h.SEND_VIDEO});},



setMedia:function j(k,l){
c('MessengerQuickCamDispatcher').dispatch
({type:h.SET_MEDIA,
videoSrc:k,
videoStream:l});},



stopVideo:function j(){
c('MessengerQuickCamDispatcher').dispatch
({type:h.STOP_VIDEO});},



shutterOff:function j(){
c('MessengerQuickCamDispatcher').dispatch
({type:h.SHUTTER_OFF});},



takeVideo:function j(){
c('MessengerQuickCamDispatcher').dispatch
({type:h.TAKE_VIDEO});},



updateProgress:function j(){
c('MessengerQuickCamDispatcher').dispatch
({type:h.UPDATE_PROGRESS});},



uploadError:function j(k){
c('MessengerQuickCamDispatcher').dispatch
({type:h.UPLOAD_ERROR,
error:k});},



uploadComplete:function j(k){
c('MessengerQuickCamDispatcher').dispatch
({type:h.UPLOAD_COMPLETE,
data:k});},



userMediaError:function j(){
c('MessengerQuickCamDispatcher').dispatch
({type:h.USER_MEDIA_ERROR});}};




f.exports=i;}),null);

/** www/__virtual__/x/XSetNUXSeenController.js */



__d("XSetNUXSeenController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/chat\/nux_seen\/",{setting_name:{type:"String"}});}),

null);

/** js/messaging/MessagingShowNUX.react.js */







__d('MessagingShowNUX.react',['AsyncRequest','ChatConfig','React','XSetNUXSeenController','XUIAmbientNUX.react'],(function a(b,c,d,e,f,g){

'use strict';var h,i,







j=c('React').PropTypes;h=babelHelpers.inherits





(k,c('React').PureComponent);i=h&&h.prototype;function k(){var l,m;for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.

















state=
{showNUX:!c('ChatConfig').get(this.props.settingName)},this.















$MessagingShowNUX_onClose=function(){
if(!this.state.showNUX)
return;

c('ChatConfig').set(this.props.settingName,true);
new (c('AsyncRequest'))(c('XSetNUXSeenController').getURIBuilder().getURI()).
setData({setting_name:this.props.settingName}).
send();
this.setState({showNUX:false});
this.props.onHidden();}.
bind(this),m;}k.prototype.render=function(){return c('React').createElement(c('XUIAmbientNUX.react'),{contextRef:this.props.contextRef,onCloseButtonClick:this.$MessagingShowNUX_onClose,position:'left',width:'auto',shown:this.state.showNUX&&this.props.shown},this.props.children);};k.propTypes={children:j.any,contextRef:j.func.isRequired,onHidden:j.func.isRequired,settingName:j.string.isRequired,shown:j.bool.isRequired};


f.exports=k;}),null);

/** js/mercury/clients/messenger/components/MessengerQuickCam/MessengerQuickCamOrigins.js */






__d('MessengerQuickCamOrigins',[],(function a(b,c,d,e,f,g){

'use strict';

var h=
{CHAT_TAB:'chat tab',
MESSENGER:'messenger',

getValues:function i(){

return [h.CHAT_TAB,
h.MESSENGER];}};




f.exports=h;}),null);

/** js/mercury/clients/messenger/components/MessengerQuickCam/MessengerQuickCamButtonHTML5.react.js */







__d('MessengerQuickCamButtonHTML5.react',['cx','fbt','BootloadedComponent.react','ChatConfig','JSResource','Link.react','MessagingShowNUX.react','MessengerDialog.react','MessengerQuickCamActions','MessengerQuickCamOrigins','MessengerSpinner.react','React','XUIDialog.react','XUISpinner.react','joinClasses'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,


















l=c('React').PropTypes,

m='seen_cam_button_nux';j=babelHelpers.inherits








(n,c('React').Component);k=j&&j.prototype;


















function n(o){
k.constructor.call(this,o);this.































































































































$MessengerQuickCamButtonHTML5_hideNUX=function(){
this.setState({nuxOpen:false,nuxShown:true,dialogOpen:true});}.
bind(this);this.

$MessengerQuickCamButtonHTML5_hideDialog=function(){
if(this.state.dialogOpen)
this.setState
({dialogOpen:false});}.


bind(this);this.

$MessengerQuickCamButtonHTML5_handleToggle=function(p){
if(!p){
this.$MessengerQuickCamButtonHTML5_hideDialog();}else 

c('MessengerQuickCamActions').requestUserMedia
(this.props.viewer,
this.props.threadID);}.


bind(this);this.

$MessengerQuickCamButtonHTML5_handleClick=function(p){
if(!this.state.nuxShown){
this.setState({nuxOpen:true});
return;}

if(this.state.dialogOpen)
return;

p.stopPropagation();
this.setState
({dialogOpen:!this.state.dialogOpen});}.

bind(this);this.state={dialogOpen:false,nuxShown:!!c('ChatConfig').get(m),nuxOpen:false};}n.prototype.render=function(){var o=this.props.textChild;return c('React').createElement(c('Link.react'),{className:c('joinClasses')(this.props.className,"_30yy"),onClick:this.$MessengerQuickCamButtonHTML5_handleClick,ref:'photoButton',role:'button',title:i._(["Take a picture using quick cam","433a9d14b805f24ef78e50419a78a226"])},!!o&&o,this.$MessengerQuickCamButtonHTML5_renderQuickCamDialog());};n.prototype.$MessengerQuickCamButtonHTML5_renderQuickCamDialog=function(){if(!this.state.nuxShown)return c('React').createElement(c('MessagingShowNUX.react'),{contextRef:function(){return this.refs.photoButton;}.bind(this),settingName:m,shown:this.state.nuxOpen,onHidden:this.$MessengerQuickCamButtonHTML5_hideNUX,ref:'camNUX'},i._(["Send photos and videos from your computer's camera.","e9f8d6f3b6d0f9b77bddb2d9abecc316"]));return this.props.location===c('MessengerQuickCamOrigins').MESSENGER?this.$MessengerQuickCamButtonHTML5_renderQuickCamDialogMessenger():this.$MessengerQuickCamButtonHTML5_renderQuickCamDialogChatTab();};n.prototype.$MessengerQuickCamButtonHTML5_renderQuickCamDialogMessenger=function(){var o=window.innerWidth/3;return c('React').createElement(c('MessengerDialog.react'),{overflow:'hidden',contextRef:function(){return this.refs.photoButton;}.bind(this),shown:this.state.dialogOpen,onBlur:this.$MessengerQuickCamButtonHTML5_hideDialog,onToggle:this.$MessengerQuickCamButtonHTML5_handleToggle,width:400>o?400:o},c('React').createElement(c('BootloadedComponent.react'),{bootloadPlaceholder:c('React').createElement('div',{style:{padding:'30px',textAlign:'center'}},c('React').createElement(c('MessengerSpinner.react'),null)),bootloadLoader:c('JSResource')('MessengerQuickCamDialog.react').__setRef('MessengerQuickCamButtonHTML5.react'),location:this.props.location,onShown:function(p){this.$MessengerQuickCamButtonHTML5_handleToggle(true);if(this.props.onDialogShown)this.props.onDialogShown(p);}.bind(this),onHidden:this.$MessengerQuickCamButtonHTML5_hideDialog,onEscKeyDown:this.$MessengerQuickCamButtonHTML5_hideDialog,shown:this.state.dialogOpen,threadID:this.props.threadID,viewer:this.props.viewer}));};n.prototype.$MessengerQuickCamButtonHTML5_renderQuickCamDialogChatTab=function(){var o=window.innerWidth/3;return c('React').createElement(c('XUIDialog.react'),{overflow:'hidden',contextRef:function(){return this.refs.photoButton;}.bind(this),shown:this.state.dialogOpen,onBlur:this.$MessengerQuickCamButtonHTML5_hideDialog,hideOnEscape:true,onToggle:this.$MessengerQuickCamButtonHTML5_handleToggle,width:400>o?400:o},c('React').createElement(c('BootloadedComponent.react'),{bootloadPlaceholder:c('React').createElement('div',{style:{padding:'30px',textAlign:'center'}},c('React').createElement(c('XUISpinner.react'),null)),bootloadLoader:c('JSResource')('MessengerQuickCamDialog.react').__setRef('MessengerQuickCamButtonHTML5.react'),location:this.props.location,onShown:function(p){this.$MessengerQuickCamButtonHTML5_handleToggle(true);if(this.props.onDialogShown)this.props.onDialogShown(p);}.bind(this),onHidden:this.$MessengerQuickCamButtonHTML5_hideDialog,onEscKeyDown:this.$MessengerQuickCamButtonHTML5_hideDialog,shown:this.state.dialogOpen,threadID:this.props.threadID,viewer:this.props.viewer}));};n.propTypes={className:l.string.isRequired,location:l.oneOf(c('MessengerQuickCamOrigins').getValues()).isRequired,textChild:l.node,threadID:l.string.isRequired,viewer:l.string.isRequired};


f.exports=n;}),null);

/** js/mercury/clients/messenger/components/core/MessengerContextualDialog.react.js */






__d('MessengerContextualDialog.react',['cx','AccessibleLayer','ContextualLayerAutoFlipHorizontal','ContextualLayerUpdateOnScroll','LayerHideOnEscape','ReactAbstractContextualDialog','ReactLayer'],(function a(b,c,d,e,f,g,h){

'use strict';










var i=12,

j=c('ReactLayer').createClass
(c('ReactAbstractContextualDialog').createSpec
({addedBehaviors:[c('ContextualLayerAutoFlipHorizontal'),c('ContextualLayerUpdateOnScroll'),c('LayerHideOnEscape'),c('AccessibleLayer')],





displayName:'MessengerContextualDialog',
shouldSetARIAProperties:false,
theme:
{wrapperClassName:"_1r_9",

arrowDimensions:
{offset:i,
length:16}}}));





f.exports=j;}),null);

/** js/mercury/clients/messenger/components/group_polling/MessengerGroupPollingButton.react.js */







__d('MessengerGroupPollingButton.react',['cssVar','cx','fbt','BootloadOnRender.react','JSResource','LazyComponent.react','Link.react','MessengerContextualDialog.react','MessengerEnvironment','MessengerSpinner.react','React'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';var k,l,














m=c('React').PropTypes;k=babelHelpers.inherits










(n,c('React').Component);l=k&&k.prototype;function n(){var o,p;for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=l.constructor).call.apply(o,[this].concat(r)),this.


state=
{flyoutOpen:false},this.







$MessengerGroupPollingButton_clickGuard=false,this.




















































$MessengerGroupPollingButton_handleContextualDialogToggle=function(t){
this.setState({flyoutOpen:t});}.
bind(this),this.

$MessengerGroupPollingButton_hideFlyout=function(){
this.setState({flyoutOpen:false});}.
bind(this),this.

$MessengerGroupPollingButton_handleMouseDown=function(t){
this.$MessengerGroupPollingButton_clickGuard=this.state.flyoutOpen;}.
bind(this),this.

$MessengerGroupPollingButton_handleClick=function(t){
t.stopPropagation();
if(this.state.flyoutOpen||this.$MessengerGroupPollingButton_clickGuard)
return;

this.setState({flyoutOpen:!this.state.flyoutOpen});}.
bind(this),p;}n.prototype.render=function(){var o=this.props.customColor||"#0084ff",p=c('MessengerEnvironment').messengerui,q=null;if(this.state.flyoutOpen)q=c('React').createElement(c('MessengerContextualDialog.react'),{contextRef:function(){return this.refs.groupPollingButton;}.bind(this),shown:this.state.flyoutOpen,onToggle:this.$MessengerGroupPollingButton_handleContextualDialogToggle,onBlur:this.$MessengerGroupPollingButton_hideFlyout},c('React').createElement(c('BootloadOnRender.react'),{component:c('React').createElement(c('LazyComponent.react'),{customColor:o,threadFBID:this.props.threadFBID,onSubmitHandler:this.$MessengerGroupPollingButton_hideFlyout}),loader:c('JSResource')('MessengerGroupPollingCreatePollFlyout.react').__setRef('MessengerGroupPollingButton.react'),placeholder:c('React').createElement('div',{style:{padding:'20px',textAlign:'center',width:'250px'}},c('React').createElement(c('MessengerSpinner.react'),{color:'grey'}))}));return c('React').createElement(c('Link.react'),{className:(p?"_39bk":'')+(p?' '+"_2o-b":'')+(p&&this.state.flyoutOpen?' '+"_5jhb":'')+(p?' '+"_30yy":'')+(!p?' '+"_6gb":'')+(!p?' '+"_4tjk":''),onClick:this.$MessengerGroupPollingButton_handleClick,onMouseDown:this.$MessengerGroupPollingButton_handleMouseDown,ref:'groupPollingButton',role:'button',title:j._(["Create a poll","2792e1f494eca2dab891d402edbf2d87"])},q);};n.propTypes={customColor:m.string,threadFBID:m.string.isRequired};


f.exports=n;}),null);

/** js/mercury/clients/messenger/components/hotlike/MessengerHotLikeOutlineSVG.react.js */






__d('MessengerHotLikeOutlineSVG.react',['cssVar','fbt','React','MercuryShareAttachmentRenderLocations','WorkGKs','uniqueID','UserAgent'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,









l=c('React').PropTypes,
m='transparent',


n=i._(["Thumbs Up Sign","b2d61027129b3489f80dde0fb5a70eb2"]);j=babelHelpers.inherits







(o,c('React').Component);k=j&&j.prototype;function o(){var p,q;for(var r=arguments.length,s=Array(r),t=0;t<r;t++)s[t]=arguments[t];return q=(p=k.constructor).call.apply(p,[this].concat(s)),this.












state=
{titleId:c('uniqueID')()},q;}o.prototype.


render=function(){
var p=this.props.color||
(c('WorkGKs').workplace_www_chat_branding?
"#1479fb":
"#0084ff"),
q=c('UserAgent').isBrowser('Safari')?'0 0 40.16 42.24':
'-1 -1 40.16 42.24',
r=
{height:this.props.height||'85%'};


if(this.props.location!==c('MercuryShareAttachmentRenderLocations').CHAT&&
this.props.location!==c('MercuryShareAttachmentRenderLocations').PAGES_INBOX)

r.width='66%';



return (c('React').createElement('svg',
{'aria-labelledby':this.state.titleId,
version:'1.1',
viewBox:q,
preserveAspectRatio:'xMinYMax meet',
style:r},
c('React').createElement('title',{id:this.state.titleId},n),
c('React').createElement('path',
{d:'M935.36,1582.44a0,0,0,0,0,0,.06,3.59,3.59,0,0,1-.72,6.53,0,0,0,0,0,0,0,3.56,3.56,0,0,1,.71,2.13,3.6,3.6,0,0,1-3,3.54, 0,0,0,0,0,0,.05,3.56,3.56,0,0,1,.38,1.61,3.61,3.61,0,0,1-3.42,3.6H910v-19.6l5.27-7.9a4,4,0,0,0,.66-2.31l-0.1-4c-0.22-2.4-.09-2.06, 1.13-2.37,2-.51,7.16,1.59,5.13,12.17h11.06A3.59,3.59,0,0,1,935.36,1582.44ZM899,1581h7v22h-7v-22Z',


transform:'translate(-898.5 -1563.26)',
fill:m,
fillRule:'evenodd',
stroke:p,
strokeLinecap:'round',
strokeWidth:'5%'})));};



o.propTypes={color:l.string,height:l.string,location:l.string};


f.exports=o;}),null);

/** js/mercury/clients/messenger/components/hotlike/MessengerHotLikeButton.react.js */







__d('MessengerHotLikeButton.react',['cx','fbt','EmojiLikeConstants','Image.react','ImmutableObject','Keys','KeyStatus','Link.react','MercuryMessageObject','MercuryTriodeSourceUtil','MessengerEnvironment','MessengerHotLikePreviewEvents','MessengerHotLikeOutlineSVG.react','MessengerHotLikeUtils','MessengerSupportedEmojiUtils','React','StickerConstants','clearTimeout','ifRequired','joinClasses','setIntervalAcrossTransitions','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,







l=c('MercuryMessageObject').get(),

















m=c('React').PropTypes;j=babelHelpers.inherits

(n,c('React').PureComponent);k=j&&j.prototype;function n(){var o,p;for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=k.constructor).call.apply(o,[this].concat(r)),this.



























$MessengerHotLikeButton_checkHotLikeBootstrapped=null,this.
$MessengerHotLikeButton_popTimeout=null,this.
$MessengerHotLikeButton_pressedSince=null,this.
$MessengerHotLikeButton_subscription=null,this.





























































































$MessengerHotLikeButton_handleMouseDown=function(t){
if(this.props.disabled||this.$MessengerHotLikeButton_pressedSince){
t.preventDefault();
t.stopPropagation();}

if(this.props.disabled||t.button!==0)
return;

this.props.onMouseDown&&this.props.onMouseDown();
this.$MessengerHotLikeButton_pressedSince=Date.now();
this.$MessengerHotLikeButton_informPreviewStart();
this.$MessengerHotLikeButton_preparePop();}.
bind(this),this.

$MessengerHotLikeButton_handleMouseUp=function(){
if(!(this.props.threadID&&this.$MessengerHotLikeButton_pressedSince))
return;

this.$MessengerHotLikeButton_pressedSince=0;
this.$MessengerHotLikeButton_cancelPop();
this.$MessengerHotLikeButton_informPreviewStop();}.
bind(this),this.




































































$MessengerHotLikeButton_informPreviewPop=function(){
if(!this.props.threadID)
return;

c('MessengerHotLikePreviewEvents').emit
(c('MessengerHotLikePreviewEvents').POP,
this.props.threadID);}.

bind(this),this.
































$MessengerHotLikeButton_cancelSend=function(){
if(this.$MessengerHotLikeButton_pressedSince){
this.$MessengerHotLikeButton_pressedSince=0;
this.$MessengerHotLikeButton_cancelPop();
this.$MessengerHotLikeButton_informPreviewPop();}}.

bind(this),this.





$MessengerHotLikeButton_handleClickEvent=function(t){
t.stopPropagation();
if(this.props.disabled)
return;

if(c('KeyStatus').getKeyDownCode()===c('Keys').RETURN||
!this.props.threadID){
var u=this.props.sendCustomLike;
if(this.props.customLike&&u){
u
(this.props.customLike,
c('MessengerHotLikeUtils').getEmojiSizeForTime(1));}else 


this.props.sendSticker
(c('MessengerHotLikeUtils').getStickerIDForTime(1));}}.



bind(this),p;}n.prototype.componentDidMount=function(){this.$MessengerHotLikeButton_subscription=c('MessengerHotLikePreviewEvents').addListener(c('MessengerHotLikePreviewEvents').FINISH_ANIMATION,function(o,p,q){if(o===this.props.threadID)if(q&&this.props.customLike&&this.props.sendCustomLike){this.props.sendCustomLike(this.props.customLike,q,c('EmojiLikeConstants').source.HOT_LIKE);}else this.props.sendSticker(p);}.bind(this));};n.prototype.componentWillUnmount=function(){this.$MessengerHotLikeButton_subscription&&this.$MessengerHotLikeButton_subscription.remove();};n.prototype.render=function(){var o=null,p={};if(this.props.customLike&&this.props.customLike.emoji){var q=this.props.customLike.emoji,r=c('MessengerSupportedEmojiUtils').getNewEmojiData(q,c('EmojiLikeConstants').size.SMALL),s=this.props.renderSize?this.props.renderSize:16;p.background='none';o=c('React').createElement(c('Image.react'),{src:r&&r.url,style:{padding:s==16?0:3,display:'block',height:s,width:s}});}else if(this.props.CustomRenderer){var t=this.props.CustomRenderer;o=c('React').createElement(t,{color:this.props.customColor,location:this.props.location,renderSize:this.props.renderSize});}else if(this.props.customColor)o=c('React').createElement(c('MessengerHotLikeOutlineSVG.react'),{color:this.props.customColor,location:this.props.location});var u=i._(["Send a Like","5991edae3a1d8a293415621a0648446a"]);return c('React').createElement(c('Link.react'),{'aria-label':u,className:c('joinClasses')(this.props.customColor||this.props.CustomRenderer?"_5j_u":'',this.props.className),disabled:this.props.disabled,href:'#',onClick:this.$MessengerHotLikeButton_handleClickEvent,onDragStart:function v(w){return w.preventDefault();},onMouseDown:this.$MessengerHotLikeButton_handleMouseDown,onMouseLeave:this.$MessengerHotLikeButton_cancelSend,onMouseUp:this.$MessengerHotLikeButton_handleMouseUp,role:'button',style:p,title:u},o);};n.prototype.$MessengerHotLikeButton_informPreviewStart=function(){if(!this.props.threadID)return;c('MessengerHotLikePreviewEvents').emit(c('MessengerHotLikePreviewEvents').START,this.$MessengerHotLikeButton_getFakeMessage(),this.props.threadID);};n.prototype.$MessengerHotLikeButton_informPreviewStop=function(){if(!this.props.threadID)return;if(!c('MessengerEnvironment').messengerui){c('ifRequired')('MessengerHotLikePreview.react',function(){c('MessengerHotLikePreviewEvents').emit(c('MessengerHotLikePreviewEvents').STOP,this.props.threadID);}.bind(this),function(){if(this.$MessengerHotLikeButton_checkHotLikeBootstrapped!==null)return;this.$MessengerHotLikeButton_checkHotLikeBootstrapped=c('setIntervalAcrossTransitions')(function(){c('ifRequired')('MessengerHotLikePreview.react',function(){if(this.$MessengerHotLikeButton_checkHotLikeBootstrapped!==null){clearInterval(this.$MessengerHotLikeButton_checkHotLikeBootstrapped);this.$MessengerHotLikeButton_checkHotLikeBootstrapped=null;}c('MessengerHotLikePreviewEvents').emit(c('MessengerHotLikePreviewEvents').STOP,this.props.threadID);}.bind(this));}.bind(this),100);}.bind(this));}else c('MessengerHotLikePreviewEvents').emit(c('MessengerHotLikePreviewEvents').STOP,this.props.threadID);};n.prototype.$MessengerHotLikeButton_getFakeMessage=function(){var o=this.props.threadID;if(!o)return null;var p=l.constructStickerMessageObject(c('StickerConstants').HOT_LIKE_SMALL_STICKER_ID,c('MercuryTriodeSourceUtil').getMercuryTriodeSource(),o);l.normalizeNewMessage(p);p.is_like_preview=true;p.like_preview_since=this.$MessengerHotLikeButton_pressedSince;p.customLike=this.props.customLike&&this.props.customLike.emoji?this.props.customLike:null;p.body='';return new (c('ImmutableObject'))(p);};n.prototype.$MessengerHotLikeButton_preparePop=function(){this.$MessengerHotLikeButton_cancelPop();this.$MessengerHotLikeButton_popTimeout=c('setTimeoutAcrossTransitions')(this.$MessengerHotLikeButton_informPreviewPop,c('MessengerHotLikeUtils').SizeTimes.large);};n.prototype.$MessengerHotLikeButton_cancelPop=function(){c('clearTimeout')(this.$MessengerHotLikeButton_popTimeout);};n.propTypes={CustomRenderer:m.func,onMouseDown:m.func,customLike:m.object,customColor:m.string,location:m.string,sendSticker:m.func.isRequired,sendCustomLike:m.func,threadID:m.string,disabled:m.bool,renderSize:m.number};


f.exports=n;}),null);

/** js/mercury/clients/messenger/components/instant_games/MessengerGamesButton.react.js */






__d('MessengerGamesButton.react',['cx','fbt','JSResource','MessengerEnvironment','Link.react','React','MessengerContextualDialog.react','MessengerSpinner.react','BootloadOnRender.react','LazyComponent.react','joinClasses'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,














l=c('React').PropTypes,





m=
c('React').createElement('div',{style:{padding:'30px',textAlign:'center'}},
c('React').createElement(c('MessengerSpinner.react'),{color:'grey'}));j=babelHelpers.inherits


(n,c('React').Component);k=j&&j.prototype;function n(){var o,p;for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=k.constructor).call.apply(o,[this].concat(r)),this.










state={flyoutOpen:false},this.

$MessengerGamesButton_clickGuard=false,this.

















































$MessengerGamesButton_handleContextualDialogToggle=function(t){
this.setState({flyoutOpen:t});}.
bind(this),this.

$MessengerGamesButton_hideFlyout=function(){
this.setState({flyoutOpen:false});}.
bind(this),this.

$MessengerGamesButton_handleMouseDown=function(t){
this.$MessengerGamesButton_clickGuard=this.state.flyoutOpen;}.
bind(this),this.

$MessengerGamesButton_handleClick=function(t){
t.stopPropagation();
if(this.state.flyoutOpen||this.$MessengerGamesButton_clickGuard)
return;

this.setState({flyoutOpen:!this.state.flyoutOpen});}.
bind(this),p;}n.prototype.render=function(){var o=c('MessengerEnvironment').messengerui,p=(o?"_4ce_":'')+(o&&this.state.flyoutOpen?' '+"_5jhb":'')+(o?' '+"_39bk":'')+(o?' '+"_30yy":'')+(!o?' '+"_6gb":'')+(!o?' '+"_4cf0":''),q=null;if(this.state.flyoutOpen)q=c('React').createElement(c('MessengerContextualDialog.react'),{alignment:o?'right':'left',contextRef:function(){return this.refs.gamesButton;}.bind(this),shown:this.state.flyoutOpen,onToggle:this.$MessengerGamesButton_handleContextualDialogToggle,onBlur:this.$MessengerGamesButton_hideFlyout},c('React').createElement(c('BootloadOnRender.react'),{component:c('React').createElement(c('LazyComponent.react'),{placeholder:m,threadFBID:this.props.threadFBID}),loader:c('JSResource')('MessengerGamesFlyout.react').__setRef('MessengerGamesButton.react'),placeholder:m}));return c('React').createElement(c('Link.react'),{className:c('joinClasses')(this.props.className,p),onClick:this.$MessengerGamesButton_handleClick,onMouseDown:this.$MessengerGamesButton_handleMouseDown,ref:'gamesButton',role:'button',title:i._(["Play a game","17917680c26e03e86ec6e77ff8288cbb"])},q);};n.propTypes={className:l.string,threadFBID:l.string.isRequired};


f.exports=n;}),null);

/** www/__virtual__/webgraphql/MessengerBotComposerWebGraphQLQuery.js */






__d("MessengerBotComposerWebGraphQLQuery",["WebGraphQLQueryHelper"],(function a(b,c,d,e,f,g){

'use strict';



f.exports=c("WebGraphQLQueryHelper").getExports
({docID:"1193572474099061",
queryID:"1132183563559860"});}),null);

/** www/__virtual__/x/XMessengerBotsMenuController.js */



__d("XMessengerBotsMenuController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/messenger\/commerce\/bots\/menu\/",{page_id:{type:"String",required:true}});}),

null);

/** js/mercury/clients/messenger/stores/MessengerBotMenuDataFetcher.js */






__d('MessengerBotMenuDataFetcher',['AsyncRequest','Cache','MessengerBotComposerWebGraphQLQuery','MNCommercePageSetting','XMessengerBotsMenuController'],(function a(b,c,d,e,f,g){

'use strict';











function h(){
this.$MessengerBotMenuDataFetcher_cache=new (c('Cache'))();
this.$MessengerBotMenuDataFetcher_visibilityCache=new (c('Cache'))();}
h.prototype.

getMenuItems=
function(i,
j,
k){

if(this.$MessengerBotMenuDataFetcher_cache.has(i)){
j(this.$MessengerBotMenuDataFetcher_cache.get(i));
return;}


var l=c('XMessengerBotsMenuController').getURIBuilder().
setString('page_id',i).
getURI();

new (c('AsyncRequest'))().
setURI(l).
setHandler(function(m){
var n=m.payload.menu;
this.$MessengerBotMenuDataFetcher_cache.set(i,n);
j(n);}.
bind(this)).
setErrorHandler(function(m){
k();}).

send();};
h.prototype.

getHasMenu=
function(i,
j,
k){

if(!this.$MessengerBotMenuDataFetcher_visibilityCache.has(i)){
var l=c('MessengerBotComposerWebGraphQLQuery').getURI
({node_id:i});


new (c('AsyncRequest'))().
setURI(l).
setHandler(function(n){
var o=n.payload.data.node,
p=o.commerce_page_settings||[],
q=p.indexOf
(c('MNCommercePageSetting').STRUCTURED_MENU_ENABLED)!==
-1;
this.$MessengerBotMenuDataFetcher_visibilityCache.set(i,q);
j(q);}.
bind(this)).
setErrorHandler(function(n){
this.$MessengerBotMenuDataFetcher_visibilityCache.set(i,false);
k();}.
bind(this)).
send();}


var m=this.$MessengerBotMenuDataFetcher_visibilityCache.get(i);
m=m?m:false;

j(m);







return m;};



f.exports=new h();}),null);

/** js/mercury/clients/messenger/components/messenger_commerce/MessengerBotMenuButton.react.js */






__d('MessengerBotMenuButton.react',['BootloadOnRender.react','ChatFlyoutPlaceholder.react','JSResource','LazyComponent.react','Link.react','MessengerBotMenuDataFetcher','MessengerBotsWebTypedLogger','MessengerContextualDialog.react','MessengerEnvironment','MNBotsLoggerEvents','React','XUIContextualDialog.react'],(function a(b,c,d,e,f,g){

'use strict';var h,i,














j=c('React').PropTypes,

k=302,
l=280;h=babelHelpers.inherits







(m,c('React').Component);i=h&&h.prototype;function m(){var n,o;for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=i.constructor).call.apply(n,[this].concat(q)),this.
$MessengerBotMenuButton_clickGuard=false,this.








state=
{flyoutOpen:false,
isLoading:false,
menuItems:null},this.





























$MessengerBotMenuButton_hideFlyout=function(){
this.setState({flyoutOpen:false});}.
bind(this),this.

$MessengerBotMenuButton_handleBeforeHide=function(){
if(this.state.flyoutOpen)
this.$MessengerBotMenuButton_hideFlyout();}.

bind(this),this.

$MessengerBotMenuButton_handleMouseDown=function(){
this.$MessengerBotMenuButton_clickGuard=this.state.flyoutOpen;}.
bind(this),this.

$MessengerBotMenuButton_handleClick=function(event){
event.stopPropagation();
if(this.state.flyoutOpen||this.$MessengerBotMenuButton_clickGuard)
return;


if(this.state.menuItems===null){
this.setState({isLoading:true});
this.$MessengerBotMenuButton_fetchMenuData();}

this.setState({flyoutOpen:!this.state.flyoutOpen});}.
bind(this),o;}m.prototype.componentWillUnmount=function(){if(this.state.flyoutOpen)this.$MessengerBotMenuButton_hideFlyout();};m.prototype.render=function(){new (c('MessengerBotsWebTypedLogger'))().setEvent(c('MNBotsLoggerEvents').BOT_COMPOSER_MENU_ICON_DISPLAYED).setPageID(this.props.pageID).log();return c('React').createElement('span',null,c('React').createElement(c('Link.react'),{className:this.props.className,href:'#',onClick:this.$MessengerBotMenuButton_handleClick,onMouseDown:this.$MessengerBotMenuButton_handleMouseDown,role:'button',ref:'link'}),this.$MessengerBotMenuButton_renderFlyout());};m.prototype.

$MessengerBotMenuButton_renderFlyout=function(){
if(!this.state.flyoutOpen)
return null;


var n=c('MessengerEnvironment').messengerui,
o=n?k:l,
p=
n?c('MessengerContextualDialog.react'):c('XUIContextualDialog.react');

return (c('React').createElement(p,babelHelpers['extends']
({alignment:this.props.flyoutAlignment,
width:o,
position:'above',
contextRef:function(){return this.refs.link;}.bind(this),
onBeforeHide:this.$MessengerBotMenuButton_handleBeforeHide,
onBlur:this.$MessengerBotMenuButton_hideFlyout,
shown:this.state.flyoutOpen},
this.props,
{key:'contextualDialog'}),
c('React').createElement(c('BootloadOnRender.react'),
{component:
c('React').createElement(c('LazyComponent.react'),
{onEscKeyDown:this.$MessengerBotMenuButton_hideFlyout,
shown:this.state.flyoutOpen,
isLoading:this.state.isLoading,
menuItems:this.state.menuItems,
pageID:this.props.pageID,
threadID:this.props.threadID,
onClick:this.$MessengerBotMenuButton_hideFlyout}),


loader:c('JSResource')('MessengerBotMenuDialog.react').__setRef('MessengerBotMenuButton.react'),
placeholder:c('React').createElement(c('ChatFlyoutPlaceholder.react'),null)})));};



m.prototype.

$MessengerBotMenuButton_fetchMenuData=function(){
c('MessengerBotMenuDataFetcher').getMenuItems
(this.props.pageID,
function(n){
this.setState
({menuItems:n,
isLoading:false});}.

bind(this),
function(){



this.setState
({menuItems:[],
isLoading:false});}.

bind(this));};

m.propTypes={className:j.string,flyoutAlignment:j.string.isRequired,threadID:j.string.isRequired,pageID:j.string.isRequired};


f.exports=m;}),null);

/** js/mercury/clients/messenger/components/messenger_video/MessengerVideoAutoplayActions.js */






__d('MessengerVideoAutoplayActions',['immutable','MessengerFluxReduceDispatcher','keyMirror'],(function a(b,c,d,e,f,g){

'use strict';






var h='messenger_video',

i=c('keyMirror')
({DESTROY:null,
DSTROY_ALL:null,
SCROLL:null,
UPDATE:null}),


j=
{Types:i,
Namespace:h,

onScroll:function k
(l,
m,
n,
o){

c('MessengerFluxReduceDispatcher').dispatch
({type:i.SCROLL,
namespace:h,
threadID:l,
messageIDs:m,
messageRectMap:n,
viewportRect:o});},



updateStore:function k(l,m){
c('MessengerFluxReduceDispatcher').dispatch
({type:i.UPDATE,
namespace:h,
threadID:l,
messageIDs:m});},



deleteThread:function k(l){
c('MessengerFluxReduceDispatcher').dispatch
({type:i.DESTROY,
namespace:h,
threadID:l});},



deleteAllThreads:function k(){
c('MessengerFluxReduceDispatcher').dispatch


({type:i.DESTROY_ALL,
namespace:h});}};




f.exports=j;}),null);

/** js/mercury/clients/messenger/components/messenger_video/MessengerVideoAutoplayStore.js */





__d('MessengerVideoAutoplayStore',['FluxReduceStore','immutable','MessengerVideoAutoplayActions','MessengerFluxReduceDispatcher'],(function a(b,c,d,e,f,g){

'use strict';var h,i,j,k,




l=c('MessengerVideoAutoplayActions').Types;h=babelHelpers.inherits


(m,c('immutable').Record
({currentVideoMessageID:null,
lastVideoMessageID:null,
messageIDs:null,
videoVisibilityMap:null}));i=h&&h.prototype;function m(){h.apply(this,arguments);}j=babelHelpers.inherits









(n,c('FluxReduceStore'));k=j&&j.prototype;n.prototype.
getInitialState=function(){
return c('immutable').Map();};
n.prototype.

reduce=function(o,p){
if(p.namespace!==c('MessengerVideoAutoplayActions').Namespace)
return o;

switch(p.type){
case l.SCROLL:
if(p.messageIDs)
o=this.$MessengerVideoAutoplayStore_updateStore(o,p.threadID,p.messageIDs);

return this.$MessengerVideoAutoplayStore_checkAndUpdateVideoVisibility
(o,
p.threadID,
p.messageRectMap,
p.viewportRect);

case l.UPDATE:
return this.$MessengerVideoAutoplayStore_updateStore(o,p.threadID,p.messageIDs);
case l.DESTROY:
return this.$MessengerVideoAutoplayStore_deleteThread(o,p.threadID);


case l.DESTROY_ALL:
return o.clear();}

return o;};
n.prototype.

$MessengerVideoAutoplayStore_updateStore=
function(o,
p,
q){

if(!q)
return o['delete'](p);

return o.set(p,new m
({currentVideoMessageID:null,
lastVideoMessageID:q.first(),
messageIDs:q,
videoVisibilityMap:null}));};

n.prototype.

$MessengerVideoAutoplayStore_deleteThread=function(o,p){
return o['delete'](p);};
n.prototype.

$MessengerVideoAutoplayStore_constructVisibilityMap=
function(o,
p,
q,
r,
s){

var t=null,
u=q.
map(function(v){
if(t){
return [v,false];}else{

var w=this.$MessengerVideoAutoplayStore_isMessageVisible
(v,
r,
s);

if(w)
t=v;

return [v,w];}}.

bind(this)).fromEntrySeq().toOrderedMap();
return o.mergeIn([p],
{currentVideoMessageID:t,
videoVisibilityMap:u});};

n.prototype.

$MessengerVideoAutoplayStore_checkAndUpdateVideoVisibility=
function(o,
p,
q,
r){

var s=o.getIn([p,'messageIDs']);
if(!s||!q||!r)
return o;


if(!o.getIn([p,'currentVideoMessageID'])){
return this.$MessengerVideoAutoplayStore_constructVisibilityMap
(o,
p,
s,
q,
r);}else{



var t=o.getIn([p,'videoVisibilityMap']),
u=o.getIn([p,'lastVideoMessageID']),
v=
o.getIn([p,'currentVideoMessageID']);



if(this.$MessengerVideoAutoplayStore_isMessageVisible
(u,
q,
r)){

if(t&&t.first())
return o;}else

if(this.$MessengerVideoAutoplayStore_isMessageVisible
(v,
q,
r))

return o;


o=o.setIn([p,'currentVideoMessageID'],null);
return this.$MessengerVideoAutoplayStore_constructVisibilityMap
(o,
p,
s,
q,
r);}};


n.prototype.

$MessengerVideoAutoplayStore_isElementVisible=function(o,p){
if(!o)
return false;

return o.top>p.top&&
o.bottom<p.bottom;};
n.prototype.

$MessengerVideoAutoplayStore_isMessageVisible=
function(o,
p,
q){

var r=p.get(o);
return this.$MessengerVideoAutoplayStore_isElementVisible(r,q);};
n.prototype.

getVideoVisibilityMap=
function(o){

return this.getState().getIn([o,'videoVisibilityMap']);};
n.prototype.

getMessageIDs=function(o){
return this.getState().getIn([o,'messageIDs']);};
n.prototype.

isVisible=function(o,p){
return !!this.getState().getIn([o,'videoVisibilityMap',p]);};
function n(){j.apply(this,arguments);}


f.exports=
new n(c('MessengerFluxReduceDispatcher'));}),null);

/** js/mercury/clients/messenger/ironman/lib/js/src/messengerDomIDsRe.js */





__d("messengerDomIDsRe",["uniqueID"],(function a(b,c,d,e,f,g){

'use strict';



var h=
{COMPOSER_INPUT_DESCRIPTION:c("uniqueID")(),
CONVERSATION:c("uniqueID")(),
MAIN_LABEL:c("uniqueID")(),
MUTE_DIALOG_TITLE:c("uniqueID")(),
THREAD_INFO_PANEL:c("uniqueID")(),
THREAD_TITLE:c("uniqueID")()};


g.ids=h;}),null);

/** js/mercury/clients/messenger/messengerCustomColorUtils.js */






__d('messengerCustomColorUtils',[],(function a(b,c,d,e,f,g){

'use strict';

function h(i,j){
j=j||{};
j.backgroundColor=i;
return j;}


f.exports=
{customBubbleStyle:h};}),null);

/** www/__virtual__/x/XMercuryChatTabPagesGreetingConfigController.js */



__d("XMercuryChatTabPagesGreetingConfigController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/pages\/messaging\/mercury\/greeting\/",{});}),

null);

/** js/mercury/clients/messenger/stores/MessengerPageGreetingStore.js */






__d('MessengerPageGreetingStore',['AsyncRequest','EventEmitter','Map','XMercuryChatTabPagesGreetingConfigController'],(function a(b,c,d,e,f,g){

'use strict';var h,i,














j=new (c('Map'))(),
k=new (c('Map'))();h=babelHelpers.inherits

(l,c('EventEmitter'));i=h&&h.prototype;l.prototype.

getOrFetch=function(m){
var n=j.get(m);
n||this.$MessengerPageGreetingStore_fetch(m);
return n;};
l.prototype.

$MessengerPageGreetingStore_fetch=function(m){
if(k.get(m))
return;

var n=c('XMercuryChatTabPagesGreetingConfigController').getURIBuilder().
getURI(),
o=new (c('AsyncRequest'))().
setAllowCrossPageTransition(true).
setURI(n).
setData({page_id:m}).
setHandler(this.$MessengerPageGreetingStore_handleResponse.bind(this,m));
k.set(m,o);
o.send();};
l.prototype.

$MessengerPageGreetingStore_handleResponse=function(m,n){
j.set(m,
{shouldShow:n.payload.shouldShow||false,
content:n.payload.content||'',
sayHelloMessage:n.payload.sayHelloMessage||''});

k['delete'](m);
this.emit('change');};
function l(){h.apply(this,arguments);}


f.exports=new l();}),null);

/** js/mercury/clients/shared/AutoFocusableLink.react.js */






__d('AutoFocusableLink.react',['Link.react','ReactDOM'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits




(j,c('Link.react'));i=h&&h.prototype;j.prototype.
componentDidMount=function(){
if(this.props.autoFocus)

c('ReactDOM').findDOMNode(this).focus();};

function j(){h.apply(this,arguments);}


f.exports=j;}),null);

/** js/mercury/clients/shared/CustomColorHighlighting.react.js */










__d('CustomColorHighlighting.react',['cssVar','csx','cx','React','UserAgent','guid','joinClasses'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';var k,l,










m=c('React').PropTypes,
n="._fy2",
o="._43by",
p="._mh6",
q=c('UserAgent').isEngine('Gecko')?
"._mh6 ::-moz-selection":
"._mh6 ::selection",
r=c('UserAgent').isEngine('Gecko')?
"._43by ::-moz-selection":
"._43by ::selection",


s=n+n,
t=o+o,
u=p+q,
v=p+p,
w=o+r,
x="rgba(255, 255, 255, 0.3)";k=babelHelpers.inherits













(y,
c('React').PureComponent);l=k&&k.prototype;









function y(z){
l.constructor.call(this,z);
this.state=
{id:'cch_'+c('guid')()};}

y.prototype.

componentWillMount=function(){
this.$CustomColorHighlighting_initHighlighter();};
y.prototype.

componentWillUnmount=function(){
this.$CustomColorHighlighting_removeCSSRules();
if(this.state.styleTag)



document.head.removeChild(this.state.styleTag);};

y.prototype.

componentWillReceiveProps=function(z){
if(this.props.customColor&&!z.customColor){
this.$CustomColorHighlighting_removeCSSRules();}else
if(z.customColor!==this.props.customColor)
this.$CustomColorHighlighting_setHighlightColor(z.customColor);};

y.prototype.

render=function(){

return (c('React').createElement('span',
{className:c('joinClasses')
("_mh6",
this.props.className),

id:this.state.id},
this.props.children));};


y.prototype.

$CustomColorHighlighting_initHighlighter=function(){
var z=document.createElement('style');

z.appendChild(document.createTextNode(''));





document.head.appendChild(z);
this.setState
({styleSheet:z.sheet,
styleTag:z},
function(){return this.$CustomColorHighlighting_setHighlightColor(this.props.customColor);}.bind(this));};
y.prototype.

$CustomColorHighlighting_addCSSRule=function(z,aa,ba){
if(z.insertRule){
z.insertRule(aa+'{'+ba+'}',0);}else
if(z.addRule)
z.addRule(aa,ba,0);};

y.prototype.

$CustomColorHighlighting_removeCSSRule=function(z){
if('removeRule' in z){
z.removeRule(0);}else
if('deleteRule' in z)
z.deleteRule(0);};

y.prototype.

$CustomColorHighlighting_removeCSSRules=function(){
if(this.state.styleSheet){
if(this.state.styleSheet.rules)
while(this.state.styleSheet.rules.length)
this.$CustomColorHighlighting_removeCSSRule(this.state.styleSheet);


if(this.state.styleSheet.cssRules)
while(this.state.styleSheet.cssRules.length)
this.$CustomColorHighlighting_removeCSSRule(this.state.styleSheet);}};



y.prototype.

$CustomColorHighlighting_hexToRGBA=function(z){
var aa=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(z),
ba=parseInt(aa[1],16),
ca=parseInt(aa[2],16),
da=parseInt(aa[3],16);
return 'rgba('+ba+','+ca+','+da+',0.2)';};
y.prototype.

$CustomColorHighlighting_setHighlightColor=function(z){
this.$CustomColorHighlighting_removeCSSRules();
var aa=z||this.props.customColor;
if(aa){
var ba=this.$CustomColorHighlighting_hexToRGBA(aa),
ca='background: '+ba;

this.$CustomColorHighlighting_addCSSRule
(this.state.styleSheet,
'#'+this.state.id+u,
ca);

this.$CustomColorHighlighting_addCSSRule
(this.state.styleSheet,
'#'+this.state.id+' '+s,
'color: '+aa);

this.$CustomColorHighlighting_addCSSRule
(this.state.styleSheet,
'#'+this.state.id+' '+t,
'background-color: '+aa);

this.$CustomColorHighlighting_addCSSRule
(this.state.styleSheet,
'#'+this.state.id+v+' '+w,
'background-color: '+x);}};


y.propTypes={className:m.string,customColor:m.string};


f.exports=y;}),null);

/** js/mercury/clients/shared/EmojiOnlyMessage.react.js */






__d('EmojiOnlyMessage.react',['cx','EmojiImageURL','EmojiLikeConstants','Image.react','React'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,








k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').Component);j=i&&i.prototype;l.prototype.














render=function(){
var m=
"_1ift _1ifu",
n=0,
o=this.props.contents.map
(function(p){
n++;
if(p.emojiKey){
var q=c('EmojiImageURL').getMessengerURL
(p.emojiKey,
c('EmojiLikeConstants').sizeMap.dp32);


return (c('React').createElement(c('Image.react'),
{alt:p.text,
className:m,
key:n,
src:q}));}else 



return c('React').createElement('span',{key:n},p.text);});




return (c('React').createElement('div',{tabIndex:'0'},
o));};


function l(){i.apply(this,arguments);}l.propTypes={contents:k.arrayOf(k.shape({emojiKey:k.string,text:k.string.isRequired})).isRequired};


f.exports=l;}),null);

/** js/mercury/clients/shared/MercuryBootloadOnInteraction.react.js */





__d('MercuryBootloadOnInteraction.react',['BootloadOnRender.react','React'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits













(j,c('React').PureComponent);i=h&&h.prototype;









function j(k){
i.constructor.call(this,k);this.





$MercuryBootloadOnInteraction_onInteraction=function(l){
this.setState
({hadUserInteraction:true,
interactionType:l.type});}.

bind(this);this.

$MercuryBootloadOnInteraction_cancelInteraction=function(l){
this.setState({interactionType:undefined});}.
bind(this);this.state={hadUserInteraction:false};}j.prototype.

render=function(){
if(!this.state.hadUserInteraction)
return c('React').cloneElement(this.props.placeholder,
{onFocus:this.$MercuryBootloadOnInteraction_onInteraction,
onMouseOver:this.$MercuryBootloadOnInteraction_onInteraction,
onClick:this.$MercuryBootloadOnInteraction_onInteraction,
onBlur:this.$MercuryBootloadOnInteraction_cancelInteraction});

var k=
this.props,l=k.loader,m=k.component,n=k.placeholder,
o={};
switch(this.state.interactionType){
case 'focus':
o.autoFocus=true;
break;
case 'click':
o.clicked=true;
break;}

m=c('React').cloneElement(m,o);
n=c('React').cloneElement(n,o);

return (c('React').createElement(c('BootloadOnRender.react'),
{placeholder:n,
loader:l,
component:m}));};





f.exports=j;}),null);

/** js/mercury/clients/shared/MessageRequestUtils.js */






__d('MessageRequestUtils',['MessagingTag'],(function a(b,c,d,e,f,g){

'use strict';





var h=
{isMessageRequest:function i(j){

return (j.folder===c('MessagingTag').PENDING||
j.folder===c('MessagingTag').OTHER)&&
j.can_reply;},


isFiltered:function i(j){
return j.folder===c('MessagingTag').OTHER;}};



f.exports=h;}),null);

/** js/mercury/clients/shared/MessengerMentionSource.js */






__d('MessengerMentionSource',[],(function a(b,c,d,e,f,g){

'use strict';



var h=
{REPLY:'reply',
ATSIGN:'@',
TYPEAHEAD:'typeahead'};


f.exports=h;}),null);

/** js/mercury/clients/shared/applyMessengerEmoticonToContentBlock.js */





__d('applyMessengerEmoticonToContentBlock',['CharacterMetadata','EmoticonEmojiList','immutable'],(function a(b,c,d,e,f,g){

'use strict';









var h=c('immutable').List,


i='\u3000';

function j
(k,
l,
m,
n){

if(!c('EmoticonEmojiList').names[m])
return l;


var o=k.createEntity
('EMOTICON',
'IMMUTABLE',

{type:c('EmoticonEmojiList').names[m],
originalEmoticon:m}),


p=o.getLastCreatedEntityKey(),

q=l.getText(),
r=l.getCharacterList(),
s=m.length,
t=r.get(n);

return l.merge
({text:
q.slice(0,n)+
i+
q.slice(n+s),

characterList:r.slice(0,n).concat
(h.of(c('CharacterMetadata').applyEntity(t,p)),
r.slice(n+s))});}




f.exports=j;}),null);

/** js/mercury/clients/shared/applyMessengerEmoticonToContentState.js */





__d('applyMessengerEmoticonToContentState',['EmoticonEmojiList','applyMessengerEmoticonToContentBlock','getTextAfterNearestEntity'],(function a(b,c,d,e,f,g){

'use strict';









function h
(i,
j){

var k=j.getAnchorKey(),
l=j.getAnchorOffset(),
m=i.getBlockForKey(k),
n=c('getTextAfterNearestEntity')(m,l),
o=c('EmoticonEmojiList').regexp.exec(n);
if(!o)
return i;


var p=o[1];




if(!p&&l!==n.length)
return i;


var q=o[2],
r=l-n.length,
s=r+o.index+o[1].length,

t=i.getBlockMap().set
(k,
c('applyMessengerEmoticonToContentBlock')
(i,
m,
q,
s));



l-=q.length-1;

return i.merge
({blockMap:t,
selectionBefore:j,
selectionAfter:j.merge
({anchorOffset:l,
focusOffset:l})});}




f.exports=h;}),null);

/** js/mercury/utils/MercuryMessageGroup.js */





__d('MercuryMessageGroup',['MercuryActionType','MercuryAttachmentType','MercuryShareAttachmentRenderLocations','MercuryThreadlistConstants','MessengerLightweightActionUtils','enumerate'],(function a(b,c,d,e,f,g){

'use strict';









var h=








{calculateMessageGroups:function k(l,m){
var n=[],
o=null,
p={value:null},
q=c('enumerate')(l),
r=void 0;

while(!(r=q.next()).done){
var s=h.canAppendMessageToLastGroup
(p.value,
r.value,
m);


if(!s){
o=[];
n.push(o);}


o.push(r.value);
p=r;}


return n;},






















canAppendMessageToLastGroup:function k(l,m,n){
var o=c('MercuryThreadlistConstants').GROUPING_THRESHOLD;

if(!l||
i(l,n)||
i(m,n)||
l.author!=m.author||
l.timestamp<m.timestamp-o||
l.is_spoof_warning!==m.is_spoof_warning||
l.page_admin_notes)
return false;


return true;}};








function i(k,l){
var m=k.has_attachment;
if(m&&
(l===c('MercuryShareAttachmentRenderLocations').MESSENGER||
l===c('MercuryShareAttachmentRenderLocations').CHAT))
m=j(k);


return !!(c('MessengerLightweightActionUtils').isLWAMessage(k)||
k.action_type==c('MercuryActionType').LOG_MESSAGE||
m||
k.html_body||
k.body&&k.body.length>
c('MercuryThreadlistConstants').MAX_CHARS_BEFORE_BREAK);}











function j(k){
var l=k.attachments[0];




return (!l||
l.attach_type===c('MercuryAttachmentType').STICKER||
l.attach_type===c('MercuryAttachmentType').ANIMATED_IMAGE);}



f.exports=h;}),null);

/** js/mercury/clients/shared/components/MessageListGreeting.react.js */






__d('MessageListGreeting.react',['cx','React','MercuryIDs','MessengerPageGreetingStore'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits

















(k,c('React').PureComponent);j=i&&i.prototype;function k(){var l,m;'use strict';for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=j.constructor).call.apply(l,[this].concat(o)),this.

state=
{shouldShowGreeting:false,
greeting:''},this.


$MessageListGreeting_isMounted=false,this.

$MessageListGreeting_initGreeting=function(q){
if(!this.$MessageListGreeting_isMounted)
return;


var r=(q||this.props).threadID;

if(!r)
return;


var s=c('MercuryIDs').getUserIDFromThreadID(r);
if(!s)
return;


var t=c('MessengerPageGreetingStore').getOrFetch(s);
if(t){

this.setState
({shouldShowGreeting:t.shouldShow,
greeting:t.content});}else 


c('MessengerPageGreetingStore').once('change',this.$MessageListGreeting_initGreeting);}.

bind(this),m;}k.prototype.

componentDidMount=function(){'use strict';
this.$MessageListGreeting_isMounted=true;
this.$MessageListGreeting_initGreeting();};
k.prototype.

componentWillUnmount=function(){'use strict';
this.$MessageListGreeting_isMounted=false;};
k.prototype.

componentWillReceiveProps=function(l){'use strict';
this.$MessageListGreeting_initGreeting(l);};
k.prototype.

render=function(){'use strict';
if(this.props.messageCount>0)
return null;


if(!this.state.shouldShowGreeting||
this.state.greeting.trim().length===0)
return null;



return (c('React').createElement('div',
{className:"_4fsh _3-8z"},
this.state.greeting));};





f.exports=k;}),null);

/** js/mercury/clients/shared/components/MessageList.react.js */






__d('MessageList.react',['cx','immutable','ImmutableObject','MercuryActionType','MercuryIDs','MercuryLogMessageType','MercuryMessageGroup','MessagingGenericAdminTextType','MessengerLightweightActionUtils','MessengerAdminGroupUtils','messengerDomIDsRe','MessageListGreeting.react','React','ReactDOM','MercuryShareAttachmentRenderLocations','idx'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,










k=c('messengerDomIDsRe').ids,








l=c('React').PropTypes,

m=1000*60*60,

n=function v(w){var x,y,z,aa,ba,ca,da,ea,
fa=(x=w)!=null?(y=x.log_message_data)!=null?y.message_type:y:x;
switch(fa){
case c('MessagingGenericAdminTextType').GROUP_POLL:
return (z=w)!=null?(aa=z.log_message_data)!=null?(ba=aa.untypedData)!=null?ba.question_id:ba:aa:z;
case c('MessagingGenericAdminTextType').INSTANT_GAME_UPDATE:
return (ca=w)!=null?(da=ca.log_message_data)!=null?(ea=da.untypedData)!=null?ea.game_id:ea:da:ca;

default:return null;}},



o=function v(w){
if(c('MessengerLightweightActionUtils').isLWAMessage(w))
return 'lwa';

return null;};
i=babelHelpers.inherits

(p,c('React').PureComponent);j=i&&i.prototype;function p(){var v,w;for(var x=arguments.length,y=Array(x),z=0;z<x;z++)y[z]=arguments[z];return w=(v=j.constructor).call.apply(v,[this].concat(y)),this.



















state=
{activeMessageID:null,
messageGroups:c('MercuryMessageGroup').calculateMessageGroups
(this.props.messages,
this.props.location),

shouldShowGreeting:false,
greeting:''},this.













































































































































































































































































$MessageList_handleMessageDeselect=function(aa){
this.setState(function(ba){

return {activeMessageID:ba.activeMessageID===aa?
null:
ba.activeMessageID};});}.


bind(this),this.

$MessageList_handleMessageSelect=function(aa){
this.setState({activeMessageID:aa});}.
bind(this),w;}p.prototype.componentWillReceiveProps=function(v){if(v.messages!==this.props.messages)this.setState({messageGroups:c('MercuryMessageGroup').calculateMessageGroups(v.messages,v.location)});};p.prototype.render=function(){var v=this.props,w=v.DateBreak,x=v.location,y=v.MessageGroup,z=v.CollapsedLogMessageGroup,aa=[],ba=[],ca=void 0,da=this.props.thread&&this.props.thread.custom_color,ea=da?{backgroundColor:da}:null,fa=this.state.activeMessageID,ga=this.state.messageGroups,ha=ga.length,ia=this.props.readReceipts,ja=ia.last(),ka=ja?ja.watermark:0,la=c('MercuryIDs').getParticipantIDFromUserID(this.props.viewer),ma={};for(var na=this.props.messages.size-1;na>=0;na--){var oa=this.props.messages.get(na),pa=n(oa)||o(oa);if(pa&&!ma[pa])ma[pa]=oa.message_id;}for(var qa=0;qa<ha;qa++){var ra=qa>0?ga[qa-1]:null,sa=ra&&ra.length>0?ra[ra.length-1]:null,ta=ga[qa],ua=ta[0],va=ta[ta.length-1],wa=false;if(!sa||ua.timestamp-sa.timestamp>m){wa=true;var xa=c('React').createElement(w,{date:new Date(ua.timestamp),key:'db:'+ua.message_id,ref:'db:'+ua.message_id});if(ba.length===0)aa.push(xa);}if(c('MessengerLightweightActionUtils').isLWAMessage(ua))if(ma[o(ua)]!==ua.message_id){var ya=this.$MessageList_createCollapsedShareMessage(ua,ma);aa.push(ya);continue;}if(ua.action_type==c('MercuryActionType').LOG_MESSAGE){var za=ua.log_message_data.message_type===c('MessagingGenericAdminTextType').INSTANT_GAME_UPDATE,ab=ua.log_message_data.message_type===c('MessagingGenericAdminTextType').GROUP_POLL;if((x===c('MercuryShareAttachmentRenderLocations').CHAT||x===c('MercuryShareAttachmentRenderLocations').MESSENGER)&&(ua.log_message_type===c('MercuryLogMessageType').VIDEO_CALL||ua.log_message_type===c('MercuryLogMessageType').PHONE_CALL)){var bb=this.$MessageList_createRTCMessageGroup(ua,la,ga,ha,qa,ia,ka,va);aa.push(bb);}else{var cb=this.$MessageList_createLogMessageGroup(ua,ma);ca=ua.message_id;if(c('MessengerAdminGroupUtils').isJoinableThread(this.props.thread)&&!za&&!ab){ba.push(cb);}else{if(ba.length!==0){if(ba.length>1){aa.push(c('React').createElement(z,{key:'mg:'+ca,style:ea},ba));}else aa.push(c('React').createElement('div',{key:'mg:'+ca},ba));ba=[];}aa.push(cb);}}continue;}if(ba.length!==0){if(ba.length>1){aa.push(c('React').createElement(z,{key:'mg:'+ca,style:ea},ba));}else aa.push(c('React').createElement('div',{key:'mg:'+ca},ba));ba=[];}ta=c('immutable').List(ta);var db=r(ga,ha,qa),eb=!t(ia,ta,db),fb=s(ka,va),gb=u(this.props.deliveryTimestamp,va);aa.push(c('React').createElement(y,{activeMessageID:q(fa,ta),author:ta.first().author,deliveryTimestamp:gb,hasDateBreak:wa,isCanonical:this.props.isCanonical,isFromViewer:la===ua.author,isPageMessage:this.props.isPageMessage,key:'mg:'+ua.message_id,lastReadTimestamp:fb,maxBubbleWidth:this.props.maxBubbleWidth,messages:ta,nextTimestamp:db,onAttachmentLoad:this.props.onAttachmentLoad,onMessageDeselect:this.$MessageList_handleMessageDeselect,onMessageSelect:this.$MessageList_handleMessageSelect,onStickerClick:this.props.onStickerClick,pageID:this.props.isPageMessage?this.props.viewer:null,readReceipts:eb?ia:c('immutable').OrderedMap(),ref:'mg:'+ua.message_id,thread:this.props.thread,threadID:this.props.threadID}));}if(ba.length!==0){if(ba.length>1){aa.push(c('React').createElement(z,{key:'mg:'+ca,style:ea},ba));}else aa.push(c('React').createElement('div',{key:'mg:'+ca},ba));ba=[];}var hb=this.props.threadID||this.props.thread&&this.props.thread.thread_id||this.props.thread&&this.props.thread.thread_fbid,ib=null;if(x===c('MercuryShareAttachmentRenderLocations').MESSENGER)ib=c('React').createElement(c('MessageListGreeting.react'),{messageCount:ba.length+ha,threadID:hb});return c('React').createElement('div',{id:x===c('MercuryShareAttachmentRenderLocations').MESSENGER?k.CONVERSATION:null},ib,aa);};p.prototype.getMessageElement=function(v,w){if(w){var x=this.refs['db:'+v];if(x)return c('ReactDOM').findDOMNode(x);}var y=this.state.messageGroups.find(function(ba){return ba.some(function(ca){return ca.message_id===v;});});if(!y)return null;var z=y[0].message_id,aa=this.refs['mg:'+z];if(!aa)return null;if(w&&z===v)return c('ReactDOM').findDOMNode(aa);return aa.getMessageElement(v);};p.prototype.

$MessageList_createRTCMessageGroup=
function(v,
w,
x,
y,
z,
aa,
ba,
ca){

var da=this.props.MessageGroup,

ea=
{attach_type:'share',
share:
{style_list:['rtc_call_log','fallback'],
log_message_body:v.log_message_body,
log_message_data:v.log_message_data,
log_message_type:v.log_message_type,
timestamp:v.timestamp}},



fa=c('ImmutableObject').setProperty
(v,'attachments',[ea]);
fa=c('ImmutableObject').setProperty
(fa,'body','');
var ga=c('immutable').List([fa]),

ha=r(x,y,z),
ia=!t
(aa,ga,ha),
ja=s(ba,ca),
ka=u
(this.props.deliveryTimestamp,
ca);



return (c('React').createElement(da,
{author:ga.first().author,
deliveryTimestamp:ka,
isFromViewer:w===v.author,
key:v.message_id,
lastReadTimestamp:ja,
maxBubbleWidth:this.props.maxBubbleWidth,
messages:ga,
nextTimestamp:ha,
onAttachmentLoad:this.props.onAttachmentLoad,
onMessageDeselect:this.$MessageList_handleMessageDeselect,
onMessageSelect:this.$MessageList_handleMessageSelect,
onStickerClick:this.props.onStickerClick,
readReceipts:ia?aa:c('immutable').OrderedMap(),
thread:this.props.thread,
threadID:this.props.threadID}));};


p.prototype.

$MessageList_createLogMessageGroup=
function(v,
w){

var x=this.props.LogMessage,
y=w[
n(v)];

if(v.log_message_type!==c('MercuryLogMessageType').SERVER_ERROR)

return (c('React').createElement(x,
{className:this.props.location===c('MercuryShareAttachmentRenderLocations').CHAT?
"_5w0o":
null,
key:v.message_id,
onLogMessageExpanded:this.props.onAttachmentLoad,
loadMoreMessages:this.props.loadMoreMessages,
message:v,
onImageLoad:this.props.onAttachmentLoad,
viewer:this.props.viewer,
thread:this.props.thread,
isLastOfType:y===v.message_id}));




return null;};
p.prototype.

$MessageList_createCollapsedShareMessage=
function(v,
w){

var x=w[
o(v)],

y=this.props.LogMessage;

return (c('React').createElement(y,
{className:this.props.location===c('MercuryShareAttachmentRenderLocations').CHAT?
"_5w0o":
null,
key:v.message_id,
onLogMessageExpanded:this.props.onAttachmentLoad,
loadMoreMessages:this.props.loadMoreMessages,
message:v,
onImageLoad:this.props.onAttachmentLoad,
viewer:this.props.viewer,
thread:this.props.thread,
isLastOfType:x===v.message_id}));};


p.propTypes={CollapsedLogMessageGroup:l.func.isRequired,DateBreak:l.func.isRequired,deliveryTimestamp:l.number.isRequired,isCanonical:l.bool,isPageMessage:l.bool,location:l.string.isRequired,LogMessage:l.func.isRequired,loadMoreMessages:l.func,MessageGroup:l.func.isRequired,messages:l.instanceOf(c('immutable').List).isRequired,onAttachmentLoad:l.func,onStickerClick:l.func,readReceipts:l.instanceOf(c('immutable').OrderedMap).isRequired,viewer:l.string.isRequired,thread:l.object,threadID:l.string};









function q(v,w){
return w.find(function(x){return x.message_id===v;})?
v:
null;}






function r(v,w,x){
return x<w-1?v[x+1][0].timestamp:Infinity;}









function s(v,w){
return w.timestamp>v?
v:
Infinity;}








function t(v,w,x){

return (w.isEmpty()||
v.last()<w.first().timestamp||
v.first()>=x);}








function u(v,w){
return w.timestamp>v?
v:
Infinity;}


f.exports=p;}),null);

/** js/mercury/clients/shared/components/MessengerEmojiSpan.react.js */






__d('MessengerEmojiSpan.react',['cx','EmojiLikeConstants','MessengerSupportedEmojiUtils','React'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,







k=c('React').PropTypes;i=babelHelpers.inherits



(l,c('React').PureComponent);j=i&&i.prototype;l.prototype.














render=function(){
var m=this.props.contentState.getEntity(this.props.entityKey),n=
m.getData(),o=n.type,

p=c('MessengerSupportedEmojiUtils').getUrl
(o,
c('EmojiLikeConstants').size.SMALL);

p=p?p:'';


return (c('React').createElement('span',
{className:"_21wj",
style:{backgroundImage:'url('+p+')'},
'data-offset-key':this.props.offsetKey},
c('React').createElement('span',{className:"_21wk"},
this.props.children)));};



function l(){i.apply(this,arguments);}l.propTypes={children:k.arrayOf(k.object),contentState:k.object.isRequired,entityKey:k.string.isRequired,offsetKey:k.string};


f.exports=l;}),null);

/** js/mercury/clients/shared/components/MessengerEmoticonSpan.react.js */






__d('MessengerEmoticonSpan.react',['cx','EmojiLikeConstants','MessengerSupportedEmojiUtils','EmoticonEmojiList','React'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,








k=c('React').PropTypes;i=babelHelpers.inherits



(l,c('React').PureComponent);j=i&&i.prototype;l.prototype.














render=function(){
var m=this.props.contentState.getEntity(this.props.entityKey),n=
m.getData(),o=n.type,

p=c('EmoticonEmojiList').emote2emojis[o],
q=c('MessengerSupportedEmojiUtils').getUrl
(p,
c('EmojiLikeConstants').size.XSMALL);

q=q?q:'';


return (c('React').createElement('span',
{className:"_21wj",
style:{backgroundImage:'url('+q+')'},
'data-offset-key':this.props.offsetKey},
c('React').createElement('span',{className:"_21wk"},
this.props.children)));};



function l(){i.apply(this,arguments);}l.propTypes={children:k.arrayOf(k.object),contentState:k.object.isRequired,entityKey:k.string.isRequired,offsetKey:k.string};


f.exports=l;}),null);

/** js/mercury/clients/shared/components/MessengerMentionsEntityDecorator.react.js */






__d('MessengerMentionsEntityDecorator.react',['cx','React'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;i=babelHelpers.inherits





(k,c('React').PureComponent);j=i&&i.prototype;k.prototype.
render=function(){

return (c('React').createElement('span',{className:"_fy2"},
this.props.children));};


function k(){i.apply(this,arguments);}


f.exports=k;}),null);

/** js/mercury/clients/shared/convertMIGColorToFIGColor.js */






__d('convertMIGColorToFIGColor',['cssVar'],(function a(b,c,d,e,f,g,h){

'use strict';



var i=
{'#0077e5':"#4080ff",
'#44bec7':"#54C7EC",
'#ffc300':'#f5c33b',
'#fa3c4c':"#F35369",
'#d696bb':'#d696bb',
'#6699cc':"#A3CEDF",
'#13cf13':"#42b72a",
'#ff7e29':"#F7923B",
'#e68585':'#e68585',
'#7646ff':"#8C72CB",
'#20cef5':"#54C7EC",
'#67b868':"#A3CE71",
'#d4a88c':'#cfa588',
'#ff5ca1':"#EC7EBD",
'#a695c7':"#AF9CDA"};


function j(k){
return k&&i[k]||k||'';}


f.exports=j;}),null);

/** js/mercury/clients/shared/createMessengerMentionDraftEntity.js */






__d('createMessengerMentionDraftEntity',[],(function a(b,c,d,e,f,g){

'use strict';




function h
(i,
j){

var k=i.createEntity
('MENTION',
'SEGMENTED',
{id:j.getUniqueID()});

return k.getLastCreatedEntityKey();}


f.exports=h;}),null);

/** js/mercury/clients/shared/getProfileRangesForContentState.js */











__d('getProfileRangesForContentState',['EmojiFormat','emptyFunction'],(function a(b,c,d,e,f,g){

'use strict';







var h=c('emptyFunction').thatReturnsTrue;










function i
(j){

var k=[],
l=0;
j.getBlockMap().forEach
(function(m){
var n=0,
o=m.getText();
m.findEntityRanges
(h,
function(p,q){
var r=m.getEntityAt(p);
if(r){
var s=j.getEntity(r);
if(s.getType()==='EMOTICON'){
n+=s.getData().originalEmoticon.length-1;}else
if(s.getType()==='EMOJI'){
var t=s.getData().type,
u=c('EmojiFormat').codeStringToCodeArray(t),
v=String.fromCodePoint.apply(String,u);
n+=v.length-1;}else
if(s.getType()==='MENTION'){
var w=s.getData().id,
x=p+n+l;
if(/^\d+$/.test(w))
k.push
({offset:x,
length:q-p,
id:w});}}});






l+=o.length+n+1;});


return k;}


f.exports=i;}),null);

/** js/mercury/clients/shared/getVisibleValueForContentStateWithMessengerEmoji.js */





__d('getVisibleValueForContentStateWithMessengerEmoji',['ContentState','EmojiFormat','emptyFunction'],(function a(b,c,d,e,f,g){

'use strict';






function h
(i){

var j=i.getBlockMap().map(function(k){
var l=k.getText(),
m='';
k.findEntityRanges
(c('emptyFunction').thatReturnsTrue,
function(n,o){
var p=k.getEntityAt(n);
if(!p){
m+=l.slice(n,o);}else{

var q=i.getEntity(p);
if(q.getType()==='EMOTICON'){
m+=q.getData().originalEmoticon;}else
if(q.getType()==='EMOJI'){
var r=q.getData().type,
s=c('EmojiFormat').codeStringToCodeArray(r);
m+=String.fromCodePoint.apply(String,s);}else 

m+=l.slice(n,o);}});




return m;});


return j.join('\n');}


f.exports=h;}),null);

/** js/mercury/clients/shared/insertMessengerEmojiIntoContentState.js */





__d('insertMessengerEmojiIntoContentState',['ContentState','DraftModifier','EmojiFormat','SelectionState'],(function a(b,c,d,e,f,g){

'use strict';








function h
(i,
j,
k,
l){


var m=j.createEntity
('EMOJI',
'IMMUTABLE',

{type:i}),


n=m.getLastCreatedEntityKey();

return c('DraftModifier').insertText
(j,
k,
c('EmojiFormat').codeStringToUnicode(i),
l,
n);}



f.exports=h;}),null);

/** js/mercury/clients/shared/handleBeforeInputForMessengerEmoji.js */





__d('handleBeforeInputForMessengerEmoji',['EditorState','MessengerSupportedEmojiUtils','insertMessengerEmojiIntoContentState'],(function a(b,c,d,e,f,g){

'use strict';






function h
(i,
j){

var k=i.getSelection();
if(!k.isCollapsed()||!j)
return i;


var l=c('MessengerSupportedEmojiUtils').getEmojiMatchObj(j);
if(!l||!l.is_supported)
return i;


var m=c('insertMessengerEmojiIntoContentState')
(l.emoji_key,
i.getCurrentContent(),
k,
i.getCurrentInlineStyle());


return c('EditorState').push
(i,
m,
'insert-characters');}



f.exports=h;}),null);

/** js/mercury/clients/shared/handleBeforeInputForMessengerEmoticon.js */





__d('handleBeforeInputForMessengerEmoticon',['DraftModifier','EditorState','applyMessengerEmoticonToContentState'],(function a(b,c,d,e,f,g){

'use strict';






var h=new RegExp(/[\s'".,!?]/);

function i
(j,
k){

var l=j.getSelection();
if(!l.isCollapsed()||!k||!h.test(k))
return j;


var m=j.getCurrentContent(),
n=c('applyMessengerEmoticonToContentState')(m,l);
if(n===m)
return j;


var o=c('DraftModifier').insertText
(n,
n.getSelectionAfter(),
k);


return c('EditorState').push
(j,
o,
'insert-characters');}



f.exports=i;}),null);

/** js/mercury/clients/shared/handleSoftNewlineForMessengerEmoticon.js */





__d('handleSoftNewlineForMessengerEmoticon',['DraftModifier','EditorState','applyMessengerEmoticonToContentState'],(function a(b,c,d,e,f,g){

'use strict';






function h
(i){

var j=i.getCurrentContent(),
k=i.getSelection(),
l=c('applyMessengerEmoticonToContentState')(j,k),

m=c('DraftModifier').splitBlock
(l,
j===l?k:l.getSelectionAfter());


return c('EditorState').push
(i,
m,
'split-block');}



f.exports=h;}),null);

/** js/mercury/models/MercuryCanonicalGroupThreadManager.js */






__d('MercuryCanonicalGroupThreadManager',['Bootloader','KeyedCallbackManager','MercuryConfig','MercuryIDs','MercuryPayloadSource','MercuryServerPayloadPreprocessor','MercurySingletonProvider','MercuryThreads','MercuryServerDispatcher','SubscriptionsHandler'],(function a(b,c,d,e,f,g){

'use strict';

























function h(j){
this.$MercuryCanonicalGroupThreadManager_fbid=j;
this.$MercuryCanonicalGroupThreadManager_canonicalGroupToThreadMap=new (c('KeyedCallbackManager'))();
this.$MercuryCanonicalGroupThreadManager_payloadPreprocessor=
c('MercuryServerPayloadPreprocessor').getForFBID(this.$MercuryCanonicalGroupThreadManager_fbid);
this.$MercuryCanonicalGroupThreadManager_threads=c('MercuryThreads').getForFBID(this.$MercuryCanonicalGroupThreadManager_fbid);

this.$MercuryCanonicalGroupThreadManager_reverseMapping={};
if(!c('MercuryConfig').GraphQLCanonicalGroupThread)
this.$MercuryCanonicalGroupThreadManager_registerSearchEndpoint();

this.$MercuryCanonicalGroupThreadManager_registerListeners();
this.$MercuryCanonicalGroupThreadManager_pendingRequests={};}
h.

getForFBID=function(j){
return i.getForFBID(j);};
h.

get=function(){
return i.get();};
h.prototype.

getCanonicalGroupThreadIDForParticipants=
function(j,
k){

j=this.$MercuryCanonicalGroupThreadManager_normalizeParticipants(j);
var l=this.$MercuryCanonicalGroupThreadManager_getCanonicalGroupThreadKey(j),


m=this.$MercuryCanonicalGroupThreadManager_canonicalGroupToThreadMap.executeOrEnqueue
(l,
k);

this.$MercuryCanonicalGroupThreadManager_doSearch(j);
return m;};
h.prototype.

unsubscribe=
function(j){

if(j)
this.$MercuryCanonicalGroupThreadManager_canonicalGroupToThreadMap.unsubscribe(j);};

h.prototype.

$MercuryCanonicalGroupThreadManager_getCanonicalGroupThreadKey=
function(j){

return j.sort().join(',');};
h.prototype.

$MercuryCanonicalGroupThreadManager_addCanonicalGroupResult=
function(j,
k){

var l=c('MercuryIDs').getThreadIDFromThreadFBID(k);
this.$MercuryCanonicalGroupThreadManager_canonicalGroupToThreadMap.setResource
(j,
l);

this.$MercuryCanonicalGroupThreadManager_reverseMapping[l]=j;};
h.prototype.

$MercuryCanonicalGroupThreadManager_doSearch=function(j){
var k=this.$MercuryCanonicalGroupThreadManager_getCanonicalGroupThreadKey(j);
if(c('MercuryConfig').GraphQLCanonicalGroupThread){
c('Bootloader').loadModules
(["MessengerGraphQLThreadSearch"],
function(m){
var n=this.$MercuryCanonicalGroupThreadManager_pendingRequests[k];
if(!n){
n=
m.searchCanonicalGroupThreads
(j);

this.$MercuryCanonicalGroupThreadManager_pendingRequests[k]=n;}

n.done(function(o){var p;
delete this.$MercuryCanonicalGroupThreadManager_pendingRequests[k];
if(o===null)
return;


this.handleUpdate
({canonical_group:(p={},p[k]=o.thread_fbid,p),
mercury_payload:
{payload_source:c('MercuryPayloadSource').SERVER_SEARCH,
threads:[o]}});}.


bind(this));}.
bind(this),'MercuryCanonicalGroupThreadManager');

return;}


var l=
{canonical_group_key:k,
participants:j};

c('MercuryServerDispatcher').trySend
('/ajax/mercury/search_canonical_groups.php',
l,
null,
this.$MercuryCanonicalGroupThreadManager_fbid);};

h.prototype.

$MercuryCanonicalGroupThreadManager_registerSearchEndpoint=function(){
c('MercuryServerDispatcher').registerEndpoints

({'/ajax/mercury/search_canonical_groups.php':
{request_user_id:this.$MercuryCanonicalGroupThreadManager_fbid,
mode:c('MercuryServerDispatcher').IMMEDIATE,
handler:function(j){this.handleUpdate(j);}.bind(this)}});};



h.prototype.

$MercuryCanonicalGroupThreadManager_normalizeParticipants=function(j){
if(j.indexOf(this.$MercuryCanonicalGroupThreadManager_fbid)===-1)
j.push(this.$MercuryCanonicalGroupThreadManager_fbid);

return j;};
h.prototype.

handleUpdate=function(j){

if(j.mercury_payload)
this.$MercuryCanonicalGroupThreadManager_payloadPreprocessor.handleUpdate(j.mercury_payload);

var k=j.canonical_group;
if(k)
for(var l in k)
this.$MercuryCanonicalGroupThreadManager_addCanonicalGroupResult(l,k[l]);};


h.prototype.

getNow=function(j){
var k=this.$MercuryCanonicalGroupThreadManager_getCanonicalGroupThreadKey
(this.$MercuryCanonicalGroupThreadManager_normalizeParticipants(j));

return this.$MercuryCanonicalGroupThreadManager_canonicalGroupToThreadMap.getResource(k);};
h.prototype.

$MercuryCanonicalGroupThreadManager_registerListeners=function(){
c('Bootloader').loadModules
(["MercuryThreadInformer"],
function(j){
var k=j.getForFBID(this.$MercuryCanonicalGroupThreadManager_fbid),
l=new (c('SubscriptionsHandler'))();
l.addSubscriptions
(k.subscribe('threads-deleted',function(m,n){
for(var o in n)
if(this.$MercuryCanonicalGroupThreadManager_reverseMapping[o]){
this.$MercuryCanonicalGroupThreadManager_canonicalGroupToThreadMap.setResource
(this.$MercuryCanonicalGroupThreadManager_reverseMapping[o],
undefined);

delete this.$MercuryCanonicalGroupThreadManager_reverseMapping[o];}}.


bind(this)));

this.$MercuryCanonicalGroupThreadManager_subscriptions=l;}.
bind(this),'MercuryCanonicalGroupThreadManager');};




var i=
new (c('MercurySingletonProvider'))(h);

f.exports=h;}),null);

/** js/mercury/utils/MercuryMessageList.js */





__d('MercuryMessageList',['immutable','LogHistory','Map','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g){

'use strict';







var h=c('LogHistory').getInstance('mercury_message_list');










function i(k){
this.$MercuryMessageList_messages=c('immutable').List(k||[]);
this.$MercuryMessageList_constructIndexMap();}
i.prototype.





append=function(k){var l;
this.$MercuryMessageList_messages=(l=this.$MercuryMessageList_messages).push.apply(l,k);
this.$MercuryMessageList_constructIndexMap();

j('append',k);};
i.prototype.





prepend=function(k){var l;
this.$MercuryMessageList_messages=(l=this.$MercuryMessageList_messages).unshift.apply(l,k);
this.$MercuryMessageList_constructIndexMap();

j('prepend',k);};
i.prototype.





update=function(k){
var l=k.filter(function(m){return this.contains(m);}.bind(this));
if(l.length===0)
return;


this.$MercuryMessageList_messages=this.$MercuryMessageList_messages.withMutations(function(m){
l.forEach(function(n){
var o=this.$MercuryMessageList_indices.get(n.message_id);
if(o!==undefined)
m.set(o,n);}.

bind(this));}.
bind(this));

j('update',l);};
i.prototype.





reorder=function(k){

this.$MercuryMessageList_messages=c('immutable').List(k.filter(Boolean));
this.$MercuryMessageList_constructIndexMap();

j('reorder',k);};
i.prototype.






at=function(k){
return this.$MercuryMessageList_messages.get(k);};
i.prototype.






contains=function(k){
return this.$MercuryMessageList_indices.has(k.message_id);};
i.prototype.





toArray=function(){
return this.$MercuryMessageList_messages.toArray();};
i.prototype.





toMap=function(){
return new (c('Map'))
(c('immutable').Seq(this.$MercuryMessageList_messages).map
(function(k){return [k.message_id,k];}));};


i.prototype.




$MercuryMessageList_constructIndexMap=function(){
this.$MercuryMessageList_indices=new (c('Map'))
(c('immutable').Seq(this.$MercuryMessageList_messages).map
(function(k,l){return [k.message_id,l];}));};





function j(event,k){
c('setTimeoutAcrossTransitions')(function(){
h.debug(event,JSON.stringify
({messageIDs:k.map(function(l){return l.message_id;})}));},

0);}


f.exports=i;}),null);

/** js/mercury/models/MercuryMessageStore.js */






__d('MercuryMessageStore',['MercuryAPIArgsSource','LogHistory','MercuryMessages','MercuryViewer','MercuryMessageList','SubscriptionsHandler','MercuryThreadInformer','MercuryThreadlistConstants','MercuryThreads','mixInEventEmitter','setImmediate','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g){

'use strict';









var h=c('MercuryThreads').get(),





i=c('LogHistory').getInstance('mercury_message_store');































function j(l,m,n){
this.$MercuryMessageStore_threadID=l;
this.$MercuryMessageStore_messages=new (c('MercuryMessageList'))();
this.$MercuryMessageStore_mercuryMessages=n?c('MercuryMessages').getForFBID(n):c('MercuryMessages').get();
this.$MercuryMessageStore_fetchMultiplier=1;
this.$MercuryMessageStore_earliestMessageTimestamp=null;
this.$MercuryMessageStore_messageCount=0;

this.$MercuryMessageStore_limit=m||c('MercuryThreadlistConstants').RECENT_MESSAGES_LIMIT;
this.$MercuryMessageStore_threadInformer=n?
c('MercuryThreadInformer').getForFBID(n):
c('MercuryThreadInformer').get();
this.$MercuryMessageStore_subscriptions=new (c('SubscriptionsHandler'))();
this.$MercuryMessageStore_subscriptions.addSubscriptions
(this.$MercuryMessageStore_threadInformer.subscribe
('messages-received',
function(o,p){return this.$MercuryMessageStore_handleReceived(p);}.bind(this)),

this.$MercuryMessageStore_threadInformer.subscribe
('messages-updated',
function(o,p){return p[this.$MercuryMessageStore_threadID]&&
this.$MercuryMessageStore_handleChanged(p[this.$MercuryMessageStore_threadID]);}.bind(this)),

this.$MercuryMessageStore_threadInformer.subscribe
('messages-reordered',
function(o,p){return p[this.$MercuryMessageStore_threadID]&&
this.$MercuryMessageStore_handleReordered();}.bind(this)),

this.$MercuryMessageStore_threadInformer.subscribe
('thread-invalidated',
function(o,p){return p[this.$MercuryMessageStore_threadID]&&
this.$MercuryMessageStore_handleThreadInvalidated();}.bind(this)));



i.debug('constructed',JSON.stringify({threadID:this.$MercuryMessageStore_threadID}));
this.$MercuryMessageStore_fetchMoreMessages();}
j.prototype.











setNewThreadID=function(l){
this.$MercuryMessageStore_newThreadID=l;};
j.prototype.




destroy=function(){
this.$MercuryMessageStore_subscriptions&&this.$MercuryMessageStore_subscriptions.release();
i.debug('destroyed',JSON.stringify({threadID:this.$MercuryMessageStore_threadID}));};
j.prototype.







subscribe=function(l){
return this.addRetroactiveListener('updated',l);};
j.prototype.







fetchMoreMessages=function(){
if(this.hasFetchedAll())
return false;

this.$MercuryMessageStore_fetchMoreMessages();
return true;};
j.prototype.





hasFetchedAll=function(){
if(this.$MercuryMessageStore_mercuryMessages.hasLoadedExactlyNMessages
(this.$MercuryMessageStore_threadID,
this.$MercuryMessageStore_messageCount)&&
this.$MercuryMessageStore_mercuryMessages.hasLoadedAllMessages(this.$MercuryMessageStore_threadID))
return true;

return h.isNewEmptyLocalThread(this.$MercuryMessageStore_threadID);};
j.prototype.





$MercuryMessageStore_fetchMoreMessages=function(){
var l=
this.$MercuryMessageStore_messageCount+
this.$MercuryMessageStore_limit*
this.$MercuryMessageStore_fetchMultiplier;

i.debug('fetching',JSON.stringify
({threadID:this.$MercuryMessageStore_threadID,
limit:l}));

this.$MercuryMessageStore_mercuryMessages.getThreadMessagesRange
(this.$MercuryMessageStore_threadID,
0,
l,
this.$MercuryMessageStore_handleFetched.bind(this),
null,
c('MercuryAPIArgsSource').MERCURY);


if(this.$MercuryMessageStore_fetchMultiplier<10)
this.$MercuryMessageStore_fetchMultiplier+=1;


if(this.$MercuryMessageStore_mercuryMessages.hasLoadedNMessages(this.$MercuryMessageStore_threadID,l))


c('setImmediate')(function(){
this.$MercuryMessageStore_handleReordered();}.
bind(this));};

j.prototype.

$MercuryMessageStore_handleFetched=function(l){




if(l&&l.length){
this.$MercuryMessageStore_earliestMessageTimestamp=l[0].timestamp;
this.$MercuryMessageStore_messageCount=l.length;

i.debug('fetched',JSON.stringify
({threadID:this.$MercuryMessageStore_threadID,
earliestMessageTimestamp:this.$MercuryMessageStore_earliestMessageTimestamp,
count:this.$MercuryMessageStore_messageCount}));}else


if(l&&
!l.length&&
!this.$MercuryMessageStore_messageCount)



this.$MercuryMessageStore_emitChange(j.THREAD_IS_EMPTY);};


j.prototype.

$MercuryMessageStore_handleReceived=function(l){
var m=[],

n=l[this.$MercuryMessageStore_threadID];
if(n&&n.length)
m=m.concat
(n.filter(function(q){return !!q;}));





if(this.$MercuryMessageStore_newThreadID){
var o=l[this.$MercuryMessageStore_newThreadID];
if(o&&o.length){
m=m.concat
(o.filter(function(q){return !!q;}));

this.$MercuryMessageStore_newThreadID=null;}}



if(m.length){
this.$MercuryMessageStore_messages.append(m);
this.$MercuryMessageStore_messageCount+=m.length;
var p=m.every
(function(q){return q.author!=c('MercuryViewer').getID();});


this.$MercuryMessageStore_emitChange(j.MESSAGES_RECEIVED,
{allFromOthers:p});}};


j.prototype.

$MercuryMessageStore_handleChanged=function(l){
this.$MercuryMessageStore_messages.update
(this.$MercuryMessageStore_mercuryMessages.getMessagesFromIDs(Object.keys(l)));


this.$MercuryMessageStore_updateEarliestMessageTimestamp();
this.$MercuryMessageStore_emitChange(j.MESSAGES_CHANGED);};
j.prototype.

$MercuryMessageStore_handleReordered=function(){
if(!this.$MercuryMessageStore_earliestMessageTimestamp)
return;


this.$MercuryMessageStore_messages.reorder
(this.$MercuryMessageStore_mercuryMessages.getThreadMessagesSinceTimestamp
(this.$MercuryMessageStore_threadID,
this.$MercuryMessageStore_earliestMessageTimestamp));



this.$MercuryMessageStore_updateEarliestMessageTimestamp();
this.$MercuryMessageStore_emitChange(j.MESSAGES_REORDERED);};
j.prototype.

$MercuryMessageStore_handleThreadInvalidated=function(){


this.$MercuryMessageStore_messages=new (c('MercuryMessageList'))();
this.$MercuryMessageStore_fetchMultiplier=1;
this.$MercuryMessageStore_earliestMessageTimestamp=null;
this.$MercuryMessageStore_messageCount=0;


this.$MercuryMessageStore_fetchMoreMessages();};
j.prototype.

$MercuryMessageStore_emitChange=function(l,m){
var n=this.$MercuryMessageStore_messages.toArray();

this.releaseHeldEventType('updated');
this.emitAndHold('updated',babelHelpers['extends']
({messages:n,
eventType:l},
m));


k(this.$MercuryMessageStore_threadID,l,n);};
j.prototype.

$MercuryMessageStore_updateEarliestMessageTimestamp=function(){
var l=this.$MercuryMessageStore_messages.at(0);
if(l)
this.$MercuryMessageStore_earliestMessageTimestamp=l.timestamp;};




function k(l,m,n){
c('setTimeoutAcrossTransitions')(function(){
i.debug('update:'+m,JSON.stringify
({threadID:l,
messageIDs:n.map(function(o){return o.message_id;})}));},

0);}


Object.assign(j,
{MESSAGES_FETCHED:'fetched',
MESSAGES_CHANGED:'changed',
MESSAGES_RECEIVED:'received',
MESSAGES_REORDERED:'reordered',
THREAD_IS_EMPTY:'thread-is-empty'});


c('mixInEventEmitter')(j,{updated:true});

f.exports=j;}),null);

/** js/mercury/utils/getPageIDFromThreadID.js */








__d('getPageIDFromThreadID',['FBID','MercuryIDs'],(function a(b,c,d,e,f,g){

'use strict';




function h(i){
var j=c('MercuryIDs').getUserIDFromThreadID(i);
if(!j||c('FBID').isUser(j))
return null;


return j;}


f.exports=h;}),null);

/** js/messaging/MessagesViewer.js */




__d('MessagesViewer',['AsyncRequest','DOM','MessagesViewerSetID','PhotoStore','React','ReactDOM','emptyFunction','ge'],(function a(b,c,d,e,f,g){











var h=
{renderSpotlight:function j(k,l,m,n){
var o=k.setID;
if(!o)
o=c('MessagesViewerSetID').MESSAGES;


i
(c('React').createElement(m,
{actorid:k.actorid,
dimensions:[k.dimensions],
disablepaging:k.disablePaging,
disableForward:k.disableForward,
forwardDialogComponent:n,
open:true,
photoid:k.fbid,
reverse:false,
rootClassName:k.rootClassName,
setid:o,
snapToPhoto:k.snapToPhoto,
thumbsrc:k.src}));



if(!c('PhotoStore').hasBeenCreated(o)&&k.endpoint){
var p=new (c('AsyncRequest'))(k.endpoint);
if(l)
p.setRelativeTo(l);

p.send();}},



renderVideo:function j(k){
i(k);}};



function i(j){
var k=c('ge')('messages_viewer');
if(!k){
k=c('DOM').create('div',{id:'messages_viewer'});
document.body.appendChild(k);}

c('ReactDOM').render(j,k,function(){
this.subscribeOnce('close',function(){
c('ReactDOM').unmountComponentAtNode(k);});});}




f.exports=h;}),null);

/** js/stickers/dispatcher/StickersDispatcher.js */






__d('StickersDispatcher',['ExplicitRegistrationDispatcher'],(function a(b,c,d,e,f,g){

'use strict';



f.exports=new (c('ExplicitRegistrationDispatcher'))({strict:false});}),null);

/** js/stickers/actions/StickersActions.js */






__d('StickersActions',['StickersDispatcher','keyMirror'],(function a(b,c,d,e,f,g){

'use strict';





var h=c('keyMirror')
({ADD_RECENT_STICKER:null,
HIDE_FLYOUT:null,
LOAD_RECENT_STICKERS:null,
SELECT_STORE_PACK:null,
SELECT_TRAY_PACK:null,
SHOW_FLYOUT:null,
TRAY_LOADED:null}),


i=
{Types:h,

addRecentSticker:function j(k){
c('StickersDispatcher').dispatch
({type:h.ADD_RECENT_STICKER,
sticker:k});},



hideStickerFlyout:function j(){
c('StickersDispatcher').dispatch
({type:h.HIDE_FLYOUT});},



loadRecentStickers:function j(k){
c('StickersDispatcher').dispatch
({type:h.LOAD_RECENT_STICKERS,
stickers:k});},



selectStorePack:function j(k){
c('StickersDispatcher').dispatch
({type:h.SELECT_STORE_PACK,
packID:k});},



selectTrayPack:function j(k){
c('StickersDispatcher').dispatch
({type:h.SELECT_TRAY_PACK,
packID:k});},



showStickerFlyout:function j(k){
c('StickersDispatcher').dispatch
({type:h.SHOW_FLYOUT,
threadID:k});},



trayLoaded:function j(){
c('StickersDispatcher').dispatch
({type:h.TRAY_LOADED});}};




f.exports=i;}),null);

/** js/stickers/store/StickersStateStore.js */






__d('StickersStateStore',['FluxReduceStore','immutable','PresenceState','StickersActions','StickersConfig','StickersDispatcher'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits










(j,c('FluxReduceStore'));i=h&&h.prototype;j.prototype.

getInitialState=function(){
var k=c('PresenceState').get();
return new (c('immutable').Map)
({recentStickers:[],
recentStickersLoaded:false,
showFlyout:false,
storePackID:null,
threadID:null,
trayLoaded:false,
trayPackID:k?k.tray_pack_id:null});};

j.prototype.

reduce=function(k,l){
var m=l,
n=c('StickersActions').Types;
switch(m.type){
case n.ADD_RECENT_STICKER:
var o=[m.sticker];
k.get('recentStickers').forEach(function(p){
if(p.id===m.sticker.id)
return;

o.push(p);});

return k.set
('recentStickers',
o.splice(0,c('StickersConfig').max_mru_stickers));

case n.HIDE_FLYOUT:
return k.set('showFlyout',false);
case n.LOAD_RECENT_STICKERS:
return k.
set('recentStickersLoaded',true).
set('recentStickers',m.stickers);
case n.SELECT_STORE_PACK:
return k.set('storePackID',m.packID);
case n.SELECT_TRAY_PACK:
return k.
set('trayPackID',m.packID).
set('trayLoaded',true);
case n.SHOW_FLYOUT:
return k.
set('showFlyout',true).
set('threadID',m.threadID);
case n.TRAY_LOADED:
return k.set('trayLoaded',true);

default:return k;}};

function j(){h.apply(this,arguments);}



f.exports=new j(c('StickersDispatcher'));}),null);
