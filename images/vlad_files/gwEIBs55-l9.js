if (self.CavalryLogger) { CavalryLogger.start_js(["D9k4N"]); }

/** __static_js_modules__/fullviewtype.js */




__d("FullViewType",[],(function a(b,c,d,e,f,g){

f.exports={ENTIRE_UNIT:1};}),

null);

/** __static_js_modules__/visibilityunittype.js */




__d("VisibilityUnitType",[],(function a(b,c,d,e,f,g){

f.exports={FEED_UNIT:"feed_unit",VIEWPORT:"viewport"};}),

null);

/** js/games/tracking/GamesGogglesSwitch.js */






__d("GamesGogglesSwitch",[],(function a(b,c,d,e,f,g){

var h=false,

i=

{enable:function j(){
h=true;},


isEnabled:function j(){
return h;}};



f.exports=i;}),null);

/** js/logging/VisibilityTrackingHelper.js */





__d('VisibilityTrackingHelper',['Arbiter','DesktopHscrollUnitEventConstants','getViewportDimensions','Event'],(function a(b,c,d,e,f,g){






var h=
{getEventListeners:function i(j){

return [c('Event').listen(document,'DOMContentLoaded',j),
c('Event').listen(window,'scroll',j),
c('Event').listen(window,'resize',j),
c('Arbiter').subscribe
(c('DesktopHscrollUnitEventConstants').HSCROLL_ITEM_SHOWN_EVENT,
j)];},




getViewportInfo:function i(){
return c('getViewportDimensions')();}};



f.exports=h;}),null);

/** shared/visibility_tracking/VisibilityTracking.js */





__d('VisibilityTracking',['Banzai','BrowseClientEventLogger','DataAttributeUtils','ErrorUtils','ScriptPath','SubscriptionsHandler','Visibility','VisibilityTrackingHelper','collectDataAttributes','getElementPosition','pageID','throttle'],(function a(b,c,d,e,f,g){








































var h='visibility_tracking',
i='[data-vistracking]',
j=500,
k=50,
l=50,
m=50,
n=50,

















o=0;



function p(q){'use strict';
q=q||{};
if(!q.bypass_banzai_check&&
!c('Banzai').isEnabled(h))
return;


this.visibleElementInfo={};
this.getDataFromConfig(q);

c('Visibility').addListener
(c('Visibility').VISIBLE,
c('ErrorUtils').guard
(function(){return this.fireEvent('browser');}.bind(this),
'VisibilityTracking:visible',
this));


c('Visibility').addListener
(c('Visibility').HIDDEN,
c('ErrorUtils').guard
(function(){return this.clearAllVisibleElements('browser');}.bind(this),
'VisibilityTracking:hidden',
this));


c('ScriptPath').subscribe
(c('ErrorUtils').guard
(function(){return this.updateVisibleElements();}.bind(this),
'VisibilityTracking:scriptPath',
this));


c('Banzai').subscribe
(c('Banzai').SHUTDOWN,
c('ErrorUtils').guard
(function(){return this.onUnload();}.bind(this),
'VisibilityTracking:banzaiShutdown',
this));



this.fireEventCallback=c('throttle').acrossTransitions
(c('ErrorUtils').guard
(function(event){return this.fireEvent(event);}.bind(this),
'VisibilityTracking:fireEventCallback',
this),

this.timeout,
this);

this.listeners=new (c('SubscriptionsHandler'))();
c('VisibilityTrackingHelper').getEventListeners
(function(){return this.fireEventCallback();}.bind(this)).
forEach
(function(r){
this.listeners.addSubscriptions(r);},

this);


if(this.extraInit)
c('ErrorUtils').applyWithGuard(this.extraInit.bind(this));}

p.prototype.

getDataFromConfig=function(q){'use strict';
this.config=q;
this.root=q.root||document.documentElement;
this.selector=q.selector||i;
this.timeout=
typeof q.timeout!=='undefined'?
q.timeout:
j;
this.minOffsetVisibleFromBottom=
typeof q.minOffsetVisibleFromBottom!=='undefined'?
q.minOffsetVisibleFromBottom:
k;
this.minOffsetVisibleFromTop=
typeof q.minOffsetVisibleFromTop!=='undefined'?
q.minOffsetVisibleFromTop:
l;
this.minOffsetVisibleFromLeft=
typeof q.minOffsetVisibleFromLeft!=='undefined'?
q.minOffsetVisibleFromLeft:
m;
this.minOffsetVisibleFromRight=
typeof q.minOffsetVisibleFromRight!=='undefined'?
q.minOffsetVisibleFromRight:
n;
this.handleAllHiddenEvents=
typeof q.handleAllHiddenEvents!=='undefined'?
q.handleAllHiddenEvents:
false;
this.handleAllVisibleEvents=
typeof q.handleAllVisibleEvents!=='undefined'?
q.handleAllVisibleEvents:
false;
this.cacheTrackedElements=
typeof q.cacheTrackedElements!=='undefined'?
q.cacheTrackedElements:
false;};
p.prototype.

getAllTrackedElements=function(){'use strict';
if(!this.allTrackedElements){
this.allTrackedElements={};
var q=[];

if(this.config.is_xtrackable){


q=c('DataAttributeUtils').getXTrackableElements();}else
if(this.root.querySelectorAll)
q=this.root.querySelectorAll(this.selector);

for(var r=0;r<q.length;r++){
var s=this.getElementID(q[r]);
this.allTrackedElements[s]=q[r];}}


return this.allTrackedElements;};
p.prototype.

refreshAllTrackedElements=function(){'use strict';
delete this.allTrackedElements;
return this.getAllTrackedElements();};
p.prototype.

getDataToLog=function(q){'use strict';
var r=Object.assign
(c('collectDataAttributes')(q,['gt']).gt,

{client_time:Date.now()/1000,
time_spent_id:c('pageID'),
script_path:c('ScriptPath').getScriptPath()});


return r;};
p.prototype.

getElementID=function(q){'use strict';
var r=q.$VisibilityTracking_vis_id_;
if(r)
return r;

q.$VisibilityTracking_vis_id_=++o;
return o;};
p.prototype.

sendDataToLog=function(q){'use strict';
c('BrowseClientEventLogger').maybeLogVisiblityEvent(q);
c('Banzai').post(h,q);};
p.prototype.

fireEvent=function(){var q=arguments.length<=0||arguments[0]===undefined?'default':arguments[0];'use strict';
var r=this.cacheTrackedElements?
this.allTrackedElements:
this.refreshAllTrackedElements();
for(var s in r){
var t=r[s],
u=c('VisibilityTrackingHelper').getViewportInfo(),
v=this.isVisible(t,u);

if(!v&&(s in this.visibleElementInfo||
this.handleAllHiddenEvents)){
this.handleEvent(t,{name:'hidden',cause:q});}else
if(v&&(!(s in this.visibleElementInfo)||
this.handleAllVisibleEvents))
this.handleEvent(t,{name:'visible',cause:q});}



this.clearUntrackedVisibleElements();};
p.prototype.

isVisible=function(q,r){'use strict';
var s=c('getElementPosition')(q);
return (s.x||s.y||s.width||s.height)&&
s.y+s.height>=this.minOffsetVisibleFromTop&&
s.y<=r.height-this.minOffsetVisibleFromBottom&&
s.x+s.width>=this.minOffsetVisibleFromLeft&&
s.x<=r.width-this.minOffsetVisibleFromRight;};
p.prototype.

handleEvent=function(q,event){'use strict';
var r=this.getElementID(q),
s=this.getDataToLog(q),
t=void 0;

if(event.name==='visible'){
var u=Math.floor(Date.now()/1000);
t=c('pageID').concat
(':',
u.toString(),
':',
this.getElementID(q).toString());

this.visibleElementInfo[r]=
{visibility_id:t,
elem:q};}else

if(event.name==='hidden'){
if(r in this.visibleElementInfo){
t=this.visibleElementInfo[r].visibility_id;
delete this.visibleElementInfo[r];}

if(event.cause==='browser')
return;}



this.sendDataToLog(Object.assign
(s,

{event:event.name,
visibility_id:t}));};


p.prototype.

clearUntrackedVisibleElements=function(){'use strict';

var q=this.getAllTrackedElements();
for(var r in this.visibleElementInfo)
if(!(r in q)){
var s=this.visibleElementInfo[r];
if(s.elem)
this.handleEvent
(s.elem,
{name:'hidden',cause:'removed'});}};




p.prototype.

clearAllVisibleElements=function(){var q=arguments.length<=0||arguments[0]===undefined?'default':arguments[0];'use strict';
var r=this.getAllTrackedElements();
for(var s in r)
if(s in this.visibleElementInfo)
this.handleEvent(r[s],{name:'hidden',cause:q});



this.clearUntrackedVisibleElements();};
p.prototype.

updateVisibleElements=function(){'use strict';
this.clearAllVisibleElements();
this.fireEvent();};
p.prototype.

refreshAndFireEvent=function(event){'use strict';
this.refreshAllTrackedElements();
this.fireEventCallback(event);};
p.prototype.

onUnload=function(){'use strict';
this.clearAllVisibleElements();
if(this.listeners){
this.listeners.release();
this.listeners=null;}

if(this.extraCleanup)
c('ErrorUtils').applyWithGuard(this.extraCleanup.bind(this));};

p.


init=function(q){'use strict';
return new p(q);};



f.exports=p;}),null);

