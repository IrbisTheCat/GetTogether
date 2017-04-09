if (self.CavalryLogger) { CavalryLogger.start_js(["cnffE"]); }

/** shared/encrypted_cdn/EncryptedImg.js */




__d('EncryptedImg',['URI','XHRRequest','EncryptedImgUtils','getCrossOriginTransport'],(function a(b,c,d,e,f,g){








var h=

{insertIntoStyleBackgroundImage:function m(n,o){


var p=function(q,r){
if(q)
q.style.backgroundImage="url('"+r+"')";}.



bind(undefined,o);

h.load(n,p);},




insertIntoDOM:function m(n,o){
var p=function(q,r){
if(q)
q.setAttribute('src',r);}.



bind(undefined,o);

h.load(n,p);},




load:function m(n,o){var p=arguments.length<=2||arguments[2]===undefined?true:arguments[2],
q=new (c('URI'))(n),
r=c('EncryptedImgUtils').extractKey(q),

s=i.bind
(undefined,
r,
o,
p);
s.includeHeaders=true;

new (c('XHRRequest'))(q.toString()).
setTransportBuilder(c('getCrossOriginTransport')).
setMethod('GET').
setResponseType('arraybuffer').
setResponseHandler(s).
send();},





dataUrlPrefix:function m(n){var o=arguments.length<=1||arguments[1]===undefined?32:arguments[1];
if(!n.startsWith('data:'))
return n;


var p=n.indexOf(',');
if(p<0||p>o)
p=o;

return n.slice(0,p);}};




Object.assign(h,c('EncryptedImgUtils'));

f.exports=h;






function i
(m,
n,
o,
p,
q){

if(!m){

n(l(p,k(q)));
return;}



var r=j(m),
s=new Uint8Array(p),

t=s.subarray(2,14);

s=s.subarray(14,s.length);

var u={name:'AES-GCM',iv:t,tagLength:128};
window.crypto.subtle.importKey
('raw',
r,
u,
false,
['encrypt','decrypt']).
then(function(v){
return window.crypto.subtle.decrypt(u,v,s);}).
then(function(v){
if(o){
n(l(v,k(q)));}else 

n(v);})[

'catch'](function(){});}



function j(m){
if(typeof m=='string'){
var n=new Uint8Array(Math.floor(m.length/2)),
o=0;
m.replace(/(..)/g,function(p){n[o++]=parseInt(p,16);});
return n;}

return null;}




function k(m){
var n='image/jpeg',
o=
m.toLowerCase().match(/content-type:\s?([\w\/]*)\s/);
if(o&&o.length>1)
n=o[1];

return n;}




function l(m,n){


var o=new Uint8Array(m),
p='';
for(var q=0,r=o.byteLength;q<r;++q)
p+=String.fromCharCode(o[q]);

return 'data:'+n+';base64,'+window.btoa(p);}}),
null);

/** js/modules/getDOMImageSize.js */











__d('getDOMImageSize',['EncryptedImg','URI'],(function a(b,c,d,e,f,g){







function h(m){

m.onload=null;
m.onerror=null;
m.onreadystatechange=null;
m._callback=null;
m._thisObj=null;
m._srcStr=null;
m.parentNode&&m.parentNode.removeChild(m);}



function i(){
var m=this;
if(m._callback)
m._callback.call
(m._thisObj,
m.naturalWidth||m.width,
m.naturalHeight||m.height,
m._srcStr);


h(m);}


function j(){
var m=this;
if(m.readyState==='complete')

i.call(m);}



















function k(){
var m=this;
if(m._callback)
m._callback.call
(m._thisObj,
0,
0,
m._srcStr);


h(m);}










function l(m,n,o){
o=o||null;
if(!m){
n.call(o,0,0,'');
return;}


var p=document.body;
if(!p){

setTimeout(l.bind(this,m,n,o),500);
return;}


var q;
if(typeof m==='string'){
q=m;}else
if(typeof m==='object')
if(typeof m.width==='number'&&typeof m.height==='number'){
if(typeof m.src==='string'){

q=m.src;
if(m.naturalWidth&&m.naturalHeight){



n.call
(o,
m.naturalWidth,
m.naturalHeight,
q);

return;}}

if(typeof m.uri==='string'){

q=m.uri;
if(m.width&&m.height){

n.call(o,m.width,m.height,q);
return;}}}else


if(m instanceof c('URI'))

q=m.toString();



if(!q){





n(0,0,m);
return;}


var r=document.createElement('img');






r.onreadystatechange=j;
r.onload=i;
r.onerror=k;
r._callback=n;
r._thisObj=o;


r._srcStr=q;
if(c('EncryptedImg').isEncrypted(q)){



c('EncryptedImg').insertIntoDOM(q,r);}else 

r.src=q;







r.style.cssText='\n    position:absolute;\n    left:-5000px;\n    top:-5000px;\n    width:auto;\n    height:auto;\n    clip:rect(0 0 0 0);\n  '.






replace(/\s+/,' ');






p.insertBefore(r,p.firstChild);}


f.exports=l;}),null);

/** js/modules/CachedDOMImageSizePool.js */









