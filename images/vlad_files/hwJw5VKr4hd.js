if (self.CavalryLogger) { CavalryLogger.start_js(["Nq4PI"]); }

/** __static_js_modules__/sharemodeconst.js */




__d("ShareModeConst",[],(function a(b,c,d,e,f,g){

f.exports={SELF_PAGE:"selfpage",PAGE:"page",SELF_POST:"self",FRIEND:"friend",GROUP:"group",ALBUM:"album",MESSAGE:"message",ONE_CLICK:"oneclick",EVENT:"event",UNKNOWN:"unknown",OWN_POST:"own"};}),

null);

/** js/components/core/XUI/Card/XUIBlock.js */




__d('XUIBlock',['cx','React'],(function a(b,c,d,e,f,g,h){




var i=c('React').PropTypes,

j=
{propTypes:
{background:i.oneOf
(['base-wash',
'light-wash',
'white',
'highlight',
'transparent'])},



getDefaultProps:function k(){

return {background:'transparent'};},



getBackgroundClass:function k(l){
var m=
(l.background==='base-wash'?"_4-u5":'')+
(l.background==='light-wash'?' '+"_57d8":'')+
(l.background==='white'?' '+"_4-u8":'')+
(l.background==='highlight'?' '+"_4-u7":'');

return m;}};



f.exports=j;}),null);

/** js/components/core/XUI/Notice/XUINotice.react.js */






__d('XUINotice.react',['ix','cx','fbt','Image.react','React','XUICloseButton.react','fbglyph','joinClasses'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';var k,l,












m=c('React').PropTypes,









n=
{notify:
{altText:j._(["Notice","72ccc0d04aee77c14707402ddd59a813"]),
className:null,
iconSrc:h("115129")},




success:
{altText:j._(["Success","75ec7656abf3ab3556f2e1abb750c06c"]),
className:"_3qh4",
iconSrc:h("114570")},




warn:
{altText:j._(["Warning","9aeff7880ff938306145318cbb3af5b7"]),
className:"_585o",
iconSrc:h("114555")},




recommend:
{altText:j._(["Recommend","b2ec18c7765a28087bb01457e88caedd"]),
className:"_1wpa",
iconSrc:h("114555")},




quiet:
{altText:j._(["Quiet","2e16f69de24acb4274c124cf1bcee0b5"]),
className:"_5d83",
iconSrc:h("115129")}};k=babelHelpers.inherits






(o,c('React').Component);l=k&&k.prototype;o.prototype.














render=function(){var p=

this.props,q=p.children,r=p.className,s=p.onDismiss,t=p.use,u=babelHelpers.objectWithoutProperties(p,['children','className','onDismiss','use']),
v=n[t];

r=c('joinClasses')("_585n",v.className,r);

var w=null;
if(s)
w=
c('React').createElement(c('XUICloseButton.react'),
{className:"_585q",
href:'#',
onClick:s});



var x="_585r"+

(s?' '+"_2i-a":'')+
(this.props.size==='medium'?' '+"_50f4":'')+
(this.props.size==='small'?' '+"_50f3":'');



return (c('React').createElement('div',babelHelpers['extends']({},u,{className:r}),
c('React').createElement(c('Image.react'),
{alt:v.altText,
className:"_585p",
src:v.iconSrc}),

w,
c('React').createElement('div',{className:x},
q)));};



function o(){k.apply(this,arguments);}o.propTypes={onDismiss:m.func,use:m.oneOf(Object.keys(n)).isRequired,size:m.oneOf(['medium','small']).isRequired};o.defaultProps={use:'notify',size:'medium'};


f.exports=o;}),null);

/** shared/crisis/mixins/StoreBasedStateMixinHelper.js */






__d('StoreBasedStateMixinHelper',['invariant','SubscriptionsHandler'],(function a(b,c,d,e,f,g,h){

'use strict';












function i(j){
this.$StoreBasedStateMixinHelper_stores=j;
this.$StoreBasedStateMixinHelper_subscriptions=new (c('SubscriptionsHandler'))();}
i.prototype.




subscribeCallback=function(j){
var k=this.$StoreBasedStateMixinHelper_stores.map(function(l){
if(l.hasChanged&&l.getDispatchToken&&l.addListener){

return l.addListener(j);}else
if(l.subscribe){

return l.subscribe('change',j);}else
if(l.addListener){

return l.addListener('change',j);}else 


h(0,
'Store must expose the API of FluxStore, Arbiter or EventEmitter');});



if(this.$StoreBasedStateMixinHelper_stores.length>0)
this.$StoreBasedStateMixinHelper_subscriptions.addSubscriptions.apply(this.$StoreBasedStateMixinHelper_subscriptions,k);};

i.prototype.

release=function(){
this.$StoreBasedStateMixinHelper_subscriptions.release();};



f.exports=i;}),null);

/** shared/datatransfer/PhotosMimeType.js */




__d('PhotosMimeType',[],(function a(b,c,d,e,f,g){
var h=
{isImage:function j(k){
return i(k)[0]==='image';},


isJpeg:function j(k){
var l=i(k);

return (h.isImage(k)&&

(l[1]==='jpeg'||l[1]==='pjpeg'));}};




function i(j){
return j.split('/');}


f.exports=h;}),null);

/** shared/datatransfer/DataTransfer.js */





__d('DataTransfer',['PhotosMimeType','createArrayFromMixed','emptyFunction'],(function a(b,c,d,e,f,g){






var h=new RegExp('\u000D\u000A','g'),
i='\u000A',

j=
{'text/rtf':1,
'text/html':1};








function k(m){
if(m.kind=='file')
return m.getAsFile();}







function l(m){'use strict';
this.data=m;


this.types=m.types?c('createArrayFromMixed')(m.types):[];}
l.prototype.






isRichText=function(){'use strict';




if(this.getHTML()&&this.getText())
return true;




if(this.isImage())
return false;


return this.types.some(function(m){return j[m];});};
l.prototype.






getText=function(){'use strict';
var m;
if(this.data.getData)
if(!this.types.length){
m=this.data.getData('Text');}else
if(this.types.indexOf('text/plain')!=-1)
m=this.data.getData('text/plain');


return m?m.replace(h,i):null;};
l.prototype.






getHTML=function(){'use strict';
if(this.data.getData)
if(!this.types.length){
return this.data.getData('Text');}else
if(this.types.indexOf('text/html')!=-1)
return this.data.getData('text/html');};


l.prototype.






isLink=function(){'use strict';
return this.types.some(function(m){
return m.indexOf('Url')!=-1||
m.indexOf('text/uri-list')!=-1||
m.indexOf('text/x-moz-url');});};

l.prototype.






getLink=function(){'use strict';
if(this.data.getData){
if(this.types.indexOf('text/x-moz-url')!=-1){
var m=this.data.getData('text/x-moz-url').split('\n');
return m[0];}

return this.types.indexOf('text/uri-list')!=-1?
this.data.getData('text/uri-list'):
this.data.getData('url');}


return null;};
l.prototype.






isImage=function(){'use strict';
var m=this.types.some(function(q){


return q.indexOf('application/x-moz-file')!=-1;});


if(m)
return true;


var n=this.getFiles();
for(var o=0;o<n.length;o++){
var p=n[o].type;
if(!c('PhotosMimeType').isImage(p))
return false;}



return true;};
l.prototype.

getCount=function(){'use strict';
if(Object.prototype.hasOwnProperty.call(this.data,'items')){
return this.data.items.length;}else
if(Object.prototype.hasOwnProperty.call(this.data,'mozItemCount')){
return this.data.mozItemCount;}else
if(this.data.files)
return this.data.files.length;

return null;};
l.prototype.






getFiles=function(){'use strict';
if(this.data.items){

return Array.prototype.slice.call(this.data.items).
map(k).
filter(c('emptyFunction').thatReturnsArgument);}else
if(this.data.files){
return Array.prototype.slice.call(this.data.files);}else 

return [];};

l.prototype.






hasFiles=function(){'use strict';
return this.getFiles().length>0;};



f.exports=l;}),null);

/** shared_core/immutable/dist/immutable.js */











