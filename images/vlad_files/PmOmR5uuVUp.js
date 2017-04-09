if (self.CavalryLogger) { CavalryLogger.start_js(["lRIPv"]); }

/** __static_js_modules__/publishingtoolssource.js */




__d("PublishingToolsSource",[],(function a(b,c,d,e,f,g){

f.exports={ADS_CANVAS_LANDING_PAGE:"ads_canvas_landing_page",COPYRIGHT_MATCH_PERMALINK:"copyright_match_permalink",DRAFTS_POSTS_TIMELINE_PAGELET:"draft_timeline_pagelet",EXPIRING_POSTS_TIMELINE_PAGELET:"expiring_timeline_pagelet",IA_URL_GROWTH_QP:"ia_url_growth_qp",NOTIFICATION:"notif",OPTIMISTIC_VIDEO_POST:"optimistic_video_post",PAGES_MANAGER_BAR:"pages_manager_bar",PAYMENT_SETTINGS_HEADER:"payment_settings_header",SCHEDULED_POSTS_TIMELINE_PAGELET:"scheduled_timeline_pagelet",UNKNOWN:"unknown",VIDEO_INSIGHTS:"video_insights",VIDEO_UPLOAD_CONFIRMATION_DIALOG:"video_upload_confirmation_dialog",VIDEOS_HUB:"videos_hub",VIDEOS_YOU_CAN_USE_TIMELINE_PAGELET:"crossposted_timeline_pagelet",VIDEO_EDIT_PERMALINK:"video_edit_permalink",VIDEO_LIBRARY_MEGAPHONE:"video_library_megaphone",VIDEO_UPLOAD_NOTIF:"video_upload_notif",LEAD_GEN_DOWNLOAD_DIALOG_FORMS_LIB:"lead_gen_download_dialog_forms_lib",LEAD_GEN_DOWNLOAD_DIALOG_NAM:"lead_gen_download_dialog_nam",LEAD_GEN_DOWNLOAD_DIALOG_NAM_LINK:"lead_gen_download_dialog_nam_link",LEAD_GEN_DOWNLOAD_DIALOG_PE:"lead_gen_download_dialog_pe",LEAD_GEN_DOWNLOAD_DIALOG_PE_LINK:"lead_gen_download_dialog_pe_link",LEAD_GEN_DOWNLOAD_DIALOG_OTHER:"lead_gen_download_dialog_other",LEAD_GEN_FORM_LIBRARY_NOTICE:"lead_gen_form_library_notice",LEAD_GEN_INLINE_FORM_SELECTOR:"lead_gen_inline_form_selector",LEAD_GEN_ORGANIC:"lead_gen_organic",WWW_CHATBAR:"www_chatbar"};}),

null);

/** __static_js_modules__/puwerrorcodes.js */




__d("PUWErrorCodes",[],(function a(b,c,d,e,f,g){

f.exports={BAD_JPEG:9901,WORKER_TERMINATED:9902,UNKNOWN_RESIZE_ERROR:9903,WORKER_ABORT:9904};}),

null);

/** __static_js_modules__/timelineseenstateconstants.js */




__d("TimelineSeenStateConstants",[],(function a(b,c,d,e,f,g){

f.exports={FT_TIMELINE_HASH_IDENTIFIER_KEY:"thid"};}),

null);

/** __static_js_modules__/timelineviewporttrackinglogtype.js */




__d("TimelineViewportTrackingLogType",[],(function a(b,c,d,e,f,g){

f.exports={IMPRESSION:"impression",DURATION:"duration"};}),

null);

/** __static_js_modules__/videolibrarysource.js */




__d("VideoLibrarySource",[],(function a(b,c,d,e,f,g){

f.exports={VIDEO_UPLOAD_CONFIRMATION_DIALOG:"video_upload_confirmation_dialog",OPTIMISTIC_VIDEO_POST:"optimistic_video_post",VIDEO_INSIGHTS:"video_insights",VIDEOS_HUB:"videos_hub"};}),

null);

/** js/feed/control/SeeFirstProfilePopoverMenu.js */





__d('SeeFirstProfilePopoverMenu',['PopoverMenu'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits



(j,c('PopoverMenu'));i=h&&h.prototype;j.prototype.
_onMenuDone=function(k){'use strict';};function j(){'use strict';h.apply(this,arguments);}


f.exports=j;}),null);

/** js/modules/Optimus.js */





__d('Optimus',['Event','Parent'],(function a(b,c,d,e,f,g){

'use strict';




var h={};





function i(k,l){
var m=l.getTarget();
if(!m)
return;


var n=h[k];
for(var o in n){
var p=c('Parent').byAttribute(m,o);
if(p)

do{var q=n[o][p.getAttribute(o)];
if(q&&q.handleOptimus(k,p,l)===false)
break;}while(

p=c('Parent').byAttribute(p.parentNode,o));}}










function j(k,l,m,n){
if(!h[k]){
h[k]={};
c('Event').listen(document.documentElement,k,i.bind(null,k));}

if(!h[k][l])
h[k][l]={};

if(!h[k][l][m])
h[k][l][m]=n;}



f.exports=

{addRelClick:function k(l,m){
j('click','rel',l,m);},


addEventListener:j};}),null);

/** js/pages/composer/react/store/PagesComposerUnpublishedPostsStore.js */





