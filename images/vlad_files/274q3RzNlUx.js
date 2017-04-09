if (self.CavalryLogger) { CavalryLogger.start_js(["zMCXU"]); }

/** __static_js_modules__/searchentitymoduleserverconstants.js */




__d("SearchEntityModuleServerConstants",[],(function a(b,c,d,e,f,g){

f.exports={TYPE_TO_BROWSE_TYPE:{user:"browse_type_user",page:"browse_type_page",group:"browse_type_group",application:"browse_type_application",place:"browse_type_place",event:"browse_type_event"},TYPE_TO_SERP_PATH:{user:"\/search\/people\/",page:"\/search\/pages\/",group:"\/search\/groups\/",application:"\/search\/apps\/",place:"\/search\/places\/",event:"\/search\/events\/"},RESULT_TYPE_TO_MODULE_ROLE:{user:"ENTITY_USER",page:"ENTITY_PAGES",group:"ENTITY_GROUPS",application:"ENTITY_APPS",place:"ENTITY_PLACES",event:"ENTITY_EVENTS"},TYPE_TO_DISPLAY_STYLE:{user:"user_row",page:"page_row",group:"group_row",application:"app_row",place:"place_row",event:"event_row"},WWW_GRAPH_SEARCH_RESULTS_TRACKABLE_CODE:"21.",SEE_MORE_LOGGING:{MODULE_FOOTER_ITEM_TYPE:"module_footer",MODULE_HEADER_ITEM_TYPE:"module_header"},MODULE_STYLE:{SMALL:"small",MEDIUM:"medium",LARGE:"large",XLARGE:"xlarge"},BROWSE_RESULTS_PAGE_REF:"br_rs"};}),

null);

/** www/__virtual__/x/XBrowseLoggerController.js */



__d("XBrowseLoggerController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/browse\/logger\/",{data:{type:"HackType",required:true}});}),

null);

/** js/browse/BrowseLogger.js */