__d("immutable",[],(function a(b,c,d,e,f,g){
(function(h,i){
typeof g==='object'&&typeof f!=='undefined'?f.exports=i():
typeof define==='function'&&define.amd?define(i):
h.Immutable=i();}
(this,function(){'use strict';var h=Array.prototype.slice;

function i(yh,zh){
if(zh)
yh.prototype=Object.create(zh.prototype);

yh.prototype.constructor=yh;}



var j='delete',


k=5,
l=1<<k,
m=l-1,



n={},


o={value:false},
p={value:false};

function q(yh){
yh.value=false;
return yh;}


function r(yh){
yh&&(yh.value=true);}





function s(){}


function t(yh,zh){
zh=zh||0;
var ai=Math.max(0,yh.length-zh),
bi=new Array(ai);
for(var ci=0;ci<ai;ci++)
bi[ci]=yh[ci+zh];

return bi;}


function u(yh){
if(yh.size===undefined)
yh.size=yh.__iterate(w);

return yh.size;}


function v(yh,zh){
return zh>=0?(+zh):u(yh)+(+zh);}


function w(){
return true;}


function x(yh,zh,ai){
return (yh===0||(ai!==undefined&&yh<=-ai))&&
(zh===undefined||(ai!==undefined&&zh>=ai));}


function y(yh,zh){
return aa(yh,zh,0);}


function z(yh,zh){
return aa(yh,zh,zh);}


function aa(yh,zh,ai){
return yh===undefined?
ai:
yh<0?
Math.max(0,zh+yh):
zh===undefined?
yh:
Math.min(zh,yh);}


function ba(yh){
return fa(yh)?yh:cb(yh);}



i(ca,ba);
function ca(yh){
return ga(yh)?yh:db(yh);}



i(da,ba);
function da(yh){
return ha(yh)?yh:eb(yh);}



i(ea,ba);
function ea(yh){
return fa(yh)&&!ia(yh)?yh:fb(yh);}




function fa(yh){
return !!(yh&&yh[ka]);}


function ga(yh){
return !!(yh&&yh[la]);}


function ha(yh){
return !!(yh&&yh[ma]);}


function ia(yh){
return ga(yh)||ha(yh);}


function ja(yh){
return !!(yh&&yh[na]);}


ba.isIterable=fa;
ba.isKeyed=ga;
ba.isIndexed=ha;
ba.isAssociative=ia;
ba.isOrdered=ja;

ba.Keyed=ca;
ba.Indexed=da;
ba.Set=ea;


var ka='@@__IMMUTABLE_ITERABLE__@@',
la='@@__IMMUTABLE_KEYED__@@',
ma='@@__IMMUTABLE_INDEXED__@@',
na='@@__IMMUTABLE_ORDERED__@@',



oa=0,
pa=1,
qa=2,

ra=typeof Symbol==='function'&&Symbol.iterator,
sa='@@iterator',

ta=ra||sa;


function ua(yh){
this.next=yh;}


ua.prototype.toString=function(){
return '[Iterator]';};



ua.KEYS=oa;
ua.VALUES=pa;
ua.ENTRIES=qa;

ua.prototype.inspect=
ua.prototype.toSource=function(){return this.toString();};
ua.prototype[ta]=function(){
return this;};



function va(yh,zh,ai,bi){
var ci=yh===0?zh:yh===1?ai:[zh,ai];
bi?(bi.value=ci):(bi=
{value:ci,done:false});

return bi;}


function wa(){
return {value:undefined,done:true};}


function xa(yh){
return !!ab(yh);}


function ya(yh){
return yh&&typeof yh.next==='function';}


function za(yh){
var zh=ab(yh);
return zh&&zh.call(yh);}


function ab(yh){
var zh=yh&&
((ra&&yh[ra])||
yh[sa]);

if(typeof zh==='function')
return zh;}



function bb(yh){
return yh&&typeof yh.length==='number';}


i(cb,ba);
function cb(yh){
return yh===null||yh===undefined?nb():
fa(yh)?yh.toSeq():qb(yh);}


cb.of=function(){
return cb(arguments);};


cb.prototype.toSeq=function(){
return this;};


cb.prototype.toString=function(){
return this.__toString('Seq {','}');};


cb.prototype.cacheResult=function(){
if(!this._cache&&this.__iterateUncached){
this._cache=this.entrySeq().toArray();
this.size=this._cache.length;}

return this;};




cb.prototype.__iterate=function(yh,zh){
return sb(this,yh,zh,true);};




cb.prototype.__iterator=function(yh,zh){
return tb(this,yh,zh,true);};




i(db,cb);
function db(yh){
return yh===null||yh===undefined?
nb().toKeyedSeq():
fa(yh)?
(ga(yh)?yh.toSeq():yh.fromEntrySeq()):
ob(yh);}


db.prototype.toKeyedSeq=function(){
return this;};




i(eb,cb);
function eb(yh){
return yh===null||yh===undefined?nb():
!fa(yh)?pb(yh):
ga(yh)?yh.entrySeq():yh.toIndexedSeq();}


eb.of=function(){
return eb(arguments);};


eb.prototype.toIndexedSeq=function(){
return this;};


eb.prototype.toString=function(){
return this.__toString('Seq [',']');};


eb.prototype.__iterate=function(yh,zh){
return sb(this,yh,zh,false);};


eb.prototype.__iterator=function(yh,zh){
return tb(this,yh,zh,false);};




i(fb,cb);
function fb(yh){

return (yh===null||yh===undefined?nb():
!fa(yh)?pb(yh):
ga(yh)?yh.entrySeq():yh).
toSetSeq();}


fb.of=function(){
return fb(arguments);};


fb.prototype.toSetSeq=function(){
return this;};




cb.isSeq=lb;
cb.Keyed=db;
cb.Set=fb;
cb.Indexed=eb;

var gb='@@__IMMUTABLE_SEQ__@@';

cb.prototype[gb]=true;





i(hb,eb);
function hb(yh){
this._array=yh;
this.size=yh.length;}


hb.prototype.get=function(yh,zh){
return this.has(yh)?this._array[v(this,yh)]:zh;};


hb.prototype.__iterate=function(yh,zh){
var ai=this._array,
bi=ai.length-1;
for(var ci=0;ci<=bi;ci++)
if(yh(ai[zh?bi-ci:ci],ci,this)===false)
return ci+1;


return ci;};


hb.prototype.__iterator=function(yh,zh){
var ai=this._array,
bi=ai.length-1,
ci=0;
return new ua(function(){
return ci>bi?
wa():
va(yh,ci,ai[zh?bi-ci++:ci++]);});};





i(ib,db);
function ib(yh){
var zh=Object.keys(yh);
this._object=yh;
this._keys=zh;
this.size=zh.length;}


ib.prototype.get=function(yh,zh){
if(zh!==undefined&&!this.has(yh))
return zh;

return this._object[yh];};


ib.prototype.has=function(yh){
return this._object.hasOwnProperty(yh);};


ib.prototype.__iterate=function(yh,zh){
var ai=this._object,
bi=this._keys,
ci=bi.length-1;
for(var di=0;di<=ci;di++){
var ei=bi[zh?ci-di:di];
if(yh(ai[ei],ei,this)===false)
return di+1;}


return di;};


ib.prototype.__iterator=function(yh,zh){
var ai=this._object,
bi=this._keys,
ci=bi.length-1,
di=0;
return new ua(function(){
var ei=bi[zh?ci-di:di];
return di++>ci?
wa():
va(yh,ei,ai[ei]);});};



ib.prototype[na]=true;


i(jb,eb);
function jb(yh){
this._iterable=yh;
this.size=yh.length||yh.size;}


jb.prototype.__iterateUncached=function(yh,zh){
if(zh)
return this.cacheResult().__iterate(yh,zh);

var ai=this._iterable,
bi=za(ai),
ci=0;
if(ya(bi)){
var di;
while(!(di=bi.next()).done)
if(yh(di.value,ci++,this)===false)
break;}



return ci;};


jb.prototype.__iteratorUncached=function(yh,zh){
if(zh)
return this.cacheResult().__iterator(yh,zh);

var ai=this._iterable,
bi=za(ai);
if(!ya(bi))
return new ua(wa);

var ci=0;
return new ua(function(){
var di=bi.next();
return di.done?di:va(yh,ci++,di.value);});};





i(kb,eb);
function kb(yh){
this._iterator=yh;
this._iteratorCache=[];}


kb.prototype.__iterateUncached=function(yh,zh){
if(zh)
return this.cacheResult().__iterate(yh,zh);

var ai=this._iterator,
bi=this._iteratorCache,
ci=0;
while(ci<bi.length)
if(yh(bi[ci],ci++,this)===false)
return ci;


var di;
while(!(di=ai.next()).done){
var ei=di.value;
bi[ci]=ei;
if(yh(ei,ci++,this)===false)
break;}


return ci;};


kb.prototype.__iteratorUncached=function(yh,zh){
if(zh)
return this.cacheResult().__iterator(yh,zh);

var ai=this._iterator,
bi=this._iteratorCache,
ci=0;
return new ua(function(){
if(ci>=bi.length){
var di=ai.next();
if(di.done)
return di;

bi[ci]=di.value;}

return va(yh,ci,bi[ci++]);});};








function lb(yh){
return !!(yh&&yh[gb]);}


var mb;

function nb(){
return mb||(mb=new hb([]));}


function ob(yh){
var zh=
Array.isArray(yh)?new hb(yh).fromEntrySeq():
ya(yh)?new kb(yh).fromEntrySeq():
xa(yh)?new jb(yh).fromEntrySeq():
typeof yh==='object'?new ib(yh):
undefined;
if(!zh)
throw new TypeError
('Expected Array or iterable object of [k, v] entries, '+
'or keyed object: '+yh);


return zh;}


function pb(yh){
var zh=rb(yh);
if(!zh)
throw new TypeError
('Expected Array or iterable object of values: '+yh);


return zh;}


function qb(yh){
var zh=rb(yh)||
(typeof yh==='object'&&new ib(yh));
if(!zh)
throw new TypeError
('Expected Array or iterable object of values, or keyed object: '+yh);


return zh;}


function rb(yh){

return (bb(yh)?new hb(yh):
ya(yh)?new kb(yh):
xa(yh)?new jb(yh):
undefined);}



function sb(yh,zh,ai,bi){
var ci=yh._cache;
if(ci){
var di=ci.length-1;
for(var ei=0;ei<=di;ei++){
var fi=ci[ai?di-ei:ei];
if(zh(fi[1],bi?fi[0]:ei,yh)===false)
return ei+1;}


return ei;}

return yh.__iterateUncached(zh,ai);}


function tb(yh,zh,ai,bi){
var ci=yh._cache;
if(ci){
var di=ci.length-1,
ei=0;
return new ua(function(){
var fi=ci[ai?di-ei:ei];
return ei++>di?
wa():
va(zh,bi?fi[0]:ei-1,fi[1]);});}


return yh.__iteratorUncached(zh,ai);}


i(ub,ba);
function ub(){
throw TypeError('Abstract');}



i(vb,ub);function vb(){}

i(wb,ub);function wb(){}

i(xb,ub);function xb(){}


ub.Keyed=vb;
ub.Indexed=wb;
ub.Set=xb;























































function yb(yh,zh){
if(yh===zh||(yh!==yh&&zh!==zh))
return true;

if(!yh||!zh)
return false;

if(typeof yh.valueOf==='function'&&
typeof zh.valueOf==='function'){
yh=yh.valueOf();
zh=zh.valueOf();
if(yh===zh||(yh!==yh&&zh!==zh))
return true;

if(!yh||!zh)
return false;}


if(typeof yh.equals==='function'&&
typeof zh.equals==='function'&&
yh.equals(zh))
return true;

return false;}


function zb(yh,zh){
return zh?
ac(zh,yh,'',{'':yh}):
bc(yh);}


function ac(yh,zh,ai,bi){
if(Array.isArray(zh))
return yh.call(bi,ai,eb(zh).map(function(ci,di){return ac(yh,ci,di,zh);}));

if(cc(zh))
return yh.call(bi,ai,db(zh).map(function(ci,di){return ac(yh,ci,di,zh);}));

return zh;}


function bc(yh){
if(Array.isArray(yh))
return eb(yh).map(bc).toList();

if(cc(yh))
return db(yh).map(bc).toMap();

return yh;}


function cc(yh){
return yh&&(yh.constructor===Object||yh.constructor===undefined);}


var dc=
typeof Math.imul==='function'&&Math.imul(4294967295,2)===-2?
Math.imul:
function yh(zh,ai){
zh=zh|0;
ai=ai|0;
var bi=zh&65535,
ci=ai&65535;

return (bi*ci)+((((zh>>>16)*ci+bi*(ai>>>16))<<16)>>>0)|0;};






function ec(yh){
return ((yh>>>1)&1073741824)|(yh&3221225471);}


function fc(yh){
if(yh===false||yh===null||yh===undefined)
return 0;

if(typeof yh.valueOf==='function'){
yh=yh.valueOf();
if(yh===false||yh===null||yh===undefined)
return 0;}


if(yh===true)
return 1;

var zh=typeof yh;
if(zh==='number'){
var ai=yh|0;
if(ai!==yh)
ai^=yh*4294967295;

while(yh>4294967295){
yh/=4294967295;
ai^=yh;}

return ec(ai);}

if(zh==='string')
return yh.length>qc?gc(yh):hc(yh);

if(typeof yh.hashCode==='function')
return yh.hashCode();

return ic(yh);}


function gc(yh){
var zh=tc[yh];
if(zh===undefined){
zh=hc(yh);
if(sc===rc){
sc=0;
tc={};}

sc++;
tc[yh]=zh;}

return zh;}



function hc(yh){






var zh=0;
for(var ai=0;ai<yh.length;ai++)
zh=31*zh+yh.charCodeAt(ai)|0;

return ec(zh);}


function ic(yh){
var zh;
if(mc){
zh=nc.get(yh);
if(zh!==undefined)
return zh;}



zh=yh[pc];
if(zh!==undefined)
return zh;


if(!kc){
zh=yh.propertyIsEnumerable&&yh.propertyIsEnumerable[pc];
if(zh!==undefined)
return zh;


zh=lc(yh);
if(zh!==undefined)
return zh;}



zh=++oc;
if(oc&1073741824)
oc=0;


if(mc){
nc.set(yh,zh);}else
if(jc!==undefined&&jc(yh)===false){
throw new Error('Non-extensible objects are not allowed as keys.');}else
if(kc){
Object.defineProperty(yh,pc,
{enumerable:false,
configurable:false,
writable:false,
value:zh});}else

if(yh.propertyIsEnumerable!==undefined&&
yh.propertyIsEnumerable===yh.constructor.prototype.propertyIsEnumerable){




yh.propertyIsEnumerable=function(){
return this.constructor.prototype.propertyIsEnumerable.apply(this,arguments);};

yh.propertyIsEnumerable[pc]=zh;}else
if(yh.nodeType!==undefined){




yh[pc]=zh;}else 

throw new Error('Unable to set a non-enumerable property on object.');


return zh;}



var jc=Object.isExtensible,


kc=(function(){

try{Object.defineProperty({},'@',{});
return true;}catch(
yh){
return false;}}

());



function lc(yh){
if(yh&&yh.nodeType>0)
switch(yh.nodeType){
case 1:
return yh.uniqueID;
case 9:
return yh.documentElement&&yh.documentElement.uniqueID;}}





var mc=typeof WeakMap==='function',
nc;
if(mc)
nc=new WeakMap();


var oc=0,

pc='__immutablehash__';
if(typeof Symbol==='function')
pc=Symbol(pc);


var qc=16,
rc=255,
sc=0,
tc={};

function uc(yh,zh){
if(!yh)throw new Error(zh);}


function vc(yh){
uc
(yh!==Infinity,
'Cannot perform this action with an infinite size.');}



i(wc,db);
function wc(yh,zh){
this._iter=yh;
this._useKeys=zh;
this.size=yh.size;}


wc.prototype.get=function(yh,zh){
return this._iter.get(yh,zh);};


wc.prototype.has=function(yh){
return this._iter.has(yh);};


wc.prototype.valueSeq=function(){
return this._iter.valueSeq();};


wc.prototype.reverse=function(){var yh=this,
zh=cd(this,true);
if(!this._useKeys)
zh.valueSeq=function(){return yh._iter.toSeq().reverse();};

return zh;};


wc.prototype.map=function(yh,zh){var ai=this,
bi=bd(this,yh,zh);
if(!this._useKeys)
bi.valueSeq=function(){return ai._iter.toSeq().map(yh,zh);};

return bi;};


wc.prototype.__iterate=function(yh,zh){var ai=this,
bi;
return this._iter.__iterate
(this._useKeys?
function(ci,di){return yh(ci,di,ai);}:
((bi=zh?td(this):0),
function(ci){return yh(ci,zh?--bi:bi++,ai);}),
zh);};



wc.prototype.__iterator=function(yh,zh){
if(this._useKeys)
return this._iter.__iterator(yh,zh);

var ai=this._iter.__iterator(pa,zh),
bi=zh?td(this):0;
return new ua(function(){
var ci=ai.next();
return ci.done?ci:
va(yh,zh?--bi:bi++,ci.value,ci);});};



wc.prototype[na]=true;


i(xc,eb);
function xc(yh){
this._iter=yh;
this.size=yh.size;}


xc.prototype.includes=function(yh){
return this._iter.includes(yh);};


xc.prototype.__iterate=function(yh,zh){var ai=this,
bi=0;
return this._iter.__iterate(function(ci){return yh(ci,bi++,ai);},zh);};


xc.prototype.__iterator=function(yh,zh){
var ai=this._iter.__iterator(pa,zh),
bi=0;
return new ua(function(){
var ci=ai.next();
return ci.done?ci:
va(yh,bi++,ci.value,ci);});};





i(yc,fb);
function yc(yh){
this._iter=yh;
this.size=yh.size;}


yc.prototype.has=function(yh){
return this._iter.includes(yh);};


yc.prototype.__iterate=function(yh,zh){var ai=this;
return this._iter.__iterate(function(bi){return yh(bi,bi,ai);},zh);};


yc.prototype.__iterator=function(yh,zh){
var ai=this._iter.__iterator(pa,zh);
return new ua(function(){
var bi=ai.next();
return bi.done?bi:
va(yh,bi.value,bi.value,bi);});};





i(zc,db);
function zc(yh){
this._iter=yh;
this.size=yh.size;}


zc.prototype.entrySeq=function(){
return this._iter.toSeq();};


zc.prototype.__iterate=function(yh,zh){var ai=this;
return this._iter.__iterate(function(bi){


if(bi){
sd(bi);
var ci=fa(bi);
return yh
(ci?bi.get(1):bi[1],
ci?bi.get(0):bi[0],
ai);}},


zh);};


zc.prototype.__iterator=function(yh,zh){
var ai=this._iter.__iterator(pa,zh);
return new ua(function(){
while(true){
var bi=ai.next();
if(bi.done)
return bi;

var ci=bi.value;


if(ci){
sd(ci);
var di=fa(ci);
return va
(yh,
di?ci.get(0):ci[0],
di?ci.get(1):ci[1],
bi);}}});};







xc.prototype.cacheResult=
wc.prototype.cacheResult=
yc.prototype.cacheResult=
zc.prototype.cacheResult=
wd;


function ad(yh){
var zh=vd(yh);
zh._iter=yh;
zh.size=yh.size;
zh.flip=function(){return yh;};
zh.reverse=function(){
var ai=yh.reverse.apply(this);
ai.flip=function(){return yh.reverse();};
return ai;};

zh.has=function(ai){return yh.includes(ai);};
zh.includes=function(ai){return yh.has(ai);};
zh.cacheResult=wd;
zh.__iterateUncached=function(ai,bi){var ci=this;
return yh.__iterate(function(di,ei){return ai(ei,di,ci)!==false;},bi);};

zh.__iteratorUncached=function(ai,bi){
if(ai===qa){
var ci=yh.__iterator(ai,bi);
return new ua(function(){
var di=ci.next();
if(!di.done){
var ei=di.value[0];
di.value[0]=di.value[1];
di.value[1]=ei;}

return di;});}


return yh.__iterator
(ai===pa?oa:pa,
bi);};


return zh;}



function bd(yh,zh,ai){
var bi=vd(yh);
bi.size=yh.size;
bi.has=function(ci){return yh.has(ci);};
bi.get=function(ci,di){
var ei=yh.get(ci,n);
return ei===n?
di:
zh.call(ai,ei,ci,yh);};

bi.__iterateUncached=function(ci,di){var ei=this;
return yh.__iterate
(function(fi,gi,hi){return ci(zh.call(ai,fi,gi,hi),gi,ei)!==false;},
di);};


bi.__iteratorUncached=function(ci,di){
var ei=yh.__iterator(qa,di);
return new ua(function(){
var fi=ei.next();
if(fi.done)
return fi;

var gi=fi.value,
hi=gi[0];
return va
(ci,
hi,
zh.call(ai,gi[1],hi,yh),
fi);});};



return bi;}



function cd(yh,zh){
var ai=vd(yh);
ai._iter=yh;
ai.size=yh.size;
ai.reverse=function(){return yh;};
if(yh.flip)
ai.flip=function(){
var bi=ad(yh);
bi.reverse=function(){return yh.flip();};
return bi;};


ai.get=function(bi,ci){
return yh.get(zh?bi:-1-bi,ci);};
ai.has=function(bi){
return yh.has(zh?bi:-1-bi);};
ai.includes=function(bi){return yh.includes(bi);};
ai.cacheResult=wd;
ai.__iterate=function(bi,ci){var di=this;
return yh.__iterate(function(ei,fi){return bi(ei,fi,di);},!ci);};

ai.__iterator=
function(bi,ci){return yh.__iterator(bi,!ci);};
return ai;}



function dd(yh,zh,ai,bi){
var ci=vd(yh);
if(bi){
ci.has=function(di){
var ei=yh.get(di,n);
return ei!==n&&!!zh.call(ai,ei,di,yh);};

ci.get=function(di,ei){
var fi=yh.get(di,n);
return fi!==n&&zh.call(ai,fi,di,yh)?
fi:ei;};}


ci.__iterateUncached=function(di,ei){var fi=this,
gi=0;
yh.__iterate(function(hi,ii,ji){
if(zh.call(ai,hi,ii,ji)){
gi++;
return di(hi,bi?ii:gi-1,fi);}},

ei);
return gi;};

ci.__iteratorUncached=function(di,ei){
var fi=yh.__iterator(qa,ei),
gi=0;
return new ua(function(){
while(true){
var hi=fi.next();
if(hi.done)
return hi;

var ii=hi.value,
ji=ii[0],
ki=ii[1];
if(zh.call(ai,ki,ji,yh))
return va(di,bi?ji:gi++,ki,hi);}});};




return ci;}



function ed(yh,zh,ai){
var bi=zd().asMutable();
yh.__iterate(function(ci,di){
bi.update
(zh.call(ai,ci,di,yh),
0,
function(ei){return ei+1;});});


return bi.asImmutable();}



function fd(yh,zh,ai){
var bi=ga(yh),
ci=(ja(yh)?yf():zd()).asMutable();
yh.__iterate(function(ei,fi){
ci.update
(zh.call(ai,ei,fi,yh),
function(gi){return (gi=gi||[],gi.push(bi?[fi,ei]:ei),gi);});});


var di=ud(yh);
return ci.map(function(ei){return rd(yh,di(ei));});}



function gd(yh,zh,ai,bi){
var ci=yh.size;

if(x(zh,ai,ci))
return yh;


var di=y(zh,ci),
ei=z(ai,ci);




if(di!==di||ei!==ei)
return gd(yh.toSeq().cacheResult(),zh,ai,bi);






var fi=ei-di,
gi;
if(fi===fi)
gi=fi<0?0:fi;


var hi=vd(yh);

hi.size=gi;

if(!bi&&lb(yh)&&gi>=0)
hi.get=function(ii,ji){
ii=v(this,ii);
return ii>=0&&ii<gi?
yh.get(ii+di,ji):
ji;};



hi.__iterateUncached=function(ii,ji){var ki=this;
if(gi===0)
return 0;

if(ji)
return this.cacheResult().__iterate(ii,ji);

var li=0,
mi=true,
ni=0;
yh.__iterate(function(oi,pi){
if(!(mi&&(mi=li++<di))){
ni++;
return ii(oi,bi?pi:ni-1,ki)!==false&&
ni!==gi;}});


return ni;};


hi.__iteratorUncached=function(ii,ji){
if(gi!==0&&ji)
return this.cacheResult().__iterator(ii,ji);


var ki=gi!==0&&yh.__iterator(ii,ji),
li=0,
mi=0;
return new ua(function(){
while(li++<di)
ki.next();

if(++mi>gi)
return wa();

var ni=ki.next();
if(bi||ii===pa){
return ni;}else
if(ii===oa){
return va(ii,mi-1,undefined,ni);}else 

return va(ii,mi-1,ni.value[1],ni);});};




return hi;}



function hd(yh,zh,ai){
var bi=vd(yh);
bi.__iterateUncached=function(ci,di){var ei=this;
if(di)
return this.cacheResult().__iterate(ci,di);

var fi=0;
yh.__iterate(function(gi,hi,ii){
return zh.call(ai,gi,hi,ii)&&++fi&&ci(gi,hi,ei);});

return fi;};

bi.__iteratorUncached=function(ci,di){var ei=this;
if(di)
return this.cacheResult().__iterator(ci,di);

var fi=yh.__iterator(qa,di),
gi=true;
return new ua(function(){
if(!gi)
return wa();

var hi=fi.next();
if(hi.done)
return hi;

var ii=hi.value,
ji=ii[0],
ki=ii[1];
if(!zh.call(ai,ki,ji,ei)){
gi=false;
return wa();}

return ci===qa?hi:
va(ci,ji,ki,hi);});};


return bi;}



function id(yh,zh,ai,bi){
var ci=vd(yh);
ci.__iterateUncached=function(di,ei){var fi=this;
if(ei)
return this.cacheResult().__iterate(di,ei);

var gi=true,
hi=0;
yh.__iterate(function(ii,ji,ki){
if(!(gi&&(gi=zh.call(ai,ii,ji,ki)))){
hi++;
return di(ii,bi?ji:hi-1,fi);}});


return hi;};

ci.__iteratorUncached=function(di,ei){var fi=this;
if(ei)
return this.cacheResult().__iterator(di,ei);

var gi=yh.__iterator(qa,ei),
hi=true,
ii=0;
return new ua(function(){
var ji,ki,li;

do{ji=gi.next();
if(ji.done)
if(bi||di===pa){
return ji;}else
if(di===oa){
return va(di,ii++,undefined,ji);}else 

return va(di,ii++,ji.value[1],ji);


var mi=ji.value;
ki=mi[0];
li=mi[1];
hi&&(hi=zh.call(ai,li,ki,fi));}while(
hi);
return di===qa?ji:
va(di,ki,li,ji);});};


return ci;}



function jd(yh,zh){
var ai=ga(yh),
bi=[yh].concat(zh).map(function(ei){
if(!fa(ei)){
ei=ai?
ob(ei):
pb(Array.isArray(ei)?ei:[ei]);}else
if(ai)
ei=ca(ei);

return ei;}).
filter(function(ei){return ei.size!==0;});

if(bi.length===0)
return yh;


if(bi.length===1){
var ci=bi[0];
if(ci===yh||
ai&&ga(ci)||
ha(yh)&&ha(ci))
return ci;}



var di=new hb(bi);
if(ai){
di=di.toKeyedSeq();}else
if(!ha(yh))
di=di.toSetSeq();

di=di.flatten(true);
di.size=bi.reduce
(function(ei,fi){
if(ei!==undefined){
var gi=fi.size;
if(gi!==undefined)
return ei+gi;}},



0);

return di;}



function kd(yh,zh,ai){
var bi=vd(yh);
bi.__iterateUncached=function(ci,di){
var ei=0,
fi=false;
function gi(hi,ii){var ji=this;
hi.__iterate(function(ki,li){
if((!zh||ii<zh)&&fa(ki)){
gi(ki,ii+1);}else
if(ci(ki,ai?li:ei++,ji)===false)
fi=true;

return !fi;},
di);}

gi(yh,0);
return ei;};

bi.__iteratorUncached=function(ci,di){
var ei=yh.__iterator(ci,di),
fi=[],
gi=0;
return new ua(function(){
while(ei){
var hi=ei.next();
if(hi.done!==false){
ei=fi.pop();
continue;}

var ii=hi.value;
if(ci===qa)
ii=ii[1];

if((!zh||fi.length<zh)&&fa(ii)){
fi.push(ei);
ei=ii.__iterator(ci,di);}else 

return ai?hi:va(ci,gi++,ii,hi);}


return wa();});};


return bi;}



function ld(yh,zh,ai){
var bi=ud(yh);
return yh.toSeq().map
(function(ci,di){return bi(zh.call(ai,ci,di,yh));}).
flatten(true);}



function md(yh,zh){
var ai=vd(yh);
ai.size=yh.size&&yh.size*2-1;
ai.__iterateUncached=function(bi,ci){var di=this,
ei=0;
yh.__iterate(function(fi,gi){
return (!ei||bi(zh,ei++,di)!==false)&&
bi(fi,ei++,di)!==false;},
ci);

return ei;};

ai.__iteratorUncached=function(bi,ci){
var di=yh.__iterator(pa,ci),
ei=0,
fi;
return new ua(function(){
if(!fi||ei%2){
fi=di.next();
if(fi.done)
return fi;}


return ei%2?
va(bi,ei++,zh):
va(bi,ei++,fi.value,fi);});};


return ai;}



function nd(yh,zh,ai){
if(!zh)
zh=xd;

var bi=ga(yh),
ci=0,
di=yh.toSeq().map
(function(ei,fi){return [fi,ei,ci++,ai?ai(ei,fi,yh):ei];}).
toArray();
di.sort(function(ei,fi){return zh(ei[3],fi[3])||ei[2]-fi[2];}).forEach
(bi?
function(ei,fi){di[fi].length=2;}:
function(ei,fi){di[fi]=ei[1];});

return bi?db(di):
ha(yh)?eb(di):
fb(di);}



function od(yh,zh,ai){
if(!zh)
zh=xd;

if(ai){
var bi=yh.toSeq().
map(function(ci,di){return [ci,ai(ci,di,yh)];}).
reduce(function(ci,di){return pd(zh,ci[1],di[1])?di:ci;});
return bi&&bi[0];}else 

return yh.reduce(function(ci,di){return pd(zh,ci,di)?di:ci;});}



function pd(yh,zh,ai){
var bi=yh(ai,zh);


return (bi===0&&ai!==zh&&(ai===undefined||ai===null||ai!==ai))||bi>0;}



function qd(yh,zh,ai){
var bi=vd(yh);
bi.size=new hb(ai).map(function(ci){return ci.size;}).min();


bi.__iterate=function(ci,di){













var ei=this.__iterator(pa,di),
fi,
gi=0;
while(!(fi=ei.next()).done)
if(ci(fi.value,gi++,this)===false)
break;


return gi;};

bi.__iteratorUncached=function(ci,di){
var ei=ai.map(function(hi){
return (hi=ba(hi),za(di?hi.reverse():hi));}),

fi=0,
gi=false;
return new ua(function(){
var hi;
if(!gi){
hi=ei.map(function(ii){return ii.next();});
gi=hi.some(function(ii){return ii.done;});}

if(gi)
return wa();

return va
(ci,
fi++,
zh.apply(null,hi.map(function(ii){return ii.value;})));});};



return bi;}





function rd(yh,zh){
return lb(yh)?zh:yh.constructor(zh);}


function sd(yh){
if(yh!==Object(yh))
throw new TypeError('Expected [K, V] tuple: '+yh);}



function td(yh){
vc(yh.size);
return u(yh);}


function ud(yh){
return ga(yh)?ca:
ha(yh)?da:
ea;}


function vd(yh){
return Object.create

((ga(yh)?db:
ha(yh)?eb:
fb).
prototype);}



function wd(){
if(this._iter.cacheResult){
this._iter.cacheResult();
this.size=this._iter.size;
return this;}else 

return cb.prototype.cacheResult.call(this);}



function xd(yh,zh){
return yh>zh?1:yh<zh?-1:0;}


function yd(yh){
var zh=za(yh);
if(!zh){


if(!bb(yh))
throw new TypeError('Expected iterable or array-like: '+yh);

zh=za(ba(yh));}

return zh;}


i(zd,vb);



function zd(yh){
return yh===null||yh===undefined?ne():
ae(yh)?yh:
ne().withMutations(function(zh){
var ai=ca(yh);
vc(ai.size);
ai.forEach(function(bi,ci){return zh.set(ci,bi);});});}



zd.prototype.toString=function(){
return this.__toString('Map {','}');};




zd.prototype.get=function(yh,zh){
return this._root?
this._root.get(0,undefined,yh,zh):
zh;};




zd.prototype.set=function(yh,zh){
return oe(this,yh,zh);};


zd.prototype.setIn=function(yh,zh){
return this.updateIn(yh,n,function(){return zh;});};


zd.prototype.remove=function(yh){
return oe(this,yh,n);};


zd.prototype.deleteIn=function(yh){
return this.updateIn(yh,function(){return n;});};


zd.prototype.update=function(yh,zh,ai){
return arguments.length===1?
yh(this):
this.updateIn([yh],zh,ai);};


zd.prototype.updateIn=function(yh,zh,ai){
if(!ai){
ai=zh;
zh=undefined;}

var bi=ye
(this,
yd(yh),
zh,
ai);

return bi===n?undefined:bi;};


zd.prototype.clear=function(){
if(this.size===0)
return this;

if(this.__ownerID){
this.size=0;
this._root=null;
this.__hash=undefined;
this.__altered=true;
return this;}

return ne();};




zd.prototype.merge=function(){
return ve(this,undefined,arguments);};


zd.prototype.mergeWith=function(yh){var zh=h.call(arguments,1);
return ve(this,yh,zh);};


zd.prototype.mergeIn=function(yh){var zh=h.call(arguments,1);
return this.updateIn
(yh,
ne(),
function(ai){return typeof ai.merge==='function'?
ai.merge.apply(ai,zh):
zh[zh.length-1];});};



zd.prototype.mergeDeep=function(){
return ve(this,we(undefined),arguments);};


zd.prototype.mergeDeepWith=function(yh){var zh=h.call(arguments,1);
return ve(this,we(yh),zh);};


zd.prototype.mergeDeepIn=function(yh){var zh=h.call(arguments,1);
return this.updateIn
(yh,
ne(),
function(ai){return typeof ai.mergeDeep==='function'?
ai.mergeDeep.apply(ai,zh):
zh[zh.length-1];});};



zd.prototype.sort=function(yh){

return yf(nd(this,yh));};


zd.prototype.sortBy=function(yh,zh){

return yf(nd(this,zh,yh));};




zd.prototype.withMutations=function(yh){
var zh=this.asMutable();
yh(zh);
return zh.wasAltered()?zh.__ensureOwner(this.__ownerID):this;};


zd.prototype.asMutable=function(){
return this.__ownerID?this:this.__ensureOwner(new s());};


zd.prototype.asImmutable=function(){
return this.__ensureOwner();};


zd.prototype.wasAltered=function(){
return this.__altered;};


zd.prototype.__iterator=function(yh,zh){
return new ie(this,yh,zh);};


zd.prototype.__iterate=function(yh,zh){var ai=this,
bi=0;
this._root&&this._root.iterate(function(ci){
bi++;
return yh(ci[1],ci[0],ai);},
zh);
return bi;};


zd.prototype.__ensureOwner=function(yh){
if(yh===this.__ownerID)
return this;

if(!yh){
this.__ownerID=yh;
this.__altered=false;
return this;}

return le(this.size,this._root,yh,this.__hash);};



function ae(yh){
return !!(yh&&yh[be]);}


zd.isMap=ae;

var be='@@__IMMUTABLE_MAP__@@',

ce=zd.prototype;
ce[be]=true;
ce[j]=ce.remove;
ce.removeIn=ce.deleteIn;






function de(yh,zh){
this.ownerID=yh;
this.entries=zh;}


de.prototype.get=function(yh,zh,ai,bi){
var ci=this.entries;
for(var di=0,ei=ci.length;di<ei;di++)
if(yb(ai,ci[di][0]))
return ci[di][1];


return bi;};


de.prototype.update=function(yh,zh,ai,bi,ci,di,ei){
var fi=ci===n,

gi=this.entries,
hi=0;
for(var ii=gi.length;hi<ii;hi++)
if(yb(bi,gi[hi][0]))
break;


var ji=hi<ii;

if(ji?gi[hi][1]===ci:fi)
return this;


r(ei);
(fi||!ji)&&r(di);

if(fi&&gi.length===1)
return;


if(!ji&&!fi&&gi.length>=df)
return se(yh,gi,bi,ci);


var ki=yh&&yh===this.ownerID,
li=ki?gi:t(gi);

if(ji){
if(fi){
hi===ii-1?li.pop():(li[hi]=li.pop());}else 

li[hi]=[bi,ci];}else 


li.push([bi,ci]);


if(ki){
this.entries=li;
return this;}


return new de(yh,li);};





function ee(yh,zh,ai){
this.ownerID=yh;
this.bitmap=zh;
this.nodes=ai;}


ee.prototype.get=function(yh,zh,ai,bi){
if(zh===undefined)
zh=fc(ai);

var ci=(1<<((yh===0?zh:zh>>>yh)&m)),
di=this.bitmap;
return (di&ci)===0?bi:
this.nodes[ze(di&(ci-1))].get(yh+k,zh,ai,bi);};


ee.prototype.update=function(yh,zh,ai,bi,ci,di,ei){
if(ai===undefined)
ai=fc(bi);

var fi=(zh===0?ai:ai>>>zh)&m,
gi=1<<fi,
hi=this.bitmap,
ii=(hi&gi)!==0;

if(!ii&&ci===n)
return this;


var ji=ze(hi&(gi-1)),
ki=this.nodes,
li=ii?ki[ji]:undefined,
mi=pe(li,yh,zh+k,ai,bi,ci,di,ei);

if(mi===li)
return this;


if(!ii&&mi&&ki.length>=ef)
return ue(yh,ki,hi,fi,mi);


if(ii&&!mi&&ki.length===2&&qe(ki[ji^1]))
return ki[ji^1];


if(ii&&mi&&ki.length===1&&qe(mi))
return mi;


var ni=yh&&yh===this.ownerID,
oi=ii?mi?hi:hi^gi:hi|gi,
pi=ii?mi?
af(ki,ji,mi,ni):
cf(ki,ji,ni):
bf(ki,ji,mi,ni);

if(ni){
this.bitmap=oi;
this.nodes=pi;
return this;}


return new ee(yh,oi,pi);};





function fe(yh,zh,ai){
this.ownerID=yh;
this.count=zh;
this.nodes=ai;}


fe.prototype.get=function(yh,zh,ai,bi){
if(zh===undefined)
zh=fc(ai);

var ci=(yh===0?zh:zh>>>yh)&m,
di=this.nodes[ci];
return di?di.get(yh+k,zh,ai,bi):bi;};


fe.prototype.update=function(yh,zh,ai,bi,ci,di,ei){
if(ai===undefined)
ai=fc(bi);

var fi=(zh===0?ai:ai>>>zh)&m,
gi=ci===n,
hi=this.nodes,
ii=hi[fi];

if(gi&&!ii)
return this;


var ji=pe(ii,yh,zh+k,ai,bi,ci,di,ei);
if(ji===ii)
return this;


var ki=this.count;
if(!ii){
ki++;}else
if(!ji){
ki--;
if(ki<ff)
return te(yh,hi,ki,fi);}



var li=yh&&yh===this.ownerID,
mi=af(hi,fi,ji,li);

if(li){
this.count=ki;
this.nodes=mi;
return this;}


return new fe(yh,ki,mi);};





function ge(yh,zh,ai){
this.ownerID=yh;
this.keyHash=zh;
this.entries=ai;}


ge.prototype.get=function(yh,zh,ai,bi){
var ci=this.entries;
for(var di=0,ei=ci.length;di<ei;di++)
if(yb(ai,ci[di][0]))
return ci[di][1];


return bi;};


ge.prototype.update=function(yh,zh,ai,bi,ci,di,ei){
if(ai===undefined)
ai=fc(bi);


var fi=ci===n;

if(ai!==this.keyHash){
if(fi)
return this;

r(ei);
r(di);
return re(this,yh,zh,ai,[bi,ci]);}


var gi=this.entries,
hi=0;
for(var ii=gi.length;hi<ii;hi++)
if(yb(bi,gi[hi][0]))
break;


var ji=hi<ii;

if(ji?gi[hi][1]===ci:fi)
return this;


r(ei);
(fi||!ji)&&r(di);

if(fi&&ii===2)
return new he(yh,this.keyHash,gi[hi^1]);


var ki=yh&&yh===this.ownerID,
li=ki?gi:t(gi);

if(ji){
if(fi){
hi===ii-1?li.pop():(li[hi]=li.pop());}else 

li[hi]=[bi,ci];}else 


li.push([bi,ci]);


if(ki){
this.entries=li;
return this;}


return new ge(yh,this.keyHash,li);};





function he(yh,zh,ai){
this.ownerID=yh;
this.keyHash=zh;
this.entry=ai;}


he.prototype.get=function(yh,zh,ai,bi){
return yb(ai,this.entry[0])?this.entry[1]:bi;};


he.prototype.update=function(yh,zh,ai,bi,ci,di,ei){
var fi=ci===n,
gi=yb(bi,this.entry[0]);
if(gi?ci===this.entry[1]:fi)
return this;


r(ei);

if(fi){
r(di);
return;}


if(gi){
if(yh&&yh===this.ownerID){
this.entry[1]=ci;
return this;}

return new he(yh,this.keyHash,[bi,ci]);}


r(di);
return re(this,yh,zh,fc(bi),[bi,ci]);};






de.prototype.iterate=
ge.prototype.iterate=function(yh,zh){
var ai=this.entries;
for(var bi=0,ci=ai.length-1;bi<=ci;bi++)
if(yh(ai[zh?ci-bi:bi])===false)
return false;};




ee.prototype.iterate=
fe.prototype.iterate=function(yh,zh){
var ai=this.nodes;
for(var bi=0,ci=ai.length-1;bi<=ci;bi++){
var di=ai[zh?ci-bi:bi];
if(di&&di.iterate(yh,zh)===false)
return false;}};




he.prototype.iterate=function(yh,zh){
return yh(this.entry);};


i(ie,ua);

function ie(yh,zh,ai){
this._type=zh;
this._reverse=ai;
this._stack=yh._root&&ke(yh._root);}


ie.prototype.next=function(){
var yh=this._type,
zh=this._stack;
while(zh){
var ai=zh.node,
bi=zh.index++,
ci;
if(ai.entry){
if(bi===0)
return je(yh,ai.entry);}else

if(ai.entries){
ci=ai.entries.length-1;
if(bi<=ci)
return je(yh,ai.entries[this._reverse?ci-bi:bi]);}else{


ci=ai.nodes.length-1;
if(bi<=ci){
var di=ai.nodes[this._reverse?ci-bi:bi];
if(di){
if(di.entry)
return je(yh,di.entry);

zh=this._stack=ke(di,zh);}

continue;}}


zh=this._stack=this._stack.__prev;}

return wa();};



function je(yh,zh){
return va(yh,zh[0],zh[1]);}


function ke(yh,zh){

return {node:yh,
index:0,
__prev:zh};}



function le(yh,zh,ai,bi){
var ci=Object.create(ce);
ci.size=yh;
ci._root=zh;
ci.__ownerID=ai;
ci.__hash=bi;
ci.__altered=false;
return ci;}


var me;
function ne(){
return me||(me=le(0));}


function oe(yh,zh,ai){
var bi,
ci;
if(!yh._root){
if(ai===n)
return yh;

ci=1;
bi=new de(yh.__ownerID,[[zh,ai]]);}else{

var di=q(o),
ei=q(p);
bi=pe(yh._root,yh.__ownerID,0,undefined,zh,ai,di,ei);
if(!ei.value)
return yh;

ci=yh.size+(di.value?ai===n?-1:1:0);}

if(yh.__ownerID){
yh.size=ci;
yh._root=bi;
yh.__hash=undefined;
yh.__altered=true;
return yh;}

return bi?le(ci,bi):ne();}


function pe(yh,zh,ai,bi,ci,di,ei,fi){
if(!yh){
if(di===n)
return yh;

r(fi);
r(ei);
return new he(zh,bi,[ci,di]);}

return yh.update(zh,ai,bi,ci,di,ei,fi);}


function qe(yh){
return yh.constructor===he||yh.constructor===ge;}


function re(yh,zh,ai,bi,ci){
if(yh.keyHash===bi)
return new ge(zh,bi,[yh.entry,ci]);


var di=(ai===0?yh.keyHash:yh.keyHash>>>ai)&m,
ei=(ai===0?bi:bi>>>ai)&m,

fi,
gi=di===ei?
[re(yh,zh,ai+k,bi,ci)]:
((fi=new he(zh,bi,ci)),di<ei?[yh,fi]:[fi,yh]);

return new ee(zh,(1<<di)|(1<<ei),gi);}


function se(yh,zh,ai,bi){
if(!yh)
yh=new s();

var ci=new he(yh,fc(ai),[ai,bi]);
for(var di=0;di<zh.length;di++){
var ei=zh[di];
ci=ci.update(yh,0,undefined,ei[0],ei[1]);}

return ci;}


function te(yh,zh,ai,bi){
var ci=0,
di=0,
ei=new Array(ai);
for(var fi=0,gi=1,hi=zh.length;fi<hi;fi++,gi<<=1){
var ii=zh[fi];
if(ii!==undefined&&fi!==bi){
ci|=gi;
ei[di++]=ii;}}


return new ee(yh,ci,ei);}


function ue(yh,zh,ai,bi,ci){
var di=0,
ei=new Array(l);
for(var fi=0;ai!==0;fi++,ai>>>=1)
ei[fi]=ai&1?zh[di++]:undefined;

ei[bi]=ci;
return new fe(yh,di+1,ei);}


function ve(yh,zh,ai){
var bi=[];
for(var ci=0;ci<ai.length;ci++){
var di=ai[ci],
ei=ca(di);
if(!fa(di))
ei=ei.map(function(fi){return zb(fi);});

bi.push(ei);}

return xe(yh,zh,bi);}


function we(yh){
return function(zh,ai,bi){
return zh&&zh.mergeDeepWith&&fa(ai)?
zh.mergeDeepWith(yh,ai):
yh?yh(zh,ai,bi):ai;};}


function xe(yh,zh,ai){
ai=ai.filter(function(bi){return bi.size!==0;});
if(ai.length===0)
return yh;

if(yh.size===0&&!yh.__ownerID&&ai.length===1)
return yh.constructor(ai[0]);

return yh.withMutations(function(bi){
var ci=zh?
function(ei,fi){
bi.update(fi,n,function(gi){
return gi===n?ei:zh(gi,ei,fi);});}:


function(ei,fi){
bi.set(fi,ei);};

for(var di=0;di<ai.length;di++)
ai[di].forEach(ci);});}




function ye(yh,zh,ai,bi){
var ci=yh===n,
di=zh.next();
if(di.done){
var ei=ci?ai:yh,
fi=bi(ei);
return fi===ei?yh:fi;}

uc
(ci||(yh&&yh.set),
'invalid keyPath');

var gi=di.value,
hi=ci?n:yh.get(gi,n),
ii=ye
(hi,
zh,
ai,
bi);

return ii===hi?yh:
ii===n?yh.remove(gi):
(ci?ne():yh).set(gi,ii);}


function ze(yh){
yh=yh-((yh>>1)&1431655765);
yh=(yh&858993459)+((yh>>2)&858993459);
yh=(yh+(yh>>4))&252645135;
yh=yh+(yh>>8);
yh=yh+(yh>>16);
return yh&127;}


function af(yh,zh,ai,bi){
var ci=bi?yh:t(yh);
ci[zh]=ai;
return ci;}


function bf(yh,zh,ai,bi){
var ci=yh.length+1;
if(bi&&zh+1===ci){
yh[zh]=ai;
return yh;}

var di=new Array(ci),
ei=0;
for(var fi=0;fi<ci;fi++)
if(fi===zh){
di[fi]=ai;
ei=-1;}else 

di[fi]=yh[fi+ei];


return di;}


function cf(yh,zh,ai){
var bi=yh.length-1;
if(ai&&zh===bi){
yh.pop();
return yh;}

var ci=new Array(bi),
di=0;
for(var ei=0;ei<bi;ei++){
if(ei===zh)
di=1;

ci[ei]=yh[ei+di];}

return ci;}


var df=l/4,
ef=l/2,
ff=l/4;

i(gf,wb);



function gf(yh){
var zh=qf();
if(yh===null||yh===undefined)
return zh;

if(hf(yh))
return yh;

var ai=da(yh),
bi=ai.size;
if(bi===0)
return zh;

vc(bi);
if(bi>0&&bi<l)
return of(0,bi,k,null,new lf(ai.toArray()));

return zh.withMutations(function(ci){
ci.setSize(bi);
ai.forEach(function(di,ei){return ci.set(ei,di);});});}



gf.of=function(){
return this(arguments);};


gf.prototype.toString=function(){
return this.__toString('List [',']');};




gf.prototype.get=function(yh,zh){
yh=v(this,yh);
if(yh<0||yh>=this.size)
return zh;

yh+=this._origin;
var ai=uf(this,yh);
return ai&&ai.array[yh&m];};




gf.prototype.set=function(yh,zh){
return rf(this,yh,zh);};


gf.prototype.remove=function(yh){
return !this.has(yh)?this:
yh===0?this.shift():
yh===this.size-1?this.pop():
this.splice(yh,1);};


gf.prototype.clear=function(){
if(this.size===0)
return this;

if(this.__ownerID){
this.size=this._origin=this._capacity=0;
this._level=k;
this._root=this._tail=null;
this.__hash=undefined;
this.__altered=true;
return this;}

return qf();};


gf.prototype.push=function(){
var yh=arguments,
zh=this.size;
return this.withMutations(function(ai){
vf(ai,0,zh+yh.length);
for(var bi=0;bi<yh.length;bi++)
ai.set(zh+bi,yh[bi]);});};




gf.prototype.pop=function(){
return vf(this,0,-1);};


gf.prototype.unshift=function(){
var yh=arguments;
return this.withMutations(function(zh){
vf(zh,-yh.length);
for(var ai=0;ai<yh.length;ai++)
zh.set(ai,yh[ai]);});};




gf.prototype.shift=function(){
return vf(this,1);};




gf.prototype.merge=function(){
return wf(this,undefined,arguments);};


gf.prototype.mergeWith=function(yh){var zh=h.call(arguments,1);
return wf(this,yh,zh);};


gf.prototype.mergeDeep=function(){
return wf(this,we(undefined),arguments);};


gf.prototype.mergeDeepWith=function(yh){var zh=h.call(arguments,1);
return wf(this,we(yh),zh);};


gf.prototype.setSize=function(yh){
return vf(this,0,yh);};




gf.prototype.slice=function(yh,zh){
var ai=this.size;
if(x(yh,zh,ai))
return this;

return vf
(this,
y(yh,ai),
z(zh,ai));};



gf.prototype.__iterator=function(yh,zh){
var ai=0,
bi=nf(this,zh);
return new ua(function(){
var ci=bi();
return ci===mf?
wa():
va(yh,ai++,ci);});};



gf.prototype.__iterate=function(yh,zh){
var ai=0,
bi=nf(this,zh),
ci;
while((ci=bi())!==mf)
if(yh(ci,ai++,this)===false)
break;


return ai;};


gf.prototype.__ensureOwner=function(yh){
if(yh===this.__ownerID)
return this;

if(!yh){
this.__ownerID=yh;
return this;}

return of(this._origin,this._capacity,this._level,this._root,this._tail,yh,this.__hash);};



function hf(yh){
return !!(yh&&yh[jf]);}


gf.isList=hf;

var jf='@@__IMMUTABLE_LIST__@@',

kf=gf.prototype;
kf[jf]=true;
kf[j]=kf.remove;
kf.setIn=ce.setIn;
kf.deleteIn=
kf.removeIn=ce.removeIn;
kf.update=ce.update;
kf.updateIn=ce.updateIn;
kf.mergeIn=ce.mergeIn;
kf.mergeDeepIn=ce.mergeDeepIn;
kf.withMutations=ce.withMutations;
kf.asMutable=ce.asMutable;
kf.asImmutable=ce.asImmutable;
kf.wasAltered=ce.wasAltered;



function lf(yh,zh){
this.array=yh;
this.ownerID=zh;}




lf.prototype.removeBefore=function(yh,zh,ai){
if(ai===zh?1<<zh:this.array.length===0)
return this;

var bi=(ai>>>zh)&m;
if(bi>=this.array.length)
return new lf([],yh);

var ci=bi===0,
di;
if(zh>0){
var ei=this.array[bi];
di=ei&&ei.removeBefore(yh,zh-k,ai);
if(di===ei&&ci)
return this;}


if(ci&&!di)
return this;

var fi=tf(this,yh);
if(!ci)
for(var gi=0;gi<bi;gi++)
fi.array[gi]=undefined;


if(di)
fi.array[bi]=di;

return fi;};


lf.prototype.removeAfter=function(yh,zh,ai){
if(ai===zh?1<<zh:this.array.length===0)
return this;

var bi=((ai-1)>>>zh)&m;
if(bi>=this.array.length)
return this;

var ci=bi===this.array.length-1,
di;
if(zh>0){
var ei=this.array[bi];
di=ei&&ei.removeAfter(yh,zh-k,ai);
if(di===ei&&ci)
return this;}


if(ci&&!di)
return this;

var fi=tf(this,yh);
if(!ci)
fi.array.pop();

if(di)
fi.array[bi]=di;

return fi;};




var mf={};

function nf(yh,zh){
var ai=yh._origin,
bi=yh._capacity,
ci=xf(bi),
di=yh._tail;

return ei(yh._root,yh._level,0);

function ei(hi,ii,ji){
return ii===0?
fi(hi,ji):
gi(hi,ii,ji);}


function fi(hi,ii){
var ji=ii===ci?di&&di.array:hi&&hi.array,
ki=ii>ai?0:ai-ii,
li=bi-ii;
if(li>l)
li=l;

return function(){
if(ki===li)
return mf;

var mi=zh?--li:ki++;
return ji&&ji[mi];};}



function gi(hi,ii,ji){
var ki,
li=hi&&hi.array,
mi=ji>ai?0:(ai-ji)>>ii,
ni=((bi-ji)>>ii)+1;
if(ni>l)
ni=l;

return function(){

do{if(ki){
var oi=ki();
if(oi!==mf)
return oi;

ki=null;}

if(mi===ni)
return mf;

var pi=zh?--ni:mi++;
ki=ei
(li&&li[pi],ii-k,ji+(pi<<ii));}while(

true);};}}




function of(yh,zh,ai,bi,ci,di,ei){
var fi=Object.create(kf);
fi.size=zh-yh;
fi._origin=yh;
fi._capacity=zh;
fi._level=ai;
fi._root=bi;
fi._tail=ci;
fi.__ownerID=di;
fi.__hash=ei;
fi.__altered=false;
return fi;}


var pf;
function qf(){
return pf||(pf=of(0,0,k));}


function rf(yh,zh,ai){
zh=v(yh,zh);

if(zh>=yh.size||zh<0)
return yh.withMutations(function(ei){
zh<0?
vf(ei,zh).set(0,ai):
vf(ei,0,zh+1).set(zh,ai);});



zh+=yh._origin;

var bi=yh._tail,
ci=yh._root,
di=q(p);
if(zh>=xf(yh._capacity)){
bi=sf(bi,yh.__ownerID,0,zh,ai,di);}else 

ci=sf(ci,yh.__ownerID,yh._level,zh,ai,di);


if(!di.value)
return yh;


if(yh.__ownerID){
yh._root=ci;
yh._tail=bi;
yh.__hash=undefined;
yh.__altered=true;
return yh;}

return of(yh._origin,yh._capacity,yh._level,ci,bi);}


function sf(yh,zh,ai,bi,ci,di){
var ei=(bi>>>ai)&m,
fi=yh&&ei<yh.array.length;
if(!fi&&ci===undefined)
return yh;


var gi;

if(ai>0){
var hi=yh&&yh.array[ei],
ii=sf(hi,zh,ai-k,bi,ci,di);
if(ii===hi)
return yh;

gi=tf(yh,zh);
gi.array[ei]=ii;
return gi;}


if(fi&&yh.array[ei]===ci)
return yh;


r(di);

gi=tf(yh,zh);
if(ci===undefined&&ei===gi.array.length-1){
gi.array.pop();}else 

gi.array[ei]=ci;

return gi;}


function tf(yh,zh){
if(zh&&yh&&zh===yh.ownerID)
return yh;

return new lf(yh?yh.array.slice():[],zh);}


function uf(yh,zh){
if(zh>=xf(yh._capacity))
return yh._tail;

if(zh<1<<(yh._level+k)){
var ai=yh._root,
bi=yh._level;
while(ai&&bi>0){
ai=ai.array[(zh>>>bi)&m];
bi-=k;}

return ai;}}



function vf(yh,zh,ai){
var bi=yh.__ownerID||new s(),
ci=yh._origin,
di=yh._capacity,
ei=ci+zh,
fi=ai===undefined?di:ai<0?di+ai:ci+ai;
if(ei===ci&&fi===di)
return yh;



if(ei>=fi)
return yh.clear();


var gi=yh._level,
hi=yh._root,


ii=0;
while(ei+ii<0){
hi=new lf(hi&&hi.array.length?[undefined,hi]:[],bi);
gi+=k;
ii+=1<<gi;}

if(ii){
ei+=ii;
ci+=ii;
fi+=ii;
di+=ii;}


var ji=xf(di),
ki=xf(fi);


while(ki>=1<<(gi+k)){
hi=new lf(hi&&hi.array.length?[hi]:[],bi);
gi+=k;}



var li=yh._tail,
mi=ki<ji?
uf(yh,fi-1):
ki>ji?new lf([],bi):li;


if(li&&ki>ji&&ei<di&&li.array.length){
hi=tf(hi,bi);
var ni=hi;
for(var oi=gi;oi>k;oi-=k){
var pi=(ji>>>oi)&m;
ni=ni.array[pi]=tf(ni.array[pi],bi);}

ni.array[(ji>>>k)&m]=li;}



if(fi<di)
mi=mi&&mi.removeAfter(bi,0,fi);



if(ei>=ki){
ei-=ki;
fi-=ki;
gi=k;
hi=null;
mi=mi&&mi.removeBefore(bi,0,ei);}else


if(ei>ci||ki<ji){
ii=0;


while(hi){
var qi=(ei>>>gi)&m;
if(qi!==(ki>>>gi)&m)
break;

if(qi)
ii+=(1<<gi)*qi;

gi-=k;
hi=hi.array[qi];}



if(hi&&ei>ci)
hi=hi.removeBefore(bi,gi,ei-ii);

if(hi&&ki<ji)
hi=hi.removeAfter(bi,gi,ki-ii);

if(ii){
ei-=ii;
fi-=ii;}}



if(yh.__ownerID){
yh.size=fi-ei;
yh._origin=ei;
yh._capacity=fi;
yh._level=gi;
yh._root=hi;
yh._tail=mi;
yh.__hash=undefined;
yh.__altered=true;
return yh;}

return of(ei,fi,gi,hi,mi);}


function wf(yh,zh,ai){
var bi=[],
ci=0;
for(var di=0;di<ai.length;di++){
var ei=ai[di],
fi=da(ei);
if(fi.size>ci)
ci=fi.size;

if(!fa(ei))
fi=fi.map(function(gi){return zb(gi);});

bi.push(fi);}

if(ci>yh.size)
yh=yh.setSize(ci);

return xe(yh,zh,bi);}


function xf(yh){
return yh<l?0:(((yh-1)>>>k)<<k);}


i(yf,zd);



function yf(yh){
return yh===null||yh===undefined?cg():
zf(yh)?yh:
cg().withMutations(function(zh){
var ai=ca(yh);
vc(ai.size);
ai.forEach(function(bi,ci){return zh.set(ci,bi);});});}



yf.of=function(){
return this(arguments);};


yf.prototype.toString=function(){
return this.__toString('OrderedMap {','}');};




yf.prototype.get=function(yh,zh){
var ai=this._map.get(yh);
return ai!==undefined?this._list.get(ai)[1]:zh;};




yf.prototype.clear=function(){
if(this.size===0)
return this;

if(this.__ownerID){
this.size=0;
this._map.clear();
this._list.clear();
return this;}

return cg();};


yf.prototype.set=function(yh,zh){
return dg(this,yh,zh);};


yf.prototype.remove=function(yh){
return dg(this,yh,n);};


yf.prototype.wasAltered=function(){
return this._map.wasAltered()||this._list.wasAltered();};


yf.prototype.__iterate=function(yh,zh){var ai=this;
return this._list.__iterate
(function(bi){return bi&&yh(bi[1],bi[0],ai);},
zh);};



yf.prototype.__iterator=function(yh,zh){
return this._list.fromEntrySeq().__iterator(yh,zh);};


yf.prototype.__ensureOwner=function(yh){
if(yh===this.__ownerID)
return this;

var zh=this._map.__ensureOwner(yh),
ai=this._list.__ensureOwner(yh);
if(!yh){
this.__ownerID=yh;
this._map=zh;
this._list=ai;
return this;}

return ag(zh,ai,yh,this.__hash);};



function zf(yh){
return ae(yh)&&ja(yh);}


yf.isOrderedMap=zf;

yf.prototype[na]=true;
yf.prototype[j]=yf.prototype.remove;



function ag(yh,zh,ai,bi){
var ci=Object.create(yf.prototype);
ci.size=yh?yh.size:0;
ci._map=yh;
ci._list=zh;
ci.__ownerID=ai;
ci.__hash=bi;
return ci;}


var bg;
function cg(){
return bg||(bg=ag(ne(),qf()));}


function dg(yh,zh,ai){
var bi=yh._map,
ci=yh._list,
di=bi.get(zh),
ei=di!==undefined,
fi,
gi;
if(ai===n){
if(!ei)
return yh;

if(ci.size>=l&&ci.size>=bi.size*2){
gi=ci.filter(function(hi,ii){return hi!==undefined&&di!==ii;});
fi=gi.toKeyedSeq().map(function(hi){return hi[0];}).flip().toMap();
if(yh.__ownerID)
fi.__ownerID=gi.__ownerID=yh.__ownerID;}else{


fi=bi.remove(zh);
gi=di===ci.size-1?ci.pop():ci.set(di,undefined);}}else 


if(ei){
if(ai===ci.get(di)[1])
return yh;

fi=bi;
gi=ci.set(di,[zh,ai]);}else{

fi=bi.set(zh,ci.size);
gi=ci.set(ci.size,[zh,ai]);}


if(yh.__ownerID){
yh.size=fi.size;
yh._map=fi;
yh._list=gi;
yh.__hash=undefined;
return yh;}

return ag(fi,gi);}


i(eg,wb);



function eg(yh){
return yh===null||yh===undefined?kg():
fg(yh)?yh:
kg().unshiftAll(yh);}


eg.of=function(){
return this(arguments);};


eg.prototype.toString=function(){
return this.__toString('Stack [',']');};




eg.prototype.get=function(yh,zh){
var ai=this._head;
yh=v(this,yh);
while(ai&&yh--)
ai=ai.next;

return ai?ai.value:zh;};


eg.prototype.peek=function(){
return this._head&&this._head.value;};




eg.prototype.push=function(){
if(arguments.length===0)
return this;

var yh=this.size+arguments.length,
zh=this._head;
for(var ai=arguments.length-1;ai>=0;ai--)
zh=
{value:arguments[ai],
next:zh};


if(this.__ownerID){
this.size=yh;
this._head=zh;
this.__hash=undefined;
this.__altered=true;
return this;}

return ig(yh,zh);};


eg.prototype.pushAll=function(yh){
yh=da(yh);
if(yh.size===0)
return this;

vc(yh.size);
var zh=this.size,
ai=this._head;
yh.reverse().forEach(function(bi){
zh++;
ai=
{value:bi,
next:ai};});


if(this.__ownerID){
this.size=zh;
this._head=ai;
this.__hash=undefined;
this.__altered=true;
return this;}

return ig(zh,ai);};


eg.prototype.pop=function(){
return this.slice(1);};


eg.prototype.unshift=function(){
return this.push.apply(this,arguments);};


eg.prototype.unshiftAll=function(yh){
return this.pushAll(yh);};


eg.prototype.shift=function(){
return this.pop.apply(this,arguments);};


eg.prototype.clear=function(){
if(this.size===0)
return this;

if(this.__ownerID){
this.size=0;
this._head=undefined;
this.__hash=undefined;
this.__altered=true;
return this;}

return kg();};


eg.prototype.slice=function(yh,zh){
if(x(yh,zh,this.size))
return this;

var ai=y(yh,this.size),
bi=z(zh,this.size);
if(bi!==this.size)

return wb.prototype.slice.call(this,yh,zh);

var ci=this.size-ai,
di=this._head;
while(ai--)
di=di.next;

if(this.__ownerID){
this.size=ci;
this._head=di;
this.__hash=undefined;
this.__altered=true;
return this;}

return ig(ci,di);};




eg.prototype.__ensureOwner=function(yh){
if(yh===this.__ownerID)
return this;

if(!yh){
this.__ownerID=yh;
this.__altered=false;
return this;}

return ig(this.size,this._head,yh,this.__hash);};




eg.prototype.__iterate=function(yh,zh){
if(zh)
return this.reverse().__iterate(yh);

var ai=0,
bi=this._head;
while(bi){
if(yh(bi.value,ai++,this)===false)
break;

bi=bi.next;}

return ai;};


eg.prototype.__iterator=function(yh,zh){
if(zh)
return this.reverse().__iterator(yh);

var ai=0,
bi=this._head;
return new ua(function(){
if(bi){
var ci=bi.value;
bi=bi.next;
return va(yh,ai++,ci);}

return wa();});};




function fg(yh){
return !!(yh&&yh[gg]);}


eg.isStack=fg;

var gg='@@__IMMUTABLE_STACK__@@',

hg=eg.prototype;
hg[gg]=true;
hg.withMutations=ce.withMutations;
hg.asMutable=ce.asMutable;
hg.asImmutable=ce.asImmutable;
hg.wasAltered=ce.wasAltered;


function ig(yh,zh,ai,bi){
var ci=Object.create(hg);
ci.size=yh;
ci._head=zh;
ci.__ownerID=ai;
ci.__hash=bi;
ci.__altered=false;
return ci;}


var jg;
function kg(){
return jg||(jg=ig(0));}


i(lg,xb);



function lg(yh){
return yh===null||yh===undefined?sg():
mg(yh)?yh:
sg().withMutations(function(zh){
var ai=ea(yh);
vc(ai.size);
ai.forEach(function(bi){return zh.add(bi);});});}



lg.of=function(){
return this(arguments);};


lg.fromKeys=function(yh){
return this(ca(yh).keySeq());};


lg.prototype.toString=function(){
return this.__toString('Set {','}');};




lg.prototype.has=function(yh){
return this._map.has(yh);};




lg.prototype.add=function(yh){
return pg(this,this._map.set(yh,true));};


lg.prototype.remove=function(yh){
return pg(this,this._map.remove(yh));};


lg.prototype.clear=function(){
return pg(this,this._map.clear());};




lg.prototype.union=function(){var yh=h.call(arguments,0);
yh=yh.filter(function(zh){return zh.size!==0;});
if(yh.length===0)
return this;

if(this.size===0&&!this.__ownerID&&yh.length===1)
return this.constructor(yh[0]);

return this.withMutations(function(zh){
for(var ai=0;ai<yh.length;ai++)
ea(yh[ai]).forEach(function(bi){return zh.add(bi);});});};




lg.prototype.intersect=function(){var yh=h.call(arguments,0);
if(yh.length===0)
return this;

yh=yh.map(function(ai){return ea(ai);});
var zh=this;
return this.withMutations(function(ai){
zh.forEach(function(bi){
if(!yh.every(function(ci){return ci.includes(bi);}))
ai.remove(bi);});});};





lg.prototype.subtract=function(){var yh=h.call(arguments,0);
if(yh.length===0)
return this;

yh=yh.map(function(ai){return ea(ai);});
var zh=this;
return this.withMutations(function(ai){
zh.forEach(function(bi){
if(yh.some(function(ci){return ci.includes(bi);}))
ai.remove(bi);});});};





lg.prototype.merge=function(){
return this.union.apply(this,arguments);};


lg.prototype.mergeWith=function(yh){var zh=h.call(arguments,1);
return this.union.apply(this,zh);};


lg.prototype.sort=function(yh){

return tg(nd(this,yh));};


lg.prototype.sortBy=function(yh,zh){

return tg(nd(this,zh,yh));};


lg.prototype.wasAltered=function(){
return this._map.wasAltered();};


lg.prototype.__iterate=function(yh,zh){var ai=this;
return this._map.__iterate(function(bi,ci){return yh(ci,ci,ai);},zh);};


lg.prototype.__iterator=function(yh,zh){
return this._map.map(function(ai,bi){return bi;}).__iterator(yh,zh);};


lg.prototype.__ensureOwner=function(yh){
if(yh===this.__ownerID)
return this;

var zh=this._map.__ensureOwner(yh);
if(!yh){
this.__ownerID=yh;
this._map=zh;
return this;}

return this.__make(zh,yh);};



function mg(yh){
return !!(yh&&yh[ng]);}


lg.isSet=mg;

var ng='@@__IMMUTABLE_SET__@@',

og=lg.prototype;
og[ng]=true;
og[j]=og.remove;
og.mergeDeep=og.merge;
og.mergeDeepWith=og.mergeWith;
og.withMutations=ce.withMutations;
og.asMutable=ce.asMutable;
og.asImmutable=ce.asImmutable;

og.__empty=sg;
og.__make=qg;

function pg(yh,zh){
if(yh.__ownerID){
yh.size=zh.size;
yh._map=zh;
return yh;}

return zh===yh._map?yh:
zh.size===0?yh.__empty():
yh.__make(zh);}


function qg(yh,zh){
var ai=Object.create(og);
ai.size=yh?yh.size:0;
ai._map=yh;
ai.__ownerID=zh;
return ai;}


var rg;
function sg(){
return rg||(rg=qg(ne()));}


i(tg,lg);



function tg(yh){
return yh===null||yh===undefined?yg():
ug(yh)?yh:
yg().withMutations(function(zh){
var ai=ea(yh);
vc(ai.size);
ai.forEach(function(bi){return zh.add(bi);});});}



tg.of=function(){
return this(arguments);};


tg.fromKeys=function(yh){
return this(ca(yh).keySeq());};


tg.prototype.toString=function(){
return this.__toString('OrderedSet {','}');};



function ug(yh){
return mg(yh)&&ja(yh);}


tg.isOrderedSet=ug;

var vg=tg.prototype;
vg[na]=true;

vg.__empty=yg;
vg.__make=wg;

function wg(yh,zh){
var ai=Object.create(vg);
ai.size=yh?yh.size:0;
ai._map=yh;
ai.__ownerID=zh;
return ai;}


var xg;
function yg(){
return xg||(xg=wg(cg()));}


i(zg,vb);

function zg(yh,zh){
var ai,

bi=function di(ei){
if(ei instanceof bi)
return ei;

if(!(this instanceof bi))
return new bi(ei);

if(!ai){
ai=true;
var fi=Object.keys(yh);
dh(ci,fi);
ci.size=fi.length;
ci._name=zh;
ci._keys=fi;
ci._defaultValues=yh;}

this._map=zd(ei);},


ci=bi.prototype=Object.create(ah);
ci.constructor=bi;

return bi;}


zg.prototype.toString=function(){
return this.__toString(ch(this)+' {','}');};




zg.prototype.has=function(yh){
return this._defaultValues.hasOwnProperty(yh);};


zg.prototype.get=function(yh,zh){
if(!this.has(yh))
return zh;

var ai=this._defaultValues[yh];
return this._map?this._map.get(yh,ai):ai;};




zg.prototype.clear=function(){
if(this.__ownerID){
this._map&&this._map.clear();
return this;}

var yh=this.constructor;
return yh._empty||(yh._empty=bh(this,ne()));};


zg.prototype.set=function(yh,zh){
if(!this.has(yh))
throw new Error('Cannot set unknown key "'+yh+'" on '+ch(this));

var ai=this._map&&this._map.set(yh,zh);
if(this.__ownerID||ai===this._map)
return this;

return bh(this,ai);};


zg.prototype.remove=function(yh){
if(!this.has(yh))
return this;

var zh=this._map&&this._map.remove(yh);
if(this.__ownerID||zh===this._map)
return this;

return bh(this,zh);};


zg.prototype.wasAltered=function(){
return this._map.wasAltered();};


zg.prototype.__iterator=function(yh,zh){var ai=this;
return ca(this._defaultValues).map(function(bi,ci){return ai.get(ci);}).__iterator(yh,zh);};


zg.prototype.__iterate=function(yh,zh){var ai=this;
return ca(this._defaultValues).map(function(bi,ci){return ai.get(ci);}).__iterate(yh,zh);};


zg.prototype.__ensureOwner=function(yh){
if(yh===this.__ownerID)
return this;

var zh=this._map&&this._map.__ensureOwner(yh);
if(!yh){
this.__ownerID=yh;
this._map=zh;
return this;}

return bh(this,zh,yh);};



var ah=zg.prototype;
ah[j]=ah.remove;
ah.deleteIn=
ah.removeIn=ce.removeIn;
ah.merge=ce.merge;
ah.mergeWith=ce.mergeWith;
ah.mergeIn=ce.mergeIn;
ah.mergeDeep=ce.mergeDeep;
ah.mergeDeepWith=ce.mergeDeepWith;
ah.mergeDeepIn=ce.mergeDeepIn;
ah.setIn=ce.setIn;
ah.update=ce.update;
ah.updateIn=ce.updateIn;
ah.withMutations=ce.withMutations;
ah.asMutable=ce.asMutable;
ah.asImmutable=ce.asImmutable;


function bh(yh,zh,ai){
var bi=Object.create(Object.getPrototypeOf(yh));
bi._map=zh;
bi.__ownerID=ai;
return bi;}


function ch(yh){
return yh._name||yh.constructor.name||'Record';}


function dh(yh,zh){

try{zh.forEach(eh.bind(undefined,yh));}catch(
ai){

}}


function eh(yh,zh){
Object.defineProperty(yh,zh,
{get:function(){
return this.get(zh);},

set:function(ai){
uc(this.__ownerID,'Cannot set on an immutable record.');
this.set(zh,ai);}});}




function fh(yh,zh){
if(yh===zh)
return true;



if(!fa(zh)||
yh.size!==undefined&&zh.size!==undefined&&yh.size!==zh.size||
yh.__hash!==undefined&&zh.__hash!==undefined&&yh.__hash!==zh.__hash||
ga(yh)!==ga(zh)||
ha(yh)!==ha(zh)||
ja(yh)!==ja(zh))

return false;


if(yh.size===0&&zh.size===0)
return true;


var ai=!ia(yh);

if(ja(yh)){
var bi=yh.entries();
return zh.every(function(gi,hi){
var ii=bi.next().value;
return ii&&yb(ii[1],gi)&&(ai||yb(ii[0],hi));})&&
bi.next().done;}


var ci=false;

if(yh.size===undefined)
if(zh.size===undefined){
if(typeof yh.cacheResult==='function')
yh.cacheResult();}else{


ci=true;
var di=yh;
yh=zh;
zh=di;}



var ei=true,
fi=zh.__iterate(function(gi,hi){
if(ai?!yh.has(gi):
ci?!yb(gi,yh.get(hi,n)):!yb(yh.get(hi,n),gi)){
ei=false;
return false;}});



return ei&&yh.size===fi;}


i(gh,eb);

function gh(yh,zh,ai){
if(!(this instanceof gh))
return new gh(yh,zh,ai);

uc(ai!==0,'Cannot step a Range by 0');
yh=yh||0;
if(zh===undefined)
zh=Infinity;

ai=ai===undefined?1:Math.abs(ai);
if(zh<yh)
ai=-ai;

this._start=yh;
this._end=zh;
this._step=ai;
this.size=Math.max(0,Math.ceil((zh-yh)/ai-1)+1);
if(this.size===0){
if(hh)
return hh;

hh=this;}}



gh.prototype.toString=function(){
if(this.size===0)
return 'Range []';

return 'Range [ '+
this._start+'...'+this._end+
(this._step>1?' by '+this._step:'')+
' ]';};


gh.prototype.get=function(yh,zh){
return this.has(yh)?
this._start+v(this,yh)*this._step:
zh;};


gh.prototype.includes=function(yh){
var zh=(yh-this._start)/this._step;
return zh>=0&&
zh<this.size&&
zh===Math.floor(zh);};


gh.prototype.slice=function(yh,zh){
if(x(yh,zh,this.size))
return this;

yh=y(yh,this.size);
zh=z(zh,this.size);
if(zh<=yh)
return new gh(0,0);

return new gh(this.get(yh,this._end),this.get(zh,this._end),this._step);};


gh.prototype.indexOf=function(yh){
var zh=yh-this._start;
if(zh%this._step===0){
var ai=zh/this._step;
if(ai>=0&&ai<this.size)
return ai;}


return -1;};


gh.prototype.lastIndexOf=function(yh){
return this.indexOf(yh);};


gh.prototype.__iterate=function(yh,zh){
var ai=this.size-1,
bi=this._step,
ci=zh?this._start+ai*bi:this._start;
for(var di=0;di<=ai;di++){
if(yh(ci,di,this)===false)
return di+1;

ci+=zh?-bi:bi;}

return di;};


gh.prototype.__iterator=function(yh,zh){
var ai=this.size-1,
bi=this._step,
ci=zh?this._start+ai*bi:this._start,
di=0;
return new ua(function(){
var ei=ci;
ci+=zh?-bi:bi;
return di>ai?wa():va(yh,di++,ei);});};



gh.prototype.equals=function(yh){
return yh instanceof gh?
this._start===yh._start&&
this._end===yh._end&&
this._step===yh._step:
fh(this,yh);};



var hh;

i(ih,eb);

function ih(yh,zh){
if(!(this instanceof ih))
return new ih(yh,zh);

this._value=yh;
this.size=zh===undefined?Infinity:Math.max(0,zh);
if(this.size===0){
if(jh)
return jh;

jh=this;}}



ih.prototype.toString=function(){
if(this.size===0)
return 'Repeat []';

return 'Repeat [ '+this._value+' '+this.size+' times ]';};


ih.prototype.get=function(yh,zh){
return this.has(yh)?this._value:zh;};


ih.prototype.includes=function(yh){
return yb(this._value,yh);};


ih.prototype.slice=function(yh,zh){
var ai=this.size;
return x(yh,zh,ai)?this:
new ih(this._value,z(zh,ai)-y(yh,ai));};


ih.prototype.reverse=function(){
return this;};


ih.prototype.indexOf=function(yh){
if(yb(this._value,yh))
return 0;

return -1;};


ih.prototype.lastIndexOf=function(yh){
if(yb(this._value,yh))
return this.size;

return -1;};


ih.prototype.__iterate=function(yh,zh){
for(var ai=0;ai<this.size;ai++)
if(yh(this._value,ai,this)===false)
return ai+1;


return ai;};


ih.prototype.__iterator=function(yh,zh){var ai=this,
bi=0;
return new ua(function(){
return bi<ai.size?va(yh,bi++,ai._value):wa();});};



ih.prototype.equals=function(yh){
return yh instanceof ih?
yb(this._value,yh._value):
fh(yh);};



var jh;




function kh(yh,zh){
var ai=function(bi){yh.prototype[bi]=zh[bi];};
Object.keys(zh).forEach(ai);
Object.getOwnPropertySymbols&&
Object.getOwnPropertySymbols(zh).forEach(ai);
return yh;}


ba.Iterator=ua;

kh(ba,



{toArray:function(){
vc(this.size);
var yh=new Array(this.size||0);
this.valueSeq().__iterate(function(zh,ai){yh[ai]=zh;});
return yh;},


toIndexedSeq:function(){
return new xc(this);},


toJS:function(){
return this.toSeq().map
(function(yh){return yh&&typeof yh.toJS==='function'?yh.toJS():yh;}).
__toJS();},


toJSON:function(){
return this.toSeq().map
(function(yh){return yh&&typeof yh.toJSON==='function'?yh.toJSON():yh;}).
__toJS();},


toKeyedSeq:function(){
return new wc(this,true);},


toMap:function(){

return zd(this.toKeyedSeq());},


toObject:function(){
vc(this.size);
var yh={};
this.__iterate(function(zh,ai){yh[ai]=zh;});
return yh;},


toOrderedMap:function(){

return yf(this.toKeyedSeq());},


toOrderedSet:function(){

return tg(ga(this)?this.valueSeq():this);},


toSet:function(){

return lg(ga(this)?this.valueSeq():this);},


toSetSeq:function(){
return new yc(this);},


toSeq:function(){
return ha(this)?this.toIndexedSeq():
ga(this)?this.toKeyedSeq():
this.toSetSeq();},


toStack:function(){

return eg(ga(this)?this.valueSeq():this);},


toList:function(){

return gf(ga(this)?this.valueSeq():this);},





toString:function(){
return '[Iterable]';},


__toString:function(yh,zh){
if(this.size===0)
return yh+zh;

return yh+' '+this.toSeq().map(this.__toStringMapper).join(', ')+' '+zh;},





concat:function(){var yh=h.call(arguments,0);
return rd(this,jd(this,yh));},


contains:function(yh){
return this.includes(yh);},


includes:function(yh){
return this.some(function(zh){return yb(zh,yh);});},


entries:function(){
return this.__iterator(qa);},


every:function(yh,zh){
vc(this.size);
var ai=true;
this.__iterate(function(bi,ci,di){
if(!yh.call(zh,bi,ci,di)){
ai=false;
return false;}});


return ai;},


filter:function(yh,zh){
return rd(this,dd(this,yh,zh,true));},


find:function(yh,zh,ai){
var bi=this.findEntry(yh,zh);
return bi?bi[1]:ai;},


findEntry:function(yh,zh){
var ai;
this.__iterate(function(bi,ci,di){
if(yh.call(zh,bi,ci,di)){
ai=[ci,bi];
return false;}});


return ai;},


findLastEntry:function(yh,zh){
return this.toSeq().reverse().findEntry(yh,zh);},


forEach:function(yh,zh){
vc(this.size);
return this.__iterate(zh?yh.bind(zh):yh);},


join:function(yh){
vc(this.size);
yh=yh!==undefined?''+yh:',';
var zh='',
ai=true;
this.__iterate(function(bi){
ai?(ai=false):(zh+=yh);
zh+=bi!==null&&bi!==undefined?bi.toString():'';});

return zh;},


keys:function(){
return this.__iterator(oa);},


map:function(yh,zh){
return rd(this,bd(this,yh,zh));},


reduce:function(yh,zh,ai){
vc(this.size);
var bi,
ci;
if(arguments.length<2){
ci=true;}else 

bi=zh;

this.__iterate(function(di,ei,fi){
if(ci){
ci=false;
bi=di;}else 

bi=yh.call(ai,bi,di,ei,fi);});


return bi;},


reduceRight:function(yh,zh,ai){
var bi=this.toKeyedSeq().reverse();
return bi.reduce.apply(bi,arguments);},


reverse:function(){
return rd(this,cd(this,true));},


slice:function(yh,zh){
return rd(this,gd(this,yh,zh,true));},


some:function(yh,zh){
return !this.every(ph(yh),zh);},


sort:function(yh){
return rd(this,nd(this,yh));},


values:function(){
return this.__iterator(pa);},





butLast:function(){
return this.slice(0,-1);},


isEmpty:function(){
return this.size!==undefined?this.size===0:!this.some(function(){return true;});},


count:function(yh,zh){
return u
(yh?this.toSeq().filter(yh,zh):this);},



countBy:function(yh,zh){
return ed(this,yh,zh);},


equals:function(yh){
return fh(this,yh);},


entrySeq:function(){
var yh=this;
if(yh._cache)

return new hb(yh._cache);

var zh=yh.toSeq().map(oh).toIndexedSeq();
zh.fromEntrySeq=function(){return yh.toSeq();};
return zh;},


filterNot:function(yh,zh){
return this.filter(ph(yh),zh);},


findLast:function(yh,zh,ai){
return this.toKeyedSeq().reverse().find(yh,zh,ai);},


first:function(){
return this.find(w);},


flatMap:function(yh,zh){
return rd(this,ld(this,yh,zh));},


flatten:function(yh){
return rd(this,kd(this,yh,true));},


fromEntrySeq:function(){
return new zc(this);},


get:function(yh,zh){
return this.find(function(ai,bi){return yb(bi,yh);},undefined,zh);},


getIn:function(yh,zh){
var ai=this,


bi=yd(yh),
ci;
while(!(ci=bi.next()).done){
var di=ci.value;
ai=ai&&ai.get?ai.get(di,n):n;
if(ai===n)
return zh;}


return ai;},


groupBy:function(yh,zh){
return fd(this,yh,zh);},


has:function(yh){
return this.get(yh,n)!==n;},


hasIn:function(yh){
return this.getIn(yh,n)!==n;},


isSubset:function(yh){
yh=typeof yh.includes==='function'?yh:ba(yh);
return this.every(function(zh){return yh.includes(zh);});},


isSuperset:function(yh){
return yh.isSubset(this);},


keySeq:function(){
return this.toSeq().map(nh).toIndexedSeq();},


last:function(){
return this.toSeq().reverse().first();},


max:function(yh){
return od(this,yh);},


maxBy:function(yh,zh){
return od(this,zh,yh);},


min:function(yh){
return od(this,yh?qh(yh):th);},


minBy:function(yh,zh){
return od(this,zh?qh(zh):th,yh);},


rest:function(){
return this.slice(1);},


skip:function(yh){
return this.slice(Math.max(0,yh));},


skipLast:function(yh){
return rd(this,this.toSeq().reverse().skip(yh).reverse());},


skipWhile:function(yh,zh){
return rd(this,id(this,yh,zh,true));},


skipUntil:function(yh,zh){
return this.skipWhile(ph(yh),zh);},


sortBy:function(yh,zh){
return rd(this,nd(this,zh,yh));},


take:function(yh){
return this.slice(0,Math.max(0,yh));},


takeLast:function(yh){
return rd(this,this.toSeq().reverse().take(yh).reverse());},


takeWhile:function(yh,zh){
return rd(this,hd(this,yh,zh));},


takeUntil:function(yh,zh){
return this.takeWhile(ph(yh),zh);},


valueSeq:function(){
return this.toIndexedSeq();},





hashCode:function(){
return this.__hash||(this.__hash=uh(this));}});















var lh=ba.prototype;
lh[ka]=true;
lh[ta]=lh.values;
lh.__toJS=lh.toArray;
lh.__toStringMapper=rh;
lh.inspect=
lh.toSource=function(){return this.toString();};
lh.chain=lh.flatMap;


(function(){

try{Object.defineProperty(lh,'length',
{get:function(){
if(!ba.noLengthWarning){
var zh;

try{throw new Error();}catch(
ai){
zh=ai.stack;}

if(zh.indexOf('_wrapObject')===-1){
console&&emptyFunction&&




false;
return this.size;}}}});}catch(




yh){}})
();



kh(ca,



{flip:function(){
return rd(this,ad(this));},


findKey:function(yh,zh){
var ai=this.findEntry(yh,zh);
return ai&&ai[0];},


findLastKey:function(yh,zh){
return this.toSeq().reverse().findKey(yh,zh);},


keyOf:function(yh){
return this.findKey(function(zh){return yb(zh,yh);});},


lastKeyOf:function(yh){
return this.findLastKey(function(zh){return yb(zh,yh);});},


mapEntries:function(yh,zh){var ai=this,
bi=0;
return rd(this,
this.toSeq().map
(function(ci,di){return yh.call(zh,[di,ci],bi++,ai);}).
fromEntrySeq());},



mapKeys:function(yh,zh){var ai=this;
return rd(this,
this.toSeq().flip().map
(function(bi,ci){return yh.call(zh,bi,ci,ai);}).
flip());}});





var mh=ca.prototype;
mh[la]=true;
mh[ta]=lh.entries;
mh.__toJS=lh.toObject;
mh.__toStringMapper=function(yh,zh){return JSON.stringify(zh)+': '+rh(yh);};



kh(da,



{toKeyedSeq:function(){
return new wc(this,false);},





filter:function(yh,zh){
return rd(this,dd(this,yh,zh,false));},


findIndex:function(yh,zh){
var ai=this.findEntry(yh,zh);
return ai?ai[0]:-1;},


indexOf:function(yh){
var zh=this.toKeyedSeq().keyOf(yh);
return zh===undefined?-1:zh;},


lastIndexOf:function(yh){
return this.toSeq().reverse().indexOf(yh);},


reverse:function(){
return rd(this,cd(this,false));},


slice:function(yh,zh){
return rd(this,gd(this,yh,zh,false));},


splice:function(yh,zh){
var ai=arguments.length;
zh=Math.max(zh|0,0);
if(ai===0||(ai===2&&!zh))
return this;

yh=y(yh,this.size);
var bi=this.slice(0,yh);
return rd
(this,
ai===1?
bi:
bi.concat(t(arguments,2),this.slice(yh+zh)));},






findLastIndex:function(yh,zh){
var ai=this.toKeyedSeq().findLastKey(yh,zh);
return ai===undefined?-1:ai;},


first:function(){
return this.get(0);},


flatten:function(yh){
return rd(this,kd(this,yh,false));},


get:function(yh,zh){
yh=v(this,yh);
return (yh<0||(this.size===Infinity||
(this.size!==undefined&&yh>this.size)))?
zh:
this.find(function(ai,bi){return bi===yh;},undefined,zh);},


has:function(yh){
yh=v(this,yh);
return yh>=0&&(this.size!==undefined?
this.size===Infinity||yh<this.size:
this.indexOf(yh)!==-1);},



interpose:function(yh){
return rd(this,md(this,yh));},


interleave:function(){
var yh=[this].concat(t(arguments)),
zh=qd(this.toSeq(),eb.of,yh),
ai=zh.flatten(true);
if(zh.size)
ai.size=zh.size*yh.length;

return rd(this,ai);},


last:function(){
return this.get(-1);},


skipWhile:function(yh,zh){
return rd(this,id(this,yh,zh,false));},


zip:function(){
var yh=[this].concat(t(arguments));
return rd(this,qd(this,sh,yh));},


zipWith:function(yh){
var zh=t(arguments);
zh[0]=this;
return rd(this,qd(this,yh,zh));}});




da.prototype[ma]=true;
da.prototype[na]=true;



kh(ea,



{get:function(yh,zh){
return this.has(yh)?yh:zh;},


includes:function(yh){
return this.has(yh);},





keySeq:function(){
return this.valueSeq();}});




ea.prototype.has=lh.includes;




kh(db,ca.prototype);
kh(eb,da.prototype);
kh(fb,ea.prototype);

kh(vb,ca.prototype);
kh(wb,da.prototype);
kh(xb,ea.prototype);




function nh(yh,zh){
return zh;}


function oh(yh,zh){
return [zh,yh];}


function ph(yh){
return function(){
return !yh.apply(this,arguments);};}



function qh(yh){
return function(){
return -yh.apply(this,arguments);};}



function rh(yh){
return typeof yh==='string'?JSON.stringify(yh):yh;}


function sh(){
return t(arguments);}


function th(yh,zh){
return yh<zh?1:yh>zh?-1:0;}


function uh(yh){
if(yh.size===Infinity)
return 0;

var zh=ja(yh),
ai=ga(yh),
bi=zh?1:0,
ci=yh.__iterate
(ai?
zh?
function(di,ei){bi=31*bi+wh(fc(di),fc(ei))|0;}:
function(di,ei){bi=bi+wh(fc(di),fc(ei))|0;}:
zh?
function(di){bi=31*bi+fc(di)|0;}:
function(di){bi=bi+fc(di)|0;});

return vh(ci,bi);}


function vh(yh,zh){
zh=dc(zh,3432918353);
zh=dc(zh<<15|zh>>>-15,461845907);
zh=dc(zh<<13|zh>>>-13,5);
zh=(zh+3864292196|0)^yh;
zh=dc(zh^zh>>>16,2246822507);
zh=dc(zh^zh>>>13,3266489909);
zh=ec(zh^zh>>>16);
return zh;}


function wh(yh,zh){
return yh^zh+2654435769+(yh<<6)+(yh>>2)|0;}


var xh=

{Iterable:ba,

Seq:cb,
Collection:ub,
Map:zd,
OrderedMap:yf,
List:gf,
Stack:eg,
Set:lg,
OrderedSet:tg,

Record:zg,
Range:gh,
Repeat:ih,

is:yb,
fromJS:zb};



return xh;}));}),



null);

