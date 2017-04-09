if (self.CavalryLogger) { CavalryLogger.start_js(["pggqI"]); }

/** js/components/core/UI/TabBar/TabBarItem.react.js */





__d('TabBarItem.react',['cx','React','ReactDOM','Focus','Event','Keys','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,










k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;'use strict';for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.




































































































$TabBarItem_renderWrappedTabBarItem=function(r,s){var t=















this.props,u=t.className,v=t.href,w=t.ajaxify,x=t.tabIndex,y=t.rel,z=t.target,aa=t.selected,ba=t.wrapper,ca=t.mockSpacebarClick;
v=v||'#';

var da={};
if(ca)
da.onKeyDown=this.onKeyDown;

var ea=
c('React').createElement('a',
{ref:'tab',
ajaxify:w,
href:v,
role:'tab',
rel:y,
target:z,
tabIndex:x,
className:s,
'aria-selected':aa},


this.props.children);





return (c('React').createElement(ba,babelHelpers['extends']({},
this.props,
{tabIndex:null,
className:c('joinClasses')(u,r),
role:'presentation'}),
c('React').cloneElement(ea,da)));}.


bind(this),this.

$TabBarItem_renderTabBarItem=function(r){var s=







this.props,t=s.className,u=s.href,v=s.selected,w=s.mockSpacebarClick;
u=u||'#';

var x={};
if(w)
x.onKeyDown=this.onKeyDown;

var y=
c('React').createElement('a',babelHelpers['extends']({},
this.props,
{href:u,
ref:'tab',
role:'tab',
className:c('joinClasses')(t,r),
'aria-selected':v}),


this.props.children);


return c('React').cloneElement(y,x);}.
bind(this),this.









focus=function(){
if(this.props.focused)
c('Focus').set(this.refs.tab);}.

bind(this),this.






onKeyDown=function(event){
var r=c('Event').getKeyCode(event);
if(r===c('Keys').SPACE&&this.refs.tab){

c('ReactDOM').findDOMNode(this.refs.tab).click();

c('Event').prevent(event);}}.

bind(this),n;}l.prototype.render=function(){'use strict';var m=this.props,n=m.selected,o=m.focused,p=m.hideFocusRing,q=m.shouldWrapTab,r="_45hc"+(n?' '+"_1hqh":''),s=o&&p?"_468f":'';if(q)return this.$TabBarItem_renderWrappedTabBarItem(r,s);return this.$TabBarItem_renderTabBarItem(c('joinClasses')(r,s));};l.prototype.componentDidMount=function(){'use strict';this.focus();};l.prototype.componentDidUpdate=function(){'use strict';this.focus();};l.propTypes={wrapper:k.func.isRequired,shouldWrapTab:k.bool,tabIndex:k.oneOf([-1,0]),selected:k.bool,focused:k.bool,hideFocusRing:k.bool,mockSpacebarClick:k.bool};l.defaultProps={wrapper:function(){var m,n;m=babelHelpers.inherits(o,c('React').Component);n=m&&m.prototype;o.prototype.render=function(){'use strict';return c('React').createElement('li',this.props,this.props.children);};function o(){'use strict';m.apply(this,arguments);}return o;}(),shouldWrapTab:true,tabIndex:-1,selected:false,focused:false,hideFocusRing:false,mockSpacebarClick:true};


f.exports=l;}),null);

/** js/components/core/UI/TabBar/TabBar.react.js */





