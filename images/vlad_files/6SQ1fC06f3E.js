if (self.CavalryLogger) { CavalryLogger.start_js(["cbXGL"]); }

/** __static_js_modules__/optimisticvideopostevent.js */




__d("OptimisticVideoPostEvent",[],(function a(b,c,d,e,f,g){

f.exports={VIDEO_POST_ADDED:"video_post_added",VIDEO_POST_REMOVED:"video_post_removed",POST_REMOVED_WITHOUT_REPLACEMENT:"post_removed_without_replacement"};}),

null);

/** __static_js_modules__/optimisticvideopostsource.js */




__d("OptimisticVideoPostSource",[],(function a(b,c,d,e,f,g){

f.exports={PAGES_TIMELINE:"pages_timeline",VIDEO_HUB:"video_hub",USERS_TIMELINE:"users_timeline"};}),

null);

/** __static_js_modules__/videolibrarynuxaction.js */




__d("VideoLibraryNuxAction",[],(function a(b,c,d,e,f,g){

f.exports={IMPRESSION:"impression",DISMISS:"dismiss"};}),

null);

/** __static_js_modules__/videolibrarynuxtype.js */




__d("VideoLibraryNuxType",[],(function a(b,c,d,e,f,g){

f.exports={HIGHLIGHTED_VIDEOS_NUX:"highlighted_videos_nux",OPTIMISTIC_POST_NUX:"optimistic_post_nux",VIDEO_HUB_NUX:"video_hub_nux",VIDEO_INSIGHTS_NUX:"video_insights_nux"};}),

null);

/** js/video/upload/OptimisticPostMetadata.react.js */





__d('OptimisticPostMetadata.react',['cx','React','XUIText.react','Link.react','BackgroundImage.react','getDOMImageSize'],(function a(b,c,d,e,f,g,h){var i,j,









k=470,
l=263,
m=472;i=babelHelpers.inherits

(n,c('React').Component);j=i&&i.prototype;function n(){var o,p;'use strict';for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=j.constructor).call.apply(o,[this].concat(r)),this.
state=
{height:l},this.






onGetSize=function(t,u,v){
var w=t<u?k:l;
this.setState
({height:w});}.

bind(this),p;}n.prototype.componentDidMount=function(){'use strict';c('getDOMImageSize')(this.props.image,this.onGetSize);};n.prototype.

render=function(){'use strict';

return (c('React').createElement('div',null,
c('React').createElement('div',{className:"_1gi0"},
c('React').createElement(c('XUIText.react'),{size:'medium',weight:'bold',display:'block'},
c('React').createElement(c('Link.react'),null,
this.props.title)),


c('React').createElement(c('XUIText.react'),{size:'medium',weight:'normal',display:'block'},
this.props.description)),


c('React').createElement('div',
{className:"_2bc-"},
c('React').createElement(c('BackgroundImage.react'),
{src:this.props.image,
backgroundSize:'contain',
width:m,
height:this.state.height}))));};







f.exports=n;}),null);

/** js/video/upload/OptimisticPostMetadataWithoutThumbnail.react.js */





__d('OptimisticPostMetadataWithoutThumbnail.react',['cx','EventListener','OptimisticPostMetadata.react','React','ReactDOM','generateVideoThumbnails'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits









(k,c('React').Component);j=i&&i.prototype;function k(){var l,m;'use strict';for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=j.constructor).call.apply(l,[this].concat(o)),this.
state=
{thumbnail:''},this.


$OptimisticPostMetadataWithoutThumbnail_loadedmetadataListener=null,this.

















generateVideoThumbnails=function(){
var q=c('ReactDOM').findDOMNode(this.refs.videoPlayer);

c('generateVideoThumbnails')(q,200,200,1).
done(function(r){
this.setState({thumbnail:r.thumbnails[0].getURL()});}.
bind(this));}.
bind(this),m;}k.prototype.componentDidMount=function(){'use strict';var l=c('ReactDOM').findDOMNode(this.refs.videoPlayer);this.$OptimisticPostMetadataWithoutThumbnail_loadedmetadataListener=c('EventListener').listen(l,'loadedmetadata',this.generateVideoThumbnails);};k.prototype.componentWillUnmount=function(){'use strict';if(this.$OptimisticPostMetadataWithoutThumbnail_loadedmetadataListener){this.$OptimisticPostMetadataWithoutThumbnail_loadedmetadataListener.remove();this.$OptimisticPostMetadataWithoutThumbnail_loadedmetadataListener=null;}};k.prototype.

render=function(){'use strict';

return (c('React').createElement('div',null,
c('React').createElement(c('OptimisticPostMetadata.react'),
{title:this.props.title,
description:this.props.description,
image:this.state.thumbnail}),

c('React').createElement('video',
{key:'videoPlayer',
ref:'videoPlayer',
className:"_2mpk",
src:this.props.videoFileUrl})));};






f.exports=k;}),null);

/** js/video/upload/OptimisticPostUFISection.react.js */






__d('OptimisticPostUFISection.react',['cx','fbt','Image.react','React','UFICommentLink.react','UFILikeLink.react','UFIShareLink.react','XUICardSection.react','XUIPopoverButton.react'],(function a(b,c,d,e,f,g,h,i){var j,k;j=babelHelpers.inherits












(l,c('React').Component);k=j&&j.prototype;l.prototype.
render=function(){'use strict';
var m=null;
if(this.props.isPagePost)
m=
c('React').createElement('div',{className:"_1f6t _3uni"},
c('React').createElement('div',{className:"_3m9g"},
c('React').createElement('div',{className:"_40yk"},
c('React').createElement(c('XUIPopoverButton.react'),
{haschevron:true,
image:
c('React').createElement(c('Image.react'),
{width:16,
height:16,
src:this.props.profilePicture}),


ref:'open-menu-button',
suppressed:true,
type:'button'}))));







return (c('React').createElement(c('XUICardSection.react'),null,
c('React').createElement('div',
{className:"_sa_"},
m,
c('React').createElement('div',{className:"_a7s _3399"},
c('React').createElement('div',{className:"_524d"},
c('React').createElement('div',{className:"_42nr"},
c('React').createElement('span',null,
c('React').createElement(c('UFILikeLink.react'),{likeAction:true})),

c('React').createElement('span',null,
c('React').createElement(c('UFICommentLink.react'),null,i._(["Comment","aebcf8041896e9214d4300b39ec95feb"]))),



c('React').createElement('span',null,
c('React').createElement(c('UFIShareLink.react'),null))))))));};







function l(){'use strict';j.apply(this,arguments);}


f.exports=l;}),null);

/** js/video/upload/StoryProfile.react.js */