/** js/games/tracking/GamesImpressionTracker.js */






__d('GamesImpressionTracker',['cx','Arbiter','Banzai','Event','GamesGogglesSwitch','VisibilityTracking','throttle'],(function a(b,c,d,e,f,g,h){var i,j,









k='data-gamesegoimp',
l='data-gamesrankedimp',
m=1000;

function n(s){
if(c('GamesGogglesSwitch').isEnabled())

s.className=
s.className+' '+"_1z5y";}







function o(s){
return function(){
if(s){
s();
s=null;}};}


i=babelHelpers.inherits

(p,c('VisibilityTracking'));j=i&&i.prototype;p.prototype.
handleEvent=function(s,event){'use strict';
if(event.name==='visible'){
var t=s.getAttribute(l);
s.removeAttribute(l);

if(t){
n(s);
t&&c('Banzai').post('games_ranked_imp',{data:t});}



c('Event').listen
(s,
'mouseover',
o
(function(){
c('Banzai').post('games_mouseover',{data:t});

c('Event').listen
(s,
'mouseout',
o
(function(){
c('Banzai').post('games_mouseout',{data:t});}));}));}};







function p(){'use strict';i.apply(this,arguments);}


var q=new p
({selector:'[data-gamesrankedimp]',
handleAllVisibleEvents:true,
cacheTrackedElements:true}),


r=c('throttle').acrossTransitions
(function(){return q.fireEventCallback();},
m,
null);


q.listeners.addSubscriptions
(c('Event').listen(document,'mousemove',r),
c('Event').listen(document,'click',r),
c('Arbiter').subscribe
('games_unit_loaded',
function(){return q.refreshAllTrackedElements();}));}),null);

/** js/logging/ViewableImpressionUtils.js */





__d('ViewableImpressionUtils',['csx','cx','CSS'],(function a(b,c,d,e,f,g,h,i){






var j=











{isHorizontallyOffscreen:function k(l,m,n){


var o=Math.max(m.x,0),
p=Math.min
(m.x+m.width,
n.width);






return p-o<m.width||
c('CSS').matchesSelector(l,".desktop_hscroll_offscreen");}};



f.exports=j;}),null);

/** shared/viewable_impressions/FullViewLogger.js */




__d('FullViewLogger',['Banzai','ScriptPath','SubscriptionsHandler','URI'],(function a(b,c,d,e,f,g){h.







logFromViewableImpressionTracker=function(i){'use strict';
var j=new h();
j.subscribeToTrackerEvents(i);};
h.prototype.

subscribeToTrackerEvents=function(i){'use strict';
this.subscriptionsHandler=new (c('SubscriptionsHandler'))();
this.subscriptionsHandler.addSubscriptions
(i.addListener('full_view',this.onFullView,this));};

h.prototype.

onFullView=function(i){'use strict';
if(this.$FullViewLogger_debugEnabled())
this.$FullViewLogger_debugLogFullViewEvent(i);


var j=
{token:i.token,
fullViewType:i.fullViewType,
scriptPath:c('ScriptPath').getTopViewEndpoint()};

c('Banzai').post('xtrackable:full_view',j);

if(this.$FullViewLogger_debugEnabled())
this.$FullViewLogger_debugLogPost(j);};

h.prototype.

$FullViewLogger_debugEnabled=function(){'use strict';
return 0;};


h.prototype.

$FullViewLogger_debugLogFullViewEvent=function(i){'use strict';};







h.prototype.

$FullViewLogger_debugLogPost=function(i){'use strict';};






function h(){'use strict';}


f.exports=h;}),null);

