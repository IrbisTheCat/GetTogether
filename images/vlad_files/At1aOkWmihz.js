if (self.CavalryLogger) { CavalryLogger.start_js(["rOP\/z"]); }

/** js/components/Tokenizer/DraggableToken.react.js */






__d('DraggableToken.react',['cx','React','ReactDOM','Rect','emptyFunction','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,











k=c('React').PropTypes,l=c('React').PureComponent,




















m=
{isDragDropEnabled:true,
onTokenDragEnd:c('emptyFunction'),
onTokenDragLeave:c('emptyFunction'),
onTokenDragOver:c('emptyFunction'),
onTokenDragStart:c('emptyFunction'),
onTokenDrop:c('emptyFunction')};i=babelHelpers.inherits


(n,
l);j=i&&i.prototype;function n(){var o,p;'use strict';for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=j.constructor).call.apply(o,[this].concat(r)),this.


lastDragEventPageX=null,this.














$DraggableToken_getNodeToDisplayWhenDragging=function(){
var t=c('ReactDOM').findDOMNode(this.$DraggableToken_draggableTokenRef);
if(this.props.draggableImageClass&&t){

var u=t.getElementsByClassName
(this.props.draggableImageClass);

if(u.length>0)
return u[0];}



return t;}.
bind(this),this.

$DraggableToken_onTokenDragStart=function(event){
var t=event.dataTransfer;
if(t){

t.setData('text','');





if(t.setDragImage)
t.setDragImage(this.$DraggableToken_getNodeToDisplayWhenDragging(),0,0);


t.effectAllowed='move';}


this.props.onTokenDragStart(this.props.entry,this.props.index);}.
bind(this),this.

$DraggableToken_onTokenDragEnd=function(event){
this.props.onTokenDragEnd(this.props.entry,this.props.index);}.
bind(this),this.

$DraggableToken_onTokenDragLeave=function(event){
this.props.onTokenDragLeave(this.props.entry,this.props.index);}.
bind(this),this.

$DraggableToken_onTokenDragOver=function(event){
event.preventDefault();
event.stopPropagation();

var t=event.dataTransfer;
if(t)
t.dropEffect='move';


if(event.pageX!==this.lastDragEventPageX){
var u=c('ReactDOM').findDOMNode(this),
v=c('Rect').getElementBounds(u).getCenter().x,
w=event.pageX<v;

this.props.onTokenDragOver
(this.props.entry,
this.props.index,
w);}}.


bind(this),this.

$DraggableToken_onTokenDrop=function(event){
event.stopPropagation();
this.props.onTokenDrop(this.props.entry,this.props.index);}.
bind(this),p;}n.prototype.

render=function(){'use strict';
if(!this.props.isDragDropEnabled){
var o=c('React').Children.only(this.props.children);
if(!o)
return o;


var p=c('joinClasses')
(o.props.className,
this.props.className);

return c('React').cloneElement(o,{className:p});}



return (c('React').createElement('div',
{className:c('joinClasses')
(this.props.className,
"_5o8l"),

draggable:true,
onDragStart:this.$DraggableToken_onTokenDragStart,
onDragEnd:this.$DraggableToken_onTokenDragEnd,
onDragOver:this.$DraggableToken_onTokenDragOver,
onDragLeave:this.$DraggableToken_onTokenDragLeave,
onDrop:this.$DraggableToken_onTokenDrop,
ref:function(q){return this.$DraggableToken_draggableTokenRef=q;}.bind(this)},
this.props.children));};


n.propTypes={onTokenDragEnd:k.func.isRequired,onTokenDragLeave:k.func.isRequired,onTokenDragOver:k.func.isRequired,onTokenDragStart:k.func.isRequired,onTokenDrop:k.func.isRequired,index:k.number,isDragDropEnabled:k.bool};n.defaultProps=m;


f.exports=n;}),null);

/** js/components/Tokenizer/DraggableTokenMixin.react.js */






__d('DraggableTokenMixin.react',['DraggableToken.react','React'],(function a(b,c,d,e,f,g){




var h=
{propTypes:c('DraggableToken.react').propTypes,

getDefaultProps:function i(){
return c('DraggableToken.react').defaultProps;},


renderDraggableToken:function i(j){

return (c('React').createElement(c('DraggableToken.react'),
{className:this.props.className,
draggableImageClass:this.props.draggableImageClass,
entry:this.props.entry,
index:this.props.index,
isDragDropEnabled:this.props.isDragDropEnabled,
onTokenDragEnd:this.props.onTokenDragEnd,
onTokenDragLeave:this.props.onTokenDragLeave,
onTokenDragOver:this.props.onTokenDragOver,
onTokenDragStart:this.props.onTokenDragStart,
onTokenDrop:this.props.onTokenDrop},
j));}};





f.exports=h;}),null);

/** js/components/core/UI/Tokenizer/TokenizerToken.react.js */





__d('TokenizerToken.react',['cx','fbt','CloseButton.react','React','SearchableEntry','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j,k,









l=c('React').PropTypes;j=babelHelpers.inherits

(m,c('React').Component);k=j&&j.prototype;function m(){var n,o;'use strict';for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=k.constructor).call.apply(n,[this].concat(q)),this.







































$TokenizerToken_onClick=function(s){
s.preventDefault();
this.props.onRemove(this.props.entry);}.
bind(this),o;}m.prototype.render=function(){'use strict';var n;if(!this.props.disabled&&this.props.onRemove)n=c('React').createElement(c('CloseButton.react'),{'aria-label':i._(["Remove {item}","77483de97c07d982ae76a79d0396e1ea"],[i.param('item',this.props.label)]),className:"_58zx",size:'small',onClick:this.$TokenizerToken_onClick});var o="_58zy"+(this.props.disabled?' '+"_12l9":'')+(this.props.highlighted?' '+"_58zz":'');return c('React').createElement('span',babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,o),label:null}),this.props.glyph,this.props.label,n);};m.propTypes={label:l.string.isRequired,entry:l.instanceOf(c('SearchableEntry')),highlighted:l.bool,glyph:l.element,onRemove:l.func,disabled:l.bool};


f.exports=m;}),null);

/** js/logging/generated/AccessibilityWebLogicalGridTypedLogger.js */





__d('AccessibilityWebLogicalGridTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){
'use strict';



















function h(){
this.clear();}
h.prototype.





log=function(){
c('GeneratedLoggerUtils').log('logger:AccessibilityWebLogicalGridLoggerConfig',this.$AccessibilityWebLogicalGridTypedLogger_data,c('Banzai').BASIC);};
h.prototype.







logVital=function(){
c('GeneratedLoggerUtils').log('logger:AccessibilityWebLogicalGridLoggerConfig',this.$AccessibilityWebLogicalGridTypedLogger_data,c('Banzai').VITAL);};
h.prototype.




clear=function(){
this.$AccessibilityWebLogicalGridTypedLogger_data={};
return this;};
h.prototype.






updateData=function(j){








this.$AccessibilityWebLogicalGridTypedLogger_data=babelHelpers['extends']({},
this.$AccessibilityWebLogicalGridTypedLogger_data,
j);

return this;};
h.prototype.




setVC=function(j){
this.$AccessibilityWebLogicalGridTypedLogger_data.vc=j;
return this;};
h.prototype.




updateExtraData=function(j){
j=c('nullthrows')(c('GeneratedLoggerUtils').serializeMap(j));
c('GeneratedLoggerUtils').checkExtraDataFieldNames
(j,
i);

this.$AccessibilityWebLogicalGridTypedLogger_data=babelHelpers['extends']({},
this.$AccessibilityWebLogicalGridTypedLogger_data,
j);

return this;};
h.prototype.




addToExtraData=function(j,k){
var l={};
l[j]=k;
return this.updateExtraData(l);};








var i=
{vc:true};


f.exports=h;}),null);

/** js/components/core/XUI/LogicalGrid/LogicalGridController.js */





