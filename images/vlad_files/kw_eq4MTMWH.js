if (self.CavalryLogger) { CavalryLogger.start_js(["JMEsA"]); }

/** js/ads/utils/AdsTimeUtils.js */






__d('AdsTimeUtils',['fbt','DateConsts'],(function a(b,c,d,e,f,g,h){

'use strict';





var i=c('DateConsts').SEC_PER_DAY*c('DateConsts').MS_PER_SEC,
j=c('DateConsts').SEC_PER_HOUR*c('DateConsts').MS_PER_SEC,

k=
{isTheSameMinute:function l(m,n){
if(!m||!n)
return m===n;

var o=k._getTimeStampRoundedToMinutes(m),
p=k._getTimeStampRoundedToMinutes(n);
return o===p;},


_getTimeStampRoundedToMinutes:function l(m){
return m.getTime()-
m.getSeconds()*c('DateConsts').MS_PER_SEC-
m.getMilliseconds();},






dateUTCTruncate:function l(m){
return new Date(Date.UTC
(m.getFullYear(),
m.getMonth(),
m.getDate()));},







getDifferenceInDays:function l(m,n){
var o=Math.abs(m-n);
return Math.ceil(o/c('DateConsts').MS_PER_DAY);},










dateStringToSeconds:function l(m){
if(k.isNumberLike(m)){
return +m;}else 

return Date.parse(m)/1000;},



isNumberLike:function l(m){
return !isNaN(+m);},





secondsToString:function l(m){
var n=Math.floor(m/c('DateConsts').SEC_PER_HOUR),
o=Math.floor
((m-n*c('DateConsts').SEC_PER_HOUR)/
c('DateConsts').SEC_PER_MIN),

p=
m-
o*c('DateConsts').SEC_PER_MIN-
n*c('DateConsts').SEC_PER_HOUR;

if(p<10)
p='0'+p;


if(n&&o<10)
o='0'+o;


var q=h._(["{minutes}:{seconds}","8b829acf6a95209c08acbc00c4674430"],[h.param

('minutes',
o),h.param


('seconds',
p)]);


if(n)
q=h._(["{hours}:{minutes}:{seconds}","7d8d3eac308dfdc70dcf5291a4d358cc"],[h.param

('hours',
n),h.param


('minutes',
o),h.param


('seconds',
p)]);




return q;}};



f.exports=k;}),null);

/** js/modules/layouts/ScrollLayout.js */






__d('ScrollLayout',['EventEmitter'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits



(j,c('EventEmitter'));i=h&&h.prototype;





function j(){'use strict';
i.constructor.call(this);
this.$ScrollLayout_height=0;
this.$ScrollLayout_scrollTop=0;
this.$ScrollLayout_scrollHeight=0;
this.$ScrollLayout_isChanging=false;}
j.prototype.

setScrollTop=function(k){'use strict';
if(k!==this.$ScrollLayout_scrollTop){
this.$ScrollLayout_scrollTop=k;
this.requestChange();}};

j.prototype.

getScrollTop=function(){'use strict';
return this.$ScrollLayout_scrollTop;};
j.prototype.

setScrollHeight=function(k){'use strict';
if(k!==this.$ScrollLayout_scrollHeight){
this.$ScrollLayout_scrollHeight=k;
this.requestChange();}};

j.prototype.

getScrollHeight=function(){'use strict';
return this.$ScrollLayout_scrollHeight;};
j.prototype.

getHeight=function(){'use strict';
return this.$ScrollLayout_height;};
j.prototype.

setHeight=function(k){'use strict';
if(k!==this.$ScrollLayout_height){
this.$ScrollLayout_height=k;
this.requestChange();}};

j.prototype.

requestChange=function(){'use strict';
if(!this.$ScrollLayout_isChanging){

this.$ScrollLayout_isChanging=true;
this.emit('change');
this.$ScrollLayout_isChanging=false;}};




f.exports=j;}),null);

/** shared/dom/translateDOMPositionXY.js */





__d('translateDOMPositionXY',['BrowserSupportCore','getVendorPrefixedName'],(function a(b,c,d,e,f,g){

'use strict';





var h=c('getVendorPrefixedName')('transform'),
i=c('getVendorPrefixedName')('backfaceVisibility'),

j=function(){
if(c('BrowserSupportCore').hasCSSTransforms()){
var k=b.window?b.window.navigator.userAgent:'UNKNOWN',
l=/Safari\//.test(k)&&!/Chrome\//.test(k);




if(!l&&c('BrowserSupportCore').hasCSS3DTransforms()){
return function(m,n,o){
m[h]='translate3d('+n+'px,'+o+'px,0)';
m[i]='hidden';};}else 


return function(m,n,o){
m[h]='translate('+n+'px,'+o+'px)';};}else 



return function(m,n,o){
m.left=n+'px';
m.top=o+'px';};}


();

f.exports=j;}),null);

/** js/components/LayoutScrollableView/LayoutScrollableViewDelegate.react.js */





