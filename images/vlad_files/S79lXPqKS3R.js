if (self.CavalryLogger) { CavalryLogger.start_js(["QujmW"]); }

/** js/components/CenteredContainer/CenteredContainer.react.js */










__d('CenteredContainer.react',['cx','React','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,






k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').Component);j=i&&i.prototype;l.prototype.












render=function(){'use strict';
var m=
(this.props.vertical?"_3bwv":'')+
(this.props.horizontal?' '+"_3bww":''),


n=c('React').Children.map(this.props.children,function(p){

return (c('React').createElement('div',{className:"_3bwx"},
p));}),




o=c('joinClasses')
(this.props.className,

this.props.fullHeight?"_5bpf":'');




return (c('React').createElement('div',babelHelpers['extends']({},this.props,{className:o}),
c('React').createElement('div',{className:m},
c('React').createElement('div',{className:"_3bwy"},
n))));};




function l(){'use strict';i.apply(this,arguments);}l.propTypes={fullHeight:k.bool,vertical:k.bool,horizontal:k.bool};l.defaultProps={fullHeight:false,vertical:false,horizontal:true};


f.exports=l;}),null);

/** js/ui/layer/dialog/DialogPosition.js */






__d('DialogPosition',['Vector'],(function a(b,c,d,e,f,g){





var h=40,


i,

j=

{calculateTopMargin:function k
(l,
m){


var n=arguments.length<=2||arguments[2]===undefined?null:arguments[2],o=arguments.length<=3||arguments[3]===undefined?false:arguments[3],

p=c('Vector').getViewportDimensions(),

q=false;
if(o&&n)
q=n+m>p.y;


if(n&&!q)
return n;


if(i)
return i;



var r=Math.floor
((p.x+l)*
(p.y-m)/
(4*p.x));


return Math.max(r,h);},








setFixedTopMargin:function k(l){
i=l;}};



f.exports=j;}),null);

/** js/modules/TabbableElements.js */





__d('TabbableElements',['Style'],(function a(b,c,d,e,f,g){



function h(k){

if(k.tabIndex<0)
return false;






if(k.tabIndex>0||
k.tabIndex===0&&k.getAttribute('tabIndex')!==null)
return true;


var l=k;

switch(k.tagName){
case 'A':
var m=l;
return !!m.href&&m.rel!='ignore';
case 'INPUT':
var n=l;
return n.type!='hidden'&&n.type!='file'&&!n.disabled;
case 'BUTTON':
case 'SELECT':
case 'TEXTAREA':
var o=
l;
return !o.disabled;}


return false;}


function i(k){


var l=k;

while(l&&
l!==document&&
(c('Style').get(l,'visibility')!='hidden'||
c('Style').get(l,'display')!='none'))
l=l.parentNode;



return l===document;}


var j=




{find:function k(l){
return Array.from(l.getElementsByTagName('*')).
filter(j.isTabbable);},


isTabbable:function k(l){
return h(l)&&i(l);}};



f.exports=j;}),null);

/** js/modules/Toggler.js */