__d('LogicalGridController',['AccessibilityWebLogicalGridTypedLogger','immutable','mixInEventEmitter','RTLKeys','TabbableElements'],(function a(b,c,d,e,f,g){




var h=c('immutable').Map,
i=c('immutable').OrderedMap,
j=c('immutable').Set;k.













































































































































create=function(){

var n=arguments.length<=0||arguments[0]===undefined?[]:arguments[0];'use strict';
return new k
(l.createFromArray
(n.map(function(o){return k.createRow(o);})));};


k.

createRow=function(){

var n=arguments.length<=0||arguments[0]===undefined?[]:arguments[0];'use strict';
return m.createFromArray
(n.map
(function(o){return k.createCell(o);}));};


k.

createCell=
function(n){
'use strict';var o=





n||{},p=o.refElement,q=o.disableFocusRecovery,r=q===undefined?false:q,s=o.isRowHeader,t=s===undefined?false:s,u=o.isTabbable,v=u===undefined?false:u;

return {refElement:p,
disableFocusRecovery:r,
isRowHeader:t,
isTabbable:v};};

k.

coordinatesAreEquivalent=
function(n,
o){
'use strict';

return (n!=null&&
o!=null&&
n[0]===o[0]&&
n[1]===o[1]);};



function k(n){'use strict';
this.$LogicalGridController_focusedCoordinate=null;
this.$LogicalGridController_defaultCellCoordinate=[0,0];
this.$LogicalGridController_gridMap=n;
this.$LogicalGridController_lastFocusedCellCoordinate=null;
this.$LogicalGridController_preserveFocusCellCoordinate=false;
this.$LogicalGridController_untabbedElements=new h();}
k.prototype.

getGridMap=function(){'use strict';
return this.$LogicalGridController_gridMap;};
k.prototype.

getRowMap=function(n){'use strict';
if(n!=null)
return this.$LogicalGridController_gridMap.get(n);

return null;};
k.prototype.

getCellMap=function(n){'use strict';

var o=

n[0],p=n[1];
if(o!=null&&p!=null){
var q=this.$LogicalGridController_gridMap.get(o);
if(q)
return q.get(p);}


return null;};
k.prototype.

putRow=function(n){'use strict';
if(n!=null){
var o=this.$LogicalGridController_gridMap.get(n);
if(!o){
o=k.createRow();
var p=this.$LogicalGridController_gridMap;
this.$LogicalGridController_gridMap=this.$LogicalGridController_gridMap.set
(n,
o);

this.emit
('rowPut',
p,
this.$LogicalGridController_gridMap,
o,
n);}}};



k.prototype.




putCell=
function(n,
o){
'use strict';

var p=

n[0],q=n[1];
if(p!=null&&q!=null){
var r=this.$LogicalGridController_gridMap;
this.putRow(p);
var s=this.getRowMap(p);
if(s){
var t=s.get(q);
if(!t){
t=k.createCell(o);
this.$LogicalGridController_gridMap=this.$LogicalGridController_gridMap.setIn(n,t);
this.emit('cellPut',r,this.$LogicalGridController_gridMap,t,n);}}}};



k.prototype.

activateCell=function(){'use strict';
if(this.$LogicalGridController_focusedCoordinate){
var n=this.getCellMap
(this.$LogicalGridController_focusedCoordinate);

this.emit('cellActivate',this.$LogicalGridController_focusedCoordinate,n);}};

k.prototype.

deactivateCell=function(){'use strict';
this.emit('cellDeactivate');};
k.prototype.

focusCell=function(n){'use strict';
var o=void 0,
p=false;

if(this.$LogicalGridController_focusedCoordinate){
o=this.getCellMap
(this.$LogicalGridController_focusedCoordinate);}else 


p=true;

var q=this.getCellMap(n);
if(q&&!this.isFocusedCoordinate(n)){
if(o)
this.emit('cellBlur',this.$LogicalGridController_focusedCoordinate,o);

this.$LogicalGridController_focusedCoordinate=n;
if(p)
this.emit('manageFocus',true);

var r=this.$LogicalGridController_lastFocusedCellCoordinate;
this.$LogicalGridController_lastFocusedCellCoordinate=this.$LogicalGridController_focusedCoordinate;
this.emit
('cellFocus',
n,
r,
q);}};


k.prototype.


$LogicalGridController_getNearestValidCoordinate=
function(n){

var o=arguments.length<=1||arguments[1]===undefined?function(){return true;}:arguments[1];'use strict';

var p=

n[0],q=n[1],
r=this.getGridMap();

if(r.size===0)
return n;



if(!r.get(p)){
var s=r.
keySeq().
filter
(function(w){return r.
get(w).
filter(function(x){return o(x);}).
size>0;}).

sort(),
t=s.findLastIndex(function(w){return w<=p;});
p=s.get
(t>=0?t:
s.findIndex(function(w){return w>=p;}));}




if(!r.get(p).get(q)){
var u=r.
get(p).
keySeq().
filter(function(w){return o(r.get(p).get(w));}).
sort(),
v=u.
findLastIndex(function(w){return w<=q;});
q=u.get
(v>=0?v:
u.findIndex(function(w){return w>=q;}));}



return [p,q];};
k.prototype.



$LogicalGridController_getNextRowIndex=
function(n,
o){


var p=arguments.length<=2||arguments[2]===undefined?function(){return true;}:arguments[2],q=arguments.length<=3||arguments[3]===undefined?false:arguments[3];'use strict';
var r=this.getGridMap(),
s=n[0],


t=r.
keySeq().
filter
(function(w){return r.
get(w).
filter(function(x){return p(x);}).
size>0;}).

sort();


if(q)
if(o>0){
return t.max();}else 

return t.min();







var u=void 0;
if(o>0){
u=t.findLastIndex
(function(w){return w<=s;});

if(u===-1){
u=0;}else
if(u!==t.size-1)
u+=o;}else{


u=t.findIndex
(function(w){return w>=s;});

if(u===-1){
u=t.size-1;}else
if(u!==0)
u+=o;}



var v=t.get(u);
if(v===undefined)
return null;


return v;};
k.prototype.




$LogicalGridController_getNextColumnIndex=
function(n,
o){


var p=arguments.length<=2||arguments[2]===undefined?function(){return true;}:arguments[2],q=arguments.length<=3||arguments[3]===undefined?false:arguments[3];'use strict';
var r=this.getGridMap(),
s=n[0],t=n[1],


u=r.get(s);
if(u===undefined)
return null;



var v=u.
keySeq().
filter(function(y){return p(r.get(s).get(y));}).
sort();


if(q){
if(o>0)
return v.max();

return v.min();}






var w=void 0;
if(o>0){
w=v.findLastIndex
(function(y){return y<=t;});

if(w===-1){
w=0;}else
if(w!==v.size-1){
w+=o;}else 


return null;}else{


w=v.findIndex
(function(y){return y>=t;});

if(w===-1){
w=v.size-1;}else
if(w!==0){
w+=o;}else 


return null;}



var x=v.get(w);
if(x===undefined)
return null;


return x;};
k.prototype.



$LogicalGridController_moveFocus=
function(n,
o){

var p=arguments.length<=2||arguments[2]===undefined?false:arguments[2];'use strict';
var q=this.getFocusedCellCoordinate();
if(!q)
return false;


var r=this.$LogicalGridController_getNearestValidCoordinate(q),
s=r[0],t=r[1],
u=r[0],v=r[1],
w=function ca(da){return !p||da.isTabbable;};


if(o!==0){
var x=this.$LogicalGridController_getNextColumnIndex
(r,
o,
w);



if(x===null){
var y=this.$LogicalGridController_getNextRowIndex
(r,
o,
w);



if(y!==s&&y!==null){
x=this.$LogicalGridController_getNextColumnIndex
([y,t],
-o,
w,
true);


if(x!==null){
s=y;
t=x;}}}else 



t=x;}else

if(n!==0){
var z=this.$LogicalGridController_getNextRowIndex
(r,
n,
w);


if(z!==null){var aa=
this.$LogicalGridController_getNearestValidCoordinate
([z,t],
w);s=aa[0];t=aa[1];}}





var ba=u!==s||
v!==t;

if(ba){

this.focusCell
([s,
t]);

new (c('AccessibilityWebLogicalGridTypedLogger'))().log();}


return ba;};
k.prototype.

$LogicalGridController_moveFocusFully=
function(n,
o){
'use strict';
var p=this.getFocusedCellCoordinate();
if(!p)
return false;


var q=this.$LogicalGridController_getNearestValidCoordinate(p),
r=q[0],s=q[1],
t=q[0],u=q[1];


if(o)
r=this.$LogicalGridController_getNextRowIndex
(q,
n,
function(){return true;},
true);



if(r!==null){

var v=this.$LogicalGridController_getNextColumnIndex
([r,s],
n,
function(){return true;},
true);


if(v!==null)
s=v;}else 


r=t;



var w=t!==r||
u!==s;

if(w){
this.focusCell
([r,
s]);

new (c('AccessibilityWebLogicalGridTypedLogger'))().log();}


return w;};
k.prototype.

moveFocusLeft=function(){'use strict';
return this.$LogicalGridController_moveFocus(0,-1);};
k.prototype.

moveFocusRight=function(){'use strict';
return this.$LogicalGridController_moveFocus(0,1);};
k.prototype.

moveFocusUp=function(){'use strict';
return this.$LogicalGridController_moveFocus(-1,0);};
k.prototype.

moveFocusDown=function(){'use strict';
return this.$LogicalGridController_moveFocus(1,0);};
k.prototype.

moveFocusHome=function(n){'use strict';
return this.$LogicalGridController_moveFocusFully(-1,n);};
k.prototype.

moveFocusEnd=function(n){'use strict';
return this.$LogicalGridController_moveFocusFully(1,n);};
k.prototype.

tabFocusForward=function(){'use strict';
return this.$LogicalGridController_moveFocus(0,1,true);};
k.prototype.

tabFocusBackward=function(){'use strict';
return this.$LogicalGridController_moveFocus(0,-1,true);};
k.prototype.

recoverFocus=function(){'use strict';
var n=this.$LogicalGridController_preserveFocusCellCoordinate&&
this.getLastFocusedCellCoordinate(),
o=this.getFocusedCellCoordinate()||
n||
this.getDefaultCellCoordinate();
this.focusCell
(this.$LogicalGridController_getNearestValidCoordinate(o));};

k.prototype.

isFocusedCoordinate=function(n){'use strict';
return k.coordinatesAreEquivalent
(n,
this.getFocusedCellCoordinate());};

k.prototype.

isManagingFocus=function(){'use strict';
return !!this.$LogicalGridController_focusedCoordinate;};
k.prototype.

clearFocusedCell=function(){'use strict';
var n=!!this.$LogicalGridController_focusedCoordinate;
if(this.$LogicalGridController_focusedCoordinate){
var o=this.getCellMap
(this.$LogicalGridController_focusedCoordinate);

this.emit('cellBlur',this.$LogicalGridController_focusedCoordinate,o);}

this.$LogicalGridController_focusedCoordinate=null;
if(n)
this.emit('manageFocus',false);

this.deactivateCell();};
k.prototype.

clearLastFocusedCell=function(){'use strict';
this.$LogicalGridController_lastFocusedCellCoordinate=null;};
k.prototype.

getFocusedCell=function(){'use strict';
var n=this.$LogicalGridController_focusedCoordinate;
if(n)
return this.getCellMap(n);

return null;};
k.prototype.

getFocusedCellCoordinate=function(){'use strict';
return this.$LogicalGridController_focusedCoordinate;};
k.prototype.

getLastFocusedCellCoordinate=function(){'use strict';
return this.$LogicalGridController_lastFocusedCellCoordinate;};
k.prototype.

preserveFocusCellCoordinate=function(n){'use strict';
this.$LogicalGridController_preserveFocusCellCoordinate=n;};
k.prototype.




setGridRef=
function(n){
'use strict';
this.$LogicalGridController_gridRef=n;};
k.prototype.

getGridRef=function(){'use strict';
return this.$LogicalGridController_gridRef;};
k.prototype.




muteTabbables=function(){var n,o=this,p=arguments.length<=0||arguments[0]===undefined?[]:arguments[0];'use strict';
if(!this.$LogicalGridController_gridRef)
return;


var q=c('TabbableElements').find(this.$LogicalGridController_gridRef);

if(q.length)(function(){
var r=new j(q),
s=o.$LogicalGridController_gridMap.
toList().
flatten(true).
map(function(t){return t.refElement;}).
map(function(t){
return (r.filter
(function(u){return t.contains(u);}));}).


flatten(true).
toSet();


o.$LogicalGridController_untabbedElements=r.
subtract(s).
subtract(new j(p)).
toMap().
mapEntries
(function(t){var u=t[0];return [u,u.getAttribute('tabindex')||''];}).

merge(o.$LogicalGridController_untabbedElements);

o.$LogicalGridController_untabbedElements.keySeq().forEach
(function(t){
if(t.getAttribute('tabindex')!=='-1')
t.setAttribute('tabindex','-1');});})

();};


k.prototype.

restoreTabbables=function(){'use strict';
this.$LogicalGridController_untabbedElements.entrySeq().forEach
(function(n){var o=n[0],p=n[1];
if(p===''){
o.removeAttribute('tabindex');}else 

o.setAttribute('tabindex',p);});};



k.prototype.




purgeCell=function(n){'use strict';

var o=

n[0],p=n[1],
q=void 0;
if(o!=null&&p!=null){
var r=this.getCellMap(n);
if(r){
q=r;
this.$LogicalGridController_gridMap=this.$LogicalGridController_gridMap.deleteIn(n);}}


return q;};
k.prototype.




deleteCell=function(n){'use strict';
var o=this.$LogicalGridController_gridMap,
p=this.purgeCell(n);
if(p)
this.emit
('cellDelete',
o,
this.$LogicalGridController_gridMap,
p,
n);};


k.prototype.




purgeRow=function(n){'use strict';
if(n!=null){
var o=this.getRowMap(n);
if(o){

o.forEach(function(p,q){
if(n!=null)
this.purgeCell([n,q]);}.

bind(this),this);

this.$LogicalGridController_gridMap=this.$LogicalGridController_gridMap['delete'](n);}}};


k.prototype.




deleteRow=function(n){'use strict';
if(n!=null){
var o=this.getRowMap(n);
if(o){
var p=this.$LogicalGridController_gridMap;

o.forEach(function(q,r){
if(n!=null)
this.deleteCell([n,r]);}.

bind(this),this);

this.$LogicalGridController_gridMap=this.$LogicalGridController_gridMap['delete'](n);
this.emit
('rowDelete',
p,
this.$LogicalGridController_gridMap,
o,
n);}}};



k.prototype.

setDefaultCellCoordinate=function(n){'use strict';
this.$LogicalGridController_defaultCellCoordinate=n;};
k.prototype.

getDefaultCellCoordinate=function(){'use strict';
return this.$LogicalGridController_defaultCellCoordinate;};
k.TRAVERSAL_KEY_CODES=new j([c('RTLKeys').UP,c('RTLKeys').DOWN,c('RTLKeys').getRight(),c('RTLKeys').getLeft(),c('RTLKeys').TAB]);


c('mixInEventEmitter')(k,
{cellActivate:true,
cellBlur:true,
cellDeactivate:true,
cellDelete:true,
cellFocus:true,
cellPut:true,
manageFocus:true,
rowDelete:true,
rowPut:true});


var l=
{createFromArray:function n
(o){

return i
(o.map
(function(p,q){return [q,p];}));}},





m=
{createFromArray:function n
(o){

return i
(o.map
(function(p,q){return [q,p];}));}};





f.exports=k;}),null);

/** js/components/core/XUI/LogicalGrid/LogicalGridGKCheck.js */





__d('LogicalGridGKCheck',['AccessibilityConfig'],(function a(b,c,d,e,f,g){



var h=
{passed:function i(){
return c('AccessibilityConfig').a11yLogicalGridComponent;},


decorator:function i(j,k){
return function(){
if(c('AccessibilityConfig').a11yLogicalGridComponent)
return j.apply(k,Array.prototype.slice.call(arguments));};}};





f.exports=h;}),null);

/** js/components/core/XUI/LogicalGrid/LogicalGridFocusHook.react.js */





__d('LogicalGridFocusHook.react',['LogicalGridController','LogicalGridGKCheck','React','SubscriptionsHandler','clearTimeout','emptyFunction','setTimeout'],(function a(b,c,d,e,f,g){var h,i,











j=c('React').Component,
k=c('React').PropTypes,


l=c('LogicalGridGKCheck').decorator;h=babelHelpers.inherits

















(m,
j);i=h&&h.prototype;


















function m
(n){
'use strict';
i.constructor.call(this,n);this.


































$LogicalGridFocusHook_addListeners=function(){
var o=this.$LogicalGridFocusHook_logicalGridController;

this.$LogicalGridFocusHook_subscriptionsHandler.addSubscriptions
(o.addListener
('manageFocus',
this.$LogicalGridFocusHook_onManageFocus));}.


bind(this);this.






$LogicalGridFocusHook_onFocus=function(event){
event.preventDefault();
event.stopPropagation();
this.props.onFocus(event);}.
bind(this);this.

$LogicalGridFocusHook_onManageFocus=
function(o){

var p=o?-1:0;
this.$LogicalGridFocusHook_timeouts.push(c('setTimeout')(function(){
this.setState
({tabIndex:p});}.

bind(this),0));}.
bind(this);this.

$LogicalGridFocusHook_onRef=function(o){
this.props.onRef(o);}.
bind(this);this.$LogicalGridFocusHook_logicalGridController=this.props.logicalGridController;this.$LogicalGridFocusHook_subscriptionsHandler=new (c('SubscriptionsHandler'))();this.$LogicalGridFocusHook_timeouts=[];this.$LogicalGridFocusHook_addListeners=l(this.$LogicalGridFocusHook_addListeners,this);this.state={tabIndex:0};}m.prototype.componentWillMount=function(){'use strict';this.$LogicalGridFocusHook_addListeners();};m.prototype.componentWillUnmount=function(){'use strict';this.$LogicalGridFocusHook_subscriptionsHandler.release();var n=this.$LogicalGridFocusHook_timeouts.pop();while(n){c('clearTimeout')(n);n=this.$LogicalGridFocusHook_timeouts.pop();}};m.prototype.render=function(){'use strict';return c('React').createElement('span',{className:this.props.className,onBlur:this.$LogicalGridFocusHook_onBlur,onFocus:this.$LogicalGridFocusHook_onFocus,ref:this.$LogicalGridFocusHook_onRef,tabIndex:this.state.tabIndex});};m.prototype.$LogicalGridFocusHook_onBlur=function(event){'use strict';event.preventDefault();event.stopPropagation();};m.propTypes={logicalGridController:k.instanceOf(c('LogicalGridController')),onFocus:k.func,onRef:k.func};m.defaultProps={onRef:c('emptyFunction')};


f.exports=m;}),null);

/** js/components/core/XUI/LogicalGrid/LogicalGrid.react.js */





