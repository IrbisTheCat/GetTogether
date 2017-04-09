if (self.CavalryLogger) { CavalryLogger.start_js(["NId2E"]); }

/** js/components/core/UI/InputLabel/InputLabel.react.js */







__d('InputLabel.react',['cx','invariant','React','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j,k,







l=c('React').PropTypes,

m=0;

function n(){
return 'js_input_label_'+m++;}
j=babelHelpers.inherits





(o,c('React').Component);k=j&&j.prototype;o.prototype.








render=function(){'use strict';

this.props.children.length===2||i(0,
'InputLabel expects two children, an <input> followed by a <label>');


var p=this.props.children[0],
q=this.props.children[1],






r=p.type==='input';

p=c('React').cloneElement(p,
{className:c('joinClasses')
(p.props.className,"uiInputLabelInput"+



(r&&p.props.type==='radio'?' '+"uiInputLabelRadio":'')+

(r&&p.props.type==='checkbox'?' '+"uiInputLabelCheckbox":'')),


id:p.props.id||n()});


q=c('React').cloneElement(q,
{className:c('joinClasses')
(q.props.className,
'uiInputLabelLabel'),

htmlFor:p.props.id});


var s="uiInputLabel"+(' '+"clearfix")+


(this.props.display==='inline'?' '+"inlineBlock":'')+
(r?' '+"uiInputLabelLegacy":'');



return (c('React').createElement('div',babelHelpers['extends']({},
this.props,
{className:c('joinClasses')(this.props.className,s)}),
p,
q));};


function o(){'use strict';j.apply(this,arguments);}o.propTypes={display:l.oneOf(['block','inline'])};o.defaultProps={display:'block'};


f.exports=o;}),null);

/** js/modules/PopoverMenuContextMinWidth.js */






__d('PopoverMenuContextMinWidth',['cx','CSS','Style','shield'],(function a(b,c,d,e,f,g,h){








function i(j){'use strict';
this._popoverMenu=j;
this._popover=j.getPopover();}
i.prototype.

enable=function(){'use strict';
this._setMenuSubscription=
this._popoverMenu.subscribe('setMenu',c('shield')(this._onSetMenu,this));};
i.prototype.

disable=function(){'use strict';
this._setMenuSubscription.unsubscribe();
this._setMenuSubscription=null;

if(this._showSubscription){
this._showSubscription.unsubscribe();
this._showSubscription=null;}


if(this._menuSubscription){
this._menuSubscription.unsubscribe();
this._menuSubscription=null;}};

i.prototype.

_onSetMenu=function(){'use strict';
this._menu=this._popoverMenu.getMenu();

this._showSubscription=
this._popover.subscribe('show',c('shield')(this._updateWidth,this));



var j=this._updateWidth.bind(this);
this._menuSubscription=
this._menu.subscribe
(['change','resize'],
function(){
setTimeout(j,0);});



this._updateWidth();};
i.prototype.

_updateWidth=function(){'use strict';
var j=this._menu.getRoot(),
k=this._popoverMenu.getTriggerElem(),
l=k.offsetWidth;
c('Style').set(j,'min-width',l+'px');

c('CSS').conditionClass
(j,
"_575s",
l>=j.offsetWidth);};




Object.assign(i.prototype,
{_setMenuSubscription:null,
_showSubscription:null,
_menuSubscription:null});


f.exports=i;}),null);

/** js/modules/PopoverMenuOverlappingBorder.js */