/** shared/viewable_impressions/PercentVisible.js */





__d("PercentVisible",[],(function a(b,c,d,e,f,g){

f.exports=
{NO_VISIBLE:-1,
VISIBLE_0_PCT:0,
VISIBLE_50_PCT:50,
VISIBLE_100_PCT:100};}),null);

/** shared/viewable_impressions/VisibilityState.js */





__d('VisibilityState',[],(function a(b,c,d,e,f,g){

'use strict';

f.exports=
{TOP:'TOP',
BOTTOM:'BOTTOM',
FULL:'FULL',
NULL:'NULL'};}),null);

/** shared/viewable_impressions/ViewableImpressionTracker.js */




__d('ViewableImpressionTracker',['AdImpressionLoggingConfig','Banzai','BrowseClientEventLogger','DataAttributeUtils','DOM','FullViewType','NonBlockingIFrame','PercentVisible','Style','URI','ViewableImpressionUtils','Visibility','VisibilityState','WebSpeedExperiments','getElementPosition','getViewportDimensions','mixInEventEmitter'],(function a(b,c,d,e,f,g){





















function h(i,j,k){'use strict';
this.id=i;
this.element=j;
this.config=k;
this.iframe=null;
this.viewableTimeout=null;
this.clearSubsequentTimeout=null;

this.waitForSubsequent=false;
this.waitForLogged=false;
this.isNonViewableLogged=false;
this.isVisible=false;
this.iframeLogged=false;
this.banzaiLogged=false;
this.topLeftInViewport=false;
this.bottomRightInViewport=false;}
h.prototype.

getID=function(){'use strict';
return this.id;};
h.prototype.

getConfig=function(){'use strict';
return this.config;};
h.prototype.

getPercentInViewport=function(){'use strict';
var i=c('getViewportDimensions')(),
j=c('getElementPosition')(this.element);

return this.$ViewableImpressionTracker_calculatePercentInViewport(i,j);};
h.prototype.

$ViewableImpressionTracker_calculatePercent=function(i,j){'use strict';

if(j.x<i.width&&j.x+j.width>0&&
j.y<i.height&&j.y+j.height>0&&
c('Style').get(this.element,'visibility')!=='hidden'&&
c('Style').get(this.element,'opacity')!=='0'){

var k=Math.max(j.x,0),
l=Math.min(j.x+j.width,i.width),
m=Math.max(j.y,0),
n=Math.min(j.y+j.height,i.height);


if(j.height*j.width===0)
return 100;

var o=100*
(l-k)*(n-m)/(j.height*j.width);
return o;}

return 0;};
h.prototype.

$ViewableImpressionTracker_calculatePercentInViewport=function(i,j){'use strict';
if(this.config.require_horizontally_onscreen&&
c('ViewableImpressionUtils').isHorizontallyOffscreen
(this.element,
j,
i))

return 0;

return this.$ViewableImpressionTracker_calculatePercent(i,j);};
h.prototype.

$ViewableImpressionTracker_calculateViewabilityPercent=function(i,j){'use strict';
var k=this.$ViewableImpressionTracker_calculatePercent(i,j);
if(k===0){
return c('PercentVisible').NO_VISIBLE;}else
if(k<50){
return c('PercentVisible').VISIBLE_0_PCT;}else
if(k<100){
return c('PercentVisible').VISIBLE_50_PCT;}else 

return c('PercentVisible').VISIBLE_100_PCT;};

h.prototype.





$ViewableImpressionTracker_calculateViewportViewabilityPercent=function(i,j){'use strict';
var k=Math.max(j.y,0),
l=Math.min(j.y+j.height,i.height),
m=100*(l-k)/i.height;
if(m<50){
return c('PercentVisible').VISIBLE_0_PCT;}else
if(m<100){
return c('PercentVisible').VISIBLE_50_PCT;}else 

return c('PercentVisible').VISIBLE_100_PCT;};

h.prototype.






$ViewableImpressionTracker_handleViewability=function(i,j){'use strict';
var k=this.$ViewableImpressionTracker_calculateViewabilityPercent(i,j);
switch(k){
case c('PercentVisible').VISIBLE_0_PCT:
case c('PercentVisible').VISIBLE_50_PCT:
case c('PercentVisible').VISIBLE_100_PCT:
this.emit
('viewability',

{tracker:this,
id:this.getID(),
token:this.getToken(),
percentVisible:k});


break;

default:this.emit
('hidden',

{id:this.getID(),
token:this.getToken()});


break;}

if(this.config.should_log_viewport_duration){
var l=this.$ViewableImpressionTracker_calculateViewportViewabilityPercent
(i,
j);



switch(l){

default:this.emit
('viewport_viewability',

{tracker:this,
id:this.getID(),
token:this.getToken(),
percentVisible:l});


break;}}};


h.prototype.





$ViewableImpressionTracker_isFullView=function(i,j){'use strict';
if(c('Style').get(this.element,'visibility')==='hidden'||
c('Style').get(this.element,'opacity')==='0')
return false;


var k=j.x,
l=j.y,
m=j.x+j.width,
n=j.y+j.height;

this.topLeftInViewport=this.topLeftInViewport||
k>=0&&k<=i.width&&
l>=0&&l<=i.height;

this.bottomRightInViewport=this.bottomRightInViewport||
m>=0&&m<=i.width&&
n>=0&&n<=i.height;


return this.topLeftInViewport&&this.bottomRightInViewport;};
h.prototype.






$ViewableImpressionTracker_handleFullView=function(i,j){'use strict';
if(this.hasEmittedFullViewEvent)
return;

if(this.$ViewableImpressionTracker_isFullView(i,j)){
this.emit
('full_view',

{tracker:this,
id:this.getID(),
token:this.getToken(),
fullViewType:c('FullViewType').ENTIRE_UNIT});



this.hasEmittedFullViewEvent=true;}};

h.prototype.





$ViewableImpressionTracker_handleDebugDuration=function(i,j){'use strict';
var k=j.y,
l=j.y+j.height,
m=k>=0&&k<=i.height,
n=l>=0&&l<=i.height,
o=void 0;
if(m&&n){
o=c('VisibilityState').FULL;}else
if(m){
o=c('VisibilityState').TOP;}else
if(n){
o=c('VisibilityState').BOTTOM;}else 









o=c('VisibilityState').NULL;

this.emit
('viewability_debug',

{tracker:this,
id:this.getID(),
token:this.getToken(),
visibleState:o});};


h.prototype.




$ViewableImpressionTracker_shouldIgnoreViewableImpression=function(event){'use strict';
return !!event&&
!!this.config.is_instream_story&&
event.cause!=='CommercialBreak/AdsLoaded';};
h.prototype.

onVisible=function(event){'use strict';
this.isVisible=true;

var i=c('getViewportDimensions')(),
j=c('getElementPosition')(this.element),

k=this.$ViewableImpressionTracker_calculatePercentInViewport(i,j),
l=k>this.config.pixel_in_percentage;

this.emit
('visible',

{tracker:this,
id:this.getID(),
token:this.getToken(),
percentInViewport:k});



if(this.config.should_log_viewability_duration)
this.$ViewableImpressionTracker_handleViewability(i,j);


if(this.config.should_log_debug_duration)
this.$ViewableImpressionTracker_handleDebugDuration(i,j);


this.$ViewableImpressionTracker_handleFullView(i,j);

if(!l){
this.$ViewableImpressionTracker_debugMarkVisible();
return;}


if(this.isLogged()){
this.$ViewableImpressionTracker_debugMarkLogged();}else 

this.$ViewableImpressionTracker_debugMarkViewable();




if(!this.waitForLogged&&
!this.isLogged()&&
!(c('AdImpressionLoggingConfig').blockInvisible&&c('Visibility').isHidden())){

this.waitForLogged=true;
this.viewableTimeout=setTimeout
(function(){
this.waitForLogged=false;


if(c('AdImpressionLoggingConfig').blockInvisible&&
c('Visibility').isHidden())
return;


var m=this.getPercentInViewport(),
n=m>this.config.pixel_in_percentage;

if(!n){
this.$ViewableImpressionTracker_debugMarkHidden();
return;}

if(!this.$ViewableImpressionTracker_shouldIgnoreViewableImpression(event))
this.logImpression(1,{});

this.$ViewableImpressionTracker_debugMarkLogged();}.
bind(this),
this.config.duration_in_ms);}};


h.prototype.

onHidden=function(){'use strict';
this.emit
('hidden',

{id:this.getID(),
token:this.getToken()});




if(this.config.log_initial_nonviewable&&
!this.isLogged()&&
!this.isNonViewableLogged){
this.logNonViewableImpression();}else
if(!this.config.log_initial_nonviewable&&
!this.isLogged()&&
this.isVisible)

this.logNonViewableImpression();


this.isVisible=false;

if(this.waitForLogged){
this.waitForLogged=false;
clearTimeout(this.viewableTimeout);}


if(this.isLogged()&&
!this.waitForSubsequent&&
this.config.subsequent_gap_in_ms>=0){
this.waitForSubsequent=true;
this.clearSubsequentTimeout=setTimeout
(function(){
this.waitForSubsequent=false;
this.reset();
if(this.isVisible)
this.onVisible();}.

bind(this),
this.config.subsequent_gap_in_ms);}



this.$ViewableImpressionTracker_debugMarkHidden();};
h.prototype.

onRemoved=function(){'use strict';
this.isVisible=false;};
h.prototype.

getToken=function(){'use strict';
return c('DataAttributeUtils').getDataAttribute(this.element,'data-xt');};
h.prototype.

logImpression=function(i,j){'use strict';
if(this.isLogged())


return;


var k=this.getToken(),
l=Math.floor(Date.now()/1000),

m=
{xt:k,
isv:i,
cts:l};


if(c('Banzai').isEnabled('xtrackable_clientview_batch')&&
this.config.should_batch||
this.config.vital_mode_for_ss||
this.config.signal_mode_for_ss){



var n=this.config.vital_mode_for_ss?c('Banzai').VITAL:{};
n.signal=this.config.signal_mode_for_ss;
this.logWithBanzai(m,n);}else 

this.logWithIFrame(Object.assign(m,j));};

h.prototype.

logNonViewableImpression=function(){'use strict';
if(this.config.nonviewableEnabled){
var i=this.getToken();
c('Banzai').post('xtrackable:nonviewable',
{xt:i});}


this.isNonViewableLogged=true;};
h.prototype.

isLogged=function(){'use strict';
return this.iframeLogged||this.banzaiLogged;};
h.prototype.

reset=function(){'use strict';
if(this.iframeLogged)
this.iframeLogged=false;

if(this.iframe){
c('DOM').remove(this.iframe);
this.iframe=null;}

if(this.banzaiLogged)
this.banzaiLogged=false;

this.isNonViewableLogged=false;
this.isVisible=false;
this.waitForLogged=false;
this.waitForSubsequent=false;};
h.prototype.

logWithBanzai=function(i,j){'use strict';
this.banzaiLogged=true;
c('BrowseClientEventLogger').maybeLogClientViewEvent(i);
c('Banzai').post('xtrackable:clientview_batch',i,j);};
h.prototype.

logWithIFrame=function(i){'use strict';
this.iframeLogged=true;
if(c('WebSpeedExperiments').non_blocking_tracker){
c('NonBlockingIFrame').loadIFrame
(new (c('URI'))(this.config.impressionURL).addQueryData(i).toString());}else{


this.iframe=c('DOM').create('iframe',
{src:new (c('URI'))(this.config.impressionURL).addQueryData(i),
width:0,
height:0,
frameborder:0,
scrolling:'no',
className:'fbEmuTracking'});

this.iframe.setAttribute('aria-hidden','true');
c('DOM').appendContent(this.element,this.iframe);}};

h.prototype.

$ViewableImpressionTracker_debugEnabled=function(){'use strict';
return 0;};


h.prototype.

$ViewableImpressionTracker_debugMarkVisible=function(){'use strict';
if(this.$ViewableImpressionTracker_debugEnabled()){

c('Style').set(this.element,'background-color','#abab9a');
c('Style').set(this.element,'outline','3px solid #abab9a');}};

h.prototype.

$ViewableImpressionTracker_debugMarkViewable=function(){'use strict';
if(this.$ViewableImpressionTracker_debugEnabled()){

c('Style').set(this.element,'background-color','#e4f70a');
c('Style').set(this.element,'outline','3px solid #e4f70a');}};

h.prototype.

$ViewableImpressionTracker_debugMarkHidden=function(){'use strict';
if(this.$ViewableImpressionTracker_debugEnabled()){
c('Style').set(this.element,'background-color',null);
c('Style').set(this.element,'outline',null);}};

h.prototype.

$ViewableImpressionTracker_debugMarkLogged=function(){'use strict';
if(this.$ViewableImpressionTracker_debugEnabled()){

c('Style').set(this.element,'background-color','#047515');
c('Style').set(this.element,'outline','3px solid #047515');}};




c('mixInEventEmitter')
(h,

{visible:true,
hidden:true,
full_view:true,
viewability:true,
viewport_viewability:true,
viewability_debug:true});



f.exports=h;}),null);