__d('CachedDOMImageSizePool',['debounce','getDOMImageSize'],(function a(b,c,d,e,f,g){










function h(i,j){'use strict';



this.$CachedDOMImageSizePool_cache={};




this.$CachedDOMImageSizePool_cacheDuration=j;




this.$CachedDOMImageSizePool_cacheCount=0;




this.$CachedDOMImageSizePool_maxCacheCount=i;

this.$CachedDOMImageSizePool_debouncedRecycle=c('debounce')(this.$CachedDOMImageSizePool_recycle,5000,this);

this.$CachedDOMImageSizePool_pendingCallbacks={};

this.$CachedDOMImageSizePool_pendingThisObjs={};}
h.prototype.









get=function(i,j,k){'use strict';
if(!i){
j.call(k,0,0,i);
return;}


var l=this.$CachedDOMImageSizePool_cache[i];
if(l){
l.lastAccessTime=Date.now();
j.call(k,l.width,l.height,l.src);}else 

if(this.$CachedDOMImageSizePool_pendingCallbacks[i]){
this.$CachedDOMImageSizePool_pendingCallbacks[i].push(j);
this.$CachedDOMImageSizePool_pendingThisObjs[i].push(k);}else{

this.$CachedDOMImageSizePool_pendingCallbacks[i]=[j];
this.$CachedDOMImageSizePool_pendingThisObjs[i]=[k];
c('getDOMImageSize')(i,this.$CachedDOMImageSizePool_onImageSizeReady,this);}};


h.prototype.







set=function(i,j,k){'use strict';
if(this.$CachedDOMImageSizePool_cacheCount>this.$CachedDOMImageSizePool_maxCacheCount)

this.$CachedDOMImageSizePool_debouncedRecycle();


var l=this.$CachedDOMImageSizePool_cache;
if(i&&!l[i]){
var m=
{width:j,
height:k,
src:i,
lastAccessTime:Date.now()};

l[i]=m;
this.$CachedDOMImageSizePool_cacheCount++;}};

h.prototype.






$CachedDOMImageSizePool_onImageSizeReady=function(i,j,k){'use strict';

this.set(k,i,j);

var l=this.$CachedDOMImageSizePool_pendingCallbacks[k],
m=this.$CachedDOMImageSizePool_pendingThisObjs[k];
for(var n=0,o=l.length;n<o;n++)
l[n].call(m[n],i,j,k);

delete this.$CachedDOMImageSizePool_pendingCallbacks[k];
delete this.$CachedDOMImageSizePool_pendingThisObjs[k];};
h.prototype.




$CachedDOMImageSizePool_recycle=function(){'use strict';
var i=Date.now(),
j=this.$CachedDOMImageSizePool_cache,
k=this.$CachedDOMImageSizePool_cacheCount,
l=this.$CachedDOMImageSizePool_cacheDuration;

for(var m in j){
var n=j[m];
if(i-n.lastAccessTime>l){
delete j[m];
k--;}}



this.$CachedDOMImageSizePool_cacheCount=k;};



f.exports=h;}),null);

/** js/components/Image/BackgroundImage.react.js */












__d('BackgroundImage.react',['cx','invariant','CachedDOMImageSizePool','Image.react','React','XUISpinner.react','joinClasses','clamp'],(function a(b,c,d,e,f,g,h,i){










var j=c('React').PropTypes,

k='(-?(\\d+\\.)?\\d+(px|\\%))',
l=new RegExp
('^'+k+'?(\\s'+k+')?$','g'),












m=new (c('CachedDOMImageSizePool'))(50,10*60*1000),

n=c('React').createClass({displayName:'BackgroundImage',
propTypes:



{src:j.string,




width:j.number.isRequired,




height:j.number.isRequired,


















backgroundSize:j.oneOf
(['contain',
'cover',
'containinside',
'coverinside']),





loadingIndicatorStyle:j.oneOf
(['none',
'large',
'small']),








backgroundPosition:function o
(p,
q,
r){
var s=p[q];
if(s){

typeof s==='string'||i(0,
'Invalid backgroundPosition. Must be a string but received as %s',
s);


s.match(l)||i(0,
'Invalid backgroundPosition %s',
s);}



p.backgroundFocus==null||
p.backgroundPosition==null||i(0,
'backgroundFocus cannot be used with backgroundPosition');},








backgroundFocus:function o
(p,
q,
r){
var s=p[q];
if(s){

typeof s==='string'||i(0,
'Invalid backgroundFocus. Must be a string but received as %s',
s);


s.match(l)||i(0,
'Invalid backgroundFocus %s',
s);}



p.backgroundFocus==null||
p.backgroundPosition==null||i(0,
'backgroundFocus cannot be used with backgroundPosition');},










onImageLoad:j.func,





optimizeResizeSpeed:j.bool,




onContextMenu:j.func},


getInitialState:function o(){

return {imageWidth:null,
imageHeight:null,
imageSrc:this.props.src,
loading:true};},



getDefaultProps:function o(){

return {optimizeResizeSpeed:false,
loadingIndicatorStyle:'none'};},



componentDidMount:function o(){
this._resolveImageSize();},


componentDidUpdate:function o(p){
if(this.props.src!==this.state.imageSrc)
this.setState

({imageWidth:0,
imageHeight:0,
imageSrc:this.props.src,
loading:true},

this._resolveImageSize);},




_resolveImageSize:function o(){
var p=this.state.imageSrc;
if(p)
m.get(p,this._onImageSizeResolved,this);},



render:function o(){
var p=
{width:this.props.width+'px',
height:this.props.height+'px'},


q=c('joinClasses')
(this.props.className,
"_5f0d");



return (c('React').createElement('div',babelHelpers['extends']({},
this.props,
{className:c('joinClasses')(this.props.className,q),
style:babelHelpers['extends']({},
this.props.style||{},
p),

onContextMenu:this.props.onContextMenu}),
this._renderImage(),
this._renderContent(),
this._renderLoadingIndicator()));},




_renderLoadingIndicator:function o(){
if(!this.state.loading||this.props.loadingIndicatorStyle==='none')
return null;


return (c('React').createElement('div',{className:"_1qe- _5lar"},
c('React').createElement('div',{className:"_1qe_"},
c('React').createElement('div',{className:"_1qf0"},
c('React').createElement(c('XUISpinner.react'),{size:this.props.loadingIndicatorStyle})))));},






_renderContent:function o(){
if(this.props.children)

return (c('React').createElement('div',{className:"_1qe-"},
c('React').createElement('div',{className:"_1qe_"},
c('React').createElement('div',{className:"_1qf0"},
this.props.children))));},







_renderImage:function o(){
if(!this.state.imageWidth||!this.state.imageHeight)
return;


var p=this.props.width,
q=this.props.height,
r,
s;
switch(this.props.backgroundSize){
case 'cover':
r='cover';
s=false;
break;
case 'coverinside':
r='cover';
s=true;
break;
case 'contain':
r='contain';
s=false;
break;
case 'containinside':
r='contain';
s=true;}

var t=this.state.imageWidth,
u=this.state.imageHeight,
v=p/q,
w=t/u;

if(r==='contain')



if((t>p||!s)&&w>=v){
t=p;
u=t/w;}else
if(u>q||!s){
u=q;
t=u*w;}


if(r==='cover')



if((t>p||!s)&&w>=v){
u=q;
t=u*w;}else
if(u>q||!s){
t=p;
u=t/w;}



var x=this._getImageStyle(t,u);


return (c('React').createElement(c('Image.react'),
{alt:'',
className:"_5i4g"+

(this.props.optimizeResizeSpeed?' '+"_5sjv":''),

style:x,
src:this.state.imageSrc}));},




_getImageStyle:function o
(p,
q){
var r=['50%','50%'],
s=this._getBackgroundPositionPxValue;

if(this.props.backgroundPosition){
r=this.props.backgroundPosition.split(' ');}else
if(this.props.backgroundFocus){
r=this.props.backgroundFocus.split(' ');
s=this._getBackgroundFocusPxValue;}



return {width:Math.round(p)+'px',
height:Math.round(q)+'px',
left:s(r[0],p,this.props.width),
top:s(r[1]||r[0],q,this.props.height)};},



_getBackgroundPositionPxValue:function o
(p,
q,
r){
var s=parseFloat(p),
t=p.substr(s.toString().length);

if(t==='px')
return p;



return Math.round((r-q)*(s/100))+'px';},


_getBackgroundFocusPxValue:function o
(p,
q,
r){
var s=parseFloat(p),
t=p.substr(s.toString().length);


if(q<r)
return '0';



var u=t==='px'?s:Math.round(q*(s/100)),


v=u-r/2;



v=c('clamp')(v,0,q-r);
return -v+'px';},


_onImageSizeResolved:function o
(p,
q,
r){
if(!this.isMounted()||this.state.imageSrc!==r)
return;


var s=this.props.onImageLoad?
this.props.onImageLoad.bind(null,p,q):
null;

this.setState

({imageWidth:p,
imageHeight:q,
loading:false},

s);}});




f.exports=n;}),null);

