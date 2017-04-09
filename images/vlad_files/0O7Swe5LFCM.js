if (self.CavalryLogger) { CavalryLogger.start_js(["zlTnu"]); }

/** __static_js_modules__/commerceselfservenuxtype.js */




__d("CommerceSelfServeNUXType",[],(function a(b,c,d,e,f,g){

f.exports={ADD_SHIPPING_OPTIONS_PUX:"add_shipping_options_pux",ADMIN_PAYMENTS_NAV_ITEM_NUX:"admin_payments_nav_item_nux",COLLECTION_SHARE_UPSELL:"collection_share_upsell",COMMERCE_INTRO_LANDING_NUX:"commerce_intro_landing_nux",COMPOSER_PRODUCT_PHOTO_TAGGER_BUTTON:"composer_product_photo_tagger_button",COMPOSER_PRODUCT_TAGGER_BUTTON:"composer_product_tagger_button",DISCOUNT_CODES_UPSELL:"discount_codes_upsell",FIRST_ORDER_BANNER:"first_order_banner",FIRST_ORDER_MODAL:"first_order_modal",INVOICE_PAYMENTS_CREATION_PUX:"invoice_payments_creation_pux",INVOICE_PAYMENTS_INVOICE_CREATION_BUTTON:"invoice_payments_invoice_creation_button",INVOICE_PAYMENTS_PAGE_LANDING_UPSELL:"invoice_payments_page_landing_upsell",PHOTO_VIEWER_PRODUCT_TAGGER_BUTTON:"photo_viewer_product_tagger_button",PRODUCT_ATTACHMENT_COMPOSER:"product_attachment_composer_nux",SHOP_NOW_CTA:"shop_now_cta",SHOP_TAB_IN_PUBLISHING_TOOLS:"shop_tab_pt_self_serve_nux",SHOP_TAB_ON_PAGE:"shop_tab_page_self_serve_nux",VIDEO_COMPOSER_PRODUCT_TAGGER_BUTTON:"video_composer_product_tagger_button",VIDEO_EDITOR_PRODUCT_TAGGER_BUTTON:"video_editor_product_tagger_button",PRODUCT_TAG_PAGE_LANDING_UPSELL:"product_tag_page_landing_upsell"};}),

null);

/** __static_js_modules__/reactcomposermediaattachmenttype.js */




__d("ReactComposerMediaAttachmentType",[],(function a(b,c,d,e,f,g){

f.exports={CANVAS:"CANVAS",CAROUSEL:"CAROUSEL",SLIDESHOW:"SLIDESHOW",PHOTOS:"PHOTOS",ALBUM:"ALBUM"};}),

null);

/** __static_js_modules__/slideshowcreationwaterfallevent.js */




__d("SlideshowCreationWaterfallEvent",[],(function a(b,c,d,e,f,g){

f.exports={SLIDESHOW_INTENT:"intent_slideshow",SLIDESHOW_CANCEL:"cancel_slideshow",SLIDESHOW_POST:"post_slideshow",SLIDESHOW_PREVIEW_INTENT:"intent_slideshow_preview",SLIDESHOW_PREVIEW_CANCEL:"cancel_slideshow_preview",SLIDESHOW_IMAGE_UPLOAD_STARTED:"image_upload_started_slideshow",SLIDESHOW_IMAGE_UPLOAD_SUCCESS:"image_upload_success_slideshow",SLIDESHOW_IMAGES_SELECT_CONFIRM:"images_select_confirm_slideshow",SLIDESHOW_IMAGE_REMOVE:"image_remove_slideshow",SLIDESHOW_ADD_VIDEO_CLICK:"add_video_click_slideshow",SLIDESHOW_VIDEO_UPLOAD_START:"video_upload_start_slideshow",SLIDESHOW_VIDEO_UPLOAD_ERROR:"video_upload_error_slideshow",SLIDESHOW_VIDEO_UPLOAD_SUCCESS:"video_upload_success_slideshow",SLIDESHOW_FRAME_IMAGES_START:"frame_images_start_slideshow",SLIDESHOW_FRAME_IMAGES_SUCCESS:"frame_images_success_slideshow",SLIDESHOW_FRAME_IMAGES_ERROR:"frame_images_error_slideshow",SLIDESHOW_STORYLINE_MOOD_SELECT:"storyline_mood_select_slideshow",SLIDESHOW_MUSIC_CATEGORY_SELECT:"music_category_select_slideshow",SLIDESHOW_STORYLINE_MOOD_REMOVE:"storyline_mood_remove_slideshow",SLIDESHOW_STORYLINE_MOOD_DELETE:"storyline_mood_delete_slideshow",SLIDESHOW_AUDIO_UPLOAD_START:"audio_upload_start_slideshow",SLIDESHOW_AUDIO_UPLOAD_ERROR:"audio_upload_error_slideshow",SLIDESHOW_AUDIO_UPLOAD_SUCCESS:"audio_upload_success_slideshow",SLIDESHOW_DURATION_CHANGE:"duration_change_slideshow",SLIDESHOW_TRANSITION_CHANGE:"transition_change_slideshow",SLIDESHOW_FORMAT_CHANGE:"format_change_slideshow",SLIDESHOW_TAB_CHANGE:"tab_change_slideshow"};}),

null);

