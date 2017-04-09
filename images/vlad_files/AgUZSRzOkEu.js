if (self.CavalryLogger) { CavalryLogger.start_js(["N9xzU"]); }

/** __static_js_modules__/xjavascriptlogviewsitecategory.js */




__d("XJavaScriptLogviewSiteCategory",[],(function a(b,c,d,e,f,g){

f.exports={MBASIC:"m_basic",MTOUCH:"m_touch",WWW:"www"};}),

null);

/** www/__virtual__/x/XAYMTPanelSaveSettingsController.js */



__d("XAYMTPanelSaveSettingsController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/ads\/growth\/aymt\/homepage_panel\/save_settings\/",{time_range:{type:"Enum",enumType:1},ad_account_id:{type:"Int"},promoted_object:{type:"Int"},collapsed:{type:"Int"},dismiss_nux:{type:"Bool",defaultValue:false},flash_insights_dismiss_nux:{type:"Bool",defaultValue:false},refresh_panel:{type:"Bool",defaultValue:false}});}),

null);

/** js/ads/growth/aymt/channels/homepage_panel/AdvertiserHomePagelet.js */





__d('AdvertiserHomePagelet',['AsyncRequest','DOM','URI','XAYMTPanelSaveSettingsController','$'],(function a(b,c,d,e,f,g){








var h=

{init:function i(j,k){
var l=c('XAYMTPanelSaveSettingsController').getURIBuilder().
setBool('refresh_panel',true).
getURI();
l.addQueryData(c('URI').getRequestURI().getQueryData());
new (c('AsyncRequest'))().
setURI(l).
setStatusElement(k).
setErrorHandler(function(m){
c('DOM').setContent(c('$')('pagelet_advertiser_panel_content'),'');}).

send();}};



f.exports=h;}),null);

/** js/feed/logging/FeedImageErrorEventLogger.js */





__d('FeedImageErrorEventLogger',['csx','Arbiter','BanzaiLogger','Bootloader','DataStore','DOMQuery','Event','Parent','Run','ge','getCrossOriginTransport'],(function a(b,c,d,e,f,g,h){

'use strict';














var i=2,

j=false,
k=false,
l=false,
m=false,
n=0,
o=0,
p=0,
q=0;

function r(w){
c('BanzaiLogger').log('WebFeedImageErrorEventLoggerConfig',w);}


function s(w){

return (w&&
w.nodeName==='IMG'&&
c('Parent').bySelector(w,"._5jmm"));}



function t(w){var x;
if(s(w.target)){var x=function(){var y,

z=w.target,
aa=z.src;

if(l&&!c('DataStore').get(z,'retry')){(function(){

p++;

c('DataStore').set(z,'retry',true);
var ba=c('Event').listen(z,'load',function(){
ba.remove();
q++;});


z.src=aa;})();}else{



o++;


if(n>=i)
return {v:void 0};

n++;

if(k){
c('Bootloader').loadModules(["XHRRequest"],function(ba){
if(ba)
new ba(aa).
setTransportBuilder(c('getCrossOriginTransport')).
setMethod('GET').
setResponseHandler(function(){
r
({error_type:'SUCCESS',
src:aa});}).


setErrorHandler(function(ca){
if(ca){
var da=ca.errorMsg;
if(da.indexOf('id="facebook"')>0)

da='FB ERROR PAGE';

r
({error_code:ca.errorCode,
error_type:ca.errorType,
error_message:da,
src:aa});}}).



setTimeoutHandler(function(ca){
r
({src:ca,
error_type:'TIMEOUT'});}).


send();},

'FeedImageErrorEventLogger');}else 

r({src:aa});}}

();if(typeof x==="object")return x.v;}}



function u(){
var w=m?
'IMAGE_LOAD_SUMMARY':
'IMAGE_LOAD_ERROR_COUNT';


if(m||
o>0||
p>0){

var x=0,
y=c('ge')('mainContainer');
if(y)
x=c('DOMQuery').scry
(y,
"._5jmm img").
length;


r
({event_name:w,
error_count:o,
retry_attempt_count:p,
retry_success_count:q,
total_image_count:x});


o=0;
p=0;
q=0;}}







var v=

{init:function w
(x){





if(j)
return;


k=x&&x.getDetail;
l=x&&x.allowRetries;
m=x&&x.alwaysLogCounts;
j=true;

window.addEventListener('error',t,true);

c('Run').onUnload(function(){return u();});
c('Arbiter').subscribe
(['pre_page_transition'],
function(y,z){return u();});}};




f.exports=v;}),null);

