if (self.CavalryLogger) { CavalryLogger.start_js(["Bj6ba"]); }

/** __static_js_modules__/messagingthreadeventtype.js */




__d("MessagingThreadEventType",[],(function a(b,c,d,e,f,g){

f.exports={ACTIVE:"active",INACTIVE:"inactive"};}),

null);

/** __static_js_modules__/messagingthreadsourcename.js */




__d("MessagingThreadSourceName",[],(function a(b,c,d,e,f,g){

f.exports={CHAT_NUB:"chat_nub",MESSENGER:"messenger"};}),

null);

/** __static_js_modules__/mnbotsloggerevents.js */




__d("MNBotsLoggerEvents",[],(function a(b,c,d,e,f,g){

f.exports={BOT_COMPOSER_MENU_ICON_DISPLAYED:"bot_composer_menu_icon_displayed",BOT_COMPOSER_MENU_ICON_TAPPED:"bot_composer_menu_icon_tapped",BOT_COMPOSER_MENU_ITEM_DID_SELECT:"bot_composer_menu_item_did_select",BOT_COMPOSER_QUICK_REPLY_DISPLAYED:"bot_composer_quick_reply_displayed",BOT_COMPOSER_QUICK_REPLY_TAPPED:"bot_composer_quick_reply_tapped"};}),

null);

/** js/components/ReactTextWithEntities/MessengerTextWithEntities.react.js */





__d('MessengerTextWithEntities.react',['Link.react','React','BaseTextWithEntities.react','MessengerTextWithEmoticons.react'],(function a(b,c,d,e,f,g){

'use strict';var h,i;









function j(l){
return l.replace(/<3\b|&hearts;/g,'\u2665');}
h=babelHelpers.inherits
















(k,c('React').Component);i=h&&h.prototype;function k(){var l,m;for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.





$MessengerTextWithEntities_renderText=function(q){
if(this.props.renderEmoticons||this.props.renderEmoji){

return (c('React').createElement(c('MessengerTextWithEmoticons.react'),
{text:q,
customSize:this.props.customSize,
renderEmoticons:this.props.renderEmoticons,
renderEmoji:this.props.renderEmoji}));}else 


return j(q);}.

bind(this),this.

$MessengerTextWithEntities_renderRange=function(q,r){
if(this.props.interpolator){
return this.props.interpolator(q,r);}else 


return (c('React').createElement(c('Link.react'),{href:r.entity},
q));}.



bind(this),m;}k.prototype.

render=function(){

return (c('React').createElement(c('BaseTextWithEntities.react'),babelHelpers['extends']({},
this.props,
{aggregatedRanges:this.props.aggregatedRanges,
imageRanges:this.props.imageRanges,
metaRanges:this.props.metaRanges,
rangeRenderer:this.$MessengerTextWithEntities_renderRange,
ranges:this.props.ranges,
text:this.props.text,
textRenderer:this.$MessengerTextWithEntities_renderText})));};





f.exports=k;}),null);

/** js/emojis/EmojiDispatcher.js */






__d('EmojiDispatcher',['ExplicitRegistrationDispatcher'],(function a(b,c,d,e,f,g){

'use strict';



f.exports=new (c('ExplicitRegistrationDispatcher'))({strict:false});}),null);

/** js/emojis/EmojiActions.js */






__d('EmojiActions',['EmojiDispatcher','keyMirror'],(function a(b,c,d,e,f,g){

'use strict';





var h=c('keyMirror')
({CHANGE_CURRENT_CATEGORY:null,
CHANGE_EMOJI_COLOR:null,
EMOJI_COLOR_READY:null,
GET_EMOJI_COLOR:null,
TRAY_DATA_READY:null,
UPDATE_TRAY_DATA:null}),


i=
{Types:h,

loadedTrayData:function j(){
c('EmojiDispatcher').dispatch
({type:i.Types.TRAY_DATA_READY});},



updateTrayData:function j(){
c('EmojiDispatcher').dispatch
({type:i.Types.UPDATE_TRAY_DATA});},



changeEmojiColor:function j(k){
c('EmojiDispatcher').dispatch
({type:i.Types.CHANGE_EMOJI_COLOR,
color:k});},



changeCurrentCategory:function j(k){
c('EmojiDispatcher').dispatch
({type:i.Types.CHANGE_CURRENT_CATEGORY,
currentCategory:k});},



getEmojiColor:function j(){
c('EmojiDispatcher').dispatch
({type:i.Types.GET_EMOJI_COLOR});},



emojiColorReady:function j(k){
c('EmojiDispatcher').dispatch
({type:i.Types.EMOJI_COLOR_READY,
color:k});}};



f.exports=i;}),null);

