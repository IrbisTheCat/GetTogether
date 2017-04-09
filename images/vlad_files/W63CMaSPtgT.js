if (self.CavalryLogger) { CavalryLogger.start_js(["lXke6"]); }

/** __static_js_modules__/privacyselectorevent.js */




__d("PrivacySelectorEvent",[],(function a(b,c,d,e,f,g){

f.exports={OPEN_MENU:"open_menu",CLOSE_MENU:"close_menu",MORE_OPTIONS:"more_options",MORE:"more",SEE_ALL:"see_all",CUSTOM_SAVE:"custom_save",CUSTOM_CANCEL:"custom_cancel",SELECT_CUSTOM:"select_custom",SPECIFIC_FRIENDS_SAVE:"specific_friends_save",SPECIFIC_FRIENDS_CANCEL:"specific_friends_cancel",SELECT_SPECIFIC_FRIENDS:"select_specific_friends",FRIENDS_EXCEPT_SAVE:"friends_except_save",FRIENDS_EXCEPT_CANCEL:"friends_except_cancel",SELECT_FRIENDS_EXCEPT:"select_friends_except",SELECT_EVERYONE:"select_everyone",SELECT_FRIENDS_OF_FRIENDS:"select_friends_of_friends",SELECT_FRIENDS:"select_friends",SELECT_FRIENDS_EXCEPT_ACQUIANTANCES:"select_friends_except_acquaintances",SELECT_ONLY_ME:"select_only_me",SELECT_FB_ONLY:"select_fb_only",SELECT_FRIENDLIST:"select_friendlist",SELECT_OTHER:"select_other"};}),

null);

/** __static_js_modules__/savedcustomprivacytype.js */




__d("SavedCustomPrivacyType",[],(function a(b,c,d,e,f,g){

f.exports={SPECIFIC_FRIENDS:"specific_friends",FRIENDS_EXCEPT:"friends_except"};}),

null);

/** js/ads/rhc/constants/AdsPagerConstants.js */





__d('AdsPagerConstants',['keyMirrorRecursive'],(function a(b,c,d,e,f,g){



var h=c('keyMirrorRecursive')
({ADD_PAGE:'',
PAGE_TRANSITION:'',
REQUEST_PAGE:''}),


i=c('keyMirrorRecursive')
({VIEW_ACTION:'',
SERVER_ACTION:''});


f.exports=
{ActionTypes:h,
PayloadSources:i};}),null);

/** js/ads/rhc/stores/AdsPagerDispatcher.js */




__d('AdsPagerDispatcher',['AdsPagerConstants','Dispatcher_DEPRECATED'],(function a(b,c,d,e,f,g){

'use strict';




var h=c('AdsPagerConstants').PayloadSources;

function i(k){
return function(l){
this.dispatch
({payloadSource:k,
action:l});};}




var j=Object.assign(new (c('Dispatcher_DEPRECATED'))(),
{handleUpdateFromViewAction:i
(h.VIEW_ACTION),


handleUpdateFromServerAction:i
(h.SERVER_ACTION)});



f.exports=j;}),null);

/** js/ads/rhc/AdsRefreshHandler.js */






















__d('AdsRefreshHandler',['csx','AdsMouseStateStore','AdsPagerConstants','AdsPagerDispatcher','Animation','Arbiter','DataAttributeUtils','DOM','Event','SubscriptionsHandler','Toggler','UIPagelet','cxodecode','debounceAcrossTransitions','getOrCreateDOMID'],(function a(b,c,d,e,f,g,h){


















var i=c('AdsMouseStateStore').STATES,
j=600,

k=c('AdsMouseStateStore').get(),

l=void 0;















function m(n,o,p){'use strict';
if(!p.data||!p.pid)
return;

if(o.nonce)
l=c('cxodecode')(o.nonce);

this.$AdsRefreshHandler_root=n;
this.$AdsRefreshHandler_lastLoadTime=Date.now();
this.$AdsRefreshHandler_config=o;
this.$AdsRefreshHandler_egoContext=p;
this.$AdsRefreshHandler_refreshNum=0;
this.$AdsRefreshHandler_refreshScheduled=false;
this.$AdsRefreshHandler_refreshEnabled=true;
this.$AdsRefreshHandler_reloadRequest=null;

this.$AdsRefreshHandler_debounceReloadAdsIfNeeded=c('debounceAcrossTransitions')
(this.reloadAdsIfNeeded.bind(this),
this.$AdsRefreshHandler_config.delay);


this.$AdsRefreshHandler_subscriptions=new (c('SubscriptionsHandler'))();
this.$AdsRefreshHandler_subscriptions.addSubscriptions
(c('Event').listen
(this.$AdsRefreshHandler_root,'mouseenter',this.setMouseOver.bind(this,true)),

c('Event').listen
(this.$AdsRefreshHandler_root,'mouseleave',this.setMouseOver.bind(this,false)),

k.addListener
('change',this.onMouseStateStoreChange.bind(this)),

c('Arbiter').subscribe
('AdsPreferencesDialog/opened',
this.stopRefreshingRHC.bind(this)),

c('Arbiter').subscribe
('AdsPreferencesDialog/closed',
this.startRefreshingRHC.bind(this)),

c('Arbiter').subscribe
('VideoChannelView/opened',
this.stopRefreshingRHC.bind(this)),

c('Arbiter').subscribe
('VideoChannelView/closed',
this.startRefreshingRHC.bind(this)));



this.$AdsRefreshHandler_bindToggleEvents();
c('AdsPagerDispatcher').register(this.handlePageDispatch.bind(this));}
m.prototype.

$AdsRefreshHandler_bindToggleEvents=function(){'use strict';
if(this.$AdsRefreshHandler_toggleSubscriptions)

this.$AdsRefreshHandler_toggleSubscriptions.release();

this.$AdsRefreshHandler_toggleSubscriptions=new (c('SubscriptionsHandler'))();


var n=c('DOM').scry(this.$AdsRefreshHandler_root,'.uiToggle');
for(var o=0;o<n.length;o++)
this.$AdsRefreshHandler_toggleSubscriptions.addSubscriptions
(c('Toggler').listen('show',n[o],this.stopRefreshingRHC.bind(this)),
c('Toggler').listen('hide',n[o],this.startRefreshingRHC.bind(this)));};


m.prototype.

handlePageDispatch=function(n){'use strict';
var o=n.action||{};
if(o.actionType===c('AdsPagerConstants').ActionTypes.REQUEST_PAGE)
this.reloadAds();};

m.prototype.

setMouseOver=function(n){'use strict';
this.$AdsRefreshHandler_mouseOver=n;
if(n&&this.$AdsRefreshHandler_reloadRequest!=null){
this.$AdsRefreshHandler_reloadRequest.cancel();
this.$AdsRefreshHandler_reloadRequest=null;}};

m.prototype.




subscribeDefaultEventsForRefresh=function(){'use strict';
this.$AdsRefreshHandler_subscriptions.addSubscriptions
(c('Event').listen(window,'scroll',this.$AdsRefreshHandler_debounceReloadAdsIfNeeded),
c('Event').listen(window,'resize',this.$AdsRefreshHandler_debounceReloadAdsIfNeeded));

return this;};
m.prototype.

reloadWithDebounce=function(){'use strict';
this.$AdsRefreshHandler_debounceReloadAdsIfNeeded();};
m.prototype.

reloadWithoutDebounce=function(){'use strict';
this.reloadAdsIfNeeded();};
m.prototype.


stopRefreshingRHC=function(n,o){'use strict';
this.$AdsRefreshHandler_refreshEnabled=false;};
m.prototype.


startRefreshingRHC=function(n,o){'use strict';
this.$AdsRefreshHandler_lastLoadTime=Date.now();
this.$AdsRefreshHandler_refreshEnabled=true;};
m.prototype.




forceLoadIfEnoughTimePassed=function(n){'use strict';
if(Date.now()-this.$AdsRefreshHandler_lastLoadTime>n)
this.reloadAds();};

m.prototype.




containsPremium=function(){'use strict';
var n=c('DOM').scry
(this.$AdsRefreshHandler_root,
l||"div._4u8");

return !!n.filter(function(o){
return JSON.parse(c('DataAttributeUtils').getDataAttribute(o,'data-ad')).
segment==='premium';}).
length;};
m.prototype.

reloadAdsIfNeeded=function(){'use strict';
if(!this.$AdsRefreshHandler_root)
return;

c('Arbiter').inform('AdsRefreshHandler/CheckingReload');

if(this.$AdsRefreshHandler_config.stateRefresh){
this.reloadAdsIfNeededStateBased();
return;}


if(this.containsPremium()||
this.$AdsRefreshHandler_mouseOver||
!this.$AdsRefreshHandler_config.interval)

return;

if(Date.now()-this.$AdsRefreshHandler_lastLoadTime>=this.$AdsRefreshHandler_config.interval)
this.reloadAds();};

m.prototype.

reloadAdsIfNeededStateBased=function(){'use strict';









if(Date.now()-this.$AdsRefreshHandler_lastLoadTime<this.$AdsRefreshHandler_config.interval)
return;

if(this.containsPremium())

return;

if(!this.$AdsRefreshHandler_config.interval)

return;


this.$AdsRefreshHandler_refreshScheduled=true;
c('Arbiter').inform('AdsRefreshHandler/RefreshScheduled');
this.checkScheduledRefresh();};
m.prototype.

getRefreshScheduled=function(){'use strict';
return this.$AdsRefreshHandler_refreshScheduled;};
m.prototype.

onMouseStateStoreChange=function(){'use strict';
this.checkScheduledRefresh();};
m.prototype.


checkScheduledRefresh=function(){'use strict';
if(!this.$AdsRefreshHandler_refreshScheduled)
return;

if(this.$AdsRefreshHandler_mouseOver)
return;


var n=k.getState(),
o=false;

switch(n){



case i.HOVER:
case i.NO_INTENT:
o=true;
break;

default:break;}


if(!o)
return;


this.$AdsRefreshHandler_refreshScheduled=false;
this.reloadAds();};
m.prototype.

reloadAds=function(){'use strict';
if(!this.$AdsRefreshHandler_root)
return;


this.$AdsRefreshHandler_lastLoadTime=Date.now();

if(!this.$AdsRefreshHandler_refreshEnabled)
return;


var n=this.$AdsRefreshHandler_egoContext&&this.$AdsRefreshHandler_egoContext.data,
o=babelHelpers['extends']({},
n,
{refresh_num:++this.$AdsRefreshHandler_refreshNum});


this.$AdsRefreshHandler_reloadRequest=c('UIPagelet').loadFromEndpoint
('WebEgoPane',
this.$AdsRefreshHandler_root,
{dom_id:c('getOrCreateDOMID')(this.$AdsRefreshHandler_root),
pid:this.$AdsRefreshHandler_egoContext.pid,
data:o},

{bundle:false,
handler:this.onLoadHandler.bind(this)});

c('Arbiter').inform('AdsRefreshHandler/AdsLoading');};
m.prototype.

onLoadHandler=function(){'use strict';
c('Arbiter').inform('AdsRefreshHandler/AdsLoaded');
this.$AdsRefreshHandler_reloadRequest=null;
this.$AdsRefreshHandler_bindToggleEvents();

if(!this.$AdsRefreshHandler_config.fade)
return;

new (c('Animation'))(this.$AdsRefreshHandler_root).
from('opacity',0).
to('opacity',1).
duration(j).
go();};
m.prototype.

cleanup=function(){'use strict';


this.$AdsRefreshHandler_root=null;
this.$AdsRefreshHandler_subscriptions.release();
this.$AdsRefreshHandler_debounceReloadAdsIfNeeded.reset();};



f.exports=m;}),null);

