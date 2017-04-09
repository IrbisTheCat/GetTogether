if (self.CavalryLogger) { CavalryLogger.start_js(["4B2Qx"]); }

/** js/modules/KeyboardShortcuts.js */









__d('KeyboardShortcuts',['KeyEventController','Layer','ModalLayer'],(function a(b,c,d,e,f,g){






function h
(j,
k,
l){'use strict';
this.key=j;
this.handler=k;
this.filter=l;
this.register();}
h.prototype.

register=function(){'use strict';
this.token=c('KeyEventController').registerKey
(this.key,
this.handler,
this.filter);};

h.prototype.

remove=function(){'use strict';
this.token.remove();};








var i=
{_tokens:[[]],

register:function j
(k,
l,
m){
m=m||{};
var n=m.allowDefault?
l:
function(event,r){
l.apply(this,arguments);
event.prevent();},

o=m.baseFilters||[c('KeyEventController').defaultFilter],
p=function r(event,s){
for(var t=0,u=o.length;t<u;t++)
if(!o[t](event,s))
return false;


return !m.filter||m.filter(event,s);},

q=new h(k,n,p);
if(!this._tokens.length)
this._tokens.push([]);

this._tokens[this._tokens.length-1].push(q);
return q;},


init:function j(){
c('Layer').subscribe('show',function(k,l){
if(l.hasBehavior(c('ModalLayer')))
this.pushLayer();}.

bind(this));
c('Layer').subscribe('hide',function(k,l){
if(l.hasBehavior(c('ModalLayer')))
this.popLayer();}.

bind(this));},


pushLayer:function j(){
var k=this._tokens[this._tokens.length-1];
k&&k.forEach(function(l){
l.remove();});

this._tokens.push([]);},


popLayer:function j(){
var k=this._tokens.length-1;
if(k<0)
return;

var l=this._tokens[k];
l.forEach(function(n){
n.remove();});

this._tokens.pop();

var m=this._tokens[k-1];
m&&m.forEach(function(n){
n.register();});}};





i.init();

f.exports=i;}),null);

/** js/ufi/modules/LikeConfirmer.js */






__d('LikeConfirmer',['AsyncDialog','AsyncRequest'],(function a(b,c,d,e,f,g){






var h=false,


i=false,

j=

{likeContent:function k(){},

like:function k(l,m){
this.likeContent=l;
if(i)
return;

if(h){
this.likeContent();}else{

var n=new (c('AsyncRequest'))().
setURI('/like/confirm_like.php').
setRelativeTo(m);
c('AsyncDialog').send
(n,
function(o){
i=true;
o.subscribe
('hide',this.onCloseLikeConfirmDialog.bind(this));
o.setCausalElement(m);}.
bind(this));}


return false;},


isShowingConfirmation:function k(){
return i;},


onCloseLikeConfirmDialog:function k(){
i=false;},



likeSkipConfirmation:function k(l){
h=l;
this.likeContent();}};



f.exports=j;}),null);

/** js/feed/FeedBaseKeyboardController.js */