/** js/components/core/XUI/Typeahead/TypeaheadViewPropTypes.js */





__d('TypeaheadViewPropTypes',['React'],(function a(b,c,d,e,f,g){

'use strict';



var h=c('React').PropTypes,











i=
{ariaOwneeID:h.string,
highlightedEntry:h.object,
entries:h.array.isRequired,
onSelect:h.func.isRequired,
onHighlight:h.func,
onRenderHighlight:h.func,
role:h.string};


f.exports=i;}),null);

/** js/components/core/XUI/Typeahead/XUITypeaheadViewContainer.react.js */





__d('XUITypeaheadViewContainer.react',['cx','React','joinClasses'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;i=babelHelpers.inherits














(k,c('React').Component);j=i&&i.prototype;k.prototype.


render=function(){

return (c('React').createElement('ul',
{className:
c('joinClasses')
("_599r",
this.props.className),


'data-testid':this.props.testID,
id:this.props.ariaOwneeID,
role:this.props.role},
this.props.children));};


function k(){i.apply(this,arguments);}


f.exports=k;}),null);

/** shared/typeahead/TypeaheadViewItem.js */





__d('TypeaheadViewItem',['React','ReactDOM','SearchableEntry'],(function a(b,c,d,e,f,g){





var h=c('React').PropTypes,

i=
{entry:h.instanceOf(c('SearchableEntry')).isRequired,
highlighted:h.bool,
role:h.string,
selected:h.bool,
onSelect:h.func.isRequired,
onHighlight:h.func,
onRenderHighlight:h.func},












j=



{_onSelect:function l(m){
this.props.onSelect(this.props.entry,m);},





_onHighlight:function l(m){
if(this.props.onHighlight)
this.props.onHighlight(this.props.entry,m);},






getDefaultProps:function l(){

return {role:'option'};},







shouldComponentUpdate:function l(m){

return (this.props.entry.getUniqueID()!==m.entry.getUniqueID()||
this.props.highlighted!==m.highlighted||
this.props.selected!==m.selected);},



componentDidMount:function l(){
if(this.props.highlighted&&this.props.onRenderHighlight)
this.props.onRenderHighlight(c('ReactDOM').findDOMNode(this));},



componentDidUpdate:function l(){
if(this.props.highlighted&&this.props.onRenderHighlight)
this.props.onRenderHighlight(c('ReactDOM').findDOMNode(this));}};




function k(l){var m,n;
return n=m=function(){var o,p;o=babelHelpers.inherits(q,c('React').Component);p=o&&o.prototype;function q(){var r,s;'use strict';for(var t=arguments.length,u=Array(t),v=0;v<t;v++)u[v]=arguments[v];return s=(r=p.constructor).call.apply(r,[this].concat(u)),this.






































$TypeaheadViewItem_onSelect=function(w){
this.props.onSelect(this.props.entry,w);}.
bind(this),this.

$TypeaheadViewItem_onHighlight=function(w){
if(this.props.onHighlight)
this.props.onHighlight(this.props.entry,w);}.

bind(this),s;}q.prototype.shouldComponentUpdate=function(r){'use strict';return this.props.entry.getUniqueID()!==r.entry.getUniqueID()||this.props.highlighted!==r.highlighted||this.props.selected!==r.selected;};q.prototype.componentDidMount=function(){'use strict';if(this.props.highlighted&&this.props.onRenderHighlight)this.props.onRenderHighlight(c('ReactDOM').findDOMNode(this));};q.prototype.componentDidUpdate=function(){'use strict';if(this.props.highlighted&&this.props.onRenderHighlight)this.props.onRenderHighlight(c('ReactDOM').findDOMNode(this));};q.prototype.render=function(){'use strict';return c('React').createElement(l,babelHelpers['extends']({},this.props,{onSelect:this.$TypeaheadViewItem_onSelect,onHighlight:this.$TypeaheadViewItem_onHighlight}));};return q;}(),m.displayName='TypeaheadViewItem('+l.displayName+')',m.defaultProps={role:'option'},n;}



f.exports=
{makeTypeaheadViewItem:k,
Mixin:j,
propTypes:i};}),null);