__d('TabBar.react',['cx','fbt','invariant','React','ReactDOM','TabBarItem.react','Event','RTLKeys','BootloadedComponent.react','JSResource','joinClasses','setTimeout','clearTimeout','emptyFunction'],(function a(b,c,d,e,f,g,h,i,j){var k,l,






















m=c('React').PropTypes,

n=i._(["More","20e5d69d03fa25b2798d544220c1b937"]);k=babelHelpers.inherits

(o,c('React').Component);l=k&&k.prototype;o.
getComponent=function(q){'use strict';
return q.component;};
o.prototype.

render=function(){'use strict';
return this.props.component;};
function o(){'use strict';k.apply(this,arguments);}










var p=c('React').createClass({displayName:'TabBar',
_blurTimeout:null,
propTypes:





{activeTabKey:m.string,







alwaysShowActive:m.bool,





defaultActiveTabKey:m.string,



dropdownMenuAlignh:m.string,




dropdownMenuClassName:m.string,



maxTabsVisible:m.number.isRequired,




moreLabel:m.node,




onTabClick:m.func.isRequired,



dropdownTabComponent:m.func.isRequired,





onWidthCalculated:m.func.isRequired,




shouldCalculateVisibleTabs:m.bool,



maxDropdownHeight:m.number},


getDefaultProps:function q(){









return {alwaysShowActive:true,
dropdownTabComponent:c('TabBarItem.react'),
maxTabsVisible:Infinity,
moreLabel:n,
onTabClick:c('emptyFunction').thatReturnsTrue,
onWidthCalculated:c('emptyFunction'),
shouldCalculateVisibleTabs:true};},



getInitialState:function q(){

return {activeTabKey:this.props.activeTabKey||
this.props.defaultActiveTabKey,
focusedTabKey:null,
previousFocusedTabKey:null,
visibleTabsCount:0,
shouldCalculateVisibleTabs:true,
hideFocusRing:true};},



setWidth:function q(r){

c('ReactDOM').findDOMNode(this).style.width=r;
this.setState({shouldCalculateVisibleTabs:true});},


render:function q(){
var r=this.getTabs(),
s=r.length,
t=this.getActiveTabIndex(),
u=r[t],
v=this.getActiveTabIndex(true),
w,x,y;
if(u)
w=u.key;

var z=this.props.dropdownTabComponent,
aa=
c('React').createElement(z,
{key:'_dropdown',
ref:'more',
className:"_45hd _2pik"},
c('React').createElement('span',{className:"_1b0"},
this.props.moreLabel));


if(this.state.shouldCalculateVisibleTabs){
x=r.map(function(ja,ka){
return this._wrapTab(ja,ka,
w,null,v,false,false);}.
bind(this));




if(s>2)
x.push(aa);}else{

var ba=
this._groupTabsByVisibility();x=ba.visibleTabs;y=ba.extraTabs;
var ca=this._isDropdownSelected(),
da=this.state.visibleTabsCount,

ea=this.state.focusedTabKey;
ea=ea&&this.getFocusedTabIndex()===-1?
p.MORE_TAB_KEY:
ea;

x=x.map(function(ja,ka){
return this._wrapTab(ja,ka,
w,ea,v,true,true);}.
bind(this));
y=y.map(function(ja,ka){
return this._wrapTab(ja,ka,
w,null,v,true,false);}.
bind(this));


if(y.length){
var fa;


if(da===0&&u)
fa=u;

var ga=fa&&
fa.props.children||
this.props.moreLabel,

ha='_dropdown',
ia=
c('React').createElement(c('BootloadedComponent.react'),
{bootloadLoader:c('JSResource')('TabBarDropdownItem.react').__setRef('TabBar.react'),
bootloadPlaceholder:aa,
menuAlignh:this.props.dropdownMenuAlignh,
menuClassName:this.props.dropdownMenuClassName,
selected:ca,
focused:ea===p.MORE_TAB_KEY,
hideFocusRing:this.state.hideFocusRing,
onMouseDown:this.onMouseDown,
onFocus:this.onFocus.bind(this,ha),
onBlur:this.onBlur,
key:ha,
ref:'more',
label:ga,
tabComponent:this.props.dropdownTabComponent,
maxDropdownHeight:this.props.maxDropdownHeight},
y);





if(da===0){
x=ia;}else 

x.push(ia);}}





return (c('React').createElement('ul',babelHelpers['extends']({},
this.props,

{className:c('joinClasses')(this.props.className,"_43o4"),
role:'tablist',
onKeyDown:this.onKeyDown,
onKeyUp:this.onKeyUp}),
x));},




componentDidMount:function q(){
this.calculateVisibleTabs();
this.calculateWidth();},


componentWillUnmount:function q(){
c('clearTimeout')(this._blurTimeout);},


componentWillReceiveProps:function q(r){
this.setState
({shouldCalculateVisibleTabs:true,
activeTabKey:r.activeTabKey||this.state.activeTabKey});},



shouldComponentUpdate:function q
(r,
s){



if(this.state.focusedTabKey&&
!s.focusedTabKey)

return false;






if(!this.state.focusedTabKey&&
!s.focusedTabKey&&
this.state.previousFocusedTabKey&&
!s.previousFocusedTabKey)

return false;

return true;},


componentDidUpdate:function q(){
if(this.state.shouldCalculateVisibleTabs)
this.calculateVisibleTabs();

this.calculateWidth();},


calculateWidth:function q(){

this.props.onWidthCalculated(c('ReactDOM').findDOMNode(this).clientWidth);},


calculateVisibleTabs:function q(){
var r=this.getTabs(),
s=r.length,
t=Math.min(s,this.props.maxTabsVisible);

if(!this.props.shouldCalculateVisibleTabs){
this.setState
({visibleTabsCount:t,
shouldCalculateVisibleTabs:false});

return;}


var u=[];
for(var v=0;v<s;v++)

u.push(c('ReactDOM').findDOMNode(this.refs[v]).offsetWidth);




var w=this.getActiveTabIndex();
if(this.props.alwaysShowActive&&w!==-1){
r.unshift(r.splice(w,1)[0]);
u.unshift(u.splice(w,1)[0]);}




var x=c('ReactDOM').findDOMNode(this).offsetWidth;


t=0;
var y=0;
for(v=0;v<s;v++){
var z=u[v];
if(y+z>x){


if(t>0&&s>2){

var aa=c('ReactDOM').findDOMNode(this.refs.more).offsetWidth;



while(t>0&&

(y+aa>x||
s-t<2)){


t--;
y-=u[t];}}else 




t=0;

break;}

t++;
y+=z;}


this.setState
({visibleTabsCount:Math.min(t,this.props.maxTabsVisible),
shouldCalculateVisibleTabs:false});},



getActiveTabIndex:function q(){

var r=arguments.length<=0||arguments[0]===undefined?false:arguments[0],
s=this.state.activeTabKey,
t=[];
if(r){var u=
this._groupTabsByVisibility(),v=u.visibleTabs;
t=v;}else 

t=this.getTabs();

return t.findIndex(function(w){return w&&w.key===s;});},


getFocusedTabIndex:function q(){
var r=
this.state.focusedTabKey||
this.state.previousFocusedTabKey,s=
this._groupTabsByVisibility(),t=s.visibleTabs;
return t.findIndex(function(u){return u&&u.key===r;});},


getFocusedTab:function q(){
var r=this.state.focusedTabKey,s=
this._groupTabsByVisibility(),t=s.visibleTabs,
u=t.
findIndex(function(v){return v&&v.key===r;});
return t[u];},






onClick:function q(r,event){
var s=this.props.onTabClick(r,event);
if(s!==false&&this.isMounted())
this.activateTab(r);},



onMouseDown:function q(){
this.setState
({hideFocusRing:true});},













onKeyDown:function q(event){
var r=c('Event').getKeyCode(event);
switch(r){
case c('RTLKeys').UP:
case c('RTLKeys').getRight():
case c('RTLKeys').DOWN:
case c('RTLKeys').getLeft():
var s,t,u,v=

this._groupTabsByVisibility(),w=v.visibleTabs,

x=r===c('RTLKeys').UP||r===c('RTLKeys').getLeft(),
y=x?-1:1,
z=x?0:w.length-1,

aa=this.getFocusedTabIndex();


if(aa===-1&&y===-1)
aa=w.length;


if(aa===-1){


u=null;}else
if(aa===z&&y===1){


u=p.MORE_TAB_KEY;}else{


s=x?Math.max:Math.min;
t=s(aa+y,z);
u=w[t].key;}


if(u)
this.setState
({focusedTabKey:u,
hideFocusRing:false});


break;
case c('RTLKeys').RETURN:
var ba=this.getFocusedTab();
if(ba){
var ca=ba.key,
da=this.props.onTabClick(ca,event);
if(da!==false&&this.isMounted())
this.activateTab(ca);}


break;}},



onKeyUp:function q(event){
if(c('Event').getKeyCode(event)===c('RTLKeys').TAB&&this.state.hideFocusRing)
this.setState
({hideFocusRing:false});},




onFocus:function q(r,event){
c('clearTimeout')(this._blurTimeout);
if(r!==this.state.focusedTabKey){
this.setState
({focusedTabKey:r,
previousFocusedTabKey:null});

event.preventDefault();
event.stopPropagation();}},



onBlur:function q(){
this.setState
({previousFocusedTabKey:this.state.focusedTabKey,
focusedTabKey:null});

this._blurTimeout=c('setTimeout')(function(){
this.setState({previousFocusedTabKey:null});}.
bind(this),
p.BLUR_TIMEOUT);},






_wrapTab:function q
(r,
s,
t,
u,
v,
w,
x){



r.key!==p.MORE_TAB_KEY||j(0,
'Tabs may not use the key in the constant TabBar.MORE_TAB_KEY');




var y=t===r.key,
z=u===r.key,
aa=










{selected:y,
focused:z,

tabIndex:
y||
v===-1&&s===0?
0:-1,
hideFocusRing:this.state.hideFocusRing};

if(w){
aa.onClick=this.onClick.bind(this,r.key);
aa.onMouseDown=this.onMouseDown;}else 



aa.mockSpacebarClick=false;

if(x){
aa.onFocus=this.onFocus.bind(this,r.key);
aa.onBlur=this.onBlur;}


r=c('React').cloneElement(r,aa);


return (c('React').createElement(o,
{key:r.key,
component:r,
ref:s}));},




activateTab:function q(r){
if(r)
this.setState
({activeTabKey:r,
focusedTabKey:r,
shouldCalculateVisibleTabs:true});},




getTabs:function q(){
var r=[];

c('React').Children.forEach(this.props.children,function(s){
if(s)
r.push(s);});


return r;},







_groupTabsByVisibility:function q(){
var r=this.state.visibleTabsCount,
s=this.getTabs(),
t=this.getActiveTabIndex(),
u,v,w;


if(!this.props.alwaysShowActive||
t<r||
r===0){



w=s.slice(r);
v=s.slice(0,r);}else{


u=s.splice(t,1)[0];
var x=r>0?r-1:0;
w=s.slice(x);
v=s.slice(0,x);
v.push(u);}



return {visibleTabs:v,
extraTabs:w};},






_isDropdownSelected:function q(){
var r=this.state.visibleTabsCount,
s=this.getActiveTabIndex(),



t=
!this.props.alwaysShowActive&&s>=r||
r===0&&s>-1;

return t;}});



p.MORE_TAB_KEY='_moreTab';
p.BLUR_TIMEOUT=120;
p.Tab=c('TabBarItem.react');

f.exports=p;}),null);

