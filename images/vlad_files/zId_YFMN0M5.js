if (self.CavalryLogger) { CavalryLogger.start_js(["zSghE"]); }

/** __static_js_modules__/profilesubfollowstatus.js */




__d("ProfileSubFollowStatus",[],(function a(b,c,d,e,f,g){

f.exports={REGULAR_FOLLOW:"follow",RECAP:"recap",SEE_FIRST:"see_first",UNFOLLOW:"unfollow"};}),

null);

/** js/feed/FeedBlacklistButton.js */





__d('FeedBlacklistButton',['Arbiter','Event'],(function a(b,c,d,e,f,g){




var h=
{BLACKLIST:'feed_blacklist',
UNBLACKLIST:'feed_unblacklist',







init:function i(j,k,l,m){

c('Event').listen(k,'click',function(){
var n={profile_id:m};
c('Arbiter').inform(h.BLACKLIST,n);
c('Arbiter').inform('UnfollowingUser',n);});


c('Event').listen(l,'click',function(){
var n={profile_id:m};
c('Arbiter').inform(h.UNBLACKLIST,n);
c('Arbiter').inform('FollowingUser',n);});


c('Arbiter').subscribe(h.BLACKLIST,function(n,o){
if(m==o.profile_id)
j.swap();});



c('Arbiter').subscribe(h.UNBLACKLIST,function(n,o){
if(m==o.profile_id)
j.unswap();});}};





f.exports=b.FeedBlacklistButton||h;}),null);

/** js/modules/ParameterizedPopover.js */





__d('ParameterizedPopover',['Arbiter','ArbiterMixin','CSS','DataStore','Event','Focus','Keys','KeyStatus','LayerHideOnEscape','SubscriptionsHandler','Toggler','curry','mixin'],(function a(b,c,d,e,f,g){var h,i;
















c('Toggler').subscribe(['show','hide'],function(k,l){
var m=c('DataStore').get(l.getActive(),'Popover');

if(m)
if(k==='show'){
m.showLayer();}else 

m.hideLayer();});


h=babelHelpers.inherits

(j,c('mixin')(c('ArbiterMixin')));i=h&&h.prototype;
function j(k,l,m,n){'use strict';
i.constructor.call(this);
this._root=k;
this._triggerElem=l;
this._behaviors=m;
this._config=n||{};
this._disabled=!!this._config.disabled;
this._listeners=new (c('SubscriptionsHandler'))();

if(!this._disabled&&
(l.nodeName!=='A'||l.rel!=='toggle'))
this._setupClickListener();

this._setupKeyListener();
this._setupFocusListener();
this._setupBlurListener();
l.setAttribute('role','button');
c('DataStore').set(k,'Popover',this);


if(c('Toggler').getActive()===k)
this.showLayer();}

j.prototype.

ensureInit=function(){'use strict';
if(!this._layer)
this._init();};

j.prototype.

showLayer=function(){'use strict';
if(this._disabled)
return;


this.ensureInit();
this._layer.show();
c('Toggler').show(this._root);
c('CSS').addClass(this._root,'selected');
this.inform('show');};
j.prototype.

getContentRoot=function(){'use strict';
return this._root;};
j.prototype.

getLayer=function(){'use strict';
return this._layer;};
j.prototype.

hideLayer=function(){'use strict';
this.ensureInit();
this._layer.hide();};
j.prototype.

isShown=function(){'use strict';
return this._layer&&this._layer.isShown();};
j.prototype.

setLayerContent=function(k){'use strict';
this.ensureInit();
if(this._layer.setContent)

this._layer.setContent(k);};

j.prototype.

_init=function(){'use strict';
var k=this._config.layer;
k.enableBehaviors([c('LayerHideOnEscape')]);



c('Toggler').createInstance(k.getRoot()).setSticky(false);

k.subscribe('hide',this._onLayerHide.bind(this));
this._behaviors&&k.enableBehaviors(this._behaviors);
this._layer=k;

this.inform('init',null,c('Arbiter').BEHAVIOR_PERSISTENT);};
j.prototype.





_onLayerHide=function(){'use strict';
c('Toggler').hide(this._root);
c('CSS').removeClass(this._root,'selected');
this.inform('hide');


if(c('KeyStatus').getKeyDownCode()===c('Keys').ESC)
c('Focus').set(this._triggerElem);};

j.prototype.

enable=function(){'use strict';
if(!this._disabled)
return;


this._listeners.engage();
this._setupClickListener();
this._setupKeyListener();
this._setupFocusListener();
this._setupBlurListener();

this._disabled=false;};
j.prototype.

disable=function(){'use strict';
if(this._disabled)
return;


if(this.isShown())
this.hideLayer();


this._listeners.release();


if(this._triggerElem.getAttribute('rel')==='toggle')
this._triggerElem.removeAttribute('rel');


this._disabled=true;};
j.prototype.

_setupClickListener=function(){'use strict';
this._listeners.addSubscriptions(c('Event').listen
(this._triggerElem,
'click',
c('curry')(c('Toggler').bootstrap,this._triggerElem)));};

j.prototype.

_setupKeyListener=function(){'use strict';
this._listeners.addSubscriptions(c('Event').listen
(this._triggerElem,
'keydown',
this._handleKeyEvent.bind(this)));};

j.prototype.

_setupFocusListener=function(){'use strict';
this._listeners.addSubscriptions(c('Event').listen
(this._triggerElem,
'focus',
this._handleFocusEvent.bind(this)));};

j.prototype.

_setupBlurListener=function(){'use strict';
this._listeners.addSubscriptions(c('Event').listen
(this._triggerElem,
'blur',
this._handleBlurEvent.bind(this)));};

j.prototype.

_handleKeyEvent=function(event){'use strict';
if(event.getModifiers().any)
return;

var k=c('Event').getKeyCode(event);
switch(k){
case c('Keys').DOWN:
case c('Keys').UP:
if(this._config.disableArrowKeyActivation)
return;

if(!this.isShown())
c('Toggler').bootstrap(this._triggerElem);

break;
case c('Keys').RETURN:
if(!this._config.enableActivationOnEnter)
return;

if(!this.isShown())
c('Toggler').bootstrap(this._triggerElem);

break;
case c('Keys').SPACE:
c('Toggler').bootstrap(this._triggerElem);
break;

default:return;}

event.prevent();};
j.prototype.

_handleFocusEvent=function(event){'use strict';
c('CSS').addClass(this._root,'focused');};
j.prototype.

_handleBlurEvent=function(event){'use strict';
c('CSS').removeClass(this._root,'focused');};
j.prototype.

destroy=function(){'use strict';
this.disable();
c('DataStore').remove(this._root,'Popover');};



Object.assign(j.prototype,
{_layer:null});


f.exports=j;}),null);

