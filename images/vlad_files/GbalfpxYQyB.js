if (self.CavalryLogger) { CavalryLogger.start_js(["V6KsI"]); }

/** js/components/core/UI/Layer/ContextualLayer.react.js */





__d('ContextualLayer.react',['ContextualLayer','React','ReactBrowserEventEmitter','ReactDOM','ReactLayer','Style'],(function a(b,c,d,e,f,g){








var h=c('React').PropTypes,

i=c('ReactLayer').createClass

({propTypes:
{contextRef:h.func,
context:function j(k,l,m){
if(k.context==null==(k.contextRef==null))
return new Error
('Exactly one of `context` or `contextRef` must be set on `'+
(m+'`.'));


var n=k[l];
if(n!=null){
if(typeof n!=='object')
return new Error
('Invalid `'+l+'` supplied to `'+m+'`, '+'expected a React component.');



if(c('React').isValidElement(n))
return new Error
('Invalid `'+l+'` supplied to `'+m+'`, '+'expected a React component instance. You\'re passing a React '+'descriptor.');}}},








immutableProps:
{modal:null},






createLayer:function j(k){
var l=this._getContextNode(),
m=
{context:l,
contextBounds:this.props.contextBounds,
'data-testid':this.props['data-testid'],
position:this.props.position,
alignment:this.props.alignment,
offsetX:this.props.offsetX,
offsetY:this.props.offsetY,
addedBehaviors:this.enumerateBehaviors(this.props.behaviors),
shouldSetARIAProperties:this.props.shouldSetARIAProperties},

n=new (c('ContextualLayer'))(m,k);

this._node=k;
this._matchContextSize(this.props);

if(this.props.contextBounds)
n.setContextWithBounds(l,this.props.contextBounds);



this._resizeSubscription=n.subscribe('resize',function(o,p){
if(c('ReactBrowserEventEmitter').isEnabled()&&this.props.onResize)
this.props.onResize(p);}.

bind(this));

n.conditionShow(this.props.shown);
return n;},


componentWillUnmount:function j(){
if(this._resizeSubscription){
this._resizeSubscription.unsubscribe();
this._resizeSubscription=null;}},







receiveProps:function j(k,l){
this.updateBehaviors(l.behaviors,k.behaviors);
var m=this._getContextNode();




if(k.contextBounds){
this.layer.setContextWithBounds(m,k.contextBounds);}else 

this.layer.setContext(m);


this._matchContextSize(k);

this.layer.setPosition(k.position);
this.layer.setAlignment(k.alignment);
this.layer.setOffsetX(k.offsetX);
this.layer.setOffsetY(k.offsetY);
this.layer.conditionShow(k.shown);},


getDefaultEnabledBehaviors:function j(){
return c('ContextualLayer').getDefaultBehaviorsAsObject();},





_getContextNode:function j(){
var k;
if(this.props.context){
k=c('ReactDOM').findDOMNode(this.props.context);}else
if(this.props.contextRef)
k=c('ReactDOM').findDOMNode(this.props.contextRef());

return k;},


_matchContextSize:function j(k){

var l=this._node,
m=this._getContextNode();

if(k.containerWidthMatchContext)
c('Style').set(l,'width',m.offsetWidth+'px');


if(k.containerHeightMatchContext)
c('Style').set(l,'height',m.offsetHeight+'px');}});





f.exports=i;}),null);

/** js/pages/content_tab/components/dialogs/PageContentTabSuccessDialog.react.js */





__d('PageContentTabSuccessDialog.react',['cx','ix','Image.react','React','XUIDialog.react','XUIDialogBody.react'],(function a(b,c,d,e,f,g,h,i){var j,k,








l=c('React').PropTypes;j=babelHelpers.inherits

(m,c('React').Component);k=j&&j.prototype;m.prototype.






render=function(){'use strict';

return (c('React').createElement(c('XUIDialog.react'),
{width:344,
shown:true,
layerHideOnBlur:false,
layerFadeOnShow:true},
c('React').createElement(c('XUIDialogBody.react'),{className:"_--l"},
c('React').createElement(c('Image.react'),
{src:i("101769"),
className:"_--n"}),

c('React').createElement('div',{className:"_--o"},
this.props.successLabel))));};




function m(){'use strict';j.apply(this,arguments);}m.propTypes={successLabel:l.node};


f.exports=m;}),null);

/** shared/core_components/AbstractTextInput/AbstractTextField.react.js */






