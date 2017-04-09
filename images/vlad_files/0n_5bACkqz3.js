if (self.CavalryLogger) { CavalryLogger.start_js(["dGZrJ"]); }

/** js/components/core/UI/LoadingIndicator/LoadingIndicator.react.js */




__d('LoadingIndicator.react',['cx','ix','React','Image.react','keyMirror','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j,k,














l=c('keyMirror')
({white:true,
blue:true,
black:true}),


m=c('keyMirror')
({small:true,
medium:true,
large:true}),


n=
{white:
{large:i("85426"),
medium:i("85427"),
small:i("85428")},

blue:
{large:i("85429"),
small:i("85430")},

black:
{large:i("85423")}};j=babelHelpers.inherits



(o,c('React').Component);k=j&&j.prototype;o.prototype.
render=function(){'use strict';

var p=this.props.color,
q=this.props.size;

if(!n[p])



return c('React').createElement('span',null);


if(!n[p][q])





return c('React').createElement('span',null);


var r=
this.props.showonasync?"uiLoadingIndicatorAsync":'',


s=n[p][q];

return (c('React').createElement(c('Image.react'),babelHelpers['extends']({},
this.props,
{src:s,
className:c('joinClasses')(this.props.className,r)})));};


function o(){'use strict';j.apply(this,arguments);}


o.SIZES=m;
o.COLORS=l;

f.exports=o;}),null);

/** js/components/core/UI/PopoverMenu/MenuSeparator.react.js */





__d('MenuSeparator.react',['MenuSeparator'],(function a(b,c,d,e,f,g){



function h(j){
j.isReactLegacyFactory={};
j.type=j;}




var i=c('MenuSeparator');

h(i);

f.exports=i;}),null);

/** js/modules/LinkController.js */





__d('LinkController',['DataStore','Event','Parent','trackReferrer'],(function a(b,c,d,e,f,g){










var h='@@LinkController',
i=[],
j=[],














k=




{registerHandler:function q(r){
i.push(r);},









registerFallbackHandler:function q(r){
j.push(r);}};








function l(q){
var r=q.getTarget(),
s=c('Parent').byTag(r,'a'),
t=n(s);

if(!t||p(r)||c('DataStore').get(s,h)||
t.endsWith('#'))
return;


var u=c('Event').listen(s,'click',function(v){
c('trackReferrer')(s,t);


if(!s.rel&&!s.target&&!o(v))
m(s,v);});




c('DataStore').set(s,h,u);}


function m(q,event){
i.concat(j).every(function(r){
if(r(q,event)===false){
event.prevent();
return false;}

return true;});}







function n(q){
if(q&&!q.rel){
var r=q.getAttribute('href');
if(r){
var s=r.match(/^(\w+):/);
if(!s||s[1].match(/^http/i))
return r;}}



return null;}


function o(event){
return event.getModifiers().any||event.which&&event.which!==1;}


function p(q){

return (q.nodeName==='INPUT'&&
q.type==='file');}











c('Event').listen(document.documentElement,'mousedown',l);
c('Event').listen(document.documentElement,'keydown',l);

f.exports=k;}),null);

/** js/modules/PageTransitionPriorities.js */









__d("PageTransitionPriorities",[],(function a(b,c,d,e,f,g){

var h=5,
i=h+1;

f.exports=
{DEFAULT:h,
LEFT_NAV:i,
SOCIAL_SEARCH_DIALOG:i+1};}),null);

/** js/modules/computeRelativeURI.js */




__d('computeRelativeURI',['URI','isFacebookURI','isEmpty'],(function a(b,c,d,e,f,g){













function h(j,k){
if(!k)
return j;

if(k.charAt(0)=='/')
return k;


var l=j.split('/').slice(0,-1);
l[0]!=='';



k.split('/').forEach(function(m){
if(!(m=='.'))

if(m=='..'){
if(l.length>1)
l=l.slice(0,-1);}else 


l.push(m);});


return l.join('/');}

























function i(j,k){
var l=new (c('URI'))(),m=k;
j=new (c('URI'))(j);
k=new (c('URI'))(k);
if(k.getDomain()&&!c('isFacebookURI')(k))



return m;


var n=j,
o=['Protocol','Domain','Port',
'Path','QueryData','Fragment'];
o.forEach(function(p){
var q=p=='Path'&&n===j;
if(q)
l.setPath(h(j.getPath(),k.getPath()));


if(!c('isEmpty')(k['get'+p]()))



n=k;


if(!q)
l['set'+p](n['get'+p]());});



return l;}


f.exports=i;}),null);

/** js/modules/PageTransitionsRegistrar.js */




__d('PageTransitionsRegistrar',['invariant','Bootloader','DOMQuery','Event','Form','LinkController','PageTransitionPriorities','Parent','Run','URI','computeRelativeURI','goURI','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g,h){
















c('Run').onAfterLoad(function(){
c('Bootloader').loadModules(["PageTransitions"],function(s){
if(s&&s._init)
s._init();},

'PageTransitionsRegistrar');});


var i=[],
j=[],
k=
{DELAY_HISTORY:'delay_history_PTR',



































registerHandler:function s(t,u){

t!=null||h(0,
'trying to call registerHandler with null handler');

u=u||c('PageTransitionPriorities').DEFAULT;
if(!i[u])
i[u]=[];

i[u].push(t);},














removeHandler:function s(t,u){
u=u||c('PageTransitionPriorities').DEFAULT;
var v=-1;
if(i[u])
v=i[u].indexOf(t);

if(v>-1)
i[u].splice(v,1);},









registerCompletionCallback:function s(t){
j.push(t);},


getMostRecentURI:r,


_getTransitionHandlers:function s(){
return i;},


_getCompletionCallbacks:function s(){
return j;},


_resetCompletionCallbacks:function s(){
j=[];}},





l=null,
m=null;


function n(s){
m=s;
c('setTimeoutAcrossTransitions')
(function(){m=null;},
0);}





function o(event){
var s=m;
if(s){
if(!event.isDefaultPrevented()){
p(m);
c('goURI')(s.getAttribute('href'));}

event.kill();}else{

l=event.getTarget();
c('setTimeoutAcrossTransitions')
(function(){l=null;},
0);}}










function p(s){
var t=s.getAttribute('href'),
u=c('computeRelativeURI')
(r().getQualifiedURI(),
t).
toString();
if(t!=u)
s.setAttribute('href',u);}



function q(event){
var s=event.getTarget();


if(c('Form').getAttribute(s,'rel')||c('Form').getAttribute(s,'target'))
return;

var t=new (c('URI'))(c('Form').getAttribute(s,'action')),
u=c('computeRelativeURI')(r(),t);
s.setAttribute('action',u.toString());
if((c('Form').getAttribute(s,'method')||'GET').toUpperCase()=='GET'){
var v=c('Form').serialize(s),
w=l;
if(w&&
(c('DOMQuery').isNodeOfType(w,'input')&&w.type==='submit'||
(w=c('Parent').byTag(w,'button')))&&w.name)
v[w.name]=w.value;

c('goURI')(u.addQueryData(v));
event.kill();}}




c('LinkController').registerFallbackHandler(n);




c('Event').listen(document,'click',o,c('Event').Priority._BUBBLE);
c('Event').listen(document,'submit',q,c('Event').Priority._BUBBLE);

function r(){
if(b.PageTransitions&&b.PageTransitions.isInitialized()){
return b.PageTransitions.getMostRecentURI();}else{

var s=c('URI').getRequestURI(false),
t=s.getUnqualifiedURI(),
u=new (c('URI'))(t).setFragment(null),
v=t.getFragment();
if(v.charAt(0)==='!'&&u.toString()===v.substr(1))



t=u;

return t;}}



f.exports=k;}),null);

/** js/ui/layer/behaviors/LayerHideOnTransition.js */







__d('LayerHideOnTransition',['PageTransitionsRegistrar','setTimeout'],(function a(b,c,d,e,f,g){





function h(i){'use strict';
this._layer=i;}
h.prototype.

enable=function(){'use strict';
this._enabled=true;





if(!this._subscribed)


c('setTimeout')(this._subscribe.bind(this),0);};

h.prototype.

disable=function(){'use strict';
this._enabled=false;};
h.prototype.

_handler=function(){'use strict';
if(this._enabled)
this._layer.hide();


this._subscribe();};
h.prototype.

_subscribe=function(){'use strict';
c('PageTransitionsRegistrar').registerHandler(this._handler.bind(this));
this._subscribed=true;};



Object.assign(h.prototype,
{_enabled:false,
_subscribed:false});


f.exports=h;}),null);

/** js/modules/Rect.js */