/** js/ui/layer/behaviors/ContextualLayerHideOnScroll.js */





__d('ContextualLayerHideOnScroll',['Event'],(function a(b,c,d,e,f,g){
















function h(i){'use strict';
this._layer=i;}
h.prototype.

enable=function(){'use strict';
this._subscriptions=
[this._layer.subscribe
('contextchange',
this._handleContextChange.bind(this)),
this._layer.subscribe('show',this.attach.bind(this)),
this._layer.subscribe('hide',this.detach.bind(this))];};

h.prototype.

disable=function(){'use strict';
while(this._subscriptions.length)
this._subscriptions.pop().unsubscribe();

this.detach();};
h.prototype.

attach=function(){'use strict';
if(this._listener)
return;

var i=this._layer.getContextScrollParent();
if(i===window)
return;

this._listener=c('Event').listen
(i,
'scroll',
this._layer.hide.bind(this._layer));};

h.prototype.

detach=function(){'use strict';
this._listener&&this._listener.remove();
this._listener=null;};
h.prototype.

_handleContextChange=function(){'use strict';
this.detach();
if(this._layer.isShown())
this.attach();};




Object.assign(h.prototype,
{_subscriptions:[]});


f.exports=h;}),null);

/** js/modules/Popover.js */





__d('Popover',['ContextualLayer','ContextualLayerHideOnScroll','DOM','ParameterizedPopover'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits






(j,c('ParameterizedPopover'));i=h&&h.prototype;j.prototype.
_init=function(){'use strict';
var k=new (c('ContextualLayer'))
({context:this._triggerElem,
position:'below',

arrowDimensions:
{offset:12,
length:16},

'data-testid':this._config['data-testid']},
c('DOM').create('div'));
k.enableBehaviors([c('ContextualLayerHideOnScroll')]);
this._config.layer=k;

if(this._config.alignh)
k.setAlignment(this._config.alignh);

if(this._config.layer_content)
k.setContent(this._config.layer_content);

if(this._config.position)
k.setPosition(this._config.position);

if(this._config.arrowDimensions)
k.setArrowDimensions(this._config.arrowDimensions);


i._init.call(this);};
function j(){'use strict';h.apply(this,arguments);}


f.exports=j;}),null);

/** js/modules/PopoverMenu.js */