__d('FeedBaseKeyboardController',['csx','AccessibilityLogger','Arbiter','AsyncDialog','AsyncRequest','Banzai','BanzaiODS','BanzaiNectar','CSS','DOM','DOMScroll','Event','Focus','KeyboardShortcuts','LikeConfirmer','NavigationMessage','Parent','ReactComposerEvents','ReactComposerIDGenerator','Run','Scroll','SubscriptionsHandler','UITinyViewportAction','Vector','ViewportBounds','emptyFunction','ge','getActiveElement','isAsyncScrollQuery','isElementNode','throttle'],(function a(b,c,d,e,f,g,h){


































var i=0;

function j(){
i=c('UITinyViewportAction').isTiny()?0:c('ViewportBounds').getTop();}




function k(l){'use strict';





this.root=l;
this.init();}
k.prototype.


getStories=function(){'use strict';};k.prototype.


getParentStory=function(l){'use strict';};k.prototype.


isStory=function(l){'use strict';};k.prototype.



isHoldoutStory=function(l){'use strict';};k.prototype.


getHeadline=function(l){'use strict';};k.prototype.


getPreviousStory=function(l){'use strict';};k.prototype.


getNextStory=function(l){'use strict';};k.prototype.


setSelected=function(l,m){'use strict';};k.prototype.


clickLike=function(){'use strict';};k.prototype.


clickComment=function(){'use strict';};k.prototype.


clickShare=function(){'use strict';};k.prototype.


clickSeeMore=function(){'use strict';};k.prototype.


clickLeft=function(){'use strict';};k.prototype.


clickRight=function(){'use strict';};k.prototype.









openAttachment=function(){'use strict';};k.prototype.

focusComposer=function(){'use strict';
var l=c('ge')('pagelet_composer');
if(!l)
l=c('ge')('pagelet_group_composer');

if(l){
var m=c('DOM').scry(l,'textarea')[0];
if(m){
c('Focus').set(m);
c('DOMScroll').scrollToTop(true);}else{

var n=c('DOM').scry
(l,
"div._36bx")[
0],

o=n&&n.id;

if(c('ReactComposerIDGenerator').isComposerID(o)){
c('Arbiter').inform
(c('ReactComposerEvents').ACTIVATE_ATTACHMENT+n.id);

c('DOMScroll').scrollToTop(true);}}}};



k.prototype.


getScrollOffset=function(){'use strict';


return 10+(this.scrollOffset||0);};
k.prototype.

getAnimationLength=function(l){'use strict';
return Math.min
(Math.abs
(c('Vector').getElementPosition(l).y-
c('ViewportBounds').getTop()-
c('Scroll').getTop(document.body)),

400);};

k.prototype.

findTop=function(){'use strict';
var l=this.getStories();
for(var m=0;m<l.length;m++)
if(c('Vector').getElementPosition(l[m]).y>
c('Vector').getScrollPosition().y)
return l[m];


return null;};
k.prototype.

onLeave=function(){'use strict';
this.subscriptions&&this.subscriptions.release();};
k.prototype.

getHelpDialogRequest=function(){'use strict';
if(!this.dialogRequest){
this.dialogRequest=new (c('AsyncRequest'))('/ajax/keyboard_shortcuts');
this.dialogRequest.setReadOnly(true);}else
if(this.dialogRequest.transport)

return null;

return this.dialogRequest;};
k.prototype.

init=function(){'use strict';
c('Run').onLeave(this.onLeave.bind(this));

this.subscriptions=new (c('SubscriptionsHandler'))();
this.subscriptions.addSubscriptions
(c('Arbiter').subscribe
(c('NavigationMessage').NAVIGATION_BEGIN,
this.onLeave.bind(this)),

c('KeyboardShortcuts').register('j',
this.vert.bind(this,1)),

c('KeyboardShortcuts').register('k',
this.vert.bind(this,-1)),

c('KeyboardShortcuts').register('l',
function(){
var l=this.getParentStory(c('getActiveElement')());
c('LikeConfirmer').like
(function(){
this.setSelected(l,false);
this.clickLike();}.
bind(this),
c('getActiveElement')());}.

bind(this),

{filter:this.hasActiveStory.bind(this)}),


c('KeyboardShortcuts').register('c',
this.clickComment.bind(this),

{filter:this.hasActiveStory.bind(this)}),


c('KeyboardShortcuts').register('o',
this.openAttachment.bind(this),

{filter:this.hasActiveStory.bind(this)}),


c('KeyboardShortcuts').register('p',
this.focusComposer.bind(this)),

c('KeyboardShortcuts').register('s',
this.clickShare.bind(this),

{filter:this.hasActiveStory.bind(this)}),


c('KeyboardShortcuts').register('SLASH',
function(){
var l=this.getHelpDialogRequest();
if(l){
l.setRelativeTo(c('getActiveElement')());
c('AsyncDialog').send(l);}}.

bind(this),

{filter:function l(event,m){return event.getModifiers().shift;}}),


c('KeyboardShortcuts').register('RETURN',
this.clickSeeMore.bind(this),

{filter:this.hasExpandableStoryInFocus.bind(this)}),


c('KeyboardShortcuts').register('LEFT',
this.clickLeft.bind(this),

{filter:this.hasActiveStory.bind(this)}),


c('KeyboardShortcuts').register('RIGHT',
this.clickRight.bind(this),

{filter:this.hasActiveStory.bind(this)}),


c('Event').listen
(this.root,
'focusin',
function(event){
var l=event.getTarget();
if(!this.isStory(l)){




var m=c('DOM').isNodeOfType
(l,
['object','embed','iframe']),


n=this.getParentStory(l),
o=this.selected;


if(n&&!m&&o){



this.setSelected(n,true);
this.selected=n;}}}.


bind(this)));};


k.prototype.

hasActiveStory=function(event,l){'use strict';
var m=c('getActiveElement')();
return !(m&&c('CSS').shown(m))||
!!this.getParentStory(m);};
k.prototype.

hasExpandableStoryInFocus=function(event,l){'use strict';
var m=c('getActiveElement')();
return !!(m.getElementsByClassName('text_exposed_root').length&&
!m.getElementsByClassName('text_exposed_root text_exposed').
length);};
k.prototype.








clickElement=function(l){'use strict';
if(!l)
return;

var m=void 0;for(var n=arguments.length,o=Array(n>1?n-1:0),p=1;p<n;p++)o[p-1]=arguments[p];
for(var q=0,r=o.length;q<r;q++){
m=c('DOM').scry(l,o[q])[0];
if(m&&c('CSS').shown(m)){
m.click();
return;}}};


k.prototype.






click=function(){'use strict';for(var l=arguments.length,m=Array(l),n=0;n<l;n++)m[n]=arguments[n];
this.clickElement.apply(this,[this.selected].concat(m));};
k.prototype.

$FeedBaseKeyboardController_initScroll=function(){'use strict';
if(!this.$FeedBaseKeyboardController_scrollInitialized){


this.scrollOffset=0;
var l=c('ge')('pagelet_feed_switcher_root');
if(l)
this.scrollOffset+=l.getBoundingClientRect().height;


this.subscriptions.addSubscriptions
(c('Event').listen
(document,
'scroll',
function(){
if(this.selected&&!this.scrolling)
this.setSelected(null,false);}.

bind(this)));


this.$FeedBaseKeyboardController_scrollInitialized=true;}};

k.prototype.

$FeedBaseKeyboardController_initResize=function(){'use strict';
if(!this.$FeedBaseKeyboardController_resizeInitialized){
j();
this.subscriptions.addSubscriptions
(c('Event').listen
(window,
'resize',
c('throttle')(j)));


this.$FeedBaseKeyboardController_resizeInitialized=true;}};

k.prototype.

vert=function(l){'use strict';
this.$FeedBaseKeyboardController_initScroll();

var m,
n;

if(this.selected){

if(c('Banzai').isEnabled('kbshortcuts_feed')){
n=l>0?'kbshortcuts.scroll_down':
'kbshortcuts.scroll_up';
c('BanzaiODS').bumpEntityKey('kbshortcuts_feed',n);
c('BanzaiNectar').log('feed_scroll',n,{});}


c('AccessibilityLogger').logJKKey();

if(this.selected.id=='pagelet_composer'){
m=l>0?this.getStories()[0]:null;
if(this.isHoldoutStory(m))
m=this.getPreviousStory(m);}else

if(l===0){
m=this.selected;}else 

m=l>0?this.getNextStory(this.selected):
this.getPreviousStory(this.selected)||c('ge')('pagelet_composer');


if(!m){
return;}else
if(!c('isElementNode')(m)||c('CSS').hasClass(m,'hidden_elem')){
c('CSS').removeClass(this.selected,'selectedStorySimple');
this.selected=m;
this.vert(l);
return;}}


if(!m||c('Parent').byClass(m,'hidden_elem')||
!c('DOM').contains(document,m)){
m=this.findTop();
if(m&&l<0)
m=this.getPreviousStory(m);

if(this.isHoldoutStory(m))
m=this.getPreviousStory(m);}


if(!m)
return;


this.anim&&this.anim.stop();
var o=Date.now()-(this.lastScroll||0)>30,
p=c('emptyFunction');
if(l!==0)
p=this.setFocused.bind(this,m);

if(c('isAsyncScrollQuery')()){







o=false;
p();
p=c('emptyFunction');}

this.scrolling=true;
this.scrollingTimer&&clearTimeout(this.scrollingTimer);
this.$FeedBaseKeyboardController_initResize();
this.anim=c('DOMScroll').scrollTo
(m,
o?this.getAnimationLength(m):0,
false,
c('Vector').getViewportDimensions().y-i-this.getScrollOffset(),
0,
function(){
this.scrollingTimer=setTimeout(function(){

this.scrolling=false;}.
bind(this),300);
var q=c('Vector').getScrollPosition();
p();




if(q.distanceTo(c('Vector').getScrollPosition())!==0)
c('DOMScroll').scrollTo(q,0);}.

bind(this));

this.setSelected(m,true);
this.lastScroll=Date.now();};
k.prototype.

setTabindexOnStory=function(l,m){'use strict';
if(this.isStory(l))
l.tabIndex=m;};

k.prototype.

setFocused=function(l){'use strict';
if(this.isStory(l))
c('Focus').setWithoutOutline(l);};





f.exports=k;}),null);

