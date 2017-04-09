if (self.CavalryLogger) { CavalryLogger.start_js(["bebM4"]); }

/** js/components/UFI/UFICommentFilterFallbackWarning.react.js */






__d('UFICommentFilterFallbackWarning.react',['cx','fbt','React','UFIPagerGenerator','UFIPaging','WebCommentViewOption','distinctArrayBy'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k;




































function l
(n,
o,
p){


var q=

o.availableComments,r=o.repliesMap,

s=void 0;
if(p){
s=r[n]||[];}else 

s=q||[];








s=c('distinctArrayBy')(s,function(t){return t.id;});

return s.length;}
j=babelHelpers.inherits

(m,c('React').Component);k=j&&j.prototype;m.


shouldRender=
function(n,
o,
p,
q){

if(!n)
return false;



var r=







n.availableComments,s=n.commentCounts,t=n.deletedCounts,u=n.hasPagedToplevel,v=n.orderingMode,w=n.ranges,x=n.repliesExpandedMap,y=n.repliesMap;





if(!r||
!s||
!t||
!v||
!w||
!x||
!y)

return false;


var z=Math.max
((s[o]||0)-(t[o]||0),
0),

aa=w[o];



if(!aa||
!z||
v!==c('WebCommentViewOption').FILTERED||

q&&!x[o]||

!q&&!u)

return false;


var ba=l
(o,
n,
q),


ca=aa.isLoadingPrev(),
da=aa.isLoadingNext(),
ea=aa.getOffset(),
fa=aa.getLength(),

ga=c('UFIPagerGenerator').isBottomPager
(q,
v),


ha=Math.min(fa,z);

if(p===c('UFIPaging').ALL){

return (!ca&&
!da&&
ea===0&&
fa>=z&&
ba<ha);}else


if(!ga&&p===c('UFIPaging').TOP||
ga&&p===c('UFIPaging').BOTTOM){


return (!ca&&
ea===0&&
ba<ha);}else


if(!ga&&p===c('UFIPaging').BOTTOM||
ga&&p===c('UFIPaging').TOP)


return (!da&&
ea+fa>=z&&
ba<ha);



return false;};
m.prototype.

$UFICommentFilterFallbackWarning_renderLabel=function(){var n=



this.props,o=n.asReplyWarning,p=n.ufiProps,q=




p||{},r=q.feedback,s=q.orderingMode,

t=r&&r.orderingmodes||[],
u=t.find(function(w){
return w&&w.value===s;}),

v=u&&u.name;

if(o){
if(v){
return i._(["{ordering mode name} is selected, so some replies may have been filtered out.","27c9cd48c19b79661198269cfe2ad086"],[i.param



('ordering mode name',
v)]);}else 





return i._(["Some replies may have been filtered out by the selected ordering mode.","57095fd3c52a0da109e975750ed2cb4b"]);}else 







if(v){
return i._(["{ordering mode name} is selected, so some comments may have been filtered out.","46ba0234015cd310aa0742923aa01bf1"],[i.param



('ordering mode name',
v)]);}else 





return i._(["Some comments may have been filtered out by the selected ordering mode.","f38d7860749a27a852273ce39e8aeaf4"]);};







m.prototype.

render=function(){var n=





this.props,o=n.ufiProps,p=n.targetID,q=n.pagingDirection,r=n.asReplyWarning;


if(!this.constructor.shouldRender
(o,
p,
q,
r))


return null;



return (c('React').createElement('div',{className:"_2ah8 _4oep UFIRow"},

c('React').createElement('div',{className:"_2ah9"},
this.$UFICommentFilterFallbackWarning_renderLabel())));};



function m(){j.apply(this,arguments);}


f.exports=m;}),null);

/** js/components/core/UI/EmojiInput/EmojiInputButton.react.js */