/** js/components/core/XUI/Card/XUICardHeaderTitle.react.js */




__d('XUICardHeaderTitle.react',['cx','React','TabBarItem.react','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,







k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').Component);j=i&&i.prototype;l.prototype.










render=function(){'use strict';
var m=this.props.itemComponent,

n=null;
if(this.props.count>0)
n=
c('React').createElement('span',{className:"_c1b"},
this.props.count);




var o=this.props.children,
p=void 0;
if(m===c('TabBarItem.react')&&!n){
var q=typeof o==='string'?
o:
c('React').isValidElement(o)&&
o.props.children&&
o.props.children.textContent;
if(q){
o=c('React').createElement('div',{className:"_9hb"},o);
p=
c('React').createElement('div',{className:"_9hc",'aria-hidden':true},
q);}}






return (c('React').createElement(m,babelHelpers['extends']({},
this.props,
{className:
c('joinClasses')(this.props.className,"_38my")}),

o,
p,
n,
c('React').createElement('span',{className:"_c1c"})));};


function l(){'use strict';i.apply(this,arguments);}l.propTypes={count:k.number,href:k.string,itemComponent:k.any};l.defaultProps={itemComponent:c('TabBarItem.react')};


f.exports=l;}),null);

/** js/components/core/XUI/Layer/Dialog/XUIDialogHeaderTitle.react.js */




