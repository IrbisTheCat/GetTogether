if (self.CavalryLogger) { CavalryLogger.start_js(["ugb2r"]); }

/** __static_js_modules__/composerperfevent.js */




__d("ComposerPerfEvent",[],(function a(b,c,d,e,f,g){

f.exports={CLIENT_BOOTSTRAPPED:"client_bootstrapped",CLIENT_BOOTLOADED:"client_bootloaded",CLIENT_POST_SUCCEEDED:"client_post_succeeded",CLIENT_POST_FAILED:"client_post_failed"};}),

null);

/** __static_js_modules__/facerecwaterfallevent.js */




__d("FacerecWaterfallEvent",[],(function a(b,c,d,e,f,g){

f.exports={RECOGNITION_RECEIVED_BY_CLIENT:"recognition_received_by_client",CLIENT_RECOGNITION_POLLER_TIMEOUT:"client_recognition_poller_timeout",CLIENT_RECOGNITION_POLLER_GIVE_UP:"client_recognition_poller_give_up",SERVER_PHOTO_PUBLISHED:"server_photo_published",SERVER_PHOTO_TAG_ADDED:"sever_photo_tag_added",SERVER_RECOGNITION_OF_PHOTO_POLLED:"server_recognition_of_photo_polled",SERVER_RECOGNITION_OF_FACE_BOX_RETURNED:"server_recognition_of_face_box_returned",CLIENT_PHOTO_PUBLISHED:"client_photo_published"};}),

null);

/** __static_js_modules__/photoeditorloggingconstants.js */




__d("PhotoEditorLoggingConstants",[],(function a(b,c,d,e,f,g){

f.exports={COMPOSER_IMAGE_STICKER:"composer_sticker",COMPOSER_IMAGE_TEXT_OVERLAY:"composer_text_overlay",COMPOSER_IMAGE_HAS_CROP:"composer_has_crop",COMPOSER_IMAGE_HAS_FILTER:"composer_has_filter"};}),

null);

/** __static_js_modules__/placeattachmentsetting.js */




__d("PlaceAttachmentSetting",[],(function a(b,c,d,e,f,g){

f.exports={HIDE_ATTACHMENT:1,SHOW_ATTACHMENT:2};}),

null);

/** __static_js_modules__/storysurfaces.js */




__d("StorySurfaces",[],(function a(b,c,d,e,f,g){

f.exports={HOMEPAGE:1,TIMELINE:2,PERMALINK:3,ENTSTREAM:4,GROUP:5};}),

null);

/** js/logging/generated/PhotoUploadFacerecWaterfallTypedLogger.js */





__d('PhotoUploadFacerecWaterfallTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){
'use strict';



















function h(){
this.clear();}
h.prototype.





log=function(){
c('GeneratedLoggerUtils').log('logger:PhotoUploadFacerecWaterfallLoggerConfig',this.$PhotoUploadFacerecWaterfallTypedLogger_data,c('Banzai').BASIC);};
h.prototype.







logVital=function(){
c('GeneratedLoggerUtils').log('logger:PhotoUploadFacerecWaterfallLoggerConfig',this.$PhotoUploadFacerecWaterfallTypedLogger_data,c('Banzai').VITAL);};
h.prototype.




clear=function(){
this.$PhotoUploadFacerecWaterfallTypedLogger_data={};
return this;};
h.prototype.






updateData=function(j){








this.$PhotoUploadFacerecWaterfallTypedLogger_data=babelHelpers['extends']({},
this.$PhotoUploadFacerecWaterfallTypedLogger_data,
j);

return this;};
h.prototype.




setEvent=function(j){
this.$PhotoUploadFacerecWaterfallTypedLogger_data.event=j;
return this;};
h.prototype.




setFaceBoxID=function(j){
this.$PhotoUploadFacerecWaterfallTypedLogger_data.face_box_id=j;
return this;};
h.prototype.




setPhotoFbid=function(j){
this.$PhotoUploadFacerecWaterfallTypedLogger_data.photo_fbid=j;
return this;};
h.prototype.




setRecognizedUser=function(j){
this.$PhotoUploadFacerecWaterfallTypedLogger_data.recognized_user=j;
return this;};
h.prototype.




setTaggedUser=function(j){
this.$PhotoUploadFacerecWaterfallTypedLogger_data.tagged_user=j;
return this;};
h.prototype.




setVC=function(j){
this.$PhotoUploadFacerecWaterfallTypedLogger_data.vc=j;
return this;};

























var i=
{event:true,
face_box_id:true,
photo_fbid:true,
recognized_user:true,
tagged_user:true,
vc:true};


f.exports=h;}),null);

/** js/react_composer/attachments/ReactComposerAttachmentSelector.react.js */






__d('ReactComposerAttachmentSelector.react',['cx','Image.react','Link.react','React','TooltipData','joinClasses'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,









k=c('React').PropTypes;i=babelHelpers.inherits






(l,c('React').PureComponent);j=i&&i.prototype;l.prototype.


















render=function(){
var m=c('joinClasses')("_4-h7"+


(this.props.selected?' '+"_5qtn":''),


'fbReactComposerAttachmentSelector_'+this.props.attachmentID);



return (c('React').createElement(c('Link.react'),babelHelpers['extends']
({onClick:this.props.onSelected,
className:m,
role:'tab',
'aria-selected':this.props.selected,
'data-tooltip-delay':'500'},
c('TooltipData').propsFor(this.props.label),
this.props),
c('React').createElement('span',{className:"_4-fs"},
c('React').createElement(c('Image.react'),
{src:this.props.icon,
className:"_5qto"}),

c('React').createElement('span',{className:"_5qtp"},
this.props.label),

c('React').createElement('span',
{className:"_4-h8"}))));};




function l(){i.apply(this,arguments);}l.propTypes={selected:k.bool,label:k.string.isRequired,icon:k.object.isRequired,onSelected:k.func.isRequired};l.defaultProps={selected:false};


f.exports=l;}),null);

/** js/react_composer/attachments/ReactComposerAttachmentSelectorContainer.react.js */






__d('ReactComposerAttachmentSelectorContainer.react',['ReactComposerAttachmentActions','ReactComposerAttachmentSelector.react','ReactComposerAttachmentStore','ReactComposerAttachmentType','ReactComposerEvents','ReactComposerPropsAndStoreBasedStateMixin','Arbiter','ReactComponentWithPureRenderMixin','React','emptyFunction','getObjectValues'],(function a(b,c,d,e,f,g){















var h=c('React').PropTypes,







i=c('React').createClass({displayName:'ComposerAttachmentSelectorContainer',
mixins:[c('ReactComponentWithPureRenderMixin'),

c('ReactComposerPropsAndStoreBasedStateMixin')(c('ReactComposerAttachmentStore'))],


propTypes:
{attachmentID:h.oneOf
(c('getObjectValues')(c('ReactComposerAttachmentType'))).
isRequired,
label:h.string.isRequired,
icon:h.object.isRequired,
onSelected:h.func,
onAfterSelected:h.func,
loggingName:h.string.isRequired,


disableSelectAttachment:h.bool,


alternativeAttachmentIDs:h.arrayOf
(h.oneOf(c('getObjectValues')(c('ReactComposerAttachmentType'))))},



getDefaultProps:function j(){

return {onSelected:c('emptyFunction'),
disableSelectAttachment:false};},



statics:
{calculateState:function j(k,l){
var m=[l.attachmentID];
if(l.alternativeAttachmentIDs)
m=m.concat(l.alternativeAttachmentIDs);

var n=m.some(function(o){
return c('ReactComposerAttachmentStore').getIsAttachmentSelected
(k,
o);});


return {selected:n};}},



_onSelected:function j(){
if(this.props.disableSelectAttachment)
return;


c('ReactComposerAttachmentActions').selectAttachment
(this.context.composerID,
this.props.attachmentID,
true,
this.props.loggingName);





setTimeout(function(){return c('Arbiter').inform
(c('ReactComposerEvents').ACTIVATE_ATTACHMENT+this.context.composerID);}.bind(this),
0);

if(this.props.onAfterSelected)
this.props.onAfterSelected();},



render:function j(){
var k=this.props.onSelected!==c('emptyFunction')?
this.props.onSelected:
this._onSelected;


return (c('React').createElement(c('ReactComposerAttachmentSelector.react'),babelHelpers['extends']({},
this.props,
{selected:this.state.selected,
showNLUEducation:this.state.showNLUEducation,
onSelected:k})));}});





f.exports=i;}),null);

/** js/react_composer/attachments/common/audience/ReactComposerAudienceActionTypes.js */





__d('ReactComposerAudienceActionTypes',['keyMirrorRecursive'],(function a(b,c,d,e,f,g){



f.exports=c('keyMirrorRecursive')
({SET_AUDIENCE:null,
SET_AUDIENCE_ELEMENT:null,
SET_AUDIENCE_INSTANCE:null,
SET_PRIVACYX_NULL_DANGEROUS:null,
SET_COLLECTION:null},
'ReactComposerAudienceActionTypes');}),null);

/** js/react_composer/attachments/common/audience/ReactComposerAudienceStore.js */





__d('ReactComposerAudienceStore',['csx','invariant','ReactComposerActionStore','ReactComposerAudienceActionTypes','$','DOM'],(function a(b,c,d,e,f,g,h,i){var j,k;j=babelHelpers.inherits









(l,c('ReactComposerActionStore'));k=j&&j.prototype;
function l(){'use strict';
var m;
k.constructor.call(this,
function(){

return {audience:null,
audienceElement:null,
audienceInstance:null,
legacyAudience:null,
privacyxNullDangerous:false};},


function(n){
switch(n.type){
case c('ReactComposerAudienceActionTypes').SET_AUDIENCE:
m&&m.$ReactComposerAudienceStore_handleSetAudience(n);
break;
case c('ReactComposerAudienceActionTypes').SET_AUDIENCE_ELEMENT:
m&&m.$ReactComposerAudienceStore_handleSetAudienceElement(n);
break;
case c('ReactComposerAudienceActionTypes').SET_AUDIENCE_INSTANCE:
m&&m.$ReactComposerAudienceStore_handleSetAudienceInstance(n);
break;
case c('ReactComposerAudienceActionTypes').SET_PRIVACYX_NULL_DANGEROUS:
m&&m.$ReactComposerAudienceStore_handleSetPrivacyxNullDangerous(n);
break;
case c('ReactComposerAudienceActionTypes').SET_COLLECTION:
m&&m.$ReactComposerAudienceStore_handleSetCollection(n);
break;}});



m=this;}
l.prototype.





getAudience=function(m){'use strict';
if(this.getPrivacyxNullDangerous(m))
return null;




try{var o=c('DOM').scry
(c('$')(m),
"._5dd8");



o.length<2||i(0,
'There shouldnt be more than one privacy selector in the composer');


var p=o[0];
if(p){
var q=c('DOM').scry(p,'input[name="privacyx"]');

q.length<2||i(0,
'There shouldnt be more than one privacyx element in the composer');


if(q.length===1)
return q[0].value;}}catch(


n){
}

return this.getComposerData(m).audience;};
l.prototype.

getLegacyAudience=function(m){'use strict';
return this.getComposerData(m).legacyAudience;};
l.prototype.

getAudienceElement=function(m){'use strict';
return this.getComposerData(m).audienceElement;};
l.prototype.

getAudienceInstance=function(m){'use strict';
return this.getComposerData(m).audienceInstance;};
l.prototype.

getPrivacyxNullDangerous=function(m){'use strict';
return this.getComposerData(m).privacyxNullDangerous;};
l.prototype.

getCollectionID=function(m){'use strict';
return this.getComposerData(m).collectionID;};
l.prototype.

$ReactComposerAudienceStore_handleSetAudience=function(m){'use strict';
var n=this.validateAction(m,'composerID'),

o=this.getComposerData(n);
o.audience=m.audience;
o.legacyAudience=m.legacyAudience;

this.emitChange(n);};
l.prototype.

$ReactComposerAudienceStore_handleSetAudienceElement=function(m){'use strict';var n=
this.validateAction
(m,
['composerID','audienceElement']),o=n[0],p=n[1],


q=this.getComposerData(o);
q.audienceElement=p;

this.emitChange(o);};
l.prototype.

$ReactComposerAudienceStore_handleSetAudienceInstance=function(m){'use strict';
var n=this.validateAction(m,'composerID'),

o=this.getComposerData(n);
o.audienceInstance=m.audienceInstance;

this.emitChange(n);};
l.prototype.

$ReactComposerAudienceStore_handleSetPrivacyxNullDangerous=function(m){'use strict';
var n=this.validateAction(m,'composerID'),

o=this.getComposerData(n);
o.privacyxNullDangerous=m.privacyxNullDangerous;

this.emitChange(n);};
l.prototype.

$ReactComposerAudienceStore_handleSetCollection=function(m){'use strict';var n=
this.validateAction
(m,
['composerID','collectionID']),o=n[0],p=n[1],


q=this.getComposerData(o);
q.collectionID=p;

this.emitChange(o);};



f.exports=new l();}),null);

/** js/react_composer/attachments/custom_configs/ReactComposerCustomConfigActionType.js */





__d('ReactComposerCustomConfigActionType',['keyMirrorRecursive'],(function a(b,c,d,e,f,g){



f.exports=c('keyMirrorRecursive')
({SET_IS_FEED_ONLY_POST:null},
'ReactComposerCustomConfigActionType');}),null);

/** js/react_composer/attachments/custom_configs/ReactComposerCustomConfigStore.js */





__d('ReactComposerCustomConfigStore',['ReactComposerStoreBase','ReactComposerCustomConfigActionType'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits



(j,c('ReactComposerStoreBase'));i=h&&h.prototype;
function j(){'use strict';
var k;
i.constructor.call(this,
function(){

return {isFeedOnlyPost:false};},


function(l){
switch(l.type){
case c('ReactComposerCustomConfigActionType').SET_IS_FEED_ONLY_POST:
k&&k.$ReactComposerCustomConfigStore_handleToggleFeedOnlyPost(l);
break;}});



k=this;}
j.prototype.

isFeedOnlyPost=function(k){'use strict';
return this.getComposerData(k).isFeedOnlyPost;};
j.prototype.

$ReactComposerCustomConfigStore_handleToggleFeedOnlyPost=function(k){'use strict';var l=

this.validateAction(k,['composerID','isFeedOnlyPost']),m=l[0],n=l[1],
o=this.getComposerData(m);
o.isFeedOnlyPost=n;
this.emitChange(m);};



f.exports=new j();}),null);

/** js/video/live/live_video_broadcast/LiveVideoBroadcastConstants.js */