__d('StoryProfile.react',['cx','BackgroundImage.react','FBProfilePhotoShadow.react','Image.react','ImageBlock.react','InlineBlock.react','Link.react','PrivacyConst','React','XUIGrayText.react','XUIText.react','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,















k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;'use strict';for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.







































$StoryProfile_renderPrivacyIndicator=function(){
var r=null;
if(this.props.privacyIndicator){
r=this.props.privacyIndicator;}else
if(this.props.privacySetting){
var s=
this.props.privacySetting==c('PrivacyConst').BaseValue.EVERYONE,
t=
this.props.privacySetting==c('PrivacyConst').BaseValue.ALL_FRIENDS;

r=
c('React').createElement(c('BackgroundImage.react'),
{width:13,
height:12,
'data-hover':'tooltip',
'data-tooltip-content':this.props.privacyTooltip,
className:"_14g-"+

(s?' '+"_14g_":'')+
(t?' '+"_5qhp":'')+

(!t&&!s?' '+"_14h0":'')});}



if(!r)
return null;


return (c('React').createElement('span',null,
c('React').createElement(c('XUIGrayText.react'),{shade:'light',size:'small',display:'inline'},'\u00A0\u00B7\u00A0'),


r));}.


bind(this),this.

$StoryProfile_renderProfileName=function(){
var r,
s;

if(this.props.profileURL){
var t;

if(this.props.openProfileURLInNewPage)
t='_blank';

s='bold';
r=
c('React').createElement(c('Link.react'),{href:this.props.profileURL,target:t},
this.props.username);}else 



r=this.props.username;


if(this.props.description){

return (c('React').createElement('div',null,
c('React').createElement(c('XUIText.react'),
{className:"_14gz",
size:'medium',
weight:s},
r),

' ',
this.props.description));}else 




return (c('React').createElement(c('XUIText.react'),
{className:"_14gz",
size:'medium',
weight:s,
display:'block'},
r));}.



bind(this),this.

$StoryProfile_renderAdditionalLinks=function(){
if(this.props.additionalLinks)

return (c('React').createElement(c('XUIGrayText.react'),{shade:'light',size:'small',display:'inline'},
this.props.additionalLinks.map
(function(r,s){
return (c('React').createElement('span',{key:s},'\u00A0\u00B7\u00A0',

c('React').createElement(c('Link.react'),
{href:r.URL,
target:'_blank'},
r.text)));})));







return null;}.
bind(this),n;}l.prototype.

render=function(){'use strict';

return (c('React').createElement(c('ImageBlock.react'),
{spacing:'medium',
className:c('joinClasses')

(this.props.className,
"_56-3")},

c('React').createElement(c('FBProfilePhotoShadow.react'),null,
c('React').createElement(c('Image.react'),
{className:"_56-4",
src:this.props.profilePicture})),


c('React').createElement(c('InlineBlock.react'),{alignv:'middle',height:40,fullWidth:true},
this.$StoryProfile_renderProfileName(),
c('React').createElement('div',null,
c('React').createElement(c('XUIGrayText.react'),{shade:'light',size:'small',display:'inline'},
this.props.uploadTime),

this.$StoryProfile_renderPrivacyIndicator(),
this.$StoryProfile_renderAdditionalLinks()))));};




l.propTypes={privacySetting:k.number,privacyIndicator:k.object,profilePicture:k.string.isRequired,privacyTooltip:k.node,username:k.string.isRequired,uploadTime:k.node.isRequired,profileURL:k.string,openProfileURLInNewPage:k.bool,additionalLinks:k.arrayOf(k.shape({URL:k.string,text:k.node})),description:k.string};l.defaultProps={openProfileURLInNewPage:false};


f.exports=l;}),null);

/** js/video/upload/OptimisticVideoPost.react.js */






__d('OptimisticVideoPost.react',['fbt','cx','ActorURI','AsyncRequest','Layout.react','LeftRight.react','OptimisticPostMetadata.react','OptimisticPostMetadataWithoutThumbnail.react','OptimisticPostUFISection.react','PrivacyConst','ProgressBar.react','PublishingToolsSource','React','StoryProfile.react','VideoEditSource','VideoLibraryButton.react','VideoLibrarySource','VideoThumbnailConfig','XUIAmbientNUX.react','XUIButton.react','XUICard.react','XUICardSection.react','XVideoEditController','XVideoEditDialogController'],(function a(b,c,d,e,f,g,h,i){var j,k,




l=c('Layout.react').Column,
m=c('Layout.react').FillColumn,



















n=c('React').PropTypes;j=babelHelpers.inherits






(o,c('React').Component);k=j&&j.prototype;function o(){var p,q;'use strict';for(var r=arguments.length,s=Array(r),t=0;t<r;t++)s[t]=arguments[t];return q=(p=k.constructor).call.apply(p,[this].concat(s)),this.





















































state=
{shouldShowVideoLibraryNux:this.props.shouldShowVideoLibraryNux,
videoLibraryNuxImpression:0},this.


getThumbnail=function(){
if(this.props.thumbnail)
return this.props.thumbnail;

return c('VideoThumbnailConfig').defaultThumbnailURL;}.
bind(this),this.

onEditClick=function(){
var u;
if(this.props.shouldShowVideoEditDialog){
u=c('XVideoEditDialogController').getURIBuilder().
setInt('video_id',this.props.videoID).
setEnum('source',c('VideoEditSource').OPTIMISTIC_VIDEO_POST).
getURI();

if(this.props.targetID)
u=c('ActorURI').create(u,this.props.targetID);


new (c('AsyncRequest'))(u).send();}else{

u=c('XVideoEditController').getURIBuilder().
setInt('v',this.props.videoID).
setEnum('source',c('VideoEditSource').OPTIMISTIC_VIDEO_POST).
getURI();

window.open(u,'_blank');}}.

bind(this),this.

onNuxDismiss=function(){
this.setState({shouldShowVideoLibraryNux:false});

this.props.onVideoLibraryNuxDismiss();}.
bind(this),this.

renderLayers=function(){
if(!this.props.shouldShowVideoLibraryNux)
return null;



return (c('React').createElement(c('XUIAmbientNUX.react'),
{contextRef:function(){return this.refs.video_library_button;}.bind(this),
shown:true,
position:'above',

onCloseButtonClick:this.props.onVideoLibraryNuxDismiss,
key:'videoLibraryNux'},'Manage your videos, all in one place.'));}.



bind(this),q;}o.prototype.

render=function(){'use strict';
var p=h._(["Just Now","2daa6222ee10641d4093cb4ab3d48b60"]),




q=void 0;
if(this.props.progress>=100&&this.props.progressCompleteText){
q=this.props.progressCompleteText;}else 

q=h._(["Preparing... {number} \u0025","ec8dc10c4d4561768a6dbdcf41772057"],[h.param


('number',
this.props.progress)]);





var r=null;
if(this.props.shouldShowVideoLibraryButton)
r=
c('React').createElement(c('VideoLibraryButton.react'),
{ref:'video_library_button',
pageID:this.props.targetID,
source:c('VideoLibrarySource').OPTIMISTIC_VIDEO_POST,
refSource:c('PublishingToolsSource').OPTIMISTIC_VIDEO_POST});


var s=null;
if(this.props.shouldShowVideoEditButton)
s=
c('React').createElement(c('XUIButton.react'),
{className:"_4p26",
label:'Edit',
size:'small',
onClick:this.onEditClick});


var t=
c('React').createElement(c('XUICardSection.react'),{background:'light-wash'},
c('React').createElement('div',{className:"_pro"},
c('React').createElement('div',{className:"_2uu3"},
c('React').createElement(c('Layout.react'),
{className:"_1mg"},
c('React').createElement(m,null,
c('React').createElement('div',null,
c('React').createElement(c('ProgressBar.react'),
{className:"_prp",
value:this.props.progress,
label:q}))),



c('React').createElement(l,null,
c('React').createElement('div',null,
r,
s)))))),







u=this.props.profilePicture||'',
v=this.props.username||'',
w=this.props.privacySetting||-1,

x=
c('React').createElement(c('StoryProfile.react'),
{className:"_4r8g",
profilePicture:u,
username:v,
uploadTime:p,
privacySetting:w}),


y=this.props.thumbnail?
c('React').createElement(c('OptimisticPostMetadata.react'),
{title:this.props.metadataTitle,
description:this.props.metadataDescription,
image:this.getThumbnail()}):

c('React').createElement(c('OptimisticPostMetadataWithoutThumbnail.react'),
{title:this.props.metadataTitle,
description:this.props.metadataDescription,
videoFileUrl:this.props.videoFileUrl}),


z=h._(["Boost Post","4f540a927c23b5af44ed8a54b229b69c"]),




aa=this.props.isPagePost?
c('React').createElement('div',{className:"_5c_1"},
c('React').createElement(c('LeftRight.react'),null,
c('React').createElement('div',null),
c('React').createElement(c('XUIButton.react'),
{label:z,
use:'confirm'}))):



null,

ba=
c('React').createElement(c('OptimisticPostUFISection.react'),
{profilePicture:this.props.profilePicture,
isPagePost:this.props.isPagePost}),


ca=
c('React').createElement('div',null,
x,
y,
aa,
ba),


da=
c('React').createElement('div',{className:"_5c_3"});


return (c('React').createElement('div',{className:
!!this.props.isPagePost?"_5ctl":''},

c('React').createElement(c('XUICard.react'),{className:"_4p28"},
t,
c('React').createElement('div',{className:"_prq"},
ca,
da)),


this.renderLayers()));};


o.propTypes={profilePicture:n.string,username:n.string,privacySetting:n.number,metadataTitle:n.string,metadataDescription:n.string,thumbnail:n.string,videoID:n.string,isPagePost:n.bool,progress:n.number,progressCompleteText:n.string,shouldShowVideoEditButton:n.bool,shouldShowVideoEditDialog:n.bool,targetID:n.string,videoFileUrl:n.string,shouldShowVideoLibraryNux:n.bool};o.defaultProps={profilePicture:'',username:'',privacySetting:c('PrivacyConst').BaseValue.EVERYONE,metadataTitle:'',metadataDescription:'',thumbnail:'',progress:0,videoID:'',isPagePost:false,progressCompleteText:'',shouldShowVideoEditButton:true,shouldShowVideoEditDialog:false,videoFileUrl:'',shouldShowVideoLibraryNux:false};


f.exports=o;}),null);