/** js/modules/AsyncLayout.js */




__d('AsyncLayout',['AjaxPipeRequest','Arbiter','AsyncRequest','AsyncResponse','CSS','FaceliftGating','DOM','HTML','NavigationMessage','PageTransitionsRegistrar','URI','$','emptyFunction','ge','goURI','requireWeak'],(function a(b,c,d,e,f,g){



















var h;
c('requireWeak')('PageTransitions',function(j){
h=j;});








function i(j){'use strict';
this.canvasID=j;

if(c('ge')('rightCol'))
this.auxiliaryID='rightCol';

if(c('ge')('headerArea'))
this.headerID='headerArea';

if(c('ge')('toolbarContainer'))
this.toolbarID='toolbarContainer';

this.waitingForAux=false;

c('PageTransitionsRegistrar').registerHandler
(this.catchPageTransition.bind(this));


this.subscription=c('Arbiter').subscribe
(c('NavigationMessage').NAVIGATION_BEGIN,
this.onNavigate.bind(this));


c('Arbiter').inform('AsyncLayout/initialized',null,c('Arbiter').BEHAVIOR_STATE);}
i.prototype.

catchPageTransition=function(j){'use strict';
this.subscription.unsubscribe();
return false;};
i.prototype.

getCanvasID=function(j){'use strict';
return j.sidecol?'contentCol':'contentArea';};
i.prototype.

onNavigate=function(j,k){'use strict';
var l=k.useAjaxPipe;
k=k.params;
if(k.endpoint){

if(this.request){
this.request.setFinallyHandler(c('emptyFunction'));
this.request.abort();}


if(l){








k.xui_grid=c('FaceliftGating').hasXUIGrid;

this.request=new (c('AjaxPipeRequest'))().
setURI(k.endpoint).
setData(k).
setCanvasId(this.getCanvasID(k)).
setFinallyHandler(this.finallyHandler.bind(this)).
setErrorHandler(this.errorHandler.bind(this)).
setFirstResponseCallback(this.firstResponseCallback.bind(this)).
send();}else{

k.handled=true;

this.waitingForAux=k.sidecol;


var m=!!k.iframe,
n=
new (c('AsyncRequest'))().
setOption('useIframeTransport',m).
setURI(new (c('URI'))(k.endpoint)).
setReadOnly(true).
setMethod('GET').
setData(k).
setHandler(this.onResponse.bind(this)).
setErrorHandler(this.errorHandler.bind(this)).
setFinallyHandler(this.finallyHandler.bind(this));
this.request=n;
n.send();}}};


i.prototype.

receivedAux=function(j){'use strict';
!this.waitingForAux;





this.waitingForAux=false;

c('DOM').setContent(c('$')(this.auxiliaryID),c('HTML')(j));};
i.prototype.

onResponse=function(j){'use strict';
var k=j.getPayload();
if(k.redirect){
c('goURI')(k.redirect);}else{

var l=k.html||k;
c('DOM').setContent(c('$')(this.canvasID),c('HTML')(l));

if(k.side_html&&this.auxiliaryID)
this.receivedAux(k.side_html);


if(this.headerID&&!k.keep_header){
var m=c('$')(this.headerID);
c('DOM').setContent(m,c('HTML')(k.header_html||''));



c('CSS').conditionShow(m,k.header_html);}


if(k.toolbar_html&&this.toolbarID)
c('DOM').setContent(c('$')(this.toolbarID),c('HTML')(k.toolbar_html));


if(k.js)

new Function(k.js)();



c('CSS').conditionClass
('contentCol',
'hasRightCol',
this.auxiliaryID&&!k.noRightSide);






var n=c('ge')('rightCol');
if(n&&k.noRightSide)
c('DOM').empty(n);}



var o=j.getRequest().getData();
c('Arbiter').inform(c('NavigationMessage').NAVIGATION_COMPLETED,o.key);};
i.prototype.

errorHandler=function(j){'use strict';
c('AsyncResponse').verboseErrorHandler(j);
c('Arbiter').inform(c('NavigationMessage').NAVIGATION_FAILED);
this.request=null;};
i.prototype.

firstResponseCallback=function(j){'use strict';
window.scrollTo(0,0);
c('Arbiter').inform(c('NavigationMessage').NAVIGATION_FIRST_RESPONSE);};
i.prototype.

finallyHandler=function(j){'use strict';
this.request=null;
if(h)
h.transitionComplete(true);

c('Arbiter').inform(c('NavigationMessage').NAVIGATION_COMPLETED);};



f.exports=i;}),null);