/** js/components/core/XUI/Typeahead/XUITypeaheadViewItem.react.js */





__d('XUITypeaheadViewItem.react',['cx','BackgroundImage.react','Badge.react','ImageBlock.react','React','TextWithEmoticons.react','Tooltip','TypeaheadViewItem','joinClasses'],(function a(b,c,d,e,f,g,h){












var i=c('React').PropTypes,






j=c('React').createClass({displayName:'XUITypeaheadViewItem',
mixins:[c('TypeaheadViewItem').Mixin],

propTypes:babelHelpers['extends']({},
c('TypeaheadViewItem').propTypes,
{splitText:i.bool,
tooltip:i.node}),


render:function k(){
var l=this.props.entry,

m=this.props.splitSubtext?
l.getSubtitle().split(' \u00b7 ')[0]:
l.getSubtitle(),

n=m?
c('React').createElement('div',{className:"_599q"},
this.props.children,
m):

null,





o=l.getPhoto()?
c('React').createElement(c('BackgroundImage.react'),
{width:32,
height:32,
backgroundSize:'cover',
src:l.getPhoto()}):

c('React').createElement('span',null),

p=l.getAuxiliaryData(),
q=null;
if(p)
if(p.verified){
q=c('React').createElement(c('Badge.react'),null);}else
if(p.nonCoworker){
q=c('React').createElement(c('Badge.react'),{type:'work_non_coworker'});}else
if(p.workUser)
q=c('React').createElement(c('Badge.react'),{type:'work'});



var r="_599m"+

(!n?' '+"_5mne":'')+
(this.props.highlighted?' '+"_599n":'');

r=c('joinClasses')(r,this.props.className);


return (c('React').createElement('li',babelHelpers['extends']
({'aria-selected':this.props.highlighted,
className:r,
onMouseDown:this._onSelect,
onMouseEnter:this._onHighlight,
role:this.props.role},

this.props.tooltip?
c('Tooltip').propsFor(this.props.tooltip,'right'):
{}),

c('React').createElement(c('ImageBlock.react'),{spacing:'medium'},
o,
c('React').createElement('div',null,
c('React').createElement('div',{className:"_599p"},
c('React').createElement(c('TextWithEmoticons.react'),
{renderEmoticons:false,
renderEmoji:true,
text:l.getTitle()}),

q),

n))));}});







f.exports=j;}),null);

/** js/components/core/XUI/Typeahead/XUITypeaheadView.react.js */






__d('XUITypeaheadView.react',['cx','React','TypeaheadViewPropTypes','XUITypeaheadViewContainer.react','XUITypeaheadViewItem.react','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits










(k,c('React').Component);j=i&&i.prototype;function k(){var l,m;'use strict';for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=j.constructor).call.apply(l,[this].concat(o)),this.






$XUITypeaheadView_renderItem=function(q){
var r=q===this.props.highlightedEntry;


return (c('React').createElement(c('XUITypeaheadViewItem.react'),
{key:q.getUniqueID(),
entry:q,
highlighted:r,
onSelect:this.props.onSelect,
onHighlight:this.props.onHighlight,
onRenderHighlight:this.props.onRenderHighlight}));}.


bind(this),m;}k.prototype.

render=function(){'use strict';
var l=
!this.props.entries.length?"_599s":'';


if(this.props.className)
l=c('joinClasses')(this.props.className,l);



return (c('React').createElement(c('XUITypeaheadViewContainer.react'),
{className:l,
id:this.props.ariaOwneeID,
role:this.props.role},
this.props.entries.map(this.$XUITypeaheadView_renderItem)));};


k.propTypes=c('TypeaheadViewPropTypes');k.defaultProps={role:'listbox'};


f.exports=k;}),null);

/** shared/typeahead/AbstractSearchSource.js */






__d('AbstractSearchSource',['Promise'],(function a(b,c,d,e,f,g){h.prototype.




































bootstrap=function(i){'use strict';
if(!this.$AbstractSearchSource_bootstrapPromise)
this.$AbstractSearchSource_bootstrapPromise=new (c('Promise'))(function(j){
this.bootstrapImpl(j);}.
bind(this));

return this.$AbstractSearchSource_bootstrapPromise.then(i);};
h.prototype.









search=
function(i,
j,




k){
'use strict';
this.searchImpl(i,j,k);};
h.prototype.










bootstrapImpl=function(i){'use strict';
i();};
h.prototype.





















searchImpl=
function(i,
j,




k){
'use strict';
throw new Error('Abstract method #searchImpl is not implemented.');};
h.prototype.

clearBootstrappedData=function(){'use strict';
this.$AbstractSearchSource_bootstrapPromise=null;};
function h(){'use strict';}


f.exports=h;}),null);

