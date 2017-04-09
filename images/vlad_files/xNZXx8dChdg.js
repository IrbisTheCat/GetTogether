if (self.CavalryLogger) { CavalryLogger.start_js(["qzf+u"]); }

/** __static_js_modules__/artilleryloggertype.js */




__d("ArtilleryLoggerType",[],(function a(b,c,d,e,f,g){

f.exports={PRELIMINARY_UPLOAD:"preliminary",FULL_UPLOAD:"full_upload"};}),

null);

/** js/artillery/ArtillerySWDataCollector.js */





__d('ArtillerySWDataCollector',['Promise','ClientServiceWorkerMessage','ServiceWorkerRegistration','pageLoadedViaSWCache','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g){










var h=5000,




i=null;

function j(l){
if(i!==null){
l(i);
return;}

var m=false,
n=new (c('ClientServiceWorkerMessage'))
('asw-pageTraceDataRequest',
null,
function(o){var p=o.data,q=p.command,r=p.data;
if(m)
return;

m=true;
if(q==='trace'&&r.workerPerf){
i=
{workerPerf:r.workerPerf};

l(i);
return;}});




n.sendViaController();}


var k=
{collect:function l(){
return new (c('Promise'))(function(m,n){
if(!c('pageLoadedViaSWCache')())
c('ServiceWorkerRegistration').isAWorkerActivated().then(function(o){
if(o){

c('setTimeoutAcrossTransitions')(function(){m();},h);}else{

m();
return;}})[

'catch'](m);


j(m);});}};





f.exports=k;}),null);

/** shared/artillery/BrowserProfiler.js */











__d("BrowserProfiler",[],(function a(b,c,d,e,f,g){

var h=

{isEnabled:function i(){
return this.isAvailable();},


isAvailable:function i(){
return !!window.facebookLowLevelProfilerGetData;},


getProfile:function i(j){
window.facebookLowLevelProfilerGetData(function(k){
j(k);});}};




f.exports=h;}),null);

/** shared/performance/getFirstPaint.js */










__d('getFirstPaint',['performance'],(function a(b,c,d,e,f,g){

'use strict';



function h(){
var i=void 0;
if(c('performance')&&c('performance').timing)

if(window.chrome&&window.chrome.loadTimes){
var j=window.chrome.loadTimes();

i=parseInt(j.firstPaintTime*1000,10);}else
if(typeof c('performance').timing.msFirstPaint==='number')
i=c('performance').timing.msFirstPaint;



return i||null;}


f.exports=h;}),null);

/** js/artillery/ArtilleryLogger.js */





