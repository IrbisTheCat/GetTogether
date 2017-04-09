if (self.CavalryLogger) { CavalryLogger.start_js(["3nXNb"]); }

/** js/ui/layer/behaviors/AccessibleLayer.js */





__d('AccessibleLayer',['fbt','DOM','Event','Focus'],(function a(b,c,d,e,f,g,h){
















function i(j){'use strict';
this._layer=j;
this._listener=null;}
i.prototype.

enable=function(){'use strict';
this._afterShowSubscription=this._layer.subscribe
('aftershow',
this._onAfterShow.bind(this));

this._afterHideSubscription=this._layer.subscribe
('hide',
this._onAfterHide.bind(this));};

i.prototype.

disable=function(){'use strict';
this._listener&&this._listener.remove();
this._afterShowSubscription.unsubscribe();
this._listener=this._afterShowSubscription=null;};
i.prototype.

_closeListener=function(event){'use strict';
var j=this._layer.getCausalElement();
if(j)
if(j.tabIndex==-1){
j.tabIndex=0;
c('Focus').setWithoutOutline(j);}else 

c('Focus').set(j);


this._layer.hide();};
i.prototype.

_setupCloseButton=function(){'use strict';
var j=this._layer.getContentRoot(),
k=c('DOM').scry(j,'.layer_close_elem')[0];

if(!k){
k=c('DOM').create
('a',

{className:'accessible_elem layer_close_elem',
href:'#',
role:'button'},

[h._(["Close popup and return","ad9913f705eb64a8d9c3a769cd6bd4f5"])]);






c('DOM').appendContent(j,k);}


this._listener=c('Event').listen
(k,
'click',
this._closeListener.bind(this));};

i.prototype.

_onAfterShow=function(){'use strict';
if(!this._listener)
this._setupCloseButton();};

i.prototype.

_onAfterHide=function(){'use strict';
this._listener&&this._listener.remove();
this._listener=null;};



f.exports=i;}),null);

/** js/ui/layer/behaviors/ContextualDialogARIA.js */





__d('ContextualDialogARIA',['DOM','getOrCreateDOMID'],(function a(b,c,d,e,f,g){












function h(i){'use strict';
this._layer=i;}
h.prototype.

enable=function(){'use strict';
this._subscription=this._layer.subscribe
('beforeshow',
this._addAriaAttribute.bind(this));};

h.prototype.

disable=function(){'use strict';
this._subscription.unsubscribe();
this._subscription=null;};
h.prototype.

_addAriaAttribute=function(){'use strict';
var i=this._layer.getCausalElement();
if(!i)
return;

var j=
c('DOM').scry
(this._layer.getRoot(),
'.accessible_elem');

if(j.length)
i.setAttribute
('aria-describedby',
c('getOrCreateDOMID')(j[0]));};





f.exports=h;}),null);

/** js/ui/layer/contextual_dialog/behaviors/ContextualDialogArrow.js */