__d('LayoutScrollableViewDelegate.react',['cx','React','ResponsiveBlock.react','ScrollLayout','translateDOMPositionXY'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,








k=c('React').PropTypes;i=babelHelpers.inherits





(l,c('React').PureComponent);j=i&&i.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.




state=
{scrollTop:this.props.layout.getScrollTop()},this.



























$LayoutScrollableViewDelegate_onResize=function(r,s){
this.props.layout.setScrollHeight(s);}.
bind(this),this.

$LayoutScrollableViewDelegate_onLayoutChange=function(){
this.setState
({scrollTop:this.props.layout.getScrollTop()});}.

bind(this),n;}l.prototype.componentWillMount=function(){this.$LayoutScrollableViewDelegate_subscription=this.props.layout.addListener('change',this.$LayoutScrollableViewDelegate_onLayoutChange);};l.prototype.componentWillUnmount=function(){this.$LayoutScrollableViewDelegate_subscription.remove();this.$LayoutScrollableViewDelegate_subscription=null;};l.prototype.render=function(){var m={};c('translateDOMPositionXY')(m,0,-Math.max(0,this.state.scrollTop));return c('React').createElement('div',{className:"_2mum",style:m},c('React').createElement(c('ResponsiveBlock.react'),{onResize:this.$LayoutScrollableViewDelegate_onResize,className:"_2mun"}),this.props.children);};l.propTypes={layout:k.instanceOf(c('ScrollLayout')).isRequired};


f.exports=l;}),null);

/** shared/dom/normalizeWheel.js */





__d('normalizeWheel',['UserAgent','isEventSupported'],(function a(b,c,d,e,f,g){

'use strict';







var h=10,
i=40,
j=800;





































































































function k(event){
var l=0,
m=0,

n=0,
o=0;


if('detail' in event)m=event.detail;
if('wheelDelta' in event)m=-event.wheelDelta/120;
if('wheelDeltaY' in event)m=-event.wheelDeltaY/120;
if('wheelDeltaX' in event)l=-event.wheelDeltaX/120;


if('axis' in event&&event.axis===event.HORIZONTAL_AXIS){
l=m;
m=0;}


n=l*h;
o=m*h;

if('deltaY' in event)o=event.deltaY;
if('deltaX' in event)n=event.deltaX;

if((n||o)&&event.deltaMode)
if(event.deltaMode==1){
n*=i;
o*=i;}else{

n*=j;
o*=j;}




if(n&&!l)l=n<1?-1:1;
if(o&&!m)m=o<1?-1:1;

return {spinX:l,
spinY:m,
pixelX:n,
pixelY:o};}








k.getEventType=function(){
return c('UserAgent').isBrowser('Firefox')?
'DOMMouseScroll':
c('isEventSupported')('wheel')?
'wheel':
'mousewheel';};


f.exports=k;}),null);

/** shared/dom/ReactWheelHandler.js */








__d('ReactWheelHandler',['emptyFunction','normalizeWheel','requestAnimationFramePolyfill'],(function a(b,c,d,e,f,g){

'use strict';












function h
(j,
k,
l,
m){
i.call(this);
this.$ReactWheelHandler_animationFrameID=null;
this.$ReactWheelHandler_deltaX=0;
this.$ReactWheelHandler_deltaY=0;
if(typeof k!=='function')
k=k?
c('emptyFunction').thatReturnsTrue:
c('emptyFunction').thatReturnsFalse;


if(typeof l!=='function')
l=l?
c('emptyFunction').thatReturnsTrue:
c('emptyFunction').thatReturnsFalse;


if(typeof m!=='function')
m=m?
c('emptyFunction').thatReturnsTrue:
c('emptyFunction').thatReturnsFalse;


this.$ReactWheelHandler_handleScrollX=k;
this.$ReactWheelHandler_handleScrollY=l;
this.$ReactWheelHandler_stopPropagation=m;
this.$ReactWheelHandler_onWheelCallback=j;}
var i=function j(){this.

onWheel=function(event){
var k=c('normalizeWheel')(event),
l=this.$ReactWheelHandler_deltaX+k.pixelX,
m=this.$ReactWheelHandler_deltaY+k.pixelY,
n=this.$ReactWheelHandler_handleScrollX(l,m),
o=this.$ReactWheelHandler_handleScrollY(m,l);
if(!n&&!o)
return;


this.$ReactWheelHandler_deltaX+=n?k.pixelX:0;
this.$ReactWheelHandler_deltaY+=o?k.pixelY:0;
event.preventDefault();

var p=void 0;
if(this.$ReactWheelHandler_deltaX!==0||this.$ReactWheelHandler_deltaY!==0){
if(this.$ReactWheelHandler_stopPropagation())
event.stopPropagation();

p=true;}


if(p===true&&this.$ReactWheelHandler_animationFrameID===null)
this.$ReactWheelHandler_animationFrameID=c('requestAnimationFramePolyfill')(this.$ReactWheelHandler_didWheel);}.

bind(this);this.

$ReactWheelHandler_didWheel=function(){
this.$ReactWheelHandler_animationFrameID=null;
this.$ReactWheelHandler_onWheelCallback(this.$ReactWheelHandler_deltaX,this.$ReactWheelHandler_deltaY);
this.$ReactWheelHandler_deltaX=0;
this.$ReactWheelHandler_deltaY=0;}.
bind(this);};


f.exports=h;}),null);

/** shared/dom/DOMMouseMoveTracker.js */












