if (self.CavalryLogger) { CavalryLogger.start_js(["WEGtD"]); }

/** js/search/facebar/FacebarResultStoreUtils.js */




__d('FacebarResultStoreUtils',['FacebarGlobalOptions','FacebarJSConstants'],(function a(b,c,d,e,f,g){
























'use strict';




var h=

{getQueryFeatures:function i(j){
var k={};
if(c('FacebarGlobalOptions').enableBootstrapRanking){
if(j.raw_text)
k.FEATURE_QUERY_LENGTH=j.raw_text.length;

if(j.tokens){
k.FEATURE_QUERY_TOKENS=j.tokens.length;
k.FEATURE_QUERY_TOKEN_LENGTH_SUM=0;
for(var l=0;l<j.tokens.length;l++)
k.FEATURE_QUERY_TOKEN_LENGTH_SUM+=
j.tokens[l].length;}}



return k;},


addFeatures:function i
(j,
k,
l,
m,
n,
o){

if(!j.features)
return;


j.features=
{FEATURE_QUERY_LENGTH:m.FEATURE_QUERY_LENGTH,
FEATURE_QUERY_TOKENS:m.FEATURE_QUERY_TOKENS,
FEATURE_QUERY_TOKEN_LENGTH_SUM:
m.FEATURE_QUERY_TOKEN_LENGTH_SUM};



j.features.FEATURE_IS_EXACT_NAME_MATCH=n;
j.features.FEATURE_IS_STOP_WORD_MATCH=o;


if(k&&k.length>0){
var p=k.split(' ').length,
q=0;
for(var r=0;r<j.termMatches.length;++r)
if(k.search(j.termMatches[r])>=0)
q++;


j.features.FEATURE_TITLE_TOKEN_MATCH_FRACTION=
q/p;}



if(l.tokens&&l.tokens.length>0){
var s=k.search(l.tokens[0]);
j.features.FEATURE_FIRST_TERM_MATCH_POSITION=s;
j.features.FEATURE_FIRST_TERM_MATCH_TOKEN=
k.substring(0,s+l.tokens[0].length).split(' ').length;
j.termMatches.some(function(t){
if(t.search(l.tokens[0])===0){
j.features.FEATURE_FIRST_TERM_MATCH_TOKEN_FRACTION=
l.tokens[0].length/t.length;
return true;}

return false;});

j.features.FEATURE_IN_ORDER_MATCH=1;
if(l.tokens.length>1){
s=k.search(l.tokens[1]);
j.features.FEATURE_SECOND_TERM_MATCH_POSITION=s;
j.features.FEATURE_SECOND_TERM_MATCH_TOKEN=
k.substring(0,s+l.tokens[1].length).split(' ').length;
j.termMatches.some(function(t){
if(t.search(l.tokens[1])===0){
j.features.FEATURE_FIRST_TERM_MATCH_TOKEN_FRACTION=
l.tokens[0].length/t.length;
return true;}

return false;});

if(j.features.FEATURE_SECOND_TERM_MATCH_TOKEN<
j.features.FEATURE_FIRST_TERM_MATCH_POSITION)
j.features.FEATURE_IN_ORDER_MATCH=0;}}




return j;},


processEntityResult:function i
(j,
k,
l,
m,
n,
o,
p,
q,
r){

var s=
{semantic:k.toString(),
structure:
[{type:j===c('FacebarJSConstants').keywordType?j:'ent:'+j,
text:l,
uid:k}],

type:j,
cost:m,
cache_id_length:0,
features:[]};

s.tuid=JSON.stringify
({semantic:s.semantic,
structure:s.structure});

if(c('FacebarGlobalOptions').enableBootstrapRanking){
s.termMatches=p[k.toString()];
s=this.addFeatures
(s,
l.toLowerCase(),
n,
o,
q,
r);}


return s;},


getRawTextFromStructured:function i(j){
var k=j.map(function(l){return l.getText();});
return k.join('');},


getTextFromResult:function i(j){
var k=j.structure,
l='';
k.forEach(function(m){
l+=m.text;});

return l;}};



f.exports=h;}),null);

/** shared/hashtag/HashtagParser.js */





__d('HashtagParser',['URLMatcher','getHashtagRegex'],(function a(b,c,d,e,f,g){













var h=100,
i=30,
j=/@\[([0-9]+):([0-9]+):((?:[^\\\]]*(?:\\.)*)*)\]/g;












function k(ca){
var da=x(ca),
ea=0,
fa=0;



return m(ca).map
(function(ga){
while(ea<da.length){
var ha=da[ea],


ia=ha.offset-fa;
if(ia<ga.offset){
fa+=ha.token.length-ha.name.length;
ea++;}else 

break;}






return {marker:ga.marker,
tag:ga.hashtag,
rawOffset:ga.offset+fa,
offset:ga.offset};});}

















function l(ca){
return n(ca,s(ca));}






function m(ca){
var da=z(ca);

return n
(da,
o(ca,da));}








function n
(ca,
da){
return q(ca).
slice(0,i).
filter(function(ea){
var fa=u
(ea.offset,
ea.hashtag.length,
da);



return !fa&&ea.hashtag.length<=h;});}







function o
(ca,
da){
return t
(r(ca),
s(da));}



var p=c('getHashtagRegex')();




function q(ca){
var da=[];
ca.replace
(p,

function(ea,
fa,
ga,
ha,
ia){
da.push
({marker:ga,
hashtag:ha,
offset:ia+fa.length});});



return da;}






function r(ca){
return aa(ca).map
(function(da){
return [da.offset,da.name.length];});}








function s(ca){
var da=[],
ea,
fa=0;
while(ea=c('URLMatcher').permissiveMatch(ca)){
var ga=ca.indexOf(ea);
da.push([fa+ga,ea.length]);
ca=ca.substring(ga+ea.length);
fa+=ga+ea.length;}

return da;}






function t
(ca,
da){
var ea=[],
fa=0,ga=0,ha=0;
while(fa<ca.length&&ga<da.length)
if(ca[fa][0]>da[ga][0]){
ea[ha++]=da[ga++];}else 

ea[ha++]=ca[fa++];


return ea.concat(ca.slice(fa),da.slice(ga));}





function u
(ca,
da,
ea){
if(!ea)
return false;




var fa=w(ea,ca);



return v(ca,da,ea,fa)||
v(ca,da,ea,fa+1);}





function v
(ca,
da,
ea,
fa){

if(!ea[fa])
return false;


var ga=ea[fa][0],
ha=ea[fa][1];



return !(ca+da-1<ga||
ca>ga+ha-1);}







function w(ca,da){
var ea=0,
fa=ca.length-1;


while(ea<=fa){
var ga=Math.floor((ea+fa)/2),
ha=ca[ga][0];
if(ha==da){
return ga;}else
if(ha<da){
ea=ga+1;}else 

fa=ga-1;}




return fa;}


function x(ca){
var da=[];
ca.replace
(j,

function(ea,
fa,
ga,
ha,
ia){
da.push
({token:ea,
id:fa,
type:ga,
name:ha,
offset:ia});});


return da;}



function y(ca){
return ca?ca.
replace(/\\([^\\])/g,'$1').
replace(/\\\\/g,'\\'):null;}


function z(ca){
return ca.replace
(j,

function(da,
ea,
fa,
ga,
ha){
return y(ga);});}



function aa(ca){
var da=0,








ea=0;
return x(ca).map
(function(fa){
var ga=ca.indexOf(fa.token,ea);

ea=ga+1;
ga-=da;

var ha=y(fa.name);




da+=fa.token.length-ha.length;

if(ga>=0)

return {id:fa.id,
name:ha,
type:fa.type,
offset:ga};});}






var ba={};

ba.parse=k;
ba.parseWithoutMentions=l;

f.exports=ba;}),null);

/** js/hashtag/HashtagSearchResultUtils.js */





