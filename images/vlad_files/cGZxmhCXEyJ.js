if (self.CavalryLogger) { CavalryLogger.start_js(["14yRX"]); }

/** __static_js_modules__/mnadsloggereventenum.js */




__d("MNAdsLoggerEventEnum",[],(function a(b,c,d,e,f,g){

f.exports={LINK_CLICK:"messenger_ads_link_click",LINK_CLICK_CTA:"messenger_ads_link_click_cta",MESSAGE_SEEN_THREAD:"messenger_ads_message_seen_thread",MESSAGE_SEEN_INBOX:"messenger_ads_message_seen_inbox",MESSAGE_SEEN_REQUEST:"messenger_ads_message_seen_request"};}),

null);

/** __static_js_modules__/nfxstorylocation.js */




__d("NFXStoryLocation",[],(function a(b,c,d,e,f,g){

f.exports={FEED:"feed",VIDEO_LIST_CHANNEL:"video_list_channel",VIDEO_PLAYLIST_CHANNEL:"video_playlist_channel",WATCHED_VIDEOS_CHANNEL:"watched_videos_channel",EXPLORE_FEED:"explore_feed",PROFILE_SELF:"profile_self",PROFILE_SOMEONE_ELSE:"profile_someone_else",PAGE:"page",PERMALINK:"permalink",PHOTO_VIEWER:"photo_viewer",PAGE_REVIEW:"page_review",POPULAR_AT:"popular_at",CURATED_SECTION:"curated_section",GROUP:"group",EVENT:"event",SEARCH:"search",UNKNOWN:"unknown",PROFILE_REPORTING_FLOW:"profile_reporting_flow",HEAD_PUBLISHER_APP_MENTIONS_FEED:"head_publisher_app_mentions_feed",MESSENGER:"messenger",MESSENGER_MONTAGE_VIEWER:"messenger_montage_viewer",FUNDRAISER_PAGE_FEED:"fundraiser_page_feed",FUNDRAISER_PERSON_TO_CHARITY:"fundraiser_person_to_charity",FUNDRAISER_PERSON_FOR_PERSON:"fundraiser_person_for_person",SETTINGS:"settings",LIVE_MAP:"live_map",JOB_BROWSER:"job_browser",MESSENGER_THREAD_ACTION_PANEL:"messenger_thread_action_panel",MESSENGER_CONTACT_DETAILS:"messenger_contact_details",TICKER:"ticker",FULLSCREEN_VIDEO_PLAYER:"fullscreen_video_player",ACTIVITY_LOG_FACE_ALERTS:"face_alerts",HELP_COMMUNITY:"help_community",SUPPORT_INBOX:"support_inbox",APP_INVITES_FEED:"app_invites_feed",CHAINING_FEED:"chaining_feed",SOCIAL_REPORTING_REDIRECT:"social_reporting_redirect",WWW_CHAT_HEAD:"www_chat_head",THROWBACK:"throwback",POST_TO_PAGE:"post_to_page",ACTIVITY_LOG:"activity_log",VIDEO_CHANNEL:"video_channel",VIDEO_CHANNELS:"video_channels",VIDEO_HOME:"video_home",REVIEWS_FEED:"reviews_feed",BACKSTAGE:"backstage",MESSENGER_ENCRYPTED_THREAD:"messenger_encrypted_thread",LOCAL_NEWS:"local_news",MARKETPLACE_PDP:"marketplace_pdp",MARKETPLACE_PROFILE:"marketplace_profile",MARKETPLACE_RATING_CONFIRMATION:"marketplace_rating_confirmation",MARKETPLACE_RATING_FLOW:"marketplace_rating_flow",MARKETPLACE_THREAD:"marketplace_thread",MARKETPLACE_THREAD_BUYER:"marketplace_thread_buyer",POLITICAL_ISSUE_MODULE:"political_issue_module",ELECTION_HUB:"election_hub",DIRECT_MESSAGING:"direct_messaging",CAMERA_MEDIA_EFFECT:"camera_media_effect",SPATIAL_PRIVACY_PUBLIC:"spatial_privacy_public",SPATIAL_PRIVACY_FRIENDS:"spatial_privacy_friends",SPATIAL_PRIVACY_ALL:"spatial_privacy_all",SPATIAL_PRIVACY_SELF:"spatial_privacy_self",PROFILE_DEPRECATED:"profile",TIMELINE_DEPRECATED:"timeline",BREAKUP_FLOW:"breakup_flow",ASYNC_TASK_DO_NOT_USE:"async",INSTANT_ARTICLES:"instant_articles",IN_APP_BROWSER:"in_app_browser",INSTREAM_VIDEO:"instream_video",TOPIC_PAGE:"topic_page"};}),

null);

/** js/photos/PhotoResizeMath.js */




__d('PhotoResizeMath',[],(function a(b,c,d,e,f,g){

var h=



{getScaledPhotoDimensions:function i(j,k,l,m,n){
var o=j/k,
p=l/m;



if(l&&m&&
n==='stretch')

return {width:l,
height:m};







if(!l&&m||
n==='contain'!==
o>=p)

return {width:m*o,
height:m};




if(l)

return {width:l,
height:l/o};





return {width:j,height:k};}};



f.exports=h;}),null);

/** js/components/Pixelz/PixelzFocus.js */







__d('PixelzFocus',[],(function a(b,c,d,e,f,g){

'use strict';

var h=


{search:function i(j,k){
var l=0,
m=j.length-1;

while(l<=m){
var n=l+Math.floor((m-l)/2),
o=j[n];

if(o>k){
m=n-1;}else
if(o<k){
l=n+1;}else 

return n;}



return Math.min(l,m);},
























forceSpecificPoint:function i(j,k,l){
var m=1e-09,

n=h.search(j,k-l-m)+1,
o=h.search(j,k+l);

return j.slice(n,o+1);},
















findBiggestSets:function i(j,k){
var l=[],
m=-1;

for(var n=0;n<j.length;++n){
var o=j[n],
p=n,
q=h.search(j,o+k),
r=q-p;

if(r>m)
l=[];


if(r>=m){
m=r;
l.push
({low:p,
high:q});}}




return l;},




getBestSet:function i(j,k,l){
var m=-1,
n=null;

for(var o=0;o<k.length;++o){
var p=k[o],
q=j[p.low],
r=j[p.high],
s=q+(r-q)/2,
t=Math.min
(q-(s-l),
s+l-r);


if(t>m){
m=t;
n=p;}}



return n;},




getFocusFromSet:function i(j,k){
var l=j[k.low],
m=j[k.high];
return l+(m-l)/2;},





clampFocus:function i(j,k){
var l=k/2,
m=1-k/2;
if(j<l)
return l;

if(j>m)
return m;

return j;},


convertFromCenterToCSS:function i(j,k){
if(Math.abs(1-k)<1e-05)







return 0;


return (j-k/2)/(1-k);},


convertFromCSSToCenter:function i(j,k){
return j*(1-k)+k/2;},



getVisible:function i(j,k){
if(j<k)
return j/k;


return k/j;},


getHidden:function i(j,k){
return 1-h.getVisible(j,k);},


focusHorizontally:function i(j,k){
return j<k;},




convertVectorFromCenterToCSS:function i(j,k,l){
var m=h.focusHorizontally
(k,
l),


n=void 0;
if(m){
n=j.x/100;}else 

n=j.x/100;


var o=h.convertFromCenterToCSS
(n,
h.getVisible(k,l));


if(m){
return {x:o,y:0};}else 

return {x:0,y:o};},



getCropRect:function i(j,k,l){
var m=h.focusHorizontally
(k,
l),

n=h.getVisible(k,l);

if(m){
var o=(1-n)*j.x;

return {left:o,
top:0,
width:n,
height:1};}else{


var p=(1-n)*j.y;

return {left:0,
top:p,
width:1,
height:n};}}};





f.exports=h;}),null);

/** js/components/Pixelz/loadImage.js */







__d('loadImage',['Promise'],(function a(b,c,d,e,f,g){

'use strict';

function h
(i,
j){

var k=new Image();
k.onload=function(){
j(k.width,k.height,k);};

k.src=i;}


h.loadImagePromise=
function(i){

return (new (c('Promise'))(function(j,k){
var l=new Image();
l.onerror=k;
l.onload=function(){return j(l);};
l.src=i;}));};



f.exports=h;}),null);

/** js/components/Pixelz/Pixelz.react.js */






