if (self.CavalryLogger) { CavalryLogger.start_js(["iJcZo"]); }

/** __static_js_modules__/conversationnubaddtabsource.js */




__d("ConversationNubAddTabSource",[],(function a(b,c,d,e,f,g){

f.exports={NOTIFICATION:"notification",PAGE_REFRESH:"page_refresh",USER_PIN:"user_pin",UNSEEN_NOTIFICATION:"unseen_notification",UNKNOWN:"unknown"};}),

null);

/** __static_js_modules__/notiftestids.js */




__d("NotifTestIDs",[],(function a(b,c,d,e,f,g){

f.exports={REACT_BLUE_BAR_JEWEL:"react_blue_bar_jewel",NON_REACT_BLUE_BAR_JEWEL:"non_react_blue_bar_jewel",REACT_NOTIF_LIST:"react_notif_list",SEE_ALL_LIST:"see_all_list",REACT_NOTIF_JEWEL_FLYOUT:"react_notif_jewel_flyout",NON_REACT_NOTIF_JEWEL_FLYOUT:"non_react_notif_jewel_flyout",CHEVRON:"chevron",REACT_MARK_ALL_AS_READ_LINK:"react_mark_all_as_read_link",NON_REACT_MARK_ALL_AS_READ_LINK:"non_react_mark_all_as_read_link",NOTIFICATION_SOUND_SETTING:"notifiation_sound_setting",NOTIFICATION_SOUND_SETTING_SELECTOR:"notifiation_sound_setting_selector",MESSAGE_SOUND_SETTING:"message_sound_setting",MESSAGE_SOUND_SETTING_SELECTOR:"message_sound_setting_selector",CLOSE_FRIEND_ACTIVITY_SELECTOR:"close_friend_activity_selector",BIRTHDAY_SELECTOR:"birthday_selector",ON_THIS_DAY_SELECTOR:"on_this_day_selector",TAGS_SELECTOR:"tags_selector",LIVE_VIDEO_SELECTOR:"live_video_selector",REACT_BADGE_COUNT_CONTAINER:"react_badge_count_container",NON_REACT_BADGE_COUNT_CONTAINER:"non_react_badge_count_container",BEEPER_LIST:"beeper_list",NON_REACT_SETTING_LINK:"non_react_setting_link",REACT_SETTING_LINK:"react_setting_link"};}),

null);

/** js/clientnotifs/models/NotificationPhotoThumbnail.js */






__d('NotificationPhotoThumbnail',['NotificationAttachmentConfig','QE2Logger'],(function a(b,c,d,e,f,g){

'use strict';




var h='notifications_www_thumbnails_universe';








function i
(k){

if(!k.media||
!k.style_list||
!k.style_list.length)
return null;


var l=k.style_list[0];
if(c('NotificationAttachmentConfig').experimentStyles[l])
c('QE2Logger').logExposureForUser(h);


if(c('NotificationAttachmentConfig').thumbnailStyles[l])
return k.media.image;


return null;}


var j=
{getThumbnail:function k
(l,
m,
n){

var o=void 0;

if(l&&l.length){
l.some(function(s){
o=i(s);
if(o)
return true;

return false;});


if(o)
return o;}




if(n){
var p=n.relevant_comments;
if(p&&p.length){
var q=p[0].attachments;
if(q&&q.length){
o=i(q[0]);
if(o)
return o;}}}






if(m){
var r=m.attachments;
if(r&&r.length)
return i(r[0]);}



return null;}};



f.exports=j;}),null);

/** js/clientnotifs/models/NotificationURI.js */






__d('NotificationURI',['BusinessURI.brands','URI','isFacebookURI','VideoPermalinkURI'],(function a(b,c,d,e,f,g){
















var h=
{localize:function i(j){

try{j=c('BusinessURI.brands')(j);}catch(
k){
return j.toString();}


var l=j.getSubdomain();
return j.
getUnqualifiedURI().
getQualifiedURI().
setSubdomain(l).
toString();},




snowliftable:function i(j){
if(!j)return false;
j=new (c('URI'))(j);
var k=j.getQueryData();
return c('isFacebookURI')(j)&&
(c('VideoPermalinkURI').isValid(j)||'fbid' in k);},


isVaultSetURI:function i(j){
return this._areEquals(j,'/ajax/vault/sharer_preview.php');},


isAlbumDraftRecoveryDialogURI:function i(j){
return this._areEquals(j,'/ajax/photos/upload/overlay/');},


isQuicksilverURI:function i(j){
return this._areEquals(j,'/games/quicksilver/spotlight/');},


_areEquals:function i(j,k){
if(!j)
return false;

var l=new (c('URI'))(j);
return c('isFacebookURI')(l)&&l.getPath()===k;},


_startsWith:function i(j,k){
if(!j)
return false;

var l=new (c('URI'))(j);
return c('isFacebookURI')(l)&&l.getPath().startsWith(k);}};



f.exports=h;}),null);

/** js/clientnotifs/models/NotificationBeepData.js */






__d('NotificationBeepData',['NotificationPhotoThumbnail','NotificationURI','URI'],(function a(b,c,d,e,f,g){

'use strict';





































f.exports=
{fromNotification:function h(i){


if(!i.showBeep||
!i.alert_id||
i.pinnedConvoConfig&&i.pinnedConvoConfig.hide_beeper_naive)

return null;


var j=i.alert_id,
k=j+'-'+String(i.receivedTime),
l=c('NotificationPhotoThumbnail').getThumbnail
(i.attachments,
i.attached_story);



return {actors:i.unaggregatedActors||i.actors,
ajaxifyLink:i.ajaxify_url,
beepID:k,
beepRenderer:i.beepRenderer,
beepUpdatesOnTop:i.beepUpdatesOnTop,
icon:i.icon,
link:i.url?c('NotificationURI').localize(new (c('URI'))(i.url)):'#',
notificationID:j,
notifID:i.id,
photo:l,
receivedTime:i.receivedTime,
rendererData:i.rendererData,
sound:!!i.sound,
text:i.unaggregatedTitle||i.title,
timestamp:i.timestamp,
tracking:i.tracking,
url:i.url};}};}),

null);

/** js/components/Notifications/NotificationBeeperConst.js */







__d('NotificationBeeperConst',['keyMirror'],(function a(b,c,d,e,f,g){


var h=
{IDLE_DELAY:10000,
ACTIVE_DELAY_LONG:4000,
FADE_OUT_LENGTH:1500,

BeepStates:c('keyMirror')

({PENDING:true,

RENDERED:true,

READY_TO_HIDE:true,

FADING_OUT:true})};










f.exports=h;}),null);

/** js/components/Notifications/NotificationBeeperItemCloseButton.react.js */






__d('NotificationBeeperItemCloseButton.react',['cx','fbt','React','XUIAbstractGlyphButton.react'],(function a(b,c,d,e,f,g,h,i){var j,k;j=babelHelpers.inherits







(l,c('React').Component);k=j&&j.prototype;l.prototype.
render=function(){'use strict';


return (c('React').createElement(c('XUIAbstractGlyphButton.react'),babelHelpers['extends']({},
this.props,
{className:"_3soc",
title:i._(["Close","643474dff97fc120414234267c1556c7"])})));};



function l(){'use strict';j.apply(this,arguments);}


f.exports=l;}),null);

/** js/components/Notifications/NotificationInterpolator.js */






__d('NotificationInterpolator',['Badge.react','React'],(function a(b,c,d,e,f,g){











function h(i,j){
var k=null;

if(j.entity.is_viewer_coworker===false||
j.entity.is_multi_company_group===true)









k=c('React').createElement(c('Badge.react'),{type:'work_non_coworker'});


return c('React').createElement('span',{className:'fwb'},i,k);}


f.exports=h;}),null);

/** js/components/Notifications/NotificationBeeperItemContents.react.js */