__d('HashtagSearchResultUtils',['fbt','FacebarResultStoreUtils','HashtagParser','HashtagSearchResultConfig','URI'],(function a(b,c,d,e,f,g,h){







var i=







{getHashtagFromQuery:function j(k){
var l=c('HashtagParser').parse(k);
if(l&&l.length===1&&l[0].offset===0)
return l[0].tag;

return false;},








makeTypeaheadResult:function j(k){
var l=h._(["Hashtag","ef6a40ee0328d9ffdb76ae599b61aed8"]);






return {category:l,
path:new (c('URI'))('/hashtag/'+k).toString(),
photo:c('HashtagSearchResultConfig').image_url,
rankType:null,
replace_results:c('HashtagSearchResultConfig').boost_result?true:false,
scaled_score:1,
score:0,
text:'#'+k,
type:'hashtag_exact',
uid:'hashtag:'+k};},








makeFacebarEntry:function j(k){
var l=h._(["Hashtag","ef6a40ee0328d9ffdb76ae599b61aed8"]);






return {category:l,
path:new (c('URI'))('/hashtag/'+k).toString(),
photo:c('HashtagSearchResultConfig').image_url,
replace_results:c('HashtagSearchResultConfig').boost_result?true:false,
text:'#'+k,
type:'hashtag_exact',
uid:'hashtag:'+k};},







makeFacebarResult:function j(k){
var l=c('FacebarResultStoreUtils').processEntityResult
('hashtag_exact',
'hashtag:'+k,
'#'+k,
c('HashtagSearchResultConfig').hashtag_cost);

l.parse=
{display:
[{type:'ent:hashtag_exact',
uid:'hashtag:'+k}],

remTokens:[],
suffix:''};

l.tags={hashtag:'hashtag'};
return l;}};



f.exports=i;}),null);

/** js/modules/Typeahead.js */








__d('Typeahead',['ArbiterMixin','BehaviorsMixin','DataStore','DOM','Event','Parent','Run','Style','emptyFunction','ge','mixin'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits


















(j,c('mixin')(c('ArbiterMixin'),c('BehaviorsMixin')));i=h&&h.prototype;
































function j
(k,
l,
m,
n){
'use strict';
i.constructor.call(this);
this.args={data:k,view:l,core:m};
c('DataStore').set(n,'Typeahead',this);
this.element=n;}
j.prototype.


init=function(k){'use strict';

this.init=c('emptyFunction');





this.getCore();
this.getView().setAccessibilityControlElement(this.getCore().getElement());
this.proxyEvents();
this.initBehaviors(k||[]);
this.inform('init',this);
this.data.bootstrap();
this.core.focus();};
j.prototype.

getData=function(){'use strict';
if(!this.data){
var k=this.args.data;
this.data=k;
this.data.init();}

return this.data;};
j.prototype.

getView=function(){'use strict';
if(!this.view){
var k=this.args.view,
l=k.node||c('ge')(k.node_id);
if(!l){
l=c('DOM').create('div',{className:'uiTypeaheadView'});
c('DOM').appendContent(this.element,l);}

if(typeof k.ctor==='string'){
this.view=new window[k.ctor](l,k.options||{});}else 

this.view=new k.ctor(l,k.options||{});

this.view.init();
this.view.setTypeahead(this.element);}

return this.view;};
j.prototype.

getCore=function(){'use strict';
if(!this.core){
var k=this.args.core;
if(typeof k.ctor==='string'){
this.core=new window[k.ctor](k.options||{});}else 

this.core=new k.ctor(k.options||{});

this.core.init(this.getData(),this.getView(),this.getElement());}

return this.core;};
j.prototype.

getElement=function(){'use strict';
return this.element;};
j.prototype.






setHeight=function(k){'use strict';
if(k!=='auto')
k+='px';

c('Style').set(this.element,'height',k);};
j.prototype.





swapData=function(k){'use strict';
return this.$Typeahead_swapDataCheckResetCore(k,true);};
j.prototype.





swapDataNoCoreReset=function(k){'use strict';
return this.$Typeahead_swapDataCheckResetCore(k,false);};
j.prototype.

$Typeahead_swapDataCheckResetCore=
function(k,
l){
'use strict';
var m=this.core;
this.data=this.args.data=k;
k.init();
if(m){
m.data=k;
m.initData();
if(l)
m.reset();

this.proxyEvents();}

k.bootstrap();
return k;};
j.prototype.

proxyEvents=function(){'use strict';
[this.data,this.view,this.core].forEach(function(k){
k.subscribe(k.events,this.inform.bind(this));},
this);};
j.prototype.

initBehaviors=function(k){'use strict';



k.forEach(function(l){


if(typeof l==='string'){
if(b.TypeaheadBehaviors&&b.TypeaheadBehaviors[l]){
b.TypeaheadBehaviors[l](this);}else 

c('Run').onLoad(function(){
if(b.TypeaheadBehaviors)
(b.TypeaheadBehaviors[l]||c('emptyFunction'))(this);}.

bind(this));}else 


this.enableBehavior(l);},

this);};
j.

getInstance=function(k){'use strict';
var l=c('Parent').byClass(k,'uiTypeahead');
return l?c('DataStore').get(l,'Typeahead'):null;};
j.

initNow=
function(k,
l,
m){
'use strict';
if(m)
m.init(k);

k.init(l);};
j.

init=
function(k,
l,
m,
n){
var o;'use strict';

if(!c('DOM').isNodeOfType(k,['input','textarea']))
k=
c('DOM').scry(k,'input')[0]||
c('DOM').scry(k,'textarea')[0];


var p=false;



try{p=document.activeElement===k;}catch(
q){}

if(p){
j.initNow(l,m,n);}else 
(function(){
var r=c('Event').listen(k,'focus',function(){
j.initNow(l,m,n);
r.remove();});})
();};




f.exports=j;}),null);

/** js/ui/core/ui/typeahead/renderers/BasicTypeaheadRenderer.js */





__d('BasicTypeaheadRenderer',['BadgeHelper','DOM'],(function a(b,c,d,e,f,g){










function h(i,j){
var k=[];

if(i.icon)
k.push(c('DOM').create('img',{alt:'',src:i.icon}));


var l=i.debug_info;
if(l)
k.push(c('DOM').create('span',{className:'debugInfo'},l));


if(i.text){
var m=[i.text];
if(i.is_verified)
m.push(c('BadgeHelper').renderBadge('xsmall','verified'));

k.push(c('DOM').create('span',{className:'text'},m));}


if(i.subtext){
var n=[i.subtext];
k.push(c('DOM').create('span',{className:'subtext'},n));}


var o=c('DOM').create('li',{className:i.type||''},k);
if(i.text){
o.setAttribute('title',i.text);
o.setAttribute('aria-label',i.text);}

return o;}


h.className='basic';

f.exports=h;}),null);

/** shared/utils/createIxElement.js */





__d('createIxElement',['invariant','DOM','joinClasses'],(function a(b,c,d,e,f,g,h){
















function i(j,k){
var l='img',
m;


j.sprited||j.uri||h(0,
'createIxElement must be provided the result of an ix call.');


if(j.sprited){
l=c('joinClasses')
(l,
j.spriteMapCssClass,
j.spriteCssClass);

m=c('DOM').create('i',{className:l});
if(k!=null)
c('DOM').setContent(m,c('DOM').create('u',null,k));}else

if(j.uri){
m=
c('DOM').create('img',
{className:l,
src:j.uri});

if(k!=null)
m.setAttribute('alt',k);

if(j.width)
m.setAttribute('width',j.width);

if(j.height)
m.setAttribute('height',j.height);}


return m;}


f.exports=i;}),null);

/** js/modules/TypeaheadView.js */