__d('LiveVideoBroadcastConstants',[],(function a(b,c,d,e,f,g){

'use strict';





















































var h=
{MSEC_IN_SEC:1000,
DEFAULT_RETRY_TIMEOUT_SECONDS:20,
RENDER_DELAY_TIME_MS:500,
REQUEST_ACCESS_DELAY_MS:500,
MAX_SCROLL_DISTANCE_FOR_AUTO_SCROLL_PX:50,
AUTO_TAKENDOWN_TIME_FOR_COPYRIGHT_VIOLATION:60000,
COUNTDOWN_START_TIME:3,
LIVE_WWW_BROADCASTING_APP_ID:1761791807395020,
MINIMUM_BROADCAST_LENGTH_MS:4000,
FINISH_BUTTON_NUX_TIME_MS:3000,
PUBLISH_FAILURE_TIMEOUT_S:35,
FUNNEL_LOGGER_NAME:'FACECAST_BROADCASTER_FUNNEL',

BROADCAST_STATE:
{PREVIEW:'PREVIEW',
READY_TO_LIVE:'READY_TO_LIVE',
LIVE:'LIVE',
FINISHING:'FINISHING',
FINISHED:'FINISHED'},


CAMERA_STATE:
{CHECK_CAMERA_ACCESS:'CHECK_CAMERA_ACCESS',
REQUEST_CAMERA_ACCESS:'REQUEST_CAMERA_ACCESS',
MEASURE_CAMERA:'MEASURE_CAMERA',
BROADCAST:'BROADCAST',
CAMERA_NOT_FOUND:'CAMERA_NOT_FOUND'},


CAMERA_DIMENSIONS:
{ONE_ONE:1,
FOUR_THREE:4/3,
SIXTEEN_NINE:16/9},


SPEED_TEST_STATUS:
{PENDING:0,
SUCCESS:1,
FAILED:2,
SKIPPED:3},


ACTIONS:
{ACCEPT_ERROR_BROADCAST_COULD_NOT_START:'ACCEPT_ERROR_BROADCAST_COULD_NOT_START',
FINISH_BROADCAST_REQUEST:'FINISH_BROADCAST_REQUEST',
FINISH_BROADCAST_SUCCESS:'FINISH_BROADCAST_SUCCESS',
GET_WEBCAM_STREAM_URL_REQUEST:'GET_WEBCAM_STREAM_URL_REQUEST',
GET_WEBCAM_STREAM_URL_SUCCESS:'GET_WEBCAM_STREAM_URL_SUCCESS',
HIDE_COMMENT_PLACEHOLDER:'HIDE_COMMENT_PLACEHOLDER',
INITIALIZE:'INITIALIZE',
FINISH_COUNT_DOWN:'FINISH_COUNT_DOWN',
SET_WEBCAM_DIMENSION:'SET_WEBCAM_DIMENSION',
START_BROADCAST_REQUEST:'START_BROADCAST_REQUEST',
START_BROADCAST_SUCCESS:'START_BROADCAST_SUCCESS',
START_LIVE_COUNTDOWN:'START_LIVE_COUNTDOWN',
CANCEL_LIVE_COUNTDOWN:'CANCEL_LIVE_COUNTDOWN',
UPDATE_CAMERA_STATE:'UPDATE_CAMERA_STATE',
UPDATE_COUNTDOWN:'UPDATE_COUNTDOWN',
SET_REPLAY_SHOULD_UPLOAD_HIGHER_QUALITY_VIDEO:
'SET_REPLAY_SHOULD_UPLOAD_HIGHER_QUALITY_VIDEO',
SHOW_REPLAY:'SHOW_REPLAY',
ERROR_BROADCAST_COULD_NOT_START:'ERROR_BROADCAST_COULD_NOT_START',
ERROR_BROADCAST_PUBLISH_FAIL:'ERROR_BROADCAST_PUBLISH_FAIL',
ERROR_CONNECTION_BROKEN:'ERROR_CONNECTION_BROKEN',
ERROR_CONNECTION_FAILED:'ERROR_CONNECTION_FAILED',
ERROR_MEDIA_VALIDATION:'ERROR_MEDIA_VALIDATION',
ATTEMPT_RECONNECTION:'ATTEMPT_RECONNECTION',
WEBRTC_CONNECTION_ESTABLISHED:'WEBRTC_CONNECTION_ESTABLISHED',
SET_INVITE_FRIENDS_QUERY:'SET_INVITE_FRIENDS_QUERY',
ICE_CONNECTION_STATE_CHANGED:'ICE_CONNECTION_STATE_CHANGED',
DELETE_REPLAY_VIDEO:'DELETE_REPLAY_VIDEO',
NETWORK_OFFLINE:'NETWORK_OFFLINE',
NETWORK_ONLINE:'NETWORK_ONLINE',
PREPARE_THUMBNAIL_URI:'PREPARE_THUMBNAIL_URI',
SET_THUMBNAIL_URI:'SET_THUMBNAIL_URI',
SET_COPYRIGHT_TRIGGERED:'SET_COPYRIGHT_TRIGGERED',
SET_BROADCAST_ENDED_WITH_COPYRIGHT_VIOLATION:'SET_BROADCAST_ENDED_WITH_COPYRIGHT_VIOLATION',
SET_VOD_READY:'SET_VOD_READY',
INVITE_FRIEND:'INVITE_FRIEND',
SET_INVITE_FRIENDS_RESULTS:'SET_INVITE_FRIENDS_RESULTS',
HANDLE_COPYRIGHT_EVENT:'HANDLE_COPYRIGHT_EVENT',
SET_SHOW_NUX:'SET_SHOW_NUX',
REQUEST_UFI:'REQUEST_UFI',
SET_UFI_MARKUP:'SET_UFI_MARKUP',
SET_DIALOG:'SET_DIALOG',
SET_DIALOG_CONTAINER_ID:'SET_DIALOG_CONTAINER_ID',
SET_COMPOSER_CONFIG:'SET_COMPOSER_CONFIG',
SET_UFI_SCROLL_AREA:'SET_UFI_SCROLL_AREA',
LOG_WEBRTC_STATS:'LOG_WEBRTC_STATS',
SET_DESCRIPTION_EXPANDED:'SET_DESCRIPTION_EXPANDED',
SET_SPEED_TEST_STATUS:'SET_SPEED_TEST_STATUS',
LOG_SPEED_TEST_RESULT:'LOG_SPEED_TEST_RESULT',
LOG_STREAM_LINK_CLICK:'LOG_STREAM_LINK_CLICK',
CLEANUP:'CLEANUP',
SET_DESCRIPTION:'SET_DESCRIPTION'}};



f.exports=h;}),null);

/** js/video/live/live_video_broadcast/LiveVideoBroadcastFunnelLogger.js */






__d('LiveVideoBroadcastFunnelLogger',['ComposerSourceSurface','ComposerXMarauderLogger','FunnelLogger','LiveVideoBroadcastConstants'],(function a(b,c,d,e,f,g){

'use strict';var h,





i=c('LiveVideoBroadcastConstants').SPEED_TEST_STATUS,

j='FACECAST_BROADCASTER_FUNNEL',

k=(h={},h[
i.SUCCESS]='speed_test_ended.success',h[
i.FAILED]='speed_test_ended.fail',h[
i.SKIPPED]='speed_test_ended.skipped',h),


l=
{startAndSelectLiveAttachment:function m(n){
l._startInternal
(l._getSourceSurface(n));

c('FunnelLogger').appendAction(j,'select_live_attachment');},


maybeStartAndLaunchLiveComposer:function m
(n,
o,
p){



var q=o?
'postTTI':
'preTTI',
r=p?
'usedComposerDialog':
'didNotUseComposerDialog';

if(!c('FunnelLogger').getFunnelInstance(j))
l._startInternal
(l._getSourceSurface(n));


this.addFunnelTags([q,r]);
c('FunnelLogger').appendAction(j,'launch_live_composer');},


startFromLiveMapAndSelectLiveAttachment:function m(){
l._startInternal
(c('ComposerSourceSurface').LIVE_MAP);

c('FunnelLogger').appendAction(j,'select_live_attachment');},


addFunnelTags:function m(n){
n.forEach(function(o){return c('FunnelLogger').addFunnelTag(j,o);});},





speedTestResult:function m(n){
var o=k[n];
if(o){
c('FunnelLogger').appendAction(j,o);}else 

c('FunnelLogger').appendActionWithPayload
(j,
'speed_test_ended.unknown',
{status:n});


c('FunnelLogger').appendAction(j,'speed_test_ended');
if(n===i.SUCCESS)
c('FunnelLogger').appendAction(j,'go_live_enabled');},



fetchedBroadcastID:function m(n){
c('FunnelLogger').appendAction(j,'fetched_broadcast_id');
c('FunnelLogger').addFunnelTag(j,'broadcast_id:'+n);},


endWithFailedBroadcastID:function m(){
c('FunnelLogger').appendAction(j,'failed.broadcast_id');
c('FunnelLogger').appendAction(j,'failed');
l.end();},


uploadStarted:function m(){
c('FunnelLogger').appendAction(j,'upload_started');},


goLiveClicked:function m(){
c('FunnelLogger').appendAction(j,'go_live_clicked');},


goLiveCancelled:function m(){
c('FunnelLogger').appendAction(j,'go_live_cancelled');},


finishClicked:function m(){
c('FunnelLogger').appendAction(j,'finish_clicked');},


endFinishedFromUser:function m(){
c('FunnelLogger').appendAction(j,'finished.from_user');
c('FunnelLogger').appendAction(j,'finished');
l.end();},


endPublishFailed:function m(){
c('FunnelLogger').appendAction(j,'failed.publish');
c('FunnelLogger').appendAction(j,'failed');
l.end();},


requestCameraAccess:function m(){
c('FunnelLogger').appendAction(j,'request_camera_access');},


endCameraNotFound:function m(){
c('FunnelLogger').appendAction(j,'failed.no_camera');
c('FunnelLogger').appendAction(j,'failed');
l.end();},


endCouldNotStart:function m(){
c('FunnelLogger').appendAction(j,'failed.could_not_start');
c('FunnelLogger').appendAction(j,'failed');
l.end();},


foundCamera:function m(){
c('FunnelLogger').appendAction(j,'found_camera');},


connectionBroken:function m(){
c('FunnelLogger').appendAction(j,'connection_broken');},


endCopyrightViolation:function m(){
c('FunnelLogger').appendAction(j,'failed.copyright_violation');
c('FunnelLogger').appendAction(j,'failed');
l.end();},


end:function m(){
c('FunnelLogger').endFunnel(j);},


endConnectionFailed:function m(){
c('FunnelLogger').appendAction(j,'failed.connection_failed');
c('FunnelLogger').appendAction(j,'failed');
l.end();},


_getSourceSurface:function m
(n){

var o=c('ComposerXMarauderLogger').getInstance(n);
return o?
o.composerSourceSurface:
c('ComposerSourceSurface').UNKNOWN;},





_startInternal:function m
(n){


c('FunnelLogger').startFunnel(j);



c('FunnelLogger').setFunnelTimeout(j,86400);
c('FunnelLogger').addFunnelTag(j,'source:'+n);}};



f.exports=l;}),null);

/** js/video/live/live_video_broadcast/LiveVideoBroadcastDispatcher.js */






__d('LiveVideoBroadcastDispatcher',['ExplicitRegistrationReactDispatcher'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits





(j,c('ExplicitRegistrationReactDispatcher'));i=h&&h.prototype;


function j(k){
i.constructor.call(this,k);
this.dispatch=this.dispatch.bind(this);}



f.exports=new j({strict:true});}),null);

/** js/video/live/live_video_broadcast/stores/LiveVideoBroadcastUIStore.js */







__d('LiveVideoBroadcastUIStore',['AsyncRequest','ReactComposerActions','FluxMapStore','immutable','LiveVideoBroadcastConstants','LiveVideoBroadcastDispatcher','XLiveVideoInviteFriendsController'],(function a(b,c,d,e,f,g){

'use strict';var h,i,












j=c('LiveVideoBroadcastConstants').ACTIONS,
k=c('LiveVideoBroadcastConstants').BROADCAST_STATE,
l=c('LiveVideoBroadcastConstants').CAMERA_STATE,
m=c('LiveVideoBroadcastConstants').SPEED_TEST_STATUS;h=babelHelpers.inherits





































(n,c('FluxMapStore'));i=h&&h.prototype;n.prototype.

getInitialState=function(){
return c('immutable').Map
({broadcastCouldNotStart:false,
broadcastCouldNotPublish:false,
broadcastState:k.PREVIEW,
cameraState:l.CHECK_CAMERA_ACCESS,
countdownTime:null,
connectionBroken:false,
connectionFailed:false,
dialog:null,
dialogContainerID:null,
composerConfig:null,
inviteFriendsQueryString:'',
isOnline:true,
showNUX:false,
showReplay:false,
startTime:0,
wasEverOffline:false,
ufiMarkup:null,
ufiScrollArea:null,
webcamDimension:null,
isDescriptionExpanded:false,
speedTestStatus:m.PENDING,
warnOnExit:true,
invitedFriendIDs:[],
inviteFriendsQueryResults:[]});};

n.prototype.

reduce=function(o,p){
switch(p.type){
case j.SHOW_REPLAY:
o=o.set('showReplay',true);
break;
case j.UPDATE_CAMERA_STATE:
o=o.set('cameraState',p.value);
break;
case j.UPDATE_COUNTDOWN:
o=o.set('countdownTime',p.value);
break;
case j.FINISH_COUNT_DOWN:
o=o.set('startTime',Date.now());
o=o.set('broadcastState',k.READY_TO_LIVE);
o=o.set('countdownTime',null);
break;
case j.START_BROADCAST_SUCCESS:
o=o.set('broadcastState',k.LIVE);
o=o.set('countdownTime',null);
break;
case j.START_LIVE_COUNTDOWN:
o=o.set
('countdownTime',
c('LiveVideoBroadcastConstants').COUNTDOWN_START_TIME);

break;
case j.CANCEL_LIVE_COUNTDOWN:
o=o.set('countdownTime',null);
break;
case j.FINISH_BROADCAST_REQUEST:
o=o.set('broadcastState',k.FINISHING);
break;
case j.FINISH_BROADCAST_SUCCESS:
o=o.set('broadcastState',k.FINISHED);
o=o.set('showReplay',true);
break;
case j.SET_WEBCAM_DIMENSION:
o=o.set('webcamDimension',p.value);
break;
case j.ERROR_CONNECTION_BROKEN:
o=o.set('connectionBroken',true);
break;
case j.ERROR_CONNECTION_FAILED:
o=o.set('connectionFailed',true);
break;
case j.WEBRTC_CONNECTION_ESTABLISHED:
o=o.set('connectionBroken',false);
break;
case j.ERROR_BROADCAST_COULD_NOT_START:
o=o.set('broadcastCouldNotStart',true);
break;
case j.ERROR_BROADCAST_PUBLISH_FAIL:
o=o.set('broadcastCouldNotPublish',true);
o=o.set('broadcastState',k.FINISHED);
break;
case j.ACCEPT_ERROR_BROADCAST_COULD_NOT_START:
o=o.set('broadcastCouldNotStart',false);
break;
case j.NETWORK_OFFLINE:
o=o.set('isOnline',false);
o=o.set('wasEverOffline',true);
break;
case j.NETWORK_ONLINE:
o=o.set('isOnline',true);
break;
case j.SET_INVITE_FRIENDS_QUERY:
o=o.set
('inviteFriendsQueryString',
p.value.inviteFriendsQueryString);

break;
case j.INVITE_FRIEND:
var q=p.value.invitedFriendID,
r=p.value.videoID,
s=c('XLiveVideoInviteFriendsController').getURIBuilder().
setFBID('video_id',r).
setFBIDVector('friend_ids',[q]).
getURI();
new (c('AsyncRequest'))(s).
setHandler(function(t){


}).
setErrorHandler(function(t){

}).
send();
o=o.set
('invitedFriendIDs',
o.get('invitedFriendIDs').concat([q]));

break;
case j.SET_INVITE_FRIENDS_RESULTS:
o=o.set
('inviteFriendsQueryResults',
p.value.results);

break;
case j.SET_SHOW_NUX:
o=o.set('showNUX',p.value);
break;
case j.SET_UFI_MARKUP:
o=o.set('ufiMarkup',p.value);
break;
case j.SET_DIALOG:
o=o.set('dialog',p.value);
break;
case j.SET_DIALOG_CONTAINER_ID:
o=o.set('dialogContainerID',p.value);
break;
case j.SET_COMPOSER_CONFIG:
o=o.set('composerConfig',p.value);
break;
case j.SET_UFI_SCROLL_AREA:
o=o.set('ufiScrollArea',p.value);
break;
case j.SET_DESCRIPTION_EXPANDED:
o=o.set('isDescriptionExpanded',p.value);
break;
case j.SET_SPEED_TEST_STATUS:
o=o.set('speedTestStatus',p.value);
break;
case j.CLEANUP:
o=o.set('warnOnExit',false);
this.$LiveVideoBroadcastUIStore_cleanup();
break;
case j.INITIALIZE:



o=this.getInitialState();
o=o.set('dialog',this.get('dialog'));
o=o.set('composerConfig',this.get('composerConfig'));
o=o.set('description',p.value.description);
o=o.set('shortDescription',p.value.shortDescription);
break;
case j.SET_DESCRIPTION:
o=o.set('description',p.value.description);
o=o.set('shortDescription',p.value.shortDescription);
break;

default:break;}

return o;};
n.prototype.

$LiveVideoBroadcastUIStore_cleanup=function(){
var o=this.get('composerConfig'),
p=o&&o.composerID;
if(p)
c('ReactComposerActions').reset(p);


var q=this.get('dialog');
if(q){
q.destroy();}else 

window.close();};

function n(){h.apply(this,arguments);}



f.exports=new n(c('LiveVideoBroadcastDispatcher'));}),null);

