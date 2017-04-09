if (self.CavalryLogger) { CavalryLogger.start_js(["Zj4tF"]); }

/** shared_core/polyfill/__DEV__.js */








self.__DEV__=self.__DEV__||0;

/** shared_core/polyfill/Array.enumerationGuard.js */











'use strict';

/** shared_core/polyfill/Array.es6.js */


/** shared_core/polyfill/Array.js */


/** shared_core/polyfill/Array.prototype.es6.js */


/** shared_core/polyfill/Array.prototype.js */


/** shared_core/polyfill/Number.es6.js */


/** shared_core/polyfill/Array.prototype.es7.js */












(function(){
'use strict';

var a=Array.prototype.indexOf;

if(!Array.prototype.includes)
Array.prototype.includes=function(e){
'use strict';



if(e!==undefined&&
Array.isArray(this)&&
!Number.isNaN(e))

return a.apply(this,arguments)!==-1;



var f=Object(this),
g=f.length?
b(f.length):
0;

if(g===0)
return false;


var h=arguments.length>1?
c(arguments[1]):
0,

i=h<0?
Math.max(g+h,0):
h,

j=Number.isNaN(e);

while(i<g){
var k=f[i];
if(k===e||j&&Number.isNaN(k))
return true;

i++;}

return false;};




function b(e){
return Math.min(Math.max(c(e),0),Number.MAX_SAFE_INTEGER);}



function c(e){
var f=Number(e);
return Number.isFinite(f)&&f!==0?
d(f)*Math.floor(Math.abs(f)):
f;}


function d(e){
return e>=0?
1:
-1;}})

();

/** shared_core/polyfill/GenericFunctionVisitor.js */














(function(){
var a={},

b=function i(j,k){
if(!j&&!k)
return null;


var l={};
if(typeof j!=='undefined')
l.type=j;


if(typeof k!=='undefined')
l.signature=k;


return l;},


c=function i(j,k){
return b
(j&&/^[A-Z]/.test(j)?j:undefined,
k&&(k.params&&k.params.length||k.returns)?
'function('+
(k.params?k.params.map(function(l){
return /\?/.test(l)?
'?'+l.replace('?',''):
l;}).
join(','):'')+
')'+
(k.returns?':'+k.returns:''):
undefined);},



d=function i(j,k,l){
return j;},


e=function i(j,k,l){
if('sourcemeta' in __transform_includes)
j.__SMmeta=k;


if('typechecks' in __transform_includes){
var m=c(k?k.name:undefined,l);
if(m)
__w(j,m);}


return j;},


f=function i(j,k,l){
return l.apply(j,k);},


g=function i(j,k,l,m){
if(m&&m.params)
__t.apply(j,m.params);


var n=l.apply(j,k);

if(m&&m.returns)
__t([n,m.returns]);


return n;},


h=function i(j,k,l,m,n){
if(n){
if(!n.callId)


n.callId=n.module+':'+
(n.line||0)+':'+
(n.column||0);

var o=n.callId;
a[o]=(a[o]||0)+1;}

return l.apply(j,k);};



if(typeof __transform_includes==='undefined'){
__annotator=d;
__bodyWrapper=f;}else{

__annotator=e;

if('codeusage' in __transform_includes){
__annotator=d;
__bodyWrapper=h;
__bodyWrapper.getCodeUsage=function(){return a;};
__bodyWrapper.clearCodeUsage=function(){a={};};}else
if('typechecks' in __transform_includes){
__bodyWrapper=g;}else 

__bodyWrapper=f;}})


();

/** shared_core/polyfill/TypeChecker.js */
__t=function(a){return a[0];};__w=function(a){return a;};

/** shared_core/polyfill/Object.js */


/** shared_core/polyfill/Object.enumFix.js */


/** shared_core/polyfill/Object.es6.js */


/** shared_core/polyfill/iterator.enumerate.js */