/** js/modules/DimensionLogging.js */




__d('DimensionLogging',['BanzaiNectar','getViewportDimensions'],(function a(b,c,d,e,f,g){






var h=c('getViewportDimensions')();
c('BanzaiNectar').log('browser_dimension','homeload',
{x:h.width,
y:h.height,
sw:window.screen.width,
sh:window.screen.height,
aw:window.screen.availWidth,
ah:window.screen.availHeight,
at:window.screen.availTop,
al:window.screen.availLeft});}),null);

/** js/rhc/AbstractDockingElement.js */





__d('AbstractDockingElement',['Arbiter','Event','Run','SubscriptionsHandler','onEnclosingPageletDestroy','queryThenMutateDOM','removeFromArray'],(function a(b,c,d,e,f,g){
















var h=[],
i=null;

function j(){
c('queryThenMutateDOM')
(function(){return h.forEach(function(m){return m.queryDOM();});},
function(){return h.forEach(function(m){return m.updateWithCache();});},
'AbstractDockingElement');}



function k(){
if(!i){
i=new (c('SubscriptionsHandler'))();
i.addSubscriptions
(c('Event').listen(window,'scroll',j),
c('Event').listen(window,'resize',j),
c('Run').onLeave(function(){
while(h.length)
l(h[0]);}));



i=i;}


return i;}


function l(m){

try{m.onPageletDestroyed&&c('Arbiter').unsubscribe(m.onPageletDestroyed);}catch(
n){



}finally{
m.onPageletDestroyed=null;}


if(!i||h.indexOf(m)===-1)
return;


c('removeFromArray')(h,m);

if(h.length)
return;


i.release();
i=null;}


f.exports=
{register:function m
(n,
o,
p){


var q=k(),

r=
{onPageletDestroyed:q.addSubscriptions
(c('onEnclosingPageletDestroy')(n,function(){
l(r);})),


queryDOM:o,
updateWithCache:p};


h.push(r);}};}),
null);

/** js/rhc/DirectionalDockingElement.js */