/** js/react_composer/attachments/live_video/ReactComposerLiveVideoActionType.js */





__d('ReactComposerLiveVideoActionType',['keyMirrorRecursive'],(function a(b,c,d,e,f,g){



f.exports=c('keyMirrorRecursive')
({BROADCAST_CREATED:null,
PREVIEW_ERROR:null,
PREVIEW_STARTED:null,
SET_PREVIOUS_ATTACHMENT:null,
SET_TAGGERS_CONFIG:null,
SET_SHOW_NUX:null,
SET_FUNNEL_TAGS:null},
'ReactComposerLiveVideoActionType');}),null);

/** www/__virtual__/x/XLiveVideoBroadcastCreateUIController.js */



__d("XLiveVideoBroadcastCreateUIController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/live\/broadcast\/dialog\/",{target_id:{type:"Int"},broadcast_id:{type:"Int"},container_id:{type:"String"},description:{type:"String"},place:{type:"Int"},og_action_type_id:{type:"Int"},og_object_id:{type:"Int"},og_object_str:{type:"String"},with_tags:{type:"FBIDSet"}});}),

null);

/** www/__virtual__/x/XLiveVideoCreateBroadcastController.js */



__d("XLiveVideoCreateBroadcastController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/create_broadcast\/create\/",{target_id:{type:"FBID",required:true}});}),

null);

/** js/react_composer/attachments/live_video/ReactComposerLiveVideoActionStore.js */





__d('ReactComposerLiveVideoActionStore',['ActorURI','AsyncRequest','LiveVideoBroadcastFunnelLogger','LiveVideoBroadcastUtils','LiveVideoBroadcastUIStore','ReactComposerActionStore','ReactComposerAttachmentType','ReactComposerActions','ReactComposerLiveVideoActionType','ReactComposerLiveVideoActions','XLiveVideoBroadcastCreateUIController','XLiveVideoCreateBroadcastController'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits














(j,c('ReactComposerActionStore'));i=h&&h.prototype;
function j(){'use strict';
var k=void 0;
i.constructor.call(this,
function(){
return {};},

function(l){
switch(l.type){
case c('ReactComposerLiveVideoActionType').PREVIEW_STARTED:
k&&k.$ReactComposerLiveVideoActionStore_handlePreviewStarted(l);
break;
case c('ReactComposerLiveVideoActionType').BROADCAST_CREATED:
k&&k.$ReactComposerLiveVideoActionStore_handleBroadcastCreated(l);
break;}});



k=this;}
j.prototype.

$ReactComposerLiveVideoActionStore_handleBroadcastCreated=function(k){'use strict';var l=

this.validateAction
(k,
['actorID','broadcastID','targetID','formData']),m=l[0],n=l[1],o=l[2],p=l[3],


q=c('LiveVideoBroadcastUIStore').get('dialogContainerID'),
r=c('XLiveVideoBroadcastCreateUIController').
getURIBuilder(),
s=c('ActorURI').create(r.getURI(),m);
new (c('AsyncRequest'))().
setURI(s).
setData
({target_id:o,
broadcast_id:n,
container_id:q,
description:p.description,
place:p.place,
og_action_type_id:p.og_action_type_id,
og_object_id:p.og_object_id,
og_object_str:p.og_object_str,
with_tags:p.with_tags}).

setMethod('POST').
send();

c('LiveVideoBroadcastFunnelLogger').fetchedBroadcastID(n);};
j.prototype.

$ReactComposerLiveVideoActionStore_handlePreviewStarted=function(k){'use strict';var l=

this.validateAction
(k,
['actorID','composerID','config','targetID']),m=l[0],n=l[1],o=l[2],p=l[3],


q=
o.attachmentsConfig[
c('ReactComposerAttachmentType').LIVE_VIDEO].
composerDialog,

r=c('LiveVideoBroadcastUtils').getComposerFormData
(n,
p,
o.contextInfo),

s=c('XLiveVideoCreateBroadcastController').
getURIBuilder().
setFBID('target_id',p).
getURI();
s=c('ActorURI').create(s,m);
new (c('AsyncRequest'))(s).
setData(r).
setHandler(function(t){
c('ReactComposerLiveVideoActions').broadcastCreated
(n,

{actorID:m,
broadcastID:t.payload.id,
targetID:p,
formData:r});


if(!q)
c('ReactComposerActions').reset(n);}).


setErrorHandler(function(){
if(!q)
c('ReactComposerActions').reset(n);}).


send();};





f.exports=new j();}),null);

/** js/react_composer/attachments/live_video/ReactComposerLiveVideoAttachmentStore.js */





__d('ReactComposerLiveVideoAttachmentStore',['ReactComposerLiveVideoActionType','ReactComposerStoreBase'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits




(j,c('ReactComposerStoreBase'));i=h&&h.prototype;
function j(){'use strict';
var k=void 0;
i.constructor.call(this,
function(){

return {liveVideoTaggersConfig:{},
isPreviewStarted:false,
showLivePreviewButtonNUX:false,
funnelTags:[]};},


function(l){
switch(l.type){
case c('ReactComposerLiveVideoActionType').SET_PREVIOUS_ATTACHMENT:
k&&k.$ReactComposerLiveVideoAttachmentStore_handleSetPreviousAttachment(l);
break;
case c('ReactComposerLiveVideoActionType').SET_TAGGERS_CONFIG:
k&&k.$ReactComposerLiveVideoAttachmentStore_handleSetTaggersConfig(l);
break;
case c('ReactComposerLiveVideoActionType').PREVIEW_ERROR:
k&&k.$ReactComposerLiveVideoAttachmentStore_handlePreviewError(l);
break;
case c('ReactComposerLiveVideoActionType').PREVIEW_STARTED:
k&&k.$ReactComposerLiveVideoAttachmentStore_handlePreviewStarted(l);
break;
case c('ReactComposerLiveVideoActionType').SET_SHOW_NUX:
k&&k.$ReactComposerLiveVideoAttachmentStore_handleSetShowNUX(l);
break;
case c('ReactComposerLiveVideoActionType').SET_FUNNEL_TAGS:
k&&k.$ReactComposerLiveVideoAttachmentStore_handleSetFunnelTags(l);
break;}});



k=this;}
j.prototype.

getPreviousAttachment=function(k){'use strict';
return this.getComposerData(k).liveVideoPreviousAttachment;};
j.prototype.

getTaggersConfig=function(k){'use strict';
return this.getComposerData(k).liveVideoTaggersConfig;};
j.prototype.

isPreviewStarted=function(k){'use strict';
return this.getComposerData(k).isPreviewStarted;};
j.prototype.

getShowNUX=function(k){'use strict';
return this.getComposerData(k).showLivePreviewButtonNUX;};
j.prototype.

getFunnelTags=function(k){'use strict';
return this.getComposerData(k).funnelTags;};
j.prototype.

$ReactComposerLiveVideoAttachmentStore_handleSetPreviousAttachment=function(k){'use strict';
var l=this.getComposerData(k.composerID);

l.liveVideoPreviousAttachment=k.previousAttachment;

this.emitChange(k.composerID);};
j.prototype.

$ReactComposerLiveVideoAttachmentStore_handleSetTaggersConfig=function(k){'use strict';
var l=this.getComposerData(k.composerID);

l.liveVideoTaggersConfig=k.taggersConfig;

this.emitChange(k.composerID);};
j.prototype.

$ReactComposerLiveVideoAttachmentStore_handlePreviewStarted=function(k){'use strict';
var l=this.getComposerData(k.composerID);

l.isPreviewStarted=true;

this.emitChange(k.composerID);};
j.prototype.

$ReactComposerLiveVideoAttachmentStore_handlePreviewError=function(k){'use strict';
var l=this.getComposerData(k.composerID);

l.isPreviewStarted=false;

this.emitChange(k.composerID);};
j.prototype.

$ReactComposerLiveVideoAttachmentStore_handleSetShowNUX=function(k){'use strict';
var l=this.getComposerData(k.composerID);

l.showLivePreviewButtonNUX=k.showNUX;

this.emitChange(k.composerID);};
j.prototype.

$ReactComposerLiveVideoAttachmentStore_handleSetFunnelTags=function(k){'use strict';
var l=this.getComposerData(k.composerID);
l.funnelTags=k.funnelTags;
this.emitChange(k.composerID);};



f.exports=new j();}),null);

/** js/react_composer/attachments/live_video/ReactComposerLiveVideoActions.js */





__d('ReactComposerLiveVideoActions',['ReactComposerLiveVideoActionType','ReactComposerDispatcher','ReactComposerLiveVideoActionStore','ReactComposerLiveVideoAttachmentStore'],(function a(b,c,d,e,f,g){





c('ReactComposerLiveVideoActionStore');
c('ReactComposerLiveVideoAttachmentStore');












var h=

{broadcastCreated:function i
(j,
k){



setTimeout(function(){return c('ReactComposerDispatcher').dispatch
({composerID:j,
type:c('ReactComposerLiveVideoActionType').BROADCAST_CREATED,
actorID:k.actorID,
broadcastID:k.broadcastID,
targetID:k.targetID,
formData:k.formData});},
0);},


previewStarted:function i
(j,
k){



setTimeout(function(){return c('ReactComposerDispatcher').dispatch
({composerID:j,
type:c('ReactComposerLiveVideoActionType').PREVIEW_STARTED,
actorID:k.actorID,
config:k.config,
targetID:k.targetID});},
0);},


setPreviousAttachment:function i
(j,
k){

var l=
{composerID:j,
type:c('ReactComposerLiveVideoActionType').SET_PREVIOUS_ATTACHMENT,
previousAttachment:k};

c('ReactComposerDispatcher').dispatch(l);},


setTaggersConfig:function i
(j,
k){

var l=
{composerID:j,
type:c('ReactComposerLiveVideoActionType').SET_TAGGERS_CONFIG,
taggersConfig:k};

c('ReactComposerDispatcher').dispatch(l);},


setShowNUX:function i
(j,
k){

var l=
{composerID:j,
type:c('ReactComposerLiveVideoActionType').SET_SHOW_NUX,
showNUX:k};

c('ReactComposerDispatcher').dispatch(l);},


setFunnelTags:function i
(j,
k){

var l=
{composerID:j,
type:c('ReactComposerLiveVideoActionType').SET_FUNNEL_TAGS,
funnelTags:k};

c('ReactComposerDispatcher').dispatch(l);}};




f.exports=h;}),null);

/** js/video/live/live_video_broadcast/LiveVideoBroadcastActions.js */