__d('XUIDialogHeaderTitle.react',['XUICardHeaderTitle.react'],(function a(b,c,d,e,f,g){


f.exports=c('XUICardHeaderTitle.react');}),null);

/** js/components/core/XUI/Card/XUICardHeader.react.js */




__d('XUICardHeader.react',['cx','invariant','React','TabBar.react','XUICardHeaderTitle.react','XUICardSection.react','XUIDialogHeaderTitle.react','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j,k,











l=c('React').PropTypes;j=babelHelpers.inherits

















(m,c('React').Component);k=j&&j.prototype;m.prototype.






























$XUICardHeader_enforceChildInvariants=function(){'use strict';
var n=0;
c('React').Children.forEach(this.props.children,function(o){

o.type===c('XUICardHeaderTitle.react')||
o.type===c('XUIDialogHeaderTitle.react')||i(0,
'children of XUICardHeader must be XUICardHeaderTitle');

n++;});


return n;};
m.prototype.

$XUICardHeader_renderItemCount=function(){'use strict';
if(this.props.type==='primary')

this.props.itemCount==null||i(0,
'itemCount is not allowed on primary type');



if(this.props.itemCount!=null)

return (c('React').createElement('span',{className:"_5dw7"},
this.props.itemCount));




return null;};
m.prototype.

$XUICardHeader_renderLink=function(){'use strict';
if(this.props.link)

return (c('React').createElement('span',{className:"_5dw8"},this.props.link));



return null;};
m.prototype.

$XUICardHeader_renderChildren=function(){'use strict';
var n=this.$XUICardHeader_enforceChildInvariants();

if(n===1){
return c('React').Children.map
(this.props.children,
function(o){return c('React').cloneElement(o,{itemComponent:'span'});});}else 



return (c('React').createElement(c('TabBar.react'),
{activeTabKey:this.props.activeTabKey,
className:"_1ng1",
defaultActiveTabKey:this.props.defaultActiveTabKey,
onTabClick:this.props.onTabClick},
this.props.children));};



m.prototype.

render=function(){'use strict';
var n=
(this.props.type==='primary'?"_5dw9":'')+(' '+"_5dwa")+

(this.props.type==='secondary'?' '+"_5dwb":'')+
(this.$XUICardHeader_enforceChildInvariants()!==1?' '+"_3s3z":'');



return (c('React').createElement(c('XUICardSection.react'),{className:c('joinClasses')(this.props.className,n)},
this.$XUICardHeader_renderChildren(),
this.$XUICardHeader_renderItemCount(),
this.$XUICardHeader_renderLink(),
c('React').createElement('div',{className:"_3s3-"})));};


function m(){'use strict';j.apply(this,arguments);}m.propTypes={activeTabKey:l.string,defaultActiveTabKey:l.string,onTabClick:l.func,type:l.oneOf(['primary','secondary'])};m.defaultProps={onTabClick:function n(){return true;},type:'secondary'};


f.exports=m;}),null);