__d('Rect',['invariant','Vector','$'],(function a(b,c,d,e,f,g,h){
































function i
(j,
k,
l,
m,
n){
'use strict';
if(arguments.length===1){
if(j instanceof i)
return j;

if(j instanceof c('Vector'))
return new i(j.y,j.x,j.y,j.x,j.domain);

return i.getElementBounds(c('$')(j));}



typeof j==='number'&&
typeof k==='number'&&
typeof l==='number'&&
typeof m==='number'&&
(!n||typeof n==='string')||h(0,
'first 4 params should be numbers and domain should be string');

Object.assign(this,
{t:j,
r:k,
b:l,
l:m,
domain:n||'pure'});


return this;}
i.prototype.

w=function(){'use strict';return this.r-this.l;};i.prototype.
h=function(){'use strict';return this.b-this.t;};i.prototype.

getWidth=function(){'use strict';
return this.w();};
i.prototype.

getHeight=function(){'use strict';
return this.h();};
i.prototype.

toString=function(){'use strict';

return ('(('+
this.l+', '+this.t+
'), ('+
this.r+', '+this.b+
'))');};

i.prototype.




contains=function(j){'use strict';
j=new i(j).convertTo(this.domain);
var k=this;

return k.l<=j.l&&k.r>=j.r&&k.t<=j.t&&k.b>=j.b;};
i.prototype.







isEqualTo=function(j){'use strict';

return (this.t===j.t&&
this.r===j.r&&
this.b===j.b&&
this.l===j.l&&
this.domain===j.domain);};

i.prototype.





add=function(j,k){'use strict';
if(arguments.length==1){
if(j instanceof i&&j.domain!='pure')
j=j.convertTo(this.domain);

if(j instanceof c('Vector'))
return this.add(j.x,j.y);

return this;}

var l=parseFloat(j),
m=parseFloat(k);
return new i
(this.t+m,
this.r+l,
this.b+m,
this.l+l,
this.domain);};
i.prototype.





sub=function(j,k){'use strict';
if(arguments.length==1&&j instanceof c('Vector')){
return this.add(j.mul(-1));}else
if(typeof j==='number'&&typeof k==='number')
return this.add(-j,-k);

return this;};
i.prototype.


rotateAroundOrigin=function(j){'use strict';
var k=this.getCenter().rotate(j*Math.PI/2),

l=0,
m=0;


if(j%2){
l=this.h();
m=this.w();}else{

l=this.w();
m=this.h();}


var n=k.y-m/2,
o=k.x-l/2,
p=n+m,
q=o+l;

return new i(n,q,p,o,this.domain);};
i.prototype.













boundWithin=function(j){'use strict';
var k=0,
l=0;

if(this.l<j.l){
k=j.l-this.l;}else
if(this.r>j.r)
k=j.r-this.r;


if(this.t<j.t){
l=j.t-this.t;}else
if(this.b>j.b)
l=j.b-this.b;


return this.add(k,l);};
i.prototype.

getCenter=function(){'use strict';
return new (c('Vector'))
(this.l+this.w()/2,
this.t+this.h()/2,
this.domain);};

i.prototype.

getTop=function(){'use strict';
return this.t;};
i.prototype.

getRight=function(){'use strict';
return this.r;};
i.prototype.

getBottom=function(){'use strict';
return this.b;};
i.prototype.

getLeft=function(){'use strict';
return this.l;};
i.prototype.

getPositionVector=function(){'use strict';
return new (c('Vector'))(this.l,this.t,this.domain);};
i.prototype.

getDimensionVector=function(){'use strict';
return new (c('Vector'))(this.w(),this.h(),'pure');};
i.prototype.

convertTo=function(j){'use strict';
if(this.domain==j)
return this;


if(j=='pure')
return new i(this.t,this.r,this.b,this.l,'pure');


if(this.domain=='pure')



return new i(0,0,0,0);


var k=new (c('Vector'))(this.l,this.t,this.domain).convertTo(j);

return new i(k.y,k.x+this.w(),k.y+this.h(),k.x,j);};
i.


deserialize=function(j){'use strict';
var k=j.split(':');
return new i
(parseFloat(k[1]),
parseFloat(k[2]),
parseFloat(k[3]),
parseFloat(k[0]));};

i.

newFromVectors=function(j,k){'use strict';
return new i(j.y,j.x+k.x,j.y+k.y,j.x,j.domain);};
i.

getElementBounds=function(j){'use strict';
return i.newFromVectors
(c('Vector').getElementPosition(j),
c('Vector').getElementDimensions(j));};
i.

getViewportBounds=function(){'use strict';
return i.newFromVectors
(c('Vector').getScrollPosition(),
c('Vector').getViewportDimensions());};
i.

getViewportWithoutScrollbarsBounds=function(){'use strict';
return i.newFromVectors
(c('Vector').getScrollPosition(),
c('Vector').getViewportWithoutScrollbarDimensions());};
i.

minimumBoundingBox=function(j){'use strict';









var k=new i
(Infinity,
-Infinity,
-Infinity,
Infinity),


l;
for(var m=0;m<j.length;m++){
l=j[m];
k.t=Math.min(k.t,l.t);
k.r=Math.max(k.r,l.r);
k.b=Math.max(k.b,l.b);
k.l=Math.min(k.l,l.l);}

return k;};



f.exports=i;}),null);

/** js/vizzy/SVGChecker.js */





__d('SVGChecker',[],(function a(b,c,d,e,f,g){

















f.exports=
{isSVG:function h(i){
return !!i.ownerSVGElement||i.tagName.toLowerCase()==='svg';},


isDisplayed:function h

(i){


try{var k=i.getBBox();
if(k&&(k.height===0||k.width===0))
return false;}catch(

j){
return false;}

return true;}};}),
null);

/** js/modules/getOverlayZIndex.js */




__d('getOverlayZIndex',['Style'],(function a(b,c,d,e,f,g){














function h(i,j){
j=j||document.body;
var k=[];
while(i&&i!==j){
k.push(i);
i=i.parentNode;}

if(i!==j)

return 0;

for(var l=k.length-1;l>=0;l--){
var m=k[l];
if(c('Style').get(m,'position')!='static'){
var n=parseInt(c('Style').get(m,'z-index'),10);
if(!isNaN(n))
return n;}}



return 0;}


f.exports=h;}),null);

/** shared/core/getOwnObjectValues.js */






__d("getOwnObjectValues",[],(function a(b,c,d,e,f,g){











function h
(i){

return Object.keys(i).map(function(j){return i[j];});}


f.exports=h;}),null);

/** js/ui/layer/ContextualLayer.js */