__d('TypeaheadView',['ix','$','ArbiterMixin','BasicTypeaheadRenderer','CSS','DOM','Event','Parent','createIxElement','emptyFunction','getElementText','getOrCreateDOMID','mixin'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits
















(k,c('mixin')(c('ArbiterMixin')));j=i&&i.prototype;













function k(l,m){'use strict';
j.constructor.call(this);
this.element=this.content=c('$')(l);
Object.assign(this,m);}
k.prototype.










init=function(){'use strict';
this.init=c('emptyFunction');
this.initializeEvents();
this.reset();};
k.prototype.





initializeEvents=function(){'use strict';
c('Event').listen(this.element,
{mouseup:this.mouseup.bind(this),
mouseover:this.mouseover.bind(this)});};

k.prototype.






setTypeahead=function(l){'use strict';
this.typeahead=l;};
k.prototype.






setAccessibilityControlElement=function(l){'use strict';
this.accessibilityElement=l;};
k.prototype.






getElement=function(){'use strict';
return this.element;};
k.prototype.








mouseup=function(event){'use strict';



if(event.button!=2){
this.select(true);
event.prevent();}};

k.prototype.








mouseover=function(event){'use strict';
if(this.ignoreMouseover){
this.ignoreMouseover=false;
return;}

if(this.visible)
this.highlight(this.getIndex(event));};

k.prototype.











reset=function(l){'use strict';
if(!l)
this.disableAutoSelect=false;

this.index=-1;
this.items=[];
this.results=[];
this.value='';
this.content.innerHTML='';
this.inform('reset');
return this;};
k.prototype.









getIndex=function(event){'use strict';
return this.items.indexOf(c('Parent').byTag(event.getTarget(),'li'));};
k.prototype.








getSelection=function(){'use strict';
var l=this.results[this.index]||null;
return this.visible?l:null;};
k.prototype.






isEmpty=function(){'use strict';
return !this.results.length;};
k.prototype.






isVisible=function(){'use strict';
return !!this.visible;};
k.prototype.









show=function(){'use strict';
c('CSS').show(this.element);
if(this.results&&this.results.length)


if(this.autoSelect&&this.accessibilityElement&&this.selected)
this.accessibilityElement.setAttribute
('aria-activedescendant',
c('getOrCreateDOMID')(this.selected));



this.accessibilityElement&&
this.accessibilityElement.setAttribute('aria-expanded','true');
this.visible=true;
return this;};
k.prototype.







hide=function(){'use strict';
c('CSS').hide(this.element);
if(this.accessibilityElement){
this.accessibilityElement.setAttribute('aria-expanded','false');
this.accessibilityElement.removeAttribute('aria-activedescendant');}

this.visible=false;
return this;};
k.prototype.















render=function(l,m,n){'use strict';
this.value=l;

if(!m.length){
this.accessibilityElement&&
this.accessibilityElement.removeAttribute('aria-activedescendant');
this.reset(true);
return;}


var o={results:m,value:l};
this.inform('beforeRender',o);
m=o.results;
var p=n&&this.index!=-1?
this.index:
this.getDefaultIndex(m);

this.results=m;
c('DOM').setContent(this.content,this.buildResults(m));
this.items=this.getItems();



this.highlight(p,false);
this.inform('render',this.results);};
k.prototype.







getItems=function(){'use strict';
return c('DOM').scry(this.content,'li');};
k.prototype.













buildResults=function(l){'use strict';
var m,
n=null;
if(typeof this.renderer=='function'){
m=this.renderer;
n=this.renderer.className||'';}else{

m=b.TypeaheadRenderers[this.renderer];
n=this.renderer;}


m=m.bind(this);

var o=l.map(function(q,r){
var s=q.node||m(q,r);
s.setAttribute('role','option');
return s;}),


p=
c('DOM').create
('ul',

{className:n,
id:'typeahead_list_'+
(this.typeahead?
c('getOrCreateDOMID')(this.typeahead):c('getOrCreateDOMID')(this.element))},

o);

p.setAttribute('role','listbox');
return p;};
k.prototype.




showLoadingIndicator=function(){'use strict';
var l=
c('createIxElement')(h("85428")),

m=c('DOM').create
('li',
{className:'typeaheadViewInternalLoading'},
l),


n=c('DOM').create('ul',{role:'listbox'},m);

c('DOM').setContent(this.content,n);};
k.prototype.






getDefaultIndex=function(){'use strict';
var l=this.autoSelect&&!this.disableAutoSelect;

return this.index<0&&!l?-1:0;};
k.prototype.




next=function(){'use strict';
this.highlight(this.index+1);
this.inform('next',this.selected);};
k.prototype.




prev=function(){'use strict';
this.highlight(this.index-1);
this.inform('prev',this.selected);};
k.prototype.





getItemText=function(l){'use strict';
var m='';
if(l){
m=l.getAttribute('aria-label');
if(!m){





m=c('getElementText')(l);
l.setAttribute('aria-label',m);}}


return m;};
k.prototype.









setIsViewingSelectedItems=function(l){'use strict';
this.viewingSelected=l;
return this;};
k.prototype.




getIsViewingSelectedItems=function(){'use strict';
return !!this.viewingSelected;};
k.prototype.












highlight=function(l,m){'use strict';
if(this.selected){
c('CSS').removeClass(this.selected,'selected');
this.selected.setAttribute('aria-selected','false');}

if(l>this.items.length-1){l=-1;}else
if(l<-1)l=this.items.length-1;
if(l>=0&&l<this.items.length){
this.selected=this.items[l];
c('CSS').addClass(this.selected,'selected');
this.selected.setAttribute('aria-selected','true');
if(this.accessibilityElement)
setTimeout(function(){
this.accessibilityElement.setAttribute
('aria-activedescendant',
c('getOrCreateDOMID')(this.selected));}.

bind(this),0);}else 


this.accessibilityElement&&
this.accessibilityElement.removeAttribute('aria-activedescendant');

this.index=l;
this.disableAutoSelect=l==-1;

if(m!==false)
this.inform
('highlight',
{index:l,selected:this.results[l],element:this.selected});};


k.prototype.












select=function(l){'use strict';
if(this.headerIndex&&l)
return;

var m=this.index,
n=this.results[m],
o=this.element.getAttribute('id');

if(n){
var p=function(q){
this.inform('select',
{index:m,
clicked:!!l,
selected:q,
id:o,
query:this.value});

this.inform('afterSelect');}.
bind(this);

if(this.shouldValidateTypeaheadSelection(n)){
this.validateTypeaheadSelection(n,p);}else 

p(n);}};


k.prototype.

shouldValidateTypeaheadSelection=function(l){'use strict';
return false;};
k.prototype.

validateTypeaheadSelection=function(l,m){'use strict';};


Object.assign(k.prototype,


{events:
['highlight',
'render',
'reset',
'select',
'beforeRender',
'next',
'prev'],







renderer:c('BasicTypeaheadRenderer'),






autoSelect:false,

ignoreMouseover:false});


f.exports=k;}),null);

/** js/search/typeahead/SearchBootstrapCache.js */






__d('SearchBootstrapCache',['AsyncRequest','AsyncResponse','CacheStorage','SearchBootstrapCacheConstants'],(function a(b,c,d,e,f,g){






var h=1,

i=
{get:function j
(k,
l,
m,
n,
o){

var p=this.getKey(k,l,m),

q=this.getStorage(),
r=q.get(p),


s=c('SearchBootstrapCacheConstants')[l.type]||3600000;



if(r==null||
Date.now()-r.timestamp>s){
o(m,k,l);}else{

var t=new (c('AsyncRequest'))();
t.getData=function(){
return r.requestData;};

var u=new (c('AsyncResponse'))(t,r.payload);
n(u,l);}},



set:function j(k,l,m){
var n=k.getRequest().getData();
this.getStorage().set
(this.getKey(n,l,m),

{timestamp:Date.now(),
payload:k.payload,
requestData:n});},




getKey:function j
(k,
l,
m){

return JSON.stringify
({filter:k.filter,
context:k.context,
viewer:k.viewer,
lazy:k.lazy,
token:k.token,
type:l.type,
bootstrapEndpoint:m});},



getStorage:function j(){
return new (c('CacheStorage'))('localstorage','_SearchBootstrapCache_'+h);}};



f.exports=i;}),null);

/** js/search/typeahead/SearchSingleState.js */