__d('Toggler',['csx','Arbiter','ArbiterMixin','ContextualThing','CSS','DataStore','DOM','DOMQuery','Event','Focus','Keys','Parent','TabbableElements','arrayContains','createArrayFromMixed','emptyFunction','ge','getContextualParent','getObjectValues','mixin','setImmediate'],(function a(b,c,d,e,f,g,h){var i,j,





























k=[],
l,

m=false;
function n(){
if(!m){
m=true;
c('setImmediate')(function(){
m=false;});}}







var o=function s(){
o=c('emptyFunction');




c('Event').listen(document.documentElement,'click',function(event){
if(m)
return;


var t=event.getTarget();
k.forEach(function(u){
u.clickedTarget=t;
u.active&&
!u.sticky&&
!c('ContextualThing').containsIncludingLayers
(u.getActive(),
t)&&
!u.inTargetFlyout(t)&&
u.inActiveDialog()&&
!u.isIgnoredByModalLayer(t)&&
u.hide();});},

c('Event').Priority.URGENT);};
i=babelHelpers.inherits

(p,c('mixin')(c('ArbiterMixin')));j=i&&i.prototype;
function p(){'use strict';
j.constructor.call(this);
this.active=null;
this.togglers={};



this.setSticky(false);


k.push(this);


this.subscribe(['show','hide'],p.inform.bind(p));

return o();}
p.prototype.





show=function(s){'use strict';
var t=q(this,s),

u=t.active;
if(s!==u){

u&&t.hide();


t.active=s;



c('CSS').addClass(s,'openToggler');


var v=c('DOM').scry(s,'a[rel="toggle"]');


if(v.length>0&&v[0].getAttribute('data-target'))
c('CSS').removeClass
(c('ge')(v[0].getAttribute('data-target')),
'toggleTargetClosed');



var w=c('DOMQuery').scry(s,'.uiToggleFlyout')[0];
if(w){
var x=c('TabbableElements').find(w)[0]||w;
if(x.tabIndex==-1)
x.tabIndex=0;

c('Focus').setWithoutOutline(x);}


if(v.length>0){

c('DOM').appendContent(s,t.getToggler('next'));
c('DOM').prependContent(s,t.getToggler('prev'));}


c('Event').listen(s,'keydown',function(event){
if(c('Event').getKeyCode(event)===c('Keys').ESC)
if(t.isShown()){
var y=c('DOM').scry(s,'a[rel="toggle"]')[0];
y&&y.focus();
t.hide();
event.kill();}});





t.inform('show',t);}};

p.prototype.






hide=function(s){'use strict';
var t=q(this,s),

u=t.active;
if(u&&(!s||s===u)){

c('CSS').removeClass(u,'openToggler');


var v=c('DOM').scry(u,'a[rel="toggle"]');


if(v.length>0&&v[0].getAttribute('data-target'))
c('CSS').addClass
(c('ge')(v[0].getAttribute('data-target')),
'toggleTargetClosed');




c('getObjectValues')(t.togglers).forEach(c('DOM').remove);


t.inform('hide',t);


t.active=null;}};

p.prototype.







toggle=function(s){'use strict';
var t=q(this,s);
if(t.active===s){

t.hide();}else 


t.show(s);


n();};
p.prototype.





getActive=function(){'use strict';
return q(this).active;};
p.prototype.





isShown=function(){'use strict';
return q(this).active&&
c('CSS').hasClass(q(this).active,'openToggler');};
p.




isNodeShown=function(s){'use strict';
return c('CSS').hasClass(s,'openToggler');};
p.prototype.






inTargetFlyout=function(s){'use strict';
var t=r(this.getActive());
return t&&
c('ContextualThing').containsIncludingLayers(t,s);};
p.prototype.





inActiveDialog=function(){'use strict';
var s=b.Dialog&&b.Dialog.getCurrent();
return !s||c('DOM').contains(s.getRoot(),this.getActive());};
p.prototype.






isIgnoredByModalLayer=function(s){'use strict';
var t=
!!c('Parent').bySelector(s,"._3qw"),
u=
!!c('Parent').bySelector(this.getActive(),"._3qw");
return t&&!u;};
p.prototype.








getToggler=function(s){'use strict';
var t=q(this);
if(!t.togglers[s]){
t.togglers[s]=c('DOM').create('button',
{className:'hideToggler',
onfocus:function u(){
var v=c('DOM').scry(t.active,'a[rel="toggle"]')[0];
v&&v.focus();
t.hide();},

style:
{right:s==='next'?'0':''}});


t.togglers[s].setAttribute('type','button');}

return this.togglers[s];};
p.prototype.







setSticky=function(s){'use strict';
var t=q(this);

s=s!==false;


if(s!==t.sticky){
t.sticky=s;


if(s){
t.$Toggler_pt&&t.$Toggler_pt.unsubscribe();}else 

t.$Toggler_pt=c('Arbiter').subscribe
('pre_page_transition',
t.hide.bind(t,null));}



return t;};
p.prototype.







setPrePageTransitionCallback=function(s){'use strict';
var t=q(this);
t.$Toggler_pt&&t.$Toggler_pt.unsubscribe();
t.$Toggler_pt=c('Arbiter').subscribe
('pre_page_transition',
s);};

p.





bootstrap=function(s){'use strict';
var t=s.parentNode;
p.getInstance(t).toggle(t);};
p.








createInstance=function(s){'use strict';
var t=new p().setSticky(true);


c('DataStore').set(s,'toggler',t);

return t;};
p.

destroyInstance=function(s){'use strict';
c('DataStore').remove(s,'toggler');};
p.









getInstance=function(s){'use strict';


while(s){
var t=c('DataStore').get(s,'toggler');
if(t)
return t;

if(c('CSS').hasClass(s,'uiToggleContext'))
return p.createInstance(s);

s=c('getContextualParent')(s);}


return l=l||new p();};
p.








listen=function(s,t,u){'use strict';

return p.subscribe
(c('createArrayFromMixed')(s),function(v,w){
if(w.getActive()===t)
return u(v,w);});};







Object.assign(p,p.prototype,c('ArbiterMixin'));


Object.assign(p,









{subscribe:function(s){
return function(t,u){
t=c('createArrayFromMixed')(t);




if(c('arrayContains')(t,'show'))
k.forEach(function(v){
if(v.getActive())
setTimeout(u.bind(null,'show',v),0);});




return s(t,u);};}

(p.subscribe.bind(p))});








function q(s,t){
if(s instanceof p)
return s;

return p.getInstance(t);}








function r(s){
var t=c('DOM').scry(s,'a[rel="toggle"]');
if(t.length>0&&t[0].getAttribute('data-target'))
return c('ge')(t[0].getAttribute('data-target'));}



f.exports=p;}),null);

