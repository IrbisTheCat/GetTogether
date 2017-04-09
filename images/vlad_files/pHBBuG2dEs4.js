if (self.CavalryLogger) { CavalryLogger.start_js(["4385g"]); }

/** js/components/core/XUI/Layer/Dialog/Buttons/XUIDialogCloseButton.react.js */





__d('XUIDialogCloseButton.react',['fbt','React','XUIDialogButton.react'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits






(k,c('React').Component);j=i&&i.prototype;k.prototype.



render=function(){'use strict';

return (c('React').createElement(c('XUIDialogButton.react'),babelHelpers['extends']({},
this.props,
{action:'cancel',
label:h._(["Close","b74978868bfd773a3f54dbb806d0fef3"])})));};


function k(){'use strict';i.apply(this,arguments);}


f.exports=k;}),null);

/** js/video/player/VideoWithClickPlayPause.js */





__d('VideoWithClickPlayPause',['VideoPlayerReason','logVideosClickTracking'],(function a(b,c,d,e,f,g){





function h(i){'use strict';
this.$VideoWithClickPlayPause_videoController=i;
this.$VideoWithClickPlayPause_videoNode=this.$VideoWithClickPlayPause_videoController.getVideoNode();
this.$VideoWithClickPlayPause_videoController.addListener('clickVideo',this.$VideoWithClickPlayPause_onClick.bind(this));
if(this.$VideoWithClickPlayPause_videoController.hasSeenClick())
this.$VideoWithClickPlayPause_onClick();}

h.prototype.

$VideoWithClickPlayPause_onClick=function(){'use strict';

if(this.$VideoWithClickPlayPause_videoController.isState('playing')){
if(this.$VideoWithClickPlayPause_videoController.getOption('VideoWithLiveBroadcast','isLive'))
return;

this.$VideoWithClickPlayPause_videoController.pause(c('VideoPlayerReason').USER);}else{

c('logVideosClickTracking')(this.$VideoWithClickPlayPause_videoNode);
this.$VideoWithClickPlayPause_videoController.play(c('VideoPlayerReason').USER);}};




f.exports=h;}),null);

/** js/video/player/autoplay/VideoAutoplayControllerBase.js */