__d('PopoverMenuOverlappingBorder',['cx','CSS','DOM','Style','shield'],(function a(b,c,d,e,f,g,h){









function i(j){'use strict';
this._popoverMenu=j;
this._popover=j.getPopover();
this._triggerElem=j.getTriggerElem();}
i.prototype.

enable=function(){'use strict';
this._setMenuSubscription=
this._popoverMenu.subscribe('setMenu',c('shield')(this._onSetMenu,this));};
i.prototype.

disable=function(){'use strict';
this._popoverMenu.unsubscribe(this._setMenuSubscription);
this._setMenuSubscription=null;
this._removeBorderSubscriptions();
this._removeShortBorder();};
i.prototype.

_onSetMenu=function(){'use strict';
this._removeBorderSubscriptions();

this._menu=this._popoverMenu.getMenu();
this._renderShortBorder(this._menu.getRoot());

this._showSubscription=
this._popover.subscribe('show',c('shield')(this._updateBorder,this));
var j=this._updateBorder.bind(this);
this._menuSubscription=
this._menu.subscribe
(['change','resize'],
function(){



setTimeout(j,0);});



this._updateBorder();};
i.prototype.

_updateBorder=function(){'use strict';
var j=this._menu.getRoot(),
k=this._triggerElem.offsetWidth,

l=Math.max(j.offsetWidth-k,0);
c('Style').set(this._shortBorder,'width',l+'px');};
i.prototype.

_renderShortBorder=function(j){'use strict';
this._shortBorder=c('DOM').create('div',
{className:"_54hx"});

c('DOM').appendContent(j,this._shortBorder);
c('CSS').addClass(j,"_54hy");};
i.prototype.

_removeShortBorder=function(){'use strict';
if(this._shortBorder){
c('DOM').remove(this._shortBorder);
this._shortBorder=null;
c('CSS').removeClass
(this._popoverMenu.getMenu().getRoot(),
"_54hy");}};


i.prototype.

_removeBorderSubscriptions=function(){'use strict';
if(this._showSubscription){
this._popover.unsubscribe(this._showSubscription);
this._showSubscription=null;}

if(this._menuSubscription){
this._menu.unsubscribe(this._menuSubscription);
this._menuSubscription=null;}};




Object.assign(i.prototype,
{_shortBorder:null,
_setMenuSubscription:null,
_showSubscription:null,
_menuSubscription:null});


f.exports=i;}),null);

/** js/modules/ReactSelectorUtils.js */






__d('ReactSelectorUtils',['React'],(function a(b,c,d,e,f,g){

'use strict';













var h=










{processMenuItems:function i
(j,
k){

var l=arguments.length<=2||arguments[2]===undefined?false:arguments[2],
m=void 0,

n=c('React').Children.map(j,function(o){
if(o){
var p=o.props.value===k;
o=c('React').cloneElement(o,{selected:p});
if(p)
m=o;

return o;}});














return {items:n,selectedItem:m};},












processMultiMenuItems:function i
(j,
k){

var l=arguments.length<=2||arguments[2]===undefined?false:arguments[2],
m=[],

n=j;
if(k)

n=c('React').Children.map(j,function(o){
if(o){
var p=k.some(function(q){
return q===o.props.value;});


o=c('React').cloneElement(o,{selected:p});
if(p)
m.push(o);

return o;}});



















return {items:n,selectedItems:m};}};



f.exports=h;}),null);

/** js/components/core/UI/Selector/AbstractSelector.react.js */





