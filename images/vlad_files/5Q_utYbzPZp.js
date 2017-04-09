if (self.CavalryLogger) { CavalryLogger.start_js(["ZrHA+"]); }

/** __static_js_modules__/calltoactionlinkformats.js */




__d("CallToActionLinkFormats",[],(function a(b,c,d,e,f,g){

f.exports={VIDEO_LEAD:"VIDEO_LEAD",VIDEO_LPP:"VIDEO_LPP",VIDEO_NEKO:"VIDEO_NEKO",VIDEO_NON_LINK:"VIDEO_NON_LINK",VIDEO_SHOP:"VIDEO_SHOP"};}),

null);

/** __static_js_modules__/composersourcesurface.js */




__d("ComposerSourceSurface",[],(function a(b,c,d,e,f,g){

f.exports={ALBUM_PERMALINK_INLINE_COMPOSER:"album_permalink_inline_composer",FEED:"newsfeed",TIMELINE:"timeline",PAGE:"page",GROUP:"group",EVENT:"event",FUNDRAISER:"fundraiser",SOCIAL_BALLOT:"social_ballot",VOTER_REGISTRATION:"voter_registration",ELECTION_HUB:"election_hub",QUICK_ELECTION:"quick_election",LIVE_MAP:"live_map",LOCAL_NEWS:"local_news",UNKNOWN:"unknown",RECOMMENDATIONS_DASHBOARD:"recommendations_dashboard",RECENT_POSTS:"timeline\/recent_posts",INSTANT_GAME:"instant_game",THROWBACK_PERMALINK:"throwback_permalink",MESSENGER_SHARE_DIALOG:"messenger_share_dialog",WORKBENCH:"workbench"};}),

null);

/** __static_js_modules__/composertargettype.js */




__d("ComposerTargetType",[],(function a(b,c,d,e,f,g){

f.exports={SELF_USER:"feed",OTHER_USER:"wall",GROUP:"group",PAGE:"page",EVENT:"event",RECOMMENDATION:"recommendation",FUNDRAISER:"fundraiser",EXAMPLE:"example",MARKETPLACE:"marketplace",ALBUM:"album",OTHER:"other"};}),

null);

/** __static_js_modules__/composertype.js */




__d("ComposerType",[],(function a(b,c,d,e,f,g){

f.exports={STATUS:"status",RESHARE:"reshare",UNKNOWN:"unknown",PHOTO:"photo",VIDEO:"video",INLINE:"inline",ADVANCED:"advanced"};}),

null);

/** __static_js_modules__/composerwaterfallevent.js */




__d("ComposerWaterfallEvent",[],(function a(b,c,d,e,f,g){

f.exports={COMPOSER_CANCEL:"composer_cancel",COMPOSER_CANCEL_INTENT:"intent_composer_cancel",COMPOSER_ENTRY:"composer_entry",COMPOSER_NOT_RENDERED:"composer_not_renderer",COMPOSER_POST:"composer_post",COMPOSER_POST_CANCEL:"composer_post_cancel",COMPOSER_POST_FAILURE:"composer_post_failure",COMPOSER_POST_FAILURE_FATAL:"composer_post_fatal_failure",COMPOSER_POST_FAILURE_GIVEUP:"composer_post_giveup_failure",COMPOSER_POST_SUCCESS:"composer_post_success",COMPOSER_POST_COMPLETED:"composer_post_completed",COMPOSER_WRITTEN:"composer_written",ALBUM_ADD:"add_album",ALBUM_CANCEL:"cancel_album",ALBUM_INTENT:"intent_album",ALBUM_REMOVE:"remove_album",FRIEND_TAG_ADD:"add_friend_tag",FRIEND_TAG_CANCEL:"cancel_friend_tag",FRIEND_TAG_INTENT:"intent_friend_tag",FRIEND_TAG_REMOVE:"remove_friend_tag",FRIEND_TAG_SEARCH:"search_friend_tag",FRIEND_SHOW_MORE:"show_more_friend_tag",LOCATION_ADD:"add_location",LOCATION_CANCEL:"cancel_location",LOCATION_INTENT:"intent_location",LOCATION_REMOVE:"remove_location",LOCATION_SCROLL:"scroll_location",LOCATION_SEARCH:"search_location",MINUTIAE_ADD:"add_minutiae",MINUTIAE_CANCEL:"cancel_minutiae",MINUTIAE_CHANGE_ICON:"change_icon_minutiae",MINUTIAE_CHANGE_ICON_CANCEL:"change_icon_cancel_minutiae",MINUTIAE_CHANGE_ICON_INTENT:"change_icon_intent_minutiae",MINUTIAE_CHANGE_ICON_SEARCH:"change_icon_search_minutiae",MINUTIAE_INTENT:"intent_minutiae",MINUTIAE_REMOVE:"remove_minutiae",MINUTIAE_SCROLL:"scroll_minutiae",MINUTIAE_SEARCH:"search_minutiae",MINUTIAE_TYPE_CLICK:"type_click_minutiae",MINUTIAE_SEE_MORE:"see_more_minutiae",MINUTIAE_CHAIN_SKIP:"skip_chain_minutiae",MINUTIAE_CHAIN_SUGGEST:"suggest_chain_minutiae",MINUTIAE_ICONPICKER_QUERY:"minutiae_iconpicker_query",MINUTIAE_ICONPICKER_BOOTSTRAP:"minutiae_iconpicker_bootstrap",MINUTIAE_ICONPICKER_SELECT:"minutiae_iconpicker_select",MARKDOWN_INTENT:"markdown_intent",MEDIA_INTENT:"intent_media",MEDIA_CANCEL:"cancel_media",PHOTO_ADD:"add_photo",PHOTO_ADD_FAILURE:"add_photo_failure",PHOTO_ADD_SUCCESS:"add_photo_success",PHOTO_REMOVE:"remove_photo",PRIVACY_ADD:"add_privacy",PRIVACY_CANCEL:"cancel_privacy",VOICE_SWITCHER_CANCEL:"cancel_voice_switcher",PRIVACY_INTENT:"intent_privacy",PRIVACY_SCROLL:"scroll_privacy",PRIVACY_SEE_ALL_LISTS:"see_all_lists_privacy",SELECT_FRIEND_TIMELINE_INTENT:"intent_select_friend_timeline",SELECT_FRIEND_TIMELINE_ADD:"add_select_friend_timeline",SELECT_FRIEND_TIMELINE_CANCEL:"cancel_select_friend_timeline",SERVER_POST_BEGIN:"server_composer_post_begin",SERVER_POST_FAILURE:"server_composer_post_failure",SERVER_POST_SUCCESS:"server_composer_post_succeeded",POST_POST_WITH_TAG_BEGIN:"post_post_with_tag_begin",POST_POST_WITH_TAG_FAILURE:"post_post_with_tag_failure",POST_POST_WITH_TAG_SUCCESS:"post_post_with_tag_success",TARGET_SELECTOR_INTENT:"intent_target_selector",TARGET_SELECTOR_CANCEL:"cancel_target_selector",VIDEO_ADD:"add_video",VIDEO_ADD_FAILURE:"add_video_failure",VIDEO_ADD_SUCCESS:"add_video_success",VIDEO_REMOVE:"remove_video",FEATURE_INTENT:"composer_feature_intent",FEATURE_UPDATE:"composer_feature_update",FEATURE_CANCEL:"composer_feature_cancel",FEATURE_DONE:"composer_feature_done"};}),

null);

/** __static_js_modules__/puwmethods.js */




__d("PUWMethods",[],(function a(b,c,d,e,f,g){

f.exports={DRAGDROP:"dragdrop",FILE_SELECTOR:"file_selector",VAULT:"vault",RECENT_PHOTOS:"recent_photos",PHOTOS_OF_YOU:"photos_of_you",METHOD_EDITOR:"editor",SUGGESTIONS:"suggestions",CAMERA:"camera",COPYPASTE:"copypaste",DISABLE_SPHERICAL:"disable_spherical"};}),

null);

/** js/composerx/ComposerXStore.js */









__d('ComposerXStore',['Arbiter','ge'],(function a(b,c,d,e,f,g){





var h={};

function i(k,l){
return 'ComposerX/'+k+'/'+l;}


var j=
{set:function k(l,m,n){
if(!h[l])
h[l]={};

h[l][m]=n;
c('Arbiter').inform
(i(l,m),
{},
c('Arbiter').BEHAVIOR_STATE);},


get:function k(l,m){
if(h[l])
return h[l][m];

return null;},


getAllForComposer:function k(l){
return h[l]||{};},






waitForComponents:function k(l,m,n){
c('Arbiter').registerCallback
(n,
m.map(i.bind(null,l)));}};







c('Arbiter').subscribe('page_transition',function(){
for(var k in h)
if(!c('ge')(k))
delete h[k];});




f.exports=j;}),null);

/** js/doc/upload/DocumentUploadConfig.js */






__d('DocumentUploadConfig',['DocumentUploadConfigInitialData'],(function a(b,c,d,e,f,g){




var h=

{isSupported:function i(j){
if(!j)
return false;


if(c('DocumentUploadConfigInitialData').CONTENT_TYPES.length<=0)
return false;


return c('DocumentUploadConfigInitialData').CONTENT_TYPES.includes(j);}};




f.exports=h;}),null);

/** js/composerx/dragdrop/ComposerXDragDropUtils.js */




__d('ComposerXDragDropUtils',['csx','cx','Arbiter','CSS','DocumentUploadConfig','DOMQuery','Parent','VideoUploadFeatureDetector'],(function a(b,c,d,e,f,g,h,i){











var j=



{handleDragEnterAndLeave:function k(l){
var m=c('DOMQuery').scry
(c('Parent').bySelector(l,"._119"),
"._2wr");

c('Arbiter').subscribe('dragenter',function(n,o){
if(l==o.element)
m.forEach(c('CSS').hide);});


c('Arbiter').subscribe('dragleave',function(n,o){
if(l==o.element)
m.forEach(c('CSS').show);});},




filterImages:function k(l){
var m=c('VideoUploadFeatureDetector').supportsFileAPI(),
n=[];
for(var o=0;o<l.length;o++)
if(l[o].type.match('image/*')){
n.push(l[o]);}else
if(m&&l[o].type.match('video/*')){
n.push(l[o]);}else
if(c('DocumentUploadConfig').isSupported(l[o].type))
n.push(l[o]);


return n;}};



f.exports=j;}),null);

/** js/composerx/logging/ComposerXSessionIDs.js */




__d('ComposerXSessionIDs',['cx','DOM','uuid'],(function a(b,c,d,e,f,g,h){






var i={},

j=

{getSessionID:function k(l){
return i[l];},


resetSessionID:function k(l){
i[l]=c('uuid')();},


createSessionIDInput:function k(l){
return c('DOM').create('input',

{type:'hidden',
name:'composer_session_id',
className:"_5r_b",
value:l});}};





f.exports=j;}),null);

/** js/composerx/logging/ComposerXMarauderLogger.js */





__d('ComposerXMarauderLogger',['Event','ComposerTargetType','ComposerType','ComposerWaterfallEvent','ComposerXSessionIDs','MarauderLogger','ShareModeConst'],(function a(b,c,d,e,f,g){









var h={},
i=c('ComposerType').STATUS,

j=
{logEvent:function k
(l,
m,
n){

if(!n)n={};

var o=h[m],
p=c('ComposerXSessionIDs').getSessionID(m);
if(!o||!p)
return;


if(n.logOncePerSession){
if(!o.loggedEventTypes[p])
o.loggedEventTypes[p]={};

if(o.loggedEventTypes[p][l])
return;

o.loggedEventTypes[p][l]=true;}


var q=o.composerType?
o.composerType:
i,
r=babelHelpers['extends']({},
n.extraData,
{composer_type:q,
target_type:o.targetType,
target_id:o.targetID,
ref:o.entryPointRef,
composer_source_surface:o.composerSourceSurface,
is_edit_composer:o.isEditComposer===true});


c('MarauderLogger').log
(l,
'composer',
r,
undefined,
undefined,
p);},




registerComposer:function k
(l,
m,
n){

h[l.id]=Object.assign

({targetID:m,
loggedEventTypes:{}},

n);},



getInstance:function k(l){
return h[l];},


listenForPostEvents:function k
(l,
m){

if(!m)
return [];


return [c('Event').listen
(m,
'submit',
function(){
j.logPost(l);}),


c('Event').listen
(m,
'success',
function(){
j.logPostSuccess(l);}),


c('Event').listen
(m,
'error',
function(event){
j.logPostFailure
(l,

{error_info:
{error_code:event.data.response.error,
error_description:event.data.response.errorDescription,
error_summary:event.data.response.errorSummary}});})];},








setShareMode:function k(l,m){
var n=h[l];
if(!n)
return;

switch(m){
case c('ShareModeConst').SELF_POST:
n.targetType=c('ComposerTargetType').SELF_USER;
break;
case c('ShareModeConst').FRIEND:
n.targetType=c('ComposerTargetType').OTHER_USER;
break;
case c('ShareModeConst').PAGE:
case c('ShareModeConst').SELF_PAGE:
n.targetType=c('ComposerTargetType').PAGE;
break;
case c('ShareModeConst').GROUP:
n.targetType=c('ComposerTargetType').GROUP;
break;

default:n.targetType=c('ComposerTargetType').OTHER;}},




logEntry:function k(l,m){
j.logEvent
(c('ComposerWaterfallEvent').COMPOSER_ENTRY,
l,
{logOncePerSession:true,extraData:m});},



logCompleted:function k(l,m){
j.logEvent
(c('ComposerWaterfallEvent').COMPOSER_POST_COMPLETED,
l,
{extraData:m});},



logPost:function k(l,m){
j.logEvent
(c('ComposerWaterfallEvent').COMPOSER_POST,
l,
{extraData:m});},



logPostSuccess:function k(l,m){
j.logEvent
(c('ComposerWaterfallEvent').COMPOSER_POST_SUCCESS,
l,
{extraData:m});},



logPostFailure:function k(l,m){
j.logEvent
(c('ComposerWaterfallEvent').COMPOSER_POST_FAILURE,
l,
{extraData:m});}};




f.exports=j;}),null);

