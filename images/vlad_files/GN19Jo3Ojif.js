if (self.CavalryLogger) { CavalryLogger.start_js(["rxn2o"]); }

/** js/ui/layer/contextual_dialog/behaviors/CovercardArrow.js */





__d('CovercardArrow',['csx','cx','ContextualDialogArrow','CSS','DOMQuery','Locale','Style'],(function a(b,c,d,e,f,g,h,i){










var j=-45,
k=45,
l=9;

if(c('Locale').isRTL()){
j=-j;
k=-k;}



function m(o){'use strict';
this._layer=o;}
m.prototype.

enable=function(){'use strict';



this._layer.enableBehavior(c('ContextualDialogArrow'));

var o=this._layer.getContentRoot();



this._arrowWrapper=c('DOMQuery').scry(o,"._ttk")[0];
if(!this._arrowWrapper)
return;


this._arrowShadow=c('DOMQuery').scry
(this._arrowWrapper,
"._7li")[
0];
if(!this._arrowShadow)
return;


var p=null;
if(n(this._arrowWrapper))
p=this._renderArrowWithRotate.bind(this);




if(!p)
return;


if(c('Locale').isRTL())
c('CSS').addClass(o,"_7lf");


this._subscription=this._layer.subscribe
('reposition',
function(q,r){
var s=r.getPosition()=='below';
c('CSS').conditionClass
(o,
"_53ih",
s);

s&&p(r);});};


m.prototype.

disable=function(){'use strict';
this._subscription&&this._subscription.unsubscribe();
this._subscription=null;};
m.prototype.




_calculateArrowOffset=function(o){'use strict';
var p=c('ContextualDialogArrow').getOffsetPercent(o),
q=c('ContextualDialogArrow').getOffset
(o,
p,
this._layer),

r=c('Style').get(this._layer.getContentRoot(),'width');
return parseInt(r,10)*(p/100)+q;};
m.prototype.




_renderArrowWithRotate=function(o){'use strict';
var p=c('DOMQuery').scry(this._arrowWrapper,"._7lj")[0];
if(!p){
var q=this._layer.getContentRoot();
c('CSS').addClass(q,"_2uy0");}


var r=c('DOMQuery').scry
(this._arrowWrapper,
"._1ubp")[
0];
if(!r)
return;


var s=n(this._arrowWrapper);
if(!s)
return;



var t=this._calculateArrowOffset(o),

u=l+t,
v=-l;
if(c('Locale').isRTL()){
u=-u;
v=-v;}


this._arrowWrapper.style[s]=
'translate('+u+'px, -'+l+'px) '+
'rotate('+k+'deg)';

if(p)
p.style[s]=
'rotate('+j+'deg) '+
'translate('+ -u+'px, '+
(l-12)+'px)';


r.style[s]=
'rotate('+j+'deg) '+
'translate('+v+'px, 0)';};






function n(o){
if(!o)
o=document.body;

var p=
['transform',
'WebkitTransform',
'msTransform',
'MozTransform',
'OTransform'],

q;
while(q=p.shift())
if(o.style[q]!==undefined)
return q;


return null;}


f.exports=m;}),null);

/** js/ui/layer/hovercard/Hovercard.js */