__d('AbstractTextField.react',['cx','React','Keys','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,



k=c('React').Component,l=c('React').Element,m=c('React').PropTypes;i=babelHelpers.inherits


























































































(n,k);j=i&&i.prototype;

























































































function n(p){'use strict';
j.constructor.call(this,p);o.call(this);
this.state=
{focused:false,
value:this.props.defaultValue||''};}

n.prototype.




getValue=function(){'use strict';
return this.props.value!=null?
String(this.props.value):
this.state.value;};
n.prototype.

























































































cloneElement=function(p){'use strict';
return c('React').cloneElement(p,
{'aria-activedescendant':this.props['aria-activedescendant'],
'aria-autocomplete':this.props['aria-autocomplete'],
'aria-label':this.props['aria-label'],
'aria-labelledby':this.props['aria-labelledby'],
'aria-expanded':this.props['aria-expanded'],
'aria-owns':this.props['aria-owns'],
'aria-valuenow':this.props['aria-valuenow'],
'aria-valuetext':this.props['aria-valuetext'],
'data-testid':this.props['data-testid'],
required:this.props.required,
role:this.props.role,
placeholder:this.props.placeholder,
autoCapitalize:this.props.autoCapitalize,
autoComplete:this.props.autoComplete,
autoCorrect:this.props.autoCorrect,
onKeyDown:this.onInputKeyDown,
onBlur:this.onInputBlur,
onFocus:this.onInputFocus,
onChange:this.onInputChange,
className:
this.props.useLabel?
p.props.className:
c('joinClasses')(p.props.className,this.props.className),

dir:this.props.dir,
disabled:this.props.disabled,
defaultValue:this.props.defaultValue,
name:this.props.name,
value:this.getValue(),
id:this.props.id,
maxLength:this.props.maxLength,
min:this.props.min,
max:this.props.max,
pattern:this.props.pattern,
style:this.props.style,
title:this.props.title,
type:this.props.type||p.props.type});};

n.prototype.

render=function(){'use strict';
var p=c('React').Children.only(this.props.children);

if(!this.props.useLabel)
return this.cloneElement(p);


var q=this.props.className;
if(this.props.classNames){
q=c('joinClasses')
(q,
this.props.classNames.root);

if(!this.getValue())
q=c('joinClasses')
(q,
this.props.classNames.empty);}





return (c('React').createElement('label',{className:q,style:this.props.styles.label},
this.props.leftChild,
this.cloneElement(p),
this.props.rightChild));};


n.defaultProps={useLabel:true,classNames:{root:"_58ak",empty:"_3ct8"},styles:{label:null}};n.propTypes={useLabel:m.bool,leftChild:m.element,rightChild:m.element,classNames:m.shape({root:m.string.isRequired,empty:m.string.isRequired}),styles:m.shape({label:m.object}),'aria-activedescendant':m.string,'aria-autocomplete':m.string,'aria-label':m.string,'aria-labelledby':m.string,'aria-expanded':m.bool,'aria-owns':m.string,'aria-valuenow':m.number,'aria-valuetext':m.string,'data-testid':m.string,autoComplete:m.string,className:m.string,defaultValue:m.string,dir:m.string,disabled:m.bool,id:m.string,max:m.string,maxLength:m.number,min:m.string,name:m.string,onBackspace:m.func,onBackTab:m.func,onBlur:m.func,onChange:m.func,onClick:m.func,onComma:m.func,onDownArrow:m.func,onEnter:m.func,onEscape:m.func,onFocus:m.func,onKeyDown:m.func,onKeyPress:m.func,onKeyUp:m.func,onLeftArrow:m.func,onNoShiftEnter:m.func,onPaste:m.func,onRightArrow:m.func,onShiftDownArrow:m.func,onShiftEnter:m.func,onShiftUpArrow:m.func,onSpace:m.func,onTab:m.func,onUpArrow:m.func,pattern:m.string,placeholder:m.node,required:m.bool,role:m.string,style:m.object,tabIndex:m.number,title:m.string,type:m.string,value:m.string,autoCapitalize:m.string,autoCorrect:m.string};var o=function p(){this.onInputKeyDown=function(q){var r=this.props,s=q.keyCode,t=q.shiftKey;if(s===c('Keys').BACKSPACE&&!t&&r.onBackspace){r.onBackspace(q);}else if(s===c('Keys').TAB&&!t&&r.onTab){r.onTab(q);}else if(s===c('Keys').TAB&&t&&r.onBackTab){r.onBackTab(q);}else if(s===c('Keys').UP){if(t){if(r.onShiftUpArrow)r.onShiftUpArrow(q);}else if(r.onUpArrow)r.onUpArrow(q);}else if(s===c('Keys').DOWN&&r.onDownArrow){if(t){if(r.onShiftDownArrow)r.onShiftDownArrow(q);}else if(r.onDownArrow)r.onDownArrow(q);}else if(s===c('Keys').LEFT&&r.onLeftArrow){r.onLeftArrow(q);}else if(s===c('Keys').RIGHT&&r.onRightArrow){r.onRightArrow(q);}else if(s===c('Keys').RETURN){if(r.onEnter)r.onEnter(q);if(t){if(r.onShiftEnter)r.onShiftEnter(q);}else if(r.onNoShiftEnter)r.onNoShiftEnter(q);}else if(s===c('Keys').ESC&&r.onEscape){r.onEscape(q);}else if(s==c('Keys').COMMA&&r.onComma){r.onComma(q);}else if(s==c('Keys').SPACE&&r.onSpace)r.onSpace(q);if(r.onKeyDown)r.onKeyDown(q);}.bind(this);this.onInputChange=function(q){if(this.props.onChange)this.props.onChange(q);if(this.props.value===null||this.props.value===undefined)this.setState({value:q.target.value});}.bind(this);this.onInputBlur=function(q){if(this.props.onBlur)this.props.onBlur(q);if(!q.isDefaultPrevented())this.setState({focused:false});}.bind(this);this.onInputFocus=function(q){if(this.props.onFocus)this.props.onFocus(q);if(!q.isDefaultPrevented())this.setState({focused:true});}.bind(this);};


f.exports=n;}),null);

/** www/__virtual__/x/XSimpleNUXMessagesController.js */



__d("XSimpleNUXMessagesController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/ajax\/nux\/{msg_id}\/seen\/",{msg_id:{type:"Int",required:true}});}),

null);
