if (self.CavalryLogger) { CavalryLogger.start_js(["FZHqn"]); }

/** __static_js_modules__/composedblocktype.js */




__d("ComposedBlockType",[],(function a(b,c,d,e,f,g){

f.exports={UNSTYLED:0,PARAGRAPH:1,UNORDERED_LIST_ITEM:2,ORDERED_LIST_ITEM:3,BLOCKQUOTE:4,HEADER_ONE:5,HEADER_TWO:6,CODE:7,MEDIA:8,PULLQUOTE:9,HEADER_THREE:10,HEADER_FOUR:11,HEADER_FIVE:12,HEADER_SIX:13};}),

null);

/** __static_js_modules__/composedentitytype.js */




__d("ComposedEntityType",[],(function a(b,c,d,e,f,g){

f.exports={MENTION:0,LINK:1,IMAGE:2,VIDEO:3,EMOTICON:4,TOKEN:5,HASHTAG:6,IMPLICIT_LINK:7,EMBED:8,EMOJI:9};}),

null);

/** __static_js_modules__/composedinlinestyle.js */




__d("ComposedInlineStyle",[],(function a(b,c,d,e,f,g){

f.exports={NONE:0,BOLD:1,ITALIC:2,UNDERLINE:4,CODE:8,STRIKETHROUGH:16,SUBSCRIPT:32,SUPERSCRIPT:64};}),

null);

/** __static_js_modules__/reactcomposertaggertype.js */




__d("ReactComposerTaggerType",[],(function a(b,c,d,e,f,g){

f.exports={CAMERA:"CAMERA",PEOPLE:"PEOPLE",OG:"OG",LOCATION:"LOCATION",ACTIVITY:"ACTIVITY",BACKDATE:"BACKDATE",TARGETING:"TARGETING",SPONSOR:"SPONSOR",VAULTPHOTO:"VAULTPHOTO",MARKDOWN:"MARKDOWN",CONTENT_WARNINGS:"CONTENT_WARNINGS",PRODUCT:"PRODUCT",PAGE_CTA:"PAGE_CTA",FORMATTED_TEXT:"FORMATTED_TEXT",STICKER:"STICKER",MESSAGING:"MESSAGING",POLITICAL_INFO:"POLITICAL_INFO",ISSUE_TAG:"ISSUE_TAG"};}),

null);

/** __static_js_modules__/timelinedomid.js */




__d("TimelineDOMID",[],(function a(b,c,d,e,f,g){

f.exports={COMPOSER_CONTAINER:"timeline_composer_container",MEMORIES:"pagelet_timeline_memories",RECENT:"pagelet_timeline_recent",RECENT_CAPSULE_CONTAINER:"recent_capsule_container",STICKY_HEADER:"timeline_sticky_header",TAB_CONTENT:"timeline_tab_content",TAB_CONTENT_EXTRA:"timeline_tab_content_extra",UNDER_COMPOSER:"timeline_under_composer",SERP_ENTRY_POINT:"serp_entry_point",UNSEEN_STORIES_INDICATOR:"recent_unseen_stories_indicator",TIMELINE_SCHEDULED_POSTS:"timeline_scheduled_posts",FIG_COMPOSER:"profile_fig_composer",FIG_TIMELINE:"profile_fig_timeline",FIG_ESCAPE_HATCH:"profile_fig_escape_hatch",FIG_INFO_REVIEW:"profile_fig_info_review",FIG_INTRO_CARD:"profile_fig_intro_card",FIG_PROTILES:"profile_fig_protiles",FIG_ADS:"profile_fig_ads",PREFIX_MONTH_ALL:"pagelet_timeline_month_all_",PREFIX_YEAR:"pagelet_timeline_year_",PREFIX_FIG_PROTILES:"profile_fig_protiles_",SUFFIX_MORE_PAGER:"_more_pager"};}),

null);

/** __static_js_modules__/videoeditsource.js */




__d("VideoEditSource",[],(function a(b,c,d,e,f,g){

f.exports={PROCESSING_DIALOG:"processing_dialog",OPTIMISTIC_VIDEO_POST:"optimistic_video_post",VIDEO_ASSET_INSIGHTS:"video_asset_insights",PERMALINK:"permalink",TIMELINE:"timeline",SNOWLIFT:"snowlift",LIBRARY:"library",REFERENCE_LIBRARY:"reference_library",CAROUSEL_PREVIEW:"carousel_preview",PAGE_VIDEO_LPP_PUBLISH:"page_video_lpp_publish",SCHEDULE_LIVE_STORY:"schedule_live_story",UNKNOWN:"unknown"};}),

null);

/** js/components/core/UI/ProgressBar/ProgressBar.react.js */




__d('ProgressBar.react',['cx','React','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,






k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;'use strict';for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.





















$UIProgressBar_calculatePercentage=function(){
var r=this.props,
s=
Math.min
(Math.max((r.value-r.min)/(r.max-r.min)*100,0),
100);

return s;}.
bind(this),this.

$UIProgressBar_hasLabel=function(){

return this.props.label!=null&&this.props.size!=='small';}.
bind(this),this.

$UIProgressBar_isFloatingLabel=function(){
return this.$UIProgressBar_hasLabel()&&this.props.typesetting==='float';}.
bind(this),this.

$UIProgressBar_getLabel=function(){
if(!this.$UIProgressBar_hasLabel())
return null;


return this.props.label;}.
bind(this),this.

$UIProgressBar_getSpacer=function(){
if(this.$UIProgressBar_isFloatingLabel())
return c('React').createElement('div',{className:"_6a"},' ');

return null;}.
bind(this),this.

$UIProgressBar_getFillArea=function(){
var r=Math.round(this.$UIProgressBar_calculatePercentage()),
s="_5e4k"+

(r===0?' '+"_5e2d":'')+
(r===100?' '+"_5e4j":''),


t=this.$UIProgressBar_getLabel();
if(t)
t=
c('React').createElement('span',{className:"_5e2h"},
t);



var u=
c('React').createElement('div',{className:s,style:{width:r+'%'}},
this.$UIProgressBar_getSpacer(),
t);


return u;}.
bind(this),this.

$UIProgressBar_getUnfillArea=function(){
var r=this.$UIProgressBar_getLabel();

if(!r)
return null;


r=
c('React').createElement('span',{className:"_5e2h _5e2n"},
r);


if(this.$UIProgressBar_isFloatingLabel()){
var s=this.$UIProgressBar_calculatePercentage(),
t=
{left:s+'%',
width:s+'%'},


u=
c('React').createElement('div',{className:"_5e2g",style:t},
this.$UIProgressBar_getSpacer(),
r);

return u;}


return r;}.
bind(this),n;}l.prototype.

render=function(){'use strict';
var m="_5e4h"+

(!this.$UIProgressBar_isFloatingLabel()?' '+"_5e2k":'')+
(this.$UIProgressBar_isFloatingLabel()?' '+"_5e2j":'')+
(this.props.size==='small'?' '+"_5e2l":'')+
(this.props.isRounded===true?' '+"_5e2m":'');


if(this.$UIProgressBar_isFloatingLabel()){

return (c('React').createElement('div',babelHelpers['extends']({},
this.props,
{role:'progressbar',
'aria-valuemin':0,
'aria-valuemax':100,
'aria-valuenow':this.$UIProgressBar_calculatePercentage(),
className:c('joinClasses')(this.props.className,m)}),
c('React').createElement('div',{className:"_5e2k"},
this.$UIProgressBar_getUnfillArea(),
this.$UIProgressBar_getFillArea())));}else 





return (c('React').createElement('div',babelHelpers['extends']({},
this.props,
{role:'progressbar',
'aria-valuemin':0,
'aria-valuemax':100,
'aria-valuenow':this.$UIProgressBar_calculatePercentage(),
className:c('joinClasses')(this.props.className,m)}),
this.$UIProgressBar_getUnfillArea(),
this.$UIProgressBar_getFillArea()));};



l.propTypes={value:k.number.isRequired,label:k.oneOfType([k.string,k.element]),min:k.number,max:k.number,size:k.oneOf(['small','large']),typesetting:k.oneOf(['float','inline']),isRounded:k.bool};l.defaultProps={min:0,max:100,size:'large',typesetting:'inline',isRounded:false};


f.exports=l;}),null);

/** js/megaphone/BasicFBNux.js */





__d('BasicFBNux',['AsyncRequest','XBasicFBNuxDismissController','XBasicFBNuxViewController'],(function a(b,c,d,e,f,g){





var h=

{subscribeHide:function i(j,k){
j.subscribe('hide',h.onDismiss.bind(this,k));},


onView:function i(j){
var k=c('XBasicFBNuxViewController').
getURIBuilder().
setInt('nux_id',j).
getURI();
new (c('AsyncRequest'))().setURI(k).send();},


onDismiss:function i(j){
var k=c('XBasicFBNuxDismissController').
getURIBuilder().
setInt('nux_id',j).
getURI();
new (c('AsyncRequest'))().setURI(k).send();}};



f.exports=h;}),null);

/** js/modules/AsyncUploadBase.js */






