if (self.CavalryLogger) { CavalryLogger.start_js(["ZJIj2"]); }

/** js/ads/rhc/HomeRHCAdsBasicRefresh.js */




__d('HomeRHCAdsBasicRefresh',['AdsRefreshHandler','Arbiter','NavigationMessage','Run','SubscriptionsHandler','ge'],(function a(b,c,d,e,f,g){









var h,
i,
j,
k;

function l(){
if(h){
h.cleanup();
h=null;}

if(i){
i.release();
i=null;}

j=null;}


function m(){
var p=c('ge')(k);

if(p&&j){
p.appendChild(j);
j=null;}}


function n(p,q){
j=q;
h&&h.forceLoadIfEnoughTimePassed(0);}


var o=


{init:function p(q,r,s){
k=q;
h=new (c('AdsRefreshHandler'))(c('ge')(q),r,s).
subscribeDefaultEventsForRefresh();




i=new (c('SubscriptionsHandler'))();
i.addSubscriptions
(c('Arbiter').subscribe(c('NavigationMessage').NAVIGATION_BEGIN,l),
c('Arbiter').subscribe('ProfileQuestionAnswered',n),
c('Arbiter').subscribe('AdsRefreshHandler/AdsLoaded',m));

c('Run').onLeave(l);}};


















f.exports=o;}),null);

/** js/feed/AttachmentIssueDiversityShareConstants.js */





__d('AttachmentIssueDiversityShareConstants',[],(function a(b,c,d,e,f,g){

'use strict';

var h=
{ARTICLE_CLICK:'issueDiversity/article_click'};


f.exports=h;}),null);

/** js/feed/LiveUpdate/NewStoriesPillController.js */





__d('NewStoriesPillController',['csx','Bootloader','DOMQuery','ge'],(function a(b,c,d,e,f,g,h){

'use strict';







var i=
{_isAtTop:false,
_view:null,

show:function j(k){
c('Bootloader').loadModules(["NewStoriesPillView"],function(l){
this._view=l;
l.renderInto
(c('DOMQuery').scry(c('ge')('contentArea'),"._2c44")[0],
this._isAtTop);

l.hideWhenScrollAbove(k);}.
bind(this),'NewStoriesPillController');},


hide:function j(){
this._isAtTop=false;
if(this._view)
this._view.unmount();},



setAtTop:function j(){
this._isAtTop=true;
if(this._view)
this._view.setAtTop();}};





f.exports=i;}),null);

/** www/__virtual__/x/XFeedSeeFirstStoryController.js */



__d("XFeedSeeFirstStoryController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/feed\/control\/see_first\/story\/",{});}),

null);

/** js/feed/control/SeeFirstStoryLogger.js */





__d('SeeFirstStoryLogger',['AsyncRequest','XFeedSeeFirstStoryController'],(function a(b,c,d,e,f,g){





var h=function i(){
var j=c('XFeedSeeFirstStoryController').getURIBuilder().getURI();
new (c('AsyncRequest'))(j).
send();};


f.exports=
{log:h};}),null);

/** js/modules/runAfterScrollingStops.js */




__d('runAfterScrollingStops',['Arbiter','Event','Run','debounceAcrossTransitions','emptyFunction'],(function a(b,c,d,e,f,g){



















function h(s,t,u){
if(t&&k[t])
return;


if(!j){
c('Arbiter').subscribe('page_transition',r);
j=true;}


if(!i){
s();
return;}


t&&(k[t]=1);
l.push(s);

if(!u){
if(n){
c('Run').onLeave(r);
n=false;}


m.push(l.length-1);}}



var i,
j,


k={},
l=[],



m=[],
n=true,



o=500,

p=c('debounceAcrossTransitions')
(function(){
i=false;

var s=l;
l=[];
m=[];
k={};

for(var t=0,u=s.length;t<u;++t)
s[t]();},


o);


function q(){
i=true;
p();}




function r(){
var s=m;
m=[];
n=true;

for(var t=0,u=s.length;t<u;++t)
l[s[t]]=c('emptyFunction');}



c('Event').listen(window,'scroll',q);

f.exports=h;}),null);

/** js/litestand/LitestandOffscreenController.js */








