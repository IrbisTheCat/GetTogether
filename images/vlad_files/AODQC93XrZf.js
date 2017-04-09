if (self.CavalryLogger) { CavalryLogger.start_js(["mVAUj"]); }

/** js/ads/external_tracking_tag/ExternalTrackingTag.js */




__d('ExternalTrackingTag',['AsyncSignal','TrackingPixel','Event'],(function a(b,c,d,e,f,g){





var h=


{listenForElementClick:function i(j,k,l,m,n){
c('Event').listen(j,'click',function(){
h.sendRequest(k,l,m,n);});},



sendRequest:function i(j,k,l,m){
if(!j)
return;

new (c('AsyncSignal'))
('/ads/external_tracking_tag/',

{href:j,
tracking_tag_id:k,
adgroup_id:l,
ad_id:m}).

send();
c('TrackingPixel').loadWithNoReferrer(j);}};



f.exports=h;}),null);

/** shared/lynx/FBLynxWrapper.js */





__d('FBLynxWrapper',['isFacebookURI','URI'],(function a(b,c,d,e,f,g){
'use strict';




var h=
{SUBDOMAIN:'l',
SUBDOMAIN_M:'lm',
PATH:'/',
URL_PARAM:'u',
ENC_PARAM:'e',

isLynxLink:function i(j){
if(j.getAttribute('data-lynx-async-dest'))

return true;

if(j.getAttribute('data-lynx-uri'))

return true;

if(new (c('URI'))(j.href).isLinkshimURI())

return true;

return false;}};



f.exports=h;}),null);

/** js/litestand/LitestandColumnManager.js */






__d('LitestandColumnManager',['Arbiter','BlueBar','Event','NavigationMessage','Run','SubscriptionsHandler','clamp','ge','getScrollPosition'],(function a(b,c,d,e,f,g){

'use strict';












var h=0,

i=null;

function j(){
if(i)
return;


i=new (c('SubscriptionsHandler'))();

i.addSubscriptions
(c('Arbiter').subscribe(c('NavigationMessage').NAVIGATION_BEGIN,function(){
m(0);
k();}),

c('Event').listen(window,'resize',function(){
if(!c('BlueBar').hasFixedBlueBar()){
m(0);
k();}}),


c('Event').listen(window,'scroll',function(){
if(!l())
k();}));




c('Run').onLeave(function(){return i&&i.release();});}


function k(){
i.release();
i=null;}





function l(){
if(h<=0)
return false;


m
(c('clamp')
(c('getScrollPosition')(window).y,
0,
h));



return h>0;}


function m(p){
if(p===h)
return;


n('leftCol',p);
n('rightCol',p);
h=p;}





function n(p,q){
var r=c('ge')(p);
if(r)
r.style.marginTop=q?q+'px':'';}



var o=
{adjustVerticalWindowPosition:function p
(q,
r){

j();
m(r);

window.scrollTo
(q.x,
q.y+h);}};





f.exports=o;}),null);

/** js/litestand/stream/LitestandStream.js */






__d('LitestandStream',['csx','invariant','Arbiter','CSS','EventEmitter','LitestandColumnManager','LitestandStoryInsertionStatus','Run','ViewportBounds','getElementPosition','getScrollPosition','nullthrows'],(function a(b,c,d,e,f,g,h,i){

















var j=void 0,
k=void 0,
l=void 0,
m=void 0,
n=new (c('EventEmitter'))(),

o=


{init:function p
(q,
r,
s,
t){

j=s;
l=q;
k=t;

if(!m)
m=c('Arbiter').subscribe('ufi/didUpdate',function(u,v){
if(v.offsetY)
c('LitestandColumnManager').adjustVerticalWindowPosition
(c('getScrollPosition')(window),
v.offsetY);});





c('Run').onLeave(function(){
m&&m.unsubscribe();
m=null;
n.removeAllListeners('ready');
l=null;});


n.emit('ready');},


getStoriesSelector:function p(){
return "._5jmm";},






getStreamRoot:function p(){
return l;},






getSectionID:function p(){
return j;},





getStoryID:function p(){
return k;},


isStory:function p(q){
return c('CSS').matchesSelector(q,"._5jmm");},




canInsertNewerStories:function p(){
if(c('ViewportBounds').getTop()>
c('getElementPosition')(o.getStreamRoot()).y)
return false;

return c('LitestandStoryInsertionStatus').canInsert();},


getFeedStreamID:function p(){
return parseInt
(c('nullthrows')(l).id.split('feed_stream_')[1],
16)%
1e+08;},


isReady:function p(){
return !!l;},


addReadyListener:function p(q){

o.isReady()||i(0,
'addReadyListener() should be used only if isReady() is false.');


return n.once('ready',q);}};



f.exports=o;}),null);