__d('EmojiInputButton.react',['fbt','Bootloader','FocusRelocator.react','Link.react','React','createCancelableFunction','joinClasses'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,










k=null;i=babelHelpers.inherits












(l,c('React').Component);j=i&&i.prototype;





function l(m){
j.constructor.call(this,m);this.












































$EmojiInputButton_onClick=function(event){
event.preventDefault();
event.stopPropagation();

this.props.onClick&&this.props.onClick();

this.setState
({locked:false,
visible:!this.state.locked?!this.state.visible:false});}.

bind(this);this.

$EmojiInputButton_onMouseDown=function(event){
this.setState
({locked:this.state.visible});}.

bind(this);this.

$EmojiInputButton_onToggle=function(n){
if(!n)
this.setState
({visible:false});}.


bind(this);this.state={locked:false,visible:false};}l.prototype.componentWillUnmount=function(){this.$EmojiInputButton_bootloaderCallback&&this.$EmojiInputButton_bootloaderCallback.cancel();this.$EmojiInputButton_bootloaderCallback=null;};l.prototype.render=function(){var m=h._(["Insert an emoji","de9174a6f769698346b208c31497d3a0"]),n=this.state.visible?c('joinClasses')(this.props.iconActiveClassName,this.props.iconClassName):this.props.iconClassName;return c('React').createElement(c('FocusRelocator.react'),{from:this.$EmojiInputButton_linkRef,to:this.$EmojiInputButton_iconRef},c('React').createElement(c('Link.react'),{'aria-label':m,className:this.props.buttonClassName,'data-hover':'tooltip','data-tooltip-alignh':'center','data-tooltip-content':!this.state.visible?m:null,onClick:this.$EmojiInputButton_onClick,onDragStart:function o(p){return p.preventDefault();},onMouseDown:this.$EmojiInputButton_onMouseDown,linkRef:function(o){return this.$EmojiInputButton_linkRef=o;}.bind(this),role:'button'},c('React').createElement('div',{className:n,ref:function(o){return this.$EmojiInputButton_iconRef=o;}.bind(this)}),this.$EmojiInputButton_renderPicker()));};l.prototype.

$EmojiInputButton_renderPicker=function(){
if(!k){
if(this.state.visible){
this.$EmojiInputButton_bootloaderCallback=c('createCancelableFunction')(function(){
this.forceUpdate();}.
bind(this));

c('Bootloader').loadModules(["EmojiPicker.react"],function(m){
k=m;
if(this.$EmojiInputButton_bootloaderCallback){
this.$EmojiInputButton_bootloaderCallback();
this.$EmojiInputButton_bootloaderCallback=null;}}.

bind(this),'EmojiInputButton.react');}


return null;}



return (c('React').createElement(k,
{context:this.$EmojiInputButton_linkRef,
onToggle:this.$EmojiInputButton_onToggle,
onSelect:this.props.onSelect,
shown:this.state.visible}));};





f.exports=l;}),null);

/** www/__virtual__/x/XPhotosWaterfallBatchLoggingController.js */



__d("XPhotosWaterfallBatchLoggingController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/photos\/logging\/waterfall\/batch\/",{});}),

null);

/** js/photos/modules/PhotosUploadWaterfall.js */