__d('Pixelz.react',['cx','arrayContains','loadImage','joinClasses','React','PhotoResizeMath','PixelzFocus'],(function a(b,c,d,e,f,g,h){

'use strict';










var i=c('React').PropTypes,

j=c('React').createClass({displayName:'Pixelz',
propTypes:
{width:i.number,
height:i.number,
resizeMode:i.oneOf(['contain','cover','stretch']),
alt:i.string,
letterbox:i.bool,
borderRadius:i.number,
insetBorderColor:i.string,
animated:i.bool,
upscale:i.bool,

cropRect:function k(l,m,n){
var o=l[m],
p='Invalid prop `'+m+'` supplied to `'+
n+'`, expected a rectangle with values normalized '+
'between 0 and 1.';

if(o.left<0||
o.top<0||
o.width<0||
o.height<0||
o.left+o.width>1||
o.top+o.height>1)
return new Error(p);},



focus:function k(l,m,n){
var k=l[m],
o='Invalid prop `'+m+'` supplied to `'+
n+'`, expected either a {x, y, type} vector where type '+
'is `css` or `center` or an array of {x, y} vectors. All the vectors '+
'have with values normalized between 0 and 1.';

if(Array.isArray(k)){
for(var p=0;p<k.length;++p)
if(!(k[p].x>=0&&k[p].x<=1)||
!(k[p].y>=0&&k[p].y<=1))
return new Error(o);}else{



if(!k.type)
k.type='css';


if(!(k.x>=0&&k.x<=1)||
!(k.y>=0&&k.y<=1)||
!c('arrayContains')(['center','css'],k.type))
return new Error(o);}}},





getDefaultProps:function k(){

return {resizeMode:'cover',
alt:'',
letterbox:true,
upscale:true,
cropRect:{width:1,height:1,top:0,left:0},
focus:{x:.5,y:.5,type:'css'}};},



getInitialState:function k(){

return {srcDimensions:{}};},






getSrcDimensions:function k(){
var l=this.props.src,
m=this.state.srcDimensions[l];
if(m)
return m;


c('loadImage')(l,function(n,o){
var p={};
p[l]={width:n,height:o};
this.isMounted()&&this.setState({srcDimensions:p});}.
bind(this));

return null;},



getCropSrcDimensions:function k(){
var l=this.getSrcDimensions();


return {width:l.width*this.props.cropRect.width,
height:l.height*this.props.cropRect.height};},




getUpscaleCropDimensions:function k(){
var l=this.getCropSrcDimensions();
return c('PhotoResizeMath').getScaledPhotoDimensions
(l.width,
l.height,
this.props.width,
this.props.height,
this.props.resizeMode);},




getCropDimensions:function k(){
var l=this.getUpscaleCropDimensions(),
m=this.getCropSrcDimensions();

if(!this.props.upscale)

return {width:Math.min
(l.width,
m.width),

height:Math.min
(l.height,
m.height)};




return l;},


getCropAspectRatio:function k(){
var l=this.getCropDimensions();
return l.width/l.height;},




getContainerDimensions:function k(){
if(this.props.letterbox&&this.props.width&&this.props.height)

return {width:this.props.width,
height:this.props.height};



return this.getCropDimensions();},


getContainerAspectRatio:function k(){
var l=this.getContainerDimensions();
return l.width/l.height;},


getContainerPosition:function k(){

return {left:0,
top:0};},



getFocus:function k(){
var l=this.props.focus;




if(!Array.isArray(l)&&l.type==='css')

return {x:l.x,
y:l.y};



var m=this.getContainerAspectRatio(),
n=this.getCropAspectRatio(),
o=c('PixelzFocus').getVisible
(m,
n),

p=c('PixelzFocus').focusHorizontally
(m,
n),




q=void 0;

if(!Array.isArray(l)){



q=c('PixelzFocus').convertFromCenterToCSS
(p?l.x:l.y,
o);}else{







var r=l.map(function(u){
return p?u.x:u.y;});

r.sort();
var s=c('PixelzFocus').findBiggestSets(r,o),
t=c('PixelzFocus').getBestSet(r,s,o);
q=c('PixelzFocus').getFocusFromSet(r,t);}






return {x:p?q:.5,
y:p?.5:q};},




getCropPosition:function k(){
var l=this.getCropDimensions(),
m=this.getContainerDimensions(),
n=this.getFocus();


return {left:n.x*(m.width-l.width),
top:n.y*(m.height-l.height)};},





getScaleDimensions:function k(){
var l=this.getCropDimensions();

return {width:l.width/this.props.cropRect.width,
height:l.height/this.props.cropRect.height};},




getScalePosition:function k(){
var l=this.getScaleDimensions();

return {left:-l.width*this.props.cropRect.left,
top:-l.height*this.props.cropRect.top};},








getClipCropRectangle:function k(){
var l=this.getContainerDimensions(),
m=this.getCropDimensions(),
n=this.getContainerPosition(),
o=this.getCropPosition(),

p=Math.max(n.left,o.left),
q=Math.max(n.top,o.top),
r=Math.min
(n.top+l.height,
o.top+m.height),

s=Math.min
(n.left+l.width,
o.left+m.width);



return {left:p,
top:q,
width:s-p,
height:r-q};},



getClipCropPosition:function k(){
var l=this.getClipCropRectangle();

return {left:l.left,
top:l.top};},



getClipCropDimensions:function k(){
var l=this.getClipCropRectangle();

return {width:l.width,
height:l.height};},





getClipScalePosition:function k(){
var l=this.getScalePosition(),
m=this.getClipCropPosition(),
n=this.getCropPosition();


return {left:l.left+(n.left-m.left),
top:l.top+(n.top-m.top)};},



getClipScaleDimensions:function k(){
return this.getScaleDimensions();},




areDimensionsEqual:function k(l,m){
return l.width===m.width&&l.height===m.height;},


shouldAddAllNodesAndStyles:function k(){





return this.props.animated;},


hasCrop:function k(){
if(this.shouldAddAllNodesAndStyles())
return true;


var l=this.getContainerDimensions(),
m=this.getClipCropDimensions(),
n=this.getClipScaleDimensions();

if(this.areDimensionsEqual(l,m)||
this.areDimensionsEqual(m,n))
return false;


return true;},


hasContainer:function k(){
if(this.shouldAddAllNodesAndStyles()||this.hasInsetBorder())
return true;


var l=this.getContainerDimensions(),
m=this.getClipScaleDimensions();

if(this.areDimensionsEqual(l,m))
return false;


return true;},


hasInsetBorder:function k(){
return this.shouldAddAllNodesAndStyles()||this.props.insetBorderColor;},




applyPositionStyle:function k(l,m){


if(this.shouldAddAllNodesAndStyles()||m.left)
l.left=Math.round(m.left);

if(this.shouldAddAllNodesAndStyles()||m.top)
l.top=Math.round(m.top);},



applyDimensionsStyle:function k(l,m){
l.width=Math.round(m.width);
l.height=Math.round(m.height);},


applyBorderRadiusStyle:function k(l){
if(this.shouldAddAllNodesAndStyles()||this.props.borderRadius)
l.borderRadius=this.props.borderRadius||0;},





getScaleStyle:function k(){
var l={},
m=this.getClipCropDimensions(),
n=this.getClipScaleDimensions();




if(this.shouldAddAllNodesAndStyles()||
!this.areDimensionsEqual(m,n)){
this.applyPositionStyle(l,this.getClipScalePosition());}else 




this.applyPositionStyle(l,this.getClipCropPosition());


this.applyDimensionsStyle(l,this.getClipScaleDimensions());
this.applyBorderRadiusStyle(l);

return l;},


getCropStyle:function k(){
var l={};

this.applyPositionStyle(l,this.getClipCropPosition());
this.applyDimensionsStyle(l,this.getClipCropDimensions());
this.applyBorderRadiusStyle(l);

return l;},


getInsetBorderStyle:function k(){
var l=
{borderColor:this.props.insetBorderColor||'transparent'};


this.applyPositionStyle(l,this.getClipCropPosition());
this.applyDimensionsStyle(l,this.getClipCropDimensions());
this.applyBorderRadiusStyle(l);

return l;},


getContainerStyle:function k(){
var l={};

this.applyDimensionsStyle(l,this.getContainerDimensions());
this.applyBorderRadiusStyle(l);

return l;},




getScale:function k(){



var l=this.getScaleStyle(),
m=l.width,
n=l.height;



l=babelHelpers['extends']({},
l);

delete l.width;
delete l.height;


return (c('React').createElement('img',babelHelpers['extends']({},
this.props,
{alt:this.props.alt,
className:c('joinClasses')(this.props.className,"_56wb"+

(this.shouldAddAllNodesAndStyles()?' '+"_56t5":'')),

src:this.props.src,
style:babelHelpers['extends']({},
this.props.style||{},
l),

width:m,
height:n})));},




getCrop:function k(){
var l=this.getScale();

if(!this.hasCrop())
return l;



return (c('React').createElement('div',
{className:"_56ma"+

(this.shouldAddAllNodesAndStyles()?' '+"_56t5":''),

style:this.getCropStyle()},
l));},




getInsetBorder:function k(){
if(!this.hasInsetBorder())
return null;



return (c('React').createElement('div',
{className:"_56lv"+

(this.shouldAddAllNodesAndStyles()?' '+"_56t5":''),

style:this.getInsetBorderStyle()}));},




getContainer:function k(){
var l=this.getCrop();
if(!this.hasContainer())
return l;

var m=this.getInsetBorder();


return (c('React').createElement('div',
{className:"_56jj"+

(this.shouldAddAllNodesAndStyles()?' '+"_56t5":''),

'data-skipchecker':null,
style:this.getContainerStyle()},
l,
m));},




render:function k(){
var l=this.getSrcDimensions();



if(!l)
return c('React').createElement('span',{'data-skipchecker':null});


return this.getContainer();}});



f.exports=j;}),null);

/** js/logging/generated/MessengerAdsWebTypedLogger.js */





__d('MessengerAdsWebTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){
'use strict';



















function h(){
this.clear();}
h.prototype.





log=function(){
c('GeneratedLoggerUtils').log('messenger_ads_web:MessengerAdsWebLoggerConfig',this.$MessengerAdsWebTypedLogger_data,c('Banzai').BASIC);};
h.prototype.







logVital=function(){
c('GeneratedLoggerUtils').log('messenger_ads_web:MessengerAdsWebLoggerConfig',this.$MessengerAdsWebTypedLogger_data,c('Banzai').VITAL);};
h.prototype.




clear=function(){
this.$MessengerAdsWebTypedLogger_data={};
return this;};
h.prototype.






updateData=function(j){








this.$MessengerAdsWebTypedLogger_data=babelHelpers['extends']({},
this.$MessengerAdsWebTypedLogger_data,
j);

return this;};
h.prototype.




setEvent=function(j){
this.$MessengerAdsWebTypedLogger_data.event=j;
return this;};
h.prototype.




setIsSponsored=function(j){
this.$MessengerAdsWebTypedLogger_data.is_sponsored=j;
return this;};
h.prototype.




setItemID=function(j){
this.$MessengerAdsWebTypedLogger_data.item_id=j;
return this;};
h.prototype.




setMessageID=function(j){
this.$MessengerAdsWebTypedLogger_data.message_id=j;
return this;};
h.prototype.




setMessageTimestamp=function(j){
this.$MessengerAdsWebTypedLogger_data.message_timestamp=j;
return this;};
h.prototype.




setPageID=function(j){
this.$MessengerAdsWebTypedLogger_data.page_id=j;
return this;};
h.prototype.




setVC=function(j){
this.$MessengerAdsWebTypedLogger_data.vc=j;
return this;};























var i=
{event:true,
is_sponsored:true,
item_id:true,
message_id:true,
message_timestamp:true,
page_id:true,
vc:true};


f.exports=h;}),null);

/** js/mercury/clients/messenger/components/core/MessengerMenu.react.js */






__d('MessengerMenu.react',['cx','Keys','MenuSeparator.react','ReactXUIMenu','joinClasses'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;








function k(m){
m.isReactLegacyFactory={};
m.type=m;}
i=babelHelpers.inherits

(l,c('ReactXUIMenu'));j=i&&i.prototype;
function l(m){
var n=m.className,o=babelHelpers.objectWithoutProperties(m,['className']);
j.constructor.call(this,babelHelpers['extends']
({className:c('joinClasses')(n,"_2i-c _150g")},

o));}

l.prototype.

handleKeydown=function(m,n){
if(m===c('Keys').DOWN||
m===c('Keys').UP||
m===c('Keys').SPACE)
return j.handleKeydown.call(this,m,n);

return true;};



k(l);

l.Item=c('ReactXUIMenu').Item;
l.Separator=c('MenuSeparator.react');

f.exports=l;}),null);

/** js/mercury/clients/messenger/components/core/MessengerPopoverMenu.react.js */






__d('MessengerPopoverMenu.react',['cx','ContextualDialogArrow','ContextualLayerAutoFlip','ContextualLayerUpdateOnScroll','PopoverMenu.react','React','joinClasses'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;i=babelHelpers.inherits










(k,c('React').PureComponent);j=i&&i.prototype;k.prototype.
render=function(){var l=
this.props,m=l.children,n=l.className,o=l.isOpen,p=babelHelpers.objectWithoutProperties(l,['children','className','isOpen']),
q=c('React').Children.only(m);

return (c('React').createElement(c('PopoverMenu.react'),babelHelpers['extends']
({className:c('joinClasses')(n,

!p.disableArrowKeyActivation||o?"_150g":''),

enableActivationOnEnter:true,
layerBehaviors:[c('ContextualLayerAutoFlip'),c('ContextualLayerUpdateOnScroll'),c('ContextualDialogArrow')]},




p),
q));};


function k(){i.apply(this,arguments);}


f.exports=k;}),null);

/** www/__virtual__/x/XSettingsEmployeeBetaController.js */



__d("XSettingsEmployeeBetaController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/settings\/employee\/beta_mode\/",{enabled:{type:"Bool",defaultValue:false}});}),

null);

/** js/mercury/clients/messenger/components/MessengerBugNub.react.js */







__d('MessengerBugNub.react',['cx','fbt','ix','AsyncRequest','Image.react','Link.react','MessengerEnvironment','MessengerMenu.react','MessengerPopoverMenu.react','React','Tooltip','URI','XSettingsEmployeeBetaController','goURI'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';var k,l,

















m=
j("86836"),
n=
j("86835"),
o=
j("86837"),

p=c('React').PropTypes,

q=c('MessengerMenu.react').Item,
r=c('MessengerMenu.react').Separator;k=babelHelpers.inherits

(s,c('React').PureComponent);l=k&&k.prototype;s.prototype.










render=function(){

return (c('React').createElement('div',{className:"_4_xe"},
this.$MessengerBugNub_renderBetaIcon(),
c('React').createElement(c('Link.react'),babelHelpers['extends']
({href:'#',
ajaxify:'/ajax/bugs/employee_report',
className:"_1fr8",
rel:'dialog'},
c('Tooltip').propsFor(i._(["Report a bug","408ecfbd6a365d5449b295047e67428a"]))),


c('React').createElement('div',{className:"_1gng"},
c('React').createElement(c('Image.react'),{src:m})))));};




s.prototype.

$MessengerBugNub_renderBetaIcon=function(){
var t=this.props.isBetaEnabled?
n:
o,
u=i._(["Internal preferences","66c325646d2a55a6a536fa022cac26a3"]);

return (c('React').createElement(c('MessengerPopoverMenu.react'),babelHelpers['extends']
({className:"_1fr8",
menu:this.$MessengerBugNub_renderMenu()},
c('Tooltip').propsFor(u)),
c('React').createElement(c('Link.react'),
{'aria-haspopup':'true',
'aria-label':u,
className:"_1gng",
href:'#',
role:'button'},
c('React').createElement(c('Image.react'),{src:t}))));};



s.prototype.

$MessengerBugNub_renderMenu=function(){var t,u=this,
v=null;
if(this.props.unixName)(function(){
var w=u.props.unixName+'.sb';
v=
c('React').createElement(q,
{label:'Sandbox',
onclick:function(){return this.$MessengerBugNub_changeSite(w);}.bind(u)});})();




return (c('React').createElement(c('MessengerMenu.react'),null,
c('React').createElement(q,
{label:'Public',
onclick:function(){return this.$MessengerBugNub_changeMode(false);}.bind(this)}),

c('React').createElement(q,
{label:'Beta',
onclick:function(){return this.$MessengerBugNub_changeMode(true);}.bind(this)}),

c('React').createElement(r,null),
c('React').createElement(q,
{label:'C1 (trunkstable)',
onclick:function(){return this.$MessengerBugNub_changeSite('trunkstable');}.bind(this)}),

c('React').createElement(q,
{label:'Latest',
onclick:function(){return this.$MessengerBugNub_changeSite('latest');}.bind(this)}),

c('React').createElement(q,
{label:'Intern',
onclick:function(){return this.$MessengerBugNub_changeSite('intern');}.bind(this)}),

c('React').createElement(q,
{label:'Production',
onclick:function(){return this.$MessengerBugNub_changeSite('prod');}.bind(this)}),

v));};


s.prototype.

$MessengerBugNub_changeMode=function(t){
var u=c('XSettingsEmployeeBetaController').getURIBuilder().getURI();
new (c('AsyncRequest'))().
setURI(u).
setData
({enabled:t}).

setMethod('POST').
setAllowCrossPageTransition(true).
send();};
s.prototype.

$MessengerBugNub_changeSite=function(t){
var u=c('URI').getRequestURI(),
v=c('MessengerEnvironment').facebookdotcom?
'.facebook.com':
'.messenger.com',
w='www'+(t?'.'+t:'')+v;
c('goURI')(new (c('URI'))(window.location.href).
setProtocol(u.getProtocol()).
setDomain(w).
setSubdomain(u.getSubdomain()).
setPath(u.getPath()).
setQueryData(u.getQueryData()).
setFragment(u.getFragment()));};
function s(){k.apply(this,arguments);}s.propTypes={isBetaEnabled:p.bool,unixName:p.string};


f.exports=s;}),null);

