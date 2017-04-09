if (self.CavalryLogger) { CavalryLogger.start_js(["baw9T"]); }

/** js/browse/BrowseClientEventLogger.js */






__d('BrowseClientEventLogger',['Banzai','SearchLoggingOptions'],(function a(b,c,d,e,f,g){

'use strict';




var h='browse_client_event_session',
i='search_www_click_error',


j='21.',





k=
{logData:function l
(event,
m,
n){

var o=arguments.length<=3||arguments[3]===undefined?{}:arguments[3];
if(!event||!m)
return;

o.event=event;
o.client_time=Math.floor(Date.now());
o.client_time_2=Date.now()/1000;
o.session_id=m;
o.vertical=n;
this.processedSessions=this.processedSessions||[];
if(this.processedSessions.indexOf(m)!==-1)

return;



var p=o.event==='click'&&
o.clicked_href!=null&&
c('SearchLoggingOptions').signalLinkClicks;

c('Banzai').post(h,[o],
{delay:0,
retry:true,
signal:p});},



logClick:function l(m){
m.gt.event='click';
this.maybeLogVisiblityEvent(m,true);},


maybeLogClientViewEvent:function l(m){
m.event='client_view';
this.maybeLogVisiblityEvent(m);},


maybeLogVisiblityEvent:function l(m){var n=arguments.length<=1||arguments[1]===undefined?false:arguments[1],

o=null;
if(n){
o=m;
m=m.gt;}


if(!m||
!m.xt||
m.xt.indexOf(j)!==0){

if(n)
c('Banzai').post(i,[o],
{delay:0,
retry:true});


return;}


var p=JSON.parse(m.xt.substring(3));
if(n){
p.click_type=m.click_type;
p.tn=m.tn;
p.clicked_href=m.clicked_href;}

var event=m.event;
if(event==='vpvd'){
if(!m.ft)
return;

p.vpvd_time=m.ft.vpvd_time_delta;}

this.logData(event,p.session_id,p.vertical,p);},


logImpression:function l(m){
m.event='impression';
this.maybeLogVisiblityEvent(m);}};



f.exports=k;}),null);

/** shared/encrypted_cdn/EncryptedImgUtils.js */





__d('EncryptedImgUtils',['URI'],(function a(b,c,d,e,f,g){



var h='ek',

i=
{extractKey:function j(k){
var l=k.getQueryData(),
m=l[h];
delete l[h];
k.setQueryData(l);
return m;},




isEncrypted:function j(k){

return (!k.startsWith('data:')&&
i.extractKey(new (c('URI'))(k))!=null);}};




f.exports=i;}),null);

/** shared/core/warnUnsupportedProp.js */





__d('warnUnsupportedProp',['warning'],(function a(b,c,d,e,f,g){

'use strict';















function h
(i,
j,
k){

c('warning')
(false,
'%s component does not support prop `%s`.%s',
i,
j,
k?' '+k:'');}



f.exports=h;}),null);

/** shared/core_components/Image/ImageCore.react.js */





__d('ImageCore.react',['Bootloader','createCancelableFunction','EncryptedImgUtils','React','joinClasses','warnUnsupportedProp'],(function a(b,c,d,e,f,g){var h,i;












function j(n){
return !!(n&&
typeof n==='object'&&
n.sprited&&
n.spriteMapCssClass&&
n.spriteCssClass);}


function k(n){
if(typeof n==='string')
return n;


if(n&&typeof n==='object')
if(!n.sprited&&n.uri&&typeof n.uri==='string')
return n.uri;



return '';}


function l
(n,
o,
p){

var q=n[o];


if(q==null||j(q)||k(q)!=='')
return;


return new Error
('Provided `'+o+'` to `'+p+'`. Must be `null`, '+'`undefined`, a string or an `ix` call.');}


h=babelHelpers.inherits









(m,c('React').Component);i=h&&h.prototype;


















function m(){'use strict';
i.constructor.call(this);

this.state=





{src:null};


this.encryptedImgCallback=null;}
m.prototype.

$ReactImage_processSrc=function(n){'use strict';
if(j(n))
return;


var o=k(n);

if(o!=null&&c('EncryptedImgUtils').isEncrypted(o)){
c('Bootloader').loadModules(["EncryptedImg"],function(p){
if(this.encryptedImgCallback)

this.encryptedImgCallback.cancel();





this.encryptedImgCallback=c('createCancelableFunction')(function(q){



if(o===k(this.props.src))


this.setState({src:q});}.

bind(this));



p.load(o,this.encryptedImgCallback);}.
bind(this),'ImageCore.react');}else 

this.setState({src:o});};

m.prototype.

componentWillMount=function(){'use strict';
this.$ReactImage_processSrc(this.props.src);};
m.prototype.

componentWillReceiveProps=function(n){'use strict';
if(n.src!==this.props.src)
this.$ReactImage_processSrc(n.src);};

m.prototype.

componentWillUnmount=function(){'use strict';
if(this.encryptedImgCallback)

this.encryptedImgCallback.cancel();};

m.prototype.

render=function(){'use strict';
var n=c('joinClasses')(this.props.className,m.baseClassName),
o=this.props.src;

if(this.props.source!=null)
c('warnUnsupportedProp')
('ImageCore',
'source',
'Did you mean `src`?');



if(o==null)
return c('React').createElement('img',babelHelpers['extends']({},this.props,{className:n}));


var p=null;
if(this.props.alt&&j(o))
p=c('React').createElement('u',null,this.props.alt);


if(typeof o==='string')
return c('React').createElement('img',babelHelpers['extends']({},this.props,{src:this.state.src,className:n}),
p);



if(j(o)){
var q=o;
n=c('joinClasses')
(n,
q.spriteMapCssClass,
q.spriteCssClass);var r=



this.props,s=r.src,t=babelHelpers.objectWithoutProperties(r,['src']);

return (c('React').createElement('i',babelHelpers['extends']({},t,{className:n,src:null}),
p));}




if(this.props.width===undefined&&this.props.height===undefined){
var u=o;

return (c('React').createElement('img',babelHelpers['extends']({},
this.props,
{className:n,
width:u.width,
height:u.height,
src:this.state.src}),
p));}





return (c('React').createElement('img',babelHelpers['extends']({},this.props,{className:n,src:this.state.src}),
p));};


m.baseClassName='img';m.validateImageSrcPropType=l;m.propTypes={src:l};m.defaultProps={alt:''};


f.exports=m;}),null);

/** js/core_components/Image/Image.react.js */










__d('Image.react',['ImageCore.react'],(function a(b,c,d,e,f,g){

f.exports=c('ImageCore.react');}),null);

/** js/modules/Animation.js */




