if (self.CavalryLogger) { CavalryLogger.start_js(["CPppN"]); }

/** __static_js_modules__/groupsellproductdetailsevent.js */




__d("GroupSellProductDetailsEvent",[],(function a(b,c,d,e,f,g){

f.exports={PHOTO_CLICK:"photo_click",SHOW_DIALOG:"show_dialog",HIDE_DIALOG:"hide_dialog",PROFILE_LINK_CLICK:"profile_link_click",GROUP_LINK_CLICK:"group_link_click",PERMALINK_CLICK:"permalink_click",ASYNC_DATA_REQUEST_FAIL:"async_data_request_fail",DIALOG_INSTANCE_NULL:"dialog_instance_null",MESSAGE_SELLER_CLICK:"message_seller_click",UFI_CLICK:"ufi_click",MARK_AS_SOLD_CLICK:"mark_as_sold_click",FAILED_SALE_POST_GEN:"failed_sale_post_gen",PHOTO_SWIPE:"photo_swipe",GROUP_POST_LIKE:"group_post_like",GROUP_POST_COMMENT:"group_post_comment",SUGGESTED_ITEM_VPV:"suggested_item_vpv",SUGGESTED_ITEM_CLICK:"suggested_item_click",GROUP_POST_COMMENT_ERROR:"group_post_comment_error",GROUP_POST_COMMENT_TEXT_ENTERED:"group_post_comment_text_entered",GROUP_POST_COMMENT_INPUT_FOCUS:"group_post_comment_input_focus",GROUP_POST_COMMENT_WITH_PHOTO:"group_post_comment_with_photo",GROUP_POST_COMMENT_INPUT_PREDICTIVE_TEXT_PRESS:"group_post_comment_input_predictive_text_press",GROUP_POST_SHARE_CLICK:"group_post_share_click",PDP_INITIAL_LOAD:"pdp_initial_load",PDP_NETWORK_FAILURE:"pdp_network_failure",PDP_RECOMMENDED_ITEMS_GRID_SEE_ALL_PRESS:"pdp_recommended_items_grid_see_all_press",PDP_RECOMMENDED_ITEMS_GRID_ITEM_PRESS:"pdp_recommended_items_grid_item_press",PDP_RECOMMENDED_ITEMS_HSCROLL_SEE_ALL_PRESS:"pdp_recommended_items_hscroll_see_all_press",PDP_RECOMMENDED_ITEMS_HSCROLL_ITEM_PRESS:"pdp_recommended_items_hscroll_item_press"};}),

null);

/** __static_js_modules__/groupsellproductdetailsimageaspect.js */




__d("GroupSellProductDetailsImageAspect",[],(function a(b,c,d,e,f,g){

f.exports={HORIZONTAL:"horizontal",VERTICAL:"vertical",WIDE_HORIZONTAL:"wide_horizontal",WIDE_VERTICAL:"wide_vertical",SQUARE:"square",HEIGHT_BOUND:"height_bound"};}),

null);

/** js/components/UFI/UFIFeedbackContext.react.js */





__d('UFIFeedbackContext.react',['React','UFICentralUpdates','UFIFeedbackTargets'],(function a(b,c,d,e,f,g){

'use strict';var h,i,








j=c('React').PropTypes;h=babelHelpers.inherits














(k,c('React').Component);i=h&&h.prototype;function k(){var l,m;for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.
$UFIFeedbackContext_feedbackTargetSubscriberID=null,this.











state=
{contextArgs:this.props.contextArgs,
feedback:null},m;}k.prototype.


loadFeedbackTarget=function(l){
if(!this.$UFIFeedbackContext_feedbackTargetSubscriberID)
this.$UFIFeedbackContext_feedbackTargetSubscriberID=c('UFIFeedbackTargets').getFeedbackTarget
(l,
function(m){
this.$UFIFeedbackContext_feedbackTargetSubscriberID=null;
this.setState({feedback:m});}.
bind(this));};


k.prototype.

componentDidMount=function(){
this.loadFeedbackTarget(this.state.contextArgs.ftentidentifier);

this.ufiCentralUpdatesSubscriptions=
[c('UFICentralUpdates').subscribe('feedback-updated',function(l,m){
var n=this.state.contextArgs;
if(n.ftentidentifier in m.updates)
this.loadFeedbackTarget(n.ftentidentifier);}.

bind(this))];};

k.prototype.

componentWillUnmount=function(){
this.ufiCentralUpdatesSubscriptions.forEach
(function(l){return l&&c('UFICentralUpdates').unsubscribe(l);});

if(this.$UFIFeedbackContext_feedbackTargetSubscriberID)
c('UFIFeedbackTargets').unsubscribe(this.$UFIFeedbackContext_feedbackTargetSubscriberID);};

k.prototype.

render=function(){
if(this.state.feedback)
return this.props.render
(this.state.contextArgs,
this.state.feedback);


return null;};
k.propTypes={contextArgs:j.object.isRequired,render:j.func.isRequired};k.contextTypes={stores:j.object};


f.exports=k;}),null);

/** js/clientufi/controllers/UFIAddCommentController.js */