/** shared/typeahead/SearchSourceQueryStatus.js */






__d('SearchSourceQueryStatus',[],(function a(b,c,d,e,f,g){

var h=
{ACTIVE:'ACTIVE',
COMPLETE:'COMPLETE'};






f.exports=h;}),null);

/** shared/typeahead/SearchSourceCallbackManager.js */





__d('SearchSourceCallbackManager',['invariant','SearchSourceQueryStatus','createObjectFrom'],(function a(b,c,d,e,f,g,h){






var i=c('SearchSourceQueryStatus').ACTIVE,j=c('SearchSourceQueryStatus').COMPLETE;






function k(m){'use strict';


this.$SearchSourceCallbackManager_parseFn=m.parseFn;

typeof this.$SearchSourceCallbackManager_parseFn==='function'||h(0,
'Your config must specify a parse function.');



this.$SearchSourceCallbackManager_matchFn=m.matchFn;

typeof this.$SearchSourceCallbackManager_matchFn==='function'||h(0,
'Your config must specify a match function.');




this.$SearchSourceCallbackManager_alwaysPrefixMatch=m.alwaysPrefixMatch||false;
this.$SearchSourceCallbackManager_indexFn=m.indexFn||l;
this.$SearchSourceCallbackManager_exclusions=m.exclusions||{};


this.reset();}
k.prototype.

































search=function(m,n,o){'use strict';
var p=this.$SearchSourceCallbackManager_executeCallback(m,n,o);
if(p)
return 0;


this.$SearchSourceCallbackManager_allRequests.push
({queryString:m,
callback:n,
options:o});


var q=this.$SearchSourceCallbackManager_allRequests.length-1;
this.$SearchSourceCallbackManager_pendingCallbackIDs.push(q);
return q;};
k.prototype.




















$SearchSourceCallbackManager_executeCallback=function(m,n,o){'use strict';
var p=this.$SearchSourceCallbackManager_getMatchingIDs(m),
q=!!this.$SearchSourceCallbackManager_exhaustedQueryStrings[m];


if(!p.length){
n
([],
m,
q?j:i);

return q;}


var r=p.map
(function(s){
return this.$SearchSourceCallbackManager_entriesMap[s];},
this);



n
(r,
m,
q?j:i);


return q;};
k.prototype.





$SearchSourceCallbackManager_runPendingCallbacks=function(){'use strict';
var m=this.$SearchSourceCallbackManager_pendingCallbackIDs;
this.$SearchSourceCallbackManager_pendingCallbackIDs=[];
m.forEach(this.$SearchSourceCallbackManager_executePendingAndCleanUp,this);};
k.prototype.




$SearchSourceCallbackManager_executePendingAndCleanUp=function(m){'use strict';
var n=this.$SearchSourceCallbackManager_allRequests[m];


if(!n)
return;


var o=this.$SearchSourceCallbackManager_executeCallback
(n.queryString,
n.callback,
n.options);




if(o){
delete this.$SearchSourceCallbackManager_allRequests[m];
return;}


this.$SearchSourceCallbackManager_pendingCallbackIDs.push(m);};
k.prototype.








reset=function(){'use strict';

this.$SearchSourceCallbackManager_entriesMap={};




this.$SearchSourceCallbackManager_textMap={};












this.$SearchSourceCallbackManager_localCache={};









this.$SearchSourceCallbackManager_queryCache={};














this.$SearchSourceCallbackManager_exhaustedQueryStrings={};


this.$SearchSourceCallbackManager_pendingCallbackIDs=[];






this.$SearchSourceCallbackManager_allRequests=[undefined];};
k.prototype.








addLocalEntries=function(m){'use strict';
m.forEach(function(n){
var o=n.getUniqueID(),
p=this.$SearchSourceCallbackManager_indexFn(n);

this.$SearchSourceCallbackManager_entriesMap[o]=n;
this.$SearchSourceCallbackManager_textMap[o]=p;

var q=this.$SearchSourceCallbackManager_parseFn(p);

q.tokens.forEach(function(r){
if(!Object.prototype.hasOwnProperty.call(this.$SearchSourceCallbackManager_localCache,r))
this.$SearchSourceCallbackManager_localCache[r]={};

this.$SearchSourceCallbackManager_localCache[r][o]=true;},
this);},
this);

this.$SearchSourceCallbackManager_runPendingCallbacks();};
k.prototype.
















addQueryEntries=function(m,n,o){'use strict';
if(o===j)
this.setQueryStringAsExhausted(n);

var p=this.$SearchSourceCallbackManager_getMatchingIDs(n),
q=this.$SearchSourceCallbackManager_parseFn(n).flatValue;
this.$SearchSourceCallbackManager_queryCache[q]=c('createObjectFrom')
(p,
true);


m.forEach(function(r){
var s=r.getUniqueID();
this.$SearchSourceCallbackManager_entriesMap[s]=r;
this.$SearchSourceCallbackManager_textMap[s]=this.$SearchSourceCallbackManager_indexFn(r);
this.$SearchSourceCallbackManager_queryCache[q][s]=true;},
this);

this.$SearchSourceCallbackManager_runPendingCallbacks();};
k.prototype.






unsubscribe=function(m){'use strict';
delete this.$SearchSourceCallbackManager_allRequests[m];};
k.prototype.






removeEntry=function(m){'use strict';
delete this.$SearchSourceCallbackManager_entriesMap[m];};
k.prototype.








getAllEntriesMap=function(){'use strict';
return this.$SearchSourceCallbackManager_entriesMap;};
k.prototype.








setQueryStringAsExhausted=function(m){'use strict';
this.$SearchSourceCallbackManager_exhaustedQueryStrings[m]=true;};
k.prototype.







unsetQueryStringAsExhausted=function(m){'use strict';
delete this.$SearchSourceCallbackManager_exhaustedQueryStrings[m];};
k.prototype.








$SearchSourceCallbackManager_getMatchingIDs=function(m){'use strict';
var n=this.$SearchSourceCallbackManager_applyMandatorySort
(m,
this.$SearchSourceCallbackManager_findLocalMatches(m)),

o=this.$SearchSourceCallbackManager_applyMandatorySort
(m,
this.$SearchSourceCallbackManager_findQueryMatches(m)),




p=n.concat(o),

q={},
r=[];

p.forEach(function(s){

if(q[s]==null&&this.$SearchSourceCallbackManager_entriesMap[s]!=null&&
this.$SearchSourceCallbackManager_exclusions[s]==null){
r.push(s);
q[s]=true;}},

this);

return r;};
k.prototype.










$SearchSourceCallbackManager_applyMandatorySort=function(m,n){'use strict';
var o=this.$SearchSourceCallbackManager_getExtendedMatchMap(m,n),
p=this.$SearchSourceCallbackManager_entriesMap;

function q(r,s){


if(o[r]!==o[s])
return o[r]?-1:1;


var t=p[r],
u=p[s];



if(t.getOrder()!==u.getOrder())
return t.getOrder()-u.getOrder();



var v=t.getTitle().length,
w=u.getTitle().length;
if(v!==w)
return v-w;



return t.getUniqueID()-u.getUniqueID();}


return n.sort(q).slice();};
k.prototype.









$SearchSourceCallbackManager_getExtendedMatchMap=function(m,n){'use strict';
var o={};
n.forEach(function(p){
o[p]=this.$SearchSourceCallbackManager_matchFn(m,this.$SearchSourceCallbackManager_textMap[p]);},
this);
return o;};
k.prototype.














$SearchSourceCallbackManager_findLocalMatches=function(m){'use strict';
var n=this.$SearchSourceCallbackManager_parseFn(m,this.$SearchSourceCallbackManager_alwaysPrefixMatch),
o=this.$SearchSourceCallbackManager_alwaysPrefixMatch?
n.sortedTokens:
n.tokens,

p=o.length,



q=n.isPrefixQuery?p-1:null,


r={},


s={},


t={},

u=false,

v={},
w=0;

o.forEach(function(y,z){

if(Object.prototype.hasOwnProperty.call(v,y))
return;


w++;
v[y]=true;



for(var aa in this.$SearchSourceCallbackManager_localCache){


var ba=
aa===y&&
!Object.prototype.hasOwnProperty.call(r,aa),


ca=false;
if(!ba)

ca=
(this.$SearchSourceCallbackManager_alwaysPrefixMatch||q===z)&&
aa.indexOf(y)===0;




if(!ba&&!ca)
continue;


if(aa===y){


if(Object.prototype.hasOwnProperty.call(s,aa))
u=true;

r[aa]=true;}else{



if(Object.prototype.hasOwnProperty.call(r,aa)||Object.prototype.hasOwnProperty.call
(s,aa))
u=true;

s[aa]=true;}





for(var da in this.$SearchSourceCallbackManager_localCache[aa])
if(z===0||
Object.prototype.hasOwnProperty.call(t,da)&&
t[da]==w-1)
t[da]=w;}},



this);


var x=Object.keys(t).filter(function(y){
return t[y]==w;});




if(u||w<p)
x=this.$SearchSourceCallbackManager_filterResultsUsingStringMatch
(m,
x);



return x;};
k.prototype.












$SearchSourceCallbackManager_findQueryMatches=function(m){'use strict';
var n=this.$SearchSourceCallbackManager_parseFn(m).flatValue,
o=this.$SearchSourceCallbackManager_findBestQueryCacheResults(n);



if(Object.prototype.hasOwnProperty.call(this.$SearchSourceCallbackManager_queryCache,n))
return o;




return this.$SearchSourceCallbackManager_filterResultsUsingStringMatch
(m,
o);};

k.prototype.











$SearchSourceCallbackManager_findBestQueryCacheResults=function(m){'use strict';
var n=0,
o=null,
p=this.$SearchSourceCallbackManager_queryCache;



Object.keys(p).forEach(function(q){
if(m.indexOf(q)===0&&q.length>n){
n=q.length;
o=q;}});




return (Object.prototype.hasOwnProperty.call(p,o)?Object.keys(p[o]):[]);};

k.prototype.
















$SearchSourceCallbackManager_filterResultsUsingStringMatch=function(m,n){'use strict';
return n.filter(function(o){
return this.$SearchSourceCallbackManager_matchFn(m,this.$SearchSourceCallbackManager_textMap[o]);},
this);};










function l(m){
return [m.getTitle(),m.getKeywordString()].join(' ');}


f.exports=k;}),null);

