if (self.CavalryLogger) { CavalryLogger.start_js(["HDj+A"]); }

/** __static_js_modules__/pixelratioconst.js */




__d("PixelRatioConst",[],(function a(b,c,d,e,f,g){

f.exports={cookieName:"dpr"};}),

null);

/** shared/core/QueryString.js */








__d('QueryString',[],(function a(b,c,d,e,f,g){






function h(l){
var m=[];
Object.keys(l).sort().forEach(function(n){
var o=l[n];

if(typeof o==='undefined')
return;


if(o===null){
m.push(n);
return;}


m.push(encodeURIComponent(n)+
'='+
encodeURIComponent(o));});

return m.join('&');}





function i(l,m){
var n={};
if(l==='')
return n;


var o=l.split('&');
for(var p=0;p<o.length;p++){
var q=o[p].split('=',2),
r=decodeURIComponent(q[0]);
if(m&&Object.prototype.hasOwnProperty.call(n,r))
throw new URIError('Duplicate key: '+r);

n[r]=q.length===2?
decodeURIComponent(q[1]):
null;}

return n;}







function j(l,m){
return l+
(l.indexOf('?')!==-1?'&':'?')+
(typeof m==='string'?
m:
k.encode(m));}


var k=
{encode:h,
decode:i,
appendToUrl:j};


f.exports=k;}),null);

/** shared/intl/FbtResult.js */




__d('FbtResult',['cx','ErrorUtils'],(function a(b,c,d,e,f,g,h){




var i=
typeof Symbol==='function'&&Symbol['for']&&
Symbol['for']('react.element')||
60103,

j=false;









function k(o,p,q,r){


var s="_4qba";
if(r)
if(p==='TRANSLATION'){
s="_4qbb";}else
if(p==='APPROVE'){
s="_4qbc";}else
if(p==='REPORT')
s="_4qbd";




return {$$typeof:i,
type:'em',
key:null,
ref:null,
props:

{className:s,
'data-intl-hash':r,
'data-intl-translation':q,
'data-intl-trid':'',
children:o},

_owner:null};}



var l=function o(p){
return k
(p.content,
p.inlineMode,
p.translation,
p.hash);};



function m(o){









}


function n(o,p,q,r){'use strict';
this.$FbtResult_contents=o;
this.$FbtResult_stringValue=null;

this.$$typeof=i;
this.type=l;
this.props=
{content:this.$FbtResult_contents,
inlineMode:p,
translation:q,
hash:r};

this.key=null;
this.ref=null;}














n.prototype.

flattenToArray=function(){'use strict';
return n.flattenToArray(this.$FbtResult_contents);};
n.prototype.

getContents=function(){'use strict';
return this.$FbtResult_contents;};
n.prototype.

toString=function(){'use strict';
if(this.$FbtResult_stringValue!==null)
return this.$FbtResult_stringValue;

var o='',
p=this.flattenToArray();
for(var q=0;q<p.length;++q){
var r=p[q];
if(typeof r==='string'||r instanceof n){
o+=r;}else{

var s=new Error('Converting to a string will drop content data');
c('ErrorUtils').reportError(s,true);}}


if(!Object.isFrozen(this))
this.$FbtResult_stringValue=o;

return o;};
n.prototype.

toJSON=function(){'use strict';
return this.toString();};
n.

flattenToArray=function(o){'use strict';
var p=[];
for(var q=0;q<o.length;++q){
var r=o[q];
if(Array.isArray(r)){
p.push.apply(p,n.flattenToArray(r));}else
if(r instanceof n){
p.push.apply(p,r.flattenToArray());}else 

p.push(r);}


return p;};









['replace','split','toLowerCase','toUpperCase','indexOf','charAt',
'charCodeAt','substr','substring','trim','lastIndexOf','search','match',
'slice','codePointAt','endsWith','includes','localeCompare','normalize',
'repeat','startsWith','toLocaleLowerCase','toLocaleUpperCase','trimLeft',
'trimRight','link','anchor','fontcolor','fontsize','big','blink',
'bold','fixed','italics','small','strike','sub','sup','contains'].

forEach(function(o){
n.prototype[o]=function(){
'use strict';
m(o);
return this.toString()[o].apply(this,arguments);};}.

bind(this));

f.exports=n;}),null);

/** shared/core/isScalar.js */




__d("isScalar",[],(function a(b,c,d,e,f,g){









function h(i){
return /string|number|boolean/.test(typeof i);}


f.exports=h;}),null);

/** js/modules/DOM.js */





__d('DOM',['$','DOMQuery','ErrorUtils','Event','FbtResult','HTML','UserAgent_DEPRECATED','createArrayFromMixed','isNode','isScalar','isTextNode'],(function a(b,c,d,e,f,g){














var h=











{create:function k(l,m,n){
var o=document.createElement(l);
if(m)
h.setAttributes(o,m);

if(n!=null)
h.setContent(o,n);

return o;},














setAttributes:function k(l,m){

if(m.type)
l.type=m.type;


for(var n in m){
var o=m[n],
p=/^on/i.test(n);










if(n=='type'){
continue;}else
if(n=='style'){
if(typeof o=='string'){
l.style.cssText=o;}else 

Object.assign(l.style,o);}else

if(p){
c('Event').listen(l,n.substr(2),o);}else
if(n in l){
l[n]=o;}else
if(l.setAttribute)
l.setAttribute(n,o);}},











prependContent:function k(l,m){
if(!l)
throw new Error
('DOM.prependContent: reference element is not a node');



return j(m,l,function(n){
l.firstChild?
l.insertBefore(n,l.firstChild):
l.appendChild(n);});},










insertAfter:function k(l,m){
if(!l||!l.parentNode)
throw new Error
('DOM.insertAfter: reference element does not '+
'have a parent.');



var n=l.parentNode;
return j(m,n,function(o){
l.nextSibling?
n.insertBefore(o,l.nextSibling):
n.appendChild(o);});},


















insertBefore:function k(l,m){
if(!l||!l.parentNode)
throw new Error
('DOM.insertBefore: reference element does not have a parent.');



var n=l.parentNode;
return j(m,n,function(o){
n.insertBefore(o,l);});},













setContent:function k(l,m){
if(!l)
throw new Error
('DOM.setContent: reference element is not a node.');



while(l.firstChild)
i(l.firstChild);


return h.appendContent(l,m);},









appendContent:function k(l,m){
if(!l)
throw new Error
('DOM.appendContent: reference element is not a node.');



return j(m,l,function(n){
l.appendChild(n);});},











replace:function k(l,m){
if(!l||!l.parentNode)
throw new Error
('DOM.replace: reference element does not '+
'have a parent.');



var n=l.parentNode;
return j(m,n,function(o){
n.replaceChild(o,l);});},









remove:function k(l){
i(c('$')(l));},







empty:function k(l){
l=c('$')(l);
while(l.firstChild)
i(l.firstChild);}};




Object.assign(h,c('DOMQuery'));






function i(k){
if(k.parentNode)
k.parentNode.removeChild(k);}


















function j(k,l,m){
k=c('HTML').replaceJSONWrapper(k);


if(k instanceof c('HTML')&&
l.firstChild===null&&
-1===k.toString().indexOf('<scr'+'ipt')){
var n=c('UserAgent_DEPRECATED').ie();

if(!n||n>7&&!c('DOMQuery').isNodeOfType(l,
['table','tbody','thead','tfoot','tr','select','fieldset'])){




var o=n?'<em style="display:none;">&nbsp;</em>':'';
l.innerHTML=o+k;
n&&l.removeChild(l.firstChild);
return Array.from(l.childNodes);}}else

if(c('isTextNode')(l)){
l.data=k;
return [k];}




var p=document.createDocumentFragment(),
q,
r=[],
s=[];

k=c('createArrayFromMixed')(k);
if(k.length===1&&
k[0] instanceof c('FbtResult'))
k=k[0].getContents();


for(var t=0;t<k.length;t++){
q=c('HTML').replaceJSONWrapper(k[t]);
if(q instanceof c('HTML')){
s.push(q.getAction());
var u=q.getNodes();
for(var v=0;v<u.length;v++){
r.push(u[v]);
p.appendChild(u[v]);}}else

if(c('isScalar')(q)||q instanceof c('FbtResult')){
var w=document.createTextNode(q);
r.push(w);
p.appendChild(w);}else
if(c('isNode')(q)){
r.push(q);
p.appendChild(q);}}

















m(p);


s.forEach(function(x){x();});

return r;}


f.exports=h;}),null);