__d('PagesComposerUnpublishedPostsStore',['ReactComposerStoreBase','PagesComposerActionsTypes'],(function a(b,c,d,e,f,g){var h,i,




j=
{isDraft:false,
scheduledPublishTime:null,
backdateConfig:null,
isAdsPost:false,
stopFeedDistributionDate:null,
isOfferUpsellShown:false,
isOfferUpsellAbandoned:false,
offerConfig:null};h=babelHelpers.inherits


(k,c('ReactComposerStoreBase'));i=h&&h.prototype;
function k(){'use strict';
var l;
i.constructor.call(this,
function(){return Object.assign({},j);},
function(m){
switch(m.type){
case c('PagesComposerActionsTypes').BACKDATE:
l&&l.$PagesComposerUnpublishedPostsStore_handleBackdate(m);
break;
case c('PagesComposerActionsTypes').SET_DRAFT:
l&&l.$PagesComposerUnpublishedPostsStore_handleSetDraft(m);
break;
case c('PagesComposerActionsTypes').SCHEDULE:
l&&l.$PagesComposerUnpublishedPostsStore_handleSchedule(m);
break;
case c('PagesComposerActionsTypes').SET_ADS_POST:
l&&l.$PagesComposerUnpublishedPostsStore_handleAdsPost(m);
break;
case c('PagesComposerActionsTypes').SHOW_OFFER_UPSELL:
l&&l.$PagesComposerUnpublishedPostsStore_handleShowOfferUpsell(m);
break;
case c('PagesComposerActionsTypes').ABANDON_OFFER_UPSELL:
l&&l.$PagesComposerUnpublishedPostsStore_handleAbandonOfferUpsell(m);
break;}});



l=this;}
k.prototype.

getBackdateConfig=function(l){'use strict';
return this.getComposerData(l).backdateConfig;};
k.prototype.

getIsDraft=function(l){'use strict';
return this.getComposerData(l).isDraft;};
k.prototype.

getScheduledPublishTime=function(l){'use strict';
return this.getComposerData(l).scheduledPublishTime;};
k.prototype.

getStopFeedDistributionTime=function(l){'use strict';
return this.getComposerData(l).stopFeedDistributionDate;};
k.prototype.

getIsAdsPost=function(l){'use strict';
return this.getComposerData(l).isAdsPost;};
k.prototype.

getIsOfferUpsellShown=function(l){'use strict';
return this.getComposerData(l).isOfferUpsellShown;};
k.prototype.

getIsOfferUpsellAbandoned=function(l){'use strict';
return this.getComposerData(l).isOfferUpsellAbandoned;};
k.prototype.

getOfferConfig=function(l){'use strict';
return this.getComposerData(l).offerConfig;};
k.prototype.

$PagesComposerUnpublishedPostsStore_handleBackdate=function(l){'use strict';
var m=this.getComposerData(l.composerID);
m.backdateConfig=
{year:l.year,
month:l.month,
day:l.day,
hideFromNewsFeed:l.hideFromNewsFeed};};

k.prototype.

$PagesComposerUnpublishedPostsStore_handleSchedule=function(l){'use strict';
var m=this.getComposerData(l.composerID);
m.scheduledPublishTime=l.scheduleDate;
m.stopFeedDistributionDate=l.stopFeedDistributionDate;};
k.prototype.

$PagesComposerUnpublishedPostsStore_handleSetDraft=function(l){'use strict';
var m=this.getComposerData(l.composerID);
m.isDraft=true;};
k.prototype.

$PagesComposerUnpublishedPostsStore_handleAdsPost=function(l){'use strict';
var m=this.getComposerData(l.composerID);
m.isAdsPost=true;};
k.prototype.

$PagesComposerUnpublishedPostsStore_handleShowOfferUpsell=function(l){'use strict';var m=
this.validateAction
(l,
['composerID','config']),n=m[0],o=m[1],

p=this.getComposerData(n);
p.offerConfig=o;
p.isOfferUpsellShown=true;

this.emitChange(n);};
k.prototype.

$PagesComposerUnpublishedPostsStore_handleAbandonOfferUpsell=function(l){'use strict';
var m=this.getComposerData(l.composerID);
m.isOfferUpsellAbandoned=true;};



f.exports=new k();}),null);

/** js/profile/ProfileActionBarLogger.js */





__d('ProfileActionBarLogger',['FBJSON','MarauderLogger','Optimus'],(function a(b,c,d,e,f,g){






function h(){
c('Optimus').addEventListener
('mouseup',
'data-loggable',
'ProfileHighQualityLogger',

{handleOptimus:function i(j,k,l){
c('MarauderLogger').log
('profile_high_quality_action',
null,
c('FBJSON').parse(k.getAttribute('data-store')));

return false;}});}





g.init=h;}),null);

/** js/profile/timeline/ProfileEscapeHatch.js */





__d('ProfileEscapeHatch',['CSS','ProfileTabUtils','Run','TimelineComponentKeys','TimelineController'],(function a(b,c,d,e,f,g){







var h=[],
i=false;



function j(k){'use strict';
this.$ProfileEscapeHatch_root=k;
h.push(this);

if(!i){
c('TimelineController').register
(c('TimelineComponentKeys').ESCAPE_HATCH,
j);


c('Run').onLeave(function(){
h=[];});


i=true;}}

j.

handleTabChange=function(k){'use strict';
h.forEach(function(l){
c('CSS').conditionShow(l.$ProfileEscapeHatch_root,
c('CSS').shown(l.$ProfileEscapeHatch_root)||c('ProfileTabUtils').isTimelineTab(k));});};




f.exports=j;}),null);

/** js/profile/timeline/ProfileNavigation.js */