/** __static_js_modules__/slideshowentrypoint.js */




__d("SlideshowEntrypoint",[],(function a(b,c,d,e,f,g){

f.exports={COMPOSER_PHOTO_VIDEO_TAB:"composer_photo_video_tab",COMPOSER_CAMERA_ICON:"composer_camera_icon",COMPOSER_URL_PARAMS:"composer_url_params",ADS_CREATE_FLOW:"ads_create_flow",ADS_CREATE_FLOW_PLATFORM:"ads_create_flow_platform",ADS_POWER_EDITOR:"ads_power_editor",ADS_EXTENDED_DELIVERY:"ads_extended_delivery",BOOSTED_COMPONENT:"boosted_component",UNKNOWN:"unknown"};}),

null);

/** __static_js_modules__/slideshowframeimagesrequesttype.js */




__d("SlideshowFrameImagesRequestType",[],(function a(b,c,d,e,f,g){

f.exports={SCHEDULE_ASYNC_JOB:0,FETCH_FRAME_IMAGES:1};}),

null);

/** __static_js_modules__/slideshowmusiccategory.js */




__d("SlideshowMusicCategory",[],(function a(b,c,d,e,f,g){

f.exports={ALL_TRACKS:"All Tracks",USER_UPLOADED:"User Uploaded",RECENTLY_USED:"Recently Used",ENERGETIC:"Energetic",INSPIRATIONAL:"Inspirational",FUN:"Fun",TRUSTWORTHY:"Trustworthy",MODERN:"Modern"};}),

null);

/** shared/slideshow/SlideshowImageUtil.js */