/** js/ui/core/xui/navigation/XUISidebar.js */





__d('XUISidebar',['csx','DirectionalDockingElement','DOMDimensions','DOMQuery','Event','SubscriptionsHandler','Run','ViewportBounds','getElementPosition','getViewportDimensions','throttle'],(function a(b,c,d,e,f,g,h){














var i="._2yaa";






function j(k){'use strict';
this.$XUISidebar_dockingElement=new (c('DirectionalDockingElement'))(k);
this.$XUISidebar_root=k;
this.$XUISidebar_setOffset();

var l=c('throttle')(this.$XUISidebar_setOffset.bind(this));

this.$XUISidebar_subscriptions=new (c('SubscriptionsHandler'))();
this.$XUISidebar_subscriptions.addSubscriptions
(c('Event').listen(window,'resize',l),
c('Event').listen(this.$XUISidebar_root,'resize',l),
c('Run').onLeave(this.$XUISidebar_onLeave.bind(this)));}

j.prototype.

$XUISidebar_onLeave=function(){'use strict';
this.$XUISidebar_subscriptions.release();

this.$XUISidebar_subscriptions=null;};
j.prototype.

$XUISidebar_setOffset=function(){var k,l=this;'use strict';
var m=c('DOMDimensions').getElementDimensions(this.$XUISidebar_root).height,
n=c('getElementPosition')(this.$XUISidebar_root).y,
o=c('ViewportBounds').getTop(),
p=c('getViewportDimensions')().height-o,

q=p-m;

if(m<p){
q=o;}else 
(function(){

var r=[];

c('DOMQuery').scry
(l.$XUISidebar_root,
i).
forEach(function(v){
r.push(c('getElementPosition')(v).y);});


r.sort(function(v,w){return v-w;});

for(var s=0,t=r.length;s<t;s++){
var u=r[s]-n;
if(m-u<p){
q=o-u;
break;}}})

();


this.$XUISidebar_dockingElement.setOffset(q);};



f.exports=j;}),null);

/** js/components/Navigation/FaceliftLeftNavController.js */





__d('FaceliftLeftNavController',['csx','cx','Arbiter','CSS','Event','NavigationMessage','Parent','Run','SubscriptionsHandler','XUISidebar'],(function a(b,c,d,e,f,g,h,i){

'use strict';













var j=void 0,
k=void 0,
l=void 0,

m=

{init:function r(s){
n(s);

if(!l){
l=new (c('SubscriptionsHandler'))();
l.addSubscriptions
(c('Arbiter').subscribe(c('NavigationMessage').NAVIGATION_COMPLETED,p),
c('Run').onLeave(q));}


l.addSubscriptions(c('Event').listen(s,'click',o));}};



function n(r){
if(k){
c('Event').fire(window,'resize');
return;}


j=c('Parent').bySelector(r,'#leftCol');
if(!j)
return;


k=j.appendChild(document.createElement('div'));
while(k!==j.firstChild)
k.appendChild(j.firstChild);

k.style.paddingTop='12px';
j.style.marginTop='-12px';

new (c('XUISidebar'))(k);}


function o(r){var s=r.detail,t=r.target,
u=c('Parent').bySelector(t,"._3mht");
if(u){
c('CSS').removeClass(u.parentNode,"_5pyq");
c('Event').fire(window,'resize');
if(!s)
u.previousSibling.lastChild.focus();}}




function p(){
if(j&&k)
k.style.width=getComputedStyle(j).width;}



function q(){
j=null;
k=null;
if(l){
l.release();
l=null;}}



f.exports=m;}),null);

/** js/components/Navigation/FaceliftLeftNavMenu.js */





__d('FaceliftLeftNavMenu',['csx','cx','$','AsyncRequest','CSS','DOM','getStyleProperty'],(function a(b,c,d,e,f,g,h,i){

'use strict';










var j=200,

k=

{init:function m(n){
n.subscribe('itemclick',l);}};



function l(m,n){var o,p,q=n.item,
r=q.getRoot();
if(c('CSS').matchesSelector(r,"._10jo")){(function(){
var t=c('$')('navItem_'+r.getAttribute('data-id')),
u=t.parentNode;

if(t!==u.firstChild){
var v=0;
for(var w=u.firstChild;w!==t;w=w.nextSibling,v++)
c('CSS').addClass(w,"_10jh");

t.setAttribute('data-index',v);
c('CSS').addClass(t,"_10ji");
c('CSS').addClass(t,"_10jj");

setTimeout(function(){
for(var x=u.firstChild;x!==t;x=x.nextSibling)
c('CSS').removeClass(x,"_10jh");

c('DOM').prependContent(t.parentNode,t);
t.clientTop;
c('CSS').removeClass(t,"_10jj");},
j*2);

setTimeout(function(){
c('CSS').removeClass(t,"_10ji");},
j*3);}


c('CSS').addClass(r,'hidden_elem');
c('CSS').removeClass(r.nextSibling,'hidden_elem');

new (c('AsyncRequest'))().
setMethod('POST').
setURI('/ajax/bookmark/add/').
setData({id:t.id}).
send();})();}else
if(c('CSS').matchesSelector(r,"._10jp")){(function(){
var t=c('$')('navItem_'+r.getAttribute('data-id')),

u=void 0,
v=t.hasAttribute('data-index')?
t.getAttribute('data-index'):
10;
for(var w=t.nextSibling,x=0;
w&&(w.hasAttribute('data-pinned')||
c('getStyleProperty')(w,'display')!=='none'&&x<v);
w=w.nextSibling,x++){
c('CSS').addClass(w,"_10jm");
u=w;}

if(u){
c('CSS').addClass(t,"_10ji");
c('CSS').addClass(t,"_10jj");

setTimeout(function(){
for(var y=t.nextSibling;y;y=y.nextSibling)
c('CSS').removeClass(y,"_10jm");

c('DOM').insertAfter(u,t);
t.clientTop;
c('CSS').removeClass(t,"_10jj");},
j*2);

setTimeout(function(){
c('CSS').removeClass(t,"_10ji");},
j*3);}


c('CSS').addClass(r,'hidden_elem');
c('CSS').removeClass(r.previousSibling,'hidden_elem');

new (c('AsyncRequest'))().
setMethod('POST').
setURI('/ajax/bookmark/delete/').
setData({id:t.id}).
send();})();}else
if(c('CSS').matchesSelector(r,"._10jq")){
var s=c('$')('navItem_'+r.getAttribute('data-id'));
c('CSS').addClass(s,"_10jn");

new (c('AsyncRequest'))().
setMethod('POST').
setURI('/ajax/bookmark/hide/').
setData({id:s.id}).
send();}}



f.exports=k;}),null);

/** js/home/BookmarkFeedSorter.js */





__d('BookmarkFeedSorter',['Run'],(function a(b,c,d,e,f,g){



var h,

i=


{init:function j(k){
h=k;

c('Run').onLeave(function(){
h=null;});},




setChecked:function j(k){
if(h)
h.setValue(k);}};





f.exports=i;}),null);

/** js/pages/browser/PagesBrowserUtils.js */





__d('PagesBrowserUtils',['Event','QE2Logger','tidyEvent'],(function a(b,c,d,e,f,g){





var h='pages_browser_your_pages_tab_redesign',
i='navItem_2530096808',

j=


{init:function k(){
var l=
document.getElementById(i);
c('tidyEvent')(c('Event').listen(l,'click',function(m){
c('QE2Logger').logExposureForUser(h);}));}};




f.exports=j;}),null);

/** js/photos/modules/PhotosUploadWaterfallMixin.js */





__d('PhotosUploadWaterfallMixin',['PhotosUploadWaterfall','emptyFunction'],(function a(b,c,d,e,f,g){




var h=c('emptyFunction'),










i=
{getUploaderApp:h,
getWaterfallID:h,
getAdditionalData:function j(){return {};},

logWaterfallStep:function j(k,l,m){
c('PhotosUploadWaterfall').sendSignal(babelHelpers['extends']

({qn:this.getWaterfallID(),
uploader:this.getUploaderApp(),
step:k,
ref:this.getWaterfallSource&&this.getWaterfallSource()},
this.getAdditionalData(),
l),

m);},



logWaterfallStepUsingBanzai:function j(k,l,m){
c('PhotosUploadWaterfall').sendBanzai(babelHelpers['extends']

({qn:this.getWaterfallID(),
uploader:this.getUploaderApp(),
step:k,
ref:this.getWaterfallSource&&this.getWaterfallSource()},
this.getAdditionalData(),
l),

m);}};




f.exports=i;}),null);