__d('ContextualDialogArrow',['cx','CSS','DOM','JSXDOM','Locale','Style','Vector'],(function a(b,c,d,e,f,g,h){










var i=
{bottom:"_53ik",
top:"_53il",
right:"_53im",
left:"_53in"},


j=
{above:'bottom',
below:'top',
left:'right',
right:'left'};



function k(l){'use strict';
this._layer=l;}
k.prototype.

enable=function(){'use strict';
this._subscription=this._layer.subscribe
(['adjust','reposition'],
this._handle.bind(this));


c('CSS').addClass
(this._layer.getContentRoot(),
"_5v-0");};

k.prototype.

disable=function(){'use strict';
this._subscription.unsubscribe();
this._subscription=null;

c('CSS').removeClass
(this._layer.getContentRoot(),
"_5v-0");};

k.prototype.

_handle=function(l,m){'use strict';
if(l==='adjust'){
this._repositionArrow(m);}else 

this._repositionRoot(m);};

k.prototype.

_repositionRoot=function(l){'use strict';
var m=l.getAlignment();


if(m=='center')
return;


var n=this._layer.getRoot(),
o=this._layer.getContext(),
p=l.isVertical(),

q=this._layer.getArrowDimensions(),
r=q.offset,
s=q.length,



t=c('Vector').getElementDimensions(o),
u=p?t.x:t.y;


if(u>=s+r*2)
return;



var v=s/2+r,

w=u/2,
x=parseInt(v-w,10);

if(p){
var y=null;
if(m=='left'){
y=c('Locale').isRTL()?'right':'left';}else 

y=c('Locale').isRTL()?'left':'right';

var z=parseInt(c('Style').get(n,y),10);
c('Style').set(n,y,z-x+'px');}else{

var aa=parseInt(c('Style').get(n,'top'),10);
c('Style').set(n,'top',aa-x+'px');}};

k.prototype.

_repositionArrow=function(l){'use strict';
var m=this._layer.getContentRoot(),
n=l.getPosition(),

o=j[n];
for(var p in i)
c('CSS').conditionClass
(m,
i[p],
o===p);



if(n=='none')
return;



if(!this._arrow)
this._arrow=
c('JSXDOM').i({className:"_53io"});


if(!c('DOM').contains(m,this._arrow))
c('DOM').appendContent(m,this._arrow);



c('Style').set(this._arrow,'top','');
c('Style').set(this._arrow,'left','');
c('Style').set(this._arrow,'right','');
c('Style').set(this._arrow,'margin','');

var q=k.getOffsetPercent(l),
r=k.getOffset
(l,
q,
this._layer),

s=k.getOffsetSide(l);

c('Style').set(this._arrow,s,q+'%');
c('Style').set(this._arrow,'margin-'+s,r+'px');};
k.

getOffsetPercent=function(l){'use strict';
var m=l.getAlignment(),
n=l.getPosition();
if(n=='above'||n=='below')
if(m=='center'){
return 50;}else
if(m=='right')
return 100;


return 0;};
k.

getOffsetSide=function(l){'use strict';
var m=l.isVertical();
return m?c('Locale').isRTL()?'right':'left':'top';};
k.

getOffset=function(l,m,n){'use strict';
var o=n.getArrowDimensions(),
p=o.offset,
q=o.length,
r=l.getAlignment(),

s=r=='center'?0:p;
s+=q*m/100;

if(r!='left')
s*=-1;


return s;};



Object.assign(k.prototype,
{_subscription:null,
_arrow:null});


f.exports=k;}),null);

/** js/ui/layer/contextual_dialog/behaviors/ContextualDialogDefaultTheme.js */




__d('ContextualDialogDefaultTheme',['cx'],(function a(b,c,d,e,f,g,h){



var i=
{wrapperClassName:"_53ip",
arrowDimensions:
{offset:15,
length:16}};



f.exports=i;}),null);

/** js/ui/layer/contextual_dialog/behaviors/ContextualDialogFitInViewport_PUSHSAFE.js */





__d('ContextualDialogFitInViewport_PUSHSAFE',['Style','Vector'],(function a(b,c,d,e,f,g){





var h=50,

i=10;






function j(k){'use strict';
this._layer=k;
this._contentHeight=null;
this._contextY=null;}
j.prototype.

enable=function(){'use strict';
var k=this._layer.getArrowDimensions();
this._arrowOffset=k.offset;
var l=k.length;

this._arrowBuffer=this._arrowOffset+l;

this._subscription=this._layer.subscribe
(['reposition'],
function(m,n){
if(!this._layer.isFixed()||n.isVertical())
return;

this._adjustPosition();}.
bind(this));};

j.prototype.

disable=function(){'use strict';
this._subscription.unsubscribe();
this._subscription=null;};
j.prototype.

_getContentHeight=function(){'use strict';
return c('Vector').getElementDimensions(this._layer._contentWrapper).y;};
j.prototype.

_getContextY=function(){'use strict';
return c('Vector').getElementPosition(this._layer.getContext(),'viewport').y;};
j.prototype.

_adjustPosition=function(){'use strict';
var k=this._getContextY(),
l=this._getContentHeight();

if(k===this._contextY&&
l===this._contentHeight)
return;

this._contextY=k;
this._contentHeight=l;

var m=c('Vector').getViewportDimensions().y,
n=Math.min

(Math.max
(0,
k+
l+
i-
m),



Math.max(0,k-h),


l-this._arrowOffset-this._arrowBuffer);


c('Style').set(this._layer.getContent(),'top',-n+'px');};



f.exports=j;}),null);

/** js/ui/layer/contextual_dialog/behaviors/ContextualDialogKeepInViewport.js */