__d('UFIAddCommentController',['Parent','React','ReactDOM','UFIAddComment.react','UFIAddCommentActionType','UFICallbackStore','UFICommentEditIDStore','UFIDispatcher','UFIDispatcherContext.react','UFIFeedbackContext.react','UFINewCommentNotifier'],(function a(b,c,d,e,f,g){

'use strict';h.



























factory=
function(j,
k){

k.rootid=j.id;

return new h
(j,
Object.freeze(k));};



function h
(j,
k){
i.call(this);
this.$UFIAddCommentController_root=j;
this.$UFIAddCommentController_contextArgs=k;

this.$UFIAddCommentController_dispatcher=new (c('UFIDispatcher'))();
this.$UFIAddCommentController_stores=
{UFICallbackStore:new (c('UFICallbackStore'))(this.$UFIAddCommentController_dispatcher)};


this.$UFIAddCommentController_stores.UFICallbackStore.on
(c('UFIAddCommentActionType').SUBMIT_NEW,
function(l){return c('UFINewCommentNotifier').onNewComment
(c('Parent').byTag(j,'form'),
this.$UFIAddCommentController_contextArgs,
l.comment,
l.target,
l.replyCommentID,
l.timestamp);}.bind(this));





this.$UFIAddCommentController_editcommentid=c('UFICommentEditIDStore').getForInstance
(this.$UFIAddCommentController_contextArgs.instanceid);

c('UFICommentEditIDStore').addListener(function(){
var l=c('UFICommentEditIDStore').getForInstance
(this.$UFIAddCommentController_contextArgs.instanceid);

if(l!=this.$UFIAddCommentController_editcommentid){
this.$UFIAddCommentController_editcommentid=l;
this.render();}}.

bind(this));

this.render();}
h.prototype.



render=function(){
var j=
c('React').createElement(c('UFIDispatcherContext.react'),
{dispatcher:this.$UFIAddCommentController_dispatcher,
stores:this.$UFIAddCommentController_stores},
c('React').createElement(c('UFIFeedbackContext.react'),
{contextArgs:this.$UFIAddCommentController_contextArgs,
render:this.renderAddComment}));






c('ReactDOM').render(j,this.$UFIAddCommentController_root);};
h.prototype.


















































disable=function(){
this.$UFIAddCommentController_stores.UFICallbackStore.remove();};
var i=function j(){this.renderAddComment=function(k,l){if(this.$UFIAddCommentController_editcommentid!==null||!l||!l.cancomment||!l.actorforpost)return null;return c('React').createElement(c('UFIAddComment.react'),{viewerActorID:l.actorforpost,replyCommentID:null,targetID:l.ownerid,initialData:null,ref:null,withoutSeparator:null,editingComment:{},isEditing:false,mentionsDataSource:l.mentionsdatasource,showSendOnEnterTip:l.showsendonentertip,multiCompanyGroupsCount:l.multicompanygroupscount,allowPhotoAttachments:l.allowphotoattachments&&!k.islivestreaming,allowVideoAttachments:l.allowvideoattachments&&!k.islivestreaming,allowStickerAttachments:l.allowstickerattachments&&!k.islivestreaming,allowGifAttachments:l.allowgifattachments&&!k.islivestreaming,allowTipJar:l.istipjarenabled&&k.islivestreaming,contextArgs:k,subtitle:l.subtitle,isQAndA:l.isqanda,keepFocus:k.islivestreaming});}.bind(this);};



f.exports=h;}),null);

/** js/components/core/UI/MentionsInput/MentionsInputTypeaheadView.react.js */





__d('MentionsInputTypeaheadView.react',['cx','MentionsTypeaheadViewItem.react','React'],(function a(b,c,d,e,f,g,h){var i,j,






k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;'use strict';for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.













$MentionsInputTypeaheadView_renderItem=function(r){
var s=r===this.props.highlightedEntry;


return (c('React').createElement(c('MentionsTypeaheadViewItem.react'),
{key:r.getUniqueID(),
entry:r,
highlighted:s,
onSelect:this.props.onSelect,
onHighlight:this.props.onHighlight,
onRenderHighlight:this.props.onRenderHighlight}));}.


bind(this),n;}l.prototype.




render=function(){'use strict';
var m="_5u8_"+

(!this.props.entries.length?' '+"_5u90":'');



return (c('React').createElement('ul',
{className:m,
role:'listbox',
id:this.props.id},
this.props.entries.map(this.$MentionsInputTypeaheadView_renderItem)));};


l.propTypes={id:k.string,highlightedEntry:k.object,entries:k.array.isRequired,onSelect:k.func.isRequired,onHighlight:k.func,onRenderHighlight:k.func};


f.exports=l;}),null);

/** js/logging/generated/GroupSellProductDetailActionsTypedLogger.js */





__d('GroupSellProductDetailActionsTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){
'use strict';



















function h(){
this.clear();}
h.prototype.





log=function(){
c('GeneratedLoggerUtils').log('logger:GroupSellProductDetailActionsLoggerConfig',this.$GroupSellProductDetailActionsTypedLogger_data,c('Banzai').BASIC);};
h.prototype.







logVital=function(){
c('GeneratedLoggerUtils').log('logger:GroupSellProductDetailActionsLoggerConfig',this.$GroupSellProductDetailActionsTypedLogger_data,c('Banzai').VITAL);};
h.prototype.




clear=function(){
this.$GroupSellProductDetailActionsTypedLogger_data={};
return this;};
h.prototype.






updateData=function(j){








this.$GroupSellProductDetailActionsTypedLogger_data=babelHelpers['extends']({},
this.$GroupSellProductDetailActionsTypedLogger_data,
j);

return this;};
h.prototype.




setClientTimeStr=function(j){
this.$GroupSellProductDetailActionsTypedLogger_data.client_time_str=j;
return this;};
h.prototype.




setEvent=function(j){
this.$GroupSellProductDetailActionsTypedLogger_data.event=j;
return this;};
h.prototype.




setExceptionMessage=function(j){
this.$GroupSellProductDetailActionsTypedLogger_data.exception_message=j;
return this;};
h.prototype.




setGroupID=function(j){
this.$GroupSellProductDetailActionsTypedLogger_data.group_id=j;
return this;};
h.prototype.




setIsEmployee=function(j){
this.$GroupSellProductDetailActionsTypedLogger_data.is_employee=j;
return this;};
h.prototype.




setReferralSurface=function(j){
this.$GroupSellProductDetailActionsTypedLogger_data.referral_surface=j;
return this;};
h.prototype.




setStoryID=function(j){
this.$GroupSellProductDetailActionsTypedLogger_data.story_id=j;
return this;};
h.prototype.




setSurface=function(j){
this.$GroupSellProductDetailActionsTypedLogger_data.surface=j;
return this;};
h.prototype.




setVC=function(j){
this.$GroupSellProductDetailActionsTypedLogger_data.vc=j;
return this;};
h.prototype.




updateExtraData=function(j){
j=c('nullthrows')(c('GeneratedLoggerUtils').serializeMap(j));
c('GeneratedLoggerUtils').checkExtraDataFieldNames
(j,
i);

this.$GroupSellProductDetailActionsTypedLogger_data=babelHelpers['extends']({},
this.$GroupSellProductDetailActionsTypedLogger_data,
j);

return this;};
h.prototype.




addToExtraData=function(j,k){
var l={};
l[j]=k;
return this.updateExtraData(l);};




































































































































var i=
{client_time_str:true,
event:true,
exception_message:true,
group_id:true,
is_employee:true,
referral_surface:true,
story_id:true,
surface:true,
vc:true};


f.exports=h;}),null);

/** js/groups/sell/product_details/GroupCommerceProductDetailImageContainer.react.js */