/** shared/core/flattenPHPQueryData.js */




__d('flattenPHPQueryData',['invariant'],(function a(b,c,d,e,f,g,h){






































function i(k){
return j(k);}


function j(k,l,m){
l=l||'';
m=m||{};

if(k===null||k===undefined){
m[l]=undefined;}else
if(typeof k=='object'){


typeof k.appendChild!=='function'||h(0,
'Trying to serialize a DOM node. Bad idea.');


for(var n in k){
if(n==='$$typeof')


continue;


if(Object.prototype.hasOwnProperty.call(k,n)&&
k[n]!==undefined)

j
(k[n],
l?l+'['+n+']':n,
m);}}else 





m[l]=k;


return m;}


f.exports=i;}),null);

/** shared/core/PHPQuerySerializer.js */




__d('PHPQuerySerializer',['invariant','flattenPHPQueryData'],(function a(b,c,d,e,f,g,h){














function i(p){
var q=[],
r=c('flattenPHPQueryData')(p);

for(var s in r)
if(Object.prototype.hasOwnProperty.call(r,s)){
var t=j(s);
if(r[s]===undefined){
q.push(t);}else 

q.push(t+'='+j(r[s]));}




return q.join('&');}











function j(p){
return encodeURIComponent(p).replace(/%5D/g,']').replace(/%5B/g,'[');}





var k=/^([-_\w]+)((?:\[[-_\w]*\])+)=?(.*)/;

function l(p){
if(p==='hasOwnProperty'||p==='__proto__')





return '\ud83d\udf56';

return p;}








function m(p){
if(!p)
return {};


var q={};


p=p.replace(/%5B/ig,'[').replace(/%5D/ig,']');

p=p.split('&');

var r=Object.prototype.hasOwnProperty;

for(var s=0,t=p.length;s<t;s++){
var u=p[s].match(k);

if(!u){
var v=p[s].split('=');
q[n(v[0])]=
v[1]===undefined?null:n(v[1]);}else{

var w=u[2].split(/\]\[|\[|\]/).slice(0,-1),
x=u[1],
y=n(u[3]||'');
w[0]=x;



var z=q;
for(var aa=0;aa<w.length-1;aa++){
var ba=l(w[aa]);
if(ba){
if(!r.call(z,ba)){
var ca=w[aa+1]&&!w[aa+1].match(/^\d{1,3}$/)?
{}:[];
z[ba]=ca;
if(z[ba]!==ca)




return q;}



z=z[ba];}else{

if(w[aa+1]&&!w[aa+1].match(/^\d{1,3}$/)){
z.push({});}else 

z.push([]);

z=z[z.length-1];}}



if(z instanceof Array&&w[w.length-1]===''){
z.push(y);}else 

z[l(w[w.length-1])]=y;}}



return q;}











function n(p){

try{return decodeURIComponent(p.replace(/\+/g,' '));}catch(
q){



return p;}}



var o=
{serialize:i,
encodeComponent:j,
deserialize:m,
decodeComponent:n};


f.exports=o;}),null);

/** shared/core/URIRFC3986.js */






__d('URIRFC3986',[],(function a(b,c,d,e,f,g){

var h=new RegExp
('^'+
'([^:/?#]+:)?'+
'(//'+
'([^\\\\/?#@]*@)?'+
'('+
'\\[[A-Fa-f0-9:.]+\\]|'+
'[^\\/?#:]*'+
')'+
'(:[0-9]*)?'+
')?'+
'([^?#]*)'+
'(\\?[^#]*)?'+
'(#.*)?'),





















i=





{parse:function j(k){
if(k.trim()==='')
return null;

var l=k.match(h);
if(l==null)
return null;

var m={};




m.uri=l[0]?l[0]:null;
m.scheme=l[1]?
l[1].substr(0,l[1].length-1):
null;
m.authority=l[2]?l[2].substr(2):null;
m.userinfo=l[3]?
l[3].substr(0,l[3].length-1):
null;
m.host=l[2]?l[4]:null;
m.port=l[5]?
l[5].substr(1)?parseInt(l[5].substr(1),10):null:
null;
m.path=l[6]?l[6]:null;
m.query=l[7]?l[7].substr(1):null;
m.fragment=l[8]?l[8].substr(1):null;
m.isGenericURI=m.authority===null&&!!m.scheme;
return m;}};



f.exports=i;}),null);

/** shared/core/setHostSubdomain.js */





__d('setHostSubdomain',[],(function a(b,c,d,e,f,g){

function h(i,j){
var k=i.split('.');
if(k.length<3){
k.unshift(j);}else 

k[0]=j;

return k.join('.');}


f.exports=h;}),null);

/** shared/core/URIBase.js */





