if (self.CavalryLogger) { CavalryLogger.start_js(["WtIMo"]); }

/** __static_js_modules__/localserpsurfacerequestparam.js */




__d("LocalSERPSurfaceRequestParam",[],(function a(b,c,d,e,f,g){

f.exports={SINGLE_STATE:"sist",TYPEAHEAD:"tyah",ECHO:"ec",SERP_TO_SERP:"s2s",NEARBY_PLACES:"nepl",FEED_STORY:"fest",PLACES_TAB:"plta",NOTIFICATIONS:"noti",RECENT_SEARCHES:"rese",TODAY:"to",SHARED_LINK:"lnk"};}),

null);

/** __static_js_modules__/searchawarenesseventtypes.js */




__d("SearchAwarenessEventTypes",[],(function a(b,c,d,e,f,g){

f.exports={CLICK:"click",IMPRESSION:"impression",DISMISSAL:"dismissal",WEAK_DISMISSAL:"weak_dismissal",SYSTEM_FORCED_DISMISSAL:"system_forced_dismissal"};}),

null);

/** __static_js_modules__/searchawarenessuseraction.js */




__d("SearchAwarenessUserAction",[],(function a(b,c,d,e,f,g){

f.exports={LIKE:"like",COMMENT:"comment",ARTICLE_CLICK:"article_click",COMPOSE_PUBLISH:"compose_publish",PAGE_LIKE:"page_like"};}),

null);

/** __static_js_modules__/searchpivottype.js */




__d("SearchPivotType",[],(function a(b,c,d,e,f,g){

f.exports={PHOTO:"photo",PHOTO_EXPERIMENTAL:"photo_experimental",VIDEO:"video",FEED_SEARCH_KEYWORDS:"feed_search_keywords",SEARCH_AWARENESS_KEYWORDS:"search_awareness_keywords",ARTICLE_CLICK_ACTION:"ARTICLE_CLICK_ACTION",STORY_CLICK_ACTION:"STORY_CLICK_ACTION",STORY_LIKE_ACTION:"STORY_LIKE_ACTION",STORY_UNLIKE_ACTION:"STORY_UNLIKE_ACTION",STORY_COMMENT_DELETE_ACTION:"STORY_COMMENT_DELETE_ACTION",COMPOSER_PUBLISH_ACTION:"COMPOSER_PUBLISH_ACTION",FAN_PAGE_ACTION:"FAN_PAGE_ACTION",TRENDING_SERP_LOAD:"TRENDING_SERP_LOAD",PHOTOS_SERP_LOAD:"PHOTOS_SERP_LOAD",STORY_COMMENT_ACTION:"STORY_COMMENT_ACTION",SCROLL_ACTION:"SCROLL_ACTION",NEWS_FEED:"NEWS_FEED",PAGE:"PAGE",GROUP:"GROUP",NEWS_FEED_SECONDARY:"NEWS_FEED_SECONDARY",POST_SEARCH_SERP:"POST_SEARCH_SERP",LEARNING_NUX:"LEARNING_NUX",LEARNING_NUX_SECOND_STEP:"LEARNING_NUX_SECOND_STEP",MOBILE_STORY_LIKE_ACTION:"MOBILE_STORY_LIKE_ACTION",MOBILE_STORY_COMMENT_ACTION:"MOBILE_STORY_COMMENT_ACTION",MOBILE_COMMENT_LIKE_ACTION:"MOBILE_COMMENT_LIKE_ACTION",TIMELINE:"TIMELINE",NEXT_TRENDING:"NEXT_TRENDING",LEARNING_NUX_STANDALONE:"LEARNING_NUX_STANDALONE",TUTORIAL_NUX:"TUTORIAL_NUX",FEED_READ_ACTION:"FEED_READ_ACTION",NON_TRIGGERED_LEARNING_NUX:"NON_TRIGGERED_LEARNING_NUX",TYPEAHEAD_TOOLTIP:"TYPEAHEAD_TOOLTIP",TRIGGERED_LEARNING_NUX:"TRIGGERED_LEARNING_NUX",S19N_NUX:"S19N_NUX"};}),

null);

/** __static_js_modules__/timelinefilteroptions.js */




__d("TimelineFilterOptions",[],(function a(b,c,d,e,f,g){

f.exports={ALL:"all",REVIEW:"review",TAG_REVIEW:"tagreview",FACE_ALERTS:"facealertsreview",POSTS_AND_APPS:"postsandapps",LOCATION:"location",PHOTOS:"photos",TAGGED_PHOTOS:"taggedphotos",OWN_PHOTOS:"ownphotos",LIKES:"likes",LIKED_INTERESTS:"likedinterests",LIKED_POSTS:"likedposts",GROUPS:"groups",GROUP_MEMBERSHIP:"groupmembership",GROUP_POSTS:"groupposts",HIDDEN:"hidden",SPAM:"spam",ALL_APPS:"apps",SEARCH:"search",VIDEO_SEARCH:"videosearch",VIDEO_WATCH:"videowatch",ADS:"ads",CLUSTER:"cluster",APP:"app",STORIES:"stories",COLLECTION_ITEM:"citem",FITNESS:"fitness",OG_VIDEO:"ogvideo",SAVED_FOR_LATER:"saved",PRIVATE_NOTES:"private_notes",NOW:"now"};}),

null);

/** js/facepile/typeahead/TypeaheadFacepileX.react.js */





__d('TypeaheadFacepileX.react',['React','joinClasses'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits




(j,c('React').Component);i=h&&h.prototype;function j(){var k,l;'use strict';for(var m=arguments.length,n=Array(m),o=0;o<m;o++)n[o]=arguments[o];return l=(k=i.constructor).call.apply(k,[this].concat(n)),this.
renderPic=function(p,q){
var r='url('+this.props.photos[p]+')';

return (c('React').createElement('span',
{className:c('joinClasses')('splitpic',q),
key:p,
style:{backgroundImage:r}}));}.


bind(this),this.

renderPics=function(){
var p=this.props.size;

if(p>=3){

return [this.renderPic(0,'leftpic'),
this.renderPic(1,'toppic'),
this.renderPic(2,'bottompic')];}else 



return [this.renderPic(0,'leftpic'),
this.renderPic(1)];}.


bind(this),l;}j.prototype.

render=function(){'use strict';

return (c('React').createElement('span',babelHelpers['extends']({},
this.props,
{className:c('joinClasses')(this.props.className,"splitpics clearfix")}),
this.renderPics()));};





f.exports=j;}),null);

/** www/__virtual__/x/XSearchAwarenessController.js */



__d("XSearchAwarenessController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/search\/async\/awareness\/",{origin:{type:"String"},story_id:{type:"String"},actor_id:{type:"String"},global_share_id:{type:"String"},query:{type:"String"},dismiss:{type:"Exists",defaultValue:false},source_object_id:{type:"String"},user_action:{type:"String"}});}),

null);

/** js/search/awareness/SearchAwarenessDismissButton.js */






__d('SearchAwarenessDismissButton',['Arbiter','AsyncRequest','DOM','EventListener','XSearchAwarenessController'],(function a(b,c,d,e,f,g){







var h=


{init:function i
(j,
k,
l,
m){

var n=arguments.length<=4||arguments[4]===undefined?true:arguments[4],
o=c('EventListener').listen(k,'click',function(){
c('DOM').remove(j);
o.remove();

c('Arbiter').inform('SearchAwareness.dismissUnit');
if(n)
h.dismiss(l,m);});},




dismiss:function i(j,k){
var l=c('XSearchAwarenessController').getURIBuilder().
setString('origin',j).
setString('source_object_id',k).
setExists('dismiss',true);

new (c('AsyncRequest'))().
setURI(l.getURI()).
send();}};




f.exports=h;}),null);

/** js/search/awareness/SearchAwarenessDispatcher.js */






__d('SearchAwarenessDispatcher',['csx','cx','Arbiter','AsyncRequest','AttachmentRelatedShareConstants','Banzai','CSS','DOM','EventListener','NavigationMessage','PageLikeConstants','Run','SearchAwarenessDismissButton','SearchAwarenessEventTypes','SearchAwarenessUserAction','SearchAwarenessWebConfig','SearchPivotType','SubscriptionsHandler','UFIFeedbackTargets','UFIUIEvents','XSearchAwarenessController','getScrollPosition','joinClasses','setTimeoutAcrossTransitions','throttle'],(function a(b,c,d,e,f,g,h,i){




























var j=false,
k={},
l={},
m,

n=

{init:function o(){
if(!c('SearchAwarenessWebConfig').master_gk)
return;


if(j)
return;


m=new (c('SubscriptionsHandler'))();
m.addSubscriptions
(c('Arbiter').subscribe
(c('NavigationMessage').NAVIGATION_BEGIN,
n._cleanup.bind(this)),

c('Arbiter').subscribe
(c('PageLikeConstants').LIKED,
n._onFan.bind(this)),

c('Arbiter').subscribe
('composer/publish',
n._onComposerPublish.bind(this)),

c('Arbiter').subscribe
('LitestandComposer/publish',
n._onComposerPublish.bind(this)),

c('Arbiter').subscribe
(c('AttachmentRelatedShareConstants').ARTICLE_CLICK,
n._onArticleClick.bind(this)));



c('Run').onLeave(n._cleanup.bind(this));

j=true;},


_cleanup:function o(){
m&&m.release();
m=null;
j=false;


var p=c('DOM').scry
(document.body,
"._18az")[
0];

if(p==null)
return;


c('CSS').removeClass
(document.body,
"_18at");

c('CSS').removeClass
(document.body,
"_18au");

c('CSS').removeClass
(document.body,
"_18aw");

c('CSS').removeClass
(p,
"_18ax");},



_onFan:function o(p,q){
if(!c('SearchAwarenessWebConfig').has_on_fan)
return;

n._dispatch
(q.target,

{origin:c('SearchPivotType').FAN_PAGE_ACTION,
actor_id:q.profile_id,
user_action:c('SearchAwarenessUserAction').PAGE_LIKE});},




_onLike:function o(p,q){
if(!q.ft_id)
return;


c('UFIFeedbackTargets').getFeedbackTarget(q.ft_id,
function(r){

var s=r.entidentifier;
if(s==null||k[s]!=null)
return;


k[s]=true;

n._dispatch
(q.target,

{actor_id:r.actorid,
story_id:r.entidentifier,
origin:q.origin,
query:q.query,
user_action:c('SearchAwarenessUserAction').LIKE});});},






_onPhotoClick:function o(p,q){
if(!c('SearchAwarenessWebConfig').has_on_photo_click)
return;

n._dispatch
(q.target,

{story_id:q.storyid,
origin:c('SearchPivotType').STORY_CLICK_ACTION});},




_onArticleClick:function o(p,q){
if(!c('SearchAwarenessWebConfig').has_on_article_click)
return;


var r=q.global_share_id!=null?
String(q.global_share_id):
null;

n._dispatch
(null,

{global_share_id:r,
story_id:q.share_id,
origin:c('SearchPivotType').ARTICLE_CLICK_ACTION,
user_action:c('SearchAwarenessUserAction').ARTICLE_CLICK});},





initOnComment:function o(p,q){
if(!c('SearchAwarenessWebConfig').master_gk)
return;


if(!j)
n.init();


if(m==null)
return;


m.addSubscriptions
(c('Arbiter').subscribe
('UFI/CommentAddedActive',
function(r,s){
var t=
{origin:p,
query:q,
ft_id:s};

n._onComment(r,t);}));},





_onComment:function o(p,q){
if(!q.ft_id)
return;


c('UFIFeedbackTargets').getFeedbackTarget(q.ft_id,
function(r){

var s=r.entidentifier;
if(s==null||l[s]!=null)
return;


l[s]=true;

n._dispatch
(q.target,

{actor_id:r.actorid,
story_id:r.entidentifier,
origin:q.origin,
query:q.query,
user_action:c('SearchAwarenessUserAction').COMMENT});});},






_onComposerPublish:function o(p,q){
if(!c('SearchAwarenessWebConfig').has_on_composer_publish)
return;

n._dispatch
(null,

{story_id:q.content_id,
origin:c('SearchPivotType').COMPOSER_PUBLISH_ACTION,
user_action:c('SearchAwarenessUserAction').COMPOSE_PUBLISH});},





initOnLike:function o(p,q,r){
if(!c('SearchAwarenessWebConfig').master_gk)
return;


if(!j)
n.init();


if(m==null)
return;


m.addSubscriptions
(c('Arbiter').subscribe
(c('UFIUIEvents').ReactionButtonClicked,
function(s,t){
var u=
{ft_id:t.ft_id,
origin:p,
query:q,
target:r?null:t.target};


n._onLike(s,u);}));},






onPageLoad:function o(p,q,r){
if(!c('SearchAwarenessWebConfig').master_gk)
return;


if(!j)
n.init();


n._dispatch
(null,

{query:q,
origin:p,
actor_id:r});},





initProfileScopedSearch:function o(){
if(!c('SearchAwarenessWebConfig').master_gk)
return;


if(!j)
n.init();


if(m==null)
return;


var p=
c('DOM').scry(document.body,"._5ibl")[0];

if(p!=null){
n._dispatch
(p,

{origin:c('SearchPivotType').TIMELINE,
specified_target:true});}else 



m.addSubscriptions
(c('Arbiter').subscribe
('profileSearchBoxLoaded',
function(){
var q=
c('DOM').scry(document.body,"._5ibl")[0];

if(q==null)
return;


n._dispatch
(q,

{origin:c('SearchPivotType').TIMELINE,
specified_target:true});}));},








onPhotosSERPLoad:function o(p){
if(p==null||!c('SearchAwarenessWebConfig').master_gk)
return;

n._dispatch
(null,

{query:p,
origin:c('SearchPivotType').PHOTOS_SERP_LOAD});},




_dispatch:function o(p,q,r){
if(!q.origin)
return true;


var s=c('XSearchAwarenessController').getURIBuilder().
setString('origin',q.origin);

if(q.story_id)
s.setString('story_id',q.story_id);


if(q.actor_id)
s.setString('actor_id',q.actor_id);


if(q.global_share_id)
s.setString('global_share_id',q.global_share_id.toString());


if(q.query)
s.setString('query',q.query);


if(q.user_action)
s.setString('user_action',q.user_action);


var t=new (c('AsyncRequest'))().
setURI(s.getURI()),

u=p;

if(p!=null&&!q.specified_target)
u=this.findStory(p);



if(u==null){
var v=
c('DOM').scry(document.body,"._585-")[0],
w=
c('DOM').scry(document.body,"._5ob9")[0];
u=v!=null?v:w;}


if(u)
t.setRelativeTo(u);


if(r)
t.setHandler(r);


if(u||r)
t.send();


return true;},



showAwarenessExperienceNow:function o
(p,
q,
r){

if(!j)
n.init();


if(q==null||!j||m==null)
return;


var s=void 0;

m.addSubscriptions
(q.subscribe('cancel',function(){
s=true;
c('SearchAwarenessDismissButton').dismiss(p);}),

q.subscribe('hide',function(){
if(!s&&r){
c('Banzai').post('search_awareness',
{origin:p,
event_type:c('SearchAwarenessEventTypes').WEAK_DISMISSAL},
{signal:true});}else
if(!s&&!r)
c('Banzai').post('search_awareness',
{origin:p,
event_type:c('SearchAwarenessEventTypes').SYSTEM_FORCED_DISMISSAL},
{signal:true});}),


c('Arbiter').subscribe('SearchAwareness.weakDismissUnit',function(){
if(q!=null){
s=false;
q.hide();}}),


c('Arbiter').subscribe('SearchAwareness.dismissUnit',function(){
if(q!=null){
s=true;
q.hide();}}));




q.show();

c('Run').onLeave(function(){
q=null;});},



findStory:function o(p){
var q="^div._4-u2",
r=c('DOM').scry(p,q);

return r.length===1?r[0]:null;},



onTrendingSERPLeave:function o(p,q){
if(!j)
n.init();


if(p==null||!j)
return;


c('Run').onLeave(function(){
c('setTimeoutAcrossTransitions')(function(){
c('Run').onAfterLoad(function(){
n._dispatch
(null,

{query:p,
origin:c('SearchPivotType').TRENDING_SERP_LOAD});});},



q);});},




openBelowBluebarUnit:function o(p){
if(!j)
n.init();


var q=c('DOM').scry
(document.body,
"._18a-")[
0];

if(q==null)
return;


var r;
switch(p){
case c('SearchPivotType').TRENDING_SERP_LOAD:
r=
"_18at";
break;
case c('SearchPivotType').GROUP:
r=
"_18au";
break;
case c('SearchPivotType').PAGE:
r=
"_18aw";
break;}


if(r==null)
return;


c('CSS').addClass
(document.body,
r);

c('CSS').addClass
(q,
"_18ay");


var s=c('Arbiter').subscribe('SearchAwareness.dismissUnit',function(){
c('CSS').removeClass
(document.body,
r);});



m&&m.addSubscriptions
(s);},



trigger:function o
(p,
q,
r,
s,
t){

if(!c('SearchAwarenessWebConfig').master_gk)
return;


if(!j)
n.init();


n._dispatch
(null,

{query:q,
origin:p,
actor_id:r,
story_id:s,
global_share_id:t});},





triggerLearningNUX:function o
(p,
q,
r,
s,
t){

if(!c('SearchAwarenessWebConfig').master_gk)
return;


if(!j)
n.init();


n._dispatch
(null,

{query:q,
origin:p,
actor_id:r,
story_id:s,
global_share_id:t},

function(u){
var v=
c('DOM').create
('div',

{className:
c('joinClasses')
("_3lik",
"hidden_elem"),

'data-origin':p});



c('DOM').appendContent
(v,
u.payload);


c('DOM').appendContent
(document.body,
v);





setTimeout(function(){
c('Arbiter').inform('SearchAwareness.triggerLearningNUX',
{origin:p},
c('Arbiter').BEHAVIOR_STATE);},
0);});},





onTimelineScroll:function o
(p,
q,
r,
s){

if(!c('SearchAwarenessWebConfig').master_gk)
return;


if(!j)
n.init();


var t=false,
u=
c('EventListener').listen(document,'scroll',c('throttle')(function(event){
if(!t&&c('getScrollPosition')(window).y>q){
t=true;
n.onPageLoad(p,r,s);
u.remove();}},

500));}};




f.exports=n;}),null);

/** js/search/facebar/FacebarSemanticQuery.js */