/** js/mercury/clients/messenger/components/hotlike/MessengerHotLikeSVG.react.js */






__d('MessengerHotLikeSVG.react',['cssVar','cx','fbt','MessengerEnvironment','React','WorkGKs','joinClasses','uniqueID'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';var k,l,











m=c('React').PropTypes,
n='transparent',

o=j._(["Thumbs Up Sign","b2d61027129b3489f80dde0fb5a70eb2"]);k=babelHelpers.inherits







(p,c('React').Component);l=k&&k.prototype;function p(){var q,r;for(var s=arguments.length,t=Array(s),u=0;u<s;u++)t[u]=arguments[u];return r=(q=l.constructor).call.apply(q,[this].concat(t)),this.









state=
{titleId:c('uniqueID')()},r;}p.prototype.


render=function(){
var q=c('WorkGKs').workplace_www_chat_branding?
"#1479fb":
"#0084ff",

r=this.props.color||
(c('MessengerEnvironment').messengerui?
q:
"#4080ff");


return (c('React').createElement('div',{className:c('joinClasses')
(this.props.className,
"_1i1j")},

c('React').createElement('svg',
{'aria-labelledby':this.state.titleId,
height:'100%',
role:'img',
version:'1.1',
viewBox:'0 0 381 400',
width:'100%',
x:'0px',
y:'0px'},
c('React').createElement('title',{id:this.state.titleId},o),
c('React').createElement('g',null,
c('React').createElement('g',null,
c('React').createElement('path',
{d:'M0,399.8h86.4V160.8H0V399.8z M381,220.7c0-13.6-7.4-25.5-18.5-31.8c8.8-6.6,14.5-17.4,14.5-29.3 c0-20.1-16.4-36.8-36.5-36.8H217c20.4-106.5-31.3-128.2-51.7-123c-12.3,3.1-13.6-0.3-11.4,24.2l3.4,42.7c0.3,3.5,0,7.2-0.8,10.8 c-0.8,3.6-2.7,6.9-4.6,10L106.8,160v208.7h195.3v-1.2c19.2-1.1,34.5-17.4,34.5-36.9c0-6.1-1.5-12-4.1-17 c17.3-2.8,30.4-18,30.4-36.1c0-8.2-2.7-15.9-7.4-22C370.1,250.8,381,237,381,220.7z',



fill:r,
stroke:n,
strokeLinecap:'round',
strokeWidth:'5%'}))))));};






p.propTypes={color:m.string};


f.exports=p;}),null);

/** js/mercury/clients/messenger/components/rtc/groupcall/MessengerRTCGroupCallContactListItem.react.js */







__d('MessengerRTCGroupCallContactListItem.react',['cx','fbt','ix','Image.react','Link.react','messengerContactImageReact','MultiwayTypes','React','emptyFunction'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';var k,






l=c('messengerContactImageReact').comp,
m=c('MultiwayTypes').ParticipantCallState,







n=(k={},k[
m.DISCONNECTED]=i._(["Disconnected","1a5710cd0b78d85df9923ccf945b10f4"]),k[




m.NO_ANSWER]=i._(["No Answer","c798277ca957c8c509d49acd67d9bac2"]),k[




m.REJECTED]=i._(["Rejected","cd5696e53155aa2d422afef60d044e92"]),k[




m.UNREACHABLE]=i._(["Unreachable","242a0eab25a41cd04abf217fa22eaa85"]),k[




m.CONNECTION_DROPPED]=i._(["Connection Dropped","65857c325e4095ffaf85ea178dcd6442"]),k[




m.CONTACTING]=i._(["Contacting...","f7731afc30d8322428a8a8b9aaf34154"]),k[




m.RINGING]=i._(["Ringing...","61b0b8de553eac3c5e042a4a76edc0b9"]),k[




m.CONNECTING]=i._(["Connecting...","8b7e1300751823ba4cda55dfd679a453"]),k[




m.CONNECTED]=i._(["Connected","a864b8408e4923744ac0e1d97e8fdd16"]),k[




m.PARTICIPANT_LIMIT_REACHED]=i._(["Participant Limit Reached","19d662c9c694036f2c0fd3833cde112b"]),k[






m.IN_ANOTHER_CALL]=i._(["In Another Call","c31b8e614614ba4a298558df846fb910"]),k),





















o=32,

p=function t(u){





var v=u.isSelected,w=u.onClick,x=u.participant,y=u.participantState,z=u.renderInCallParticipants;
if(!z&&s(y))
return null;


return (c('React').createElement(c('Link.react'),
{'aria-checked':v,
className:"_4nvn",
onClick:s(y)?c('emptyFunction'):w,
role:'checkbox'},
c('React').createElement(l,
{className:"_4nvr",
isMessengerUser:x.is_messenger_user,
size:o,
src:x.image_src}),

c('React').createElement('div',{className:"_4nvs"},
c('React').createElement('div',{className:"_4nvt"},
c('React').createElement('div',{className:"_4nv_"},
x.name),

c('React').createElement(q,
{participant:x,
participantState:y})),


c('React').createElement(r,{isSelected:v,participantState:y}))));},





q=function t(u){


var v=u.participant.vanity,w=u.participantState;
if(w){
var x=n[w.state]||i._(["Unknown","a4dba80f7ddc825a9662154ed1ec96a5"]);






return (c('React').createElement('div',{className:"_4nw0"},
x));}




if(v)

return (c('React').createElement('div',{className:"_4nw0"},'@',
v));




return null;},


r=function t(u){


var v=u.isSelected,w=u.participantState;
if(s(w)){

return (c('React').createElement('div',{className:"_1j79"},i._(["In Call","525ab657fd2998eb02cbee92947733ae"])));}else





if(v)

return (c('React').createElement('div',{className:"_1j79"},
c('React').createElement(c('Image.react'),
{src:j("86852")})));




return null;};


function s(t){
if(!t)
return false;

switch(t.state){
case m.CONTACTING:
case m.RINGING:
case m.CONNECTING:
case m.CONNECTED:
return true;

default:return false;}}



f.exports=p;}),null);

/** js/mercury/clients/messenger/components/rtc/groupcall/MessengerRTCGroupCallContactList.react.js */






__d('MessengerRTCGroupCallContactList.react',['cx','immutable','MessengerRTCGroupCallContactListItem.react','MessengerScrollableArea.react','React'],(function a(b,c,d,e,f,g,h){

'use strict';



















var i=function j(k){





var l=k.isParticipantSelected,m=k.onClick,n=k.participants,o=k.participantStates,p=o===undefined?c('immutable').Map():o,q=k.renderInCallParticipants,r=q===undefined?false:q,
s=n.map(function(t){
return (c('React').createElement(c('MessengerRTCGroupCallContactListItem.react'),
{isSelected:l.get(t.id),
key:t.id,
onClick:function(u){function v(){return u.apply(this,arguments);}v.toString=function(){return u.toString();};return v;}(function(){return m(t.id);}),
participant:t,
participantState:p.get(t.fbid||''),
renderInCallParticipants:r}));});




return (c('React').createElement(c('MessengerScrollableArea.react'),
{className:"_12zw"},
s));};




f.exports=i;}),null);

/** js/mercury/clients/messenger/components/rtc/groupcall/MessengerRTCGroupCallRingParticipantsRow.react.js */







__d('MessengerRTCGroupCallRingParticipantsRow.react',['cx','fbt','React','intlList'],(function a(b,c,d,e,f,g,h,i){

'use strict';











var j=function k(l){
var m=l.names;

return (c('React').createElement('div',{className:"_1wsd"},
c('React').createElement('div',{className:"_1wse"},i._(["Ring:","8d7f7e21d6ad4062efe309cb5a2e73f2"])),






c('React').createElement('div',{className:"_1wsg"},
c('intlList')(m,c('intlList').CONJUNCTIONS.NONE))));};




f.exports=j;}),null);

/** js/mercury/clients/messenger/components/rtc/groupcall/MessengerRTCGroupCallThreadRow.react.js */







__d('MessengerRTCGroupCallThreadRow.react',['cx','fbt','MercuryThreadTitle.react','messengerThreadImageReact','React'],(function a(b,c,d,e,f,g,h,i){

'use strict';






var j=c('messengerThreadImageReact').comp,












k=function l(m){
var n=m.displayAddMemberWarning,
o=m.participants,
p=m.thread,
q=m.viewerID;

return (c('React').createElement('div',{className:"_5y31"},
c('React').createElement(j,
{className:"_5y32",
participants:o,
thread:p,
viewer:q}),

c('React').createElement('div',{className:"_5y34"},
c('React').createElement(c('MercuryThreadTitle.react'),
{className:"_5y37",
thread:p,
viewer:q}),


n?
c('React').createElement('div',
{className:"_1apf"},i._(["People you add to this group video will see previous messages in this conversation.","acbdc0904fa24351e89dffba4c809dcb"])):






null)));};





f.exports=k;}),null);

/** js/mercury/clients/messenger/components/rtc/groupcall/MessengerRTCGroupCallParticipantsPickerDialog.react.js */







__d('MessengerRTCGroupCallParticipantsPickerDialog.react',['cx','fbt','FBRTCCore','immutable','ImmutableObject','MessengerDialog.react','MessengerDialogButton.react','MessengerDialogCancelButton.react','MessengerDialogHeader.react','MessengerDialogTitle.react','MessengerRTCGroupCallContactList.react','MessengerRTCGroupCallRingParticipantsRow.react','MessengerRTCGroupCallThreadRow.react','React'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,




















l=c('React').PropTypes,

m=460,
n=5;j=babelHelpers.inherits
















(o,
c('React').Component);k=j&&j.prototype;function o(){var p,q;for(var r=arguments.length,s=Array(r),t=0;t<r;t++)s[t]=arguments[t];return q=(p=k.constructor).call.apply(p,[this].concat(s)),this.

state=
{isParticipantSelected:this.props.participants.mapEntries
(function(u){var v=u[0],w=u[1];
return ([v,this.props.participants.size<=n]);}.bind(this))},this.





























































$MessengerRTCGroupCallParticipantsPickerDialog_handleCall=function(){
var u=this.$MessengerRTCGroupCallParticipantsPickerDialog_getSelectedParticipants().map
(function(v){return v.fbid;});


if(this.props.handleCall){
this.props.handleCall(u);}else 

c('FBRTCCore').startGroupCall
({conferenceName:this.props.conferenceName,
hasVideo:this.props.hasVideo,
trigger:this.props.trigger,
usersToRing:u});


this.props.onUnmount();}.
bind(this),q;}o.prototype.render=function(){var p=this.props,q=p.participants,r=p.thread,s=p.viewerID;return c('React').createElement(c('MessengerDialog.react'),{onToggle:this.props.onUnmount,type:'default',width:m},c('React').createElement('div',{className:"_2m1r"},c('React').createElement(c('MessengerDialogHeader.react'),null,c('React').createElement(c('MessengerDialogCancelButton.react'),null),c('React').createElement(c('MessengerDialogTitle.react'),null,i._(["Ring Group Members","8141bd181844930d9a3e8fc22c6ca7d0"])),c('React').createElement(c('MessengerDialogButton.react'),{label:i._(["Call","9120054e728ca76ee9f0d632656b6181"]),onClick:this.$MessengerRTCGroupCallParticipantsPickerDialog_handleCall,disabled:this.$MessengerRTCGroupCallParticipantsPickerDialog_getSelectedParticipants().length===0,type:'primary'})),c('React').createElement(c('MessengerRTCGroupCallThreadRow.react'),{participants:q,thread:r,viewerID:s}),c('React').createElement(c('MessengerRTCGroupCallRingParticipantsRow.react'),{names:this.$MessengerRTCGroupCallParticipantsPickerDialog_getSelectedParticipants().map(function(t){var u=t.name;return u;}).sort(function(t,u){return t.localeCompare(u);})}),c('React').createElement(c('MessengerRTCGroupCallContactList.react'),{participants:q.toArray().sort(function(t,u){return t.name.localeCompare(u.name);}),isParticipantSelected:this.state.isParticipantSelected,onClick:function(t){return this.setState({isParticipantSelected:this.state.isParticipantSelected.set(t,!this.state.isParticipantSelected.get(t))});}.bind(this)})));};o.prototype.

$MessengerRTCGroupCallParticipantsPickerDialog_getSelectedParticipants=function(){
return this.props.participants.filter
(function(p,q){return this.state.isParticipantSelected.get(q);}.bind(this)).
toArray();};



o.propTypes=
{participants:l.instanceOf(c('immutable').Map).isRequired,
thread:l.instanceOf(c('ImmutableObject')).isRequired,
viewerID:l.string.isRequired,
trigger:l.string.isRequired,
conferenceName:l.string.isRequired,
hasVideo:l.bool.isRequired,
handleCall:l.func,
onUnmount:l.func.isRequired};


f.exports=o;}),null);