__d('BrowseLogger',['AsyncRequest','Banzai','mapObject','Run','XBrowseLoggerController'],(function a(b,c,d,e,f,g){







var h='browse',
i='browse_aggr',

j=null,

k={},

l={},

m=function v(w){
if(w==null)
return 'undefined';


var x=w.tagName.toLowerCase(),
y=w.id,
z=w.className;

if(y)
x+='#'+y;


if(z)
x+='.'+z;


return x;};


function n(){
j=null;
k={};
l={};}


function o(v){
return Object.assign
(v,
{clientSessionID:j});}



function p(v){
c('Banzai').post(h,o(v));}


function q(v){
var w=c('XBrowseLoggerController').getURIBuilder().
setHackType('data',o(v)).
getURI();
new (c('AsyncRequest'))().
setURI(w).
send();}


function r(){
if(j===null)
return;

l.aggregated=k;



c('Banzai').post(i,o(l));
n();}


function s(v){
k[v]=(k[v]||0)+1;}


function t(v){
Object.assign(l,v);}


c('Run').onUnload(r);

var u=






{newSession:function v(){
r();
j=Math.random().toString();
if(!l.start_time)


l.start_time=Math.round(Date.now()/1000);},






logResultClick:function v
(w,
x,
y,
z,
aa){

var ba=arguments.length<=5||arguments[5]===undefined?null:arguments[5],
ca=
{action:'result_click',
click_type:w.ct||'result',
section:w.section||'unknown',
id:w.id||-1,
path:w.path||'unknown',
rank:w.rank||0,
referrer:w.referrer||'unknown',
result_type:w.result_type||'unknown',
session_id:w.session_id||0,
query_time:w.query_time||null,
abtest_version:w.abtest_version||'NONE',
abtest_params:w.abtest_params||null,
typeahead_sid:w.typeahead_sid||'',
source_module_role:w.source_module_role||'',
result_title:w.result_title||'unknown',
result_href:w.result_href||'unknown',
result_semantic:w.result_semantic||'unknown',
type:w.experience_type||'unknown',
click_action:y||null,
sub_id:w.sub_id||null,
owner_id:w.owner_id||null,
browse_location:w.browse_location||'unknown',
query_data:w.query_data||'unknown',
is_headline:w.is_headline||false,
qid:x.qid||0,
mf_story_key:x.mf_story_key||0,
module:w.module||'NONE',
view:w.view||null,
clicked_href:aa||null,
bt_key:ba};

if(x.tn)
ca.tn=x.tn;

if(w.cst)
ca.click_subtype=w.cst;

s('result_click_'+ca.click_type);
t
({path:ca.path,
referrer:ca.referrer,
result_type:ca.result_type,
session_id:ca.session_id,
abtest_version:ca.abtest_version,
abtest_params:ca.abtest_params,
typeahead_sid:ca.typeahead_sid});

if(ba){
q(ca);}else 

p(ca);




if(!w.id&&
w.browse_location!=='browse_location:mf_trending'&&
!ba)
p
({action:'logging_error',
click_action:y,
click_type:ca.click_type,
attributes:JSON.stringify(w),
element:c('mapObject')

({srcElement:z.srcElement,
target:z.target,
toElement:z.toElement},

m),

event:
{button:z.button,
clientX:z.clientX,
clientY:z.clientY,
ctrlKey:z.ctrlKey,
layerX:z.layerX,
layerY:z.layerY,
offsetX:z.offsetX,
offsetY:z.offsetY,
pageX:z.pageX,
pageY:z.pageY,
screenX:z.screenX,
screenY:z.screenY,
shiftKey:z.shiftKey,
type:z.type,
x:z.x,
y:z.y}});},





logControlsClick:function v(w,x){
var y=
{action:'controls_click',
click_type:x,
path:w.path||'unknown',
referrer:w.referrer||'unknown',
session_id:w.session_id||0,
query_time:w.query_time,
filter_name:w.name||'unknown',
typeahead_sid:w.typeahead_sid||'',
result_type:w.result_type||'unknown',
type:w.experience_type||'unknown'};

if(w.cst)
y.click_subtype=w.cst;

s('controls_click_'+x);
t
({path:y.path,
referrer:y.referrer,
session_id:y.session_id,
typeahead_sid:y.typeahead_sid});

p(y);},


logResultHover:function v
(w,
x){

var y=arguments.length<=2||arguments[2]===undefined?null:arguments[2],
z=
{action:'result_hover',
id:w.id||0,
path:w.path||'unknown',
rank:w.rank||null,
result_type:w.result_type||'unknown',
session_id:w.session_id||0,
query_time:w.query_time||null,
time_elapsed:x||null,
typeahead_sid:w.typeahead_sid||0,
type:w.experience_type||'unknown',
module:w.module||'NONE',
view:w.view||null,
bt_key:y};

s('result_hover');
t
({path:z.path,
session_id:z.session_id,
typeahead_sid:z.typeahead_sid});

if(y){
q(z);}else 

p(z);},



logScroll:function v(w,x,y,z){
var aa=
{action:'scroll',
encoded_query:w,
fragments:x,
position:y,
session_id:z||0};

p(aa);},


logNUXStep:function v(w){
var x=
{action:'nux_step',
step:w};

p(x);},


logDisambiguationImpression:function v(w,x,y,z,aa){
var ba=
{action:'disambiguation_imp',
ids:z,
name:w,
path:y,
type:x,
typeahead_sid:aa};

p(ba);},


logDisambiguationClick:function v(w,x,y,z,aa,ba){
var ca=
{action:'disambiguation_clk',
id:aa,
index:z,
name:w,
path:y,
type:x,
typeahead_sid:ba};

p(ca);},


logDYMLinkClick:function v(w,x,y,z){
var aa=
{action:'dym_click',
path:w.path||'unknown',
referrer:w.referrer||'unknown',
session_id:w.session_id||0,
query_time:w.query_time,
abtest_version:w.abtest_version||'NONE',
abtest_params:w.abtest_params,
typeahead_sid:w.typeahead_sid||'',
type:w.experience_type||'unknown',
click_action:y,
sub_id:w.sub_id,
owner_id:w.owner_id,
browse_location:w.browse_location||'unknown',
query_data:w.query_data||'unknown',
module:w.module||'NONE',
view:w.view,
dym_confidence:w.dym_confidence||'NONE',
dym_query:w.dym_query||'',
dym_correction:w.dym_correction||'',
dym_clicked:w.dym_clicked||''};

p(aa);}};



f.exports=u;}),null);