__d('FacebarSemanticQuery',['CurrentUser','URI'],(function a(b,c,d,e,f,g){

'use strict';





var h='str',
i=/\*[\w\-]+\(/g;




function j(t){
var u={me:c('CurrentUser').getID()};
return Object.assign
(u,
Array.isArray(t.semantic_map)?
{}:
t.semantic_map);}



















function k(t,u){
var v=j(t);
if(typeof v[u]!=='undefined')
return String(v[u]);

return u;}





function l(t){
return new (c('URI'))("/profile.php").addQueryData({id:t});}





function m(t,u){
var v=[u],
w=[],
x=t.browse_functions,
y=t.search_path;
while(v.length>0){
var z=v.pop();


if(!p(z)){
w.push(z);
continue;}


var aa=z.substring(0,z.indexOf('(')),
ba=aa,
ca=q(z);

if(!x[aa]){



w=[];
break;}


var da=x[aa].minNumParams,
ea=x[aa].maxNumParams;
if(v.length>0)
if(x[aa].numParamsUnbounded){
if(w.length>0)
aa+='-'+ca.length;}else

if(ca.length!=1&&ca.length>da||
ca.length===0&&da!=ea)
aa+='-'+ca.length;



v.push(aa);
for(var fa=0;fa<ca.length;fa++){
if(ca[fa].length===0)
continue;

if(x[ba].allowsFreeText){
v.push
(h+'/'+
encodeURIComponent(encodeURIComponent(ca[fa])));}else 


v.push(ca[fa]);}}




return new (c('URI'))(y+w.join('/'));}






function n(t){
return t.replace(/['"\[\]]/g,'');}






function o(t,u){
var v=JSON.parse(u),
w=[];
if(v.length>0)
w=[v[0]];


var x=[],
y=t.browse_functions,
z=t.search_path;
while(w.length>0){
var aa=w.pop();


if(typeof aa!=='object'){
x.push(n(aa));
continue;}


var ba=Object.keys(aa)[0],
ca=ba,
da=aa[ba];

if(!y[ba]){



x=[];
break;}


var ea=y[ba].minNumParams,
fa=y[ba].maxNumParams;
if(w.length>0)
if(y[ba].numParamsUnbounded){
if(x.length>0)
ba+='-'+da.length;}else

if(da.length!=1&&da.length>ea||
da.length===0&&ea!=fa)
ba+='-'+da.length;



w.push(ba);
for(var ga=0;ga<da.length;ga++){
if(da[ga].length===0)
continue;

if(y[ca].allowsFreeText){
w.push(h+'/'+encodeURIComponent(da[ga]));}else 

w.push(da[ga]);}}



return new (c('URI'))(z+x.join('/'));}








function p(t){
return /^[a-z\-]+\(.*\)$/.test(t);}






function q(t){
if(!p(t)&&t.indexOf('param_')!==0)
return [t];

var u=
t.substring(t.indexOf('(')+1,t.length-1);
if(u.length===0)
return [];

return r(u);}








function r(t){
var u=[],
v=0,
w=0;
for(var x=0;x<t.length;++x)
if(t[x]==','&&w===0){
u.push(t.substring(v,x));
v=x+1;}else
if(t[x]=='('){
w++;}else
if(t[x]==')')
w--;


u.push(t.substring(v,t.length));
return u;}



function s(t,u,v){
this.facebarConfig=t;
this.unmapped=(u||"").trim();
this.mapped=k(t,this.unmapped);
this.position=null;
this.$FacebarSemanticQuery_isSemanticForest=
typeof v!=='undefined'?v:false;}
s.prototype.




isEntity=function(){
return /^\d+$/.test(this.mapped);};
s.prototype.




isShortcut=function(){
return this.mapped.indexOf('shortcut(')===0;};
s.prototype.




isImplemented=function(){
return this.mapped&&!this.mapped.match(i);};
s.prototype.




isSemanticForest=function(){
return this.$FacebarSemanticQuery_isSemanticForest;};
s.prototype.




getUnimplemented=function(){
return (this.mapped.match(i)||[]).map(function(t){
return t.substr(1,t.length-2);});};

s.prototype.




getURI=function(){
if(this.isEntity()){

return l(this.mapped);}else
if(this.isShortcut()){
return new (c('URI'))(this.mapped.substr(9,this.mapped.length-10));}else
if(this.isSemanticForest()){
return o(this.facebarConfig,this.unmapped);}else 



return m(this.facebarConfig,this.unmapped);};




f.exports=s;}),null);

/** js/search/facebar/FacebarURI.js */




__d('FacebarURI',['FacebarJSConstants','FacebarSemanticQuery','KeywordsSearchResultConfig','URI','WWWBase','LocalSERPSurfaceRequestParam'],(function a(b,c,d,e,f,g){

'use strict';









var h=
{event:{ref:c('FacebarJSConstants').eventLinkRef},
user:{fref:'ts'},
page:{fref:'ts'}},


i=

{getSearchRawPrefix:function j(){
return 'search';},


getSearchPath:function j(){
return '/'+this.getSearchRawPrefix()+'/';},






getURI:function j(k,l){
var m=null,
n=!l.song&&!l.isExtendedResult&&l.path;
if(n){
m=new (c('URI'))(n);
if(l.type in h)
m.addQueryData(h[l.type]);}else


if(c('KeywordsSearchResultConfig').use_seo_urls&&
l.type===c('KeywordsSearchResultConfig').result_type&&
l.semantic.startsWith('str/')){

if(l.keywordType===c('FacebarJSConstants').keywordTypes.local_category){

m=new (c('URI'))('/search/places').
addQueryData('q',l.keyword?l.keyword:l.text);}else 

m=new (c('URI'))(c('KeywordsSearchResultConfig').seo_top_url).
addQueryData('q',l.keyword?l.keyword:l.text);}else{


var o=new (c('FacebarSemanticQuery'))(k,l.semantic);
if(o&&o.isImplemented())
m=o.getURI();


if(l.keywordType===c('FacebarJSConstants').keywordTypes.local)
if(l.isSingleState){
m.addQueryData
('surface',
c('LocalSERPSurfaceRequestParam').SINGLE_STATE);}else

if(l.isRecent){
m.addQueryData
('surface',
c('LocalSERPSurfaceRequestParam').RECENT_SEARCHES);}else 


m.addQueryData
('surface',
c('LocalSERPSurfaceRequestParam').TYPEAHEAD);}




return m&&i.getQualifiedURI(m);},









getQualifiedURI:function j(k){
var l=new (c('URI'))(k);
if(!l.getDomain()){
var m=new (c('URI'))(c('WWWBase').uri);
l.setProtocol(m.getProtocol()).
setDomain(m.getDomain()).
setPort(m.getPort());}

return l;}};



f.exports=i;}),null);

/** js/search/facebar/FacebarFindPeopleAndPages.js */








__d('FacebarFindPeopleAndPages',['cx','fbt','FacebarGlobalOptions','FacebarJSConstants','FacebarStructuredText','FacebarURI','URI'],(function a(b,c,d,e,f,g,h,i){

'use strict';










var j=

{insertInto:function k
(l,
m,
n){

l=this._cleanQuery(l);
var o=this._getInsertionIndex(l,m);
if(o>-1){
var p=this._createFindPeopleAndPagesResult(l,n);
m.splice(o,0,p);}},



_getInsertionIndex:function k(l,m){
if(!l||!c('FacebarGlobalOptions').findPeopleAndPages)
return -1;


var n=m.some(this._isUserOrPageSuggestion);
if(!n)
return -1;


var o=-1;
for(var p=0;p<m.length;p++)
if(this._isEntitySuggestion(m[p]))

o=p+1;



return o;},


_isUserOrPageSuggestion:function k(l){
return l.type==='user'||l.type==='page';},


_isEntitySuggestion:function k(l){
return l.type!==c('FacebarJSConstants').keywordType&&
l.type!==c('FacebarJSConstants').grammarType;},


_cleanQuery:function k(l){
return String(l).
trim().
replace(/\s+/g,' ').
replace(/[\u200E|\u200F|\u202a|\u202b|\u202c]/g,'');},


_createFindPeopleAndPagesResult:function k(l,m){
var n='str/'+l+'/keywords_entities',
o=i._(["Find all people and pages named \"{query}\"","7716bd516b5fc1e179f7a9ac9d2c6252"],[i.param


('query',l)]);



return {type:'grammar',
results_set_type:'browse_type_blended',
text:l,
id:l,
uid:l,
query_string:l,
icon_class:"_207",
isSeeMore:true,
isPeopleAndPagesSuggestion:true,
structure:c('FacebarStructuredText').fromString(o),
semantic:n,
uri:c('FacebarURI').getQualifiedURI(new (c('URI'))('/search/'+n)),
fromCache:m,
tags:
{displayedSeeMore:true}};}};





f.exports=j;}),null);

/** js/search/facebar/FacebarKeywordSearchUtils.js */






__d('FacebarKeywordSearchUtils',['Arbiter','FacebarJSConstants','FacebarStructuredText','FacebarURI','KeywordsSearchResultConfig','LocalSERPSurfaceRequestParam','URI'],(function a(b,c,d,e,f,g){

'use strict';

























var h=function k(l){

var m=0;
while(m<l.length)
if(l[m].exactMatchKeyword){
l.splice(m,1);}else 

++m;},




i=null,

j=

{addExactMatch:function k
(l,
m,
n){




if(!m.length)
return;



var o=void 0,
p=void 0;
for(var q=0,r=m.length;q<r;q++){
p=m[q];
if(p.type==='grammar')
continue;

o=true;
break;}

if(!o)
return;



var s=
this.getExactMatchKeywordResult(l);
if(!s)
return;


var t=Math.min(m.length,n),
u=t;



for(var v=0;v<t;v++){
p=m[v];
if(p.exactMatchKeyword)

return;

if(p.cost>c('KeywordsSearchResultConfig').default_cost)
--u;

if(p.type!==c('KeywordsSearchResultConfig').result_type)
continue;

s.backendCost=p.cost+
c('KeywordsSearchResultConfig').exact_match_cost_delta_from_best;
s.cost=p.backendCost;
h(m);
m.splice(v,0,s);
return;}





h(m);

m.splice
(Math.min
(Math.min(t,n-1),
u),

0,
s);},



getExactMatchKeywordResult:function k(l){
if(!l||l.is_empty||!l.raw_text)
return null;



var m=l.raw_text.
toLowerCase().replace(/\s{2,}/g,' ').trim(),
n=c('KeywordsSearchResultConfig').query_prefix_blacklist;
for(var o=0;o<n.length;o++)
if(m.startsWith(n[o]))
return null;


var p=this.makeFacebarEntry(m);
return this._makeFacebarResult(p,l.cache_id.length);},


makeFacebarEntryForLocalPage:function k(l){
var m=l.getFragment(0).getUID(),
n=l.getFragment(0).getText(),
o=m+'/local_search',
p=c('FacebarURI').getQualifiedURI
(new (c('URI'))('/search/'+o).addQueryData
('surface',
c('LocalSERPSurfaceRequestParam').SINGLE_STATE));



return {semantic:o,
text:n,
type:c('KeywordsSearchResultConfig').result_type,
resultsSetType:c('KeywordsSearchResultConfig').result_set_type,
uid:c('KeywordsSearchResultConfig').uid_prefix+n,
iconClass:c('KeywordsSearchResultConfig').icon_class,
keywordType:c('FacebarJSConstants').keywordTypes.local,
uri:p,
structure:c('FacebarStructuredText').fromString(n)};},



makeFacebarEntry:function k(l){
var m=null,
n=null,
o=null;
if(c('KeywordsSearchResultConfig').gsv2_results_page){
if(i!=null){
o=i;}else 

o=c('KeywordsSearchResultConfig').gsv2_browse_edge;


n=
'str/'+encodeURIComponent(l).replace(/%20/g,'+')+'/'+
o;
m=c('FacebarURI').getQualifiedURI(new (c('URI'))('/search/'+n));}else{

m=c('FacebarURI').getQualifiedURI
(new (c('URI'))(c('KeywordsSearchResultConfig').results_page_url).
addQueryData('q',l));


n=
c('KeywordsSearchResultConfig').shortcut+'('+m.toString()+')';}


if(i==null&&
c('KeywordsSearchResultConfig').use_seo_urls)
m=c('FacebarURI').getQualifiedURI
(new (c('URI'))(c('KeywordsSearchResultConfig').seo_top_url).
addQueryData('q',l));




return {semantic:n,
text:l,
type:c('KeywordsSearchResultConfig').result_type,
resultsSetType:c('KeywordsSearchResultConfig').result_set_type,
uid:c('KeywordsSearchResultConfig').uid_prefix+l,
iconClass:c('KeywordsSearchResultConfig').icon_class,
uri:m,
structure:c('FacebarStructuredText').fromString(l)};},



clearSelectedTabInfo:function k(){
i=null;},


_makeFacebarResult:function k(l,m){
var n=




{semantic:l.semantic,
structure:
[{type:'grammar',
text:l.text,
uid:l.semantic}],

type:l.type,
resultsSetType:l.resultsSetType,
cost:c('KeywordsSearchResultConfig').default_cost,
cache_id_length:m,
parse:
{display:
[{type:'grammar',
uid:c('KeywordsSearchResultConfig').uid_prefix+l.text}],

remTokens:[],
suffix:''},

iconClass:l.iconClass,
exactMatchKeyword:true};

n.tuid=JSON.stringify
({semantic:n.semantic,
structure:n.structure});

return n;}};




c('Arbiter').subscribe
('FacebarTypeahead.persistentTabs',
function(k,l){
i=l.browseEdge;});



f.exports=j;}),null);

/** js/search/facebar/FacebarGSv2Echo.js */








__d('FacebarGSv2Echo',['cx','fbt','CurrentUser','FacebarGlobalOptions','FacebarJSConstants','FacebarKeywordSearchUtils','FacebarStructuredText','FacebarURI','URI'],(function a(b,c,d,e,f,g,h,i){

'use strict';












var j=
{insertInto:function k
(l,
m,
n,
o,
p,
q){

var r=j.normalizeValue(l);

if(!this._shouldInsert(l,m))
return;


var s=m.findIndex(function(w){
return w.isSpecialIntent&&this._isKeywordSuggestion(w)&&
r===
j.normalizeValue(w.text);}.
bind(this),this),

t=c('FacebarGlobalOptions').showEcho&&
(!c('FacebarGlobalOptions').renderKeywordSnippets||
s<0);

if(!t)
return;


var u=this._removeExactMatchAndReturnSubtext(l,m),

v=this._createEchoResult
(l,
n,
u,
o,
p,
q);

if(o){
if(c('FacebarGlobalOptions').singleStateClientInjections&&!p){
m.unshift
(this._createSingleStateResult(i._(["{fullName} videos","edb7c38245b1c2ed5df81cd9fdbfe2ea"],[i.param

('fullName',r)]),



{isVideos:true}));



m.unshift
(this._createSingleStateResult(i._(["{fullName} photos","3a9f0b682302864def91d3d91515b31c"],[i.param

('fullName',r)]),



{isPhotos:true}));}




if(v!=null)
m.unshift(v);}else 


if(v!=null)
if(c('FacebarGlobalOptions').hasEchoOnTop){
m.unshift(v);}else 

m.push(v);},





_shouldInsert:function k
(l,
m){

l=j.normalizeValue(l);
if(!l||!c('FacebarGlobalOptions').graphSearchV2)
return false;



for(var n=0;n<m.length;n++){
var o=m[n],
p=c('FacebarStructuredText').
fromStruct(o.structure).
toString().toLowerCase();

if((c('FacebarGlobalOptions').hasKeywordOnlyTypeahead&&
o.type!==c('FacebarJSConstants').keywordType||
o.type===c('FacebarJSConstants').keywordType)&&
l.toLowerCase()===p){

if(c('FacebarGlobalOptions').hasEchoOnTop)
m.unshift(o);

return false;}}



return true;},


_isKeywordSuggestion:function k(l){
return l.type===c('FacebarJSConstants').keywordType||
l.type===c('FacebarJSConstants').grammarType;},


_removeExactMatchAndReturnSubtext:function k
(l,
m){

var n='';
l=j.normalizeValue(l);
for(var o=0;o<m.length;o++){
var p=m[o];
if(this._isKeywordSuggestion(p)&&
l===j.normalizeValue(p.text)){

if(p.subtext)
n=p.subtext;

m.splice(o,1);
return n;}}


return n;},


normalizeValue:function k(l){
return String(l).
trim().
replace(/\s+/g,' ').
replace(/[\u200E|\u200F|\u202a|\u202b|\u202c]/g,'').
toLowerCase();},


_createEchoResult:function k
(l,
m,
n,
o,
p,
q){

var r=j.normalizeValue(l),
s=
o&&
p&&
c('FacebarGlobalOptions').showLocalPinkKwsSingleState&&

l instanceof c('FacebarStructuredText')&&
l.getFragment(0)&&
l.getFragment(0).isLocal();

if(s&&
c('FacebarGlobalOptions').singleStateAsyncLocalPlaceEcho)
return null;


var t=s?
c('FacebarKeywordSearchUtils').makeFacebarEntryForLocalPage(l):
c('FacebarKeywordSearchUtils').makeFacebarEntry(r),

u=s?
c('FacebarJSConstants').keywordTypes.local:
c('FacebarJSConstants').keywordTypes.keyword,

v={};
if(c('FacebarGlobalOptions').renderKeywordSnippets)
if(s){
v.subtext=n||i._(["See photos, posts and info about this place","b98c8bb9e8d1de4041c0bed9bd1b245f"]);




if(q!==null)
v.boldedSubtext=i._(["{categoryName}","c656634e1b5a0850a276111082c7d3c9"],
[i.param('categoryName',q)]);}else





if(o&&
c('FacebarGlobalOptions').singleStateClientInjections){

v.boldedSubtext=n||i._(["Posts","ffef65ef5db54b3efa8db52e5c85da9b"]);}else 





if(c('CurrentUser').isWorkUser()){
v.subtext=n||i._(["Search Workplace","d31eed9231111dfe958058cbca965751"]);}else 







v.subtext=n||i._(["Search Facebook","6ae19c569bb52916ccb49d16dc63e8b5"]);







return babelHelpers['extends']
({type:c('FacebarJSConstants').keywordType,
results_set_type:c('FacebarJSConstants').browseTypes.keyword,
text:l,
id:r,
uid:r,
query_string:r,
icon_class:"_5b1w",
isSingleState:o,
isLocal:s,
exactMatchKeyword:true,
structure:c('FacebarStructuredText').fromString(String(l)),
semantic:t.semantic,
uri:t.uri,
keywordType:u,
keywordSource:c('FacebarJSConstants').keywordTypes.echo,
fromCache:m,
tags:{}},
v);},



_createSingleStateResult:function k
(l,
m,



n){

l=j.normalizeValue(l);
var o=void 0,
p=c('FacebarKeywordSearchUtils').makeFacebarEntry(l),
q=void 0,
r=p.semantic,
s=p.uri,
t='keyword';

if(c('FacebarGlobalOptions').renderKeywordSnippets)
if(m.isPhotos){
t='photos';
o=i._(["Photos","decbe0c41be40804338a4c06049394d0"]);}else




if(m.isVideos){
t='videos';
o=i._(["Videos","09c8a30e695346982bf1e4cd28839abc"]);}else 





o=i._(["Posts","e50f7cdd30424972ca2743dc9566fdd2"]);







return babelHelpers['extends']
({type:c('FacebarJSConstants').keywordType,
results_set_type:c('FacebarJSConstants').browseTypes.keyword,
text:c('FacebarStructuredText').fromString(l).toString(),
id:l,
uid:l,
query_string:l,
icon_class:"_5b1w",
exactMatchKeyword:
m.isPhotos==null&&
m.isVideos==null,
structure:c('FacebarStructuredText').fromString(l),
semantic:r,
uri:s,
boldedSubtext:o,
subtext:q,
keywordSource:c('FacebarJSConstants').injectedSuggestionSource,
keywordType:t,
tags:{},
isSingleState:true},
m);}};





f.exports=j;}),null);

/** js/search/facebar/FacebarInviteCoworkers.js */








__d('FacebarInviteCoworkers',['cx','fbt','FacebarGlobalOptions','FacebarStructuredText','WorkInviteSource','XWorkInviteCoworkersDialogController'],(function a(b,c,d,e,f,g,h,i){

'use strict';









var j=
{insertInto:function k
(l,
m,
n){

l=this._cleanQuery(l);
var o=this._getInsertionIndex(l,m);
if(o>-1){
var p=this._createInviteCoworkersResult(l,n);
m.splice(o,0,p);}},



_getInsertionIndex:function k(l,m){
if(!l||!c('FacebarGlobalOptions').inviteCoworkers)
return -1;


return m.length;},


_cleanQuery:function k(l){
return String(l).
trim().
replace(/\s+/g,' ').
replace(/[\u200E|\u200F|\u202a|\u202b|\u202c]/g,'');},


_createInviteCoworkersResult:function k(l,m){
var n=i._(["Invite \"{query}\" to Workplace","8d62e9d38c0de954d8339a389c2bb076"],[i.param

('query',l)]),




o=c('XWorkInviteCoworkersDialogController').
getURIBuilder().
setEnum('source',c('WorkInviteSource').SEARCH_TYPEAHEAD).
getURI();


return {uid:l,
icon_class:"_5yiv",
isAsync:true,
structure:c('FacebarStructuredText').fromString(n),
asyncURI:o,
fromCache:m};}};




f.exports=j;}),null);

/** js/search/facebar/FacebarNoFlickerResults.js */








__d('FacebarNoFlickerResults',['cx','fbt','CurrentUser','FacebarGSv2Echo','FacebarGlobalOptions','FacebarJSConstants','FacebarKeywordSearchUtils','FacebarStructuredText'],(function a(b,c,d,e,f,g,h,i){

'use strict';











var j=[],
k={},
l=void 0,

m=

{insertInto:function n
(o,
p,
q,
r){
var s;


p.forEach(function(da){
da.isInvalidated=false;});


o=c('FacebarGSv2Echo').normalizeValue(o);

var t=o.length===0,

u=p.filter(function(da){
return da.type===c('FacebarJSConstants').keywordType&&
!da.exactMatchKeyword;}),

v=u.filter(function(da){
return !da.exactMatchKeyword;}),

w=u.length;



if(v.length>1)
if(t){
j=[];}else 

j=v.slice(0,2);






if(k[o]||

q===true&&r===false||
w>=
c('FacebarGlobalOptions').default_num_top_results_to_show){

k[o]=true;
if(t){
j=[];}else 

j=v.slice(0,2);

return;}


if(r===false)
return;
var x=function da

(ea){

if(!p.some(function(fa){return fa.text===ea.text;})){
ea.isInvalidated=true;
p.push(ea);}};
for(var y=j,z=Array.isArray(y),aa=0,y=z?y:y[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var ba;if(z){if(aa>=y.length)break;ba=y[aa++];}else{aa=y.next();if(aa.done)break;ba=aa.value;}var ca=ba;x(ca);}


if(o.length<2||l==null)
l=p.filter(function(da){
return da.type!=='keyword';})[
0];


if(l==null)
return;


p.push
(this._createResult(i._(["{fullName} photos","a326a1c9e08fdedcc09ff6b7764af68a"],[i.param

('fullName',
l.text.toLowerCase())])));






p.push
(this._createResult(i._(["{fullName} posts","64effa9382fdcf10457e29ad3cdf91b3"],[i.param

('fullName',
l.text.toLowerCase())])));},







_createResult:function n
(o){

o=c('FacebarGSv2Echo').normalizeValue(o);
var p=
c('FacebarKeywordSearchUtils').makeFacebarEntry(o),

q=void 0;
if(c('FacebarGlobalOptions').renderKeywordSnippets)
if(c('CurrentUser').isWorkUser()){
q=i._(["Search Workplace","d31eed9231111dfe958058cbca965751"]);}else 






q=i._(["Search Facebook","6ae19c569bb52916ccb49d16dc63e8b5"]);








return {type:c('FacebarJSConstants').keywordType,
results_set_type:c('FacebarJSConstants').browseTypes.keyword,
text:o,
id:o,
uid:o,
query_string:o,
icon_class:"_5b1w",
exactMatchKeyword:true,
structure:c('FacebarStructuredText').fromString(String(o)),
semantic:p.semantic,
uri:p.uri,
subtext:q,
isInvalidated:true,
tags:{}};}};





f.exports=m;}),null);

/** js/search/facebar/FacebarResultStore.js */





__d('FacebarResultStore',['cx','fbt','Arbiter','FacebarGlobalOptions','FacebarJSConstants','FacebarKeywordSearchUtils','FacebarResultStoreUtils','FacebarStructuredText','KeywordsSearchResultConfig','SearchI18nMatch','SearchPivotType','TokenizeUtil','concatMap'],(function a(b,c,d,e,f,g,h,i){

'use strict';
















var j=3;




























function k(o,p,q,r){
this.facebarConfig=o;

this.facebarConfig.grammar_stop_words_penalty=
this.facebarConfig.grammar_stop_words_penalty||2;
this.facebarConfig.grammar_stop_words=
this.facebarConfig.grammar_stop_words||{};
this.facebarConfig.options=r;
this.injectedSuggestionCount=0;
this.tokenize=p;
this.getEntry=q;

this.typeaheadTypeMap=this.facebarConfig.mapped_types;
this.facebarConfig.typeahead_types.forEach(function(s){
this.typeaheadTypeMap[s]=s;},
this);

this.unicodeMatch=new (c('SearchI18nMatch'))
({prefix_hangul_conjoining_jamo:true});


this.resetCaches();}
k.prototype.



















transformStructured=function(o){
var p=[],q=[],r='',s='';

o.forEach(function(x,y){
if(x.isType('text')){
r+=x.getText();
s=s==null?null:s+x.getText();}else{

var z=r.match(/\"/g);
if(z&&z.length%2)
r=r.replace(/\s+$/,'')+'"';

if(r.length){
Array.prototype.push.apply(p,this.tokenize(r));
q.push(r);
r='';}


p.push(x.toStruct());
q.push
({uid:String(x.getUID()),
type:this._getFBObjectType(x.getTypePart(1)),
text:x.getText()});

s=null;}},

this);

var t=false,
u=r;
if(r.length){


if(r[r.length-1]=='\'')
r=r.substr(0,r.length-1);


if(r.length>0&&r[0]==='#'){
Array.prototype.push.call(p,r);}else
if(r.length>0&&r[0]==='@'){


t=true;
u=this._convertToAliasKey(r.substring(1));
Array.prototype.push.call(p,u);}else{

u=this._convertToAliasKey(r);
Array.prototype.push.apply(p,this.tokenize(r));}

q.push(r);
if(r[r.length-1]==' ')
p.push('');}



var v=JSON.stringify(q),
w=v.replace(/\]$/,'').replace(/\"$/,'');


w=w.replace(/\s{2,}/g,' ');


return {tokens:p,
text_form:v,
is_empty:!!v.match(/^\[(\"\s*\")?\]$/),
raw_text:s,
cache_id:w,
is_alias_search:t,
potential_alias_term:u};};

k.prototype.





resetCaches=function(){
this.resetBootstrapCache();
this.resetQueryCache();};
k.prototype.

resetBootstrapCache=function(){
this.bootstrapCache={};};
k.prototype.

resetQueryCache=function(){
this.queryCache={'':{tokens:[],results:[]}};};
k.prototype.




setNullState=function(o){
this.facebarConfig.null_state=
o.map(this._extractStructure,this);};
k.prototype.




addEntryToNullState=function(o){
if(this.facebarConfig.null_state){
var p=this.facebarConfig.entity_cost+
o.grammar_costs['{'+o.type+'}'],

q=c('FacebarResultStoreUtils').processEntityResult
(o.type,
o.uid,
o.text,
p);


this.facebarConfig.null_state.unshift(q);}};

k.prototype.






addRecentEntryToNullState=function(o){

if(!this.facebarConfig.null_state||
c('FacebarGlobalOptions').hasKeywordOnlyTypeahead)
return;



this.removeDuplicateInNullstateIfAvailable(o);

var p=babelHelpers['extends']({},
o,
{isRecent:true,
isNullState:true,
type:c('FacebarJSConstants').keywordType,


structure:c('FacebarStructuredText').fromString(o.text.toString()),

tuid:JSON.stringify
({semantic:o.semantic,
structure:o.structure}),

keyword_type:o.keywordType});

if(o.icon_class)
p.iconClass=o.icon_class;


if(o.keywordBootstrapType===
c('FacebarJSConstants').keywordBootstrapTypes.recent){
p.iconClass="_5b1w";
delete p.keywordBootstrapType;}

if(o.results_set_type)
p.resultsSetType=o.results_set_type;

p.isInjectedSuggestion=false;

this.insertEntryIntoRightPosition(p,true);};
k.prototype.






addSuggestionEntryToNullState=function(o,p){
if(!this.facebarConfig.null_state||
this.injectedSuggestionCount===j)
return;


var q=this.removeDuplicateInNullstateIfAvailable(o);

switch(p){
case c('SearchPivotType').STORY_LIKE_ACTION:
this.category=i._(["Based on posts you liked","d2e6c35a7bdaa3b535331e03ed9dc8eb"]);

break;
case c('SearchPivotType').STORY_COMMENT_ACTION:
this.category=i._(["Based on posts you commented on","5d72840322ebd3c32fa35c059fedd0fb"]);

break;

default:this.category=i._(["Based on posts you interacted with","3f43906dad25571d3b3cb267aa49f95c"]);}






var r=babelHelpers['extends']({},
o,
{isRecent:false,
isSuggestion:true,
isTrending:false,
isNullState:true,
type:c('FacebarJSConstants').keywordType,
structure:[{text:o.text,type:'keyword'}],
tuid:JSON.stringify
({semantic:o.semantic,
structure:o.text}),

isInjectedSuggestion:true,
category:this.category});


if(!c('FacebarGlobalOptions').hasRecentOnTopNullState)
r.null_state_position='top';


this.insertEntryIntoRightPosition
(r,
false);


if(!q){
c('Arbiter').inform('FacebarTypeahead.injectedSuggestion');
++this.injectedSuggestionCount;}};

k.prototype.





removeDuplicateInNullstateIfAvailable=function(o){
var p,
q=false;

if(o.isInjectedSuggestion){
p=o.semantic;}else 

p=decodeURIComponent(o.semantic);


for(var r=0;r<this.facebarConfig.null_state.length;r++){
var s=this.facebarConfig.null_state[r];
if(s.semantic===p){
this.facebarConfig.null_state.splice(r,1);
q=true;
break;}}



return q;};
k.prototype.




clearRecentSearches=function(){
if(!this.facebarConfig.null_state)
return;


this.facebarConfig.null_state=this.facebarConfig.null_state.filter
(function(o){return !o.isRecent;});};

k.prototype.





insertEntryIntoRightPosition=function(o,p){
var q=p?
this.facebarConfig.null_state.findIndex(function(s){return s.isRecent;}):
this.facebarConfig.null_state.findIndex(function(s){return s.isSuggestion;}),

r=p?
c('FacebarGlobalOptions').hasRecentOnTopNullState:
!c('FacebarGlobalOptions').hasRecentOnTopNullState;

if(q<0){
if(r){
this.facebarConfig.null_state.unshift(o);}else{

if(this.facebarConfig.null_state.length>=
c('FacebarGlobalOptions').maxResultCount)
this.facebarConfig.null_state.shift();

this.facebarConfig.null_state.push(o);}

return;}

this.facebarConfig.null_state.splice(q,0,o);};
k.prototype.








setSortFunction=function(o){
this._sortFunction=o;};
k.prototype.





addBootstrap=function(o){
var p=this.bootstrapCache;

o.forEach(function(q){
var r=this.getEntry(q);
r.bootstrapped=true;
var s=this.tokenize(r.textToIndex,true);
if(r.tokens)
Array.prototype.push.apply(s,r.tokens.split(' '));

Array.prototype.push.apply(s,this.getExtraTokensToIndex(r));

s.forEach(function(t){
if(!Object.prototype.hasOwnProperty.call(p,t))
p[t]={};

p[t][q]=true;});},

this);};
k.prototype.

_convertToAliasKey=function(o){
return o.replace(/\./g,'').toLowerCase();};
k.prototype.





getExtraTokensToIndex=function(o){
var p=[];

if(o.alias!=null){
var q=this._convertToAliasKey(o.alias);
if(q.length>0)
p.push(q);}


return p;};
k.prototype.







addNullStateToQueryCache=function(o,p){
this.saveResults(this.facebarConfig.null_state,o,
true);
if(c('FacebarGlobalOptions').includeInitialTypeNamedX)
this.saveResults(p,o,true);};

k.prototype.





extendResult=function(o,p){

var q=o.cache_id.substr(p.cache_id_length);



if((q.indexOf("\"")>=0||p.tokens.length===0)&&
!p.isTypeNamedXBootstrap)
return null;

var r;


if(!!p.isTypeNamedXBootstrap){

if(o.raw_text!==null){
r=p.ext_text+q;}else

if(o.tokens.length!==0&&
o.tokens[0].text){
r=o.tokens[0].text;}else 

return null;}else



if(p.tokens[p.tokens.length-1].length!==0){
r=p.ext_text+q;}else 

r=p.ext_text+" "+q;


if(r.length===0)
return null;

p.ext_node.text=r;
p.parse.entTokens=[r];
p.parse.suffix="";
this._extractStructure(p);


if(!this._punctRegexp)
this._punctRegexp=new RegExp(c('TokenizeUtil').getPunctuation(),'g');

p.semantic=p.ext_semantic.replace
('(ext_string)',
'('+r.replace(this._punctRegexp,"")+')');
p.isExtendedResult=true;

return p;};
k.prototype.











getResults=function(o,p){

if(o.tokens.length===0||
o.tokens.length==1&&o.tokens[0]==='')

return {results:this.facebarConfig.null_state||[],
null_state:true};



var q=this._getBestQueryCache(o.cache_id),

r=q.results.filter(function(da){return !da.isRecent;}),
s={},



t=
this._getBootstrapMatchByType(o,s),


u=this._addMatchingBootstrapResults
(o,
t[0]||{},
s);

if(c('FacebarGlobalOptions').limitBootstrapResult)
u=u.slice(0,c('FacebarGlobalOptions').limitBootstrapResultNum);

var v=[],
w=[],
x=void 0;
if(c('FacebarGlobalOptions').matchTrailingWhitespace){
x=o.tokens.map
(function(da){return da.text!=null?da.text:da;}).
join(' ').toLowerCase();}else{

var y=o.tokens[0];
x=(y.text!=null?y.text:y).
toLowerCase();}

if(c('FacebarGlobalOptions').hasKeywordBootstrap){
v=u.filter(function(da){
return da.type===c('FacebarJSConstants').keywordType&&
this.unicodeMatch.prefixMatch
(da.structure[0].text.toLowerCase(),
x);}.

bind(this));
v.sort(this._sortFunction(o.raw_text));
w=u.filter(function(da){
return da.type!==c('FacebarJSConstants').keywordType&&
this.unicodeMatch.prefixMatch
(da.structure[0].text.toLowerCase(),
x);}.

bind(this));
w.sort(this._sortFunction(o.raw_text));



u=w.concat(v);}





Array.prototype.push.apply
(u,
c('concatMap')
(this._getResultsFromCache.bind
(this,
t,
o),

r));



if(!c('FacebarGlobalOptions').hasKeywordBootstrap){
u.sort(this._sortFunction(o.raw_text));
if(!c('FacebarGlobalOptions').graphSearchV2&&
c('FacebarGlobalOptions').keywordSearchEnabled)
c('FacebarKeywordSearchUtils').addExactMatch(o,
u,
p);}



var z={},
aa=[],
ba=false,
ca=0;
u.forEach(function(da){
var ea=c('FacebarStructuredText').fromStruct(da.structure);
if(ea.hasType('blank')){
aa.push(da);
return;}

da.semantic=da.semantic.toLowerCase();

if(!da.termMatches)
da.termMatches=s[da.semantic];

var fa=n(da,da.semantic),
ga=n(da,da.alternateSemantic);

if(!fa)
return;


var ha=z[fa]||
ga!=null&&z[ga];

if(ha){


if(da.isJSBootstrapMatch){
ha.isJSBootstrapMatch=true;
ha.bootstrapCost=da.bootstrapCost;}else
if(ha.isJSBootstrapMatch&&
da.backendCost!==undefined&&
ha.backendCost===undefined)
ha.backendCost=da.backendCost;

if(da.tags!=null)
Object.assign(ha.tags||{},da.tags);



if(c('FacebarGlobalOptions').dedupeLocalResults&&
l(da)&&
ha.keyword_type==='keyword')

Object.assign(ha,da);

return;}

if(ba&&da.blankFilled)
return;

if(da.type.indexOf('browse_type')>=0){
ca+=1;
if(this.facebarConfig.maxGrammarResults!==undefined&&
ca>this.facebarConfig.maxGrammarResults)
return;}


ba=ba||!!da.blankFilled;
z[fa]=da;
if(ga)
z[ga]=da;

aa.push(da);},
this);


return {results:aa};};

k.prototype.












saveResults=function(o,p,q,r,s){
o=o.map(this._processBackendResult,this);
var t=[],

u={},

v={};
o.forEach(function(x){
v[x.semantic]=true;});

var w=this._getBestQueryCache(p.cache_id);
w.results.forEach(function(x){


if(x.type==='websuggestion')
return;

if(x.exactMatchKeyword)
return;

if(x.isExtendedResult)
return;



if(x.semantic in u)
return;


var y=
this._getDifferenceArrayTokens(x.tokens,p.tokens),

z=this._getNumTokensMatching(y,x);
z=this._tryMatchingFinalInsertedEntity(y,z,x);
if(z>0&&z==y.length||
(x.type==="shortcut"&&
x.termMatches.indexOf
(p.tokens[p.tokens.length-1]))>=0){
x.cacheOnlyResult=!v[x.semantic];
t.push(x);}},

this);

if(c('FacebarGlobalOptions').limitCacheResult)
t=
t.slice(0,c('FacebarGlobalOptions').limitCacheResultNum);



o.forEach(function(x){
x.tokens=p.tokens;
x.cache_id_length=p.cache_id.length;

if(!!x.isTypeNamedXBootstrap)
++x.cache_id_length;

t.push(x);},
this);

if(s)
Array.prototype.push.apply(t,s);


if(this.queryCache[p.cache_id]===undefined)
this.queryCache[p.cache_id]={};

Object.assign
(this.queryCache[p.cache_id],

{tokens:p.tokens,
results:t,
incomplete:q},

r);};

k.prototype.






alreadyKnown=function(o){
return !!this.queryCache[o]&&
!this.queryCache[o].incomplete;};
k.prototype.





stripBrackets=function(o){
return o.replace(/^[\[\{]/,'').replace(/[\]\}]$/,'');};
k.prototype.












_extractStructure=function(o){

function p(s,t,u,v,w){


return {type:s==='ent:extend_string'?'text':s,
text:t,
uid:u||null,
isLocal:v?v:false,
categoryName:w?w:null};}



function q(s,t){
s.split(' ').forEach(function(u){
if(u!==''){
if(t)
o.chunks.push(o.structure.length);

o.structure.push(p('text',u));}

o.structure.push(p('text',' '));});

o.structure.pop();}


function r(s){

if(o.structure.length!==0||
c('FacebarJSConstants').nonGrammarTypes[o.type])
return s;

return s.charAt(0).toUpperCase()+s.substr(1);}


o.structure=[];
o.chunks=[];
o.parse.display.forEach(function(s){
if(typeof s==='string'){

q(r(s),true);}else
if(s.type==='ent:extend_string'){
q(s.text,true);}else
if(s.uid){

var t=this.getEntry(s.uid,s.fetchType);

o.chunks.push(o.structure.length);



if(t==null)
throw new Error
('No entry found for uid \"'+s.uid+'\", type \"'+
s.fetchType+'\" and piece text \"'+s.text+'\"');



if(t.grammar_like){
q(r(t.text),false);}else{


var u=s.type;
if(s.fetchType)
u+=':'+s.fetchType;


o.structure.push(p
(u,
t.text,
s.uid,
o.isLocal,
o.categoryName));}}else


if(s.type=='blank'){

o.chunks.push(o.structure.length);
o.structure.push(p(s.type,'...'));}},

this);

return o;};
k.prototype.





_getDifferenceArrayTokens=function(o,p){
if(!o.length)
return [''].concat(p);


var q=o.length-1,
r=o[q];
if(r==='')
r=o[--q];


var s='';
if(typeof r=='string'&&
q<p.length)
s=p[q].substr(r.length);


if(!c('FacebarGlobalOptions').matchTrailingWhitespace)

if(s===''&&q+1<p.length&&
p[q+1]==='')
return [''];



return [s].concat(p.slice(q+1));};
k.prototype.




_processBackendResult=function(o){


if(o.isTypeNamedXBootstrap&&o.cache_id_length)
return o;


if(o.semantic==null)
throw new Error('Facebar can\'t process empty semantic '+JSON.stringify(o));


o.semantic=o.semantic.toString();


o.backendCost=o.cost;

this._extractStructure(o);




if(o.type.match(/^\{.*\}$/))
o.useExtendedIndex=true;


if(o.alternateSemantic)
o.alternateSemantic=
o.alternateSemantic.toLowerCase().replace(/\[(\d*)\]/g,'$1');



if(o.parse.extendable){
var p=null;
o.parse.display.forEach(function(v){
if(v.type!=="ent:extend_string")return;
p=v;},
this);

if(!p||o.semantic.match(/\[.*\]/).length!==1){
o.parse.extendable=false;}else{

o.ext_node=p;
o.ext_semantic=
o.semantic.replace(/\[(.*)\]/g,'ext_string');
o.ext_text=p.text;}}





if(o.semantic.match(/\[\d*\]/)){
var q=o.parse,

r=q.pos;
if(r===undefined){
o.semantic=o.semantic.replace(/\[(\d*)\]/g,'$1');}else{

var s=q.remTokens[q.remTokens.length-1];
if(q.remTokens.length&&
o.structure[o.chunks[s]]&&
o.structure[o.chunks[s]].uid){
r=q.remTokens[q.remTokens.length-1];
o.completed=true;}

var t=o.structure[o.chunks[r]].uid;
if(t===null){
o.semantic=o.semantic.replace(/\[(\d*)\]/g,'$1');}else{

var u=new RegExp('\\['+t+'\\]','g');

o.unsubstituted_semantic=o.semantic;
o.semantic=o.semantic.replace(u,t);

if(q&&q.disambiguation&&
q.disambiguation.length>0){
q.disambiguation=q.disambiguation.filter(function(v){
return v.indexOf('['+t+']')!==-1;});

q.unsubstituted_disambiguation=q.disambiguation.splice(0);

q.disambiguation=q.disambiguation.map(function(v){
return v.replace(u,t);});}}}}






o.semantic=o.semantic.replace(/\[(.*)\]/g,'$1');
o.tuid=JSON.stringify
({semantic:o.semantic,
structure:o.structure});

return o;};
k.prototype.

_sortFunction=function(o){
return function(p,q){
return (p.cost||0)-(q.cost||0);};};

k.prototype.





_getResultsFromCache=function(o,p,q){
var r=p.tokens,


s=
this._getDifferenceArrayTokens(q.tokens,r),
t=[],

u=this._getNumTokensMatching(s,q),
v=
this._tryMatchingFinalInsertedEntity(s,u,q);


if(q.parse.extendable||q.isExtendedResult){
var w=this.extendResult(p,q);
if(w)
t.push(w);

if(q.isExtendedResult)
return t;}



if(v>0&&
v==s.length&&
!(q.type===c('KeywordsSearchResultConfig').result_type&&
s.length===1&&s[0]==='"'))
t.push(q);


if(q.type==="shortcut"&&
q.termMatches.indexOf(p.tokens[r-1])>=0)
t.push(q);


return t;};
k.prototype.




_addMatchingBootstrapResults=
function(o,
p,
q){
var r=o.tokens;
return c('concatMap')
(function(s){
var t=p[s];
if(t===undefined)
return [];

var u=[],
v=
c('FacebarResultStoreUtils').getQueryFeatures(o);
t.forEach(function(w){
var x=this.getEntry(w,s);
if(o.is_alias_search){
if(!this._isAliasMatch(o,x,false))
return;}else

if(!this._isTitleTermMatch(r,x)&&
!this._isAliasMatch(o,x,false))
return;

var y=this._isExactNameMatch(r,x)||
this._isAliasMatch(o,x,true),
z=y?
0:
this.facebarConfig.non_title_term_match_penalty,
aa=this._isNonGrammarTermMatch(r,x),
ba=x.grammar_costs?
x.grammar_costs['{'+s+'}']:
0,
ca=s===c('FacebarJSConstants').keywordType?
x.cost:
0,
da=ca+
ba+
z+
this.facebarConfig.entity_cost+
this.facebarConfig.grammar_stop_words_penalty*!aa,

ea=c('FacebarResultStoreUtils').processEntityResult
(s,
w,
x.text,
da,
o,
v,
q,
y,
!aa);

ea.bootstrapCost=da;
ea.isJSBootstrapMatch=true;


if(s===c('FacebarJSConstants').keywordType){
ea.iconClass=x.iconClass;
ea.keywordBootstrapType=
x.keywordBootstrapType;
ea.parse=x.parse;
ea.subtext=x.subtext;
ea.boldedSubtext=x.boldedSubtext;
ea.semantic=x.semantic;
ea.popularSearchScore=x.popularSearchScore;
ea.trendingTopicID=x.trendingTopicID;
ea.photo=x.photo;
ea.keyword_type=x.keyword_type;
ea.keywordSource=x.keywordSource;}

u.push(ea);},
this);
return u;}.
bind(this),
this.facebarConfig.bootstrap_types);};

k.prototype.





_isTitleTermMatch=function(o,p){
var q=o[0]||{};
if(typeof q=='object')
return false;

var r=p.titleToIndex;

return o.length===1?
this._isTokenizePrefixMatch(q,r):
c('TokenizeUtil').isExactMatch(q,r);};
k.prototype.






_isExactNameMatch=function(o,p){
var q=o[0]||{};
if(typeof q=='object')
return false;

var r=p.text;


for(var s=0;s<o.length-1;++s)
if(o[s]!==''&&
!c('TokenizeUtil').isExactMatch(o[s],r))
return false;


return o.length>0&&
this._isTokenizePrefixMatch(o[o.length-1],r);};
k.prototype.




_isAliasMatch=function(o,p,q){
if(p.alias==null||
o.potential_alias_term==null)
return false;

var r=this._convertToAliasKey(p.alias);
if(q||!o.is_alias_search){
return c('TokenizeUtil').isExactMatch
(o.potential_alias_term,
r);}else 

return c('TokenizeUtil').isPrefixMatch
(o.potential_alias_term,
r);};

k.prototype.






_isNonGrammarTermMatch=function(o,p){
var q=c('TokenizeUtil').parse(p.titleToIndex.toLowerCase()),
r=q.tokens.filter(function(u){
return u!==''&&!this.facebarConfig.grammar_stop_words[u];},
this);

r=r.join(' ');
for(var s=0;s<o.length;++s){
if(typeof o[s]=='object')
return true;

var t=s===o.length-1?
this._isTokenizePrefixMatch(o[s],r):
c('TokenizeUtil').isQueryMatch(o[s],r);
if(t)return true;}

return false;};
k.prototype.








_getBootstrapMatchByType=function(o,p){
var q=o.tokens.slice();
if(q.length===0)
return [];


var r=q.map(function(){
return {};}),


s=q[q.length-1]==='',

t={},
u,



v=s?q.length-1:q.length,
w=q[v-1];


if(v&&w.uid){
this._pushBootstrapEntryAtPosition
(r,
v-1,
w.uid,
o.is_alias_search);
return r;}



for(var x in this.bootstrapCache)
if(v&&this.unicodeMatch.prefixMatch(x,w)&&
(!s||x===w))
for(u in this.bootstrapCache[x]){



this._addMatchedTerm(u,x,p);
if(!t[u]){
t[u]=1;
this._pushBootstrapEntryAtPosition
(r,
v-1,
u,
o.is_alias_search);}}






for(var y=v-2;y>=0;y--){
if(typeof q[y]=='object')
break;

if(q[y].length&&q[y][0]=='"')
break;


for(u in this.bootstrapCache[q[y]]){
if(!t[u])
t[u]=0;


if(t[u]+y==v-1){
++t[u];
this._addMatchedTerm(u,q[y],p);
this._pushBootstrapEntryAtPosition
(r,
y,
u,
o.is_alias_search);}}}




if(!o.is_alias_search&&o.potential_alias_term)

for(u in this.bootstrapCache[o.potential_alias_term]){



this._addMatchedTerm
(u,
o.potential_alias_term,
p);
if(!t[u]){
t[u]=1;
this._pushBootstrapEntryAtPosition
(r,
0,
u,
o.is_alias_search);}}




return r;};
k.prototype.

_addMatchedTerm=function(o,p,q){
(q[o]=q[o]||[]).push(p);
return q;};
k.prototype.





_pushBootstrapEntryAtPosition=
function(o,
p,
q,
r){
var s=this.getEntry(q);
if(!s)
return;


var t=[];

if(s.grammar_costs){
t=Object.keys(s.grammar_costs).map(function(w){
return this.stripBrackets(w);},
this);}else 


t=[s.type];


for(var u=0;u<t.length;u++){
var v=t[u];
if(r&&
v!=='user'&&
v!=='page')
continue;

if(o[p][v]===undefined)
o[p][v]=[];

o[p][v].push(q);}};

k.prototype.





_getNumTokensMatching=function(o,p){

var q=0,
r=p.parse,
s=o.length,

t=null,
u=null;


if(r.pos!==undefined){
var v=p.structure[p.chunks[r.pos]];
if(v){
t=v.uid;
u=v.type.split(':')[2];}}



p.outputTokensUsed=[];
p.termMatches=[];

if(t){

q=this._prefixMatchEntity
(o,r,t,
p.outputTokensUsed,u,
!!p.useExtendedIndex,
p.termMatches);

if(q===0||q===s)
return q;}else

if(r.suffix&&s==1&&
r.suffix.indexOf(o[0])===0){
return s;}else
if(r.suffix==o[0]){
++q;}else 

return 0;



var w=[];
r.remTokens=r.remTokens||[];
for(var x=0;x<r.remTokens.length;x++){
if(typeof o[q]!='string'||
p.chunks.length<=r.remTokens[x]||
p.structure.length<=p.chunks[r.remTokens[x]]||
p.structure[p.chunks[r.remTokens[x]]].uid)
break;


var y=p.structure[p.chunks[r.remTokens[x]]].text;
w.push(y.toLowerCase());}




q=this._greedyMatchText
(w,
o,
q,
r.remTokens,
p.outputTokensUsed,
p.isNullState);

if(q==s-1&&o[q]==='')
return s;


return q;};
k.prototype.

















_prefixMatchEntity=
function(o,
p,
q,
r,
s,
t,
u){

p.entTokens=p.entTokens||[];
if(p.entTokens.length===0){
if(o[0]!=='')
return 0;

if(p.possessive&&o.length>1&&
o[1]=='\'s'){
r.push([p.pos+1]);

return 2;}else 


return 1;}




var v=false,

w=this.getEntry(q,s);
if(typeof s!=='undefined'&&s!==w.fetchType)
return 0;


var x=this.tokenize
(t?w.textToIndex:w.text,
true),



y=[];
for(var z=0;z<o.length+p.entTokens.length-1;z++)
if(z<p.entTokens.length-1){
y.push(p.entTokens[z]);}else
if(z==p.entTokens.length-1){
y.push(p.entTokens[z]+o[0]);}else 

y.push(o[z-p.entTokens.length+1]);


var aa=-p.entTokens.length+1;

for(var ba=0;ba<y.length;++ba){
var ca=y[ba];
if(typeof ca!='string')
break;


if(ca===''){
aa++;
continue;}




var da=false;
for(var ea=0;ea<x.length;ea++)
if(x[ea]==ca||
ba===y.length-1&&x[ea].indexOf(ca)===0){
if(u)
u.push(x[ea]);

x[ea]='';
da=true;
++aa;
break;}


if(da)
continue;


if(!p.possessive||ca.length<=2||
ca.substr(ca.length-2)!='\'s')
break;

var fa=ca.substr(0,ca.length-2);
for(ea=0;ea<x.length;ea++)
if(x[ea]==fa){
++aa;

if(r)
v=true;

break;}


break;}


if(aa>0){
if(v)
r.push([p.pos+1]);

return aa;}


if(r===undefined)
return 0;


var ga=o[0],
ha=ga;
if(p.possessive&&ga.length>=2&&
ga.substr(ga.length-2)=='\'s')
ha=ga.substr(0,ga.length-2);


p.suffix=p.suffix||'';
if(o.length==1&&p.suffix.indexOf(ga)===0||
p.suffix==ha||p.suffix==ga){
if(ha!=ga&&
p.suffix==ha)
r.push([p.pos+1]);

return 1;}

return 0;};
k.prototype.





_tryMatchingFinalInsertedEntity=function(o,p,q){
if(!q.completed||p<0)
return p;

var r=q.parse,
s=r.remTokens[r.remTokens.length-1],
t=q.structure[q.chunks[s]],
u=this.getEntry(t.uid,t.type),
v=this.tokenize(u.text,true);
p=this._greedyMatchText(v,o,p);

if(p==o.length-1&&o[p]==='')
return o.length;


return p;};
k.prototype.






_greedyMatchText=function(o,p,q,
r,s,t){
for(var u=0;u<o.length;u++){
var v=o[u];
if(v==p[q]){
if(s!==undefined)
s.push(r[u]);

++q;
continue;}


if(q===p.length-1&&
v.indexOf(p[q])===0){
if(s!==undefined)
if(v==p[q]){
s.push([r[u]]);}else 

s.push
([r[u],p[q].length]);


return p.length;}




if(t)
break;}



return q;};
k.prototype.




_getBestQueryCache=function(o){
for(var p=o.length;p>=0;p--){
var q=this.queryCache[o.slice(0,p)];
if(q)
return q;}};


k.prototype.

_getFBObjectType=function(o){
if(this.typeaheadTypeMap[o]){
return this.typeaheadTypeMap[o];}else 

return 'page';};

k.prototype.

_isTokenizePrefixMatch=function(o,p){
return c('TokenizeUtil').isPrefixMatch
(this.unicodeMatch.prefixMatchPrepare(o),
this.unicodeMatch.prefixMatchPrepare(p));};

k.prototype.

getBootstrapMatches=function(o){
var p={},
q=
this._getBootstrapMatchByType(o,p);

return this._addMatchingBootstrapResults
(o,
q[0]||{},
p);};





k.EPSILON=1e-05;




















k.getUniqueSemantic=function(o){
if(!o)
return;

var p=[],
q=[],
r=[];




o='('+o+')';

var s=o,
t=false;
o.replace(/[\(\),]/g,function(u,v){
var w;
switch(u){
case ',':

var x=r.length-1;
w=s.substr
(r[x],
v-r[x]);
p[x].push(w);
r[x]=v+1;
break;
case '(':

r.push(v+1);
p.push([]);
q.push(v+1);
break;
case ')':



if(r.length===0)
throw new Error(o+' is not a valid semantic string');


var y=r.pop();
w=s.substr(y,v-y);


w=decodeURI
(w.replace(/%/g,'%25').replace(/\s/g,'+').trim());
var z=p.pop();
z.push(w);

var aa=z.sort();
for(var ba=1;ba<aa.length;ba++)
if(aa[ba]==aa[ba-1])
t=true;


var ca=aa.join(',');

s=s.substr(0,q.pop())+
ca+
s.substr(v);
break;}



return u;});



if(t)
return '';



return s.replace(/\((.*)\)/,'$1');};


var l=function o(p){
return p.keyword_type==='local'&&
p.semantic.match(/[0-9]+\/local/)!=null;},


m=function o(p){
if(!c('FacebarGlobalOptions').dedupeLocalResults||!l(p))
return null;

var q=encodeURIComponent(p.name.replace(/\s+/g,'+'));
return 'str/'+q+'/keywords_search';},


n=function o(p,q){
if(c('FacebarGlobalOptions').hasKeywordOnlyTypeahead)
return c('FacebarStructuredText').
fromStruct(p.structure).
toString().toLowerCase();


var r=m(p),
s=r!=null?
r:
k.getUniqueSemantic(q);

return s!=null?s.toLowerCase():null;};


f.exports=k;}),null);

/** js/search/facebar/FacebarSimplifiedNoFlickerResults.js */








__d('FacebarSimplifiedNoFlickerResults',['cx','fbt','FacebarGSv2Echo','FacebarGlobalOptions','FacebarJSConstants','FacebarKeywordSearchUtils','FacebarStructuredText'],(function a(b,c,d,e,f,g,h,i){

'use strict';










var j=

{insertInto:function k
(l){

var m=l.filter(function(n){
return n.type!=='keyword';})[
0];

if(m==null)
return;


l.push
(this._createResult(i._(["{fullName} photos","a326a1c9e08fdedcc09ff6b7764af68a"],[i.param

('fullName',
m.text.toLowerCase())])));






l.push
(this._createResult(i._(["{fullName} posts","64effa9382fdcf10457e29ad3cdf91b3"],[i.param

('fullName',
m.text.toLowerCase())])));},







_createResult:function k
(l){

l=c('FacebarGSv2Echo').normalizeValue(l);
var m=
c('FacebarKeywordSearchUtils').makeFacebarEntry(l),

n=void 0;
if(c('FacebarGlobalOptions').renderKeywordSnippets)
n=i._(["Search Facebook","6ae19c569bb52916ccb49d16dc63e8b5"]);






return {type:c('FacebarJSConstants').keywordType,
results_set_type:c('FacebarJSConstants').browseTypes.keyword,
text:l,
id:l,
uid:l,
query_string:l,
icon_class:"_5b1w",
exactMatchKeyword:true,
structure:c('FacebarStructuredText').fromString(String(l)),
semantic:m.semantic,
uri:m.uri,
subtext:n,
tags:{}};}};





f.exports=j;}),null);

/** js/search/facebar/FacebarTimerUtils.js */




__d('FacebarTimerUtils',[],(function a(b,c,d,e,f,g){

'use strict';

var h=

{getTimestamp:function i(){
return Date.now();}};



f.exports=h;}),null);

/** js/search/facebar/FacebarTokenizer.js */




__d('FacebarTokenizer',['TokenizeUtil'],(function a(b,c,d,e,f,g){

'use strict';




var h="[^\"]",



i=
["\\s's",
"'s",
"\""+h+"*\"?"],



j=
[[/\s+$/,''],
[/\"\s+/,'"'],
[/\s+\"/,'"'],
[/\"\"/,''],
[/^\"$/,''],
[/\s+/,' ']],


k=




{tokenize:function l(m,n){
var o=[],
p=0;


m=m.replace(/\s/g,' ').toLowerCase();

m.replace(new RegExp(i.join('|'),'g'),
function(r,s){
if(s>p){
var t=m.substr(p,s-p);
Array.prototype.push.apply(o,
c('TokenizeUtil').parse(t).tokens.slice(0));}


var u=r;
for(var v=0;v<j.length;v++){
var w=j[v];
u=u.replace(w[0],w[1]);}

if(o.length&&u=='\'s'){
o[o.length-1]+=u;}else
if(u!=='')
o.push(u);

if(n)
Array.prototype.push.apply
(o,
c('TokenizeUtil').parse(r).tokens);



p=s+r.length;});


if(p<m.length){
var q=m.substr(p,m.length-p);
Array.prototype.push.apply(o,
c('TokenizeUtil').parse(q).tokens.slice(0));}

return o;}};



f.exports=k;}),null);

/** js/search/facebar/FacebarTypeaheadTypeNamedX.js */




__d('FacebarTypeaheadTypeNamedX',[],(function a(b,c,d,e,f,g){

'use strict';

var h=
{browse_type_user:'user',
browse_type_page:'page',
browse_type_place:'place',
browse_type_group:'group',
browse_type_application:'app'},


i=1,
j=2;k.


addTypeNamedX=function(l,m,n,o){
var p=new k(),
q=[],
r=[];
l.forEach(function(w){
if(w.tags!=null)
delete w.tags.hiddenSeeMore;

if(w.isSeeMore){
q.push(w);}else 

r.push(w);});



if(!o.showTypeNamedX){
q.forEach(function(w){
if(w.tags!=null)
w.tags.hiddenSeeMore=true;});


return r;}


var s=p.buildTypeNamedXBuckets
(r,
q,
n,
o),

t=s[0],
u=s[1];
t.forEach(function(w){
if(w.tags!=null)
w.tags.displayedSeeMore=true;});



var v=p.replaceResults
(r,
m,
t);


Array.prototype.push.apply(v,u);

v.forEach(function(w){
if(w.tags!=null)
w.tags.hiddenSeeMore=true;});



return r;};
k.prototype.

buildTypeNamedXBuckets=function(l,m,n,o){
var p={};
o=o||{};
l.forEach(function(t,u){
var v=t.render_type||t.type;
if(p[v]===undefined)
p[v]={index:u,matchCount:0};

if(!o.alwaysDisplayTypeNamedX&&
t.text.toLowerCase().indexOf(n.toLowerCase())<0)
return;

p[v].matchCount++;});


var q=[],
r=[];

m.forEach(function(t){
var u=h[t.results_set_type];

if(p[u]!==undefined&&
p[u].matchCount>=i){
q.push([t,p[u].index]);}else 

r.push(t);});


q.sort(function(t,u){return t[1]-u[1];});
var s=q.map(function(t){
return t[0];});


Array.prototype.push.apply
(r,
s.slice(j));

s.length=
Math.min(s.length,j);

return [s,r];};
k.prototype.


replaceResults=function(l,m,n){
var o=[],
p=
Math.min(0,l.length-m)+n.length;
for(var q=0;q<p;++q){
var r=-1;
for(var s=0;s<Math.min(m-q,l.length);
++s){
var t=l[s];
if(!t.exactMatchKeyword&&t.type!=='websuggestion')



r=s;}


if(r>=0){
o.push(l[r]);
l.splice(r,1);}}


Array.prototype.unshift.apply(l,n);

return o;};
function k(){}


f.exports=k;}),null);

/** js/search/facebar/ResultsBucketizer.js */




__d('ResultsBucketizer',['FacebarJSConstants','FacebarGlobalOptions'],(function a(b,c,d,e,f,g){








'use strict';





function h(i,j){
this.$ResultsBucketizer_configMap=i;
this.$ResultsBucketizer_getPropertyValue=j;}
h.






trimResults=function(i,j,k){
var l=[];
i.forEach(function(m,n){
if(m.indexBeforeBuckets>j)
l.push({index:n,originalIndex:m.indexBeforeBuckets});});


l.
sort(function(m,n){return m.originalIndex-n.originalIndex;}).
slice(k).
sort(function(m,n){return n.index-m.index;}).
forEach(function(m){i.splice(m.index,1);});};
h.




mergeBuckets=function(i,j){
var k=[];
for(var l in j)
if(!j[l].rule.hidden&&
(!j[l].rule.xor||
!j[j[l].rule.xor]))
k.push(j[l]);


k.sort(function(m,n){
var o=(m.rule.position||0)-(n.rule.position||0);
if(o!==0)
return o;

return m.results[0].indexBeforeBuckets-n.results[0].indexBeforeBuckets;});

i.length=0;
k.forEach(function(m,n){
if(m.rule.maxPromotions!=null&&
n<k.length-1)
h.trimResults
(m.results,
k[n+1].results[0].indexBeforeBuckets,
m.rule.maxPromotions);


Array.prototype.push.apply(i,m.results);}.
bind(this));};
h.prototype.







$ResultsBucketizer_matchBucketRule=function(i,j){
if(j.propertyName==null)
return j.bucketName||'default';

var k=this.$ResultsBucketizer_getPropertyValue(i,j.propertyName);

if(k==null||
j.propertyValue!=null&&
''+k!==j.propertyValue)
return false;

return j.bucketName||j.propertyName+'.'+k;};
h.prototype.





$ResultsBucketizer_buildBuckets=function(i,j,k){
var l={},
m=false;

if(c('FacebarGlobalOptions').renderKeywordsFirst){
m=true;}else 

m=
i[0]!=null&&
i[0].type===c('FacebarJSConstants').keywordType;


if(m&&k==null)
k=
c('FacebarGlobalOptions').default_num_top_results_to_show;


i.forEach(function(n,o){
j.some(function(p){
var q=this.$ResultsBucketizer_matchBucketRule(n,p);
if(q===false)
return false;


if(l[q]==null)
l[q]=
{results:[],
rule:p};




if(m&&
q===c('FacebarJSConstants').keywordType&&
l[q].results.length>=k)

return true;


if(!!p.maxResults&&
l[q].results.length>=p.maxResults)
return true;


n.bucketLineage.push
({bucketName:q,
bucketIndex:l[q].results.length});


l[q].results.push(n);

return true;}.
bind(this));}.
bind(this));

return l;};
h.prototype.

$ResultsBucketizer_bucketizeWithConfig=function(i,j,k){
var l=this.$ResultsBucketizer_configMap[j];
if(!l)
return {};

var m=this.$ResultsBucketizer_buildBuckets(i,l,k);
for(var n in m){
var o=m[n].rule.subBucketRules;
if(!!o)
this.$ResultsBucketizer_bucketizeWithConfig
(m[n].results,
o,
k);}



h.mergeBuckets(i,m);

return m;};
h.prototype.





$ResultsBucketizer_trimTotalResults=function(i,j,k){
if(j.length<=k)
return j.slice();

var l=j.map(function(n){
return n.indexBeforeBuckets;}),

m=l.sort(function(n,o){return n-o;})[k];

if(m==null)
return j;


return j.filter(function(n){
return n.indexBeforeBuckets<m;});};

h.prototype.




bucketize=function(i,j,k,l){
i.forEach(function(n,o){
n.bucketLineage=[];
n.indexBeforeBuckets=o;});

k=k||{};
Object.assign
(k,
this.$ResultsBucketizer_bucketizeWithConfig(i,'main',l));

var m=this.$ResultsBucketizer_trimTotalResults(k,i,j);
return m;};



f.exports=h;}),null);

/** js/search/facebar/FacebarDataSource.js */






__d('FacebarDataSource',['invariant','Arbiter','AsyncRequest','AsyncResponse','CSRFGuard','FacebarFindPeopleAndPages','FacebarGSv2Echo','FacebarGlobalOptions','FacebarInviteCoworkers','FacebarJSConstants','FacebarKeywordSearchUtils','FacebarNoFlickerResults','FacebarResultStore','FacebarResultStoreUtils','FacebarSimplifiedNoFlickerResults','FacebarStructuredText','FacebarTimerUtils','FacebarTokenizer','FacebarTypeNamedXBootstrap','FacebarTypeNamedXTokenOptions','FacebarTypeaheadTypeNamedX','FacebarURI','KeywordsSearchResultConfig','Map','ResultsBucketizer','ResultsBucketizerConfig','SearchDataSource','URI','Vector','ViewportBounds','XHRRequest','queryThenMutateDOM','setTimeoutAcrossTransitions','throttle'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,




































k=50,

l={};i=babelHelpers.inherits

(m,c('SearchDataSource'));j=i&&i.prototype;
function m(n){
j.constructor.call(this,n);this.

















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































executeQuery=function(o,p,q){var r,s=this;
this._curQueryId++;
q.queryId=this._curQueryId;
q.startCacheQuery=c('FacebarTimerUtils').getTimestamp();
var t=
this.getMaxResults()+
c('FacebarTypeNamedXTokenOptions').additionalResultsToFetch;


this.setQueryData
({qid:this._curQueryId,
max_results:t});


this.inform('beforeQuery',
{value:o,
queryId:this._curQueryId});


this.value=o;


var u=this.buildUids(o,[]);
q.endCacheQuery=c('FacebarTimerUtils').getTimestamp();
if(p&&u.length===0)
u.push(p);


if(c('FacebarGlobalOptions').sendExistingIDs)(function(){
var v=[];
u.forEach(function(w){
var x=this.getEntry(w);
if(x&&x.type in c('FacebarJSConstants').entityTypes)
v.push(x.uid);},

s);

if(v.length>0)
s.setQueryData
({qid:s._curQueryID,
existing_ids:JSON.stringify(v),
max_results:t});})

();


this.inform('query',
{value:o,
results:u,
queryId:this._curQueryId});



if(this.resultStore)


this.respond(o,u,false,false,q);}.

bind(this);this.




























































sendRemoteQuery=
function(o,
p,
q,
r,
s,
t){


var u=this.getQueryData(o.text_form);

if(t){
var v=this.globallyCachedKeywordsTTL*60,
w=new (c('XHRRequest'))(this.globalKeywordsEndpoint).
setData
({value:u.value,
platform:'desktop',
ttl:this.globallyCachedKeywordsTTL,
global:this.globallyCachedKeywordsUseCDN,
use_dt:this.globallyCachedKeywordsUseDT}).

setMethod('GET').
setRequestHeader('Cache-Control','max-age='+v).
setResponseHandler(function(fa,ga){
ga=c('CSRFGuard').clean(ga);
var ha=JSON.parse(ga);
this.handleQueryResponse
(new (c('AsyncResponse'))(null,ha),
fa,
o,
p,
q,
r,
t);

this.activityEnd();}.
bind(this,q.queryId)).
setErrorHandler
(function(fa){return this.activityEnd();}.bind(this));

this.inform('sending_global_request',w);

this._maxRemoteQueryId=q.queryId;

q.waitingQueries=this._waitingQueries;
q.inflightRequests=c('AsyncRequest').getInflightCount();
q.startRemoteQuery=c('FacebarTimerUtils').getTimestamp();

w.send();
this.activityStart();}else{

u.gs_prefetch_mode=r;
if(s)
u.max_results=s;

if(this.globallyCachedKeywordsUseCDN&&!this._single_state){
u.log_global_hit=true;
u.log_global_ttl=this.globallyCachedKeywordsTTL;
u.log_global_platform='desktop';
u.log_dt=this.globallyCachedKeywordsUseDT;}

var x=new (c('AsyncRequest'))().
setURI(this.queryEndpoint).
setData(u).
setMethod('GET').
setReadOnly(true).
setAllowCrossPageTransition(true).
setHandler(function(fa,ga){
this.handleQueryResponse
(ga,
fa,
o,
p,
q,
r,
t);}.

bind(this,q.queryId)).
setFinallyHandler(function(){
this.activityEnd();}.
bind(this));
for(var y=this._headerflags,z=Array.isArray(y),aa=0,y=z?y:y[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var ba;if(z){if(aa>=y.length)break;ba=y[aa++];}else{aa=y.next();if(aa.done)break;ba=aa.value;}var ca=ba,da=ca[0],ea=ca[1];
x.setRequestHeader(da,ea);}


this.inform('sending_request',x);

this._maxRemoteQueryId=q.queryId;

q.waitingQueries=this._waitingQueries;
q.inflightRequests=c('AsyncRequest').getInflightCount();
q.startRemoteQuery=c('FacebarTimerUtils').getTimestamp();

x.send();
this.activityStart();}}.

bind(this);this.


















































































































































































































































































renderResults=
function(o,
p,
q,
r,
s,
t){

if(s!=null){
l[String(o)]=s;}else 

s=l[String(o)];



c('FacebarGSv2Echo').insertInto
(o,
p,
!q,
this._single_state,
this._is_local,
this._categoryName);



if(c('FacebarGlobalOptions').graphSearchV2&&
c('FacebarGlobalOptions').renderKeywordsFirst&&
o!=null&&
c('FacebarGSv2Echo').normalizeValue(o).length>0&&
this._single_state!==true&&
!c('FacebarGlobalOptions').hasKeywordOnlyTypeahead)

if(c('FacebarGlobalOptions').hasSimplifiedFlickerFix){
c('FacebarSimplifiedNoFlickerResults').insertInto
(p);}else 


c('FacebarNoFlickerResults').insertInto
(o,
p,
t?false:q,
this._waitingQueries!==0);




if(!!o&&
o instanceof c('FacebarStructuredText')&&
!o.isEmptyOrWhitespace()&&
!this._bypassBucketizer)
p=this._bucketizeResults(o,p,s);




p.length=Math.min(p.length,this.getMaxResults());

this.injectExtraResults(o,p);

r=q&&p.length===0;

this.inform('respond',
{value:o,
results:p,
isAsync:!!q,
isEmptyResults:r});}.

bind(this);this._fetched_null_state=null;this._initialQueryData=null;this._curQueryId=-1;this._maxRemoteQueryId=-1;this._single_state=false;this._is_local=false;this._categoryName=null;this._waitingQueries=0;this.mixGrammarAndEntity=n.mixGrammarAndEntity!==undefined?n.mixGrammarAndEntity:true;this._isInjectedSuggestionFlow=false;this.grammarVersion=n.grammarVersion||'';if(!n.grammarOptions)n.grammarOptions={};this._headerflags=n.headerflags||new (c('Map'))();this.recordingRoute='banzai_vital';this._maxGrammarResults=n.grammarOptions.maxGrammarResults;this.nullStateEndpoint=n.nullStateEndpoint||'/ajax/browse/null_state.php';this.setNullStateData(n.nullStateData||{},true);this._minQueryLength=n.minQueryLength||-1;this._performShortQuery=n.performShortQuery||false;this._fixProcessLean=n.grammarOptions.fixProcessLean||false;this.hasGSPreload=c('FacebarGlobalOptions').hasGSPreload;this.gsPreloadOptions=c('FacebarGlobalOptions').gsPreloadParams;this.useGloballyCachedKeywords=c('FacebarGlobalOptions').useGloballyCachedKeywords;this.globallyCachedKeywordsTTL=c('FacebarGlobalOptions').globallyCachedKeywordsTTL;this.globallyCachedKeywordsUseCDN=c('FacebarGlobalOptions').globallyCachedKeywordsUseCDN;this.globallyCachedKeywordsUseDT=c('FacebarGlobalOptions').globallyCachedKeywordsUseDT;this.throttleExecuteQuery();this.throttleSendRemoteQuery();this.throttleRenderResults();this.resultStoreOptions=n.grammarOptions||{};this.resultStoreOptions.useNewExactNameMatch=n.grammarOptions.useNewExactNameMatch==='true';this.defaultQuery=null;this._bypassBucketizer=false;this._resultsBucketizer=new (c('ResultsBucketizer'))(c('ResultsBucketizerConfig').rules,function(o,p){switch(p){case 'isSeeMore':return o.isSeeMore;case 'objectType':return o.type;case 'resultSetType':return o.results_set_type;case 'renderType':return o.render_type||o.type;case 'cacheOnlyResult':return o.cacheOnlyResult;case 'closeEntity':return o.bootstrapped||(!!o.tags?o.tags[p]:undefined);default:return !!o.tags?o.tags[p]:undefined;}});this.fetchNullState();this.initWithConfig(c('FacebarGlobalOptions').grammarConfig);c('Arbiter').subscribe('FacebarTypeahead.injectSuggestion',function(o,p){return this.addSearchSuggestionToNullState(p);}.bind(this));this.subscribe('bootstrapped',function(){c('Arbiter').subscribe('FacebarDataSource.getBootstrapMatches',function(o,p){p.callback.call(null,this.getBootstrapMatches(p.query));}.bind(this));}.bind(this));c('Arbiter').subscribe('FacebarTypeahead.persistentTabs',function(o,p){return this.passSelectedTabInfo(p);}.bind(this));}m.prototype.passSelectedTabInfo=function(n){this.selectedTabBrowseEdge=n.browseEdge;};m.prototype.clearSelectedTabInfo=function(){this.selectedTabBrowseEdge=null;};m.prototype.addSearchSuggestionToNullState=function(n){if(!n.query)return;var o=c('FacebarKeywordSearchUtils').makeFacebarEntry(n.query);this.resultStore.addSuggestionEntryToNullState(o,n.interaction);this._isInjectedSuggestionFlow=true;this.inform('reloadNullstate',true);this._isInjectedSuggestionFlow=false;};m.prototype.initWithConfig=function(n){this.facebarConfig=n;this.createResultStore();if(this._fetched_null_state){this.setNullState(this._fetched_null_state);this._fetched_null_state=null;}};m.prototype.throttleExecuteQuery=function(){var n=c('FacebarGlobalOptions').executeQueryThrottleTime;this.executeQueryThrottled=c('throttle').withBlocking(this.executeQuery,n,this);};m.prototype.throttleSendRemoteQuery=function(){var n,o=this,p=c('FacebarGlobalOptions').sendRemoteQueryThrottleTime;if(p===0){this.sendRemoteQueryThrottled=this.sendRemoteQuery;}else if(c('FacebarGlobalOptions').lazyThrottleRemoteQuery){(function(){var q=Date.now(),r=c('FacebarGlobalOptions').enableSendRemoteQueryDelay,s=c('FacebarGlobalOptions').sendRemoteQueryDelayTime;o.sendRemoteQueryThrottled=function(){for(var t=arguments.length,u=Array(t),v=0;v<t;v++)u[v]=arguments[v];var w=Date.now();if(q+p<w){q=w;if(r){c('setTimeoutAcrossTransitions')(function(){this.sendRemoteQuery.apply(this,u);}.bind(this),s);}else this.sendRemoteQuery.apply(this,u);}}.bind(o);})();}else{if(c('FacebarGlobalOptions').typingSpeedThrottleTime>0)p=c('FacebarGlobalOptions').typingSpeedThrottleTime;this.sendRemoteQueryThrottled=c('throttle').withBlocking(this.sendRemoteQuery,p,this);}};m.prototype.throttleRenderResults=function(){var n=c('FacebarGlobalOptions').renderThrottleTime;if(n===0){this.renderResultsThrottled=this.renderResults;return;}var o=Date.now();this.renderResultsThrottled=function(p,q,r,s,t,u){var v=Date.now();if(r||o+n<v){o=v;this.renderResults(p,q,r,s,t,u);}}.bind(this);};m.prototype.createResultStore=function(){this.facebarConfig.maxGrammarResults=this._maxGrammarResults;this.resultStore=new (c('FacebarResultStore'))(this.facebarConfig,c('FacebarTokenizer').tokenize,this.getEntry.bind(this),this.resultStoreOptions);if(this._fixProcessLean)this._processLean();this.subscribe('setSortFunction',function(n,o){this.resultStore.setSortFunction(o);}.bind(this));};m.prototype.dirty=function(){this._nullStateFetched=false;this.resultStore.resetCaches();j.dirty.call(this);};m.prototype.addEntries=function(n){this.resultStore.addBootstrap(this.processEntries(n));};m.prototype._processLean=function(){if(this._fixProcessLean){if(this._leanPayload&&this.resultStore){var n=void 0,o=this._leanPayload.entries;for(var p in o){n=this.getEntry(p);if(!n)continue;for(var q in o[p]){if(!n.grammar_costs)n.grammar_costs={};n.grammar_costs['{'+q+'}']=o[p][q];}}this.setExclusions(this._leanPayload.blocked);this._leanPayload=null;}}else j._processLean.call(this);};m.prototype.setNullStateData=function(n,o){if(o)this.nullStateData={grammar_version:this.grammarVersion};Object.assign(this.nullStateData,n);return this;};m.prototype.setNullState=function(n){var o;if(c('FacebarGlobalOptions').hasKeywordOnlyTypeahead)(function(){var q={};n.queries=n.queries.filter(function(r){var s=r.parse.display.join(' ').toLowerCase();if(!q[s]){q[s]=true;return true;}return false;});})();this._null_state=n;this.processEntries(this._null_state.entities);this.resultStore.setNullState(this._null_state.queries);var p=c('FacebarTypeNamedXBootstrap').typeNamedX;p.forEach(function(q){q.parse.extendable=true;q.qid=this._curQueryId;q.isTypeNamedXBootstrap=true;},this);this.resultStore.addNullStateToQueryCache(this.getRawStructure(c('FacebarStructuredText').fromString('')),p);this._typeNamedXResults={};p.forEach(function(q){this._typeNamedXResults[c('FacebarJSConstants').grammarToEntityTypes[q.resultsSetType]]=q;},this);};m.prototype.getNullStateTrending=function(){return this._null_state.trending;};m.prototype.setSingleState=function(n){this._single_state=n;};m.prototype.getSingleState=function(){return this._single_state;};m.prototype.setLocal=function(n){this._is_local=n;};m.prototype.setCategoryName=function(n){this._categoryName=n;};m.prototype.overrideNullState=function(n){this._null_state!=null||h(0,'Can\'t override non existent null state.');this._original_null_state=this._original_null_state||this._null_state;this.setNullState(n);};m.prototype.restoreNullState=function(){if(this._original_null_state)this.setNullState(this._original_null_state);};m.prototype.fetchNullState=function(){if(this._nullStateFetched){this.activityStart();setTimeout(this.activityEnd.bind(this),0);return;}var n=new (c('AsyncRequest'))().setURI(this.nullStateEndpoint).setData(this.nullStateData).setMethod('GET').setReadOnly(true).setAllowCrossPageTransition(true).setHandler(function(o){if(this.resultStore){this.setNullState(o.payload);this.inform('nullstateReady',true);}else this._fetched_null_state=o.payload;this._nullStateFetched=true;}.bind(this)).setFinallyHandler(this.activityEnd.bind(this));this.activityStart();n.send();};m.prototype.fetchNUXResults=function(n){if(!c('FacebarGlobalOptions').allowGrammar)return;n=n||{};var o=new (c('AsyncRequest'))().setURI(n.URI).setData(this.nullStateData).setMethod('GET').setReadOnly(true).setAllowCrossPageTransition(true).setHandler(function(p){if(this.resultStore){this.overrideNullState(p.payload);n.success&&n.success();}}.bind(this)).setFinallyHandler(this.activityEnd.bind(this));this.activityStart();o.send();};m.prototype.toTypeaheadEntryUid=function(n,o){var p=void 0,q=c('FacebarStructuredText').fromStruct(o.structure),r=q.getFragment(0);if(q.getCount()==1&&r.isType('ent')){var s=r.getType().split(':')[2];p=this.getEntry(r.getUID(),s);p.type=this.resultStore.stripBrackets(o.type);}else{p=this.getEntry(o.tuid);if(!p){p={dynamic_cost:o.dynamic_cost,extra_uri_params:o.extra_uri_params,memcache:o.fromMemcache,photo:o.photo,results_set_type:o.resultsSetType,tuid:o.tuid,type:o.type,uid:o.tuid,tags:o.tags};this.processEntries([p]);p=this.getEntry(o.tuid);}p.icon_class=o.iconClass;p.unseen_posts=o.unseen_posts;if(c('FacebarGlobalOptions').renderKeywordSnippets){p.category=o.category;p.subtext=o.subtext;p.boldedSubtext=o.boldedSubtext;}}p.error_info=o.errorInfo;p.logInfo=o.logInfo;p.structure=q;p.text=p.structure.toString();p.queryTypeText=o.queryTypeText;p.semantic=!!o.isSingleState&&o.singleStateSemantic?o.singleStateSemantic:o.semantic;p.alternateSemantic=o.alternateSemantic;p.tree=o.tree;p.cost=o.cost;p.isSeeMore=!!o.isSeeMore;p.isNullState=!!o.isNullState;p.isSingleState=!!o.isSingleState;p.keywordSource=o.keywordSource;p.keyword=o.keyword;var t=o.keyword_type;p.keywordType=t;p.isTrending=!!o.isTrending||o.keywordBootstrapType===c('FacebarJSConstants').keywordBootstrapTypes.trending||t===c('FacebarJSConstants').keywordTypes.trending;p.isCelebrity=t===c('FacebarJSConstants').keywordTypes.celebrity;p.isFootball=t===c('FacebarJSConstants').keywordTypes.football;p.isPhotos=t===c('FacebarJSConstants').keywordTypes.photos;p.isVideos=t===c('FacebarJSConstants').keywordTypes.videos;p.isHashtag=t===c('FacebarJSConstants').keywordTypes.hashtag;p.isLocal=t===c('FacebarJSConstants').keywordTypes.local||t===c('FacebarJSConstants').keywordTypes.local_category;p.isCompany=t===c('FacebarJSConstants').keywordTypes.company;p.isMovie=t===c('FacebarJSConstants').keywordTypes.movie;p.isHappeningNow=t===c('FacebarJSConstants').keywordTypes.happeningNow;p.isSpecialIntentGeneric=t===c('FacebarJSConstants').keywordTypes.specialIntentGeneric;p.isLink=t===c('FacebarJSConstants').keywordTypes.link;c('FacebarJSConstants').intentKeys.map(function(w){p.isSpecialIntent=p.isSpecialIntent||p[w];});p.isRecent=!!o.isRecent;p.isPrefetched=!!o.isPrefetched;p.isSuggestion=!!o.isSuggestion;p.isInjectedSuggestion=!!o.isInjectedSuggestion;p.isFromGSEF=!!o.isFromGSEF;p.isGloballyCachedKeyword=!!o.isGloballyCachedKeyword;p.entityInfo=o.entityInfo;p.cacheOnlyResult=o.cacheOnlyResult||false;p.isExtendedResult=o.isExtendedResult||false;if(c('FacebarGlobalOptions').hasKeywordOnlyTypeahead&&(!c('FacebarGlobalOptions').logSERPClickAsRecentSearch||!o.isNullState)){var u=c('FacebarStructuredText').fromStruct(o.structure).toString().toLowerCase(),v=c('FacebarKeywordSearchUtils').makeFacebarEntry(u);p.uri=v.uri;p.semantic=v.semantic;p.structure=v.structure;}else if(o.isExtendedResult){p.uri=c('FacebarURI').getURI(this.facebarConfig,p);}else p.uri=p.uri||c('FacebarURI').getURI(this.facebarConfig,p);p.parse=o.parse;p.tags=o.tags||{};p.isKeywordL2=o.isKeywordL2||false;p.exactMatchKeyword=o.exactMatchKeyword||false;p.qid=o.qid;p.templateID=o.templateID;if(o.isJSBootstrapMatch){p.isJSBootstrapMatch=o.isJSBootstrapMatch;p.backendCost=o.backendCost;p.bootstrapCost=o.bootstrapCost;p.keywordBootstrapType=o.keywordBootstrapType;}this._replaceCategoryWithTermMatches(n,p,o);return p.tuid;};m.prototype._replaceCategoryWithTermMatches=function(n,o,p){if(o.type!=='user'&&o.type!=='page')return;if(!o.term_to_subtitle||!p.termMatches)return;var q=o.alias,r=q==null?'':this.resultStore._convertToAliasKey(q),s=[];p.termMatches.forEach(function(u){var v=o.term_to_subtitle[u];if(!n.is_alias_search&&u===r&&u!==n.potential_alias_term)v=null;if(v)s.push(v);},this);if(o.category===undefined)o.category='';if(o.original_category!==undefined)o.category=o.original_category;if(!s||s.length===0)return;if(o.original_category===undefined)o.original_category=o.category;if(!o.original_category)return;var t=o.original_category.length>0?o.original_category.split(' \xB7 '):[];t.unshift.apply(t,s);t=t.filter(function(u,v,w){return v==w.indexOf(u);});o.category=t.splice(0,2).join(' \xB7 ');};m.prototype.getRawStructure=function(n){if(typeof n=='string')n=c('FacebarStructuredText').fromString(n);if(this.resultStore)return this.resultStore.transformStructured(n.toArray());};m.prototype.saveResult=function(n){this._initialQueryData=this.getUID(n.uid,n.fetchType);};m.prototype.isDefaultKeywordQuery=function(n){return n.type===c('FacebarJSConstants').keywordType&&c('FacebarResultStoreUtils').getTextFromResult(n).toLowerCase()===this.value.getHash().trim().toLowerCase();};m.prototype.buildUids=function(n){if(!n||!this.resultStore)return [];if(typeof n==='string')n=c('FacebarStructuredText').fromString(n);var o=this.getRawStructure(n),p=this.resultStore.getResults(o,this.getMaxResults()),q=p.results;if(q===undefined)return [];var r=p.null_state===true,s=0;q=q.filter(function(w,x){if(!c('FacebarGlobalOptions').allowGrammar&&w.type=='grammar')return false;return w.semantic!='<blank>'&&(w.type!='unimplemented'||s++===0);},this);var t=[],u=[],v=[];q.forEach(function(w){if(w.forcedPosition>0){v.push(w);}else if(w.isSeeMore){t.push(w);}else u.push(w);});if(r){q=this.orderNullState(q,c('FacebarGlobalOptions').maxNullstateResultCount?c('FacebarGlobalOptions').maxNullstateResultCount:this.getMaxResults());}else q=u;if(v.length>0){v.sort(function(w,x){return w.forcedPosition-x.forcedPosition;});v.forEach(function(w){q.splice(w.forcedPosition,0,w);});}if(t.length>0)q.push.apply(q,t);return q.map(function(w){return this.toTypeaheadEntryUid(o,w);}.bind(this));};m.prototype.orderNullState=function(n,o){var p={top:[],bottom:[],middle:[]},q=function t(u){var v=u.null_state_position;return Object.prototype.hasOwnProperty.call(p,v)?v:'middle';},r=function t(u,v){return u.original_cost-v.original_cost;};n&&n.forEach(function(t){p[q(t)].push(t);},this);for(var s in p){p[s]=p[s].sort(r).slice(0,o);o-=p[s].length;}return [].concat(p.top,p.middle,p.bottom);};m.prototype.isEntity=function(n){if(!n)return false;return /^\d+$/.test(n);};m.prototype.handleResponse=function(n,o){if(!(n.payload.errors)){this.processEntries(n.payload.entities);n.payload.results.forEach(function(p){p.qid=n.queryId;if(!p.parse)p.parse={};p.parse.entTokens=p.parse.entTokens||[];p.parse.remTokens=p.parse.remTokens||[];p.parse.suffix=p.parse.suffix||'';if(this.isEntity(p.semantic))p=this._buildCommonEntityFields(p,o.tokens);}.bind(this));this.saveResults(n,o);}};m.prototype.saveResults=function(n,o){var p=[];if(n.payload.seemore&&this._typeNamedXResults)n.payload.seemore.forEach(function(q){p.push(this._typeNamedXResults[q]);},this);if(n.payload.prefetched)this.processPrefetched(n.payload.prefetched);this.resultStore.saveResults(n.payload.results,o,n.payload.incomplete,{},p);};m.prototype.processPrefetched=function(n){var o,p=this,q=function t(u){var v=c('FacebarStructuredText').fromString(u),w=p.getRawStructure(v);s=n[u];p.processEntries(s.entities);s.results.forEach(function(x){if(this.isEntity(x.semantic))x=this._buildCommonEntityFields(x,w.tokens);}.bind(p));p.resultStore.saveResults(s.results,w,s.incomplete);};for(var r in n){var s;q(r);}};m.prototype.processEntries=function(n){return n.map(function(o,p){var q=o.uid+='';o.textToIndex=this.getTitleTerms(o);o.titleToIndex=this.getTitleTerms(o);q=this.getUID(q,o.fetchType);var r=this.getEntry(q);if(!r){this.setEntry(q,{});r=this.getEntry(q);}else delete o.photo;Object.assign(r,o);r.tuid=q;r.index===undefined&&(r.index=p);return q;},this);};m.prototype.getUID=function(n,o){n+='';if(o!==undefined){o=/([^:]+:)?([^:]+)(:.*)?/.exec(o)[2];return JSON.stringify([n,o]);}return n;};m.prototype.getEntry=function(n,o){var p=void 0;n=''+n;p=o!=null?j.getEntry.call(this,this.getUID(n,o))||j.getEntry.call(this,n):j.getEntry.call(this,n);return p;};m.prototype.getEntryForFragment=function(n){return this.getEntry(n.getUID(),n.getTypePart(2));};m.prototype.getMaxResults=function(){return this._numResults.max;};m.prototype.query=function(n,o,p){this.executeQueryThrottled(n,this._initialQueryData,{keyPress:c('FacebarTimerUtils').getTimestamp()});this._initialQueryData=null;};m.prototype.shouldFetchMore=function(n,o){if(!n.is_empty&&c('FacebarGlobalOptions').fetchMoreKeywords){var p=o.filter(function(q){return q.type===c('FacebarJSConstants').keywordType;}).length;if(p<c('FacebarGlobalOptions').default_num_top_results_to_show)return true;}if(n.is_empty)return false;if(this.resultStore.alreadyKnown(n.cache_id))return false;if(n.raw_text&&this._isQueryTooShort(n.raw_text))return false;if(c('FacebarGlobalOptions').alwaysFetchMore)return true;if(o.length<this.getMaxResults()||this._performShortQuery)return true;return this.countValidResults(o)<this.getMaxResults()||this._performShortQuery;};m.prototype.countValidResults=function(n){var o=0;n.forEach(function(p){if(p&&!p.isNullState&&!p.isSeeMore)o++;},this);return o;};m.prototype.handleQueryResponse=function(n,o,p,q,r,s,t){var u=s||t;if(u&&n.payload.is_user)return;var v=n.payload;n.queryId=o;n.inputQuery=p.text_form;if(v.results!=null)v.results.forEach(function(y){y.isSingleState=this._single_state;y.isFromGSEF=s;y.isGloballyCachedKeyword=t;}.bind(this));r.endRemoteQuery=c('FacebarTimerUtils').getTimestamp();this.inform('response_received',n);this.handleResponse(n,p);var w=[];if(v.abandon_cache)w=v.results.map(function(y){return this.toTypeaheadEntryUid(p,y);}.bind(this));var x=v.num_topresults_to_show;if(c('FacebarGlobalOptions').hasSimplifiedFlickerFix&&(x==null||x<3))x=3;this.respond(q,w,true,v&&(!v.results||v.results.length===0),r,x,u);this.inform('backend_response',n);};m.prototype.activityStart=function(){if(!this._waitingQueries)this.inform('activity',{activity:true},c('Arbiter').BEHAVIOR_STATE);this._waitingQueries++;};m.prototype.activityEnd=function(){this._waitingQueries--;if(!this._waitingQueries)this.inform('activity',{activity:false},c('Arbiter').BEHAVIOR_STATE);};m.prototype._bucketizeResults=function(n,o,p){o=this._tagKeywordsSuggestions(o);o=c('FacebarTypeaheadTypeNamedX').addTypeNamedX(o,this.getMaxResults(),n.toString(),c('FacebarGlobalOptions'));return this._resultsBucketizer.bucketize(o,k,null,p);};m.prototype._tagKeywordsSuggestions=function(n){if(!n||n.length===0)return n;var o=n[0];if(o.bootstrapped)return n;if(o.type==='grammar'||o.cost<c('FacebarGlobalOptions').closeEntityThreshold&&o.type==='user')return n;return n.map(function(p){if(p.type!==c('FacebarJSConstants').keywordType)return p;p=babelHelpers['extends']({},p);p.tags.topBucket=true;return p;});};m.prototype._buildCommonEntityFields=function(n,o){if(n.queryTypeText)return n;if(c('FacebarGlobalOptions').unbreakParseDisplay){n.parse.display=[{type:'ent:'+n.type,uid:n.semantic}];}else n.parse.display=[{type:'ent:'+n.type,uid:parseInt(n.semantic,10)}];if(n.parse.fetchType)n.parse.display[0].fetchType=n.parse.fetchType;n.parse.entTokens=o;n.parse.pos=0;n.resultsSetType='{'+n.type+'}';n.queryTypeText=c('FacebarJSConstants').defaultQueryTypeText;return n;};m.prototype.setBypassBucketizer=function(n){this._bypassBucketizer=n;};m.prototype.respond=function(n,o,p,q,r,s,t){if(p&&this.value){if(typeof this.value==='string')this.value=c('FacebarStructuredText').fromString(this.value);this.inform('remote_query_match',{isMatch:this.value.matches(n),queryId:r?r.queryId:0});n=this.value;if(!o||o.length===0)o=this.buildUids(n);}this.inform('reorderResults',o);this.inform('respondValidUids',o);var u=o.map(this.getEntry,this);u.forEach(function(w,x){w.fromCache=!p;w.isSingleState=this._single_state;},this);if(!p&&(n.getHash().length<512||n.getHash().startsWith('http://')||n.getHash().startsWith('https://'))){var v=this.getRawStructure(n);if(this.shouldFetchMore(v,u)){if(r!=null)r.dispatchRemoteQuery=c('FacebarTimerUtils').getTimestamp();if(this.useGloballyCachedKeywords&&!this._single_state){this.sendRemoteQueryThrottled(v,n,r,false,null,true);this.sendRemoteQueryThrottled(v,n,r);}else if(this.hasGSPreload){this.sendRemoteQueryThrottled(v,n,r,true,this.gsPreloadOptions.max_entities_to_fetch);this.sendRemoteQueryThrottled(v,n,r);}else this.sendRemoteQueryThrottled(v,n,r);}}if(!p||!r||r.queryId===this._maxRemoteQueryId)this.renderResultsThrottled(n,u,p,q,s,t);if(r!=null)this.logLatencies(p,r);};m.prototype.

injectExtraResults=function(n,o,p){

c('FacebarFindPeopleAndPages').insertInto
(n,
o,
!p,
this._single_state);



c('FacebarInviteCoworkers').insertInto
(n,
o,
!p,
this._single_state);};

m.prototype.









logLatencies=function(n,o){
var p=c('FacebarTimerUtils').getTimestamp();
if(n){
this.inform('remote_query_latency',
{queryId:o.queryId,
latencies:
{queryStart:Math.max(o.startRemoteQuery-
o.dispatchRemoteQuery,0),
queryEnd:Math.max(o.endRemoteQuery-
o.startRemoteQuery,0),
keyPressToQueryDispatch:Math.max(o.dispatchRemoteQuery-
o.keyPress,0),
keyPressToQueryStart:Math.max(o.startRemoteQuery-
o.keyPress,0),
keyPressToQueryEnd:Math.max(o.endRemoteQuery-
o.keyPress,0),
render:Math.max(p-o.endRemoteQuery,0),
inflightRequests:o.inflightRequests,
waitingQueries:o.waitingQueries,
keyPressToRender:Math.max(p-o.keyPress,0)}});}else 



this.inform('cache_query_latency',
{queryId:o.queryId,
latencies:
{queryStart:Math.max(o.startCacheQuery-o.keyPress,
0),
queryEnd:Math.max(o.endCacheQuery-
o.startCacheQuery,0),
keyPressToQueryEnd:Math.max(o.endCacheQuery-
o.keyPress,0),
render:Math.max(p-o.endCacheQuery,0),
keyPressToRender:Math.max(p-o.keyPress,0)}});};



m.prototype.


















_updateMaxResults=function(){
c('queryThenMutateDOM')
(function(){
var n=c('Vector').getViewportDimensions().y,
o=c('ViewportBounds').getTop()||42,

p=56,
q=48,


r=n-o-q-25;

this._maxResults=Math.max
(this._numResults.min,
Math.min
(this._numResults.max,
Math.floor(r/p)-1));


this.value&&this.query(this.value);}.
bind(this));};

m.prototype.

getCurQueryId=function(){
return this._curQueryId;};
m.prototype.


setTypenamedXOption=function(n){
c('FacebarGlobalOptions').showTypeNamedX=n;};
m.prototype.


setMinQueryLength=function(n){
this._minQueryLength=n;};
m.prototype.


setGrammarOption=function(n){
c('FacebarGlobalOptions').allowGrammar=n;};
m.prototype.

getBootstrapMatches=function(n){
var o=this.getRawStructure
(c('FacebarStructuredText').fromString(n)),

p=this.resultStore.getBootstrapMatches(o);
return p.map
(function(q){
return this.getEntry
(this.toTypeaheadEntryUid(o,q));}.

bind(this));};





Object.assign(m.prototype,
{events:['query','respond','bootstrapped','activity','ready']});


f.exports=m;}),null);

/** js/search/facebar/FacebarTypeahead.js */




__d('FacebarTypeahead',['Arbiter','Typeahead','emptyFunction'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits





(j,c('Typeahead'));i=h&&h.prototype;
function j(k,l,m,n,o,p){
i.constructor.call(this,k,l,m,n);

this.getCore();
this.proxyEvents();
this.initBehaviors(o||[]);


var q=this.core.subscribe('focus',function(){
if(p)
p.init(this);

this.core.unsubscribe(q);
this.data.bootstrap(false);
this.core.input.focus();}.

bind(this));

this.data.bootstrap(true);
this.inform('init',this,c('Arbiter').BEHAVIOR_PERSISTENT);
c('Arbiter').inform('Facebar/init',this,c('Arbiter').BEHAVIOR_PERSISTENT);}
j.prototype.

proxyEvents=function(){
var k,
l=[],
m=null,


n=function(){
while(k=l.shift())
this.inform(k[0],k[1]);

m=null;}.
bind(this);




[this.data,this.view,this.core].forEach(function(o){
o.subscribe(o.events,function(p,q){
l.push([p,q]);
m=m||setTimeout(n,0);}.
bind(this));},
this);};



Object.assign(j.prototype,
{init:c('emptyFunction')});


f.exports=j;}),null);

/** js/search/structured_input/SimpleStructuredInput.js */






__d('SimpleStructuredInput',['csx','Arbiter','ArbiterMixin','DOM','DataStore','Event','FacebarStructuredText','Input','Parent','getActiveElement','mixin'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits













(k,c('mixin')(c('ArbiterMixin')));j=i&&i.prototype;





function k(l){'use strict';
j.constructor.call(this);
this.$SimpleStructuredInput_root=l;
this.$SimpleStructuredInput_input=c('DOM').find(l,"._1frb");
this.$SimpleStructuredInput_hint=c('DOM').find(l,"._5eay");

c('DataStore').set(l,'SimpleStructuredInput',this);

this.init();}
k.prototype.

init=function(){'use strict';
var l=function(event){
return this.inform(event.type);}.
bind(this);

c('Event').listen(this.$SimpleStructuredInput_input,'blur',l);
c('Event').listen(this.$SimpleStructuredInput_input,'focus',l);
c('Event').listen(this.$SimpleStructuredInput_input,'input',function(){
this.inform('change');}.
bind(this));

this.inform('init',null,c('Arbiter').BEHAVIOR_PERSISTENT);};
k.prototype.

setHint=function(l){'use strict';
var m=l.map(function(o){return o.text;}).join(''),
n=c('Input').getValue(this.$SimpleStructuredInput_input);

if(this.hasFocus()&&
n.length>0&&
m.toLowerCase().indexOf(n.toLowerCase())===0){

c('Input').setValue
(this.$SimpleStructuredInput_hint,
n+m.slice(n.length));}else 


c('Input').setValue(this.$SimpleStructuredInput_hint,'');};

k.prototype.

focus=function(){'use strict';
this.$SimpleStructuredInput_input.focus();};
k.prototype.

blur=function(){'use strict';
this.$SimpleStructuredInput_input.blur();


this.setHint([]);};
k.prototype.

hasFocus=function(){'use strict';
return c('DOM').contains(this.$SimpleStructuredInput_root,c('getActiveElement')());};
k.prototype.

setStructure=
function(l){

var m=arguments.length<=1||arguments[1]===undefined?false:arguments[1];'use strict';
var n=l.map(function(o){return o.text;});
c('Input').setValue(this.$SimpleStructuredInput_input,n.join(''));
if(m!==true)
this.inform('change');};

k.prototype.

getStructure=function(){'use strict';
return c('FacebarStructuredText').fromString
(c('Input').getValue(this.$SimpleStructuredInput_input)).
toStruct();};
k.prototype.

getSelection=function(){'use strict';

return {offset:this.$SimpleStructuredInput_input.selectionStart,
length:this.$SimpleStructuredInput_input.selectionEnd-this.$SimpleStructuredInput_input.selectionStart};};

k.prototype.

setSelection=function(l){'use strict';
if(this.hasFocus()){
this.$SimpleStructuredInput_input.setSelectionRange
(l.offset,
l.offset+l.length);

this.inform('select');}};

k.prototype.

isSelectionAtEnd=function(){'use strict';
var l=this.getSelection().offset,
m=c('Input').getValue(this.$SimpleStructuredInput_input).length;

return l>=m;};
k.prototype.

selectAll=function(){'use strict';
this.setSelection
({offset:0,
length:c('Input').getValue(this.$SimpleStructuredInput_input).length});};

k.

getInstance=function(l){'use strict';
var m=c('Parent').bySelector(l,"._5eaz");
if(m==null)
throw new Error('No DOMElement structured input found using');

return c('DataStore').get(m,'SimpleStructuredInput')||
new k(m);};




f.exports=k;}),null);

/** js/search/structured_input/StructuredInputDOM.js */




__d('StructuredInputDOM',['cx','createArrayFromMixed','CSS','DOM','FacebarGlobalOptions','getElementText','isElementNode','isTextNode'],(function a(b,c,d,e,f,g,h){











var i=function k(){
return c('FacebarGlobalOptions').graphSearchV2?
"_4v1s":
"_586o";},


j=
{ENTITY_CLASS:i(),




encodeText:function k(l){
return l.replace(/ /g,'\u00a0');},





decodeText:function k(l){
return l.replace(/\u00a0/g,' ');},





createIconNode:function k(l){
if(l&&typeof l=='object'){
var m=c('DOM').create('i',
{className:l.className,
style:l.uri&&
{backgroundImage:'url("'+l.uri+'")'}});


m.setAttribute('data-select','ignore');
return m;}},






createTextNode:function k(l){
return c('DOM').create('span',
{'data-si':true},
j.encodeText(l||""));},






createEntityNode:function k(l,m){
var n=j.encodeText(l.text),
o=j.createIconNode(m.icon),
p=c('DOM').create('span',{},o?[o,n]:n),

q=(m.className||'').split(/\s+/);
q.push(j.ENTITY_CLASS);
q.forEach(c('CSS').addClass.bind(c('CSS'),p));


var r=
{si:true,
uid:l.uid,
type:l.type,
text:n,
'is-local':l.isLocal,
'category-name':l.categoryName,
fulltext:n,
group:m.group,
select:m.select,
icon:JSON.stringify(m.icon||null)};


for(var s in r)
if(r[s]!=null)
p.setAttribute('data-'+s,r[s]);



return p;},





convertToTextNode:function k(l){
l.className='';
l.setAttribute('data-type','text');


l.removeAttribute('data-group');
l.removeAttribute('data-select');
l.removeAttribute('data-icon');
l.removeAttribute('data-uid');
l.removeAttribute('data-is-local');
l.removeAttribute('data-category-name');


for(var m=l.firstChild;m;m=m.nextSibling)
if(!c('isTextNode')(m))
c('DOM').remove(m);},









isEntityNode:function k(l){
return c('isElementNode')(l)&&
c('CSS').hasClass(l,j.ENTITY_CLASS);},









containsOnlyText:function k(l,m){
m=c('createArrayFromMixed')(m);
for(var n=l.firstChild;n;n=n.nextSibling)
if(!(c('isTextNode')(n)||l.nodeName in m))
return false;


return true;},








getText:function k(l){


return c('getElementText')(l).replace(/ /g,'\u00a0');},





getDecodedText:function k(l){
return j.decodeText(c('getElementText')(l));},








getLength:function k(l){
return c('getElementText')(l).length;},










getMarker:function k(l,m,n){
var o=l.firstChild;
while(o){
var p=j.getLength(o);

if(p>m||!o.nextSibling){
if(c('isTextNode')(o)||!n){

return {node:o,
offset:Math.min(m,p)};}else 


return j.getMarker(o,m);}else 


m-=p;


o=o.nextSibling;}}};




f.exports=j;}),null);

/** js/search/structured_input/StructuredInputUtil.js */




__d('StructuredInputUtil',['StructuredInputDOM'],(function a(b,c,d,e,f,g){



function h(n,o,p){
var q=n.substr(0,o).lastIndexOf(p);
return q!==-1?q+1:0;}


function i(n,o,p){
var q=n.indexOf(p,o);
return q!==-1?q:n.length;}


function j(n,o,p){

return (o===0||
o===n.length||
n.substr(o,p.length)==p);}



function k(n,o,p,q){
switch(o){
case 'none':
return p;
case 'all':
return q?n.length:0;
case 'word':
if(j(n,p,'\u00a0')){
return p;}else
if(q){
return i(n,p,'\u00a0');}else 

return h(n,p,'\u00a0');}}




function l(n,o){
return o&&
c('StructuredInputDOM').isEntityNode(n)&&
!c('StructuredInputDOM').isEntityNode(o);}


var m=








{getMarkerAtOffset:function n(o,p){
var q=o.firstChild,
r=0,s=0;

while(q){
r+=s;
s=c('StructuredInputDOM').getLength(q);

if(r+s>p){
break;}else 

q=q.nextSibling;}




return {node:q||o.lastChild,
offset:p-r};},

















validateEntityText:function n(o){
var p=c('StructuredInputDOM').getText(o),
q=o.getAttribute('data-fulltext'),
r=o.getAttribute('data-group');

if(r=='hashtag'){
var s=p.match(/#[^\s]+/);
q=s&&s[0];}


var t=p.indexOf(q),
u=
{prefix:null,
entity:null,
suffix:null};


switch(r){
case 'none':
u.entity=p;
break;
case 'hashtag':
case 'all':
if(t!=-1){
u.prefix=p.substr(0,t);
u.entity=p.substr(t,q.length);
u.suffix=p.substr(t+q.length);}else 

u.suffix=p;

break;
case 'word':
if(t!=-1){
u.prefix=p.substr(0,t);
p=p.substr(t);}


var v=0,w=0;
while(v<q.length){
w=i(q,v+1,'\u00a0');
if(p.substr(0,w)!=q.substr(0,w)){
break;}else 

v=w;}


u.entity=p.substr(0,v)||null;
u.suffix=p.substr(v)||null;}


return u;},









getGrouping:function n(o,p){
var q=o.getAttribute('data-group'),
r=o.getAttribute('data-select');

if(p=='select'){
return r=='group'?q:'none';}else 

return q;},










snapMarkerToText:function n(o,p){
var q=o.node;

if(c('StructuredInputDOM').isEntityNode(q)){
var r=o.offset,
s=m.getGrouping(q,p);

if(s!='none')
if(r===0){
var t=q.previousSibling;
if(l(q,t))

return {node:t,
offset:c('StructuredInputDOM').getLength(t)};}else


if(r==c('StructuredInputDOM').getLength(q)){
var u=q.nextSibling;
if(l(q,u))

return {node:u,
offset:0};}}






return o;},










nextMarkerBoundary:function n(o,p,q){
var r=o.node;



if(c('StructuredInputDOM').isEntityNode(r)&&
(!p||o.offset!==0)){
var s=m.getGrouping(r,q);

if(s!='none')

return {node:o.node,
offset:k
(c('StructuredInputDOM').getText(r),
s,
o.offset,
p)};}





return o;}};



f.exports=m;}),null);

/** js/search/structured_input/StructuredInputCleaner.js */





__d('StructuredInputCleaner',['DOM','StructuredInputDOM','StructuredInputUtil','UserAgent_DEPRECATED','createArrayFromMixed','getElementText','isTextNode'],(function a(b,c,d,e,f,g){















function h(i,j,k){'use strict';
this._node=i;
this._selection=j;
this._wrapText=k;}
h.prototype.




_cleanEntityNode=function(i){'use strict';
var j=i.getAttribute('data-text'),
k=c('StructuredInputDOM').getText(i);

i.style.cssText='';


if(j==k&&c('StructuredInputDOM').containsOnlyText(i,{I:true}))
return null;


var l=[],
m=c('StructuredInputUtil').validateEntityText(i),
n=c('StructuredInputDOM').createIconNode
(JSON.parse(i.getAttribute('data-icon')));



if(!m.entity&&
(m.suffix&&!m.prefix||
m.prefix&&!m.suffix)){

c('StructuredInputDOM').convertToTextNode(i);
i.setAttribute('data-text',k);
return null;}


if(m.prefix)
l.push(this._createTextNode(m.prefix));


if(m.entity){
if(this._selection&&c('getElementText')(i)!==m.entity)
this._selection.markDirty(i);

c('DOM').setContent(i,n?[n,m.entity]:m.entity);
i.setAttribute('data-text',m.entity);
l.push(i);}


if(m.suffix)
l.push(this._createTextNode(m.suffix));


return l;};
h.prototype.





_removeSpecialNodes=function(){'use strict';
var i=c('createArrayFromMixed')
(this._node.getElementsByTagName('script')),

j=c('createArrayFromMixed')(this._node.getElementsByTagName('style'));

i.forEach(c('DOM').remove);
j.forEach(c('DOM').remove);};
h.prototype.




_collapseNodes=function(){'use strict';
for(var i,j=this._node.firstChild;j;j=i){
i=j.nextSibling;



if(!c('isTextNode')(j)&&
!c('StructuredInputDOM').isEntityNode(j)&&
!c('StructuredInputDOM').containsOnlyText(j))


for(var k=j.lastChild;k;k=j.lastChild){
this._node.insertBefore(k,i);
i=k;}}};



h.prototype.




_createTextNode=function(i){'use strict';
if(this._wrapText){
return c('StructuredInputDOM').createTextNode(i);}else 

return document.createTextNode(i);};

h.prototype.




replaceNodes=function(i,j){'use strict';
if(j==null)
return;


var k=i.length?i[i.length-1].nextSibling:null;

i.forEach(function(l){


if(j.indexOf(l)===-1)
c('DOM').remove(l);},

this);

j.reverse().forEach(function(l){
if(i.indexOf(l)===-1)
this._node.insertBefore(l,k);

k=l;},
this);};
h.prototype.




clean=function(){'use strict';
this._removeSpecialNodes();
this._collapseNodes();

var i=[],
j=function(){
if(i.length){
this.replaceNodes(i,this._cleanTextNodes(i));
i.length=0;}}.

bind(this);

Array.from(this._node.childNodes).forEach(function(k){
if(c('StructuredInputDOM').isEntityNode(k)){
this.replaceNodes([k],this._cleanEntityNode(k));
j(i);}else 

i.push(k);}.

bind(this));

j();


if(!this._node.firstChild&&c('UserAgent_DEPRECATED').firefox())
this._node.appendChild(this._createTextNode());};

h.prototype.




endOnText=function(){'use strict';
var i=function(j,k){
if(c('StructuredInputDOM').isEntityNode(j))
this._node.insertBefore
(this._createTextNode(),
k?j:null);}.


bind(this);

i(this._node.firstChild,true);
i(this._node.lastChild,false);};



Object.assign(h.prototype,




{_cleanTextNodes:function(){
var i=function k(l){

return (l.nodeName==='BR'||
l.nodeName==='SPAN'&&j(l));},



j=function k(l){
return l.getAttribute('data-si')&&
c('StructuredInputDOM').containsOnlyText(l)&&
c('StructuredInputDOM').getLength(l)>0;};


return function(k){
if(k.length!=1||!i(k[0])){
var l=k.
map(c('StructuredInputDOM').getText).
join('').
replace(/\s+/g,' ');

return l?[this._createTextNode(l)]:[];}else{

k[0].style.cssText='';
return;}};}


()});


f.exports=h;}),null);

/** js/third_party/selection/DOMSelection.js */
































__d("DOMSelection",[],(function a(b,c,d,e,f,g){

(function(){

var h=this,



i=

{isPreceding:function(o,p){
return p.compareDocumentPosition(o)&2;},


contains:function(o,p){
if(o.compareDocumentPosition!=null){
return o.compareDocumentPosition(p)&16;}else 

return o.contains(p);},



isCursorPreceding:function(o,p,q,r){
if(o===q)
return p<=r;

if(i.isText(o)&&i.isText(q))
return i.isPreceding(o,q);

if(i.isText(o)&&!i.isText(q))
return !i.isCursorPreceding(q,r,o,p);

if(!i.contains(o,q))
return i.isPreceding(o,q);

if(o.childNodes.length<=p)
return false;

if(o.childNodes[p]===q)
return 0<=r;

return i.isPreceding(o.childNodes[p],q);},


isText:function(o){
return (o!=null?o.nodeType==3:false);},


getChildIndex:function(o){
var p=0;
while(o=o.previousSibling)
p++;

return p;}},






j=h.Selection=(function(){
function o(p){
this.win=p;}


o.prototype.hasSelection=function(){
return o.hasSelection(this.win);};


o.prototype.isBidirectional=function(){
return o.isBidirectional(this.win);};


o.prototype.getOrigin=function(){
return o.getOrigin(this.win);};


o.prototype.getFocus=function(){
return o.getFocus(this.win);};


o.prototype.getStart=function(){
return o.getStart(this.win);};


o.prototype.getEnd=function(){
return o.getEnd(this.win);};


o.prototype.trySelection=function(p,q,r,s){
return o.trySelection(this.win,p,q,r,s);};


o.prototype.setSelection=function(p,q,r,s){
return o.setSelection(this.win,p,q,r,s);};


o.prototype.clearSelection=function(){
return o.clearSelection(this.win);};


return o;})
();




function k(){
if(h.document.selection&&/MSIE 9\./.test(navigator.userAgent)){


return false;}else 

return !!h.getSelection;}



if(k()){

j.supported=true;

j.hasSelection=function(o){
var p;
return (p=o.getSelection())&&(p.focusNode!=null)&&(p.anchorNode!=null);};


j.isBidirectional=function(o){
return true;};


j.getOrigin=function(o){
var p;
if(!((p=o.getSelection())&&(p.anchorNode!=null)))
return null;

return [p.anchorNode,p.anchorOffset];};


j.getFocus=function(o){
var p;
if(!((p=o.getSelection())&&(p.focusNode!=null)))
return null;

return [p.focusNode,p.focusOffset];};


j.getStart=function(o){
var p,q,r,s,t,u;
if(!j.hasSelection(o))
return null;

t=j.getOrigin(o),p=t[0],r=t[1];
u=j.getFocus(o),q=u[0],s=u[1];
if(i.isCursorPreceding(p,r,q,s))
return [p,r];

return [q,s];};


j.getEnd=function(o){
var p,q,r,s,t,u;
if(!j.hasSelection(o))
return null;

t=j.getOrigin(o),p=t[0],r=t[1];
u=j.getFocus(o),q=u[0],s=u[1];
if(i.isCursorPreceding(p,r,q,s))
return [q,s];

return [p,r];};


var l=function(o,p,q,s,t,u){
var v=p.getSelection();
if(!v)
return;



if(t==null)
t=q;

if(u==null)
u=s;



if(v.collapse&&v.extend){
v.collapse(q,s);
v.extend(t,u);}else{



r=p.document.createRange();
r.setStart(q,s);
r.setEnd(t,u);



if(o||!j.hasSelection(p)||
(r.endContainer===t&&r.endOffset===u&&
r.startContainer===q&&r.startOffset===s)){

try{v.removeAllRanges();}catch(
w){

}

v.addRange(r);}}};




j.setSelection=l.bind(j,true);

j.trySelection=l.bind(j,false);

j.clearSelection=function(o){

try{var q=o.getSelection();
if(!q)
return;

q.removeAllRanges();}catch(
p){

}};


j.getText=function(o){
var p=o.getSelection();
if(!p)
return;


return p.toString();};}else





if(h.document.selection){

var m=function(o,p,q){
var r,s,t,u,v;





s=o.createElement('a');
r=p.duplicate();
r.collapse(q);
v=r.parentElement();
while(true){
v.insertBefore(s,s.previousSibling);
r.moveToElementText(s);
if(!(r.compareEndPoints((q?'StartToStart':'StartToEnd'),p)>0&&(s.previousSibling!=null)))
break;}





if(r.compareEndPoints((q?'StartToStart':'StartToEnd'),p)===-1&&s.nextSibling){

r.setEndPoint((q?'EndToStart':'EndToEnd'),p);
t=s.nextSibling;
u=r.text.length;}else{


t=s.parentNode;
u=i.getChildIndex(s);}



s.parentNode.removeChild(s);
return [t,u];},


n=function(o,p,q,r,s){
var t,u,v,w,x;


x=0;
t=i.isText(r)?r:r.childNodes[s];
u=i.isText(r)?r.parentNode:r;

if(i.isText(r))
x=s;





w=o.createElement('a');
u.insertBefore(w,t||null);
v=o.body.createTextRange();
v.moveToElementText(w);
w.parentNode.removeChild(w);


p.setEndPoint((q?'StartToStart':'EndToEnd'),v);
return p[q?'moveStart':'moveEnd']('character',x);};




j.supported=true;

j.hasSelection=function(o){
var p;
if(!o.document.selection)
return false;

p=o.document.selection.createRange();
return p&&p.parentElement().document===o.document;};


j.getStart=function(o){
var p;
if(!j.hasSelection(o))
return null;

p=o.document.selection.createRange();
return m(o.document,p,true);};


j.getEnd=function(o){
var p;
if(!j.hasSelection(o))
return null;

p=o.document.selection.createRange();
return m(o.document,p,false);};





j.isBidirectional=function(o){
return false;};


j.getOrigin=function(o){
return j.getStart(o);};


j.getFocus=function(o){
return j.getEnd(o);};


var l=function(o,p,q,r,s,t){

if(s==null)
s=q;

if(t==null)
t=r;


var u=p.document.body.createTextRange();

n(p.document,u,false,s,t);
n(p.document,u,true,q,r);

return u.select();};


j.setSelection=l.bind(j,true);

j.trySelection=l.bind(j,false);

j.clearSelection=function(o){
return o.document.selection.empty();};


j.getText=function(o){
if(!j.hasSelection(o))
return null;

var p=o.document.selection.createRange();
return p&&p.text;};}else 







j.supported=false;}).



call(this);


f.exports=Selection;}),

null);

/** js/search/structured_input/StructuredInputSelection.js */




__d('StructuredInputSelection',['DOM','DOMSelection','Scroll','Vector','StructuredInputUtil','StructuredInputDOM'],(function a(b,c,d,e,f,g){









function h(j){'use strict';
var k=j.ownerDocument;

this.window=k.defaultView||k.parentWindow;
this.root=j;
this.selection=false;
this.start=new i(this,[]);
this.end=new i(this,[]);
this.update();}
h.prototype.




isSupported=function(){'use strict';
return !!(c('DOMSelection')&&c('DOMSelection').hasSelection);};
h.prototype.




update=function(){'use strict';
this.selection=false;
if(this.isSupported()&&this.root==document.activeElement)
if(c('DOMSelection').hasSelection(this.window)){
var j=c('DOMSelection').getStart(this.window),
k=c('DOMSelection').getEnd(this.window),
l=c('DOMSelection').getFocus(this.window);

this.start=this.makeMarker(j);
this.end=this.makeMarker(k);
this.backward=j[0]==l[0]&&j[1]==l[1];
this.selection=this.start.node&&this.end.node;}};


h.prototype.







makeMarker=function(j){'use strict';
if(j[0]===this.root){


return new i(this,[this.root.childNodes[j[1]],0]);}else 

return new i(this,j);};

h.prototype.






getFocus=function(){'use strict';
return this.backward?this.start:this.end;};
h.prototype.






getOrigin=function(){'use strict';
return this.backward?this.end:this.start;};
h.prototype.









move=function(j){'use strict';
if(this.selection){
this.start.move(j);
this.start.snap();
this.end.setPosition(this.start);
return this.apply();}};

h.prototype.








expand=function(j){'use strict';
if(this.selection){
if(c('DOMSelection').isBidirectional()){
this.start.move(!j);
this.start.snap();
this.end.move(j);
this.end.snap();}

return this.apply();}};

h.prototype.






getText=function(){'use strict';
if(this.selection&&this.isSupported()){
var j=c('DOMSelection').getText(this.window);
return j;}};

h.prototype.






getOffset=function(){'use strict';
if(this.selection)
return this.start.rootOffset;};

h.prototype.






getLength=function(){'use strict';
return (this.getText()||"").length;};
h.prototype.








setPosition=function(j,k){'use strict';
this.backward=false;
this.selection=true;

this.start.setPosition
(c('StructuredInputUtil').getMarkerAtOffset(this.root,j));

this.start.snap();

if(k>0){
this.end.setPosition
(c('StructuredInputUtil').getMarkerAtOffset(this.root,j+k));

this.end.snap();}else 

this.end.setPosition(this.start);


return this.apply();};
h.prototype.






hasRange=function(){'use strict';
return this.selection&&
(this.start.node!=this.end.node||
this.start.offset!=this.end.offset);};

h.prototype.




scrollToFocus=function(){'use strict';
var j=5,
k=this.getFocus();

if(k.node){
var l=c('Vector').getElementDimensions(this.root).x,
m=c('Scroll').getLeft(this.root),
n=k.node.offsetLeft+k.node.offsetWidth;

if(n-m<j){
c('Scroll').setLeft(this.root,n-j);}else
if(n-m>l-j)
c('Scroll').setLeft(this.root,n-l+j);}};


h.prototype.






apply=function(){'use strict';
if(this.start.hasChanged()||this.end.hasChanged()){
var j=this.getOrigin().getMarker(true),
k=this.getFocus().getMarker(true);

this.selection=this.selection&&
j&&j.node&&
k&&k.node;

if(this.selection&&this.isSupported()){
this.start.changed=false;
this.end.changed=false;

c('DOMSelection').trySelection
(this.window,
j.node,
j.offset,
k.node,
k.offset);

return true;}}};


h.prototype.





markDirty=function(j){'use strict';
if(c('DOM').contains(j,this.start.node,j))
this.start.changed=true;

if(c('DOM').contains(j,this.end.node,j))
this.end.changed=true;};





function i(j,k){'use strict';
this.selection=j;
this.node=k[0];
this.offset=k[1];
this.rootOffset=this.getRootOffset(k[0],k[1]);
this.sibling=this.node&&this.node.previousSibling;
this.changed=false;}
i.prototype.

hasChanged=function(){'use strict';
return this.changed||!this.isNodeValid();};
i.prototype.

isNodeValid=function(){'use strict';
if(c('StructuredInputDOM').getLength(this.node)>this.offset){
var j=this.node;
while(j=j.parentNode)
if(j==this.selection.root)
return true;}};



i.prototype.

getMarker=function(j){'use strict';
if(this.isNodeValid()&&
(j&&!this.node.firstChild||
!j&&this.node.parentNode==this.selection.root)){

return this;}else 

return c('StructuredInputDOM').getMarker
(this.selection.root,
this.rootOffset,
j);};


i.prototype.

move=function(j){'use strict';
this.node&&this.setPosition
(c('StructuredInputUtil').nextMarkerBoundary
(this.getMarker(false),j,'select'));};
i.prototype.

snap=function(){'use strict';
this.node&&this.setPosition
(c('StructuredInputUtil').snapMarkerToText
(this.getMarker(false),'select'));};
i.prototype.

setPosition=function(j){'use strict';
if(j.offset!=this.offset||j.node!=this.node){
this.changed=true;
this.node=j.node;
this.offset=j.offset;
this.rootOffset=this.getRootOffset(this.node,this.offset);}};

i.prototype.

getRootOffset=function(j,k){'use strict';
var l=0,
m=5;

while(j&&l++<m)
if(j===this.selection.root){
return k;}else{

var n=j;
while(n=n.previousSibling)
k+=c('StructuredInputDOM').getLength(n);

j=j.parentNode;}};





f.exports=h;}),null);

/** js/search/structured_input/StructuredInput.js */






__d('StructuredInput',['csx','cx','fbt','Arbiter','ArbiterMixin','CSS','DataStore','DOM','Event','Input','InputSelection','JSLogger','Keys','Locale','Parent','Scroll','StructuredInputCleaner','StructuredInputDOM','StructuredInputSelection','StructuredInputUtil','Style','UserAgent_DEPRECATED','createArrayFromMixed','createObjectFrom','emptyFunction','getActiveElement','isElementNode','isTextNode','mixin','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g,h,i,j){var k,l,


































m=229,

n=c('createObjectFrom')
([c('Keys').UP,c('Keys').DOWN,c('Keys').LEFT,c('Keys').RIGHT,c('Keys').HOME,c('Keys').END]),

o=c('createObjectFrom')([c('Keys').BACKSPACE,c('Keys').DELETE]),
p=c('createObjectFrom')([c('Keys').SPACE,c('Keys').RETURN]),

q=c('createObjectFrom')('IUB'.split('').map(function(v){
return v.charCodeAt(0);})),



r=c('UserAgent_DEPRECATED').firefox(),
s=c('UserAgent_DEPRECATED').ie(),
t=c('UserAgent_DEPRECATED').webkit();k=babelHelpers.inherits

(u,c('mixin')(c('ArbiterMixin')));l=k&&k.prototype;
function u(v){'use strict';
l.constructor.call(this);
c('DataStore').set(v,'StructuredInput',this);

this._root=v;
this._richInput=c('DOM').find(v,"._586i");
this._textInput=c('DOM').find(v,"._586f");
this._placeholderText=c('DOM').scry(v,"._586j")[0];
this._hintText=c('DOM').find(v,"._586k");
this._contentWidth=null;
this._richWidth=null;
this._hintNodes=[];

c('Arbiter').subscribe(c('JSLogger').DUMP_EVENT,function(w,x){
x.structuredInputState=
{initInputsFinished:!!this._initInputsFinished,
initEventsFinished:!!this._initEventsFinished,
cleanInputPreTogglesFinished:!!this._cleanInputPreTogglesFinished,
cleanInputFinished:!!this._cleanInputFinished,
elements:
{richInput:!!this._richInput,
textInput:!!this._textInput,
placeholderText:!!this._placeholderText,
hintText:!!this._hintText}};}.


bind(this));

this.init();}
u.prototype.

init=function(){'use strict';
this.init=c('emptyFunction');

this._initSelection();
this._initCleaner();
this._initInputs();
this._initInputsFinished=true;
this._initEvents();
this._initEventsFinished=true;

this._scheduledCleanInput=false;
this._richChanged=false;
this._textChanged=false;
this._selectionChanged=false;
this._selectionIgnore=false;
this._imeMode=false;

this.cleanInput();

this.inform('init',null,c('Arbiter').BEHAVIOR_PERSISTENT);};
u.prototype.

_initInputs=function(){'use strict';
this._richInput.contentEditable=true;
this._richInput.spellcheck=false;
this._richInput.tabIndex=0;
this._richInput.setAttribute('aria-label',j._(["Search Facebook","d23c796bd93bfbefa615000c6573c1eb"]));






this._textInput.tabIndex=-1;

this._multiline=this._textInput.nodeName=='TEXTAREA';

if(!c('CSS').shown(this._richInput)){
var v=c('InputSelection').get(this._textInput),
w=c('getActiveElement')()===this._textInput;


c('DOM').setContent
(this._richInput,
c('StructuredInputDOM').encodeText(c('Input').getValue(this._textInput)));

c('CSS').hide(this._textInput);
c('CSS').show(this._richInput);
this.cleanInput();


if(w){
this._richInput.focus();
this.setSelection
({offset:v.start,
length:v.end-v.start});}}




this.togglePlaceholder();
this._toggleHint();};
u.prototype.

_initEvents=function(){'use strict';









var v=null,





















w=false,


x=function(){
this._richChanged=true;
w||this.scheduleCleanInput(true);}.
bind(this),


y=function(){
this._textChanged=true;
w||
this.scheduleCleanInput(false);}.
bind(this),


z=function(){
this._selectionChanged=true;
this.scheduleCleanInput(false);}.
bind(this),


aa=function(){
this._imeMode=true;
this._placeholderText&&c('CSS').hide(this._placeholderText);
c('CSS').hide(this._hintText);}.
bind(this),


ba=function(){
this._imeMode=false;
this._richChanged=true;
this.cleanInput();}.
bind(this);



c('Event').listen(this._richInput,'keydown',function(ca){
v=ca.keyCode;
if(ca.ctrlKey&&ca.keyCode in q){
return ca.kill();}else
if(ca.keyCode in n){
z();}else
if(ca.keyCode===c('Keys').BACKSPACE&&this._deleteTrailingChunk()){
this._richChanged=true;
this.cleanInput();
return ca.kill();}else
if(ca.keyCode in o){
x();}else
if(ca.keyCode==m)
aa();}.

bind(this));

c('Event').listen(this._richInput,'keypress',function(ca){
if(ca.keyCode==c('Keys').RETURN){


this._multiline&&this._insertText("\n");
return ca.kill();}else
if(!this._selectionChanged&&this._selectionIsText()){

y();}else 

x();}.

bind(this));

if(!w){
c('Event').listen(this._richInput,'keyup',function(ca){

if((this._imeMode||ca.keyCode!=v)&&
ca.keyCode in p){
ba();
return ca.kill();}else
if(this._imeMode){


this._textChanged=true;
this.cleanInput();}}.

bind(this));

if(r)




c('Event').listen(this._richInput,'input',function(){
this._textChanged=true;
this.cleanInput();}.
bind(this));}else{




c('Event').listen(this._richInput,'compositionstart',aa);

c('Event').listen(this._richInput,'compositionend',function(){


setTimeout(ba,0);});


c('Event').listen(this._richInput,'input',function(){


this._textChanged=true;


if(!this._imeMode)
if(!this._richChanged){
this.cleanInput();}else 



this.scheduleCleanInput();}.


bind(this));}



c('Event').listen(document,'selectionchange',function(){
if(this._selectionIgnore){
this._selectionIgnore=false;}else 

this._selectionChanged=true;}.

bind(this));

c('Event').listen(this._richInput,'mousedown',function(){
this._selectionChanged=true;
this._selectionLength=0;
this._selectionOffset=0;}.
bind(this));

c('Event').listen(this._richInput,'mouseup',function(){

this._selectionChanged=true;
this.scheduleCleanInput();}.
bind(this));

c('Event').listen(this._richInput,'cut',function(){
this._richChanged=true;
this.scheduleCleanInput(false);}.
bind(this));


c('Event').listen(this._richInput,'paste',function(ca){
this._richChanged=true;
this.scheduleCleanInput(true);}.
bind(this));

c('Event').listen(this._richInput,'drop',function(ca){

this.focus();
this.selectAll();

this._insertClipboard(ca&&ca.dataTransfer);
return ca.kill();}.
bind(this));


c('Event').listen(this._richInput,'dragover',function(ca){
ca.dataTransfer.dropEffect='move';
ca.dataTransfer.effectAllowed='move';
return ca.kill();});



c('Event').listen(this._richInput,'focus',function(ca){
this._toggleHint();
this.inform('focus');}.
bind(this));

c('Event').listen(this._richInput,'blur',function(ca){
c('CSS').hide(this._hintText);


this._imeMode=false;
this._richChanged=true;
this.scheduleCleanInput(false);

this.inform('blur');}.
bind(this));};
u.prototype.




_initCleaner=function(){'use strict';
this._cleaner=new (c('StructuredInputCleaner'))
(this._richInput,
this._selection,
true);};

u.prototype.




_initSelection=function(){'use strict';
this._selection=new (c('StructuredInputSelection'))(this._richInput);
this._selectionLength=0;
this._selectionOffset=0;};
u.prototype.




_insertClipboard=function(v){'use strict';
if(v&&typeof v.getData==='function'){
var w=v.getData('Text');
this._insertText(w);}};

u.prototype.

_deleteTrailingChunk=function(v){'use strict';
var w=this.getSelection();
if(w.length>0||w.offset===0)
return false;


var x=this.getSelection().offset-1,
y=c('StructuredInputUtil').getMarkerAtOffset(this._richInput,x);

if(y&&
c('StructuredInputDOM').isEntityNode(y.node)&&
c('StructuredInputUtil').getGrouping(y.node,'select')!=='none'){
c('DOM').remove(y.node);
return true;}


return false;};
u.prototype.




_selectionIsText=function(){'use strict';
var v=this._selection.start.node,
w=this._selection.end.node;

return v&&v===w&&
!c('StructuredInputDOM').isEntityNode(v)&&
!c('StructuredInputDOM').isEntityNode(v.parentNode);};
u.prototype.




_insertText=function(v){'use strict';
if(v){
var w=c('DOM').create('div',{},v);
return this._insertNodes(w);}};

u.prototype.




_insertHTML=function(v){'use strict';
if(v){
var w=c('DOM').create('div'),
x=new (c('StructuredInputCleaner'))(w,null,false);

w.innerHTML=v;
x.clean();
return this._insertNodes(w);}};

u.prototype.




_insertNodes=function(v){'use strict';
if(document.selection){
document.selection.createRange().pasteHTML(v.innerHTML);}else 

document.execCommand('insertHTML',false,v.innerHTML);


this._richChanged=true;
this.cleanInput();};
u.prototype.





togglePlaceholder=function(v){'use strict';
if(!this._placeholderText)
return;


var w=c('StructuredInputDOM').getLength(this._richInput)===0;

if(v&&w){
c('CSS').show(this._placeholderText);}else 

c('CSS').conditionShow
(this._placeholderText,
w&&!this._imeMode);};


u.prototype.




_toggleHint=function(){'use strict';
var v=c('createArrayFromMixed')(this._hintNodes),
w=null,
x='',
y=c('StructuredInputDOM').getText(this._richInput).toLowerCase();

if(!this.hasFocus())
return;




if(this._contentOverflows()){
c('CSS').hide(this._hintText);
return;}



while(v.length&&x.length<y.length){
w=v.shift();
x+=c('StructuredInputDOM').getText(w);}



if(y.length&&
x.substr(0,y.length).toLowerCase()==
y.toLowerCase()){



c('DOM').setContent
(this._hintText,
Array.from(this._richInput.cloneNode(true).childNodes).filter
(function(aa){
return aa.tagName!=='BR';}));





var z=c('StructuredInputDOM').createTextNode
(x.substr(y.length));

v.unshift(z);
c('DOM').appendContent(this._hintText,c('DOM').create('span',
{className:"_586h"},
v));

c('CSS').show(this._hintText);
c('CSS').hide(this._placeholderText);}else 

c('CSS').hide(this._hintText);};

u.prototype.




_contentOverflows=function(){'use strict';
if(this._richWidth===null)
this._richWidth=this._richInput.clientWidth;


if(this._contentWidth===null){
var v=this._richInput.lastChild;
this._contentWidth=c('isElementNode')(v)?
v.offsetLeft+v.offsetWidth:0;}


return this._contentWidth>this._richWidth;};
u.prototype.





_forceTop=function(){'use strict';
if(!this._multiline)
c('Scroll').setTop(this._richInput,0);

c('Scroll').setTop(this._root,0);};
u.prototype.




_createStructureNodes=function(v){'use strict';
return v.map(function(w){
return w.uid||w.type&&w.type!='text'?
c('StructuredInputDOM').createEntityNode(w,w.display||{}):
c('StructuredInputDOM').createTextNode(w.text);}.
bind(this));};
u.prototype.





_suppressInput=function(){'use strict';




if(r||s){
if(this._richClean)
return;



this._richClean=this._richInput.cloneNode(true);
this._richClean.contentEditable=false;
this._root.insertBefore(this._richClean,this._richInput.nextSibling);
c('Scroll').setLeft(this._richClean,c('Scroll').getLeft(this._richInput));

c('Style').set(this._richInput,'padding',0);
c('Style').set(this._richInput,'height',0);}};

u.prototype.




_revealInput=function(){'use strict';
if(!this._richClean)
return;


c('Style').set(this._richInput,'height','');
c('Style').set(this._richInput,'padding','');
this._root.removeChild(this._richClean);
this.focus();
this._richClean=null;};
u.prototype.




_cleanInput=function(){'use strict';
var v;

if(this._textChanged&&!this._richChanged){
this._selection.update();
v='change';}else
if(this._richChanged||this._selectionChanged){
this._selection.update();

if(this._richChanged){
this._contentWidth=null;
this._cleaner.clean();
this._cleaner.endOnText();
this._selection.apply();
v='change';}


if(this._selectionChanged){
this._cleanSelection();
if(this._selectionLength||!this._richChanged)
v='select';}}





this._revealInput();
this._forceTop();

this._cleanInputPreTogglesFinished=true;


if(this._richChanged||this._textChanged){
this.togglePlaceholder();
this._toggleHint();}



this._selectionIgnore=true;
this._selectionChanged=false;
this._richChanged=false;
this._textChanged=false;

this._cleanInputFinished=true;

v&&this.inform(v);};
u.prototype.




_cleanSelection=function(){'use strict';
var v=this._selection.getLength(),
w=this._selection.getOffset();

if(v){

this._selection.expand(v>=this._selectionLength);
v=this._selection.getLength();
w=this._selection.getOffset();}






this._selectionLength=v;
this._selectionOffset=w;};
u.prototype.






cleanInput=function(){'use strict';
this._scheduledCleanInput||this._cleanInput();};
u.prototype.







scheduleCleanInput=function(v){'use strict';
v&&this._suppressInput();

if(!this._scheduledCleanInput){
this._scheduledCleanInput=true;
c('setTimeoutAcrossTransitions')(function(){
this._cleanInput();
this._scheduledCleanInput=false;}.
bind(this),0);}};

u.prototype.




setEnabled=function(v){'use strict';
this._textInput.disabled=!v;
this._richInput.contentEditable=v;};
u.prototype.

getRoot=function(){'use strict';
return this._root;};
u.prototype.

getRichInput=function(){'use strict';
return this._richInput;};
u.prototype.




getEnabled=function(){'use strict';
return !this._textInput.disabled;};
u.prototype.




getText=function(){'use strict';
return c('StructuredInputDOM').getDecodedText(this._richInput);};
u.prototype.




setText=function(v){'use strict';
c('DOM').setContent(this._richInput,c('StructuredInputDOM').createTextNode(v));

this._richChanged=false;
this._selectionChanged=false;
this.inform('change');};
u.prototype.








setHint=function(v){'use strict';
this._hintNodes=this._createStructureNodes(v);
this._toggleHint();};
u.prototype.









getStructure=function(){'use strict';
var v=[];
Array.from(this._richInput.childNodes).forEach(function(w){
var x=!c('isTextNode')(w),
y=c('StructuredInputDOM').getDecodedText(w);

y.length&&v.push
({text:y,
uid:x?w.getAttribute('data-uid'):null,
type:x&&w.getAttribute('data-type')||'text',
isLocal:x&&w.getAttribute('data-is-local'),
categoryName:x?w.getAttribute('data-category-name'):null});});


return v;};
u.prototype.




setStructure=function(v){'use strict';
c('DOM').setContent(this._richInput,this._createStructureNodes(v));
this._cleaner.clean();
this._cleaner.endOnText();
this.togglePlaceholder();
this._toggleHint();

this._richChanged=false;
this._selectionChanged=false;
this.inform('change');};
u.prototype.




getContentDimensions=function(){'use strict';
var v=this._richInput.lastChild;

return {width:v?v.offsetLeft+v.offsetWidth:0,
height:v?v.offsetTop+v.offsetHeight:0};};

u.prototype.




getSelection=function(){'use strict';
if(this._selection)

return {offset:this._selection.getOffset(),
length:this._selection.getLength()};};


u.prototype.





setSelection=function(v){'use strict';
if(this.hasFocus()&&this._selection){
this._selection.update();
this._selection.setPosition(v.offset,v.length);
this._selection.scrollToFocus();
this._selectionChanged=false;

this.inform('select');}};

u.prototype.




moveSelectionToEnd=function(){'use strict';
this.setSelection
({length:0,
offset:c('StructuredInputDOM').getLength(this._richInput)});};

u.prototype.




isSelectionAtEnd=function(){'use strict';
var v=this.getSelection().offset,
w=c('StructuredInputDOM').getLength(this._richInput);

return v>=w;};
u.prototype.




selectAll=function(){'use strict';
this.setSelection
({offset:0,
length:c('StructuredInputDOM').getLength(this._richInput)});};

u.prototype.




hasFocus=function(){'use strict';
return c('DOM').contains(this._root,document.activeElement);};
u.prototype.




focus=function(){'use strict';
this._richInput.focus();};
u.prototype.




blur=function(){'use strict';

var v=
{position:'absolute',
top:0,
width:'1px',
height:'1px'};

if(c('Locale').isRTL()){
v.right='-100px';}else 

v.left='-100px';


var w=c('DOM').create('input',
{type:'text',
tabIndex:-1,
style:v});

c('DOM').appendContent(this._root,w);

var x=function y(){


if(this.hasFocus()||
t&&document.activeElement===document.body){
w.focus();
w.blur();}};



this.blur=x;
this.blur();};



u.getInstance=function(v){
var w=c('Parent').bySelector(v,"._586g");
if(!w)
throw new Error('No DOMElement structured input found using '+v);

return c('DataStore').get(w,'StructuredInput')||new u(w);};


f.exports=u;}),null);

/** js/search/facebar/FacebarTypeaheadInput.js */





__d('FacebarTypeaheadInput',['csx','ArbiterMixin','DOM','FacebarStructuredText','Locale','SimpleStructuredInput','StructuredInput','Vector','mixin'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,











k=
{text:
{className:"text",
group:"all",
select:"none"},

ent:
{className:"entity",
group:"all",
select:"group"},

'ent:hashtag_exact':
{className:"entity",
group:"hashtag",
select:"none"}};








function l(n){
return Object.assign(n.toStruct(),
{display:k[n.getType()]||
k[n.getTypePart(0)]});}

i=babelHelpers.inherits

(m,c('mixin')(c('ArbiterMixin')));j=i&&i.prototype;
function m(n){
j.constructor.call(this);
this.root=n;
var o=
c('DOM').scry(this.root,"._586i")[0];
if(o){
this.input=c('StructuredInput').getInstance(n);}else 

this.input=c('SimpleStructuredInput').getInstance(n);

this.value=null;
this.selection={offset:0,length:0};
this.resetOnChange=true;
this.initEvents();}
m.prototype.

initEvents=function(){
var n=function(o,p){
this.inform(o,p);}.
bind(this);

this.input.subscribe('blur',n);
this.input.subscribe('focus',n);
this.input.subscribe('change',function(o,p){
if(this.resetOnChange)
this.value=null;

this.inform('change',p);}.
bind(this));};
m.prototype.

togglePlaceholder=function(n){
if(this.input instanceof c('StructuredInput'))
return this.input.togglePlaceholder(n);

return null;};
m.prototype.

focus=function(){
this.input.focus();};
m.prototype.

blur=function(){
this.input.blur();};
m.prototype.

getElement=function(){
return this.root;};
m.prototype.

getRawInputElement=function(){
var n=
c('DOM').scry(this.root,"._586i")[0];
if(n==null)
return c('DOM').scry
(this.root,
"._1frb")[
0];

return n;};
m.prototype.

getValue=function(){
if(this.value==null)
this.value=c('FacebarStructuredText').fromStruct(this.input.getStructure());

return this.value;};
m.prototype.

getLength=function(){
return this.getValue().getLength();};
m.prototype.

resetPlaceholder=function(){
this.input.resetPlaceholder();};
m.prototype.

setValue=function(n,o){
this.value=n;
this.resetOnChange=!!o;

var p=n.toArray().map(l);
this.input.setStructure(p);
this.input.setSelection
({offset:n.getLength(),
length:0});


this.resetOnChange=true;};
m.prototype.

storeSelection=function(){
this.selection=this.input.getSelection();};
m.prototype.

restoreSelection=function(){
if(this.selection)
this.input.setSelection(this.selection);};

m.prototype.

clearSelection=function(){
this.input.setSelection
({offset:this.getLength(),
length:0});};

m.prototype.

setHint=function(n){
var o=n&&!n.hasRTL()&&!c('Locale').isRTL()?
n.toArray().map(l):
[];
this.input.setHint(o);};
m.prototype.

isSelectionAtEnd=function(){
return this.input.isSelectionAtEnd();};
m.prototype.

selectInput=function(n){
this.input.setSelection
({offset:n||0,
length:this.getLength()});};





Object.assign(m.prototype,
{events:['change','focus','blur']});


f.exports=m;}),null);

/** js/search/facebar/FacebarTypeaheadCore.js */







__d('FacebarTypeaheadCore',['csx','cx','invariant','Arbiter','ArbiterMixin','Base64','CSS','DOM','Event','FacebarGlobalOptions','FacebarJSConstants','FacebarKeywordSearchUtils','FacebarResultStoreUtils','FacebarStructuredText','FacebarTypeaheadInput','Keys','KeywordsSearchResultConfig','Parent','Random','URI','arrayContains','getActiveElement','mixin','setTimeout'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';var k,l;k=babelHelpers.inherits





























(m,c('mixin')(c('ArbiterMixin')));l=k&&k.prototype;













function m(n){
l.constructor.call(this);this.events=['session','focus','select','change','execute','blur','focusStartTime','open'];
Object.assign(this,n);}
m.prototype.


init=function(n,o,p){



if(window.getSelection===null)
throw new Error('Facebar: window.getSelection is null!');


this.init=function(){};
this.data=n;
this.view=o;
this.root=p;
this.facebarRoot=c('Parent').bySelector(p,"._585-");
this.button=
c('DOM').find(this.facebarRoot,"._4w98");

this.windowFocused=true;
this.isFocused=false;
this.hoverAnimation=null;

this.stickyQuery=null;
this.settedQuery=null;
this.selectedQuery=null;
this.currentQuery=null;
this.isSuggestionBagdeVisible=false;

this.initSubcomponents();
this.initEvents();
this.checkValue();
this.checkSingleState();
this.checkLocal();
this.checkCategoryName();};
m.prototype.

initSubcomponents=function(){
var n=c('DOM').find(this.root,"._5861");
this.input=new (c('FacebarTypeaheadInput'))(n);
this.view.setInputElement(this.input.getRawInputElement());};
m.prototype.

initEvents=function(){

c('Event').listen(this.root,'keydown',this.keydown.bind(this));
c('Event').listen(this.root,'keyup',this.keyup.bind(this));
c('Event').listen(this.root.parentNode,'mousedown',this.mousedown.bind(this));
c('Event').listen(this.view.getElement(),'mousedown',
this.mousedown.bind(this));
c('Event').listen(window,'focus',this.focusWindow.bind(this));
c('Event').listen(window,'blur',this.blurWindow.bind(this));


this.view.subscribe('select',this.selectView.bind(this));
this.view.subscribe('highlight',this.highlightView.bind(this));
this.view.subscribe('render',this.highlightView.bind(this));
this.view.subscribe('hideHelp',this.performQuery.bind(this));

this.input.subscribe('focus',this.focusInput.bind(this));
this.input.subscribe('blur',this.blurInput.bind(this));
this.input.subscribe('change',this.changeInput.bind(this));

this.data.subscribe('activity',this.typeaheadActivity.bind(this));
this.data.subscribe('respond',this.completeData.bind(this));
this.data.subscribe('nullstateReady',
this.performQueryIfVisible.bind(this));
this.data.subscribe('reloadNullstate',this.performQuery.bind(this));

c('Arbiter').subscribe
('FacebarTypeahead.clearRecentSearches',
function(){return this.clearRecentSearches();}.bind(this));

c('Arbiter').subscribe
('FacebarTypeahead.focus',
function(){
this.input.focus();
c('setTimeout')(function(){
this.input.clearSelection();}.
bind(this),0);}.
bind(this));


c('Event').listen(this.button,'click',this.buttonDownOrClick.bind(this));
c('Event').listen(this.button,'mousedown',this.buttonDownOrClick.bind(this));
c('Event').listen(this.button,'mouseup',this.buttonUp.bind(this));


c('setTimeout')(this.initFocus.bind(this),0);};
m.prototype.




initFocus=function(){
if(!this.lazyFocused&&
c('DOM').contains(this.input.root,c('getActiveElement')())){
this.lazyFocused=true;
this.isFocused=true;
this._newSession();


this.inform('focus',
{catchup:true});

this.open(true);}};

m.prototype.

setStartTime=function(n){
this.inform('focusStartTime',{time:n});};
m.prototype.




cleanQuery=function(n){

n=babelHelpers['extends']({},
n)||
{};
if(!n.structure)
n.structure=new (c('FacebarStructuredText'))();

if(!c('FacebarGlobalOptions').allowGrammar||
c('FacebarJSConstants').nonGrammarTypes[n.type])
n.structure=
c('FacebarStructuredText').fromString(n.structure.toString());



n.structure instanceof c('FacebarStructuredText')||j(0,
'Expected instance of FacebarStructuredText');


return n;};
m.prototype.




_unlockQuery=function(){
var n=this.input.getValue();
if(n.hasType('ent')&&n.trim().getCount()===1){
this.input.storeSelection();
this.input.setValue(c('FacebarStructuredText').fromString(n.toString()));
this.input.restoreSelection();}};

m.prototype.




setPageQuery=function(n){
n=this.cleanQuery(n);


var o=this.input.getValue(),
p=n.structure,
q=!p.isEmptyOrWhitespace()&&
(o.isEmptyOrWhitespace()||
!o.matches(p));

return this.selectQuery(n,q);};
m.prototype.






selectQuery=function(n,o){
o=o!==false;
n=this.cleanQuery(n);

if(o||!this.selectedQuery){
if(o||this.getValue().isEmptyOrWhitespace())
this.setQuery(n);

this.selectedQuery=n;}


return n;};
m.prototype.




completeSelection=function(){
var n=this.view.getSelection();
if(n&&!n.search){
this.data.saveResult(n);
n.structure=n.structure.pad();
this.setQuery(n);
return true;}

return false;};
m.prototype.







setQuery=function(n){var o=arguments.length<=1||arguments[1]===undefined?true:arguments[1];
n=this.cleanQuery(n);


if(n.structure.hasType('blank'))
n.structure=new (c('FacebarStructuredText'))
(n.structure.toArray().filter(function(p){
return p.getType()!='blank';}));




this.input.setValue(n.structure);

this.settedQuery=n;
this.stickyQuery=o===false?this.stickyQuery:n;
this.checkValue();
this.checkSingleState();
this.checkLocal();
this.checkCategoryName();};
m.prototype.




checkValue=function(){var n=arguments.length<=0||arguments[0]===undefined?false:arguments[0];

if(!n&&
this.value&&
this.value.getHash()===this.input.getValue().getHash())

return;

this.performQueryIfVisible();
this.showSearchSuggestionBadgeIfPossible();};
m.prototype.

showSearchSuggestionBadgeIfPossible=function(){
if(this.isNullState()){
if(!this.isSuggestionBagdeVisible&&
this.data.resultStore.injectedSuggestionCount){
c('Arbiter').inform('FacebarTypeahead.showSuggestionBadge');
this.isSuggestionBagdeVisible=true;}}else

if(this.isSuggestionBagdeVisible){
c('Arbiter').inform('FacebarTypeahead.hideSuggestionBadge');
this.isSuggestionBagdeVisible=false;}};


m.prototype.



checkSingleState=function(){
var n=this.input.getValue();


this.data.setSingleState
(n.getCount()===1&&n.hasType('ent'));};

m.prototype.




checkLocal=function(){
var n=this.input.getValue();


this.data.setLocal
(n.getCount()===1&&n.isLocal());};

m.prototype.




checkCategoryName=function(){
var n=this.input.getValue();


if(n.getCategoryName()!==null)
this.data.setCategoryName(n.getCategoryName());};

m.prototype.




isNullState=function(){
return this.input.getValue().getHash()==='';};
m.prototype.




performQueryIfVisible=function(){
if(!this.view.visible)
return;

this.performQuery();};
m.prototype.




performQuery=function(){
this.value=this.nextQuery=this.getValue();



if(c('FacebarGlobalOptions').graphSearchV2)
this.view.resetIndex();

this.data.query(this.nextQuery);
this.currentQuery=this.nextQuery;};
m.prototype.

requery=function(){
if(this.currentQuery)
this.data.query(this.currentQuery);};

m.prototype.




executeQuery=function(n){

var o=this.isNullState();
n=this.cleanQuery(n);
if(c('FacebarGlobalOptions').facebar_use_js_session_id)
n.csid=String(c('Random').uint32())+String(c('Random').uint32());

var p=this.inform('execute',n),

q=this.getSessionID();
this.close();

if(c('FacebarGlobalOptions').allowGrammar){
this.selectQuery(n);}else 

this.selectQuery();


if(c('FacebarGlobalOptions').hasRecentSearchNullState&&
n.type!=='shortcut'&&
(!o||n.isInjectedSuggestion)){
this.data.resultStore.addRecentEntryToNullState(n);
if(n.isInjectedSuggestion){
c('Arbiter').inform('FacebarTypeahead.removeInjectedSuggestion');


--this.data.resultStore.injectedSuggestionCount;

this.performQuery();}}



if(!p)
this._navigateToQuery(n,q,n.csid);};

m.prototype.

getSearchType=function(){
return 'facebar';};
m.prototype.




_newSession=function(){
if(this._sessionID!=null)
return;

this._sessionID=Math.random().toString();
this.inform('session',this._sessionID,c('Arbiter').BEHAVIOR_STATE);};
m.prototype.




_closeSession=function(){
this._sessionID=null;
this.inform('session',null,c('Arbiter').BEHAVIOR_STATE);};
m.prototype.

getSessionID=function(){
return this._sessionID;};
m.prototype.




_navigateToQuery=function(n,o,p){

var q=this.data.facebarConfig;
if(n.uri){
n.uri.addQueryData(n.extra_uri_params);
n.uri.addQueryData({ref:'br_tf'});

var r=
n.uid!=null&&n.uid.match(/^[0-9]+$/)!=null;

if(n.structure&&
(n.type=='websuggestion'||
n.type==c('KeywordsSearchResultConfig').result_type||
n.type=='grammar'&&(!q||
String(n.uri.getPath()).startsWith(q.search_path))||
c('FacebarGlobalOptions').hasKeywordOnlyTypeahead&&r)){

var s=this.data.getRawStructure(n.structure).text_form,
t=c('Base64').encode(encodeURIComponent(s)).
replace(/\=+$/,''),

u=


{sid:o,
qs:t,
gv:this.data.getQueryData().grammar_version};

if(p)
u.csid=p;

var v=c('Base64').encode
(JSON.stringify(u)).
replace(/\=+$/,'');
n.uri.addQueryData
({ref:v,
bs:n.alternateSemantic});}


n.uri.go();
return;}};

m.prototype.




reset=function(){
this.selectQuery();
this.inform('reset');
this.showSearchSuggestionBadgeIfPossible();


c('FacebarKeywordSearchUtils').clearSelectedTabInfo();};
m.prototype.




open=function(n){
this.inform('open');

this.view.show(this.facebarRoot.offsetWidth);
this.input.focus({catchup:n});
this.checkValue(true);
this.checkSingleState();
this.checkLocal();
this.checkCategoryName();
this.highlightButton();

if(!this.isFocused){
this.isFocused=true;
this._newSession();
this.inform('focus');}};

m.prototype.




close=function(){
this._closeSession();

if(this.inform('close')===false)
return;


if((!this.value||this.value.isEmptyOrWhitespace())&&
this.selectedQuery){
this.input.setValue(this.selectedQuery.structure);}else
if(this.stickyQuery)
this.input.setValue(this.stickyQuery.structure);


this.input.setHint(null);
this.view.hide();
this.view.setAutoSelect(false);
this.inform('session',null,c('Arbiter').BEHAVIOR_STATE);

this.isFocused=false;

this.unlightButton();};
m.prototype.

getElement=function(){
return this.root;};
m.prototype.

getValue=function(){
return this.input.getValue();};
m.prototype.

getText=function(){
return this.getValue().toString();};
m.prototype.

submitQuery=function(n){
if(c('FacebarGlobalOptions').graphSearchV2&&this.view.index<0){

var o=this.input.getValue(),
p=this.data.getRawStructure(o);
if(p&&!p.is_empty){
var q=!p.raw_text?
c('FacebarResultStoreUtils').getRawTextFromStructured
(o.toArray()):

p.raw_text,
r=c('FacebarKeywordSearchUtils').makeFacebarEntry(q);
r.position=n;
this.inform('magSearch',r);
this.executeQuery(r);}}else 


this.view.select();};

m.prototype.

keydown=function(event){
var n=true,
o=c('Event').getKeyCode(event);



if(event.metaKey===true)
this.metaOnKeyDown=true;


if(!this.isFocused)
this.open();


switch(o){
case c('Keys').ESC:
this.reset();
this.close();
break;
case c('Keys').RIGHT:
n=this.input.isSelectionAtEnd()&&this.completeSelection();
break;
case c('Keys').UP:
this.view.prev();
break;
case c('Keys').DOWN:
this.view.next();
break;
case c('Keys').RETURN:


var p=-2;
this.submitQuery(p);
break;
case c('Keys').PAGE_UP:
this.view.first();
break;
case 222:
var q=this.input.value.trim();

if(!event.getModifierState('shift')&&
q.endsOnType('ent'))
this.input.setValue(q);


n=false;
break;









default:var r=
o<=46&&o!==8&&o!==32,
s=o>=112&&o<=126,
t=o===144||o===145,

u=o===91||o===92||
o===93||o===224;

if(!r&&!s&&
!t&&!event.metaKey&&!u){
this.data.setSingleState(false);
this.data.setLocal(false);

if(c('FacebarGlobalOptions').autohighlight)
this.view.setAutoSelect(true);}


this.stickyQuery=null;
n=false;
break;}


this.input.storeSelection();

if(n){
event.preventDefault();
event.stopPropagation();}};

m.prototype.

keyup=function(event){
var n=c('Event').getKeyCode(event),

o=
n<=46&&n!==8&&n!==32,
p=n>=112&&n<=126,
q=n===144||n===145,

r=n===91||n===92||
n===93||n===224;


if(!o&&
!p&&
!q&&
!event.metaKey&&
!r&&
!this.metaOnKeyDown)

if(c('FacebarGlobalOptions').unlockTextOnKeypress)
this._unlockQuery();


if(!r)
this.metaOnKeyDown=false;};

m.prototype.

mousedown=function(event){
if(c('FacebarGlobalOptions').autohighlight)
this.view.setAutoSelect(true);

this.input.storeSelection();



if(c('Parent').bySelector
(event.target,
"._50c9"))

event.preventDefault();};

m.prototype.

focusWindow=function(){
this.windowFocused=true;};
m.prototype.

blurWindow=function(){
this.windowFocused=false;};
m.prototype.

selectView=function(n,o){
if(!o||!o.selected)
return;

this.inform('select',o);

var p=this.cleanQuery(o.selected);
this.executeQuery(p);};
m.prototype.

highlightView=function(){
var n=this.view.getSelection();
if(c('FacebarGlobalOptions').graphSearchV2){
this.input.setHint(n?n.structure:null);}else 

n&&this.input.setHint(n.structure);};

m.prototype.

blurInput=function(){


c('setTimeout')(function(){
if(this.windowFocused||c('URI').getRequestURI().getSubdomain()==='apps'){
this.input.togglePlaceholder();
this.close();}}.

bind(this),0);};
m.prototype.

changeInput=function(){
this.inform('change');
this.checkValue();
this.checkLocal();
this.inform('change_end');};
m.prototype.

focusInput=function(){
this.open();
this.input.togglePlaceholder(false);};
m.prototype.

updateData=function(){
this.view.setLoading(this.loading);};
m.prototype.

completeData=function(n,o){
if(o.forceDisplay||
this.value&&this.value.matches(o.value)){
var p=c('FacebarGlobalOptions').graphSearchV2?
!o.results.length:
!o.results.length&&!this.loading&&
o.isEmptyResults;
this.view.render
(o.value,
o.results,
o.isAsync,
p);



if(this.tabQueued&&this.completeSelection())
delete this.tabQueued;}};


m.prototype.

typeaheadActivity=function(n,o){
this.fetching=o.activity;




if(this.loading!==this.fetching){
this.loading=this.fetching;
this.updateData();}};

m.prototype.

getNameTextFromSelected=function(){
var n=this.settedQuery&&this.settedQuery.semantic,
o=this.data.facebarConfig&&
this.data.facebarConfig.name_functions,


p=n&&o&&
n.match(/[a-z-]+\([^()]+\)/g);

if(p)
for(var q=0;q<p.length;q++){


var r=p[q].match(/([a-z-]+)\(([^()]+)\)/);
if(r&&c('arrayContains')(o,r[1]))
return r[2];}




return this.value.toString();};
m.prototype.

clearRecentSearches=function(){
this.data.resultStore.clearRecentSearches();};
m.prototype.

highlightButton=function(){
c('CSS').addClass(this.button,"_4w97");};
m.prototype.

unlightButton=function(){

if(c('CSS').matchesSelector(this.button,"._4w97"))

c('CSS').removeClass(this.button,"_4w97");};

m.prototype.

buttonDownOrClick=function(event){


event.preventDefault();};
m.prototype.

buttonUp=function(){
if(!this.isFocused){
this.focusInput();}else 



this.submitQuery(-1);};

m.


clearRecentSearches=function(){
c('Arbiter').inform('FacebarTypeahead.clearRecentSearches');};



f.exports=m;}),null);

/** js/search/facebar/FacebarTypeaheadRecorder.js */





__d('FacebarTypeaheadRecorder',['Arbiter','Event','FacebarGlobalOptions','FacebarJSConstants','FacebarKeywordSearchUtils','FacebarTimerUtils','Keys','SearchTypeaheadRecorder','URI','clickRefAction'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits












(j,c('SearchTypeaheadRecorder'));i=h&&h.prototype;
function j(k){
i.constructor.call(this,k);
this.userText="";
this.nullStateCandidates=null;
this.singleStateCandidates=null;

this.queryTimes={};
this._sessionDisabled=false;
this.type="facebar";
this._maxQueryID=0;

this._isQueryMatch=true;
this._bootstrapSize=null;}
j.prototype.




initEvents=function(k){

k.getCore().subscribe
('session',
function(l,m){
if(m===null){
this.sessionEnd();}else 

this.sessionStart(m);}.

bind(this));


k.getCore().subscribe('select',function(l,m){
this.recordStat
('time_between_select_and_last_render',
Date.now()-this._lastRenderTime);

if(this._firstKeypressTime!=null)
this.recordStat
('keypress_to_select_time',
Date.now()-this._firstKeypressTime);


this.recordSelectInfo(m);}.
bind(this));

k.getCore().subscribe('magSearch',function(l,m){
this.recordMagSearch(m);}.
bind(this));

k.getCore().input.subscribe('shortcut',function(l,m){
this.recordShortcut(m);}.
bind(this));

k.getCore().subscribe
('quickSelectRedirect',
function(l,m){
this.recordQuickSelectInfo(m);}.
bind(this));


k.getView().subscribe('render',function(l,m){

if(this.data._isInjectedSuggestionFlow)
return;


this.recordRender(m);
if(this.allFromNullState){
this.nullStateCandidates=this.buildListTypeaheadRecords();}else
if(this.allFromSingleState)
this.singleStateCandidates=this.buildListTypeaheadRecords();


this._lastRenderTime=Date.now();}.
bind(this));

k.getView().subscribe('show',function(l,m){
if(!this.data.lastNullOrSingleStateFetchStartTime)
return;


this.recordStat
('time_render_null_state',
Date.now()-this.data.lastNullOrSingleStateFetchStartTime);

this.data.lastNullOrSingleStateFetchStartTime=null;}.
bind(this));

k.getView().subscribe
('logPerformanceTiming',
function(l,m){
this.performanceTimings[m.field]=m.value;}.
bind(this));


k.data.subscribe('query',function(l,m){
if(!m.value.isEmpty())
this.recordCountStat('num_queries');

this.recordAvgStat('num_results_from_cache',m.results.length);
this.queryTimes[m.queryId]=
{send:c('FacebarTimerUtils').getTimestamp()};}.

bind(this));

k.data.subscribe('sending_global_request',function(l,m){
var n=m.getData().value;
if(!n)
return;

this.backendQueries.push(n);}.
bind(this));


k.data.subscribe('sending_request',function(l,m){
var n=m.data.value;
if(!n)
return;

this.backendQueries.push(n);}.
bind(this));

k.subscribe('navigation',function(l,m){
if(m&&m.structure){
this.recordStat('navigation_input',
JSON.stringify(m.structure.toStruct()));
this.recordStat('navigation_text',m.structure.toString());}}.

bind(this));

k.data.subscribe
('response_received',
function(l,m,n){
if(this.queryTimes[m.queryId]){
var o=this.queryTimes[m.queryId];
o.recv=c('FacebarTimerUtils').getTimestamp()-o.send;
if(m&&m.payload)
o.payload_size=JSON.stringify(m.payload).length;}}.


bind(this));

k.data.subscribe
('remote_query_latency',
function(l,m){
if(this.queryTimes[m.queryId]){
var n=this.queryTimes[m.queryId];
n.remoteQueryLatencies=m.latencies;}}.

bind(this));

k.data.subscribe
('cache_query_latency',
function(l,m){
if(this.queryTimes[m.queryId]){
var n=this.queryTimes[m.queryId];
n.cacheQueryLatencies=m.latencies;}}.

bind(this));

k.data.subscribe('backend_response',function(l,m){
if(this.queryTimes[m.queryId]){
var n=this.queryTimes[m.queryId];
n.render=c('FacebarTimerUtils').getTimestamp()-n.send;
if(m.payload.incomplete)
n.incomplete=true;

n.backendInfo=m.payload.info;
if(this.core.scubaInfo)
this.logToScuba
(m,
n,
this.core.scubaInfo,m.inputQuery,
this.type);}}.



bind(this));

k.getCore().subscribe('change',function(l,m){
this.userInput(this.core.getText());}.
bind(this));

k.data.subscribe
('remote_query_match',
function(l,m){
if(this._maxQueryID<m.queryId){
this._maxQueryID=m.queryId;
this._isQueryMatch=m.isMatch;}}.

bind(this));

c('Arbiter').subscribe('BrowseNUX/typing',this.disableThisSession.bind(this));
c('Arbiter').subscribe('TestConsole/typing',this.disableThisSession.bind(this));

k.subscribe('clear',function(){
this.recordAppendStat('before_clear_queries',this.userText);}.
bind(this));

c('Event').listen(this.element,'keydown',function(event){


this.recordStat('keypressed',1);
this.recordCountStat('count_keys_pressed');
if(c('Event').getKeyCode(event)==c('Keys').BACKSPACE){
if(!this._backspacing){
this._backspacing=true;
this.recordAppendStat('before_backspace_queries',
this.core.getText());}}else 


this._backspacing=false;

if(this._firstKeypressTime==null)
this._firstKeypressTime=Date.now();}.

bind(this));

this.core.subscribe('open',function(l,m){
if(m&&m.catchup)
return;

this.data.lastNullOrSingleStateFetchStartTime=Date.now();}.
bind(this));

this.core.subscribe('focusStartTime',function(l,m){
this.data.lastNullOrSingleStateFetchStartTime=m.time;}.
bind(this));

this.data.subscribe('beforeQuery',function(l,m){
if(!this.queryStartTime)
this.queryStartTime=[];

if(!this.query&&!this.data.lastNullOrSingleStateFetchStartTime)
this.data.lastNullOrSingleStateFetchStartTime=Date.now();

this.queryStartTime[this.query]=Date.now();}.
bind(this));

k.subscribe('filter',function(l,m){
this._unsupportedGrammarInfo=this.buildUnsupportedGrammarInfo(m);}.
bind(this));

k.getCore().subscribe('recordFunction',function(l,m){
this._extraRecorder.push(m);}.
bind(this));

this.data.subscribe('bootstrapped',function(l,m){
this._bootstrapSize=m.size;}.
bind(this));};
j.prototype.




_reset=function(k){

this.stats={};


this.avgStats={};


this.appendStats={};


this._backspacing=false;


this.backendQueries=[];



this._topreplace=false;

this._inflightRequests={};};
j.prototype.




sessionStart=function(k){
this._sessionEnded=false;

this.data.setQueryData({sid:k});
this.recordStat('sid',k);
this.recordStat('bootstrap_size',this._bootstrapSize);

if(!this.stats.session_start_time){
this.recordStat('session_start_time',c('FacebarTimerUtils').getTimestamp());


var l=new Date(),
m=l.getTimezoneOffset(),
n=Date.now()-m*60*1000;
this.recordStat('session_start_time_user_timezone',n);}

this.recordStat('keypressed',0);
this.queryTimes={};
this._lastRenderTime=0;
this._firstKeypressTime=null;};
j.prototype.




sessionEnd=function(){
if(this._sessionEnded||this._sessionDisabled){
if(this._sessionDisabled){
this.reset();
this._sessionDisabled=false;
this._sessionEnded=true;}

return;}

this._sessionEnded=true;

var k='typed';

if(this.allFromNullState){
k='nullstate';}else
if(this.allFromSingleState)
k='singlestate';


this.recordStat('last_state',k);

this.recordStat('session_end_time',c('FacebarTimerUtils').getTimestamp());



this.recordStat
('grammar_version',
this.data.getQueryData().grammar_version);
this.submit();


this.nullStateCandidates=null;
this.singleStateCandidates=null;};
j.prototype.




disableThisSession=function(){
this._sessionDisabled=true;};
j.prototype.





userInput=function(k){
this.userText=k;};
j.prototype.







buildUnsupportedGrammarInfo=function(k){
var l=k.results?k.results[0]:null;
if(!l||l.results_set_type!=='unimplemented')
return null;

return {unsupported_grammar:
{category:l.error_info.category||'unknown',
edge:l.error_info.blamed_edge}};};

j.prototype.




buildTypeaheadRecord=function(k,l){
var m=k.rankType||k.render_type||k.type,
n=k.keywordType,
o=k.keywordSource;
if(c('FacebarGlobalOptions').hasKeywordOnlyTypeahead&&
!k.isNullState&&
m!==c('FacebarJSConstants').keywordType){
n=m;
m=c('FacebarJSConstants').keywordType;
if(k.isJSBootstrapMatch)
o=c('FacebarJSConstants').keywordTypes.entityBootstrap;}


if(k.isNullState&&
m===c('FacebarJSConstants').keywordType)
o=c('FacebarJSConstants').keywordTypes.recentSearch;

var p=0,
q=l;


if(typeof k.groupIndex=='number'){
p=k.groupIndex;
q=k.indexInGroup;}


var r=
{group_index:p,
index_in_group:q,
cost:k.cost,
s_value:k.s_value||0,
semantic:k.semantic,
text:k.structure.toString(),
cache_only:k.cacheOnlyResult?1:0,
prefetched:k.isPrefetched?1:0,
parse:k.parse,
category:k.category,
type:m,
source:k.bootstrapped,
grammar_results_type:
(k.results_set_type||'').replace(/[\[\{](.*)[\]\}]/,'$1'),
result_from_memcache:k.memcache,
dynamic_cost:k.dynamic_cost,


is_js_bootstrap_match:k.isJSBootstrapMatch,


backend_cost:k.backendCost,
bootstrap_cost:k.bootstrapCost,
match_type:k.match_type,
l_type:k.l_type,
vertical_type:k.vertical_type,
prefix_match:k.prefix_match,
prefix_length:k.prefix_length,
index_before_buckets:k.indexBeforeBuckets,
bucket_lineage:k.bucketLineage,
nullstate:k.isNullState,
singlestate:k.isSingleState,
query_id:k.qid,
template_id:k.templateID,
coeff_cost:typeof k.grammar_costs=='undefined'?
-1:k.grammar_costs["{"+k.type+"}"],
suggestion:k.isSuggestion,
keyword_source:o,
keyword_bootstrap_type:k.keywordBootstrapType,
exact_match_suggestion:k.exactMatchKeyword?1:0,
keyword_type:n};

if(k.logInfo)
r.backend_log_info=k.logInfo;

if(k.s_token)
r.s_token=k.s_token;

if(k.s_categories)
r.s_categories=k.s_categories;

return r;};
j.prototype.




buildListTypeaheadRecords=function(){
var k=[];
this.results&&this.results.forEach(function(l,m){
if(l.uid!=='search')
k.push(this.buildTypeaheadRecord(l,m));}.

bind(this));
return k;};
j.prototype.




recordShortcut=function(k){
this.recordStat('shortcut',1);
this.recordStat('shortcut_with_shift',k.shift);};
j.prototype.




recordStats=function(k,l){
for(var m in l)
this.recordStat(k+'_'+m,l[m]);};

j.prototype.





getTypeaheadIndex=function(k,l){
var m=typeof k.groupIndex=='number'?
k.groupIndex+1:
0;
return l-m;};
j.prototype.




recordQuickSelectInfo=function(k){
var l=
{input_query:k.input_query,
semantic:k.semantic,
type:k.type,
position:k.position,
with_mouse:k.with_mouse,
text:k.text,
quick_select:1};

this.recordStats('selected',l);
this.recordStat('quick_select',1);};
j.prototype.





recordMagSearch=function(k){
var l={};
l.text=k.text;
l.semantic=k.semantic;
l.type=k.type;
l.input_query=k.text;
l.position=k.position;

this.recordStats('selected',l);};
j.prototype.




recordSelectInfo=function(k){
var l=k.selected,
m=this.getTypeaheadIndex(l,k.index),

n={};
if(l.uid=='search'){
n.selected_search=1;}else{

n=this.buildTypeaheadRecord(l);

var o=
n.type=='friend'?'user':n.type;
n.position=m;

n[o]=1;}


n.with_mouse=k.clicked?1:0;
n.quick_select=0;
n.input_query=this.userText;
n.input_fragments=
JSON.stringify(this.core.currentQuery.toStruct());


var p=l.dataGT?{gt:JSON.parse(l.dataGT)}:{},
q={href:l.path};

c('clickRefAction')('click',q,null,null,p);

this.recordStats('selected',n);
this.recordAppendStat('selection_history',
{selected:n,
candidate_results:this.buildListTypeaheadRecords(),
timestamp:c('FacebarTimerUtils').getTimestamp()});


var r={};
this._extraRecorder.forEach(function(s){
s(k,this.results,r);}.
bind(this));

this.recordStat('extra_select_info',JSON.stringify(r));
this.recordStat('selected_with_mouse',k.clicked?1:0);};
j.prototype.




_dataToSubmit=function(){



this.recordStat('max_results',this.data._maxResults);
if(this.stats&&this.stats.selected_input_query){
this.recordStat('input_query',this.stats.selected_input_query);}else 

this.recordStat('input_query',this.userText);


this.recordStat('uri',new (c('URI'))(window.location.href).toString());

if(!this.stats.shortcut){
this.recordStat('shortcut',0);
this.recordStat('shortcut_with_shift',false);}


var k=this.stats;
for(var l in this.avgStats){
var m=this.avgStats[l];
k[l]=m[0]/m[1];}


var n=
{candidate_results:this.buildListTypeaheadRecords(),
timestamp:c('FacebarTimerUtils').getTimestamp(),
input_query:this.userText,
remote_query_match:this._isQueryMatch};


if(this._unsupportedGrammarInfo)
Object.assign
(n,
this._unsupportedGrammarInfo);



this.recordAppendStat
('suggestions_at_end_of_session',
n);


if(this.nullStateCandidates)
this.recordAppendStat
('suggestions_at_nullstate_session',
{candidate_results:this.nullStateCandidates});



if(this.singleStateCandidates)
this.recordAppendStat
('suggestions_at_singlestate_session',
{candidate_results:this.singleStateCandidates});



this.recordAppendStat('query_times',this.queryTimes);
if(this.backendQueries.length>0){
if(this.backendQueries.length>this.data.logBackendQueriesWindow)
this.backendQueries=this.backendQueries.slice
(this.backendQueries.length-this.data.logBackendQueriesWindow);

this.recordStat('backend_queries',this.backendQueries);}


if(c('FacebarGlobalOptions').taSessionLoggingSample){
var o=[];
this.results.forEach(function(q){
o.push
([q.text||'',
q.category||'',
q.subtext||'']);});


this.recordStat('raw_suggestions_text',o);}


if(c('FacebarGlobalOptions').graphSearchV2){
this.recordStat('experience_type','gsv2');}else 

this.recordStat('experience_type','facebar');


for(var p in this.appendStats)
k[p]=JSON.stringify(this.appendStats[p]);

return k;};
j.prototype.




getDataToSubmit=function(){
return this._dataToSubmit();};
j.prototype.




reset=function(){
return this._reset();};
j.prototype.




submit=function(){
if(!this._sessionDisabled)
i.submit.call(this);

this.view.inform('feedback');
this._reset();};



Object.assign(j.prototype,



{_sessionEnded:true,

_extraRecorder:[],
_banzaiRoute:'facebar'});


f.exports=j;}),null);

/** js/search/facebar/item/FacebarTypeaheadDebugPane.react.js */






__d('FacebarTypeaheadDebugPane.react',['React'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits









(j,c('React').Component);i=h&&h.prototype;j.prototype.



renderDebugText=function(k){
return c('React').createElement('div',{key:k},k);};
j.prototype.

render=function(){

return (c('React').createElement('div',{className:'fsm pam'},
this.props.result.debug.map(this.renderDebugText)));};


function j(){h.apply(this,arguments);}



f.exports=j;}),null);

/** js/search/facebar/item/FacebarTypeaheadDiffText.react.js */





__d('FacebarTypeaheadDiffText.react',['cx','React'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,




k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.





renderDiff=function(r,s){

return (c('React').createElement('span',
{className:"diffNode _5td3",
key:s},
r));},


this.

renderParts=function(){
var r=this.props.prefix,
s=this.props.text;

if(r==null)
return this.renderDiff(s,0);


var t=s.toLowerCase().indexOf(r.toLowerCase());

r=r.trim();

if(t===0)
s=s.slice(r.length);


var u=s.split(/\b/).map(this.renderDiff);

if(t===0)
u.unshift(r);


return u;}.
bind(this),n;}l.prototype.

render=function(){

return (c('React').createElement('span',this.props,
this.renderParts()));};


l.propTypes={prefix:k.string,text:k.string};





l.generatePrefixes=function(m,n){
var o=[],
p,
q;

for(var r=0,s=n.length;r<s;r++){
q=n[r].getText();
p=m.slice
(0,Math.min(m.length,q.length));


if(p==='')
return o;



if(q.toLowerCase().indexOf(p.toLowerCase())===0){

o.push(p);
m=m.slice(p.length);}else 

o.push('');}



return o;};


f.exports=l;}),null);

/** js/search/facebar/item/FacebarTypeaheadHighlightedText.react.js */





__d('FacebarTypeaheadHighlightedText.react',['BrowseFacebarHighlighter','React'],(function a(b,c,d,e,f,g){

'use strict';var h,i,




j=c('React').PropTypes;h=babelHelpers.inherits

(k,c('React').Component);i=h&&h.prototype;function k(){var l,m;for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.





renderHighlight=function(q,r){
if((r+1)%3===0){
return c('React').createElement('span',{className:'highlightNode',key:r},q);}else
if(q)
return q;},

this.

renderParts=function(){
var q=this.props.text,
r=this.props.tokens;

if(r&&q){
var s=c('BrowseFacebarHighlighter').createRegex(r),
t=q.split(s);

return t.map(this.renderHighlight);}else 

return q;}.

bind(this),m;}k.prototype.

render=function(){

return (c('React').createElement('span',this.props,
this.renderParts()));};


k.propTypes={text:j.string,tokens:j.array};


f.exports=k;}),null);

/** js/search/facebar/item/FacebarTypeaheadItem.react.js */






__d('FacebarTypeaheadItem.react',['cx','Badge.react','DOM','DOMContainer.react','FacebarGlobalOptions','FacebarJSConstants','FacebarStructuredText','FacebarTypeaheadDebugPane.react','FacebarTypeaheadDiffText.react','FacebarTypeaheadHighlightedText.react','Image.react','React','TimelineFilterOptions','TypeaheadCanvasConfig','URI','XUICloseButton.react','joinClasses'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,






















k=c('React').PropTypes;

function l(n){
var o=n.getTypePart(0);

return o?
'fragment'+o.charAt(0).toUpperCase()+o.substr(1):
'fragment';}
i=babelHelpers.inherits

(m,c('React').Component);j=i&&i.prototype;function m(){var n,o;for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=j.constructor).call.apply(n,[this].concat(q)),this.
















renderHighlightedFragment=
function(s,t){

return (c('React').createElement(c('FacebarTypeaheadHighlightedText.react'),
{className:l(s),
key:t,
text:s.getText(),
tokens:this.props.highlight}));}.


bind(this),o;}m.prototype.

renderDiffedFragment=
function(n,
o,
p){


return (c('React').createElement(c('FacebarTypeaheadDiffText.react'),
{className:l(n),
key:p,
prefix:o,
text:n.getText()}));};


m.prototype.

renderText=function(){var n,o=this,
p=this.props.result,
q=p.isLocal,
r=p.displayStructure!=null?
p.displayStructure:
p.structure,

s=r.toArray(),
t=this.props.prefix;


if(c('FacebarGlobalOptions').graphSearchV2&&
!p.isSeeMore&&
t!=null&&
t.trim()!==''){
var n=function(){
var u=c('FacebarTypeaheadDiffText.react').generatePrefixes
(t,
s);

if(q)
u=[];

return {v:s.map(function(v,w){
if(!u[w])
u[w]='';

return this.renderDiffedFragment(v,u[w],w);}.
bind(o))};}();if(typeof n==="object")return n.v;}else 

return s.map(this.renderHighlightedFragment);};

m.prototype.

renderBadge=function(){
if(this.props.result.photo&&
this.props.showSecondaryIcon&&
!this.props.result.isTrending)

return (c('React').createElement('span',{className:"_34my"}));



if(this.props.result.category&&
this.props.result.category.toString().toLowerCase()===
c('TypeaheadCanvasConfig').category_games.toLowerCase()&&
c('TypeaheadCanvasConfig').in_games_v1){


return (c('React').createElement(c('Badge.react'),{type:'game_blue',size:'medium'}));}else

if(this.props.result.is_verified){

return (c('React').createElement(c('Badge.react'),{type:'verified',size:'medium'}));}else

if(this.props.result.is_work_user){

return (c('React').createElement(c('Badge.react'),{type:'work',size:'medium'}));}else

if(this.props.result.is_multi_company_group){

return (c('React').createElement(c('Badge.react'),{type:'work_non_coworker'}));}else

if(this.props.result.pages_verified_badge===1){

return (c('React').createElement(c('Badge.react'),{type:'page_gray_check',size:'medium'}));}else

if(this.props.result.is_interest_community)

return (c('React').createElement(c('Badge.react'),{type:'interest_community',size:'medium'}));



return null;};
m.prototype.

renderIcon=function(){
var n=this.props.result,
o=n.icon_class;

if(o){

return (c('React').createElement('span',{className:"_k83"},
c('React').createElement('span',{className:o})));}else


if(n.photo)

return (c('React').createElement(c('Image.react'),
{className:"_20h",
alt:'',
src:n.photo}));




return null;};
m.prototype.

renderSecondaryIcon=function(){
var n=this.props.result;

if(n.photo&&this.props.showSecondaryIcon){

return (c('React').createElement('div',{className:"_20h"},
c('React').createElement(c('Image.react'),
{alt:'',
src:n.photo})));}else



if(!n.isRecent&&n.isInjectedSuggestion)

return (c('React').createElement('span',{className:"_3kxl"}));



return null;};
m.prototype.

renderUnseenPosts=function(){
if(this.props.recentSearchItem&&
this.props.result.unseen_posts){
var n=c('React').createElement(c('DOMContainer.react'),null,
c('DOM').create
('span',
{className:''},
' \xB7 ')),



o=
c('React').createElement(c('DOMContainer.react'),null,
c('DOM').create
('span',
{className:''},
this.props.result.unseen_posts.markup));




return (c('React').createElement('span',{className:"_2tb-"},
n,
o));}




return null;};
m.prototype.

renderLabel=function(){
var n=' \u00B7 ',
o=this.props.result,
p="_53ad"+


(this.props.valign&&this.props.token&&
this.props.token.props&&this.props.token.props.text.length>0?' '+"_55y-":'')+

(!o.category&&!o.subtext?' '+"_2vzo":'')+

(!o.category&&!!o.subtext||
o.category&&o.category.toString().indexOf(n)<0&&
!o.subtext?' '+"_2vzp":'')+

(o.category&&!!o.subtext||
o.category&&o.category.toString().indexOf(n)>0?' '+"_2vzq":''),


q=this.renderUnseenPosts(),
r=
c('React').createElement('span',{className:p},
this.renderText(),
this.props.hideBadge?null:this.renderBadge(),
q,
this.props.token),


s="_7gk"+

(this.props.message?' '+"_5byz":'');



return (c('React').createElement('span',{className:s},
r,
this.props.message));};


m.prototype.

renderMain=function(){
var n=
c('React').createElement('a',
{className:"_6i1",
href:this.props.result.uri},
c('React').createElement('span',null,
this.props.icon||this.renderIcon(),
this.renderLabel(),
this.renderSecondaryIcon()));



if(this.props.result.isAsync)
n=c('React').createElement('a',
{className:"_6i1",
href:'#',
ajaxify:this.props.result.asyncURI,
rel:'async'},
c('React').createElement('span',null,
this.props.icon||this.renderIcon(),
this.renderLabel(),
this.renderSecondaryIcon()));





return (c('React').createElement('span',
{className:"_205",
rel:'ignore'},
this.renderActivityLogXButton(),
n));};


m.prototype.

renderActivityLogXButton=function(){
if(this.props.result.keywordBootstrapType!==
c('FacebarJSConstants').keywordBootstrapTypes.recent)
return null;

var n=new (c('URI'))('/me/allactivity');
n.setQueryData
({privacy_source:'activity_log',
log_filter:c('TimelineFilterOptions').SEARCH});


return (c('React').createElement(c('XUICloseButton.react'),
{size:'medium',
className:"_2d9t",
href:n}));};


m.prototype.

renderDebug=function(){
return this.props.result.debug?
c('React').createElement(c('FacebarTypeaheadDebugPane.react'),{result:this.props.result}):
null;};
m.prototype.

render=function(){
var n="_202"+(' '+"_5bl2")+(' '+"_6_k")+



(c('FacebarGlobalOptions').graphSearchV2?' '+"_1et7":'')+

(c('FacebarGlobalOptions').renderKeywordSnippets?' '+"_28vg":'')+

(this.props.result.isCelebrity?' '+"_5g-n":'')+

(this.props.result.isSeeMore?' '+"_qbs":'')+

(this.props.result.isInjectedSuggestion?' '+"_3kxm":'')+

(this.props.result.isTrending||this.props.result.isHappeningNow?' '+"_5g-o":'')+

(this.props.result.isRecent?' '+"_jsd":'')+

(this.props.result.isLocal&&
!c('FacebarGlobalOptions').useBlueLocalIcon?' '+"_1821":'')+

(this.props.result.isLocal&&
c('FacebarGlobalOptions').useBlueLocalIcon?' '+"_xui":'')+

(this.props.result.isFootball?' '+"_1822":'')+

(this.props.result.isHashtag?' '+"_4z1b":'')+
(this.props.result.isPhotos?' '+"_4z1c":'')+
(this.props.result.isVideos?' '+"_4z1d":'')+

(this.props.result.isInvalidated?' '+"_44vm":'');



return (c('React').createElement('li',
{className:c('joinClasses')(n,this.props.className),
onClick:this.props.onClick,
onMouseDown:this.props.onMouseDown,
onMouseEnter:this.props.onMouseEnter,
role:'row'},
c('React').createElement('div',{role:'gridcell'},
this.renderMain(),
this.renderDebug())));};



m.propTypes={result:k.object.isRequired,className:k.string,icon:k.object,token:k.object,highlight:k.array,prefix:k.string,message:k.object,valign:k.bool,recentSearchItem:k.bool};m.defaultProps={valign:true};


f.exports=m;}),null);

/** js/search/facebar/item/FacebarTypeaheadToken.react.js */




__d('FacebarTypeaheadToken.react',['cx','FacebarTypeaheadHighlightedText.react','React'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,




k=c('React').PropTypes,

l=' \u00B7 ';i=babelHelpers.inherits

(m,c('React').Component);j=i&&i.prototype;m.prototype.










render=function(){
var n=this.props.text;


if(this.props.limit)
n.splice(this.props.limit);



n.forEach(function(r,s){
if(s!==0||this.props.leadingMiddot)
n[s]=l+r;}.

bind(this));


var o=
c('React').createElement(c('FacebarTypeaheadHighlightedText.react'),
{className:this.props.mainClass,
tokens:this.props.highlight,
text:n.shift()}),


p=n.length?
c('React').createElement(c('FacebarTypeaheadHighlightedText.react'),
{tokens:this.props.highlight,
className:"_53ab",
text:n.join('')}):
null,

q=this.props.innerClass||
"_53aa";



return (c('React').createElement('span',{className:"_53a9"},
c('React').createElement('span',{className:q},
o,
p)));};



function m(){i.apply(this,arguments);}m.propTypes={text:k.array.isRequired,highlight:k.array,limit:k.number,mainClass:k.string,innerClass:k.string,leadingMiddot:k.bool,category:k.string};


f.exports=m;}),null);

/** js/search/facebar/item/FacebarTypeaheadTokenText.js */





__d('FacebarTypeaheadTokenText',['HTML','FbtResult','getElementText'],(function a(b,c,d,e,f,g){

'use strict';






var h='\u00B7';







function i(m){
if(m instanceof c('FbtResult')){
return m.toString();}else
if(typeof m==='object'){
return c('getElementText')(c('HTML')(m).getRootNode());}else 

return m||'';}









function j(m){
return i(m).split(h).map(function(n){
return n.trim();});}









function k(m){
var n={};

return m.filter(function(o){
var p=!n[o];
n[o]=true;
return p&&o;});}



var l=







{textForEntity:function m(n,o){
var p=n.category||o[n.type]||'',
q=n.subtext||'',
r=n.boldedSubtext||'',
s=j(p).concat(j(r)).
concat(j(q));

return k(s);},








text:function m(n){
return k(j(n));}};



f.exports=l;}),null);

/** js/search/facebar/item/FacebarTypeaheadEntityItem.react.js */




__d('FacebarTypeaheadEntityItem.react',['cx','FacebarGlobalOptions','FacebarTypeaheadItem.react','FacebarTypeaheadToken.react','FacebarTypeaheadTokenText','Image.react','React','TypeaheadFacepileX.react','joinClasses'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;i=babelHelpers.inherits












(k,c('React').Component);j=i&&i.prototype;function k(){var l,m;for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=j.constructor).call.apply(l,[this].concat(o)),this.
renderToken=function(){

return (c('React').createElement(c('FacebarTypeaheadToken.react'),
{highlight:this.getHighlightTokens(),
text:c('FacebarTypeaheadTokenText').textForEntity
(this.props.result,
{}),

category:this.props.result.category}));}.


bind(this),this.

renderIcon=function(){
if(this.props.result.isNullState){
var q=this.props.result.icon_class?
c('React').createElement('span',{className:this.props.result.icon_class}):
c('React').createElement(c('Image.react'),
{className:"_20h",
src:this.props.result.photo});


return (c('React').createElement('span',
{className:

!c('FacebarGlobalOptions').renderKeywordSnippets?"_k83":''},

q));}




if(this.props.result.size>1&&this.props.result.photos){

return (c('React').createElement(c('TypeaheadFacepileX.react'),
{className:"_51l_",
photos:this.props.result.photos,
size:this.props.result.size}));}else


if(this.props.result.photo)

return (c('React').createElement(c('Image.react'),
{className:"_20h",
alt:'',
src:this.props.result.photo}));}.



bind(this),this.

getHighlightTokens=function(){
if(this.props.result.original_query){
var q=this.props.result.original_query.toString().trim(),
r=q.split(' '),
s=r.length>1?[q].concat(r):[q];
return s.filter(function(t){
return t!=='';});}}.


bind(this),m;}k.prototype.

render=function(){
var l=this.props.className;
if(this.props.result.isNullState)
l=c('joinClasses')
(this.props.className,


!c('FacebarGlobalOptions').renderKeywordSnippets?"_207":'');




return (c('React').createElement(c('FacebarTypeaheadItem.react'),babelHelpers['extends']({},
this.props,
{className:l,
icon:this.renderIcon(),
token:this.renderToken(),
highlight:this.getHighlightTokens(),
valign:true})));};





f.exports=k;}),null);