/** js/ui/layer/dialog/DialogX.js */






__d('DialogX',['cx','Arbiter','CSS','DialogPosition','Event','JSXDOM','Layer','LayerAutoFocus','LayerButtons','LayerFormHooks','LayerRefocusOnHide','LayerTabIsolation','LayerTogglerContext','ModalLayer','Style','Vector','debounce','goURI','shield'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits




























(k,c('Layer'));j=i&&i.prototype;k.prototype.
_configure=function(m,n){'use strict';
j._configure.call(this,m,n);
c('CSS').addClass(this.getRoot(),"_4-hy");
if(m.autohide)
var o=this.subscribe('show',function(){
o.unsubscribe();
setTimeout(c('shield')(this.hide,this),m.autohide);}.
bind(this));

if(m.redirectURI)
var p=this.subscribe('hide',function(){
p.unsubscribe();
c('goURI')(m.redirectURI);});



this._fixedTopPosition=m.fixedTopPosition;
this._ignoreFixedTopInShortViewport=m.ignoreFixedTopInShortViewport;};
k.prototype.

_getDefaultBehaviors=function(){'use strict';
return j._getDefaultBehaviors.call(this).concat
([l,c('ModalLayer'),c('LayerAutoFocus'),c('LayerButtons'),c('LayerFormHooks'),c('LayerTabIsolation'),c('LayerTogglerContext'),c('LayerRefocusOnHide')]);};








k.prototype.

_buildWrapper=function(m,n){'use strict';
var o=
m.xui?"_4t2a":"_t",
p=m.xui?
"_59s7":"_1yv";

this._innerContent=c('JSXDOM').div(null,n);

var q=
{className:p,
role:'dialog'};

if(m.labelledBy){
q['aria-labelledby']=m.labelledBy.join(' ');}else
if(m.label){
q['aria-label']=m.label;}else
if(m.titleID)
q['aria-labelledby']=m.titleID;


var r={className:o};
if(m['data-testid'])
r['data-testid']=m['data-testid'];

this._wrapper=
c('JSXDOM').div
(q,
c('JSXDOM').div
(r,
this._innerContent));



this.setWidth(m.width);


return (c('JSXDOM').div({className:"_10"},
this._wrapper));};


k.prototype.

getContentRoot=function(){'use strict';
return this._wrapper;};
k.prototype.

getInnerContent=function(){'use strict';
return this._innerContent;};
k.prototype.

updatePosition=function(){'use strict';
var m=c('Vector').getElementDimensions(this._wrapper),

n=c('DialogPosition').calculateTopMargin
(m.x,
m.y,
this._fixedTopPosition,
this._ignoreFixedTopInShortViewport);


c('Style').set(this._wrapper,'margin-top',n+'px');
this.inform('update_position',{type:'DialogX',top:n});};
k.prototype.








setWidth=function(m){'use strict';
m=Math.floor(m);
if(m===this._width)
return;

this._width=m;
c('Style').set(this._wrapper,'width',m+'px');};
k.prototype.

getWidth=function(){'use strict';
return this._width;};
k.prototype.

getFixedTopPosition=function(){'use strict';
return this._fixedTopPosition;};
k.prototype.

shouldIgnoreFixedTopInShortViewport=function(){'use strict';
return this._ignoreFixedTopInShortViewport;};
function k(){'use strict';i.apply(this,arguments);}








function l(m){'use strict';
this._layer=m;}
l.prototype.

enable=function(){'use strict';
this._subscription=this._layer.subscribe
(['show','hide'],
function(m){
if(m==='show'){
this._attach();
c('Arbiter').inform('layer_shown',{type:'DialogX'});}else{

this._detach();
c('Arbiter').inform('layer_hidden',{type:'DialogX'});}}.

bind(this));};

l.prototype.

disable=function(){'use strict';
this._subscription.unsubscribe();
this._subscription=null;
this._resize&&this._detach();};
l.prototype.

_attach=function(){'use strict';
this._layer.updatePosition();
this._resize=c('Event').listen
(window,
'resize',
c('debounce')(this._layer.updatePosition.bind(this._layer)));};

l.prototype.

_detach=function(){'use strict';
this._resize.remove();
this._resize=null;};



Object.assign(l.prototype,
{_subscription:null,
_resize:null});


f.exports=k;}),null);