__d('NotificationBeeperItemContents.react',['cx','Animation','AsyncRequest','Bootloader','FBProfilePhotoShadow.react','Image.react','ImageBlock.react','NotificationBeeperItemCloseButton.react','NotificationInterpolator','NotificationURI','NotificationUserActions','React','ReactDOM','TextWithEntities.react','Timestamp.react','VideoPlayerOrigins'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits






























(k,c('React').Component);j=i&&i.prototype;function k(){var l,m;'use strict';for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=j.constructor).call.apply(l,[this].concat(o)),this.
isLiveVideo=null,this.
$NotificationBeeperItemContents_videoClicked=false,this.









$NotificationBeeperItemContents_onClick=function(q){
this.$NotificationBeeperItemContents_markAsRead();
this.props.onHide();


if(q.button===1||q.altKey||q.ctrlKey||q.metaKey||q.shiftKey)
return;


var r=this.props.beep;
if(c('NotificationURI').isAlbumDraftRecoveryDialogURI(r.link)){
new (c('AsyncRequest'))(r.link).send();
q.preventDefault();}else
if(r.photo&&c('NotificationURI').snowliftable(r.link)){
c('Bootloader').loadModules(["PhotoSnowlift"],function(s){
s.bootstrap(r.link,q.currentTarget);},
'NotificationBeeperItemContents.react');
this.$NotificationBeeperItemContents_videoClicked=true;
this.$NotificationBeeperItemContents_maybeRenderVideo();
q.preventDefault();}else
if(r.ajaxifyLink){
c('Bootloader').loadModules(["AsyncDialog"],function(s){
s.bootstrap(r.ajaxifyLink,q.currentTarget,'dialog');},
'NotificationBeeperItemContents.react');
q.preventDefault();}}.

bind(this),this.

$NotificationBeeperItemContents_onClose=function(){
this.$NotificationBeeperItemContents_markAsRead();
this.props.onHide();}.
bind(this),m;}k.prototype.$NotificationBeeperItemContents_markAsRead=function(){'use strict';c('NotificationUserActions').markNotificationsAsRead([this.props.beep.notificationID]);};k.prototype.




$NotificationBeeperItemContents_doFlash=function(){'use strict';
new (c('Animation'))(c('ReactDOM').findDOMNode(this.refs.inner)).
from('opacity','0').
to('opacity','1').
duration(200).
go();};
k.prototype.

$NotificationBeeperItemContents_getContentID=function(){'use strict';
var l=this.$NotificationBeeperItemContents_getTrackingString(),
m=JSON.parse(l);
return m.content_id;};
k.prototype.

$NotificationBeeperItemContents_isLiveVideo=function(){'use strict';
if(this.isLiveVideo===null){
var l=this.$NotificationBeeperItemContents_getTrackingString();
this.isLiveVideo=l.indexOf('live_video')!==-1;}

return !!this.isLiveVideo;};
k.prototype.

$NotificationBeeperItemContents_getTrackingString=function(){'use strict';
return this.props.beep.tracking||'{}';};
k.prototype.

$NotificationBeeperItemContents_maybeRenderVideo=function(){'use strict';
if(this.$NotificationBeeperItemContents_isLiveVideo())
c('Bootloader').loadModules
(["PhotoSnowliftVideoNode","VideoPlayerSnowliftReactConfig"],
function(l,m){
if(m.shouldRenderVideoOnClick()){
var n=this.$NotificationBeeperItemContents_getContentID();
if(n)
l.mayBeRenderLiveVideo
(n,
c('VideoPlayerOrigins').BEEPER);}}.



bind(this),'NotificationBeeperItemContents.react');};


k.prototype.

$NotificationBeeperItemContents_maybeRenderVideoOnVisible=function(){'use strict';
if(this.$NotificationBeeperItemContents_isLiveVideo())
c('Bootloader').loadModules
(["PhotoSnowliftVideoNode","VideoPlayerSnowliftReactConfig"],
function(l,m){

if(m.shouldRenderVideoOnNotificationOpen())

l.mayBeRenderLiveVideo
(this.$NotificationBeeperItemContents_getContentID(),
c('VideoPlayerOrigins').BEEPER);}.


bind(this),'NotificationBeeperItemContents.react');};


k.prototype.

$NotificationBeeperItemContents_maybeDestroyVideoOnClose=function(){'use strict';
if(this.$NotificationBeeperItemContents_isLiveVideo()&&!this.$NotificationBeeperItemContents_videoClicked)
c('Bootloader').loadModules
(["PhotoSnowliftVideoNode","VideoPlayerSnowliftReactConfig"],
function(l,m){

if(m.shouldRenderVideoOnNotificationOpen())

l.destroyVideoNodeOfID(this.$NotificationBeeperItemContents_getContentID());}.

bind(this),'NotificationBeeperItemContents.react');



this.$NotificationBeeperItemContents_videoClicked=false;};
k.prototype.

componentDidMount=function(){'use strict';
this.props.onReadyToHide(this.props.beep.notificationID);
if(this.$NotificationBeeperItemContents_isLiveVideo())
c('Bootloader').loadModules(["VideoPlayerMetaData","PhotoSnowliftVideoNode"],


function(l,m){
var n=this.$NotificationBeeperItemContents_getContentID();
if(n)
l.genVideoData(n);}.

bind(this),'NotificationBeeperItemContents.react');

this.$NotificationBeeperItemContents_maybeRenderVideoOnVisible();};
k.prototype.





componentDidUpdate=function(l){'use strict';
if(l.beep.beepID!==this.props.beep.beepID){
this.$NotificationBeeperItemContents_doFlash();
this.props.onReadyToHide(this.props.beep.notificationID);}};

k.prototype.

componentWillUnmount=function(){'use strict';
this.$NotificationBeeperItemContents_maybeDestroyVideoOnClose();};
k.prototype.

render=function(){'use strict';
var l=this.props.beep,
m=((l.actors[0]||{}).profile_picture||{}).uri,
n=(l.icon||{}).uri;

return (c('React').createElement('div',{ref:'inner',className:this.props.className},
c('React').createElement(c('NotificationBeeperItemCloseButton.react'),{onClick:this.$NotificationBeeperItemContents_onClose}),
c('React').createElement('a',{href:l.link,
onClick:this.$NotificationBeeperItemContents_onClick,
className:"_3soi"},
c('React').createElement(c('ImageBlock.react'),
{className:"_3soj",
spacing:'medium'},
c('React').createElement(c('FBProfilePhotoShadow.react'),
{className:"_2yt7"},
c('React').createElement(c('Image.react'),
{src:m,
className:"_3sok"+

(!m?' '+"hidden_elem":'')})),



c('React').createElement('div',{className:"_3sol"},
c('React').createElement(c('TextWithEntities.react'),
{renderEmoticons:true,
renderEmoji:true,
interpolator:c('NotificationInterpolator'),
ranges:l.text.ranges,
aggregatedranges:l.text.aggregated_ranges,
text:l.text.text}),

c('React').createElement(c('ImageBlock.react'),{className:"_3som"},
c('React').createElement(c('Image.react'),
{className:"_1x8t"+

(!n?' '+"hidden_elem":''),

src:n}),

c('React').createElement(c('Timestamp.react'),
{time:l.timestamp.time,
text:l.timestamp.text,
verbose:l.timestamp.verbose})))))));};










f.exports=k;}),null);

/** js/components/Notifications/NotificationBeeperItem.react.js */







__d('NotificationBeeperItem.react',['cx','Animation','BrowserSupport','NotificationBeeperConst','NotificationBeeperItemContents.react','NotificationBeeperItemRenderersList','React','ReactDOM','Style','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g,h){var i,j,

















k=c('NotificationBeeperConst').FADE_OUT_LENGTH;i=babelHelpers.inherits


















(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;'use strict';for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.




state=
{fadedIn:false,
hidden:false},this.





































$NotificationBeeperItem_onHide=function(){
this.setState({hidden:true});}.
bind(this),n;}l.prototype.componentDidMount=function(){'use strict';var m=void 0;if(c('BrowserSupport').hasCSSAnimations()){m=function(){this.setState({fadedIn:true});}.bind(this);}else m=function(){if(!this.$NotificationBeeperItem_refItem)return;new (c('Animation'))(c('ReactDOM').findDOMNode(this.$NotificationBeeperItem_refItem)).from('top','-30px').from('opacity','0').to('top','0px').to('opacity','1').duration(200).ondone(function(){this.setState({fadedIn:true});}.bind(this)).go();}.bind(this);c('setTimeoutAcrossTransitions')(m,50);this.props.onInserted(this.props.beep);};l.prototype.componentWillUnmount=function(){'use strict';if(this.$NotificationBeeperItem_fadeOutAnimation){this.$NotificationBeeperItem_fadeOutAnimation.stop();this.$NotificationBeeperItem_fadeOutAnimation=null;}};l.prototype.

render=function(){'use strict';
var m=this.props.beep,

n=this.$NotificationBeeperItem_getRenderer(m.beepRenderer);


return (c('React').createElement('li',
{className:
this.state.hidden?"hidden_elem":'',

ref:function(o){return this.$NotificationBeeperItem_refItem=o;}.bind(this),
'data-gt':m.tracking},
c('React').createElement(n,
{beep:m,
className:"_3sod"+

(this.state.fadedIn?' '+"_3soe":''),

onHide:this.$NotificationBeeperItem_onHide,
onReadyToHide:this.props.onReadyToHide,
onPreventHide:this.props.onPreventHide})));};



l.prototype.

componentDidUpdate=
function(m,
n,
o){
'use strict';
if(!this.$NotificationBeeperItem_refItem)
return;



var p=c('ReactDOM').findDOMNode(this.$NotificationBeeperItem_refItem);
if(!p)
return;


if(this.props.fadingOut){
if(!this.$NotificationBeeperItem_fadeOutAnimation)
this.$NotificationBeeperItem_fadeOutAnimation=
new (c('Animation'))(p).
from('opacity','1').
to('opacity','0').
duration(k).
ondone(this.$NotificationBeeperItem_onHide).
go();


p.style.transitionDuration='0ms';}else 

if(this.$NotificationBeeperItem_fadeOutAnimation){
this.$NotificationBeeperItem_fadeOutAnimation.stop();
this.$NotificationBeeperItem_fadeOutAnimation=null;
c('Style').set(p,'opacity','1');}};


l.prototype.

$NotificationBeeperItem_getRenderer=function(m){'use strict';
if(m&&m in c('NotificationBeeperItemRenderersList'))
return c('NotificationBeeperItemRenderersList')[m];

return c('NotificationBeeperItemContents.react');};



f.exports=l;}),null);