__d('AsyncUploadBase',['ArbiterMixin','AsyncRequest','AsyncResponse','BrowserSupport','Form','forEachObject','mixin','removeFromArray'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits











(j,c('mixin')(c('ArbiterMixin')));i=h&&h.prototype;j.

















parseFiles=function(l){'use strict';
var m={};
c('forEachObject')(l,function(n,o){
if(Array.isArray(n)){
m[o]=n;}else{

m[o]=[];
if(n instanceof window.FileList){
for(var p=0;p<n.length;p++)
m[o].push(n.item(p));}else

if(n instanceof window.File||
n instanceof window.Blob)
m[o].push(n);}});



return m;};






function j(l){'use strict';
i.constructor.call(this);





this._customHeader={};
this.setURI(l);
this.setNetworkErrorRetryLimit(0);}
j.prototype.

setAllowCrossOrigin=function(l){'use strict';
this._allowCrossOrigin=!!l;
return this;};
j.prototype.

setAllowCrossPageTransition=function(l){'use strict';
this._allowCrossPageTransition=!!l;
return this;};
j.prototype.










setCustomHttpHeader=function(l,m){'use strict';
this._customHeader[l]=m;
return this;};
j.prototype.






setData=function(l){'use strict';
this._data=l;
return this;};
j.prototype.







setLimit=function(l){'use strict';
this._limit=l;
return this;};
j.prototype.

setNetworkErrorRetryLimit=function(l){'use strict';
this._retryLimit=l;
return this;};
j.prototype.






setPreprocessHandler=function(l){'use strict';
this._preprocessHandler=l;
return this;};
j.prototype.

setRelativeTo=function(l){'use strict';
this._relativeTo=l;
return this;};
j.prototype.

setStatusElement=function(l){'use strict';
this._statusElement=l;
return this;};
j.prototype.

setURI=function(l){'use strict';
this._uri=l;
return this;};
j.prototype.

suspend=function(){'use strict';
this._suspended=true;
return this;};
j.prototype.

resume=function(){'use strict';
this._suspended=false;
this._processQueue();
return this;};
j.prototype.

isUploading=function(){'use strict';
return this._inFlight;};
j.prototype.

_createFileUpload=function(l,m,n){'use strict';
return new k(l,m,n);};
j.prototype.

_processQueue=function(){'use strict';
if(this._suspended)
return;

while(this._pending.length<this._limit){
if(!this._waiting.length)
break;

var l=this._waiting.shift();
if(this._preprocessHandler){
this._preprocessHandler(l,this._processUpload.bind(this));}else 

this._processUpload(l);

this._pending.push(l);}};

j.prototype.

_processUpload=function(l){'use strict';
var m=c('Form').createFormData(l.getData()||this._data);
if(l.getFile()){
m.append(l.getName(),l.getFile());


var n=l.getFile().uploadID;
if(n)
m.append('upload_id',n);}



var o=new (c('AsyncRequest'))().
setAllowCrossOrigin(this._allowCrossOrigin).
setAllowCrossPageTransition(this._allowCrossPageTransition).
setURI(this._uri).
setRawData(m).
setStatusElement(this._statusElement).
setHandler(this._success.bind(this,l)).
setErrorHandler(this._failure.bind(this,l)).
setUploadProgressHandler(this._progress.bind(this,l)).
setInitialHandler(this._initial.bind(this,l));

for(var p in this._customHeader)
o.setRequestHeader
(p,
this._customHeader[p]);



if(this._relativeTo)
o.setRelativeTo(this._relativeTo);


o.send();

l.setAsyncRequest(o);

this._inFlight=true;
if(!l.getRetryCount())

this.inform('start',l);};

j.prototype.

_abort=function(l){'use strict';

if(this._pending.indexOf(l)!==-1){
c('removeFromArray')(this._pending,l);
this._processQueue();}

c('removeFromArray')(this._waiting,l);
l.abort();};
j.prototype.

_initial=function(l){'use strict';
if(l.isAborted())
return;

this.inform('initial',l);};
j.prototype.

_success=function(l,m){'use strict';
if(l.isAborted()){
this.inform('success_after_abort',m);
return;}

this._complete(l);
this.inform('success',l.handleSuccess(m));
this._processQueue();};
j.prototype.

_retryUpload=function(l){'use strict';
l.increaseRetryCount();
this._processUpload(l);};
j.prototype.

_failure=function(l,m){'use strict';
if(l.isAborted())
return;


if(m.error===1004&&l.getRetryCount()<this._retryLimit)
return this._retryUpload(l);

this._complete(l);
if(this.inform('failure',l.handleFailure(m))!==false)
c('AsyncResponse').defaultErrorHandler(m);

this._processQueue();};
j.prototype.

_progress=function(l,event){'use strict';
if(l.isAborted())
return;

this.inform('progress',l.handleProgress(event));};
j.prototype.

_complete=function(l){'use strict';
c('removeFromArray')(this._pending,l);

if(!this._pending.length)

this._inFlight=false;};

j.

isSupported=function(){'use strict';
return c('BrowserSupport').hasFileAPI();};



Object.assign(j.prototype,

{_limit:10});



function k(l,m,n){'use strict';
this._name=l;
this._file=m;
this._data=n;
this._success=null;
this._response=null;
this._progressEvent=null;
this._request=null;
this._numRetries=0;
this._aborted=false;}
k.prototype.

getName=function(){'use strict';
return this._name;};
k.prototype.

getFile=function(){'use strict';
return this._file;};
k.prototype.

setFile=function(l){'use strict';
this._file=l;};
k.prototype.

getData=function(){'use strict';
return this._data;};
k.prototype.

isComplete=function(){'use strict';
return this._success!==null;};
k.prototype.

isSuccess=function(){'use strict';
return this._success===true;};
k.prototype.

getResponse=function(){'use strict';
return this._response;};
k.prototype.

getProgressEvent=function(){'use strict';
return this._progressEvent;};
k.prototype.

setAsyncRequest=function(l){'use strict';
this._request=l;
return this;};
k.prototype.

increaseRetryCount=function(){'use strict';
this._numRetries++;
return this;};
k.prototype.

getRetryCount=function(){'use strict';
return this._numRetries;};
k.prototype.

isWaiting=function(){'use strict';
return !this._request;};
k.prototype.

isAborted=function(){'use strict';
return this._aborted;};
k.prototype.

abort=function(){'use strict';
this._request=null;
this._aborted=true;};
k.prototype.




handleSuccess=function(l){'use strict';
this._success=true;
this._response=l;
this._progressEvent=null;
return this;};
k.prototype.

handleFailure=function(l){'use strict';
this._success=false;
this._response=l;
this._progressEvent=null;
return this;};
k.prototype.

handleProgress=function(event){'use strict';
this._progressEvent=event;
return this;};



f.exports=j;}),null);

/** js/modules/AsyncUploadRequest.js */





__d('AsyncUploadRequest',['AsyncUploadBase'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits












































(j,c('AsyncUploadBase'));i=h&&h.prototype;j.prototype.














setFiles=function(k){'use strict';
this._files=c('AsyncUploadBase').parseFiles(k);
return this;};
j.prototype.

abort=function(){'use strict';
this._uploads.forEach(function(k){return this._abort(k);}.bind(this),this);};
j.prototype.

send=function(){'use strict';
if(this._inFlight)







return;

this._inFlight=true;

this._uploads=[];
for(var k in this._files)
this._files[k].forEach(function(l){
this._uploads.push(this._createFileUpload(k,l));}.
bind(this));


this._waiting=this._uploads.slice(0);
this._pending=[];
if(this._uploads.length){
this._processQueue();}else 


this._processUpload(this._createFileUpload(null,null));};

j.prototype.

_processQueue=function(){'use strict';
i._processQueue.call(this);

if(!this._pending.length&&!this._waiting.length)
this.inform('complete',this._uploads);};

j.

isSupported=function(){'use strict';
return c('AsyncUploadBase').isSupported();};
function j(){'use strict';h.apply(this,arguments);}


f.exports=j;}),null);

/** js/modules/ErrorDialog.js */




__d('ErrorDialog',['Dialog','emptyFunction'],(function a(b,c,d,e,f,g){




















var h=





{showAsyncError:function i(j){

try{return h.show
(j.getErrorSummary(),
j.getErrorDescription());}catch(

k){
alert(j);}},











show:function i(j,k,l,m){
return new (c('Dialog'))().
setTitle(j).
setBody(k).
setButtons([c('Dialog').OK]).
setStackable(true).
setModal(true).
setHandler(l||c('emptyFunction')).
setButtonsMessage(m||'').
show();}};



f.exports=h;}),null);

/** js/modules/FileForm.js */






__d('FileForm',['ArbiterMixin','AsyncRequest','AsyncResponse','AsyncUploadRequest','BehaviorsMixin','CurrentUser','DataStore','DOMQuery','Event','Form','JSONPTransport','Parent','URI','isElementNode','mixin','shield'],(function a(b,c,d,e,f,g){var h,i;























function j(m){
var n={},
o=c('DOMQuery').scry(m,'input[type="file"]');
o.forEach(function(p){
n[p.name]=p.files;});

return n;}


function k(m){
var n=c('DOMQuery').scry(m,'input[type="file"]');
n.forEach(function(o){
o.files=null;});}

h=babelHelpers.inherits

(l,c('mixin')(c('ArbiterMixin'),c('BehaviorsMixin')));i=h&&h.prototype;
function l(m,n,o){'use strict';
i.constructor.call(this);this.
























































































































_handleSubmit=function(event){
if(event.isDefaultPrevented()||event.getTarget()!==this._form)
return;


if(this.inform('submit')===false){
event.prevent();
return;}


this.submit(event);}.
bind(this);if(m.getAttribute('rel')==='async')throw new Error('FileForm cannot be used with Primer forms.');if(m.getAttribute('method').toUpperCase()!=='POST')throw new Error('FileForm must be used with POST forms.');this._form=m;this._previousEncoding=this._form.enctype;this._form.enctype=this._form.encoding='multipart/form-data';this._files=null;this._customHeader={};n&&this.enableBehaviors(n);this._options=o||{};this.setAllowCrossOrigin(this._options.allowCrossOrigin);this.setAllowCrossPageTransition(this._options.allowCrossPageTransition);this.setUploadInParallel(this._options.uploadInParallel);this.setConcurrentLimit(this._options.concurrentLimit);this.setPreprocessHandler(this._options.preprocessHandler);this.setNetworkErrorRetryLimit(this._options.networkErrorRetryLimit);this._listeners=[c('Event').listen(document.documentElement,'submit',this._handleSubmit),c('Event').listen(this._form,'click',this._click.bind(this))];c('DataStore').set(this._form,'FileForm',this);}l.prototype.getRoot=function(){'use strict';return this._form;};l.prototype.setAllowCrossOrigin=function(m){'use strict';this._allowCrossOrigin=!!m;return this;};l.prototype.setAllowCrossPageTransition=function(m){'use strict';this._allowCrossPageTransition=!!m;return this;};l.prototype.setUploadInParallel=function(m){'use strict';this._uploadInParallel=!!m;return this;};l.prototype.setConcurrentLimit=function(m){'use strict';this._concurrentLimit=m;return this;};l.prototype.setCustomHttpHeader=function(m,n){'use strict';this._customHeader[m]=n;return this;};l.prototype.setPreprocessHandler=function(m){'use strict';this._preprocessHandler=m;return this;};l.prototype.setNetworkErrorRetryLimit=function(m){'use strict';this._retryLimit=m;return this;};l.prototype.setFiles=function(m){'use strict';this._files=m;return this;};l.prototype.canUseXHR=function(){'use strict';var m='FormData' in window;if(m)if(!new (c('URI'))(this._form.action).isSameOrigin()&&!this._allowCrossOrigin)m=false;return m;};l.prototype.

_click=function(event){'use strict';
var m=event.getTarget();

while(c('isElementNode')(m)){
if(m.type==='submit'){
this._clickTarget=m;
setTimeout(this._unclick.bind(this),0);

break;}


m=m.parentNode;}};

l.prototype.

_unclick=function(){'use strict';
this._clickTarget=null;};
l.prototype.

_sendViaFrame=function(){'use strict';



var m=this._request=new (c('AsyncRequest'))();
m.setStatusElement(this._getStatusElement());
m.addStatusIndicator();
m.setOption('useIframeTransport',true);
var n=m.handleResponse.bind(m),

o=new (c('JSONPTransport'))('iframe',this._form.action,n),

p=o.getTransportFrame(),
q=o.getRequestURI().addQueryData
({__iframe:true,
__user:c('CurrentUser').getID()});


this._form.setAttribute('action',q.toString());
this._form.setAttribute('target',p.name);

m.setJSONPTransport(o);
m.setURI(q);
m.setHandler(this.success.bind(this,null));
m.setErrorHandler(this.failure.bind(this,null));
m.setInitialHandler(c('shield')(this.initial,this,null));};
l.prototype.

_sendViaXHR=function(event){'use strict';
var m;

if(this._uploadInParallel&&c('AsyncUploadRequest').isSupported()){
m=new (c('AsyncUploadRequest'))().
setPreprocessHandler(this._preprocessHandler).
setData(c('Form').serialize(this._form,this._clickTarget)).
setNetworkErrorRetryLimit(this._retryLimit);
for(var n in this._customHeader)
m.setCustomHttpHeader
(n,
this._customHeader[n]);


if(this._concurrentLimit)
m.setLimit(this._concurrentLimit);

if(this._files){
m.setFiles(this._files);}else 

m.setFiles(j(this._form));

var o=
[m.subscribe('progress',function(s,t){
this.progress(t,t.getProgressEvent());}.
bind(this)),
m.subscribe('initial',function(s,t){
this.initial(t,t.getResponse());}.
bind(this)),
m.subscribe('success',function(s,t){
this.success(t,t.getResponse());}.
bind(this)),
m.subscribe('start',function(s,t){
this.inform('start',{upload:t});}.
bind(this)),
m.subscribe('failure',function(s,t){
this.failure(t,t.getResponse());
return false;}.
bind(this)),
m.subscribe('complete',function(){
while(o.length)
o.pop().unsubscribe();})];}else{




var p;

if(this._files){
p=c('Form').createFormData
(c('Form').serialize(this._form,this._clickTarget));

var q=c('AsyncUploadRequest').parseFiles(this._files);
for(var n in q){
var r=q[n];
if(r.length===1){
p.append(n,r[0]);}else{

n=n+'[]';
r.forEach(function(s){
p.append(n,s);});}}}else 




p=c('Form').createFormData(this._form,this._clickTarget);


m=new (c('AsyncRequest'))().
setRawData(p).
setHandler(this.success.bind(this,null)).
setErrorHandler(this.failure.bind(this,null)).
setUploadProgressHandler(this.progress.bind(this,null)).
setInitialHandler(c('shield')(this.initial,this,null));}





m.
setAllowCrossOrigin(this._allowCrossOrigin).
setAllowCrossPageTransition(this._allowCrossPageTransition).
setRelativeTo(this._form).
setStatusElement(this._getStatusElement()).
setURI(this._form.action).
send();

this._request=m;


event&&event.prevent();};
l.prototype.

forceSendViaXHR=function(){'use strict';


return this._sendViaXHR(null);};
l.prototype.

initial=function(m){'use strict';
return this.inform('initial',{upload:m});};
l.prototype.





success=function(m,n){'use strict';
var o={response:n,upload:m};
if(this.inform('success',o)!==false)
c('Event').fire(this._form,'success',o);

this._cleanup();};
l.prototype.

failure=function(m,n){'use strict';
var o={response:n,upload:m};
if(this.inform('failure',o)!==false)
if(c('Event').fire(this._form,'error',o)!==false)
c('AsyncResponse').defaultErrorHandler(n);


this._cleanup();};
l.prototype.

progress=function(m,event){'use strict';
this.inform('progress',{event:event,upload:m});};
l.prototype.

abort=function(){'use strict';
if(this._request){
this._request.abort();
this._cleanup();}};

l.prototype.

clear=function(){'use strict';
k(this._form);};
l.prototype.

destroy=function(){'use strict';
this._cleanup();

while(this._listeners&&this._listeners.length)
this._listeners.pop().remove();


this._listeners=null;

this._form.enctype=this._form.encoding=this._previousEncoding;
c('DataStore').remove(this._form,'FileForm');};
l.prototype.

submit=function(event){'use strict';
this.canUseXHR()?this._sendViaXHR(event):this._sendViaFrame();};
l.prototype.

_cleanup=function(){'use strict';
this._request=null;};
l.prototype.

_getStatusElement=function(){'use strict';
return c('Parent').byClass(this._form,'stat_elem')||this._form;};
l.

getInstance=function(m){'use strict';
return c('DataStore').get(m,'FileForm');};



Object.assign(l,
{EVENTS:['start','submit','initial','progress','success','failure']});


f.exports=l;}),null);