__d('GroupCommerceProductDetailImageContainer.react',['cx','DOM','Event','GroupSellProductDetailActionsTypedLogger','GroupSellProductDetailsEvent','GroupSellProductDetailsImageAspect','Image.react','React','ScrollableArea.react','Style','Vector'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,














k=c('React').PropTypes,
l=38,
m=483;i=babelHelpers.inherits

(n,c('React').Component);j=i&&i.prototype;



function n(o,p){
j.constructor.call(this,o,p);this.














































































































$GroupCommerceProductDetailImageContainer_onKeyDown=function(event){

var q=event.target;
while(q){
if(q.id===this.props.ufiID)
return;

q=q.parentElement;}

switch(event.keyCode){
case 37:
case 38:
event.stopPropagation();
this.$GroupCommerceProductDetailImageContainer_setPrevImageIndex();
break;
case 39:
case 40:
event.stopPropagation();
this.$GroupCommerceProductDetailImageContainer_setNextImageIndex();
break;}}.

bind(this);this.








$GroupCommerceProductDetailImageContainer_onImageClick=function(q){
new (c('GroupSellProductDetailActionsTypedLogger'))().
setEvent(c('GroupSellProductDetailsEvent').PHOTO_CLICK).
setStoryID(this.props.storyID).
setGroupID(this.props.group.id).
log();
this.$GroupCommerceProductDetailImageContainer_adjustDimensions(q,this.props.media);
this.setState({currentIndex:q});}.
bind(this);this.state={currentIndex:0,stageWidth:m,stageHeight:558};}n.prototype.render=function(){return c('React').createElement('div',null,c('React').createElement('div',{className:"_57xm"},this.$GroupCommerceProductDetailImageContainer_renderSideImagePane()),c('React').createElement('div',{className:"_57xn"},this.props.media.length==0?this.$GroupCommerceProductDetailImageContainer_renderImagePreview():this.$GroupCommerceProductDetailImageContainer_renderCenterImages()));};n.prototype.componentDidUpdate=function(o,p){if(this.props.media&&this.props.media.length>1&&this.props.media!==o.media){this.$GroupCommerceProductDetailImageContainer_removeKeyListener();this.$GroupCommerceProductDetailImageContainer_keyPressListener=c('Event').listen(document.body,'keydown',this.$GroupCommerceProductDetailImageContainer_onKeyDown);}else if(!this.props.media||this.props.media.length<1)this.$GroupCommerceProductDetailImageContainer_removeKeyListener();};n.prototype.componentWillUnmount=function(){this.$GroupCommerceProductDetailImageContainer_removeKeyListener();};n.prototype.componentWillReceiveProps=function(o){var p,q=this;if(this.props.media!==o.media){var r=0;if(o.media.length<1){this.setState({stageWidth:m});}else (function(){var s=q.props.query;if(s&&s.fbid){r=o.media.findIndex(function(t){return t.id.toString()===s.fbid;});if(r==-1)r=0;}q.$GroupCommerceProductDetailImageContainer_adjustDimensions(r,o.media);})();this.setState({currentIndex:r});}};n.prototype.$GroupCommerceProductDetailImageContainer_renderImagePreview=function(){var o=this.props.elem;if(!o)return null;var p=c('DOM').scry(o,'img')[0],q=c('DOM').scry(o,'i')[0];if(p){var r=c('Vector').from(p.naturalWidth,p.naturalHeight);return c('React').createElement(c('Image.react'),{className:"_580_",width:r.x,height:r.y,src:p.src,style:this.$GroupCommerceProductDetailImageContainer_getImageStyle(r.x,r.y)});}else if(q){var s=c('Style').get(q,'backgroundImage').replace(/.*url\("?([^"]*)"?\).*/,'$1');return c('React').createElement(c('Image.react'),{className:"_580_",src:s});}return null;};n.prototype.$GroupCommerceProductDetailImageContainer_removeKeyListener=function(){if(this.$GroupCommerceProductDetailImageContainer_keyPressListener){this.$GroupCommerceProductDetailImageContainer_keyPressListener.remove();this.$GroupCommerceProductDetailImageContainer_keyPressListener=null;}};n.prototype.




$GroupCommerceProductDetailImageContainer_adjustDimensions=function(o,p){
var q=p[o],
r=this.state.stageWidth;
switch(q.aspect){
case c('GroupSellProductDetailsImageAspect').HORIZONTAL:
case c('GroupSellProductDetailsImageAspect').WIDE_HORIZONTAL:
r=744;
break;
case c('GroupSellProductDetailsImageAspect').WIDE_VERTICAL:
r=314;
break;
case c('GroupSellProductDetailsImageAspect').VERTICAL:
r=419;
break;
case c('GroupSellProductDetailsImageAspect').SQUARE:
r=558;
break;
case c('GroupSellProductDetailsImageAspect').HEIGHT_BOUND:
r=q.width;
break;}

this.props.onResize(q.aspect,r);
this.setState({stageWidth:r});};
n.prototype.

$GroupCommerceProductDetailImageContainer_setNextImageIndex=function(){
var o=this.state.currentIndex+1,
p=this.props.media.length-1;
if(o>p)
o=0;


this.$GroupCommerceProductDetailImageContainer_onImageClick(o);};
n.prototype.

$GroupCommerceProductDetailImageContainer_setPrevImageIndex=function(){
var o=this.state.currentIndex-1,
p=this.props.media.length-1;
if(o<0)
o=p;


this.$GroupCommerceProductDetailImageContainer_onImageClick(o);};
n.prototype.

$GroupCommerceProductDetailImageContainer_renderCenterImages=function(){
var o=[],
p=this.props.media.length;
for(var q=0;q<p;q++){
var r=this.props.media[q];
o.push
(c('React').createElement(c('Image.react'),
{className:

(this.state.currentIndex!=q?"_5810":'')+(' '+"_580_"),


width:r.width,
height:r.height,
src:r.uri,
key:'stage'+r.id,
style:this.$GroupCommerceProductDetailImageContainer_getImageStyle(r.width,r.height)}));}




return o;};
n.prototype.

$GroupCommerceProductDetailImageContainer_getImageStyle=function(o,p){


var q=0;
if(o>this.state.stageWidth){
q=this.state.stageWidth/o;
o*=q;
p*=q;}


if(p>this.state.stageHeight){
q=this.state.stageHeight/p;
o*=q;
p*=q;}





return {paddingTop:(this.state.stageHeight-p)/2+'px',
paddingLeft:(this.state.stageWidth-o)/2+'px',
maxWidth:this.state.stageWidth,
maxHeight:this.state.stageHeight};};

n.prototype.

$GroupCommerceProductDetailImageContainer_renderSideImagePane=function(){
var o=[],
p=this.props.media.length;
for(var q=0;q<p;q++){
var r=this.props.media[q];
o.push
(c('React').createElement(c('Image.react'),
{className:"_5811"+


(this.state.currentIndex==q?' '+"_5812":''),

width:l,
height:l,
src:r.uriThumb,
onClick:this.$GroupCommerceProductDetailImageContainer_onImageClick.bind(this,q),
key:'thumbnail'+r.id}));}





return (c('React').createElement('div',null,
c('React').createElement(c('ScrollableArea.react'),
{height:this.props.maxHeight,
shadow:false},

o),

c('React').createElement('div',
{className:"_2dh4",
style:{width:l}})));};






n.propTypes=
{elem:k.object,
group:k.object.isRequired,
maxHeight:k.number.isRequired,
media:k.any.isRequired,
onResize:k.func.isRequired,
query:k.object,
storyID:k.string,
ufiID:k.string.isRequired};


f.exports=n;}),null);

/** js/groups/sell/product_details/GroupCommerceProductDetailPivotItem.react.js */







__d('GroupCommerceProductDetailPivotItem.react',['cx','Image.react','Link.react','React','Relay','Tooltip.react','XUICard.react','XUICardSection.react','XUIText.react'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,












k=148;i=babelHelpers.inherits

(l,c('React').Component);j=i&&i.prototype;l.prototype.
render=function(){
var m=this.props.pivotItem.primary_photo,
n=m?this.props.pivotItem.snowlift_uri:null,
o=m?null:this.props.pivotItem.story.url,
p=m?'theater':undefined;

return (c('React').createElement('div',{className:"_179c"},
c('React').createElement(c('Link.react'),
{ajaxify:n,
href:o,
rel:p},
c('React').createElement(c('XUICard.react'),
{className:"_3-8h",
style:{width:k}},
this.renderImage(),
c('React').createElement(c('XUICardSection.react'),
{className:"_2pi8 _2pi2 _4bqg"},

c('React').createElement(c('XUIText.react'),
{className:"_4bqh",

display:'block',
weight:'bold',
size:'small'},
this.props.pivotItem.group_commerce_item_title),

c('React').createElement(c('XUIText.react'),
{className:"_179d _4bqh",

display:'block',
size:'small'},
this.props.pivotItem.formatted_price.text))))));};






l.prototype.

renderImage=function(){
if(this.props.pivotItem.primary_photo)

return (c('React').createElement(c('Image.react'),
{width:k,
height:k,
src:this.props.pivotItem.primary_photo.image.uri}));




return (c('React').createElement('div',
{className:"_5xvt",
style:
{width:k,
height:k}}));};



function l(){i.apply(this,arguments);}


f.exports=c('Relay').createContainer(l,
{initialVariables:
{image_size:k},


fragments:
{pivotItem:function m(){return function(){return {children:[{fieldName:'group_commerce_item_title',kind:'Field',metadata:{},type:'String'},{children:[{fieldName:'text',kind:'Field',metadata:{},type:'String'}],fieldName:'formatted_price',kind:'Field',metadata:{canHaveSubselections:true},type:'TextWithEntities'},{children:[{calls:[{kind:'Call',metadata:{type:'Int'},name:'width',value:{kind:'CallVariable',callVariableName:'image_size'}},{kind:'Call',metadata:{type:'Int'},name:'height',value:{kind:'CallVariable',callVariableName:'image_size'}},{kind:'Call',metadata:{},name:'sizing',value:{kind:'CallValue',callValue:'cover-fill'}}],children:[{fieldName:'uri',kind:'Field',metadata:{},type:'Url'}],fieldName:'image',kind:'Field',metadata:{canHaveSubselections:true},type:'Image'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'primary_photo',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id'},type:'Photo'},{fieldName:'snowlift_uri',kind:'Field',metadata:{},type:'Url'},{children:[{fieldName:'url',kind:'Field',metadata:{},type:'Url'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'story',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id'},type:'Story'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],id:c('Relay').QL.__id(),kind:'Fragment',metadata:{},name:'GroupCommerceProductDetailPivotItem_react_PivotItemRelayQL',type:'GroupCommerceProductItem'};}();}}});}),null);

/** js/groups/sell/product_details/GroupCommerceProductDetailPivots.react.js */







__d('GroupCommerceProductDetailPivots.react',['cx','fbt','ix','GroupCommerceProductDetailPivotItem.react','Image.react','Layout.react','React','Relay','XUICarousel.react','XUICarouselAnimator','XUICarouselArrow.react','XUICarouselItem.react','XUIGrayText.react'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';var k,l,




m=c('Layout.react').Column,












n=c('React').PropTypes,
o=12,
p=8;k=babelHelpers.inherits

(q,c('React').Component);l=k&&k.prototype;q.prototype.








render=function(){

if(!this.props.groupCommerceProductItem||
!this.props.groupCommerceProductItem.top_related_products||
!this.props.groupCommerceProductItem.top_related_products.edges||



this.props.groupCommerceProductItem.top_related_products.edges.length<
o)

return null;


var r=


this.props.groupCommerceProductItem.top_related_products.edges.map
(function(u){

return (c('React').createElement(c('XUICarouselItem.react'),
{className:"_3-8_",
key:u.node.id},
c('React').createElement(c('GroupCommerceProductDetailPivotItem.react'),
{pivotItem:u.node})));}),






s=
c('React').createElement(c('XUICarouselArrow.react'),null,
c('React').createElement(c('Image.react'),
{alt:i._(["Previous","d1f8b35e3707fd5d4fe94018dda0b506"]),
src:j("101565")})),


t=
c('React').createElement(c('XUICarouselArrow.react'),null,
c('React').createElement(c('Image.react'),
{alt:i._(["Next","e92b5ad15e1887ecdfcfa37c5a40d80b"]),
src:j("101566")}));




return (c('React').createElement('div',{className:"_2pie _39ha"},
c('React').createElement(c('XUIGrayText.react'),
{className:"_3-94",
shade:'light',
size:'small',
weight:'bold',
display:'block'},i._(["SEE MORE ITEMS","8fb9f6390f80152e0a62082cb8a26c11"])),




c('React').createElement(c('XUICarousel.react'),
{animator:new (c('XUICarouselAnimator'))
({type:'horizontal',
centered:false,
firstAndLastAligned:true}),

arrows:[s,t],
initialAutoplay:false,
viewportWidth:this.props.width-p*2,
wrapAround:false},
r)));};



function q(){k.apply(this,arguments);}q.propTypes={width:n.number.isRequired};


f.exports=c('Relay').createContainer(q,
{initialVariables:
{count:o},


fragments:
{groupCommerceProductItem:function r(){return function(s){return {children:[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'},{calls:[{kind:'Call',metadata:{type:'Int'},name:'first',value:{kind:'CallVariable',callVariableName:'count'}}],children:[{fieldName:'count',kind:'Field',metadata:{},type:'Int'},{children:[{children:[].concat.apply([],[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'},c('Relay').QL.__frag(s)]),fieldName:'node',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id',isRequisite:true},type:'GroupCommerceProductItem'},{fieldName:'cursor',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'edges',kind:'Field',metadata:{canHaveSubselections:true,isPlural:true},type:'ProductToTopRelatedProductsEdge'},{children:[{fieldName:'has_next_page',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'},{fieldName:'has_previous_page',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'}],fieldName:'page_info',kind:'Field',metadata:{canHaveSubselections:true,isGenerated:true,isRequisite:true},type:'PageInfo'}],fieldName:'top_related_products',kind:'Field',metadata:{canHaveSubselections:true,isConnection:true,isFindable:true},type:'ProductToTopRelatedProductsConnection'}],id:c('Relay').QL.__id(),kind:'Fragment',metadata:{},name:'GroupCommerceProductDetailPivots_react_GroupCommerceProductItemRelayQL',type:'GroupCommerceProductItem'};}







(c('GroupCommerceProductDetailPivotItem.react').getFragment('pivotItem'));}}});}),null);

/** js/groups/sell/product_details/routes/GroupCommerceProductDetailPivotsRoute.js */







__d('GroupCommerceProductDetailPivotsRoute',['Relay'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits



(j,c('Relay').Route);i=h&&h.prototype;function j(){h.apply(this,arguments);}

j.routeName=
'GroupCommerceProductDetailPivotsRoute';

j.path=
'/product_details/top_related_products/{id}';

j.paramDefinitions=
{id:
{type:'Number',
required:true}};



j.queries=
{groupCommerceProductItem:function k(l){return function(m){return {calls:[{kind:'Call',metadata:{type:'ID!'},name:'id',value:{kind:'CallVariable',callVariableName:'id'}}],children:[].concat.apply([],[{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'},{fieldName:'__typename',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'},c('Relay').QL.__frag(m)]),fieldName:'node',kind:'Query',metadata:{isAbstract:true,identifyingArgName:'id',identifyingArgType:'ID!'},name:'GroupCommerceProductDetailPivotsRoute',type:'Node'};}


(l.getFragment('groupCommerceProductItem'));}};





f.exports=j;}),null);