__d('LiveVideoBroadcastActions',['LiveVideoBroadcastDispatcher'],(function a(b,c,d,e,f,g){










var h=
{initialize:function i(j){
var k=
{type:'INITIALIZE',
value:j};

c('LiveVideoBroadcastDispatcher').dispatch(k);},


updateCameraState:function i(j){
var k=
{type:'UPDATE_CAMERA_STATE',
value:j};

c('LiveVideoBroadcastDispatcher').dispatch(k);},


startLiveBroadcastRequest:function i(j){
var k=
{type:'START_BROADCAST_REQUEST',
value:j};

c('LiveVideoBroadcastDispatcher').dispatch(k);},


startLiveCountdown:function i(){
var j=
{type:'START_LIVE_COUNTDOWN'};

c('LiveVideoBroadcastDispatcher').dispatch(j);},


startLiveBroadcastSuccess:function i(){
var j=
{type:'START_BROADCAST_SUCCESS'};

c('LiveVideoBroadcastDispatcher').dispatch(j);},


finishBroadcastRequest:function i(){
var j=
{type:'FINISH_BROADCAST_REQUEST'};

c('LiveVideoBroadcastDispatcher').dispatch(j);},


finishBroadcastSuccess:function i(){
var j=
{type:'FINISH_BROADCAST_SUCCESS'};

c('LiveVideoBroadcastDispatcher').dispatch(j);},


cancelLiveCountdown:function i(){
var j=
{type:'CANCEL_LIVE_COUNTDOWN'};

c('LiveVideoBroadcastDispatcher').dispatch(j);},


updateCountdown:function i(j){
var k=
{type:'UPDATE_COUNTDOWN',
value:j};

c('LiveVideoBroadcastDispatcher').dispatch(k);},


showReplay:function i(){
var j=
{type:'SHOW_REPLAY'};

c('LiveVideoBroadcastDispatcher').dispatch(j);},


hideCommentPlaceholder:function i(){
var j=
{type:'HIDE_COMMENT_PLACEHOLDER'};

c('LiveVideoBroadcastDispatcher').dispatch(j);},


setWebcamDimension:function i(j){
var k=
{type:'SET_WEBCAM_DIMENSION',
value:j};

c('LiveVideoBroadcastDispatcher').dispatch(k);},


getWebcamStreamUrlRequest:function i(){
var j=
{type:'GET_WEBCAM_STREAM_URL_REQUEST'};

c('LiveVideoBroadcastDispatcher').dispatch(j);},


getWebcamStreamUrlSuccess:function i
(j){

var k=
{type:'GET_WEBCAM_STREAM_URL_SUCCESS',
value:j};

c('LiveVideoBroadcastDispatcher').dispatch(k);},


actionButtonClick:function i(){
var j=
{type:'ACTION_BUTTON_CLICK'};

c('LiveVideoBroadcastDispatcher').dispatch(j);},


setReplayShouldUploadHigherQualityVideo:function i(j){
var k=
{type:'SET_REPLAY_SHOULD_UPLOAD_HIGHER_QUALITY_VIDEO',
value:j};

c('LiveVideoBroadcastDispatcher').dispatch(k);},


errorConnectionBroken:function i(){
var j=
{type:'ERROR_CONNECTION_BROKEN'};

c('LiveVideoBroadcastDispatcher').dispatch(j);},


errorConnectionFailed:function i(){
var j=
{type:'ERROR_CONNECTION_FAILED'};

c('LiveVideoBroadcastDispatcher').dispatch(j);},


errorMediaValidation:function i(j){
var k=
{type:'ERROR_MEDIA_VALIDATION',
errorMessage:j.toString()};

c('LiveVideoBroadcastDispatcher').dispatch(k);},


attemptReconnection:function i(){
var j=
{type:'ATTEMPT_RECONNECTION'};

c('LiveVideoBroadcastDispatcher').dispatch(j);},


webRTCConnectionEstablished:function i(){
var j=
{type:'WEBRTC_CONNECTION_ESTABLISHED'};

c('LiveVideoBroadcastDispatcher').dispatch(j);},


iceConnectionStateChanged:function i(j){
var k=
{type:'ICE_CONNECTION_STATE_CHANGED',
value:j};

c('LiveVideoBroadcastDispatcher').dispatch(k);},


errorBroadcastCouldNotStart:function i(){
var j=
{type:'ERROR_BROADCAST_COULD_NOT_START'};

c('LiveVideoBroadcastDispatcher').dispatch(j);},


errorBroadcastCouldNotStartAccepted:function i(){
var j=
{type:'ACCEPT_ERROR_BROADCAST_COULD_NOT_START'};

c('LiveVideoBroadcastDispatcher').dispatch(j);},


deleteReplayVideo:function i(){
var j=
{type:'DELETE_REPLAY_VIDEO'};

c('LiveVideoBroadcastDispatcher').dispatch(j);},


errorBroadcastPublishFail:function i(){
var j=
{type:'ERROR_BROADCAST_PUBLISH_FAIL'};

c('LiveVideoBroadcastDispatcher').dispatch(j);},


handleNetworkOffline:function i(){
var j=
{type:'NETWORK_OFFLINE'};

c('LiveVideoBroadcastDispatcher').dispatch(j);},


handleNetworkOnline:function i(){
var j=
{type:'NETWORK_ONLINE'};

c('LiveVideoBroadcastDispatcher').dispatch(j);},


prepareThumbnailUri:function i(){
var j=
{type:'PREPARE_THUMBNAIL_URI'};

c('LiveVideoBroadcastDispatcher').dispatch(j);},


setThumbnailUri:function i(j){
var k=
{type:'SET_THUMBNAIL_URI',
value:j};

c('LiveVideoBroadcastDispatcher').dispatch(k);},


setCopyrightTriggered:function i(j){
var k=
{type:'SET_COPYRIGHT_TRIGGERED',
value:j};

c('LiveVideoBroadcastDispatcher').dispatch(k);},


setVodReady:function i(){
var j=
{type:'SET_VOD_READY'};

c('LiveVideoBroadcastDispatcher').dispatch(j);},


handleCopyrightEvent:function i(j){
var k=
{type:'HANDLE_COPYRIGHT_EVENT',
value:j};

c('LiveVideoBroadcastDispatcher').dispatch(k);},


setBroadcastEndedWithCopyrightViolation:function i(){
var j=
{type:'SET_BROADCAST_ENDED_WITH_COPYRIGHT_VIOLATION'};

c('LiveVideoBroadcastDispatcher').dispatch(j);},


finishCountdown:function i(){
var j=
{type:'FINISH_COUNT_DOWN'};

c('LiveVideoBroadcastDispatcher').dispatch(j);},


setShowNUX:function i(j){
var k=
{type:'SET_SHOW_NUX',
value:j};

c('LiveVideoBroadcastDispatcher').dispatch(k);},


requestUFI:function i(){
var j=
{type:'REQUEST_UFI'};

c('LiveVideoBroadcastDispatcher').dispatch(j);},


setUfiMarkup:function i(j){
var k=
{type:'SET_UFI_MARKUP',
value:j};

c('LiveVideoBroadcastDispatcher').dispatch(k);},


setDialog:function i(j){
var k=
{type:'SET_DIALOG',
value:j};

c('LiveVideoBroadcastDispatcher').dispatch(k);},


setDialogContainerID:function i(j){
var k=
{type:'SET_DIALOG_CONTAINER_ID',
value:j};

c('LiveVideoBroadcastDispatcher').dispatch(k);},


setComposerConfig:function i
(j){





var k=
{type:'SET_COMPOSER_CONFIG',
value:j};

c('LiveVideoBroadcastDispatcher').dispatch(k);},


setUfiScrollArea:function i(j){
var k=
{type:'SET_UFI_SCROLL_AREA',
value:j};

c('LiveVideoBroadcastDispatcher').dispatch(k);},


setInviteFriendsQuery:function i(j){
var k=
{type:'SET_INVITE_FRIENDS_QUERY',
value:
{inviteFriendsQueryString:j}};


c('LiveVideoBroadcastDispatcher').dispatch(k);},


setInviteFriendsSearchResults:function i(j){
var k=
{type:'SET_INVITE_FRIENDS_RESULTS',
value:
{results:j}};


c('LiveVideoBroadcastDispatcher').dispatch(k);},


inviteFriend:function i
(j){




var k=
{type:'INVITE_FRIEND',
value:j};

c('LiveVideoBroadcastDispatcher').dispatch(k);},


logWebRTCStats:function i(j){
var k=
{type:'LOG_WEBRTC_STATS',
value:j};

c('LiveVideoBroadcastDispatcher').dispatch(k);},


setDescriptionExpanded:function i(j){
var k=
{type:'SET_DESCRIPTION_EXPANDED',
value:j};

c('LiveVideoBroadcastDispatcher').dispatch(k);},


setSpeedTestStatus:function i(j){
var k=
{type:'SET_SPEED_TEST_STATUS',
value:j};

c('LiveVideoBroadcastDispatcher').dispatch(k);},


logSpeedTestResult:function i(j){
var k=
{type:'LOG_SPEED_TEST_RESULT',
value:j};

c('LiveVideoBroadcastDispatcher').dispatch(k);},


logStreamLinkClick:function i(){
var j=
{type:'LOG_STREAM_LINK_CLICK'};

c('LiveVideoBroadcastDispatcher').dispatch(j);},


cleanup:function i(){
var j=
{type:'CLEANUP'};

c('LiveVideoBroadcastDispatcher').dispatch(j);},


setDescription:function i
(j){




var k=
{type:'SET_DESCRIPTION',
value:j};

c('LiveVideoBroadcastDispatcher').dispatch(k);}};


























































































































































f.exports=h;}),null);

/** js/react_composer/logging/ReactComposerPerfLogger.js */





__d('ReactComposerPerfLogger',['ComposerType','ComposerXSessionIDs','MarauderLogger'],(function a(b,c,d,e,f,g){





var h={},
i=c('ComposerType').STATUS,

j=
{logEvent:function k
(l,
m){

var n=arguments.length<=2||arguments[2]===undefined?{}:arguments[2],
o=h[m],
p=c('ComposerXSessionIDs').getSessionID(m);
if(!o||!p)
return;


if(n.logOncePerSession){
if(!o.loggedEventTypes[p])
o.loggedEventTypes[p]={};

if(o.loggedEventTypes[p][l])
return;

o.loggedEventTypes[p][l]=true;}


var q=babelHelpers['extends']({},
n.extraData,
{composer_type:i,
target_type:o.targetType,
target_id:o.targetID,
ref:o.entryPointRef});


c('MarauderLogger').log
(l,
'composer',
q,
undefined,
undefined,
p);},



registerComposer:function k
(l,
m,
n,
o){

h[l.id]=
{targetID:o,
targetType:m,
entryPointRef:n,
loggedEventTypes:{}};},



getInstance:function k(l){
return h[l];}};



f.exports=j;}),null);

/** js/react_composer/logging/ReactComposerLoggingStore.js */