__d('LitestandOffscreenController',['csx','cx','Arbiter','CSS','DOMQuery','Event','NavigationMessage','Run','Scroll','Style','SubscriptionsHandler','Vector','getFullScreenElement','getOrCreateDOMID','queryThenMutateDOM','runAfterScrollingStops','throttle'],(function a(b,c,d,e,f,g,h,i){



























var j=1,


k=9,
l=10,

m={},

n=false,
o,
p,
q,
r,

s=[];

function t(){
o&&o.release();
o=null;
n=false;}


function u(){
m={};
s=[];}


function v(){

if(c('CSS').matchesSelector
(document.body,"._5vb_"))


return l;

return k;}


function w(){
r=r||c('Vector').getViewportDimensions().y;
p=c('Vector').getScrollPosition().y;
q=p+r;
if(j){
p-=r*j;
q+=r*j;}


for(var ea in m){


var fa=m[ea];

fa.position=c('Vector').getElementPosition(fa.element).y;
if(!fa.hidden)
fa.height=fa.element.offsetHeight;}}




function x(){
var ea=[],
fa=c('getFullScreenElement')();

for(var ga in m){
var ha=m[ga],
ia=ha.position,
ja=ia+ha.height<p,
ka=ia>q;

if(!fa&&
!ha.hidden&&
(ja||ka)){
y(ha);}else
if(!ja&&!ka){
ha.pendingHide=false;

if(ha.hidden){
if(ha.dirty&&ia<p){



ea.push(ga);
c('CSS').addClass
(z(ha),
"_49nu");}else 


c('Style').apply(ha.element,
{height:'',
marginBottom:''});



c('CSS').show(z(ha));
ha.dirty=false;
ha.hidden=false;}}}





if(!ea.length)
return;


var la=0;
c('queryThenMutateDOM')
(function(){
for(var ma=0,na=ea.length;ma<na;ma++){
var oa=m[ea[ma]];
la+=
oa.height-
z(oa).offsetHeight+
c('Style').getFloat(oa.element,'marginBottom');}},


function(){
for(var ma=0,na=ea.length;ma<na;ma++){
var oa=m[ea[ma]];
c('CSS').removeClass
(z(oa),
"_49nu");

c('Style').apply(oa.element,
{height:'',
marginBottom:''});}


la&&c('Scroll').setTop
(document.body,c('Scroll').getTop(document.body)-la);});}





function y(ea){
if(!ea.pendingHide){
s.push(ea);
ea.pendingHide=true;}}



function z(ea){
if(ea.wrapperElement)
return ea.wrapperElement;


var fa=ea.element;
if(fa.firstElementChild)
return ea.wrapperElement=fa.firstElementChild;


for(var ga=0;ga<fa.childNodes.length;ga++)
if(fa.childNodes[ga].tagName)
return ea.wrapperElement=fa.childNodes[ga];



return null;}


function aa(){
var ea=v()+'px';
for(var fa=0;fa<s.length;fa++){
var ga=s[fa];
if(c('DOMQuery').scry
(ga.element,"._52fb").length)
ga.pendingHide=false;

if(ga&&
ga.element&&
ga.pendingHide&&
!ga.hidden){
c('Style').apply(ga.element,
{height:ga.height+'px',
marginBottom:ea});

c('CSS').hide(z(ga));
ga.hidden=true;
ga.pendingHide=false;}}


s=[];}


function ba(){
c('runAfterScrollingStops')(aa,'LitestandOffscreenController/hide');

c('queryThenMutateDOM')
(w,
x,
'LitestandOffscreenController');}



function ca(){
c('Run').onLeave(t);

o=new (c('SubscriptionsHandler'))();
o.addSubscriptions
(c('Arbiter').subscribe
(c('NavigationMessage').NAVIGATION_BEGIN,
u),

c('Event').listen(window,'scroll',c('throttle')(ba)),
c('Event').listen(window,'resize',c('throttle')(function(){
r=null;
ba();})));



n=true;}


var da=

{attachSubstream:function ea(fa){
n||ca();
m[c('getOrCreateDOMID')(fa)]=
{element:fa};}};





f.exports=da;}),null);

/** js/litestand/stream/ListestandStreamTailStoryPlaceholderVisbilityTracker.js */






__d('ListestandStreamTailStoryPlaceholderVisbilityTracker',['PageletEventConstsJS','PageletEventsHelper','onRectIsWithinViewport','performanceAbsoluteNow'],(function a(b,c,d,e,f,g){

'use strict';







var h=null,
i=null,
j=null,
k=false,

l=

{},

m=
{setPlaceholderElement:function o(p){
if(!k){
c('PageletEventsHelper').subscribeToPageletEvents(n);
k=true;}

h=p;
i&&i.remove();
i=c('onRectIsWithinViewport')
(function(){return p.getBoundingClientRect();},
function(q){



if(!j&&q)
j=c('performanceAbsoluteNow')();});},





getStoryPlaceholderVisibleDuration:function o(p){
return l[p]||0;}};



function n(o,p){

if(o.startsWith('hyperfeed_story')&&
p===c('PageletEventConstsJS').DISPLAY_END){

l[o]=
j?
Date.now()-j:
0;
j=null;}}



f.exports=m;}),null);

/** js/litestand/stream/LitestandNewStoryController.js */