__d('LogicalGrid.react',['cx','Focus','LogicalGridController','LogicalGridFocusHook.react','LogicalGridGKCheck','React','ReactDOM','RTLKeys','SubscriptionsHandler','debounce','emptyFunction','Event','joinClasses','setTimeout'],(function a(b,c,d,e,f,g,h){var i,j,













k=c('Event').getKeyCode,




l=c('React').Component,
m=c('React').PropTypes,


n=c('LogicalGridGKCheck').passed,
o=c('LogicalGridGKCheck').decorator,


p=20,
q=20;i=babelHelpers.inherits




































































(r,l);j=i&&i.prototype;













































































function r
(s,
t){
'use strict';
j.constructor.call(this,s);this.








































































































































































































$LogicalGrid_addListeners=function(){
var u=this.$LogicalGrid_logicalGridController;

this.$LogicalGrid_subscriptionsHandler.addSubscriptions
(u.addListener
('cellActivate',
this.$LogicalGrid_onCellActivate),

u.addListener
('cellBlur',
this.$LogicalGrid_onCellBlur),

u.addListener
('cellDeactivate',
this.$LogicalGrid_onCellDeactivate),

u.addListener
('cellDelete',
this.$LogicalGrid_onCellDelete),

u.addListener
('cellFocus',
this.$LogicalGrid_onCellFocus),

u.addListener
('cellPut',
this.$LogicalGrid_onCellPut),

u.addListener
('manageFocus',
this.$LogicalGrid_onManageFocus),

u.addListener
('rowDelete',
this.$LogicalGrid_onRowDelete),

u.addListener
('rowPut',
this.$LogicalGrid_onRowPut));}.


bind(this);this.

$LogicalGrid_forceUpdate=c('debounce')(function(){
this.forceUpdate();}.
bind(this),p);this.

$LogicalGrid_handleControlKeys=function(event){
var u=k(event),
v=this.$LogicalGrid_logicalGridController;

switch(u){
case c('RTLKeys').TAB:
this.$LogicalGrid_ignoreBlur();
break;
case c('RTLKeys').ESC:
v.deactivateCell();
break;
case c('RTLKeys').UP:
case c('RTLKeys').DOWN:
case c('RTLKeys').getLeft():
case c('RTLKeys').getRight():
case c('RTLKeys').HOME:
case c('RTLKeys').END:
event.preventDefault();
break;

default:return;}}.

bind(this);this.

$LogicalGrid_handleTraversalKeys=function(event){
var u=k(event),
v=this.$LogicalGrid_logicalGridController,
w=true;

switch(u){
case c('RTLKeys').TAB:
var x=event.shiftKey?
v.tabFocusBackward():
v.tabFocusForward();
if(!x){
this.$LogicalGrid_reset();
return;}

break;
case c('RTLKeys').UP:
v.moveFocusUp();
break;
case c('RTLKeys').DOWN:
v.moveFocusDown();
break;
case c('RTLKeys').getLeft():
v.moveFocusLeft();
break;
case c('RTLKeys').getRight():
v.moveFocusRight();
break;
case c('RTLKeys').HOME:
v.moveFocusHome(event.ctrlKey);
break;
case c('RTLKeys').END:
v.moveFocusEnd(event.ctrlKey);
break;

default:w=false;
return;}


if(w)
event.preventDefault();




if(!this.props.isCompositeWidget&&
c('LogicalGridController').TRAVERSAL_KEY_CODES.has(u))

this.$LogicalGrid_setHideFocusRing(false);}.

bind(this);this.

$LogicalGrid_ignoreBlur=function(){
this.$LogicalGrid_shouldIgnoreBlur=true;
c('setTimeout')(function(){
this.$LogicalGrid_shouldIgnoreBlur=false;}.
bind(this),0);}.
bind(this);this.

$LogicalGrid_onActivedescendant=function(u){

if(this.props.isCompositeWidget&&
u!==this.$LogicalGrid_ariaActivedescendant){

var v=this.$LogicalGrid_logicalGridController.getGridRef();
if(v){
this.$LogicalGrid_ariaActivedescendant=u;



v.setAttribute('aria-activedescendant',u);}}}.


bind(this);this.

$LogicalGrid_onBlur=function(event){
if(!this.$LogicalGrid_shouldIgnoreBlur)
this.$LogicalGrid_reset();}.

bind(this);this.

$LogicalGrid_onCellActivate=function(){
this.$LogicalGrid_hasActiveCell=true;
this.$LogicalGrid_ignoreBlur();
if(this.props.isCompositeWidget)
this.$LogicalGrid_setHideFocusRing(false);}.

bind(this);this.

$LogicalGrid_onCellBlur=function(){


this.$LogicalGrid_ignoreBlur();}.
bind(this);this.

$LogicalGrid_onCellDeactivate=function(){
this.$LogicalGrid_hasActiveCell=false;
if(this.$LogicalGrid_logicalGridController.isManagingFocus()){
this.$LogicalGrid_ignoreBlur();
if(this.props.isCompositeWidget){
this.$LogicalGrid_setHideFocusRing(true);
c('Focus').set(this.$LogicalGrid_logicalGridController.getGridRef());}

this.$LogicalGrid_recoverFocus();}}.

bind(this);this.

$LogicalGrid_onCellDelete=
function(u,
v,
w,
x){

if(this.$LogicalGrid_logicalGridController.isFocusedCoordinate(x))
if(!w.disableFocusRecovery){
this.$LogicalGrid_ignoreBlur();
this.$LogicalGrid_recoverFocus();}else 

this.$LogicalGrid_reset();}.


bind(this);this.

$LogicalGrid_onCellFocus=
function(u,
v,
w){

this.props.onCellFocus
(u,
v,
w);}.

bind(this);this.

$LogicalGrid_onCellPut=function(){
this.$LogicalGrid_ignoreBlur();}.
bind(this);this.

$LogicalGrid_onClick=function(){
this.$LogicalGrid_setHideFocusRing(true);}.
bind(this);this.

$LogicalGrid_onHookBottomRef=function(u){
this.$LogicalGrid_gridHookRefs[1]=u;}.
bind(this);this.

$LogicalGrid_onHookFocus=function(){
if(this.props.isCompositeWidget){
this.$LogicalGrid_setHideFocusRing(true);
c('Focus').set(this.$LogicalGrid_logicalGridController.getGridRef());}else 

this.$LogicalGrid_setHideFocusRing(false);

this.$LogicalGrid_recoverFocus();}.
bind(this);this.

$LogicalGrid_onHookTopRef=function(u){
this.$LogicalGrid_gridHookRefs[0]=u;}.
bind(this);this.

$LogicalGrid_onKeyDown=function(event){
if(!this.$LogicalGrid_logicalGridController.isManagingFocus())
return;


if(this.$LogicalGrid_hasActiveCell){
this.$LogicalGrid_handleControlKeys(event);}else 

this.$LogicalGrid_handleTraversalKeys(event);}.

bind(this);this.

$LogicalGrid_onKeyPress=function(event){
var u=this.$LogicalGrid_logicalGridController.getFocusedCellCoordinate()||[],
v=u[0];
if(v!=null)
this.props.onRowKeyPress(event,v);}.

bind(this);this.

$LogicalGrid_onManageFocus=
function(u){

if(u){
this.$LogicalGrid_logicalGridController.muteTabbables(this.$LogicalGrid_gridHookRefs);}else 

c('setTimeout')(function(){
this.$LogicalGrid_logicalGridController.restoreTabbables();}.
bind(this),0);

this.props.onManageFocus(u);}.
bind(this);this.

$LogicalGrid_onRowDelete=
function(u,
v){


if(u.count()===1&&
v.count()===0)

this.$LogicalGrid_forceUpdate();}.

bind(this);this.

$LogicalGrid_onRowPut=
function(u,
v){


if(u.count()===0&&
v.count()===1)

this.$LogicalGrid_forceUpdate();}.

bind(this);this.

$LogicalGrid_recoverFocus=c('debounce')(function(){
this.$LogicalGrid_logicalGridController.recoverFocus();}.
bind(this),q);this.

$LogicalGrid_reset=function(){var u=arguments.length<=0||arguments[0]===undefined?false:arguments[0];
this.$LogicalGrid_logicalGridController.clearFocusedCell();
if(u)
this.$LogicalGrid_logicalGridController.clearLastFocusedCell();


if(this.props.isCompositeWidget){
var v=this.$LogicalGrid_logicalGridController.getGridRef();
if(v){
this.$LogicalGrid_ariaActivedescendant='';
v.setAttribute('aria-activedescendant','');}}}.


bind(this);this.

$LogicalGrid_setHideFocusRing=function(u){

if(u!==this.state.hideFocusRing&&
!this.props.isCompositeWidget)

this.setState
({hideFocusRing:u});}.


bind(this);this.

$LogicalGrid_setGridRef=
function(u){





this.$LogicalGrid_logicalGridController.setGridRef(c('ReactDOM').findDOMNode(u));}.
bind(this);this.$LogicalGrid_ariaActivedescendant='';this.$LogicalGrid_gridHookRefs=[null,null];this.$LogicalGrid_hasActiveCell=false;this.$LogicalGrid_logicalGridController=c('LogicalGridController').create();this.$LogicalGrid_logicalGridController.preserveFocusCellCoordinate(this.props.preserveFocusCellCoordinate);this.$LogicalGrid_shouldIgnoreBlur=false;this.$LogicalGrid_subscriptionsHandler=new (c('SubscriptionsHandler'))();this.$LogicalGrid_addListeners=o(this.$LogicalGrid_addListeners,this);this.$LogicalGrid_forceUpdate=o(this.$LogicalGrid_forceUpdate,this);this.$LogicalGrid_handleControlKeys=o(this.$LogicalGrid_handleControlKeys,this);this.$LogicalGrid_handleTraversalKeys=o(this.$LogicalGrid_handleTraversalKeys,this);this.$LogicalGrid_ignoreBlur=o(this.$LogicalGrid_ignoreBlur,this);this.$LogicalGrid_onActivedescendant=o(this.$LogicalGrid_onActivedescendant,this);this.$LogicalGrid_onBlur=o(this.$LogicalGrid_onBlur,this);this.$LogicalGrid_onCellActivate=o(this.$LogicalGrid_onCellActivate,this);this.$LogicalGrid_onCellBlur=o(this.$LogicalGrid_onCellBlur,this);this.$LogicalGrid_onCellDeactivate=o(this.$LogicalGrid_onCellDeactivate,this);this.$LogicalGrid_onCellDelete=o(this.$LogicalGrid_onCellDelete,this);this.$LogicalGrid_onCellFocus=o(this.$LogicalGrid_onCellFocus,this);this.$LogicalGrid_onCellPut=o(this.$LogicalGrid_onCellPut,this);this.$LogicalGrid_onClick=o(this.$LogicalGrid_onClick,this);this.$LogicalGrid_onHookBottomRef=o(this.$LogicalGrid_onHookBottomRef,this);this.$LogicalGrid_onHookFocus=o(this.$LogicalGrid_onHookFocus,this);this.$LogicalGrid_onHookTopRef=o(this.$LogicalGrid_onHookTopRef,this);this.$LogicalGrid_onKeyDown=o(this.$LogicalGrid_onKeyDown,this);this.$LogicalGrid_onKeyPress=o(this.$LogicalGrid_onKeyPress,this);this.$LogicalGrid_onManageFocus=o(this.$LogicalGrid_onManageFocus,this);this.$LogicalGrid_onRowDelete=o(this.$LogicalGrid_onRowDelete,this);this.$LogicalGrid_onRowPut=o(this.$LogicalGrid_onRowPut,this);this.$LogicalGrid_recoverFocus=o(this.$LogicalGrid_recoverFocus,this);this.$LogicalGrid_reset=o(this.$LogicalGrid_reset,this);this.$LogicalGrid_setHideFocusRing=o(this.$LogicalGrid_setHideFocusRing,this);this.$LogicalGrid_setGridRef=o(this.$LogicalGrid_setGridRef,this);this.state={hideFocusRing:true};}r.prototype.getChildContext=function(){'use strict';return {logicalGridController:this.$LogicalGrid_logicalGridController,logicalGridIsCompositeWidget:this.props.isCompositeWidget,logicalGridOnActivedescendant:this.$LogicalGrid_onActivedescendant};};r.prototype.render=function(){var s,t=this;'use strict';var u=this.props,v=u.children,w=u.component,x=u.rowCount,y=0,z=this.$LogicalGrid_logicalGridController.getGridMap().count();if(x==null){y=z;}else y=x;var aa={className:c('joinClasses')(w.props.className,this.props.className)},ba=null,ca=null;if(n()&&z>0)(function(){var da=w.props,ea=da.onBlur,fa=ea===undefined?c('emptyFunction'):ea,ga=da.onClick,ha=ga===undefined?c('emptyFunction'):ga,ia=da.onKeyDown,ja=ia===undefined?c('emptyFunction'):ia,ka=da.onKeyPress,la=ka===undefined?c('emptyFunction'):ka,ma=da.ref,na=ma===undefined?c('emptyFunction'):ma;ba=c('React').createElement(c('LogicalGridFocusHook.react'),{className:(t.props.autofocus?"autofocus":'')+(' '+"accessible_elem"),logicalGridController:t.$LogicalGrid_logicalGridController,key:'uiLogicalGridHook-top',onFocus:t.$LogicalGrid_onHookFocus,onRef:t.$LogicalGrid_onHookTopRef});ca=c('React').createElement(c('LogicalGridFocusHook.react'),{className:"accessible_elem",logicalGridController:t.$LogicalGrid_logicalGridController,key:'uiLogicalGridHook-bottom',onFocus:t.$LogicalGrid_onHookFocus,onRef:t.$LogicalGrid_onHookBottomRef});var oa=t.props.isCompositeWidget?t.$LogicalGrid_ariaActivedescendant:null;aa={'aria-activedescendant':oa,'aria-rowcount':y,className:c('joinClasses')(aa.className,t.state.hideFocusRing?"_1lty":''),role:'grid',onBlur:function(event){fa(event);this.$LogicalGrid_onBlur(event);}.bind(t),onClick:function(event){ha(event);this.$LogicalGrid_onClick(event);}.bind(t),onKeyDown:function(event){ja(event);this.$LogicalGrid_onKeyDown(event);}.bind(t),onKeyPress:function(event){la(event);this.$LogicalGrid_onKeyPress(event);}.bind(t),ref:function(pa){na(pa);this.$LogicalGrid_setGridRef(pa);}.bind(t),tabIndex:-1};})();return c('React').cloneElement(w,aa,[ba,v,ca]);};r.prototype.componentWillMount=function(){'use strict';this.$LogicalGrid_logicalGridController.setDefaultCellCoordinate(this.props.initialFocusCellCoordinate);this.$LogicalGrid_addListeners();};r.prototype.componentDidMount=function(){'use strict';this.$LogicalGrid_logicalGridController.muteTabbables(this.$LogicalGrid_gridHookRefs);};r.prototype.componentWillReceiveProps=function(s){'use strict';if(this.props.initialFocusCellCoordinate!==s.initialFocusCellCoordinate)this.$LogicalGrid_logicalGridController.setDefaultCellCoordinate(s.initialFocusCellCoordinate);if(this.props.preserveFocusCellCoordinate!==s.preserveFocusCellCoordinate)this.$LogicalGrid_logicalGridController.preserveFocusCellCoordinate(s.preserveFocusCellCoordinate);};r.prototype.componentWillUpdate=function(){'use strict';if(this.$LogicalGrid_logicalGridController.getGridMap().size===0)this.$LogicalGrid_reset(true);};r.prototype.componentDidUpdate=function(){'use strict';if(this.$LogicalGrid_logicalGridController.isManagingFocus())this.$LogicalGrid_logicalGridController.muteTabbables(this.$LogicalGrid_gridHookRefs);};r.prototype.componentWillUnmount=function(){'use strict';this.$LogicalGrid_reset();this.$LogicalGrid_logicalGridController.restoreTabbables();this.$LogicalGrid_subscriptionsHandler.release();};r.contextTypes={logicalGridController:m.instanceOf(c('LogicalGridController'))};r.childContextTypes={logicalGridController:m.instanceOf(c('LogicalGridController')),logicalGridIsCompositeWidget:m.bool,logicalGridOnActivedescendant:m.func};r.propTypes={autofocus:m.bool,initialFocusCellCoordinate:m.arrayOf(m.number),component:m.element,onCellFocus:m.func,onManageFocus:m.func,onRowKeyPress:m.func,preserveFocusCellCoordinate:m.bool,rowCount:m.number};r.defaultProps={autofocus:false,initialFocusCellCoordinate:[0,0],isCompositeWidget:false,component:c('React').createElement('div'),onCellFocus:c('emptyFunction'),onManageFocus:c('emptyFunction'),onRowKeyPress:c('emptyFunction'),preserveFocusCellCoordinate:false};


f.exports=r;}),null);