__d('URIBase',['invariant','URIRFC3986','URISchemes','ex','setHostSubdomain'],(function a(b,c,d,e,f,g,h){








var i=new RegExp


('[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f'+

'\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF'+

'\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]'),


j=new RegExp

('^(?:[^/]*:|'+

'[\\x00-\\x1f]*/[\\x00-\\x1f]*/)');



















function k
(n,
o,
p,
q){

if(!o)
return true;



if(o instanceof m){
n.setProtocol(o.getProtocol());
n.setDomain(o.getDomain());
n.setPort(o.getPort());
n.setPath(o.getPath());
n.setQueryData
(q.deserialize
(q.serialize(o.getQueryData())));


n.setFragment(o.getFragment());
n.setIsGeneric(o.getIsGeneric());
n.setForceFragmentSeparator(o.getForceFragmentSeparator());
return true;}


o=o.toString().trim();
var r=c('URIRFC3986').parse(o)||
{fragment:null,scheme:null};
if(!p&&!c('URISchemes').isAllowed(r.scheme))
return false;

n.setProtocol(r.scheme||'');
if(!p&&i.test(r.host||''))
return false;

n.setDomain(r.host||'');
n.setPort(r.port||'');
n.setPath(r.path||'');
if(p){
n.setQueryData(q.deserialize(r.query||'')||{});}else 


try{n.setQueryData(q.deserialize(r.query||'')||{});}catch(
s){
return false;}


n.setFragment(r.fragment||'');


if(r.fragment==='')
n.setForceFragmentSeparator(true);

n.setIsGeneric(r.isGenericURI||false);

if(r.userinfo!==null)
if(p){
throw new Error(c('ex')
('URI.parse: invalid URI (userinfo is not allowed in a URI): %s',
n.toString()));}else 


return false;





if(!n.getDomain()&&n.getPath().indexOf('\\')!==-1)
if(p){
throw new Error(c('ex')
('URI.parse: invalid URI (no domain but multiple back-slashes): %s',
n.toString()));}else 


return false;





if(!n.getProtocol()&&j.test(o))
if(p){
throw new Error(c('ex')
('URI.parse: invalid URI (unsafe protocol-relative URLs): %s',
n.toString()));}else 


return false;







if(n.getDomain()&&n.getPath()&&!n.getPath().startsWith('/'))
if(p){
throw new Error(c('ex')
('URI.parse: invalid URI (domain and path where path lacks leading slash): %s',
n.toString()));}else 


return false;



return true;}





var l=[];m.



















































isValidURI=function(n,o){'use strict';
return k(new m(null,o),n,false,o);};





function m(n,o){'use strict';
o||h(0,'no serializer set');
this.$URIBase_serializer=o;

this.$URIBase_protocol='';
this.$URIBase_domain='';
this.$URIBase_port='';
this.$URIBase_path='';
this.$URIBase_fragment='';
this.$URIBase_isGeneric=false;
this.$URIBase_queryData={};
this.$URIBase_forceFragmentSeparator=false;
k(this,n,true,o);}
m.prototype.




setProtocol=function(n){'use strict';

c('URISchemes').isAllowed(n)||h(0,
'"%s" is not a valid protocol for a URI.',n);

this.$URIBase_protocol=n;
return this;};
m.prototype.




getProtocol=function(){'use strict';
return (this.$URIBase_protocol||'').toLowerCase();};
m.prototype.




setSecure=function(n){'use strict';
return this.setProtocol(n?'https':'http');};
m.prototype.




isSecure=function(){'use strict';
return this.getProtocol()==='https';};
m.prototype.




setDomain=function(n){'use strict';




if(i.test(n))
throw new Error(c('ex')
('URI.setDomain: unsafe domain specified: %s for url %s',
n,
this.toString()));



this.$URIBase_domain=n;
return this;};
m.prototype.




getDomain=function(){'use strict';
return this.$URIBase_domain;};
m.prototype.




setPort=function(n){'use strict';
this.$URIBase_port=n;
return this;};
m.prototype.




getPort=function(){'use strict';
return this.$URIBase_port;};
m.prototype.




setPath=function(n){'use strict';







this.$URIBase_path=n;
return this;};
m.prototype.




getPath=function(){'use strict';
return this.$URIBase_path;};
m.prototype.







addQueryData=function(n,o){'use strict';

if(Object.prototype.toString.call(n)==='[object Object]'){

Object.assign(this.$URIBase_queryData,n);}else 

this.$URIBase_queryData[n]=o;

return this;};
m.prototype.





setQueryData=function(n){'use strict';
this.$URIBase_queryData=n;
return this;};
m.prototype.




getQueryData=function(){'use strict';
return this.$URIBase_queryData;};
m.prototype.




removeQueryData=function(n){'use strict';
if(!Array.isArray(n))
n=[n];

for(var o=0,p=n.length;o<p;++o)
delete this.$URIBase_queryData[n[o]];

return this;};
m.prototype.




setFragment=function(n){'use strict';
this.$URIBase_fragment=n;

this.setForceFragmentSeparator(false);
return this;};
m.prototype.




getFragment=function(){'use strict';
return this.$URIBase_fragment;};
m.prototype.













setForceFragmentSeparator=function(n){'use strict';
this.$URIBase_forceFragmentSeparator=n;
return this;};
m.prototype.





getForceFragmentSeparator=function(){'use strict';
return this.$URIBase_forceFragmentSeparator;};
m.prototype.

setIsGeneric=function(n){'use strict';
this.$URIBase_isGeneric=n;
return this;};
m.prototype.

getIsGeneric=function(){'use strict';
return this.$URIBase_isGeneric;};
m.prototype.




isEmpty=function(){'use strict';

return !(this.getPath()||
this.getProtocol()||
this.getDomain()||
this.getPort()||
Object.keys(this.getQueryData()).length>0||
this.getFragment());};

m.prototype.




toString=function(){'use strict';
var n=this;
for(var o=0;o<l.length;o++)
n=l[o](n);

return n.$URIBase_toStringImpl();};
m.prototype.





$URIBase_toStringImpl=function(){'use strict';
var n='',
o=this.getProtocol();
if(o)
n+=o+':'+(this.getIsGeneric()?'':'//');

var p=this.getDomain();
if(p)
n+=p;

var q=this.getPort();
if(q)
n+=':'+q;





var r=this.getPath();
if(r){
n+=r;}else
if(n)
n+='/';

var s=this.$URIBase_serializer.serialize(this.getQueryData());
if(s)
n+='?'+s;

var t=this.getFragment();
if(t){
n+='#'+t;}else
if(this.getForceFragmentSeparator())
n+='#';

return n;};
m.








registerFilter=function(n){'use strict';
l.push(n);};
m.prototype.




getOrigin=function(){'use strict';
var n=this.getPort();
return this.getProtocol()+
'://'+
this.getDomain()+
(n?':'+n:'');};
m.prototype.





getQualifiedURIBase=function(){'use strict';
return new m(this,this.$URIBase_serializer).qualify();};
m.prototype.





qualify=function(){'use strict';
if(!this.getDomain()){
var n=new m(window.location.href,this.$URIBase_serializer);
this.setProtocol(n.getProtocol()).
setDomain(n.getDomain()).
setPort(n.getPort());}

return this;};
m.prototype.













setSubdomain=function(n){'use strict';
var o=this.qualify().getDomain();
return this.setDomain(c('setHostSubdomain')(o,n));};
m.prototype.






getSubdomain=function(){'use strict';
if(!this.getDomain())
return '';


var n=this.getDomain().split('.');
if(n.length<=2){
return '';}else 

return n[0];};




f.exports=m;}),null);

/** shared/areSameOrigin/areSameOrigin.js */




__d("areSameOrigin",[],(function a(b,c,d,e,f,g){











function h(i,j){

if(i.isEmpty()||j.isEmpty())
return false;


if(i.getProtocol()&&i.getProtocol()!=j.getProtocol())
return false;


if(i.getDomain()&&i.getDomain()!=j.getDomain())
return false;


if(i.getPort()&&i.getPort()!=j.getPort())
return false;


return true;}


f.exports=h;}),null);

/** shared/facebook/isFacebookURI.js */






__d('isFacebookURI',[],(function a(b,c,d,e,f,g){



var h=null,

i=['http','https'];





function j(k){
if(!h)

h=new RegExp('(^|\\.)facebook\\.com$','i');


if(k.isEmpty()&&k.toString()!=='#')
return false;


if(!k.getDomain()&&!k.getProtocol())
return true;


return i.indexOf(k.getProtocol())!==-1&&
h.test(k.getDomain());}


j.setRegex=function(k){
h=k;};


f.exports=j;}),null);

/** shared/facebook/isMessengerDotComURI.js */





__d('isMessengerDotComURI',[],(function a(b,c,d,e,f,g){


var h=new RegExp('(^|\\.)messenger\\.com$','i'),

i=['https'];








function j(k){
if(k.isEmpty()&&k.toString()!=='#')
return false;


if(!k.getDomain()&&!k.getProtocol())
return false;



return (i.indexOf(k.getProtocol())!==-1&&
h.test(k.getDomain()));}



f.exports=j;}),null);