/** js/search/facebar/item/FacebarTypeaheadGrammarItem.react.js */




__d('FacebarTypeaheadGrammarItem.react',['cx','fbt','React','FacebarTypeaheadItem.react','FacebarTypeaheadToken.react','FacebarTypeaheadTokenText','joinClasses'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,










l=
{user:i._(["Person","2436eb28aea94da3c13ac16ff38913c8"])};j=babelHelpers.inherits






(m,c('React').Component);k=j&&j.prototype;function m(){var n,o;for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=k.constructor).call.apply(n,[this].concat(q)),this.
renderToken=function(){
var s=this.props.result.decoration,
t=this.props.result.ambiguity,

u=t&&t.text,
v=s&&s.entity||
t&&t.entity;

if(this.props.result.isRecent){
var w=i._(["Recent search","3cfa5a1471d78802d0b4a21940df7119"]);






return (c('React').createElement(c('FacebarTypeaheadToken.react'),
{text:[w],
innerClass:"_53ab"}));}else


if(u){

return (c('React').createElement(c('FacebarTypeaheadToken.react'),
{text:c('FacebarTypeaheadTokenText').text(u)}));}else


if(v)

return (c('React').createElement(c('FacebarTypeaheadToken.react'),
{text:c('FacebarTypeaheadTokenText').textForEntity(v,l),
limit:2,
leadingMiddot:true}));}.



bind(this),this.

getClassName=function(){
var s=this.props.result;

if(s.isPeopleAndPagesSuggestion)
return "_2enu";



if(s.tags&&s.tags.displayedSeeMore)
return "_10gs";

return "_207";}.
bind(this),o;}m.prototype.

render=function(){
var n=this.renderToken(),
o=n&&!n.props.leadingMiddot;


return (c('React').createElement(c('FacebarTypeaheadItem.react'),babelHelpers['extends']({},
this.props,
{className:c('joinClasses')
(this.props.className,
this.getClassName()),

valign:o,
token:n})));};





f.exports=m;}),null);