/** js/clientnotifs/models/NotificationImpressions.js */






__d('NotificationImpressions',['AsyncSignal','NotificationTokens','URI'],(function a(b,c,d,e,f,g){





var h='/ajax/notifications/impression.php';

function i(j,k){
var l={ref:k};
c('NotificationTokens').untokenizeIDs(j).forEach(function(m,n){
l['alert_ids['+n+']']=m;});

new (c('AsyncSignal'))(new (c('URI'))(h).getQualifiedURI().toString(),l).send();}


f.exports={log:i};}),null);

/** js/notifications/modules/NotificationSound.js */






__d('NotificationSound',['Sound'],(function a(b,c,d,e,f,g){




var h=5000;

c('Sound').init(['audio/mpeg']);


function i(j){
this._soundPath=j;
this._lastPlayed=0;}


Object.assign(i.prototype,
{play:function j(k){
if(!this._soundPath)
return;


var l=Date.now();
if(l-this._lastPlayed<h)
return;


this._lastPlayed=l;
c('Sound').playOnlyIfImmediate(this._soundPath,k);}});



f.exports=i;}),null);

/** js/components/Notifications/NotificationBeeper.react.js */







__d('NotificationBeeper.react',['cx','Arbiter','ChannelConstants','NotificationBeepData','NotificationBeeperConst','NotificationBeeperItem.react','NotificationBeeperPinnedPostLoader','NotificationConstants','NotificationImpressions','NotificationSound','NotificationUpdates','NotificationUserActions','NotifTestIDs','React','SubscriptionsHandler','WorkFocusModeController','setTimeoutAcrossTransitions','shield'],(function a(b,c,d,e,f,g,h){var i,j,






















k=c('WorkFocusModeController').WorkFocusMode,






l=c('NotificationBeeperConst').ACTIVE_DELAY_LONG,
m=c('NotificationBeeperConst').BeepStates,
n=c('NotificationBeeperConst').FADE_OUT_LENGTH,
o=c('NotificationBeeperConst').IDLE_DELAY,


p=c('NotificationBeeperPinnedPostLoader').payload,

q='beeper',r=





c('NotificationConstants').PayloadSourceType,s=r.LIVE_SEND,t=r.OTHER_APPLICATION,u=r.CLIENT;i=babelHelpers.inherits





































(v,c('React').Component);j=i&&i.prototype;function v(){var w,x;'use strict';for(var y=arguments.length,z=Array(y),aa=0;aa<y;aa++)z[aa]=arguments[aa];return x=(w=j.constructor).call.apply(w,[this].concat(z)),this.

state=
{soundEnabled:this.props.soundEnabled,
hovering:false,
fading:false,



beeps:{}},this.


































































onMouseEnter=function(){
this.$NotificationBeeper_hideWait&&clearTimeout(this.$NotificationBeeper_hideWait);
var ba=[],
ca=this.state.beeps;
Object.keys(ca).forEach(function(da){
if(ca[da].state!=m.PENDING){
ba.push(da);}else 


ca[da].state=m.RENDERED;});


c('NotificationUserActions').markNotificationsAsSeen(ba);
this.setState
({hovering:true,
fading:false,
beeps:ca});}.

bind(this),this.







onMouseLeave=function(){
this.$NotificationBeeper_waitToHide(l);
this.setState({hovering:false});}.
bind(this),this.





$NotificationBeeper_onInsertedItem=function(ba){
if(!this.state.hovering)
this.$NotificationBeeper_waitToHide();


if(this.state.soundEnabled&&ba.sound){
if(!this.$NotificationBeeper_notifSound)
this.$NotificationBeeper_notifSound=new (c('NotificationSound'))(this.props.soundPath);




this.$NotificationBeeper_notifSound.play(ba.beepID);}


if(this.props.shouldLogImpressions)
c('NotificationImpressions').log([ba.notificationID],q);}.

bind(this),this.
















onReadyToHide=
function(ba,
ca){


this.state.beeps[ba].state=m.READY_TO_HIDE;
if(!this.$NotificationBeeper_hideWait)
this.$NotificationBeeper_waitToHide(ca);}.

bind(this),this.




$NotificationBeeper_onPreventHide=function(ba){

this.state.beeps[ba].state=m.RENDERED;}.


bind(this),this.








$NotificationBeeper_hide=function(){
this.$NotificationBeeper_hideWait=null;
var ba=this.state.beeps;
Object.keys(ba).forEach(function(ca){
if(ba[ca].state==m.READY_TO_HIDE)

ba[ca].state=m.FADING_OUT;});


this.setState({fading:true});

c('setTimeoutAcrossTransitions')
(c('shield')(this.$NotificationBeeper_finishHide,this),
n);}.

bind(this),this.





$NotificationBeeper_finishHide=function(){
if(!this.state.fading)
return;

var ba=this.state.beeps;
Object.keys(ba).forEach(function(ca){
if(ba[ca].state==m.FADING_OUT)
delete ba[ca];});



this.setState
({fading:false,
beeps:ba});







c('setTimeoutAcrossTransitions')
(function(){
var ca=this.state.beeps;
Object.keys(ca).forEach(function(da){
if(ca[da].state==m.PENDING)

ca[da].state=m.RENDERED;});


this.setState({beeps:ca});}.
bind(this));}.

bind(this),x;}v.prototype.componentWillMount=function(){'use strict';this.$NotificationBeeper_subscriptionsHandler=new (c('SubscriptionsHandler'))();this.$NotificationBeeper_subscriptionsHandler.addSubscriptions(c('NotificationUpdates').subscribe('update-notifications',function(w,x){if(x.payloadsource===s||x.payloadsource===t||x.payloadsource===u){var y=x.nodes;if(y&&y.length){if(k&&k.currentViewerInFocusMode())return;this.handleBeepChanges(this.$NotificationBeeper_convertNotifications(y));}}}.bind(this)),c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('notif_sound_pref_changed'),function(w,x){this.setState({soundEnabled:x.obj.enabled});}.bind(this)));c('Arbiter').inform('NotificationBeeper/mounted',null,c('Arbiter').BEHAVIOR_PERSISTENT);if(p)this.handleBeepChanges(this.$NotificationBeeper_convertNotifications(p.nodes));};v.prototype.componentWillUnmount=function(){'use strict';if(this.$NotificationBeeper_subscriptionsHandler)this.$NotificationBeeper_subscriptionsHandler.release();this.$NotificationBeeper_subscriptionsHandler=null;};v.prototype.$NotificationBeeper_waitToHide=function(w){'use strict';this.$NotificationBeeper_hideWait&&clearTimeout(this.$NotificationBeeper_hideWait);this.$NotificationBeeper_hideWait=c('setTimeoutAcrossTransitions')(c('shield')(this.$NotificationBeeper_hide,this),w==null?o:w);};v.prototype.






handleBeepChanges=
function(w){
'use strict';


var x=this.state.fading?
m.PENDING:
m.RENDERED,
y=this.state.beeps,
z=false;
Object.keys(w).reverse().forEach(function(aa){
var ba={state:x,data:w[aa]};

if(!y[aa]||y[aa].data.beepID!=ba.data.beepID){


if(y[aa]){
z=true;
if(ba.data.beepUpdatesOnTop)
delete y[aa];}


y[aa]=ba;}});




if(z)
this.$NotificationBeeper_waitToHide();


this.forceUpdate();};
v.prototype.

render=function(){'use strict';
var w=this.state.beeps,
x=[];
Object.keys(w).reverse().forEach(function(aa){
var ba=w[aa];
if(ba.state==m.PENDING)
return;


x.push
(c('React').createElement(c('NotificationBeeperItem.react'),
{key:aa,
fadingOut:this.state.fading&&ba.state==m.FADING_OUT,
beep:ba.data,
onInserted:this.$NotificationBeeper_onInsertedItem,
onReadyToHide:this.onReadyToHide,
onPreventHide:this.$NotificationBeeper_onPreventHide}));},


this);

var y=x.length>0,

z=
(!y?"hidden_elem":'')+(' '+"_50d1");




return (c('React').createElement('ul',
{ref:'container',
className:z,
'data-gt':this.props.tracking,
'data-testid':c('NotifTestIDs').BEEPER_LIST,
onMouseEnter:this.onMouseEnter,
onMouseLeave:this.onMouseLeave},
x));};


v.prototype.

$NotificationBeeper_convertNotifications=
function(w){
'use strict';
return w.reduce(function(x,y){
var z=c('NotificationBeepData').fromNotification(y);
if(z)
x[y.alert_id]=z;

return x;},
{});};



f.exports=v;}),null);