/** shared/getUnqualifiedURI/unqualifyURI.js */





__d("unqualifyURI",[],(function a(b,c,d,e,f,g){







function h(i){
i.setProtocol(null).setDomain(null).setPort(null);}


f.exports=h;}),null);

/** js/modules/URI.js */






__d('URI',['CdnAkamaiDomainsConfig','PHPQuerySerializer','URIBase','areSameOrigin','goURI','ifRequired','isFacebookURI','isMessengerDotComURI','memoize','unqualifyURI'],(function a(b,c,d,e,f,g){var h,i,j,k=this,


















l=c('memoize')(function(){return new n(window.location.href);});

function m(){
return c('ifRequired')('PageTransitions',function(o){
if(o.isInitialized())
return o;});}


h=babelHelpers.inherits
























(n,c('URIBase'));i=h&&h.prototype;







function n(o){'use strict';
i.constructor.call(this,o||'',c('PHPQuerySerializer'));}
n.prototype.








setPath=function(o){'use strict';
this.path=o;

return i.setPath.call(this,o);};
n.prototype.






getPath=function(){'use strict';
var o=i.getPath.call(this);
if(o)
return o.replace(/^\/+/,'/');

return o;};
n.prototype.





setProtocol=function(o){'use strict';
this.protocol=o;

return i.setProtocol.call(this,o);};
n.prototype.





setDomain=function(o){'use strict';
this.domain=o;

return i.setDomain.call(this,o);};
n.prototype.





setPort=function(o){'use strict';
this.port=o;

return i.setPort.call(this,o);};
n.prototype.





setFragment=function(o){'use strict';
this.fragment=o;

return i.setFragment.call(this,o);};
n.prototype.







valueOf=function(){'use strict';
return this.toString();};
n.prototype.








isFacebookURI=function(){'use strict';






return c('isFacebookURI')(this);};
n.prototype.





isLinkshimURI=function(){'use strict';


if((this.getPath()==='/l.php'||
this.getPath().indexOf('/si/ajax/l/')===0||
this.getPath().indexOf('/l/')===0||
this.getPath().indexOf('l/')===0)&&


(c('isFacebookURI')(this)||
c('isMessengerDotComURI')(this)))


return true;

return false;};
n.prototype.




isPossiblySignedURI=function(){'use strict';
if('hash' in this.getQueryData()&&c('isFacebookURI')(this))
return true;

return false;};
n.prototype.






isCdnURI=function(){'use strict';
if(this.getProtocol()!=='http'&&this.getProtocol()!=='https')
return false;

var o=this.getPort();
if(!!o&&o!==80&&o!==443)
return false;

if(this.isSubdomainOfDomain('fbcdn.net'))
return true;

return c('CdnAkamaiDomainsConfig')[this.getDomain()]!=undefined;};
n.prototype.








isSubdomainOfDomain=function(o){'use strict';
var p=this.getDomain();
if(o===''||p==='')
return false;


if(p.endsWith(o)){
var q=p.length,
r=o.length,
s=q-r-1;

if(q===r||p[s]==='.')
return n.isValidURI(o);}



return false;};
n.prototype.






















getRegisteredDomain=function(){'use strict';
if(!this.getDomain())
return '';


if(!c('isFacebookURI')(this))
return null;


var o=this.getDomain().split('.'),
p=o.indexOf('facebook');
return o.slice(p).join('.');};
n.prototype.








getUnqualifiedURI=function(){'use strict';
var o=new n(this);
c('unqualifyURI')(o);
return o;};
n.prototype.







getQualifiedURI=function(){'use strict';
return new n(this).qualify();};
n.prototype.













isSameOrigin=function(o){'use strict';
var p=o;

if(!p){
p=l();}else
if(!(p instanceof n))
p=new n(p.toString());


return c('areSameOrigin')(this,p);};
n.prototype.







go=function(o){'use strict';
c('goURI')(this,o);};
n.



isValidURI=function(o){'use strict';
return c('URIBase').isValidURI(o,c('PHPQuerySerializer'));};
n.














getRequestURI=
function(o,
p){
'use strict';
o=
o===undefined||o;

if(o){
var q=m();
if(q)
return q.getCurrentURI(!!p).
getQualifiedURI();}


return new n(window.location.href);};
n.








getMostRecentURI=function(){'use strict';
var o=m();
if(o)
return o.getMostRecentURI().getQualifiedURI();

return new n(window.location.href);};
n.











getNextURI=function(){'use strict';




var o=m();
if(o)
return o.getNextURI().getQualifiedURI();

return new n(window.location.href);};
n.













encodeComponent=function(o){'use strict';
return encodeURIComponent(o).replace(/%5D/g,']').replace(/%5B/g,'[');};
n.













decodeComponent=function(o){'use strict';
return decodeURIComponent(o.replace(/\+/g,' '));};







Object.assign(n,






{expression:/(((\w+):\/\/)([^\/:]*)(:(\d+))?)?([^#?]*)(\?([^#]*))?(#(.*))?/,




arrayQueryExpression:/^(\w+)((?:\[\w*\])+)=?(.*)/});































f.exports=n;}),null);

/** shared/emitter/internal/EventEmitterWithValidation.js */





__d('EventEmitterWithValidation',['BaseEventEmitter'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits






(j,c('BaseEventEmitter'));i=h&&h.prototype;





function j(m){
i.constructor.call(this);
this.$EventEmitterWithValidation_eventTypes=Object.keys(m);}
j.prototype.





emit=function(m){
k(m,this.$EventEmitterWithValidation_eventTypes);
return i.emit.apply(this,arguments);};



function k(m,n){
if(n.indexOf(m)===-1)
throw new TypeError(l(m,n));}



function l(m,n){
var o='Unknown event type "'+m+'". ';



o+='Known event types: '+n.join(', ')+'.';
return o;}











































































f.exports=j;}),null);

/** shared/emitter/internal/mixInEventEmitter.js */




__d('mixInEventEmitter',['invariant','EventEmitterWithHolding','EventEmitterWithValidation','EventHolder'],(function a(b,c,d,e,f,g,h){

'use strict';





























function i(k,l){
l||h(0,'Must supply set of valid event types');



var m=k.prototype||k;
!m.__eventEmitter||h(0,'An active emitter is already mixed in');

var n=k.constructor;
if(n)

n===Object||n===Function||h(0,
'Mix EventEmitter into a class, not an instance');





m.__types=babelHelpers['extends']({},m.__types,l);
Object.assign(m,j);}


var j=
{emit:function k(l,m,n,o,p,q,r){
return this.__getEventEmitter().emit(l,m,n,o,p,q,r);},


emitAndHold:function k(l,m,n,o,p,q,r){
return this.__getEventEmitter().emitAndHold(l,m,n,o,p,q,r);},


addListener:function k(l,m,n){
return this.__getEventEmitter().addListener(l,m,n);},


once:function k(l,m,n){
return this.__getEventEmitter().once(l,m,n);},


addRetroactiveListener:function k(l,m,n){
return this.__getEventEmitter().addRetroactiveListener
(l,
m,
n);},



listeners:function k(l){
return this.__getEventEmitter().listeners(l);},


removeAllListeners:function k(){
this.__getEventEmitter().removeAllListeners();},


removeCurrentListener:function k(){
this.__getEventEmitter().removeCurrentListener();},


releaseHeldEventType:function k(l){
this.__getEventEmitter().releaseHeldEventType(l);},


__getEventEmitter:function k(){
if(!this.__eventEmitter){
var l=new (c('EventEmitterWithValidation'))(this.__types),
m=new (c('EventHolder'))();
this.__eventEmitter=new (c('EventEmitterWithHolding'))(l,m);}

return this.__eventEmitter;}};



f.exports=i;}),null);

/** shared/core/pageID.js */








__d("pageID",[],(function a(b,c,d,e,f,g){
f.exports=Math.floor(2147483648*Math.random()).toString(36);}),null);

/** shared/core/NavigationMetricsCore.js */





__d('NavigationMetricsCore',['mixInEventEmitter','pageID'],(function a(b,c,d,e,f,g){











































var h=
{NAVIGATION_DONE:'NAVIGATION_DONE',
EVENT_OCCURRED:'EVENT_OCCURRED'},





i=
{tti:'tti',
e2e:'e2e',
all_pagelets_loaded:'all_pagelets_loaded',
all_pagelets_displayed:'all_pagelets_displayed'},


j=0,
k={},
l=void 0;m.


























lastServerLID=function(){'use strict';
return l;};


function m(){'use strict';this.eventTimings={tti:null,e2e:null,all_pagelets_loaded:null,all_pagelets_displayed:null};
this.lid=c('pageID')+':'+j++;
this.extras={};}
m.prototype.

getLID=function(){'use strict';
return this.lid;};
m.prototype.

setRequestStart=function(o){'use strict';
this.start=o;
return this;};
m.prototype.

setTTI=function(o){'use strict';
this.eventTimings.tti=o;
this.$NavigationEntryImpl_eventOccurred(i.tti,o);
return this;};
m.prototype.

setE2E=function(o){'use strict';
this.eventTimings.e2e=o;
this.$NavigationEntryImpl_eventOccurred(i.e2e,o);
return this;};
m.prototype.

setExtra=function(o,p){'use strict';
this.extras[o]=p;
return this;};
m.prototype.

setDisplayDone=function(o){'use strict';
this.eventTimings.all_pagelets_displayed=o;


this.setExtra('all_pagelets_displayed',o);
this.$NavigationEntryImpl_eventOccurred(i.all_pagelets_displayed,o);
return this;};
m.prototype.

setAllPageletsLoaded=function(o){'use strict';
this.eventTimings.all_pagelets_loaded=o;


this.setExtra('all_pagelets_loaded',o);
this.$NavigationEntryImpl_eventOccurred(i.all_pagelets_loaded,o);
return this;};
m.prototype.

setServerLID=function(o){'use strict';
this.serverLID=o;
return this;};
m.prototype.

$NavigationEntryImpl_eventOccurred=function(event,o){'use strict';
var p={};
if(k!=null&&
this.serverLID!=null&&
k[this.serverLID]!=null)

p=k[this.serverLID];

var q=babelHelpers['extends']({},
p,
{event:event,
timestamp:o,
visibilityState:null});

if(document.visibilityState)
q.visibilityState=document.visibilityState;


n.emitAndHold(h.EVENT_OCCURRED,this.serverLID,q);
return this;};
m.prototype.





doneNavigation=function(){'use strict';
var o=babelHelpers['extends']
({start:this.start,
extras:this.extras},
this.eventTimings);



if(this.serverLID&&k[this.serverLID]){
var p=this.serverLID;
Object.assign(o,k[p]);
delete k[p];}






n.emitAndHold(h.NAVIGATION_DONE,this.lid,o);};



var n=
{Events:h,


postPagelet:function o(p,q){},
postScheduler:function o(){},

siteInit:function o(p){

p(m);},











setPage:function o(p){
if(!p.serverLID)
return;

k[p.serverLID]=
{page:p.page,
pageType:p.page_type,
pageURI:p.page_uri,
serverLID:p.serverLID};

l=p.serverLID;},


getFullPageLoadLid:function o(){
throw new Error('getFullPageLoadLid is not implemented on this site');}};



c('mixInEventEmitter')(n,h);

f.exports=n;}),null);

/** js/core/NavigationMetrics.js */






__d('NavigationMetrics',['Arbiter','BigPipe','NavigationMetricsCore','PageEvents','performance'],(function a(b,c,d,e,f,g){







var h='0';


c('NavigationMetricsCore').getFullPageLoadLid=function(){
return h;};


c('NavigationMetricsCore').siteInit(function(i){









var j=new i(),
k=true;















c('Arbiter').subscribe(c('BigPipe').Events.init,function(l,m){
var n=k?j:new i();
if(k)
h=m.lid;

k=false;

n.setServerLID(m.lid);

var o=m.arbiter;
o.subscribe(c('BigPipe').Events.tti,function(p,q){var r=q.ts;
n.setTTI(r);});



o.subscribe(c('PageEvents').AJAXPIPE_SEND,function(p,q){var r=q.ts;
n.setRequestStart(r);});



o.subscribe(c('PageEvents').AJAXPIPE_ONLOAD,function(p,q){var r=q.ts;
n.setE2E(r).
doneNavigation();});





o.subscribe(c('BigPipe').Events.displayed,function(p,q){var r=q.ts;
n.setDisplayDone(r);});

o.subscribe(c('BigPipe').Events.loaded,function(p,q){var r=q.ts;
n.setAllPageletsLoaded(r);});});



c('Arbiter').subscribe(c('PageEvents').BIGPIPE_ONLOAD,function(l,m){var n=m.ts;
k=false;
j.
setRequestStart(c('performance').timing&&c('performance').timing.navigationStart).
setE2E(n).
doneNavigation();});});



f.exports=c('NavigationMetricsCore');}),null);

/** js/components/core/XUI/Card/XUICard.react.js */





__d('XUICard.react',['cx','React','XUIBlock','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits







(k,c('React').Component);j=i&&i.prototype;k.prototype.







render=function(){'use strict';
var l=c('joinClasses')
("_4-u2",
c('XUIBlock').getBackgroundClass(this.props));



return (c('React').createElement('div',babelHelpers['extends']({},
this.props,
{className:c('joinClasses')(this.props.className,l)}),
this.props.children));};


function k(){'use strict';i.apply(this,arguments);}k.propTypes=c('XUIBlock').propTypes;k.defaultProps=babelHelpers['extends']({},c('XUIBlock').getDefaultProps(),{background:'white'});


f.exports=k;}),null);