/** shared/error/AbstractErrorSignal.js */





__d('AbstractErrorSignal',['invariant','BanzaiODS','SessionName','ScriptPath','SiteData'],(function a(b,c,d,e,f,g,h){

'use strict';








var i=true;


function j(){

this.constructor!==j||h(0,
'AbstractErrorSignal: Can not instantiate abstract class. Please create'+
'a subclass and try again.');}

j.prototype.
logJSError=function(k,l){
l=l||{};
l.svn_rev=c('SiteData').revision;
l.push_phase=c('SiteData').push_phase;
l.script_path=c('ScriptPath').getScriptPath();
l.extra=l.extra||{};

l.extra.hrm=c('SiteData').be_mode;
var m=l.extra.type||'error';
if(i&&k==='onerror'&&m==='error'){
l.extra.extra=l.extra.extra||[];
l.extra.extra.push('first_error');
i=false;}

var n=(c('SessionName').getName()||'-')+'/-';
this.sendErrorSignal
('javascript_error',
JSON.stringify({c:k,a:n,m:l}));};

j.prototype.
sendBeaconErrorSignal=function(){
var k='beacon_error',
l=(c('SessionName').getName()||'-')+'/-',
m={};
m.error=k;
m.svn_rev=c('SiteData').revision;
m.push_phase=c('SiteData').push_phase;
m.script_path=c('ScriptPath').getScriptPath();
m.extra=
{message:k,
type:'info'};

this.sendErrorSignal
(k,
JSON.stringify({c:k,a:l,m:m}));};

j.prototype.
sendErrorSignal=function(k,l){
this.performCounterLogging(k);
switch(k){
case 'async_error':var m=
JSON.parse(l),n=m.err_code,o=m.path;

if(n in {'1004':1,'12029':1,'12031':1,'12152':1}&&
o.indexOf('scribe_endpoint.php')==-1)

this.performSignalLogging(k,l);

break;

default:this.performSignalLogging(k,l);}};

j.prototype.
performCounterLogging=function(k){
c('BanzaiODS').bumpEntityKey
('js_error_reporting','error_signal.category.'+
k);

switch(k){
case 'beacon_error':
c('BanzaiODS').bumpEntityKey
('js_error_reporting',
'beacon_error_signal.sent');

break;
case 'javascript_error':
c('BanzaiODS').bumpEntityKey('js_error_reporting','error_signal.sent');
break;}};

j.prototype.
performSignalLogging=function(k,l){

h(0,
'Please provide an implementation of the method '+
'`performSignalLogging()` in your subclass.');};




f.exports=j;}),null);

/** js/modules/ErrorSignal.js */





__d('ErrorSignal',['AbstractErrorSignal','AsyncRequest','AsyncSignal','BanzaiODS','ErrorSignalConfig','XJavaScriptLogviewSiteCategory','emptyFunction'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits










(j,c('AbstractErrorSignal'));i=h&&h.prototype;j.prototype.
performCounterLogging=function(l){'use strict';
i.performCounterLogging.call(this,l);
switch(l){
case 'javascript_error':
c('BanzaiODS').bumpEntityKey
('js_error_reporting','error_signal.'+
c('XJavaScriptLogviewSiteCategory').WWW+'.sent');

break;}};

j.prototype.
performSignalLogging=function(l,m){'use strict';




switch(l){

case 'async_error':
new (c('AsyncRequest'))().
setURI(c('ErrorSignalConfig').uri).
setData({c:'async_error',m:m}).
setMethod('GET').
setReadOnly(true).
setOption('suppressEvaluation',true).
setOption('suppressErrorAlerts',true).
setHandler(c('emptyFunction')).
setErrorHandler(c('emptyFunction')).
send(true);
break;

default:new (c('AsyncSignal'))(c('ErrorSignalConfig').uri,{c:l,m:m}).send();
break;}};

function j(){'use strict';h.apply(this,arguments);}


var k=new j();

f.exports=k;


b.ErrorSignal=k;}),null);

/** js/feed/logging/FeedLoadEventWWWLogger.js */