/** js/modules/FileInputUploader.js */




















__d('FileInputUploader',['ArbiterMixin','DOM','DTSG','FileForm','Form','mixin'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits









(j,c('mixin')(c('ArbiterMixin')));i=h&&h.prototype;
function j(k){'use strict';
i.constructor.call(this);
this._inputElem=k;
this._data={};}
j.prototype.

setInput=function(k){'use strict';
this._inputElem=k;
return this;};
j.prototype.

setURI=function(k){'use strict';
this._uri=k;
return this;};
j.prototype.

setData=function(k){'use strict';
this._data=k;
return this;};
j.prototype.




setPreprocessHandler=function(k){'use strict';
this._preprocessHandler=k;
return this;};
j.prototype.

setNetworkErrorRetryLimit=function(k){'use strict';
this._retryLimit=k;
return this;};
j.prototype.




setFiles=function(k){'use strict';
this._files=k;
return this;};
j.prototype.




setAllowCrossOrigin=function(k){'use strict';
this._allowCrossOrigin=!!k;
return this;};
j.prototype.




setAllowCrossPageTransition=function(k){'use strict';
this._allowCrossPageTransition=!!k;
return this;};
j.prototype.




setUploadInParallel=function(k){'use strict';
this._uploadInParallel=!!k;
return this;};
j.prototype.

setConcurrentLimit=function(k){'use strict';
this._concurrentLimit=k;
return this;};
j.prototype.

abort=function(){'use strict';
if(this._fileForm){
this._fileForm.abort();
this._destroyFileForm();}};

j.prototype.

send=function(){'use strict';
this._createForm();







var k=!this._inputElem.parentElement;
if(!k){

var l=this._inputElem.cloneNode(false);
c('DOM').replace(this._inputElem,l);}

c('DOM').appendContent(this._formElem,this._inputElem);


c('DOM').appendContent(document.body,this._formElem);
this._fileForm.submit();

if(!k)

c('DOM').replace(l,this._inputElem);


this._removeFormEl();};
j.prototype.

_onFileFormEvent=function(k,l){'use strict';
if(k==='success'||k==='failure')
this._destroyFileForm();


return this.inform(k,l);};
j.prototype.

_createForm=function(){'use strict';

this._destroyFileForm();


this._formElem=c('DOM').create('form',
{action:this._uri,
method:'post'});

this._fileForm=new (c('FileForm'))(this._formElem,null,
{allowCrossOrigin:this._allowCrossOrigin,
allowCrossPageTransition:this._allowCrossPageTransition,
uploadInParallel:this._uploadInParallel,
concurrentLimit:this._concurrentLimit,
preprocessHandler:this._preprocessHandler,
networkErrorRetryLimit:this._retryLimit});

if(this._files)
this._fileForm.setFiles(this._files);

this._fileForm.subscribe
(c('FileForm').EVENTS,
this._onFileFormEvent.bind(this));

c('Form').createHiddenInputs(babelHelpers['extends']

({fb_dtsg:c('DTSG').getToken()},
this._data),

this._formElem);};

j.prototype.

_removeFormEl=function(){'use strict';
c('DOM').remove(this._formElem);
this._formElem=null;};
j.prototype.

_destroyFileForm=function(){'use strict';
if(this._fileForm){
this._fileForm.destroy();
this._fileForm=null;}};




f.exports=j;}),null);

/** js/modules/submitForm.js */




__d('submitForm',['DOM'],(function a(b,c,d,e,f,g){









var h=function i(j){
var k=c('DOM').scry(j,'input[type="submit"]')[0];
if(k){
k.click();}else{

k=c('DOM').create('input',
{type:'submit',
className:'hidden_elem'});

c('DOM').appendContent(j,k);
k.click();
c('DOM').remove(k);}};



f.exports=h;}),null);

/** js/pages/composer/react/flux/PagesComposerActionsTypes.js */





__d('PagesComposerActionsTypes',['keyMirror'],(function a(b,c,d,e,f,g){


var h=c('keyMirror')
({BACKDATE:null,
SET_DRAFT:null,
SCHEDULE:null,
SET_ADS_POST:null,
SET_BOOSTED_POST:null,
SHOW_OFFER_UPSELL:null,
ABANDON_OFFER_UPSELL:null,
INSTAGRAM_CROSS_POSTING:null});


f.exports=h;}),null);

/** js/react_composer/attachments/media/photos/ReactComposerPhotoActionType.js */





__d('ReactComposerPhotoActionType',['keyMirrorRecursive'],(function a(b,c,d,e,f,g){








f.exports=c('keyMirrorRecursive')
({PHOTO_RECOGNITION_STARTED:null,
PHOTO_RECOGNITION_FINISHED:null,
PHOTO_RECOGNITION_ALL_FINISHED:null,
PHOTO_ADD_FACEBOX:null,
PHOTO_TAG_FACEBOX:null,
PHOTO_TAG_XY:null,
PHOTO_TAG_XY_PRODUCT:null,
PHOTO_UNTAG_FACEBOX:null,
PHOTO_REMOVE:null,
PHOTO_UNTAG_SUBJECT_FROM_ALL_PHOTOS:null,
PHOTO_EDIT_STARTED:null,
PHOTO_EDIT_FINISHED:null,
PHOTO_SET_BEING_TAGGED:null,
PHOTO_LOADING_EDIT_FINISHED:null,
PHOTO_UNTAG_ALL:null,
PHOTO_SPHERICAL_UPDATING:null},
'ReactComposerPhotoActionType');}),null);

/** js/react_composer/attachments/media/photos/ReactComposerPhotoStore.js */





