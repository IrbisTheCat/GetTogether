if (self.CavalryLogger) { CavalryLogger.start_js(["MpvTL"]); }

/** __static_js_modules__/videochainingcaller.js */




__d("VideoChainingCaller",[],(function a(b,c,d,e,f,g){

f.exports={INTERNAL:"internal",WWW_FEED_PIVOTS:"www_feed_pivots",WWW_FEED_SNOWLIFT:"www_feed_snowlift",MISC_PHOTO_SET:"misc_photo_set",MOBILE:"mobile",SEARCH:"search",WWW_FEED_RHC:"www_feed_rhc",WWW_PERMALINK:"www_permalink",WWW_PERMALINK_RHC:"www_permalink_rhc",WWW_PERMALINK_RHC_FROM_NOTIFICATION:"www_permalink_rhc_from_notification",MY_VIDEO_CHANNELS_ENT_QUERY:"my_video_channels_ent_query",TOP_FOLLOWED_VIDEO_CHANNELS_ENT_QUERY:"top_followed_video_channels_ent_query",BADGE:"badge",PAGINATION:"pagination",SUBTITLE:"subtitle",CHANNEL_VIEW_FROM_UNKNOWN:"channel_view_from_unknown",CHANNEL_VIEW_FROM_NEWSFEED:"channel_view_from_newsfeed",CHANNEL_VIEW_FROM_EXPLOREFEED:"channel_view_from_explorefeed",LIVE_INDEXER_FROM_EXPLOREFEED:"live_indexer_from_explorefeed",CHANNEL_VIEW_FROM_SEARCH:"channel_view_from_search",CHANNEL_VIEW_FROM_NEWSFEED_PIVOT:"channel_view_from_newsfeed_pivot",NEWSFEED_PIVOT_INLINE:"newsfeed_pivot_inline",MOBILE_NEWSFEED_PIVOT_INLINE:"mobile_newsfeed_pivot_inline",CHANNEL_VIEW_FROM_PAGE_CALL_TO_ACTION:"channel_view_from_page_call_to_action",CHANNEL_VIEW_FROM_PAGE_TIMELINE:"channel_view_from_page_timeline",CHANNEL_VIEW_FROM_PAGE_TIMELINE_FEATURED:"channel_view_from_page_timeline_featured",CHANNEL_VIEW_FROM_PAGE_VIDEO_TAB:"channel_view_from_page_video_tab",CHANNEL_VIEW_FROM_USER_TIMELINE:"channel_view_from_user_timeline",CHANNEL_VIEW_FROM_USER_VIDEO_TAB:"channel_view_from_user_video_tab",CHANNEL_VIEW_FROM_GROUP_TIMELINE:"channel_view_from_group_timeline",CHANNEL_VIEW_FROM_GROUP_VIDEO_TAB:"channel_view_from_group_video_tab",CHANNEL_VIEW_FROM_SAVED_STORY:"channel_view_from_saved_story",SAVED_STORY_INLINE:"saved_story_inline",CHANNEL_VIEW_FROM_SHARED_WITH_YOU_STORY:"channel_view_from_shared_with_you_story",SHARED_WITH_YOU_STORY_INLINE:"shared_with_you_story_inline",CHANNEL_VIEW_FROM_LATEST_FROM_YOUR_CHANNELS_STORY:"channel_view_from_latest_from_your_channels_story",LATEST_FROM_YOUR_CHANNELS_STORY_INLINE:"latest_from_your_channels_story_inline",CHANNEL_VIEW_FROM_CHANNEL_PIVOT:"channel_view_from_channel_pivot",CHANNEL_PIVOT_INLINE:"channel_pivot_inine",CHANNEL_VIEW_FROM_CHANNEL_RECOMMENDED_CHANNEL_STORY:"channel_view_from_recommended_channel_story",RECOMMENDED_CHANNEL_STORY_INLINE:"recommended_channel_story_inline",CHANNEL_VIEW_FROM_VIDEO_HOME:"channel_view_from_video_home",VIDEO_HOME_INLINE:"video_home_inline",VIDEO_HOME_CHANNEL_SEE_ALL:"video_home_channel_see_all",CHANNEL_VIEW_FROM_CASTING:"channel_view_from_casting",CONNECTED_TV:"connected_tv",CONNECTED_TV_DISCOVERY:"connected_tv_discovery",CONNECTED_TV_PLAYER:"connected_tv_player",CONNECTED_TV_PROFILE:"connected_tv_profile",VIDEO_HOME_FEED:"video_home_feed",FEED_SURVEY_SWIPE:"feed_survey_swipe",FEED_PIVOTS_INLINE:"feed_pivots_inline",CHANNEL_VIEW_FROM_FEED_PIVOTS:"channel_view_from_feed_pivots",VIDEO_SETS_CACHE_REFRESH:"video_sets_cache_refresh",VIDEO_SETS_CACHE_CHECK:"video_sets_cache_check",DUMMY_STORY_RECOMMENDED_VIDEOS:"dummy_story_recommended_videos",DUMMY_STORY_FRIENDS_ENJOYING:"dummy_story_friends_enjoying",LIVE_EVENT_VIDEO_SET:"live_event_video_set",LIVE_VIDEOS_SET:"live_videos_set",SINGLE_CREATOR_VIDEO_SET:"single_creator_video_set",FRT_TOOL:"frt_tool",DUMMY_STORY_FRIENDS_ENJOYING_NOW:"dummy_story_friends_enjoying_now",DUMMY_STORY_DUMMY_ACTION:"dummy_story_dummy_action",OCULUS_VIDEO:"oculus_video",TRENDING_DEMOGRAPHICS_LIVE:"trending_demographics_live",LIVE_MAP:"live_map",UNCONNECTED_LIVE_VIDEO:"unconnected_live_video",PROFILE_VIDEO_GALLERY:"profile_video_gallery",CHANNEL_VIEW_FROM_PLAYLIST:"channel_view_from_playlist",OCULUS_SOCIAL_HUB:"oculus_social_hub",AKIRA:"akira",IS_LIVE_VIDEO_CHAINING:"is_live_video_chaining",TAHOE:"tahoe"};}),

null);