__d('FeedLoadEventWWWLogger',['Arbiter','BanzaiLogger','ErrorSignal','ErrorUtils','LitestandMessages','PageletEventConstsJS','URI'],(function a(b,c,d,e,f,g){










var h=
['substream_',
'more_pager_pagelet_',
'pagelet_composer',
'pagelet_navigation',
'pagelet_rhc_footer'],



i=
[c('PageletEventConstsJS').ARRIVE_END,
c('PageletEventConstsJS').DISPLAY_END,
c('PageletEventConstsJS').ONLOAD_END],



j=
['pre_page_transition',
'page_transition'],



k=
[c('LitestandMessages').NEWSFEED_LOAD,
c('LitestandMessages').STORIES_REQUESTED,
c('LitestandMessages').STORIES_INSERTED,
c('LitestandMessages').NEWER_STORIES_REQUESTED,
c('LitestandMessages').NEWER_STORIES_INSERTED,
c('LitestandMessages').STREAM_LOAD_ERROR,
c('LitestandMessages').STREAM_LOAD_RETRY,
c('LitestandMessages').DUPLICATE_CURSOR_ERROR],


l=false;

function m(q){
return q&&(q.getPath()==='/'||q.getPath()==='/home.php');}


function n(q){
c('BanzaiLogger').log('WebFeedLoadLoggerConfig',q);}


function o(q){
if(!q)
return null;


if(q.indexOf('more_pager_pagelet_')===0)
return 'more_pager_pagelet_n';



if(q.indexOf('substream_')===0&&
q!=='substream_0'&&q!=='substream_1')

return 'substream_n';


return q;}


var p=

{init:function q(){
if(l)
return;



c('Arbiter').subscribe('BigPipe/init',function(r,s){
if(!s||!s.arbiter)
return;

s.arbiter.subscribe('pagelet_event',function(t,u){

if(u&&
i.indexOf(u.event)>=0&&
h.some(function(v){return u.id.indexOf(v)===0;})&&
m(c('URI').getNextURI()))

n
({event:'pagelet',
pagelet_id:o(u.id),
pagelet_event_type:u.event,
pagelet_phase:u.phase.toString()});});});






c('Arbiter').subscribe(j,function(r,s){
if(s){
var t=s.to||s.uri;
if(m(t))
n
({event:'page_transition',
transition_event_type:r});}});






c('Arbiter').subscribe(k,function(r,s){
var t=null,
u=null;
if(r===c('LitestandMessages').STREAM_LOAD_ERROR){
t=s;}else
if(r===c('LitestandMessages').DUPLICATE_CURSOR_ERROR)
u=s;


n
({event:'stream_load',
stream_event_type:r,
stream_cursor:u,
stream_substream_id:o(s&&s.substream_id),
error_name:t&&t.name,
error_message:t&&t.message,
error_stack:t&&t.stack});});




c('ErrorUtils').addListener(function(r){
if(r&&m(c('URI').getNextURI())){
c('ErrorSignal').logJSError('feedloaderror',
{error:r.name||r.message,
extra:r});

n
({event:'js_error',
error_name:r.name,
error_message:r.message,
error_stack:r.stack});}});




l=true;}};



f.exports=p;}),null);

/** js/react_composer/FeedComposerIDStore.js */








__d('FeedComposerIDStore',['ReactComposerEvents','Arbiter','SubscriptionsHandler'],(function a(b,c,d,e,f,g){

'use strict';






var h=
{_composerID:null,
_subscriptions:c('SubscriptionsHandler'),

set:function i(j){
this._subscriptions=new (c('SubscriptionsHandler'))();
this._composerID=j;
this._subscribeComposerResetEvent();},


get:function i(){
if(!this._composerID)
throw new Error('ID Store has not yet been initialized via set()');

return this._composerID;},




_subscribeComposerResetEvent:function i(){
if(!this._composerID)
throw new Error('Composer ID cannot be null');

var j=c('Arbiter').subscribeOnce
(c('ReactComposerEvents').COMPOSER_RESET+this._composerID,
function(k,l){
if(l&&l.newComposerID){
this._composerID=l.newComposerID;
this._subscribeComposerResetEvent();}}.

bind(this));

this._subscriptions.addSubscriptions
(j);}};




f.exports=h;}),null);

/** js/react_composer/save_draft/ReactComposerDraftTypes.js */





__d('ReactComposerDraftTypes',[],(function a(b,c,d,e,f,g){

var h=
{NONE:'none',
AUTO:'auto',
AUTOMSG:'automsg'};


f.exports=h;}),null);