/** js/components/core/UI/Layer/AbstractDialog.react.js */





__d('AbstractDialog.react',['DialogX','LayerHideOnBlur','LayerHideOnEscape','React','ReactDOM'],(function a(b,c,d,e,f,g){







var h=c('React').PropTypes,

i=




{createSpec:function j(k){

return {displayName:k.displayName,

propTypes:
{behaviors:h.object,
className:h.string,
'data-testid':h.string,
modal:h.bool,
autohide:h.number,
width:h.number,
label:h.string,
labelledBy:h.arrayOf(h.string),
titleID:h.string,
causalElement:h.object,
causalElementRef:h.func,
shown:h.bool,
layerHideOnBlur:h.bool,
hideOnEscape:h.bool,
onToggle:h.func,



fixedTopPosition:h.number},






createLayer:function l(m){
var n=this.props.className,
o=babelHelpers['extends']
({width:this.props.width,


xui:true,

autohide:this.props.autohide,
classNames:n?n.split(' '):null,
label:this.props.label,
labelledBy:this.props.labelledBy,
titleID:this.props.titleID,
causalElement:this._getCausalElement(),
fixedTopPosition:this.props.fixedTopPosition},
k||{});


if(this.props['data-testid'])
o['data-testid']=this.props['data-testid'];


var p=babelHelpers['extends']({},
k.addedBehaviors,
this.props.behaviors);


if(this.props.layerHideOnBlur!==false)
p.LayerHideOnBlur=c('LayerHideOnBlur');

if(this.props.hideOnEscape===true)
p.LayerHideOnEscape=c('LayerHideOnEscape');

o.addedBehaviors=this.enumerateBehaviors(p);

var q=new (c('DialogX'))(o,m);
q.conditionShow(this.props.shown);
return q;},






receiveProps:function l(m,n){
this.updateBehaviors(n.behaviors,m.behaviors);

if(this.layer){
this.layer.setCausalElement(this._getCausalElement());
this.layer.conditionShow(m.shown);
this.layer.setWidth(m.width);
m.shown&&this.layer.updatePosition();}},






_getCausalElement:function l(){
var m;
if(this.props.causalElementRef){
m=c('ReactDOM').findDOMNode(this.props.causalElementRef());}else 

m=this.props.causalElement;

return m;}};}};





f.exports=i;}),null);