__d('LitestandNewStoryController',['cx','Arbiter','AsyncRequest','BlueBar','LitestandColumnManager','LitestandMessages','LitestandStream','Style','$','getScrollPosition','queryThenMutateDOM','requestAnimationFrame','setImmediate'],(function a(b,c,d,e,f,g,h){


















var i=50,


j=500,

k,
l,
m;

function n(){
m&&clearTimeout(m);
m=null;}


function o(){
m=setTimeout
(function(){
m=null;
p();},

j);}







function p(){
var v;

c('queryThenMutateDOM')
(function(){
v=c('LitestandStream').canInsertNewerStories();},

function(){
if(v){
s();}else 

o();},


'LitestandNewStoryController/tryShowingStories');}



function q(v){
CSS.addClass(v,"_38xk");
c('requestAnimationFrame')(function(){return c('Style').set(v,'opacity',1);});}


function r(v){
n();
if(!l)
return;


var w=l.nextSibling;
if(v&&w)
var x=w.offsetTop;


c('Style').apply(l,
{height:'',
left:'',
opacity:'',
overflow:'',
position:'',
width:''});


if(v){
var y=w.offsetTop+i,
z=y-x,

aa=c('getScrollPosition')(window);
c('LitestandColumnManager').adjustVerticalWindowPosition
(aa,
z);

c('requestAnimationFrame')(function(){
c('LitestandColumnManager').adjustVerticalWindowPosition
(aa,
z);

q(l);

if(k){
k.setAtTop();
k.show(z);}});}else 



q(l);


c('Arbiter').inform(c('LitestandMessages').STORIES_INSERTED);
c('Arbiter').inform(c('LitestandMessages').NEWER_STORIES_INSERTED);


c('setImmediate')(function(){return c('Arbiter').inform('reflow');});

new (c('AsyncRequest'))().
setURI('/ajax/litestand/update_filter_viewtime').
setData({section_id:c('LitestandStream').getSectionID()}).
send();}


function s(){
r(c('BlueBar').hasFixedBlueBar());}


function t(){
r(false);}


var u=


{waitForDisplay:function v(w){
if(!l)
l=c('$')(w);


if(c('LitestandStream').canInsertNewerStories()){
s();}else 

o();},



showStoriesNow:function v(w){
l=w;
t();},



setNewStoryPill:function v(w){
k=w;}};










f.exports=u;}),null);

/** js/stream/FeedErrorDetection.js */




__d('FeedErrorDetection',['csx','Banzai','CSS','DataAttributeUtils','DOM','ge'],(function a(b,c,d,e,f,g,h){









var i=0,
j={},
k=false,
l=false;

function m(event,r,s,t){
var u=
{event:event,
shouldLogDetail:r,
site:'www'};

if(r){
u.intValues=s;
u.normalValues=t;}

c('Banzai').post('feed_error_detection',u,{delay:0});}


var n=function r
(s,
t,
u,
v){

var w=c('DOM').scry
(s,
t||"._5jmm").
filter(u),

x={};
for(var y=0;y<w.length;y++){
var z=w[y],
aa=z.getAttribute('data-dedupekey');

if(x[aa]){
v(z);}else 

x[aa]=1;}},




o=
function r(s){return !!s.getAttribute('data-dedupekey');},
p=
function r(s){return o(s)&&c('CSS').shown(s);},

q=



{dedupe:function r(s,t){
n
(s,
t,
o,
function(u){return c('DOM').remove(u);});},






dedupeHide:function r(s,t){
n
(s,
t,
p,
function(u){
c('CSS').hide(u);






u.removeAttribute('style');});},





registerFeedStories:function r(s,t){
if(s=='substream_0'){
i=0;
j={};
k=false;
l=false;}


var u=c('DOM').scry
(c('ge')(s),
"._5jmm"),

v=u.length;
if(!v&&!k){
if(!l){
l=true;
return;}

if(!i){
m('empty_feed_js',t,{},{});}else 

m
('end_of_feed_js',
t,
t?{stories_count:i}:{},
{});


k=true;
return;}


l=false;
for(var w=0;w<v;w++){
var x=u[w],
y=x.getAttribute('data-dedupekey'),
z=c('DataAttributeUtils').getDataFt(x);
if(!y||!z)
continue;

if(y in j){
var aa={};
if(t)
aa=
{dedupKey:y,
ft_A:z,
ft_B:j[y]};


m
('duplicate_stories',
t,
{},
{dup_field:aa});}else{


j[y]=z;
i++;}}}};





f.exports=q;}),null);

/** js/litestand/stream/LitestandStreamTailLoader.js */







