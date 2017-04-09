if (self.CavalryLogger) { CavalryLogger.start_js(["sPOzl"]); }

/** __static_js_modules__/trendingevent.js */




__d("TrendingEvent",[],(function a(b,c,d,e,f,g){

f.exports={TAG_IMPRESSION:"tag_impression",TAG_FEED_LOAD:"tag_feed_load",TAG_FEED_LONG_VIEW:"tag_feed_long_view",TAG_HIDE:"tag_hide",TOPIC_HEADER_TAPPED:"topic_header_tapped",HOVERCARD_LOAD:"hovercard_load",HOVERCARD_UNLOAD:"hovercard_unload",HOVERCARD_ARTICLE_CLICK:"hovercard_article_click",HOVERCARD_FEED_CLICK:"hovercard_feed_click",HOVERCARD_CONTEXT_CLICK:"hovercard_context_click",OBJECT_CLICK:"object_click",OBJECT_OUTBOUND_CLICK:"object_outbound_click",OBJECT_LIKE:"object_like",OBJECT_COMMENT:"object_comment",OBJECT_SHARE:"object_share",OBJECT_PAGE_LIKE:"object_page_like",OBJECT_FOLLOW:"object_follow",OBJECT_HIDE:"object_hide",PAGINATE:"paginate",TOPIC_SHARE:"topic_share",CATEGORY_HEADER_CLICKED:"category_header_clicked",HOVERCARD_VIDEO_PLAYED:"hovercard_video_played",CLICK_TAG_IMPRESSION:"click_tag_impression"};}),

null);

/** __static_js_modules__/trendinglocation.js */




__d("TrendingLocation",[],(function a(b,c,d,e,f,g){

f.exports={FBFEED_TOPIC_PIVOT:"ftp",FBFEED_TRENDING_TOPIC_PIVOT:"fttp",IOS_TRENDING_DASHBOARD_IN_BOOKMARK:"ios_trending_dashboard_in_bookmark",IOS_TRENDING_INTERSTITIAL:"ios_trending_interstitial",MSITE_PERMALINK:"mp",MSITE_QP:"mq",MSITE_HASHTAG_REDIRECTION:"mhr",MSITE_CARD_PIVOT:"mcp",MSITE_FEED_TOPIC_PIVOT:"mftp",MSITE_FEED_TRENDING_TOPIC_PIVOT:"mfttp",MSITE_NEWS_DASHBOARD:"mnd",MSITE_NEWS_MODULE:"mnm",MSITE_LIVE_EVENT:"mle",MSITE_PAGE_REDIRECTION:"mpr",MSITE_RELATED_TOPICS:"mrt",MSITE_ADS:"ma",MSITE_SEARCH_SPORT_MATCH_MODULE:"mssmm",WEB_FEED_TOPIC_PIVOT:"wftp",WEB_FEED_TRENDING_TOPIC_PIVOT:"wfttp",OLD_FEED_TOPIC_PIVOT:"oftp",OLD_FEED_TRENDING_TOPIC_PIVOT:"ofttp",WWW_PERMALINK:"wp",WWW_QP:"wq",WWW_HASHTAG_REDIRECTION:"whr",WWW_HIDDEN_RHC_TRENDING:"whrt",WWW_HOME_FEED_RHC_TRENDING:"whfrt",WWW_HOME_FEED_RHC_TRENDING_PLACES:"whfrtp",WWW_POST_LIKE_TOPIC_CHAINING:"wpltc",WWW_TOPIC_FEED_RHC_TRENDING:"wtfrt",WWW_POST_SEARCH_RHC_TRENDING:"wpsrt",WWW_PAGE_FEED_RHC_TRENDING:"wpfrt",WWW_BROWSE_RHC_TRENDING:"wbrt",WWW_BROWSE_LATEST_POSTS_TAB:"wblpt",WWW_WORLDCUP_RHC_TRENDING:"wwcrt",WWW_LIVE_EVENT:"wle",WWW_PAGE_REDIRECTION:"wpr",WWW_ADS:"wa",WWW_SEARCH_SPORT_MATCH_MODULE:"wssmm",WWW_NEWS:"wnews",UNKNOWN:"unknown",FBFEED_SENTIMENT_UNIT_PIVOT:"fsup",IOS_SIDEFEED:"ios_sidefeed",IOS_NEWS_FEED:"ios_news_feed",MTOUCH_NEWS_FEED:"mtouch_news_feed",ANDROID_NULL_STATE:"android_null_state",IOS_GRAPH_SEARCH_NULL_STATE:"ios_graph_search_null_state",MSITE_NEWS_NON_GS_NULL_STATE:"mnngns",MSITE_NEWS_NULL_STATE:"mnns",MSITE_LATEST_POSTS_TAB:"mlpt",WWW_NULL_STATE:"www_null_state",SEARCH_TRENDING_MODULE:"stm",IOS_TODAY_MAIN:"ios_today_main",IOS_TODAY_SEE_MORE:"ios_today_see_more",IOS_STORY_TOPIC_HEADER:"ios_story_topic_header",TOPIC_SHARE:"share",TOPIC_MOBILE_SHARE:"mobile_share"};}),

null);