__d('ProfileNavigation',['Arbiter','CSS','PageTransitions','ProfileDOMID','ProfileOverviewDOMID','ProfileTabConst','ProfileTabUtils','ScriptPath','TimelineComponentKeys','TimelineController','TimelineDOMID','TimelineURI','UIPagelet','URI','$','ge'],(function a(b,c,d,e,f,g){

























var h=7,
i='/profile_book.php',

j=null,
k=null;

function l(w){
var x=c('URI').getMostRecentURI(),
y=c('TimelineURI').getSectionKeyFromURI(x),
z=c('TimelineURI').getTabKeyFromURI(x),
aa=c('TimelineURI').getSectionKeyFromURI(w),
ba=c('TimelineURI').getTabKeyFromURI(w),
ca=w.getQueryData();


if(s(x,w)||
t(ba)||
t(z)||
!!ca.and||
c('TimelineURI').isVideoPermalink(w))

return false;


if(ca.hc_location==='profile_browser')

return false;


if(Object.prototype.hasOwnProperty.call(ca,'theater')){


c('Arbiter').subscribeOnce('PhotoSnowlift.CLOSE',u);
return false;}


if(Object.prototype.hasOwnProperty.call(ca,'force-refresh'))
return false;



if(c('ProfileTabUtils').isTimelineTab(z)&&
!c('ProfileTabUtils').isTimelineTab(ba)&&
r(aa)){

j=aa;
m
(aa,
'TimelineMedleyView',
c('TimelineDOMID').TAB_CONTENT,
c('ProfileOverviewDOMID').MEDLEY_ROOT,
ca);

return true;}



if(!c('ProfileTabUtils').isTimelineTab(z)&&
c('ProfileTabUtils').isTimelineTab(ba)){

j=y;
m
(c('ProfileTabConst').TIMELINE,
'TimelineWallColumn',
c('ProfileOverviewDOMID').MEDLEY_ROOT,
c('TimelineDOMID').TAB_CONTENT,
ca);

return true;}


return false;}


function m
(w,
x,
y,
z,
aa){

c('CSS').hide(c('$')(y));
c('Arbiter').inform('save_facebar_query',true);

var ba=c('ge')(z);
if(ba){
c('CSS').show(ba);
q(w);}else 

n(x,w,aa);


c('TimelineController').registerCurrentKey(w);}


function n
(w,
x,
y){

o();




var z=babelHelpers['extends']({},
k,
{tab_key:x});

if(y)
z=babelHelpers['extends']({},
z,
y);



var aa=function ca(da){
p();
da();},


ba=
{append:true,
displayCallback:aa,
finallyHandler:q.bind(null,x),
usePipe:true};


c('UIPagelet').loadFromEndpoint
(w,
c('ProfileDOMID').MAIN_COLUMN_PERSONAL,
z,
ba);}



function o(){
c('CSS').show(c('$')(c('ProfileDOMID').TAB_LOAD_INDICATOR));}


function p(){
c('CSS').hide(c('$')(c('ProfileDOMID').TAB_LOAD_INDICATOR));}


function q(w){
var x=i;
if(w&&!c('ProfileTabUtils').isTimelineTab(w))
x+=':'+w;


c('ScriptPath').set(x);
c('PageTransitions').transitionComplete();}


function r(w){
return j===null||w===j;}


function s(w,x){
var y=c('TimelineURI').getVanityFromURI(w),
z=w.getQueryData().id,
aa=c('TimelineURI').getVanityFromURI(x),
ba=x.getQueryData().id;

if(y&&aa)
return y!==aa;


if(z&&ba)
return z!==ba;


return true;}


function t(w){

return (c('ProfileTabUtils').isActivityLogTab(w)||
w===c('ProfileTabConst').MEMORIAL_CONTACT||
w===c('ProfileTabConst').POSTS);}



function u(){
c('PageTransitions').registerHandler(l,h);}







var v=


{init:function w(x){
k=x.profileContextData;
c('TimelineController').register(c('TimelineComponentKeys').ASYNC_NAV,this);
u();},


reset:function w(){
k=null;
j=null;
c('PageTransitions').removeHandler(l);}};



f.exports=v;}),null);

/** js/profile/timeline/TimelineNavLight.js */