__d('ContextualDialogKeepInViewport',['ContextualLayerDimensions','Event','Style','Vector','throttle'],(function a(b,c,d,e,f,g){













function h(i){'use strict';
this._layer=i;
this._listeners=[];
this._subscription=null;
this._minimumTop=null;}
h.prototype.

enable=function(){'use strict';
var i=this._layer.getArrowDimensions();
this._arrowOffset=i.offset;
var j=i.length;

this._arrowBuffer=this._arrowOffset+j;

this._subscription=this._layer.subscribe
(['show','hide','reposition'],
function(k,l){
if(this._layer.isFixed())
return;

if(k=='reposition'){
this._calculateMinimumTop(l);
this._adjustForScroll();}else
if(k=='show'){
this._attachScroll();
this._adjustForScroll();}else 

this._detachScroll();}.

bind(this));

if(this._layer.isShown())
this._attachScroll();};

h.prototype.

disable=function(){'use strict';
if(this._layer.isShown())
this._detachScroll();

this._subscription.unsubscribe();
this._subscription=null;};
h.prototype.

_attachScroll=function(){'use strict';
var i=c('throttle')(this._adjustForScroll.bind(this)),
j=this._layer.getContextScrollParent()||window;
this._listeners=
[c('Event').listen(j,'scroll',i),
c('Event').listen(window,'resize',i)];};

h.prototype.

_detachScroll=function(){'use strict';
while(this._listeners.length)
this._listeners.pop().remove();

this._listeners=[];};
h.prototype.

_getContentHeight=function(){'use strict';
if(!this._layer._contentWrapper)
return 0;

return c('Vector').getElementDimensions(this._layer._contentWrapper).y;};
h.prototype.

_getContextY=function(){'use strict';
return c('Vector').getElementPosition(this._layer.getContext()).y;};
h.prototype.

_calculateMinimumTop=function(i){'use strict';


if(i.isVertical())
return;


this._minimumTop=
this._getContextY()-
(this._getContentHeight()-this._arrowBuffer)+
i.getOffsetY();};

h.prototype.

_adjustForScroll=function(){'use strict';
var i=this._layer.getOrientation(),
j=this._layer.getContent();



if(i.isVertical()||!j)
return;


var k=c('ContextualLayerDimensions').getViewportRect(this._layer),
l=k.b-this._minimumTop;



if(l<0)
return;


var m=this._getContentHeight(),
n=m-(this._arrowBuffer+this._arrowOffset),
o=Math.max
(0,
Math.min
(n,
n-(l-m)));



c('Style').set(j,'top',-o+'px');};



f.exports=h;}),null);

/** js/ui/layer/behaviors/LayerMouseHooks.js */





__d('LayerMouseHooks',['Arbiter','ContextualThing','Event','Layer'],(function a(b,c,d,e,f,g){









var h=new (c('Arbiter'))();


function i(j){'use strict';
this._layer=j;
this._subscriptions=[];
this._currentlyActive=false;}
i.prototype.

enable=function(){'use strict';
this._subscriptions=
[h.subscribe('mouseenter',this._handleActive.bind(this)),
h.subscribe('mouseleave',this._handleInactive.bind(this)),
this._layer.subscribe('hide',function(){
this._currentlyActive=false;}.
bind(this))];};

i.prototype.

disable=function(){'use strict';
while(this._subscriptions.length)
this._subscriptions.pop().unsubscribe();

this._subscriptions=[];
this._currentlyActive=false;};
i.prototype.










_handleActive=function(j,k){'use strict';
if(!this._currentlyActive&&this._isNodeWithinStack(k)){
this._layer.inform('mouseenter',k);
this._currentlyActive=true;}};

i.prototype.











_handleInactive=function(j,k){'use strict';
if(this._currentlyActive)
if(!k||!this._isNodeWithinStack(k)){
this._layer.inform('mouseleave',k);
this._currentlyActive=false;}};


i.prototype.






_isNodeWithinStack=function(j){'use strict';
return c('ContextualThing').containsIncludingLayers
(this._layer.getContentRoot(),
j);};








c('Layer').subscribe('show',function(j,k){
var l=k.getContentRoot(),
m=
[c('Event').listen(l,'mouseenter',function(){
h.inform('mouseenter',l);}),

c('Event').listen(l,'mouseleave',function(o){


h.inform('mouseleave',o.getRelatedTarget());})],




n=k.subscribe('hide',function(){
while(m.length)
m.pop().remove();

n.unsubscribe();
m=n=null;});});



f.exports=i;}),null);

/** js/ui/layer/contextual_dialog/ContextualDialog.js */