/** js/components/core/XUI/Layer/Dialog/Buttons/XUIDialogButton.react.js */





__d('XUIDialogButton.react',['cx','React','XUIButton.react','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,







k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').Component);j=i&&i.prototype;l.prototype.










render=function(){'use strict';
var m=this.props.action,
n=
(m=='confirm'?"layerConfirm":'')+
(m=='cancel'?' '+"layerCancel":'')+
(m=='button'?' '+"layerButton":''),


o=this.props.href;
if(m=='cancel'){
o='#';}else
if(m=='button')
o=o||'#';



return (c('React').createElement(c('XUIButton.react'),babelHelpers['extends']({},
this.props,
{className:c('joinClasses')(this.props.className,n),
href:o})));};


function l(){'use strict';i.apply(this,arguments);}l.propTypes={action:k.oneOf(['cancel','confirm','button'])};


f.exports=l;}),null);

/** js/components/core/XUI/Layer/Dialog/Buttons/XUIDialogOkayButton.react.js */





__d('XUIDialogOkayButton.react',['cx','fbt','React','XUIDialogButton.react','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j,k,








l=c('React').PropTypes;j=babelHelpers.inherits

(m,c('React').Component);k=j&&j.prototype;m.prototype.










render=function(){'use strict';

return (c('React').createElement(c('XUIDialogButton.react'),babelHelpers['extends']({},
this.props,
{className:c('joinClasses')(this.props.className,"_2z1w"),
action:this.props.action,
label:i._(["OK","ea40ab962606886b4ad0c9e7bba7dcf3"])})));};


function m(){'use strict';j.apply(this,arguments);}m.propTypes={action:l.oneOf(['confirm','cancel','button']).isRequired};


f.exports=m;}),null);

/** shared/react/shims/ReactBrowserEventEmitter.js */









__d('ReactBrowserEventEmitter',['ReactDOM-fb'],(function a(b,c,d,e,f,g){

'use strict';


var h=c('ReactDOM-fb').__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;


f.exports=h.ReactBrowserEventEmitter;}),null);

/** shared/react_contrib/ReactLayer.js */