__d('ContextualLayer',['AccessibilityConfig','Arbiter','ARIA','Bootloader','ContextualThing','CSS','DataStore','DOM','Event','Layer','LayerHideOnTransition','Locale','Parent','Rect','Scroll','Style','SVGChecker','Vector','arrayContains','containsNode','emptyFunction','getOwnObjectValues','getOffsetParent','getOverlayZIndex','isElementNode','removeFromArray','throttle'],(function a(b,c,d,e,f,g){var h,i;


































function j(p){
return p.getPosition()==='left'||
p.isVertical()&&p.getAlignment()==='right';}
h=babelHelpers.inherits

























(k,c('Layer'));i=h&&h.prototype;k.prototype.




_configure=function(p,q){'use strict';
if(p.dialogRole!=='dialog')
this._dialogRole=p.dialogRole;

if(p.shouldSetARIAProperties===false)
this._shouldSetARIAProperties=p.shouldSetARIAProperties;

if(p.label)
this._label=p.label;

if(p.labelledBy)
this._labelledBy=p.labelledBy;


i._configure.call(this,p,q);

if(p.context){
this.setContext(p.context);}else
if(p.contextID){
this._setContextID(p.contextID);}else
if(p.contextSelector){
this._setContextSelector(p.contextSelector);
if(c('AccessibilityConfig').a11yNUXDialog)
this._setARIAProperties();}


this.setPosition(p.position);
this.setAlignment(p.alignment);
this.setOffsetX(p.offsetX);
this.setOffsetY(p.offsetY);
this.setArrowDimensions(p.arrowDimensions);
this._content=q;};
k.prototype.




_getDefaultBehaviors=function(){'use strict';
var p=k.getDefaultBehaviorsAsObject();
return i._getDefaultBehaviors.call(this).concat
(c('getOwnObjectValues')(p));};

k.prototype.






_buildWrapper=function(p,q){'use strict';
this._contentWrapper=
c('DOM').create('div',{className:'uiContextualLayer'},q);


if(c('AccessibilityConfig').a11yNUXDialog){

if(this._dialogRole)
this._contentWrapper.setAttribute('role',this._dialogRole);

if(this._labelledBy&&this._labelledBy.length){
this._contentWrapper.setAttribute
('aria-labelledby',
this._labelledBy.join(' '));}else

if(this._label)
this._contentWrapper.setAttribute
('aria-label',
this._label);


if(this._dialogRole==='alert')
this._contentWrapper.setAttribute('aria-atomic','true');}



return c('DOM').create
('div',

{className:'uiContextualLayerPositioner',
'data-testid':p['data-testid']},

this._contentWrapper);};
k.prototype.












getInsertParent=function(){'use strict';
var p=this._insertParent;
if(!p){
var q=this.getContext();
if(q)
p=c('Parent').byClass(q,'uiContextualLayerParent');}


return p||i.getInsertParent.call(this);};
k.prototype.





setContent=function(p){'use strict';
this._content=p;
c('DOM').setContent(this._contentWrapper,this._content);
this._shown&&this.updatePosition();
return this;};
k.prototype.







setContext=function(p){'use strict';
return this.setContextWithBounds(p,null);};
k.prototype.














setContextWithBounds=function(p,q){'use strict';


if(this._contextNode===p&&
q&&
this._contextBounds&&
q.isEqualTo(this._contextBounds))
return this;


this._contextNode=p;

var r=
q&&this._contextBounds&&
q.t===this._contextBounds.t&&
q.r===this._contextBounds.r&&
q.b===this._contextBounds.b&&
q.l===this._contextBounds.l;


if(r)
return this;


this._contextBounds=q||null;
this._contextSelector=this._contextScrollParent=null;
if(this._shown){
c('ContextualThing').register(this.getRoot(),this._contextNode);
this.updatePosition();}

this._setParentSubscription();
this._setARIAProperties();
return this;};
k.prototype.





shouldSetARIAProperties=function(p){'use strict';
this._shouldSetARIAProperties=p;
return this;};
k.prototype.




_setARIAProperties=function(){'use strict';
if(!this._shouldSetARIAProperties)
return this;



if(!c('AccessibilityConfig').a11yNUXDialog||
this._dialogRole==='dialog'){

c('ARIA').setPopup(this.getCausalElement(),this.getRoot());}else

if(c('AccessibilityConfig').a11yNUXDialog&&
this._dialogRole==='region')

c('Bootloader').loadModules
(["ContextualLayerInlineTabOrder"],
function(p){
if(!this.hasBehavior(p))
this.enableBehavior(p);}.

bind(this),'ContextualLayer');



return this;};
k.prototype.








_setContextID=function(p){'use strict';
this._contextSelector='#'+p;
this._contextNode=null;};
k.prototype.








_setContextSelector=function(p){'use strict';
this._contextSelector=p;
this._contextNode=null;};
k.prototype.







getCausalElement=function(){'use strict';
return i.getCausalElement.call(this)||this.getContext();};
k.prototype.






_setParentSubscription=function(){'use strict';

var p=this.getContext(),
q=null;
while(p!==null){
q=c('DataStore').get(p,'layer');
if(q)
break;

p=p.parentNode;}




if(q===this._parentLayer)
return;




if(this._parentLayer&&this._parentSubscription){
this._parentLayer.unsubscribe(this._parentSubscription);
this._parentSubscription=null;}



if(q)
this._parentSubscription=q.subscribe
('hide',
this.hide.bind(this));



this._parentLayer=q;};
k.prototype.





setPosition=function(p){'use strict';
if(this.getOrientation().setDefaultPosition(p))
this._shown&&this.updatePosition();

return this;};
k.prototype.





setAlignment=function(p){'use strict';
if(this.getOrientation().setDefaultAlignment(p))
this._shown&&this.updatePosition();

return this;};
k.prototype.





setOffsetX=function(p){'use strict';
if(this.getOrientation().setDefaultOffsetX(p))
this._shown&&this.updatePosition();

return this;};
k.prototype.

setArrowDimensions=function(p){'use strict';
if(p&&
this.getOrientation().setArrowOffset(p.offset))
this._shown&&this.updatePosition();

return this;};
k.prototype.





setOffsetY=function(p){'use strict';
if(this.getOrientation().setDefaultOffsetY(p))
this._shown&&this.updatePosition();

return this;};
k.prototype.




getPosition=function(){'use strict';
return this.getOrientation().getPosition();};
k.prototype.




getOrientation=function(){'use strict';
if(!this._orientation)
this._orientation=new o();

return this._orientation;};
k.prototype.




getContentRoot=function(){'use strict';
return this._contentWrapper;};
k.prototype.




getContent=function(){'use strict';
return this._content;};
k.prototype.




getContext=function(){'use strict';
if(!this._contextNode)





this._contextNode=c('DOM').find(document,this._contextSelector);

return this._contextNode;};
k.prototype.








getContextBounds=function(p){'use strict';
if(this._contextBounds)
return this._contextBounds.convertTo(p);


var q=this.getContext();
return c('Rect').newFromVectors
(c('Vector').getElementPosition(q,p),
c('Vector').getElementDimensions(q));};

k.prototype.




getContextScrollParent=function(){'use strict';
if(!this._contextScrollParent){
this._contextScrollParent=c('Style').getScrollParent(this.getContext());}else
if(c('isElementNode')(this._contextScrollParent)&&
!c('containsNode')(document.documentElement,this._contextScrollParent))




this._contextScrollParent=c('Style').getScrollParent(this.getContext());

return this._contextScrollParent;};
k.prototype.





setInsertParent=function(p){'use strict';
this._insertScrollParent=null;
return i.setInsertParent.call(this,p);};
k.prototype.




getInsertScrollParent=function(){'use strict';
if(!this._insertScrollParent)
this._insertScrollParent=c('Style').getScrollParent(this.getInsertParent());

return this._insertScrollParent;};
k.prototype.






show=function(){'use strict';
if(this._shown)
return this;


i.show.call(this);


if(this._shown){
c('ContextualThing').register(this.getRoot(),this.getContext());
l.push(this);
this._resizeListener=this._resizeListener||
c('Event').listen
(window,
'resize',
c('throttle')(function(){


if(this._shown)
this.updatePosition();}.

bind(this)));}


return this;};
k.prototype.






finishHide=function(){'use strict';
c('removeFromArray')(l,this);
this._resizeListener&&this._resizeListener.remove();
this._resizeListener=null;


this._insertScrollParent=null;

return i.finishHide.call(this);};
k.prototype.




isFixed=function(){'use strict';

return (c('Style').isFixed(this.getContext())&&
!c('Style').isFixed(this.getInsertParent()));};

k.prototype.









updatePosition=function(){'use strict';

var p=this.getContext();
if(!p)
return false;


var q=this.isFixed();


if(!q&&
!(p.offsetParent||
c('SVGChecker').isSVG(p)&&c('SVGChecker').isDisplayed(p)))

return false;


var r=this.getRoot();



c('Style').set(r,'width',c('Vector').getViewportDimensions().x+'px');

var s=this.getOrientation();

this.inform('adjust',s.reset());
if(!s.isValid())
return false;

this._updateWrapperPosition(s);
this._updateWrapperClass(s);



c('CSS').conditionClass
(r,
'uiContextualLayerPositionerFixed',
q);

var t,u,
v=q?'viewport':'document',
w=q?document.documentElement:c('getOffsetParent')(r);
if(w===document.documentElement){
t=new (c('Vector'))(0,0);


u=document.documentElement.clientWidth;}else
if(!r.offsetParent){

return false;}else{

t=c('Vector').getElementPosition(w,v);
u=w.offsetWidth;
if(w!==document.body)
t=t.sub
(new (c('Vector'))(c('Scroll').getLeft(w),c('Scroll').getTop(w)));}



var x=this.getContextBounds(v),

y=x.l-t.x,
z=x.t-t.y,
aa=x.h(),
ba=x.w(),

ca=c('Locale').isRTL();


if(s.getPosition()==='below')
z+=aa;




if((s.getPosition()==='right'||
s.isVertical()&&
s.getAlignment()==='right')!=ca)
y+=ba;


var da=s.getOffsetX();
if(s.isVertical()&&s.getAlignment()==='center')
da+=(ba-this.getContentRoot().offsetWidth)/2;

if(ca)
da*=-1;





var ea='left',
fa=Math.floor(y+da);
if(j(s)!==ca){
ea='right';
fa=u-fa;}

c('Style').set(r,ea,fa+'px');
c('Style').set(r,ea==='left'?'right':'left','');


var ga=this.getInsertScrollParent(),
ha;
if(ga!==window){
ha=ga.clientWidth;}else 

ha=document.documentElement.clientWidth;

var ia=c('Vector').getElementPosition(r).x;
if(ea==='left'&&ha-ia>0){
c('Style').set(r,'width',ha-ia+'px');}else
if(ea==='right'&&ia+r.offsetWidth>0){
c('Style').set(r,'width',ia+r.offsetWidth+'px');}else 

c('Style').set(r,'width','');


c('Style').set(r,'top',z+s.getOffsetY()+'px');

var ja=c('getOverlayZIndex')(p,this.getInsertParent());
c('Style').set(r,'z-index',ja>200?ja:'');

this.inform('reposition',s);
return true;};
k.prototype.







_updateWrapperPosition=function(p){'use strict';

var q=p.getPosition()==='above';
c('Style').set(this._contentWrapper,'bottom',q?'0':null);


var r=c('Locale').isRTL()?'left':'right',
s=j(p);
c('Style').set(this._contentWrapper,r,s?'0':null);};
k.prototype.






_updateWrapperClass=function(p){'use strict';
var q=p.getClassName();
if(q===this._orientationClass)
return;

if(this._orientationClass)
c('CSS').removeClass(this._contentWrapper,this._orientationClass);

this._orientationClass=q;
c('CSS').addClass(this._contentWrapper,q);};
k.prototype.










simulateOrientation=function(p,q){'use strict';
var r=p.getClassName();
if(r===this._orientationClass){
return q();}else{

if(this._orientationClass)
c('CSS').removeClass(this._contentWrapper,this._orientationClass);

c('CSS').addClass(this._contentWrapper,r);
var s=q();
c('CSS').removeClass(this._contentWrapper,r);
if(this._orientationClass)
c('CSS').addClass(this._contentWrapper,this._orientationClass);

return s;}};

k.prototype.






destroy=function(){'use strict';
i.destroy.call(this);
this._contentWrapper=null;
this._content=null;
return this;};
k.prototype.




getArrowDimensions=function(){'use strict';
return this._config.arrowDimensions||
{offset:0,
length:0};};

k.

getDefaultBehaviorsAsObject=function(){'use strict';

return {LayerHideOnTransition:c('LayerHideOnTransition')};};

function k(){'use strict';h.apply(this,arguments);}



var l=[];





c('Arbiter').subscribe('reflow',function(){
l.forEach(function(p){
if(p.updatePosition()===false)
p.hide();});});




Object.assign(k.prototype,
{_contentWrapper:null,
_content:null,
_contextNode:null,
_contextBounds:null,
_contextSelector:null,
_dialogRole:'dialog',
_label:null,
_labelledBy:[],
_parentLayer:null,
_parentSubscription:null,
_orientation:null,
_orientationClass:null,
_shouldSetARIAProperties:true});


var m=c('emptyFunction').thatReturnsArgument,
n=c('emptyFunction').thatReturnsArgument;



























function o(){'use strict';
this._default=
{_position:'above',
_alignment:'left',
_offsetX:0,
_offsetY:0,
_valid:true,
_preferMoreContentShownRect:false};

this.reset();}
o.prototype.





setPosition=function(p){'use strict';
this._position=m(p);
return this;};
o.prototype.





setAlignment=function(p){'use strict';
this._alignment=n(p);
return this;};
o.prototype.




getOppositePosition=function(){'use strict';
return o.OPPOSITE[this.getPosition()];};
o.prototype.




invalidate=function(){'use strict';
this._valid=false;
return this;};
o.prototype.




getPosition=function(){'use strict';
return this._position||'above';};
o.prototype.




getAlignment=function(){'use strict';
return this._alignment||'left';};
o.prototype.








getOffsetX=function(){'use strict';
var p=this._offsetX||0;
if(!this.isVertical()){
if(this._default._position!==this._position)
p*=-1;}else

if(this._default._alignment!==this._alignment)
p*=-1;

return p;};
o.prototype.




getOffsetY=function(){'use strict';
var p=this._offsetY||0;
if(this.isVertical()&&this._default._position!==this._position)
p*=-1;

return p;};
o.prototype.




getClassName=function(){'use strict';
var p=this.getAlignment(),
q=this.getPosition();
if(q==='below'){
if(p==='left'){
return 'uiContextualLayerBelowLeft';}else
if(p==='right'){
return 'uiContextualLayerBelowRight';}else 

return 'uiContextualLayerBelowCenter';}else

if(q==='above'){
if(p==='left'){
return 'uiContextualLayerAboveLeft';}else
if(p==='right'){
return 'uiContextualLayerAboveRight';}else 

return 'uiContextualLayerAboveCenter';}else

if(q==='left'){
return 'uiContextualLayerLeft';}else 

return 'uiContextualLayerRight';};

o.prototype.




isValid=function(){'use strict';
return this._valid;};
o.prototype.




isVertical=function(){'use strict';
return this.getPosition()==='above'||this.getPosition()==='below';};
o.prototype.




reset=function(){'use strict';
Object.assign(this,this._default);
return this;};
o.prototype.







setDefaultPosition=function(p){'use strict';
var q=this._default._position;
this._default._position=m(p);
return q!==p;};
o.prototype.





setDefaultAlignment=function(p){'use strict';
var q=this._default._alignment;
this._default._alignment=n(p);
return q!==p;};
o.prototype.





setDefaultOffsetX=function(p){'use strict';
var q=this._default._offsetX;
this._default._offsetX=p;
return q!==p;};
o.prototype.

setArrowOffset=function(p){'use strict';
var q=this._default._arrowOffset;
this._default._arrowOffset=p;
return q!==p;};
o.prototype.

getArrowOffset=function(){'use strict';
return this._default._arrowOffset||0;};
o.prototype.





setDefaultOffsetY=function(p){'use strict';
var q=this._default._offsetY;
this._default._offsetY=p;
return q!==p;};
o.prototype.





setPreferMoreContentShownRect=function(p){'use strict';
var q=this._default._preferMoreContentShownRect;
this._default._preferMoreContentShownRect=p;
return q!==p;};
o.prototype.

getPreferMoreContentShownRect=function(){'use strict';
return this._default._preferMoreContentShownRect;};



o.OPPOSITE=
{above:'below',
below:'above',
left:'right',
right:'left'};


f.exports=k;}),null);