__d('PopoverMenu',['Arbiter','ArbiterMixin','ARIA','BehaviorsMixin','Event','Focus','Keys','KeyStatus','SubscriptionsHandler','VirtualCursorStatus','mixin'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits














(j,c('mixin')(c('ArbiterMixin'),c('BehaviorsMixin')));i=h&&h.prototype;
function j(k,l,m,n){'use strict';
i.constructor.call(this);
this._popover=k;
this._triggerElem=l;



this._getInitialMenu=
typeof m!=='function'?
function(){return m;}:m;

this._subscriptions=new (c('SubscriptionsHandler'))();
this._subscriptions.addSubscriptions
(k.subscribe('init',this._onLayerInit.bind(this)),
k.subscribe('show',this._onPopoverShow.bind(this)),
k.subscribe('hide',this._onPopoverHide.bind(this)),
c('Event').listen
(this._triggerElem,
'keydown',
this._handleKeyEventOnTrigger.bind(this)),

c('VirtualCursorStatus').add
(this._triggerElem,
this._checkInitialFocus.bind(this)));



n&&this.enableBehaviors(n);}
j.prototype.

getContentRoot=function(){'use strict';
return this._popover.getContentRoot();};
j.prototype.

setMenu=function(k){'use strict';
if(this._menu&&this._menu!==k)
this._menu.destroy();

this._menu=k;


var l=k.getRoot();
this._popover.setLayerContent(l);
k.subscribe('done',this._onMenuDone.bind(this));

if(this._popoverShown)
this._menu.onShow();


c('ARIA').controls(this._triggerElem,l);
this.inform('setMenu',null,c('Arbiter').BEHAVIOR_PERSISTENT);};
j.prototype.

setInitialFocus=function(k,l){'use strict';
if(l)
k.focusAnItem();};

j.prototype.

getPopover=function(){'use strict';
return this._popover;};
j.prototype.

getTriggerElem=function(){'use strict';
return this._triggerElem;};
j.prototype.

getInitialMenu=function(){'use strict';
return this._getInitialMenu();};
j.prototype.

getMenu=function(){'use strict';
return this._menu;};
j.prototype.

_onLayerInit=function(){'use strict';
if(!this._menu)
this.setMenu(this._getInitialMenu());

this._popover.getLayer().subscribe('key',this._handleKeyEvent.bind(this));};
j.prototype.

_onPopoverShow=function(){'use strict';
if(this._menu)
this._menu.onShow();

this._checkInitialFocus();
this._popoverShown=true;};
j.prototype.

_checkInitialFocus=function(){'use strict';
var k=
c('KeyStatus').isKeyDown()||
c('VirtualCursorStatus').isVirtualCursorTriggered();

if(this._menu)
this.setInitialFocus(this._menu,k);};

j.prototype.

_onPopoverHide=function(){'use strict';
if(this._menu)
this._menu.onHide();

this._popoverShown=false;};
j.prototype.

_handleKeyEvent=function(k,l){'use strict';
if(l.target===this._triggerElem)

return;


var m=c('Event').getKeyCode(l);


if(m===c('Keys').TAB){
this._popover.hideLayer();


c('Focus').set(this._triggerElem);
return;}


if(l.getModifiers().any)
return;


switch(m){
case c('Keys').RETURN:
if(!this.getMenu().getFocusedItem())
this.inform('returnWithoutFocusedItem');


return;



default:if(m===c('Keys').SPACE&&l.target.type==='file')
return;




if(this._menu.handleKeydown(m,l)===false){
this._menu.blur();
this._menu.handleKeydown(m,l);}

break;}

l.prevent();};
j.prototype.

_handleKeyEventOnTrigger=function(k){'use strict';
var l=c('Event').getKeyCode(k),
m=String.fromCharCode(l).toLowerCase();
if(/^\w$/.test(m)){




this._popover.showLayer();
this._menu.blur();
if(this._menu.handleKeydown(l,k)===false){


this._popover.hideLayer();
c('Focus').set(this._triggerElem);}}};


j.prototype.

_onMenuDone=function(k){'use strict';




setTimeout(function(){
this._popover.hideLayer();

c('Focus').set(this._triggerElem);}.
bind(this),0);};
j.prototype.

enable=function(){'use strict';
this._popover.enable();};
j.prototype.

disable=function(){'use strict';
this._popover.disable();};
j.prototype.

destroy=function(){'use strict';
this._subscriptions.release();
this._popover.destroy();
this._getInitialMenu().destroy();
this._menu&&this._menu.destroy();};



Object.assign(j.prototype,
{_popoverShown:false});


f.exports=j;}),null);

/** js/modules/PopoverMenuInterface.js */




__d('PopoverMenuInterface',['ArbiterMixin','emptyFunction','mixin'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits






(j,c('mixin')(c('ArbiterMixin')));i=h&&h.prototype;
function j(){'use strict';
i.constructor.call(this);}
j.prototype.






done=function(){'use strict';
this.inform('done');};



Object.assign(j.prototype,






{getRoot:c('emptyFunction'),




onShow:c('emptyFunction'),




onHide:c('emptyFunction'),






focusAnItem:c('emptyFunction').thatReturnsFalse,




blur:c('emptyFunction'),





handleKeydown:c('emptyFunction').thatReturnsFalse,




destroy:c('emptyFunction')});


f.exports=j;}),null);

/** js/modules/SelectableMenuUtils.js */




__d("SelectableMenuUtils",[],(function a(b,c,d,e,f,g){

var h=

{doesItemSupportSelect:function j(k){
return i(k);},


isSelected:function j(k){
return i(k)&&k.isSelected();}};




function i(j){
return j.select&&j.deselect&&j.isSelected;}


f.exports=h;}),null);

/** js/modules/getInlineBoundingRect.js */





__d('getInlineBoundingRect',['Rect'],(function a(b,c,d,e,f,g){




















function h(i,j){
var k=i.getClientRects();

if(!j||k.length===0)
return c('Rect').getElementBounds(i);



var l,
m=false;
for(var n=0;n<k.length;n++){
var o=new (c('Rect'))
(Math.round(k[n].top),
Math.round(k[n].right),
Math.round(k[n].bottom),
Math.round(k[n].left),
'viewport').
convertTo('document'),

p=o.getPositionVector(),
q=p.add(o.getDimensionVector());


if(!l||p.x<=l.l&&p.y>l.t){
if(m)
break;


l=new (c('Rect'))(p.y,q.x,q.y,p.x,'document');}else{

l.t=Math.min(l.t,p.y);
l.b=Math.max(l.b,q.y);
l.r=q.x;}


if(o.contains(j))
m=true;}



if(!l)
l=c('Rect').getElementBounds(i);


return l;}


f.exports=h;}),null);

/** js/modules/Tooltip.js */