__d('Hovercard',['csx','cx','fbt','AccessibleLayer','Arbiter','AsyncRequest','ContextualDialog','ContextualDialogXUITheme','ContextualThing','DOM','Event','JSXDOM','LayerAutoFocus','LayerRefocusOnHide','Parent','Style','Vector','clickRefAction','getInlineBoundingRect'],(function a(b,c,d,e,f,g,h,i,j){

































'use strict';






























var k={};























function l(m,n){




this.$Hovercard_node=m;
this.$Hovercard_dialog=l.$Hovercard_getLoadingDialog();
this.$Hovercard_endpoint=n;
this.$Hovercard_currentParentEndpoint=null;
this.$Hovercard_fetchTimer=null;
this.$Hovercard_showTimer=null;
this.$Hovercard_hideTimer=null;
this.$Hovercard_dialogSubscriptions=[];


this.$Hovercard_active=false;
this.$Hovercard_moveToken=null;
this.$Hovercard_loaded=false;
this.$Hovercard_shown=false;
this.$Hovercard_pos=null;
this.$Hovercard_fetchStarted=false;}
l.



getActiveHovercard=function(){
var m=l.$Hovercard_showingHovercards.length;
if(m)
return l.$Hovercard_showingHovercards[m-1];

return null;};
l.



















hide=function(){var m=arguments.length<=0||arguments[0]===undefined?false:arguments[0],
n=l.getActiveHovercard();
if(!n)
return;

l.$Hovercard_showingHovercards.pop().$Hovercard_setInactive(m);};
l.









setDialog=function(m,n){


var o=l.$Hovercard_hovercards[m];
if(!o){
o=new l(null,m);
l.$Hovercard_hovercards[m]=o;}


n.
disableBehavior(c('AccessibleLayer')).
disableBehavior(c('LayerAutoFocus')).
disableBehavior(c('LayerRefocusOnHide'));
o.$Hovercard_loadDialog(n);};
l.




getDialog=function(m){
var n=l.$Hovercard_hovercards[m];
if(n&&n.$Hovercard_loaded)
return n.$Hovercard_dialog;

return null;};
l.








$Hovercard_setAllInactiveUntilEndpoint=
function(m){

var n=arguments.length<=1||arguments[1]===undefined?false:arguments[1],
o=l.$Hovercard_showingHovercards.length;
while(o&&
l.$Hovercard_showingHovercards[o-1].$Hovercard_endpoint!=m){

l.$Hovercard_showingHovercards.pop().$Hovercard_setInactive(n);
o=l.$Hovercard_showingHovercards.length;}};

l.






$Hovercard_isActive=function(m){
var n=l.getActiveHovercard();
return n?n.$Hovercard_node===m:false;};
l.









$Hovercard_getEndpoint=function(m){
return m.getAttribute('data-hovercard');};
l.





$Hovercard_isInEmbeddedStory=function(m){
return c('DOM').scry
(m,
"^._5jmm ._2orz").
length>0;};
l.



$Hovercard_getLoadingDialog=function(){
if(!l.$Hovercard_loadingDialog){
l.$Hovercard_loadingDialog=new (c('ContextualDialog'))
({width:275,theme:c('ContextualDialogXUITheme')},
c('JSXDOM').div
({className:"_7lk"},j._(["Loading...","0007976d9b948d4ca9e57de7b555b2c5"])));



l.$Hovercard_loadingDialog.
disableBehavior(c('AccessibleLayer')).
disableBehavior(c('LayerAutoFocus')).
disableBehavior(c('LayerRefocusOnHide'));}

return l.$Hovercard_loadingDialog;};
l.







dirty=function(m){
var n=l.$Hovercard_hovercards[m];
if(n){
n.$Hovercard_setInactive(true);
delete l.$Hovercard_hovercards[m];}};

l.






dirtyAll=function(){
for(var m in l.$Hovercard_hovercards)
l.dirty(m);

c('Arbiter').inform('Hovercard/dirty');};
l.






contains=function(m){
var n=l.getActiveHovercard();
if(n)
return n.$Hovercard_contains(m);

return false;};
l.









processNode=function(m){
if(!m)
return false;


var n=l.$Hovercard_getEndpoint(m);
if(!n)
return false;



if(l.$Hovercard_isInEmbeddedStory(m)||l.$Hovercard_isNestedLink(m))
return false;

var o=l.$Hovercard_hovercards[n];
if(!o)
o=
l.$Hovercard_hovercards[n]=new l(m,n);



if(o.$Hovercard_active)
return false;



var p=l.getActiveHovercard(),
q=false;
while(p&&!l.contains(m)){
l.$Hovercard_showingHovercards.pop().$Hovercard_setInactive();
q=true;
p=l.getActiveHovercard();}

var r=null;
if(p)
r=p.$Hovercard_endpoint;



if(o.$Hovercard_shown&&o.$Hovercard_node!=m)
o.$Hovercard_invalidateAllChildren(m);

o.$Hovercard_setActive(m,q);
o.$Hovercard_currentParentEndpoint=r;
l.$Hovercard_showingHovercards.push(o);

return true;};

l.










setDirtyAllOnPageTransition=function(m){
l.dirtyAllOnPageTransition=m;};
l.

getLoadingDelay=function(){
return l.$Hovercard_loadingDelay;};
l.

getHideDelay=function(){
return l.$Hovercard_hideDelay;};
l.



scroll=function(){
var m=null;
for(var n=l.$Hovercard_showingHovercards,o=Array.isArray(n),p=0,n=o?n:n[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var q;if(o){if(p>=n.length)break;q=n[p++];}else{p=n.next();if(p.done)break;q=p.value;}var r=q;
if(r.$Hovercard_isFixedStyle()){
m=r;
break;}}


if(!m)
return;

l.$Hovercard_setAllInactiveUntilEndpoint(m.$Hovercard_endpoint,true);
l.$Hovercard_showingHovercards.pop().$Hovercard_setInactive(true);};

l.






























abort=function(){
l.hide(true);};
l.









$Hovercard_isNestedLink=function(m){
return c('Parent').bySelector(m,"._7lu")!==null;};
l.prototype.



$Hovercard_clearHideTimer=function(){
clearTimeout(this.$Hovercard_hideTimer);
this.$Hovercard_hideTimer=null;};
l.prototype.




$Hovercard_setNodeLeave=function(){
var m=this,
n=this.$Hovercard_node;
m.$Hovercard_leaveToken=c('Event').listen(n,'mouseleave',function(){
if(!m.$Hovercard_active)
return;


l.$Hovercard_setAllInactiveUntilEndpoint(m.$Hovercard_endpoint);
if(l.$Hovercard_showingHovercards.length)

l.$Hovercard_showingHovercards.pop().$Hovercard_setInactive();});};


l.prototype.





$Hovercard_setNodeMove=function(){
var m=this,
n=this.$Hovercard_node;
this.$Hovercard_moveToken=
c('Event').listen(n,'mousemove',function(event){
if(m.$Hovercard_shown)
return;

m.$Hovercard_pos=c('Vector').getEventPosition(event);});};

l.prototype.





$Hovercard_clearShowTimers=function(){
clearTimeout(this.$Hovercard_fetchTimer);
clearTimeout(this.$Hovercard_showTimer);
this.$Hovercard_fetchTimer=null;
this.$Hovercard_showTimer=null;};
l.prototype.








$Hovercard_setActive=function(m){var n=arguments.length<=1||arguments[1]===undefined?false:arguments[1];
if(this.$Hovercard_active)
return;

this.$Hovercard_node=m;
this.$Hovercard_active=true;
this.$Hovercard_clearHideTimer();
this.$Hovercard_setNodeLeave();
if(this.$Hovercard_shown)
return;

this.$Hovercard_setNodeMove();
var o=l.$Hovercard_fetchDelay,
p=
n?l.$Hovercard_hideDelay:l.$Hovercard_showDelay;

if(m.getAttribute('data-hovercard-instant'))


o=p=l.$Hovercard_almostInstant;


var q=function s(){
this.$Hovercard_fetch();},

r=function s(t){
this.$Hovercard_show(t);};

if(!this.$Hovercard_fetchStarted)
this.$Hovercard_fetchTimer=setTimeout(q.bind(this),o);

this.$Hovercard_showTimer=setTimeout(r.bind(this,p),
p);};
l.prototype.



$Hovercard_clearNodeListeners=function(){
if(this.$Hovercard_moveToken){
this.$Hovercard_moveToken.remove();
this.$Hovercard_moveToken=null;}

if(this.$Hovercard_leaveToken){
this.$Hovercard_leaveToken.remove();
this.$Hovercard_leaveToken=null;}};

l.prototype.







$Hovercard_setInactive=function(){var m=arguments.length<=0||arguments[0]===undefined?false:arguments[0];
if(!this.$Hovercard_active)
return;

this.$Hovercard_active=false;
this.$Hovercard_clearShowTimers();
this.$Hovercard_clearNodeListeners();
if(!this.$Hovercard_shown)
return;

if(m){
this.$Hovercard_hide(true);
return;}

var n=
this.$Hovercard_node.getAttribute('data-hovercard-instant')?
l.$Hovercard_almostInstant:
l.$Hovercard_hideDelay,
o=function p(){
this.$Hovercard_hide();};

this.$Hovercard_hideTimer=
setTimeout(o.bind(this),n);};
l.prototype.
$Hovercard_hide=function(){var m=arguments.length<=0||arguments[0]===undefined?false:arguments[0];
if(!this.$Hovercard_shown||this.$Hovercard_hideTimer==null&&!m)
return;

this.$Hovercard_hideTimer=null;
this.$Hovercard_clearDialogSubscriptions();
this.$Hovercard_dialog.hide();
this.$Hovercard_shown=false;



this.$Hovercard_currentParentEndpoint=null;};
l.prototype.
















$Hovercard_show=function(m,n){
if(!this.$Hovercard_active||this.$Hovercard_shown)
return;


if(this.$Hovercard_loaded||n){
this.$Hovercard_initDialogSubscriptions();
this.$Hovercard_showDialog();
this.$Hovercard_shown=true;}else{

m=l.$Hovercard_loadingDelay-l.$Hovercard_showDelay;
var o=function p(q,r){
this.$Hovercard_show(q,r);};

this.$Hovercard_showTimer=setTimeout
(o.bind(this,m,true),
m);}};


l.prototype.




$Hovercard_showDialog=function(){
var m=this.$Hovercard_node,
n=this.$Hovercard_dialog,


o=m.getAttribute('data-hovercard-position');
o&&n.setPosition(o);

this.$Hovercard_setOffsetsForDialog();

var p=m.getAttribute
('data-hovercard-prefer-more-content-show');

p&&
n.getOrientation().setPreferMoreContentShownRect(true);


if(!c('DOM').contains(document.body,m)){
if(this.$Hovercard_active){

l.$Hovercard_setAllInactiveUntilEndpoint(this.$Hovercard_endpoint,true);

l.$Hovercard_showingHovercards.pop().$Hovercard_setInactive(true);}else 

this.$Hovercard_hide();

return;}


n.
setContextWithBounds(m,
c('getInlineBoundingRect')(m,this.$Hovercard_pos)).
show();
c('Arbiter').inform('Hovercard/show');




if(this.$Hovercard_loaded&&m!=l.$Hovercard_lastShownHovercardNode){
l.$Hovercard_lastShownHovercardNode=m;

setTimeout
(function(){


c('clickRefAction')('himp',m,null,'FORCE',{ft:{evt:39}});},

0);}};


l.prototype.











$Hovercard_fetch=function(){
if(this.$Hovercard_loaded||this.$Hovercard_fetchStarted)
return;

this.$Hovercard_fetchStarted=true;

if(this.$Hovercard_node.id&&k[this.$Hovercard_node.id]){
l.setDialog(this.$Hovercard_endpoint,k[this.$Hovercard_node.id]);
return;}

var m=this,
n=function o(){
l.dirty(m.$Hovercard_endpoint);
l.hide(true);};


new (c('AsyncRequest'))(this.$Hovercard_endpoint).
setData({endpoint:this.$Hovercard_endpoint}).
setMethod('GET').
setReadOnly(true).
setErrorHandler(n).
setTransportErrorHandler(n).
send();};

l.prototype.





$Hovercard_setOffsetsForDialog=function(){
var m=this.$Hovercard_node.getAttribute('data-hovercard-offset-x')||0;
this.$Hovercard_dialog.setOffsetX(parseInt(m,10));
var n=this.$Hovercard_node.getAttribute('data-hovercard-offset-y')||0;
this.$Hovercard_dialog.setOffsetY(parseInt(n,10));};
l.prototype.





$Hovercard_initDialogSubscriptions=function(){
var m=this;
m.$Hovercard_dialog.mouseTest=false;
m.$Hovercard_dialogSubscriptions=
[m.$Hovercard_dialog.subscribe('mouseenter',function(){
if(m.$Hovercard_active)
return;

var n=m,
o=null,
p=[];
while(!n.$Hovercard_active){
if(!n.$Hovercard_shown)

return;

p.push(n);
o=n.$Hovercard_currentParentEndpoint;
if(!o)
break;

n=l.$Hovercard_hovercards[o];}





l.$Hovercard_setAllInactiveUntilEndpoint(o);
while(p.length){
n=p.pop();
n.$Hovercard_setActive(n.$Hovercard_node,false);
l.$Hovercard_showingHovercards.push(n);}}),


m.$Hovercard_dialog.subscribe('mouseleave',function(n,o){
if(!m.$Hovercard_active)
return;

l.$Hovercard_setAllInactiveUntilEndpoint(m.$Hovercard_endpoint);
l.$Hovercard_showingHovercards.pop().$Hovercard_setInactive();
var p=l.getActiveHovercard();
while(p&&!l.contains(o)){
l.$Hovercard_showingHovercards.pop().$Hovercard_setInactive();
p=l.getActiveHovercard();}}),



m.$Hovercard_dialog.subscribe('destroy',function(){
if(m.$Hovercard_loaded){
m.$Hovercard_clearDialogSubscriptions();
m.$Hovercard_dialog=l.$Hovercard_getLoadingDialog();
m.$Hovercard_loaded=false;}

if(!m.$Hovercard_active)
return;


l.$Hovercard_setAllInactiveUntilEndpoint(m.$Hovercard_endpoint,true);
l.$Hovercard_showingHovercards.pop().$Hovercard_setInactive(true);})];};


l.prototype.



$Hovercard_clearDialogSubscriptions=function(){
while(this.$Hovercard_dialogSubscriptions.length)
this.$Hovercard_dialogSubscriptions.pop().unsubscribe();};

l.prototype.





$Hovercard_contains=function(m){
return c('ContextualThing').containsIncludingLayers
(this.$Hovercard_dialog.getContentRoot(),
m);};

l.prototype.




$Hovercard_invalidateAllChildren=function(){


this.$Hovercard_hide(true);
var m=[this];
while(m.length){
var n=m.pop();
for(var o in l.$Hovercard_hovercards){
if(!Object.prototype.hasOwnProperty.call(l.$Hovercard_hovercards,o))
continue;

var p=l.$Hovercard_hovercards[o];
if(p.$Hovercard_currentParentEndpoint==n.$Hovercard_endpoint){
p.$Hovercard_hide(true);
m.push(p);}}}};



l.prototype.



$Hovercard_isFixedStyle=function(){
return c('Style').isFixed(this.$Hovercard_node);};
l.prototype.




$Hovercard_loadDialog=function(m){
this.$Hovercard_clearDialogSubscriptions();
if(this.$Hovercard_shown)
this.$Hovercard_dialog.hide();

this.$Hovercard_loaded=true;
this.$Hovercard_dialog=m;
if(this.$Hovercard_shown){
this.$Hovercard_initDialogSubscriptions();
this.$Hovercard_showDialog();}};

l.$Hovercard_fetchDelay=150;l.$Hovercard_showDelay=700;l.$Hovercard_loadingDelay=1000;l.$Hovercard_hideDelay=250;l.$Hovercard_almostInstant=50;l.$Hovercard_hovercards={};l.$Hovercard_loadingDialog=null;l.$Hovercard_showingHovercards=[];l.$Hovercard_lastShownHovercardNode=null;l.dirtyAllOnPageTransition=true;




(function(){


c('Event').listen(window,'scroll',l.scroll);



c('Arbiter').subscribe
('page_transition',
function(){
l.hide(true);
l.dirtyAllOnPageTransition&&l.dirtyAll();},

c('Arbiter').SUBSCRIBE_NEW);})

();

f.exports=l;}),null);