/** js/ui/layer/behaviors/LayerHideOnEscape.js */





__d('LayerHideOnEscape',['Event','Keys'],(function a(b,c,d,e,f,g){








function h(i){'use strict';
this._layer=i;}
h.prototype.

enable=function(){'use strict';
this._subscription=this._layer.subscribe('key',this._handle.bind(this));};
h.prototype.

disable=function(){'use strict';
this._subscription.unsubscribe();
this._subscription=null;};
h.prototype.

_handle=function(i,event){'use strict';
if(c('Event').getKeyCode(event)===c('Keys').ESC){
this._layer.hide();
return false;}};




Object.assign(h.prototype,
{_subscription:null});


f.exports=h;}),null);

/** js/components/core/UI/PopoverMenu/PopoverMenu.react.js */




__d('PopoverMenu.react',['cx','CSS','InlineBlock.react','Popover','PopoverMenu','React','ReactDOM','SubscriptionsHandler','joinClasses','areEqual','setImmediate'],(function a(b,c,d,e,f,g,h){var i,j,














k=c('React').PropTypes;i=babelHelpers.inherits




(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;'use strict';for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.
































$ReactPopoverMenu_menuSubscriptions=null,this.














































$ReactPopoverMenu_recreateMenu=function(){
if(this.$ReactPopoverMenu_menuSubscriptions){
this.$ReactPopoverMenu_menuSubscriptions.release();
this.$ReactPopoverMenu_menuSubscriptions=null;}

this.$ReactPopoverMenu_unmountCurrentMenuItems();
this.$ReactPopoverMenu_popoverMenu.setMenu(this.$ReactPopoverMenu_createMenu(this.props.menu));
this.$ReactPopoverMenu_subscribeToPopoverMenu();}.
bind(this),this.




























































$ReactPopoverMenu_createMenu=function(r){
var s=r.props,
t=new r.type(s);
this.$ReactPopoverMenu_menuSubscriptions=new (c('SubscriptionsHandler'))();
if(s.onItemClick)
this.$ReactPopoverMenu_menuSubscriptions.addSubscriptions
(t.subscribe('itemclick',s.onItemClick));


if(s.onItemFocus)
this.$ReactPopoverMenu_menuSubscriptions.addSubscriptions
(t.subscribe('focus',s.onItemFocus));


if(s.onItemBlur)
this.$ReactPopoverMenu_menuSubscriptions.addSubscriptions
(t.subscribe('blur',s.onItemBlur));


if(s.onChange)
this.$ReactPopoverMenu_menuSubscriptions.addSubscriptions
(t.subscribe('change',s.onChange));


if(this.props.onShow)
this.$ReactPopoverMenu_menuSubscriptions.addSubscriptions
(this.$ReactPopoverMenu_popover.subscribe('show',this.props.onShow));


if(this.props.onHide)
this.$ReactPopoverMenu_menuSubscriptions.addSubscriptions
(this.$ReactPopoverMenu_popover.subscribe('hide',this.props.onHide));


return t;}.
bind(this),this.

getMenu=function(){
return this.$ReactPopoverMenu_popoverMenu.getMenu();}.
bind(this),this.

isShown=function(){
return !!(this.$ReactPopoverMenu_popover&&this.$ReactPopoverMenu_popover.isShown());}.
bind(this),this.

showPopover=function(r){
this.$ReactPopoverMenu_popover.showLayer();


if(r){
var s=this.$ReactPopoverMenu_popoverMenu.getMenu();
s.blur();
s.focusAnItem(r);}}.

bind(this),this.

hidePopover=function(){
var r=this.$ReactPopoverMenu_popover;
if(r&&r.isShown())
r.hideLayer();}.

bind(this),this.

getFocusedItem=function(){
var r=this.$ReactPopoverMenu_popoverMenu.getMenu();
return r.getFocusedItem();}.
bind(this),this.

$ReactPopoverMenu_unmountCurrentMenuItems=function(){
var r=this.getMenu();
r&&r.forEachItem(function(s){
var t=s.getRoot().firstElementChild;
t&&c('ReactDOM').unmountComponentAtNode(t);});}.

bind(this),n;}l.getFirstChild=function(m){'use strict';var n=m.children;return Array.isArray(n)?n[0]:n;};l.getButtonSize=function(m){'use strict';var n=l.getFirstChild(m);return n&&n.type.getButtonSize(n.props);};l.prototype.componentDidMount=function(){'use strict';var m=c('ReactDOM').findDOMNode(this.refs.root),n=m.firstChild;c('CSS').addClass(n,"_p");this.$ReactPopoverMenu_popover=new (c('Popover'))(m,n,this.props.layerBehaviors,{alignh:this.props.alignh,position:this.props.position,disabled:this.props.disabled,arrowDimensions:{offset:0,length:0},disableArrowKeyActivation:this.props.disableArrowKeyActivation,enableActivationOnEnter:this.props.enableActivationOnEnter,'data-testid':this.props['data-testid']});this.$ReactPopoverMenu_popoverMenu=new (c('PopoverMenu'))(this.$ReactPopoverMenu_popover,n,this.$ReactPopoverMenu_createMenu(this.props.menu),this.props.behaviors);this.$ReactPopoverMenu_subscribeToPopoverMenu();};l.prototype.componentDidUpdate=function(m){'use strict';if(!c('areEqual')(m.menu,this.props.menu))c('setImmediate')(this.$ReactPopoverMenu_recreateMenu);if(this.props.alignh!==m.alignh)this.$ReactPopoverMenu_popoverMenu.getPopover().getLayer().setAlignment(this.props.alignh);if(this.props.disabled!==m.disabled)if(this.props.disabled){this.$ReactPopoverMenu_popoverMenu.disable();}else this.$ReactPopoverMenu_popoverMenu.enable();};l.prototype.$ReactPopoverMenu_subscribeToPopoverMenu=function(){'use strict';if(this.props.onReturnWithoutFocusedItem)this.$ReactPopoverMenu_menuSubscriptions.addSubscriptions(this.$ReactPopoverMenu_popoverMenu.subscribe('returnWithoutFocusedItem',this.props.onReturnWithoutFocusedItem));};l.prototype.render=function(){'use strict';var m=c('React').Children.map(this.props.children,function(o,p){if(p===0){return c('React').cloneElement(o,{className:c('joinClasses')(o.props.className,"_p")});}else return o;}),n=Object.assign({},this.props);delete n.onShow;delete n.onHide;delete n.alignh;delete n.position;delete n.layerBehaviors;delete n.behaviors;delete n.menu;delete n.disabled;delete n.disableArrowKeyActivation;delete n.enableActivationOnEnter;return c('React').createElement(c('InlineBlock.react'),babelHelpers['extends']({},n,{className:c('joinClasses')(this.props.className,"uiPopover"),ref:'root',disabled:null}),m);};l.prototype.componentWillUnmount=function(){'use strict';this.hidePopover();if(this.$ReactPopoverMenu_menuSubscriptions){this.$ReactPopoverMenu_menuSubscriptions.release();this.$ReactPopoverMenu_menuSubscriptions=null;}this.$ReactPopoverMenu_popoverMenu&&this.$ReactPopoverMenu_popoverMenu.destroy();};l.propTypes={alignh:k.oneOf(['left','center','right']),alignv:k.oneOf(['baseline','bottom','middle','top']),position:k.oneOf(['above','below','left','right']),layerBehaviors:k.array,menu:k.object.isRequired,disabled:k.bool,disableArrowKeyActivation:k.bool,enableActivationOnEnter:k.bool,onReturnWithoutFocusedItem:k.func};l.defaultProps={alignv:'middle'};


f.exports=l;}),null);