/** js/groups/sell/product_details/GroupCommerceProductDetailPivotsRelayContainer.react.js */







__d('GroupCommerceProductDetailPivotsRelayContainer.react',['GroupCommerceProductDetailPivots.react','GroupCommerceProductDetailPivotsRoute','React','RelayRootContainer'],(function a(b,c,d,e,f,g){

'use strict';var h,i,






j=c('React').PropTypes;h=babelHelpers.inherits

(k,c('React').Component);i=h&&h.prototype;k.prototype.
render=function(){
var l=new (c('GroupCommerceProductDetailPivotsRoute'))
({id:this.props.groupCommerceProductID});


return (c('React').createElement(c('RelayRootContainer'),
{Component:c('GroupCommerceProductDetailPivots.react'),
route:l,
renderFetched:function(m){
return (c('React').createElement(c('GroupCommerceProductDetailPivots.react'),babelHelpers['extends']({},
m,
{width:this.props.width})));}.bind(this)}));};




function k(){h.apply(this,arguments);}


k.propTypes=
{groupCommerceProductID:j.number.isRequired,
width:j.number.isRequired};


f.exports=k;}),null);

/** js/groups/sell/product_details/GroupCommerceProductDetailRHCContent.react.js */







__d('GroupCommerceProductDetailRHCContent.react',['cx','ix','GroupSellProductDetailActionsTypedLogger','GroupSellProductDetailsEvent','Image.react','Link.react','React','XUIText.react'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,











l=c('React').PropTypes;j=babelHelpers.inherits

(m,c('React').Component);k=j&&j.prototype;m.prototype.

render=function(){
var n=this.$GroupCommerceProductDetailRHCContent_renderPickupNote(),
o=this.$GroupCommerceProductDetailRHCContent_renderTitleText();

return (c('React').createElement('div',{className:"_4g63"+

(!this.props.actor.profilePicURI?' '+"_34xy":'')},

c('React').createElement('div',{className:"_4g65"},
o,
n,
c('React').createElement(c('XUIText.react'),{className:"_4g66"},
this.props.product.price),

c('React').createElement('div',
{className:"_4g67"},
this.props.description),

c('React').createElement('div',{className:"_4g68"},
this.props.actionButton)),


c('React').createElement('div',
{className:"_4g6d",
onClick:function(){
new (c('GroupSellProductDetailActionsTypedLogger'))().
setEvent(c('GroupSellProductDetailsEvent').UFI_CLICK).
setStoryID(this.props.storyID).
setGroupID(this.props.group.id).
log();}.
bind(this),
ref:'ufi',
role:'presentation'},
this.props.ufi)));};



m.prototype.

$GroupCommerceProductDetailRHCContent_renderTitleText=function(){
var n=this.props.product.statusText?
this.props.product.statusText+' '+this.props.product.title:
this.props.product.title;

return (c('React').createElement(c('XUIText.react'),
{id:this.props.titleID,
className:"_4g6e"},
n));};


m.prototype.

$GroupCommerceProductDetailRHCContent_renderPickupNote=function(){
var n=!this.props.product.deliveryNote?
null:
c('React').createElement(c('XUIText.react'),
{display:'inline'},
this.props.product.deliveryNote),

o=n?
c('React').createElement(c('Image.react'),
{className:"_4g6g",
src:i("75362")}):

null;


return (c('React').createElement('div',{className:"_4g6h"},
o,
c('React').createElement(c('XUIText.react'),null,
n)));};



function m(){j.apply(this,arguments);}


m.propTypes=
{actor:l.object.isRequired,
product:l.object.isRequired,
group:l.object.isRequired,
feedback:l.object.isRequired,
ufi:l.any.isRequired,
actionButton:l.any.isRequired,
storyID:l.string,
description:l.any.isRequired,
titleID:l.string};


f.exports=m;}),null);