__d('Animation',['BrowserSupport','CSS','DataStore','DOM','Style','clearTimeout','clearInterval','getVendorPrefixedName','setIntervalAcrossTransitions','setTimeoutAcrossTransitions','shield','requestAnimationFrame'],(function a(b,c,d,e,f,g){















var h=c('requestAnimationFrame'),
i=[],
j;






















































function k(ba){





if(b==this){
return new k(ba);}else{

this.obj=ba;
this._reset_state();
this.queue=[];
this.last_attr=null;
this.behaviorOverrides=



{ignoreUserScroll:false};}}




function l(ba){
if(c('BrowserSupport').hasCSS3DTransforms()){
return o(ba);}else 










return n(ba);}



function m(ba){
return ba.toFixed(8);}


function n(ba){
ba=[ba[0],ba[4],ba[1],ba[5],ba[12],ba[13]];
return 'matrix('+ba.map(m).join(',')+')';}


function o(ba){
return 'matrix3d('+ba.map(m).join(',')+')';}


function p(ba,ca){

if(!ba)
ba=
[1,0,0,0,
0,1,0,0,
0,0,1,0,
0,0,0,1];


var da=[];
for(var ea=0;ea<4;ea++)
for(var fa=0;fa<4;fa++){
var ga=0;
for(var ha=0;ha<4;ha++)
ga+=ba[ea*4+ha]*ca[ha*4+fa];

da[ea*4+fa]=ga;}


return da;}


var q=0;


k.prototype._reset_state=function(){
this.state=
{attrs:{},
duration:500};};




k.prototype.stop=function(){
this._reset_state();
this.queue=[];
return this;};



k.prototype._build_container=function(){
if(this.container_div){
this._refresh_container();
return;}




if(this.obj.firstChild&&this.obj.firstChild.__animation_refs){
this.container_div=this.obj.firstChild;
this.container_div.__animation_refs++;
this._refresh_container();
return;}

var ba=document.createElement('div');
ba.style.padding='0px';
ba.style.margin='0px';
ba.style.border='0px';
ba.__animation_refs=1;
var ca=this.obj.childNodes;
while(ca.length)
ba.appendChild(ca[0]);

this.obj.appendChild(ba);

this._orig_overflow=this.obj.style.overflow;
this.obj.style.overflow='hidden';
this.container_div=ba;
this._refresh_container();};



k.prototype._refresh_container=function(){
this.container_div.style.height='auto';
this.container_div.style.width='auto';
this.container_div.style.height=this.container_div.offsetHeight+'px';
this.container_div.style.width=this.container_div.offsetWidth+'px';};



k.prototype._destroy_container=function(){
if(!this.container_div)
return;

if(!--this.container_div.__animation_refs){
var ba=this.container_div.childNodes;
while(ba.length)
this.obj.appendChild(ba[0]);

this.obj.removeChild(this.container_div);}

this.container_div=null;
this.obj.style.overflow=this._orig_overflow;};



var r=1,
s=2,
t=3;
k.prototype._attr=function(ba,ca,da){


ba=ba.replace(/-[a-z]/gi,function(fa){
return fa.substring(1).toUpperCase();});


var ea=false;
switch(ba){
case 'background':
this._attr('backgroundColor',ca,da);
return this;

case 'backgroundColor':
case 'borderColor':
case 'color':
ca=x(ca);
break;

case 'opacity':
ca=parseFloat(ca,10);
break;

case 'height':
case 'width':
if(ca=='auto'){
ea=true;}else 

ca=parseInt(ca,10);

break;

case 'borderWidth':
case 'lineHeight':
case 'fontSize':
case 'margin':
case 'marginBottom':
case 'marginLeft':
case 'marginRight':
case 'marginTop':
case 'padding':
case 'paddingBottom':
case 'paddingLeft':
case 'paddingRight':
case 'paddingTop':
case 'bottom':
case 'left':
case 'right':
case 'top':
case 'scrollTop':
case 'scrollLeft':
ca=parseInt(ca,10);
break;

case 'rotateX':
case 'rotateY':
case 'rotateZ':
ca=parseInt(ca,10)*Math.PI/180;
break;
case 'translateX':
case 'translateY':
case 'translateZ':
case 'scaleX':
case 'scaleY':
case 'scaleZ':
ca=parseFloat(ca,10);
break;

case 'rotate3d':
this._attr('rotateX',ca[0],da);
this._attr('rotateY',ca[1],da);
this._attr('rotateZ',ca[2],da);
return this;
case 'rotate':
this._attr('rotateZ',ca,da);
return this;
case 'scale3d':
this._attr('scaleZ',ca[2],da);

case 'scale':
this._attr('scaleX',ca[0],da);
this._attr('scaleY',ca[1],da);
return this;
case 'translate3d':
this._attr('translateZ',ca[2],da);

case 'translate':
this._attr('translateX',ca[0],da);
this._attr('translateY',ca[1],da);
return this;


default:throw new Error(ba+' is not a supported attribute!');}


if(this.state.attrs[ba]===undefined)
this.state.attrs[ba]={};

if(ea)
this.state.attrs[ba].auto=true;

switch(da){
case t:
this.state.attrs[ba].start=ca;
break;

case s:
this.state.attrs[ba].by=true;


case r:
this.state.attrs[ba].value=ca;
break;}};




function u(ba){
var ca=parseInt(c('Style').get(ba,'paddingLeft'),10),
da=parseInt(c('Style').get(ba,'paddingRight'),10),
ea=parseInt(c('Style').get(ba,'borderLeftWidth'),10),
fa=parseInt(c('Style').get(ba,'borderRightWidth'),10);
return ba.offsetWidth-(ca?ca:0)-(da?da:0)-(ea?ea:0)-
(fa?fa:0);}


function v(ba){
var ca=parseInt(c('Style').get(ba,'paddingTop'),10),
da=parseInt(c('Style').get(ba,'paddingBottom'),10),
ea=parseInt(c('Style').get(ba,'borderTopWidth'),10),
fa=parseInt(c('Style').get(ba,'borderBottomWidth'),10);
return ba.offsetHeight-(ca?ca:0)-(da?da:0)-(ea?ea:0)-
(fa?fa:0);}



k.prototype.to=function(ba,ca){
if(ca===undefined){
this._attr(this.last_attr,ba,r);}else{

this._attr(ba,ca,r);
this.last_attr=ba;}

return this;};



k.prototype.by=function(ba,ca){
if(ca===undefined){
this._attr(this.last_attr,ba,s);}else{

this._attr(ba,ca,s);
this.last_attr=ba;}

return this;};



k.prototype.from=function(ba,ca){
if(ca===undefined){
this._attr(this.last_attr,ba,t);}else{

this._attr(ba,ca,t);
this.last_attr=ba;}

return this;};



k.prototype.duration=function(ba){
this.state.duration=ba?ba:0;
return this;};



k.prototype.checkpoint=function(ba,ca){
if(ba===undefined)
ba=1;

this.state.checkpoint=ba;
this.queue.push(this.state);
this._reset_state();
this.state.checkpointcb=ca;
return this;};



k.prototype.blind=function(){
this.state.blind=true;
return this;};



k.prototype.hide=function(){
this.state.hide=true;
return this;};



k.prototype.show=function(){
this.state.show=true;
return this;};



k.prototype.ease=function(ba){
this.state.ease=ba;
return this;};



k.prototype.go=function(){
var ba=Date.now();
this.queue.push(this.state);

for(var ca=0;ca<this.queue.length;ca++){
this.queue[ca].start=ba-q;
if(this.queue[ca].checkpoint)
ba+=this.queue[ca].checkpoint*this.queue[ca].duration;}


y(this);
return this;};



k.prototype._show=function(){
c('CSS').show(this.obj);};



k.prototype._hide=function(){
c('CSS').hide(this.obj);};




k.prototype.overrideBehavior=function(ba){
this.behaviorOverrides=babelHelpers['extends']({},
this.behaviorOverrides,
ba);

return this;};



k.prototype._frame=function(ba){
var ca=true,
da=false,
ea;





function fa(cb){
return document.documentElement[cb]||document.body[cb];}







function ga(cb,db){

return (cb===document.body?
fa(db):
cb[db]);}







function ha(cb,db){


return (db.lastScrollTop!==undefined&&
db.lastScrollTop!==ga(cb.obj,'scrollTop')||

db.lastScrollLeft!==undefined&&
db.lastScrollLeft!==ga(cb.obj,'scrollLeft'));}








function ia(cb,db){
db.lastScrollTop=ga(cb.obj,'scrollTop');
db.lastScrollLeft=ga(cb.obj,'scrollLeft');}


for(var ja=0;ja<this.queue.length;ja++){


var ka=this.queue[ja];
if(ka.start>ba){
ca=false;
continue;}


if(ka.checkpointcb){
this._callback(ka.checkpointcb,ba-ka.start);
ka.checkpointcb=null;}



if(ka.started===undefined){
if(ka.show)
this._show();

for(var la in ka.attrs){
if(ka.attrs[la].start!==undefined)
continue;

switch(la){
case 'backgroundColor':
case 'borderColor':
case 'color':

ea=x(c('Style').get(this.obj,la=='borderColor'?'borderLeftColor':la));


if(ka.attrs[la].by){
ka.attrs[la].value[0]=Math.min(255,Math.max(0,ka.attrs[la].value[0]+ea[0]));
ka.attrs[la].value[1]=Math.min(255,Math.max(0,ka.attrs[la].value[1]+ea[1]));
ka.attrs[la].value[2]=Math.min(255,Math.max(0,ka.attrs[la].value[2]+ea[2]));}

break;

case 'opacity':
ea=c('Style').getOpacity(this.obj);
if(ka.attrs[la].by)
ka.attrs[la].value=Math.min(1,Math.max(0,ka.attrs[la].value+ea));

break;

case 'height':
ea=v(this.obj);
if(ka.attrs[la].by)
ka.attrs[la].value+=ea;

break;

case 'width':
ea=u(this.obj);
if(ka.attrs[la].by)
ka.attrs[la].value+=ea;

break;

case 'scrollLeft':
case 'scrollTop':
ea=ga(this.obj,la);
if(ka.attrs[la].by)
ka.attrs[la].value+=ea;

ia(this,ka);
break;

case 'rotateX':
case 'rotateY':
case 'rotateZ':
case 'translateX':
case 'translateY':
case 'translateZ':
ea=c('DataStore').get(this.obj,la,0);
if(ka.attrs[la].by)
ka.attrs[la].value+=ea;

break;
case 'scaleX':
case 'scaleY':
case 'scaleZ':
ea=c('DataStore').get(this.obj,la,1);
if(ka.attrs[la].by)
ka.attrs[la].value+=ea;

break;


default:ea=parseInt(c('Style').get(this.obj,la),10)||0;
if(ka.attrs[la].by)
ka.attrs[la].value+=ea;

break;}

ka.attrs[la].start=ea;}



if(ka.attrs.height&&ka.attrs.height.auto||
ka.attrs.width&&ka.attrs.width.auto){


this._destroy_container();
for(var la in {height:1,width:1,
fontSize:1,
borderLeftWidth:1,borderRightWidth:1,borderTopWidth:1,borderBottomWidth:1,
paddingLeft:1,paddingRight:1,paddingTop:1,paddingBottom:1})
if(ka.attrs[la])
this.obj.style[la]=ka.attrs[la].value+(typeof ka.attrs[la].value=='number'?'px':'');




if(ka.attrs.height&&ka.attrs.height.auto)
ka.attrs.height.value=v(this.obj);

if(ka.attrs.width&&ka.attrs.width.auto)
ka.attrs.width.value=u(this.obj);}






ka.started=true;
if(ka.blind)
this._build_container();}




var ma=(ba-ka.start)/ka.duration;
if(ma>=1){
ma=1;
if(ka.hide)
this._hide();}else 


ca=false;

var na=ka.ease?ka.ease(ma):ma;


if(!da&&ma!=1&&ka.blind)
da=true;



for(var la in ka.attrs)
switch(la){
case 'backgroundColor':
case 'borderColor':
case 'color':



if(ka.attrs[la].start[3]!=ka.attrs[la].value[3]){
this.obj.style[la]='rgba('+
w
(na,
ka.attrs[la].start[0],
ka.attrs[la].value[0],
true)+
','+
w
(na,
ka.attrs[la].start[1],
ka.attrs[la].value[1],
true)+
','+
w
(na,
ka.attrs[la].start[2],
ka.attrs[la].value[2],
true)+
','+
w
(na,
ka.attrs[la].start[3],
ka.attrs[la].value[3],
false)+
')';}else 

this.obj.style[la]='rgb('+
w
(na,
ka.attrs[la].start[0],
ka.attrs[la].value[0],
true)+
','+
w
(na,
ka.attrs[la].start[1],
ka.attrs[la].value[1],
true)+
','+
w
(na,
ka.attrs[la].start[2],
ka.attrs[la].value[2],
true)+
')';

break;

case 'opacity':
c('Style').set(this.obj,'opacity',
w(na,ka.attrs[la].start,ka.attrs[la].value));
break;

case 'height':
case 'width':
this.obj.style[la]=na==1&&ka.attrs[la].auto?'auto':
w
(na,
ka.attrs[la].start,
ka.attrs[la].value,
true)+'px';
break;

case 'scrollLeft':
case 'scrollTop':

var oa=this.obj===document.body;

if(!this.behaviorOverrides.ignoreUserScroll&&
ha(this,ka)){



delete ka.attrs.scrollTop;
delete ka.attrs.scrollLeft;}else{

var pa=w
(na,ka.attrs[la].start,ka.attrs[la].value,true);


if(!oa){
this.obj[la]=pa;}else 

if(la=='scrollLeft'){
b.scrollTo(pa,fa('scrollTop'));}else 

b.scrollTo(fa('scrollLeft'),pa);



ia(this,ka);}

break;

case 'translateX':
case 'translateY':
case 'translateZ':
case 'rotateX':
case 'rotateY':
case 'rotateZ':
case 'scaleX':
case 'scaleY':
case 'scaleZ':
c('DataStore').set(this.obj,la,
w
(na,ka.attrs[la].start,ka.attrs[la].value,false));
break;


default:this.obj.style[la]=w(na,ka.attrs[la].start,ka.attrs[la].value,true)+'px';
break;}



var qa=null,

ra=c('DataStore').get(this.obj,'translateX',0),
sa=c('DataStore').get(this.obj,'translateY',0),
ta=c('DataStore').get(this.obj,'translateZ',0);
if(ra||sa||ta)
qa=p(qa,
[1,0,0,0,
0,1,0,0,
0,0,1,0,
ra,sa,ta,1]);


var ua=c('DataStore').get(this.obj,'scaleX',1),
va=c('DataStore').get(this.obj,'scaleY',1),
wa=c('DataStore').get(this.obj,'scaleZ',1);
if(ua-1||va-1||wa-1)
qa=p(qa,
[ua,0,0,0,
0,va,0,0,
0,0,wa,0,
0,0,0,1]);


var xa=c('DataStore').get(this.obj,'rotateX',0);
if(xa)
qa=p(qa,
[1,0,0,0,
0,Math.cos(xa),Math.sin(-xa),0,
0,Math.sin(xa),Math.cos(xa),0,
0,0,0,1]);


var ya=c('DataStore').get(this.obj,'rotateY',0);
if(ya)
qa=p(qa,
[Math.cos(ya),0,Math.sin(ya),0,
0,1,0,0,
Math.sin(-ya),0,Math.cos(ya),0,
0,0,0,1]);


var za=c('DataStore').get(this.obj,'rotateZ',0);
if(za)
qa=p(qa,
[Math.cos(za),Math.sin(-za),0,0,
Math.sin(za),Math.cos(za),0,0,
0,0,1,0,
0,0,0,1]);




var ab=c('getVendorPrefixedName')('transform');
if(ab)
if(qa){
var bb=l(qa);
c('Style').set(this.obj,ab,bb);}else
if(ca)
c('Style').set(this.obj,ab,null);




if(ma==1){
this.queue.splice(ja--,1);
this._callback(ka.ondone,ba-ka.start-ka.duration);}}



if(!da&&this.container_div)
this._destroy_container();

return !ca;};



k.prototype.ondone=function(ba){
this.state.ondone=ba;
return this;};



k.prototype._callback=function(ba,ca){
if(ba){
q=ca;
ba.call(this);
q=0;}};




function w(ba,ca,da,ea){
return (ea?parseInt:parseFloat)((da-ca)*ba+ca,10);}



function x(ba){
var ca=/^#([a-f0-9]{1,2})([a-f0-9]{1,2})([a-f0-9]{1,2})$/i.exec(ba);
if(ca){
return [parseInt(ca[1].length==1?ca[1]+ca[1]:ca[1],16),
parseInt(ca[2].length==1?ca[2]+ca[2]:ca[2],16),
parseInt(ca[3].length==1?ca[3]+ca[3]:ca[3],16),
1];}else{

var da=/^rgba? *\(([0-9]+), *([0-9]+), *([0-9]+)(?:, *([0-9\.]+))?\)$/.exec(ba);
if(da){
return [parseInt(da[1],10),
parseInt(da[2],10),
parseInt(da[3],10),
da[4]?parseFloat(da[4]):1];}else
if(ba=='transparent'){
return [255,255,255,0];}else 


throw new Error('Named color attributes are not supported.');}}





function y(ba){
i.push(ba);
if(i.length===1)
if(h){
h(aa);}else 

j=c('setIntervalAcrossTransitions')(aa,20);



if(h)
z();


aa(Date.now(),true);}










function z(){
if(!h)
throw new Error('Ending timer only valid with requestAnimationFrame');


var ba=0;

for(var ca=0;ca<i.length;ca++){
var da=i[ca];

for(var ea=0;ea<da.queue.length;ea++){
var fa=da.queue[ea].start+da.queue[ea].duration;

if(fa>ba)
ba=fa;}}




if(j){
c('clearTimeout')(j);
j=null;}


var ga=Date.now();
if(ba>ga)




j=c('setTimeoutAcrossTransitions')
(c('shield')(aa),
ba-ga);}











function aa(ba,ca){
var da=Date.now();
for(var ea=ca===true?i.length-1:0;
ea<i.length;ea++)

try{if(!i[ea]._frame(da))
i.splice(ea--,1);}catch(

fa){

i.splice(ea--,1);}



if(i.length===0){
if(j){
if(h){
c('clearTimeout')(j);}else 

c('clearInterval')(j);

j=null;}}else

if(h)
h(aa);}







k.ease={};

k.ease.begin=function(ba){
return Math.sin(Math.PI/2*(ba-1))+1;};

k.ease.end=function(ba){
return Math.sin(.5*Math.PI*ba);};

k.ease.both=function(ba){
return .5*Math.sin(Math.PI*(ba-.5))+.5;};


k.prependInsert=function(ba,ca){
k.insert(ba,ca,c('DOM').prependContent);};


k.appendInsert=function(ba,ca){
k.insert(ba,ca,c('DOM').appendContent);};


k.insert=function(ba,ca,da){
c('Style').set(ca,'opacity',0);
da(ba,ca);
new k(ca).
from('opacity',0).
to('opacity',1).
duration(400).
go();};


f.exports=k;}),null);