/** js/ads/FeedAdsClickLogger.js */





__d('FeedAdsClickLogger',['Arbiter','AsyncRequest','Banzai','BanzaiODS','DataAttributeUtils','DOM','ExternalTrackingTag','FBLynxWrapper','LitestandMessages','LitestandStream','Parent','SLConfig','TrackingNodes','URI','collectDataAttributes','isFacebookURI','ge'],(function a(b,c,d,e,f,g){

var h='ssinfeed',




















i={},
j=false,

k=[],
l,
m=false;



function n(){'use strict';}n.prototype.

init=function(p){'use strict';
l=c('SLConfig').gk.sl_replace_s;
c('Arbiter').subscribe("ClickRefAction/new",this.onNewUserAction.bind(this));
m=p.see_more_logging_enabled;
if(p.append_tracking_data_to_links){
this.appendTrackingDataToLinks();

c('Arbiter').subscribe
(c('LitestandMessages').STORIES_INSERTED,
this.appendTrackingDataToLinks.bind(this));

c('Arbiter').subscribe
('FeedAdsClickLogger/refreshTrackingData',
this.appendTrackingDataToLinks.bind(this),
c('Arbiter').SUBSCRIBE_NEW);}};


n.prototype.

getStories=function(){'use strict';
var p=c('LitestandStream').getStreamRoot();
if(p){
return c('DOM').scry
(p,
c('LitestandStream').getStoriesSelector());}else{


var q=c('ge')('home_stream');
if(q)
return c('DOM').scry(q,'.uiStreamStory');}


return [];};
n.prototype.

appendTrackingDataToLinks=function(){'use strict';
var p=this.getStories();
for(var q=0;q<p.length;q++){
var r=p[q];
if(r in k)
continue;


var s=c('DataAttributeUtils').getDataFt(r);
if(!s||
s.indexOf('ei')===-1&&
s.indexOf('mei')===-1)
continue;

var t=c('DOM').scry(r,'a');
for(var u=0;u<t.length;u++){
var v=t[u];

if(v.getAttribute('ajaxify')!=null)
continue;


if(v.getAttribute('rel')!=null)
continue;

var w=v.getAttribute('href');

if(!w||w.charAt(0)==='#')
continue;

var x=new (c('URI'))(v);

if(c('isFacebookURI')(x)===false)
continue;


if(x.isLinkshimURI()===true||c('FBLynxWrapper').isLynxLink(v))
continue;


if(x.isPossiblySignedURI()===true)
continue;


if(l&&
(x.getPath()==='/ads/about'||x.getPath()==='/about/ads'))



continue;


v.setAttribute('href',o(v).toString());
v.setAttribute
('onmousedown',
"this.href = this.href.replace('__md__=0', '__md__=1');");}



k.push(r);}};

n.prototype.

getHref=function(p){'use strict';

return (p.getAttribute&&

(p.getAttribute('ajaxify')||p.getAttribute('data-endpoint'))||

p.action||
p.href);};

n.prototype.

sendLogRequest=function(p,q){'use strict';
var r=p.ei||p.ai;
if(!r&&p.mei)


r=p.mf_story_key;


if(p!==null&&typeof r==="string"){
var s=false;

if(p.tn){
var t=c('TrackingNodes').parseTrackingNodeString(p.tn);
for(var u=0;u<t.length;u++){
var v=t[u][0];

switch(v){

case c('TrackingNodes').types.LIKE_LINK:
case c('TrackingNodes').types.UNLIKE_LINK:
case c('TrackingNodes').types.COMMENT:
case c('TrackingNodes').types.COMMENT_LINK:
case c('TrackingNodes').types.ADD_COMMENT_BOX:
case c('TrackingNodes').types.MULTI_ATTACHMENT_VIDEO:
return;


case c('TrackingNodes').types.XBUTTON:
case c('TrackingNodes').types.HIDE_LINK:
case c('TrackingNodes').types.REPORT_SPAM_LINK:
case c('TrackingNodes').types.HIDE_ALL_LINK:
case c('TrackingNodes').types.DROPDOWN_BUTTON:
case c('TrackingNodes').types.UNHIDE_LINK:
return;


case c('TrackingNodes').types.RELATED_SHARE_ARTICLE:
case c('TrackingNodes').types.RELATED_SHARE_VIDEO:
return;

case c('TrackingNodes').types.ATTACHMENT:
case c('TrackingNodes').types.USER_MESSAGE:


s=true;
break;}}}





var w=Date.now(),
x=500;

p.duplicate_click=
!!i[r]&&
w-i[r]<x;

i[r]=w;
var y=new (c('AsyncRequest'))('/ajax/ssinfeed/end/').
setData(p).
setAllowCrossPageTransition(true).
setMethod('POST');
















y.send();

var z=p.href;
if(new (c('URI'))(z).isLinkshimURI()&&new (c('URI'))(z).getQueryData())
z=new (c('URI'))(z).getQueryData().u;


if(s&&
!p.duplicate_click&&
q!==null&&
q.url&&
z&&
c('isFacebookURI')(new (c('URI'))(z))===false){
c('ExternalTrackingTag').sendRequest
(q.url,
q.tag_id,
q.adgroup_id);

c('BanzaiODS').bumpEntityKey('external_tracking_tags','request_sent');}}};


n.prototype.

onNewUserAction=function(p,q){'use strict';
if(!q.node)
return;

var r=this.getHref(q.node),



s=
c('Parent').byTag(q.node,'input')||c('Parent').byTag(q.node,'button');
if(!r&&
s&&
s.type=="submit"&&
s.getAttribute&&c('DataAttributeUtils').getDataFt(s))
r="#";



if(q.event&&q.node.tagName==='A'&&
q.event.defaultPrevented&&
m)
r='#';


var t,u;

if(r&&q.event&&
(q.event.type==='click'||q.event.type==='contextmenu')){
t=c('collectDataAttributes')(q.node,['ft']);
t.ft.href=r;
t.ft.mouse_type=q.event.type;
u=
c('collectDataAttributes')(q.node,['external-tracking-tags']);
this.sendLogRequest
(t.ft,
u['external-tracking-tags']);}};









function o(p){
var q=new (c('URI'))(p.href),
r=c('collectDataAttributes')(p,['ft']).ft,
s=q.getQueryData();
s.ft=r;
s.__md__=0;
q.setQueryData(s);
return q;}


f.exports=

{init:function p(q){
if(j===false){
new n().init(q);
j=true;}},


buildURL:o};}),null);