__d('ReactComposerPhotoStore',['ReactComposerPhotoActionType','ReactComposerMediaUploadActionType','ReactComposerStoreBase','immutable'],(function a(b,c,d,e,f,g){var h,i,










j=c('immutable').Record
({cubestripURI:null,
faceboxes:c('immutable').Map(),
height:null,
id:null,
imageSrc:null,
isLoadingPhotoEdit:false,
isRecognizingFaceboxes:false,
thumbSrc:null,
uploadID:null,
width:null,
xyTags:c('immutable').Map()}),





k=c('immutable').Record
({id:null,
photoID:null,
x:null,
y:null,
top:null,

left:null,

width:null,
height:null,
croppedURI:null,
taggedSubjectID:null,
taggedValue:null,
isMagicTag:false,

recognizedSubjectID:null}),






l=c('immutable').Record
({from_facebox:false,
name:null,
photoID:null,
source:null,
subject:null,
x:null,
y:null,
is_product_tag:false});h=babelHelpers.inherits






(m,c('ReactComposerStoreBase'));i=h&&h.prototype;
function m(){'use strict';
var n;
i.constructor.call(this,
function(){

return {photos:c('immutable').Map(),
photoBeingTagged:null,
isSphericalPhotoUpdating:false};},


function(o){
switch(o.type){
case c('ReactComposerMediaUploadActionType').PHOTO_UPLOAD_DONE:
n&&n.$ReactComposerPhotoStore_handleUploadDone(o);
break;
case c('ReactComposerMediaUploadActionType').PHOTO_UPLOAD_EXTRA_DONE:
n&&n.$ReactComposerPhotoStore_handleUploadExtraDone(o);
break;
case c('ReactComposerMediaUploadActionType').PHOTO_ADD_UPLOAD:
n&&n.$ReactComposerPhotoStore_handlePhotoAddUpload(o);
break;
case c('ReactComposerPhotoActionType').PHOTO_RECOGNITION_STARTED:
n&&n.$ReactComposerPhotoStore_handleStartRecognizing(o);
break;
case c('ReactComposerPhotoActionType').PHOTO_RECOGNITION_FINISHED:
n&&n.$ReactComposerPhotoStore_handleFinishRecognizingPhoto(o);
break;
case c('ReactComposerPhotoActionType').PHOTO_RECOGNITION_ALL_FINISHED:
n&&n.$ReactComposerPhotoStore_handleFinishRecognizing(o);
break;
case c('ReactComposerPhotoActionType').PHOTO_ADD_FACEBOX:
n&&n.$ReactComposerPhotoStore_handleAddFacebox(o);
break;
case c('ReactComposerPhotoActionType').PHOTO_TAG_XY_PRODUCT:
n&&n.$ReactComposerPhotoStore_handleTagXYProduct(o);
break;
case c('ReactComposerPhotoActionType').PHOTO_TAG_XY:
n&&n.$ReactComposerPhotoStore_handleTagXY(o);
break;
case c('ReactComposerPhotoActionType').PHOTO_TAG_FACEBOX:
n&&n.$ReactComposerPhotoStore_handleTagFacebox(o);
break;
case c('ReactComposerPhotoActionType').PHOTO_UNTAG_FACEBOX:
n&&n.$ReactComposerPhotoStore_handleUntagFacebox(o);
break;
case c('ReactComposerPhotoActionType').PHOTO_REMOVE:
n&&n.$ReactComposerPhotoStore_handlePhotoRemove(o);
break;
case c('ReactComposerPhotoActionType').PHOTO_UNTAG_SUBJECT_FROM_ALL_PHOTOS:
n&&n.$ReactComposerPhotoStore_handleUntagSubjectFromAllPhotos(o);
break;
case c('ReactComposerPhotoActionType').PHOTO_SET_BEING_TAGGED:
n&&n.$ReactComposerPhotoStore_handleSetPhotoBeingTagged(o);
break;
case c('ReactComposerMediaUploadActionType').PREFILL_MEDIAS:
n&&n.$ReactComposerPhotoStore_handlePrefillMedias(o);
break;
case c('ReactComposerPhotoActionType').PHOTO_EDIT_STARTED:
n&&n.$ReactComposerPhotoStore_handlePhotoEditStarted(o);
break;
case c('ReactComposerPhotoActionType').PHOTO_LOADING_EDIT_FINISHED:
n&&n.$ReactComposerPhotoStore_handleLoadingEditFinished(o);
break;
case c('ReactComposerPhotoActionType').PHOTO_UNTAG_ALL:
n&&n.$ReactComposerPhotoStore_handleUntagAllForPhoto(o);
break;
case c('ReactComposerPhotoActionType').PHOTO_SPHERICAL_UPDATING:
n&&n.$ReactComposerPhotoStore_handleSphericalPhotoUpdating(o);
break;
default:}});





n=this;}
m.prototype.

getPhotos=function(n){'use strict';
return this.getComposerData(n).photos;};
m.prototype.

isLimitExceeded=
function(n,
o){
'use strict';
return this.getPhotos(n).size>o;};
m.prototype.

getPhoto=function(n,o){'use strict';
return this.getComposerData(n).photos.get(o);};
m.prototype.

isRecognizing=function(n){'use strict';
return this.getComposerData(n).photos.some
(function(o){return o.isRecognizingFaceboxes;});};

m.prototype.

getIsSubjectTagged=function(n,o){'use strict';
var p=this.getComposerData(n).photos;

return p.some
(function(q){return this.getIsSubjectTaggedInPhoto(n,q.id,o);}.bind(this));};

m.prototype.

getIsSubjectTaggedInPhoto=
function(n,
o,
p){
'use strict';
var q=this.getPhoto(n,o),

r=q.faceboxes.some
(function(t){return t.taggedSubjectID===p;}),

s=q.xyTags.some(function(t){
return (t.subject===p);});


return r||s;};
m.prototype.

hasTagsInPhoto=function(n,o){'use strict';
var p=this.getPhoto(n,o);

if(!p)
return false;


var q=p.faceboxes.some
(function(s){return s.taggedSubjectID!==null;}),

r=p.xyTags.size>0;

return q||r;};
m.prototype.

getAllTaggedFaceboxes=function(n){'use strict';
var o=this.getPhotos(n),
p=[];
o.forEach(function(q){
p=p.concat(q.faceboxes.toArray());});

return p.filter
(function(q){return !!q.get('taggedSubjectID');});};

m.prototype.

getTaggedFaceboxes=function(n,o){'use strict';
var p=this.getPhoto(n,o);

return !p?
null:
p.faceboxes.
filter(function(q){return !!q.get('taggedSubjectID');}).
map(function(q){return q.toObject();}).
toArray();};
m.prototype.

getXYTags=function(n,o){'use strict';
var p=this.getPhoto(n,o);

return !p?
null:
p.xyTags.map(function(q){return q.toObject();}).toArray();};
m.prototype.

getAllXYTags=function(n){'use strict';
var o=this.getPhotos(n),
p=[];
o.forEach(function(q){
p=p.concat(q.xyTags.toArray());});


return p;};
m.prototype.

getPhotoBeingTagged=function(n){'use strict';
return this.getComposerData(n).photoBeingTagged;};
m.prototype.

isSphericalPhotoUpdating=function(n){'use strict';
return this.getComposerData(n).isSphericalPhotoUpdating;};
m.prototype.

$ReactComposerPhotoStore_handleUploadDone=function(n){'use strict';var o=









this.validateAction
(n,

['composerID',
'uploadID',
'photoID',
'thumbSrc',
'cubestripURI',
'imageSrc',
'width',
'height']),p=o[0],q=o[1],r=o[2],s=o[3],t=o[4],u=o[5],v=o[6],w=o[7];



this.$ReactComposerPhotoStore_registerPhoto
(p,
r,
new j
({id:r,
uploadID:q,
thumbSrc:s,
cubestripURI:t,
imageSrc:u,
width:v,
height:w}));



this.emitChange(p);};
m.prototype.

$ReactComposerPhotoStore_handleUploadExtraDone=function(n){'use strict';
this.$ReactComposerPhotoStore_handleUploadDone(n);};
m.prototype.

$ReactComposerPhotoStore_handleStartRecognizing=function(n){'use strict';var o=
this.validateAction
(n,
['composerID','photoID']),p=o[0],q=o[1],


r=this.getComposerData(p);
r.photos=r.photos.update(q,function(s){
return (s.set('isRecognizingFaceboxes',true));});


this.emitChange(p);};
m.prototype.

$ReactComposerPhotoStore_handleFinishRecognizingPhoto=function(n){'use strict';var o=
this.validateAction
(n,
['composerID','photoID']),p=o[0],q=o[1],


r=this.getComposerData(p);
r.photos=r.photos.update(q,function(s){
return (s&&s.set('isRecognizingFaceboxes',false));});


this.emitChange(p);};
m.prototype.

$ReactComposerPhotoStore_handleFinishRecognizing=function(n){'use strict';var o=
this.validateAction
(n,
['composerID','photos']),p=o[0],q=o[1],


r=this.getComposerData(p);
r.photos=r.photos.map(function(s){return q.indexOf(s.id)!==-1?
s.set('isRecognizingFaceboxes',false):
s;});


this.emitChange(p);};
m.prototype.

$ReactComposerPhotoStore_handleAddFacebox=function(n){'use strict';var o=
this.validateAction
(n,
['composerID','photoID','facebox']),p=o[0],q=o[1],r=o[2],


s=this.getComposerData(p),
t=r.bestRecognition,
u=null,
v=null;
if(t){
u=t.subjectID;
v=t.value;}


s.photos=s.photos.update(q,function(w){
return (w&&w.update('faceboxes',function(x){
return (x.set(r.id,new k
({id:r.id,
photoID:q,
x:r.x,
y:r.y,
top:r.top,
left:r.left,
width:r.width,
height:r.height,
croppedURI:r.croppedURI,
taggedSubjectID:u,
taggedValue:v,
isMagicTag:!!u,
recognizedSubjectID:u})));}));});




this.emitChange(p);};
m.prototype.

$ReactComposerPhotoStore_handleTagXY=function(n){'use strict';var o=

this.validateAction
(n,
['composerID','value','photoID','source','subject','x','y']),p=o[0],q=o[1],r=o[2],s=o[3],t=o[4],u=o[5],v=o[6],


w=this.getComposerData(p);

w.photos=w.photos.update(r,function(z){
return (z.update('xyTags',function(aa){
return (aa.set(t,new l
({name:q,
photoID:r,
source:s,
subject:t,
x:u,
y:v})));}));});




this.emitChange(p);};
m.prototype.

$ReactComposerPhotoStore_handleTagXYProduct=function(n){'use strict';var o=

this.validateAction
(n,
['composerID','value','photoID','source','subject','x','y']),p=o[0],q=o[1],r=o[2],s=o[3],t=o[4],u=o[5],v=o[6],


w=this.getComposerData(p);

w.photos=w.photos.update(r,function(z){
return (z.update('xyTags',function(aa){
return (aa.set(t,new l
({name:q,
photoID:r,
source:s,
subject:t,
x:u,
y:v,
is_product_tag:true})));}));});




this.emitChange(p);};
m.prototype.

$ReactComposerPhotoStore_handleTagFacebox=function(n){'use strict';var o=

this.validateAction
(n,
['composerID','photoID','faceboxID','subjectID','value']),p=o[0],q=o[1],r=o[2],s=o[3],t=o[4],


u=this.getComposerData(p);

u.photos=u.photos.update(q,function(v){
return (v.update('faceboxes',function(w){
return (w.update(r,function(x){return x.withMutations(function(y){return y.
set('taggedSubjectID',s).
set('taggedValue',t).
set('isMagicTag',false);});}));}));});




this.emitChange(p);};
m.prototype.

$ReactComposerPhotoStore_handleUntagAllForPhoto=function(n){'use strict';var o=
this.validateAction
(n,
['composerID','photoID']),p=o[0],q=o[1],


r=this.getComposerData(p);

r.photos=r.photos.update(q,function(s){
s=s.set('xyTags',c('immutable').Map());

return s;});


this.emitChange(p);};
m.prototype.

$ReactComposerPhotoStore_handleUntagFacebox=function(n){'use strict';var o=
this.validateAction
(n,
['composerID','photoID','faceboxID']),p=o[0],q=o[1],r=o[2],


s=this.getComposerData(p);

s.photos=s.photos.update(q,function(t){
return (t.update('faceboxes',function(u){
return (u.update(r,function(v){return v.withMutations(function(w){return w.
remove('taggedSubjectID').
remove('taggedValue').
set('isMagicTag',false);});}));}));});




this.emitChange(p);};
m.prototype.

$ReactComposerPhotoStore_handlePhotoRemove=function(n){'use strict';var o=

this.validateAction
(n,
['composerID','photoID']),p=o[0],q=o[1],

r=this.getComposerData(p);
r.photos=r.photos['delete'](q);};



m.prototype.

$ReactComposerPhotoStore_handleUntagSubjectFromAllPhotos=function(n){'use strict';var o=
this.validateAction
(n,
['composerID','subjectID']),p=o[0],q=o[1],


r=this.getComposerData(p);
r.photos=r.photos.map(function(s){
return (s.withMutations(function(t){return t.
update('faceboxes',function(u){
return (u.map(function(v){
if(v.taggedSubjectID!==q)
return v;

return v.withMutations(function(w){return w.
remove('taggedSubjectID').
remove('taggedValue').
set('isMagicTag',false);});}));}).


update('xyTags',function(u){
return (u.filterNot(function(v){return v.subject===q;}));});}));});




this.emitChange(p);};
m.prototype.

$ReactComposerPhotoStore_handleSetPhotoBeingTagged=function(n){'use strict';var o=
this.validateAction
(n,
['composerID','photoID']),p=o[0],q=o[1],

r=this.getComposerData(p);
r.photoBeingTagged=q;
this.emitChange(p);};
m.prototype.

$ReactComposerPhotoStore_handlePrefillMedias=function(n){'use strict';var o=
this.validateAction
(n,
['composerID','medias']),p=o[0],q=o[1];


q.forEach(function(r){
this.$ReactComposerPhotoStore_registerPhoto
(p,
r.photoID,
new j
({id:r.photoID,
uploadID:r.uploadID,
thumbSrc:r.thumbSrc,
imageSrc:r.imageSrc,
width:r.width,
height:r.height,
cubestripURI:r.cubestripURI}));}.


bind(this));

this.emitChange(p);};
m.prototype.

$ReactComposerPhotoStore_handlePhotoEditStarted=function(n){'use strict';var o=
this.validateAction
(n,
['composerID','photoID']),p=o[0],q=o[1],


r=this.getComposerData(p);
r.photos=r.photos.update(q,function(s){
return (s.set('isLoadingPhotoEdit',true));});


this.emitChange(p);};
m.prototype.

$ReactComposerPhotoStore_handleLoadingEditFinished=function(n){'use strict';var o=
this.validateAction
(n,
['composerID','photoID']),p=o[0],q=o[1],


r=this.getComposerData(p);
r.photos=r.photos.update(q,function(s){
return (s.set('isLoadingPhotoEdit',false));});


this.emitChange(p);};
m.prototype.

$ReactComposerPhotoStore_handlePhotoAddUpload=function(n){


'use strict';var o=
this.validateAction
(n,
['composerID','photo']),p=o[0],q=o[1];


this.$ReactComposerPhotoStore_registerPhoto
(p,
q.id,
q);


this.emitChange(p);};
m.prototype.

$ReactComposerPhotoStore_handleSphericalPhotoUpdating=function(n){


'use strict';var o=
this.validateAction
(n,
['composerID','isSphericalPhotoUpdating']),p=o[0],q=o[1],


r=this.getComposerData(p);
r.isSphericalPhotoUpdating=q;
this.emitChange(p);};
m.prototype.

$ReactComposerPhotoStore_registerPhoto=
function(n,
o,
p){
'use strict';
var q=this.getComposerData(n);
q.photos=q.photos.set
(o,
p);};




f.exports=new m();}),null);

/** js/react_composer/attachments/status/ReactComposerStatusActionType.js */





__d('ReactComposerStatusActionType',['keyMirrorRecursive'],(function a(b,c,d,e,f,g){



f.exports=c('keyMirrorRecursive')
({SET_EDITOR_STATE:null,
SET_ORIGINAL_EDITOR_STATE:null,
SET_TEXT_LENGTH:null,
SET_MENTIONS:null,
SET_MENTIONS_SOURCE:null,
SET_TYPEAHEAD_REPORTER:null},
'ReactComposerStatusActionType');}),null);

/** js/react_composer/attachments/status/taggers/ReactComposerTaggerActionType.js */






__d('ReactComposerTaggerActionType',['keyMirrorRecursive'],(function a(b,c,d,e,f,g){



f.exports=c('keyMirrorRecursive')
({DESELECT_TAGGER:null,
SET_SELECTED_TAGGER:null,
UPDATE_TAGGERS_SOURCE:null,
SET_TAGGER_SOURCE:null,
SET_TAGGER_DATA:null,
SET_SELECTED_DATETIME:null,
SET_SELECTED_PEOPLE:null,
SET_TAGGER_SHOW_NUX:null,
SET_SHOULD_HIDE_TAGGER_BUTTON:null,
SET_TAGGER_SHOW_TOOLTIP:null},
'ReactComposerTaggerActionType');}),null);