/** shared/core/XReferer.js */





__d('XReferer',['Base64','Cookie','FBJSON','setTimeoutAcrossTransitions','URI'],(function a(b,c,d,e,f,g){
























var h=
{update:function i
(j,
k,
l){

if(!l){

c('Cookie').set('x-referer','');
return;}


if(j!=null)
j=h.truncatePath(j);

if(k!=null)
k=h.truncatePath(k);


var m=window.location.pathname+window.location.search,

n=c('URI').getRequestURI(),

o=n.getSubdomain();

if(k!=null)




h._setCookie(k,m,o);


if(j!=null)
c('setTimeoutAcrossTransitions')(function(){


if(j!=null)
h._setCookie(j,m,o);},

0);},



_setCookie:function i
(j,
k,
l){

var m=
{r:j,
h:k,
s:l},

n=c('Base64').encode(c('FBJSON').stringify(m));
c('Cookie').set('x-referer',n);},







truncatePath:function i(j){
var k=1024;
if(j&&j.length>k)
j=j.substring(0,k)+'...';

return j;}};



f.exports=h;}),null);

/** js/modules/HistoryManager.js */




__d('HistoryManager',['SessionName','Cookie','Env','Event','URI','UserAgent_DEPRECATED','isFacebookURI','emptyFunction','goOrReplace','isInIframe','setIntervalAcrossTransitions','XReferer'],(function a(b,c,d,e,f,g){




c('SessionName').getName();






























var h=

{history:null,
current:0,
fragment:null,

isInitialized:function i(){
return !!h._initialized;},


init:function i(){


if(!c('Env').ALLOW_TRANSITION_IN_IFRAME&&c('isInIframe')())







return;

if(h._initialized)
return h;


var j=new (c('URI'))(window.location.href),
k=j.getFragment()||'';
if(k.charAt(0)==='!'){
k=k.substr(1);
j.setFragment(k);}


Object.assign(h,
{_initialized:true,
fragment:k,
orig_fragment:k,
history:[j],
callbacks:[],
lastChanged:Date.now(),
canonical:new (c('URI'))('#'),
user:0,
enabled:true,
debug:c('emptyFunction')});


if(window.history&&history.pushState){
this.lastURI=document.URL;

try{window.history.replaceState(this.lastURI,null);}catch(
l){
if(!(l.number===-2147467259))



throw l;}


c('Event').listen(window,'popstate',function(m){
var n=m&&m.state&&typeof m.state==='string';
if(n&&h.lastURI!=m.state){
h.lastURI=m.state;
h.lastChanged=Date.now();
h.notify
(new (c('URI'))(m.state).getUnqualifiedURI().toString());}}.

bind(h));
if(c('UserAgent_DEPRECATED').webkit()<534||c('UserAgent_DEPRECATED').chrome()<=13){
c('setIntervalAcrossTransitions')(h.checkURI,42);
h._updateRefererURI(this.lastURI);}

return h;}



h._updateRefererURI(c('URI').getRequestURI(false));


if(c('UserAgent_DEPRECATED').webkit()<500||c('UserAgent_DEPRECATED').firefox()<2){
h.enabled=false;
return h;}


if('onhashchange' in window){








c('Event').listen(window,'hashchange',
function(){setTimeout(h.checkURI.bind(h),0);});}else 

c('setIntervalAcrossTransitions')(h.checkURI,42);


return h;},


registerURIHandler:function i(j){
h.callbacks.push(j);
return h;},



















setCanonicalLocation:function i(j){
h.canonical=new (c('URI'))(j);
return h;},


notify:function i(j){
if(j==h.orig_fragment)
j=h.canonical.getFragment();


for(var k=0;k<h.callbacks.length;k++)

try{if(h.callbacks[k](j))
return true;}catch(

l){


}



return false;},


checkURI:function i(){

















if(Date.now()-h.lastChanged<400)
return;


if(window.history&&history.pushState){
var j=new (c('URI'))(document.URL).removeQueryData('ref').toString(),
k=
new (c('URI'))(h.lastURI).removeQueryData('ref').toString();
if(j!=k){
h.lastChanged=Date.now();
h.lastURI=j;



if(c('UserAgent_DEPRECATED').webkit()<534)
h._updateRefererURI(j);

h.notify(new (c('URI'))(j).getUnqualifiedURI().toString());}

return;}


if(c('UserAgent_DEPRECATED').webkit()&&window.history.length==200){

if(!h.warned)
h.warned=true;





return;}


var l=new (c('URI'))(window.location.href).getFragment();

if(l.charAt(0)=='!')
l=l.substr(1);









l=l.replace(/%23/g,'#');

if(l!=h.fragment.replace(/%23/g,'#')){

h.debug([l,' vs ',h.fragment,
'whl: ',window.history.length,
'QHL: ',h.history.length].join(' '));

for(var m=h.history.length-1;m>=0;--m)
if(h.history[m].getFragment().replace(/%23/g,'#')==
l)
break;








++h.user;
if(m>=0){
h.go(m-h.current);}else 

h.go('#'+l);

--h.user;}},








_updateRefererURI:function i(j){



if(j instanceof c('URI'))
j=j.toString();

c('XReferer').update(j,null,true);},


go:function i(j,k,l){

if(window.history&&history.pushState){
k||typeof j=='number';





var m=new (c('URI'))(j).removeQueryData('ref');
m=
m.removeQueryData('messaging_source').toString();
h.lastChanged=Date.now();
this.lastURI=m;
if(l){
window.history.replaceState(j,null,m);}else 

window.history.pushState(j,null,m);




if(c('UserAgent_DEPRECATED').webkit()<534)
h._updateRefererURI(j);

return false;}

h.debug('go: '+j);

if(k===undefined)
k=true;


if(!h.enabled)





if(!k)
return false;



if(typeof j=='number'){
if(!j)
return false;


var n=j+h.current,
o=Math.max(0,Math.min(h.history.length-1,n));

h.current=o;

n=h.history[o].getFragment()||h.orig_fragment;
n=new (c('URI'))(n).removeQueryData('ref').getUnqualifiedURI().toString();













h.fragment=n;

h.lastChanged=Date.now();













if(!h.user)
c('goOrReplace')(window.location,







window.location.href.split('#')[0]+'#!'+n,
l);


if(k)
h.notify(n);





h._updateRefererURI(n);

return false;}


j=new (c('URI'))(j);
if(j.getDomain()==new (c('URI'))(window.location.href).getDomain())
j=new (c('URI'))('#'+j.getUnqualifiedURI());






var p=h.history[h.current].getFragment(),
q=j.getFragment();
if(q==p||p==h.orig_fragment&&
q==h.canonical.getFragment()){
if(k)
h.notify(q);


h._updateRefererURI(q);

return false;}


if(l)
h.current--;


var r=h.history.length-h.current-1;

h.history.splice(h.current+1,r);
h.history.push(new (c('URI'))(j));
return h.go(1,k,l);},






getCurrentFragment:function i(){
var j=c('URI').getRequestURI(false).getFragment();
return j==h.orig_fragment?
h.canonical.getFragment():j;}};




f.exports=h;}),null);

