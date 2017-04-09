if (self.CavalryLogger) { CavalryLogger.start_js(["NSJ\/l"]); }

/** __static_js_modules__/navigationmetricsenumjs.js */




__d("NavigationMetricsEnumJS",[],(function a(b,c,d,e,f,g){

f.exports={NAVIGATION_START:"navigationStart",UNLOAD_EVENT_START:"unloadEventStart",UNLOAD_EVENT_END:"unloadEventEnd",REDIRECT_START:"redirectStart",REDIRECT_END:"redirectEnd",FETCH_START:"fetchStart",DOMAIN_LOOKUP_START:"domainLookupStart",DOMAIN_LOOKUP_END:"domainLookupEnd",CONNECT_START:"connectStart",CONNECT_END:"connectEnd",SECURE_CONNECTION_START:"secureConnectionStart",REQUEST_START:"requestStart",RESPONSE_START:"responseStart",RESPONSE_END:"responseEnd",DOM_LOADING:"domLoading",DOM_INTERACTIVE:"domInteractive",DOM_CONTENT_LOADED_EVENT_START:"domContentLoadedEventStart",DOM_CONTENT_LOADED_EVENT_END:"domContentLoadedEventEnd",DOM_COMPLETE:"domComplete",LOAD_EVENT_START:"loadEventStart",LOAD_EVENT_END:"loadEventEnd"};}),

null);

/** __static_js_modules__/pagepluginactions.js */




__d("PagePluginActions",[],(function a(b,c,d,e,f,g){

f.exports={PAGE_AVATAR:"page_avatar",PAGE_CTA:"page_cta",PAGE_LIKE:"page_like",PAGE_PERMALINK:"page_permalink",PAGE_SHARE:"page_share",PAGE_UNLIKE:"page_unlike"};}),

null);

/** __static_js_modules__/pagepluginactiontypes.js */




__d("PagePluginActionTypes",[],(function a(b,c,d,e,f,g){

f.exports={CLICK:"click"};}),

null);

/** __static_js_modules__/resourcetimingmetricsenumjs.js */




__d("ResourceTimingMetricsEnumJS",[],(function a(b,c,d,e,f,g){

f.exports={START_TIME:"startTime",REDIRECT_START:"redirectStart",REDIRECT_END:"redirectEnd",FETCH_START:"fetchStart",DOMAIN_LOOKUP_START:"domainLookupStart",DOMAIN_LOOKUP_END:"domainLookupEnd",CONNECT_START:"connectStart",SECURE_CONNECTION_START:"secureConnectionStart",CONNECT_END:"connectEnd",REQUEST_START:"requestStart",RESPONSE_START:"responseStart",RESPONSE_END:"responseEnd"};}),

null);

/** js/navigation/ImageTimingHelper.js */




__d('ImageTimingHelper',['Arbiter','BigPipe','URI'],(function a(b,c,d,e,f,g){





var h={},
i={};

c('Arbiter').subscribe(c('BigPipe').Events.init,function(j,k){
if(k.lid&&k.lid!=='0')
k.arbiter.subscribe('images_displayed',function(l,m){
var n=h[m.lid];
if(!n)
n=h[m.lid]=[];

m.images.forEach(function(o){

try{var q=new (c('URI'))(o);
o=q.setFragment('').toString();}catch(
p){

return;}


if(i[o])
return;


i[o]=true;
n.push
({pagelet:m.pagelet,
timeslice:m.timeslice,
ts:m.ts,
uri:o});});});});






f.exports.getImageTimings=function(j){
return h[j]||[];};}),
null);

/** js/plugins/PluginCSSReflowHack.js */












__d('PluginCSSReflowHack',['Style'],(function a(b,c,d,e,f,g){



var h=

{trigger:function i(j){
setTimeout(function(){
var k='border-bottom-width',
l=c('Style').get(j,k);
c('Style').set(j,k,parseInt(l,10)+1+'px');
var m=j.offsetHeight;
c('Style').set(j,k,l);
return m;},
1000);}};




f.exports=h;}),null);

/** js/plugins/PluginPageActionLogger.js */