/** js/clientnotifs/controller/NotificationBeeperContainer.js */






__d('NotificationBeeperContainer',['NotificationBeeper.react','React','ReactDOM'],(function a(b,c,d,e,f,g){






var h=

{renderBeeper:function i(j,k){
c('ReactDOM').render
(c('React').createElement(c('NotificationBeeper.react'),j),
k);}};




f.exports=h;}),null);

/** js/components/SyncRequest/SyncRequestAcceptedMessage.react.js */







__d('SyncRequestAcceptedMessage.react',['fbt','cx','React'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,






l=c('React').PropTypes;j=babelHelpers.inherits

(m,c('React').Component);k=j&&j.prototype;m.prototype.














render=function(){
if(this.props.isSender){

return (c('React').createElement('div',null,h._(["{receiver} accepted your invite to play {app name}.","be16b5a02b782b735214d1d63b1b6dd2"],[h.param

('receiver',
c('React').createElement('span',{className:"_dg4"},
this.props.receiverName)),h.param



('app name',
c('React').createElement('span',{className:"_dg5"},
this.props.appName))])));}else 







return (c('React').createElement('div',null,h._(["You accepted an invite from {sender} to play {app name}.","655cbcc80f877999ca4c58e3dfa50da3"],[h.param


('sender',
c('React').createElement('span',{className:"_dg4"},
this.props.senderName)),h.param



('app name',
c('React').createElement('span',{className:"_dg5"},
this.props.appName))])));};






function m(){j.apply(this,arguments);}m.propTypes={appName:l.string.isRequired,isSender:l.bool.isRequired,receiverName:l.string.isRequired,senderName:l.string.isRequired};


f.exports=m;}),null);

/** js/components/SyncRequest/SyncRequestCanceledMessage.react.js */







__d('SyncRequestCanceledMessage.react',['cx','fbt','React'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,






l=c('React').PropTypes;j=babelHelpers.inherits

(m,c('React').Component);k=j&&j.prototype;m.prototype.














render=function(){
if(this.props.isSender){

return (c('React').createElement('div',null,i._(["You canceled an invite to {receiver} to play {app name}.","e79a463d67f256d19ea1cb034bd5f6dd"],[i.param


('receiver',
c('React').createElement('span',{className:"_dg4"},
this.props.receiverName)),i.param



('app name',
c('React').createElement('span',{className:"_dg5"},
this.props.appName))])));}else 







return (c('React').createElement('div',null,i._(["{sender} canceled an invitation to play {app name}.","74c6b3225af347ae340a3c486c915a8b"],[i.param

('sender',
c('React').createElement('span',{className:"_dg4"},
this.props.senderName)),i.param



('app name',
c('React').createElement('span',{className:"_dg5"},
this.props.appName))])));};






function m(){j.apply(this,arguments);}m.propTypes={appName:l.string.isRequired,isSender:l.bool.isRequired,receiverName:l.string.isRequired,senderName:l.string.isRequired};


f.exports=m;}),null);

/** js/components/SyncRequest/SyncRequestExpiredMessage.react.js */





__d('SyncRequestExpiredMessage.react',['fbt','cx','React'],(function a(b,c,d,e,f,g,h,i){var j,k,






l=c('React').PropTypes;j=babelHelpers.inherits

(m,c('React').Component);k=j&&j.prototype;m.prototype.







render=function(){'use strict';
if(this.props.isSender){

return (c('React').createElement('div',null,h._(["{receiver} missed your invite to play {app name}.","e8826ba7169c3500eb8b1b1996273b21"],[h.param


('receiver',
c('React').createElement('span',{className:"_dg4"},
this.props.receiverName)),h.param



('app name',
c('React').createElement('span',{className:"_dg5"},
this.props.appName))])));}else 







return (c('React').createElement('div',null,h._(["You missed an invite from {sender} to play {app name}.","e6ae4d16b011ecbe7c1cd70259ce0a48"],[h.param



('sender',
c('React').createElement('span',{className:"_dg4"},
this.props.senderName)),h.param



('app name',
c('React').createElement('span',{className:"_dg5"},
this.props.appName))])));};






function m(){'use strict';j.apply(this,arguments);}m.propTypes={appName:l.string.isRequired,isSender:l.bool.isRequired,receiverName:l.string.isRequired,senderName:l.string.isRequired};


f.exports=m;}),null);

/** js/components/SyncRequest/SyncRequestRejectedMessage.react.js */





__d('SyncRequestRejectedMessage.react',['cx','fbt','AsyncRequest','Link.react','React','URI'],(function a(b,c,d,e,f,g,h,i){var j,k,









l=c('React').PropTypes;j=babelHelpers.inherits

(m,c('React').Component);k=j&&j.prototype;function m(){var n,o;'use strict';for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=k.constructor).call.apply(n,[this].concat(q)),this.



































































$SyncRequestRejectedMessage_submitBlockApp=function(){
var s=new (c('URI'))('/games/block_app/'),
t=new (c('AsyncRequest'))().setURI(s);
t.setData
({app_id:this.props.app.id,
source:'sync_request'});

t.send();}.
bind(this),this.

$SyncRequestRejectedMessage_submitBlockUser=function(){
var s=new (c('URI'))('/games/block_user/'),
t=new (c('AsyncRequest'))().setURI(s);
t.setData
({app_id:this.props.app.id,
blockee_uid:this.props.sender.id});

t.send();}.
bind(this),o;}m.prototype.render=function(){'use strict';if(this.props.isSender){return c('React').createElement('div',null,i._(["{receiver} declined your invite to play {app_name}.","97da10c7f071d1e8de25731cee5e097d"],[i.param('receiver',c('React').createElement('span',{className:"_dg4"},this.props.receiver.name)),i.param('app_name',c('React').createElement('span',{className:"_dg5"},this.props.app.name))]));}else return c('React').createElement('div',null,i._(["You declined an invite from {sender} to play {app_name}.","b6dd99ca8343c065b4865541f97b28d2"],[i.param('sender',c('React').createElement('span',{className:"_dg4"},this.props.sender.name)),i.param('app_name',c('React').createElement('span',{className:"_dg5"},this.props.app.name))]),c('React').createElement('div',{className:"_13n7"},c('React').createElement('div',null,c('React').createElement(c('Link.react'),{onClick:this.$SyncRequestRejectedMessage_submitBlockApp},i._(["Block {app}","b7a67c9ded1689ea1e9c158736835427"],[i.param('app',this.props.app.name)]))),c('React').createElement('div',null,c('React').createElement(c('Link.react'),{onClick:this.$SyncRequestRejectedMessage_submitBlockUser},i._(["Block requests from {sender}","2bdcd5842ca47958a9306115b0629b78"],[i.param('sender',this.props.sender.name)])))));};m.propTypes={requestId:l.string.isRequired,app:l.object.isRequired,isSender:l.bool.isRequired,receiver:l.object.isRequired,sender:l.object.isRequired};


f.exports=m;}),null);

/** js/components/SyncRequest/SyncRequestTimer.react.js */






__d('SyncRequestTimer.react',['fbt','React'],(function a(b,c,d,e,f,g,h){var i,j,





k=c('React').PropTypes;


function l(n){
if(n){
n=Math.ceil(n);
var o=n%60;
if(o<10)o='0'+o;
var p=Math.floor(n/60);
return p+':'+o;}else 

return "0:00";}

i=babelHelpers.inherits

(m,c('React').Component);j=i&&i.prototype;m.prototype.






render=function(){'use strict';
if(this.props.isSender){

return (c('React').createElement('div',null,h._(["({time_remaining} remaining)","26e8471580a3ab37d312aa898fc0fe3c"],[h.param


('time_remaining',
l(this.props.timeRemaining))])));}else 







return (c('React').createElement('div',null,h._(["You have {time_remaining} to accept.","80df7b2837ded553887a46b47d851184"],[h.param



('time_remaining',
l(this.props.timeRemaining))])));};






function m(){'use strict';i.apply(this,arguments);}m.propTypes={timeRemaining:k.number.isRequired,isSender:k.bool.isRequired,receiverName:k.string.isRequired};


f.exports=m;}),null);

/** js/components/SyncRequest/SyncRequestTitle.react.js */





__d('SyncRequestTitle.react',['fbt','cx','React'],(function a(b,c,d,e,f,g,h,i){var j,k,






l=c('React').PropTypes;j=babelHelpers.inherits

(m,c('React').Component);k=j&&j.prototype;m.prototype.







render=function(){'use strict';
if(this.props.isSender){

return (c('React').createElement('div',null,h._(["Waiting for {receiver} to accept your invite to play {app_name}.","e34a6a3556bb0cf237638a2fceb9ed85"],[h.param


('receiver',
c('React').createElement('span',{className:"_dg4"},
this.props.receiverName)),h.param



('app_name',
c('React').createElement('span',{className:"_dg5"},
this.props.appName))])));}else 







return (c('React').createElement('div',null,h._(["{sender} wants to play {app_name} with you, right now.","d977c0c6c4f6089d67e9ce9e132270cd"],[h.param

('sender',
c('React').createElement('span',{className:"_dg4"},
this.props.senderName)),h.param



('app_name',
c('React').createElement('span',{className:"_dg5"},
this.props.appName))])));};







function m(){'use strict';j.apply(this,arguments);}m.propTypes={appName:l.string.isRequired,isSender:l.bool.isRequired,receiverName:l.string.isRequired,senderName:l.string.isRequired};


f.exports=m;}),null);