/** shared/viewable_impressions/ViewabilityDebugLogger.js */




__d('ViewabilityDebugLogger',['Banzai','Map','ViewableImpressionTracker','VisibilityState','keyMirror'],(function a(b,c,d,e,f,g){
'use strict';










var h=c('keyMirror')
({top_enter_viewport:null,
top_exit_viewport:null,
bottom_enter_viewport:null,
bottom_exit_viewport:null});i.










logFromViewableImpressionTracker=function(j){
var k=new i();
k.subscribeToTrackerEvents(j);};









function i(){
this.$ViewabilityDebugLogger_trackingTopVisibleEntries=new (c('Map'))();
this.$ViewabilityDebugLogger_trackingBottomVisibleEntries=new (c('Map'))();
this.$ViewabilityDebugLogger_trackingFullVisibleEntries=new (c('Map'))();}
i.prototype.

subscribeToTrackerEvents=function(j){
j.addListener('viewability_debug',this.onView.bind(this));
j.addListener('hidden',this.onHidden.bind(this));};
i.prototype.

onView=function(event){
var j=event.id,
k=event.visibleState,
l=Date.now(),
m=this.$ViewabilityDebugLogger_trackingTopVisibleEntries.get(j),
n=this.$ViewabilityDebugLogger_trackingBottomVisibleEntries.get(j);

switch(k){
case c('VisibilityState').TOP:
if(!this.$ViewabilityDebugLogger_trackingTopVisibleEntries.has(j))
this.$ViewabilityDebugLogger_recordEntryIntoStateMapAndSendLog
(event,
l,
c('VisibilityState').TOP);


if(n){
var o=
{token:n.token,
start_ts:n.start_ts,
event_type:h.bottom_exit_viewport,
event_time:l};

this.$ViewabilityDebugLogger_sendLogAndClearState(o,j,c('VisibilityState').BOTTOM);}

break;
case c('VisibilityState').FULL:
if(!this.$ViewabilityDebugLogger_trackingFullVisibleEntries.has(j))
this.$ViewabilityDebugLogger_recordEntryIntoStateMapAndSendLog
(event,
l,
c('VisibilityState').FULL);


break;
case c('VisibilityState').BOTTOM:
if(!this.$ViewabilityDebugLogger_trackingBottomVisibleEntries.has(j))

this.$ViewabilityDebugLogger_recordEntryIntoStateMapAndSendLog
(event,
l,
c('VisibilityState').BOTTOM);



if(m){
var p=
{token:m.token,
start_ts:m.start_ts,
event_type:h.top_exit_viewport,
event_time:l};

this.$ViewabilityDebugLogger_sendLogAndClearState(p,j,c('VisibilityState').TOP);}

break;
case c('VisibilityState').NULL:
if(m){
var q=
{token:m.token,
start_ts:m.start_ts,
event_type:h.top_exit_viewport,
event_time:l};

this.$ViewabilityDebugLogger_sendLogAndClearState(q,j,c('VisibilityState').TOP);}

if(n){
var r=
{token:n.token,
start_ts:n.start_ts,
event_type:h.bottom_exit_viewport,
event_time:l};

this.$ViewabilityDebugLogger_sendLogAndClearState(r,j,c('VisibilityState').BOTTOM);}}};


i.prototype.

onHidden=function(event){
var j=event.id,
k=Date.now(),
l=this.$ViewabilityDebugLogger_trackingTopVisibleEntries.get(j),
m=this.$ViewabilityDebugLogger_trackingBottomVisibleEntries.get(j);

if(l){
var n=
{token:l.token,
start_ts:l.start_ts,
event_type:h.top_exit_viewport,
event_time:k};

this.$ViewabilityDebugLogger_sendLogAndClearState(n,j,c('VisibilityState').TOP);}


if(m){
var o=
{token:m.token,
start_ts:m.start_ts,
event_type:h.bottom_exit_viewport,
event_time:k};

this.$ViewabilityDebugLogger_sendLogAndClearState(o,j,c('VisibilityState').BOTTOM);}};

i.prototype.

$ViewabilityDebugLogger_recordEntryIntoStateMapAndSendLog=
function(event,
j,
k){

var l=
{token:event.token,
start_ts:j,
event_time:j};

switch(k){
case c('VisibilityState').TOP:
l.event_type=h.top_enter_viewport;
this.$ViewabilityDebugLogger_trackingTopVisibleEntries.set(event.id,l);
this.$ViewabilityDebugLogger_sendLog(l);
break;
case c('VisibilityState').BOTTOM:
l.event_type=h.bottom_enter_viewport;
this.$ViewabilityDebugLogger_trackingBottomVisibleEntries.set(event.id,l);
this.$ViewabilityDebugLogger_sendLog(l);
break;
case c('VisibilityState').FULL:
this.$ViewabilityDebugLogger_trackingFullVisibleEntries.set(event.id,l);
if(!this.$ViewabilityDebugLogger_trackingTopVisibleEntries.has(event.id)){

var m=
{token:l.token,
start_ts:j,
event_time:j,
event_type:h.top_enter_viewport};

this.$ViewabilityDebugLogger_trackingTopVisibleEntries.set(event.id,m);
this.$ViewabilityDebugLogger_sendLog(m);}

if(!this.$ViewabilityDebugLogger_trackingBottomVisibleEntries.has(event.id)){

var n=
{token:l.token,
start_ts:j,
event_time:j,
event_type:h.bottom_enter_viewport};

this.$ViewabilityDebugLogger_trackingBottomVisibleEntries.set(event.id,n);
this.$ViewabilityDebugLogger_sendLog(n);}

break;}};

i.prototype.

$ViewabilityDebugLogger_sendLog=
function(j){

c('Banzai').post('xtrackable:viewability_debug',j);};
i.prototype.

$ViewabilityDebugLogger_sendLogAndClearState=
function(j,
k,
l){

c('Banzai').post('xtrackable:viewability_debug',j);
switch(l){
case c('VisibilityState').BOTTOM:
this.$ViewabilityDebugLogger_trackingBottomVisibleEntries['delete'](k);
break;
case c('VisibilityState').TOP:
this.$ViewabilityDebugLogger_trackingTopVisibleEntries['delete'](k);
break;}


this.$ViewabilityDebugLogger_trackingFullVisibleEntries['delete'](k);};




f.exports=i;}),null);