__d('DirectionalDockingElement',['AbstractDockingElement','Arbiter','DOM','Scroll','Style','UITinyViewportAction','UserAgent','ViewportBounds','getElementPosition','getStyleProperty','queryThenMutateDOM'],(function a(b,c,d,e,f,g){

















var h=true,
i=false,

j=
c('UserAgent').isBrowser('Safari')||c('UserAgent').isBrowser('Mobile Safari');

















function k(l){'use strict';
this.$DirectionalDockingElement_currentOffset=0;
this.$DirectionalDockingElement_cachedLeft=null;
this.$DirectionalDockingElement_isElasticScrollingPastBottom=false;
this.$DirectionalDockingElement_root=l;
this.$DirectionalDockingElement_offset=0;
this.$DirectionalDockingElement_position=null;
this.$DirectionalDockingElement_scrollTop=0;

this.register();

this.$DirectionalDockingElement_topBound=c('ViewportBounds').getTop();
c('Style').set
(this.$DirectionalDockingElement_root,
'width',
this.$DirectionalDockingElement_root.getBoundingClientRect().width+'px');






this.$DirectionalDockingElement_placeholder=c('DOM').create('div');
c('Style').set(this.$DirectionalDockingElement_placeholder,'position','relative');
c('DOM').replace(this.$DirectionalDockingElement_root,this.$DirectionalDockingElement_placeholder);
c('DOM').appendContent(this.$DirectionalDockingElement_placeholder,this.$DirectionalDockingElement_root);

this.update();}
k.prototype.






register=function(){'use strict';
c('AbstractDockingElement').register
(this.getRoot(),
this.__queryDOM.bind(this),
this.__updateWithCache.bind(this));};

k.prototype.

subscribe=
function(event,
l,
m){
'use strict';
if(!this.$DirectionalDockingElement_arbiter)
this.$DirectionalDockingElement_arbiter=new (c('Arbiter'))();


return this.$DirectionalDockingElement_arbiter.subscribe(event,l,m);};
k.prototype.

__queryDOM=function(){'use strict';



var l=-c('getElementPosition')(this.$DirectionalDockingElement_placeholder).y;
if(l!==this.$DirectionalDockingElement_scrollTop){
this.$DirectionalDockingElement_scrollDirection=l>this.$DirectionalDockingElement_scrollTop?
i:h;
this.$DirectionalDockingElement_scrollTop=l;}


this.$DirectionalDockingElement_dimensions=this.$DirectionalDockingElement_root.getBoundingClientRect();var m=

document,n=m.body,o=m.documentElement;
if(n&&o){
var p=o.clientHeight,q=o.scrollHeight;
this.$DirectionalDockingElement_isElasticScrollingPastBottom=
c('Scroll').getTop(n)+p>Math.max(p,q);}




if(j){
var r=c('getElementPosition')(this.$DirectionalDockingElement_placeholder),
s=parseInt(c('getStyleProperty')(this.$DirectionalDockingElement_root,'left'),10);




if(!isNaN(s)&&s!==r.x)
this.$DirectionalDockingElement_position=babelHelpers['extends']({},r,{x:s});}





if(this.$DirectionalDockingElement_root.style.position==='fixed')
this.$DirectionalDockingElement_currentOffset=c('getElementPosition')(this.$DirectionalDockingElement_root).y+this.$DirectionalDockingElement_scrollTop;};

k.prototype.

$DirectionalDockingElement_setRootStyle=
function(l,
m,
n){
'use strict';

if(m===this.$DirectionalDockingElement_cachedTop&&
l===this.$DirectionalDockingElement_cachedPosition&&
n===this.$DirectionalDockingElement_cachedLeft)
return;


var o={};

if(m!==this.$DirectionalDockingElement_cachedTop){
o.top=m+'px';
this.$DirectionalDockingElement_cachedTop=m;}


if(l!==this.$DirectionalDockingElement_cachedPosition){
o.position=l;
this.$DirectionalDockingElement_cachedPosition=l;}








if(j)
if(n!==this.$DirectionalDockingElement_cachedLeft){
o.left=typeof n==='number'?n+'px':'auto';
this.$DirectionalDockingElement_cachedLeft=n;}



c('Style').apply(this.$DirectionalDockingElement_root,o);};
k.prototype.

$DirectionalDockingElement_fixTop=function(){'use strict';
this.$DirectionalDockingElement_setRootStyle
('fixed',
this.$DirectionalDockingElement_topBound,
this.$DirectionalDockingElement_position?this.$DirectionalDockingElement_position.x:null);};

k.prototype.

$DirectionalDockingElement_fixMiddle=function(){'use strict';
this.$DirectionalDockingElement_setRootStyle
('fixed',
this.$DirectionalDockingElement_offset,
this.$DirectionalDockingElement_position?this.$DirectionalDockingElement_position.x:null);};

k.prototype.

$DirectionalDockingElement_unfix=function(){'use strict';
this.$DirectionalDockingElement_setRootStyle('absolute',this.$DirectionalDockingElement_currentOffset,null);};
k.prototype.








translateY=function(l){'use strict';
var m=c('getElementPosition')(this.$DirectionalDockingElement_root).y,
n=c('getElementPosition')(this.$DirectionalDockingElement_placeholder).y,
o=m-n;
this.$DirectionalDockingElement_currentOffset=l+o;
this.$DirectionalDockingElement_unfix();};
k.prototype.

__updateWithCache=function(){'use strict';

var l=this.$DirectionalDockingElement_dimensions.height;
if(l!==this.$DirectionalDockingElement_placeholderHeight){
c('Style').set(this.$DirectionalDockingElement_placeholder,'height',l+'px');
this.$DirectionalDockingElement_placeholderHeight=l;
this.$DirectionalDockingElement_arbiter&&this.$DirectionalDockingElement_arbiter.inform('changedheight');}



if(this.$DirectionalDockingElement_isElasticScrollingPastBottom)
return;



if(this.$DirectionalDockingElement_scrollTop+this.$DirectionalDockingElement_topBound<0||
c('UITinyViewportAction').isTiny()){
this.$DirectionalDockingElement_currentOffset=0;
this.$DirectionalDockingElement_unfix();
return;}



if(this.$DirectionalDockingElement_scrollDirection===i&&
this.$DirectionalDockingElement_scrollTop+this.$DirectionalDockingElement_offset>=this.$DirectionalDockingElement_currentOffset){
this.$DirectionalDockingElement_fixMiddle();}else


if(this.$DirectionalDockingElement_scrollDirection===h&&
this.$DirectionalDockingElement_scrollTop+this.$DirectionalDockingElement_topBound<=this.$DirectionalDockingElement_currentOffset){
this.$DirectionalDockingElement_fixTop();}else 

this.$DirectionalDockingElement_unfix();};

k.prototype.

update=function(){'use strict';
c('queryThenMutateDOM')
(function(){
this.__queryDOM();}.
bind(this),
function(){
this.__updateWithCache();}.
bind(this));};

k.prototype.


setOffset=function(l){'use strict';
return this.setOffsetAndTop(l,this.$DirectionalDockingElement_topBound);};
k.prototype.

setOffsetAndTop=function(l,m){'use strict';
c('queryThenMutateDOM')
(function(){
this.__queryDOM();
this.$DirectionalDockingElement_offset=l;
this.$DirectionalDockingElement_topBound=m;}.
bind(this),
function(){
this.__updateWithCache();}.
bind(this));


return this;};
k.prototype.

setTop=function(l){'use strict';
return this.setOffsetAndTop(this.$DirectionalDockingElement_offset,l);};
k.prototype.

getPlaceholder=function(){'use strict';
return this.$DirectionalDockingElement_placeholder;};
k.prototype.

getRoot=function(){'use strict';
return this.$DirectionalDockingElement_root;};




f.exports=k;}),null);