__d('VideoAutoplayControllerBase',['Arbiter','DesktopHscrollUnitEventConstants','Event','VideoPlayerExperiments','VideoPlayerAbortLoadingExperiment','VideoPlayerReason','Visibility','destroyOnUnload','SubscriptionsHandler','throttle','setTimeoutAcrossTransitions','emptyFunction'],(function a(b,c,d,e,f,g){





















var h=3000;





function i(l,m){



var n=[];
return function(){
var o=Date.now();
n.unshift(o);
var p=0;


while(n[++p]+m>o);

n=n.slice(0,p);


return n.length<=l;};}



function j
(l,
m,
n){




var o=null;

return function(){var p;for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];

if(m()){


l.apply(undefined,r);
return c('emptyFunction').thatReturnsFalse;}else


if(!o)(function(){

var t=setTimeout(function(){
o=null;
l.apply(undefined,r);},
n);


o=function u(){



if(!o)
return false;

clearTimeout(t);
o=null;

return true;};})
();





return o;};}


















function k(l){'use strict';

this.$VideoAutoplayControllerBase_playingVideoUnit=null;
this.$VideoAutoplayControllerBase_hiddenVideoUnit=null;
this.$VideoAutoplayControllerBase_videoUnits=[];
this.$VideoAutoplayControllerBase_autoplayInterval=l;
this.$VideoAutoplayControllerBase_scrollListener=null;
this.$VideoAutoplayControllerBase_subscriptions=new (c('SubscriptionsHandler'))();

c('destroyOnUnload')(function(){
this.$VideoAutoplayControllerBase_videoUnits=[];
this.$VideoAutoplayControllerBase_playingVideoUnit=null;
if(this.$VideoAutoplayControllerBase_scrollListener){
this.$VideoAutoplayControllerBase_scrollListener.remove();
this.$VideoAutoplayControllerBase_scrollListener=null;}

this.$VideoAutoplayControllerBase_subscriptions.release();}.
bind(this));

if(c('VideoPlayerExperiments').autoplayMaxCallsPerWindow)
this.$VideoAutoplayControllerBase_throttledPlay=j
(function(m){
var n=this.$VideoAutoplayControllerBase_playingVideoUnit;
if(n)
n.playWithoutUnmute(m);}.

bind(this),
i
(c('VideoPlayerExperiments').autoplayMaxCallsPerWindow,
c('VideoPlayerExperiments').autoplayThrottleWindow),

c('VideoPlayerExperiments').autoplayThrottleDelay);



this.$VideoAutoplayControllerBase_cancelThrottledPlayRequest=c('emptyFunction').thatReturnsFalse;}
k.prototype.

getVideoUnits=function(){'use strict';
return this.$VideoAutoplayControllerBase_videoUnits;};
k.prototype.

setVideoUnits=function(l){'use strict';
this.$VideoAutoplayControllerBase_videoUnits=l;};
k.prototype.

addVideoUnit=function(l){'use strict';
this.$VideoAutoplayControllerBase_videoUnits.push(l);};
k.prototype.

getPlayingVideoUnit=function(){'use strict';
return this.$VideoAutoplayControllerBase_playingVideoUnit;};
k.prototype.

setPlayingVideoUnit=function(l){'use strict';
this.$VideoAutoplayControllerBase_playingVideoUnit=l;
if(this.$VideoAutoplayControllerBase_playingVideoUnit)
this.setupPlayingVideoUnitSubscriptions();};

k.prototype.

playVideo=
function(l,
m){
'use strict';


if(c('VideoPlayerExperiments').disableAutoplayForInactiveTab&&
c('Visibility').isHidden()){

this.$VideoAutoplayControllerBase_hiddenVideoUnit=l;
return;}

this.setPlayingVideoUnit(l);
if(this.$VideoAutoplayControllerBase_playingVideoUnit){
var n=this.$VideoAutoplayControllerBase_throttledPlay;
if(n){
this.$VideoAutoplayControllerBase_cancelThrottledPlayRequest=n.call(this,m);}else 


this.$VideoAutoplayControllerBase_playingVideoUnit.playWithoutUnmute(m);}};


k.prototype.

setupPlayingVideoUnitSubscriptions=function(){'use strict';
throw new Error('Should be overridden');};
k.prototype.



addSubscriberVideoUnit=function(){'use strict';
if(!this.getVideoUnits().length){

this.$VideoAutoplayControllerBase_subscriptions.addSubscriptions
(c('Event').listen(window,'resize',this.updateAutoplay.bind(this)),
c('Event').listen(window,'blur',this.$VideoAutoplayControllerBase_onPageHidden.bind(this)),
c('Event').listen(window,'focus',this.$VideoAutoplayControllerBase_onPageVisible.bind(this)),
c('Visibility').addListener
(c('Visibility').HIDDEN,
this.$VideoAutoplayControllerBase_onPageHidden.bind(this)),

c('Visibility').addListener
(c('Visibility').VISIBLE,
this.$VideoAutoplayControllerBase_onPageVisible.bind(this)),

c('Arbiter').subscribe
(c('DesktopHscrollUnitEventConstants').HSCROLL_ITEM_SHOWN_EVENT,
this.updateAutoplay.bind(this)));


if(!this.$VideoAutoplayControllerBase_hasWindowScrollListener())



this.$VideoAutoplayControllerBase_attachWindowScrollListener();}};


k.prototype.

$VideoAutoplayControllerBase_onPageHidden=function(){'use strict';
if(!this.$VideoAutoplayControllerBase_hiddenVideoUnit){
this.$VideoAutoplayControllerBase_hiddenVideoUnit=this.getPlayingVideoUnit();
this.pausePlayingVideo(c('VideoPlayerReason').PAGE_VISIBILITY);}};

k.prototype.

$VideoAutoplayControllerBase_onPageVisible=function(){'use strict';
if(this.$VideoAutoplayControllerBase_hiddenVideoUnit){
this.playVideo(this.$VideoAutoplayControllerBase_hiddenVideoUnit,c('VideoPlayerReason').PAGE_VISIBILITY);
this.$VideoAutoplayControllerBase_hiddenVideoUnit=null;}};

k.prototype.

$VideoAutoplayControllerBase_attachWindowScrollListener=function(){'use strict';
if(this.$VideoAutoplayControllerBase_scrollListener)
this.$VideoAutoplayControllerBase_scrollListener.remove();

this.$VideoAutoplayControllerBase_scrollListener=c('Event').listen
(window,
'scroll',
c('throttle')(this.updateAutoplay.bind(this),this.$VideoAutoplayControllerBase_autoplayInterval));};

k.prototype.

$VideoAutoplayControllerBase_hasWindowScrollListener=function(){'use strict';
return !!this.$VideoAutoplayControllerBase_scrollListener;};
k.prototype.

getClosestVideoUnits=function(l){'use strict';
return this.$VideoAutoplayControllerBase_videoUnits.filter

(function(m){return m.getDistanceToViewport()>=0;}).
sort

(function(m,n){
return (m.getDistanceToViewport()-n.getDistanceToViewport());}).

slice(0,l);};
k.prototype.

getVisibleUnits=function(){'use strict';
var l=[];

this.$VideoAutoplayControllerBase_videoUnits.forEach(function(m){
if(m.isVisible()){
l.push(m);

if(!m.wasVisible){
m.wasVisible=true;
m.logDisplayed();}}else 


m.wasVisible=false;});



return l;};
k.prototype.


pausePlayingVideo=function(l){'use strict';
var m=this.$VideoAutoplayControllerBase_playingVideoUnit;
if(m){
if(!this.$VideoAutoplayControllerBase_cancelThrottledPlayRequest())

m.pause(l);

if(c('VideoPlayerAbortLoadingExperiment').canAbort&&
typeof m.getIsInChannel==='function'&&
!m.getIsInChannel())

c('setTimeoutAcrossTransitions')(function(){
if(!m.isState('playing')&&
typeof m.abortLoading==='function')
m.abortLoading();},

h);


this.$VideoAutoplayControllerBase_playingVideoUnit=null;}};

k.prototype.

updateAutoplay=function(){'use strict';
throw new Error('Should be overridden');};



f.exports=k;}),null);