/** js/modules/FBID.js */





__d('FBID',[],(function a(b,c,d,e,f,g){

'use strict';




var h=
{isUser:function i(j){
return j>0&&j<2.2e+09||
j>=1e+14&&
j<=100099999989999||
j>=8.9e+13&&
j<=89999999999999||
j>=6.000001e+13&&
j<=60000019999999;}};



f.exports=h;}),null);

/** js/modules/tidyEvent.js */




__d('tidyEvent',['Run'],(function a(b,c,d,e,f,g){



var h=[];

function i(){
while(h.length){
var l=h.shift();
l&&l.remove?l.remove():l.unsubscribe();}}




function j(l){
var m;

function n(){
if(!m)
return;

m.apply(l,arguments);
m=null;
l=null;}


if(l.remove){
m=l.remove;
l.remove=n;}else{

m=l.unsubscribe;
l.unsubscribe=n;}


return l;}








function k(l){
if(!h.length)
c('Run').onLeave(i);

if(Array.isArray(l)){
for(var m=0;m<l.length;m++)
h.push(j(l[m]));}else 


h.push(j(l));


return l;}


f.exports=k;}),null);

/** js/navigation/PageletEventsHelper.js */





__d('PageletEventsHelper',['Arbiter','PageletEventConstsJS'],(function a(b,c,d,e,f,g){





var h='BigPipe/init',
i='pagelet_event',
j='phase_begin',




k={},


l=[],


m=false;




function n(){

return {pagelets:{},
categories:{},
phase_start:{},
display_resources:{},
all_resources:{}};}



function o
(r,
s,
t,
u){

if(k[u].pagelets[s]==undefined)
k[u].pagelets[s]={};

k[u].pagelets[s][r]=t;}


function p(r){
r.subscribe
(i,
function(s,t){








var event=t.event,u=t.ts,v=t.id,w=t.lid,x=t.phase,y=t.categories,z=t.allResources,aa=t.displayResources;
o(event,v,u,w);

var ba=k[w],
ca=ba.pagelets[v];

if(event===c('PageletEventConstsJS').ARRIVE_END){
ca.phase=x;
ba.all_resources[v]=z;
ba.display_resources[v]=aa;}



if((event===c('PageletEventConstsJS').ONLOAD_END||
event===c('PageletEventConstsJS').DISPLAY_END)&&
y)

y.forEach(function(fa){
if(ba.categories[fa]==undefined)
ba.categories[fa]={};


ba.categories[fa][event]=u;});


for(var da=0,ea=l.length;da<ea;da++)
l[da](v,event,u,w);});



r.subscribe(j,function(event,s){
k[s.lid].phase_start[s.phase]=s.ts;});}



var q=

{init:function r(){
if(m)
return;

c('Arbiter').subscribe(h,function(event,s){var t=s.lid,u=s.arbiter;
k[t]=n();
p(u);});

m=true;},












getMetrics:function r(s){
if(k[s])
return JSON.parse(JSON.stringify(k[s]));

return null;},


subscribeToPageletEvents:function r(s){
l.push(s);

return {remove:function t(){
l.splice(0,l.indexOf(s));}};}};





f.exports=q;}),null);