/** js/browse/BrowseClickLogger.js */




__d('BrowseClickLogger',['BrowseClientEventLogger','BrowseLogger','DOMQuery','Event','Parent','collectDataAttributes'],(function a(b,c,d,e,f,g){

'use strict';








function h(j,k){
var l=j.target,
m=c('collectDataAttributes')
(l,
['bt','ft','gt'],
['data-bt-key']);

if(m.bt&&m.bt.path)
m.bt.path+=document.location.search;

m.gt.tn=m.ft.tn;
m.gt.click_type=m.bt.ct||'result';
var n=c('Parent').byAttribute(l,'href'),
o=n!=null?
n.href:
null;
m.gt.clicked_href=o;
c('BrowseClientEventLogger').logClick(m);
if(c('DOMQuery').scry(l,'^.recourse-link').length>0){
if(k==='left_click')
c('BrowseLogger').logDYMLinkClick
(m.bt,
m.ft,
k,
j);}else 


c('BrowseLogger').logResultClick
(m.bt,
m.ft,
k,
j,
o,
m.normal['data-bt-key']);}




var i=

{init:function j(k){
c('Event').listen(k,'mousedown',function(l){
var m=l.button===2||l.which===3?
'right_click':
'left_click';
if(l.shiftKey)m+='_shift';
if(l.altKey)m+='_alt';
if(l.metaKey||l.ctrlKey)m+='_ctrl';
h(l,m);}.
bind(this));},


logClick:h};


f.exports=i;}),null);

/** js/browse/BrowseMouseSpeedTracker.js */




__d('BrowseMouseSpeedTracker',['Event','removeFromArray'],(function a(b,c,d,e,f,g){





var h=50,

i=null,
j=null,
k=[],


l={x:0,y:0},
m=0,
n=
[{x:0,y:0},
{x:0,y:0}];



function o(){
n[m].x=l.x;
n[m].y=l.y;
m=(m+1)%2;}



function p(){
var v=n[0].x-n[1].x,
w=n[0].y-n[1].y;
return Math.sqrt(v*v+w*w)*(1000/h);}



function q(){
if(i)
return;




j=c('Event').listen(document.body,'mousemove',function(event){
l.x=event.pageX||event.screenX;
l.y=event.pageY||event.screenY;});



i=window.setInterval(function(){
o();
s(p());},
h);}



function r(){
if(i){
window.clearInterval(i);
j.remove();
i=null;}}




function s(v){
k.forEach(function(w){
if(v<w.velocity){
w.callback(v);
t(w);}});}





function t(v){
c('removeFromArray')(k,v);
k.length||r();}


var u=
{addTrigger:function v(w,x){
var y=
{velocity:w,
callback:x};


q();
k.push(y);


return {remove:t.bind(null,y)};}};




f.exports=u;}),null);

/** js/browse/BrowseRunOnLeave.js */






__d('BrowseRunOnLeave',['Run'],(function a(b,c,d,e,f,g){



var h=

{register:function i(j){
c('Run').onLeave(j);
this.handlers=(this.handlers||[]).concat(j);},


cleanup:function i(){
this.handlers.forEach(function(j){return j.call(null,{});});
this.handlers=[];}};




f.exports=h;}),null);

/** js/browse/BrowseMouse.js */