/** js/components/core/XUI/PageNavigation/XUIPageNavigationItem.react.js */




__d('XUIPageNavigationItem.react',['cx','AsyncRequest','React','TabBarItem.react','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,








k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;'use strict';for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.











onClick=function(r,event){
if(this.props.ajaxify&&this.props.rel==='async')
new (c('AsyncRequest'))(this.props.ajaxify).
send();

if(this.props.onClick)
return this.props.onClick(r,event);

return true;}.
bind(this),n;}l.prototype.

render=function(){'use strict';
var m="_5vwz"+

(this.props.selected?' '+"_5vwy":''),


n=this.props;
if(n.ajaxify&&n.rel==='async'){var o=

n,p=o.ajaxify,q=o.rel,r=babelHelpers.objectWithoutProperties(o,['ajaxify','rel']);
n=r;
n.onClick=this.onClick;}



var s=this.props.children,
t=void 0,
u=typeof s==='string'?
s:
c('React').isValidElement(s)&&
s.props.children&&
s.props.children.textContent;
if(u){
s=c('React').createElement('div',{className:"_4xjz"},s);
t=
c('React').createElement('div',{className:"_4xj-",'aria-hidden':true},
u);}




return (c('React').createElement(c('TabBarItem.react'),babelHelpers['extends']({},
n,
{className:c('joinClasses')(this.props.className,m)}),
c('React').createElement('div',{className:"_4jq5"},
s,
t),

c('React').createElement('span',{className:"_13xf"})));};


l.propTypes={selected:k.bool};l.defaultProps={selected:false};


f.exports=l;}),null);