/** shared/react-fb/ReactFeatureFlags.js */





__d('ReactFeatureFlags',['ReactGK'],(function a(b,c,d,e,f,g){

'use strict';



var h=



{logTopLevelRenders:
console!==undefined&&console.time&&console.timeEnd&&
c('ReactGK').logTopLevelRenders,

prepareNewChildrenBeforeUnmountInStack:
c('ReactGK').prepareNewChildrenBeforeUnmountInStack,
disableNewFiberFeatures:true};


f.exports=h;}),null);

/** shared/node_modules/fbjs/lib/EventListener.js */




__d("fbjs/lib/EventListener",["EventListener"],(function a(b,c,d,e,f,g){
'use strict';

f.exports=c("EventListener");}),null);

/** shared/node_modules/fbjs/lib/ExecutionEnvironment.js */




__d("fbjs/lib/ExecutionEnvironment",["ExecutionEnvironment"],(function a(b,c,d,e,f,g){
'use strict';

f.exports=c("ExecutionEnvironment");}),null);

/** shared/core/camelizeStyleName.js */





__d('camelizeStyleName',['camelize'],(function a(b,c,d,e,f,g){

'use strict';



var h=/^-ms-/;


















function i(j){
return c('camelize')(j.replace(h,'ms-'));}


f.exports=i;}),null);