/** www/__virtual__/x/XSyncRequestSubmitController.js */



__d("XSyncRequestSubmitController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/platform\/games\/sync_requests\/submit\/",{request_id:{type:"Int",required:true},sender:{type:"Int",required:true},action:{type:"Int",required:true}});}),

null);

/** js/components/SyncRequest/SyncRequest.react.js */






__d('SyncRequest.react',['cx','fbt','Arbiter','AsyncRequest','ChannelConstants','React','SyncRequestStatusEnum','SyncRequestTitle.react','SyncRequestAcceptedMessage.react','SyncRequestRejectedMessage.react','SyncRequestExpiredMessage.react','SyncRequestCanceledMessage.react','SyncRequestTimer.react','XUIButton.react','XSyncRequestSubmitController','getObjectValues'],(function a(b,c,d,e,f,g,h,i){var j,k,





















l=c('React').PropTypes;j=babelHelpers.inherits

(m,c('React').Component);k=j&&j.prototype;function m(){var n,o;'use strict';for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=k.constructor).call.apply(n,[this].concat(q)),this.




















































state=
{buttonsDisabled:false,
time:Date.now(),
status:this.props.status,
viewerIsSender:this.props.viewerId===this.props.sender.id},this.

























































































































































































$SyncRequest_handleAccept=function(){
this.$SyncRequest_handleStatusUpdate(c('SyncRequestStatusEnum').ACCEPTED);


var s=window.open(this.props.app.uri);
if(s)
s.focus();}.

bind(this),this.

$SyncRequest_handleReject=function(){
this.$SyncRequest_handleStatusUpdate(c('SyncRequestStatusEnum').REJECTED);}.
bind(this),this.

$SyncRequest_handleCancel=function(){
this.$SyncRequest_handleStatusUpdate(c('SyncRequestStatusEnum').CANCELED);}.
bind(this),this.

$SyncRequest_handleStatusUpdate=function(s){
this.setState
({status:s,
buttonsDisabled:true});


var t=c('XSyncRequestSubmitController').getURIBuilder().
setInt('request_id',this.props.requestId).
setInt('sender',this.props.sender.id).
setInt('action',s).
getURI();

new (c('AsyncRequest'))().
setURI(t).
setHandler(function(u){
this.setState({status:s});}.
bind(this)).
setErrorHandler(function(u){
this.setState({buttonsDisabled:false});}.
bind(this)).
send();}.
bind(this),o;}m.prototype.componentWillMount=function(){'use strict';if(this.props.status===c('SyncRequestStatusEnum').PENDING){var n=c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('sync_request_updated'),function(q,r){r=r.obj;if(r.id.toString()!==this.props.requestId)return;this.setState({status:r.status});}.bind(this));this.setState({statusEvent:n});}var o=null;if(this.props.status===c('SyncRequestStatusEnum').PENDING){var p=function q(){this.setState({time_remaining:this.state.time_remaining-1});if(this.state.time_remaining<=0){clearInterval(this.state.counter);var r={counter:null,time_remaining:0};if(this.state.status===c('SyncRequestStatusEnum').PENDING)r.status=c('SyncRequestStatusEnum').EXPIRED;this.setState(r);}};o=setInterval(p.bind(this),1000);}this.setState({time_remaining:this.props.timeRemaining,counter:o});};m.prototype.componentWillUnmount=function(){'use strict';if(this.state.counter)clearInterval(this.state.counter);c('Arbiter').unsubscribe(this.state.statusEvent);};m.prototype.componentDidUpdate=function(n,o){'use strict';if(this.props.status!=c('SyncRequestStatusEnum').PENDING)this.state.status=this.props.status;if(this.props.onStatusUpdate)this.props.onStatusUpdate(this.state.status,o.status);};m.prototype.render=function(){'use strict';var n;switch(this.state.status){case c('SyncRequestStatusEnum').PENDING:var o;if(!this.state.viewerIsSender){o=[c('React').createElement(c('XUIButton.react'),{use:'confirm',onClick:this.$SyncRequest_handleAccept,disabled:this.state.buttonsDisabled,label:i._(["Accept","2f68c0544efd2c5640bf286b5ef98ffd"])}),c('React').createElement(c('XUIButton.react'),{use:'default',onClick:this.$SyncRequest_handleReject,disabled:this.state.buttonsDisabled,label:i._(["Decline","d2d55818af132d7281c74a7e7b48f2b2"])})];}else o=c('React').createElement(c('XUIButton.react'),{use:'default',onClick:this.$SyncRequest_handleCancel,disabled:this.state.buttonsDisabled,label:i._(["Cancel","833be1570b5af93ae46113cb221a9ae0"])});n=c('React').createElement('div',null,c('React').createElement('div',{className:"_372m"},c('React').createElement(c('SyncRequestTitle.react'),{appName:this.props.app.name,isSender:this.state.viewerIsSender,receiverName:this.props.receiver.name,senderName:this.props.sender.name})),c('React').createElement('div',{className:"_372n"},c('React').createElement(c('SyncRequestTimer.react'),{isSender:this.state.viewerIsSender,timeRemaining:this.state.time_remaining,receiverName:this.props.receiver.name})),c('React').createElement('div',{className:"_372o"},o));break;case c('SyncRequestStatusEnum').ACCEPTED:n=c('React').createElement('div',{className:"_372p mvs"},c('React').createElement(c('SyncRequestAcceptedMessage.react'),{appName:this.props.app.name,isSender:this.state.viewerIsSender,receiverName:this.props.receiver.name,senderName:this.props.sender.name}));break;case c('SyncRequestStatusEnum').REJECTED:n=c('React').createElement('div',{className:"_372p mvs"},c('React').createElement(c('SyncRequestRejectedMessage.react'),{requestId:this.props.requestId,app:this.props.app,isSender:this.state.viewerIsSender,receiver:this.props.receiver,sender:this.props.sender}));break;case c('SyncRequestStatusEnum').EXPIRED:n=c('React').createElement('div',{className:"_372p mvs"},c('React').createElement(c('SyncRequestExpiredMessage.react'),{appName:this.props.app.name,isSender:this.state.viewerIsSender,receiverName:this.props.receiver.name,senderName:this.props.sender.name}));break;case c('SyncRequestStatusEnum').CANCELED:n=c('React').createElement('div',{className:"_372p mvs"},c('React').createElement(c('SyncRequestCanceledMessage.react'),{appName:this.props.app.name,isSender:this.state.viewerIsSender,receiverName:this.props.receiver.name,senderName:this.props.sender.name}));break;default:throw new Error('The request status `%s` is unknown.',this.state.status);}return c('React').createElement('div',{className:"_372q"},n);};m.propTypes={app:l.object.isRequired,creationTime:l.number.isRequired,requestId:l.string.isRequired,receiver:l.object.isRequired,sender:l.object.isRequired,status:l.oneOf(c('getObjectValues')(c('SyncRequestStatusEnum'))).isRequired,timeout:l.number.isRequired,timeRemaining:l.number.isRequired,viewerId:l.number.isRequired,onStatusUpdate:l.func};


f.exports=m;}),null);

/** shared/fbjs/functional/once.js */





__d('once',[],(function a(b,c,d,e,f,g){

'use strict';







function h(j){

var k=i(j);


for(var l in j)
if(Object.prototype.hasOwnProperty.call(j,l))
k[l]=j[l];



return k;}





function i(j){
var k=j,
l=void 0,

m=function n(){
if(k){
l=k.apply(this,arguments);
k=null;}

return l;};


return m;}


f.exports=h;}),null);

/** js/conversation/ConversationNotificationListeners.js */





__d('ConversationNotificationListeners',['Bootloader','ConversationNubAddTabSource','NotificationConstants','NotificationUpdates','PinnedConversationNubsConfig','once'],(function a(b,c,d,e,f,g){

'use strict';var h=

















c('NotificationConstants').PayloadSourceType,i=h.LIVE_SEND,j=h.OTHER_APPLICATION,k=h.ENDPOINT,

l=c('once')(function(){
var m='update-notifications';






c('NotificationUpdates').subscribe
(m,
function(n,o){var p,q;

if(c('PinnedConversationNubsConfig').sharedNotificationsReadStateEnabled&&
o.payloadsource===i&&
o.readState&&
Object.keys(o.readState).length){

c('Bootloader').loadModules(["NotificationConversationController"],
function(r){
r.handleNotificationsRead(o.readState);},
'ConversationNotificationListeners');}else


if(o.payloadsource===i||
o.payloadsource===j){
(function(){
var r=o.nodes,
s=
r&&
r.length&&
r.some(function(t){
return t.pinnedConvoConfig;});


if(s)
c('Bootloader').loadModules(["NotificationConversationController"],
function(t){
t.handleNewNotifications
(r,
c('ConversationNubAddTabSource').NOTIFICATION);},

'ConversationNotificationListeners');})

();}else

if(c('PinnedConversationNubsConfig').notificationsWhileAwayEnabled&&
o.payloadsource===k)
(function(){
var r=o.nodes;
if(r&&r.length)
c('Bootloader').loadModules(["NotificationConversationController"],
function(s){
s.handleAllEndpointNotifications(r);},
'ConversationNotificationListeners');})

();});});





f.exports=

{initialize:function m(){
l();}};}),
null);