/** js/components/core/XUI/LogicalGrid/strategies/LogicalGridFocusStrategyBase.js */





__d('LogicalGridFocusStrategyBase',['cx','csx','CSS','DOM','Map','TabbableElements','getOrCreateDOMID'],(function a(b,c,d,e,f,g,h,i){




























function j
(k,
l){
'use strict';
this.activeClass="_5-1x";
this.activeClassSelector="._5-1x";
this.elements=new (c('Map'))([]);
this.focusClass="_5-1y";
this.focusClassSelector="._5-1y";
this.isCompositeWidget=k;
this.onActivedescendant=l;
this.root=null;}
j.prototype.

update=function(k){'use strict';
if(k&&k!==this.root)
this.root=k;

this.neuterTabbables();};
j.prototype.

focus=function(k){'use strict';
if(k)
this.applyFocusClass(k);};

j.prototype.

activate=function(k){'use strict';
if(k)
this.applyActiveClass(k);};

j.prototype.

deactivate=function(){'use strict';
this.clearActiveClass();};
j.prototype.

blur=function(){'use strict';
this.clearFocusClass();};
j.prototype.

destroy=function(){'use strict';
this.restoreTabbables();
this.elements=new (c('Map'))([]);};
j.prototype.

activateDescendant=function(k){'use strict';
this.onActivedescendant.call
(null,
c('getOrCreateDOMID')(k));};

j.prototype.

applyActiveClass=function(k){'use strict';
c('CSS').addClass(k,this.activeClass);};
j.prototype.

applyFocusClass=function(k){'use strict';
c('CSS').addClass(k,this.focusClass);};
j.prototype.

canActivate=function(){'use strict';
return false;};
j.prototype.

clearActiveClass=function(){'use strict';
if(this.root){
var k=c('DOM').scry(this.root,this.activeClassSelector);
k.push(this.root);
k.forEach(function(l){return c('CSS').removeClass(l,this.activeClass);}.bind(this));}};

j.prototype.

clearFocusClass=function(){'use strict';
if(this.root){
var k=c('DOM').scry(this.root,this.focusClassSelector);
k.push(this.root);
k.forEach(function(l){return c('CSS').removeClass(l,this.focusClass);}.bind(this));}};

j.prototype.

neuterTabbables=function(){'use strict';
if(this.root)
c('TabbableElements').
find(this.root).
filter(function(k){return !this.elements.has(k);}.bind(this)).
forEach(function(k){
var l=k.getAttribute('tabIndex');
k.setAttribute('tabIndex','-1');
this.elements.set(k,l);}.
bind(this),this);};

j.prototype.

restoreTabbables=function(){'use strict';
this.elements.forEach
(function(k,
l){




if(k!=null){
l.setAttribute('tabIndex',k);}else 

l.removeAttribute('tabIndex');});


this.elements=new (c('Map'))([]);};



f.exports=j;}),null);

/** js/components/core/XUI/LogicalGrid/strategies/LogicalGridItemFocusStrategy.js */





__d('LogicalGridItemFocusStrategy',['Focus','LogicalGridFocusStrategyBase','getActiveElement'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits






(j,c('LogicalGridFocusStrategyBase'));i=h&&h.prototype;j.prototype.


focus=function(){'use strict';
var k=this.elements.keys().next().value;
if(k){
if(this.isCompositeWidget){
this.activateDescendant(k);}else
if(k!==c('getActiveElement')())


c('Focus').set(k,true);

i.focus.call(this,k);}};

j.prototype.

applyFocusClass=function(){'use strict';
if(this.root)
i.applyFocusClass.call(this,this.root);};

function j(){'use strict';h.apply(this,arguments);}


f.exports=j;}),null);

/** js/components/core/XUI/LogicalGrid/LogicalGridCell.react.js */





__d('LogicalGridCell.react',['cx','invariant','LogicalGridFocusStrategyBase','LogicalGridItemFocusStrategy','LogicalGridController','LogicalGridGKCheck','React','ReactDOM','RTLKeys','SubscriptionsHandler','emptyFunction','joinClasses','setTimeout'],(function a(b,c,d,e,f,g,h,i){var j,k,

















l=c('React').Component,
m=c('React').PropTypes,


n=c('LogicalGridGKCheck').passed,
o=c('LogicalGridGKCheck').decorator;j=babelHelpers.inherits













































(p,l);k=j&&j.prototype;


























































function p
(q,
r){
'use strict';
k.constructor.call(this,q);this.




















































































































































































































$LogicalGridCell_addListeners=function(){
var s=this.context.logicalGridController;
if(s)

this.$LogicalGridCell_subscriptionsHandler.addSubscriptions
(s.addListener
('cellActivate',
this.$LogicalGridCell_onCellActivate),

s.addListener
('cellBlur',
this.$LogicalGridCell_onCellBlur),

s.addListener
('cellDeactivate',
this.$LogicalGridCell_onCellDeactivate),

s.addListener
('cellFocus',
this.$LogicalGridCell_onCellFocus),

s.addListener
('cellPut',
this.$LogicalGridCell_onCellPut));}.



bind(this);this.

$LogicalGridCell_deleteCell=
function(s,
t){

var u=this.context.logicalGridController;

if(u&&
s!=null&&
t!=null)

u.deleteCell

([s,
t]);}.



bind(this);this.

$LogicalGridCell_focus=function(){
if(this.$LogicalGridCell_hasCellFocus())
this.$LogicalGridCell_focusStrategy.focus();}.

bind(this);this.

$LogicalGridCell_focusCell=function(){var s=



this.context,t=s.logicalGridController,u=s.logicalGridRowIndex,
v=this.props.columnIndex;



if(t&&
!this.$LogicalGridCell_hasCellFocus()&&
!this.$LogicalGridCell_shouldPreventCellFocus&&
u!=null&&
v!=null)

t.focusCell
([u,
v]);}.


bind(this);this.

$LogicalGridCell_hasCellFocus=function(){var s=



this.context,t=s.logicalGridController,u=s.logicalGridRowIndex,
v=this.props.columnIndex,
w=false;

if(t&&
u!=null&&
v!=null){

var x=t.getFocusedCell(),
y=t.isFocusedCoordinate
([u,
v]);




w=
y&&
x!=null&&
this.$LogicalGridCell_refElement===x.refElement;}


return w;}.
bind(this);this.

$LogicalGridCell_onCellActivate=function(){
if(this.$LogicalGridCell_hasCellFocus())
this.$LogicalGridCell_focusStrategy.activate();}.

bind(this);this.

$LogicalGridCell_onCellBlur=function(){
this.$LogicalGridCell_focusStrategy.deactivate();
this.$LogicalGridCell_focusStrategy.blur();}.
bind(this);this.

$LogicalGridCell_onCellDeactivate=function(){
this.$LogicalGridCell_focusStrategy.deactivate();}.
bind(this);this.

$LogicalGridCell_onCellFocus=
function(s,
t){

this.$LogicalGridCell_focus();}.
bind(this);this.

$LogicalGridCell_onCellPut=function(){
this.$LogicalGridCell_focus();}.
bind(this);this.

$LogicalGridCell_onClick=function(){
if(this.$LogicalGridCell_focusStrategy.canActivate())
this.context.logicalGridController.activateCell();}.

bind(this);this.

$LogicalGridCell_onFocus=function(){
if(!this.$LogicalGridCell_shouldPreventCellFocus)
this.$LogicalGridCell_focusCell();}.

bind(this);this.

$LogicalGridCell_onKeyPress=function(event){

var s=
this.context.logicalGridController;

if(event.charCode===c('RTLKeys').RETURN&&
this.$LogicalGridCell_focusStrategy.canActivate())

s.activateCell();}.

bind(this);this.

$LogicalGridCell_onMouseDown=function(){








if(this.props.disableFocusRecovery)
this.$LogicalGridCell_preventCellFocus();}.

bind(this);this.

$LogicalGridCell_preventCellFocus=function(){
this.$LogicalGridCell_shouldPreventCellFocus=true;
c('setTimeout')(function(){
this.$LogicalGridCell_shouldPreventCellFocus=false;}.
bind(this),0);}.
bind(this);this.

$LogicalGridCell_purgeCell=
function(s,
t){

var u=this.context.logicalGridController;

if(u&&
s!=null&&
t!=null)

u.purgeCell

([s,
t]);}.



bind(this);this.

$LogicalGridCell_putCell=
function(s,
t){

var u=arguments.length<=2||arguments[2]===undefined?false:arguments[2],
v=this.context.logicalGridController;

if(v&&
s!=null&&
t!=null)

v.putCell

([s,
t],


{refElement:this.$LogicalGridCell_refElement,
isRowHeader:this.props.isRowHeader,
isTabbable:this.props.isTabbable,
disableFocusRecovery:u});}.



bind(this);this.

$LogicalGridCell_ref=
function(s){




if(this.context.logicalGridController){
var t=c('ReactDOM').findDOMNode(s);
if(t&&t!==this.$LogicalGridCell_refElement){

this.$LogicalGridCell_refElement=t;

this.$LogicalGridCell_focusStrategy.update(t);}}}.


bind(this);this.$LogicalGridCell_focusStrategy=new q.focusStrategy(r.logicalGridIsCompositeWidget,r.logicalGridOnActivedescendant);this.$LogicalGridCell_shouldPreventCellFocus=false;this.$LogicalGridCell_subscriptionsHandler=new (c('SubscriptionsHandler'))();this.$LogicalGridCell_addListeners=o(this.$LogicalGridCell_addListeners,this);this.$LogicalGridCell_deleteCell=o(this.$LogicalGridCell_deleteCell,this);this.$LogicalGridCell_focus=o(this.$LogicalGridCell_focus,this);this.$LogicalGridCell_focusCell=o(this.$LogicalGridCell_focusCell,this);this.$LogicalGridCell_hasCellFocus=o(this.$LogicalGridCell_hasCellFocus,this);this.$LogicalGridCell_onCellActivate=o(this.$LogicalGridCell_onCellActivate,this);this.$LogicalGridCell_onCellBlur=o(this.$LogicalGridCell_onCellBlur,this);this.$LogicalGridCell_onCellDeactivate=o(this.$LogicalGridCell_onCellDeactivate,this);this.$LogicalGridCell_onCellFocus=o(this.$LogicalGridCell_onCellFocus,this);this.$LogicalGridCell_onCellPut=o(this.$LogicalGridCell_onCellPut,this);this.$LogicalGridCell_onClick=o(this.$LogicalGridCell_onClick,this);this.$LogicalGridCell_onFocus=o(this.$LogicalGridCell_onFocus,this);this.$LogicalGridCell_onKeyPress=o(this.$LogicalGridCell_onKeyPress,this);this.$LogicalGridCell_onMouseDown=o(this.$LogicalGridCell_onMouseDown,this);this.$LogicalGridCell_preventCellFocus=o(this.$LogicalGridCell_preventCellFocus,this);this.$LogicalGridCell_purgeCell=o(this.$LogicalGridCell_purgeCell,this);this.$LogicalGridCell_putCell=o(this.$LogicalGridCell_putCell,this);this.$LogicalGridCell_ref=o(this.$LogicalGridCell_ref,this);}p.prototype.render=function(){var q,r=this;'use strict';var s=this.context,t=s.logicalGridController,u=s.logicalGridRowIndex,v=s.logicalGridIsColumnHeader,w=this.props,x=w.children,y=w.columnIndex,z=w.component,aa=w.isRowHeader,ba={className:c('joinClasses')(z.props.className,this.props.className)};if(n()&&t&&u!=null)(function(){var ca=z.props,da=ca.onClick,ea=da===undefined?c('emptyFunction'):da,fa=ca.onFocus,ga=fa===undefined?c('emptyFunction'):fa,ha=ca.onKeyPress,ia=ha===undefined?c('emptyFunction'):ha,ja=ca.onMouseDown,ka=ja===undefined?c('emptyFunction'):ja,la=ca.ref,ma=la===undefined?c('emptyFunction'):la;ba={'aria-colindex':y!=null&&y>-1?y+1:null,className:c('joinClasses')(ba.className,"_4f7k"),role:v?'columnheader':aa?'rowheader':'gridcell',onClick:function(event){ea(event);this.$LogicalGridCell_onClick(event);}.bind(r),onFocus:function(event){ga(event);this.$LogicalGridCell_onFocus(event);}.bind(r),onKeyPress:function(event){ia(event);this.$LogicalGridCell_onKeyPress(event);}.bind(r),onMouseDown:function(event){ka(event);this.$LogicalGridCell_onMouseDown(event);}.bind(r),ref:function(na){ma(na);this.$LogicalGridCell_ref(na);}.bind(r),tabIndex:-1};})();return c('React').cloneElement(z,ba,x);};p.prototype.componentWillMount=function(){'use strict';this.$LogicalGridCell_addListeners();};p.prototype.componentDidMount=function(){'use strict';if(!this.context.logicalGridIsInvisible)this.$LogicalGridCell_putCell(this.context.logicalGridRowIndex,this.props.columnIndex,this.props.disableFocusRecovery);};p.prototype.componentWillReceiveProps=function(q,r){'use strict';var s=this.context.logicalGridRowIndex,t=this.props,u=t.columnIndex,v=t.focusStrategy,w=t.disableFocusRecovery,x=t.isRowHeader,y=t.isTabbable;if(v!==q.focusStrategy){this.$LogicalGridCell_focusStrategy.destroy();var z=r||{},aa=z.logicalGridIsCompositeWidget,ba=z.logicalGridOnActivedescendant;this.$LogicalGridCell_focusStrategy=new q.focusStrategy(aa,ba);this.$LogicalGridCell_focusStrategy.update();}var ca=r&&r.logicalGridRowIndex,da=q.disableFocusRecovery,ea=q.columnIndex,fa=q.isRowHeader,ga=q.isTabbable;if(s!==ca||u!==ea||w!==da||x!==fa||y!==ga)this.$LogicalGridCell_purgeCell(s,u);};p.prototype.componentWillUpdate=function(q,r,s){'use strict';if(!s||!s.logicalGridIsInvisible)this.$LogicalGridCell_putCell(s&&s.logicalGridRowIndex,q.columnIndex,q.disableFocusRecovery);};p.prototype.componentDidUpdate=function(){'use strict';this.$LogicalGridCell_focusStrategy.update();this.$LogicalGridCell_focus();};p.prototype.componentWillUnmount=function(){'use strict';var q=this.context.logicalGridRowIndex,r=this.props.columnIndex;this.$LogicalGridCell_subscriptionsHandler.release();this.$LogicalGridCell_focusStrategy.destroy();this.$LogicalGridCell_deleteCell(q,r);};p.contextTypes={logicalGridController:m.instanceOf(c('LogicalGridController')),logicalGridRowIndex:m.number,logicalGridIsColumnHeader:m.bool,logicalGridIsCompositeWidget:m.bool,logicalGridIsInvisible:m.bool,logicalGridOnActivedescendant:m.func};p.propTypes={columnIndex:m.number,disableFocusRecovery:m.bool,focusStrategy:m.func,component:m.element,isRowHeader:m.bool,isTabbable:m.bool};p.defaultProps={disableFocusRecovery:false,focusStrategy:c('LogicalGridItemFocusStrategy'),component:c('React').createElement('span'),isRowHeader:false,isTabbable:false};


f.exports=p;}),null);