__d('PhotosUploadWaterfall',['AsyncRequest','AsyncSignal','Banzai','PhotosUploadWaterfallXConfig','XPhotosWaterfallBatchLoggingController','emptyFunction','randomInt','throttle'],(function a(b,c,d,e,f,g){











var h=[],




i=
{APP_SIMPLE:'simple',
APP_ARCHIVE:'archive',
APP_COMPOSER:'composer',
APP_MESSENGER:'messenger',
APP_HTML5:'html5',
APP_CHAT:'chat',


INSTALL_CANCEL:1,
INSTALL_INSTALL:2,
INSTALL_UPDATE:3,
INSTALL_REINSTALL:4,
INSTALL_PERMA_CANCEL:5,
INSTALL_SILENT_SKIP:6,
INSTALL_DOWNLOAD:7,


CERROR_RESIZING_FAILED:6,
CERROR_MARKER_EXTRACTION_FAILED:9,


BEGIN:1,
UPLOAD_START:4,

ALL_UPLOADS_DONE:6,
CLIENT_ERROR:7,
RECOVERABLE_CLIENT_ERROR:12,
IMAGES_SELECTED:9,
UPGRADE_REQUIRED:11,
VERSION:15,
SELECT_START:18,
SELECT_CANCELED:19,
CANCEL:22,
CANCEL_DURING_UPLOAD:83,
ONE_RESIZING_START:2,
ONE_UPLOAD_START:10,
ONE_UPLOAD_DONE:29,
ONE_RESIZING_DONE:34,
PROGRESS_BAR_STOPPED:44,
MISSED_BEAT:45,
HEART_ATTACK:46,
PUBLISH_SENT:99,
PUBLISH_START:100,
PUBLISH_SUCCESS:101,
PUBLISH_FAILURE:102,
CLUSTERING_START:103,
CLUSTERING_SUCCESS:104,
CLUSTERING_FAILURE:105,
POST_BUTTON_CLICKED:110,
POST_BUTTON_ERROR:111,
PHOTO_DELETED:114,
PUBLISH_CLIENT_SUCCESS:115,
PHOTO_ROTATED:117,
SAVE_DRAFT_BUTTON_CLICKED:123,
RECOVERY_START_ON_CLIENT:124,
CHANGE_PHOTO_QUALITY_SETTING:126,
TAG_ADDED:127,
TAG_REMOVED:128,
TAB_BUTTON_CLICKED:129,


DONE_SPHERICAL_CHECK:131,
FAIL_SPHERICAL_CHECK:133,


EDITABLE_PHOTO_FETCH_START:106,
EDITABLE_PHOTO_FETCH_SUCCESS:107,
EDITABLE_PHOTO_FETCH_FAILURE:108,
EDITABLE_PHOTO_FETCH_DELAY:116,

CANCEL_INDIVIDUAL_UPLOAD:109,
MISSING_OVERLAY_NODE:118,
PUBLISH_RETRY_FAILURE:119,
MISSING_UPLOAD_STATE:120,

SESSION_POSTED:72,
POST_PUBLISHED:80,
ONE_UPLOAD_CANCELED:81,
ONE_UPLOAD_CANCELED_DURING_UPLOAD:82,

RESIZER_AVAILABLE:20,
OVERLAY_FIRST:61,
ASYNC_AVAILABLE:63,
FALLBACK_TO_HTML5:130,
RETRY_UPLOAD:17,
TAGGED_ALL_FACES:14,

VAULT_IMAGES_SELECTED:62,
VAULT_CREATE_POST_CANCEL:65,
VAULT_SEND_IN_MESSAGE_CLICKED:66,
VAULT_DELETE_CANCEL:68,
VAULT_ADD_TO_ALBUM_CANCEL:74,
VAULT_SHARE_IN_AN_ALBUM_CLICKED:76,
VAULT_SHARE_OWN_TIMELINE_CLICKED:77,
VAULT_SHARE_FRIENDS_TIMELINE_CLICKED:78,
VAULT_SHARE_IN_A_GROUP_CLICKED:79,
VAULT_SYNCED_PAGED_LINK_CLICKED:84,





















VAULTBOX:'vaultbox',
GRID:'grid',
SPOTLIGHT_VAULT_VIEWER:'spotlight_vault_viewer',



REF_VAULT_NOTIFICATION:'vault_notification',

_checkRequiredFields:function k(l){











},

sendBanzai:function k(l,m){
this._checkRequiredFields(l);

var n={};


l.scuba_ints=l.scuba_ints||{};
l.scuba_ints.client_time=Math.round(Date.now()/1000);

if(c('PhotosUploadWaterfallXConfig').retryBanzai){
n.retry=true;

l.scuba_ints.nonce=c('randomInt')(4294967296);}


c('Banzai').post
(c('PhotosUploadWaterfallXConfig').deprecatedBanzaiRoute,
l,
n);

if(m)
setTimeout(m,0);},



sendSignal:function k(l,m){
this._checkRequiredFields(l);

if(c('PhotosUploadWaterfallXConfig').useBanzai){
this.sendBanzai(l,m);}else{

var n=new (c('AsyncSignal'))
('/ajax/photos/waterfall.php',
{data:JSON.stringify(l)}).
setHandler(m);

if(c('PhotosUploadWaterfallXConfig').timeout)
n.setTimeout(10*1000);


n.send();}},



queueLog:function k(l,m){
h.push(l);

if(!!m){
this.flushQueue(m);}else 

j();},



flushQueue:function k(l){
var m=JSON.stringify(h);
h=[];

var n=c('XPhotosWaterfallBatchLoggingController').getURIBuilder().getURI();
new (c('AsyncRequest'))().
setURI(n).
setData({logs:m}).
setFinallyHandler(l||c('emptyFunction')).
setTimeoutHandler(10*1000,l||c('emptyFunction')).
send();}},



j=c('throttle')
(i.flushQueue,
c('PhotosUploadWaterfallXConfig').batchInterval*1000);


f.exports=i;}),null);