/** js/logging/generated/SLPerfTypedLogger.js */





__d('SLPerfTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){
'use strict';



















function h(){
this.clear();}
h.prototype.





log=function(){
c('GeneratedLoggerUtils').log('logger:SLPerfLoggerConfig',this.$SLPerfTypedLogger_data,c('Banzai').BASIC);};
h.prototype.







logVital=function(){
c('GeneratedLoggerUtils').log('logger:SLPerfLoggerConfig',this.$SLPerfTypedLogger_data,c('Banzai').VITAL);};
h.prototype.




clear=function(){
this.$SLPerfTypedLogger_data={};
return this;};
h.prototype.






updateData=function(j){








this.$SLPerfTypedLogger_data=babelHelpers['extends']({},
this.$SLPerfTypedLogger_data,
j);

return this;};
h.prototype.




setCount=function(j){
this.$SLPerfTypedLogger_data.count=j;
return this;};
h.prototype.




setDurationMs=function(j){
this.$SLPerfTypedLogger_data.duration_ms=j;
return this;};
h.prototype.




setEvent=function(j){
this.$SLPerfTypedLogger_data.event=j;
return this;};




























var i=
{count:true,
duration_ms:true,
event:true};


f.exports=h;}),null);

/** js/ads/SLUtils.js */