/** js/photos/omnipicker/PhotoSourceTypes.js */




__d('PhotoSourceTypes',['keyMirror'],(function a(b,c,d,e,f,g){



f.exports=c('keyMirror')
({COMPUTER:null,
POSTED_PHOTOS:null,
SYNCED_PHOTOS:null,
SUGGESTIONS:null,
PAGES_POSTED_PHOTOS:null});}),null);

/** js/photos/omnipicker/selection/BaseSelectionContainer.js */





__d('BaseSelectionContainer',[],(function a(b,c,d,e,f,g){

var h=0;





function i(){'use strict';
this.$BaseSelectionContainer_id=(h++).toString();}
i.prototype.




getSelectionContainerID=function(){'use strict';
return this.$BaseSelectionContainer_id;};
i.prototype.




getSource=function(){'use strict';
throw new Error('This must be implemented by the child class');};
i.prototype.




getName=function(){'use strict';
return null;};
i.prototype.




getSize=function(){'use strict';
return null;};
i.prototype.





hasPlaceholderUI=function(){'use strict';
throw new Error('This must be implemented by the child class');};





f.exports=i;}),null);

/** js/photos/omnipicker/selection/SelectionSource.js */




__d('SelectionSource',['PhotoSourceTypes'],(function a(b,c,d,e,f,g){



var h=
{FILE:'file',
FLASH:'flash',
VAULT:'vault',
SUGGESTIONS:'suggestions',
POSTED_PHOTOS:'posted_photos',
PAGES_POSTED_PHOTOS:'pages_posted_photos',

toPhotoSourceType:function i(j){
switch(j){
case h.FILE:
case h.FLASH:
return c('PhotoSourceTypes').COMPUTER;
case h.VAULT:
return c('PhotoSourceTypes').SYNCED_PHOTOS;
case h.SUGGESTIONS:
return c('PhotoSourceTypes').SUGGESTIONS;
case h.POSTED_PHOTOS:
return c('PhotoSourceTypes').POSTED_PHOTOS;
case h.PAGES_POSTED_PHOTOS:
return c('PhotoSourceTypes').PAGES_POSTED_PHOTOS;

default:throw new Error('No mapping for SelectionSource: '+j);}}};




f.exports=h;}),null);

/** js/photos/omnipicker/selection/FileSelectionContainer.js */





__d('FileSelectionContainer',['BaseSelectionContainer','SelectionSource'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits







(j,c('BaseSelectionContainer'));i=h&&h.prototype;




function j(k){'use strict';
i.constructor.call(this);
this.$FileSelectionContainer_file=k;}
j.prototype.




getFile=function(){'use strict';
return this.$FileSelectionContainer_file;};
j.prototype.




getSource=function(){'use strict';
return c('SelectionSource').FILE;};
j.prototype.




getName=function(){'use strict';
return this.$FileSelectionContainer_file.fileName||this.$FileSelectionContainer_file.name;};
j.prototype.




getSize=function(){'use strict';
return this.$FileSelectionContainer_file.fileSize||this.$FileSelectionContainer_file.size;};
j.prototype.




hasPlaceholderUI=function(){'use strict';
return false;};



f.exports=j;}),null);

/** js/photos/upload/HTML5FilePicker.js */




__d('HTML5FilePicker',['cx','ArbiterMixin','BrowserSupport','CSS','DOM','FilePickerEvent','FileSelectionContainer','Keys','Parent','PhotosUploadID','PhotosUploadWaterfall','PhotosUploadWaterfallMixin','PhotosUploadWaterfallXMixin','PUWApplications','PUWSteps','URI','getOrCreateDOMID'],(function a(b,c,d,e,f,g,h){




















function i(j,k){
this._config=babelHelpers['extends']
({accept:undefined,
multiple:undefined},
k);


this._button=j;
this._beginInformed=false;

if(!c('BrowserSupport').hasFileAPI()){
this.logStep(c('PUWSteps').CLIENT_PROCESS_UNAVAILABLE,
{error:'no_file_api'});




if(Object.prototype.hasOwnProperty.call(this._config,'fallbackFunction')){
this._config.fallbackFunction.call(this);
return;}


return;}


this._subscriptions=[];

var l=this._config.input||c('DOM').create
('input',

{type:'file',
className:"_n",
tabindex:'-1'});


if(Object.prototype.hasOwnProperty.call(this._config,'accept'))
l.accept=this._config.accept;

if(Object.prototype.hasOwnProperty.call(this._config,'multiple'))
l.multiple=this._config.multiple;

if(Object.prototype.hasOwnProperty.call(this._config,'title'))
l.title=this._config.title;

var m=c('DOM').create
('label',

{className:'accessible_elem',
'for':c('getOrCreateDOMID')(l)},

l.title),

n=c('DOM').create
('div',
{className:"_3jk"},
[m,l]);

c('CSS').addClass(this._button,"_m");
c('DOM').appendContent(this._button,n);






this._button.setAttribute('rel','ignore');

this._bindInput(l);

this._button.onkeydown=function(event){
if(event.keyCode===c('Keys').RETURN){
this._input.click();
if(event&&event.stopPropagation)
event.stopPropagation();}}.


bind(this);

var o=c('Parent').byClass(this._button,'addPhotosDisabled');
if(o){
c('CSS').removeClass(o,'addPhotosDisabled');
c('CSS').addClass(o,'addPhotosEnabled');}}



Object.assign
(i.prototype,c('ArbiterMixin'),c('PhotosUploadWaterfallMixin'),c('PhotosUploadWaterfallXMixin'),




{getUploaderApp:function j(){
return c('PhotosUploadWaterfall').APP_HTML5;},


getWaterfallID:function j(){
return this._config.qn;},


getWaterfallAppName:function j(){
return c('PUWApplications').WEB_HTML5;},


getWaterfallSource:function j(){
return this._config.ref;},



getSwfID:function j(){
return null;},


_constructFileList:function j(){

var k=Array.from(this._input.files);
k.forEach(function(l){
l.uploadID=c('PhotosUploadID').getNewID();});

return k;},


_constructFileSelectionContainerList:function j(){
var k=Array.from(this._input.files);
return k.map(function(l){
return new (c('FileSelectionContainer'))(l);});},



cleanup:function j(){
if(this._input){
this._input.onclick=null;
this._input.onchange=null;}

if(this._button)
this._button.onkeydown=null;},



_bindInput:function j(k){
this.cleanup();

k.onclick=function(){
this.logWaterfallStep(c('PhotosUploadWaterfall').SELECT_START);
if(!this._beginInformed){
this._beginInformed=true;
this.inform(c('FilePickerEvent').BEGIN||'FilePickerEvent/BEGIN');}

this.inform(c('FilePickerEvent').SELECT_START);}.
bind(this);


k.onchange=function(){
this.inform(c('FilePickerEvent').SELECTED,
{sender:this,
files:this._constructFileList(),
selections:this._constructFileSelectionContainerList()});

this._bindInput(this._input.cloneNode(false));}.
bind(this);

if(this._input)
c('DOM').replace(this._input,k);

this._input=k;}});



f.exports=i;}),null);

/** js/privacy/selector/PrivacySelectorSelectableItem.js */






__d('PrivacySelectorSelectableItem',['csx','cx','CSS','DOM','DOMQuery','MenuSelectableItem','React'],(function a(b,c,d,e,f,g,h,i){var j,k;j=babelHelpers.inherits










(l,c('MenuSelectableItem'));k=j&&j.prototype;
function l(m){'use strict';
if(m.icon){
var n=
"_392n";

if(m.children){

m.icon=
c('React').createElement('div',{className:n},
m.icon);}else 



m.icon=c('DOM').create
('div',
{className:n},
m.icon);}




k.constructor.call(this,m);}
l.prototype.

render=function(){'use strict';
var m=k.render.call(this),

n=c('DOMQuery').find
(m,
"._392n"),


o=n.parentNode;
c('CSS').addClass(o,"_4chl");

var p=c('DOMQuery').find(o,"._54nh");
c('CSS').addClass(p,"_4chm");

return m;};



f.exports=l;}),null);

/** js/privacy/selector/PrivacySelectorOptionNew.js */