__d('ReactComposerLoggingStore',['invariant','ReactComposerActionTypes','ReactComposerAlbumActionType','ReactComposerAttachmentActionType','ReactComposerAttachmentStore','ReactComposerAttachmentType','ReactComposerAudienceActionTypes','ReactComposerAudienceStore','ReactComposerCollectionsActionTypes','ReactComposerDispatcher','ReactComposerFeatureType','ReactComposerLoggingQueue','ReactComposerPerfLogger','ReactComposerPhotoActionType','ReactComposerPhotoStore','ReactComposerMediaUploadActionType','ReactComposerMediaUploadStore','ReactComposerMediaUploadType','ReactComposerScrapedAttachmentActionType','ReactComposerScrapedAttachmentStore','ReactComposerStatusStore','ReactComposerStore','ReactComposerStoreBase','ReactComposerTaggerActionType','ReactComposerTaggerStore','ReactComposerTaggerType','ReactComposerVideoUploadActionType','Bootloader','ComposerEntryPointRef','ComposerPerfEvent','ComposerWaterfallEvent','ComposerXMarauderLogger','ComposerXSessionIDs','immutable','LiveVideoBroadcastFunnelLogger','PhotosUploadWaterfallXMixin','PUWApplications','PUWMethods','PUWSteps','classWithMixins','mixin','performanceAbsoluteNow','nullthrows','PhotoUploadFacerecWaterfallTypedLogger','FacerecWaterfallEvent'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;i=babelHelpers.inherits


























































(k,
c('classWithMixins')(c('ReactComposerStoreBase'),c('mixin')(c('PhotosUploadWaterfallXMixin'))));j=i&&i.prototype;
function k(){
var l;
j.constructor.call(this,
function(){



return {activated:false,
perfTimes:{},
sessionID:null,
uniqueEvents:c('immutable').Map
([[c('PUWSteps').CLIENT_PUBLISH_SUCCESS,false],
[c('PUWSteps').CLIENT_FLOW_SUCCESS,false]])};},



function(m){
l&&l.handler(m);});


l=this;}
k.prototype.

handler=function(l){

if(l.suppressWaterfallLogging)
return;


var m=this.getComposerData(l.composerID);
if(!m.activated)
return;


switch(l.type){
case c('ReactComposerAttachmentActionType').SELECT_ATTACHMENT:
this.$ReactComposerLoggingStore_handleSelectAttachment(l);
break;
case c('ReactComposerActionTypes').COMPOSER_ENTRY:
this.$ReactComposerLoggingStore_handleComposerEntry(l);
break;
case c('ReactComposerAttachmentActionType').SET_BOOTLOADED:
if(c('ReactComposerDispatcher').isDispatching())
c('ReactComposerDispatcher').waitFor
([c('ReactComposerAttachmentStore').getDispatchToken()]);


this.$ReactComposerLoggingStore_handleBootloadedAttachment(l);
break;
case c('ReactComposerAttachmentActionType').SET_BOOTSTRAPPED:
if(c('ReactComposerDispatcher').isDispatching())
c('ReactComposerDispatcher').waitFor
([c('ReactComposerAttachmentStore').getDispatchToken()]);


this.$ReactComposerLoggingStore_handleBootstrappedAttachment(l);
break;
case c('ReactComposerMediaUploadActionType').MEDIA_UPLOAD_INPUT_CLICKED:
this.$ReactComposerLoggingStore_handleMediaUploadInputClicked(l);
break;
case c('ReactComposerMediaUploadActionType').MEDIA_UPLOAD_INPUT_DONE:
this.$ReactComposerLoggingStore_handleMediaUploadInputDone(l);
break;
case c('ReactComposerAlbumActionType').CREATE_ALBUM_SELECTOR_CLICKED:
this.$ReactComposerLoggingStore_handleCreateAlbumSelectorClicked(l);
break;
case c('ReactComposerMediaUploadActionType').PHOTO_UPLOAD_ENQUEUED:
this.$ReactComposerLoggingStore_handlePhotoUploadEnqueued(l);
break;
case c('ReactComposerMediaUploadActionType').PHOTO_UPLOAD_RESIZE_STARTED:
this.$ReactComposerLoggingStore_handlePhotoUploadResizeStarted(l);
break;
case c('ReactComposerMediaUploadActionType').PHOTO_UPLOAD_RESIZE_DONE:
this.$ReactComposerLoggingStore_handlePhotoUploadResizeDone(l);
break;
case c('ReactComposerMediaUploadActionType').PHOTO_UPLOAD_RESIZE_FAILED:
this.$ReactComposerLoggingStore_handlePhotoUploadResizeFailed(l);
break;
case c('ReactComposerMediaUploadActionType').SPHERICAL_PHOTO_CHECK_DONE:
this.$ReactComposerLoggingStore_handleSphericalPhotoCheckDone(l);
break;
case c('ReactComposerMediaUploadActionType').SPHERICAL_PHOTO_CHECK_FAILED:
this.$ReactComposerLoggingStore_handleSphericalPhotoCheckFailed(l);
break;
case c('ReactComposerMediaUploadActionType').PHOTO_UPLOAD_RESIZER_UNAVAILABLE:
this.$ReactComposerLoggingStore_handlePhotoUploadResizerUnavailable(l);
break;
case c('ReactComposerMediaUploadActionType').PHOTO_UPLOAD_UPLOADING:
this.$ReactComposerLoggingStore_handlePhotoUploadUploading(l);
break;
case c('ReactComposerMediaUploadActionType').PHOTO_UPLOAD_DONE:
this.$ReactComposerLoggingStore_handlePhotoUploadDone(l);
break;
case c('ReactComposerMediaUploadActionType').PHOTO_UPLOAD_FAILED:
this.$ReactComposerLoggingStore_handlePhotoUploadFailed(l);
break;
case c('ReactComposerMediaUploadActionType').MEDIA_UPLOAD_REMOVE:
this.$ReactComposerLoggingStore_handlePhotoUploadRemove(l);
break;
case c('ReactComposerPhotoActionType').PHOTO_REMOVE:
this.$ReactComposerLoggingStore_handlePhotoRemoved(l);
break;
case c('ReactComposerMediaUploadActionType').VIDEO_UPLOAD_ENQUEUED:
this.$ReactComposerLoggingStore_handleVideoUploadEnqueued(l);
break;
case c('ReactComposerVideoUploadActionType').VIDEO_UPLOAD_ADD:
this.$ReactComposerLoggingStore_handleVideoUploadAdd(l);
break;
case c('ReactComposerVideoUploadActionType').VIDEO_UPLOAD_REMOVE:
this.$ReactComposerLoggingStore_handleVideoUploadRemove(l);
break;
case c('ReactComposerTaggerActionType').DESELECT_TAGGER:
this.$ReactComposerLoggingStore_handleDeselectTagger(l);
break;
case c('ReactComposerTaggerActionType').SET_SELECTED_TAGGER:
if(c('ReactComposerDispatcher').isDispatching())
c('ReactComposerDispatcher').waitFor
([c('ReactComposerTaggerStore').getDispatchToken()]);


this.$ReactComposerLoggingStore_handleSelectedTagger(l);
break;
case c('ReactComposerTaggerActionType').SET_TAGGER_DATA:
if(c('ReactComposerDispatcher').isDispatching())
c('ReactComposerDispatcher').waitFor
([c('ReactComposerTaggerStore').getDispatchToken()]);


this.$ReactComposerLoggingStore_handleSetTaggerData(l);
break;
case c('ReactComposerActionTypes').POST_STARTED:
this.$ReactComposerLoggingStore_handlePostStarted(l);
break;
case c('ReactComposerActionTypes').POST_SUCCEEDED:
this.$ReactComposerLoggingStore_handlePostSucceeded(l);
break;
case c('ReactComposerActionTypes').POST_ERROR:
this.$ReactComposerLoggingStore_handlePostError(l);
break;
case c('ReactComposerMediaUploadActionType').PHOTOS_SELECT:
this.$ReactComposerLoggingStore_handlePhotosSelect(l);
break;
case c('ReactComposerPhotoActionType').PHOTO_EDIT_STARTED:
this.$ReactComposerLoggingStore_handlePhotoEditStarted(l);
break;
case c('ReactComposerPhotoActionType').PHOTO_EDIT_FINISHED:
this.$ReactComposerLoggingStore_handlePhotoEditFinished(l);
break;
case c('ReactComposerMediaUploadActionType').PHOTO_UPLOAD_RETRY:
this.$ReactComposerLoggingStore_handlePhotoUploadRetry(l);
break;
case c('ReactComposerPhotoActionType').PHOTO_ADD_FACEBOX:
this.$ReactComposerLoggingStore_handleAddFaceBox(l);
break;
case c('ReactComposerPhotoActionType').PHOTO_RECOGNITION_ALL_FINISHED:
this.$ReactComposerLoggingStore_handleFinishRecognition(l);
break;
case c('ReactComposerActionTypes').FEATURE_INTENT:
this.$ReactComposerLoggingStore_handleFeatureIntent(l);
break;
case c('ReactComposerActionTypes').FEATURE_DONE:
this.$ReactComposerLoggingStore_handleFeatureDone(l);
break;
case c('ReactComposerActionTypes').FEATURE_CANCEL:
this.$ReactComposerLoggingStore_handleFeatureCancel(l);
break;

case c('ReactComposerScrapedAttachmentActionType').ATTACHMENT_SCRAPED:


c('ReactComposerDispatcher').waitFor
([c('ReactComposerScrapedAttachmentStore').getDispatchToken()]);

this.$ReactComposerLoggingStore_handleAttachmentScraped(l);
break;
case c('ReactComposerAudienceActionTypes').SET_AUDIENCE:
this.$ReactComposerLoggingStore_handleSetAudience(l);
break;
case c('ReactComposerActionTypes').COMPOSER_CANCEL:
this.$ReactComposerLoggingStore_handleComposerCancel(l);
break;
case c('ReactComposerCollectionsActionTypes').SHOW_COLLECTION_SELECTOR:
this.$ReactComposerLoggingStore_handleShowCollectionSelector(l);
break;
case c('ReactComposerCollectionsActionTypes').HIDE_COLLECTION_SELECTOR:
this.$ReactComposerLoggingStore_handleHideCollectionSelector(l);
break;
case c('ReactComposerAudienceActionTypes').SET_COLLECTION:


c('ReactComposerDispatcher').waitFor
([c('ReactComposerAudienceStore').getDispatchToken()]);

this.$ReactComposerLoggingStore_handleSetCollection(l);
break;
case c('ReactComposerCollectionsActionTypes').SHOW_CREATION_LAYER:
this.$ReactComposerLoggingStore_handleShowCollectionCreationLayer(l);
break;
case c('ReactComposerCollectionsActionTypes').HIDE_CREATION_LAYER:
this.$ReactComposerLoggingStore_handleHideCollectionCreationLayer(l);
break;
default:}};



k.prototype.

getSessionID=function(l){
return c('ComposerXSessionIDs').getSessionID(l);};
k.prototype.

isActivated=function(l){
return this.getComposerData(l).activated;};
k.prototype.


activate=function(l){
var m=this.getComposerData(l);
m.activated=true;

if(c('ReactComposerLoggingQueue').getLength()>0)
this.$ReactComposerLoggingStore_flushComposerLoggingQueue();};

k.prototype.

$ReactComposerLoggingStore_handleComposerEntry=function(l){


var m=this.validateAction(l,'composerID');

this.$ReactComposerLoggingStore_log
(m,
c('ComposerWaterfallEvent').COMPOSER_ENTRY,

{logOncePerSession:true,
extraData:
{composer_entry_point_name:l.uiElementName}});};



k.prototype.

$ReactComposerLoggingStore_handleFeatureIntent=function(l){var m=
this.validateAction
(l,
['composerID','featureType','uiElementName']),n=m[0],o=m[1],p=m[2];


this.$ReactComposerLoggingStore_logFeatureIntent
(n,
o,
p);};

k.prototype.

$ReactComposerLoggingStore_handleFeatureDone=function(l){var m=
this.validateAction
(l,
['composerID','featureType','uiElementName']),n=m[0],o=m[1],p=m[2];


this.$ReactComposerLoggingStore_logFeatureDone
(n,
o,
p);};

k.prototype.

$ReactComposerLoggingStore_handleFeatureCancel=function(l){var m=
this.validateAction
(l,
['composerID','featureType','uiElementName']),n=m[0],o=m[1],p=m[2];


this.$ReactComposerLoggingStore_logFeatureCancel
(n,
o,
p);};

k.prototype.

$ReactComposerLoggingStore_handleSelectAttachment=function(l){var m=
this.validateAction
(l,
['id','currentAttachmentID','composerID']),n=m[0],o=m[1],p=m[2];



if(n===c('ReactComposerAttachmentType').LIVE_VIDEO&&
o!==c('ReactComposerAttachmentType').LIVE_VIDEO){


c('LiveVideoBroadcastFunnelLogger').startAndSelectLiveAttachment(p);}else

if(o===c('ReactComposerAttachmentType').LIVE_VIDEO&&
n!==c('ReactComposerAttachmentType').LIVE_VIDEO)






c('LiveVideoBroadcastFunnelLogger').end();


if(c('ReactComposerAttachmentStore').isSelectedAttachmentActive(p))
this.$ReactComposerLoggingStore_handleComposerEntry(l);};

k.prototype.

$ReactComposerLoggingStore_handleBootloadedAttachment=function(l){var m=
this.validateAction
(l,
['id','composerID']),n=m[0],o=m[1];


this.$ReactComposerLoggingStore_perfLog
(o,
c('ComposerPerfEvent').CLIENT_BOOTLOADED,

{extraData:
{attachment_type:n,
duration:c('ReactComposerAttachmentStore').getBootloadDuration(o,n)}});};



k.prototype.

$ReactComposerLoggingStore_handleBootstrappedAttachment=function(l){var m=
this.validateAction
(l,
['id','composerID']),n=m[0],o=m[1];


this.$ReactComposerLoggingStore_perfLog
(o,
c('ComposerPerfEvent').CLIENT_BOOTSTRAPPED,

{extraData:
{attachment_type:n,
duration:c('ReactComposerAttachmentStore').getBootstrapDuration
(o,
n)}});};




k.prototype.

$ReactComposerLoggingStore_handleCreateAlbumSelectorClicked=function(l){
var m=this.validateAction(l,'composerID');

this.$ReactComposerLoggingStore_log(m,c('ComposerWaterfallEvent').ALBUM_INTENT);};
k.prototype.

$ReactComposerLoggingStore_handleMediaUploadInputClicked=function(l){var m=
this.validateAction(l,
['composerID','sourceLoggingName']),n=m[0],o=m[1];


this.$ReactComposerLoggingStore_logFeatureIntent
(n,
c('ReactComposerFeatureType').MEDIA,
o);


this.$ReactComposerLoggingStore_log(n,c('ComposerWaterfallEvent').MEDIA_INTENT);
this.$ReactComposerLoggingStore_logToPUW
(n,
c('PUWSteps').CLIENT_FLOW_BEGIN,
null,
{logOncePerSession:true});

this.$ReactComposerLoggingStore_logToPUW(n,c('PUWSteps').CLIENT_SELECT_BEGIN);};
k.prototype.

$ReactComposerLoggingStore_handleMediaUploadInputDone=function(l){var m=
this.validateAction(l,
['composerID','sourceLoggingName']),n=m[0],o=m[1];


this.$ReactComposerLoggingStore_logFeatureDone
(n,
c('ReactComposerFeatureType').MEDIA,
o);};

k.prototype.

$ReactComposerLoggingStore_handlePhotoUploadEnqueued=function(l){
var m=this.validateAction(l,'composerID');
this.$ReactComposerLoggingStore_log(m,c('ComposerWaterfallEvent').PHOTO_ADD);
this.$ReactComposerLoggingStore_logFeatureUpdate(m,c('ReactComposerFeatureType').MEDIA);};
k.prototype.

$ReactComposerLoggingStore_handlePhotoUploadResizeStarted=function(l){var m=
this.validateAction
(l,
['composerID','loggingData']),n=m[0],o=m[1];

this.$ReactComposerLoggingStore_logToPUW(n,c('PUWSteps').CLIENT_PROCESS_BEGIN,o);};
k.prototype.

$ReactComposerLoggingStore_handlePhotoUploadResizeDone=function(l){var m=
this.validateAction
(l,
['composerID','loggingData']),n=m[0],o=m[1];

this.$ReactComposerLoggingStore_logToPUW(n,c('PUWSteps').CLIENT_PROCESS_SUCCESS,o);};
k.prototype.

$ReactComposerLoggingStore_handlePhotoUploadResizeFailed=function(l){var m=
this.validateAction
(l,
['composerID','loggingData']),n=m[0],o=m[1];

this.$ReactComposerLoggingStore_logToPUW(n,c('PUWSteps').CLIENT_PROCESS_FAIL,o);};
k.prototype.

$ReactComposerLoggingStore_handleSphericalPhotoCheckDone=function(l){var m=
this.validateAction
(l,
['composerID','loggingData']),n=m[0],o=m[1];

this.$ReactComposerLoggingStore_logToPUW
(n,
c('PUWSteps').CLIENT_SPHERICAL_CHECK_SUCCESS,
o);};

k.prototype.

$ReactComposerLoggingStore_handleSphericalPhotoCheckFailed=function(l){var m=
this.validateAction
(l,
['composerID','loggingData']),n=m[0],o=m[1];

this.$ReactComposerLoggingStore_logToPUW
(n,
c('PUWSteps').CLIENT_SPHERICAL_CHECK_FAIL,
o);};

k.prototype.

$ReactComposerLoggingStore_handlePhotoUploadResizerUnavailable=function(l){
var m=this.validateAction(l,'composerID');
this.$ReactComposerLoggingStore_logToPUW(m,c('PUWSteps').CLIENT_PROCESS_UNAVAILABLE);};
k.prototype.

$ReactComposerLoggingStore_handlePhotoUploadUploading=function(l){var m=
this.validateAction
(l,
['composerID','fileUpload']),n=m[0],o=m[1];

this.$ReactComposerLoggingStore_logToPUW
(n,
c('PUWSteps').CLIENT_TRANSFER_BEGIN,

{bytes:o.getFile().size});};


k.prototype.

$ReactComposerLoggingStore_handlePhotoUploadDone=function(l){var m=
this.validateAction
(l,
['composerID','fileUpload','timeToUpload']),n=m[0],o=m[1],p=m[2],


q={};

if(l.uploadID&&
c('ReactComposerMediaUploadStore').getMediaUploadExists(n,l.uploadID))

q=c('ReactComposerMediaUploadStore').getMediaUpload
(n,
l.uploadID);


this.$ReactComposerLoggingStore_log(n,c('ComposerWaterfallEvent').PHOTO_ADD_SUCCESS);
this.$ReactComposerLoggingStore_logToPUW
(n,
c('PUWSteps').CLIENT_TRANSFER_SUCCESS,

{bytes:o.getFile().size,
auto_retry_count:o.getRetryCount(),
dt:p,
custom_tags:{manual_retry:!!o.getFile().manuallyRetried},
projection_type:q.projectionType,
fbid:l.photoID,
sheight:q.height,
swidth:q.width,
theight:l.height,
twidth:l.width});};


k.prototype.

$ReactComposerLoggingStore_handlePhotoUploadFailed=function(l){var m=
this.validateAction
(l,
['composerID','fileUpload','error','timeToUpload']),n=m[0],o=m[1],p=m[2],q=m[3],


r={};

if(l.uploadID&&
c('ReactComposerMediaUploadStore').getMediaUploadExists(n,l.uploadID))

r=c('ReactComposerMediaUploadStore').getMediaUpload
(n,
l.uploadID);


this.$ReactComposerLoggingStore_log(n,c('ComposerWaterfallEvent').PHOTO_ADD_FAILURE);
this.$ReactComposerLoggingStore_logToPUW
(n,
c('PUWSteps').CLIENT_TRANSFER_FAIL,

{bytes:o.getFile().size,
error_code:p.code,
error_info:p.description,
auto_retry_count:o.getRetryCount(),
dt:q,
custom_tags:{manual_retry:!!o.getFile().manuallyRetried},
projection_type:r.projectionType,
sheight:r.height,
swidth:r.width});};


k.prototype.

$ReactComposerLoggingStore_handlePhotoUploadRemove=function(l){
var m=this.validateAction(l,'composerID');
this.$ReactComposerLoggingStore_log(m,c('ComposerWaterfallEvent').PHOTO_REMOVE);
this.$ReactComposerLoggingStore_logFeatureUpdate(m,c('ReactComposerFeatureType').MEDIA);
this.$ReactComposerLoggingStore_logToPUW(m,c('PUWSteps').CLIENT_TRANSFER_CANCEL);};
k.prototype.

$ReactComposerLoggingStore_handlePhotoRemoved=function(l){
var m=this.validateAction(l,'composerID');
this.$ReactComposerLoggingStore_log(m,c('ComposerWaterfallEvent').PHOTO_REMOVE);
this.$ReactComposerLoggingStore_logFeatureUpdate(m,c('ReactComposerFeatureType').MEDIA);};
k.prototype.

$ReactComposerLoggingStore_handleVideoUploadEnqueued=function(l){
var m=this.validateAction(l,'composerID');
this.$ReactComposerLoggingStore_logFeatureUpdate(m,c('ReactComposerFeatureType').MEDIA);};
k.prototype.

$ReactComposerLoggingStore_handleVideoUploadAdd=function(l){
var m=this.validateAction(l,'composerID');
this.$ReactComposerLoggingStore_log(m,c('ComposerWaterfallEvent').VIDEO_ADD);};
k.prototype.

$ReactComposerLoggingStore_handleVideoUploadRemove=function(l){
var m=this.validateAction(l,'composerID');
this.$ReactComposerLoggingStore_log(m,c('ComposerWaterfallEvent').VIDEO_REMOVE);
this.$ReactComposerLoggingStore_logFeatureUpdate(m,c('ReactComposerFeatureType').MEDIA);};
k.prototype.

$ReactComposerLoggingStore_handleDeselectTagger=function(l){var m=
this.validateAction
(l,
['composerID','taggerID','sourceLoggingName']),n=m[0],o=m[1],p=m[2],


q=this.$ReactComposerLoggingStore_getFeatureTypeFromTaggerID(o);


q!==null||h(0,
'Cannot determine feature type for taggerID %s',
o);


if(q)
this.$ReactComposerLoggingStore_logFeatureDone(n,q,p);};

k.prototype.

$ReactComposerLoggingStore_handleSelectedTagger=function(l){var m=
this.validateAction(l,
['composerID','sourceLoggingName']),n=m[0],o=m[1],

p=c('ReactComposerTaggerStore').getSelectedTagger(n),

event=null;
switch(p){
case c('ReactComposerTaggerType').PEOPLE:

this.$ReactComposerLoggingStore_logFeatureIntent
(n,
c('ReactComposerFeatureType').WITH_TAG,
o);

event=c('ComposerWaterfallEvent').FRIEND_TAG_INTENT;
break;
case c('ReactComposerTaggerType').LOCATION:

this.$ReactComposerLoggingStore_logFeatureIntent
(n,
c('ReactComposerFeatureType').LOCATION,
o);

event=c('ComposerWaterfallEvent').LOCATION_INTENT;
break;
case c('ReactComposerTaggerType').ACTIVITY:

this.$ReactComposerLoggingStore_logFeatureIntent
(n,
c('ReactComposerFeatureType').MINUTIAE,
o);

event=c('ComposerWaterfallEvent').MINUTIAE_INTENT;
break;
case c('ReactComposerTaggerType').MARKDOWN:

event=c('ComposerWaterfallEvent').MARKDOWN_INTENT;
break;

default:var q=this.$ReactComposerLoggingStore_getFeatureTypeFromTaggerID(p);

if(q)
this.$ReactComposerLoggingStore_logFeatureIntent
(n,
q,
o);


break;}


if(event===null)

return;


this.$ReactComposerLoggingStore_log(n,event);};
k.prototype.

$ReactComposerLoggingStore_handleSetTaggerData=function(l){var m=
this.validateAction(l,
['composerID','taggerID','sourceLoggingName']),n=m[0],o=m[1],p=m[2],


q=this.$ReactComposerLoggingStore_getFeatureTypeFromTaggerID(o);


q!==null||h(0,
'Cannot determine feature type for taggerID %s',
o);


if(q)
this.$ReactComposerLoggingStore_logFeatureUpdate(n,q,p);};

k.prototype.

$ReactComposerLoggingStore_handlePostStarted=function(l){
var m=this.validateAction(l,'composerID'),

n=this.getComposerData(m);

n.perfTimes.postStartTime=c('performanceAbsoluteNow')();

this.$ReactComposerLoggingStore_log(m,c('ComposerWaterfallEvent').COMPOSER_POST);

if(this.$ReactComposerLoggingStore_isPhotoPost(m)){
this.$ReactComposerLoggingStore_logToPUW
(m,
c('PUWSteps').CLIENT_PUBLISH_BEGIN,
this.$ReactComposerLoggingStore_getPhotoPostingLoggingData(m));


c('ReactComposerPhotoStore').getPhotos(m).forEach(function(o){
o.faceboxes.forEach(function(p){
return (new (c('PhotoUploadFacerecWaterfallTypedLogger'))().
setEvent(c('FacerecWaterfallEvent').CLIENT_PHOTO_PUBLISHED).
setPhotoFbid(o.id).
setFaceBoxID(p.id).
setRecognizedUser(p.recognizedSubjectID).
setTaggedUser(p.taggedSubjectID).
log());});});}};


k.prototype.

$ReactComposerLoggingStore_handlePostSucceeded=function(l){var m,n=this,
o=this.validateAction(l,'composerID'),
p=this.getComposerData(o);

this.$ReactComposerLoggingStore_log(o,c('ComposerWaterfallEvent').COMPOSER_POST_SUCCESS);

this.$ReactComposerLoggingStore_perfLog
(o,
c('ComposerPerfEvent').CLIENT_POST_SUCCEEDED,

{extraData:
{attachment_type:c('ReactComposerAttachmentStore').getSelectedAttachmentID
(o),

duration:c('performanceAbsoluteNow')()-p.perfTimes.postStartTime}});




if(this.$ReactComposerLoggingStore_isPhotoPost(o)){
var q=this.$ReactComposerLoggingStore_getPhotoPostingLoggingData(o);

this.$ReactComposerLoggingStore_logToPUW
(o,
c('PUWSteps').CLIENT_PUBLISH_SUCCESS,
q);

this.$ReactComposerLoggingStore_logToPUW(o,c('PUWSteps').CLIENT_FLOW_SUCCESS);


var r=c('ReactComposerPhotoStore').getPhotos(o);
if(r&&r.forEach)(function(){
var s=0;
r.forEach
(function(t){
if(t.cubestripURI)
s++;});



if(s>0)
c('Bootloader').loadModules
(["SphericalPhotoViewerLoggerUtil","SphericalMediaConstants"],
function(t,u){
t.logNumberOfSphericalPhoto
({composerSessionID:this.getSessionID(o)||'',
surface:u.LOGGER_SURFACES.composer,
numberOfSphericalPhoto:s});}.

bind(n),'ReactComposerLoggingStore');})

();}};



k.prototype.

$ReactComposerLoggingStore_handlePostError=function(l){
var m=this.validateAction
(l,
'composerID'),

n=this.getComposerData(m);

this.$ReactComposerLoggingStore_log(m,c('ComposerWaterfallEvent').COMPOSER_POST_FAILURE);

this.$ReactComposerLoggingStore_perfLog
(m,
c('ComposerPerfEvent').CLIENT_POST_FAILED,

{extraData:
{attachment_type:c('ReactComposerAttachmentStore').getSelectedAttachmentID
(m),

duration:c('performanceAbsoluteNow')()-n.perfTimes.postStartTime}});




if(this.$ReactComposerLoggingStore_isPhotoPost(m)){
var o=l.response,
p=Object.assign
(this.$ReactComposerLoggingStore_getPhotoPostingLoggingData(m),

{error_code:o&&o.getError&&o.getError(),
error_info:o&&o.getErrorDescription&&
o.getErrorDescription()});



this.$ReactComposerLoggingStore_logToPUW
(m,
c('PUWSteps').CLIENT_PUBLISH_FAIL,
p);}};


k.prototype.

$ReactComposerLoggingStore_handlePhotosSelect=function(l){var m=
this.validateAction
(l,
['composerID','numPhotos','method']),n=m[0],o=m[1],p=m[2],


q=
{method:p,
volume:o};




this.$ReactComposerLoggingStore_logToPUW
(n,
c('PUWSteps').CLIENT_FLOW_BEGIN,
null,
{logOncePerSession:true});






if(p!==c('PUWMethods').FILE_SELECTOR)
this.$ReactComposerLoggingStore_logToPUW(n,c('PUWSteps').CLIENT_SELECT_BEGIN);

this.$ReactComposerLoggingStore_logToPUW(n,c('PUWSteps').CLIENT_SELECT_SUCCESS,q);};
k.prototype.

$ReactComposerLoggingStore_handlePhotoEditStarted=function(l){
var m=this.validateAction(l,'composerID');
this.$ReactComposerLoggingStore_logToPUW(m,c('PUWSteps').CLIENT_PHOTO_EDIT_BEGIN);};
k.prototype.

$ReactComposerLoggingStore_handlePhotoEditFinished=function(l){
var m=this.validateAction(l,'composerID');
this.$ReactComposerLoggingStore_logToPUW(m,c('PUWSteps').CLIENT_PHOTO_EDIT_SUCCESS);};
k.prototype.

$ReactComposerLoggingStore_handlePhotoUploadRetry=function(l){
var m=this.validateAction(l,'composerID');
this.$ReactComposerLoggingStore_logToPUW(m,c('PUWSteps').CLIENT_TRANSFER_MANUAL_RETRY);};
k.prototype.

$ReactComposerLoggingStore_handleAddFaceBox=function(l){var m=
this.validateAction
(l,
['photoID','facebox']),n=m[0],o=m[1],


p=o.bestRecognition,
q=null;
if(p)
q=p.subjectID;


new (c('PhotoUploadFacerecWaterfallTypedLogger'))().
setEvent(c('FacerecWaterfallEvent').RECOGNITION_RECEIVED_BY_CLIENT).
setPhotoFbid(n).
setFaceBoxID(o.id).
setRecognizedUser(q).
log();};
k.prototype.

$ReactComposerLoggingStore_handleFinishRecognition=function(l){var m=
this.validateAction
(l,
['photos','facerecWaterfallEvent']),n=m[0],o=m[1];

n.forEach
(function(p){
new (c('PhotoUploadFacerecWaterfallTypedLogger'))().
setEvent(c('nullthrows')(o)).
setPhotoFbid(p).
log();});};


k.prototype.

$ReactComposerLoggingStore_handleAttachmentScraped=function(l){
var m=this.validateAction(l,'composerID');

this.$ReactComposerLoggingStore_logFeatureUpdate
(m,
c('ReactComposerFeatureType').LINK,
l.sourceLoggingName);};

k.prototype.

$ReactComposerLoggingStore_handleSetAudience=function(l){
var m=this.validateAction(l,'composerID');

this.$ReactComposerLoggingStore_logFeatureUpdate
(m,
c('ReactComposerFeatureType').PRIVACY,
l.sourceLoggingName);};

k.prototype.

$ReactComposerLoggingStore_handleComposerCancel=function(l){
var m=this.validateAction(l,'composerID');

this.$ReactComposerLoggingStore_log
(m,
c('ComposerWaterfallEvent').COMPOSER_CANCEL);};

k.prototype.

$ReactComposerLoggingStore_handleShowCollectionSelector=function(l){var m=
this.validateAction(l,
['composerID','sourceLoggingName']),n=m[0],o=m[1];


this.$ReactComposerLoggingStore_logFeatureIntent
(n,
c('ReactComposerFeatureType').COLLECTIONS,
o);};

k.prototype.

$ReactComposerLoggingStore_handleHideCollectionSelector=function(l){var m=
this.validateAction(l,
['composerID','sourceLoggingName']),n=m[0],o=m[1];


this.$ReactComposerLoggingStore_logFeatureDone
(n,
c('ReactComposerFeatureType').COLLECTIONS,
o);};

k.prototype.

$ReactComposerLoggingStore_handleSetCollection=function(l){var m=
this.validateAction(l,
['composerID','sourceLoggingName']),n=m[0],o=m[1];


this.$ReactComposerLoggingStore_logFeatureUpdate
(n,
c('ReactComposerFeatureType').COLLECTIONS,
o);};

k.prototype.

$ReactComposerLoggingStore_handleShowCollectionCreationLayer=function(l){var m=
this.validateAction(l,
['composerID','sourceLoggingName']),n=m[0],o=m[1];


this.$ReactComposerLoggingStore_logFeatureIntent
(n,
c('ReactComposerFeatureType').COLLECTION_CREATION,
o);};

k.prototype.

$ReactComposerLoggingStore_handleHideCollectionCreationLayer=function(l){var m=
this.validateAction(l,
['composerID','sourceLoggingName','isCancel']),n=m[0],o=m[1],p=m[2],




q=p?
this.$ReactComposerLoggingStore_logFeatureCancel.bind(this):
this.$ReactComposerLoggingStore_logFeatureDone.bind(this);

q
(n,
c('ReactComposerFeatureType').COLLECTION_CREATION,
o);};

k.prototype.

$ReactComposerLoggingStore_isPhotoPost=function(l){
var m=c('ReactComposerAttachmentStore').getIsAttachmentSelected
(l,
c('ReactComposerAttachmentType').MEDIA),


n=c('ReactComposerMediaUploadStore').getUploadsOfType
(l,
c('ReactComposerMediaUploadType').PHOTO);

return m&&!!n.size;};
k.prototype.

$ReactComposerLoggingStore_getPhotoPostingLoggingData=function(l){
var m=c('ReactComposerTaggerStore').getTaggerData
(l,
c('ReactComposerTaggerType').PEOPLE)||
[],

n=
c('ReactComposerMediaUploadStore').getTotalNumberOfStickersOnPhotos(l);


return {volume:c('ReactComposerPhotoStore').getPhotos(l).size,
with_tag_count:m.length,
sticker_count:n};};

k.prototype.

$ReactComposerLoggingStore_logFeatureIntent=
function(l,
m,
n){

this.$ReactComposerLoggingStore_log
(l,
c('ComposerWaterfallEvent').FEATURE_INTENT,

{extraData:
{feature_type:m,
source:n}});};



k.prototype.

$ReactComposerLoggingStore_logFeatureUpdate=
function(l,
m,
n){

this.$ReactComposerLoggingStore_log
(l,
c('ComposerWaterfallEvent').FEATURE_UPDATE,

{extraData:
{feature_type:m,
source:n}});};



k.prototype.



$ReactComposerLoggingStore_logFeatureCancel=
function(l,
m,
n){

this.$ReactComposerLoggingStore_log
(l,
c('ComposerWaterfallEvent').FEATURE_CANCEL,

{extraData:
{feature_type:m,
source:n}});};



k.prototype.

$ReactComposerLoggingStore_logFeatureDone=
function(l,
m,
n){

this.$ReactComposerLoggingStore_log
(l,
c('ComposerWaterfallEvent').FEATURE_DONE,

{extraData:
{feature_type:m,
source:n}});};



k.prototype.

$ReactComposerLoggingStore_log=
function(l,
event){

var m=arguments.length<=2||arguments[2]===undefined?{}:arguments[2],
n=this.getComposerData(l);
if(n.uniqueEvents.has(event)){
if(n.uniqueEvents.get(event))
return;


n.uniqueEvents=n.uniqueEvents.set(event,true);}




if(c('ReactComposerStore').getRef(l)===
c('ComposerEntryPointRef').RECENT_POSTS)
c('Bootloader').loadModules
(["FeedbackDigestNotifTypedLogger"],
function(o){
new o().
setComposerWaterfallEvent(event).
addToExtraData
('payload',
JSON.stringify(this.$ReactComposerLoggingStore_getPayloadInfo(l))).

addToExtraData
('message',
c('ReactComposerStatusStore').getMessageText(l)).

log();}.
bind(this),'ReactComposerLoggingStore');



m.extraData=Object.assign

({is_markdown_enabled:!!c('ReactComposerTaggerStore').getTaggerData
(l,
c('ReactComposerTaggerType').MARKDOWN).
isMarkdown,
payload:this.$ReactComposerLoggingStore_getPayloadInfo(l)},

m.extraData);


c('ComposerXMarauderLogger').logEvent
(event,
l,
m);};

k.prototype.

$ReactComposerLoggingStore_perfLog=
function(l,
event){

var m=arguments.length<=2||arguments[2]===undefined?{}:arguments[2],
n=this.getComposerData(l);
if(n.uniqueEvents.has(event)){
if(n.uniqueEvents.get(event))
return;


n.uniqueEvents=n.uniqueEvents.set(event,true);}


c('ReactComposerPerfLogger').logEvent
(event,
l,
m);};

k.prototype.

$ReactComposerLoggingStore_logToPUW=
function(l,
m,
n,
o,
p){

var q=this.getComposerData(l);
if(q.uniqueEvents.has(m)){
if(q.uniqueEvents.get(m))
return;


q.uniqueEvents=q.uniqueEvents.set(m,true);}


this.logPUWStep
(m,
this.getSessionID(l),
c('PUWApplications').WEB_REACT_COMPOSER,
c('ReactComposerStore').getRef(l),
n,
o,
p);};

k.prototype.

$ReactComposerLoggingStore_flushComposerLoggingQueue=function(){
while(c('ReactComposerLoggingQueue').getLength()>0){
var l=c('ReactComposerLoggingQueue').pop();

this.handler(l);}};

k.prototype.





$ReactComposerLoggingStore_getPayloadInfo=function(l){

return {character:c('ReactComposerStatusStore').getTextLength(l),
location_tag:c('ReactComposerTaggerStore').hasLocationTag(l),
implicit_location:c('ReactComposerTaggerStore').hasImplicitLocation(l),
minutiae:c('ReactComposerTaggerStore').hasMinutiae(l),
with_who_tag:c('ReactComposerTaggerStore').getNumberOfWithWhoTags(l),
photo:c('ReactComposerMediaUploadStore').getNonsphericalPhotoCount(l),
three_sixty_photo:
c('ReactComposerMediaUploadStore').getSphericalPhotoCount(l),
video:c('ReactComposerMediaUploadStore').getUploadsCount
(l,
c('ReactComposerMediaUploadType').VIDEO),

shared_link:c('ReactComposerScrapedAttachmentStore').hasAttachment(l)?
1:
0,
backdated:c('ReactComposerTaggerStore').hasBackdate(l)?
c('ReactComposerTaggerStore').getTaggerData
(l,
c('ReactComposerTaggerType').BACKDATE):

null,
audience:c('ReactComposerAudienceStore').getAudience(l),
collection:c('ReactComposerAudienceStore').getCollectionID(l)};};

k.prototype.

$ReactComposerLoggingStore_getFeatureTypeFromTaggerID=
function(l){

switch(l){
case c('ReactComposerTaggerType').PEOPLE:
return c('ReactComposerFeatureType').WITH_TAG;
case c('ReactComposerTaggerType').LOCATION:
return c('ReactComposerFeatureType').LOCATION;
case c('ReactComposerTaggerType').ACTIVITY:
return c('ReactComposerFeatureType').MINUTIAE;
case c('ReactComposerTaggerType').MARKDOWN:
return c('ReactComposerFeatureType').MARKDOWN;
case c('ReactComposerTaggerType').BACKDATE:
return c('ReactComposerFeatureType').DATE;
case c('ReactComposerTaggerType').SPONSOR:
return c('ReactComposerFeatureType').SPONSOR;
case c('ReactComposerTaggerType').PRODUCT:
return c('ReactComposerFeatureType').PRODUCT;
case c('ReactComposerTaggerType').PAGE_CTA:
return c('ReactComposerFeatureType').PAGE_CTA;
case c('ReactComposerTaggerType').FORMATTED_TEXT:
return c('ReactComposerFeatureType').FORMATTED_TEXT;
case c('ReactComposerTaggerType').ISSUE_TAG:
return c('ReactComposerFeatureType').ISSUE_TAG;
case c('ReactComposerTaggerType').STICKER:
return c('ReactComposerFeatureType').STICKER;
case c('ReactComposerTaggerType').MESSAGING:
return c('ReactComposerFeatureType').MESSAGING;

default:return null;}};




f.exports=new k();}),null);