/** js/pubcontent/TrendingRHCLogger.js */





__d('TrendingRHCLogger',['csx','cx','AsyncSignal','BanzaiScuba','CSS','Event','Parent','Run','TrendingRHCConfig'],(function a(b,c,d,e,f,g,h,i){












var j,
k,
l,
m,
n,
o,
p,
q,
r=3,
s=false;







function t(y,z,aa,ba){
var ca=new (c('BanzaiScuba'))
('trending_rhc',
null,

{sampleRate:c('TrendingRHCConfig').sample_rate});


ca.addNormal('country',n);
ca.addNormal
('post_search_trending_feeds',
c('TrendingRHCConfig').post_search_trending_feeds);

ca.addNormal('event',z);
ca.addNormal('position',y);
ca.addNormal('qe_group',k);
var da=y<=r?l:q;
ca.addNormal('source',da);
ca.addNormVector('categories',aa);
ca.addNormal('topic_id',ba);


ca.post();}






function u(y,z){
var aa=y.getAttribute('data-position');
if(!aa)
return;


var ba=y.getAttribute('data-categories'),
ca=ba?JSON.parse(ba):[],
da=y.getAttribute('data-topicid');
t(aa,z,ca,da);}





function v(event){
var y=null,
z=event.getTarget(),
aa=c('Parent').bySelector(event.getTarget(),
"._2w2e");
if(aa){
z=aa;}else
if(!c('CSS').matchesSelector(z,"._5my2")){
y=c('Parent').bySelector(z,"._4_nl");
z=c('Parent').bySelector(z,"._5my2");}


if(!z||
y||
c('CSS').matchesSelector(event.getTarget(),"._19_3")||
c('CSS').matchesSelector(event.getTarget(),"._4v8h"))
return;

u(z,'click');

var ba=z.getAttribute('data-position');
if(ba==='seemore'||ba==='trendingheader')
s=true;}



function w(){
if(!j)
return;

new (c('AsyncSignal'))
('/ajax/pubcontent/trending_rhc/log_hidden',

{keys:JSON.stringify(j),
source:q,
scores:JSON.stringify(o),
query_id:p}).

send();
j=null;}


var x=











{init:function y(z,aa){
l=aa.source;
k=aa.qe_group;
n=aa.country;
j=aa.hidden_keys;
m=aa.query_id;
o=aa.hidden_scores;
var ba=c('Event').listen(z,'click',v);
c('Run').onLeave(function(){
ba.remove();});},




initSeeMore:function y(z,aa,ba,ca,da){
j=aa;
o=ba;
p=ca;
q=da;
var ea=c('Event').listen(z,'click',v);
if(s){
w();}else 

s=false;

c('Run').onLeave(function(){
ea.remove();});},







logHovercardArticleClick:function y(z,aa){
t(z,'hover_article_click',null,aa);},






logHovercardFeedClick:function y(z,aa){
t(z,'hover_feed_click',null,aa);},






logHovercardShare:function y(z,aa){
t(z,'topic_share',null,aa);},





logImpression:function y(z){
u(z,'imp');},


getSource:function y(){
return l;},


getQueryID:function y(){
return m;},


getSeeMoreSource:function y(){
return q;},


getSeeMoreQueryID:function y(){
return p;}};



f.exports=x;}),null);

/** js/pubcontent/trending/TrendingHideReasons.js */




__d('TrendingHideReasons',['fbt','immutable'],(function a(b,c,d,e,f,g,h){

var i=c('immutable').OrderedMap,




j=i
({5:h._(["I want to see something else","a0dff67d23aa855dad3e52870a86a692"]),





1:h._(["I don't care about this","a0ad3697d8ba7033361d0fbc21615a45"]),





2:h._(["I keep seeing this","320199ed672887d8b7915a880bf6a10f"]),





3:h._(["It's offensive or inappropriate","fbd92565224700185d730cc9623e8756"]),





4:h._(["Other","ae07712a4890fb59a88703044f895282"])});







f.exports=j;}),null);

/** js/pubcontent/trending/TrendingTopicHideMenu.react.js */