__d('Tooltip',['fbt','AsyncRequest','ContextualLayer','ContextualLayerAutoFlip','CSS','DOM','Event','Style','TooltipData','Vector','emptyFunction','getElementText','getInlineBoundingRect','getOrCreateDOMID','nl2br','setImmediate'],(function a(b,c,d,e,f,g,h){




















var i=null,


j=null,


k=null,


l=null,


m=null,


n=null,


o=[],
p=[];

function q(){
if(!l){
m=c('DOM').create('div',
{className:'tooltipContent',
'data-testid':'tooltip_testid'});

n=c('getOrCreateDOMID')(m);

var u=c('DOM').create('i',{className:'arrow'}),
v=
c('DOM').create('div',{className:'uiTooltipX'},[m,u]);

l=new (c('ContextualLayer'))({},v);
l.shouldSetARIAProperties(false);
l.enableBehavior(c('ContextualLayerAutoFlip'));}}








function r(u,v){

t._show
(u,h._(["Loading...","0007976d9b948d4ca9e57de7b555b2c5"]));



new (c('AsyncRequest'))(v).
setHandler(function(w){
t._show(u,w.getPayload());}).

setErrorHandler(c('emptyFunction')).
send();}


var s;
c('Event').listen(document.documentElement,'mouseover',function(event){
s=event;

c('setImmediate')(function(){
s=null;});});



var t=babelHelpers['extends']({},c('TooltipData'),








{isActive:function u(v){
return v===i;},










process:function u(v,w){

if(!c('DOM').contains(v,w))return;
if(v!==i){
t.fetchIfNecessary(v);

var x=t._get(v);
if(x.suppress)
return;

if(x.delay){
t._showWithDelay(v,x.delay);}else 

t.show(v);}},








fetchIfNecessary:function u(v){

var w=v.getAttribute('data-tooltip-uri');
if(w){
v.removeAttribute('data-tooltip-uri');
r(v,w);}},






hide:function u(){
if(i){
l.hide();
i=null;

while(o.length)
o.pop().remove();}},




_show:function u(v,w){
t._store({context:v,content:w});

t.isActive(v)&&t.show(v);},






show:function u(v){






var w=function ha(){
v.setAttribute('aria-describedby',n);
l.show();},


x=function ha(){
v.removeAttribute('aria-describedby');
t.hide();},


y=function ha(ia){
if(!c('DOM').contains(i,ia.getTarget()))
x();};



q();
x();


var z=t._get(v);




if(z.suppress||t.allSuppressed)
return;


var aa=z.content;
if(z.overflowDisplay){


if(v.offsetWidth>=v.scrollWidth)
return;


if(!aa)
aa=c('getElementText')(v);}



if(!aa)
return;





var ba=0,
ca=0;
if(z.position==='left'||z.position==='right'){
ca=(v.offsetHeight-28)/2;}else
if(z.alignH!=='center'){
var da=v.offsetWidth;
if(da<32)
ba=(da-32)/2*(z.alignH==='right'?-1:1);}




l.
setContextWithBounds(v,c('getInlineBoundingRect')
(v,
s&&c('Vector').getEventPosition(s))).

setOffsetX(ba).
setOffsetY(ca).
setPosition(z.position).
setAlignment(z.alignH);

if(typeof aa==='string'){
c('CSS').addClass(l.getRoot(),'invisible_elem');


var ea=c('DOM').create('span',{},c('nl2br')(aa)),
fa=c('DOM').create('div',{className:'tooltipText'},ea);
c('DOM').setContent(m,fa);
w();

c('CSS').removeClass(l.getRoot(),'invisible_elem');}else{

c('DOM').setContent(m,aa);
w();}



o.push
(c('Event').listen(document.documentElement,'mouseover',y),
c('Event').listen(document.documentElement,'focusin',y));



var ga=c('Style').getScrollParent(v);
if(ga!==window)
o.push(c('Event').listen(ga,'scroll',x));



if(!z.persistOnClick)
o.push(c('Event').listen(v,'click',x));


i=v;},


_showWithDelay:function u(v,w){
if(v!==j)
t._clearDelay();


if(!k){

var x=function y(z){
if(!c('DOM').contains(j,z.getTarget()))
t._clearDelay();};


p.push
(c('Event').listen(document.documentElement,'mouseover',x),
c('Event').listen(document.documentElement,'focusin',x));


j=v;
k=setTimeout(function(){
t._clearDelay();
t.show(v);},
w);}},



_clearDelay:function u(){
clearTimeout(k);
j=null;
k=null;

while(p.length)
p.pop().remove();}});




c('Event').listen(window,'scroll',t.hide);

f.exports=t;}),null);

/** js/ui/core/abstract/menu/Menu.js */