/** shared/node_modules/fbjs/lib/camelizeStyleName.js */




__d("fbjs/lib/camelizeStyleName",["camelizeStyleName"],(function a(b,c,d,e,f,g){
'use strict';

f.exports=c("camelizeStyleName");}),null);

/** shared/node_modules/fbjs/lib/containsNode.js */




__d("fbjs/lib/containsNode",["containsNode"],(function a(b,c,d,e,f,g){
'use strict';

f.exports=c("containsNode");}),null);

/** shared/node_modules/fbjs/lib/createNodesFromMarkup.js */




__d("fbjs/lib/createNodesFromMarkup",["createNodesFromMarkup"],(function a(b,c,d,e,f,g){
'use strict';

f.exports=c("createNodesFromMarkup");}),null);

/** shared/core/dom/focusNode.js */




__d('focusNode',[],(function a(b,c,d,e,f,g){

'use strict';




function h(i){




try{i.focus();}catch(
j){
}}


f.exports=h;}),null);

/** shared/node_modules/fbjs/lib/focusNode.js */




__d("fbjs/lib/focusNode",["focusNode"],(function a(b,c,d,e,f,g){
'use strict';

f.exports=c("focusNode");}),null);

/** shared/node_modules/fbjs/lib/getActiveElement.js */




__d("fbjs/lib/getActiveElement",["getActiveElement"],(function a(b,c,d,e,f,g){
'use strict';

f.exports=c("getActiveElement");}),null);

/** shared/node_modules/fbjs/lib/getUnboundedScrollPosition.js */




__d("fbjs/lib/getUnboundedScrollPosition",["getUnboundedScrollPosition"],(function a(b,c,d,e,f,g){
'use strict';

f.exports=c("getUnboundedScrollPosition");}),null);

/** shared/core/hyphenateStyleName.js */





__d('hyphenateStyleName',['hyphenate'],(function a(b,c,d,e,f,g){

'use strict';



var h=/^ms-/;

















function i(j){
return c('hyphenate')(j).replace(h,'-ms-');}


f.exports=i;}),null);

/** shared/node_modules/fbjs/lib/hyphenateStyleName.js */




__d("fbjs/lib/hyphenateStyleName",["hyphenateStyleName"],(function a(b,c,d,e,f,g){
'use strict';

f.exports=c("hyphenateStyleName");}),null);

/** shared/node_modules/fbjs/lib/memoizeStringOnly.js */




__d("fbjs/lib/memoizeStringOnly",["memoizeStringOnly"],(function a(b,c,d,e,f,g){
'use strict';

f.exports=c("memoizeStringOnly");}),null);

/** shared/node_modules/fbjs/lib/performanceNow.js */




__d("fbjs/lib/performanceNow",["performanceNow"],(function a(b,c,d,e,f,g){
'use strict';

f.exports=c("performanceNow");}),null);

/** shared/core/shallowEqual.js */






__d('shallowEqual',[],(function a(b,c,d,e,f,g){



'use strict';

var h=Object.prototype.hasOwnProperty;





function i(k,l){

if(k===l){


return k!==0||l!==0||1/k===1/l;}else 


return k!==k&&l!==l;}








function j(k,l){
if(i(k,l))
return true;


if(typeof k!=='object'||k===null||
typeof l!=='object'||l===null)
return false;


var m=Object.keys(k),
n=Object.keys(l);

if(m.length!==n.length)
return false;



for(var o=0;o<m.length;o++)

if(!h.call(l,m[o])||
!i(k[m[o]],l[m[o]]))

return false;



return true;}


f.exports=j;}),null);