/** js/components/core/XUI/LogicalGrid/LogicalGridRow.react.js */





__d('LogicalGridRow.react',['invariant','cx','LogicalGridController','LogicalGridGKCheck','React','SubscriptionsHandler','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j,k,












l=c('React').Component,
m=c('React').PropTypes,


n=c('LogicalGridGKCheck').passed,
o=c('LogicalGridGKCheck').decorator;j=babelHelpers.inherits











































(p,l);k=j&&j.prototype;









































function p
(q,
r){
'use strict';
k.constructor.call(this,q);this.








































































































$LogicalGridRow_addListeners=function(){
var s=this.context.logicalGridController;
if(s)

this.$LogicalGridRow_subscriptionsHandler.addSubscriptions
(s.addListener
('cellDelete',
this.$LogicalGridRow_onCellDelete));}.



bind(this);this.

$LogicalGridRow_putRow=function(s){
var t=this.context.logicalGridController;

if(t&&
!(s==null))

t.putRow(s);}.

bind(this);this.

$LogicalGridRow_purgeRow=function(s){
var t=this.context.logicalGridController;

if(t&&
s!=null)

t.purgeRow(s);}.

bind(this);this.

$LogicalGridRow_deleteRow=function(s){
var t=this.context.logicalGridController;

if(t&&
s!=null)

t.deleteRow(s);}.

bind(this);this.

$LogicalGridRow_onCellDelete=
function(s,
t,
u,
v){

var w=this.props.rowIndex,
x=w!=null&&s.get(w),

y=

v[0],z=v[1];

if(x&&
w===y&&
z&&
u===x.get(z))

this.forceUpdate();}.

bind(this);this.$LogicalGridRow_subscriptionsHandler=new (c('SubscriptionsHandler'))();this.$LogicalGridRow_addListeners=o(this.$LogicalGridRow_addListeners,this);this.$LogicalGridRow_deleteRow=o(this.$LogicalGridRow_deleteRow,this);this.$LogicalGridRow_onCellDelete=o(this.$LogicalGridRow_onCellDelete,this);this.$LogicalGridRow_purgeRow=o(this.$LogicalGridRow_purgeRow,this);this.$LogicalGridRow_putRow=o(this.$LogicalGridRow_putRow,this);}p.prototype.getChildContext=function(){'use strict';return {logicalGridRowIndex:this.props.rowIndex,logicalGridIsColumnHeader:this.props.isColumnHeader,logicalGridIsInvisible:this.props.isInvisible};};p.prototype.render=function(){'use strict';var q=this.context.logicalGridController,r=this.props,s=r.children,t=r.className,u=r.component,v=r.isInvisible,w=r.rowIndex,x={className:c('joinClasses')(u.props.className,t)};if(n()&&q){x={'aria-rowindex':w!=null&&w>-1?w+1:null,className:c('joinClasses')(x.className,v?"accessible_elem":''),role:'row',tabIndex:-1};}else if(v)return null;return c('React').cloneElement(u,x,s);};p.prototype.componentWillMount=function(){'use strict';this.$LogicalGridRow_addListeners();};p.prototype.componentDidMount=function(){'use strict';if(!this.props.isInvisible)this.$LogicalGridRow_putRow(this.props.rowIndex);};p.prototype.componentWillReceiveProps=function(q,r){'use strict';var s=this.props.rowIndex;if(s!==q.rowIndex)this.$LogicalGridRow_purgeRow(s);};p.prototype.componentWillUpdate=function(q){'use strict';if(!q.isInvisible)this.$LogicalGridRow_putRow(q.rowIndex);};p.prototype.componentWillUnmount=function(){'use strict';this.$LogicalGridRow_deleteRow(this.props.rowIndex);this.$LogicalGridRow_subscriptionsHandler.release();};p.contextTypes={logicalGridController:m.instanceOf(c('LogicalGridController'))};p.childContextTypes={logicalGridRowIndex:m.number,logicalGridIsColumnHeader:m.bool,logicalGridIsInvisible:m.bool};p.propTypes={rowIndex:m.number,component:m.element,isColumnHeader:m.bool,isInvisible:m.bool};p.defaultProps={component:c('React').createElement('div'),isColumnHeader:false,isInvisible:false};


f.exports=p;}),null);

/** js/components/core/XUI/LogicalGrid/strategies/LogicalGridCellFocusStrategy.js */





__d('LogicalGridCellFocusStrategy',['Focus','LogicalGridFocusStrategyBase'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits




(j,c('LogicalGridFocusStrategyBase'));i=h&&h.prototype;j.prototype.


focus=function(){'use strict';
i.focus.call(this,this.root);

if(this.isCompositeWidget&&
this.root){

this.activateDescendant(this.root);}else 

c('Focus').set(this.root);};

function j(){'use strict';h.apply(this,arguments);}


f.exports=j;}),null);

/** shared/tokenizer/AbstractTokenizer.react.js */