__d('SlideshowImageUtil',['invariant','SlideshowConstants','immutable'],(function a(b,c,d,e,f,g,h){

'use strict';





var i=c('SlideshowConstants').formats,



























j='-',
k=24,
l=1.3,
m=10,
n=460,
o=32,
p=.8,

q=

{getCroppingSpec:function r
(s,
t,
u,
v){

if(v&&s){
var w=Object.keys(s)[0],
x=s[w];




return {format:c('SlideshowConstants').formats.Original,
topLeft:x[0],
bottomRight:x[1]};}


return this.getFullSizeImageBoxCroppingSpec

({width:u.width?u.width:0,
height:u.height?u.height:0},


{width:t.width,
height:t.height});},




shouldCropImages:function r(s){

var t=s[0].width,
u=s[0].height;
for(var v=s,w=Array.isArray(v),x=0,v=w?v:v[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var y;if(w){if(x>=v.length)break;y=v[x++];}else{x=v.next();if(x.done)break;y=x.value;}var z=y;
if(z.width!==t||z.height!==u)
return true;}


return false;},


getCrops:function r
(s,
t,
u){
var v,
w=this.calculateDefaultCoordinates
(s,
u);

return v={},v[
t]=w,v;},






calculateCropsForFormat:function r
(s,
t,
u){

if(!s.size)
return new (c('immutable').Map)();

var v=new (c('immutable').Map)();
switch(t){
case i.Original:
var w=s.first(),
x=u.get(w.key),
y=x.height,
z=x.width;
s.forEach
(function(aa){
v=v.set
(aa.key,
this.getCrops
(u.get(aa.key),
z+
c('SlideshowConstants').SIZE_DELIMITER+y,
z/y));}.


bind(this));

break;
case i.Wide:
s.forEach
(function(aa){
v=v.set
(aa.key,
this.getCrops
(u.get(aa.key),
t,
c('SlideshowConstants').LANDSCAPE_ASPECT_RATIO));}.


bind(this));

break;
case i.Square:
s.forEach
(function(aa){
v=v.set
(aa.key,
this.getCrops
(u.get(aa.key),
t,
c('SlideshowConstants').SQUARE_ASPECT_RATIO));}.


bind(this));

break;
case i.Vertical:
s.forEach
(function(aa){
v=v.set
(aa.key,
this.getCrops
(u.get(aa.key),
t,
c('SlideshowConstants').VERTICAL_ASPECT_RATIO));}.


bind(this));

break;
default:}

return v;},






calculateDefaultCoordinates:function r
(s,
t){

var u=void 0,
v=void 0;
if(s.width/t>s.height){
u=s.height;
v=s.height*t;}else{

v=s.width;
u=s.width/t;}


var w=(s.width-v)/2,
x=(s.height-u)/2,



y=Math.floor(w)-w,
z=Math.floor(x)-x;


return [[w+y,x+z],

[Math.round(w+v+y),
Math.round(x+u+z)]];},




getPreviewBoxDimensions:function r
(s,
t){

var u=t,
v=t;
if(s.length>0){
var w=s[0],
x=Object.keys(w)[0];
switch(x){
case c('SlideshowConstants').formats.Wide:
u=
t/c('SlideshowConstants').LANDSCAPE_ASPECT_RATIO;
break;
case c('SlideshowConstants').formats.Vertical:
v=
t*c('SlideshowConstants').VERTICAL_ASPECT_RATIO;
break;
case c('SlideshowConstants').formats.Square:
break;

default:var y=x.split(c('SlideshowConstants').SIZE_DELIMITER),
z=Number(y[0]),
aa=Number(y[1]);
if(z>aa){
u=Math.floor(v*aa/z);}else 

v=Math.floor(u*z/aa);

break;}}



return {width:v,
height:u};},



getFullSizeImageBoxCroppingSpec:function r
(s,
t){

var u=t.width/t.height,
v=this.calculateDefaultCoordinates
(s,
u);


v.length===2||h(0,
'We get top left and bottom right coordinates');


return {format:c('SlideshowConstants').formats.Original,
topLeft:v[0],
bottomRight:v[1]};},



getDefaultCroppingSpec:function r(s){
var t=this.calculateDefaultCoordinates
(s,
1);


t.length===2||h(0,
'We get top left and bottom right coordinates');


return {format:c('SlideshowConstants').formats.Square,
topLeft:t[0],
bottomRight:t[1]};},



getHorizontalAlignmentForAPI:function r
(s){

var t=s.split(j);
return t[1];},


getFontSize:function r(s){
return Math.floor(k*s);},


getFontWeight:function r(s){
return s?'bold':'normal';},


getLineHeight:function r(){
return l;},


getOpacity:function r(){
return p;},


getTextoverlayMaxEdge:function r
(s,
t){

return s-o*t*2-
m*t*2;},


getTextoverlayPadding:function r(s){
return m*s;},


getTextoverlayMargin:function r(s){
return o*s;},


getScaleMultiplierFromCrops:function r
(s){

var t=Object.keys(s)[0],
u=t.split(c('SlideshowConstants').SIZE_DELIMITER),
v=Number(u[0]),
w=Number(u[1]);
return q.getScaleMultiplier(v,w);},


getScaleMultiplier:function r
(s,
t){

return Math.max
(s/n,
t/n);},



getOuterTextboxCoordinatesForAPI:function r
(s,
t,
u){

var v=Object.keys(s)[0],
w=v.split(c('SlideshowConstants').SIZE_DELIMITER),
x=Number(w[0]),
y=Number(w[1]),
z=q.calculateTextboxCoordinates
(y,
x,
t,
u);


return [Math.floor(z.marginLeft),
Math.floor
(y-z.marginTop-z.textHeight),

Math.ceil(z.marginLeft+z.textWidth),
Math.ceil(y-z.marginTop)];},



getInnerTextboxCoordinatesForAPI:function r
(s,
t,
u){

var v=Object.keys(s)[0],
w=v.split(c('SlideshowConstants').SIZE_DELIMITER),
x=Number(w[0]),
y=Number(w[1]),
z=
q.calculateTextboxCoordinates
(y,
x,
t,
u),




aa=
q.getTextoverlayPadding(u)-4,
ba=
{marginLeft:z.marginLeft+aa,
marginTop:z.marginTop,
textHeight:z.textHeight,
textWidth:z.textWidth-2*aa};


return [Math.floor(ba.marginLeft),
Math.floor
(y-ba.marginTop-ba.textHeight),

Math.ceil(ba.marginLeft+ba.textWidth),
Math.ceil(y-ba.marginTop)];},



convertHexToRGBA:function r(s){
if(!s)
return null;

s=s.replace('#','');
var t=parseInt(s.substring(0,2),16),
u=parseInt(s.substring(2,4),16),
v=parseInt(s.substring(4,6),16);
return 'rgba('+t+','+u+','+v+','+
q.getOpacity()+')';},


calculateTextboxCoordinates:function r
(s,
t,
u,
v){

var w=u.text_alignment.split(j),
x=w[1],
y=w[0],

z=q.getFontSize(v),
aa=q.getTextoverlayMaxEdge
(t,
v),

ba=q.getTextoverlayMaxEdge
(s,
v),



ca=document.createElement('div');
ca.textContent=u.textoverlay_content?
u.textoverlay_content:
'';
ca.style.visibility='hidden';
ca.style.display='inline-block';
ca.style.wordWrap='break-word';
ca.style.whiteSpace='pre-wrap';
ca.style.fontFamily=u.font;
ca.style.fontWeight=q.getFontWeight
(u.bold);

ca.style.fontSize=z+'px';
ca.style.textAlign=x;
ca.style.maxWidth=aa+'px';
ca.style.maxHeight=ba+'px';
ca.style.lineHeight=
q.getLineHeight()*z+'px';
ca.style.padding=
q.getTextoverlayPadding(v)+'px';
ca.style.letterSpacing='0.2px';



document.body.appendChild(ca);

var da=ca.clientWidth,
ea=ca.clientHeight;



document.body.removeChild(ca);

var fa=o*v,
ga=o*v,


ha=t-o*v,

ia=s-o*v;

if(x=='center'){
fa=Math.min
((t-da)/2,
ha);}else

if(x=='right')
fa=Math.min
(t-o*v-da,
ha);



if(y=='center'){
ga=Math.min
((s-ea)/2,
ia);}else

if(y=='bottom')
ga=Math.min
(s-o*v-ea,
ia);




return {marginLeft:fa,
marginTop:ga,
textHeight:ea,
textWidth:da};}};




f.exports=q;}),null);

/** shared/merge/mergeDeepInto.js */
















__d('mergeDeepInto',['invariant','mergeHelpers'],(function a(b,c,d,e,f,g,h){




'use strict';




var i=c('mergeHelpers').ArrayStrategies,
j=c('mergeHelpers').checkArrayStrategy,
k=c('mergeHelpers').checkMergeArrayArgs,
l=c('mergeHelpers').checkMergeLevel,
m=c('mergeHelpers').checkMergeObjectArgs,
n=c('mergeHelpers').isTerminal,
o=c('mergeHelpers').normalizeMergeArg,














































p=function t(u,v,w,x){
m(u,v);
l(x);
var y=v?Object.keys(v):[];
for(var z=0;z<y.length;z++){
var aa=y[z];
r(u,v,aa,w,x);}},











q=function t(u,v,w,x){
k(u,v);
l(x);

var y=Math.max(u.length,v.length);
for(var z=0;z<y;z++)
r(u,v,z,w,x);},













r=function t(u,v,w,x,y){
var z=v[w],
aa=Object.prototype.hasOwnProperty.call(v,w),
ba=aa&&n(z),
ca=aa&&Array.isArray(z),
da=
aa&&!ca&&!ca,

ea=u[w],
fa=Object.prototype.hasOwnProperty.call(u,w),
ga=fa&&n(ea),
ha=fa&&Array.isArray(ea),
ia=
fa&&!ha&&!ha;

if(ga){
if(ba){
u[w]=z;}else
if(ca){
u[w]=[];
q(u[w],z,x,y+1);}else
if(da){
u[w]={};
p(u[w],z,x,y+1);}else
if(!aa)
u[w]=ea;}else

if(ha){
if(ba){
u[w]=z;}else
if(ca){

i[x]||h(0,
'mergeDeepInto(...): Attempted to merge two arrays, but a valid '+
'ArrayStrategy was not specified.');


if(x===i.Clobber)
ea.length=0;

q(ea,z,x,y+1);}else
if(da){
u[w]={};
p(u[w],z,x,y+1);}else 
!aa;}else


if(ia){
if(ba){
u[w]=z;}else
if(ca){
u[w]=[];
q(u[w],z,x,y+1);}else
if(da){
p(ea,z,x,y+1);}else 
!aa;}else


if(!fa)
if(ba){
u[w]=z;}else
if(ca){
u[w]=[];
q(u[w],z,x,y+1);}else
if(da){
u[w]={};
p(u[w],z,x,y+1);}else 
!aa;},



































s=function t(u,v,w){
var x=o(v);
j(w);
p(u,x,w,0);};


f.exports=s;}),null);

/** shared/slideshow/SlideshowFlowTypes.js */







__d('SlideshowFlowTypes',[],(function a(b,c,d,e,f,g){

'use strict';























var h=
{SETTINGS_TAB:'SETTINGS_TAB',
MUSIC_TAB:'MUSIC_TAB',
FRAMES_TAB:'FRAMES_TAB'};



































f.exports=
{SlideshowTabKey:h};}),null);

/** shared/slideshow/SlideshowAudioUtil.js */





__d('SlideshowAudioUtil',['ix','React','SlideshowMusicCategory','Image.react','fbglyph'],(function a(b,c,d,e,f,g,h){

'use strict';










var i=

{getMusicCategoryGlyph:function j
(k){

switch(k){
case c('SlideshowMusicCategory').ALL_TRACKS:

return (c('React').createElement(c('Image.react'),
{src:h("129467")}));






case c('SlideshowMusicCategory').USER_UPLOADED:

return (c('React').createElement(c('Image.react'),
{src:h("128769")}));






case c('SlideshowMusicCategory').RECENTLY_USED:

return (c('React').createElement(c('Image.react'),
{src:h("129053")}));






case c('SlideshowMusicCategory').ENERGETIC:

return (c('React').createElement(c('Image.react'),
{src:h("128852")}));






case c('SlideshowMusicCategory').INSPIRATIONAL:

return (c('React').createElement(c('Image.react'),
{src:h("128909")}));






case c('SlideshowMusicCategory').FUN:

return (c('React').createElement(c('Image.react'),
{src:h("129302")}));






case c('SlideshowMusicCategory').TRUSTWORTHY:

return (c('React').createElement(c('Image.react'),
{src:h("128881")}));






case c('SlideshowMusicCategory').MODERN:

return (c('React').createElement(c('Image.react'),
{src:h("129337")}));







default:return null;}},



storylineMoodCompare:function j
(k,
l){

if(!k&&!l){
return true;}else
if(!k||!l)
return false;


return (k.fileName===l.fileName&&
k.moodID===l.moodID&&
JSON.stringify(k.categories)===JSON.stringify(l.categories));}};




f.exports=i;}),null);

/** www/__virtual__/x/XSlideshowShakrOAuthController.js */



__d("XSlideshowShakrOAuthController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/slideshow\/shakr\/",{});}),