__d('LitestandStreamTailLoader',['Arbiter','Bootloader','CSS','DOM','Event','FeedErrorDetection','LitestandMessages','LitestandOffscreenController','LitestandStream','ListestandStreamTailStoryPlaceholderVisbilityTracker','NavigationMessage','OnVisible','Run','SubscriptionsHandler','ge','getElementPosition','getOrCreateDOMID','getUnboundedScrollPosition','getViewportDimensions','throttle'],(function a(b,c,d,e,f,g){

'use strict';

























var h=30000,

i=function l(m){
c('Bootloader').loadModules(["BanzaiODS"],function(n){
n&&n.bumpEntityKey('feed_load',m);},
'LitestandStreamTailLoader');};






























function j(l){this.






















$LitestandStreamTailPager_onError=function(n){
this.$LitestandStreamTailPager_handleError(n);}.
bind(this);this.

$LitestandStreamTailPager_onTransportError=function(n){
i('streamload_error.tail.transport');
this.$LitestandStreamTailPager_handleError(n);}.
bind(this);this.streamConfig=babelHelpers['extends']({bufferPixels:1000,firstPagerScrollBuffer:100,maxTailRetries:2},l.streamConfig);this.pagerConfig=l.pagerConfig;this.storiesContainer=l.storiesContainer;this.pagerElement=l.pagerElement;this.cursor=l.cursor;this.previousCursors={};var m=c('DOM').find(this.pagerElement,'a');c('Event').listen(m,'click',this.$LitestandStreamTailPager_onClick.bind(this));}j.prototype.$LitestandStreamTailPager_onClick=function(event){this.$LitestandStreamTailPager_triggerTailLoad();event.preventDefault();};j.prototype.

$LitestandStreamTailPager_handleError=function(l){
delete this.previousCursors[this.cursor];

c('Arbiter').inform(c('LitestandMessages').STREAM_LOAD_ERROR,l);
i('streamload_error.tail');
if(this.lastRequestWasRetry)
i('streamload_error.tail.retry');



if(this.retryCounter<this.streamConfig.maxTailRetries){
this.retryCounter++;
this.$LitestandStreamTailPager_triggerTailLoad(true);
i('streamload.tail.retry');
c('Arbiter').inform(c('LitestandMessages').STREAM_LOAD_RETRY);
return;}



c('CSS').removeClass(this.pagerElement,'async_saving');};
j.prototype.

$LitestandStreamTailPager_triggerTailLoad=function(){var l=arguments.length<=0||arguments[0]===undefined?false:arguments[0];
this.detach();


c('CSS').addClass(this.pagerElement,'async_saving');


var m=
c('DOM').scry
(c('LitestandStream').getStreamRoot(),
c('LitestandStream').getStoriesSelector()).
map(function(o){return o.getAttribute('data-cursor');}).
filter(function(o){return o;}),

n=this.cursor;
if(!n&&m.length>0)
n=m[m.length-1];



if(this.previousCursors[n]){
i('duplicate_cursor');
c('Arbiter').inform(c('LitestandMessages').DUPLICATE_CURSOR_ERROR,n);}

this.previousCursors[n]=n;
this.lastRequestWasRetry=l;


c('Bootloader').loadModules(["UIPagelet"],function(o){
o.loadFromEndpoint
('LitestandTailLoadPagelet',
c('getOrCreateDOMID')(this.storiesContainer),

{client_stories_count:m.length,
cursor:n,
feed_stream_id:c('LitestandStream').getFeedStreamID(),
pager_config:this.pagerConfig,
scroll_count:++this.numTailLoads,
story_id:c('LitestandStream').getStoryID()},


{append:true,
automatic:true,
crossPage:true,
errorHandler:this.$LitestandStreamTailPager_onError,
transportErrorHandler:this.$LitestandStreamTailPager_onTransportError,
usePipe:true});


c('Arbiter').inform(c('LitestandMessages').STORIES_REQUESTED);}.
bind(this),'LitestandStreamTailLoader');};
j.prototype.

$LitestandStreamTailPager_isPastScrollBuffer=function(l){
var m=c('getUnboundedScrollPosition')(window).y;
return m>l;};
j.prototype.

$LitestandStreamTailPager_attachOnVisible=function(){
this.detach();
this.onVisibleListener=new (c('OnVisible'))
(c('DOM').find(this.pagerElement,'a'),
function(){
this.$LitestandStreamTailPager_triggerTailLoad();}.
bind(this),
false,
this.streamConfig.bufferPixels);};

j.prototype.




attach=function(){var l,m=this,n=arguments.length<=0||arguments[0]===undefined?false:arguments[0];
this.detach();

var o=c('getElementPosition')(this.pagerElement),
p=c('getViewportDimensions')();

c('CSS').removeClass(this.pagerElement,'async_saving');

if(o.y<p.height){

this.$LitestandStreamTailPager_triggerTailLoad();
return;}


if(n){var l=function(){



var q=m.streamConfig.firstPagerScrollBuffer||100;
if(m.streamConfig.hasScrollBufferFix)

q=Math.min
(q,
o.y-p.height);



if(!m.$LitestandStreamTailPager_isPastScrollBuffer(q)){
m.onScrollListener=
c('Event').listen(window,'scroll',c('throttle')(function(){
if(this.$LitestandStreamTailPager_isPastScrollBuffer(q))
this.$LitestandStreamTailPager_attachOnVisible();}.

bind(m)));
if(m.streamConfig.allowTriggerOnResize)



m.onResizeListener=
c('Event').listen(window,'resize',c('throttle')(function(){
var r=c('getViewportDimensions')();
if(o.y<r.height+q)
this.$LitestandStreamTailPager_triggerTailLoad();}.

bind(m)));

return {v:void 0};}}
();if(typeof l==="object")return l.v;}



this.$LitestandStreamTailPager_attachOnVisible();};
j.prototype.




detach=function(){
this.onResizeListener&&this.onResizeListener.remove();
this.onScrollListener&&this.onScrollListener.remove();
this.onVisibleListener&&this.onVisibleListener.remove();
this.onResizeListener=null;
this.onScrollListener=null;
this.onVisibleListener=null;};
j.prototype.




remove=function(){
this.detach();
if(this.pagerElement)
c('DOM').remove(this.pagerElement);};

function k(){this.










$LitestandStreamTailLoader_onNav=function(){
this.$LitestandStreamTailLoader_clearLoadTimeout();
this.subscriptionsHandler&&this.subscriptionsHandler.release();
this.subscriptionsHandler=null;
this.pager&&this.pager.remove();
this.pager=null;
c('Arbiter').inform(c('LitestandMessages').LEAVE_HOME);}.
bind(this);this.











$LitestandStreamTailLoader_setLoadTimeout=function(){
this.$LitestandStreamTailLoader_clearLoadTimeout();
this.loadTimeout=setTimeout(this.$LitestandStreamTailLoader_onLoadTimeout,h);}.
bind(this);this.

$LitestandStreamTailLoader_clearLoadTimeout=function(){
this.loadTimeout&&clearTimeout(this.loadTimeout);}.
bind(this);}k.prototype.$LitestandStreamTailLoader_onLoadTimeout=function(){i('streamload_timeout.tail');};k.prototype.




createPager=function(l){

this.pager&&this.pager.remove();


var m=new j(l);
m.attach(true);
c('ListestandStreamTailStoryPlaceholderVisbilityTracker').setPlaceholderElement
(m.pagerElement);

this.pager=m;

if(!this.subscriptionsHandler){
this.subscriptionsHandler=new (c('SubscriptionsHandler'))();
this.subscriptionsHandler.addSubscriptions
(c('Arbiter').subscribe(c('NavigationMessage').NAVIGATION_BEGIN,this.$LitestandStreamTailLoader_onNav),
c('Arbiter').subscribe
(c('LitestandMessages').STORIES_REQUESTED,
this.$LitestandStreamTailLoader_setLoadTimeout),

c('Arbiter').subscribe

([c('LitestandMessages').STORIES_INSERTED,
c('LitestandMessages').STREAM_LOAD_ERROR],

this.$LitestandStreamTailLoader_clearLoadTimeout));


c('Run').onLeave(this.$LitestandStreamTailLoader_onNav);}};

k.prototype.




updatePager=function(l){


c('FeedErrorDetection').dedupeHide
(c('LitestandStream').getStreamRoot(),
c('LitestandStream').getStoriesSelector());


if(this.pager&&l&&l.cursor){
this.pager.cursor=l.cursor;
this.pager.attach();}else 

i('update_tail_cursor_error');};

k.prototype.




removePager=function(){
this.pager&&this.pager.remove();
this.pager=null;};
k.prototype.




moreStoriesInserted=function(l){
c('Arbiter').inform
(c('LitestandMessages').STORIES_INSERTED,
{substream_id:l});

var m=c('ge')(l);
if(m){
c('LitestandOffscreenController').attachSubstream(m);
if(this.pager&&this.pager.lastRequestWasRetry){
this.pager.lastRequestWasRetry=false;
this.pager.retryCounter=0;
i('streamload.tail.retry.success');}}};





f.exports=new k();}),null);