/** shared/node_modules/fbjs/lib/shallowEqual.js */




__d("fbjs/lib/shallowEqual",["shallowEqual"],(function a(b,c,d,e,f,g){
'use strict';

f.exports=c("shallowEqual");}),null);

/** js/react-fb/ReactDOMInstrumentationFB.js */





__d('ReactDOMInstrumentationFB',['performanceAbsoluteNow','Env','LogBuffer','ProfilingCounters'],(function a(b,c,d,e,f,g){







var h=false,
i=[],
j=false,
k=false;

function l(p){
var q=p.type;
if(typeof q==='string')
return '<dom-node>';



var r='<compressed-name>';
return q.displayName||r||'<unknown>';}


function m(){
if(!h){
h=true;
i.forEach(function(p){
n(p);});}}




function n(p){
var q=p.render;

function r(s,t,u){
var v=null,
w=null;

if(j)
v=c('performanceAbsoluteNow')();


if(k)
w=c('ProfilingCounters').startTiming('REACT_RENDER_TIME');


var x=q.call(this,s,t,u);

if(w!=null)
c('ProfilingCounters').stopTiming(w);


if(j){
var y=c('performanceAbsoluteNow')(),
z=l(s);
c('LogBuffer').write('react_speed',{name:z,begin:v,end:y});}


return x;}



Object.assign(p,
{render:r,
enableRenderMeasurements:function s(){
j=true;
m();}});}




if(c('Env').timeslice_categories&&c('Env').timeslice_categories.react_render){
k=true;
m();}


var o=
{patchedReactDOM:function p(q){
if(i.indexOf(q)===-1){


i.push(q);
if(h)
n(q);}


return q;}};



f.exports=o;}),null);

/** js/react-fb/ReactFiberErrorDialog.js */









__d('ReactFiberErrorDialog',['Bootloader','CurrentUser','React','ReactFiberErrorLoggerConfig','SiteData'],(function a(b,c,d,e,f,g){

'use strict';







var h=false;

function i(n){

if(!h&&
c('CurrentUser').isEmployee()){

h=true;

c('Bootloader').loadModules
(["LogHistory","SimpleXUIDialog","XUIButton.react","XUIDialogButton.react"],






function(o,
p,
q,
r){

var s=c('SiteData').push_phase==='dev',
t=n.error,u=n.errorBoundary,


v=o.getInstance('react_fiber_error_logger');
v.error
('capturedError',
JSON.stringify
({componentStack:n.componentStack,
error:
{name:t.name,
message:t.message,
stack:t.stack},

errorBoundaryName:n.errorBoundaryName,
willRetry:n.willRetry}));




if(u&&
u.hideErrorDialogIUnderstandThisWillMakeBugsHarderToFindAndFix)

return;


var w=
c('React').createElement(k,
{capturedError:n,
isDevSandbox:s}),








x=
c('ReactFiberErrorLoggerConfig').bugNubClickTargetClassName,
y=x?
document.getElementsByClassName(x):
null,

z=void 0;

if(y!==null&&
y.length>1){

z=
c('React').createElement(q,
{rel:'dialog',
use:'confirm',
label:'Report Error',
onClick:function ba(){



y[y.length-1].click();}});}else 



z=
c('React').createElement(r,
{action:'button',
ajaxify:'/ajax/bugs/employee_report?source=bug_nub',
rel:'dialog',
use:'confirm',
label:'Report Error'});



var aa=
c('React').createElement('div',null,
c('React').createElement(r,
{action:'cancel',
label:'Dismiss',
use:'default'}),

z);


p.showEx
(w,
'[fb-only] Uncaught JavaScript Error',
aa,
function ba(){
h=false;},

{width:900});},

'ReactFiberErrorDialog');}



return true;}

g.showErrorDialog=i;

var j=
{color:'#fa3e3e',
fontSize:'0.75em',
lineHeight:'normal',
maxHeight:300,
overflow:'auto',
whiteSpace:'pre-wrap',
wordWrap:'break-word'};


function k(n){

var o=

n.capturedError,p=n.isDevSandbox,

q=

o.componentStack,r=o.error,

s=m(r),
t=q.replace(/^\n/,''),

u=void 0;
if(p){
u=
c('React').createElement('p',null,'An error occurred in one of the components on this page.');}else 

u=
c('React').createElement('p',null,'An error occurred in one of the components on this page. You can help improve the quality of Facebook by reporting this bug. When reporting, please take a moment to explain what you were doing when the bug happened.');







var v=void 0;

v=
c('React').createElement('p',null,'For a more detailed component stack, use your sandbox or reload this page with ',

c('React').createElement('a',
{href:l(),
target:'_blank'},'?js_debug=1&__DEV__=1'),'.');







return (c('React').createElement('div',null,
u,
c('React').createElement('h1',null,'Call Stack'),
c('React').createElement('pre',{style:j},s),
c('React').createElement('h1',null,'Component Stack'),
c('React').createElement('pre',{style:j},t),
v));}




function l(){var n=
window.location,o=n.href,p=n.search;
return ''+o+(p?'&':'?')+'js_debug=1&__DEV__=1';}



function m(n){

var o=


n.message,p=n.name,q=n.stack,

r=o?
p+': '+o:
p,





s=q.slice(0,r.length)===r?
q.slice(r.length):
q;
s=s.
trim().
split('\n').
map(function(t){return '\n    '+t.trim();}).
join();

return ''+r+s;}}),
null);

/** js/react-fb/ReactDOM.js */





__d('ReactDOM',['ReactDOM-fb','ReactDOMFeatureFlags','ReactDOMInstrumentationFB','ReactFiberErrorDialog'],(function a(b,c,d,e,f,g){var h=










c('ReactDOM-fb').__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,i=h.DOMProperty,j=h.ReactFiberErrorLogger;
i.injection.injectDOMPropertyConfig
({Properties:
{ajaxify:i.injection.MUST_USE_ATTRIBUTE}});


if(c('ReactDOMFeatureFlags').useFiber)
j.injection.injectDialog
(c('ReactFiberErrorDialog').showErrorDialog);



f.exports=c('ReactDOMInstrumentationFB').patchedReactDOM(c('ReactDOM-fb'));}),null);

/** js/ui/layer/behaviors/LayerButtons.js */