null);

/** www/__virtual__/x/XSlideshowShakrPollController.js */



__d("XSlideshowShakrPollController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/slideshow\/shakr\/show\/",{});}),

null);

/** www/__virtual__/x/XSlideshowStorylineMoodAsyncController.js */



__d("XSlideshowStorylineMoodAsyncController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/slideshow\/storyline_mood\/",{target_id:{type:"FBID"}});}),

null);

/** www/__virtual__/x/XSlideshowStorylineMoodDeleteController.js */



__d("XSlideshowStorylineMoodDeleteController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/slideshow\/storyline_mood\/delete\/",{});}),

null);

/** www/__virtual__/x/XSlideshowStorylineMoodUploadController.js */



__d("XSlideshowStorylineMoodUploadController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/slideshow\/storyline_mood\/upload\/",{});}),

null);

/** www/__virtual__/x/XSlideshowVideoFrameImagesAsyncController.js */



__d("XSlideshowVideoFrameImagesAsyncController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/slideshow\/frame_images\/",{request_type:{type:"Enum",enumType:0},video_id:{type:"FBID"}});}),

null);

/** js/slideshow/data_managers/SlideshowDataManager.js */







__d('SlideshowDataManager',['AsyncRequest','Bootloader','SlideshowFrameImagesRequestType','XSlideshowShakrOAuthController','XSlideshowShakrPollController','XSlideshowStorylineMoodAsyncController','XSlideshowStorylineMoodDeleteController','XSlideshowStorylineMoodUploadController','XSlideshowVideoFrameImagesAsyncController','immutable'],(function a(b,c,d,e,f,g){

'use strict';h.prototype.


















fetchStorylineMoodSource=
function(i,
j,
k){

var l=c('XSlideshowStorylineMoodAsyncController').
getURIBuilder().
getURI();
new (c('AsyncRequest'))().
setURI(l).
setData
({storyline_mood_id:i,
total_length:j}).

setMethod('POST').
setHandler(function(m){return k(m.payload);}).
send();};
h.prototype.

fetchStorylineMoodFiles=
function(i,
j){

var k=c('XSlideshowStorylineMoodAsyncController').
getURIBuilder().
getURI();
new (c('AsyncRequest'))().
setURI(k).
setMethod('GET').
setData
({target_id:j}).

setReadOnly(true).
setHandler(function(l){return i
(this.getStorylineMoodFiles(l.payload));}.bind(this)).
send();};
h.prototype.

getStorylineMoodFiles=function(i){
var j=[];
Object.keys(i).forEach(function(k){
j.push
({moodID:k,
fileName:i[k].fileName,
categories:i[k].categories,
source:null});});


return new (c('immutable').List)(j);};
h.prototype.

scheduleFrameImagesAsyncJob=function(i){
var j=c('XSlideshowVideoFrameImagesAsyncController').
getURIBuilder().
getURI();
new (c('AsyncRequest'))().
setURI(j).
setData
({request_type:c('SlideshowFrameImagesRequestType').SCHEDULE_ASYNC_JOB,
video_id:i}).

setMethod('POST').
send();};
h.prototype.

fetchVideoFrameImages=
function(i,
j){

var k=c('XSlideshowVideoFrameImagesAsyncController').
getURIBuilder().
getURI();
new (c('AsyncRequest'))().
setURI(k).
setData
({request_type:c('SlideshowFrameImagesRequestType').FETCH_FRAME_IMAGES,
video_id:j}).

setMethod('POST').
setHandler(function(l){return i(l.payload);}).
send();};
h.prototype.

uploadAudioFile=
function(i,
j,
k,
l){

if(!i||!i.input||!i.input.files.length)
return;

var m=c('XSlideshowStorylineMoodUploadController').
getURIBuilder().
getURI(),
n=new FormData();
n.append('audio_file',i.input.files[0]);
n.append('target_id',j);
new (c('AsyncRequest'))().
setURI(m).
setRawData(n).
setMethod('POST').
setErrorHandler(function(o){return l();}).
setHandler(function(o){
return (this.$SlideshowDataManager_handleFileUploadResponse
(o.payload,
k,
l));}.bind(this)).


send();
i.clear();};
h.prototype.

$SlideshowDataManager_handleFileUploadResponse=
function(i,
j,
k){

if(i.success){

j
({moodID:i.moodID,
fileName:i.fileName,
categories:i.categories,
source:null});}else 


k();};

h.prototype.

deleteAudioFile=
function(i){

var j=c('XSlideshowStorylineMoodDeleteController').
getURIBuilder().
getURI();
new (c('AsyncRequest'))().
setURI(j).
setData
({mood_id:i}).

setMethod('POST').
send();};
h.prototype.

getShakrScopeToken=function(i){
var j=c('XSlideshowShakrOAuthController').getURIBuilder();
new (c('AsyncRequest'))().
setURI(j.getURI()).
setHandler(function(k){return i(k.payload);}).
send();};
h.prototype.

pollShakrForVideoURL=function(i,j){
var k=c('XSlideshowShakrPollController').getURIBuilder();
new (c('AsyncRequest'))().
setURI(k.getURI()).
setData({show_id:i}).
setHandler(function(l){return j(l.payload);}).
send();};
function h(){}


f.exports=new h();}),null);