__d('PrivacySelectorOptionNew',['csx','cx','fbt','CSS','DOM','DOMQuery','JSXDOM','PrivacyConst','PrivacySelectorEvent','PrivacySelectorSelectableItem'],(function a(b,c,d,e,f,g,h,i,j){var k,l;k=babelHelpers.inherits


















(m,c('PrivacySelectorSelectableItem'));l=k&&k.prototype;


function m(n){'use strict';
l.constructor.call(this,n);
this._origLabel=this.getLabel();
this._origTriggerLabel=this.getTriggerLabel();}
m.prototype.

_getData=function(){'use strict';
return this._data;};
m.prototype.

getTooltip=function(){'use strict';
return this._getData().tooltip;};
m.prototype.

getPostParam=function(){'use strict';
return this._getData().postParam.toString();};
m.prototype.

setPostParam=function(n){'use strict';
this._getData().postParam=n;
return this;};
m.prototype.

getSubtitles=function(){'use strict';
return this._data.optionSubtitles;};
m.prototype.

setSubtitles=function(n){'use strict';

if(this._data.optionSubtitles!=null)
this._data.optionSubtitles=n;

return this;};
m.prototype.

getTriggerIcon=function(){'use strict';
return this._getData().triggerIcon;};
m.prototype.

getTriggerLabel=function(){'use strict';
return this._getData().triggerLabel;};
m.prototype.

isPublic=function(){'use strict';
return this.getPostParam()===
c('PrivacyConst').PostParam.EVERYONE.toString();};
m.prototype.

isFriendsOfFriends=function(){'use strict';
return this.getPostParam()===
c('PrivacyConst').PostParam.FRIENDS_OF_FRIENDS.toString();};
m.prototype.

isFriends=function(){'use strict';
return this.getPostParam()===
c('PrivacyConst').PostParam.FRIENDS.toString();};
m.prototype.

isFriendsExceptAcquaintances=function(){'use strict';
return this.getPostParam()===
c('PrivacyConst').PostParam.FRIENDS_MINUS_ACQUAINTANCES.toString();};
m.prototype.

isOnlyMe=function(){'use strict';
return this.getPostParam()===
c('PrivacyConst').PostParam.ONLY_ME.toString();};
m.prototype.

isFBOnly=function(){'use strict';
return this.getPostParam()===
c('PrivacyConst').PostParam.FB_ONLY.toString();};
m.prototype.

isFriendlist=function(){'use strict';
return this._data.isFriendlist;};
m.prototype.

isBasicOption=function(){'use strict';
return true;};
m.prototype.

isCustomOption=function(){'use strict';
return false;};
m.prototype.

isSavedCustomOption=function(){'use strict';
return false;};
m.prototype.

getSavedCustomPrivacyType=function(){'use strict';
return null;};
m.prototype.

getTagExpansionBehavior=function(){'use strict';
return this._getData().tagExpansionBehavior;};
m.prototype.

getBaseValue=function(){'use strict';
return this._getData().baseValue;};
m.prototype.

getIndex=function(){'use strict';
return this._getData().value;};
m.prototype.

getLoggingEventName=function(){'use strict';
if(this.isPublic()){
return c('PrivacySelectorEvent').SELECT_EVERYONE;}else
if(this.isFriendsOfFriends()){
return c('PrivacySelectorEvent').SELECT_FRIENDS_OF_FRIENDS;}else
if(this.isFriends()){
return c('PrivacySelectorEvent').SELECT_FRIENDS;}else
if(this.isFriendsExceptAcquaintances()){
return c('PrivacySelectorEvent').SELECT_FRIENDS_EXCEPT_ACQUIANTANCES;}else
if(this.isOnlyMe()){
return c('PrivacySelectorEvent').SELECT_ONLY_ME;}else
if(this.isFBOnly()){
return c('PrivacySelectorEvent').SELECT_FB_ONLY;}else
if(this.isFriendlist()){
return c('PrivacySelectorEvent').SELECT_FRIENDLIST;}else 

return c('PrivacySelectorEvent').SELECT_OTHER;};

m.prototype.

updateAfterTagExpansion=function(n,o){'use strict';
var p=this._origLabel,
q=this._origTriggerLabel;
if(n&&this._getData().showPlusOnTagExpansion){
p=j._(["{privacyLabel} (+)","cd9717f6b7bf442254900da6429f861e"],
[j.param('privacyLabel',p)]);





if(o&&this.isFriends()){
q=j._(["Friends, Friends of Tagged","30b2564b309e8131bf44f95c64f82952"]);}else 





q=j._(["{privacyLabel} (+)","cd9717f6b7bf442254900da6429f861e"],
[j.param('privacyLabel',q)]);}







this._setLabel(p);
this._getData().triggerLabel=q;


var r=this._getExpansionType(n),
s=this._getData().optionSubtitles||{};
this._setSubtitle(s[r]);};
m.prototype.

isBelowSoftFold=function(){'use strict';
return c('CSS').matchesSelector
(this.getRoot(),
"._4mwj");};

m.prototype.

isBelowFold=function(){'use strict';
return c('CSS').matchesSelector
(this.getRoot(),
"._3ey_");};

m.prototype.

removeOnBootload=function(){'use strict';
return !!this._getData().removeOnBootload;};
m.prototype.

_setLabel=function(n){'use strict';
if(!n)
return;


var o=
c('DOMQuery').find(this.getRoot(),"._54nh");
o&&c('DOM').setContent(o,n);
this._getData().label=n;};
m.prototype.

_setSubtitle=function(n){'use strict';
if(!n)
return;


var o=c('DOMQuery').scry
(this.getRoot(),
"._48u1");


o&&o[0]&&c('DOM').setContent(o[0],n);};
m.prototype.

_getExpansionType=function(n){'use strict';
return n?
c('PrivacyConst').ExpansionType.TAGS_ONLY:
c('PrivacyConst').ExpansionType.NONE;};
m.prototype.

render=function(){'use strict';
var n=l.render.call(this);
if(!this._getData().isPrimaryOption)
return n;


var o=c('DOMQuery').find(n,"._54nc");
o&&c('CSS').addClass(o,"_48t_");

var p=c('DOM').find(n,"._54nh");
p&&
c('CSS').addClass(p,"_48u0");

var q=
c('JSXDOM').div({className:"_48u1"},
this._getData().optionSubtitle);

c('DOM').appendContent(o,q);

return n;};



f.exports=m;}),null);

/** www/__virtual__/x/XPrivacySelectorAsyncMoreController.js */



__d("XPrivacySelectorAsyncMoreController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/privacy\/selector\/async_more\/",{id:{type:"String",required:true},next_value:{type:"Int",required:true},render_location:{type:"Int",required:true}});}),

null);

/** www/__virtual__/x/XPrivacySelectorLoggingController.js */



__d("XPrivacySelectorLoggingController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/privacy\/selector\/log\/",{event:{type:"Enum",required:true,enumType:1},render_location:{type:"Enum",required:true,enumType:0},content_type:{type:"String",required:true},privacy_fbid:{type:"String"},saved_custom_opt_in:{type:"Bool",defaultValue:false}});}),

null);

/** js/privacy/selector/PrivacySelectableMenu.js */