/** js/ui/core/abstract/menu/MenuItemNoAction.js */




__d('MenuItemNoAction',['MenuItem'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits


(j,c('MenuItem'));i=h&&h.prototype;j.prototype.
hasAction=function(){'use strict';
return false;};
function j(){'use strict';h.apply(this,arguments);}


f.exports=j;}),null);

/** js/components/core/UI/PopoverMenu/ReactMenu.js */





__d('ReactMenu',['cx','Menu','MenuItem','MenuItemNoAction','MenuSelectableItem','MenuTheme','React','SelectableMenu','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,k,l;












function m(q){
var r=[];
c('React').Children.forEach(q,function(s){
if(s)
r.push(s);});


return r;}









function n(q){
q.isReactLegacyFactory={};
q.type=q;}
i=babelHelpers.inherits

(o,c('Menu'));j=i&&i.prototype;
function o(q,r){'use strict';
var s=babelHelpers['extends']
({theme:c('MenuTheme'),
maxheight:q?q.maxheight:null,
className:q?q.className:null},
r);

j.constructor.call(this,m(q.children),s);}



n(o);k=babelHelpers.inherits

(p,c('SelectableMenu'));l=k&&k.prototype;
function p(q,r){'use strict';
var s=babelHelpers['extends']
({className:c('joinClasses')
("_57di",
q?q.className:null),

theme:c('MenuTheme'),
multiple:q&&q.multiple,
maxheight:q?q.maxheight:null},
r);

l.constructor.call(this,m(q.children),s);}



n(p);

o.SelectableMenu=p;




n(c('MenuItem'));

o.Item=c('MenuItem');
o.ItemNoAction=c('MenuItemNoAction');

n(c('MenuSelectableItem'));

o.SelectableItem=c('MenuSelectableItem');

f.exports=o;}),null);

/** js/components/core/XUI/Layer/Dialog/Buttons/XUIDialogCancelButton.react.js */





__d('XUIDialogCancelButton.react',['fbt','React','XUIDialogButton.react'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits






(k,c('React').Component);j=i&&i.prototype;k.prototype.



render=function(){'use strict';

return (c('React').createElement(c('XUIDialogButton.react'),babelHelpers['extends']({},
this.props,
{action:'cancel',
label:h._(["Cancel","47519dd63967d2eefa17a94acc8182e0"])})));};


function k(){'use strict';i.apply(this,arguments);}


f.exports=k;}),null);

/** js/components/core/XUI/Layer/XUIOverlayFooter.react.js */





__d('XUIOverlayFooter.react',['cx','React','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits











(k,c('React').Component);j=i&&i.prototype;k.prototype.
render=function(){'use strict';

return (c('React').createElement('div',babelHelpers['extends']({},
this.props,
{className:c('joinClasses')(this.props.className,"_5lnf uiOverlayFooter")}),
this.props.children));};


function k(){'use strict';i.apply(this,arguments);}


f.exports=k;}),null);

/** js/components/core/XUI/PopoverMenu/ReactXUIMenu.js */





__d('ReactXUIMenu',['ReactMenu','XUIMenuTheme','XUIMenuWithSquareCorner'],(function a(b,c,d,e,f,g){var h,i,j,k;





function l(o){
o.isReactLegacyFactory={};
o.type=o;}
h=babelHelpers.inherits

(m,c('ReactMenu'));i=h&&h.prototype;
function m(o){'use strict';
var p={theme:c('XUIMenuTheme')};
if(!o||o.withsquarecorner!==false)
p.behaviors=[c('XUIMenuWithSquareCorner')];

i.constructor.call(this,o,p);}



l(m);j=babelHelpers.inherits

(n,c('ReactMenu').SelectableMenu);k=j&&j.prototype;
function n(o){'use strict';
var p={theme:c('XUIMenuTheme')};
if(!o||o.withsquarecorner!==false)
p.behaviors=[c('XUIMenuWithSquareCorner')];

k.constructor.call(this,o,p);}



l(n);

m.SelectableMenu=n;

m.Item=c('ReactMenu').Item;
m.SelectableItem=c('ReactMenu').SelectableItem;

f.exports=m;}),null);

/** js/components/core/XUI/PopoverMenu/XUIMenuSeparator.react.js */




__d('XUIMenuSeparator.react',['MenuSeparator.react'],(function a(b,c,d,e,f,g){



var h=c('MenuSeparator.react');
f.exports=h;}),null);

/** js/facepile/typeahead/TypeaheadFacepile.js */




__d('TypeaheadFacepile',['DOM'],(function a(b,c,d,e,f,g){



function h(){}

h.render=function(i){
var j=
[c('DOM').create('span',{className:'splitpic leftpic'},
[c('DOM').create('img',{alt:'',src:i[0]})]),

c('DOM').create
('span',
{className:'splitpic'+(i[2]?' toppic':'')},
[c('DOM').create('img',{alt:'',src:i[1]})])];


if(i[2])
j.push(c('DOM').create('span',{className:'splitpic bottompic'},
[c('DOM').create('img',{alt:'',src:i[2]})]));


return c('DOM').create('span',{className:'splitpics clearfix'},j);};


f.exports=h;}),null);

/** js/modules/Ease.js */




__d("Ease",[],(function a(b,c,d,e,f,g){
































var h=












{makePowerOut:function i(j){
var k=h.makePowerIn(j);
return function(l){
return 1-k(1-l);};},








makePowerIn:function i(j){
return function(k){
var l=Math.pow(k,j);

return (l*10000|0)/10000;};},








makePowerInOut:function i(j){
var k=h.makePowerIn(j),
l=h.makePowerOut(j);
return function(m){
return m<.5?.5*k(m*2):
.5*l(m*2-1)+.5;};},






expoOut:function i(j){
return 1-Math.pow(2,-10*j);},





expoIn:function i(j){
return 1-h.expoOut(1-j);},





expoInOut:function i(j){
return j<.5?.5*h.expoIn(j*2):
.5*h.expoOut(j*2-1)+.5;},





sineOut:function i(j){
return Math.sin(j*Math.PI*.5);},


sineIn:function i(j){
return 1-Math.cos(j*Math.PI*.5);},


sineInOut:function i(j){
return -.5*(Math.cos(Math.PI*j)-1);},






circOut:function i(j){
j--;
return Math.sqrt(1-j*j);},


circIn:function i(j){
return 1-h.circOut(1-j);},


circInOut:function i(j){
return j<.5?.5*h.circIn(j*2):
.5*h.circOut(j*2-1)+.5;},






bounceOut:function i(j){
if(j<1/2.75){
return 7.5625*j*j;}else
if(j<2/2.75){
return 7.5625*(j-=1.5/2.75)*j+.75;}else
if(j<2.5/2.75){
return 7.5625*(j-=2.25/2.75)*j+.9375;}else 

return 7.5625*(j-=2.625/2.75)*j+.984375;},






bounceIn:function i(j){
return 1-h.bounceOut(1-j);},





bounceInOut:function i(j){
return j<.5?.5*h.bounceIn(j*2):
.5*h.bounceOut(j*2-1)+.5;},






makeBounceOut:function i(j){
j=j||1;
return function(k){
k=(1-Math.cos(k*Math.PI*j))*(1-k)+k;
return 1-Math.abs(1-k);};},






makeBounceIn:function i(j){
var k=h.makeBounceOut(j);
return function(l){
return 1-k(1-l);};},










makeElasticOut:function i(j,k){
j<1&&(j=1);
var l=Math.PI*2;
return function(m){
if(m===0||m===1)
return m;

var n=k/l*Math.asin(1/j);
return j*Math.pow(2,-10*m)*
Math.sin((m-n)*l/k)+1;};},










makeElasticIn:function i(j,k){
var l=h.makeElasticOut(j,k);
return function(m){
return 1-l(1-m);};},








makeElasticInOut:function i(j,k){
k*=1.5;
var l=h.makeElasticIn(j,k),
m=h.makeElasticOut(j,k);
return function(n){
return n<.5?.5*l(n*2):
.5*m(n*2-1)+.5;};},









makeBackOut:function i(j){
var k=h.makeBackIn(j);
return function(l){
return 1-k(1-l);};},









makeBackIn:function i(j){
return function(k){
return k*k*((j+1)*k-j);};},








makeBackInOut:function i(j){
j*=1.525;
var k=h.makeBackIn(j),
l=h.makeBackOut(j);
return function(m){
return m<.5?.5*k(m*2):
.5*l(m*2-1)+.5;};}};







h.elasticOut=h.makeElasticOut(1,.3);
h.elasticIn=h.makeElasticIn(1,.3);
h.elasticInOut=h.makeElasticInOut(1,.3);
h.backOut=h.makeBackOut(1.7);
h.backIn=h.makeBackIn(1.7);
h.backInOut=h.makeBackInOut(1.7);


f.exports=h;}),null);

/** js/modules/InputSelection.js */