/** shared/core/Network.js */















__d('Network',['mixInEventEmitter'],(function a(b,c,d,e,f,g){









var h=true,

i=b.navigator.connection,

j=
{0:'unknown',
1:'ethernet',
2:'wifi',
3:'2g',
4:'3g'};












function k(){
return h;}





function l(q){
if(q==h)
return;


h=q;


p.emit(q?'online':'offline');}






function m(){
return i?i.bandwidth:h?Infinity:0;}






function n(){
return i?i.metered:false;}










function o(){
var q=i?String(i.type):'0';
return j[q]||q;}


var p=
{getBandwidth:m,
getType:o,
isMetered:n,
isOnline:k,
setOnline:l};


c('mixInEventEmitter')(p,{online:true,offline:true});



if(b.addEventListener){
b.addEventListener('online',l.bind(null,true));
b.addEventListener('offline',l.bind(null,false));}else
if(b.attachEvent){
b.attachEvent('online',l.bind(null,true));
b.attachEvent('offline',l.bind(null,false));}


f.exports=p;}),null);

/** www/__virtual__/x/XVideoAutoplayNuxAsyncController.js */



__d("XVideoAutoplayNuxAsyncController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/video\/autoplay\/nux\/",{});}),

null);

/** www/__virtual__/x/XVideoAutoplayNuxDismissAsyncController.js */



__d("XVideoAutoplayNuxDismissAsyncController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/video\/autoplay\/nux\/dismiss\/",{});}),

null);

/** www/__virtual__/x/XVideoAutoplayNuxLogViewAsyncController.js */



__d("XVideoAutoplayNuxLogViewAsyncController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/video\/autoplay\/nux\/log\/view\/",{});}),

null);

/** js/video/player/autoplay/VideoAutoplayControllerX.js */