__d('SLUtils',['csx','cx','Arbiter','DOM','Event','FeedAdsClickLogger','LitestandMessages','LitestandStream','Map','SLConfig','SLPerfTypedLogger','URI','clearTimeout','curry','cxodecode','goURI','joinClasses','setIntervalAcrossTransitions','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g,h,i){

'use strict';





























var j=false;

function k
(ra,
sa){



var ta;

if(j)
return;

j=true;


if(!c('SLConfig').gk.s_link_utils)
return;


if(ka()){
ma().setEvent('init').log();
oa('init_timer');}



l();


if(c('SLConfig').gk.sl_replace_about_link)
q(function(ua,va){return r(ua,va);});



if(c('SLConfig').gk.sl_replace_s)(function(){


da(ra);


var ua=sa.map(function(va){
return {nonce:c('cxodecode')(va.nonce),
className:c('cxodecode')(va.className)};});




q(function(va,wa){
ua.forEach(function(xa){
var ya=c('DOM').scry(va,xa.nonce);
ya.forEach(function(za){


while(za.firstChild)
za.removeChild(za.firstChild);




za.className=c('joinClasses')(za.className,xa.className);});});});})


();



if(c('SLConfig').gk.sl_replace_subtitle){
ga();
q(function(ua,va){
y(ua,va);
z(va);});

c('setIntervalAcrossTransitions')
(aa,
c('SLConfig').sv.interval);}





n();


if(ka())
ma().
setEvent('init_duration').
setDurationMs(pa('init_timer')).
log();}







function l(){
c('Arbiter').subscribe(c('LitestandMessages').STORIES_INSERTED,n);
c('Arbiter').subscribe
('FeedAdsClickLogger/refreshTrackingData',
n,
c('Arbiter').SUBSCRIBE_NEW);}


var m=null;
function n(){
if(ka())
oa('hsa_timer');




c('clearTimeout')(m);
m=null;

var ra=[],
sa=u(),
ta=ja(),

ua=false;
ta.forEach(function(va){

if(!va.id)
return;


if(sa.has(va.id))
return;


if(!x(va,va.id)){
ua=true;
return;}

sa.set(va.id,va);
ra.push([va,va.id]);});




if(ua){
m=c('setTimeoutAcrossTransitions')
(n,
c('SLConfig').sv.sl_content_waiting_delay);

if(ka())
ma().setEvent('hsa_waiting_for_content').log();}





if(ka())
ma().
setEvent('hsa_stories_added').
setCount(ra.length).
log();


if(ra.length===0)
return;


ra.forEach(function(va){var wa=va[0],xa=va[1];return p().forEach(function(ya){return ya
(wa,
xa);});});


if(ka())
ma().
setEvent('hsa_duration').
setDurationMs(pa('hsa_timer')).
log();}






var o=[];
function p(){
return o;}

function q(ra){
o.push(ra);}





function r(ra,sa){
var ta=x(ra,sa);

if(!ta){
if(ka())
ma().setEvent('usl_real_subtitle_missing').log();

return;}



var ua=c('DOM').scry(ta,'a'),
va=ua.filter(function(wa){
var xa=new (c('URI'))(wa.href).getPath();

return (xa==='/ads/about'||
xa==='/about/ads');});



if(ka())
ma().
setEvent('usl_links_updated').
setCount(va.length).
log();


va.forEach(function(wa){
var xa=c('FeedAdsClickLogger').buildURL(wa);
c('Event').listen(wa,'click',c('curry')(s,xa));
wa.href='#';});}


function s(ra,sa){
c('goURI')(ra.toString().replace('__md__=0','__md__=1'));
c('Event').stop(sa);}





var t=new (c('Map'))();
function u(){
return t;}





var v=new (c('Map'))(),
w=new (c('Map'))();
function x(ra,sa){
var ta=null;
if(v.has(sa)){
ta=v.get(sa);}else 

ta=ra;

var ua=c('DOM').scry(ta,"._5pcp");


if(ua.length===0){
return null;}else 

return ua[0];}


function y(ra,sa){

if(v.has(sa)||w.has(sa))
return;



var ta=fa();
if(!ta){
if(ka())
ma().setEvent('es_subtitle_container_missing').log();

return;}


var ua=c('DOM').scry(ra,"._5pcp");

if(ka())
ma().
setEvent('es_subtitle_count').
setCount(ua.length).
log();


if(ua.length===0)
return;



var va=ua[0],
wa=va.parentNode;
if(!va||!wa)
return;


var xa=ba();
va.parentNode.replaceChild(xa,va);
var ya=ca(va);
ta.appendChild(ya);


v.set(sa,ya);
w.set(sa,xa);}

function z(ra){
if(la())
oa('usp_timer');

var sa=ia();
if(!sa){
if(ka())
ma().setEvent('usp_feed_root_missing').log();

return;}

var ta=w.get(ra);
if(!ta){
if(ka())
ma().setEvent('usp_fake_missing').log();

return;}

var ua=v.get(ra);
if(!ua){
if(ka())
ma().setEvent('usp_real_missing').log();

return;}

var va=sa.getBoundingClientRect(),
wa=ta.getBoundingClientRect(),
xa=wa.top!==0&&wa.left!==0;
ua.style.display=xa?'initial':'none';
ua.style.top=wa.top-va.top+'px';
ua.style.left=wa.left-va.left+'px';
if(la())
ma().
setEvent('usp_duration').
setDurationMs(pa('usp_timer')).
log();}


function aa(){
if(la())
oa('eausp_duration');

ha();
var ra=u();
ra.forEach(function(sa,ta){
y(sa,ta);
z(ta);});

if(la())
ma().
setEvent('eausp_duration').
setDurationMs(pa('eausp_duration')).
setCount(ra.size).
log();}


function ba(){
return c('DOM').create
('div',

{'class':"_4kgx"});}



function ca(ra){
return c('DOM').create
('div',

{style:'position: absolute; z-index: 1;'},

ra);}






function da(ra){
var sa=document.createElement('style');
sa.type='text/css';
sa.textContent=c('cxodecode')(ra);
document.getElementsByTagName('head')[0].appendChild(sa);}





var ea=null;
function fa(){
return ea;}

function ga(){
if(ea)
return;

var ra=ia();
ea=c('DOM').create
('div',

{style:'position: relative;'});


ra.insertBefore(ea,ra.firstChild);}




function ha(){
if(!ea)
return;

var ra=ia();


if(ea.parentNode===ra)
return;



c('DOM').remove(ea);
ra.insertBefore(ea,ra.firstChild);}





function ia(){


return c('LitestandStream').getStreamRoot()||document.body;}





function ja(){
return c('DOM').scry(ia(),"._5pat");}





function ka(){
return !!c('SLConfig').gk.sl_perf_logging;}

function la(){
return !!c('SLConfig').gk.sl_perf_logging_heavy;}

function ma(){
return new (c('SLPerfTypedLogger'))();}

var na=new (c('Map'))();
function oa(ra){


na.set(ra,Date.now());}

function pa(ra){


var sa=na.get(ra);
return sa==null?-1:Date.now()-sa;}





var qa=
{init:k};


f.exports=qa;}),null);