__d('ArtilleryLogger',['Arbiter','ArtilleryExperiments','ArtilleryLoggerType','ArtillerySWDataCollector','Banzai','BigPipe','BigPipeExperiments','BrowserProfiler','ImageTimingHelper','Map','Miny','NavigationMetrics','NavigationTimingHelper','PageletEventsHelper','ResourceTimingBootloaderHelper','TimeSlice','TimeSliceHelper','TimeSliceInteraction','forEachObject','pageLoadedViaSWCache','performance','performanceAbsoluteNow','getFirstPaint'],(function a(b,c,d,e,f,g){




























var h=c('BigPipeExperiments').link_images_to_pagelets,
i=
c('ArtilleryExperiments').artillery_static_resources_pagelet_attribution,
j=
c('ArtilleryExperiments').artillery_timeslice_compressed_data,
k=
c('ArtilleryExperiments').artillery_miny_client_payload,

l='generation_time',
m='__user_annotations',
n='serviceworker_trace',
o='serviceworker',
p='first_paint',
q='browser_profile',
r='artillery_logger_data',
s='artillery_browser_perf_data',



t=new (c('Map'))(),



u=new (c('Map'))(),


v=false,


w=new (c('Map'))(),


x=new (c('Map'))();

function y(){
return c('performance')&&
c('performance').timing&&
c('performance').timing.navigationStart;}

function z(na){
if(!t.has(na))
t.set(na,{});}




function aa(na){
na.subscribe(c('BigPipe').Events.tti,function(oa,pa){var qa=pa.ts,ra=pa.lid,sa=pa.metrics;
z(ra);




var ta=t.get(ra);
ta.t_bigpipe_tti=qa;

c('forEachObject')(sa,function(ua,va){
ta[va]=ua;});});}





function ba(na){
na.subscribe(c('BigPipe').Events.displayed,function(oa,pa){var qa=pa.ts,ra=pa.lid;
z(ra);



t.get(ra).t_marker_all_pagelets_displayed=qa;



c('TimeSlice').disablePageHeartbeat();


c('ArtillerySWDataCollector').collect().done(function(sa){
if(sa)
x.set(ra,sa);});});}






function ca(na){
na.subscribe(c('BigPipe').Events.loaded,function(oa,pa){var qa=pa.ts,ra=pa.lid;
z(ra);



t.get(ra).t_marker_bigpipe_e2e=qa;});}





function da
(na,
oa){

if(!na)
return;


var pa=
{clientData:na,
browserPerfData:oa};

c('Banzai').post(s,pa,c('Banzai').VITAL);}



function ea
(na,
oa,
pa){
var qa,
ra=pa;
if(c('BrowserProfiler').isEnabled()&&u.has(ra))(function(){
var sa=u.get(ra);

window.requestIdleCallback(function(){
c('BrowserProfiler').getProfile(function(ta){
da(sa,ta);});});})

();

fa(na,oa,pa);}





function fa
(na,
oa,
pa){
var qa,
ra=c('performanceAbsoluteNow')(),
sa=pa;
if(!u.has(sa)||!t.has(sa))
return;





var ta=t.get(sa);
ta.uploadType=c('ArtilleryLoggerType').FULL_UPLOAD;
ja(ta);
ga();
var ua=c('performanceAbsoluteNow')(),


va=null;
if(na==='normal'){
va=0;
ta.navigation_timing=c('NavigationTimingHelper').getNavTimings();}else
if(na==='quickling'&&c('performance').getEntriesByName){
var wa=c('performance').getEntriesByName(oa);
ta.navigation_timing=
c('NavigationTimingHelper').getAsyncRequestTimings(oa);
if(wa.length)
va=wa[0].startTime;}


if(va!=null&&y()){
ta.resource_timing_bootloader=
c('ResourceTimingBootloaderHelper').getMetrics
(va,
h,
sa);

ta.time_slice=c('TimeSliceHelper').getMetrics
(c('performance').timing.navigationStart+va,
ta.t_onload,
1,
1);

ta.extra_points=c('TimeSliceInteraction').getPageLoadPoints
(c('performance').timing.navigationStart+va,
ua);

ta.interaction_ids=c('TimeSliceInteraction').getInteractionIDsBetween
(c('performance').timing.navigationStart+va,
ua);}



if(j)
ta.time_slice=c('TimeSliceHelper').formatMetricsForTransport
(ta.time_slice);



ta.pagelet_events=c('PageletEventsHelper').getMetrics(sa);
if(!i&&ta.pagelet_events){
if(ta.pagelet_events.display_resources)
delete ta.pagelet_events.display_resources;

if(ta.pagelet_events.all_resources)
delete ta.pagelet_events.all_resources;}


la(sa);
ka(ta);

var xa=ta.resource_timing_bootloader,
ya=[];
c('forEachObject')(xa,function(bb,cb){
ya.push(bb);});

ta.resource_timing_bootloader=ya;


var za=babelHelpers['extends']({},
ta,



u.get(sa).data),


ab=x.get(sa);
if(na==='normal'&&ab!=null)
za[o]=ab.workerPerf;

if(na==='normal')
za[p]=c('getFirstPaint')();




if(w.size){
za[m]={};





w.forEach(function(bb,cb){
za[m][cb]=bb;});}



u['delete'](sa);
t['delete'](sa);

if(k)(function(){
var bb=
['resource_timing_bootloader',
'pagelet_events'],

cb={};
bb.forEach(function(db){
var eb=za[db];
if(eb==null)
return;

var fb=JSON.stringify(eb),
gb=c('Miny').encode(fb);
cb[db]=gb;
delete za[db];});

za.miny=cb;})();


za[l]=
c('performanceAbsoluteNow')()-ra;

c('Banzai').post(r,za,c('Banzai').VITAL);}


function ga(){
ma.recordUserAnnotation
('client_pixel_ratio_10x',
((window.devicePixelRatio||1)*10).toString());

ma.recordUserAnnotation
('is_sw_page_loaded_via_cache',
c('pageLoadedViaSWCache')()?'1':'0');


if(c('performance')&&c('performance').navigation)
ma.recordUserAnnotation
('nav_type',
ha(c('performance').navigation.type));


ma.recordUserAnnotation
('images_preparsed',
c('BigPipeExperiments').preparse_content&&
c('BigPipeExperiments').preparse_content!=='off'?'1':'0');}



function ha(na){
switch(na){
case 0:return 'TYPE_NAVIGATE';
case 1:return 'TYPE_RELOAD';
case 2:return 'TYPE_BACK_FORWARD';
case 255:return 'TYPE_RESERVED';
default:return 'unknown navigation type';}}




function ia(){

c('NavigationMetrics').addListener
(c('NavigationMetrics').Events.NAVIGATION_DONE,
function(na,oa){var pa=oa.pageType,qa=oa.pageURI,ra=oa.serverLID;
ea(pa,qa,ra);});}







function ja(na){var oa;
if(window.CavalryLogger)(function(){
var pa=window.CavalryLogger.getInstance(),
qa=
['t_domcontent',
't_pagelet_cssload_early_resources',
't_tti',
't_onload'];


qa.forEach(function(ra){
if(Object.prototype.hasOwnProperty.call(pa.values,ra))
na[ra]=pa.values[ra];});})

();}



function ka(na){
if(window.CavalryLogger){
var oa=window.CavalryLogger.getInstance();
c('ResourceTimingBootloaderHelper').addBootloaderMetricsToResourceTimings
(na.resource_timing_bootloader,
oa.bootloader_metrics,
true);}}







function la(na){



var oa=t.get(na);
if(y()){
var pa=c('performance').timing.navigationStart,

qa=oa.t_bigpipe_tti,
ra=oa.t_marker_bigpipe_e2e,
sa=c('ImageTimingHelper').getImageTimings(na),ta=


c('ResourceTimingBootloaderHelper').getLastTTIAndE2EImageResponseEnds
(qa,
ra,
sa),ua=ta.TTI,va=ta.E2E;


if(!isNaN(ua)&&ua!==pa)
oa.t_tti_with_images=ua;


if(!isNaN(va)&&va!==pa)
oa.t_marker_bigpipe_e2e_with_images=va;}}




var ma=

{enableProfilingWithClientData:function na
(oa,
pa,
qa){

z(oa);
u.set(oa,
{traceID:pa,
data:qa});


if(v)
return;



v=true;
c('PageletEventsHelper').init();

c('Arbiter').subscribe(c('BigPipe').Events.init,function(ra,sa){var ta=sa.arbiter;
if(ta){
aa(ta);
ba(ta);
ca(ta);}});



ia();},





recordUserAnnotation:function na
(oa,
pa){

var qa=arguments.length<=2||arguments[2]===undefined?true:arguments[2];
if(!qa&&w.has(oa))
return false;


w.set(oa,pa);
return true;}};



f.exports=ma;}),null);