__d('PrivacySelectableMenu',['csx','cx','Arbiter','AsyncRequest','CSS','DataStore','Ease','MenuSelectableItem','PrivacySelectorCustomOption','PrivacySelectorEvent','PrivacySelectorOptionNew','SelectableMenu','SelectableMenuUtils','XPrivacySelectorAsyncMoreController','XPrivacySelectorLoggingController'],(function a(b,c,d,e,f,g,h,i){var j,k,

















l="._o00",
m="._o01",
n="._po2";j=babelHelpers.inherits



(o,c('SelectableMenu'));k=j&&j.prototype;
function o(p,q){'use strict';
k.constructor.call(this,p,q);
c('DataStore').set('PrivacySelectableMenu',q.id,this);
this._needsBootload=!!q.needsbootload;



this.collapseMenu();


this.updateOptionsAfterTagExpansion(!!q.hasTags);}
o.prototype.

cleanup=function(){'use strict';
c('DataStore').remove('PrivacySelectableMenu',this._config.id);};
o.prototype.

getItemForIndex=function(p){'use strict';
for(var q=0;q<this._items.length;q++){
var r=this._items[q];
if(r instanceof c('PrivacySelectorOptionNew')&&
r.getIndex()==p)
return r;}



return null;};
o.prototype.

findOption=
function(p){
'use strict';
for(var q=this._items,r=Array.isArray(q),s=0,q=r?q:q[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var t;if(r){if(s>=q.length)break;t=q[s++];}else{s=q.next();if(s.done)break;t=s.value;}var u=t;
if(u instanceof c('MenuSelectableItem')&&p(u))
return u;}



return null;};
o.prototype.

getSelectedOption=function(){'use strict';
return this.findOption(function(p){
return p instanceof c('MenuSelectableItem')&&p.isSelected();});};

o.prototype.

selectOption=function(p){'use strict';
var q=null,
r=false,
s=false;
for(var t=this._items,u=Array.isArray(t),v=0,t=u?t:t[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var w;if(u){if(v>=t.length)break;w=t[v++];}else{v=t.next();if(v.done)break;w=v.value;}var x=w;


if(x instanceof c('PrivacySelectorCustomOption')){
q=x;
continue;}





if(this._isMoreButton(x)){
this.expandMenuWithMore();
continue;}

if(this._isMoreOptionsOrSeeAllButton(x)){
if(this._needsBootload){


r=true;}else 



this.expandMenu();

continue;}




if(!r&&
x instanceof c('PrivacySelectorOptionNew')&&
x.getPostParam()==p){
this.setValue(x.getIndex());
s=true;
break;}}







if(!s&&q){
q.setPostParam(p);
this.setValue(q.getIndex());}





if(r){
this.subscribeOnce('expandMenu',function(){
this.selectOption(p);}.
bind(this));
this.expandMenu();}else 

this.inform('selectOption');


return !r;};
o.prototype.

_isMoreButton=function(p){'use strict';
return c('CSS').matchesSelector(p.getRoot(),l);};
o.prototype.



_isMoreOptionsOrSeeAllButton=function(p){'use strict';
var q=p.getRoot();

return (c('CSS').matchesSelector(q,n)||
c('CSS').matchesSelector(q,m));};

o.prototype.

_handleItemClick=function(p,q){'use strict';
if(!c('SelectableMenuUtils').doesItemSupportSelect(p))
return k._handleItemClick.call(this,p,q);


if(this._isMoreButton(p)){
this._logMoreButtonClick();
this.expandMenuWithMore();
return;}

if(this._isMoreOptionsOrSeeAllButton(p)){
this._logMoreOptionsOrSeeAllButtonClick();
this.expandMenu();
return;}

this._logOptionClick(p);

var r=this.inform('itemclick',
{item:p,
event:q});


if(r)
return;



if(!c('SelectableMenuUtils').isSelected(p)&&
!p.isCustomOption()&&
!p.isSavedCustomOption()&&
p.select()!==false){


this._items.forEach(function(s){
if(c('SelectableMenuUtils').isSelected(s)&&
s!==p)
s.deselect();});


this.inform('change',this.getSelection());}




c('Arbiter').inform('composerprivacy/aborteducation');

this.done();

return p.handleClick();};
o.prototype.

_logMoreButtonClick=function(){'use strict';
var p=c('XPrivacySelectorLoggingController').getURIBuilder().
setString('content_type',this._config.contenttype).
setEnum('event',c('PrivacySelectorEvent').MORE).
setString
('privacy_fbid',
this._config.privacyfbid!=null?
String(this._config.privacyfbid):
null).

setEnum('render_location',this._config.renderlocation).
setBool('saved_custom_opt_in',this._config.savedCustomOptIn).
getURI();

new (c('AsyncRequest'))().
setURI(p).
send();};
o.prototype.

_logMoreOptionsOrSeeAllButtonClick=function(){'use strict';
var event=this._config.hasSavedCustom?
c('PrivacySelectorEvent').SEE_ALL:
c('PrivacySelectorEvent').MORE_OPTIONS,

p=c('XPrivacySelectorLoggingController').getURIBuilder().
setString('content_type',this._config.contenttype).
setEnum('event',event).
setString
('privacy_fbid',
this._config.privacyfbid!=null?
String(this._config.privacyfbid):
null).

setEnum('render_location',this._config.renderlocation).
setBool('saved_custom_opt_in',this._config.savedCustomOptIn).
getURI();

new (c('AsyncRequest'))().
setURI(p).
send();};
o.prototype.

_logOptionClick=function(p){'use strict';

var q=c('XPrivacySelectorLoggingController').getURIBuilder().
setString('content_type',this._config.contenttype).
setEnum('event',p.getLoggingEventName()).
setString
('privacy_fbid',
this._config.privacyfbid!=null?
String(this._config.privacyfbid):
null).

setEnum('render_location',this._config.renderlocation).
setBool('saved_custom_opt_in',this._config.savedCustomOptIn).
getURI();

new (c('AsyncRequest'))().
setURI(q).
send();};
o.prototype.

_getMoreOptionsItem=function(){'use strict';
return this.findOption(function(p){
return this._isMoreOptionsOrSeeAllButton(p);}.
bind(this));};
o.prototype.

getCustomItem=function(){'use strict';
for(var p=this._items,q=Array.isArray(p),r=0,p=q?p:p[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var s;if(q){if(r>=p.length)break;s=p[r++];}else{r=p.next();if(r.done)break;s=r.value;}var t=s;
if(t instanceof c('PrivacySelectorCustomOption'))
return t;}


return null;};
o.prototype.

_setMenuState=function(p){'use strict';
var q=this.getRoot();

c('CSS').conditionClass
(q,
"_po3",
p!=='expanded');


c('CSS').conditionClass
(q,
"_po4",
p==='expanded');


if(this._config.hasSavedCustom){
c('CSS').conditionClass
(q,
"_n_v",
p==='collapsed');

c('CSS').conditionClass
(q,
"_n__",
p!=='collapsed');}



this._expanded=p==='expanded';};
o.prototype.

expandMenuWithMore=function(){'use strict';
this._setMenuState('withMore');
this.inform('expandMenuWithMore');};
o.prototype.

expandMenu=function(){'use strict';
if(this._expanded)
return;






this._setMenuState('withMore');
this._expanded=true;

if(!this._needsBootload){
this.expandMenuAfterLoaded();
return;}

this._needsBootload=false;

var p=this._getMoreOptionsItem();
if(p){
this._moreOptionsIcon=p.getIcon();
p.setIcon(this._config.morespinner);
this._scrollToOption(p);}

var q=Date.now(),

r=c('XPrivacySelectorAsyncMoreController').getURIBuilder().
setString('id',this._config.id).
setInt('next_value',this._config.nextvalue).
setInt('render_location',this._config.renderlocation).
getURI();
new (c('AsyncRequest'))().
setURI(r).
setRelativeTo(this.getRoot()).
setErrorHandler(function(s){
var t=1250-(Date.now()-q);
setTimeout(function(){
p&&p.setIcon(this._moreOptionsIcon);
this._needsBootload=true;
this._expanded=false;}.
bind(this),t>0&&p?t:0);}.
bind(this)).
send();};
o.prototype.





expandMenuAfterLoaded=function(){'use strict';
this._setMenuState('expanded');
if(this._moreOptionsIcon){
this._getMoreOptionsItem().setIcon(this._moreOptionsIcon);
this._moreOptionsIcon=undefined;}

this.inform('expandMenu');};
o.prototype.

collapseMenu=function(){'use strict';
this._setMenuState('collapsed');};
o.prototype.

updateOptionsAfterTagExpansion=function(p){'use strict';
this._lastHasTagsUpdate=p;
this.forEachItem(function(q){
if(q instanceof c('PrivacySelectorOptionNew'))
q.updateAfterTagExpansion(p,!!this._config.hasSimpleLabels);}.

bind(this));};
o.prototype.

refreshTagExpansionLabels=function(){'use strict';
this.updateOptionsAfterTagExpansion(!!this._lastHasTagsUpdate);};
o.prototype.

updateTagExpansionLabelAfterBootload=function(){'use strict';

this.refreshTagExpansionLabels();};
o.prototype.

onPopoverOpen=function(p){'use strict';
if(p&&p.isBelowFold()){
if(this._needsBootload){
this.subscribeOnce('expandMenu',function(){




this._scrollToOption(this.getSelectedOption());}.
bind(this));}else 

this._scrollToOption(p);


this.expandMenu();}else
if(p&&p.isBelowSoftFold()){
this.expandMenuWithMore();
this._scrollToOption(p);}else 

this.collapseMenu();};

o.prototype.

_scrollToOption=function(p){'use strict';
if(!this._scrollableArea)
return;


var q=p.getRoot();
if(q===null)
return;


var r=12,
s=this._scrollableArea.getScrollTop(),
t=s+this._scrollableArea.getClientHeight(),
u=q.offsetTop+q.offsetHeight;



if(u+r>t)
this._scrollableArea.setScrollTop
(s+u+r-t,
true,

{duration:Math.min(1000,(u+r-t)*10),
ease:c('Ease').sineOut});};






f.exports=o;}),null);

/** js/ui/core/ui/button/PopoverButton.js */







__d('PopoverButton',['csx','DOM','DOMQuery','isTextNode'],(function a(b,c,d,e,f,g,h){







var i=
{setLabel:function j(k,l){
var m=
c('DOMQuery').find(k,"._55pe"),

n=m.childNodes;
for(var o=0;o<n.length;o++)
if(c('isTextNode')(n[o])){
c('DOM').replace(n[o],l);

return;}




c('DOM').appendContent(m,l);}};



f.exports=i;}),null);

/** js/privacy/selector/store/PrivacySelectorDataStore.js */





__d('PrivacySelectorDataStore',['ArbiterMixin','PrivacySelectorNewDispatcher','KeyedCallbackManager'],(function a(b,c,d,e,f,g){




var h=new (c('KeyedCallbackManager'))(),

i=babelHelpers['extends']({},c('ArbiterMixin'),


{get:function j(k,l){
h.executeOrEnqueue
(k,
l);},







hasValueChanged:function j(k){




return !!h.getResource(k);}});



c('PrivacySelectorNewDispatcher').register(function(j){
if(j.saved_custom_privacy_type!=null){
h.addResourcesAndExecute
({saved_custom_update:
{postParam:j.post_param,
savedCustomPrivacyType:j.saved_custom_privacy_type,
sourceSelectorID:j.unique_id,
subtitles:j.subtitles}});


i.inform('saved_custom_update');}


if(j.selector_type){
var k={};
k[j.selector_type]=
{post_param:j.post_param,
unique_id:j.unique_id,
reload:j.reload,
is_error:j.is_error,
is_custom:j.is_custom,
selector_type:j.selector_type,
subtitles:j.subtitles};

h.addResourcesAndExecute(k);
i.inform('change');}});



f.exports=i;}),null);

/** www/__virtual__/x/XPrivacySelectorSavedCustomUpdateController.js */



__d("XPrivacySelectorSavedCustomUpdateController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/privacy\/selector\/update\/saved_custom\/",{});}),

null);

/** www/__virtual__/x/XPrivacySelectorUpdateController.js */



__d("XPrivacySelectorUpdateController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/privacy\/selector\/update\/",{privacy_fbid:{type:"String",required:true},post_param:{type:"String",required:true},tags:{type:"IntVector"},render_location:{type:"Int",required:true},is_saved_on_select:{type:"Bool",defaultValue:false},should_return_tooltip:{type:"Bool",defaultValue:false},replace_on_select:{type:"Bool",defaultValue:false},prefix_tooltip_with_app_privacy:{type:"Bool",defaultValue:false},ent_id:{type:"String",required:true},reload_selector:{type:"Bool",defaultValue:false}});}),

null);

/** js/privacy/selector/PrivacySelectorBase.js */