/** js/video/upload/OptimisticVideoPostLogger.js */





__d('OptimisticVideoPostLogger',['BanzaiLogger'],(function a(b,c,d,e,f,g){



var h=

{logEvent:function i
(event,
j,
k,
l,
m){

c('BanzaiLogger').log
('OptimisticVideoPostLoggerConfig',

{number_of_posts:k,
source:j,
event:event,
target_id:l,
video_id:m});}};






f.exports=h;}),null);

/** js/composerx/attachments/video/upload/OptimisticVideoPostUtils.js */





__d('OptimisticVideoPostUtils',['AsyncRequest'],(function a(b,c,d,e,f,g){



var h=

{shouldShowOptimisticPost:function i(j){

if(j.isScheduledPost||
j.isHiddenFromTimeline||
j.isSecret||
!j.isPageToPage&&!j.isToUserProfile||
j.isDraft)

return false;

return true;},


checkVideoStatus:function i
(j,
k,
l,
m){

new (c('AsyncRequest'))().
setURI('/ajax/video/encode/feedback/ping/').
setData({video_id:j}).
setHandler(function(n){
var o=n.getPayload();
if(n.error||o.error){
l(j,n);}else
if(o.is_ready){
k(j);}else 

m(j);}).


send();}};



f.exports=h;}),null);

/** js/logging/generated/ProfileVideoWWWFrontendActionTypedLogger.js */





__d('ProfileVideoWWWFrontendActionTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){
'use strict';



















function h(){
this.clear();}
h.prototype.





log=function(){
c('GeneratedLoggerUtils').log('logger:ProfileVideoWWWFrontendActionLoggerConfig',this.$ProfileVideoWWWFrontendActionTypedLogger_data,c('Banzai').BASIC);};
h.prototype.







logVital=function(){
c('GeneratedLoggerUtils').log('logger:ProfileVideoWWWFrontendActionLoggerConfig',this.$ProfileVideoWWWFrontendActionTypedLogger_data,c('Banzai').VITAL);};
h.prototype.




clear=function(){
this.$ProfileVideoWWWFrontendActionTypedLogger_data={};
return this;};
h.prototype.






updateData=function(j){








this.$ProfileVideoWWWFrontendActionTypedLogger_data=babelHelpers['extends']({},
this.$ProfileVideoWWWFrontendActionTypedLogger_data,
j);

return this;};
h.prototype.




setEvent=function(j){
this.$ProfileVideoWWWFrontendActionTypedLogger_data.event=j;
return this;};
h.prototype.




setSessionID=function(j){
this.$ProfileVideoWWWFrontendActionTypedLogger_data.session_id=j;
return this;};
h.prototype.




setUploadError=function(j){
this.$ProfileVideoWWWFrontendActionTypedLogger_data.upload_error=j;
return this;};






















var i=
{event:true,
session_id:true,
upload_error:true};


f.exports=h;}),null);

/** www/__virtual__/x/XVideoCaptionRenderGenerateHeaderAsyncController.js */



__d("XVideoCaptionRenderGenerateHeaderAsyncController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/videos\/captioneditor\/pagePosts\/",{video_id:{type:"Int"}});}),

null);

/** js/video/upload/captions/VideoPostGenerateCaptionHeader.js */







__d('VideoPostGenerateCaptionHeader',['csx','AsyncRequest','DOM','Parent','XVideoCaptionRenderGenerateHeaderAsyncController'],(function a(b,c,d,e,f,g,h){









var i=

{renderHeader:function j(k,l){
var m=
c('Parent').bySelector(k,"#pagelet_timeline_main_column");
if(!m)
return;

var n=c('DOM').scry
(m,
"._5sem")[
0];

if(n){
var o=c('DOM').create('div');
c('DOM').prependContent(n,o);



var p=
c('XVideoCaptionRenderGenerateHeaderAsyncController').getURIBuilder().
setInt('video_id',l).
getURI();

new (c('AsyncRequest'))().
setMethod('GET').
setRelativeTo(o).
setURI(p).
setReadOnly(true).
setAllowCrossPageTransition(true).
send();}}};




f.exports=i;}),null);

/** www/__virtual__/x/XProfileVideoRefreshController.js */



__d("XProfileVideoRefreshController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/profile\/picture\/refresh_profile_video\/",{video_id:{type:"FBID",required:true}});}),

null);

/** www/__virtual__/x/XVideoGenerateStoryController.js */



__d("XVideoGenerateStoryController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/video\/generate_story\/",{video_id:{type:"Int"},feed_location:{type:"Enum",enumType:0},timeline_identifier:{type:"String"}});}),

null);

/** www/__virtual__/x/XVideoLibraryNuxController.js */



__d("XVideoLibraryNuxController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/pages\/video_library\/nux\/",{action:{type:"Enum",required:true,enumType:1},nux_type:{type:"Enum",required:true,enumType:1}});}),

null);

/** www/__virtual__/x/XVideoOptimisticPostingController.js */



__d("XVideoOptimisticPostingController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/video\/optimistic_posting\/",{video_id:{type:"Int",required:true}});}),

null);

/** js/video/upload/OptimisticVideoPostList.react.js */