__d('LayerButtons',['csx','Button','Event','Parent'],(function a(b,c,d,e,f,g,h){








function i(j){'use strict';
this._layer=j;}
i.prototype.

enable=function(){'use strict';
this._listener=c('Event').listen
(this._layer.getRoot(),
'click',
this._handle.bind(this));};

i.prototype.

disable=function(){'use strict';
this._listener.remove();
this._listener=null;};
i.prototype.

_handle=function(j){'use strict';
var k=j.getTarget(),
l=c('Parent').byClass(k,'layerHide');
if(l){
this._layer.hide();
return;}


var m=c('Parent').byClass(k,'layerConfirm');
if(m){
if(this._isButton(m)&&!c('Button').isEnabled(m))
return;

if(this._isInNestedLayer(m))
return;

if(this._layer.inform('confirm',m)===false)
j.prevent();

return;}


var n=c('Parent').byClass(k,'layerCancel');
if(n){
if(this._isButton(n)&&!c('Button').isEnabled(n))
return;

if(this._isInNestedLayer(n))
return;

if(this._layer.inform('cancel',n)!==false)

this._layer.hide();

j.prevent();
return;}


var o=c('Parent').byClass(k,'layerButton');
if(o){
if(this._isButton(o)&&!c('Button').isEnabled(o))
return;

if(this._isInNestedLayer(o))
return;

if(this._layer.inform('button',o)===false)
j.prevent();}};


i.prototype.

_isInNestedLayer=function(j){'use strict';
var k=c('Parent').byClass(j,'uiLayer'),
l=this._layer.getRoot();

return !!(k&&
l!==k);};

i.prototype.

_isButton=function(j){'use strict';

return !!(c('Parent').byClass(j,'uiButton')||
c('Parent').bySelector(j,"._42ft"));};




i.prototype._listener=null;

f.exports=i;}),null);

/** js/ui/layer/contextual_dialog/behaviors/ContextualDialogXUITheme.js */




__d('ContextualDialogXUITheme',['cx'],(function a(b,c,d,e,f,g,h){



var i=
{wrapperClassName:"_53ii",
arrowDimensions:
{offset:12,
length:16}};



f.exports=i;}),null);

/** shared/banzai/BanzaiODS.js */





__d('BanzaiODS',['invariant','Banzai'],(function a(b,c,d,e,f,g,h){



















function i(){
var k={},
l={};












function m(n,o,p,q){










if(p===undefined)p=1;
if(q===undefined)q=1;

if(n in l)
if(l[n]<=0){
return;}else 


p/=l[n];




var r=k[n]||(k[n]={}),
s=r[o]||(r[o]=[0]);




p=Number(p);
q=Number(q);


if(!isFinite(p)||!isFinite(q))








return;



s[0]+=p;


if(arguments.length>=4){
if(!s[1])s[1]=0;
s[1]+=q;}}









return {setEntitySample:function n(o,p){



l[o]=Math.random()<p?p:0;},





bumpEntityKey:function n(o,p,q){
m(o,p,q);},






bumpFraction:function n(o,
p,
q,
r){
m(o,p,q,r);},


flush:function n(o){
for(var p in k)
c('Banzai').post('ods:'+p,k[p],o);

k={};}};}




var j=i();
j.create=i;


c('Banzai').subscribe(c('Banzai').SEND,j.flush.bind(j,null));

f.exports=j;}),null);

/** shared/core/cancelAnimationFramePolyfill.js */




__d("cancelAnimationFramePolyfill",[],(function a(b,c,d,e,f,g){





var h=

b.cancelAnimationFrame&&
b.cancelAnimationFrame.nativeBackup||

b.cancelAnimationFrame||
b.webkitCancelAnimationFrame||
b.mozCancelAnimationFrame||
b.oCancelAnimationFrame||
b.msCancelAnimationFrame||
b.clearTimeout;

f.exports=h;}),null);

/** shared/core_components/InlineBlock/InlineBlock.react.js */





__d('InlineBlock.react',['cx','React','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,






k=c('React').PropTypes,



l=
{baseline:null,
bottom:"_6d",
middle:"_6b",
top:"_6e"};i=babelHelpers.inherits


(m,c('React').Component);j=i&&i.prototype;m.prototype.



















render=function(){'use strict';var n=
this.props,o=n.alignv,p=n.height,q=n.fullWidth,r=babelHelpers.objectWithoutProperties(n,['alignv','height','fullWidth']),
s=l[o],
t="_6a"+

(q?' '+"_5u5j":''),


u=c('joinClasses')(t,s);
if(p!=null){
var v=
c('React').createElement('div',
{className:c('joinClasses')("_6a",s),
style:{height:p+'px'}});



return (c('React').createElement('div',babelHelpers['extends']({},
r,
{className:c('joinClasses')(this.props.className,t),
height:null}),
v,
c('React').createElement('div',{className:u},
this.props.children)));}else 





return (c('React').createElement('div',babelHelpers['extends']({},
r,
{className:c('joinClasses')(this.props.className,u)}),
this.props.children));};



function m(){'use strict';i.apply(this,arguments);}m.propTypes={alignv:k.oneOf(['baseline','bottom','middle','top']),height:k.number,fullWidth:k.bool};m.defaultProps={alignv:'baseline',fullWidth:false};


f.exports=m;}),null);

/** shared/haste/xuiglyph.js */





__d('xuiglyph',[],(function a(b,c,d,e,f,g){









f.exports=function h
(i){

throw new Error('xuiglyph: Unexpected xuiglyph call.');};}),
null);

/** shared/page/cancelAnimationFrame.js */




__d('cancelAnimationFrame',['TimerStorage','TimeSliceRefCountingWrapper','cancelAnimationFramePolyfill'],(function a(b,c,d,e,f,g){






var h=c('TimerStorage').ANIMATION_FRAME;

f.exports=function(){for(var i=arguments.length,j=Array(i),k=0;k<i;k++)j[k]=arguments[k];
c('TimerStorage').unset(h,j[0]);
var l=h+j[0];
if(j[0]!=null&&c('TimeSliceRefCountingWrapper').isValidCancellationToken(l))
c('TimeSliceRefCountingWrapper').cancelTimeSlice(l);


return Function.prototype.apply.call(c('cancelAnimationFramePolyfill'),

b,
j);};}),

null);

/** shared/page/replaceNativeTimer.js */





__d('replaceNativeTimer',['clearInterval','clearTimeout','setInterval','setTimeout','requestAnimationFrame','cancelAnimationFrame'],(function a(b,c,d,e,f,g){














c('setTimeout').nativeBackup=b.setTimeout;
c('clearTimeout').nativeBackup=b.clearTimeout;
c('setInterval').nativeBackup=b.setInterval;
c('clearInterval').nativeBackup=b.clearInterval;
c('requestAnimationFrame').nativeBackup=b.requestAnimationFrame;
c('cancelAnimationFrame').nativeBackup=b.cancelAnimationFrame;


b.setTimeout=c('setTimeout');
b.clearTimeout=c('clearTimeout');
b.setInterval=c('setInterval');
b.clearInterval=c('clearInterval');
b.requestAnimationFrame=c('requestAnimationFrame');}),null);

/** shared/react_contrib/shallowCompare.js */