/** js/groups/sell/product_details/GroupCommerceProductDetailRHCFooter.react.js */







__d('GroupCommerceProductDetailRHCFooter.react',['cx','Event','MentionsInputTypeaheadView.react','React','ReactDOM','UFIAddCommentController','UFIMentionsInputProxy.react'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,










k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').Component);j=i&&i.prototype;l.prototype.


componentDidMount=function(){
this.$GroupCommerceProductDetailRHCFooter_keyPressListener=c('Event').listen
(c('ReactDOM').findDOMNode(this.refs.ufiAddComment),
'keydown',
this.$GroupCommerceProductDetailRHCFooter_onKeyDown);};

l.prototype.

createUFIAddComment=function(m){
if(m.ufi&&m.ufi.params){
m.ufi.params.mentionsinput=
{inputComponent:c('UFIMentionsInputProxy.react'),
viewComponent:c('MentionsInputTypeaheadView.react')};

c('UFIAddCommentController').factory

(c('ReactDOM').findDOMNode(this.refs.ufiAddComment),
m.ufi.params);}};


l.prototype.

componentWillUnmount=function(){
if(this.$GroupCommerceProductDetailRHCFooter_keyPressListener){
this.$GroupCommerceProductDetailRHCFooter_keyPressListener.remove();
this.$GroupCommerceProductDetailRHCFooter_keyPressListener=null;}};

l.prototype.

render=function(){

return (c('React').createElement('div',
{className:"_3g6i"+

(!this.props.actor.profilePicURI?' '+"_34xy":''),

key:this.props.ufiInstanceID,
ref:'ufiAddComment'}));};


l.prototype.



$GroupCommerceProductDetailRHCFooter_onKeyDown=function(event){
switch(event.keyCode){
case 37:
case 38:
case 39:
case 40:
event.stopPropagation();
break;}};

function l(){i.apply(this,arguments);}


l.propTypes=
{ufiInstanceID:k.string.isRequired,
ufi:k.object.isRequired,
actor:k.object.isRequired};


f.exports=l;}),null);