/** shared/core/escapeJSQuotes.js */




__d('escapeJSQuotes',[],(function a(b,c,d,e,f,g){








function h(i){
if(typeof i=='undefined'||i==null||!i.valueOf())
return '';


return i.
toString().
replace(/\\/g,'\\\\').
replace(/\n/g,'\\n').
replace(/\r/g,'\\r').
replace(/"/g,'\\x22').
replace(/'/g,'\\\'').
replace(/</g,'\\x3c').
replace(/>/g,'\\x3e').
replace(/&/g,'\\x26');}


f.exports=h;}),null);

/** js/modules/PageTransitions.js */




__d('PageTransitions',['invariant','fbt','Arbiter','Bootloader','DOMQuery','DOMScroll','Env','Event','HistoryManager','JSLogger','LayerHideOnEscape','PageHooks','PageTransitionsConfig','PageTransitionsRegistrar','React','ScriptPath','URI','Vector','areEqual','clickRefAction','escapeJSQuotes','ge','goOrReplace','isInIframe'],(function a(b,c,d,e,f,g,h,i){





























var j=['mh_','killabyte'],


k={};

function l(q,r){
k[q.getUnqualifiedURI()]=r;}


function m(q){
return k[q.getUnqualifiedURI()];}


function n(q){
delete k[q.getUnqualifiedURI()];}





function o(){
var q={};
window.location.search.slice(1).split('&').forEach(function(r){var s=
r.split('='),t=s[0],u=s[1];
if(j.some(function(v){return t.startsWith(v);}))
q[t]=u;});



return q;}










var p=

{_scroll_locked:false,
_transitions_disabled:false,

isInitialized:function q(){
return !!p._initialized;},






_init:function q(){

if(!c('Env').ALLOW_TRANSITION_IN_IFRAME&&c('isInIframe')())

return;


if(p._initialized)
return p;

var r=c('PageTransitionsRegistrar').getMostRecentURI();
p._current_uri=r;
p._most_recent_uri=r;
p._next_uri=r;



p._initialized=true;






var s,
t=c('URI').getRequestURI(false);
if(t.getFragment().startsWith('/')){

s=t.getFragment();}else 


s=r;


c('HistoryManager').init().
setCanonicalLocation('#'+s).
registerURIHandler(p._historyManagerHandler);

c('Event').listen(window,'scroll',function(){




if(!p._scroll_locked)
l
(p._current_uri,
c('Vector').getScrollPosition());});



return p;},


registerHandler:c('PageTransitionsRegistrar').registerHandler,
removeHandler:c('PageTransitionsRegistrar').removeHandler,






getCurrentURI:function q(r){
this._init();
if(!p._current_uri&&!r)







return new (c('URI'))(p._most_recent_uri);


return new (c('URI'))(p._current_uri);},


isTransitioning:function q(){
this._init();
return !p._current_uri;},





getNextURI:function q(){
this._init();
return this._next_uri;},









getMostRecentURI:function q(){
this._init();
return new (c('URI'))(p._most_recent_uri);},












go:function q(r,s){



this._init();
var t=o(),
u=new (c('URI'))(r).
removeQueryData('quickling').
addQueryData(t).
getQualifiedURI();

c('JSLogger').create('pagetransition').
debug('go',{uri:u.toString()});


n(u);











!s&&c('clickRefAction')('uri',
{href:u.toString()},
null,
'INDIRECT');







p._loadPage(u,function(v){
if(v){
c('HistoryManager').go(u.toString(),false,s);}else 

c('goOrReplace')(window.location,u,s);});},








_historyManagerHandler:function q(r){
if(r.charAt(0)!='/')
return false;

c('clickRefAction')('h',{href:r});

if(!c('ScriptPath').getClickPointInfo())
c('ScriptPath').setClickPointInfo({click:'back'});


p._loadPage(new (c('URI'))(r),function(s){
if(!s)
c('goOrReplace')(window.location,r,true);});


return true;},














_loadPage:function q(r,s){
if(new (c('URI'))(r).getFragment()&&
c('areEqual')
(new (c('URI'))(r).setFragment(null).getQualifiedURI(),
new (c('URI'))(p._current_uri).setFragment(null).getQualifiedURI())){


c('Arbiter').inform("pre_page_fragment_transition",

{from:new (c('URI'))(p._current_uri).getFragment(),
to:new (c('URI'))(r).getFragment()});

if(p.restoreScrollPosition(r)){
p._current_uri=p._most_recent_uri=r;
c('Arbiter').inform("page_fragment_transition",
{fragment:new (c('URI'))(r).getFragment()});
return;}}


var t;
if(p._current_uri)
t=m(p._current_uri);


var u=function x(){
if(t&&p._current_uri)
l
(p._current_uri,
t);



p._current_uri=null;

p._next_uri=r;
if(t)







c('DOMScroll').scrollTo(t,false);


p._scroll_locked=true;
var y=p._handleTransition(r);
if(s)
if(y===c('PageTransitionsRegistrar').DELAY_HISTORY){
setTimeout(function(){return s(y);},0);}else 

s(y);},





v=p._next_uri;
p._next_uri=r;

var w=c('PageHooks').runHooks('onbeforeleavehooks');

p._next_uri=v;

if(w){
p._warnBeforeLeaving(w,u);}else 

u();},

















_handleTransition:function q(r){
window.onbeforeleavehooks=undefined;


if(p._transitions_disabled||!r.isSameOrigin())
return false;


var s=
c('PageTransitionsConfig').reloadOnBootloadError&&this._hasBootloadErrors();
if(s)
return false;


var t,
u=b.AsyncRequest;
if(u)
t=u.getLastID();

c('Arbiter').inform("pre_page_transition",
{from:p.getMostRecentURI(),to:r});
var v=c('PageTransitionsRegistrar')._getTransitionHandlers();
for(var w=v.length-1;w>=0;--w){
var x=v[w];
if(!x)
continue;

for(var y=x.length-1;y>=0;--y){
var z=x[y](r);
if(z===true||z===c('PageTransitionsRegistrar').DELAY_HISTORY){

var aa={sender:this,uri:r,id:t};

try{c('Arbiter').inform("page_transition",aa);}catch(
ba){







}

return z;}else 



x.splice(y,1);}}




return false;},


disableTransitions:function q(){
p._transitions_disabled=true;},


_hasBootloadErrors:function q(){
return c('Bootloader').getErrorUrls().length>0;},





unifyURI:function q(){
this._init();
p._current_uri=
p._most_recent_uri=
p._next_uri;},







transitionComplete:function q(r){
this._init();
p._scroll_locked=false;
p._executeCompletionCallbacks();
p.unifyURI();

if(!r)
p.restoreScrollPosition(p._current_uri);




try{if(document.activeElement&&
document.activeElement.nodeName==='A')
document.activeElement.blur();}catch(

s){
}},


_executeCompletionCallbacks:function q(){
var r=c('PageTransitionsRegistrar')._getCompletionCallbacks();
if(r.length>0){
c('PageTransitionsRegistrar')._resetCompletionCallbacks();
r.forEach(function(s){return s();});}},



registerCompletionCallback:
c('PageTransitionsRegistrar').registerCompletionCallback,















rewriteCurrentURI:function q(r,s){
this._init();
var t=c('PageTransitionsRegistrar')._getTransitionHandlers(),

u=t.length||1,
v=false;
c('PageTransitionsRegistrar').registerHandler
(function(){
if(r==
p.getMostRecentURI().getUnqualifiedURI().toString()){
p.transitionComplete();
return true;}


v=true;},

u);

p.go(s,true);

t.length===u+1&&
t[u].length===(v?0:1)||h(0,
'New handlers were unexpectedly added.');


t.length=u;},










_warnBeforeLeaving:function q(r,s){
c('Bootloader').loadModules
(["DialogX","XUIDialogTitle.react","XUIDialogBody.react","XUIDialogButton.react","XUIDialogFooter.react","XUIGrayText.react"],








function(t,
u,
v,
w,
x,
y){

var z=new t
({width:450,
addedBehaviors:[c('LayerHideOnEscape')]},

c('React').createElement('div',null,
c('React').createElement(u,{showCloseButton:false},i._(["Leave Page?","aab5c1a8c53db826926416f87f6daee3"])),






c('React').createElement(v,null,
c('React').createElement(y,{shade:'medium',size:'medium'},
r)),


c('React').createElement(x,null,
c('React').createElement(w,{action:'cancel',label:i._(["Stay on This Page","a0c82f8c1a896eaa0447d17cbab31dd7"])}),
c('React').createElement(w,
{action:'confirm',
use:'confirm',
label:i._(["Leave This Page","fe41e6faef333b008aee2ed92cf42ef2"])}))));





z.subscribe('confirm',function(){
z.hide();
s();});


z.show();},
'PageTransitions');},








restoreScrollPosition:function q(r){
var s=m(r);
if(s){
c('DOMScroll').scrollTo(s,false);
return true;}


function t(w){


if(!w)
return null;

var x="a[name='"+c('escapeJSQuotes')(w)+"']";
return c('DOMQuery').scry(document.body,x)[0]||c('ge')(w);}


var u=t(new (c('URI'))(r).getFragment());
if(u){
var v=c('Vector').getElementPosition(u);
v.x=0;
c('DOMScroll').scrollTo(v);
return true;}

return false;}};




f.exports=p;



b.PageTransitions=p;}),null);

/** js/video/player/streaming_reactions/StreamingReactionsTrayEvents.js */




__d('StreamingReactionsTrayEvents',[],(function a(b,c,d,e,f,g){

var h='streamingReactionsTray/AddReactionAnimate',
i='streamingReactionsTray/HideChannelViewDetails',
j='streamingReactionsTray/ShowChannelViewDetails',
k='streamingReactionsTray/UpdateSurface',
l=
'streamingReactionsTray/ResizeChannelViewWindow',
m='streamingReactionsTray/ReactionStateChange',
n='streamingReactionsTray/FireworksAnimating',

o=
{AddReactionAnimate:h,
HideChannelViewDetails:i,
ReactionStateChange:m,
ResizeChannelViewWindow:l,
ShowChannelViewDetails:j,
UpdateSurface:k,
FireworksAnimating:n};


f.exports=o;}),null);