__d('BrowseMouse',['cx','Event','BrowseMouseSpeedTracker','CSS','DOM','DataStore','Parent','BrowseRunOnLeave','Toggler','removeFromArray'],(function a(b,c,d,e,f,g,h){














var i=500,
j="_3u0",
k="_3u1",

l=null,
m=[];


function n(v){
return c('Parent').byClass(v,k);}



function o(v){
return 'browse-'+(v?'over':'out');}



function p(v){
return c('CSS').addClass(v,k);}



function q(v,w,x,y){
var z=n(w);

if(!y)
m.push
({element:w,
callback:x});



if(z){
var aa=o(v),
ba=c('DataStore').get(z,aa,[]);
c('DataStore').set(z,aa,ba.concat(x));
return z;}}








function r(v,w){
if(v){
c('CSS').conditionClass(v,j,w);
var x=c('DataStore').get(v,o(w));
x&&x.forEach(function(y){
y();});}}




function s(v){
var w=v.element;

['browse-over','browse-out'].forEach(function(x){
var y=c('DataStore').get(w,x);

if(y){
c('removeFromArray')(y,v.callback);
y.length||c('DataStore').remove(w,x);}});}






function t(){
var v=null;

if(l)
return;


l=c('Event').listen(document.body,'mouseover',function(w){
var x=n(w.getTarget());
if(!x||x==v)
return;


var y=null,
z=null,
aa=false;
v=x;

var ba=c('BrowseMouseSpeedTracker').addTrigger(i,function(){
r(x,true);
aa=true;}),


ca=function fa(){
ba.remove();
ea.remove();
y&&y.remove();
z&&z.unsubscribe();},


da=function fa(){
ca();
aa&&r(x,false);
v=null;},


ea=c('Event').listen(x,'mouseleave',function(){
var fa=c('Toggler').getActive();
if(fa&&c('DOM').contains(x,fa)){
z=c('Toggler').subscribe('hide',da);
y=c('Event').listen(x,'mouseover',ca);}else 

da();});});




c('BrowseRunOnLeave').register(function(){

while(m.length)
s(m.pop());});}




var u=
{init:t,
makeTarget:p,
onMouseOver:q.bind(null,true),
onMouseOut:q.bind(null,false),
removeListeners:s};


f.exports=u;}),null);

/** js/browse/BrowsePerfLogger.js */




__d('BrowsePerfLogger',['Arbiter','Banzai','collectDataAttributes','DOM','isEmpty','PageEvents'],(function a(b,c,d,e,f,g){








var h='browse_perf',
i='#browse:independent:modules:pagelet',
j='#search_marker+empty:independent_module',
k=
'pagelet_loader_browse:independent:modules:pagelet',
l=false,
m=false,

n=

{init:function o(p,q,r){
if(!b.CavalryLogger||
b.CavalryLogger.getInstance().lid!==r||
!p)
return;

l=null;
m=null;
var s=
{is_quickling:q,
pagelet_id:p};

if(!q){
Object.assign(s,
{arbiter:c('Arbiter'),
event:c('PageEvents').BIGPIPE_ONLOAD});

this.setupOnloadHook(s);
return;}

c('Arbiter').subscribe('BigPipe/init',function(event,t){
if(!t.arbiter)
return;

Object.assign(s,
{arbiter:t.arbiter,
event:c('PageEvents').AJAXPIPE_ONLOAD});

setTimeout(function(){
this.setupOnloadHook(s);}.
bind(this),0);}.
bind(this));},


setTimeout:function o(){
m=true;},


setupOnloadHook:function o(p){
return p.arbiter.subscribeOnce(p.event,function(q){
if(l)
return;

l=true;
var r=b.CavalryLogger.getInstance(),
s=r.events[p.pagelet_id]||[],
t=this.getNavStart(p.is_quickling),
u=document.getElementById('initial_browse_result'),
v=u===null?{}:
c('collectDataAttributes')(u.children[0],['bt']).bt,

w=r.values.t_tti-window._cstart,
x=
t?r.values.t_tti-t:0,



y=
!r.values.t_hooks||
!r.values.t_onload||
!r.values.t_tti||
!t||
!window._cstart,

z=null;
if(u===null){
z='exception';}else
if(m){
z='timeout';}else
if(c('isEmpty')(v))
z='no_results';



var aa=
c('DOM').scry(document,i).length&&
c('DOM').scry(document,j).length,
ba=null;

if(!aa&&
c('DOM').scry(document,i).length&&
r.events[k])

ba=
r.events[k].display;

var ca=
r.events.pagelet_loader_initial_browse_result?
r.events.pagelet_loader_initial_browse_result.display:
null,
da=ba?
Math.min(ba,ca):
ca,

ea=
{abnormal:y?1:null,
arrive:s.arrive||0,
browse_sid:v.session_id,
css_done:s.css||0,
display:s.display||0,
experience_type:v.experience_type,
failure:z,
is_detailed:r.is_detailed_profiler?1:0,
js_done:s.jsdone||0,
js_start:s.jsstart||0,
navigation_start:t,
onload:r.values.t_onload||0,
pagelet_id:p.pagelet_id,
path:v.path,
quickling:p.is_quickling?1:0,
raw_tti:r.values.t_tti,
result_type:v.result_type,
tti:Math.floor(w),
tti_full:Math.floor(x),
typeahead_sid:v.typeahead_sid,
window_cstart:window._cstart,
empty_independent_module:aa?1:0,
independent_module_tti:Math.floor(ba),
browse_result_tti:Math.floor(ca),
top_module_tti:Math.floor(da)},



fa=window.performance||window.msPerformance;
if(!p.is_quickling&&fa.timing){
fa=fa.timing;
Object.assign(ea,
{wt_connect_end:fa.connectEnd,
wt_connect_start:fa.connectStart,
wt_domain_lookup_end:fa.domainLookupEnd,
wt_domain_lookup_start:fa.domainLookupStart,
wt_load_event_start:fa.loadEventStart,
wt_navigation_start:fa.navigationStart,
wt_request_start:fa.requestStart,
wt_response_end:fa.responseEnd,
wt_response_start:fa.responseStart});}


c('Banzai').post(h,ea,{delay:0,retry:true});}.
bind(this));},
















getNavStart:function o(p){
if(p)
return window.ExitTime;

var q=window.performance||window.msPerformance;
if(!q||!q.timing)
return;

return q.timing.navigationStart;}};



f.exports=n;}),null);