/** js/groups/sell/product_details/GroupCommerceProductDetailRHCHeader.react.js */







__d('GroupCommerceProductDetailRHCHeader.react',['cx','ix','GroupSellProductDetailActionsTypedLogger','GroupSellProductDetailsEvent','Image.react','Link.react','React','ReactLayeredComponentMixin_DEPRECATED','XUIContextualDialog.react','XUIContextualDialogBody.react','classWithMixins','isEmpty','mixin'],(function a(b,c,d,e,f,g,h,i){

'use strict';var j,k,
















l=c('React').PropTypes,
m=104,
n=40;j=babelHelpers.inherits

(o,c('classWithMixins')
(c('React').Component,
c('mixin')(c('ReactLayeredComponentMixin_DEPRECATED'))));k=j&&j.prototype;o.prototype.


renderLayers=function(){

return {actorDialog:
c('React').createElement(c('XUIContextualDialog.react'),
{contextRef:function(){return this.refs.actorName;}.bind(this),
shown:true,
hoverContextRef:function(){return this.refs.actorName;}.bind(this),
hideOnEscape:true,
hoverHideDelay:0,
hoverShowDelay:500,
autoFocus:false,
width:c('XUIContextualDialog.react').WIDTH.WIDE,
position:'below'},
c('React').createElement(c('XUIContextualDialogBody.react'),null,
c('React').createElement('div',{id:this.props.actorHoverID}))),


actorImageDialog:
c('React').createElement(c('XUIContextualDialog.react'),
{contextRef:function(){return this.refs.actorImage;}.bind(this),
shown:true,
hoverContextRef:function(){return this.refs.actorImage;}.bind(this),
hideOnEscape:true,
hoverHideDelay:0,
hoverShowDelay:500,
autoFocus:false,
width:c('XUIContextualDialog.react').WIDTH.WIDE,
position:'below'},
c('React').createElement(c('XUIContextualDialogBody.react'),null,
c('React').createElement('div',{id:this.props.actorImageHoverID}))),


groupDialog:
c('React').createElement(c('XUIContextualDialog.react'),
{contextRef:function(){return this.refs.groupName;}.bind(this),
shown:true,
hoverContextRef:function(){return this.refs.groupName;}.bind(this),
hideOnEscape:true,
hoverHideDelay:0,
hoverShowDelay:500,
autoFocus:false,
width:c('XUIContextualDialog.react').WIDTH.WIDE,
position:'below'},
c('React').createElement(c('XUIContextualDialogBody.react'),null,
c('React').createElement('div',{id:this.props.groupHoverID})))};};



o.prototype.

render=function(){

return (c('React').createElement('div',{className:"_34xx"+

(!this.props.actor.profilePicURI?' '+"_34xy":'')},

c('React').createElement(c('Image.react'),
{className:"_34xz",
width:n,
height:n,
src:this.props.actor.profilePicURI,
ref:'actorImage'}),

c('React').createElement('div',{className:"_34x-"},
c('React').createElement('div',{className:"_34x_"},
c('React').createElement('div',
{ref:'actorName',
className:"_34y0"},
c('React').createElement(c('Link.react'),
{href:this.props.actor.uri,
onClick:function(){
new (c('GroupSellProductDetailActionsTypedLogger'))().
setEvent(c('GroupSellProductDetailsEvent').PROFILE_LINK_CLICK).
setStoryID(this.props.storyID).
setGroupID(this.props.group.id).
log();
this.props.hideDialog();}.
bind(this)},
this.props.actor.name)),


!c('isEmpty')(this.props.group)?
c('React').createElement(c('Image.react'),
{className:
"_34y1",

src:i("82443")}):

null,
c('React').createElement('div',
{ref:'groupName',
className:"_34y0"},
c('React').createElement(c('Link.react'),
{href:this.props.group.uri,
onClick:function(){
new (c('GroupSellProductDetailActionsTypedLogger'))().
setEvent(c('GroupSellProductDetailsEvent').GROUP_LINK_CLICK).
setStoryID(this.props.storyID).
setGroupID(this.props.group.id).
log();
this.props.hideDialog();}.
bind(this)},
this.props.group.name))),



c('React').createElement('div',{className:"_4g6i"},
c('React').createElement(c('Link.react'),
{href:this.props.product.uri,
onClick:function(){
new (c('GroupSellProductDetailActionsTypedLogger'))().
setEvent(c('GroupSellProductDetailsEvent').PERMALINK_CLICK).
setStoryID(this.props.storyID).
setGroupID(this.props.group.id).
log();
this.props.hideDialog();}.
bind(this)},
this.props.timestamp))),



c('React').createElement('div',{id:this.props.chevronID})));};


o.prototype.

componentDidUpdate=function(p,q){

var r=this.refs.actorName.offsetWidth,
s=m-r;
this.refs.groupName.style.maxWidth=m+s+'px';};
function o(){j.apply(this,arguments);}


o.propTypes=
{actor:l.object.isRequired,
group:l.object.isRequired,
storyID:l.string,
actorHoverID:l.string.isRequired,
actorImageHoverID:l.string.isRequired,
groupHoverID:l.string.isRequired,
chevronID:l.string.isRequired,
product:l.object.isRequired,
timestamp:l.any.isRequired};


f.exports=o;}),null);

/** www/__virtual__/x/XGroupCommerceMarketplaceProductDetailController.js */



__d("XGroupCommerceMarketplaceProductDetailController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/marketplace\/product_detail\/",{sale_post_id:{type:"FBID",required:true},ufi_id:{type:"String",required:true},date_time_id:{type:"String",required:true},action_button_id:{type:"String",required:true},actor_dialog_id:{type:"String",required:true},actor_image_dialog_id:{type:"String",required:true},description_id:{type:"String",required:true},title_id:{type:"String",required:true},group_hover_id:{type:"String",required:true},ufi_instance_id:{type:"String",required:true},chevron_id:{type:"String",required:true}});}),

null);

/** www/__virtual__/x/XGroupCommerceMarketplaceSimilarProductsController.js */



__d("XGroupCommerceMarketplaceSimilarProductsController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/marketplace\/similar_products\/",{rid:{type:"Int"},rt:{type:"Enum",enumType:0},location:{type:"Enum",enumType:1},share_id:{type:"Int"},sale_post_id:{type:"FBID",required:true},post_dom_id:{type:"String",required:true},render_location:{type:"Enum",required:true,enumType:1}});}),

