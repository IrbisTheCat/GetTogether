if (self.CavalryLogger) { CavalryLogger.start_js(["iL2mv"]); }

/** js/reactions/UFIReactionsStandalone.react.js */






__d('UFIReactionsStandalone.react',['React','UFIDispatcher','UFIDispatcherContext.react','UFIFeedbackContext.react','UFIReactionsLinkImpl.react','UFIReactionStore'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits








(j,c('React').Component);i=h&&h.prototype;j.prototype.



componentWillMount=function(){
this.$UFIReactionsStandalone_dispatcher=new (c('UFIDispatcher'))();
this.$UFIReactionsStandalone_stores=


{UFIReactionStore:new (c('UFIReactionStore'))(this.$UFIReactionsStandalone_dispatcher)};};

j.prototype.

componentWillUnmount=function(){
this.$UFIReactionsStandalone_stores={};
this.$UFIReactionsStandalone_dispatcher=null;};
j.prototype.

render=function(){

return (c('React').createElement(c('UFIDispatcherContext.react'),
{dispatcher:this.$UFIReactionsStandalone_dispatcher,
stores:this.$UFIReactionsStandalone_stores},
c('React').createElement(c('UFIFeedbackContext.react'),
{contextArgs:this.props.contextArgs,
render:function k(l,m){

return (c('React').createElement(c('UFIReactionsLinkImpl.react'),
{contextArgs:l,
nuxConfig:l.reactionsNuxConfig,
reaction:m.viewerreaction,
supportedReactions:m.supportedreactions,
ftIdentifier:l.ftentidentifier}));}})));};






function j(){h.apply(this,arguments);}


f.exports=j;}),null);

/** js/video/channel_view/VideoChannelEndScreen.js */





__d('VideoChannelEndScreen',['cx','invariant','CSS','DOM','Event','React','ReactDOM','VideoChannelProgressCircle.react','VideoChannelReplayImage.react'],(function a(b,c,d,e,f,g,h,i){


















function j(k,l){'use strict';
this.$VideoChannelEndScreen_progressCircle=c('DOM').create
('div',
{className:"_1szy"});

this.$VideoChannelEndScreen_progressCircleContainer=c('DOM').create
('div',
{className:"_1szz _2se8"},

this.$VideoChannelEndScreen_progressCircle);

this.$VideoChannelEndScreen_onEnd=l;

c('Event').listen(this.$VideoChannelEndScreen_progressCircle,'click',k);}
j.prototype.

showEndScreen=
function(k,
l,
m){
'use strict';
k||i(0,'Video Node is a required parameter');
c('CSS').addClass
(k,
"_1s-2");

k.appendChild(this.$VideoChannelEndScreen_progressCircleContainer);

c('ReactDOM').render
(c('React').createElement(c('VideoChannelProgressCircle.react'),
{makeProgress:l,
onProgressDone:m,
timeoutSec:j.TIMEOUT},

c('React').createElement(c('VideoChannelReplayImage.react'),null)),

this.$VideoChannelEndScreen_progressCircle);};

j.prototype.

endCountdown=function(k){'use strict';
k||i(0,'Video Node is a required parameter');
this.$VideoChannelEndScreen_onEnd&&this.$VideoChannelEndScreen_onEnd();
c('CSS').removeClass
(k,
"_1s-2");

c('ReactDOM').unmountComponentAtNode(this.$VideoChannelEndScreen_progressCircle);};
j.prototype.

getContainer=function(){'use strict';
return this.$VideoChannelEndScreen_progressCircleContainer;};
j.TIMEOUT=3;


f.exports=j;}),null);

/** js/video/player/commercial_break/CommercialBreakChannelThumbnailOverlay.react.js */






__d('CommercialBreakChannelThumbnailOverlay.react',['cx','fbt','React'],(function a(b,c,d,e,f,g,h,i){var j,k;j=babelHelpers.inherits











(l,
c('React').Component);k=j&&j.prototype;

function l(m){'use strict';
k.constructor.call(this,m);}
l.prototype.

render=function(){'use strict';
var m=this.props.videoPlayerController&&
this.props.videoPlayerController.getOption
('VideoWithInstreamVideo',
'controller'),

n=
m&&m.getConfig();
if(!n||n.isBroadcast)
return null;


return (c('React').createElement('div',null,
c('React').createElement('div',{className:"_27p6"},i._(["Ad break in progress","45e50e1d68110930c1bb15e960fe7157"]))));};








f.exports=l;}),null);

/** js/video/channel_view/VideoChannelUpNextUnit.react.js */





__d('VideoChannelUpNextUnit.react',['csx','cx','DOM','Link.react','React','getElementText'],(function a(b,c,d,e,f,g,h,i){var j,k,









l=c('React').PropTypes,

m=320;j=babelHelpers.inherits

(n,c('React').PureComponent);k=j&&j.prototype;n.prototype.












render=function(){'use strict';



var o=this.props.thumbnail,
p=c('DOM').find
(o,
"._56dc"),

q=c('DOM').find
(o,
"._38a4"),

r=p.style.backgroundImage,
s=c('getElementText')(q),

t={backgroundImage:r},

u=(this.props.dialogWidth-m)/2,
v={marginLeft:u+'px'};


return (c('React').createElement(c('Link.react'),
{className:"_4fxr",
href:'#',
onClick:this.props.onClick,
style:v},
c('React').createElement('div',
{className:"_4fxs",
style:t}),

c('React').createElement('div',{className:"_4fxt"},
c('React').createElement('div',
{className:"_4fxu"},'Up Next:'),


c('React').createElement('div',
{className:"_4fxw"},
s))));};




function n(){'use strict';j.apply(this,arguments);}n.propTypes={dialogWidth:l.number.isRequired,onClick:l.func.isRequired,thumbnail:l.object.isRequired};


f.exports=n;}),null);

/** js/video/channel_view/VideoStripThumbnailTitleBar.react.js */





__d('VideoStripThumbnailTitleBar.react',['cx','React','TabBar.react','TabBarItem.react'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits


















(k,c('React').Component);j=i&&i.prototype;



function k(l,m){'use strict';
j.constructor.call(this,l,m);this.






$VideoStripThumbnailTitleBar_handleClick=function(o){
this.setState
({activeChannelID:o});

if(this.props.onChannelSwitch)
this.props.onChannelSwitch(o);}.

bind(this);var n=this.props.channelPivots[0].channelID;this.state={activeChannelID:n};}k.prototype.

$VideoStripThumbnailTitleBar_getTabBarItems=function(){'use strict';
var l=[];
this.props.channelPivots.forEach
(function(m){
var n=m.channelID,
o=m.channelTitle;
l.push
(c('React').createElement(c('TabBarItem.react'),
{key:n,
className:"_31j5"+


(this.state.activeChannelID===n?' '+"_31j6":'')+

(this.state.activeChannelID!==n?' '+"_y6i":'')},

o));}.


bind(this));


return l;};
k.prototype.

render=function(){'use strict';
var l=this.$VideoStripThumbnailTitleBar_getTabBarItems();

return (c('React').createElement(c('TabBar.react'),
{activeTabKey:this.state.activeChannelID,
onTabClick:this.$VideoStripThumbnailTitleBar_handleClick},
l));};





f.exports=k;}),null);

/** www/__virtual__/x/XVideoChannelViewDetailsAsyncController.js */



__d("XVideoChannelViewDetailsAsyncController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/video\/channel\/view\/details\/async\/{video_id}\/",{ad_impression_token:{type:"String"},video_id:{type:"Int",required:true},caller:{type:"Enum",defaultValue:"channel_view_from_unknown",enumType:1}});}),

null);

/** js/video/channel_view/VideoChannelInteraction.js */