/** shared/viewable_impressions/ViewabilityDurationSegmentLogger.js */





__d('ViewabilityDurationSegmentLogger',['Banzai','Map','PercentVisible','ViewableImpressionTracker','VisibilityUnitType'],(function a(b,c,d,e,f,g){
'use strict';








var h=8000;i.













logFromViewableImpressionTracker=function(j){
var k=new i();
k.subscribeToTrackerEvents(j);};














function i(){
this.$ViewabilityDurationSegmentLogger_tracking0PctEntries=new (c('Map'))();
this.$ViewabilityDurationSegmentLogger_tracking50PctEntries=new (c('Map'))();
this.$ViewabilityDurationSegmentLogger_tracking100PctEntries=new (c('Map'))();}
i.prototype.

subscribeToTrackerEvents=function(j){
j.addListener('viewability',this.onViewable.bind(this));
j.addListener('hidden',this.onHidden.bind(this));};
i.prototype.

onViewable=function(event){
var j=event.id,
k=event.percentVisible,
l=Date.now(),
m=void 0,
n=void 0;
switch(k){
case c('PercentVisible').VISIBLE_0_PCT:
m=this.$ViewabilityDurationSegmentLogger_tracking0PctEntries.get(j);
if(!m){

this.$ViewabilityDurationSegmentLogger_insertEntryIntoStateMap
(event,
c('PercentVisible').VISIBLE_0_PCT,
l,
c('VisibilityUnitType').FEED_UNIT);}else 


this.$ViewabilityDurationSegmentLogger_sendSegmentEntryIfNeeded(m,j,l);


m=this.$ViewabilityDurationSegmentLogger_tracking50PctEntries.get(j);
if(m){
n=this.$ViewabilityDurationSegmentLogger_updateStateMapToCurrentSegmentEntry
(m,
j,
l,
true);

this.$ViewabilityDurationSegmentLogger_sendEntryAndClearFromStateMap(n,j);}


m=this.$ViewabilityDurationSegmentLogger_tracking100PctEntries.get(j);
if(m){
n=this.$ViewabilityDurationSegmentLogger_updateStateMapToCurrentSegmentEntry
(m,
j,
l,
true);

this.$ViewabilityDurationSegmentLogger_sendEntryAndClearFromStateMap(n,j);}

break;
case c('PercentVisible').VISIBLE_50_PCT:
m=this.$ViewabilityDurationSegmentLogger_tracking0PctEntries.get(j);
if(!m){

this.$ViewabilityDurationSegmentLogger_insertEntryIntoStateMap
(event,
c('PercentVisible').VISIBLE_0_PCT,
l,
c('VisibilityUnitType').FEED_UNIT);}else 



this.$ViewabilityDurationSegmentLogger_sendSegmentEntryIfNeeded(m,j,l);


m=this.$ViewabilityDurationSegmentLogger_tracking50PctEntries.get(j);
if(!m){

this.$ViewabilityDurationSegmentLogger_insertEntryIntoStateMap
(event,
c('PercentVisible').VISIBLE_50_PCT,
l,
c('VisibilityUnitType').FEED_UNIT);}else 


this.$ViewabilityDurationSegmentLogger_sendSegmentEntryIfNeeded(m,j,l);


m=this.$ViewabilityDurationSegmentLogger_tracking100PctEntries.get(j);
if(m){

n=this.$ViewabilityDurationSegmentLogger_updateStateMapToCurrentSegmentEntry
(m,
j,
l,
true);

this.$ViewabilityDurationSegmentLogger_sendEntryAndClearFromStateMap(n,j);}

break;
case c('PercentVisible').VISIBLE_100_PCT:
m=this.$ViewabilityDurationSegmentLogger_tracking0PctEntries.get(j);
if(!m){

this.$ViewabilityDurationSegmentLogger_insertEntryIntoStateMap
(event,
c('PercentVisible').VISIBLE_0_PCT,
l,
c('VisibilityUnitType').FEED_UNIT);}else 


this.$ViewabilityDurationSegmentLogger_sendSegmentEntryIfNeeded(m,j,l);


m=this.$ViewabilityDurationSegmentLogger_tracking50PctEntries.get(j);

if(!m){
this.$ViewabilityDurationSegmentLogger_insertEntryIntoStateMap
(event,
c('PercentVisible').VISIBLE_50_PCT,
l,
c('VisibilityUnitType').FEED_UNIT);}else 


this.$ViewabilityDurationSegmentLogger_sendSegmentEntryIfNeeded(m,j,l);


m=this.$ViewabilityDurationSegmentLogger_tracking100PctEntries.get(j);

if(!m){
this.$ViewabilityDurationSegmentLogger_insertEntryIntoStateMap
(event,
c('PercentVisible').VISIBLE_100_PCT,
l,
c('VisibilityUnitType').FEED_UNIT);}else 


this.$ViewabilityDurationSegmentLogger_sendSegmentEntryIfNeeded(m,j,l);

break;}};

i.prototype.

onHidden=function(event){
var j=event.id,
k=Date.now(),
l=this.$ViewabilityDurationSegmentLogger_tracking0PctEntries.get(j),
m=this.$ViewabilityDurationSegmentLogger_tracking50PctEntries.get(j),
n=this.$ViewabilityDurationSegmentLogger_tracking100PctEntries.get(j);


if(l)
this.$ViewabilityDurationSegmentLogger_sendEntryAndClearFromStateMap
(this.$ViewabilityDurationSegmentLogger_updateStateMapToCurrentSegmentEntry
(l,
j,
k,
true),

j);



if(m)
this.$ViewabilityDurationSegmentLogger_sendEntryAndClearFromStateMap
(this.$ViewabilityDurationSegmentLogger_updateStateMapToCurrentSegmentEntry
(m,
j,
k,
true),

j);



if(n)
this.$ViewabilityDurationSegmentLogger_sendEntryAndClearFromStateMap
(this.$ViewabilityDurationSegmentLogger_updateStateMapToCurrentSegmentEntry
(n,
j,
k,
true),

j);};


i.prototype.

$ViewabilityDurationSegmentLogger_insertEntryIntoStateMap=
function(event,
j,
k,
l){

var m=
{token:event.token,
startedTrackingTS:k,
percentVisible:j,
visibilityUnit:l,
intervalMs:0,
cumulativeMs:0,
segmentIdx:0};

switch(j){
case c('PercentVisible').VISIBLE_0_PCT:
this.$ViewabilityDurationSegmentLogger_tracking0PctEntries.set(event.id,m);
break;
case c('PercentVisible').VISIBLE_50_PCT:
this.$ViewabilityDurationSegmentLogger_tracking50PctEntries.set(event.id,m);
break;
case c('PercentVisible').VISIBLE_100_PCT:
this.$ViewabilityDurationSegmentLogger_tracking100PctEntries.set(event.id,m);
break;}};

i.prototype.

$ViewabilityDurationSegmentLogger_updateStateMapToCurrentSegmentEntry=
function(j,
k,
l,
m){

var n=l-j.startedTrackingTS,
o=n-j.cumulativeMs,

p=j.percentVisible,
q=
{token:j.token,
startedTrackingTS:j.startedTrackingTS,
percentVisible:p,
visibilityUnit:j.visibilityUnit,
intervalMs:o,
cumulativeMs:n,
segmentIdx:++j.segmentIdx};


if(m)
q.duration=n;

switch(p){
case c('PercentVisible').VISIBLE_0_PCT:
this.$ViewabilityDurationSegmentLogger_tracking0PctEntries.set(k,q);
break;
case c('PercentVisible').VISIBLE_50_PCT:
this.$ViewabilityDurationSegmentLogger_tracking50PctEntries.set(k,q);
break;
case c('PercentVisible').VISIBLE_100_PCT:
this.$ViewabilityDurationSegmentLogger_tracking100PctEntries.set(k,q);
break;}

return q;};
i.prototype.

$ViewabilityDurationSegmentLogger_sendSegmentEntryIfNeeded=
function(j,
k,
l){

var m=j.intervalMs,
n=
l-j.startedTrackingTS-j.cumulativeMs;


if(this.$ViewabilityDurationSegmentLogger_checkNeedToUpdateAndSendSegmentEntry
(m,
n)){


var o=this.$ViewabilityDurationSegmentLogger_updateStateMapToCurrentSegmentEntry
(j,
k,
l,
false);



c('Banzai').post('xtrackable:viewability',o,c('Banzai').VITAL);}};

i.prototype.




$ViewabilityDurationSegmentLogger_checkNeedToUpdateAndSendSegmentEntry=
function(j,
k){

if(j>=h)
return false;

if(j==0)

return true;

if(j<1000)
return k>=1000;


var l=0;
l=j/1000;
var m=k/1000;
return m>=2*l;};
i.prototype.

$ViewabilityDurationSegmentLogger_sendEntryAndClearFromStateMap=function(j,k){
var l=j.percentVisible;
switch(l){
case c('PercentVisible').VISIBLE_0_PCT:
this.$ViewabilityDurationSegmentLogger_tracking0PctEntries['delete'](k);
break;
case c('PercentVisible').VISIBLE_50_PCT:
this.$ViewabilityDurationSegmentLogger_tracking50PctEntries['delete'](k);
break;
case c('PercentVisible').VISIBLE_100_PCT:
this.$ViewabilityDurationSegmentLogger_tracking100PctEntries['delete'](k);
break;}



c('Banzai').post('xtrackable:viewability',j,c('Banzai').VITAL);};




f.exports=i;}),null);