__d('Menu',['cx','BehaviorsMixin','CSS','DataStore','DOM','Event','Keys','Parent','PopoverMenuInterface','ScrollableArea','Style','SubscriptionsHandler','UserAgent','debounce'],(function a(b,c,d,e,f,g,h){var i,j,

















k=500;i=babelHelpers.inherits

(l,c('PopoverMenuInterface'));j=i&&i.prototype;
function l(m,n){'use strict';
j.constructor.call(this);
this._items=[];
for(var o=0;o<m.length;o++){
var p=m[o],
q=l.buildItemFromData(p);
this._items[o]=q;}

this._config=n||{};
this._theme=n.theme||{};
this._subscriptions=new (c('SubscriptionsHandler'))();

this._keysSoFar='';
this._clearKeysSoFarAfterDelay=c('debounce')(function(){
this._keysSoFar='';}.
bind(this),k);}
l.

buildItemFromData=function(m){'use strict';
if(m.ctor){

return new m.ctor(m);}else 


return new m.type(m.props);};

l.prototype.

addItem=function(m){'use strict';
this._addItem(m);};
l.prototype.

addItemBefore=function(m,n){'use strict';
this._addItem(m,n,false);};
l.prototype.

addItemAfter=function(m,n){'use strict';
this._addItem(m,n,true);};
l.prototype.

_addItem=function(m,n,o){'use strict';

var p=this._items.indexOf(m);
if(p>=0){
var q=o?-1:1;
if(this._items[p+q]==n)




return;

this._items.splice(p,1);}


if(n){
p=this._items.indexOf(n);
if(p<0)
throw new Error('reference item must already be in the menu');

if(o)
p++;

this._items.splice(p,0,m);}else 

this._items.push(m);


if(this._root)
this._insertItem(m,n,o);};

l.prototype.

removeItem=function(m){'use strict';
var n=this._items.indexOf(m);
if(n<0)
return;

this._items.splice(n,1);
this._root&&c('DOM').remove(m.getRoot());};
l.prototype.

forEachItem=function(m){'use strict';
this._items.forEach(m);};
l.prototype.

getFocusedItem=function(){'use strict';
return this._focused;};
l.prototype.

getItemAt=function(m){'use strict';
return this._items[m]||null;};
l.prototype.

getRoot=function(){'use strict';
if(!this._root)
this._render();

return this._root;};
l.prototype.

onShow=function(){'use strict';
if(this._config.maxheight)
if(!this._scrollableArea){


this._scrollableArea=
c('ScrollableArea').fromNative(this._scrollableElems.root,{fade:true});}else 

this._scrollableArea.resize();


this.inform('show');};
l.prototype.

onHide=function(){'use strict';
this.blur();
this.inform('hide');};
l.prototype.

focusAnItem=function(m){'use strict';
return this._attemptFocus(m||0,1);};
l.prototype.

blur=function(){'use strict';
if(this._focused){
var m=this._focused;
this._focused.blur();
this._focused=null;
this.inform('blur',
{item:m});}};


l.prototype.

handleKeydown=function(m,n){'use strict';
var o=this._items.indexOf(this._focused);
switch(m){

case c('Keys').UP:
case c('Keys').DOWN:
var p=m===c('Keys').UP,
q=p?-1:1,
r=p?this._items.length-1:0;

if(o===-1)
return this._attemptFocus(r,q);

return this._attemptFocus(o+q,q);
case c('Keys').HOME:
return this._attemptFocus(0,1);
case c('Keys').END:
return this._attemptFocus(this._items.length-1,-1);
case c('Keys').SPACE:


if(this._items.indexOf(this._focused)!==-1){
this._handleItemClick(this._focused,n);
return true;}

return false;





default:var s=String.fromCharCode(m).toLowerCase();
this._keysSoFar+=s;
this._clearKeysSoFarAfterDelay();


var t=this._items.
map(function(v){
var w=v.getLabel();
return {item:v,label:w&&w.toLowerCase()};}).

filter(function(v){var w=v.label;return w!=null;});
t.sort
(function(v,w){return v.label<w.label?-1:v.label===w.label?0:1;});


var u=t.find
(function(v,w){var x=v.label;

return (x>=this._keysSoFar||w===t.length-1);}.bind(this));


return !!(u&&this._focusItem(u.item));}};

l.prototype.

_render=function(){'use strict';
this._ul=c('DOM').create('ul',{className:"_54nf"});
this._ul.setAttribute('role','menu');

this._items.forEach(function(o){
this._insertItem(o,null);}.
bind(this));

this._subscriptions.addSubscriptions
(c('Event').listen(this._ul,'click',this._handleClick.bind(this)),
c('Event').listen(this._ul,'mouseover',this._handleMouseOver.bind(this)),
c('Event').listen(this._ul,'mouseout',this._handleMouseOut.bind(this)));


var m=this._ul;
if(this._config.maxheight){
this._scrollableElems=c('ScrollableArea').renderDOM();
c('DOM').setContent(this._scrollableElems.content,this._ul);
m=this._scrollableElems.root;
c('Style').set
(this._scrollableElems.wrap,
'max-height',
this._config.maxheight+'px');}




var n="_54nq"+
(this._config.className?' '+this._config.className:'')+
(this._theme.className?' '+this._theme.className:'');
this._root=
c('DOM').create('div',{className:n},
c('DOM').create('div',{className:"_54ng"},
m));
this._config.id&&this._root.setAttribute('id',this._config.id);
this._config.testid&&
this._root.setAttribute('data-testid',this._config.testid);

if(this._config.behaviors)
this.enableBehaviors(this._config.behaviors);


this.inform('rendered',this._root);};
l.prototype.

_needsDefaultBehavior=function(m){'use strict';

if(m.isDefaultRequested&&m.isDefaultRequested()){

var n=c('Parent').byTag(m.getTarget(),'a'),
o=n&&n.getAttribute('href');
return o&&o[0]!=='#';}

return false;};
l.prototype.

_handleClick=function(m){'use strict';
if(m.getTarget()===this._ul&&c('UserAgent').isBrowser('IE')){
m.stop();
return;}


if(!this._needsDefaultBehavior(m)){
var n=this._getItemInstance(m.getTarget());
if(n)
return this._handleItemClick(n,m);}};


l.prototype.

_handleItemClick=function(m,n){'use strict';
this.inform('itemclick',
{item:m,
event:n});

if(m.hasAction())
this.done();

return m.handleClick(n);};
l.prototype.

_handleMouseOver=function(m){'use strict';
var n=this._getItemInstance(m.getTarget());
n&&this._focusItem(n,true);};
l.prototype.

_handleMouseOut=function(m){'use strict';
var n=this._getItemInstance(m.getTarget());
if(n&&this._focused===n)
this.blur();};

l.prototype.

_insertItem=function(m,n,o){'use strict';
var p=m.getRoot();
c('CSS').addClass(p,'__MenuItem');
c('DataStore').set(p,'MenuItem',m);

if(n){
var q=o?c('DOM').insertAfter:c('DOM').insertBefore;
q(n.getRoot(),p);}else 

c('DOM').appendContent(this._ul,p);};

l.prototype.










_attemptFocus=function(m,n){'use strict';
var o=this._items.length;

if((m<0||m>=o)&&!this._focused)


return false;


var p=(o+m%o)%o,
q=this.getItemAt(p);

if(q===this._focused||this._focusItem(q))
return true;


return this._attemptFocus(p+n,n);};
l.prototype.




_focusItem=function(m,n){'use strict';
if(m&&m.focus(n)!==false){
if(this._focused!==m){
this.blur();
this._focused=m;
this.inform('focus',
{item:m,
from_mouse_over:n});}


return true;}

return false;};
l.prototype.




_getItemInstance=function(m){'use strict';
var n=c('Parent').byClass(m,'__MenuItem');
return n?c('DataStore').get(n,'MenuItem'):null;};
l.prototype.

destroy=function(){'use strict';
this._items.forEach(function(m){
var n=m.getRoot();
c('DataStore').remove(n,'MenuItem');
m.destroy();});


this._subscriptions.release();
this.destroyBehaviors();};



Object.assign(l.prototype,c('BehaviorsMixin'),
{_focused:null,
_root:null});


f.exports=l;}),null);