__d('AbstractTokenizer.react',['cx','AbstractTypeahead.react','LogicalGrid.react','React','ReactDOM','TokenizerToken.react','ex','emptyFunction','getActiveElement','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,













k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;'use strict';for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.









































































































state={queryString:''},this.

$AbstractTokenizer_getQueryString=function(){
return this.props.queryString||this.state.queryString;}.
bind(this),this.

$AbstractTokenizer_hasReachedEntriesLimit=function(){
if(this.props.limit&&this.props.entries)
return this.props.entries.length>=this.props.limit;


return false;}.
bind(this),this.







































































































































































































































































clearActiveEntries=function(){
this.refs.typeahead&&this.refs.typeahead.clearActiveEntries();}.
bind(this),this.

focusInput=function(){
if(this.refs&&this.refs.typeahead)
this.refs.typeahead.focusInput();}.

bind(this),this.

blurInput=function(){
if(this.refs&&this.refs.typeahead)
this.refs.typeahead.blurInput();}.

bind(this),this.

$AbstractTokenizer_onClick=function(r){
r.preventDefault();
if(this.refs&&this.refs.typeahead){
var s=this.refs.typeahead.getTextFieldDOM();

if(s!==r.target||
s!==c('getActiveElement')())

this.focusInput();}}.


bind(this),this.

$AbstractTokenizer_onTypeaheadMouseDown=function(){
this.props.onTypeaheadMouseDown&&this.props.onTypeaheadMouseDown();}.
bind(this),this.

$AbstractTokenizer_onInputChange=function(event){
if(this.$AbstractTokenizer_hasReachedEntriesLimit())
return;


var r=event.target.value,
s=this.props.tokenizeQueryString(r);

if(s){
this.$AbstractTokenizer_onSelectAttempt(s);}else
if(this.props.queryString==null)
this.setState({queryString:r});


if(this.props.onQueryStringChange)
this.props.onQueryStringChange(event);}.

bind(this),this.

$AbstractTokenizer_onInputBlur=function(){
var r=this.$AbstractTokenizer_getQueryString(),
s=this.props.tokenizeQueryStringOnBlur(r);

if(s)
this.$AbstractTokenizer_onBlurringSelectAttempt(s);

this.props.onInputBlur();}.
bind(this),this.

$AbstractTokenizer_onSelectAttempt=function(r){
this.$AbstractTokenizer_onAddEntryAttempt(r);

if(this.props.focusAfterSelection)

setTimeout(this.focusInput,0);}.

bind(this),this.

$AbstractTokenizer_onBlurringSelectAttempt=function(r){
this.$AbstractTokenizer_onAddEntryAttempt(r);}.
bind(this),this.

$AbstractTokenizer_onAddEntryAttempt=function(r){
if(r){
this.props.onAddEntryAttempt(r);

if(this.props.queryString==null&&
this.props.shouldClearQueryStringAfterSelect)

this.setState({queryString:''});}}.


bind(this),this.

$AbstractTokenizer_onRemove=function(r){
this.props.onRemoveEntryAttempt(r);}.
bind(this),this.

$AbstractTokenizer_onBackspace=function(event){
var r=this.props.entries;
if(r&&!this.$AbstractTokenizer_getQueryString()&&r.length){
var s=this.getInputPosition();
if(s>0){
var t=r[s-1];
this.props.onRemoveEntryAttempt(t);
event.preventDefault();}


setTimeout(this.focusInput,0);}}.

bind(this),this.







$AbstractTokenizer_syncInputWidth=function(){
var r=c('ReactDOM').findDOMNode(this.refs.textSizeProxy).offsetWidth;


if(r===0)
return;


this.refs.typeahead.getTextFieldDOM().style.width=r+'px';}.
bind(this),this.




onBackgroundDragOver=function(event){
event.preventDefault();

var r=event.nativeEvent.dataTransfer;
if(r)
r.dropEffect='move';


var s=this.props.entries;

this.onTokenDragOver
(s[s.length-1],
s.length-1,
false);}.

bind(this),this.




onBackgroundDrop=function(event){

this.onTokenDrop(null,this.props.entries.length);}.
bind(this),this.





onTokenDragStart=function(r,s){
this.setState({draggingIndex:s});}.
bind(this),this.





onTokenDragEnd=function(r,s){
this.setState({draggingIndex:null});}.
bind(this),this.











onTokenDragLeave=function(r,s){
if(this.leaveTimer)
return;


this.leaveTimer=setTimeout(function(){
this.leaveTimer=null;
if(this.state.dragTargetIndex===null)
return;


this.setState({dragTargetIndex:null});}.
bind(this),100);}.
bind(this),this.






onTokenDragOver=function(r,s,t){
if(this.leaveTimer){
clearTimeout(this.leaveTimer);
this.leaveTimer=null;}


if(this.state.draggingIndex!==null&&
this.state.draggingIndex!==s&&
this.props.onReorderEntryAttempt){

if(this.state.dragTargetIndex===s&&
this.state.draggedOverLeftSideOfElement===
t)
return;


this.setState
({dragTargetIndex:s,
draggedOverLeftSideOfElement:t});}}.


bind(this),this.





onTokenDrop=function(r,s){
if(this.state.draggingIndex!==null&&this.props.onReorderEntryAttempt){
if(!this.state.draggedOverLeftSideOfElement)
s++;


if(this.state.draggingIndex!==s)
this.props.onReorderEntryAttempt
(this.state.draggingIndex,
s);}




this.setState
({draggingIndex:null,
dragTargetIndex:null,
draggedOverLeftSideOfElement:null});}.

bind(this),n;}l.prototype.componentWillReceiveProps=function(m){'use strict';if(m.queryString==null&&this.props.queryString!=null)this.setState({queryString:this.props.queryString});};l.prototype.getInputPosition=function(){'use strict';var m=this.props.entries?this.props.entries.length:0,n=this.props.inputPosition;if(n===undefined||n===null)return m;if(n<0)return 0;if(n>m)return m;return n;};l.prototype.$AbstractTokenizer_onChangeInputPositionAttempt=function(m){'use strict';var n=this.props.onChangeInputPositionAttempt;if(n){n(m);setTimeout(this.focusInput,0);}};l.prototype.$AbstractTokenizer_getInputSelectionArea=function(m){'use strict';return c('React').createElement('span',{key:'inputSelectionArea'+m,className:c('joinClasses')("_4tb6",this.props.inputPostionAreaClassName),onClick:function(){return this.$AbstractTokenizer_onChangeInputPositionAttempt(m);}.bind(this)});};l.prototype.render=function(){'use strict';var m=!!this.props.onReorderEntryAttempt,n=c('joinClasses')("_58-2"+(m?' '+"_5ph3":''),'clearfix',this.props.className),o=[],p=this.props.entries,q={},r=p&&p.length>0,s;if(r)for(var t=0,u=p.length;t<u;t++){var v=p[t];s=v.getUniqueID();o[t]=this.$AbstractTokenizer_renderToken(v,t);if(this.props.excludeTokenEntries)q[s]=true;}if(this.props.excludedEntries)for(s in this.props.excludedEntries)q[s]=this.props.excludedEntries[s];var w=null;if(!r||this.props.alwaysShowPlaceholder)w=this.props.placeholder;var x=this.props.logicalGridOnManageFocus,y=Object.assign({},this.props);delete y.additionalEntries;delete y.alwaysShowPlaceholder;delete y.autoHighlight;delete y.context;delete y.excludeTokenEntries;delete y.extraTokenRendererProps;delete y.extraTypeaheadProps;delete y.focusAfterSelection;delete y.focusedOnInit;delete y.inputClassName;delete y.inputPosition;delete y.inputPostionAreaClassName;delete y.tokenClassName;delete y.placeholder;delete y.queryString;delete y.searchSource;delete y.searchSourceOptions;delete y.shouldClearQueryStringAfterSelect;delete y.showEntriesOnFocus;delete y.presenter;delete y.entries;delete y.onAddEntryAttempt;delete y.onChangeInputPositionAttempt;delete y.onEditEntryAttempt;delete y.onEnter;delete y.onEnterWithoutSelection;delete y.onEntriesFound;delete y.onPaste;delete y.onRemoveEntryAttempt;delete y.onReorderEntryAttempt;delete y.onQueryStringChange;delete y.onInputFocus;delete y.onInputBlur;delete y.onTypeaheadMouseDown;delete y.logicalGridOnManageFocus;delete y.excludedEntries;delete y.inputID;delete y.entriesWidthMatchContext;delete y.hideViewWithEntries;delete y.disabled;delete y.typeaheadInputStyle;delete y.limit;delete y.selectOnBlur;delete y.selectOnComma;delete y.selectOnTab;delete y.selectOnSpace;delete y.tokenizeQueryString;delete y.tokenizeQueryStringOnBlur;var z=this.getInputPosition(),aa=!!this.props.onChangeInputPositionAttempt,ba=void 0,ca=void 0;if(aa){var da=[],ea=undefined;for(var fa=0;fa<o.length;fa++){if(z===fa){ea=da.length;}else da.push(this.$AbstractTokenizer_getInputSelectionArea(fa));da.push(o[fa]);}if(ea!==undefined){da.push(this.$AbstractTokenizer_getInputSelectionArea(o.length));}else ea=da.length;ba=c('React').createElement(c('LogicalGrid.react'),{component:c('React').createElement('span',null),onManageFocus:x},da.slice(0,ea));ca=c('React').createElement(c('LogicalGrid.react'),{initialFocusCellCoordinate:[ea/2,0],component:c('React').createElement('span',null),onManageFocus:x},da.slice(ea));}else ba=c('React').createElement(c('LogicalGrid.react'),{component:c('React').createElement('span',null),onManageFocus:x},o);return c('React').createElement('div',babelHelpers['extends']({},y,{className:c('joinClasses')(this.props.className,n),placeholder:null,onClick:this.$AbstractTokenizer_onClick,onMouseDown:this.$AbstractTokenizer_onTypeaheadMouseDown,onDragOver:this.onBackgroundDragOver,onDrop:this.onBackgroundDrop,tabIndex:null,'data-testid':this.props['data-testid']}),ba,c('React').createElement(c('AbstractTypeahead.react'),babelHelpers['extends']({},this.props.extraTypeaheadProps,{ref:'typeahead',selectedEntry:null,className:"_58-0",ariaLabel:this.props.placeholder,'data-testid':this.props['data-testid'],inputClassName:this.props.inputClassName,showEntriesOnFocus:this.props.showEntriesOnFocus,queryString:this.$AbstractTokenizer_getQueryString(),placeholder:w,presenter:this.props.presenter,searchSource:this.props.searchSource,searchSourceOptions:this.props.searchSourceOptions,additionalEntries:this.props.additionalEntries,excludedEntries:q,onSelectAttempt:this.$AbstractTokenizer_onSelectAttempt,onEntriesFound:this.props.onEntriesFound,onEnterWithoutSelection:this.props.onEnterWithoutSelection,onChange:this.$AbstractTokenizer_onInputChange,onFocus:this.props.onInputFocus,onBlur:this.$AbstractTokenizer_onInputBlur,onBackspace:this.$AbstractTokenizer_onBackspace,onPaste:this.props.onPaste,tabIndex:this.props.tabIndex,autoHighlight:this.props.autoHighlight,selectOnBlur:this.props.selectOnBlur,selectOnComma:this.props.selectOnComma,selectOnTab:this.props.selectOnTab,selectOnSpace:this.props.selectOnSpace,context:this.props.context,focusedOnInit:this.props.focusedOnInit,focusAfterSelection:this.props.focusAfterSelection,inputID:this.props.inputID,entriesWidthMatchContext:this.props.entriesWidthMatchContext,hideViewWithEntries:this.props.hideViewWithEntries,disabled:this.props.disabled,inputStyle:this.props.typeaheadInputStyle})),c('React').createElement('span',{ref:'textSizeProxy',className:"_58-3",'aria-hidden':'true'},this.$AbstractTokenizer_getQueryString()||w),ca);};l.prototype.componentDidMount=function(){'use strict';this.$AbstractTokenizer_syncTimer=setTimeout(this.$AbstractTokenizer_syncInputWidth,0);};l.prototype.componentDidUpdate=function(){'use strict';clearTimeout(this.$AbstractTokenizer_syncTimer);this.$AbstractTokenizer_syncTimer=setTimeout(this.$AbstractTokenizer_syncInputWidth,0);};l.prototype.componentWillUnmount=function(){'use strict';clearTimeout(this.$AbstractTokenizer_syncTimer);};l.prototype.





$AbstractTokenizer_renderToken=function(m,n){'use strict';
var o=this.props.presenter.TokenRenderer||c('TokenizerToken.react'),
p=this.state.draggingIndex===n,
q=!!this.props.onReorderEntryAttempt,
r=this.state.dragTargetIndex===n,
s=c('joinClasses')("_2ei6"+


(p?' '+"_5ph4":'')+
(r?' '+"_5o8i":'')+

(r&&
this.state.draggedOverLeftSideOfElement?' '+"_5o8j":'')+

(r&&
!this.state.draggedOverLeftSideOfElement?' '+"_5o8k":''),

this.props.tokenClassName);


return (c('React').createElement(o,babelHelpers['extends']({},
this.props.extraTokenRendererProps,
{className:s,
key:m.getUniqueID(),
label:m.getTitle(),
entry:m,
index:n,
onRemove:this.$AbstractTokenizer_onRemove,
isDragDropEnabled:q,
onTokenDragStart:this.onTokenDragStart,
onTokenDragEnd:this.onTokenDragEnd,
onTokenDragOver:this.onTokenDragOver,
onTokenDragLeave:this.onTokenDragLeave,
onTokenDrop:this.onTokenDrop,
onEditEntryAttempt:this.props.onEditEntryAttempt,
disabled:this.props.disabled})));};


l.propTypes={alwaysShowPlaceholder:k.bool,className:k.string,excludeTokenEntries:k.bool,extraTokenRendererProps:k.object,extraTypeaheadProps:k.object,focusAfterSelection:k.bool,inputClassName:k.string,tokenClassName:k.string,placeholder:k.string,queryString:k.string,searchSource:k.object.isRequired,searchSourceOptions:k.object,shouldClearQueryStringAfterSelect:k.bool,presenter:k.object.isRequired,entries:k.array,onAddEntryAttempt:k.func.isRequired,onEntriesFound:k.func,onPaste:k.func,onRemoveEntryAttempt:k.func.isRequired,onReorderEntryAttempt:k.func,onEditEntryAttempt:k.func,onQueryStringChange:k.func,onInputFocus:k.func,onInputBlur:k.func,onTypeaheadMouseDown:k.func,additionalEntries:k.array,excludedEntries:k.object,inputID:k.string,entriesWidthMatchContext:k.bool,hideViewWithEntries:k.bool,disabled:k.bool,typeaheadInputStyle:k.object,limit:function m(n,o,p){var m=n[o],q=m==null||typeof m==='number'&&m>0;if(!q)return new Error(c('ex')('Invalid entries limit `%s` provided, must be a positive '+'number if set.',m));return null;},selectOnBlur:k.bool,selectOnComma:k.bool,selectOnTab:k.bool,selectOnSpace:k.bool,tokenizeQueryString:k.func,tokenizeQueryStringOnBlur:k.func,inputPosition:k.number,onChangeInputPositionAttempt:k.func,inputPostionAreaClassName:k.string};l.defaultProps={autoHighlight:true,excludeTokenEntries:true,focusAfterSelection:true,hideViewWithEntries:true,onInputBlur:c('emptyFunction'),selectOnBlur:false,selectOnComma:false,selectOnTab:true,selectOnSpace:false,shouldClearQueryStringAfterSelect:true,tokenizeQueryString:c('emptyFunction').thatReturnsNull,tokenizeQueryStringOnBlur:c('emptyFunction').thatReturnsNull,entriesWidthMatchContext:true};


f.exports=l;}),null);

/** js/components/core/XUI/Tokenizer/XUITokenizerRichToken.react.js */





__d('XUITokenizerRichToken.react',['cx','fbt','DraggableTokenMixin.react','Image.react','React','SearchableEntry','XUICloseButton.react'],(function a(b,c,d,e,f,g,h,i){










var j=c('React').PropTypes,

k=c('React').createClass({displayName:'XUITokenizerRichToken',
mixins:[c('DraggableTokenMixin.react')],

propTypes:
{label:j.string.isRequired,
entry:j.instanceOf(c('SearchableEntry')),
onRemove:j.func,
highlighted:j.bool},


_onRemove:function l(m){
m.preventDefault();
this.props.onRemove(this.props.entry);},


getText:function l(m){
if(m.getSubtitle().length>0){
return m.getTitle()+' - '+m.getSubtitle();}else 

return m.getTitle();},



render:function l(){
var m;
if(this.props.onRemove)
m=
c('React').createElement(c('XUICloseButton.react'),
{type:'button',
'aria-label':i._(["Remove {item}","77483de97c07d982ae76a79d0396e1ea"],[i.param('item',this.props.label)]),
className:"_5yii",
size:'small',
onClick:this._onRemove});



var n=this.props.entry;
return this.renderDraggableToken
(c('React').createElement('span',this.props,
c('React').createElement('div',{className:"_5yij",label:null},
c('React').createElement(c('Image.react'),
{className:"_5yik",
src:n.getPhoto()}),
this.getText(n),
m)));}});






f.exports=k;}),null);

/** js/components/core/XUI/Tokenizer/XUITokenizerToken.react.js */





__d('XUITokenizerToken.react',['cx','fbt','DraggableTokenMixin.react','LogicalGridRow.react','LogicalGridCell.react','LogicalGridCellFocusStrategy','React','SearchableEntry','XUICloseButton.react','joinClasses'],(function a(b,c,d,e,f,g,h,i){













var j=c('React').PropTypes,

k=c('React').createClass({displayName:'XUITokenizerToken',
mixins:[c('DraggableTokenMixin.react')],

propTypes:
{disabled:j.bool,
label:j.string.isRequired,
entry:j.instanceOf(c('SearchableEntry')),
onRemove:j.func,
highlighted:j.bool,
onEditEntryAttempt:j.func},


_onRemove:function l(m){
m.preventDefault();
this.props.onRemove(this.props.entry);},


renderLabelCellComponent:function l(){

return (c('React').createElement('span',
{'aria-label':this.props.label,
title:this.props.label,
className:"_5aab"}));},




render:function l(){
var m;
if(this.props.onRemove&&!this.props.disabled)
m=
c('React').createElement(c('LogicalGridCell.react'),
{columnIndex:1},
c('React').createElement(c('XUICloseButton.react'),
{type:'button',
'aria-label':i._(["Remove {item}","77483de97c07d982ae76a79d0396e1ea"],

[i.param('item',this.props.label)]),




className:"_1z6_",
size:'small',
onClick:this._onRemove}));




var n="_59_o"+

(!m?' '+"_2lo5":'')+
(this.props.highlighted?' '+"_59_r":''),


o=
c('React').createElement('span',babelHelpers['extends']({},
this.props,
{onDoubleClick:function(){var q=
this.props,r=q.onEditEntryAttempt,s=q.entry;
r&&r(s);}.
bind(this),
className:c('joinClasses')(this.props.className,n),
label:null})),



p=this.renderLabelCellComponent();

return this.renderDraggableToken
(c('React').createElement(c('LogicalGridRow.react'),
{rowIndex:this.props.index,
component:o},
c('React').createElement(c('LogicalGridCell.react'),
{columnIndex:0,
focusStrategy:c('LogicalGridCellFocusStrategy'),
component:p},
this.props.label),

m));}});





f.exports=k;}),null);

/** js/components/core/XUI/Tokenizer/XUITokenizer.react.js */