__d('OptimisticVideoPostList.react',['Arbiter','AsyncRequest','ChannelConstants','FBFeedLocations','OptimisticVideoPost.react','OptimisticVideoPostEvent','OptimisticVideoPostLogger','OptimisticVideoPostSource','OptimisticVideoPostUtils','PagesComposer','ProfileVideoWWWFrontendActionTypedLogger','React','ReactDOM','ReloadPage','Run','TimelineComposer','VideoLibraryNuxAction','VideoLibraryNuxType','VideoPostGenerateCaptionHeader','XProfileVideoRefreshController','XVideoGenerateStoryController','XVideoLibraryNuxController','XVideoOptimisticPostingController'],(function a(b,c,d,e,f,g){var h,i,

















j=b.URL||b.webkitURL||{},








k='video_encode',
l=7,
m=99.8,
n=5000,
o=2,
p=1000;h=babelHelpers.inherits






(q,c('React').Component);i=h&&h.prototype;function q(){var r,s;'use strict';for(var t=arguments.length,u=Array(t),v=0;v<t;v++)u[v]=arguments[v];return s=(r=i.constructor).call.apply(r,[this].concat(u)),this.




state=
{videoPostsMetadata:{},
videoPosts:[],
shouldRefreshAfterEncoding:false,
shouldShowVideoEditButton:true,
shouldShowVideoLibraryButton:this.props.shouldShowVideoLibraryButton,
shouldShowVideoLibraryNux:this.props.shouldShowVideoLibraryNux,
videoLibraryNuxImpression:0,
videoLibraryNuxImpressionLogged:false},this.








































initializePosts=function(){
var w=[],
x={};
for(var y=0;y<this.props.data.length;y++){

if(!c('OptimisticVideoPostUtils').shouldShowOptimisticPost
(this.props.data[y]))


break;


var z=babelHelpers['extends']({},
this.props.data[y],
{shouldRender:false});

z.progress=0;






z.progressWithoutFake=0;

var aa=z.videoID;
z.inactivityTimer=
this.startInactivityTimer(aa);

w.push(aa);
x[aa]=z;}


this.setState
({videoPostsMetadata:x,
videoPosts:w});}.

bind(this),this.

getChannelType=function(){
return c('ChannelConstants').getArbiterType(k);},
this.

updateVideoData=function(w){
var x={};
x[w.videoID]=babelHelpers['extends']({},
w,
{shouldRender:true,
fakeProgressTimer:
setInterval(function(){return this.fakeInitialProgress(w.videoID);}.bind(this),3000),
inactivityTimer:this.startInactivityTimer(w.videoID)});

x[w.videoID].progress=0;
x[w.videoID].progressWithoutFake=0;
var y=babelHelpers['extends']({},

this.state.videoPostsMetadata,
x),


z=[w.videoID].concat(this.state.videoPosts);
this.$OptimisticVideoPostList_refreshTimeout=w.refreshTimeout;
this.$OptimisticVideoPostList_composerID=w.originalComposerID;
this.$OptimisticVideoPostList_progressCompleteText=w.progressCompleteText;

this.setState
({shouldRefreshAfterEncoding:!!w.shouldRefreshAfterEncoding,
shouldShowVideoEditButton:w.shouldShowVideoEditButton!=null?
w.shouldShowVideoEditButton:
true,
shouldShowVideoLibraryButton:w.shouldShowVideoLibraryButton!=null?
w.shouldShowVideoLibraryButton:
this.state.shouldShowVideoLibraryButton,
videoPostsMetadata:y,
videoPosts:z});

this.logEvent(c('OptimisticVideoPostEvent').VIDEO_POST_ADDED,w.videoID);}.
bind(this),this.

onVideoPostSubmitted=function(w,x){
if(!c('OptimisticVideoPostUtils').shouldShowOptimisticPost(x))
return;


if(!x.isToUserProfile){
this.updateVideoData(x);
return;}




var y=c('XVideoOptimisticPostingController').
getURIBuilder().
setInt('video_id',x.videoID).
getURI();

new (c('AsyncRequest'))().
setURI(y).
setHandler
(function(z){
this.updateVideoData(babelHelpers['extends']({},
z.payload,
{videoFileUrl:x.videoFileURL}));}.

bind(this)).
send();}.
bind(this),this.

checkVideoStatus=function(w){
c('OptimisticVideoPostUtils').checkVideoStatus
(w,
this.onEncodeFinish,
this.onEncodeFinish,
this.restartInactivityTimer);}.

bind(this),this.

startInactivityTimer=function(w){
return setTimeout
(function(){return this.checkVideoStatus(w);}.bind(this),
n);}.

bind(this),this.

restartInactivityTimer=function(w){
this.stopInactivityTimer(w);

var x=babelHelpers['extends']({},this.state.videoPostsMetadata),
y=babelHelpers['extends']({},x[w]);
y.inactivityTimer=
this.startInactivityTimer(w);
x[w]=y;

this.setState
({videoPostsMetadata:x});}.

bind(this),this.

stopInactivityTimer=function(w){
clearTimeout(this.state.videoPostsMetadata[w].inactivityTimer);}.
bind(this),this.

logEvent=function(event,w){
c('OptimisticVideoPostLogger').logEvent
(event,
this.props.isPagePost?
c('OptimisticVideoPostSource').PAGES_TIMELINE:
c('OptimisticVideoPostSource').USERS_TIMELINE,
this.state.videoPosts.length,
this.props.targetID,
w);}.

bind(this),this.

fakeInitialProgress=function(w){
var x=this.state.videoPostsMetadata[w].progress;
if(x>l){
this.stopFakeInitialProgress(w);
return;}


var y=babelHelpers['extends']({},this.state.videoPostsMetadata),
z=babelHelpers['extends']({},y[w]);
z.progress+=1;
y[w]=z;

this.setState
({videoPostsMetadata:y});


this.restartInactivityTimer(w);}.
bind(this),this.

stopFakeInitialProgress=function(w){
if(!this.state.videoPostsMetadata[w].fakeProgressTimer)
return;

var x=babelHelpers['extends']({},this.state.videoPostsMetadata);
clearTimeout(x[w].fakeProgressTimer);
var y=babelHelpers['extends']({},x[w]);
y.fakeProgressTimer=null;
x[w]=y;

this.setState
({videoPostsMetadata:x});}.

bind(this),this.

onEncodeUpdate=function(w,x){
var y=String(x.obj.videoID);
if(!this.state.videoPostsMetadata[y])
return;


var z=babelHelpers['extends']({},this.state.videoPostsMetadata),
aa=babelHelpers['extends']({},z[y]),

ba=
{progress:aa.progress,
progressWithoutFake:aa.progressWithoutFake};


if(x.obj.extra&&
x.obj.extra.cached_progress&&
ba.progress<x.obj.extra.cached_progress){

ba.progress=x.obj.extra.cached_progress;
ba.progressWithoutFake=x.obj.extra.cached_progress;}


var ca=this.getOptimizedProgress
(x.obj.progress,
ba,
x.obj.stage,
x.obj.extra?x.obj.extra.is_sve:false,
x.obj.extra?x.obj.extra.max_percent:0);


if(ca.progress!==-1){
this.stopFakeInitialProgress(y);
aa.progress=ca.progress;
aa.shouldRender=true;}


aa.progressWithoutFake=
ca.progressWithoutFake;
z[y]=aa;

this.setState
({videoPostsMetadata:z});


if(this.$OptimisticVideoPostList_isEncodingFinished(x.obj.stage)){
this.onEncodeFinish(y);}else 

this.restartInactivityTimer(y);}.

bind(this),this.












































$OptimisticVideoPostList_isEncodingFinished=function(w){
return w==='finish';},
this.

onEncodeFinish=function(w){




if(!this.state.videoPostsMetadata[w])
return;


this.stopInactivityTimer(w);
var x=this.props.isPagePost?
c('FBFeedLocations').PAGE_TIMELINE:
c('FBFeedLocations').TIMELINE,

y=c('XVideoGenerateStoryController').getURIBuilder().
setInt('video_id',w).
setEnum('feed_location',x).
getURI();

new (c('AsyncRequest'))().
setURI(y).
setData
({video_id:w,
feed_location:x}).

setHandler(function(z){return this.handleRequest(z,w);}.bind(this)).
send();}.
bind(this),this.

refreshWhenDone=function(w){
var x=true,
y=Date.now(),
z=setInterval(function(){
if(x){
x=false;
var aa=c('XProfileVideoRefreshController').getURIBuilder().
setFBID('video_id',w).
getURI();
new (c('AsyncRequest'))().
setURI(aa).
setHandler(function(ba){
x=true;
if(ba.payload.profile_video_is_set){
clearInterval(z);
new (c('ProfileVideoWWWFrontendActionTypedLogger'))().
setEvent('profile_video_set').
setSessionID(this.$OptimisticVideoPostList_composerID).
log();
c('ReloadPage').now();}else
if(Date.now()-y>this.$OptimisticVideoPostList_refreshTimeout)
clearInterval(z);}.

bind(this)).
send();}}.

bind(this),p);}.
bind(this),this.




































removeOptimisticPost=function(w){
var x=babelHelpers['extends']({},this.state.videoPostsMetadata);
delete x[w];

var y=this.state.videoPosts;
y=this.removeVideoID(y,w);

this.setState
({videoPostsMetadata:x,
videoPosts:y});


this.logEvent(c('OptimisticVideoPostEvent').VIDEO_POST_REMOVED,w);}.
bind(this),this.

removeVideoID=function(w,x){
var y=w.indexOf(x);
w.splice(y,1);
return w;},
this.

onVideoLibraryNuxShown=function(){
var w=this.state.videoLibraryNuxImpression+1;
this.setState({videoLibraryNuxImpression:w});
if(w>=o)
this.setState({shouldShowVideoLibraryNux:false});}.

bind(this),this.

onVideoLibraryNuxDismiss=function(){
this.setState({shouldShowVideoLibraryNux:false});
var w=c('XVideoLibraryNuxController').getURIBuilder().
setEnum('action',c('VideoLibraryNuxAction').DISMISS).
setEnum('nux_type',c('VideoLibraryNuxType').OPTIMISTIC_POST_NUX).
getURI();
new (c('AsyncRequest'))().
setURI(w).
send();}.
bind(this),this.

renderOptimisticPost=function(w,x){
if(!w.shouldRender)
return c('React').createElement('div',{key:w.videoID});


var y;
if(w.videoThumbnail){
y=w.videoThumbnail;}else

if(j.createObjectURL&&
w&&
w.videoThumbnailBlob){

y=j.createObjectURL(w.videoThumbnailBlob);
this.setThumbnailURL(y,w.videoID);}else 

y='';



return (c('React').createElement(c('OptimisticVideoPost.react'),
{username:w.userDisplayName,
profilePicture:w.userProfilePictureURI,
metadataTitle:w.videoTitle,
metadataDescription:w.videoDescription,
thumbnail:y,
videoID:w.videoID,
videoFileUrl:w.videoFileUrl,
key:w.videoID,
progress:w.progress,
privacySetting:w.privacySetting,
isPagePost:this.props.isPagePost,
shouldShowVideoEditButton:this.state.shouldShowVideoEditButton,
shouldShowVideoEditDialog:this.props.shouldShowVideoEditDialog,
targetID:this.props.targetID,
progressCompleteText:this.$OptimisticVideoPostList_progressCompleteText,
shouldShowVideoLibraryButton:this.state.shouldShowVideoLibraryButton,
shouldShowVideoLibraryNux:x,
onVideoLibraryNuxDismiss:this.onVideoLibraryNuxDismiss,
onVideoLibraryNuxShown:this.onVideoLibraryNuxShown}));}.


bind(this),this.

setThumbnailURL=function(w,x){
var y=babelHelpers['extends']({},this.state.videoPostsMetadata);
y[x].videoThumbnail=w;

this.setState
({videoPostsMetadata:y});}.

bind(this),s;}q.prototype.componentDidUpdate=function(){'use strict';if(!this.state.videoLibraryNuxImpressionLogged&&this.state.videoPosts.length>0&&this.state.shouldShowVideoLibraryNux){var r=c('XVideoLibraryNuxController').getURIBuilder().setEnum('action',c('VideoLibraryNuxAction').IMPRESSION).setEnum('nux_type',c('VideoLibraryNuxType').OPTIMISTIC_POST_NUX).getURI();new (c('AsyncRequest'))().setURI(r).send();this.setState({videoLibraryNuxImpressionLogged:true});}};q.prototype.componentDidMount=function(){'use strict';var r=c('Arbiter').subscribe('videoUpload/complete',this.onVideoPostSubmitted),s=c('Arbiter').subscribe(this.getChannelType(),this.onEncodeUpdate);c('Run').onLeave(function(){return r.unsubscribe();});c('Run').onLeave(function(){return s.unsubscribe();});if(this.props.data.length>0)this.initializePosts();};q.prototype.getOptimizedProgress=function(r,s,t,u,v){'use strict';var w={progress:r,progressWithoutFake:s.progressWithoutFake},x=s.progress+r;if(!(r>0)||v>0&&x>v){w.progress=-1;return w;}x=Number(x.toFixed(1));if(t==='finish'||t==='notify'){x=100;}else if(x>=100)x=s.progress<100?s.progress:m;w.progress=x;w.progressWithoutFake=x;return w;};q.prototype.handleRequest=function(r,s){'use strict';var t=r.payload;if(t){if(this.props.isPagePost){c('PagesComposer').renderStory(c('ReactDOM').findDOMNode(this),t);if(this.props.shouldShowVideoCaptionHeader)c('VideoPostGenerateCaptionHeader').renderHeader(c('ReactDOM').findDOMNode(this),s);}else c('TimelineComposer').renderCapsuleBasedStory(c('ReactDOM').findDOMNode(this),t);}else this.logEvent(c('OptimisticVideoPostEvent').POST_REMOVED_WITHOUT_REPLACEMENT,s);if(this.state.shouldRefreshAfterEncoding){this.refreshWhenDone(s);}else this.removeOptimisticPost(s);};q.prototype.

render=function(){'use strict';
var r=this.state.videoPostsMetadata,


s=this.state.videoPosts.map
(function(t,u){
return (this.renderOptimisticPost
(r[t],
u===0&&this.state.shouldShowVideoLibraryNux));}.bind(this));




return (c('React').createElement('ul',null,
s));};





f.exports=q;}),null);