__d('TimelineNavLight',['csx','cx','invariant','Arbiter','CSS','DataStore','DOM','DOMQuery','Event','Parent','ProfileOverviewDOMID','ProfileOverviewSection','ProfileTabConst','ProfileTimelineUILogger','TimelineAppSectionConstants','TimelineComponentKeys','TimelineController','destroyOnUnload','queryThenMutateDOM','requireWeak'],(function a(b,c,d,e,f,g,h,i,j){























var k="_6-7",
l="_6-6",
m="_529n",
n="_5215",
o="_9rw",
p="_70k",
q="._6-7",
r="._6-6";



function s(t){'use strict';
!s.$TimelineNavLight_instance||j(0,'TimelineNavLight is a singleton.');

this.$TimelineNavLight_root=t;
this.$TimelineNavLight_activeTab=c('DOMQuery').scry(t,q)[0];
this.$TimelineNavLight_tabs=c('DOMQuery').scry(t,r);

this.$TimelineNavLight_resizeToFit();

c('ProfileOverviewSection').subscribe
('Medley/transitionToSection',
function(v,w){
this.$TimelineNavLight_updateActiveTab
(w.slice(c('ProfileOverviewDOMID').PREFIX_MEDLEY.length));}.

bind(this));


c('TimelineController').register(c('TimelineComponentKeys').COVER_NAV,this);

var u=c('Event').listen
(this.$TimelineNavLight_root,
'click',
this.$TimelineNavLight_handleItemClick.bind(this));


s.$TimelineNavLight_instance=this;

c('destroyOnUnload')(function(){
this.$TimelineNavLight_root=null;
this.$TimelineNavLight_activeTab=null;
this.$TimelineNavLight_tabs=null;

u.remove();

if(this.$TimelineNavLight_moreClickListener)
this.$TimelineNavLight_moreClickListener.remove();


s.$TimelineNavLight_instance=null;}.
bind(this));}
s.prototype.

handleTabChange=function(t){'use strict';
this.$TimelineNavLight_updateActiveTab(t);};
s.prototype.

setMoreMenuInstance=function(t){'use strict';
this.$TimelineNavLight_moreClickListener=c('Event').listen
(t.getRoot(),
'click',
this.$TimelineNavLight_handleMoreItemClick.bind(this));};

s.


setMoreMenuInstance=function(t){'use strict';

!!s.$TimelineNavLight_instance||j(0,
'No TimelineNavLight instance found.');


s.$TimelineNavLight_instance.setMoreMenuInstance(t);};
s.prototype.

$TimelineNavLight_updateActiveTab=function(t){'use strict';
this.$TimelineNavLight_activeTab&&c('CSS').removeClass(this.$TimelineNavLight_activeTab,k);

this.$TimelineNavLight_tabs.some
(function(u){
var v=
c('TimelineAppSectionConstants').collectionTabKeyToAppTabKey[t]||
t;

if(c('DataStore').get(u,'tab-key')===v){
c('CSS').addClass(u,k);
this.$TimelineNavLight_activeTab=u;
return true;}}.

bind(this));

if(t===c('ProfileTabConst').TIMELINE)
c('requireWeak')('ScrollColumn.react',function(u){
c('Arbiter').inform(u.EVENT_SHOULD_ADJUST);});};


s.prototype.

$TimelineNavLight_resizeToFit=function(){'use strict';
var t=this.$TimelineNavLight_tabs.length-1,
u=this.$TimelineNavLight_tabs[t],

v,
w,
x,
y=0;

c('queryThenMutateDOM')
(function(){
v=c('Parent').byClass(this.$TimelineNavLight_root,p).offsetWidth;
w=u.offsetLeft;
x=u.offsetWidth;

for(var z=t;z>1;z--){
var aa=this.$TimelineNavLight_tabs[z];
if(aa.offsetLeft+aa.offsetWidth>v){
y++;}else 

break;}}.


bind(this),
function(){
if(w+x>v)
c('CSS').addClass(this.$TimelineNavLight_root,n);


for(var z=t;z>t-y;z--)
c('DOM').remove(this.$TimelineNavLight_tabs[z]);






c('CSS').removeClass
(c('Parent').byClass(this.$TimelineNavLight_root,m),
m);}.

bind(this));};

s.prototype.

$TimelineNavLight_getTabKey=function(t,u){'use strict';
var v=c('Parent').byClass(t,u);
if(v)
return c('DataStore').get(v,'tab-key');


return null;};
s.prototype.

$TimelineNavLight_handleItemClick=function(event){'use strict';
var t=this.$TimelineNavLight_getTabKey(event.target,l);
if(t)
c('ProfileTimelineUILogger').logCoverNavItemClick(t);};

s.prototype.

$TimelineNavLight_handleMoreItemClick=function(event){'use strict';
var t=this.$TimelineNavLight_getTabKey(event.target,o);
if(t)
c('ProfileTimelineUILogger').logCoverNavMoreItemClick(t);};




f.exports=s;}),null);

/** js/profile/timeline/VideoCallHelpler.js */






__d('VideoCallHelpler',['FBRTCCallabilityStore','FBRTCCore','TooltipData'],(function a(b,c,d,e,f,g){

'use strict';











function h(j,k){
var l=k.calleeID,m=k.calleeName;
j.forEachItem(function(n){
if(n.getValue&&n.getValue()==='video_call'){
if(c('FBRTCCallabilityStore').isCallable(k.calleeID)){
n.enable();}else 

n.disable();

c('TooltipData').set
(n.getRoot(),
c('FBRTCCallabilityStore').callButtonTooltip(l,m),
'right');}});}





var i=

{bindProfileVideoCallAction:function j
(k,
l){

h(k,l);
c('FBRTCCallabilityStore').addListener(function(){
h(k,l);});


k.subscribe('itemclick',function(m,n){
if(n.item.getValue()==='video_call'&&!n.item.isDisabled())
c('FBRTCCore').startOutgoingCall
(l.calleeID,
'timeline_profile',
false);});}};






f.exports=i;}),null);

/** js/react_composer/flux/ReactComposerFocusStore.js */





__d('ReactComposerFocusStore',['ReactComposerFocusActionTypes','ReactComposerStoreBase'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits




(j,c('ReactComposerStoreBase'));i=h&&h.prototype;
function j(){
var k=void 0;
i.constructor.call(this,
function(){

return {focusConfig:{},
isFocused:false};},


function(l){
if(!k)
return;

switch(l.type){
case c('ReactComposerFocusActionTypes').SUBSCRIBE:
k.$ReactComposerFocusStore_handleSubscribe
(l.composerID,
l.onFocusAcquiredCallback,
l.onFocusLostCallback);

k.emitChange(l.composerID);
break;
case c('ReactComposerFocusActionTypes').UNSUBSCRIBE:
k.$ReactComposerFocusStore_handleUnsubscribe(l.composerID);
k.emitChange(l.composerID);
break;
case c('ReactComposerFocusActionTypes').FOCUS_ACQUIRED:
k.$ReactComposerFocusStore_handleFocusAcquired(l.composerID);
k.emitChange(l.composerID);
break;
case c('ReactComposerFocusActionTypes').FOCUS_LOST:
k.$ReactComposerFocusStore_handleFocusLost(l.composerID);
k.emitChange(l.composerID);
break;}});



k=this;}
j.prototype.

$ReactComposerFocusStore_handleSubscribe=
function(k,
l,
m){

var n=this.getComposerData(k);
n.focusConfig=
{onFocusAcquiredCallback:l,
onFocusLostCallback:m};};

j.prototype.

$ReactComposerFocusStore_handleUnsubscribe=function(k){
var l=this.getComposerData(k);
l.focusConfig={};};
j.prototype.

$ReactComposerFocusStore_handleFocusAcquired=function(k){
var l=this.getComposerData(k);
if(l.focusConfig.onFocusAcquiredCallback)

setTimeout(l.focusConfig.onFocusAcquiredCallback,0);

l.isFocused=true;};
j.prototype.

$ReactComposerFocusStore_handleFocusLost=function(k){
var l=this.getComposerData(k);
if(l.focusConfig.onFocusLostCallback)

setTimeout(l.focusConfig.onFocusLostCallback,0);

l.isFocused=false;};
j.prototype.

isComposerFocused=function(k){
return this.getComposerData(k).isFocused;};



f.exports=new j();}),null);