/** js/slideshow/util/SlideshowUtil.js */







__d('SlideshowUtil',['SlideshowConstants','SlideshowImageUtil','immutable'],(function a(b,c,d,e,f,g){

'use strict';








var h=1000,
i=2,

j=
{getDurationParam:function k
(l,
m,
n){

var o=Math.min
(l,
c('SlideshowConstants').max_photo_num),

p=h*m,
q=n*(o-1),
r=Math.floor
((p-q)/o);


return {durationInMS:r,
transitionInMS:n};},



getTotalLengthInSec:function k
(l,
m){

var n=Math.min
(m,
c('SlideshowConstants').max_photo_num);

return Math.round
(l*n/h);},



getMaximumTotalLengthInMS:function k(){
var l=c('SlideshowConstants').max_photo_num,
m=
c('SlideshowConstants').image_duration_in_sec_options.slice(-1)[0];

return l*m*h;},


getTotalNumFramesFromVideo:function k(){
return c('SlideshowConstants').frames_from_video.default_num_selected_frames+
i;},


getSelectedFramesFromVideo:function k
(l,
m){



var n=l.length>=m+2?2:0,
o=l.length-n,
p=n==2?1:0,
q=o+p,
r=new (c('immutable').List)(),
s=Math.max(1,(o-1)/(m-1));
while(p<q){
r=r.push(l[Math.floor(p)]);
p+=s;}

return r;},


convertHexToRGB:function k(l,m){
if(!l)
return null;

l=l.replace('#','');
var n=parseInt(l.substring(0,2),16),
o=parseInt(l.substring(2,4),16),
p=parseInt(l.substring(4,6),16),
q=m?1:c('SlideshowImageUtil').getOpacity();
return [Math.round(255*q),n,o,p];},


getTextoverlayParam:function k
(l,
m){

if(!l.textoverlay_content)

return [{text_content:' ',
textbox_coordinates:[0,0,0,0]}];



var n=
c('SlideshowImageUtil').getScaleMultiplierFromCrops(m);


return [{background_color:
j.convertHexToRGB(l.background_color,false),
text_content:' ',
textbox_coordinates:
c('SlideshowImageUtil').getOuterTextboxCoordinatesForAPI
(m,
l,
n)},



{text_content:l.textoverlay_content,
textbox_coordinates:
c('SlideshowImageUtil').getInnerTextboxCoordinatesForAPI
(m,
l,
n),

text_color:j.convertHexToRGB(l.font_color,true),




text_font:l.font==='Helvetica Neue Slideshow'?
'Helvetica Neue':
l.font,
text_weight:l.bold,
text_halign:c('SlideshowImageUtil').getHorizontalAlignmentForAPI
(l.text_alignment),

text_size:c('SlideshowImageUtil').getFontSize(n)}];}};





f.exports=j;}),null);