__d('PrivacySelectorBase',['cx','fbt','Animation','Arbiter','ArbiterMixin','AsyncRequest','Button','CSS','CurrentUser','DOM','Focus','Input','MenuSelectableItem','MenuStaticItem','PopoverButton','PopoverLoadingMenu','PrivacyConst','DataStore','PrivacySelectableMenu','PrivacySelectorCustomOption','PrivacySelectorDataStore','PrivacySelectorEvent','PrivacySelectorNewDispatcher','PrivacySelectorSavedCustomOption','Run','SubscriptionsHandler','TooltipData','XPrivacySelectorLoggingController','XPrivacySelectorSavedCustomUpdateController','XPrivacySelectorUpdateController','XUIError','bind','debounce','mixin'],(function a(b,c,d,e,f,g,h,i){var j,k;j=babelHelpers.inherits








































(l,c('mixin')(c('ArbiterMixin')));k=j&&j.prototype;


function l(m,n,o,p,q,r){'use strict';
k.constructor.call(this);this._isWaitingForSavedCustom=false;
c('DataStore').set(m,'selector',this);
this._root=m;
this._button=n;
this._config=r;
this._menu=o;
this._popoverMenu=q;
this._input=p;
this._isSavedOnSelect=r.is_saved_on_select;
this._privacyFBID=r.privacy_fbid;
this._contentType=r.content_type;
this._renderLocation=r.render_location;
this._supportsTagExpansion=r.supports_tag_expansion;
this._skipCleanup=r.skip_cleanup;
this._prefixTooltipApps=r.should_prefix_tooltip_apps;
this._shouldDisplayLabel=r.should_display_label;
this._tags=r.tagged_uids;
this._hasTags=this._tags.length>0;
this._entID=r.ent_id;
this._popover=this._popoverMenu.getPopover();
this._receivingUpdate=false;
this._selectorSyncKey=r.selector_sync_key;
this._previousParam=null;
this._listeners=new (c('SubscriptionsHandler'))();
this._spinnerCount=0;
this._postParam=r.postParam;

if(r.use_async_menu){
this._listeners.addSubscriptions
(this._popoverMenu.subscribe('setMenu',function(){
this._menu=this._popoverMenu.getMenu();
if(!(this._menu instanceof c('PrivacySelectableMenu')))
return;


this._onMenuLoad();


this._onPopoverOpen();
this.inform('asyncMenuLoaded');}.
bind(this)));}else 


this._onMenuLoad();


if(this._selectorSyncKey||this._config.hasSavedCustomPrivacy)
this._initSelectorSync();


c('Run').onLeave(this._cleanup.bind(this));}
l.prototype.

_cleanup=function(){'use strict';
if(this._skipCleanup)
return;


if(this._menu instanceof c('PrivacySelectableMenu'))
this._menu.cleanup();


this._listeners&&this._listeners.release();
this._listeners=null;};
l.prototype.

_initSelectorSync=function(){'use strict';

if(this._selectorSyncKey)
this._listeners.addSubscriptions
(c('PrivacySelectorDataStore').subscribe('change',function(){
c('PrivacySelectorDataStore').get(this._selectorSyncKey,function(m){
if(m.unique_id!==this._menu._config.id){
this._receivingUpdate=true;


c('XUIError').clear(this._button);

if(m.post_param)
this.selectOption(m.post_param,function(){
if(m.is_custom&&m.subtitles)
this.updateCustomOption(m.subtitles);}.

bind(this));

m.reload&&this.reloadSelector();
m.is_error&&this._displayErrorWithoutFocus();

if(!m.post_param)



this._receivingUpdate=false;}}.


bind(this));}.
bind(this)));



if(this._config.hasSavedCustomPrivacy)
this._listeners.addSubscriptions
(c('PrivacySelectorDataStore').subscribe('saved_custom_update',function(){
c('PrivacySelectorDataStore').get('saved_custom_update',function(m){
if(m.sourceSelectorID===this._menu._config.id)
return;

this._receivingUpdate=true;

if(this._menu instanceof c('PrivacySelectableMenu'))
this.updateSavedCustomOption
(m.savedCustomPrivacyType,
m.postParam,
m.subtitles);



if(!this.shouldTryToUpdateSavedCustom())
return;


l._savedCustomSelectorsToUpdate.push(this);
l._sendSavedCustomUpdateRequest();

if(!m.postParam)



this._receivingUpdate=false;}.

bind(this));}.
bind(this)));};


l.prototype.

shouldTryToUpdateSavedCustom=function(){'use strict';
if(this._menu instanceof c('PrivacySelectableMenu'))

return (this.getIsCustomOptionSelected()||
this.getIsSavedCustomOptionSelected());





for(var m=Object.keys(c('PrivacyConst').PostParam),n=Array.isArray(m),o=0,m=n?m:m[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var p;if(n){if(o>=m.length)break;p=m[o++];}else{o=m.next();if(o.done)break;p=o.value;}var q=p;
if(this._postParam==c('PrivacyConst').PostParam[q])
return false;}


return true;};
l.prototype.












































































_broadcastUpdate=function(){'use strict';
this._broadcastUpdateImpl(false);};
l.prototype.

_broadcastError=function(){'use strict';
this._broadcastUpdateImpl(true);};
l.prototype.

_broadcastUpdateImpl=function(m){'use strict';
if(!this._receivingUpdate){
var n=
{selector_type:this._selectorSyncKey,
unique_id:this._menu._config.id};


if(m){
n.is_error=m;}else{

var o=this._getSelectedOption();
n.post_param=o.getPostParam();
n.subtitles=o.getSubtitles();
n.is_custom=o.isCustomOption();
n.saved_custom_privacy_type=
o.getSavedCustomPrivacyType();}



c('PrivacySelectorNewDispatcher').handleUpdateFromSelector(n);}};

l.prototype.

shouldReplaceOnPost=function(){'use strict';
return this._config.replace_on_post;};
l.prototype.

getIsPublicSelected=function(){'use strict';
return this._selectedOption&&this._selectedOption.isPublic();};
l.prototype.

getIsFriendsSelected=function(){'use strict';
return this._selectedOption&&this._selectedOption.isFriends();};
l.prototype.

getIsOnlyMeSelected=function(){'use strict';
return this._selectedOption&&this._selectedOption.isOnlyMe();};
l.prototype.

getSelectedBaseValue=function(){'use strict';
return this._selectedOption&&this._selectedOption.getBaseValue();};
l.prototype.

getSelectedLabelString=function(){'use strict';
return this._selectedOption&&this._selectedOption.getLabel();};
l.prototype.

getSelectedPostParam=function(){'use strict';
return this._selectedOption&&
this._selectedOption.getPostParam().toString();};
l.prototype.

getIsCustomOptionSelected=function(){'use strict';
return this._selectedOption&&this._selectedOption.isCustomOption();};
l.prototype.

getIsSavedCustomOptionSelected=function(){'use strict';
return this._selectedOption&&this._selectedOption.isSavedCustomOption();};
l.prototype.

getIsSavedOnSelect=function(){'use strict';
return this._isSavedOnSelect;};
l.prototype.

getPrivacyFBID=function(){'use strict';
return this._privacyFBID;};
l.prototype.

setValue=function(m){'use strict';
this._menu.setValue(m);};
l.prototype.

setIsSavedOnSelect=function(m){'use strict';
this._isSavedOnSelect=m;};
l.prototype.

getSavedCustomOptIn=function(){'use strict';
return this._config.savedCustomOptIn;};
l.prototype.

openSelectorExpanded=function(m){'use strict';
this.openSelector(function(){
this._menu.expandMenu();
m&&m();}.
bind(this));};
l.prototype.

openSelector=function(m){'use strict';
if(this._menu instanceof c('PopoverLoadingMenu')){
this.subscribeOnce('asyncMenuLoaded',function(){
m&&m();}.
bind(this));
this._popover.showLayer();}else{

this._popover.showLayer();
m&&m();}};

l.prototype.

closeSelector=function(){'use strict';
this._popover.hideLayer();};
l.prototype.

getPopover=function(){'use strict';
return this._popover;};
l.prototype.

getPopoverMenu=function(){'use strict';
return this._popoverMenu;};
l.prototype.

getTriggerButtonElement=function(){'use strict';
return this._button;};
l.prototype.

getRoot=function(){'use strict';
return this._root;};
l.prototype.

getMenuElement=function(){'use strict';
return this._menu.getRoot();};
l.prototype.

selectOption=function(m){var n=arguments.length<=1||arguments[1]===undefined?null:arguments[1];'use strict';
if(!m)
return;



if(this._menu instanceof c('PopoverLoadingMenu')){
this.subscribeOnce
('asyncMenuLoaded',
this._selectOptionImpl.bind(this,m,n));

this._fetchAsyncMenu();}else 

this._selectOptionImpl(m,n);};

l.prototype.





_selectOptionImpl=function(m){var n=arguments.length<=1||arguments[1]===undefined?null:arguments[1];'use strict';
var o=this._menu.selectOption(m);



if(!o){
this._menu.subscribeOnce('selectOption',function(){


var p=this.getIsSavedOnSelect();
this.setIsSavedOnSelect(false);

this._updateMenu();

this.setIsSavedOnSelect(p);
this._finishSpinnerSuccess();
n&&n();}.
bind(this));
this._showSpinner();}else 

n&&n();


this._updateMenu();};
l.prototype.






_updateMenu=function(){'use strict';
this._selectedOption=this._getSelectedOption();
this.updateDataForItemIndex
(this._selectedOption.getIndex(),
this._selectedOption.getPostParam().toString());};

l.prototype.

_fetchAsyncMenu=function(){'use strict';
if(this._config.use_async_menu)
this._popoverMenu.fetchMenu();};

l.prototype.

_getSelectedOption=function(){'use strict';
return this._menu instanceof c('PrivacySelectableMenu')?
this._menu.getSelectedOption():
null;};
l.prototype.

_onItemClick=function(m,n){'use strict';
var o=n.item;

if(o instanceof c('MenuStaticItem'))
return;



if(o.isBasicOption()){
this.updateDataForItemIndex
(o.getIndex(),
o.getPostParam().toString());}else

if(o.isCustomOption()||o.isSavedCustomOption()){
this._closeForCustom=true;
o.openDialog(this);}

this.inform('click',{customSelected:o.isCustomOption()});};
l.prototype.

getContentType=function(){'use strict';
return this._contentType;};
l.prototype.

getRenderLocation=function(){'use strict';
return this._renderLocation;};
l.prototype.

getPostParam=function(){'use strict';
return this._postParam;};
l.prototype.

getTags=function(){'use strict';
return this._tags;};
l.prototype.

updateCustomOption=
function(m){
'use strict';
var n=this._menu.findOption(function(o){
return o instanceof c('PrivacySelectorCustomOption');});


if(n===null)
return;


n.setSubtitles(m);
this._menu.refreshTagExpansionLabels();};
l.prototype.

updateSavedCustomOption=
function(m,
n,
o){
'use strict';
var p=this._menu.findOption(function(q){

return (q instanceof c('PrivacySelectorSavedCustomOption')&&
q.getSavedCustomPrivacyType()===m);});



if(p===null)
return;


p.setPostParam(n).setSubtitles(o);
this._menu.refreshTagExpansionLabels();};
l.prototype.

updateDataForItemIndex=function(m,n){'use strict';
var o=this._menu.getItemForIndex(m);
if(o.isCustomOption()||o.isSavedCustomOption())
o.setPostParam(n);


if(!o.isCustomOption()){
var p=this._menu.findOption(function(q){
return q instanceof c('PrivacySelectorCustomOption');});

if(p!==null){
p.setSubtitlesToNonSelected();
this._menu.refreshTagExpansionLabels();}}



this._selectedOption=o;
this._previousParam=this._postParam;
this._postParam=n;

c('Input').setValue(this._input,n);


this._updateTriggerButtonLabelAndIcon();

this._updateTooltipAndSavePrivacyIfNeeded();

this.inform('changed',
{post_param:this._postParam,
base_value:this.getSelectedBaseValue()});};

l.prototype.

_shouldUpdateTooltips=function(){'use strict';

return (this._prefixTooltipApps||
this._supportsTagExpansion||
this.getIsCustomOptionSelected()||
this.getIsSavedCustomOptionSelected());};

l.prototype.

_updateTooltip=function(){'use strict';
this._updateTooltipAndSavePrivacyIfNeededImpl(false);};
l.prototype.

_updateTooltipAndSavePrivacyIfNeeded=function(){'use strict';
this._updateTooltipAndSavePrivacyIfNeededImpl(true);};
l.prototype.






_updateTooltipAndSavePrivacyIfNeededImpl=function(m){'use strict';


if(this._shouldUpdateTooltips())
this._updateTooltipToLoading();



this._sendUpdateRequest(m);



if(!this._shouldUpdateTooltips())
this._setTooltipValue(this._selectedOption.getTooltip());};


l.prototype.





reloadSelector=function(){'use strict';
this._cleanup();

var m=c('XPrivacySelectorUpdateController').getURIBuilder().
setString('privacy_fbid',String(this._privacyFBID)).
setString('post_param',this._postParam).
setInt('render_location',this._renderLocation).
setBool('reload_selector',true).
setString('ent_id',String(this._entID)).
getURI();
new (c('AsyncRequest'))().
setRelativeTo(this._root).
setHandler(this.inform.bind(this,'reloaded')).
setURI(m).send();};
l.prototype.




_sendUpdateRequest=function(m){'use strict';
m=m&&this._isSavedOnSelect&&!this._receivingUpdate;
var n=this._shouldUpdateTooltips();
if(!m&&!n){


this._receivingUpdate=false;
return;}


m&&this._showSpinner();

var o=c('XPrivacySelectorUpdateController').getURIBuilder().
setString('privacy_fbid',String(this._privacyFBID)).
setString('post_param',this._postParam).
setIntVector('tags',this._tags).
setInt('render_location',this._renderLocation).
setBool('is_saved_on_select',m).
setBool('should_return_tooltip',n).
setBool('prefix_tooltip_with_app_privacy',this._prefixTooltipApps).
setBool('replace_on_select',this._config.replace_on_select).
setString('ent_id',String(this._entID)).
getURI(),

p=new (c('AsyncRequest'))(o).
setRelativeTo(this._root).
setHandler(function(q){
if(m){
this._finishSpinnerSuccess();
this._broadcastUpdate();}


if(this._config.replace_on_select)
this._cleanup();


var r=q&&q.payload&&q.payload.tooltip;
r&&this._setTooltipValue(q.payload.tooltip);
this.inform('selector_updated');}.
bind(this)).
setFinallyHandler(function(q){


this._receivingUpdate=false;}.
bind(this));

if(m)
p.setErrorHandler(c('bind')(this,function(q){
if(this._receivingUpdate){



this._displayErrorWithoutFocus();
return;}



this._menu.selectOption(this._previousParam);
this._postParam=this._previousParam;


this._displayError();


this._broadcastError();}));



p.send();};
l.prototype.

animateSavedCustomSave=function(){'use strict';
if(this._isWaitingForSavedCustom)
return;


this._showSpinner();
this._updateTooltipToLoading();
if(this._shouldDisplayLabel)
this._updateTriggerToLoading();

this._isWaitingForSavedCustom=true;};
l.prototype.

finishAnimatingSavedCustomSave=function(){'use strict';
if(!this._isWaitingForSavedCustom)
return;


this._finishSpinnerSuccess();
this._isWaitingForSavedCustom=false;};
l.prototype.

_showSpinner=function(){'use strict';


if(!this.getIsSavedOnSelect())
return;


if(this._spinnerCount===0){
c('XUIError').clear(this._button);
c('Button').setIcon(this._button,this._config.spinner);
c('CSS').show(this._config.spinner);
c('CSS').hide(this._config.checkmark);}


this._spinnerCount++;};
l.prototype.

_finishSpinnerSuccess=function(){'use strict';


if(!this.getIsSavedOnSelect())
return;


this._spinnerCount--;

if(this._spinnerCount===0){
c('CSS').hide(this._config.spinner);
this._updateTriggerButtonLabelAndIcon();
if(this._config.checkmark){
var m=c('Button').getIcon(this._button);
c('CSS').hide(m);
new (c('Animation'))(this._config.checkmark).
show().
from('opacity',0).
to('opacity',1).
duration(400).
checkpoint().
duration(200).
checkpoint().
from('opacity',1).
to('opacity',0).
duration(400).
hide().
ondone(function(){
this._updateTriggerButtonLabelAndIcon();
new (c('Animation'))(m).
show().
from('opacity',0).
to('opacity',1).
duration(300).
go();}.
bind(this)).
go();}}};


l.prototype.





_displayError=function(){'use strict';
this._spinnerCount--;
this._displayErrorImpl(true);};
l.prototype.






_displayErrorWithoutFocus=function(){'use strict';
this._displayErrorImpl(false);};
l.prototype.

_displayErrorImpl=function(m){'use strict';
c('PopoverButton').setLabel
(this._button,i._(["Select Audience","2e71f9672a1d856c86831b2007f56e9e"]));






c('Button').setIcon(this._button,this._config.error_icon);
c('CSS').show(this._config.error_icon);
c('TooltipData').remove(this._button);
m&&c('Focus').setWithoutOutline(this._button);
c('XUIError').set
({target:this._button,
message:i._(["Your selection might not have been saved. We recommend trying again later.","38c0e880c86c3252eac2d926c5002535"])});};






l.prototype.

informTagsChanged=function(m){'use strict';
var n=this._getTags(m);
this.informTagsChangedWithIDs(n);};
l.prototype.

informTagsChangedWithIDs=function(m){'use strict';

var n=!m.length;
if(this._hasTags===n){
this._hasTags=!!m.length;

this._menu.updateOptionsAfterTagExpansion
(this._showTagExpansion());


this._updateTriggerButtonLabelAndIcon();}



if(this._tags.length!==m.length){
this._tags=m;
this._updateTooltip();


c('Arbiter').inform('PrivacySelectorBase/changed',this._getChangedData());}};

l.prototype.

_getChangedData=function(){'use strict';

return {tags:this._tags,
privacy:this.getSelectedBaseValue()};};

l.prototype.

_showTagExpansion=function(){'use strict';
return this._hasTags;};
l.prototype.

_getTags=function(m){'use strict';
var n=[],
o=c('CurrentUser').getID();

if(m.withTags)
for(var p=0;p<m.withTags.length;p++){
var q=m.withTags[p].info;
if(q.uid!=o)
n.push(q.uid);}




if(m.mention)
for(var r in m.mention)
if(m.mention[r].type=='user'&&
m.mention[r].uid!=o)
n.push(m.mention[r].uid);



return n;};
l.prototype.

_updateTriggerButtonLabelAndIcon=function(){'use strict';
if(this._spinnerCount===0){
var m=this._selectedOption.getTriggerIcon();
if(this._config.trigger_no_icon)
c('CSS').hide(m);

c('Button').setIcon(this._button,m.cloneNode());
c('CSS').conditionClass
(c('Button').getIcon(this._button),
"_21or",
this.getIsPublicSelected());}


if(!this._shouldDisplayLabel)
return;


if(!this._isWaitingForSavedCustom)
c('PopoverButton').setLabel
(this._button,
this._selectedOption.getTriggerLabel());};


l.prototype.

_getLoadingText=function(){'use strict';
return i._(["Loading...","cbb91eb642ee9812017a278b66787875"]);};




l.prototype.

_updateTooltipToLoading=function(){'use strict';

this._setTooltipValue(this._getLoadingText());};
l.prototype.

_updateTriggerToLoading=function(){'use strict';

c('PopoverButton').setLabel(this._button,this._getLoadingText());};
l.prototype.

_setTooltipValue=function(m){'use strict';
m&&c('TooltipData').set(this._button,m);};
l.prototype.

_onPopoverClose=function(){'use strict';
if(!this._getSelectedOption())
return;


var m=c('XPrivacySelectorLoggingController').getURIBuilder().
setString('content_type',this._contentType).
setEnum('event',c('PrivacySelectorEvent').CLOSE_MENU).
setString
('privacy_fbid',
this._privacyFBID!=null?String(this._privacyFBID):null).

setEnum('render_location',this._renderLocation).
setBool('saved_custom_opt_in',this._config.savedCustomOptIn).
getURI();
new (c('AsyncRequest'))().
setURI(m).
send();

if(this._closeForCustom){
this._closeForCustom=false;}else 

this.inform('selectorFinished');

this.inform('close');};
l.prototype.

_onPopoverOpen=function(){'use strict';
if(!(this._menu instanceof c('PrivacySelectableMenu')))
return;




c('Arbiter').inform('composerprivacy/aborteducation');
this._menu.onPopoverOpen(this._getSelectedOption());

var m=c('XPrivacySelectorLoggingController').getURIBuilder().
setString('content_type',this._contentType).
setEnum('event',c('PrivacySelectorEvent').OPEN_MENU).
setString
('privacy_fbid',
this._privacyFBID!=null?String(this._privacyFBID):null).

setEnum('render_location',this._renderLocation).
setBool('saved_custom_opt_in',this._config.savedCustomOptIn).
getURI();
new (c('AsyncRequest'))().
setURI(m).
send();

this.inform('open');};
l.prototype.

_onMenuLoad=function(){'use strict';
this._listeners.addSubscriptions
(this._menu.subscribe('itemclick',this._onItemClick.bind(this)),

this._popover.subscribe
('hide',
this._onPopoverClose.bind(this)),


this._popover.subscribe
('show',
this._onPopoverOpen.bind(this)));








this._listeners.addSubscriptions
(this._menu.subscribe(['expandMenu','expandMenuWithMore'],function(){
if(this._popover&&this._popover.getLayer())
this._popover.getLayer().updatePosition();

this._selectedOption=this._getSelectedOption();}.
bind(this)));


this._selectedOption=this._getSelectedOption();
if(this._selectedOption){
this._postParam=this._selectedOption.getPostParam().toString();
this._previousParam=this._postParam;

this._hasAudienceExpansion()&&this._updateTriggerButtonLabelAndIcon();}};

l.prototype.

_hasAudienceExpansion=function(){'use strict';
return this._hasTags;};
l._savedCustomSelectorsToUpdate=[];l._sendSavedCustomUpdateRequest=c('debounce')(function(){var m=l._savedCustomSelectorsToUpdate;l._savedCustomSelectorsToUpdate=[];var n={},o={},p=false;for(var q=m,r=Array.isArray(q),s=0,q=r?q:q[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var t;if(r){if(s>=q.length)break;t=q[s++];}else{s=q.next();if(s.done)break;t=s.value;}var u=t;n[u._postParam]=true;o[u._config.trigger_style]=true;p=p||u._menu instanceof c('PopoverLoadingMenu');}new (c('AsyncRequest'))(c('XPrivacySelectorSavedCustomUpdateController').getURIBuilder().getURI()).setData({has_async_menu:p,post_params:Object.keys(n),trigger_icon_styles:Object.keys(o)}).setHandler(function(v){var w=v.payload||{},x=w.post_param_map||{},y=w.data||{},z=c('DOM').create('div',{className:'hidden_elem'});for(var aa=m,ba=Array.isArray(aa),ca=0,aa=ba?aa:aa[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var da;if(ba){if(ca>=aa.length)break;da=aa[ca++];}else{ca=aa.next();if(ca.done)break;da=ca.value;}var ea=da,fa=x[ea._postParam];if(!fa)continue;if(ea._menu instanceof c('PopoverLoadingMenu')){var ga=y[fa]||{};ea._postParam=fa;if(!ea._config.trigger_no_icon){var ha=ga.icons[ea._config.trigger_style];if(ha!=null){c('DOM').setContent(z,ha);var ia=z.firstChild;c('Button').setIcon(ea._button,ia);}}if(ea._shouldDisplayLabel){var ja=ga.label;ja!=null&&c('PopoverButton').setLabel(ea._button,ja);}}else if(ea._menu instanceof c('PrivacySelectableMenu')){ea._receivingUpdate=true;ea.selectOption(fa);ea._receivingUpdate=false;}}c('DOM').remove(z);}).send();},10,this);


f.exports=l;}),null);

/** js/privacy/selector/PrivacySelectorCustomOption.js */





__d('PrivacySelectorCustomOption',['AsyncDialog','AsyncRequest','DataStore','PrivacySelectorBase','PrivacySelectorEvent','PrivacySelectorOptionNew','XPrivacyCustomDialogController','XPrivacySelectorLoggingController'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits












(j,c('PrivacySelectorOptionNew'));i=h&&h.prototype;



function j(k){'use strict';
i.constructor.call(this,k);
this._subtitlesWhenNotSelected=k.optionSubtitlesWhenNotSelected;}
j.prototype.

isBasicOption=function(){'use strict';
return false;};
j.prototype.

isCustomOption=function(){'use strict';
return true;};
j.prototype.

getSelector=function(){'use strict';
return this._selector;};
j.prototype.

getLoggingEventName=function(){'use strict';
return c('PrivacySelectorEvent').SELECT_CUSTOM;};
j.prototype.

setSubtitlesToNonSelected=function(){'use strict';
this.setSubtitles(this._subtitlesWhenNotSelected);};
j.prototype.

openDialog=function(k){'use strict';

if(typeof this._selector==='undefined')
this._selector=k;

c('DataStore').set(this._data.id,'PrivacySelectorCustomOption',this);

var l=c('XPrivacyCustomDialogController').getURIBuilder().
setString('option_id',this._data.id).
setString('id',this._data.privacyfbid.toString()).
setString('post_param',k.getPostParam()).
setString('content_type',k.getContentType()).
setInt('render_location',k.getRenderLocation()).
setIntVector('tags',k.getTags()).
setBool('autosave',this._data.autosave).
setBool('limit_community',this._data.limitcommunity).
setBool('limit_facebook',this._data.limitfacebook).
setBool('limit_fof',this._data.limitfof).
setBool('limit_tagexpand',this._data.limittagexpand).
setBool('is_new_privacy_selector',true).
setBool('saved_custom_opt_in',k.getSavedCustomOptIn()).
getURI(),
m=new (c('AsyncRequest'))(l);
m.setRelativeTo(k.getTriggerButtonElement());

c('AsyncDialog').send(m,function(n){
var o=function(p){
var q=c('XPrivacySelectorLoggingController').getURIBuilder().
setEnum('event',p).
setString
('privacy_fbid',
this._data.privacyfbid!=null?
String(this._data.privacyfbid):
null).

setEnum
('render_location',
document.getElementsByName('render_location')[0].value).

setString
('content_type',
document.getElementsByName('content_type')[0].value).

getURI();
new (c('AsyncRequest'))().
setURI(q).
send();}.
bind(this);

n.subscribe('hide',function(){
k.inform('custom/hide');
k.inform('selectorFinished');});


n.subscribe('success',function(){
k.inform('custom/success');
o(c('PrivacySelectorEvent').CUSTOM_SAVE);});


n.subscribe('cancel',function(){
k.inform('custom/cancel');
o(c('PrivacySelectorEvent').CUSTOM_CANCEL);});}.

bind(this));};
j.


customPrivacySave=
function(k,
l,
m){

var n=arguments.length<=3||arguments[3]===undefined?{}:arguments[3];'use strict';
var o=c('DataStore').get(k,'PrivacySelectorCustomOption');
c('DataStore').remove(k,'PrivacySelectorCustomOption');





if(!(o==null))

if(!(o.getSelector==null)){


var p=o.getSelector();

if(m!==null){
p.updateSavedCustomOption
(m,
l,
n);}else 


p.updateCustomOption(n);


p.selectOption(l);
p.finishAnimatingSavedCustomSave();}};




f.exports=j;}),null);

/** www/__virtual__/x/XPrivacySpecificAudienceSelectorDialogController.js */



__d("XPrivacySpecificAudienceSelectorDialogController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/privacy\/specific_audience_selector_dialog\/",{autosave:{type:"Bool",defaultValue:false},content_type:{type:"String"},fbid:{type:"String"},option_id:{type:"String"},post_param:{type:"String",required:true},privacy_type:{type:"Enum",required:true,enumType:1},render_location:{type:"Enum",required:true,enumType:0}});}),