/** js/logging/generated/ServiceWorkerExperimentPerfTypedLogger.js */





__d('ServiceWorkerExperimentPerfTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){
'use strict';



















function h(){
this.clear();}
h.prototype.





log=function(){
c('GeneratedLoggerUtils').log('logger:ServiceWorkerExperimentPerfLoggerConfig',this.$ServiceWorkerExperimentPerfTypedLogger_data,c('Banzai').BASIC);};
h.prototype.







logVital=function(){
c('GeneratedLoggerUtils').log('logger:ServiceWorkerExperimentPerfLoggerConfig',this.$ServiceWorkerExperimentPerfTypedLogger_data,c('Banzai').VITAL);};
h.prototype.




clear=function(){
this.$ServiceWorkerExperimentPerfTypedLogger_data={};
return this;};
h.prototype.






updateData=function(j){








this.$ServiceWorkerExperimentPerfTypedLogger_data=babelHelpers['extends']({},
this.$ServiceWorkerExperimentPerfTypedLogger_data,
j);

return this;};
h.prototype.




setAppCache=function(j){
this.$ServiceWorkerExperimentPerfTypedLogger_data.app_cache=j;
return this;};
h.prototype.




setBodyVisible=function(j){
this.$ServiceWorkerExperimentPerfTypedLogger_data.body_visible=j;
return this;};
h.prototype.




setCsstart=function(j){
this.$ServiceWorkerExperimentPerfTypedLogger_data.csstart=j;
return this;};
h.prototype.




setDisplayDone=function(j){
this.$ServiceWorkerExperimentPerfTypedLogger_data.display_done=j;
return this;};
h.prototype.




setDns=function(j){
this.$ServiceWorkerExperimentPerfTypedLogger_data.dns=j;
return this;};
h.prototype.




setDomComplete=function(j){
this.$ServiceWorkerExperimentPerfTypedLogger_data.dom_complete=j;
return this;};
h.prototype.




setDomContentLoad=function(j){
this.$ServiceWorkerExperimentPerfTypedLogger_data.dom_content_load=j;
return this;};
h.prototype.




setDomInteractiveLoad=function(j){
this.$ServiceWorkerExperimentPerfTypedLogger_data.dom_interactive_load=j;
return this;};
h.prototype.




setDomSetup=function(j){
this.$ServiceWorkerExperimentPerfTypedLogger_data.dom_setup=j;
return this;};
h.prototype.




setE2e=function(j){
this.$ServiceWorkerExperimentPerfTypedLogger_data.e2e=j;
return this;};
h.prototype.




setExperimentType=function(j){
this.$ServiceWorkerExperimentPerfTypedLogger_data.experiment_type=j;
return this;};
h.prototype.




setFetchStartMs=function(j){
this.$ServiceWorkerExperimentPerfTypedLogger_data.fetch_start_ms=j;
return this;};
h.prototype.




setFirstResponse=function(j){
this.$ServiceWorkerExperimentPerfTypedLogger_data.first_response=j;
return this;};
h.prototype.




setHardwareConcurrency=function(j){
this.$ServiceWorkerExperimentPerfTypedLogger_data.hardware_concurrency=j;
return this;};
h.prototype.




setIsSecondLoad=function(j){
this.$ServiceWorkerExperimentPerfTypedLogger_data.is_second_load=j;
return this;};
h.prototype.




setIsSwFnrLoad=function(j){
this.$ServiceWorkerExperimentPerfTypedLogger_data.is_sw_fnr_load=j;
return this;};
h.prototype.




setLastResponse=function(j){
this.$ServiceWorkerExperimentPerfTypedLogger_data.last_response=j;
return this;};
h.prototype.




setLoadedViaSwCache=function(j){
this.$ServiceWorkerExperimentPerfTypedLogger_data.loaded_via_sw_cache=j;
return this;};
h.prototype.




setNavStartMs=function(j){
this.$ServiceWorkerExperimentPerfTypedLogger_data.nav_start_ms=j;
return this;};
h.prototype.




setPageClient=function(j){
this.$ServiceWorkerExperimentPerfTypedLogger_data.page_client=j;
return this;};
h.prototype.




setPath=function(j){
this.$ServiceWorkerExperimentPerfTypedLogger_data.path=j;
return this;};
h.prototype.




setRbbDisplayDone=function(j){
this.$ServiceWorkerExperimentPerfTypedLogger_data.rbb_display_done=j;
return this;};
h.prototype.




setRedirect=function(j){
this.$ServiceWorkerExperimentPerfTypedLogger_data.redirect=j;
return this;};
h.prototype.




setRequest=function(j){
this.$ServiceWorkerExperimentPerfTypedLogger_data.request=j;
return this;};
h.prototype.




setRespond=function(j){
this.$ServiceWorkerExperimentPerfTypedLogger_data.respond=j;
return this;};
h.prototype.




setSubstream0=function(j){
this.$ServiceWorkerExperimentPerfTypedLogger_data.substream_0=j;
return this;};
h.prototype.




setSubstream1=function(j){
this.$ServiceWorkerExperimentPerfTypedLogger_data.substream_1=j;
return this;};
h.prototype.




setSwPageLoadCount=function(j){
this.$ServiceWorkerExperimentPerfTypedLogger_data.sw_page_load_count=j;
return this;};
h.prototype.




setSwStarted=function(j){
this.$ServiceWorkerExperimentPerfTypedLogger_data.sw_started=j;
return this;};
h.prototype.




setTcp=function(j){
this.$ServiceWorkerExperimentPerfTypedLogger_data.tcp=j;
return this;};
h.prototype.




setTti=function(j){
this.$ServiceWorkerExperimentPerfTypedLogger_data.tti=j;
return this;};
h.prototype.




setUnload=function(j){
this.$ServiceWorkerExperimentPerfTypedLogger_data.unload=j;
return this;};
h.prototype.




setVC=function(j){
this.$ServiceWorkerExperimentPerfTypedLogger_data.vc=j;
return this;};










































var i=
{app_cache:true,
body_visible:true,
csstart:true,
display_done:true,
dns:true,
dom_complete:true,
dom_content_load:true,
dom_interactive_load:true,
dom_setup:true,
e2e:true,
experiment_type:true,
fetch_start_ms:true,
first_response:true,
hardware_concurrency:true,
is_second_load:true,
is_sw_fnr_load:true,
last_response:true,
loaded_via_sw_cache:true,
nav_start_ms:true,
page_client:true,
path:true,
rbb_display_done:true,
redirect:true,
request:true,
respond:true,
substream_0:true,
substream_1:true,
sw_page_load_count:true,
sw_started:true,
tcp:true,
tti:true,
unload:true,
vc:true};


f.exports=h;}),null);