__d('shallowCompare',['fbjs/lib/shallowEqual'],(function a(b,c,d,e,f,g){

'use strict';








function h(i,j,k){
return !c('fbjs/lib/shallowEqual')(i.props,j)||
!c('fbjs/lib/shallowEqual')(i.state,k);}


f.exports=h;}),null);

/** shared/unicode/UnicodeUtils.js */





__d('UnicodeUtils',['invariant'],(function a(b,c,d,e,f,g,h){












'use strict';





var i=55296,
j=56319,
k=56320,
l=57343,
m=/[\uD800-\uDFFF]/;





function n(w){
return i<=w&&w<=l;}











function o(w,x){

0<=x&&x<w.length||h(0,
'isSurrogatePair: Invalid index %s for string length %s.',
x,
w.length);

if(x+1===w.length)
return false;

var y=w.charCodeAt(x),
z=w.charCodeAt(x+1);

return (i<=y&&y<=j&&
k<=z&&z<=l);}







function p(w){
return m.test(w);}




















function q(w,x){
return 1+n(w.charCodeAt(x));}








function r(w){

if(!p(w))
return w.length;


var x=0;
for(var y=0;y<w.length;y+=q(w,y))
x++;

return x;}











function s(w,x,y){
x=x||0;
y=y===undefined?Infinity:y||0;


if(!p(w))
return w.substr(x,y);



var z=w.length;
if(z<=0||x>z||y<=0)
return '';



var aa=0;
if(x>0){
for(;x>0&&aa<z;x--)
aa+=q(w,aa);

if(aa>=z)
return '';}else

if(x<0){
for(aa=z;x<0&&0<aa;x++)
aa-=q(w,aa-1);

if(aa<0)
aa=0;}




var ba=z;
if(y<z)
for(ba=aa;y>0&&ba<z;y--)
ba+=q(w,ba);



return w.substring(aa,ba);}











function t(w,x,y){
x=x||0;
y=y===undefined?Infinity:y||0;

if(x<0)
x=0;

if(y<0)
y=0;


var z=Math.abs(y-x);
x=x<y?x:y;
return s(w,x,z);}








function u(w){
var x=[];
for(var y=0;y<w.length;y+=q(w,y))
x.push(w.codePointAt(y));

return x;}


var v=
{getCodePoints:u,
getUTF16Length:q,
hasSurrogateUnit:p,
isCodeUnitInSurrogateRange:n,
isSurrogatePair:o,
strlen:r,
substring:t,
substr:s};


f.exports=v;}),null);

/** shared/utils/DataAttributeUtils.js */




__d('DataAttributeUtils',['DataStore','Parent'],(function a(b,c,d,e,f,g){




var h=[],













i=
{LEGACY_CLICK_TRACKING_ATTRIBUTE:'data-ft',
CLICK_TRACKING_DATASTORE_KEY:'data-ft',
ENABLE_STORE_CLICK_TRACKING:'data-fte',
IMPRESSION_TRACKING_CONFIG_ATTRIBUTE:'data-xt-vimp',
IMPRESSION_TRACKING_CONFIG_DATASTORE_KEY:'data-xt-vimp',
REMOVE_LEGACY_TRACKING:'data-ftr',

getDataAttribute:function l(m,n){
if(j[n])
return j[n](m);


return m.getAttribute(n);},


setDataAttribute:function l(m,n,o){
if(k[n])
return k[n](m,o);


return m.setAttribute(n,o);},


getDataFt:function l(m){


if(m.getAttribute(i.ENABLE_STORE_CLICK_TRACKING)){
var n=c('DataStore').get
(m,i.CLICK_TRACKING_DATASTORE_KEY);
if(!n)
n=i.moveClickTrackingToDataStore
(m,
m.getAttribute(i.REMOVE_LEGACY_TRACKING));

return n;}


return m.getAttribute
(i.LEGACY_CLICK_TRACKING_ATTRIBUTE);},


setDataFt:function l(m,n){


if(m.getAttribute(i.ENABLE_STORE_CLICK_TRACKING)){
c('DataStore').set
(m,i.CLICK_TRACKING_DATASTORE_KEY,n);
return;}


m.setAttribute
(i.LEGACY_CLICK_TRACKING_ATTRIBUTE,n);},








moveXTVimp:function l(m){
i.moveAttributeToDataStore
(m,
i.IMPRESSION_TRACKING_CONFIG_ATTRIBUTE,
i.IMPRESSION_TRACKING_CONFIG_DATASTORE_KEY);


h.push(m.id);},





getXTrackableElements:function l(){
var m=h.
map(function(p){return document.getElementById(p);}).

filter(function(p){return !!p;}),



n=document.querySelectorAll
('[data-xt-vimp]');


for(var o=0;o<n.length;o++)
m.push(n[o]);


return m;},


getDataAttributeGeneric:function l(m,n,o){
var p=c('DataStore').get(m,o);
return p!==undefined?p:m.getAttribute(n);},



moveAttributeToDataStore:function l(m,n,o){
var p=m.getAttribute(n);
if(p){


c('DataStore').set(m,o,p);
m.removeAttribute(n);}},



moveClickTrackingToDataStore:function l(m,n){
var o=m.getAttribute
(i.LEGACY_CLICK_TRACKING_ATTRIBUTE);
if(o){
c('DataStore').set
(m,i.CLICK_TRACKING_DATASTORE_KEY,o);
if(n)
m.removeAttribute
(i.LEGACY_CLICK_TRACKING_ATTRIBUTE);}


return o;},


getClickTrackingParent:function l(m){


var n=c('Parent').byAttribute
(m,i.LEGACY_CLICK_TRACKING_ATTRIBUTE)||
c('Parent').byAttribute
(m,i.ENABLE_STORE_CLICK_TRACKING);
return n;},


getClickTrackingElements:function l(m){
return m.querySelectorAll
('['+i.LEGACY_CLICK_TRACKING_ATTRIBUTE+'], '+
'['+i.ENABLE_STORE_CLICK_TRACKING+']');},


getParentByAttributeOrDataStoreKey:function l(m,n,o){

while(m&&
(!m.getAttribute||!m.getAttribute(n))&&
c('DataStore').get(m,o)===undefined)

m=m.parentNode;

return m;}},



j=
{'data-ft':i.getDataFt,
'data-xt-vimp':function l(m){
return i.getDataAttributeGeneric
(m,
'data-xt-vimp',
'data-xt-vimp');},


'data-ad':function l(m){
return i.getDataAttributeGeneric
(m,
'data-ad',
'data-ad');},


'data-xt':function l(m){
return i.getDataAttributeGeneric
(m,
'data-xt',
'data-xt');}},




k=
{'data-ft':i.setDataFt,
'data-xt':function l(m,n){
c('DataStore').set(m,'data-xt',n);}};









f.exports=i;}),null);