/** shared/typeahead/AbstractAsyncSearchSource.js */





__d('AbstractAsyncSearchSource',['AbstractSearchSource','SearchSourceCallbackManager','SearchSourceQueryStatus','SearchableEntry','TokenizeUtil','emptyFunction','isValidUniqueID'],(function a(b,c,d,e,f,g){var h,i,










j=c('SearchSourceQueryStatus').ACTIVE,k=c('SearchSourceQueryStatus').COMPLETE;h=babelHelpers.inherits

(l,c('AbstractSearchSource'));i=h&&h.prototype;






















function l(m,n,o){'use strict';
i.constructor.call(this);
this.$AbstractAsyncSearchSource_bootstrapRequests=m.bootstrapRequests;
this.$AbstractAsyncSearchSource_queryRequests=m.queryRequests;
this.$AbstractAsyncSearchSource_auxiliaryFields=m.auxiliaryFields;
this.$AbstractAsyncSearchSource_asyncErrorHandler=m.asyncErrorHandler||c('emptyFunction');
this.$AbstractAsyncSearchSource_packageResult=m.packageFn||this.$AbstractAsyncSearchSource_defaultPackageFn;
this.$AbstractAsyncSearchSource_requestData=m.requestData||{};
this.$AbstractAsyncSearchSource_getAllForEmptyQuery=m.getAllForEmptyQuery;

this.$AbstractAsyncSearchSource_bootstrapEntries=[];
this.$AbstractAsyncSearchSource_callbackManager=new (c('SearchSourceCallbackManager'))
({parseFn:c('TokenizeUtil').parse,

matchFn:m.matchFn||c('TokenizeUtil').isQueryMatch,
indexFn:m.indexFn,
exclusions:m.exclusions});


this.$AbstractAsyncSearchSource_sendRequestImpl=n;
this.$AbstractAsyncSearchSource_normalizeResponse=o;}
l.prototype.




bootstrapImpl=function(m){'use strict';
if(!this.$AbstractAsyncSearchSource_bootstrapRequests||!this.$AbstractAsyncSearchSource_bootstrapRequests.length){
m();
return;}


var n=this.$AbstractAsyncSearchSource_bootstrapRequests.length,
o=0;
this.$AbstractAsyncSearchSource_bootstrapRequests.forEach(function(p){
this.$AbstractAsyncSearchSource_sendRequest(this.$AbstractAsyncSearchSource_requestData,p,function(q){
this.$AbstractAsyncSearchSource_callbackManager.addLocalEntries(q);
this.$AbstractAsyncSearchSource_bootstrapEntries=this.$AbstractAsyncSearchSource_bootstrapEntries.concat(q);

o++;
if(o===n){
m();
m=null;}}.

bind(this));}.
bind(this));};
l.prototype.

















searchImpl=function(m,n,o){'use strict';
if(this.$AbstractAsyncSearchSource_getAllForEmptyQuery&&m===''){
this.getBootstrappedEntries(function(u){
n(u,m);});

return;}


var p=null,
q={},
r=this.$AbstractAsyncSearchSource_callbackManager.search
(m,

function(u,
v,
w){

if(o&&o.waitForAllResults&&w!==k)
return;

if(!p){
p=u;
p.forEach
(function(x){
q[x.getUniqueID()]=true;});}else 






u.forEach
(function(x){
var y=x.getUniqueID();
if(!q[y]){
p.push(x);
q[y]=true;}});




n(p,v,w);},

o);




if(!r||!this.$AbstractAsyncSearchSource_queryRequests||!this.$AbstractAsyncSearchSource_queryRequests.length)
return;


var s=babelHelpers['extends']
({value:m,
existing_ids:p&&p.map
(function(u){return u.getUniqueID();}).
join(',')},
this.$AbstractAsyncSearchSource_requestData),




t=this.$AbstractAsyncSearchSource_queryRequests.length;
this.$AbstractAsyncSearchSource_queryRequests.forEach(function(u){
this.$AbstractAsyncSearchSource_sendRequest(s,u,function(v){
t--;
this.$AbstractAsyncSearchSource_addQueryResults
(v,
m,
t?j:k);}.

bind(this));},
this);};
l.prototype.





getBootstrappedEntries=function(m){'use strict';
return this.bootstrap(function(){return m(this.$AbstractAsyncSearchSource_bootstrapEntries||[]);}.bind(this));};
l.prototype.




getAllEntriesMap=function(){'use strict';
return this.$AbstractAsyncSearchSource_callbackManager.getAllEntriesMap();};
l.prototype.











setRequestData=function(m){'use strict';
this.$AbstractAsyncSearchSource_requestData=m;};
l.prototype.









$AbstractAsyncSearchSource_sendRequest=function(m,n,o){'use strict';
this.$AbstractAsyncSearchSource_sendRequestImpl
(m,
n,
function(p){
return (o(this.$AbstractAsyncSearchSource_normalizeResponse(p,this.$AbstractAsyncSearchSource_packageResult).filter
(function(q){return !!q;})));}.bind(this),

this.$AbstractAsyncSearchSource_asyncErrorHandler);};

l.prototype.




$AbstractAsyncSearchSource_addLocalResults=function(m){'use strict';
this.$AbstractAsyncSearchSource_callbackManager.addLocalEntries(m);};
l.prototype.






$AbstractAsyncSearchSource_addQueryResults=function(m,n,o){'use strict';
this.$AbstractAsyncSearchSource_callbackManager.addQueryEntries(m,n,o);};
l.prototype.













$AbstractAsyncSearchSource_defaultPackageFn=function(m,n){'use strict';
var o=m.title||m.text,
p=m.uniqueID||m.uid;
if(!o||!c('isValidUniqueID')(p))
return null;

return new (c('SearchableEntry'))
({uniqueID:p,
order:m.order||m.index||n,
title:o,
subtitle:m.subtitle||m.category||m.subtext,
keywordString:m.keywordString||m.tokens,
type:m.type,
photo:m.photo,
uri:m.uri||m.path,
auxiliaryData:this.$AbstractAsyncSearchSource_getAuxiliaryData(m)});};

l.prototype.





$AbstractAsyncSearchSource_getAuxiliaryData=function(m){'use strict';
var n;


if(this.$AbstractAsyncSearchSource_auxiliaryFields){
n={};
for(var o in this.$AbstractAsyncSearchSource_auxiliaryFields){
var p=this.$AbstractAsyncSearchSource_auxiliaryFields[o];
n[o]=m[p];}}




if(m.aux_data)
n=babelHelpers['extends']({},n,m.aux_data);


return n;};



f.exports=l;}),null);