/** shared_core/service_workers_shared/ServiceWorkerProfilerTypes.js */





__d('ServiceWorkerProfilerTypes',['Map','TimingAnnotations'],(function a(b,c,d,e,f,g){








var h=
{START:'start',
PARSED:'parsed',
INITIALIZED:'init',
FIRST_EVENT:'firstEvent'},



i=
{FETCH_START:'start',
ROUTE_CONFIG_CACHE_LOOKUP_START:'routeLookupStart',
ROUTE_CONFIG_CACHE_LOOKUP_END:'routeLookupEnd',
BEGIN_RESPONSE:'beginResponse',
CACHE_FLUSH:'cacheFlush',
NETWORK_REQUEST_START:'requestStart',
NETWORK_RESPONSE_START:'responseStart',
NETWORK_RESPONSE_END:'responseEnd',
FETCH_END:'end'};
























f.exports=
{WorkerTiming:h,
FetchTiming:i};}),null);

/** js/service_worker_www/ServiceWorkerURLCleaner.js */





__d('ServiceWorkerURLCleaner',[],(function a(b,c,d,e,f,g){

var h=/sw_fnr_id=\d+&?/,

i=false,
j=false,

k=






{removeRedirectID:function l(){
if(i)
return j;

i=true;

if(location.search&&h.test(location.search)){
j=true;
if(history!==undefined&&typeof history.replaceState==='function'){
var m=location.toString().
replace(h,'').
replace(/\?$/,'');
history.replaceState({},document.title,m);}}



return j;}};



f.exports=k;}),null);