/** www/__virtual__/x/XPymkFunnelLoggingController.js */



__d("XPymkFunnelLoggingController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/pymk\/funnel_logging\/",{event_ts:{type:"Int",required:true},query_id:{type:"Int"},candidate_id:{type:"Int"},signature:{type:"Int"},loc:{type:"String",required:true},ref:{type:"String"},action:{type:"Enum",required:true,enumType:1}});}),

null);

/** js/growth/pymk/PymkFunnelLogger.js */




__d('PymkFunnelLogger',['AsyncRequest','DOMQuery','XPymkFunnelLoggingController'],(function a(b,c,d,e,f,g){





var h=


{setupListeners:function i
(j,
k,
l,
m,
n){

this._setupForSingleElement(j,k,l,'add');
this._setupForSingleElement(j,k,m,'click');
this._setupForSingleElement(j,k,n,'click');},


logImpression:function i(j,k,l){
this._logEvent(j,'impression',k,l);},


logXOut:function i(j,k,l){
this._logEvent(j,'hide',k,l);},


_logEvent:function i(j,event,k,l){
var m=
c('XPymkFunnelLoggingController').getURIBuilder().
setInt('candidate_id',j).
setInt('signature',k).
setInt('event_ts',Math.floor(Date.now()/1000)).
setEnum('action',event).
setString('loc',l).
getURI();
new (c('AsyncRequest'))(m).
setMethod('POST').
send();},


_setupForSingleElement:function i
(j,
k,
l,
m){

Event.listen
(l,
'click',
function(event){
var n=j.getAttribute('data-signature'),
o=c('DOMQuery').find(j,'input.friendBrowserID'),
p=parseInt(o.value,10);

this._logEvent
(p,
m,
n,
k);}.

bind(this));}};




f.exports=h;}),null);

/** www/__virtual__/x/XFriendRequestIHEventLoggingController.js */



__d("XFriendRequestIHEventLoggingController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/requests\/interaction_history_logging\/",{target_id:{type:"FBID",required:true},log_event:{type:"String",required:true}});}),

null);

/** js/growth/requests/FriendRequestIHEventLogger.js */





__d('FriendRequestIHEventLogger',['Event','AsyncRequest','XFriendRequestIHEventLoggingController'],(function a(b,c,d,e,f,g){






var h=


{setupJewelListeners:function i
(j,
k,
l){

this._setupForJewelSingleElement(j,k,'click');
if(l)
this._setupForJewelSingleElement(j,l,'click');},



logImpression:function i(j){
this._logEvent(j,'impression');},


_logEvent:function i(j,event){
if(isNaN(j))
return;

var k=
c('XFriendRequestIHEventLoggingController').getURIBuilder().
setFBID('target_id',j).
setString('log_event',event).
getURI();
new (c('AsyncRequest'))(k).
setMethod('POST').
send();},


_setupForJewelSingleElement:function i
(j,
k,
l){

c('Event').listen
(k,
'click',
function(event){
var m=j.getAttribute('id');
if(!m)
return;

var n=m.substring(0,m.length-6);

this._logEvent
(n,
l);}.

bind(this));}};




f.exports=h;}),null);

/** shared/quickpromotion/QPRenderer.js */





__d('QPRenderer',['$','CSS','XAsyncRequest','XQuickPromotionSimpleLoggingController'],(function a(b,c,d,e,f,g){












var h=function m
(n,
event,
o){
var p=c('XQuickPromotionSimpleLoggingController').getURIBuilder().
setInt('qp_id',n).
setString('qp_event',event).
setStringToStringMap('qp_instance_log_data',o).
getURI();
new (c('XAsyncRequest'))(p).send();},







i=function m
(n,
o,
p){
var q=c('XQuickPromotionSimpleLoggingController').getURIBuilder().
setInt('qp_id',n).
setEnum('qp_action',o).
setStringToStringMap('qp_instance_log_data',p).
getURI();
new (c('XAsyncRequest'))(q).send();},








j=function m
(n,
o,
p,
q,
r,
s){
l
(n,
p,
c('$')(q),
s,
function(){
if(r)
c('CSS').hide(o);});},











k=function m
(n,
o,
p){
o.show();
h(n,'view',{});

o.subscribe
('cancel',
function(){
h(n,'dialog_cancel',{});});



for(var q=0;q<p.length;q++){
var r=p[q],
s=c('$')(r.element_id);
l
(n,
r.action,
s,
r.instance_log_data,
r.should_close?function(){o.hide();}:function(){});


if(r.action=='primary')
s.focus();}},





l=function m
(n,
o,
p,
q,
r){
p.addEventListener
('click',
function(){
var s=c('XQuickPromotionSimpleLoggingController').getURIBuilder().
setInt('qp_id',n).
setEnum('qp_action',o).
setStringToStringMap('qp_instance_log_data',q).
getURI();
new (c('XAsyncRequest'))(s).send();
r();});};




g.setAction=j;
g.setDialogActionsAndShow=k;
g.logAction=i;
g.logEvent=h;}),null);

/** js/jewel/JewelQPLogging.js */




__d('JewelQPLogging',['QPRenderer'],(function a(b,c,d,e,f,g){



var h=false,
i=null,
j=false;





function k(){
if(j)
return;

if(h&&i){
j=true;
c('QPRenderer').logEvent
(i.promotion_id,
'view',
i.instance_log_data?
i.instance_log_data:
{});}}




var l=

{onJewelOpened:function m(){
h=true;


k();},




updateQPLogData:function m(n){
i=n;


k();}};



f.exports=l;}),null);

/** js/jewel/RequestsJewelStore.js */





__d('RequestsJewelStore',['Arbiter','ArbiterMixin','ChannelConstants'],(function a(b,c,d,e,f,g){












var h=babelHelpers['extends']({},c('ArbiterMixin'),


{_initialized:false,

_count:0,
_requestList:{},

addFriendRequests:function i(j){
Object.assign(this._requestList,j);},


getRequestListKeys:function i(){
return Object.keys(this._requestList);},


removeRequest:function i(j){
delete this._requestList[j];},


getRequestCount:function i(j){
return this.getRequestListKeys().length;},


decrementCount:function i(){
this.setCount(Math.max(0,this._count-1));},



setCount:function i(j){
c('Arbiter').inform('jewel/count-updated',
{jewel:'requests',
count:j},
c('Arbiter').BEHAVIOR_STATE);},


setupListeners:function i(){
if(this._initialized)
return;

this._initialized=true;
c('Arbiter').subscribe('jewel/count-updated',function(j,k){
k.jewel==='requests'&&this._updateCount(k.count);}.
bind(this));
c('Arbiter').subscribe
(c('ChannelConstants').getArbiterType('jewel_requests_add'),
function(j,k){return this._addRequest(k);}.bind(this));

c('Arbiter').subscribe
(c('ChannelConstants').getArbiterType('jewel_friending_notifs'),
function(j,k){return this._addNotification(k);}.bind(this));

c('Arbiter').subscribe
(c('ChannelConstants').getArbiterType('jewel_requests_remove_old'),
function(j,k){return this._removeOldRequest(k);}.bind(this));

c('Arbiter').subscribe
(c('ChannelConstants').getArbiterType('friend_requests_seen'),
function(j,k){return this.setCount(0);}.bind(this));},



_updateCount:function i(j){
var k=this._count!==j;
this._count=j;
if(k)
this.inform('countUpdated',j);},



_addRequest:function i(j){
if(!j)
return;
var k=

j.obj,l=k.from,m=k.suggester,

n=this._requestList[l];
if(!n)
this.setCount(this._count+1);


var o=n?n.type:null,
p=o===19&&!m;

this.inform('addRequest',{shouldReplace:p,previousType:o});},


_addNotification:function i(j){
if(!j||j.obj.notif_type!=='friend_confirmed')
return;

this.inform('addNotification');},


_removeOldRequest:function i(j){
if(!j)
return;

var k=this._requestList[j.obj.from];
if(!k)
return;

this.inform('removeOldRequest',k);}});



f.exports=h;}),null);

/** js/jewel/RequestsJewelController.js */