__d('AbstractSelector.react',['cx','invariant','ContextualLayerAutoFlip','InlineBlock.react','PopoverMenu.react','PopoverMenuContextMinWidth','PopoverMenuOverlappingBorder','React','ReactSelectorUtils','intlList','joinClasses'],(function a(b,c,d,e,f,g,h,i){














var j=c('React').PropTypes;

function k(m,n,o){
if(m[n]==null)
return;

var p=Array.isArray(m[n]);
if(m.multiple){
if(!p)
return new Error
('You are trying to set a single value for `'+n+'` '+
'but the menu has `multiple` set to true, so it should be an '+
'array of values.');}else 



if(p)
return new Error
('You are trying to set an array of values for `'+n+'` '+
'but the menu has `multiple` set to false, so it should be a '+
'single value.');}

















var l=c('React').createClass({displayName:'AbstractSelector',



propTypes:
{config:j.object.isRequired,
alignh:j.oneOf(['left','center','right']),
name:j.string,
overlappingborder:j.bool,
onChange:j.func,
disabled:j.bool,
maxheight:j.number,
multiple:j.bool,

defaultLabel:j.string,



defaultValue:k,



value:k,



initialValue:k,
onReturnWithoutFocusedItem:j.func},


getInitialState:function m(){

return {value:
this.props.value!=null?this.props.value:
this.props.defaultValue!=null?this.props.defaultValue:
this.props.initialValue};},




setMenuValue:function m(n){

this.refs&&this.refs.popover||i(0,
'Ref to popover menu is not set.');


this._internalChange=true;
this.refs.popover.getMenu().setValue(n);
this._internalChange=false;},


onChange:function m(n,o){
if(this._internalChange)
return;


if(this.props.value==null){


var p=null;
if(this.props.multiple){
p=o.map(function(q){return q.value;});}else 


p=o.value;

this.setState({value:p});}else 

this.setMenuValue(this.props.value);


if(this.props.onChange)
this.props.onChange(o);},



componentWillReceiveProps:function m(n){
if(n.value!=null){
this.setState
({value:n.value});}else

if(this.props.multiple!==n.multiple)


this.setState
({value:n.multiple?[this.state.value]:this.state.value[0]});},




render:function m(){
var n=this.props.config,

o=!this.props.multiple?
c('ReactSelectorUtils').processMenuItems
(this.props.children,
this.state.value):

c('ReactSelectorUtils').processMultiMenuItems
(this.props.children,
this.state.value),


p=c('React').cloneElement(n.menu,
{children:o.items,
className:c('joinClasses')
("_575t",
n.menu.props.className),

maxheight:this.props.maxheight,
onChange:this.onChange}),


q='',
r=null;
if(!this.props.multiple){
var s=o.selectedItem;
q=s.props.label||s.props.children;

if(s.props.icon)
r=c('React').cloneElement(s.props.icon,{});}else{


var t=o.selectedItems;
if(!t.length){
q=this.props.defaultLabel;}else 


q=c('intlList')
(t.map(function(ba){
return ba.props.children;}),

c('intlList').CONJUNCTIONS.NONE);}




var u=
{label:q,
disabled:this.props.disabled};


if(r)
u.image=r;

var v=c('React').cloneElement(n.button,u),

w=[c('ContextualLayerAutoFlip')];
if(n.layerBehaviors)
w=w.concat(n.layerBehaviors);


var x=[c('PopoverMenuContextMinWidth')];
if(this.props.overlappingborder)
x.push(c('PopoverMenuOverlappingBorder'));


var y=null;
if(this.props.multiple){
var z=this.props.name+'[]',
aa;
if(this.state.value)
aa=this.state.value.map(function(ba){

return (c('React').createElement('input',
{key:ba,
type:'hidden',
name:z,
value:ba}));});




y=c('React').createElement('div',null,aa);}else 

y=
c('React').createElement('input',
{type:'hidden',
name:this.props.name,
value:this.state.value});




return (c('React').createElement(c('InlineBlock.react'),babelHelpers['extends']({},this.props,{alignv:'middle',name:null}),
c('React').createElement(c('PopoverMenu.react'),
{alignh:this.props.alignh,
behaviors:x,
disabled:this.props.disabled,
layerBehaviors:w,
menu:p,
position:this.props.position,
onReturnWithoutFocusedItem:this.props.onReturnWithoutFocusedItem,
ref:'popover'},
v),

y));},




showMenu:function m(){

this.isMounted()||i(0,
'AbstractSelector: Can only call `showMenu` when mounted.');

this.refs.popover.showPopover();},


showAndFocusMenu:function m(){

this.isMounted()||i(0,
'AbstractSelector: Can only call `showAndFocusMenu` when mounted.');

this.refs.popover.showPopover(true);},


hideMenu:function m(){

this.isMounted()||i(0,
'AbstractSelector: Can only call `hideMenu` when mounted.');

this.refs.popover.hidePopover();}});




f.exports=l;}),null);

/** shared/core_components/CheckboxInput/AbstractCheckboxInput.react.js */




__d('AbstractCheckboxInput.react',['cx','invariant','React','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j,k,







l=c('React').PropTypes;j=babelHelpers.inherits






(m,c('React').Component);k=j&&j.prototype;m.prototype.













render=function(){'use strict';

!this.props.children||
this.props.children.length===0||i(0,
'AbstractCheckboxInput does not support children, use with an InputLabel');



var n=c('joinClasses')
(this.props.className,
"_kv1"),




o=
c('React').createElement('input',babelHelpers['extends']({},
this.props,
{'data-testid':undefined,
className:null,
ref:function(p){return this.$AbstractCheckboxInput_input=p;}.bind(this),
type:'checkbox'}),
undefined);



return (c('React').createElement('label',{className:n,'data-testid':this.props['data-testid']},
o,
c('React').createElement('span',
{'data-hover':this.props.tooltip?'tooltip':null,
'data-tooltip-content':this.props.tooltip})));};



m.prototype.

focusInput=function(){'use strict';
this.$AbstractCheckboxInput_input&&this.$AbstractCheckboxInput_input.focus();};
m.prototype.

blurInput=function(){'use strict';
this.$AbstractCheckboxInput_input&&this.$AbstractCheckboxInput_input.blur();};
function m(){'use strict';j.apply(this,arguments);}m.propTypes={'data-testid':l.string,tooltip:l.string};


f.exports=m;}),null);