/** js/reactbluebar/bluebar/log/ReactBlueBarPerfLogger.js */





__d('ReactBlueBarPerfLogger',['regeneratorRuntime','Arbiter','ArtillerySWDataCollector','BanzaiScuba','BigPipe','ClientChromeExperimentsData','LogBuffer','NavigationMetrics','PageletEventConstsJS','ServiceWorkerExperimentPerfTypedLogger','ServiceWorkerProfilerTypes','ServiceWorkerURLCleaner','SubscriptionsHandler','pageLoadedViaSWCache','performance'],(function a(b,c,d,e,f,g){

















var h='reactbluebar_perf',



i='navigationStart',
j='fetchStart',
k='domainLookupStart',
l='connectStart',
m='connectEnd',
n='responseStart',
o='responseEnd',
p='domLoading',
q='domInteractive',
r='domContentLoadedEventEnd',
s='domComplete',
t='unloadEventStart',
u='unloadEventEnd',

v=c('ServiceWorkerProfilerTypes').WorkerTiming,
w=c('ServiceWorkerProfilerTypes').FetchTiming,

x={},



















y=function aa(ba){var ca,da=this,
ea,






fa,








ga,







ha;return c('regeneratorRuntime').async(function ia(ja){while(1)switch(ja.prev=ja.next){case 0:ea=new (c('BanzaiScuba'))(h,null,{addBrowserFields:true,addGeoFields:true,addPredictedGeographyFields:true,addRequestFields:true});fa=new (c('ServiceWorkerExperimentPerfTypedLogger'))();fa.setExperimentType(ba.experimentName);fa.setIsSecondLoad(ba.isSecondLoad);fa.setLoadedViaSwCache(c('pageLoadedViaSWCache')());fa.setPageClient(ba.page);ea.addNormal('path',b.location.href);fa.setPath(b.location.href);ga=c('ServiceWorkerURLCleaner').removeRedirectID();fa.setIsSwFnrLoad(ga);ea.addInteger('sw_fnr_load',ga?1:0);ea.addNormal('experiment_type',ba.experimentName);ea.addNormal('page_client',ba.page);ea.addNormal('response_type',c('pageLoadedViaSWCache')()?'sw':'server');ea.addNormal('second_load',ba.isSecondLoad);ha={};
if(c('ClientChromeExperimentsData').shouldShowClientChrome)
ha.client_chrome=1;

ea.addTagset('gk_on',ha);

if(navigator.hardwareConcurrency){
ea.addInteger('hardwareConcurrency',navigator.hardwareConcurrency);
fa.setHardwareConcurrency(navigator.hardwareConcurrency);}


if(!c('performance').timing){ja.next=22;break;}ja.next=22;return c('regeneratorRuntime').awrap(function ka(){var la,ma,
na,oa,



















pa,







































































qa,




ra;return c('regeneratorRuntime').async(function sa(ta){while(1)switch(ta.prev=ta.next){case 0:ma=c('performance').timing;na=ma.navigationStart;oa=ma.fetchStart;fa.setFetchStartMs(oa);fa.setNavStartMs(na);ea.addInteger('tti',ba.tti-oa);ea.addInteger('e2e',ba.e2e-oa);ea.addInteger('display_done',ba.displayDone-oa);if(ba.rbbDisplayDone)ea.addInteger('rbb_display_done',ba.rbbDisplayDone-oa);if(ba.bodyVisible)ea.addInteger('body_visible',ba.bodyVisible-oa);if(typeof b._cstart==='number')ea.addInteger('cstart',b._cstart-oa);ta.next=13;return c('regeneratorRuntime').awrap(c('ArtillerySWDataCollector').collect());case 13:pa=ta.sent;if(pa)(function(){var ua=pa.workerPerf.workerTimings,va=pa.workerPerf.fetchTimings,wa=pa.workerPerf.annotations,xa={await_route_config_cache:[w.ROUTE_CONFIG_CACHE_LOOKUP_START,w.ROUTE_CONFIG_CACHE_LOOKUP_END],flush_cache_content:[w.BEGIN_RESPONSE,w.CACHE_FLUSH],await_server_response:[w.CACHE_FLUSH,w.NETWORK_RESPONSE_START],flush_server_content:[w.NETWORK_RESPONSE_START,w.NETWORK_RESPONSE_END]};Object.keys(xa).forEach(function(ab){var bb=xa[ab],cb=va[bb[0]],db=va[bb[1]];if(!cb||!db)return;ea.addInteger(ab+'.begin',cb.ts-na);ea.addInteger(ab+'.end',db.ts-na);ea.addInteger(ab+'.total',db.ts-cb.ts);});var ya=ua[v.START];if(ya&&ya.ts>=na){ea.addInteger('sw_started',1);fa.setSwStarted(true);}else if(ya){ea.addInteger('sw_started',0);fa.setSwStarted(false);}var za=Number(wa.stringProps.pagesLoadViaSWCount);if(!isNaN(za)){ea.addInteger('sw_page_load_count',za);fa.setSwPageLoadCount(za);}})();ea.addInteger('tti_navs',ba.tti-na);fa.setTti(ba.tti-na);ea.addInteger('e2e_navs',ba.e2e-na);fa.setE2e(ba.e2e-na);ea.addInteger('display_done_navs',ba.displayDone-na);fa.setDisplayDone(ba.displayDone-na);if(ba.rbbDisplayDone){qa=ba.rbbDisplayDone;ea.addInteger('rbb_display_done_navs',qa-na);fa.setRbbDisplayDone(qa-na);}if(ba.bodyVisible){ra=ba.bodyVisible;
ea.addInteger('body_visible_navs',ra-na);
fa.setBodyVisible(ra-na);}

if(typeof b._cstart==='number'){
ea.addInteger('cstart_navs',b._cstart-na);
fa.setCsstart(b._cstart-na);}


Object.keys(x).forEach(function(ua){
ea.addInteger('pagelet_arrive_'+ua+'_navs',x[ua]-na);

if(ua==='first_response'||
ua==='last_response'||
ua==='substream_0'||
ua==='substream_1'){

var va={};
va[ua]=x[ua]-na;
fa.updateData(va);}});






[{name:'redirect',start:i,end:j},
{name:'app_cache',start:j,end:k},
{name:'dns',start:k,end:l},
{name:'tcp',start:l,end:m},
{name:'request',start:m,end:n},
{name:'respond',start:n,end:o},
{name:'dom_setup',start:n,end:p},
{name:'dom_interactive_load',start:p,end:q},
{name:'dom_content_load',start:q,end:r},
{name:'dom_complete',start:r,end:s},
{name:'unload',start:t,end:u}].
forEach(function(ua){var va=ua.name,wa=ua.start,xa=ua.end,
ya=c('performance').timing[wa]||0,
za=c('performance').timing[xa]||0;

if(za>=ya){
ea.addInteger('perf_timing_'+va,za-ya);
var ab={};
ab[va]=za-ya;
fa.updateData(ab);}});

case 26:case 'end':return ta.stop();}},null,da);}());case 22:


ea.post();
fa.log();case 24:case 'end':return ja.stop();}},null,this);},








z=

{init:function aa(ba){



var ca=ba.isSecondLoad,da=ba.experimentName,ea=ba.waitForRBB,
fa=null,

ga=new (c('SubscriptionsHandler'))();

ga.addSubscriptions
(c('Arbiter').subscribe('sw/bodyVisible',function(ha,ia){var ja=ia.relativeTime;
if(c('performance').timing)
fa=ja+c('performance').timing.navigationStart;}));




ga.addSubscriptions
(c('Arbiter').subscribe(c('BigPipe').Events.init,function(ha,ia){var ja=ia.arbiter,
ka=ja.subscribe
('pagelet_event',
function(la,ma){var event=ma.event,na=ma.id,oa=ma.ts;

if(event!==c('PageletEventConstsJS').ARRIVE_START||
typeof oa!=='number')

return;


var pa=
['first_response',
'last_response',
'pagelet_welcome_box',
'pagelet_dock',
'pagelet_navigation',
'pagelet_composer',
'substream_0',
'substream_1',
'pagelet_ego_pane',
'async_data_preloader_ReactBlueBarJewelsDataPreloader',
{regex:/^topnews_main_stream_(\d+)$/,name:'topnews_main_stream'},


{regex:/^hyperfeed_story_id_(\d+)$/,name:'hyperfeed_story'}],


qa=null;
for(var ra=pa,sa=Array.isArray(ra),ta=0,ra=sa?ra:ra[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var ua;if(sa){if(ta>=ra.length)break;ua=ra[ta++];}else{ta=ra.next();if(ta.done)break;ua=ta.value;}var va=ua;
if(typeof va==='string'){
if(va===na){
qa=va;
break;}}else 


if(va.regex.test(na)){
qa=va.name;
break;}}




if(qa&&!x[qa])
x[qa]=oa;});




ga.addSubscriptions(ka);}));




ga.addSubscriptions(c('NavigationMetrics').addRetroactiveListener
(c('NavigationMetrics').Events.NAVIGATION_DONE,
function(ha,ia){var ja=ia.page,ka=ia.pageType,la=ia.tti,ma=ia.e2e,na=ia.all_pagelets_displayed;





ka=ka||'normal';

if(ka!=='normal')
return;


ga.release();

var oa=function pa(qa){var ra=qa.displayDone;
y
({bodyVisible:fa,
rbbDisplayDone:ra,
displayDone:na,
e2e:ma,
page:ja,
pageType:ka,
tti:la,
isSecondLoad:ca,
experimentName:da});};



if(ea){
c('LogBuffer').tail('reactbluebar_perf',oa);}else 

oa({displayDone:null});}));}};






f.exports=z;}),null);