/** js/dragdrop/DragDropFileUpload.js */




__d("DragDropFileUpload",[],(function a(b,c,d,e,f,g){

g.isSupported=function(){
return typeof FileList!=="undefined";};}),
null);

/** js/dragdrop/DocumentDragDrop.js */




__d('DocumentDragDrop',['Arbiter','CSS','DOMQuery','DragDropFileUpload','Event','emptyFunction','getObjectValues','getOrCreateDOMID'],(function a(b,c,d,e,f,g){












var h={},

i=0;

function j(){
i=0;
c('getObjectValues')(h).forEach(function(o){
c('CSS').removeClass(o.element,o.className);
c('Arbiter').inform('dragleave',{element:o.element});});}
















var k=null;
function l(){
k&&clearTimeout(k);
k=setTimeout(function(){
j();},
500);}


var m=function o(){

if(!c('DragDropFileUpload').isSupported())
return;












c('Event').listen(document,'dragenter',function(p){
if(i===0)
c('getObjectValues')(h).forEach(function(q){
c('CSS').addClass(q.element,q.className);
c('Arbiter').inform('dragenter',{element:q.element,event:p});});


i++;
l();});


c('Event').listen(document,'dragleave',function(p){
i--;
if(i===0)
j();

l();});












c('Event').listen(document,'drop',function(p){

j();


var q=p.getTarget();
if(c('DOMQuery').isNodeOfType(p.getTarget(),'input'))
if(q.type==='file')
return;



p.prevent();});

c('Event').listen(document,'dragover',c('Event').prevent);

document.addEventListener('dragover',l,true);

m=c('emptyFunction');},


n=
{init:function o(){

m();},


registerStatusElement:function o(p,q){
m();
h[c('getOrCreateDOMID')(p)]=
{element:p,
className:q};

if(i>0)
c('CSS').addClass(p,q);},



removeStatusElement:function o(p){
var q=c('getOrCreateDOMID')(p),
r=h[q];
if(r){
c('CSS').removeClass(r.element,r.className);
delete h[q];}}};




f.exports=n;}),null);

/** js/dragdrop/DragDropTarget.js */




__d('DragDropTarget',['Arbiter','Event','SubscriptionsHandler','CSS','DataTransfer','DocumentDragDrop','DragDropFileUpload','emptyFunction'],(function a(b,c,d,e,f,g){




























































function h(i){
this._element=i;
this._listeners=new (c('SubscriptionsHandler'))();
this._statusElem=i;
this._dragEnterCount=0;
this._enabled=false;}


Object.assign(h.prototype,
{_onFilesDropCallback:c('emptyFunction'),
_onURLDropCallback:c('emptyFunction'),
_onPlainTextDropCallback:c('emptyFunction'),
_onDropCallback:c('emptyFunction'),
_fileFilterFn:c('emptyFunction').thatReturnsArgument,

setOnDocumentDragEnterCallback:function i(j){
this._onDocumentDragEnterCallback=j;
return this;},


setOnDocumentDragLeaveCallback:function i(j){
this._onDocumentDragLeaveCallback=j;
return this;},


setOnDragEnterCallback:function i(j){
this._onDragEnterCallback=j;
return this;},


setOnDragLeaveCallback:function i(j){
this._onDragLeaveCallback=j;
return this;},


setOnFilesDropCallback:function i(j){
this._onFilesDropCallback=j;
return this;},


setOnURLDropCallback:function i(j){
this._onURLDropCallback=j;
return this;},


setOnPlainTextDropCallback:function i(j){
this._onPlainTextDropCallback=j;
return this;},


setOnDropCallback:function i(j){
this._onDropCallback=j;
return this;},


enable:function i(){
if(!c('DragDropFileUpload').isSupported())
return this;


this._listeners.engage();

c('DocumentDragDrop').registerStatusElement(this._statusElem,'fbWantsDragDrop');

this._listeners.addSubscriptions
(c('Event').listen(this._element,'dragenter',this._onDragEnter.bind(this)),
c('Event').listen(this._element,'dragleave',this._onDragLeave.bind(this)),
c('Event').listen(this._element,'dragover',this._onDragOver.bind(this)),
c('Event').listen(this._element,'drop',function(j){
this._dragEnterCount=0;

c('CSS').removeClass(this._statusElem,'fbDropReady');
c('CSS').removeClass(this._statusElem,'fbDropReadyPhoto');
c('CSS').removeClass(this._statusElem,'fbDropReadyPhotos');
c('CSS').removeClass(this._statusElem,'fbDropReadyLink');

var k=new (c('DataTransfer'))(j.dataTransfer),

l={},
m=false,
n=this._fileFilterFn(j.dataTransfer.files);
if(n.length){
this._onFilesDropCallback(n,j);
l.files=n;
m=true;}


var o=k.getLink();
if(o){
this._onURLDropCallback(o,j);
l.url=o;
m=true;}


var p=k.getText();
if(p){
this._onPlainTextDropCallback(p,j);
l.plainText=p;
m=true;}


if(m)
this._onDropCallback(l,j);


j.kill();}.
bind(this)));


this._listeners.addSubscriptions
(c('Arbiter').subscribe('dragenter',this._onDocumentDragEnter.bind(this)),
c('Arbiter').subscribe('dragleave',this._onDocumentDragLeave.bind(this)));


this._enabled=true;
return this;},


disable:function i(){
if(!this._enabled)
return this;


c('DocumentDragDrop').removeStatusElement(this._statusElem,'fbWantsDragDrop');
c('CSS').removeClass(this._statusElem,'fbDropReady');
c('CSS').removeClass(this._statusElem,'fbDropReadyPhoto');
c('CSS').removeClass(this._statusElem,'fbDropReadyPhotos');
c('CSS').removeClass(this._statusElem,'fbDropReadyLink');

this._listeners.release();

this._enabled=false;
return this;},


setFileFilter:function i(j){
this._fileFilterFn=j;
return this;},


setStatusElement:function i(j){
this._statusElem=j;
return this;},






_onDragEnter:function i(j){
if(this._dragEnterCount===0){
var k=new (c('DataTransfer'))(j.dataTransfer);

c('CSS').addClass(this._statusElem,'fbDropReady');

if(k.isLink()||!k.isImage()){
c('CSS').addClass(this._statusElem,'fbDropReadyLink');}else 

if(k.getCount()>1){
c('CSS').addClass(this._statusElem,'fbDropReadyPhotos');}else 

c('CSS').addClass(this._statusElem,'fbDropReadyPhoto');


this._onDragEnterCallback&&this._onDragEnterCallback();}


this._dragEnterCount++;
j.preventDefault();},


_onDragLeave:function i(j){
this._dragEnterCount=Math.max(this._dragEnterCount-1,0);

if(this._dragEnterCount===0){
c('CSS').removeClass(this._statusElem,'fbDropReady');
c('CSS').removeClass(this._statusElem,'fbDropReadyPhoto');
c('CSS').removeClass(this._statusElem,'fbDropReadyPhotos');
c('CSS').removeClass(this._statusElem,'fbDropReadyLink');
this._onDragLeaveCallback&&this._onDragLeaveCallback();}},



_onDragOver:function i(j){
if(!j.dataTransfer){
c('Event').kill(j);
return;}





try{var l=j.dataTransfer.effectAllowed;
j.dataTransfer.dropEffect=
l=='move'||l=='linkMove'?
'move':'copy';}catch(
k){

}

c('Event').kill(j);},


_onDocumentDragEnter:function i(event,j){
if(this._onDocumentDragEnterCallback&&j.element==this._element)
this._onDocumentDragEnterCallback();},



_onDocumentDragLeave:function i(event,j){


this._dragEnterCount=0;
this._onDragLeave(event);

if(this._onDocumentDragLeaveCallback&&j.element==this._element)
this._onDocumentDragLeaveCallback();}});




f.exports=h;}),null);

/** js/react_composer/attachments/ReactComposerAttachmentInitState.js */





__d('ReactComposerAttachmentInitState',['keyMirrorRecursive'],(function a(b,c,d,e,f,g){



f.exports=c('keyMirrorRecursive')
({UNINITIALIZED:null,
INITIALIZING:null,
INITIALIZED:null},
'ReactComposerAttachmentInitState');}),null);

/** js/react_composer/attachments/ReactComposerAttachmentStore.js */