__d('ContextualDialog',['csx','cx','invariant','ContextualDialogARIA','AccessibleLayer','ContextualDialogArrow','ContextualDialogDefaultTheme','ContextualDialogKeepInViewport','ContextualDialogFitInViewport_PUSHSAFE','ContextualLayer','CSS','DOM','Event','JSXDOM','LayerButtons','LayerFormHooks','LayerRefocusOnHide','LayerHideOnTransition','LayerMouseHooks','Style','removeFromArray','shield'],(function a(b,c,d,e,f,g,h,i,j){var k,l,

























m=0,
n=300;k=babelHelpers.inherits

(o,c('ContextualLayer'));l=k&&k.prototype;
function o(p,q){'use strict';
l.constructor.call(this,p,q);
this._footer=null;}
o.prototype.

_configure=function(p,q){'use strict';

Object.assign
(p,
p.theme||c('ContextualDialogDefaultTheme'));


var r=p.arrowBehavior||c('ContextualDialogArrow');
p.addedBehaviors=p.addedBehaviors||[];
p.addedBehaviors.push(r);

l._configure.call(this,p,q);

this._footer=c('DOM').scry
(q,
"div._572u")[
0];
if(this._footer)
if(this._footer.children.length===1&&
this._footer.children[0].nodeName==='DIV'&&
this._footer.children[0].children.length===0){

this._footer.parentNode.removeChild(this._footer);}else 

c('CSS').addClass
(this.getContentRoot(),
"_kc");



if(p.hoverContext)
this._registerHoverHandlers
(p.hoverContext,
p.hoverShowDelay,
p.hoverHideDelay);};


o.prototype.

_registerHoverHandlers=function(p,q,r){'use strict';
if(q==null)
q=m;

if(r==null)
r=n;


var s,
t,

u=function(event){
clearTimeout(t);
s=setTimeout
(c('shield')(this.show,this),
q);}.

bind(this),

v=function(event){
if(this._isHoverLocked())
return;

clearTimeout(s);
t=setTimeout
(this.hide.bind(this),
r);}.

bind(this),


w=c('Event').listen
(p,
'mouseenter',
u),


x=c('Event').listen
(p,
'mouseleave',
v),




y=this.subscribe('mouseenter',u),
z=this.subscribe('mouseleave',v);

this.subscribe('destroy',function(){
clearTimeout(t);

w.remove();
x.remove();

y.unsubscribe();
z.unsubscribe();});};

o.prototype.

_getDefaultBehaviors=function(){'use strict';
var p=l._getDefaultBehaviors.call(this);



c('removeFromArray')(p,c('LayerHideOnTransition'));

return p.concat([c('AccessibleLayer'),c('LayerRefocusOnHide'),c('ContextualDialogKeepInViewport'),c('ContextualDialogFitInViewport_PUSHSAFE'),c('LayerButtons'),c('LayerFormHooks'),c('LayerMouseHooks'),c('ContextualDialogARIA')]);};









o.prototype.

_buildWrapper=function(p,q){'use strict';
this._innerWrapper=c('JSXDOM').div(null,q);
var r=l._buildWrapper.call(this,p,this._innerWrapper);
if(p.wrapperClassName)
c('CSS').addClass(r,p.wrapperClassName);


this.replaceEntireLayerContents(q);

this.getContent()===q||j(0,
'ContextualDialog expects this._content to reference the content');


this.setWidth(p.width);
return r;};
o.prototype.

getContentRoot=function(){'use strict';

!!this._innerWrapper||j(0,
"Can't call getContentRoot before _buildWrapper runs");

return this._innerWrapper;};
o.prototype.

setContent=function(p){'use strict';

j(0,
'ContextualDialog: use setInnerContent to replace the content');};

o.prototype.







replaceEntireLayerContents=function(p){'use strict';
this._content=null;
c('DOM').empty(this.getContentRoot());
this.setInnerContent(p);};
o.prototype.






setInnerContent=function(p){'use strict';
c('CSS').addClass(p,"_53ij");
if(this.getContent()){
c('DOM').replace(this.getContent(),p);}else 

c('DOM').appendContent(this.getContentRoot(),p);

this._content=p;
this.isShown()&&this.updatePosition();};
o.prototype.

setWidth=function(p){'use strict';
c('Style').set
(this.getContentRoot(),
'width',
p?Math.floor(p)+'px':'');

return this;};
o.prototype.

getFooter=function(){'use strict';
return this._footer;};
o.prototype.

lockHover=function(){'use strict';
this._hoverLocked=true;
return this;};
o.prototype.

unlockHover=function(){'use strict';
this._hoverLocked=false;
return this;};
o.prototype.

_isHoverLocked=function(){'use strict';
return !!this._hoverLocked;};
o.




setContext=function(p,q){'use strict';
p.setContext(q);};



f.exports=o;}),null);

/** js/components/core/UI/Layer/ReactAbstractContextualDialog.js */