__d('DOMMouseMoveTracker',['EventListener','cancelAnimationFramePolyfill','requestAnimationFramePolyfill'],(function a(b,c,d,e,f,g){

'use strict';











function h
(i,
j,
k){this.






































































$DOMMouseMoveTracker_onMouseMove=function(event){
var l=event.clientX,
m=event.clientY;

this.$DOMMouseMoveTracker_deltaX+=l-this.$DOMMouseMoveTracker_x;
this.$DOMMouseMoveTracker_deltaY+=m-this.$DOMMouseMoveTracker_y;

if(this.$DOMMouseMoveTracker_animationFrameID===null)


this.$DOMMouseMoveTracker_animationFrameID=
c('requestAnimationFramePolyfill')(this.$DOMMouseMoveTracker_didMouseMove);


this.$DOMMouseMoveTracker_x=l;
this.$DOMMouseMoveTracker_y=m;
event.preventDefault();}.
bind(this);this.

$DOMMouseMoveTracker_didMouseMove=function(){
this.$DOMMouseMoveTracker_animationFrameID=null;
this.$DOMMouseMoveTracker_onMove(this.$DOMMouseMoveTracker_deltaX,this.$DOMMouseMoveTracker_deltaY);
this.$DOMMouseMoveTracker_deltaX=0;
this.$DOMMouseMoveTracker_deltaY=0;}.
bind(this);this.




$DOMMouseMoveTracker_onMouseUp=function(){
if(this.$DOMMouseMoveTracker_animationFrameID)
this.$DOMMouseMoveTracker_didMouseMove();

this.$DOMMouseMoveTracker_onMoveEnd();}.
bind(this);this.$DOMMouseMoveTracker_isDragging=false;this.$DOMMouseMoveTracker_animationFrameID=null;this.$DOMMouseMoveTracker_domNode=k;this.$DOMMouseMoveTracker_onMove=i;this.$DOMMouseMoveTracker_onMoveEnd=j;}h.prototype.captureMouseMoves=function(event){if(!this.$DOMMouseMoveTracker_eventMoveToken&&!this.$DOMMouseMoveTracker_eventUpToken){this.$DOMMouseMoveTracker_eventMoveToken=c('EventListener').listen(this.$DOMMouseMoveTracker_domNode,'mousemove',this.$DOMMouseMoveTracker_onMouseMove);this.$DOMMouseMoveTracker_eventUpToken=c('EventListener').listen(this.$DOMMouseMoveTracker_domNode,'mouseup',this.$DOMMouseMoveTracker_onMouseUp);}if(!this.$DOMMouseMoveTracker_isDragging){this.$DOMMouseMoveTracker_deltaX=0;this.$DOMMouseMoveTracker_deltaY=0;this.$DOMMouseMoveTracker_isDragging=true;this.$DOMMouseMoveTracker_x=event.clientX;this.$DOMMouseMoveTracker_y=event.clientY;}event.preventDefault();};h.prototype.releaseMouseMoves=function(){if(this.$DOMMouseMoveTracker_eventMoveToken&&this.$DOMMouseMoveTracker_eventUpToken){this.$DOMMouseMoveTracker_eventMoveToken.remove();this.$DOMMouseMoveTracker_eventMoveToken=null;this.$DOMMouseMoveTracker_eventUpToken.remove();this.$DOMMouseMoveTracker_eventUpToken=null;}if(this.$DOMMouseMoveTracker_animationFrameID!==null){c('cancelAnimationFramePolyfill')(this.$DOMMouseMoveTracker_animationFrameID);this.$DOMMouseMoveTracker_animationFrameID=null;}if(this.$DOMMouseMoveTracker_isDragging){this.$DOMMouseMoveTracker_isDragging=false;this.$DOMMouseMoveTracker_x=null;this.$DOMMouseMoveTracker_y=null;}};h.prototype.isDragging=function(){return this.$DOMMouseMoveTracker_isDragging;};


f.exports=h;}),null);

/** js/fixed-data-table/Scrollbar.react.js */