/** shared/draft-js/model/entity/DraftEntityInstance.js */










__d('DraftEntityInstance',['immutable'],(function a(b,c,d,e,f,g){

'use strict';var h,i,






j=c('immutable').Record,

k=j
({type:'TOKEN',
mutability:'IMMUTABLE',
data:Object});h=babelHelpers.inherits













(l,k);i=h&&h.prototype;l.prototype.
getType=function(){
return this.get('type');};
l.prototype.

getMutability=function(){
return this.get('mutability');};
l.prototype.

getData=function(){
return this.get('data');};
function l(){h.apply(this,arguments);}


f.exports=l;}),null);

/** shared/draft-js/model/entity/DraftEntity.js */











__d('DraftEntity',['invariant','DraftEntityInstance','immutable'],(function a(b,c,d,e,f,g,h){









var i=c('immutable').Map,

j=i(),
k=0;




function l(n,o){





}






























































var m=








{getLastCreatedEntityKey:function n(){
l
('DraftEntity.getLastCreatedEntityKey',
'contentState.getLastCreatedEntityKey');

return m.__getLastCreatedEntityKey();},












create:function n
(o,
p,
q){

l
('DraftEntity.create',
'contentState.createEntity');

return m.__create(o,p,q);},









add:function n(o){
l
('DraftEntity.add',
'contentState.addEntity');

return m.__add(o);},








get:function n(o){
l
('DraftEntity.get',
'contentState.getEntity');

return m.__get(o);},










mergeData:function n
(o,
p){

l
('DraftEntity.mergeData',
'contentState.mergeEntityData');

return m.__mergeData(o,p);},








replaceData:function n
(o,
p){

l
('DraftEntity.replaceData',
'contentState.replaceEntityData');

return m.__replaceData(o,p);},











__getLastCreatedEntityKey:function n(){
return ''+k;},









__create:function n
(o,
p,
q){

return m.__add
(new (c('DraftEntityInstance'))({type:o,mutability:p,data:q||{}}));},







__add:function n(o){
var p=''+ ++k;
j=j.set(p,o);
return p;},





__get:function n(o){
var p=j.get(o);
!!p||h(0,'Unknown DraftEntity key.');
return p;},







__mergeData:function n
(o,
p){

var q=m.__get(o),
r=babelHelpers['extends']({},q.getData(),p),
s=q.set('data',r);
j=j.set(o,s);
return s;},





__replaceData:function n
(o,
p){

var q=m.__get(o),
r=q.set('data',p);
j=j.set(o,r);
return r;}};



f.exports=m;}),null);