/** js/search/facebar/item/FacebarTypeaheadKeywordItem.react.js */




__d('FacebarTypeaheadKeywordItem.react',['cx','fbt','CurrentUser','FacebarGlobalOptions','FacebarTypeaheadItem.react','FacebarTypeaheadToken.react','FacebarTypeaheadTokenText','React','joinClasses'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k;j=babelHelpers.inherits












(l,c('React').Component);k=j&&j.prototype;l.prototype.
render=function(){
var m='';
if(c('CurrentUser').isWorkUser()){
m=[i._(["Search Workplace","d31eed9231111dfe958058cbca965751"])];}else 






m=[i._(["Search Facebook","6ae19c569bb52916ccb49d16dc63e8b5"])];





if(this.props.result.isTrending){
m.push(i._(["Trending","90089a9f6f3074f9b300a5f3995b3289"]));}else




if(this.props.result.type=='related')
m=[i._(["Related search","d7710f0b7ae89ab69a978410fa7b9185"])];






if(c('FacebarGlobalOptions').renderKeywordSnippets){
var n=c('FacebarTypeaheadTokenText').textForEntity
(this.props.result,
{});


if(n&&n.length)
m=n;}



var o=c('FacebarGlobalOptions').renderKeywordSnippets&&
n!=null&&
(n.length>1||this.props.result.boldedSubtext!=null),
p=this.props.result.isSeeMore,
q=p?
null:
c('React').createElement(c('FacebarTypeaheadToken.react'),
{text:m,
mainClass:

(o?"_4jt7":'')+

(o&&
this.props.result.isSpecialIntent&&
!this.props.result.isLocal?' '+"_21z1":'')+

(o&&
this.props.result.isLocal&&
!c('FacebarGlobalOptions').useBlueLocalIcon?' '+"_2xfl":'')+

(o&&
this.props.result.isLocal&&
c('FacebarGlobalOptions').useBlueLocalIcon?' '+"_2t_t":'')+

(o&&this.props.result.isPhotos?' '+"_21z2":'')+

(o&&this.props.result.isVideos?' '+"_21z4":'')+

(o&&
this.props.result.isSingleState&&
this.props.result.exactMatchKeyword&&
!this.props.result.isLocal?' '+"_21z5":''),

innerClass:"_53ab"});



return (c('React').createElement(c('FacebarTypeaheadItem.react'),babelHelpers['extends']({},
this.props,
{className:c('joinClasses')
(this.props.className,


(!c('FacebarGlobalOptions').renderKeywordSnippets?"_207":'')+(' '+"_5d77")),



token:q,
prefix:this.props.result.query_string.toLowerCase(),
showSecondaryIcon:c('FacebarGlobalOptions').showKeywordSuggestionPhotos})));};


function l(){j.apply(this,arguments);}


f.exports=l;}),null);