null);

/** js/privacy/selector/PrivacySelectorSavedCustomOption.js */







__d('PrivacySelectorSavedCustomOption',['AsyncDialog','AsyncRequest','DataStore','PrivacySelectorBase','PrivacySelectorEvent','PrivacySelectorOptionNew','SavedCustomPrivacyType','XPrivacySpecificAudienceSelectorDialogController'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits




















(j,c('PrivacySelectorOptionNew'));i=h&&h.prototype;



function j(k){'use strict';
i.constructor.call(this,k);}
j.prototype.

getSelector=function(){'use strict';
return this._selector;};
j.prototype.

isBasicOption=function(){'use strict';
return false;};
j.prototype.

isSavedCustomOption=function(){'use strict';
return true;};
j.prototype.

getSavedCustomPrivacyType=function(){'use strict';
return this._data.savedCustomPrivacyType;};
j.prototype.

getLoggingEventName=function(){'use strict';
switch(this._data.savedCustomPrivacyType){
case c('SavedCustomPrivacyType').FRIENDS_EXCEPT:
return c('PrivacySelectorEvent').SELECT_FRIENDS_EXCEPT;

case c('SavedCustomPrivacyType').SPECIFIC_FRIENDS:
return c('PrivacySelectorEvent').SELECT_SPECIFIC_FRIENDS;


default:
return c('PrivacySelectorEvent').SELECT_OTHER;}};

j.prototype.

openDialog=function(k){'use strict';
this._selector=k;



c('DataStore').set(this._data.id,'PrivacySelectorCustomOption',this);

var l=c('XPrivacySpecificAudienceSelectorDialogController').getURIBuilder().
setBool('autosave',this._data.autosave).
setString('content_type',k.getContentType()).
setString('fbid',this._data.privacyFBID).
setString('option_id',this._data.id).
setString('post_param',this.getPostParam()).
setEnum('privacy_type',this._data.savedCustomPrivacyType).
setEnum('render_location',k.getRenderLocation()).
getURI(),

m=new (c('AsyncRequest'))().
setURI(l).
setRelativeTo(k.getTriggerButtonElement());

c('AsyncDialog').send(m);};
j.

informSave=function(k){'use strict';
var l=c('DataStore').get(k,'PrivacySelectorCustomOption');
if(l instanceof j){
var m=l.getSelector();
m&&m.animateSavedCustomSave();}};




f.exports=j;}),null);