/** www/__virtual__/x/XMessagingGetEmojiRecentUsageController.js */



__d("XMessagingGetEmojiRecentUsageController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/messaging\/emoji_recent_usage\/",{});}),

null);

/** js/emojis/EmojiServerRequests.js */






__d('EmojiServerRequests',['Promise','AsyncRequest','XMessagingGetEmojiRecentUsageController'],(function a(b,c,d,e,f,g){

'use strict';






var h=

{fetchTrayData:function j(k){
return i
(c('XMessagingGetEmojiRecentUsageController').getURIBuilder().getURI(),
k,
true);}};





function i(j,k,l){
return new (c('Promise'))(function(m,n){
return (new (c('AsyncRequest'))(j).setHandler
(function(o){return m(o.getPayload());}).
setAllowCrossPageTransition(l).send());}).
then(k);}


f.exports=h;}),null);

/** www/__virtual__/x/XMessagingGetEmojiColorPrefController.js */



__d("XMessagingGetEmojiColorPrefController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/messaging\/get_emoji_color\/",{});}),

null);

/** www/__virtual__/x/XMessagingSetEmojiColorPrefController.js */



__d("XMessagingSetEmojiColorPrefController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/messaging\/set_emoji_color\/",{});}),

null);

/** js/emojis/EmojiState.js */






__d('EmojiState',['fbt','AsyncRequest','EmojiActions','EmojiServerRequests','MessengerSupportedEmojiUtils','XMessagingGetEmojiColorPrefController','XMessagingSetEmojiColorPrefController'],(function a(b,c,d,e,f,g,h){

'use strict';














var i=null,
j=null,
k=void 0,

l=

{onTrayDataReady:function m(n){
if(!k)
k=c('EmojiServerRequests').fetchTrayData(function(o){
j=o;});



k.then
(function(){
n();
c('EmojiActions').loadedTrayData();});


k.done();},


getEmojiColor:function m(){
var n=c('XMessagingGetEmojiColorPrefController').
getURIBuilder().
getURI();
new (c('AsyncRequest'))(n).
setMethod('POST').
setHandler(function(o){
c('EmojiActions').emojiColorReady(o.payload);}).

send();},


changeEmojiColor:function m(n){
var o=c('XMessagingSetEmojiColorPrefController').
getURIBuilder().
getURI();

new (c('AsyncRequest'))(o).
setMethod('POST').
setData({color:n}).
send();},


addMRUCategory:function m(){
if(j){
var n=j.map(function(o){
return (c('MessengerSupportedEmojiUtils').getSupportedEmojiCodesArray(o));}).
filter(function(o){return !!o;});
i=
{name:h._(["Recently Sent","bc9e280d89f05dd2b20c1204316946fe"]),




emojis:n,
icon:[128340]};

c('EmojiActions').updateTrayData();
j=null;}},



_addRecentlyUsedEmoji:function m(n){var o,
p=i&&i.emojis;
if(!p)
return;
var q=function s
(t){
var u=n[t];
for(var v=0;v<p.length;++v)
if(p[v].length==u.length&&
p[v].every(function(w,x){
return w===u[x];})){

p.splice(v,1);
break;}


p.unshift(u);};for(var r=0;r<n.length;++r)q(r);

c('EmojiActions').updateTrayData();},


getMRUCategory:function m(){
if(!i)
this.addMRUCategory();

return i;},


updateRecentlyUsed:function m(n){
if(!i){
this.addMRUCategory();
return;}

this._addRecentlyUsedEmoji(n);}};



f.exports=l;}),null);