/** js/browse/BrowseViewportTracking.js */







__d('BrowseViewportTracking',['csx','$','Arbiter','BrowseClientEventLogger','DOM','StreamViewportTracking','ge','viewportTrackingBuilder'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;
























function k
(n){

var o=void 0,
p=void 0,
q=void 0;

function r(){
if(!o)
o=c('ge')('browse:independent:modules:pagelet');

return o;}


function s(){
if(!p)
p=c('$')('initial_browse_result');

return p;}


function t(){
if(!q)
q=c('ge')('bootstrap_entity_module');

return q;}


var u=c('StreamViewportTracking').getBehavior
(n,
c('$')('initial_browse_result'),
null);



return {getDataFromConfig:function v(w,x){
x.isTimetrackingEnabled=w.is_timetracking_enabled;
x.vpvdDebug=w.vpvd_debug;
x.trackingHooks=w.tracking_hooks;},


getAllStories:function v(){
var w=r(),
x=[];
if(w!=null)
x=c('DOM').scry
(r(),
"._401d");



var y=c('DOM').scry
(s(),
"._401d"),


z=t(),
aa=[];
if(z)
aa=c('DOM').scry
(z,
"._401d");





var ba=aa.concat(x).concat(y);
return ba;},


getStream:u.getStream,

getStoryID:function v(w){
var x=w.getAttribute('data-gt');
if(x==null)
return null;

var y=JSON.parse(x);
if(y&&y.xt)
return String(JSON.parse(y.xt.substring(3)).raw_id);


return null;},


getDataToLog:u.getDataToLog};}

i=babelHelpers.inherits

(l,c('StreamViewportTracking'));j=i&&i.prototype;function l(){var n,o;for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=j.constructor).call.apply(n,[this].concat(q)),this.











updateOnPageletLoad=function(){
this.invalidateAllStoriesCache();
this.updateTimeTrackingData(false,'pagelet_load');}.
bind(this),o;}l.prototype.init=function(n){j.init.call(this,n);this.subscriptions.addSubscriptions(c('Arbiter').subscribe('BrowseScrollingPageletLoaded',this.updateOnPageletLoad));};l.prototype.

getTimetrackingDataToLog=function(n){
var o=j.getTimetrackingDataToLog.call(this,n),
p=n.story;
if(p==null)
return o;

o.log_type='vpvd';
var q=p.getAttribute('data-gt');
if(q==null)
return o;

var r=JSON.parse(q);
if(!r)
return o;

o.xt=r.xt;
return o;};
l.prototype.




sendDataToLog=
function(n,
o,
p,
q){

if(!o.xt)
return;


if(o.log_type='vpvd'){
o.event='vpvd';
c('BrowseClientEventLogger').maybeLogVisiblityEvent(o);}};

l.prototype.

cleanup=function(){
m.clearSingleton();
j.cleanup.call(this);};



var m=c('viewportTrackingBuilder')
(function(n){
var o=new l(k(n));
o.init(n);
return o;});









m.init=m.singleton.bind(m);

f.exports=m;}),null);