__d('ReactLayer',['invariant','React','ReactDOM','ReactBrowserEventEmitter','SubscriptionsHandler','emptyFunction','getObjectValues','renderSubtreeIntoContainer','requestAnimationFrame'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,












k=function p(q){
q.isPropagationStopped=c('emptyFunction').thatReturnsTrue;};
i=babelHelpers.inherits

(l,c('React').Component);j=i&&i.prototype;l.prototype.
render=function(){



return (c('React').createElement('div',
{onClick:k,
onDoubleClick:k,
onKeyDown:k,
onKeyPress:k,
onKeyUp:k,
onMouseDown:k,
onMouseMove:k,
onMouseUp:k},

this.props.children));};


function l(){i.apply(this,arguments);}




function m(){
return typeof c('ReactDOM').unstable_createPortal==='function';}









var n=


























{componentWillMount:function p(){
this._layerContainer=document.createElement('div');},





componentDidMount:function p(){
this._renderContentIntoContainer();
this.layer=this.createLayer(this._layerContainer);

this.layer||h(0,
'mountLayer(): `createLayer` did not return a layer.');


this.layerSubscriptions=new (c('SubscriptionsHandler'))();
this.layerSubscribe
('show',
function(){return this.props.onToggle&&this.props.onToggle(true);}.bind(this));

this.layerSubscribe
('hide',
function(){return this.props.onToggle&&this.props.onToggle(false);}.bind(this));

this.layerSubscribe
('blur',
function(q,r){return this.props.onBlur&&this.props.onBlur(r);}.bind(this));


this._resetBehaviors();},





componentDidUpdate:function p(q){
this._renderContentIntoContainer();
this.receiveProps(this.props,q);},





componentWillUnmount:function p(){
if(!m())
c('ReactDOM').unmountComponentAtNode(this._layerContainer);

this._layerContainer=null;




if(this.layerSubscriptions){
this.layerSubscriptions.release();
this.layerSubscriptions=null;}

if(this.layer){
this.layer.destroy();
this.layer=null;}},







_renderContentIntoContainer:function p(){
if(m())
return;

var q=false;
c('renderSubtreeIntoContainer')
(this,
c('React').createElement(l,null,this.props.children),
this._layerContainer,
function(){





if(q)

c('requestAnimationFrame')(function(){
if(this.layer&&this.layer.isShown())
this.layer.updatePosition();}.

bind(this));}.

bind(this));

q=true;},





render:function p(){
if(m()){
return c('ReactDOM').unstable_createPortal
(c('React').createElement(l,null,this.props.children),
this._layerContainer);}else 


return null;},








enumerateBehaviors:function p(q){
q=this.getEffectiveBehaviors(q);
return c('getObjectValues')(q).filter(c('emptyFunction').thatReturnsArgument);},







_resetBehaviors:function p(){
this._diffBehaviors({},this.props.behaviors);},





updateBehaviors:function p(q,r){
this._diffBehaviors(q,r);},






_diffBehaviors:function p(q,r){
q=this.getEffectiveBehaviors(q);
r=this.getEffectiveBehaviors(r);
var s;
for(s in q)
if(!r[s])
this.layer.disableBehavior(q[s]);


for(s in r){
var t=q[s],
u=r[s];
if(t&&u){

t===u||h(0,
'updateBehaviors(...): Do not reuse keys for different behaviors: %s',
s);

continue;}

t&&this.layer.disableBehavior(t);
u&&this.layer.enableBehavior(u);}},









getEffectiveBehaviors:function p(q){
if(!this.getDefaultEnabledBehaviors)
return q||{};

return babelHelpers['extends']({},
this.getDefaultEnabledBehaviors(),
q);},



layerSubscribe:function p(q,r){
var s=this.layer,
t=s.subscribe||s.addListener;
this.layerSubscriptions.addSubscriptions
(t.call(s,q,function(u,v){
c('ReactBrowserEventEmitter').isEnabled()&&r(u,v);}));}},










o=
{createClass:function p(q){
return c('React').createClass

({mixins:[n,q]});}};





f.exports=o;}),null);

/** js/components/core/XUI/Layer/Dialog/XUIDialog.react.js */





__d('XUIDialog.react',['AbstractDialog.react','LayerFadeOnShow','ReactLayer'],(function a(b,c,d,e,f,g){





var h=c('ReactLayer').createClass
(c('AbstractDialog.react').createSpec
({displayName:'XUIDialog',
addedBehaviors:
{LayerFadeOnShow:c('LayerFadeOnShow')}}));




f.exports=h;}),null);

/** js/components/core/XUI/Layer/Dialog/XUIDialogBody.react.js */






__d('XUIDialogBody.react',['cx','React','joinClasses','XUIText.react'],(function a(b,c,d,e,f,g,h){var i,j,








k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').Component);j=i&&i.prototype;l.prototype.

















render=function(){'use strict';
var m="_4-i2"+

(!this.props.useCustomPadding?' '+"_pig":'');




return (c('React').createElement(c('XUIText.react'),babelHelpers['extends']({},
this.props,
{className:c('joinClasses')(this.props.className,m),
display:'block',
size:this.props.fontSize}),
this.props.children));};


function l(){'use strict';i.apply(this,arguments);}l.propTypes={fontSize:k.oneOf(['medium','inherit']),useCustomPadding:k.bool};l.defaultProps={fontSize:'medium'};


f.exports=l;}),null);