/** js/modules/DOMControl.js */




__d('DOMControl',['DataStore','$'],(function a(b,c,d,e,f,g){






function h(i){'use strict';





this.root=c('$')(i);
this.updating=false;
c('DataStore').set(i,'DOMControl',this);}
h.prototype.

getRoot=function(){'use strict';
return this.root;};
h.prototype.

beginUpdate=function(){'use strict';
if(this.updating)
return false;

this.updating=true;
return true;};
h.prototype.

endUpdate=function(){'use strict';
this.updating=false;};
h.prototype.

update=function(i){'use strict';
if(!this.beginUpdate())
return this;

this.onupdate(i);
this.endUpdate();};
h.prototype.

onupdate=function(i){
'use strict';};

h.

getInstance=function(i){'use strict';
return c('DataStore').get(i,'DOMControl');};



f.exports=h;}),null);

/** js/modules/KeyStatus.js */











__d('KeyStatus',['Event','ExecutionEnvironment'],(function a(b,c,d,e,f,g){




var h=null,
i=null;





function j(){
if(!i)
i=c('Event').listen(window,'blur',function(){
h=null;
k();});}




function k(){
if(i){
i.remove();
i=null;}}



function l(event){
h=c('Event').getKeyCode(event);
j();}


function m(){
h=null;
k();}


if(c('ExecutionEnvironment').canUseDOM){



var n=document.documentElement;


if(n.addEventListener){
n.addEventListener('keydown',l,true);



n.addEventListener('keyup',m,true);}else


if(n.attachEvent){
var o=n.attachEvent;
o('onkeydown',l);
o('onkeyup',m);}}



var p=
{isKeyDown:function q(){
return !!h;},


getKeyDownCode:function q(){
return h;}};



f.exports=p;}),null);