__d('ReactComposerAttachmentStore',['ReactComposerAttachmentActionType','ReactComposerAttachmentInitState','ReactComposerAttachmentType','ReactComposerStoreBase','ImmutableObject','performanceAbsoluteNow'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits









(j,c('ReactComposerStoreBase'));i=h&&h.prototype;
function j(){'use strict';
var k;
i.constructor.call(this,
function(){

return {attachments:[],


selectedAttachment:null,


isSelectedAttachmentActive:false};},


function(l){
switch(l.type){
case c('ReactComposerAttachmentActionType').REGISTER_ATTACHMENT:
k&&k.$ReactComposerAttachmentStore_handleRegisterAttachment(l);
break;
case c('ReactComposerAttachmentActionType').SELECT_ATTACHMENT:
k&&k.$ReactComposerAttachmentStore_handleSelectAttachment(l);
break;
case c('ReactComposerAttachmentActionType').SET_BOOTLOADED:
k&&k.$ReactComposerAttachmentStore_handleSetBootloaded(l);
break;
case c('ReactComposerAttachmentActionType').SET_BOOTSTRAPPED:
k&&k.$ReactComposerAttachmentStore_handleSetBootstrapped(l);
break;
case c('ReactComposerAttachmentActionType').SET_INITIALIZED:
k&&k.$ReactComposerAttachmentStore_handleSetInitialized(l);
break;}});


k=this;}
j.prototype.

getAttachment=function(k,l){'use strict';
var m=this.getComposerData(k);
return m.attachments.find(function(n){
return (n.id===l);});};

j.prototype.

getSelectedAttachmentID=function(k){'use strict';
var l=this.getComposerData(k);
if(l.selectedAttachment)
return l.selectedAttachment.id;


return null;};
j.prototype.

hasAttachment=function(k,l){'use strict';
return this.getComposerData(k).
attachments.
some(function(m){return m.id===l;});};
j.prototype.

getIsAttachmentSelected=function(k,l){'use strict';
var m=
this.getComposerData(k).selectedAttachment;
return !!m&&m.id===l;};
j.prototype.

isSelectedAttachmentActive=function(k){'use strict';
return this.getComposerData(k).isSelectedAttachmentActive;};
j.prototype.

isBootstrapped=function(k,l){'use strict';
var m=this.getComposerData(k),
n=this.$ReactComposerAttachmentStore_getAttachmentIndex(m,l);
return m.attachments[n].bootstrapped;};
j.prototype.

getBootloadDuration=function(k,l){'use strict';
var m=this.getComposerData(k),
n=this.$ReactComposerAttachmentStore_getAttachmentIndex(m,l);
return m.attachments[n].bootloadDuration;};
j.prototype.

getBootstrapDuration=function(k,l){'use strict';
var m=this.getComposerData(k),
n=this.$ReactComposerAttachmentStore_getAttachmentIndex(m,l);
return m.attachments[n].bootstrapDuration;};
j.prototype.







getAttachmentsConfig=function(k,l){'use strict';
var m=this.getComposerData(k),
n=this.$ReactComposerAttachmentStore_getAttachmentIndex(m,l);
return m.attachments[n].config;};
j.prototype.

$ReactComposerAttachmentStore_handleRegisterAttachment=function(k){'use strict';var l=
this.validateAction
(k,
['composerID','id']),m=l[0],n=l[1],


o=this.getComposerData(m),

p=new (c('ImmutableObject'))
({id:n,

initState:c('ReactComposerAttachmentInitState').UNINITIALIZED,

bootloaded:k.bootloaded,

bootstrapped:k.bootstrapped,

module:k.module,

postButtonModule:k.postButtonModule,

initTime:null,

bootloadDuration:null,

bootstrapDuration:null,



config:
n===c('ReactComposerAttachmentType').MEDIA&&k.config?

{videoUploadParams:k.config.videoUploadParams||{}}:

null});


o.attachments.push(p);

if(k.selected)
o.selectedAttachment=p;


if(k.active)
o.isSelectedAttachmentActive=true;


this.emitChange(m);};
j.prototype.

$ReactComposerAttachmentStore_handleInitializeAttachment=function(k){'use strict';var l=
this.validateAction
(k,
['id','composerID']),m=l[0],n=l[1],


o=this.getComposerData(n),
p=this.$ReactComposerAttachmentStore_getAttachmentIndex(o,m);

if(o.attachments[p].initState===
c('ReactComposerAttachmentInitState').UNINITIALIZED)
o.attachments[p]=c('ImmutableObject').set
(o.attachments[p],
{initState:c('ReactComposerAttachmentInitState').INITIALIZING});



this.emitChange(n);};
j.prototype.

$ReactComposerAttachmentStore_handleSelectAttachment=function(k){'use strict';var l=
this.validateAction
(k,
['id','composerID','activate']),m=l[0],n=l[1],o=l[2],


p=this.getComposerData(n),
q=this.$ReactComposerAttachmentStore_getAttachmentIndex(p,m);

p.selectedAttachment=p.attachments[q];

if(o)
p.isSelectedAttachmentActive=true;


if(p.attachments[q].initState===
c('ReactComposerAttachmentInitState').UNINITIALIZED)
p.attachments[q]=c('ImmutableObject').set
(p.attachments[q],
{initState:c('ReactComposerAttachmentInitState').INITIALIZING});



this.emitChange(n);};
j.prototype.

$ReactComposerAttachmentStore_handleSetBootloaded=function(k){'use strict';var l=
this.validateAction
(k,
['id','composerID','attachmentModule']),m=l[0],n=l[1],o=l[2],


p=this.getComposerData(n),
q=this.$ReactComposerAttachmentStore_getAttachmentIndex(p,m);

p.attachments[q]=c('ImmutableObject').set
(p.attachments[q],

{bootloaded:true,
bootloadDuration:c('performanceAbsoluteNow')()-
p.attachments[q].initTime,
module:o,
postButtonModule:k.postButtonModule});




this.emitChange(n);};
j.prototype.

$ReactComposerAttachmentStore_handleSetBootstrapped=function(k){'use strict';var l=
this.validateAction
(k,
['id','composerID']),m=l[0],n=l[1],


o=this.getComposerData(n),
p=this.$ReactComposerAttachmentStore_getAttachmentIndex(o,m);

o.attachments[p]=c('ImmutableObject').set
(o.attachments[p],

{bootstrapped:true,
bootstrapDuration:c('performanceAbsoluteNow')()-
o.attachments[p].initTime});



this.emitChange(n);};
j.prototype.

$ReactComposerAttachmentStore_handleSetInitialized=function(k){'use strict';var l=
this.validateAction
(k,
['id','composerID']),m=l[0],n=l[1],


o=this.getComposerData(n),
p=this.$ReactComposerAttachmentStore_getAttachmentIndex(o,m);
o.attachments[p]=c('ImmutableObject').set
(o.attachments[p],

{initState:c('ReactComposerAttachmentInitState').INITIALIZED,
initTime:c('performanceAbsoluteNow')()});



this.emitChange(n);};
j.prototype.

$ReactComposerAttachmentStore_getAttachmentIndex=function(k,l){'use strict';
var m=-1;
for(var n=0;n<k.attachments.length;n++)
if(k.attachments[n].id===l){
m=n;
break;}



if(m===-1)
throw new Error('Undefined attachment id: '+l);


return m;};



f.exports=new j();}),null);

/** js/react_composer/attachments/ReactComposerAttachmentActions.js */





__d('ReactComposerAttachmentActions',['ReactComposerAttachmentActionType','ReactComposerDispatcher','ReactComposerAttachmentStore'],(function a(b,c,d,e,f,g){h.prototype.








registerAttachment=function(i,j){'use strict';
var k=babelHelpers['extends']
({composerID:i,
type:c('ReactComposerAttachmentActionType').REGISTER_ATTACHMENT},
j);

c('ReactComposerDispatcher').dispatch(k);};
h.prototype.


initializeAttachment=
function(i,
j){
'use strict';
var k=
{composerID:i,
type:c('ReactComposerAttachmentActionType').INITIALIZE_ATTACHMENT,
id:j};

c('ReactComposerDispatcher').dispatch(k);};
h.prototype.













selectAttachment=
function(i,
j){


var k=arguments.length<=2||arguments[2]===undefined?false:arguments[2],l=arguments[3];'use strict';
var m=
c('ReactComposerAttachmentStore').getSelectedAttachmentID(i);
if(!m)
return;


var n=
{composerID:i,
type:c('ReactComposerAttachmentActionType').SELECT_ATTACHMENT,
id:j,
activate:k,
uiElementName:l,
currentAttachmentID:m};

c('ReactComposerDispatcher').dispatch(n);};
h.prototype.

setInitialized=function(i,j){'use strict';
var k=
{composerID:i,
type:c('ReactComposerAttachmentActionType').SET_INITIALIZED,
id:j};

c('ReactComposerDispatcher').dispatch(k);};
h.prototype.

setBootloaded=
function(i,
j,
k,
l){
'use strict';
var m=
{composerID:i,
type:c('ReactComposerAttachmentActionType').SET_BOOTLOADED,
id:j,
attachmentModule:k,
postButtonModule:l};

c('ReactComposerDispatcher').dispatch(m);};
h.prototype.

setBootstrapped=function(i,j){'use strict';
var k=
{composerID:i,
type:c('ReactComposerAttachmentActionType').SET_BOOTSTRAPPED,
id:j};

c('ReactComposerDispatcher').dispatch(k);};
h.prototype.

changeUploadStatus=function(i,j){'use strict';
var k=
{composerID:i,
type:c('ReactComposerAttachmentActionType').UPLOAD_ATTACHMENT,
uploading:j};

c('ReactComposerDispatcher').dispatch(k);};
function h(){'use strict';}


f.exports=new h();}),null);

/** js/react_composer/attachments/ReactComposerAttachmentLoader.js */





__d('ReactComposerAttachmentLoader',['ReactComposerAttachmentActions','ReactComposerAttachmentInitState','ReactComposerAttachmentStore','ReactComposerStore','XReactComposerLoggingODSController','AsyncRequest'],(function a(b,c,d,e,f,g){
















var h=
{load:function i
(j,
k,
l,
m){

var n=c('ReactComposerAttachmentStore').getAttachment
(j,
k);


if(!n||
n.initState===c('ReactComposerAttachmentInitState').INITIALIZED)
return;


c('ReactComposerAttachmentActions').setInitialized(j,k);

this._logToODS(j,'bootload_start',k);

l
(function(o,p){
this._logToODS(j,'bootload_done',k);
c('ReactComposerAttachmentActions').setBootloaded
(j,
k,
o,
p);}.

bind(this));


this._logToODS(j,'bootstrap_start',k);

new (c('AsyncRequest'))(m).
setHandler(function(){
this._logToODS(j,'bootstrap_done',k);



setTimeout
(function(){return c('ReactComposerAttachmentActions').setBootstrapped
(j,
k);},

0);}.

bind(this)).
send();},


_logToODS:function i
(j,
event,
k){

var l=c('XReactComposerLoggingODSController').
getURIBuilder().
setString('event',event).
setString('attachment_type',k).
setEnum('composer_type',c('ReactComposerStore').getRef(j)).
getURI();

new (c('AsyncRequest'))(l).send();}};



f.exports=h;}),null);

/** js/react_composer/attachments/ReactComposerAttachmentPlaceholder.react.js */






__d('ReactComposerAttachmentPlaceholder.react',['cx','React','XUISpinner.react','joinClasses'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;i=babelHelpers.inherits










(k,c('React').PureComponent);j=i&&i.prototype;k.prototype.
render=function(){
var l=c('joinClasses')
(this.props.className,
"_2nt-");



return (c('React').createElement('div',{className:l},
c('React').createElement(c('XUISpinner.react'),
{className:"_2nt_",
size:'large'})));};



function k(){i.apply(this,arguments);}


f.exports=k;}),null);

/** js/react_composer/attachments/common/dragdrop/ReactComposerDragDropPrompt.react.js */





__d('ReactComposerDragDropPrompt.react',['cx','fbt','React'],(function a(b,c,d,e,f,g,h,i){var j,k;j=babelHelpers.inherits






(l,c('React').PureComponent);k=j&&j.prototype;l.prototype.
render=function(){'use strict';

return (c('React').createElement('div',{className:"_1y-n"},
c('React').createElement('div',{className:"_1y-o"},
c('React').createElement('span',
{className:"_1y-p"},i._(["Drag Link\/Photos\/Video Here","59fe4055e1627163f87bb1fb31d1db42"])),





c('React').createElement('span',{className:"_1y-q"},i._(["Drop Link","c987cfa933ca400595fbebb772425ff1"])),




c('React').createElement('span',{className:"_1y-r"},i._(["Drop Photo\/Video","81054c5aec9a81ca6d9c9bb2f21accca"])),




c('React').createElement('span',
{className:"_1y-s"},i._(["Drop Photos","27b5294c0724ffcb551a54f036e6dd2b"])))));};







function l(){'use strict';j.apply(this,arguments);}


f.exports=l;}),null);

/** js/react_composer/attachments/common/dragdrop/ReactComposerDragDropPromptLazy.react.js */






__d('ReactComposerDragDropPromptLazy.react',['ReactComposerDragDropPrompt.react','ComposerXDragDropUtils','DragDropTarget','React','ReactDOM','emptyFunction'],(function a(b,c,d,e,f,g){var h,i,










j=c('React').PropTypes;h=babelHelpers.inherits








(k,c('React').PureComponent);i=h&&h.prototype;function k(){var l,m;'use strict';for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.











$ReactComposerDragDropPromptLazy_dragDropTarget=undefined,m;}k.prototype.

componentDidMount=function(){'use strict';
var l=c('ReactDOM').findDOMNode(this.props.root);
this.$ReactComposerDragDropPromptLazy_dragDropTarget=new (c('DragDropTarget'))(l).
setOnFilesDropCallback(this.props.onFilesDrop).
setOnURLDropCallback(this.props.onURLDrop).
setFileFilter(c('ComposerXDragDropUtils').filterImages).
enable();};
k.prototype.

componentWillUnmount=function(){'use strict';
this.$ReactComposerDragDropPromptLazy_dragDropTarget&&this.$ReactComposerDragDropPromptLazy_dragDropTarget.disable();};
k.prototype.

render=function(){'use strict';
return c('React').createElement(c('ReactComposerDragDropPrompt.react'),null);};
k.propTypes={root:j.object.isRequired,onFilesDrop:j.func,onURLDrop:j.func};k.defaultProps={onFilesDrop:c('emptyFunction'),onURLDrop:c('emptyFunction')};


f.exports=k;}),null);

/** js/react_composer/mixins/ReactComposerContextMixin.js */





__d('ReactComposerContextMixin',['ComposerEntryPointRef','React','getObjectValues'],(function a(b,c,d,e,f,g){






var h=c('React').PropTypes,






i=
{contextTypes:
{actorID:h.string.isRequired,
composerID:h.string.isRequired,
composerType:h.oneOf
(c('getObjectValues')(c('ComposerEntryPointRef'))).
isRequired,
gks:h.object.isRequired,
targetID:h.string.isRequired,



jsModules:h.object,





jsResources:h.object}};



f.exports=i;}),null);

/** js/react_composer/attachments/mixins/ReactComposerLoadableAttachmentBodyMixin.js */