/** shared/draft-js-contrib/mentions/model/getMentionsTextForContentState.js */











__d('getMentionsTextForContentState',['DraftEntity','emptyFunction'],(function a(b,c,d,e,f,g){

'use strict';







var h=c('emptyFunction').thatReturnsTrue,

i=/[\\\]:]/g;





function j
(l){

var m=arguments.length<=1||arguments[1]===undefined?'':arguments[1],
n=l.getBlockMap().map
(function(o){
var p=o.getText(),
q=[];

o.findEntityRanges
(h,
function(r,s){
q.push
(k
(p.slice(r,s),
o.getEntityAt(r)));});





return q.join('');});




return n.join('\n'+m);}


function k
(l,
m){

if(m){
var n=c('DraftEntity').get(m);
if(n.getType()==='MENTION'){
l=l.replace(i,function(p){return '\\'+p;});



var o=n.getData().id;
if(/^\d+$/.test(o))
return '@['+o+':'+l+']';}else

if(n.getType()==='EMOTICON'){
return n.getData().originalEmoticon;}else
if(n.getType()==='EMOJI')
return n.getData().emoji.join('');}


return l.replace('@[','@ [');}


f.exports=j;}),null);

/** shared/draft-js/model/immutable/findRangesImmutable.js */










__d('findRangesImmutable',[],(function a(b,c,d,e,f,g){

'use strict';










function h
(i,
j,
k,
l){

if(!i.size)
return;


var m=0;

i.reduce(function(n,o,p){
if(!j(n,o)){
if(k(n))
l(m,p);

m=p;}

return o;});


k(i.last())&&l(m,i.count());}


f.exports=h;}),null);