__d('InputSelection',['DOM','Focus'],(function a(b,c,d,e,f,g){




var h=







{get:function i(j){




















try{if(typeof j.selectionStart==='number')
return {start:j.selectionStart,end:j.selectionEnd};}catch(

k){


return {start:0,end:0};}




if(!document.selection)
return {start:0,end:0};


var l=document.selection.createRange();
if(l.parentElement()!==j)



return {start:0,end:0};


var m=j.value.length;

if(c('DOM').isNodeOfType(j,'input')){

return {start:-l.moveStart('character',-m),
end:-l.moveEnd('character',-m)};}else{


var n=l.duplicate();
n.moveToElementText(j);
n.setEndPoint('StartToEnd',l);
var o=m-n.text.length;
n.setEndPoint('StartToStart',l);

return {start:m-n.text.length,
end:o};}},












set:function i(j,k,l){






if(typeof l=='undefined')
l=k;

if(document.selection){


if(j.tagName=='TEXTAREA'){
var m=
(j.value.slice(0,k).match(/\r/g)||[]).length,
n=
(j.value.slice(k,l).match(/\r/g)||[]).length;
k-=m;
l-=m+n;}

var o=j.createTextRange();
o.collapse(true);
o.moveStart('character',k);
o.moveEnd('character',l-k);
o.select();}else{

j.selectionStart=k;
j.selectionEnd=Math.min(l,j.value.length);
c('Focus').set(j);}}};





f.exports=h;}),null);

/** js/modules/ScrollAwareDOM.js */




__d('ScrollAwareDOM',['ArbiterMixin','CSS','DOM','DOMDimensions','HTML','Vector','ViewportBounds','getDocumentScrollElement','getElementPosition','getViewportDimensions','isAsyncScrollQuery','isNode'],(function a(b,c,d,e,f,g){






















function h(m,n){
return function(){
var o=arguments;
l.monitor
(arguments[m],
function(){
n.apply(null,o);});};}











function i(m){
if(!(m instanceof Array))
m=[m];

for(var n=0;n<m.length;n++){
var o=c('HTML').replaceJSONWrapper(m[n]);
if(o instanceof c('HTML')){
return o.getRootNode();}else
if(c('isNode')(o))
return o;}


return null;}





function j(m){
return c('getElementPosition')(m).y>c('ViewportBounds').getTop();}





function k(m){
var n=
c('getElementPosition')(m).y+
c('DOMDimensions').getElementDimensions(m).height,
o=
c('getViewportDimensions')().height-
c('ViewportBounds').getBottom();
return n>=o;}






var l=babelHelpers['extends']








({monitor:function m(n,o){
if(c('isAsyncScrollQuery')())


return o();

var p=i(n);
if(p){
var q=!!p.offsetParent;
if(q&&(j(p)||k(p)))

return o();

var r=c('Vector').getDocumentDimensions(),
s=o();
if(q||p.offsetParent&&!j(p)){

var t=c('Vector').getDocumentDimensions().sub(r),

u=
{delta:t,
target:p};

if(l.inform('scroll',u)!==false)
t.scrollElementBy(c('getDocumentScrollElement')());}


return s;}else 

return o();},








replace:function m(n,o){
var p=i(o);
if(!p||c('CSS').hasClass(p,'hidden_elem'))
p=n;

return l.monitor(p,function(){
c('DOM').replace(n,o);});},



prependContent:h(1,c('DOM').prependContent),
insertAfter:h(1,c('DOM').insertAfter),
insertBefore:h(1,c('DOM').insertBefore),
setContent:h(0,c('DOM').setContent),
appendContent:h(1,c('DOM').appendContent),
remove:h(0,c('DOM').remove),
empty:h(0,c('DOM').empty)},c('ArbiterMixin'));



f.exports=l;}),null);

/** js/modules/XAsyncRequest.js */




__d('XAsyncRequest',['AsyncRequest'],(function a(b,c,d,e,f,g){





function h(i){'use strict';
this.$XAsyncRequest_request=new (c('AsyncRequest'))(i);}
h.prototype.

setMethod=function(i){'use strict';
this.$XAsyncRequest_request.setMethod(i);
return this;};
h.prototype.

setData=function(i){'use strict';
this.$XAsyncRequest_request.setData(i);
return this;};
h.prototype.

setHandler=function(i){'use strict';
this.$XAsyncRequest_request.setHandler(i);
return this;};
h.prototype.

setErrorHandler=function(i){'use strict';
this.$XAsyncRequest_request.setErrorHandler(i);
return this;};
h.prototype.

send=function(){'use strict';
this.$XAsyncRequest_request.send();
return this;};
h.prototype.

abort=function(){'use strict';
this.$XAsyncRequest_request.abort();};




f.exports=h;}),null);

/** js/modules/cxodecode.js */





__d('cxodecode',['invariant'],(function a(b,c,d,e,f,g,h){

'use strict';








var i=36,
j=2;





function k(l){
if(!l)
return '';

var m=l.cxononce;

m||h(0,
'cxodecode(): Input wasn\'t properly encoded!');

var n=m.substr(0,m.length-j),
o=parseInt(m.substr(-j),i),
p='';
for(var q=0;q<n.length;q+=j)
p+=String.fromCharCode
(parseInt(n.substr(q,j),i)^o);


return p;}


f.exports=k;}),null);

/** js/ui/behavior/TabIsolation.js */





__d('TabIsolation',['Event','Focus','Keys','TabbableElements','containsNode'],(function a(b,c,d,e,f,g){











var h=[],

i=0;







function j(k){'use strict';
this.$TabIsolation_root=k;
this.$TabIsolation_eventHandler=null;
this.$TabIsolation_identifier=i++;}
j.prototype.

enable=function(){'use strict';

h.unshift(this.$TabIsolation_identifier);


this.$TabIsolation_eventHandler=c('Event').listen(window,'keydown',function(k){

if(h[0]===this.$TabIsolation_identifier)
this.$TabIsolation_tabHandler(k);}.

bind(this),c('Event').Priority.URGENT);};
j.prototype.

disable=function(){'use strict';
if(this.$TabIsolation_eventHandler){

var k=h.indexOf(this.$TabIsolation_identifier);
if(k>-1)
h.splice(k,1);


this.$TabIsolation_eventHandler.remove();
this.$TabIsolation_eventHandler=null;}};

j.prototype.




$TabIsolation_tabHandler=function(k){'use strict';
if(c('Event').getKeyCode(k)!==c('Keys').TAB)
return;


var l=k.getTarget();

if(!l)
return;


var m=c('TabbableElements').find(this.$TabIsolation_root),
n=m[0],
o=m[m.length-1],p=
k.getModifiers(),q=p.shift;

if(q&&l===n){
k.preventDefault();
c('Focus').set(o);}else
if(!q&&l===o||
!c('containsNode')(this.$TabIsolation_root,l)){
k.preventDefault();
c('Focus').set(n);}};




f.exports=j;}),null);

/** js/ui/layer/behaviors/LayerBounds.js */




__d('LayerBounds',['Locale','Rect','ViewportBounds','containsNode','ge','getOverlayZIndex'],(function a(b,c,d,e,f,g){









var h=




{getViewportRectForContext:function i(j){
var k=c('ge')('globalContainer'),
l=
k&&c('containsNode')(k,j)||
c('getOverlayZIndex')(j)<300,

m=c('Rect').getViewportWithoutScrollbarsBounds();
if(l){
m.t+=c('ViewportBounds').getTop();
if(c('Locale').isRTL()){
m.r-=c('ViewportBounds').getLeft();
m.l+=c('ViewportBounds').getRight();}else{

m.r-=c('ViewportBounds').getRight();
m.l+=c('ViewportBounds').getLeft();}}


return m;}};



f.exports=h;}),null);

/** js/ui/layer/behaviors/ContextualLayerDimensions.js */




__d('ContextualLayerDimensions',['LayerBounds','Locale','Rect','Vector','ViewportBounds'],(function a(b,c,d,e,f,g){







var h=




{getViewportRect:function i(j){

return c('LayerBounds').getViewportRectForContext(j.getContext());},








getLayerRect:function i(j,k){
var l=j.getContextBounds('viewport'),
m=j.simulateOrientation(k,function(){
return c('Vector').getElementDimensions(j.getContentRoot());}),


n=l.t+k.getOffsetY();
if(k.getPosition()==='above'){
n-=m.y;}else
if(k.getPosition()==='below')
n+=l.b-l.t;


var o=l.l+k.getOffsetX(),
p=l.r-l.l;
if(k.isVertical()){
var q=k.getAlignment();
if(q==='center'){
o+=(p-m.x)/2;}else
if(q==='right'!==c('Locale').isRTL()){
o+=p-m.x+k.getArrowOffset();}else 

o-=k.getArrowOffset();}else 


if(k.getPosition()==='right'!==c('Locale').isRTL()){
o+=p;}else 

o-=m.x;



return new (c('Rect'))
(n,
o+m.x,
n+m.y,
o,
'viewport');}};




f.exports=h;}),null);

/** js/ui/layer/behaviors/ContextualLayerAutoFlip.js */