/** js/logging/generated/MessengerBotsWebTypedLogger.js */





__d('MessengerBotsWebTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){
'use strict';



















function h(){
this.clear();}
h.prototype.





log=function(){
c('GeneratedLoggerUtils').log('logger:MessengerBotsWebLoggerConfig',this.$MessengerBotsWebTypedLogger_data,c('Banzai').BASIC);};
h.prototype.







logVital=function(){
c('GeneratedLoggerUtils').log('logger:MessengerBotsWebLoggerConfig',this.$MessengerBotsWebTypedLogger_data,c('Banzai').VITAL);};
h.prototype.




clear=function(){
this.$MessengerBotsWebTypedLogger_data={};
return this;};
h.prototype.






updateData=function(j){








this.$MessengerBotsWebTypedLogger_data=babelHelpers['extends']({},
this.$MessengerBotsWebTypedLogger_data,
j);

return this;};
h.prototype.




setCount=function(j){
this.$MessengerBotsWebTypedLogger_data.count=j;
return this;};
h.prototype.




setEvent=function(j){
this.$MessengerBotsWebTypedLogger_data.event=j;
return this;};
h.prototype.




setIndex=function(j){
this.$MessengerBotsWebTypedLogger_data.index=j;
return this;};
h.prototype.




setPageID=function(j){
this.$MessengerBotsWebTypedLogger_data.page_id=j;
return this;};
h.prototype.




setPayload=function(j){
this.$MessengerBotsWebTypedLogger_data.payload=j;
return this;};
h.prototype.




setTitle=function(j){
this.$MessengerBotsWebTypedLogger_data.title=j;
return this;};
h.prototype.




setTitles=function(j){
this.$MessengerBotsWebTypedLogger_data.titles=c('GeneratedLoggerUtils').serializeVector(j);
return this;};
h.prototype.




setType=function(j){
this.$MessengerBotsWebTypedLogger_data.type=j;
return this;};
h.prototype.




setURL=function(j){
this.$MessengerBotsWebTypedLogger_data.url=j;
return this;};
h.prototype.




setVC=function(j){
this.$MessengerBotsWebTypedLogger_data.vc=j;
return this;};


























var i=
{count:true,
event:true,
index:true,
page_id:true,
payload:true,
title:true,
titles:true,
type:true,
url:true,
vc:true};


f.exports=h;}),null);

/** js/mercury/attachments/MercuryAttachmentViewer.js */






__d('MercuryAttachmentViewer',['Bootloader','MessagesViewer','React','Run','emptyFunction'],(function a(b,c,d,e,f,g){

'use strict';








var h=

{renderVideo:function i(j){
c('Bootloader').loadModules
(["MessagingVideoViewer.react","MessagingForwardAttachmentDialog.react"],
function(k,l){
c('MessagesViewer').renderVideo
(c('React').createElement(k,babelHelpers['extends']({},
j,
{forwardDialogComponent:l})));},


'MercuryAttachmentViewer');},



bootstrapWithConfig:function i(j,k){
c('Bootloader').loadModules
(["SpotlightMessagesViewer","MessagingForwardAttachmentDialog.react"],
function(l,m){
c('MessagesViewer').renderSpotlight
(j,
k,
l,
m);},

'MercuryAttachmentViewer');},



preload:function i(){
c('Run').onAfterLoad(function(){
c('Bootloader').loadModules
(["MessagingVideoViewer.react","SpotlightMessagesViewer","MessagingForwardAttachmentDialog.react"],c('emptyFunction'),'MercuryAttachmentViewer');});}};










f.exports=h;}),null);

/** js/mercury/clients/chat/components/ChatFlyoutPlaceholder.react.js */






__d('ChatFlyoutPlaceholder.react',['React','XUISpinner.react'],(function a(b,c,d,e,f,g){

'use strict';




var h={padding:'30px',textAlign:'center'},

i=function j(){
return (c('React').createElement('div',{style:h},
c('React').createElement(c('XUISpinner.react'),{size:'large'})));};


f.exports=i;}),null);