/** shared/core/dom/getElementText.js */





__d('getElementText',['isElementNode','isTextNode'],(function a(b,c,d,e,f,g){




var h=null;







function i(j){
if(c('isTextNode')(j)){
return j.data;}else
if(c('isElementNode')(j)){
if(h===null){
var k=document.createElement('div');
h=k.textContent!=null?'textContent':'innerText';}

return j[h];}else 

return '';}



f.exports=i;}),null);

/** js/modules/TooltipData.js */





__d('TooltipData',['DataStore','DOM','URI','getElementText','ifRequired','isTextNode'],(function a(b,c,d,e,f,g){














function h(m){
var n=m.getAttribute('data-tooltip-delay'),
o=n?parseInt(n,10)||1000:0;

return babelHelpers['extends']
({content:m.getAttribute('data-tooltip-content'),
delay:o,
position:m.getAttribute('data-tooltip-position')||'above',
alignH:m.getAttribute('data-tooltip-alignh')||'left',
suppress:false,
overflowDisplay:
m.getAttribute('data-tooltip-display')==='overflow',
persistOnClick:m.getAttribute('data-pitloot-persistonclick'),
textDirection:m.getAttribute('data-tooltip-text-direction')},
c('DataStore').get(m,'tooltip'));}









function i(m,n){
var o=h(m);

c('DataStore').set(m,'tooltip',
{content:n.content||o.content,
position:n.position||o.position,
alignH:n.alignH||o.alignH,
suppress:n.suppress!==undefined?
n.suppress:
o.suppress,
overflowDisplay:n.overflowDisplay||o.overflowDisplay,
persistOnClick:n.persistOnClick||o.persistOnClick});}



function j(m,n){
i(m,n);
m.setAttribute('data-hover','tooltip');}


function k(m,n){








}

var l=




{remove:function m(n){







c('DataStore').remove(n,'tooltip');
n.removeAttribute('data-hover');
n.removeAttribute('data-tooltip-position');
n.removeAttribute('data-tooltip-alignh');

c('ifRequired')('Tooltip',function(o){

o.isActive(n)&&o.hide();});},
















set:function m(n,o,p,q){
k(n,o);

if(o instanceof c('URI')){

n.setAttribute('data-tooltip-uri',o);

c('ifRequired')('Tooltip',function(s){

s.isActive(n)&&s.fetchIfNecessary(n);});}else{


var r=l._store({context:n,content:o,position:p,alignH:q});

if(typeof r.content!=='string'){
n.setAttribute
('data-tooltip-content',
c('getElementText')(r.content));}else 


n.setAttribute('data-tooltip-content',r.content);


c('ifRequired')('Tooltip',function(s){

s.isActive(n)&&s.show(n);});}},




_store:function m(n){var o=n.context,p=n.content,q=n.position,r=n.alignH;
k(o,p);

if(c('isTextNode')(p))
p=c('getElementText')(p);


var s=false;

if(typeof p!=='string'){

p=c('DOM').create('div',{},p);}else 

s=p==='';


var t=
{alignH:r,
content:p,
position:q,
suppress:s};


j(o,t);

return t;},












propsFor:function m(n,o){
if(!n)
return {};

var p=
{'data-tooltip-content':n,
'data-hover':'tooltip'};

if(o)
p['data-tooltip-position']=o;

return p;},








enableDisplayOnOverflow:function m(n){
n.removeAttribute('data-tooltip-display');
j(n,{overflowDisplay:true});},







enablePersistOnClick:function m(n){
n.removeAttribute('data-pitloot-persistOnClick');
j(n,{persistOnClick:true});},







suppress:function m(n,o){


i(n,{suppress:o});},




_get:h};


f.exports=l;}),null);

/** shared/core/dom/getOrCreateDOMID.js */





__d('getOrCreateDOMID',['uniqueID'],(function a(b,c,d,e,f,g){







function h(i){
if(!i.id)
i.id=c('uniqueID')();


return i.id;}


f.exports=h;}),null);

/** js/modules/Focus.js */





__d('Focus',['cx','CSS','Event','KeyStatus','Run','TooltipData','ge','getOrCreateDOMID','ifRequired'],(function a(b,c,d,e,f,g,h){



var i=c('KeyStatus').isKeyDown,








j={},
k=void 0,





l=

{set:function r
(s){

var t=arguments.length<=1||arguments[1]===undefined?false:arguments[1];
if(s){
var u=c('ifRequired')
('VirtualCursorStatus',
function(v){return v.isVirtualCursorTriggered();},
function(){return false;});


if(t||
i()||
u){

m(s);}else 

l.setWithoutOutline(s);}},





setWithoutOutline:function r(s){
if(s){
c('CSS').addClass(s,"_5f0v");
var t=c('Event').listen(s,'blur',function(){
c('CSS').removeClass(s,"_5f0v");
t.remove();});

c('TooltipData').suppress(s,true);
m(s);
c('TooltipData').suppress(s,false);}},
















relocate:function r
(s,
t){

c('CSS').addClass(s,"_5f0v");
return l.listen
(s,
this.performRelocation.bind(this,s,t));},



performRelocation:function r
(s,
t,
u){

c('CSS').addClass(s,"_5f0v");
c('CSS').conditionClass(t,"_3oxt",u);
c('CSS').conditionClass
(t,
"_16jm",
u);},











listen:function r
(s,
t){

o();
var u=c('getOrCreateDOMID')(s);
j[u]=t;

return n(u);}};



function m(r){



try{r.tabIndex=r.tabIndex;
r.focus();}catch(
s){

}}


function n(r){
c('Run').onLeave(function(){
!c('ge')(r)&&q(r);});

return {remove:function s(){return q(r);}};}


function o(){
if(k)
return;

c('Event').listen(document.documentElement,'focusout',p);
c('Event').listen(document.documentElement,'focusin',p);
k=true;}


function p(event){
var r=event.getTarget();
if(typeof j[r.id]==='function'){

var s=event.type==='focusin'||event.type==='focus';
j[r.id](s);}}






function q(r){
if(j[r])
delete j[r];}



f.exports=l;}),null);

/** js/modules/Input.js */