__d('Scrollbar.react',['cssVar','cx','DOMMouseMoveTracker','Keys','React','ReactDOM','ReactComponentWithPureRenderMixin','ReactWheelHandler','emptyFunction','translateDOMPositionXY'],(function a(b,c,d,e,f,g,h,i){













var j=c('React').PropTypes,

k=
{position:0,
scrollable:false},


l=parseInt("4px",10),
m=l*2,
n=30,
o=40,

p=null,

q=c('React').createClass({displayName:'Scrollbar',
mixins:[c('ReactComponentWithPureRenderMixin')],

propTypes:
{contentSize:j.number.isRequired,
defaultPosition:j.number,
isOpaque:j.bool,
isRTL:j.bool,
orientation:j.oneOf(['vertical','horizontal']),
onScroll:j.func,
position:j.number,
size:j.number.isRequired,
trackColor:j.oneOf(['gray']),
zIndex:j.number,
verticalTop:j.number},


getInitialState:function r(){
var s=this.props;
return this._calculateState
(s.position||s.defaultPosition||0,
s.size,
s.contentSize,
s.orientation);},



componentWillReceiveProps:function r(s){
var t=s.position;
if(t===undefined){
this._setNextState
(this._calculateState
(this.state.position,
s.size,
s.contentSize,
s.orientation));}else 



this._setNextState
(this._calculateState
(t,
s.size,
s.contentSize,
s.orientation),

s);},




getDefaultProps:function r(){

return {defaultPosition:0,
isOpaque:false,
onScroll:c('emptyFunction'),
orientation:'vertical',
zIndex:99};},



render:function r(){
if(!this.state.scrollable)
return null;


var s=this.props.size,
t,
u,
v=this.state.isHorizontal,
w=!v,
x=this.state.focused||this.state.isDragging,
y=this.state.faceSize,
z=this.props.isOpaque,
aa=this.props.verticalTop||0,

ba="_1t0r"+

(w?' '+"_1t0s":'')+
(v?' '+"_1t0t":'')+(' '+"_4jdr")+

(z?' '+"_1t0u":'')+
(x?' '+"_1t0v":''),


ca="_1t0w"+

(v?' '+"_1t0y":'')+
(w?' '+"_1t0z":'')+
(x?' '+"_1t0-":'')+(' '+"_1t0_"),



da=this.state.position*this.state.scale+l;

if(v){
t=
{width:s};

u=
{width:y-m};

da=this.props.isRTL?-da:da;
c('translateDOMPositionXY')(u,da,0);}else{

t=
{top:aa,
height:s};

u=
{height:y-m};

c('translateDOMPositionXY')(u,0,da);}


t.zIndex=this.props.zIndex;

if(this.props.trackColor==='gray')
t.backgroundColor="#f6f7f9";



return (c('React').createElement('div',
{onFocus:this._onFocus,
onBlur:this._onBlur,
onKeyDown:this._onKeyDown,
onMouseDown:this._onMouseDown,
onWheel:this._wheelHandler.onWheel,
className:ba,
style:t,
tabIndex:0},
c('React').createElement('div',
{ref:'face',
className:ca,
style:u})));},





componentWillMount:function r(){
var s=this.props.orientation==='horizontal',
t=s?this._onWheelX:this._onWheelY;

this._wheelHandler=new (c('ReactWheelHandler'))
(t,
this._shouldHandleX,
this._shouldHandleY);},



componentDidMount:function r(){
this._mouseMoveTracker=new (c('DOMMouseMoveTracker'))
(this._onMouseMove,
this._onMouseMoveEnd,
document.documentElement);


if(this.props.position!==undefined&&
this.state.position!==this.props.position)
this._didScroll();},



componentWillUnmount:function r(){
this._nextState=null;
this._mouseMoveTracker.releaseMouseMoves();
if(p===this)
p=null;

delete this._mouseMoveTracker;},


scrollBy:function r(s){
this._onWheel(s);},


_shouldHandleX:function r(s){
return this.props.orientation==='horizontal'?
this._shouldHandleChange(s):
false;},


_shouldHandleY:function r(s){
return this.props.orientation!=='horizontal'?
this._shouldHandleChange(s):
false;},


_shouldHandleChange:function r(s){
if(this.props.orientation==='horizontal'&&this.props.isRTL)
s*=-1;


var t=this._calculateState
(this.state.position+s,
this.props.size,
this.props.contentSize,
this.props.orientation);

return t.position!==this.state.position;},


_calculateState:function r
(s,
t,
u,
v){

if(t<1||u<=t)
return k;


var w=s+'_'+t+'_'+u+'_'+v;
if(this._stateKey===w)
return this._stateForKey;








var x=v==='horizontal',
y=t/u,
z=t*y;

if(z<n){
y=(t-n)/(u-t);
z=n;}


var aa=true,
ba=u-t;

if(s<0){
s=0;}else
if(s>ba)
s=ba;


var ca=this._mouseMoveTracker?
this._mouseMoveTracker.isDragging():
false,



da=
{faceSize:z,
isDragging:ca,
isHorizontal:x,
position:s,
scale:y,
scrollable:aa};



this._stateKey=w;
this._stateForKey=da;
return da;},


_onWheelY:function r(s,t){
this._onWheel(t);},


_onWheelX:function r(s,t){
this._onWheel(s);},


_onWheel:function r(s){
var t=this.props;

if(t.orientation==='horizontal'&&t.isRTL)
s*=-1;




this._setNextState
(this._calculateState
(this.state.position+s,
t.size,
t.contentSize,
t.orientation));},




_onMouseDown:function r(event){
var s;

if(event.target!==c('ReactDOM').findDOMNode(this.refs.face)){


var t=event.nativeEvent,
u=this.state.isHorizontal?
t.offsetX||t.layerX:
t.offsetY||t.layerY;


if(this.state.isHorizontal&&this.props.isRTL)
u=this.props.size-u;




var v=this.props;
u/=this.state.scale;
s=this._calculateState
(u-this.state.faceSize*.5/this.state.scale,
v.size,
v.contentSize,
v.orientation);}else 


s={};


s.focused=true;
this._setNextState(s);

this._mouseMoveTracker.captureMouseMoves(event);

c('ReactDOM').findDOMNode(this).focus();},


_onMouseMove:function r(s,t){
var u=this.props,
v=this.state.isHorizontal?s:t;

if(this.state.isHorizontal&&this.props.isRTL)
v*=-1;

v/=this.state.scale;

this._setNextState
(this._calculateState
(this.state.position+v,
u.size,
u.contentSize,
u.orientation));},




_onMouseMoveEnd:function r(){
this._nextState=null;
this._mouseMoveTracker.releaseMouseMoves();
this.setState({isDragging:false});},


_onKeyDown:function r(event){
var s=event.keyCode;

if(s===c('Keys').TAB)

return;


var t=o,
u=0;

if(this.state.isHorizontal)
switch(s){
case c('Keys').HOME:
u=-1;
t=this.props.contentSize;
break;

case c('Keys').LEFT:
u=this.props.isRTL?1:-1;
break;

case c('Keys').RIGHT:
u=this.props.isRTL?-1:1;
break;


default:return;}



if(!this.state.isHorizontal)
switch(s){
case c('Keys').SPACE:
if(event.shiftKey){
u=-1;}else 

u=1;

break;

case c('Keys').HOME:
u=-1;
t=this.props.contentSize;
break;

case c('Keys').UP:
u=-1;
break;

case c('Keys').DOWN:
u=1;
break;

case c('Keys').PAGE_UP:
u=-1;
t=this.props.size;
break;

case c('Keys').PAGE_DOWN:
u=1;
t=this.props.size;
break;


default:return;}



event.preventDefault();

var v=this.props;
this._setNextState
(this._calculateState
(this.state.position+t*u,
v.size,
v.contentSize,
v.orientation));},




_onFocus:function r(){
this.setState
({focused:true});},



_onBlur:function r(){
this.setState
({focused:false});},



_blur:function r(){
if(this.isMounted())

try{this._onBlur();
c('ReactDOM').findDOMNode(this).blur();}catch(
s){

}},



_setNextState:function r(s,t){
t=t||this.props;
var u=t.position,
v=this.state.position!==s.position;
if(u===undefined){
var w=v?this._didScroll:undefined;
this.setState(s,w);}else
if(u===s.position){
this.setState(s);}else{



if(s.position!==undefined&&
s.position!==this.state.position)
this.props.onScroll(s.position);

return;}


if(v&&p!==this){
p&&p._blur();
p=this;}},



_didScroll:function r(){
this.props.onScroll(this.state.position);}});



q.KEYBOARD_SCROLL_AMOUNT=o;
q.SIZE=parseInt("15px",10);

f.exports=q;}),null);