/** js/mercury/clients/messenger/MessengerAdminGroupUtils.js */







__d('MessengerAdminGroupUtils',['fbt','MercuryConfig','MercuryIDs','MessengerApprovalModeTypes','MessengerJoinableModeType','WorkModeConfig'],(function a(b,c,d,e,f,g,h){

'use strict';











var i=
{isJoinableAndOpenThread:function j(k){
return this.isJoinableThread(k)&&this.isApprovalOpenThread(k);},


isJoinableAndApprovalRequiredThread:function j(k){
return !!(this.isJoinableThread(k)&&
k&&
k.approval_mode===c('MessengerApprovalModeTypes').APPROVALS);},


shouldAddToApprovalQueue:function j
(k,
l){


return !!(this.isJoinableAndApprovalRequiredThread(k)&&
k&&
!i.isViewerAdmin(k.admin_ids,l));},



isJoinableThread:function j(k){

return !!(c('MercuryConfig').WWWJoinableMasterGK&&
k&&
k.is_thread_queue_enabled===true&&
k.joinable_mode&&
k.joinable_mode.mode===c('MessengerJoinableModeType').JOINABLE);},



isApprovalOpenThread:function j(k){

return !!(c('MercuryConfig').WWWJoinableMasterGK&&
k&&
k.approval_mode===c('MessengerApprovalModeTypes').OPEN);},



isOwner:function j(k,l){
return k&&this.isJoinableThread(l);},


canSeeGroupOptions:function j
(k,
l,
m){

var n=c('WorkModeConfig').is_work_user;
return !n&&this.isJoinableThread(l);},


canMakeOthersAdmins:function j
(k,
l,
m){

return this.isOwner(k,m)&&!l;},


canMakeSelfAdmin:function j
(k,
l){

return this.isJoinableThread(l)&&
l.admin_ids.length===0&&
k;},


canRemoveAdmin:function j
(k,
l,
m){

return this.isOwner(k,m)&&l;},


canRemoveFromGroup:function j
(k,
l){

return this.isOwner(k,l)||
!this.isJoinableThread(l);},


showJoinableLink:function j(k){
var l=
!!(k&&k.joinable_mode&&k.joinable_mode.link),

m=i.isJoinableThread(k);

return m&&l;},


showJoinableApprovalToggle:function j
(k,
l){

var m=i.isViewerAdmin
(k.admin_ids,
l);


return i.isOwner(m,k);},


showApprovalQueue:function j(k,l){
var m=i.isViewerAdmin
(k.admin_ids,
l),

n=i.isOwner(m,k),

o=0;
if(k&&
k.approval_queue_ids&&
k.approval_queue_ids.length)
o=k.approval_queue_ids.length;


var p=i.
isJoinableAndApprovalRequiredThread(k);


return (p&&n&&o>0);},



showParticipantsModal:function j
(k,
l,
m){

return this.isJoinableThread(m)&&
!k&&
!l;},


canUpdateThreadCustomization:function j
(k,
l){

var m=i.isJoinableThread(k),
n=i.isViewerAdmin
(k.admin_ids,
l);

return k.is_subscribed&&
(m&&n||!m);},


isViewerAdmin:function j
(k,
l){

return this.isAdmin
(k,
c('MercuryIDs').getParticipantIDFromUserID(l));},



isAdmin:function j(k,l){
return k!==null&&
k!==undefined&&
k.indexOf(l)!==-1;},


getLeaveGroupBodyText:function j
(k,
l){

return this.isOwner(k,l)?h._(["Leaving this group will remove you as an owner and allow other members to manage the group. You will no longer be able to send or receive new messages.","3908173a3a9b5579fa0e1418caf95cbb"]):h._(["You will stop receiving messages from this conversation and people will see that you left.","a84267727c8a4018f682fb8344d2ff98"]);},











getLeaveGroupTitleText:function j
(k,
l){

return this.isOwner(k,l)?h._(["Leave this conversation?","99935dc0c2d7d5a93b8cf9f91ebd6a40"]):h._(["Leave Conversation?","780d3ea47ad66c7c413c78d1b6df98b6"]);},









getLeaveGroupButtonText:function j
(k,
l){

return this.isOwner(k,l)?h._(["Leave converstaion","2bc25b54cf53c5c0796d0ace87a7b9ea"]):h._(["Leave","6d93ec118730d22e492fdd7622ca9823"]);},








getMakeOwnerBodyText:function j(k,l){
return k?h._(["As a group owner, you will be able to manage group ownership and remove members from the conversation. Only owners will be able to add other owners.","cc0b384db5070eae0b1b124e28a43f42"]):h._(["As a group owner, \"{owner's name}\" will be able to manage group ownership and remove members from the conversation. They will be able to remove ownership from other owners.","1bafce424beda34c4c3c9e35d3f8d968"],[h.param









('owner\'s name',l)]);},





getMakeOwnerTitleText:function j(k){
return k?h._(["Become group owner?","35da9a7ab359ad15aef5c10c545c4813"]):h._(["Add group owner?","ce6dcf37473b09e232e6180e9d16e1f3"]);},








getMakeOwnerButtonText:function j(k){
return k?h._(["Become owner","1b92125c5946aa7b78d021f9ec8214cb"]):h._(["Make owner","58a23c4f1dfa73b2cb9514135f86d44d"]);},








getRemoveOwnerBodyText:function j
(k,
l,
m){

var n=void 0;
if(k&&l){
n=h._(["You will no longer manage group ownership and remove members from this conversation. You will still be a participant in the group. Any other member will be able to own the group.","b92f598eda223d197ea3312b9dd2deab"]);}else






if(k&&!l){
n=h._(["You will no longer manage group ownership and remove members from this conversation. You will still be a participant in the group.","fffa0f0e54a4b458e332960d24904285"]);}else 






n=h._(["\"{owner's name}\" will no longer manage group ownership and remove members from the conversation. They will still be a participant in the group.","816430b2871c91e488f98a2b5bfffc9d"],[h.param

('owner\'s name',m)]);




return n;}};



f.exports=i;}),null);