/** js/composerx/attachments/video/OptimisticVideoPostController.js */





__d('OptimisticVideoPostController',['React','ReactDOM','CSS','OptimisticVideoPostList.react'],(function a(b,c,d,e,f,g){







var h=


{init:function i
(j,
k,
l,
m,
n,
o,
p,
q){

this._postsContainer=j;

c('ReactDOM').render
(c('React').createElement(c('OptimisticVideoPostList.react'),
{data:k,
targetID:l,
isPagePost:m,
shouldShowVideoEditDialog:n,
shouldShowVideoLibraryButton:o,
shouldShowVideoLibraryNux:p,
shouldShowVideoCaptionHeader:q}),

this._postsContainer);


c('CSS').show(this._postsContainer);}};




f.exports=h;}),null);

/** js/profile/timeline/TimelineContextItemLogger.js */





__d('TimelineContextItemLogger',['cx','BanzaiLogger','Event','FBJSON','Parent','Run','tidyEvent'],(function a(b,c,d,e,f,g,h){










var i='MTimelineXContextItemsLoggerConfig',
j='impression',
k='click',
l='context_item_url',
m='event',

n="_md0",

o=[];

function p(r,s,t){
var u=c('FBJSON').parse(r.getAttribute('data-store'));
u[m]=s;
if(t)
u[l]=t;

c('BanzaiLogger').log(i,u);}


var q=


{logWhenVisible:function r(s){
if(!o.length)
c('Run').onLeave(function(){
o=[];});


o.push(s);},



logWhenClicked:function r(s){
c('tidyEvent')(c('Event').listen(s,'click',function(t){
var u=t.getTarget();
if(u.nodeName!=='A')
return;


var v=c('Parent').byClass(u,n);
v&&p(v,k,u.href);}));},




listenToExpand:function r(s){
c('tidyEvent')(s.addListener('expanded',function(){
while(o.length)
p(o.pop(),j);}));}};






f.exports=q;}),null);

/** js/profile/timeline/modules/TimelineSection.js */