/** js/components/LayoutScrollableView/LayoutScrollableView.react.js */





__d('LayoutScrollableView.react',['cx','Keys','LayoutScrollableViewDelegate.react','React','ReactWheelHandler','ScrollLayout','Scrollbar.react','clamp'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,











k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').PureComponent);j=i&&i.prototype;





function l(m){
j.constructor.call(this,m);this.





















































$LayoutScrollableView_onWheel=function(n,o){
var p=c('clamp')
(this.$LayoutScrollableView_layout.getScrollTop()+Math.round(o),
0,
Math.max(0,this.state.scrollHeight-this.props.height));

this.$LayoutScrollableView_layout.setScrollTop(p);}.
bind(this);this.

$LayoutScrollableView_onScroll=function(n){
this.$LayoutScrollableView_layout.setScrollTop(n);}.
bind(this);this.

$LayoutScrollableView_onKeyDown=function(event){
switch(event.target.tagName){
case 'INPUT':
case 'OPTION':
case 'SELECT':
case 'TEXTAREA':
return;}



var n=event.keyCode,
o=void 0;
switch(n){
case c('Keys').HOME:
o=-this.state.scrollHeight;
break;

case c('Keys').UP:
o=-c('Scrollbar.react').KEYBOARD_SCROLL_AMOUNT;
break;

case c('Keys').DOWN:
o=c('Scrollbar.react').KEYBOARD_SCROLL_AMOUNT;
break;

case c('Keys').PAGE_UP:
o=-this.props.height;
break;

case c('Keys').PAGE_DOWN:
o=this.props.height;
break;

case c('Keys').SPACE:
if(event.shiftKey){
o=-this.props.height;}else 

o=this.props.height;

break;


default:return;}


event.preventDefault();
this.$LayoutScrollableView_layout.setScrollTop(this.$LayoutScrollableView_layout.getScrollTop()+o);}.
bind(this);this.

$LayoutScrollableView_onLayoutChange=function(){
this.setState
({scrollTop:this.$LayoutScrollableView_layout.getScrollTop(),
scrollHeight:this.$LayoutScrollableView_layout.getScrollHeight()});}.

bind(this);this.$LayoutScrollableView_layout=new (c('ScrollLayout'))();this.state={scrollTop:this.$LayoutScrollableView_layout.getScrollTop(),scrollHeight:this.$LayoutScrollableView_layout.getScrollHeight()};}l.prototype.componentWillMount=function(){this.$LayoutScrollableView_layout.addListener('change',this.$LayoutScrollableView_onLayoutChange);this.$LayoutScrollableView_wheelHandler=new (c('ReactWheelHandler'))(this.$LayoutScrollableView_onWheel,false,true,true);};l.prototype.componentWillUnmount=function(){this.$LayoutScrollableView_layout.removeAllListeners();this.$LayoutScrollableView_layout=null;};l.prototype.render=function(){var m={height:this.props.height};if(this.props.width!==undefined)m.width=this.props.width;return c('React').createElement('div',{className:"_5jln",style:m},c('React').createElement('div',{className:"_4bn9",tabIndex:0,onWheel:this.$LayoutScrollableView_wheelHandler.onWheel,onKeyDown:this.$LayoutScrollableView_onKeyDown},c('React').createElement(c('LayoutScrollableViewDelegate.react'),{layout:this.$LayoutScrollableView_layout},this.props.children)),c('React').createElement(c('Scrollbar.react'),{contentSize:this.state.scrollHeight,onScroll:this.$LayoutScrollableView_onScroll,position:this.state.scrollTop,size:this.props.height}));};l.propTypes={height:k.number.isRequired,width:k.number};


f.exports=l;}),null);

/** js/components/StarsInput/StarsInput.react.js */