/** www/__virtual__/x/XReactFeedSproutsComposerXBootloadController.js */



__d("XReactFeedSproutsComposerXBootloadController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/react_composer\/feedx_sprouts\/bootload\/",{composer_id:{type:"String",required:true},composer_type:{type:"Enum",required:true,enumType:1},friend_list_id:{type:"String"},target_id:{type:"String",required:true}});}),

null);

/** js/react_composer/feedx_sprouts/ReactFeedSproutsComposerX.js */






__d('ReactFeedSproutsComposerX',['cx','csx','fbt','invariant','ReactComposerAttachmentType','ReactComposerDraftTypes','ReactComposerEvents','ReactComposerFocusInit','Arbiter','AsyncRequest','Bootloader','CSS','DOM','Event','FeedComposerIDStore','NavigationMetrics','Run','SubscriptionsHandler','XReactFeedSproutsComposerXBootloadController','$'],(function a(b,c,d,e,f,g,h,i,j,k){

'use strict';























































function l(m){
this.$ReactFeedSproutsComposerX_actorID=m.actorID;
this.$ReactFeedSproutsComposerX_root=m.root;
this.$ReactFeedSproutsComposerX_composerID=m.composerID;
this.$ReactFeedSproutsComposerX_targetID=m.targetID;
this.$ReactFeedSproutsComposerX_composerType=m.composerType;
this.$ReactFeedSproutsComposerX_friendListID=m.friendListID;
this.$ReactFeedSproutsComposerX_largeTextThreshold=m.largeTextThreshold;
this.$ReactFeedSproutsComposerX_gks=m.gks;

this.$ReactFeedSproutsComposerX_liveVideoSubscribed=false;
this.$ReactFeedSproutsComposerX_bootloadingInitiated=false;
this.$ReactFeedSproutsComposerX_form=c('DOM').find(this.$ReactFeedSproutsComposerX_root,'form');
this.$ReactFeedSproutsComposerX_textarea=c('DOM').find
(this.$ReactFeedSproutsComposerX_root,
"._3en1");

this.$ReactFeedSproutsComposerX_sproutsList=c('DOM').find
(this.$ReactFeedSproutsComposerX_root,
"._16ve");


this.$ReactFeedSproutsComposerX_ttiOccurred=false;


c('FeedComposerIDStore').set(this.$ReactFeedSproutsComposerX_composerID);

this.$ReactFeedSproutsComposerX_subscriptions=new (c('SubscriptionsHandler'))();
this.$ReactFeedSproutsComposerX_subscriptions.addSubscriptions
(c('Event').listen
(this.$ReactFeedSproutsComposerX_textarea,
'focus',
this.$ReactFeedSproutsComposerX_onUserIntent.bind(this)),

c('Event').listen
(this.$ReactFeedSproutsComposerX_root,
'click',
this.$ReactFeedSproutsComposerX_onUserIntent.bind(this)),

c('Event').listen
(this.$ReactFeedSproutsComposerX_form,
'success',
this.$ReactFeedSproutsComposerX_onPostSuccess.bind(this)),

c('Arbiter').subscribeOnce
('ReactFeedComposerXBootloader/bootload/'+this.$ReactFeedSproutsComposerX_composerID,
this.$ReactFeedSproutsComposerX_cleanup.bind(this)),

c('Arbiter').subscribeOnce
('ReactFeedComposerXBootloader/selectcomposer/'+this.$ReactFeedSproutsComposerX_composerID,
this.$ReactFeedSproutsComposerX_onUserIntent.bind(this)),

c('Arbiter').subscribe
('ReactComposerFocus/reset/'+this.$ReactFeedSproutsComposerX_composerID,
this.$ReactFeedSproutsComposerX_reset.bind(this)),

c('Arbiter').subscribe
('ReactComposerFocus/collapse/'+this.$ReactFeedSproutsComposerX_composerID,
this.$ReactFeedSproutsComposerX_collapse.bind(this)),

c('Arbiter').subscribe
(c('ReactComposerEvents').TEXT_PREFILL_BEFORE_BOOTLOAD+this.$ReactFeedSproutsComposerX_composerID,
function(o,p){
this.$ReactFeedSproutsComposerX_textarea.value=p;
this.$ReactFeedSproutsComposerX_textarea.selectionEnd=0;}.
bind(this)));



if(this.$ReactFeedSproutsComposerX_gks&&(this.$ReactFeedSproutsComposerX_gks.draftType===c('ReactComposerDraftTypes').AUTO||
this.$ReactFeedSproutsComposerX_gks.draftType===c('ReactComposerDraftTypes').AUTOMSG))
c('Bootloader').loadModules(["ReactComposerDraftGet"],function(o){
var p=o.getDraft(this.$ReactFeedSproutsComposerX_actorID);
if(p){

var q=p.prefillConfig.mentionsInput.textWithEntities.text;
if(q.length>this.$ReactFeedSproutsComposerX_largeTextThreshold)
c('CSS').removeClass
(this.$ReactFeedSproutsComposerX_textarea,
"_480e");


this.$ReactFeedSproutsComposerX_textarea.value=q;
this.$ReactFeedSproutsComposerX_textarea.placeholder=j._(["Continue creating your post...","e8824e8a9c75b5a7e9277ed7fc670652"]);}}.




bind(this),'ReactFeedSproutsComposerX');


this.$ReactFeedSproutsComposerX_selectors=c('DOM').scry
(this.$ReactFeedSproutsComposerX_root,
"._4-h7");


this.$ReactFeedSproutsComposerX_selectors.forEach(function(o){return this.$ReactFeedSproutsComposerX_subscriptions.addSubscriptions
(c('Event').listen
(o,
'click',
this.$ReactFeedSproutsComposerX_onSelectorClick.bind(this)));}.bind(this));








c('NavigationMetrics').addListener
(c('NavigationMetrics').Events.EVENT_OCCURRED,
function(o,p){
if(p.event==='tti')
this.$ReactFeedSproutsComposerX_ttiOccurred=true;}.

bind(this));


var n=c('DOM').scry
(this.$ReactFeedSproutsComposerX_root,
"._2mo4");


if(n.length===1)
this.$ReactFeedSproutsComposerX_subscriptions.addSubscriptions
(c('Event').listen
(n[0],
'click',
function(){
if(this.$ReactFeedSproutsComposerX_liveVideoSubscribed)
return;

this.$ReactFeedSproutsComposerX_liveVideoSubscribed=true;

c('Arbiter').subscribeOnce
('ReactFeedComposerXBootloader/bootload/'+this.$ReactFeedSproutsComposerX_composerID,
function(o,p){
c('Bootloader').loadModules
(["LiveVideoBroadcastUtils"],
function(q){
q.startPreviewUI
(p.contextConfig,
p.config,
this.$ReactFeedSproutsComposerX_ttiOccurred);

this.$ReactFeedSproutsComposerX_liveVideoSubscribed=false;}.
bind(this),'ReactFeedSproutsComposerX');}.

bind(this));




c('Bootloader').loadModules
(["LiveVideoBroadcastUtils"],
function(){},'ReactFeedSproutsComposerX');}.

bind(this)));




if(m.jsModules&&m.jsModules.composerFocus)
c('ReactComposerFocusInit').handler
(c('$')('feedx_sprouts_container'),
this.$ReactFeedSproutsComposerX_composerID,
this.$ReactFeedSproutsComposerX_actorID,
this.$ReactFeedSproutsComposerX_gks,
m.jsModules.composerFocus);



c('Run').onLeave(this.$ReactFeedSproutsComposerX_cleanup.bind(this));}
l.prototype.

$ReactFeedSproutsComposerX_onSelectorClick=function(m){
var n=m.getTarget(),
o=null;
while(n){
if(n.nodeType===1&&n.nodeName==='A'){
o=n;
break;}


n=n.parentNode;}


o!==null||k(0,'did not find selector');

var p=c('CSS').hasClass
(o,
"._5qtn");


if(p)
return;


this.$ReactFeedSproutsComposerX_selectors.forEach(function(s){return c('CSS').removeClass
(s,
"_5qtn");});

c('CSS').addClass
(o,
"_5qtn");


var q=c('DOM').find
(this.$ReactFeedSproutsComposerX_root,
"._559p"),

r=c('DOM').find
(this.$ReactFeedSproutsComposerX_root,
"._559q");


switch(o.getAttribute('data-attachment-type')){
case c('ReactComposerAttachmentType').STATUS:
c('CSS').hide(r);
c('CSS').show(q);
break;
case c('ReactComposerAttachmentType').MEDIA:
case c('ReactComposerAttachmentType').LIVE_VIDEO:
c('CSS').show(r);
c('CSS').hide(q);
break;}};

l.prototype.

$ReactFeedSproutsComposerX_onUserIntent=function(m){
this.$ReactFeedSproutsComposerX_expand();

if(this.$ReactFeedSproutsComposerX_bootloadingInitiated)
return;


this.$ReactFeedSproutsComposerX_bootloadingInitiated=true;

var n=c('XReactFeedSproutsComposerXBootloadController').
getURIBuilder().
setString('composer_id',this.$ReactFeedSproutsComposerX_composerID).
setString('target_id',this.$ReactFeedSproutsComposerX_targetID).
setEnum('composer_type',this.$ReactFeedSproutsComposerX_composerType).
setString('friend_list_id',this.$ReactFeedSproutsComposerX_friendListID).
getURI();

new (c('AsyncRequest'))(n).send();};
l.prototype.

$ReactFeedSproutsComposerX_expand=function(){
c('CSS').addClass
(this.$ReactFeedSproutsComposerX_root,
"_4qr4");

c('CSS').removeClass
(this.$ReactFeedSproutsComposerX_root,
"_4a8c");};

l.prototype.

$ReactFeedSproutsComposerX_collapse=function(){
c('CSS').removeClass
(this.$ReactFeedSproutsComposerX_root,
"_4qr4");

c('CSS').addClass
(this.$ReactFeedSproutsComposerX_root,
"_4a8c");};

l.prototype.

$ReactFeedSproutsComposerX_reset=function(){
this.$ReactFeedSproutsComposerX_collapse();
this.$ReactFeedSproutsComposerX_textarea.value='';};
l.prototype.

$ReactFeedSproutsComposerX_cleanup=function(){
this.$ReactFeedSproutsComposerX_subscriptions.release();};
l.prototype.

$ReactFeedSproutsComposerX_onPostSuccess=function(){
c('Arbiter').inform(c('ReactComposerEvents').POST_SUCCEEDED+this.$ReactFeedSproutsComposerX_composerID);
this.$ReactFeedSproutsComposerX_reset();};



f.exports=l;}),null);