/** js/react_composer/attachments/status/taggers/ReactComposerTaggerStore.js */





__d('ReactComposerTaggerStore',['ReactComposerDispatcher','ReactComposerMediaUploadActionType','ReactComposerPhotoActionType','ReactComposerPhotoStore','ReactComposerStoreBase','ReactComposerTaggerActionType','ReactComposerTaggerType','immutable','SearchableEntry','Set','isEmpty'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits



















(j,c('ReactComposerStoreBase'));i=h&&h.prototype;
function j(){'use strict';
var k;
i.constructor.call(this,
function(){
var l={};
l[c('ReactComposerTaggerType').PEOPLE]=[];
l[c('ReactComposerTaggerType').LOCATION]={};
l[c('ReactComposerTaggerType').BACKDATE]={};
l[c('ReactComposerTaggerType').ACTIVITY]={};
l[c('ReactComposerTaggerType').TARGETING]={};
l[c('ReactComposerTaggerType').SPONSOR]=
{sponsors:[],
directShareStatus:0,
sponsorRelationship:0};

l[c('ReactComposerTaggerType').PRODUCT]=[];
l[c('ReactComposerTaggerType').MARKDOWN]={};
l[c('ReactComposerTaggerType').CONTENT_WARNINGS]=[];
l[c('ReactComposerTaggerType').MESSAGING]=[];
l[c('ReactComposerTaggerType').POLITICAL_INFO]={};
l[c('ReactComposerTaggerType').ISSUE_TAG]={};



return {$ReactComposerTaggerStore_implicitPeopleTags:c('immutable').Set(),
autoFocusOnSelectedTagger:true,
selectedTagger:null,
taggersData:l,
taggersSource:{},
taggersShowNUX:{},
shouldHideTaggerButton:{},
taggersShowTooltip:{}};},


function(l){
switch(l.type){
case c('ReactComposerTaggerActionType').DESELECT_TAGGER:
k&&k.$ReactComposerTaggerStore_handleDeselectTagger(l);
break;
case c('ReactComposerTaggerActionType').SET_SELECTED_TAGGER:
k&&k.$ReactComposerTaggerStore_handleSetSelectedTagger(l);
break;
case c('ReactComposerTaggerActionType').UPDATE_TAGGERS_SOURCE:
k&&k.$ReactComposerTaggerStore_handleUpdateTaggersSource(l);
break;
case c('ReactComposerTaggerActionType').SET_TAGGER_SOURCE:
k&&k.$ReactComposerTaggerStore_handleSetTaggerSource(l);
break;
case c('ReactComposerTaggerActionType').SET_TAGGER_DATA:
k&&k.$ReactComposerTaggerStore_handleSetTaggerData(l);
break;
case c('ReactComposerTaggerActionType').SET_TAGGER_SHOW_NUX:
k&&k.$ReactComposerTaggerStore_handleSetTaggerShowNUX(l);
break;
case c('ReactComposerTaggerActionType').SET_SHOULD_HIDE_TAGGER_BUTTON:
k&&k.$ReactComposerTaggerStore_handleSetShouldHideTaggerButton(l);
break;
case c('ReactComposerTaggerActionType').SET_TAGGER_SHOW_TOOLTIP:
k&&k.$ReactComposerTaggerStore_handleSetTaggerShowTooltip(l);
break;
case c('ReactComposerPhotoActionType').PHOTO_ADD_FACEBOX:
k&&k.$ReactComposerTaggerStore_handleFaceboxRecognition(l);
break;
case c('ReactComposerPhotoActionType').PHOTO_TAG_XY:
k&&k.$ReactComposerTaggerStore_handlePhotoTagXY(l);
break;
case c('ReactComposerPhotoActionType').PHOTO_TAG_XY_PRODUCT:
k&&k.$ReactComposerTaggerStore_handlePhotoTagXYProduct(l);
break;
case c('ReactComposerPhotoActionType').PHOTO_TAG_FACEBOX:
k&&k.$ReactComposerTaggerStore_handleTagFacebox(l);
break;
case c('ReactComposerPhotoActionType').PHOTO_UNTAG_ALL:
k&&k.$ReactComposerTaggerStore_handleUntagAll(l);
break;
case c('ReactComposerPhotoActionType').PHOTO_UNTAG_FACEBOX:
c('ReactComposerDispatcher').waitFor
([c('ReactComposerPhotoStore').getDispatchToken()]);

k&&k.$ReactComposerTaggerStore_handleUntagFacebox(l);
break;
case c('ReactComposerPhotoActionType').PHOTO_REMOVE:
c('ReactComposerDispatcher').waitFor
([c('ReactComposerPhotoStore').getDispatchToken()]);

k&&k.$ReactComposerTaggerStore_handleRemovePhoto(l);
break;
case c('ReactComposerMediaUploadActionType').PHOTO_UPLOAD_DONE:
k&&k.$ReactComposerTaggerStore_handleUploadDone(l);
break;}});



k=this;}
j.prototype.

hasData=function(k,l){'use strict';
var m=this.getTaggerData(k,l);

if(m==null)
return false;


switch(l){
case c('ReactComposerTaggerType').PEOPLE:
case c('ReactComposerTaggerType').PRODUCT:
case c('ReactComposerTaggerType').CONTENT_WARNINGS:
return m.length>0;
case c('ReactComposerTaggerType').LOCATION:
return !!m.place;
case c('ReactComposerTaggerType').BACKDATE:
return !!m.year;
case c('ReactComposerTaggerType').ACTIVITY:
return !!m.action&&!!m.object;
case c('ReactComposerTaggerType').TARGETING:
case c('ReactComposerTaggerType').MARKDOWN:
case c('ReactComposerTaggerType').POLITICAL_INFO:
case c('ReactComposerTaggerType').ISSUE_TAG:
return !c('isEmpty')(m);
case c('ReactComposerTaggerType').SPONSOR:
return m.sponsors&&m.sponsors.length>0;
case c('ReactComposerTaggerType').FORMATTED_TEXT:
return !!m.formatActive;
case c('ReactComposerTaggerType').STICKER:
return !!m.stickerID;
case c('ReactComposerTaggerType').MESSAGING:
return m.hasCTA;

default:throw new Error
(l+' is an unhandled tagger type in '+
'ReactComposerTaggerStore.hasData');}};


j.prototype.

shouldShowNUX=function(k,l){'use strict';
var m=this.getComposerData(k);
return !!m.taggersShowNUX[l];};
j.prototype.

shouldShowTooltip=function(k,l){'use strict';
var m=this.getComposerData(k);
return !!m.taggersShowTooltip[l];};
j.prototype.

shouldHideTaggerButton=function(k,l){'use strict';
var m=this.getComposerData(k);
return !!m.shouldHideTaggerButton[l];};
j.prototype.

areAllTaggersEmpty=function(k){'use strict';
var l=this.getTaggersData(k);

for(var m in l)
if(this.hasData(k,m))
return false;



return true;};
j.prototype.

getSelectedTagger=function(k){'use strict';
return this.getComposerData(k).selectedTagger;};
j.prototype.

getAutoFocusOnSelectedTagger=function(k){'use strict';
return this.getComposerData(k).autoFocusOnSelectedTagger;};
j.prototype.

getTaggerSource=function(k,l){'use strict';
return this.getComposerData(k).taggersSource[l];};
j.prototype.

getTaggerData=function(k,l){'use strict';
return this.getComposerData(k).taggersData[l];};
j.prototype.

getTaggersData=function(k){'use strict';
return this.getComposerData(k).taggersData;};
j.prototype.

hasMinutiae=function(k){'use strict';
var l=this.getTaggerData
(k,
c('ReactComposerTaggerType').ACTIVITY);

return !!(l&&l.action&&l.object);};
j.prototype.

hasLocationTag=function(k){'use strict';
var l=this.getTaggerData
(k,
c('ReactComposerTaggerType').LOCATION);

return !!(l&&(l.place||l.implicitLocation));};
j.prototype.

hasExplicitLocation=function(k){'use strict';
var l=this.getTaggerData
(k,
c('ReactComposerTaggerType').LOCATION);

return !!(l&&l.place);};
j.prototype.



hasImplicitLocation=function(k){'use strict';
var l=this.getTaggerData
(k,
c('ReactComposerTaggerType').LOCATION);

return !!(l&&l.implicitLocation&&!l.place);};
j.prototype.

hasBackdate=function(k){'use strict';
var l=this.getTaggerData
(k,
c('ReactComposerTaggerType').BACKDATE)||
{};

return !!l.year;};
j.prototype.

hasMarkdown=function(k){'use strict';
return !!this.getTaggerData
(k,
c('ReactComposerTaggerType').MARKDOWN).
isMarkdown;};
j.prototype.

isDistricttargeting=function(k){'use strict';
return !!this.getTaggerData
(k,
c('ReactComposerTaggerType').POLITICAL_INFO).
isDistrictTargeting;};
j.prototype.

getNumberOfWithWhoTags=function(k){'use strict';
var l=this.getTaggerData
(k,
c('ReactComposerTaggerType').PEOPLE)||
[];
return l.length;};
j.prototype.

$ReactComposerTaggerStore_handleDeselectTagger=function(k){'use strict';
var l=this.getComposerData(k.composerID);
l.selectedTagger=null;
this.emitChange(k.composerID);};
j.prototype.

$ReactComposerTaggerStore_handleSetSelectedTagger=function(k){'use strict';
var l=this.getComposerData(k.composerID);
if(l.selectedTagger===k.taggerID&&
!k.disableToggle){
l.selectedTagger=null;}else 

l.selectedTagger=k.taggerID;

l.autoFocusOnSelectedTagger=k.autoFocus;
this.emitChange(k.composerID);};
j.prototype.

$ReactComposerTaggerStore_handleSetTaggerSource=function(k){'use strict';
var l=this.getComposerData(k.composerID);
l.taggersSource[k.taggerID]=k.taggerSource;
this.emitChange(k.composerID);};
j.prototype.

$ReactComposerTaggerStore_handleUpdateTaggersSource=function(k){'use strict';var l=
this.validateAction
(k,
['composerID','taggersSource']),m=l[0],n=l[1],

o=this.getComposerData(m);

for(var p in n)
o.taggersSource[p]=n[p];


this.emitChange(m);};
j.prototype.

$ReactComposerTaggerStore_handleSetTaggerData=function(k){'use strict';
var l=this.getComposerData(k.composerID),
m=Array.isArray(k.taggerData)?
k.taggerData.slice():
Object.assign({},k.taggerData);
l.taggersData[k.taggerID]=m;
this.emitChange(k.composerID);};
j.prototype.

$ReactComposerTaggerStore_handleSetTaggerShowNUX=function(k){'use strict';
var l=this.getComposerData(k.composerID);
l.taggersShowNUX[k.taggerID]=k.showNUX;
this.emitChange(k.composerID);};
j.prototype.

$ReactComposerTaggerStore_handleSetTaggerShowTooltip=function(k){'use strict';
var l=this.getComposerData(k.composerID);
l.taggersShowTooltip[k.taggerID]=k.showTooltip;
this.emitChange(k.composerID);};
j.prototype.

$ReactComposerTaggerStore_handleSetShouldHideTaggerButton=function(k){'use strict';var l=
this.validateAction
(k,
['composerID','taggerID','shouldHideTaggerButton']),m=l[0],n=l[1],o=l[2],

p=this.getComposerData(m);
p.shouldHideTaggerButton[n]=o;
this.emitChange(m);};
j.prototype.


$ReactComposerTaggerStore_handleUploadDone=function(k){'use strict';
var l=this.getComposerData(k.composerID),


m=Object.assign

({mediaLocation:k.mediaLocation},

l.taggersData[c('ReactComposerTaggerType').LOCATION]);

l.taggersData[c('ReactComposerTaggerType').LOCATION]=m;

this.emitChange(k.composerID);};
j.prototype.

$ReactComposerTaggerStore_handleFaceboxRecognition=function(k){'use strict';var l=
this.validateAction
(k,
['composerID','facebox','photoID']),m=l[0],n=l[1],o=l[2],

p=n.bestRecognition;
if(p)
this.$ReactComposerTaggerStore_addImplicitPeopleTag
(m,
p.subjectID,
p.value,
o);};


j.prototype.

$ReactComposerTaggerStore_handlePhotoTagXY=function(k){'use strict';var l=

this.validateAction
(k,
['composerID','subject','value','photoID']),m=l[0],n=l[1],o=l[2],p=l[3];

this.$ReactComposerTaggerStore_addImplicitPeopleTag(m,n,o,p);};
j.prototype.

$ReactComposerTaggerStore_handleUntagAll=function(k){'use strict';var l=

this.validateAction
(k,
['composerID','photoID']),m=l[0],n=l[1];

this.$ReactComposerTaggerStore_removeAllPeopleTagsFromPhoto(m,n);
this.$ReactComposerTaggerStore_removeAllProductTagsFromPhoto(m,n);};
j.prototype.

$ReactComposerTaggerStore_handlePhotoTagXYProduct=function(k){'use strict';var l=

this.validateAction
(k,
['composerID','subject','value','photoID']),m=l[0],n=l[1],o=l[2],p=l[3];

this.$ReactComposerTaggerStore_addImplicitProductTag(m,n,o,p);};
j.prototype.

$ReactComposerTaggerStore_handleTagFacebox=function(k){'use strict';var l=

this.validateAction
(k,
['composerID','subjectID','value','photoID']),m=l[0],n=l[1],o=l[2],p=l[3];

this.$ReactComposerTaggerStore_addImplicitPeopleTag(m,n,o,p);};
j.prototype.

$ReactComposerTaggerStore_handleUntagFacebox=function(k){'use strict';var l=
this.validateAction
(k,
['composerID','subjectID']),m=l[0],n=l[1];

if(!c('ReactComposerPhotoStore').getIsSubjectTagged(m,n))
this.$ReactComposerTaggerStore_removeImplicitPeopleTag(m,n);};

j.prototype.

$ReactComposerTaggerStore_handleRemovePhoto=function(k){'use strict';
var l=this.validateAction(k,'composerID');

this.getComposerData(l).$ReactComposerTaggerStore_implicitPeopleTags.forEach(function(m){
if(!c('ReactComposerPhotoStore').getIsSubjectTagged(l,m))
this.$ReactComposerTaggerStore_removeImplicitPeopleTag(l,m);}.

bind(this));};
j.prototype.

$ReactComposerTaggerStore_addImplicitPeopleTag=
function(k,
l,
m,
n){
'use strict';
var o=new (c('SearchableEntry'))
({uniqueID:l,
title:m,
auxiliaryData:
{isFacebox:true,
photos:new (c('Set'))([n])}}),



p=this.getComposerData(k),
q=p.taggersData[c('ReactComposerTaggerType').PEOPLE],
r=q.find(function(t){
return t.getUniqueID()===o.getUniqueID();});

p.$ReactComposerTaggerStore_implicitPeopleTags=p.$ReactComposerTaggerStore_implicitPeopleTags.add(l);

if(r){
var s=r.getAuxiliaryData();
if(this.$ReactComposerTaggerStore_isImplicitTag(r))
s.photos.add(n);}else 


p.taggersData[c('ReactComposerTaggerType').PEOPLE]=
q.concat(o);

this.emitChange(k);};
j.prototype.

$ReactComposerTaggerStore_addImplicitProductTag=
function(k,
l,
m,
n){
'use strict';
var o=new (c('SearchableEntry'))
({uniqueID:l,
title:m,
auxiliaryData:
{isFacebox:true,
photos:new (c('Set'))([n])}}),


p=this.getComposerData(k),
q=p.taggersData[c('ReactComposerTaggerType').PRODUCT],
r=q.find(function(s){
return s.getUniqueID()===o.getUniqueID();});


if(r){
if(this.$ReactComposerTaggerStore_isImplicitTag(r))
r.getAuxiliaryData().photos.add(n);}else 


p.taggersData[c('ReactComposerTaggerType').PRODUCT]=
q.concat(o);


this.emitChange(k);};
j.prototype.

$ReactComposerTaggerStore_removeImplicitPeopleTag=
function(k,
l){
'use strict';
var m=this.getComposerData(k);
m.taggersData[c('ReactComposerTaggerType').PEOPLE]=
m.taggersData[c('ReactComposerTaggerType').PEOPLE].filter(function(n){
return n.getUniqueID()!==l;});

m.taggersData[c('ReactComposerTaggerType').PRODUCT]=
m.taggersData[c('ReactComposerTaggerType').PRODUCT].filter(function(n){
return n.getUniqueID()!==l;});

m.$ReactComposerTaggerStore_implicitPeopleTags=m.$ReactComposerTaggerStore_implicitPeopleTags['delete'](l);
this.emitChange(k);};
j.prototype.

$ReactComposerTaggerStore_removeAllPeopleTagsFromPhoto=
function(k,
l){
'use strict';
var m=this.getComposerData(k),
n=m.taggersData[c('ReactComposerTaggerType').PEOPLE];
this.$ReactComposerTaggerStore_removeTagsFromPhoto(k,n,l);};
j.prototype.

$ReactComposerTaggerStore_removeAllProductTagsFromPhoto=
function(k,
l){
'use strict';
var m=this.getComposerData(k),
n=m.taggersData[c('ReactComposerTaggerType').PRODUCT];
this.$ReactComposerTaggerStore_removeTagsFromPhoto(k,n,l);};
j.prototype.

$ReactComposerTaggerStore_removeTagsFromPhoto=
function(k,
l,
m){
'use strict';
var n=[];
for(var o=l,p=Array.isArray(o),q=0,o=p?o:o[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var r;if(p){if(q>=o.length)break;r=o[q++];}else{q=o.next();if(q.done)break;r=q.value;}var s=r,
t=s.getAuxiliaryData();

if(this.$ReactComposerTaggerStore_isImplicitTag(s)&&
t.photos['delete'](m)&&
t.photos.size==0)

n.push(s.getUniqueID());}



for(var u=n,v=Array.isArray(u),w=0,u=v?u:u[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var x;if(v){if(w>=u.length)break;x=u[w++];}else{w=u.next();if(w.done)break;x=w.value;}var y=x;
this.$ReactComposerTaggerStore_removeImplicitPeopleTag(k,y);}};

j.prototype.

$ReactComposerTaggerStore_isImplicitTag=
function(k){
'use strict';



return k.getAuxiliaryData().photos;};




f.exports=new j();}),null);

/** shared/draft-js/model/encoding/DraftStringKey.js */











__d('DraftStringKey',[],(function a(b,c,d,e,f,g){

'use strict';

var h=
{stringify:function i(j){
return '_'+String(j);},


unstringify:function i(j){
return j.slice(1);}};



f.exports=h;}),null);

/** shared/draft-js/model/encoding/encodeEntityRanges.js */











__d('encodeEntityRanges',['DraftStringKey','UnicodeUtils'],(function a(b,c,d,e,f,g){

'use strict';







var h=c('UnicodeUtils').strlen;




function i
(j,
k){

var l=[];
j.findEntityRanges
(function(m){return !!m.getEntity();},
function(m,n){
var o=j.getText(),
p=j.getEntityAt(m);
l.push
({offset:h(o.slice(0,m)),
length:h(o.slice(m,n)),

key:Number(k[c('DraftStringKey').stringify(p)])});});



return l;}


f.exports=i;}),null);

/** shared/draft-js/model/encoding/encodeInlineStyleRanges.js */










__d('encodeInlineStyleRanges',['UnicodeUtils','findRangesImmutable'],(function a(b,c,d,e,f,g){

'use strict';










var h=function m(n,o){return n===o;},
i=function m(n){return !!n;},
j=[];





function k
(m,
n,
o){

var p=[],


q=n.
map(function(r){return r.has(o);}).
toList();

c('findRangesImmutable')
(q,
h,

i,
function(r,s){
var t=m.getText();
p.push
({offset:c('UnicodeUtils').strlen(t.slice(0,r)),
length:c('UnicodeUtils').strlen(t.slice(r,s)),
style:o});});




return p;}






function l
(m){

var n=m.getCharacterList().map(function(p){return p.getStyle();}).toList(),
o=n.
flatten().
toSet().
map(function(p){return k(m,n,p);});

return Array.prototype.concat.apply(j,o.toJS());}


f.exports=l;}),null);

/** shared/draft-js/model/encoding/convertFromDraftStateToRaw.js */










__d('convertFromDraftStateToRaw',['DraftStringKey','encodeEntityRanges','encodeInlineStyleRanges'],(function a(b,c,d,e,f,g){

'use strict';









function h
(i){

var j=0,
k={},
l=[];

i.getBlockMap().forEach(function(o,p){
o.findEntityRanges
(function(q){return q.getEntity()!==null;},
function(q){

var r=c('DraftStringKey').stringify
(o.getEntityAt(q));

if(!Object.prototype.hasOwnProperty.call(k,r))
k[r]=''+j++;});




l.push
({key:p,
text:o.getText(),
type:o.getType(),
depth:o.getDepth(),
inlineStyleRanges:c('encodeInlineStyleRanges')(o),
entityRanges:c('encodeEntityRanges')(o,k),
data:o.getData().toObject()});});





var m=Object.keys(k),
n={};
m.forEach(function(o,p){
var q=i.getEntity(c('DraftStringKey').unstringify(o));
n[p]=
{type:q.getType(),
mutability:q.getMutability(),
data:q.getData()};});




return {entityMap:n,
blocks:l};}



f.exports=h;}),null);

/** shared/draft-js-contrib/encoding/encodeBlocks.js */











__d('encodeBlocks',['ComposedBlockType','ComposedEntityType','ComposedInlineStyle','convertFromDraftStateToRaw','mapObject','nullthrows'],(function a(b,c,d,e,f,g){

'use strict';












function h(k){var l=
c('convertFromDraftStateToRaw')(k),m=l.blocks,n=l.entityMap,

o=m.map(function(q){
var r=q.key,s=q.type,t=q.text,u=q.depth,v=q.inlineStyleRanges,w=q.entityRanges;

return {key:c('nullthrows')(r),
type:i[s],
text:t,
depth:c('nullthrows')(u),
inlineStyleRanges:c('nullthrows')(v).map(function(x){
return babelHelpers['extends']({},x,{style:j[x.style]});}),

entityRanges:c('nullthrows')(w)};}),



p=c('mapObject')(n,function(q){
var r=q.data,
s=null,
t=undefined;
if(typeof r==='object'){
s=r.id;t=babelHelpers.objectWithoutProperties(r,['id']);
if(Object.keys(t).length===0){
t=undefined;}else 

t=c('mapObject')(t,function(u){
return u==null?'':String(u);});}




return {id:s||null,
type:c('ComposedEntityType')[q.type],
data:t};});



return {blocks:o,entityMap:p};}


var i=
{unstyled:c('ComposedBlockType').UNSTYLED,
paragraph:c('ComposedBlockType').PARAGRAPH,
blockquote:c('ComposedBlockType').BLOCKQUOTE,
'ordered-list-item':c('ComposedBlockType').ORDERED_LIST_ITEM,
'unordered-list-item':c('ComposedBlockType').UNORDERED_LIST_ITEM,
'code-block':c('ComposedBlockType').CODE,
'header-one':c('ComposedBlockType').HEADER_ONE,
'header-two':c('ComposedBlockType').HEADER_TWO,
atomic:c('ComposedBlockType').MEDIA,
pullquote:c('ComposedBlockType').PULLQUOTE,



'header-three':c('ComposedBlockType').HEADER_TWO,
'header-four':c('ComposedBlockType').HEADER_TWO,
'header-five':c('ComposedBlockType').HEADER_TWO,
'header-six':c('ComposedBlockType').HEADER_TWO},


j=
{BOLD:c('ComposedInlineStyle').BOLD,
CODE:c('ComposedInlineStyle').CODE,
ITALIC:c('ComposedInlineStyle').ITALIC,
STRIKETHROUGH:c('ComposedInlineStyle').STRIKETHROUGH,
UNDERLINE:c('ComposedInlineStyle').UNDERLINE};


f.exports=h;}),null);

/** shared/draft-js-contrib/matchers/getImplicitURLRangesForContentState.js */











__d('getImplicitURLRangesForContentState',['getImplicitURLMatches'],(function a(b,c,d,e,f,g){

'use strict';






function h
(i){

return i.getBlockMap().
map(function(j){
var k=[];
c('getImplicitURLMatches')(j,function(l,m){
k.push({start:l,end:m});});

return k;}).

toArray();}


f.exports=h;}),null);

/** js/rich_composed_text/getRichComposedTextDataForSave.js */





__d('getRichComposedTextDataForSave',['ComposedEntityType','UnicodeUtils','URI'],(function a(b,c,d,e,f,g){

'use strict';







function h
(i){

var j=i.encodedContent,k=i.implicitLinks,
l=j.blocks,
m=j.entityMap;
k=k||[];



var n=Object.keys(m).map(function(q){return Number(q);}),
o=n.length?Math.max.apply(Math,n):0,
p=o+1;

k.forEach(function(q,r){
q.forEach(function(s){
var t=s.start,u=s.end,v=
l[r],w=v.text,x=v.entityRanges,
y=p++,

z=c('UnicodeUtils').strlen(w.slice(0,t)),
aa=c('UnicodeUtils').strlen(w.slice(t,u)),


ba=l[r].entityRanges.some
(function(ha){
return (ha.offset<z+aa&&
ha.offset+ha.length>z);});



if(ba)
return;




var ca={offset:z,length:aa,key:y},

da=l[r].text.slice(t,u),

ea=new (c('URI'))(da),
fa=ea.getProtocol();
if(!fa)


ea.setProtocol('http');


var ga=
{id:null,
type:c('ComposedEntityType').IMPLICIT_LINK,
data:{url:ea.toString()}};


x.push(ca);
m[String(y)]=ga;});});




return {blocks:l.map(function(q){return q.text;}),
block_depths:l.map(function(q){return q.depth;}),
block_types:l.map(function(q){return q.type;}),
entities:l.map
(function(q){return JSON.stringify(q.entityRanges);}),

entity_map:JSON.stringify(m),
inline_styles:l.map
(function(q){return JSON.stringify(q.inlineStyleRanges);})};}




f.exports=h;}),null);

/** js/react_composer/attachments/status/ReactComposerStatusStore.js */





__d('ReactComposerStatusStore',['ReactComposerStatusActionType','ReactComposerStoreBase','ComposedBlockType','ComposedEntityType','ReactComposerTaggerStore','encodeBlocks','getRichComposedTextDataForSave','getImplicitURLRangesForContentState','getMentionsTextForContentState'],(function a(b,c,d,e,f,g){var h,i;

















function j(l){
for(var m=l.blocks,n=Array.isArray(m),o=0,m=n?m:m[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var p;if(n){if(o>=m.length)break;p=m[o++];}else{o=m.next();if(o.done)break;p=o.value;}var q=p;
if(q.type!==c('ComposedBlockType').UNSTYLED||
q.inlineStyleRanges.length!==0)
return true;}


for(var r in l.entityMap){
var s=l.entityMap[r];
if(s.type!==c('ComposedEntityType').MENTION)
return true;}


return false;}
h=babelHelpers.inherits

(k,c('ReactComposerStoreBase'));i=h&&h.prototype;
function k(){'use strict';
var l;
i.constructor.call(this,
function(){

return {editorState:null,
length:0,
mentionsSource:null,
originalEditorState:null,
typeaheadReporter:null,
mentions:null};},


function(m){
switch(m.type){
case c('ReactComposerStatusActionType').SET_MENTIONS_SOURCE:
l&&l.$ReactComposerStatusStore_handleSetMentionsSource(m);
break;
case c('ReactComposerStatusActionType').SET_TYPEAHEAD_REPORTER:
l&&l.$ReactComposerStatusStore_handleSetTypeaheadReporter(m);
break;
case c('ReactComposerStatusActionType').SET_EDITOR_STATE:
l&&l.$ReactComposerStatusStore_handleSetEditorState(m);
break;
case c('ReactComposerStatusActionType').SET_ORIGINAL_EDITOR_STATE:
l&&l.$ReactComposerStatusStore_handleSetOriginalEditorState(m);
break;
case c('ReactComposerStatusActionType').SET_MENTIONS:
l&&l.$ReactComposerStatusStore_handleSetMentions(m);
break;
case c('ReactComposerStatusActionType').SET_TEXT_LENGTH:
l&&l.$ReactComposerStatusStore_handleSetTextLength(m);
break;}});



l=this;}
k.prototype.

getMentionsSource=function(l){'use strict';
return this.getComposerData(l).mentionsSource;};
k.prototype.

getTypeaheadReporter=function(l){'use strict';
return this.getComposerData(l).typeaheadReporter;};
k.prototype.

getEditorState=function(l){'use strict';
return this.getComposerData(l).editorState;};
k.prototype.

getOriginalEditorState=function(l){'use strict';
return this.getComposerData(l).originalEditorState;};
k.prototype.

getMentions=function(l){'use strict';
return this.getComposerData(l).mentions;};
k.prototype.

getMessage=
function(l){

var m=arguments.length<=1||arguments[1]===undefined?false:arguments[1];'use strict';
var n=this.getEditorState(l);
if(!n)
return '';

var o=n.getCurrentContent(),



p=m?'\n':'';
return c('getMentionsTextForContentState')(o,p);};
k.prototype.

getMessageText=function(l){'use strict';
var m=this.getEditorState(l);
if(!m)
return '';

var n=m.getCurrentContent();
return n?n.getPlainText():'';};
k.prototype.

getRichTextBlocks=function(l){'use strict';
var m=c('ReactComposerTaggerStore').hasMarkdown(l);
if(m)
return null;


var n=this.getEditorState(l);
if(!n)
return null;


var o=n.getCurrentContent(),
p=c('encodeBlocks')(o);
if(!j(p))
return null;

var q=
{encodedContent:p,
implicitLinks:c('getImplicitURLRangesForContentState')(o)};

return c('getRichComposedTextDataForSave')(q);};
k.prototype.

getOriginalMessageText=function(l){'use strict';
var m=this.getOriginalEditorState(l);
if(!m)
return '';

var n=m.getCurrentContent();
return n?n.getPlainText():'';};
k.prototype.









getTextLength=function(l){'use strict';
return this.getComposerData(l).textLength;};
k.prototype.

$ReactComposerStatusStore_handleSetMentionsSource=function(l){'use strict';
var m=this.getComposerData(l.composerID);
m.mentionsSource=l.mentionsSource;

this.emitChange(l.composerID);};
k.prototype.

$ReactComposerStatusStore_handleSetTypeaheadReporter=function(l){'use strict';
var m=this.getComposerData(l.composerID);
m.typeaheadReporter=l.typeaheadReporter;

this.emitChange(l.composerID);};
k.prototype.

$ReactComposerStatusStore_handleSetEditorState=function(l){'use strict';
var m=this.getComposerData(l.composerID);
m.editorState=l.editorState;
this.emitChange(l.composerID);};
k.prototype.

$ReactComposerStatusStore_handleSetOriginalEditorState=function(l){'use strict';
var m=this.getComposerData(l.composerID);
m.originalEditorState=l.originalEditorState;
this.emitChange(l.composerID);};
k.prototype.

$ReactComposerStatusStore_handleSetMentions=function(l){'use strict';
var m=this.getComposerData(l.composerID);
m.mentions=l.mentions;

this.emitChange(l.composerID);};
k.prototype.

$ReactComposerStatusStore_handleSetTextLength=function(l){'use strict';var m=
this.validateAction
(l,
['composerID','textLength']),n=m[0],o=m[1],


p=this.getComposerData(n);
p.textLength=o;

this.emitChange(n);};



f.exports=new k();}),null);

/** js/react_composer/ui/collections/ReactComposerCollectionsActionTypes.js */





__d('ReactComposerCollectionsActionTypes',['keyMirrorRecursive'],(function a(b,c,d,e,f,g){



f.exports=c('keyMirrorRecursive')
({SHOW_COLLECTION_SELECTOR:null,
HIDE_COLLECTION_SELECTOR:null,
SHOW_CREATION_LAYER:null,
HIDE_CREATION_LAYER:null},
'ReactComposerCollectionsActionTypes');}),null);

/** js/ui/core/xui/ToggleButton.js */





__d('ToggleButton',['cx','ArbiterMixin','CSS','Event','mixin'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits








(k,c('mixin')(c('ArbiterMixin')));j=i&&i.prototype;
function k(l,m){'use strict';
j.constructor.call(this);
this._root=l;
this._selected=m;

c('Event').listen(l,'click',this._handleClick.bind(this));}
k.prototype.

getRoot=function(){'use strict';
return this._root;};
k.prototype.

_handleClick=function(){'use strict';
var l=!this.isSelected();
this.setSelected(l);
this.inform(l?'select':'deselect');
this.inform('change',{selected:l});
return this;};
k.prototype.

isSelected=function(){'use strict';
return this._selected;};
k.prototype.

setSelected=function(l){'use strict';
l=l!==false;
if(this._selected!==l){
this._selected=l;
this._root.setAttribute('aria-pressed',l?'true':'false');
c('CSS').conditionClass
(this._root,
"_42fs",
l);}


return this;};



f.exports=k;}),null);

/** shared/LineClamp/LineClamp.react.js */






__d('LineClamp.react',['cx','React','Locale','getVendorPrefixedName','joinClasses'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,








k=c('React').PropTypes,

l=c('getVendorPrefixedName')('lineClamp');i=babelHelpers.inherits







(m,c('React').Component);j=i&&i.prototype;function m(){var n,o;for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=j.constructor).call.apply(n,[this].concat(q)),this.

















































$LineClamp_renderEllipsis=function(){
var s;
if(this.props.lineHeight&&!this.props.customEllipsisDisableGradient)
s=
{bottom:this.props.lineHeight+'px'};



var t;
if(this.props.customEllipsis&&this.props.customEllipsisDisableGradient){
t=c('Locale').isRTL()?
"_1osp":
"_1osq";}else 

t=c('Locale').isRTL()?
"_4ik3 _2k5c":
"_4ik3 _2k5d";


return (c('React').createElement('div',
{style:s,
className:t,
key:'ellipsis'},
this.props.customEllipsis?this.props.customEllipsis:'\u2026'));}.


bind(this),o;}m.prototype.

render=function(){
var n=!!l&&!this.props.disableNative,

o=c('joinClasses')

(this.props.className,"_4ik4"+


(n?' '+"_4ik5":'')),



p=this.props.children,
q={};

if(this.props.lineHeight){
q=
{lineHeight:this.props.lineHeight+'px'};

if(this.props.fitHeightToShorterText){
q=babelHelpers['extends']({},
q,
{maxHeight:this.props.lineHeight*this.props.lines});}else 


q=babelHelpers['extends']({},
q,
{height:this.props.lineHeight*this.props.lines});}



if(n){
q[l]=this.props.lines;}else{

o=c('joinClasses')(o,'clearfix');
if(this.props.customEllipsisDisableGradient){
p=
[c('React').createElement('div',{className:"_1osu",key:'spacer'}),
this.$LineClamp_renderEllipsis(),
c('React').createElement('div',{className:"_1osv",key:'inner'},


this.props.children)];}else 



p=
[c('React').createElement('div',{className:"_4ik6",key:'inner'},
p),

this.$LineClamp_renderEllipsis()];}





return (c('React').createElement('div',{className:o,style:q},
p));};


m.propTypes={customEllipsis:k.node,disableNative:k.bool,lineHeight:k.number,lines:k.number.isRequired,customEllipsisDisableGradient:k.bool,fitHeightToShorterText:k.bool};


f.exports=m;}),null);