/** js/ui/core/abstract/menu/MenuItemInterface.js */





__d('MenuItemInterface',['React','emptyFunction'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits





(j,c('React').Component);i=h&&h.prototype;j.prototype.

getRoot=function(){'use strict';
if(!this._root)
this._root=this.render();

return this._root;};
function j(){'use strict';h.apply(this,arguments);}


Object.assign(j.prototype,
{_root:null,
render:c('emptyFunction'),
getAccessKey:c('emptyFunction'),
getLabel:c('emptyFunction'),
hasAction:c('emptyFunction').thatReturnsFalse,
focus:c('emptyFunction').thatReturnsFalse,
blur:c('emptyFunction').thatReturnsFalse,
onShow:c('emptyFunction').thatReturnsFalse,
handleClick:c('emptyFunction').thatReturnsFalse,
destroy:c('emptyFunction')});


f.exports=j;}),null);

/** js/ui/core/abstract/menu/MenuItemBase.js */





__d('MenuItemBase',['cx','DOM','HTML','MenuItemInterface'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits







(k,c('MenuItemInterface'));j=i&&i.prototype;


function k(l){'use strict';
j.constructor.call(this);this._ARIARole='menuitem';

this._data=babelHelpers['extends']({},l);}
k.prototype.

render=function(){'use strict';
var l="_54ni";
if(this._data.className)
l+=' '+this._data.className;

var m={className:l,role:'presentation'};
Object.assign(m,this.__getAttributesFromData());

delete m['data-testid'];
return c('DOM').create('li',m,this._renderItemContent());};
k.prototype.

_renderItemContent=function(){'use strict';
return c('HTML')(this._data.markup).getNodes();};
k.prototype.

__getAttributesFromData=function(){'use strict';
var l={};

for(var m in this._data)
if(m.indexOf('data-')===0||m.indexOf('aria-')===0)
l[m]=this._data[m];


return l;};



f.exports=k;}),null);

/** js/ui/core/abstract/menu/MenuItem.js */