/** www/__virtual__/x/XAfterPartyWWWController.js */



__d("XAfterPartyWWWController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/ads\/afterparty\/www\/",{page_id:{type:"Int",required:true},scrolling_offset:{type:"Int",defaultValue:0}});}),

null);

/** www/__virtual__/x/XUnpublishedPostSuccessController.js */



__d("XUnpublishedPostSuccessController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/pages\/unpublished_posts\/post_success\/",{type:{type:"String",required:true}});}),

null);

/** js/profile/timeline/modules/one_column/PagesComposer.js */





__d('PagesComposer',['csx','cx','ActorURI','Arbiter','AsyncRequest','Bootloader','ReactComposerFocusStore','ComposerXMarauderLogger','ComposerXStore','DOM','PagesComposerUnpublishedPostsStore','Parent','ReloadPage','Run','XUnpublishedPostSuccessController','XAfterPartyWWWController','$','getObjectValues','goURI'],(function a(b,c,d,e,f,g,h,i){





















var j=500,
k=20,
l=58,

m,
n;

function o(){
c('ComposerXMarauderLogger').logCompleted(m.id);}


function p(s){
if(s.hidePost){
var t=c('ComposerXStore').getAllForComposer(m.id);
if(!c('getObjectValues')(t).length){

var u=null;

if(c('PagesComposerUnpublishedPostsStore').getIsDraft(m.id))
u='draft';


if(c('PagesComposerUnpublishedPostsStore').getScheduledPublishTime
(m.id))

u='scheduled';

if(u){
var v=c('XUnpublishedPostSuccessController').getURIBuilder().
setString('type',u).
getURI();
v=c('ActorURI').create(v,n);
new (c('AsyncRequest'))().setURI(v).send();}}


o();
return;}


if(s.redirect){

var t=c('ComposerXStore').getAllForComposer(m.id);
c('getObjectValues')(t).forEach(function(y){
if(y.reset)
y.reset(y);});


c('goURI')(s.redirect);
o();
return;}

if(!s.streamStory){



c('ReloadPage').now();
return;}


if(s.backdatedTime){
c('Bootloader').loadModules(["PagesStoryPublisher"],
function(y){
y.publish(s);},
'PagesComposer');

o();
return;}


var w=r.renderStory(m,s.streamStory);
c('Arbiter').inform
('TimelineComposer/on_after_publish',
w,
c('Arbiter').BEHAVIOR_PERSISTENT);


if(n){
var x=c('XAfterPartyWWWController').getURIBuilder().
setInt('page_id',n);
q(x,0);}

o();}


function q(s,t){
if(!c('ReactComposerFocusStore').isComposerFocused(m.id)){
if(t>0)


s.setInt
('scrolling_offset',
l);


new (c('AsyncRequest'))().setURI(s.getURI()).send();}else
if(t<k)
setTimeout
(q.bind(this,s,t+1),
j);}




var r=
{init:function s(t,u){
m=c('$')(t);
n=u;
var v=
c('Arbiter').subscribe('composer/publish',function(event,w){
if(w.composer_id===m.id)
p(w);});


c('Run').onLeave(v.unsubscribe.bind(v));},


renderStory:function s(t,u){
var v=
c('Parent').bySelector(t,"#pagelet_timeline_main_column");
if(!v)
return;

var w=c('DOM').scry
(v,
"._5sem")[
0],

x=c('DOM').prependContent(w,u)[0];
c('Bootloader').loadModules(["Animation"],function(y){
new y(x).
from('backgroundColor','#fff8dd').
to('backgroundColor','#fff').
duration(2000).
ease(y.ease.both).
go();},
'PagesComposer');

return x;},











replaceByID:function s(t,u){
c('DOM').replace(c('$')(t),u);}};



f.exports=b.PagesComposer||r;}),null);

/** js/stream/timeline/TimelineViewportTracking.js */