__d('TrendingTopicHideMenu.react',['cx','ix','fbt','Image.react','ImageBlock.react','InputLabel.react','LeftRight.react','Link.react','React','TrendingHideReasons','XUIRadioInput.react','XUIText.react'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';var k,l,















m=c('React').PropTypes;k=babelHelpers.inherits

(n,c('React').Component);l=k&&k.prototype;n.prototype.






render=function(){
var o=this.props.suppressXOutReasons?
c('React').createElement('div',null):
c('React').createElement('div',null,
this.$TrendingTopicHideMenu_renderSubtitle(),
this.$TrendingTopicHideMenu_renderPollSection());



return (c('React').createElement(c('ImageBlock.react'),
{className:"_4_nl",
spacing:'none'},
c('React').createElement(c('Image.react'),
{className:"_19_0",
src:i("97459")}),

c('React').createElement('div',null,
this.$TrendingTopicHideMenu_renderTitle(),
o)));};



n.prototype.

$TrendingTopicHideMenu_renderTitle=function(){

return (c('React').createElement(c('LeftRight.react'),null,
c('React').createElement(c('XUIText.react'),{weight:'bold'},j._(["Topic Hidden","269902d78af406fde69467a69c701466"])),






c('React').createElement(c('Link.react'),
{className:"_4_nn"},j._(["Undo","987215206cd038bf0ad3f6b995238d36"]))));};




n.prototype.

$TrendingTopicHideMenu_renderSubtitle=function(){

return (c('React').createElement('div',{className:"_3-95"},j._(["We'll try not to show you this topic again.","88482067a75c3fc56f8c656b9c22031b"])));};







n.prototype.

$TrendingTopicHideMenu_renderPollSection=function(){

return (c('React').createElement('form',{action:'#',className:"_3-94"},
c('React').createElement('div',{className:"_3-94"},j._(["Why did you hide it?","0fdc9f69c16940a028c6774fba62cd33"])),






c('TrendingHideReasons').map(function(o,p){

return (c('React').createElement(c('InputLabel.react'),{key:p},
c('React').createElement(c('XUIRadioInput.react'),
{className:"_2p3m",
name:'trending_hide_reason',
value:p,
'data-topicid':this.props.topicId}),

c('React').createElement('label',null,
o)));}.



bind(this)).toArray()));};


function n(){k.apply(this,arguments);}n.propTypes={topicId:m.number.isRequired,category:m.number.isRequired,suppressXOutReasons:m.bool.isRequired};


f.exports=n;}),null);

/** js/pubcontent/trending/categories/TrendingCategoriesIconUnitCallback.js */





__d("TrendingCategoriesIconUnitCallback",[],(function a(b,c,d,e,f,g){

var h=null,

i=

{register:function j(k){
h=k;},



callback:function j(k,l){
h.setCategoryList(k,l);}};




f.exports=i;}),null);

/** www/__virtual__/x/XPubcontentTrendingCategoriesFetchListController.js */



__d("XPubcontentTrendingCategoriesFetchListController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/pubcontent\/trending\/categories\/fetch_list\/",{category:{type:"Enum",required:true,enumType:0},source:{type:"String",required:true},topic_ids_seen:{type:"IntVector",required:true}});}),

null);

/** www/__virtual__/x/XPubcontentTrendingReplaceTrendsController.js */



__d("XPubcontentTrendingReplaceTrendsController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/pubcontent\/trending\/trending_unit\/",{is_expanded:{type:"Bool",defaultValue:false}});}),

null);

/** js/pubcontent/trending/categories/TrendingCategoriesIconUnit.js */