/** js/pubcontent/feed_chaining/PubcontentFeedChainingControllerLoader.js */





__d('PubcontentFeedChainingControllerLoader',['Arbiter','AttachmentIssueDiversityShareConstants','AttachmentRelatedShareConstants','Bootloader','PageLikeConstants','SubscriptionsHandler','UFIUIEvents'],(function a(b,c,d,e,f,g){









var h=
[c('PageLikeConstants').LIKED,
c('UFIUIEvents').ActionLinkLike,
c('UFIUIEvents').ReactionButtonClicked,
c('UFIUIEvents').Comment,
c('UFIUIEvents').ActionAddComment,
'composer/publish',
'LitestandComposer/publish',
c('AttachmentRelatedShareConstants').ARTICLE_CLICK,
c('AttachmentIssueDiversityShareConstants').ARTICLE_CLICK,
c('AttachmentRelatedShareConstants').VIDEO_CLICK,
c('AttachmentRelatedShareConstants').FBVIDEO_CLICK,
c('AttachmentRelatedShareConstants').FBVIDEO_VIEW,
c('AttachmentRelatedShareConstants').GAME_CLICK,
c('AttachmentRelatedShareConstants').PHOTO_CLICK,
c('AttachmentRelatedShareConstants').EVENT_JOIN,
c('AttachmentRelatedShareConstants').PRODUCT_CLICK,
c('AttachmentRelatedShareConstants').MAP_CLICK,
c('AttachmentRelatedShareConstants').ACTION_BUTTON_CLICK],


i=null,
j=false,


k=null,

l=null,
m=null,

n=

{init:function o
(p,
q){

l=p;
m=q;

if(k){
k.init
({isLazy:false,


srs:l,
sdrs:m});}else 


this._startListening();},



_startListening:function o(){
if(i)
return;


i=new (c('SubscriptionsHandler'))();
i.addSubscriptions
(c('Arbiter').subscribe(h,function(event,p){
c('Arbiter').inform(event+'.lazy',p,c('Arbiter').BEHAVIOR_PERSISTENT);
this._bootload();}.
bind(this)));},



_bootload:function o(){
if(j)
return;

j=true;

c('Bootloader').loadModules(["PubcontentFeedChainingControllerX"],function(p){
i&&i.release();
k=p;
k.init
({isLazy:true,


srs:l,
sdrs:m});},

'PubcontentFeedChainingControllerLoader');}};



f.exports=n;}),null);