/** js/components/core/XUI/Layer/Dialog/XUIDialogFooter.react.js */





__d('XUIDialogFooter.react',['cx','LeftRight.react','React','XUIOverlayFooter.react','XUIText.react','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,









k=c('React').PropTypes;i=babelHelpers.inherits






















(l,c('React').Component);j=i&&i.prototype;l.prototype.


























render=function(){'use strict';
var m="_5a8u"+

(this.props.fullBleedBorder?' '+"_27qq":'');



return (c('React').createElement(c('XUIOverlayFooter.react'),babelHelpers['extends']({},
this.props,
{className:c('joinClasses')(this.props.className,m)}),
c('React').createElement(c('XUIText.react'),{display:'block',fontSize:this.props.fontSize},
c('React').createElement(c('LeftRight.react'),null,
c('React').createElement('div',null,this.props.leftContent),
c('React').createElement('div',null,this.props.children)))));};




function l(){'use strict';i.apply(this,arguments);}l.propTypes={fontSize:k.oneOf(['medium','inherit']),fullBleedBorder:k.bool,leftContent:k.object};l.defaultProps={fontSize:'medium'};


f.exports=l;}),null);

/** js/components/core/XUI/Layer/Dialog/XUIDialogTitle.react.js */





__d('XUIDialogTitle.react',['cx','fbt','LeftRight.react','React','XUICloseButton.react','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j,k,









l=c('React').PropTypes;j=babelHelpers.inherits

(m,c('React').Component);k=j&&j.prototype;m.prototype.



















render=function(){'use strict';
var n=null,o=
this.props,p=o.closeButtonText,q=o.showCloseButton,r=babelHelpers.objectWithoutProperties(o,['closeButtonText','showCloseButton']);

if(q)
n=
c('React').createElement(c('XUICloseButton.react'),
{label:p,
className:"layerCancel _51-t"});



var s=c('React').Children.toArray(this.props.children);


return (c('React').createElement('div',babelHelpers['extends']({},
r,
{className:c('joinClasses')(this.props.className,"_4-i0")}),
c('React').createElement(c('LeftRight.react'),null,
c('React').createElement('h3',{className:"_52c9"},
s[0]),

c('React').createElement('div',{className:"_51-u"},
s.slice(1),
n))));};




function m(){'use strict';j.apply(this,arguments);}m.propTypes={closeButtonText:l.string,showCloseButton:l.bool};m.defaultProps={closeButtonText:i._(["Close","b74978868bfd773a3f54dbb806d0fef3"]),showCloseButton:true};


f.exports=m;}),null);

/** js/modules/curry.js */




__d('curry',['bind'],(function a(b,c,d,e,f,g){










var h=c('bind')(null,c('bind'),null);

f.exports=h;}),null);

/** js/ui/layer/dialog/LoadingDialogDimensions.js */





__d("LoadingDialogDimensions",[],(function a(b,c,d,e,f,g){

var h=
{HEIGHT:96,
WIDTH:300};


f.exports=h;}),null);

/** js/ui/layer/dialog/AsyncDialog.js */