/** js/photos/upload/AlbumMediaUploadUtils.js */





__d('AlbumMediaUploadUtils',['VideoUploadConfig'],(function a(b,c,d,e,f,g){



var h=
{isVideoFile:function i(j){
var k=j.name,
l=c('VideoUploadConfig').videoExtensions,

m=k.indexOf('.')!==-1?
k.split('.').pop().toLowerCase():
'';
return l[m];},


hasVideos:function i(j){
return this._filterVideos(j).length>0;},


_filterVideos:function i(j){
return this._filterFileOfSupportedType
(j,
c('VideoUploadConfig').videoExtensions);},



_filterFileOfSupportedType:function i
(j,
k){

return j.filter(function(l){
var m=l.indexOf('.')!==-1?
l.split('.').pop().toLowerCase():
'';
return k[m];});}};




f.exports=h;}),null);

/** js/photos/upload/FilePickerEvent.js */




__d('FilePickerEvent',[],(function a(b,c,d,e,f,g){




f.exports=
{BEGIN:'FilePickerEvent/BEGIN',
SELECT_START:'FilePickerEvent/SELECT_START',
SELECTED:'FilePickerEvent/SELECTED_FILES',
ALBUM_LIMIT_EXCEEDED:'FilePickerEvent/ALBUM_LIMIT_EXCEEDED',
SESSION_LIMIT_EXCEEDED:'FilePickerEvent/SESSION_LIMIT_EXCEEDED',
SELECT_CANCELED:'FilePickerEvent/SELECT_CANCELED',
FALLBACK:'FilePickerEvent/FALLBACK'};}),null);

/** js/photos/upload/UploadSession.js */