/** js/react_composer/prompts/ReactComposerPromptsActionTypes.js */





__d('ReactComposerPromptsActionTypes',['keyMirrorRecursive'],(function a(b,c,d,e,f,g){



f.exports=c('keyMirrorRecursive')
({SET_MINUTIAE_DATA:null,
SET_PROMPT_DATA:null,
SET_PROMPT_XHP:null},
'ReactComposerPromptsActionTypes');}),null);

/** js/react_composer/prompts/ReactComposerPromptsStore.js */





__d('ReactComposerPromptsStore',['ReactComposerPromptsActionTypes','ReactComposerStoreBase'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits




(j,c('ReactComposerStoreBase'));i=h&&h.prototype;
function j(){'use strict';
var k;
i.constructor.call(this,
function(){

return {promptData:null,
promptXHP:null};},


function(l){k&&k.handler(l);});

k=this;}
j.prototype.

handler=function(k){'use strict';
switch(k.type){
case c('ReactComposerPromptsActionTypes').SET_MINUTIAE_DATA:
this.$ReactComposerPromptsStore_handleSetMinutiaeData(k);
break;
case c('ReactComposerPromptsActionTypes').SET_PROMPT_DATA:
this.$ReactComposerPromptsStore_handleSetPromptData(k);
break;
case c('ReactComposerPromptsActionTypes').SET_PROMPT_XHP:
this.$ReactComposerPromptsStore_handleSetPromptXHP(k);
break;
default:}};



j.prototype.

$ReactComposerPromptsStore_handleSetMinutiaeData=function(k){'use strict';var l=
this.validateAction
(k,
['composerID','minutiaeData']),m=l[0],n=l[1],

o=this.getComposerData(m);
o.minutiaeData=n;};
j.prototype.

getMinutiaeData=function(k){'use strict';
return this.getComposerData(k).minutiaeData;};
j.prototype.

$ReactComposerPromptsStore_handleSetPromptData=function(k){'use strict';var l=
this.validateAction
(k,
['composerID','promptData']),m=l[0],n=l[1],

o=this.getComposerData(m);
o.promptData=n;};
j.prototype.

getPromptData=function(k){'use strict';
return this.getComposerData(k).promptData;};
j.prototype.

$ReactComposerPromptsStore_handleSetPromptXHP=function(k){'use strict';var l=
this.validateAction
(k,
['composerID','promptXHP']),m=l[0],n=l[1],

o=this.getComposerData(m);
o.promptXHP=n;

this.emitChange(m);};
j.prototype.

getPromptXHP=function(k){'use strict';
return this.getComposerData(k).promptXHP;};



f.exports=new j();}),null);