/** js/mercury/clients/messenger/components/rtc/groupcall/MessengerRTCGroupCallParticipantsPickerDialogController.js */






__d('MessengerRTCGroupCallParticipantsPickerDialogController',['DOM','immutable','MessengerRTCGroupCallParticipantsPickerDialog.react','React','ReactDOM'],(function a(b,c,d,e,f,g){

'use strict';




















var h=
{_container:c('DOM').create('div'),

render:function i(j){







var k=j.participants,l=j.thread,m=j.viewerID,n=j.trigger,o=j.conferenceName,p=j.hasVideo,q=j.handleCall;
c('ReactDOM').render
(c('React').createElement(c('MessengerRTCGroupCallParticipantsPickerDialog.react'),
{participants:k,
thread:l,
viewerID:m,
trigger:n,
conferenceName:o,
hasVideo:p,
handleCall:q,
onUnmount:function(){return this._onUnmount();}.bind(this)}),

this._container);},



_onUnmount:function i(){
c('ReactDOM').unmountComponentAtNode(this._container);}};



f.exports=h;}),null);

/** js/mercury/clients/shared/components/attachments/share/MercuryShareAttachmentSnippet.react.js */




__d('MercuryShareAttachmentSnippet.react',['MercuryShareAttachmentReactShape','MercuryShareStyleMap','React'],(function a(b,c,d,e,f,g){

'use strict';var h,i,





j=c('React').PropTypes;h=babelHelpers.inherits

(k,c('React').Component);i=h&&h.prototype;k.prototype.






render=function(){
var l=c('MercuryShareStyleMap').getStyleFactory
(this.props.attachment);


if(l.factory&&
!!l.factory.getSnippetComponent){
var m=
l.factory.getSnippetComponent();

return (c('React').createElement(m,babelHelpers['extends']({},
this.props,
{attachment:l.attachment})));}






return null;};
function k(){h.apply(this,arguments);}k.propTypes={attachment:c('MercuryShareAttachmentReactShape'),isSenderViewer:j.bool,senderName:j.oneOfType([j.string,j.object])};


f.exports=k;}),null);

/** js/mercury/clients/shared/components/MercuryAttachmentSnippet.react.js */





__d('MercuryAttachmentSnippet.react',['cx','ix','fbt','EmoticonsList','Image.react','MercuryAttachment','MercuryAttachmentSnippetRenderer','MercuryAttachmentSnippetType','MercuryAttachmentType','MercuryIDs','MercuryShareAttachmentSnippet.react','MessengerTextWithEmoticons.react','MercuryParticipants','React','StickerConstants','TextWithEmoticons.react','joinClasses'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';var k,l,




















m=c('React').PropTypes;k=babelHelpers.inherits





(n,c('React').Component);l=k&&k.prototype;function n(){var q,r;for(var s=arguments.length,t=Array(s),u=0;u<s;u++)t[u]=arguments[u];return r=(q=l.constructor).call.apply(q,[this].concat(t)),this.



















































$MercuryAttachmentSnippet_renderPhotoSnippet=function(v){
return this.$MercuryAttachmentSnippet_renderSnippet
(c('MercuryAttachmentSnippetRenderer').renderAttachmentSnippetText
(c('MercuryAttachmentSnippetType').PHOTO,
this.$MercuryAttachmentSnippet_isViewerSender,
v,
this.$MercuryAttachmentSnippet_attachments));}.


bind(this),this.

$MercuryAttachmentSnippet_renderAnimatedImageSnippet=function(v){
return this.$MercuryAttachmentSnippet_renderSnippet
(c('MercuryAttachmentSnippetRenderer').renderAttachmentSnippetText
(c('MercuryAttachmentSnippetType').GIF,
this.$MercuryAttachmentSnippet_isViewerSender,
v,
this.$MercuryAttachmentSnippet_attachments));}.


bind(this),this.

$MercuryAttachmentSnippet_renderVideoSnippet=function(v){
return this.$MercuryAttachmentSnippet_renderSnippet
(c('MercuryAttachmentSnippetRenderer').renderAttachmentSnippetText
(c('MercuryAttachmentSnippetType').VIDEO,
this.$MercuryAttachmentSnippet_isViewerSender,
v));}.


bind(this),this.

$MercuryAttachmentSnippet_renderAudioClipSnippet=function(v){
return this.$MercuryAttachmentSnippet_renderSnippet
(c('MercuryAttachmentSnippetRenderer').renderAttachmentSnippetText
(c('MercuryAttachmentSnippetType').AUDIO_CLIP,
this.$MercuryAttachmentSnippet_isViewerSender,
v));}.


bind(this),this.

$MercuryAttachmentSnippet_renderThirdPartyStickerSnippet=function(v){

return (c('React').createElement('span',null,
c('MercuryAttachmentSnippetRenderer').renderAttachmentSnippetText
(c('MercuryAttachmentSnippetType').THIRDPARTYSTICKER,
this.$MercuryAttachmentSnippet_isViewerSender,
v)));}.



bind(this),this.





































$MercuryAttachmentSnippet_renderStickerSnippet=function(v){

return (c('React').createElement('span',null,
c('MercuryAttachmentSnippetRenderer').renderAttachmentSnippetText
(c('MercuryAttachmentSnippetType').STICKER,
this.$MercuryAttachmentSnippet_isViewerSender,
v)));}.



bind(this),this.

$MercuryAttachmentSnippet_renderShareSnippet=function(v){

if(!!this.$MercuryAttachmentSnippet_attachments[0].share)

return (c('React').createElement(c('MercuryShareAttachmentSnippet.react'),
{attachment:this.$MercuryAttachmentSnippet_attachments[0].share,
senderName:v,
isViewerSender:this.$MercuryAttachmentSnippet_isViewerSender}));




return this.$MercuryAttachmentSnippet_renderSnippet
(c('MercuryAttachmentSnippetRenderer').renderAttachmentSnippetText
(c('MercuryAttachmentSnippetType').SHARE,
this.$MercuryAttachmentSnippet_isViewerSender,
v));}.


bind(this),this.

$MercuryAttachmentSnippet_renderGiftSnippet=function(v){

return (c('React').createElement('span',null,
c('MercuryAttachmentSnippetRenderer').renderAttachmentSnippetText
(c('MercuryAttachmentSnippetType').GIFT,
this.$MercuryAttachmentSnippet_isViewerSender,
v)));}.



bind(this),this.

$MercuryAttachmentSnippet_renderMixedSnippet=function(v){

return (c('React').createElement('span',null,

this.$MercuryAttachmentSnippet_attachments.
filter(function(w){
return (w.attach_type===c('MercuryAttachmentType').FILE||
w.attach_type===c('MercuryAttachmentType').PHOTO||
w.attach_type===c('MercuryAttachmentType').VIDEO);}).

map(function(w,x){return this.$MercuryAttachmentSnippet_renderSnippet
(w.name,
w.icon_type,
x);}.bind(this))));}.




bind(this),this.

$MercuryAttachmentSnippet_renderSnippet=function(v,w,x){
var y=c('MercuryAttachment').getAttachIconClass
(w||this.$MercuryAttachmentSnippet_attachments[0].icon_type),

z=c('joinClasses')
(y,
"uiIconText _3l6h");



return (c('React').createElement('span',{key:x},
c('React').createElement('span',{className:z},
c('React').createElement(c('Image.react'),{src:i("86988")})),

v));}.


bind(this),this.

$MercuryAttachmentSnippet_renderError=function(v){
var w=c('MercuryAttachmentSnippetRenderer').renderAttachmentSnippetText
(c('MercuryAttachmentSnippetType').ERROR,
this.$MercuryAttachmentSnippet_isViewerSender,
v);


return this.$MercuryAttachmentSnippet_renderSnippet(w);}.
bind(this),this.

$MercuryAttachmentSnippet_setVariables=function(v){
this.$MercuryAttachmentSnippet_viewer=v.viewer;
this.$MercuryAttachmentSnippet_sender=v.thread.snippet_sender;
this.$MercuryAttachmentSnippet_attachments=v.thread.snippet_attachments;
this.$MercuryAttachmentSnippet_isViewerSender=p(this.$MercuryAttachmentSnippet_sender,this.$MercuryAttachmentSnippet_viewer);}.
bind(this),this.

























$MercuryAttachmentSnippet_ensureParticipant=function(v){
if(!v)
return;


this.$MercuryAttachmentSnippet_cancelParticipantFetch();
if(!c('MercuryParticipants').getNow(v))
this.$MercuryAttachmentSnippet_sub=c('MercuryParticipants').get(v,function(w){return this.forceUpdate();}.bind(this));}.

bind(this),this.

$MercuryAttachmentSnippet_cancelParticipantFetch=function(){
this.$MercuryAttachmentSnippet_sub&&this.$MercuryAttachmentSnippet_sub.remove();}.
bind(this),r;}n.prototype.componentWillMount=function(){this.$MercuryAttachmentSnippet_ensureParticipant(this.props.thread.snippet_sender);this.$MercuryAttachmentSnippet_setVariables(this.props);};n.prototype.componentWillReceiveProps=function(q){this.$MercuryAttachmentSnippet_ensureParticipant(q.thread.snippet_sender);this.$MercuryAttachmentSnippet_setVariables(q);};n.prototype.componentWillUnmount=function(){this.$MercuryAttachmentSnippet_cancelParticipantFetch();};n.prototype.render=function(){var q=this.$MercuryAttachmentSnippet_getSenderName(),r=c('MercuryAttachmentSnippetRenderer').getAttachmentSnippetType(this.$MercuryAttachmentSnippet_attachments);switch(r){case c('MercuryAttachmentSnippetType').PHOTO:return this.$MercuryAttachmentSnippet_renderPhotoSnippet(q);case c('MercuryAttachmentSnippetType').GIF:return this.$MercuryAttachmentSnippet_renderAnimatedImageSnippet(q);case c('MercuryAttachmentSnippetType').VIDEO:return this.$MercuryAttachmentSnippet_renderVideoSnippet(q);case c('MercuryAttachmentSnippetType').AUDIO_CLIP:return this.$MercuryAttachmentSnippet_renderAudioClipSnippet(q);case c('MercuryAttachmentSnippetType').LIKE_STICKER:return this.$MercuryAttachmentSnippet_renderLikeStickerSnippet(q);case c('MercuryAttachmentSnippetType').STICKER:return this.$MercuryAttachmentSnippet_renderStickerSnippet(q);case c('MercuryAttachmentSnippetType').SHARE:return this.$MercuryAttachmentSnippet_renderShareSnippet(q);case c('MercuryAttachmentSnippetType').GIFT:return this.$MercuryAttachmentSnippet_renderGiftSnippet(q);case c('MercuryAttachmentSnippetType').ERROR:return this.$MercuryAttachmentSnippet_renderError(q);case c('MercuryAttachmentSnippetType').THIRDPARTYSTICKER:return this.$MercuryAttachmentSnippet_renderThirdPartyStickerSnippet(q);default:return this.$MercuryAttachmentSnippet_renderMixedSnippet(q);}};n.prototype.$MercuryAttachmentSnippet_renderLikeStickerSnippet=function(q){var r=c('React').createElement(c('MessengerTextWithEmoticons.react'),{renderEmoticons:true,text:c('EmoticonsList').symbols.like});if(this.$MercuryAttachmentSnippet_isViewerSender){return c('React').createElement('span',null,j._(["You: {conversation_snippet}","d3500fa33b61a052d41f7ccd249e85e6"],[j.param('conversation_snippet',r)]));}else return this.props.thread.is_canonical?c('React').createElement('span',null,j._(["{conversation_snippet}","5118f503268e9b46bc9536843f13f6c5"],[j.param('conversation_snippet',r)])):c('React').createElement('span',null,j._(["{sender name}: {conversation_snippet}","efa60ac8165ca2c41fe23f86b3a94e10"],[j.param('sender name',q),j.param('conversation_snippet',r)]));};n.prototype.$MercuryAttachmentSnippet_getSenderName=function(){if(!this.$MercuryAttachmentSnippet_sender||this.$MercuryAttachmentSnippet_isViewerSender)return null;var q=c('MercuryParticipants').getNow(this.$MercuryAttachmentSnippet_sender);if(!q)return null;var r=c('MercuryIDs').getUserIDFromParticipantID(this.$MercuryAttachmentSnippet_sender),s=this.props.thread.custom_nickname&&this.props.thread.custom_nickname[r];if(s)s=c('React').createElement(c('MessengerTextWithEmoticons.react'),{renderEmoticons:true,renderEmoji:true,text:s});return s?s:q.short_name;};n.propTypes={thread:m.object.isRequired,viewer:m.string.isRequired};


function o(q){

return (q==c('StickerConstants').LIKE_STICKER_ID||
q==c('StickerConstants').HOT_LIKE_SMALL_STICKER_ID||
q==c('StickerConstants').HOT_LIKE_MEDIUM_STICKER_ID||
q==c('StickerConstants').HOT_LIKE_LARGE_STICKER_ID);}



function p(q,r){
return !!(q&&c('MercuryIDs').getParticipantIDFromUserID(r)==q);}


f.exports=n;}),null);

/** js/mercury/utils/MNAdsLogMessageUtils.js */