/** shared/viewable_impressions/ViewableImpressionDurationLogger.js */





__d('ViewableImpressionDurationLogger',['Banzai','Map'],(function a(b,c,d,e,f,g){
'use strict';h.











logFromViewableImpressionTracker=function(i){
var j=new h();
j.subscribeToTrackerEvents(i);};




function h(){
this.$ViewableImpressionDurationLogger_trackingEntries=new (c('Map'))();}
h.prototype.

subscribeToTrackerEvents=function(i){
i.addListener('visible',this.onElementVisible.bind(this));
i.addListener('hidden',this.onElementHidden.bind(this));};
h.prototype.

onElementVisible=function(event){
if(this.$ViewableImpressionDurationLogger_trackingEntries.get(event.id))
return null;

var i=
{token:event.token,
startedTrackingTS:this.getTimeNow()};

this.$ViewableImpressionDurationLogger_trackingEntries.set(event.id,i);
return i;};
h.prototype.

onElementHidden=function(event){
var i=this.$ViewableImpressionDurationLogger_trackingEntries.get(event.id);
if(!i)
return false;

i.trackingDuration=this.getTimeNow()-i.startedTrackingTS;
return this.sendLog(event.id);};
h.prototype.

sendLog=function(i){
var j=this.$ViewableImpressionDurationLogger_trackingEntries.get(i);
if(!j||!j.trackingDuration)
return false;

c('Banzai').post('xtrackable:duration',j);
this.$ViewableImpressionDurationLogger_trackingEntries['delete'](i);
return true;};
h.prototype.

getTimeNow=function(){
return parseFloat((Date.now()/1000).toFixed(2));};



f.exports=h;}),null);