/** js/react_composer/utils/ReactComposerPostDataUtils.js */





__d('ReactComposerPostDataUtils',['ReactComposerAttachmentStore','ReactComposerAttachmentType','ReactComposerAudienceStore','ReactComposerLoggingStore','ReactComposerMediaUploadType','ReactComposerMinutiaeAttachmentStore','ReactComposerPhotoStore','ReactComposerPostUtilsCore','ReactComposerPromptsStore','ReactComposerScrapedAttachmentStore','ReactComposerSessionMetricsStore','ReactComposerStatusStore','ReactComposerStore','ReactComposerTaggerStore','ReactComposerTaggerType','ReactComposerSelectedImagesStore','ReactComposerSlideshowAudioStore','ReactComposerSlideshowStore','ComposerXMarauderLogger','PhotoEditorLoggingConstants','PhotoEditorSaveStates','PlaceAttachmentSetting','PUWApplications','SlideshowUtil','ifRequired','isNumberLike','StorySurfaces'],(function a(b,c,d,e,f,g){

































var h=
{getPostData:function i(j){
var k=j.composerID,
l=j.targetID,


m=c('ReactComposerTaggerStore').getTaggerData
(k,
c('ReactComposerTaggerType').PEOPLE)||
[],

n=[],
o=[];

m.forEach(function(hb){
n.push(hb.getTitle());
o.push(hb.getUniqueID());});



var p=c('ReactComposerTaggerStore').getTaggerData
(k,
c('ReactComposerTaggerType').PRODUCT)||
[];


p=p.filter
(function(hb){return !hb.getAuxiliaryData().isFacebox;});


var q=p.map
(function(hb){return hb.getUniqueID();}),



r=c('ReactComposerTaggerStore').getTaggerData
(k,
c('ReactComposerTaggerType').ACTIVITY),


s=[],
t=[],
u=[],
v;

if(r&&r.action&&r.object){
s.push(r.action.getUniqueID());
v=r.actionIconID;


if(c('isNumberLike')(r.object.getUniqueID())&&


r.object.getUniqueID()!==r.object.getTitle()){

t.push(r.object.getUniqueID());
u.push('');}else 

u.push(r.object.getTitle());}




var w=c('ReactComposerTaggerStore').getTaggerData
(k,
c('ReactComposerTaggerType').STICKER),

x=w&&w.stickerID?
w.stickerID:
null,

y=
c('ReactComposerMinutiaeAttachmentStore').getHideObjectAttachment(k),

z=c('ifRequired')
('ReactComposerLocationAttachmentStore',
function(hb){
z=
hb.getMarkup(k)!==null?
c('PlaceAttachmentSetting').SHOW_ATTACHMENT:
c('PlaceAttachmentSetting').HIDE_ATTACHMENT;},

function(){return c('PlaceAttachmentSetting').HIDE_ATTACHMENT;}),


aa=[],
ba=[],
ca='';
c('ifRequired')
('ReactComposerMultilingualStatusStore',
function(hb){
aa=hb.getMessages
(k);

ba=hb.getLanguageDialects
(k);

ca=hb.getSpecifiedPostLanguage
(k);});





var da=c('ReactComposerTaggerStore').getTaggerData
(k,
c('ReactComposerTaggerType').LOCATION),


ea=da?da.place:null,

fa=c('ReactComposerTaggerStore').getTaggerData
(k,
c('ReactComposerTaggerType').BACKDATE)||
{},

ga=
{year:this._sanitizeDateField(fa.year),
month:this._sanitizeDateField(fa.month),
day:this._sanitizeDateField(fa.day),
hour:this._sanitizeDateField(fa.hour),
minute:this._sanitizeDateField(fa.minute)},


ha=da&&da.implicitLocation?
da.implicitLocation.citypageid:
null,


ia=c('ReactComposerTaggerStore').getTaggerData
(k,
c('ReactComposerTaggerType').SPONSOR)||
{},
ja=
{directShareStatus:ia.directShareStatus,
sponsorRelationship:ia.sponsorRelationship,
sponsors:[]};

ia.sponsors.map(function(hb){
ja.sponsors.push(hb.getUniqueID());});


var ka=c('ReactComposerAudienceStore').getCollectionID(k),

la=null;
if(!ka){
var ma=c('ReactComposerAudienceStore').getLegacyAudience
(k);

if(ma)
la=[{value:ma}];}




var na=j.useHints,
oa=c('ReactComposerTaggerStore').getTaggerData
(k,
c('ReactComposerTaggerType').TARGETING),


pa=oa&&!ka?
na?oa.hints:oa.targeting:
null;
if(pa!=null){
if(!na&&pa.fan_of)
pa.fan_of=
pa.fan_of.map(function(hb){return hb.id;});

c('ifRequired')
('AdsAPITargetFields',
function(hb){

if(hb&&pa&&
na&&pa[hb.INTERESTS])
pa[hb.INTERESTS]=
pa[hb.INTERESTS].map(function(ib){return ib.id;});});}





var qa=oa&&!ka?oa.gating:null;

if(j.composerConfig.contextInfo.stopFeedDistributionDateFormatted){
if(!pa)
pa={};


pa['relevant-until-date']=
j.composerConfig.contextInfo.stopFeedDistributionDateFormatted;
pa['relevant-until-time']=
j.composerConfig.contextInfo.stopFeedDistributionTimeFormatted;}



var ra=c('ifRequired')
('PagesComposerBoostedPostsStore',
function(hb){
return (hb.getConfig(k));},
function(){return null;}),


sa=
c('ReactComposerScrapedAttachmentStore').getAttachmentConfig(k);
if(sa===null)
c('ifRequired')
('ReactComposerCTAStore',
function(hb){
sa=hb.getAttachmentConfig(k);});




var ta=c('ReactComposerTaggerStore').hasMarkdown(k);
c('ifRequired')
('ReactComposerMarkdownStore',
function(hb){
ta=ta||hb.isMarkdownEnabled(k);});



var ua=c('ReactComposerTaggerStore').isDistricttargeting
(k),


va=c('ReactComposerTaggerStore').getTaggerData
(k,
c('ReactComposerTaggerType').CONTENT_WARNINGS);

if(va!=null)
va=va.map
(function(hb){return hb.getUniqueID();});



var wa=null;
c('ifRequired')
('ReactComposerTopicFeedsTaggerStore',
function(hb){
if(!hb.getIsDarkLaunch(k))
wa=hb.getTaggedTopics
(k).
toArray();});




var xa=c('ReactComposerPromptsStore').getPromptData(k),
ya=null;
c('ifRequired')
('ReactComposerCustomConfigStore',
function(hb){
ya=
hb.isFeedOnlyPost(k)?
[c('StorySurfaces').TIMELINE]:
null;});




var za=
c('ReactComposerSessionMetricsStore').getComposerStartTime(k),
ab=null;
if(za)

ab=Math.round
((Date.now()-za)/1000);



var bb=false;
c('ifRequired')
('ReactComposerProfileBadgeStore',
function(hb){
bb=hb.hasProfileBadge
(k);});




var cb=c('ComposerXMarauderLogger').getInstance(k),
db=cb&&cb.composerSourceSurface,

eb=j.composerConfig.attachmentsConfig&&
j.composerConfig.attachmentsConfig[c('ReactComposerAttachmentType').STATUS],
fb=eb&&
eb.richTextEditor,

gb=ka?
null:
c('ReactComposerAudienceStore').getAudience(k);

return Object.assign(babelHelpers['extends']({},

c('ReactComposerStatusStore').getRichTextBlocks(k),
{action_type_id:s,
album_id:ka,


attachment:sa,
backdated_date:ga,
boosted_post_config:ra,
audience:la,
composer_entry_time:
c('ReactComposerSessionMetricsStore').getComposerEntryTime(k),
composer_session_id:c('ReactComposerLoggingStore').getSessionID(k),
composer_session_duration:ab,
composer_source_surface:db,
composer_type:j.composerType,
composertags_city:ha,
composertags_place:ea&&ea.getUniqueID()||
ha,
composertags_place_name:ea&&ea.getTitle(),
composertags_with:o,
composertags_sponsors:ja.sponsors,
direct_share_status:ja.directShareStatus,
sponsor_relationship:ja.sponsorRelationship,
composertags_product_items:q,
content_warnings:va,
feed_targeted_data:pa,
feed_topics:wa,
hide_object_attachment:y,
icon_id:v,
is_explicit_place:!!ea,
is_markdown:ta,
is_q_and_a:c('ReactComposerAttachmentStore').getIsAttachmentSelected
(k,
c('ReactComposerAttachmentType').QANDA),

is_district_targeting:ua,
is_profile_badge_post:bb,
multilingual_statuses:aa,
multilingual_status_langs:ba,
multilingual_specified_lang:ca,
num_keystrokes:c('ReactComposerSessionMetricsStore').getKeystrokeCount
(k),

num_pastes:c('ReactComposerSessionMetricsStore').getPasteCount
(k),

object_id:t,
object_str:u,
place_attachment_setting:z,
post_surfaces_blacklist:ya,
privacyx:gb,
prompt_id:xa?xa.promptID:null,
prompt_tracking_string:xa?xa.trackingString:null,
ref:c('ReactComposerStore').getRef(k),
sticker_id:x,
tagger_session_id:da&&da.sessionID,
target_type:c('ReactComposerStore').getTargetType(k),
targeted_privacy_data:qa,
text_composertags_with:n,
xhpc_message:c('ReactComposerStatusStore').getMessage
(k,
fb&&!ta),

xhpc_message_text:c('ReactComposerStatusStore').getMessageText(k),
is_forced_reshare_of_post:sa&&
sa.reshare_original_post,
xc_disable_config:
{xc_disable_link:sa&&sa.readOnly}}),


this._getScrapedAttachmentData(sa),
c('ReactComposerPostUtilsCore').getCoreData
(k,
j.composerConfig.contextInfo,
l));},




getMediaUploadsData:function i
(j,
k){

var l=c('ReactComposerPhotoStore').getPhotos(j);


k=k.filter(function(m){
return m.mediaType===c('ReactComposerMediaUploadType').VIDEO?
true:
l.some(function(n){return n.id===m.photoID;});});

return this.getMediaDataWithoutFiltering(j,k);},



getMediaDataWithoutFiltering:function i
(j,
k){

var l=k.
map(function(o){return o.photoID;}).
toArray(),


m=c('ReactComposerSlideshowStore').isSlideshowSelected(j),
n=null;
if(m)
n=this._getSlideshowSpec(j);


return Object.assign

({composer_unpublished_photo:l,
qn:c('ReactComposerLoggingStore').getSessionID(j),
slideshow_spec:n,
waterfallxapp:c('PUWApplications').WEB_REACT_COMPOSER,
xy_tags:this._getXYTagData(j)},

this._getCreativeEditingToolsData(k));},



_sanitizeDateField:function i(j){
return !j||j===-1||j===0?null:j;},


_getSlideshowSpec:function i(j){
var k=
c('ReactComposerSlideshowAudioStore').getSelectedStorylineMood(j),
l=null;
if(k!=null)
l=k.moodID;

var m=c('ReactComposerSlideshowStore').getDurationInMS(j),
n=c('ReactComposerSlideshowStore').getTransitionInMS(j),
o=c('ReactComposerSelectedImagesStore').getNumberOfImages(j),
p=c('SlideshowUtil').getTotalLengthInSec
(m,
o),

q=c('SlideshowUtil').getDurationParam
(o,
p,
n);


return {photo_ids:c('ReactComposerSelectedImagesStore').getPhotoIDs(j),
images_crops:c('ReactComposerSelectedImagesStore').getImagesCrops(j),
photo_duration:q.durationInMS,
photo_transition_duration:q.transitionInMS,
storyline_mood_id:l};},



_getXYTagData:function i(j){
var k=
c('ReactComposerPhotoStore').getAllTaggedFaceboxes(j).map(function(m){

return {fbid:m.get('photoID'),
x:m.get('x'),
y:m.get('y'),
name:m.get('taggedValue'),
subject:m.get('taggedSubjectID'),
from_facebox:true,
source:m.get('isMagicTag')?
'composerx_suggestions':'composerx_flyout'};}),


l=c('ReactComposerPhotoStore').getAllXYTags(j).map(function(m){

return {fbid:m.get('photoID'),
x:m.get('x'),
y:m.get('y'),
name:m.get('name'),
subject:m.get('subject'),
from_facebox:m.get('from_facebox'),
source:m.get('source')};});



return k.concat(l);},


_getCreativeEditingToolsData:function i
(j){

var k={},
l={},
m={},
n={};

j.forEach(function(p){
var q=p.get('photoID'),
r=c('PhotoEditorSaveStates').getLoggingData
(p.get('originalPhotoID'));

if(r){
k[q]=r.hasFilter?true:null;
l[q]=r.hasCrop?true:null;
m[q]=r.textOverlays;
n[q]=r.stickers;}});



var o={};
o[c('PhotoEditorLoggingConstants').COMPOSER_IMAGE_HAS_FILTER]=k;
o[c('PhotoEditorLoggingConstants').COMPOSER_IMAGE_HAS_CROP]=l;
o[c('PhotoEditorLoggingConstants').COMPOSER_IMAGE_TEXT_OVERLAY]=
m;
o[c('PhotoEditorLoggingConstants').COMPOSER_IMAGE_STICKER]=n;
return o;},


_getScrapedAttachmentData:function i
(j){

if(!j||
!j.params||
j.readOnly)
return null;



return {xc_share_params:JSON.stringify(j.params),
xc_share_target_type:j.type,
xc_share_images:j.params.images,
xc_share_title:j.params.title,
xc_share_summary:j.params.summary,
xc_link_url:j.params.url};}};




f.exports=h;}),null);