__d('MNAdsLogMessageUtils',['MercuryConfig','MessagingTag','MessengerAdsWebTypedLogger','MNAdsLoggerEventEnum','AdPageMessageTypeEnum'],(function a(b,c,d,e,f,g){

'use strict';









var h=c('MercuryConfig').LOG_INTERVAL_MS||60000;




function i(){
this.$MNAdsLogMessageUtils_loggedMessageEventTime={};}
i.prototype.

isLoggedWithinInterval=function(j){
if(this.$MNAdsLogMessageUtils_loggedMessageEventTime[j]&&
this.$MNAdsLogMessageUtils_loggedMessageEventTime[j]-Date.now()<h)
return true;

return false;};
i.prototype.

setLoggingTime=function(j){
this.$MNAdsLogMessageUtils_loggedMessageEventTime[j]=Date.now();};
i.prototype.

logAdsThreadListImpression=function(j){
switch(j.folder){
case c('MessagingTag').INBOX:
this.logWithThreadMetaData
(j,
c('MNAdsLoggerEventEnum').MESSAGE_SEEN_INBOX);

break;
case c('MessagingTag').PENDING:
this.logWithThreadMetaData
(j,
c('MNAdsLoggerEventEnum').MESSAGE_SEEN_REQUEST);

break;


default:return;}};

i.prototype.

logWithThreadMetaData=function(j,event){
if(j.last_message_type!==c('AdPageMessageTypeEnum').NON_AD){
var k=j.last_message_timestamp+String(event);

if(!c('MercuryConfig').MercuryThreadListEnableImpressionLog||
this.isLoggedWithinInterval(k))
return;


new (c('MessengerAdsWebTypedLogger'))().
setEvent(event).
setMessageTimestamp(j.last_message_timestamp).
setPageID(j.other_user_fbid).
log();


this.setLoggingTime(k);}};




f.exports=new i();}),null);

/** js/mercury/clients/shared/components/MercuryThreadSnippet.react.js */







__d('MercuryThreadSnippet.react',['cx','fbt','immutable','ImmutableObject','MercuryAttachmentSnippet.react','MercuryConfig','MercuryIDs','MessengerTextWithEmoticons.react','MNAdsLogMessageUtils','React','TextWithEmoticons.react'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,














l=c('React').PropTypes;j=babelHelpers.inherits












(m,c('React').Component);k=j&&j.prototype;m.prototype.










shouldComponentUpdate=function(p){

return (this.props.shouldRenderYou!==p.shouldRenderYou||
this.props.thread!==p.thread||
this.props.viewer!==p.viewer||
this.props.className!==p.className||
!c('immutable').is(p.participants,this.props.participants));};

m.prototype.

render=function(){

return (c('React').createElement('span',{className:this.props.className},
this.$MercuryThreadSnippet_renderAttachmentIndicator(),
this.$MercuryThreadSnippet_renderSnippet()));};


m.prototype.

$MercuryThreadSnippet_renderAttachmentIndicator=function(){
if(!this.props.thread.snippet||
!n(this.props.thread))
return null;



return (c('React').createElement('span',{className:
"_j0r"}));};


m.prototype.

$MercuryThreadSnippet_renderSnippet=function(){
var p=this.props.thread,
q=c('MercuryIDs').getParticipantIDFromUserID(this.props.viewer),

r=p.snippet,
s=this.props.shouldRenderYou;

if(p.snippetCount!=null)
return i._({"*":["{number} results","9a24ddf75de3cc0352bacbc314cab99d"],"268435456":["1 result","4dc3a03fbdd0d1dbbfc3953c316df3a9"]},[i.plural



(p.snippetCount,'number')]);








if(!r&&
(p.snippet_attachments&&p.snippet_attachments.length>0||
!p.snippet_sender))
return this.$MercuryThreadSnippet_renderInnerSnippet(r);


var t=this.$MercuryThreadSnippet_renderInnerSnippet(r),

u=p.participants?
p.participants.length:
0;
if(p.is_subscribed)
u--;


c('MNAdsLogMessageUtils').logAdsThreadListImpression(p);

var v=o(p);
if(v)
return i._(["{name}: {conversation_snippet}","894b394b8091d22c6a1ef3e4c19b72e9"],[i.param


('name',v),i.param
('conversation_snippet',t)]);




if(p.snippet_sender===q){
if(!s)
return t;


return i._(["You: {conversation_snippet}","f4a2dbd3ecbe44e8693d899e8da8b7f1"],[i.param


('conversation_snippet',t)]);}




if(u<=1&&!this.props.shouldAlwaysRenderSender)

return t;


var w=this.props.participants.get(p.snippet_sender);
if(!w)
return t;


var x=w.short_name||w.name;
if(p){
var y=p.custom_nickname?
p.custom_nickname:
null,
z=c('MercuryIDs').getUserIDFromParticipantID(w.id);
if(y&&z&&y[z])
x=c('React').createElement(c('MessengerTextWithEmoticons.react'),
{renderEmoticons:true,
renderEmoji:true,
text:y[z]});}




if(!x)
return t;


return i._(["{name}: {conversation_snippet}","3a1d5f3bc6c169ef98aa3ebe2b78de74"],[i.param



('name',x),i.param
('conversation_snippet',t)]);};


m.prototype.

$MercuryThreadSnippet_renderInnerSnippet=function(p){
if(p&&p.startsWith('?OTR'))
return i._(["[encrypted message]","c75894795228faf5cc7d616147d606d3"]);









if(p)

return (c('React').createElement(c('MessengerTextWithEmoticons.react'),
{renderEmoticons:true,
renderEmoji:true,
text:p.replace(/\r\n|[\r\n]/g,' ')}));




var q=this.props.thread;

if(n(q))

return (c('React').createElement(c('MercuryAttachmentSnippet.react'),
{thread:q,
viewer:this.props.viewer}));




return null;};
function m(){j.apply(this,arguments);}m.propTypes={participants:l.instanceOf(c('immutable').Map).isRequired,shouldAlwaysRenderSender:l.bool,shouldRenderYou:l.bool,thread:l.object.isRequired,viewer:l.string.isRequired};


function n(p){

return !!(p.snippet_attachments&&
p.snippet_attachments.length>0);}



function o(p){
if(p&&
p.snippet_attachments&&
p.snippet_attachments[0]&&
p.snippet_attachments[0].share&&
p.snippet_attachments[0].share.target&&
p.snippet_attachments[0].share.target.genie_name)
return p.snippet_attachments[0].share.target.genie_name;

return null;}


f.exports=m;}),null);

/** js/mercury/models/MercuryOrderedThreadlist.js */