__d('ReactAbstractContextualDialog',['ContextualDialog','ContextualDialogArrow','LayerAutoFocus','LayerHideOnBlur','LayerHideOnEscape','LayerRefocusOnHide','React','ReactDOM'],(function a(b,c,d,e,f,g){










var h=c('React').PropTypes,

i=
{createSpec:function j(k){

return {displayName:k.displayName,

propTypes:
{position:h.oneOf(['above','below','left','right']),
alignment:h.oneOf(['left','center','right']),
offsetX:h.number,
offsetY:h.number,
width:h.number,
autoFocus:h.bool,
focusContextOnHide:h.bool,
arrowBehavior:h.func,
behaviors:h.object,
shown:h.bool,
context:h.object,
contextRef:h.func,
dialogRole:h.oneOf(['dialog','region','alert']),
hoverContext:h.object,
hoverContextRef:h.func,
hoverShowDelay:h.number,
hoverHideDelay:h.number,
hideOnBlur:h.bool,
hideOnEscape:h.bool,
insertParent:h.object,
label:h.string,
labelledBy:h.arrayOf(h.string),
onBeforeHide:h.func,
onToggle:h.func,
hasActionableContext:h.bool},


immutableProps:
{modal:null},


createLayer:function l(m){
var n=this.props.context||
c('ReactDOM').findDOMNode(this.props.contextRef()),
o=this.props.hoverContext||
this.props.hoverContextRef&&
c('ReactDOM').findDOMNode(this.props.hoverContextRef()),


p=babelHelpers['extends']
({context:n,
hoverContext:o,
hoverShowDelay:this.props.hoverShowDelay,
hoverHideDelay:this.props.hoverHideDelay,
position:this.props.position,
alignment:this.props.alignment,
offsetX:this.props.offsetX,
offsetY:this.props.offsetY,
width:this.props.width,
dialogRole:this.props.dialogRole,
label:this.props.label,
labelledBy:this.props.labelledBy,
shouldSetARIAProperties:!this.props.hasActionableContext,
arrowBehavior:this.props.arrowBehavior||c('ContextualDialogArrow'),
addedBehaviors:this.enumerateBehaviors(this.props.behaviors)},
k||{}),

q=new (c('ContextualDialog'))(p,m);
if(this.props.contextBounds)
q.setContextWithBounds(n,this.props.contextBounds);

if(this.props.autoFocus!==false)
q.enableBehavior(c('LayerAutoFocus'));

if(this.props.hideOnBlur===true)
q.enableBehavior(c('LayerHideOnBlur'));

if(this.props.hideOnEscape===true)
q.enableBehavior(c('LayerHideOnEscape'));

if(this.props.focusContextOnHide===false)
q.disableBehavior(c('LayerRefocusOnHide'));

if(this.props.onBeforeHide)
q.subscribe('beforehide',this.props.onBeforeHide);

if(this.props.insertParent)
q.setInsertParent(this.props.insertParent);


q.conditionShow(this.props.shown);
return q;},


receiveProps:function l(m,n){
this.updateBehaviors(n.behaviors,m.behaviors);
var o=m.context||
m.contextRef&&c('ReactDOM').findDOMNode(m.contextRef());
if(o)
if(m.contextBounds){
this.layer.setContextWithBounds(o,m.contextBounds);}else 

this.layer.setContext(o);


this.layer.
setPosition(m.position).
setAlignment(m.alignment).
setOffsetX(m.offsetX).
setOffsetY(m.offsetY).
setWidth(m.width).
conditionShow(m.shown);}};}};





f.exports=i;}),null);

/** js/components/core/XUI/Layer/AmbientNux/XUIAmbientNUXBody.react.js */




__d('XUIAmbientNUXBody.react',['cx','React','XUICloseButton.react','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,







k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').Component);j=i&&i.prototype;l.prototype.




render=function(){'use strict';
var m=c('joinClasses')("_21es",this.props.className);

return (c('React').createElement('div',{className:m},
c('React').createElement(c('XUICloseButton.react'),
{shade:'light',
className:"_36gl",
onClick:this.props.onCloseButtonClick}),

c('React').createElement('div',{className:"__xn"},
this.props.children)));};



function l(){'use strict';i.apply(this,arguments);}l.propTypes={onCloseButtonClick:k.func};


f.exports=l;}),null);

/** js/ui/layer/contextual_dialog/behaviors/XUIAmbientNUXTheme.js */