__d('AsyncDialog',['cx','AsyncRequest','CSS','DialogX','DOM','Keys','LayerFadeOnShow','LoadingDialogDimensions','Parent','React','ReactDOM','URI','XUISpinner.react','XUIDialogTitle.react','emptyFunction','forEachObject'],(function a(b,c,d,e,f,g,h){



















var i,
j;








function k(s){

var t=c('LoadingDialogDimensions').WIDTH,
u;

if(s){
t=
parseInt(s.getAttribute('data-dialog-width'),10)||t;
u=s.getAttribute('data-dialog-title')||u;}



if(!i){
var v=c('DOM').create
('div',
{className:"_57-x"});


i=new (c('DialogX'))
({width:t,addedBehaviors:[c('LayerFadeOnShow')],xui:true},
c('DOM').create('div',null,v));


j=c('DOM').create('div');
c('DOM').insertBefore(v,j);
c('ReactDOM').render(c('React').createElement(c('XUISpinner.react'),{size:'large'}),v);




i.subscribe
(['key','blur'],
function(w,x){
if(w=='blur'||w=='key'&&x.keyCode==c('Keys').ESC){

o();
return false;}});}





if(u){
c('ReactDOM').render
(c('React').createElement(c('XUIDialogTitle.react'),{showCloseButton:false},u),
j);}else 


c('DOM').empty(j);


i.setWidth(t);

return i;}




var l={},


m=1,
n=[];







function o(){
c('forEachObject')(l,function(s,t){
s.abandon();
p(t);});}










function p(s){
delete l[s];

if(!Object.keys(l).length)
k().hide();}












function q(s,t){
var u=m++;

n[u]=t;
l[u]=s;




var v=
p.bind(null,''+u);

Object.assign(s.getData(),{__asyncDialog:u});

var w=s.getRelativeTo();
k(w).setCausalElement(w).show();

var x=s.finallyHandler;
s.setFinallyHandler(function(aa){
var ba=aa.getPayload();





if(ba&&ba.asyncURL)
r.send(new (c('AsyncRequest'))(ba.asyncURL));


v();
x&&x(aa);});





var y=
s.abortHandler||c('emptyFunction'),

z=
s.interceptHandler||c('emptyFunction');

s.
setInterceptHandler(function(){

try{z();}finally{

v();}}).


setAbortHandler(function(){

try{y();}finally{

v();}});



s.send();}


var r=




















{send:function s(t,u){





q(t,u||c('emptyFunction'));},
















bootstrap:function s(t,u,v){

if(!t)
return;


var w=c('Parent').byClass(u,'stat_elem')||u;
if(w&&c('CSS').hasClass(w,'async_saving'))
return false;


var x=new (c('URI'))(t).getQueryData(),

y=v==='dialog',

z=new (c('AsyncRequest'))().
setURI(t).
setData(x).
setMethod(y?'GET':'POST').
setReadOnly(y).
setStatusElement(w);

if(u){
z.setRelativeTo(u);
z.setNectarModuleDataSafe(u);}


r.send(z);},












respond:function s(t,u){
var v=n[t];










if(v){



v(u);
delete n[t];}},











getLoadingDialog:function s(){
return k();}};



f.exports=r;}),null);

/** shared/core/clearImmediatePolyfill.js */




__d('clearImmediatePolyfill',['ImmediateImplementation'],(function a(b,c,d,e,f,g){





f.exports=b.clearImmediate||
c('ImmediateImplementation').clearImmediate;}),null);

/** shared/page/clearImmediate.js */




__d('clearImmediate',['TimerStorage','clearImmediatePolyfill'],(function a(b,c,d,e,f,g){





f.exports=function(){for(var h=arguments.length,i=Array(h),j=0;j<h;j++)i[j]=arguments[j];
c('TimerStorage').unset(c('TimerStorage').IMMEDIATE,i[0]);

return Function.prototype.apply.call(c('clearImmediatePolyfill'),

b,
i);};}),

null);

/** shared/react/shims/getEventCharCode.js */









__d('getEventCharCode',['ReactDOM-fb'],(function a(b,c,d,e,f,g){

'use strict';


var h=c('ReactDOM-fb').__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;


f.exports=h.getEventCharCode;}),null);

/** www/__virtual__/x/XPagesManagerPublishingToolsController.js */



__d("XPagesManagerPublishingToolsController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/{page_token}\/publishing_tools\/",{page_token:{type:"String",required:true},business_id:{type:"Int"},current_page:{type:"Int"},section:{type:"String"},source:{type:"Enum",enumType:1},refSource:{type:"Enum",enumType:1},initial_data:{type:"StringToStringMap"}});}),

null);