__d('ReactComposerLoadableAttachmentBodyMixin',['cx','invariant','ReactComposerAttachmentBodyMixin','ReactComposerAttachmentInitState','ReactComposerAttachmentLoader','ReactComposerAttachmentPlaceholder.react','ReactComposerAttachmentStore','ReactComposerStore','React'],(function a(b,c,d,e,f,g,h,i){













var j=
{mixins:
[c('ReactComposerAttachmentBodyMixin')(c('ReactComposerAttachmentStore'))],


statics:
{calculateAttachmentState:function k(l,m){
var n=c('ReactComposerAttachmentStore').getAttachment
(l,
this.attachmentID),


o=c('ReactComposerAttachmentStore').getIsAttachmentSelected
(l,
this.attachmentID),


p=c('ReactComposerStore').isActive(l);


return {composerIsActive:p,
initState:n&&n.initState,
attachmentModule:n&&n.module,
bootstrapped:n&&n.bootstrapped,
postButtonModule:n&&n.postButtonModule,
isSelected:o};}},




componentWillMount:function k(){

this.constructor.attachmentID||i(0,
'`attachmentID` static attribute should exist when using '+
'ReactComposerLoadableAttachmentBodyMixin');


if(this.props.selected&&this._shouldInitialize())
this._initialize();},



componentDidUpdate:function k(l,m){
if(this.state.initState===c('ReactComposerAttachmentInitState').INITIALIZING&&
this._shouldInitialize())
this._initialize();},



renderX:function k(){


if(!this.state.attachmentModule||!this.state.bootstrapped){
var l=
this.getPlaceholderModule&&this.getPlaceholderModule(),
m=l?
l:c('ReactComposerAttachmentPlaceholder.react');



return (c('React').createElement(m,babelHelpers['extends']
({className:"_3rlw"},
this.props)));}




var n=this.state.attachmentModule;

return (c('React').createElement(n,babelHelpers['extends']({},
this.props,
{postButtonModule:this.state.postButtonModule})));},







_shouldInitialize:function k(){
return this.constructor.initOnlyWhenComposerActive?
this.state.composerIsActive:
true;},


_initialize:function k(){
c('ReactComposerAttachmentLoader').load
(this.context.composerID,
this.constructor.attachmentID,
this.bootload,
this.getBootstrapURI());}};




f.exports=j;}),null);

/** www/__virtual__/x/XReactComposerMediaAttachmentBootstrapController.js */



__d("XReactComposerMediaAttachmentBootstrapController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/react_composer\/media\/bootstrap\/",{composer_id:{type:"String",required:true},composer_type:{type:"Enum",required:true,enumType:1},target_id:{type:"String",required:true}});}),

null);

/** js/react_composer/utils/ReactComposerMediaInitUtils.js */






__d('ReactComposerMediaInitUtils',['ActorURI','Bootloader','XReactComposerMediaAttachmentBootstrapController'],(function a(b,c,d,e,f,g){













var h=
{bootload:function i(j){
c('Bootloader').loadModules
(["ReactComposerMediaAttachmentContainer.react","ReactComposerMediaAttachmentPostButtonContainer.react"],



j,'ReactComposerMediaInitUtils');},



getBootstrapURI:function i
(j,
k,
l,
m){

return c('ActorURI').create
(c('XReactComposerMediaAttachmentBootstrapController').
getURIBuilder().
setString('composer_id',j).
setEnum('composer_type',k).
setString('target_id',l).
getURI(),
m);}};





f.exports=h;}),null);

/** js/react_composer/attachments/media/ReactComposerMediaLazyAttachment.react.js */





__d('ReactComposerMediaLazyAttachment.react',['ReactComposerAttachmentType','ReactComposerBootloaderPropTypes','ReactComposerLoadableAttachmentBodyMixin','ReactComposerMediaInitUtils','React'],(function a(b,c,d,e,f,g){







var h=c('React').PropTypes,



i=c('React').createClass({displayName:'ReactComposerMediaLazyAttachment',
mixins:[c('ReactComposerLoadableAttachmentBodyMixin')],



propTypes:
{additionalTaggers:h.arrayOf(h.shape
({button:h.element.isRequired,
container:h.element.isRequired})),

additionalFooterActions:h.arrayOf(h.element),
bootloader:c('ReactComposerBootloaderPropTypes')},


statics:
{attachmentID:c('ReactComposerAttachmentType').MEDIA},


bootload:function j(k){
if(this.props.bootloader){
this.props.bootloader.mediaAttachment(k);}else 

c('ReactComposerMediaInitUtils').bootload(k);},



getBootstrapURI:function j(){
return c('ReactComposerMediaInitUtils').getBootstrapURI
(this.context.composerID,
this.context.composerType,
this.context.targetID,
this.context.actorID);}});




f.exports=i;}),null);

/** js/react_composer/attachments/media/ReactComposerMediaUploadType.js */




__d('ReactComposerMediaUploadType',[],(function a(b,c,d,e,f,g){






f.exports=
{PHOTO:'PHOTO',
VIDEO:'VIDEO'};}),null);

/** js/react_composer/attachments/media/slideshow/ReactComposerSlideshowActionType.js */





__d('ReactComposerSlideshowActionType',['keyMirrorRecursive'],(function a(b,c,d,e,f,g){



f.exports=c('keyMirrorRecursive')
({AUDIO_FILE_UPLOAD_ERROR:null,
AUDIO_FILE_UPLOAD_STARTED:null,
AUDIO_FILE_UPLOAD_SUCCESS:null,
CLOSE_EDIT_SLIDESHOW_DIALOG:null,
CREATE:null,
DURATION_CHANGE:null,
FORMAT_CHANGE:null,
HIDE_SLIDESHOW_EDIT_FIELD:null,
IMAGE_REMOVE:null,
IMAGES_SELECT_CONFIRM:null,
MUSIC_CATEGORY_SELECT:null,
PREVIEW_STATE_CHANGE:null,
REORDER_IMAGES:null,
SELECT_TAB:null,
SHOW_EDIT_SLIDESHOW_DIALOG:null,
SHOW_SLIDESHOW_EDIT_FIELD:null,
SET_STORYLINE_MOOD_FILES:null,
STORYLINE_MOOD_CHANGE:null,
STORYLINE_MOOD_DELETE:null,
STORYLINE_MOOD_SOURCE_CHANGE:null,
STORYLINE_MOOD_SOURCE_MAP_CHANGE:null,
TOGGLE_SLIDESHOW_DIALOG:null,
TRANSITION_CHANGE:null},
'ReactComposerSlideshowActionType');}),null);

/** js/react_composer/attachments/media/slideshow/ReactComposerSelectedImagesStore.js */







__d('ReactComposerSelectedImagesStore',['ReactComposerDispatcher','ReactComposerMediaUploadActionType','ReactComposerMediaUploadStore','ReactComposerPhotoStore','ReactComposerSlideshowActionType','ReactComposerStoreBase','SlideshowConstants','SlideshowImageUtil','immutable','mergeDeepInto'],(function a(b,c,d,e,f,g){

'use strict';var h,i,













j=c('SlideshowConstants').formats,k=c('SlideshowConstants').max_photo_num;h=babelHelpers.inherits

(l,c('ReactComposerStoreBase'));i=h&&h.prototype;l.prototype.

$ReactComposerSelectedImagesStore_getCrops=function(m,n,o){var p;
if(m.isLoading)
return {};

var q=c('SlideshowImageUtil').calculateDefaultCoordinates

({width:m.width,
height:m.height},

o);

return p={},p[
n]=q,p;};

l.prototype.

$ReactComposerSelectedImagesStore_calculateCrops=
function(m,
n,
o){

var p=o;
if(!p)
p=this.getComposerData(m).format;

return this.$ReactComposerSelectedImagesStore_calculateCropsForFormat
(n,
p);};

l.prototype.

$ReactComposerSelectedImagesStore_calculateCropsForFormat=
function(m,
n){

if(!m.length)
return [];

switch(n){
case j.Original:
var o=m[0];
return m.map(function(p){return this.$ReactComposerSelectedImagesStore_getCrops
(p,
o.width+
c('SlideshowConstants').SIZE_DELIMITER+o.height,
o.width/o.height);}.bind(this));

case j.Wide:
return m.map(function(p){return this.$ReactComposerSelectedImagesStore_getCrops
(p,
n,
c('SlideshowConstants').LANDSCAPE_ASPECT_RATIO);}.bind(this));

case j.Square:
return m.map(function(p){return this.$ReactComposerSelectedImagesStore_getCrops
(p,
n,
c('SlideshowConstants').SQUARE_ASPECT_RATIO);}.bind(this));

case j.Vertical:
return m.map(function(p){return this.$ReactComposerSelectedImagesStore_getCrops
(p,
n,
c('SlideshowConstants').VERTICAL_ASPECT_RATIO);}.bind(this));


default:return [];}};



function l(){
var m=void 0;
i.constructor.call(this,
function(){

return {selectedImages:[],
imagesCrops:[],
editState:null,
format:c('SlideshowConstants').formats.Original,
removedUploadIDs:[],
addedUploadIDs:[]};},


function(n){
switch(n.type){
case c('ReactComposerMediaUploadActionType').PHOTO_UPLOAD_ENQUEUED:
c('ReactComposerDispatcher').waitFor
([c('ReactComposerMediaUploadStore').getDispatchToken()]);

m&&m.$ReactComposerSelectedImagesStore_handleUploadStarted(n);
break;
case c('ReactComposerMediaUploadActionType').PHOTO_UPLOAD_DONE:
c('ReactComposerDispatcher').waitFor
([c('ReactComposerPhotoStore').getDispatchToken()]);

m&&m.$ReactComposerSelectedImagesStore_handleUploadDone(n);
break;
case c('ReactComposerSlideshowActionType').IMAGES_SELECT_CONFIRM:
m&&m.$ReactComposerSelectedImagesStore_handleImagesSelectConfirm(n);
break;
case c('ReactComposerSlideshowActionType').IMAGE_REMOVE:
m&&m.$ReactComposerSelectedImagesStore_handleImageRemove(n);
break;
case c('ReactComposerSlideshowActionType').REORDER_IMAGES:
m&&m.$ReactComposerSelectedImagesStore_handleReorderImages(n);
break;
case c('ReactComposerSlideshowActionType').FORMAT_CHANGE:
m&&m.$ReactComposerSelectedImagesStore_handleFormatChange(n);
break;
case c('ReactComposerSlideshowActionType').TOGGLE_SLIDESHOW_DIALOG:
m&&m.$ReactComposerSelectedImagesStore_handleToggleSlideshowDialog(n);
break;
case c('ReactComposerSlideshowActionType').HIDE_SLIDESHOW_EDIT_FIELD:
m&&m.$ReactComposerSelectedImagesStore_handleHideSlideshowEditField(n);
break;
case c('ReactComposerSlideshowActionType').SHOW_EDIT_SLIDESHOW_DIALOG:
m&&m.$ReactComposerSelectedImagesStore_handleEditStart(n);
break;
case c('ReactComposerSlideshowActionType').CLOSE_EDIT_SLIDESHOW_DIALOG:
m&&m.$ReactComposerSelectedImagesStore_handleEditCancel(n);
break;
case c('ReactComposerSlideshowActionType').CREATE:
m&&m.$ReactComposerSelectedImagesStore_handleSlideshowCreate(n);
break;

default:break;}});



m=this;}
l.prototype.

$ReactComposerSelectedImagesStore_handleUploadStarted=function(m){
var n=m.composerID,
o=this.getComposerData(n),
p=c('ReactComposerMediaUploadStore').getUploads(n),
q=this.addNewImagesFromPhotoUploads
(p,
o.selectedImages,
o.removedUploadIDs);

o.selectedImages=o.selectedImages.concat(q);
if(o.editState!==null)
o.addedUploadIDs=o.addedUploadIDs.concat
(q.map(function(r){return r.key;}));


this.emitChange(n);};
l.prototype.

$ReactComposerSelectedImagesStore_handleUploadDone=function(m){
var n=m.composerID,
o=this.getComposerData(n),
p=c('ReactComposerPhotoStore').getPhotos(n);
o.selectedImages=this.replacePhotoUploadsFromPhotos
(p,
o.selectedImages);

o.imagesCrops=this.$ReactComposerSelectedImagesStore_calculateCrops
(n,
o.selectedImages);

this.emitChange(n);};
l.prototype.

$ReactComposerSelectedImagesStore_handleHideSlideshowEditField=function(m){
var n=m.composerID,
o=this.getComposerData(n);
o.selectedImages=[];
o.imagesCrops=[];
this.emitChange(n);};
l.prototype.

$ReactComposerSelectedImagesStore_handleToggleSlideshowDialog=function(m){
var n=m.composerID,
o=this.getComposerData(n);
if(!m.shouldShowSlideshowDialog){
o.selectedImages=[];
o.imagesCrops=[];}

this.emitChange(n);};
l.prototype.

$ReactComposerSelectedImagesStore_handleImagesSelectConfirm=function(m){
var n=m.composerID,
o=this.getComposerData(n);
o.selectedImages=o.selectedImages.concat(m.selectedImages);
o.imagesCrops=this.$ReactComposerSelectedImagesStore_calculateCrops
(n,
o.selectedImages);

this.emitChange(n);};
l.prototype.

$ReactComposerSelectedImagesStore_handleImageRemove=function(m){
var n=m.composerID,
o=this.getComposerData(n);
if(o.editState!==null)
o.removedUploadIDs.push(m.removeImage.key);

var p=o.selectedImages.filter
(function(q){
return q.key!==m.removeImage.key;});


o.selectedImages=p;
o.imagesCrops=this.$ReactComposerSelectedImagesStore_calculateCrops
(n,
p);

this.emitChange(n);};
l.prototype.

$ReactComposerSelectedImagesStore_handleReorderImages=function(m){
var n=m.composerID,
o=this.getComposerData(n),p=
m.data,q=p.fromIndex,r=p.toIndex,
s=o.selectedImages.slice(0),
t=Object.assign({},s[q]);
s[q].remove=true;
s.splice
(q>r?r:r+1,
0,
t);

s=s.filter(function(u){return !u.remove;});
o.selectedImages=s;
o.imagesCrops=this.$ReactComposerSelectedImagesStore_calculateCrops
(n,
s);

this.emitChange(n);};
l.prototype.

$ReactComposerSelectedImagesStore_handleFormatChange=function(m){
var n=m.composerID,
o=this.getComposerData(n);
o.format=m.format;
o.imagesCrops=this.$ReactComposerSelectedImagesStore_calculateCrops
(n,
o.selectedImages,
m.format);

this.emitChange(n);};
l.prototype.

$ReactComposerSelectedImagesStore_handleEditStart=function(m){
var n=m.composerID,
o=this.getComposerData(n),
p={};
c('mergeDeepInto')(p,o);
o.editState=p;
this.emitChange(n);};
l.prototype.

$ReactComposerSelectedImagesStore_handleEditCancel=function(m){
var n=m.composerID,
o=this.getComposerData(n),

p=o.editState;
o.selectedImages=p.selectedImages;
o.imagesCrops=p.imagesCrops;
o.format=p.format;
o.editState=null;
o.removedUploadIDs=[];
o.addedUploadIDs=[];
this.emitChange(n);};
l.prototype.

$ReactComposerSelectedImagesStore_handleSlideshowCreate=function(m){
var n=m.composerID,
o=this.getComposerData(n);
o.editState=null;
o.removedUploadIDs=[];
o.addedUploadIDs=[];
this.emitChange(n);};
l.prototype.

getImagesFromPhotoUploads=function(m){
var n=[];
m.forEach(function(o){
n.push
({height:null,
isLoading:true,
key:o.id,
url:null,
width:null});});


return n;};
l.prototype.


addNewImagesFromPhotoUploads=
function(m,
n,
o){

var p=this.getImagesFromPhotoUploads(m),
q=p.filter
(function(r){
var s=n.findIndex
(function(u){return u.key===r.key;}),

t=o.findIndex
(function(u){return u===r.key;});

return s===-1&&t===-1;});


return q;};
l.prototype.


replacePhotoUploadsFromPhotos=
function(m,
n){


return (n.map(function(o){
var p=o,
q=m.find
(function(r){return r.uploadID===o.key;});

if(q!=null)
p=
{height:q.height,
isLoading:false,
key:q.uploadID,
photoID:q.id,
thumbSrc:q.thumbSrc,
url:q.imageSrc,
width:q.width};


return p;}));};


l.prototype.

getPhotoIDs=function(m){
var n=this.getComposerData(m);
return n.selectedImages.
map(function(o){return o.photoID;}).
slice(0,k);};
l.prototype.

getRemovedUploadIDs=function(m){
return this.getComposerData(m).removedUploadIDs;};
l.prototype.

getAddedUploadIDs=function(m){
return this.getComposerData(m).addedUploadIDs;};
l.prototype.

getSelectedImages=function(m){
return this.getComposerData(m).selectedImages;};
l.prototype.

getThumbnailSrc=function(m){

var n=this.getComposerData(m).selectedImages;
if(n.length>0)
return n[0].thumbSrc;

return null;};
l.prototype.

getImagesCrops=function(m){
return this.getComposerData(m).imagesCrops;};
l.prototype.

getNumberOfImages=function(m){
return Math.min
(this.getComposerData(m).selectedImages.length,
k);};

l.prototype.

getFormat=function(m){
return this.getComposerData(m).format;};



f.exports=new l();}),null);