__d('ContextualLayerAutoFlip',['ContextualLayerDimensions','DOMDimensions','Vector','Rect','arrayContains','getDocumentScrollElement'],(function a(b,c,d,e,f,g){












function h(j,k){
k=new (c('Rect'))(k).convertTo(j.domain);
var l=Math.max(j.l,k.l),
m=Math.min(j.r,k.r);
return Math.max(m-l,0);}














function i(j){'use strict';
this._layer=j;}
i.prototype.

enable=function(){'use strict';
this._subscription=this._layer.subscribe
('adjust',
this._adjustOrientation.bind(this));

if(this._layer.isShown())
this._layer.updatePosition();};

i.prototype.

disable=function(){'use strict';
this._subscription.unsubscribe();
this._subscription=null;
if(this._layer.isShown())
this._layer.updatePosition();};

i.prototype.








_adjustOrientation=function(j,k){'use strict';
var l=this.getValidPositions(k);
if(!l.length){
k.invalidate();
return;}

var m=c('ContextualLayerDimensions').getViewportRect(this._layer),
n=this._getValidAlignments(k),
o,p,q;
for(o=0;o<n.length;o++){
k.setAlignment(n[o]);
for(p=0;p<l.length;p++){
k.setPosition(l[p]);
q=c('ContextualLayerDimensions').getLayerRect
(this._layer,
k);

if(m.contains(q))
return;}}





var r=-1;
if(k.getPreferMoreContentShownRect()){
var s=c('DOMDimensions').getDocumentDimensions(),
t=
new (c('Rect'))(m).convertTo('document'),
u=99999;
for(p=0;p<l.length;p++){
k.setPosition(l[p]);
q=c('ContextualLayerDimensions').getLayerRect
(this._layer,
k);



var v=new (c('Rect'))(q).convertTo('document');
if(v.l>=0&&
v.r<=s.width&&
v.t>=43&&
v.b<=s.height){
var w=
t.l-v.l,
x=
v.r-t.r,
y=
t.t-v.t,
z=
v.b-t.b,
aa=
(w>0?w:0)+
(x>0?x:0)+
(y>0?y:0)+
(z>0?z:0);
if(aa<u){
r=p;
u=aa;}}}}





if(r>=0){
k.setPosition(l[r]);}else 



k.setPosition
(c('arrayContains')(l,'below')?'below':l[0]);




var ba,ca=0,da=0;
for(o=0;o<n.length;o++){
k.setAlignment(n[o]);
q=c('ContextualLayerDimensions').getLayerRect
(this._layer,
k);

ba=h(m,q);
if(ba>da){
da=ba;
ca=o;}}


k.setAlignment(n[ca]);};
i.prototype.







getValidPositions=function(j){'use strict';
var k=
[j.getPosition(),
j.getOppositePosition()],

l=this._layer.getContextScrollParent();
if(l===window||
l===c('getDocumentScrollElement')())

return k;

var m=this._layer.getContext(),
n=c('Vector').getElementPosition(l,'viewport').y,
o=c('Vector').getElementPosition(m,'viewport').y;

if(j.isVertical()){
return k.filter(function(q){
if(q==='above'){

return o>=n;}else{


var r=n+l.offsetHeight,
s=o+m.offsetHeight;
return s<=r;}});}else{




var p=n+l.offsetHeight;
if(o>=n&&
o+m.offsetHeight<=p){
return k;}else 

return [];}};


i.prototype.




_getValidAlignments=function(j){'use strict';
var k=['left','right','center'],
l=j.getAlignment(),
m=k.indexOf(l);
if(m>0){
k.splice(m,1);
k.unshift(l);}

return k;};



Object.assign(i.prototype,
{_subscription:null});


f.exports=i;}),null);

/** js/ui/layer/util/focusWithinLayer.js */






__d('focusWithinLayer',['AccessibilityConfig','DOMQuery','Focus','TabbableElements','getActiveElement'],(function a(b,c,d,e,f,g){








function h(i){

var j=c('DOMQuery').scry(i,'.autofocus')[0],
k=true;


if(!j){
var l=c('getActiveElement')();

if(c('DOMQuery').isNodeOfType(l,['input','textarea']))
return;

var m=c('TabbableElements').find(i);
for(var n=0;n<m.length;n++){
var o=m[n];




if(o.tagName!=='A'||

c('AccessibilityConfig').a11yInitialDialogFocusElement&&
o.getAttribute('role')==='button'){


j=m[n];
break;}}}else


if(j.tabIndex!==0)


k=false;



if(j){
k?c('Focus').set(j):c('Focus').setWithoutOutline(j);}else

if(!i.offsetWidth){

i.tabIndex=-1;
c('Focus').setWithoutOutline(i);}}



f.exports=h;}),null);

/** js/ui/layer/behaviors/LayerAutoFocus.js */





__d('LayerAutoFocus',['focusWithinLayer'],(function a(b,c,d,e,f,g){













function h(i){'use strict';
this._layer=i;
this._subscription=null;}
h.prototype.

enable=function(){'use strict';
this._subscription=this._layer.subscribe
('aftershow',
this._focus.bind(this));};

h.prototype.

disable=function(){'use strict';
this._subscription.unsubscribe();
this._subscription=null;};
h.prototype.

_focus=function(){'use strict';
var i=this._layer.getRoot();
i&&c('focusWithinLayer')(i);};



f.exports=h;}),null);

/** js/ui/layer/behaviors/LayerAutoFocusReact.js */






__d('LayerAutoFocusReact',['focusWithinLayer'],(function a(b,c,d,e,f,g){

'use strict';






















function h(i){
this._layer=i;
this._subscription=null;}
h.prototype.

enable=function(){
if(this._layer.containsReactComponent)



this._subscription=this._layer.subscribe
('reactshow',
this._focus.bind(this));};


h.prototype.

disable=function(){
if(this._subscription){
this._subscription.unsubscribe();
this._subscription=null;}};

h.prototype.

_focus=function(){
var i=this._layer.getRoot();
i&&c('focusWithinLayer')(i);};



f.exports=h;}),null);

/** js/ui/layer/behaviors/LayerDestroyOnHide.js */





__d('LayerDestroyOnHide',[],(function a(b,c,d,e,f,g){


function h(i){'use strict';
this._layer=i;}
h.prototype.

enable=function(){'use strict';
var i=this._layer.destroy.bind(this._layer);
this._subscription=this._layer.subscribe
('hide',
function(){
setTimeout(i,0);});};


h.prototype.

disable=function(){'use strict';
if(this._subscription){
this._subscription.unsubscribe();
this._subscription=null;}};




Object.assign(h.prototype,
{_subscription:null});


f.exports=h;}),null);

/** js/ui/layer/behaviors/LayerFadeOnHide.js */






__d('LayerFadeOnHide',['Animation','Layer','Style','UserAgent_DEPRECATED','emptyFunction','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g){













function h(i){'use strict';
this._layer=i;}
h.prototype.

enable=function(){'use strict';
if(c('UserAgent_DEPRECATED').ie()<9)
return;

this._subscription=this._layer.subscribe
('starthide',
this._handleStartHide.bind(this));};

h.prototype.

disable=function(){'use strict';
if(this._subscription){
this._subscription.unsubscribe();
this._subscription=null;}};

h.prototype.

_getDuration=function(){'use strict';
return 150;};
h.prototype.

_handleStartHide=function(){'use strict';
var i=true,

j=c('Layer').subscribe('show',function(){
j.unsubscribe();
i=false;});

c('setTimeoutAcrossTransitions')(function(){
j.unsubscribe();
j=null;
var k=function(){
this._layer.finishHide();}.
bind(this);
if(i){
this._animate(k);}else 

k();}.

bind(this),0);
return false;};
h.prototype.

_animate=function(i){'use strict';
var j=this._layer.getRoot();

new (c('Animation'))(j).
from('opacity',1).
to('opacity',0).
duration(this._getDuration()).
ondone(function(){
c('Style').set(j,'opacity','');
i();}).

go();};
h.


forDuration=function(i){var j,k;'use strict';j=babelHelpers.inherits
(l,h);k=j&&j.prototype;function l(){j.apply(this,arguments);}

l.prototype._getDuration=
c('emptyFunction').thatReturns(i);
return l;};



Object.assign(h.prototype,
{_subscription:null});


f.exports=h;}),null);

/** js/ui/layer/behaviors/LayerFadeOnShow.js */





__d('LayerFadeOnShow',['Bootloader','Run','Style','UserAgent_DEPRECATED','emptyFunction','ifRequired'],(function a(b,c,d,e,f,g){













function h(i){'use strict';
this._layer=i;

c('Run').onAfterLoad(function(){
c('Bootloader').loadModules(["Animation"],c('emptyFunction'),'LayerFadeOnShow');});}

h.prototype.

enable=function(){'use strict';
if(c('UserAgent_DEPRECATED').ie()<9)
return;

this._subscriptions=
[this._layer.subscribe('beforeshow',function(){
c('Style').set(this._layer.getRoot(),'opacity',0);}.
bind(this)),
this._layer.subscribe('show',this._animate.bind(this))];};

h.prototype.

disable=function(){'use strict';
if(this._subscriptions){
while(this._subscriptions.length)
this._subscriptions.pop().unsubscribe();

this._subscriptions=null;}};

h.prototype.

_getDuration=function(){'use strict';
return 100;};
h.prototype.

_animate=function(){'use strict';
var i=this._layer.getRoot();

c('ifRequired')
('Animation',
function(j){
return (new j(i).
from('opacity',0).
to('opacity',1).
duration(this._getDuration()).
ondone(c('Style').set.bind(null,i,'opacity','')).
go());}.bind(this),
c('Style').set.bind(null,i,'opacity',''));};

h.


forDuration=function(i){var j,k;'use strict';j=babelHelpers.inherits
(l,h);k=j&&j.prototype;function l(){j.apply(this,arguments);}

l.prototype._getDuration=
c('emptyFunction').thatReturns(i);
return l;};



Object.assign(h.prototype,
{_subscriptions:null});


f.exports=h;}),null);

/** js/ui/layer/behaviors/LayerFormHooks.js */





__d('LayerFormHooks',['Event'],(function a(b,c,d,e,f,g){




function h(i){'use strict';
this._layer=i;}
h.prototype.

enable=function(){'use strict';
var i=this._layer.getRoot();
this._subscriptions=
[c('Event').listen(i,'submit',this._onSubmit.bind(this)),
c('Event').listen(i,'success',this._onSuccess.bind(this)),
c('Event').listen(i,'error',this._onError.bind(this))];};

h.prototype.

disable=function(){'use strict';
this._subscriptions.forEach(function(i){
i.remove();});

this._subscriptions=null;};
h.prototype.

_onSubmit=function(event){'use strict';
if(this._layer.inform('submit',event)===false)

event.kill();};

h.prototype.

_onSuccess=function(event){'use strict';
if(this._layer.inform('success',event)===false)
event.kill();};

h.prototype.

_onError=function(event){'use strict';
var i=event.getData();
if(this._layer.inform('error',{response:i.response})===false)

event.kill();};




Object.assign(h.prototype,
{_subscriptions:null});


f.exports=h;}),null);

/** js/ui/layer/behaviors/LayerRefocusOnHide.js */