/** js/feed/FeedTrackingAsync.js */








__d('FeedTrackingAsync',['Arbiter','Run','collectDataAttributes'],(function a(b,c,d,e,f,g){








var h;


f.exports.init=function(){

if(h)
return;


h=c('Arbiter').subscribe('AsyncRequest/send',function(i,j){
var k=j.request,
l=k.getRelativeTo();
if(l){
var m=k.getData(),
n=c('collectDataAttributes')(l,['ft']);
if(n.ft&&Object.keys(n.ft).length)
Object.assign(m,n);}});




c('Run').onLeave(function(){
h.unsubscribe();
h=null;});};}),

null);

/** js/stream/fbfeed/FbFeedAccessible.js */





__d('FbFeedAccessible',['csx','fbt','invariant','AccessibilityConfig','Arbiter','ARIA','BootloadedComponent.react','CSS','DataAttributeUtils','DOMQuery','JSResource','LitestandMessages','React','ReactDOM','SubscriptionsHandler','ge','getOrCreateDOMID'],(function a(b,c,d,e,f,g,h,i,j){




















var k='Accessibility/StoriesRequested',
l='Accessibility/StoriesLoaded',
m='Accessibility/StoryContentInserted',
n='Accessibility/SubstreamInserted',

o=void 0,
p=void 0,

q=

{init:function r(s){
o=s;
if(c('AccessibilityConfig').a11yNewsfeedStoryEnumeration){
var t=new (c('SubscriptionsHandler'))();
t.addSubscriptions
(c('Arbiter').subscribe
(c('LitestandMessages').STORIES_REQUESTED,
this._onStoriesRequested.bind(this)),

c('Arbiter').subscribe
(c('LitestandMessages').STORIES_INSERTED,
this._onInsertedSubstream.bind(this)),

c('Arbiter').subscribe
(c('LitestandMessages').NEWER_STORIES_INSERTED,
this._onInsertedSubstream.bind(this)),


c('Arbiter').subscribe
(l,
this._processStoriesLoaded.bind(this)),

c('Arbiter').subscribe
(k,
this._processStoriesRequested.bind(this)),

c('Arbiter').subscribe
(m,
this._processStoryContentInserted.bind(this)),

c('Arbiter').subscribe
(n,
this._processInsertedSubstream.bind(this)));



this._enumerateStories();}},




informStoryContentInserted:function r(s){
c('Arbiter').inform(m,s);




this.setAriaLabelledBy(s);},


setAriaLabelledBy:function r(s){
var t=c('ge')(s),
u;

if(t&&this._isStory(t)){

if(t.getAttribute('aria-labelledby'))
return;



u=this._filterForElement(t,
["._4gns",
"._5pbw",
".timestampContent",
"._5pbx"]);


if(u.length>0)
t.setAttribute
('aria-labelledby',
u.
map(function(v){return c('getOrCreateDOMID')(v);}).
join(' '));}},





_getStories:function r(s){
return c('DOMQuery').scry
(s||o,
"._5jmm");},



_onInsertedSubstream:function r(s,t){
if(t&&t.substream_id)
c('Arbiter').inform(n,t.substream_id);},



_onStoriesRequested:function r(){
c('Arbiter').inform(k);},


_setEnumerationText:function r
(s,
t,
u){

var v=
c('React').createElement(c('BootloadedComponent.react'),
{bootloadLoader:c('JSResource')('FbFeedPager.react').__setRef('FbFeedAccessible'),
bootloadPlaceholder:c('React').createElement('div',null),
position:t,
total:u,
'aria-hidden':'true'});

c('ReactDOM').render
(v,
s);},



_enumerateStories:function r(){
var s=this._getStories(o);
p=s.length;
s.forEach(function(t,u){
this._enumerateStory(t,u+=1);}.
bind(this));},


_enumerateSubstream:function r(s){
var t=this._getStories();
p=t.length;
var u=this._getStories(c('ge')(s)),
v=u.length||0;
for(var w=0;w<v;w++)
this._registerStoryEnumerationPosition
(u[w],
p-v+(w+1),
w+1);},




_enumerateStory:function r(s,t){

this._isStory(s)||j(0,
'The object must be a story node.');

if(t>0){
var u=c('DOMQuery').scry
(s,
"._4gns");

if(u&&u[0])
this._setEnumerationText(u[0],t,p);}},




_processStoriesLoaded:function r(){
c('ARIA').notify(i._(["More stories loaded.","44a8868794648a1e4b17675f663f57dc"]));},








_processStoriesRequested:function r(){
c('ARIA').notify(i._(["More stories requested.","14aba33ec969c1f5f7eef3bd99465b54"]));},








_processInsertedSubstream:function r
(s,
t){

this._enumerateSubstream(t);

this._enumerateStories();},


_processStoryContentInserted:function r
(s,
t){

var u=void 0,
v=c('ge')(t);
if(v)
u=JSON.parse(c('DataAttributeUtils').getDataFt(v));

if(u&&u.ordinal_position){var w=



u.ordinal_position.split(':'),x=w[0],y=w[1];

x=parseInt(x,10);
y=parseInt(y,10);

this._enumerateStory(v,x);

if(y===1)
c('Arbiter').inform(l);}},




_registerStoryEnumerationPosition:function r
(s,
t,
u){

var v=JSON.parse(c('DataAttributeUtils').getDataFt(s));
if(v){
v.ordinal_position=t+':'+u;
c('DataAttributeUtils').setDataFt(s,JSON.stringify(v));}},



_isStory:function r(s){
return c('CSS').matchesSelector(s,"._5jmm");},


_filterForElement:function r
(s,
t){

return t.
map(function(u){return c('DOMQuery').scry
(s||document,
u)[0];}).

filter(function(u){return !!u;});}};



f.exports=q;}),null);