__d('StarsInput.react',['cx','fbt','invariant','React','TooltipLink.react','joinClasses'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';var k,l,









m=

{CUMULATIVE:'CUMULATIVE',

SINGLE:'SINGLE'},


n=
{STAR:'STAR',
BOX:'BOX'};k=babelHelpers.inherits



































(o,c('React').Component);l=k&&k.prototype;



function o(p){
l.constructor.call(this,p);
if(p.initialStars)
Number.isInteger(p.initialStars)||j(0,
'initialStars must be an integer');

this.state=
{starRating:p.initialStars!=undefined?
p.initialStars:p.count,
starsShown:p.initialStars!=undefined?
p.initialStars:p.count,
canUpdate:true};}

o.prototype.

onMouseEnter=function(p,event){
if(this.state.canUpdate){
this.setState
({starsShown:p});

this.props.onMouseEnter&&this.props.onMouseEnter(p);}};

o.prototype.

onMouseLeave=function(p,event){
if(this.state.canUpdate){
var q=this.state.starRating;
this.setState
({starsShown:q});

this.props.onMouseLeave&&this.props.onMouseLeave(p);}};

o.prototype.

onClick=function(p,event){
if(this.state.canUpdate){
this.setState
({starRating:p,
starsShown:p,
canUpdate:this.props.allowMultipleSubmissions});

this.props.onClick(p);}};

o.prototype.

$StarsInput_shouldShowShape=
function(p,
q,
r){

if(this.props.displayMode==m.SINGLE){
return r?p+1==q:true;}else 


return r?p<q:p>=q;};

o.prototype.

$StarsInput_getStarClasses=function(p,q){
var r="mls"+(' '+"_22mm")+


(!this.state.canUpdate?' '+"_1g87":'');

if(this.props.shape==n.BOX){
var s="_5fx1"+


(this.$StarsInput_shouldShowShape(p,q,false)?' '+"_5fx2":'')+

(this.$StarsInput_shouldShowShape(p,q,true)?' '+"_5fx3":'');

return c('joinClasses')(r,s);}else{


var t=

(this.props.large?"_1vr2":'')+

(this.$StarsInput_shouldShowShape(p,q,false)?' '+"_22mn":'')+

(this.$StarsInput_shouldShowShape(p,q,true)?' '+"_22mo":'');

return c('joinClasses')(r,t);}};

o.prototype.

getStars=function(){
if(!this.props.starLabels)
return [];

var p=this.props.starLabels.length,
q=[],
r=this.state.starsShown?this.state.starsShown:
0;
for(var s=0;s<p;s++){
var t=s+1;
q.push
(c('React').createElement(c('TooltipLink.react'),
{className:this.$StarsInput_getStarClasses(s,r),
key:s,
tooltip:this.props.starLabels&&this.props.starLabels[s],
onMouseEnter:this.onMouseEnter.bind(this,t),
onMouseLeave:this.onMouseLeave.bind(this,t),
onClick:this.onClick.bind(this,t),
position:'above',
alignH:'center'}));}



return q;};
o.prototype.

render=function(){

return (c('React').createElement('div',{className:this.props.className},
this.getStars()));};






o.defaultProps=
{allowMultipleSubmissions:false,
count:0,
large:false,
starLabels:[i._(["Poor","abf4ba52a1a6e0ea1e005148f542e819"]),i._(["Fair","c063af21e14d0773bc63f584983ad5da"]),i._(["Good","38f63ea4b3d495f89688cecb014e206f"]),i._(["Very Good","a7e01438b4ae903712eb1837bfcfd3ba"]),i._(["Excellent","776fe70bc9a6db8b9b530d8f74d757c3"])],





















displayMode:m.CUMULATIVE,
shape:n.STAR,
className:undefined,
initialStars:undefined,
onMouseEnter:undefined,
onMouseLeave:undefined};


f.exports=o;}),null);

/** js/silvertail/helper/SUIInlineNux.react.js */








__d('SUIInlineNux.react',['React','SUIComponent','SUIMessageBox.react','SUITheme'],(function a(b,c,d,e,f,g){

'use strict';var h,i,









j=c('React').PropTypes;h=babelHelpers.inherits










(k,c('SUIComponent'));i=h&&h.prototype;k.prototype.








render=function(){
var l=c('SUITheme').get(this).SUIInlineNux,
m=c('React').cloneElement(l.icon);


return (c('React').createElement(c('SUIMessageBox.react'),
{hasShadow:false,
icon:m,
onClose:this.props.onClose,

style:babelHelpers['extends']
({borderColor:l.borderColor},
this.props.style),

type:'filled'},
c('React').createElement('div',{style:babelHelpers['extends']({},l.titleTypeStyle)},
this.props.title),

this.props.children));};


function k(){h.apply(this,arguments);}k.propTypes={onClose:j.func.isRequired,title:j.node.isRequired,theme:j.instanceOf(c('SUITheme'))};


f.exports=k;}),null);

/** js/ui/layer/behaviors/ContextualLayerDynamicOffsetY.js */





__d('ContextualLayerDynamicOffsetY',['ContextualLayerDimensions'],(function a(b,c,d,e,f,g){


















function h(i){'use strict';
this._layer=i;}
h.prototype.

enable=function(){'use strict';
this._subscription=this._layer.subscribe
('show',
this._adjustOffset.bind(this));

this._adjustOffset();};
h.prototype.

disable=function(){'use strict';
this._subscription.unsubscribe();
this._subscription=null;


if(this._defaultOffsetY!==null){
this._layer.setOffsetY(this._defaultOffsetY);
this._defaultOffsetY=null;}};

h.prototype.

_adjustOffset=function(i){'use strict';
var j=this._layer.getOrientation();
if(j.isVertical())
return;


if(this._defaultOffsetY===null)
this._defaultOffsetY=j.getOffsetY();


var k=c('ContextualLayerDimensions').getViewportRect(this._layer),
l=k.b-k.t,

m=c('ContextualLayerDimensions').getLayerRect
(this._layer,
j),





n=j.getOffsetY()-this._defaultOffsetY,
o=l-m.b;

if(o>=0&&o>=-n){
this._layer.setOffsetY(this._defaultOffsetY);}else 

this._layer.setOffsetY(j.getOffsetY()+o);};




Object.assign(h.prototype,
{_defaultOffsetY:null,
_subscriptions:[]});


f.exports=h;}),null);