/** js/react_composer/ui/focus_mask/ReactComposerFocusScrollLockUtils.js */





__d('ReactComposerFocusScrollLockUtils',['csx','cx','CSS','DOMQuery','Style','getDocumentScrollElement','getElementRect','getUnboundedScrollPosition','getViewportDimensions'],(function a(b,c,d,e,f,g,h,i){

'use strict';












var j=300,



k=400,



l=
{_interval:0,
_pageRoot:null,

enable:function m
(n){

var o=c('getUnboundedScrollPosition')(c('getDocumentScrollElement')());

c('CSS').addClass
(this._getPageRoot(),
"_ihc");


var p=c('getElementRect')(n),
q=p.top,

r=function(){

var s=
q+n.offsetHeight+k,

t=
Math.max(c('getViewportDimensions')().height,s)+'px';

if(c('Style').get(this._getPageRoot(),'height')!==t)
c('Style').set(this._getPageRoot(),'height',t);}.

bind(this);




this._interval=setInterval
(r,
j);



r();
requestAnimationFrame(function(){
window.scrollTo(o.x,0);});},



disable:function m(){
c('CSS').removeClass
(this._getPageRoot(),
"_ihc");


c('Style').set(this._getPageRoot(),'height',null);
clearInterval(this._interval);},


_getPageRoot:function m(){
if(!this._pageRoot)
this._pageRoot=c('DOMQuery').scry(document.body,"._li")[0];

return this._pageRoot;}};



f.exports=l;}),null);