__d('TrendingCategoriesIconUnit',['AsyncRequest','CSS','Event','Style','TrendingCategoriesIconUnitCallback','XPubcontentTrendingCategoriesFetchListController','XPubcontentTrendingReplaceTrendsController','enumerate','tidyEvent'],(function a(b,c,d,e,f,g){






























function h(i){'use strict';
this.$TrendingCategoriesIconUnit_categoryIconMap=i.categoryIconMap;
this.$TrendingCategoriesIconUnit_categoryListMap=i.categoryListMap;
this.$TrendingCategoriesIconUnit_categoryHeaderMap=i.categoryHeaderMap;
this.$TrendingCategoriesIconUnit_loadingBar=i.loadingBar;
this.$TrendingCategoriesIconUnit_selectedCategoryId=i.selectedCategoryId;
this.$TrendingCategoriesIconUnit_initiallySelectedCategoryId=i.selectedCategoryId;
this.$TrendingCategoriesIconUnit_source=i.source;
this.$TrendingCategoriesIconUnit_enableIconSeeMore=i.enableIconSeeMore;

this.$TrendingCategoriesIconUnit_categoryRequestSent=[];

var j=this.$TrendingCategoriesIconUnit_categoryListMap[this.$TrendingCategoriesIconUnit_selectedCategoryId];
this.$TrendingCategoriesIconUnit_currentHeight=j?j.getHeight():0;

c('TrendingCategoriesIconUnitCallback').register(this);
for(var k=c('enumerate')(this.$TrendingCategoriesIconUnit_categoryIconMap),l=Array.isArray(k),m=0,k=l?k:k[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var n;if(l){if(m>=k.length)break;n=k[m++];}else{m=k.next();if(m.done)break;n=m.value;}var o=n,p=o[1];
this.$TrendingCategoriesIconUnit_initCategoryIconListener(p);}


this.$TrendingCategoriesIconUnit_initTrendingUnitRefresh(i.refreshSeconds,i.isExpanded);}
h.prototype.

setCategoryList=
function(i,
j){
'use strict';
this.$TrendingCategoriesIconUnit_categoryListMap[j]=i;
if(j===this.$TrendingCategoriesIconUnit_selectedCategoryId){
if(this.$TrendingCategoriesIconUnit_loadingBar)
c('CSS').hide(this.$TrendingCategoriesIconUnit_loadingBar);

this.$TrendingCategoriesIconUnit_categoryListMap[j].showItems();
this.$TrendingCategoriesIconUnit_currentHeight=this.$TrendingCategoriesIconUnit_categoryListMap[j].getHeight();}};

h.prototype.

$TrendingCategoriesIconUnit_initCategoryIconListener=function(i){'use strict';
var j=i.getCategoryId();

c('tidyEvent')(c('Event').listen(i.getRoot(),'click',function(event){
var k=
j===this.$TrendingCategoriesIconUnit_initiallySelectedCategoryId&&
this.$TrendingCategoriesIconUnit_enableIconSeeMore;
if(k){
if(j===this.$TrendingCategoriesIconUnit_selectedCategoryId)
return;


this.$TrendingCategoriesIconUnit_categoryListMap[j].fetchExtraItems();}

if(j===this.$TrendingCategoriesIconUnit_selectedCategoryId)
return;


this.$TrendingCategoriesIconUnit_categoryIconMap[this.$TrendingCategoriesIconUnit_selectedCategoryId].unselect();
if(this.$TrendingCategoriesIconUnit_categoryListMap[this.$TrendingCategoriesIconUnit_selectedCategoryId]){
this.$TrendingCategoriesIconUnit_currentHeight=
this.$TrendingCategoriesIconUnit_categoryListMap[this.$TrendingCategoriesIconUnit_selectedCategoryId].getHeight();
this.$TrendingCategoriesIconUnit_categoryListMap[this.$TrendingCategoriesIconUnit_selectedCategoryId].hideItems();}

this.$TrendingCategoriesIconUnit_categoryIconMap[j].select();

this.$TrendingCategoriesIconUnit_selectedCategoryId=j;
if(this.$TrendingCategoriesIconUnit_categoryListMap[j]){
if(this.$TrendingCategoriesIconUnit_loadingBar)
c('CSS').hide(this.$TrendingCategoriesIconUnit_loadingBar);


this.$TrendingCategoriesIconUnit_categoryListMap[j].showItems();
this.$TrendingCategoriesIconUnit_currentHeight=this.$TrendingCategoriesIconUnit_categoryListMap[j].getHeight();
return;}


c('Style').set(this.$TrendingCategoriesIconUnit_loadingBar,'height',String(this.$TrendingCategoriesIconUnit_currentHeight));
c('CSS').show(this.$TrendingCategoriesIconUnit_loadingBar);
if(this.$TrendingCategoriesIconUnit_categoryRequestSent[j])
return;

this.$TrendingCategoriesIconUnit_categoryRequestSent[j]=true;

var l=
this.$TrendingCategoriesIconUnit_categoryListMap[this.$TrendingCategoriesIconUnit_initiallySelectedCategoryId],
m=l.getCategoryItemInfo(),

n=c('XPubcontentTrendingCategoriesFetchListController').getURIBuilder().
setEnum('category',j).
setString('source',this.$TrendingCategoriesIconUnit_source).
setIntVector('topic_ids_seen',m.visibleTopicIds).
getURI();
new (c('AsyncRequest'))().
setURI(n).
send();}.
bind(this)));};
h.prototype.

$TrendingCategoriesIconUnit_initTrendingUnitRefresh=function(i,j){'use strict';
var k=i*1000;

setTimeout(function(){
var l=c('XPubcontentTrendingReplaceTrendsController').getURIBuilder().
setBool('is_expanded',j).
getURI();
new (c('AsyncRequest'))(l).send();},
k);};




f.exports=h;}),null);

/** www/__virtual__/x/XPubcontentTrendingCategoriesInsertItemController.js */



__d("XPubcontentTrendingCategoriesInsertItemController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/pubcontent\/trending\/categories\/hide_options\/",{num_removed_topics:{type:"Int",defaultValue:0},trending_topic_id:{type:"Int",required:true},topic_ids:{type:"IntVector",defaultValue:[]},category:{type:"Enum",required:true,enumType:0}});}),

null);

/** www/__virtual__/x/XPubcontentTrendingHideConfirmController.js */



__d("XPubcontentTrendingHideConfirmController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/pubcontent\/trending\/hide_confirm\/",{hidden_topic_id:{type:"Int",required:true},position:{type:"Int",defaultValue:0},reason:{type:"Int",required:true},source:{type:"String"},trqid:{type:"Int",defaultValue:-1}});}),

null);

/** js/pubcontent/trending/categories/TrendingCategoriesRHCHide.js */