__d('RequestsJewelController',['invariant','Promise','Arbiter','AsyncRequest','AsyncSignal','CSS','DOM','DOMQuery','Event','FriendRequestIHEventLogger','JewelQPLogging','MarauderLogger','Parent','PymkFunnelLogger','RequestsJewelStore','ScrollableArea','ge','getElementPosition','getViewportDimensions','requireWeak','throttle'],(function a(b,c,d,e,f,g,h){






























var i=null;
c('requireWeak')
('FriendBrowserCheckboxController',
function(o){return i=o;});


var j=31,
k=600,
l=30,
m=160;n.
















getInstance=function(){'use strict';
return this.$RequestsJewelController_instance;};
n.


updateFromDOM=function(){'use strict';
var o=this.getInstance();
if(o)
o.fromDom();};

n.


setupScroll=function(){'use strict';
var o=this.getInstance();
if(o)
o.setupScroll();};

n.


setInitialHeight=function(){'use strict';
var o=this.getInstance();
if(o)
o.updateHeight();};

n.


maybeLoadJewel=function(){'use strict';
var o=this.getInstance();
if(o)
o.maybeLoadJewel();};

n.

isOpen=function(){'use strict';
var o=this.getInstance();
if(o)
return o.$RequestsJewelController_isOpen();

return false;};
n.

create=
function(o,
p,
q){
'use strict';

!this.$RequestsJewelController_instance||h(0,
'RequestsJewelController can\'t have more than one instance.');

return this.$RequestsJewelController_instance=new n(o,p,q);};


function n
(o,
p,
q){
'use strict';
this.$RequestsJewelController_isOpen=p;
this.$RequestsJewelController_folder=q;
this.$RequestsJewelController_flyout=o;
this.$RequestsJewelController_lastPymkSeen=-1;
this.$RequestsJewelController_lastRequestSeen=-1;
this.$RequestsJewelController_contentRequest=c('Promise').resolve(true);

this.$RequestsJewelController_throttledLoadLogRequests=c('throttle').acrossTransitionsWithBlocking
(function(){return this.$RequestsJewelController_loadRequests({log_impressions:true});}.bind(this),
5000);


c('RequestsJewelStore').subscribe('addRequest',this.$RequestsJewelController_addRequest.bind(this));
c('RequestsJewelStore').subscribe('addNotification',function(){return this.$RequestsJewelController_addNotif();}.bind(this));
c('RequestsJewelStore').subscribe
('removeOldRequest',
this.$RequestsJewelController_removeOldRequest.bind(this));

c('RequestsJewelStore').setupListeners();

this.setupScroll();
this.$RequestsJewelController_setupSubmit();
this.$RequestsJewelController_setupResize();
this.$RequestsJewelController_setupPYMK();}
n.prototype.

fromDom=function(){'use strict';
var o={};
c('DOMQuery').scry(this.$RequestsJewelController_flyout,'li.objectListItem').
forEach(function(p){
var q=p.getAttribute('id');
if(q){
var r=this.$RequestsJewelController_parseID(q);
if(r&&r.requester)
o[r.requester]=r;}}.


bind(this));
c('RequestsJewelStore').addFriendRequests(o);
this.$RequestsJewelController_conditionShowEmptyMessage();};
n.prototype.

maybeLoadJewel=function(){'use strict';
if(this.$RequestsJewelController_unhandledRequest){
this.$RequestsJewelController_unhandledRequest=false;
this.openHandler();}};

n.prototype.

updateHeight=function(){'use strict';
var o=this.$RequestsJewelController_getScrollable();
if(o)
o.style.height=this.$RequestsJewelController_calculateHeight()+'px';};

n.prototype.

markSeen=function(){'use strict';

this.$RequestsJewelController_contentRequest.done(function(){
var o=c('DOMQuery').scry(this.$RequestsJewelController_flyout,'li[id]')[0];

new (c('AsyncSignal'))('/ajax/gigaboxx/endpoint/UpdateLastSeenTime.php',
{folder:this.$RequestsJewelController_folder,
first_item:o.getAttribute('id')}).
send();}.
bind(this));};
n.prototype.

openHandler=function(){'use strict';
c('Arbiter').inform('requestsJewel/opened');
var o=c('ge')('fbRequestsJewelLoading'),
p=this.$RequestsJewelController_getScrollable();


if(!o&&!p){
this.$RequestsJewelController_unhandledRequest=true;}else
if(o){


this.$RequestsJewelController_throttledLoadLogRequests();}else{

var q=c('RequestsJewelStore').getRequestListKeys();
if(q.length>0)
new (c('AsyncRequest'))().
setAllowCrossPageTransition(true).
setURI('/friends/requests/log_impressions').
setData
({ids:q.join(','),
ref:'jewel'}).
send();}


p&&c('ScrollableArea').poke(p);
c('JewelQPLogging').onJewelOpened();};
n.prototype.

closeHandler=function(){'use strict';
c('Arbiter').inform('requestsJewel/closed');
c('DOMQuery').scry(this.$RequestsJewelController_flyout,'li.jewelItemNew').forEach(function(o){
c('CSS').removeClass(o,'jewelItemNew');});};

n.prototype.

setupScroll=function(){'use strict';

var o=this.$RequestsJewelController_getScrollable();
if(o){
this.$RequestsJewelController_scrollableWrap=this.$RequestsJewelController_getScrollableWrap();
this.$RequestsJewelController_lastLinkPosition=0;

c('ScrollableArea').getInstance(o).subscribe
('scroll',
this.$RequestsJewelController_handleScroll.bind(this));


this.$RequestsJewelController_recordPymkImpression();
this.$RequestsJewelController_recordFriendRequestImpression();}};

n.prototype.

$RequestsJewelController_setupSubmit=function(){'use strict';



c('Event').listen(this.$RequestsJewelController_flyout,'submit',function(o){
var p=c('Parent').byClass(o.getTarget(),'objectListItem');
if(p){
c('CSS').removeClass(p,'jewelItemNew');
c('CSS').addClass(p,'jewelItemResponded');}});};


n.prototype.

$RequestsJewelController_setupResize=function(){'use strict';

c('Event').listen(window,'resize',c('throttle').acrossTransitions(function(){
this.updateHeight();}.
bind(this)));};
n.prototype.

$RequestsJewelController_setupPYMK=function(){'use strict';

c('Arbiter').subscribe('pymk-x-out',function(o,p){var q=p.location;
if(q==='pymk_jewel_first_page'||q==='pymk_jewel')
this.$RequestsJewelController_recordPymkImpression();}.

bind(this));};
n.prototype.

$RequestsJewelController_convertIDToInt=function(o){'use strict';
var p=parseInt(o,10);
return !isNaN(p)?p:null;};
n.prototype.






$RequestsJewelController_parseID=function(o){'use strict';
var p=o.match(/^(\d+)_(\d+)/);
if(!p)
return null;


return {requester:this.$RequestsJewelController_convertIDToInt(p[1]),
type:this.$RequestsJewelController_convertIDToInt(p[2])};};

n.prototype.

$RequestsJewelController_makeID=function(o,p){'use strict';
if(o==null||p==null)
return null;

return o+'_'+p;};
n.prototype.

$RequestsJewelController_getScrollable=function(){'use strict';
return c('DOMQuery').scry(this.$RequestsJewelController_flyout,'.uiScrollableArea')[0];};
n.prototype.

$RequestsJewelController_getScrollableWrap=function(){'use strict';
return c('DOMQuery').scry(this.$RequestsJewelController_flyout,'.uiScrollableAreaWrap')[0];};
n.prototype.

$RequestsJewelController_handleScroll=function(){'use strict';


var o=c('DOMQuery').scry(this.$RequestsJewelController_scrollableWrap,'.uiMorePager').pop();

if(o){


var p=c('getElementPosition')(o).y;
if(p>0)
c('CSS').addClass(this.$RequestsJewelController_getScrollable(),'contentAfter');


var q=c('DOMQuery').find(o,'a');
if(!q)
return;


var r=c('getElementPosition')(q).y;
if(r===this.$RequestsJewelController_lastLinkPosition)
return;


var s=c('getElementPosition')(this.$RequestsJewelController_scrollableWrap),
t=s.y+s.height;
if(r-300<t&&r>0){
this.$RequestsJewelController_lastLinkPosition=r;


var u=q.getAttribute('ajaxify');
if(u){
new (c('AsyncRequest'))(u).
setRelativeTo(q).
setStatusElement(c('Parent').byClass(q,'stat_elem')).
send();}else
if(i)
i.getInstance('jewel').showMore();}}




this.$RequestsJewelController_recordPymkImpression();
this.$RequestsJewelController_recordFriendRequestImpression();};
n.prototype.

$RequestsJewelController_recordPymkImpression=function(){'use strict';
if(!this.$RequestsJewelController_scrollableWrap)
return;


var o=c('getElementPosition')(this.$RequestsJewelController_scrollableWrap),
p=o.y+o.height,

q=c('DOMQuery').scry
(this.$RequestsJewelController_flyout,
'li.friendBrowserListUnit'),

r=q.length-1;
while(r>this.$RequestsJewelController_lastPymkSeen){
var s=c('getElementPosition')(q[r]),
t=s.y,
u=t+s.height;

if(t>0&&u<=p)
break;

r-=1;}

var v=r;

while(r>this.$RequestsJewelController_lastPymkSeen){
var w=c('DOMQuery').find(q[r],'input.friendBrowserID'),
x=parseInt(w.value,10),
y=
parseInt(q[r].getAttribute('data-signature'),10);

c('PymkFunnelLogger').logImpression
(x,
y,
'pymk_jewel');


r--;}


this.$RequestsJewelController_lastPymkSeen=Math.max(this.$RequestsJewelController_lastPymkSeen,v);};
n.prototype.

$RequestsJewelController_recordFriendRequestImpression=function(){'use strict';
if(!this.$RequestsJewelController_scrollableWrap)
return;


var o=c('getElementPosition')(this.$RequestsJewelController_scrollableWrap),
p=o.y+o.height,

q=c('DOMQuery').scry
(this.$RequestsJewelController_flyout,
'li.objectListItem'),


r=q.length-1;
while(r>this.$RequestsJewelController_lastRequestSeen){
var s=c('getElementPosition')(q[r]),
t=s.y,
u=t+s.height;

if(t>0&&u<=p)
break;

r-=1;}


var v=r;
while(r>this.$RequestsJewelController_lastRequestSeen){
var w=q[r].getAttribute('id');
w=w.substring(0,w.length-6);
c('MarauderLogger').log('request_seen','friend_request_waterfall',
{request_id:w,
request_location:'requests_jewel'});

c('FriendRequestIHEventLogger').logImpression(w);
r-=1;}


this.$RequestsJewelController_lastRequestSeen=Math.max(this.$RequestsJewelController_lastRequestSeen,v);};
n.prototype.

$RequestsJewelController_loadRequests=function(){var o=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];'use strict';
this.$RequestsJewelController_contentRequest=new (c('Promise'))(function(p,q){
var r=!c('ge')('fbRequestsJewelLoading');
new (c('AsyncRequest'))().
setURI('/ajax/requests/loader/').
setData(babelHelpers['extends']({},o,{reloadcontent:r})).
setFinallyHandler(function(s){
if(!s.getError()){
p(true);}else 

q();}).


send();});};

n.prototype.

$RequestsJewelController_addNotif=function(){'use strict';
if(this.$RequestsJewelController_isOpen())
return;

this.$RequestsJewelController_loadRequests();};
n.prototype.

$RequestsJewelController_addRequest=
function(o,p){

var q=p.shouldReplace,r=p.previousType;'use strict';


if(!q&&(r||this.$RequestsJewelController_isOpen()))
return;

this.$RequestsJewelController_loadRequests();};
n.prototype.

$RequestsJewelController_removeOldRequest=function(o,p){var q=p.requester,r=p.type;'use strict';



if(this.$RequestsJewelController_isOpen()||c('ge')('fbRequestsJewelLoading')!=null)
return;


var s=this.$RequestsJewelController_makeID(q,r),
t=s&&c('ge')(s);
if(t){
if(c('CSS').hasClass(t,'jewelItemNew'))
c('RequestsJewelStore').decrementCount();


if(!c('CSS').hasClass(t,'jewelItemResponded')){


c('DOM').remove(t);
c('RequestsJewelStore').removeRequest(q);
this.$RequestsJewelController_conditionShowEmptyMessage();}}};


n.prototype.

$RequestsJewelController_conditionShowEmptyMessage=function(){'use strict';

c('DOMQuery').scry(this.$RequestsJewelController_flyout,'li.empty').forEach(function(o){
c('CSS').conditionShow(o,c('RequestsJewelStore').getRequestCount()<=0);});};

n.prototype.

$RequestsJewelController_calculateHeight=function(){'use strict';
return Math.min
(Math.max
(c('getViewportDimensions')().height-m,
l),

k)+
j;};
n.$RequestsJewelController_instance=null;


f.exports=n;}),null);