/** shared/core/BlobFactory.js */




__d('BlobFactory',['emptyFunction'],(function a(b,c,d,e,f,g){





var h=void 0,
i=void 0;

function j(){

try{new b.Blob();

i=true;}catch(
l){
i=false;}}








var k=
b.BlobBuilder||
b.WebKitBlobBuilder||
b.MozBlobBuilder||
b.MSBlobBuilder;


if(b.Blob){
h=
{getBlob:function l(m,n){



m=m||[];
n=n||{};
if(i===undefined)
j();

if(i){

return new b.Blob(m,n);}else{

var o=new k();
for(var p=0;p<m.length;p++)
o.append(m[p]);

return o.getBlob(n.type);}},



isSupported:c('emptyFunction').thatReturnsTrue};}else 


h=
{getBlob:function l(){



},

isSupported:c('emptyFunction').thatReturnsFalse};



f.exports=h;}),null);

/** shared/core/htmlSpecialChars.js */




__d('htmlSpecialChars',[],(function a(b,c,d,e,f,g){





var h=/&/g,
i=/</g,
j=/>/g,
k=/"/g,
l=/'/g;







function m(n){
if(typeof n=='undefined'||n===null||!n.toString)
return '';


if(n===false){
return '0';}else
if(n===true)
return '1';


return n.
toString().
replace(h,'&amp;').
replace(k,'&quot;').
replace(l,'&#039;').
replace(i,'&lt;').
replace(j,'&gt;');}


f.exports=m;}),null);