__d('SearchSingleState',['fbt'],(function a(b,c,d,e,f,g,h){



function i(k,l,m,n){

return {classNames:'grammar',
groupIndex:0,
indexInGroup:k,
path:l,
text:m,
type:'grammar',
uid:n};}



var j=

{getSuggestions:function k(l,m,n){
if(n==='ent:user'){
return this.getSuggestionsForUser(l,m);}else
if(n==='ent:page'){
return this.getSuggestionsForPage(l,m);}else
if(n==='ent:app'){
return this.getSuggestionsForApp(l,m);}else
if(n==='ent:group')
return this.getSuggestionsForGroup(l,m);},



getSuggestionsForUser:function k(l,m){

return [i
(0,
'/search/'+l+'/photos-of',h._(["photos of {full name}","97aaa964aec9a69153355c2d415b2fab"],

[h.param('full name',m)]),



'photos_of_user'),

i
(1,
'/search/'+l+'/friends',h._(["friends of {full name}","7249da7dcbedda0bb7f14bf79c2fa037"],

[h.param('full name',m)]),



'friends_of_user'),

i
(2,
'/search/'+l+'/pages-liked',h._(["favorite pages of {full name}","60c990314c7676d0724c4db500ef14d6"],

[h.param('full name',m)]),



'pages_liked_user'),

i
(3,
'/search/str/'+m+'/users-named',h._(["find all people named \"{full name}\"","439221a8ee8f5f1451e9570345bce05a"],

[h.param('full name',m)]),



'people_named_text')];},




getSuggestionsForPage:function k(l,m){

return [i
(0,
'/search/'+l+'/photos-of',h._(["photos of {name of page}","3f50092b310c87a06279405248e01f0e"],

[h.param('name of page',m)]),



'photos_of_page'),

i
(1,
'/search/'+l+'/likers',h._(["people who like {name of page}","95a73591aa16a57fd06edc1c5b4553f3"],

[h.param('name of page',m)]),



'page_likers'),

i
(2,
'/search/str/'+m+'/pages-named',h._(["find all pages named \"{name of page}\"","64a4735edd98d86e3e55cfe9c06a8044"],

[h.param('name of page',m)]),



'pages_named_text')];},




getSuggestionsForGroup:function k(l,m){

return [i
(0,
'/search/'+l+'/members',h._(["{name of group} members","2c7fdb92e934def11b5b2c35e8264717"],

[h.param('name of group',m)]),



'members_of_group'),

i
(1,
'/search/'+l+'/photos-in',h._(["photos in {name of groups}","06d8d21b0263aa45c0e21fb64bae6ae5"],

[h.param('name of groups',m)]),



'photos_in_group'),

i
(2,
'/search/'+l+'/creators',h._(["{name of group} creators","b27fc7342bf7a952d3174316c4992dc9"],

[h.param('name of group',m)]),



'creators_of_group'),

i
(3,
'/search/'+l+'/admins',h._(["{name of group} administrators","935ece0b08e330491981bc0428afbdea"],

[h.param('name of group',m)]),



'admins_of_group')];},




getSuggestionsForApp:function k(l,m){

return [i
(0,
'/search/'+l+'/apps-similar-to',h._(["apps similar to {name of app}","4339f43da8d41ba5e05cbdef732041c5"],

[h.param('name of app',m)]),



'similar_apps'),

i
(1,
'/search/'+l+'/app-users',h._(["people who use {name of app}","995b5557bea3c7ec62d24700d03be0cb"],

[h.param('name of app',m)]),



'app_users'),

i
(2,
'/search/str/'+m+'/pages-named',h._(["find all apps named \"{name of page}\"","a48f8af4453a6b5e2c49728bf9f5700c"],

[h.param('name of page',m)]),



'apps_named_text')];}};






f.exports=j;}),null);

/** js/search/typeahead/SearchDataSource.js */