__d('UploadSession',['invariant','AlbumMediaUploadUtils','AsyncRequest','FilePickerEvent','SubscriptionsHandler','PhotosUploadWaterfall','PUWSteps','URI','arrayContains'],(function a(b,c,d,e,f,g,h){














var i={};


function j(m){'use strict';
this._sessionID=m;
this._asyncBootstrapped=false;
this._controller=null;
this._overlay=null;
this._pickers=[];
this._pendingPhotoFileLists=[];
this._pendingVideoFileLists=[];
this._beginLogged=false;
this._albumLimitWasExceeded=false;
this._sessionLimitWasExceeded=false;
this._subscriptions=new (c('SubscriptionsHandler'))();}
j.prototype.

addFilePicker=function(m){'use strict';
if(!c('arrayContains')(this._pickers,m)){

this._pickers.push(m);

if(this._controller&&m.getSwfID&&m.getSwfID())
this._controller.preregisterSwf&&
this._controller.preregisterSwf(m.getSwfID());


this._subscriptions.addSubscriptions
(m.subscribe(c('FilePickerEvent').BEGIN,function(n,o){
if(!this._beginLogged){
this._beginLogged=true;
m.logWaterfallStep(c('PhotosUploadWaterfall').BEGIN);
m.logStep(c('PUWSteps').CLIENT_FLOW_BEGIN);}}.

bind(this)),

m.subscribe(c('FilePickerEvent').SELECTED,function(n,o){
m.logStep
(c('PUWSteps').CLIENT_SELECT_SUCCESS,
{volume:o.files.length});

var p=[],
q=[];
o.files.forEach(function(t){
if(c('AlbumMediaUploadUtils').isVideoFile(t)){
p.push(t);}else 

q.push(t);});




if(this._controller){
if(q.length>0)
this._controller.uploadFiles(q);

if(this._videoController&&p.length>0)
this._videoController.uploadFiles(p);}else{


if(q.length>0)
this._pendingPhotoFileLists.push(q);

if(p.length>0)
this._pendingVideoFileLists.push(p);}








if(this._asyncBootstrapped)
return;

var r=m._button,
s=new (c('URI'))(r.getAttribute('ajaxify'));
s.addQueryData('num_selected',o.files.length);
c('AsyncRequest').bootstrap(s.toString(),r,true);

this._asyncBootstrapped=true;}.
bind(this)),

m.subscribe(c('FilePickerEvent').SELECT_START,function(){
m.logStep(c('PUWSteps').CLIENT_SELECT_BEGIN);}.
bind(this)),

m.subscribe(c('FilePickerEvent').SELECT_CANCELED,function(){
m.logStep(c('PUWSteps').CLIENT_SELECT_CANCEL);


if(!this._overlay){
m.logStep(c('PUWSteps').CLIENT_FLOW_CANCEL);
this._beginLogged=false;}}.

bind(this)),

m.subscribe(c('FilePickerEvent').ALBUM_LIMIT_EXCEEDED,function(){
if(this._controller){
this._controller.albumLimitExceeded();}else 

this._albumLimitWasExceeded=true;}.

bind(this)),

m.subscribe(c('FilePickerEvent').SESSION_LIMIT_EXCEEDED,function(){
if(this._controller){
this._controller.sessionLimitExceeded();}else 

this._sessionLimitWasExceeded=true;}.

bind(this)));}};


j.prototype.

addController=function(m,n){'use strict';
this._controller=m;
this._videoController=n;

this._asyncBootstrapped=true;
var o=this._controller.getWaterfallID?
this._controller.getWaterfallID():
this._controller.getWaterfallConfig().waterfallID,

p=this._controller.getUploaderApp?
this._controller.getUploaderApp():
this._controller.getWaterfallConfig().waterfallApp;

if(!this._beginLogged){
this._beginLogged=true;
c('PhotosUploadWaterfall').sendSignal
({qn:o,
step:c('PhotosUploadWaterfall').BEGIN,
uploader:p});}




if(this._pendingPhotoFileLists.length>0||
this._pendingVideoFileLists.length>0){

var q=[],
r=[];


this._pendingVideoFileLists.forEach(function(s){
r=r.concat(s);});


this._pendingPhotoFileLists.forEach(function(s){
q=q.concat(s);});


if(q.length>0)
this._controller.uploadFiles(q);



if(r.length>0)
this._videoController.uploadFiles(r);}else 



c('PhotosUploadWaterfall').sendSignal
({qn:o,
step:c('PhotosUploadWaterfall').OVERLAY_FIRST,
uploader:p});



if(this._albumLimitWasExceeded)
this._controller.albumLimitExceeded();


if(this._sessionLimitWasExceeded)
this._controller.sessionLimitExceeded();};

j.prototype.

addOverlay=function(m){'use strict';
this._overlay=m;};
j.prototype.

addOverlayAndController=function(m,n){'use strict';
this.addOverlay(m);
this.addController(n,null);};
j.prototype.

getFilePickers=function(){'use strict';
return this._pickers;};
j.prototype.

cleanup=function(){'use strict';
this._subscriptions&&this._subscriptions.release();};
j.


addFilePickerToSession=function(m,n){'use strict';
k(m).addFilePicker(n);};
j.

addControllerToSession=function(m,n,o){'use strict';
k(m).addController(n,o);};
j.

addOverlayToSession=function(m,n){'use strict';
k(m).addOverlay(n);};
j.


addOverlayAndControllerToSession=function(m,n,o){'use strict';
k(m).addOverlayAndController(n,o);};
j.



restartSessionPersistingFilePickers=function(m){'use strict';
var n=k(m),
o=new j(m);
n.getFilePickers().forEach(function(p){
o.addFilePicker(p);});

l(m,o);};



function k(m){
if(!i[m])
i[m]=new j(m);

return i[m];}


function l(m,n){

i[m]||h(0,
'Session ID does not exist.');



i[m].cleanup();
delete i[m];
i[m]=n;}


f.exports=j;}),null);

/** js/react_composer/feedx/ReactFeedComposerXBody.js */