/** js/stream/FeedAdsGapRuleViolationDetection.js */




__d('FeedAdsGapRuleViolationDetection',['csx','Banzai','BanzaiODS','CSS','DataAttributeUtils','DOM','ge','isEmpty'],(function a(b,c,d,e,f,g,h){











var i='ei',
j='qid',

k='gap rule violation',
l='non violating ads gap',
m='non violating ego gap',
n='first position violation',
o='feed load',

p='first position invalidation',
q='spacing invalidation',

r='ego_pymk',
s='ego_other',

t=[],
u=[],
v=[],
w=[],
x={},
y={},

z={},
aa=[],

ba=

{registerFeedStories:function ca(da,ea){
if(da.containerID=='substream_0'){
t=[];
u=[];}


var fa=c('ge')(da.containerID);
if(!fa)
return;


z=da.egoGapRule;
aa=da.invalidateEgo?da.egoStories:{};


x=babelHelpers['extends']({},
da.demoAdChecks,
x);


var ga=this._getAllStoriesFromContainer(fa);

if(da.isLoggingEnabled&&ga.length!==0)
this._logFeedLoad();


if(da.isNewerStories){
t=ga.concat(t);}else 

t=t.concat(ga);


for(var ha in da.minGaps)
if(Object.prototype.hasOwnProperty.call(da.minGaps,ha))
y[ha]=da.minGaps[ha];






if(c('isEmpty')(x)){

if(da.isLoggingEnabled)
this._checkFirstPosViolation(da,fa);


if(da.isLoggingEnabled||da.isGapRuleInvalidationEnabled)
this._checkGapRuleViolation(da);}},




_getAllStoriesFromContainer:function ca(da){
return c('DOM').scry(da,"div._5jmm").
map(this._convertStoryNodeToObject).
filter(function(ea){return ea!==null;});},


_convertStoryNodeToObject:function ca(da){

if(c('CSS').matchesSelector
(da,
"._170y"))


return null;


var ea=da.getAttribute('data-dedupekey');
if(x[ea])

return null;


var fa=
c('DOM').scry(da,"div._hye"),
ga=
c('DOM').scry(da,"li._170x"),

ha=[];
if(fa.length!==0){
ha=fa.
map(function(ka){return c('DataAttributeUtils').getDataFt(ka);}).
filter(function(ka){return ka!==null;});}else
if(ga.length!==0){
ha=ga.
map(function(ka){return c('DataAttributeUtils').getDataFt(ka);}).
filter(function(ka){return ka!==null;});}else 

if(c('DataAttributeUtils').getDataFt(da))
ha=[c('DataAttributeUtils').getDataFt(da)];



if(!ha.length)
return null;

var ia=JSON.parse(ha[0]),

ja=
{dataFTArray:ha,
dedupKey:ea,
isSponsored:!!ia[i],
isEgoPymk:aa[ea]===r,
isEgoOther:aa[ea]===s,
height:da.offsetHeight,
qid:parseInt(ia[j],10),
nodeID:da.id};

return ja;},


_checkFirstPosViolation:function ca(da,ea){
while(t.length>0&&t[0].isSponsored){
var fa=
{ftArray:t[0].dataFTArray,
qid:t[0].qid,
nodeid:t[0].nodeID,
firstStoryType:da.firstStoryType},

ga=c('DOM').scry(ea,'.uiBoxRed')[0];
if(ga){
var ha=ga.textContent||ga.innerText;
if(ha)
fa.error_msg=ha;}


if(da.isLoggingEnabled&&
!(t[0].dedupKey in w)){
this._logFirstPosViolation(fa);
w[t[0].dedupKey]=fa;}

break;}},



_getMinGap:function ca(da,ea,fa){
var ga=Math.min
(da?da:Number.MAX_VALUE,
ea?ea:Number.MAX_VALUE);

return ga!==Number.MAX_VALUE?ga:fa;},


_getStoryDedupKeys:function ca(){
return t.map(function(da){return da.dedupKey;});},


_getStoryDedupKeysJSONString:function ca(da,ea){
var fa=[];
for(var ga=da;ga<=ea;ga++)
fa.push(t[ga].dedupKey);

return JSON.stringify(fa);},


_getIdxOfStoryToSwap:function ca(da,ea){

if(ea>=t.length-da)
return -1;


for(var fa=da+1;
fa<t.length&&ea>0;fa++){

if(!t[fa].isSponsored&&
!t[fa].isEgoPymk&&
!t[fa].isEgoOther){
ea--;}else 

return -1;


if(ea===0)
return fa;}


return -1;},


_checkGapRuleViolation:function ca(da){
var ea=null,
fa=null,
ga=null;
for(var ha=0;ha<t.length;ha++){
var ia=t[ha];
if(ia.isSponsored){
var ja=false,
ka=false;

if(fa!==null){
var la=ha-fa,
ma=null,
na=null;
if(ea===fa){

na=this._getMinGap
(y[ga.dedupKey],
y[ia.dedupKey],
da.defaultMinGap);}else 


na=this._getMinGapBetweenStories
(ga,
ia);


var oa=null;
if(la<na){
ma=k;
oa=fa;}else{

ma=l;
oa=ea;}


if(da.isLoggingEnabled)
if(!(ia.dedupKey in u)||
u[ia.dedupKey].event_type!==
ma){
this._logGapEvent(ma,oa,ha);
u[ia.dedupKey]=
{event_type:ma};}





if(da.isGapRuleInvalidationEnabled&&
ma==k){
var pa=-1;
if(da.isSwapOnGapRuleViolationEnabled)
pa=this._getIdxOfStoryToSwap(ha,na-la);


if(pa>0){

this._shiftAdOrEgoBelowOrganicStory
(ia.nodeID,t[pa].nodeID);


var qa=t[ha];
t.splice(ha,1);
t.splice(pa,0,qa);


if(da.isLoggingEnabled){
var ra=
{ft:t[pa].dataFTArray[0],
dist:pa-ha,
qid:t[pa].qid,
event_type:'ad_swap'};

c('Banzai').post('feed_ads_gap_rule_violation',ra);}


ka=true;}else
if(da.isGapRuleInvalidationEnabled){
this._invalidateGapRuleViolatedAd(ga,ia);
ja=true;


t.splice(ha--,1);}}}



if(!ja&&!ka){
ea=ha;
fa=ha;
ga=ia;}}




if(da.invalidateEgo&&
(ia.isEgoPymk||ia.isEgoOther)){
var sa=false;
if(fa!==null){
la=ha-fa;
na=this._getMinGapBetweenStories
(ga,
ia);


if(la<na){
sa=true;
pa=-1;


var ta=na-la;
for(var ua=ha+1;ua<t.length;ua++){
if(t[ua].isSponsored||
t[ua].isEgoPymk||
t[ua].isEgoOther){
break;}else 

ta--;

if(ta===0){
pa=ua;
break;}}



if(pa>0){
this._swapAndLogEgo(ha,ua);}else{

this._invalidateAndLogEgo(ha);
ha--;}}else 


if(da.shouldLogEgo&&
!v[ia.dedupKey]){
v[ia.dedupKey]=true;
this._logGapEvent(m,fa,ha);}}




if(!sa){
fa=ha;
ga=ia;}}}},





_getMinGapBetweenStories:function ca(da,ea){
var fa='';
if(da.isSponsored||da.isEgoOther){
fa='ad';}else
if(da.isEgoPymk){
fa='pymk';}else 

return 0;


var ga='';
if(ea.isSponsored||ea.isEgoOther){
ga='ad';}else
if(ea.isEgoPymk){
ga='pymk';}else 

return 0;


return z[fa+'_'+ga];},


_swapAndLogEgo:function ca(da,ea){
this._shiftAdOrEgoBelowOrganicStory
(t[da].nodeID,
t[ea].nodeID);



var fa=t[da];
t.splice(da,1);
t.splice(ea,0,fa);

c('BanzaiODS').bumpEntityKey('feed_ego_invalidation','swap');},


_invalidateAndLogEgo:function ca(da){
var ea=c('ge')(t[da].nodeID);
ea&&c('CSS').hide(ea);

t.splice(da,1);

c('BanzaiODS').bumpEntityKey('feed_ego_invalidation','invalidate');},


_logFirstPosViolation:function ca(da){
var ea=
{ft:da.ftArray[0],
event_type:n,
intValues:
{qid:da.qid},

first_story_type:da.firstStoryType};

if(da.error_msg)
ea.error_msg=da.error_msg;


c('Banzai').post('feed_ads_gap_rule_violation',ea);},


_logGapEvent:function ca(da,ea,fa){
if(ea===null)
return;


var ga=t[ea],
ha=t[fa],
ia=0;
for(var ja=ea+1;ja<fa;ja++)
ia+=t[ja].height;


var ka=
{ft_A:ga.dataFTArray[0],
ft_B:ha.dataFTArray[0],
event_type:da,
intValues:
{dist:fa-ea,
pdist:ia,
pos:fa+1,
qid_A:ga.qid,
qid_B:ha.qid},

strValues:
{previous_unit_type:this._getUnitTypeForLogging(ga),
unit_type:this._getUnitTypeForLogging(ha)},

dedup_keys:this._getStoryDedupKeysJSONString(ea,fa)};


c('Banzai').post('feed_ads_gap_rule_violation',ka);},


_getUnitTypeForLogging:function ca(da){
if(da.isSponsored){
return 'ad';}else
if(da.isEgoPymk){
return 'pymk';}else
if(da.isEgoOther)
return 'ego_other';

return null;},


_logFeedLoad:function ca(){
var da=
{event_type:o};


c('Banzai').post('feed_ads_gap_rule_violation',da);},


_invalidateFirstPosAd:function ca(da){
c('CSS').hide(c('ge')(da.nodeid));

var ea=
{ft_array:da.ftArray,
event_type:p};


c('Banzai').post('feed_ads_gap_rule_violation',ea);},


_invalidateGapRuleViolatedAd:function ca(da,ea){
var fa=c('ge')(ea.nodeID);
fa&&c('CSS').hide(fa);

var ga=
{ft_array_A:da.dataFTArray[0],
ft_array_B:ea.dataFTArray[0],
event_type:q};


c('Banzai').post('feed_ads_gap_rule_violation',ga);},


_shiftAdOrEgoBelowOrganicStory:function ca
(da,
ea){

var fa=c('ge')(da),
ga=c('ge')(ea);
fa&&ga&&
c('DOM').insertAfter(ga,fa);}};



f.exports=ba;}),null);