__d('TimelineSection',['Arbiter','CSS','DOM','Parent','ScrollingPager','TimelineConstants','TimelineLegacySections','TimelineScrubberKey','UIPagelet'],(function a(b,c,d,e,f,g){




























function h
(i,
j,
k,
l,
m){
'use strict';
this.$TimelineSection_node=i;
this.$TimelineSection_loaded=l;
this.$TimelineSection_scrubberKey=j;
this.$TimelineSection_parentKey=null;
this.$TimelineSection_subSections=null;
this.$TimelineSection_canScrollLoad=true;
this.$TimelineSection_canContentScrollLoad=true;
this.$TimelineSection_canUnload=j!==c('TimelineScrubberKey').RECENT_ACTIVITY;
this.$TimelineSection_historicUnitCount=m;
this.$TimelineSection_pageletLoadData=k;
this.$TimelineSection_expandPageletLoadData={};
this.$TimelineSection_rightColumnFinished=false;
this.$TimelineSection_pendingDisplayCallbacks=[];
this.$TimelineSection_hidden=false;}
h.prototype.

load=
function(i,
j){
'use strict';
if(this.$TimelineSection_loaded){
this.activateContentScrollLoad();
return;}


var k=this.$TimelineSection_pageletLoadData;
c('Arbiter').inform(c('TimelineConstants').SECTION_LOADING,
{data:k,
scrubberKey:this.$TimelineSection_scrubberKey});

this.$TimelineSection_loaded=true;
c('CSS').removeClass(this.$TimelineSection_node,'fbTimelineTimePeriodUnexpanded');
c('CSS').removeClass(this.$TimelineSection_node,'fbTimelineTimePeriodSuppressed');

var l=c('TimelineLegacySections').shouldForceNoFriendActivity();

k=babelHelpers['extends']({},
k,
{highlight_unit_data:i,
parent_key:this.$TimelineSection_parentKey,
force_no_friend_activity:l});


c('CSS').addClass(this.$TimelineSection_node,'fbTimelineSectionLoading');


this.$TimelineSection_canScrollLoad=false;
this.activateContentScrollLoad();

if(j){



this.$TimelineSection_node.style.minHeight=window.innerHeight+'px';

c('Arbiter').subscribeOnce
(c('TimelineConstants').SECTION_FULLY_LOADED,
function(m,n){
if(n.scrubberKey===this.$TimelineSection_scrubberKey){
this.$TimelineSection_node.style.minHeight='';
c('TimelineLegacySections').destroyOnVisible(this.$TimelineSection_scrubberKey);}}.

bind(this));}



c('TimelineLegacySections').addLoadPagelet
(this.$TimelineSection_scrubberKey,
c('UIPagelet').loadFromEndpoint
('ProfileTimelineSectionPagelet',
this.$TimelineSection_node.id,
k,

{usePipe:true,
jsNonblock:true,
constHeight:true,
append:false}));




c('TimelineLegacySections').collapsePlaceHolderHeaders();};
h.prototype.

preload=function(){'use strict';
c('CSS').addClass(this.$TimelineSection_node,'fbTimelineTimePeriodSuppressed');
c('CSS').removeClass(this.$TimelineSection_node,'fbTimelineTimePeriodUnexpanded');
var i=c('DOM').find(this.$TimelineSection_node,'span.sectionLabel');
if(i.getAttribute('data-original-label')){




c('DOM').setContent(i,i.getAttribute('data-original-label'));
i.removeAttribute('data-original-label');}};


h.prototype.

unload=function(){'use strict';
if(!this.$TimelineSection_loaded||!this.$TimelineSection_canUnload)
return;


this.$TimelineSection_loaded=false;
c('TimelineLegacySections').cancelLoadPagelet(this.$TimelineSection_scrubberKey);
c('CSS').addClass(this.$TimelineSection_node,'fbTimelineTimePeriodUnexpanded');
c('CSS').removeClass(this.$TimelineSection_node,'fbTimelineTimePeriodSuppressed');
if(this.$TimelineSection_node.nextSibling&&
c('CSS').hasClass(this.$TimelineSection_node.nextSibling,'fbTimelineSection')){
c('DOM').setContent(this.$TimelineSection_node,this.$TimelineSection_node.nextSibling);
c('CSS').show(this.$TimelineSection_node.firstChild);}else 


c('DOM').empty(this.$TimelineSection_node);


this.deactivateScrollLoad();};
h.prototype.




canScrollLoad=function(){'use strict';
return this.$TimelineSection_canScrollLoad;};
h.prototype.

activateScrollLoad=function(){'use strict';
this.$TimelineSection_canScrollLoad=true;
c('CSS').removeClass(this.$TimelineSection_node,'fbTimelineTimePeriodSuppressed');
c('CSS').addClass(this.$TimelineSection_node,'fbTimelineTimePeriodUnexpanded');
var i=c('TimelineLegacySections').getOnVisible(this.$TimelineSection_scrubberKey);
if(i)
i.reset();

return this;};
h.prototype.

deactivateScrollLoad=function(){'use strict';
if(!this.$TimelineSection_loaded){
this.$TimelineSection_canScrollLoad=false;
c('CSS').removeClass(this.$TimelineSection_node,'fbTimelineTimePeriodUnexpanded');
c('CSS').addClass(this.$TimelineSection_node,'fbTimelineTimePeriodSuppressed');
var i=c('TimelineLegacySections').getOnVisible(this.$TimelineSection_scrubberKey);
if(i)
i.remove();}




c('DOM').scry(this.$TimelineSection_node,'.fbTimelineSectionExpandPager').forEach(function(j){
var k=c('ScrollingPager').getInstance(j.id);
k&&k.removeOnVisible();
var l=c('Parent').byClass(j,'stat_elem');
if(l)
c('CSS').removeClass(l,'async_saving');});


return this;};
h.prototype.




canContentScrollLoad=function(){'use strict';
return this.$TimelineSection_canContentScrollLoad;};
h.prototype.

activateContentScrollLoad=function(){'use strict';
this.$TimelineSection_canContentScrollLoad=true;
return this;};
h.prototype.

deactivateContentScrollLoad=function(){'use strict';
this.$TimelineSection_canContentScrollLoad=false;
return this;};
h.prototype.

getNode=function(){'use strict';
return this.$TimelineSection_node;};
h.prototype.

getScrubberKey=function(){'use strict';
return this.$TimelineSection_scrubberKey;};
h.prototype.

getParentKey=function(){'use strict';
return this.$TimelineSection_parentKey;};
h.prototype.

setParentKey=function(i){'use strict';
this.$TimelineSection_parentKey=i;
return this;};
h.prototype.

addSubSection=function(i,j){'use strict';
if(!Array.isArray(this.$TimelineSection_subSections))
this.$TimelineSection_subSections=[];



if(Array.isArray(this.$TimelineSection_subSections))
this.$TimelineSection_subSections[i]=j;

return this;};
h.prototype.

getSubSections=function(){'use strict';
return this.$TimelineSection_subSections;};
h.prototype.

isLoaded=function(){'use strict';
return this.$TimelineSection_loaded;};
h.prototype.

isRightColumnFinished=function(){'use strict';
return this.$TimelineSection_rightColumnFinished;};
h.prototype.

setRightColumnFinished=function(){'use strict';
this.$TimelineSection_rightColumnFinished=true;
return this;};
h.prototype.

getHistoricUnitCount=function(){'use strict';
return this.$TimelineSection_historicUnitCount;};
h.prototype.

expand=function(i){'use strict';
if(!this.$TimelineSection_loaded)
return this;


var j=c('DOM').find(this.$TimelineSection_node,'.fbTimelineSectionExpander');
c('CSS').addClass(j.firstChild,'async_saving');
i&&c('CSS').addClass(i,'async_saving');
c('Arbiter').inform(c('TimelineConstants').SECTION_EXPAND,this.$TimelineSection_scrubberKey);

c('DOM').scry(this.$TimelineSection_node,'.fbTimelineCapsule').forEach(c('DOM').remove);
this.$TimelineSection_expandPageletLoadData.new_expand=true;

c('TimelineLegacySections').cancelLoadPagelet(this.$TimelineSection_scrubberKey);

c('TimelineLegacySections').addLoadPagelet
(this.$TimelineSection_scrubberKey,
c('UIPagelet').loadFromEndpoint
('ProfileTimelineSectionPagelet',
j.id,
this.$TimelineSection_expandPageletLoadData,

{usePipe:true,
jsNonblock:true,
constHeight:true}));




return this;};
h.prototype.

isPermalinkPeriod=function(){'use strict';
return !!this.$TimelineSection_pageletLoadData.is_permalink_period;};
h.prototype.

isHidden=function(){'use strict';
return this.$TimelineSection_hidden;};
h.prototype.

hide=function(){'use strict';
this.$TimelineSection_hidden=true;
c('CSS').hide(c('DOM').find(this.$TimelineSection_node,'.fbTimelineSection'));
return this;};
h.prototype.

isHiddenFromView=function(){'use strict';

return (!this.$TimelineSection_loaded||
this.$TimelineSection_hidden||
c('CSS').hasClass(this.$TimelineSection_node,'fbTimelineTimePeriodUnexpanded'));};

h.prototype.

hasPendingCallbacks=function(){'use strict';
return this.$TimelineSection_pendingDisplayCallbacks.length>0;};
h.prototype.

queueDisplayCallback=function(i,j){'use strict';
this.$TimelineSection_pendingDisplayCallbacks[i]=j;
return this;};
h.prototype.

runPendingDisplayCallbacks=function(){'use strict';
while(this.hasPendingCallbacks()){
var i=this.$TimelineSection_pendingDisplayCallbacks.shift();
if(i)
i();}



return this;};



f.exports=h;}),null);