/** js/search/facebar/item/FacebarTypeaheadNodeItem.react.js */




__d('FacebarTypeaheadNodeItem.react',['React','ReactDOM','DOM','isElementNode'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits











(j,c('React').Component);i=h&&h.prototype;function j(){var k,l;for(var m=arguments.length,n=Array(m),o=0;o<m;o++)n[o]=arguments[o];return l=(k=i.constructor).call.apply(k,[this].concat(n)),this.










attachNode=function(p){
var q=this.props.result.node;

if(c('isElementNode')(q))
c('DOM').setContent(p,q);}.

bind(this),l;}j.prototype.render=function(){var k=this.props.result.node;return c('React').createElement('li',this.props,!c('isElementNode')(k)?k:null);};j.prototype.

componentDidMount=function(){
this.attachNode(c('ReactDOM').findDOMNode(this));};
j.prototype.

componentDidUpdate=function(k,l,m){
this.attachNode(c('ReactDOM').findDOMNode(this));};
j.prototype.

shouldComponentUpdate=function(k){
return this.props.result.node!==k.result.node;};



f.exports=j;}),null);

/** js/search/facebar/item/FacebarTypeaheadRecentItem.react.js */





__d('FacebarTypeaheadRecentItem.react',['cx','FacebarGlobalOptions','FacebarTypeaheadItem.react','Image.react','React','joinClasses'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;i=babelHelpers.inherits









(k,c('React').Component);j=i&&i.prototype;function k(){var l,m;for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=j.constructor).call.apply(l,[this].concat(o)),this.

















renderIcon=function(){
var q=this.props.result;
if(!c('FacebarGlobalOptions').allowGrammar)


return (c('React').createElement(c('Image.react'),
{className:"_20h",
src:q.photo}));





var r=q.icon_class?
c('React').createElement('span',{className:q.icon_class}):
c('React').createElement(c('Image.react'),
{className:"_20h",
src:q.photo});




return (c('React').createElement('span',
{className:

!c('FacebarGlobalOptions').renderKeywordSnippets||
q.icon_class&&c('FacebarGlobalOptions').renderKeywordSnippets?"_k83":''},

r));}.


bind(this),m;}k.prototype.render=function(){return c('React').createElement(c('FacebarTypeaheadItem.react'),babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,!c('FacebarGlobalOptions').renderKeywordSnippets?"_207":''),icon:this.renderIcon(),recentSearchItem:true}));};