/** js/mercury/clients/messenger/data_managers/commerce/MNPlatformAttributionTags.js */






__d('MNPlatformAttributionTags',[],(function a(b,c,d,e,f,g){

f.exports=
{ATTRIBUTION_TAGS_PREFIX:'bnp:trigger:',
MESSENGER_WEB:'messenger_web',
MESSENGER_WEB_SEARCH:'messenger_web_search',
M_DOT_ME:'m_dot_me'};}),null);

/** js/mercury/clients/messenger/stores/MessengerStore.js */





__d('MessengerStore',['MessengerDispatcher','mixInEventEmitter'],(function a(b,c,d,e,f,g){

'use strict';






function h(){
this.$MessengerStore_token=c('MessengerDispatcher').register
(this.__onDispatch.bind(this));}

h.prototype.

getDispatchToken=function(){
return this.$MessengerStore_token;};
h.prototype.

emitChange=function(){
this.emit('change');};
h.prototype.

destroy=function(){
c('MessengerDispatcher').unregister(this.$MessengerStore_token);};



c('mixInEventEmitter')(h,
{change:true});


f.exports=h;}),null);

/** js/mercury/clients/messenger/stores/MessengerAttributionTagsStore.js */






__d('MessengerAttributionTagsStore',['MessengerActions','MessengerStore'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits




(j,c('MessengerStore'));i=h&&h.prototype;


function j(){'use strict';
i.constructor.call(this);
this.$MessengerAttributionTagsStore_state=
{messagingTags:null,
threadID:null};}

j.prototype.

getState=function(){'use strict';
return this.$MessengerAttributionTagsStore_state;};
j.prototype.

__onDispatch=function(k){'use strict';
switch(k.type){
case c('MessengerActions').Types.UPDATE_THREAD_TAG:
this.$MessengerAttributionTagsStore_state.messagingTags=k.messagingTags;
this.$MessengerAttributionTagsStore_state.threadID=k.threadID;
this.emitChange();
break;

case c('MessengerActions').Types.SELECT_THREAD:
this.$MessengerAttributionTagsStore_state.messagingTags=null;
this.$MessengerAttributionTagsStore_state.threadID=null;
this.emitChange();
break;}};









f.exports=new j();}),null);