__d('TrendingCategoriesRHCHide',['csx','cx','AsyncRequest','CSS','DOM','DOMQuery','Event','immutable','Parent','React','ReactDOM','TrendingRHCLogger','TrendingTopicHideMenu.react','URI','XPubcontentTrendingCategoriesInsertItemController','XPubcontentTrendingHideConfirmController','tidyEvent'],(function a(b,c,d,e,f,g,h,i){

'use strict';





























var j=[],
k=[],
l=false,
m=c('immutable').Map([]),

n=
['webkitAnimationEnd',
'animationend',
'mozAnimationEnd',
'oAnimationEnd',
'MSAnimationEnd'];







function o
(r,
s){

var t=c('DOMQuery').scry(r,"._5my2"),
u=t.filter(function(w){
var x=Number(w.getAttribute('data-position'));
return x>=s;}),

v=[];
u.forEach(function(w){

var x=Number(w.getAttribute('data-position'));
w.setAttribute('data-position',x-1);

var y=c('DOMQuery').scry(w,"._7ge");

y.forEach(function(z){
var aa=new (c('URI'))(z.getAttribute('href')).addQueryData
('position',
x-1);

v.push
({link:z,
uri:aa.toString()});});});




v.forEach(function(w){
var x=w.link;
x.setAttribute('href',w.uri);});}







function p
(r,
s,
t){

var u,v=arguments.length<=3||arguments[3]===undefined?false:arguments[3],
w=c('DOMQuery').find(r,"^._2snq"),
x=c('DOMQuery').find(r,"^._5my2"),
y=v?
"_y-h":
"_4_nj",
z=c('DOM').create
('div',
{className:y}),


aa=Number(x.getAttribute('data-position'));


if(v){(function(){
var fa=m.get(t);



if(fa==null){
m=m.set
(t,
c('immutable').Map([]));

fa=m.get(t);}


var ga=fa.get(s),



ha=setTimeout(function(){
o(w,aa);
j[t].removeItem(x);

c('DOM').insertBefore(x,z);
n.forEach(function(event){
z.addEventListener(event,function(){
c('CSS').removeClass(z,"_y-h");});});},


3000),


ia=c('DOM').scry(r,"._4_nn")[0];
if(ia!=null)
c('tidyEvent')(c('Event').listen(ia,'click',function(){
clearTimeout(ha);}));



if(!ga){
j[t].showExtraItem();


var ja=fa.set
(s,
true);

m=m.set
(t,
ja);}})

();}else{


o(w,aa);
j[t].showExtraItem();



j[t].removeItem(x);
c('DOM').insertBefore(x,z);
n.forEach(function(event){
z.addEventListener(event,function(){
c('CSS').removeClass(z,"_4_nj");});});}




var ba=void 0,
ca=r.firstChild;

if(ca==null||
!(ca instanceof HTMLInputElement)){

if(v){
ba=6;}else 

return;}else 



ba=ca.value;



var da=c('XPubcontentTrendingHideConfirmController').getURIBuilder().
setInt('reason',ba).
setInt('hidden_topic_id',s).
setInt('position',aa);

if(c('TrendingRHCLogger').getSource())
da.setString('source',c('TrendingRHCLogger').getSource());

if(c('TrendingRHCLogger').getQueryID())
da.setInt('trqid',c('TrendingRHCLogger').getQueryID());

var ea=da.getURI();
new (c('AsyncRequest'))().
setURI(ea).
setRelativeTo(r).
send();}


var q=

{addCategoryList:function r(s,t){
j[t]=s;},


confirmHide:function r(s,t,u){
var v=false;
c('tidyEvent')(c('Event').listen(s,'click',function(){
setTimeout(function(){
if(v)
return;

v=true;
p(s,t,u);},
100);}));},




onHideReasonClicked:function r(s,t){

var u=c('DOMQuery').find
(s,
'input[name="trending_hide_reason"]'),

v=parseInt(u.getAttribute('data-topicid'),10);
if(k[v])
return;

k[v]=true;

setTimeout
(function(){
p(s,v,t);
k[v]=false;},

100);},









onHideClicked:function r
(s,
t){

var u=arguments.length<=2||arguments[2]===undefined?false:arguments[2],
v=parseInt(s.getAttribute('data-topicid'),10),

w=c('DOMQuery').find
(s,
"^._5my2"),

x=c('DOM').scry
(w,
"._4_nl")[
0],
y=c('DOMQuery').find
(w,
"._4_nm");

c('CSS').hide(y);

if(x!=null){
c('CSS').show(x);}else{

var z=c('DOM').create('div');
c('ReactDOM').render
(c('React').createElement(c('TrendingTopicHideMenu.react'),
{topicId:v,
category:t,
suppressXOutReasons:u}),

z);

c('DOM').appendContent(w,z);}



if(!l){
if(j[t]==null)
return;

l=true;

var aa=j[t].getCategoryItemInfo(),
ba=aa.visibleTopicIds.concat
(aa.hiddenTopicIds,
aa.removedTopicIds),

ca=aa.removedTopicIds.length;

if(u){
var da=c('DOM').scry
(w,
"._4_nl")[
0];
if(da instanceof HTMLElement)
p(da,v,t,u);}



var ea=
c('XPubcontentTrendingCategoriesInsertItemController').getURIBuilder().
setInt('trending_topic_id',v).
setIntVector('topic_ids',ba).
setInt('num_removed_topics',ca).
setEnum('category',t).
getURI();
new (c('AsyncRequest'))().
setURI(ea).
setRelativeTo(s).
setHandler(function(fa){
l=false;
j[t].addTopics(fa.getPayload());}).

send();}},



onHideMenuUndoClicked:function r(s,t){
var u=c('DOMQuery').find
(s,
"^._4_nl"),

v=c('DOMQuery').find
(u,
"^._5my2 ._4_nm");

c('CSS').hide(u);
c('CSS').show(v);},







hideSeeMoreLink:function r(s,t){
var u=j[t].getCategoryItemInfo();

if(u.hiddenTopicIds.length!==0)
return;


var v=c('Parent').bySelector(s,"._5my7"),
w=c('DOMQuery').scry(v,"a._5my9");
if(w&&w.length===1&&c('CSS').shown(w[0]))
c('CSS').addClass(w[0],"_4_nk");}};





f.exports=q;}),null);