/** js/platform/games/syncRequests/SyncRequestNotificationBeeperItemContents.react.js */





__d('SyncRequestNotificationBeeperItemContents.react',['cx','Animation','Image.react','ImageBlock.react','NotificationBeeperItemCloseButton.react','NotificationUserActions','React','ReactDOM','SyncRequest.react','SyncRequestStatusEnum'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits













(k,c('React').Component);j=i&&i.prototype;function k(){var l,m;'use strict';for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=j.constructor).call.apply(l,[this].concat(o)),this.
$SyncRequestNotificationBeeperItemContents_markAsRead=function(){
c('NotificationUserActions').markNotificationsAsRead
([this.props.beep.notificationID]);

this.props.onHide();}.
bind(this),this.

$SyncRequestNotificationBeeperItemContents_onClose=function(){
this.$SyncRequestNotificationBeeperItemContents_markAsRead();
this.props.onHide();}.
bind(this),this.




$SyncRequestNotificationBeeperItemContents_doFlash=function(){
new (c('Animation'))(c('ReactDOM').findDOMNode(this.refs.inner)).
from('opacity','0').
to('opacity','1').
duration(200).
go();}.
bind(this),this.





















onRequestStatusUpdate=function(q,r){
if(q!=c('SyncRequestStatusEnum').PENDING&&
r==c('SyncRequestStatusEnum').PENDING)
this.props.onReadyToHide(this.props.beep.notificationID);}.

bind(this),m;}k.prototype.componentDidMount=function(){'use strict';if(this.props.beep.rendererData.status!=c('SyncRequestStatusEnum').PENDING)this.props.onReadyToHide(this.props.beep.notificationID);};k.prototype.componentDidUpdate=function(l){'use strict';if(this.props.beep.rendererData.status!=c('SyncRequestStatusEnum').PENDING&&l.beep.rendererData.status==c('SyncRequestStatusEnum').PENDING)this.props.onReadyToHide(this.props.beep.notificationID);};k.prototype.




render=function(){'use strict';
var l=this.props.beep,
m=l.rendererData;

return (c('React').createElement('div',{ref:'inner',className:this.props.className},
c('React').createElement(c('NotificationBeeperItemCloseButton.react'),{onClick:this.$SyncRequestNotificationBeeperItemContents_onClose}),
c('React').createElement(c('ImageBlock.react'),{className:"_3soj"},
c('React').createElement(c('Image.react'),
{src:l.actors[0].profile_picture.uri,
className:"_3sok"}),

c('React').createElement('div',{className:"_3sol"},
c('React').createElement(c('SyncRequest.react'),
{app:m.app,
creationTime:m.creation_time,
requestId:m.id.toString(),
receiver:m.receiver,
sender:m.sender,
status:m.status,
timeout:m.timeout,
timeRemaining:m.time_remaining,
viewerId:m.receiver.id,
onStatusUpdate:this.onRequestStatusUpdate})))));};








f.exports=k;}),null);

/** js/presence/LiveMessageReceiver.js */




__d('LiveMessageReceiver',['Arbiter','ChannelConstants','emptyFunction','shield'],(function a(b,c,d,e,f,g){










































function h(i){
this.eventName=i;
this.subs=null;
this.handler=c('emptyFunction');
this.shutdownHandler=null;

this.registered=false;



this.appId=1;}


Object.assign(h,
{getAppMessageType:function i(j,k){
return 'live_message/'+j+':'+k;},








route:function i(j){
var k=function l(m){
var n=h.getAppMessageType
(j.app_id,
j.event_name);

c('Arbiter').inform
(n,
m,
c('Arbiter').BEHAVIOR_PERSISTENT);};


k(j.response);}});



Object.assign(h.prototype,
{setAppId:function i(j){
this.appId=j;
return this;},










setHandler:function i(j){
this.handler=j;
this._dirty();
return this;},


setRestartHandler:c('emptyFunction'),









setShutdownHandler:function i(j){
this.shutdownHandler=c('shield')(j);
this._dirty();
return this;},


_dirty:function i(){

if(this.registered){
this.unregister();
this.register();}},






register:function i(){
var j=function(l,m){
return this.handler(m);}.
bind(this),

k=h.getAppMessageType
(this.appId,
this.eventName);


this.subs={};
this.subs.main=c('Arbiter').subscribe(k,j);
if(this.shutdownHandler)
this.subs.shut=c('Arbiter').subscribe
(c('ChannelConstants').ON_SHUTDOWN,
this.shutdownHandler);



this.registered=true;
return this;},






unregister:function i(){
if(!this.subs)
return this;

for(var j in this.subs)
if(this.subs[j])
this.subs[j].unsubscribe();


this.subs=null;
this.registered=false;
return this;}});



f.exports=h;}),null);

/** js/presence/initLiveMessageReceiver.js */




__d('initLiveMessageReceiver',['Arbiter','ChannelConstants','LiveMessageReceiver'],(function a(b,c,d,e,f,g){





c('Arbiter').subscribe
(c('ChannelConstants').getArbiterType('app_msg'),
function(h,i){
c('LiveMessageReceiver').route(i.obj);});}),
null);