/** js/react_composer/ui/focus_mask/ReactComposerFocusModal.react.js */






__d('ReactComposerFocusModal.react',['fbt','ReactComposerDraftTypes','ReactComposerFocusScrollLockUtils','ReactComposerFocusWrapperCore.react','ReactComposerLoggingActions','Arbiter','Bootloader','React','ReactDOM'],(function a(b,c,d,e,f,g,h){var i,j,













k=c('React').PropTypes,


l=null,
m=null,
n=null;i=babelHelpers.inherits

(o,c('React').PureComponent);j=i&&i.prototype;function o(){var p,q;'use strict';for(var r=arguments.length,s=Array(r),t=0;t<r;t++)s[t]=arguments[t];return q=(p=j.constructor).call.apply(p,[this].concat(s)),this.












state=
{focused:false,
showDiscardDialog:false},this.































$ReactComposerFocusModal_onFirstFocus=function(){
if(this.props.gks.draftType==c('ReactComposerDraftTypes').AUTO||
this.props.gks.draftType==c('ReactComposerDraftTypes').AUTOMSG){
c('Bootloader').loadModules(["ReactComposerHandleUnsavedChanges","ReactComposerFocusSaveAsDraftDialog.react","ReactComposerInit"],



function(u,v,w){
n=u;
m=v;
l=w;},
'ReactComposerFocusModal.react');}else 

c('Bootloader').loadModules(["ReactComposerHandleUnsavedChanges","ReactComposerFocusDiscardDialog.react","ReactComposerInit"],



function(u,v,w){
n=u;
m=v;
l=w;},
'ReactComposerFocusModal.react');}.

bind(this),this.

$ReactComposerFocusModal_onFocusDismissed=function(u){
if(u)
return this.$ReactComposerFocusModal_disableFocus();




if(m&&n&&
n.hasUnsavedChanges(this.$ReactComposerFocusModal_getComposerID())){
this.$ReactComposerFocusModal_showDiscardDialog();}else 

this.$ReactComposerFocusModal_dismissAndResetComposer();}.

bind(this),this.

$ReactComposerFocusModal_dismissAndResetComposer=function(){
c('ReactComposerLoggingActions').composerCancel(this.$ReactComposerFocusModal_getComposerID());

this.$ReactComposerFocusModal_hideDiscardDialog();

try{if(l)
l.resetComposer(this.$ReactComposerFocusModal_getComposerID());}catch(

u){}


c('Arbiter').inform('ReactComposerFocus/reset/'+this.$ReactComposerFocusModal_getComposerID());
this.$ReactComposerFocusModal_disableFocus();}.
bind(this),this.

$ReactComposerFocusModal_enableFocus=function(){
var u=c('ReactDOM').findDOMNode(this.refs.focus.getComposer());
c('ReactComposerFocusScrollLockUtils').enable

(u);

this.setState({focused:true});}.
bind(this),this.

$ReactComposerFocusModal_disableFocus=function(){
c('ReactComposerFocusScrollLockUtils').disable();
this.setState({focused:false});}.
bind(this),this.

$ReactComposerFocusModal_showDiscardDialog=function(){
this.setState({showDiscardDialog:true});}.
bind(this),this.

$ReactComposerFocusModal_hideDiscardDialog=function(){
this.setState({showDiscardDialog:false});}.
bind(this),this.

$ReactComposerFocusModal_getComposerID=function(){
return this.refs.focus.getComposerID();}.
bind(this),q;}o.prototype.componentWillUnmount=function(){'use strict';this.$ReactComposerFocusModal_disableFocus();};o.prototype.render=function(){'use strict';return c('React').createElement('div',null,c('React').createElement(c('ReactComposerFocusWrapperCore.react'),{composerID:this.props.composerID,ariaLabel:h._(["Create a Post","fffaeff0cd1d39f36338f918295eee01"]),focused:this.state.focused,fixHeight:true,onFirstFocus:this.$ReactComposerFocusModal_onFirstFocus,onFocus:this.$ReactComposerFocusModal_enableFocus,onDismiss:this.$ReactComposerFocusModal_onFocusDismissed,gks:this.props.gks,ref:'focus'},this.props.children),this.$ReactComposerFocusModal_getDiscardDialog());};o.prototype.

$ReactComposerFocusModal_getDiscardDialog=function(){'use strict';
var p=null;
if(this.state.showDiscardDialog&&m)
if(this.props.gks.draftType==c('ReactComposerDraftTypes').AUTO||
this.props.gks.draftType==c('ReactComposerDraftTypes').AUTOMSG){
p=c('React').createElement(m,
{getComposerID:this.$ReactComposerFocusModal_getComposerID,
actorID:this.props.actorID,
gks:this.props.gks,
onResetComposer:this.$ReactComposerFocusModal_dismissAndResetComposer,
onCancel:this.$ReactComposerFocusModal_hideDiscardDialog});}else 


p=c('React').createElement(m,
{onConfirm:this.$ReactComposerFocusModal_dismissAndResetComposer,
onCancel:this.$ReactComposerFocusModal_hideDiscardDialog});



return p;};
o.propTypes={composerID:k.string.isRequired,actorID:k.string.isRequired,gks:k.object.isRequired};


f.exports=o;}),null);