__d('MenuItem',['cx','CSS','DOM','MenuItemBase','React','ReactDOM','joinClasses','emptyFunction'],(function a(b,c,d,e,f,g,h){var i,j,












k=['href','rel','ajaxify','target','accesskey'];

function l(o,p){
var q={};
k.forEach(function(r){
if(p[r])
q[r]=p[r];});


c('DOM').setAttributes(o,q);}


function m(o){
k.forEach(function(p){
o.removeAttribute(p);});}

i=babelHelpers.inherits

(n,c('MenuItemBase'));j=i&&i.prototype;
function n(o){'use strict';
j.constructor.call(this,o);
this._disabled=!!this._data.disabled;
this._onclickHandler=this._data.onclick||this._data.onClick;}
n.prototype.

getValue=function(){'use strict';
return this._data.value;};
n.prototype.

getLabel=function(){'use strict';
return this._data.label;};
n.prototype.

getAccessKey=function(){'use strict';
var o=this.getLabel();
return o&&o.charAt(0);};
n.prototype.

focus=function(o){'use strict';

if(this.isDisabled()||!this._root.offsetParent||!this.hasAction())
return false;

c('CSS').addClass(this._root,"_54ne");
c('CSS').addClass(this._root,'selected');


o||this._anchor.focus();};
n.prototype.

blur=function(){'use strict';
c('CSS').removeClass(this._root,"_54ne");
c('CSS').removeClass(this._root,'selected');};
n.prototype.

handleClick=function(o){'use strict';
if(this.isDisabled())
return false;


if(typeof this._onclickHandler==='function')
return this._onclickHandler(o);


return true;};
n.prototype.

setOnClickHandler=function(o){'use strict';
this._onclickHandler=o;};
n.prototype.

_renderItemContent=function(){'use strict';
this._anchor=c('DOM').create(this._data.renderas==='label'?'label':'a',
{className:"_54nc"+

(this._data.icon?' '+"_54nu":'')});




if(this._data.children){
var o=null;
if(this._data.icon)
o=c('React').cloneElement(this._data.icon,
{className:c('joinClasses')(this._data.icon.props.className,'mrs')});


c('ReactDOM').render
(c('React').createElement('span',null,
o,
c('React').createElement('span',{className:"_54nh"},
this._data.children)),


this._anchor);

this._data.label=this._anchor.innerText||this._anchor.textContent;}else{


var p=
c('DOM').create
('span',
null,
c('DOM').create
('span',
{className:"_54nh"},
this._data.markup||this._data.label));


if(this._data.icon)
c('DOM').prependContent(p,this._data.icon);

c('DOM').setContent(this._anchor,p);}


if(!this._data.href)
this._data.href='#';


if(!this.isDisabled())
l(this._anchor,this._data);

c('DOM').setAttributes(this._anchor,this.__getAttributesFromData());
this._anchor.setAttribute('role',this._ARIARole);








var q=this._data.title;
q&&this._anchor.setAttribute('title',q);

return this._anchor;};
n.prototype.

isDisabled=function(){'use strict';
return this._disabled;};
n.prototype.

enable=function(){'use strict';
if(this._root){
l(this._anchor,this._data);
c('CSS').removeClass(this._root,"_5arm");}

this._disabled=false;};
n.prototype.

disable=function(){'use strict';
if(this._root){
m(this._anchor);
c('CSS').addClass(this._root,"_5arm");}

this._disabled=true;};
n.prototype.

render=function(){'use strict';
var o=j.render.call(this);
if(this._disabled)
c('CSS').addClass(o,"_5arm");

return o;};
n.prototype.

destroy=function(){'use strict';
if(this._anchor)
c('ReactDOM').unmountComponentAtNode(this._anchor);};




Object.assign(n.prototype,
{hasAction:c('emptyFunction').thatReturnsTrue});


f.exports=n;}),null);

/** js/ui/core/abstract/menu/MenuSelectableItem.js */





__d('MenuSelectableItem',['cx','CSS','DOM','MenuItem'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits







(k,c('MenuItem'));j=i&&i.prototype;


function k(l){'use strict';
j.constructor.call(this,l);this._ARIARole='menuitemcheckbox';
this._selected=!!this._data.selected;}
k.prototype.

getIcon=function(){'use strict';
return this._data.icon;};
k.prototype.

setIcon=function(l){'use strict';
c('DOM').replace(this._data.icon,l);
this._data.icon=l;};
k.prototype.

isSelected=function(){'use strict';
return this._selected;};
k.prototype.

select=function(){'use strict';
if(this.isDisabled())
return false;

c('CSS').addClass(this._root,"_54nd");
this._anchor.setAttribute('aria-checked','true');
this._selected=true;};
k.prototype.

deselect=function(){'use strict';
c('CSS').removeClass(this._root,"_54nd");
this._anchor.setAttribute('aria-checked','false');
this._selected=false;};
k.prototype.

render=function(){'use strict';
var l=j.render.call(this);
if(this._data.selected){
c('CSS').addClass(l,"_54nd");
this._anchor.setAttribute('aria-checked','true');}

return l;};



Object.assign(k.prototype,
{_selected:false});


f.exports=k;}),null);

/** js/ui/core/abstract/menu/MenuSeparator.js */





__d('MenuSeparator',['cx','DOM','CSS','MenuItemInterface'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits







(k,c('MenuItemInterface'));j=i&&i.prototype;
function k(l){'use strict';
j.constructor.call(this,l);
this._data=l;
this.showFn=this._data.should_show_fn;}
k.prototype.

updateShownState=function(l){'use strict';
if(this.showFn){
this._isHidden=!this.showFn(l);
if(this._root)
c('CSS').conditionShow(this._root,!this._isHidden);}};


k.prototype.

isShown=function(l){'use strict';
var m=this.showFn?this.showFn(l):true;
return m;};
k.prototype.

render=function(){'use strict';
var l="_54ak";
if(this._data.className)
l+=' '+this._data.className;


var m=this._data.label||'',

n=c('DOM').create
('li',

{className:l,
role:'separator'},

m);


if(this._isHidden)
c('CSS').hide(n);


return n;};



f.exports=k;}),null);

/** js/ui/core/abstract/menu/MenuStaticItem.js */