/** js/react_composer/attachments/media/slideshow/ReactComposerSlideshowActions.js */





__d('ReactComposerSlideshowActions',['ReactComposerDispatcher','ReactComposerSlideshowActionType','immutable'],(function a(b,c,d,e,f,g){










var h=
{showSlideshowEditField:function i
(j){

c('ReactComposerDispatcher').dispatch
({composerID:j,
type:c('ReactComposerSlideshowActionType').SHOW_SLIDESHOW_EDIT_FIELD});},



hideSlideshowEditField:function i
(j){

c('ReactComposerDispatcher').dispatch
({composerID:j,
type:c('ReactComposerSlideshowActionType').HIDE_SLIDESHOW_EDIT_FIELD});},



showSlideshowDialog:function i
(j,
k){

c('ReactComposerDispatcher').dispatch
({composerID:j,
entrypoint:k,
shouldShowSlideshowDialog:true,
type:c('ReactComposerSlideshowActionType').TOGGLE_SLIDESHOW_DIALOG});},



closeSlideshowDialog:function i
(j){

c('ReactComposerDispatcher').dispatch
({composerID:j,
shouldShowSlideshowDialog:false,
type:c('ReactComposerSlideshowActionType').TOGGLE_SLIDESHOW_DIALOG});},



showEditSlideshowDialog:function i
(j){

c('ReactComposerDispatcher').dispatch
({composerID:j,
type:c('ReactComposerSlideshowActionType').SHOW_EDIT_SLIDESHOW_DIALOG});},



closeEditSlideshowDialog:function i
(j){

c('ReactComposerDispatcher').dispatch
({composerID:j,
type:c('ReactComposerSlideshowActionType').CLOSE_EDIT_SLIDESHOW_DIALOG});},



selectImagesConfirm:function i
(j,
k){

c('ReactComposerDispatcher').dispatch
({composerID:j,
selectedImages:k,
type:c('ReactComposerSlideshowActionType').IMAGES_SELECT_CONFIRM});},



removeImage:function i
(j,
k){

c('ReactComposerDispatcher').dispatch
({composerID:j,
removeImage:k,
type:c('ReactComposerSlideshowActionType').IMAGE_REMOVE});},



reorderImages:function i
(j,
k,
l){

c('ReactComposerDispatcher').dispatch
({composerID:j,
data:{fromIndex:k,toIndex:l},
type:c('ReactComposerSlideshowActionType').REORDER_IMAGES});},



changeStorylineMoodFile:function i
(j,
k){

c('ReactComposerDispatcher').dispatch
({composerID:j,
selectedStorylineMood:k,
type:c('ReactComposerSlideshowActionType').STORYLINE_MOOD_CHANGE});},



deleteStorylineMoodFile:function i
(j,
k){

c('ReactComposerDispatcher').dispatch
({composerID:j,
selectedStorylineMood:k,
type:c('ReactComposerSlideshowActionType').STORYLINE_MOOD_DELETE});},



changeStorylineMoodIDSource:function i
(j,
k){

c('ReactComposerDispatcher').dispatch
({composerID:j,
storylineMoodIDSource:k,
type:c('ReactComposerSlideshowActionType').STORYLINE_MOOD_SOURCE_CHANGE});},



changeStorylineMoodSourceMap:function i
(j,
k){

c('ReactComposerDispatcher').dispatch
({composerID:j,
storylineMoodIDToSource:k,
type:c('ReactComposerSlideshowActionType').STORYLINE_MOOD_SOURCE_MAP_CHANGE});},



changeTransition:function i
(j,
k){

c('ReactComposerDispatcher').dispatch
({composerID:j,
transitionInMS:k,
type:c('ReactComposerSlideshowActionType').TRANSITION_CHANGE});},



changeDuration:function i
(j,
k){

c('ReactComposerDispatcher').dispatch
({composerID:j,
durationInMS:k,
type:c('ReactComposerSlideshowActionType').DURATION_CHANGE});},



setStorylineMoodFiles:function i
(j,
k){

c('ReactComposerDispatcher').dispatch
({composerID:j,
storylineMoodFiles:k,
type:c('ReactComposerSlideshowActionType').SET_STORYLINE_MOOD_FILES});},



createSlideshow:function i
(j){

c('ReactComposerDispatcher').dispatch
({composerID:j,
type:c('ReactComposerSlideshowActionType').CREATE});},



changeFormat:function i
(j,
k){

c('ReactComposerDispatcher').dispatch
({composerID:j,
format:k,
type:c('ReactComposerSlideshowActionType').FORMAT_CHANGE});},



selectTab:function i
(j,
k){

c('ReactComposerDispatcher').dispatch
({composerID:j,
tab:k,
type:c('ReactComposerSlideshowActionType').SELECT_TAB});},



musicCategorySelect:function i
(j,
k){

c('ReactComposerDispatcher').dispatch
({composerID:j,
selectedMusicCategory:k,
type:c('ReactComposerSlideshowActionType').MUSIC_CATEGORY_SELECT});},



previewStateChange:function i
(j,
k){

c('ReactComposerDispatcher').dispatch
({composerID:j,
isPreviewPlaying:k,
type:c('ReactComposerSlideshowActionType').PREVIEW_STATE_CHANGE});},



audioFileUploadStarted:function i
(j){

c('ReactComposerDispatcher').dispatch
({composerID:j,
type:c('ReactComposerSlideshowActionType').AUDIO_FILE_UPLOAD_STARTED});},



audioFileUploadError:function i
(j){

c('ReactComposerDispatcher').dispatch
({composerID:j,
type:c('ReactComposerSlideshowActionType').AUDIO_FILE_UPLOAD_ERROR});},



audioFileUploadSuccess:function i
(j,
k){

c('ReactComposerDispatcher').dispatch
({composerID:j,
uploadedMood:k,
type:c('ReactComposerSlideshowActionType').AUDIO_FILE_UPLOAD_SUCCESS});}};




f.exports=h;}),null);

/** js/react_composer/attachments/media/slideshow/ReactComposerSlideshowStore.js */






