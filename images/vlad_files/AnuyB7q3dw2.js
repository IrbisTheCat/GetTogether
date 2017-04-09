if (self.CavalryLogger) { CavalryLogger.start_js(["EHRyd"]); }

/** js/components/Notifications/ReadToggle.react.js */








__d('ReadToggle.react',['cx','Event','Keys','React','emptyFunction','joinClasses'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,









k=c('React').PropTypes;i=babelHelpers.inherits









(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.






















































$ReadToggle_onKeyPress=function(event){
if(c('Event').getKeyCode(event)===c('Keys').RETURN)
this.props.onClick();}.

bind(this),n;}l.prototype.render=function(){if(this.props.isRead){return c('React').createElement('div',{'aria-label':this.props.readLabel,className:this.$ReadToggle_getClasses(),'data-hover':'tooltip','data-tooltip-alignh':'center','data-tooltip-content':this.props.readLabel,onClick:this.props.onClick,onKeyDown:this.$ReadToggle_onKeyPress,role:'button',tabIndex:0});}else return c('React').createElement('div',{'aria-label':this.props.unreadLabel,className:this.$ReadToggle_getClasses(),'data-hover':'tooltip','data-tooltip-alignh':'center','data-tooltip-content':this.props.unreadLabel,onClick:this.props.onClick,onKeyDown:this.$ReadToggle_onKeyPress,role:'button',tabIndex:'0'});};l.prototype.$ReadToggle_getClasses=function(){return c('joinClasses')(this.props.className,(!this.props.isRead?"_5c9q":'')+(this.props.isRead?' '+"_5c9_":''));};l.propTypes={isRead:k.bool.isRequired,onClick:k.func.isRequired,readLabel:k.node.isRequired,unreadLabel:k.node.isRequired};l.defaultProps={onClick:c('emptyFunction')};


f.exports=l;}),null);

/** js/modules/LongLiveTimer.js */











__d('LongLiveTimer',['fbt','LiveTimer'],(function a(b,c,d,e,f,g,h){

var i=c('LiveTimer').CONSTS,




j=24,
k=30,
l=12,

m=babelHelpers['extends']({},c('LiveTimer'));

m.parentRenderRelativeTime=m.renderRelativeTime;
m.renderRelativeTime=
function(n,
o,
p){

var q=this.parentRenderRelativeTime(n,o,p);
if(!q.text&&o){

var r={text:'',next:-1},
s,
t=n-o,
u=Math.floor(t/i.SEC_IN_MIN),
v=Math.floor(u/i.MIN_IN_HOUR),
w=Math.floor(v/j),
x=Math.floor(w/k),
y=Math.floor(x/l);

if(v<j){
if(p){
r.text=h._(["{number} hr","b7abcc19aea585db42549652edeb4eff"],[h.param('number',v)]);}else 

r.text=h._({"*":["{number} hours ago","031f8f7fe0cb354ee174ca659ae96f3f"]},[h.param('number',v,[0])]);

r.next=i.SEC_IN_HOUR-t%i.SEC_IN_HOUR;}else
if(w<k){
if(p){
r.text=h._({"*":["{number} d","45fbcda0748346d92991d492ba28013d"]},[h.param('number',w,[0])]);}else 

r.text=w==1?h._(["about a day ago","c3085906ab1bee625c1e790cf7a213b4"]):h._({"*":["{number} days ago","ea4ad9b332b6e21fcc102aa528ecbe83"]},[h.param('number',w,[0])]);

s=j*i.SEC_IN_HOUR;
r.next=s-t%s;}else
if(x<l){
if(p){
r.text=h._({"*":["{number} mo","dbadd5defffdc5d3ec977523cdd982a9"]},[h.param('number',x,[0])]);}else 

r.text=
x==1?h._(["about a month ago","a030527205d3193fa00ef3dbbe969204"]):h._({"*":["{number} months ago","e0e2cab6c08acf93d561bc24d41fd27e"]},[h.param('number',x,[0])]);

s=k*j*i.SEC_IN_HOUR;
r.next=s-t%s;}else{

if(p){
r.text=h._({"*":["{number} yr","38db64ab5027728e8356899697bece10"]},[h.param('number',y,[0])]);}else 

r.text=
y==1?h._(["over a year ago","2462e3094de1746e9321bdc00cceac7a"]):h._({"*":["{number} years ago","ff3f7842a3a1a8aaf7b5f8e7ee8b19de"]},[h.param('number',y,[0])]);

s=l*k*j*i.SEC_IN_HOUR;
r.next=s-t%s;}

return r;}

return q;};


f.exports=m;}),null);

/** shared/core_components/FlexibleBlock/FlexibleBlock.react.js */




__d('FlexibleBlock.react',['cx','invariant','LeftRight.react','React','keyMirror'],(function a(b,c,d,e,f,g,h,i){var j,k,








l=c('keyMirror')
({left:true,
right:true});


function m(o){

o.flex&&o.flex in n.FLEX||i(0,
'The "flex" property must be either "left" or "right".');


o.children&&o.children.length===2||i(0,
'FlexibleBlock requires exactly two children.');}

j=babelHelpers.inherits

(n,c('React').Component);k=j&&j.prototype;n.prototype.
render=function(){'use strict';
m(this.props);
var o,p=
this.props,q=p.flex,r=babelHelpers.objectWithoutProperties(p,['flex']),

s=this.props.children[0],
t=this.props.children[1],
u=q==l.left,

v;
if(u){
v=s;
o=c('LeftRight.react').DIRECTION.right;}else{

v=t;
o=c('LeftRight.react').DIRECTION.left;}


var w=
c('React').createElement('div',{className:"_42ef"},v);


return (c('React').createElement(c('LeftRight.react'),babelHelpers['extends']({},r,{direction:o}),
u?w:this.props.children[0],
u?this.props.children[1]:w));};


function n(){'use strict';j.apply(this,arguments);}


n.FLEX=l;

f.exports=n;}),null);