__d('VideoAutoplayControllerX',['csx','AsyncRequest','DOM','Event','Network','ifRequired','Run','SubscriptionsHandler','VideoAutoplayControllerBase','VideoPlayerExperiments','VideoPlayerPreloadExperiment','VideoPlayerReason','XVideoAutoplayNuxAsyncController','XVideoAutoplayNuxDismissAsyncController','XVideoAutoplayNuxLogViewAsyncController','destroyOnUnload','getViewportDimensions'],(function a(b,c,d,e,f,g,h){var i,j,




















k=null,

l=500,

m=false;
function n(){
return !c('VideoPlayerExperiments').delayAutoplayUntilAfterLoad||m;}
i=babelHelpers.inherits

(o,c('VideoAutoplayControllerBase'));j=i&&i.prototype;

function o(){'use strict';
j.constructor.call(this,l);
this.$VideoAutoplayControllerX_playingVideoUnitSubscriptions=new (c('SubscriptionsHandler'))();
this.$VideoAutoplayControllerX_videoUnitsPlayingWithSoundSubscriptions=new (c('SubscriptionsHandler'))();
this.$VideoAutoplayControllerX_shouldAutoplay=true;
this.$VideoAutoplayControllerX_shouldAutoplayWhenOnline=true;
this.$VideoAutoplayControllerX_autoplayNuxRoot=null;
this.$VideoAutoplayControllerX_autoplayNux=null;
this.$VideoAutoplayControllerX_shouldShowAutoplayNUX=false;
this.$VideoAutoplayControllerX_currentVideoPlayingWithAudio=null;
this.$VideoAutoplayControllerX_existsTopmostVideo=false;
this.$VideoAutoplayControllerX_topmostVideoStreamSizeConfigured=false;
this.$VideoAutoplayControllerX_topmostVideoPlayedSuccessfully=false;

var p=
c('XVideoAutoplayNuxAsyncController').getURIBuilder().getURI();
new (c('AsyncRequest'))(p).setAllowCrossPageTransition().send();

c('destroyOnUnload')(function(){
this.$VideoAutoplayControllerX_cleanup();
if(this===k)
k=null;}.

bind(this));

c('Run').onAfterLoad(function(){
m=true;
if(c('VideoPlayerExperiments').delayAutoplayUntilAfterLoad)
if(k)
k.updateAutoplay();});}



o.

registerVideoUnit=function(p){'use strict';
if(k==null)
k=new o();

k.addSubscriberVideoUnit();
k.addVideoUnit(p);
k.$VideoAutoplayControllerX_setupPlayingWithSoundSubscription(p);

k.$VideoAutoplayControllerX_updateShouldAutoplay();


if(p.isVisible()&&n())
k.updateAutoplay();


if(k.shouldRestoreAllSubsequentStreamBufferSizes())


k.restoreStreamBufferSize();};


o.

setShouldAutoplay=function(p){'use strict';
if(k==null)
k=new o();


k.$VideoAutoplayControllerX_shouldAutoplay=p;
k.$VideoAutoplayControllerX_shouldAutoplayWhenOnline=p;
k.updateAutoplay();};
o.prototype.

$VideoAutoplayControllerX_cleanup=function(){'use strict';
this.$VideoAutoplayControllerX_playingVideoUnitSubscriptions.release();
this.$VideoAutoplayControllerX_videoUnitsPlayingWithSoundSubscriptions.release();};
o.


setAutoplayNux=
function(p,
q){
'use strict';
if(k==null)
return;

k.$VideoAutoplayControllerX_autoplayNuxRoot=p;
k.$VideoAutoplayControllerX_autoplayNux=q;
k.$VideoAutoplayControllerX_shouldShowAutoplayNUX=true;

var r=c('DOM').find
(q.getContentRoot(),
"._5cqr");

c('Event').listen(r,'click',function(){
k.$VideoAutoplayControllerX_dismissAutoplayNux();});


var s=c('DOM').scry
(q.getContentRoot(),
"._36gl")[
0];
if(s)
c('Event').listen(s,'click',function(){
k.$VideoAutoplayControllerX_dismissAutoplayNux();});};


o.prototype.

$VideoAutoplayControllerX_dismissAutoplayNux=function(){'use strict';
this.$VideoAutoplayControllerX_autoplayNux.hide();
this.$VideoAutoplayControllerX_shouldShowAutoplayNUX=false;

var p=c('XVideoAutoplayNuxDismissAsyncController').
getURIBuilder().
getURI();
new (c('AsyncRequest'))(p).
setAllowCrossPageTransition().
send();};
o.prototype.

setupPlayingVideoUnitSubscriptions=function(){'use strict';
if(this.getPlayingVideoUnit().addListener){
this.$VideoAutoplayControllerX_playingVideoUnitSubscriptions.release();
this.$VideoAutoplayControllerX_playingVideoUnitSubscriptions.engage();

if(!this.getPlayingVideoUnit().isLooping())
this.$VideoAutoplayControllerX_playingVideoUnitSubscriptions.addSubscriptions
(this.getPlayingVideoUnit().addListener
('finishPlayback',
function(){
this.setPlayingVideoUnit(null);}.
bind(this)));




this.$VideoAutoplayControllerX_playingVideoUnitSubscriptions.addSubscriptions
(this.getPlayingVideoUnit().addListener
('turnOffAutoplay',
function(){
this.setPlayingVideoUnit(null);}.
bind(this)),

this.getPlayingVideoUnit().addListener
('pausePlayback',
function(){
this.$VideoAutoplayControllerX_updateShouldAutoplay();}.
bind(this)),

this.getPlayingVideoUnit().addListener
('finishPlayback',
function(){
this.$VideoAutoplayControllerX_updateShouldAutoplay();}.
bind(this)),

c('Network').addListener
('online',
function(){
this.$VideoAutoplayControllerX_updateShouldAutoplay();}.
bind(this)),

c('Network').addListener
('offline',
function(){
this.$VideoAutoplayControllerX_updateShouldAutoplay();}.
bind(this)));}};



o.prototype.

$VideoAutoplayControllerX_updateShouldAutoplay=function(){'use strict';
if(c('VideoPlayerExperiments').webVideosBlockAutoplayWhenOffline)
if(c('Network').isOnline()){
this.$VideoAutoplayControllerX_shouldAutoplay=this.$VideoAutoplayControllerX_shouldAutoplayWhenOnline;}else{


this.$VideoAutoplayControllerX_shouldAutoplayWhenOnline=this.$VideoAutoplayControllerX_shouldAutoplay;
this.$VideoAutoplayControllerX_shouldAutoplay=false;
return;}



var p=this.getVideoUnits();
for(var q=0;q<p.length;q++){
var r=p[q].getVideoPlayerController();
if(r!==null){
if(r.getDataInsertionPosition()==='0'){
this.$VideoAutoplayControllerX_existsTopmostVideo=true;
if(this.$VideoAutoplayControllerX_topmostVideoStreamSizeConfigured===false){
r.restoreStreamBufferSize();
r.once('beginPlayback',function(){

this.$VideoAutoplayControllerX_topmostVideoPlayedSuccessfully=true;
this.restoreStreamBufferSize();}.
bind(this));
this.$VideoAutoplayControllerX_topmostVideoStreamSizeConfigured=true;}}


r.updateAutoplayRestrained();}}



if(!this.$VideoAutoplayControllerX_existsTopmostVideo)

this.restoreStreamBufferSize();};

o.prototype.

shouldRestoreAllSubsequentStreamBufferSizes=function(){'use strict';
if(!this.$VideoAutoplayControllerX_existsTopmostVideo)
return true;

return this.$VideoAutoplayControllerX_topmostVideoPlayedSuccessfully;};
o.prototype.

restoreStreamBufferSize=function(){'use strict';
var p=this.getVideoUnits();
for(var q=0;q<p.length;q++){
var r=p[q].getVideoPlayerController();
if(r!==null)
r.restoreStreamBufferSize();}};


o.prototype.

$VideoAutoplayControllerX_setupPlayingWithSoundSubscription=function(p){'use strict';
if(!p.addListener)
return;


var q=function(){
var r=p.getVideoPlayerController();
if(!r.isMuted()&&r.isState('playing')){
if(this.$VideoAutoplayControllerX_currentVideoPlayingWithAudio&&
this.$VideoAutoplayControllerX_currentVideoPlayingWithAudio!==p){
var s=
this.$VideoAutoplayControllerX_currentVideoPlayingWithAudio.getVideoPlayerController(),
t=s.getOption
('VideoWithLiveBroadcast',
'isLive');


if(t){
s.mute();}else 

s.pause(c('VideoPlayerReason').USER);}



this.$VideoAutoplayControllerX_currentVideoPlayingWithAudio=p;}}.

bind(this);

this.$VideoAutoplayControllerX_videoUnitsPlayingWithSoundSubscriptions.addSubscriptions
(p.addListener('beginPlayback',q),
p.addListener('changeVolume',q),
p.addListener('unmuteVideo',q));};

o.prototype.

showAutoplayNUX=function(p){'use strict';
if(this.$VideoAutoplayControllerX_autoplayNux&&!this.$VideoAutoplayControllerX_autoplayNux.isShown()){
var q=p.getVideoPlayerController().getRootNode();
c('DOM').prependContent(q,this.$VideoAutoplayControllerX_autoplayNuxRoot);
this.$VideoAutoplayControllerX_autoplayNux.show();

var r=c('XVideoAutoplayNuxLogViewAsyncController').
getURIBuilder().
getURI();
new (c('AsyncRequest'))(r).
setAllowCrossPageTransition().
send();}


this.$VideoAutoplayControllerX_shouldShowAutoplayNUX=false;};
o.

getChannelVideos=function(){'use strict';
if(k)
return k.
getVideoUnits().
filter(function(p){return p.getIsInChannel();});

return null;};
o.prototype.

updateAutoplay=function(){'use strict';
if(!this.$VideoAutoplayControllerX_shouldAutoplay){
this.pausePlayingVideo(c('VideoPlayerReason').AUTOPLAY);
return;}


var p=this.getVisibleUnits();

this.getClosestVideoUnits
(c('VideoPlayerPreloadExperiment').preloadVideosCount).
forEach(function(w){return w.preload();});

var q=p.length,
r=null;


if(q==1){

r=p[0];
r=r.isAutoplayable()?r:null;}else
if(q>1){
var s=
c('getViewportDimensions')().height/2;

p.forEach(function(w){
if(!w.isAutoplayable())
return;


var x=w.getDOMPosition(),
y=
x.y+x.height/2,
z=
Math.abs(y-s);

w.playPriority=z;

if(!r||
w.playPriority<r.playPriority)
r=w;});}




var t=this.getPlayingVideoUnit();
if(t){
if(r!=t){



var u=null;

if('getCurentUnitVideoController' in t){
u=t.getCurentUnitVideoController();}else 

u=t.getVideoPlayerController();


if(u)
u.setSmartBufferAdjustmentEnabled(false);


if(r){
var v=null;

if('getCurentUnitVideoController' in r){
v=r.getCurentUnitVideoController();}else 

v=r.getVideoPlayerController();


if(v)
v.setSmartBufferAdjustmentEnabled(true);}



this.pausePlayingVideo(c('VideoPlayerReason').AUTOPLAY);
this.playVideo(r,c('VideoPlayerReason').AUTOPLAY);
if(this.$VideoAutoplayControllerX_shouldShowAutoplayNUX)
this.showAutoplayNUX(r);}}else 



if(r){
this.playVideo(r,c('VideoPlayerReason').AUTOPLAY);
if(this.$VideoAutoplayControllerX_shouldShowAutoplayNUX)
this.showAutoplayNUX(r);}};







f.exports=o;}),null);