__d('ReactComposerSlideshowStore',['ReactComposerSlideshowActionType','ReactComposerStoreBase','SlideshowConstants','SlideshowFlowTypes','mergeDeepInto'],(function a(b,c,d,e,f,g){var h,i,






j=c('SlideshowFlowTypes').SlideshowTabKey;h=babelHelpers.inherits






(k,c('ReactComposerStoreBase'));i=h&&h.prototype;

function k(){'use strict';
var l;
i.constructor.call(this,
function(){

return {durationInMS:1000,
editState:null,
isSlideshowSelected:false,
selectedTab:j.SETTINGS_TAB,
shouldShowSlideshowDialog:false,
transitionInMS:c('SlideshowConstants').transitions.None};},


function(m){
switch(m.type){
case c('ReactComposerSlideshowActionType').CREATE:
l&&l.$ReactComposerSlideshowStore_handleSlideshowCreate(m);
break;
case c('ReactComposerSlideshowActionType').SHOW_SLIDESHOW_EDIT_FIELD:
l&&l.$ReactComposerSlideshowStore_handleShowSlideshowEditField(m);
break;
case c('ReactComposerSlideshowActionType').HIDE_SLIDESHOW_EDIT_FIELD:
l&&l.$ReactComposerSlideshowStore_handleHideSlideshowEditField(m);
break;
case c('ReactComposerSlideshowActionType').TOGGLE_SLIDESHOW_DIALOG:
l&&l.$ReactComposerSlideshowStore_handleToggleSlideshowDialog(m);
break;
case c('ReactComposerSlideshowActionType').TRANSITION_CHANGE:
l&&l.$ReactComposerSlideshowStore_handleTransitionChange(m);
break;
case c('ReactComposerSlideshowActionType').DURATION_CHANGE:
l&&l.$ReactComposerSlideshowStore_handleDurationChange(m);
break;
case c('ReactComposerSlideshowActionType').SHOW_EDIT_SLIDESHOW_DIALOG:
l&&l.$ReactComposerSlideshowStore_handleEditStart(m);
break;
case c('ReactComposerSlideshowActionType').CLOSE_EDIT_SLIDESHOW_DIALOG:
l&&l.$ReactComposerSlideshowStore_handleEditCancel(m);
break;
case c('ReactComposerSlideshowActionType').SELECT_TAB:
l&&l.$ReactComposerSlideshowStore_handleSelectTab(m);
break;

default:break;}});



l=this;}
k.prototype.

$ReactComposerSlideshowStore_handleSlideshowCreate=function(l){'use strict';
var m=l.composerID,
n=this.getComposerData(m);
n.isSlideshowSelected=true;
n.shouldShowSlideshowDialog=false;
n.editState=null;
this.emitChange(m);};
k.prototype.

$ReactComposerSlideshowStore_handleSelectTab=function(l){'use strict';
var m=l.composerID,
n=this.getComposerData(m);
n.selectedTab=l.tab;
this.emitChange(m);};
k.prototype.

$ReactComposerSlideshowStore_handleShowSlideshowEditField=function(l){'use strict';
var m=l.composerID,
n=this.getComposerData(m);
n.isSlideshowSelected=true;
this.emitChange(m);};
k.prototype.

$ReactComposerSlideshowStore_handleHideSlideshowEditField=function(l){'use strict';
var m=l.composerID,
n=this.getComposerData(m);
n.isSlideshowSelected=false;
this.emitChange(m);};
k.prototype.

$ReactComposerSlideshowStore_handleToggleSlideshowDialog=function(l){'use strict';
var m=l.composerID,
n=this.getComposerData(m);
n.shouldShowSlideshowDialog=l.shouldShowSlideshowDialog;
this.emitChange(m);};
k.prototype.

$ReactComposerSlideshowStore_handleTransitionChange=function(l){'use strict';
var m=l.composerID,
n=this.getComposerData(m);
n.transitionInMS=l.transitionInMS;
this.emitChange(m);};
k.prototype.

$ReactComposerSlideshowStore_handleDurationChange=function(l){'use strict';
var m=l.composerID,
n=this.getComposerData(m);
n.durationInMS=l.durationInMS;
this.emitChange(m);};
k.prototype.

$ReactComposerSlideshowStore_handleEditStart=function(l){'use strict';
var m=l.composerID,
n=this.getComposerData(m),
o={};
c('mergeDeepInto')(o,n);
n.editState=o;
n.shouldShowSlideshowDialog=true;
this.emitChange(m);};
k.prototype.

$ReactComposerSlideshowStore_handleEditCancel=function(l){'use strict';
var m=l.composerID,
n=this.getComposerData(m);
n.shouldShowSlideshowDialog=false;
n.isSlideshowSelected=true;

var o=n.editState;
n.durationInMS=o.durationInMS;
n.transitionInMS=o.transitionInMS;
n.editState=null;
this.emitChange(m);};
k.prototype.

isSlideshowSelected=function(l){'use strict';
return this.getComposerData(l).isSlideshowSelected;};
k.prototype.

isEditing=function(l){'use strict';
return this.getComposerData(l).editState!==null;};
k.prototype.

shouldShowSlideshowDialog=function(l){'use strict';
return this.getComposerData(l).shouldShowSlideshowDialog;};
k.prototype.

getDurationInMS=function(l){'use strict';
return this.getComposerData(l).durationInMS;};
k.prototype.

getTotalLength=function(l,m){'use strict';
return this.getDurationInMS(l)*m+
this.getTransitionInMS(l)*m;};
k.prototype.

getTransitionInMS=function(l){'use strict';
return this.getComposerData(l).transitionInMS;};
k.prototype.

getSelectedTab=function(l){'use strict';
return this.getComposerData(l).selectedTab;};



f.exports=new k();}),null);

/** js/react_composer/attachments/media/slideshow/ReactComposerSlideshowAudioStore.js */






__d('ReactComposerSlideshowAudioStore',['ReactComposerDispatcher','ReactComposerMediaUploadActionType','ReactComposerSelectedImagesStore','ReactComposerSlideshowActionType','ReactComposerSlideshowActions','ReactComposerSlideshowStore','ReactComposerStoreBase','SlideshowAudioUtil','SlideshowDataManager','SlideshowMusicCategory','SlideshowUtil','mergeDeepInto','immutable'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits























(j,c('ReactComposerStoreBase'));i=h&&h.prototype;

function j(){'use strict';
var k;
i.constructor.call(this,
function(){

return {audioFileUploadInfo:
{isUploading:false,
hasError:false},

editState:null,
isPreviewPlaying:false,
recentlyUsedStorylineMoods:new (c('immutable').List)(),
selectedMusicCategory:c('SlideshowMusicCategory').ALL_TRACKS,
selectedStorylineMood:null,
storylineMoodFiles:new (c('immutable').List)(),
storylineMoodIDToSource:new (c('immutable').Map)()};},


function(l){
switch(l.type){
case c('ReactComposerSlideshowActionType').IMAGES_SELECT_CONFIRM:
k&&
k.$ReactComposerSlideshowAudioStore_updateStorylineMoodSource
(l,
function(){
c('ReactComposerSlideshowActions').previewStateChange
(l.composerID,
false);});



break;
case c('ReactComposerSlideshowActionType').STORYLINE_MOOD_CHANGE:
k&&k.$ReactComposerSlideshowAudioStore_handleStorylineMoodChange(l);
k&&
k.$ReactComposerSlideshowAudioStore_updateStorylineMoodSource
(l,
function(){
c('ReactComposerSlideshowActions').previewStateChange
(l.composerID,
true);});



break;
case c('ReactComposerSlideshowActionType').STORYLINE_MOOD_DELETE:
k&&k.$ReactComposerSlideshowAudioStore_handleStorylineMoodDelete(l);
break;
case c('ReactComposerSlideshowActionType').SHOW_EDIT_SLIDESHOW_DIALOG:
k&&k.$ReactComposerSlideshowAudioStore_handleEditStart(l);
break;
case c('ReactComposerSlideshowActionType').CLOSE_EDIT_SLIDESHOW_DIALOG:
k&&k.$ReactComposerSlideshowAudioStore_handleEditCancel(l);
break;
case c('ReactComposerSlideshowActionType').DURATION_CHANGE:
k&&k.$ReactComposerSlideshowAudioStore_updateStorylineMoodSource(l);
break;
case c('ReactComposerMediaUploadActionType').PHOTO_UPLOAD_ENQUEUED:
case c('ReactComposerSlideshowActionType').IMAGE_REMOVE:
k&&k.$ReactComposerSlideshowAudioStore_updateStorylineMoodSource(l);
break;
case c('ReactComposerSlideshowActionType').SET_STORYLINE_MOOD_FILES:
k&&k.$ReactComposerSlideshowAudioStore_setStorylineMoodFiles(l);
break;
case c('ReactComposerSlideshowActionType').STORYLINE_MOOD_SOURCE_CHANGE:
k&&k.$ReactComposerSlideshowAudioStore_handleStorylineMoodSourceChange(l);
break;
case c('ReactComposerSlideshowActionType').STORYLINE_MOOD_SOURCE_MAP_CHANGE:
k&&k.$ReactComposerSlideshowAudioStore_handleStorylineMoodSourceMapChange(l);
break;
case c('ReactComposerSlideshowActionType').MUSIC_CATEGORY_SELECT:
k&&k.$ReactComposerSlideshowAudioStore_handleMusicCategorySelect(l);
break;
case c('ReactComposerSlideshowActionType').PREVIEW_STATE_CHANGE:
k&&k.$ReactComposerSlideshowAudioStore_handlePreviewStateChange(l);
break;
case c('ReactComposerSlideshowActionType').AUDIO_FILE_UPLOAD_STARTED:
k&&k.$ReactComposerSlideshowAudioStore_handleAudioFileUploadStarted(l);
break;
case c('ReactComposerSlideshowActionType').AUDIO_FILE_UPLOAD_ERROR:
k&&k.$ReactComposerSlideshowAudioStore_handleAudioFileUploadError(l);
break;
case c('ReactComposerSlideshowActionType').AUDIO_FILE_UPLOAD_SUCCESS:
k&&k.$ReactComposerSlideshowAudioStore_handleAudioFileUploadSuccess(l);
break;

default:break;}});



k=this;}
j.prototype.

$ReactComposerSlideshowAudioStore_updateStorylineMoodSource=
function(k,
l){
'use strict';
var m=k.composerID,
n=this.getComposerData(m),
o=n.selectedStorylineMood;
if(!o)
return;

var p=o.moodID,
q=this.getNumberOfImages(m),
r=q===0?
c('SlideshowUtil').getMaximumTotalLengthInMS():
this.getTotalLength(m,q),
s=this.getStorylineMoodIDToSource(m);
c('SlideshowDataManager').fetchStorylineMoodSource
(p,
r,
function(t){
c('ReactComposerSlideshowActions').changeStorylineMoodIDSource
(m,
t);

s=
s.set
(p,
t);

c('ReactComposerSlideshowActions').changeStorylineMoodSourceMap
(m,
s);

if(l)
l();});



n.selectedStorylineMood.source=
s.get(p);
this.emitChange(m);};
j.prototype.

$ReactComposerSlideshowAudioStore_handleAudioFileUploadStarted=function(k){'use strict';
var l=k.composerID,
m=this.getComposerData(l);
m.audioFileUploadInfo.isUploading=true;
m.audioFileUploadInfo.hasError=false;
m.selectedMusicCategory=c('SlideshowMusicCategory').USER_UPLOADED;
this.emitChange(l);};
j.prototype.

$ReactComposerSlideshowAudioStore_handleAudioFileUploadError=function(k){'use strict';
var l=k.composerID,
m=this.getComposerData(l);
m.audioFileUploadInfo.isUploading=false;
m.audioFileUploadInfo.hasError=true;
this.emitChange(l);};
j.prototype.

$ReactComposerSlideshowAudioStore_handleAudioFileUploadSuccess=function(k){'use strict';
var l=k.composerID,
m=this.getComposerData(l);
m.audioFileUploadInfo.isUploading=false;
m.audioFileUploadInfo.hasError=false;
m.storylineMoodFiles=
m.storylineMoodFiles.unshift(k.uploadedMood);
this.emitChange(l);};
j.prototype.

$ReactComposerSlideshowAudioStore_handleMusicCategorySelect=function(k){'use strict';
var l=k.composerID,
m=this.getComposerData(l);
m.selectedMusicCategory=k.selectedMusicCategory;
this.emitChange(l);};
j.prototype.

$ReactComposerSlideshowAudioStore_handleEditStart=function(k){'use strict';
var l=k.composerID,
m=this.getComposerData(l),
n={};
c('mergeDeepInto')(n,m);
m.editState=n;
this.emitChange(l);};
j.prototype.

$ReactComposerSlideshowAudioStore_handleEditCancel=function(k){'use strict';
var l=k.composerID,
m=this.getComposerData(l),

n=m.editState;
m.selectedStorylineMood=n.selectedStorylineMood;
m.selectedMusicCategory=n.selectedMusicCategory;
m.editState=null;
this.emitChange(l);};
j.prototype.

$ReactComposerSlideshowAudioStore_handleStorylineMoodChange=function(k){'use strict';
var l=k.composerID,
m=this.getComposerData(l);
m.selectedStorylineMood=k.selectedStorylineMood;
if(k.selectedStorylineMood!=null)
m.recentlyUsedStorylineMoods=
m.recentlyUsedStorylineMoods.unshift(k.selectedStorylineMood);

this.emitChange(l);};
j.prototype.

$ReactComposerSlideshowAudioStore_handleStorylineMoodDelete=function(k){'use strict';
var l=k.composerID,
m=this.getComposerData(l),
n=k.selectedStorylineMood;
if(c('SlideshowAudioUtil').storylineMoodCompare
(n,
m.selectedStorylineMood)){

m.selectedStorylineMood=null;
m.isPreviewPlaying=false;}

m.storylineMoodFiles=m.storylineMoodFiles.filter
(function(o){return !c('SlideshowAudioUtil').storylineMoodCompare(o,n);});

c('SlideshowDataManager').deleteAudioFile
(n.moodID);

this.emitChange(l);};
j.prototype.

$ReactComposerSlideshowAudioStore_handleStorylineMoodSourceChange=function(k){'use strict';
var l=k.composerID,
m=this.getComposerData(l);
if(!m.selectedStorylineMood)
return;

m.selectedStorylineMood.source=k.storylineMoodIDSource;
this.emitChange(l);};
j.prototype.

$ReactComposerSlideshowAudioStore_handleStorylineMoodSourceMapChange=function(k){'use strict';
var l=k.composerID,
m=this.getComposerData(l);
m.storylineMoodIDToSource=k.storylineMoodIDToSource;
this.emitChange(l);};
j.prototype.

$ReactComposerSlideshowAudioStore_handlePreviewStateChange=function(k){'use strict';
var l=k.composerID,
m=this.getComposerData(l);
m.isPreviewPlaying=k.isPreviewPlaying;
this.emitChange(l);};
j.prototype.

$ReactComposerSlideshowAudioStore_setStorylineMoodFiles=function(k){'use strict';
var l=k.composerID,
m=this.getComposerData(l);
m.storylineMoodFiles=k.storylineMoodFiles;
this.emitChange(l);};
j.prototype.

getNumberOfImages=function(k){'use strict';
c('ReactComposerDispatcher').waitFor
([c('ReactComposerSelectedImagesStore').getDispatchToken()]);

return c('ReactComposerSelectedImagesStore').getNumberOfImages(k);};
j.prototype.

getStorylineMoodFiles=function(k){'use strict';
return this.getComposerData(k).storylineMoodFiles.toArray();};
j.prototype.

getRecentlyUsedStorylineMoods=function(k){'use strict';

return (this.getComposerData(k).recentlyUsedStorylineMoods.toArray());};

j.prototype.

getSelectedStorylineMood=function(k){'use strict';
return this.getComposerData(k).selectedStorylineMood;};
j.prototype.

getStorylineMoodIDToSource=function(k){'use strict';
return this.getComposerData(k).storylineMoodIDToSource;};
j.prototype.

getSelectedMusicCategory=function(k){'use strict';
return this.getComposerData(k).selectedMusicCategory;};
j.prototype.

getIsPreviewPlaying=function(k){'use strict';
return this.getComposerData(k).isPreviewPlaying;};
j.prototype.

getAudioFileUploadInfo=function(k){'use strict';
return this.getComposerData(k).audioFileUploadInfo;};
j.prototype.

getTotalLength=function(k,l){'use strict';
c('ReactComposerDispatcher').waitFor
([c('ReactComposerSlideshowStore').getDispatchToken()]);

return c('ReactComposerSlideshowStore').getTotalLength(k,l);};



f.exports=new j();}),null);

