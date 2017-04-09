if (self.CavalryLogger) { CavalryLogger.start_js(["jJHwJ"]); }

/** shared/core/PromiseMap.js */





__d('PromiseMap',['invariant','Deferred'],(function a(b,c,d,e,f,g,h){

'use strict';













function i(){
this.$PromiseMap_deferred={};}
i.prototype.

get=function(k){
return j(this.$PromiseMap_deferred,k).getPromise();};
i.prototype.

resolveKey=function(k,l){
var m=j(this.$PromiseMap_deferred,k);
!m.isSettled()||h(0,'PromiseMap: Already settled `%s`.',k);
m.resolve(l);};
i.prototype.

rejectKey=function(k,l){
var m=j(this.$PromiseMap_deferred,k);
!m.isSettled()||h(0,'PromiseMap: Already settled `%s`.',k);
m.reject(l);};



function j
(k,
l){

if(!Object.prototype.hasOwnProperty.call(k,l))
k[l]=new (c('Deferred'))();

return k[l];}


f.exports=i;}),null);

/** shared/relay/oss/react-relay/classic/route/RelayMetaRoute.js */























__d('RelayMetaRoute',[],(function a(b,c,d,e,f,g){

'use strict';








function h(j){
Object.defineProperty(this,'name',
{enumerable:true,
value:j,
writable:false});}

h.

get=function(j){
return i[j]||(i[j]=new h(j));};




var i={};

f.exports=h;}),null);

/** shared/relay/oss/react-relay/classic/query/RelayVariable.js */























__d('RelayVariable',[],(function a(b,c,d,e,f,g){

'use strict';




function h(i){
this.name=i;}
h.prototype.

equals=function(i){

return (i instanceof h&&
i.getName()===this.name);};

h.prototype.

getName=function(){
return this.name;};



f.exports=h;}),null);

/** shared/relay/oss/react-relay/classic/query/RelayVariables.js */























__d('RelayVariables',['invariant','QueryBuilder','mapObject','warning'],(function a(b,c,d,e,f,g,h){

'use strict';





















function i
(l,
m,
n){

var o=void 0;
l.argumentDefinitions.forEach(function(p){
if(Object.prototype.hasOwnProperty.call(n,p.name))
return;

o=o||babelHelpers['extends']({},n);
switch(p.kind){
case 'LocalArgument':
o[p.name]=p.defaultValue;
break;
case 'RootArgument':



var q=m[p.name];
o[p.name]=q!==undefined?q:null;
break;


default:h(0,
'RelayVariables: Unexpected node kind `%s` in fragment `%s`.',
p.kind,
l.node.name);}});



return o||n;}


function j
(l,
m,
n,
o){

return c('mapObject')(m,function(p,q){
var r=c('QueryBuilder').getCallVariable(p);
if(r)
p=Object.prototype.hasOwnProperty.call(n,r.callVariableName)?
n[r.callVariableName]:
o[r.callVariableName];

if(p===undefined){
c('warning')
(false,
'RelayVariables.getFragmentSpreadArguments(): Variable `%s` is '+
'undefined in fragment `%s`.',
q,
l);

p=null;}

return p;});}









function k
(l,
m){

var n={};
l.argumentDefinitions.forEach(function(o){
var p=o.defaultValue;
if(m[o.name]!=null)
p=m[o.name];

n[o.name]=p;});

return n;}


f.exports=
{getFragmentSpreadArguments:j,
getFragmentVariables:i,
getOperationVariables:k};}),null);

/** shared/relay/oss/react-relay/classic/query/callsFromGraphQL.js */























__d('callsFromGraphQL',['invariant'],(function a(b,c,d,e,f,g,h){

'use strict';

























function i
(k,
l){


var m=k,
n=[];
for(var o=0;o<m.length;o++){
var p=m[o],
q=p.value;
if(q!=null)
if(Array.isArray(q)){
q=q.map(function(u){return j(u,l);});}else
if(q.kind==='BatchCallVariable'){

q=null;}else 

q=j(q,l);


var r=p.metadata,s=p.name,
t={name:s,value:q};
if(r&&r.type)
t.type=r.type;

n.push(t);}

return n;}


function j
(k,
l){

var m=void 0;
if(k.kind==='CallValue'){
m=k.callValue;}else{

var n=k.callVariableName;
Object.prototype.hasOwnProperty.call
(l,n)||h(0,
'callsFromGraphQL(): Expected a declared value for variable, `$%s`.',
n);

m=l[n];}



var o=typeof m;

m==null||
o==='boolean'||
o==='number'||
o==='string'||
o==='object'||h(0,
'callsFromGraphQL(): Expected argument value `%s` to either be null or a '+
'boolean, number, string, or array/object.',
JSON.stringify(m));

return m;}


f.exports=i;}),null);

/** shared/relay/oss/react-relay/classic/query/callsToGraphQL.js */























__d('callsToGraphQL',['QueryBuilder'],(function a(b,c,d,e,f,g){

'use strict';











function h(i){
return i.map(function(j){var k=j.name,l=j.type,m=j.value,
n=null;
if(Array.isArray(m)){
n=m.map(c('QueryBuilder').createCallValue);}else
if(m!=null)
n=c('QueryBuilder').createCallValue(m);

return c('QueryBuilder').createCall(k,n,l);});}



f.exports=h;}),null);

/** shared/relay/oss/react-relay/classic/query/directivesToGraphQL.js */























__d('directivesToGraphQL',['QueryBuilder'],(function a(b,c,d,e,f,g){

'use strict';












function h
(i){

return i.map(function(j){var k=j.name,l=j.args,
m=l.map(function(n){var o=n.name,p=n.value,
q=null;
if(Array.isArray(p)){
q=p.map(c('QueryBuilder').createCallValue);}else
if(p!=null)
q=c('QueryBuilder').createCallValue(p);

return c('QueryBuilder').createDirectiveArgument(o,q);});

return c('QueryBuilder').createDirective(k,m);});}



f.exports=h;}),null);

/** shared_core/fbjs/crypto/crc32.js */





__d("crc32",[],(function a(b,c,d,e,f,g){

function h(j){

var k=-1;
for(var l=0,m=j.length;l<m;l++)
k=k>>>8^i[(k^j.charCodeAt(l))&255];

return ~k;}


var i=
[0,1996959894,3993919788,2567524794,124634137,1886057615,
3915621685,2657392035,249268274,2044508324,3772115230,2547177864,
162941995,2125561021,3887607047,2428444049,498536548,1789927666,
4089016648,2227061214,450548861,1843258603,4107580753,2211677639,
325883990,1684777152,4251122042,2321926636,335633487,1661365465,
4195302755,2366115317,997073096,1281953886,3579855332,2724688242,
1006888145,1258607687,3524101629,2768942443,901097722,1119000684,
3686517206,2898065728,853044451,1172266101,3705015759,2882616665,
651767980,1373503546,3369554304,3218104598,565507253,1454621731,
3485111705,3099436303,671266974,1594198024,3322730930,2970347812,
795835527,1483230225,3244367275,3060149565,1994146192,31158534,
2563907772,4023717930,1907459465,112637215,2680153253,3904427059,
2013776290,251722036,2517215374,3775830040,2137656763,141376813,
2439277719,3865271297,1802195444,476864866,2238001368,4066508878,
1812370925,453092731,2181625025,4111451223,1706088902,314042704,
2344532202,4240017532,1658658271,366619977,2362670323,4224994405,
1303535960,984961486,2747007092,3569037538,1256170817,1037604311,
2765210733,3554079995,1131014506,879679996,2909243462,3663771856,
1141124467,855842277,2852801631,3708648649,1342533948,654459306,
3188396048,3373015174,1466479909,544179635,3110523913,3462522015,
1591671054,702138776,2966460450,3352799412,1504918807,783551873,
3082640443,3233442989,3988292384,2596254646,62317068,1957810842,
3939845945,2647816111,81470997,1943803523,3814918930,2489596804,
225274430,2053790376,3826175755,2466906013,167816743,2097651377,
4027552580,2265490386,503444072,1762050814,4150417245,2154129355,
426522225,1852507879,4275313526,2312317920,282753626,1742555852,
4189708143,2394877945,397917763,1622183637,3604390888,2714866558,
953729732,1340076626,3518719985,2797360999,1068828381,1219638859,
3624741850,2936675148,906185462,1090812512,3747672003,2825379669,
829329135,1181335161,3412177804,3160834842,628085408,1382605366,
3423369109,3138078467,570562233,1426400815,3317316542,2998733608,
733239954,1555261956,3268935591,3050360625,752459403,1541320221,
2607071920,3965973030,1969922972,40735498,2617837225,3943577151,
1913087877,83908371,2512341634,3803740692,2075208622,213261112,
2463272603,3855990285,2094854071,198958881,2262029012,4057260610,
1759359992,534414190,2176718541,4139329115,1873836001,414664567,
2282248934,4279200368,1711684554,285281116,2405801727,4167216745,
1634467795,376229701,2685067896,3608007406,1308918612,956543938,
2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,
1088359270,936918000,2847714899,3736837829,1202900863,817233897,
3183342108,3401237130,1404277552,615818150,3134207493,3453421203,
1423857449,601450431,3009837614,3294710456,1567103746,711928724,
3020668471,3272380065,1510334235,755167117];


if(b.Int32Array!==undefined)
i=new Int32Array(i);


f.exports=h;}),null);

/** shared/relay/oss/react-relay/classic/query/generateRQLFieldAlias.js */























__d('generateRQLFieldAlias',['base62','crc32'],(function a(b,c,d,e,f,g){

'use strict';






var h='_';













function i(j){

var k=j.indexOf('.');
if(k===-1)
return j;


return h+j.substr(0,k)+c('base62')(c('crc32')(j)>>>0);}


f.exports=i;}),null);

/** shared/relay/oss/react-relay/classic/query/serializeRelayQueryCall.js */























__d('serializeRelayQueryCall',['flattenArray'],(function a(b,c,d,e,f,g){

'use strict';













function h(j){
var k=j.value,
l=void 0;
if(Array.isArray(k)){
l=c('flattenArray')(k).
map(function(m){return i(m);}).
join(',');}else 

l=i(k);

return '.'+j.name+'('+l+')';}


function i(j){
if(j==null){
return '';}else
if(typeof j!=='string'){
return JSON.stringify(j);}else 

return j;}



f.exports=h;}),null);

/** shared/relay/oss/react-relay/classic/query/RelayQuery.js */























__d('RelayQuery',['invariant','QueryBuilder','RelayConnectionInterface','RelayFragmentReference','RelayMetaRoute','RelayProfiler','RelayRouteFragment','RelayVariable','RelayVariables','areEqual','callsFromGraphQL','callsToGraphQL','directivesToGraphQL','generateConcreteFragmentID','generateRQLFieldAlias','nullthrows','serializeRelayQueryCall','shallowEqual','stableStringify'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,k,l,m,n,o,p,q,r,s,t,u,v,
























w=c('RelayVariables').getFragmentSpreadArguments,





























x='if',
y='unless',
z='true',
aa='false',
ba='skip',
ca='include',

da=0,

ea=
{isDeferred:false,
isContainerFragment:false,
isTypeConditional:false},

fa=[],
ga=[];




ha.


















































create=
function(va,
wa,
xa){

var ya=ua(wa,xa),
za=pa(va,ya,xa);

za instanceof ha||h(0,
'RelayQueryNode.create(): '+
'Expected a GraphQL fragment, mutation, or query.');

return za;};







function ha
(va,
wa,
xa){


this.constructor.name!=='RelayQueryNode'||h(0,
'RelayQueryNode: Abstract class cannot be instantiated.');

this.__concreteNode__=va;
this.__root__=wa;
this.__variables__=xa;


this.__calls__=null;
this.__children__=null;
this.__fieldMap__=null;
this.__hasDeferredDescendant__=null;
this.__hasValidatedConnectionCalls__=null;
this.__serializationKey__=null;
this.__storageKey__=null;}
ha.prototype.

canHaveSubselections=function(){
return true;};
ha.prototype.

isGenerated=function(){
return false;};
ha.prototype.

isRefQueryDependency=function(){
return false;};
ha.prototype.

clone=function(va){
if(!this.canHaveSubselections()){


va.length===0||h(0,
'RelayQueryNode: Cannot add children to field `%s` because it does '+
'not support sub-selections (sub-fields).',
this instanceof oa?this.getSchemaName():null);

return this;}


var wa=this.getChildren(),
xa=ra(wa,va);

if(!xa.length){
return null;}else
if(xa===wa)
return this;


var ya=ha.create
(this.__concreteNode__,
c('RelayMetaRoute').get(this.__root__.routeName),
this.__variables__);

ya.__children__=xa;
ya.__calls__=this.__calls__;
ya.__serializationKey__=this.__serializationKey__;
ya.__storageKey__=this.__storageKey__;

return ya;};
ha.prototype.

getChildren=function(){var va,wa=this,
xa=this.__children__;
if(!xa)(function(){
var ya=[],
za=wa.__concreteNode__.children;
if(za)
za.forEach(function(ab){
if(ab==null)
return;

var bb=pa
(ab,
this.__root__,
this.__variables__);

if(Array.isArray(bb)){
bb.forEach(function(cb){
if(cb&&cb.isIncluded())
ya.push(cb);});}else


if(bb&&bb.isIncluded())
ya.push(bb);}.

bind(wa));

wa.__children__=ya;
xa=ya;})();

return xa;};
ha.prototype.

isIncluded=function(){

if(!this.__concreteNode__.directives)
return true;

return this.getDirectives().every(function(va){
if(va.name===ba){
return !va.args.some(function(wa){return wa.name===x&&!!wa.value;});}else
if(va.name===ca)
return !va.args.some(function(wa){return wa.name===x&&!wa.value;});

return true;});};

ha.prototype.

getDirectives=function(){
var va=this.__concreteNode__.directives;
if(va)
return this.__concreteNode__.directives.map(function(wa){

return {args:c('callsFromGraphQL')(wa.args,this.__variables__),
name:wa.name};}.

bind(this));

return fa;};
ha.prototype.

getField=function(va){
return this.getFieldByStorageKey(va.getStorageKey());};
ha.prototype.

getFieldByStorageKey=function(va){
var wa=this.__fieldMap__;
if(!wa){
wa={};
var xa=this.getChildren();
for(var ya=0;ya<xa.length;ya++){
var za=xa[ya];
if(za instanceof oa)
wa[za.getStorageKey()]=za;}


this.__fieldMap__=wa;}

return wa[va];};
ha.prototype.

getType=function(){
return this.__concreteNode__.type;};
ha.prototype.

getRoute=function(){
return c('RelayMetaRoute').get(this.__root__.routeName);};
ha.prototype.

getVariables=function(){
return this.__variables__;};
ha.prototype.

hasDeferredDescendant=function(){
var va=this.__hasDeferredDescendant__;
if(va==null){
va=
this.canHaveSubselections()&&
this.getChildren().some(function(wa){return wa.hasDeferredDescendant();});
this.__hasDeferredDescendant__=va;}

return va;};
ha.prototype.

isAbstract=function(){
throw new Error('RelayQueryNode: Abstract function cannot be called.');};
ha.prototype.

isRequisite=function(){
return false;};
ha.prototype.




equals=function(va){
var wa=this.getChildren(),
xa=va.getChildren();

return wa===xa||
wa.length===xa.length&&
wa.every(function(ya,za){return ya.equals(xa[za]);});};

ha.prototype.











isEquivalent=function(va){

return (this.__concreteNode__===va.__concreteNode__&&
this.__root__.routeName===va.__root__.routeName&&
c('shallowEqual')(this.__root__.variables,va.__root__.variables)&&
c('shallowEqual')(this.__variables__,va.__variables__));};

ha.prototype.

createNode=function(va){
return ha.create
(va,
c('RelayMetaRoute').get(this.__root__.routeName),
this.__variables__);};

ha.prototype.

getConcreteQueryNode=function(){
return this.__concreteNode__;};
i=babelHelpers.inherits







(ia,ha);j=i&&i.prototype;ia.









build=
function(va,
wa,
xa,
ya,
za,
ab,
bb){

var cb=ya?ya.filter(function(kb){return !!kb;}):[],
db=c('QueryBuilder').getBatchCallVariable(xa),
eb=void 0;
if(db){
eb=db;}else
if(Array.isArray(xa)){
eb=xa.map(c('QueryBuilder').createCallValue);}else
if(xa)
eb=c('QueryBuilder').createCallValue(xa);

var fb=c('QueryBuilder').createQuery
({fieldName:wa,
identifyingArgValue:eb,
metadata:za,
name:va,
type:ab}),

gb={},
hb=c('RelayMetaRoute').get(bb||'$RelayQuery'),
ib=ua(hb,gb),
jb=new ia
(fb,
ib,
gb);

jb.__children__=cb;
return jb;};
ia.

create=
function(va,
wa,
xa){

var ya=c('QueryBuilder').getQuery(va);

ya||h(0,
'RelayQueryRoot.create(): Expected a GraphQL `query { ... }`, got: %s',
va);

var za=ua(wa,xa);
return new ia
(ya,
za,
xa);};



function ia
(va,
wa,
xa){

j.constructor.call(this,va,wa,xa);
this.__batchCall__=undefined;
this.__id__=undefined;
this.__identifyingArg__=undefined;
this.__storageKey__=undefined;


this.getID();}
ia.prototype.

canHaveSubselections=function(){
return true;};
ia.prototype.

getName=function(){
var va=this.__concreteNode__.name;
if(!va){
va=this.getID();
this.__concreteNode__.name=va;}

return va;};
ia.prototype.

getID=function(){
var va=this.__id__;
if(va==null){
va='q'+da++;
this.__id__=va;}

return va;};
ia.prototype.

getBatchCall=function(){
var va=this.__batchCall__;
if(va===undefined){
var wa=this.__concreteNode__.calls;
if(wa){
var xa=wa[0]&&wa[0].value;

if(xa!=null&&
!Array.isArray(xa)&&
xa.kind==='BatchCallVariable')

va=
{refParamName:'ref_'+xa.sourceQueryID,
sourceQueryID:xa.sourceQueryID,
sourceQueryPath:xa.jsonPath};}



va=va||null;
this.__batchCall__=va;}

return va;};
ia.prototype.

getCallsWithValues=function(){
var va=this.__calls__;
if(!va){
var wa=this.__concreteNode__.calls;
if(wa){
va=c('callsFromGraphQL')(wa,this.__variables__);}else 

va=ga;

this.__calls__=va;}

return va;};
ia.prototype.

getFieldName=function(){
return this.__concreteNode__.fieldName;};
ia.prototype.

getIdentifyingArg=function(){var va,wa=this,
xa=this.__identifyingArg__;
if(!xa)(function(){
var ya=wa.__concreteNode__.metadata,
za=ya.identifyingArgName;
if(za!=null){
xa=
wa.getCallsWithValues().find(function(ab){return ab.name===za;});
if(xa&&ya.identifyingArgType!=null)
xa.type=ya.identifyingArgType;

wa.__identifyingArg__=xa;}})
();

return xa;};
ia.prototype.

getStorageKey=function(){var va,wa=this,
xa=this.__storageKey__;
if(!xa)(function(){
var ya=wa.getCallsWithValues(),
za=wa.getIdentifyingArg();
if(za)
ya=ya.filter(function(bb){return bb!==za;});

var ab=oa.build
({fieldName:wa.getFieldName(),
calls:ya,
type:wa.getType()});

xa=ab.getStorageKey();
wa.__storageKey__=xa;})();

return xa;};
ia.prototype.

hasDeferredDescendant=function(){
return this.isDeferred()||j.hasDeferredDescendant.call(this);};
ia.prototype.

isAbstract=function(){
return !!this.__concreteNode__.metadata.isAbstract;};
ia.prototype.

isDeferred=function(){
return !!this.__concreteNode__.isDeferred;};
ia.prototype.

isPlural=function(){
return !!this.__concreteNode__.metadata.isPlural;};
ia.prototype.

cloneWithRoute=
function(va,
wa){

if(this.__root__.routeName===wa.name)
return this.clone(va);

var xa=ha.create(babelHelpers['extends']({},

this.__concreteNode__,
{name:wa.name}),

wa,
this.__variables__);

xa.__children__=va;
return xa;};
ia.prototype.

equals=function(va){
if(this===va)
return true;

if(!(va instanceof ia))
return false;

if(!c('areEqual')(this.getBatchCall(),va.getBatchCall()))
return false;


if(this.getFieldName()!==va.getFieldName()||
!ta(this.getCallsWithValues(),va.getCallsWithValues()))

return false;

return j.equals.call(this,va);};
k=babelHelpers.inherits














(ja,ha);l=k&&k.prototype;ja.


create=
function(va,
wa,
xa){

var ya=c('QueryBuilder').getOperationDefinition(va);

ya||h(0,
'RelayQueryRoot.create(): Expected a value created with graphql`query { ... }` '+
'(using the `graphql` tag), got: %s',
va);

var za=ua(wa,xa);
return new ja
(ya,
za,
xa);};



function ja
(va,
wa,
xa){


va&&va.operation==='query'||h(0,
'RelayQueryRoot.create(): Expected a value created with graphql`query { ... }` '+
'(using the `graphql` tag), got: %s',
va);

l.constructor.call(this,va.node,wa,xa);
this.__id__=undefined;


this.getID();}
ja.prototype.

canHaveSubselections=function(){
return true;};
ja.prototype.

isDeferred=function(){
return false;};
ja.prototype.

getName=function(){
var va=this.__concreteNode__.name;
if(!va){
va=this.getID();
this.__concreteNode__.name=va;}

return va;};
ja.prototype.

getID=function(){
var va=this.__id__;
if(va==null){
va='q'+da++;
this.__id__=va;}

return va;};
ja.prototype.

equals=function(va){
if(this===va)
return true;

if(!(va instanceof ja))
return false;

return l.equals.call(this,va);};
m=babelHelpers.inherits







(ka,ha);n=m&&m.prototype;


function ka
(va,
wa,
xa){

n.constructor.call(this,va,wa,xa);

this.constructor.name!=='RelayQueryOperation'||h(0,
'RelayQueryOperation: Abstract class cannot be instantiated.');}

ka.prototype.

canHaveSubselections=function(){
return true;};
ka.prototype.

getName=function(){
return this.__concreteNode__.name;};
ka.prototype.

getResponseType=function(){
return this.__concreteNode__.responseType;};
ka.prototype.

getType=function(){
return this.getResponseType();};
ka.prototype.

getInputType=function(){
var va=
this.__concreteNode__.metadata.inputType;

va||h(0,
'RelayQuery: Expected operation `%s` to be annotated with the type of '+
'its argument. Either the babel transform was configured incorrectly, '+
'or the schema failed to define an argument for this mutation.',
this.getCall().name);

return va;};
ka.prototype.

getCall=function(){
var va=this.__calls__;
if(!va){
var wa=this.__concreteNode__.calls;
if(wa){
va=c('callsFromGraphQL')(wa,this.__variables__);}else 

va=ga;

this.__calls__=va;}

return va[0];};
ka.prototype.

getCallVariableName=function(){
if(!this.__callVariableName__){
var va=this.__concreteNode__.calls,
wa=
va&&c('QueryBuilder').getCallVariable(va[0].value);

wa||h(0,
'RelayQuery: Expected mutation to have a single argument.');

this.__callVariableName__=wa.callVariableName;}

return this.__callVariableName__;};
ka.prototype.





isAbstract=function(){
return false;};
o=babelHelpers.inherits







(la,ka);p=o&&o.prototype;la.




build=
function(va,
wa,
xa,
ya,
za,
ab,
bb){

var cb=za?za.filter(function(ib){return !!ib;}):[],
db=c('QueryBuilder').createMutation
({calls:[c('QueryBuilder').createCall
(xa,
c('QueryBuilder').createCallVariable('input'))],

metadata:ab,
name:va,
responseType:wa}),

eb={input:ya||''},
fb=c('RelayMetaRoute').get(bb||'$RelayQuery'),
gb=ua(fb,eb),
hb=new la
(db,
gb,
eb);

hb.__children__=cb;
return hb;};
la.prototype.

equals=function(va){
if(this===va)
return true;

if(!(va instanceof la))
return false;

if(!c('areEqual')(this.getResponseType(),va.getResponseType()))
return false;

if(!c('areEqual')(this.getCall(),va.getCall()))
return false;

return p.equals.call(this,va);};
function la(){o.apply(this,arguments);}q=babelHelpers.inherits







(ma,ka);r=q&&q.prototype;ma.
create=
function(va,
wa,
xa){

var ya=c('QueryBuilder').getSubscription(va);

ya||h(0,
'RelayQuerySubscription.create(): '+
'Expected a GraphQL `subscription { ... }`, got: %s',
va);

var za=ua(wa,xa);
return new ma
(va,
za,
xa);};

ma.prototype.

getPublishedPayloadType=function(){
return this.getResponseType();};
ma.prototype.

equals=function(va){
if(this===va)
return true;

if(!(va instanceof ma))
return false;


if(!c('areEqual')(this.getPublishedPayloadType(),va.getPublishedPayloadType()))

return false;

if(!c('areEqual')(this.getCall(),va.getCall()))
return false;

return r.equals.call(this,va);};
function ma(){q.apply(this,arguments);}s=babelHelpers.inherits







(na,ha);t=s&&s.prototype;na.








build=
function(va,
wa,
xa,
ya,
za){

var ab=xa?xa.filter(function(gb){return !!gb;}):[],
bb=c('QueryBuilder').createFragment
({name:va,
type:wa,
metadata:ya}),

cb={},
db=c('RelayMetaRoute').get(za||'$RelayQuery'),
eb=ua(db,cb),
fb=new na
(bb,
eb,
cb,

{isDeferred:!!(ya&&ya.isDeferred),
isContainerFragment:!!(ya&&ya.isContainerFragment),
isTypeConditional:!!(ya&&ya.isTypeConditional)});


fb.__children__=ab;
return fb;};
na.

create=
function(va,
wa,
xa,
ya){

var za=c('QueryBuilder').getFragment(va);

za||h(0,
'RelayQueryFragment.create(): '+
'Expected a GraphQL `fragment { ... }`, got: %s',
va);

var ab=ua(wa,xa);
return qa
(za,
ab,
xa,
ya||ea);};



function na
(va,
wa,
xa,
ya){

t.constructor.call(this,va,wa,xa);
this.__compositeHash__=null;
this.__metadata__=ya||ea;
this.__sourceCompositeHash__=null;}
na.prototype.

canHaveSubselections=function(){
return true;};
na.prototype.

getDebugName=function(){
return this.__concreteNode__.name;};
na.prototype.






getConcreteFragmentID=function(){
return this.__concreteNode__.id;};
na.prototype.









getCompositeHash=function(){
var va=this.__compositeHash__;
if(!va){
va=c('generateRQLFieldAlias')
(this.getConcreteFragmentID()+
'.'+this.__root__.routeName+
'.'+c('stableStringify')(this.__variables__));

this.__compositeHash__=va;}

return va;};
na.prototype.

getSourceCompositeHash=function(){
return this.__sourceCompositeHash__;};
na.prototype.

isAbstract=function(){
return !!this.__concreteNode__.metadata.isAbstract;};
na.prototype.

isDeferred=function(){
return this.__metadata__.isDeferred;};
na.prototype.

isPattern=function(){
return !!this.__concreteNode__.metadata.pattern;};
na.prototype.

isPlural=function(){
var va=this.__concreteNode__.metadata;


return !!(va.isPlural||va.plural);};

na.prototype.

isTrackingEnabled=function(){
var va=this.__concreteNode__.metadata;
return !!va.isTrackingEnabled;};
na.prototype.

cloneAsPlainFragment=function(){
return qa
(this.__concreteNode__,
this.__root__,
this.__variables__,
ea);};

na.prototype.

isContainerFragment=function(){
return this.__metadata__.isContainerFragment;};
na.prototype.

isTypeConditional=function(){
return this.__metadata__.isTypeConditional;};
na.prototype.

hasDeferredDescendant=function(){
return this.isDeferred()||t.hasDeferredDescendant.call(this);};
na.prototype.

clone=function(va){
var wa=t.clone.call(this,va);
if(wa!==this&&
wa instanceof na){
wa.__concreteNode__=babelHelpers['extends']({},
wa.__concreteNode__,
{id:c('generateConcreteFragmentID')()});

wa.__metadata__=babelHelpers['extends']({},
this.__metadata__);





wa.__sourceCompositeHash__=this.getCompositeHash();}

return wa;};
na.prototype.

equals=function(va){
if(this===va)
return true;

if(!(va instanceof na))
return false;

if(this.getType()!==va.getType())
return false;

return t.equals.call(this,va);};
u=babelHelpers.inherits







(oa,ha);v=u&&u.prototype;oa.





create=
function(va,
wa,
xa){

var ya=c('QueryBuilder').getField(va);

ya||h(0,
'RelayQueryField.create(): Expected a GraphQL field, got: %s',
va);

var za=ua(wa,xa);
return new oa
(ya,
za,
xa);};

oa.





build=function(va){

















var wa=va.alias,xa=va.directives,ya=va.calls,za=va.children,ab=va.fieldName,bb=va.metadata,cb=va.routeName,db=va.type,
eb=za?za.filter(function(kb){return !!kb;}):[],
fb=c('QueryBuilder').createField
({alias:wa,
calls:ya?c('callsToGraphQL')(ya):null,
directives:xa?c('directivesToGraphQL')(xa):null,
fieldName:ab,
metadata:bb,
type:db}),

gb={},
hb=c('RelayMetaRoute').get(cb||'$RelayQuery'),
ib=ua(hb,gb),
jb=new oa
(fb,
ib,
gb);

jb.__children__=eb;
return jb;};


function oa
(va,
wa,
xa){

v.constructor.call(this,va,wa,xa);
this.__debugName__=undefined;
this.__isRefQueryDependency__=false;
this.__rangeBehaviorCalls__=undefined;
this.__shallowHash__=undefined;}
oa.prototype.

canHaveSubselections=function(){

return !!this.__concreteNode__.metadata.canHaveSubselections;};

oa.prototype.

isAbstract=function(){
return !!this.__concreteNode__.metadata.isAbstract;};
oa.prototype.

isFindable=function(){
return !!this.__concreteNode__.metadata.isFindable;};
oa.prototype.

isGenerated=function(){
return !!this.__concreteNode__.metadata.isGenerated;};
oa.prototype.

isConnection=function(){
return !!this.__concreteNode__.metadata.isConnection;};
oa.prototype.

isConnectionWithoutNodeID=function(){
return !!this.__concreteNode__.metadata.
isConnectionWithoutNodeID;};
oa.prototype.

isPlural=function(){
return !!this.__concreteNode__.metadata.isPlural;};
oa.prototype.

isRefQueryDependency=function(){
return this.__isRefQueryDependency__;};
oa.prototype.

isRequisite=function(){
return !!this.__concreteNode__.metadata.isRequisite;};
oa.prototype.

getDebugName=function(){var va,wa=this,
xa=this.__debugName__;
if(!xa)(function(){
xa=wa.getSchemaName();
var ya=void 0;
wa.getCallsWithValues().forEach(function(za){
if(this.$RelayQueryField_isCoreArg(za)){
ya=ya||[];
ya.push(c('serializeRelayQueryCall')(za));}}.

bind(wa));
if(ya)
xa+=ya.sort().join('');

wa.__debugName__=xa;})();

return xa;};
oa.prototype.




getSchemaName=function(){
return this.__concreteNode__.fieldName;};
oa.prototype.








getRangeBehaviorCalls=function(){

this.isConnection()||h(0,
'RelayQueryField: Range behavior keys are associated exclusively with '+
'connection fields. `getRangeBehaviorCalls()` was called on the '+
'non-connection field `%s`.',
this.getSchemaName());


var va=this.__rangeBehaviorCalls__;
if(!va){
va=this.getCallsWithValues().filter(function(wa){
return this.$RelayQueryField_isCoreArg(wa);}.
bind(this));
this.__rangeBehaviorCalls__=va;}

return va;};
oa.prototype.













getSerializationKey=function(){
var va=this.__serializationKey__;
if(!va){
var wa=this.getSchemaName(),
xa=this.getCallsWithValues();
if(xa.length){
var ya=this.__concreteNode__.alias;
if(ya!=null)
wa+='.'+ya;

wa+=xa.
map(c('serializeRelayQueryCall')).
sort().
join('');}

va=c('generateRQLFieldAlias')(wa);
this.__serializationKey__=va;}

return va;};
oa.prototype.




getShallowHash=function(){
var va=this.__shallowHash__;
if(!va)
this.__shallowHash__=va=
this.getSchemaName()+
sa(this.getCallsWithValues());

return va;};
oa.prototype.












getStorageKey=function(){
var va=this.__storageKey__;
if(!va)
this.__storageKey__=va=
this.getSchemaName()+
sa
(this.getCallsWithValues().filter(function(wa){return this.$RelayQueryField_isCoreArg(wa);}.bind(this)));


return va;};
oa.prototype.





getApplicationName=function(){
var va=this.__concreteNode__;
return va.alias||va.fieldName;};
oa.prototype.

getInferredRootCallName=function(){
return this.__concreteNode__.metadata.inferredRootCallName;};
oa.prototype.

getInferredPrimaryKey=function(){
return this.__concreteNode__.metadata.inferredPrimaryKey;};
oa.prototype.

getCallsWithValues=function(){
var va=this.__calls__;
if(!va){
var wa=this.__concreteNode__.calls;
if(wa){
va=c('callsFromGraphQL')(wa,this.__variables__);}else 

va=ga;

this.__calls__=va;}

return va;};
oa.prototype.

getCallType=function(va){
var wa=this.__concreteNode__.calls,
xa=wa&&wa.filter
(function(ya){return ya.name===va;})[
0];
if(xa)
return xa.metadata.type;};

oa.prototype.

equals=function(va){
if(this===va)
return true;

if(!(va instanceof oa))
return false;


if(this.getSchemaName()!==va.getSchemaName()||
this.getApplicationName()!==va.getApplicationName()||
!ta(this.getCallsWithValues(),va.getCallsWithValues()))

return false;

return v.equals.call(this,va);};
oa.prototype.

cloneAsRefQueryDependency=function(){
var va=new oa
(this.__concreteNode__,
this.__root__,
this.__variables__);

va.__children__=[];
va.__isRefQueryDependency__=true;
return va;};
oa.prototype.

cloneFieldWithCalls=
function(va,
wa){

if(!this.canHaveSubselections())


va.length===0||h(0,
'RelayQueryNode: Cannot add children to field `%s` because it does '+
'not support sub-selections (sub-fields).',
this.getSchemaName());




if(c('areEqual')(this.getCallsWithValues(),wa)){
var xa=this.clone(va);
return xa;}


var ya=ra(this.getChildren(),va);
if(!ya.length)
return null;


var za=new oa
(this.__concreteNode__,
this.__root__,
this.__variables__);

za.__children__=ya;
za.__calls__=wa;

return za;};
oa.prototype.






$RelayQueryField_isCoreArg=function(va){


return (!(va.name===x&&String(va.value)===z)&&
!(va.name===y&&String(va.value)===aa)&&

!(this.isConnection()&&c('RelayConnectionInterface').isConnectionCall(va)));};




function pa
(va,
wa,
xa){


typeof va==='object'&&
va!==null||h(0,
'RelayQueryNode: Expected a GraphQL object created with `Relay.QL`, got'+
'`%s`.',
va);

var ya=va.kind,
za=ha;
if(ya==='Field'){
za=oa;}else
if(ya==='Fragment'){
za=na;}else
if(ya==='FragmentSpread'){
var ab=c('nullthrows')(c('QueryBuilder').getFragmentSpread(va)),
bb=wa.variables,
cb=w
(ab.fragment.node.name,
ab.args,
xa,
bb),

db=c('RelayVariables').getFragmentVariables
(ab.fragment,
bb,
cb);

return qa
(ab.fragment.node,
wa,
db,

{isDeferred:false,
isContainerFragment:true,
isTypeConditional:false});}else


if(ya==='OperationDefinition'){
za=ja;}else
if(ya==='Query'){
za=ia;}else
if(ya==='Mutation'){
za=la;}else
if(ya==='Subscription'){
za=ma;}else
if(va instanceof c('RelayRouteFragment')){
var eb=c('RelayMetaRoute').get(wa.routeName),
fb=va.getFragmentForRoute(eb);

if(Array.isArray(fb)){


return fb.map(function(jb){
return pa(jb,wa,xa);});}else

if(fb)
return pa(fb,wa,xa);

return null;}else
if(va instanceof c('RelayFragmentReference')){
var gb=va.getFragment(xa),
hb=c('RelayMetaRoute').get(wa.routeName),
ib=va.getVariables(hb,xa);
if(gb)

return qa
(gb,
wa,
ib,

{isDeferred:va.isDeferred(),
isContainerFragment:va.isContainerFragment(),
isTypeConditional:va.isTypeConditional()});



return null;}


return new za
(va,
wa,
xa);}







function qa
(va,
wa,
xa,
ya){

var za=wa.routeName+
':'+c('stableStringify')(wa.variables)+
':'+c('stableStringify')(xa)+
':'+c('stableStringify')(ya),
ab=va.__cachedFragment__,
bb=va.__cacheKey__;
if(!ab||bb!==za){
ab=new na
(va,
wa,
xa,
ya);

va.__cachedFragment__=ab;
va.__cacheKey__=za;}

return ab;}







function ra
(va,
wa){

var xa=[],
ya=true,

za=0;
for(var ab=0;ab<wa.length;ab++){
var bb=wa[ab];
if(bb){
xa.push(bb);
ya=ya&&bb===va[za++];}}



if(ya&&xa.length===va.length){
return va;}else 

return xa;}






function sa(va){var wa;
if(va.length){var wa=function(){
var xa={};
va.forEach(function(ya){
xa[ya.name]=ya.value;});

return {v:c('stableStringify')(xa)};}();if(typeof wa==="object")return wa.v;}else 

return '';}








function ta
(va,
wa){

if(va.length!==wa.length)
return false;

return va.every(function(xa,ya){var za=xa.name,ab=xa.value,bb=
wa[ya],cb=bb.name,db=bb.value;
if(za!==cb)
return false;

if(ab instanceof c('RelayVariable'))
return ab.equals(db);

return c('areEqual')(ab,db);});}



function ua
(va,
wa){


return {routeName:va.name,
variables:wa};}



c('RelayProfiler').instrumentMethods(ha.prototype,
{clone:'@RelayQueryNode.prototype.clone',
equals:'@RelayQueryNode.prototype.equals',
getChildren:'@RelayQueryNode.prototype.getChildren',
getDirectives:'@RelayQueryNode.prototype.getDirectives',
hasDeferredDescendant:'@RelayQueryNode.prototype.hasDeferredDescendant',
getFieldByStorageKey:'@RelayQueryNode.prototype.getFieldByStorageKey'});


c('RelayProfiler').instrumentMethods(oa.prototype,
{getStorageKey:'@RelayQueryField.prototype.getStorageKey',
getSerializationKey:'@RelayQueryField.prototype.getSerializationKey'});


f.exports=
{Field:oa,
Fragment:na,
Mutation:la,
Node:ha,
Operation:ka,
OSSQuery:ja,
Root:ia,
Subscription:ma};}),null);

/** shared/relay/oss/react-relay/classic/store/RelayRecord.js */























__d('RelayRecord',[],(function a(b,c,d,e,f,g){

'use strict';
































var h=
{DATA_ID:'__dataID__',
FILTER_CALLS:'__filterCalls__',
FORCE_INDEX:'__forceIndex__',
MUTATION_IDS:'__mutationIDs__',
MUTATION_STATUS:'__mutationStatus__',
PATH:'__path__',
RANGE:'__range__',
RESOLVED_DEFERRED_FRAGMENTS:'__resolvedDeferredFragments__',
RESOLVED_FRAGMENT_MAP:'__resolvedFragmentMap__',
RESOLVED_FRAGMENT_MAP_GENERATION:'__resolvedFragmentMapGeneration__',
STATUS:'__status__'},


i={};
Object.keys(h).forEach(function(k){
i[h[k]]=true;});





var j=

{MetadataKey:h,

create:function k(l){
return {__dataID__:l};},


createWithFields:function k
(l,
m){

return babelHelpers['extends']({__dataID__:l},m);},


isRecord:function k(l){

return (typeof l==='object'&&
l!=null&&
!Array.isArray(l)&&
typeof l.__dataID__==='string');},



getRecord:function k(l){
if(j.isRecord(l)){
return l;}else 

return null;},



getDataID:function k(l){
return l.__dataID__;},


getDataIDForObject:function k(l){
return l.__dataID__;},






isClientID:function k(l){
return l.startsWith('client:');},


isMetadataKey:function k(l){
return Object.prototype.hasOwnProperty.call(i,l);}};



f.exports=j;}),null);

/** shared/relay/oss/react-relay/classic/query/RelayFragmentPointer.js */























__d('RelayFragmentPointer',['invariant','RelayQuery','RelayRecord','areEqual','forEachRootCallArg'],(function a(b,c,d,e,f,g,h){

'use strict';





























var i=
{addFragment:function k
(l,
m){

var n=l.__fragments__;
if(n==null)
n=l.__fragments__={};


typeof n==='object'&&n!=null||h(0,
'RelayFragmentPointer: Expected record to contain a fragment map, got '+
'`%s` for record `%s`.',
n,
l.__dataID__);

var o=m.getConcreteFragmentID(),
p=n[o];
if(p==null)
p=n[o]=[];


Array.isArray(p)||h(0,
'RelayFragmentPointer: Expected record to contain a fragment/variable '+
'map, got `%s` for record `%s`.',
p,
l.__dataID__);

p.push(m.getVariables());},






hasConcreteFragment:function k
(l,
m){

var n=l.__fragments__;
if(typeof n==='object'&&n!=null){
var o=m.getConcreteFragmentID();
return Object.prototype.hasOwnProperty.call(n,o);}

return false;},






hasFragment:function k
(l,
m){

var n=i.getFragmentVariables
(l,
m);

if(n!=null)
return n.some
(function(o){return c('areEqual')(o,m.getVariables());});


return false;},


getVariablesForID:function k(l,m){
var n=l.__fragments__;
if(typeof n==='object'&&n!=null){
var o=n[m];
if(o){

Array.isArray(o)&&
o.length===1||h(0,
'RelayFragmentPointer: Expected an array with at most one set of '+
'variables per concrete fragment, got %s.',
o);

return o[0];}}


return null;},






getFragmentVariables:function k
(l,
m){

var n=l.__fragments__;
if(typeof n==='object'&&n!=null){
var o=m.getConcreteFragmentID();
return n[o];}

return null;},


create:function k
(l,
m){

var n=c('RelayRecord').create(l);
i.addFragment(n,m);



return n;},


createForRoot:function k
(l,
m){

var n=j(m);
if(!n)
return null;

var o=m.getStorageKey(),
p=[];
c('forEachRootCallArg')(m,function(s){var t=s.identifyingArgKey,
u=l.getDataID(o,t);
if(u==null){
p.push(null);}else 

p.push(i.create(u,n));});



var q=m.getIdentifyingArg(),
r=
q&&q.value||null;
if(Array.isArray(r))
return p;

return p[0];}};



function j(k){
var l=k.getBatchCall();
if(l)

h(0,
'Queries supplied at the root cannot have batch call variables. Query '+
'`%s` has a batch call variable, `%s`.',
k.getName(),
l.refParamName);


var m=void 0;
k.getChildren().forEach(function(n){
if(n instanceof c('RelayQuery').Fragment){

!m||h(0,
'Queries supplied at the root should contain exactly one fragment '+
'(e.g. `${Component.getFragment(\'...\')}`). Query `%s` contains '+
'more than one fragment.',
k.getName());

m=n;}else
if(n instanceof c('RelayQuery').Field)

n.isGenerated()||h(0,
'Queries supplied at the root should contain exactly one fragment '+
'and no fields. Query `%s` contains a field, `%s`. If you need to '+
'fetch fields, declare them in a Relay container.',
k.getName(),
n.getSchemaName());});



return m;}


f.exports=i;}),null);

/** shared/relay/oss/react-relay/classic/tools/RelayQueryCaching.js */























__d('RelayQueryCaching',[],(function a(b,c,d,e,f,g){

'use strict';

var h=true,




i=




{disable:function j(){
h=false;},





getEnabled:function j(){
return h;}};



f.exports=i;}),null);

/** shared/relay/oss/react-relay/classic/query/buildRQL.js */























__d('buildRQL',['invariant','Map','QueryBuilder','RelayProfiler','RelayQueryCaching','filterObject','mapObject'],(function a(b,c,d,e,f,g,h){

'use strict';























var i=new (c('Map'))(),


j=new (c('Map'))();

function k
(o,
p){

var q=o.length;









return q>p;}












var l=
{Fragment:function o
(p,
q){

var r=i.get(p);
if(r)
return c('QueryBuilder').getFragment(r);

var s=n(q);

!k(p,1)||h(0,
'Relay.QL: Deprecated usage detected. If you are trying to define a '+
'fragment, use `variables => Relay.QL`.');

r=p(s);
var t=r!=null?
c('QueryBuilder').getFragment(r):
null;
if(!t)
return t;

i.set(p,t);
return t;},


Query:function o
(p,
q,
r,
s){

var t=c('RelayQueryCaching').getEnabled(),
u=void 0;
if(!t){
u=m(p,q,r,s);}else{

var v=j.get(p);
if(!v){
v=new (c('Map'))();
j.set(p,v);}else 

u=v.get(q);

if(!u)
u=m(p,q,r,s);

v.set(q,u);}

if(u)
return c('QueryBuilder').getQuery(u)||undefined;

return null;}};






function m
(o,
p,
q,
r){
var s,
t=n(r);

!k(o,2)||h(0,
'Relay.QL: Deprecated usage detected. If you are trying to define a '+
'query, use `(Component, variables) => Relay.QL`.');

var u=void 0;
if(k(o,0)){
u=o(p,t);}else{

u=o(p,t);
var v=c('QueryBuilder').getQuery(u);
if(v)(function(){
var w=false,
x=true;
if(v.children)
v.children.forEach(function(aa){
if(aa){
w=w||aa.kind==='Fragment';
x=x&&
aa.kind==='Field'&&
(!aa.children||aa.children.length===0);}});




if(!w){
var y=v.children?[].concat(v.children):[];

x||h(0,
'Relay.QL: Expected query `%s` to be empty. For example, use '+
'`node(id: $id)`, not `node(id: $id) { ... }`.',
v.fieldName);

var z=c('filterObject')(t,function(aa,ba){
return (p.hasVariable(ba));});

y.push(p.getFragment(q,z));
u=babelHelpers['extends']({},
v,
{children:y});}})

();}


return u;}


function n(o){


return c('mapObject')
(o,
function(p,q){return c('QueryBuilder').createCallVariable(q);});}



c('RelayProfiler').instrumentMethods(l,
{Fragment:'buildRQL.Fragment',
Query:'buildRQL.Query'});


f.exports=l;}),null);

/** shared/relay/oss/react-relay/classic/container/getRelayQueries.js */























__d('getRelayQueries',['invariant','Map','RelayMetaRoute','RelayProfiler','RelayQuery','RelayQueryCaching','buildRQL','stableStringify','warning'],(function a(b,c,d,e,f,g,h){

'use strict';
















var i=new (c('Map'))();






function j
(l,
m){

var n=c('RelayQueryCaching').getEnabled();
if(!n)
return k(l,m);

var o=i.get(l);
if(!o){
o={};
i.set(l,o);}

var p=m.name+':'+c('stableStringify')(m.params);
if(Object.prototype.hasOwnProperty.call(o,p))
return o[p];

var q=k(l,m);
o[p]=q;
return q;}





function k
(l,
m){

var n={};
l.getFragmentNames().forEach(function(o){
n[o]=null;});

Object.keys(m.queries).forEach(function(o){
if(!l.hasFragment(o)){
c('warning')
(false,
'Relay.QL: query `%s.queries.%s` is invalid, expected fragment '+
'`%s.fragments.%s` to be defined.',
m.name,
o,
l.displayName,
o);

return;}

var p=m.queries[o];
if(p){
var q=c('buildRQL').Query
(p,
l,
o,
m.params);


q!==undefined||h(0,
'Relay.QL: query `%s.queries.%s` is invalid, a typical query is '+
'defined using: () => Relay.QL`query { ... }`.',
m.name,
o);

if(q){
var r=c('RelayQuery').Root.create
(q,
c('RelayMetaRoute').get(m.name),
m.params),

s=r.getIdentifyingArg();
if(!s||s.value!==undefined){
n[o]=r;
return;}}}



n[o]=null;});

return n;}


f.exports=c('RelayProfiler').instrument('Relay.getQueries',j);}),null);

/** shared/relay/oss/react-relay/classic/container/RelayReadyStateRenderer.js */























__d('RelayReadyStateRenderer',['React','RelayFragmentPointer','RelayPropTypes','StaticContainer.react','getRelayQueries','mapObject'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits





















































(j,c('React').Component);i=h&&h.prototype;











function j(m,n){
i.constructor.call(this,m,n);
this.$RelayReadyStateRenderer_relay=
{environment:m.environment,
variables:m.queryConfig.params};

this.state=
{getContainerProps:k()};}

j.prototype.

getChildContext=function(){

return {relay:this.$RelayReadyStateRenderer_relay,
route:this.props.queryConfig};};

j.prototype.

componentWillReceiveProps=function(m){

if(this.props.environment!==m.environment||
this.props.queryConfig!==m.queryConfig)

this.$RelayReadyStateRenderer_relay=
{environment:m.environment,
variables:m.queryConfig.params};};


j.prototype.




shouldComponentUpdate=function(m){
var n=this.props;

if(n.Container!==m.Container||
n.environment!==m.environment||
n.queryConfig!==m.queryConfig||
n.render!==m.render||
n.retry!==m.retry)

return true;

var o=n.readyState,
p=m.readyState;
if(o==null||
p==null)
return true;


if(o.aborted!==p.aborted||
o.done!==p.done||
o.error!==p.error||
o.ready!==p.ready||
o.stale!==p.stale)

return true;

return p.ready;};
j.prototype.

render=function(){
var m=void 0,
n=false,o=

this.props,p=o.readyState,q=o.render;
if(p){
if(q){
m=q
({done:p.done,
error:p.error,
events:p.events,
props:p.ready?
this.state.getContainerProps(this.props):
null,
retry:this.props.retry,
stale:p.stale});}else

if(p.ready){
var r=this.props.Container;
m=c('React').createElement(r,this.state.getContainerProps(this.props));}

n=true;}

if(m===undefined){
m=null;
n=false;}


return (c('React').createElement(c('StaticContainer.react'),{shouldUpdate:n},
m));};


j.childContextTypes={relay:c('RelayPropTypes').ClassicRelay,route:c('RelayPropTypes').QueryConfig.isRequired};


function k(){
var m=void 0,
n=void 0;

return function(o){

if(!n||
!m||
m.Container!==o.Container||
m.queryConfig!==o.queryConfig)

n=c('getRelayQueries')
(o.Container,
o.queryConfig);


var p=babelHelpers['extends']({},
o.queryConfig.params,
c('mapObject')
(n,
function(q){return l(o.environment,q);}));


m=o;
return p;};}



function l
(m,
n){

return n?
c('RelayFragmentPointer').createForRoot
(m.getStoreData().getQueuedStore(),
n):

null;}


f.exports=j;}),null);

/** shared/relay/oss/react-relay/classic/environment/RelaySelector.js */























__d('RelaySelector',['invariant','RelayFragmentPointer','RelayRecord','areEqual','forEachObject','warning'],(function a(b,c,d,e,f,g,h){

'use strict';




















function i
(r,
s,
t){


typeof t==='object'&&t!==null&&!Array.isArray(t)||h(0,
'RelaySelector: Expected value for fragment `%s` to be an object, got '+
'`%s`.',
s.node.name,
JSON.stringify(t));

var u=c('RelayRecord').getDataIDForObject(t),
v=c('RelayFragmentPointer').getVariablesForID
(t,
s.node.id);

if(u!=null&&v!=null)

return {dataID:u,
node:s.node,
variables:babelHelpers['extends']({},
r,
v)};



c('warning')
(false,
'RelaySelector: Expected object to contain data for fragment `%s`, got '+
'`%s`. Make sure that the parent operation/fragment included fragment '+
'`...%s`.',
s.node.name,
JSON.stringify(t),
s.node.name);

return null;}





function j
(r,
s,
t){

var u=null;
t.forEach(function(v){
var w=v!=null?
i(r,s,v):
null;
if(w!=null){
u=u||[];
u.push(w);}});


return u;}





function k
(r,
s,
t){

var u={};
c('forEachObject')(s,function(v,w){
var x=t[w];
if(x==null){
u[w]=x;}else
if(v.node.metadata&&v.node.metadata.plural===true){

Array.isArray(x)||h(0,
'RelaySelector: Expected value for key `%s` to be an array, got `%s`. '+
'Remove `@relay(plural: true)` from fragment `%s` to allow the prop to be an object.',
w,
JSON.stringify(x),
v.node.name);

u[w]=j
(r,
v,
x);}else{



!Array.isArray(x)||h(0,
'RelaySelector: Expected value for key `%s` to be an object, got `%s`. '+
'Add `@relay(plural: true)` to fragment `%s` to allow the prop to be an array of items.',
w,
JSON.stringify(x),
v.node.name);

u[w]=i
(r,
v,
x);}});



return u;}











function l
(r,
s){

var t={};
c('forEachObject')(r,function(u,v){
var w=s[v];
if(w==null){
t[v]=w;}else
if(u.node.metadata&&u.node.metadata.plural===true){

Array.isArray(w)||h(0,
'RelaySelector: Expected value for key `%s` to be an array, got `%s`. '+
'Remove `@relay(plural: true)` from fragment `%s` to allow the prop to be an object.',
v,
JSON.stringify(w),
u.node.name);

t[v]=m(u,w);}else{


!Array.isArray(w)||h(0,
'RelaySelector: Expected value for key `%s` to be an object, got `%s`. '+
'Add `@relay(plural: true)` to fragment `%s` to allow the prop to be an array of items.',
v,
JSON.stringify(w),
u.node.name);

t[v]=n(u,w);}});


return t;}





function m(r,s){
var t=void 0;
s.forEach(function(u){
var v=u!=null?
n(r,u):
null;
if(v!=null){
t=t||[];
t.push(v);}});


return t||null;}





function n(r,s){

typeof s==='object'&&s!==null&&!Array.isArray(s)||h(0,
'RelaySelector: Expected value for fragment `%s` to be an object, got '+
'`%s`.',
r.node.name,
JSON.stringify(s));

var t=c('RelayRecord').getDataIDForObject(s);
if(t!=null)
return t;

c('warning')
(false,
'RelaySelector: Expected object to contain data for fragment `%s`, got '+
'`%s`. Make sure that the parent operation/fragment included fragment '+
'`...%s`.',
r.node.name,
JSON.stringify(s),
r.node.name);

return null;}





function o
(r,
s,
t){

var u={};
c('forEachObject')(s,function(v,w){
var x=t[w];
if(x==null){
return;}else
if(v.node.metadata&&v.node.metadata.plural===true){

Array.isArray(x)||h(0,
'RelaySelector: Expected value for key `%s` to be an array, got `%s`. '+
'Remove `@relay(plural: true)` from fragment `%s` to allow the prop to be an object.',
w,
JSON.stringify(x),
v.node.name);

x.forEach(function(z){
if(z!=null){
var aa=p(r,v,z);
if(aa)
Object.assign(u,aa);}});}else{





!Array.isArray(x)||h(0,
'RelaySelector: Expected value for key `%s` to be an object, got `%s`. '+
'Add `@relay(plural: true)` to fragment `%s` to allow the prop to be an array of items.',
w,
JSON.stringify(x),
v.node.name);

var y=p(r,v,x);
if(y)
Object.assign(u,y);}});



return u;}





function p
(r,
s,
t){

var u=i(r,s,t);
return u?u.variables:null;}





function q
(r,
s){


return (r.dataID===s.dataID&&
r.node===s.node&&
c('areEqual')(r.variables,s.variables));}



f.exports=
{areEqualSelectors:q,
getDataIDsFromObject:l,
getSelector:i,
getSelectorList:j,
getSelectorsFromObject:k,
getVariablesFromObject:o};}),null);

/** shared/relay/oss/react-relay/classic/environment/RelayFragmentSpecResolver.js */























__d('RelayFragmentSpecResolver',['invariant','forEachObject','isScalarAndEqual','RelaySelector'],(function a(b,c,d,e,f,g,h){

'use strict';





var i=c('RelaySelector').areEqualSelectors,j=c('RelaySelector').getSelectorsFromObject;








































function k
(p,
q,
r,
s){
this.































































































$RelayFragmentSpecResolver_onChange=function(){
this.$RelayFragmentSpecResolver_stale=true;
this.$RelayFragmentSpecResolver_callback();}.
bind(this);this.$RelayFragmentSpecResolver_callback=s;this.$RelayFragmentSpecResolver_context=p;this.$RelayFragmentSpecResolver_data={};this.$RelayFragmentSpecResolver_fragments=q;this.$RelayFragmentSpecResolver_props=r;this.$RelayFragmentSpecResolver_resolvers={};this.$RelayFragmentSpecResolver_stale=false;this.setProps(r);}k.prototype.dispose=function(){c('forEachObject')(this.$RelayFragmentSpecResolver_resolvers,o);};k.prototype.resolve=function(){var p,q=this;if(this.$RelayFragmentSpecResolver_stale)(function(){var r=q.$RelayFragmentSpecResolver_data,s=void 0;c('forEachObject')(q.$RelayFragmentSpecResolver_resolvers,function(t,u){var v=r[u];if(t){var w=t.resolve();if(s||w!==v){s=s||babelHelpers['extends']({},r);s[u]=w;}}else{var x=this.$RelayFragmentSpecResolver_props[u],y=x!==undefined?x:null;if(s||!c('isScalarAndEqual')(y,v)){s=s||babelHelpers['extends']({},r);s[u]=y;}}}.bind(q));q.$RelayFragmentSpecResolver_data=s||r;q.$RelayFragmentSpecResolver_stale=false;})();return this.$RelayFragmentSpecResolver_data;};k.prototype.setProps=function(p){var q=j(this.$RelayFragmentSpecResolver_context.variables,this.$RelayFragmentSpecResolver_fragments,p);c('forEachObject')(q,function(r,s){var t=this.$RelayFragmentSpecResolver_resolvers[s];if(r==null){if(t!=null)t.dispose();t=null;}else if(Array.isArray(r)){if(t==null){t=new n(this.$RelayFragmentSpecResolver_context.environment,r,this.$RelayFragmentSpecResolver_onChange);}else{t instanceof n||h(0,'RelayFragmentSpecResolver: Expected prop `%s` to always be an array.',s);t.setSelectors(r);}}else if(t==null){t=new l(this.$RelayFragmentSpecResolver_context.environment,r,this.$RelayFragmentSpecResolver_onChange);}else{t instanceof l||h(0,'RelayFragmentSpecResolver: Expected prop `%s` to always be an object.',s);t.setSelector(r);}this.$RelayFragmentSpecResolver_resolvers[s]=t;}.bind(this));this.$RelayFragmentSpecResolver_props=p;this.$RelayFragmentSpecResolver_stale=true;};k.prototype.setVariables=function(p){c('forEachObject')(this.$RelayFragmentSpecResolver_resolvers,function(q){if(q)q.setVariables(p);});this.$RelayFragmentSpecResolver_stale=true;};












function l
(p,
q,
r){
m.call(this);
var s=p.lookup(q);
this.$SelectorResolver_callback=r;
this.$SelectorResolver_data=s.data;
this.$SelectorResolver_environment=p;
this.$SelectorResolver_selector=q;
this.$SelectorResolver_subscription=p.subscribe(s,this.$SelectorResolver_onChange);}
l.prototype.

dispose=function(){
if(this.$SelectorResolver_subscription){
this.$SelectorResolver_subscription.dispose();
this.$SelectorResolver_subscription=null;}};

l.prototype.

resolve=function(){
return this.$SelectorResolver_data;};
l.prototype.

setSelector=function(p){
if(this.$SelectorResolver_subscription!=null&&i(p,this.$SelectorResolver_selector))
return;

this.dispose();
var q=this.$SelectorResolver_environment.lookup(p);
this.$SelectorResolver_data=q.data;
this.$SelectorResolver_selector=p;
this.$SelectorResolver_subscription=this.$SelectorResolver_environment.subscribe(q,this.$SelectorResolver_onChange);};
l.prototype.

setVariables=function(p){


var q=babelHelpers['extends']({},
this.$SelectorResolver_selector,
{variables:babelHelpers['extends']({},
this.$SelectorResolver_selector.variables,
p)});


this.setSelector(q);};
var m=function p(){this.

$SelectorResolver_onChange=function(q){
this.$SelectorResolver_data=q.data;
this.$SelectorResolver_callback();}.
bind(this);};












function n
(p,
q,
r){
this.

























































$SelectorListResolver_onChange=function(s){
this.$SelectorListResolver_stale=true;
this.$SelectorListResolver_callback();}.
bind(this);this.$SelectorListResolver_callback=r;this.$SelectorListResolver_data=[];this.$SelectorListResolver_environment=p;this.$SelectorListResolver_resolvers=[];this.$SelectorListResolver_stale=true;this.setSelectors(q);}n.prototype.dispose=function(){this.$SelectorListResolver_resolvers.forEach(o);};n.prototype.resolve=function(){if(this.$SelectorListResolver_stale){var p=this.$SelectorListResolver_data,q=void 0;for(var r=0;r<this.$SelectorListResolver_resolvers.length;r++){var s=p[r],t=this.$SelectorListResolver_resolvers[r].resolve();if(q||t!==s){q=q||p.slice(0,r);q.push(t);}}this.$SelectorListResolver_data=q||p;this.$SelectorListResolver_stale=false;}return this.$SelectorListResolver_data;};n.prototype.setSelectors=function(p){while(this.$SelectorListResolver_resolvers.length>p.length){var q=this.$SelectorListResolver_resolvers.pop();q.dispose();}for(var r=0;r<p.length;r++)if(r<this.$SelectorListResolver_resolvers.length){this.$SelectorListResolver_resolvers[r].setSelector(p[r]);}else this.$SelectorListResolver_resolvers[r]=new l(this.$SelectorListResolver_environment,p[r],this.$SelectorListResolver_onChange);this.$SelectorListResolver_stale=true;};n.prototype.setVariables=function(p){this.$SelectorListResolver_resolvers.forEach(function(q){return q.setVariables(p);});this.$SelectorListResolver_stale=true;};


function o(p){
p&&p.dispose();}


f.exports=k;}),null);

/** shared/relay/oss/react-relay/classic/store/RelayStoreConstants.js */























__d('RelayStoreConstants',[],(function a(b,c,d,e,f,g){

'use strict';






var h='client:root',




i='Query';

f.exports=
{ROOT_ID:h,
ROOT_TYPE:i};}),null);

/** shared/relay/oss/react-relay/classic/environment/RelayOperationSelector.js */























__d('RelayOperationSelector',['invariant','QueryBuilder','RelayStoreConstants','RelayVariables'],(function a(b,c,d,e,f,g,h){

'use strict';





var i=c('RelayStoreConstants').ROOT_ID,
j=c('RelayVariables').getOperationVariables;











function k
(l,
m){

var n=c('QueryBuilder').getFragment(l.node);

n||h(0,
'RelayOperationSelector: Expected a query, got %s `%s`.',
l.node.kind,
l.name);


var o=j(l,m),
p=
{dataID:i,
node:n,
variables:o};



return {fragment:p,
node:l,
root:p,
variables:o};}



f.exports=
{createOperationSelector:k};}),null);

/** shared/relay/oss/react-relay/classic/environment/RelayClassicCore.js */























__d('RelayClassicCore',['RelayFragmentSpecResolver','RelayGraphQLTag','RelayOperationSelector','RelaySelector'],(function a(b,c,d,e,f,g){

'use strict';




var h=c('RelayGraphQLTag').getClassicFragment,
i=c('RelayGraphQLTag').getClassicOperation,

j=c('RelayOperationSelector').createOperationSelector,

k=c('RelaySelector').areEqualSelectors,
l=c('RelaySelector').getDataIDsFromObject,
m=c('RelaySelector').getSelector,
n=c('RelaySelector').getSelectorList,
o=c('RelaySelector').getSelectorsFromObject,
p=c('RelaySelector').getVariablesFromObject;











function q
(r,
s,
t,
u){

return new (c('RelayFragmentSpecResolver'))(r,s,t,u);}






f.exports=
{areEqualSelectors:k,
createFragmentSpecResolver:q,
createOperationSelector:j,
getDataIDsFromObject:l,
getFragment:h,
getOperation:i,
getSelector:m,
getSelectorList:n,
getSelectorsFromObject:o,
getVariablesFromObject:p};}),null);

/** shared/relay/oss/react-relay/classic/legacy/mutation/GraphQLMutatorConstants.js */






















__d('GraphQLMutatorConstants',[],(function a(b,c,d,e,f,g){

'use strict';

var h=
{APPEND:'append',
IGNORE:'ignore',
PREPEND:'prepend',
REFETCH:'refetch',
REMOVE:'remove',

NODE_DELETE_HANDLER:'node_delete',
RANGE_ADD_HANDLER:'range_add',
RANGE_DELETE_HANDLER:'range_delete',

HANDLER_TYPES:{},

OPTIMISTIC_UPDATE:'optimistic',
SERVER_UPDATE:'server',
POLLER_UPDATE:'poller',

UPDATE_TYPES:{},

RANGE_OPERATIONS:{}};


h.HANDLER_TYPES[
h.NODE_DELETE_HANDLER]=true;
h.HANDLER_TYPES[
h.RANGE_ADD_HANDLER]=true;
h.HANDLER_TYPES[
h.RANGE_DELETE_HANDLER]=true;

h.UPDATE_TYPES[
h.OPTIMISTIC_UPDATE]=true;
h.UPDATE_TYPES[
h.SERVER_UPDATE]=true;
h.UPDATE_TYPES[
h.POLLER_UPDATE]=true;

h.RANGE_OPERATIONS[
h.APPEND]=true;
h.RANGE_OPERATIONS[
h.IGNORE]=true;
h.RANGE_OPERATIONS[
h.PREPEND]=true;
h.RANGE_OPERATIONS[
h.REFETCH]=true;
h.RANGE_OPERATIONS[
h.REMOVE]=true;

f.exports=h;}),null);

/** shared/relay/oss/react-relay/classic/store/RelayFetchMode.js */























__d('RelayFetchMode',[],(function a(b,c,d,e,f,g){

'use strict';



var h=Object.freeze
({CLIENT:'CLIENT',
PRELOAD:'PRELOAD',
REFETCH:'REFETCH'});


f.exports=h;}),null);

/** shared/relay/oss/react-relay/classic/store/RelayReadyState.js */























__d('RelayReadyState',['resolveImmediate','warning'],(function a(b,c,d,e,f,g){

'use strict';



























function h(i){
this.$RelayReadyState_onReadyStateChange=i;
this.$RelayReadyState_readyState=
{aborted:false,
done:false,
error:null,
events:[],
ready:false,
stale:false};

this.$RelayReadyState_scheduled=false;}
h.prototype.

update=
function(i,
j){

var k=this.$RelayReadyState_readyState;
if(k.aborted)
return;

if(k.done||k.error){
if(i.stale){
if(k.error)
this.$RelayReadyState_mergeState(i,j);}else


if(!i.aborted)
c('warning')
(false,
'RelayReadyState: Invalid state change from `%s` to `%s`.',
JSON.stringify(k),
JSON.stringify(i));


return;}

this.$RelayReadyState_mergeState(i,j);};
h.prototype.

$RelayReadyState_mergeState=
function(i,
j){

this.$RelayReadyState_readyState=babelHelpers['extends']({},
this.$RelayReadyState_readyState,
i,
{events:j&&j.length?[].concat
(this.$RelayReadyState_readyState.events,j):
this.$RelayReadyState_readyState.events});

if(this.$RelayReadyState_scheduled)
return;

this.$RelayReadyState_scheduled=true;
c('resolveImmediate')(function(){
this.$RelayReadyState_scheduled=false;
this.$RelayReadyState_onReadyStateChange(this.$RelayReadyState_readyState);}.
bind(this));};



f.exports=h;}),null);

/** shared/relay/oss/react-relay/classic/store/RelayClassicRecordState.js */























__d('RelayClassicRecordState',[],(function a(b,c,d,e,f,g){

'use strict';



var h=




{EXISTENT:'EXISTENT',





NONEXISTENT:'NONEXISTENT',





UNKNOWN:'UNKNOWN'};


f.exports=h;}),null);

/** shared/relay/oss/react-relay/classic/query/RelayQueryVisitor.js */























__d('RelayQueryVisitor',['RelayQuery'],(function a(b,c,d,e,f,g){

'use strict';h.prototype.



































visit=
function(i,
j){

if(i instanceof c('RelayQuery').Field){
return this.visitField(i,j);}else
if(i instanceof c('RelayQuery').Fragment){
return this.visitFragment(i,j);}else
if(i instanceof c('RelayQuery').Root)
return this.visitRoot(i,j);};

h.prototype.

traverse=
function(i,
j){

if(i.canHaveSubselections())
this.traverseChildren(i,j,function(k){
this.visit(k,j);},
this);

return i;};
h.prototype.

traverseChildren=
function(i,
j,
k,




l){

var m=i.getChildren();
for(var n=0;n<m.length;n++)
k.call(l,m[n],n,m);};

h.prototype.

visitField=
function(i,
j){

return this.traverse(i,j);};
h.prototype.

visitFragment=
function(i,
j){

return this.traverse(i,j);};
h.prototype.

visitRoot=
function(i,
j){

return this.traverse(i,j);};
function h(){}


f.exports=h;}),null);

/** shared/relay/oss/react-relay/classic/tools/isCompatibleRelayFragmentType.js */























__d('isCompatibleRelayFragmentType',[],(function a(b,c,d,e,f,g){

'use strict';














function h
(i,
j){


return (j===i.getType()||
!j||
i.isAbstract());}



f.exports=h;}),null);

/** shared/relay/oss/react-relay/classic/traversal/checkRelayQueryData.js */























__d('checkRelayQueryData',['RelayClassicRecordState','RelayConnectionInterface','RelayProfiler','RelayQueryVisitor','forEachRootCallArg','isCompatibleRelayFragmentType'],(function a(b,c,d,e,f,g){

'use strict';var h,i,




















j=c('RelayConnectionInterface').EDGES,k=c('RelayConnectionInterface').PAGE_INFO;







function l
(n,
o){


var p=new m(n),

q=
{dataID:undefined,
rangeInfo:undefined,
result:true};


p.visit(o,q);
return q.result;}
h=babelHelpers.inherits

(m,c('RelayQueryVisitor'));i=h&&h.prototype;


function m(n){
i.constructor.call(this);
this.$RelayQueryChecker_store=n;}
m.prototype.




traverse=
function(n,
o){

var p=n.getChildren();
for(var q=0;q<p.length;q++){
if(!o.result)
return;

this.visit(p[q],o);}};

m.prototype.

visitRoot=
function(n,
o){

var p=n.getStorageKey();
c('forEachRootCallArg')(n,function(q){var r=q.identifyingArgKey,
s=this.$RelayQueryChecker_store.getDataID(p,r);
if(s==null){
o.result=false;}else{

var t=
{dataID:s,
rangeInfo:undefined,
result:true};

this.traverse(n,t);
o.result=o.result&&t.result;}}.

bind(this));};
m.prototype.

visitFragment=
function(n,
o){

var p=o.dataID;

if(p&&c('isCompatibleRelayFragmentType')
(n,
this.$RelayQueryChecker_store.getType(p)))

this.traverse(n,o);};

m.prototype.

visitField=
function(n,
o){

var p=o.dataID,
q=p&&this.$RelayQueryChecker_store.getRecordState(p);
if(q===c('RelayClassicRecordState').UNKNOWN){
o.result=false;
return;}else
if(q===c('RelayClassicRecordState').NONEXISTENT)
return;

var r=o.rangeInfo;
if(r&&n.getSchemaName()===j){
this.$RelayQueryChecker_checkEdges(n,o);}else
if(r&&n.getSchemaName()===k){
this.$RelayQueryChecker_checkPageInfo(n,o);}else
if(!n.canHaveSubselections()){
this.$RelayQueryChecker_checkScalar(n,o);}else
if(n.isPlural()){
this.$RelayQueryChecker_checkPlural(n,o);}else
if(n.isConnection()){
this.$RelayQueryChecker_checkConnection(n,o);}else 

this.$RelayQueryChecker_checkLinkedField(n,o);};

m.prototype.

$RelayQueryChecker_checkScalar=function(n,o){
var p=o.dataID&&
this.$RelayQueryChecker_store.getField(o.dataID,n.getStorageKey());
if(p===undefined)
o.result=false;};

m.prototype.

$RelayQueryChecker_checkPlural=function(n,o){
var p=o.dataID&&
this.$RelayQueryChecker_store.getLinkedRecordIDs(o.dataID,n.getStorageKey());
if(p===undefined){
o.result=false;
return;}

if(p)
for(var q=0;q<p.length;q++){
if(!o.result)
break;

var r=
{dataID:p[q],
rangeInfo:undefined,
result:true};

this.traverse(n,r);
o.result=r.result;}};


m.prototype.

$RelayQueryChecker_checkConnection=function(n,o){
var p=n.getCallsWithValues(),
q=o.dataID&&
this.$RelayQueryChecker_store.getLinkedRecordID(o.dataID,n.getStorageKey());
if(q===undefined){
o.result=false;
return;}

var r=
{dataID:q,
rangeInfo:null,
result:true},

s=this.$RelayQueryChecker_store.getRangeMetadata(q,p);
if(s)
r.rangeInfo=s;

this.traverse(n,r);
o.result=o.result&&r.result;};
m.prototype.

$RelayQueryChecker_checkEdges=function(n,o){
var p=o.rangeInfo;
if(!p){
o.result=false;
return;}

if(p.diffCalls.length){
o.result=false;
return;}

var q=p.filteredEdges;
for(var r=0;r<q.length;r++){
if(!o.result)
break;

var s=
{dataID:q[r].edgeID,
rangeInfo:undefined,
result:true};

this.traverse(n,s);
o.result=s.result;}};

m.prototype.

$RelayQueryChecker_checkPageInfo=function(n,o){
var p=o.rangeInfo;
if(!p||!p.pageInfo){
o.result=false;
return;}};

m.prototype.

$RelayQueryChecker_checkLinkedField=function(n,o){
var p=o.dataID&&
this.$RelayQueryChecker_store.getLinkedRecordID(o.dataID,n.getStorageKey());
if(p===undefined){
o.result=false;
return;}

if(p){
var q=
{dataID:p,
rangeInfo:undefined,
result:true};

this.traverse(n,q);
o.result=o.result&&q.result;}};




f.exports=c('RelayProfiler').instrument
('checkRelayQueryData',
l);}),null);

/** shared/relay/oss/react-relay/classic/query/RelayQueryPath.js */























__d('RelayQueryPath',['invariant','RelayClassicRecordState','RelayNodeInterface','RelayQuery','RelayRecord','forEachRootCallArg','warning','RelayConnectionInterface'],(function a(b,c,d,e,f,g,h){

'use strict';










var i=c('RelayConnectionInterface').EDGES,




j=c('RelayNodeInterface').ID,k=c('RelayNodeInterface').ID_TYPE,l=c('RelayNodeInterface').NODE,m=c('RelayNodeInterface').NODE_TYPE,n=c('RelayNodeInterface').TYPENAME,

o=c('RelayQuery').Field.build
({fieldName:j,
type:'String'}),

p=c('RelayQuery').Field.build
({fieldName:n,
type:'String'}),






















q=
{type:'rootRecord'},











r=
{getRootRecordPath:function u(){
return q;},


createForID:function u(v,w,x){

!c('RelayRecord').isClientID(v)||h(0,
'RelayQueryPath.createForID: Expected dataID to be a server id, got '+
'`%s`.',
v);


return {dataID:v,
name:w,
routeName:x||'$RelayQuery',
type:'node'};},



create:function u(v){
if(v.getFieldName()===l){
var w=v.getIdentifyingArg();
if(w&&typeof w.value==='string')

return {dataID:w.value,
name:v.getName(),
routeName:v.getRoute().name,
type:'node'};}




return {root:v,
type:'root'};},



getPath:function u
(v,
w,
x){

if(x==null||c('RelayRecord').isClientID(x)){

return {node:w,
parent:v,
type:'client'};}else

if(v.type==='node'&&v.dataID===x){
return v;}else 


return {dataID:x,
name:r.getName(v),
routeName:r.getRouteName(v),
type:'node'};},




isRootPath:function u(v){
return v.type==='node'||v.type==='root';},


getParent:function u(v){

v.type==='client'||h(0,
'RelayQueryPath: Cannot get the parent of a root path.');

return v.parent;},


getName:function u(v){
while(v.type==='client')
v=v.parent;

if(v===q){
return 'RootRecordPath';}else
if(v.type==='root'){
return v.root.getName();}else
if(v.type==='node'){
return v.name;}else 


h(0,
'RelayQueryPath.getName(): Invalid path `%s`.',
v);},




getRouteName:function u(v){
while(v.type==='client')
v=v.parent;

if(v===q){
return '$RelayQueryPath';}else
if(v.type==='root'){
return v.root.getRoute().name;}else
if(v.type==='node'){
return v.routeName;}else 


h(0,
'RelayQueryPath.getRouteName(): Invalid path `%s`.',
v);},




getQuery:function u
(v,
w,
x){

var y=x,
z=void 0;
while(w.type==='client'){
var aa=w.node;
if(aa instanceof c('RelayQuery').Field){
var ba=aa.getSchemaName();
c('warning')
(!z||z!==i||!aa.isConnection(),
'RelayQueryPath.getQuery(): Cannot generate accurate query for '+
'path with connection `%s`. Consider adding an `id` field to each '+
'`node` to make them refetchable.',
ba);

z=ba;}

var ca=aa instanceof c('RelayQuery').Field?
aa.getInferredPrimaryKey():
j;
if(ca){
y=aa.clone
([y,
aa.getFieldByStorageKey(ca),
aa.getFieldByStorageKey(n)]);}else 


y=aa.clone([y]);

w=w.parent;}


w.type!=='rootRecord'||h(0,
'RelayQueryPath: Attempted to construct a classic query, but the '+
'record was initially fetched with new Relay APIs. Ensure that '+
'deprecated components such as RelayContainer are not nested in '+
'new APIs such as QueryRenderer or FragmentContainer.');

var da=w.type==='root'?
w.root:
s(w),
ea=
[y,
da.getFieldByStorageKey(j),
da.getFieldByStorageKey(n)],

fa=t(v,da,ea),
ga=da.cloneWithRoute(fa,x.getRoute());


ga instanceof c('RelayQuery').Root||h(0,
'RelayQueryPath: Expected the root of path `%s` to be a query.',
r.getName(w));

return ga;}};



function s
(u){

return c('RelayQuery').Root.build
(u.name,
l,
u.dataID,
[o,p],

{identifyingArgName:j,
identifyingArgType:k,
isAbstract:true,
isDeferred:false,
isPlural:false},

m,
u.routeName);}



function t
(u,
v,
w){

var x=[];


w.forEach(function(da){
if(da)
x.push(da);});


if(!v.isAbstract())

return x;

var y=[];
c('forEachRootCallArg')(v,function(da){var ea=da.identifyingArgKey;
y.push(ea);});

var z=y[0],
aa=u.getDataID
(v.getStorageKey(),
z),

ba=aa&&u.getType(aa);

if(ba!=null){
return [c('RelayQuery').Fragment.build
(v.getName(),
ba,
x)];}else{


var ca=aa!=null?
u.getRecordState(aa):
c('RelayClassicRecordState').UNKNOWN;
c('warning')
(false,
'RelayQueryPath: No typename found for %s record `%s`. Generating a '+
'possibly invalid query.',
ca.toLowerCase(),
aa);

return x;}}



f.exports=r;}),null);

/** shared/relay/oss/react-relay/classic/traversal/diffRelayQuery.js */























__d('diffRelayQuery',['invariant','RelayConnectionInterface','RelayNodeInterface','RelayProfiler','RelayQuery','RelayQueryPath','RelayRecord','forEachRootCallArg','isCompatibleRelayFragmentType','warning'],(function a(b,c,d,e,f,g,h){

'use strict';


















var i=c('RelayNodeInterface').ID,j=c('RelayNodeInterface').ID_TYPE,k=c('RelayNodeInterface').NODE_TYPE,l=c('RelayNodeInterface').TYPENAME,
m=c('RelayConnectionInterface').EDGES,n=c('RelayConnectionInterface').NODE,o=c('RelayConnectionInterface').PAGE_INFO,
p=c('RelayQuery').Field.build
({fieldName:i,
metadata:
{isRequisite:true},

type:'String'}),

q=c('RelayQuery').Field.build
({fieldName:l,
metadata:
{isRequisite:true},

type:'String'}),

r=c('RelayQuery').Field.build
({fieldName:c('RelayNodeInterface').NODE,
children:[p,q],
metadata:
{canHaveSubselections:true},

type:k});






















function s
(x,
y,
z){

var aa=c('RelayQueryPath').create(x),
ba=[],

ca=new t
(y,
z),

da=x.getIdentifyingArg(),
ea=
da&&da.value||null,
fa=
Array.isArray(ea)&&
ea.length>1,

ga=void 0;
if(da!=null)
ga=
{identifyingArgName:da.name,
identifyingArgType:da.type!=null?
da.type:
j,
isAbstract:x.isAbstract(),
isDeferred:false,
isPlural:false};


var ha=x.getFieldName(),
ia=x.getStorageKey();
c('forEachRootCallArg')(x,function(ja){var ka=ja.identifyingArgValue,la=ja.identifyingArgKey,
ma=void 0;
if(fa){

ka!=null||h(0,
'diffRelayQuery(): Unexpected null or undefined value in root call '+
'argument array for query, `%s(...).',
ha);

ma=c('RelayQuery').Root.build
(x.getName(),
ha,
[ka],
x.getChildren(),
ga,
x.getType());}else 



ma=x;



var na=y.getDataID(ia,la);
if(na==null){
ba.push(ma);
return;}



var oa=u(na),
pa=ca.visit(ma,aa,oa),
qa=pa?pa.diffNode:null;
if(qa){

qa instanceof c('RelayQuery').Root||h(0,
'diffRelayQuery(): Expected result to be a root query.');

ba.push(qa);}});


return ba.concat(ca.getSplitQueries());}


























function t
(x,
y){

this.$RelayDiffQueryBuilder_store=x;
this.$RelayDiffQueryBuilder_splitQueries=[];
this.$RelayDiffQueryBuilder_queryTracker=y;}
t.prototype.

splitQuery=
function(x){

this.$RelayDiffQueryBuilder_splitQueries.push(x);};
t.prototype.

getSplitQueries=function(){
return this.$RelayDiffQueryBuilder_splitQueries;};
t.prototype.

visit=
function(x,
y,
z){

if(x instanceof c('RelayQuery').Field){
return this.visitField(x,y,z);}else
if(x instanceof c('RelayQuery').Fragment){
return this.visitFragment(x,y,z);}else
if(x instanceof c('RelayQuery').Root)
return this.visitRoot(x,y,z);};

t.prototype.

visitRoot=
function(x,
y,
z){

return this.traverse(x,y,z);};
t.prototype.

visitFragment=
function(x,
y,
z){

return this.traverse(x,y,z);};
t.prototype.





visitField=
function(x,
y,z){

var aa=z.connectionField,ba=z.dataID,ca=z.edgeID,da=z.rangeInfo;

if(aa&&da)
if(ca){

if(x.getSchemaName()===m){
return this.diffConnectionEdge
(aa,
x,
c('RelayQueryPath').getPath(y,x,ca),
ca,
da);}else 


return null;}else 






if(x.getSchemaName()===m||
x.getSchemaName()===o)

return da.diffCalls.length>0?

{diffNode:x,
trackedNode:null}:

null;





if(!x.canHaveSubselections()){
return this.diffScalar(x,ba);}else
if(x.isGenerated()){

return {diffNode:x,
trackedNode:null};}else

if(x.isConnection()){
return this.diffConnection(x,y,ba);}else
if(x.isPlural()){
return this.diffPluralLink(x,y,ba);}else 

return this.diffLink(x,y,ba);};

t.prototype.




traverse=
function(x,
y,
z){

var aa=void 0,
ba=void 0,
ca=void 0,
da=void 0,
ea=false,
fa=false;

x.getChildren().forEach(function(ga){
if(ga instanceof c('RelayQuery').Field){
var ha=this.visitField(ga,y,z),
ia=ha?ha.diffNode:null,
ja=ha&&this.$RelayDiffQueryBuilder_queryTracker?
ha.trackedNode:
null;


if(ia){
ba=ba||[];
ba.push(ia);
ea=ea||!ia.isGenerated();}else
if(ga.isRequisite()&&!z.rangeInfo){









ba=ba||[];
ba.push(ga);}

if(this.$RelayDiffQueryBuilder_queryTracker)

if(ja){
da=da||[];
da.push(ja);
fa=fa||!ja.isGenerated();}else
if(ga.isRequisite()){
da=da||[];
da.push(ga);}}else


if(ga instanceof c('RelayQuery').Fragment){
var ka=c('isCompatibleRelayFragmentType')
(ga,
this.$RelayDiffQueryBuilder_store.getType(z.dataID));

if(ka){
if(ga.isTrackingEnabled()){
var la=ga.getCompositeHash();
if(this.$RelayDiffQueryBuilder_store.hasFragmentData(z.dataID,la))

return {diffNode:null,
trackedNode:null};}




var ma=this.traverse(ga,y,z),
na=ma?ma.diffNode:null,
oa=ma?ma.trackedNode:null;

if(na){
ba=ba||[];
ba.push(na);
ea=true;}

if(oa){
da=da||[];
da.push(oa);
fa=true;}}else{





ba=ba||[];
ba.push(ga);}}}.


bind(this));


if(ba&&ea)
aa=x.clone(ba);

if(da&&fa)
ca=x.clone(da);





if(this.$RelayDiffQueryBuilder_queryTracker&&
ca&&
!(ca instanceof c('RelayQuery').Fragment))

this.$RelayDiffQueryBuilder_queryTracker.trackNodeForID(ca,z.dataID);



return {diffNode:aa,
trackedNode:ca};};

t.prototype.




diffScalar=
function(x,
y){

if(this.$RelayDiffQueryBuilder_store.getField(y,x.getStorageKey())===undefined)

return {diffNode:x,
trackedNode:null};


return null;};
t.prototype.





diffLink=
function(x,
y,
z){

var aa=
this.$RelayDiffQueryBuilder_store.getLinkedRecordID(z,x.getStorageKey());
if(aa===undefined)

return {diffNode:x,
trackedNode:null};


if(aa===null)

return {diffNode:null,
trackedNode:this.$RelayDiffQueryBuilder_queryTracker?x:null};



return this.traverse
(x,
c('RelayQueryPath').getPath(y,x,aa),
u(aa));};

t.prototype.





diffPluralLink=
function(x,
y,
z){
var aa,ba=this,ca,
da=
this.$RelayDiffQueryBuilder_store.getLinkedRecordIDs(z,x.getStorageKey());
if(da===undefined){


return {diffNode:x,
trackedNode:null};}else

if(da===null||da.length===0){


return {diffNode:null,
trackedNode:this.$RelayDiffQueryBuilder_queryTracker?x:null};}else

if(x.getInferredRootCallName()===n){var aa=function(){




var ea=false;
da.forEach(function(fa){
var ga=this.traverse
(x,
c('RelayQueryPath').getPath(y,x,fa),
u(fa));

if(ga){

ea=
ea||!!ga.trackedNode||!!ga.diffNode;

if(ga.diffNode)
this.splitQuery(w
(fa,
ga.diffNode.getChildren(),
c('RelayQueryPath').getName(y),
x.getType(),
x.isAbstract()));}}.



bind(ba));


if(ea)
return {v:
{diffNode:null,
trackedNode:ba.$RelayDiffQueryBuilder_queryTracker?x:null}};}

();if(typeof aa==="object")return aa.v;}else{
var ca=function(){




var ea=false,
fa=false;

da.some(function(ga){
var ha=this.traverse
(x,
c('RelayQueryPath').getPath(y,x,ga),
u(ga));

if(ha&&ha.diffNode)
ea=true;

if(ha&&ha.trackedNode)
fa=true;


return ea&&fa;}.
bind(ba));

if(ea||fa)
return {v:
{diffNode:ea?x:null,
trackedNode:fa?x:null}};}

();if(typeof ca==="object")return ca.v;}

return null;};
t.prototype.







diffConnection=
function(x,
y,
z){

var aa=this.$RelayDiffQueryBuilder_store,
ba=aa.getLinkedRecordID(z,x.getStorageKey()),
ca=aa.getRangeMetadata
(ba,
x.getCallsWithValues());


if(ba===undefined)

return {diffNode:x,
trackedNode:null};




if(ba===null)
return this.$RelayDiffQueryBuilder_queryTracker?
{diffNode:null,
trackedNode:x}:
null;




if(ca==null)
return this.traverse
(x,
c('RelayQueryPath').getPath(y,x,ba),
u(ba));


var da=ca.diffCalls,ea=ca.filteredEdges,


fa=false;
ea.forEach(function(ka){
var la=
{connectionField:x,
dataID:ba,
edgeID:ka.edgeID,
rangeInfo:ca},

ma=this.traverse
(x,
c('RelayQueryPath').getPath(y,x,ka.edgeID),
la);



if(ma)
fa=fa||!!ma.trackedNode;}.

bind(this));


var ga=
{connectionField:x,
dataID:ba,
edgeID:null,
rangeInfo:ca},


ha=this.traverse
(x,
c('RelayQueryPath').getPath(y,x,ba),
ga),

ia=ha?ha.diffNode:null,
ja=ha?ha.trackedNode:null;
if(da.length&&ia instanceof c('RelayQuery').Field)
ia=ia.cloneFieldWithCalls
(ia.getChildren(),
da);













if(fa)
ja=x;



return {diffNode:ia,
trackedNode:this.$RelayDiffQueryBuilder_queryTracker?ja:null};};

t.prototype.







diffConnectionEdge=
function(x,
y,
z,
aa,
ba){


var ca=false,
da=this.traverse
(y,
c('RelayQueryPath').getPath(z,y,aa),
u(aa)),

ea=da?da.diffNode:null,
fa=da?da.trackedNode:null,
ga=this.$RelayDiffQueryBuilder_store.getLinkedRecordID(aa,n);

if(ea)
if(!ga||c('RelayRecord').isClientID(ga)){
c('warning')
(x.isConnectionWithoutNodeID(),
'RelayDiffQueryBuilder: Field `node` on connection `%s` cannot be '+
'retrieved if it does not have an `id` field. If you expect fields '+
'to be retrieved on this field, add an `id` field in the schema. '+
'If you choose to ignore this warning, you can silence it by '+
'adding `@relay(isConnectionWithoutNodeID: true)` to the '+
'connection field.',
x.getStorageKey());}else{

var ha=



v(ea),ia=ha.edges,ja=ha.node;


if(ja){
ca=true;
var ka=y.getFieldByStorageKey('node');

ka||h(0,
'RelayDiffQueryBuilder: Expected connection `%s` to have a '+
'`node` field.',
x.getSchemaName());

this.splitQuery(w
(ga,
ja.getChildren(),
c('RelayQueryPath').getName(z),
ka.getType(),
ka.isAbstract()));}





if(ia)
if(x.isFindable()){
ia=ia.
clone(ia.getChildren().concat(r));
var la=x.cloneFieldWithCalls
([ia],
ba.filterCalls.concat({name:'find',value:ga}));

if(la){
ca=true;

var ma=c('RelayQueryPath').getParent
(c('RelayQueryPath').getParent(z)),

na=c('RelayQueryPath').getQuery
(this.$RelayDiffQueryBuilder_store,
ma,
la);

this.splitQuery(na);}}else 


c('warning')
(false,
'RelayDiffQueryBuilder: connection `edges{*}` fields can only '+
'be refetched if the connection supports the `find` call. '+
'Cannot refetch data for field `%s`.',
x.getStorageKey());}












return this.$RelayDiffQueryBuilder_queryTracker?
{diffNode:null,
trackedNode:ca?y:fa}:
null;};






function u(x){

return {connectionField:null,
dataID:x,
edgeID:null,
rangeInfo:null};}













































function v
(x){




var y=x.getChildren(),
z=[],
aa=null,
ba=[],
ca=false;
for(var da=0;da<y.length;da++){
var ea=y[da];
if(ea instanceof c('RelayQuery').Field){
if(ea.getSchemaName()===n){
var fa=ea.getChildren();
ba=ba.concat(fa);

if(!aa)
if(fa.length===1){
var ga=fa[0];

if(!(ga instanceof c('RelayQuery').Field)||
ga.getSchemaName()!==i)

aa=ea;}else 


aa=ea;}else{



z.push(ea);
ca=ca||!ea.isRequisite();}}else

if(ea instanceof c('RelayQuery').Fragment){var ha=
v(ea),ia=ha.edges,ja=ha.node;
if(ia){
z.push(ia);
ca=true;}

if(ja){
ba.push(ja);
aa=ja;}}}





return {edges:ca?x.clone(z):null,
node:aa&&c('RelayQuery').Fragment.build
('diffRelayQuery',
aa.getType(),
ba,

{isAbstract:aa.isAbstract()})};}





function w
(x,
y,
z,
aa,
ba){

var ca=[p,q],
da=[];
y.forEach(function(ea){
if(ea instanceof c('RelayQuery').Field){
da.push(ea);}else 

ca.push(ea);});


ca.push(c('RelayQuery').Fragment.build
('diffRelayQuery',
aa,
da,
{isAbstract:ba}));


return c('RelayQuery').Root.build
(z,
n,
x,
ca,

{identifyingArgName:i,
identifyingArgType:j,
isAbstract:true,
isDeferred:false,
isPlural:false},

k);}



f.exports=c('RelayProfiler').instrument('diffRelayQuery',s);}),null);

/** shared/relay/oss/react-relay/classic/traversal/flattenSplitRelayQueries.js */























__d('flattenSplitRelayQueries',[],(function a(b,c,d,e,f,g){

'use strict';












function h
(i){

var j=[],
k=[i];
while(k.length){
i=k.shift();var l=
i,m=l.required,n=l.deferred;
if(m)
j.push(m);

if(n.length)
k.push.apply(k,n);}


return j;}


f.exports=h;}),null);

/** shared/relay/oss/react-relay/classic/legacy/store/generateForceIndex.js */























__d('generateForceIndex',[],(function a(b,c,d,e,f,g){

'use strict';

var h=1;







function i(){
return h++;}


f.exports=i;}),null);

/** shared/relay/oss/react-relay/classic/query/RelayQueryTransform.js */























__d('RelayQueryTransform',['RelayQueryVisitor'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits






































(j,c('RelayQueryVisitor'));i=h&&h.prototype;j.prototype.
traverse=
function(k,
l){

if(!k.canHaveSubselections())
return k;

var m=void 0;
this.traverseChildren(k,l,function(n,o,p){
var q=p[o],
r=this.visit(q,l);
if(r!==q)
m=m||p.slice(0,o);

if(m&&r)
m.push(r);},

this);
if(m){
if(!m.length)
return null;

return k.clone(m);}

return k;};
function j(){h.apply(this,arguments);}


f.exports=j;}),null);

/** shared/relay/oss/react-relay/classic/query/RelayRefQueryDescriptor.js */























__d('RelayRefQueryDescriptor',[],(function a(b,c,d,e,f,g){

'use strict';



















function h(i,j){
this.node=i;
this.nodePath=j;}



f.exports=h;}),null);

/** shared/relay/oss/react-relay/classic/traversal/splitDeferredRelayQueries.js */























__d('splitDeferredRelayQueries',['invariant','QueryBuilder','RelayNodeInterface','RelayProfiler','RelayQuery','RelayQueryTransform','RelayRefQueryDescriptor'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;

























function k(r){
var s=new q(),
t=
{__nodePath__:[],
__parent__:null,
__refQuery__:null,
deferred:[],
required:null};

s.visit(r,t);

return o(t);}






function l
(r,
s){


var t=s.getChildren().filter(function(u){
return (u!==r&&
u instanceof c('RelayQuery').Field&&
u.isRequisite());});



return t.map(function(u){
var v=u.getChildren().filter(function(x){
return (x instanceof c('RelayQuery').Field&&
x.isRequisite());}),

w=u.clone(v);

w||h(0,
'splitDeferredRelayQueries(): Unexpected non-scalar, requisite field.');

return w;});}














function m
(r,
s){

for(var t=s.length-1;t>=0;t--){
var u=s[t];

if(u instanceof c('RelayQuery').Field&&
u.getInferredRootCallName())


return new (c('RelayRefQueryDescriptor'))(r,s.slice(0,t+1));


var v=l(r,u),
w=[r].concat(v);



r=u.clone(w);}


r instanceof c('RelayQuery').Root||h(0,
'splitDeferredRelayQueries(): Cannot build query without a root node.');

var x=r.getIdentifyingArg(),
y=x&&x.name||null,
z=x&&x.value||null,
aa=
{identifyingArgName:y,
identifyingArgType:c('RelayNodeInterface').ID_TYPE,
isAbstract:true,
isDeferred:true,
isPlural:false};

return c('RelayQuery').Root.build
(r.getName(),
r.getFieldName(),
z,
r.getChildren(),
aa,
r.getType());}







function n(r){
if(!r.canHaveSubselections()){
return r.isGenerated()&&!r.isRefQueryDependency();}else 

return r.getChildren().every(n);}







function o(r){
if(r.required&&n(r.required))
r.required=null;

r.deferred=r.deferred.map(function(s){
var t=s.__refQuery__;
if(t){


var u=r.required;
if(!u){

var v=r;
while(v.__parent__){
u=v.__parent__.required;
if(u)
break;

v=v.__parent__;}}



u||h(0,
'splitDeferredRelayQueries(): Expected a context root query.');

s.required=p(t,u);}


return o(s);});

return r;}





function p
(r,
s){

var t=r.node;

t instanceof c('RelayQuery').Field||
t instanceof c('RelayQuery').Fragment||h(0,
'splitDeferredRelayQueries(): Ref query requires a field or fragment.');



var u=['$','*'],
v=void 0;
for(var w=0;w<r.nodePath.length;w++){
v=r.nodePath[w];
if(v instanceof c('RelayQuery').Field){
u.push(v.getSerializationKey());
if(v.isPlural())
u.push('*');}}




u.length>2||h(0,
'splitDeferredRelayQueries(): Ref query requires a complete path.');

var x=v,
y=x.getInferredPrimaryKey();

y||h(0,
'splitDeferredRelayQueries(): Ref query requires a primary key.');

u.push(y);


var z=c('RelayQuery').Root.build
(s.getName(),
c('RelayNodeInterface').NODES,
c('QueryBuilder').createBatchCallVariable(s.getID(),u.join('.')),
[t],

{identifyingArgName:c('RelayNodeInterface').ID,
identifyingArgType:c('RelayNodeInterface').ID_TYPE,
isAbstract:true,
isDeferred:true,
isPlural:false},

c('RelayNodeInterface').NODE_TYPE),


aa=z;
return aa;}
i=babelHelpers.inherits






(q,c('RelayQueryTransform'));j=i&&i.prototype;q.prototype.
visitField=
function(r,
s){
var t;
if(!r.hasDeferredDescendant())
return r;


s.__nodePath__.push(r);
var u=this.traverse(r,s);
s.__nodePath__.pop();

if(u&&r.getInferredRootCallName())(function(){

var v=r.getInferredPrimaryKey(),
w=u.getChildren().map(function(x){

if(x instanceof c('RelayQuery').Field&&
x.getSchemaName()===v){

return x.cloneAsRefQueryDependency();}else 

return x;});


u=u.clone(w);})();


return u;};
q.prototype.

visitFragment=
function(r,
s){

if(!r.getChildren().length)
return null;


if(r.isDeferred()){
var t=s.__nodePath__,
u=
{__nodePath__:t,
__parent__:s,
__refQuery__:null,
deferred:[],
required:null},

v=this.traverse(r,u);
if(v){
var w=m(v,t);
if(w instanceof c('RelayQuery').Root){
u.required=w;}else
if(w instanceof c('RelayRefQueryDescriptor'))
u.__refQuery__=w;}


if(v||u.deferred.length)
s.deferred.push(u);

return null;}else
if(r.hasDeferredDescendant()){
return this.traverse(r,s);}else 

return r;};

q.prototype.

visitRoot=
function(r,
s){

if(!r.hasDeferredDescendant()){
s.required=r;
return r;}else{

s.__nodePath__.push(r);
var t=this.traverse(r,s);
s.__nodePath__.pop();
s.required=t;
return t;}};

function q(){i.apply(this,arguments);}


f.exports=c('RelayProfiler').instrument
('splitDeferredRelayQueries',
k);}),null);

/** shared/relay/oss/react-relay/classic/legacy/store/GraphQLQueryRunner.js */























__d('GraphQLQueryRunner',['RelayFetchMode','RelayProfiler','RelayReadyState','checkRelayQueryData','diffRelayQuery','everyObject','flattenSplitRelayQueries','forEachObject','generateForceIndex','mapObject','resolveImmediate','someObject','splitDeferredRelayQueries','warning'],(function a(b,c,d,e,f,g){

'use strict';









































function h(l){
this.$GraphQLQueryRunner_storeData=l;}
h.prototype.





run=
function(l,
m){

var n=arguments.length<=2||arguments[2]===undefined?c('RelayFetchMode').CLIENT:arguments[2];
return k(this.$GraphQLQueryRunner_storeData,l,m,n);};
h.prototype.








forceFetch=
function(l,
m){

var n=c('RelayFetchMode').REFETCH;
return k(this.$GraphQLQueryRunner_storeData,l,m,n);};



function i(l){
return !!Object.keys(l).length;}


function j
(l,
m){

if(!l.getNetworkLayer().supports('defer'))











return m;


var n=[];
m.forEach(function(o){
return n.push.apply(n,
c('flattenSplitRelayQueries')
(c('splitDeferredRelayQueries')(o)));});



return n;}


function k
(l,
m,
n,
o){

var p=o===c('RelayFetchMode').REFETCH?
c('RelayProfiler').profile('GraphQLQueryRunner.forceFetch'):
c('RelayProfiler').profile('GraphQLQueryRunner.primeCache'),

q=new (c('RelayReadyState'))(n),

r={},
s={};

function t(w){
var x=w.getQuery(),
y=x.getID();
delete r[y];
if(!x.isDeferred())
delete s[y];


if(i(s))
return;


if(c('someObject')(r,function(z){return z.isResolvable();}))


return;


if(i(r)){
q.update
({done:false,
ready:true,
stale:false},
[{type:'NETWORK_QUERY_RECEIVED_REQUIRED'}]);}else 

q.update
({done:true,
ready:true,
stale:false},
[{type:'NETWORK_QUERY_RECEIVED_ALL'}]);}



function u(w,x){
q.update({error:x},[{type:'NETWORK_QUERY_ERROR',error:x}]);}


function v(w){
return c('checkRelayQueryData')
(l.getQueuedStore(),
w.getQuery());}



l.getTaskQueue().enqueue(function(){
var w=o===c('RelayFetchMode').REFETCH?
c('generateForceIndex')():
null,

x=[];
if(o===c('RelayFetchMode').CLIENT){
c('forEachObject')(m,function(aa){
if(aa)
x.push.apply(x,c('diffRelayQuery')
(aa,
l.getRecordStore(),
l.getQueryTracker()));});}else 




c('forEachObject')(m,function(aa){
if(aa)
x.push(aa);});




var y=j(l,x),

z=[];
if(y.length)
z.push({type:'NETWORK_QUERY_START'});


y.forEach(function(aa){
var ba=l.getPendingQueryTracker().add
({query:aa,fetchMode:o,forceIndex:w,storeData:l}),

ca=aa.getID();
r[ca]=ba;
if(!aa.isDeferred())
s[ca]=ba;

ba.getResolvedPromise().then
(t.bind(null,ba),
u.bind(null,ba));});



if(!i(r)){
q.update
({done:true,
ready:true},[].concat
(z,[{type:'STORE_FOUND_ALL'}]));}else 

if(!i(s)){
q.update
({ready:true},[].concat
(z,[{type:'STORE_FOUND_REQUIRED'}]));}else{


q.update
({ready:false},[].concat
(z,[{type:'CACHE_RESTORE_START'}]));


c('resolveImmediate')(function(){
if(l.hasCacheManager()){
var aa=c('mapObject')
(s,
function(ba){return ba.getQuery();});

l.restoreQueriesFromCache(aa,
{onSuccess:function ba(){
q.update
({ready:true,
stale:true},
[{type:'CACHE_RESTORED_REQUIRED'}]);},

onFailure:function ba(ca){
q.update
({error:ca},
[{type:'CACHE_RESTORE_FAILED',error:ca}]);}});}else 




if(c('everyObject')(s,v)&&
i(s)){

q.update
({ready:true,
stale:true},
[{type:'CACHE_RESTORED_REQUIRED'}]);}else 

q.update({},[{type:'CACHE_RESTORE_FAILED'}]);});}






p.stop();}).
done();


return {abort:function w(){
q.update({aborted:true},[{type:'ABORT'}]);}};}




f.exports=h;}),null);

/** shared/relay/oss/react-relay/classic/legacy/store/GraphQLSegment.js */






















__d('GraphQLSegment',['RelayRecord'],(function a(b,c,d,e,f,g){

'use strict';


















function h(){


this.$GraphQLSegment_indexToMetadataMap={};


this.$GraphQLSegment_idToIndicesMap={};
this.$GraphQLSegment_cursorToIndexMap={};

this.$GraphQLSegment_count=0;
this.$GraphQLSegment_minIndex=null;
this.$GraphQLSegment_maxIndex=null;}
h.prototype.





$GraphQLSegment_getIndexForCursor=function(i){
return this.$GraphQLSegment_cursorToIndexMap[i];};
h.prototype.





$GraphQLSegment_getIndexForID=function(i){
var j=this.$GraphQLSegment_idToIndicesMap[i];
return j&&j[0];};
h.prototype.




getFirstCursor=function(){
if(this.getLength())
for(var i=this.$GraphQLSegment_minIndex;i<=this.$GraphQLSegment_maxIndex;i++){
var j=this.$GraphQLSegment_indexToMetadataMap[i];
if(!j.deleted)
return j.cursor;}};



h.prototype.




getLastCursor=function(){
if(this.getLength())
for(var i=this.$GraphQLSegment_maxIndex;i>=this.$GraphQLSegment_minIndex;i--){
var j=this.$GraphQLSegment_indexToMetadataMap[i];
if(!j.deleted)
return j.cursor;}};



h.prototype.





isFirstCursor=function(i){
if(this.getLength()){
for(var j=this.$GraphQLSegment_minIndex;j<=this.$GraphQLSegment_maxIndex;j++){
var k=this.$GraphQLSegment_indexToMetadataMap[j];
if(!k.deleted){
return k.cursor===i;}else
if(k.cursor===i)
return true;}


return false;}};

h.prototype.





isLastCursor=function(i){
if(this.getLength()){
for(var j=this.$GraphQLSegment_maxIndex;j>=this.$GraphQLSegment_minIndex;j--){
var k=this.$GraphQLSegment_indexToMetadataMap[j];
if(!k.deleted){
return k.cursor===i;}else
if(k.cursor===i)
return true;}


return false;}};

h.prototype.




getFirstID=function(){
if(this.getLength())
for(var i=this.$GraphQLSegment_minIndex;i<=this.$GraphQLSegment_maxIndex;i++){
var j=this.$GraphQLSegment_indexToMetadataMap[i];
if(!j.deleted)
return j.edgeID;}};



h.prototype.




getLastID=function(){
if(this.getLength())
for(var i=this.$GraphQLSegment_maxIndex;i>=this.$GraphQLSegment_minIndex;i--){
var j=this.$GraphQLSegment_indexToMetadataMap[i];
if(!j.deleted)
return j.edgeID;}};



h.prototype.





$GraphQLSegment_getEdgeAtIndex=function(i){
var j=this.$GraphQLSegment_indexToMetadataMap[i];
return j&&!j.deleted?j:null;};
h.prototype.






containsEdgeWithID=function(i){
var j=this.$GraphQLSegment_getIndexForID(i);
if(j===undefined)
return false;

return !!this.$GraphQLSegment_getEdgeAtIndex(j);};
h.prototype.







containsEdgeWithCursor=function(i){var j=arguments.length<=1||arguments[1]===undefined?false:arguments[1],
k=this.$GraphQLSegment_getIndexForCursor(i);
if(k===undefined){
return false;}else
if(j)
return true;

return !!this.$GraphQLSegment_getEdgeAtIndex(k);};
h.prototype.







getMetadataAfterCursor=function(i,j){
if(!this.getLength())

return {edgeIDs:[],
cursors:[]};


var k=this.$GraphQLSegment_minIndex;
if(j){
var l=this.$GraphQLSegment_getIndexForCursor(j);
if(l===undefined)


return {edgeIDs:[],
cursors:[]};


k=l+1;}

var m=0,
n=[],
o=[];

while(k<=this.$GraphQLSegment_maxIndex&&m<i){
var p=this.$GraphQLSegment_indexToMetadataMap[k];
if(!p.deleted){
n.push(p.edgeID);
o.push(p.cursor);
m++;}

k++;}


return {edgeIDs:n,
cursors:o};};

h.prototype.







getMetadataBeforeCursor=function(i,j){
if(!this.getLength())

return {edgeIDs:[],
cursors:[]};


var k=this.$GraphQLSegment_maxIndex;
if(j){
var l=this.$GraphQLSegment_getIndexForCursor(j);
if(l===undefined)


return {edgeIDs:[],
cursors:[]};


k=l-1;}

var m=0,
n=[],
o=[];
while(k>=this.$GraphQLSegment_minIndex&&m<i){
var p=this.$GraphQLSegment_indexToMetadataMap[k];
if(!p.deleted){
n.push(p.edgeID);
o.push(p.cursor);
m++;}

k--;}




return {edgeIDs:n.reverse(),
cursors:o.reverse()};};

h.prototype.





$GraphQLSegment_addEdgeAtIndex=function(i,j){
var k=c('RelayRecord').getDataIDForObject(i),
l=i.cursor,

m=this.$GraphQLSegment_getIndexForID(k);

if(m!==undefined&&this.$GraphQLSegment_getEdgeAtIndex(m))




return;


if(this.getLength()===0){
this.$GraphQLSegment_minIndex=j;
this.$GraphQLSegment_maxIndex=j;}else
if(this.$GraphQLSegment_minIndex===j+1){
this.$GraphQLSegment_minIndex=j;}else
if(this.$GraphQLSegment_maxIndex===j-1){
this.$GraphQLSegment_maxIndex=j;}else 






return;


this.$GraphQLSegment_indexToMetadataMap[j]=
{edgeID:k,
cursor:l,
deleted:false};

this.$GraphQLSegment_idToIndicesMap[k]=this.$GraphQLSegment_idToIndicesMap[k]||[];
this.$GraphQLSegment_idToIndicesMap[k].unshift(j);
this.$GraphQLSegment_count++;

if(l)
this.$GraphQLSegment_cursorToIndexMap[l]=j;};

h.prototype.




prependEdge=function(i){
this.$GraphQLSegment_addEdgeAtIndex
(i,
this.$GraphQLSegment_minIndex!==null?this.$GraphQLSegment_minIndex-1:0);};

h.prototype.




appendEdge=function(i){
this.$GraphQLSegment_addEdgeAtIndex
(i,
this.$GraphQLSegment_maxIndex!==null?this.$GraphQLSegment_maxIndex+1:0);};

h.prototype.






removeEdge=function(i){
var j=this.$GraphQLSegment_getIndexForID(i);
if(j===undefined)




return;

var k=this.$GraphQLSegment_indexToMetadataMap[j];
if(k.deleted)




return;

k.deleted=true;
this.$GraphQLSegment_count--;};
h.prototype.








removeAllEdges=function(i){
var j=this.$GraphQLSegment_idToIndicesMap[i];
if(!j)
return;

for(var k=0;k<j.length;k++){
var l=this.$GraphQLSegment_indexToMetadataMap[j[k]];
if(!l.deleted){
l.deleted=true;
this.$GraphQLSegment_count--;}}};


h.prototype.





addEdgesAfterCursor=function(i,j){
if(!i.length)
return;



var k=-1;
if(j){
k=this.$GraphQLSegment_getIndexForCursor(j);
if(k===undefined)

return;}



while(this.$GraphQLSegment_maxIndex!==null&&k<this.$GraphQLSegment_maxIndex){
var l=this.$GraphQLSegment_indexToMetadataMap[k+1];


if(l.deleted){
k++;}else 






return;}



var m=k+1;
for(var n=0;n<i.length;n++){
var o=i[n];
this.$GraphQLSegment_addEdgeAtIndex
(o,
m+n);}};


h.prototype.





addEdgesBeforeCursor=function(i,j){
if(!i.length)
return;



var k=1;
if(j){
k=this.$GraphQLSegment_getIndexForCursor(j);
if(k===undefined)

return;}



while(this.$GraphQLSegment_minIndex!==null&&k>this.$GraphQLSegment_minIndex){
var l=this.$GraphQLSegment_indexToMetadataMap[k-1];


if(l.deleted){
k--;}else 






return;}





var m=k-1;
for(var n=0;n<i.length;n++){

var o=i[i.length-n-1];
this.$GraphQLSegment_addEdgeAtIndex
(o,
m-n);}};


h.prototype.








getLength=function(){
if(this.$GraphQLSegment_minIndex===null&&this.$GraphQLSegment_maxIndex===null)
return 0;


return this.$GraphQLSegment_maxIndex-this.$GraphQLSegment_minIndex+1;};
h.prototype.






getCount=function(){
return this.$GraphQLSegment_count;};
h.prototype.









$GraphQLSegment_rollback=function(i,j,k){
Object.assign(this.$GraphQLSegment_cursorToIndexMap,i);
Object.assign(this.$GraphQLSegment_idToIndicesMap,j);


this.$GraphQLSegment_count=k.count;
this.$GraphQLSegment_maxIndex=k.maxIndex;
this.$GraphQLSegment_minIndex=k.minIndex;};
h.prototype.




$GraphQLSegment_getCounterState=function(){

return {count:this.$GraphQLSegment_count,
maxIndex:this.$GraphQLSegment_maxIndex,
minIndex:this.$GraphQLSegment_minIndex};};

h.prototype.







concatSegment=function(i){
if(!i.getLength())
return true;

var j={},
k={},
l=this.$GraphQLSegment_getCounterState(),
m=i.$GraphQLSegment_indexToMetadataMap;
for(var n=i.$GraphQLSegment_minIndex;n<=i.$GraphQLSegment_maxIndex;n++){
var o=void 0;
if(this.getLength()){
o=this.$GraphQLSegment_maxIndex+1;}else{

o=0;
this.$GraphQLSegment_minIndex=0;}

this.$GraphQLSegment_maxIndex=o;

var p=m[n],
q=this.$GraphQLSegment_getIndexForID(p.edgeID);
if(!Object.prototype.hasOwnProperty.call(j,p.edgeID))
if(this.$GraphQLSegment_idToIndicesMap[p.edgeID]){
j[p.edgeID]=
this.$GraphQLSegment_idToIndicesMap[p.edgeID].slice();}else 

j[p.edgeID]=undefined;



if(q!==undefined){
var r=this.$GraphQLSegment_indexToMetadataMap[q];
if(r.deleted&&!p.deleted){



this.$GraphQLSegment_idToIndicesMap[p.edgeID].unshift(o);}else
if(!p.deleted){




this.$GraphQLSegment_rollback(k,j,l);
return false;}else{



this.$GraphQLSegment_idToIndicesMap[p.edgeID]=
this.$GraphQLSegment_idToIndicesMap[p.edgeID]||[];
this.$GraphQLSegment_idToIndicesMap[p.edgeID].push(o);}}else{


this.$GraphQLSegment_idToIndicesMap[p.edgeID]=
this.$GraphQLSegment_idToIndicesMap[p.edgeID]||[];
this.$GraphQLSegment_idToIndicesMap[p.edgeID].unshift(o);}

var s=this.$GraphQLSegment_getIndexForCursor(p.cursor);

if(s!==undefined){
var t=this.$GraphQLSegment_indexToMetadataMap[s];
if(t.deleted&&!p.deleted){



k[p.cursor]=
this.$GraphQLSegment_cursorToIndexMap[p.cursor];
this.$GraphQLSegment_cursorToIndexMap[p.cursor]=o;}else
if(!p.deleted){




this.$GraphQLSegment_rollback(k,j,l);
return false;}}else

if(p.cursor){
k[p.cursor]=
this.$GraphQLSegment_cursorToIndexMap[p.cursor];
this.$GraphQLSegment_cursorToIndexMap[p.cursor]=o;}

if(!p.deleted)
this.$GraphQLSegment_count++;

this.$GraphQLSegment_indexToMetadataMap[o]=Object.assign({},p);}


return true;};
h.prototype.

toJSON=function(){

return [this.$GraphQLSegment_indexToMetadataMap,
this.$GraphQLSegment_idToIndicesMap,
this.$GraphQLSegment_cursorToIndexMap,
this.$GraphQLSegment_minIndex,
this.$GraphQLSegment_maxIndex,
this.$GraphQLSegment_count];};

h.

fromJSON=function(i){

var j=





i[0],k=i[1],l=i[2],m=i[3],n=i[4],o=i[5],
p=new h();
p.$GraphQLSegment_indexToMetadataMap=j;
p.$GraphQLSegment_idToIndicesMap=k;
p.$GraphQLSegment_cursorToIndexMap=l;
p.$GraphQLSegment_minIndex=m;
p.$GraphQLSegment_maxIndex=n;
p.$GraphQLSegment_count=o;
return p;};
h.prototype.

__debug=function(){

return {metadata:this.$GraphQLSegment_indexToMetadataMap,
idToIndices:this.$GraphQLSegment_idToIndicesMap,
cursorToIndex:this.$GraphQLSegment_cursorToIndexMap};};

h.prototype.




getEdgeIDs=function(){var i=arguments.length<=0||arguments[0]===undefined?{includeDeleted:false}:arguments[0],j=i.includeDeleted,
k=[];
if(this.getLength()>0)
for(var l=this.$GraphQLSegment_minIndex;l<=this.$GraphQLSegment_maxIndex;l++){var m=
this.$GraphQLSegment_indexToMetadataMap[l],n=m.deleted,o=m.edgeID;
if(j||!n)
k.push(o);}



return k;};



f.exports=h;}),null);

/** shared/relay/oss/react-relay/classic/mutation/rangeOperationToMetadataKey.js */























__d('rangeOperationToMetadataKey',['GraphQLMutatorConstants','mapObject'],(function a(b,c,d,e,f,g){

'use strict';





var h='__rangeOperation',
i='__',








j=c('mapObject')
(c('GraphQLMutatorConstants').RANGE_OPERATIONS,
function(k,l,m){
var n=l[0].toUpperCase()+l.slice(1);

return (h+
n+
i);});




f.exports=Object.freeze(j);}),null);

/** shared/relay/oss/react-relay/classic/legacy/store/GraphQLRange.js */






















__d('GraphQLRange',['invariant','GraphQLMutatorConstants','GraphQLSegment','RelayConnectionInterface','RelayRecord','forEachObject','rangeOperationToMetadataKey','serializeRelayQueryCall','warning'],(function a(b,c,d,e,f,g,h){

'use strict';













var i=c('RelayConnectionInterface').END_CURSOR,
j=c('RelayConnectionInterface').HAS_NEXT_PAGE,
k=c('RelayConnectionInterface').HAS_PREV_PAGE,
l=c('RelayConnectionInterface').START_CURSOR;






function m(u){
var v={};
for(var w=0;w<u.length;w++)
if(c('RelayConnectionInterface').isConnectionCall(u[w])){
var x=u[w],
y=x.value;

if(Array.isArray(y)&&y.length)
y=y[0];


if(y===null)
continue;

v[x.name]=y;}



if(v.first){

!isNaN(v.first)||h(0,
'GraphQLRange: Expected `first` argument to be a number, got '+
'`%s`.',
v.first);

v.first=+v.first;}else
if(v.last){

!isNaN(v.last)||h(0,
'GraphQLRange: Expected `last` argument to be a number, got '+
'`%s`.',
v.last);

v.last=+v.last;}

return v;}










function n(u){
return Object.prototype.hasOwnProperty.call(u,'surrounds')||Object.prototype.hasOwnProperty.call(u,'find');}









function o(u){
var v=Object.prototype.hasOwnProperty.call(u,'first'),
w=Object.prototype.hasOwnProperty.call(u,'last');





return (v||w)&&!(v&&w);}








function p(u){
return Object.prototype.hasOwnProperty.call(u,'first')&&u.first>0||
Object.prototype.hasOwnProperty.call(u,'last')&&u.last>0;}







function q(u){

c('RelayRecord').getDataIDForObject(u)!==undefined||h(0,
'GraphQLStore: `edge` must have a data id');


u.node!==undefined||h(0,
'GraphQLStore: `edge` must have `node` field');}






function r(u){
u.forEach(q);}

































function s(){
this.reset();}
s.prototype.

reset=function(){





this.$GraphQLRange_orderedSegments=
[new (c('GraphQLSegment'))(),
new (c('GraphQLSegment'))()];






this.$GraphQLRange_staticQueriesMap={};

this.$GraphQLRange_hasFirst=false;
this.$GraphQLRange_hasLast=false;};
s.prototype.




$GraphQLRange_resetSegment=function(u){

u>=0&&u<this.$GraphQLRange_orderedSegments.length||h(0,
'cannot reset non-existent segment');

this.$GraphQLRange_orderedSegments[u]=new (c('GraphQLSegment'))();};
s.prototype.





$GraphQLRange_getSegmentIndexByCursor=function(u){
var v=null;

for(var w=0;w<this.$GraphQLRange_orderedSegments.length;w++)
if(this.$GraphQLRange_orderedSegments[w].containsEdgeWithCursor(u)){
return w;}else
if(this.$GraphQLRange_orderedSegments[w].containsEdgeWithCursor
(u,
true))

v=w;


return v;};
s.prototype.





$GraphQLRange_getSegmentIndexByID=function(u){

for(var v=0;v<this.$GraphQLRange_orderedSegments.length;v++)
if(this.$GraphQLRange_orderedSegments[v].containsEdgeWithID(u))
return v;


return null;};
s.prototype.







$GraphQLRange_addStaticEdges=function(u,v){
var w=t(u),
x=[],
y=[];

for(var z=0;z<v.length;z++){
var aa=v[z];
x.push(c('RelayRecord').getDataIDForObject(aa));
y.push(aa.cursor);}


this.$GraphQLRange_staticQueriesMap[w]=
{edgeIDs:x,
cursors:y};};

s.prototype.








addItems=function(u,v,w){
r(v);
var x=m(u),
y=void 0,z=void 0;

if(n(x)){
this.$GraphQLRange_addStaticEdges(u,v);
return;}


if(!o(x))






return;



if(x.before===null||x.after===null)



return;


if(x.first){

if(x.before&&!x.after){

if(w[j]===true&&v.length!==0){
if(this.$GraphQLRange_getSegmentIndexByCursor(x.before)===0)
this.$GraphQLRange_orderedSegments.unshift
(new (c('GraphQLSegment'))());




this.$GraphQLRange_addAfterFirstItems
(v,w[j],undefined,x.before);}else 




this.$GraphQLRange_addBeforeLastItems
(v,
w[k],
x.before);}else{




if(!x.after){
z=0;
y=this.getFirstSegment().getCount();

if(y&&
(x.first>y||v.length>y)&&
!this.getFirstSegment().getFirstCursor())






this.$GraphQLRange_resetSegment(z);}


this.$GraphQLRange_addAfterFirstItems
(v,w[j],x.after,x.before);}}else


if(x.last)

if(x.after&&!x.before){

if(w[k]===true&&v.length!==0){
if(this.$GraphQLRange_getSegmentIndexByCursor(x.after)===
this.$GraphQLRange_orderedSegments.length-1)
this.$GraphQLRange_orderedSegments.push(new (c('GraphQLSegment'))());



this.$GraphQLRange_addBeforeLastItems
(v,w[k],undefined,x.after);}else 




this.$GraphQLRange_addAfterFirstItems
(v,
w[j],
x.after);}else{




if(!x.before){
z=this.$GraphQLRange_orderedSegments.length-1;
y=this.getLastSegment().getCount();

if(y&&
(x.last>y||v.length>y)&&
!this.getLastSegment().getLastCursor())






this.$GraphQLRange_resetSegment(z);}


this.$GraphQLRange_addBeforeLastItems
(v,w[k],x.before,x.after);}};



s.prototype.




getFirstSegment=function(){
return this.$GraphQLRange_orderedSegments[0];};
s.prototype.




getLastSegment=function(){
return this.$GraphQLRange_orderedSegments[this.$GraphQLRange_orderedSegments.length-1];};
s.prototype.










$GraphQLRange_concatSegments=function(u){

u+1<this.$GraphQLRange_orderedSegments.length&&
u>=0||h(0,
'GraphQLRange cannot concat segments outside the range '+
'of orderedSegments');

var v=this.$GraphQLRange_orderedSegments[u],
w=this.$GraphQLRange_orderedSegments[u+1];
if(v.concatSegment(w))
this.$GraphQLRange_orderedSegments.splice(u+1,1);};







s.prototype.






prependEdge=function(u){
q(u);
this.$GraphQLRange_hasFirst=true;
this.$GraphQLRange_removeEdgeIfApplicable(u);
var v=this.getFirstSegment();
v.prependEdge(u);};
s.prototype.






appendEdge=function(u){
q(u);
this.$GraphQLRange_hasLast=true;
this.$GraphQLRange_removeEdgeIfApplicable(u);
var v=this.getLastSegment();
v.appendEdge(u);};
s.prototype.





$GraphQLRange_removeEdgeIfApplicable=function(u){
var v=c('RelayRecord').getDataIDForObject(u),
w=this.$GraphQLRange_getSegmentIndexByID(v);
if(w!=null)
this.$GraphQLRange_orderedSegments[w].removeEdge(v);};

s.prototype.







$GraphQLRange_dedupEdgesAgainstRange=function(u){
return u.filter(function(v){
var w=c('RelayRecord').getDataIDForObject(v);
return this.$GraphQLRange_getSegmentIndexByID(w)==null;}.
bind(this));};
s.prototype.










$GraphQLRange_addAfterFirstItems=
function(u,
v,
w,
x){

var y=void 0,
z=void 0,
aa=void 0;
if(w!==undefined){
z=this.$GraphQLRange_getSegmentIndexByCursor(w);
if(z==null){
c('warning')
(false,
'GraphQLRange cannot find a segment that has the cursor: %s',
w);

return;}

y=this.$GraphQLRange_orderedSegments[z];
aa=y.getLastCursor();
if(aa!==w){
u=this.$GraphQLRange_reconcileAfterFirstEdges(y,u,w);
w=aa;
if(!u)
return;}}else{



z=0;
y=this.$GraphQLRange_orderedSegments[z];
aa=y.getLastCursor();
if(aa!==undefined){
u=this.$GraphQLRange_reconcileAfterFirstEdges(y,u);
w=aa;
if(!u)
return;}}



var ba=this.$GraphQLRange_orderedSegments[z+1];
if(x!==undefined)
if(z===this.$GraphQLRange_orderedSegments.length-1){



return;}else
if(!ba.isFirstCursor(x)){
c('warning')
(false,
'GraphQLRange cannot add because beforeCursor does not match first '+
'cursor of the next segment');

return;}



if(w===undefined)
this.$GraphQLRange_hasFirst=true;


var ca=this.$GraphQLRange_dedupEdgesAgainstRange(u);
y.addEdgesAfterCursor(ca,w);
if(!v)
if(x!==undefined){



this.$GraphQLRange_concatSegments(z);}else{

this.$GraphQLRange_hasLast=true;


this.$GraphQLRange_orderedSegments.splice
(z+1,
this.$GraphQLRange_orderedSegments.length-1-z);}};



s.prototype.












$GraphQLRange_reconcileAfterFirstEdges=function(u,v,w){
var x=u.getMetadataAfterCursor(v.length+1,w),
y=x.edgeIDs;
if(y.length>v.length)

return undefined;


for(var z=0;z<y.length;z++)
if(y[z]!==c('RelayRecord').getDataIDForObject(v[z])){
c('warning')
(false,
'Relay was unable to reconcile edges on a connection. This most '+
'likely occurred while trying to handle a server response that '+
'includes connection edges with nodes that lack an `id` field.');

return undefined;}


return v.slice(y.length);};
s.prototype.









$GraphQLRange_addBeforeLastItems=
function(u,
v,
w,
x){

var y=void 0,
z=void 0,
aa=void 0;
if(w!==undefined){
z=this.$GraphQLRange_getSegmentIndexByCursor(w);
if(z==null){
c('warning')
(false,
'GraphQLRange cannot find a segment that has the cursor: %s',
w);

return;}

y=this.$GraphQLRange_orderedSegments[z];
aa=y.getFirstCursor();
if(aa!==w){
u=this.$GraphQLRange_reconcileBeforeLastEdges(y,u,w);
w=aa;
if(!u)
return;}}else{



z=this.$GraphQLRange_orderedSegments.length-1;
y=this.$GraphQLRange_orderedSegments[z];
aa=y.getFirstCursor();
if(aa!==undefined){
u=this.$GraphQLRange_reconcileBeforeLastEdges(y,u,w);
w=aa;
if(!u)
return;}}



var ba=this.$GraphQLRange_orderedSegments[z-1];
if(x!==undefined)
if(z===0){



return;}else
if(!ba.isLastCursor(x)){
c('warning')
(false,
'GraphQLRange cannot add because afterCursor does not match last '+
'cursor of the previous segment');

return;}



if(w===undefined)
this.$GraphQLRange_hasLast=true;


var ca=this.$GraphQLRange_dedupEdgesAgainstRange(u);
y.addEdgesBeforeCursor(ca,w);
if(!v)
if(x!==undefined){



this.$GraphQLRange_concatSegments(z-1);}else{

this.$GraphQLRange_hasFirst=true;


this.$GraphQLRange_orderedSegments.splice(0,z);}};


s.prototype.












$GraphQLRange_reconcileBeforeLastEdges=function(u,v,w){
var x=u.getMetadataBeforeCursor(v.length+1,w),
y=x.edgeIDs;
if(y.length>v.length)

return undefined;


for(var z=1;z<=y.length;z++)
if(y[y.length-z]!==
c('RelayRecord').getDataIDForObject(v[v.length-z])){
c('warning')
(false,
'Relay was unable to reconcile edges on a connection. This most '+
'likely occurred while trying to handle a server response that '+
'includes connection edges with nodes that lack an `id` field.');

return undefined;}


return v.slice(0,v.length-y.length);};
s.prototype.







removeEdgeWithID=function(u){
for(var v=0;v<this.$GraphQLRange_orderedSegments.length;v++)
this.$GraphQLRange_orderedSegments[v].removeAllEdges(u);};

s.prototype.






retrieveRangeInfoForQuery=function(u,v){
var w=m(u);

if(n(w))
return this.$GraphQLRange_retrieveRangeInfoForStaticCalls
(u);





if(!o(w))







return {requestedEdgeIDs:[],
diffCalls:[],
pageInfo:c('RelayConnectionInterface').getDefaultPageInfo()};


if(w.first&&w.before||w.last&&w.after)


return {requestedEdgeIDs:[],
diffCalls:[],
pageInfo:c('RelayConnectionInterface').getDefaultPageInfo()};


if(!p(w))





return {requestedEdgeIDs:[],
diffCalls:[],
pageInfo:c('RelayConnectionInterface').getDefaultPageInfo()};


if(w.first){
return this.$GraphQLRange_retrieveRangeInfoForFirstQuery
(u,
v);}else

if(w.last)
return this.$GraphQLRange_retrieveRangeInfoForLastQuery
(u,
v);};


s.prototype.





$GraphQLRange_retrieveRangeInfoForStaticCalls=function(u){
var v=t(u),
w=this.$GraphQLRange_staticQueriesMap[v];

if(w){var x;

return {requestedEdgeIDs:w.edgeIDs,
diffCalls:[],
pageInfo:(x={},x[
l]=w.cursors[0],x[
i]=w.cursors[w.cursors.length-1],x[
j]=true,x[
k]=true,x)};}







return {requestedEdgeIDs:[],
diffCalls:u,
pageInfo:c('RelayConnectionInterface').getDefaultPageInfo()};};

s.prototype.





$GraphQLRange_getAppendedIDsForQueuedRecord=function(u){
return u[
c('rangeOperationToMetadataKey')[c('GraphQLMutatorConstants').APPEND]];};

s.prototype.





$GraphQLRange_getRemovedIDsForQueuedRecord=function(u){
return u[
c('rangeOperationToMetadataKey')[c('GraphQLMutatorConstants').REMOVE]];};

s.prototype.





$GraphQLRange_getPrependedIDsForQueuedRecord=function(u){
return u[
c('rangeOperationToMetadataKey')[c('GraphQLMutatorConstants').PREPEND]];};

s.prototype.






$GraphQLRange_retrieveRangeInfoForFirstQuery=
function(u,
v){

var w=void 0,
x=void 0,
y=void 0;
if(v){
w=this.$GraphQLRange_getAppendedIDsForQueuedRecord(v);
x=this.$GraphQLRange_getPrependedIDsForQueuedRecord(v);
y=this.$GraphQLRange_getRemovedIDsForQueuedRecord(v);}

var z=m(u),
aa=z.first+(y?y.length:0),
ba=void 0,
ca=void 0,
da=babelHelpers['extends']({},
c('RelayConnectionInterface').getDefaultPageInfo()),


ea=z.after;
if(ea!==undefined){
ca=this.$GraphQLRange_getSegmentIndexByCursor(ea);
if(ca==null)





return {requestedEdgeIDs:[],
diffCalls:[],
pageInfo:da};


ba=this.$GraphQLRange_orderedSegments[ca];}else{

var fa=x?x.length:0;
aa-=fa;

ca=0;
ba=this.$GraphQLRange_orderedSegments[ca];}


var ga=
ba.getMetadataAfterCursor(aa,ea),
ha=ga.edgeIDs,
ia=ga.cursors,
ja=[];
if(ia.length){
da[l]=ia[0];
da[i]=ia[ia.length-1];}

var ka=ha[ha.length-1];


if(!this.$GraphQLRange_hasLast||
ca!==this.$GraphQLRange_orderedSegments.length-1||
ka&&ka!==ba.getLastID()){
da[j]=true;
if(ha.length<aa){
aa-=ha.length;
var la=ba.getLastCursor();

if(la===null){
ja.push({name:'first',value:z.first});}else{

if(la!==undefined)
ja.push({name:'after',value:la});



if(ca!==this.$GraphQLRange_orderedSegments.length-1){
var ma=this.$GraphQLRange_orderedSegments[ca+1],
na=ma.getFirstCursor();
if(na!==undefined)
ja.push({name:'before',value:na});}


ja.push({name:'first',value:aa});}}}




if(v){
if(x&&x.length&&!z.after)
ha=x.concat(ha);

if(w&&w.length&&!da[j])
ha=ha.concat(w);

if(y&&y.length)
ha=ha.filter(function(oa){
return y.indexOf(oa)===-1;});


if(ha.length>z.first)
ha=ha.slice(0,z.first);}




return {requestedEdgeIDs:ha,
diffCalls:ja,
pageInfo:da};};

s.prototype.






$GraphQLRange_retrieveRangeInfoForLastQuery=
function(u,
v){

var w=void 0,
x=void 0,
y=void 0;
if(v){
w=this.$GraphQLRange_getAppendedIDsForQueuedRecord(v);
x=this.$GraphQLRange_getPrependedIDsForQueuedRecord(v);
y=this.$GraphQLRange_getRemovedIDsForQueuedRecord(v);}

var z=m(u),
aa=z.last+(y?y.length:0),
ba=void 0,
ca=void 0,
da=babelHelpers['extends']({},
c('RelayConnectionInterface').getDefaultPageInfo()),


ea=z.before;
if(ea!==undefined){
ca=this.$GraphQLRange_getSegmentIndexByCursor(ea);
if(ca==null)





return {requestedEdgeIDs:[],
diffCalls:[],
pageInfo:da};


ba=this.$GraphQLRange_orderedSegments[ca];}else{

var fa=w?w.length:0;
aa-=fa;

ca=this.$GraphQLRange_orderedSegments.length-1;
ba=this.$GraphQLRange_orderedSegments[ca];}


var ga=
ba.getMetadataBeforeCursor(aa,ea),
ha=ga.edgeIDs,
ia=ga.cursors,
ja=[];
if(ia.length){
da[l]=ia[0];
da[i]=ia[ia.length-1];}

var ka=ha[0];


if(!this.$GraphQLRange_hasFirst||
ca!==0||
ka&&ka!==ba.getFirstID()){
da[k]=true;
if(ha.length<aa){
aa-=ha.length;
var la=ba.getFirstCursor();

if(la===null){
ja.push({name:'last',value:z.last});}else{

if(la!==undefined)
ja.push({name:'before',value:la});



if(ca!==0){
var ma=this.$GraphQLRange_orderedSegments[ca-1],
na=ma.getLastCursor();
if(na!==undefined)
ja.push({name:'after',value:na});}


ja.push({name:'last',value:aa});}}}




if(v){
if(w&&w.length&&!z.before)
ha=ha.concat(w);

if(x&&x.length&&!da[k])
ha=x.concat(ha);

if(y&&y.length)
ha=ha.filter(function(pa){
return y.indexOf(pa)===-1;});


if(ha.length>z.last){
var oa=ha.length;
ha=ha.slice(oa-z.last,oa);}}




return {requestedEdgeIDs:ha,
diffCalls:ja,
pageInfo:da};};

s.

fromJSON=function(u){

var v=



u[0],w=u[1],x=u[2],y=u[3],
z=new s();
z.$GraphQLRange_hasFirst=v;
z.$GraphQLRange_hasLast=w;
z.$GraphQLRange_staticQueriesMap=x;
z.$GraphQLRange_orderedSegments=y.map
(function(aa){return c('GraphQLSegment').fromJSON(aa);});

return z;};
s.prototype.

toJSON=function(){

return [this.$GraphQLRange_hasFirst,
this.$GraphQLRange_hasLast,
this.$GraphQLRange_staticQueriesMap,
this.$GraphQLRange_orderedSegments];};

s.prototype.

__debug=function(){

return {orderedSegments:this.$GraphQLRange_orderedSegments};};

s.prototype.

getEdgeIDs=function(){
var u=[];
this.$GraphQLRange_orderedSegments.forEach(function(v){
u.push.apply(u,v.getEdgeIDs());});

c('forEachObject')(this.$GraphQLRange_staticQueriesMap,function(v){
u.push.apply(u,v.edgeIDs);});

return u;};
s.prototype.

getSegmentedEdgeIDs=function(){
return this.$GraphQLRange_orderedSegments.map(function(u){return u.getEdgeIDs();});};







function t(u){
return u.map
(function(v){return c('serializeRelayQueryCall')(v).substring(1);}).
join(',');}


f.exports=s;}),null);

/** shared/relay/oss/react-relay/classic/legacy/store/GraphQLStoreChangeEmitter.js */























__d('GraphQLStoreChangeEmitter',['ErrorUtils','resolveImmediate'],(function a(b,c,d,e,f,g){

'use strict';































function h(i){
this.$GraphQLStoreChangeEmitter_batchUpdate=function(j){return j();};
this.$GraphQLStoreChangeEmitter_executingIDs={};
this.$GraphQLStoreChangeEmitter_rangeData=i;
this.$GraphQLStoreChangeEmitter_scheduledIDs=null;
this.$GraphQLStoreChangeEmitter_subscribers=[];}
h.prototype.

addListenerForIDs=
function(i,
j){

var k=i.map(function(m){return this.$GraphQLStoreChangeEmitter_getBroadcastID(m);}.bind(this)),
l=this.$GraphQLStoreChangeEmitter_subscribers.length;
this.$GraphQLStoreChangeEmitter_subscribers.push({subscribedIDs:k,callback:j});

return {remove:function(){
delete this.$GraphQLStoreChangeEmitter_subscribers[l];}.
bind(this)};};

h.prototype.

broadcastChangeForID=function(i){
var j=this.$GraphQLStoreChangeEmitter_scheduledIDs;
if(j==null){
c('resolveImmediate')(function(){return this.$GraphQLStoreChangeEmitter_processBroadcasts();}.bind(this));
j=this.$GraphQLStoreChangeEmitter_scheduledIDs={};}



j[this.$GraphQLStoreChangeEmitter_getBroadcastID(i)]=this.$GraphQLStoreChangeEmitter_subscribers.length-1;};
h.prototype.

injectBatchingStrategy=function(i){
this.$GraphQLStoreChangeEmitter_batchUpdate=i;};
h.prototype.

$GraphQLStoreChangeEmitter_processBroadcasts=function(){
if(this.$GraphQLStoreChangeEmitter_scheduledIDs){
this.$GraphQLStoreChangeEmitter_executingIDs=this.$GraphQLStoreChangeEmitter_scheduledIDs;
this.$GraphQLStoreChangeEmitter_scheduledIDs=null;
this.$GraphQLStoreChangeEmitter_batchUpdate(function(){return this.$GraphQLStoreChangeEmitter_processSubscribers();}.bind(this));}};

h.prototype.





$GraphQLStoreChangeEmitter_processSubscribers=function(){
this.$GraphQLStoreChangeEmitter_subscribers.forEach(function(i,j){
return (this.$GraphQLStoreChangeEmitter_processSubscriber(i,j));}.bind(this));};

h.prototype.

$GraphQLStoreChangeEmitter_processSubscriber=function(i,

j){
var k=i.subscribedIDs,l=i.callback;
for(var m in this.$GraphQLStoreChangeEmitter_executingIDs)
if(Object.prototype.hasOwnProperty.call(this.$GraphQLStoreChangeEmitter_executingIDs,m)){
var n=this.$GraphQLStoreChangeEmitter_executingIDs[m];
if(n<j)

break;

if(k.indexOf(m)>=0){
c('ErrorUtils').applyWithGuard
(l,
null,
null,
null,
'GraphQLStoreChangeEmitter');

break;}}};



h.prototype.






$GraphQLStoreChangeEmitter_getBroadcastID=function(i){
return this.$GraphQLStoreChangeEmitter_rangeData.getCanonicalClientID(i);};



f.exports=h;}),null);

/** shared/relay/oss/react-relay/classic/store/RelayRecordStatusMap.js */























__d('RelayRecordStatusMap',[],(function a(b,c,d,e,f,g){

'use strict';



var h=1,



i=4;

function j(m,n,o){
m=m||0;
if(n){
return m|o;}else 

return m&~o;}



function k(m,n){
return ((m||0)&n)!==0;}





var l=
{setOptimisticStatus:function m(n,o){
return j(n,o,h);},


isOptimisticStatus:function m(n){
return k(n,h);},




setPartialStatus:function m(n,o){
return j(n,o,i);},


isPartialStatus:function m(n){
return k(n,i);}};



f.exports=l;}),null);

/** shared/relay/oss/react-relay/classic/store/validateRelayReadQuery.js */























__d('validateRelayReadQuery',['RelayQueryVisitor','emptyFunction'],(function a(b,c,d,e,f,g){

'use strict';













var h=c('emptyFunction');



































































































f.exports=h;}),null);

/** shared/relay/oss/react-relay/classic/store/readRelayQueryData.js */























__d('readRelayQueryData',['invariant','RelayClassicRecordState','RelayConnectionInterface','RelayFragmentPointer','RelayProfiler','RelayQuery','RelayQueryVisitor','RelayRecord','RelayRecordStatusMap','callsFromGraphQL','callsToGraphQL','isCompatibleRelayFragmentType','validateRelayReadQuery'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,k,l,


























m=c('RelayRecord').MetadataKey.MUTATION_STATUS,

















n=c('RelayConnectionInterface').EDGES,o=c('RelayConnectionInterface').PAGE_INFO,
p=
['__status__',
'__resolvedFragmentMapGeneration__'];







function q
(y,
z,
aa,
ba){

var ca=new r(y,ba),
da=ca.retrieveData(z,aa);



c('validateRelayReadQuery')(z,ba);

return da;}
i=babelHelpers.inherits

(r,c('RelayQueryVisitor'));j=i&&i.prototype;






function r
(y,
z){

j.constructor.call(this);
this.$RelayStoreReader_rangeData=y.getRangeData();
this.$RelayStoreReader_recordStore=y.getQueuedStore();
this.$RelayStoreReader_storeData=y;
this.$RelayStoreReader_traverseFragmentReferences=
z&&z.traverseFragmentReferences||false;
this.$RelayStoreReader_traverseGeneratedFields=
z&&z.traverseGeneratedFields||false;}
r.prototype.




retrieveData=
function(y,
z){

var aa=
{data:undefined,
dataIDs:{}},

ba=this.$RelayStoreReader_rangeData.parseRangeClientID(z),
ca=this.$RelayStoreReader_recordStore.getRecordState
(ba?ba.dataID:z);

if(ca===c('RelayClassicRecordState').EXISTENT){
var da=this.$RelayStoreReader_createState
({componentDataID:null,
data:undefined,
isPartial:false,
parent:null,
rangeInfo:null,
seenDataIDs:aa.dataIDs,
storeDataID:z});

this.visit(y,da);
aa.data=da.data;}else
if(ca===c('RelayClassicRecordState').NONEXISTENT)
aa.data=null;

return aa;};
r.prototype.

visit=function(y,z){
var aa=j.visit.call(this,y,z);
this.$RelayStoreReader_updateMetadataFields(z);
return aa;};
r.prototype.

visitField=function(y,z){


this.$RelayStoreReader_handleRangeInfo(y,z);

if(y.canHaveSubselections()||y.isGenerated())

w(z);


if(y.isGenerated()&&!this.$RelayStoreReader_traverseGeneratedFields)
return;

var aa=z.rangeInfo;

if(aa&&
y.getSchemaName()===n){

this.$RelayStoreReader_readEdges(y,aa,z);}else

if(aa&&
y.getSchemaName()===o){

this.$RelayStoreReader_readPageInfo(y,aa,z);}else
if(!y.canHaveSubselections()){
this.$RelayStoreReader_readScalar(y,z);}else
if(y.isPlural()){
this.$RelayStoreReader_readPlural(y,z);}else
if(y.isConnection()){
this.$RelayStoreReader_readConnection(y,z);}else 

this.$RelayStoreReader_readLinkedField(y,z);

z.seenDataIDs[z.storeDataID]=true;};
r.prototype.

visitFragment=function(y,z){
var aa=v(z);
if(y.isContainerFragment()&&!this.$RelayStoreReader_traverseFragmentReferences){
z.seenDataIDs[aa]=true;
var ba=w(z);
c('RelayFragmentPointer').addFragment(ba,y);}else
if(c('isCompatibleRelayFragmentType')
(y,
this.$RelayStoreReader_recordStore.getType(aa)))

this.traverse(y,z);};

r.prototype.

$RelayStoreReader_createState=function(y){


var z=this.$RelayStoreReader_recordStore.getRecordState(y.storeDataID);
if(z===c('RelayClassicRecordState').EXISTENT)
w(y);

return y;};
r.prototype.

$RelayStoreReader_readScalar=function(y,z){
var aa=y.getStorageKey(),
ba=this.$RelayStoreReader_recordStore.getField(z.storeDataID,aa);
if(ba===undefined){
z.isPartial=true;}else
if(ba===null&&!z.data){
z.data=null;}else 

this.$RelayStoreReader_setDataValue
(z,
y.getApplicationName(),
Array.isArray(ba)?ba.slice():ba);};


r.prototype.

$RelayStoreReader_readPlural=function(y,z){var aa,ba=this,
ca=y.getStorageKey(),
da=
this.$RelayStoreReader_recordStore.getLinkedRecordIDs(z.storeDataID,ca);
if(da)(function(){
var ea=y.getApplicationName(),
fa=x(z,ea),
ga=da.map(function(ha,ia){
var ja=void 0;
if(fa instanceof Object)
ja=fa[ia];

var ka=this.$RelayStoreReader_createState
({componentDataID:null,
data:ja,
isPartial:false,
parent:y,
rangeInfo:null,
seenDataIDs:z.seenDataIDs,
storeDataID:ha});

y.getChildren().forEach(function(la){return this.visit(la,ka);}.bind(this));
if(ka.isPartial)
z.isPartial=true;

return ka.data;}.
bind(ba));
ba.$RelayStoreReader_setDataValue(z,ea,ga);})();};

r.prototype.

$RelayStoreReader_readConnection=function(y,z){
var aa=y.getApplicationName(),
ba=y.getStorageKey(),
ca=y.getCallsWithValues(),
da=this.$RelayStoreReader_recordStore.getLinkedRecordID
(z.storeDataID,
ba);

if(!da){
z.isPartial=true;
return;}

s(y);
var ea=this.$RelayStoreReader_recordStore.getRangeMetadata(da,ca),
fa=this.$RelayStoreReader_createState
({componentDataID:this.$RelayStoreReader_getConnectionClientID(y,da),
data:x(z,aa),
isPartial:false,
parent:y,
rangeInfo:ea&&ca.length?ea:null,
seenDataIDs:z.seenDataIDs,
storeDataID:da});

this.traverse(y,fa);
if(fa.isPartial)
z.isPartial=true;

this.$RelayStoreReader_setDataValue(z,aa,fa.data);};
r.prototype.

$RelayStoreReader_readEdges=function(y,z,aa){
if(z.diffCalls.length)
aa.isPartial=true;

var ba=x(aa,n);

z.requestedEdgeIDs.forEach(function(da){
aa.seenDataIDs[da]=true;});

var ca=z.filteredEdges.map(function(da,ea){
var fa=void 0;
if(ba instanceof Object)
fa=ba[ea];

var ga=this.$RelayStoreReader_createState
({componentDataID:null,
data:fa,
isPartial:false,
parent:y,
rangeInfo:null,
seenDataIDs:aa.seenDataIDs,
storeDataID:da.edgeID});

this.traverse(y,ga);
if(ga.isPartial)
aa.isPartial=true;

return ga.data;}.
bind(this));
this.$RelayStoreReader_setDataValue(aa,n,ca);};
r.prototype.

$RelayStoreReader_readPageInfo=
function(y,
z,
aa){

var ba=z.pageInfo;

ba||h(0,
'readRelayQueryData(): Missing field, `%s`.',
o);

if(z.diffCalls.length)
aa.isPartial=true;

var ca=ba,
da=void 0,




ea=function(fa){
if(fa instanceof c('RelayQuery').Fragment){
if(fa.isContainerFragment()&&!this.$RelayStoreReader_traverseFragmentReferences){
da=da||{};
c('RelayFragmentPointer').addFragment(da,fa);}else 

fa.getChildren().forEach(ea);}else{


var ga=fa;
if(!ga.isGenerated()||this.$RelayStoreReader_traverseGeneratedFields){
da=da||{};
da[ga.getApplicationName()]=ca[ga.getStorageKey()];}}}.


bind(this);
y.getChildren().forEach(ea);

this.$RelayStoreReader_setDataValue
(aa,
y.getApplicationName(),
da);};

r.prototype.

$RelayStoreReader_readLinkedField=function(y,z){
var aa=y.getStorageKey(),
ba=y.getApplicationName(),
ca=this.$RelayStoreReader_recordStore.getLinkedRecordID
(z.storeDataID,aa);

if(ca==null){
if(ca===undefined)
z.isPartial=true;

this.$RelayStoreReader_setDataValue(z,ba,ca);
return;}

var da=this.$RelayStoreReader_createState
({componentDataID:null,
data:x(z,ba),
isPartial:false,
parent:y,
rangeInfo:null,
seenDataIDs:z.seenDataIDs,
storeDataID:ca});

this.traverse(y,da);
if(da.isPartial)
z.isPartial=true;

this.$RelayStoreReader_setDataValue(z,ba,da.data);};
r.prototype.







$RelayStoreReader_setDataValue=function(y,z,aa){
var ba=w(y);
if(aa===undefined)
return;

ba[z]=aa;};
r.prototype.

$RelayStoreReader_updateMetadataFields=function(y){var z,aa=this,
ba=y.data;
if(!(ba instanceof Object))
return;

var ca=y.storeDataID;

p.forEach(function(ea){
var fa=this.$RelayStoreReader_recordStore.getField(ca,ea);
if(fa!=null)
ba[ea]=fa;}.

bind(this));

if(y.isPartial)
ba.__status__=
c('RelayRecordStatusMap').setPartialStatus(ba.__status__,true);


var da=this.$RelayStoreReader_storeData.getClientMutationIDs(ca);
if(da)(function(){
var ea=[],
fa=aa.$RelayStoreReader_storeData.getMutationQueue();
da.forEach(function(ga){
var ha=fa.getTransaction(ga);
if(ha)
ea.push(ha.getHash());});


ba[m]=ea.join(',');})();};

r.prototype.







$RelayStoreReader_getConnectionClientID=
function(y,
z){

var aa=y.getCallsWithValues();
if(!c('RelayConnectionInterface').hasRangeCalls(aa))
return z;

return this.$RelayStoreReader_rangeData.getClientIDForRangeWithID
(c('callsToGraphQL')(aa),
{},
z);};

r.prototype.





$RelayStoreReader_handleRangeInfo=function(y,z){
var aa=this.$RelayStoreReader_rangeData.parseRangeClientID
(z.storeDataID);

if(aa!=null){
z.componentDataID=z.storeDataID;
z.storeDataID=aa.dataID;
z.rangeInfo=this.$RelayStoreReader_recordStore.getRangeMetadata
(z.storeDataID,
c('callsFromGraphQL')(aa.calls,aa.callValues));}};










function s(y){
if(!y.__hasValidatedConnectionCalls__){
var z=y.getCallsWithValues();
if(!c('RelayConnectionInterface').hasRangeCalls(z))
u.traverse(y,y);

y.__hasValidatedConnectionCalls__=true;}}

k=babelHelpers.inherits
(t,c('RelayQueryVisitor'));l=k&&k.prototype;t.prototype.
visitField=
function(y,
z){

var aa=y.getSchemaName();

aa!==n&&
aa!==o||h(0,
'readRelayQueryData(): The field `%s` is a connection. Fields `%s` and '+
'`%s` cannot be fetched without a `first`, `last` or `find` argument.',
z.getApplicationName(),
n,
o);};

function t(){k.apply(this,arguments);}

var u=new t();











function v(y){
if(y.componentDataID!=null){
return y.componentDataID;}else 

return y.storeDataID;}






function w(y){
var z=y.data;
if(!z)
z=y.data=c('RelayRecord').create(v(y));


z instanceof Object||h(0,
'readRelayQueryData(): Unable to read field on non-object.');

return z;}







function x(y,z){
var aa=w(y);
return aa[z];}


f.exports=c('RelayProfiler').instrument
('readRelayQueryData',
q);}),null);

/** shared/relay/oss/react-relay/classic/legacy/store/GraphQLStoreQueryResolver.js */























__d('GraphQLStoreQueryResolver',['RelayProfiler','readRelayQueryData','recycleNodesInto','warning'],(function a(b,c,d,e,f,g){

'use strict';
































function h
(k,
l,
m){

this.dispose();
this.$GraphQLStoreQueryResolver_callback=m;
this.$GraphQLStoreQueryResolver_fragment=l;
this.$GraphQLStoreQueryResolver_resolver=null;
this.$GraphQLStoreQueryResolver_storeData=k;}
h.prototype.





dispose=function(){
if(this.$GraphQLStoreQueryResolver_resolver)
this.$GraphQLStoreQueryResolver_resolver.dispose();};

h.prototype.

resolve=
function(k,
l){


if(this.$GraphQLStoreQueryResolver_fragment.getConcreteFragmentID()!==
k.getConcreteFragmentID())

c('warning')
(false,
'GraphQLStoreQueryResolver: Expected `resolve` to be called with the '+
'same concrete fragment as the constructor. The resolver was created '+
'with fragment `%s` but resolved with fragment `%s`.',
this.$GraphQLStoreQueryResolver_fragment.getDebugName(),
k.getDebugName());







if(Array.isArray(l)){

c('warning')
(k.isPlural(),
'GraphQLStoreQueryResolver: Expected id/fragment plurality to be '+
'consistent: got plural ids for singular fragment `%s`.',
k.getDebugName());

var m=this.$GraphQLStoreQueryResolver_resolver;
if(m instanceof j){
m.dispose();
m=null;}

if(!m)
m=new i
(this.$GraphQLStoreQueryResolver_storeData,
this.$GraphQLStoreQueryResolver_callback);


this.$GraphQLStoreQueryResolver_resolver=m;
return m.resolve(k,l);}else{


c('warning')
(!k.isPlural(),
'GraphQLStoreQueryResolver: Expected id/fragment plurality to be '+
'consistent: got a singular id for plural fragment `%s`.',
k.getDebugName());

var n=this.$GraphQLStoreQueryResolver_resolver;
if(n instanceof i){
n.dispose();
n=null;}

if(!n)
n=new j
(this.$GraphQLStoreQueryResolver_storeData,
this.$GraphQLStoreQueryResolver_callback);


this.$GraphQLStoreQueryResolver_resolver=n;
return n.resolve(k,l);}};













function i(k,l){
this.dispose();
this.$GraphQLStorePluralQueryResolver_callback=l;
this.$GraphQLStorePluralQueryResolver_storeData=k;}
i.prototype.

dispose=function(){
if(this.$GraphQLStorePluralQueryResolver_resolvers)
this.$GraphQLStorePluralQueryResolver_resolvers.forEach(function(k){return k.dispose();});

this.$GraphQLStorePluralQueryResolver_resolvers=[];
this.$GraphQLStorePluralQueryResolver_results=[];};
i.prototype.








resolve=
function(k,
l){

var m=this.$GraphQLStorePluralQueryResolver_results,
n=void 0,

o=m.length,
p=l.length,
q=this.$GraphQLStorePluralQueryResolver_resolvers;


while(q.length<p)
q.push
(new j(this.$GraphQLStorePluralQueryResolver_storeData,this.$GraphQLStorePluralQueryResolver_callback));


while(q.length>p)
q.pop().dispose();



if(o!==p)
n=[];

for(var r=0;r<p;r++){
var s=q[r].resolve(k,l[r]);
if(n||r>=o||s!==m[r]){
n=n||m.slice(0,r);
n.push(s);}}



if(n)
this.$GraphQLStorePluralQueryResolver_results=n;

return this.$GraphQLStorePluralQueryResolver_results;};

















function j(k,l){
this.dispose();
this.$GraphQLStoreSingleQueryResolver_callback=l;
this.$GraphQLStoreSingleQueryResolver_garbageCollector=k.getGarbageCollector();
this.$GraphQLStoreSingleQueryResolver_storeData=k;
this.$GraphQLStoreSingleQueryResolver_subscribedIDs={};}
j.prototype.

dispose=function(){
if(this.$GraphQLStoreSingleQueryResolver_subscription)
this.$GraphQLStoreSingleQueryResolver_subscription.remove();

this.$GraphQLStoreSingleQueryResolver_hasDataChanged=false;
this.$GraphQLStoreSingleQueryResolver_fragment=null;
this.$GraphQLStoreSingleQueryResolver_result=null;
this.$GraphQLStoreSingleQueryResolver_resultID=null;
this.$GraphQLStoreSingleQueryResolver_subscription=null;
this.$GraphQLStoreSingleQueryResolver_updateGarbageCollectorSubscriptionCount({});
this.$GraphQLStoreSingleQueryResolver_subscribedIDs={};};
j.prototype.




resolve=
function(k,
l){

var m=this.$GraphQLStoreSingleQueryResolver_fragment,
n=this.$GraphQLStoreSingleQueryResolver_resultID,
o=void 0,
p=this.$GraphQLStoreSingleQueryResolver_result,
q=void 0;


if(m!=null&&
n!=null&&
this.$GraphQLStoreSingleQueryResolver_getCanonicalID(n)===this.$GraphQLStoreSingleQueryResolver_getCanonicalID(l)){


if(n!==l||
this.$GraphQLStoreSingleQueryResolver_hasDataChanged||
!k.isEquivalent(m)){
var r=


this.$GraphQLStoreSingleQueryResolver_resolveFragment
(k,
l);o=r[0];q=r[1];

o=c('recycleNodesInto')(p,o);}else 


o=p;}else{

var s=

this.$GraphQLStoreSingleQueryResolver_resolveFragment
(k,
l);o=s[0];q=s[1];}




if(p!==o){
if(this.$GraphQLStoreSingleQueryResolver_subscription){
this.$GraphQLStoreSingleQueryResolver_subscription.remove();
this.$GraphQLStoreSingleQueryResolver_subscription=null;}

if(q){

q[l]=true;
var t=this.$GraphQLStoreSingleQueryResolver_storeData.getChangeEmitter();
this.$GraphQLStoreSingleQueryResolver_subscription=t.addListenerForIDs
(Object.keys(q),
this.$GraphQLStoreSingleQueryResolver_handleChange.bind(this));

this.$GraphQLStoreSingleQueryResolver_updateGarbageCollectorSubscriptionCount(q);
this.$GraphQLStoreSingleQueryResolver_subscribedIDs=q;}

this.$GraphQLStoreSingleQueryResolver_resultID=l;
this.$GraphQLStoreSingleQueryResolver_result=o;}


this.$GraphQLStoreSingleQueryResolver_hasDataChanged=false;
this.$GraphQLStoreSingleQueryResolver_fragment=k;

return this.$GraphQLStoreSingleQueryResolver_result;};
j.prototype.






$GraphQLStoreSingleQueryResolver_getCanonicalID=function(k){
return this.$GraphQLStoreSingleQueryResolver_storeData.getRangeData().getCanonicalClientID(k);};
j.prototype.

$GraphQLStoreSingleQueryResolver_handleChange=function(){
if(!this.$GraphQLStoreSingleQueryResolver_hasDataChanged){
this.$GraphQLStoreSingleQueryResolver_hasDataChanged=true;
this.$GraphQLStoreSingleQueryResolver_callback();}};

j.prototype.

$GraphQLStoreSingleQueryResolver_resolveFragment=
function(k,
l){
var m=
c('readRelayQueryData')(this.$GraphQLStoreSingleQueryResolver_storeData,k,l),n=m.data,o=m.dataIDs;
return [n,o];};
j.prototype.




$GraphQLStoreSingleQueryResolver_updateGarbageCollectorSubscriptionCount=
function(k){
var l,m=this;
if(this.$GraphQLStoreSingleQueryResolver_garbageCollector)(function(){
var n=m.$GraphQLStoreSingleQueryResolver_garbageCollector,
o=m.$GraphQLStoreSingleQueryResolver_storeData.getRangeData(),
p=m.$GraphQLStoreSingleQueryResolver_subscribedIDs;






Object.keys(k).forEach(function(q){
q=o.getCanonicalClientID(q);
n.incrementReferenceCount(q);});

Object.keys(p).forEach(function(q){
q=o.getCanonicalClientID(q);
n.decrementReferenceCount(q);});})
();};




c('RelayProfiler').instrumentMethods(h.prototype,
{resolve:'GraphQLStoreQueryResolver.resolve'});


f.exports=h;}),null);

/** shared/relay/oss/react-relay/classic/legacy/store/GraphQLStoreRangeUtils.js */






















__d('GraphQLStoreRangeUtils',['callsFromGraphQL','serializeRelayQueryCall'],(function a(b,c,d,e,f,g){

'use strict';

































function h(){
this.$GraphQLStoreRangeUtils_rangeData={};
this.$GraphQLStoreRangeUtils_rangeDataKeyMap={};}
h.prototype.











getClientIDForRangeWithID=function(i,j,k){
var l=c('callsFromGraphQL')(i,j).
map(function(p){return c('serializeRelayQueryCall')(p).substring(1);}).
join(','),
m=k+'_'+l,
n=this.$GraphQLStoreRangeUtils_rangeData[m];
if(!n){
this.$GraphQLStoreRangeUtils_rangeData[m]=
{dataID:k,
calls:i,
callValues:j};

var o=this.$GraphQLStoreRangeUtils_rangeDataKeyMap[k];
if(!o)
this.$GraphQLStoreRangeUtils_rangeDataKeyMap[k]=o=[];

o.push(m);}

return m;};
h.prototype.







parseRangeClientID=function(i){
return this.$GraphQLStoreRangeUtils_rangeData[i]||null;};
h.prototype.









getCanonicalClientID=function(i){
return this.$GraphQLStoreRangeUtils_rangeData[i]?this.$GraphQLStoreRangeUtils_rangeData[i].dataID:i;};
h.prototype.

removeRecord=function(i){
var j=this.$GraphQLStoreRangeUtils_rangeDataKeyMap[i];
if(j){
j.forEach(function(k){
delete this.$GraphQLStoreRangeUtils_rangeData[k];}.
bind(this));
delete this.$GraphQLStoreRangeUtils_rangeDataKeyMap[i];}};




f.exports=h;}),null);

/** shared/relay/oss/react-relay/classic/legacy/store/generateClientEdgeID.js */























__d('generateClientEdgeID',[],(function a(b,c,d,e,f,g){

'use strict';







function h(i,j){
return 'client:'+i+':'+j;}


f.exports=h;}),null);

/** shared/relay/oss/react-relay/classic/legacy/store/generateClientID.js */























__d('generateClientID',['crc32','performanceNow'],(function a(b,c,d,e,f,g){

'use strict';




var h=1,
i='client:'+c('crc32')(''+c('performanceNow')());







function j(){
return i+h++;}


f.exports=j;}),null);

/** shared/relay/oss/react-relay/classic/mutation/RelayMutationTransactionStatus.js */























__d('RelayMutationTransactionStatus',[],(function a(b,c,d,e,f,g){

'use strict';

var h=




{CREATED:'CREATED',






UNCOMMITTED:'UNCOMMITTED',





COMMIT_QUEUED:'COMMIT_QUEUED',







COLLISION_COMMIT_FAILED:'COLLISION_COMMIT_FAILED',




COMMITTING:'COMMITTING',




COMMIT_FAILED:'COMMIT_FAILED',




ROLLED_BACK:'ROLLED_BACK'};


f.exports=h;}),null);

/** shared/relay/oss/react-relay/classic/mutation/RelayGraphQLMutation.js */























__d('RelayGraphQLMutation',['invariant','QueryBuilder','RelayMetaRoute','RelayMutationTransactionStatus','RelayQuery','RelayConnectionInterface'],(function a(b,c,d,e,f,g,h){

'use strict';








var i=c('RelayConnectionInterface').CLIENT_MUTATION_ID,















j='RelayGraphQLMutation',
k=0;l.































create=
function(o,
p,
q){

return new l(o,p,null,q);};
l.






createWithFiles=
function(o,
p,
q,
r){

return new l(o,p,q,r);};














































function l
(o,
p,
q,
r,
s,
t){

this.$RelayGraphQLMutation_query=o;
this.$RelayGraphQLMutation_variables=p;
this.$RelayGraphQLMutation_files=q||null;
this.$RelayGraphQLMutation_environment=r;
this.$RelayGraphQLMutation_callbacks=s||null;
this.$RelayGraphQLMutation_collisionKey=
t||
j+':collisionKey:'+m();
this.$RelayGraphQLMutation_transaction=null;}
l.prototype.












applyOptimistic=
function(o,
p,
q){


!this.$RelayGraphQLMutation_transaction||h(0,
'RelayGraphQLMutation: `applyOptimistic()` was called on an instance '+
'that already has a transaction in progress.');

this.$RelayGraphQLMutation_transaction=this.$RelayGraphQLMutation_createTransaction
(o,
p);

return this.$RelayGraphQLMutation_transaction.applyOptimistic(q);};
l.prototype.












commit=function(o){
if(!this.$RelayGraphQLMutation_transaction)
this.$RelayGraphQLMutation_transaction=this.$RelayGraphQLMutation_createTransaction();

return this.$RelayGraphQLMutation_transaction.commit(o);};
l.prototype.

rollback=function(){
if(this.$RelayGraphQLMutation_transaction)
return this.$RelayGraphQLMutation_transaction.rollback();};

l.prototype.

$RelayGraphQLMutation_createTransaction=
function(o,
p){

return new n
(this.$RelayGraphQLMutation_environment,
this.$RelayGraphQLMutation_query,
this.$RelayGraphQLMutation_variables,
this.$RelayGraphQLMutation_files,
o,
p,
this.$RelayGraphQLMutation_collisionKey,
this.$RelayGraphQLMutation_callbacks);};




function m(){
return k++;}





























function n
(o,
p,
q,
r,
s,
t,
u,
v){

this.$PendingGraphQLTransaction_configs=[];
this.$PendingGraphQLTransaction_query=p;
this.$PendingGraphQLTransaction_variables=q;
this.$PendingGraphQLTransaction_files=r;
this.$PendingGraphQLTransaction_optimisticQuery=s||null;
this.$PendingGraphQLTransaction_optimisticResponse=t||null;
this.$PendingGraphQLTransaction_collisionKey=u;
this.onFailure=v&&v.onFailure;
this.onSuccess=v&&v.onSuccess;
this.status=c('RelayMutationTransactionStatus').CREATED;
this.error=null;
this.$PendingGraphQLTransaction_mutation=null;
this.$PendingGraphQLTransaction_optimisticConfigs=null;
this.$PendingGraphQLTransaction_optimisticMutation=null;

this.mutationTransaction=o.
getStoreData().
getMutationQueue().
createTransactionWithPendingTransaction(this);

this.id=this.mutationTransaction.getID();}
n.prototype.



getCallName=function(){

this.$PendingGraphQLTransaction_mutation||h(0,
'RelayGraphQLMutation: `getCallName()` called but no mutation exists '+
'(`getQuery()` must be called first to construct the mutation).');

return this.$PendingGraphQLTransaction_mutation.getCall().name;};
n.prototype.

getCollisionKey=function(){
return this.$PendingGraphQLTransaction_collisionKey;};
n.prototype.

getConfigs=function(){
return this.$PendingGraphQLTransaction_configs;};
n.prototype.

getFiles=function(){
return this.$PendingGraphQLTransaction_files;};
n.prototype.

getOptimisticConfigs=function(){
return this.$PendingGraphQLTransaction_optimisticConfigs;};
n.prototype.

getOptimisticQuery=function(o){
if(!this.$PendingGraphQLTransaction_optimisticMutation&&this.$PendingGraphQLTransaction_optimisticQuery){
var p=c('QueryBuilder').getMutation(this.$PendingGraphQLTransaction_optimisticQuery),
q=c('RelayQuery').Mutation.create
(p,
c('RelayMetaRoute').get('$RelayGraphQLMutation'),
this.$PendingGraphQLTransaction_getVariables());

this.$PendingGraphQLTransaction_optimisticMutation=
q;}

return this.$PendingGraphQLTransaction_optimisticMutation;};
n.prototype.

getOptimisticResponse=function(){var o;
return babelHelpers['extends']({},
this.$PendingGraphQLTransaction_optimisticResponse,(o={},o[
i]=this.id,o));};

n.prototype.

getQuery=function(o){
if(!this.$PendingGraphQLTransaction_mutation){
var p=c('QueryBuilder').getMutation(this.$PendingGraphQLTransaction_query),
q=c('RelayQuery').Mutation.create
(p,
c('RelayMetaRoute').get('$RelayGraphQLMutation'),
this.$PendingGraphQLTransaction_getVariables());

this.$PendingGraphQLTransaction_mutation=q;}

return this.$PendingGraphQLTransaction_mutation;};
n.prototype.



commit=function(o){
if(o)
this.$PendingGraphQLTransaction_configs=o;

return this.mutationTransaction.commit();};
n.prototype.

applyOptimistic=
function(o){

if(o)
this.$PendingGraphQLTransaction_optimisticConfigs=o;

return this.mutationTransaction.applyOptimistic();};
n.prototype.

rollback=function(){
this.mutationTransaction.rollback();};
n.prototype.

$PendingGraphQLTransaction_getVariables=function(){var o,
p=this.$PendingGraphQLTransaction_variables.input;
if(!p)

h(0,
'RelayGraphQLMutation: Required `input` variable is missing '+
'(supplied variables were: [%s]).',
Object.keys(this.$PendingGraphQLTransaction_variables).join(', '));


return babelHelpers['extends']({},
this.$PendingGraphQLTransaction_variables,
{input:babelHelpers['extends']({},
p,(o={},o[
i]=this.id,o))});};





f.exports=l;}),null);

/** shared/relay/oss/react-relay/classic/traversal/printRelayOSSQuery.js */























__d('printRelayOSSQuery',['invariant','Map','RelayProfiler','RelayQuery','base62','nullthrows','RelayNodeInterface'],(function a(b,c,d,e,f,g,h){

'use strict';









var i=c('RelayNodeInterface').TYPENAME,
















j='',
k='',






l=' {'+k+j+i+k+'}';







function m(y){
var z=[],
aa=new (c('Map'))(),
ba=
{fragmentCount:0,
fragmentNameByHash:{},
fragmentNameByText:{},
fragmentTexts:z,
variableCount:0,
variableMap:aa},

ca=null;
if(y instanceof c('RelayQuery').Root){
ca=o(y,ba);}else
if(y instanceof c('RelayQuery').Operation){
ca=p(y,ba);}else
if(y instanceof c('RelayQuery').Fragment){
ca=s(y,ba);}else
if(y instanceof c('RelayQuery').OSSQuery)
ca=n(y,ba);


ca||h(0,
'printRelayOSSQuery(): Unsupported node type, got `%s`.',
y);

var da={};
aa.forEach(function(ea){
ea.forEach(function(fa){var ga=fa.value,ha=fa.variableID;
da[ha]=ga;});});




return {text:[ca].concat(z).join(k.length?k:' '),
variables:da};}






function n
(y,
z){

var aa=t(y,z,j)||l,
ba=u(y),

ca=q(z);
return 'query '+y.getName()+ca+
ba+aa;}





function o
(y,
z){


!y.getBatchCall()||h(0,
'printRelayOSSQuery(): Deferred queries are not supported.');

var aa=y.getIdentifyingArg(),
ba=aa&&aa.name||null,
ca=aa&&aa.type||null,
da=aa&&aa.value||null,
ea=y.getFieldName();
if(da!=null){

ba||h(0,
'printRelayOSSQuery(): Expected an argument name for root field `%s`.',
ea);

var fa=w
(ba,
da,
ca,
z);

if(fa)
ea+='('+fa+')';}



var ga=t(y,z,j),
ha=y.getName()+q(z);
ea+=u(y);

if(ga==null)
return 'query '+ha+l;


return 'query '+ha+' {'+k+
j+ea+ga+k+'}';}


function p
(y,
z){

var aa=y instanceof c('RelayQuery').Mutation?
'mutation':
'subscription',
ba=y.getCall(),
ca=w
(y.getCallVariableName(),
ba.value,
y.getInputType(),
z);


ca||h(0,
'printRelayOSSQuery(): Expected %s `%s` to have a value for `%s`.',
aa,
y.getName(),
y.getCallVariableName());


var da=t(y,z,j)||l,
ea=
y.getName()+q(z),
fa=ba.name+'('+ca+')';

return aa+' '+ea+' {'+k+
j+fa+da+k+'}';}



function q(y){var z=y.variableMap,
aa=null;
z.forEach(function(ba,ca){
ba.forEach(function(da){var ea=da.variableID;
aa=aa||[];
aa.push('$'+ea+':'+ca);});});


if(aa)
return '('+aa.join(',')+')';

return '';}


function r(y){
if(y.endsWith('!'))
return y;

return y+'!';}


function s
(y,
z){

var aa=u(y);
return 'fragment '+y.getDebugName()+' on '+
y.getType()+aa+c('nullthrows')(t(y,z,''));}


function t
(y,
z,
aa){

var ba=[],
ca=y.getChildren(),
da=void 0;
for(var ea=0;ea<ca.length;ea++){
var fa=ca[ea];
if(fa instanceof c('RelayQuery').Field){
var ga=fa.getSchemaName(),
ha=fa.getCallsWithValues();
if(ha.length){
ga=fa.getSerializationKey()+':'+ga;
var ia=[];
for(var ja=0;ja<ha.length;ja++){var ka=
ha[ja],la=ka.name,ma=ka.value,
na=w
(la,
ma,
fa.getCallType(la),
z);

if(na)
ia.push(na);}


if(ia.length)
ga+='('+ia.join(',')+')';}


ga+=u(fa);
if(fa.canHaveSubselections()){
var oa=t(fa,z,aa+j);
if(oa!=null){
ga+=oa;
ba.push(ga);}}else 


ba.push(ga);}else

if(fa instanceof c('RelayQuery').Fragment){
if(fa.getChildren().length){

var pa=


z.fragmentNameByHash,qa=z.fragmentNameByText,ra=z.fragmentTexts,


sa=fa.getCompositeHash(),

ta=void 0;
if(Object.prototype.hasOwnProperty.call(pa,sa)){
ta=pa[sa];}else{


var ua=c('nullthrows')(t(fa,z,'')),
va=
fa.getType()+
u(fa)+
ua;
if(Object.prototype.hasOwnProperty.call(qa,va)){
ta=qa[va];}else{

ta='F'+c('base62')(z.fragmentCount++);
pa[sa]=ta;
qa[va]=ta;
ra.push
('fragment '+ta+' on '+va);}}



if(!da||!Object.prototype.hasOwnProperty.call(da,ta)){
da=da||{};
da[ta]=true;
ba.push('...'+ta);}}}else 




h(0,
'printRelayOSSQuery(): Expected a field or fragment, got `%s`.',
fa.constructor.name);}



if(!ba.length)
return null;

return ' {'+k+aa+j+
ba.join(','+k+aa+j)+k+
aa+'}';}


function u(y){
var z=void 0;
y.getDirectives().forEach(function(aa){
var ba='@'+aa.name;
if(aa.args.length)
ba+=
'('+aa.args.map(v).join(',')+')';

z=z||[];
z.push(ba);});

if(!z)
return '';

return ' '+z.join(' ');}


function v(y){var z=y.name,aa=y.value;

typeof aa==='boolean'||
typeof aa==='number'||
typeof aa==='string'||h(0,
'printRelayOSSQuery(): Relay only supports directives with scalar values '+
'(boolean, number, or string), got `%s: %s`.',
z,
aa);

return z+':'+JSON.stringify(aa);}


function w
(y,
z,
aa,
ba){

if(z==null)
return z;

var ca=void 0;
if(aa!=null){
var da=x(y,z,aa,ba);
ca='$'+da;}else 

ca=JSON.stringify(z);

return y+':'+ca;}


function x
(y,
z,
aa,
ba){


z!=null||h(0,
'printRelayOSSQuery: Expected a non-null value for variable `%s`.',
y);

var ca=JSON.stringify(z),
da=r(aa),
ea=ba.variableMap.get(da);
if(!ea){
ea=new (c('Map'))();
ba.variableMap.set(da,ea);}

var fa=ea.get(ca);
if(fa){
return fa.variableID;}else{

var ga=y+'_'+c('base62')(ba.variableCount++);
ea.set(ca,
{value:z,
variableID:ga});

return ga;}}



f.exports=c('RelayProfiler').instrument
('printRelayQuery',
m);}),null);

/** shared/relay/oss/react-relay/classic/traversal/printRelayQuery.js */























__d('printRelayQuery',['RelayQuery','printRelayOSSQuery'],(function a(b,c,d,e,f,g){

'use strict';













var h=c('printRelayOSSQuery');

f.exports=function i(j){
return h(j);};


f.exports.injectImpl=function i
(j){

h=j;};}),
null);

/** shared/relay/oss/react-relay/classic/mutation/RelayMutationDebugPrinter.js */























__d('RelayMutationDebugPrinter',['printRelayQuery'],(function a(b,c,d,e,f,g){

'use strict';









var h=
{printOptimisticMutation:function i
(j,
k){


if(!console.groupCollapsed||!console.groupEnd)
return;

h.printMutation(j,'Optimistic');

console.groupCollapsed('Optimistic Response');

console.groupEnd();},



printMutation:function i(j,k){

if(!console.groupCollapsed||!console.groupEnd)
return;

var l=j?c('printRelayQuery')(j):null;
k=k||'Mutation';

console.groupCollapsed(k+' Variables');

console.groupEnd();

console.groupCollapsed(k+' Query');

console.groupEnd();}};





f.exports=h;}),null);

/** shared/relay/oss/react-relay/classic/mutation/RelayMutationType.js */























__d('RelayMutationType',[],(function a(b,c,d,e,f,g){

'use strict';

var h=
{FIELDS_CHANGE:'FIELDS_CHANGE',
NODE_DELETE:'NODE_DELETE',
RANGE_ADD:'RANGE_ADD',
RANGE_DELETE:'RANGE_DELETE',
REQUIRED_CHILDREN:'REQUIRED_CHILDREN'};


f.exports=h;}),null);

/** shared/relay/oss/react-relay/classic/mutation/RelayOptimisticMutationUtils.js */























__d('RelayOptimisticMutationUtils',['invariant','RelayConnectionInterface','RelayNodeInterface','RelayQuery','RelayRecord','forEachObject','warning'],(function a(b,c,d,e,f,g,h){

'use strict';










var i=/^(\w+)(?:\((.+?)\))?$/,
j=/(\w+)(?=\s*:)/,
k=/^\w+(?:\.\w+\(.*?\))+$/,
l=/^(\w+)\((.*?)\)$/,
m=c('RelayConnectionInterface').NODE,n=c('RelayConnectionInterface').EDGES,
o=c('RelayNodeInterface').ANY_TYPE,p=c('RelayNodeInterface').ID,

q=c('RelayQuery').Field.build
({fieldName:p,
type:'String'}),

r=c('RelayQuery').Field.build
({fieldName:'cursor',
type:'String'}),





s=





{inferRelayFieldsFromData:function w
(x){

var y=[];
c('forEachObject')(x,function(z,aa){
if(!c('RelayRecord').isMetadataKey(aa))
y.push(t(z,aa));});


return y;},






inferRelayPayloadFromData:function w
(x){

var y=x;
c('forEachObject')(x,function(z,aa){
if(!c('RelayRecord').isMetadataKey(aa)){var ba=
u(z,aa),ca=ba.newValue,da=ba.newKey;
if(da!==aa){var ea;
y=babelHelpers['extends']({},y,(ea={},ea[da]=ca,ea));
delete y[aa];}else
if(ca!==z){var fa;
y=babelHelpers['extends']({},y,(fa={},fa[aa]=ca,fa));}}});



return y;}};



function t(w,x){
var y=
{canHaveSubselections:true,
isPlural:false},

z=void 0;
if(Array.isArray(w)){
var aa=w[0];
if(aa&&typeof aa==='object'){
z=s.inferRelayFieldsFromData(aa);}else{

y.canHaveSubselections=false;
z=[];}

y.isPlural=true;}else
if(typeof w==='object'&&w!==null){
z=s.inferRelayFieldsFromData(w);}else{

y.canHaveSubselections=false;
z=[];}

if(x===m){
z.push(q);}else
if(x===n)
z.push(r);

return v(x,z,y);}


function u
(w,
x){

var y=
{canHaveSubselections:true,
isPlural:false},

z=w;
if(Array.isArray(w)&&Array.isArray(z)){
for(var aa=0;aa<w.length;aa++){
var ba=w[aa];
if(ba&&typeof ba==='object'){
var ca=
s.inferRelayPayloadFromData(ba);
if(ca!==ba){
z=z.slice();
z[aa]=ca;}}else 


y.canHaveSubselections=false;}


y.isPlural=true;}else
if(typeof w==='object'&&w!==null){
z=s.inferRelayPayloadFromData(w);}else 

y.canHaveSubselections=false;


var da=v(x,[],y);
return {newValue:z,newKey:da.getSerializationKey()};}


function v
(w,
x,
y){
var z,
aa=w,
ba=null;
if(k.test(w)){
c('warning')
(false,
'RelayOptimisticMutationUtils: Encountered an optimistic payload with '+
'a deprecated field call string, `%s`. Use valid GraphQL OSS syntax.',
w);

var ca=w.split('.');
if(ca.length>1){
aa=ca.shift();
ba=ca.map(function(fa){
var ga=fa.match(l);

ga||h(0,
'RelayOptimisticMutationUtils: Malformed data key, `%s`.',
w);

var ha=ga[2].split(',');

return {name:ga[1],
value:ha.length===1?ha[0]:ha};});}}else{




var da=w.match(i);

da||h(0,
'RelayOptimisticMutationUtils: Malformed data key, `%s`.',
w);

aa=da[1];
if(da[2])
try{(function(){

var fa=JSON.parse
('{'+da[2].replace(j,'"$1"')+'}');

ba=Object.keys(fa).map(function(ga){return {name:ga,value:fa[ga]};});})();}catch(
ea){

h(0,
'RelayOptimisticMutationUtils: Malformed or unsupported data key, '+
'`%s`. Only booleans, strings, and numbers are currently supported, '+
'and commas are required. Parse failure reason was `%s`.',
w,
ea.message);}}








return c('RelayQuery').Field.build
({calls:ba,
children:x,
fieldName:aa,
metadata:y,
type:o});}



f.exports=s;}),null);

/** shared/relay/oss/react-relay/classic/traversal/flattenRelayQuery.js */























__d('flattenRelayQuery',['Map','RelayProfiler','RelayQuery','RelayQueryVisitor'],(function a(b,c,d,e,f,g){

'use strict';var h,i;



























function j
(m,
n){

var o=new l
(n&&n.shouldRemoveFragments),

p=
{node:m,
type:m.getType(),
flattenedFieldMap:new (c('Map'))(),
flattenedFragmentMap:new (c('Map'))()};

o.traverse(m,p);
return k(m,p,!!(n&&n.preserveEmptyNodes));}


function k
(m,n,




o){
var p=n.flattenedFieldMap,q=n.flattenedFragmentMap,
r=[],
s=Array.from(p.keys());
s.forEach(function(t){
var u=p.get(t);
if(u)
r.push(k(u.node,u,o));});


Array.from(q.keys()).forEach(function(t){
var u=q.get(t);
if(u)
r.push(k(u.node,u,o));});




if(o&&m.canHaveSubselections()&&!r.length)
return m;

return m.clone(r);}
h=babelHelpers.inherits

(l,c('RelayQueryVisitor'));i=h&&h.prototype;


function l(m){
i.constructor.call(this);
this.$RelayQueryFlattener_shouldRemoveFragments=!!m;}
l.prototype.

visitFragment=
function(m,
n){

var o=m.getType();
if(this.$RelayQueryFlattener_shouldRemoveFragments||o===n.type){
this.traverse(m,n);
return;}

var p=n.flattenedFragmentMap.get(o);
if(!p){
p=
{node:m,
type:o,
flattenedFieldMap:new (c('Map'))(),
flattenedFragmentMap:new (c('Map'))()};

n.flattenedFragmentMap.set(o,p);}

this.traverse(m,p);};
l.prototype.

visitField=
function(m,
n){

var o=m.getShallowHash(),
p=n.flattenedFieldMap.get(o);
if(!p){
p=
{node:m,
type:m.getType(),
flattenedFieldMap:new (c('Map'))(),
flattenedFragmentMap:new (c('Map'))()};

n.flattenedFieldMap.set(o,p);}

this.traverse(m,p);};



f.exports=c('RelayProfiler').instrument
('flattenRelayQuery',
j);}),null);

/** shared/relay/oss/react-relay/classic/mutation/getRangeBehavior.js */























__d('getRangeBehavior',['invariant','serializeRelayQueryCall'],(function a(b,c,d,e,f,g,h){

'use strict';




















function i
(k,
l){

if(typeof k==='function'){
var m=j(l);
return k(m);}else{

var n=
l.map(c('serializeRelayQueryCall')).sort().join('').slice(1),
o=k[n];
if(o==null)
return null;


typeof o==='string'||h(0,
'getRangeBehavior(): Expected range behavior for key `%s` to be a '+
'string, got `%s`.',
n,
o);

return o;}}













function j
(k){

var l={};
k.forEach(function(m){
l[m.name]=m.value;});

return l;}


f.exports=i;}),null);

/** shared/relay/oss/react-relay/classic/traversal/intersectRelayQuery.js */























__d('intersectRelayQuery',['invariant','RelayConnectionInterface','RelayQuery','RelayQueryTransform'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,k,l;























function m
(u,
v,
w){

w=w||r;
var x=new n(w);
return x.traverse(u,v);}
i=babelHelpers.inherits

(n,c('RelayQueryTransform'));j=i&&i.prototype;


function n(u){
j.constructor.call(this);
this.$RelayQueryIntersector_filterUnterminatedRange=u;}
n.prototype.

traverse=
function(u,
v){

if(!u.canHaveSubselections())

return u;

if(!s(v)){
if(u instanceof c('RelayQuery').Field&&
u.isConnection()&&
this.$RelayQueryIntersector_filterUnterminatedRange(u))
return q(u);



return u;}

return u.clone(u.getChildren().map(function(w){
if(w instanceof c('RelayQuery').Fragment)
return this.visit(w,v);

if(w instanceof c('RelayQuery').Field){
var x=w.getSchemaName(),
y=void 0,
z=v.getChildren();
for(var aa=0;aa<z.length;aa++){
var ba=z[aa];

ba instanceof c('RelayQuery').Field||h(0,
'intersectRelayQuery(): Nodes in `patternNode` must be fields.');

if(ba.getSchemaName()===x){
y=ba;
break;}}


if(y)
return this.visit(w,y);}


return null;}.
bind(this)));};
k=babelHelpers.inherits





(o,c('RelayQueryTransform'));l=k&&k.prototype;o.prototype.
visitField=function(u){
var v=u.getSchemaName();
if(v===c('RelayConnectionInterface').EDGES||
v===c('RelayConnectionInterface').PAGE_INFO){
return null;}else 

return u;};

function o(){k.apply(this,arguments);}


var p=new o();
function q(u){
return p.traverse(u,undefined);}


function r(){
return false;}


function s(u){
return !u.getChildren().every(t);}


function t(u){
return u.isGenerated();}


f.exports=m;}),null);

/** shared/relay/oss/react-relay/classic/mutation/RelayMutationQuery.js */























__d('RelayMutationQuery',['invariant','RelayConnectionInterface','RelayMetaRoute','RelayMutationType','RelayNodeInterface','RelayOptimisticMutationUtils','RelayQuery','RelayRecord','flattenRelayQuery','forEachObject','getRangeBehavior','intersectRelayQuery','nullthrows','warning','GraphQLMutatorConstants','RelayMutationDebugPrinter','serializeRelayQueryCall'],(function a(b,c,d,e,f,g,h){

'use strict';

















var i=c('GraphQLMutatorConstants').REFETCH,











































j=c('RelayConnectionInterface').CLIENT_MUTATION_ID,
k=c('RelayNodeInterface').ANY_TYPE,l=c('RelayNodeInterface').ID,m=c('RelayNodeInterface').TYPENAME,











n=








{buildFragmentForFields:function w(x){





var y=x.fatQuery,z=x.fieldIDs,aa=x.tracker,
ba=[];
c('forEachObject')(z,function(ca,da){
var ea=o(y,da),
fa=[].concat(ca),
ga=[];
fa.forEach(function(ja){
ga.push.apply(ga,aa.getTrackedChildrenForID(ja));});

var ha=ea.clone(ga),
ia=null;
if(ha){
ia=c('intersectRelayQuery')(ha,ea);
if(ia)
ba.push(ia);}});
























return p(y,ba);},


















buildFragmentForEdgeDeletion:function w(x){







var y=x.fatQuery,z=x.connectionName,aa=x.parentID,ba=x.parentName,ca=x.tracker,
da=o(y,ba);



u(da,ba,z);

var ea=[],
fa=da.clone
(ca.getTrackedChildrenForID(aa));

if(fa){
var ga=function ia(ja){
return (ja.getSchemaName()===z);},

ha=c('intersectRelayQuery')
(fa,
da,
ga);

if(ha){

u(ha,ba,z);

ea.push(ha);}}


return p(y,ea);},






















buildFragmentForEdgeInsertion:function w(x){









var y,z=x.fatQuery,aa=x.connectionName,ba=x.parentID,ca=x.edgeName,da=x.parentName,ea=x.rangeBehaviors,fa=x.tracker,
ga=[],
ha={},
ia=fa.getTrackedChildrenForID(ba),
ja=[];
ia.forEach(function(oa){
ja.push.apply(ja,
v(oa,aa));});



if(ja.length)(function(){

t(da,aa,ja[0]);

var oa=[];
ja.forEach(function(pa){
var qa=v(pa,'edges');
if(!qa.length)
return;


var ra=pa.getRangeBehaviorCalls(),
sa=
c('getRangeBehavior')(ea,ra);








if(sa&&sa!==i){


qa.forEach(function(ta){
oa.push.apply(oa,ta.getChildren());});}else{




c('warning')
(sa===i,
'RelayMutation: The connection `%s` on the mutation field `%s` '+
'that corresponds to the ID `%s` did not match any of the '+
'`rangeBehaviors` specified in your RANGE_ADD config. This means '+
'that the entire connection will be refetched. Configure a range '+
'behavior for this mutation in order to fetch only the new edge '+
'and to enable optimistic mutations or use `refetch` to squelch '+
'this warning.',
pa.getStorageKey(),
da,
ba);

ha[pa.getShallowHash()]=true;}});


if(oa.length)
ga.push
(r(ba,ca,oa));})

();


if(da!=null){
var ka=o(z,da);



u(ka,da,aa);

var la=ka.clone(ia);
if(la){
var ma=function oa(pa){
return (pa.getSchemaName()===aa&&
!Object.prototype.hasOwnProperty.call(ha,pa.getShallowHash()));},

na=c('intersectRelayQuery')
(la,
ka,
ma);

if(na)
ga.push(na);}}




return p(z,ga);},





buildFragmentForOptimisticUpdate:function w(x){

var y=x.response,z=x.fatQuery,


aa=
c('RelayOptimisticMutationUtils').inferRelayFieldsFromData(y);


return p(z,aa);},





buildQueryForOptimisticUpdate:function w(x){





var y=x.fatQuery,z=x.mutation,aa=x.response,
ba=
[c('nullthrows')(n.buildFragmentForOptimisticUpdate
({response:aa,
fatQuery:y}))];


return c('RelayQuery').Mutation.build
('OptimisticQuery',
y.getType(),
z.calls[0].name,
null,
ba,
z.metadata);},









buildQuery:function w(x){















var y=x.configs,z=x.fatQuery,aa=x.input,ba=x.mutationName,ca=x.mutation,da=x.tracker,
ea=
[c('RelayQuery').Field.build
({fieldName:j,
type:'String',
metadata:{isRequisite:true}})];







y.forEach(function(fa){var ga;
switch(fa.type){
case c('RelayMutationType').REQUIRED_CHILDREN:
var ha=fa.children.map(function(la){
return (c('RelayQuery').Fragment.create
(la,
c('RelayMetaRoute').get('$buildQuery'),
{}));});


ea=ea.concat(ha);













break;

case c('RelayMutationType').RANGE_ADD:





ea.push(n.buildFragmentForEdgeInsertion
({connectionName:fa.connectionName,
edgeName:fa.edgeName,
fatQuery:z,
parentID:fa.parentID,
parentName:fa.parentName,
rangeBehaviors:s(fa.rangeBehaviors),
tracker:da}));






break;

case c('RelayMutationType').RANGE_DELETE:
case c('RelayMutationType').NODE_DELETE:
var ia=n.buildFragmentForEdgeDeletion
({connectionName:fa.connectionName,
fatQuery:z,
parentID:fa.parentID,
parentName:fa.parentName,
tracker:da});

ea.push(ia);
var ja=Array.isArray(fa.deletedIDFieldName)?
fa.deletedIDFieldName.concat(l):
[fa.deletedIDFieldName],
ka=q
(ja,
z);

ea.push(ka);




















break;

case c('RelayMutationType').FIELDS_CHANGE:





ea.push(n.buildFragmentForFields
({fatQuery:z,
fieldIDs:fa.fieldIDs,
tracker:da}));






break;



default:h(0,
'RelayMutationQuery: Unrecognized config key `%s` for `%s`.',
fa.type,
ba);}});








return c('RelayQuery').Mutation.build
(ba,
z.getType(),
ca.calls[0].name,
aa,
ea.filter(function(fa){return fa!=null;}),
ca.metadata);}};




function o
(w,
x){

var y=w.getFieldByStorageKey(x);

y||h(0,
'RelayMutationQuery: Invalid field name on fat query, `%s`.',
x);

return y;}


function p
(w,
x){

var y=c('RelayQuery').Fragment.build
('MutationQuery',
w.getType(),
x);



y instanceof c('RelayQuery').Fragment||h(0,
'RelayMutationQuery: Expected a fragment.');

return y;}


function q
(w,
x){


w.length>0||h(0,
'RelayMutationQuery: Invalid deleted node id name.');

var y=c('RelayQuery').Field.build
({fieldName:w[w.length-1],
type:'String'});

for(var z=w.length-2;z>=0;z--)
y=c('RelayQuery').Field.build
({fieldName:w[z],
type:k,
children:[y],
metadata:
{canHaveSubselections:true}});



return p(x,[y]);}


function r
(w,
x,
y){

var z=
[c('RelayQuery').Field.build
({fieldName:'cursor',
type:'String'}),

c('RelayQuery').Field.build
({fieldName:m,
type:'String'})];


if(c('RelayConnectionInterface').EDGES_HAVE_SOURCE_FIELD&&
!c('RelayRecord').isClientID(w))
z.push
(c('RelayQuery').Field.build
({children:
[c('RelayQuery').Field.build
({fieldName:l,
type:'String'}),

c('RelayQuery').Field.build
({fieldName:m,
type:'String'})],


fieldName:'source',
metadata:{canHaveSubselections:true},
type:k}));



z.push.apply(z,y);
var aa=c('flattenRelayQuery')(c('RelayQuery').Field.build
({children:z,
fieldName:x,
metadata:{canHaveSubselections:true},
type:k}));


aa instanceof c('RelayQuery').Field||h(0,
'RelayMutationQuery: Expected a field.');

return aa;}


function s
(w){






if(typeof w==='function')
return w;


var x=void 0;
c('forEachObject')(w,function(y,z){
if(z!==''){
var aa=z.

slice(0,-1).

split(/\)\./),
ba=aa.
sort().
join(').')+
(aa.length?')':'');
if(ba!==z){
x=x||[];
x.push(z);}}});



if(x)

h(0,
'RelayMutation: To define a range behavior key without sorting '+
'the arguments alphabetically is disallowed as of Relay 0.5.1. Please '+
'sort the argument names of the range behavior key%s `%s`%s.',
x.length===1?'':'s',
x.length===1?
x[0]:
x.length===2?
x[0]+'` and `'+x[1]:
x.slice(0,-1).join('`, `'),
x.length>2?', and `'+x.slice(-1)+'`':'');


return w;}






function t
(w,
x,
y){


y.isConnection()||h(0,
'RelayMutationQuery: Expected field `%s`%s to be a connection.',
x,
w?' on `'+w+'`':'');}









function u
(w,
x,
y){

var z=v(w,y);
if(z.length)

t(x,y,z[0]);}







function v
(w,
x){

var y=[];
function z(aa){
if(aa instanceof c('RelayQuery').Field)
if(aa.getSchemaName()===x){
y.push(aa);
return;}



if(aa===w||
aa instanceof c('RelayQuery').Fragment)



aa.getChildren().forEach(function(ba){return z(ba);});}


z(w);
return y;}


f.exports=n;}),null);

/** shared/relay/oss/react-relay/classic/network/RelayMutationRequest.js */























__d('RelayMutationRequest',['Deferred','printRelayQuery'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits















(j,c('Deferred'));i=h&&h.prototype;




function j
(k,
l){

i.constructor.call(this);
this.$RelayMutationRequest_mutation=k;
this.$RelayMutationRequest_printedQuery=null;
this.$RelayMutationRequest_files=l;}
j.prototype.






getDebugName=function(){
return this.$RelayMutationRequest_mutation.getName();};
j.prototype.






getFiles=function(){
return this.$RelayMutationRequest_files;};
j.prototype.







getVariables=function(){
return this.$RelayMutationRequest_getPrintedQuery().variables;};
j.prototype.






getQueryString=function(){
return this.$RelayMutationRequest_getPrintedQuery().text;};
j.prototype.





getMutation=function(){
return this.$RelayMutationRequest_mutation;};
j.prototype.






$RelayMutationRequest_getPrintedQuery=function(){
if(!this.$RelayMutationRequest_printedQuery)
this.$RelayMutationRequest_printedQuery=c('printRelayQuery')(this.$RelayMutationRequest_mutation);

return this.$RelayMutationRequest_printedQuery;};



f.exports=j;}),null);

/** shared/relay/oss/react-relay/classic/mutation/RelayMutationTransaction.js */























__d('RelayMutationTransaction',['invariant','RelayMutationTransactionStatus'],(function a(b,c,d,e,f,g,h){

'use strict';









var i=c('RelayMutationTransactionStatus').COLLISION_COMMIT_FAILED,
j=c('RelayMutationTransactionStatus').COMMIT_FAILED,
k=c('RelayMutationTransactionStatus').COMMIT_QUEUED,
l=c('RelayMutationTransactionStatus').CREATED,
m=c('RelayMutationTransactionStatus').UNCOMMITTED;










function n(o,p){this.$RelayMutationTransaction_rolledBack=false;
this.$RelayMutationTransaction_id=p;
this.$RelayMutationTransaction_mutationQueue=o;}
n.prototype.






applyOptimistic=function(){
var o=this.getStatus();

o===l||h(0,
'RelayMutationTransaction: Only transactions with status `CREATED` '+
'can be applied.');


this.$RelayMutationTransaction_mutationQueue.applyOptimistic(this.$RelayMutationTransaction_id);
return this;};
n.prototype.






commit=function(){
var o=this.getStatus();

o===l||o===m||h(0,
'RelayMutationTransaction: Only transactions with status `CREATED` or '+
'`UNCOMMITTED` can be committed.');


this.$RelayMutationTransaction_mutationQueue.commit(this.$RelayMutationTransaction_id);
return this;};
n.prototype.

recommit=function(){
var o=this.getStatus();

o===i||
o===j||
o===l||h(0,
'RelayMutationTransaction: Only transaction with status '+
'`CREATED`, `COMMIT_FAILED`, or `COLLISION_COMMIT_FAILED` can be '+
'recomitted.');


this.$RelayMutationTransaction_mutationQueue.commit(this.$RelayMutationTransaction_id);};
n.prototype.

rollback=function(){
var o=this.getStatus();

o===i||
o===j||
o===k||
o===l||
o===m||h(0,
'RelayMutationTransaction: Only transactions with status `CREATED`, '+
'`UNCOMMITTED`, `COMMIT_FAILED`, `COLLISION_COMMIT_FAILED`, or '+
'`COMMIT_QUEUED` can be rolled back.');


this.$RelayMutationTransaction_rolledBack=true;
this.$RelayMutationTransaction_mutationQueue.rollback(this.$RelayMutationTransaction_id);};
n.prototype.

getError=function(){
return this.$RelayMutationTransaction_mutationQueue.getError(this.$RelayMutationTransaction_id);};
n.prototype.

getStatus=function(){
return this.$RelayMutationTransaction_rolledBack?
c('RelayMutationTransactionStatus').ROLLED_BACK:
this.$RelayMutationTransaction_mutationQueue.getStatus(this.$RelayMutationTransaction_id);};
n.prototype.

getHash=function(){
return this.$RelayMutationTransaction_id+':'+this.getStatus();};
n.prototype.

getID=function(){
return this.$RelayMutationTransaction_id;};



f.exports=n;}),null);

/** shared/relay/oss/react-relay/classic/query/fromGraphQL.js */























__d('fromGraphQL',['invariant','RelayMetaRoute','RelayQuery'],(function a(b,c,d,e,f,g,h){

'use strict';



















var i=
{Field:function k(l){
var m=j(l,c('RelayQuery').Field);

m instanceof c('RelayQuery').Field||h(0,
'fromGraphQL.Field(): Expected a GraphQL field node.');

return m;},

Fragment:function k(l){
var m=j(l,c('RelayQuery').Fragment);

m instanceof c('RelayQuery').Fragment||h(0,
'fromGraphQL.Fragment(): Expected a GraphQL fragment node.');

return m;},

Query:function k(l){
var m=j(l,c('RelayQuery').Root);

m instanceof c('RelayQuery').Root||h(0,
'fromGraphQL.Query(): Expected a root node.');

return m;},

Operation:function k(l){
var m=j(l,c('RelayQuery').Operation);

m instanceof c('RelayQuery').Operation||h(0,
'fromGraphQL.Operation(): Expected a mutation/subscription node.');

return m;}};



function j
(k,
l){

var m={},
n=c('RelayMetaRoute').get('$fromGraphQL');
return l.create(k,n,m);}


f.exports=i;}),null);

/** shared/relay/oss/react-relay/classic/mutation/RelayMutationQueue.js */























__d('RelayMutationQueue',['invariant','ErrorUtils','QueryBuilder','RelayConnectionInterface','RelayMutationQuery','RelayMutationRequest','RelayMutationTransaction','RelayMutationTransactionStatus','RelayOptimisticMutationUtils','RelayQuery','base62','flattenRelayQuery','fromGraphQL','nullthrows','resolveImmediate','RelayMutationDebugPrinter'],(function a(b,c,d,e,f,g,h){

'use strict';

































































var i=c('RelayConnectionInterface').CLIENT_MUTATION_ID,

j=0;















function k(o){
this.$RelayMutationQueue_collisionQueueMap={};
this.$RelayMutationQueue_pendingTransactionMap={};
this.$RelayMutationQueue_queue=[];
this.$RelayMutationQueue_storeData=o;
this.$RelayMutationQueue_willBatchRefreshQueuedData=false;}
k.prototype.





createTransaction=
function(o,
p){

return this.createTransactionWithPendingTransaction
(null,
function(q,r){return new l
({id:q,
mutation:o,
mutationTransaction:r,
onFailure:p&&p.onFailure,
onSuccess:p&&p.onSuccess});});};


k.prototype.












createTransactionWithPendingTransaction=
function(o,
p){


o||p||h(0,
'RelayMutationQueue: `createTransactionWithPendingTransaction()` '+
'expects a PendingTransaction or TransactionBuilder.');

var q=n(),
r=new (c('RelayMutationTransaction'))(this,q),
s=
o||
p(q,r);
this.$RelayMutationQueue_pendingTransactionMap[q]=s;
this.$RelayMutationQueue_queue.push(s);
return r;};
k.prototype.

getTransaction=function(o){
var p=this.$RelayMutationQueue_pendingTransactionMap[o];
if(p)
return p.mutationTransaction;

return null;};
k.prototype.

getError=function(o){
return this.$RelayMutationQueue_get(o).error;};
k.prototype.

getStatus=
function(o){

return this.$RelayMutationQueue_get(o).status;};
k.prototype.

applyOptimistic=function(o){
var p=this.$RelayMutationQueue_get(o);
p.status=c('RelayMutationTransactionStatus').UNCOMMITTED;
p.error=null;
this.$RelayMutationQueue_handleOptimisticUpdate(p);};
k.prototype.

commit=function(o){
var p=this.$RelayMutationQueue_get(o),
q=p.getCollisionKey(),
r=
q&&this.$RelayMutationQueue_collisionQueueMap[q];
if(r){
r.push(p);
p.status=c('RelayMutationTransactionStatus').COMMIT_QUEUED;
p.error=null;
return;}

if(q)
this.$RelayMutationQueue_collisionQueueMap[q]=[p];

this.$RelayMutationQueue_handleCommit(p);};
k.prototype.

rollback=function(o){
var p=this.$RelayMutationQueue_get(o),
q=p.getCollisionKey();
if(q){
var r=this.$RelayMutationQueue_collisionQueueMap[q];
if(r){
var s=r.indexOf(p);
if(s!==-1)
r.splice(s,1);

if(r.length===0)
delete this.$RelayMutationQueue_collisionQueueMap[q];}}



this.$RelayMutationQueue_handleRollback(p);};
k.prototype.

$RelayMutationQueue_get=function(o){
var p=this.$RelayMutationQueue_pendingTransactionMap[o];

p||h(0,
'RelayMutationQueue: `%s` is not a valid pending transaction ID.',
o);

return p;};
k.prototype.

$RelayMutationQueue_handleOptimisticUpdate=function(o){
var p=o.getOptimisticResponse(),
q=o.getOptimisticQuery(this.$RelayMutationQueue_storeData);
if(p&&q){
var r=
o.getOptimisticConfigs()||o.getConfigs();
this.$RelayMutationQueue_storeData.handleUpdatePayload
(q,
p,

{configs:r,
isOptimisticUpdate:true});}};



k.prototype.

$RelayMutationQueue_handleCommitFailure=
function(o,
p){

var q=p?
c('RelayMutationTransactionStatus').COMMIT_FAILED:
c('RelayMutationTransactionStatus').COLLISION_COMMIT_FAILED;
o.status=q;
o.error=p;

var r=true,
s=o.onFailure;
if(s){
var t=function u(){r=false;};
c('ErrorUtils').applyWithGuard
(s,
null,
[o.mutationTransaction,t],
null,
'RelayMutationTransaction:onCommitFailure');}



if(p)
this.$RelayMutationQueue_failCollisionQueue(o);




if(r&&Object.prototype.hasOwnProperty.call
(this.$RelayMutationQueue_pendingTransactionMap,o.id))

this.$RelayMutationQueue_handleRollback(o);

this.$RelayMutationQueue_batchRefreshQueuedData();};
k.prototype.

$RelayMutationQueue_handleCommitSuccess=
function(o,
p){

this.$RelayMutationQueue_advanceCollisionQueue(o);
this.$RelayMutationQueue_clearPendingTransaction(o);

this.$RelayMutationQueue_refreshQueuedData();
this.$RelayMutationQueue_storeData.handleUpdatePayload
(o.getQuery(this.$RelayMutationQueue_storeData),
p[o.getCallName()],

{configs:o.getConfigs(),
isOptimisticUpdate:false});



var q=o.onSuccess;
if(q)
c('ErrorUtils').applyWithGuard
(q,
null,
[p],
null,
'RelayMutationTransaction:onCommitSuccess');};


k.prototype.

$RelayMutationQueue_handleCommit=function(o){
o.status=c('RelayMutationTransactionStatus').COMMITTING;
o.error=null;

var p=new (c('RelayMutationRequest'))
(o.getQuery(this.$RelayMutationQueue_storeData),
o.getFiles());

this.$RelayMutationQueue_storeData.getNetworkLayer().sendMutation(p);

p.done
(function(q){return this.$RelayMutationQueue_handleCommitSuccess(o,q.response);}.bind(this),
function(q){return this.$RelayMutationQueue_handleCommitFailure(o,q);}.bind(this));};

k.prototype.

$RelayMutationQueue_handleRollback=function(o){
this.$RelayMutationQueue_clearPendingTransaction(o);
this.$RelayMutationQueue_batchRefreshQueuedData();};
k.prototype.

$RelayMutationQueue_clearPendingTransaction=function(o){
delete this.$RelayMutationQueue_pendingTransactionMap[o.id];
this.$RelayMutationQueue_queue=this.$RelayMutationQueue_queue.filter(function(p){return p!==o;});};
k.prototype.

$RelayMutationQueue_advanceCollisionQueue=function(o){
var p=o.getCollisionKey();
if(p){
var q=this.$RelayMutationQueue_collisionQueueMap[p];
if(q){

q.shift();

if(q.length){
this.$RelayMutationQueue_handleCommit(q[0]);}else 

delete this.$RelayMutationQueue_collisionQueueMap[p];}}};



k.prototype.

$RelayMutationQueue_failCollisionQueue=function(o){
var p=o.getCollisionKey();
if(p){
var q=this.$RelayMutationQueue_collisionQueueMap[p];
if(q){

q.forEach(function(r){
if(r!==o)
this.$RelayMutationQueue_handleCommitFailure(r,null);}.

bind(this));
delete this.$RelayMutationQueue_collisionQueueMap[p];}}};


k.prototype.

$RelayMutationQueue_batchRefreshQueuedData=function(){
if(!this.$RelayMutationQueue_willBatchRefreshQueuedData){
this.$RelayMutationQueue_willBatchRefreshQueuedData=true;
c('resolveImmediate')(function(){
this.$RelayMutationQueue_willBatchRefreshQueuedData=false;
this.$RelayMutationQueue_refreshQueuedData();}.
bind(this));}};

k.prototype.

$RelayMutationQueue_refreshQueuedData=function(){
this.$RelayMutationQueue_storeData.clearQueuedData();
this.$RelayMutationQueue_queue.forEach
(function(o){return this.$RelayMutationQueue_handleOptimisticUpdate(o);}.bind(this));};



































function l
(o){

this.error=null;
this.id=o.id;
this.mutation=o.mutation;
this.mutationTransaction=o.mutationTransaction;
this.onFailure=o.onFailure;
this.onSuccess=o.onSuccess;
this.status=c('RelayMutationTransactionStatus').CREATED;}
l.prototype.

getCallName=function(){
if(!this.$RelayPendingTransaction_callName)
this.$RelayPendingTransaction_callName=this.getMutationNode().calls[0].name;

return this.$RelayPendingTransaction_callName;};
l.prototype.

getCollisionKey=function(){
if(this.$RelayPendingTransaction_collisionKey===undefined)
this.$RelayPendingTransaction_collisionKey=this.mutation.getCollisionKey()||null;

return this.$RelayPendingTransaction_collisionKey;};
l.prototype.

getConfigs=function(){
if(!this.$RelayPendingTransaction_configs)
this.$RelayPendingTransaction_configs=this.mutation.getConfigs();

return this.$RelayPendingTransaction_configs;};
l.prototype.

getFatQuery=function(){
if(!this.$RelayPendingTransaction_fatQuery){
var o=c('fromGraphQL').Fragment(this.mutation.getFatQuery());

o instanceof c('RelayQuery').Fragment||h(0,
'RelayMutationQueue: Expected `getFatQuery` to return a GraphQL '+
'Fragment');

this.$RelayPendingTransaction_fatQuery=c('nullthrows')(c('flattenRelayQuery')
(o,













{preserveEmptyNodes:true,
shouldRemoveFragments:true}));}



return this.$RelayPendingTransaction_fatQuery;};
l.prototype.

getFiles=function(){
if(this.$RelayPendingTransaction_files===undefined)
this.$RelayPendingTransaction_files=this.mutation.getFiles()||null;

return this.$RelayPendingTransaction_files;};
l.prototype.

getInputVariable=function(){
if(!this.$RelayPendingTransaction_inputVariable){var o,
p=babelHelpers['extends']({},
this.mutation.getVariables(),(o={},o[
i]=this.id,o));

this.$RelayPendingTransaction_inputVariable=p;}

return this.$RelayPendingTransaction_inputVariable;};
l.prototype.

getMutationNode=function(){
if(!this.$RelayPendingTransaction_mutationNode){
var o=c('QueryBuilder').getMutation(this.mutation.getMutation());

o||h(0,
'RelayMutation: Expected `getMutation` to return a mutation created '+
'with Relay.QL`mutation { ... }`.');

this.$RelayPendingTransaction_mutationNode=o;}

return this.$RelayPendingTransaction_mutationNode;};
l.prototype.

getOptimisticConfigs=function(){
if(this.$RelayPendingTransaction_optimisticConfigs===undefined)
this.$RelayPendingTransaction_optimisticConfigs=this.mutation.getOptimisticConfigs()||null;

return this.$RelayPendingTransaction_optimisticConfigs;};
l.prototype.

getOptimisticQuery=function(o){
if(this.$RelayPendingTransaction_optimisticQuery===undefined){







var p=this.$RelayPendingTransaction_getRawOptimisticResponse();
if(p){
var q=this.getOptimisticConfigs(),
r=m(o);
if(q){
this.$RelayPendingTransaction_optimisticQuery=c('RelayMutationQuery').buildQuery
({configs:q,
fatQuery:this.getFatQuery(),
input:this.getInputVariable(),
mutationName:this.mutation.constructor.name,
mutation:this.getMutationNode(),
tracker:r});}else 


this.$RelayPendingTransaction_optimisticQuery=
c('RelayMutationQuery').buildQueryForOptimisticUpdate
({response:p,
fatQuery:this.getFatQuery(),
mutation:this.getMutationNode()});}else 



this.$RelayPendingTransaction_optimisticQuery=null;}












return this.$RelayPendingTransaction_optimisticQuery;};
l.prototype.

$RelayPendingTransaction_getRawOptimisticResponse=function(){
if(this.$RelayPendingTransaction_rawOptimisticResponse===undefined){
var o=this.mutation.getOptimisticResponse()||null;
if(o)
o[i]=this.id;

this.$RelayPendingTransaction_rawOptimisticResponse=o;}

return this.$RelayPendingTransaction_rawOptimisticResponse;};
l.prototype.

getOptimisticResponse=function(){
if(this.$RelayPendingTransaction_optimisticResponse===undefined){
var o=this.$RelayPendingTransaction_getRawOptimisticResponse();
if(o){
this.$RelayPendingTransaction_optimisticResponse=
c('RelayOptimisticMutationUtils').inferRelayPayloadFromData
(o);}else 


this.$RelayPendingTransaction_optimisticResponse=o;}


return this.$RelayPendingTransaction_optimisticResponse;};
l.prototype.

getQuery=function(o){
if(!this.$RelayPendingTransaction_query){







var p=m(o);
this.$RelayPendingTransaction_query=c('RelayMutationQuery').buildQuery
({configs:this.getConfigs(),
fatQuery:this.getFatQuery(),
input:this.getInputVariable(),
mutationName:this.getMutationNode().name,
mutation:this.getMutationNode(),
tracker:p});}








return this.$RelayPendingTransaction_query;};



function m(o){
var p=o.getQueryTracker();

p||h(0,
'RelayMutationQueue: a RelayQueryTracker was not configured but an '+
'attempt to process a RelayMutation instance was made. Either use '+
'RelayGraphQLMutation (which does not require a tracker), or use '+
'`RelayStoreData.injectQueryTracker()` to configure a tracker. Be '+
'aware that trackers are provided by default, so if you are seeing '+
'this error it means that somebody has explicitly intended to opt '+
'out of query tracking.');

return p;}


function n(){
return c('base62')(j++);}


f.exports=k;}),null);

/** shared/relay/oss/react-relay/classic/network/RelayQueryRequest.js */























__d('RelayQueryRequest',['Deferred','RelayQuery','printRelayOSSQuery','printRelayQuery'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits















(j,c('Deferred'));i=h&&h.prototype;



function j(k){
i.constructor.call(this);
this.$RelayQueryRequest_printedQuery=null;
this.$RelayQueryRequest_query=k;}
j.prototype.






getDebugName=function(){
var k=this.$RelayQueryRequest_query.getName();
return this.$RelayQueryRequest_query.isDeferred()?k+' (DEFERRED)':k;};
j.prototype.








getID=function(){
return this.$RelayQueryRequest_query.getID();};
j.prototype.

$RelayQueryRequest_getPrintedQuery=function(){
var k=this.$RelayQueryRequest_printedQuery;
if(k==null){
k=this.$RelayQueryRequest_query instanceof c('RelayQuery').OSSQuery?
c('printRelayOSSQuery')(this.$RelayQueryRequest_query):
c('printRelayQuery')(this.$RelayQueryRequest_query);
this.$RelayQueryRequest_printedQuery=k;}

return k;};
j.prototype.







getVariables=function(){
return this.$RelayQueryRequest_getPrintedQuery().variables;};
j.prototype.






getQueryString=function(){
return this.$RelayQueryRequest_getPrintedQuery().text;};
j.prototype.





getQuery=function(){
return this.$RelayQueryRequest_query;};



f.exports=j;}),null);

/** shared/relay/oss/react-relay/classic/network/RelayNetworkLayer.js */























__d('RelayNetworkLayer',['invariant','Promise','RelayProfiler','RelayQueryRequest','resolveImmediate','warning'],(function a(b,c,d,e,f,g,h){

'use strict';































function i(){
this.$RelayNetworkLayer_implementation=null;
this.$RelayNetworkLayer_queue=null;
this.$RelayNetworkLayer_subscribers=[];}
i.prototype.




injectDefaultImplementation=function(k){
if(this.$RelayNetworkLayer_defaultImplementation)
c('warning')
(false,
'RelayNetworkLayer: Call received to injectDefaultImplementation(), '+
'but a default layer was already injected.');


this.$RelayNetworkLayer_defaultImplementation=k;};
i.prototype.

injectImplementation=function(k){
if(this.$RelayNetworkLayer_implementation)
c('warning')
(false,
'RelayNetworkLayer: Call received to injectImplementation(), but '+
'a layer was already injected.');


this.$RelayNetworkLayer_implementation=k;};
i.prototype.

addNetworkSubscriber=
function(k,
l){

var m=this.$RelayNetworkLayer_subscribers.length;
this.$RelayNetworkLayer_subscribers.push({queryCallback:k,mutationCallback:l});

return {remove:function(){
delete this.$RelayNetworkLayer_subscribers[m];}.
bind(this)};};

i.prototype.

sendMutation=function(k){
var l=this.$RelayNetworkLayer_getImplementation();
this.$RelayNetworkLayer_subscribers.forEach(function(n){var o=n.mutationCallback;
if(o)
o(k);});


var m=l.sendMutation(k);
if(m)
c('Promise').resolve(m).done();};

i.prototype.

sendQueries=function(k){
var l=this.$RelayNetworkLayer_getImplementation();
this.$RelayNetworkLayer_subscribers.forEach(function(n){var o=n.queryCallback;
if(o)
k.forEach(function(p){

o(p);});});



var m=l.sendQueries(k);
if(m)
c('Promise').resolve(m).done();};

i.prototype.

supports=function(){
var k=this.$RelayNetworkLayer_getImplementation();
return k.supports.apply(k,arguments);};
i.prototype.

$RelayNetworkLayer_getImplementation=function(){
var k=this.$RelayNetworkLayer_implementation||this.$RelayNetworkLayer_defaultImplementation;

k||h(0,
'RelayNetworkLayer: Use `RelayEnvironment.injectNetworkLayer` to '+
'configure a network layer.');

return k;};
i.prototype.








fetchRelayQuery=function(k){
var l=this.$RelayNetworkLayer_queue||[];
if(!this.$RelayNetworkLayer_queue){
this.$RelayNetworkLayer_queue=l;
c('resolveImmediate')(function(){
this.$RelayNetworkLayer_queue=null;
j(l);
this.sendQueries(l);}.
bind(this));}

var m=new (c('RelayQueryRequest'))(k);
l.push(m);
return m.getPromise();};






function j(k){

var l=c('RelayProfiler').profile('fetchRelayQuery');
k.forEach(function(m){
var n=c('RelayProfiler').profile('fetchRelayQuery.query'),
o=function p(){
n.stop();
if(l){
l.stop();
l=null;}};


m.done(o,o);});}



c('RelayProfiler').instrumentMethods(i.prototype,
{sendMutation:'RelayNetworkLayer.sendMutation',
sendQueries:'RelayNetworkLayer.sendQueries'});


f.exports=i;}),null);

/** shared/relay/oss/react-relay/classic/store/RelayCacheProcessor.js */























__d('RelayCacheProcessor',['invariant','RelayQuery','RelayQueryVisitor','forEachRootCallArg','isEmpty','warning'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;i=babelHelpers.inherits

































(k,c('RelayQueryVisitor'));j=i&&i.prototype;






function k(l,m){
j.constructor.call(this);
this.$RelayCacheProcessor_cacheManager=l;
this.$RelayCacheProcessor_callbacks=m;
this.$RelayCacheProcessor_pendingNextStates={};
this.$RelayCacheProcessor_pendingRoots={};
this.$RelayCacheProcessor_state='PENDING';}
k.prototype.

abort=function(){
c('warning')
(this.$RelayCacheProcessor_state==='LOADING',
'RelayCacheProcessor: Can only abort an in-progress read operation.');

this.$RelayCacheProcessor_state='COMPLETED';};
k.prototype.

handleFailure=function(l){

this.$RelayCacheProcessor_state!=='COMPLETED'||h(0,
'RelayStoreReader: Query set already failed/completed.');

this.$RelayCacheProcessor_state='COMPLETED';
this.$RelayCacheProcessor_callbacks.onFailure&&this.$RelayCacheProcessor_callbacks.onFailure(l);};
k.prototype.

handleNodeVisited=
function(l,
m,
n,
o){

return;};
k.prototype.

handleIdentifiedRootVisited=
function(l,
m,
n,
o){

return;};
k.prototype.

process=function(l){

this.$RelayCacheProcessor_state==='PENDING'||h(0,
'RelayCacheProcessor: A `read` is in progress.');

this.$RelayCacheProcessor_state='LOADING';
l();
if(this.$RelayCacheProcessor_isDone())
this.$RelayCacheProcessor_handleSuccess();};

k.prototype.

queueIdentifiedRoot=
function(l,
m,
n){

var o=l.getStorageKey();
this.$RelayCacheProcessor_cacheManager.readRootCall
(o,
m||'',
function(p,q){
if(this.$RelayCacheProcessor_state==='COMPLETED')
return;

if(p){
this.handleFailure(p);
return;}

this.handleIdentifiedRootVisited
(l,
q,
m,
n);

var r=this.$RelayCacheProcessor_getRootKey(o,m),
s=this.$RelayCacheProcessor_pendingRoots[r];
delete this.$RelayCacheProcessor_pendingRoots[r];
for(var t=0;t<s.length;t++){
if(this.$RelayCacheProcessor_state==='COMPLETED')
return;

this.traverse(s[t],n);}

if(this.$RelayCacheProcessor_isDone())
this.$RelayCacheProcessor_handleSuccess();}.

bind(this));};

k.prototype.

queueNode=
function(l,
m,
n){

this.$RelayCacheProcessor_cacheManager.readNode
(m,
function(o,p){
if(this.$RelayCacheProcessor_state==='COMPLETED')
return;

if(o){
this.handleFailure(o);
return;}

this.handleNodeVisited(l,m,p,n);
var q=this.$RelayCacheProcessor_pendingNextStates[m];
delete this.$RelayCacheProcessor_pendingNextStates[m];
for(var r=0;r<q.length;r++){
if(this.$RelayCacheProcessor_state==='COMPLETED')
return;

this.traverse(l,q[r]);}

if(this.$RelayCacheProcessor_isDone())
this.$RelayCacheProcessor_handleSuccess();}.

bind(this));};

k.prototype.

visitIdentifiedRoot=
function(l,
m,
n){

var o=l.getStorageKey(),
p=this.$RelayCacheProcessor_getRootKey(o,m);
if(Object.prototype.hasOwnProperty.call(this.$RelayCacheProcessor_pendingRoots,p)){
this.$RelayCacheProcessor_pendingRoots[p].push(l);}else{

this.$RelayCacheProcessor_pendingRoots[p]=[l];
this.queueIdentifiedRoot(l,m,n);}};

k.prototype.

visitNode=
function(l,
m,
n){

if(Object.prototype.hasOwnProperty.call(this.$RelayCacheProcessor_pendingNextStates,m)){
this.$RelayCacheProcessor_pendingNextStates[m].push(n);}else{

this.$RelayCacheProcessor_pendingNextStates[m]=[n];
this.queueNode(l,m,n);}};

k.prototype.

visitRoot=
function(l,
m){

c('forEachRootCallArg')(l,function(n){var o=n.identifyingArgKey;
if(this.$RelayCacheProcessor_state==='COMPLETED')
return;

this.visitIdentifiedRoot(l,o,m);}.
bind(this));};
k.prototype.

$RelayCacheProcessor_getRootKey=function(l,m){
return l+'*'+(m||'');};
k.prototype.

$RelayCacheProcessor_handleSuccess=function(){

this.$RelayCacheProcessor_state!=='COMPLETED'||h(0,
'RelayStoreReader: Query set already failed/completed.');

this.$RelayCacheProcessor_state='COMPLETED';
this.$RelayCacheProcessor_callbacks.onSuccess&&this.$RelayCacheProcessor_callbacks.onSuccess();};
k.prototype.

$RelayCacheProcessor_isDone=function(){

return (c('isEmpty')(this.$RelayCacheProcessor_pendingRoots)&&
c('isEmpty')(this.$RelayCacheProcessor_pendingNextStates)&&
this.$RelayCacheProcessor_state==='LOADING');};




f.exports=k;}),null);

/** shared/relay/oss/react-relay/classic/store/RelayChangeTracker.js */























__d('RelayChangeTracker',[],(function a(b,c,d,e,f,g){

'use strict';




















function h(){
this.$RelayChangeTracker_created={};
this.$RelayChangeTracker_updated={};}
h.prototype.




createID=function(i){
this.$RelayChangeTracker_created[i]=true;};
h.prototype.




updateID=function(i){
if(!Object.prototype.hasOwnProperty.call(this.$RelayChangeTracker_created,i))
this.$RelayChangeTracker_updated[i]=true;};

h.prototype.




hasChange=function(i){
return !!(this.$RelayChangeTracker_updated[i]||this.$RelayChangeTracker_created[i]);};
h.prototype.




isNewRecord=function(i){
return !!this.$RelayChangeTracker_created[i];};
h.prototype.




getChangeSet=function(){







return {created:this.$RelayChangeTracker_created,
updated:this.$RelayChangeTracker_updated};};




f.exports=h;}),null);

/** shared/relay/oss/react-relay/classic/store/RelayQueryResultObservable.js */























__d('RelayQueryResultObservable',['invariant','GraphQLStoreQueryResolver'],(function a(b,c,d,e,f,g,h){

'use strict';











































function i
(j,
k,
l){

this.$RelayQueryResultObservable_data=undefined;
this.$RelayQueryResultObservable_dataID=l;
this.$RelayQueryResultObservable_fragment=k;
this.$RelayQueryResultObservable_fragmentResolver=null;
this.$RelayQueryResultObservable_storeData=j;
this.$RelayQueryResultObservable_subscriptionCallbacks=[];
this.$RelayQueryResultObservable_subscriptionCount=0;}
i.prototype.

subscribe=function(j){
this.$RelayQueryResultObservable_subscriptionCount++;
var k=this.$RelayQueryResultObservable_subscriptionCallbacks.length,
l=
{dispose:function(){

this.$RelayQueryResultObservable_subscriptionCallbacks[k]||h(0,
'RelayQueryResultObservable: Subscriptions may only be disposed once.');

delete this.$RelayQueryResultObservable_subscriptionCallbacks[k];
this.$RelayQueryResultObservable_subscriptionCount--;
if(this.$RelayQueryResultObservable_subscriptionCount===0)
this.$RelayQueryResultObservable_unobserve();}.

bind(this)};

this.$RelayQueryResultObservable_subscriptionCallbacks.push(j);

if(this.$RelayQueryResultObservable_subscriptionCount===1)
this.$RelayQueryResultObservable_resolveData(this.$RelayQueryResultObservable_observe());

this.$RelayQueryResultObservable_fire(j);

return l;};
i.prototype.

$RelayQueryResultObservable_observe=function(){

!this.$RelayQueryResultObservable_fragmentResolver||h(0,
'RelayQueryResultObservable: Initialized twice.');

var j=new (c('GraphQLStoreQueryResolver'))
(this.$RelayQueryResultObservable_storeData,
this.$RelayQueryResultObservable_fragment,
function(){return this.$RelayQueryResultObservable_onUpdate(j);}.bind(this));

this.$RelayQueryResultObservable_fragmentResolver=j;
return j;};
i.prototype.

$RelayQueryResultObservable_unobserve=function(){
if(this.$RelayQueryResultObservable_fragmentResolver){
this.$RelayQueryResultObservable_data=undefined;
this.$RelayQueryResultObservable_fragmentResolver.dispose();
this.$RelayQueryResultObservable_fragmentResolver=null;}};

i.prototype.

$RelayQueryResultObservable_onUpdate=function(j){
this.$RelayQueryResultObservable_resolveData(j);
this.$RelayQueryResultObservable_subscriptionCallbacks.forEach(function(k){return this.$RelayQueryResultObservable_fire(k);}.bind(this));};
i.prototype.

$RelayQueryResultObservable_fire=function(j){
j.onNext&&j.onNext(this.$RelayQueryResultObservable_data);};
i.prototype.

$RelayQueryResultObservable_resolveData=function(j){
var k=j.resolve(this.$RelayQueryResultObservable_fragment,this.$RelayQueryResultObservable_dataID);

!Array.isArray(k)||h(0,
'RelayQueryResultObservable: Plural fragments are not supported.');

this.$RelayQueryResultObservable_data=k;};



f.exports=i;}),null);

/** shared/relay/oss/react-relay/classic/store/RelayGarbageCollector.js */























__d('RelayGarbageCollector',['invariant','GraphQLRange','RelayRecord','forEachObject','resolveImmediate','warning'],(function a(b,c,d,e,f,g,h){

'use strict';






























function i
(j,
k){

this.$RelayGarbageCollector_activeHoldCount=0;
this.$RelayGarbageCollector_collectionQueue=[];
this.$RelayGarbageCollector_isCollecting=false;
this.$RelayGarbageCollector_isScheduled=false;
this.$RelayGarbageCollector_refCounts={};
this.$RelayGarbageCollector_scheduler=k;
this.$RelayGarbageCollector_storeData=j;}
i.prototype.

register=function(j){
if(!Object.prototype.hasOwnProperty.call(this.$RelayGarbageCollector_refCounts,j))
this.$RelayGarbageCollector_refCounts[j]=0;};

i.prototype.

incrementReferenceCount=function(j){

if(!Object.prototype.hasOwnProperty.call(this.$RelayGarbageCollector_refCounts,j))
this.$RelayGarbageCollector_refCounts[j]=0;

this.$RelayGarbageCollector_refCounts[j]++;};
i.prototype.

decrementReferenceCount=function(j){

if(!Object.prototype.hasOwnProperty.call(this.$RelayGarbageCollector_refCounts,j)||
this.$RelayGarbageCollector_refCounts[j]<=0){

c('warning')
(false,
'RelayGarbageCollector: Expected id `%s` be referenced before being '+
'unreferenced.',
j);

this.$RelayGarbageCollector_refCounts[j]=0;
return;}

this.$RelayGarbageCollector_refCounts[j]--;};
i.prototype.













acquireHold=function(){
var j=false;
this.$RelayGarbageCollector_activeHoldCount++;

return {release:function(){

!j||h(0,
'RelayGarbageCollector: hold can only be released once.');


this.$RelayGarbageCollector_activeHoldCount>0||h(0,
'RelayGarbageCollector: cannot decrease hold count below zero.');

j=true;
this.$RelayGarbageCollector_activeHoldCount--;
if(this.$RelayGarbageCollector_activeHoldCount===0)
this.$RelayGarbageCollector_scheduleCollection();}.

bind(this)};};

i.prototype.




collectFromNode=function(j){
if(this.$RelayGarbageCollector_refCounts[j]===0){
this.$RelayGarbageCollector_collectionQueue.push(j);
this.$RelayGarbageCollector_scheduleCollection();}};

i.prototype.




collect=function(){
c('forEachObject')(this.$RelayGarbageCollector_refCounts,function(j,k){
if(j===0)
this.$RelayGarbageCollector_collectionQueue.push(k);}.

bind(this));
this.$RelayGarbageCollector_scheduleCollection();};
i.prototype.

$RelayGarbageCollector_scheduleCollection=function(){
if(this.$RelayGarbageCollector_isScheduled)
return;

this.$RelayGarbageCollector_isScheduled=true;
c('resolveImmediate')(function(){
this.$RelayGarbageCollector_isScheduled=false;
this.$RelayGarbageCollector_processQueue();}.
bind(this));};
i.prototype.

$RelayGarbageCollector_processQueue=function(){

if(this.$RelayGarbageCollector_isCollecting||
this.$RelayGarbageCollector_activeHoldCount||
!this.$RelayGarbageCollector_collectionQueue.length)


return;

this.$RelayGarbageCollector_isCollecting=true;

var j=this.$RelayGarbageCollector_storeData.getCachedData(),
k=this.$RelayGarbageCollector_storeData.getNodeData();
this.$RelayGarbageCollector_scheduler(function(){

if(this.$RelayGarbageCollector_activeHoldCount){
this.$RelayGarbageCollector_isCollecting=false;
return false;}


var l=this.$RelayGarbageCollector_getNextUnreferencedID();
if(l){
var m=j[l];
if(m)
this.$RelayGarbageCollector_traverseRecord(m);

var n=k[l];
if(n)
this.$RelayGarbageCollector_traverseRecord(n);

this.$RelayGarbageCollector_collectRecord(l);}




this.$RelayGarbageCollector_isCollecting=!!this.$RelayGarbageCollector_collectionQueue.length;
return this.$RelayGarbageCollector_isCollecting;}.
bind(this));};
i.prototype.

$RelayGarbageCollector_getNextUnreferencedID=function(){
while(this.$RelayGarbageCollector_collectionQueue.length){
var j=this.$RelayGarbageCollector_collectionQueue.shift();

if(Object.prototype.hasOwnProperty.call(this.$RelayGarbageCollector_refCounts,j)&&
this.$RelayGarbageCollector_refCounts[j]===0)

return j;}


return null;};
i.prototype.


$RelayGarbageCollector_traverseRecord=function(j){
c('forEachObject')(j,function(k,l){
if(l===c('RelayRecord').MetadataKey.PATH){
return;}else
if(k instanceof c('GraphQLRange')){
k.getEdgeIDs({includeDeleted:true}).forEach(function(n){
if(n!=null)
this.$RelayGarbageCollector_collectionQueue.push(n);}.

bind(this));}else
if(Array.isArray(k)){
k.forEach(function(n){
if(typeof n==='object'&&n!==null){
var o=c('RelayRecord').getDataIDForObject(n);
if(o!=null)
this.$RelayGarbageCollector_collectionQueue.push(o);}}.


bind(this));}else
if(typeof k==='object'&&k!==null){
var m=c('RelayRecord').getDataIDForObject(k);
if(m!=null)
this.$RelayGarbageCollector_collectionQueue.push(m);}}.


bind(this));};
i.prototype.

$RelayGarbageCollector_collectRecord=function(j){
var k=this.$RelayGarbageCollector_storeData.getQueryTracker();
if(k)
k.untrackNodesForID(j);

this.$RelayGarbageCollector_storeData.getQueuedStore().removeRecord(j);
this.$RelayGarbageCollector_storeData.getRangeData().removeRecord(j);
delete this.$RelayGarbageCollector_refCounts[j];};



f.exports=i;}),null);

/** shared/relay/oss/react-relay/classic/store/RelayPendingQueryTracker.js */























__d('RelayPendingQueryTracker',['invariant','Deferred','PromiseMap','RelayFetchMode'],(function a(b,c,d,e,f,g,h){

'use strict';

































function i(l){
this.$RelayPendingQueryTracker_pendingFetchMap={};
this.$RelayPendingQueryTracker_preloadQueryMap=new (c('PromiseMap'))();
this.$RelayPendingQueryTracker_storeData=l;}
i.prototype.




add=function(l){
return new j(l,
{pendingFetchMap:this.$RelayPendingQueryTracker_pendingFetchMap,
preloadQueryMap:this.$RelayPendingQueryTracker_preloadQueryMap,
storeData:this.$RelayPendingQueryTracker_storeData});};

i.prototype.

hasPendingQueries=function(){
return k(this.$RelayPendingQueryTracker_pendingFetchMap);};
i.prototype.




resetPending=function(){
this.$RelayPendingQueryTracker_pendingFetchMap={};};
i.prototype.

resolvePreloadQuery=function(l,m){
this.$RelayPendingQueryTracker_preloadQueryMap.resolveKey(l,m);};
i.prototype.

rejectPreloadQuery=function(l,m){
this.$RelayPendingQueryTracker_preloadQueryMap.rejectKey(l,m);};























function j(l,m){






var n=l.fetchMode,o=l.forceIndex,p=l.query,q=m.pendingFetchMap,r=m.preloadQueryMap,s=m.storeData,
t=p.getID();
this.$PendingFetch_forceIndex=o;
this.$PendingFetch_pendingFetchMap=q;
this.$PendingFetch_preloadQueryMap=r;
this.$PendingFetch_query=p;
this.$PendingFetch_resolvedDeferred=new (c('Deferred'))();
this.$PendingFetch_resolvedQuery=false;
this.$PendingFetch_storeData=s;

this.$PendingFetch_fetchQueryPromise=n===c('RelayFetchMode').PRELOAD?
this.$PendingFetch_preloadQueryMap.get(t):
s.getNetworkLayer().fetchRelayQuery(p);

this.$PendingFetch_fetchedQuery=false;
this.$PendingFetch_error=null;

this.$PendingFetch_pendingFetchMap[t]=
{fetch:this,
query:p};

this.$PendingFetch_fetchQueryPromise.done
(this.$PendingFetch_handleQuerySuccess.bind(this),
this.$PendingFetch_handleQueryFailure.bind(this));}

j.prototype.

isResolvable=function(){
return this.$PendingFetch_resolvedQuery;};
j.prototype.

getQuery=function(){
return this.$PendingFetch_query;};
j.prototype.

getResolvedPromise=function(){
return this.$PendingFetch_resolvedDeferred.getPromise();};
j.prototype.

$PendingFetch_handleQuerySuccess=
function(l){

this.$PendingFetch_fetchedQuery=true;

this.$PendingFetch_storeData.getTaskQueue().enqueue(function(){
var m=l.response;

m&&typeof m==='object'||h(0,
'RelayPendingQueryTracker: Expected response to be an object, got '+
'`%s`.',
m?typeof m:m);

this.$PendingFetch_storeData.handleQueryPayload
(this.$PendingFetch_query,
m,
this.$PendingFetch_forceIndex);}.

bind(this)).done
(this.$PendingFetch_markQueryAsResolved.bind(this),
this.$PendingFetch_markAsRejected.bind(this));};

j.prototype.

$PendingFetch_handleQueryFailure=
function(l){

this.$PendingFetch_markAsRejected(l);};
j.prototype.

$PendingFetch_markQueryAsResolved=function(){
var l=this.getQuery().getID();
delete this.$PendingFetch_pendingFetchMap[l];

this.$PendingFetch_resolvedQuery=true;
this.$PendingFetch_updateResolvedDeferred();};
j.prototype.

$PendingFetch_markAsRejected=function(l){
var m=this.getQuery().getID();
delete this.$PendingFetch_pendingFetchMap[m];



this.$PendingFetch_error=l;
this.$PendingFetch_updateResolvedDeferred();};
j.prototype.

$PendingFetch_updateResolvedDeferred=function(){
if(this.$PendingFetch_isSettled()&&!this.$PendingFetch_resolvedDeferred.isSettled())
if(this.$PendingFetch_error){
this.$PendingFetch_resolvedDeferred.reject(this.$PendingFetch_error);}else 

this.$PendingFetch_resolvedDeferred.resolve(undefined);};


j.prototype.

$PendingFetch_isSettled=function(){
return !!this.$PendingFetch_error||this.$PendingFetch_resolvedQuery;};



function k(l){
return !!Object.keys(l).length;}



f.exports=i;}),null);

/** shared/relay/oss/react-relay/classic/store/RelayQueryTracker.js */























__d('RelayQueryTracker',['RelayNodeInterface','RelayQuery','flattenRelayQuery'],(function a(b,c,d,e,f,g){

'use strict';








var h='__type__';







function i(){
this.$RelayQueryTracker_trackedNodesByID={};}
i.prototype.

trackNodeForID=
function(j,
k){


if(j instanceof c('RelayQuery').Field&&j.getSchemaName()===h)
return;


this.$RelayQueryTracker_trackedNodesByID[k]=this.$RelayQueryTracker_trackedNodesByID[k]||
{trackedNodes:[],
isMerged:false};

this.$RelayQueryTracker_trackedNodesByID[k].trackedNodes.push(j);
this.$RelayQueryTracker_trackedNodesByID[k].isMerged=false;};
i.prototype.




getTrackedChildrenForID=
function(j){
var k,
l=this.$RelayQueryTracker_trackedNodesByID[j];
if(!l)
return [];

var m=l.isMerged,n=l.trackedNodes;
if(!m)(function(){
var p=[];
n.forEach(function(r){
p.push.apply(p,r.getChildren());});

n.length=0;
l.isMerged=true;
var q=c('RelayQuery').Fragment.build
('RelayQueryTracker',
c('RelayNodeInterface').NODE_TYPE,
p);

q=c('flattenRelayQuery')(q);
if(q)
n.push(q);})
();

var o=n[0];
if(o)
return o.getChildren();

return [];};
i.prototype.





untrackNodesForID=
function(j){

delete this.$RelayQueryTracker_trackedNodesByID[j];};



f.exports=i;}),null);

/** shared/relay/oss/react-relay/classic/store/RelayQueryWriter.js */























__d('RelayQueryWriter',['invariant','RelayClassicRecordState','RelayConnectionInterface','RelayNodeInterface','RelayQuery','RelayQueryPath','RelayQueryVisitor','RelayRecord','generateClientEdgeID','generateClientID','isCompatibleRelayFragmentType','warning'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,


































k=c('RelayNodeInterface').ANY_TYPE,l=c('RelayNodeInterface').ID,m=c('RelayNodeInterface').TYPENAME,
n=c('RelayConnectionInterface').EDGES,o=c('RelayConnectionInterface').NODE,p=c('RelayConnectionInterface').PAGE_INFO,
q=c('RelayClassicRecordState').EXISTENT;i=babelHelpers.inherits










(r,c('RelayQueryVisitor'));j=i&&i.prototype;








function r
(s,
t,
u,
v,
w){

j.constructor.call(this);
this.$RelayQueryWriter_changeTracker=v;
this.$RelayQueryWriter_forceIndex=w&&w.forceIndex?w.forceIndex:0;
this.$RelayQueryWriter_isOptimisticUpdate=!!(w&&w.isOptimisticUpdate);
this.$RelayQueryWriter_store=s;
this.$RelayQueryWriter_queryTracker=u;
this.$RelayQueryWriter_updateTrackedQueries=!!(w&&w.updateTrackedQueries);
this.$RelayQueryWriter_writer=t;}
r.prototype.

getRecordStore=function(){
return this.$RelayQueryWriter_store;};
r.prototype.

getRecordWriter=function(){
return this.$RelayQueryWriter_writer;};
r.prototype.

getRecordTypeName=
function(s,
t,
u){

if(this.$RelayQueryWriter_isOptimisticUpdate)

return this.$RelayQueryWriter_store.getType(t);

var v=u[m];
if(v==null)
if(!s.isAbstract()){
v=s.getType();}else 

v=this.$RelayQueryWriter_store.getType(t);


c('warning')
(v&&v!==k,
'RelayQueryWriter: Could not find a type name for record `%s`.',
t);

return v||null;};
r.prototype.





writePayload=
function(s,
t,
u,
v){

var w=
{nodeID:null,
path:v,
recordID:t,
responseData:u};


if(s instanceof c('RelayQuery').Field&&s.canHaveSubselections()){

s.getChildren().forEach(function(x){
this.visit(x,w);}.
bind(this));
return;}


this.visit(s,w);};
r.prototype.





recordCreate=
function(s){

this.$RelayQueryWriter_changeTracker.createID(s);};
r.prototype.





recordUpdate=
function(s){

this.$RelayQueryWriter_changeTracker.updateID(s);};
r.prototype.




isNewRecord=function(s){
return this.$RelayQueryWriter_changeTracker.isNewRecord(s);};
r.prototype.




createRecordIfMissing=
function(s,
t,
u,
v){

var w=this.$RelayQueryWriter_store.getRecordState(t),
x=v&&this.getRecordTypeName(s,t,v);
this.$RelayQueryWriter_writer.putRecord(t,x,u);
if(w!==q)
this.recordCreate(t);


if(this.$RelayQueryWriter_queryTracker&&
(this.isNewRecord(t)||this.$RelayQueryWriter_updateTrackedQueries)&&
(!c('RelayRecord').isClientID(t)||c('RelayQueryPath').isRootPath(u)))

this.$RelayQueryWriter_queryTracker.trackNodeForID(s,t);};

r.prototype.

visitRoot=
function(s,
t){

var u=t.path,v=t.recordID,w=t.responseData,
x=this.$RelayQueryWriter_store.getRecordState(v);


if(w==null){

w!==undefined||h(0,
'RelayQueryWriter: Unexpectedly encountered `undefined` in payload. '+
'Cannot set root record `%s` to undefined.',
v);

this.$RelayQueryWriter_writer.deleteRecord(v);
if(x===q)
this.recordUpdate(v);

return;}


typeof w==='object'&&w!==null||h(0,
'RelayQueryWriter: Cannot update record `%s`, expected response to be '+
'an array or object.',
v);

this.createRecordIfMissing(s,v,u,w);
this.traverse(s,t);};
r.prototype.

visitFragment=
function(s,
t){

var u=t.recordID;
if(s.isDeferred()){
var v=s.getSourceCompositeHash()||s.getCompositeHash();

this.$RelayQueryWriter_writer.setHasDeferredFragmentData
(u,
v);


this.recordUpdate(u);}





if(this.$RelayQueryWriter_isOptimisticUpdate||
c('isCompatibleRelayFragmentType')(s,this.$RelayQueryWriter_store.getType(u))){

if(!this.$RelayQueryWriter_isOptimisticUpdate&&s.isTrackingEnabled())
this.$RelayQueryWriter_writer.setHasFragmentData
(u,
s.getCompositeHash());


var w=c('RelayQueryPath').getPath(t.path,s,u);
this.traverse(s,babelHelpers['extends']({},
t,
{path:w}));}};


r.prototype.

visitField=
function(s,
t){


var u=

t.recordID,v=t.responseData;

this.$RelayQueryWriter_writer.getRecordState(u)===q||h(0,
'RelayQueryWriter: Cannot update a non-existent record, `%s`.',
u);


typeof v==='object'&&v!==null||h(0,
'RelayQueryWriter: Cannot update record `%s`, expected response to be '+
'an object.',
u);

var w=s.getSerializationKey(),

x=v[w];

if(x==null){
if(x===undefined)
if(Object.prototype.hasOwnProperty.call(v,w)){
c('warning')
(false,
'RelayQueryWriter: Encountered an explicit `undefined` field `%s` '+
'on record `%s`, expected response to not contain `undefined`.',
s.getDebugName(),
u);

return;}else
if(this.$RelayQueryWriter_isOptimisticUpdate)

return;



var y=s.getStorageKey(),
z=this.$RelayQueryWriter_store.getField(u,y);

this.$RelayQueryWriter_writer.deleteField(u,y);
if(z!==null)
this.recordUpdate(u);

return;}


if(!s.canHaveSubselections()){
this.$RelayQueryWriter_writeScalar(s,t,u,x);}else
if(s.isConnection()){
this.$RelayQueryWriter_writeConnection(s,t,u,x);}else
if(s.isPlural()){
this.$RelayQueryWriter_writePluralLink(s,t,u,x);}else 

this.$RelayQueryWriter_writeLink(s,t,u,x);};

r.prototype.





$RelayQueryWriter_writeScalar=
function(s,
t,
u,
v){

var w=s.getStorageKey(),
x=this.$RelayQueryWriter_store.getField(u,w);




this.$RelayQueryWriter_writer.putField(u,w,v);



if(Array.isArray(x)&&
Array.isArray(v)&&
x.length===v.length&&
x.every(function(y,z){return y===v[z];})){

return;}else
if(x===v)
return;

this.recordUpdate(u);};
r.prototype.





$RelayQueryWriter_writeConnection=
function(s,
t,
u,
v){




var w=s.getStorageKey(),
x=
this.$RelayQueryWriter_store.getLinkedRecordID(u,w)||
c('generateClientID')(),

y=this.$RelayQueryWriter_store.getRecordState(x),
z=
!!(s.getFieldByStorageKey(n)||

v!=null&&
typeof v==='object'&&
v[n]),


aa=c('RelayQueryPath').getPath(t.path,s,x);



this.$RelayQueryWriter_writer.putRecord(x,null,aa);
this.$RelayQueryWriter_writer.putLinkedRecordID(u,w,x);

if(y!==q){
this.recordUpdate(u);
this.recordCreate(x);}


if(z){


if(!this.$RelayQueryWriter_writer.hasRange(x)||
this.$RelayQueryWriter_forceIndex&&
this.$RelayQueryWriter_forceIndex>this.$RelayQueryWriter_store.getRangeForceIndex(x))
this.$RelayQueryWriter_writer.putRange
(x,
s.getCallsWithValues(),
this.$RelayQueryWriter_forceIndex);




this.recordUpdate(x);}


var ba=
{nodeID:null,
path:aa,
recordID:x,
responseData:v};

this.$RelayQueryWriter_traverseConnection(s,s,ba);};
r.prototype.






$RelayQueryWriter_traverseConnection=
function(s,
t,
u){

t.getChildren().forEach(function(v){
if(v instanceof c('RelayQuery').Field){
if(v.getSchemaName()===n){
this.$RelayQueryWriter_writeEdges(s,v,u);}else
if(v.getSchemaName()!==p)


this.visit(v,u);}else 



this.$RelayQueryWriter_traverseConnection(s,v,u);}.

bind(this));};
r.prototype.




$RelayQueryWriter_writeEdges=
function(s,
t,
u){


var v=

u.recordID,w=u.responseData;

typeof w==='object'&&w!==null||h(0,
'RelayQueryWriter: Cannot write edges for malformed connection `%s` on '+
'record `%s`, expected the response to be an object.',
s.getDebugName(),
v);

var x=w[n];


if(x==null){
c('warning')
(false,
'RelayQueryWriter: Cannot write edges for connection `%s` on record '+
'`%s`, expected a response for field `edges`.',
s.getDebugName(),
v);

return;}


Array.isArray(x)||h(0,
'RelayQueryWriter: Cannot write edges for connection `%s` on record '+
'`%s`, expected `edges` to be an array.',
s.getDebugName(),
v);


var y=s.getCallsWithValues();

c('RelayConnectionInterface').hasRangeCalls(y)||h(0,
'RelayQueryWriter: Cannot write edges for connection on record '+
'`%s` without `first`, `last`, or `find` argument.',
v);

var z=this.$RelayQueryWriter_store.getRangeMetadata
(v,
y);


z||h(0,
'RelayQueryWriter: Expected a range to exist for connection field `%s` '+
'on record `%s`.',
s.getDebugName(),
v);

var aa=[],
ba=z.filteredEdges,
ca=false,
da=0;

x.forEach(function(fa){

if(fa==null)
return;


typeof fa==='object'&&fa||h(0,
'RelayQueryWriter: Cannot write edge for connection field `%s` on '+
'record `%s`, expected an object.',
s.getDebugName(),
v);


var ga=fa[o];
if(ga==null)
return;



typeof ga==='object'||h(0,
'RelayQueryWriter: Expected node to be an object for field `%s` on '+
'record `%s`.',
s.getDebugName(),
v);





var ha=ba[da++],
ia=
ga&&ga[l]||
ha&&this.$RelayQueryWriter_store.getLinkedRecordID(ha.edgeID,o)||
c('generateClientID')(),



ja=c('generateClientEdgeID')(v,ia),
ka=c('RelayQueryPath').getPath(u.path,t,ja);
this.createRecordIfMissing(t,ja,ka,null);
aa.push(ja);





this.traverse(t,
{nodeID:ia,
path:ka,
recordID:ja,
responseData:fa});

ca=ca||!ha||ja!==ha.edgeID;}.
bind(this));

var ea=w[p]||
c('RelayConnectionInterface').getDefaultPageInfo();
this.$RelayQueryWriter_writer.putRangeEdges
(v,
y,
ea,
aa);




if(ca)
this.recordUpdate(v);};

r.prototype.






$RelayQueryWriter_writePluralLink=
function(s,
t,
u,
v){

var w=s.getStorageKey();

Array.isArray(v)||h(0,
'RelayQueryWriter: Expected array data for field `%s` on record `%s`.',
s.getDebugName(),
u);


var x=this.$RelayQueryWriter_store.getLinkedRecordIDs(u,w),
y=[],
z={},
aa=false,
ba=0;
v.forEach(function(ca){

if(ca==null)
return;


typeof ca==='object'&&ca||h(0,
'RelayQueryWriter: Expected elements for plural field `%s` to be '+
'objects.',
w);



var da=x&&x[ba],
ea=
ca[l]||
da||
c('generateClientID')();


y.push(ea);


var fa=c('RelayQueryPath').getPath(t.path,s,ea);

this.createRecordIfMissing(s,ea,fa,ca);

z[ea]={record:ca,path:fa};
aa=aa||ea!==da;
ba++;}.
bind(this));


this.$RelayQueryWriter_writer.putLinkedRecordIDs(u,w,y);
y.forEach(function(ca){

var da=z[ca];
if(da)
this.traverse(s,
{nodeID:null,
path:da.path,
recordID:ca,
responseData:da.record});}.


bind(this));


if(aa||
!x||
x.length!==y.length)

this.recordUpdate(u);};

r.prototype.






$RelayQueryWriter_writeLink=
function(s,
t,
u,
v){

var w=t.nodeID,
x=s.getStorageKey();

typeof v==='object'&&v!==null||h(0,
'RelayQueryWriter: Expected data for non-scalar field `%s` on record '+
'`%s` to be an object.',
s.getDebugName(),
u);






var y=this.$RelayQueryWriter_store.getLinkedRecordID(u,x),
z=
s.getSchemaName()===o&&w||
v[l]||
y||
c('generateClientID')(),



aa=c('RelayQueryPath').getPath(t.path,s,z);

this.createRecordIfMissing(s,z,aa,v);




this.$RelayQueryWriter_writer.putLinkedRecordID(u,x,z);
if(y!==z)
this.recordUpdate(u);


this.traverse(s,
{nodeID:null,
path:aa,
recordID:z,
responseData:v});};




f.exports=r;}),null);

/** shared/relay/oss/react-relay/classic/store/RelayRecordStore.js */























__d('RelayRecordStore',['invariant','GraphQLRange','RelayClassicRecordState','RelayConnectionInterface','RelayNodeInterface','RelayRecord','forEachObject','warning'],(function a(b,c,d,e,f,g,h){

'use strict';

















































var i='',
j=c('RelayConnectionInterface').NODE,k=







c('RelayRecord').MetadataKey,l=k.FILTER_CALLS,m=k.FORCE_INDEX,n=k.MUTATION_IDS,o=k.PATH,p=k.RANGE,q=k.RESOLVED_FRAGMENT_MAP;

















function r
(u,
v,
w){

this.$RelayRecordStore_cachedRecords=u.cachedRecords;
this.$RelayRecordStore_cachedRootCallMap=
v&&v.cachedRootCallMap||{};
this.$RelayRecordStore_queuedRecords=u.queuedRecords;
this.$RelayRecordStore_nodeConnectionMap=w||{};
this.$RelayRecordStore_records=u.records;
this.$RelayRecordStore_rootCallMap=v&&v.rootCallMap||{};
this.$RelayRecordStore_storage=[];
if(this.$RelayRecordStore_queuedRecords)
this.$RelayRecordStore_storage.push(this.$RelayRecordStore_queuedRecords);

if(this.$RelayRecordStore_records)
this.$RelayRecordStore_storage.push(this.$RelayRecordStore_records);

if(this.$RelayRecordStore_cachedRecords)
this.$RelayRecordStore_storage.push(this.$RelayRecordStore_cachedRecords);}

r.prototype.





getDataID=
function(u,
v){

if(c('RelayNodeInterface').isNodeRootCall(u)){

v!=null||h(0,
'RelayRecordStore.getDataID(): Argument to `%s()` '+
'cannot be null or undefined.',
u);

return v;}

if(v==null)
v=i;

if(Object.prototype.hasOwnProperty.call(this.$RelayRecordStore_rootCallMap,u)&&Object.prototype.hasOwnProperty.call
(this.$RelayRecordStore_rootCallMap[u],v)){
return this.$RelayRecordStore_rootCallMap[u][v];}else
if(Object.prototype.hasOwnProperty.call(this.$RelayRecordStore_cachedRootCallMap,u))
return this.$RelayRecordStore_cachedRootCallMap[u][v];};

r.prototype.




getRecordState=function(u){
var v=this.$RelayRecordStore_getRecord(u);
if(v===null){
return c('RelayClassicRecordState').NONEXISTENT;}else
if(v===undefined)
return c('RelayClassicRecordState').UNKNOWN;

return c('RelayClassicRecordState').EXISTENT;};
r.prototype.




getPathToRecord=
function(u){

var v=this.$RelayRecordStore_getField(u,o);
return v;};
r.prototype.




hasOptimisticUpdate=function(u){
var v=this.$RelayRecordStore_queuedRecords;
return v?Object.prototype.hasOwnProperty.call
(v,u):
false;};
r.prototype.






getClientMutationIDs=function(u){
var v=this.$RelayRecordStore_queuedRecords;
if(v){
var w=v[u];
if(w)
return w[n];}


return null;};
r.prototype.




hasFragmentData=function(u,v){
var w=this.$RelayRecordStore_getField(u,q);

typeof w==='object'||w==null||h(0,
'RelayRecordStore.hasFragmentData(): Expected the map of '+
'resolved deferred fragments associated with record `%s` to be null or '+
'an object. Found a(n) `%s`.',
u,
typeof w);

return !!(w&&w[v]);};
r.prototype.

getType=function(u){

return this.$RelayRecordStore_getField(u,'__typename');};
r.prototype.




getField=
function(u,
v){

return this.$RelayRecordStore_getField(u,v);};
r.prototype.





getLinkedRecordID=
function(u,
v){

var w=this.$RelayRecordStore_getField(u,v);
if(w==null)
return w;

var x=c('RelayRecord').getRecord(w);

x||h(0,
'RelayRecordStore.getLinkedRecordID(): Expected field `%s` for record '+
'`%s` to have a linked record.',
v,
u);

return c('RelayRecord').getDataID(x);};
r.prototype.





getLinkedRecordIDs=
function(u,
v){

var w=this.$RelayRecordStore_getField(u,v);
if(w==null)
return w;


Array.isArray(w)||h(0,
'RelayRecordStore.getLinkedRecordIDs(): Expected field `%s` for '+
'record `%s` to have an array of linked records.',
v,
u);

return w.map(function(x,y){
var z=c('RelayRecord').getRecord(x);

z||h(0,
'RelayRecordStore.getLinkedRecordIDs(): Expected element at index %s '+
'in field `%s` for record `%s` to be a linked record.',
y,
v,
u);

return c('RelayRecord').getDataID(z);});};

r.prototype.






getConnectionIDsForRecord=
function(u){

var v=this.$RelayRecordStore_nodeConnectionMap[u];
if(v)
return Object.keys(v);

return null;};
r.prototype.





getConnectionIDsForField=
function(u,
v){


var w=this.$RelayRecordStore_records[u];
if(w==null)
return w;

var x=void 0;
c('forEachObject')(w,function(y,z){
if(y&&t(z)===v){
var aa=c('RelayRecord').getDataIDForObject(y);
if(aa){
x=x||[];
x.push(aa);}}});



return x;};
r.prototype.




getRangeForceIndex=
function(u){

var v=this.$RelayRecordStore_getField(u,m);
if(v===null)
return -1;

return v||0;};
r.prototype.






getRangeFilterCalls=
function(u){

return this.$RelayRecordStore_getField(u,l);};
r.prototype.










getRangeMetadata=
function(u,
v){

if(u==null)
return u;

var w=this.$RelayRecordStore_getField(u,p);
if(w==null){
if(w===null)
c('warning')
(false,
'RelayRecordStore.getRangeMetadata(): Expected range to exist if '+
'`edges` has been fetched.');


return undefined;}

var x=s(v);


if(v.length===x.length)

return {diffCalls:v,
filterCalls:x,
pageInfo:undefined,
requestedEdgeIDs:[],
filteredEdges:[]};


var y=this.$RelayRecordStore_queuedRecords?
this.$RelayRecordStore_queuedRecords[u]:
null,
z=w.retrieveRangeInfoForQuery(v,y),
aa=z.diffCalls,

ba=

z.pageInfo,ca=z.requestedEdgeIDs;
if(aa&&aa.length){
aa=x.concat(aa);}else 

aa=[];

var da=void 0;
if(ca){
da=ca.
map(function(ea){
return {edgeID:ea,
nodeID:this.getLinkedRecordID(ea,j)};}.bind(this)).

filter(function(ea){return this.$RelayRecordStore_getRecord(ea.nodeID);}.bind(this));}else 

da=[];


return {diffCalls:aa,
filterCalls:x,
pageInfo:ba,
requestedEdgeIDs:ca,
filteredEdges:da};};

r.prototype.




hasRange=function(u){
return !!this.$RelayRecordStore_getField(u,p);};
r.prototype.





removeRecord=function(u){
delete this.$RelayRecordStore_records[u];
if(this.$RelayRecordStore_queuedRecords)
delete this.$RelayRecordStore_queuedRecords[u];

if(this.$RelayRecordStore_cachedRecords)
delete this.$RelayRecordStore_cachedRecords[u];

delete this.$RelayRecordStore_nodeConnectionMap[u];};
r.prototype.




$RelayRecordStore_getRecord=function(u){
if(this.$RelayRecordStore_queuedRecords&&Object.prototype.hasOwnProperty.call(this.$RelayRecordStore_queuedRecords,u)){
return this.$RelayRecordStore_queuedRecords[u];}else
if(Object.prototype.hasOwnProperty.call(this.$RelayRecordStore_records,u)){
return this.$RelayRecordStore_records[u];}else
if(this.$RelayRecordStore_cachedRecords)
return this.$RelayRecordStore_cachedRecords[u];};

r.prototype.






$RelayRecordStore_getField=function(u,v){
var w=this.$RelayRecordStore_storage;
for(var x=0;x<w.length;x++){
var y=w[x][u];
if(y===null){
return null;}else
if(y&&Object.prototype.hasOwnProperty.call(y,v))
return y[v];}


return undefined;};







function s(u){
return u.filter(function(v){return !c('RelayConnectionInterface').isConnectionCall(v);});}







function t(u){

return u.split(/(?![_A-Za-z][_0-9A-Za-z]*)/,1)[0];}


f.exports=r;}),null);

/** shared/relay/oss/react-relay/classic/store/RelayRecordWriter.js */























__d('RelayRecordWriter',['invariant','GraphQLMutatorConstants','GraphQLRange','RelayConnectionInterface','RelayNodeInterface','RelayRecord','RelayRecordStatusMap','rangeOperationToMetadataKey'],(function a(b,c,d,e,f,g,h){

'use strict';































var i='',
j=c('GraphQLMutatorConstants').APPEND,k=c('GraphQLMutatorConstants').PREPEND,l=c('GraphQLMutatorConstants').REMOVE,
m=c('RelayConnectionInterface').CURSOR,n=c('RelayConnectionInterface').NODE,o=









c('RelayRecord').MetadataKey,p=o.FILTER_CALLS,q=o.FORCE_INDEX,r=o.MUTATION_IDS,s=o.PATH,t=o.RANGE,u=o.RESOLVED_FRAGMENT_MAP,v=o.RESOLVED_FRAGMENT_MAP_GENERATION,w=o.STATUS;
















function x
(z,
aa,
ba,
ca,
da,
ea){

this.$RelayRecordWriter_cacheWriter=da;
this.$RelayRecordWriter_clientMutationID=ea;
this.$RelayRecordWriter_isOptimisticWrite=ba;
this.$RelayRecordWriter_nodeConnectionMap=ca||{};
this.$RelayRecordWriter_records=z;
this.$RelayRecordWriter_rootCallMap=aa;}
x.prototype.





getDataID=
function(z,
aa){

if(c('RelayNodeInterface').isNodeRootCall(z)){

aa!=null||h(0,
'RelayRecordWriter.getDataID(): Argument to `%s()` '+
'cannot be null or undefined.',
z);

return aa;}

if(aa==null)
aa=i;

if(Object.prototype.hasOwnProperty.call(this.$RelayRecordWriter_rootCallMap,z)&&Object.prototype.hasOwnProperty.call
(this.$RelayRecordWriter_rootCallMap[z],aa))
return this.$RelayRecordWriter_rootCallMap[z][aa];};

x.prototype.





putDataID=
function(z,
aa,
ba){

if(c('RelayNodeInterface').isNodeRootCall(z)){

aa!=null||h(0,
'RelayRecordWriter.putDataID(): Argument to `%s()` '+
'cannot be null or undefined.',
z);

return;}

if(aa==null)
aa=i;

this.$RelayRecordWriter_rootCallMap[z]=this.$RelayRecordWriter_rootCallMap[z]||{};
this.$RelayRecordWriter_rootCallMap[z][aa]=ba;
if(this.$RelayRecordWriter_cacheWriter)
this.$RelayRecordWriter_cacheWriter.writeRootCall(z,aa,ba);};

x.prototype.




getRecordState=function(z){
var aa=this.$RelayRecordWriter_records[z];
if(aa===null){
return 'NONEXISTENT';}else
if(aa===undefined)
return 'UNKNOWN';

return 'EXISTENT';};
x.prototype.




putRecord=
function(z,
aa,
ba){

var ca=this.$RelayRecordWriter_getRecordForWrite(z);
if(ca)
return;

var da=c('RelayRecord').createWithFields(z,
{__typename:aa});

if(this.$RelayRecordWriter_isOptimisticWrite)
this.$RelayRecordWriter_setClientMutationID(da);

if(c('RelayRecord').isClientID(z)&&ba)
da[s]=ba;

this.$RelayRecordWriter_records[z]=da;
var ea=this.$RelayRecordWriter_cacheWriter;
if(!this.$RelayRecordWriter_isOptimisticWrite&&ea)
ea.writeField(z,'__dataID__',z,aa);};

x.prototype.




getPathToRecord=
function(z){

return this.$RelayRecordWriter_getField(z,s);};
x.prototype.




hasFragmentData=function(z,aa){
var ba=this.$RelayRecordWriter_getField(z,u);

typeof ba==='object'||ba==null||h(0,
'RelayRecordWriter.hasFragmentData(): Expected the map of '+
'resolved deferred fragments associated with record `%s` to be null or '+
'an object. Found a(n) `%s`.',
z,
typeof ba);

return !!(ba&&ba[aa]);};
x.prototype.




setHasDeferredFragmentData=
function(z,
aa){

this.$RelayRecordWriter_setHasFragmentData(z,aa,true);};
x.prototype.




setHasFragmentData=
function(z,
aa){

this.$RelayRecordWriter_setHasFragmentData(z,aa,false);};
x.prototype.

$RelayRecordWriter_setHasFragmentData=
function(z,
aa,
ba){

var ca=this.$RelayRecordWriter_getRecordForWrite(z);

ca||h(0,
'RelayRecordWriter.setHasFragmentData(): Expected record `%s` '+
'to exist before marking it as having received data for the deferred '+
'fragment with id `%s`.',
z,
aa);

var da=ca[u];
if(typeof da!=='object'||!da)
da={};

da[aa]=true;
ca[u]=da;
if(ba)
if(typeof ca[v]==='number'){
ca[v]++;}else 

ca[v]=0;};


x.prototype.




deleteRecord=
function(z){

this.$RelayRecordWriter_records[z]=null;


if(!this.$RelayRecordWriter_isOptimisticWrite){
delete this.$RelayRecordWriter_nodeConnectionMap[z];
if(this.$RelayRecordWriter_cacheWriter)
this.$RelayRecordWriter_cacheWriter.writeNode(z,null);}};


x.prototype.

getType=function(z){

return this.$RelayRecordWriter_getField(z,'__typename');};
x.prototype.




getField=
function(z,
aa){

return this.$RelayRecordWriter_getField(z,aa);};
x.prototype.




putField=
function(z,
aa,
ba){

var ca=this.$RelayRecordWriter_getRecordForWrite(z);

ca||h(0,
'RelayRecordWriter.putField(): Expected record `%s` to exist before '+
'writing field `%s`.',
z,
aa);

ca[aa]=ba;
if(!this.$RelayRecordWriter_isOptimisticWrite&&this.$RelayRecordWriter_cacheWriter){
var da=ca.__typename;
this.$RelayRecordWriter_cacheWriter.writeField(z,aa,ba,da);}};

x.prototype.




deleteField=
function(z,
aa){

var ba=this.$RelayRecordWriter_getRecordForWrite(z);

ba||h(0,
'RelayRecordWriter.deleteField(): Expected record `%s` to exist before '+
'deleting field `%s`.',
z,
aa);

ba[aa]=null;
if(!this.$RelayRecordWriter_isOptimisticWrite&&this.$RelayRecordWriter_cacheWriter)
this.$RelayRecordWriter_cacheWriter.writeField(z,aa,null);};

x.prototype.





getLinkedRecordID=
function(z,
aa){

var ba=this.$RelayRecordWriter_getField(z,aa);
if(ba==null)
return ba;

var ca=c('RelayRecord').getRecord(ba);

ca||h(0,
'RelayRecordWriter.getLinkedRecordID(): Expected field `%s` for record '+
'`%s` to have a linked record.',
aa,
z);

return c('RelayRecord').getDataID(ca);};
x.prototype.




putLinkedRecordID=
function(z,
aa,
ba){

var ca=this.$RelayRecordWriter_getRecordForWrite(z);

ca||h(0,
'RelayRecordWriter.putLinkedRecordID(): Expected record `%s` to exist '+
'before linking to record `%s`.',
z,
ba);

var da=c('RelayRecord').create(ba);
ca[aa]=da;
if(!this.$RelayRecordWriter_isOptimisticWrite&&this.$RelayRecordWriter_cacheWriter)
this.$RelayRecordWriter_cacheWriter.writeField(z,aa,da);};

x.prototype.





getLinkedRecordIDs=
function(z,
aa){

var ba=this.$RelayRecordWriter_getField(z,aa);
if(ba==null)
return ba;


Array.isArray(ba)||h(0,
'RelayRecordWriter.getLinkedRecordIDs(): Expected field `%s` for '+
'record `%s` to have an array of linked records.',
aa,
z);

return ba.map(function(ca,da){
var ea=c('RelayRecord').getRecord(ca);

ea||h(0,
'RelayRecordWriter.getLinkedRecordIDs(): Expected element at index '+
'%s in field `%s` for record `%s` to be a linked record.',
da,
aa,
z);

return c('RelayRecord').getDataID(ea);});};

x.prototype.




putLinkedRecordIDs=
function(z,
aa,
ba){

var ca=this.$RelayRecordWriter_getRecordForWrite(z);

ca||h(0,
'RelayRecordWriter.putLinkedRecordIDs(): Expected record `%s` to exist '+
'before linking records.',
z);

var da=ba.map(function(ea){
return c('RelayRecord').create(ea);});

ca[aa]=da;
if(!this.$RelayRecordWriter_isOptimisticWrite&&this.$RelayRecordWriter_cacheWriter)
this.$RelayRecordWriter_cacheWriter.writeField(z,aa,da);};

x.prototype.




getRangeForceIndex=
function(z){

var aa=
this.$RelayRecordWriter_getField(z,q);
if(aa===null)
return -1;

return aa||0;};
x.prototype.






getRangeFilterCalls=
function(z){

return this.$RelayRecordWriter_getField(z,p);};
x.prototype.




putRange=
function(z,
aa,
ba){


!this.$RelayRecordWriter_isOptimisticWrite||h(0,
'RelayRecordWriter.putRange(): Cannot create a queued range.');

var ca=this.$RelayRecordWriter_getRecordForWrite(z);

ca||h(0,
'RelayRecordWriter.putRange(): Expected record `%s` to exist before '+
'adding a range.',
z);

var da=new (c('GraphQLRange'))(),
ea=y(aa);
ba=ba||0;
ca[p]=ea;
ca[q]=ba;
ca[t]=da;

var fa=this.$RelayRecordWriter_cacheWriter;
if(!this.$RelayRecordWriter_isOptimisticWrite&&fa){
fa.writeField(z,p,ea);
fa.writeField(z,q,ba);
fa.writeField(z,t,da);}};

x.prototype.




hasRange=function(z){
return !!this.$RelayRecordWriter_getField(z,t);};
x.prototype.




putRangeEdges=
function(z,
aa,
ba,
ca){

var da=this.$RelayRecordWriter_getField(z,t);

da||h(0,
'RelayRecordWriter.putRangeEdges(): Expected record `%s` to exist and '+
'have a range.',
z);

var ea=[];
ca.forEach(function(fa){
var ga=this.$RelayRecordWriter_getRangeEdgeRecord(fa);
ea.push(ga);
var ha=c('RelayRecord').getDataID(ga.node);
this.$RelayRecordWriter_addConnectionForNode(z,ha);}.
bind(this));
da.addItems
(aa,
ea,
ba);

if(!this.$RelayRecordWriter_isOptimisticWrite&&this.$RelayRecordWriter_cacheWriter)
this.$RelayRecordWriter_cacheWriter.writeField(z,t,da);};

x.prototype.




applyRangeUpdate=
function(z,
aa,
ba){

if(this.$RelayRecordWriter_isOptimisticWrite){
this.$RelayRecordWriter_applyOptimisticRangeUpdate(z,aa,ba);}else 

this.$RelayRecordWriter_applyServerRangeUpdate(z,aa,ba);};

x.prototype.





$RelayRecordWriter_getRangeEdgeRecord=function(z){
var aa=this.getLinkedRecordID(z,n);

aa||h(0,
'RelayRecordWriter: Expected edge `%s` to have a `node` record.',
z);

return c('RelayRecord').createWithFields(z,
{cursor:this.getField(z,m),
node:c('RelayRecord').create(aa)});};

x.prototype.

$RelayRecordWriter_applyOptimisticRangeUpdate=
function(z,
aa,
ba){

var ca=this.$RelayRecordWriter_getRecordForWrite(z);
if(!ca){
ca=c('RelayRecord').create(z);
this.$RelayRecordWriter_records[z]=ca;}

this.$RelayRecordWriter_setClientMutationID(ca);
var da=c('rangeOperationToMetadataKey')[ba],
ea=ca[da];
if(!ea){
ea=[];
ca[da]=ea;}

if(ba===k){
ea.unshift(aa);}else 

ea.push(aa);};

x.prototype.

$RelayRecordWriter_applyServerRangeUpdate=
function(z,
aa,
ba){

var ca=this.$RelayRecordWriter_getField(z,t);

ca||h(0,
'RelayRecordWriter: Cannot apply `%s` update to non-existent record '+
'`%s`.',
ba,
z);

if(ba===l){
ca.removeEdgeWithID(aa);
var da=this.getLinkedRecordID(aa,'node');
if(da)
this.$RelayRecordWriter_removeConnectionForNode(z,da);}else{


var ea=this.$RelayRecordWriter_getRangeEdgeRecord(aa),
fa=c('RelayRecord').getDataID(ea.node);
this.$RelayRecordWriter_addConnectionForNode(z,fa);
if(ba===j){
ca.appendEdge(this.$RelayRecordWriter_getRangeEdgeRecord(aa));}else 

ca.prependEdge(this.$RelayRecordWriter_getRangeEdgeRecord(aa));}


if(this.$RelayRecordWriter_cacheWriter)
this.$RelayRecordWriter_cacheWriter.writeField(z,t,ca);};

x.prototype.




$RelayRecordWriter_addConnectionForNode=
function(z,
aa){

var ba=this.$RelayRecordWriter_nodeConnectionMap[aa];
if(!ba){
ba={};
this.$RelayRecordWriter_nodeConnectionMap[aa]=ba;}

ba[z]=true;};
x.prototype.




$RelayRecordWriter_removeConnectionForNode=
function(z,
aa){

var ba=this.$RelayRecordWriter_nodeConnectionMap[aa];
if(ba){
delete ba[z];
if(Object.keys(ba).length===0)
delete this.$RelayRecordWriter_nodeConnectionMap[aa];}};


x.prototype.





$RelayRecordWriter_getRecordForWrite=function(z){
var aa=this.$RelayRecordWriter_records[z];
if(!aa)
return aa;

if(this.$RelayRecordWriter_isOptimisticWrite)
this.$RelayRecordWriter_setClientMutationID(aa);

return aa;};
x.prototype.






$RelayRecordWriter_getField=function(z,aa){
var ba=this.$RelayRecordWriter_records[z];
if(ba===null){
return null;}else
if(ba&&Object.prototype.hasOwnProperty.call(ba,aa)){
return ba[aa];}else 

return undefined;};

x.prototype.





$RelayRecordWriter_setClientMutationID=function(z){
var aa=this.$RelayRecordWriter_clientMutationID;

aa||h(0,
'RelayRecordWriter: _clientMutationID cannot be null/undefined.');

var ba=z[r]||[];
if(ba.indexOf(aa)===-1){
ba.push(aa);
z[r]=ba;}

z[w]=c('RelayRecordStatusMap').setOptimisticStatus
(0,
true);};








function y(z){
return z.filter(function(aa){return !c('RelayConnectionInterface').isConnectionCall(aa);});}


f.exports=x;}),null);

/** shared/relay/oss/react-relay/classic/tools/RelayTaskQueue.js */























__d('RelayTaskQueue',['invariant','Promise'],(function a(b,c,d,e,f,g,h){

'use strict';






























function i(j){
this.$RelayTaskQueue_queue=[];
this.$RelayTaskQueue_running=false;
this.$RelayTaskQueue_schedule=j;}
i.prototype.









































enqueue=function(){for(var j=arguments.length,k=Array(j),l=0;l<j;l++)k[l]=arguments[l];
var m=new (c('Promise'))(function(n,o){
var p=0,
q=null,
r=function(s){
if(q){
o(q);
return;}

if(p>=k.length){
n(s);}else 

this.$RelayTaskQueue_queue.push(function(){
r(function(){
var t=k[p++];

try{s=t(s);}catch(
u){
q=u;
s=undefined;}

return s;}
());});}.


bind(this);
r(undefined);}.
bind(this));
this.$RelayTaskQueue_scheduleIfNecessary();
return m;};
i.prototype.








injectScheduler=function(j){
this.$RelayTaskQueue_schedule=j;};
i.prototype.

$RelayTaskQueue_createTaskExecutor=function(j){
var k=false;
return function(){
!k||h(0,'RelayTaskQueue: Tasks can only be executed once.');
k=true;
this.$RelayTaskQueue_invokeWithinScopedQueue(j);
this.$RelayTaskQueue_running=false;
this.$RelayTaskQueue_scheduleIfNecessary();}.
bind(this);};
i.prototype.

$RelayTaskQueue_invokeWithinScopedQueue=function(j){
var k=this.$RelayTaskQueue_queue;
this.$RelayTaskQueue_queue=[];

try{j();}finally{

Array.prototype.unshift.apply(k,this.$RelayTaskQueue_queue);
this.$RelayTaskQueue_queue=k;}};

i.prototype.

$RelayTaskQueue_scheduleIfNecessary=function(){
if(this.$RelayTaskQueue_running)
return;

if(this.$RelayTaskQueue_queue.length){
this.$RelayTaskQueue_running=true;
var j=this.$RelayTaskQueue_createTaskExecutor(this.$RelayTaskQueue_queue.shift());
if(this.$RelayTaskQueue_schedule){
this.$RelayTaskQueue_schedule(j);}else 

j();}else 


this.$RelayTaskQueue_running=false;};




f.exports=i;}),null);

/** shared/relay/oss/react-relay/classic/traversal/findRelayQueryLeaves.js */























__d('findRelayQueryLeaves',['RelayClassicRecordState','RelayConnectionInterface','RelayProfiler','RelayQueryPath','RelayQueryVisitor','isCompatibleRelayFragmentType'],(function a(b,c,d,e,f,g){

'use strict';var h,i,






































j=c('RelayConnectionInterface').EDGES,k=c('RelayConnectionInterface').PAGE_INFO;












function l
(n,
o,
p,
q,
r,
s){

var t=new m(n,o),

u=
{dataID:q,
missingData:false,
path:r,
rangeCalls:s,
rangeInfo:undefined};

t.visit(p,u);

return {missingData:u.missingData,
pendingNodeStates:t.getPendingNodeStates()};}

h=babelHelpers.inherits

(m,c('RelayQueryVisitor'));i=h&&h.prototype;




function m(n){var o=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];
i.constructor.call(this);
this.$RelayQueryLeavesFinder_store=n;
this.$RelayQueryLeavesFinder_cachedRecords=o;
this.$RelayQueryLeavesFinder_pendingNodeStates=[];}
m.prototype.

getPendingNodeStates=function(){
return this.$RelayQueryLeavesFinder_pendingNodeStates;};
m.prototype.




traverse=
function(n,
o){

var p=n.getChildren();
for(var q=0;q<p.length;q++){
if(o.missingData)
return;

this.visit(p[q],o);}};

m.prototype.

visitFragment=
function(n,
o){

var p=o.dataID,
q=this.$RelayQueryLeavesFinder_store.getRecordState(p);
if(q===c('RelayClassicRecordState').UNKNOWN){
this.$RelayQueryLeavesFinder_handleMissingData(n,o);
return;}else
if(q===c('RelayClassicRecordState').NONEXISTENT)
return;


if(c('isCompatibleRelayFragmentType')
(n,
this.$RelayQueryLeavesFinder_store.getType(p)))

this.traverse(n,o);};

m.prototype.

visitField=
function(n,
o){

var p=o.dataID,
q=this.$RelayQueryLeavesFinder_store.getRecordState(p);
if(q===c('RelayClassicRecordState').UNKNOWN){
this.$RelayQueryLeavesFinder_handleMissingData(n,o);
return;}else
if(q===c('RelayClassicRecordState').NONEXISTENT)
return;


if(o.rangeCalls&&!o.rangeInfo){
var r=this.$RelayQueryLeavesFinder_store.getRangeMetadata(p,o.rangeCalls);
if(r)
o.rangeInfo=r;}


var s=o.rangeInfo;
if(s&&n.getSchemaName()===j){
this.$RelayQueryLeavesFinder_visitEdges(n,o);}else
if(s&&n.getSchemaName()===k){
this.$RelayQueryLeavesFinder_visitPageInfo(n,o);}else
if(!n.canHaveSubselections()){
this.$RelayQueryLeavesFinder_visitScalar(n,o);}else
if(n.isPlural()){
this.$RelayQueryLeavesFinder_visitPlural(n,o);}else
if(n.isConnection()){
this.$RelayQueryLeavesFinder_visitConnection(n,o);}else 

this.$RelayQueryLeavesFinder_visitLinkedField(n,o);};

m.prototype.

$RelayQueryLeavesFinder_visitScalar=function(n,o){
var p=this.$RelayQueryLeavesFinder_store.getField(o.dataID,n.getStorageKey());
if(p===undefined)
this.$RelayQueryLeavesFinder_handleMissingData(n,o);};

m.prototype.

$RelayQueryLeavesFinder_visitPlural=function(n,o){
var p=this.$RelayQueryLeavesFinder_store.getLinkedRecordIDs
(o.dataID,
n.getStorageKey());

if(p===undefined){
this.$RelayQueryLeavesFinder_handleMissingData(n,o);
return;}

if(p)
for(var q=0;q<p.length;q++){
if(o.missingData)
break;

var r=
{dataID:p[q],
missingData:false,
path:c('RelayQueryPath').getPath(o.path,n,p[q]),
rangeCalls:undefined,
rangeInfo:undefined};

this.traverse(n,r);
o.missingData=r.missingData;}};


m.prototype.

$RelayQueryLeavesFinder_visitConnection=function(n,o){
var p=n.getCallsWithValues(),
q=this.$RelayQueryLeavesFinder_store.getLinkedRecordID
(o.dataID,
n.getStorageKey());

if(q===undefined){
this.$RelayQueryLeavesFinder_handleMissingData(n,o);
return;}

if(q){
var r=
{dataID:q,
missingData:false,
path:c('RelayQueryPath').getPath(o.path,n,q),
rangeCalls:p,
rangeInfo:null},

s=this.$RelayQueryLeavesFinder_store.getRangeMetadata(q,p);
if(s)
r.rangeInfo=s;

this.traverse(n,r);
o.missingData=o.missingData||r.missingData;}};

m.prototype.

$RelayQueryLeavesFinder_visitEdges=function(n,o){
var p=o.rangeInfo;

if(!p){
this.$RelayQueryLeavesFinder_handleMissingData(n,o);
return;}

if(p.diffCalls.length){
o.missingData=true;
return;}

var q=p.requestedEdgeIDs;
for(var r=0;r<q.length;r++){
if(o.missingData)
break;

var s=
{dataID:q[r],
missingData:false,
path:c('RelayQueryPath').getPath(o.path,n,q[r]),
rangeCalls:undefined,
rangeInfo:undefined};

this.traverse(n,s);
o.missingData=o.missingData||s.missingData;}};

m.prototype.

$RelayQueryLeavesFinder_visitPageInfo=function(n,o){
var p=o.rangeInfo;
if(!p||!p.pageInfo){
this.$RelayQueryLeavesFinder_handleMissingData(n,o);
return;}};

m.prototype.

$RelayQueryLeavesFinder_visitLinkedField=function(n,o){
var p=
this.$RelayQueryLeavesFinder_store.getLinkedRecordID(o.dataID,n.getStorageKey());
if(p===undefined){
this.$RelayQueryLeavesFinder_handleMissingData(n,o);
return;}

if(p){
var q=
{dataID:p,
missingData:false,
path:c('RelayQueryPath').getPath(o.path,n,p),
rangeCalls:undefined,
rangeInfo:undefined};

this.traverse(n,q);
o.missingData=o.missingData||q.missingData;}};

m.prototype.

$RelayQueryLeavesFinder_handleMissingData=function(n,o){
var p=o.dataID;
if(Object.prototype.hasOwnProperty.call(this.$RelayQueryLeavesFinder_cachedRecords,p)){


o.missingData=true;}else 



this.$RelayQueryLeavesFinder_pendingNodeStates.push
({dataID:p,
node:n,
path:o.path,
rangeCalls:o.rangeCalls});};





f.exports=c('RelayProfiler').instrument
('findRelayQueryLeaves',
l);}),null);

/** shared/relay/oss/react-relay/classic/store/restoreRelayCacheData.js */























__d('restoreRelayCacheData',['invariant','RelayCacheProcessor','RelayChangeTracker','RelayProfiler','RelayQuery','RelayQueryPath','RelayRecord','findRelayQueryLeaves','forEachObject'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;






































function k
(n,
o,
p,
q,
r,
s,
t,
u,
v,
w){

var x=new m
(u,
q,
r,
s,
v,
w,
t);

x.restoreFragmentData(n,o,p);


return {abort:function y(){
x.abort();}};}




function l
(n,
o,
p,
q,
r,
s,
t,
u){

var v=new m
(s,
o,
p,
q,
t,
u,
r);

v.restoreQueriesData(n);


return {abort:function w(){
v.abort();}};}


i=babelHelpers.inherits

(m,c('RelayCacheProcessor'));j=i&&i.prototype;






function m
(n,
o,
p,
q,
r,
s,
t){

j.constructor.call(this,n,s);
this.$RelayCachedDataRestorator_cachedRecords=p;
this.$RelayCachedDataRestorator_cachedRootCallMap=q;
this.$RelayCachedDataRestorator_changeTracker=r;
this.$RelayCachedDataRestorator_garbageCollector=t;
this.$RelayCachedDataRestorator_store=o;}
m.prototype.

handleNodeVisited=
function(n,
o,
p,
q){

var r=this.$RelayCachedDataRestorator_store.getRecordState(o);
this.$RelayCachedDataRestorator_cachedRecords[o]=p;




if(r==='UNKNOWN'&&p!==undefined){


if(this.$RelayCachedDataRestorator_garbageCollector)
this.$RelayCachedDataRestorator_garbageCollector.register(o);



this.$RelayCachedDataRestorator_changeTracker.createID(o);}else
if(r==='EXISTENT'&&p!=null)


this.$RelayCachedDataRestorator_changeTracker.updateID(o);

if(!p){

this.handleFailure();
return;}

if(c('RelayRecord').isClientID(o))
p.__path__=q.path;};

m.prototype.

handleIdentifiedRootVisited=
function(n,
o,
p,
q){

if(o==null){

this.handleFailure();
return;}

var r=n.getStorageKey();
this.$RelayCachedDataRestorator_cachedRootCallMap[r]=
this.$RelayCachedDataRestorator_cachedRootCallMap[r]||{};
this.$RelayCachedDataRestorator_cachedRootCallMap[r][p||'']=o;
q.dataID=o;};
m.prototype.

restoreFragmentData=
function(n,
o,
p){

this.process(function(){
this.visitFragment(o,
{dataID:n,
node:o,
path:p,
rangeCalls:undefined});}.

bind(this));};
m.prototype.

restoreQueriesData=function(n){
this.process(function(){
c('forEachObject')(n,function(o){
if(this.$RelayCachedDataRestorator_state==='COMPLETED')
return;

if(o)
this.visitRoot(o,
{dataID:undefined,
node:o,
path:c('RelayQueryPath').create(o),
rangeCalls:undefined});}.


bind(this));}.
bind(this));};
m.prototype.

traverse=
function(n,
o){


o.dataID!=null||h(0,
'RelayCachedDataRestorator: Attempted to traverse without a '+
'`dataID`.');var p=

c('findRelayQueryLeaves')
(this.$RelayCachedDataRestorator_store,
this.$RelayCachedDataRestorator_cachedRecords,
o.node,
o.dataID,
o.path,
o.rangeCalls),q=p.missingData,r=p.pendingNodeStates;

if(q){
this.handleFailure();
return;}

for(var s=0;s<r.length;s++){
if(this.$RelayCachedDataRestorator_state==='COMPLETED')
return;


r[s].dataID!=null||h(0,
'RelayCachedDataRestorator: Attempted to visit a node without '+
'a `dataID`.');

this.visitNode
(r[s].node,
r[s].dataID,
r[s]);}};


m.prototype.

visitIdentifiedRoot=
function(n,
o,
p){

var q=
this.$RelayCachedDataRestorator_store.getDataID(n.getStorageKey(),o);
if(q==null){
j.visitIdentifiedRoot.call(this,n,o,p);}else 

this.traverse(n,
{dataID:q,
node:n,
path:c('RelayQueryPath').create(n),
rangeCalls:undefined});};





c('RelayProfiler').instrumentMethods(m.prototype,
{handleIdentifiedRootVisited:
'RelayCachedDataRestorator.handleIdentifiedRootVisited',
handleNodeVisited:'RelayCachedDataRestorator.handleNodeVisited',
queueIdentifiedRoot:'RelayCachedDataRestorator.queueRoot',
queueNode:'RelayCachedDataRestorator.queueNode',
restoreFragmentData:'RelayCachedDataRestorator.readFragment',
restoreQueriesData:'RelayCachedDataRestorator.read',
traverse:'RelayCachedDataRestorator.traverse',
visitNode:'RelayCachedDataRestorator.visitNode',
visitRoot:'RelayCachedDataRestorator.visitRoot'});


f.exports=
{restoreFragmentDataFromCache:k,
restoreQueriesDataFromCache:l};}),null);

/** shared/relay/oss/react-relay/classic/traversal/writeRelayQueryPayload.js */























__d('writeRelayQueryPayload',['RelayNodeInterface','RelayProfiler','RelayQueryPath','generateClientID'],(function a(b,c,d,e,f,g){

'use strict';











var h=c('RelayNodeInterface').ID;







function i
(j,
k,
l){

var m=j.getRecordStore(),
n=j.getRecordWriter(),
o=c('RelayQueryPath').create(k);

c('RelayNodeInterface').getResultsFromPayload(k,l).
forEach(function(p){var q=p.result,r=p.rootCallInfo,
s=r.storageKey,t=r.identifyingArgKey,

u=void 0;

if(typeof q==='object'&&
q&&
typeof q[h]==='string')

u=q[h];


if(u==null)
u=
m.getDataID(s,t)||c('generateClientID')();


n.putDataID
(s,
t,
u);

j.writePayload(k,u,q,o);});}



f.exports=c('RelayProfiler').instrument
('writeRelayQueryPayload',
i);}),null);

/** shared/relay/oss/react-relay/classic/store/RelayMutationTracker.js */























__d('RelayMutationTracker',['RelayRecord'],(function a(b,c,d,e,f,g){

'use strict';










var h={},



i={},



j={},
k={},







l=






{isClientOnlyID:function m(n){

return (c('RelayRecord').isClientID(n)&&
!h[n]);},







updateClientServerIDMap:function m
(n,
o){

h[n]=o;},





getServerIDForClientID:function m
(n){

return h[n]||null;},





putClientIDForMutation:function m
(n,
o){

i[o]=n;



var p=
l.getErrorNodeForMutation(o);
if(p){
l.deleteMutationForErrorNode(p);
l.putErrorNodeForMutation(n,o);}},






getClientIDForMutation:function m
(n){

return i[n];},





deleteClientIDForMutation:function m
(n){

delete i[n];},





putErrorNodeForMutation:function m
(n,
o){

k[n]=o;
j[o]=n;},






getMutationForErrorNode:function m
(n){

return k[n];},






getErrorNodeForMutation:function m
(n){

return j[n];},


deleteMutationForErrorNode:function m
(n){

delete k[n];},


deleteErrorNodeForMutation:function m
(n){

delete j[n];}};



f.exports=l;}),null);

/** shared/relay/oss/react-relay/classic/traversal/writeRelayUpdatePayload.js */























__d('writeRelayUpdatePayload',['invariant','GraphQLMutatorConstants','RelayClassicRecordState','RelayConnectionInterface','RelayMutationTracker','RelayMutationType','RelayNodeInterface','RelayProfiler','RelayQuery','RelayQueryPath','generateClientEdgeID','generateClientID','getRangeBehavior','warning'],(function a(b,c,d,e,f,g,h){

'use strict';var i,


































j=c('RelayConnectionInterface').CLIENT_MUTATION_ID,k=c('RelayConnectionInterface').EDGES,
l=c('RelayNodeInterface').ANY_TYPE,m=c('RelayNodeInterface').ID,n=c('RelayNodeInterface').NODE,
o=c('GraphQLMutatorConstants').APPEND,p=c('GraphQLMutatorConstants').IGNORE,q=c('GraphQLMutatorConstants').PREPEND,r=c('GraphQLMutatorConstants').REFETCH,s=c('GraphQLMutatorConstants').REMOVE,

t=c('RelayQuery').Field.build
({fieldName:k,
type:l,
metadata:
{canHaveSubselections:true,
isPlural:true}}),


u=(i=
{error:true},i[
j]=true,i),

v='client:cursor';







function w
(ja,
ka,
la,ma){

var na=ma.configs,oa=ma.isOptimisticUpdate;
na.forEach(function(pa){
switch(pa.type){
case c('RelayMutationType').NODE_DELETE:
x(ja,la,pa);
break;
case c('RelayMutationType').RANGE_ADD:
ba
(ja,
la,
ka,
pa,
oa);

break;
case c('RelayMutationType').RANGE_DELETE:
da(ja,la,pa);
break;
case c('RelayMutationType').FIELDS_CHANGE:
case c('RelayMutationType').REQUIRED_CHILDREN:
break;



default:}});




z(ja,la,ka);}







function x
(ja,
ka,
la){

var ma=ka[la.deletedIDFieldName];
if(!ma)


return;


if(Array.isArray(ma)){
ma.forEach(function(na){



y(ja,na);});}else 



y(ja,ma);}







function y
(ja,
ka){

var la=ja.getRecordStore(),
ma=ja.getRecordWriter(),

na=la.getRecordState(ka);
if(na===c('RelayClassicRecordState').NONEXISTENT)
return;



var oa=la.getConnectionIDsForRecord(ka);
if(oa)
oa.forEach(function(pa){
var qa=c('generateClientEdgeID')(pa,ka);
ma.applyRangeUpdate(pa,qa,s);
ja.recordUpdate(qa);
ja.recordUpdate(pa);

y(ja,qa);});




ma.deleteRecord(ka);
ja.recordUpdate(ka);}







function z
(ja,
ka,
la){

var ma=ja.getRecordStore();






for(var na in ka){
if(!Object.prototype.hasOwnProperty.call(ka,na))
continue;

var oa=ka[na];
if(typeof oa!=='object'||oa==null)
continue;




if(m in oa||


ma.getDataID(na)||
Array.isArray(oa))

aa
(ja,
na,
oa,
la);}}








function aa
(ja,
ka,
la,
ma){


if(ka in u)
return;

if(Array.isArray(la)){
la.forEach(function(sa){
if(typeof sa==='object'&&sa!=null&&!Array.isArray(sa))
if(ga(sa,m))
aa(ja,ka,sa,ma);});



return;}


var na=la,

oa=ja.getRecordStore(),
pa=ga(na,m),
qa=void 0;

if(pa!=null){
qa=c('RelayQueryPath').createForID(pa,'writeRelayUpdatePayload');}else{

pa=oa.getDataID(ka);
if(!pa)

h(0,
'writeRelayUpdatePayload(): Expected a record ID in the response '+
'payload supplied to update the store for field `%s`, '+
'payload keys [%s], operation name `%s`.',
ka,
Object.keys(la).join(', '),
ma.getName());




qa=c('RelayQueryPath').create(c('RelayQuery').Root.build
('writeRelayUpdatePayload',
ka,
null,
null,

{identifyingArgName:null,
identifyingArgType:null,
isAbstract:true,
isDeferred:false,
isPlural:false},

l));}




var ra=function sa(ta){
ta.getChildren().forEach(function(ua){
if(ua instanceof c('RelayQuery').Fragment){
sa(ua);}else

if(ua instanceof c('RelayQuery').Field&&
ua.getSerializationKey()===ka)


if(qa&&pa){

ja.createRecordIfMissing
(ua,
pa,
qa,
na);

ja.writePayload
(ua,
pa,
na,
qa);}});};





ra(ma);}








function ba
(ja,
ka,
la,
ma,
na){

var oa=ga(ka,j);

oa||h(0,
'writeRelayUpdatePayload(): Expected operation `%s` to have a `%s`.',
la.getName(),
j);

var pa=ja.getRecordStore(),


qa=ha(ka,ma.edgeName),
ra=qa&&ha(qa,n);
if(!qa||!ra)
return;



var sa=ma.parentID;
if(!sa){
var ta=ha(qa,'source');
if(ta)
sa=ga(ta,m);}



sa||h(0,
'writeRelayUpdatePayload(): Cannot insert edge without a configured '+
'`parentID` or a `%s.source.id` field.',
ma.edgeName);


var ua=ga(ra,m)||c('generateClientID')(),
va=qa.cursor||v,
wa=babelHelpers['extends']({},
qa,
{cursor:va,
node:babelHelpers['extends']({},
ra,
{id:ua})}),




xa=
pa.getConnectionIDsForField(sa,ma.connectionName);
if(xa)
xa.forEach(function(za){return ca
(ja,
la,
ma,
za,
ua,
wa);});



if(na){


c('RelayMutationTracker').putClientIDForMutation
(ua,
oa);}else{





var ya=
c('RelayMutationTracker').getClientIDForMutation(oa);
if(ya){
c('RelayMutationTracker').updateClientServerIDMap
(ya,
ua);

c('RelayMutationTracker').deleteClientIDForMutation(oa);}}}








function ca
(ja,
ka,
la,
ma,
na,
oa){

var pa=ja.getRecordStore(),
qa=ja.getRecordWriter(),
ra=pa.getRangeFilterCalls(ma),
sa=ra?
c('getRangeBehavior')(la.rangeBehaviors,ra):
null;


if(!sa){
c('warning')
(sa,
'Using `null` as a rangeBehavior value is deprecated. Use `ignore` to avoid '+
'refetching a range.');

return;}


if(sa===p)
return;


var ta=c('generateClientEdgeID')(ma,na),
ua=pa.getPathToRecord(ma);

ua||h(0,
'writeRelayUpdatePayload(): Expected a path for connection record, `%s`.',
ma);

ua=c('RelayQueryPath').getPath(ua,t,ta);


ja.createRecordIfMissing(t,ta,ua,oa);



var va=false,
wa=function xa(ya){
ya.getChildren().forEach(function(za){
if(za instanceof c('RelayQuery').Fragment){
xa(za);}else

if(za instanceof c('RelayQuery').Field&&
za.getSchemaName()===la.edgeName){

va=true;
if(ua)
ja.writePayload
(za,
ta,
oa,
ua);}});};





wa(ka);


va||h(0,
'writeRelayUpdatePayload(): Expected mutation query to include the '+
'relevant edge field, `%s`.',
la.edgeName);



if(sa in c('GraphQLMutatorConstants').RANGE_OPERATIONS){
qa.applyRangeUpdate(ma,ta,sa);
ja.recordUpdate(ma);}}


















function da
(ja,
ka,
la){

var ma=ja.getRecordStore(),

na=null;

if(Array.isArray(la.deletedIDFieldName)){
na=fa(ma,la.deletedIDFieldName,ka);}else{

na=ka[la.deletedIDFieldName];


if(typeof na==='number'){
c('warning')
(false,
'writeRelayUpdatePayload(): Expected `%s` to be a string, got the '+
'number `%s`.',
la.deletedIDFieldName,
na);

na=''+na;}



na==null||!Array.isArray(na)||typeof na!=='string'||h(0,
'writeRelayUpdatePayload(): Expected `%s` to be an array/string, got `%s`.',
la.deletedIDFieldName,
JSON.stringify(na));


if(!Array.isArray(na))
na=[na];}




na!=null||h(0,
'writeRelayUpdatePayload(): Missing ID(s) for deleted record at field `%s`.',
la.deletedIDFieldName);



var oa=la.pathToConnection.pop(),
pa=
fa(ma,la.pathToConnection,ka);

la.pathToConnection.push(oa);
if(!pa)
return;

var qa=pa[0],

ra=ma.getConnectionIDsForField
(qa,
oa);

if(ra)
ra.forEach(function(sa){
if(na)
na.forEach(function(ta){
ea(ja,sa,ta);});});}









function ea
(ja,
ka,
la){

var ma=ja.getRecordWriter(),
na=c('generateClientEdgeID')(ka,la);
ma.applyRangeUpdate(ka,na,s);

y(ja,na);
ja.recordUpdate(ka);}


















function fa
(ja,
ka,
la){




if(ka.length===1){
var ma=ja.getDataID(ka[0]);
if(ma)
return [ma];}



var na=la;
ka.forEach(function(oa,pa){
if(!na||Array.isArray(na))
return;

if(pa===ka.length-1){
na=ia(na,oa);}else 

na=ha(na,oa);});



if(na){
if(!Array.isArray(na))
na=[na];

return na.map(function(oa){
var pa=ga(oa,m);

pa!=null||h(0,
'writeRelayUpdatePayload(): Expected `%s.id` to be a string.',
ka.join('.'));

return pa;});}


return null;}


function ga
(ja,
ka){

var la=ja[ka];

if(typeof la==='number'){
c('warning')
(false,
'writeRelayUpdatePayload(): Expected `%s` to be a string, got the '+
'number `%s`.',
ka,
la);

la=''+la;}


la==null||typeof la==='string'||h(0,
'writeRelayUpdatePayload(): Expected `%s` to be a string, got `%s`.',
ka,
JSON.stringify(la));

return la;}


function ha
(ja,
ka){

var la=ja[ka];

la==null||typeof la==='object'&&!Array.isArray(la)||h(0,
'writeRelayUpdatePayload(): Expected `%s` to be an object, got `%s`.',
ka,
JSON.stringify(la));

return la;}


function ia
(ja,
ka){

var la=ja[ka];

la==null||typeof la==='object'||h(0,
'writeRelayUpdatePayload(): Expected `%s` to be an object/array, got `%s`.',
ka,
JSON.stringify(la));

return la;}


f.exports=c('RelayProfiler').instrument
('writeRelayUpdatePayload',
w);}),null);

/** shared/relay/oss/react-relay/classic/store/RelayStoreData.js */























__d('RelayStoreData',['invariant','GraphQLQueryRunner','GraphQLRange','GraphQLStoreChangeEmitter','GraphQLStoreRangeUtils','QueryBuilder','RelayChangeTracker','RelayClassicRecordState','RelayConnectionInterface','RelayGarbageCollector','RelayMetaRoute','RelayMutationQueue','RelayNetworkLayer','RelayNodeInterface','RelayPendingQueryTracker','RelayProfiler','RelayQuery','RelayQueryPath','RelayQueryTracker','RelayQueryWriter','RelayRecord','RelayRecordStore','RelayRecordWriter','RelayTaskQueue','forEachObject','generateForceIndex','mapObject','nullthrows','warning','writeRelayQueryPayload','writeRelayUpdatePayload','restoreRelayCacheData','RelayStoreConstants'],(function a(b,c,d,e,f,g,h){

'use strict';



































var i=c('restoreRelayCacheData').restoreFragmentDataFromCache,
j=c('restoreRelayCacheData').restoreQueriesDataFromCache,


















k=c('RelayConnectionInterface').CLIENT_MUTATION_ID,
l=c('RelayNodeInterface').ID,m=c('RelayNodeInterface').ID_TYPE,n=c('RelayNodeInterface').NODE,o=c('RelayNodeInterface').NODE_TYPE,p=c('RelayNodeInterface').TYPENAME,
q=c('RelayStoreConstants').ROOT_ID,r=c('RelayStoreConstants').ROOT_TYPE,
s=c('RelayClassicRecordState').EXISTENT,

t=c('RelayQuery').Field.build
({fieldName:l,
type:'String'}),

u=c('RelayQuery').Field.build
({fieldName:p,
type:'String'});





























function v(){







var y=arguments.length<=0||arguments[0]===undefined?{}:arguments[0],z=arguments.length<=1||arguments[1]===undefined?{}:arguments[1],aa=arguments.length<=2||arguments[2]===undefined?{}:arguments[2],ba=arguments.length<=3||arguments[3]===undefined?{}:arguments[3],ca=arguments.length<=4||arguments[4]===undefined?{}:arguments[4],da=arguments.length<=5||arguments[5]===undefined?{}:arguments[5],ea=arguments.length<=6||arguments[6]===undefined?new (c('GraphQLStoreRangeUtils'))():arguments[6];
this.$RelayStoreData_cacheManager=null;
this.$RelayStoreData_cachedRecords=y;
this.$RelayStoreData_cachedRootCallMap=z;
this.$RelayStoreData_cachedStore=new (c('RelayRecordStore'))
({cachedRecords:y,records:ba},
{cachedRootCallMap:z,rootCallMap:ca},
da);

this.$RelayStoreData_changeEmitter=new (c('GraphQLStoreChangeEmitter'))(ea);
this.$RelayStoreData_mutationQueue=new (c('RelayMutationQueue'))(this);
this.$RelayStoreData_networkLayer=new (c('RelayNetworkLayer'))();
this.$RelayStoreData_nodeRangeMap=da;
this.$RelayStoreData_pendingQueryTracker=new (c('RelayPendingQueryTracker'))(this);
this.$RelayStoreData_queryRunner=new (c('GraphQLQueryRunner'))(this);
this.$RelayStoreData_queryTracker=new (c('RelayQueryTracker'))();
this.$RelayStoreData_queuedRecords=aa;
this.$RelayStoreData_queuedStore=new (c('RelayRecordStore'))
({cachedRecords:y,queuedRecords:aa,records:ba},
{cachedRootCallMap:z,rootCallMap:ca},
da);

this.$RelayStoreData_records=ba;
this.$RelayStoreData_recordStore=new (c('RelayRecordStore'))
({records:ba},
{rootCallMap:ca},
da);

this.$RelayStoreData_rangeData=ea;
this.$RelayStoreData_rootCallMap=ca;
this.$RelayStoreData_taskQueue=new (c('RelayTaskQueue'))();}
v.prototype.






initializeGarbageCollector=function(y){

!this.$RelayStoreData_garbageCollector||h(0,
'RelayStoreData: Garbage collector is already initialized.');

var z=this.$RelayStoreData_isStoreDataEmpty();
c('warning')
(z,
'RelayStoreData: Garbage collection can only be initialized when no '+
'data is present.');

if(z)
this.$RelayStoreData_garbageCollector=new (c('RelayGarbageCollector'))(this,y);};

v.prototype.









injectQueryTracker=function(y){
this.$RelayStoreData_queryTracker=y;};
v.prototype.





injectTaskScheduler=function(y){
this.$RelayStoreData_taskQueue.injectScheduler(y);};
v.prototype.





injectCacheManager=function(y){
this.$RelayStoreData_cacheManager=y;};
v.prototype.

clearCacheManager=function(){
this.$RelayStoreData_cacheManager=null;};
v.prototype.

hasCacheManager=function(){
return !!this.$RelayStoreData_cacheManager;};
v.prototype.

getCacheManager=function(){
return this.$RelayStoreData_cacheManager;};
v.prototype.




hasOptimisticUpdate=function(y){
y=this.getRangeData().getCanonicalClientID(y);
return this.getQueuedStore().hasOptimisticUpdate(y);};
v.prototype.






getClientMutationIDs=function(y){
y=this.getRangeData().getCanonicalClientID(y);
return this.getQueuedStore().getClientMutationIDs(y);};
v.prototype.






restoreQueriesFromCache=
function(y,
z){

var aa=this.$RelayStoreData_cacheManager;

aa||h(0,
'RelayStoreData: `restoreQueriesFromCache` should only be called '+
'when cache manager is available.');

var ba=new (c('RelayChangeTracker'))(),
ca=c('RelayProfiler').profile('RelayStoreData.readFromDiskCache');
return j
(y,
this.$RelayStoreData_queuedStore,
this.$RelayStoreData_cachedRecords,
this.$RelayStoreData_cachedRootCallMap,
this.$RelayStoreData_garbageCollector,
aa,
ba,

{onSuccess:function(){
this.$RelayStoreData_handleChangedAndNewDataIDs(ba.getChangeSet());
ca.stop();
z.onSuccess&&z.onSuccess();}.
bind(this),
onFailure:function(){
this.$RelayStoreData_handleChangedAndNewDataIDs(ba.getChangeSet());
ca.stop();
z.onFailure&&z.onFailure();}.
bind(this)});};


v.prototype.






restoreFragmentFromCache=
function(y,
z,
aa,
ba){

var ca=this.$RelayStoreData_cacheManager;

ca||h(0,
'RelayStoreData: `restoreFragmentFromCache` should only be called when '+
'cache manager is available.');

var da=new (c('RelayChangeTracker'))(),
ea=
c('RelayProfiler').profile('RelayStoreData.readFragmentFromDiskCache');
return i
(y,
z,
aa,
this.$RelayStoreData_queuedStore,
this.$RelayStoreData_cachedRecords,
this.$RelayStoreData_cachedRootCallMap,
this.$RelayStoreData_garbageCollector,
ca,
da,

{onSuccess:function(){
this.$RelayStoreData_handleChangedAndNewDataIDs(da.getChangeSet());
ea.stop();
ba.onSuccess&&ba.onSuccess();}.
bind(this),
onFailure:function(){
this.$RelayStoreData_handleChangedAndNewDataIDs(da.getChangeSet());
ea.stop();
ba.onFailure&&ba.onFailure();}.
bind(this)});};


v.prototype.






handleOSSQueryPayload=
function(y,
z,
aa){

var ba=c('RelayProfiler').profile('RelayStoreData.handleQueryPayload'),
ca=new (c('RelayChangeTracker'))(),
da=this.getRecordWriter(),
ea=new (c('RelayQueryWriter'))
(this.$RelayStoreData_queuedStore,
da,
this.$RelayStoreData_queryTracker,
ca,

{forceIndex:aa,
updateTrackedQueries:true});


x(y,z).forEach(function(fa){var ga=fa.field,ha=fa.root,ia=fa.rootPayload;

c('writeRelayQueryPayload')(ea,ha,ia);


var ja=c('RelayQueryPath').getRootRecordPath();
da.putRecord(q,r,ja);
if(this.$RelayStoreData_queuedStore.getRecordState(q)!==s){
ca.createID(q);}else 

ca.updateID(q);



var ka=[];
c('RelayNodeInterface').getResultsFromPayload(ha,ia).
forEach(function(na){var oa=na.result,pa=na.rootCallInfo,
qa=pa.storageKey,ra=pa.identifyingArgKey,
sa=da.getDataID(qa,ra);
if(sa!=null)
ka.push(sa);});




var la=ga.getStorageKey();
if(ga.isPlural()){
da.putLinkedRecordIDs(q,la,ka);}else{

var ma=ka[0];
if(ma!=null){
da.putLinkedRecordID(q,la,ma);}else 

da.putField(q,la,null);}}.


bind(this));
this.$RelayStoreData_handleChangedAndNewDataIDs(ca.getChangeSet());
ba.stop();};
v.prototype.




handleQueryPayload=
function(y,
z,
aa){

var ba=c('RelayProfiler').profile('RelayStoreData.handleQueryPayload'),
ca=new (c('RelayChangeTracker'))(),
da=new (c('RelayQueryWriter'))
(this.$RelayStoreData_queuedStore,
this.getRecordWriter(),
this.$RelayStoreData_queryTracker,
ca,

{forceIndex:aa,
updateTrackedQueries:true});


c('writeRelayQueryPayload')
(da,
y,
z);

this.$RelayStoreData_handleChangedAndNewDataIDs(ca.getChangeSet());
ba.stop();};
v.prototype.




handleFragmentPayload=
function(y,
z,
aa,
ba,
ca){

var da=
c('RelayProfiler').profile('RelayStoreData.handleFragmentPayload'),
ea=new (c('RelayChangeTracker'))(),
fa=new (c('RelayQueryWriter'))
(this.$RelayStoreData_queuedStore,
this.getRecordWriter(),
this.$RelayStoreData_queryTracker,
ea,

{forceIndex:ca,
updateTrackedQueries:true});


fa.createRecordIfMissing(z,y,aa,ba);
fa.writePayload(z,y,ba,aa);
this.$RelayStoreData_handleChangedAndNewDataIDs(ea.getChangeSet());
da.stop();};
v.prototype.




handleUpdatePayload=
function(y,
z,aa){

var ba=aa.configs,ca=aa.isOptimisticUpdate,
da=c('RelayProfiler').profile('RelayStoreData.handleUpdatePayload'),
ea=new (c('RelayChangeTracker'))(),
fa=void 0;
if(ca){
var ga=z[k];

typeof ga==='string'||h(0,
'RelayStoreData.handleUpdatePayload(): Expected optimistic payload '+
'to have a valid `%s`.',
k);

fa=
this.getRecordWriterForOptimisticMutation(ga);}else 

fa=this.$RelayStoreData_getRecordWriterForMutation();

var ha=new (c('RelayQueryWriter'))
(this.$RelayStoreData_queuedStore,
fa,
this.$RelayStoreData_queryTracker,
ea,

{forceIndex:c('generateForceIndex')(),
isOptimisticUpdate:ca,
updateTrackedQueries:false});


c('writeRelayUpdatePayload')
(ha,
y,
z,
{configs:ba,isOptimisticUpdate:ca});

this.$RelayStoreData_handleChangedAndNewDataIDs(ea.getChangeSet());
da.stop();};
v.prototype.





buildFragmentQueryForDataID=
function(y,
z){

if(c('RelayRecord').isClientID(z)){
var aa=this.$RelayStoreData_queuedStore.getPathToRecord
(this.$RelayStoreData_rangeData.getCanonicalClientID(z));


aa||h(0,
'RelayStoreData.buildFragmentQueryForDataID(): Cannot refetch '+
'record `%s` without a path.',
z);

return c('RelayQueryPath').getQuery
(this.$RelayStoreData_cachedStore,
aa,
y);}




return c('RelayQuery').Root.build
(y.getDebugName()||'UnknownQuery',
n,
z,
[t,u,y],

{identifyingArgName:l,
identifyingArgType:m,
isAbstract:true,
isDeferred:false,
isPlural:false},

o);};

v.prototype.

getNodeData=function(){
return this.$RelayStoreData_records;};
v.prototype.

getQueuedData=function(){
return this.$RelayStoreData_queuedRecords;};
v.prototype.

clearQueuedData=function(){
c('forEachObject')(this.$RelayStoreData_queuedRecords,function(y,z){
delete this.$RelayStoreData_queuedRecords[z];
this.$RelayStoreData_changeEmitter.broadcastChangeForID(z);}.
bind(this));};
v.prototype.

getCachedData=function(){
return this.$RelayStoreData_cachedRecords;};
v.prototype.

getGarbageCollector=function(){
return this.$RelayStoreData_garbageCollector;};
v.prototype.

getMutationQueue=function(){
return this.$RelayStoreData_mutationQueue;};
v.prototype.

getNetworkLayer=function(){
return this.$RelayStoreData_networkLayer;};
v.prototype.




getCachedStore=function(){
return this.$RelayStoreData_cachedStore;};
v.prototype.




getQueuedStore=function(){
return this.$RelayStoreData_queuedStore;};
v.prototype.




getRecordStore=function(){
return this.$RelayStoreData_recordStore;};
v.prototype.




getRecordWriter=function(){
return new (c('RelayRecordWriter'))
(this.$RelayStoreData_records,
this.$RelayStoreData_rootCallMap,
false,
this.$RelayStoreData_nodeRangeMap,
this.$RelayStoreData_cacheManager?
this.$RelayStoreData_cacheManager.getQueryWriter():
null);};

v.prototype.

getQueryTracker=function(){
return this.$RelayStoreData_queryTracker;};
v.prototype.

getQueryRunner=function(){
return this.$RelayStoreData_queryRunner;};
v.prototype.

getChangeEmitter=function(){
return this.$RelayStoreData_changeEmitter;};
v.prototype.

getRangeData=function(){
return this.$RelayStoreData_rangeData;};
v.prototype.

getPendingQueryTracker=function(){
return this.$RelayStoreData_pendingQueryTracker;};
v.prototype.

getTaskQueue=function(){
return this.$RelayStoreData_taskQueue;};
v.prototype.







getRootCallData=function(){
return this.$RelayStoreData_rootCallMap;};
v.prototype.

$RelayStoreData_isStoreDataEmpty=function(){

return (Object.keys(this.$RelayStoreData_records).length===0&&
Object.keys(this.$RelayStoreData_queuedRecords).length===0&&
Object.keys(this.$RelayStoreData_cachedRecords).length===0);};

v.prototype.





$RelayStoreData_handleChangedAndNewDataIDs=function(y){
var z=Object.keys(y.updated),
aa=Object.keys(y.created),
ba=this.$RelayStoreData_garbageCollector;
z.forEach(function(ca){return this.$RelayStoreData_changeEmitter.broadcastChangeForID(ca);}.bind(this));



aa.forEach(function(ca){
ba&&ba.register(ca);
this.$RelayStoreData_changeEmitter.broadcastChangeForID(ca);}.
bind(this));};
v.prototype.

$RelayStoreData_getRecordWriterForMutation=function(){
return new (c('RelayRecordWriter'))
(this.$RelayStoreData_records,
this.$RelayStoreData_rootCallMap,
false,
this.$RelayStoreData_nodeRangeMap,
this.$RelayStoreData_cacheManager?
this.$RelayStoreData_cacheManager.getMutationWriter():
null);};

v.prototype.

getRecordWriterForOptimisticMutation=
function(y){

return new (c('RelayRecordWriter'))
(this.$RelayStoreData_queuedRecords,
this.$RelayStoreData_rootCallMap,
true,
this.$RelayStoreData_nodeRangeMap,
null,
y);};

v.prototype.

toJSON=function(){



var y=function z(aa){
return c('mapObject')(aa,function(ba){
var ca=babelHelpers['extends']({},ba);
delete ca[c('RelayRecord').MetadataKey.PATH];
return ca;});};




return {cachedRecords:y(this.$RelayStoreData_cachedRecords),
cachedRootCallMap:this.$RelayStoreData_cachedRootCallMap,
queuedRecords:y(this.$RelayStoreData_queuedRecords),
records:y(this.$RelayStoreData_records),
rootCallMap:this.$RelayStoreData_rootCallMap,
nodeRangeMap:this.$RelayStoreData_nodeRangeMap};};

v.

fromJSON=function(y){

y||h(0,
'RelayStoreData: JSON object is empty');


var z=





y.cachedRecords,aa=y.cachedRootCallMap,ba=y.queuedRecords,ca=y.records,da=y.rootCallMap,ea=y.nodeRangeMap;

w(z);
w(ba);
w(ca);

return new v
(z,
aa,
ba,
ca,
da,
ea);};








function w(y){
for(var z in y){
var aa=y[z],
ba=aa.__range__;
if(ba)
aa.__range__=c('GraphQLRange').fromJSON(ba);}}











function x
(y,
z){





var aa=[];
y.getChildren().forEach(function(ba){
var ca=ba;

if(!(ca instanceof c('RelayQuery').Field)||
!ca.canHaveSubselections())


return;


var da=
c('nullthrows')(c('QueryBuilder').getField(ca.getConcreteQueryNode())),

ea=void 0,
fa=void 0,
ga=da.calls&&da.calls[0];
if(ga){
ea=ga.name;
fa=ga.metadata&&ga.metadata.type;}


var ha=
{calls:da.calls,
children:da.children,
directives:[],
fieldName:da.fieldName,
isDeferred:false,
kind:'Query',
metadata:
{identifyingArgName:ea,
identifyingArgType:fa,
isAbstract:da.metadata&&da.metadata.isAbstract,
isPlural:da.metadata&&da.metadata.isPlural},

name:y.getName(),


type:ca.getType()},


ia=c('RelayQuery').Root.create
(ha,
c('RelayMetaRoute').get('$RelayEnvironment'),
y.getVariables()),



ja=ca.getSerializationKey(),
ka={};
if(!Object.prototype.hasOwnProperty.call(z,ja))


return;

ka[ia.getFieldName()]=z[ja];
aa.push
({field:ca,
root:ia,
rootPayload:ka});});


return aa;}


c('RelayProfiler').instrumentMethods(v.prototype,
{handleQueryPayload:'RelayStoreData.prototype.handleQueryPayload',
handleUpdatePayload:'RelayStoreData.prototype.handleUpdatePayload'});


f.exports=v;}),null);

/** shared/relay/oss/react-relay/classic/tools/relayUnstableBatchedUpdates.js */























__d('relayUnstableBatchedUpdates',['ReactDOM'],(function a(b,c,d,e,f,g){

'use strict';



f.exports=c('ReactDOM').unstable_batchedUpdates;}),null);

/** shared/relay/oss/react-relay/classic/store/RelayEnvironment.js */























__d('RelayEnvironment',['GraphQLStoreQueryResolver','RelayClassicCore','RelayGraphQLMutation','RelayMetaRoute','RelayQuery','RelayQueryPath','RelayQueryRequest','RelayQueryResultObservable','RelayStoreData','RelayVariables','deepFreeze','forEachRootCallArg','generateForceIndex','readRelayQueryData','recycleNodesInto','relayUnstableBatchedUpdates','warning'],(function a(b,c,d,e,f,g){

'use strict';h.prototype.


















































































































applyMutation=function(j){









var k=j.configs,l=j.operation,m=j.optimisticResponse,n=j.variables,
o=new (c('RelayGraphQLMutation'))
(l.node,
c('RelayVariables').getOperationVariables(l,n),
null,
this);

o.applyOptimistic
(l.node,
m,
k);

var p=false;

return {dispose:function q(){
if(!p){
p=true;
o.rollback();}}};};



h.prototype.

commitPayload=
function(j,
k){

var l=c('RelayQuery').Fragment.create
(j.node,
c('RelayMetaRoute').get('$RelayEnvironment'),
j.variables),

m=c('RelayQueryPath').getRootRecordPath();
this.$RelayEnvironment_storeData.handleFragmentPayload
(j.dataID,
l,
m,
k,
null);};

h.prototype.






$RelayEnvironment_lookup=function(j){
var k=c('RelayQuery').Fragment.create
(j.node,
c('RelayMetaRoute').get('$RelayEnvironment'),
j.variables),l=

c('readRelayQueryData')(this.$RelayEnvironment_storeData,k,j.dataID),m=l.data,n=l.dataIDs;


n[j.dataID]=true;
return babelHelpers['extends']({},
j,
{data:m,
seenRecords:n});};

h.prototype.

lookup=function(j){
var k=this.$RelayEnvironment_lookup(j);



return k;};
h.prototype.

sendMutation=function(j){















var k=j.configs,l=j.onCompleted,m=j.onError,n=j.operation,o=j.optimisticOperation,p=j.optimisticResponse,q=j.variables,
r=false,
s=new (c('RelayGraphQLMutation'))
(n.node,
c('RelayVariables').getOperationVariables(n,q),
null,
this,

{onSuccess:function t(u){
if(r)
return;

l&&l(u);},

onFailure:function t(u){
if(r)
return;

if(m){
var v=u.getError();
if(!v)
v=new Error('RelayEnvironment: Unknown error executing mutation '+
n.node.name);


m(v);}}});





if(p)
s.applyOptimistic
(o?o.node:n.node,
p,
k);



s.commit(k);

return {dispose:function t(){
if(!r)
r=true;}};};



h.prototype.

subscribe=
function(j,
k){

var l=void 0,
m=this.$RelayEnvironment_storeData.getChangeEmitter(),
n=function(){

var o=this.$RelayEnvironment_lookup(j);

o.data=c('recycleNodesInto')(j.data,o.data);
if(o.data===j.data)

return;




if(l)
l.remove();

l=m.addListenerForIDs
(Object.keys(o.seenRecords),
n);

j=o;
k(j);}.
bind(this);
l=m.addListenerForIDs
(Object.keys(j.seenRecords),
n);


return {dispose:function o(){
if(l){
l.remove();
l=null;}}};};



h.prototype.

retain=function(j){

return {dispose:function k(){}};};

h.prototype.

sendQuery=function(j){











var k=j.cacheConfig,l=j.onCompleted,m=j.onError,n=j.onNext,o=j.operation,
p=false,
q=function t(){
p=true;},

r=c('RelayQuery').OSSQuery.create
(o.node,
c('RelayMetaRoute').get('$RelayEnvironment'),
o.variables),

s=new (c('RelayQueryRequest'))(r);
s.then
(function(t){
if(p)
return;

var u=k&&k.force?
c('generateForceIndex')():
null;
this.$RelayEnvironment_storeData.handleOSSQueryPayload(r,t.response,u);

n&&n(o.root);
l&&l();}.
bind(this),
function(t){
if(p)
return;

m&&m(t);});


this.$RelayEnvironment_storeData.getTaskQueue().enqueue(function(){
this.$RelayEnvironment_storeData.getNetworkLayer().sendQueries([s]);}.
bind(this));
return {dispose:q};};
h.prototype.

streamQuery=function(j){






return this.sendQuery(j);};












function h(j){
this.$RelayEnvironment_storeData=j?j:new (c('RelayStoreData'))();
this.$RelayEnvironment_storeData.getChangeEmitter().injectBatchingStrategy(c('relayUnstableBatchedUpdates'));


this.applyUpdate=this.applyUpdate.bind(this);
this.commitUpdate=this.commitUpdate.bind(this);
this.unstable_internal=c('RelayClassicCore');}
h.prototype.




getStoreData=function(){
return this.$RelayEnvironment_storeData;};
h.prototype.




injectDefaultNetworkLayer=function(j){
this.$RelayEnvironment_storeData.getNetworkLayer().injectDefaultImplementation(j);};
h.prototype.

injectNetworkLayer=function(j){
this.$RelayEnvironment_storeData.getNetworkLayer().injectImplementation(j);};
h.prototype.




injectQueryTracker=function(j){
this.$RelayEnvironment_storeData.injectQueryTracker(j);};
h.prototype.

addNetworkSubscriber=
function(j,
k){

return this.$RelayEnvironment_storeData.getNetworkLayer().addNetworkSubscriber
(j,
k);};

h.prototype.

injectTaskScheduler=function(j){
this.$RelayEnvironment_storeData.injectTaskScheduler(j);};
h.prototype.

injectCacheManager=function(j){
this.$RelayEnvironment_storeData.injectCacheManager(j);};
h.prototype.





primeCache=
function(j,
k){

return this.$RelayEnvironment_storeData.getQueryRunner().run(j,k);};
h.prototype.





forceFetch=
function(j,
k){

return this.$RelayEnvironment_storeData.getQueryRunner().forceFetch(j,k);};
h.prototype.




read=
function(j,
k,
l){

return c('readRelayQueryData')(this.$RelayEnvironment_storeData,j,k,l).data;};
h.prototype.




readAll=
function(j,
k,
l){

return k.map
(function(m){return c('readRelayQueryData')(this.$RelayEnvironment_storeData,j,m,l).data;}.bind(this));};

h.prototype.






readQuery=
function(j,
k){

var l=this.$RelayEnvironment_storeData.getQueuedStore(),
m=j.getStorageKey(),
n=[];
c('forEachRootCallArg')(j,function(o){var p=o.identifyingArgKey,
q=void 0,
r=l.getDataID(m,p);
if(r!=null)
q=this.read(j,r,k);

n.push(q);}.
bind(this));
return n;};
h.prototype.





observe=
function(j,
k){

return new (c('RelayQueryResultObservable'))(this.$RelayEnvironment_storeData,j,k);};
h.prototype.








getFragmentResolver=
function(j,
k){

return new (c('GraphQLStoreQueryResolver'))
(this.$RelayEnvironment_storeData,
j,
k);};

h.prototype.





applyUpdate=
function(j,
k){

j.bindEnvironment(this);
return this.$RelayEnvironment_storeData.getMutationQueue().
createTransaction(j,k).
applyOptimistic();};
h.prototype.






commitUpdate=
function(j,
k){

var l=this.applyUpdate(j,k),


m=l.getStatus();
setTimeout(function(){
if(l.getStatus()!==m)
return;

l.commit();});

return l;};
h.prototype.






update=
function(j,
k){

c('warning')
(false,
'`Relay.Store.update` is deprecated. Please use'+
' `Relay.Store.commitUpdate` or `Relay.Store.applyUpdate` instead.');

this.commitUpdate(j,k);};









function i(j){
Object.freeze(j);
if(j.data!=null)
c('deepFreeze')(j.data);

c('deepFreeze')(j.seenRecords);
c('deepFreeze')(j.variables);
return j;}


f.exports=h;}),null);

/** shared/relay/oss/react-relay/classic/store/RelayStore.js */























__d('RelayStore',['RelayEnvironment'],(function a(b,c,d,e,f,g){

'use strict';



f.exports=new (c('RelayEnvironment'))();}),null);