/** js/video/player/autoplay/VideoAutoplayPlayerBase.js */





__d('VideoAutoplayPlayerBase',['EventEmitter'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits







(j,c('EventEmitter'));i=h&&h.prototype;function j(){var k,l;'use strict';for(var m=arguments.length,n=Array(m),o=0;o<m;o++)n[o]=arguments[o];return l=(k=i.constructor).call.apply(k,[this].concat(n)),this.
wasVisible=false,l;}j.prototype.

isVisible=function(){'use strict';
throw new Error('Should be overridden');};
j.prototype.

getDistanceToViewport=function(){'use strict';
throw new Error('Should be overridden');};
j.prototype.

getVideoPlayerController=function(){'use strict';
return null;};
j.prototype.

logDisplayed=function(){'use strict';
throw new Error('Should be overridden');};
j.prototype.

playWithoutUnmute=function(k){'use strict';
throw new Error('Should be overridden');};
j.prototype.

pause=function(k){'use strict';
throw new Error('Should be overridden');};
j.prototype.

isAutoplayable=function(){'use strict';
throw new Error('Should be overridden');};
j.prototype.

getDOMPosition=function(){'use strict';
throw new Error('Should be overridden');};
j.prototype.

isLooping=function(){'use strict';
throw new Error('Should be overridden');};
j.prototype.

isState=function(k){'use strict';
throw new Error('Should be overridden');};




f.exports=j;}),null);