/** js/mercury/clients/messenger/data_managers/commerce/MNPlatformTagsDataManager.js */






__d('MNPlatformTagsDataManager',['MessagingSourceEnum','MessengerActions','MessengerAttributionTagsStore','MNPlatformAttributionTags'],(function a(b,c,d,e,f,g){

'use strict';





f.exports=
{getTags:function h(){var i=arguments.length<=0||arguments[0]===undefined?null:arguments[0],
j=null;
switch(i){
case c('MessagingSourceEnum').PAGES_MESSAGE_SHORTLINK:
j=c('MNPlatformAttributionTags').M_DOT_ME;
break;

case c('MessagingSourceEnum').MESSENGER_WEB:
j=c('MNPlatformAttributionTags').MESSENGER_WEB;
break;

case c('MessagingSourceEnum').MESSENGER_WEB_SEARCH:
j=c('MNPlatformAttributionTags').MESSENGER_WEB_SEARCH;
break;


default:j='';
break;}


if(j!=='')
j=c('MNPlatformAttributionTags').ATTRIBUTION_TAGS_PREFIX+j;


return [j];},


updateThreadTabAfterSelectThread:function h(){


var i=arguments.length<=0||arguments[0]===undefined?null:arguments[0],j=arguments.length<=1||arguments[1]===undefined?null:arguments[1],
k=this.getTags(i);
c('MessengerActions').changeThreadTag(k,j);},


hasThreadTags:function h
(i){

var j=c('MessengerAttributionTagsStore').getState();

return !!(j.messagingTags&&
i&&
j.threadID&&
j.threadID.toString()===i);},



getThreadTags:function h(){
var i=c('MessengerAttributionTagsStore').getState();
return i.messagingTags;}};}),
null);

/** www/__virtual__/x/XMNCommercePostbackCTAController.js */



__d("XMNCommercePostbackCTAController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/messages\/commerce\/postback\/",{cta_id:{type:"String",required:true},message_id:{type:"String"},ref:{type:"String"},ref_source:{type:"Enum",enumType:1},ref_type:{type:"Enum",enumType:1}});}),

null);

/** js/mercury/clients/messenger/data_managers/commerce/MNCommercePostbackCTADataManager.js */






__d('MNCommercePostbackCTADataManager',['AsyncRequest','BanzaiODS','CurrentUser','getPageIDFromThreadID','MercuryConfig','MercuryMessageActions','MercuryMessageObject','MercurySourceType','MNPlatformTagsDataManager','XMNCommercePostbackCTAController'],(function a(b,c,d,e,f,g){

'use strict';






var h=c('MercuryMessageActions').get();i.prototype.






send=
function(j){



var k=arguments.length<=1||arguments[1]===undefined?null:arguments[1],l=arguments.length<=2||arguments[2]===undefined?null:arguments[2],m=arguments.length<=3||arguments[3]===undefined?null:arguments[3],
n=c('XMNCommercePostbackCTAController').getURIBuilder().
setString('cta_id',j).
setString('ref',l).
setString('message_id',m).
getURI();

if(k!==null){
new (c('AsyncRequest'))().
setURI(n).
setMethod('post').
setErrorHandler(k).
send();}else 

new (c('AsyncRequest'))().
setURI(n).
setMethod('post').
send();};

i.prototype.

sendAndConfirm=
function(j,
k,
l,
m){




var n=arguments.length<=4||arguments[4]===undefined?null:arguments[4],o=arguments.length<=5||arguments[5]===undefined?null:arguments[5],p=arguments.length<=6||arguments[6]===undefined?[]:arguments[6],q=arguments.length<=7||arguments[7]===undefined?null:arguments[7];
if(k!==null)
this.sendConfirmationText(k,l,m,p);

this.send(j,n,o,q);};
i.prototype.

sendConfirmationText=
function(j,
k,
l){

if(!k){

c('BanzaiODS').bumpEntityKey
('messenger_commerce',
'confirm_message_failed.empty_threadID');}else{


var m=new (c('MercuryMessageObject'))(c('CurrentUser').getID()),
n=[],

o=c('getPageIDFromThreadID')(k);
if(c('MNPlatformTagsDataManager').hasThreadTags(o))
n=c('MNPlatformTagsDataManager').getThreadTags();


h.send
(m.constructCTAConfirmationMessageObject
(j,
c('MercurySourceType').TITAN_WEB,
k,
l,
n));


if(n&&n.length>0)
c('MNPlatformTagsDataManager').updateThreadTabAfterSelectThread();}};


function i(){}


f.exports=new i();}),null);