__d('Input',['CSS','DOMQuery','DOMControl'],(function a(b,c,d,e,f,g){





var h=

{isWhiteSpaceOnly:function i(j){
return !/\S/.test(j||'');},


isEmpty:function i(j){
return h.isWhiteSpaceOnly(j.value);},






getValue:function i(j){
return h.isEmpty(j)?'':j.value;},


getValueRaw:function i(j){
return j.value;},



setValue:function i(j,k){





j.value=k||'';
var l=c('DOMControl').getInstance(j);
l&&l.resetHeight&&l.resetHeight();},


setPlaceholder:function i(j,k){
j.setAttribute('aria-label',k);
j.setAttribute('placeholder',k);},


reset:function i(j){
j.value='';
j.style.height='';},


setSubmitOnEnter:function i(j,k){
c('CSS').conditionClass(j,'enter_submit',k);},


getSubmitOnEnter:function i(j){
return c('CSS').hasClass(j,'enter_submit');},


setMaxLength:function i(j,k){






if(k>0){
j.setAttribute('maxlength',k);}else 

j.removeAttribute('maxlength');}};





f.exports=h;}),null);

/** shared/core/immediate/ImmediateImplementation.js */
/**
 * Copyright (c) 2012 Barnesandnoble.com, llc, Donavon West, and Domenic
 * Denicola
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @preserve-header
 * @providesModule ImmediateImplementation
 */
























__d("ImmediateImplementation",[],(function a(b,c,d,e,f,g){



(function(h,i){
"use strict";

var j=1,
k={},
l={},
m=l,
n=false,
o=h.document,
p=void 0;

function q(y){
var z=y[0];
y=Array.prototype.slice.call(y,1);
k[j]=function(){
z.apply(i,y);};

m=m.next={handle:j++};
return m.handle;}


function r(){
var y=void 0,z=void 0;
while(!n&&(y=l.next)){
l=y;
if(z=k[y.handle]){
n=true;

try{z();
n=false;}finally{

s(y.handle);
if(n){
n=false;






if(l.next)
p(r);}}}}}







function s(y){
delete k[y];}


function t(){var y;


if(h.postMessage&&!h.importScripts){var y=function(){
var z=true,

aa=function ba(){
z=false;
if(h.removeEventListener){
h.removeEventListener("message",ba,false);}else 

h.detachEvent("onmessage",ba);};



if(h.addEventListener){
h.addEventListener("message",aa,false);}else
if(h.attachEvent){
h.attachEvent("onmessage",aa);}else 

return {v:false};


h.postMessage("","*");
return {v:z};}();if(typeof y==="object")return y.v;}}



function u(){


var y="setImmediate$"+Math.random()+"$",
z=function aa(event){
if(event.source===h&&
typeof event.data==="string"&&
event.data.indexOf(y)===0)
r();};



if(h.addEventListener){
h.addEventListener("message",z,false);}else 

h.attachEvent("onmessage",z);


p=function aa(){
var ba=q(arguments);
h.postMessage(y+ba,"*");
return ba;};}



function v(){
var y=new MessageChannel();
y.port1.onmessage=r;
p=function z(){
var aa=q(arguments);
y.port2.postMessage(aa);
return aa;};}



function w(){
var y=o.documentElement;
p=function z(){
var aa=q(arguments),


ba=o.createElement("script");
ba.onreadystatechange=function(){
ba.onreadystatechange=null;
y.removeChild(ba);
ba=null;
r();};

y.appendChild(ba);
return aa;};}



function x(){
p=function y(){
setTimeout(r,0);
return q(arguments);};}



if(t()){

u();}else

if(h.MessageChannel){

v();}else

if(o&&o.createElement&&"onreadystatechange" in o.createElement("script")){

w();}else 



x();


g.setImmediate=p;
g.clearImmediate=s;})
(Function("return this")());}),null);

/** shared/core/setImmediatePolyfill.js */




__d('setImmediatePolyfill',['invariant','PromiseUsePolyfillSetImmediateGK','ImmediateImplementation'],(function a(b,c,d,e,f,g,h){











var i=b.setImmediate;

if(c('PromiseUsePolyfillSetImmediateGK').www_always_use_polyfill_setimmediate||
!i){

var j=c('ImmediateImplementation');
i=j.setImmediate;}


function k(){for(var l=arguments.length,m=Array(l),n=0;n<l;n++)m[n]=arguments[n];

typeof m[0]==='function'||h(0,'Callback must be a function');
return i.apply(null,m);}


f.exports=k;}),null);

/** shared/page/setImmediateAcrossTransitions.js */




__d('setImmediateAcrossTransitions',['TimeSlice','setImmediatePolyfill'],(function a(b,c,d,e,f,g){









f.exports=function(){for(var h=arguments.length,i=Array(h),j=0;j<h;j++)i[j]=arguments[j];
i[0]=c('TimeSlice').guard(i[0],'setImmediate',{isContinuation:true});
return c('setImmediatePolyfill').apply(b,i);};}),
null);

/** js/modules/ReactRenderer.js */






__d('ReactRenderer',['Arbiter','PageEvents','React','ReactDOM','ReactGK','Run','$','emptyFunction','requestIdleCallbackAcrossTransitions'],(function a(b,c,d,e,f,g){

'use strict';












var h=[],
i=null;
function j(q){
h.unshift(q);
k();}

function k(){
if(i!==null)
return;

i=c('requestIdleCallbackAcrossTransitions')(function(q){
i=null;

while(h.length>0&&q.timeRemaining()>0)

c('ReactDOM').unmountComponentAtNode(h.pop());

if(h.length>0)
k();});}












function l
(q,
r,
s){
var t,
u=c('ReactDOM').render(q,r,s);
if(c('ReactGK').unmountOnBeforeClearCanvas){(function(){

var v=c('Arbiter').subscribe





(c('PageEvents').AJAXPIPE_ONBEFORECLEARCANVAS,
function(w,x){var y=x.canvasID;
if(y!=='content'&&y!=='content_container')


return;

if(Object.prototype.hasOwnProperty.call(u,'setState')){



u.setState=c('emptyFunction');

u.shouldComponentUpdate=c('emptyFunction').thatReturnsFalse;}


j(r);
v.unsubscribe();});})
();}else 


c('Run').onLeave(function(){
c('ReactDOM').unmountComponentAtNode(r);});


return u;}









function m
(q,
r,
s,
t){

var u=c('React').createElement(q,r);
return l(u,s,t);}







function n
(q,
r,
s,
t){

var u=c('React').createElement(q,r);
return c('ReactDOM').render(u,s,t);}









function o
(q,
r,
s,
t){

return m(q,r,c('$')(s),t);}








function p
(q,
r,
s,
t){

return n
(q,
r,
c('$')(s),
t);}



f.exports=
{renderComponent:l,
constructAndRenderComponent:m,
constructAndRenderComponentByID:o,
constructAndRenderComponentAcrossTransitions:n,
constructAndRenderComponentByIDAcrossTransitions:p,












constructAndRenderComponent_DEPRECATED:
n,
constructAndRenderComponentByID_DEPRECATED:
p};}),null);

/** js/modules/WebPixelRatio.js */





__d('WebPixelRatio',['Cookie','DOMEventListener','PixelRatioConst','Run'],(function a(b,c,d,e,f,g){


















var h=c('PixelRatioConst').cookieName,

i,
j=false;

function k(){
return window.devicePixelRatio||1;}


function l(){
c('Cookie').set(h,k());}


function m(){
c('Cookie').clear(h);}


function n(){
var p=k();
if(p!==i){
l();}else 

m();}



var o=
{startDetecting:function p(q){
i=q||1;

m();

if(j)
return;

j=true;

if('onpagehide' in window){


c('DOMEventListener').add(window,'pagehide',n);}else 



c('Run').onBeforeUnload(n,false);},



getOriginalValue:function p(){
return i||k();}};



f.exports=o;}),null);