/** js/rhc/DockingElement.js */





__d('DockingElement',['AbstractDockingElement','Arbiter','CSS','DOM','DOMDimensions','Style','UserAgent','UITinyViewportAction','getElementPosition','mixin'],(function a(b,c,d,e,f,g){



















var h=
c('UserAgent').isBrowser('Safari')||c('UserAgent').isBrowser('Mobile Safari');















function i(j){'use strict';
this.$DockingElement_root=j;
this.$DockingElement_placeholder=c('DOM').create('div');
c('Style').set(this.$DockingElement_placeholder,'position','relative');
c('DOM').replace(this.$DockingElement_root,this.$DockingElement_placeholder);
c('DOM').appendContent(this.$DockingElement_placeholder,this.$DockingElement_root);

this.$DockingElement_offset=0;

this.register();
this.update();}
i.prototype.






register=function(){'use strict';
c('AbstractDockingElement').register
(this.getRoot(),
this.__queryDOM.bind(this),
this.__updateWithCache.bind(this));};

i.prototype.

subscribe=
function(event,
j,
k){
'use strict';
if(!this.$DockingElement_arbiter)
this.$DockingElement_arbiter=new (c('Arbiter'))();


return this.$DockingElement_arbiter.subscribe(event,j,k);};
i.prototype.

__queryDOM=function(){'use strict';
var j=this.$DockingElement_isFixed?this.getPlaceholder():this.$DockingElement_root;
this.$DockingElement_position=c('getElementPosition')(j);
this.$DockingElement_dimensions=c('DOMDimensions').getElementDimensions(j);};
i.prototype.

__updateWithCache=function(){'use strict';
var j=this.$DockingElement_offset,
k=this.getPlaceholder();

if(!c('UITinyViewportAction').isTiny()&&this.$DockingElement_position.y<=j){
if(!this.$DockingElement_isFixed&&this.$DockingElement_root.parentNode){
c('CSS').addClass(this.$DockingElement_root,'fixed_elem');
this.$DockingElement_isFixed=true;}


var l;
if(this.$DockingElement_currentOffset!==j){
l={};
l.top=j+'px';
this.$DockingElement_currentOffset=j;}


var m=this.$DockingElement_dimensions.width;
if(m!==this.$DockingElement_cachedWidth){
l=l||{};
l.width=m+'px';
this.$DockingElement_cachedWidth=m;}








if(h){
var n=this.$DockingElement_position.x;
if(n!==this.$DockingElement_cachedLeft){
l=l||{};
l.left=n+'px';
this.$DockingElement_cachedLeft=n;}}



l&&c('Style').apply(this.$DockingElement_root,l);

var o=this.$DockingElement_dimensions.height;
if(o!==this.$DockingElement_placeholderHeight){
c('Style').set(k,'height',o+'px');
this.$DockingElement_placeholderHeight=o;
this.$DockingElement_arbiter&&this.$DockingElement_arbiter.inform('changedheight');}}else

if(this.$DockingElement_isFixed){
c('Style').apply(this.$DockingElement_root,
{left:'',
top:'',
width:''});

c('CSS').removeClass(this.$DockingElement_root,'fixed_elem');

this.$DockingElement_isFixed=false;
this.$DockingElement_cachedLeft=null;
this.$DockingElement_cachedWidth=null;
this.$DockingElement_currentOffset=null;}};

i.prototype.

update=function(){'use strict';
this.__queryDOM();
this.__updateWithCache();};
i.prototype.

getPlaceholder=function(){'use strict';
return this.$DockingElement_placeholder;};
i.prototype.

getRoot=function(){'use strict';
return this.$DockingElement_root;};
i.prototype.




setOffset=function(j){'use strict';
this.$DockingElement_offset=j;
this.update();

return this;};




f.exports=i;}),null);