f.exports=k;}),null);

/** js/search/facebar/item/FacebarTypeaheadSimpleItem.react.js */






__d('FacebarTypeaheadSimpleItem.react',['ix','cx','FacebarGlobalOptions','FacebarJSConstants','Image.react','React','escapeRegex','fbglyph','joinClasses'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k;



















function l(o){
var p=o.result,
q=p.displayStructure!=null?
p.displayStructure:
p.structure,

r=q!=null?q.toString():'';

if(p.keywordType!==c('FacebarJSConstants').keywordTypes.escape&&
!p.isNullState)

r=r.toLowerCase();


var s=p.query_string?
p.query_string.toLowerCase():
null;

if(s!=null&&
!p.isSeeMore){

var t=r;
r=r.replace(new RegExp('^'+c('escapeRegex')(s),'ig'),'');
if(t===r)
s=null;

r=c('React').createElement('strong',null,r);}else 

s=null;



return (c('React').createElement('div',{className:"_19bk"},
s,
r));}




function m(o){
var p=o.result;


if(!p.isNullState||
!c('FacebarGlobalOptions').logSERPClickAsRecentSearch)

return null;


var q="_19bl",
r=void 0;

if(p.photo!=null)
r=
c('React').createElement(c('Image.react'),
{className:c('joinClasses')
(q,
"_19bm"),

src:p.photo,
width:'24',
height:'24'});



if(r==null)
r=
c('React').createElement(c('Image.react'),
{className:q,
src:h("126434"),




width:'16',
height:'16'});



if(r!=null)

return (c('React').createElement('div',{className:"_19bp"},
r));




return null;}
j=babelHelpers.inherits

(n,c('React').Component);k=j&&j.prototype;n.prototype.



render=function(){

return (c('React').createElement('li',
{className:"_202"+(' '+"_19bq")+


(this.props.result.isSeeMore?' '+"_19br":''),

onClick:this.props.onClick,
onMouseDown:this.props.onMouseDown,
onMouseEnter:this.props.onMouseEnter,
role:'row'},
c('React').createElement('div',{role:'gridcell'},
c('React').createElement('a',
{href:this.props.result.uri,
className:"_19bs"},

this.props.isNullState?
null:
c('React').createElement(m,{result:this.props.result}),

c('React').createElement(l,{result:this.props.result})))));};




function n(){j.apply(this,arguments);}



f.exports=n;}),null);