__d('TimelineViewportTracking',['csx','Arbiter','Banzai','DataAttributeUtils','DOM','TimelineSeenStateConstants','TimelineViewportTrackingLogType','ViewportTracking','$','tidyEvent','viewportTrackingBuilder'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;
























function k
(n,
o){


return {_stream:null,
_streamDOMID:o,

getDataFromConfig:function p(q,r){
r.isSeenStateLoggingEnabled=q.is_seen_state_logging_enabled;
r.isTimetrackingEnabled=q.is_timetracking_enabled;
r.vpvdDebug=!!q.vpvd_debug;
r.trackingHooks=!!q.tracking_hooks;

c('tidyEvent')(c('Arbiter').subscribe
(['TimelineConstants/unitSegmentLoaded'],
function(){
r.invalidateAllStoriesCache();
r.invalidateVisibleStoriesCache();}));},




getAllStories:function p(){
var q=c('DOM').scry
(this.getStream(),
"._5pat"),



r=[];
for(var s=0;s<q.length;s++)
if(this.getStoryID(q[s]))
r.push(q[s]);



return r;},


getStream:function p(){
if(!this._stream)
this._stream=c('$')(this._streamDOMID);

return this._stream;},


getStoryID:function p(q){

var r=JSON.parse(c('DataAttributeUtils').getDataFt(q)||null);
if(r){
var s=c('TimelineSeenStateConstants').FT_TIMELINE_HASH_IDENTIFIER_KEY;
return r[s];}


return null;},


getDataToLog:function p(q){
var r=JSON.parse(c('DataAttributeUtils').getDataFt(q));

return {ft:r,
log_type:c('TimelineViewportTrackingLogType').IMPRESSION};}};}



i=babelHelpers.inherits

(l,c('ViewportTracking'));j=i&&i.prototype;l.prototype.
getTimetrackingDataToLog=function(n){
var o=j.getTimetrackingDataToLog.call(this,n);
o.log_type=c('TimelineViewportTrackingLogType').DURATION;
return o;};
l.prototype.




sendDataToLog=
function(n,
o,
p,
q){

if(!o.ft)
return;


var r={};
if(q)
r.retry=q;

if(p)
r.delay=2000;


c('Banzai').post('timeline_feed_tracking',o,r);};
l.prototype.

cleanup=function(){
m.clearSingleton();
j.cleanup.call(this);};
function l(){i.apply(this,arguments);}


var m=c('viewportTrackingBuilder')
(function(n,
o){

var p=new l
(k(n,o));

p.init(n);
return p;});








m.init=m.singleton.bind(m);

f.exports=m;}),null);

/** js/video/canvas_to_blob/CanvasToBlobImpl.js */




__d('CanvasToBlobImpl',['BlobFactory'],(function a(b,c,d,e,f,g){



function h(i,j){
var k=atob(i.substr(i.indexOf(',')+1)),
l=new Uint8Array(k.length);

for(var m=0;m<k.length;m++)
l[m]=k.charCodeAt(m);


return c('BlobFactory').getBlob([l],{type:j});}


f.exports=
{getBlob:h};}),null);

/** js/video/canvas_to_blob/dataURLToBlob.js */





__d('dataURLToBlob',['Promise','BlobFactory','CanvasToBlobResource','WebWorker','CanvasToBlobImpl'],(function a(b,c,d,e,f,g){







var h=c('CanvasToBlobImpl').getBlob,

i=b.URL||b.webkitURL||{};





function j
(k,
l){

if(!i.createObjectURL||!c('BlobFactory').isSupported)

return c('Promise').reject("Browser doesn't support this feature");


if(c('WebWorker').isSupported()){
return new (c('Promise'))(function(m,n){
var o=new (c('WebWorker'))(c('CanvasToBlobResource')).
setMessageHandler(function(p){
m(p);
o.terminate();}).

setErrorHandler(function(event){
n(event.message);
o.terminate();}).

execute().
postMessage
({dataURL:k,
fileType:l});});}else 



return c('Promise').resolve(h(k,l));}



f.exports=j;}),null);

/** js/video/canvas_to_blob/canvasToBlob.js */





__d('canvasToBlob',['Promise','dataURLToBlob'],(function a(b,c,d,e,f,g){



function h
(i,
j,
k){

return new (c('Promise'))(function(l,m){
if(i.toBlob){
i.toBlob(l,j,k);}else{

var n=i.toDataURL(j,k);
c('dataURLToBlob')(n,j).then(function(o){
l(o);},
m).done();}});}




f.exports=h;}),null);

/** js/video/thumbnail/VideoThumbnail.js */






__d('VideoThumbnail',['invariant'],(function a(b,c,d,e,f,g,h){




function i(j){'use strict';
this.$VideoThumbnail_url=j;}
i.prototype.

getURL=function(){'use strict';
return this.$VideoThumbnail_url;};
i.prototype.

getData=function(){'use strict';
h(0,'getData not implemented');};



f.exports=i;}),null);

/** js/video/thumbnail/CanvasVideoThumbnail.js */






__d('CanvasVideoThumbnail',['Promise','DOM','EventListener','VideoThumbnail','canvasToBlob'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits







(j,c('VideoThumbnail'));i=h&&h.prototype;
function j(k,l,m){'use strict';
i.constructor.call(this,null);
this.$CanvasVideoThumbnail_canvas=k;
this.$CanvasVideoThumbnail_videoPlayer=l;
this.$CanvasVideoThumbnail_time=m;}
j.prototype.

getTime=function(){'use strict';
return this.$CanvasVideoThumbnail_time?this.$CanvasVideoThumbnail_time:0;};
j.prototype.

getURL=function(){'use strict';
if(!this.$CanvasVideoThumbnail_url)
this.$CanvasVideoThumbnail_url=this.$CanvasVideoThumbnail_canvas.toDataURL('image/jpeg');

return this.$CanvasVideoThumbnail_url;};
j.prototype.

getData=function(){'use strict';
var k=c('DOM').create('canvas'),
l=k.getContext('2d'),
m=this.$CanvasVideoThumbnail_videoPlayer;

return new (c('Promise'))(function(n,o){
var p=c('EventListener').listen(m,'seeked',function(){
p.remove();

k.width=m.videoWidth;
k.height=m.videoHeight;
l.drawImage(m,0,0,k.width,k.height);

c('canvasToBlob')(k,'image/jpeg').then(n,o);});

m.currentTime=this.$CanvasVideoThumbnail_time;}.
bind(this));};



f.exports=j;}),null);

/** js/video/thumbnail/generateVideoThumbnails.js */