/** js/components/core/XUI/PageNavigation/XUIPageNavigationGroup.react.js */




__d('XUIPageNavigationGroup.react',['React','TabBar.react','XUIPageNavigationItem.react'],(function a(b,c,d,e,f,g){var h,i,





j=c('React').PropTypes;h=babelHelpers.inherits

(k,c('React').Component);i=h&&h.prototype;k.prototype.





























componentDidUpdate=function(){'use strict';
this.refs.bar.setWidth(this.props.width);};
k.prototype.

componentDidMount=function(){'use strict';
this.refs.bar.setWidth(this.props.width);};
k.prototype.

render=function(){'use strict';
return c('React').createElement(c('TabBar.react'),babelHelpers['extends']({},this.props,{ref:'bar'}),this.props.children);};
function k(){'use strict';h.apply(this,arguments);}k.propTypes={moreLabel:j.string,maxTabsVisible:function l(m,n,o){var p=m[n];if(p!=null&&!(typeof p==='number'&&p>=0))throw new Error('Invalid `'+n+'` supplied to `'+o+'`, '+'expected positive integer.');},width:j.string};k.defaultProps={maxTabsVisible:Infinity};


k.Item=c('XUIPageNavigationItem.react');

f.exports=k;}),null);

/** js/components/core/XUI/PageNavigation/XUIPageNavigation.react.js */