__d('PluginPageActionLogger',['BanzaiLogger','BanzaiODS','DOM','Event','PagePluginActions','PagePluginActionTypes'],(function a(b,c,d,e,f,g){








var h=


{initializeClickLoggers:function i
(j,
k,
l,
m,
n,
o,
p,
q,
r,
s){

var t=function u
(v,
w){


try{var y=c('DOM').find(m,'.'+v);
c('Event').listen
(y,
'click',
function(z){
c('BanzaiODS').bumpEntityKey
('platform_www',
'platform.plugin.page.action');

c('BanzaiLogger').log('PagePluginActionsLoggerConfig',
{page_id:k,
page_plugin_action:w,
page_plugin_action_type:c('PagePluginActionTypes').CLICK,

referer_url:l,
is_sdk:j});});}catch(



x){}};





t(n,c('PagePluginActions').PAGE_LIKE);




t(o,c('PagePluginActions').PAGE_UNLIKE);

t(p,c('PagePluginActions').PAGE_AVATAR);
t(q,c('PagePluginActions').PAGE_PERMALINK);
t(r,c('PagePluginActions').PAGE_SHARE);
t(s,c('PagePluginActions').PAGE_CTA);}};



f.exports=h;}),null);

/** shared/instrumentation/ReactSpeedHelper.js */





__d('ReactSpeedHelper',['LogBuffer','ReactDOM'],(function a(b,c,d,e,f,g){










var h=

{enableRenderMeasurements:function i(){
if(!c('ReactDOM').enableRenderMeasurements)






return;

c('ReactDOM').enableRenderMeasurements();},


getMetrics:function i(j,k){
return c('LogBuffer').read('react_speed').filter(function(l){

return ((j==null||l.begin>=j)&&
(k==null||l.end<=k));});}};





f.exports=h;}),null);

/** shared/logging/sourceMetaToString.js */




__d('sourceMetaToString',[],(function a(b,c,d,e,f,g){

function h(i,j){
var k;

if(i.name){
k=i.name;
if(i.module)
k=i.module+'.'+k;}else

if(i.module)
k=i.module+'.<anonymous>';


if(j&&i.line){
k=(k?k:'<anonymous>')+':'+i.line;
if(i.column)
k+=':'+i.column;}


return k;}


f.exports=h;}),null);

/** shared/navigation/NavigationTimingHelper.js */





__d('NavigationTimingHelper',['NavigationMetricsEnumJS','forEachObject','performance'],(function a(b,c,d,e,f,g){






function h
(j,
k){

var l={};


c('forEachObject')(c('NavigationMetricsEnumJS'),function(m){
var n=k[m];
if(n)
l[m]=n+j;});



return l;}






var i=
{getAsyncRequestTimings:function j(k){
if(!k||!c('performance').timing||!c('performance').getEntriesByName)
return undefined;

var l=c('performance').getEntriesByName(k);
if(l.length===0)
return undefined;

return h
(c('performance').timing.navigationStart,
l[0]);},



getNavTimings:function j(){
if(!c('performance').timing)
return undefined;

return h(0,c('performance').timing);}};




f.exports=i;}),null);

/** shared/navigation/ResourceTimingBootloaderHelper.js */