__d('SearchDataSource',['errorCode','Arbiter','AsyncResponse','CSRFGuard','CurrentUserInitialData','DataSource','Event','FacebarJSConstants','HashtagSearchResultUtils','Map','PageTransitionsRegistrar','SearchBootstrapCache','SearchRegion','SearchSingleState','UnicodeCJK','XHRRequest','createArrayFromMixed','debounce'],(function a(b,c,d,e,f,g,h){var i,j,




















k=100,
l='/typeahead/search/facebar/nullstate/';i=babelHelpers.inherits

(m,c('DataSource'));j=i&&i.prototype;
function m(n){'use strict';
n.headerflags=new (c('Map'))();
if(c('SearchRegion').sgp_fork_ss_at_proxygen||
c('SearchRegion').sgp_fork_gs_at_proxygen)
n.headerflags.set('X-FB-ForkingType','edge-sgp-search');

j.constructor.call(this,n);
this._token=n.token||'';
this._lazyonload=n.lazyonload===false?false:true;
this._extraTypes=n.extraTypes;
this._buckets=n.buckets;
this._noMultiFetch=n.noMultiFetch||false;
this._nullStateConfig=n.nullStateConfig||{};
var o=n.maxResults||8;
this._numResults={min:3,max:o};
this.recordingRoute=n.recordingRoute||'non_banzai';
this._enabledHashtag=n.enabledHashtag||false;

this.logBackendQueriesWindow=n.logBackendQueriesWindow||25;

this._genTime=n.genTime;
this._bootstrapError=false;
this._hasKeywordBootstrap=n.hasKeywordBootstrap||false;
this._addJoinedTermsMatching=n.addJoinedTermsMatching||false;
this._useBootstrapCache=n.useBootstrapCache||false;
this._useBrowserCache=n.useBrowserCache||false;

this.cacheUnicodeMatch.setConfigs
({prefix_hangul_conjoining_jamo:true,
prefix_kana_drop_trailing_latin:n.cjkDropLatinInCjTokens,
prefix_kana_hiragana_to_katakana:n.cjkUiCacheHiraganaToKatakana,
search_i18n_prefix_arabic_normalization:n.arabicNormalization});

this.backendUnicodeMatch.setConfigs
({prefix_kana_drop_trailing_latin:n.cjkDropLatinInCjTokens});}

m.prototype.

init=function(){'use strict';
j.init.call(this);

this._leanPayload=null;
this._bootstrapRequestsPending=0;
this._criticalOnly=true;
this._updateMaxResults();

var n=c('debounce')
(this._updateMaxResults,
k,
this,
true);


c('Event').listen(window,'resize',n);

if(this._nullStateConfig.prefetchNullState)

this.fetchNullState('');

if(this._nullStateConfig.singleState)
c('Arbiter').subscribe
('page_transition',
this.handlePageTransition.bind(this));



if(this._nullStateConfig.prefetchNullState||
this._nullStateConfig.singleState)
c('Arbiter').subscribe
('search/updateNullState',
this.updateNullState.bind(this));


if(this._nullStateConfig.recent)
c('Arbiter').subscribe
('search/refreshRecentSearchesNullstate',
this.refreshRecentSearches.bind(this));};


m.prototype.

refreshRecentSearches=function(){'use strict';
this.nullStateData=null;};
m.prototype.

handlePageTransition=function(){'use strict';
this.nullStateParams={};};
m.prototype.

updateNullState=function(event,n){'use strict';
this.nullStateParams=n;
this.fetchNullState();};
m.prototype.

markResultsAsNullState=function(n){'use strict';
if(n)
for(var o=n,p=Array.isArray(o),q=0,o=p?o:o[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var r;if(p){if(q>=o.length)break;r=o[q++];}else{q=o.next();if(q.done)break;r=q.value;}var s=r;
s.isNullState=true;}};


m.prototype.

markResultsAsSingleState=function(n){'use strict';
if(n)
for(var o=n,p=Array.isArray(o),q=0,o=p?o:o[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var r;if(p){if(q>=o.length)break;r=o[q++];}else{q=o.next();if(q.done)break;r=q.value;}var s=r;
s.isSingleState=true;}};


m.prototype.

fetchNullState=function(n){'use strict';
this.lastNullOrSingleStateFetchStartTime=Date.now();
if(!this._nullStateConfig.hasNullState)
return;

var o=null;
if(this.nullStateParams&&this.nullStateParams.uid){
this.nullStateParams.query=n||'';
o=this._fetchDataForSingleState();
this.markResultsAsNullState(o);}else{

o=this._fetchDataForNullState();
this.markResultsAsSingleState(o);}

if(o)
this.inform('respond',
{value:this.nullStateParams?this.nullStateParams.query:'',
results:o,
isAsync:false,
nullState:true});};


m.prototype.

_fetchDataForSingleState=function(){'use strict';
if(this.nullStateDataWithProfile&&
this.nullStateParams.uid===this.nullStateDataWithProfile.profileID)
return this.nullStateDataWithProfile.data;


if(this.nullStateParams.type==='ent:app'||
this.nullStateParams.type==='ent:group'||
this.nullStateParams.type==='ent:page'){
this.fetch
(l,

{profile_id:this.nullStateParams.uid,
ent_type:this.nullStateParams.type},

{singleState:true});

this.nullStateDataWithProfile=
{profileID:this.nullStateParams.uid};

return;}


var n=c('SearchSingleState').getSuggestions
(this.nullStateParams.uid,
this.nullStateParams.text,
this.nullStateParams.type);


if(!n)
return this._fetchDataForNullState();

this.nullStateDataWithProfile=
{data:n,
profileID:this.nullStateParams.uid};

return n;};
m.prototype.

_shouldRefreshNullState=function(){'use strict';
if(!this._nullStateConfig.recent)
return false;

var n=window.location.href;
if(!n)
return false;


if(n.contains('allactivity')&&n.contains('log_filter=search'))
return true;

return false;};
m.prototype.

_fetchDataForNullState=function(){'use strict';
if(this.nullStateData&&!this._shouldRefreshNullState()){
this.markResultsAsNullState(this.nullStateData);
setTimeout(function(){
this.inform('respond',
{value:'',
results:this.nullStateData,
isAsync:true,
nullState:true});}.

bind(this),0);
return;}



if(!this.fetchingNullState){
this.fetchingNullState=true;
this.fetch
(l,
{value:""},
{nullState:true,value:''});}


return null;};
m.prototype.

dirty=function(){'use strict';
j.dirty.call(this);
this._bootstrapError=false;
this._fetchOnUseRequests=[];};
m.prototype.

asyncErrorHandler=function(n,o){'use strict';
if(o.nullState)
this.fetchingNullState=false;


if(o.bootstrap)
this._bootstrapError=true;


this.inform('fetchError',{response:n,fetch_context:o});};
m.prototype.





fetch=function(n,o,p){'use strict';
p=p||{};
p.fetch_start=Date.now();
var q=c('PageTransitionsRegistrar').getMostRecentURI().path;
o=babelHelpers['extends']({},o,{path:q});
j.fetch.call(this,n,o,p);};
m.prototype.

xhrFetchHandler=function(n,o,p){'use strict';
n=c('CSRFGuard').clean(n);
var q=JSON.parse(n);
return this.fetchHandler
(new (c('AsyncResponse'))(null,q.payload),
p,
o);};

m.prototype.








fetchHandler=function(n,o){var p=arguments.length<=2||arguments[2]===undefined?null:arguments[2];'use strict';
if(o.nullState){
this.fetchingNullState=false;
this.nullStateData=n.getPayload().entries;
this.markResultsAsNullState(this.nullStateData);
this.inform('respond',
{value:'',
results:this.nullStateData,
isAsync:true,
nullState:true});

return;}

if(o.singleState){
this.nullStateDataWithProfile.data=n.getPayload().entries;
this.markResultsAsSingleState(this.nullStateDataWithProfile.data);
this.inform('respond',
{results:this.nullStateDataWithProfile.data,
isAsync:true,
value:this.nullStateParams?this.nullStateParams.query:'',
nullState:true});

return;}

var q=n.getPayload(),
r=babelHelpers['extends']
({fetch_end:Date.now()},
o),


s=r.value?c('Arbiter').BEHAVIOR_EVENT:
c('Arbiter').BEHAVIOR_PERSISTENT;

this.inform('beginFetchHandler',{response:n});

if(o.bootstrap)

this._bootstrapError=false;




var t=p===null?
n.getRequest().uri.getPath():
p.getURI().getPath();
if(t===this.bootstrapEndpoint&&
this._useBootstrapCache)
c('SearchBootstrapCache').set
(n,
o,
this.bootstrapEndpoint);



if(o.type=='lean'){
this._leanPayload=q;
this._processLean();}else{

if(q.coeff2_ts)
r.coeff2_ts=q.coeff2_ts;


j.fetchHandler.call(this,n,o);

var u=p===null?
n.getRequest().getData():
p.getData();
if(o.bootstrap&&
!u.no_cache)
r.browserCacheHit=q.timestamp<this._genTime;


if(o.bootstrap&&!q.no_data&&
this._bootstrapRequestsPending>0){


o.bootstrap=false;
--this._bootstrapRequestsPending;
!this._bootstrapRequestsPending&&this._bootstrapPostProcess();}


if(q.no_data||q.stale||q.token!==this._token){
var v=babelHelpers['extends']({},
u);




if(v.lazy){
delete v.lazy;
v.token=this._token;
this._fetchOnUse(v,o);}}}




this.inform('endpointStats',{info:r,response:n},s);
if(o&&!!o.value)
this.inform('completeFetch',{response:n,stats:r});


var w=this.getResponseHeaderValue('X-FB-ForkingPoolID');
if(w.length>0)
this.inform('logProxygenForkPoolId',
{field:'fork_pool_id',
value:w});};


m.prototype.





respond=function(n,o,p){'use strict';
this.inform('respondValidUids',o);


this.inform('reorderResults',o);

var q=this.buildData(o,n);
q.forEach(function(r,s){
r.origIndex=s;
r.fromCache=!p;});


this.inform('respond',
{value:n,
results:q,
isAsync:!!p});

return q;};
m.prototype.

buildData=function(n,o){'use strict';
if(!n||n.length===0)
return [];


var p=n.map(this.getEntry,this);
p.length=Math.min(p.length,this._maxResults);
return p;};
m.prototype.

fetchLean=function(){'use strict';
this._fetchLean();};
m.prototype.








_isQueryTooShort=function(n){'use strict';
return n.length<this._minQueryLength&&!this._performShortQuery&&
!c('UnicodeCJK').hasIdeoOrSyll(n);};
m.prototype.

shouldFetchMoreResults=function(n){'use strict';
return n.length<this._maxResults;};
m.prototype.






_bootstrapPostProcess=function(){'use strict';
var n=0;
for(var o in this._data)
if(Object.prototype.hasOwnProperty.call(this._data,o))
n++;


this.inform
('bootstrapped',
{time:Date.now(),size:n},
c('Arbiter').BEHAVIOR_PERSISTENT);

this._processLean();};
m.prototype.





_processLean=function(){'use strict';
if(this._leanPayload){
var n,
o=this._leanPayload.entries;
for(var p in o){
n=this.getEntry(p);
if(n)
n.index=o[p];}


this.setExclusions(this._leanPayload.blocked);
this._leanPayload=null;}};

m.prototype.


















_updateMaxResults=function(){'use strict';
var n=window.innerHeight||document.documentElement.clientHeight;
this.setMaxResults
(Math.max(this._numResults.min,
Math.min(this._numResults.max,
Math.ceil(2+(n-370)/56))));};
m.prototype.




_bootstrapFetch=function(n,o){'use strict';
var p=babelHelpers['extends']({},o,this.bootstrapData);
if(this._criticalOnly&&this._lazyonload)
p.lazy=1;

var q={bootstrap:true,type:n};
this._fetchBootstrapMaybeCache(p,q);
++this._bootstrapRequestsPending;};
m.prototype.

_fetchBootstrapMaybeCache=function(n,o){var p,q=this;'use strict';
if(this._useBootstrapCache){
c('SearchBootstrapCache').get
(n,
o,
this.bootstrapEndpoint,
this.fetchHandler.bind(this),
this.fetch.bind(this));}else

if(this._useBrowserCache){(function(){

var r=new (c('XHRRequest'))(q.bootstrapEndpoint).
setData(babelHelpers['extends']({},n,{__user:c('CurrentUserInitialData').USER_ID,__a:1})).
setMethod('GET').
setResponseHandler
(function(s){return this.xhrFetchHandler(s,r,o||{});}.bind(q)).

setErrorHandler
(function(s){return this.asyncErrorHandler(s,o);}.bind(q));

q.inform
('beforeFetch',
{request:r,fetch_context:o});

r.send();})();}else 

this.fetch(this.bootstrapEndpoint,n,o);};

m.prototype.




_fetchOnUse=function(n,o){'use strict';


for(var p in this.bootstrapData)
!Object.prototype.hasOwnProperty.call(n,p)&&(n[p]=this.bootstrapData[p]);

if(this._criticalOnly){
this._fetchOnUseRequests.push({args:n,ctx:o});}else 

this._fetchBootstrapMaybeCache(n,o);};

m.prototype.







_fetchLean=function(){'use strict';
var n={no_cache:1};
n.options=c('createArrayFromMixed')(n.options);
n.options.push('lean');

this._fetchOnUse(n,{type:'lean'});};
m.prototype.




bootstrap=function(n){'use strict';


if(!n){
this._criticalOnly=false;
this._flushFetchOnUseRequests();}


if(this._bootstrapped)return;

var o={filter:['event']};
this._fetchOnUse(o,{type:'event'});

var p=['app','page','group','friendlist'];
p=p.concat(this._extraTypes||[]);

var q=[];
if(this._hasKeywordBootstrap)
q.push(c('FacebarJSConstants').keywordType);


if(this._noMultiFetch){
p.push('user');
p=p.concat(q);
this._bootstrapFetch('user',{filter:p});}else{

this._bootstrapFetch('other',{filter:p});

if(this._buckets){
for(var r=0;r<this._buckets.length;++r){
var s={filter:['user'],buckets:this._buckets[r]};
this._bootstrapFetch('user',s);}}else 


this._bootstrapFetch('user',{filter:['user']});


if(q.length>0)
this._bootstrapFetch('keyword',{filter:q});}


this._fetchLean();
this._bootstrapped=true;};
m.prototype.

getBootstrapError=function(){'use strict';
return this._bootstrapError;};
m.prototype.

_flushFetchOnUseRequests=function(){'use strict';
var n=this._fetchOnUseRequests.length;
for(var o=0;o<n;++o){
var p=this._fetchOnUseRequests[o];
this._fetchBootstrapMaybeCache(p.args,p.ctx);}

if(n>0)
this.inform('extra_bootstrap',{time:Date.now()},
c('Arbiter').BEHAVIOR_PERSISTENT);

this._fetchOnUseRequests=[];};
m.prototype.

onLoad=function(n,o){'use strict';
this.inform('onload',{time:Date.now()},c('Arbiter').BEHAVIOR_PERSISTENT);
if(n)
setTimeout(this.bootstrap.bind(this,o),0);};

m.prototype.





mergeUids=function(n,o,p,q){'use strict';
var r=this.getDynamicHashtagResult(q);
if(q&&r&&o.indexOf(r)<=0)
o.unshift(r);


var s=p[0]?this.getEntry(p[0]):null,
t=o[0]?this.getEntry(o[0]):null,

u=s&&s.replace_results?s:null;
u=!u&&t&&t.replace_results?
t:u;

var v=j.mergeUids.call(this,n,o,p,q);

if(u){
this.inform('backend_topreplace',{});
return this.deduplicateByKey([u.uid].concat(v));}


return v;};
m.prototype.








getTextToIndexFromFields=function(n,o){'use strict';
var p=[],
q=n.tokenVersion==="v2";
for(var r=0;r<o.length;++r){


if(q&&
(o[r]==="text"||o[r]==="alias"))
continue;

var s=n[o[r]];
if(s){
s=s.join?s.join(' '):s;
p.push(s);
if(o[r]=='text'&&this._addJoinedTermsMatching){
s=s.toLowerCase();
s=s.replace(/ /g,'');
p.push(s);}}}



return p.join(' ');};
m.prototype.





getDynamicHashtagResult=function(n){'use strict';
if(!n||!this._enabledHashtag)
return;

var o=c('HashtagSearchResultUtils').getHashtagFromQuery(n);
if(!o)
return;


var p='hashtag:'+o,
q=this.getEntry(p);
if(!q)

this.processEntries
([c('HashtagSearchResultUtils').makeTypeaheadResult(o)],
n);


return p;};
m.prototype.




tokenizeCache=function(n,o){'use strict';
n=this.cacheUnicodeMatch.prefixMatchPrepare(n);
var p=this._tokenize(n,o),
q=p.tokens;
if(q.length>0&&p.value.startsWith('@'))
q[0]='@'+q[0];

return p;};



f.exports=m;}),null);

/** js/search/typeahead/SearchTypeaheadRecorder.js */





__d('SearchTypeaheadRecorder',['AsyncRequest','Banzai','BanzaiNectar','BanzaiScuba','CurrentUser','Event','FacebarGlobalOptions','Keys','TokenizeUtil','Vector','clickRefAction','mapObject','ge','throttle','whitelistObjectKeys'],(function a(b,c,d,e,f,g){



















var h=
{WAITING:'WAITING',
SUCCESS:'SUCCESS',
NO_RESULTS:'NO_RESULTS',
ERROR:'ERROR'};










function i(k){'use strict';
this.init(k);
this.initEvents(k);}
i.prototype.

init=function(k){'use strict';
this.core=k.getCore();
this.data=k.getData();
this.view=k.getView();
this.element=this.core.getElement();
this.initTime=Date.now();
this._onloadTime=0;
this._extraRecorder=[];
this.performanceTimings={};
this.allFromSingleState=false;
this.allFromNullState=false;

var l=c('ge')('search_first_focus');
this.initStartTime=l&&l.value;


this.bootstrapStats={bootstrapped:0};
this.type="legacy_search";
this._reset();};
i.prototype.




_reset=function(){'use strict';

this.stats={};


this.avgStats={};


this.appendStats={};


this._backspacing=false;


this.backendQueries=[];


this.backendQueriesStatus={};



this._topreplace=false;

this._inflightRequests={};


var k=Math.random().toString();
this.data.setQueryData({sid:k});
this.view.setSid(k);
this.recordStat('sid',k);
this.recordStat('keypressed',0);};
i.prototype.

initEvents=function(){'use strict';
this.core.subscribe('focus',function(event){
if(!this.stats.session_start_time){
this.recordStat('session_start_time',Date.now());


var k=new Date(),
l=k.getTimezoneOffset(),
m=Date.now()-l*60*1000;
this.recordStat('session_start_time_user_timezone',m);
this._lastRenderTime=0;
this._firstKeypressTime=null;}}.

bind(this));

this.core.subscribe('blur',function(event){
var k=Date.now();

for(var l in this._inflightRequests){
var m=this._inflightRequests[l],
n=k-m;
this.recordAvgStat('search_endpoint_ms_from_js',n);}


this.recordStat('session_end_time',k);



this.submit();}.
bind(this));

this.view.subscribe('select',function(k,l){
this.recordStat
('time_between_select_and_last_render',
Date.now()-this._lastRenderTime);

if(this._firstKeypressTime!=null)
this.recordStat
('keypress_to_select_time',
Date.now()-this._firstKeypressTime);


this.recordSelectInfo(l);}.
bind(this));

this.view.subscribe('render',function(k,l){
this._lastRenderTime=Date.now();
this.recordRender(l);}.
bind(this));

this.data.subscribe
('logPerformanceTiming',
function(k,l){
this.performanceTimings[l.field]=l.value;}.
bind(this));


this.data.subscribe
('logProxygenForkPoolId',
function(k,l){
this.recordStat(l.field,l.value);}.
bind(this));


this.data.subscribe('activity',function(k,l){
this.recordStat('pending_request',l.activity);}.
bind(this));

this.data.subscribe('respondValidUids',function(k,l){
this.validUids=l.slice(0);}.
bind(this));

this.data.subscribe('beforeQuery',function(k,l){
if(!l.value){
this.query='';
this.results=[];
this.data.lastNullOrSingleStateFetchStartTime=Date.now();
return;}

if(!this.stats.first_query_time)
this.recordStat('first_query_time',Date.now());

this.query=l.value;
if(!this.queryStartTime)
this.queryStartTime=[];

this.queryStartTime[this.query]=Date.now();
this.recordCountStat('num_queries');}.
bind(this));

this.data.subscribe('queryEndpoint',function(k,l){
this.recordCountStat('num_search_ajax_requests');
this.recordAvgStat('endpoint_query_length',l.value.length);

this._inflightRequests[l.value]=Date.now();}.
bind(this));

this.data.subscribe('onload',function(k,l){
this._onloadTime=l.time;}.
bind(this));

this.data.subscribe('bootstrapped',function(k,l){
this.bootstrapStats.endTime=l.time;
this.bootstrapStats.bootstrapped=1;}.
bind(this));

this.core.subscribe('recordFunction',function(k,l){
this._extraRecorder.push(l);}.
bind(this));

this.data.subscribe('endpointStats',function(k,l){var m=l.info,
n=m.fetch_end-m.fetch_start;
if(m.value){
this.recordAvgStat('search_endpoint_ms_from_js',n);}else 

this.bootstrapStats[m.type]=n;

if(m.coeff2_ts)
this.bootstrapStats.coeff2_ts=m.coeff2_ts;

if(typeof m.browserCacheHit!='undefined')
this.recordCountStat(m.browserCacheHit?'bootstrap_cachehits':
'bootstrap_cachemisses');


if(this._inflightRequests[m.value])
delete this._inflightRequests[m.value];}.

bind(this));

this.data.subscribe('fetchComplete',function(k,l){var m=l.entries,n=l.value;
if(n&&this.backendQueriesStatus[n]){
this._addDurationForBackendQuery(this.backendQueriesStatus[n]);
this.backendQueriesStatus[n].status=m&&m.length>0?
h.SUCCESS:
h.NO_RESULTS;}}.

bind(this));

this.data.subscribe('fetchError',function(k,l){var m=l.fetch_context,
n=m.value;
if(m.bootstrap||!n)
return;


if(this.backendQueriesStatus[n]){
this.backendQueriesStatus[n].status=h.ERROR;
this._addDurationForBackendQuery(this.backendQueriesStatus[n]);}}.

bind(this));

this.data.subscribe('query',function(k,l){
this.recordAvgStat('num_results_from_cache',l.results.length);}.
bind(this));

this.data.subscribe('backend_topreplace',function(k,l){
if(false===this._topreplace){
this.recordStat("backend_topreplace",1);
this._topreplace=true;}}.

bind(this));

this.data.subscribe('completeFetch',function(k,l){
if(this.core.scubaInfo){
var m=l.response,
n=
{recv:l.stats.fetch_end-l.stats.fetch_start,
render:Date.now()-l.stats.fetch_start,
payload_size:JSON.stringify(m).length};

if(!m.payload.entities)
m.payload.entities=this.buildResults();

this.logToScuba
(m,n,this.core.scubaInfo,this.query,this.type);}}.

bind(this));


this.data.subscribe('completeCacheFetch',c('throttle')(function(k,l){
if(this.core.scubaInfo)
this.logToScuba
({},
{},
this.core.scubaInfo,
this.query,
this.type);}.


bind(this),500));

c('Event').listen(this.element,'keydown',function(event){


this.recordStat('keypressed',1);
this.recordCountStat('count_keys_pressed');
if(c('Event').getKeyCode(event)==c('Keys').BACKSPACE){
if(!this._backspacing&&this.query){
this._backspacing=true;
this.recordAppendStat('before_backspace_queries',this.query);}}else 


this._backspacing=false;

if(this._firstKeypressTime==null)
this._firstKeypressTime=Date.now();}.

bind(this));


this.data.subscribe('beforeFetch',function(k,l){
var m=l.request.data?l.request.data.value:null;
if(!m)
return;

this.backendQueries.push(m);
this.backendQueriesStatus[m]=
{status:h.WAITING,
start_time:Date.now()};}.

bind(this));};
i.prototype.

recordStat=function(k,l){'use strict';
this.stats[k]=l;};
i.prototype.

recordCountStat=function(k){'use strict';
var l=this.stats[k];
this.stats[k]=l?l+1:1;};
i.prototype.

recordAvgStat=function(k,l){'use strict';
if(this.avgStats[k]){
this.avgStats[k][0]+=l;
++this.avgStats[k][1];}else 

this.avgStats[k]=[l,1];};

i.prototype.

recordAppendStat=function(k,l){'use strict';
if(!Object.prototype.hasOwnProperty.call(this.appendStats,k))
this.appendStats[k]=[];

this.appendStats[k].push(l);};
i.prototype.

recordRender=function(k){'use strict';
this.results=k.filter(function(v){
return v.uid!='search'&&
v.type!='disabled_result'&&
v.type!='header';}).
map(function(v){
return babelHelpers['extends']({},v);});


var l=null;
if(this.queryStartTime)
l=this.queryStartTime[this.query];

var m=
this.results.every(function(v){return v.fromCache||v.isSeeMore;}),
n=
this.results.every
(function(v){return v.isFromGSEF||
v.fromCache||
v.isSeeMore||
v.isJSBootstrapMatch;})&&
this.results.some(function(v){return v.isFromGSEF;}),
o=
this.results.every
(function(v){return v.isGloballyCachedKeyword||
v.fromCache||
v.isSeeMore||
v.isJSBootstrapMatch;})&&
this.results.some(function(v){return v.isGloballyCachedKeyword;}),
p=
this.results.every(function(v){return v.isNullState;}),
q=
this.results.every(function(v){return v.isSingleState;}),
r=
this.results.every
(function(v){return v.exactMatchKeyword||v.isSeeMore;});


this.allFromSingleState=q;
this.allFromNullState=p;

if(this.results.length&&
this.data.lastNullOrSingleStateFetchStartTime&&
p){

this.recordStat
('time_render_null_state',
Date.now()-this.data.lastNullOrSingleStateFetchStartTime);

this.data.lastNullOrSingleStateFetchStartTime=null;}else
if(this.data.lastNullOrSingleStateFetchStartTime&&
this.results.length&&
q){

this.recordStat
('time_render_single_state',
Date.now()-this.data.lastNullOrSingleStateFetchStartTime);}else

if(l){
var s=Date.now()-l;
if(r){
this.recordAppendStat
('times_render_gs_echo',
s);}else 


this.recordAppendStat
(m?'times_render_local':'times_render_remote',
s);


if(!m&&n)
this.recordAppendStat
('time_render_gs_early_fetch',
s);


if(!m&&o)
this.recordAppendStat
('time_render_globally_cached_keywords',
s);


if(!m&&
!n&&
!o)
this.recordAppendStat
('time_render_remote_main_call',
s);}




this.data.lastNullOrSingleStateFetchStartTime=null;
var t=c('Vector').getViewportDimensions();
this.recordStat('window_size_width',t.x);
this.recordStat('window_size_height',t.y);
if(this.results.length>0&&!this.stats.first_result_time)
this.recordStat('first_result_time',Date.now());


var u='typed';

if(this.allFromNullState){
u='nullstate';}else
if(this.allFromSingleState)
u='singlestate';


this.recordStat('last_state',u);};
i.prototype.

recordSelectInfo=function(k){'use strict';
var l=k.selected,

m=k.index;
if(l.groupIndex!==undefined)
m=k.index-l.groupIndex-1;


var n={href:l.path},
o=l.dataGT?{gt:JSON.parse(l.dataGT)}:{};

c('clickRefAction')('click',n,null,null,o);

if(l.uid=='search'||l.uid=='people_search'){
this.recordStat
('selected_position',
this.results!=null?this.results.length:0);

this.recordStat('selected_search',1);}else
if(l.uid=='invite'){
this.recordStat('selected_invite',1);}else{

var p=
l.log_type||l.rankType||
l.render_type||l.type,
q=
p=='friend'?'user':p;

this.recordStat('selected_'+q,1);
this.recordStat('selected_position',m);
this.recordStat('selected_type',p);
this.recordStat('selected_name_length',l.text.length);
this.recordStat('selected_id',l.uid);
this.recordStat('selected_degree',l.bootstrapped?1:2);
this.recordStat('selected_recent_search',l.recent_search);
var r=
c('TokenizeUtil').parse(this.data.getTextToIndex(l)).tokens,
s=j(r,this.query);
if(s)
this.recordStat('matched_terms',s);

this.recordStat('selected_text',l.text);}


var t={};
this._extraRecorder.forEach(function(u){
u(k,this.results,t);}.
bind(this));

this.recordStat('extra_select_info',JSON.stringify(t));

this.recordStat('selected_with_mouse',k.clicked?1:0);};
i.prototype.

_addDurationForBackendQuery=function(k){'use strict';
if(k.start_time){
k.duration=Date.now()-k.start_time;
delete k.start_time;}};

i.prototype.




_dataToSubmit=function(){'use strict';
this.recordStat('candidate_results',this.buildResults());
this.recordStat('query',this.query);
this.recordStat('init_time',this.initTime);
if(this.initStartTime){

this.recordStat('init_start_time',this.initStartTime);
this.recordStat('onload_time',this._onloadTime);
this.initStartTime=0;}

this.recordStat('bootstrapped',this.bootstrapStats.bootstrapped);
if(this.bootstrapStats.endTime){
this.recordStat('bootstrapped_time',this.bootstrapStats.endTime);
this.recordStat('user_bootstrap_ms',this.bootstrapStats.user);
this.recordStat('other_bootstrap_ms',this.bootstrapStats.other);
this.bootstrapStats.endTime=0;}


var k=this.data.getBootstrapError();
if(k)
this.recordStat('bootstrap_error',1);


this.recordStat('coeff2_ts',this.bootstrapStats.coeff2_ts);
this.recordStat('max_results',this.data._maxResults);
if(this.backendQueries.length>0){
if(this.backendQueries.length>this.data.logBackendQueriesWindow)
this.backendQueries=this.backendQueries.slice
(this.backendQueries.length-this.data.logBackendQueriesWindow);

this.recordStat('backend_queries',this.backendQueries);


var l=
c('whitelistObjectKeys')(this.backendQueriesStatus,this.backendQueries);
c('mapObject')(l,this._addDurationForBackendQuery,this);
this.recordStat('backend_queries_status',l);}


if(c('FacebarGlobalOptions').taSessionLoggingSample){
var m=[];
this.results.forEach(function(r){
m.push
([r.text||'',
r.category||'',
r.subtext||'']);});


this.recordStat('raw_suggestions_text',m);}


var n=this.stats;
for(var o in this.avgStats){
var p=this.avgStats[o];
n[o]=p[0]/p[1];}


for(var q in this.appendStats)
n[q]=JSON.stringify(this.appendStats[q]);

return n;};
i.prototype.




buildResults=function(){'use strict';
var k=(this.results||[]).map(function(l,m){
var n=c('TokenizeUtil').parse(this.data.getTextToIndex(l)).tokens,
o=l.rankType||l.render_type||l.type,
p=l.log_type,
q=l.bootstrapped?1:0,
r=l.s_token||'',
s=typeof l.index=='undefined'?100:l.index,


t=j(n,this.query)||this.query,

u=












l.index_rank,v=l.match_type,w=l.l_type,x=l.vertical_type,y=l.prefix_match,z=l.prefix_length,aa=l.text,ba=l.category,ca=l.subtext,da=l.fromCache,ea=l.isNullState,fa=l.isSingleState,ga=l.logInfo;

if(typeof l.groupIndex=='number')
return [l.groupIndex,l.indexInGroup,l.uid,
o,q,r,
t,u,v,y,
z,l.origIndex,w,x,
aa,ba,ca,s,da,ea,
fa,ga,p];

return [0,m,l.uid,o,q,r,
t,u,v,y,
z,l.origIndex,w,x,
aa,ba,ca,s,da,ea,
fa,ga,p];}.
bind(this));
return JSON.stringify(k);};
i.prototype.

submit=function(){'use strict';
var k=this._dataToSubmit();
switch(this.data.recordingRoute){
case 'banzai_vital':
c('Banzai').post(this._banzaiRoute,k,{delay:0,retry:true});
break;

default:this.submitThroughAsyncRequest(k);}

this._reset();};
i.prototype.

addLatencyToSample=function(k,l,m,n){'use strict';
k.addInteger(n+'query_start',m.queryStart);
k.addInteger(n+'query_end',m.queryEnd);
k.addInteger(n+'keypress_query_end',
m.keyPressToQueryEnd);
k.addInteger(n+'render',m.render);
k.addInteger(n+'keypress_render',
m.keyPressToRender);
l[n+'query_start']=m.queryStart;
l[n+'query_end']=m.queryEnd;
l[n+'keypress_query_end']=m.keyPressToQueryEnd;
l[n+'render']=m.render;
l[n+'keypress_render']=m.keyPressToRender;};
i.prototype.

logToScuba=function(k,l,m,n,o){'use strict';
var p={},
q=new (c('BanzaiScuba'))
('search_facebar_js',
null,

{addBrowserFields:true,
addPredictedGeographyFields:true,
addUser:true,
addSearchVersion:true,
addGatekeepers:
{facebarGKs:true}});



q.addInteger('sample_rate',m.sample_rate);
p.sample_rate=m.sample_rate;
q.addNormal('site',m.site);
p.site=m.site;
q.addDenorm('query',n);
p.query=n;
var r=k.payload||{};
if(r.entities){
q.addInteger('num_entities',r.entities.length);
p.num_entities=r.entities.length;}

Object.keys(this.performanceTimings).forEach(function(t){
q.addInteger
(t,
this.performanceTimings[t]);

p[t]=this.performanceTimings[t];}.
bind(this),this);

if(r.results||r.entries){
var s=(r.results||r.entries).length;
q.addInteger('num_results',s);
p.num_results=s;}

if(r.gzipped_payload_size!==undefined){
q.addInteger('gzipped_payload_size',r.gzipped_payload_size);
p.gzipped_payload_size=r.gzipped_payload_size;}

if(l.recv&&l.render>l.recv){
q.addInteger('time_render',l.render-l.recv);
p.time_render=l.render-l.recv;
q.addInteger('time_js_async',l.recv);
p.time_js_async=l.recv;}

if(l.payload_size){
q.addInteger('payload_size',l.payload_size);
p.payload_size=l.payload_size;}

if(this.stats.time_render_null_state&&(!n||n.length===0)){
q.addInteger
('time_render_null_state',
this.stats.time_render_null_state);

p.time_render_null_state=this.stats.time_render_null_state;}

q.addInteger('query_id',k.queryId);
p.query_id=k.queryId;
q.addDenorm('user_id',c('CurrentUser').getID());
p.user_id=c('CurrentUser').getID();
q.addDenorm('session_id',this.stats.sid);
p.session_id=this.stats.sid;
q.addNormal('typeahead_type',o);
p.typeahead_type=o;
if(l.remoteQueryLatencies){
this.addLatencyToSample
(q,
p,
l.remoteQueryLatencies,
'remote_');

q.addInteger('remote_keypress_query_dispatch',
l.remoteQueryLatencies.keyPressToQueryDispatch);
p.remote_keypress_query_dispatch=
l.remoteQueryLatencies.keyPressToQueryDispatch;
q.addInteger('remote_keypress_query_start',
l.remoteQueryLatencies.keyPressToQueryStart);
p.remote_keypress_query_start=
l.remoteQueryLatencies.keyPressToQueryStart;
q.addNormal
('inflight_requests',
l.remoteQueryLatencies.inflightRequests);

q.addInteger
('inflight_requests',
l.remoteQueryLatencies.inflightRequests);

p.inflight_requests=
l.remoteQueryLatencies.inflightRequests;
q.addNormal
('waiting_queries',
l.remoteQueryLatencies.waitingQueries);

q.addInteger
('waiting_queries',
l.remoteQueryLatencies.waitingQueries);

p.waiting_queries=
l.remoteQueryLatencies.waitingQueries;}

if(l.cacheQueryLatencies)
this.addLatencyToSample
(q,
p,
l.cacheQueryLatencies,
'cache_');


q.post();
c('BanzaiNectar').log
('search_facebar_js',
'typeahead',
p);};

i.prototype.




submitThroughAsyncRequest=function(k){'use strict';
if(Object.keys(k).length>0)
new (c('AsyncRequest'))().
setURI(this._endPoint).
setMethod('POST').
setData({stats:k}).
setOption('handleErrorAfterUnload',true).
setErrorHandler(function(l){




k.retry=true;
new (c('AsyncRequest'))().
setURI(this._endPoint).
setMethod('POST').
setData({stats:k}).
setOption('asynchronous_DEPRECATED',false).
send();}.
bind(this)).
send();};











var j=function k(l,m){
if(!l||!m)
return;

var n=c('TokenizeUtil').parse(m);
if(n.flatValue[n.flatValue.length-1]===' ')
return n.flatValue;

var o=n.tokens[n.tokens.length-1],
p={};
l.forEach(function(u){
p[u]=(p[u]||0)+1;});

var q={},
r=n.tokens.slice(0,n.tokens.length-1);
r.forEach(function(u){
q[u]=(q[u]||0)+1;});

for(var s=0;s<l.length;++s){
var t=l[s];
if(t.indexOf(o)===0&&
p[t]-(q[t]||0)>0){
r.push(t);
return r.join(' ');}}



return undefined;};


Object.assign(i.prototype,
{_endPoint:'/ajax/typeahead/record_metrics.php',
_banzaiRoute:'search'});


f.exports=i;}),null);

/** www/__virtual__/x/XSearchFacebarSurveyController.js */



__d("XSearchFacebarSurveyController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/search\/facebar_survey\/",{id:{type:"String",required:true},query:{type:"String"},session_id:{type:"String",required:true},on_session_start:{type:"Exists",defaultValue:false},result_selected:{type:"Exists",defaultValue:false}});}),