__d('MenuStaticItem',['cx','DOM','MenuItemBase','React','ReactDOM','emptyFunction'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits









(k,c('MenuItemBase'));j=i&&i.prototype;



function k(l){'use strict';
j.constructor.call(this);
this._data=l;}
k.prototype.




_renderItemContent=function(){'use strict';
var l=c('DOM').create('span',
{className:"_54nc _54ah"});



if(this._data.children){
c('ReactDOM').render
(c('React').createElement('span',{className:"_54nh"},
this._data.children),

l);}else 


c('DOM').setContent
(l,
c('DOM').create('span',
{className:"_54nh"},
this._data.markup));



return l;};



Object.assign(k.prototype,



{handleClick:c('emptyFunction')});


f.exports=k;}),null);

/** js/ui/core/abstract/menu/SelectableMenu.js */





__d('SelectableMenu',['Menu','arrayContains','createArrayFromMixed','SelectableMenuUtils'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits







(j,c('Menu'));i=h&&h.prototype;j.prototype.
focusAnItem=function(){'use strict';

for(var k=0;k<this._items.length;k++)
if(c('SelectableMenuUtils').isSelected(this._items[k]))
if(this._focusItem(this._items[k])!==false)
return true;




return i.focusAnItem.call(this);};
j.prototype.

setValue=function(k){'use strict';

if(!this._root)
this._render();









var l=c('createArrayFromMixed')(k);
this._items.forEach(function(m){
if(c('SelectableMenuUtils').doesItemSupportSelect(m))
if(c('arrayContains')(l,m.getValue())){
m.select();}else
if(c('SelectableMenuUtils').isSelected(m))
m.deselect();});



this.inform('change',this.getSelection());};
j.prototype.

_handleItemClick=function(k,l){'use strict';
if(!c('SelectableMenuUtils').doesItemSupportSelect(k))
return i._handleItemClick.call(this,k,l);


var m=this.inform('itemclick',
{item:k,
event:l});

if(m)
return;


if(this._config.multiple){
var n=c('SelectableMenuUtils').isSelected(k)?
k.deselect():
k.select();
if(n!==false)
this.inform('change',this.getSelection());}else{


if(!c('SelectableMenuUtils').isSelected(k))
if(k.select()!==false){

this._items.forEach(function(o){
if(c('SelectableMenuUtils').isSelected(o)&&
o!==k)
o.deselect();});


this.inform('change',this.getSelection());}




this.done();}

return k.handleClick(l);};
j.prototype.






getSelection=function(){'use strict';
var k=[];
this._items.forEach(function(l){
if(c('SelectableMenuUtils').isSelected(l))
k.push
({label:l.getLabel(),
value:l.getValue(),
item:l});});




if(!this._config.multiple)
k=k[0];

return k;};
function j(){'use strict';h.apply(this,arguments);}


f.exports=j;}),null);

/** js/ui/core/ui/menu/MenuTheme.js */




__d('MenuTheme',['cx'],(function a(b,c,d,e,f,g,h){



f.exports=
{className:"_569t"};}),null);

/** js/ui/core/xui/menu/XUIMenuTheme.js */




__d('XUIMenuTheme',['cx'],(function a(b,c,d,e,f,g,h){



f.exports=
{className:"_558b"};}),null);

/** js/ui/core/xui/menu/XUIMenuWithSquareCorner.js */




__d('XUIMenuWithSquareCorner',['cx','CSS'],(function a(b,c,d,e,f,g,h){






function i(j){'use strict';
this.$XUIMenuWithSquareCorner_menu=j;}
i.prototype.

enable=function(){'use strict';
c('CSS').addClass
(this.$XUIMenuWithSquareCorner_menu.getRoot(),
"_2n_z");};

i.prototype.

disable=function(){'use strict';
c('CSS').removeClass
(this.$XUIMenuWithSquareCorner_menu.getRoot(),
"_2n_z");};




f.exports=i;}),null);

/** js/ui/layer/behaviors/ContextualLayerPositionClassOnContext.js */









__d('ContextualLayerPositionClassOnContext',['cx','CSS'],(function a(b,c,d,e,f,g,h){







function i(k){'use strict';
this._layer=k;}
i.prototype.

enable=function(){'use strict';
this._subscription=this._layer.subscribe
('reposition',
this._updateClassName.bind(this));
if(this._layer.isShown())
this._updateClassName();};

i.prototype.

disable=function(){'use strict';
this._subscription.unsubscribe();
this._subscription=null;
if(this._prevClassName){
c('CSS').removeClass(this._layer.getContext(),this._prevClassName);
this._prevClassName=null;}};

i.prototype.


_updateClassName=function(k,l){'use strict';
var m=this._layer.getContext(),
n=j(l);
if(this._prevClassName){
if(this._prevClassName===n)
return;

c('CSS').removeClass(m,this._prevClassName);}

c('CSS').addClass(m,n);
this._prevClassName=n;};




function j(k){
var l=k.getAlignment(),
m=k.getPosition();
if(m==='below'){
if(l==='left'){
return "_nk";}else
if(l==='right'){
return "_nl";}else 

return "_nm";}else

if(m==='above'){
if(l==='left'){
return "_nn";}else
if(l==='right'){
return "_no";}else 

return "_np";}else

if(m==='left'){
return "_nq";}else 

return "_nr";}



Object.assign(i.prototype,
{_subscription:null,
_prevClassName:null});


f.exports=i;}),null);