__d('ResourceTimingBootloaderHelper',['Bootloader','ResourceTimingMetricsEnumJS','ImageTimingHelper','URI','forEachObject','isEmpty','performance'],(function a(b,c,d,e,f,g){










var h={},
i={},
j=['.mp4','.m4v','.mpd','m4a'];
function k(r){
for(var s=j,t=Array.isArray(s),u=0,s=t?s:s[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var v;if(t){if(u>=s.length)break;v=s[u++];}else{u=s.next();if(u.done)break;v=u.value;}var w=v;
if(r.endsWith(w))
return true;}


return false;}


function l
(r,
s,
t,
u,
v,
w){

if(!c('performance').timing||!c('performance').getEntriesByType)
return;

var x={};
if(t)
x=c('ImageTimingHelper').getImageTimings(u).
sort(function(ra,sa){return ra.ts-sa.ts;}).
reduce(function(ra,sa){
if(ra[sa.uri])
return ra;

ra[sa.uri]=sa.pagelet;
return ra;},
{});

var y=c('performance').getEntriesByType('resource'),
z=0,
aa=0,
ba=0,
ca=0;
for(var da=0;da<y.length;da++){
var ea=y[da];

if(ea.duration<=0||
ea.startTime<s||
v!=null&&ea.responseEnd!=null&&
v<ea.responseEnd)

continue;

var fa='',
ga='',
ha='',
ia='',
ja='',

ka=ea.initiatorType;
switch(ka){
case 'css':
case 'link':
case 'script':var la=
p(ea.name);ga=la[0];fa=la[1];
if(!ga||!fa)
continue;

if(fa==='css'||fa==='js'){
ia=fa;
var ma=i[ea.name]||aa++;
ha=ma+'_'+ga;}else{
var na=

o(ea.name);ja=na[0];ia=na[1];
ha=z+++'_'+ja;}

break;

case 'img':
ha=z+++'_'+m(ea.name);
ia='img';
break;
case 'iframe':
ha=ba+++'_'+m(ea.name)+
n(ea.name);
ia='iframe';
break;
case 'xmlhttprequest':
if(w){
var oa=m(ea.name),
pa=n(ea.name);
if(k(pa)){
ha=ca+++'_'+oa+pa;
ia='video';
break;}}



default:continue;}





if(r[ea.name]==undefined)
r[ea.name]=[];


var qa={};
c('forEachObject')(c('ResourceTimingMetricsEnumJS'),function(ra){
var sa=ea[ra];
if(sa)
qa[ra]=sa+c('performance').timing.navigationStart;});


qa.type=ia;
qa.desc=ha;
if(ia=='img'&&Object.prototype.hasOwnProperty.call(x,ea.name))
qa.pagelet=x[ea.name];

qa.transferSize=ea.transferSize;
qa.encodedBodySize=ea.encodedBodySize;
r[ea.name].push(qa);}}



function m(r){
var s=new (c('URI'))(r).getDomain();
return s;}


function n(r){
var s=new (c('URI'))(r).getPath();
return s;}


function o(r){
return [m(r),'img'];}


function p(r){

var s=r.match(/\/rsrc\.php\/.*\/([^\?]+)/);
if(!s)
return [];

var t=s[1],
u='',
v=t.match(/\.(\w+)$/);
if(v)
u=v[1];

return [t,u];}







var q=







{addBootloaderMetricsToResourceTimings:function r(){



var s=arguments.length<=0||arguments[0]===undefined?{}:arguments[0],t=arguments.length<=1||arguments[1]===undefined?{}:arguments[1],u=arguments.length<=2||arguments[2]===undefined?true:arguments[2];
if(c('isEmpty')(i))
i=c('Bootloader').getURLToHashMap();

var v={};
c('forEachObject')(i,function(y,z){
v[y]=z;});


var w=
{bootload:true,
js_exec:true,
start_bootload:true,
tag_bootload:true},


x=[];
c('forEachObject')(t,function(y,z){
var aa=z.indexOf('/');
if(aa===-1)
return;


var ba=z.substring(0,aa);
if(!w[ba])
return;


x.push(z);
var ca=z.substring(aa+1),
da=v[ca];
if(!da){

da=ca;
ca=i[da];
if(!ca)
return;}






if(da.startsWith('data:'))
da='inlined resource: '+ca;






if(s[da]==null)
s[da]=[{}];


s[da].forEach(function(ea){
ea.bootloader_hash=ca;
ea[ba]=y;});});



if(!u)
x.forEach(function(y){return delete t[y];});


return s;},








getLastTTIAndE2EImageResponseEnds:function r
(s,
t,
u){

var v=
{TTI:s,
E2E:t};


if(!c('performance').timing)
return v;


var w=u.
filter(function(z){return z.ts<=s;}).
map(function(z){return z.uri;}).
reduce(function(z,aa){
z[aa]=true;
return z;},
{}),

x=u.
map(function(z){return z.uri;}).
reduce(function(z,aa){
z[aa]=true;
return z;},
{});

for(var y in h)

h[y].forEach(function(z){
if(z.type==='img'){
if(w[y])
v.TTI=Math.max
(v.TTI,
z.responseEnd);



if(x[y])
v.E2E=Math.max
(v.E2E,
z.responseEnd);}});






return v;},











































getMetrics:function r
(s,
t,
u,
v,
w){

h={};
if(c('isEmpty')(i))
i=c('Bootloader').getURLToHashMap();


l
(h,
s,
t,
u,
v,
w);

return h;}};



f.exports=q;}),null);

/** shared/navigation/TimeSliceHelper.js */





__d('TimeSliceHelper',['LogBuffer','Map','ReactSpeedHelper','sourceMetaToString','forEachObject'],(function a(b,c,d,e,f,g){










var h=function j(k,l){



return Math.round((k-l)*1000);},


































































i=
{formatMetricsForTransport:function j
(k){

var l=[],
m=[],
n=[],
o=[],
p=new (c('Map'))(),
q=new (c('Map'))(),
r=0,

s=function u
(v,
w,
x){

var y=void 0;
if(w.has(v)){
y=w.get(v);}else{

y=x.length;
w.set(v,y);
x.push(v);}


return y;},


t=[];
if(k!=null)
k.forEach(function(u){
var v=h(u.begin,r),
w=h(u.end,u.begin);
r=u.end;
var x=s(u.name,p,l),
y=
[v,
w,
x];

if(u.activeRefTreeIds!=null){
var z=u.activeRefTreeIds.slice();

z.unshift(t.length);
o.push(z);}

var aa=u.counters||{},
ba=
Object.keys(aa).
filter(function(fa){return aa[fa]!==0;}).
sort(),
ca=void 0;
if(ba.length>0){
var da=ba.join(),
ea=s(da,q,n);
ca=
ba.map(function(fa){return aa[fa];});
ca.unshift(ea);}else 

ca=[];

if(u.id)
y.push(u.id);

if(u.parentID)
y.push(u.parentID);




t.push(y);
m.push(ca);});



return {version:'compact',
items:t,
names:l,
counters:m,
counterSchemas:n,
allActiveRefTreeIds:o};},



getMetrics:function j
(k,
l,
m,
n,
o){

var p=c('LogBuffer').read('time_slice'),
q=c('LogBuffer').read('time_slice_heartbeat'),

r=c('ReactSpeedHelper').getMetrics().map(function(y){
return babelHelpers['extends']({},y,{desc:'React['+y.name+']'});}),


s=p.concat(q,r),
t,
u=[],

v=function y(z){
var aa;
if(z.guard){
var ba=c('sourceMetaToString')(z),
ca=z.guard.toString();
aa=ba?ca+' at '+ba:ca;}else
if(z.desc){
aa=z.desc;}else 

aa='JS['+z.count+']';

var da=
{begin:z.begin,
end:z.end,
name:aa,
counters:z.counters,
activeRefTreeIds:o?z.activeRefTreeIds:[]};


da.id=z.id;
da.parentID=z.parentID;
u.push(da);},


w=function y(){
if(t)
v(t.count==1?t.first:t);

t=null;},


x=function y(z,aa){
c('forEachObject')(aa,function(ba,ca){
var da=z[ca]||0;
z[ca]=da+ba;});};



s.sort(function(y,z){
if(y.begin!==z.begin){
return y.begin-z.begin;}else
if(y.end!==z.end){
return y.end-z.end;}else 

return 0;}).

forEach(function(y){


if(k&&y.end<k||
l&&y.begin>l)

return;

if(y.end-y.begin<m){

if(t&&
y.begin-t.end<n){
t.end=y.end;
t.count++;
x(t.counters,y.counters);
if(y.activeRefTreeIds)
t.activeRefTreeIds.
concat(y.activeRefTreeIds);}else{


w();
t=
{begin:y.begin,
end:y.end,
count:1,
first:y,
guard:false,
id:undefined,
parentID:undefined,
counters:{},
activeRefTreeIds:[]};}}else{



w();
v(y);}});


w();
return u;}};



f.exports=i;}),null);

/** shared/perfx/PerfXFlusher.js */





__d('PerfXFlusher',['invariant','Banzai'],(function a(b,c,d,e,f,g,h){





var i='perfx_custom_logger_endpoint',

j=
['perfx_page',
'perfx_page_type',
'lid'];


function k(m){
j.forEach
(function(n){return h
(n in m,
'PerfXFlusher: Field "%s" missing in the PerfX payload',
n);});}




var l=

{flush:function m(n){
k(n);
c('Banzai').post(i,n,{signal:true});},


registerToSendWithBeacon:function m(n){
c('Banzai').registerToSendWithBeacon(i,n);}};



f.exports=l;}),null);

/** shared/service_worker_window/pageLoadedViaSWCache.js */





__d("pageLoadedViaSWCache",[],(function a(b,c,d,e,f,g){

function h(){
return self.__SW_CACHE__===1;}


f.exports=h;}),null);

/** shared/perfx/PerfXLogger.js */





__d('PerfXLogger',['DataAttributeUtils','PerfXFlusher','NavigationMetrics','NavigationTimingHelper','Set','forEachObject','performanceAbsoluteNow','setTimeoutAcrossTransitions','pageLoadedViaSWCache'],(function a(b,c,d,e,f,g){













var h={},
i={},












j=65*1000,

k=
['e2e',
'tti',
'all_pagelets_displayed',
'all_pagelets_loaded'],




l={},





m=



{_listenersSetUp:false,

_setupListeners:function n(){
if(this._listenersSetUp)
return;


this._subscribeToNavigationMetrics();
c('PerfXFlusher').registerToSendWithBeacon
(function(){
var o=[];
c('forEachObject')(h,
function(p,q){
if(!h[q].sent){
var r=this.getPayload(q,'unload fired');
if(r!=null)
o.push(r);}}.


bind(this));

h={};
return o;}.
bind(this));

this._listenersSetUp=true;},








_init:function n(o){
var p=o.lid;
if(p==null)
return;

var q=i[p];
delete i[p];
h[p]=babelHelpers['extends']
({tags:new (c('Set'))(q||[]),
sent:false},
o);

this._registerTimeoutSendback(p);
this._setupListeners();},




initWithNavigationMetricsLID:function n
(o,
p){

var q=c('NavigationMetrics').getFullPageLoadLid();
if(!q)
return;

this._init(babelHelpers['extends']({},
p,
{lid:q}));

if(o&&o.always)
for(var r=0;r<o.always.length;r++)
m.addTag(q,o.always[r]);


if(o&&o.swCache&&c('pageLoadedViaSWCache')())
for(var s=0;s<o.swCache.length;s++)
m.addTag(q,o.swCache[s]);},





init:function n(o,p){
if(p!=null&&o.lid!=null)
l[o.lid]=p;

this._init(o);},



addTag:function n(o,p){
var q=h[o];
if(q){
q.tags.add(p);
return;}

if(!i[o])
i[o]=[];

i[o].push(p);},



addTagWithNavigationMetricsLID:function n(o){
var p=c('NavigationMetrics').getFullPageLoadLid();
if(!p)
return;


m.addTag(p,o);},


_registerTimeoutSendback:function n(o){
var p=this._getFetchStart(o),
q=j;
if(p!=null)
q-=c('performanceAbsoluteNow')()-p;

c('setTimeoutAcrossTransitions')
(function(){return this._uploadPayload(o,'sendback time out');}.bind(this),
q);},



_subscribeToNavigationMetrics:function n(){

c('NavigationMetrics').addRetroactiveListener
(c('NavigationMetrics').Events.EVENT_OCCURRED,
function(o,p){
if(!(o in h))
return;


if(k.includes(p.event)&&Object.prototype.hasOwnProperty.call
(p,'timestamp')&&
p.timestamp!=null){

h[o][p.event]=p.timestamp;
if(p.visibilityState)
h[o][p.event+'_page_visibility']=
p.visibilityState;}});





c('NavigationMetrics').addRetroactiveListener
(c('NavigationMetrics').Events.NAVIGATION_DONE,
function(o,p){

var q=p.serverLID;
if(!(q in h))
return;

k.forEach
(function(event){
if(Object.prototype.hasOwnProperty.call(p,event)&&p[event]!=null)
h[q][event]=p[event];});



this._uploadPayload(q);}.
bind(this));},



_getPayloadWithOffset:function n
(o,
p,
q){

var r=h[o];
if(r==null)
return null;

var s=Object.assign({},r),




t=document.querySelector('[id^="hyperfeed_story_id"]');
if(t){
var u=
JSON.parse(c('DataAttributeUtils').getDataFt(t));
if(u)
s.mf_query_id=u.qid;}



s.tags=Array.from(r.tags);
this._adjustValues(s,p);
s.fetch_start=p;
if(s.perfx_page_type==='normal'){
var v=c('NavigationTimingHelper').getNavTimings();
if(v!=null&&v.navigationStart!=null)
s.nav_to_fetch=p-v.navigationStart;}


if(q!=null)
s.sendback_reason=q;


delete s.sent;
return s;},


_uploadPayload:function n(o,p){
if(h[o]!=null&&!h[o].sent){
var q=this.getPayload(o,p);
if(q!=null){
c('PerfXFlusher').flush(q);
h[o].sent=true;}}},







getPayload:function n(o,p){
return this._getPayloadWithOffset
(o,
this._getFetchStart(o),
p);},



_getFetchStart:function n(o){
if(!(o in h))
return null;

var p=void 0,
q=h[o].perfx_page_type;
if(q=='quickling'){
if(!(o in l)){
return null;}else 

p=c('NavigationTimingHelper').getAsyncRequestTimings(l[o]);}else 


p=c('NavigationTimingHelper').getNavTimings();


if(!p||!p.fetchStart)
return null;

return p.fetchStart;},





_adjustValues:function n(o,p){
k.forEach
(function(q){
if(Object.prototype.hasOwnProperty.call(o,q))
o[q]-=p;});}};






f.exports=m;}),null);