__d('VideoChannelInteraction',['csx','cx','fbt','invariant','Animation','Arbiter','AsyncRequest','CommercialBreakChannelThumbnailOverlay.react','CSS','DOM','Event','FullScreen','Keys','Locale','Map','PageTransitions','PageTransitionPriorities','Parent','React','ReactDOM','StreamingReactionsTrayEvents','Style','SubscriptionsHandler','UFIRootRegistry','UFIUIEvents','URI','VideoChannelController','VideoChannelEndScreen','VideoChannelLogger','VideoChannelLoggerEvents','VideoChannelLoggerEventTargets','VideoChannelLoggerFields','VideoChannelUpNextUnit.react','VideoChannelViewVariables','VideoPermalinkURI','VideoPlayerAbortLoadingExperiment','VideoPlayerController','VideoPlayerLoggerEvent','VideoPlayerLoggerSource','VideoPlayerReason','VideoStripThumbnailCarousel.react','VideoStripThumbnailTitleBar.react','VideoWatchAndScrollController','XVideoChannelViewDetailsAsyncController','setImmediate'],(function a(b,c,d,e,f,g,h,i,j,k){























































var l=5000,

m=175,

n=45,
o=80,


p=24,


q=35,

r=c('VideoChannelViewVariables').thumbnailRedesign,
s=c('VideoChannelViewVariables').dynamicAspectRatios,
t=c('VideoChannelViewVariables').preopenUFI,
u=c('VideoChannelViewVariables').channelRedesign,
v=c('VideoChannelViewVariables').channelPivots,

w=48,

x={},
y=16/9,
z=y;























































function aa
(ba){
'use strict';this.


































































































































$VideoChannelInteraction_onPageTransition=function(ca){
if(ca.getQueryData().ref!=='channel')
return false;


var da=c('VideoPermalinkURI').parse(ca);
if(!da)
return false;


var ea=null;
for(var fa=this.$VideoChannelInteraction_videoControllerToStoryMap.keys(),ga=Array.isArray(fa),ha=0,fa=ga?fa:fa[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var ia;if(ga){if(ha>=fa.length)break;ia=fa[ha++];}else{ha=fa.next();if(ha.done)break;ia=ha.value;}var ja=ia;
if(ja.getVideoID()===da.video_id){
ea=ja;
break;}}



if(!ea)
return false;

var ka=this.getStoryForVideoController(ea);
if(!ka)
return false;

var la=this.getStoryIndex(ka);
if(la===-1)
return false;


this.updateActiveStory(la,c('VideoPlayerReason').USER);

c('PageTransitions').transitionComplete();
return true;}.
bind(this);this.$VideoChannelInteraction_videoChannel=ba;this.$VideoChannelInteraction_black=false;this.$VideoChannelInteraction_relativeIndex=0;this.$VideoChannelInteraction_relativeIndexMap=new (c('Map'))();this.$VideoChannelInteraction_indexOffset=0;this.$VideoChannelInteraction_indexOffsetMap=new (c('Map'))();this.$VideoChannelInteraction_thumbnails=[];this.$VideoChannelInteraction_thumbnailsMap=new (c('Map'))();this.$VideoChannelInteraction_pageNumberMap=new (c('Map'))();this.$VideoChannelInteraction_showElementTimer=null;this.$VideoChannelInteraction_pendingElements=[];this.$VideoChannelInteraction_isVideoStripShown=false;this.$VideoChannelInteraction_upNextShown=false;this.$VideoChannelInteraction_videoControllerToStoryMap=new (c('Map'))();this.$VideoChannelInteraction_storyElementIDToVideoControllerMap=new (c('Map'))();this.$VideoChannelInteraction_videoIDToFeedbackMap=new (c('Map'))();this.$VideoChannelInteraction_videoIDToReactionsInputBarMap=new (c('Map'))();this.$VideoChannelInteraction_inShareMode=false;this.$VideoChannelInteraction_isRightKeyDown=false;this.$VideoChannelInteraction_isLeftKeyDown=false;this.$VideoChannelInteraction_isCommenting=false;this.$VideoChannelInteraction_commentHasAttachment=false;this.$VideoChannelInteraction_channelPivots=[];this.$VideoChannelInteraction_subscriptions=new (c('SubscriptionsHandler'))();this.$VideoChannelInteraction_nextArrow=c('DOM').create('a',{href:'#',className:"_5yhq",'aria-label':j._(["Next Video","15f9b6b9ddd2de18e9c15f09ca3deff0"])});this.$VideoChannelInteraction_previousArrow=c('DOM').create('a',{href:'#',className:"_5yhr",'aria-label':j._(["Previous Video","06639174c6ae2fe7fd4c5caa60d58431"])});this.$VideoChannelInteraction_endScreen=new (c('VideoChannelEndScreen'))(function(){this.$VideoChannelInteraction_endCountdown();this.getVideoController().play(c('VideoPlayerReason').USER);}.bind(this));this.$VideoChannelInteraction_setupContainers();this.$VideoChannelInteraction_subscriptions.addSubscriptions(c('Event').listen(document,'mousemove',this.$VideoChannelInteraction_onMouseMove.bind(this)),c('Event').listen(document,'click',this.$VideoChannelInteraction_onMouseMove.bind(this)),c('Event').listen(document,'keydown',this.$VideoChannelInteraction_onKeyDown.bind(this)),c('Event').listen(document,'keyup',this.$VideoChannelInteraction_onKeyUp.bind(this)),c('Event').listen(this.$VideoChannelInteraction_nextArrow,'click',this.$VideoChannelInteraction_onNextArrowClick.bind(this)),c('Event').listen(this.$VideoChannelInteraction_previousArrow,'click',this.$VideoChannelInteraction_onPreviousArrowClick.bind(this)),c('Arbiter').subscribe(c('UFIUIEvents').AutoplayLiveComments,function(ca,da){var ea=da.form,fa=v?this.$VideoChannelInteraction_getStoriesForPlayingChannel():this.$VideoChannelInteraction_storyContainer.children,ga=c('DOM').scry(fa[this.getCurrentAbsoluteIndex()],"._sa_"),ha=ga[0],ia=c('DOM').scry(ea,".fbPhotosSnowliftFeedback"),ja=ia[0];if(!ja||!ha||!ea.contains(ha))return;new (c('Animation'))(ja).to('scrollTop',ha.offsetTop).ease(c('Animation').ease.end).duration(250).go();}.bind(this)),c('Arbiter').subscribe('comment_content_change',function(ca,da){if(da.text!==undefined){this.$VideoChannelInteraction_isCommenting=da.text!=='';}else if(da.addingAttachment!==undefined)this.$VideoChannelInteraction_commentHasAttachment=da.addingAttachment;this.$VideoChannelInteraction_updateEndScreen();}.bind(this)),c('Arbiter').subscribe('video_upload_cancel',function(){this.$VideoChannelInteraction_commentHasAttachment=false;this.$VideoChannelInteraction_updateEndScreen();}.bind(this)),c('FullScreen').subscribe('changed',function(){this.$VideoChannelInteraction_updateEndScreen();}.bind(this)),c('Arbiter').subscribe('VideoChannelView/sidePaneToggle',function(){this.$VideoChannelInteraction_toggleSidePane();}.bind(this)));if(ba.isPageTransitionEligible())c('PageTransitions').registerHandler(this.$VideoChannelInteraction_onPageTransition.bind(this),c('PageTransitionPriorities').DEFAULT+6);this.$VideoChannelInteraction_positionStoryContainer();this.$VideoChannelInteraction_setupDialogListeners();}aa.prototype.

$VideoChannelInteraction_setupDialogListeners=function(){'use strict';
this.$VideoChannelInteraction_dialogCounter=0;
this.$VideoChannelInteraction_wasPlaying=false;

this.$VideoChannelInteraction_subscriptions.addSubscriptions
(c('Arbiter').subscribe('layer_shown',function(ba,ca){
var da=this.getVideoController();
if(da.getOption('VideoWithLiveBroadcast','isLive'))
return;

if(ca.type==='DialogX'||ca.type==='PhotoSnowlift'){
this.$VideoChannelInteraction_dialogCounter=this.$VideoChannelInteraction_dialogCounter+1;
if(this.$VideoChannelInteraction_dialogCounter>0)
if(da.isState('playing')){
da.pause(c('VideoPlayerReason').PAGE_VISIBILITY);
this.$VideoChannelInteraction_wasPlaying=true;}


this.$VideoChannelInteraction_updateEndScreen();}}.

bind(this)),
c('Arbiter').subscribe('layer_hidden',function(ba,ca){
var da=this.getVideoController();
if(da.getOption('VideoWithLiveBroadcast','isLive'))
return;

if(ca.type==='DialogX'||ca.type==='PhotoSnowlift'){
this.$VideoChannelInteraction_dialogCounter=this.$VideoChannelInteraction_dialogCounter-1;
if(this.$VideoChannelInteraction_dialogCounter===0&&this.$VideoChannelInteraction_wasPlaying){
da.play(c('VideoPlayerReason').PAGE_VISIBILITY);
this.$VideoChannelInteraction_wasPlaying=false;}

this.$VideoChannelInteraction_updateEndScreen();}}.

bind(this)));};

aa.prototype.

onChannelClose=function(){'use strict';
this.$VideoChannelInteraction_firstVideoNode&&
this.$VideoChannelInteraction_showCorrectControls(this.$VideoChannelInteraction_firstVideoNode,false);
c('CSS').hide(this.$VideoChannelInteraction_previousArrow);
c('CSS').hide(this.$VideoChannelInteraction_nextArrow);
this.$VideoChannelInteraction_subscriptions&&this.$VideoChannelInteraction_subscriptions.release();
this.$VideoChannelInteraction_sidePaneAsyncRequest&&this.$VideoChannelInteraction_sidePaneAsyncRequest.abandon();
clearTimeout(this.$VideoChannelInteraction_fadeOutTimeoutID);
this.$VideoChannelInteraction_endCountdown();
this.$VideoChannelInteraction_isCommenting=false;
this.$VideoChannelInteraction_commentHasAttachment=false;
c('UFIRootRegistry').cleanupSnowliftNodes();

if(this.$VideoChannelInteraction_videoChannel.isPageTransitionEligible())
c('PageTransitions').removeHandler
(this.$VideoChannelInteraction_onPageTransition,
c('PageTransitionPriorities').DEFAULT+6);


z=y;};
aa.prototype.

onWindowResize=function(){'use strict';
if(s&&!u)
this.$VideoChannelInteraction_applyAspectRatioSizing();

this.$VideoChannelInteraction_positionStoryContainer();
this.$VideoChannelInteraction_positionLiveReactionsInput();
this.$VideoChannelInteraction_renderVideoStripVideoContainer
(0);};

aa.prototype.

$VideoChannelInteraction_positionLiveReactionsInput=function(){'use strict';






if(this.$VideoChannelInteraction_aspectRatio&&this.$VideoChannelInteraction_liveReactionsInput)

if(!u){
var ba=
this.$VideoChannelInteraction_videoChannel.getVideoHeight()*this.$VideoChannelInteraction_aspectRatio,
ca=this.$VideoChannelInteraction_videoChannel.getVideoWidth(),
da=u?
ca:
ca-ba,
ea=da/2;
c('Style').set
(this.$VideoChannelInteraction_liveReactionsInput,
'width',
this.$VideoChannelInteraction_numReactions*n+
ea+
'px');

c('Style').set
(this.$VideoChannelInteraction_liveReactionsInput,
'margin-top',
o+'px');}};



aa.prototype.

$VideoChannelInteraction_positionStoryContainer=function(){'use strict';
var ba=this.$VideoChannelInteraction_storyContainer,

ca=false,

da=0;
if(u){
da=w;}else{

da=
(this.$VideoChannelInteraction_videoChannel.getAvailableWidth()-
this.$VideoChannelInteraction_videoChannel.getVideoWidth())/2;
da+=this.$VideoChannelInteraction_inDetailsMode?-1*m:0;}

c('Style').set
(ba,
c('Locale').isRTL()?'right':'left',
da+'px');


var ea=0;
if(u){
ea=w;}else 

ea=
(this.$VideoChannelInteraction_videoChannel.getAvailableHeight()-
this.$VideoChannelInteraction_videoChannel.getVideoHeight()-
(ca?
o:
0))/
2;

c('Style').set
(ba,
'top',
ea+'px');


var fa=0;
if(u){
if(this.$VideoChannelInteraction_inDetailsMode){
fa=
this.$VideoChannelInteraction_videoChannel.getAvailableWidth()-
2*m-
2*w;}else 

fa=this.$VideoChannelInteraction_videoChannel.getAvailableWidth()-2*w;

this.$VideoChannelInteraction_videoChannel.setVideoDimensions
(fa,
this.$VideoChannelInteraction_videoChannel.getVideoHeight(),
this.$VideoChannelInteraction_videoChannel.getExtraThumbnailHeight());}else 


fa=this.$VideoChannelInteraction_videoChannel.getVideoWidth();

c('Style').set
(ba,
'width',
fa+'px');

c('Style').set
(ba,
'height',
this.$VideoChannelInteraction_videoChannel.getVideoHeight()+'px');};

aa.prototype.

isCenterVideoActive=function(){'use strict';
if(v){
return this.$VideoChannelInteraction_getRelativeIndexForPlayingChannel()===0;}else 

return this.$VideoChannelInteraction_relativeIndex===0;};

aa.prototype.

getCurrentAbsoluteIndex=function(){'use strict';
if(v){
return this.$VideoChannelInteraction_getCurrentAbsoluteIndexForPlayingChannel();}else 

return this.$VideoChannelInteraction_relativeIndex+this.$VideoChannelInteraction_indexOffset;};

aa.prototype.

$VideoChannelInteraction_getRelativeIndexForChannel=function(ba){'use strict';
return this.$VideoChannelInteraction_relativeIndexMap.get(ba)||0;};
aa.prototype.

$VideoChannelInteraction_getRelativeIndexForActiveChannel=function(){'use strict';
return this.$VideoChannelInteraction_getRelativeIndexForChannel(this.$VideoChannelInteraction_activeChannelID);};
aa.prototype.

$VideoChannelInteraction_getRelativeIndexForPlayingChannel=function(){'use strict';
return this.$VideoChannelInteraction_getRelativeIndexForChannel(this.$VideoChannelInteraction_playingChannelID);};
aa.prototype.

$VideoChannelInteraction_getIndexOffsetForChannel=function(ba){'use strict';
return this.$VideoChannelInteraction_indexOffsetMap.get(ba)||0;};
aa.prototype.

$VideoChannelInteraction_getIndexOffsetForActiveChannel=function(){'use strict';
return this.$VideoChannelInteraction_getIndexOffsetForChannel(this.$VideoChannelInteraction_activeChannelID);};
aa.prototype.

$VideoChannelInteraction_getIndexOffsetForPlayingChannel=function(){'use strict';
return this.$VideoChannelInteraction_getIndexOffsetForChannel(this.$VideoChannelInteraction_playingChannelID);};
aa.prototype.

$VideoChannelInteraction_getCurrentAbsoluteIndexForActiveChannel=function(){'use strict';
return this.$VideoChannelInteraction_getRelativeIndexForActiveChannel()+
this.$VideoChannelInteraction_getIndexOffsetForActiveChannel();};
aa.prototype.

$VideoChannelInteraction_getCurrentAbsoluteIndexForPlayingChannel=function(){'use strict';
return this.$VideoChannelInteraction_getRelativeIndexForPlayingChannel()+
this.$VideoChannelInteraction_getIndexOffsetForPlayingChannel();};
aa.prototype.

getCurrentAbsoluteIndexForChannel=function(ba){'use strict';

if(this.$VideoChannelInteraction_relativeIndexMap.has(ba)||
this.$VideoChannelInteraction_indexOffsetMap.has(ba)){

return this.$VideoChannelInteraction_getRelativeIndexForChannel(ba)+
this.$VideoChannelInteraction_getIndexOffsetForChannel(ba);}else 

return -1;};

aa.prototype.

$VideoChannelInteraction_getAbsoluteIndex=function(ba){'use strict';
if(v){
return ba+this.$VideoChannelInteraction_getIndexOffsetForActiveChannel();}else 

return ba+this.$VideoChannelInteraction_indexOffset;};

aa.prototype.

$VideoChannelInteraction_getRelativeIndex=function(ba){'use strict';
return ba-this.$VideoChannelInteraction_indexOffset;};
aa.prototype.

$VideoChannelInteraction_getRelativeIndexFromAbsoluteIndex=
function(ba,
ca){
'use strict';
return ba-this.$VideoChannelInteraction_getIndexOffsetForChannel(ca);};
aa.prototype.

$VideoChannelInteraction_getDialog=function(){'use strict';
return this.$VideoChannelInteraction_videoChannel.getDialog();};
aa.prototype.

$VideoChannelInteraction_getDialogContent=function(){'use strict';
return this.$VideoChannelInteraction_videoChannel.getDialogContent();};
aa.


appendChannels=
function(ba){
'use strict';
var ca=aa.getInteraction();
if(!ca)
return;


ca.appendChannels
(ba);};

aa.prototype.

appendChannels=
function(ba){
'use strict';
var ca=JSON.parse(ba);
if(ca&&ca.length){
ca.forEach(function(ga){

if(this.$VideoChannelInteraction_videoChannel&&
ga.channelID&&
!this.$VideoChannelInteraction_videoChannel.getStoryFetcherMap().has(ga.channelID)){

this.$VideoChannelInteraction_videoChannel.setupStoryFetcherForChannel
(ga.channelID);

this.$VideoChannelInteraction_channelPivots.push(ga);}}.

bind(this));
var da={};
da[c('VideoChannelLoggerFields').EVENT]=
c('VideoChannelLoggerEvents').APPEND_CHANNEL_PIVOTS;
c('VideoChannelLogger').log(da);}


var ea=c('DOM').scry
(this.$VideoChannelInteraction_getDialog().getInnerContent(),
"._q_y"),


fa=c('DOM').create('div',
{className:"_q_y"});

c('ReactDOM').render
(c('React').createElement(c('VideoStripThumbnailTitleBar.react'),
{channelPivots:this.$VideoChannelInteraction_channelPivots,
onChannelSwitch:this.$VideoChannelInteraction_onChannelSwitch.bind(this)}),

fa);

c('DOM').replace(ea[0],fa);
this.$VideoChannelInteraction_renderVideoStripVideoContainer(0);};
aa.prototype.











setTitle=
function(ba,
ca,
da){
'use strict';
if(v){
this.$VideoChannelInteraction_channelPivots=JSON.parse(da);
if(this.$VideoChannelInteraction_channelPivots&&this.$VideoChannelInteraction_channelPivots.length>0){
this.$VideoChannelInteraction_activeChannelID=this.$VideoChannelInteraction_channelPivots[0].channelID;
this.$VideoChannelInteraction_playingChannelID=this.$VideoChannelInteraction_channelPivots[0].channelID;}}



if(!r)
if(v){
var ea=c('DOM').create('div',
{className:"_q_y"});

c('ReactDOM').render
(c('React').createElement(c('VideoStripThumbnailTitleBar.react'),
{channelPivots:this.$VideoChannelInteraction_channelPivots,
onChannelSwitch:this.$VideoChannelInteraction_onChannelSwitch.bind(this)}),

ea);

c('DOM').replace(this.$VideoChannelInteraction_titleContainer,ea);}else 

c('DOM').setContent(this.$VideoChannelInteraction_titleContainer,ba);



if(ca){var fa=


this.$VideoChannelInteraction_getWNSStoriesAndThumbnails(),ga=fa.currentStory,ha=fa.currentThumbnail;


ga||k(0,
'In order to setupInteractions, there must be a current story');


ha||k(0,
'In order to setupInteractions, there must be a current thumbnail');


this.setFirstStory
(ga,
ha,
true,
true);}};


aa.prototype.

$VideoChannelInteraction_applyOverlayOnActiveThumbnails=function(){'use strict';
var ba=this.$VideoChannelInteraction_thumbnailsMap.get(this.$VideoChannelInteraction_activeChannelID);
if(ba&&ba[0]){
var ca=
this.getCurrentAbsoluteIndexForChannel(this.$VideoChannelInteraction_activeChannelID)===-1&&
this.$VideoChannelInteraction_activeChannelID!==this.$VideoChannelInteraction_playingChannelID;
c('CSS').conditionClass
(ba[0],
"_4lyy",
ca);


for(var da=0;da<ba.length;da++){
var ea=
ba[da].dataset.storyId===this.$VideoChannelInteraction_currentStory.id&&
this.$VideoChannelInteraction_playingChannelID===this.$VideoChannelInteraction_activeChannelID,
fa=
this.$VideoChannelInteraction_playingChannelID!==this.$VideoChannelInteraction_activeChannelID&&
this.getCurrentAbsoluteIndexForChannel(this.$VideoChannelInteraction_activeChannelID)===da;
c('CSS').conditionClass
(ba[da],
"_57j4",
ea);


var ga=ba[da].dataset.storyId,
ha=
this.$VideoChannelInteraction_storyElementIDToVideoControllerMap.get(ga),
ia=0;
if(!ea&&ha){
var ja=ha.getCurrentTimePosition(),
ka=ha.getPlaybackDuration();
if(ja&&ka)
ia=Math.floor(ja*100/ka);}



var la=c('DOM').scry
(ba[da],
"._2r8f");

if(la&&la.length){
var ma=la[0];
if(ia&&!ea){
var na=ma.children[0];
if(na)
na.setAttribute
('style',
'width: '+ia+'%;');}



c('CSS').conditionShow
(ma,
ia&&!ea);}



if(da<ba.length-1)
c('CSS').conditionClass
(ba[da+1],
"_4lyy",
ea||fa);}}};




aa.prototype.

$VideoChannelInteraction_onChannelSwitch=function(ba){'use strict';
this.$VideoChannelInteraction_activeChannelID=ba;
this.$VideoChannelInteraction_logClick(c('VideoChannelLoggerEventTargets').WWW_CHANNEL_PIVOT);

var ca=this.$VideoChannelInteraction_getStoriesForActiveChannel().length,
da=this.$VideoChannelInteraction_getCurrentAbsoluteIndexForActiveChannel();
if(da>=ca-2&&this.$VideoChannelInteraction_videoChannel)
this.$VideoChannelInteraction_videoChannel.fetchStoriesForChannel
(ba,
function(ea,fa){
this.appendStories
(ea,
fa);}.

bind(this),
function(ea){
this.showThumbnailPlaceholders
(ea,
true);}.

bind(this));


this.$VideoChannelInteraction_renderVideoStripVideoContainer
(0);

this.$VideoChannelInteraction_applyOverlayOnActiveThumbnails();};
aa.prototype.


$VideoChannelInteraction_getWNSStoriesAndThumbnails=function(){'use strict';
var ba=this.$VideoChannelInteraction_videoChannel.getStoryFetcher(),ca=
ba.getPreloadedData(),da=ca.stories,ea=ca.thumbnails;
da=da||[];
ea=ea||[];

var fa=this.$VideoChannelInteraction_videoChannel.getWnsChannelVideoIndex();





if(fa===0)

return {currentStory:null,
currentThumbnail:null,
prependStories:[],
prependThumbnails:[],
appendStories:da,
appendThumbnails:ea};


fa--;


return {currentStory:da[fa],
currentThumbnail:ea[fa],
prependStories:da.slice(0,fa),
prependThumbnails:ea.slice(0,fa),
appendStories:da.slice(fa+1),
appendThumbnails:ea.slice(fa+1)};};

aa.prototype.

$VideoChannelInteraction_onStoryClick=function(ba){'use strict';
var ca={};
ca[c('VideoChannelLoggerFields').EVENT]=c('VideoChannelLoggerEvents').CLICK;
ca[c('VideoChannelLoggerFields').STORY_ID]=ba.getAttribute
('data-story-id');

if(v)
c('VideoChannelLogger').setChannel(ba.dataset.channelId);

c('VideoChannelLogger').log(ca);};
aa.prototype.

$VideoChannelInteraction_pauseOtherVideos=function(ba,ca){'use strict';
this.$VideoChannelInteraction_storyElementIDToVideoControllerMap.
forEach(function(da,ea,fa){

if(ea!==ba&&
da.isState('playing'))

da.pause(c('VideoPlayerReason').USER);});



c('VideoChannelLogger').setChannel(ca);};
aa.prototype.

$VideoChannelInteraction_onThumbnailClick=function(ba,ca){'use strict';
if(v){
var da=this.$VideoChannelInteraction_currentStory.id!==ca.id;

this.$VideoChannelInteraction_pauseOtherVideos(ca.id,ca.dataset.channelId);
this.$VideoChannelInteraction_playingChannelID=this.$VideoChannelInteraction_activeChannelID;

if(da){
c('CSS').removeClass
(this.$VideoChannelInteraction_currentStory,
"_1kfp");

this.updateActiveStory
(this.$VideoChannelInteraction_getAbsoluteIndex(ba),
c('VideoPlayerReason').USER,
da);}}else 



this.updateActiveStory
(this.$VideoChannelInteraction_getAbsoluteIndex(ba),
c('VideoPlayerReason').USER);};


aa.prototype.

$VideoChannelInteraction_onThumbnailMouseOver=function(ba){'use strict';
var ca=void 0,
da=void 0;
if(v){
ca=this.$VideoChannelInteraction_getCurrentAbsoluteIndexForActiveChannel(ba);
var ea=this.$VideoChannelInteraction_getStoriesForActiveChannel();
if(ea)
da=this.getVideoControllerForStory(ea[ca]);}else{


ca=this.$VideoChannelInteraction_getAbsoluteIndex(ba);
da=this.getVideoControllerForStory
(this.$VideoChannelInteraction_storyContainer.children[ca]);}



if(da&&
da.hasOption
('VideoWithImmediateAbortLoading',
'isWithImmediateAbortLoading'))


da.preload();};

aa.prototype.

$VideoChannelInteraction_logClick=function(ba){'use strict';
var ca={};
ca[c('VideoChannelLoggerFields').EVENT]=c('VideoChannelLoggerEvents').CLICK;
ca[c('VideoChannelLoggerFields').EVENT_TARGET]=ba;
c('VideoChannelLogger').log(ca);};
aa.prototype.

$VideoChannelInteraction_onNextArrowClick=function(event){'use strict';
this.$VideoChannelInteraction_logClick(c('VideoChannelLoggerEventTargets').NEXT_ARROW);

this.$VideoChannelInteraction_goNext();


this.$VideoChannelInteraction_onMouseMove();

event.stopPropagation();
event.preventDefault();};
aa.prototype.

$VideoChannelInteraction_getStoriesForPlayingChannel=function(){'use strict';
return this.$VideoChannelInteraction_getStoriesForChannel(this.$VideoChannelInteraction_playingChannelID);};
aa.prototype.

$VideoChannelInteraction_getStoriesForActiveChannel=function(){'use strict';
return this.$VideoChannelInteraction_getStoriesForChannel(this.$VideoChannelInteraction_activeChannelID);};
aa.prototype.

$VideoChannelInteraction_getStoriesForChannel=function(ba){'use strict';
var ca=Array.from(this.$VideoChannelInteraction_storyContainer.children).
filter(function(da){return da.dataset.channelId===ba;});
return ca;};
aa.prototype.

$VideoChannelInteraction_goNext=function(){'use strict';
if(v){
var ba=this.getCurrentAbsoluteIndexForChannel(this.$VideoChannelInteraction_activeChannelID);
if(ba===-1&&this.$VideoChannelInteraction_playingChannelID===this.$VideoChannelInteraction_activeChannelID)
ba=0;

var ca=this.$VideoChannelInteraction_getStoriesForActiveChannel();
if(ca.length>0){
this.$VideoChannelInteraction_playingChannelID=this.$VideoChannelInteraction_activeChannelID;}else{

ba=this.getCurrentAbsoluteIndexForChannel(this.$VideoChannelInteraction_playingChannelID);
ca=this.$VideoChannelInteraction_getStoriesForPlayingChannel();}


if(ba<ca.length-1){
c('CSS').removeClass
(this.$VideoChannelInteraction_currentStory,
"_1kfp");

this.updateActiveStory(ba+1,c('VideoPlayerReason').AUTOPLAY,true);
this.$VideoChannelInteraction_applyOverlayOnActiveThumbnails();
return true;}

return false;}else{

var da=this.getCurrentAbsoluteIndex();
if(da<this.$VideoChannelInteraction_storyContainer.children.length-1){
this.updateActiveStory(da+1,c('VideoPlayerReason').AUTOPLAY);
return true;}

return false;}};

aa.prototype.

$VideoChannelInteraction_onPreviousArrowClick=function(event){'use strict';
this.$VideoChannelInteraction_logClick(c('VideoChannelLoggerEventTargets').PREVIOUS_ARROW);

this.$VideoChannelInteraction_goPrevious();


this.$VideoChannelInteraction_onMouseMove();

event.stopPropagation();
event.preventDefault();};
aa.prototype.

$VideoChannelInteraction_goPrevious=function(){'use strict';
if(v){
this.$VideoChannelInteraction_playingChannelID=this.$VideoChannelInteraction_activeChannelID;

var ba=this.getCurrentAbsoluteIndex();

if(ba>=1){
c('CSS').removeClass
(this.$VideoChannelInteraction_currentStory,
"_1kfp");

this.updateActiveStory(ba-1,c('VideoPlayerReason').AUTOPLAY,true);
this.$VideoChannelInteraction_applyOverlayOnActiveThumbnails();
return true;}

return false;}else{

var ca=this.getCurrentAbsoluteIndex();
if(ca>=1){
this.updateActiveStory(ca-1,c('VideoPlayerReason').AUTOPLAY);
return true;}

return false;}};

aa.prototype.


updateActiveStory=
function(ba,
ca,
da){
'use strict';
var ea=this.getCurrentAbsoluteIndex();
if(v){
if(ea===ba&&!da)
return;}else 


if(ea===ba)
return;



var fa=v?
this.$VideoChannelInteraction_getStoriesForPlayingChannel():
this.$VideoChannelInteraction_storyContainer.children,
ga=this.getVideoControllerForStory
(fa[ea]),


ha=ga&&
ga.isMuted();

if(ga&&
!ga.isState('finished')){
ga.pause(c('VideoPlayerReason').USER);
if(c('VideoPlayerAbortLoadingExperiment').canAbort)
ga.abortLoading();}



var ia=fa[ba],
ja=this.getVideoControllerForStory(ia);

this.$VideoChannelInteraction_pauseOtherVideos(ia.id,ia.dataset.channelId);

if(ja){
c('Arbiter').inform
('VideoChannelView/activeStoryChanged',
{id:ja.getVideoID()});

if(ja.isAd()){
c('Arbiter').inform('WebVideoChannelAds/AdsLoaded');


ca=c('VideoPlayerReason').AUTOPLAY;}

if(ha&&!ja.isMuted()){
ja.mute();}else
if(!ha&&ja.isMuted())
ja.unmute();

ja.play(ca);}


var ka=null;
if(fa.length>ba+1){
ka=this.getVideoControllerForStory
(fa[ba+1]);



if(ka)

ka.preload();}



if(v){
var la=this.$VideoChannelInteraction_getRelativeIndexFromAbsoluteIndex
(ba,
this.$VideoChannelInteraction_playingChannelID);

c('VideoChannelLogger').setPosition(la);
this.$VideoChannelInteraction_relativeIndexMap.set(this.$VideoChannelInteraction_playingChannelID,la);}else{

this.$VideoChannelInteraction_relativeIndex=this.$VideoChannelInteraction_getRelativeIndex(ba);
c('VideoChannelLogger').setPosition(this.$VideoChannelInteraction_relativeIndex);}


if(ja&&
ja.getVideoPath()&&
this.$VideoChannelInteraction_videoChannel.isPageTransitionEligible()&&
!c('PageTransitions').isTransitioning())
ja.runOnceOnApiEventLogged
(c('VideoPlayerLoggerEvent').STARTED_PLAYING,
function(){
c('PageTransitions').go
(new (c('URI'))(ja.getVideoPath()).
addQueryData('ref','channel'));});






if(!ia.getAttribute('channel-vpv-logged')){
var ma={};
ia.setAttribute('channel-vpv-logged','1');
ma[c('VideoChannelLoggerFields').EVENT]=c('VideoChannelLoggerEvents').VPV;
ma[c('VideoChannelLoggerFields').STORY_ID]=ia.getAttribute
('data-story-id');

ma[c('VideoChannelLoggerFields').IS_AD]=ja?
ja.isAd():
false;
if(v)
c('VideoChannelLogger').setChannel(ia.dataset.channelId);

c('VideoChannelLogger').log(ma);}


this.$VideoChannelInteraction_isCommenting=false;
this.$VideoChannelInteraction_commentHasAttachment=false;
this.$VideoChannelInteraction_showCorrectControls(ia,true);
this.$VideoChannelInteraction_updateState();};
aa.prototype.


$VideoChannelInteraction_updateState=function(){'use strict';
var ba=this.$VideoChannelInteraction_storyContainer,
ca=this.getCurrentAbsoluteIndex(),

da=Array.from(this.$VideoChannelInteraction_storyContainer.children).
filter(function(na){return na.dataset.channelId===this.$VideoChannelInteraction_playingChannelID;}.bind(this));

if(ca>0){
c('CSS').show(this.$VideoChannelInteraction_previousArrow);}else 

c('CSS').hide(this.$VideoChannelInteraction_previousArrow);


if(v){
for(var ea=0;ea<da.length;ea++){
var fa=ea===ca;
c('CSS').conditionClass
(da[ea],
"_1kfp",
fa);}



this.$VideoChannelInteraction_currentVideo=c('DOM').find
(da[ca],
"._21mb");

this.$VideoChannelInteraction_currentStory=da[ca];

this.$VideoChannelInteraction_applyOverlayOnActiveThumbnails();}else{

for(var ga=0;ga<ba.children.length;ga++){
var ha=ga===ca,
ia=ga===ca+1;
c('CSS').conditionClass
(ba.children[ga],
"_1kfp",
ha);

c('CSS').conditionClass
(this.$VideoChannelInteraction_thumbnails[ga],
"_57j4",
ha);

c('CSS').conditionClass
(this.$VideoChannelInteraction_thumbnails[ga],
"_4lyy",
ia);}



this.$VideoChannelInteraction_currentVideo=c('DOM').find
(ba.children[ca],
"._21mb");}



this.$VideoChannelInteraction_currentVideo.insertBefore
(this.$VideoChannelInteraction_previousArrow,
this.$VideoChannelInteraction_currentVideo.firstChild);

this.$VideoChannelInteraction_currentVideo.appendChild(this.$VideoChannelInteraction_nextArrow);

if(s&&!u)
this.$VideoChannelInteraction_applyAspectRatioSizing();


if(v){
if(ca<da.length-1||
this.$VideoChannelInteraction_videoChannel.hasNextForChannel(this.$VideoChannelInteraction_playingChannelID)){

c('CSS').show(this.$VideoChannelInteraction_nextArrow);}else 

c('CSS').hide(this.$VideoChannelInteraction_nextArrow);}else 


if(ca<ba.children.length-1||
this.$VideoChannelInteraction_videoChannel.hasNext()){

c('CSS').show(this.$VideoChannelInteraction_nextArrow);}else 

c('CSS').hide(this.$VideoChannelInteraction_nextArrow);



this.$VideoChannelInteraction_renderVideoStripVideoContainer
(0);


var ja=this.$VideoChannelInteraction_videoChannel.getStoryFetcher(),ka=
ja?ja.getPreloadedData():{stories:[]},la=ka.stories,
ma=
this.$VideoChannelInteraction_videoChannel.isCameFromVidewViewCarousel();

if(v){

if(ca>=la.length-2&&
this.$VideoChannelInteraction_videoChannel.hasNextForChannel(this.$VideoChannelInteraction_activeChannelID)){

this.$VideoChannelInteraction_loadNextStories();}else

if(ca===0&&
(la.length===0||ma))

this.$VideoChannelInteraction_videoChannel.fetchStories
(false,
function(na,oa){
this.prependStories(na,oa);}.
bind(this),
function(na){this.showThumbnailPlaceholders(na,false);}.bind(this));}else 




if(ca>=ba.children.length-2&&
this.$VideoChannelInteraction_videoChannel.hasNext()){

this.$VideoChannelInteraction_loadNextStories();}else

if(ca===0&&
(la.length===0||ma))

this.$VideoChannelInteraction_videoChannel.fetchStories
(false,
function(na,oa){
this.prependStories(na,oa);}.
bind(this),
function(na){this.showThumbnailPlaceholders(na,false);}.bind(this));




if(this.$VideoChannelInteraction_inDetailsMode)
if(v){
this.$VideoChannelInteraction_loadSidePane
(da[ca],
this.getVideoController().getVideoID(),
this.getVideoController().getAdClientToken());}else 


this.$VideoChannelInteraction_loadSidePane
(this.$VideoChannelInteraction_storyContainer.children[ca],
this.getVideoController().getVideoID(),
this.getVideoController().getAdClientToken());





this.$VideoChannelInteraction_videoChannel.getViewportTracker().fireTimer();
this.$VideoChannelInteraction_videoChannel.getViewportTracker().
updateTimeTrackingData(false,'scroll');};
aa.prototype.

$VideoChannelInteraction_applyAspectRatioSizing=function(){'use strict';
if(!this.$VideoChannelInteraction_storyElementIDToVideoControllerMap.size)
return;


var ba=
x[this.getVideoController().getVideoID()]||
this.$VideoChannelInteraction_videoChannel.getOriginalAspectRatio()||
y;

z=ba;

var ca=this.$VideoChannelInteraction_videoChannel.getAvailableVideoHeight(),
da=this.$VideoChannelInteraction_videoChannel.getAvailableVideoWidth(),

ea=0,
fa=0;
if(z*ca>da){
fa=da;
ea=da/z;}else{

ea=ca;
fa=ca*z;}


this.$VideoChannelInteraction_videoChannel.setVideoDimensions
(fa,
ea,
this.$VideoChannelInteraction_videoChannel.getExtraThumbnailHeight());


this.$VideoChannelInteraction_positionStoryContainer();
this.$VideoChannelInteraction_positionLiveReactionsInput();
this.$VideoChannelInteraction_makeReactionViewCountVisible(fa);};
aa.prototype.

$VideoChannelInteraction_makeReactionViewCountVisible=function(ba){'use strict';
var ca=Array.from(this.$VideoChannelInteraction_storyContainer.children).
filter(function(ga){return ga.dataset.channelId===this.$VideoChannelInteraction_playingChannelID;}.bind(this)),

da=c('DOM').find
(v?
ca[this.getCurrentAbsoluteIndex()]:
this.$VideoChannelInteraction_storyContainer.children[this.getCurrentAbsoluteIndex()],
"._5pw_"),

ea=c('DOM').find
(v?
ca[this.getCurrentAbsoluteIndex()]:
this.$VideoChannelInteraction_storyContainer.children[this.getCurrentAbsoluteIndex()],
"._5px1"),

fa="_337o";

c('CSS').conditionClass
(da,
fa,
ba<=
q+da.clientWidth+ea.clientWidth);};

aa.prototype.

showThumbnailPlaceholders=function(ba,ca){'use strict';
var da=ca?0:ba;
this.$VideoChannelInteraction_renderVideoStripVideoContainer
(da);};

aa.prototype.

$VideoChannelInteraction_onMouseMove=function(){'use strict';
this.$VideoChannelInteraction_lightUp();
this.$VideoChannelInteraction_fadeOutTimeoutID=setTimeout(this.$VideoChannelInteraction_blackOut.bind(this),l);};
aa.prototype.

$VideoChannelInteraction_onKeyUp=function(ba){'use strict';
if(ba.keyCode===c('Keys').RIGHT){
this.$VideoChannelInteraction_isRightKeyDown=false;}else
if(ba.keyCode===c('Keys').LEFT)
this.$VideoChannelInteraction_isLeftKeyDown=false;};

aa.prototype.

$VideoChannelInteraction_onKeyDown=function(ba){'use strict';
this.$VideoChannelInteraction_lightUp();
this.$VideoChannelInteraction_fadeOutTimeoutID=setTimeout(this.$VideoChannelInteraction_blackOut.bind(this),l);

var ca=
c('CSS').matchesSelector(ba.target,"._gn2"),
da=this.$VideoChannelInteraction_inDetailsMode&&
(c('CSS').matchesSelector(ba.target,"._5rpu")||
c('CSS').hasClass(ba.target,'UFIAddCommentInput')),
ea=
c('CSS').matchesSelector(ba.target,"._iuw");


if(ca||
da||
ea||
this.$VideoChannelInteraction_dialogCounter>0||
this.getVideoController().isFullscreen())
return;


if(ba.keyCode===c('Keys').RIGHT&&!this.$VideoChannelInteraction_isRightKeyDown){
this.$VideoChannelInteraction_isRightKeyDown=true;
this.$VideoChannelInteraction_logClick(c('VideoChannelLoggerEventTargets').NEXT_ARROW_KEY);
this.$VideoChannelInteraction_goNext();
event.preventDefault();}else
if(ba.keyCode===c('Keys').LEFT&&!this.$VideoChannelInteraction_isLeftKeyDown){
this.$VideoChannelInteraction_isLeftKeyDown=true;
this.$VideoChannelInteraction_logClick(c('VideoChannelLoggerEventTargets').PREVIOUS_ARROW_KEY);
this.$VideoChannelInteraction_goPrevious();
event.preventDefault();}else
if(ba.keyCode===c('Keys').SPACE){
var fa=this.getVideoController();
if(fa.isState('playing')){
fa.pause(c('VideoPlayerReason').USER);}else
if(fa.isState('paused')||
fa.isState('finished')||
fa.isState('ready'))
fa.play(c('VideoPlayerReason').USER);}};


aa.prototype.

$VideoChannelInteraction_blackOut=function(){'use strict';

if(!this.getVideoController().isState('playing'))
return;

if(!this.$VideoChannelInteraction_black&&c('VideoChannelViewVariables').dark_mode){
this.$VideoChannelInteraction_black=true;
c('CSS').addClass
(this.$VideoChannelInteraction_getDialog().getRoot(),
"_1kf_");}};


aa.prototype.

$VideoChannelInteraction_lightUp=function(){'use strict';
clearTimeout(this.$VideoChannelInteraction_fadeOutTimeoutID);
if(this.$VideoChannelInteraction_black){
this.$VideoChannelInteraction_black=false;
c('CSS').removeClass
(this.$VideoChannelInteraction_getDialog().getRoot(),
"_1kf_");}};


aa.prototype.

$VideoChannelInteraction_setupContainers=function(){'use strict';
var ba=this.$VideoChannelInteraction_getDialogContent();

this.$VideoChannelInteraction_storyContainer=c('DOM').create
('div',
{className:"_1kfk"});

c('DOM').appendContent(ba,this.$VideoChannelInteraction_storyContainer);

this.$VideoChannelInteraction_videoStripWrapper=c('DOM').create('div');
c('ReactDOM').render
(c('React').createElement('div',{className:r?"_4hvx":''},
c('React').createElement('div',{className:"_r7b"},
c('React').createElement('div',{className:"_5g7c"}),
c('React').createElement('div',{className:"_r7d"})),

c('React').createElement('div',{className:"_1sz-"})),

this.$VideoChannelInteraction_videoStripWrapper);

c('DOM').appendContent(ba,this.$VideoChannelInteraction_videoStripWrapper);

this.$VideoChannelInteraction_titleContainer=c('DOM').find
(this.$VideoChannelInteraction_getDialog().getInnerContent(),
"._5g7c");

this.$VideoChannelInteraction_videoStripVideoContainer=c('DOM').find
(this.$VideoChannelInteraction_getDialog().getInnerContent(),
"._r7d");

this.$VideoChannelInteraction_upNextContainer=c('DOM').find
(this.$VideoChannelInteraction_videoStripWrapper,
"._1sz-");};

aa.prototype.

$VideoChannelInteraction_onUpNextClick=function(){'use strict';
this.$VideoChannelInteraction_logClick(c('VideoChannelLoggerEventTargets').UP_NEXT);
this.$VideoChannelInteraction_goNext();};
aa.prototype.

$VideoChannelInteraction_showUpNext=function(ba){'use strict';
var ca=this.getCurrentAbsoluteIndex(),
da=this.$VideoChannelInteraction_getThumbnails();

if(!this.$VideoChannelInteraction_isVideoStripShown&&
da.length>ca+1&&
ba===this.getVideoController()){
var ea=da[ca+1];
if(ea){
c('ReactDOM').render
(c('React').createElement(c('VideoChannelUpNextUnit.react'),
{dialogWidth:this.$VideoChannelInteraction_videoChannel.getAvailableWidth(),
onClick:this.$VideoChannelInteraction_onUpNextClick.bind(this),
thumbnail:ea}),

this.$VideoChannelInteraction_upNextContainer);

c('CSS').addClass
(this.$VideoChannelInteraction_videoStripWrapper,
"_1sz_");

this.$VideoChannelInteraction_upNextShown=true;}}};


aa.prototype.

$VideoChannelInteraction_getThumbnails=function(){'use strict';
var ba=[];
if(v){
ba=this.$VideoChannelInteraction_thumbnailsMap.get(this.$VideoChannelInteraction_activeChannelID);
ba=ba?ba.slice(0):[];}else 

ba=this.$VideoChannelInteraction_thumbnails;

return ba;};
aa.prototype.

$VideoChannelInteraction_getCurrentThumbnail=function(){'use strict';
var ba=this.$VideoChannelInteraction_getThumbnails(),
ca=this.getCurrentAbsoluteIndex();
return ca<ba.length?
ba[ca]:
null;};
aa.prototype.

$VideoChannelInteraction_updateNowPlayingVisibility=function(ba){'use strict';
var ca=this.$VideoChannelInteraction_getCurrentThumbnail();
if(ca){
var da=c('DOM').find
(ca,
"._voo");

if(ba){
c('CSS').removeClass
(da,
"_4mzo");}else 


c('CSS').addClass
(da,
"_4mzo");}};



aa.prototype.

$VideoChannelInteraction_hideUpNext=function(){'use strict';
c('CSS').removeClass
(this.$VideoChannelInteraction_videoStripWrapper,
"_1sz_");

this.$VideoChannelInteraction_upNextShown=false;};
aa.prototype.

$VideoChannelInteraction_scheduleUpNextUnitVisibility=function(ba){'use strict';
this.$VideoChannelInteraction_subscriptions.addSubscriptions
(ba.addListener('updateStatus',function(ca){
if(ca.position!==undefined){
var da=ba.getPlaybackDuration();
if(da&&
da-ca.position<5&&
ba===this.getVideoController()){

if(!this.$VideoChannelInteraction_upNextShown)
this.$VideoChannelInteraction_showUpNext(ba);}else 


this.$VideoChannelInteraction_hideUpNext();}}.


bind(this)));};

aa.prototype.

$VideoChannelInteraction_bindPlaybackEvents=function(ba){'use strict';
this.$VideoChannelInteraction_subscriptions.addSubscriptions
(ba.addListener('beginPlayback',this.$VideoChannelInteraction_endCountdown.bind(this)),
ba.addListener('finishPlayback',function(){
var ca=this.$VideoChannelInteraction_videoChannel.isOpen()&&
!ba.isFullscreen()&&
ba===this.getVideoController();
if(ca)
this.$VideoChannelInteraction_updateEndScreen();}.

bind(this)));};

aa.prototype.

$VideoChannelInteraction_updateEndScreen=function(){'use strict';
var ba=this.getVideoController();
if(ba.isState('finished')){
var ca=this.getCurrentAbsoluteIndex(),
da=ca===this.$VideoChannelInteraction_storyContainer.children.length-1,
ea=this.$VideoChannelInteraction_isCommenting||this.$VideoChannelInteraction_commentHasAttachment,
fa=ba.getOption
('VideoWithLiveBroadcast',
'isLive'),


ga=true;
if(c('VideoChannelViewVariables').autoplaySettingDisabled||
da||

!r&&
(!t||ea)&&
this.$VideoChannelInteraction_inDetailsMode||

this.$VideoChannelInteraction_inShareMode||
this.$VideoChannelInteraction_dialogCounter!=0||
fa)
ga=false;


if(ba.getOption('VideoLiveEndscreen','enabled')){
if(ga)
this.$VideoChannelInteraction_nonEndscreenCountdown=setTimeout
(this.$VideoChannelInteraction_autoAdvance.bind(this),
c('VideoChannelEndScreen').TIMEOUT*1000);



return;}


this.$VideoChannelInteraction_showEndScreen(ga);}};

aa.prototype.

$VideoChannelInteraction_showEndScreen=function(ba){'use strict';
this.$VideoChannelInteraction_lightUp();
this.$VideoChannelInteraction_endScreen.showEndScreen
(this.$VideoChannelInteraction_currentVideo,
ba,
this.$VideoChannelInteraction_autoAdvance.bind(this));};

aa.prototype.

$VideoChannelInteraction_endCountdown=function(){'use strict';
if(this.$VideoChannelInteraction_nonEndscreenCountdown){
clearTimeout(this.$VideoChannelInteraction_nonEndscreenCountdown);
this.$VideoChannelInteraction_nonEndscreenCountdown=null;}

this.$VideoChannelInteraction_endScreen.endCountdown(this.$VideoChannelInteraction_currentVideo);};
aa.prototype.

$VideoChannelInteraction_autoAdvance=function(){'use strict';
if(this.getVideoController().isState('finished')){
this.$VideoChannelInteraction_endCountdown();

if(this.$VideoChannelInteraction_goNext()){
var ba={};
ba[c('VideoChannelLoggerFields').EVENT]=
c('VideoChannelLoggerEvents').AUTO_ADVANCE;

ba[c('VideoChannelLoggerFields').POSITION_IN_CHANNEL]=
this.getCurrentAbsoluteIndex()-1;
if(v){
var ca=this.$VideoChannelInteraction_getCurrentAbsoluteIndexForPlayingChannel();
if(ca>0)
ca--;

ba[c('VideoChannelLoggerFields').POSITION_IN_CHANNEL]=ca;
c('VideoChannelLogger').setChannel(this.$VideoChannelInteraction_playingChannelID);}

c('VideoChannelLogger').log(ba);}}};


aa.prototype.

$VideoChannelInteraction_getPageNumberForActiveChannel=function(){'use strict';
return this.$VideoChannelInteraction_pageNumberMap.get(this.$VideoChannelInteraction_activeChannelID)||0;};
aa.prototype.

$VideoChannelInteraction_updatePageNumber=function(ba){'use strict';
this.$VideoChannelInteraction_pageNumberMap.set(this.$VideoChannelInteraction_activeChannelID,ba);};
aa.prototype.

$VideoChannelInteraction_renderVideoStripVideoContainer=
function(ba){
'use strict';
var ca=this.$VideoChannelInteraction_videoChannel.getAvailableWidth();
if(r)
ca-=p;


var da=[];

if(v){
da=this.$VideoChannelInteraction_thumbnailsMap.get(this.$VideoChannelInteraction_activeChannelID);
da=da?da.slice(0):[];}else 

da=this.$VideoChannelInteraction_thumbnails.slice(0);


if(da.length===1&&this.$VideoChannelInteraction_isVideoStripShown||
da.length>1&&!this.$VideoChannelInteraction_isVideoStripShown)
this.$VideoChannelInteraction_toggleVideoStrip();

var ea=v?
this.$VideoChannelInteraction_getCurrentAbsoluteIndexForActiveChannel():
this.getCurrentAbsoluteIndex();

if(v){
c('ReactDOM').render
(c('React').createElement(c('VideoStripThumbnailCarousel.react'),
{dialogWidth:ca,
extraThumbnailHeight:this.$VideoChannelInteraction_videoChannel.getExtraThumbnailHeight(),
pendingPreviousThumbnails:ba,
thumbnails:da,
index:ea,
hasNext:this.$VideoChannelInteraction_videoChannel.hasNextForChannel(this.$VideoChannelInteraction_activeChannelID),
loadNextItems:this.$VideoChannelInteraction_loadNextStories.bind(this),
onAllItemsLoaded:this.$VideoChannelInteraction_onAllStoriesLoaded.bind(this),
pageNumber:this.$VideoChannelInteraction_getPageNumberForActiveChannel(),
updatePageNumber:this.$VideoChannelInteraction_updatePageNumber.bind(this)}),

this.$VideoChannelInteraction_videoStripVideoContainer);}else 


c('ReactDOM').render
(c('React').createElement(c('VideoStripThumbnailCarousel.react'),
{dialogWidth:ca,
extraThumbnailHeight:this.$VideoChannelInteraction_videoChannel.getExtraThumbnailHeight(),
pendingPreviousThumbnails:ba,
thumbnails:da,
index:ea,
hasNext:this.$VideoChannelInteraction_videoChannel.hasNext(),
loadNextItems:this.$VideoChannelInteraction_loadNextStories.bind(this),
onAllItemsLoaded:this.$VideoChannelInteraction_onAllStoriesLoaded.bind(this)}),

this.$VideoChannelInteraction_videoStripVideoContainer);};



aa.prototype.

$VideoChannelInteraction_loadNextStories=function(){'use strict';
if(v){
this.$VideoChannelInteraction_videoChannel.fetchStoriesForChannel
(this.$VideoChannelInteraction_activeChannelID,
function(ba,ca){
this.appendStories
(ba,
ca);}.

bind(this));}else 


this.$VideoChannelInteraction_videoChannel.fetchStories
(true,
function(ba,ca){this.appendStories(ba,ca);}.bind(this));};


aa.prototype.

$VideoChannelInteraction_onAllStoriesLoaded=function(){'use strict';
this.getVideoController().emit
('VideoChannelController/chainedStoriesLoaded');};

aa.prototype.

getVideoController=function(){'use strict';
var ba=v?
this.$VideoChannelInteraction_getStoriesForPlayingChannel()[this.getCurrentAbsoluteIndex()]:
this.$VideoChannelInteraction_storyContainer.children[this.getCurrentAbsoluteIndex()],
ca=this.getVideoControllerForStory(ba);
ca||k(0,'Must have controller');
return ca;};
aa.prototype.

$VideoChannelInteraction_setStory=
function(ba,
ca,
da){
'use strict';
if(v)
ca.dataset.storyId=ba.id;


var ea=void 0,

fa=this.$VideoChannelInteraction_thumbnailsMap.get(ca.dataset.channelId);
if(!fa)
fa=[];


var ga=void 0;

if(v){
ga=this.$VideoChannelInteraction_getIndexOffsetForChannel(ca.dataset.channelId);}else 

ga=this.$VideoChannelInteraction_getIndexOffsetForActiveChannel();


if(!da){
if(v){
ga++;
this.$VideoChannelInteraction_indexOffsetMap.set(ca.dataset.channelId,ga);
ea=-ga;
fa.unshift(ca);
this.$VideoChannelInteraction_thumbnailsMap.set(ca.dataset.channelId,fa);}else{

this.$VideoChannelInteraction_indexOffset++;


ea=-this.$VideoChannelInteraction_indexOffset;
this.$VideoChannelInteraction_thumbnails.unshift(ca);}


this.$VideoChannelInteraction_storyContainer.insertBefore
(ba,
this.$VideoChannelInteraction_storyContainer.childNodes[0]);}else 



if(v){
var ha=
this.$VideoChannelInteraction_getStoriesForChannel(ca.dataset.channelId);
ea=ha.length-ga;
this.$VideoChannelInteraction_storyContainer.appendChild(ba);
fa.push(ca);
this.$VideoChannelInteraction_thumbnailsMap.set(ca.dataset.channelId,fa);}else{

ea=
this.$VideoChannelInteraction_storyContainer.children.length-this.$VideoChannelInteraction_indexOffset;
this.$VideoChannelInteraction_storyContainer.appendChild(ba);
this.$VideoChannelInteraction_thumbnails.push(ca);}



this.$VideoChannelInteraction_subscriptions.addSubscriptions
(c('Event').listen(ba,'click',this.$VideoChannelInteraction_onStoryClick.bind(this,ba)),
c('Event').listen(ca,'click',
function(ja,ka,event){
if(c('Parent').bySelector
(event.target,
"._4hvy"))

return;

if(this.$VideoChannelInteraction_isVideoStripShown){
this.$VideoChannelInteraction_logClick(c('VideoChannelLoggerEventTargets').THUMBNAIL);
this.$VideoChannelInteraction_onThumbnailClick(ja,ka);
event.preventDefault();}}.

bind(this,ea,ba)),

c('Event').listen(ca,'mouseover',
function(ja,event){
if(this.$VideoChannelInteraction_isVideoStripShown){
this.$VideoChannelInteraction_onThumbnailMouseOver(ja);
event.preventDefault();}}.

bind(this,ea)));



if(!this.$VideoChannelInteraction_storyElementIDToVideoControllerMap.has(ba.id)){
var ia=this.$VideoChannelInteraction_videoChannel.findVideoControllerForStory(ba);
if(ia){
this.$VideoChannelInteraction_videoControllerToStoryMap.set(ia,ba);
this.$VideoChannelInteraction_storyElementIDToVideoControllerMap.set(ba.id,ia);}}



this.$VideoChannelInteraction_videoChannel.getViewportTracker().invalidateAllStoriesCache();};
aa.prototype.

$VideoChannelInteraction_showPendingElements=function(){'use strict';
for(var ba=0;ba<this.$VideoChannelInteraction_pendingElements.length;ba++){
var ca=this.$VideoChannelInteraction_pendingElements[ba];
c('Style').set(ca,'opacity','');}

this.$VideoChannelInteraction_showElementTimer=null;
this.$VideoChannelInteraction_pendingElements=[];
this.getVideoController().emit
('VideoChannelController/pendingElementsShown',
{});};

aa.prototype.

$VideoChannelInteraction_startHidden=function(ba){'use strict';
if(!this.$VideoChannelInteraction_showElementTimer)
this.$VideoChannelInteraction_showElementTimer=c('setImmediate')
(this.$VideoChannelInteraction_showPendingElements.bind(this));


this.$VideoChannelInteraction_pendingElements.push(ba);
c('Style').set(ba,'opacity',0);};
aa.prototype.

shouldShowSidePanelOnLoad=function(){'use strict';
var ba=this.getVideoController(),
ca=ba.getOption('VideoWithLiveBroadcast','isLive'),
da=ba.getOption
('VideoWithVODBroadcast',
'isLiveVOD'),

ea=ba.getOption
('FeedAutoplay',
'shouldOpenSidePaneInChannelView');


return r||
ca||
da||
ea||
t;};
aa.prototype.

$VideoChannelInteraction_showCorrectControls=function(ba,ca){'use strict';
if(!s||u)
return;

var da=c('DOM').scry
(ba,
"._4lqt"),

ea=c('DOM').scry
(ba,
"._3t0x");

if(da.length>=2&&ea.length>0)


da.forEach
(function(fa){
c('CSS').conditionShow
(fa,
c('CSS').matchesSelector
(fa,
"._3t0x")==
ca);});};




aa.prototype.
















setFirstStory=
function(ba,
ca,
da,
ea){
'use strict';
if(!u)
this.$VideoChannelInteraction_startHidden(c('DOM').find(ba,"._23if"));

this.$VideoChannelInteraction_startHidden(c('DOM').find(ba,"._23ig"));

if(!da){





var fa=
this.$VideoChannelInteraction_videoChannel.getWNSRootVideoPlayerController(),
ga=c('DOM').find
(ba,
"._1kg0");


fa||k(0,
'There must be a WNS Root Video Player Controller to traverse this '+
'code path');

var ha=fa.getRootNode();
this.$VideoChannelInteraction_firstVideoNode=ha;
c('DOM').replace(ga,ha);

this.$VideoChannelInteraction_setStory(ba,ca,false);
this.$VideoChannelInteraction_updateState();
this.registerVideoController(fa);
return;}


this.$VideoChannelInteraction_setStory(ba,ca,true);
this.$VideoChannelInteraction_updateState();

if(v)
this.$VideoChannelInteraction_thumbnailsMap.set(this.$VideoChannelInteraction_activeChannelID,[ca]);

var ia=
this.$VideoChannelInteraction_videoChannel.getOriginalVideoPlayerController();
if(!ia)






setTimeout(function(){
if(this.shouldShowSidePanelOnLoad())
this.$VideoChannelInteraction_onShowDetails();}.

bind(this));


if(ia){var ja=





this.$VideoChannelInteraction_getWNSStoriesAndThumbnails(),ka=ja.prependStories,la=ja.prependThumbnails,ma=ja.appendStories,na=ja.appendThumbnails;

if(!ea){
var oa=c('DOM').find
(ba,
"._1kg0"),

pa=ia.getRootNode();
this.$VideoChannelInteraction_firstVideoNode=pa;
c('DOM').replace(oa,pa);}else{

var qa=c('DOM').scry
(ba,
"._5v-_");


if(qa.length===1&&
qa[0].childNodes.length===0)
qa[0].appendChild(ia.getRootNode());}



ia.setDimensions
(this.$VideoChannelInteraction_videoChannel.getVideoWidth(),
this.$VideoChannelInteraction_videoChannel.getVideoHeight());

if(!ia.isState('paused'))
ia.play(c('VideoPlayerReason').USER);

this.$VideoChannelInteraction_scheduleUpNextUnitVisibility(ia);
this.$VideoChannelInteraction_bindPlaybackEvents(ia);



this.$VideoChannelInteraction_videoControllerToStoryMap.set(ia,ba);
this.$VideoChannelInteraction_storyElementIDToVideoControllerMap.set
(ba.id,
ia);


if(this.shouldShowSidePanelOnLoad())
this.$VideoChannelInteraction_onShowDetails();


this.prependStories(ka,la);
this.appendStories(ma,na);
this.$VideoChannelInteraction_videoChannel.registerWNSVideoControllers();
this.$VideoChannelInteraction_videoChannel.registerChannelInteractionsFromWNS();

if(ia.getVideoPath()&&
this.$VideoChannelInteraction_videoChannel.isPageTransitionEligible())
ia.runOnceOnApiEventLogged
(c('VideoPlayerLoggerEvent').STARTED_PLAYING,
function(){
c('PageTransitions').go
(new (c('URI'))(ia.getVideoPath()).
addQueryData('ref','channel'));});}






this.$VideoChannelInteraction_videoChannel.hideLoadingState();
this.$VideoChannelInteraction_toggleVideoStrip();
this.$VideoChannelInteraction_showCorrectControls(ba,true);
this.$VideoChannelInteraction_updateState();};
aa.prototype.

appendStories=
function(ba,
ca){
'use strict';
for(var da=0;da<ba.length;da++){
var ea=ba[da],
fa=ca[da];
this.$VideoChannelInteraction_startHidden(c('DOM').find(ea,"._21mb"));
this.$VideoChannelInteraction_startHidden(fa);
this.$VideoChannelInteraction_setStory(ea,fa,true);}

this.$VideoChannelInteraction_updateState();
if(v)
if(this.$VideoChannelInteraction_playingChannelID===this.$VideoChannelInteraction_activeChannelID)
this.$VideoChannelInteraction_renderVideoStripVideoContainer
(0);};



aa.prototype.

prependStories=
function(ba,
ca){
'use strict';
ba=ba.reverse();
ca=ca.reverse();
for(var da=0;da<ba.length;da++)
this.$VideoChannelInteraction_setStory(ba[da],ca[da],false);

this.$VideoChannelInteraction_updateState();};
aa.prototype.

$VideoChannelInteraction_onShowDetails=function(event){'use strict';
var ba=this.$VideoChannelInteraction_getDialog().getRoot();

this.$VideoChannelInteraction_logClick(c('VideoChannelLoggerEventTargets').SHOW_SIDE_PANE);

event&&event.preventDefault();

if(this.$VideoChannelInteraction_inDetailsMode)
return;


this.$VideoChannelInteraction_inDetailsMode=true;
var ca=this.$VideoChannelInteraction_getStoriesForPlayingChannel();
this.$VideoChannelInteraction_loadSidePane
(v?
ca[this.getCurrentAbsoluteIndex()]:
this.$VideoChannelInteraction_storyContainer.children[this.getCurrentAbsoluteIndex()],
this.getVideoController().getVideoID(),
this.getVideoController().getAdClientToken());


c('CSS').addClass
(ba,
"uiContextualLayerParent");


c('CSS').addClass
(ba,
"_57bj");


c('Arbiter').inform
(c('StreamingReactionsTrayEvents').ShowChannelViewDetails);


this.$VideoChannelInteraction_updateEndScreen();
this.$VideoChannelInteraction_positionStoryContainer();};
aa.prototype.

$VideoChannelInteraction_loadSidePane=
function(ba,
ca,
da){
'use strict';

this.$VideoChannelInteraction_sidePaneAsyncRequest&&this.$VideoChannelInteraction_sidePaneAsyncRequest.abandon();

var ea=c('DOM').scry
(ba,
"._260p")[
0];





if(!ea){var fa=
c('DOM').scry(ba,"._5pc9"),ga=fa[0];
if(!ga||!ga.childNodes||!ga.childNodes.length)
ea=c('DOM').scry
(ba,
"._3upq")[
0];}



var ha=this.$VideoChannelInteraction_videoChannel.getVideoChainingCaller(),
ia=c('XVideoChannelViewDetailsAsyncController').getURIBuilder().
setInt('video_id',ca).
setEnum('caller',ha);
if(da)
ia.setString('ad_impression_token',da);


var ja=this.getVideoController().getOption
('VideoWithLiveBroadcast',
'isLive');

if(u&&!ja)
c('CSS').addClass
(ba,
"_uaz");



if(ea){
this.$VideoChannelInteraction_sidePaneAsyncRequest=new (c('AsyncRequest'))().
setRelativeTo(ea).
setURI(ia.getURI()).
setAllowCrossPageTransition(true).
setMethod('GET').
setReadOnly(true).
setHandler(function(){
this.$VideoChannelInteraction_sidePaneAsyncRequest=null;}.
bind(this)).
setErrorHandler(function(){this.$VideoChannelInteraction_sidePaneAsyncRequest=null;}.bind(this));
this.$VideoChannelInteraction_sidePaneAsyncRequest.send();}};

aa.prototype.

$VideoChannelInteraction_onHideDetails=function(event){'use strict';
var ba=this.$VideoChannelInteraction_getDialog().getRoot();

this.$VideoChannelInteraction_logClick(c('VideoChannelLoggerEventTargets').HIDE_SIDE_PANE);


this.$VideoChannelInteraction_sidePaneAsyncRequest&&this.$VideoChannelInteraction_sidePaneAsyncRequest.abandon();

this.$VideoChannelInteraction_inDetailsMode=false;

c('CSS').removeClass
(ba,
"uiContextualLayerParent");


c('CSS').removeClass
(ba,
"_57bj");


var ca=v?
this.$VideoChannelInteraction_getStoriesForPlayingChannel():
this.$VideoChannelInteraction_storyContainer.children,
da=ca[this.getCurrentAbsoluteIndex()];
c('CSS').removeClass
(da,
"_uaz");


c('Arbiter').inform
(c('StreamingReactionsTrayEvents').HideChannelViewDetails);


this.$VideoChannelInteraction_positionStoryContainer();
this.$VideoChannelInteraction_updateEndScreen();
event&&event.preventDefault();};
aa.prototype.

$VideoChannelInteraction_toggleVideoStrip=function(){'use strict';
var ba=this.$VideoChannelInteraction_getDialog().getRoot();
if(this.$VideoChannelInteraction_isVideoStripShown){
c('CSS').removeClass
(ba,
"_r7e");}else 


c('CSS').addClass
(ba,
"_r7e");


this.$VideoChannelInteraction_isVideoStripShown=!this.$VideoChannelInteraction_isVideoStripShown;};
aa.prototype.

registerShowDetailsLink=
function(ba){
'use strict';
c('Event').listen(ba,'click',function(){
var ca=aa.getInteraction();

ca||k(0,
'VideoChannelInteraction must exist for this to be triggered');

ca.$VideoChannelInteraction_onShowDetails();});};

aa.prototype.

registerHideDetailsLink=
function(ba){
'use strict';
c('Event').listen(ba,'click',function(){
var ca=aa.getInteraction();

ca||k(0,
'VideoChannelInteraction must exist for this to be triggered');

ca.$VideoChannelInteraction_onHideDetails();});};

aa.prototype.

$VideoChannelInteraction_toggleSidePane=function(){'use strict';
if(this.$VideoChannelInteraction_inDetailsMode){
this.$VideoChannelInteraction_onHideDetails();}else 

this.$VideoChannelInteraction_onShowDetails();};

aa.prototype.

registerLiveReactionsInput=
function(ba,
ca,
da){
'use strict';
this.$VideoChannelInteraction_liveReactionsInput=ba;
this.$VideoChannelInteraction_aspectRatio=ca;
this.$VideoChannelInteraction_numReactions=da;
this.$VideoChannelInteraction_positionLiveReactionsInput();};
aa.prototype.

registerShareSheetVisibility=
function(ba){
'use strict';
var ca=aa.getInteraction();

ca||k(0,
'VideoChannelInteraction must exist for this to be triggered');

ca.$VideoChannelInteraction_inShareMode=ba;
ca.$VideoChannelInteraction_updateEndScreen();};
aa.prototype.

registerHideFeedback=
function(ba,
ca){
'use strict';
var da=aa.getInteraction();

da||k(0,
'VideoChannelInteraction must exist for this to be triggered');


var ea=da.getVideoController();
if(ba.toString()===ea.getVideoID()){

da.$VideoChannelInteraction_bindControllerToHideElementDuringAdsBreak
(ea,
ca);

this.$VideoChannelInteraction_registerInstreamAdInProgressOverlay(ea);}else 



da.$VideoChannelInteraction_videoIDToFeedbackMap.set(ba.toString(),ca);};

aa.prototype.

registerHideReactionsInputBar=
function(ba,
ca){
'use strict';
var da=aa.getInteraction();

da||k(0,
'VideoChannelInteraction must exist for this to be triggered');


var ea=da.getVideoController();
if(ba.toString()===ea.getVideoID()){

da.$VideoChannelInteraction_bindControllerToHideElementDuringAdsBreak
(ea,
ca);}else 




da.$VideoChannelInteraction_videoIDToReactionsInputBarMap.set
(ba.toString(),
ca);};


aa.prototype.

$VideoChannelInteraction_bindControllerToHideElementDuringAdsBreak=
function(ba,
ca){
'use strict';
if(!ca)
return;

if(this.$VideoChannelInteraction_isCommercialBreakOngoing(ba))
c('CSS').hide(ca);

this.$VideoChannelInteraction_subscriptions.addSubscriptions
(ba.addListener
('commercialBreak/hideUFI',
function(){
c('CSS').hide(ca);}),


ba.addListener
('commercialBreak/showUFI',
function(){
c('CSS').show(ca);}));};



aa.prototype.

$VideoChannelInteraction_isCommercialBreakOngoing=function(ba){'use strict';
var ca=ba.getOption
('VideoWithCommercialBreak',
'controller');


if(!ca)
return false;

return ca.getIsCommercialBreakOngoing();};
aa.prototype.

$VideoChannelInteraction_registerInstreamAdInProgressOverlay=
function(ba){
'use strict';
var ca=ba&&
ba.getOption
('VideoWithInstreamVideo',
'controller'),

da=
ca&&ca.getConfig();


if(!da||da.isBroadcast)
return;

if(this.$VideoChannelInteraction_isCommercialBreakOngoing(ba))
this.$VideoChannelInteraction_renderAdInProgressOverlay(ba,true);

this.$VideoChannelInteraction_subscriptions.addSubscriptions
(ba.addListener
('commercialBreak/hideUFI',
function(){
this.$VideoChannelInteraction_renderAdInProgressOverlay(ba,true);}.
bind(this)),

ba.addListener
('commercialBreak/showUFI',
function(){
this.$VideoChannelInteraction_renderAdInProgressOverlay(ba,false);}.
bind(this)));};


aa.prototype.

$VideoChannelInteraction_renderAdInProgressOverlay=
function(ba,
ca){
'use strict';
this.$VideoChannelInteraction_updateNowPlayingVisibility(!ca);
var da=this.getCurrentAbsoluteIndex(),
ea=this.$VideoChannelInteraction_getThumbnails(),
fa=ea[da];
if(fa){
var ga=c('DOM').find
(fa,
"._4mz_");

if(ga){
c('ReactDOM').unmountComponentAtNode(ga);
if(ca&&ba){
c('CSS').addClass
(fa,
"_4mzp");

c('ReactDOM').render
(c('React').createElement(c('CommercialBreakChannelThumbnailOverlay.react'),
{videoPlayerController:ba}),
ga);}else 


c('CSS').removeClass
(fa,
"_4mzp");}}};




aa.prototype.

registerVideoController=
function(ba){
'use strict';
this.$VideoChannelInteraction_scheduleUpNextUnitVisibility(ba);
this.$VideoChannelInteraction_bindPlaybackEvents(ba);
var ca=c('VideoChannelController').getVideoChannel();
if(!ca)
return;


ba.updateSource(c('VideoPlayerLoggerSource').CHANNEL);
ca.registerVideoController(ba);

if(this.$VideoChannelInteraction_videoControllerToStoryMap.has(ba))
return;


var da=this.findStoryForVideoController(ba);
if(da){
this.$VideoChannelInteraction_videoControllerToStoryMap.set(ba,da);
this.$VideoChannelInteraction_storyElementIDToVideoControllerMap.set(da.id,ba);}

this.$VideoChannelInteraction_registerInstreamAdInProgressOverlay(ba);
var ea=ba.getVideoID();
if(this.$VideoChannelInteraction_videoIDToFeedbackMap.has(ea))
this.$VideoChannelInteraction_bindControllerToHideElementDuringAdsBreak
(ba,
this.$VideoChannelInteraction_videoIDToFeedbackMap.get(ea));


if(this.$VideoChannelInteraction_videoIDToReactionsInputBarMap.has(ea))
this.$VideoChannelInteraction_bindControllerToHideElementDuringAdsBreak
(ba,
this.$VideoChannelInteraction_videoIDToReactionsInputBarMap.get(ea));};


aa.prototype.

findStoryForVideoController=function(ba){'use strict';
for(var ca=0;ca<this.$VideoChannelInteraction_storyContainer.children.length;++ca){
var da=this.$VideoChannelInteraction_storyContainer.children[ca];
if(da.contains(ba.getRootNode()))
return da;}


return null;};
aa.prototype.

getVideoControllerForStory=function(ba){'use strict';
return this.$VideoChannelInteraction_storyElementIDToVideoControllerMap.get(ba.id);};
aa.prototype.

getVideoControllerForStoryID=function(ba){'use strict';
return this.$VideoChannelInteraction_storyElementIDToVideoControllerMap.get(ba);};
aa.prototype.

getStoryForVideoController=function(ba){'use strict';
return this.$VideoChannelInteraction_videoControllerToStoryMap.get(ba);};
aa.prototype.

getStoryIndex=function(ba){'use strict';
var ca=v?
this.$VideoChannelInteraction_getStoriesForPlayingChannel():
this.$VideoChannelInteraction_storyContainer.children;

for(var da=0;da<ca.length;++da)
if(ba===ca[da])
return da;


return -1;};
aa.prototype.

isInDetailsMode=function(){'use strict';
return this.$VideoChannelInteraction_inDetailsMode;};
aa.

getInteraction=function(){'use strict';
var ba=c('VideoChannelController').getVideoChannel();
if(!ba)
return null;

var ca=ba.getInteraction();
if(!ca){
ca=new aa(ba);
ba.setInteraction(ca);}

return ca;};
aa.


setTitle=
function(ba,
ca,
da){
'use strict';
var ea=aa.getInteraction();
if(!ea)
return;


ea.setTitle(ba,ca,da);};
aa.


setFirstStory=
function(ba,
ca,
da){
'use strict';
var ea=aa.getInteraction();
if(!ea)
return;


ea.setFirstStory(ba,ca,da);};
aa.


registerShowDetailsLink=
function(ba){
'use strict';
var ca=aa.getInteraction();
if(!ca){
c('VideoWatchAndScrollController').registerChannelInteraction
(function(){
var da=aa.getInteraction();

da||k(0,
'VideoChannelInteraction must exist for this to be triggered');

da.registerShowDetailsLink(ba);});


return;}


ca.registerShowDetailsLink(ba);};
aa.


registerHideDetailsLink=
function(ba){
'use strict';
var ca=aa.getInteraction();
if(!ca){
c('VideoWatchAndScrollController').registerChannelInteraction
(function(){
var da=aa.getInteraction();

da||k(0,
'VideoChannelInteraction must exist for this to be triggered');

da.registerHideDetailsLink(ba);});


return;}


ca.registerHideDetailsLink(ba);};
aa.


registerLiveReactionsInput=
function(ba,
ca,
da){
'use strict';
var ea=aa.getInteraction();
if(!ea){
c('VideoWatchAndScrollController').registerChannelInteraction
(function(){
var fa=aa.getInteraction();

fa||k(0,
'VideoChannelInteraction must exist for this to be triggered');

fa.registerLiveReactionsInput
(ba,
ca,
da);});



return;}


ea.registerLiveReactionsInput(ba,ca,da);};
aa.

registerShareSheetVisibility=
function(ba){
'use strict';
var ca=aa.getInteraction();
if(!ca){
c('VideoWatchAndScrollController').registerChannelInteraction
(function(){
var da=aa.getInteraction();

da||k(0,
'VideoChannelInteraction must exist for this to be triggered');

da.registerShareSheetVisibility(ba);});


return;}


ca.registerShareSheetVisibility(ba);};
aa.


registerHideFeedback=
function(ba,
ca){
'use strict';
var da=aa.getInteraction();
if(!da)
return;

da.registerHideFeedback
(ba,
ca);};

aa.


registerHideReactionsInputBar=
function(ba,
ca){
'use strict';
var da=aa.getInteraction();
if(!da)
return;

da.registerHideReactionsInputBar
(ba,
ca);};

aa.

registerVideoController=
function(ba){
'use strict';
var ca=aa.getInteraction();
if(!ca)
return;


ca.registerVideoController(ba);};
aa.


registerAspectRatio=
function(ba,
ca){
'use strict';
x[ba]=ca;

var da=aa.getInteraction();
if(s&&
!u&&
da&&
da.$VideoChannelInteraction_videoControllerToStoryMap.size){
var ea=da.getCurrentAbsoluteIndex(),
fa=da.$VideoChannelInteraction_storyContainer,
ga=
da.getVideoControllerForStory
(fa.children[ea]);


if(z!==ca&&
ga&&
ga.getVideoID()===ba)
da.$VideoChannelInteraction_updateState();}};





f.exports=aa;}),null);

/** js/video/channel_view/VideoChannelShareButton.react.js */




__d('VideoChannelShareButton.react',['React','UFIShareNowMenuBootloader.react','VideoChannelInteraction'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits





(j,c('React').Component);i=h&&h.prototype;j.prototype.
render=function(){'use strict';var k=




this.props,l=k.endpoint,m=k.endpointData,

n=function p(){
c('VideoChannelInteraction').registerShareSheetVisibility(true);},

o=function p(){
c('VideoChannelInteraction').registerShareSheetVisibility(false);};



return (c('React').createElement(c('UFIShareNowMenuBootloader.react'),
{endpoint:l,
endpointData:m,
onShow:n,
onHide:o}));};


function j(){'use strict';h.apply(this,arguments);}


f.exports=j;}),null);