/** shared/webworker/WebWorker.js */





__d('WebWorker',['invariant','BanzaiLogger','WebWorkerConfig','BlobFactory','EventListener','URI','areSameOrigin','destroyOnUnload','SubscriptionsHandler','XHRRequest','arrayContains','emptyFunction','getCrossOriginTransport','performanceNow','memoize','filterObject'],(function a(b,c,d,e,f,g,h){


















var i=b.URL||b.webkitURL;







function j(p){'use strict';
this.$WebWorker_receivedPong=false;
this.$WebWorker_state=null;
this.$WebWorker_resource=p;
this.$WebWorker_worker=null;
this.$WebWorker_messageHandler=c('emptyFunction');
this.$WebWorker_errorHandler=c('emptyFunction');
this.$WebWorker_earlyMessageBuffer=[];
this.$WebWorker_allowCrossPageTransition=false;
this.$WebWorker_workerSubscriptions=new (c('SubscriptionsHandler'))();


c('destroyOnUnload')(function(){
if(!this.$WebWorker_allowCrossPageTransition)
this.terminate();}.

bind(this));

this.$WebWorker_setState('constructed');}
j.prototype.








setMessageHandler=function(p){'use strict';
this.$WebWorker_messageHandler=p||c('emptyFunction');
return this;};
j.prototype.

setErrorHandler=function(p){'use strict';
this.$WebWorker_errorHandler=p||c('emptyFunction');
return this;};
j.prototype.

















postMessage=function(p,q){'use strict';

!this.isCurrentState('constructed')||h(0,
'Trying to post a message before executing a worker');


!this.isCurrentState('terminated')||h(0,
'Trying to post a message to a terminated worker');

if(this.isCurrentState('preparing')){

this.$WebWorker_earlyMessageBuffer.push(this.postMessage.bind
(this,
p,
q));

return this;}

var r=
{type:'message',
message:p};

if(q){
this.$WebWorker_worker.postMessage(r,q);}else 

this.$WebWorker_worker.postMessage(r);

return this;};
j.prototype.









terminate=function(){'use strict';
if(this.isCurrentState('executing'))
this.$WebWorker_worker.terminate();

if(!this.isCurrentState('terminated')){
this.$WebWorker_setState('terminated');
this.$WebWorker_worker=null;
this.$WebWorker_clearWorkerSubscriptions();


this.$WebWorker_earlyMessageBuffer=[];}

return this;};
j.prototype.





execute=function(){'use strict';

!this.isCurrentState('terminated')||h(0,
'Called execute on a terminated worker. '+
'Create a new instance to restart the worker.');


if(['preparing','executing'].some(this.isCurrentState,this))






return this;

this.$WebWorker_setState('preparing');


j.prepareResource(this.$WebWorker_resource,this.$WebWorker_executeNow.bind(this));
return this;};
j.prototype.






setAllowCrossPageTransition=function(p){'use strict';
this.$WebWorker_allowCrossPageTransition=p;
return this;};
j.prototype.






isCurrentState=function(p){'use strict';

c('arrayContains')(j.states,p)||h(0,
'%s is not a valid state',
p);

return p===this.$WebWorker_state;};
j.prototype.






$WebWorker_executeNow=function(){'use strict';

!this.isCurrentState('executing')||h(0,
'Trying to execute a worker multiple times');


if(this.isCurrentState('terminated'))
return;


this.$WebWorker_resource.sameOriginURL||this.$WebWorker_resource.source||h(0,
'Trying to execute worker with invalid/unprepared resource');

if(this.$WebWorker_resource.sameOriginURL){
this.$WebWorker_worker=new b.Worker(this.$WebWorker_resource.sameOriginURL);}else{

this.$WebWorker_worker=new b.Worker(j.evalWorkerURL);
this.$WebWorker_worker.postMessage(this.$WebWorker_resource.source);}

this.$WebWorker_postCommand('ping',Date.now());
if(this.$WebWorker_resource.dynamicModules)

try{this.$WebWorker_postCommand('defineModules',this.$WebWorker_resource.dynamicModules);}catch(
p){
this.terminate();
this.$WebWorker_log('define_error',{message:p.message});








throw p;}


this.$WebWorker_setupWorkerSubscriptions();
this.$WebWorker_setState('executing');


this.$WebWorker_earlyMessageBuffer.forEach(function(q){return q();});
this.$WebWorker_earlyMessageBuffer=null;};
j.prototype.





$WebWorker_clearWorkerSubscriptions=function(){'use strict';
this.$WebWorker_workerSubscriptions.release();};
j.prototype.










$WebWorker_postCommand=function(p){for(var q=arguments.length,r=Array(q>1?q-1:0),s=1;s<q;s++)r[s-1]=arguments[s];'use strict';
this.$WebWorker_worker.postMessage
({type:p,
args:r});};

j.prototype.

$WebWorker_log=function(event,p){'use strict';
j.$WebWorker_log
(event,
this.$WebWorker_resource.name,babelHelpers['extends']({},

p,
{cross_page_transition:!!this.$WebWorker_allowCrossPageTransition,
state:this.$WebWorker_state}));};


j.

$WebWorker_constructFeaturesSet=function(){'use strict';
return Object.keys(c('filterObject')
({object_url:j.$WebWorker_isBlobURLSupported(),
eval_url:n(),
data_url:j.$WebWorker_isDataURLSupported(),
worker:j.isSupported(),
transferables:j.areTransferablesSupported()},
function(p){return !!p;}));};
j.prototype.






$WebWorker_setupWorkerSubscriptions=function(){'use strict';
this.$WebWorker_workerSubscriptions.addSubscriptions
(c('EventListener').listen
(this.$WebWorker_worker,
'message',
this.$WebWorker_handleMessageEvent.bind(this)),

c('EventListener').listen
(this.$WebWorker_worker,
'error',
this.$WebWorker_handleErrorEvent.bind(this)));};


j.prototype.






$WebWorker_handleErrorEvent=function(p){'use strict';




var q=this.$WebWorker_errorHandler(p);
if(!q&&!p.defaultPrevented)
this.$WebWorker_log('exception',
{message:p.message});};


j.prototype.







$WebWorker_handleMessageEvent=function(event){'use strict';
var p=event.data;
switch(p.type){
case 'message':
this.$WebWorker_messageHandler(p.message);
break;
case 'pong':
this.$WebWorker_receivedPong=true;
this.$WebWorker_log('executed',
{dt:Math.floor(p.args[1]-p.args[0]),
bytes:this.$WebWorker_resource.source?
this.$WebWorker_resource.source.length:
-1});

break;
case 'terminate':
this.terminate();
break;
case 'haste-error':



this.terminate();
this.$WebWorker_log('haste_error',{message:p.message});
break;
case 'console':
var q=p.args.shift();

c('arrayContains')(['log','error','info','debug','warn'],q)||h(0,
'%s is not a valid console command',
q);

b.console[q].apply(b.console,p.args);
break;}};

j.prototype.






$WebWorker_setState=function(p){'use strict';

c('arrayContains')(j.states,p)||h(0,
'%s is not a valid WebWorker state',
p);

this.$WebWorker_log('transition',{next_state:p});
this.$WebWorker_state=p;};
j.














prepareResource=function(p,q){'use strict';
q=q||c('emptyFunction');

p.sameOriginURL||p.url||p.source||h(0,
'Invalid resource. '+
'A resource must have a sameOriginURL, url, or source attribute.');


!!j.isSupported()||h(0,
'WebWorker not supported. Should not prepare resource.');

if(p.sameOriginURL){

q();}else

if(p.url&&c('areSameOrigin')
(new (c('URI'))(p.url),new (c('URI'))(b.location.href))){




p.sameOriginURL=p.url;
q();}else
if(p.source){


if(j.$WebWorker_isContentStringURLSupported())
p.sameOriginURL=j.$WebWorker_buildURLFromContentString
(p.source);


q();}else 








if(!p.loading){
var r=c('performanceNow')();

p.loading=[q];
j.$WebWorker_getContentsFromURL(p.url,function(s){
if(s){
p.source=s;
if(j.$WebWorker_isContentStringURLSupported())
p.sameOriginURL=
j.$WebWorker_buildURLFromContentString(s);}


j.$WebWorker_log('prepared',p.name,
{dt:Math.floor(c('performanceNow')()-r),
bytes:s.length});

p.loading.forEach(function(t){return t();});
p.loading=false;});}else 




p.loading.push(q);


return p;};
j.













releaseResource=function(p){'use strict';
if(p.sameOriginURL.indexOf('blob:')===0){
if(i.revokeObjectURL)
i.revokeObjectURL(p.sameOriginURL);

p.sameOriginURL=null;}

return p;};
j.





isSupported=function(){'use strict';
return m&&
(j.$WebWorker_isContentStringURLSupported()||n());};
j.









areTransferablesSupported=function(){'use strict';







return j.isSupported()&&o();};
j.











$WebWorker_getContentsFromURL=function(p,q){'use strict';
new (c('XHRRequest'))(p).
setTransportBuilder(c('getCrossOriginTransport')).
setMethod('GET').
setResponseHandler(function(r){
q(r);}).

setErrorHandler(q.bind(null,null)).
send();};
j.







$WebWorker_buildURLFromContentString=function(p){'use strict';

j.$WebWorker_isContentStringURLSupported()||h(0,
'Browser does not support content URLs');

if(j.$WebWorker_isBlobURLSupported()){
var q=c('BlobFactory').getBlob([p],{type:'application/javascript'});
return i.createObjectURL(q);}

if(j.$WebWorker_isDataURLSupported())
return 'data:application/javascript,'+encodeURIComponent(p);};

j.






$WebWorker_isBlobURLSupported=function(){'use strict';
return c('BlobFactory').isSupported()&&
k();};
j.






$WebWorker_isDataURLSupported=function(){'use strict';
return l();};
j.

$WebWorker_isContentStringURLSupported=function(){'use strict';
return j.$WebWorker_isBlobURLSupported()||j.$WebWorker_isDataURLSupported();};
j.

$WebWorker_log=function(event,p,q){'use strict';
if(!c('WebWorkerConfig').logging.enabled)
return;

c('BanzaiLogger').log
(c('WebWorkerConfig').logging.config,babelHelpers['extends']({},

q,
{features_array:j.$WebWorker_constructFeaturesSet(),
event:event,
resource:p}));};





var k=c('memoize')(function(){
var p,q;
if(!i||!i.createObjectURL)
return false;


try{p=i.createObjectURL(c('BlobFactory').getBlob


([''],
{type:'application/javascript'}));

var s=new b.Worker(p);
s.terminate();
q=true;}catch(
r){
q=false;}finally{

if(i.revokeObjectURL)
i.revokeObjectURL(p);}


return q;}),


l=c('memoize')(function(){
var p;

try{var r=new b.Worker('data:application/javascript,');
r.terminate();
p=true;}catch(
q){
p=false;}

return p;}),


m=!!b.Worker,



n=c('memoize')(function(){
var p;

try{var r=new b.Worker(j.evalWorkerURL);
r.terminate();
p=true;}catch(
q){
p=false;}

return p;}),


o=c('memoize')(function(){
var p;

try{var r=new b.Worker(j.evalWorkerURL),
s=new ArrayBuffer(0);
r.postMessage({buffer:s},[s]);
r.terminate();
p=true;}catch(
q){
p=false;}

return p;});


j.states=['constructed','preparing','executing','terminated'];
j.evalWorkerURL=c('WebWorkerConfig').evalWorkerURL;

f.exports=j;}),null);