__d('LayerRefocusOnHide',['ContextualThing','DOM','DOMQuery','Focus','Parent','getActiveElement'],(function a(b,c,d,e,f,g){













function h(i){'use strict';
this._layer=i;}
h.prototype.

enable=function(){'use strict';
this._subscription=this._layer.subscribe('hide',this._handle.bind(this));};
h.prototype.

disable=function(){'use strict';
this._subscription.unsubscribe();
this._subscription=null;};
h.prototype.

_handle=function(i,event){'use strict';




var j=c('getActiveElement')();

if(j===document.body||
c('DOMQuery').contains(this._layer.getRoot(),j)){

var k=this._layer.getCausalElement();
while(k&&!k.offsetWidth){
var l=c('Parent').byClass
(k,
'uiToggle');



if(l&&l.offsetWidth){
k=c('DOM').scry(l,'[rel="toggle"]')[0];}else{

var m=c('ContextualThing').getContext(k);
if(m){
k=m;}else 

k=k.parentNode;}}



if(k)
if(k.tabIndex!=-1)
c('Focus').setWithoutOutline(k);}};














Object.assign(h.prototype,
{_subscription:null});


f.exports=h;}),null);

/** js/ui/layer/behaviors/LayerTabIsolation.js */





__d('LayerTabIsolation',['TabIsolation'],(function a(b,c,d,e,f,g){








function h(i){'use strict';
this._layer=i;
this._tabIsolation=null;}
h.prototype.

enable=function(){'use strict';
this._tabIsolation=new (c('TabIsolation'))(this._layer.getRoot());

this._subscriptions=
[this._layer.subscribe
('show',
this._tabIsolation.enable.bind(this._tabIsolation)),

this._layer.subscribe
('hide',
this._tabIsolation.disable.bind(this._tabIsolation))];};


h.prototype.

disable=function(){'use strict';
while(this._subscriptions.length)
this._subscriptions.pop().unsubscribe();


this._tabIsolation.disable();
this._tabIsolation=null;};



Object.assign(h.prototype,
{_subscriptions:[]});


f.exports=h;}),null);

/** js/ui/layer/behaviors/LayerTogglerContext.js */





__d('LayerTogglerContext',['Toggler'],(function a(b,c,d,e,f,g){








function h(i){'use strict';
this._layer=i;}
h.prototype.

enable=function(){'use strict';
this._root=this._layer.getRoot();
c('Toggler').createInstance(this._root).setSticky(false);};
h.prototype.

disable=function(){'use strict';
c('Toggler').destroyInstance(this._root);
this._root=null;};



f.exports=h;}),null);

/** js/ui/layer/behaviors/ModalLayer.js */





__d('ModalLayer',['csx','cx','Arbiter','ArbiterMixin','CSS','DataStore','DOM','DOMDimensions','DOMQuery','Event','Scroll','ScrollAwareDOM','Style','UserAgent_DEPRECATED','Vector','debounceAcrossTransitions','getDocumentScrollElement','isAsyncScrollQuery','removeFromArray','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g,h,i){























var j=[],
k=null,
l=null,
m=null;

function n(){
if(!m)
m=c('DOMQuery').scry(document.body,"._li")[0];

return m;}








function o(v){
var w=
{position:c('Vector').getScrollPosition()},


x=v.offsetTop-w.position.y;
c('CSS').addClass(v,"_31e");

c('Style').set(v,'top',x+'px');





c('Arbiter').inform('reflow');

w.listener=c('ScrollAwareDOM').subscribe('scroll',function(y,z){
if(c('DOMQuery').contains(v,z.target)){
var aa=v.offsetTop-z.delta.y;
c('Style').set(v,'top',aa+'px');

w.position=w.position.add(z.delta);

return false;}});



c('DataStore').set(v,'ModalLayerData',w);}






function p(v,w){
var x=c('DataStore').get(v,'ModalLayerData');
if(x){
var y=function ba(){
c('CSS').removeClass(v,"_31e");
c('Style').set(v,'top','');
if(w){
var ca=c('getDocumentScrollElement')();
c('Scroll').setTop(ca,x.position.y);




if(c('Scroll').getTop(ca)!==x.position.y){
c('Scroll').setTop(ca,x.position.y+1);
c('Scroll').setTop(ca,x.position.y);}}







c('Arbiter').inform('reflow');

x.listener.unsubscribe();
x.listener=null;

c('DataStore').remove(v,'ModalLayerData');};








if(w&&c('isAsyncScrollQuery')()){
var z=c('DOM').create('div',{className:"_42w"});
c('Style').set(z,'height',v.offsetHeight+'px');
c('DOM').appendContent(document.body,z);

var aa=c('getDocumentScrollElement')();
c('Scroll').setTop(aa,x.position.y);
w=false;

setTimeout(function(){
y();
c('DOM').remove(z);},
0);}else 

y();}}




function q(){
var v=n();
if(!c('CSS').matchesSelector(v,"._31e"))
o(v);}



function r(){
if(!j.length)
p(n(),true);}








function s(){
var v=j.length;
while(v--){
var w=j[v],
x=w.getLayerRoot();


t(x,'');

var y=w.getLayerContentRoot(),
z=
y.offsetWidth+
c('DOMDimensions').measureElementBox(y,'width',0,0,1);
t(x,z);}}



function t(v,w){
c('Style').set(v,'min-width',w+(w?'px':''));}



function u(v){'use strict';
this._layer=v;
this._enabled=false;}
u.prototype.

enable=function(){'use strict';
if(!n())
return;


this._subscription=this._layer.subscribe
(['show','hide'],
function(v){
v=='show'?this._addModal():this._removeModal();}.
bind(this));



if(this._layer.isShown())
this._addModal();


this._enabled=true;};
u.prototype.

disable=function(){'use strict';

if(!n())
return;


this._subscription.unsubscribe();
this._subscription=null;



if(this._layer.isShown())
this._removeModal();


this._enabled=false;};
u.prototype.

_addModal=function(){'use strict';
var v=this.getLayerRoot();
c('CSS').addClass(v,"_3qw");

this._wash=c('DOM').create('div',{className:"_3ixn"});
c('DOM').prependContent(v,this._wash);

var w=j[j.length-1];
if(w){
o(w.getLayerRoot());}else 

q();



var x=c('getDocumentScrollElement')();
c('Scroll').setTop(x,0);

if(!j.length){
var y=c('debounceAcrossTransitions')(s,100);
k=c('Event').listen(window,'resize',y);
l=c('Arbiter').subscribe('reflow',y);}


j.push(this);

u.inform('show',this);

setTimeout(s,0);};
u.prototype.

_removeModal=function(){'use strict';
var v=this.getLayerRoot();
c('CSS').removeClass(v,"_3qw");

c('DOM').remove(this._wash);
this._wash=null;

t(v,'');

var w=this===j[j.length-1];

c('removeFromArray')(j,this);

if(!j.length){
k.remove();
k=null;
l.unsubscribe();
l=null;}





var x=c('Event').listen
(document.documentElement,
'mousewheel',
c('Event').prevent),

y=x.remove.bind(x);











c('setTimeoutAcrossTransitions')(function(){
var z=j[j.length-1];
if(z){
p(z.getLayerRoot(),w);
u.inform('show',z);}else{

r();
u.inform('hide',this);}


if(j.length)
setTimeout(s,0);




setTimeout(y,0);}.
bind(this),400);};
u.prototype.

getLayerRoot=function(){'use strict';
return this._enabled?this._layer.getRoot():null;};
u.prototype.

getLayerContentRoot=function(){'use strict';
return this._enabled?this._layer.getContentRoot():null;};
u.

getTopmostModalLayer=function(){'use strict';
return j[j.length-1];};



Object.assign(u,c('ArbiterMixin'));

f.exports=u;}),null);

/** shared/banzai/BanzaiNectar.js */























__d('BanzaiNectar',['Banzai'],(function a(b,c,d,e,f,g){


function h(j){










return {log:function k(l,m,n){












var o=
{e:m,
a:n};


c('Banzai').post('nectar:'+l,o,j);}};}




var i=h();
i.create=h;

f.exports=i;}),null);

/** shared/core/clamp.js */






__d("clamp",[],(function a(b,c,d,e,f,g){




function h(i,j,k){
if(i<j)
return j;

if(i>k)
return k;

return i;}


f.exports=h;}),null);

/** shared/core/dom/getScrollPosition.js */





__d('getScrollPosition',['getDocumentScrollElement','getUnboundedScrollPosition'],(function a(b,c,d,e,f,g){

'use strict';
















function h(i){
var j=c('getDocumentScrollElement')(i.ownerDocument||i.document);
if(i.Window&&i instanceof i.Window)
i=j;

var k=c('getUnboundedScrollPosition')(i),

l=
i===j?
i.ownerDocument.documentElement:
i,

m=i.scrollWidth-l.clientWidth,
n=i.scrollHeight-l.clientHeight;

k.x=Math.max(0,Math.min(k.x,m));
k.y=Math.max(0,Math.min(k.y,n));

return k;}


f.exports=h;}),null);

/** shared/react_contrib/StaticContainer/StaticContainer.react.js */






__d('StaticContainer.react',['React'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits


















(j,c('React').Component);i=h&&h.prototype;j.prototype.

shouldComponentUpdate=function(k){'use strict';
return !!k.shouldUpdate;};
j.prototype.

render=function(){'use strict';
var k=this.props.children;
if(k===null||k===false)
return null;

return c('React').Children.only(k);};
function j(){'use strict';h.apply(this,arguments);}



f.exports=j;}),null);

/** www/__virtual__/x/XPlatformXOutableElementController.js */



__d("XPlatformXOutableElementController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/platform\/async\/xoutelement\/",{type:{type:"Enum",required:true,enumType:0},fbid:{type:"Int",required:true}});}),

null);