null);

/** js/search/typeahead/behaviors/AbandonedSessionSurvey.js */







__d('AbandonedSessionSurvey',['AsyncRequest','SubscriptionsHandler','XSearchFacebarSurveyController','getOrCreateDOMID'],(function a(b,c,d,e,f,g){




















function h(i){'use strict';this.





























tryToSubmitSurvey=function(){
if(this.searchBoxFocused){
this.openSurvey();
this.resultSelected=false;
this.searchBoxFocused=false;}}.

bind(this);this.core=i.getCore();this.data=i.getData();this.view=i.getView();this.subscriptionsHandler=new (c('SubscriptionsHandler'))();}h.prototype.enable=function(){'use strict';this.subscriptionsHandler.addSubscriptions(this.core.subscribe('focus',function(){this.searchBoxFocused=true;this.resultSelected=false;}.bind(this)),this.data.subscribe('beforeQuery',function(i,j){this.query=j.value||'';}.bind(this)),this.view.subscribe('select',function(){this.resultSelected=true;this.tryToSubmitSurvey();}.bind(this)),this.core.subscribe('blur',this.tryToSubmitSurvey));};h.prototype.disable=function(){'use strict';this.subscriptionsHandler.release();this.request&&this.request.abort();};h.prototype.

openSurvey=function(){'use strict';
if(this.openedSurvey)
return;


this.openedSurvey=true;

var i=this.core.element;


if(i==null)
i=this.core.getElement();


var j=this.normalizeValue(this.query),

k=c('XSearchFacebarSurveyController').getURIBuilder().
setString('id',c('getOrCreateDOMID')(i)).
setString('query',j!=null?j:'').
setString('session_id',this.data.queryData.sid).
setExists('result_selected',this.resultSelected);

this.request=new (c('AsyncRequest'))().
setMethod('post').
setAllowCrossPageTransition(true).
setURI(k.getURI());

this.request.send();};
h.prototype.

normalizeValue=function(i){'use strict';
return String(i).
trim().
replace(/\s+/g,' ').
replace(/[\u200E|\u200F|\u202a|\u202b|\u202c]/g,'').
toLowerCase();};



f.exports=h;}),null);