__d('generateVideoThumbnails',['Promise','CanvasVideoThumbnail','EventListener','VideoFrameBuffer','VideoThumbnail'],(function a(b,c,d,e,f,g){











function h
(i,
j,
k,
l){


var m=arguments.length<=4||arguments[4]===undefined?'contain':arguments[4],n=arguments.length<=5||arguments[5]===undefined?0:arguments[5];
return new (c('Promise'))(function(o,p){
var q=document.createElement('canvas'),
r=[],
s=0,
t=(i.duration-
n)/l,
u=new (c('VideoThumbnail'))(''),
v=new (c('VideoFrameBuffer'))
(q,
i,
m),

w;

q.width=j;
q.height=k;

var x=function z(){
v.updateFrameBuffer();
var aa=new (c('CanvasVideoThumbnail'))
(q,
i,
n+(s-1)*t);

r.push(aa);



if(aa.getURL().length>u.getURL().length)
u=aa;


y();},


y=function z(){
if(s===0)
w=c('EventListener').listen
(i,
'seeked',
x);



if(s<l){
i.currentTime=n+
s*t;
s++;}else{

if(w)
w.remove();

o({thumbnails:r,selectedThumbnail:u});}};






if(i.videoWidth===0||i.videoHeight===0){
p();
return;}

y();});}



f.exports=h;}),null);

/** js/video/video_library/VideoLibraryButton.react.js */





__d('VideoLibraryButton.react',['cx','fbt','PublishingToolsSource','React','URI','VideoLibrarySource','XPagesManagerPublishingToolsController','XUIDialogButton.react'],(function a(b,c,d,e,f,g,h,i){var j,k;j=babelHelpers.inherits


















(l,c('React').Component);k=j&&j.prototype;l.prototype.



$VideoLibraryButton_getVideoLibraryURI=function(){'use strict';
return c('XPagesManagerPublishingToolsController').getURIBuilder().
setString('page_token',this.props.pageID).
setString('section','VIDEOS').
setEnum('source',this.props.source).
setEnum('refSource',this.props.refSource).
getURI();};
l.prototype.

$VideoLibraryButton_onButtonClick=function(){'use strict';
this.$VideoLibraryButton_getVideoLibraryURI().go();};
l.prototype.

render=function(){'use strict';

return (c('React').createElement(c('XUIDialogButton.react'),
{action:'cancel',
className:"_2bhc",
label:i._(["Video Library","bf2402a55be0108335cc18738ba8ad32"]),
size:this.props.size,
onClick:this.$VideoLibraryButton_onButtonClick.bind(this)}));};


function l(){'use strict';j.apply(this,arguments);}


l.defaultProps=
{size:'small'};


f.exports=l;}),null);

/** shared/haste/glyph.js */





__d('glyph',[],(function a(b,c,d,e,f,g){












f.exports=function h
(i){

throw new Error('glyph: Unexpected glyph call.');};}),
null);

/** shared/jpegresizer/Emscripten.js */




__d('Emscripten',[],(function a(b,c,d,e,f,g){

f.exports=
{isSupported:function h(){


return (typeof Int32Array!=='undefined'&&
typeof Float64Array!=='undefined'&&
!!new Int32Array(1).subarray&&
!!new Int32Array(1).set);}};}),

null);

/** shared/webworker/PooledWebWorker.js */





__d('PooledWebWorker',['WebWorker'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits









(j,c('WebWorker'));i=h&&h.prototype;






function j(k,l,m){'use strict';
i.constructor.call(this,m);
this.$PooledWebWorker_index=l;
this.$PooledWebWorker_pool=k;}
j.prototype.






getIndex=function(){'use strict';
return this.$PooledWebWorker_index;};
j.prototype.





getPool=function(){'use strict';
return this.$PooledWebWorker_pool;};



f.exports=j;}),null);

/** shared/webworker/WebWorkerPool.js */





__d('WebWorkerPool',['PooledWebWorker','emptyFunction'],(function a(b,c,d,e,f,g){h.
















isSupported=function(){'use strict';
return c('PooledWebWorker').isSupported();};






function h(i,j){'use strict';
this.$WebWorkerPool_pool=[];
for(var k=0;k<j;k++)
this.$WebWorkerPool_pool.push
(new (c('PooledWebWorker'))(this,k,i).
setErrorHandler(this.$WebWorkerPool_handleError).
setMessageHandler(this.$WebWorkerPool_handleMessage).
execute());


this.$WebWorkerPool_next=0;}
h.prototype.









setMessageHandler=function(i){'use strict';
this.$WebWorkerPool_messageHandler=i||c('emptyFunction');
return this;};
h.prototype.






setAllowCrossPageTransition=function(i){'use strict';
this.$WebWorkerPool_pool.forEach(function(j){return j.setAllowCrossPageTransition(i);});
return this;};
h.prototype.










setErrorHandler=function(i){'use strict';
this.$WebWorkerPool_errorHandler=i||c('emptyFunction');
return this;};
h.prototype.







postMessage=function(){'use strict';
var i=this.getWorker();for(var j=arguments.length,k=Array(j),l=0;l<j;l++)k[l]=arguments[l];
i.postMessage.apply(i,k);
return i;};
h.prototype.





$WebWorkerPool_handleMessage=function(){'use strict';for(var i=arguments.length,j=Array(i),k=0;k<i;k++)j[k]=arguments[k];

j.unshift(this);
this.getPool().$WebWorkerPool_messageHandler.apply(this.getPool(),j);};
h.prototype.





$WebWorkerPool_handleError=function(){'use strict';for(var i=arguments.length,j=Array(i),k=0;k<i;k++)j[k]=arguments[k];
j.unshift(this);
return this.getPool().$WebWorkerPool_errorHandler.apply(this.getPool(),j);};
h.prototype.





getWorker=function(){'use strict';
var i=this.$WebWorkerPool_pool[this.$WebWorkerPool_next];
this.$WebWorkerPool_next=(this.$WebWorkerPool_next+1)%this.$WebWorkerPool_pool.length;
return i;};



f.exports=h;}),null);