/** js/stream/StoryPositionTracking.js */




__d('StoryPositionTracking',['csx','DataAttributeUtils','DOM','LitestandStream','ge'],(function a(b,c,d,e,f,g,h){








var i=0;

function j(m,n){
var o=JSON.parse(c('DataAttributeUtils').getDataFt(m));
if(o){
o.insertion_position=n;
c('DataAttributeUtils').setDataFt(m,JSON.stringify(o));}}



function k(m){
return c('DOM').scry(m,"._5jmm");}


var l=

{registerNewStories:function m(n){
if(n=='substream_0')
i=0;


var o=k(c('ge')(n)),
p=o.length;
for(var q=0;q<p;q++)
j(o[q],i++);},




updateAllStories:function m(){
var n=k(c('LitestandStream').getStreamRoot()),
o=n.length;
i=0;
for(var p=0;p<o;p++)
j(n[p],i++);}};




f.exports=l;}),null);

/** js/stream/fbfeed/FbFeedViewportTracking.js */






__d('FbFeedViewportTracking',['csx','Arbiter','LitestandMessages','LitestandStream','StreamViewportTracking','viewportTrackingBuilder'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;












function k
(n,
o){

return c('StreamViewportTracking').getBehavior
(n,
c('LitestandStream').getStreamRoot(),
o);}

i=babelHelpers.inherits

(l,c('StreamViewportTracking'));j=i&&i.prototype;l.prototype.


init=function(n){
j.init.call(this,n);

this.invalidateAllStoriesCache=
this.invalidateAllStoriesCache.bind(this);
this.stopTimeTrackingData=
this.updateTimeTrackingData.bind(this,true);

this.subscriptions.addSubscriptions
(c('Arbiter').subscribe
(c('LitestandMessages').STORIES_INSERTED,
this.invalidateAllStoriesCache),

c('Arbiter').subscribe
(c('LitestandMessages').LEAVE_HOME,
this.stopTimeTrackingData));};


l.prototype.

getSessionID=function(){
return c('LitestandStream').isReady()?
c('LitestandStream').getFeedStreamID():
null;};
l.prototype.

cleanup=function(){
m.clearSingleton();
j.cleanup.call(this);};
function l(){i.apply(this,arguments);}


var m=c('viewportTrackingBuilder')
(function(n){

var o=new l
(k(n,"._5jmm"));

o.init(n);
return o;});








m.init=m.factory.bind(m);

f.exports=m;}),null);

/** www/__virtual__/x/XDOMScannerResultsController.js */



__d("XDOMScannerResultsController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/ascend_mr_no\/",{});}),

null);