__d('ReactFeedComposerXBody',['DOM','Event','SubscriptionsHandler'],(function a(b,c,d,e,f,g){

'use strict';














function h(i){



this.$ReactFeedComposerXBody_root=i.root;
this.$ReactFeedComposerXBody_textarea=c('DOM').find(this.$ReactFeedComposerXBody_root,'textarea');
this.$ReactFeedComposerXBody_hiddenInput=c('DOM').find(this.$ReactFeedComposerXBody_root,'input[type="hidden"]');


this.$ReactFeedComposerXBody_subscriptions=new (c('SubscriptionsHandler'))();
this.$ReactFeedComposerXBody_subscriptions.addSubscriptions
(c('Event').listen
(this.$ReactFeedComposerXBody_textarea,
'change',
this.$ReactFeedComposerXBody_onTextareaChange.bind(this)));}


h.prototype.

$ReactFeedComposerXBody_onTextareaChange=function(i){
this.$ReactFeedComposerXBody_hiddenInput.value=i.target.value;};



f.exports=h;}),null);

/** js/reactions/UFIReactionsFunnelLogger.js */





__d('UFIReactionsFunnelLogger',['FunnelLogger','UFIReactionTypes'],(function a(b,c,d,e,f,g){

'use strict';



var h='WWW_COMMENT_REACTIONS_NUX_FUNNEL',
i='WWW_REACTIONS_NUX_FUNNEL',
j=c('UFIReactionTypes').reactions,
k=60,


l='like_button_enter',
m='like_button_click',
n='reaction_click',
o='menu_show',
p='nux_close_click',

q=

{_getFunnelName:function r(s){
return s?
h:
i;},





nuxShow:function r(s,t){
c('FunnelLogger').startFunnel(this._getFunnelName(t));
if(s)
c('FunnelLogger').addFunnelTag(this._getFunnelName(t),s);

c('FunnelLogger').setFunnelTimeout(this._getFunnelName(t),k);},


nuxCloseClick:function r(s){
c('FunnelLogger').appendAction(this._getFunnelName(s),p);},







likeButtonEnter:function r
(s,
t){

if(s&&j[s]){
c('FunnelLogger').appendActionWithTag
(this._getFunnelName(t),
l,
j[s].name);}else 


c('FunnelLogger').appendAction
(this._getFunnelName(t),
l);},




likeButtonClick:function r(s){
c('FunnelLogger').appendAction
(this._getFunnelName(s),
m);},



menuShow:function r(s){
c('FunnelLogger').appendAction(this._getFunnelName(s),o);},


reactionSelection:function r
(s,
t){

if(s&&j[s]){
var u=j[s].name;
c('FunnelLogger').appendActionWithTag
(this._getFunnelName(t),
n,
u);}else 


c('FunnelLogger').appendAction(this._getFunnelName(t),n);

c('FunnelLogger').endFunnel(this._getFunnelName(t));}};



f.exports=q;}),null);

/** shared/emoji/AbstractFBEmoji.react.js */





__d('AbstractFBEmoji.react',['cx','Image.react','React'],(function a(b,c,d,e,f,g,h){

'use strict';













var i=function j(k){

var l=k.children,m=k.size,n=k.src,o=k.title;

return (c('React').createElement('span',
{className:"_47e3 _5mfr",
title:o},
c('React').createElement(c('Image.react'),
{'aria-hidden':true,
height:m,
src:n,
width:m}),

c('React').createElement('span',
{'aria-hidden':!!o||null,
className:"_7oe"},
l)));};





f.exports=i;}),null);

/** shared/emoji/FBEmoji.react.js */





__d('FBEmoji.react',['cx','AbstractFBEmoji.react','EmojiImageURL','FBEmojiUtils','React'],(function a(b,c,d,e,f,g,h){

'use strict';













var i=function j(k){var l=k.codepoints,m=k.size,

n=c('FBEmojiUtils').getSupportedKey(l),
o=l.join('');

if(!n)

return (c('React').createElement('span',
{className:"_4ay8"+

(m===16?' '+"_3kkw":'')+
(m===18?' '+"_366d":'')+
(m===20?' '+"_366e":'')+
(m===24?' '+"_48cb":'')+
(m===28?' '+"_5-0n":'')+
(m===30?' '+"_5-0o":'')+
(m===32?' '+"_5-0p":'')+
(m===36?' '+"_2oah":'')},

o));





return (c('React').createElement(c('AbstractFBEmoji.react'),
{size:m,
src:c('EmojiImageURL').getFBEmojiURL(n,m)},
o));};




f.exports=i;}),null);