(function(a,b){
var c='keys',
d='values',
e='entries',




f=function(){

var l=h(Array),
m=void 0;

if(!l)
m=function(){

function n(o,p){'use strict';
this.$ArrayIterator_iteratedObject=o;
this.$ArrayIterator_kind=p;
this.$ArrayIterator_nextIndex=0;}
n.prototype.


next=function(){'use strict';
if(this.$ArrayIterator_iteratedObject==null)
return {value:b,done:true};


var o=this.$ArrayIterator_iteratedObject,
p=this.$ArrayIterator_iteratedObject.length,
q=this.$ArrayIterator_nextIndex,
r=this.$ArrayIterator_kind;

if(q>=p){
this.$ArrayIterator_iteratedObject=b;
return {value:b,done:true};}


this.$ArrayIterator_nextIndex=q+1;

if(r===c){
return {value:q,done:false};}else
if(r===d){
return {value:o[q],done:false};}else
if(r===e)
return {value:[q,o[q]],done:false};};

n.prototype[typeof Symbol==='function'?


Symbol.iterator:'@@iterator']=function(){'use strict';
return this;};
return n;}();




return {keys:l?
function(n){return n.keys();}:
function(n){return new m(n,c);},

values:l?
function(n){return n.values();}:
function(n){return new m(n,d);},

entries:l?
function(n){return n.entries();}:
function(n){return new m(n,e);}};}

(),






g=function(){

var l=h(String),
m=void 0;

if(!l)
m=function(){

function n(o){'use strict';
this.$StringIterator_iteratedString=o;
this.$StringIterator_nextIndex=0;}
n.prototype.


next=function(){'use strict';
if(this.$StringIterator_iteratedString==null)
return {value:b,done:true};


var o=this.$StringIterator_nextIndex,
p=this.$StringIterator_iteratedString,
q=p.length;

if(o>=q){
this.$StringIterator_iteratedString=b;
return {value:b,done:true};}


var r=void 0,
s=p.charCodeAt(o);

if(s<55296||s>56319||o+1===q){
r=p[o];}else{

var t=p.charCodeAt(o+1);
if(t<56320||t>57343){
r=p[o];}else 

r=p[o]+p[o+1];}



this.$StringIterator_nextIndex=o+r.length;

return {value:r,done:false};};
n.prototype[typeof Symbol==='function'?


Symbol.iterator:'@@iterator']=function(){'use strict';
return this;};
return n;}();




return {keys:function n(){
throw TypeError('Strings default iterator doesn\'t implement keys.');},


values:l?
function(n){return n[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();}:
function(n){return new m(n);},

entries:function n(){
throw TypeError('Strings default iterator doesn\'t implement entries.');}};}



();

function h(l){
return typeof l.prototype[typeof Symbol==='function'?Symbol.iterator:'@@iterator']==='function'&&
typeof l.prototype.values==='function'&&
typeof l.prototype.keys==='function'&&
typeof l.prototype.entries==='function';}








function i(l,m){'use strict';
this.$ObjectIterator_iteratedObject=l;
this.$ObjectIterator_kind=m;
this.$ObjectIterator_keys=Object.keys(l);
this.$ObjectIterator_nextIndex=0;}
i.prototype.

next=function(){'use strict';
var l=this.$ObjectIterator_keys.length,
m=this.$ObjectIterator_nextIndex,
n=this.$ObjectIterator_kind,
o=this.$ObjectIterator_keys[m];

if(m>=l){
this.$ObjectIterator_iteratedObject=b;
return {value:b,done:true};}


this.$ObjectIterator_nextIndex=m+1;

if(n===c){
return {value:o,done:false};}else
if(n===d){
return {value:this.$ObjectIterator_iteratedObject[o],done:false};}else
if(n===e)
return {value:[o,this.$ObjectIterator_iteratedObject[o]],done:false};};

i.prototype[typeof Symbol==='function'?

Symbol.iterator:'@@iterator']=function(){'use strict';
return this;};








var j=
{keys:function l(m){
return new i(m,c);},


values:function l(m){
return new i(m,d);},


entries:function l(m){
return new i(m,e);}};









function k(l,m){


if(typeof l==='string'){
return g[m||d](l);}else
if(Array.isArray(l)){
return f[m||d](l);}else


if(l[typeof Symbol==='function'?Symbol.iterator:'@@iterator']){
return l[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();}else 



return j[m||e](l);}



Object.assign(k,




{KIND_KEYS:c,
KIND_VALUES:d,
KIND_ENTRIES:e,





keys:function l(m){
return k(m,c);},


values:function l(m){
return k(m,d);},


entries:function l(m){
return k(m,e);},


generic:j.entries});



a.FB_enumerate=k;})
(typeof global==='undefined'?this:global);

/** shared_core/polyfill/Collections.es6.js */















(function(a,b){



var c=a.window||a;
function d(){
return 'f'+(Math.random()*(1<<30)).toString(16).replace('.','');}


function e(j){
var k=j?j.ownerDocument||j:document,
l=k.defaultView||c;
return !!(j&&
(typeof l.Node==='function'?j instanceof l.Node:
typeof j==='object'&&
typeof j.nodeType==='number'&&
typeof j.nodeName==='string'));}







function f(j){
var k=c[j];
if(k==null)
return true;






if(typeof c.Symbol!=='function')
return true;


var l=k.prototype;




return k==null||
typeof k!=='function'||
typeof l.clear!=='function'||
new k().size!==0||
typeof l.keys!=='function'||

typeof l['for'+'Each']!=='function';}


var g=a.FB_enumerate,

h=function(){





if(!f('Map'))
return c.Map;

























































var j='key',
k='value',
l='key+value',



m='$map_',



n=void 0,





o='IE_HASH_';











function p(ba){'use strict';
if(!u(this))
throw new TypeError('Wrong map object type.');


t(this);

if(ba!=null){
var ca=g(ba),
da=void 0;
while(!(da=ca.next()).done){
if(!u(da.value))
throw new TypeError('Expected iterable items to be pair objects.');

this.set(da.value[0],da.value[1]);}}}


p.prototype.





clear=function(){'use strict';
t(this);};
p.prototype.








has=function(ba){'use strict';
var ca=r(this,ba);
return !!(ca!=null&&this._mapData[ca]);};
p.prototype.









set=function(ba,ca){'use strict';
var da=r(this,ba);

if(da!=null&&this._mapData[da]){
this._mapData[da][1]=ca;}else{

da=this._mapData.push
([ba,
ca])-
1;
s(this,ba,da);



this.size+=1;}



return this;};
p.prototype.








get=function(ba){'use strict';
var ca=r(this,ba);
if(ca==null){
return b;}else 

return this._mapData[ca][1];};

p.prototype['delete']=









function(ba){'use strict';
var ca=r(this,ba);
if(ca!=null&&this._mapData[ca]){
s(this,ba,b);
this._mapData[ca]=b;



this.size-=1;

return true;}else 

return false;};

p.prototype.








entries=function(){'use strict';
return new q(this,l);};
p.prototype.







keys=function(){'use strict';
return new q(this,j);};
p.prototype.







values=function(){'use strict';
return new q(this,k);};
p.prototype.










forEach=function(ba,ca){'use strict';
if(typeof ba!=='function')
throw new TypeError('Callback must be callable.');


var da=ba.bind(ca||b),
ea=this._mapData;




for(var fa=0;fa<ea.length;fa++){
var ga=ea[fa];
if(ga!=null)
da(ga[1],ga[0],this);}};


p.prototype[typeof Symbol==='function'?


Symbol.iterator:'@@iterator']=function(){'use strict';
return this.entries();};












function q(ba,ca){'use strict';
if(!(u(ba)&&ba._mapData))
throw new TypeError('Object is not a map.');


if([j,l,k].indexOf(ca)===-1)
throw new Error('Invalid iteration kind.');


this._map=ba;
this._nextIndex=0;
this._kind=ca;}
q.prototype.







next=function(){'use strict';
if(!this instanceof p)
throw new TypeError('Expected to be called on a MapIterator.');


var ba=this._map,
ca=this._nextIndex,
da=this._kind;

if(ba==null)
return v(b,true);


var ea=ba._mapData;

while(ca<ea.length){
var fa=ea[ca];

ca+=1;
this._nextIndex=ca;

if(fa)
if(da===j){
return v(fa[0],false);}else
if(da===k){
return v(fa[1],false);}else
if(da)
return v(fa,false);}




this._map=b;

return v(b,true);};
q.prototype[typeof Symbol==='function'?

Symbol.iterator:'@@iterator']=function(){'use strict';
return this;};















function r(ba,ca){
if(u(ca)){
var da=z(ca);
return da?ba._objectIndex[da]:b;}else{

var ea=m+ca;
if(typeof ca==='string'){
return ba._stringIndex[ea];}else 

return ba._otherIndex[ea];}}










function s(ba,ca,da){
var ea=da==null;

if(u(ca)){
var fa=z(ca);
if(!fa)
fa=aa(ca);

if(ea){
delete ba._objectIndex[fa];}else 

ba._objectIndex[fa]=da;}else{


var ga=m+ca;
if(typeof ca==='string'){
if(ea){
delete ba._stringIndex[ga];}else 

ba._stringIndex[ga]=da;}else

if(ea){
delete ba._otherIndex[ga];}else 

ba._otherIndex[ga]=da;}}









function t(ba){






ba._mapData=[];







ba._objectIndex={};


ba._stringIndex={};


ba._otherIndex={};






































ba.size=0;}








function u(ba){
return ba!=null&&(typeof ba==='object'||typeof ba==='function');}









function v(ba,ca){
return {value:ba,done:ca};}



p.__isES5=function(){

try{Object.defineProperty({},'__.$#x',{});
return true;}catch(
ba){
return false;}}

();







function w(ba){
if(!p.__isES5||!Object.isExtensible){
return true;}else 

return Object.isExtensible(ba);}











function x(ba){
var ca=void 0;
switch(ba.nodeType){
case 1:
ca=ba.uniqueID;
break;
case 9:
ca=ba.documentElement.uniqueID;
break;

default:return null;}


if(ca){
return o+ca;}else 

return null;}



var y=d();






function z(ba){
if(ba[y]){
return ba[y];}else
if(!p.__isES5&&
ba.propertyIsEnumerable&&
ba.propertyIsEnumerable[y]){
return ba.propertyIsEnumerable[y];}else
if(!p.__isES5&&
e(ba)&&
x(ba)){
return x(ba);}else
if(!p.__isES5&&ba[y])
return ba[y];}



var aa=function(){
var ba=Object.prototype.propertyIsEnumerable,
ca=0;







return function da(ea){
if(w(ea)){
ca+=1;
if(p.__isES5){
Object.defineProperty(ea,y,
{enumerable:false,
writable:false,
configurable:false,
value:ca});}else

if(ea.propertyIsEnumerable){




ea.propertyIsEnumerable=function(){
return ba.apply(this,arguments);};

ea.propertyIsEnumerable[y]=ca;}else
if(e(ea)){




ea[y]=ca;}else 

throw new Error('Unable to set a non-enumerable property on object.');

return ca;}else 

throw new Error('Non-extensible objects are not allowed as keys.');};}


();




return __annotator(p,{name:'Map'});}
(),

i=function(){





if(!f('Set'))
return c.Set;






















































function j(l){'use strict';
if(this==null||
typeof this!=='object'&&typeof this!=='function')
throw new TypeError('Wrong set object type.');


k(this);

if(l!=null){
var m=g(l),
n=void 0;
while(!(n=m.next()).done)
this.add(n.value);}}


j.prototype.









add=function(l){'use strict';
this._map.set(l,l);
this.size=this._map.size;
return this;};
j.prototype.






clear=function(){'use strict';
k(this);};
j.prototype['delete']=










function(l){'use strict';
var m=this._map['delete'](l);
this.size=this._map.size;
return m;};
j.prototype.






entries=function(){'use strict';
return this._map.entries();};
j.prototype.








forEach=function(l){'use strict';
var m=arguments[1],
n=this._map.keys(),
o=void 0;
while(!(o=n.next()).done)
l.call(m,o.value,o.value,this);};

j.prototype.









has=function(l){'use strict';
return this._map.has(l);};
j.prototype.






values=function(){'use strict';
return this._map.values();};
j.prototype.




keys=function(){'use strict';
return this.values();};
j.prototype[typeof Symbol==='function'?


Symbol.iterator:'@@iterator']=function(){'use strict';
return this.values();};



function k(l){
l._map=new h();
l.size=l._map.size;}





return __annotator(j,{name:'Set'});}
();

a.Map=h;
a.Set=i;})
(typeof global==='undefined'?this:global);

/** shared_core/polyfill/Date.js */


/** shared_core/polyfill/Date.prototype.toISOString.js */


/** shared_core/polyfill/Function.prototype.js */


/** shared_core/polyfill/Function.prototype-shield.js */






























/** shared_core/polyfill/JSON-shield.js */




















if(typeof window!=='undefined'&&
window.JSON&&
JSON.stringify(['\u2028\u2029'])==='["\u2028\u2029"]')

JSON.stringify=function(a){

var b=/\u2028/g,
c=/\u2029/g;

return function d(e,f,g){
var h=a.call(this,e,f,g);
if(h){
if(-1<h.indexOf('\u2028'))
h=h.replace(b,'\\u2028');

if(-1<h.indexOf('\u2029'))
h=h.replace(c,'\\u2029');}


return h;};}

(JSON.stringify);

/** shared_core/polyfill/JSON.parse.js */


/** shared_core/polyfill/Math.es6.js */


/** shared_core/polyfill/Object.es7.js */







(function(){

var a=Object.prototype.hasOwnProperty;






if(typeof Object.entries!=='function')
Object.entries=function(b){

if(b==null)
throw new TypeError('Object.entries called on non-object');


var c=[];
for(var d in b)
if(a.call(b,d))
c.push([d,b[d]]);


return c;};








if(typeof Object.values!=='function')
Object.values=function(b){

if(b==null)
throw new TypeError('Object.values called on non-object');


var c=[];
for(var d in b)
if(a.call(b,d))
c.push(b[d]);


return c;};})



();

/** shared_core/polyfill/Object.is.js */


/** shared_core/polyfill/Object.prototype.js */


/** shared_core/polyfill/SourceMetaAnnotator.js */









(function(a){
a.__m=function(b,c){
b.__SMmeta=c;
return b;};})

(this);

/** shared_core/polyfill/String.es6.js */


/** shared_core/polyfill/String.prototype.es6.js */


/** shared_core/polyfill/String.prototype.contains.js */
















if(!String.prototype.contains)
String.prototype.contains=String.prototype.includes;

/** shared_core/polyfill/String.prototype.es7.js */







if(!String.prototype.trimLeft)
String.prototype.trimLeft=function(){
return this.replace(/^\s+/,'');};



if(!String.prototype.trimRight)
String.prototype.trimRight=function(){
return this.replace(/\s+$/,'');};

/** shared_core/polyfill/String.prototype.js */


/** shared_core/polyfill/String.prototype.split.js */


/** shared_core/polyfill/babelHelpers.js */












(function(a){

var b=a.babelHelpers={},
c=Object.prototype.hasOwnProperty;




b.inherits=function(d,e){
Object.assign(d,e);
d.prototype=Object.create(e&&e.prototype);
d.prototype.constructor=d;
d.__superConstructor__=e;
return e;};





b._extends=Object.assign;




b['extends']=b._extends;




b.objectWithoutProperties=function(d,e){
var f={};
for(var g in d){
if(!c.call(d,g)||e.indexOf(g)>=0)
continue;

f[g]=d[g];}

return f;};





b.taggedTemplateLiteralLoose=function(d,e){
d.raw=e;
return d;};





b.bind=Function.prototype.bind;})

(typeof global==='undefined'?self:global);

/** shared_core/polyfill/console.js */


/** shared_core/polyfill/performance.js */







(function(a){
var b=a.performance;
if(b&&b.setResourceTimingBufferSize){
b.setResourceTimingBufferSize(100000);
b.onresourcetimingbufferfull=function(){
a.__isresourcetimingbufferfull=true;};

b.setResourceTimingBufferSize=function(){



};}})

(this);

/** shared_core/polyfill/require.js */


































(function a(b){


if(b.require)
return;


var c=null,





d=[],

e={},





f={},

g=0,
h=0,
i=0,

j=1,
k=2,
l=4,
m=8,


n={},

o=Object.prototype.hasOwnProperty,
p=Object.prototype.toString;

function q(cb){
var db=Array.prototype.slice.call(cb),
eb={},
fb,gb,hb,ib;

while(db.length){
gb=db.shift();
if(eb[gb])
continue;

eb[gb]=true;

hb=e[gb];
if(!hb||qa(hb))
continue;


if(hb.dependencies)
for(fb=0;fb<hb.dependencies.length;fb++){
ib=hb.dependencies[fb];
if(!qa(ib))
db.push(ib.id);}}





for(gb in eb)
if(o.call(eb,gb))
db.push(gb);



var jb=[];
for(fb=0;fb<db.length;fb++){
gb=db[fb];
var kb=gb;
hb=e[gb];
if(!hb||!hb.dependencies){
kb+=' is not defined';}else
if(qa(hb)){
kb+=' is ready';}else{

var lb=[];
for(var mb=0;mb<hb.dependencies.length;mb++){
ib=hb.dependencies[mb];
if(!e[ib]||!qa(e[ib]))
lb.push(ib.id);}


kb+=' is waiting for '+lb.join(', ');}

jb.push(kb);}

return jb.join('\n');}





function r(cb){
this.name='ModuleError';
this.message=cb;
this.stack=Error(cb).stack;
this.framesToPop=2;}

r.prototype=Object.create(Error.prototype);
r.prototype.constructor=r;

var s=(b.Env||{}).profile_require_factories,
t=
b.performance||
b.msPerformance||
b.webkitPerformance||{},
u;


if(t.now&&
t.timing&&
t.timing.navigationStart){

var v=t.timing.navigationStart;
u=function cb(){
return t.now()+v;};}else 


u=function cb(){
return Date.now();};



var w=0,
x=0;
























































function y(cb){
x++;

var db=e[cb];
if(db&&db.exports!=null){


if(db.refcount--===1)
e[cb]=void 0;

return db.exports;}


return aa(cb);}


function z(cb){
var db=e[cb],
eb=f[cb];
if(db.factoryLength===-1){
var fb=s&&b.ProfilingCounters,
gb,
hb;
if(fb)
gb=fb.startTiming('FACTORY_COMPILE_TIME');


db.factoryLength=db.factory.length;

if(gb!=null){
hb=fb.stopTiming(gb);





eb.compileTime+=hb;}}


return db.factoryLength;}


function aa(cb){
if(b.ErrorUtils&&!b.ErrorUtils.inGuard())
return b.ErrorUtils.applyWithGuard(aa,null,[cb]);


var db=e[cb];

if(!db){
var eb='Requiring unknown module "'+cb+'"';



throw new r(eb);}


if(db.hasError)
throw new r
('Requiring module "'+cb+'" which threw an exception');



if(!qa(db))
throw new r
('Requiring module "'+cb+'" with unresolved dependencies: '+
q([cb]));



var fb=db.exports={},
gb=db.factory;
if(p.call(gb)==='[object Function]'){

var hb=db.dependencies,
ib=hb.length,
jb;



try{try{ua(db);}catch(
kb){
ba(kb,cb);}


var lb=[],
mb=ib;

if(db.special&m){
lb=c.slice(0);
lb[c.length-2]=db;
lb[c.length-1]=fb;
mb+=lb.length;}

if(db.special&k){
var nb=z(cb);
mb=Math.min(ib+lb.length,nb);}



for(var ob=0;ob<ib;ob++){
var pb=hb[ob];
if(lb.length<mb)

lb.push(y.call(null,pb.id));}




++w;
var qb=s&&b.ProfilingCounters,
rb;
if(qb){
qb.incrementCounter('FACTORY_COUNT',1);
rb=qb.startTiming('FACTORY_EXEC_TIME');}



try{jb=gb.apply(db.context||b,lb);}catch(
kb){
ba(kb,cb);}finally{

if(s){
var sb=u(),
tb=0;
if(rb!=null)
tb=qb.stopTiming(rb);


var ub=f[db.id];
ub.factoryTime=tb;
ub.factoryEnd=sb;

if(gb.__SMmeta)
for(var vb in gb.__SMmeta)
if(Object.prototype.hasOwnProperty.call(gb.__SMmeta,vb))
ub[vb]=gb.__SMmeta[vb];}}}catch(





kb){
db.hasError=true;
db.exports=null;
throw kb;}

if(jb)









db.exports=jb;

if(typeof db.exports==='function'){
var wb=db.exports,
xb=wb.__superConstructor__;




if(!wb.displayName||
xb&&xb.displayName===wb.displayName)

wb.displayName=(wb.name||'(anonymous)')+' [from '+cb+']';}


db.factoryFinished=true;}else 

db.exports=gb;



var yb='__isRequired__'+cb,
zb=e[yb];
if(zb&&!qa(zb))
ha(yb,n);




if(db.refcount--===1)
e[cb]=void 0;


return db.exports;}


function ba(cb,db){
if(!(cb instanceof Error))
cb=new Error(cb);

if(e.ex&&e.erx){


var eb=y.call(null,'ex'),
fb=y.call(null,'erx'),
gb=fb(cb.message);
if(gb[0].indexOf(' from module "%s"')<0){
gb[0]+=' from module "%s"';
gb[gb.length]=db;}

cb.message=eb.apply(null,gb);}

throw cb;}


function ca(){
var cb=0;
for(var db in f)
if(Object.prototype.hasOwnProperty.call(f,db))
cb+=f[db].factoryTime;


return cb;}


function da(){
var cb=0;
for(var db in f)
if(Object.prototype.hasOwnProperty.call(f,db))
cb+=f[db].compileTime;


return cb;}


function ea(){
return w;}


function fa(){
return x;}


function ga(){
var cb={};
for(var db in f)
if(Object.prototype.hasOwnProperty.call(f,db))
cb[db]=f[db];


return cb;}

























































function ha
(cb,
db,
eb,
fb,
gb,
hb,
ib){

if(db===undefined){

db=[];
eb=cb;
cb=ma();}else
if(eb===undefined){

eb=db;
if(p.call(cb)==='[object Array]'){
db=cb;
cb=ma(db.join(','));}else 

db=[];}





var jb={cancel:ka.bind(this,cb)},

kb=e[cb];

if(!db&&!eb&&hb){


ia(cb).refcount+=hb;
return jb;}





















f[cb]=
{id:cb,
dependencies:db,
meta:ib,
category:fb,
defined:s?u():null,
compileTime:null,
factoryTime:null,
factoryEnd:null};


var lb=db.map(ia);

kb=e[cb];

if(kb){
if(kb.dependencies)
return jb;


if(hb)
kb.refcount+=hb;

kb.factory=eb;
kb.dependencies=lb;
kb.context=gb;
kb.special=fb;}else{

kb=new ja
(cb,
hb||0,
null,
eb,
lb,
gb,
fb);

e[cb]=kb;}


ta(kb);

if(d.length>0){
var mb=d;
d=[];
while(mb.length>0)

y.call(null,mb.pop().id);}




return jb;}


function ia(cb){
var db=e[cb];
if(db)
return db;


db=new ja(cb,0);
e[cb]=db;
return db;}


function ja
(cb,
db,
eb,
fb,
gb,
hb,
ib){

this.id=cb;
this.refcount=db;
this.exports=eb||null;
this.factory=fb;
this.factoryLength=-1;
this.factoryFinished=false;
this.dependencies=gb;
this.depPosition=0;
this.context=hb;
this.special=ib||0;
this.hasError=false;
this.ranRecursiveSideEffects=false;
this.sideEffectDependencyException=null;
this.nextDepWaitingHead=null;
this.nextDepWaitingNext=null;
this.tarjanGeneration=-1;
this.tarjanLow=0;
this.tarjanIndex=0;
this.tarjanOnStack=false;}


function ka(cb){
if(!e[cb])
return;


var db=e[cb];
e[cb]=void 0;

if(db.dependencies)
for(var eb=0;eb<db.dependencies.length;eb++){
var fb=db.dependencies[eb];
if(fb.refcount--===1)
ka(fb.id);}}














































function la(cb,db,eb){

return ha
('__requireLazy__'+
(cb.length>0?cb.join(',')+'__':'')+
g++,
cb,
bb()(db,'requireLazy'),
j,
eb,
1);}





function ma(cb){
return '__mod__'+(cb?cb+'__':'')+g++;}




function na(cb,db,eb){
if(eb.tarjanGeneration!=h){
eb.tarjanGeneration=h;
eb.tarjanLow=eb.tarjanIndex=i++;
eb.tarjanOnStack=true;
db.push(eb);}


if(eb.dependencies!=null)

for(var fb=eb.depPosition;
fb<eb.dependencies.length;
fb++){

var gb=eb.dependencies[fb];
if(gb.tarjanGeneration!=h){

na(cb,db,gb);
eb.tarjanLow=Math.min
(eb.tarjanLow,gb.tarjanLow);}else

if(gb.tarjanOnStack)
eb.tarjanLow=Math.min
(eb.tarjanLow,gb.tarjanIndex);}





if(eb.tarjanLow==eb.tarjanIndex){
var hb=[],
ib=void 0;

do{ib=db.pop();
ib.tarjanOnStack=false;
hb.push(ib);

if(eb==db[0]&&
ib!=eb&&
ib.dependencies!=null)





for(var jb=ib.depPosition;
jb<ib.dependencies.length;
jb++){

var kb=ib.dependencies[jb];
if(!qa(kb)&&
cb.indexOf(kb)==-1&&


db.indexOf(kb)==-1&&
hb.indexOf(kb)==-1)
cb.push(kb);}}while(



ib!=eb);}}



function oa(cb){

h++;




na
(cb.dependencies,
[],
cb);


cb.depPosition++;
ta(cb);}


function pa(cb,db){





var eb=db;
while(true){

if(eb.dependencies&&
eb.depPosition!=eb.dependencies.length){

eb=eb.dependencies[eb.depPosition];}else 

break;

if(eb==cb){


oa(cb);
return;}}



cb.nextDepWaitingNext=db.nextDepWaitingHead;
db.nextDepWaitingHead=cb;}


function qa(cb){
return cb.dependencies!=null&&
cb.depPosition>=cb.dependencies.length;}


function ra(cb){
cb.depPosition++;
ta(cb);}


function sa(cb){
var db=cb.nextDepWaitingHead;
cb.nextDepWaitingHead=null;
while(db!==null){

var eb=db;
db=eb.nextDepWaitingNext;
eb.nextDepWaitingNext=null;
var fb=!e[eb.id];
if(!fb)
ra(eb);}}




function ta(cb){

while(cb.depPosition<cb.dependencies.length){
var db=cb.dependencies[cb.depPosition],
eb=qa(db);

if(!eb&&cb!=db){
pa(cb,db);
return;}

cb.depPosition++;}







if(cb.special&j)
d.push(cb);




if(cb.nextDepWaitingHead!==null)
sa(cb);}








function ua(cb){
if(cb.sideEffectDependencyException)
throw cb.sideEffectDependencyException;


if(cb.ranRecursiveSideEffects)
return;


cb.ranRecursiveSideEffects=true;

var db=cb.dependencies;
if(db)
for(var eb=0;eb<db.length;eb++){
var fb=db[eb];


try{ua(fb);}catch(
gb){
cb.sideEffectDependencyException=gb;
throw gb;}


if(fb.special&l)


try{y.call(null,fb.id);}catch(

gb){
cb.sideEffectDependencyException=gb;
throw gb;}}}






function va(cb,db){

e[cb]=new ja(cb,0,db);
f[cb]=
{id:cb,
dependencies:[],
category:0,
compileTime:null,
factoryLengthAccessTime:null,
factoryTime:null,
factoryEnd:null};}





va('module',0);
va('exports',0);

va('define',ha);
va('global',b);
va('require',y);
va('requireDynamic',wa);
va('requireLazy',la);
va('requireWeak',xa);
va('ifRequired',ya);


c=
[y.call(null,'global'),
y.call(null,'require'),
y.call(null,'requireDynamic'),
y.call(null,'requireLazy'),
null,
null];



ha.amd={};

b.define=ha;
b.require=y;
b.requireDynamic=wa;
b.requireLazy=la;

function wa(cb,db){
throw new ReferenceError('requireDynamic is not defined');}


function xa(cb,db){


ya.call(null,cb,function(eb){
db(eb);},
function(){

ha
('__requireWeak__'+cb+'__'+g++,
['__isRequired__'+cb],
bb()(function(){
db(e[cb].exports);},
'requireWeak'),
j,
null,
1);});}











function ya(cb,db,eb){
var fb=e[cb];
if(fb&&fb.factoryFinished){
if(typeof db==='function')
return db(fb.exports);}else

if(typeof eb==='function')
return eb();}



var za=




{getModules:function cb(){
var db={};
for(var eb in e)
if(e[eb]&&Object.prototype.hasOwnProperty.call(e,eb))
db[eb]=e[eb];


return db;},




modulesMap:e,
debugUnresolvedDependencies:q};






















































































































































































































































function ab(cb){
return cb;}


function bb(){

return b.TimeSlice&&b.TimeSlice.guard||ab;}


va('__getFactoryTime',ca);
va('__getCompileTime',da);
va('__getTotalFactories',ea);
va('__getTotalRequireCalls',fa);
va('__getModuleTimeDetails',ga);
va('__debug',za);







b.__d=function(cb,db,eb,fb){
bb()(function gb(){
ha
(cb,
db,
eb,

(fb||k)|m,

null,
null,
null);},

'define '+cb,{root:true})();};})


(this);

/** shared_core/error/eprintf.js */






__d('eprintf',[],(function a(b,c,d,e,f,g){








function h(i){for(var j=arguments.length,k=Array(j>1?j-1:0),l=1;l<j;l++)k[l-1]=arguments[l];
var m=k.map(function(p){return String(p);}),
n=i.split('%s').length-1;

if(n!==m.length)

return h
('eprintf args number mismatch: %s',
JSON.stringify([i].concat(m)));



var o=0;
return i.replace(/%s/g,function(){return String(m[o++]);});}


f.exports=h;}),null);

/** shared_core/error/ex.js */






__d('ex',['eprintf'],(function a(b,c,d,e,f,g){

















function h(i){for(var j=arguments.length,k=Array(j>1?j-1:0),l=1;l<j;l++)k[l-1]=arguments[l];
var m=k.map(function(o){return String(o);}),
n=i.split('%s').length-1;
if(n!==m.length)

return h('ex args number mismatch: %s',JSON.stringify([i].concat(m)));





return h._prefix+JSON.stringify([i].concat(m))+h._suffix;}




h._prefix='<![EX[';
h._suffix=']]>';

f.exports=h;}),null);

/** shared/core/$-core.js */





__d('$-core',['ex'],(function a(b,c,d,e,f,g){












function h(j){
var k=typeof j==='string'?document.getElementById(j):j;
if(!k)
throw new Error(c('ex')
('Tried to get element with id of "%s" but it is not present on the page.',
j));


return k;}








function i(j){
return h(j);}









i.unsafe=h;

f.exports=i;}),null);

/** js/core/$.js */




__d('$',['$-core'],(function a(b,c,d,e,f,g){

f.exports=c('$-core');}),null);

/** shared_core/env/Env.js */





__d("Env",[],(function a(b,c,d,e,f,g){

var h=
{start:Date.now(),
nocatch:b.FB_GKS&&b.FB_GKS.js_nocatch};




if(b.Env)
Object.assign(h,b.Env);


b.Env=h;

f.exports=h;}),null);

/** shared_core/error/erx.js */






__d('erx',['ex'],(function a(b,c,d,e,f,g){

















function h(i){
if(typeof i!=='string')

return i;


var j=i.indexOf(c('ex')._prefix),
k=i.lastIndexOf(c('ex')._suffix);
if(j<0||k<0)

return [i];


var l=j+c('ex')._prefix.length,
m=k+c('ex')._suffix.length;
if(l>=k)
return ['erx slice failure: %s',i];


var n=i.substring(0,j),
o=i.substring(m);
i=i.substring(l,k);


try{var q=JSON.parse(i);
q[0]=n+q[0]+o;
return q;}catch(
p){
return ['erx parse failure: %s',i];}}



f.exports=h;}),null);

/** shared_core/core_windowless/removeFromArray.js */






__d("removeFromArray",[],(function a(b,c,d,e,f,g){




function h(i,j){
var k=i.indexOf(j);
if(k!==-1)
i.splice(k,1);}



f.exports=h;}),null);

/** shared_core/error/ErrorUtils.js */







__d('ErrorUtils',['Env','eprintf','erx','removeFromArray'],(function a(b,c,d,e,f,g){









var h='<anonymous guard>',
i='<generated guard>',
j=typeof window==='undefined'?
'<self.onerror>':
'<window.onerror>',

k=/^https?:\/\//i,
l=/^Type Mismatch for/,

m=/(.*)[@\s][^\s]+$/,


n=[],


o=void 0,


p=[],
q=50,

r=[],


s=false,



t=false,

u=location.search.indexOf('nocatch')!==-1,




v=
['Unknown script code',
'Function code',
'eval code'];


if(c('Env').long_stack_traces&&Error.stackTraceLimit!=null)
Error.stackTraceLimit=100;



























function w(ha){
var ia=ha.columnNumber||ha.column;
return ia!=null?String(ia):'';}


function x(ha){
return ha[0]&&ha[0].column||'';}


function y(ha){
for(var ia=0;ia<v.length;ia++){
var ja=' '+v[ia];
if(ha.endsWith(ja))
return [ha,ha.substring(0,ha.length-ja.length)];}


return null;}


function z(ha){
var ia=ha.lineNumber||ha.line;
return ia!=null?String(ia):'';}


function aa(ha){
return ha[0]&&ha[0].line||'';}


function ba(ha){
var ia=ha.fileName||ha.sourceURL;
return ia!=null?String(ia):'';}


function ca(ha){
return ha[0]&&ha[0].script||'';}






function da(ha){
if(!ha)
return [];

return ha.split(/\n\n/)[0].
replace(/[\(\)]|\[.*?\]|^[\w \.]+:\s.*?\n/g,'').
split('\n').
map(function(ia){

ia=ia.trim();


var ja=void 0,
ka=void 0,
la=ia.match(/:(\d+)(?::(\d+))?$/);
if(la){
ja=la[1];
ka=la[2];
ia=ia.slice(0,-la[0].length);}




var ma=void 0,
na=y(ia)||
ia.match(m);
if(na){
ia=ia.substring(na[1].length+1);
var oa=
na[1].match(/(?:at)?\s*(.*)(?:[^\s]+|$)/);
ma=oa?oa[1]:'';}



if(ia.includes('charset=utf-8;base64,'))
ia='<inlined-file>';


var pa=
{column:ka,
identifier:ma,
line:ja,
script:ia};


if(o)
o(pa);



var qa='    at'+
(pa.identifier?' '+pa.identifier+' (':' ')+
pa.script+
(pa.line?':'+pa.line:'')+
(pa.column?':'+pa.column:'')+
(pa.identifier?')':'');

return babelHelpers['extends']({},
pa,
{text:qa});});}




function ea(ha){
r.unshift(ha);
s=true;}


function fa(){
r.shift();
s=r.length!==0;}


var ga=
{ANONYMOUS_GUARD_TAG:h,
GENERATED_GUARD_TAG:i,
GLOBAL_ERROR_HANDLER_TAG:j,
history:p,









addListener:function ha
(ia){

var ja=arguments.length<=1||arguments[1]===undefined?false:arguments[1];
n.push(ia);

if(!ja)
p.forEach(ia);},








removeListener:function ha(ia){
c('removeFromArray')(n,ia);},







setSourceResolver:function ha(ia){
o=ia;},














applyWithGuard:function ha
(ia,
ja,
ka,
la,
ma){

ea(ma||h);




if(c('Env').nocatch)
u=true;


if(u){
var na=void 0;

try{na=ia.apply(ja,ka||[]);}finally{




fa();}

return na;}




try{return ia.apply(ja,ka||[]);}catch(
oa){
var pa=ga.normalizeError(oa);
if(la)
la(pa);



if(ia)
pa.callee=ia.toString().substring(0,100);

if(ka)
pa.args=Array.from(ka).toString().substring(0,100);

pa.guard=r[0];
pa.guardList=r.slice();












ga.reportError(pa);}finally{

fa();}},














guard:function ha
(ia,
ja,
ka){

ja=ja||ia.name||i;
function la(){
return ga.applyWithGuard
(ia,
ka||this,
arguments,
null,
ja);}



if(ia.__SMmeta)
la.__SMmeta=ia.__SMmeta;






return la;},



inGuard:function ha(){
return s;},










normalizeError:function ha(ia){
if(ia._originalError)
return ia;


var ja=da(ia.stackTrace||ia.stack),
ka=false;

if(ia.framesToPop){

var la=ia.framesToPop,
ma=void 0;
while(la>0&&ja.length>0){
ma=ja.shift();
la--;
ka=true;}


if(l.test(ia.message)&&
ia.framesToPop===2&&
ma)






if(k.test(ma.script))
ia.message+=' at '+ma.script+
(ma.line?':'+ma.line:'')+
(ma.column?':'+ma.column:'');}







var na=
{_originalError:ia,
column:ka?
x(ja):
w(ia)||x(ja),
extra:ia.extra,
guard:ia.guard,
guardList:ia.guardList,
line:ka?
aa(ja):
z(ia)||aa(ja),
message:ia.message,
messageWithParams:ia.messageWithParams,
name:ia.name,
script:ka?
ca(ja):
ba(ia)||ca(ja),
snapshot:ia.snapshot,
stack:ja.map(function(pa){return pa.text;}).join('\n'),
stackFrames:ja,
type:ia.type};


if(typeof na.message==='string'){


na.messageWithParams=na.messageWithParams||c('erx')(na.message);}else{


na.messageObject=na.message;
na.message=String(na.message)+' ('+typeof na.message+')';}


if(na.messageWithParams)

na.message=c('eprintf').apply(undefined,na.messageWithParams);


if(typeof window!=='undefined'&&window&&window.location)
na.windowLocationURL=window.location.href;




if(o)
o(na);



for(var oa in na)
if(na[oa]==null)
delete na[oa];


return na;},












onerror:function ha
(ia,
ja,
ka,
la,
ma){

ma=ma||{};
ma.message=ma.message||ia;
ma.script=ma.script||ja;
ma.line=ma.line||ka;
ma.column=ma.column||la;
ma.guard=j;
ma.guardList=[j];
ga.reportError(ma,true);},






reportError:function ha
(ia){

var ja=arguments.length<=1||arguments[1]===undefined?false:arguments[1];
if(t)


return false;




if(r.length>0){
ia.guard=ia.guard||r[0];
ia.guardList=r.slice();}


var ka=ga.normalizeError(ia);
!ja;














if(p.length>q)
p.splice(q/2,1);

p.push(ka);

t=true;
for(var la=0;la<n.length;la++)

try{n[la](ka);}catch(
ma){
}


t=false;
return true;}};



b.onerror=ga.onerror;

f.exports=b.ErrorUtils=ga;


if(typeof __t==='function'&&__t.setHandler)
__t.setHandler(ga.reportError);}),
3);

/** shared/core/Map.js */





__d('Map',[],(function a(b,c,d,e,f,g){






'use strict';

f.exports=function(h){

return h.Map;}
(b);}),null);

/** shared/core/Set.js */





__d('Set',[],(function a(b,c,d,e,f,g){






'use strict';

f.exports=function(h){

return h.Set;}
(b);}),null);

/** shared/callback_manager/CallbackDependencyManager.js */








































__d('CallbackDependencyManager',['ErrorUtils','Map','Set'],(function a(b,c,d,e,f,g){




















function h(){'use strict';
this.$CallbackDependencyManager_callbackDependencyCounts=new (c('Map'))();
this.$CallbackDependencyManager_callbacks=new (c('Map'))();
this.$CallbackDependencyManager_lastCallbackID=1;
this.$CallbackDependencyManager_satisfiedDependencies=new (c('Map'))();}
h.prototype.

$CallbackDependencyManager_addDependenciesToCallback=
function(i,
j){
'use strict';
var k=0,
l=new (c('Set'))();

for(var m=0,n=j.length;m<n;m++)
l.add(j[m]);


for(var o=l.keys(),p=Array.isArray(o),q=0,o=p?o:o[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var r;if(p){if(q>=o.length)break;r=o[q++];}else{q=o.next();if(q.done)break;r=q.value;}var s=r;
if(this.$CallbackDependencyManager_satisfiedDependencies.get(s))
continue;

k++;


var t=this.$CallbackDependencyManager_callbackDependencyCounts.get(s);
if(t===undefined){
t=new (c('Map'))();
this.$CallbackDependencyManager_callbackDependencyCounts.set(s,t);}

t.set(i,(t.get(i)||0)+1);}


return k;};
h.prototype.

$CallbackDependencyManager_resolveCallbacksForDependency=function(i){'use strict';
var j=this.$CallbackDependencyManager_callbackDependencyCounts.get(i);
if(!j)
return;


for(var k=j.entries(),l=Array.isArray(k),m=0,k=l?k:k[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var n;if(l){if(m>=k.length)break;n=k[m++];}else{m=k.next();if(m.done)break;n=m.value;}var o=n,
p=o[0],
q=o[1]-1;
j.set(p,q);

if(q<=0)
j['delete'](p);


var r=this.$CallbackDependencyManager_callbacks.get(p);
if(r!==undefined){
r.$CallbackDependencyManager_pendingDepCount--;

if(r.$CallbackDependencyManager_pendingDepCount<=0){
var s=r.$CallbackDependencyManager_callback;
this.$CallbackDependencyManager_callbacks['delete'](p);
c('ErrorUtils').applyWithGuard(s);}}}};



h.prototype.

addDependenciesToExistingCallback=
function(i,
j){
'use strict';
var k=this.$CallbackDependencyManager_callbacks.get(i);
if(!k)
return null;

var l=this.$CallbackDependencyManager_addDependenciesToCallback
(i,
j);

k.$CallbackDependencyManager_pendingDepCount+=l;
return i;};
h.prototype.

isPersistentDependencySatisfied=function(i){'use strict';
return !!this.$CallbackDependencyManager_satisfiedDependencies.get(i);};
h.prototype.





satisfyPersistentDependency=function(i){'use strict';
this.$CallbackDependencyManager_satisfiedDependencies.set(i,1);
this.$CallbackDependencyManager_resolveCallbacksForDependency(i);};
h.prototype.





satisfyNonPersistentDependency=function(i){'use strict';
var j=this.$CallbackDependencyManager_satisfiedDependencies.get(i)===1;
if(!j)
this.$CallbackDependencyManager_satisfiedDependencies.set(i,1);

this.$CallbackDependencyManager_resolveCallbacksForDependency(i);
if(!j)
this.$CallbackDependencyManager_satisfiedDependencies['delete'](i);};

h.prototype.

registerCallback=function(i,j){'use strict';
var k=this.$CallbackDependencyManager_lastCallbackID;
this.$CallbackDependencyManager_lastCallbackID++;
var l=this.$CallbackDependencyManager_addDependenciesToCallback(k,j);




if(l===0){
c('ErrorUtils').applyWithGuard(i);
return null;}


this.$CallbackDependencyManager_callbacks.set(k,
{$CallbackDependencyManager_callback:i,
$CallbackDependencyManager_pendingDepCount:l});


return k;};
h.prototype.

unsatisfyPersistentDependency=function(i){'use strict';
this.$CallbackDependencyManager_satisfiedDependencies['delete'](i);};



f.exports=h;}),null);

/** shared/emitter/EventSubscription.js */





__d('EventSubscription',[],(function a(b,c,d,e,f,g){

'use strict';














function h(i){
this.subscriber=i;}
h.prototype.




remove=function(){
if(this.subscriber){
this.subscriber.removeSubscription(this);
this.subscriber=null;}};




f.exports=h;}),null);

/** shared/emitter/EmitterSubscription.js */





__d('EmitterSubscription',['EventSubscription'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits








(j,c('EventSubscription'));i=h&&h.prototype;











function j
(k,
l,
m){

i.constructor.call(this,k);
this.listener=l;
this.context=m;}



f.exports=j;}),null);

/** shared_core/core_windowless/sprintf.js */





__d("sprintf",[],(function a(b,c,d,e,f,g){










function h(i){for(var j=arguments.length,k=Array(j>1?j-1:0),l=1;l<j;l++)k[l-1]=arguments[l];
var m=0;
return i.replace(/%s/g,function(){return String(k[m++]);});}


f.exports=h;}),null);

/** shared_core/core_windowless/invariant.js */





__d('invariant',['ex','sprintf'],(function a(b,c,d,e,f,g){



'use strict';




var h=c('ex');














function i
(j,
k){


if(!j){
var l=void 0;
if(k===undefined){




l=new Error
('Minified exception occurred; use the non-minified dev environment '+
'for the full error message and additional helpful warnings.');}else{

for(var m=arguments.length,n=Array(m>2?m-2:0),o=2;o<m;o++)n[o-2]=arguments[o];
l=new Error(h.apply(undefined,[k].concat(n)));
l.name='Invariant Violation';
l.messageWithParams=[k].concat(n);}


l.framesToPop=1;
throw l;}}



f.exports=i;}),null);

/** shared/emitter/EventSubscriptionVendor.js */






__d('EventSubscriptionVendor',['invariant'],(function a(b,c,d,e,f,g,h){

'use strict';









function i(){
this.$EventSubscriptionVendor_subscriptionsForType={};}
i.prototype.







addSubscription=
function(j,k){

k.subscriber===this||h(0,
'The subscriber of the subscription is incorrectly set.');
if(!this.$EventSubscriptionVendor_subscriptionsForType[j])
this.$EventSubscriptionVendor_subscriptionsForType[j]=[];

var l=this.$EventSubscriptionVendor_subscriptionsForType[j].length;
this.$EventSubscriptionVendor_subscriptionsForType[j].push(k);
k.eventType=j;
k.key=l;
return k;};
i.prototype.







removeAllSubscriptions=function(j){
if(j===undefined){
this.$EventSubscriptionVendor_subscriptionsForType={};}else 

delete this.$EventSubscriptionVendor_subscriptionsForType[j];};

i.prototype.







removeSubscription=function(j){
var k=j.eventType,
l=j.key,

m=this.$EventSubscriptionVendor_subscriptionsForType[k];
if(m)
delete m[l];};

i.prototype.













getSubscriptionsForType=function(j){
return this.$EventSubscriptionVendor_subscriptionsForType[j];};



f.exports=i;}),null);

/** shared/core/emptyFunction.js */






__d("emptyFunction",[],(function a(b,c,d,e,f,g){

function h(j){
return function(){
return j;};}








var i=function j(){};

i.thatReturns=h;
i.thatReturnsFalse=h(false);
i.thatReturnsTrue=h(true);
i.thatReturnsNull=h(null);
i.thatReturnsThis=function(){return this;};
i.thatReturnsArgument=function(j){return j;};

f.exports=i;}),null);

/** shared/emitter/BaseEventEmitter.js */





__d('BaseEventEmitter',['invariant','EmitterSubscription','ErrorUtils','EventSubscriptionVendor','emptyFunction'],(function a(b,c,d,e,f,g,h){






























function i(){'use strict';
this.$BaseEventEmitter_subscriber=new (c('EventSubscriptionVendor'))();
this.$BaseEventEmitter_currentSubscription=null;}
i.prototype.















addListener=
function(j,
k,
l){
'use strict';
return this.$BaseEventEmitter_subscriber.addSubscription
(j,
new (c('EmitterSubscription'))(this.$BaseEventEmitter_subscriber,k,l));};
i.prototype.











once=
function(j,
k,
l){
'use strict';
var m=this;
return this.addListener(j,function(){
m.removeCurrentListener();
k.apply(l,arguments);});};

i.prototype.








removeAllListeners=function(j){'use strict';
this.$BaseEventEmitter_subscriber.removeAllSubscriptions(j);};
i.prototype.











removeCurrentListener=function(){'use strict';

!!this.$BaseEventEmitter_currentSubscription||h(0,
'Not in an emitting cycle; there is no current subscription');

this.$BaseEventEmitter_subscriber.removeSubscription(this.$BaseEventEmitter_currentSubscription);};
i.prototype.








listeners=function(j){'use strict';
var k=this.$BaseEventEmitter_subscriber.getSubscriptionsForType(j);
return k?
k.filter(c('emptyFunction').thatReturnsTrue).map
(function(l){
return l.listener;}):

[];};
i.prototype.















emit=function(j){'use strict';
var k=this.$BaseEventEmitter_subscriber.getSubscriptionsForType(j);
if(k){
var l=Object.keys(k),
m;
for(var n=0;n<l.length;n++){
var o=l[n],
p=k[o];

if(p){
this.$BaseEventEmitter_currentSubscription=p;
if(m==null){
m=[p];
for(var q=0,r=arguments.length;q<r;q++)
m[q+1]=arguments[q];}else 


m[0]=p;

this.__emitToSubscription.apply(this,m);}}


this.$BaseEventEmitter_currentSubscription=null;}};

i.prototype.










__emitToSubscription=
function(j,
k){

'use strict';for(var l=arguments.length,m=Array(l>2?l-2:0),n=2;n<l;n++)m[n-2]=arguments[n];
c('ErrorUtils').applyWithGuard
(j.listener,
j.context,
m,
null,'EventEmitter '+
k+' event');};




f.exports=i;}),null);

/** shared/emitter/internal/EventEmitter.js */





__d('EventEmitter',['BaseEventEmitter'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits



(j,c('BaseEventEmitter'));i=h&&h.prototype;function j(){'use strict';h.apply(this,arguments);}


f.exports=j;}),null);

/** shared/emitter/internal/EventEmitterWithHolding.js */






__d('EventEmitterWithHolding',[],(function a(b,c,d,e,f,g){

'use strict';























function h(i,j){
this.$EventEmitterWithHolding_emitter=i;
this.$EventEmitterWithHolding_eventHolder=j;
this.$EventEmitterWithHolding_currentEventToken=null;
this.$EventEmitterWithHolding_heldEventsRemovalStack=[];
this.$EventEmitterWithHolding_heldEventsEmitDepth=0;}
h.prototype.




addListener=function(i,j,k){
return this.$EventEmitterWithHolding_emitter.addListener(i,j,k);};
h.prototype.




once=function(i,j,k){
return this.$EventEmitterWithHolding_emitter.once(i,j,k);};
h.prototype.





















addRetroactiveListener=
function(i,j,k){
var l=this.$EventEmitterWithHolding_emitter.addListener(i,j,k),

m=this.$EventEmitterWithHolding_heldEventsRemovalStack;
m.push(false);
this.$EventEmitterWithHolding_heldEventsEmitDepth++;
this.$EventEmitterWithHolding_eventHolder.emitToListener(i,j,k);
this.$EventEmitterWithHolding_heldEventsEmitDepth--;

if(m[m.length-1])
l.remove();

m.pop();

return l;};
h.prototype.




removeAllListeners=function(i){
this.$EventEmitterWithHolding_emitter.removeAllListeners(i);};
h.prototype.




removeCurrentListener=function(){
if(this.$EventEmitterWithHolding_heldEventsEmitDepth){
var i=this.$EventEmitterWithHolding_heldEventsRemovalStack;
i[i.length-1]=true;}else 

this.$EventEmitterWithHolding_emitter.removeCurrentListener();};

h.prototype.




listeners=function(i){
return this.$EventEmitterWithHolding_emitter.listeners(i);};
h.prototype.




emit=function(i,j,k,l,m,n,o){
this.$EventEmitterWithHolding_emitter.emit(i,j,k,l,m,n,o);};
h.prototype.
















emitAndHold=function(i,j,k,l,m,n,o){
this.$EventEmitterWithHolding_currentEventToken=this.$EventEmitterWithHolding_eventHolder.holdEvent
(i,
j,k,l,m,n,o);

this.$EventEmitterWithHolding_emitter.emit(i,j,k,l,m,n,o);
this.$EventEmitterWithHolding_currentEventToken=null;};
h.prototype.




releaseCurrentEvent=function(){
if(this.$EventEmitterWithHolding_currentEventToken!==null){
this.$EventEmitterWithHolding_eventHolder.releaseEvent(this.$EventEmitterWithHolding_currentEventToken);}else
if(!!this.$EventEmitterWithHolding_heldEventsEmitDepth)
this.$EventEmitterWithHolding_eventHolder.releaseCurrentEvent();};

h.prototype.





releaseHeldEventType=function(i){
this.$EventEmitterWithHolding_eventHolder.releaseEventType(i);};



f.exports=h;}),null);

/** shared/emitter/internal/EventHolder.js */






__d('EventHolder',['invariant'],(function a(b,c,d,e,f,g,h){

'use strict';




function i(){
this.$EventHolder_heldEvents={};
this.$EventHolder_currentEventKey=[];}
i.prototype.






















holdEvent=function(j,k,l,m,n,o,p){
this.$EventHolder_heldEvents[j]=this.$EventHolder_heldEvents[j]||[];
var q=this.$EventHolder_heldEvents[j],
r=
{eventType:j,
index:q.length};

q.push([k,l,m,n,o,p]);
return r;};
i.prototype.









emitToListener=function(j,k,l){
var m=this.$EventHolder_heldEvents[j];
if(!m)
return;

m.forEach(function(n,o){
if(!n)
return;

this.$EventHolder_currentEventKey.push
({eventType:j,
index:o});

k.apply(l,n);
this.$EventHolder_currentEventKey.pop();}.
bind(this));};
i.prototype.









releaseCurrentEvent=function(){

this.$EventHolder_currentEventKey.length||h(0,
'Not in an emitting cycle; there is no current event');

this.releaseEvent(this.$EventHolder_currentEventKey[this.$EventHolder_currentEventKey.length-1]);};
i.prototype.







releaseEvent=function(j){
delete this.$EventHolder_heldEvents[j.eventType][j.index];};
i.prototype.






releaseEventType=function(j){
this.$EventHolder_heldEvents[j]=[];};



f.exports=i;}),null);

/** js/modules/Arbiter.js */






__d('Arbiter',['invariant','CallbackDependencyManager','ErrorUtils','EventEmitter','EventEmitterWithHolding','EventHolder'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;









function k(o){
return Array.isArray(o)?o:[o];}















function l(){
var o=new (c('EventEmitter'))();
this.$Arbiter_holder=new m();
this.$Arbiter_emitter=new (c('EventEmitterWithHolding'))(o,this.$Arbiter_holder);
this.$Arbiter_callbackManager=new (c('CallbackDependencyManager'))();


this.$Arbiter_returnValueStack=[];}
l.prototype.

















subscribe=function(o,p,q){
o=k(o);
o.forEach(function(s){
s&&typeof s==='string'||h(0,'Invalid type: %s',s);});


typeof p==='function'||h(0,'Invalid callback: %s',p);

q=q||l.SUBSCRIBE_ALL;

q===l.SUBSCRIBE_NEW||q===l.SUBSCRIBE_ALL||h(0,
'Unknown policy: %s',q);


var r=o.map(function(s){
var t=this.$Arbiter_proxyListener.bind(this,p,s);
t.__SMmeta=p.__SMmeta;
if(q===l.SUBSCRIBE_NEW)
return this.$Arbiter_emitter.addListener(s,t);

this.$Arbiter_returnValueStack.push({});
var u=this.$Arbiter_emitter.addRetroactiveListener(s,t);
this.$Arbiter_returnValueStack.pop();
return u;},
this);
return new n(this,r);};
l.prototype.

$Arbiter_proxyListener=function(o,p,q){
var r=
this.$Arbiter_returnValueStack[this.$Arbiter_returnValueStack.length-1];
if(r[p]===false)
return;


var s=c('ErrorUtils').applyWithGuard(o,null,[p,q]);
if(s===false)
this.$Arbiter_emitter.releaseCurrentEvent();

r[p]=s;};
l.prototype.

unsubscribeCurrentSubscription=function(){
this.$Arbiter_emitter.removeCurrentListener();};
l.prototype.

releaseCurrentPersistentEvent=function(){
this.$Arbiter_emitter.releaseCurrentEvent();};
l.prototype.

subscribeOnce=function(o,p,q){
var r=this.subscribe(o,function(s,t){
this.unsubscribeCurrentSubscription();
return p(s,t);}.
bind(this),q);
return r;};
l.prototype.






unsubscribe=function(o){

o.isForArbiterInstance(this)||h(0,
'Unsubscribing from another instance');

o.unsubscribe();};
l.prototype.




















inform=function(o,p,q){
var r=Array.isArray(o);
o=k(o);

q=q||l.BEHAVIOR_EVENT;
var s=
q===l.BEHAVIOR_STATE||
q===l.BEHAVIOR_PERSISTENT;

this.$Arbiter_returnValueStack.push({});

for(var t=0;t<o.length;t++){
var u=o[t];
u||h(0,'Event types must be non-empty strings: %s',u);

this.$Arbiter_holder.setHoldingBehavior(u,q);

this.$Arbiter_emitter.emitAndHold(u,p);
this.$Arbiter_updateCallbacks(u,p,s);}


var v=this.$Arbiter_returnValueStack.pop();
return r?v:v[o[0]];};
l.prototype.











query=function(o){
var p=this.$Arbiter_holder.getHoldingBehavior(o);

!p||p===l.BEHAVIOR_STATE||h(0,
'Querying state of an unstateful event: %s',
o);

var q=null;
this.$Arbiter_holder.emitToListener(o,function(r){q=r;});
return q;};
l.prototype.













registerCallback=function(o,p){
if(typeof o==='function'){
return this.$Arbiter_callbackManager.registerCallback(o,p);}else 

return this.$Arbiter_callbackManager.addDependenciesToExistingCallback
(o,
p);};


l.prototype.




$Arbiter_updateCallbacks=function(o,p,q){
if(p===null)
return;

if(q){
this.$Arbiter_callbackManager.satisfyPersistentDependency(o);}else 

this.$Arbiter_callbackManager.satisfyNonPersistentDependency(o);};

i=babelHelpers.inherits


(m,c('EventHolder'));j=i&&i.prototype;
function m(){
j.constructor.call(this);
this.$ArbiterEventHolder_holdingBehaviors={};}
m.prototype.












setHoldingBehavior=function(o,p){
this.$ArbiterEventHolder_holdingBehaviors[o]=p;};
m.prototype.

getHoldingBehavior=function(o){
return this.$ArbiterEventHolder_holdingBehaviors[o];};
m.prototype.

holdEvent=function(o,p,q,r,s){
var t=this.$ArbiterEventHolder_holdingBehaviors[o];
if(t!==l.BEHAVIOR_PERSISTENT)
this.$ArbiterEventHolder_releaseAllEvents(o);

if(t!==l.BEHAVIOR_EVENT)
return j.holdEvent.call(this,o,p,q,r,s);};

m.prototype.

$ArbiterEventHolder_releaseAllEvents=function(o){


this.emitToListener(o,this.releaseCurrentEvent,this);};
m.prototype.

releaseEvent=function(o){
if(o)
j.releaseEvent.call(this,o);};




Object.assign(l,
{SUBSCRIBE_NEW:'new',
SUBSCRIBE_ALL:'all',

BEHAVIOR_EVENT:'event',
BEHAVIOR_STATE:'state',
BEHAVIOR_PERSISTENT:'persistent'});











function n(o,p){
this.$ArbiterToken_arbiterInstance=o;
this.$ArbiterToken_subscriptions=p;}
n.prototype.




unsubscribe=function(){
for(var o=0;o<this.$ArbiterToken_subscriptions.length;o++)
this.$ArbiterToken_subscriptions[o].remove();




this.$ArbiterToken_subscriptions.length=0;};
n.prototype.

isForArbiterInstance=function(o){
this.$ArbiterToken_arbiterInstance||h(0,'Token has already been unsubscribed');
return this.$ArbiterToken_arbiterInstance===o;};




Object.keys(l.prototype).forEach(function(o){
l[o]=function(){

var p=this instanceof l?this:l;
return l.prototype[o].apply(p,arguments);};});


l.call(l);

f.exports=l;}),null);

/** shared/core/isEmpty.js */





__d('isEmpty',['invariant'],(function a(b,c,d,e,f,g,h){

'use strict';









function i(k){
if(Array.isArray(k)){
return k.length===0;}else
if(typeof k==='object'){
if(k){

!j(k)||k.size===undefined||h(0,
'isEmpty() does not support iterable collections.');

for(var l in k)
return false;}


return true;}else 

return !k;}



function j(k){
if(typeof Symbol==='undefined')
return false;

return k[typeof Symbol==='function'?Symbol.iterator:'@@iterator'];}


f.exports=i;}),null);

/** js/modules/DataStore.js */





__d('DataStore',['isEmpty'],(function a(b,c,d,e,f,g){


















var h={},
i=1;







function j(m){
if(typeof m=='string'){
return 'str_'+m;}else 






return 'elem_'+
(m.__FB_TOKEN||
(m.__FB_TOKEN=[i++]))[0];}










function k(m){
var n=j(m);
return h[n]||(h[n]={});}


var l=









{set:function m(n,o,p){
if(!n)
throw new TypeError
('DataStore.set: namespace is required, got '+typeof n);

var q=k(n);
q[o]=p;
return n;},

















get:function m(n,o,p){
if(!n)
throw new TypeError
('DataStore.get: namespace is required, got '+typeof n);

var q=k(n),
r=q[o];



if(typeof r==='undefined'&&n.getAttribute)





if(n.hasAttribute&&!n.hasAttribute('data-'+o)){
r=undefined;}else{

var s=n.getAttribute('data-'+o);

r=null===s?undefined:s;}



if(p!==undefined&&r===undefined)
r=q[o]=p;

return r;},









remove:function m(n,o){
if(!n)
throw new TypeError
('DataStore.remove: namespace is required, got '+typeof n);

var p=k(n),
q=p[o];
delete p[o];



if(c('isEmpty')(p))
l.purge(n);


return q;},







purge:function m(n){
delete h[j(n)];},



_storage:h};


f.exports=l;}),null);

/** js/modules/BigPipePlugins.js */




__d('BigPipePlugins',['DataStore'],(function a(b,c,d,e,f,g){h.












runPluginOnPagelet=function(i){'use strict';
h.getPluginList().forEach
(function(j){
j(i);});};


h.

getPluginList=function(){'use strict';

return [h.$BigPipePlugins_moveAdsTokens];};

h.









$BigPipePlugins_moveAdsTokens=function(i){'use strict';
if(!i)
return;


var j=i.querySelectorAll('div[data-fte]');
for(var k=0,l=j.length;k<l;k++)
h.$BigPipePlugins_moveAttributeToDataStore(j[k],'data-ft','data-ft');};

h.

$BigPipePlugins_moveAttributeToDataStore=
function(i,
j,
k){
'use strict';
var l=i.getAttribute(j);
if(l){
c('DataStore').set(i,k,l);
i.removeAttribute(j);}};

function h(){'use strict';}


f.exports=h;}),null);

/** shared/request/CSRFGuard.js */





__d('CSRFGuard',[],(function a(b,c,d,e,f,g){
'use strict';

var h='for (;;);',
i=/^for ?\(;;\);/,







j=
{length:h.length,
regex:i,

exists:function k(l){
return !!l.match(i);},


clean:function k(l){
var m=l.match(i);
return m?l.substr(m[0].length):m;}};



f.exports=j;}),null);

/** shared_core/core_windowless/JSLog.js */





__d('JSLog',['ErrorUtils','ex','sprintf'],(function a(b,c,d,e,f,g){



'use strict';








var h=c('ex'),




i=['error','warn','info'];













function j
(l,
m){





if(m===undefined){
k.error
('JSLog.%s requires an error message argument',
l);

return;}
for(var n=arguments.length,o=Array(n>2?n-2:0),p=2;p<n;p++)o[p-2]=arguments[p];

var q=new Error(h.apply(undefined,[m].concat(o)));
q.name=c('sprintf')('JSLog.%s',l);
q.type=l;
q.messageWithParams=[m].concat(o);
q.framesToPop=1;
c('ErrorUtils').reportError(q);}


var k=i.reduce(function(l,m){
l[m]=j.bind(l,m);
return l;},
{});

f.exports=k;}),null);

/** shared/struct/CircularBuffer.js */





__d('CircularBuffer',['invariant'],(function a(b,c,d,e,f,g,h){








function i(j){'use strict';

j>0||h(0,
'Buffer size should be a positive integer');

this.$CircularBuffer_size=j;
this.$CircularBuffer_head=0;
this.$CircularBuffer_buffer=[];}
i.prototype.

write=function(j){'use strict';
if(this.$CircularBuffer_buffer.length<this.$CircularBuffer_size){
this.$CircularBuffer_buffer.push(j);}else{

this.$CircularBuffer_buffer[this.$CircularBuffer_head]=j;
this.$CircularBuffer_head++;
this.$CircularBuffer_head%=this.$CircularBuffer_size;}

return this;};
i.prototype.

read=function(){'use strict';
return this.$CircularBuffer_buffer.slice(this.$CircularBuffer_head).concat
(this.$CircularBuffer_buffer.slice(0,this.$CircularBuffer_head));};

i.prototype.

clear=function(){'use strict';
this.$CircularBuffer_head=0;
this.$CircularBuffer_buffer=[];
return this;};



f.exports=i;}),null);

/** shared/logging/LogBuffer.js */

































__d('LogBuffer',['CircularBuffer'],(function a(b,c,d,e,f,g){







var h=b.setTimeout.nativeBackup||b.setTimeout,



i=5000,


j={},

k={},

l=
{write:function m(n,o){
var p=
j[n]=
j[n]||new (c('CircularBuffer'))(i);

p.write(o);

if(k[n])
k[n].forEach(function(q){

try{q(o);}catch(
r){

}});},




read:function m(n){
if(!j[n]){
return [];}else 

return j[n].read();},



tail:function m(n,o){
if(typeof o!=='function')
return;


k[n]=k[n]||[];
k[n].push(o);

if(j[n]){
var p=j[n];

p.read().forEach(function(q){

try{o(q);}catch(
r){

}});}},




clear:function m(n){
if(j[n])

h(function(){
j[n].clear();},
0);}};




f.exports=l;}),null);

/** shared/core/ExecutionEnvironment.js */





__d('ExecutionEnvironment',[],(function a(b,c,d,e,f,g){

'use strict';

var h=
!!(typeof window!=='undefined'&&
window.document&&
window.document.createElement),








i=

{canUseDOM:h,

canUseWorkers:typeof Worker!=='undefined',

canUseEventListeners:
h&&!!(window.addEventListener||window.attachEvent),

canUseViewport:h&&!!window.screen,

isInWorker:!h};



f.exports=i;}),null);

/** shared/dom/MutationObserver.js */





__d("MutationObserver",[],(function a(b,c,d,e,f,g){h.prototype.









observe=function(j,k){"use strict";};

h.prototype.

disconnect=function(){"use strict";};

h.prototype.

takeRecords=function(){"use strict";
return null;};
function h(){"use strict";}


var i=
b.MutationObserver||
b.WebKitMutationObserver||
h;

f.exports=i;}),null);

/** shared/core/PageDOMMutationObserver.js */





__d('PageDOMMutationObserver',['ExecutionEnvironment','MutationObserver'],(function a(b,c,d,e,f,g){

'use strict';




var h=new (c('MutationObserver'))(function(){}),

i=
{tryStart:function j(){
if(!c('ExecutionEnvironment').canUseDOM){
i.tryStart=function(){};
return;}

if(!window.Env||!document.body)
return;

i.tryStart=function(){};
if(!window.Env.dom_mutation_flag)
return;

h.observe
(document.body,

{attributes:true,
childList:true,
characterData:true,
subtree:true});},




consumePendingDOMMutations:function j(){
var k=h.takeRecords();
return k!=null?k.length:0;}};



f.exports=i;}),null);

/** shared/performance/performance.js */





__d('performance',['ExecutionEnvironment'],(function a(b,c,d,e,f,g){

'use strict';



var h=void 0;

if(c('ExecutionEnvironment').canUseDOM)

h=
window.performance||
window.msPerformance||
window.webkitPerformance;


f.exports=h||{};}),null);

/** shared/performance/performanceAbsoluteNow.js */














__d('performanceAbsoluteNow',['performance'],(function a(b,c,d,e,f,g){



var h;


if(c('performance').now&&
c('performance').timing&&
c('performance').timing.navigationStart){

var i=c('performance').timing.navigationStart;
h=function j(){return c('performance').now()+i;};}else 

h=function j(){return Date.now();};


f.exports=h;}),null);

/** shared/core/ProfilingCounters.js */






__d('ProfilingCounters',['performanceAbsoluteNow'],(function a(b,c,d,e,f,g){




c('performanceAbsoluteNow')();

























function h(k){'use strict';
this.attributions=k;
this.active=null;}
h.prototype.

getChildContext=function(k){'use strict';
var l=this.attributions;
if(!(l&&k&&l[k]))



if(k){
l=this.attributions!=null?babelHelpers['extends']({},this.attributions):{};
l[k]=true;}

return new h(l);};
h.prototype.

getActiveCounters=function(){'use strict';
if(this.active==null)
this.active=new j();

return this.active;};
h.prototype.

hasActiveCounters=function(){'use strict';
return this.active!=null;};
h.prototype.

clearActiveCounters=function(){'use strict';
this.active=null;};



var i=
[new h(null)];









function j(){'use strict';
this.$ProfilingCounters_timingCounters=[];
this.$ProfilingCounters_idToCounterIdx={};
this.$ProfilingCounters_itemCounters={};
this.$ProfilingCounters_counterTotal={};}
j.

$ProfilingCounters_getCurrentInstance=function(){'use strict';
return i[i.length-1].getActiveCounters();};
j.

startTiming=function(k){'use strict';
return j.$ProfilingCounters_getCurrentInstance().$ProfilingCounters_startTiming(k);};
j.prototype.

$ProfilingCounters_startTiming=function(k){'use strict';
var l=j.$ProfilingCounters_nextCounterId++,
m=
{value:0,
counter:k,
id:l,
lastStartTime:0};

this.$ProfilingCounters_idToCounterIdx[l]=this.$ProfilingCounters_timingCounters.length;
this.$ProfilingCounters_timingCounters.push(m);
var n=c('performanceAbsoluteNow')();
m.lastStartTime=n;
if(this.$ProfilingCounters_timingCounters.length>1){
var o=this.$ProfilingCounters_timingCounters[this.$ProfilingCounters_timingCounters.length-2];
o.value+=n-o.lastStartTime;}

return l;};
j.





















stopTiming=function(k){'use strict';
return j.$ProfilingCounters_getCurrentInstance().$ProfilingCounters_stopTiming(k);};
j.prototype.

$ProfilingCounters_stopTiming=function(k){'use strict';
var l=c('performanceAbsoluteNow')(),

m=this.$ProfilingCounters_idToCounterIdx[k];
delete this.$ProfilingCounters_idToCounterIdx[k];
if(m==null||this.$ProfilingCounters_timingCounters[m]==null)





return 0;

var n=null,
o=0;
while(this.$ProfilingCounters_timingCounters.length-1>m){
var p=this.$ProfilingCounters_timingCounters.pop();
o+=p.value;
delete this.$ProfilingCounters_idToCounterIdx[p.id];
if(n==null&&p.lastStartTime!=null)
n=p.lastStartTime;}


var q=this.$ProfilingCounters_timingCounters.pop();
q.value+=l-(n||q.lastStartTime);
q.value+=o;

this.$ProfilingCounters_counterTotal[q.counter]=
this.$ProfilingCounters_counterTotal[q.counter]||0;
this.$ProfilingCounters_counterTotal[q.counter]+=q.value;

if(this.$ProfilingCounters_timingCounters.length>0)
this.$ProfilingCounters_timingCounters[this.$ProfilingCounters_timingCounters.length-1].lastStartTime=l;


return q.value;};
j.

incrementCounter=function(k,l){'use strict';
j.$ProfilingCounters_getCurrentInstance().$ProfilingCounters_incrementCounter(k,l);};
j.prototype.

$ProfilingCounters_incrementCounter=function(k,l){'use strict';
this.$ProfilingCounters_itemCounters[k]=this.$ProfilingCounters_itemCounters[k]||0;
this.$ProfilingCounters_itemCounters[k]+=l;};
j.

getTotals=function(){'use strict';
return j.$ProfilingCounters_getCurrentInstance().$ProfilingCounters_getTotals();};
j.prototype.

$ProfilingCounters_getTotals=function(){'use strict';
return babelHelpers['extends']({},
this.$ProfilingCounters_counterTotal,
this.$ProfilingCounters_itemCounters);};

j.prototype.

$ProfilingCounters_addNestedCounters=function(k){'use strict';
var l=Object.entries(k.$ProfilingCounters_itemCounters);
for(var m=0;m<l.length;m++){var n=
l[m],o=n[0],p=n[1];

this.$ProfilingCounters_itemCounters[o]=(this.$ProfilingCounters_itemCounters[o]||0)+p;}

l=Object.entries(k.$ProfilingCounters_counterTotal);
for(var q=0;q<l.length;q++){var r=
l[q],s=r[0],p=r[1];

this.$ProfilingCounters_counterTotal[s]=(this.$ProfilingCounters_counterTotal[s]||0)+p;}};

j.

$ProfilingCounters_nestContext=function(k){'use strict';
i.push(k);};
j.

$ProfilingCounters_unnestContext=function(){'use strict';
if(i.length===1)
throw new Error('popping off the global context');

var k=i.pop();
if(k.hasActiveCounters()){
var l=k.getActiveCounters();








if(i.length>1)
this.$ProfilingCounters_getCurrentInstance().$ProfilingCounters_addNestedCounters(l);}};


j.

wrapWithDescContext=
function(k,
l){
'use strict';
var m=i[i.length-1].
getChildContext(l),

n=function o(){
j.$ProfilingCounters_nestContext(m);
var p=void 0;

try{p=k.apply(this,arguments);}finally{

j.$ProfilingCounters_unnestContext();
m.clearActiveCounters();}

return p;};


return n;};
j.




resetState=function(){'use strict';
i=[new h(null)];};
j.$ProfilingCounters_nextCounterId=1;


b.ProfilingCounters=j;

f.exports=j;}),3);

/** shared/core/TimeSliceRefCountingWrapper.js */





__d('TimeSliceRefCountingWrapper',[],(function a(b,c,d,e,f,g){



var h=[],


i=null,





j=null,

k=1,



l={},
m={};











function n
(p,
q,
r,
s){

if(p==null||p.length===0)
return;





var t=0,
u=0,
v=[];
while(u<p.length){
var w=p[u],
x=true;

if(!(s!==null&&
s!==w.rootContext&&
q)){





w.refCount--;
if(w.refCount===0){
w.callbacks.forEach(function(y){return v.push(y);});
w.callbacks=[];
x=false;}}


if(x){
p[t]=w;
t++;}

u++;}

p.splice(t,u-t);
if(j!=null)
j.scheduleCallbacks(v);}







var o=

{wrapWithReferenceCounting:function p
(q,
r,
s,
t){

var u=null,
v=false;
if(s&&h.length>0){
h.forEach(function(z){return z.refCount++;});
u=h;}

var w=false,
x=k++,
y=function z(){
w=true;
var aa=m[x];
if(aa){
delete l[aa];
delete m[x];}

var ba=h;
if(u!=null)
h=u;

var ca=void 0;

try{ca=r.apply(this,arguments);}finally{

var da=
t.getLastCompletedTimeSliceContextID(),
ea=
i!=null&&
i.rootContext===da;

if(u!=null||ea){
n
(h,
v,
q,
t.getLastCompletedTimeSliceContextID());

h=ba;}

v=true;}

return ca;};

y.__creationID=x;
y.__cancelCallback=function(){
if(u!=null&&!w){
w=true;



n
(u,
v,
q,
null);

v=true;}};


return y;},


getCurrentActiveReferenceRootIds:function p(){
return h.map(function(q){return q.rootContext;});},







addOrCreateRefCounter:function p(q,r){

if(i!=null&&
i.rootContext===r){

i.callbacks.push(q);}else{

i=
{refCount:1,
callbacks:[q],
rootContext:r};



h=h.slice();
h.push(i);}},









registerForCancelling:function p(q,r){
if(l[q]!=null){



return;}else
if(!q)



return;

l[q]=r;
m[r.__creationID]=q;},


cancelTimeSlice:function p(q){
var r=l[q];
if(r){
delete l[q];
delete m[r.__creationID];
r.__cancelCallback();}},





isValidCancellationToken:function p(q){
return l[q]!=null;},


registerRefCountingCallbackManager:function p(q){
j=q;}};



f.exports=o;}),null);

/** shared_core/error/wrapFunction.js */














__d('wrapFunction',[],(function a(b,c,d,e,f,g){

var h={},

i=function j
(k,
l,
m){

var n=l||'default';
return function(){
var o=n in h?h[n](k,m):k;
return o.apply(this,arguments);};};



i.setWrapper=
function(j){

var k=arguments.length<=1||arguments[1]===undefined?'default':arguments[1];
h[k]=j;};


f.exports=i;}),null);

/** shared/core/TimeSlice.js */





__d('TimeSlice',['invariant','CircularBuffer','ErrorUtils','Env','LogBuffer','PageDOMMutationObserver','ProfilingCounters','TimeSliceRefCountingWrapper','performanceAbsoluteNow','wrapFunction'],(function a(b,c,d,e,f,g,h){
















var i=1,


j=false,
k=void 0,













l=void 0,


m=0,
n=1,
o=2,
p=m,
q=new (c('CircularBuffer'))(100),
r=0,
s=0,
t=c('Env').shouldLogCounters,
u='stackTraceLimit' in Error,
v=60000,

w=240000,

x=null,
y=false,
z=0,

aa=[],






ba=
{_enabled:false,
_lastEnabledStartTimeMs:null,
_firstEnabledStartTimeMs:null,
_delayMs:33,
_idleGapThresholdMs:60,
_lastEvent:{type:'unknown',timeMs:null},
_intervalHandle:null,
_ignoredTimesliceNames:{},
_expectedNextHeartbeatMs:null,
_activeHeartbeatHandles:{},

enable:function da(){var ea,fa=this,
ga=c('performanceAbsoluteNow')();
if(!this._enabled){
var ha=c('Env').timeslice_heartbeat_config||{};
this._enabled=true;
this._delayMs=ha.pollIntervalMs||this._delayMs;
this._idleGapThresholdMs=
ha.idleGapThresholdMs||this._idleGapThresholdMs;
this._ignoredTimesliceNames=
ha.ignoredTimesliceNames||this._ignoredTimesliceNames;
this._intervalHandle=setInterval(this._beat.bind(this),this._delayMs);
this._expectedNextHeartbeatMs=ga+this._delayMs;
if(this._firstEnabledStartTimeMs==null)
this._firstEnabledStartTimeMs=ga;}


if(y){
return null;}else

if(ga-this._firstEnabledStartTimeMs>w){

y=true;
return null;}else{
var ea=function(){
fa._lastEnabledStartTimeMs=ga;
var ia=z++,
ja=
{disable:function(){
if(this._activeHeartbeatHandles[ia]!=null){
delete this._activeHeartbeatHandles[ia];
this._checkShouldDisable();}}.

bind(fa),
enabledTime:fa._lastEnabledStartTimeMs};

fa._activeHeartbeatHandles[ia]=ja;
return {v:ja};}();if(typeof ea==="object")return ea.v;}},



_checkShouldDisable:function da(){var ea,fa=this;
if(this._enabled)(function(){
var ga=c('performanceAbsoluteNow')(),
ha=false;
Object.keys(fa._activeHeartbeatHandles).forEach(function(ia){

if(ga-this._activeHeartbeatHandles[ia].enabledTime>
v){

delete this._activeHeartbeatHandles[ia];}else 

ha=true;}.

bind(fa));
if(!ha){
fa._enabled=false;
clearInterval(fa._intervalHandle);
fa._intervalHandle=null;
fa._firstEnabledStartTimeMs=null;}})
();},



updateExecution:function da(ea,fa,ga){
if(!this._enabled)
return;

if(this._ignoredTimesliceNames[ga]){






this._updateState({type:'ignored_exec',timeMs:ea},true);
this._updateState({type:'ignored_exec',timeMs:fa},false);}else{


this._updateState({type:'exec',timeMs:ea},true);


this._updateState({type:'exec',timeMs:fa},false);}},



_isIdleMarker:function da(event){
return event.type=='beat'||event.type=='ignored_exec';},


_updateState:function da(ea,fa){
var ga=this._lastEvent.timeMs,
ha=ea.timeMs;
if(fa){
var ia=
this._expectedNextHeartbeatMs+this._idleGapThresholdMs,
ja=ha>ia;
if(this._lastEvent.type==='exec'){
if(ea.type==='exec'){


this._outputBrowserBlock
(ga,
ha,
ja?'likely_btwn_exec':'btwn_exec');}else

if(this._isIdleMarker(ea))



this._outputBrowserBlock
(ga,
ha,
ja?'likely_post_exec':'post_exec');}else


if(this._isIdleMarker(this._lastEvent))
if(ea.type==='exec'){


this._outputBrowserBlock
(ga,
ha,
ja?'likely_pre_exec':'pre_exec');}else

if(this._isIdleMarker(ea)&&ja){
var ka=ea.type==='beat'?
'delayed_beat':'delayed_beat_btwn_ignored';






this._outputBrowserBlock(ga,ha,ka);}}



this._lastEvent=ea;},


_outputBrowserBlock:function da(ea,fa,ga){
if(ea<fa)
c('LogBuffer').write('time_slice_heartbeat',
{begin:ea,
end:fa,
id:i++,
parentID:null,
guard:'browser time: '+ga});},




_beat:function da(){
var ea=c('performanceAbsoluteNow')();
if(!this._enabled){
return;}else

if(ea-this._lastEnabledStartTimeMs>v){

this._activeHeartbeatHandles={};
this._checkShouldDisable();
return;}

this._updateState({type:'beat',timeMs:ea},true);
this._expectedNextHeartbeatMs=ea+this._delayMs;},


isOn:function da(){
return this._enabled;}},







ca=





{guard:function da(ea,fa,ga){
typeof ea==='function'||h(0,'Function fn is required');
typeof fa==='string'||h(0,'String name is required');
if(ea.__tsGuarded)

return ea;


if(!ga||!ga.root)
ca.checkCoverage();

var ha=void 0;
if(j)
ha=l.contextID;

var ia=function ja(){
var ka=void 0;
aa.push(fa);
var la=
{contextID:i++,
name:fa},

ma=l;
l=la;
if(j){


ka=ea.apply(this,arguments);}else{

var na='TimeSlice'+(fa?': '+fa:'');

c('PageDOMMutationObserver').tryStart();

var oa=c('performanceAbsoluteNow')();

j=true;

ka=c('ErrorUtils').
applyWithGuard(ea,this,arguments,null,na);

j=false;

var pa=c('performanceAbsoluteNow')(),
qa=c('PageDOMMutationObserver').consumePendingDOMMutations();
c('ProfilingCounters').incrementCounter('DOM_MUTATION',qa);

s+=pa-oa;
c('LogBuffer').write('time_slice',babelHelpers['extends']
({begin:oa,
end:pa,
id:l.contextID,
parentID:ha,
guard:fa,
counters:t?
c('ProfilingCounters').getTotals():
null,
activeRefTreeIds:
c('TimeSliceRefCountingWrapper').getCurrentActiveReferenceRootIds()},
ga,
ea.__SMmeta));




ba.updateExecution(oa,pa,fa);}

k=l.contextID;
l=ma;
aa.pop();

return ka;};


ia=c('ProfilingCounters').wrapWithDescContext
(ia,
ga&&ga.propagateCounterAttribution);





ia=c('TimeSliceRefCountingWrapper').wrapWithReferenceCounting
(fa,
ia,
ga!=null&&ga.isContinuation,
ca);

ia.__tsGuarded=true;
return ia;},



inGuard:function da(){
return j;},


checkCoverage:function da(){
var ea=void 0;
if(p!==o&&!j){
if(u){
ea=Error.stackTraceLimit;
Error.stackTraceLimit=50;}


var fa=new Error('Missing TimeSlice coverage');

if(u)
Error.stackTraceLimit=ea;


fa.type='warn';

if(p===n&&Math.random()<r){
c('ErrorUtils').reportError(fa);}else
if(p===m)
q.write(fa);}},





setLogging:function da(ea,fa){
if(p!==m)
return;

r=fa;
if(ea){
p=n;
q.read().forEach(function(ga){
if(Math.random()<r)
c('ErrorUtils').reportError(ga);});}else 



p=o;

q.clear();
q=undefined;},



enableHeartbeat:function da(){
return ba.enable();},



disablePageHeartbeat:function da(){
if(x!=null)
x.disable();},



isHeartbeatOn:function da(){
return ba.isOn();},


getContext:function da(){
if(!j)
return null;


return {id:l.contextID,
name:l.name};},






getLastCompletedTimeSliceContextID:function da(){
return k;},


getTotalTime:function da(){
return s;},















getGuardedContinuation:function da(ea){
return ca.guard
(function(){
return arguments[0].apply
(this,
Array.prototype.slice.call(arguments,1));},


ea,
{isContinuation:true});},



getGuardNameStack:function da(){
return aa.slice();}};



c('wrapFunction').setWrapper(ca.guard,'entry');
if(c('Env').timeslice_heartbeat_config&&
c('Env').timeslice_heartbeat_config.enableOnRequire)
x=ca.enableHeartbeat();


b.TimeSlice=ca;

f.exports=ca;}),3);

/** shared/env/CurrentCommunity.js */





__d('CurrentCommunity',['CurrentCommunityInitialData'],(function a(b,c,d,e,f,g){






var h=




{getID:function i(){
return c('CurrentCommunityInitialData').COMMUNITY_ID||'0';},





getName:function i(){
return c('CurrentCommunityInitialData').COMMUNITY_NAME||'';}};



f.exports=h;}),null);

/** js/dtsg/DTSG.js */






__d('DTSG',['invariant','DTSGInitialData'],(function a(b,c,d,e,f,g,h){

'use strict';







var i=c('DTSGInitialData').token||null,

j=

{getToken:function k(){
return i;},


setToken:function k(l){
i=l;},


refresh:function k(){
h(0,'DTSG.refresh(): Not supported on www.');}};




f.exports=j;}),null);

/** shared/bit_map/BitMap.js */




__d('BitMap',[],(function a(b,c,d,e,f,g){


var h='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_';


function i(){'use strict';
this.$BitMap_bits=[];}
i.prototype.

set=function(l){'use strict';
this.$BitMap_bits[l]=1;
return this;};
i.prototype.






toString=function(){'use strict';
var l=[];
for(var m=0;m<this.$BitMap_bits.length;m++)
l.push(this.$BitMap_bits[m]?1:0);

return l.length?k(l.join('')):'';};
i.prototype.











toCompressedString=function(){'use strict';
if(this.$BitMap_bits.length===0)
return '';


var l=[],
m=1,
n=this.$BitMap_bits[0]||0,
o=n.toString(2);

for(var p=1;p<this.$BitMap_bits.length;p++){
var q=this.$BitMap_bits[p]||0;
if(q===n){
m++;}else{

l.push(j(m));
n=q;
m=1;}}



if(m)
l.push(j(m));


return k(o+l.join(''));};



function j(l){
var m=l.toString(2),
n='0'.repeat(m.length-1);
return n+m;}


function k(l){


var m=(l+'00000').match(/[01]{6}/g),
n='';
for(var o=0;o<m.length;o++)
n+=h[parseInt(m[o],2)];

return n;}


f.exports=i;}),null);

/** shared/core/ge.js */




__d('ge',[],(function a(b,c,d,e,f,g){










function h(k,l,m){
return typeof k!='string'?k:
!l?document.getElementById(k):
i(k,l,m);}


function i(k,l,m){
var n=void 0,o=void 0,p=void 0;

if(j(l)==k){
return l;}else
if(l.getElementsByTagName){


o=l.getElementsByTagName(m||'*');
for(p=0;p<o.length;p++)
if(j(o[p])==k)
return o[p];}else{






o=l.childNodes;
for(p=0;p<o.length;p++){
n=i(k,o[p]);
if(n)
return n;}}




return null;}








function j(k){

return k.getAttribute?k.getAttribute('id'):null;}


f.exports=h;}),null);

/** shared/core/memoize.js */






__d('memoize',['invariant'],(function a(b,c,d,e,f,g,h){









function i(j){
var k=void 0;
return function(){

!arguments.length||h(0,
'A memoized function cannot be called with arguments');

if(j){
k=j();


j=null;}

return k;};}



f.exports=i;}),null);

/** shared/serverjs/replaceTransportMarkers.js */





__d('replaceTransportMarkers',['Map','Set','ge','memoize'],(function a(b,c,d,e,f,g){






















function h
(i,
j,
k){

var l=k!==undefined?j[k]:j,
m;
if(Array.isArray(l)){
for(m=0;m<l.length;m++)
h(i,l,m);}else

if(l&&typeof l=='object')
if(l.__m){
if(l.__lazy){



j[k]=c('memoize')(c.bind(null,l.__m));}else 



j[k]=c.call(null,l.__m);}else

if(l.__e){
j[k]=c('ge')(l.__e);}else
if(l.__rel){
j[k]=i;}else{

for(var n in l)
h(i,l,n);



if(l.__map){
j[k]=new (c('Map'))(l.__map);}else
if(l.__set)
j[k]=new (c('Set'))(l.__set);}}





f.exports=h;}),null);

/** shared/serverjs/ServerJSDefine.js */




__d('ServerJSDefine',['BitMap','replaceTransportMarkers'],(function a(b,c,d,e,f,g){







var h=2,

i=new (c('BitMap'))(),

j=

{getLoadedModuleHash:function k(){
return i.toCompressedString();},


handleDefine:function k(l,m,n,o,p){
i.set(o);
define(l,m,function q(){
c('replaceTransportMarkers')(p,n);
return n;},
h);},


handleDefines:function k(l,m){
l.forEach(function(n){
if(m)
n.push(m);

j.handleDefine.apply(null,n);});}};





f.exports=j;}),null);

/** shared/core/CSSCore.js */





__d('CSSCore',['invariant'],(function a(b,c,d,e,f,g,h){












function i(k,l){
var m=k;
while(m.parentNode)
m=m.parentNode;


var n=m.querySelectorAll(l);
return Array.prototype.indexOf.call(n,k)!==-1;}


var j=








{addClass:function k(l,m){

!/\s/.test(m)||h(0,
'CSSCore.addClass takes only a single class name. "%s" contains '+
'multiple classes.',m);


if(m)
if(l.classList){
l.classList.add(m);}else
if(!j.hasClass(l,m))
l.className=l.className+' '+m;


return l;},









removeClass:function k(l,m){

!/\s/.test(m)||h(0,
'CSSCore.removeClass takes only a single class name. "%s" contains '+
'multiple classes.',m);


if(m)
if(l.classList){
l.classList.remove(m);}else
if(j.hasClass(l,m))
l.className=l.className.
replace(new RegExp('(^|\\s)'+m+'(?:\\s|$)','g'),'$1').
replace(/\s+/g,' ').
replace(/^\s*|\s*$/g,'');


return l;},










conditionClass:function k(l,m,n){
return (n?j.addClass:j.removeClass)(l,m);},









hasClass:function k(l,m){

!/\s/.test(m)||h(0,
'CSS.hasClass takes only a single class name.');

if(l.classList)
return !!m&&l.classList.contains(m);

return (' '+l.className+' ').indexOf(' '+m+' ')>-1;},









matchesSelector:function k(l,m){
var n=l.matches||
l.webkitMatchesSelector||
l.mozMatchesSelector||
l.msMatchesSelector||
function(o){return i(l,o);};
return n.call(l,m);}};




f.exports=j;}),null);

/** shared/social_plugins/isSocialPlugin.js */






__d('isSocialPlugin',['CSSCore'],(function a(b,c,d,e,f,g){
'use strict';


function h(){



return document.body&&c('CSSCore').hasClass(document.body,'plugin');}


f.exports=h;}),null);

/** shared/request/getAsyncParams.js */





__d('getAsyncParams',['CurrentCommunity','CurrentUserInitialData','DTSG','ISB','LSD','ServerJSDefine','SiteData','SprinkleConfig','isSocialPlugin'],(function a(b,c,d,e,f,g){












var h=1;







function i(j){var k,
l=(k=
{__user:c('CurrentUserInitialData').USER_ID,
__a:1,




__dyn:c('ServerJSDefine').getLoadedModuleHash(),




__af:c('SiteData').features,








__req:(h++).toString(36)},k[
c('SiteData').be_key]=c('SiteData').be_mode,k[
c('SiteData').pkg_cohort_key]=c('SiteData').pkg_cohort,k.


__rev=c('SiteData').revision,k);





window.location.search.slice(1).split('&').forEach(function(p){var q=
p.split('='),r=q[0],s=q[1];

if(r==='locale'||
r==='cxobfus'||
r==='js_debug'||
r.substr(0,3)==='mh_')

l[r]=s;});





if(j=='POST'){
var m=c('DTSG').getCachedToken?c('DTSG').getCachedToken():c('DTSG').getToken();
if(m){
l.fb_dtsg=m;


var n='';
for(var o=0;o<l.fb_dtsg.length;o++)
n+=l.fb_dtsg.charCodeAt(o);

if(c('SprinkleConfig').param_name)
l[c('SprinkleConfig').param_name]='2'+n;}



if(c('LSD').token)
l.lsd=c('LSD').token;}





if(c('ISB').token)
l.fb_isb=c('ISB').token;


if(c('CurrentCommunity').getID()!=='0')
l.__cid=c('CurrentCommunity').getID();



if(c('isSocialPlugin')())
l.__sp=1;


if(c('SiteData').page_gen_time)
l[c('SiteData').page_gen_time_key]=c('SiteData').page_gen_time;


if(c('SiteData').branch_name)
l[c('SiteData').branch_name_key]=c('SiteData').branch_name;


return l;}


f.exports=i;}),null);

/** shared/request/getSameOriginTransport.js */




__d('getSameOriginTransport',['ex'],(function a(b,c,d,e,f,g){



function h(){

try{return b.XMLHttpRequest?
new b.XMLHttpRequest():
new ActiveXObject("MSXML2.XMLHTTP.3.0");}catch(
i){
throw new Error(c('ex')('getSameOriginTransport: %s',i.message));}}



f.exports=h;}),null);

/** shared/haste/ix.js */





__d('ix',['invariant'],(function a(b,c,d,e,f,g,h){



















var i={};












function j(k){
var l=i[k];

!!l||h(0,
'ix'+'(...): '+
'Unknown image path "%s"',
k);

return l;}






j.add=function(k){
var l=false;
for(var m in k)
if(!(m in i))
i[m]=k[m];};


















f.exports=j;}),null);

/** js/bootloader/Bootloader.js */










__d('Bootloader',['ix','Arbiter','BootloaderConfig','CSSLoader','CallbackDependencyManager','CSRFGuard','ErrorUtils','JSLog','ServerJS','TimeSlice','TimeSliceInteraction','ex','getAsyncParams','getSameOriginTransport','performanceAbsoluteNow'],(function a(b,c,d,e,f,g,h){




















var i=function ua(){},





























j={},
k={},
l={},


m={},

n=null,

o={},

p={},

q={},

r={},

s={},
t=[],
u={},



v={},



w={},



x={},

y=false,
z=false,

aa=




[],

ba=new (c('CallbackDependencyManager'))(),

ca=0,




da=c('BootloaderConfig').jsRetries||[],
ea=c('BootloaderConfig').jsRetryAbortNum,
fa=c('BootloaderConfig').jsRetryAbortTime,
ga=da.length>0,

ha=
{BOOTLOAD:'bootloader/bootload',
HASTE_RESPONSE:'bootloader/hasteResponse'};


c('ErrorUtils').addListener(function(ua){
ua.loadingUrls=Object.keys(p);},
true);

function ia(ua){
var va=l[ua];
if(va)
return va;


throw new Error(c('ex')('Bootloader: %s is not in the component map',ua));}


function ja(){
if(!n)
n=document.head||
document.getElementsByTagName('head')[0]||document.body;

return n;}


function ka(){

if(!ga)
return false;


var ua=t.length;
if(ua<ea)
return true;



var va=
t[ua-1]-t[ua-ea];
if(va<fa){
c('JSLog').error('JS retry abort');
ga=false;}


return ga;}





function la
(ua,
va,
wa,
xa){

var ya=document.createElement('script');
ya.src=ua;
ya.async=true;
if(va!=null&&o[va].crossOrigin)
ya.crossOrigin='anonymous';


var za=c('performanceAbsoluteNow')(),


ab=
c('TimeSlice').getGuardedContinuation('Bootloader script.onresponse');
c('TimeSliceInteraction').informGlobally('bootloader._loadJS').
addStringAnnotation('source',ua).
addStringAnnotation('hash',va!=null?va:'');

ya.onload=ab.bind(undefined,function(){

if(s[ua])
c('JSLog').info
('JS retry success [%s] at %s | time: %s | retries: %s',
va,
ua,
c('performanceAbsoluteNow')()-za,
s[ua]);


wa();});



ya.onreadystatechange=function(){
if(['loaded','complete'].includes(this.readyState))
ab.bind(undefined,wa)();}.

bind(this);

ya.onerror=ab.bind(undefined,function(){
if(!s[ua])
s[ua]=0;


if(ka()&&s[ua]<da.length){
t.push(c('performanceAbsoluteNow')());


setTimeout
(function(){
if(!ka())
return;



var bb=ya.parentNode;


bb.removeChild(ya);



la(ua,va,wa,bb);},

da[s[ua]]);


s[ua]++;}else{

r[ua]=true;
c('JSLog').error
('JS loading error [%s] at %s | time: %s | retries: %s'+
' | concurrency: %s',
va,
ua,
c('performanceAbsoluteNow')()-za,
s[ua],
Object.keys(p).length);


wa();}});



xa.appendChild(ya);
return ya;}





function ma
(ua,
va,
wa,
xa){

var ya=function ab(){return ta.done([wa],va);};
p[va]=c('performanceAbsoluteNow')();
if(ua==='js'){
la(va,wa,ya,xa);}else
if(ua==='async'){
na(va,ya);}else
if(ua==='css'){
var za=wa!=null&&o[wa].crossOrigin;
c('CSSLoader').loadStyleSheet(wa,va,xa,za,ya,
function(){
c('JSLog').warn
('CSS timeout [%s] at %s | concurrency: %s',
wa,
va,
Object.keys(p).length);

r[va]=true;
ya();});}}









function na(ua,va){
var wa=c('getAsyncParams')('GET');
for(var xa in wa){
var ya=encodeURIComponent(xa),
za=encodeURIComponent(wa[xa]);
ua+='&'+ya+'='+za;}


var ab=c('getSameOriginTransport')();
ab.open('GET',ua,true);
ab.onreadystatechange=function(){
if(ab.readyState===4){
var bb=ab.status===200?
JSON.parse(c('CSRFGuard').clean(ab.responseText)):
{},

cb=oa();
cb(bb,ua,va);}};


ab.send();}







function oa(){
return c('TimeSlice').guard
(function(ua,va,wa){

var xa=




ua.jsmods,ya=ua.resource_map,za=ua.bootloadable,ab=ua.ixData,bb=ua.allResources,

cb=[0,0,0];
if(ya)
cb=ta.setResourceMap(ya);

if(ab)
h.add(ab);

if(za)
ta.enableBootload(za);

ta.loadResources(bb||[],function(){
new (c('ServerJS'))().handle(xa||{});
wa();});


var db=
{uri:va,
components:Object.keys(za||{}),
resourceCounts:cb};

c('Arbiter').inform
(ha.HASTE_RESPONSE,
db,
c('Arbiter').BEHAVIOR_PERSISTENT);},


'Bootloader receiveEndpointData',
{isContinuation:true});}



function pa(ua){
if(!o[ua]){
c('JSLog').error('Missing unloading resource %s',ua);
return;}


if(o[ua].type==='css'){
c('CSSLoader').unloadStyleSheet(ua);
delete j[ua];
ba.unsatisfyPersistentDependency(ua);

if(u[ua]){
u[ua].cancel();
delete u[ua];}}}




function qa
(ua,
va,
wa,
xa){
var ya,
za={},
ab={},
bb={},

cb=window.CavalryLogger&&window.CavalryLogger.getInstance();

ua.forEach(function(fb){
var gb=o[fb];

if(!gb){
c('JSLog').error('Unable to resolve resource %s.',fb);
return;}

if(gb.nonblocking&&!c('BootloaderConfig').assumeNotNonblocking){
bb[fb]=true;}else 

ab[fb]=true;

if(!j[fb]){
j[fb]=true;
if(gb.permanent||c('BootloaderConfig').assumePermanent)
k[fb]=true;

za[fb]=gb;
cb&&cb.measureResources({name:fb,type:gb.type},wa);}});



var db=va;
if(xa)(function(){
var fb=c('performanceAbsoluteNow')();

db=function gb(){
var hb=Math.round(c('performanceAbsoluteNow')()-fb),

ib=Object.keys(ab).length,
jb=Object.keys(za),

kb=
{blocking_resources_downloaded:jb.filter(function(nb){
return (nb in ab);}).
length,
blocking_resources_count:ib,
all_resources_downloaded:jb.length,
all_resources_count:ib+Object.keys(bb).length,

err_count:Object.values(za).filter(function(nb){var ob=nb.src;
return (ob in r);}).
length},


lb=c('TimeSlice').getContext(),

mb=babelHelpers['extends']({},
xa,
kb,
{timeslice_context:lb&&lb.name,
start_time:fb,
duration:hb});


c('Arbiter').inform(ha.BOOTLOAD,mb,c('Arbiter').BEHAVIOR_PERSISTENT);

va&&va();};})
();


if(db)
ba.registerCallback(db,Object.keys(ab));




var eb=document.createDocumentFragment();

Object.entries(za).forEach(function(fb){var gb=fb[0],hb=fb[1],ib=hb.type,jb=hb.src;
ma(ib,jb,gb,eb);});

ja().appendChild(eb);}








function ra(){
return c('TimeSlice').guard
(function(ua,
va,
wa,
xa){


if(va){for(var ya=arguments.length,za=Array(ya>4?ya-4:0),ab=4;ab<ya;ab++)za[ab-4]=arguments[ab];
va.apply(ua,za);}

if(xa)
c('JSLog').error('JS loading error [%s] at %s',wa,ua.src);

ta.done([wa]);},

'Bootloader _onScriptDone',
{isContinuation:true});}






function sa(){
if(y)
return;

y=true;
Array.from(document.getElementsByTagName('link')).forEach(function(ua){


var va=void 0;
if(va=ua.getAttribute('data-bootloader-hash')){
o[va]={src:ua.href,type:'css'};

if(ua.getAttribute('data-permanent')||
c('BootloaderConfig').assumePermanent){
o[va].permanent=1;
k[va]=true;}


c('CSSLoader').registerLoadedStyleSheet(va,ua);
ta.done([va]);
x[va]=true;}});



Array.from(document.getElementsByTagName('script')).forEach(function(ua){
var va=void 0;
if(va=ua.getAttribute('data-bootloader-hash')){
o[va]={src:ua.src,type:'js'};

if(ua.getAttribute('async')){

if(window._btldr&&window._btldr[va]){

ta.done([va]);}else{

var wa=ra();
ua.onload=wa.bind(null,ua,ua.onload,va,false);
ua.onerror=wa.bind(null,ua,ua.onerror,va,true);
j[va]=true;}}else 



ta.done([va]);

x[va]=true;}});}










var ta=















{loadModules:function ua
(va){


var wa,xa=arguments.length<=1||arguments[1]===undefined?i:arguments[1],ya=arguments.length<=2||arguments[2]===undefined?'loadModules: unknown caller':arguments[2];

if(!z){
var za='Deferred: Bootloader.loadModules',
ab=c('TimeSlice').getGuardedContinuation(za);
aa.push([va,xa,ya,ab]);
return;}


var bb=c('performanceAbsoluteNow')(),

cb=JSON.stringify([ya,va]),
db=false;
if(!(cb in w)){
db=true;
w[cb]=bb;}


var eb=[],
fb=[],
gb=[],
hb=false,
ib=0;

va.forEach(function(jb){
var kb=ia(jb);

if(kb.needsAsync){
ib++;
if(jb in m){
fb.push(m[jb]);}else 

gb.push(jb);}



if(!(jb in v)){
hb=true;
v[jb]=bb;}


if(kb.module)

eb.push(jb);


fb.push.apply(fb,kb.resources);});




if(gb.length>0)(function(){
var jb=c('BootloaderConfig').payloadEndpointURI,

kb='async:'+ca++,
lb=encodeURIComponent(gb.join(',')),

mb=jb.indexOf('?')>-1?'&':'?';
o[kb]=
{src:''+jb+mb+'modules='+lb,
type:'async'};


fb.push(kb);
gb.forEach(function(nb){
m[nb]=kb;});})
();


qa
(fb,
e.bind(null,eb,xa),
null,

{ref:ya,
components:va,
has_new_component:hb,
first_identical_request:db,
async_resources_count:ib,
async_resources_downloaded:gb.length});},








loadResources:function ua
(va,
wa,
xa,
ya){
var za;
c('TimeSliceInteraction').informGlobally('Bootloader.loadResources').
addSetAnnotation('hashes',va);
sa();

if(xa)(function(){
var ab={};

va.forEach(function(cb){
ab[cb]=true;});


for(var bb in j)
if(!(bb in k||bb in ab||bb in x))
pa(bb);















x={};})();


qa(va,wa,ya);},

















requestJSResource_UNSAFE_NEEDS_REVIEW_BY_SECURITY_AND_XFN:function ua(va){
ma('js',va,null,ja());},







done:function ua(va,wa){
if(wa!=null){
q[wa]=c('performanceAbsoluteNow')()-p[wa];
delete p[wa];}









if(window.CavalryLogger)
window.CavalryLogger.done_js(va);





va.forEach(function(xa){



if(xa!=null){
j[xa]=true;
ba.satisfyPersistentDependency(xa);


if(o[xa]&&
o[xa].type==='css'&&
!u[xa])


u[xa]=define
(c('CSSLoader').moduleName(xa),
[],
'x',
2,
null,
1);}});},











enableBootload:function ua(va){
for(var wa in va)






if(!l[wa])
l[wa]=va[wa];









if(!z){
sa();
z=true;

aa.forEach
(function(xa){


xa[3](function(){
ta.loadModules.apply(ta,xa);});});




aa=[];}},










setResourceMap:function ua
(va){

var wa=0,
xa=0,
ya=0;
for(var za in va)
if(!o[za]){
o[za]=va[za];
wa++;}else 

if(o[za].src===va[za].src){
ya++;}else 

xa++;



return [wa,xa,ya];},





getURLToHashMap:function ua(){
var va={};
for(var wa in o)
va[o[wa].src]=wa;

return va;},


loadPredictedResources:function ua
(va,
wa){

va.forEach(function(xa){
x[xa]=true;});

qa(va,wa);},





loadPredictedResourceMap:function ua
(va,
wa){

ta.setResourceMap(va);
ta.loadPredictedResources(Object.keys(va),wa);},






getLoadingUrls:function ua(){
var va={},
wa=c('performanceAbsoluteNow')();
for(var xa in p)
va[xa]=wa-p[xa];

return va;},






getBootloadedComponents:function ua(){
return v;},





getLoadedUrlTimes:function ua(){
return q;},





getErrorUrls:function ua(){
return Object.keys(r);},




__debug:
{callbackManager:ba,
componentMap:l,
requested:j,
resources:o,
retries:s,
errors:r,
loading:p,
predictedResources:x,
bootloaded:v},


Events:ha};


f.exports=ta;}),null);

/** shared/page/setIntervalAcrossTransitions.js */




__d('setIntervalAcrossTransitions',['TimeSlice'],(function a(b,c,d,e,f,g){




var h=b.setInterval.nativeBackup||b.setInterval;





f.exports=function(){for(var i=arguments.length,j=Array(i),k=0;k<i;k++)j[k]=arguments[k];
j[0]=c('TimeSlice').guard(j[0],'setInterval');

return Function.prototype.apply.call(h,b,j);};}),
null);

/** js/bootloader/CSSLoader.js */




__d('CSSLoader',['CSSLoaderConfig','TimeSlice','TimeSliceInteraction','isEmpty','setIntervalAcrossTransitions'],(function a(b,c,d,e,f,g){















var h=20,
i=c('CSSLoaderConfig').timeout,

j=c('CSSLoaderConfig').loadEventSupported,
k,




l={},

m=[],

n,
o={};







function p(t){
if(k)
return;

k=true;

var u=document.createElement('link');
u.onload=function(){
j=true;
u.parentNode.removeChild(u);};

u.rel='stylesheet';
u.href='data:text/css;base64,';
t.appendChild(u);}






function q(){
var t,
u=[],
v=[];

if(Date.now()>=n){
for(t in o){
v.push(o[t].signal);
u.push(o[t].error);}

o={};}else 

for(t in o){
var w=o[t].signal,
x=window.getComputedStyle?
getComputedStyle(w,null):
w.currentStyle;
if(x&&parseInt(x.height,10)>1){
u.push(o[t].load);
v.push(w);
delete o[t];}}




for(var y=0;y<v.length;y++)
v[y].parentNode.removeChild(v[y]);


if(!c('isEmpty')(u)){
for(y=0;y<u.length;y++)
u[y]();

n=Date.now()+i;}


return c('isEmpty')(o);}








function r(t,u,v,w){


var x=document.createElement('meta');
x.id='bootloader_'+t.replace(/[^a-z0-9]/ig,'_');
u.appendChild(x);

var y=!c('isEmpty')(o);
n=Date.now()+i;
o[t]={signal:x,load:v,error:w};
if(!y)
var z=c('setIntervalAcrossTransitions')(function aa(){
if(q())
clearInterval(z);},

h);}



var s=











{loadStyleSheet:function t(u,v,w,x,y,z){
if(l[u])
throw new Error('CSS component '+u+' has already been requested.');

c('TimeSliceInteraction').informGlobally('CSSLoader.loadStyleSheet').
addStringAnnotation('source',v).
addStringAnnotation('name',u);

if(document.createStyleSheet){


var aa;
for(var ba=0;ba<m.length;ba++)
if(m[ba].imports.length<31){
aa=ba;
break;}


if(aa===undefined){

try{m.push(document.createStyleSheet());}catch(
ca){


z();
return;}

aa=m.length-1;}

m[aa].addImport(v);
l[u]=
{styleSheet:m[aa],
uri:v};

r(u,w,y,z);
return;}


var da=document.createElement('link');
da.rel='stylesheet';
da.type='text/css';
var ea=v.match(/^data:[^,]+,/);
if(ea&&!ea[0].match(/base64/))


v=ea[0]+encodeURIComponent(v.substr(ea[0].length));

da.href=v;
if(x)
da.crossOrigin='anonymous';

l[u]={link:da};

var fa=
c('TimeSlice').getGuardedContinuation('CSSLoader link.onresponse');
if(j){
da.onload=fa.bind(undefined,function ga(){
da.onload=da.onerror=null;
y();});

da.onerror=fa.bind(undefined,function ga(){
da.onload=da.onerror=null;
z();});}else{



r(u,w,y,z);
if(j===undefined)
p(w);}


w.appendChild(da);},









registerLoadedStyleSheet:function t(u,v){
if(l[u])
throw new Error
('CSS component '+u+' has been requested and should not be '+
'loaded more than once.');

l[u]={link:v};},







unloadStyleSheet:function t(u){
var v=l[u];
if(v==null)
return;

var w=v.link;
if(w){
w.onload=w.onerror=null;
w.parentNode.removeChild(w);}else{



var x=v.styleSheet;
for(var y=0;y<x.imports.length;y++)
if(x.imports[y].href==v.uri){
x.removeImport(y);
break;}}



delete o[u];
delete l[u];},


moduleName:function t(u){
return c('CSSLoaderConfig').modulePrefix+u;}};



f.exports=s;}),null);

/** shared/core/getMarkupWrap.js */




__d('getMarkupWrap',['invariant','ExecutionEnvironment'],(function a(b,c,d,e,f,g,h){










var i=
c('ExecutionEnvironment').canUseDOM?document.createElement('div'):null,








j={},

k=[1,'<select multiple="true">','</select>'],
l=[1,'<table>','</table>'],
m=[3,'<table><tbody><tr>','</tr></tbody></table>'],

n=[1,'<svg xmlns="http://www.w3.org/2000/svg">','</svg>'],

o=
{'*':[1,'?<div>','</div>'],

area:[1,'<map>','</map>'],
col:[2,'<table><tbody></tbody><colgroup>','</colgroup></table>'],
legend:[1,'<fieldset>','</fieldset>'],
param:[1,'<object>','</object>'],
tr:[2,'<table><tbody>','</tbody></table>'],

optgroup:k,
option:k,

caption:l,
colgroup:l,
tbody:l,
tfoot:l,
thead:l,

td:m,
th:m},





p=
['circle',
'clipPath',
'defs',
'ellipse',
'g',
'image',
'line',
'linearGradient',
'mask',
'path',
'pattern',
'polygon',
'polyline',
'radialGradient',
'rect',
'stop',
'text',
'tspan'];

p.forEach(function(r){
o[r]=n;
j[r]=true;});










function q(r){
!!i||h(0,'Markup wrapping node not initialized');
if(!Object.prototype.hasOwnProperty.call(o,r))
r='*';

if(!Object.prototype.hasOwnProperty.call(j,r)){
if(r==='*'){
i.innerHTML='<link />';}else 

i.innerHTML='<'+r+'></'+r+'>';

j[r]=!i.firstChild;}

return j[r]?o[r]:null;}



f.exports=q;}),null);

/** shared/core/createNodesFromMarkup.js */





__d('createNodesFromMarkup',['invariant','ExecutionEnvironment','getMarkupWrap'],(function a(b,c,d,e,f,g,h){











var i=
c('ExecutionEnvironment').canUseDOM?document.createElement('div'):null,




j=/^\s*<(\w+)/;







function k(m){
var n=m.match(j);
return n&&n[1].toLowerCase();}












function l(m,n){
var o=i;
!!i||h(0,'createNodesFromMarkup dummy not initialized');
var p=k(m),

q=p&&c('getMarkupWrap')(p);
if(q){
o.innerHTML=q[1]+m+q[2];

var r=q[0];
while(r--)
o=o.lastChild;}else 


o.innerHTML=m;


var s=o.getElementsByTagName('script');
if(s.length){

n||h(0,
'createNodesFromMarkup(...): Unexpected <script> element rendered.');

Array.from(s).forEach(n);}


var t=Array.from(o.childNodes);
while(o.lastChild)
o.removeChild(o.lastChild);

return t;}


f.exports=l;}),null);

/** shared/core/evalGlobal.js */




__d('evalGlobal',[],(function a(b,c,d,e,f,g){








function h(i){
if(typeof i!='string')
throw new TypeError
('JS sent to evalGlobal is not a string. Only strings are permitted.');


if(!i)
return;


var j=document.createElement('script');

try{j.appendChild(document.createTextNode(i));}catch(
k){
j.text=i;}

var l=document.getElementsByTagName('head')[0]||
document.documentElement;
l.appendChild(j);
l.removeChild(j);}


f.exports=h;}),null);

/** js/html/HTML.js */





__d('HTML',['invariant','Bootloader','createNodesFromMarkup','emptyFunction','evalGlobal'],(function a(b,c,d,e,f,g,h){










var i=/(<(\w+)[^>]*?)\/>/g,

j=
{abbr:true,
area:true,
br:true,
col:true,
embed:true,
hr:true,
img:true,
input:true,
link:true,
meta:true,
param:true};





















function k(l){'use strict';
if(l&&typeof l.__html==='string')




l=l.__html;


if(!(this instanceof k)){
if(l instanceof k)
return l;

return new k(l);}


if(l){
var m=typeof l;

m==='string'||h(0,
'HTML: Markup argument must be a string, got %s.',
m);}



this._markup=l||'';
this._defer=false;
this._nodes=null;
this._inlineJS=c('emptyFunction');
this._rootNode=null;}
k.prototype.







toString=function(){'use strict';
return this._markup;};
k.prototype.






getContent=function(){'use strict';
return this._markup;};
k.prototype.











getNodes=function(){'use strict';
this._fillCache();
return this._nodes;};
k.prototype.








getRootNode=function(){'use strict';

!this._rootNode||h(0,
'HTML: You cannot call `getRootNode` on an HTML instance more than once.');

var l=this.getNodes();

if(l.length===1){

this._rootNode=l[0];}else{


var m=document.createDocumentFragment();
for(var n=0;n<l.length;n++)
m.appendChild(l[n]);

this._rootNode=m;}


return this._rootNode;};
k.prototype.







getAction=function(){'use strict';
this._fillCache();
var l=function(){
this._inlineJS();}.
bind(this);
return this._defer?
function(){setTimeout(l,0);}:
l;};
k.prototype.





_fillCache=function(){'use strict';
if(this._nodes!==null)
return;

if(!this._markup){
this._nodes=[];
return;}



var l=this._markup.replace
(i,
function(o,p,q){
return j[q.toLowerCase()]?
o:
p+'></'+q+'>';}),



m=null,

n=c('createNodesFromMarkup')(l,function(o){

m=m||[];
m.push
(o.src?
c('Bootloader').requestJSResource_UNSAFE_NEEDS_REVIEW_BY_SECURITY_AND_XFN.bind(c('Bootloader'),o.src):
c('evalGlobal').bind(null,o.innerHTML));

o.parentNode.removeChild(o);});


if(m)
this._inlineJS=function(){
for(var o=0;o<m.length;o++)
m[o]();};




this._nodes=n;};
k.prototype.











setDeferred=function(l){'use strict';
this._defer=!!l;
return this;};
k.








isHTML=function(l){'use strict';
return !!l&&(l instanceof k||l.__html!==undefined);};
k.







replaceJSONWrapper=function(l){'use strict';
return l&&l.__html!==undefined?new k(l.__html):l;};



f.exports=k;}),null);

/** shared/Alea/Alea.js */
/**
 * Copyright (C) 2010 by Johannes Baagoe <baagoe@baagoe.org>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * @providesModule Alea
 * @preserve-header
 */






















__d('Alea',[],(function a(b,c,d,e,f,g){







function h(){
var j=4022871197,

k=function l(m){
m=m.toString();
for(var o=0;o<m.length;o++){
j+=m.charCodeAt(o);
var p=.02519603282416938*j;
j=p>>>0;
p-=j;
p*=j;
j=p>>>0;
p-=j;
j+=p*4294967296;}

return (j>>>0)*2.3283064365386963e-10;};


k.version='Mash 0.9';
return k;}


function i(){
return function(j){

var k=0,
l=0,
m=0,
n=1;

if(j.length===0)
j=[new Date()];

var o=new h();
k=o(' ');
l=o(' ');
m=o(' ');

for(var p=0;p<j.length;p++){
k-=o(j[p]);
if(k<0)
k+=1;

l-=o(j[p]);
if(l<0)
l+=1;

m-=o(j[p]);
if(m<0)
m+=1;}


o=null;

var q=function r(){
var s=2091639*k+n*2.3283064365386963e-10;
k=l;
l=m;
m=s-(n=s|0);
return m;};

q.version='Alea 0.9';
q.args=j;
return q;}

(Array.prototype.slice.call(arguments));}


f.exports=i;}),null);

/** __static_js_modules__/artilleryjspointtypes.js */




__d("ArtilleryJSPointTypes",[],(function a(b,c,d,e,f,g){

f.exports={ASYNC_REQUEST_SENT:1,ASYNC_RESPONSE_RECEIVED:2,TRACE_STARTED:3,TRACE_ENDED:4};}),

null);

/** shared/artillery/ArtilleryTraceIDUtils.js */





__d('ArtilleryTraceIDUtils',['Alea','ErrorUtils','ServerNonce'],(function a(b,c,d,e,f,g){





var h=
'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

i=c('Alea')(c('ServerNonce').ServerNonce),


j=function l(){
var m=0,
n=0,
o='';

for(var p=10;p>=0;p--){
if(m<6){

n=Math.floor(2147483648*i());
m=32;}





if(p===0)
n&=7;

o=h.charAt(n&63)+o;
n>>=6;
m-=6;}


return o;},


k=





{newTraceId:function l(){
var m=void 0;
for(var n=3;n>0;n--){
m=j();
if(m!=this.getDummyId())

return m;}




c('ErrorUtils').reportError(new Error('failed to generate valid Fbtrace id'));
return this.getDummyId();},


newObjectId:function l(){
return this.newTraceId();},


getDummyId:function l(){
return 'AAAAAAAAAAA';},







traceIdToBucket:function l(m){
var n=m.charAt(m.length-1);
return h.indexOf(n)%32;}};



f.exports=k;}),null);

/** shared/artillery/CurrentEventMeta.js */





__d("CurrentEventMeta",[],(function a(b,c,d,e,f,g){



var h=null,
i={},

j=
{__setCurrentEventID:function k(l){
h=l;},


__informEventDataReady:function k(l,m){
if(i[l]){
i[l].forEach(function(n){return n(m);});
delete i[l];}},



hasCurrentEvent:function k(){
return !!h;},


registerForCurrentEventData:function k(l){
if(h){
i[h]=i[h]||[];
i[h].push(l);}}};




f.exports=j;}),null);

/** shared/page/TimerStorage.js */




__d('TimerStorage',[],(function a(b,c,d,e,f,g){





var h=
{ANIMATION_FRAME:'ANIMATION_FRAME',
IDLE_CALLBACK:'IDLE_CALLBACK',
IMMEDIATE:'IMMEDIATE',
INTERVAL:'INTERVAL',
TIMEOUT:'TIMEOUT'},


i={};

Object.keys(h).forEach(function(k){return i[k]={};});

var j=babelHelpers['extends']({},
h,

{set:function k(l,m){
i[l][m]=true;},


unset:function k(l,m){
delete i[l][m];},


clearAll:function k(l,m){
Object.keys(i[l]).forEach(m);
i[l]={};}});



f.exports=j;}),



null);

/** shared/performance/performanceNow.js */






__d('performanceNow',['performance'],(function a(b,c,d,e,f,g){



var h;






if(c('performance').now){
h=function i(){return c('performance').now();};}else 

h=function i(){return Date.now();};


f.exports=h;}),null);

/** shared/core/nativeRequestAnimationFrame.js */




__d("nativeRequestAnimationFrame",[],(function a(b,c,d,e,f,g){

var h=
b.requestAnimationFrame&&b.requestAnimationFrame.nativeBackup||
b.requestAnimationFrame||
b.webkitRequestAnimationFrame||
b.mozRequestAnimationFrame||
b.oRequestAnimationFrame||
b.msRequestAnimationFrame;


f.exports=h;}),null);

/** shared/core/requestAnimationFramePolyfill.js */




__d('requestAnimationFramePolyfill',['emptyFunction','nativeRequestAnimationFrame'],(function a(b,c,d,e,f,g){




var h=0,









i=
c('nativeRequestAnimationFrame')||
function(j){
var k=Date.now(),
l=Math.max(0,16-(k-h));
h=k+l;
return b.setTimeout(function(){
j(Date.now());},
l);};



i(c('emptyFunction'));

f.exports=i;}),null);

/** shared/core/idle/IdleCallbackImplementation.js */





__d('IdleCallbackImplementation',['performanceNow','requestAnimationFramePolyfill'],(function a(b,c,d,e,f,g){






















var h=[],
i=0,
j=0,
k=-1,
l=false,

m=1000/60,
n=2;

function o
(y,
z){

var aa=j++;

h[aa]=y;
q();

if(z!=null&&z.timeout>0)
b.setTimeout
(function(){return w(aa);},
z.timeout);



return aa;}


function p(y){
h[y]=null;}



function q(){
if(!l){
l=true;
c('requestAnimationFramePolyfill')(function(y){
l=false;
s(c('performanceNow')()-y);});}}




function r(y){
var z=m-n;



if(y<z)
return z-y;




var aa=y%m;
if(aa>z||aa<n){
return 0;}else 

return z-aa;}



function s(y){
var z=c('performanceNow')();

if(z>k){
var aa=r(y);
if(aa>0){
var ba=z+aa;
v(ba);
k=ba;}}



if(t())
q();}



function t(){
return i<h.length;}


function u(){
while(t()){
var y=h[i];
i++;

if(y)
return y;}}





function v(y){
var z=void 0;
while(c('performanceNow')()<y&&(z=u()))
z(new x(y));}




function w(y){
var z=h[y];

if(z){
p(y);
z(new x(null));}}







function x(y){'use strict';
this.didTimeout=y==null;
this.$IdleCallbackDeadline_deadline=y;}
x.prototype.

timeRemaining=function(){'use strict';
var y=this.$IdleCallbackDeadline_deadline;

if(y!=null){
var z=c('performanceNow')();
if(z<y)
return y-z;}



return 0;};



f.exports=
{requestIdleCallback:o,
cancelIdleCallback:p};}),null);

/** shared/page/requestIdleCallbackAcrossTransitions.js */





__d('requestIdleCallbackAcrossTransitions',['IdleCallbackImplementation','TimeSlice'],(function a(b,c,d,e,f,g){






var h=b.requestIdleCallback||
c('IdleCallbackImplementation').requestIdleCallback;





f.exports=function i
(j,
k){

return h.call
(b,
c('TimeSlice').guard(j,'requestIdleCallback',{isContinuation:true}),
k);};}),

null);

/** shared/page/requestIdleCallback.js */





__d('requestIdleCallback',['TimerStorage','requestIdleCallbackAcrossTransitions'],(function a(b,c,d,e,f,g){











f.exports=function h
(i,
j){

var k=void 0,

l=function m(n){
c('TimerStorage').unset(c('TimerStorage').IDLE_CALLBACK,k);
i(n);};


k=c('requestIdleCallbackAcrossTransitions').call
(b,
l,
j);

c('TimerStorage').set(c('TimerStorage').IDLE_CALLBACK,k);

return k;};}),
null);

/** shared/core/TimeSliceRefCountingCallbackManager.js */





__d('TimeSliceRefCountingCallbackManager',['TimeSlice','TimeSliceRefCountingWrapper','requestIdleCallback'],(function a(b,c,d,e,f,g){










var h=false;

function i(){
if(!h){
c('TimeSliceRefCountingWrapper').registerRefCountingCallbackManager
(j);

h=true;}}









var j=





{onAllChildrenFinished:function k(l){
i();
var m=c('TimeSlice').getContext();
if(m!=null){
c('TimeSliceRefCountingWrapper').addOrCreateRefCounter(l,m.id);
return true;}else 

return false;},



scheduleCallbacks:function k(l){
if(l.length>0)
c('requestIdleCallback')(c('TimeSlice').guard
(function(){return l.forEach(function(m){return m();});},
'invoking onAllChildrenFinished callbacks',
{isContinuation:false}));}};





f.exports=j;}),null);

/** shared_core/artillery_core/TimingAnnotations.js */





__d('TimingAnnotations',['Map','Set'],(function a(b,c,d,e,f,g){var h,i,j,k;l.prototype.











addStringAnnotation=function(p,q){'use strict';return this;};l.prototype.

addSetAnnotation=function(p,q){'use strict';return this;};l.prototype.

addSetElement=function(p,q){'use strict';return this;};l.prototype.

registerOnBeforeSend=function(p){'use strict';return this;};function l(){'use strict';}h=babelHelpers.inherits


(m,l);i=h&&h.prototype;m.prototype.
addVectorAnnotation=function(p,q){'use strict';return this;};function m(){'use strict';h.apply(this,arguments);}function n(){'use strict';this.







$TimingAnnotations_setProps=null;this.
$TimingAnnotations_stringProps=null;this.
$TimingAnnotations_callbacks=[];}n.prototype.

addStringAnnotation=function(p,q){'use strict';
this.$TimingAnnotations_stringProps=this.$TimingAnnotations_stringProps||new (c('Map'))();
this.$TimingAnnotations_stringProps.set(p,q);
return this;};
n.prototype.

addSetAnnotation=function(p,q){'use strict';
var r=this.$TimingAnnotations_setProps||new (c('Map'))(),
s=r.get(p)||new (c('Set'))();
q.forEach(function(t){return s.add(t);});
r.set(p,s);
this.$TimingAnnotations_setProps=r;
return this;};
n.prototype.

addSetElement=function(p,q){'use strict';
var r=this.$TimingAnnotations_setProps||new (c('Map'))(),
s=r.get(p)||new (c('Set'))();
s.add(q);
r.set(p,s);
this.$TimingAnnotations_setProps=r;
return this;};
n.prototype.











registerOnBeforeSend=function(p){'use strict';
this.$TimingAnnotations_callbacks.push(p);
return this;};
n.prototype.

prepareToSend=function(){'use strict';
this.$TimingAnnotations_callbacks.forEach(function(fa){return fa(this);}.bind(this));
this.$TimingAnnotations_callbacks=[];
var p={};
if(this.$TimingAnnotations_setProps!=null)
for(var q=this.$TimingAnnotations_setProps,r=Array.isArray(q),s=0,q=r?q:q[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var t;if(r){if(s>=q.length)break;t=q[s++];}else{s=q.next();if(s.done)break;t=s.value;}var u=t,v=u[0],w=u[1];
p[v]=Array.from(w.values());}


var x={};
if(this.$TimingAnnotations_stringProps!=null)
for(var y=this.$TimingAnnotations_stringProps,z=Array.isArray(y),aa=0,y=z?y:y[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var ba;if(z){if(aa>=y.length)break;ba=y[aa++];}else{aa=y.next();if(aa.done)break;ba=aa.value;}var ca=ba,da=ca[0],ea=ca[1];
x[da]=ea;}



return {setProps:p,
stringProps:x};};

n.EmptyTimingAnnotations=l;n.EmptyTraceTimingAnnotations=m;n.TraceTimingAnnotations=o;j=babelHelpers.inherits


(o,n);k=j&&j.prototype;function o(){var p,q;'use strict';for(var r=arguments.length,s=Array(r),t=0;t<r;t++)s[t]=arguments[t];return q=(p=k.constructor).call.apply(p,[this].concat(s)),this.
$TraceTimingAnnotations_vectorProps=null,q;}o.prototype.



addVectorAnnotation=function(p,q){'use strict';
this.$TraceTimingAnnotations_vectorProps=this.$TraceTimingAnnotations_vectorProps||new (c('Map'))();
this.$TraceTimingAnnotations_vectorProps.set(p,q);
return this;};
o.prototype.

prepareToSend=function(){'use strict';
var p=k.prepareToSend.call(this);
p.vectorProps={};
if(this.$TraceTimingAnnotations_vectorProps!=null)
for(var q=this.$TraceTimingAnnotations_vectorProps,r=Array.isArray(q),s=0,q=r?q:q[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var t;if(r){if(s>=q.length)break;t=q[s++];}else{s=q.next();if(s.done)break;t=s.value;}var u=t,v=u[0],w=u[1];
p.vectorProps[v]=w;}


return p;};



f.exports=n;}),null);

/** shared/page/clearTimeout.js */




__d('clearTimeout',['TimerStorage','TimeSliceRefCountingWrapper'],(function a(b,c,d,e,f,g){





var h=b.clearTimeout.nativeBackup||b.clearTimeout,
i=c('TimerStorage').TIMEOUT;

f.exports=function(){for(var j=arguments.length,k=Array(j),l=0;l<j;l++)k[l]=arguments[l];
c('TimerStorage').unset(i,k[0]);
var m=i+k[0];
if(k[0]!=null&&c('TimeSliceRefCountingWrapper').isValidCancellationToken(m))
c('TimeSliceRefCountingWrapper').cancelTimeSlice(m);


return Function.prototype.apply.call(h,b,k);};}),
null);

/** shared/haste/requireWeak.js */




__d("requireWeak",[],(function a(b,c,d,e,f,g){




















function h(i,j){
e&&e.call(null,[i],j);}


f.exports=h;}),null);

/** shared/page/setTimeoutAcrossTransitions.js */




__d('setTimeoutAcrossTransitions',['TimerStorage','TimeSlice','TimeSliceRefCountingWrapper'],(function a(b,c,d,e,f,g){






var h=b.setTimeout.nativeBackup||b.setTimeout,
i=c('TimerStorage').TIMEOUT;





f.exports=function(){for(var j=arguments.length,k=Array(j),l=0;l<j;l++)k[l]=arguments[l];
var m=c('TimeSlice').guard(k[0],'setTimeout',{isContinuation:true});
k[0]=m;

var n=Function.prototype.apply.call(h,b,k);


c('TimeSliceRefCountingWrapper').registerForCancelling(i+n,k[0]);
return n;};}),
null);

/** shared/artillery/TimeSliceInteraction.js */





__d('TimeSliceInteraction',['ArtilleryJSPointTypes','Alea','Bootloader','CircularBuffer','CurrentEventMeta','ErrorUtils','ArtilleryTraceIDUtils','ServerNonce','SiteData','TimeSlice','TimeSliceRefCountingCallbackManager','TimingAnnotations','TimeSliceInteractionCoinflips','clearTimeout','performance','performanceAbsoluteNow','requestIdleCallbackAcrossTransitions','requireWeak','setTimeoutAcrossTransitions','Map','Set'],(function a(b,c,d,e,f,g){





















































var h=
{pointGroup:null,
type:null,
isPointOfInterest:null},

















i=250,
j=
new (c('CircularBuffer'))(i),

k=100,

l=


new (c('CircularBuffer'))(k),

m=60*1000,

n=null,



o=
new (c('Map'))(),

p=
new (c('TimingAnnotations').EmptyTimingAnnotations)(),

q=
new (c('TimingAnnotations').EmptyTraceTimingAnnotations)(),

r=c('Alea')(c('ServerNonce')),

s='artillery_javascript_actions',

t='artillery_javascript_lite_actions';

function u(aa){
return aa!==0&&r()*aa<=1;}


function v
(aa){

var ba=c('TimeSliceInteractionCoinflips').interaction_to_coinflip,
ca=c('TimeSliceInteractionCoinflips').interaction_to_lite_coinflip,
da=Object.prototype.hasOwnProperty.call(ba,aa)?
ba[aa]:
c('TimeSliceInteractionCoinflips').default_rate,
ea=Object.prototype.hasOwnProperty.call(ca,aa)?
ca[aa]:
c('TimeSliceInteractionCoinflips').lite_default_rate,
fa=new (c('Set'))();
if(u(ea))
fa.add('lite');

if(u(da))
fa.add('full');

var ga=0;
if(fa.has('lite')&&fa.has('full')){
ga=1/ea*(1/da);}else
if(fa.has('lite')){
ga=1/ea*(1-1/da);}else
if(fa.has('full'))
ga=1/da*(1-1/ea);


return {modes:fa,
probability:ga};}



function w(){
var aa=c('ErrorUtils').normalizeError(Error()).stackFrames;

if(aa)
aa.forEach(function(ba){return delete ba.text;});

return aa;}


function x(){
return o.size!==0;}


function y(aa){
return babelHelpers['extends']({},
aa,

{annotations:aa.annotations.prepareToSend()});}

z.





















create=function(aa){'use strict';var ba=
v(aa),ca=ba.modes,da=ba.probability,
ea=new z
(aa,
ca,
da);

if(ca.has('full')){
l.write
({interaction:ea,
ts:c('performanceAbsoluteNow')()});

ea.trace().
addStringAnnotation('initiatorType','manually_ended');}

return ea;};
z.








createAutoclosed=function(aa){var ba;'use strict';
var ca=z.create(aa);
if(ca.isEnabled())(function(){
ca.trace().addStringAnnotation('initiatorType','autoclosed');
var da=c('setTimeoutAcrossTransitions')


(c('TimeSlice').guard
(function(){
ca.trace().addStringAnnotation
('terminated_by_timeout_ms',
m.toString());

ca.finish();},

'timeout for interaction '+aa,
{isContinuation:false}),

m);


c('TimeSliceRefCountingCallbackManager').onAllChildrenFinished(function(){
c('clearTimeout')(da);
ca.finish();});})
();

return ca;};
z.










informGlobally=
function(aa,
ba){
'use strict';
if(!x())
return p;

var ca=c('performanceAbsoluteNow')(),
da=new (c('TimingAnnotations'))(),
ea=babelHelpers['extends']
({ts:ca,
name:aa,
annotations:da,
stacktrace:[],
guardStack:c('TimeSlice').getGuardNameStack()},
h,
ba);

da.addStringAnnotation('global_point','1');
o.forEach(function(fa){return fa.push(ea);});
return da;};
z.














informOnPage=
function(aa,
ba){
'use strict';
var ca=c('performanceAbsoluteNow')(),
da=new (c('TimingAnnotations'))(),
ea=babelHelpers['extends']
({ts:ca,
name:aa,
annotations:da,
stacktrace:[],
guardStack:[]},
h,
ba);

j.write(ea);
return da;};
























function z
(aa,
ba,
ca){
'use strict';this.$TimeSliceInteraction_asyncJoinPoints=null;this.$TimeSliceInteraction_enabled=true;this.$TimeSliceInteraction_heartbeatHandle=null;this.$TimeSliceInteraction_invokeBeginStack=[];this.$TimeSliceInteraction_isDefaultAsyncRequestInteraction=false;this.$TimeSliceInteraction_isDone=false;this.$TimeSliceInteraction_onBeforeUnloadRemovable=null;this.$TimeSliceInteraction_points=[];this.$TimeSliceInteraction_presendCallbacks=[];this.$TimeSliceInteraction_traceAnnotations=new (c('TimingAnnotations').TraceTimingAnnotations)();this.$TimeSliceInteraction_isWaitingForEventData=false;this.$TimeSliceInteraction_fireWhenDone=null;this.$TimeSliceInteraction_sampleRate=1;this.
































































































































































































































































































































































































$TimeSliceInteraction_receiveEventData=function(ea){
this.$TimeSliceInteraction_isWaitingForEventData=false;
Object.keys(ea).forEach
(function(fa){


var ga=''+ea[fa];
this.$TimeSliceInteraction_traceAnnotations.addStringAnnotation(fa,ga);}.
bind(this));

if(this.$TimeSliceInteraction_fireWhenDone)
this.$TimeSliceInteraction_fireWhenDone();}.

bind(this);this.$TimeSliceInteraction_tracingModes=ba;this.$TimeSliceInteraction_actionName=aa;this.$TimeSliceInteraction_interactionRate=ca;this.$TimeSliceInteraction_startTime=c('performanceAbsoluteNow')();var da=c('TimeSlice').getContext();this.inform('trace_started',{type:c('ArtilleryJSPointTypes').TRACE_STARTED,pointGroup:'e2e',isPointOfInterest:true});this.$TimeSliceInteraction_firstTimeSliceID=da!=null?da.id:null;o.set(this,[]);if(this.$TimeSliceInteraction_isEnabledForMode('full')){if(c('TimeSliceInteractionCoinflips').enable_heartbeat)this.$TimeSliceInteraction_heartbeatHandle=c('TimeSlice').enableHeartbeat();if(c('CurrentEventMeta').hasCurrentEvent()){this.$TimeSliceInteraction_isWaitingForEventData=true;c('CurrentEventMeta').registerForCurrentEventData(this.$TimeSliceInteraction_receiveEventData);}this.$TimeSliceInteraction_fullTraceID=c('ArtilleryTraceIDUtils').newTraceId();}if(ba.size===0){this.disable();}else if(n)this.$TimeSliceInteraction_onBeforeUnloadRemovable=n(function(){this.trace().addStringAnnotation('ended_early_because_page_is_unloading','1');this.finish(true);}.bind(this));}z.prototype.inform=function(aa,ba){'use strict';var ca=ba!=null&&ba.isPointOfInterest;if(!this.$TimeSliceInteraction_isEnabledForMode('full')&&!(this.$TimeSliceInteraction_isEnabledForMode('lite')&&ca))return p;var da=c('performanceAbsoluteNow')(),ea=new (c('TimingAnnotations'))(),fa=this.$TimeSliceInteraction_isEnabledForMode('full')?c('TimeSlice').getGuardNameStack():[];this.$TimeSliceInteraction_points.push(babelHelpers['extends']({ts:da,name:aa,annotations:ea,stacktrace:[],guardStack:fa},h,ba));if(!this.$TimeSliceInteraction_isEnabledForMode('full')){return p;}else return ea;};z.prototype.invokeWithProfiling=function(aa,ba){'use strict';if(!this.$TimeSliceInteraction_isEnabledForMode('full'))return ba();var ca=this.inform('start_'+aa);this.$TimeSliceInteraction_invokeBeginStack.push(ca);var da=c('ErrorUtils').applyWithGuard(ba,b,null,null,aa);this.inform('finished_'+aa);this.$TimeSliceInteraction_invokeBeginStack.pop();return da;};z.prototype.getCurrentInvocation=function(){'use strict';if(!this.$TimeSliceInteraction_isEnabledForMode('full')){return p;}else if(this.$TimeSliceInteraction_invokeBeginStack.length<1){return p;}else return this.$TimeSliceInteraction_invokeBeginStack[this.$TimeSliceInteraction_invokeBeginStack.length-1];};z.prototype.finish=function(aa){var ba,ca=this;'use strict';if(!this.$TimeSliceInteraction_enabled)return;if(this.$TimeSliceInteraction_isDone){c('ErrorUtils').reportError(new Error('Trace was already marked as ended'));}else (function(){if(ca.$TimeSliceInteraction_onBeforeUnloadRemovable)ca.$TimeSliceInteraction_onBeforeUnloadRemovable.remove();ca.inform('trace_ended',{type:c('ArtilleryJSPointTypes').TRACE_STARTED,pointGroup:'e2e',isPointOfInterest:true});ca.trace().addStringAnnotation('weight',''+1/(ca.$TimeSliceInteraction_sampleRate*ca.$TimeSliceInteraction_interactionRate));var da=c('performanceAbsoluteNow')(),ea=o.get(ca);o['delete'](ca);if(ca.$TimeSliceInteraction_heartbeatHandle)ca.$TimeSliceInteraction_heartbeatHandle.disable();if(ca.$TimeSliceInteraction_isEnabledForMode('lite'))if(aa){ca.$TimeSliceInteraction_postLite();}else c('requestIdleCallbackAcrossTransitions')(function(){return this.$TimeSliceInteraction_postLite();}.bind(ca));if(ca.$TimeSliceInteraction_isEnabledForMode('full')){var fa=function(){var ga=function(){this.$TimeSliceInteraction_post(da,ea);this.$TimeSliceInteraction_cleanup();}.bind(this);if(aa){ga();}else c('requestIdleCallbackAcrossTransitions')(ga);}.bind(ca);if(ca.$TimeSliceInteraction_isWaitingForEventData&&!aa){ca.$TimeSliceInteraction_fireWhenDone=fa;}else fa();}ca.$TimeSliceInteraction_isDone=true;})();};z.prototype.registerOnBeforeSend=function(aa){'use strict';if(this.$TimeSliceInteraction_isEnabledForMode('full'))this.$TimeSliceInteraction_presendCallbacks.push(aa);return this;};z.prototype.trace=function(){'use strict';if(!this.$TimeSliceInteraction_enabled)return q;return this.$TimeSliceInteraction_traceAnnotations;};z.prototype.getTraceID=function(){'use strict';if(this.$TimeSliceInteraction_enabled)return this.$TimeSliceInteraction_fullTraceID;return null;};z.prototype.addExtraSampleRate=function(aa){'use strict';this.$TimeSliceInteraction_sampleRate=aa;return this;};z.prototype.isEnabled=function(){'use strict';return this.$TimeSliceInteraction_enabled;};z.prototype.disable=function(){'use strict';this.$TimeSliceInteraction_enabled=false;o['delete'](this);if(this.$TimeSliceInteraction_heartbeatHandle)this.$TimeSliceInteraction_heartbeatHandle.disable();this.$TimeSliceInteraction_cleanup();};z.getPageLoadPoints=function(aa,ba){'use strict';var ca=[],da=j.read();for(var ea=da.length-1;ea>=0;ea--){var fa=da[ea];if(fa.ts<aa){return ca;}else if(fa.ts<ba)ca.push(y(fa));}return ca;};z.getInteractionIDsBetween=function(aa,ba){'use strict';var ca=[],da=l.read();for(var ea=da.length-1;ea>=0;ea--){var fa=da[ea],ga=fa.interaction,ha=fa.ts,ia=ga.getTraceID();if(ha<aa){return ca;}else if(ha<ba&&ia!=null)ca.push(ia);}return ca;};z.prototype.setIsDefaultAsyncInteraction=function(){'use strict';this.$TimeSliceInteraction_isDefaultAsyncRequestInteraction=true;return this;};z.prototype.receiveAsyncResponse=function(aa){'use strict';if(aa!=null&&aa.artillery_info&&this.$TimeSliceInteraction_isEnabledForMode('full')){this.$TimeSliceInteraction_addJoinInformationFromAsyncResponse(aa.artillery_info.artillery_join_points);}else this.disable();return this;};z.prototype.addArtilleryIDHeader=function(aa){'use strict';if(this.$TimeSliceInteraction_enabled)aa.setRequestHeader('X-ARTILLERY-REQ-METADATA',JSON.stringify({trace_id:this.$TimeSliceInteraction_fullTraceID}));return this;};z.prototype.finishAsyncRequest=function(){'use strict';if(this.$TimeSliceInteraction_isDefaultAsyncRequestInteraction&&this.$TimeSliceInteraction_isEnabledForMode('full'))if(this.$TimeSliceInteraction_asyncJoinPoints!=null){this.finish();}else this.disable();};z.prototype.$TimeSliceInteraction_addJoinInformationFromAsyncResponse=function(aa){'use strict';if(!this.$TimeSliceInteraction_isEnabledForMode('full'))return this;this.$TimeSliceInteraction_asyncJoinPoints=aa;return this;};z.prototype.

$TimeSliceInteraction_postLite=function(){'use strict';
c('Bootloader').loadModules(["Banzai"],function(aa){
var ba=[];
this.$TimeSliceInteraction_points.forEach(function(da){
if(da.isPointOfInterest)
ba.push({ts:da.ts,name:da.name});});


var ca=
{trace_id:this.$TimeSliceInteraction_fullTraceID,
action_name:this.$TimeSliceInteraction_actionName,
trace_annotations:this.$TimeSliceInteraction_traceAnnotations.prepareToSend(),
points:ba};

aa.post(t,ca);}.
bind(this),'TimeSliceInteraction');};
z.prototype.

$TimeSliceInteraction_post=function(aa,ba){'use strict';
this.$TimeSliceInteraction_presendCallbacks.forEach(function(ea){return ea();});
var ca=ba!=null?this.$TimeSliceInteraction_points.concat(ba):
this.$TimeSliceInteraction_points,
da=ca.map(y);

c('Bootloader').loadModules
(["Banzai","ResourceTimingBootloaderHelper","TimeSliceHelper"],
function(ea,fa,ga){
var ha=ga.getMetrics
(this.$TimeSliceInteraction_startTime,
aa,
1,
1,
true),

ia=ha.reduce(function(ma,na){

if(ma==null||
na.begin<ma.begin){

return na;}else 

return ma;},

null),
ja=
ia!=null&&
ia.begin<=this.$TimeSliceInteraction_startTime&&
ia.end>=this.$TimeSliceInteraction_startTime;

this.$TimeSliceInteraction_traceAnnotations.addStringAnnotation
('overflown_timeslice_buffer',
ja?'0':'1');

var ka=void 0;

if(c('performance')&&
c('performance').timing&&
c('performance').timing.navigationStart){

ka=fa.getMetrics
(this.$TimeSliceInteraction_startTime-c('performance').timing.navigationStart,
false,
null,
aa-c('performance').timing.navigationStart,
true);}else 


ka={};

var la=
{trace_id:this.$TimeSliceInteraction_fullTraceID,
join_points:this.$TimeSliceInteraction_asyncJoinPoints,
action_name:this.$TimeSliceInteraction_actionName,
points:da,
traceAnnotations:this.$TimeSliceInteraction_traceAnnotations.prepareToSend(),
timeslices:ga.formatMetricsForTransport(ha),
resource_timings:ka,
first_timeslice_id:this.$TimeSliceInteraction_firstTimeSliceID};

ea.post(s,la);}.
bind(this),'TimeSliceInteraction');};
z.prototype.

$TimeSliceInteraction_cleanup=function(){'use strict';
delete this.$TimeSliceInteraction_points;
delete this.$TimeSliceInteraction_presendCallbacks;};
z.prototype.

$TimeSliceInteraction_isEnabledForMode=function(aa){'use strict';
return this.$TimeSliceInteraction_enabled&&!this.$TimeSliceInteraction_isDone&&this.$TimeSliceInteraction_tracingModes.has(aa);};



c('requireWeak')&&c('requireWeak')('Run',function(aa){


if(c('SiteData')&&c('SiteData').haste_site==='www'&&
aa&&typeof aa.onBeforeUnload==='function')

n=aa.onBeforeUnload;});



f.exports=z;}),null);

/** shared/bit_map/ConstBitMap.js */




__d('ConstBitMap',[],(function a(b,c,d,e,f,g){


var h={};

'0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'.
split('').forEach(function(m,n){
h[m]=n;});










function i(m){'use strict';
if(m){
var n=l(m,0),
o=j(m);
this.$ConstBitMap_bits=k(o,n);}else 

this.$ConstBitMap_bits=[];}

i.prototype.

contains=function(m){'use strict';
return !!this.$ConstBitMap_bits[m];};
i.prototype.

__toBinaryString_FOR_TEST=function(){'use strict';
var m='';
for(var n=0;n<this.$ConstBitMap_bits.length;n++)
m+=this.$ConstBitMap_bits[n]?'1':'0';

return m;};





function j(m){
var n=m.length*6,
o=[],

p=1;
while(p<n){
var q=0;


while(p<n){
var r=l(m,p);
if(r==1)
break;

q++;
p++;}



var s=0;
while(q>=0&&p<n){
var t=l(m,p++);
s|=t<<q--;}


if(s)
o.push(s);}



return o;}


function k(m,n){
var o=[],
p=0;
m.forEach(function(q){
if(n===1)
for(var r=0;r<q;r++)
o[p+r]=1;


n=n===1?0:1;
p+=q;});

return o;}


function l(m,n){
return h[m[Math.floor(n/6)]]>>5-n%6&1;}




f.exports=i;}),null);

/** shared/core/memoizeStringOnly.js */






__d('memoizeStringOnly',[],(function a(b,c,d,e,f,g){

'use strict';




function h
(i){

var j={};
return function(k){
if(!Object.prototype.hasOwnProperty.call(j,k))
j[k]=i.call(this,k);

return j[k];};}



f.exports=h;}),null);

/** js/modules/AsyncFeature.js */





__d('AsyncFeature',['invariant','ConstBitMap','memoizeStringOnly'],(function a(b,c,d,e,f,g,h){






function i(q){

}

var j=c('memoizeStringOnly')
(function(q){return new (c('ConstBitMap'))(q);}),


k=2,
l=[],
m={};

function n(q){
var r=k++;
m[r]=j(q);
l.push(r);
return r;}


function o(q){
var r=l.length-1;

if(r<0){
i('AsyncFeature: Stack should not be empty!');
return;}


if(l[r]!==q){
i('AsyncFeature: _pop token does not match!');
return;}


delete m[q];
l.pop();}


var p=



















{SERVER_HAS_FEATURE:function q(r){


h(0,
'You made a call to AsyncFeature.SERVER'+"_HAS_FEATURE('%s') in an "+
'environment where it was not transformed properly. Do not try to '+
'use AsyncFeature.SERVER_HAS_FEATURE() dynamically or outside of '+
'a transformed JavaScript environment!',
r);},




__serverHasFeatureImpl:function q(r){
var s=l.length-1;
if(s<0){
i
('SERVER_HAS_FEATURE stack is empty! You are calling it in at a point '+
'where the AsyncResponse context has been lost! If you are using it in '+
'a JS::call() or JS::instance(), make sure to use it synchronously! '+
'You cannot use it in an asynchronous callback!');
























return true;}

return m[l[s]].contains(r);},


__invokeWithServerBitMap:function q
(r,
s){

if(typeof r!=='string'||r===''){
i('Invalid bitMapStr supplied to AsyncFeature.__invokeWithServerBitMap!');
return s();}


var t=n(r);

try{return s();}finally{

o(t);}},



__getBitMapFromString:j};


f.exports=p;}),null);

/** shared/haste/ifRequired.js */




__d('ifRequired',[],(function a(b,c,d,e,f,g){





















function h(i,j,k){
typeof k==='function'&&k();}


f.exports=h;}),null);

/** js/modules/AsyncFeatureLogging.js */





__d('AsyncFeatureLogging',['AsyncFeatureDeployment','SiteData','ifRequired'],(function a(b,c,d,e,f,g){var h,











i=
{maybeLogServerJSCheck:function l
(m,
n,
o){
},

maybeLogAsyncResponse:function l
(m,
n,
o){
}};


function j(){
return c('ifRequired')('URI',function(l){return String(l.getMostRecentURI());},function(){return null;});}


function k(){
return c('ifRequired')('URI',function(l){return String(l.getRequestURI());},function(){return null;});}


if(c('AsyncFeatureDeployment').module)(function(){
var l=c('AsyncFeatureDeployment').sampling,
m=
c('AsyncFeatureDeployment').module;

function n(o,p,q){
var r=l['default'];
if(l.event[o+'::'+p]){
r=l.event[o+'::'+p];}else
if(l.event[o])
r=l.event[o];


return r[q?'all_good':'not_all_good'];}


i.maybeLogServerJSCheck=
function(o,
p,
q){

var r=n('ServerJS',o,p);

if(Math.random()<r)
new m().
setClientRequestURI(k()).
setClientMostRecentURI(j()).
setClientSampleRate(l.coinflip/r).
setClientSvnRevision(c('SiteData').revision).
setHasValidFeatures(p).
setMajorSource('ServerJS').
setMinorSource(o).
setServerFeatures(q).
log();};



i.maybeLogAsyncResponse=
function(o,
p,
q){

var r=q&&q.__sf,

s=
typeof r==='string'&&r!=='',

t=n('AsyncRequest',o,s);

if(Math.random()<t)
new m().
setAsyncRequestURI(String(p.uri)).
setClientRequestURI(k()).
setClientMostRecentURI(j()).
setClientSampleRate(l.coinflip/t).
setClientSvnRevision(c('SiteData').revision).
setHasValidFeatures(s).
setMajorSource('AsyncRequest').
setMinorSource(o).
setServerFeatures(r).
log();};})

();


f.exports=i;}),null);

/** shared/haste/__debug.js */





__d("__debug",[],(function a(b,c,d,e,f,g){














f.exports={};}),null);

/** shared/serverjs/ServerJS.js */




__d('ServerJS',['AsyncFeature','ErrorUtils','ServerJSDefine','ex','ge','replaceTransportMarkers','__debug'],(function a(b,c,d,e,f,g){













var h=1,
i=2,

j=0,

k=function(){
var p;

return function(q){
if(p){
q(p);}else 

e(['AsyncFeatureLogging'],function(r){
p=r;
q(p);});};}



();








function l(){'use strict';
this.$ServerJS_moduleMap={};
this.$ServerJS_relativeTo=null;
this.$ServerJS_moduleIDsToCleanup={};
this.$ServerJS_meta=undefined;
this.$ServerJS_serverFeatures=undefined;}
l.prototype.





















handle=function(p,q){'use strict';
this.$ServerJS_meta=q;
if(p.__guard)
throw new Error
('ServerJS.handle called on data that has already been handled');

p.__guard=true;

this.$ServerJS_expectServerFeaturesSet('handle');





m(p.define||[],this.$ServerJS_handleDefine,this);
m(p.markup||[],this.$ServerJS_handleMarkup,this);
m(p.elements||[],this.$ServerJS_handleElement,this);
m(p.instances||[],this.$ServerJS_handleInstance,this);
var r=m(p.require||[],this.$ServerJS_handleRequire,this);


return {cancel:function s(){
for(var t=0;t<r.length;t++)
if(r[t])
r[t].cancel();}};};




l.prototype.








handlePartial=function(p,q){'use strict';
(p.instances||[]).forEach
(n.bind(null,this.$ServerJS_moduleMap,3));

(p.markup||[]).forEach
(n.bind(null,this.$ServerJS_moduleMap,2));

(p.elements||[]).forEach
(n.bind(null,this.$ServerJS_moduleMap,2));

return this.handle(p,q);};
l.prototype.






setRelativeTo=function(p){'use strict';
this.$ServerJS_relativeTo=p;
return this;};
l.prototype.






setServerFeatures=function(p){'use strict';
this.$ServerJS_serverFeatures=p;
return this;};
l.prototype.








cleanup=function(){'use strict';
var p=Object.keys(this.$ServerJS_moduleMap);


e.call(null,p,o);
this.$ServerJS_moduleMap={};



function q(s){
var t=this.$ServerJS_moduleIDsToCleanup[s],
u=t[0],
v=t[1];

delete this.$ServerJS_moduleIDsToCleanup[s];

var w=v?
'JS::call("'+u+'", "'+v+'", ...)':
'JS::requireModule("'+u+'")',
x=c('ex')
('%s did not fire because it has missing dependencies.\n%s',
w,
c('__debug').debugUnresolvedDependencies([u]));







throw new Error(x);}


for(var r in this.$ServerJS_moduleIDsToCleanup)
c('ErrorUtils').applyWithGuard
(q,
this,
[r],
null,
'ServerJS:cleanup'+' id: '+r);};


l.prototype.





$ServerJS_handleDefine=function(p,q,r,s){'use strict';
return c('ErrorUtils').applyWithGuard
(c('ServerJSDefine').handleDefine,c('ServerJSDefine'),

[p,q,r,s,this.$ServerJS_relativeTo],
null,
'JS::define');};

l.prototype.













$ServerJS_handleRequire=function(p,q,r,s,t){'use strict';
return c('ErrorUtils').applyWithGuard
(this.$ServerJS_handleRequireUnguarded,
this,
[p,q,r,s,t],
null,
q?'JS::call':'JS::requireModule');};

l.prototype.

$ServerJS_handleRequireUnguarded=function(p,q,r,s,t){'use strict';




if(typeof q=='object'){
t=q;
q=undefined;}

var u=[p].concat(r||[]).concat(t||[]),
v;

if(q){
v='__call__'+p+'.'+q;}else 

v='__requireModule__'+p;

v+='__'+j++;



this.$ServerJS_moduleIDsToCleanup[v]=[p,q];

var w=c('ErrorUtils').guard(function x(y){







var y=c.call(null,p);



delete this.$ServerJS_moduleIDsToCleanup[v];

s&&c('replaceTransportMarkers')(this.$ServerJS_relativeTo,s);
if(q){
if(!y[q])
throw new TypeError(c('ex')
('Module %s has no method "%s"',
p,
q));



this.$ServerJS_expectServerFeaturesSet('call:'+p+'.'+q);
c('AsyncFeature').__invokeWithServerBitMap
(this.$ServerJS_serverFeatures,
function(){return y[q].apply(y,s||[]);});


w.__SMmeta=y[q].__SMmeta||{};
w.__SMmeta.module=w.__SMmeta.module||p;
w.__SMmeta.name=w.__SMmeta.name||q;}}.

bind(this),q?
"JS::call('"+p+"', '"+q+"', ...)":
"JS::requireModule('"+p+"')");

















return define
(v,
u,
w,
h|i,
this,
1,
this.$ServerJS_meta);};

l.prototype.


















$ServerJS_handleInstance=function(p,q,r,s){'use strict';
return c('ErrorUtils').applyWithGuard
(this.$ServerJS_handleInstanceUnguarded,
this,
[p,q,r,s],
null,
'JS::instance');};

l.prototype.

$ServerJS_handleInstanceUnguarded=function(p,q,r,s){'use strict';
var t=null;
if(q)
t=function u(){





var v=c.call(null,q[0]);












c('replaceTransportMarkers')(this.$ServerJS_relativeTo,r);
this.$ServerJS_expectServerFeaturesSet('instance:'+p);
return c('AsyncFeature').__invokeWithServerBitMap
(this.$ServerJS_serverFeatures,
function(){
var w=Object.create(v.prototype);
v.apply(w,r);
return w;});}.


bind(this);

















define(p,q,t,i,null,s);};
l.prototype.










$ServerJS_handleMarkup=function(p,q,r){'use strict';
return c('ErrorUtils').applyWithGuard
(this.$ServerJS_handleMarkupUnguarded,
this,
[p,q,r],
null,
'JS::markup');};

l.prototype.

$ServerJS_handleMarkupUnguarded=function(p,q,r){'use strict';
define(p,['HTML'],function s(t){
return t.replaceJSONWrapper(q).getRootNode();},
0,null,r);};
l.prototype.







$ServerJS_handleElement=function(p,q,r,s){'use strict';
return c('ErrorUtils').applyWithGuard
(this.$ServerJS_handleElementUnguarded,
this,
[p,q,r,s],
null,
'JS::element');};

l.prototype.

$ServerJS_handleElementUnguarded=function(p,q,r,s){'use strict';






if(q===null&&r){
define(p,null,null,0,null,r);
return;}


var t=[],
u=0;















if(s){
t.push(s);
u=h;
r++;}


define(p,t,function v(w){
var x=c('ge')(q,w);
if(!x){
var y='';





throw new Error(c('ex')('Could not find element "%s"%s',q,y));}

return x;},
u,null,r);};
l.prototype.

$ServerJS_expectServerFeaturesSet=function(p){'use strict';
k(function(q){
q.maybeLogServerJSCheck
(p,
typeof this.$ServerJS_serverFeatures==='string'&&this.$ServerJS_serverFeatures!=='',
this.$ServerJS_serverFeatures);}.

bind(this));};





(function(){e(['HTML'],function(p){});});







function m(p,q,r){
return p.map(function s(t){
return q.apply(r,t);});}







function n(p,q,r){
var s=r[0];
if(!(s in p))
r[q]=(r[q]||0)+1;

p[s]=true;}


function o(){
return {};}


f.exports=l;}),null);

/** js/modules/JSCC.js */




__d('JSCC',[],(function a(global,require,requireDynamic,requireLazy,module,exports){

var factories={};

function createFactory(constructor){
var instance,
constructed=false;
return function(){
if(!constructed){
instance=constructor();
constructed=true;}

return instance;};}



var JSCC=
{get:function get(key){
if(!factories[key])




throw new Error('JSCC entry is missing');

return factories[key]();},







init:function init(constructors){
for(var key in constructors)
factories[key]=createFactory(constructors[key]);


return function clearJSCC(){
for(var key in constructors)
delete factories[key];};},








parse:function parse(jsccMapString){

return eval(jsccMapString);}};



module.exports=JSCC;}),null);

/** js/modules/PageEvents.js */




__d('PageEvents',[],(function a(b,c,d,e,f,g){

var h=




{NATIVE_ONLOAD:'onload/onload',





BIGPIPE_ONLOAD:'onload/onload_callback',




AJAXPIPE_ONLOAD:'ajaxpipe/onload_callback',





NATIVE_DOMREADY:'onload/dom_content_ready',





BIGPIPE_DOMREADY:'onload/domcontent_callback',




AJAXPIPE_DOMREADY:'ajaxpipe/domcontent_callback',


NATIVE_ONBEFOREUNLOAD:'onload/beforeunload',


NATIVE_ONUNLOAD:'onload/unload',






AJAXPIPE_ONUNLOAD:'onload/exit',

AJAXPIPE_SEND:'ajaxpipe/send',

AJAXPIPE_ONBEFORECLEARCANVAS:'ajaxpipe/onbeforeclearcanvas'};


f.exports=h;}),null);

/** __static_js_modules__/pageleteventconstsjs.js */




__d("PageletEventConstsJS",[],(function a(b,c,d,e,f,g){

f.exports={ARRIVE_START:"prearrive",ARRIVE_END:"arrive",CSS_START:"css",CSS_END:"css_load",DISPLAY_START:"display_start",DISPLAY_END:"display",JS_START:"jsstart",JS_END:"jsdone",ONLOAD_START:"preonload",ONLOAD_END:"onload",SETUP:"setup"};}),

null);

/** js/modules/pagelets/PageletSet.js */





__d('PageletSet',['Arbiter'],(function a(b,c,d,e,f,g){







var h={},

i=
{hasPagelet:function l(m){
return Object.prototype.hasOwnProperty.call(h,m);},


getPagelet:function l(m){





return h[m];},


getOrCreatePagelet:function l(m){
if(!i.hasPagelet(m)){
var n=new k(m);
h[m]=n;}

return i.getPagelet(m);},


getPageletIDs:function l(){
return Object.keys(h);},


removePagelet:function l(m){
if(i.hasPagelet(m)){
h[m].destroy();
delete h[m];}}};






function j(l,m){
return l.contains?
l.contains(m):

l.compareDocumentPosition(m)&16;}



function k(l){'use strict';
this.id=l;
this._root=null;
this._destructors=[];

this.addDestructor(function m(){
c('Arbiter').inform('pagelet/destroy',{id:this.id,root:this._root});}.
bind(this));}
k.prototype.

setRoot=function(l){'use strict';








this._root=l;};
k.prototype.

_getDescendantPagelets=function(){'use strict';
var l=[];
if(!this._root)
return l;


var m=i.getPageletIDs();
for(var n=0;n<m.length;n++){
var o=m[n];
if(o===this.id)
continue;

var p=h[o];
if(p._root&&j(this._root,p._root))
l.push(p);}



return l;};
k.prototype.

addDestructor=function(l){'use strict';
this._destructors.push(l);};
k.prototype.

destroy=function(){'use strict';

var l=this._getDescendantPagelets();
for(var m=0;m<l.length;m++){
var n=l[m];
if(i.hasPagelet(n.id))
i.removePagelet(n.id);}



for(m=0;m<this._destructors.length;m++)
this._destructors[m]();


if(this._root)
while(this._root.firstChild)
this._root.removeChild(this._root.firstChild);};





f.exports=i;}),null);

/** shared/core/createCancelableFunction.js */






__d('createCancelableFunction',['emptyFunction'],(function a(b,c,d,e,f,g){












function h




(i){

var j=i,
k=function l(){for(var m=arguments.length,n=Array(m),o=0;o<m;o++)n[o]=arguments[o];
return j.apply(this,n);};


k.cancel=function(){
j=c('emptyFunction');};


return k;}


f.exports=h;}),null);

/** js/modules/Run.js */





__d('Run',['Arbiter','ExecutionEnvironment','PageEvents','TimeSlice','createCancelableFunction','emptyFunction','performanceAbsoluteNow'],(function a(b,c,d,e,f,g){
















var h='onunloadhooks',
i='onafterunloadhooks',
j=c('Arbiter').BEHAVIOR_STATE;
function k(aa,ba){
var ca=b.CavalryLogger,
da=ca&&ca.getInstance();
if(!da)
return;

if(ba){
da.setAbsTimeStamp&&da.setAbsTimeStamp(aa,ba);}else 

da.setTimeStamp(aa);}















function l(){
return !window.loading_page_chrome;}
























function m(aa){
var ba=b.PageHooks;
if(window.domready&&ba){
ba.runHook(aa,'domreadyhooks:late');
return {remove:c('emptyFunction')};}else 

return t('domreadyhooks',aa);}












function n(aa){
var ba=b.PageHooks;
if(window.loaded&&ba){
var ca=setTimeout(function(){
ba.runHook(aa,'onloadhooks:late');},
0);
return {remove:function da(){return clearTimeout(ca);}};}else 

return t('onloadhooks',aa);}































function o
(aa,
ba){

if(ba===undefined)
ba=l();

return ba?
t('onbeforeleavehooks',aa):
t('onbeforeunloadhooks',aa);}








function p(aa,ba){



if(!window.onunload)
window.onunload=c('TimeSlice').guard(function(){
c('Arbiter').inform(c('PageEvents').NATIVE_ONUNLOAD,true,j);},
'window.onunload');

return t(aa,ba);}





function q(aa){
return p(h,aa);}





function r(aa){
return p(i,aa);}






function s(aa){
return t('onleavehooks',aa);}


function t(aa,ba){






ba=c('createCancelableFunction')(ba);
window[aa]=(window[aa]||[]).concat(ba);


return {remove:function ca(){
ba.cancel();}};}




function u(aa){
window[aa]=[];}




var v=c('TimeSlice').guard(function(){
c('Arbiter').inform(c('PageEvents').NATIVE_DOMREADY,true,j);},
'DOMContentLoaded');

b._domcontentready=v;








function w(){
var aa=document,
ba=window;
if(aa.addEventListener){
var ca=/AppleWebKit.(\d+)/.exec(navigator.userAgent);
if(ca&&ca[1]<525){
var da=setInterval(function(){
if(/loaded|complete/.test(aa.readyState)){
v();
clearInterval(da);}},

10);}else 

aa.addEventListener('DOMContentLoaded',v,true);}else{


var ea='javascript:void(0)';
if(ba.location.protocol=='https:')


ea='//:';






aa.write
('<script onreadystatechange="if (this.readyState==\'complete\') {'+
'this.parentNode.removeChild(this);_domcontentready();}" '+
'defer="defer" src="'+ea+'"><\/script\>');}



var fa=ba.onload;
ba.onload=c('TimeSlice').guard(function(){
k('t_layout');
fa&&fa();
c('Arbiter').inform(c('PageEvents').NATIVE_ONLOAD,true,j);},
'window.onload');

ba.onbeforeunload=c('TimeSlice').guard(function(){
var ga={};
c('Arbiter').inform(c('PageEvents').NATIVE_ONBEFOREUNLOAD,ga,j);






if(!ga.warn)
c('Arbiter').inform(c('PageEvents').AJAXPIPE_ONUNLOAD,{transition_type:'normal'});

return ga.warn;},
'window.onbeforeunload');}


var x=c('Arbiter').registerCallback(function(){
var aa=c('performanceAbsoluteNow')();
if(window.console&&console.timeStamp)
console.timeStamp('perf_trace {"name": "e2e",'+
' "parent": "PageEvents.BIGPIPE_ONLOAD"}');


k('t_onload',aa);
c('Arbiter').inform
(c('PageEvents').BIGPIPE_ONLOAD,
{ts:aa},
j);},

[c('PageEvents').NATIVE_ONLOAD]),

y=c('Arbiter').registerCallback(function(){
k('t_domcontent');



var aa={timeTriggered:Date.now()};
c('Arbiter').inform(c('PageEvents').BIGPIPE_DOMREADY,aa,j);},
[c('PageEvents').NATIVE_DOMREADY]);

if(c('ExecutionEnvironment').canUseDOM)
w();


var z=
{onLoad:m,
onAfterLoad:n,
onLeave:s,
onBeforeUnload:o,
onUnload:q,
onAfterUnload:r,

__domContentCallback:y,
__onloadCallback:x,

__removeHook:u};


f.exports=z;}),null);

/** shared/haste/__getCompileTime.js */





__d("__getCompileTime",[],(function a(b,c,d,e,f,g){





f.exports={};}),null);

/** shared/haste/__getFactoryTime.js */





__d("__getFactoryTime",[],(function a(b,c,d,e,f,g){





f.exports={};}),null);

/** shared/haste/__getTotalFactories.js */





__d("__getTotalFactories",[],(function a(b,c,d,e,f,g){





f.exports={};}),null);

/** shared/page/setTimeout.js */




__d('setTimeout',['TimerStorage','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g){








f.exports=function(){for(var h=arguments.length,i=Array(h),j=0;j<h;j++)i[j]=arguments[j];
var k,
l=i[0];
i[0]=function(){
c('TimerStorage').unset(c('TimerStorage').TIMEOUT,k);
Function.prototype.apply.call(l,this,arguments);};

k=c('setTimeoutAcrossTransitions').apply(b,i);
c('TimerStorage').set(c('TimerStorage').TIMEOUT,k);
return k;}.
bind(this);}),null);

/** js/modules/BigPipe.js */





__d('BigPipe',['ix','Arbiter','BigPipeExperiments','BigPipePlugins','Bootloader','ErrorUtils','JSCC','PageEvents','PageletEventConstsJS','PageletSet','Run','ServerJS','TimeSlice','$','ge','performanceAbsoluteNow','setTimeout','setTimeoutAcrossTransitions','__getTotalFactories','__getCompileTime','__getFactoryTime'],(function a(b,c,d,e,f,g,h){







































var i=document.documentMode||
+(/MSIE.(\d+)/.exec(navigator.userAgent)||[])[1],

j=c('Arbiter').BEHAVIOR_STATE,
k=c('Arbiter').BEHAVIOR_PERSISTENT,

l=[],

m=console.timeStamp&&
window.location.search.indexOf('pagelet_ts=1')>0;

function n(x,y){
if(x)
for(var z=0;z<x.length;z++)

c('ErrorUtils').applyWithGuard(new Function(x[z]),y);}






function o(){
q.forEach
(function(x){return x.inform('release_pagelet_suspension');});

q=[];}


var p=0,
q=[];


function r(x){'use strict';

Object.assign(this,
{arbiter:c('Arbiter'),
rootNodeID:'content',
lid:null,
isAjax:false,
domContentCallback:c('Run').__domContentCallback,
onloadCallback:c('Run').__onloadCallback,
domContentEvt:c('PageEvents').BIGPIPE_DOMREADY,
onloadEvt:c('PageEvents').BIGPIPE_ONLOAD,
forceFinish:false,
_phaseDisplayEndCallbacks:[],
_currentPhase:0,
_lastPhase:-1,
_lastRealPhase:-1,
_livePagelets:{},
_displayDoneFired:false,
_awaitingLIDEventQueue:[]},
x);

if(this.automatic){
this._relevant_instance=r._current_instance;}else 

r._current_instance=this;


this._serverJS=new (c('ServerJS'))();
this._serverJS.setServerFeatures(this.__sf);




this._informEventExternal(r.Events.init,{arbiter:this.arbiter},c('Arbiter'));

this._displayDoneCallback=this.arbiter.registerCallback(function(){
var y=this._captureUsageSnapshot();

this._informEventExternal(r.Events.displayed,
{rid:this.rid,
ajax:this.isAjax,
usageSnapshot:y});}.

bind(this),['display_done']);

this.arbiter.registerCallback(this.domContentCallback,
['pagelet_displayed_all']);




this._beginPhase(0);

this.arbiter.registerCallback(this.onloadCallback,['bigpipe_e2e_reported']);
this._loadedCallback=this.arbiter.registerCallback(function(){
this._informEventExternal(r.Events.loaded,
{rid:this.rid,
ajax:this.isAjax});

this.arbiter.inform('bigpipe_e2e_reported',true);}.
bind(this),['pagelet_displayed_all']);




this.arbiter.registerCallback
(this._serverJS.cleanup.bind(this._serverJS),
[this.onloadEvt]);}
r.prototype.

_beginPhase=function(x){'use strict';
this._informEventExternal('phase_begin',{phase:x});
this.arbiter.inform('phase_begin_'+x,true,j);};
r.prototype.

_endPhase=function(x){'use strict';
this.arbiter.inform('phase_arrived_'+x,true,j);
if(!this.isAjax)

l.push(Date.now());};

r.prototype.

_displayPageletHandler=function(x){'use strict';
if(this.displayCallback){
this.displayCallback(this._displayPagelet.bind(this,x));}else 

this._displayPagelet(x);};

r.prototype.




_displayPagelet=function(x){'use strict';
this._informPageletEvent(c('PageletEventConstsJS').DISPLAY_START,x);
var y=this._getPagelet(x),
z=[];

for(var aa in x.content){
var ba=x.content[aa];

if(x.append)
aa=this._getPageletRootID(x);

var ca=c('ge')(aa);
if(!ca)





continue;


if(aa===y.id)
y.setRoot(ca);


if(ba){
if(x.append){
u(ca,ba,z);}else
if(ba.nodeType){


ca.innerHTML='';
u(ca,ba,z);}else{


ca.innerHTML=s(ba);
z.push(ca);}


if(c('BigPipeExperiments').enable_bigpipe_plugins)
c('BigPipePlugins').runPluginOnPagelet(ca);}




var da=ca.getAttribute('data-referrer');
if(!da)
ca.setAttribute('data-referrer',aa);}


x.displayed=true;

if(x.jsmods){
var ea=this._serverJS.handlePartial
(x.jsmods,

{pagelet:x.id});


y.addDestructor(ea.cancel.bind(ea));}


var fa=[];
z.forEach(function(ga){

if(typeof ga.getElementsByTagName==='function'){
var ha=ga.getElementsByTagName('img');
for(var ia=0;ia<ha.length;ia++)
fa.push(ha[ia].src);}});



if(fa.length>0)
this._informEventExternal('images_displayed',
{pagelet:x.id,
timeslice:c('TimeSlice').getContext().id,
images:fa});



this._informPageletEvent(c('PageletEventConstsJS').DISPLAY_END,x);
this.arbiter.inform(x.id+'_displayed',true,j);};
r.prototype.

_captureUsageSnapshot=function(){'use strict';
var x=window.__bodyWrapper;
if(!x.getCodeUsage)
return {};


var y=babelHelpers['extends']({},x.getCodeUsage()),
z=document.body.outerHTML,

aa={};
Array.from(document.styleSheets).forEach(function(ba){
if(ba.href)
aa[ba.href]=true;});




return {js_calls:y,
document_html:z,
stylesheets:aa};};

r.prototype.








_onPhaseDisplayEnd=function(){'use strict';


if(this._currentPhase===this._ttiPhase){
var x=c('Bootloader').__debug.predictedResources,
y=c('Bootloader').__debug.requested,
z=0;
for(var aa in y)
z+=!(aa in x);


var ba=
{pre_tti_non_ef_resources:z},


ca=this._captureUsageSnapshot();

if(!this.isAjax){


ba.cjs_factory_count_tti=c('__getTotalFactories')();
ba.cjs_compile_time_tti=c('__getCompileTime')();
ba.cjs_factory_time_tti=c('__getFactoryTime')();}


this._informEventExternal(r.Events.tti,
{phase:this._ttiPhase,
rid:this.rid,
ajax:this.isAjax,
metrics:ba,
usageSnapshot:ca});

this.arbiter.inform('tti_pagelet_displayed',true,j);

if(this._secondFlushPayload){
this.loadSecondFlushPayload(this._secondFlushPayload);
delete this._secondFlushPayload;}}



if(this._isRelevant()){
if(this._currentPhase===this._lastRealPhase)
this._fireDisplayDone();

if(this._currentPhase===this._lastPhase){
if(!this._displayDoneFired)


this._fireDisplayDone();


this.arbiter.inform('pagelet_displayed_all',true,j);}}



this._currentPhase++;

if(i<=8){



c('setTimeout')(this._beginPhase.bind(this,this._currentPhase),20);}else 

this._beginPhase(this._currentPhase);};

r.prototype.

_fireDisplayDone=function(){'use strict';
this._displayDoneFired=true;
this.arbiter.inform('display_done',true);};
r.prototype.





_downloadJsForPagelet=function(x){'use strict';
this._informPageletEvent(c('PageletEventConstsJS').JS_START,x);
c('Bootloader').loadResources
(x.allResources||[],
function y(){
this._informPageletEvent(c('PageletEventConstsJS').JS_END,x);




x.requires=x.requires||[];








if(!this.isAjax||x.phase>=1)
x.requires.push('uipage_onload');


var z=function(){
this._informPageletEvent(c('PageletEventConstsJS').ONLOAD_START,x);
if(this._isRelevantPagelet(x))
n(x.onload);

this._informPageletEvent(c('PageletEventConstsJS').ONLOAD_END,x);





this.arbiter.inform('pagelet_onload',true);

x.provides&&
this.arbiter.inform(x.provides,true,j);}.
bind(this),

aa=function(){
this._isRelevantPagelet(x)&&
n(x.onafterload);}.
bind(this);

this.arbiter.registerCallback(z,x.requires);
this.arbiter.registerCallback(aa,[this.onloadEvt]);}.
bind(this),
false,
x.id);};

r.prototype.

_getPagelet=function(x){'use strict';
var y=this._getPageletRootID(x);
return c('PageletSet').getPagelet(y);};
r.prototype.

_getPageletRootID=function(x){'use strict';
var y=x.append;
if(y)
return y==='bigpipe_root'?this.rootNodeID:y;

return Object.keys(x.content)[0]||null;};
r.prototype.




_isRelevant=function(){'use strict';
return this==r._current_instance||
this.automatic&&
this._relevant_instance==r._current_instance||
this.jsNonBlock||
this.forceFinish||
r._current_instance&&
r._current_instance.allowIrrelevantRequests;};
r.prototype.

_isRelevantPagelet=function(x){'use strict';

if(!this._isRelevant())
return false;

var y=this._getPageletRootID(x);
return !!this._livePagelets[y];};
r.prototype.







_informEventExternal=function(x,y,z){'use strict';
y=y||{};
z=z||this.arbiter;

y.ts=c('performanceAbsoluteNow')();

if(m)
console.timeStamp(x+' '+JSON.stringify(y));


if(this.lid===null){
this._awaitingLIDEventQueue.push([z,x,y]);}else{

y.lid=this.lid;
z.inform(x,y,k);}};

r.prototype.








_informPageletEvent=function(x,y){'use strict';
var z=
{event:x,
id:y.id};

if(y.phase)
z.phase=y.phase;

if(y.categories)
z.categories=y.categories;

if(y.allResources)
z.allResources=y.allResources;

if(y.displayResources)
z.displayResources=y.displayResources;


this._informEventExternal('pagelet_event',z);};
r.

getCurrentInstance=function(){'use strict';
return r._current_instance;};
r.prototype.

loadSecondFlushPayload=function(x){'use strict';
var y={id:'second_flush'};
this._informPageletEvent(c('PageletEventConstsJS').CSS_START,y);
this.arbiter.registerCallback(this._displayDoneCallback,['pagelet_prefetch']);
c('Bootloader').loadPredictedResourceMap(x.resources||{},function(){
this._informPageletEvent(c('PageletEventConstsJS').CSS_END,y);
this._informPageletEvent(c('PageletEventConstsJS').DISPLAY_START,y);
if(x.jsmods)
this._serverJS.handlePartial(x.jsmods);

this._informPageletEvent(c('PageletEventConstsJS').DISPLAY_END,y);
this.arbiter.inform('pagelet_prefetch',true);}.
bind(this));};
r.








suspendPageletDisplay=function(x){'use strict';
var y=c('setTimeoutAcrossTransitions')(function(){
z();},
x),
z=function aa(){

if(!y)
return;


clearTimeout(y);
y=null;
p--;

if(p===0)
o();};


p++;
return z;};




Object.assign(r.prototype,






{beforePageletArrive:function x(y){
c('TimeSlice').guard(function(){
return (this._informPageletEvent(c('PageletEventConstsJS').ARRIVE_START,{id:y}));}.bind(this),
'beforePageletArrive '+y,
{root:true})();},





setSecondFlushPayload:function x(y){

if(y.immediate_start||
this._ttiPhase!=undefined&&this._currentPhase>this._ttiPhase){

this.loadSecondFlushPayload(y);}else 

this._secondFlushPayload=y;},



setPageID:function x(y){
this.lid=y;
this._awaitingLIDEventQueue.forEach(function(z){var aa=z[0],ba=z[1],ca=z[2];
ca.lid=y;
aa.inform(ba,ca,k);});

this._awaitingLIDEventQueue=[];},








onPageletArrive:c('ErrorUtils').guard(function(x){
this._informPageletEvent(c('PageletEventConstsJS').ARRIVE_END,x);
x.content=x.content||{};

if(c('BigPipeExperiments').preparse_content=='on_arrive'){
v(x);}else
if(c('BigPipeExperiments').preparse_content=='after_tti'){
this.arbiter.registerCallback(function(){return v(x);},['tti_pagelet_displayed']);}else
if(c('BigPipeExperiments').preparse_content=='on_idle'){
if(b.requestIdleCallback){
b.requestIdleCallback(function(){return v(x);});}else 

c('setTimeout')(function(){return v(x);},1);}else

if(c('BigPipeExperiments').preparse_content=='on_idle_after_tti'){
this.arbiter.registerCallback
(function(){
if(b.requestIdleCallback){
b.requestIdleCallback(function(){return v(x);});}else 

c('setTimeout')(function(){return v(x);},1);},


['tti_pagelet_displayed']);}else

if(c('BigPipeExperiments').preparse_content=='on_idle_after_tti_ric')
this.arbiter.registerCallback
(function(){
if(b.requestIdleCallback)
b.requestIdleCallback(function(){return v(x);});},


['tti_pagelet_displayed']);



var y=x.phase;

if(!this._phaseDisplayEndCallbacks[y])
this._phaseDisplayEndCallbacks[y]=this.arbiter.registerCallback
(this._onPhaseDisplayEnd.bind(this),
['phase_arrived_'+y]);



this.arbiter.registerCallback
(this._phaseDisplayEndCallbacks[y],
[x.id+'_displayed']);


var z=this._getPageletRootID(x),
aa=c('PageletSet').getOrCreatePagelet(z);

if(x.last_pagelet)
this._lastRealPhase=y;

if(x.the_end)
this._lastPhase=y;


if(x.tti_phase!==undefined)
this._ttiPhase=x.tti_phase;


this._livePagelets[aa.id]=true;
aa.addDestructor(function(){
delete this._livePagelets[aa.id];}.
bind(this));

if(x.jscc_map){
var ba=c('JSCC').parse(x.jscc_map),
ca=c('JSCC').init(ba);
aa.addDestructor(ca);}


c('Bootloader').setResourceMap(x.resource_map||{});
if(x.bootloadable)
c('Bootloader').enableBootload(x.bootloadable);

h.add(x.ixData);


this._informPageletEvent(c('PageletEventConstsJS').SETUP,x);


var da=
['phase_begin_'+x.phase,
x.id+'_css_end'];

if(p>0){


da.push('release_pagelet_suspension');
q.push(this.arbiter);}

(x.display_dependency||[]).forEach(function(ia){return da.push(ia+'_displayed');});
if(x.display_group){


var ea=document.body.getElementsByClassName('pagelet-group');
for(var fa=0;fa<ea.length;fa++){
var ga=ea[fa];
if(ga.id===x.id)
break;

if(ga.getAttribute('data-display-group')===x.display_group)
da.push(ga.id+'_displayed');}}



this.arbiter.registerCallback
(function(){return this._displayPageletHandler(x);}.bind(this),
da);



this.arbiter.registerCallback(function(){
this._informPageletEvent(c('PageletEventConstsJS').CSS_START,x);
var ia=x.displayResources||[];

c('Bootloader').loadResources
(ia,
function ja(){
this._informPageletEvent(c('PageletEventConstsJS').CSS_END,x);
this.arbiter.inform(x.id+'_css_end',true,j);}.
bind(this),
false,
x.id);}.


bind(this),['phase_begin_'+y]);

this.arbiter.registerCallback(this._loadedCallback,['pagelet_onload']);

var ha=[x.id+'_displayed'];
if(!this.jsNonBlock)
ha.push(this.domContentEvt);


this.arbiter.registerCallback
(this._downloadJsForPagelet.bind(this,x),ha);

if(x.is_last)
this._endPhase(y);


if(x.prefetchRsrcs){
this.arbiter.registerCallback(this._displayDoneCallback,['pagelet_prefetch']);


c('Bootloader').loadPredictedResources
(x.prefetchRsrcs,
function ia(){



x.prefetchJsmods&&
this._serverJS.handlePartial(x.prefetchJsmods);
this.arbiter.inform('pagelet_prefetch',true);}.
bind(this));}else

if(x.prefetchJsmods)
this._serverJS.handlePartial(x.prefetchJsmods);},

'BigPipe#onPageletArrive')});


r.Events=
{init:'BigPipe/init',
tti:'tti_bigpipe',
displayed:'all_pagelets_displayed',
loaded:'all_pagelets_loaded'};


function s(x){
if(!x||typeof x==='string')
return x;

if(x.container_id){
var y=c('$')(x.container_id);
x=t(y)||'';
y.parentNode.removeChild(y);
return x;}

x.nodeType;


return null;}


function t(x){
if(!x.firstChild){

c('Bootloader').loadModules(["ErrorSignal"],function(z){
z.sendErrorSignal
('bigpipe',
'Pagelet markup container is empty.');},
'BigPipe');
return null;}

if(x.firstChild.nodeType!==8)

return null;


var y=x.firstChild.nodeValue;

y=y.substring(1,y.length-1);

return y.replace(/\\([\s\S]|$)/g,'$1');}


function u(x,y,z){
var aa=w(y);
for(var ba=0;ba<aa.childNodes.length;ba++)
z.push(aa.childNodes[ba]);

x.appendChild(aa);}


function v(x){
if(x.displayed)


return;

var y=x.content;
for(var z in y)
y[z]=w(y[z]);}










function w(x){
if(x.nodeType)
return x;


var y=document.createDocumentFragment();

x=s(x);
if(x){
var z=document.createElement('div');
z.innerHTML=x;
while(z.firstChild)
y.appendChild(z.firstChild);}


return y;}


f.exports=r;}),null);

/** js/modules/CSS.js */






__d('CSS',['$','CSSCore'],(function a(b,c,d,e,f,g){

var h=c('$').unsafe,



i='hidden_elem',









j=









{setClass:function k(l,m){
h(l).className=m||'';
return l;},









hasClass:function k(l,m){
return c('CSSCore').hasClass(h(l),m);},









matchesSelector:function k(l,m){
return c('CSSCore').matchesSelector(h(l),m);},









addClass:function k(l,m){
return c('CSSCore').addClass(h(l),m);},









removeClass:function k(l,m){
return c('CSSCore').removeClass(h(l),m);},










conditionClass:function k(l,m,n){
return c('CSSCore').conditionClass(h(l),m,n);},










toggleClass:function k(l,m){
return j.conditionClass
(l,
m,
!j.hasClass(l,m));},










shown:function k(l){
return !j.hasClass(l,i);},








hide:function k(l){
return j.addClass(l,i);},








show:function k(l){
return j.removeClass(l,i);},








toggle:function k(l){
return j.toggleClass(l,i);},










conditionShow:function k(l,m){
return j.conditionClass(l,i,!m);}};



f.exports=j;}),null);

/** shared/core/dom/Parent.js */





__d('Parent',['CSSCore'],(function a(b,c,d,e,f,g){



var h=






{byTag:function i(j,k){
k=k.toUpperCase();
while(j&&j.nodeName!==k)
j=j.parentNode;

return j;},







byClass:function i(j,k){
while(j&&!c('CSSCore').hasClass(j,k))
j=j.parentNode;

return j;},








bySelector:function i(j,k){
if(j===null)
return null;


if(typeof j.matches==='function'){

while(j&&j!==document&&!j.matches(k))
j=j.parentNode;

return j===document?null:j;}else
if(typeof j.msMatchesSelector==='function'){

while(j&&j!==document&&!j.msMatchesSelector(k))
j=j.parentNode;

return j===document?null:j;}else 


return h.bySelector_SLOW(j,k);},







bySelector_SLOW:function i(j,k){
var l=j;
while(l.parentNode)
l=l.parentNode;


var m=l.querySelectorAll(k);
while(j){
if(Array.prototype.indexOf.call(m,j)!==-1)
return j;


j=j.parentNode;}



return j;},







byAttribute:function i(j,k){
while(j&&(!j.getAttribute||!j.getAttribute(k)))
j=j.parentNode;

return j;}};




f.exports=h;}),null);

/** shared/core/dom/getActiveElement.js */





__d('getActiveElement',[],(function a(b,c,d,e,f,g){













function h(i){
i=i||document;
if(typeof i==='undefined')
return null;


try{return i.activeElement||i.body;}catch(
j){
return i.body;}}



f.exports=h;}),null);

/** js/listeners/modules/FocusListener.js */




__d('FocusListener',['Arbiter','CSS','Parent','getActiveElement'],(function a(b,c,d,e,f,g){







var h=
{expandInput:function m(n){
c('CSS').addClass(n,'child_is_active');
c('CSS').addClass(n,'child_is_focused');
c('CSS').addClass(n,'child_was_focused');
c('Arbiter').inform('reflow');}};



function i(m,n){

if(n.getAttribute('data-silentfocuslistener'))
return;


var o=c('Parent').byClass(n,'focus_target');
if(o)
if('focus'==m||'focusin'==m){
h.expandInput(o);}else{

if(n.value==='')
c('CSS').removeClass(o,'child_is_active');

c('CSS').removeClass(o,'child_is_focused');}}




var j=c('getActiveElement')();
if(j)
i('focus',j);





function k(event){
event=event||window.event;
i(event.type,event.target||event.srcElement);}


var l=document.documentElement;
if(l.addEventListener){
l.addEventListener('focus',k,true);
l.addEventListener('blur',k,true);}else{

l.attachEvent('onfocusin',k);
l.attachEvent('onfocusout',k);}


f.exports=h;}),null);

/** js/modules/InitialJSLoader.js */




__d('InitialJSLoader',['Arbiter','Bootloader','PageEvents','Run','ServerJS'],(function a(b,c,d,e,f,g){







var h=
{INITIAL_JS_READY:'BOOTLOAD/JSREADY',








loadOnDOMContentReady:function i(j,k){
c('Arbiter').subscribe(c('PageEvents').BIGPIPE_DOMREADY,function(){
function l(){
c('Bootloader').loadResources(j,function(){
c('Arbiter').inform
(h.INITIAL_JS_READY,
true,
c('Arbiter').BEHAVIOR_STATE);});}



if(k){
setTimeout(l,k);}else 

l();});},




handleServerJS:function i(j,k){
var l=new (c('ServerJS'))();
l.setServerFeatures(k);
l.handle(j);
c('Run').onAfterLoad(l.cleanup.bind(l));}};



f.exports=h;}),null);

/** js/modules/DOMEvent.js */

















__d('DOMEvent',['invariant'],(function a(b,c,d,e,f,g,h){







function i(j){'use strict';
this.event=j||window.event;








typeof this.event.srcElement!=



'unknown'||h(0,
'DOMEvent: stale event passed to constructor');


this.target=this.event.target||this.event.srcElement;}
i.prototype.

preventDefault=function(){'use strict';
var j=this.event;
if(j.preventDefault){
j.preventDefault();
if(!('defaultPrevented' in j))
j.defaultPrevented=true;}else 


j.returnValue=false;

return this;};
i.prototype.

isDefaultPrevented=function(){'use strict';
var j=this.event;
return 'defaultPrevented' in j?
j.defaultPrevented:
j.returnValue===false;};
i.prototype.

stopPropagation=function(){'use strict';
var j=this.event;
j.stopPropagation?j.stopPropagation():j.cancelBubble=true;
return this;};
i.prototype.

kill=function(){'use strict';
this.stopPropagation().preventDefault();
return this;};
i.




killThenCall=function(j){'use strict';
return function(k){
new i(k).kill();
return j();};};




f.exports=i;}),null);

/** js/modules/DOMEventListener.js */














__d('DOMEventListener',['invariant','wrapFunction'],(function a(b,c,d,e,f,g,h){











var i=void 0,j=void 0;

if(window.addEventListener){


i=function l
(m,
n,
o){

o.wrapper=
c('wrapFunction')(o,'entry','DOMEventListener.add '+n);
m.addEventListener(n,o.wrapper,false);};

j=function l
(m,
n,
o){

m.removeEventListener(n,o.wrapper,false);};}else


if(window.attachEvent){


i=function l
(m,
n,
o){

o.wrapper=
c('wrapFunction')(o,'entry','DOMEventListener.add '+n);
m.attachEvent||h(0,'`target` has no `attachEvent` method.');
m.attachEvent('on'+n,o.wrapper);};

j=function l
(m,
n,
o){

m.detachEvent||h(0,'`target` has no `detachEvent` method.');
m.detachEvent('on'+n,o.wrapper);};}else 



j=i=function l(){};


var k=










{add:function l



(m,
n,
o){

i(m,n,o);

return {remove:function p(){
j(m,n,o);}};},











remove:j};


f.exports=k;}),null);

/** shared/core/dom/isNode.js */





__d('isNode',[],(function a(b,c,d,e,f,g){





function h(i){
var j=i?i.ownerDocument||i:document,
k=j.defaultView||window;
return !!(i&&
(typeof k.Node==='function'?i instanceof k.Node:
typeof i==='object'&&
typeof i.nodeType==='number'&&
typeof i.nodeName==='string'));}



f.exports=h;}),null);

/** shared/core/dom/isTextNode.js */





__d('isTextNode',['isNode'],(function a(b,c,d,e,f,g){







function h(i){
return c('isNode')(i)&&i.nodeType==3;}


f.exports=h;}),null);

/** shared/core/dom/containsNode.js */





__d('containsNode',['isTextNode'],(function a(b,c,d,e,f,g){








function h(i,j){
if(!i||!j){
return false;}else
if(i===j){
return true;}else
if(c('isTextNode')(i)){
return false;}else
if(c('isTextNode')(j)){
return h(i,j.parentNode);}else
if('contains' in i){
return i.contains(j);}else
if(i.compareDocumentPosition){
return !!(i.compareDocumentPosition(j)&16);}else 

return false;}



f.exports=h;}),null);

/** shared/core/createArrayFromMixed.js */





__d('createArrayFromMixed',['invariant'],(function a(b,c,d,e,f,g,h){












function i(l){
var m=l.length;




!Array.isArray(l)&&
(typeof l==='object'||typeof l==='function')||h(0,
'toArray: Array-like object expected');



typeof m==='number'||h(0,
'toArray: Object needs a length property');



m===0||
m-1 in l||h(0,
'toArray: Object should have keys for indices');



typeof l.callee!=='function'||h(0,
'toArray: Object can\'t be `arguments`. Use rest params '+
'(function(...args) {}) or Array.from() instead.');





if(l.hasOwnProperty)

try{return Array.prototype.slice.call(l);}catch(
n){

}




var o=Array(m);
for(var p=0;p<m;p++)
o[p]=l[p];

return o;}

















function j(l){


return (!!l&&

(typeof l=='object'||typeof l=='function')&&

'length' in l&&

!('setInterval' in l)&&


typeof l.nodeType!='number'&&


(Array.isArray(l)||

'callee' in l||

'item' in l));}

























function k(l){
if(!j(l)){
return [l];}else
if(Array.isArray(l)){
return l.slice();}else 

return i(l);}



f.exports=k;}),null);

/** shared/core/createObjectFrom.js */





__d('createObjectFrom',[],(function a(b,c,d,e,f,g){
























function h
(i,
j){







var k={},
l=Array.isArray(j);
if(j===undefined)
j=true;


for(var m=i.length-1;m>=0;m--)
k[i[m]]=l?j[m]:j;

return k;}


f.exports=h;}),null);

/** shared/core/dom/isElementNode.js */





__d('isElementNode',['isNode'],(function a(b,c,d,e,f,g){










function h(i){
return c('isNode')(i)&&i.nodeType==1;}


f.exports=h;}),null);

/** js/modules/DOMQuery.js */




__d('DOMQuery',['CSS','ErrorUtils','containsNode','createArrayFromMixed','createObjectFrom','ge','ifRequired','isElementNode','isNode'],(function a(b,c,d,e,f,g){











var h=/^\.-?[_a-zA-Z]+[\w-]*$/;

















function i(k,l){
return k.hasAttribute?
k.hasAttribute(l):k.getAttribute(l)!==null;}


var j=












{find:function k(l,m){
var n=j.scry(l,m);











return n[0];},
















findPushSafe:function k(l,m,n){
var o=j.scry(l,m),
p=j.scry(l,n),

q;
if(o.length===1&&
p.length===1&&
o[0]===p[0]){
q=o;}else 

q=o.concat(p);













return q[0];},







































































scry:function k(l,m){



if(!l||!l.getElementsByTagName)



return [];


var n=m.split(' '),
o=[l];





for(var p=0;p<n.length;p++){

if(o.length===0)
break;



if(n[p]==='')
continue;



var q=n[p],
r=n[p],
s=[],


t=false;
if(q.charAt(0)=='^')
if(p===0){
t=true;
q=q.slice(1);}else 






return [];










q=q.replace(/\[(?:[^=\]]*=(?:"[^"]*"|'[^']*'))?|[.#]/g,
' $&');

var u=q.split(' '),
v=u[0]||'*',
w=v=='*',

x=u[1]&&u[1].charAt(0)=='#';











if(x){







var y=c('ge')(u[1].slice(1),l,v);

if(y&&(w||y.tagName.toLowerCase()==v))


for(var z=0;z<o.length;z++)
if(t&&c('containsNode')(y,o[z])){
s=[y];
break;}else

if(document==o[z]||

c('containsNode')(o[z],y)&&
o[z]!==y){



s=[y];
break;}}else{








var aa=[],
ba=o.length,
ca,


da=!t&&
r.indexOf('[')<0&&
document.querySelectorAll;

for(var ea=0;ea<ba;ea++){

if(t){
ca=[];
var fa=o[ea].parentNode;
while(c('isElementNode')(fa)){
if(w||fa.tagName.toLowerCase()==v)
ca.push(fa);


fa=fa.parentNode;}}else


if(da){

if(h.test(r)){
ca=o[ea].
getElementsByClassName(r.substring(1));}else 

ca=o[ea].querySelectorAll(r);}else 


ca=o[ea].getElementsByTagName(v);


var ga=ca.length;
for(var ha=0;ha<ga;ha++)
aa.push(ca[ha]);}



if(!da)
for(var ia=1;ia<u.length;ia++){
var ja=u[ia],
ka=ja.charAt(0)=='.',
la=ja.substring(1);

for(ea=0;ea<aa.length;ea++){
var ma=aa[ea];


if(!ma||ma.nodeType!==1)
continue;




if(ka){
if(!c('CSS').hasClass(ma,la))
delete aa[ea];

continue;}else{






var na=
ja.slice(1,ja.length-1),
oa=na.indexOf('=');
if(oa<0){


if(!i(ma,na)){
delete aa[ea];
continue;}}else{




var pa=na.substr(0,oa),
qa=na.substr(oa+1);

qa=qa.slice(1,qa.length-1);

if(ma.getAttribute(pa)!=qa){
delete aa[ea];
continue;}}}}}






for(ea=0;ea<aa.length;ea++)
if(aa[ea]){
s.push(aa[ea]);
if(t)









break;}}







o=s;}


return o;},






getSelection:function k(){
var l=window.getSelection;
if(l){
return l()+'';}else{

var m=document.selection;
if(m)
return m.createRange().text;}


return null;},











contains:function k(l,m){








return c('containsNode')(c('ge')(l),c('ge')(m));},





















getRootElement:function k(){
var l=c('ifRequired')('Quickling',function(m){
return (m.isActive()?c('ge')('content'):null);});

return l||document.body;},














isNodeOfType:function k(l,m){





var n=c('createArrayFromMixed')(m).join('|').toUpperCase().split('|'),
o=c('createObjectFrom')(n);
return c('isNode')(l)&&l.nodeName in o;},








isInputNode:function k(l){

return j.isNodeOfType(l,['input','textarea'])||
l.contentEditable==='true';}};



f.exports=j;}),null);

/** shared/subscriptions_handler/SubscriptionList.js */





__d('SubscriptionList',['invariant'],(function a(b,c,d,e,f,g,h){

















function i(j,k){'use strict';
this.$SubscriptionList_callbacks=[];
this.$SubscriptionList_setup=j;
this.$SubscriptionList_teardown=k;}
i.prototype.

add=function(j){'use strict';

var k={callback:j};

this.$SubscriptionList_callbacks.push(k);

if(this.$SubscriptionList_setup&&this.$SubscriptionList_callbacks.length===1)
this.$SubscriptionList_setup();



return {remove:function(){
var l=this.$SubscriptionList_callbacks.indexOf(k);
l!==-1||h(0,'SubscriptionList: Callback already removed.');
this.$SubscriptionList_callbacks.splice(l,1);

if(this.$SubscriptionList_teardown&&this.$SubscriptionList_callbacks.length===0)
this.$SubscriptionList_teardown();}.

bind(this)};};

i.prototype.

getCallbacks=function(){'use strict';
return this.$SubscriptionList_callbacks.map(function(j){return j.callback;});};
i.prototype.

fireCallbacks=function(j){'use strict';
this.$SubscriptionList_callbacks.forEach(function(k){
k.callback(j);});};




f.exports=i;}),null);

/** __static_js_modules__/timespentpagetransitioncause.js */




__d("TimeSpentPageTransitionCause",[],(function a(b,c,d,e,f,g){

f.exports={PAGE_LOAD:"load",PAGE_UNLOAD:"unload",TRANSITION:"transition",OPEN_OVERLAY_VIEW:"open_overlay_view",REPLACE_OVERLAY_VIEW:"replace_overlay_view",CLOSE_OVERLAY_VIEW:"close_overlay_view"};}),

null);

/** shared/storage/WebStorage.js */





__d('WebStorage',['ErrorUtils','ex'],(function a(b,c,d,e,f,g){




var h={},
i={};










function j
(p,
q,
r){

if(!Object.prototype.hasOwnProperty.call(h,r))
h[r]=q(r);

return h[r];}


function k(p){


try{return window[p];}catch(
q){
}

return null;}


function l(p){


try{var r=window[p];



if(r){
var s='__test__'+Date.now();
r.setItem(s,'');
r.removeItem(s);}

return r;}catch(
q){
}

return null;}







function m(p){
var q=[];
for(var r=0;r<p.length;r++)
q.push(p.key(r)||'');

return q;}







function n(p,q,r){
var s=null;

try{p.setItem(q,r);}catch(
t){

var u=m(p).map(function(v){
var w=(p.getItem(v)||'').length;
return v+'('+w+')';});


s=new Error(c('ex')
('%sStorage quota exceeded while setting %s(%s). Items(length) follows: '+
'%s',
t.name?t.name+': ':'',
q,
r.length,
u.join()));


c('ErrorUtils').reportError(s);}


return s;}


var o=
{getLocalStorage:function p(){
return j(h,l,'localStorage');},


getSessionStorage:function p(){
return j(h,l,'sessionStorage');},








getLocalStorageForRead:function p(){
return j(i,k,'localStorage');},







getSessionStorageForRead:function p(){
return j(i,k,'sessionStorage');},



setItemGuarded:n};


f.exports=o;}),null);

/** shared/core/isInIframe.js */









__d("isInIframe",[],(function a(b,c,d,e,f,g){




var h=window!=window.top;

function i(){
return h;}


f.exports=i;}),null);

/** shared/logging/ScriptPath.js */






__d('ScriptPath',['WebStorage','ErrorUtils','SubscriptionList','TimeSpentPageTransitionCause','isInIframe'],(function a(b,c,d,e,f,g){

'use strict';

























var h='sp_pi',
i=1000*30,



















j=null,
k=null,

l=
new (c('SubscriptionList'))(),







m=null,








n=[];

function o(t,u){
l.getCallbacks().forEach(function(v){
c('ErrorUtils').applyWithGuard
(function(){
v
({source:j,
dest:k,
cause:t,
extraData:u});});});}






function p(){
return k?k.scriptPath:undefined;}


function q(){
var t=c('WebStorage').getSessionStorage();
if(!t||c('isInIframe')())
return;

t.setItem
(h,
JSON.stringify
({pageInfo:k,
clickPoint:m,
time:Date.now()}));}




function r(){
var t=c('WebStorage').getSessionStorageForRead();
if(!t)
return;

var u=t.getItem(h);
if(u){
var v=JSON.parse(u);
if(v){
if(v.time<Date.now()-i){
t=c('WebStorage').getSessionStorage();
if(t)
t.removeItem(h);}


k=v.pageInfo;
m=v.clickPoint;
if(k)
k.restored=true;}}}





r();

var s=


{set:function t
(u,
v,
w){

j=k;

k=
{scriptPath:u,
categoryToken:v,
extraData:w||{}};


n=[];


window._script_path=u;

o();},


openOverlayView:function t
(u,
v,
w){

if(!u)
return;

var x=n.length;
if(x===0||n[x-1]!==u){
j=Object.assign({},k);
if(k)
k.topViewEndpoint=u;

if(w&&w.replaceTopOverlay&&x>0){
n[x-1]=u;
o(c('TimeSpentPageTransitionCause').REPLACE_OVERLAY_VIEW,v);}else{

n.push(u);
o(c('TimeSpentPageTransitionCause').OPEN_OVERLAY_VIEW,v);}}},




closeOverlayView:function t(u,v){
var w=n.lastIndexOf(u);
if(w===-1)
return;

j=Object.assign({},k);
if(k)
if(w>0){
k.topViewEndpoint=n[w-1];}else 

k.topViewEndpoint=null;



n=n.slice(0,w);
o(c('TimeSpentPageTransitionCause').CLOSE_OVERLAY_VIEW,v);},





setClickPointInfo:function t(u){
m=u;
q();},


getClickPointInfo:function t(){
return m;},






getScriptPath:p,






getCategoryToken:function t(){
return k?k.categoryToken:undefined;},






getTopViewEndpoint:function t(){
var u=n.length;
return u>0?
n[u-1]:
p();},


getPageInfo:function t(){
return k;},


getSourcePageInfo:function t(){
return j;},


subscribe:function t
(u){

return l.add(u);},


shutdown:function t(){
q();}};



f.exports=s;}),null);

/** shared/page/requestAnimationFrameAcrossTransitions.js */




__d('requestAnimationFrameAcrossTransitions',['TimerStorage','TimeSlice','TimeSliceRefCountingWrapper','requestAnimationFramePolyfill'],(function a(b,c,d,e,f,g){







var h=c('TimerStorage').ANIMATION_FRAME;





f.exports=function i(){for(var j=arguments.length,k=Array(j),l=0;l<j;l++)k[l]=arguments[l];
var m=c('TimeSlice').guard
(k[0],
'requestAnimationFrame',
{isContinuation:true});

k[0]=m;
var n=c('requestAnimationFramePolyfill').apply(b,k);


c('TimeSliceRefCountingWrapper').registerForCancelling(h+n,k[0]);
return n;};}),
null);

/** shared/core/dom/uniqueID.js */






__d('uniqueID',[],(function a(b,c,d,e,f,g){

var h='js_',
i=36,
j=0;

function k(){
return h+(j++).toString(i);}


f.exports=k;}),null);

/** js/modules/EventProfiler.js */





__d('EventProfiler',['CurrentEventMeta','EventConfig','Parent','ScriptPath','TimeSlice','TimeSliceInteraction','performanceNow','requestAnimationFrameAcrossTransitions','requireWeak','setTimeoutAcrossTransitions','uniqueID'],(function a(b,c,d,e,f,g){














var h=c('EventConfig').sampling||{},














i={},
j={},

k=null,

l=
{__wrapEventListenHandler:function s(t){
return function u(v,event){
if(!h[v])
return t.call(this,v,event);

var w=m(event),
x=c('performanceNow')();
event.id=event.id||c('uniqueID')();
var y=event.id;
c('CurrentEventMeta').__setCurrentEventID(y);
var z=void 0,
aa=j[y];
if(i[y]===undefined&&!aa){
if(w){


k=
c('TimeSliceInteraction').createAutoclosed('Event').
addExtraSampleRate(1/w);}else 

k=null;

z=t.call(this,v,event);


j[y]=
c('TimeSlice').getGuardedContinuation('Event Bubble Continuation');}else 

z=aa(function(){
j[y]=
c('TimeSlice').getGuardedContinuation('Event Bubble Continuation');
return t.call(this,v,event);}.
bind(this));

var ba=c('performanceNow')();
if(i[y]===undefined){


var ca=o(event);
ca=ca?Math.round(ca):null;
var da=ca?x-ca:0,
ea=q(event.target),
fa=
r(event.target,'data-referrer'),
ga=
r(event.target,'data-interaction-root-id');

i[y]=
{event_name:v,
event_target_raw:ea,
event_start_ms:ca,
main_thread_wait_ms:Math.round(da),
event_handlers_runtime_ms:0,
script_path:c('ScriptPath').getScriptPath()||'<unknown>',
event_end_ms:0,
total_time_since_first_handler_start:0,
request_animation_frame_wait_ms:0,
set_timeout_wait_ms:0,
weight:w};

if(k)
k.trace().
addVectorAnnotation('event_target_stack',ea).
addVectorAnnotation('interaction_ids',ga).
addVectorAnnotation('pagelets',fa);


c('requestAnimationFrameAcrossTransitions')(function(){

var ia=c('performanceNow')();
i[y].request_animation_frame_wait_ms=
Math.round(ia-i[y].event_end_ms);
c('setTimeoutAcrossTransitions')(function(){

i[y].set_timeout_wait_ms=
Math.round(c('performanceNow')()-ia);
n(y,x);
var ja=j[y];
if(ja){



ja.__cancelCallback();
delete j[y];}

delete i[y];},
0);});}


var ha=i[y];
ha.event_handlers_runtime_ms+=ba-x;
ha.event_end_ms=ba;
c('CurrentEventMeta').__setCurrentEventID(null);
return z;};}};





function m(event){
if(event.__samplingWeight!==undefined)
return event.__samplingWeight;

var s=0,
t=event.type in h?h[event.type]:1;
if(t){
t*=h.__default;
var u=h.__min||1;
t=Math.round(Math.max(u,t));
if(Math.random()*t<1)
s=t;}


event.__samplingWeight=s;
return s;}


function n(s,t){
var u=c('performanceNow')(),
v=i[s];
v.event_end_ms=Math.round(v.event_end_ms);
v.event_handlers_runtime_ms=Math.round(v.event_handlers_runtime_ms);
v.total_time_since_first_handler_start=Math.round(u-t);
if(v.weight)
c('requireWeak')('BanzaiLogger',function(x){
x.log('WebSpeedInteractionsLoggerConfig',v);});


var w=Object.assign({},v);


delete w.event_target_raw;


delete w.weight;
c('CurrentEventMeta').__informEventDataReady(s,w);}


var o=function(){
function s(event){
return null;}


if(!b.performance||!b.performance.now)
return s;


var t=b.CustomEvent&&
(typeof b.CustomEvent==='function'||
b.CustomEvent.toString().indexOf('CustomEventConstructor')>-1),

u=t?
new b.CustomEvent('test').timeStamp:
b.document.createEvent('KeyboardEvent').timeStamp;
if(u&&u<=b.performance.now())
return function(event){return event.timeStamp;};

return s;}
();

function p(s){
if(!s||!(s instanceof HTMLElement))
return '';

var t=s.id,u=s.nodeName,


v=s.getAttribute('class');
u=u?u.replace(/^#/,''):'unknown';
t=t?'#'+t:'';
v=v?' '+v.replace(/\s+/g,' ').trim():'';
return ':'+u+t+v;}


function q(s){
var t=[];
while(s&&s instanceof HTMLElement){
t.push(p(s));
s=s.parentElement;}

t.reverse();
return t;}


function r(s,t){
var u=[];
while(s&&s instanceof HTMLElement){
var v=s.getAttribute(t);
if(v)
u.push(v);

s=c('Parent').byAttribute(s.parentNode,t);}

return u.reverse();}


f.exports=l;}),null);

/** shared/core/dom/Scroll.js */




__d("Scroll",[],(function a(b,c,d,e,f,g){






function h(j,k){
return !!k&&
(j===k.documentElement||j===k.body);}















var i=




{getTop:function j(k){
var l=k.ownerDocument;
return h(k,l)?



l.body.scrollTop||l.documentElement.scrollTop:
k.scrollTop;},






setTop:function j(k,l){
var m=k.ownerDocument;
if(h(k,m)){
m.body.scrollTop=m.documentElement.scrollTop=l;}else 

k.scrollTop=l;},







getLeft:function j(k){
var l=k.ownerDocument;
return h(k,l)?
l.body.scrollLeft||l.documentElement.scrollLeft:
k.scrollLeft;},






setLeft:function j(k,l){
var m=k.ownerDocument;
if(h(k,m)){
m.body.scrollLeft=m.documentElement.scrollLeft=l;}else 

k.scrollLeft=l;}};




f.exports=i;}),null);

/** shared/useragent/VersionRange.js */




__d('VersionRange',['invariant'],(function a(b,c,d,e,f,g,h){

'use strict';



var i=/\./,
j=/\|\|/,
k=/\s+\-\s+/,
l=/^(<=|<|=|>=|~>|~|>|)?\s*(.+)/,
m=/^(\d*)(.*)/;









function n(fa,ga){
var ha=fa.split(j);

if(ha.length>1){
return ha.some(function(ia){return ea.contains(ia,ga);});}else{

fa=ha[0].trim();
return o(fa,ga);}}











function o(fa,ga){
var ha=fa.split(k);


ha.length>0&&ha.length<=2||h(0,
'the "-" operator expects exactly 2 operands');


if(ha.length===1){
return p(ha[0],ga);}else{

var ia=ha[0],ja=ha[1];

y(ia)&&y(ja)||h(0,
'operands to the "-" operator must be simple (no modifiers)');



return (p('>='+ia,ga)&&
p('<='+ja,ga));}}












function p(fa,ga){
fa=fa.trim();
if(fa==='')
return true;


var ha=ga.split(i),ia=
w(fa),ja=ia.modifier,ka=ia.rangeComponents;
switch(ja){
case '<':
return q(ha,ka);
case '<=':
return r(ha,ka);
case '>=':
return t(ha,ka);
case '>':
return u(ha,ka);
case '~':
case '~>':
return v(ha,ka);

default:return s(ha,ka);}}










function q(fa,ga){
return da(fa,ga)===-1;}









function r(fa,ga){
var ha=da(fa,ga);
return ha===-1||ha===0;}









function s(fa,ga){
return da(fa,ga)===0;}









function t(fa,ga){
var ha=da(fa,ga);
return ha===1||ha===0;}









function u(fa,ga){
return da(fa,ga)===1;}











function v(fa,ga){
var ha=ga.slice(),
ia=ga.slice();

if(ia.length>1)
ia.pop();

var ja=ia.length-1,
ka=parseInt(ia[ja],10);
if(x(ka))
ia[ja]=ka+1+'';



return (t(fa,ha)&&
q(fa,ia));}













function w(fa){
var ga=fa.split(i),
ha=ga[0].match(l);
ha||h(0,'expected regex to match but it did not');


return {modifier:ha[1],
rangeComponents:[ha[2]].concat(ga.slice(1))};}









function x(fa){
return !isNaN(fa)&&isFinite(fa);}









function y(fa){
return !w(fa).modifier;}








function z(fa,ga){
for(var ha=fa.length;ha<ga;ha++)
fa[ha]='0';}
















function aa(fa,ga){
fa=fa.slice();
ga=ga.slice();

z(fa,ga.length);


for(var ha=0;ha<ga.length;ha++){
var ia=ga[ha].match(/^[x*]$/i);
if(ia){
ga[ha]=fa[ha]='0';


if(ia[0]==='*'&&ha===ga.length-1)
for(var ja=ha;ja<fa.length;ja++)
fa[ja]='0';}}





z(ga,fa.length);

return [fa,ga];}












function ba(fa,ga){
var ha=fa.match(m)[1],
ia=ga.match(m)[1],
ja=parseInt(ha,10),
ka=parseInt(ia,10);

if(x(ja)&&x(ka)&&ja!==ka){
return ca(ja,ka);}else 

return ca(fa,ga);}











function ca(fa,ga){
typeof fa===typeof ga||h(0,'"a" and "b" must be of the same type');

if(fa>ga){
return 1;}else
if(fa<ga){
return -1;}else 

return 0;}











function da(fa,ga){var ha=
aa(fa,ga),ia=ha[0],ja=ha[1];

for(var ka=0;ka<ja.length;ka++){
var la=ba(ia[ka],ja[ka]);
if(la)
return la;}



return 0;}


var ea=































{contains:function fa(ga,ha){
return n(ga.trim(),ha.trim());}};



f.exports=ea;}),null);

/** shared/fbjs/functional/mapObject.js */




__d('mapObject',[],(function a(b,c,d,e,f,g){

'use strict';

var h=Object.prototype.hasOwnProperty;























function i(j,k,l){
if(!j)
return null;

var m={};
for(var n in j)
if(h.call(j,n))
m[n]=k.call(l,j[n],n,j);


return m;}


f.exports=i;}),null);

/** shared/useragent/UserAgent.js */




__d('UserAgent',['UserAgentData','VersionRange','mapObject','memoizeStringOnly'],(function a(b,c,d,e,f,g){

'use strict';
















function h(k,l,m,n){

if(k===m)
return true;



if(!m.startsWith(k))
return false;



var o=m.slice(k.length);
if(l){
o=n?n(o):o;
return c('VersionRange').contains(o,l);}


return false;}











function i(k){
if(c('UserAgentData').platformName==='Windows')
return k.replace(/^\s*NT/,'');


return k;}






var j=











































{isBrowser:function k(l){
return h
(c('UserAgentData').browserName,
c('UserAgentData').browserFullVersion,
l);},











isBrowserArchitecture:function k(l){
return h
(c('UserAgentData').browserArchitecture,
null,
l);},



























isDevice:function k(l){
return h(c('UserAgentData').deviceName,null,l);},
























isEngine:function k(l){
return h
(c('UserAgentData').engineName,
c('UserAgentData').engineVersion,
l);},






































isPlatform:function k(l){
return h
(c('UserAgentData').platformName,
c('UserAgentData').platformFullVersion,
l,
i);},











isPlatformArchitecture:function k(l){
return h
(c('UserAgentData').platformArchitecture,
null,
l);}};





f.exports=c('mapObject')(j,c('memoizeStringOnly'));}),null);

/** js/modules/UserAgent_DEPRECATED.js */




__d('UserAgent_DEPRECATED',[],(function a(b,c,d,e,f,g){









































var h=false,


i,j,k,l,m,


n,


o,p,q,r,


s,


t,u,v,

w;

function x(){
if(h)
return;


h=true;






var z=navigator.userAgent,
aa=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(z),
ba=/(Mac OS X)|(Windows)|(Linux)/.exec(z);

t=/\b(iPhone|iP[ao]d)/.exec(z);
u=/\b(iP[ao]d)/.exec(z);
r=/Android/i.exec(z);
v=/FBAN\/\w+;/i.exec(z);
w=/Mobile/i.exec(z);






s=!!/Win64/.exec(z);

if(aa){
i=aa[1]?parseFloat(aa[1]):
aa[5]?parseFloat(aa[5]):NaN;

if(i&&document&&document.documentMode)
i=document.documentMode;


var ca=/(?:Trident\/(\d+.\d+))/.exec(z);
n=ca?parseFloat(ca[1])+4:i;

j=aa[2]?parseFloat(aa[2]):NaN;
k=aa[3]?parseFloat(aa[3]):NaN;
l=aa[4]?parseFloat(aa[4]):NaN;
if(l){



aa=/(?:Chrome\/(\d+\.\d+))/.exec(z);
m=aa&&aa[1]?parseFloat(aa[1]):NaN;}else 

m=NaN;}else 


i=j=k=m=l=NaN;


if(ba){
if(ba[1]){





var da=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(z);

o=da?parseFloat(da[1].replace('_','.')):true;}else 

o=false;

p=!!ba[2];
q=!!ba[3];}else 

o=p=q=false;}



var y=







{ie:function z(){
return x()||i;},








ieCompatibilityMode:function z(){
return x()||n>i;},








ie64:function z(){
return y.ie()&&s;},








firefox:function z(){
return x()||j;},









opera:function z(){
return x()||k;},









webkit:function z(){
return x()||l;},






safari:function z(){
return y.webkit();},








chrome:function z(){
return x()||m;},








windows:function z(){
return x()||p;},









osx:function z(){
return x()||o;},







linux:function z(){
return x()||q;},








iphone:function z(){
return x()||t;},


mobile:function z(){
return x()||t||u||r||w;},


nativeApp:function z(){

return x()||v;},


android:function z(){
return x()||r;},


ipad:function z(){
return x()||u;}};



f.exports=y;}),null);

/** js/lib/event/event-form-bubbling.js */





__d('event-form-bubbling',[],(function a(b,c,d,e,f,g){

b.Event=b.Event||function(){};














b.Event.__inlineSubmit=function(h,event){
var i=
b.Event.__getHandler&&
b.Event.__getHandler(h,'submit');







return (i&&i!==h.onsubmit?null:
b.Event.__bubbleSubmit(h,event));};









b.Event.__bubbleSubmit=function(h,event){
if(document.documentElement.attachEvent){
var i;
while(i!==false&&(h=h.parentNode))
i=h.onsubmit?
h.onsubmit(event):
b.Event.__fire&&b.Event.__fire(h,'submit',event);

return i;}};}),

3);

/** shared/core/dom/getDocumentScrollElement.js */





__d('getDocumentScrollElement',[],(function a(b,c,d,e,f,g){

'use strict';

var h=
typeof navigator!=='undefined'&&
navigator.userAgent.indexOf('AppleWebKit')>-1;










function i(j){
j=j||document;
return !h&&j.compatMode==='CSS1Compat'?
j.documentElement:
j.body;}


f.exports=i;}),null);

/** shared/core/getObjectValues.js */






__d("getObjectValues",[],(function a(b,c,d,e,f,g){







function h
(i){

var j=[];
for(var k in i)
j.push(i[k]);

return j;}


f.exports=h;}),null);

/** js/modules/Event.js */






__d('Event',['invariant','event-form-bubbling','Arbiter','DataStore','DOMQuery','DOMEvent','ErrorUtils','EventProfiler','ExecutionEnvironment','Parent','Scroll','TimeSlice','UserAgent','UserAgent_DEPRECATED','DOMEventListener','requireWeak','SiteData','$','getDocumentScrollElement','ifRequired','getObjectValues','performanceNow'],(function a(b,c,d,e,f,g,h){

c('event-form-bubbling');























var i=
{C2:.125,
C3:.125,
dev:.01,
'default':.01},


j=b.Event,




k='Event.listeners';
if(!j.prototype)
j.prototype={};







function l(x){
if(x.type==='click'||
x.type==='mouseover'||
x.type==='keydown')
c('Arbiter').inform('Event/stop',{event:x});}



function m(x,y,z){
this.target=x;
this.type=y;
this.data=z;}


Object.assign(m.prototype,









{getData:function x(){
this.data=this.data||{};
return this.data;},








stop:function x(){
return j.stop(this);},






prevent:function x(){
return j.prevent(this);},







isDefaultPrevented:function x(){
return j.isDefaultPrevented(this);},























kill:function x(){
return j.kill(this);},






getTarget:function x(){
return new (c('DOMEvent'))(this).target||null;}});



function n(x){
if(x instanceof m)
return x;


if(!x)












if(!window.addEventListener&&document.createEventObject){
x=window.event?document.createEventObject(window.event):{};}else 

x={};







if(!x._inherits_from_prototype)


for(var y in j.prototype)

try{x[y]=j.prototype[y];}catch(
z){

}


return x;}





Object.assign(j.prototype,

{_inherits_from_prototype:true,






getRelatedTarget:function x(){
var y=this.relatedTarget||
(this.fromElement===this.srcElement?this.toElement:this.fromElement);

return y&&y.nodeType?y:null;},











getModifiers:function x(){
var y=
{control:!!this.ctrlKey,
shift:!!this.shiftKey,
alt:!!this.altKey,
meta:!!this.metaKey};

y.access=c('UserAgent_DEPRECATED').osx()?y.control:y.alt;
y.any=y.control||y.shift||y.alt||y.meta;
return y;},








isRightClick:function x(){
if(this.which)
return this.which===3;

return this.button&&this.button===2;},







isMiddleClick:function x(){
if(this.which)
return this.which===2;

return this.button&&this.button===4;},

























isDefaultRequested:function x(){
return this.getModifiers().any||
this.isMiddleClick()||
this.isRightClick();}},


m.prototype);




Object.assign(j,























{listen:function x(y,z,aa,ba){
if(!c('ExecutionEnvironment').canUseDOM)
return new w(aa,ga,z,ba,ja);


if(typeof y=='string')
y=c('$')(y);


if(typeof ba=='undefined')
ba=j.Priority.NORMAL;


if(typeof z=='object'){
var ca={};
for(var da in z)
ca[da]=j.listen(y,da,z[da],ba);

return ca;}


if(z.match(/^on/i))
throw new TypeError
('Bad event name `'+z+"': use `click', not `onclick'.");



y||h(0,
'Event.listen(...): Cannot listen to an undefined element. '+
'Tried to listen to element of type `%s`.',
z);



if(y.nodeName=='LABEL'&&z=='click'){
var ea=y.getElementsByTagName('input');
y=ea.length==1?ea[0]:y;}else
if(y===window&&z==='scroll'){
var fa=c('getDocumentScrollElement')();
if(fa!==document.documentElement&&
fa!==document.body)
y=fa;}



var ga=c('DataStore').get(y,k,{}),

ha=q[z];
if(ha){
z=ha.base;
if(ha.wrap)
aa=ha.wrap(aa);}




s(y,ga,z);

var ia=ga[z];
if(!(ba in ia))
ia[ba]=[];


var ja=ia[ba].length,
ka=new w(aa,ga,z,ba,ja);

if(z==='keydown'){
var la=c('SiteData').push_phase,
ma=i[la]||i['default'];
if(Math.random()<ma)
ka._stack=c('ErrorUtils').normalizeError
(new Error('generate a keydown handler stack trace')).
stack;}



ia[ba][ja]=ka;
ia.numHandlers++;

return ka;},


stop:function x(y){





var z=new (c('DOMEvent'))(y).stopPropagation();
l(z.event);
return y;},


prevent:function x(y){





new (c('DOMEvent'))(y).preventDefault();
return y;},


isDefaultPrevented:function x(y){





return new (c('DOMEvent'))(y).isDefaultPrevented(y);},


kill:function x(y){





var z=new (c('DOMEvent'))(y).kill();
l(z.event);
return false;},


getKeyCode:function x(event){
event=new (c('DOMEvent'))(event).event;
if(!event)
return false;

switch(event.keyCode){
case 63232:
return 38;
case 63233:
return 40;
case 63234:
return 37;
case 63235:
return 39;
case 63272:
case 63273:
case 63275:
return null;
case 63276:
return 33;
case 63277:
return 34;}

if(event.shiftKey)
switch(event.keyCode){
case 33:
case 34:
case 37:
case 38:
case 39:
case 40:
return null;}




return event.keyCode;},


getPriorities:function x(){
if(!o){
var y=c('getObjectValues')(j.Priority);

y.sort(function(z,aa){return z-aa;});
o=y;}

return o;},

















fire:function x(y,z,aa){
var ba=new m(y,z,aa),
ca;

do{var da=j.__getHandler(y,z);
if(da)
ca=da(ba);

y=y.parentNode;}while(
y&&ca!==false&&!ba.cancelBubble);
return ca!==false;},










__fire:function x(y,z,event){
var aa=j.__getHandler(y,z);
if(aa)
return aa(n(event));},










__getHandler:function x(y,z){
var aa=c('DataStore').get(y,k);
if(aa&&aa[z])
return aa[z].domHandler;

return y['on'+z];},


getPosition:function x(y){
y=new (c('DOMEvent'))(y).event;

var z=c('getDocumentScrollElement')(),
aa=y.clientX+c('Scroll').getLeft(z),
ba=y.clientY+c('Scroll').getTop(z);
return {x:aa,y:ba};}});






var o=null,

p=function x(y){
return function(z){
if(!c('DOMQuery').contains(this,z.getRelatedTarget()))
return y.call(this,z);};},




q;
if(!window.navigator.msPointerEnabled){
q=
{mouseenter:{base:'mouseover',wrap:p},
mouseleave:{base:'mouseout',wrap:p}};}else 






q=
{mousedown:{base:'MSPointerDown'},
mousemove:{base:'MSPointerMove'},
mouseup:{base:'MSPointerUp'},
mouseover:{base:'MSPointerOver'},
mouseout:{base:'MSPointerOut'},
mouseenter:{base:'MSPointerOver',wrap:p},
mouseleave:{base:'MSPointerOut',wrap:p}};








if(c('UserAgent_DEPRECATED').firefox()){
var r=function x(y,event){
event=n(event);

var z=event.getTarget();
while(z){
j.__fire(z,y,event);
z=z.parentNode;}};




document.documentElement.addEventListener
('focus',
r.bind(null,'focusin'),
true);



document.documentElement.addEventListener
('blur',
r.bind(null,'focusout'),
true);}













var s=function x(y,z,aa){
if(aa in z)
return;


var ba=c('TimeSlice').guard
(v.bind(y,aa),
'Event listenHandler '+aa);


z[aa]=


{numHandlers:0,

domHandlerRemover:c('DOMEventListener').add(y,aa,ba),

domHandler:ba};






var ca='on'+aa;
if(y[ca]){







var da=y===document.documentElement?
j.Priority._BUBBLE:
j.Priority.TRADITIONAL,
ea=y[ca];
y[ca]=null;
j.listen(y,aa,ea,da);}




if(y.nodeName==='FORM'&&
aa==='submit'&&
c('UserAgent').isBrowser('IE < 9'))
j.listen
(y,
aa,
j.__bubbleSubmit.bind(null,y),
j.Priority._BUBBLE);};







function t(x){
if(!x.href.endsWith('#'))
return false;



return x.href===document.location.href||
x.href===document.location.href+'#';}


function u(x,y){

return (x.nodeName==='INPUT'&&
x.type===y);}














var v=c('EventProfiler').__wrapEventListenHandler
(function x(y,event){var z;
event=n(event);

if(!c('DataStore').get(this,k))
throw new Error('Bad listenHandler context.');


var aa=c('DataStore').get(this,k)[y];
if(!aa)
throw new Error('No registered handlers for `'+y+"'.");




if(y=='click')(function(){
var ha=event.getTarget(),
ia=c('Parent').byTag(ha,'a');








if(ia&&ia.href&&t(ia)&&
!u(ha,'file')&&





!u(ha,'submit'))
event.prevent();



c('ifRequired')('clickRefAction',function(ja){
ja('click',ia,event);});})
();




var ba=j.getPriorities();
for(var ca=0;ca<ba.length;ca++){
var da=ba[ca];
if(da in aa){
var ea=aa[da];
for(var fa=0;fa<ea.length;fa++){
if(!ea[fa])

continue;

var ga=ea[fa].fire(this,event);


if(ga===false){
return event.kill();}else
if(event.cancelBubble)
event.stop();}}}





return event.returnValue;});












































j.Priority=
{URGENT:-20,
TRADITIONAL:-10,
NORMAL:0,
_BUBBLE:1000};









function w(x,y,z,aa,ba){
this._handler=x;
this._handlers=y;
this._type=z;
this._priority=aa;
this._id=ba;}


Object.assign(w.prototype,












{remove:function x(){
if(c('ExecutionEnvironment').canUseDOM){

this._handlers||h(0,'Event handler has already been removed');



var y=this._handlers[this._type];
if(y.numHandlers<=1){
y.domHandlerRemover.remove();
delete this._handlers[this._type];}else{

delete y[this._priority][this._id];
y.numHandlers--;}

this._handlers=null;}},










fire:function x(y,event){var z,aa=this;
if(c('ExecutionEnvironment').canUseDOM){var z=function(){
var ba=aa._stack&&c('performanceNow')(),
ca=c('ErrorUtils').applyWithGuard
(aa._handler,
y,
[event],
function(fa){
fa.event_type=event.type;
fa.dom_element=y.name||y.id;
fa.category='eventhandler';}),


da=aa._stack&&c('performanceNow')(),
ea=da-ba;
if(ea>100&&aa._stack)
c('requireWeak')('BanzaiScuba',function(fa){
var ga=new fa('interaction_debugging');
ga.addNormal('location',this._stack);
ga.addInteger('event_handler_runtime',ea);
ga.post();}.
bind(aa));

return {v:ca};}();if(typeof z==="object")return z.v;}


return true;}});



b.$E=j.$E=n;

f.exports=j;}),null);

/** js/modules/PageNavigationStageLogger.js */




__d('PageNavigationStageLogger',['Arbiter','BigPipe','Run'],(function a(b,c,d,e,f,g){





var h='first_byte';

c('Arbiter').subscribe
(c('BigPipe').Events.init,
function(event,j){
h=c('BigPipe').Events.init;
j.arbiter.subscribe
(Object.values(c('BigPipe').Events),
function(k){
h=k;});});





c('Run').onAfterLoad(function(){
h='onafterload';});


c('Run').onLoad(function(){
h='onload';});


var i=
{getLoadStage:function j(){
return h;}};



f.exports=i;}),null);

/** js/photos/viewer/modules/PhotoSnowliftLoader.js */






__d('PhotoSnowliftLoader',['Bootloader','PageNavigationStageLoggerGK','TimeSliceInteraction'],(function a(b,c,d,e,f,g){

'use strict';







function h
(k,
l,
m){

if(k&&Object.prototype.hasOwnProperty.call(k,'sale_post_id')){
j.loadFrame(m);

if(k.is_marketplace_post==='1'){
c('Bootloader').loadModules(["MarketplacePermalinkRender","MarketplaceSnowliftRoute"],


function(n,o){
n.renderPermalinkModal
(k.for_sale_item_id,
l,
new o());},

'PhotoSnowliftLoader');}else 

c('Bootloader').loadModules(["GroupCommerceProductDetail.react"],
function(n){
n.showDialog
(k.sale_post_id,
k,
l);},

'PhotoSnowliftLoader');



return true;}

return false;}


function i
(k,
l,
m){


if(k&&
k.offer_bypass_snowlift==='1'){

j.loadFrame(m);
c('Bootloader').loadModules(["AsyncRequest"],function(n){
new n().
setURI(l).
send();},
'PhotoSnowliftLoader');
return true;}


return false;}


var j=
{load:function k
(l,
m,
n,
o){

c('Bootloader').loadModules(["URI"],function(p){
var q=false,
r=c('PageNavigationStageLoggerGK').fastload,
s=true,
t=String(p.getMostRecentURI().getQueryData().viewas),
u=new p(l).getQueryData();

if(r)



s=j.shouldUseSnowlift
(u,
l,
m,
t);



if(s){

if(r){


j.loadFrame(t);
q=true;

c('Bootloader').loadModules(["Live","PhotoTagApproval","PhotoTagger","PhotoTags","TagTokenizer"],





function(){},'PhotoSnowliftLoader');}




c('Bootloader').loadModules(["PhotoSnowlift"],function(v){
v.bootstrap(l,m,r,q);
o.inform('bootloaded');},
n);}},

'PhotoSnowliftLoader');},


loadFrame:function k(l){
var m=l?{viewas:l}:{};


c('Bootloader').loadModules(["AsyncRequest"],function(n){
new n('/ajax/photos/snowlift/init.php').
setAllowCrossPageTransition(true).
setMethod('GET').
setReadOnly(true).
setData(m).
send();},
'PhotoSnowliftLoader');},


shouldUseSnowlift:function k
(l,
m,
n,
o){

var p=h(l,n,o),
q=i(l,m,o);

return !p&&!q;}};



f.exports=j;}),null);

/** js/modules/clickRefAction.js */




__d('clickRefAction',['Arbiter'],(function a(b,c,d,e,f,g){








function h(l,m,n,o,p){
var q=l+'/'+m;
this.ue=q;
this._ue_ts=l;
this._ue_count=m;
this._context=n;
this._ns=null;
this._node=o;
this._type=p;}


h.prototype.set_namespace=function(l){
this._ns=l;
return this;};


h.prototype.coalesce_namespace=function(l){
if(this._ns===null)
this._ns=l;

return this;};


h.prototype.add_event=function(){
return this;};


var i=0,
j=[];


















function k(l,m,event,n,o){

var p=Date.now(),
q=event&&event.type;


o=o||{};
if(!m&&event)
m=event.getTarget();













var r=50;

if(m&&n!="FORCE")
for(var s=j.length-1;
s>=0&&p-j[s]._ue_ts<r;
--s)
if(j[s]._node==m&&j[s]._type==q)
return j[s];




var t=new h(p,i,l,m,q);


j.push(t);
while(j[0]._ue_ts+r<p||j.length>10)
j.shift();



c('Arbiter').inform("ClickRefAction/new",
{cfa:t,
node:m,
mode:n,
event:event,
extra_data:o},
c('Arbiter').BEHAVIOR_PERSISTENT);

i++;

return t;}




f.exports=b.clickRefAction=k;}),null);

/** shared/utils/nullthrows.js */





__d('nullthrows',[],(function a(b,c,d,e,f,g){

var h=function i
(j){

var k=arguments.length<=1||arguments[1]===undefined?'Got unexpected null or undefined':arguments[1];
if(j!=null)
return j;

throw new Error(k);};


f.exports=h;}),null);

/** shared/core/CookieCore.js */





__d('CookieCore',['CookieCoreConfig'],(function a(b,c,d,e,f,g){







var h=/^.*(\.(facebook|messenger|oculus|instagram)\..*)$/i,
i=/_js_(.*)/;

function j(r){
if(window.self!=window.top)








return false;

return true;}


var k=
{set:function r
(s,
t){

if(!n(s))
return;


k.setWithoutChecks
(s,
t,
p(s),
q(s),
o(s));},









setWithoutChecks:function r
(s,
t,
u,
v,
w){

var x=Date.now();

if(u!=null)
if(u>x){







u-=x;}else
if(u==1){
k.clear(s,v);
return;}



document.cookie=s+'='+encodeURIComponent(t)+
'; '+(u?'expires='+
new Date(x+u).toUTCString()+'; ':'')+
'path='+v+'; domain='+
window.location.hostname.replace(h,'$1')+
(w?'; secure':'');},



setIfFirstPartyContext:function r
(s,
t){

if(!j(s))
return;

k.set(s,t);},








setWithoutChecksIfFirstPartyContext:function r
(s,
t,
u,
v,
w){

if(!j(s))
return;

k.setWithoutChecks
(s,
t,
u,
v,
w);},



clear:function r(s){var t=arguments.length<=1||arguments[1]===undefined?'/':arguments[1];
t=t||'/';
document.cookie=
s+'=; expires=Thu, 01-Jan-1970 00:00:01 GMT; '+
'path='+t+'; domain='+
window.location.hostname.replace(h,'$1');},


get:function r(s){
if(!n(s))
return null;


var t=document.cookie.match('(?:^|;\\s*)'+s+'=(.*?)(?:;|$)');
return t?decodeURIComponent(t[1]):t;}};














function l(r){

return {insecure:r.i||false,
path:r.p||'/',
ttlSeconds:r.t||0};}



function m(r){
if(c('CookieCoreConfig')[r]!==undefined)
return l(c('CookieCoreConfig')[r]);

var s=r.match(i);
if(s&&s.length>1)
return m(s[1]);

return null;}


function n(r){
return m(r)!==null;}


function o(r){
var s=m(r);
if(s==null)
return true;

return !s.insecure;}


function p(r){
var s=m(r);
if(s==null)
return null;

return s.ttlSeconds*1000;}


function q(r){
var s=m(r);
if(s==null)
return '/';

return s.path;}


f.exports=k;}),null);

/** shared/core/Cookie.js */





__d('Cookie',['Bootloader','CookieCore','Env'],(function a(b,c,d,e,f,g){





function h(k){




if(c('Env').no_cookies)
return false;


if(c('Env').defer_cookies){







c('Bootloader').loadModules(["BanzaiODS"],function(l){
l.bumpEntityKey('defer_cookies','set.'+k);},
'Cookie');

return false;}


return true;}








function i
(k,
l,
m){

var n=arguments.length<=3||arguments[3]===undefined?'/':arguments[3];
if(!h(k))
return;

c('CookieCore').set(k,l,m,n);}






function j
(k,
l,
m,
n,
o){

if(!h(k))
return;

c('CookieCore').setWithoutChecks
(k,
l,
m,
n,
o);}



f.exports=babelHelpers['extends']({},c('CookieCore'),

{set:i,
setWithoutChecks:j});}),null);

/** js/modules/trackReferrer.js */




__d('trackReferrer',['Cookie','Parent'],(function a(b,c,d,e,f,g){








var h=
/^(?:(?:[^:\/?#]+):)?(?:\/\/(?:[^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/;

function i(k){
return h.exec(k)[1]||'';}







function j(k,l){

k=c('Parent').byAttribute(k,'data-referrer');

if(k){
















var m=i(l);

if(!m)
return;


var n=m+'|'+k.getAttribute('data-referrer');

c('Cookie').set('x-src',n);}


return k;}


f.exports=j;}),null);

/** js/modules/Primer.js */




__d('Primer',['Arbiter','Bootloader','CSS','ErrorUtils','Event','PageNavigationStageLogger','PageNavigationStageLoggerGK','Parent','PhotoSnowliftLoader','TimeSlice','TimeSliceInteraction','clickRefAction','ifRequired','nullthrows','performanceNow','trackReferrer','uniqueID'],(function a(b,c,d,e,f,g){



































var h=null,
i=/async(?:-post)?|dialog(?:-post)?|theater|toggle/,
j=document.documentElement,




k={};

function l(w,x){
var y=c('nullthrows')(w.id);

if(!(y in k))
k[y]=0;


if(k[y]===0)
c('CSS').addClass(w,'bootloading');


k[y]+=x;}


function m(w){
var x=c('nullthrows')(w.id);

k[x]--;
if(k[x]===0)
c('CSS').removeClass(w,'bootloading');}



function n(w,x){
w=c('Parent').byAttribute(w,x);
if(!w)
return;



do{o(w,x);}while(
w=c('Parent').byAttribute(w.parentNode,x));
return false;}


function o(w,x){
var y=c('Parent').byClass(w,'stat_elem')||w;
y.id||y.setAttribute('id',c('uniqueID')());

var z=JSON.parse(w.getAttribute(x));
l(y,z.length);
z.forEach(function(aa){var ba=aa[0],ca=aa[1];

c('Bootloader').loadModules.call(c('Bootloader'),

[ba],
function(da){
m(y);
da[ca](w);},

'Primer: addEventHandler');});}





function p(w){
return !!w.match(/^(http(s)?(:\/\/))?(www\.)?([\w.-]*\.)?facebook\.com/i);}


c('Event').listen(j,'click',function(w){
w=w||window.event;
h=w.target||w.srcElement;

var x=c('Parent').byTag(h,'A');
if(!x)
return n(h,'data-onclick');


var y=x.getAttribute('ajaxify'),
z=x.href,
aa=y||z;

if(aa)
c('clickRefAction')('a',x,w).coalesce_namespace('primer');



if(y&&z&&!/#$/.test(z)){




var ba=w.which&&w.which===2,
ca=w.altKey||w.ctrlKey||w.metaKey||w.shiftKey;
if(ba||ca)
return;}



var da=n(h,'data-onclick');

c('trackReferrer')(x,aa);


var ea=x.rel&&x.rel.match(i);
ea=ea&&ea[0];





if(z&&!ea&&!y&&
c('PageNavigationStageLoggerGK').gk_check&&
p(z)){

var fa=JSON.stringify
({timestamp:Date.now(),
load_stage:c('PageNavigationStageLogger').getLoadStage(),
load_time:c('performanceNow')()});

document.cookie='pnl_data='+fa+';path=/;max-age=1;secure';}


var ga='Primer: '+ea;

switch(ea){
case 'dialog':
case 'dialog-post':
c('Bootloader').loadModules(["AsyncDialog"],function(ka){
ka.bootstrap(aa,x,ea);},
ga);
break;
case 'async':
case 'async-post':
c('Bootloader').loadModules(["AsyncRequest"],function(ka){
ka.bootstrap(aa,x);},
ga);
break;
case 'theater':
var ha=c('TimeSliceInteraction').createAutoclosed
('snowlift_open_autoclosed'),

ia=c('TimeSliceInteraction').create
('snowlift_open'),

ja=c('ifRequired')('PhotoSnowlift',function(){return '1';},function(){return '0';});
ha.trace().addStringAnnotation
('is_bootloaded',
ja);

ia.trace().addStringAnnotation
('is_bootloaded',
ja);

c('Arbiter').subscribeOnce('PhotoSnowlift.IMAGE_LOADED',function(){
ha.inform('image_loaded');
ia.finish();});

setTimeout
(function(){
ia.disable();
ia.finish();},

20000);

c('PhotoSnowliftLoader').load
(aa,
x,
ga,
ia);

break;
case 'toggle':
c('CSS').toggleClass(x.parentNode,'openToggler');
c('Bootloader').loadModules(["Toggler"],function(ka){
ka.bootstrap(x);},
ga);
break;

default:return da;}


return false;});


j.onsubmit=c('ErrorUtils').guard(function(w){
w=w||window.event;
var x=w.target||w.srcElement;

if(x&&x.nodeName=='FORM'&&x.getAttribute('rel')=='async'){
c('clickRefAction')('f',x,w).coalesce_namespace('primer');

var y=h;
c('Bootloader').loadModules(["FormSubmit"],function(z){
z.send(x,y);},
'Primer: async');

return false;}},

'Primer submit');

var q=null,

r=function w(x,y){
y=y||window.event;
q=y.target||y.srcElement;

n(q,'data-on'+x);

t();
if(x==='mouseover')
u();},



s=function w(x,y){
y=y||window.event;
q=y.relatedTarget||y.toElement;},


t=function w(){
var x=q,
y=c('Parent').byAttribute(q,'data-hover');
if(y){
switch(y.getAttribute('data-hover')){
case 'tooltip':
c('Bootloader').loadModules(["Tooltip"],function(z){
if(q===x)
z.process(y,q);},

'Primer: tooltip');
break;}

return;}},



u=function w(){
var x=q,
y=c('Parent').byAttribute(x,'data-hovercard');
if(y)
c('Bootloader').loadModules(["Hovercard"],function(z){
if(q===x)
z.processNode(y);},

'Primer: hovercard');};



j.onmouseover=c('TimeSlice').guard
(r.bind(null,'mouseover'),'Primer mouseover');
j.onmouseout=c('TimeSlice').guard
(s.bind(null,'mouseout'),'Primer mouseout');

var v=c('TimeSlice').guard
(r.bind(null,'focus'),'Primer focus');
if(j.addEventListener){
j.addEventListener('focus',v,true);}else 

j.attachEvent('onfocusin',v);}),
null);

/** js/sidebar/SidebarPrelude.js */





__d('SidebarPrelude',['Arbiter'],(function a(b,c,d,e,f,g){



var h=

{addSidebarMode:function i(j){


var k=document.documentElement;



if(k.clientWidth>j){



k.className+=' sidebarMode';
c('Arbiter').inform('sidebar/visibility',true,c('Arbiter').BEHAVIOR_STATE);}}};




f.exports=h;}),null);

/** js/listeners/modules/SubmitOnEnterListener.js */




__d('SubmitOnEnterListener',['Bootloader','CSS'],(function a(b,c,d,e,f,g){










document.documentElement.onkeydown=function(h){
h=h||window.event;
var i=h.target||h.srcElement,
j=
h.keyCode==13&&
!h.altKey&&!h.ctrlKey&&!h.metaKey&&!h.shiftKey&&
c('CSS').hasClass(i,'enter_submit');
if(j){
c('Bootloader').loadModules
(["DOM","Input","trackReferrer","Form"],
function(k,l,m,n){
if(!l.isEmpty(i)){
var o=i.form,
p=
k.scry(o,'.enter_submit_target')[0]||
k.scry(o,'[type="submit"]')[0];
if(p){
var q=
n.getAttribute(o,'ajaxify')||
n.getAttribute(o,'action');
if(q)
m(o,q);

p.click();}}},


'SubmitOnEnterListener');

return false;}};}),

null);

/** js/modules/SyntaxErrorMonitor.js */




__d('SyntaxErrorMonitor',['Cookie','ErrorUtils'],(function a(b,c,d,e,f,g){




var h='js_ver',
i=86400000,

j=1.262304e+12,

k=null;

function l(o){
return o.name=='SyntaxError'||/syntaxerror/i.test(o.message);}


function m(o){
if(l(o)){
var p=c('Cookie').get(h),
q=Math.floor((Date.now()-j)/i);
if(!p||q-p>=k.bump_freq_day){
c('Cookie').set(h,q);
if(!p)
p=q;


var r=encodeURIComponent(k.cdn_config),
s='/ajax/js_bump/?cdn_config='+r+'&days='+q+'&last_update='+p,
t=new Image();
t.src=s;}}}




var n=

{init:function o(p){
k=p;
c('ErrorUtils').addListener(m);}};



f.exports=n;}),null);

/** js/modules/URLFragmentPrelude.js */






__d('URLFragmentPrelude',['ScriptPath','URLFragmentPreludeConfig'],(function a(b,c,d,e,f,g){
























var h=
/^(?:(?:[^:\/?#]+):)?(?:\/\/(?:[^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/,
i='',



j=/^[^\/\\#!\.\?\*\&\^=]+$/;

window.location.href.replace(h,function(k,l,m,n){
var o,p,q,r;
o=p=l+(m?'?'+m:'');
if(n){
if(c('URLFragmentPreludeConfig').incorporateQuicklingFragment){



var s=n.replace(/^(!|%21)/,'');
q=s.charAt(0);
if(q=='/'||q=='\\')



o=s.replace(/^[\\\/]+/,'/');}



if(c('URLFragmentPreludeConfig').hashtagRedirect)


if(p==o){
var t=n.match(j);
if(t&&!m&&l=='/')
o='/hashtag/'+n;}}









if(o!=p){


r=c('ScriptPath').getScriptPath();
if(r)
document.cookie="rdir="+r+"; path=/; domain="+
window.location.hostname.replace(/^.*(\.facebook\..*)$/i,'$1');


window.location.replace(i+o);}});}),

null);

/** js/lib/event/arbiter.js */


__d('legacy:arbiter',['Arbiter'],(function a(b,c,d,e,f,g){

b.Arbiter=c('Arbiter');}),3);

/** js/lib/util/bootloader.js */


__d('legacy:bootloader',['Bootloader'],(function a(b,c,d,e,f,g){

b.Bootloader=c('Bootloader');}),3);

/** js/lib/util/constructor-cache.js */


__d('legacy:constructor-cache',['JSCC'],(function a(b,c,d,e,f,g){

b.JSCC=c('JSCC');}),3);

/** js/deprecated/css-legacy.js */


__d('legacy:css',['CSS'],(function a(b,c,d,e,f,g){

b.CSS=c('CSS');}),3);

/** js/deprecated/dom-core.js */


__d('legacy:dom-core',['$','ge'],(function a(b,c,d,e,f,g){

b.$=b.$||c('$');
b.ge=c('ge');}),3);

/** js/emptyFunction.js */


__d('legacy:emptyFunction',['emptyFunction'],(function a(b,c,d,e,f,g){

b.emptyFunction=c('emptyFunction');}),3);

/** shared/utils/ReloadPage.js */





__d("ReloadPage",[],(function a(b,c,d,e,f,g){




var h=

{now:function i(j){
b.window.location.reload(j);},


delay:function i(j){
b.setTimeout(this.now.bind(this),j);}};



f.exports=h;}),null);

/** shared/core/URISchemes.js */






__d('URISchemes',['createObjectFrom'],(function a(b,c,d,e,f,g){



var h=c('createObjectFrom')
(['blob',
'cmms',
'fb',
'fbatwork',
'fb-ama',
'fb-messenger',
'fb-page-messages',
'fb-pma',
'fbcf',
'fbconnect',
'fbmobilehome',
'fbrpc',
'file',
'ftp',
'http',
'https',
'mailto',
'ms-app',
'intent',
'itms',
'itms-apps',
'itms-services',
'market',
'svn+ssh',
'fbstaging',
'tel',
'sms',
'pebblejs',
'sftp',
'whatsapp',
'moments',
'fblite',
'chrome-extension',
'webcal',
'fb124024574287414',
'fb124024574287414rc',
'fb124024574287414master',
'fb1576585912599779',
'fb929757330408142',
'designpack',
'fbapi20130214']),


i=





{isAllowed:function j(k){
if(!k)
return true;

return Object.prototype.hasOwnProperty.call(h,k.toLowerCase());}};



f.exports=i;}),null);

/** js/modules/goURIOnWindow.js */






__d('goURIOnWindow',['ReloadPage','URISchemes'],(function a(b,c,d,e,f,g){

'use strict';















function h
(i,
j,
k,
l){

i=i.toString();
var m=j?j:window;

if(/^([^.:/?#]+):/.test(i)&&

!c('URISchemes').isAllowed(RegExp.$1))
throw new Error('goURI: URI scheme rejected, URI: '+i);

if(!k&&b.PageTransitions){
b.PageTransitions.go(i,l);}else
if(window.location.href===i){
c('ReloadPage').now();}else
if(l){
m.location.replace(i);}else 

m.location.href=i;}



f.exports=h;}),null);

/** js/modules/goURI.js */





__d('goURI',['goURIOnWindow'],(function a(b,c,d,e,f,g){

'use strict';












function h(i,j,k){
c('goURIOnWindow')(i,window,j,k);}


f.exports=h;}),null);

/** js/lib/util/goURI.js */


__d('legacy:goURI',['goURI'],(function a(b,c,d,e,f,g){

b.goURI=c('goURI');}),3);

/** js/lib/event/onload.js */




__d('legacy:onload',['Run','PageEvents'],(function a(b,c,d,e,f,g){



b.PageEvents=c('PageEvents');

b.onloadRegister_DEPRECATED=c('Run').onLoad;
b.onloadRegister=function(){






return c('Run').onLoad.apply(this,arguments);};


b.onafterloadRegister_DEPRECATED=c('Run').onAfterLoad;
b.onafterloadRegister=function(){






return c('Run').onAfterLoad.apply(this,arguments);};


b.onleaveRegister=c('Run').onLeave;
b.onbeforeunloadRegister=c('Run').onBeforeUnload;
b.onunloadRegister=c('Run').onUnload;}),3);

/** js/deprecated/parent.js */


__d('legacy:parent',['Parent'],(function a(b,c,d,e,f,g){

b.Parent=c('Parent');}),3);

/** shared/lower_domain/lowerFacebookDomain.js */





__d('lowerFacebookDomain',[],(function a(b,c,d,e,f,g){




var h=window.location.hostname.match
(/\.(facebook\.sg|facebookcorewwwi\.onion)$/),

i=h?h[1]:'facebook.com';



j.setDomain=function(k){
i=k;};


j.isValidDocumentDomain=function(){
if(document.domain==i)
return true;


return false;};








function j(){
document.domain=i;}


f.exports=j;}),null);

/** shared/component_utils/lowerDomain.js */




__d('lowerDomain',['lowerFacebookDomain'],(function a(b,c,d,e,f,g){









if(document.domain.toLowerCase().match(/(^|\.)facebook\..*/))
c('lowerFacebookDomain')();}),
null);

/** js/lib/markJSEnabled.js */




__d('markJSEnabled',[],(function a(b,c,d,e,f,g){


var h=document.documentElement;
h.className=h.className.replace('no_js','');}),null);

/** js/lib/event/wait_for_load.js */





__d('wait_for_load',['Run'],(function a(b,c,d,e,f,g){


















function h(i,j,k){
k=k.bind(i,j);
if(window.domready)
return k();

switch((j||event).type){
case 'load':
case 'focus':
c('Run').onAfterLoad(k);
return;
case 'click':
var l=i.style,
m=document.body.style;

l.cursor=m.cursor='progress';
c('Run').onAfterLoad(function(){
l.cursor=m.cursor='';
if(i.tagName.toLowerCase()=='a'){

if(false!==k()&&i.href)
window.location.href=i.href;}else

if(i.click)

i.click();});


break;}

return false;}


b.wait_for_load=h;}),3);

/** js/lib/prelude.js */

