__d('MercuryOrderedThreadlist',['invariant','FBID','LogHistory','MercuryActionType','MercuryDispatcher','MercuryFilters','MercuryFolders','MercuryPayloadSource','MercuryServerRequests','MercurySingletonProvider','MercuryThreadIDMap','MessagingTag','PageMessageEnumTag','RangedCallbackManager','MercuryThreadInformer','MercuryThreads','arrayContains'],(function a(b,c,d,e,f,g,h){

'use strict';




















var i=c('LogHistory').getInstance('ordered_threadlist_model'),

j=
c('MercuryFilters').getSupportedFilters().concat
([c('MercuryFilters').ALL,c('MessagingTag').GROUPS]),

k=
c('MercuryFolders').getSupportedFolders().concat([c('MessagingTag').SPAM]);l.













getForFBID=function(o){
return n.getForFBID(o);};
l.

get=function(){
return n.get();};


function l(o){
this.$MercuryOrderedThreadlist_fbid=o;
this.$MercuryOrderedThreadlist_threadIDMap=c('MercuryThreadIDMap').getForFBID(this.$MercuryOrderedThreadlist_fbid);
this.$MercuryOrderedThreadlist_threadInformer=c('MercuryThreadInformer').getForFBID(this.$MercuryOrderedThreadlist_fbid);
this.$MercuryOrderedThreadlist_threads=c('MercuryThreads').getForFBID(this.$MercuryOrderedThreadlist_fbid);
this.$MercuryOrderedThreadlist_dispatcher=c('MercuryDispatcher').getForFBID(this.$MercuryOrderedThreadlist_fbid);

this.$MercuryOrderedThreadlist_threadlistOrderMap={};
this.$MercuryOrderedThreadlist_initializeThreadlistOrderMap();

this.$MercuryOrderedThreadlist_dispatcher.subscribe('update-threadlist',function(p,q){
if(!m(q))
return;


var r=q.ordered_threadlists;
if(r&&r.length){
this.$MercuryOrderedThreadlist_loadOrderedThreadlists(r);}else{

var s=(q.actions||[]).filter(function(t){
return t.thread_id;});


this.$MercuryOrderedThreadlist_loadUpdatedThreads(q.threads||[]);
this.$MercuryOrderedThreadlist_loadUpdatedActions(s);}


this.$MercuryOrderedThreadlist_threadInformer.updatedThreadlist();}.
bind(this));

this.$MercuryOrderedThreadlist_dispatcher.subscribe
('invalidate-global-state',
function(){return this.$MercuryOrderedThreadlist_invalidateGlobalState();}.bind(this));}

l.prototype.

getThreadlistOrderMap=
function(o,
p){

if(!this.$MercuryOrderedThreadlist_threadlistOrderMap[o][p]){
j=j.concat([p]);
k.forEach(function(q){
this.$MercuryOrderedThreadlist_threadlistOrderMap[q][p]=new (c('RangedCallbackManager'))
(function(r){
var s=this.$MercuryOrderedThreadlist_threads.getThreadMetaNow(r);
return s&&s.timestamp;}.
bind(this),
function(r,s){
return s-r;},

this.$MercuryOrderedThreadlist_threadIDMap.canLinkExternally.bind(this.$MercuryOrderedThreadlist_threadIDMap));}.

bind(this));}

return this.$MercuryOrderedThreadlist_threadlistOrderMap[o][p];};
l.prototype.
















getThreadlist=
function(o,
p,
q,
r,
s,
t){

return this.getFilteredThreadlist
(o,
p,
q,
c('MercuryFilters').ALL,
r,
s,
t);};

l.prototype.

getFilteredThreadlist=
function(o,
p,
q,
r,
s,
t,
u){

var v=this.getThreadlistOrderMap(q,r),
w=v.executeOrEnqueue
(o,
p,
s,
t),

x=v.getUnavailableResources
(w),

y=v.getError(o,p,t);



if(x.length||y){



if(v.getCurrentArraySize()<o){
var z=
{start:o,
limit:p,
filter:r,
resources_size:v.getCurrentArraySize()};

i.warn('range_with_gap',JSON.stringify(z));}



v.setError(false);

this.getServerRequests().fetchThreadlistInfo
(v.getCurrentArraySize(),
x.length,
q,
r==c('MercuryFilters').ALL?null:r,
u);}



return w;};
l.prototype.

getServerRequests=function(){
return c('MercuryServerRequests').getForFBID(this.$MercuryOrderedThreadlist_fbid);};
l.prototype.






getThreadlistUntilTimestamp=
function(o,
p,
q){

q=q||c('MercuryFilters').ALL;
return this.getThreadlistOrderMap
(p,q).
getElementsUntil(o);};
l.prototype.





getAvailableThreadlistNow=
function(o,
p){

p=p||c('MercuryFilters').ALL;
return this.getThreadlistOrderMap(o,p).getAllResources();};
l.prototype.





getThreadCount=
function(o,
p){

p=p||c('MercuryFilters').ALL;
return this.getThreadlistOrderMap(o,p).getCurrentArraySize();};
l.prototype.




hasLoadedThreadlist=
function(o,
p){

p=p||c('MercuryFilters').ALL;
return this.getThreadlistOrderMap(o,p).hasReachedEndOfArray();};
l.prototype.




unsubscribe=
function(o,
p,
q){

q=q||c('MercuryFilters').ALL;
this.getThreadlistOrderMap(p,q).unsubscribe(o);};
l.prototype.

$MercuryOrderedThreadlist_invalidateGlobalState=function(){
this.$MercuryOrderedThreadlist_threadlistOrderMap={};
this.$MercuryOrderedThreadlist_initializeThreadlistOrderMap();};
l.prototype.

$MercuryOrderedThreadlist_initializeThreadlistOrderMap=function(){
k.forEach(function(o){
this.$MercuryOrderedThreadlist_threadlistOrderMap[o]={};
j.forEach(function(p){
this.$MercuryOrderedThreadlist_threadlistOrderMap[o][p]=new (c('RangedCallbackManager'))
(function(q){





var r=this.$MercuryOrderedThreadlist_threads.getThreadMetaNow(q);
return r&&r.timestamp;}.
bind(this),
function(q,r){return r-q;},
this.$MercuryOrderedThreadlist_threadIDMap.canLinkExternally.bind(this.$MercuryOrderedThreadlist_threadIDMap));}.

bind(this));}.
bind(this));};
l.prototype.

$MercuryOrderedThreadlist_shouldAddToArray=
function(o,
p,
q){

var r=this.$MercuryOrderedThreadlist_threads.getThreadMetaNow(o);








return !!(r&&
r.timestamp&&
q&&
p&&
this.$MercuryOrderedThreadlist_getThreadFolderIfAny(o)==p&&
c('arrayContains')(this.$MercuryOrderedThreadlist_getThreadFiltersIfAny(o),q));};

l.prototype.




$MercuryOrderedThreadlist_loadThreadlistParts=
function(o,
p,
q){
var r,s=this,
t=[],
u=false,
v=false,
w=(o||[]).filter(function(aa){

var ba=aa.filter||c('MercuryFilters').ALL;
return (aa.folder==p||
!aa.folder&&p==c('MessagingTag').INBOX)&&
ba==q;}),


x=
this.$MercuryOrderedThreadlist_threadlistOrderMap[p][q].getAllResources(),
y=void 0;
w.forEach(function(aa){
t=t.concat(aa.thread_ids);

if(aa.error){



if(aa.end>x.length)
v=aa.error;}else{


var ba=aa.end-aa.start;
if(aa.thread_ids.length<ba)
u=true;}



if(!y||aa.end>y)
y=aa.end;});



this.$MercuryOrderedThreadlist_addThreadsToFolder(t,p,q);

if(u){
this.$MercuryOrderedThreadlist_threadlistOrderMap[p][q].setReachedEndOfArray();}else
if(v){
this.$MercuryOrderedThreadlist_threadlistOrderMap[p][q].setError(v);}else{

var z=
this.$MercuryOrderedThreadlist_threadlistOrderMap[p][q].getCurrentArraySize();
if(y&&z<y)(function(){


var aa={},
ba=x.concat(t),
ca=ba.filter(function(da){
var ea=aa[da];
aa[da]=true;
return ea;});





if(ca.length){
i.warn('duplicate_threads',JSON.stringify
({folder:p,
expected_final_size:y,
actual_final_size:z,
duplicate_thread_ids:ca}));





s.getServerRequests().fetchThreadlistInfo
(y,
ca.length,
p,
q==c('MercuryFilters').ALL?null:q);}})

();}};


l.prototype.

$MercuryOrderedThreadlist_loadOrderedThreadlists=
function(o){

k.forEach(function(p){
j.forEach(function(q){
this.$MercuryOrderedThreadlist_loadThreadlistParts(o,p,q);}.
bind(this));}.
bind(this));};
l.prototype.

$MercuryOrderedThreadlist_loadUpdatedActions=
function(o){

var p={},
q=this.$MercuryOrderedThreadlist_threads;

k.forEach(function(r){
p[r]={};
j.forEach(function(s){
p[r][s]=
{to_add:[],
to_remove:[],
to_remove_if_last_after_add:{}};});});




o.forEach(function(r){
var s=r.thread_id;
this.$MercuryOrderedThreadlist_getThreadFolder(s,function(t){
this.$MercuryOrderedThreadlist_getThreadFilters(s,function(u){





var v=function(){
u.forEach(function(x){
if(!c('arrayContains')(j,x))
return;


!!t||h(0,
'there should be a thread folder when adding thread');






p[t][x].to_add.push(s);




if(!this.$MercuryOrderedThreadlist_threadlistOrderMap[t][x].
hasReachedEndOfArray()&&
!this.$MercuryOrderedThreadlist_threadlistOrderMap[t][x].hasResource(s))
p[t][x].to_remove_if_last_after_add[s]=true;}.

bind(this));}.
bind(this);






function w(x){

!!t||h(0,
'there should be a thread folder when changing filters');


if(c('arrayContains')(j,x))
if(c('arrayContains')(u,x)){

p[t][x].to_add.push(s);}else 


p[t][x].to_remove.push(s);}






if(!t){



if(r.action_type===c('MercuryActionType').CHANGE_FOLDER||
r.action_type===
c('MercuryActionType').CHANGE_ARCHIVED_STATUS)
k.forEach(function(x){
if(x!==t)
j.forEach(function(y){
this.$MercuryOrderedThreadlist_threadlistOrderMap[x][y].
removeResources([s]);}.
bind(this));}.

bind(this));

return;}




!!t||h(0,'folder should exist');

switch(r.action_type){
case c('MercuryActionType').DELETE_THREAD:
u.forEach(function(x){
if(!c('arrayContains')(j,x))
return;

p[t][x].to_remove.push(s);});

break;
case c('MercuryActionType').CHANGE_ARCHIVED_STATUS:
case c('MercuryActionType').CHANGE_FOLDER:

v();
break;
case c('MercuryActionType').CHANGE_READ_STATUS:
w(c('MessagingTag').UNREAD);
break;
case c('MercuryActionType').USER_GENERATED_MESSAGE:
case c('MercuryActionType').LOG_MESSAGE:
u.forEach(function(x){
if(!c('arrayContains')(j,x))
return;

if(this.$MercuryOrderedThreadlist_shouldAddToArray(s,t,x))
p[t][x].to_add.push(s);}.

bind(this));
break;
case c('MercuryActionType').CHANGE_FLAG:
w(c('PageMessageEnumTag').FLAG);
break;}}.

bind(this));}.
bind(this));}.
bind(this));

k.forEach(function(r){
j.forEach(function(s){
var t=this.$MercuryOrderedThreadlist_threadlistOrderMap[r][s];

this.$MercuryOrderedThreadlist_addThreadsToFolder(p[r][s].to_add,r,s);

for(var u=t.getCurrentArraySize()-1;u>=0;u--){
var v=t.getResourceAtIndex(u);
if(!p[r][s].to_remove_if_last_after_add[v])



break;

p[r][s].to_remove.push(v);}

t.removeResources(p[r][s].to_remove);}.
bind(this));}.
bind(this));};
l.prototype.




$MercuryOrderedThreadlist_loadUpdatedThreads=
function(o){

var p={};

k.forEach(function(q){
p[q]={};
j.forEach(function(r){
p[q][r]=[];});});






o.forEach(function(q){
this.$MercuryOrderedThreadlist_getThreadFolder(q.thread_id,function(r){
this.$MercuryOrderedThreadlist_getThreadFilters(q.thread_id,function(s){
if(r)
s.forEach(function(t){
if(this.$MercuryOrderedThreadlist_shouldAddToArray(q.thread_id,r,t))
p[r][t].push(q.thread_id);}.

bind(this));}.

bind(this));}.
bind(this));}.
bind(this));


k.forEach(function(q){
j.forEach(function(r){
if(p[q][r].length>0)
this.$MercuryOrderedThreadlist_addThreadsToFolder(p[q][r],q,r);}.

bind(this));}.
bind(this));};
l.prototype.

$MercuryOrderedThreadlist_addThreadsToFolder=
function(o,
p,
q){

q=q||c('MercuryFilters').ALL;
this.$MercuryOrderedThreadlist_threadlistOrderMap[p][q].addResources(o);
k.forEach(function(r){
if(r!=p)
this.$MercuryOrderedThreadlist_threadlistOrderMap[r][q].removeResources(o);}.

bind(this));};
l.prototype.





$MercuryOrderedThreadlist_getThreadFolder=
function(o,
p){

this.$MercuryOrderedThreadlist_threads.getThreadMeta(o,function(q){
p(this.$MercuryOrderedThreadlist_getThreadFolderIfAny(o,q));}.
bind(this));};
l.prototype.






$MercuryOrderedThreadlist_getThreadFolderIfAny=
function(o,
p){

p=p||this.$MercuryOrderedThreadlist_threads.getThreadMetaNow(o);
var q=null;

if(!p){
q='No thread metadata';}else
if(!p.folder)
q='No thread folder';


if(q){
var r=
{error:q,
tid:o};

i.warn('no_thread_folder',JSON.stringify(r));
return null;}

!!p||h(0,'meta should exist');

var s=p.folder;
if(p.is_archived)



s=c('MessagingTag').ACTION_ARCHIVED;

if(this.$MercuryOrderedThreadlist_threadlistOrderMap[s]){
return s;}else 




return null;};

l.prototype.





$MercuryOrderedThreadlist_getThreadFilters=
function(o,
p){

this.$MercuryOrderedThreadlist_threads.getThreadMeta(o,function(q){
p(this.$MercuryOrderedThreadlist_getThreadFiltersIfAny(o,q));}.
bind(this));};
l.prototype.






$MercuryOrderedThreadlist_getThreadFiltersIfAny=
function(o,
p){

p=p||this.$MercuryOrderedThreadlist_threads.getThreadMetaNow(o);
var q=[c('MercuryFilters').ALL];

if(!p){
var r=
{error:'no_thread_metadata',
tid:o};

i.warn('no_thread_metadata',JSON.stringify(r));
return [];}



if(p.unread_count)
q.push(c('MessagingTag').UNREAD);


if(!p.is_canonical)
q.push(c('MessagingTag').GROUPS);


var s=p.page_thread_info;
if(s&&s.flagged)
q.push(c('PageMessageEnumTag').FLAG);


return q;};



function m(o){
switch(o.payload_source){
case c('MercuryPayloadSource').CLIENT_CHANGE_ARCHIVED_STATUS:
case c('MercuryPayloadSource').CLIENT_CHANGE_READ_STATUS:
case c('MercuryPayloadSource').CLIENT_CHANGE_FOLDER:
case c('MercuryPayloadSource').CLIENT_CHANNEL_MESSAGE:
case c('MercuryPayloadSource').CLIENT_DELETE_MESSAGES:
case c('MercuryPayloadSource').CLIENT_DELETE_THREAD:
case c('MercuryPayloadSource').CLIENT_SEND_MESSAGE:
case c('MercuryPayloadSource').SERVER_SEND_MESSAGE:
case c('MercuryPayloadSource').SERVER_FETCH_THREADLIST_INFO:
case c('MercuryPayloadSource').SERVER_THREAD_SYNC:
case c('MercuryPayloadSource').SERVER_INVALIDATE_GLOBAL_STATE:
return true;
case c('MercuryPayloadSource').SERVER_INITIAL_DATA:




return !!o.ordered_threadlists;

default:return false;}}



var n=new (c('MercurySingletonProvider'))(l);

f.exports=l;}),null);

/** js/mercury/search/MercurySearchSnippetResults.js */






