/** js/rhc/StickyRHC.js */





__d('StickyRHC',['csx','$','Arbiter','DirectionalDockingElement','DockingElement','DOMDimensions','DOMQuery','Event','Run','SubscriptionsHandler','ViewportBounds','ge','getElementPosition','getViewportDimensions','removeFromArray','throttle'],(function a(b,c,d,e,f,g,h){






















var i=35,
j=[],
k;

function l(z,aa){
if(!aa||!aa.dom_id){

j.forEach(m);
return;}


var ba=c('$')(aa.dom_id);
for(var ca=0;ca<j.length;ca++)
if(c('DOMQuery').contains(j[ca].getRoot(),ba)){
m(j[ca]);
return;}}




function m(z){
var aa=z.getRoot(),
ba=z.updateOffset.bind(z),
ca=c('DOMQuery').scry(aa,'img.img');
ca.forEach(function(da){
if(da.complete||da.getAttribute('height')||
da.naturalHeight===undefined&&
da.naturalHeight!==0)
return;


var ea=function ia(){
ba();
fa.remove();
ga.remove();
ha.remove();},


fa=c('Event').listen(da,'load',ea),
ga=c('Event').listen(da,'error',ea),
ha=c('Event').listen(da,'abort',ea);});


ba();}


function n(){
j.forEach(function(z){
z.updateOffset();});}







function o(){
n();
n();}


function p(z){
var aa=c('DOMQuery').scry(z,"._4-u2"),
ba=c('DOMQuery').scry(z,"._4-u3"),
ca=c('DOMQuery').scry(z,'.uiHeader'),
da=c('DOMQuery').scry(z,'.ego_unit');

return [].
concat(aa,ba,ca,da).
filter(function(ea){return t(ea)!==0;});}


function q(z){
return c('getElementPosition')(z).y;}


function r(z,aa){
return z-aa;}


function s(){
return t(c('ge')('pageFooter'));}


function t(z){
return z?
c('DOMDimensions').getElementDimensions(z).height:
0;}


var u=v(n);

function v(z){
return function(aa){return c('Arbiter').subscribe(aa,z);};}








function w
(z,
aa){

var ba=arguments.length<=2||arguments[2]===undefined?true:arguments[2];'use strict';
this.$StickyRHC_root=z;
this.$StickyRHC_dockingInstance=aa?
new (c('DirectionalDockingElement'))(z):
new (c('DockingElement'))(z);
this.$StickyRHC_shouldStickIntelligently=ba;

this.$StickyRHC_dockingInstance.subscribe
('changedheight',
this.updateOffset.bind(this));


this.updateOffset();
m(this);

if(!j.length){
k=new (c('SubscriptionsHandler'))();
k.addSubscriptions
(u('header_loaded'),
u('browse_top_filters_full_width_displayed'),
u('search_top_bar_displayed'),
c('Arbiter').subscribe('netego_loaded',l),
c('Arbiter').subscribe('video_fullscreen_change',o),
c('Event').listen(window,'resize',c('throttle')(n)));}



c('Run').onLeave(function(){return this.destroy();}.bind(this));

j.push(this);}
w.

getInstances=function(){'use strict';
return j;};
w.prototype.

getRoot=function(){'use strict';
return this.$StickyRHC_root;};
w.prototype.

destroy=function(){'use strict';
this.$StickyRHC_dockingInstance=null;
c('removeFromArray')(j,this);

if(!j.length&&k){
k.release();
k=null;}};

w.prototype.

updateOffset=function(){'use strict';
this.$StickyRHC_dockingInstance.setOffset(this.calculateRHCOffset());};
w.prototype.

calculateRHCOffset=function(){'use strict';
var z=this.getRoot(),

aa=t(z),
ba=x(),
ca=y();

if(aa<ca)
return ba;


if(this.$StickyRHC_shouldStickIntelligently){
var da=p(z).map(q).sort(r),
ea=aa+q(z);

for(var fa=da,ga=Array.isArray(fa),ha=0,fa=ga?fa:fa[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var ia;if(ga){if(ha>=fa.length)break;ia=fa[ha++];}else{ha=fa.next();if(ha.done)break;ia=ha.value;}var ja=ia,
ka=ea-ja;

if(ka<ca)
return ba-(aa-ka);}}




return ba-(aa-ca);};



function x(){
return c('ViewportBounds').getTop();}


function y(){
var z=x(),
aa=c('getViewportDimensions')().height,
ba=s();

return aa-
z-


i-








ba;}



f.exports=w;}),null);

/** js/stream/fbfeed/FbFeedKeyboardController.js */





__d('FbFeedKeyboardController',['csx','cx','CSS','DOM','DOMQuery','FbFeedHighlight','FeedBaseKeyboardController','Focus','JSXDOM','Parent','ge','getActiveElement','isElementNode'],(function a(b,c,d,e,f,g,h,i){var j,k;
















function l(o){
if(o.previousElementSibling)
return o.previousElementSibling;


o=o.previousSibling;
while(o&&!c('isElementNode')(o))
o=o.previousSibling;

return o||null;}


function m(o){
if(o.nextElementSibling)
return o.nextElementSibling;


o=o.nextSibling;
while(o&&!c('isElementNode')(o))
o=o.nextSibling;

return o||null;}
j=babelHelpers.inherits

(n,c('FeedBaseKeyboardController'));k=j&&j.prototype;n.prototype.
getStories=function(o){'use strict';
return c('DOMQuery').scry
(o||this.root,
"._5jmm");};

n.prototype.

isHoldoutStory=function(o){'use strict';
return !!o&&c('CSS').hasClass(o,'holdoutAdStory');};
n.prototype.









isRelevantStory=function(o){'use strict';
return c('isElementNode')(o)&&!this.isHoldoutStory(o);};
n.prototype.

isStory=function(o){'use strict';
return c('CSS').matchesSelector(o,"._5jmm");};
n.prototype.

clickLike=function(){'use strict';
var o=this.$FbFeedKeyboardController_getSelectedStory();
this.clickElement(o,'.UFILikeLink');

if(o!==this.selected)
return;

var p=this.getParentStory(c('getActiveElement')());
if(p){
var q=c('DOMQuery').scry(p,'.UFILikeLink');
for(var r=0;r<q.length;r++)


if(!c('CSS').hasClass(q[r],'accessible_elem'))
c('Focus').setWithoutOutline(q[r]);}};



n.prototype.

clickComment=function(){'use strict';
this.clickElement(this.$FbFeedKeyboardController_getSelectedStory(),'.comment_link');};
n.prototype.

clickShare=function(){'use strict';
this.click('.share_action_link');};
n.prototype.

clickSeeMore=function(){'use strict';
this.click('.see_more_link');};
n.prototype.

clickLeft=function(){'use strict';
this.click("._1mri");};
n.prototype.

clickRight=function(){'use strict';
this.click("._2fu-");};
n.prototype.

openAttachment=function(){'use strict';
this.click
("._5dec",
"a._52c6",
"._4-eo",
'.uiVideoThumb');};

n.prototype.

getHeadline=function(o){'use strict';
return c('DOMQuery').scry(o,"h5._5pbw")[0];};
n.prototype.

$FbFeedKeyboardController_shouldUseAllStoriesInSiblingSearch=function(o){'use strict';
var p=c('Parent').bySelector(o,"._5pcb"),
q=c('ge')('pagelet_soft_permalink_posts');


return !!(p||
q&&c('DOM').contains(q,o));};

n.prototype.

getPreviousSibling=function(o){'use strict';
var p=l(o);
if(p&&this.getParentStory(p))
return p;


p=null;
if(this.$FbFeedKeyboardController_shouldUseAllStoriesInSiblingSearch(o)){
var q=this.getStories(this.root),
r=q.indexOf(o);
while(r>-1){
if(r===0){
p=c('ge')('pagelet_composer');
p=p&&
c('Parent').bySelector(p,"._5jmm");}else
if(r>0){
p=q[r-1];
if(p.offsetHeight>0)
break;}


r--;}}



return p||this.selected;};
n.prototype.

getPreviousStory=function(o){'use strict';
var p=this.getPreviousSibling(o);
while(p&&!this.isStory(p))
p=this.getPreviousSibling(p);

return p;};
n.prototype.

getParentStory=function(o){'use strict';
return c('Parent').bySelector(o,"._5jmm");};
n.prototype.

getNextSibling=function(o){'use strict';
var p=m(o);
if(p&&this.getParentStory(p))
return p;


p=null;
if(this.$FbFeedKeyboardController_shouldUseAllStoriesInSiblingSearch(o)){
var q=this.getStories(this.root),
r=q.indexOf(o);
if(r>-1){
p=q[++r];
while(p&&p.offsetHeight===0)
p=q[++r];}}else


if(c('ge')('pagelet_composer',o))
p=c('DOMQuery').scry
(document,
"div._5pcb ._5jmm")[
0];


return p||this.selected;};
n.prototype.

getNextStory=function(o){'use strict';
var p=this.getNextSibling(o);
while(p&&!this.isStory(p))
p=this.getNextSibling(p);

return p;};
n.prototype.

setSelected=function(o,p){'use strict';
if(o){
var q=
"_5qdu",
r=
c('DOMQuery').scry
(o,"._5qdu");

if(!r.length&&p)
c('DOM').prependContent
(o,
c('JSXDOM').div({className:q}));}



if(p){
this.selected&&this.setTabindexOnStory(this.selected,'-1');
this.selected&&c('CSS').removeClass
(this.selected,
"_5qdv");

this.selected=o;
o&&this.setTabindexOnStory(o,'0');
o&&c('CSS').addClass
(o,
"_5qdv");

c('FbFeedHighlight').highlightSingle(o);}};

n.prototype.

$FbFeedKeyboardController_getSelectedStory=function(){'use strict';
var o=c('DOM').scry
(this.selected,
"._1qch");

if(o.length>0)
return c('DOM').scry(this.selected,"._3el7")[0];

return this.selected;};
n.


init=function(o){'use strict';
return new n(o);};
function n(){'use strict';j.apply(this,arguments);}


f.exports=n;}),null);