/** js/video/live/live_video_broadcast/LiveVideoBroadcastUtils.js */






__d('LiveVideoBroadcastUtils',['cx','LiveVideoBroadcastActions','ReactComposerAttachmentType','ReactComposerCustomConfigStore','ReactComposerLiveVideoActions','ReactComposerLiveVideoAttachmentStore','ReactComposerPostDataUtils','CSS','DialogX','DOM','LayerDestroyOnHide','LayerHideOnTransition','LiveVideoBroadcastDispatcher','LiveVideoBroadcastFunnelLogger','React','ReactDOM','StorySurfaces','Style','XUISpinner.react','uniqueID','LiveVideoBroadcastUIStore'],(function a(b,c,d,e,f,g,h){

'use strict';




























function i(p){
var q={};

for(var r=Object.values(p),s=Array.isArray(r),t=0,r=s?r:r[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var u;if(s){if(t>=r.length)break;u=r[t++];}else{t=r.next();if(t.done)break;u=t.value;}var v=u;
if(v.type==='ssrc'){
var w=v.packetsLost||0;
if(v.mediaType==='audio'){
q.audio_packets_lost=w;}else 

q.video_packets_lost=w;

if('bytesSent' in v){
var x=v.bytesSent,
y=v.packetsSent;
if(v.mediaType==='audio'){
q.audio_bytes_sent=x;
q.audio_packets_sent=y;}else{

q.video_bytes_sent=x;
q.video_packets_sent=y;}}else{


var z=v.bytesReceived,
aa=v.packetsReceived;
if(v.mediaType==='audio'){
q.audio_bytes_received=z;
q.audio_packets_sent=aa;}else{

q.video_bytes_received=z;
q.video_packets_received=aa;}}}else


if(v.type==='VideoBwe'){
q.send_bandwidth=v.googAvailableSendBandwidth;
q.transmit_bitrate=v.googTransmitBitrate;
q.encoding_bitrate=v.googActualEncBitrate;}else

if(v.type==='googCandidatePair'&&
v.googActiveConnection==='true')

q.transport_type=v.googTransportType;}


return q;}


function j
(p,
q,
r){

var s=c('ReactComposerLiveVideoAttachmentStore').getFunnelTags
(p.composerID),


t=
q.attachmentsConfig[c('ReactComposerAttachmentType').LIVE_VIDEO].composerDialog;

c('LiveVideoBroadcastFunnelLogger').maybeStartAndLaunchLiveComposer
(p.composerID,
r,
t);


if(s)
c('LiveVideoBroadcastFunnelLogger').addFunnelTags(s);


k(p,q);

c('ReactComposerLiveVideoActions').previewStarted
(p.composerID,

{actorID:p.actorID,
config:q,
targetID:p.targetID});}




function k
(p,
q){

var r=
{fixedTopPosition:42,
width:500,
xui:true,
addedBehaviors:[c('LayerDestroyOnHide'),c('LayerHideOnTransition')]},





s=c('uniqueID')(),
t=c('DOM').create('div');
c('ReactDOM').render
(c('React').createElement('div',null,
c('React').createElement('div',{id:s},
c('React').createElement(c('XUISpinner.react'),
{background:'dark',
className:"_275v",
size:'large'}))),



t);


var u=new (c('DialogX'))(r,t);
c('CSS').addClass(u.getRoot(),"_2k_g");


c('Style').set(u.getContentRoot(),'width','100%');

u.show();
c('LiveVideoBroadcastDispatcher').explicitlyRegisterStores
([c('LiveVideoBroadcastUIStore')]);

c('LiveVideoBroadcastActions').setDialog(u);
c('LiveVideoBroadcastActions').setDialogContainerID(s);
c('LiveVideoBroadcastActions').setComposerConfig
({config:q,
contextConfig:p,
composerID:p.composerID});}



function l
(p,
q,
r){

var s=c('ReactComposerPostDataUtils').getPostData
({composerID:p,
targetID:q,
composerConfig:
{contextInfo:r}}),



t=
c('ReactComposerCustomConfigStore').isFeedOnlyPost(p)?
[c('StorySurfaces').TIMELINE]:
null,




u={};
Object.assign(u,
{description:s.xhpc_message,
is_explicit_place:s.is_explicit_place,
place:s.composertags_place,
post_surfaces_blacklist:t});

if(s.object_id.length>0){
u.og_object_id=s.object_id[0];}else
if(s.object_str.length>0)
u.og_object_str=s.object_str[0];

if(s.action_type_id.length>0)
u.og_action_type_id=s.action_type_id[0];

if(s.privacyx)
u.privacyx=s.privacyx;

if(s.composertags_with.length>0)
u.with_tags=s.composertags_with;

return u;}



function m
(p,
q){

c('LiveVideoBroadcastActions').setDescription({description:p,shortDescription:q});}



function n(p){
j(p.contextConfig,p.config,true);}


var o=
{reduceWebRTCStats:i,
startPreviewUI:j,
getComposerFormData:l,
updateBroadcastUIState:m,
startPreviewUIFromLiveMap:n};


f.exports=o;}),null);

/** js/react_composer/attachments/live_video/ReactComposerLiveVideoAttachmentSelector.react.js */






__d('ReactComposerLiveVideoAttachmentSelector.react',['fbt','ix','ReactComposerAttachmentSelectorContainer.react','ReactComposerAttachmentType','ReactComposerLoggingName','LiveVideoBroadcastUtils','React'],(function a(b,c,d,e,f,g,h,i){var j,k,











l=c('React').PropTypes;j=babelHelpers.inherits

(m,c('React').PureComponent);k=j&&j.prototype;m.prototype.


















render=function(){'use strict';
var n=null;
if(this.props.useComposerDialog)
n=function(){
if(!this.props.config||!this.props.contextConfig)
return;

c('LiveVideoBroadcastUtils').startPreviewUI
(this.props.contextConfig,
this.props.config,
true);}.

bind(this);


return (c('React').createElement(c('ReactComposerAttachmentSelectorContainer.react'),
{attachmentID:c('ReactComposerAttachmentType').LIVE_VIDEO,
label:this.props.label,
icon:i("101619"),
'data-testid':'live-video-attachment-selector',
loggingName:c('ReactComposerLoggingName').LIVE_VIDEO_TAB_SELECTOR,
onAfterSelected:n}));};


function m(){'use strict';j.apply(this,arguments);}m.propTypes={label:l.node};m.defaultProps={label:h._(["Live Video","820c21155ded8bc6887a7ee69fc6e7a7"])};


f.exports=m;}),null);

/** www/__virtual__/x/XReactComposerLiveVideoAttachmentBootstrapController.js */



__d("XReactComposerLiveVideoAttachmentBootstrapController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/react_composer\/live_video\/bootstrap\/",{composer_id:{type:"String",required:true},composer_type:{type:"Enum",required:true,enumType:1},target_id:{type:"Int",required:true}});}),

null);

/** js/react_composer/attachments/live_video/ReactComposerLiveVideoLazyAttachment.react.js */





__d('ReactComposerLiveVideoLazyAttachment.react',['ReactComposerAttachmentType','ReactComposerLoadableAttachmentBodyMixin','ActorURI','Bootloader','React','XReactComposerLiveVideoAttachmentBootstrapController'],(function a(b,c,d,e,f,g){











var h=c('React').PropTypes,

i=c('React').createClass({displayName:'ReactComposerLiveVideoLazyAttachment',

mixins:[c('ReactComposerLoadableAttachmentBodyMixin')],



propTypes:
{selected:h.bool},


statics:
{attachmentID:c('ReactComposerAttachmentType').LIVE_VIDEO},


bootload:function j(k){
c('Bootloader').loadModules
(["ReactComposerLiveVideoAttachmentContainer.react"],
k,'ReactComposerLiveVideoLazyAttachment.react');},



getBootstrapURI:function j(){
return c('ActorURI').create
(c('XReactComposerLiveVideoAttachmentBootstrapController').
getURIBuilder().
setString('composer_id',this.context.composerID).
setEnum('composer_type',this.context.composerType).
setInt('target_id',this.context.targetID).
getURI(),
this.context.actorID);}});




f.exports=i;}),null);

/** js/react_composer/attachments/media/ReactComposerMediaAttachmentSelector.react.js */






__d('ReactComposerMediaAttachmentSelector.react',['fbt','ix','ReactComponentWithPureRenderMixin','React','ReactComposerAttachmentSelectorContainer.react','ReactComposerAttachmentType','ReactComposerLoggingName'],(function a(b,c,d,e,f,g,h,i){








var j=c('React').PropTypes,




k=c('React').createClass({displayName:'ReactComposerMediaAttachmentSelector',
mixins:[c('ReactComponentWithPureRenderMixin')],

propTypes:
{isInMoreButton:j.bool,
label:j.string},


getDefaultProps:function l(){

return {label:h._(["Photo\/Video","e6747a2172df3b3dd422b191c0f896d2"])};},






render:function l(){

return (c('React').createElement(c('ReactComposerAttachmentSelectorContainer.react'),
{attachmentID:c('ReactComposerAttachmentType').MEDIA,
label:this.props.label,
icon:i("40533"),
'data-testid':'media-attachment-selector',
loggingName:c('ReactComposerLoggingName').MEDIA_TAB_SELECTOR,
tabIndex:this.props.isInMoreButton?'-1':undefined}));}});





f.exports=k;}),null);