__d('XUIPageNavigation.react',['csx','cx','invariant','Arbiter','CSS','DOMQuery','Event','LeftRight.react','React','ReactDOM','SubscriptionsHandler','UITinyViewportAction','Vector','ViewportBounds','XUIPageNavigationGroup.react','joinClasses','throttle'],(function a(b,c,d,e,f,g,h,i,j){var k,l,




















m=c('React').PropTypes,

n=15;k=babelHelpers.inherits










(o,c('React').PureComponent);l=k&&k.prototype;function o(){var p,q;'use strict';for(var r=arguments.length,s=Array(r),t=0;t<r;t++)s[t]=arguments[t];return q=(p=l.constructor).call.apply(p,[this].concat(s)),this.

























state=
{activeTabKey:undefined,
leftWidth:null},this.







































onTabClick=function(u,event){
if(this.props.onTabClick){
var v=this.props.onTabClick(u,event);
if(!v)
return v;}






if(event.button===0)
this.setState({activeTabKey:u});

return true;}.
bind(this),this.






































































































resizeNavbarGroups=function(){

if(!this.refs.left)
return;


var u=c('ReactDOM').findDOMNode(this).clientWidth;


if(isNaN(u)||u===0)
return;


if(!isNaN(this.$XUIPageNavigation_leftWidth)&&this.refs.right){

var v;
v=u-this.$XUIPageNavigation_leftWidth-n;


if(this.$XUIPageNavigation_leftWidth<v)
v=this.$XUIPageNavigation_leftWidth-n;


this.setState({rightWidth:v+'px'});}


if(!isNaN(this.$XUIPageNavigation_rightWidth)){

var w;
w=u-this.$XUIPageNavigation_rightWidth-n;


if(w<this.$XUIPageNavigation_rightWidth)
w=this.$XUIPageNavigation_rightWidth+n;


this.setState({leftWidth:w+'px'});}else
if(!this.refs.right)
this.setState({leftWidth:u+'px'});}.

bind(this),q;}o.prototype.componentDidMount=function(){'use strict';this.$XUIPageNavigation_subscriptions=new (c('SubscriptionsHandler'))();this.resizeNavbarGroups();this.$XUIPageNavigation_listenForNavbarResize();var p="^.fixed_elem._5vx1";this.wrapper=c('DOMQuery').scry(c('ReactDOM').findDOMNode(this),p)[0];if(this.wrapper){this.$XUIPageNavigation_setViewportBounds();this.$XUIPageNavigation_subscriptions.addSubscriptions(c('UITinyViewportAction').subscribe('change',function(){if(c('UITinyViewportAction').isTiny()){this.$XUIPageNavigation_bound.remove();}else this.$XUIPageNavigation_setViewportBounds();}.bind(this)));}if(this.props.showDropShadowOnScroll&&(this.wrapper||c('DOMQuery').scry(c('ReactDOM').findDOMNode(this),"^._k").length)&&this.props.scrollThreshold!==null)this.$XUIPageNavigation_showDropShadowOnScroll();};o.prototype.componentWillUnmount=function(){'use strict';this.$XUIPageNavigation_subscriptions.release();};o.prototype.onWidthCalculated=function(p,q){'use strict';if(p){this.$XUIPageNavigation_rightWidth=q;}else this.$XUIPageNavigation_leftWidth=q;};o.prototype.render=function(){'use strict';var p="_5vx2 _5vx4",q=c('joinClasses')(p,this.props.className),r=[],s=this.props.activeTabKey||this.state.activeTabKey||this.props.defaultActiveTabKey;c('React').Children.forEach(this.props.children,function(t,u){if(t===null)return;var v={onTabClick:this.onTabClick,activeTabKey:s,onWidthCalculated:this.onWidthCalculated.bind(this,u),ref:u?'right':'left',key:u};if(u===0)v.width=this.state.leftWidth;r.push(c('React').cloneElement(t,v));}.bind(this));r.length===1||r.length===2||j(0,'XUIPageNavigation expected exactly 1 or 2 children, received %s',r.length);return c('React').createElement('div',{className:q},c('React').createElement(c('LeftRight.react'),{className:"_5vx7",direction:this.props.floatDirection},r));};o.prototype.$XUIPageNavigation_setViewportBounds=function(){'use strict';var p=this.wrapper.offsetHeight,q=c('ViewportBounds').getTop();this.$XUIPageNavigation_bound=c('ViewportBounds').addTop(q+p);c('Arbiter').subscribe('page_transition',function(){this.$XUIPageNavigation_bound.remove();});};o.prototype.$XUIPageNavigation_listenForNavbarResize=function(){'use strict';this.$XUIPageNavigation_subscriptions.addSubscriptions(c('Event').listen(window,'resize',c('throttle')(this.resizeNavbarGroups,30)));};o.prototype.$XUIPageNavigation_showDropShadowOnScroll=function(){'use strict';this.$XUIPageNavigation_subscriptions.addSubscriptions(c('Event').listen(window,'scroll',function(){var p=c('Vector').getScrollPosition().y>this.props.scrollThreshold;if(this.$XUIPageNavigation_hasDropshadow===p)return;this.$XUIPageNavigation_hasDropshadow=p;c('CSS').conditionClass(c('ReactDOM').findDOMNode(this),"_51j8",p);}.bind(this)));};o.propTypes={onTabClick:m.func,showDropShadowOnScroll:m.bool,scrollThreshold:m.number,floatDirection:m.oneOf(['left','right','both'])};o.defaultProps={showDropShadowOnScroll:true,scrollThreshold:0,floatDirection:'both'};


o.Group=c('XUIPageNavigationGroup.react');
o.Item=c('XUIPageNavigationGroup.react').Item;

f.exports=o;}),null);

/** js/ui/core/xui/page-navigation/XUIPageNavigationShim.js */




__d('XUIPageNavigationShim',['DOMContainer.react','React','isNode'],(function a(b,c,d,e,f,g){var h,i,






j=function(){
var m=0;
return function(){return 'XUIPageNavigationShim-'+m++;};}
();

function k(m){
var n;
if(m.children){
n=m.children.map(function(p){
if(typeof p==='object'&&typeof p.ctor==='function'){
return k(p);}else
if(c('isNode')(p)){
return c('React').createElement(c('DOMContainer.react'),{key:j()},p);}else 

return p;});



if(n.length===1)
n=n[0];}



var o=m.ctor;


return (c('React').createElement(o,babelHelpers['extends']
({key:j()},
m.props),
n));}


h=babelHelpers.inherits




(l,c('React').Component);i=h&&h.prototype;l.prototype.
render=function(){'use strict';
return k(this.props);};
function l(){'use strict';h.apply(this,arguments);}


f.exports=l;}),null);