/** js/search/facebar/item/FacebarTypeaheadTrendingItem.react.js */




__d('FacebarTypeaheadTrendingItem.react',['cx','FacebarTypeaheadItem.react','FacebarTypeaheadToken.react','React','joinClasses'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;i=babelHelpers.inherits








(k,c('React').Component);j=i&&i.prototype;k.prototype.
render=function(){
var l=this.props.result.articleTitle||'',
m=
c('React').createElement(c('FacebarTypeaheadToken.react'),
{text:[l],
innerClass:"_53ab",
leadingMiddot:true});



return (c('React').createElement(c('FacebarTypeaheadItem.react'),babelHelpers['extends']({},
this.props,
{className:c('joinClasses')
(this.props.className,
"_207"),

token:m,
valign:false})));};


function k(){i.apply(this,arguments);}


f.exports=k;}),null);

/** js/search/facebar/item/FacebarTypeaheadList.react.js */




__d('FacebarTypeaheadList.react',['csx','cx','fbt','CSS','FacebarGlobalOptions','FacebarJSConstants','FacebarTypeaheadEntityItem.react','FacebarTypeaheadGrammarItem.react','FacebarTypeaheadKeywordItem.react','FacebarTypeaheadNodeItem.react','FacebarTypeaheadRecentItem.react','FacebarTypeaheadSimpleItem.react','FacebarTypeaheadTrendingItem.react','LoadingIndicator.react','React','StaticContainer.react'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';var k,l,



















m=c('React').PropTypes,

n=
{grammar:c('FacebarTypeaheadGrammarItem.react'),
trending:c('FacebarTypeaheadTrendingItem.react'),
related:c('FacebarTypeaheadKeywordItem.react')};


n[c('FacebarJSConstants').browseTypes.keyword]=c('FacebarTypeaheadKeywordItem.react');

n[c('FacebarJSConstants').keywordType]=c('FacebarTypeaheadKeywordItem.react');k=babelHelpers.inherits


(o,c('React').Component);l=k&&k.prototype;function o(){var p,q;for(var r=arguments.length,s=Array(r),t=0;t<r;t++)s[t]=arguments[t];return q=(p=l.constructor).call.apply(p,[this].concat(s)),this.








getItemComponentConstructor=function(u,v){
if(c('FacebarGlobalOptions').hasKeywordOnlyTypeahead)
return c('FacebarTypeaheadSimpleItem.react');


if(u.node)
return c('FacebarTypeaheadNodeItem.react');


if(u.isRecent)
return c('FacebarTypeaheadRecentItem.react');


if(u.results_set_type===c('FacebarJSConstants').browseTypes.keyword)
return c('FacebarTypeaheadKeywordItem.react');


if(u.type&&n[u.type])
return n[u.type];



return c('FacebarTypeaheadEntityItem.react');},
this.

renderItem=function(u,v){
var w=this.getItemComponentConstructor(u),

x;
if(u.type===c('FacebarJSConstants').keywordType){


x=u.query_string+
u.semantic+
u.boldedSubtext+
u.subtext+
u.fromCache+
(u.isSeeMore?'see_more':'')+
(u.keywordBootstrapType?u.keywordBootstrapType:'')+
(u.uid!=null?u.uid:'')+
u.isInvalidated;}else{

x=u.semantic||u.uid||u.tuid;
x+=u.isNullState+u.category+u.subtext;
x+=u.query_string;}


if(c('FacebarGlobalOptions').dymOnEchoOnly)
if(u.query_string!==u.text){
u.uri.addQueryData({em:'1'});}else 

u.uri.removeQueryData('em');



if(c('FacebarGlobalOptions').noDymOnSingleState)
if(u.isSingleState)
u.uri.addQueryData({em:'1'});



if(c('FacebarGlobalOptions').noDymOnNullState)
if(u.isNullState)
u.uri.addQueryData({em:'1'});




return (c('React').createElement(c('StaticContainer.react'),{key:x},
c('React').createElement(w,
{result:u,
onClick:this.handleClick.bind(null,u),
onMouseEnter:this.handleMouseEnter.bind(null,u)})));}.



bind(this),this.

renderFooter=function(){
var u="_3su"+

(!this.props.loading?' '+"hidden_elem":'');



return (c('React').createElement('li',{className:u},
c('React').createElement('div',{className:"_21f"},j._(["Finding results","74a24bff27bd58454934989f50bf1127"]),





c('React').createElement(c('LoadingIndicator.react'),
{size:'medium',
color:'white'}))));}.




bind(this),this.

hasValidRecentSearches=function(){
if(!c('FacebarGlobalOptions').hasRecentSearchNullState||
!this.props.results)
return false;

return this.props.results.some(function(u){return u.isRecent;});}.
bind(this),this.




























handleClick=function(u,v){


if(c('CSS').matchesSelector(v.target,"._2d9t"))
return;





if(!v.nativeEvent.isMiddleClick()&&!v.nativeEvent.getModifiers().any){
this.props.onSelect(u);
v.preventDefault();}}.

bind(this),this.

handleMouseEnter=function(u){
this.props.onHighlight(u);}.
bind(this),this.

handleMouseLeave=function(){
if(c('FacebarGlobalOptions').facebarTypeaheadMouseoutHighlight)
this.props.onClearHighlight();}.

bind(this),q;}o.prototype.render=function(){var p=this.props.results,q=[];if(p)p.forEach(function(r){q.push(this.renderItem(r));},this);return c('React').createElement('div',null,c('React').createElement('ul',{id:'facebar_typeahead_view_list',className:"_21c"+(this.props.isKeywordList?' '+"_2yob":''),'data-click':'Search',onMouseLeave:this.handleMouseLeave},q,this.renderFooter()));};o.prototype.

componentDidUpdate=function(p,q,r){
this.props.onRender();};
o.prototype.

shouldComponentUpdate=function(p){
return this.props.loading!==p.loading||
this.props.results!==p.results;};
o.propTypes={results:m.array,onRender:m.func,onSelect:m.func.isRequired,onHighlight:m.func.isRequired,isKeywordList:m.bool};


f.exports=o;}),null);

/** js/search/facebar/FacebarTypeaheadView.js */




__d('FacebarTypeaheadView',['csx','cx','fbt','Arbiter','CSS','ContextualLayer','ContextualLayerUpdateOnScroll','DOM','FacebarGlobalOptions','FacebarJSConstants','FacebarStructuredText','FacebarTypeaheadList.react','Link.react','Parent','React','ReactDOM','ScriptPath','Style','TypeaheadView','URI','performanceNow'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';var k,l,























m='unimplemented';k=babelHelpers.inherits

(n,c('TypeaheadView'));l=k&&k.prototype;
function n(o,p){
l.constructor.call(this,o,p);this.




















































































































































































handleClearHighlight=function(){
this.highlight(-1,false);}.
bind(this);this.

handleHighlight=function(q){



this.highlight(this.getIndexOf(q,this.results),false);}.
bind(this);this.

handleSelect=function(q){
this.handleHighlight(q);
this.select(true);}.
bind(this);this.







































































































































































































































handleRender=function(){
this.items=this.getItems();}.
bind(this);this.element=o;this.sid='';this.index=-1;this.warningShown=false;this.autoSelect=false;this.flipCount=0;this.loading=false;this.events=['highlight','render','filter','show'];}n.prototype.init=function(){this.initializeElements();};n.prototype.initGSV2Elements=function(){var o=this.element;this.contentKeyword=c('DOM').find(o,"._f7s");this.contentEntity=c('DOM').find(o,"._2pda");this.contentRecent=c('DOM').find(o,"._mn8");this.contentSuggestion=c('DOM').find(o,"._2pl-");this.contentSeeMore=c('DOM').find(o,"._3-xd");this.keywordResultsContainer=c('DOM').create('div');this.entityResultsContainer=c('DOM').create('div');this.recentSearchContainer=c('DOM').create('div');this.seeMoreContainer=c('DOM').create('div');this.results=[];this.keywordResults=[];this.entityResults=[];};n.prototype.initGSV2Construct=function(){this.currentKeywordContainer=this.contentKeyword;this.currentEntityContainer=this.contentEntity;this.contentKeyword.appendChild(this.keywordResultsContainer);this.contentEntity.appendChild(this.entityResultsContainer);this.contentRecent.appendChild(this.recentSearchContainer);this.contentSeeMore.appendChild(this.seeMoreContainer);if(this.isNullState()){if(c('FacebarGlobalOptions').hasRecentOnTopNullState){this.resultsContainer.appendChild(this.contentRecent);this.resultsContainer.appendChild(this.contentKeyword);this.resultsContainer.appendChild(this.contentEntity);}else{this.resultsContainer.appendChild(this.contentKeyword);this.resultsContainer.appendChild(this.contentRecent);this.resultsContainer.appendChild(this.contentEntity);}return;}if(this.entityTop){this.resultsContainer.appendChild(this.contentEntity);this.resultsContainer.appendChild(this.contentKeyword);}else{this.resultsContainer.appendChild(this.contentKeyword);this.resultsContainer.appendChild(this.contentEntity);}if(!this.isNullState())this.resultsContainer.appendChild(this.contentSeeMore);};n.prototype.initializeElements=function(){var o=this.element;this.isGSV2=c('FacebarGlobalOptions').graphSearchV2;this.dynamicRank=this.isGSV2;this.fixedBlendingOrder=c('FacebarGlobalOptions').blendingOrderKeywordFirst||c('FacebarGlobalOptions').blendingOrderEntityFirst;this.entityTop=c('FacebarGlobalOptions').blendingOrderEntityFirst&&!c('FacebarGlobalOptions').renderKeywordsFirst;this.content=c('DOM').find(o,"._21r");this.warningNode=c('DOM').find(o,"._553e");this.resultsContainer=c('DOM').create('div');if(this.isGSV2)this.initGSV2Elements();};n.prototype.initializeList=function(){this.renderTypeaheadList();this.content.appendChild(this.resultsContainer);if(this.isGSV2)this.initGSV2Construct();};n.prototype.initializeLayer=function(){this.layer=new (c('ContextualLayer'))({context:c('Parent').bySelector(this.causalElement,"._585-"),position:'below',causalElement:this.causalElement,shouldSetARIAProperties:false},this.element).enableBehavior(c('ContextualLayerUpdateOnScroll'));var o=this.layer.getRoot();o.setAttribute('role','grid');var p=this.layer.getContentRoot();this.root=c('DOM').find(p,"._50c9");c('CSS').addClass(p,"_5tlx");if(this.isGSV2)c('CSS').addClass(p,"_5xzd");this.wrapper=p;};n.prototype.setInputElement=function(o){this.setAccessibilityControlElement(o);this.causalElement=o;this.initializeLayer();this.initializeList();};n.prototype.setAutoSelect=function(o){this.autoSelect=o;if(this.index===-1&&o)this.first();};n.prototype.getIndexOf=function(o,p){for(var q=0;q<p.length;q++)if(o.semantic===p[q].semantic&&o.isSeeMore===p[q].isSeeMore&&o.text===p[q].text)return q;return -1;};n.prototype.show=function(o){if(!this.visible){this.inform('beforeShow',this.layer);c('Style').set(this.wrapper,'minWidth',o+'px');var p=l.show.call(this);this.first();this.layer.show();this.layer.updatePosition();this.inform('show');c('Arbiter').inform('layer_shown',{type:'FacebarTypeahead'});return p;}};n.prototype.hide=function(){if(this.visible){this.layer.hide();l.hide.call(this);this.inform('hide');c('Arbiter').inform('layer_hidden',{type:'FacebarTypeahead'});this.flipCount=0;}return this;};n.prototype.select=function(o){var p=this.results&&this.results[this.index];if(!p){this.inform('quickSelect');return;}var q=this.inform('beforeSelect',{index:this.index,selected:p});if(q!==false){c('ScriptPath').setClickPointInfo({click:'Search'});l.select.call(this,o);}};n.prototype.doesResultBelongToEntitySection=function(o){if(c('FacebarGlobalOptions').hasKeywordOnlyTypeahead)return true;switch(o.type){case c('FacebarJSConstants').keywordType:return !!o.isRecent;case c('FacebarJSConstants').grammarType:return o.tags&&o.tags.displayedSeeMore;default:return true;}};n.prototype.processGSV2Results=function(o){this.keywordResults=[];this.entityResults=[];var p=[],q=[],r=[],s=o.some(function(t){return t.isSingleState;});o.forEach(function(t){if(this.doesResultBelongToEntitySection(t)){this.entityResults.push(t);}else if(s){if(t.alternateSemantic){q.push(t);}else if(t.exactMatchKeyword){r.push(t);}else p.push(t);}else this.keywordResults.push(t);}.bind(this));if(s)this.keywordResults=r.concat(q.concat(p));if(this.entityTop)return this.entityResults.concat(this.keywordResults);return this.keywordResults.concat(this.entityResults);};n.prototype.reGenerateContainer=function(o){var p=c('DOM').create('div');if(this.isNullState()){if(c('FacebarGlobalOptions').hasRecentOnTopNullState){p.appendChild(this.contentRecent);p.appendChild(this.currentKeywordContainer);p.appendChild(this.currentEntityContainer);}else{p.appendChild(this.currentKeywordContainer);p.appendChild(this.contentRecent);p.appendChild(this.currentEntityContainer);}return p;}if(this.entityTop){p.appendChild(this.currentEntityContainer);p.appendChild(this.currentKeywordContainer);}else{p.appendChild(this.currentKeywordContainer);p.appendChild(this.currentEntityContainer);}if(!this.isNullState()&&!o)p.appendChild(this.contentSeeMore);return p;};n.prototype.buildResultsNoRegeneration=function(o,p){if(this.dynamicRank&&o.length>0&&!this.fixedBlendingOrder&&!c('FacebarGlobalOptions').renderKeywordsFirst&&this.flipCount<2){var q=o[0].type!==c('FacebarJSConstants').keywordType;if(c('FacebarGlobalOptions').hasFlipOnce&&this.value.toString()&&this.entityTop!=q)this.flipCount++;this.entityTop=q;}var r=String(this.value);o.forEach(function(u){u.query_string=r;});this.results=o;if(this.isGSV2){if(c('FacebarGlobalOptions').disableKeywords)o=o.filter(function(u){return u.semantic!=null&&u.semantic.match(/^[0-9]+$/)!=null;});this.results=this.processGSV2Results(o);if(this.seeMoreResult){var s=this.results.indexOf(this.seeMoreResult);if(s>-1)this.results.splice(s,1);this.seeMoreResult=null;}if(!this.isNullState()&&!p){this.seeMoreResult=this.inform('seeMore',{value:r,results:this.results});if(this.seeMoreResult){this.results.push(this.seeMoreResult);this.inform('afterSeeMore',{results:this.results});}}}var t=c('performanceNow')();this.renderTypeaheadList({results:this.results,loading:this.loading});this.inform('logPerformanceTiming',{field:'build_results_set_props_duration',value:c('performanceNow')()-t});};n.prototype.buildResults=function(o){var p=o.some(function(q){return q.isSingleState;});this.buildResultsNoRegeneration(o,p);if(this.dynamicRank)this.resultsContainer=this.reGenerateContainer(p);return this.resultsContainer;};n.prototype.getGSV2Items=function(){return l.getItems.call(this).filter(function(o){return !c('CSS').matchesSelector(o,"._3su");});};n.prototype.getItems=function(){if(this.isGSV2)return this.getGSV2Items();return l.getItems.call(this).slice(0,-1);};n.prototype.

render=function(o,p,q,r){
this.inform('filter',
{results:p,
value:o});


var s=!o||
o instanceof c('FacebarStructuredText')&&
o.isEmptyOrWhitespace();

c('CSS').conditionClass
(this.wrapper,
"_5qz2",
!p.length&&s&&!this.getMegaphone());



var t=p[0];
if(r&&!s){
if(!this.isGSV2)
this.showWarning(j._(["There are no results for '{query}'","26a24e8f92e95b798d8603d023435d4e"],

[j.param('query',o.toString())]));}else




if(t&&t.results_set_type===m){
if(!t.error_info.suppress)
this.showWarning
(t.error_info.errorMessage||j._(["This search isn't currently supported.","55c401a34b76b6f03d5600c8f18818a0"]));}else 








this.hideWarning();



if(this.inform('removeUnimplementedGrammar')!==false)
p=p.filter(function(u){
return u.results_set_type!==m;}.
bind(this));


l.render.call(this,
o,
p,
q);};

n.prototype.

reset=function(){
this.index=-1;
this.items=[];
this.results=[];
this.value='';
this.buildResults([]);
this.inform('reset');
return this;};
n.prototype.

resetIndex=function(){
this.index=-1;};
n.prototype.

getMegaphone=function(){
return c('DOM').scry(this.element,'.megaphone_location_gsv2_typeahead')[0];};
n.prototype.

showWarning=function(o){
c('CSS').show(this.warningNode);
c('DOM').setContent(this.warningNode,o);
this.warningShown=true;
this.highlight(-1,false);};
n.prototype.

hideWarning=function(){
c('CSS').hide(this.warningNode);
this.warningShown=false;
this.highlight(this.index,false);};
n.prototype.

setLoading=function(o){
if(this.loading!=o){
this.loading=o;

this.renderTypeaheadList
({results:this.results,
loading:o});}};


n.prototype.

first=function(){
this.index=this.autoSelect?0:-1;
this.highlight(this.index);};
n.prototype.

prev=function(){
if(this.isGSV2){




if(this.index<0||
this.index===0&&this.autoSelect)
this.index=this.items.length;}else

if(this.index<=0)

this.index=this.items.length;


this.ignoreMouseover=true;
l.prev.call(this);};
n.prototype.

next=function(){



if(this.isGSV2&&this.autoSelect&&this.index>=this.items.length-1)
this.index=-1;


if(!this.isGSV2&&this.index+1>=this.items.length)
this.index=-1;


this.ignoreMouseover=true;
l.next.call(this);};
n.prototype.

highlight=function(o,p){
p=p!==false&&this.index!=o;

if(!p||this.inform('beforeHighlight')!==false){
var q=this.warningShown||!this.autoSelect?-1:0;
l.highlight.call(this,
Math.max(q,o),
p);}};


n.prototype.

isNullState=function(){
return !String(this.value).trim();};
n.prototype.

updateCurrentKeywordContainer=function(){
var o=this.currentKeywordContainer;
if(this.isNullState()){
this.currentKeywordContainer=this.contentSuggestion;}else 

this.currentKeywordContainer=this.contentKeyword;


if(o&&o!==this.currentKeywordContainer){


c('CSS').hide(o);
o.removeChild(this.keywordResultsContainer);
this.currentKeywordContainer.appendChild(this.keywordResultsContainer);}};

n.prototype.

updateCurrentEntityContainer=function(){
var o=this.currentEntityContainer,
p=!String(this.value).trim();
if(p&&this.entityResults){
this.currentEntityContainer=this.contentEntity;}else 

this.currentEntityContainer=this.contentEntity;


if(o&&o!=this.currentEntityContainer){
c('CSS').hide(o);
o.removeChild(this.entityResultsContainer);
this.currentEntityContainer.appendChild(this.entityResultsContainer);}};

n.prototype.

hasValidRecentSearches=function(){
if(!c('FacebarGlobalOptions').hasRecentSearchNullState||
!this.keywordResults)
return false;

return this.keywordResults.some(function(o){return o.isRecent;});};
n.prototype.

copyProps=function(o){
return babelHelpers['extends']
({accessibilityElement:this.accessibilityElement,
onClearHighlight:this.handleClearHighlight,
onHighlight:this.handleHighlight,
onRender:this.handleRender,
onSelect:this.handleSelect},
o);};

n.prototype.

renderList=function(o,p){
c('ReactDOM').render
(c('React').createElement(c('FacebarTypeaheadList.react'),this.copyProps(o)),
p);};

n.prototype.

renderGSV2TypeaheadList=function(o){
var p=
this.copyProps(Object.assign
({},
o,
{isKeywordList:true})),

q=this.copyProps(o),
r=
this.copyProps(Object.assign
({},
o,
{isKeywordList:true}));


p.results=this.isNullState()?
this.keywordResults.filter
(function(v){return !v.isRecent;}):

this.keywordResults;

r.results=this.isNullState()?
[]:
this.results.filter(function(v){return v.isSeeMore;});



q.results=this.entityResults.filter(function(v){return !v.isRecent;});
if(r.results.length>0||this.isNullState()){
p.loading=false;
q.loading=false;}else
if(this.entityTop||q.results.length===0){


q.loading=false;}else 


p.loading=false;


var s=!!q.results.length,
t=!!p.results.length;

this.renderList(p,this.keywordResultsContainer);
this.renderList(q,this.entityResultsContainer);

var u=false;

if(this.isNullState()){
q.results=
this.entityResults.filter(function(v){return !!v.isRecent;});
this.renderList(q,this.recentSearchContainer);
u=!!q.results.length;}


this.updateCurrentKeywordContainer();
this.updateCurrentEntityContainer();

this.renderList(r,this.seeMoreContainer);


c('CSS').conditionShow(this.currentKeywordContainer,t);
c('CSS').conditionShow(this.contentRecent,u);
c('CSS').conditionShow(this.currentEntityContainer,s);

c('CSS').conditionShow
(this.contentSeeMore,
this.seeMoreResult!=null&&!this.isNullState());};

n.prototype.

renderTypeaheadList=function(o){
o=o||{};

if(this.isGSV2){
this.renderGSV2TypeaheadList(o);}else 

this.renderList(o,this.resultsContainer);};




f.exports=n;}),null);

/** js/search/facebar/behaviors/DismissNUXOnFocus.js */