/** js/plugins/UnverifiedXD.js */










__d('UnverifiedXD',['XD'],(function a(b,c,d,e,f,g){

var h=c('XD').UnverifiedXD;
f.exports=h;}),null);

/** js/search/typeahead/QueryHistory.js */




__d('QueryHistory',[],(function a(b,c,d,e,f,g){

var h={},




i=
{set:function j(k,l){
h[this._key(k)]=l;},


get:function j(k){
return h[this._key(k)];},


_key:function j(k){
return 'uri-'+k.getQualifiedURI().toString();}};



f.exports=i;}),null);

/** js/search/typeahead/SimpleSearchNavigation.js */




__d('SimpleSearchNavigation',['Arbiter','DOMQuery','Input','QueryHistory','URI'],(function a(b,c,d,e,f,g){







var h=null,
i=null,

j=


{registerInput:function k(l,m){
i=c('DOMQuery').scry(l,'input')[0];
if(h)
this._updateTitle(h,m);


c('Arbiter').subscribe('page_transition',function(n,o){
this._updateTitle(c('QueryHistory').get(o.uri));}.
bind(this));},


_updateTitle:function k(l,m){
if(i){
c('Input').setValue(i,l||'');
i.setAttribute('singlestate',l&&m);
i.blur();}},









setPageTitle:function k(l,m){
c('QueryHistory').set(c('URI').getNextURI(),l);
if(i){
this._updateTitle(l,m);}else 

h=l;

var n={};
c('Arbiter').inform
('search/updateNullState',
n,
c('Arbiter').BEHAVIOR_STATE);},








setPageQuery:function k(l){
c('Arbiter').inform
('search/updateNullState',
l,
c('Arbiter').BEHAVIOR_STATE);}};





f.exports=j;}),null);

/** shared/banzai/GeneratedLoggerUtils.js */





__d('GeneratedLoggerUtils',['invariant','Banzai'],(function a(b,c,d,e,f,g,h){
'use strict';

















var i=c('Banzai').post;
if(window.location.search.indexOf('showlog')>-1)


i=function k(l,m,n){
c('Banzai').post(l,m,n);};








var j=
{log:i,




serializeVector:function k
(l){


if(!l)
return l;



if(Array.isArray(l))
return l;




if(l.toArray){
var m=l;
return m.toArray();}



if(typeof l==='object'&&l[typeof Symbol==='function'?Symbol.iterator:'@@iterator'])
return Array.from(l);


h(0,'Value is not a vector. %s',l);},





serializeMap:function k
(l){


if(!l)
return l;




if(l.toJS){
var m=l;
return m.toJS();}




if(typeof l==='object'&&l[typeof Symbol==='function'?Symbol.iterator:'@@iterator']){



var n=l,
o={};
for(var p=n,q=Array.isArray(p),r=0,p=q?p:p[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var s;if(q){if(r>=p.length)break;s=p[r++];}else{r=p.next();if(r.done)break;s=r.value;}var t=s;
o[t[0]]=t[1];}

return o;}



if(Object.prototype.toString.call(l)==='[object Object]')
return l;


h(0,'Value is not a map. %s',l);},






checkExtraDataFieldNames:function k
(l,
m){

Object.keys(l).forEach(function(n){

!Object.prototype.hasOwnProperty.call(m,n)||h(0,
'You are calling addToExtraData or updateExtraData with the field '+
'%s, which already exists in the list of fields you supplied in your '+
'config. Use the setter for this field instead.',
n);});},








warnForInvalidFieldNames:function k
(l,
m,
n,
o){


















},

throwIfNull:function k(l,m){
l||h(0,'%s can not be null',m);
return l;}};



f.exports=j;}),null);

/** shared/core/SessionName.js */




__d('SessionName',['SessionNameConfig','isInIframe'],(function a(b,c,d,e,f,g){





var h='_e_',

i;

function j(){
i=(window.name||'').toString();
if(i.length==7&&i.substr(0,3)==h){
i=i.substr(3);}else{

i=c('SessionNameConfig').seed||'';

if(!c('isInIframe')())
window.name=h+i;}}




f.exports=
{TOKEN:h,
getName:function k(){
if(i===undefined)
j();

return i;}};}),
null);

/** shared/core/dom/getElementRect.js */






__d('getElementRect',['containsNode'],(function a(b,c,d,e,f,g){


















function h(i){
var j=i.ownerDocument.documentElement;



if(!('getBoundingClientRect' in i)||!c('containsNode')(j,i))

return {left:0,
right:0,
top:0,
bottom:0,
width:0,
height:0};







var k=i.getBoundingClientRect(),

l=j?j.clientLeft:0,
m=j?j.clientTop:0,

n=Math.round(k.left)-l,
o=Math.round(k.right)-l,
p=Math.round(k.top)-m,
q=Math.round(k.bottom)-m;


return {left:n,
right:o,
top:p,
bottom:q,
width:o-n,
height:q-p};}



f.exports=h;}),null);

/** shared/core/dom/getElementPosition.js */





__d('getElementPosition',['getElementRect'],(function a(b,c,d,e,f,g){










function h(i){
var j=c('getElementRect')(i);

return {x:j.left,
y:j.top,
width:j.right-j.left,
height:j.bottom-j.top};}



f.exports=h;}),null);

/** shared/core/dom/getViewportDimensions.js */






__d("getViewportDimensions",[],(function a(b,c,d,e,f,g){



function h(){
var k=void 0;
if(document.documentElement)
k=document.documentElement.clientWidth;


if(!k&&document.body)
k=document.body.clientWidth;


return k||0;}


function i(){
var k=void 0;
if(document.documentElement)
k=document.documentElement.clientHeight;


if(!k&&document.body)
k=document.body.clientHeight;


return k||0;}





function j(){

return {width:window.innerWidth||h(),
height:window.innerHeight||i()};}






j.withoutScrollbars=function(){

return {width:h(),
height:i()};};



f.exports=j;}),null);

/** shared/haste/csx.js */





__d('csx',[],(function a(b,c,d,e,f,g){












function h(i){
throw new Error('csx: Unexpected class selector transformation.');}


f.exports=h;}),null);

/** shared/intl/Locale.js */





__d('Locale',['SiteData','ExecutionEnvironment'],(function a(b,c,d,e,f,g){




function h(){
if(!c('ExecutionEnvironment').canUseDOM){
return false;}else 

return c('SiteData').is_rtl;}



f.exports=
{isRTL:h};}),null);

/** shared/page/clearInterval.js */




__d('clearInterval',['TimerStorage','TimeSliceRefCountingWrapper'],(function a(b,c,d,e,f,g){





var h=b.clearTimeout.nativeBackup||b.clearTimeout;

f.exports=function(){for(var i=arguments.length,j=Array(i),k=0;k<i;k++)j[k]=arguments[k];
var l=j[0];
c('TimerStorage').unset(c('TimerStorage').INTERVAL,l);

if(l!=null&&c('TimeSliceRefCountingWrapper').isValidCancellationToken(l))

c('TimeSliceRefCountingWrapper').cancelTimeSlice(l);

return Function.prototype.apply.call(h,b,j);};}),
null);

/** shared_core/haste/errorCode.js */





__d('errorCode',[],(function a(b,c,d,e,f,g){

'use strict';




function h(i){
throw new Error
('errorCode'+'("'+i+'"): This should not happen. Oh noes!');}



f.exports=h;}),null);