/** shared/jpegresizer/JpegResizer.js */





__d('JpegResizer',['Emscripten','JpegResizerConfig','JpegResizeWorkerResource','WebWorker','WebWorkerPool','PUWErrorCodes'],(function a(b,c,d,e,f,g){








var h=null;i.


















isSupported=function(){'use strict';
return c('WebWorkerPool').isSupported()&&

c('Emscripten').isSupported()&&


!c('JpegResizerConfig').isGKBlacklisted;};
i.





getSingleton=function(j){'use strict';
if(!h)
h=new i
(j||i.DEFAULT_POOL_SIZE).















setAllowCrossPageTransition(true);

return h;};
i.







prepareResource=function(j){'use strict';
c('WebWorker').prepareResource(c('JpegResizeWorkerResource'),j);};












function i(j){'use strict';
j=j||i.DEFAULT_POOL_SIZE;
c('WebWorker').prepareResource(c('JpegResizeWorkerResource'));
this.$JpegResizer_pool=new (c('WebWorkerPool'))(c('JpegResizeWorkerResource'),j).
setErrorHandler(this.$JpegResizer_handleError.bind(this)).
setMessageHandler(this.$JpegResizer_handleMessage.bind(this));
this.$JpegResizer_callbacks={};
this.$JpegResizer_resizeHeight=i.DEFAULT_RESIZE_HEIGHT;
this.$JpegResizer_resizeWidth=i.DEFAULT_RESIZE_WIDTH;}
i.prototype.







setHighQuality=function(j){'use strict';
if(j){
this.$JpegResizer_resizeHeight=i.DEFAULT_RESIZE_HEIGHT;
this.$JpegResizer_resizeWidth=i.DEFAULT_RESIZE_WIDTH;}else{

this.$JpegResizer_resizeHeight=i.LOW_QUALITY_RESIZE_HEIGHT;
this.$JpegResizer_resizeWidth=i.LOW_QUALITY_RESIZE_WIDTH;}

return this;};
i.prototype.






setAllowCrossPageTransition=function(j){'use strict';
this.$JpegResizer_pool.setAllowCrossPageTransition(j);
return this;};
i.prototype.












resizeBlob=function(j,k,l){'use strict';
return this.$JpegResizer_resizeBlobToSize
(j,
this.$JpegResizer_resizeWidth,
this.$JpegResizer_resizeHeight,
k,
l);};

i.prototype.


















resize360Blob=function(j,k,l,m){'use strict';
var n=this.$JpegResizer_resizeWidth*3,
o=this.$JpegResizer_resizeHeight*3;
if(m){
n=m;
o=m;}

return this.$JpegResizer_resizeBlobToSize
(j,
n,
o,
k,
l);};

i.prototype.

$JpegResizer_resizeBlobToSize=function(j,k,l,m,n){'use strict';
var o=this.$JpegResizer_pool.getWorker();
if(o.isCurrentState('terminated')){



var p=new Error('Worker terminated');
p.code=c('PUWErrorCodes').WORKER_TERMINATED;
m(p);
return this;}


var q=o.postMessage
({blob:j,height:l,width:k}).
getIndex();

this.$JpegResizer_getWorkerCallbacks(q).unshift
({done:m,progress:n});

return this;};
i.prototype.







$JpegResizer_getWorkerCallbacks=function(j){'use strict';
if(!Object.prototype.hasOwnProperty.call(this.$JpegResizer_callbacks,j))
this.$JpegResizer_callbacks[j]=[];

return this.$JpegResizer_callbacks[j];};
i.prototype.

$JpegResizer_handleError=function(j,k){'use strict';



j.terminate();
var l=this.$JpegResizer_getWorkerCallbacks(j.getIndex());

this.$JpegResizer_tagWithErrorCode(k);
l.forEach(function(m){return m.done(k);});

l.length=0;};
i.prototype.








$JpegResizer_handleMessage=function(j,k){'use strict';
if(k.error)
this.$JpegResizer_tagWithErrorCode(k.error);


if(k.done){



this.$JpegResizer_getWorkerCallbacks(j.getIndex()).pop().done
(k.error,
k.blob,
k.skipped);}else{


var l=this.$JpegResizer_getWorkerCallbacks(j.getIndex()),
m=l[l.length-1].progress;
if(m)
m
({written:k.written,
total:k.total});}};



i.prototype.

$JpegResizer_tagWithErrorCode=function(j){'use strict';
var k=j.message;

if(k&&k.indexOf('Not a JPEG file')!==-1){
j.code=c('PUWErrorCodes').BAD_JPEG;}else
if(k&&k.indexOf('abort()')!==-1){
j.code=c('PUWErrorCodes').WORKER_ABORT;}else 

j.code=c('PUWErrorCodes').UNKNOWN_RESIZE_ERROR;};




i.DEFAULT_POOL_SIZE=3;
i.DEFAULT_RESIZE_HEIGHT=2048;
i.DEFAULT_RESIZE_WIDTH=2048;
i.LOW_QUALITY_RESIZE_HEIGHT=960;
i.LOW_QUALITY_RESIZE_WIDTH=960;

f.exports=i;}),null);

/** www/__virtual__/x/XVideoEditController.js */



__d("XVideoEditController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/video\/edit\/",{v:{type:"Int",required:true},album:{type:"Int"},source:{type:"Enum",enumType:1}});}),

null);

/** www/__virtual__/x/XVideoEditDialogController.js */



__d("XVideoEditDialogController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/video\/edit\/dialog\/",{video_id:{type:"Int"},source:{type:"Enum",enumType:1},story_dom_id:{type:"String"},timeline_identifier:{type:"String"},post_id:{type:"String"},video_asset_id:{type:"Int"},__asyncDialog:{type:"Int"}});}),

null);