null);

/** js/groups/sell/product_details/GroupCommerceProductDetail.react.js */







__d('GroupCommerceProductDetail.react',['csx','cx','fbt','Arbiter','AsyncRequest','GroupSellProductDetailActionsTypedLogger','GroupSellProductDetailsEvent','GroupSellProductDetailsImageAspect','LayerFadeOnHide','LayerHideOnEscape','LeftRight.react','GroupCommerceProductDetailPivotsRelayContainer.react','GroupCommerceProductDetailRHCHeader.react','GroupCommerceProductDetailImageContainer.react','GroupCommerceProductDetailRHCContent.react','GroupCommerceProductDetailRHCFooter.react','Parent','React','ReactRenderer','ResponsiveBlock.react','ScrollableArea.react','XGroupCommerceMarketplaceProductDetailController','XGroupCommerceMarketplaceSimilarProductsController','XUIDialog.react','XUIDialogTitle.react','XUIDialogBody.react','guid'],(function a(b,c,d,e,f,g,h,i,j){

'use strict';var k,l,






























m=495,
n=530,
o=891;k=babelHelpers.inherits





(p,c('React').Component);l=k&&k.prototype;






function p(q,r){
l.constructor.call(this,q,r);this.





























































































































































































































































hideDialog=function(){
this.$GroupCommerceProductDetail_onToggle(false);}.
bind(this);this.


$GroupCommerceProductDetail_onImageResize=function(t,u){
var v=this.state.width;
switch(t){
case c('GroupSellProductDetailsImageAspect').HORIZONTAL:
case c('GroupSellProductDetailsImageAspect').WIDE_HORIZONTAL:
v=1153;
break;
case c('GroupSellProductDetailsImageAspect').WIDE_VERTICAL:
v=723;
break;
case c('GroupSellProductDetailsImageAspect').VERTICAL:
v=828;
break;
case c('GroupSellProductDetailsImageAspect').SQUARE:
v=967;
break;
case c('GroupSellProductDetailsImageAspect').HEIGHT_BOUND:
v=u+409;
break;}


this.setState({width:v});}.
bind(this);this.

$GroupCommerceProductDetail_onRHCResize=function(t,u){
if(u>m)
u=m;


this.setState({rhcHeight:u});}.
bind(this);this.

$GroupCommerceProductDetail_onToggle=function(t){
if(p.$GroupCommerceProductDetail_instance!==null)
this.setState({isDialogShown:t});


if(!t){
new (c('GroupSellProductDetailActionsTypedLogger'))().
setEvent(c('GroupSellProductDetailsEvent').HIDE_DIALOG).
setStoryID(this.state.payload.storyID).
setGroupID(this.state.payload.group.id).
log();
this.props.onHide&&this.props.onHide();


if(p.$GroupCommerceProductDetail_instance!==null)
setTimeout(function(){
this.setState
({payload:this.$GroupCommerceProductDetail_getDefaultPayload(),
query:null,
elem:null});}.

bind(this));}}.


bind(this);this.














$GroupCommerceProductDetail_detailRequestOnSuccess=function(t){
new (c('GroupSellProductDetailActionsTypedLogger'))().
setEvent(c('GroupSellProductDetailsEvent').SHOW_DIALOG).
setStoryID(t.payload.storyID).
setGroupID(t.payload.group.id).
log();
this.setState
({payload:t.payload,
isDialogShown:true});}.

bind(this);var s=this;s.hideDialog=this.hideDialog.bind(this);s.showDialog=this.showDialog.bind(this);s.$GroupCommerceProductDetail_onToggle=this.$GroupCommerceProductDetail_onToggle.bind(this);s.$GroupCommerceProductDetail_onRHCResize=this.$GroupCommerceProductDetail_onRHCResize.bind(this);s.$GroupCommerceProductDetail_detailRequestOnSuccess=this.$GroupCommerceProductDetail_detailRequestOnSuccess.bind(this);s.$GroupCommerceProductDetail_onImageResize=this.$GroupCommerceProductDetail_onImageResize.bind(this);this.$GroupCommerceProductDetail_relevant_products_loaded={};this.state={isDialogShown:false,width:o,rhcHeight:200,payload:this.$GroupCommerceProductDetail_getDefaultPayload(),ufiID:'ufi_detail_'+c('guid')(),datetimeID:'datetime_'+c('guid')(),actionButtonID:'actionButton'+c('guid')(),actorHoverID:'actorHoverID'+c('guid')(),actorImageHoverID:'actorImageHoverID'+c('guid')(),descriptionID:'descriptionID'+c('guid')(),titleID:'titleID'+c('guid')(),groupHoverID:'groupHoverID'+c('guid')(),ufiInstanceID:'ufiInstanceID'+c('guid')(),chevronID:'chevronID'+c('guid')(),query:null,elem:null,salePostID:null};}p.prototype.componentDidMount=function(){this.$GroupCommerceProductDetail_arbiter=c('Arbiter').subscribe('XComposerEditDialog/doneEditing',function(){this.$GroupCommerceProductDetail_refreshPayload(this.state.salePostID);}.bind(this));};p.prototype.componentWillUnmount=function(){var q=this.refs.modal;if(q!=null)q.layer.hide();p.$GroupCommerceProductDetail_instance=null;this.$GroupCommerceProductDetail_arbiter&&this.$GroupCommerceProductDetail_arbiter.unsubscribe();this.$GroupCommerceProductDetail_arbiter=null;};p.prototype.render=function(){if(!this.state.isDialogShown)return null;var q=c('React').createElement('span',{id:this.state.datetimeID}),r=c('React').createElement('div',{id:this.state.ufiID}),s=c('React').createElement('div',{id:this.state.actionButtonID}),t=c('React').createElement('div',{className:"_3g5q",id:this.state.descriptionID});return c('React').createElement(c('XUIDialog.react'),{shown:true,onToggle:this.$GroupCommerceProductDetail_onToggle,ref:'modal',width:this.state.width,behaviors:{LayerFadeOnHide:c('LayerFadeOnHide'),LayerHideOnEscape:c('LayerHideOnEscape')}},c('React').createElement(c('XUIDialogTitle.react'),null,j._(["Item Details","58fdcd4a71faafc7bdf75ecd364b5405"])),c('React').createElement(c('XUIDialogBody.react'),null,c('React').createElement('div',{className:"_3g6d"},c('React').createElement(c('LeftRight.react'),null,c('React').createElement('div',{className:"_3g6e"},c('React').createElement(c('GroupCommerceProductDetailImageContainer.react'),{elem:this.state.elem,group:this.state.payload.group,maxHeight:n,media:this.state.payload.media,onResize:this.$GroupCommerceProductDetail_onImageResize,query:this.state.query,storyID:this.state.payload.storyID,ufiID:this.state.ufiID})),c('React').createElement('div',{className:"_3g6f"},c('React').createElement(c('ScrollableArea.react'),{className:"_3g6g",height:this.state.rhcHeight},c('React').createElement(c('ResponsiveBlock.react'),{className:"_3g6h",onResize:this.$GroupCommerceProductDetail_onRHCResize},c('React').createElement(c('GroupCommerceProductDetailRHCHeader.react'),{actor:this.state.payload.actor,group:this.state.payload.group,hideDialog:this.hideDialog,storyID:this.state.payload.storyID,actorHoverID:this.state.actorHoverID,actorImageHoverID:this.state.actorImageHoverID,groupHoverID:this.state.groupHoverID,chevronID:this.state.chevronID,product:this.state.payload.product,timestamp:q}),c('React').createElement(c('GroupCommerceProductDetailRHCContent.react'),{actor:this.state.payload.actor,product:this.state.payload.product,group:this.state.payload.group,feedback:this.state.payload.feedback,actionButton:s,ufi:r,hideDialog:this.hideDialog,storyID:this.state.payload.storyID,description:t,titleID:this.state.titleID}))),c('React').createElement(c('GroupCommerceProductDetailRHCFooter.react'),{actor:this.state.payload.actor,ref:'rhcFooter',className:"_3g6i",ufiInstanceID:this.state.ufiInstanceID,ufi:this.state.payload.ufi}))),this.$GroupCommerceProductDetail_renderPivots())));};p.prototype.showDialog=function(q,r,s){this.$GroupCommerceProductDetail_refreshPayload(q);this.setState({payload:this.$GroupCommerceProductDetail_getDefaultPayload(),salePostID:q,query:r,elem:s,isDialogShown:true,width:o});this.$GroupCommerceProductDetail_loadSimilarProducts(q,s);};p.prototype.$GroupCommerceProductDetail_renderPivots=function(){var q=this.state.payload.product;if(!q.id||!q.showPivots)return null;return c('React').createElement(c('GroupCommerceProductDetailPivotsRelayContainer.react'),{groupCommerceProductID:q.id,width:this.state.width});};p.prototype.$GroupCommerceProductDetail_refreshPayload=function(q){var r=c('XGroupCommerceMarketplaceProductDetailController').getURIBuilder().setFBID('sale_post_id',q).setString('ufi_id',this.state.ufiID).setString('date_time_id',this.state.datetimeID).setString('action_button_id',this.state.actionButtonID).setString('actor_dialog_id',this.state.actorHoverID).setString('actor_image_dialog_id',this.state.actorImageHoverID).setString('description_id',this.state.descriptionID).setString('title_id',this.state.titleID).setString('group_hover_id',this.state.groupHoverID).setString('ufi_instance_id',this.state.ufiInstanceID).setString('chevron_id',this.state.chevronID).getURI();new (c('AsyncRequest'))().setURI(r).setMethod('GET').setHandler(this.$GroupCommerceProductDetail_detailRequestOnSuccess).setErrorHandler(function(s){new (c('GroupSellProductDetailActionsTypedLogger'))().setEvent(c('GroupSellProductDetailsEvent').ASYNC_DATA_REQUEST_FAIL).setStoryID(q.toString()).log();}).setReadOnly(true).send();};p.prototype.$GroupCommerceProductDetail_loadSimilarProducts=function(q,r){var s=r&&c('Parent').bySelector(r,"._4-u2");if(!r||!r.dataset.renderLocation||!s)return;var t=s.id;if(!t||this.$GroupCommerceProductDetail_relevant_products_loaded[t])return;this.$GroupCommerceProductDetail_relevant_products_loaded[t]=true;var u=c('XGroupCommerceMarketplaceSimilarProductsController').getURIBuilder().setFBID('sale_post_id',q).setString('post_dom_id',t).setEnum('render_location',r.dataset.renderLocation).getURI();new (c('AsyncRequest'))().setURI(u).setMethod('GET').setHandler(this.$GroupCommerceProductDetail_similarProductsRequestOnSuccess).setErrorHandler(function(v){}).setReadOnly(true).send();};p.prototype.$GroupCommerceProductDetail_similarProductsRequestOnSuccess=function(q){var r=q.getPayload();if(!r||!r.length)return;};p.prototype.$GroupCommerceProductDetail_getDefaultPayload=function(){return {actor:{profilePicURI:null},group:{},product:{},feedback:{},media:[],ufi:{}};};p.

init=function(q){
var r=
c('ReactRenderer').constructAndRenderComponent
(p,
{},
q);






p.$GroupCommerceProductDetail_container=q;
p.$GroupCommerceProductDetail_instance=r;

if(p.$GroupCommerceProductDetail_salePostID){
p.showDialog
(p.$GroupCommerceProductDetail_salePostID,
p.$GroupCommerceProductDetail_query,
p.$GroupCommerceProductDetail_elem);

p.$GroupCommerceProductDetail_salePostID=null;
p.$GroupCommerceProductDetail_query=null;
p.$GroupCommerceProductDetail_elem=null;}};

p.

showDialog=function(q,r,s){
if(!p.$GroupCommerceProductDetail_instance){
if(!p.$GroupCommerceProductDetail_container){
p.$GroupCommerceProductDetail_salePostID=q;
p.$GroupCommerceProductDetail_query=r;
p.$GroupCommerceProductDetail_elem=s;
return;}


p.init(p.$GroupCommerceProductDetail_container);}


if(!p.$GroupCommerceProductDetail_instance){
new (c('GroupSellProductDetailActionsTypedLogger'))().
setEvent(c('GroupSellProductDetailsEvent').DIALOG_INSTANCE_NULL).
setStoryID(q.toString()).
log();
return;}


p.$GroupCommerceProductDetail_instance.showDialog
(q,
r,
s);};

p.

$GroupCommerceProductDetail_instance=null;p.
$GroupCommerceProductDetail_salePostID=null;p.
$GroupCommerceProductDetail_container=null;p.
$GroupCommerceProductDetail_elem=null;p.
$GroupCommerceProductDetail_query=null;


f.exports=p;}),null);

/** js/groups/sell/product_details/GroupCommerceProductDetailLayer.js */








__d('GroupCommerceProductDetailLayer',['Layer','GroupCommerceProductDetail.react'],(function a(b,c,d,e,f,g){

'use strict';var h,i;h=babelHelpers.inherits




(j,c('Layer'));i=h&&h.prototype;j.prototype.

_buildWrapper=function(k,l){
c('GroupCommerceProductDetail.react').init(l);
return l;};
function j(){h.apply(this,arguments);}


f.exports=j;}),null);