__d('XUITokenizer.react',['cx','fbt','AbstractTokenizer.react','React','XUICloseButton.react','XUIError.react','XUITokenizerToken.react','XUITokenizerRichToken.react','XUITypeaheadTextOnlyView.react','XUITypeaheadView.react','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j,k,














l=c('React').PropTypes,

m=
{ViewRenderer:c('XUITypeaheadView.react'),
TokenRenderer:c('XUITokenizerToken.react'),
useLayer:true},


n=
{ViewRenderer:c('XUITypeaheadTextOnlyView.react'),
TokenRenderer:c('XUITokenizerToken.react'),
useLayer:true};j=babelHelpers.inherits


(o,c('React').Component);k=j&&j.prototype;function o(){var p,q;'use strict';for(var r=arguments.length,s=Array(r),t=0;t<r;t++)s[t]=arguments[t];return q=(p=k.constructor).call.apply(p,[this].concat(s)),this.





















































































































































focusInput=function(){
this.refs.tokenizer&&this.refs.tokenizer.focusInput();}.
bind(this),this.

blurInput=function(){
this.refs.tokenizer&&this.refs.tokenizer.blurInput();}.
bind(this),this.

$XUITokenizer_renderClearButton=function(){
var u=this.props.entries,
v=u&&u.length>0;


if(!this.props.clearable||
!v||
!this.props.onClear)

return null;



return (c('React').createElement(c('XUICloseButton.react'),
{className:"_3bm-",
onClick:this.props.onClear,
size:'medium',
tooltip:i._(["Clear","1b62ab9e8d12501d1fd961793bbb2364"])}));}.






bind(this),q;}o.prototype.componentWillMount=function(){'use strict';};o.prototype.render=function(){'use strict';var p=c('joinClasses')(this.props.className,"_59_m",this.props.disabled?"_48b-":''),q=this.props.presenter;if(!q){q=this.props.viewStyle=='rich'?m:n;if(this.props.tokenStyle=='rich')q.TokenRenderer=c('XUITokenizerRichToken.react');}return c('React').createElement(c('XUIError.react'),this.props,c('React').createElement('div',{className:p,'data-testid':this.props.testID},c('React').createElement(c('AbstractTokenizer.react'),{alwaysShowPlaceholder:this.props.alwaysShowPlaceholder,autoHighlight:this.props.autoHighlight,context:this.props.context,className:"_59_n",entries:this.props.entries,additionalEntries:this.props.additionalEntries,excludedEntries:this.props.excludedEntries,excludeTokenEntries:this.props.excludeTokenEntries,extraTokenRendererProps:this.props.extraTokenRendererProps,extraTypeaheadProps:this.props.extraTypeaheadProps,focusedOnInit:this.props.focusedOnInit,focusAfterSelection:this.props.focusAfterSelection,limit:this.props.limit,onAddEntryAttempt:this.props.onAddEntryAttempt,onEntriesFound:this.props.onEntriesFound,onEnter:this.props.onEnter,onInputBlur:this.props.onInputBlur,onInputFocus:this.props.onInputFocus,onPaste:this.props.onPaste,onQueryStringChange:this.props.onQueryStringChange,onRemoveEntryAttempt:this.props.onRemoveEntryAttempt,onReorderEntryAttempt:this.props.onReorderEntryAttempt,onEditEntryAttempt:this.props.onEditEntryAttempt,onChangeInputPositionAttempt:this.props.onChangeInputPositionAttempt,inputPosition:this.props.inputPosition,inputPostionAreaClassName:"_u-l",onEnterWithoutSelection:this.props.onEnterWithoutSelection,placeholder:this.props.placeholder,presenter:q,queryString:this.props.queryString,ref:'tokenizer',searchSource:this.props.searchSource,searchSourceOptions:this.props.searchSourceOptions,selectOnBlur:this.props.selectOnBlur,selectOnTab:this.props.selectOnTab,selectOnSpace:this.props.selectOnSpace,selectOnComma:this.props.selectOnComma,showEntriesOnFocus:this.props.showEntriesOnFocus,tokenizeQueryStringOnBlur:this.props.tokenizeQueryStringOnBlur,tokenizeQueryString:this.props.tokenizeQueryString,inputID:this.props.inputID,entriesWidthMatchContext:this.props.entriesWidthMatchContext,disabled:this.props.disabled}),this.$XUITokenizer_renderClearButton()));};o.propTypes=babelHelpers['extends']({additionalEntries:l.array,alwaysShowPlaceholder:l.bool,autoHighlight:l.bool,className:l.string,context:l.object,entries:l.array,excludedEntries:l.object,excludeTokenEntries:l.bool,extraTokenRendererProps:l.object,extraTypeaheadProps:l.object,focusAfterSelection:l.bool,limit:l.number,onAddEntryAttempt:l.func.isRequired,onClear:l.func,onEntriesFound:l.func,onInputFocus:l.func,onPaste:l.func,onQueryStringChange:l.func,onRemoveEntryAttempt:l.func.isRequired,onReorderEntryAttempt:l.func,onEditEntryAttempt:l.func,placeholder:l.string,presenter:l.object,queryString:l.string,searchSource:l.object.isRequired,searchSourceOptions:l.object,selectOnBlur:l.bool,selectOnComma:l.bool,selectOnTab:l.bool,selectOnSpace:l.bool,testID:l.string,tokenizeQueryString:l.func,viewStyle:l.oneOf(['textonly','rich']),inputID:l.string,entriesWidthMatchContext:l.bool,disabled:l.bool,clearable:l.bool,onChangeInputPositionAttempt:l.func,inputPosition:l.number},c('XUIError.react').propTypes);o.defaultProps={clearable:false,viewStyle:'rich',entriesWidthMatchContext:true,focusAfterSelection:true};


f.exports=o;}),null);

/** js/react_composer/attachments/album/ReactComposerAlbumActionType.js */





__d('ReactComposerAlbumActionType',['keyMirrorRecursive'],(function a(b,c,d,e,f,g){



f.exports=c('keyMirrorRecursive')
({CREATE_ALBUM_CLICKED:null},
'ReactComposerAlbumActionType');}),null);

/** www/__virtual__/x/XReactComposerQuestionAttachmentBootstrapController.js */



__d("XReactComposerQuestionAttachmentBootstrapController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/react_composer\/question\/bootstrap\/",{composer_id:{type:"String",required:true},composer_type:{type:"Enum",required:true,enumType:1},target_id:{type:"String",required:true}});}),

null);

/** js/react_composer/attachments/question/ReactComposerQuestionLazyAttachment.react.js */






__d('ReactComposerQuestionLazyAttachment.react',['invariant','ReactComposerAttachmentType','ReactComposerLoadableAttachmentBodyMixin','ReactComposerBootloaderPropTypes','XReactComposerQuestionAttachmentBootstrapController','ActorURI','Bootloader','React'],(function a(b,c,d,e,f,g,h){














var i=c('React').createClass({displayName:'ReactComposerQuestionLazyAttachment',
mixins:[c('ReactComposerLoadableAttachmentBodyMixin')],



statics:
{attachmentID:c('ReactComposerAttachmentType').QUESTION},


propTypes:
{bootloader:c('ReactComposerBootloaderPropTypes').isRequired},


bootload:function j(k){

this.props.bootloader.questionAttachment||h(0,
'the questionAttachment bootloader must be defined');


this.props.bootloader.questionAttachment(k);},


getBootstrapURI:function j(){
return c('ActorURI').create
(c('XReactComposerQuestionAttachmentBootstrapController').
getURIBuilder().
setString('composer_id',this.context.composerID).
setEnum('composer_type',this.context.composerType).
setString('target_id',this.context.targetID).
getURI(),
this.context.actorID);}});





f.exports=i;}),null);

/** js/react_composer/attachments/status/taggers/ReactComposerTaggerActions.js */





__d('ReactComposerTaggerActions',['ReactComposerTaggerActionType','ReactComposerDispatcher','ReactComposerTaggerStore'],(function a(b,c,d,e,f,g){h.prototype.












deselectCurrentTagger=
function(i,
j){
'use strict';
var k=c('ReactComposerTaggerStore').getSelectedTagger(i);

if(k){
var l=
{composerID:i,
sourceLoggingName:j,
type:c('ReactComposerTaggerActionType').DESELECT_TAGGER,
taggerID:k};

c('ReactComposerDispatcher').dispatch(l);}};

h.prototype.

selectTagger=
function(i,
j,
k,
l){
'use strict';
var m=c('ReactComposerTaggerStore').getSelectedTagger(i);
if(k===m&&l!==true){
this.deselectCurrentTagger(i,j);}else{

var n=
{composerID:i,
sourceLoggingName:j,
type:c('ReactComposerTaggerActionType').SET_SELECTED_TAGGER,
taggerID:k,
autoFocus:true,
disableToggle:l};

c('ReactComposerDispatcher').dispatch(n);}};

h.prototype.

selectTaggerWithoutAutofocus=
function(i,
j,
k){
'use strict';
var l=
{composerID:i,
sourceLoggingName:j,
type:c('ReactComposerTaggerActionType').SET_SELECTED_TAGGER,
taggerID:k,
autoFocus:false};

c('ReactComposerDispatcher').dispatch(l);};
h.prototype.

updateTaggersSource=function(i,j){'use strict';
var k=
{composerID:i,
type:c('ReactComposerTaggerActionType').UPDATE_TAGGERS_SOURCE,
taggersSource:j};

c('ReactComposerDispatcher').dispatch(k);};
h.prototype.

setTaggerSource=
function(i,
j,


k){
'use strict';
var l=
{composerID:i,
type:c('ReactComposerTaggerActionType').SET_TAGGER_SOURCE,
taggerID:j,
taggerSource:k};

c('ReactComposerDispatcher').dispatch(l);};
h.prototype.

setTaggerData=
function(i,
j,
k,
l){
'use strict';
this.$ReactComposerTaggerActions_doSetTaggerData
(i,
k,
l,
false,
j);};

h.prototype.






setTaggerDataWithoutLogging=
function(i,
j,
k){
'use strict';
this.$ReactComposerTaggerActions_doSetTaggerData
(i,
j,
k,
true);};

h.prototype.

$ReactComposerTaggerActions_doSetTaggerData=
function(i,
j,
k,
l,
m){
'use strict';
var n=
{composerID:i,
sourceLoggingName:m,
type:c('ReactComposerTaggerActionType').SET_TAGGER_DATA,
taggerID:j,
taggerData:k,
suppressWaterfallLogging:l};

c('ReactComposerDispatcher').dispatch(n);};
h.prototype.

selectDateTime=function(i,j){'use strict';
var k=
{composerID:i,
type:c('ReactComposerTaggerActionType').SET_SELECTED_DATETIME,
selectedDateTime:j};

c('ReactComposerDispatcher').dispatch(k);};
h.prototype.

selectPeople=function(i,j){'use strict';
var k=
{composerID:i,
type:c('ReactComposerTaggerActionType').SET_SELECTED_PEOPLE,
selectedPeople:j};

c('ReactComposerDispatcher').dispatch(k);};
h.prototype.

handleSetTaggerShowNUX=
function(i,
j,
k){
'use strict';
var l=
{composerID:i,
type:c('ReactComposerTaggerActionType').SET_TAGGER_SHOW_NUX,
taggerID:j,
showNUX:k};

c('ReactComposerDispatcher').dispatch(l);};
h.prototype.

setShouldHideTaggerButton=
function(i,
j,
k){
'use strict';
var l=
{composerID:i,
type:c('ReactComposerTaggerActionType').SET_SHOULD_HIDE_TAGGER_BUTTON,
taggerID:j,
shouldHideTaggerButton:k};

c('ReactComposerDispatcher').dispatch(l);};
h.prototype.

handleSetTaggerShowTooltip=
function(i,
j,
k){
'use strict';
var l=
{composerID:i,
type:c('ReactComposerTaggerActionType').SET_TAGGER_SHOW_TOOLTIP,
taggerID:j,
showTooltip:k};

c('ReactComposerDispatcher').dispatch(l);};
function h(){'use strict';}


f.exports=new h();}),null);

/** js/react_composer/attachments/status/taggers/ReactComposerTaggerButton.react.js */





__d('ReactComposerTaggerButton.react',['cx','TooltipLink.react','React','emptyFunction','joinClasses'],(function a(b,c,d,e,f,g,h){








var i=c('React').PropTypes,







j=c('React').createClass({displayName:'ReactComposerTaggerButton',
propTypes:
{taggerID:i.string.isRequired,
title:i.string,
tooltip:i.string,
selected:i.bool,
hasData:i.bool,
onSelect:i.func},


getDefaultProps:function k(){

return {title:null,
tooltip:null,
selected:false,
hasData:false,
onSelect:c('emptyFunction')};},



render:function k(){
var l="_3xem"+


(this.props.selected?' '+"_50hx":''),

m=c('joinClasses')("_2vwi"+


(this.props.hasData?' '+"_6xe":''),


this.props.className);



return (c('React').createElement(c('TooltipLink.react'),
{onClick:this._onSelect,
tooltip:this.props.tooltip,
'data-tooltip-content':this.props.tooltip,
className:l,

href:'#',
role:'button'},
c('React').createElement('span',{className:"accessible_elem"},
this.props.title),

c('React').createElement('div',{className:m}),


this.props.children));},




_onSelect:function k(){
this.props.onSelect&&this.props.onSelect(this.props.taggerID);}});



f.exports=j;}),null);

/** js/react_composer/attachments/status/taggers/ReactComposerTaggerButtonMixin.js */





__d('ReactComposerTaggerButtonMixin',['cx','invariant','ReactComposerPropsAndStoreBasedStateMixin','ReactComposerTaggerActions','ReactComposerTaggerButton.react','ReactComposerTaggerStore','React'],(function a(b,c,d,e,f,g,h,i){


















var j=
{mixins:
[c('ReactComposerPropsAndStoreBasedStateMixin')(c('ReactComposerTaggerStore'))],


statics:
{calculateState:function k(l,m){
var n=c('ReactComposerTaggerStore').getSelectedTagger(l);


return {selected:n===this.taggerID,
hasData:c('ReactComposerTaggerStore').hasData(l,this.taggerID),
showNUX:c('ReactComposerTaggerStore').shouldShowNUX(l,this.taggerID),
showTooltip:c('ReactComposerTaggerStore').shouldShowTooltip
(l,
this.taggerID),

shouldHide:
c('ReactComposerTaggerStore').shouldHideTaggerButton
(l,
this.taggerID)};}},





componentWillMount:function k(){

this.constructor.taggerID||i(0,
'`taggerID` attribute should be provided on prototype when using '+
'`ReactComposerTaggerButtonMixin`');},



render:function k(){
if(this.state.shouldHide)
return null;


var l=this.getRef?this.getRef():'';

return (c('React').createElement('div',
{className:"uiContextualLayerParent",
style:{display:'inline-block'}},
c('React').createElement(c('ReactComposerTaggerButton.react'),babelHelpers['extends']
({taggerID:this.constructor.taggerID,
title:this.getTitle(),
tooltip:this.getTooltip(),
className:this.getClassName(),
ref:l,
onSelect:this._onSelect},
this.state),
this.getNUX&&this.getNUX(),
this.props.children)));},





_onSelect:function k(){
this._onSelectX&&this._onSelectX();






if(this.constructor.unselectable!==true)
c('ReactComposerTaggerActions').selectTagger
(this.context.composerID,
this.constructor.loggingName,
this.constructor.taggerID,
this.constructor.disableToggle);}};





f.exports=j;}),null);