/** js/pubcontent/trending/categories/TrendingCategoryIcon.js */






__d('TrendingCategoryIcon',['cx','BanzaiLogger','CSS','TrendingEvent'],(function a(b,c,d,e,f,g,h){





















function i
(j,
k){
'use strict';
this.$TrendingCategoryIcon_root=j;
this.$TrendingCategoryIcon_iconElement=k.iconElement;
this.$TrendingCategoryIcon_unselectedClass=k.unselectedClass;
this.$TrendingCategoryIcon_selectedClass=k.selectedClass;
this.$TrendingCategoryIcon_categoryId=k.categoryId;

this.$TrendingCategoryIcon_categoryLoggingOffset=k.categoryLoggingOffset;
this.$TrendingCategoryIcon_queryId=parseInt(k.queryId,10);
this.$TrendingCategoryIcon_source=k.source;}
i.prototype.

getRoot=function(){'use strict';
return this.$TrendingCategoryIcon_root;};
i.prototype.

getCategoryId=function(){'use strict';
return this.$TrendingCategoryIcon_categoryId;};
i.prototype.

select=function(){'use strict';
c('CSS').addClass(this.$TrendingCategoryIcon_root,"_5nns");
c('CSS').addClass(this.$TrendingCategoryIcon_iconElement,this.$TrendingCategoryIcon_selectedClass);
c('CSS').removeClass(this.$TrendingCategoryIcon_iconElement,this.$TrendingCategoryIcon_unselectedClass);
this.$TrendingCategoryIcon_root.setAttribute('aria-selected','true');
this.$TrendingCategoryIcon_root.focus();
this.$TrendingCategoryIcon_logSelect();};
i.prototype.

unselect=function(){'use strict';
c('CSS').removeClass(this.$TrendingCategoryIcon_root,"_5nns");
c('CSS').addClass(this.$TrendingCategoryIcon_iconElement,this.$TrendingCategoryIcon_unselectedClass);
c('CSS').removeClass(this.$TrendingCategoryIcon_iconElement,this.$TrendingCategoryIcon_selectedClass);
this.$TrendingCategoryIcon_root.setAttribute('aria-selected','false');};
i.prototype.

$TrendingCategoryIcon_logSelect=function(){'use strict';
var j=
{trending_event:c('TrendingEvent').CATEGORY_HEADER_CLICKED,
trending_location:this.$TrendingCategoryIcon_source,
trending_positions:[this.$TrendingCategoryIcon_categoryLoggingOffset],
query_id:this.$TrendingCategoryIcon_queryId,
tagids:[]};

c('BanzaiLogger').log('TrendingEventLoggerConfig',j);};




f.exports=i;}),null);

/** js/pubcontent/trending/constants/TrendingCategoryConstants.js */





__d('TrendingCategoryConstants',[],(function a(b,c,d,e,f,g){
f.exports=
{ANIMATION_EVENTS:
['webkitAnimationEnd',
'animationend',
'mozAnimationEnd',
'oAnimationEnd',
'MSAnimationEnd'],

FAILSAFE_LIMIT:50,
HEADLINE_TEXT_HEIGHT:30};}),null);

/** www/__virtual__/x/XPubcontentTrendingCategoriesImpressionLoggingController.js */



__d("XPubcontentTrendingCategoriesImpressionLoggingController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/pubcontent\/trending\/categories\/log_impression\/",{topic_ids_by_position:{type:"IntToIntMap",required:true},source:{type:"String",required:true},query_id:{type:"Int",required:true}});}),

null);

/** www/__virtual__/x/XPubcontentTrendingCategoriesSeeMoreController.js */



__d("XPubcontentTrendingCategoriesSeeMoreController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/pubcontent\/trending\/categories\/see_more\/",{topic_ids_seen:{type:"IntVector",defaultValue:[]},num_topics_to_add:{type:"Int",required:true},num_removed_topics:{type:"Int",defaultValue:0},category:{type:"Enum",required:true,enumType:0}});}),

null);

/** js/pubcontent/trending/categories/TrendingCategoryList.js */