/** js/mercury/clients/shared/EmojiFormat.js */





__d('EmojiFormat',[],(function a(b,c,d,e,f,g){

'use strict';

function h(l){
return l.split('_').map(function(m){return parseInt(m,16);});}


function i(l){
return l.map(function(m){return m.toString(16);}).join('_');}


function j(l){
var m='';
for(var n=0;n<l.length;n++)
m+=String.fromCodePoint(l[n]);

return m;}


function k(l){
var m=this.codeStringToCodeArray(l);
return this.codeArrayToUnicode(m);}


f.exports=
{codeArrayToCodeString:i,
codeArrayToUnicode:j,
codeStringToCodeArray:h,
codeStringToUnicode:k};}),null);

/** js/mercury/clients/shared/MessengerEmojiUsageUtils.js */






__d('MessengerEmojiUsageUtils',['MessengerSupportedEmojiUtils','Utf16'],(function a(b,c,d,e,f,g){

'use strict';




var h=65039,

i=


{findAllEmojis:function j(k){
var l=[],
m=c('MessengerSupportedEmojiUtils').parse(k);

m.forEach(function(n){
var o=n.emoji.map(function(p){return c('Utf16').decode(p);});

o[o.length-1]===h&&o.pop();
l.push(o);});


return l;}};



f.exports=i;}),null);

/** js/mercury/clients/shared/components/MercuryThreadTitle.react.js */




__d('MercuryThreadTitle.react',['fbt','MercuryConfig','MercuryIDs','MessengerTextWithEmoticons.react','MercuryParticipantListRenderer','MercuryParticipants','React','TextWithEmoticons.react'],(function a(b,c,d,e,f,g,h){

'use strict';











var i=c('React').PropTypes,

j=c('React').createClass({displayName:'MercuryThreadTitle',
propTypes:
{isNewThread:i.bool,
thread:i.object.isRequired,
viewer:i.string.isRequired,
showUnreadCount:i.bool,
useShortName:i.bool,
useAndSeparator:i.bool},


getDefaultProps:function k(){

return {isNewThread:false,
showUnreadCount:false,
useShortName:false,
useAndSeparator:false};},



getInitialState:function k(){

return {participantNames:''};},



componentDidMount:function k(){
this._renderParticipantsList(this.props);},


componentWillReceiveProps:function k(l){
this._renderParticipantsList(l);},


render:function k(){

return (c('React').createElement('span',{className:this.props.className},
this.props.thread.name?
this._renderThreadTitle():
this.state.participantNames,
this.props.children));},




getTitle:function k(){
return this.state.participantNames;},


_renderThreadTitle:function k(){
var l=this.props.thread,
m=
c('React').createElement(c('MessengerTextWithEmoticons.react'),
{renderEmoticons:true,
renderEmoji:true,
text:l.name});

if(!l.unread_count||!this.props.showUnreadCount)
return m;


return this._renderTitleWithUnreadCount(m,l.unread_count);},


_renderParticipantsList:function k(l){
if(l.thread.name)
return;


this.setState({participantNames:''});
var m=c('MercuryIDs').getParticipantIDFromUserID(l.viewer),
n=l.thread.participants||[];
if(n.length>1)
n=n.filter(function(o){return o!=m;});


c('MercuryParticipants').getMulti(n,function(o){
if(!this.isMounted())
return;


var p=n.map(function(v){return o[v];}),
q=l.thread.custom_nickname?
{}:
null,
r=c('MessengerTextWithEmoticons.react');
if(q)
for(var s in l.thread.custom_nickname)
q[s]=
c('React').createElement(r,
{renderEmoticons:true,
renderEmoji:true,
text:l.thread.custom_nickname[s]});



var t=new (c('MercuryParticipantListRenderer'))().
setUseShortName(l.useShortName).
setUseAndSeparator(l.useAndSeparator).
setIsNewThread(l.isNewThread).
setNickname(q).
renderParticipantList(p),

u=l.showUnreadCount&&l.thread.unread_count?
this._renderTitleWithUnreadCount(t,l.thread.unread_count):
t;

this.setState({participantNames:u});}.
bind(this));},


_renderTitleWithUnreadCount:function k(l,m){
return h._(["{conversation-title} ({unread-count})","bc9f034a485dc0111f9b2f47f5aff2ae"],[h.param



('conversation-title',l),h.param
('unread-count',m)]);}});





f.exports=j;}),null);