/** js/react_composer/flux/ReactComposerPrefillActionTypes.js */





__d('ReactComposerPrefillActionTypes',['keyMirrorRecursive'],(function a(b,c,d,e,f,g){



f.exports=c('keyMirrorRecursive')
({SET_PREFILL_DATA:null},
'ReactComposerPrefillActionTypes');}),null);

/** js/react_composer/flux/ReactComposerPrefillStore.js */





__d('ReactComposerPrefillStore',['invariant','ReactComposerPrefillActionTypes','ReactComposerStoreBase'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits











(k,c('ReactComposerStoreBase'));j=i&&i.prototype;
function k(){'use strict';
var l;
j.constructor.call(this,
function(){

return {prefillConfig:{}};},


function(m){
switch(m.type){
case c('ReactComposerPrefillActionTypes').SET_PREFILL_DATA:
l&&l.$ReactComposerPrefillStore_handleSetPrefillData(m);
break;}});



l=this;}
k.prototype.







getField=function(l,m){'use strict';
return this.$ReactComposerPrefillStore_getNestedField(l,[m]);};
k.prototype.










getAndEraseField=function(l,m){'use strict';
return this.getAndEraseNestedField(l,[m]);};
k.prototype.







getAndEraseNestedField=function(l,m){'use strict';
m.length>0||h(0,'pathToField must not be empty');
var n=this.$ReactComposerPrefillStore_getNestedField(l,m);




setTimeout(function(){
this.$ReactComposerPrefillStore_eraseNestedField(l,m);}.
bind(this),0);
return n;};
k.prototype.

$ReactComposerPrefillStore_getNestedField=function(l,m){'use strict';
var n=this.getComposerData(l).prefillConfig;
for(var o=0;o<m.length;o++)
n=n&&n[m[o]];

return n;};
k.prototype.

$ReactComposerPrefillStore_eraseField=function(l,m){'use strict';
this.$ReactComposerPrefillStore_eraseNestedField(l,[m]);};
k.prototype.

$ReactComposerPrefillStore_eraseNestedField=function(l,m){'use strict';
var n=this.getComposerData(l).prefillConfig;

for(var o=0;o<m.length-1;o++)
n=n&&n[m[o]];

if(n!=undefined)
n[m[m.length-1]]=null;};

k.prototype.

$ReactComposerPrefillStore_handleSetPrefillData=function(l){'use strict';var m=
this.validateAction
(l,
['composerID','prefillConfig']),n=m[0],o=m[1],

p=this.getComposerData(n);

p.prefillConfig=o||{};};



f.exports=new k();}),null);

/** js/react_composer/attachments/status/taggers/ReactComposerTaggerContainerStateMixin.js */






__d('ReactComposerTaggerContainerStateMixin',['invariant','ReactComposerEvents','ReactComposerPrefillStore','ReactComposerPropsAndStoreBasedStateMixin','ReactComposerTaggerActions','ReactComposerTaggerStore','Arbiter','isEmpty'],(function a(b,c,d,e,f,g,h){























var i=
{_prefillSubscription:undefined,

mixins:

[c('ReactComposerPropsAndStoreBasedStateMixin')(c('ReactComposerTaggerStore'))],


statics:
{beforeCalculateInitialState:function j(k,l){
var m=
l.taggerConfig&&l.taggerConfig.defaultData;

if(m){
var n=c('ReactComposerTaggerStore').getTaggerData
(k,
this.taggerID);

if(c('isEmpty')(n))
c('ReactComposerTaggerActions').setTaggerData
(k,
this.loggingName,
this.taggerID,
m);}




if(l.taggerSource)
c('ReactComposerTaggerActions').setTaggerSource
(k,
this.taggerID,
l.taggerSource);},




calculateState:function j(k,l){
var m=c('ReactComposerTaggerStore').getSelectedTagger
(k),


n=c('ReactComposerTaggerStore').getAutoFocusOnSelectedTagger
(k),


o=c('ReactComposerTaggerStore').getTaggerData
(k,
this.taggerID),


p=c('ReactComposerTaggerStore').getTaggerSource
(k,
this.taggerID),


q=m===this.taggerID;

return {autoFocus:n,
isSelected:q,
taggerData:o,
taggerSource:p};}},




componentWillMount:function j(){
this._prefillSubscription=c('Arbiter').subscribe
(c('ReactComposerEvents').SET_PREFILL_DATA+this.context.composerID,
this._handlePrefill);


this.constructor.taggerID||h(0,
'`this.constructor.taggerID` must be provided when using '+
'`ReactComposerTaggerContainerStateMixin`');},



componentDidUpdate:function j(k,l){
if(this.__onTaggerDataChanged&&this.props.fixGametimePromptToAddScore){



var m=Object.keys(l.taggerData).length===0&&
Object.keys(this.state.taggerData).length>0,
n=Object.keys(l.taggerData).length>0&&
Object.keys(this.state.taggerData).length===0;
if(m||n)
this.__onTaggerDataChanged(this.state.taggerData);}},




componentWillUnmount:function j(){
this._prefillSubscription&&this._prefillSubscription.unsubscribe();
this._prefillSubscription=null;},


_handlePrefill:function j(){
var k=c('ReactComposerPrefillStore').getAndEraseNestedField
(this.context.composerID,
['taggersData',this.constructor.taggerID]);


if(k)
c('ReactComposerTaggerActions').setTaggerDataWithoutLogging
(this.context.composerID,
this.constructor.taggerID,
k);}};





f.exports=i;}),null);

/** js/react_composer/attachments/status/taggers/ReactKeyPressHandler.react.js */















__d('ReactKeyPressHandler.react',['Event','SubscriptionsHandler','React'],(function a(b,c,d,e,f,g){





var h=c('React').PropTypes,

i=c('React').createClass({displayName:'ReactKeyPressHandler',
propTypes:
{onKeyDownEvent:h.func.isRequired},


getInitialState:function j(){

return {subscriptions:new (c('SubscriptionsHandler'))()};},



componentDidMount:function j(){



this.state.subscriptions.engage();
this.state.subscriptions.addSubscriptions

(c('Event').listen(document.body,'keydown',function(k){
this.props.onKeyDownEvent&&this.props.onKeyDownEvent(k);}.
bind(this)));},



componentWillUnmount:function j(){
this.state.subscriptions&&this.state.subscriptions.release();},


render:function j(){

return this.props.children;}});



f.exports=i;}),null);

/** js/react_composer/attachments/status/taggers/ReactComposerTaggerHideOnEscapeKeyPress.react.js */














__d('ReactComposerTaggerHideOnEscapeKeyPress.react',['ReactComposerContextMixin','ReactComposerLoggingName','ReactComposerTaggerActions','Keys','ReactKeyPressHandler.react','React'],(function a(b,c,d,e,f,g){








var h=c('React').PropTypes,

i=c('React').createClass({displayName:'ReactComposerTaggerHideOnEscapeKeyPress',
mixins:[c('ReactComposerContextMixin')],



propTypes:
{shouldHideOnEscape:h.bool},


render:function j(){
return this.props.shouldHideOnEscape?
c('React').createElement(c('ReactKeyPressHandler.react'),{onKeyDownEvent:this._onKeyDownEvent},


this.props.children):


this.props.children;},


_onKeyDownEvent:function j(event){
if(event.keyCode===c('Keys').ESC){
event.stopPropagation();
c('ReactComposerTaggerActions').deselectCurrentTagger
(this.context.composerID,
c('ReactComposerLoggingName').ESCAPE_KEY);}}});





f.exports=i;}),null);

/** js/react_composer/attachments/status/taggers/ReactComposerTaggerContainerMixin.js */






__d('ReactComposerTaggerContainerMixin',['invariant','ReactComposerTaggerActions','ReactComposerTaggerContainerStateMixin','ReactComposerTaggerHideOnEscapeKeyPress.react','React'],(function a(b,c,d,e,f,g,h){


















var i=
{mixins:[c('ReactComposerTaggerContainerStateMixin')],



componentWillMount:function j(){

this.constructor.taggerComponent||h(0,
'`this.constructor.taggerComponent` must be provided when using '+
'`ReactComposerTaggerContainerStateMixin`');},



render:function j(){
if(!this.state.isSelected)
return c('React').createElement('noscript',null);


var k=this.constructor.taggerComponent,
l=this.constructor.enableHideOnEscape&&
this.state.isSelected;

return (c('React').createElement('div',
{'data-testid':this.constructor.webDriverTestID},
c('React').createElement(c('ReactComposerTaggerHideOnEscapeKeyPress.react'),
{shouldHideOnEscape:l},
c('React').createElement(k,babelHelpers['extends']({},
this.props,
{autoFocus:this.state.autoFocus,
taggerSource:this.state.taggerSource,
taggerData:this.state.taggerData,
onSelect:this._onTaggerDataChanged})))));},






_onTaggerDataChanged:function j(k){


if(this._suppressUpdateLogging&&
this._suppressUpdateLogging(k)){
c('ReactComposerTaggerActions').setTaggerDataWithoutLogging
(this.context.composerID,
this.constructor.taggerID,
k);}else 


c('ReactComposerTaggerActions').setTaggerData
(this.context.composerID,
this.constructor.loggingName,
this.constructor.taggerID,
k);



this.__onTaggerDataChanged&&this.__onTaggerDataChanged(k);

this.props.onSelect&&this.props.onSelect(k);}};



f.exports=i;}),null);

/** js/react_composer/attachments/status/taggers/ReactComposerTaggerViewStyles.js */





__d('ReactComposerTaggerViewStyles',['React'],(function a(b,c,d,e,f,g){

var h=320,
i=210,
j=40,



k=c('React').PropTypes,

l=
{useScrollableArea:k.bool.isRequired,
itemHeight:k.number,
maxHeight:k.number};





f.exports=

{DEFAULT:
{useScrollableArea:false},



SCROLLABLE:
{useScrollableArea:true,
itemHeight:j,
maxHeight:h},



SCROLLABLE_SHORT:
{useScrollableArea:true,
itemHeight:j,
maxHeight:i},


Shape:l};}),null);

/** js/react_composer/attachments/status/taggers/presenter/ReactComposerTaggerViewMixin.js */





__d('ReactComposerTaggerViewMixin',['cx','ReactComposerTaggerViewStyles','React','ReactDOM','ScrollableArea.react','ScrollableArea','TypeaheadViewPropTypes','joinClasses','setImmediate'],(function a(b,c,d,e,f,g,h){












var i=c('React').PropTypes,





j=
{propTypes:Object.assign

({customIcon:i.object,
taggerViewStyle:i.shape(c('ReactComposerTaggerViewStyles').Shape),
taggerListClassName:i.string},c('TypeaheadViewPropTypes')),




getDefaultProps:function k(){

return {role:'listbox',
taggerViewStyle:c('ReactComposerTaggerViewStyles').DEFAULT,
taggerListClassName:''};},



render:function k(){
var l=this.props.entries.length,
m="_599r"+

(!l?' '+"_599s":'');

m=c('joinClasses')(this.props.taggerListClassName,m);

var n=this.props.entries.map(this._renderItem),

o=
c('React').createElement('ul',
{className:m,
id:this.props.ariaOwneeID,
role:this.props.role,
ref:'list'},
n),


p=this.props.taggerViewStyle;
if(p.useScrollableArea){
var q=p.itemHeight*l;
if(q>p.maxHeight)
o=
c('React').createElement(c('ScrollableArea.react'),
{ref:this._scrollableAreaMount,
className:"_53vr",
height:p.maxHeight},
o);}




return o;},


_renderItem:function k(l){
var m=l===this.props.highlightedEntry,n=

l.getAuxiliaryData(),o=n.isRegexEntry,

p=o?
this.getRegexItemImpl():
this.getItemImpl(),

q=
(m?"selected":'')+
(o?' '+"_3ooq":'');



return (c('React').createElement(p,
{className:q,
key:l.getUniqueID(),
entry:l,
highlighted:m,
onSelect:this.props.onSelect,
onHighlight:this.props.onHighlight,
onRenderHighlight:this._onRenderHighlight,
customIcon:this.props.customIcon}));},




_onRenderHighlight:function k(l){
if(this._scrollableArea)
this._scrollableArea.scrollIntoView(l,false);


this.props.onRenderHighlight(l);},


_scrollableAreaMount:function k(l){
var m=c('ReactDOM').findDOMNode(l);

this._scrollableArea=c('ScrollableArea').getInstance(m);





c('setImmediate')(function(){
this._scrollableArea&&this._scrollableArea.resize();}.
bind(this));}};




f.exports=j;}),null);

/** js/react_composer/attachments/status/taggers/presenter/ReactComposerTaggerView.react.js */





__d('ReactComposerTaggerView.react',['ReactComposerTaggerViewMixin','React','XUITypeaheadViewItem.react'],(function a(b,c,d,e,f,g){






var h=c('React').createClass({displayName:'ReactComposerTaggerView',
mixins:[c('ReactComposerTaggerViewMixin')],

getItemImpl:function i(){
return c('XUITypeaheadViewItem.react');}});



f.exports=h;}),null);

/** js/react_composer/attachments/status/taggers/presenter/ReactComposerTaggerPresenter.js */





__d('ReactComposerTaggerPresenter',['ReactComposerTaggerView.react'],(function a(b,c,d,e,f,g){



f.exports=
{ViewRenderer:c('ReactComposerTaggerView.react'),
useLayer:true};}),null);