/** js/components/core/XUI/CheckboxInput/XUICheckboxInput.react.js */




__d('XUICheckboxInput.react',['cx','AbstractCheckboxInput.react','React','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits












(k,c('React').Component);j=i&&i.prototype;k.prototype.


render=function(){'use strict';

return (c('React').createElement(c('AbstractCheckboxInput.react'),babelHelpers['extends']({},
this.props,
{ref:function(l){return this.$XUICheckboxInput_input=l;}.bind(this),
className:c('joinClasses')(this.props.className,"_55sg")}),
undefined));};


k.prototype.

focusInput=function(){'use strict';
this.$XUICheckboxInput_input&&this.$XUICheckboxInput_input.focusInput();};
k.prototype.

blurInput=function(){'use strict';
this.$XUICheckboxInput_input&&this.$XUICheckboxInput_input.blurInput();};
function k(){'use strict';i.apply(this,arguments);}


f.exports=k;}),null);

/** js/components/core/XUI/Layer/Dialog/Buttons/XUIDialogConfirmButton.react.js */





__d('XUIDialogConfirmButton.react',['fbt','React','XUIDialogButton.react'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits






(k,c('React').Component);j=i&&i.prototype;k.prototype.



render=function(){'use strict';

return (c('React').createElement(c('XUIDialogButton.react'),babelHelpers['extends']({},
this.props,
{action:'confirm',
label:h._(["Confirm","b852fce971c4121283ab9832e816374d"])})));};


function k(){'use strict';i.apply(this,arguments);}


f.exports=k;}),null);

/** js/components/core/XUI/Layer/Dialog/SimpleXUIDialog.js */








__d('SimpleXUIDialog',['cx','DialogX','LayerAutoFocusReact','LayerDestroyOnHide','LayerFadeOnHide','LayerFadeOnShow','LayerHideOnBlur','LayerHideOnEscape','LayerRefocusOnHide','React','XUIDialogCancelButton.react','XUIDialogBody.react','XUIDialogFooter.react','XUIDialogOkayButton.react','XUIDialogTitle.react','uniqueID'],(function a(b,c,d,e,f,g,h){

'use strict';



















var i=445,

j=










{show:function k(l,m,n,o){
var p=c('React').createElement(c('XUIDialogOkayButton.react'),{action:'cancel',use:'confirm'});
return this.showEx(l,m,p,n,o);},












showConfirm:function k(l,m,n,o){

var p=false,

q=
c('React').createElement('div',null,
c('React').createElement(c('XUIDialogCancelButton.react'),
{onClick:function s(){p=false;}}),

c('React').createElement(c('XUIDialogOkayButton.react'),
{action:'cancel',
className:
o&&o.autofocusConfirm?"autofocus":'',

use:'confirm',
onClick:function s(){p=true;}}));



function r(){
n(p);}


return this.showEx(l,m,q,r,o);},











showEx:function k(l,m,n,o,p){
p=p||{};
var q=[c('LayerDestroyOnHide'),c('LayerFadeOnShow'),c('LayerFadeOnHide'),c('LayerHideOnEscape'),c('LayerRefocusOnHide')];







if(p.hideOnBlur!==false)
q.push(c('LayerHideOnBlur'));


if(p.useReactFocusBehavior)
q.push(c('LayerAutoFocusReact'));


var r=
{width:p.width||i,
xui:true,
addedBehaviors:q,
causalElement:p.causalElement};

if(m){
var s=c('uniqueID')();
r.titleID=s;
m=
c('React').createElement(c('XUIDialogTitle.react'),
{showCloseButton:p.showCloseButton!==false,
id:s},
m);}


if(n)
n=
c('React').createElement(c('XUIDialogFooter.react'),
{'data-testid':'simple_xui_dialog_footer',
leftContent:p.leftContent},
n);



var t=
c('React').createElement('div',null,
m,
c('React').createElement(c('XUIDialogBody.react'),null,
l),

n),


u=new (c('DialogX'))(r,t);
if(o)
u.subscribe('hide',o);

u.show();
return u;}};



f.exports=j;}),null);