__d('XUIAmbientNUXTheme',['cx'],(function a(b,c,d,e,f,g,h){



var i=
{wrapperClassName:"_2x6q",
arrowDimensions:
{offset:14,
length:18}};



f.exports=i;}),null);

/** js/components/core/XUI/Layer/AmbientNux/XUIAmbientNUX.react.js */




__d('XUIAmbientNUX.react',['fbt','AccessibilityConfig','React','ReactLayer','ReactAbstractContextualDialog','XUIAmbientNUXTheme','XUIAmbientNUXBody.react','uniqueID'],(function a(b,c,d,e,f,g,h){var i,j,












k=c('React').PropTypes,

l=300,
m=380,

n=c('ReactLayer').createClass
(c('ReactAbstractContextualDialog').createSpec
({displayName:'XUIAmbientNUX',
theme:c('XUIAmbientNUXTheme')}));i=babelHelpers.inherits

























(o,c('React').Component);j=i&&i.prototype;































function o(){'use strict';
j.constructor.call(this);

if(c('AccessibilityConfig').a11yNUXDialog){
this.$XUIAmbientNUX_labelID=c('uniqueID')();
this.$XUIAmbientNUX_closeID=c('uniqueID')();}}

o.prototype.

$XUIAmbientNUX_getWidth=function(){'use strict';
switch(this.props.width){
case 'wide':
return m;
case 'custom':
return this.props.customwidth;
case 'auto':
return null;

default:return l;}};

o.prototype.

$XUIAmbientNUX_getDefaultLabel=function(){'use strict';
return h._(["Learn about this new feature","ff97b67936b07adb58493209817783fa"]);};






o.prototype.

render=function(){'use strict';
var p=this.props.labelledBy,
q=null,
r=null;

if(c('AccessibilityConfig').a11yNUXDialog){
if(!p||!p.length){
q=
c('React').createElement('div',
{'aria-label':this.props.label||this.$XUIAmbientNUX_getDefaultLabel(),
id:this.$XUIAmbientNUX_labelID,
key:this.$XUIAmbientNUX_labelID});


p=[this.$XUIAmbientNUX_labelID];}


var s=h._(["Close","7e80cbfb1a9f2ec8bde5ec741ad41a73"]);






r=
c('React').createElement('a',
{className:'layer_close_elem accessible_elem',
href:'#',
id:this.$XUIAmbientNUX_closeID,
key:this.$XUIAmbientNUX_closeID,
'aria-label':s,
'aria-labelledby':this.$XUIAmbientNUX_closeID+' '+p.join(' '),
role:'button'});}





return (c('React').createElement(n,
{alignment:this.props.alignment,
autoFocus:false,
behaviors:this.props.behaviors,
context:this.props.context,
contextRef:this.props.contextRef,
dialogRole:'region',
focusContextOnHide:false,
hasActionableContext:this.props.hasActionableContext,
insertParent:this.props.insertParent,
labelledBy:p,
offsetX:this.props.offsetX,
offsetY:this.props.offsetY,
onBeforeHide:this.props.onBeforeHide,
position:this.props.position,
shown:this.props.shown,
width:this.$XUIAmbientNUX_getWidth(this.props)},
c('React').createElement(c('XUIAmbientNUXBody.react'),
{className:this.props.className,
onCloseButtonClick:this.props.onCloseButtonClick},
this.props.children,
q,
r)));};



o.propTypes={alignment:k.oneOf(['left','center','right']),behaviors:k.object,className:k.string,context:k.object,contextRef:k.func,customwidth:k.number,hasActionableContext:k.bool,insertParent:k.object,label:k.object,labelledBy:k.arrayOf(k.string),offsetX:k.number,offsetY:k.number,onBeforeHide:k.func,onCloseButtonClick:k.func,position:k.oneOf(['above','below','left','right']),shown:k.bool,width:k.oneOf(['wide','normal','auto','custom'])};


f.exports=o;}),null);

/** js/modules/DialogHideOnSuccess.js */





__d('DialogHideOnSuccess',['csx','cx','CSS'],(function a(b,c,d,e,f,g,h,i){







function j(k){'use strict';
this._layer=k;}
j.prototype.

enable=function(){'use strict';
this._subscription=this._layer.subscribe
('success',
this._handle.bind(this));};

j.prototype.

disable=function(){'use strict';
this._subscription.unsubscribe();
this._subscription=null;};
j.prototype.

_handle=function(k,event){'use strict';
if(c('CSS').matchesSelector(event.getTarget(),"._s"))
this._layer.hide();};




Object.assign(j.prototype,
{_subscription:null});


f.exports=j;}),null);

