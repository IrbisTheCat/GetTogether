if (self.CavalryLogger) { CavalryLogger.start_js(["BkjwB"]); }

/** js/components/core/XUI/Layer/ContextualDialog/XUIContextualDialogBody.react.js */




__d('XUIContextualDialogBody.react',['React'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits



(j,c('React').Component);i=h&&h.prototype;j.prototype.
render=function(){'use strict';

return (c('React').createElement('div',{className:this.props.className},
this.props.children));};


function j(){'use strict';h.apply(this,arguments);}


f.exports=j;}),null);

/** js/components/core/XUI/Layer/ContextualDialog/XUIContextualDialogFooter.react.js */




__d('XUIContextualDialogFooter.react',['cx','React','XUIOverlayFooter.react'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits






(k,c('React').Component);j=i&&i.prototype;k.prototype.
render=function(){'use strict';

return (c('React').createElement(c('XUIOverlayFooter.react'),{className:"_572u"},

this.props.children));};


function k(){'use strict';i.apply(this,arguments);}


f.exports=k;}),null);

/** js/components/core/XUI/Layer/ContextualDialog/XUIContextualDialogTitle.react.js */




__d('XUIContextualDialogTitle.react',['cx','React','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,






k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').Component);j=i&&i.prototype;l.prototype.








render=function(){'use strict';
var m=this.props.use,
n=c('joinClasses')("_47lu"+


(m==='primary'?' '+"_47lv":'')+
(m==='secondary'?' '+"_47mc":''),

this.props.className);



return (c('React').createElement('h3',
{className:n,
id:this.props.id},
this.props.children));};


function l(){'use strict';i.apply(this,arguments);}l.propTypes={use:k.oneOf(['primary','secondary'])};l.defaultProps={use:'primary'};


f.exports=l;}),null);

/** js/components/core/XUI/Layer/ContextualDialog/XUIContextualDialog.react.js */




__d('XUIContextualDialog.react',['cx','fbt','ContextualDialogXUITheme','React','ReactAbstractContextualDialog','ReactLayer','XUIContextualDialogBody.react','XUIContextualDialogFooter.react','XUIContextualDialogTitle.react','uniqueID'],(function a(b,c,d,e,f,g,h,i){var j,k,













l=c('React').PropTypes,

m=c('ReactLayer').createClass
(c('ReactAbstractContextualDialog').createSpec
({displayName:'ReactXUIContextualDialog',
theme:c('ContextualDialogXUITheme')}));j=babelHelpers.inherits

























































(n,c('React').Component);k=j&&j.prototype;



































































function n(){'use strict';
k.constructor.call(this);this.




































updatePosition=function(){
var o=this.refs.dialog;
if(o)
o.layer.updatePosition();}.

bind(this);this.$XUIContextualDialog_titleID=this.$XUIContextualDialog_titleID||c('uniqueID')();}n.prototype.$XUIContextualDialog_getDialogBody=function(){'use strict';return this.$XUIContextualDialog_getChildOfType(c('XUIContextualDialogBody.react'));};n.prototype.$XUIContextualDialog_getDialogTitle=function(){'use strict';return this.$XUIContextualDialog_getChildOfType(c('XUIContextualDialogTitle.react'));};n.prototype.$XUIContextualDialog_getDialogFooter=function(){'use strict';return this.$XUIContextualDialog_getChildOfType(c('XUIContextualDialogFooter.react'));};n.prototype.$XUIContextualDialog_getChildOfType=function(o){'use strict';var p=null;c('React').Children.forEach(this.props.children,function(q){if(!p&&q.type===o)p=q;});return p;};n.prototype.$XUIContextualDialog_getDefaultLabel=function(){'use strict';return i._(["Dialog content","21c70db16e06ae9c804d1bf9887355b4"]);};n.prototype.

render=function(){'use strict';
var o=this.props.children,
p=this.$XUIContextualDialog_getDialogBody(),
q=this.$XUIContextualDialog_getDialogTitle(),

r={};
if(this.props.labelledBy){
r.labelledBy=this.props.labelledBy;}else
if(this.props.label){
r.label=this.props.label;}else
if(q){
q=c('React').cloneElement(q,{id:this.$XUIContextualDialog_titleID});
r.labelledBy=[this.$XUIContextualDialog_titleID];}else 

r.label=this.$XUIContextualDialog_getDefaultLabel();





if(p)
o=
c('React').createElement('div',{className:"_53iv"},
q,
p);




return (c('React').createElement(m,babelHelpers['extends']({},
this.props,
r,
{ref:'dialog'}),
o,
p?this.$XUIContextualDialog_getDialogFooter():null));};


n.propTypes={position:l.oneOf(['above','below','left','right']),alignment:l.oneOf(['left','center','right']),dialogRole:l.oneOf(['dialog','region','alert']),offsetX:l.number,offsetY:l.number,width:l.number,autoFocus:l.bool,arrowBehavior:l.func,behaviors:l.object,shown:l.bool,context:l.object,contextRef:l.func,hoverContext:l.object,hoverContextRef:l.func,hoverShowDelay:l.number,hoverHideDelay:l.number,hideOnBlur:l.bool,hideOnEscape:l.bool,onToggle:l.func,hasActionableContext:l.bool,label:l.string,labelledBy:l.arrayOf(l.string)};n.defaultProps={dialogRole:'dialog',hasActionableContext:false,hideOnEscape:true};


n.WIDTH=
{NORMAL:312,
WIDE:400};


f.exports=n;}),null);

/** shared/core/cssURL.js */





__d("cssURL",[],(function a(b,c,d,e,f,g){

function h(i){
return "url('"+i.replace(/(\\|\s|\(|\)|'|\")/g,'\\$1')+"')";}


f.exports=h;}),null);