/** shared_core/artillery_core/ArtillerySegment.js */









__d('ArtillerySegment',['invariant','performanceAbsoluteNow'],(function a(b,c,d,e,f,g,h){




var i=0;




















function j(k){'use strict';
k||h(0,'Properties undefined');

'category' in k&&
'description' in k||h(0,
'Required key missing in properties: %s',
JSON.stringify(k));

this.$ArtillerySegment_posted=false;
this.$ArtillerySegment_properties=babelHelpers['extends']({},
k,
{id:(i++).toString(36)});

this.$ArtillerySegment_children=[];}
j.prototype.

getID=function(){'use strict';
return this.$ArtillerySegment_properties.id;};
j.prototype.

begin=function(){'use strict';

this.$ArtillerySegment_properties.begin=c('performanceAbsoluteNow')();
return this;};
j.prototype.

end=function(){'use strict';

this.$ArtillerySegment_properties.end=c('performanceAbsoluteNow')();
return this;};
j.prototype.

appendChild=function(){'use strict';

!this.$ArtillerySegment_posted||h(0,
'Segment "%s" is posted and can\'t accept new child',
this.$ArtillerySegment_properties.description);for(var k=arguments.length,l=Array(k),m=0;m<k;m++)l[m]=arguments[m];

l.forEach(function(n){
this.$ArtillerySegment_children.push(n.getID());}.
bind(this));
return this;};
j.prototype.

setPosted=function(){'use strict';
this.$ArtillerySegment_posted=true;
return this;};
j.prototype.

getPostData=function(){'use strict';
return babelHelpers['extends']({},
this.$ArtillerySegment_properties,
{id:this.$ArtillerySegment_properties.id,
children:this.$ArtillerySegment_children.slice()});};




f.exports=j;}),null);

/** shared_core/artillery_core/ArtillerySequence.js */









__d('ArtillerySequence',['invariant'],(function a(b,c,d,e,f,g,h){





var i=0;















function j(k){'use strict';
k||h(0,'Properties undefined');

'description' in k||h(0,
'Properties missing required key: %s',
JSON.stringify(k));

this.$ArtillerySequence_posted=false;
this.$ArtillerySequence_properties=babelHelpers['extends']({},
k,
{id:(i++).toString(36)});

this.$ArtillerySequence_segments=[];}
j.prototype.

getID=function(){'use strict';
return this.$ArtillerySequence_properties.id;};
j.prototype.

addSegment=function(){'use strict';

!this.$ArtillerySequence_posted||h(0,
'Sequence "%s" is posted and can\'t accept new segment',
this.$ArtillerySequence_properties.description);for(var k=arguments.length,l=Array(k),m=0;m<k;m++)l[m]=arguments[m];

l.forEach(function(n){
this.$ArtillerySequence_segments.push(n.getID());}.
bind(this));
return this;};
j.prototype.

setPosted=function(){'use strict';
this.$ArtillerySequence_posted=true;
return this;};
j.prototype.

getPostData=function(){'use strict';
return babelHelpers['extends']({},
this.$ArtillerySequence_properties,
{id:this.$ArtillerySequence_properties.id,
segments:this.$ArtillerySequence_segments.slice()});};




f.exports=j;}),null);

/** shared_core/artillery_core/ArtilleryTrace.js */









__d('ArtilleryTrace',['invariant','ArtillerySegment','ArtillerySequence'],(function a(b,c,d,e,f,g,h){
































function i(){'use strict';
this.$ArtilleryTrace_posted=false;
this.$ArtilleryTrace_artillery2ID=undefined;
this.$ArtilleryTrace_properties={};
this.$ArtilleryTrace_tagsets={};
this.$ArtilleryTrace_sequences=[];
this.$ArtilleryTrace_segments=[];
this.$ArtilleryTrace_marks={};
this.$ArtilleryTrace_connections=[];
this.$ArtilleryTrace_onPost=null;}
i.prototype.

createSequence=function(j){'use strict';

!this.$ArtilleryTrace_posted||h(0,
'Trace is posted and can\'t create new sequence');

var k=new (c('ArtillerySequence'))(j);
this.$ArtilleryTrace_sequences.push(k);
return k;};
i.prototype.

createSegment=function(j){'use strict';

!this.$ArtilleryTrace_posted||h(0,
'Trace is posted and can\'t create new segment');

var k=new (c('ArtillerySegment'))(j);
this.$ArtilleryTrace_segments.push(k);
return k;};
i.prototype.

markSegment=
function(j,
k){
'use strict';

!this.$ArtilleryTrace_posted||h(0,
'Trace is posted and can\'t mark segment');

this.$ArtilleryTrace_marks[k]=j.getID();
return this;};
i.prototype.

connectTrace=function(j,k){'use strict';

!this.$ArtilleryTrace_posted||h(0,
'Trace is posted and can\'t mark segment');


k=k||this.$ArtilleryTrace_id;

k||h(0,
'Cannot connect to this trace if its ID isn\'t set');


this.$ArtilleryTrace_connections.push
({segment:j.getID(),
trace:k});

return this;};
i.prototype.

setID=function(j,k){'use strict';

!this.$ArtilleryTrace_id&&!this.$ArtilleryTrace_artillery2ID||h(0,
'Don\'t call trace.setID to over existing one');

this.$ArtilleryTrace_id=j;
this.$ArtilleryTrace_artillery2ID=k;
return this;};
i.prototype.

getID=function(){'use strict';
return this.$ArtilleryTrace_id;};
i.prototype.

getArtillery2ID=function(){'use strict';
return this.$ArtilleryTrace_artillery2ID;};
i.prototype.

addProperty=function(j,k){'use strict';
this.$ArtilleryTrace_properties[j]=k;
return this;};
i.prototype.

addTagset=function(j,k){'use strict';
this.$ArtilleryTrace_tagsets[j]=k;
return this;};
i.prototype.

addActivePolicies=function(j){'use strict';
this.addTagset('active_policies',j);
this.addTagset('policy',j);
return this;};
i.prototype.

getProperty=function(j){'use strict';
return this.$ArtilleryTrace_properties[j];};
i.prototype.

getTagset=function(j){'use strict';
return this.$ArtilleryTrace_tagsets[j];};
i.prototype.

getActivePolicies=function(){'use strict';
return this.getTagset('active_policies');};
i.prototype.

post=function(){'use strict';

!this.$ArtilleryTrace_posted||h(0,
'Trace "%s" is posted and can\'t be posted again',
this.$ArtilleryTrace_id);

this.$ArtilleryTrace_posted=true;

var j=this.$ArtilleryTrace_onPost;
if(j)
j
({id:this.$ArtilleryTrace_id,
artillery2Id:this.$ArtilleryTrace_artillery2ID,
properties:this.$ArtilleryTrace_properties,
tagsets:this.$ArtilleryTrace_tagsets,
sequences:this.$ArtilleryTrace_sequences.map(function(k){
return k.setPosted().getPostData();}),

segments:this.$ArtilleryTrace_segments.map(function(k){



return k.setPosted().getPostData();}),

marks:Object.assign({},this.$ArtilleryTrace_marks),
connections:this.$ArtilleryTrace_connections.slice()});};


i.prototype.

setOnPost=
function(j){
'use strict';
!this.$ArtilleryTrace_onPost||h(0,'onPost callback already set.');
this.$ArtilleryTrace_onPost=j;
return this;};
i.prototype.

isPosted=function(){'use strict';
return this.$ArtilleryTrace_posted;};



f.exports=i;}),null);