__d('TrendingCategoryList',['csx','cx','Arbiter','AsyncRequest','AsyncResponse','BanzaiODS','CSS','DOM','Event','Parent','TrendingCategoriesRHCHide','TrendingCategoryConstants','TrendingLocation','XPubcontentTrendingCategoriesImpressionLoggingController','XPubcontentTrendingCategoriesSeeMoreController','getElementText','getStyleProperty','setImmediate','tidyEvent'],(function a(b,c,d,e,f,g,h,i){



































function j
(k,
l,
m,
n,
o){
'use strict';
this.$TrendingCategoryList_root=k;
this.$TrendingCategoryList_seeMore=l;
this.$TrendingCategoryList_seeAllUnexpanded=n;
this.$TrendingCategoryList_seeAllExpanded=o;

this.$TrendingCategoryList_category=m.category;
this.$TrendingCategoryList_rowsAfterSeeMore=m.rowsAfterSeeMore;
this.$TrendingCategoryList_source=m.source;
this.$TrendingCategoryList_queryId=m.queryId;
this.$TrendingCategoryList_itemsFetched=false;
this.$TrendingCategoryList_shouldTruncateHeadlines=m.truncateHeadlinesWithAttribution;
this.$TrendingCategoryList_suppressXOutReasons=m.suppressXOutReasons||false;

c('TrendingCategoriesRHCHide').addCategoryList(this,this.$TrendingCategoryList_category);

if(m.useDelegateListener)
this.$TrendingCategoryList_initEventDelegationListener();

this.$TrendingCategoryList_initSeeMoreListener();
if(this.$TrendingCategoryList_shouldTruncateHeadlines)
this.$TrendingCategoryList_truncateHeadlines();}

j.prototype.

showItems=function(){'use strict';
c('CSS').show(this.$TrendingCategoryList_root);
c('Arbiter').inform('netego_loaded');

var k=this.getCategoryItemInfo();
this.$TrendingCategoryList_logImpressions
(k.visibleTopicIds,
k.visiblePositions,
this.$TrendingCategoryList_source);};

j.prototype.

hideItems=function(){'use strict';
c('CSS').hide(this.$TrendingCategoryList_root);};
j.prototype.

getHeight=function(){'use strict';
return c('getStyleProperty')(this.$TrendingCategoryList_root,'height');};
j.prototype.

getCategoryItemInfo=function(){'use strict';
var k=[],
l=[],
m=[],
n=[],
o=[];

c('DOM').scry
(this.$TrendingCategoryList_root,
"._5my2").
forEach(function(p){

if(c('CSS').matchesSelector(p,"._5my9")||
c('CSS').matchesSelector(p,"._5otw")||
c('CSS').matchesSelector(p,"._4fr3")||
c('CSS').matchesSelector(p,"._4fr4"))
return;


var q=Number(p.getAttribute('data-topicid')),
r=Number(p.getAttribute('data-position'));

if(c('CSS').matchesSelector(p,"._338c")){
o.push(q);}else
if(c('CSS').matchesSelector(p,"._5my1")){
m.push(q);
n.push(r);}else{

k.push(q);
l.push(r);}});




return {visibleTopicIds:k,
visiblePositions:l,
hiddenTopicIds:m,
hiddenPositions:n,
removedTopicIds:o};};

j.prototype.

showExtraItem=function(){var k,l=this;'use strict';
var m=c('DOM').scry(this.$TrendingCategoryList_root,"._5my1");
if(m.length===0)
return;


var n=Number.MAX_VALUE,
o=null;
m.forEach(function(p){
var q=parseInt(p.getAttribute('data-position'),10);
if(q<n){
o=p;
n=q;}});



if(o!==null)(function(){

var p=o;

c('CSS').removeClass(p,"_5my1");
c('CSS').addClass(p,"_4_ni");
c('CSS').show(p);

c('TrendingCategoryConstants').ANIMATION_EVENTS.forEach(function(event){
p.addEventListener
(event,
function(){
c('CSS').removeClass
(p,
"_4_ni");});});




l.$TrendingCategoryList_logImpressions
([Number(p.getAttribute('data-topicid'))],
[Number(p.getAttribute('data-position'))],
c('TrendingLocation').WWW_HIDDEN_RHC_TRENDING);})();};


j.prototype.

removeItem=function(k){'use strict';
c('CSS').addClass(k,"_338c");
c('CSS').hide(k);};
j.prototype.

fetchExtraItems=function(){'use strict';
if(this.$TrendingCategoryList_itemsFetched)
return;

this.$TrendingCategoryList_itemsFetched=true;

if(this.$TrendingCategoryList_seeMore!==null)
c('CSS').hide(this.$TrendingCategoryList_seeMore);

var k=this.getCategoryItemInfo(),
l=
this.$TrendingCategoryList_rowsAfterSeeMore-k.hiddenTopicIds.length;
if(l<=0){
this.$TrendingCategoryList_showExtraItems();
c('Arbiter').inform('netego_loaded');
return;}


var m=c('DOM').scry
(this.$TrendingCategoryList_root,
"._30_w")[
0];
if(m!=null)
c('CSS').show(m);


var n=k.visibleTopicIds.concat
(k.hiddenTopicIds,
k.removedTopicIds),


o=c('XPubcontentTrendingCategoriesSeeMoreController').getURIBuilder().
setIntVector('topic_ids_seen',n).
setInt('num_topics_to_add',l).
setInt('num_removed_topics',k.removedTopicIds.length).
setEnum('category',this.$TrendingCategoryList_category).
getURI();
new (c('AsyncRequest'))().
setURI(o).
setRelativeTo(this.$TrendingCategoryList_root).
setHandler(function(p){
if(m!=null)
c('CSS').hide(m);

this.addTopics(p.getPayload());
this.$TrendingCategoryList_showExtraItems();
if(this.$TrendingCategoryList_seeAllUnexpanded)
this.$TrendingCategoryList_handleSeeAllTrigger();

c('Arbiter').inform('netego_loaded');}.
bind(this)).
send();};
j.prototype.

addTopics=function(k){'use strict';
if(k==null)
return;

this.$TrendingCategoryList_insertTopics(k);
if(this.$TrendingCategoryList_shouldTruncateHeadlines)
c('setImmediate')(function(){return this.$TrendingCategoryList_truncateHeadlines();}.bind(this));};

j.prototype.

$TrendingCategoryList_insertTopics=function(k){'use strict';
var l=c('DOM').scry
(this.$TrendingCategoryList_root,
"._5myl")[
0];
if(l!=null)
c('DOM').appendContent(l,k);};

j.prototype.

$TrendingCategoryList_initEventDelegationListener=function(){'use strict';
c('tidyEvent')(c('Event').listen(this.$TrendingCategoryList_root,'click',function(event){
var k=event.target;
if(!(k instanceof HTMLElement))
return;


if(c('CSS').matchesSelector(k,"._19_3")){
var l=c('DOM').find
(k,
"._4v8h");

c('TrendingCategoriesRHCHide').onHideClicked
(l,
this.$TrendingCategoryList_category,
this.$TrendingCategoryList_suppressXOutReasons);

return;}else

if(c('CSS').matchesSelector(k,"._4v8h")){

c('TrendingCategoriesRHCHide').onHideClicked
(k,
this.$TrendingCategoryList_category,
this.$TrendingCategoryList_suppressXOutReasons);

return;}


var m=
c('Parent').bySelector(k,"._2p3m");
if(m){
c('TrendingCategoriesRHCHide').onHideReasonClicked
(m,
this.$TrendingCategoryList_category);

return;}


var n=c('Parent').bySelector(k,"._4_nn");
if(n){
c('TrendingCategoriesRHCHide').onHideMenuUndoClicked
(n,
this.$TrendingCategoryList_category);

return;}}.

bind(this)));};
j.prototype.

$TrendingCategoryList_handleSeeAllTrigger=function(){'use strict';
c('CSS').hide(this.$TrendingCategoryList_seeAllUnexpanded);
c('CSS').show(this.$TrendingCategoryList_seeAllExpanded);};
j.prototype.

$TrendingCategoryList_initSeeMoreListener=function(){'use strict';
if(this.$TrendingCategoryList_seeMore==null)
return;


c('tidyEvent')(c('Event').listen(this.$TrendingCategoryList_seeMore,'click',function(){
c('CSS').hide(this.$TrendingCategoryList_seeMore);
this.fetchExtraItems();}.
bind(this)));};
j.prototype.

$TrendingCategoryList_showExtraItems=function(){'use strict';
var k=c('DOM').scry(this.$TrendingCategoryList_root,"._5my1");
if(k.length===0)
return;

var l=Math.min(this.$TrendingCategoryList_rowsAfterSeeMore,k.length),

m=[],
n=[];
for(var o=0;o<l;o++){
c('CSS').show(k[o]);
c('CSS').removeClass(k[o],"_5my1");

m.push(Number(k[o].getAttribute('data-topicid')));
n.push(Number(k[o].getAttribute('data-position')));}


this.$TrendingCategoryList_logImpressions
(m,
n,
c('TrendingLocation').WWW_HIDDEN_RHC_TRENDING);};

j.prototype.

$TrendingCategoryList_logImpressions=
function(k,
l,
m){
'use strict';
if(k.length===0)
return;


var n={};
for(var o=0;o<k.length;o++)
n[l[o]]=k[o];


var p=
c('XPubcontentTrendingCategoriesImpressionLoggingController').getURIBuilder().
setIntToIntMap('topic_ids_by_position',n).
setString('source',m).
setInt('query_id',this.$TrendingCategoryList_queryId).
getURI();
new (c('AsyncRequest'))(p).send();};
j.prototype.








$TrendingCategoryList_truncateHeadlines=function(){'use strict';
var k=c('DOM').scry(this.$TrendingCategoryList_root,"._5v9v");
k.forEach
(function(l){
var m=0,
n='\u2026';
c('setImmediate')
(function(){
var o=
c('DOM').scry
(l,
"._3-9y")[
0];
if(o==null)
return;

c('CSS').addClass(l,"_5ooc");
while(this.$TrendingCategoryList_isHeadlineOverflowing(l)){
var p=c('getElementText')(o),

q=p.split(' ');

q=q.filter(function(s){return s!='';});


q.pop();

var r=q.join(' ');
r+=n;

c('DOM').setContent(o,r);

m++;
if(m>=c('TrendingCategoryConstants').FAILSAFE_LIMIT){
c('BanzaiODS').bumpEntityKey
('trending_rhc',
'truncate_failure');

break;}}


c('CSS').removeClass(l,"_5ooc");}.
bind(this));}.
bind(this));};


j.prototype.

$TrendingCategoryList_isHeadlineOverflowing=function(k){'use strict';
return k.scrollHeight>
c('TrendingCategoryConstants').HEADLINE_TEXT_HEIGHT;};




f.exports=j;}),null);