__d('MercurySearchSnippetResults',['MessengerEnvironment','MercuryAPIArgsSource','MercuryIDs','MercurySingletonMixin','MercuryThreadlistConstants','MercuryThreadIDMap','RangedCallbackManager','MercuryServerDispatcher','MercuryServerPayloadPreprocessor'],(function a(b,c,d,e,f,g){











var h=c('MessengerEnvironment').messengerui?
c('MercuryAPIArgsSource').MESSENGER:
c('MercuryAPIArgsSource').WEBMESSENGER,

i={},
j={},

k=null,

l=
c('MercuryThreadlistConstants').WEBMESSENGER_SEARCH_SNIPPET_COUNT,
m=
c('MercuryThreadlistConstants').WEBMESSENGER_SEARCH_SNIPPET_LIMIT,
n=
c('MercuryThreadlistConstants').WEBMESSENGER_SEARCH_SNIPPET_MORE;


function o(x){'use strict';
this.$MercurySearchSnippetResults_fbid=x;
this.$MercurySearchSnippetResults_payloadPreprocessor=
c('MercuryServerPayloadPreprocessor').getForFBID(x);
c('MercuryServerDispatcher').registerEndpoints
({'/ajax/mercury/search_snippets.php':
{request_user_id:x,
mode:c('MercuryServerDispatcher').IMMEDIATE,
handler:function(y){this.handleUpdate(y);}.bind(this)}});


this.$MercurySearchSnippetResults_threadIDMap=c('MercuryThreadIDMap').getForFBID(x);}
o.prototype.

getFBID=function(){'use strict';
return this.$MercurySearchSnippetResults_fbid;};
o.prototype.

getThreadIDMap=function(){'use strict';
return this.$MercurySearchSnippetResults_threadIDMap;};
o.prototype.



























getAllThreadSearchResults=function(x,y){'use strict';
if(x)
p
(this.$MercurySearchSnippetResults_fbid,x,
m,
0,
y);};


o.prototype.

getAllThreadSearchMoreResults=function(x,y){'use strict';
if(x){
var z=i[x];
if(z){
var aa=z.getCurrentArraySize();
p
(this.$MercurySearchSnippetResults_fbid,
x,
n,
aa,
y);}}};



o.prototype.















getSingleThreadSearchResults=function(x,y,z){'use strict';
if(!x||!y)
return;

q.call
(this,
x,
y,
l,
0,
z);};

o.prototype.

getSingleThreadSearchMoreResults=function(x,y,z){'use strict';
if(!x||!y)
return;

if(!j[y])
return;


var aa=j[y][x];
if(aa){
var ba=aa.num_total_snippets,
ca=aa.snippets_cbm.getCurrentArraySize(),
da=ba-ca;
if(da>0){
var ea=da>n?n:da;
q.call
(this,
x,
y,
ea,
ca,
z);}}};



o.prototype.














countSnippetsMatchingQueryInThread=function(x,y){'use strict';
var z=j[y][x];
if(z)
return z.num_total_snippets;};

o.prototype.









findIndexOfSnippet=function(x,y,z,aa){'use strict';
var ba=v(x,y),
ca=ba.getAllResources();
for(var da=0;da<ca.length;da++)
if(z===ca[da].message_id)
return da;};






o.prototype.











findSnippetAtIndex=function(x,y,z,aa){'use strict';
s(x,y,z);
t.call(this,x,y,z,aa);};
o.prototype.

handleUpdate=function(x){'use strict';

if(x.mercury_payload)
this.$MercurySearchSnippetResults_payloadPreprocessor.handleUpdate(x.mercury_payload);

var y=x.search_snippets||{};




Object.keys(y).filter(function(oa){
return !!y[oa];}).
forEach(function(oa){
Object.keys(y[oa]).forEach(function(pa){
if(!y[oa][pa].snippets)
return;

y[oa][pa].snippets.forEach(function(qa){
qa.matched_keywords=r
(qa.matched_keywords);});});});




var z=x.offset,
aa=[];

for(var ba in y){
var ca=y[ba];
for(var da in ca){
var ea=ca[da],
fa=x.other_user_fbid||x.thread_fbid,
ga=
this.$MercurySearchSnippetResults_threadIDMap.getClientIDFromServerIDNow(da),
ha=ea.snippets,

ia=v
(ba,
ga),

ja=ia.getCurrentArraySize();

if(!fa){
aa.push(ga);


if(ja)
continue;}else 


if(z!=ja)
continue;



var ka=j[ga][ba];
ka.num_total_snippets=ea.num_total_snippets;
var la=ha?ha.length:0;
if(la>0)
ia.addResourcesWithoutSorting
(ha,
ja);



if(!fa||x.limit>la)
if(ia.getCurrentArraySize()==
ka.num_total_snippets)
ia.setReachedEndOfArray();}




if(!fa){

var ma=u(ba),
na=ma.getCurrentArraySize();
if(z==na){
ma.addResourcesWithoutSorting
(aa,
na);

if(x.limit>aa.length)
ma.setReachedEndOfArray();}}}};







function p(x,y,z,aa,ba){
if(k)
if(!k.thread_id){
var ca=u
(k.query);

ca.unsubscribe(k.subscriber_id);
k=null;}


var ca=u(y),
da=aa+z,
ea=ca.executeOrEnqueue
(0,
da,
function(ha){
var ia={};
for(var ja=0;ja<ha.length;ja++){
var ka=ha[ja],


la=j[ka][y];
ia[ka]=
{num_total_snippets:la.num_total_snippets,
snippets:la.snippets_cbm.getAllResources()};}


var ma=ca.hasReachedEndOfArray();
ba(ia,ma);}),



fa=ca.getUnavailableResources(ea);
if(fa.length){
k=
{query:y,
thread_id:null,
subscriber_id:ea};

var ga=
{query:y,
offset:aa,
limit:z+1,
snippetLimit:l};

ga.identifier='thread_fbid';
w(ga,x);}}



function q(x,y,z,aa,ba){
if(k)
if(k.thread_id){
var ca=v
(k.query,
k.thread_id);

ca.unsubscribe(k.subscriber_id);
k=null;}


var ca=v(x,y),
da=aa+z,
ea=ca.executeOrEnqueue
(0,
da,
function(){
var ka=ca.getAllResources(),
la=j[y][x].num_total_snippets;
ba(ka,la);}),



fa=ca.getUnavailableResources(ea);
if(fa.length){
k=
{query:x,
thread_id:y,
subscriber_id:ea};

var ga=
{query:x,
snippetOffset:aa,
snippetLimit:z},

ha=this.getThreadIDMap().getServerIDFromClientIDNow(y),ia=
c('MercuryIDs').tokenize(y),ja=ia.type;
if(ja=='user'){
ga.other_user_fbid=ha;}else 

ga.thread_fbid=ha;

ga.identifier='thread_fbid';

w(ga,this.getFBID());}}

























function r(x){
if(x instanceof Array){

var y={};
for(var z=0;z<x.length;z++)
y[z.toString()]=x[z];

return y;}else 


return x;}












function s(x,y,z){








}












function t(x,y,z,aa){
var ba=j[y][x],
ca=ba.snippets_cbm.getAllResources(),
da=ba.num_total_snippets,
ea=ca.length;

if(z<ea){

aa(ca[z].message_id);
return;}

var fa=da-ea,
ga=fa>n?n:fa;


q.call
(this,
x,
y,
ga,
ea,
function(ha,ia){
t.call(this,x,y,z,aa);});}




function u(x){
if(!i[x])
i[x]=new (c('RangedCallbackManager'))();

return i[x];}


function v(x,y){
if(!j[y])
j[y]={};

var z=j[y][x];
if(!z){
z=
{num_total_snippets:-1,
snippets_cbm:new (c('RangedCallbackManager'))()};

j[y][x]=z;}

return z.snippets_cbm;}


function w(x,y){
x.client=h;
c('MercuryServerDispatcher').trySend
('/ajax/mercury/search_snippets.php',
x,
null,
y);}



Object.assign(o,c('MercurySingletonMixin'));

f.exports=o;}),null);

/** js/photos/client/PhotoUtils.js */




__d('PhotoUtils',['Event','URI'],(function a(b,c,d,e,f,g){




var h=
{getImagesFromData:function i(j){
var k=[];
for(var l in j)
if(l.indexOf('image')===0)
k.push(j[l]);



return k;},


getFBIDFromData:function i(j){
return j&&j.id;},


getOriginalImageFromData:function i(j){
return j.original||j.download_image;},


getDownloadURLFromData:function i(j){
var k=this.getOriginalImageFromData(j);
if(!k)
return null;

var l=new (c('URI'))(k.uri);
l.addQueryData({dl:1});
return l;},


getPermalinkFromData:function i(j){
return j.permalink;},


canViewerMakeCoverPhoto:function i(j){
return !!j.can_viewer_make_cover_photo;},


getCoverPhotoURLFromData:function i(j){
return new (c('URI'))('/profile.php').
addQueryData({preview_cover:h.getFBIDFromData(j)});},


preload:function i(j,k,l){
var m=j.getDimensions();
for(var n=0;n<k.length;++n){
var o=m.getBestFitImageFromPhoto
(k[n],
m.getMaxStageDimensions()),


p=new Image();
l&&c('Event').listen
(p,
'load',
l.bind(null,k[n]));

j.getLogger().log(o.uri);
p.src=o.uri;}}};




f.exports=h;}),null);

/** js/photos/client/SpotlightViewer.js */




__d('SpotlightViewer',['cx','React','Spotlight.react'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits






(k,c('React').Component);j=i&&i.prototype;k.prototype.
render=function(){'use strict';
if(!this.props.open)
return null;


var l="_n3";
if(this.props.className)
l+=' '+this.props.className;



return (c('React').createElement(c('Spotlight.react'),
{onBeforeHide:this.props.onBeforeHide,
onHide:this.props.onHide,
rootClassName:this.props.rootClassName,
shown:this.props.open,
key:'photoLayer'},
c('React').createElement('div',{className:l,onClick:this.props.onClick,role:'presentation'},
this.props.children)));};



function k(){'use strict';i.apply(this,arguments);}


f.exports=k;}),null);

/** js/photos/client/SpotlightViewerImage.js */




__d('SpotlightViewerImage',['cx','Image.react','React','XUISpinner.react'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits







(k,c('React').Component);j=i&&i.prototype;

function k(l){'use strict';
j.constructor.call(this,l);this.




















$SpotlightViewerImage_handleImageLoaded=function(){
this.setState({loading:false});}.
bind(this);this.state={loading:true};}k.prototype.componentWillReceiveProps=function(l){'use strict';if(l.src!==this.props.src)this.setState({loading:true});};k.prototype.render=function(){'use strict';return c('React').createElement('div',{className:"_4-od"},this.$SpotlightViewerImage_renderSpinner(),this.$SpotlightViewerImage_renderImage());};k.prototype.

$SpotlightViewerImage_renderSpinner=function(){'use strict';
if(!this.state.loading)
return null;


return (c('React').createElement(c('XUISpinner.react'),
{className:"_enh",
size:'large'}));};


k.prototype.

$SpotlightViewerImage_renderImage=function(){'use strict';

return (c('React').createElement('div',{className:this.state.loading?"_eni":''},
c('React').createElement(c('Image.react'),
{onLoad:this.$SpotlightViewerImage_handleImageLoaded,
src:this.props.src,
style:
{width:this.props.dimensions.x,
height:this.props.dimensions.y}})));};







f.exports=k;}),null);

/** js/photos/client/SpotlightViewport.js */




__d('SpotlightViewport',['csx','cx','Locale','Parent','React','ReactDOM','Vector','joinClasses'],(function a(b,c,d,e,f,g,h,i){











var j=c('React').PropTypes,

k=c('React').createClass({displayName:'SpotlightViewport',
propTypes:
{stageDimensions:j.object.isRequired,
useWidth:j.bool},


PAGE_TO_PREV_PERCENTAGE:.2,

sections:
{NONE:null,
FORWARD:1,
BACKWARD:2},


timer:null,

getInitialState:function l(){

return {currentActiveSection:this.sections.NONE,
active:true};},



componentDidMount:function l(){
this._onMouseEnter();},


componentWillUnmount:function l(){
if(this.props.fadeInNOut)
clearTimeout(this.timer);},



_onMouseMove:function l(event){
var m=c('ReactDOM').findDOMNode(this),
n=c('Vector').getEventPosition(event.nativeEvent),
o=c('Vector').getElementPosition(m),
p=this.props.useWidth?
this.props.stageDimensions.x:
c('Vector').getElementDimensions(m).x;


if(this.props.fadeInNOut)
if(this._isMouseOverActionBars(n)){
clearTimeout(this.timer);}else 

this._onMouseEnter();





var q,
r=n.x-o.x,
s=r/p;
if(c('Locale').isRTL()){
q=s>1-this.PAGE_TO_PREV_PERCENTAGE;}else 

q=s<this.PAGE_TO_PREV_PERCENTAGE;


if(q){
this.setState({currentActiveSection:this.sections.BACKWARD});}else 

this.setState({currentActiveSection:this.sections.FORWARD});},



_onClick:function l(event){
var m=this.state.currentActiveSection==this.sections.FORWARD,
n=event.target;

if(!c('Parent').bySelector(n,"._51an"))
this.props.onClick&&this.props.onClick(m,event);},



_isMouseOverActionBars:function l(m){
return m.y<70||
m.y>this.props.stageDimensions.y-70;},


_onMouseEnter:function l(){
this.setState({active:true});
if(this.props.fadeInNOut){
clearTimeout(this.timer);
this.timer=setTimeout(this._onMouseLeave,1000);}},



_onMouseLeave:function l(){
this.setState({active:false});},


makeActive:function l(){
this._onMouseEnter();},


render:function l(){
var m="_4-of"+


(!this.state.active&&!this.props.active?' '+"_50-l":'')+

(this.state.currentActiveSection===this.sections.BACKWARD?' '+"_516a":'')+

(this.state.currentActiveSection===this.sections.FORWARD?' '+"_516b":'')+
(this.props.showLoadingIndicator?' '+"_51jp":'');


if(this.props.className)
m=c('joinClasses')(m,this.props.className);


var n={};
if(this.props.stageDimensions){
n=
{height:this.props.stageDimensions.y};

if(this.props.useWidth)
n.width=this.props.stageDimensions.x;}




return (c('React').createElement('div',
{className:m,
onClick:this._onClick,
onMouseEnter:this._onMouseEnter,
onMouseLeave:this._onMouseLeave,
onMouseMove:this._onMouseMove,
role:'presentation',
style:n},
this.props.children,
c('React').createElement('div',{className:"_4-og"},
c('React').createElement('span',{className:"_4-oh"}),
this.props.media,
c('React').createElement('div',{className:"_4-oi"}))));}});






f.exports=k;}),null);

/** js/stickers/Sticker.react.js */