/** js/searchsources/WebAsyncSearchSourceUtils.js */





__d('WebAsyncSearchSourceUtils',[],(function a(b,c,d,e,f,g){







var h=
{normalizeResponse:function i
(j,
k){

var l=j.getPayload(),
m;
if(Array.isArray(l)){
m=l;}else
if(l&&l.entries){
m=l.entries;}else 

m=[];

return m.map(k,this);}};



f.exports=h;}),null);

/** js/searchsources/WebAsyncSearchSource.js */





__d('WebAsyncSearchSource',['AbstractAsyncSearchSource','AbstractSearchSource','AsyncRequest','WebAsyncSearchSourceUtils'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits






(j,c('AbstractSearchSource'));i=h&&h.prototype;













function j(k){'use strict';
i.constructor.call(this);
this.$WebAsyncSearchSource_searchSource=new (c('AbstractAsyncSearchSource'))
(k,
this.$WebAsyncSearchSource_sendRequest,
c('WebAsyncSearchSourceUtils').normalizeResponse);}

j.prototype.




bootstrapImpl=function(k){'use strict';
this.$WebAsyncSearchSource_searchSource.bootstrap(k);};
j.prototype.






searchImpl=function(k,l,m){'use strict';
this.$WebAsyncSearchSource_searchSource.search(k,l,m);};
j.prototype.





getBootstrappedEntries=function(k){'use strict';
return this.$WebAsyncSearchSource_searchSource.getBootstrappedEntries(k);};
j.prototype.




getAllEntriesMap=function(){'use strict';
return this.$WebAsyncSearchSource_searchSource.getAllEntriesMap();};
j.prototype.






setRequestData=function(k){'use strict';
this.$WebAsyncSearchSource_searchSource.setRequestData(k);};
j.prototype.









$WebAsyncSearchSource_sendRequest=function(k,l,m,n){'use strict';
new (c('AsyncRequest'))(l.uri).
setData(babelHelpers['extends']({},
k,
l.data)).

setMethod('GET').
setReadOnly(true).
setAllowCrossPageTransition(true).
setHandler(m).
setErrorHandler(n).
send();};



f.exports=j;}),null);