/** shared/viewable_impressions/ViewableImpressionHeatmapLogger.js */




__d('ViewableImpressionHeatmapLogger',['Banzai'],(function a(b,c,d,e,f,g){h.




logFromViewableImpressionTracker=function(i,j){'use strict';
var k=new h(j);
k.subscribeToTrackerEvents(i);};


function h(i){'use strict';
this.loggingDurationMS=i;
this.trackingEntries={};}
h.prototype.

subscribeToTrackerEvents=function(i){'use strict';
this.visibleSubscription=
i.addListener('visible',this.onElementVisible,this);
this.hiddenSubscription=
i.addListener('hidden',this.onElementHidden,this);};
h.prototype.

onElementVisible=function(i){'use strict';
var j=this.getCurrentTimestamp(),
k=this.trackingEntries[i.id];

if(!k){
k=this.createTrackingEntry(i);
this.beginTracking(i.id,k);

j=k.startedTrackingTS;}


k.viewportProgressEvents.push
({timestamp:j,
percentInViewport:i.percentInViewport.toFixed(2)});};

h.prototype.

onElementHidden=function(i){'use strict';
var j=this.getCurrentTimestamp(),
k=this.trackingEntries[i.id];

if(!k)



return;

k.viewportProgressEvents.push
({timestamp:j,
percentInViewport:0});};

h.prototype.

onTrackingCompleted=function(i){'use strict';
var j=this.trackingEntries[i];

j.viewportProgressEvents.push
({timestamp:this.getCurrentTimestamp(),
percentInViewport:j.tracker.getPercentInViewport().toFixed(2)});


if(this.$ViewableImpressionHeatmapLogger_debugEnabled())
this.$ViewableImpressionHeatmapLogger_debugLogEntries(i,j);


this.logToServer(j);

delete this.trackingEntries[i];};
h.prototype.

logToServer=function(i){'use strict';
var j=i;
delete j.tracker;

c('Banzai').post('xtrackable:heatmap',j);};
h.prototype.

beginTracking=function(i,j){'use strict';
this.trackingEntries[i]=j;
setTimeout
(function(){return this.onTrackingCompleted(i);}.bind(this),
this.loggingDurationMS);};

h.prototype.

createTrackingEntry=function(i){'use strict';

return {tracker:i.tracker,
token:i.token,
startedTrackingTS:this.getCurrentTimestamp(),
viewportProgressEvents:[]};};

h.prototype.

getCurrentTimestamp=function(){'use strict';
return (Date.now()/1000).toFixed(2);};
h.prototype.
$ViewableImpressionHeatmapLogger_debugEnabled=function(){'use strict';
return 0;};
h.prototype.

$ViewableImpressionHeatmapLogger_debugLogEntries=function(i,j){'use strict';
var k=
'Completed tracking for id '+i+
' token='+j.token+
' startedTrackingTS='+j.startedTrackingTS+'\n';

j.viewportProgressEvents.forEach(function(l){
k+='% in view: '+l.percentInViewport+
' timestamp='+l.timestamp+'\n';});};







f.exports=h;}),null);