/** js/components/core/XUI/PopoverMenu/XUISelectorButton.react.js */






__d('XUISelectorButton.react',['invariant','React','XUIPopoverButton.react'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits






(k,c('React').Component);j=i&&i.prototype;k.prototype.
render=function(){'use strict';

!this.props.theme||h(0,
'XUISelectorButton does not support a theme option');


return (c('React').createElement(c('XUIPopoverButton.react'),babelHelpers['extends']({},
this.props,
{theme:'dark'})));};


function k(){'use strict';i.apply(this,arguments);}


f.exports=k;}),null);

/** js/components/core/XUI/PopoverMenu/XUISelector.react.js */





__d('XUISelector.react',['invariant','AbstractSelector.react','ContextualLayerPositionClassOnContext','React','ReactXUIMenu','XUISelectorButton.react'],(function a(b,c,d,e,f,g,h){






var i=c('ReactXUIMenu').SelectableMenu,

j=c('ReactXUIMenu').SelectableItem,



k=c('React').PropTypes,

l=c('React').createClass({displayName:'ReactXUISelector',



propTypes:

{layerBehaviors:k.array,
maxheight:k.number,
multiple:k.bool,
position:k.oneOf(['above','below','left','right']),










disabled:k.bool,
haschevron:k.bool,
maxwidth:k.number,
size:k.oneOf(['small','medium','large','xlarge','xxlarge']),
suppressed:k.bool,
use:k.oneOf(['default','special','confirm'])},


statics:
{getButtonSize:function m(n){
return n.size||'medium';}},



getDefaultProps:function m(){

return {haschevron:true,
layerBehaviors:[],
multiple:false};},






render:function m(){
var n,
o=[];
c('React').Children.forEach(this.props.children,function(q){
if(q)
o.push(q);});



if(o[0]&&o[0].type===c('XUISelectorButton.react')){
n=o[0];
o=o.slice(1);}else 

n=
c('React').createElement(c('XUISelectorButton.react'),
{ref:'button',
haschevron:this.props.haschevron,
disabled:this.props.disabled,
use:this.props.use,
size:this.props.size,
suppressed:this.props.suppressed,
maxwidth:this.props.maxwidth});


var p=
{button:n,
menu:c('React').createElement(i,
{maxheight:this.props.maxheight,
multiple:this.props.multiple}),

layerBehaviors:this.props.layerBehaviors.concat([c('ContextualLayerPositionClassOnContext')])};





return (c('React').createElement(c('AbstractSelector.react'),babelHelpers['extends']({},this.props,{ref:'abstractSelector',config:p}),
o));},




showMenu:function m(){

this.isMounted()||h(0,
'XUISelector: Can only call `showMenu` when mounted.');

this.refs.abstractSelector.showMenu();},


showAndFocusMenu:function m(){

this.isMounted()||h(0,
'XUISelector: Can only call `showAndFocusMenu` when mounted.');

this.refs.abstractSelector.showAndFocusMenu();},


hideMenu:function m(){

this.isMounted()||h(0,
'XUISelector: Can only call `hideMenu` when mounted.');

this.refs.abstractSelector.hideMenu();}});




l.Option=j;

f.exports=l;}),null);

/** js/components/core/XUI/RadioInput/XUIRadioInput.react.js */





__d('XUIRadioInput.react',['cx','invariant','React','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j,k;j=babelHelpers.inherits












(l,c('React').Component);k=j&&j.prototype;l.prototype.






render=function(){'use strict';

!this.props.children||
this.props.children.length===0||i(0,
'XUIRadioInput does not support children, use it with an InputLabel');



var m=c('joinClasses')
(this.props.className,
"_55sh"),




n=babelHelpers['extends']({},this.props,{className:null}),
o=
c('React').createElement('input',babelHelpers['extends']({},
n,
{type:'radio'}),
undefined);



return (c('React').createElement('label',
{className:m,
'data-testid':this.props.labelDataTestID},
o,
c('React').createElement('span',null)));};


function l(){'use strict';j.apply(this,arguments);}


f.exports=l;}),null);