__d('Sticker.react',['cx','fbt','Arbiter','Image.react','MessengerHotLikeSVG.react','React','ReactDOM','PaddedStickerConfig','StickerConstants','emptyFunction','getElementPosition','getObjectValues','joinClasses'],(function a(b,c,d,e,f,g,h,i){

'use strict';
















var j=c('React').PropTypes,

k=83,
l=5000,

m=10,

n=
{CLICK:'click',
HOVER:'hover',
LOAD_AND_HOVER:'load_and_hover'},


o=c('React').createClass({displayName:'Sticker',
propTypes:
{accessibilityLabel:j.string,
animationTrigger:j.oneOf(c('getObjectValues')(n)),
forceCursorPointer:j.bool,
frameCount:j.number.isRequired,
frameRate:j.number,
framesPerCol:j.number.isRequired,
framesPerRow:j.number.isRequired,
onAttachmentLoad:j.func,
onStickerClick:j.func,
packID:j.string,
packName:j.string,
sourceURI:j.string.isRequired,
sourceWidth:j.number.isRequired,
sourceHeight:j.number.isRequired,
spriteURI:j.string,
stickerID:j.string,

subscribedThreadID:j.string,

testID:j.string},


getInitialState:function p(){

return {index:0,
hasAnimated:false,
unsubscribeID:null};},



getDefaultProps:function p(){

return {accessibilityLabel:'',
forceCursorPointer:false,
frameRate:k,
onStickerClick:c('emptyFunction'),
packID:null,
packName:''};},



componentDidMount:function p(){
this.props.onAttachmentLoad&&this.props.onAttachmentLoad();



this._stopIntervalID=0;

if(this.props.animationTrigger===n.LOAD_AND_HOVER&&
this.props.frameCount>1&&
this.props.spriteURI)
this.startAnimation();


if(this.props.subscribedThreadID&&this.props.frameCount>1){
var q=c('Arbiter').subscribe(this.props.subscribedThreadID,
function(r,s){
this.isScrolledIntoView(s.scrollTop,s.viewHeight,s.top);}.
bind(this));

this.setState({unsubscribeID:q});}},



componentWillUnmount:function p(){
if(this.state.unsubscribeID)
c('Arbiter').unsubscribe(this.state.unsubscribeID);

if(this.isAnimating())
clearInterval(this._stopIntervalID);},



isAnimating:function p(){
return !!this._stopIntervalID;},


getWidth:function p(){
return Math.floor(this.props.sourceWidth);},


getHeight:function p(){
return Math.floor(this.props.sourceHeight);},



preloadSprite:function p(){


var q=new window.Image();
q.onload=function(){
if(this.isMounted()&&!this.state.hasAnimated){
this.setState
({hasAnimated:true});

this._stopIntervalID=
setInterval(this.incrementFrameIndex,this.props.frameRate);}}.

bind(this);
if(c('PaddedStickerConfig').ChatPaddedAnimatedStickerGK&&
this.props.paddedSpriteURI){
q.src=this.props.paddedSpriteURI;}else 

q.src=this.props.spriteURI;},




isScrolledIntoView:function p(q,r,s){
var t=c('getElementPosition')(c('ReactDOM').findDOMNode(this)),
u=q+t.y-s,
v=q+r,
w=u+t.height;

if(this.props.frameCount>1&&
!this.state.hasAnimated&&
w-m<=v&&
u+m>=q)
this.startAnimation();},



startAnimation:function p(){
if(!this.state.hasAnimated&&this.props.spriteURI){
this.preloadSprite();}else
if(!this.isAnimating()){
this.setState
({hasAnimated:true});

this._stopIntervalID=
setInterval(this.incrementFrameIndex,this.props.frameRate);}},



stopAnimation:function p(){
this.setState
({index:0});

clearInterval(this._stopIntervalID);
this._stopIntervalID=0;},


toggleAnimation:function p(){
if(this.isAnimating()){
this.stopAnimation();}else 

this.startAnimation();},



shouldStopAnimating:function p(){
var q=this.state.index%this.props.frameCount;



if(!(q===0&&
this.state.index*this.props.frameRate>l))
return false;



if(this.props.animationTrigger===n.CLICK)
return true;



return !this.state.isHovered;},


incrementFrameIndex:function p(){
if(this.shouldStopAnimating()){
this.stopAnimation();}else 

this.setState({index:this.state.index+1});},




getStyle:function p(){
var q=0,
r=this.props.spriteURI;
if(c('PaddedStickerConfig').ChatPaddedAnimatedStickerGK&&
this.props.paddedSpriteURI){
r=this.props.paddedSpriteURI;
var s=240/Math.min(this.getHeight(),this.getWidth());
q=Math.floor(c('StickerConstants').SPRITE_PADDING/s);}


var t=this.state.index%this.props.frameCount,
u=t%this.props.framesPerRow*
(this.getWidth()+q*2)+q,
v=Math.floor(t/this.props.framesPerRow)*
(this.getHeight()+q*2)+q,

w=this.props.frameCount>1&&
this.props.animationTrigger===n.CLICK||
this._isStickerClickable(this.props.packID),

x=this.props.forceCursorPointer||w?
'pointer':
'default';



if(!this.state.hasAnimated||!this.props.spriteURI){

return {backgroundImage:this._isHotLike()?
null:
'url('+this.props.sourceURI+')',
backgroundRepeat:'no-repeat',
backgroundSize:this.getWidth()+'px '+this.getHeight()+'px',
cursor:x,
height:this.getHeight(),
width:this.getWidth()};}else 



return {backgroundImage:'url('+r+')',
backgroundPosition:-u+'px '+ -v+'px',
backgroundSize:
(this.getWidth()+q*2)*this.props.framesPerRow+'px '+
(this.getHeight()+q*2)*this.props.framesPerCol+'px',
cursor:x,
height:this.getHeight(),
width:this.getWidth(),
imageRendering:'-webkit-optimize-contrast'};},




_isStickerClickable:function p(q){
return q&&
q!=c('StickerConstants').MOBILE_LIKE_STICKER_PACK_ID&&
q!=c('StickerConstants').GRAVEYARD_PACK_ID;},


onStickerClick:function p(){
if(!this._isStickerClickable(this.props.packID))
return;


if(this.props.onStickerClick)
this.props.onStickerClick(this.props.packID,this.props.stickerID);},



mouseLeft:function p(){
this.setState({isHovered:false});},


mouseEntered:function p(){
this.setState({isHovered:true});
if(!this.isAnimating())
this.startAnimation();},



tabFocusSelected:function p(){
this.setState({isHovered:true});
if(!this.isAnimating())
this.startAnimation();},



tabFocusUnselected:function p(){
this.setState({isHovered:false});},


getAriaLabel:function p(){
return i._(["{pack name} {sticker name} sticker","847c35f556920f2716e9a9c39ac36cc5"],[i.param

('pack name',
this.props.packName),i.param


('sticker name',
this.props.accessibilityLabel)]);},






render:function p(){
var q=void 0,r=void 0;
if(this.props.animationTrigger===n.CLICK&&
this.props.frameCount>1&&
this.props.spriteURI){
q=true;}else
if((this.props.animationTrigger===n.HOVER||
this.props.animationTrigger===n.LOAD_AND_HOVER)&&
this.props.frameCount>1&&
this.props.spriteURI)
r=true;


var s=q?this.toggleAnimation:null;
if(this.props.packID)
s=this.onStickerClick;

var t=this.props.className,
u=null;
if(this._isHotLike()){
t=c('joinClasses')(t,"_576q");
u=c('React').createElement(c('MessengerHotLikeSVG.react'),{color:this.props.customColor});}



return (c('React').createElement('div',
{'aria-label':this.getAriaLabel(),
className:t,
'data-testid':this.props.testID,
onBlur:this.tabFocusUnselected,
onClick:s,
onFocus:this.tabFocusSelected,
onMouseEnter:r?this.mouseEntered:null,
onMouseLeave:r?this.mouseLeft:null,
role:'img',
style:this.getStyle(),
tabIndex:'0'},
u));},




_isHotLike:function p(){
if(!!document.createElementNS&&
!!document.createElementNS('http://www.w3.org/2000/svg','svg').
createSVGRect)


return (this.props.stickerID===c('StickerConstants').HOT_LIKE_SMALL_STICKER_ID||
this.props.stickerID===c('StickerConstants').HOT_LIKE_MEDIUM_STICKER_ID||
this.props.stickerID===c('StickerConstants').HOT_LIKE_LARGE_STICKER_ID);


return false;}});



f.exports=o;}),null);

/** js/stickers/StickerUtils.js */







__d("StickerUtils",[],(function a(b,c,d,e,f,g){

var h=









{getScaledDimensions:function i(j,k,l){
var m,n,o;
if(k>j){
o=l/k;
m=j*o;
n=k*o;}else{

o=l/j;
m=j*o;
n=k*o;}


return {height:Math.round(m),width:Math.round(n)};},









capitalizeWords:function i(j){
var k=j.split(" ");
for(var l=0;l<k.length;l++){
var m=k[l].charAt(0).toUpperCase();
k[l]=m+k[l].substr(1);}

return k.join(" ");}};



f.exports=h;}),null);

/** js/stickers/StickersStoreController.js */






__d('StickersStoreController',['cx','Bootloader','DialogFitHeight','DOM','LayerAutoFocus','LayerFadeOnHide','LayerHideOnEscape','PureStoreBasedStateMixin','React','ReactDOM','StickersActions','StickersDispatcher','StickersStateStore','XUIDialog.react','XUIDialogBody.react','XUISpinner.react','isSocialPlugin','requestAnimationFrame'],(function a(b,c,d,e,f,g,h){

'use strict';





















var i=c('React').PropTypes,

j=688,
k=320,

l=null,

m=c('React').createClass({displayName:'StoreLayer',
mixins:[c('PureStoreBasedStateMixin')(c('StickersStateStore'))],

propTypes:
{isComposer:i.bool,
onToggle:i.func.isRequired,
shown:i.bool.isRequired},


getDefaultProps:function r(){

return {isComposer:false};},



statics:
{calculateState:function r(){

return {packID:c('StickersStateStore').getState().get('storePackID')};}},




getInitialState:function r(){

return {renderStore:function s(){

return (c('React').createElement('div',{className:"_5r5e"},
c('React').createElement(c('XUISpinner.react'),{background:'light',size:'large'})));}};},






componentWillMount:function r(){
c('StickersDispatcher').explicitlyRegisterStores
([c('StickersStateStore')]);},



shouldComponentUpdate:function r(s){
return !!s.shown;},


componentDidMount:function r(){
c('Bootloader').loadModules(["StickersStore.react","RelayRootContainer","StickersStorePackListRoute","StickersStorePackDetailRoute"],





function(s,
t,
u,
v){

this.setState
({renderStore:function(){
var w=this.state.packID?
new v({packID:this.state.packID}):
new u();

return (c('React').createElement(t,
{Component:s,
route:w,
renderFetched:function(x){
return (c('React').createElement(s,babelHelpers['extends']({},
x,
{isComposer:this.props.isComposer,
packID:this.state.packID,
shown:this.props.shown})));}.bind(this)}));}.




bind(this)});}.

bind(this),'StickersStoreController');},


_onToggle:function r(s){
c('requestAnimationFrame')(function(){return this.props.onToggle(s);}.bind(this));},


render:function r(){
var s=c('isSocialPlugin')()&&



document.body.offsetWidth<j?
k:
j;


return (c('React').createElement(c('XUIDialog.react'),
{behaviors:
{DialogFitHeight:c('DialogFitHeight'),
LayerAutoFocus:c('LayerAutoFocus'),
LayerFadeOnHide:c('LayerFadeOnHide'),
LayerHideOnEscape:c('LayerHideOnEscape')},

onToggle:this._onToggle,
shown:this.props.shown,
width:s},
c('React').createElement(c('XUIDialogBody.react'),{className:"_5rq- autofocus"},
this.state.renderStore())));}}),






n=function r(s){
if(!l){
l=c('DOM').create('div');
c('DOM').appendContent(document.body,l);}

c('ReactDOM').render
(c('React').createElement(m,
{isComposer:s,
onToggle:p,
shown:true}),

l);},



o=function r(){
if(!l)
return;

c('ReactDOM').render
(c('React').createElement(m,{shown:false,onToggle:p}),
l);},



p=function r(s){
s?n():o();},


q=



{showStore:function r(s,t){
c('StickersActions').selectStorePack(s);
n(!!t);}};



f.exports=q;}),null);

/** shared/core_components/Image/CssBackgroundImage.react.js */








__d('CssBackgroundImage.react',['EncryptedImg','React','createCancelableFunction','cssURL'],(function a(b,c,d,e,f,g){







var h=c('React').PropTypes,

i=c('React').createClass({displayName:'CssBackgroundImage',
getProps:
{imageURI:h.string.isRequired,
className:h.string,
backgroundPosition:h.string,
height:h.string,
width:h.string,
style:h.object,
onMouseDown:h.func,
onMouseMove:h.func,
onMouseUp:h.func,
onMouseOut:h.func},


getInitialState:function j(){

return {image:'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs='};},






getDefaultProps:function j(){

return {backgroundPosition:'0% 0%',
style:{}};},



_process:function j(k){
if(!c('EncryptedImg').isEncrypted(k)){

this.setState({image:k});
return;}


if(this.encryptedImgCallback)

this.encryptedImgCallback.cancel();





this.encryptedImgCallback=c('createCancelableFunction')(function(l){



if(k===this.props.imageURI)


this.setState({image:l});}.

bind(this));



c('EncryptedImg').load(k,this.encryptedImgCallback);},


componentWillMount:function j(){
if(this.props.imageURI!=null)
this._process(this.props.imageURI);},



componentWillReceiveProps:function j(k){
if(k.imageURI!=null)
this._process(k.imageURI);},



componentWillUnmount:function j(){
if(this.encryptedImgCallback)

this.encryptedImgCallback.cancel();},



render:function j(){var k=








this.props,l=k.imageURI,m=k.backgroundPosition,n=k.height,o=k.width,p=k.style,q=babelHelpers.objectWithoutProperties(k,['imageURI','backgroundPosition','height','width','style']);


return (c('React').createElement('div',babelHelpers['extends']
({style:Object.assign({},p,
{backgroundImage:c('cssURL')(this.state.image),
backgroundPosition:m||p.backgroundPosition,
height:n||p.height,
width:o||p.width})},

q)));}});





f.exports=i;}),null);