/** js/modules/MenuDeprecated.js */












__d('MenuDeprecated',['Event','Arbiter','CSS','DataStore','DOM','HTML','Keys','Parent','Style','UserAgent_DEPRECATED','emptyFunction','Run'],(function a(b,c,d,e,f,g){
















var h='menu:mouseover',

i=null;























function j(t){
if(c('CSS').hasClass(t,'uiMenuContainer'))
return t;

return c('Parent').byClass(t,'uiMenu');}








function k(t){
return c('Parent').byClass(t,'uiMenuItem');}








function l(t){
if(document.activeElement){
var u=k(document.activeElement);
return t.indexOf(u);}

return -1;}







function m(t){
return c('DOM').find(t,'a.itemAnchor');}







function n(t){
return c('CSS').hasClass(t,'checked');}







function o(t){
return !c('CSS').hasClass(t,'disabled')&&
c('Style').get(t,'display')!=='none';}







function p(event){
var t=document.activeElement;
if(!t||
!c('Parent').byClass(t,'uiMenu')||
!c('DOM').isInputNode(t)){
var u=k(event.getTarget());
u&&s.focusItem(u);}}








function q(t){
c('UserAgent_DEPRECATED').firefox()&&m(t).blur();
s.inform('select',{menu:j(t),item:t});}






var r=function t(){
r=c('emptyFunction');

var u={};


u.click=function(event){
var v=k(event.getTarget());
if(v&&o(v)){
q(v);





var w=m(v),
x=w.href,
y=w.getAttribute('rel');
return y&&y!=='ignore'||
x&&x.charAt(x.length-1)!=='#';}};





u.keydown=function(event){
var v=event.getTarget();


if(event.getModifiers().any)
return;



if(!i||c('DOM').isInputNode(v))
return;


var w=c('Event').getKeyCode(event),
x;
switch(w){
case c('Keys').UP:
case c('Keys').DOWN:

var y=s.getEnabledItems(i);
x=l(y);
s.focusItem(y[x+(w===c('Keys').UP?-1:1)]);
return false;
case c('Keys').SPACE:
var z=k(v);
if(z){
q(z);
event.prevent();}

break;





default:var aa=String.fromCharCode(w).toLowerCase(),
ba=s.getEnabledItems(i);
x=l(ba);
var ca=x,
da=ba.length;



while(~x&&(ca=++ca%da)!==x||!~x&&++ca<da){
var ea=s.getItemLabel(ba[ca]);
if(ea&&ea.charAt(0).toLowerCase()===aa){
s.focusItem(ba[ca]);
return false;}}

}};




c('Event').listen(document.body,u);},


s=Object.assign(new (c('Arbiter'))(),




{focusItem:function t(u){
if(u&&o(u)){
this._removeSelected(j(u));
c('CSS').addClass(u,'selected');
m(u).focus();}},








getEnabledItems:function t(u){
return s.getItems(u).filter(o);},







getCheckedItems:function t(u){
return s.getItems(u).filter(n);},







getItems:function t(u){
return c('DOM').scry(u,'li.uiMenuItem');},







getItemLabel:function t(u){
return u.getAttribute('data-label',2)||'';},







isItemChecked:function t(u){
return c('CSS').hasClass(u,'checked');},









autoregister:function t(u,v,w){
u.subscribe('show',function(){
s.register(v,w);});

u.subscribe('hide',function(){
s.unregister(v);});},














register:function t(u,v){
u=j(u);

r();



if(!c('DataStore').get(u,h))
c('DataStore').set(u,h,
c('Event').listen(u,'mouseover',p));


if(v!==false)
i=u;},








setItemEnabled:function t(u,v){



if(!v&&!c('DOM').scry(u,'span.disabledAnchor')[0])
c('DOM').appendContent
(u,
c('DOM').create
('span',
{className:c('DOM').find(u,'a').className+' disabledAnchor'},
c('HTML')(m(u).innerHTML)));





c('CSS').conditionClass(u,'disabled',!v);},






toggleItem:function t(u){
var v=!s.isItemChecked(u);
s.setItemChecked(u,v);},







setItemChecked:function t(u,v){
c('CSS').conditionClass(u,'checked',v);
m(u).setAttribute('aria-checked',v);},







unregister:function t(u){
u=j(u);

var v=c('DataStore').remove(u,h);
v&&v.remove();

i=null;

this._removeSelected(u);},


_removeSelected:function t(u){
s.getItems(u).
filter(function(v){return c('CSS').hasClass(v,'selected');}).
forEach(function(v){c('CSS').removeClass(v,'selected');});}});



f.exports=s;}),null);