/** shared/viewable_impressions/ViewableImpressionEventHandler.js */




__d('ViewableImpressionEventHandler',['DataAttributeUtils','FullViewLogger','ViewabilityDebugLogger','ViewabilityDurationSegmentLogger','ViewableImpressionDurationLogger','ViewableImpressionHeatmapLogger','ViewableImpressionTracker','VisibilityTracking'],(function a(b,c,d,e,f,g){
'use strict';var h,i,










j=1;h=babelHelpers.inherits

(k,c('VisibilityTracking'));i=h&&h.prototype;k.prototype.
extraInit=function(){
this.impressionTrackers={};};
k.prototype.

getDataFromConfig=function(l){
i.getDataFromConfig.call(this,l);
this.doHeatmapLogging=l.doHeatmapLogging;
this.heatmapLoggingDurationMS=l.heatmapLoggingDurationMS;
l.impressionURL=l.impressionURL!==undefined?
l.impressionURL:
'/xti.php';
l.nonviewableEnabled=
l.nonviewableEnabled!==undefined?
l.nonviewableEnabled:
false;};
k.prototype.

getImpressionTracking=function(l){
var m=this.getElementID(l),
n=this.impressionTrackers[m];
if(!n){
var o=babelHelpers['extends']({},
this.getConfigFromElement(l),
this.config);

n=new (c('ViewableImpressionTracker'))(m,l,o);
this.impressionTrackers[m]=n;

if(o.log_impression_duration)
c('ViewableImpressionDurationLogger').logFromViewableImpressionTracker
(n);


if(this.doHeatmapLogging)
c('ViewableImpressionHeatmapLogger').logFromViewableImpressionTracker
(n,
this.heatmapLoggingDurationMS);



if(o.should_log_full_views)
c('FullViewLogger').logFromViewableImpressionTracker(n);


if(o.should_log_viewability_duration)
c('ViewabilityDurationSegmentLogger').logFromViewableImpressionTracker
(n);



if(o.should_log_debug_duration)
c('ViewabilityDebugLogger').logFromViewableImpressionTracker
(n);}



return n;};
k.prototype.

handleEvent=function(l,event){
var m=this.getImpressionTracking(l);
if(!m)
return;

if(event.name==='visible'){
m.onVisible(event);
if(!this.visibleElementInfo[m.getID()])
this.visibleElementInfo[m.getID()]=
{elem:l};}else


if(event.name==='hidden'){
var n=m.getConfig();

if(event.cause==='default'||

n.log_visibility_hidden_when_browser_inactive&&
event.cause==='browser'){


m.onHidden();
delete this.visibleElementInfo[m.getID()];}else
if(event.cause==='removed'){
m.onRemoved();
delete this.visibleElementInfo[m.getID()];
delete this.impressionTrackers[m.getID()];}}};


k.prototype.

getConfigFromElement=function(l){
return JSON.parse
(c('DataAttributeUtils').getDataAttribute(l,'data-xt-vimp'));};

k.prototype.

getElementID=function(l){
if(!l.getAttribute('id'))
l.setAttribute('id','xt_uniq_'+j++);

return l.getAttribute('id');};
function k(){h.apply(this,arguments);}


f.exports=k;}),null);

/** js/logging/tracking/ViewableImpressionTracking.js */




__d('ViewableImpressionTracking',['Arbiter','DesktopHscrollUnitEventConstants','ErrorUtils','LitestandMessages','Run','ViewableImpressionEventHandler','ViewableImpressionConfig'],(function a(b,c,d,e,f,g){










var h=

{init:function i(){
if(c('ViewableImpressionEventHandler').instance===undefined){
c('ViewableImpressionEventHandler').instance=
new (c('ViewableImpressionEventHandler'))(c('ViewableImpressionConfig'));
c('ViewableImpressionEventHandler').instance.listeners.addSubscriptions
(c('Arbiter').subscribe

([c('LitestandMessages').STORIES_INSERTED,
'AdsRefreshHandler/AdsLoaded',
'MPPInsights/ChartView',
'PhotoSnowliftAds/displayUnits',
'WebMessengerAdsControl/adjustAds',
c('DesktopHscrollUnitEventConstants').HSCROLL_ITEM_INSERTED_EVENT,
'WebVideoChannelAds/AdsLoaded',
'CommercialBreak/AdsLoaded'],

c('ErrorUtils').guard
(function(event){
c('ViewableImpressionEventHandler').instance.refreshAndFireEvent
(event);},


'ViewableImpressionTracking')));}






c('Run').onLoad(function(){
c('ViewableImpressionEventHandler').instance.refreshAndFireEvent();});}};




f.exports=h;}),null);