/** shared/core_components/Grid/Grid.react.js */




__d('Grid.react',['cx','React','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,k,l,






m=c('React').PropTypes;i=babelHelpers.inherits

(n,c('React').Component);j=i&&i.prototype;n.prototype.








render=function(){'use strict';var p=







this.props,q=p.alignh,r=p.alignv,s=p.children,t=p.cols,u=p.fixed,v=p.spacing,

w=c('React').Children.count(s),

x=[],y=[],
z=0;
c('React').Children.forEach(s,function(aa,ba){


if(aa===null||aa===undefined)
return;


var ca=aa.type===o;

z+=ca?Math.max(aa.props.colSpan||0,1):1;



var da=z===t?"_51mw":'';

if(!ca){

aa=
c('React').createElement(o,
{alignh:q,
alignv:r,
className:c('joinClasses')(v,da),
key:aa.key||ba},
aa);}else 


aa=c('React').cloneElement(aa,
{key:aa.key||ba,
alignh:aa.props.alignh||q,
alignv:aa.props.alignv||r,
className:c('joinClasses')
(aa.props.className,
v,
da)});




y.push(aa);


if(z%t===0||ba+1===w){

if(u&&z<t){
for(var ea=z;ea<t;ea++)
y.push(c('React').createElement(o,{key:ba+ea}));

z=t;}


x.push
(c('React').createElement('tr',{className:"_51mx",key:ba},y));

y=[];
z=0;}});




return (c('React').createElement('table',babelHelpers['extends']({},this.props,
{className:c('joinClasses')(this.props.className,"uiGrid"+(' '+"_51mz")+


(u?' '+"_5f0n":'')),

cellSpacing:'0',
cellPadding:'0'}),
c('React').createElement('tbody',null,x)));};


function n(){'use strict';i.apply(this,arguments);}n.propTypes={cols:m.number.isRequired,fixed:m.bool,alignv:m.oneOf(['top','middle','bottom']),alignh:m.oneOf(['left','center','right']),spacing:m.string};k=babelHelpers.inherits


(o,c('React').Component);l=k&&k.prototype;o.prototype.





render=function(){'use strict';
var p=c('joinClasses')(this.props.className,"_51m-"+

(this.props.alignv==='top'?' '+"vTop":'')+
(this.props.alignv==='middle'?' '+"vMid":'')+
(this.props.alignv==='bottom'?' '+"vBot":'')+
(this.props.alignh==='left'?' '+"hLeft":'')+
(this.props.alignh==='center'?' '+"hCent":'')+
(this.props.alignh==='right'?' '+"hRght":''));



return (c('React').createElement('td',babelHelpers['extends']({},this.props,{className:p})));};

function o(){'use strict';k.apply(this,arguments);}o.propTypes={alignv:m.oneOf(['top','middle','bottom']),alignh:m.oneOf(['left','center','right'])};


n.GridItem=o;
f.exports=n;}),null);

/** shared/typeahead/TypeaheadNavigation.js */





__d("TypeaheadNavigation",[],(function a(b,c,d,e,f,g){









var h=





{moveUp:function i(j,k,l){
var m=j.indexOf(k),
n=m==-1?j.length-1:m-1;
l(n==-1?null:j[n]);},







moveDown:function i(j,k,l){
var m=j.indexOf(k)+1;
l(m==j.length?null:j[m]);}};



f.exports=h;}),null);