/** js/ui/core/ui/button/SwapButton.js */





__d('SwapButton',['DOM','Event','Focus'],(function a(b,c,d,e,f,g){





function h(j,k,l){
c('DOM').insertAfter(k,j);
c('DOM').remove(k);
l&&c('Focus').setWithoutOutline(j);}



function i(j,k,l){'use strict';
this._swapperButton=j;
this._swappeeButton=k;

c('Event').listen(j,'click',h.bind(null,k,j,true));
if(l)
c('Event').listen(k,'click',h.bind(null,j,k,true));}

i.prototype.

swap=function(j){'use strict';
if(this._swapperButton.parentNode)
h(this._swappeeButton,this._swapperButton,j);};

i.prototype.

unswap=function(j){'use strict';
if(!this._swapperButton.parentNode)
h(this._swapperButton,this._swappeeButton,j);};

i.prototype.

toggle=function(j){'use strict';
if(this._swapperButton.parentNode){
this.swap(j);}else 

this.unswap(j);};

i.prototype.

getCurrentButton=function(){'use strict';
return this._swapperButton.parentNode?
this._swapperButton:
this._swappeeButton;};



Object.assign(i.prototype,
{_swapperButton:null,
_swappeeButton:null});


f.exports=i;}),null);

/** js/ui/layer/behaviors/LayerRemoveOnHide.js */





__d('LayerRemoveOnHide',['DOM'],(function a(b,c,d,e,f,g){




function h(i){'use strict';
this._layer=i;}
h.prototype.

enable=function(){'use strict';
this._subscription=this._layer.subscribe
('hide',
c('DOM').remove.bind(null,this._layer.getRoot()));};

h.prototype.

disable=function(){'use strict';
if(this._subscription){
this._subscription.unsubscribe();
this._subscription=null;}};




Object.assign(h.prototype,
{_subscription:null});


f.exports=h;}),null);

/** shared/banzai/PagesEventObserver.js */





__d('PagesEventObserver',['Banzai'],(function a(b,c,d,e,f,g){



var h='pages_client_logging',

i=
{VITAL_WAIT:c('Banzai').VITAL_WAIT,

logData_DEPRECATED:function j(k,l){
var m=
{delay:l||c('Banzai').VITAL_WAIT};

c('Banzai').post(h,k,m);},


notify:function j
(event,
k,
l,
m,
n){

var o=babelHelpers['extends']({},
l,
{event_name:event,
page_id:k,
dedupe:m!==false}),


p=
{delay:n||c('Banzai').VITAL_WAIT};


c('Banzai').post(h,o,p);}};




f.exports=i;}),null);

/** shared/date/DateConsts.js */





__d('DateConsts',[],(function a(b,c,d,e,f,g){



var h=1000,
i=60,
j=60,
k=24,
l=7,
m=12,
n=1000,

o=30.43,
p=365.242,

q=i*j,
r=q*k,
s=r*l,
t=r*p,

u=h*i,
v=u*j,
w=h*r,
x=w*l,
y=w*p,

z=
{SUNDAY:0,
MONDAY:1,
TUESDAY:2,
WEDNESDAY:3,
THURSDAY:4,
FRIDAY:5,
SATURDAY:6};

Object.freeze(z);

var aa=




{getDaysInMonth:function ba(ca,da){
return new Date(ca,da,0).getDate();},





getCurrentTimeInSeconds:function ba(){
return Date.now()/h;},


DAYS:z,

MS_PER_SEC:h,
MS_PER_MIN:u,
MS_PER_HOUR:v,
MS_PER_DAY:w,
MS_PER_WEEK:x,
MS_PER_YEAR:y,

SEC_PER_MIN:i,
SEC_PER_HOUR:q,
SEC_PER_DAY:r,
SEC_PER_WEEK:s,
SEC_PER_YEAR:t,

US_PER_MS:n,

MIN_PER_HOUR:j,

HOUR_PER_DAY:k,

DAYS_PER_WEEK:l,

MONTHS_PER_YEAR:m,

AVG_DAYS_PER_MONTH:o,
AVG_DAYS_PER_YEAR:p,






'private':

{instantRange:
{since:-8.64e+12,
until:8.64e+12+1}}};




f.exports=aa;}),null);

/** www/__virtual__/x/XBasicFBNuxDismissController.js */



__d("XBasicFBNuxDismissController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/ajax\/megaphone\/dismiss_fbnux\/",{nux_id:{type:"Int",required:true}});}),

null);