/** js/react_composer/utils/ReactComposerPostUtilsCore.js */





__d('ReactComposerPostUtilsCore',['invariant','ReactComposerActions'],(function a(b,c,d,e,f,g,h){











var i=
{getCoreData:function j
(k,
l,
m){

!isNaN(m)&&m>0||h(0,'target id must be a number');

return Object.assign

({is_react:true,
xhpc_composerid:k,
xhpc_targetid:m},

l);},



handlePostSucceeded:function j(k){
c('ReactComposerActions').postSucceeded(k);
c('ReactComposerActions').reset(k);}};



f.exports=i;}),null);

/** js/react_composer/attachments/status/ReactComposerStatusLazyAttachmentTextarea.react.js */





__d('ReactComposerStatusLazyAttachmentTextarea.react',['cx','ReactComposerContextMixin','ReactComponentWithPureRenderMixin','React','ReactDOM','joinClasses'],(function a(b,c,d,e,f,g,h){

'use strict';










var i=c('React').PropTypes,






j=c('React').createClass({displayName:'ReactComposerStatusLazyAttachmentTextarea',
mixins:[c('ReactComponentWithPureRenderMixin'),c('ReactComposerContextMixin')],




propTypes:
{expanded:i.bool,
onFocus:i.func.isRequired,
placeholder:i.string.isRequired},


getInitialState:function k(){

return {message:null};},



componentWillUnmount:function k(){
this._onUnmount();},


render:function k(){

return (c('React').createElement('div',
{className:c('joinClasses')

(this.props.className,
"_4h96")},

c('React').createElement('textarea',
{className:"_4h98",
ref:'textarea',
placeholder:this.props.placeholder,
onFocus:this.props.onFocus,
onChange:this.onChange,
name:'xhpc_message_text'}),

c('React').createElement('input',
{type:'hidden',
name:'xhpc_message',
value:this.state.message})));},





onChange:function k(l){
this.setState({message:l.target.value});},


focus:function k(){
this.refs.textarea.focus();},













_onUnmount:function k(){
var l=c('ReactDOM').findDOMNode(this.refs.textarea);









e.call
(null,

['ReactComposerStatusActions',
'ReactComposerPrefillMentionsInput',
'ReactInputSelection'],


function(m,
n,
o){


var p=l.value;


if(!p)
return;


var q=
{text:p},

r=o.getSelection(l),

s=
n.createEditorState
(q,
r);


m.setEditorState
(this.context.composerID,
s);}.

bind(this));}});




f.exports=j;}),null);

/** js/react_composer/attachments/status/ReactComposerStatusLazyAttachmentTextareaContainer.react.js */





__d('ReactComposerStatusLazyAttachmentTextareaContainer.react',['cx','ReactComposerAttachmentStore','ReactComposerAttachmentType','ReactComposerContextMixin','ReactComposerEvents','ReactComposerPropsAndStoreBasedStateMixin','ReactComposerStatusLazyAttachmentTextarea.react','Arbiter','ReactComponentWithPureRenderMixin','React','SubscriptionsHandler'],(function a(b,c,d,e,f,g,h){

'use strict';















var i=c('React').PropTypes,

j=c('React').createClass({displayName:'ReactComposerStatusLazyAttachmentTextareaContainer',
_subscriptions:undefined,

mixins:[c('ReactComponentWithPureRenderMixin'),c('ReactComposerContextMixin'),


c('ReactComposerPropsAndStoreBasedStateMixin')(c('ReactComposerAttachmentStore'))],




statics:
{calculateState:function k(l,m){

return {focused:c('ReactComposerAttachmentStore').isSelectedAttachmentActive
(l)};}},





componentWillMount:function k(){
this._subscriptions=new (c('SubscriptionsHandler'))();
this._subscriptions.addSubscriptions
(c('Arbiter').subscribe
(c('ReactComposerEvents').ACTIVATE_ATTACHMENT+this.context.composerID,
function(){
var l=
c('ReactComposerAttachmentStore').getSelectedAttachmentID
(this.context.composerID);

if(l===c('ReactComposerAttachmentType').STATUS)
this.refs.textarea.focus();}.

bind(this)));},




componentWillUnmount:function k(){
this._subscriptions&&this._subscriptions.release();},


propTypes:
{expanded:i.bool,
id:i.string,
hasProfilePic:i.bool,
onFocus:i.func.isRequired,
placeholder:i.node.isRequired},


render:function k(){

return (c('React').createElement(c('ReactComposerStatusLazyAttachmentTextarea.react'),babelHelpers['extends']
({className:

(this.state.focused?"_3_1x":'')+

(this.props.expanded?' '+"_4h97":'')+

(this.props.hasProfilePic?' '+"_30z":'')},

this.props,
{ref:'textarea'})));}});





f.exports=j;}),null);

/** js/react_composer/attachments/status/ReactComposerStatusPlaceholderFooter.react.js */






__d('ReactComposerStatusPlaceholderFooter.react',['cx','fbt','ReactComposerAttachmentType','ReactComposerConfig','ReactComposerGenericFooter.react','DOMContainer.react','React','XUIButton.react','requireWeak'],(function a(b,c,d,e,f,g,h,i){var j,k,













l;
c('requireWeak')('ReactComposerAudienceSelectorContainer.react',function(n){
l=n;});
j=babelHelpers.inherits





(m,c('React').PureComponent);k=j&&j.prototype;m.prototype.






render=function(){'use strict';
var n=this.props.config,
o=
n.attachmentsConfig[c('ReactComposerAttachmentType').STATUS],

p=o.footerBackground?
o.footerBackground:
n.showExpandedComposer?
'white':
'light-wash',

q=
c('React').createElement(c('XUIButton.react'),
{className:"_1mf7",
label:i._(["Post","0a1c00b9f90903aa694f9e3e1b1e515e"]),
use:'confirm'}),


r=null;
if(n.audienceXHP)

r=l&&n.targetData?
c('React').createElement(l,
{audienceXHP:n.audienceXHP,
viewerIsTarget:n.targetData.viewerIsTarget}):

c('React').createElement(c('DOMContainer.react'),
{className:"_5dd8"},
n.audienceXHP);




return (c('React').createElement(c('ReactComposerGenericFooter.react'),
{audienceSelector:r,
postButton:q,
background:p,
config:n}));};


function m(){'use strict';j.apply(this,arguments);}m.propTypes={config:c('ReactComposerConfig').isRequired};


f.exports=m;}),null);

/** js/react_composer/attachments/status/taggers/ReactComposerTaggerSummaryPlaceholder.react.js */






__d('ReactComposerTaggerSummaryPlaceholder.react',['cx','React'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits





(k,c('React').PureComponent);j=i&&i.prototype;k.prototype.
render=function(){'use strict';

return (c('React').createElement('div',
{className:"_3o1x"}));};


function k(){'use strict';i.apply(this,arguments);}


f.exports=k;}),null);

/** js/react_composer/attachments/status/ReactComposerStatusAttachmentPlaceholder.react.js */






__d('ReactComposerStatusAttachmentPlaceholder.react',['ReactComposerAttachmentActions','ReactComposerAttachmentStore','ReactComposerAttachmentType','ReactComposerConfig','ReactComposerContextMixin','ReactComposerDragDropPromptLazy.react','ReactComposerLoggingName','ReactComposerPostUtilsCore','ReactComposerProfilePhotoBlock.react','ReactComposerPropsAndStoreBasedStateMixin','ReactComposerStatusLazyAttachmentTextareaContainer.react','ReactComposerStatusPlaceholderFooter.react','ReactComposerStore','ReactComposerTaggerSummaryPlaceholder.react','ActorURI','Bootloader','Event','ReactComponentWithPureRenderMixin','React','ReactDOM','SubscriptionsHandler','curry'],(function a(b,c,d,e,f,g){


























var h=c('React').PropTypes,

i=c('React').createClass({displayName:'ReactComposerStatusAttachmentPlaceholder',

_subscriptionsHandler:null,

mixins:[c('ReactComponentWithPureRenderMixin'),c('ReactComposerContextMixin'),


c('ReactComposerPropsAndStoreBasedStateMixin')(c('ReactComposerAttachmentStore'),c('ReactComposerStore'))],





propTypes:
{config:c('ReactComposerConfig').isRequired,
expanded:h.bool,
placeholder:h.string.isRequired},


statics:
{calculateState:function j(k,l){

return {isActive:c('ReactComposerAttachmentStore').isSelectedAttachmentActive
(k),

sproutsDisplayState:c('ReactComposerStore').getSproutsDisplayState(k)};}},




componentDidMount:function j(){
var k=new (c('SubscriptionsHandler'))();
k.addSubscriptions
(c('Event').listen
(c('ReactDOM').findDOMNode(this.refs.form),
'success',
c('curry')
(c('ReactComposerPostUtilsCore').handlePostSucceeded,
this.context.composerID)));




this._subscriptionsHandler=k;},


componentWillUnmount:function j(){
this._subscriptionsHandler&&this._subscriptionsHandler.release();},


render:function j(){
var k=
this.context.gks&&this.context.gks.isSproutsComposer,

l=this._renderTextArea(),

m=k?
this._renderSproutsList():
null,

n=this.state.isActive||this.props.expanded||k?
c('React').createElement(c('ReactComposerStatusPlaceholderFooter.react'),
{config:this.props.config}):

null;


return (c('React').createElement('div',null,
c('React').createElement(c('ReactComposerDragDropPromptLazy.react'),
{root:this,
config:this.props.config,
onFilesDrop:this._onFilesDrop,
onURLDrop:this._onURLDrop}),

c('React').createElement('form',
{action:c('ActorURI').create
('/ajax/updatestatus.php',
this.context.actorID),

method:'post',
rel:'async',
ref:'form'},
l,
c('React').createElement(c('ReactComposerTaggerSummaryPlaceholder.react'),null),
m,
n,
this._getHiddenInputs())));},





_renderTextArea:function j(){
var k=
this.props.config.attachmentsConfig[c('ReactComposerAttachmentType').STATUS],

l=
c('React').createElement(c('ReactComposerStatusLazyAttachmentTextareaContainer.react'),
{expanded:this.props.expanded,
hasProfilePic:k.showProfilePic,
onFocus:this._onFocus,
placeholder:this.props.placeholder});


if(k.showProfilePic){
if(k.templatesConfig){
var m=
k.templatesConfig.module;

return (c('React').createElement(m,{config:this.props.config},
l));}else 




return (c('React').createElement(c('ReactComposerProfilePhotoBlock.react'),
{profilePicSrc:k.profilePicSrc,
profileURI:k.profileURI,
profilePhotoBadge:k.customProfilePhoto,
currentProfileBadgeURI:k.currentProfileBadgeURI},
l));}else 




return l;},



_renderSproutsList:function j(){
var k=this.context.jsModules&&
this.context.jsModules.ComposerSproutsListContainer;


return (c('React').createElement(k,
{config:this.props.config}));},




_onFocus:function j(){
c('ReactComposerAttachmentActions').selectAttachment
(this.context.composerID,
c('ReactComposerAttachmentType').STATUS,
true,
c('ReactComposerLoggingName').INLINE_COMPOSER);},



_onFilesDrop:function j(k){
var l=
this.props.config.attachmentsConfig[c('ReactComposerAttachmentType').MEDIA];

c('Bootloader').loadModules
(["ReactComposerStatusUtils","ReactComposerPhotoUploader"],



function(m,n){
var o=this.context.composerID;
m.uploadDroppedFiles
(o,
k,
new n
(this.context,
l.photoLimit,
{disableFaceRecognition:l.disableFaceboxTagger}),

this.props.config.targetData.targetSupportsMultiMedia,
this.props.config.attachmentsConfig[c('ReactComposerAttachmentType').MEDIA],
this.context);}.

bind(this),'ReactComposerStatusAttachmentPlaceholder.react');},


_onURLDrop:function j(k){
c('Bootloader').loadModules
(["ReactComposerScrapedAttachmentActions","ReactComposerStatusUtils"],




function(l,
m){

var n=
this.props.config.attachmentsConfig[c('ReactComposerAttachmentType').STATUS];

c('ReactComposerAttachmentActions').selectAttachment
(this.context.composerID,
c('ReactComposerAttachmentType').STATUS,
true,
c('ReactComposerLoggingName').LINK_DROPPED);


l.enabled
(this.context.composerID,
n.canScrapeShare);


m.scrapeLink
(this.context.composerID,
this.context.targetID,
k,
this.context.composerType,
this.context.actorID);}.

bind(this),'ReactComposerStatusAttachmentPlaceholder.react');},



_getHiddenInputs:function j(){
var k=c('ReactComposerPostUtilsCore').getCoreData
(this.context.composerID,

this.props.config.contextInfo,
this.context.targetID),


l=[];
for(var m in k)
l.push



(c('React').createElement('input',
{type:'hidden',
name:m,
value:k[m],
key:m}));




return l;}});



f.exports=i;}),null);