/** js/profile/timeline/modules/TimelineContentLoader.js */




__d('TimelineContentLoader',['csx','$','Arbiter','CSS','DOM','DOMScroll','Event','OnVisible','Parent','ScrollingPager','TimelineComponentKeys','TimelineConstants','TimelineController','TimelineDOMID','TimelineLegacySections','TimelineScrubberKey','TimelineSection','TimelineSmartInsert','Vector','arrayContains','debounce','ge','queryThenMutateDOM','setImmediate'],(function a(b,c,d,e,f,g,h){



























var i=false,
j=null,
k={},

l={},
m=[],
n={},
o=null,
p=null,

q=80,
r=250,
s=500;

function t(){
if(i)
return;


c('TimelineController').register
(c('TimelineComponentKeys').CONTENT,
z);


p=c('Arbiter').subscribe
(c('TimelineConstants').SECTION_EXPAND,
function(aa,ba){
z.navigateToSection(ba);});



i=true;}



var u=
c('debounce')
(function(aa,ba,ca){
var da=c('TimelineLegacySections').
get(aa).
getHistoricUnitCount();

ba-=da;
ca-=1;

if(da==-1||ca<=0||ba<0)
return;

var ea=
z.getNextSectionKey(aa);
if(ea){
c('TimelineLegacySections').get(ea).load();
u(ea,ba,
ca);}},


s);










function v(aa,ba){
if(!ba)
ba=0;


if(ba<q&&!aa())
setTimeout
(v.bind(null,aa,ba+1),
r);}




function w(aa){
v(function(){
if(aa===c('TimelineScrubberKey').WAY_BACK)
return true;


var ba=z.getNextSectionKey(aa);
if(ba){
y(ba);
return true;}


return false;});}



function x(aa,ba,ca){
v(function(){
if(ba===c('TimelineScrubberKey').WAY_BACK)
return true;


var da=z.getNextSectionKey(ba);
if(da){
c('TimelineLegacySections').addOnVisible
(da,
new (c('OnVisible'))
(aa,
y.bind(null,da),
false,
ca||1000));


return true;}


return false;});}



function y(aa){
var ba=c('TimelineLegacySections').get(aa);
if(ba&&ba.canScrollLoad()){
ba.load();

if(o)
u
(aa,
o.required_units,
o.max_parallelism);}}





var z=
{CURRENT_SECTION_OFFSET:150,


registerTimePeriod:function aa
(ba,
ca,
da,
ea,
fa,
ga,
ha){

t();

if(c('arrayContains')(m,ca))
return;

if(l)
Object.assign(da||{},l);

var ia=new (c('TimelineSection'))
(ba,
ca,
da,
ea,
ha);

if(!fa){
c('TimelineLegacySections').setMainSectionOrder(ca,ga);
k[ca]=true;}else{

ia.setParentKey(fa);
var ja=c('TimelineLegacySections').get(fa);
if(ja)
ja.addSubSection(ga,ia);}



c('TimelineLegacySections').set(ca,ia);
z.checkCurrentSectionChange();

c('Arbiter').inform(c('TimelineConstants').SECTION_REGISTERED,
{scrubberKey:ca,
section:ia});},



reset:function aa(){
c('TimelineLegacySections').removeAllOnVisibles();
c('TimelineLegacySections').cancelLoadPagelets();

for(var ba in n){
n[ba].unsubscribe();
delete n[ba];}


p&&p.unsubscribe();
p=null;

c('TimelineLegacySections').removeAll();
j=null;
k={};
l={};
m=[];

i=false;},


checkCurrentSectionChange:function aa(){
var ba=null;
c('queryThenMutateDOM')
(function(){
ba=z.getCurrentSection();},

function(){
var ca=j&&j.getScrubberKey();


if(ba&&
ba.getScrubberKey()!==ca&&
!ba.isPermalinkPeriod()){

j=ba;
var da=ba.getScrubberKey(),
ea=ba.getParentKey();
if(!ea){
ea=da;
da=null;}

c('TimelineController').sectionHasChanged(ea,da);}});},






setParallelLoadConfig:function aa(ba){
o=ba;},


getCurrentSection:function aa(){
var ba={},
ca=c('TimelineLegacySections').getAll();
for(var da in ca){
var ea=ca[da];
if(!ea||ea.isHiddenFromView())

continue;

var fa=c('Vector').getElementPosition(ea.getNode(),'viewport').y;
if(ea.getScrubberKey()===c('TimelineScrubberKey').RECENT_ACTIVITY)




fa--;

if(fa<z.CURRENT_SECTION_OFFSET)
ba[fa]=ea;}


var ga=Math.max.apply
(null,
Object.keys(ba)),

ha=c('TimelineLegacySections').getMainSectionOrder(),
ia=ga==-Infinity;
if(!ia){
return ba[ga];}else
if(ha[0])
return c('TimelineLegacySections').get(ha[0]);

return null;},


getLastVisibleSection:function aa(){
var ba=c('TimelineLegacySections').getMainSectionOrder();
for(var ca=ba.length-1;ca>=0;ca--){
var da=c('TimelineLegacySections').get(ba[ca]);
if(da&&!da.isHiddenFromView())
return da;}



return null;},


getRecentActivitySection:function aa(){
return c('TimelineLegacySections').get(c('TimelineScrubberKey').RECENT_ACTIVITY);},


capsuleForCurrentSection:function aa(){
var ba=z.getCurrentSection();
return ba&&
c('DOM').scry(ba.getNode(),'.fbTimelineCapsule')[0];},



enableScrollLoad:function aa(ba,ca,da,ea){
ba=c('$')(ba);



var fa=
c('Parent').byClass(ba,'fbTimelineSection')||
ba.parentNode,

ga=fa&&c('DOM').scry(fa,'.fbTimelineCapsule')[0];
if(!ga)
return;


if(da===null){
x(ba,ca,ea);}else 

c('TimelineController').runOnceWhenSectionFullyLoaded
(x.bind(null,ba,ca,ea),
ca,
da);},





getNextSectionKey:function aa(ba){
var ca=c('TimelineLegacySections').getMainSectionOrder();
for(var da=0;da<ca.length-1;da++)
if(ca[da]==ba){
while(da<ca.length-1&&!ca[da+1])

da++;

return ca[da+1];}


var ea=c('TimelineLegacySections').get(ba);
if(!ea||!ea.getParentKey())
return;

var fa=c('TimelineLegacySections').get(ea.getParentKey());
if(!fa)
return;

var ga=fa.getSubSections(),
ha=ga[ga.length-1];
if(ea.getScrubberKey()===ha.getScrubberKey())
return z.getNextSectionKey(ea.getParentKey());


for(var ia=0;ia<ga.length-1;ia++)
if(ga[ia].getScrubberKey()==ba)
return ga[ia+1].getScrubberKey();},







hideSection:function aa(ba){
var ca=c('TimelineLegacySections').get(ba);
if(ca)
ca.hide();


var da=c('TimelineController').getCurrentScrubber();
if(da){
var ea=null;
if(!k[ba]){
ea=c('TimelineController').getCurrentScrubber().getSubnav
(ca.getParentKey(),
ba);}else 


ea=
c('TimelineController').getCurrentScrubber().getNav(ba);

ea&&c('CSS').hide(ea);}


var fa=c('TimelineController').getCurrentStickyHeaderNav();
fa&&fa.removeTimePeriod(ba);},



loadSectionOnClick:function aa(ba,ca){
c('Event').listen(ba,'click',function(da){
da.prevent();
c('TimelineLegacySections').get(ca).load();});},



removeSection:function aa(ba){
c('TimelineLegacySections').removeOnVisible(ba);
c('TimelineLegacySections').remove(ba);

delete k[ba];

var ca=c('TimelineController').getCurrentStickyHeaderNav();
ca&&ca.removeTimePeriod(ba);

m.push(ba);},


navigateToSection:function aa(ba,ca,da){
ca=!!ca;
var ea=ba,
fa=c('TimelineLegacySections').get(ba);
if(!fa)

return;


if(!fa.isLoaded()){



c('TimelineSmartInsert').enable();


c('DOM').scry
(c('$')(c('TimelineDOMID').TAB_CONTENT),
'.fbTimelineShowOlderSections').
forEach(c('DOM').remove);}



if(!k[ba]){


if(!fa.isLoaded())
fa.getNode().style.minHeight=
c('Vector').getViewportDimensions().y+'px';

var ga=c('Arbiter').subscribe
(c('TimelineConstants').SECTION_FULLY_LOADED,
function(qa,ra){
if(ra.scrubberKey===ba){
fa.getNode().style.minHeight='';
ga.unsubscribe();}});




ea=fa.getParentKey();
var ha=c('TimelineLegacySections').get(ea);
if(ha){
var ia=ha.getNode();

if(!c('CSS').hasClass(ia,'fbTimelineSectionExpanded')){
c('DOMScroll').scrollTo(ia,0);
c('CSS').addClass(ia,'fbTimelineSectionExpanded');
c('DOM').scry(ia,'.fbTimelineCapsule').forEach(c('DOM').remove);
c('DOM').scry(ia,'div.fbTimelineSectionExpandPager').
forEach(c('DOM').remove);
c('DOM').scry(ia,'div.fbTimelineContentHeader').
forEach(c('DOM').remove);
c('DOM').scry
(ia,
"._5vf").
forEach(function(qa){
if(!qa.getAttribute('data-subsection'))
c('DOM').remove(qa);});}}






var ja=z.getNextSectionKey(ea),
ka=c('TimelineLegacySections').getOnVisible(ja);

if(ka)
ka.setBuffer(0);}



var la=c('TimelineLegacySections').getMainSectionOrder();
for(var ma=0;ma<la.length;ma++){




var na=la[ma];
if(!na)
continue;

if(na==ea)
break;


c('TimelineLegacySections').get(na).
deactivateScrollLoad().
deactivateContentScrollLoad();}


fa.load(da,true);
c('TimelineLegacySections').collapsePlaceHolderHeaders();

var oa=c('Vector').getScrollPosition().x,
pa=c('Vector').getElementPosition(fa.getNode()).y;

if(!ca)
c('DOMScroll').scrollTo
(new (c('Vector'))(oa,pa-c('TimelineConstants').SCROLL_TO_OFFSET,'document'),
true,
false,
false,
0,



function(){

var qa=c('Vector').getElementPosition(fa.getNode()).y;
c('DOMScroll').scrollTo
(new (c('Vector'))(oa,qa-c('TimelineConstants').SCROLL_TO_OFFSET,'document'),
false);

if(ba!==c('TimelineScrubberKey').RECENT_ACTIVITY){

var ra=c('DOM').scry(fa.getNode(),'h3.uiHeaderTitle')[0];
if(ra){
ra.tabIndex=0;
ra.focus();}}});},







appendContentAfterLoad:function aa(ba,ca,da){
c('TimelineController').runOnceWhenSectionFullyLoaded
(c('DOM').appendContent.bind(null,c('$')(ba),ca),
da,
'0');},




markSectionAsLoaded:function aa(ba,ca,da){
c('TimelineController').runOnceWhenSectionFullyLoaded
(function(){
c('ge')(ba)&&
c('CSS').removeClass(c('$')(ba).parentNode,'fbTimelineSectionLoading');},

ca,
da);},



suppressSectionsAbove:function aa(ba){
var ca,
da,
ea=c('TimelineLegacySections').getMainSectionOrder();
for(var fa=0;fa<ea.length;fa++){
var ga=ea[fa];
if(!ga)
continue;

ca=c('TimelineLegacySections').get(ga).getNode();
da=null;

if(Array.from(ba.parentNode.children).indexOf(ba)<=
Array.from
(ca.parentNode.children).indexOf(ca)){
da=ga;
break;}

c('TimelineLegacySections').get(ga).deactivateScrollLoad();}

if(da)

z.navigateToSection(da,true);},




removeDupes:function aa(ba){
var ca=c('ge')(ba);
if(!ca)
return;

var da=c('DOM').scry(ca,'li.fbTimelineUnit'),
ea={};
for(var fa=0;fa<da.length;fa++){
var ga=da[fa];
if(ga.id&&ga.id.startsWith('tl_unit_')){
var ha=ga.id.substring(8,ga.id.length),
ia=c('DOM').scry(ga,'div.timelineUnitContainer');
if(ia.length>0)
ha=ha+ia[0].getAttribute('data-time');

if(Object.prototype.hasOwnProperty.call(ea,ha)){


ga.id='dupe_unit_'+Math.random();
ga.className="hidden_elem";}else 

ea[ha]=1;}}},





removeLoadingState:function aa(ba){
c('ge')(ba)&&
c('CSS').removeClass(c('$')(ba),'fbTimelineSectionLoading');},



updatePagerAfterLoad:function aa(ba,ca,da,ea,fa){





var ga=c('ScrollingPager').getInstance(ba.firstChild.id);
if(!ga){
n[ba.firstChild.id]=c('Arbiter').subscribe
(c('ScrollingPager').REGISTERED,
function(ia,ja){
n[ba.firstChild.id].unsubscribe();
delete n[ba.firstChild.id];
if(ja.id===ba.firstChild.id)
z.updatePagerAfterLoad
(ba,ca,da,ea,fa);});




return;}


var ha=ga.getHandler();
ga.setHandler(function(ia){
c('CSS').addClass(ba,'async_saving');
ha(ia);});


c('TimelineController').runOnceWhenSectionFullyLoaded
(function(){
c('CSS').removeClass(ba,'fbTimelineHiddenPager');
ga.checkBuffer();},

da,
ea);


if(fa)
c('TimelineController').runOnceWhenSectionFullyLoaded
(c('TimelineController').adjustScrollingPagerBuffer.bind
(null,
ba.firstChild.id,
da),

da,
ea);},




repositionDialog:function aa(ba){
c('Arbiter').subscribe
(c('TimelineConstants').SECTION_LOADED,
function(){
ba.updatePosition();});},





rightColumnFinished:function aa(ba){
var ca=c('TimelineLegacySections').get(ba);
ca.setRightColumnFinished();},



loadNextSection:function aa(ba){
w(ba);}};



f.exports=z;}),null);

/** js/profile/timeline/modules/TimelineLogging.js */




__d('TimelineLogging',['TimelineComponentKeys','TimelineController','reportData'],(function a(b,c,d,e,f,g){






var h=false,
i=0,
j=null,
k=null,

l=

{init:function m(n){
if(h)
return;


i=n;

c('TimelineController').register
(c('TimelineComponentKeys').LOGGING,
this);},



reset:function m(){
h=false;
i=0;
j=null;},


log:function m(n,o){
o.profile_id=i;
c('reportData')(n,{gt:o});},


logSectionChange:function m(n,o){
var p={timeline_section_change:1,key:n};
if(j&&n==j){
p.timeline_scrubber=1;
j=null;}

if(k&&n==k){
p.sticky_header_nav=1;
k=null;}

l.log
('timeline',
p);},



logScrubberClick:function m(n){
j=n;},


logStickyHeaderNavClick:function m(n){
k=n;}};




f.exports=l;}),null);