__d('DismissNUXOnFocus',['Arbiter','NavigationMessage','Run','SubscriptionsHandler'],(function a(b,c,d,e,f,g){

'use strict';











function h(i){
this.view=i.getCore().view;
this.subscriptionsHandler=new (c('SubscriptionsHandler'))();}
h.prototype.

enable=function(){
this.subscriptionsHandler.addSubscriptions
(c('Arbiter').subscribe(c('NavigationMessage').NAVIGATION_BEGIN,function(){
this.disable();}.
bind(this)));


c('Run').onLeave(function(){
this.disable();}.
bind(this));

this.setup();};
h.prototype.

disable=function(){
this.teardown();};
h.prototype.

setup=function(){
this.subscriptionsHandler.addSubscriptions
(this.view.subscribe('show',this.onViewShow.bind(this)));};

h.prototype.

teardown=function(){
this.subscriptionsHandler.release();};
h.prototype.

onViewShow=function(){
c('Arbiter').inform('SearchAwareness.weakDismissUnit');};




f.exports=h;}),null);

/** www/__virtual__/x/XWarmUserRequestArgsController.js */



__d("XWarmUserRequestArgsController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/search\/browse\/warm\/requestargs\/",{query:{type:"String"},csid:{type:"String"}});}),

null);

/** js/search/facebar/behaviors/FacebarTypeaheadBrowsePreload.js */





__d('FacebarTypeaheadBrowsePreload',['AsyncRequest','XWarmUserRequestArgsController','emptyFunction'],(function a(b,c,d,e,f,g){

'use strict';







function h(i){
this._core=i.core;
this._typeahead=i;}
h.prototype.

enable=function(){
this._core.subscribe('execute',this.preloadOnNavigate.bind(this));};
h.prototype.





preloadOnNavigate=function(i,j){
if(j.type==='keyword'){
var k=c('XWarmUserRequestArgsController').
getURIBuilder().
setString('query',String(j.text));
if(j.csid)
k.setString('csid',String(j.csid));

new (c('AsyncRequest'))().
setURI(k.getURI()).
setAllowCrossPageTransition(true).
send();}};

h.prototype.

disable=function(){
c('emptyFunction')();};



f.exports=h;}),null);

/** js/search/facebar/behaviors/FacebarTypeaheadInjectedSuggestion.js */




__d('FacebarTypeaheadInjectedSuggestion',['csx','cx','fbt','Arbiter','DOM'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';






var k=3,
l=0,
m;



function n(o){
this.core=o.getCore();
this.$FacebarTypeaheadInjectedSuggestion_view=this.core.view;}
n.prototype.

enable=function(){
c('Arbiter').subscribe
('FacebarTypeahead.injectedSuggestion',
function(){return this.addSuggestionTextToSearchBox();}.bind(this));


c('Arbiter').subscribe
('FacebarTypeahead.removeInjectedSuggestion',
function(){return this.removeSuggestionTextToSearchBox();}.bind(this));


c('Arbiter').subscribe
('FacebarTypeahead.showSuggestionBadge',
function(){return this.showSuggestionBadge(true);}.bind(this));


c('Arbiter').subscribe
('FacebarTypeahead.hideSuggestionBadge',
function(){return this.showSuggestionBadge(false);}.bind(this));};



n.prototype.

disable=function(){
this.$FacebarTypeaheadInjectedSuggestion_subscription.unsubscribe();};
n.prototype.

showSuggestionBadge=function(o){
var p=
c('DOM').scry(this.core.getElement(),"._5861")[0];
if(p){
var q=
p.getElementsByClassName
('injectedSearchSuggestion')[
0];

if(!q)
return;


if(o){
q.style.visibility='visible';}else 

q.style.visibility='hidden';}};


n.prototype.

removeSuggestionTextToSearchBox=function(){
if(!l)
return;



--l;

if(!l){
var o=
c('DOM').scry(this.core.getElement(),"._5861")[0],
p=
o.getElementsByClassName('injectedSearchSuggestion')[0];
o.removeChild(p);}else
if(m){
var q=j._({"suggestion":["{suggestionCount} new suggestion","fe14147a2ecdd36e656cb9c92b08e4fd"],"suggestions":["{suggestionCount} new suggestions","e6c2160b49d44b76ee9c206843943523"]},
[j.param('suggestionCount',l),
j['enum'](l===1?'suggestion':'suggestions',
{suggestion:'suggestion',suggestions:'suggestions'})]);

m.innerText=q;}};

n.prototype.

addSuggestionTextToSearchBox=function(){
if(l){
if(m&&
l<k)
m.innerText=l+1+
' new suggestions';}else{



var o=
c('DOM').scry(this.core.getElement(),"._5861")[0];
if(o){
m=document.createElement('DIV');
var p=document.createTextNode('1 new suggestion');
m.style.cssFloat='right';
m.appendChild(p);
var q=document.createElement('DIV');
q.className=
"_586j injectedSearchSuggestion";
q.appendChild(m);

o.appendChild(q);}}


l+=1;};



f.exports=n;}),null);

/** js/search/facebar/behaviors/FacebarTypeaheadNavigation.js */





__d('FacebarTypeaheadNavigation',['Arbiter','FacebarNavigation','emptyFunction'],(function a(b,c,d,e,f,g){

'use strict';






function h(i){
this._core=i.core;
this._preserveQuery=false;
this._typeahead=i;}
h.prototype.

enable=function(){
c('FacebarNavigation').registerBehavior(this);
this._core.subscribe('execute',this.executedUserQuery.bind(this));};
h.prototype.






executedUserQuery=function(i,j){
this._preserveQuery=true;};
h.prototype.




pageTransition=function(){
if(!this._preserveQuery){
this._core.close();
this._core.reset();}else 

this._preserveQuery=false;};

h.prototype.




setPageQuery=function(i){
i=this._core.setPageQuery(i);
this._typeahead.inform('navigation',i,c('Arbiter').BEHAVIOR_PERSISTENT);};



Object.assign(h.prototype,
{disable:c('emptyFunction')});


f.exports=h;}),null);

/** js/search/facebar/behaviors/FacebarTypeaheadPrefixLengthOrderedCache.js */





__d('FacebarTypeaheadPrefixLengthOrderedCache',['emptyFunction','Arbiter'],(function a(b,c,d,e,f,g){

'use strict';





function h(i){
this._typeahead=i;}
h.prototype.

enable=function(){
this._typeahead.data.inform('setSortFunction',function(i){
return function(j,k){


if((j.keyword_type==='local'||j.keyword_type==='local_category')&&
(k.keyword_type==='local'||k.keyword_type==='local_category'))

return 0;

if(j.cache_id_length!==k.cache_id_length)
return j.cache_id_length-k.cache_id_length;


var l=this.getCost(j,i)-this.getCost(k,i);
if(l!==0)
return l;


return (j.semantic||'').localeCompare(k.semantic||'');}.
bind(this);}.
bind(this),c('Arbiter').BEHAVIOR_STATE);};
h.prototype.

getCost=function(i,j){
return i.cost||0;};



Object.assign(h.prototype,
{disable:c('emptyFunction')});


f.exports=h;}),null);

/** js/search/facebar/behaviors/FacebarTypeaheadQuickSelect.js */





__d('FacebarTypeaheadQuickSelect',['FacebarStructuredText','URI'],(function a(b,c,d,e,f,g){

'use strict';



var h='/search/web/direct_search.php';


function i(j){
this._core=j.getCore();
this._view=j.getView();
this._input=this._core.input;
this._beforeSelectListener=null;
this._quickSelectListener=null;}
i.prototype.

enable=function(){
this._beforeSelectListener=this._view.subscribe
('beforeSelect',
this._quickSelect.bind(this));

this._quickSelectListener=this._view.subscribe
('quickSelect',
this._quickSelect.bind(this));};

i.prototype.

_quickSelect=function(j,k){


if(k&&k.selected)


return true;

var l=this._input.getValue().toArray(),
m=new (c('FacebarStructuredText'))(l),
n=m.toString();

if(!n)
return true;

var o=
new (c('URI'))(h).addQueryData('q',n),
p=
{input_query:n,
type:'quickselect',
text:n,
position:0,
with_mouse:0,
semantic:'quickselect('+o.toString()+')',
extra_uri_params:
{source:'quickselect',
sid:this._core.getSessionID()},

uri:o};

this._core.inform('quickSelectRedirect',p);
this._core.executeQuery(p);
return false;};
i.prototype.

disable=function(){
this._beforeSelectListener&&
this._view.unsubscribe(this._beforeSelectListener);
this._quickSelectListener&&
this._view.unsubscribe(this._quickSelectListener);};



f.exports=i;}),null);

/** js/search/facebar/behaviors/FacebarTypeaheadRecorderBasic.js */





__d('FacebarTypeaheadRecorderBasic',['FacebarTypeaheadRecorder'],(function a(b,c,d,e,f,g){

'use strict';




function h(i){
this._typeahead=i;}
h.prototype.

enable=function(){
var i=this._typeahead;
this._recorder=new (c('FacebarTypeaheadRecorder'))(i);};
h.prototype.

disable=function(){
this._typeahead.unsubscribe(this._subscription);
this._recorder=null;
this._subscription=null;};



Object.assign(h.prototype,
{_subscription:null});


f.exports=h;}),null);

/** www/__virtual__/x/XSearchS19NNuxController.js */



__d("XSearchS19NNuxController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/search\/async\/s19n_nux\/",{check_eligibility:{type:"Exists",defaultValue:false},dismiss:{type:"Exists",defaultValue:false}});}),

null);

/** js/search/facebar/behaviors/FacebarTypeaheadS19NNux.js */







__d('FacebarTypeaheadS19NNux',['ix','cx','fbt','regeneratorRuntime','Promise','AsyncRequest','CSS','DOM','Image.react','React','ReactRenderer','SubscriptionsHandler','XSearchS19NNuxController','fbglyph'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';




























function k(l){this.


























































$FacebarTypeaheadS19NNux_onCloseButtonClick=function(){
new (c('AsyncRequest'))(c('XSearchS19NNuxController').getURIBuilder().getURI()).
setMethod('POST').
setData
({dismiss:true}).

send();
this.disable();}.
bind(this);this.$FacebarTypeaheadS19NNux_core=l.core;this.$FacebarTypeaheadS19NNux_view=l.view;this.$FacebarTypeaheadS19NNux_root=this.$FacebarTypeaheadS19NNux_view.root;this.$FacebarTypeaheadS19NNux_nux=c('DOM').create('div',{className:"_1ceu"});this.$FacebarTypeaheadS19NNux_dismissedNUX=false;this.$FacebarTypeaheadS19NNux_shouldShowNUX=false;this.$FacebarTypeaheadS19NNux_subscriptionsHandler=new (c('SubscriptionsHandler'))();}k.prototype.enable=function(){var l=this.$FacebarTypeaheadS19NNux_nux;if(l==null)return;c('DOM').prependContent(this.$FacebarTypeaheadS19NNux_root,this.$FacebarTypeaheadS19NNux_nux);c('ReactRenderer').renderComponent(c('React').createElement('div',{className:"_1cev"},c('React').createElement('div',{className:"_1cew"},j._(["{Bolded part of message} For the best results, choose a prediction below or finish typing your search.","ade69e9df3c7dc0278d7c4b49d875bdf"],[j.param('Bolded part of message',c('React').createElement('strong',null,j._(["New!","9e0609771e879d6041718363b183149c"])))])),c('React').createElement('a',{href:'#',className:"_1cex",onClick:this.$FacebarTypeaheadS19NNux_onCloseButtonClick},c('React').createElement(c('Image.react'),{src:h("114708")}))),l);this.$FacebarTypeaheadS19NNux_subscriptionsHandler.addSubscriptions(this.$FacebarTypeaheadS19NNux_view.subscribe('show',this.$FacebarTypeaheadS19NNux_onViewShow.bind(this)),this.$FacebarTypeaheadS19NNux_view.subscribe('filter',this.$FacebarTypeaheadS19NNux_onViewFilter.bind(this)));};k.prototype.disable=function(){c('DOM').remove(this.$FacebarTypeaheadS19NNux_nux);this.$FacebarTypeaheadS19NNux_nux=null;this.$FacebarTypeaheadS19NNux_subscriptionsHandler.release();};k.prototype.

$FacebarTypeaheadS19NNux_onViewShow=function l(){return c('regeneratorRuntime').async(function m(n){while(1)switch(n.prev=n.next){case 0:
c('CSS').removeClass(this.$FacebarTypeaheadS19NNux_nux,"_1cey");n.next=3;return c('regeneratorRuntime').awrap
(this.$FacebarTypeaheadS19NNux_getShouldShowNUX());case 3:this.$FacebarTypeaheadS19NNux_shouldShowNUX=n.sent;
c('CSS').conditionClass
(this.$FacebarTypeaheadS19NNux_nux,
"_1cey",
this.$FacebarTypeaheadS19NNux_isTypedQuery()&&this.$FacebarTypeaheadS19NNux_shouldShowNUX);case 5:case 'end':return n.stop();}},null,this);};k.prototype.



$FacebarTypeaheadS19NNux_onViewFilter=function(){
c('CSS').conditionClass
(this.$FacebarTypeaheadS19NNux_nux,
"_1cey",
this.$FacebarTypeaheadS19NNux_isTypedQuery()&&this.$FacebarTypeaheadS19NNux_shouldShowNUX);};

k.prototype.

$FacebarTypeaheadS19NNux_isTypedQuery=function(){
var l=
this.$FacebarTypeaheadS19NNux_core.getValue()!=null?
this.$FacebarTypeaheadS19NNux_core.getValue().toString():
null;

return l!=null&&l.length>0;};
k.prototype.

$FacebarTypeaheadS19NNux_getShouldShowNUX=function l(){return c('regeneratorRuntime').async(function m(n){while(1)switch(n.prev=n.next){case 0:return n.abrupt('return',
new (c('Promise'))(function(o){
new (c('AsyncRequest'))(c('XSearchS19NNuxController').getURIBuilder().getURI()).
setMethod('POST').
setData
({check_eligibility:true}).

setHandler(function(p){
return (o
(!p.getPayload().is_dismissed_or_impression_cap_reached));}).


send();}));
case 1:case 'end':return n.stop();}},null,this);};




f.exports=k;}),null);

/** js/search/facebar/behaviors/FacebarTypeaheadSeeMore.js */




__d('FacebarTypeaheadSeeMore',['cx','fbt','FacebarGSv2Echo','FacebarGlobalOptions','FacebarJSConstants','FacebarKeywordSearchUtils','FacebarStructuredText'],(function a(b,c,d,e,f,g,h,i){

'use strict';











function j(k){
this.$FacebarTypeaheadSeeMore_core=k.getCore();
this.$FacebarTypeaheadSeeMore_view=this.$FacebarTypeaheadSeeMore_core.view;}
j.prototype.

enable=function(){
this.$FacebarTypeaheadSeeMore_subscription=
this.$FacebarTypeaheadSeeMore_view.subscribe('seeMore',this.$FacebarTypeaheadSeeMore_buildSeeMore.bind(this));};
j.prototype.

disable=function(){
this.$FacebarTypeaheadSeeMore_subscription.unsubscribe();};
j.prototype.

$FacebarTypeaheadSeeMore_buildSeeMore=function(k,l){
var m=l.value.toString().trim();
m=c('FacebarGSv2Echo').normalizeValue(m);
var n=c('FacebarKeywordSearchUtils').makeFacebarEntry(m),

o=void 0;
if(c('FacebarGlobalOptions').hasKeywordOnlyTypeahead){
o=i._(["See all results for {query}","90f938b2d05b71f1c77cfd2212007939"],[i.param


('query',m)]);}else 


o=i._(["See all results for \"{query}\"","f05332c58f7f359d3e22a0c19321ddaf"],[i.param


('query',m)]);



return babelHelpers['extends']({},
n,
{query_string:m,
icon_class:"_5b1w",
isSeeMore:true,
structure:c('FacebarStructuredText').fromString(m),
displayStructure:c('FacebarStructuredText').fromString(String(o)),
uri:n.uri,
tags:{},
isSingleState:this.$FacebarTypeaheadSeeMore_core.data.getSingleState(),
keywordType:c('FacebarJSConstants').keywordTypes.escape,
keywordSource:c('FacebarJSConstants').keywordTypes.escape});};




f.exports=j;}),null);

/** js/search/facebar/behaviors/FacebarTypeaheadSelectAll.js */





__d('FacebarTypeaheadSelectAll',['requestAnimationFrame'],(function a(b,c,d,e,f,g){

'use strict';




function h(i){
this._core=i.getCore();
this._listener=null;}
h.prototype.

enable=function(){
var i=this._core.input;

this._listener=this._core.subscribe('focus',function(j,k){


var l=k&&k.catchup;



l||c('requestAnimationFrame')(function(){
i.selectInput();});});};


h.prototype.

disable=function(){
this._listener&&this._core.unsubscribe(this._listener);};



f.exports=h;}),null);

/** js/search/facebar/behaviors/FacebarTypeaheadShortcut.js */





__d('FacebarTypeaheadShortcut',['KeyEventController','Run','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g){

'use strict';







function h(i){
this._input=i.core.input;
this._view=i.view;
this._listener=null;}
h.prototype.

enable=function(){
this._registerListener();};
h.prototype.

disable=function(){};h.prototype.

_registerListener=function(){
this._listener&&this._listener.remove();
this._listener=
c('KeyEventController').registerKey
('SLASH',
this._handleKeydown.bind(this));




c('Run').onLeave(function(){
c('setTimeoutAcrossTransitions')(this._registerListener.bind(this),0);}.
bind(this));};
h.prototype.

_handleKeydown=function(i){
var j=i.getModifiers().shift;
if(j)
return;


this._selectInput();

return false;};
h.prototype.

_selectInput=function(){
this._view.setAutoSelect(true);

this._input.focus();
this._input.selectInput();

this._input.inform('shortcut',
{shift:false});};





f.exports=h;}),null);

/** js/search/facebar/behaviors/FacebarTypeaheadStickyFilters.js */






__d('FacebarTypeaheadStickyFilters',['Arbiter','NavigationMessage','Run','SubscriptionsHandler','enumerate','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g){

'use strict';









var h=false,
i=5000,
j='/search/top';











function k(l){
this.core=l.getCore();
this.filters={};
this.subscriptionsHandler=new (c('SubscriptionsHandler'))();
this.view=this.core.view;}
k.prototype.

enable=function(){
this.subscriptionsHandler.addSubscriptions
(c('Arbiter').subscribe

('SearchLHCFilters.initStickyFilters',
function(l,m){





for(var n=c('enumerate')(this.filters),o=Array.isArray(n),p=0,n=o?n:n[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var q;if(o){if(p>=n.length)break;q=n[p++];}else{p=n.next();if(p.done)break;q=p.value;}var r=q,s=r[0],t=r[1];
if(!(s in m))
t.active=false;}



for(var u=c('enumerate')(m),v=Array.isArray(u),w=0,u=v?u:u[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var x;if(v){if(w>=u.length)break;x=u[w++];}else{w=u.next();if(w.done)break;x=w.value;}var y=x,z=y[0],aa=y[1],
ba={value:aa,active:true};
this.filters[z]=ba;}}.

bind(this)),

c('Arbiter').subscribe(c('NavigationMessage').NAVIGATION_BEGIN,function(event,l){
this.resetFiltersIfNotSearching();}.
bind(this)),
this.view.subscribe('filter',this.handleFilter.bind(this)),
this.core.subscribe('magSearch',this.handleSearch.bind(this)),
this.view.subscribe('afterSeeMore',this.handleSeeMore.bind(this)));


c('Run').onLeave(function(){
this.resetFiltersIfNotSearching();}.
bind(this));};

k.prototype.

disable=function(){
this.teardown();};
k.prototype.

teardown=function(){
this.subscriptionsHandler.release();};
k.prototype.


handleFilter=function(l,m){
var n=m.results.filter
(function(o){return !o.isNullState&&!o.isTrending;});

this.updateResultData(n);};
k.prototype.


handleSearch=function(l,m){
this.updateResultData([m]);};
k.prototype.

handleSeeMore=function(l,m){
var n=m.results.filter(function(o){return o.isSeeMore;});
this.updateResultData(n);};
k.prototype.

resetFiltersIfNotSearching=function(){



if(h)
return;


h=true;

c('setTimeoutAcrossTransitions')(function(){
var l=window.location.pathname;


if(l.indexOf(j)===-1)
for(var m=c('enumerate')(this.filters),n=Array.isArray(m),o=0,m=n?m:m[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var p;if(n){if(o>=m.length)break;p=m[o++];}else{o=m.next();if(o.done)break;p=o.value;}var q=p,r=q[1];
r.active=false;}



h=false;

c('Run').onLeave(function(){
this.resetFiltersIfNotSearching();}.
bind(this));}.

bind(this),i);};
k.prototype.






updateResultData=function(l){
for(var m=0;m<l.length;m++){
var n=l[m];

if(n.type==='keyword'){
var o=n.uri.getQueryData();
for(var p=c('enumerate')(this.filters),q=Array.isArray(p),r=0,p=q?p:p[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var s;if(q){if(r>=p.length)break;s=p[r++];}else{r=p.next();if(r.done)break;s=r.value;}var t=s,u=t[0],v=t[1];
if(v.active){
o[u]=v.value;}else 



n.uri.removeQueryData(u);}}}};








f.exports=k;}),null);

/** js/search/facebar/behaviors/SearchAwarenessLearningNUX.js */






__d('SearchAwarenessLearningNUX',['csx','cx','Arbiter','CSS','DOM','FunnelLogger','NavigationMessage','Run','SearchAwarenessDispatcher','SearchAwarenessWebConfig','SearchPivotType','SubscriptionsHandler'],(function a(b,c,d,e,f,g,h,i){

'use strict';















var j='WWW_SEARCH_AWARENESS_LEARNING_NUX_FUNNEL';

































function k(l){
this.core=l.getCore();
this.view=this.core.view;
this.data=this.core.data;

this.debug=false;

this.subscriptionsHandler=new (c('SubscriptionsHandler'))();
this.showingFirstStep=true;
this.setupComplete=false;
this.setupSecondStepComplete=false;
this.hasSpaceForToolTip=true;


this.secondStepPivot=c('SearchPivotType').LEARNING_NUX_SECOND_STEP;
this.config=
{aw_id:null,
ghost_text:null,
block_ta_entity_clicks:null,
activation_window:0,
encoded_query:null,
actor_id:null,
story_id:null,
global_share_id:null,
search_suggestion_unit_style:null,
show_second_step:null};


this.firstStepPivot=c('SearchPivotType').LEARNING_NUX_STANDALONE;}
k.prototype.

enable=function(){
var l=
this.core.getValue()!=null?
this.core.getValue().toString():
null;

if(l==null||l.length>0&&!this.data.getSingleState())
return;


this.subscriptionsHandler.addSubscriptions
(c('Arbiter').subscribe
('SearchAwareness.triggerLearningNUX',
function(m,n){
if(n.origin===c('SearchPivotType').LEARNING_NUX||
n.origin===c('SearchPivotType').LEARNING_NUX_STANDALONE||
n.origin===c('SearchPivotType').TRIGGERED_LEARNING_NUX){
this.firstStepPivot=n.origin;
this.setup();}else 

this.setupSecondStep();}.

bind(this)),



c('Arbiter').subscribe(c('NavigationMessage').NAVIGATION_BEGIN,function(){
this.disable();}.
bind(this)),
c('Arbiter').subscribe('SearchAwareness.dismissUnit',function(){
c('FunnelLogger').appendAction
(j,
'clicked_dismiss_button');


if(this.config.search_suggestion_unit_style==='typeahead_tooltip')
c('CSS').removeClass
(this.view.getElement(),
"_55mg");}.


bind(this)),

this.core.subscribe('change',function(){
if(this.config.search_suggestion_unit_style==='typeahead_tooltip'){
c('CSS').removeClass
(this.view.getElement(),
"_55mf");

c('CSS').removeClass
(this.view.getElement(),
"_55mg");}}.


bind(this)),


c('Arbiter').subscribe('SearchAwarenessTriggeredLearningNUX.dismiss',function(){
this.disable();}.
bind(this)));


c('Run').onLeave(function(){
this.disable();}.
bind(this));

this.setup();};
k.prototype.

disable=function(){
this.teardown();};
k.prototype.

setup=function(){
if(this.setupComplete)
return;


var l=
this.getHiddenAwarenessUnit(this.firstStepPivot),

m=
this.core.getValue()!=null?
this.core.getValue().toString():
null;





if(l==null||
m==null||
m.length>0&&!this.data.getSingleState())

return;


this.config=JSON.parse

(l.getAttribute('data-config'));






if(this.config.search_suggestion_unit_style==='null_state_nux'||
this.config.search_suggestion_unit_style==='null_state_nux_direct')
this.secondStepPivot=c('SearchPivotType').TYPEAHEAD_TOOLTIP;


if(this.config.ghost_text!=null){
var n=c('DOM').scry
(document.body,
"._586i")[
0];

if(n==null)
n=c('DOM').scry
(document.body,
"._1frb")[
0];


if(n){
c('CSS').addClass
(n,
"_55me");

n.setAttribute
('data-ghost-text',
this.config.ghost_text);}}




this.firstStep=
c('DOM').create
('div',

{'class':"_1qs6"},

l);


c('DOM').prependContent
(this.view.getElement(),
this.firstStep);


this.mask=
c('DOM').create
('div',

{className:"_3lif"});


c('DOM').appendContent(document.body,this.mask);

this.subscriptionsHandler.addSubscriptions
(this.view.subscribe('show',this.onViewShow.bind(this)),
this.view.subscribe('hide',this.onViewHide.bind(this)),
this.view.subscribe('filter',this.onViewFilter.bind(this)),
this.view.subscribe('beforeSelect',this.onViewBeforeSelect.bind(this)),
this.core.subscribe('magSearch',this.onCoreMagSearch.bind(this)));




if(this.view.visible)
this.onViewShow();


this.showSecondStepAwarenessUnit();
this.activationWindowTimer=setTimeout(function(){
this.disable();}.
bind(this),this.config.activation_window);

this.setupComplete=true;};
k.prototype.

teardown=function(){
if(this.mask)
c('CSS').removeClass
(this.mask,
"_3lih");



c('CSS').removeClass
(this.view.getElement(),
"_3lii");


c('CSS').removeClass
(this.view.getElement(),
"_1qs7");


c('CSS').removeClass
(this.view.getElement(),
"_55mf");


c('CSS').removeClass
(this.view.getElement(),
"_55mg");


c('CSS').removeClass
(this.core.getElement(),
"_55mh");


if(this.debug)
return;


if(this.mask){
c('DOM').remove(this.mask);
this.mask=null;}


if(this.firstStep){
c('DOM').remove(this.firstStep);
this.firstStep=null;}


if(this.secondStep){
c('DOM').remove(this.secondStep);
this.secondStep=null;}


this.subscriptionsHandler.release();};
k.prototype.

setupSecondStep=function(){
if(this.setupSecondStepComplete||!this.setupComplete)
return;


var l=
this.getHiddenAwarenessUnit(this.secondStepPivot);

if(l==null){
this.setupSecondStepComplete=true;
return;}


var m=JSON.parse

(l.getAttribute('data-config'));


if(m.search_suggestion_unit_style!=null)
this.config.search_suggestion_unit_style=
m.search_suggestion_unit_style;


this.config.show_second_step=m.show_second_step;

this.secondStep=
c('DOM').create
('div',

{className:"_3lig"},

l);


if(this.config.search_suggestion_unit_style==='typeahead_tooltip'){
var n=c('DOM').scry
(this.view.getElement(),
"._2pda")[
0];

c('DOM').prependContent
(n,
this.secondStep);}else 


c('DOM').prependContent
(this.view.getElement(),
this.secondStep);



this.setupSecondStepComplete=true;};
k.prototype.

getHiddenAwarenessUnit=function(l){
var m=c('DOM').scry
(document.body,
"._3lik"),


n=void 0;
for(var o=m,p=Array.isArray(o),q=0,o=p?o:o[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var r;if(p){if(q>=o.length)break;r=o[q++];}else{q=o.next();if(q.done)break;r=q.value;}var s=r,
t=s.getAttribute('data-origin');
if(t===l&&
s.firstChild!=null)
n=s;}



if(n==null)
return undefined;


var u=n.firstChild;

c('DOM').remove(n);

return u;};
k.prototype.

onViewShow=function(){
c('FunnelLogger').startFunnel(j);

this.showOrHideFirstStep();

clearTimeout(this.activationWindowTimer);

var l=c('DOM').scry
(document.body,
"._18vg")[
0];

if(l!=null)
c('CSS').hide(l);


c('CSS').addClass
(this.mask,
"_3lih");


c('CSS').addClass
(this.view.getElement(),
"_3lii");};

k.prototype.

onViewHide=function(){
c('FunnelLogger').endFunnel(j);

this.disable();};
k.prototype.

onViewFilter=function(l,m){
this.showOrHideFirstStep();

var n=0;
for(var o=0;o<m.results.length;o++){
var p=m.results[o];
if(p.type==='keyword'){
n++;
this.updateResultQuery(p);}else 

p.unselectable=true;}



var q=m.results.length-n;

if(this.config.search_suggestion_unit_style==='typeahead_tooltip'&&
q<6){
this.hasSpaceForToolTip=false;}else 

this.hasSpaceForToolTip=true;


var r=
this.core.getValue()!=null?
this.core.getValue().toString():
null,

s=
r!=null&&
r.length>0&&
r.length<3&&
n<3;

c('CSS').conditionClass
(this.core.getElement(),
"_55mh",
s);



if((this.config.block_ta_entity_clicks==null||
this.config.block_ta_entity_clicks===false)&&
r!=null&&
r.length>=1)

c('CSS').addClass
(this.view.getElement(),
"_55mf");};


k.prototype.

onViewBeforeSelect=function(l,m){
c('FunnelLogger').appendAction
(j,
m.selected.type==='keyword'?
'clicked_on_keyword':
'clicked_on_entity');


if(this.blockedClick||this.config.block_ta_entity_clicks!==true||
this.config.show_second_step!==true)
return true;


if(m.selected.type!=='keyword'&&this.hasSpaceForToolTip){
this.blockedClick=true;

c('CSS').addClass
(this.view.getElement(),
"_55mf");

c('CSS').addClass
(this.view.getElement(),
"_55mg");




if(this.config.search_suggestion_unit_style==='typeahead_tooltip'){
var n=10000;

setTimeout(function(){
c('CSS').removeClass
(this.view.getElement(),
"_55mg");}.

bind(this),n);
setTimeout(function(){
c('CSS').removeClass
(this.view.getElement(),
"_55mf");}.

bind(this),n);}else 

setTimeout(function(){
c('CSS').removeClass
(this.view.getElement(),
"_55mg");}.

bind(this),5000);


return false;}


return true;};
k.prototype.

showSecondStepAwarenessUnit=function(){
c('SearchAwarenessDispatcher').triggerLearningNUX
(this.secondStepPivot,
this.config.encoded_query,
this.config.actor_id,
this.config.story_id,
this.config.global_share_id);};

k.prototype.

showOrHideFirstStep=function(){
c('CSS').conditionClass
(this.view.getElement(),
"_1qs7",
this.core.isNullState()||this.data.getSingleState());



if(this.config.show_second_step!==true)
c('CSS').conditionClass
(this.mask,
"_3lih",
this.core.isNullState()||this.data.getSingleState());};


k.prototype.

onCoreMagSearch=function(l,m){
c('FunnelLogger').appendAction
(j,
'hit_enter_or_mag_glass_without_selection');


this.updateResultQuery(m);};
k.prototype.

updateResultQuery=function(l){
var m=l.uri.getQueryData();
m[c('SearchAwarenessWebConfig').url_param_nux_trigger_key]=
this.config.aw_id;
l.uri.setQueryData(m);};




f.exports=k;}),null);

/** js/search/facebar/behaviors/SearchAwarenessSERPSurvey.js */






__d('SearchAwarenessSERPSurvey',['Arbiter','SearchAwarenessWebConfig','SubscriptionsHandler'],(function a(b,c,d,e,f,g){

'use strict';













function h(i){
this.core=i.getCore();
this.view=this.core.view;

this.subscriptionsHandler=new (c('SubscriptionsHandler'))();}
h.prototype.

enable=function(){
this.subscriptionsHandler.addSubscriptions
(c('Arbiter').subscribe
('SearchAwareness.setupSurveyTriggers',
function(i,j){
this.urlParamvalue=j.url_param_value;}.
bind(this)),

this.view.subscribe('hide',this.onViewHide.bind(this)),
this.view.subscribe('filter',this.onViewFilter.bind(this)),
this.core.subscribe('magSearch',this.onCoreMagSearch.bind(this)));};

h.prototype.

disable=function(){
this.teardown();};
h.prototype.

teardown=function(){
this.subscriptionsHandler.release();};
h.prototype.

onViewHide=function(){
if(this.urlParamvalue!=null)
this.disable();};

h.prototype.

onViewFilter=function(i,j){
if(this.urlParamvalue==null)
return;


for(var k=0;k<j.results.length;k++){
var l=j.results[k];
if(l.type==='keyword')
this.updateResultQuery(l);}};


h.prototype.

onCoreMagSearch=function(i,j){
this.updateResultQuery(j);};
h.prototype.

updateResultQuery=function(i){
var j=i.uri.getQueryData();
j[c('SearchAwarenessWebConfig').url_param_survey_trigger_key]=
this.urlParamvalue;
i.uri.setQueryData(j);};




f.exports=h;}),null);

/** js/search/facebar/behaviors/TypeaheadEarlyUserRequest.js */





__d('TypeaheadEarlyUserRequest',['AsyncRequest','FacebarGlobalOptions','XWarmUserRequestArgsController'],(function a(b,c,d,e,f,g){

'use strict';







function h(i){
this._core=i.getCore();
this._listener=null;}
h.prototype.

enable=function(){
this._listener=this._core.subscribe('focus',function(i,j){
new (c('AsyncRequest'))().
setURI(c('XWarmUserRequestArgsController').getURIBuilder().getURI()).
send();
this.disable();}.
bind(this));};
h.prototype.

disable=function(){
this._listener&&this._core.unsubscribe(this._listener);};



f.exports=h;}),null);

/** js/search/typeahead/behaviors/TypeaheadSearchMegaphone.js */






__d('TypeaheadSearchMegaphone',['AsyncRequest','DOM','DOMQuery','Event','Parent'],(function a(b,c,d,e,f,g){









function h(i){'use strict';
this.$TypeaheadSearchMegaphone_typeahead=i;}
h.prototype.

enable=function(){'use strict';
var i=c('DOMQuery').scry
(this.$TypeaheadSearchMegaphone_typeahead.getView().getElement(),
'.megaphone_location_gsv2_typeahead')[
0];

if(!i)
return;



this.ajaxify=
c('DOMQuery').scry(i,'a.megaphone_hide_link[ajaxify]')[0].
getAttribute('ajaxify');


c('DOMQuery').scry(i,'a').forEach(this.processLink,this);


c('Event').listen(i,'click',this.onClick.bind(this));};
h.prototype.

disable=function(){'use strict';};

h.prototype.

processLink=function(i){'use strict';
if(i.getAttribute('ajaxify'))

return;



c('DOM').setAttributes(i,{target:'_blank'});};
h.prototype.

onClick=function(event){'use strict';

var i=c('Parent').byTag(event.target,'a');



if(!i||i.getAttribute('ajaxify'))
return;




c('AsyncRequest').bootstrap(this.ajaxify,i);};



f.exports=h;}),null);