/** js/react_composer/attachments/status/ReactComposerStatusAttachmentSelector.react.js */






__d('ReactComposerStatusAttachmentSelector.react',['fbt','ix','ReactComponentWithPureRenderMixin','React','ReactComposerAttachmentSelectorContainer.react','ReactComposerAttachmentType','ReactComposerLoggingName'],(function a(b,c,d,e,f,g,h,i){








var j=c('React').PropTypes,




k=c('React').createClass({displayName:'ReactComposerStatusAttachmentSelector',
mixins:[c('ReactComponentWithPureRenderMixin')],

propTypes:
{isInMoreButton:j.bool,
label:j.string},


getDefaultProps:function l(){

return {label:h._(["Status","32ae0f875a527fbdc595ead6d7c77944"])};},






render:function l(){

return (c('React').createElement(c('ReactComposerAttachmentSelectorContainer.react'),
{attachmentID:c('ReactComposerAttachmentType').STATUS,
label:this.props.label,
icon:i("40551"),
'data-testid':'status-attachment-selector',
loggingName:c('ReactComposerLoggingName').STATUS_TAB_SELECTOR,
tabIndex:this.props.isInMoreButton?'-1':undefined}));}});





f.exports=k;}),null);

/** www/__virtual__/x/XReactComposerStatusAttachmentBootstrapController.js */



__d("XReactComposerStatusAttachmentBootstrapController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/react_composer\/status\/bootstrap\/",{composer_id:{type:"String",required:true},composer_type:{type:"Enum",required:true,enumType:1},target_id:{type:"String",required:true}});}),

null);

/** js/react_composer/attachments/status/ReactComposerStatusLazyAttachment.react.js */







__d('ReactComposerStatusLazyAttachment.react',['fbt','ReactComposerAttachmentType','ReactComposerBootloaderPropTypes','ReactComposerLoadableAttachmentBodyMixin','ReactComposerStatusAttachmentPlaceholder.react','XReactComposerStatusAttachmentBootstrapController','ActorURI','Arbiter','Bootloader','React'],(function a(b,c,d,e,f,g,h){












var i=c('React').PropTypes,





j=c('React').createClass({displayName:'ReactComposerStatusLazyAttachment',

_useCustomPlaceholder:true,

mixins:[c('ReactComposerLoadableAttachmentBodyMixin')],



propTypes:
{additionalTaggers:i.arrayOf(i.shape
({button:i.element.isRequired,
container:i.element.isRequired})),

additionalFooterActions:i.arrayOf(i.element),
bootloader:c('ReactComposerBootloaderPropTypes'),
config:i.object.isRequired,
expanded:i.bool,
onPostIntent:i.func,
placeholder:i.string.isRequired},


getDefaultProps:function k(){

return {placeholder:h._(["What's on your mind?","2340e43c54f5a3de9ca7fc0a7efc2cae"])};},






statics:
{attachmentID:c('ReactComposerAttachmentType').STATUS,
initOnlyWhenComposerActive:true},


getInitialState:function k(){

return {expanded:false};},



componentDidMount:function k(){
c('Arbiter').inform
('ReactComposerStatusLazyAttachment/mounted',
this.context.composerID,
c('Arbiter').BEHAVIOR_STATE);},



componentWillUpdate:function k(l,m){
if(!m.isSelected)
this._useCustomPlaceholder=false;},



getPlaceholderModule:function k(){



if(!this._useCustomPlaceholder)
return null;



if(this._placeholder)
return this._placeholder;


this._placeholder=c('ReactComposerStatusAttachmentPlaceholder.react');

return this._placeholder;},


bootload:function k(l){
if(this.props.bootloader){
this.props.bootloader.statusAttachment(l);}else 

c('Bootloader').loadModules
(["ReactComposerStatusAttachmentContainer.react"],
l,'ReactComposerStatusLazyAttachment.react');},




getBootstrapURI:function k(){
return c('ActorURI').create
(c('XReactComposerStatusAttachmentBootstrapController').
getURIBuilder().
setString('composer_id',this.context.composerID).
setEnum('composer_type',this.context.composerType).
setString('target_id',this.context.targetID).
getURI(),
this.context.actorID);}});




f.exports=j;}),null);

/** js/react_composer/mixins/ReactComposerContextProviderMixin.js */





__d('ReactComposerContextProviderMixin',['invariant','ReactComposerContextMixin'],(function a(b,c,d,e,f,g,h){



var i=c('ReactComposerContextMixin').contextTypes,






j=
{childContextTypes:i,

getChildContext:function k(){

return {actorID:this.props.contextConfig.actorID,
composerID:this.props.contextConfig.composerID,
composerType:this.props.contextConfig.composerType,
gks:this.props.contextConfig.gks||{},
targetID:this.props.contextConfig.targetID,
jsModules:this.props.contextConfig.jsModules,
jsResources:this.props.contextConfig.jsResources};},



componentWillMount:function k(){

this.props.contextConfig.actorID||h(0,
'Prop `actorID` must be provided when using '+
'ReactComposerContextProviderMixin');



this.props.contextConfig.composerID||h(0,
'Prop `composerID` must be provided when using '+
'ReactComposerContextProviderMixin');



this.props.contextConfig.composerType||h(0,
'Prop `composerType` must be provided when using '+
'ReactComposerContextProviderMixin');



this.props.contextConfig.targetID||h(0,
'Prop `targetID` must be provided when using '+
'ReactComposerContextProviderMixin');}};




f.exports=j;}),null);

/** js/react_composer/ui/body/ReactComposerBodyContainer.react.js */






__d('ReactComposerBodyContainer.react',['cx','ReactComposerAttachmentStore','ReactComposerBody.react','ReactComposerPropsAndStoreBasedStateMixin','ReactComponentWithPureRenderMixin','React'],(function a(b,c,d,e,f,g,h){

'use strict';








var i=c('React').PropTypes,



j=c('React').createClass({displayName:'ReactComposerBodyContainer',
mixins:[c('ReactComponentWithPureRenderMixin'),

c('ReactComposerPropsAndStoreBasedStateMixin')(c('ReactComposerAttachmentStore'))],




propTypes:
{expanded:i.bool,
hasMinHeight:i.bool},


getDefaultProps:function k(){

return {expanded:false,
hasMinHeight:true};},



statics:
{calculateState:function k
(l,
m,
n){

var o=c('ReactComposerAttachmentStore').isSelectedAttachmentActive
(l);



return {active:o};}},




render:function k(){
var l=

(this.state.active&&this.props.hasMinHeight?"_5xv3":'')+
(this.props.expanded?' '+"_4cw":'');



return (c('React').createElement(c('ReactComposerBody.react'),{className:l},


this.props.children));}});





f.exports=j;}),null);

/** js/react_composer/ui/header/ReactComposerHeaderProps.js */






__d('ReactComposerHeaderProps',['React'],(function a(b,c,d,e,f,g){



var h=c('React').PropTypes,

i=
{propTypes:
{attachmentSelectors:h.arrayOf(h.node),
background:h.string,
forceThrobber:h.bool,
noHorizontalMargin:h.bool,
rightChild:h.element,
showDelimiter:h.bool,
truncateSelectorText:h.bool},


getDefaultProps:function j(){

return {background:'white',
forceThrobber:false,
noHorizontalMargin:false,
showDelimiter:true,
truncateSelectorText:false};}};




f.exports=i;}),null);

/** js/react_composer/ui/header/ReactComposerHeaderCore.react.js */






__d('ReactComposerHeaderCore.react',['cx','ReactComposerHeaderProps','LeftRight.react','React','XUICardSection.react','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits
















(k,c('React').PureComponent);j=i&&i.prototype;k.prototype.



render=function(){'use strict';
var l;
if(this.props.showDelimiter){
l=
c('React').createElement('ul',{className:"_-h"},
c('React').Children.map(this.props.attachmentSelectors,function(m,n){
return (c('React').createElement('li',
{className:"_1tm3",
key:n},
m));}));}else 




l=this.props.attachmentSelectors;



return (c('React').createElement(c('XUICardSection.react'),
{background:this.props.background,
className:c('joinClasses')
(this.props.className,"_4d6h"+



(this.props.noHorizontalMargin?' '+"_4p1p":'')+

(this.props.truncateSelectorText?' '+"_1kvc":''))},


c('React').createElement(c('LeftRight.react'),null,
c('React').createElement('div',null,l),
c('React').createElement('div',null,this.props.children))));};



function k(){'use strict';i.apply(this,arguments);}k.propTypes=c('ReactComposerHeaderProps').propTypes;k.defaultProps=c('ReactComposerHeaderProps').getDefaultProps();


f.exports=k;}),null);

/** js/react_composer/ui/header/ReactComposerLazyHeader.react.js */






__d('ReactComposerLazyHeader.react',['ReactComposerHeaderCore.react','ReactComposerHeaderProps','ReactComposerPropsAndStoreBasedStateMixin','ReactComposerStore','Bootloader','ReactComponentWithPureRenderMixin','React'],(function a(b,c,d,e,f,g){
















var h=c('React').createClass({displayName:'ReactComposerLazyHeader',
mixins:[c('ReactComponentWithPureRenderMixin'),

c('ReactComposerPropsAndStoreBasedStateMixin')(c('ReactComposerStore'))],




propTypes:c('ReactComposerHeaderProps').propTypes,

getDefaultProps:c('ReactComposerHeaderProps').getDefaultProps,

getInitialState:function i(){

return {shouldInitialize:true,
header:null};},



statics:
{calculateState:function i(j,k){

return {isActive:c('ReactComposerStore').isActive(j)};}},




componentDidUpdate:function i(j,k){
if(this.state.isActive&&this.state.shouldInitialize){
this.setState({shouldInitialize:!this.state.shouldInitialize});

c('Bootloader').loadModules
(["ReactComposerHeader.react"],
function(l){return this.setState({header:l});}.bind(this),'ReactComposerLazyHeader.react');}},




render:function i(){var j=



this.props,k=j.children,l=babelHelpers.objectWithoutProperties(j,['children']),

m=this.state.header;

if(!!m)

return (c('React').createElement(m,babelHelpers['extends']({},
l,
{attachmentSelectors:k})));





return (c('React').createElement(c('ReactComposerHeaderCore.react'),babelHelpers['extends']({},
l,
{attachmentSelectors:k}),
this.props.rightChild));}});





f.exports=h;}),null);

/** js/react_composer/utils/ReactComposerContextConfig.js */





__d('ReactComposerContextConfig',['ReactComposerContextMixin','React'],(function a(b,c,d,e,f,g){

var h=c('ReactComposerContextMixin').contextTypes,
i=c('React').PropTypes;

f.exports=i.shape(h);}),null);