/** shared/node_modules/fbjs/lib/CSSCore.js */





__d("fbjs/lib/CSSCore",["CSSCore"],(function a(b,c,d,e,f,g){
'use strict';

f.exports=c("CSSCore");}),null);

/** shared/node_modules/react-dom/lib/getVendorPrefixedEventName.js */




__d("react-dom/lib/getVendorPrefixedEventName",["getVendorPrefixedEventName"],(function a(b,c,d,e,f,g){

'use strict';

f.exports=c("getVendorPrefixedEventName");}),null);

/** shared/react_art_contrib/Sprite.art.js */






__d('Sprite.art',['getStyleProperty'],(function a(b,c,d,e,f,g){

'use strict';



var h={},
i=null,

j=/url\((['"])?([^\1]*)\1\)/;


function k(n){
var o=n.match(j);
return o?o[2]:null;}



function l(n){
return parseFloat(n)||null;}



function m(n){
var o=n?n.split(' '):[];
if(o.length!=2)
return [null,null];


return [l(o[0]),l(o[1])];}









f.exports=






{get:function n(o){
if(o in h)
return h[o];


if(!i)
i=document.createElement('i');


i.className=o;



document.body.appendChild(i);

var p=c('getStyleProperty')(i,'backgroundImage'),
q=c('getStyleProperty')(i,'backgroundSize'),
r=c('getStyleProperty')(i,'backgroundPosition'),
s=c('getStyleProperty')(i,'width'),
t=c('getStyleProperty')(i,'height');




document.body.removeChild(i);

return h[o]=
{boxSize:[l(s),l(t)],
imageSize:m(q),
offset:m(r),
uri:k(p)};}};}),

null);

/** shared/react_contrib/transitions/ReactTransitionEvents.js */









__d('ReactTransitionEvents',['fbjs/lib/ExecutionEnvironment','react-dom/lib/getVendorPrefixedEventName'],(function a(b,c,d,e,f,g){

'use strict';





var h=[];

function i(){
var m=c('react-dom/lib/getVendorPrefixedEventName')('animationend'),
n=c('react-dom/lib/getVendorPrefixedEventName')('transitionend');

if(m)
h.push(m);


if(n)
h.push(n);}



if(c('fbjs/lib/ExecutionEnvironment').canUseDOM)
i();







function j(m,n,o){
m.addEventListener(n,o,false);}


function k(m,n,o){
m.removeEventListener(n,o,false);}


var l=
{addEndEventListener:function m(n,o){
if(h.length===0){


window.setTimeout(o,0);
return;}

h.forEach(function(p){
j(n,p,o);});},



removeEndEventListener:function m(n,o){
if(h.length===0)
return;

h.forEach(function(p){
k(n,p,o);});}};




f.exports=l;}),null);

/** shared/react_contrib/transitions/ReactCSSTransitionGroupChild.js */









__d('ReactCSSTransitionGroupChild',['React','ReactDOM','fbjs/lib/CSSCore','ReactTransitionEvents'],(function a(b,c,d,e,f,g){

'use strict';







var h=17,

i=c('React').createClass
({displayName:'ReactCSSTransitionGroupChild',

propTypes:
{name:c('React').PropTypes.oneOfType
([c('React').PropTypes.string,
c('React').PropTypes.shape
({enter:c('React').PropTypes.string,
leave:c('React').PropTypes.string,
active:c('React').PropTypes.string}),

c('React').PropTypes.shape
({enter:c('React').PropTypes.string,
enterActive:c('React').PropTypes.string,
leave:c('React').PropTypes.string,
leaveActive:c('React').PropTypes.string,
appear:c('React').PropTypes.string,
appearActive:c('React').PropTypes.string})]).

isRequired,




appear:c('React').PropTypes.bool,
enter:c('React').PropTypes.bool,
leave:c('React').PropTypes.bool,
appearTimeout:c('React').PropTypes.number,
enterTimeout:c('React').PropTypes.number,
leaveTimeout:c('React').PropTypes.number},


transition:function j(k,l,m){
var n=c('ReactDOM').findDOMNode(this);

if(!n){
if(l)
l();

return;}


var o=this.props.name[k]||
this.props.name+'-'+k,
p=this.props.name[k+'Active']||
o+'-active',
q=null,

r=function s(t){
if(t&&t.target!==n)
return;


clearTimeout(q);

c('fbjs/lib/CSSCore').removeClass(n,o);
c('fbjs/lib/CSSCore').removeClass(n,p);

c('ReactTransitionEvents').removeEndEventListener(n,s);



if(l)
l();};



c('fbjs/lib/CSSCore').addClass(n,o);


this.queueClassAndNode(p,n);


if(m){

q=setTimeout(r,m);
this.transitionTimeouts.push(q);}else 


c('ReactTransitionEvents').addEndEventListener(n,r);},



queueClassAndNode:function j(k,l){
this.classNameAndNodeQueue.push
({className:k,
node:l});


if(!this.timeout)
this.timeout=setTimeout(this.flushClassNameAndNodeQueue,h);},



flushClassNameAndNodeQueue:function j(){
if(this.isMounted())
this.classNameAndNodeQueue.forEach(function(k){
c('fbjs/lib/CSSCore').addClass(k.node,k.className);});


this.classNameAndNodeQueue.length=0;
this.timeout=null;},


componentWillMount:function j(){
this.classNameAndNodeQueue=[];
this.transitionTimeouts=[];},


componentWillUnmount:function j(){
if(this.timeout)
clearTimeout(this.timeout);

this.transitionTimeouts.forEach(function(k){
clearTimeout(k);});


this.classNameAndNodeQueue.length=0;},


componentWillAppear:function j(k){
if(this.props.appear){
this.transition('appear',k,this.props.appearTimeout);}else 

k();},



componentWillEnter:function j(k){
if(this.props.enter){
this.transition('enter',k,this.props.enterTimeout);}else 

k();},



componentWillLeave:function j(k){
if(this.props.leave){
this.transition('leave',k,this.props.leaveTimeout);}else 

k();},



render:function j(){
return c('React').Children.only(this.props.children);}});



f.exports=i;}),null);

/** shared/react_contrib/transitions/ReactTransitionChildMapping.js */









__d('ReactTransitionChildMapping',['flattenChildren'],(function a(b,c,d,e,f,g){

'use strict';



var h=








{getChildMapping:function i(j,k){
if(!j)
return j;






return c('flattenChildren')(j);},



















mergeChildMappings:function i(j,k){
j=j||{};
k=k||{};

function l(t){
if(Object.prototype.hasOwnProperty.call(k,t)){
return k[t];}else 

return j[t];}





var m={},

n=[];
for(var o in j)
if(Object.prototype.hasOwnProperty.call(k,o)){
if(n.length){
m[o]=n;
n=[];}}else 


n.push(o);



var p,
q={};
for(var r in k){
if(Object.prototype.hasOwnProperty.call(m,r))
for(p=0;p<m[r].length;p++){
var s=m[r][p];
q[m[r][p]]=l
(s);}



q[r]=l(r);}



for(p=0;p<n.length;p++)
q[n[p]]=l(n[p]);


return q;}};



f.exports=h;}),null);

/** shared/react_contrib/transitions/ReactTransitionGroup.js */









__d('ReactTransitionGroup',['React','ReactTransitionChildMapping','fbjs/lib/emptyFunction'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits











(j,c('React').Component);i=h&&h.prototype;function j(){var k,l;for(var m=arguments.length,n=Array(m),o=0;o<m;o++)n[o]=arguments[o];return l=(k=i.constructor).call.apply(k,[this].concat(n)),this.












state=

{children:c('ReactTransitionChildMapping').getChildMapping(this.props.children)},this.



































































performAppear=function(p){
this.currentlyTransitioningKeys[p]=true;

var q=this.refs[p];

if(q.componentWillAppear){
q.componentWillAppear(this.$ReactTransitionGroup_handleDoneAppearing.bind(this,p));}else 

this.$ReactTransitionGroup_handleDoneAppearing(p);}.

bind(this),this.

$ReactTransitionGroup_handleDoneAppearing=function(p){
var q=this.refs[p];
if(q.componentDidAppear)
q.componentDidAppear();


delete this.currentlyTransitioningKeys[p];

var r=c('ReactTransitionChildMapping').getChildMapping
(this.props.children);


if(!r||!Object.prototype.hasOwnProperty.call(r,p))

this.performLeave(p);}.

bind(this),this.

performEnter=function(p){
this.currentlyTransitioningKeys[p]=true;

var q=this.refs[p];

if(q.componentWillEnter){
q.componentWillEnter(this.$ReactTransitionGroup_handleDoneEntering.bind(this,p));}else 

this.$ReactTransitionGroup_handleDoneEntering(p);}.

bind(this),this.

$ReactTransitionGroup_handleDoneEntering=function(p){
var q=this.refs[p];
if(q.componentDidEnter)
q.componentDidEnter();


delete this.currentlyTransitioningKeys[p];

var r=c('ReactTransitionChildMapping').getChildMapping
(this.props.children);


if(!r||!Object.prototype.hasOwnProperty.call(r,p))

this.performLeave(p);}.

bind(this),this.

performLeave=function(p){
this.currentlyTransitioningKeys[p]=true;

var q=this.refs[p];
if(q.componentWillLeave){
q.componentWillLeave(this.$ReactTransitionGroup_handleDoneLeaving.bind(this,p));}else 




this.$ReactTransitionGroup_handleDoneLeaving(p);}.

bind(this),this.

$ReactTransitionGroup_handleDoneLeaving=function(p){
var q=this.refs[p];

if(q.componentDidLeave)
q.componentDidLeave();


delete this.currentlyTransitioningKeys[p];

var r=c('ReactTransitionChildMapping').getChildMapping
(this.props.children);


if(r&&Object.prototype.hasOwnProperty.call(r,p)){

this.performEnter(p);}else 

this.setState(function(s){
var t=Object.assign({},s.children);
delete t[p];
return {children:t};});}.


bind(this),l;}j.prototype.componentWillMount=function(){this.currentlyTransitioningKeys={};this.keysToEnter=[];this.keysToLeave=[];};j.prototype.componentDidMount=function(){var k=this.state.children;for(var l in k)if(k[l])this.performAppear(l);};j.prototype.componentWillReceiveProps=function(k){var l=c('ReactTransitionChildMapping').getChildMapping(k.children),m=this.state.children;this.setState({children:c('ReactTransitionChildMapping').mergeChildMappings(m,l)});var n;for(n in l){var o=m&&Object.prototype.hasOwnProperty.call(m,n);if(l[n]&&!o&&!this.currentlyTransitioningKeys[n])this.keysToEnter.push(n);}for(n in m){var p=l&&Object.prototype.hasOwnProperty.call(l,n);if(m[n]&&!p&&!this.currentlyTransitioningKeys[n])this.keysToLeave.push(n);}};j.prototype.componentDidUpdate=function(){var k=this.keysToEnter;this.keysToEnter=[];k.forEach(this.performEnter);var l=this.keysToLeave;this.keysToLeave=[];l.forEach(this.performLeave);};j.prototype.

render=function(){


var k=[];
for(var l in this.state.children){
var m=this.state.children[l];
if(m)





k.push
(c('React').cloneElement(this.props.childFactory(m),
{ref:l,
key:l}));}






var n=Object.assign({},this.props);
delete n.transitionLeave;
delete n.transitionName;
delete n.transitionAppear;
delete n.transitionEnter;
delete n.childFactory;
delete n.transitionLeaveTimeout;
delete n.transitionEnterTimeout;
delete n.transitionAppearTimeout;
delete n.component;

return c('React').createElement(this.props.component,n,k);};
j.displayName='ReactTransitionGroup';j.propTypes={component:c('React').PropTypes.any,childFactory:c('React').PropTypes.func};j.defaultProps={component:'span',childFactory:c('fbjs/lib/emptyFunction').thatReturnsArgument};


f.exports=j;}),null);

/** shared/react_contrib/transitions/ReactCSSTransitionGroup.js */










__d('ReactCSSTransitionGroup',['React','ReactTransitionGroup','ReactCSSTransitionGroupChild'],(function a(b,c,d,e,f,g){

'use strict';var h,i;






function j(l){
var m='transition'+l+'Timeout',
n='transition'+l;

return function(o){

if(o[n])

if(o[m]==null){
return new Error
(m+
" wasn't supplied to ReactCSSTransitionGroup: "+
"this can cause unreliable animations and won't be supported in "+
'a future version of React. See '+
'https://fb.me/react-animation-transition-group-timeout for more '+
'information.');}else



if(typeof o[m]!=='number')
return new Error
(m+' must be a number (in milliseconds)');};}




h=babelHelpers.inherits






(k,c('React').Component);i=h&&h.prototype;function k(){var l,m;for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.



















$ReactCSSTransitionGroup_wrapChild=function(q){



return c('React').createElement(c('ReactCSSTransitionGroupChild'),


{name:this.props.transitionName,
appear:this.props.transitionAppear,
enter:this.props.transitionEnter,
leave:this.props.transitionLeave,
appearTimeout:this.props.transitionAppearTimeout,
enterTimeout:this.props.transitionEnterTimeout,
leaveTimeout:this.props.transitionLeaveTimeout},

q);}.

bind(this),m;}k.prototype.

render=function(){
return c('React').createElement(c('ReactTransitionGroup'),

Object.assign({},this.props,{childFactory:this.$ReactCSSTransitionGroup_wrapChild}));};

k.displayName='ReactCSSTransitionGroup';k.propTypes={transitionName:c('ReactCSSTransitionGroupChild').propTypes.name,transitionAppear:c('React').PropTypes.bool,transitionEnter:c('React').PropTypes.bool,transitionLeave:c('React').PropTypes.bool,transitionAppearTimeout:j('Appear'),transitionEnterTimeout:j('Enter'),transitionLeaveTimeout:j('Leave')};k.defaultProps={transitionAppear:false,transitionEnter:true,transitionLeave:true};


f.exports=k;}),null);