/** shared/emoji/FBEmoticon.react.js */





__d('FBEmoticon.react',['fbt','AbstractFBEmoji.react','EmojiImageURL','EmoticonsList','React','SupportedFBEmoji'],(function a(b,c,d,e,f,g,h){

'use strict';















var i=function j(k){var l=k.emoticon,m=k.name,n=k.size,

o=c('EmoticonsList').emoji[m];
if(!o)

return (c('React').createElement('span',null,l));



var p=h._(["{emoticonName} emoticon","8aaffc55ceff77e2f69571615f06296a"],[h.param





('emoticonName',m)]);




return (c('React').createElement(c('AbstractFBEmoji.react'),
{size:n,
src:
c('SupportedFBEmoji')[o]?
c('EmojiImageURL').getFBEmojiURL(o,n):
c('EmojiImageURL').getFBEmojiExtendedURL(o,n),

title:p},
l));};




f.exports=i;}),null);

/** shared/emoji/iterateEmoji.js */





__d('iterateEmoji',['EmojiRenderer'],(function a(b,c,d,e,f,g){

'use strict';








function h
(i,
j,
k){

var l=0,
m=c('EmojiRenderer').parse(i);

m.forEach(function(n){
var o=n.offset;
if(o>l)
k(i.substr(l,o-l));


j(n.emoji);

l=o+n.length;});


k(i.substr(l,i.length-l));}


f.exports=h;}),null);

/** shared/emoticons/iterateEmoticons.js */





__d('iterateEmoticons',['EmoticonsList'],(function a(b,c,d,e,f,g){











function h(i,j,k){
var l,m,n,o;

while(i){
var p=c('EmoticonsList').regexp.exec(i);
if(p){
l=p.index+p[1].length;
m=i.substr(0,l);
n=p[2];
o=i.substr(l+n.length);

k(m);
j(n,c('EmoticonsList').emotes[n]);
i=o;}else 

break;}



k(i);}


f.exports=h;}),null);

/** shared/core_components/TextWithEntities/TextWithEmoticonsCore.react.js */





__d('TextWithEmoticonsCore.react',['BaseTextWithDecoration.react','FBEmoji.react','FBEmoticon.react','React','iterateEmoji','iterateEmoticons','memoizeWithArgs'],(function a(b,c,d,e,f,g){

'use strict';var h,i;

















function j
(p,
q){


return (c('React').createElement(c('FBEmoji.react'),
{codepoints:p,
size:q}));}




function k
(p,
q,
r){


return (c('React').createElement(c('FBEmoticon.react'),
{emoticon:p,
name:q,
size:r}));}




function l(p){


return (function(q,
r,
s){

c('iterateEmoji')
(q,
function(t){
return (r(j(t,p)));},
s);});}





function m(p){


return (function(q,
r,
s){

c('iterateEmoticons')
(q,
function(t,u){
return (r(k(t,u,p)));},
s);});}





var n=c('memoizeWithArgs')

(function(p,
q,
r){

if(p&&q){
return [l(r),m(r)];}else
if(q){
return [m(r)];}else 

return [l(r)];},


function(p,q,r){
return p.toString()+'_'+q.toString()+'_'+r;});
h=babelHelpers.inherits









(o,c('React').Component);i=h&&h.prototype;o.prototype.








shouldComponentUpdate=function(p){
return p.text!==this.props.text;};
o.prototype.

render=function(){

return (c('React').createElement(c('BaseTextWithDecoration.react'),babelHelpers['extends']({},
this.props,
{text:this.props.text,
decorators:n
(this.props.renderEmoji,
this.props.renderEmoticons,
this.props.size)})));};



function o(){h.apply(this,arguments);}o.defaultProps={renderEmoji:true,renderEmoticons:true,size:16};


f.exports=o;}),null);