/** shared/slideshow/SlideshowCreationWaterfallLogger.js */







__d('SlideshowCreationWaterfallLogger',['MarauderLogger'],(function a(b,c,d,e,f,g){





var h=
{logEvent:function i
(j,
k,
l){

k=k||{};

c('MarauderLogger').log
(j,
l,
k,
undefined,
undefined,
undefined);}};




f.exports=h;}),null);

/** js/composerx/ComposerXPages.js */




__d('ComposerXPages',['Arbiter','CurrentUser','DOM','DOMScroll','URI','Event','ge','ReactComposerAttachmentActions','ReactComposerAttachmentType','ReactComposerEvents','ReactComposerMediaAttachmentType','ReactComposerSlideshowActions','ReactComposerSlideshowLoggingStore','SlideshowEntrypoint'],(function a(b,c,d,e,f,g){


















var h=

{initScrollToComposer:function i(j){
c('Event').listen
(j,
'click',
function(){
this._scrollAndFocus(c('ge')('pagelet_timeline_recent'));}.
bind(this));},




initScrollToComposerWithUserVoice:function i(j,k){
c('Event').listen
(j,
'click',
function(){
var l=c('ge')(k);
c('Arbiter').inform('ComposerXPages/composePostWithActor',
{actorID:c('CurrentUser').getID(),
callback:function m(){
c('DOM').find(l,'textarea.input').focus();}});


this._scrollAndFocus(l);}.
bind(this));},




scrollToComposer:function i(j){
var k=window.location.href;

if(c('URI').getRequestURI().getQueryData().focus_composer||
c('URI').getRequestURI().getQueryData().scroll_to_composer){

c('Event').listen(window,'load',function(){
this._scrollAndFocus(j);}.
bind(this));}else
if(k.indexOf("focus_composer")!=-1)
this._scrollAndFocus(j);},




registerForAutoClose:function i(j,k){
c('Arbiter').subscribe
('Pages/composeFinished',
function(l,m){
if(m.composerID===k){
if(j)
j.hide();

if(m.contentID)
c('Arbiter').inform('composer/publish',
{content_id:m.contentID,
matchData:
{content_id:m.contentID}});}});






c('Arbiter').subscribe
(c('ReactComposerEvents').COMPOSER_RESET+k,
function(l,m){
this.registerForAutoClose(j,m.newComposerID);}.
bind(this));},




openMediaTab:function i(j,k){
c('ReactComposerAttachmentActions').selectAttachment
(j,
c('ReactComposerAttachmentType').MEDIA,
true);

if(k===c('ReactComposerMediaAttachmentType').SLIDESHOW){
c('ReactComposerSlideshowLoggingStore').activate();
c('ReactComposerSlideshowActions').showSlideshowDialog
(j,
c('SlideshowEntrypoint').COMPOSER_URL_PARAMS);}},




_scrollAndFocus:function i(j){
c('DOMScroll').scrollTo
(j,
500,
false,
false,
0,
function(){
c('DOM').find(j,'textarea.input').focus();});}};





f.exports=h;}),null);

/** js/modules/isNumberLike.js */





__d("isNumberLike",[],(function a(b,c,d,e,f,g){





function h(i){
return !isNaN(parseFloat(i))&&isFinite(i);}


f.exports=h;}),null);

/** shared/merge/mergeDeep.js */




__d('mergeDeep',['mergeHelpers','mergeDeepInto'],(function a(b,c,d,e,f,g){

'use strict';




var h=c('mergeHelpers').checkArrayStrategy,
i=c('mergeHelpers').checkMergeObjectArgs,
j=c('mergeHelpers').normalizeMergeArg,









k=function l(m,n,o){
var p=j(m),
q=j(n);
i(p,q);
h(o);
var r={};





c('mergeDeepInto')(r,p,o);
c('mergeDeepInto')(r,q,o);
return r;};



f.exports=k;}),null);

/** www/__virtual__/x/XCommerceSelfServeMerchantNUXSeenController.js */



__d("XCommerceSelfServeMerchantNUXSeenController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/commerce\/self-serve\/merchant\/mark-nux-seen\/",{page_id:{type:"Int",required:true},nux_type:{type:"Enum",required:true,enumType:1},event:{type:"Enum",defaultValue:"Actn_NuxSeen",enumType:1}});}),

null);