/** shared/artillery/Artillery.js */























__d('Artillery',['invariant','ArtilleryTrace','Banzai','ClientServiceWorkerMessage','Run','ServiceWorkerRegistration','forEachObject','mixInEventEmitter','performance'],(function a(b,c,d,e,f,g,h){












var i=false,
j=false,
k=[],


l,
m,
n,
o={},
p={},

q=false,
r=false;

function s(){
if(i)
return;

i=true;

c('Banzai').subscribe(c('Banzai').SHUTDOWN,function(){
u._postAll();});}



function t(){
m=null;
l=null;
p={};
o={};
n=null;
r=false;}


var u=

{isEnabled:function v(){
return j;},









createTrace:function v(){
s();
var w=new (c('ArtilleryTrace'))();
w.setOnPost(function(x){
u.emitAndHold('posttrace',x);});

k.push(w);
return w;},










getPageTrace:function v(){
l||h(0,'Artillery.setPageTraceID is not called');
if(n)
return n;

var w=u.createTrace().setID(l,m);
c('forEachObject')(o,function(x,y,z){
w.addProperty(y,x);});

c('forEachObject')(p,function(x,y,z){
w.addTagset(y,x);});

n=w;
return w;},


setPageProperties:function v(w){
o=w;},


addPageTagset:function v(w,x){
if(n==null){
p[w]=x;}else 

n.addTagset(w,x);},




setActivePolicies:function v(w){
this.addPageTagset('active_policies',w);
this.addPageTagset('policy',w);},


getPageActivePolicies:function v(){
return this.getPageTagset('active_policies');},

enableLogServiceWorker:function v(){
if(c('ServiceWorkerRegistration').isSupported())
q=true;},


getPageProperty:function v(w){
if(n==null){
return o[w];}else 

return n.getProperty(w);},


getPageTagset:function v(w){
if(n==null){
return p[w];}else 

return n.getTagset(w);},






enable:function v(){
j=true;
if(!r){
c('Run').onLeave(t);
r=true;}},



disable:function v(){
j=false;},



setPageTraceID:function v(w,x){
if(l===w&&m===x)
return;


!l&&!m||h(0,
'Don\'t call Artillery.setPageTraceID more than once');

l=w;
m=x;
if(q&&c('performance')&&

c('performance').timing&&
c('performance').timing.navigationStart){

var y=new (c('ClientServiceWorkerMessage'))
('asw-sendStartupData',

{traceID:m,
windowStart:c('performance').timing.navigationStart},

null);

y.sendViaController();}},



addPiggyback:function v(w,x){
if(window.CavalryLogger)
window.CavalryLogger.getInstance().addPiggyback(w,x);},



_postAll:function v(){
k.forEach(function(w){return !w.isPosted()&&w.post();});}};



c('mixInEventEmitter')(u,{posttrace:true});

f.exports=u;}),null);

/** shared/core/compareString.js */






__d('compareString',[],(function a(b,c,d,e,f,g){

'use strict';




function h(i,j){
if(i<j){
return -1;}else
if(i===j){
return 0;}else 

return 1;}



f.exports=h;}),null);

/** shared/fbjs/functional/groupArray.js */






__d('groupArray',[],(function a(b,c,d,e,f,g){

'use strict';










function h
(i,
j){

var k={};
i.forEach(function(l,m){
var n=j(l,m,i);
if(!k[n])
k[n]=[];

k[n].push(l);});

return k;}


f.exports=h;}),null);