/** js/mercury/indicators/MercuryTypingAnimation.react.js */






__d('MercuryTypingAnimation.react',['cx','React','joinClasses'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,






k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').Component);j=i&&i.prototype;l.prototype.













render=function(){
var m="_4a0v"+

(this.props.color==='light'?' '+"_4a0w":'')+
(this.props.color==='dark'?' '+"_4a0x":'');




return (c('React').createElement('div',{className:c('joinClasses')(this.props.className,m)},
c('React').createElement('div',{className:"_4b0g"},
c('React').createElement('div',{className:"_5pd7"}),
c('React').createElement('div',{className:"_5pd7"}),
c('React').createElement('div',{className:"_5pd7"}))));};



function l(){i.apply(this,arguments);}l.propTypes={color:k.oneOf(['light','dark'])};l.defaultProps={color:'dark'};


f.exports=l;}),null);

/** js/mercury/utils/MercuryTriodeSourceUtil.js */






__d('MercuryTriodeSourceUtil',['MessengerEnvironment','MercurySourceType'],(function a(b,c,d,e,f,g){

'use strict';




var h=




{getMercuryTriodeSource:function i(){
return c('MessengerEnvironment').messengerdotcom?
c('MercurySourceType').MESSENGER_WEB:
c('MercurySourceType').TITAN_WEB;}};



f.exports=h;}),null);

/** js/ui/layer/behaviors/ContextualLayerAutoFlipHorizontal.js */




__d('ContextualLayerAutoFlipHorizontal',['ContextualLayerAutoFlip'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits



(j,c('ContextualLayerAutoFlip'));i=h&&h.prototype;j.prototype.
getValidPositions=function(k){'use strict';
return [k.getPosition()];};
function j(){'use strict';h.apply(this,arguments);}


f.exports=j;}),null);

/** shared/draft-js/component/utils/isSoftNewlineEvent.js */











__d('isSoftNewlineEvent',['Keys'],(function a(b,c,d,e,f,g){

'use strict';



function h(i){
return i.which===c('Keys').RETURN&&
(i.getModifierState('Shift')||
i.getModifierState('Alt')||
i.getModifierState('Control'));}



f.exports=h;}),null);

/** shared/draft-js/model/entity/getTextAfterNearestEntity.js */











__d('getTextAfterNearestEntity',[],(function a(b,c,d,e,f,g){

'use strict';







function h
(i,
j){

var k=j;


while(k>0&&i.getEntityAt(k-1)===null)
k--;


return i.getText().slice(k,j);}


f.exports=h;}),null);

/** www/__virtual__/x/XMNCommercePageNullStateCTAController.js */



__d("XMNCommercePageNullStateCTAController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/messages\/commerce\/page\/nullstate\/",{});}),

null);
