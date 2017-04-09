if (self.CavalryLogger) { CavalryLogger.start_js(["5DSBA"]); }

/** __static_js_modules__/sphericalphotoviewerlogevents.js */




__d("SphericalPhotoViewerLogEvents",[],(function a(b,c,d,e,f,g){

f.exports={CDN_IMAGE_FAILURE:"spherical_photo_cdn_image_failure",CUBE_LOAD_TIME:"spherical_photo_cube_load_time",DRAG_MOUSE_ANIMATION:"spherical_photo_drag_mouse_animation",DRAG_START:"spherical_photo_drag_start",ENTER_FULLSCREEN:"spherical_photo_tap_feed_to_fullscreen",EXIT_FULLSCREEN:"spherical_photo_fullscreen_exited",FALLBACK_LEARNMORE:"spherical_photo_fallback_learnmore",FALLBACK_PREVIEW:"spherical_photo_fallback_preview",FEED_VP_ENTERED:"spherical_photo_feed_vp_entered",FEED_VP_EXITED:"spherical_photo_feed_vp_exited",LOADED:"spherical_photo_loaded",MOUSEOVER_START:"spherical_photo_mouseover_start",PHONE_PAN_ANIMATION:"spherical_photo_phone_pan_animation",RENDER_FRAME_RATE:"spherical_photo_render_frame_rate",RENDERER_SETUP:"spherical_photo_renderer_setup",RENDERER_STATS:"spherical_photo_renderer_stats",SHOW_VIEW_IN_VR:"spherical_photo_show_view_in_vr",SIGNIFICANT_MOVEMENT:"spherical_photo_significant_movement",TAP_HEADING_INDICATOR:"spherical_photo_tap_heading_indicator",TAP_VIEW_IN_VR:"spherical_photo_tap_view_in_vr",WEBGL_CONTEXT_LOST:"spherical_photo_webgl_context_lost",WEBGL_INIT_FAILURE:"spherical_photo_webgl_init_failure",WEBGL_RENDER_FAILURE:"spherical_photo_webgl_render_failure",M_SENSOR_SETUP_FAILURE:"spherical_photo_m_sensor_setup_failure",WWW_ENTER_SNOWLIFT:"spherical_photo_www_enter_snowlift",WWW_EXIT_SNOWLIFT:"spherical_photo_www_exit_snowlift",WWW_GYRO_START:"spherical_photo_www_gyro_start",ZOOM_START:"spherical_photo_zoom_start",INITIAL_VIEW_MODIFIED:"spherical_photo_initial_view_modified",POST_EVENT:"spherical_photo_post_event",TOGGLE_OFF:"spherical_photo_toggle_off",TOGGLE_ON:"spherical_photo_toggle_on",WWW_IVS_OPEN:"spherical_photo_www_ivs_open",WWW_IVS_CANCEL:"spherical_photo_www_ivs_cancel",WWW_IVS_ENABLE_ON_SAVE:"spherical_photo_www_ivs_enable_on_save",WWW_IVS_DISABLE_ON_SAVE:"spherical_photo_www_ivs_disable_on_save",WWW_IVS_REQUEST_DONE:"spherical_photo_www_ivs_request_done",WWW_IVS_REQUEST_FAILED:"spherical_photo_www_ivs_request_failed",WWW_IVS_REQUEST_START:"spherical_photo_www_ivs_request_start",WWW_IVS_UPDATE_DONE:"spherical_photo_www_ivs_update_done",WWW_IVS_UPDATE_FAILED:"spherical_photo_www_ivs_update_failed",WWW_IVS_UPDATE_START:"spherical_photo_www_ivs_update_start",SERVER_IVS_UPDATE_DONE:"spherical_photo_server_ivs_update_done",SERVER_IVS_UPDATE_FAILED:"spherical_photo_server_ivs_update_failed",SERVER_IVS_UPDATE_START:"spherical_photo_server_ivs_update_start",DRAG_START_DEPRECATED:"drag_start_360_photo",PHONE_PAN_ANIMATION_DEPRECATED:"phone_pan_animation_360_photo",SHOW_VIEW_IN_VR_DEPRECATED:"show_360_photo_view_in_vr",SIGNIFICANT_MOVEMENT_DEPRECATED:"significant_movement_360_photo",TAP_FEED_TO_FULLSCREEN_DEPRECATED:"tap_360_photo_feed_to_fullscreen",TAP_HEADING_INDICATOR_DEPRECATED:"tap_360_photo_heading_indicator",TAP_VIEW_IN_VR_DEPRECATED:"tap_360_photo_view_in_vr",ZOOM_START_DEPRECATED:"zoom_start_360_photo"};}),

null);

/** js/logging/generated/SphericalPhotoViewerTypedLogger.js */





__d('SphericalPhotoViewerTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){
'use strict';



















function h(){
this.clear();}
h.prototype.





log=function(){
c('GeneratedLoggerUtils').log('spherical_photo_viewer_log:SphericalPhotoViewerLoggerConfig',this.$SphericalPhotoViewerTypedLogger_data,c('Banzai').BASIC);};
h.prototype.







logVital=function(){
c('GeneratedLoggerUtils').log('spherical_photo_viewer_log:SphericalPhotoViewerLoggerConfig',this.$SphericalPhotoViewerTypedLogger_data,c('Banzai').VITAL);};
h.prototype.




clear=function(){
this.$SphericalPhotoViewerTypedLogger_data={};
return this;};
h.prototype.






updateData=function(j){








this.$SphericalPhotoViewerTypedLogger_data=babelHelpers['extends']({},
this.$SphericalPhotoViewerTypedLogger_data,
j);

return this;};
h.prototype.




setAvgFrameRenderTime=function(j){
this.$SphericalPhotoViewerTypedLogger_data.avg_frame_render_time=j;
return this;};
h.prototype.




setAvgTextureToScreenRatio2=function(j){
this.$SphericalPhotoViewerTypedLogger_data.avg_texture_to_screen_ratio2=j;
return this;};
h.prototype.





setClientUserID=function(j){
this.$SphericalPhotoViewerTypedLogger_data.client_userid=j;
return this;};
h.prototype.




setComposerSessionID=function(j){
this.$SphericalPhotoViewerTypedLogger_data.composer_session_id=j;
return this;};
h.prototype.




setDevicePixelRatio=function(j){
this.$SphericalPhotoViewerTypedLogger_data.device_pixel_ratio=j;
return this;};
h.prototype.





setDt=function(j){
this.$SphericalPhotoViewerTypedLogger_data.dt=j;
return this;};
h.prototype.




setErrorCode=function(j){
this.$SphericalPhotoViewerTypedLogger_data.error_code=j;
return this;};
h.prototype.




setErrorMessage=function(j){
this.$SphericalPhotoViewerTypedLogger_data.error_message=j;
return this;};
h.prototype.




setErrorStackTrace=function(j){
this.$SphericalPhotoViewerTypedLogger_data.error_stack_trace=j;
return this;};
h.prototype.




setErrorType=function(j){
this.$SphericalPhotoViewerTypedLogger_data.error_type=j;
return this;};
h.prototype.




setEventType=function(j){
this.$SphericalPhotoViewerTypedLogger_data.event_type=j;
return this;};
h.prototype.





setFallbackUI=function(j){
this.$SphericalPhotoViewerTypedLogger_data.fallback_ui=j;
return this;};
h.prototype.




setMaxGpuMemoryUsed=function(j){
this.$SphericalPhotoViewerTypedLogger_data.max_gpu_memory_used=j;
return this;};
h.prototype.




setMaxTileLevel=function(j){
this.$SphericalPhotoViewerTypedLogger_data.max_tile_level=j;
return this;};
h.prototype.




setName=function(j){
this.$SphericalPhotoViewerTypedLogger_data.name=j;
return this;};
h.prototype.





setNumberOfSphericalPhoto=function(j){
this.$SphericalPhotoViewerTypedLogger_data.number_of_spherical_photo=j;
return this;};
h.prototype.




setPhotoID=function(j){
this.$SphericalPhotoViewerTypedLogger_data.photo_id=j;
return this;};
h.prototype.




setPitch=function(j){
this.$SphericalPhotoViewerTypedLogger_data.pitch=j;
return this;};
h.prototype.




setRenderMethod=function(j){
this.$SphericalPhotoViewerTypedLogger_data.render_method=j;
return this;};
h.prototype.






setSphericalPhotoSessionID=function(j){
this.$SphericalPhotoViewerTypedLogger_data.spherical_photo_session_id=j;
return this;};
h.prototype.






setSurface=function(j){
this.$SphericalPhotoViewerTypedLogger_data.surface=j;
return this;};
h.prototype.




setTotalDataLoaded=function(j){
this.$SphericalPhotoViewerTypedLogger_data.total_data_loaded=j;
return this;};
h.prototype.




setVfov=function(j){
this.$SphericalPhotoViewerTypedLogger_data.vfov=j;
return this;};
h.prototype.




setViewportHeight=function(j){
this.$SphericalPhotoViewerTypedLogger_data.viewport_height=j;
return this;};
h.prototype.




setViewportWidth=function(j){
this.$SphericalPhotoViewerTypedLogger_data.viewport_width=j;
return this;};
h.prototype.




setYaw=function(j){
this.$SphericalPhotoViewerTypedLogger_data.yaw=j;
return this;};















































var i=
{avg_frame_render_time:true,
avg_texture_to_screen_ratio2:true,
client_userid:true,
composer_session_id:true,
device_pixel_ratio:true,
dt:true,
error_code:true,
error_message:true,
error_stack_trace:true,
error_type:true,
event_type:true,
fallback_ui:true,
max_gpu_memory_used:true,
max_tile_level:true,
name:true,
number_of_spherical_photo:true,
photo_id:true,
pitch:true,
render_method:true,
spherical_photo_session_id:true,
surface:true,
total_data_loaded:true,
vfov:true,
viewport_height:true,
viewport_width:true,
yaw:true};


f.exports=h;}),null);

/** js/spherical_media/base/components/react/SphericalMediaGyroOverlay.react.js */





__d('SphericalMediaGyroOverlay.react',['cx','CSS','React','ReactDOM','joinClasses'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,








k=800,


















l=function n
(o){


var p=arguments.length<=1||arguments[1]===undefined?true:arguments[1],q=arguments.length<=2||arguments[2]===undefined?false:arguments[2];

return {gyroRoot:"_1zvy"+

(o?' '+"_2dz7":'')+
(p?' '+"_4z8s":'')+
(q?' '+"_4z8p":''),

gyroOuter:"_4z8q",
gyroInner:"_4z8r",
gyroMeridian:"_4z8t",
gyroEquator:"_4z8u",
gyroTextShell:"_4z8v",
gyroText:"_4z8w"};};

i=babelHelpers.inherits

(m,
c('React').PureComponent);j=i&&i.prototype;m.prototype.

componentDidUpdate=function(n){
if(n.isActive&&!this.props.isActive){
setTimeout(function(){return c('CSS').hide(c('ReactDOM').findDOMNode(this));}.bind(this),k);}else
if(!this.props.isActive)
c('CSS').hide(c('ReactDOM').findDOMNode(this));};

m.prototype.

componentDidMount=function(){
if(!this.props.isActive)
c('CSS').hide(c('ReactDOM').findDOMNode(this));};

m.prototype.

render=function(){var n=
this.props,o=n.className,p=n.isActive,q=n.isInfinite,r=n.isPaused,

s=l(p,q,r);


return (c('React').createElement('div',{className:c('joinClasses')(o,s.gyroRoot)},
c('React').createElement('div',{className:s.gyroOuter},
c('React').createElement('div',{className:s.gyroInner},
c('React').createElement('div',{className:s.gyroMeridian}),
c('React').createElement('div',{className:s.gyroEquator})),

c('React').createElement('div',{className:s.gyroTextShell},
c('React').createElement('span',{className:s.gyroText},'360')))));};




function m(){i.apply(this,arguments);}


f.exports=m;}),null);

/** js/photos/viewer/modules/PhotoSnowliftViewable.js */







__d('PhotoSnowliftViewable',['cx','Bootloader','CSS','DOM','EncryptedImg','Event','EventEmitter','ImageUtils','PhotoSnowliftViewableSphericalPhoto','React','ReactDOM','SphericalMediaGyroOverlay.react','Vector'],(function a(b,c,d,e,f,g,h){var i,j,k,l,m,n,

















o=2000,
p=60,
q=0,
r=0;

function s
(aa,
ba){
var ca;
if(aa.src&&aa.complete){
setTimeout(ba,0);}else 
(function(){
var da=c('Event').listen(aa,'load',function(){
da.remove();
ba();});})
();}



function t(aa,ba){
if(c('EncryptedImg').isEncrypted(ba)){



c('EncryptedImg').insertIntoDOM(ba,aa);}else 

aa.src=ba;}

i=babelHelpers.inherits

(u,c('EventEmitter'));j=i&&i.prototype;





function u(){


var aa=arguments.length<=0||arguments[0]===undefined?o:arguments[0],ba=arguments.length<=1||arguments[1]===undefined?1:arguments[1];'use strict';
j.constructor.call(this);
this.$PhotoSnowliftViewable_rootElement=c('DOM').create('div',
{className:"_2-sx",
'data-interaction-root-id':"_33_q"});

this.$PhotoSnowliftViewable_reloadTimeout=aa;
this.$PhotoSnowliftViewable_maxReloadAttempts=ba;
this.$PhotoSnowliftViewable_reloadTimerID=null;
this.$PhotoSnowliftViewable_reloadAttempts=0;
this.$PhotoSnowliftViewable_startReloadTimer();
setTimeout(function(){return this.whenReady(function(){return this.$PhotoSnowliftViewable_cancelReloadTimer();}.bind(this));}.bind(this),0);}
u.prototype.

$PhotoSnowliftViewable_startReloadTimer=function(){'use strict';
this.$PhotoSnowliftViewable_reloadTimerID=setTimeout
(function(){return this.$PhotoSnowliftViewable_onReloadTimeout();}.bind(this),
this.$PhotoSnowliftViewable_reloadTimeout);};

u.prototype.

$PhotoSnowliftViewable_onReloadTimeout=function(){'use strict';
if(this.isReady())
return;

if(this.$PhotoSnowliftViewable_reloadAttempts<this.$PhotoSnowliftViewable_maxReloadAttempts){
this.reload();
this.$PhotoSnowliftViewable_reloadAttempts++;
this.$PhotoSnowliftViewable_startReloadTimer();}else 

this.emit('loadingfailed');};

u.prototype.

reload=function(){'use strict';};

u.prototype.

$PhotoSnowliftViewable_cancelReloadTimer=function(){'use strict';
if(this.$PhotoSnowliftViewable_reloadTimerID!==null){
clearTimeout(this.$PhotoSnowliftViewable_reloadTimerID);
this.$PhotoSnowliftViewable_reloadTimerID=null;}};

u.prototype.

getElement=function(){'use strict';
return this.$PhotoSnowliftViewable_rootElement;};
u.prototype.

show=function(){'use strict';
c('CSS').show(this.getElement());};
u.prototype.

hide=function(){'use strict';
c('CSS').hide(this.getElement());};
u.prototype.


suspend=function(){'use strict';};
u.prototype.


resume=function(){'use strict';};
u.prototype.

onToggleIntoFullScreen=function(){'use strict';};
u.prototype.

onToggleOutOfFullScreen=function(){'use strict';};
u.prototype.

onEnterFullScreen=function(){'use strict';};
u.prototype.

onExitFullScreen=function(){'use strict';};
u.prototype.

getNaturalDimensions=function(){'use strict';
return this.getDimensions();};
u.prototype.

getDimensions=function(){'use strict';
return c('Vector').getElementDimensions(this.getElement());};
u.prototype.

setDimensions=function(aa){'use strict';
var ba=this.getElement();
ba.style.width=aa.x+'px';
ba.style.height=aa.y+'px';};
u.prototype.

isReady=function(){'use strict';
throw new Error
('Viewable has no concept of readiness - should be calling a subclass');};

u.prototype.

whenReady=function(aa){'use strict';
if(this.isReady()){
setTimeout(aa,0);}else 

this.once('ready',aa);};

k=babelHelpers.inherits


(v,u);l=k&&k.prototype;












function v
(aa,
ba){






var ca=arguments.length<=2||arguments[2]===undefined?false:arguments[2],da=arguments[3],ea=arguments[4],fa=arguments.length<=5||arguments[5]===undefined?false:arguments[5],ga=arguments.length<=6||arguments[6]===undefined?false:arguments[6],ha=arguments[7];'use strict';
l.constructor.call(this);
this.$PhotoSnowliftViewablePhoto_dimensions=da;
this.$PhotoSnowliftViewablePhoto_url=aa;
this.$PhotoSnowliftViewablePhoto_smallurl=ba;
this.$PhotoSnowliftViewablePhoto_highResolution=ca;
this.$PhotoSnowliftViewablePhoto_caption=ha;

this.$PhotoSnowliftViewablePhoto_fbid=ea;
this.$PhotoSnowliftViewablePhoto_disableContextMenu=fa;
this.$PhotoSnowliftViewablePhoto_logContextMenu=ga;
this.addListener
('imageloaded',
function(ia){return this.$PhotoSnowliftViewablePhoto_onImageLoaded(ia);}.bind(this));
this.$PhotoSnowliftViewablePhoto_setupImage();}
v.prototype.

$PhotoSnowliftViewablePhoto_setupImage=function(){'use strict';
if(this.$PhotoSnowliftViewablePhoto_imageElement&&this.$PhotoSnowliftViewablePhoto_imageElement.parentElement)
this.$PhotoSnowliftViewablePhoto_imageElement.parentElement.removeChild(this.$PhotoSnowliftViewablePhoto_imageElement);

var aa=c('DOM').create('img',
{className:'spotlight',
alt:this.$PhotoSnowliftViewablePhoto_caption});

this.$PhotoSnowliftViewablePhoto_imageElement=aa;

this.$PhotoSnowliftViewablePhoto_imageElement.setAttribute('aria-busy','true');
this.getElement().appendChild(this.$PhotoSnowliftViewablePhoto_imageElement);

this.$PhotoSnowliftViewablePhoto_setImageSrc(this.$PhotoSnowliftViewablePhoto_getImageUrl());
s
(this.$PhotoSnowliftViewablePhoto_imageElement,
function(){return this.emit('imageloaded',aa);}.bind(this));

this.whenReady(function(){return this.$PhotoSnowliftViewablePhoto_handleLoad();}.bind(this));

this.$PhotoSnowliftViewablePhoto_setupImageContextMenu();};
v.prototype.


$PhotoSnowliftViewablePhoto_setupImageContextMenu=function(){'use strict';
if(!this.$PhotoSnowliftViewablePhoto_disableContextMenu&&!this.$PhotoSnowliftViewablePhoto_logContextMenu)
return;


c('Bootloader').loadModules
(["PhotoDownloadTypedLogger"],
function(aa){
c('Event').listen(this.$PhotoSnowliftViewablePhoto_imageElement,'contextmenu',function(ba){
if(this.$PhotoSnowliftViewablePhoto_disableContextMenu)
ba.preventDefault();

if(this.$PhotoSnowliftViewablePhoto_logContextMenu)
new aa().
setDownloadMethod('context_menu').
setPhotoFbid(this.$PhotoSnowliftViewablePhoto_fbid).
log();}.

bind(this));}.
bind(this),'PhotoSnowliftViewable');};

v.prototype.

$PhotoSnowliftViewablePhoto_setImageSrc=function(aa){'use strict';
this.$PhotoSnowliftViewablePhoto_imageSource=aa;
t(this.$PhotoSnowliftViewablePhoto_imageElement,this.$PhotoSnowliftViewablePhoto_imageSource);};
v.prototype.

$PhotoSnowliftViewablePhoto_onImageLoaded=function(aa){'use strict';
if(this.$PhotoSnowliftViewablePhoto_imageElement!==aa)

return;

this.emit('ready');};
v.prototype.

reload=function(){'use strict';
this.$PhotoSnowliftViewablePhoto_setupImage();};
v.prototype.

$PhotoSnowliftViewablePhoto_getImageUrl=function(){'use strict';
if(this.$PhotoSnowliftViewablePhoto_highResolution)
return this.$PhotoSnowliftViewablePhoto_url;

return this.$PhotoSnowliftViewablePhoto_smallurl||this.$PhotoSnowliftViewablePhoto_url;};
v.prototype.

$PhotoSnowliftViewablePhoto_handleLoad=function(){'use strict';
this.$PhotoSnowliftViewablePhoto_imageElement.setAttribute('aria-busy','false');};
v.prototype.

isReady=function(){'use strict';
return this.$PhotoSnowliftViewablePhoto_imageElement.src&&c('ImageUtils').hasLoaded(this.$PhotoSnowliftViewablePhoto_imageElement);};
v.prototype.

getNaturalDimensions=function(){'use strict';
if(this.$PhotoSnowliftViewablePhoto_dimensions)
return this.$PhotoSnowliftViewablePhoto_dimensions;


if(this.$PhotoSnowliftViewablePhoto_imageElement&&
this.$PhotoSnowliftViewablePhoto_imageElement.naturalWidth&&
this.$PhotoSnowliftViewablePhoto_imageElement.naturalHeight)

return c('Vector').from
(this.$PhotoSnowliftViewablePhoto_imageElement.naturalWidth,
this.$PhotoSnowliftViewablePhoto_imageElement.naturalHeight);


return l.getNaturalDimensions.call(this);};
v.prototype.

$PhotoSnowliftViewablePhoto_isInHighResolution=function(){'use strict';
return this.$PhotoSnowliftViewablePhoto_imageSource===this.$PhotoSnowliftViewablePhoto_url;};
v.prototype.

onToggleIntoFullScreen=function(){'use strict';
if(!this.$PhotoSnowliftViewablePhoto_isInHighResolution())
if(this.$PhotoSnowliftViewablePhoto_imageSource!==this.$PhotoSnowliftViewablePhoto_url)
t(new Image(),this.$PhotoSnowliftViewablePhoto_url);};


v.prototype.

onEnterFullScreen=function(){'use strict';
if(!this.$PhotoSnowliftViewablePhoto_isInHighResolution())
this.$PhotoSnowliftViewablePhoto_setImageSrc(this.$PhotoSnowliftViewablePhoto_url);};

m=babelHelpers.inherits


(w,u);n=m&&m.prototype;

function w(aa){'use strict';
n.constructor.call(this);
this.$PhotoSnowliftViewableImageWrapper_imageElement=aa;
this.getElement().appendChild(aa);
if(this.$PhotoSnowliftViewableImageWrapper_imageElement.complete){
this.$PhotoSnowliftViewableImageWrapper_onImageLoaded();}else 

c('Event').listen
(this.$PhotoSnowliftViewableImageWrapper_imageElement,
'load',
function(){return this.$PhotoSnowliftViewableImageWrapper_onImageLoaded();}.bind(this));}


w.prototype.

$PhotoSnowliftViewableImageWrapper_onImageLoaded=function(){'use strict';
(function(){return this.emit('ready');}).bind(this);};
w.prototype.

isReady=function(){'use strict';
return c('ImageUtils').hasLoaded(this.$PhotoSnowliftViewableImageWrapper_imageElement);};
w.prototype.

getNaturalDimensions=function(){'use strict';

if(this.$PhotoSnowliftViewableImageWrapper_imageElement&&
this.$PhotoSnowliftViewableImageWrapper_imageElement.naturalWidth&&
this.$PhotoSnowliftViewableImageWrapper_imageElement.naturalHeight)

return c('Vector').from
(this.$PhotoSnowliftViewableImageWrapper_imageElement.naturalWidth,
this.$PhotoSnowliftViewableImageWrapper_imageElement.naturalHeight);


return n.getNaturalDimensions.call(this);};



function x
(aa,
ba){

if(aa.spherical){
return new (c('PhotoSnowliftViewableSphericalPhoto'))
(aa.url,
aa.smallurl,
aa.spherical.cubestripuri,
aa.spherical.tiledsphericalconfig,
aa.spherical.initialviewverticalfov||p,
aa.spherical.initialpitch||q,
aa.spherical.initialheading||r,
ba.shouldShowHiRes(aa),
aa.dimensions,
aa.spherical.partialLimits,
String(aa.info.fbid),
ba,
aa.spherical.photosphereMetadata);}else 


return new v
(aa.url,
aa.smallurl,
ba.shouldShowHiRes(aa),
aa.dimensions,

String(aa.info.fbid),
!!aa.info.disablecontextmenu,
!!aa.info.logcontextmenu,
aa.info.caption);}




function y(){
var aa=c('DOM').create('div',
{className:"_4yca _5nxw"});


c('ReactDOM').render
(c('React').createElement(c('SphericalMediaGyroOverlay.react'),{isActive:true}),
aa);

return aa;}


function z
(aa,
ba){

var ca=aa.parentElement,
da=new w(aa);
if(ca)
ca.appendChild(da.getElement());

if(ba)
da.getElement().appendChild(y());

return da;}


f.exports.Viewable=u;
f.exports.Photo=v;
f.exports.SphericalPhoto=c('PhotoSnowliftViewableSphericalPhoto');
f.exports.fromStreamData=x;
f.exports.fromImageElement=z;}),null);

/** js/spherical_media/base/constants/SphericalMediaActions.js */





__d('SphericalMediaActions',[],(function a(b,c,d,e,f,g){

'use strict';














f.exports=

{TURN_ON:'TURN_ON',
TURN_OFF:'TURN_OFF',
ENABLE_SPHERICAL:'ENABLE_SPHERICAL',
DISABLE_SPHERICAL:'DISABLE_SPHERICAL',

REQUEST_PHOTO_FAILED:'REQUEST_PHOTO_FAILED',
REQUEST_PHOTO:'REQUEST_PHOTO',
RECEIVE_PHOTO:'RECEIVE_PHOTO',

UPDATE_BASE:'UPDATE_BASE',
DRAG_START:'DRAG_START',
GYRO_START:'GYRO_START',
ZOOM_START:'ZOOM_START',
SIGNIFICANT_MOVE:'SIGNIFICANT_MOVE',
MOUSE_ANIMATION_START:'MOUSE_ANIMATION_START',
MOUSE_ENTER:'MOUSE_ENTER',
VIEWPORT_CLICKED:'VIEWPORT_CLICKED',
VISIBILITY_CHANGED:'VISIBILITY_CHANGED',
UPDATE_DIMENSION:'UPDATE_DIMENSION',
UPDATE_INITIAL_FOV:'UPDATE_INITIAL_FOV',
UPDATE_INITIAL_VIEWPORT:'UPDATE_INITIAL_VIEWPORT',
SETUP_RENDERER:'SETUP_RENDERER',
WEBGL_CONTEXT_LOST:'WEBGL_CONTEXT_LOST',
WEBGL_INIT_FAILED:'WEBGL_INIT_FAILED',
WEBGL_RENDER_FAILED:'WEBGL_RENDER_FAILED',
SOURCE_ONLOAD:'SOURCE_ONLOAD',
REPLACE_BASE_STATE:'REPLACE_BASE_STATE',

UPDATE_VIEW:'UPDATE_VIEW',
UPDATE_VIEWPORT:'UPDATE_VIEWPORT',
UPDATE_FOV:'UPDATE_FOV',
UPDATE_VIEWPORT_AND_FOV:'UPDATE_VIEWPORT_AND_FOV',
START_ANIMATING:'START_ANIMATING',
STOP_ANIMATING:'STOP_ANIMATING',

UPDATE_PHOTO_EDIT:'UPDATE_PHOTO_EDIT',
CANCEL_EDITING:'CANCEL_EDITING',
START_EDITING:'START_EDITING',
STOP_EDITING:'STOP_EDITING',
UPDATE_PHOTO:'UPDATE_PHOTO',
UPDATE_PHOTO_FAILED:'UPDATE_PHOTO_FAILED',
UPDATE_PHOTO_DONE:'UPDATE_PHOTO_DONE',
RESET_MOUSE_ANIMATION:'RESET_MOUSE_ANIMATION',
START_MOUSE_ANIMATION:'START_MOUSE_ANIMATION',
STOP_MOUSE_ANIMATION:'STOP_MOUSE_ANIMATION',
DISABLE_SPHERICAL_ON_SAVE:'DISABLE_SPHERICAL_ON_SAVE',
ENABLE_SPHERICAL_ON_SAVE:'ENABLE_SPHERICAL_ON_SAVE',
ENABLE_EDITING:'ENABLE_EDITING',
DISABLE_EDITING:'DISABLE_EDITING',
TAKE_STATE_SNAPSHOT:'TAKE_STATE_SNAPSHOT',
RESORE_STATE_FROM_SNAPSHOT:'RESORE_STATE_FROM_SNAPSHOT',
REMOVE_STATE_SNAPSHOT:'REMOVE_STATE_SNAPSHOT',
PHOTO_REMOVED:'PHOTO_REMOVED',
UPDATE_FILE_URL:'UPDATE_FILE_URL',
UPDATE_RESIZED_FILE_URL:'UPDATE_RESIZED_FILE_URL',
OPEN_TAG_DIALOG:'OPEN_TAG_DIALOG',
CLOSE_TAG_DIALOG:'CLOSE_TAG_DIALOG',

PHOTO_RENDERER_STATS:'PHOTO_RENDERER_STATS',

ENABLE_TAGGING:'ENABLE_TAGGING',
DISABLE_TAGGING:'DISABLE_TAGGING',
UPDATE_SPATIAL_TAGS:'UPDATE_SPATIAL_TAGS',
UPDATE_TAG_UNDER_MOUSE:'UPDATE_TAG_UNDER_MOUSE',
TAGGING_START:'TAGGING_START',
TAGGING_STOP:'TAGGING_STOP',
UPDATE_TAG_CLICKED:'UPDATE_TAG_CLICKED',
UPDATE_TAGGER:'UPDATE_TAGGER',
ENTER_TAGGING_MODE:'ENTER_TAGGING_MODE',
EXIT_TAGGING_MODE:'EXIT_TAGGING_MODE'};}),null);

/** js/spherical_media/base/constants/SphericalMediaActionNamespaces.js */





__d('SphericalMediaActionNamespaces',[],(function a(b,c,d,e,f,g){

'use strict';

f.exports=
{BASE:'BASE',
CORE:'CORE',
PHOTO:'PHOTO',
PHOTO_EDIT:'PHOTO_EDIT',
VIEW:'VIEW'};}),null);

/** js/spherical_media/base/actions/SphericalMediaBaseActions.js */





__d('SphericalMediaBaseActions',['SphericalMediaActionNamespaces','SphericalMediaActions'],(function a(b,c,d,e,f,g){

'use strict';
































































































































































































































f.exports=
{updateBase:function h
(i){


return {namespace:c('SphericalMediaActionNamespaces').BASE,
type:c('SphericalMediaActions').UPDATE_BASE,
data:i};},


dragStart:function h(){

return {namespace:c('SphericalMediaActionNamespaces').BASE,
type:c('SphericalMediaActions').DRAG_START};},


gyroStart:function h(){

return {namespace:c('SphericalMediaActionNamespaces').BASE,
type:c('SphericalMediaActions').GYRO_START};},


mouseAnimationStart:function h(){

return {namespace:c('SphericalMediaActionNamespaces').BASE,
type:c('SphericalMediaActions').MOUSE_ANIMATION_START};},


mouseEnter:function h(){

return {namespace:c('SphericalMediaActionNamespaces').BASE,
type:c('SphericalMediaActions').MOUSE_ENTER};},


significantMove:function h(i){

return {namespace:c('SphericalMediaActionNamespaces').BASE,
type:c('SphericalMediaActions').SIGNIFICANT_MOVE,
data:{view:i}};},


viewportClicked:function h(){

return {namespace:c('SphericalMediaActionNamespaces').BASE,
type:c('SphericalMediaActions').VIEWPORT_CLICKED};},


visibilityChanged:function h(i){

return {namespace:c('SphericalMediaActionNamespaces').BASE,
type:c('SphericalMediaActions').VISIBILITY_CHANGED,
data:i};},


zoomStart:function h(){

return {namespace:c('SphericalMediaActionNamespaces').BASE,
type:c('SphericalMediaActions').ZOOM_START};},


updateDimension:function h
(i,
j){


return {namespace:c('SphericalMediaActionNamespaces').BASE,
type:c('SphericalMediaActions').UPDATE_DIMENSION,
data:{width:i,height:j}};},


updateInitialViewport:function h
(i,
j){


return {namespace:c('SphericalMediaActionNamespaces').BASE,
type:c('SphericalMediaActions').UPDATE_INITIAL_VIEWPORT,
data:{initialYaw:i,initialPitch:j}};},


updateInitialFOV:function h
(i){


return {namespace:c('SphericalMediaActionNamespaces').BASE,
type:c('SphericalMediaActions').UPDATE_INITIAL_FOV,
data:{initialFov:i}};},


setupRenderer:function h
(i,
j){


return {namespace:c('SphericalMediaActionNamespaces').BASE,
type:c('SphericalMediaActions').SETUP_RENDERER,
data:{renderer:i,dt:j}};},


webGlInitFailed:function h(i){

return {namespace:c('SphericalMediaActionNamespaces').BASE,
type:c('SphericalMediaActions').WEBGL_INIT_FAILED,
data:{error:i}};},


webGlRenderFailed:function h
(i,
j){


return {namespace:c('SphericalMediaActionNamespaces').BASE,
type:c('SphericalMediaActions').WEBGL_RENDER_FAILED,
data:{error:i,view:j}};},


webGlContextLost:function h(){

return {namespace:c('SphericalMediaActionNamespaces').BASE,
type:c('SphericalMediaActions').WEBGL_CONTEXT_LOST};},


sourceOnLoad:function h(){

return {namespace:c('SphericalMediaActionNamespaces').BASE,
type:c('SphericalMediaActions').SOURCE_ONLOAD};},


replaceBaseState:function h(i){

return {namespace:c('SphericalMediaActionNamespaces').BASE,
type:c('SphericalMediaActions').REPLACE_BASE_STATE,
data:i};},


updateSpatialTags:function h(i){

return {namespace:c('SphericalMediaActionNamespaces').BASE,
type:c('SphericalMediaActions').UPDATE_SPATIAL_TAGS,
data:i};},


updateTagUnderMouse:function h(i){

return {namespace:c('SphericalMediaActionNamespaces').BASE,
type:c('SphericalMediaActions').UPDATE_TAG_UNDER_MOUSE,
data:i};},


updateFileURL:function h(i){

return {namespace:c('SphericalMediaActionNamespaces').BASE,
type:c('SphericalMediaActions').UPDATE_FILE_URL,
data:i};},


updateResizedFileURL:function h(i){

return {namespace:c('SphericalMediaActionNamespaces').BASE,
type:c('SphericalMediaActions').UPDATE_RESIZED_FILE_URL,
data:i};},


enableTagging:function h(){

return {namespace:c('SphericalMediaActionNamespaces').BASE,
type:c('SphericalMediaActions').ENABLE_TAGGING};},


disableTagging:function h(){

return {namespace:c('SphericalMediaActionNamespaces').BASE,
type:c('SphericalMediaActions').DISABLE_TAGGING};},


taggingStart:function h(){

return {namespace:c('SphericalMediaActionNamespaces').BASE,
type:c('SphericalMediaActions').TAGGING_START};},


taggingStop:function h(){

return {namespace:c('SphericalMediaActionNamespaces').BASE,
type:c('SphericalMediaActions').TAGGING_STOP};},


updateTagClicked:function h(i){

return {namespace:c('SphericalMediaActionNamespaces').BASE,
type:c('SphericalMediaActions').UPDATE_TAG_CLICKED,
data:i};},


updateTagger:function h(i){

return {namespace:c('SphericalMediaActionNamespaces').BASE,
type:c('SphericalMediaActions').UPDATE_TAGGER,
data:i};},


enterTaggingMode:function h(){

return {namespace:c('SphericalMediaActionNamespaces').BASE,
type:c('SphericalMediaActions').ENTER_TAGGING_MODE};},


exitTaggingMode:function h(){

return {namespace:c('SphericalMediaActionNamespaces').BASE,
type:c('SphericalMediaActions').EXIT_TAGGING_MODE};}};}),

null);

/** shared/spherical_media/base/constants/SphericalMediaConstants.js */





__d('SphericalMediaConstants',[],(function a(b,c,d,e,f,g){

'use strict';
































































var h=

{COMP_PHOTO_EDIT_THUMB:'PhotoEditThumbanil',
COMP_PHOTO_VIEWER:'PhotoViewer',

EDIT_VIEWPORT_SIZE:
{width:476,
height:476},



HI_ALPHA_BG:
{start:.2,
end:.5},


HI_ALPHA_ELEMENT:
{start:.5,
end:.85},


HI_ALPHA_DURATION:400,

HI_SIZE_NORMAL:
{width:35,
height:35,
center_radius:2,
background_radius:17.5,
inner_radius:12,
arc_radius:6.3,
arc_stroke:5.3,
inner_stroke:1,
triangle:[2,2.5,5.2],
rim_radius:16.8,
rim_stroke:1.4},


HI_SIZE_FULL:
{width:50,
height:50,
center_radius:3,
background_radius:25,
inner_radius:17.14,
arc_radius:9,
arc_stroke:7.57,
inner_stroke:1.5,
triangle:[2.85,4.29,7.9],
rim_radius:24,
rim_stroke:2},


HI_BLINK_ARC_RAD:Math.PI/6,

HI_BLINK_DURATION:400,


HI_FADE_OUT_DELAY:1000,


MOUSE_EXPOSURE:4000,

LOGGER_SURFACES:
{newsfeed:'newsfeed',
timeline:'timeline',
fullpage:'photo_viewer',
snowlift:'www_snowlift',
composer:'composer',
albumComposer:'album_composer',
other:'other'},


LOGGER_SIGNIFICANT_MOVEMENT_DEGREE:30,
LOGGER_SIGNIFICANT_MOVEMENT_MS:1000,


GYRO_SLIP_FACTOR:.15,


RB_SPRING_FACTOR:25,
RB_MAX_SPRING_DEGREE:15,
RB_MAX_STRETCH_X_DEGREE:20,
RB_MAX_STRETCH_Y_DEGREE:20,
RB_FRICTION:.3,
TILED_CUBE_FACES:

{PLUS_X:2,
MINUS_X:0,
PLUS_Y:4,
MINUS_Y:5,
PLUS_Z:3,
MINUS_Z:1},

TILED_CUBE_TILE_CONTENT_SIZE:510,
TILED_CUBE_TILE_PADDING_PIXELS:1,

TAG:'tag',
TAGGED_FACEBOX:'tagged_facebox',
UNTAGGED_FACEBOX:'untagged_facebox'};


f.exports=h;}),null);

/** js/spherical_media/base/components/SphericalMediaBootloaded.react.js */






__d('SphericalMediaBootloaded.react',['cx','BootloadedComponent.react','JSResource','LoadingIndicator.react','React','SphericalMediaConstants'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,






k=c('SphericalMediaConstants').COMP_PHOTO_EDIT_THUMB,l=c('SphericalMediaConstants').COMP_PHOTO_VIEWER,









m=function o
(p,
q){


return (c('React').createElement('div',{className:p,style:q},
c('React').createElement(c('LoadingIndicator.react'),
{className:"_4qlq",
size:'small',
color:'white'})));};



i=babelHelpers.inherits

(n,
c('React').PureComponent);j=i&&i.prototype;n.prototype.
render=function(){
var o=void 0;
switch(this.props.componentName){
case k:
var p=this.props.loadingElement||m
("_7d7",
{width:this.props.width,height:this.props.height});


return (c('React').createElement(c('BootloadedComponent.react'),babelHelpers['extends']
({bootloadLoader:c('JSResource')('SphericalPhotoEditThumbnail.react').__setRef('SphericalMediaBootloaded.react'),
bootloadPlaceholder:p},
this.props)));


case l:
o=c('React').createElement('div',null);

return (c('React').createElement(c('BootloadedComponent.react'),babelHelpers['extends']
({bootloadLoader:c('JSResource')('SphericalPhotoViewer.react').__setRef('SphericalMediaBootloaded.react'),
bootloadPlaceholder:o},
this.props)));



default:return null;}};

function n(){i.apply(this,arguments);}

f.exports=n;}),null);

/** js/spherical_media/photo/components/react/SphericalPhotoPlaceHolderWithGyroOverlay.react.js */





__d('SphericalPhotoPlaceHolderWithGyroOverlay.react',['cx','Image.react','React','SphericalMediaGyroOverlay.react'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j;i=babelHelpers.inherits













(k,
c('React').PureComponent);j=i&&i.prototype;k.prototype.
render=function(){

return (c('React').createElement('div',{className:"_5nxw _1c1o"},

c('React').createElement(c('Image.react'),
{className:"_1c1p",
height:this.props.height,
src:this.props.placeholderImageURL,
width:this.props.width}),

c('React').createElement(c('SphericalMediaGyroOverlay.react'),
{className:"_1c1q",
isActive:true})));};



function k(){i.apply(this,arguments);}


f.exports=k;}),null);

/** js/spherical_media/photo/logger/SphericalPhotoViewerLoggerUtil.js */





__d('SphericalPhotoViewerLoggerUtil',['CSS','FullScreen','ProfileTabUtils','SphericalPhotoViewerLogEvents','SphericalPhotoViewerTypedLogger','TimelineURI','URI','SphericalMediaConstants'],(function a(b,c,d,e,f,g){

'use strict';









var h='timelineLayout',

i=c('SphericalMediaConstants').LOGGER_SURFACES,



































j=function l(){

if(c('FullScreen').isFullScreen())
return i.fullpage;


var m=c('URI').getMostRecentURI();



if(Object.prototype.hasOwnProperty.call(m.getQueryData(),'theater'))
return i.snowlift;




if(m.getPath()==='/'||m.getPath()==='/home.php')
return i.newsfeed;



var n=c('TimelineURI').getTabKeyFromURI(m),
o=c('TimelineURI').getVanityFromURI(m);

if(o&&
c('ProfileTabUtils').isTimelineTab(n)&&
c('CSS').hasClass(document.body,h))

return i.timeline;



return i.other;},


k=



{logTapHeadingIndicator:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];
k._log
(c('SphericalPhotoViewerLogEvents').TAP_HEADING_INDICATOR,
m);},


logDragStart:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];
k._log
(c('SphericalPhotoViewerLogEvents').DRAG_START,
m);},


logMouseOverStart:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];
k._log
(c('SphericalPhotoViewerLogEvents').MOUSEOVER_START,
m);},


logWWWGyroStart:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];
k._log
(c('SphericalPhotoViewerLogEvents').WWW_GYRO_START,
m);},


logZoomStart:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];
k._log
(c('SphericalPhotoViewerLogEvents').ZOOM_START,
m);},


logDragMouseAnimation:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];
k._log
(c('SphericalPhotoViewerLogEvents').DRAG_MOUSE_ANIMATION,
m);},


logEnterSnowlift:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];
k._log
(c('SphericalPhotoViewerLogEvents').WWW_ENTER_SNOWLIFT,
m);},


logExitSnowlift:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];
k._log
(c('SphericalPhotoViewerLogEvents').WWW_EXIT_SNOWLIFT,
m);},


logEnterFullScreen:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];
k._log
(c('SphericalPhotoViewerLogEvents').ENTER_FULLSCREEN,
m);},


logExitFullScreen:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];
k._log
(c('SphericalPhotoViewerLogEvents').EXIT_FULLSCREEN,
m);},


logSignificantMovement:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];
k._log
(c('SphericalPhotoViewerLogEvents').SIGNIFICANT_MOVEMENT,
m);},


logIVSOpen:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];
k._log
(c('SphericalPhotoViewerLogEvents').WWW_IVS_OPEN,
m);},


logIVSCancel:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];
k._log
(c('SphericalPhotoViewerLogEvents').WWW_IVS_CANCEL,
m);},


logIVSEnableSphericalOnSave:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];
k._log
(c('SphericalPhotoViewerLogEvents').WWW_IVS_ENABLE_ON_SAVE,
m);},


logIVSDisableSphericalOnSave:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];
k._log
(c('SphericalPhotoViewerLogEvents').WWW_IVS_DISABLE_ON_SAVE,
m);},


logToggleOn:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];
k._log
(c('SphericalPhotoViewerLogEvents').TOGGLE_ON,
m);},


logToggleOff:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];
k._log
(c('SphericalPhotoViewerLogEvents').TOGGLE_OFF,
m);},


logIVSRequestStart:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];
k._log
(c('SphericalPhotoViewerLogEvents').WWW_IVS_REQUEST_START,
m);},


logIVSRequestFailed:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];
k._log
(c('SphericalPhotoViewerLogEvents').WWW_IVS_REQUEST_FAILED,
m);},


logIVSRequestDone:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];
k._log
(c('SphericalPhotoViewerLogEvents').WWW_IVS_REQUEST_DONE,
m);},


logIVSUpdateStart:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];
k._log
(c('SphericalPhotoViewerLogEvents').WWW_IVS_UPDATE_START,
m);},


logIVSUpdateFailed:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];
k._log
(c('SphericalPhotoViewerLogEvents').WWW_IVS_UPDATE_FAILED,
m);},


logIVSUpdateDone:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];
k._log
(c('SphericalPhotoViewerLogEvents').WWW_IVS_UPDATE_DONE,
m);},


logWebGlInitFailed:function l(){


var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0],n=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];
k._log
(c('SphericalPhotoViewerLogEvents').WEBGL_INIT_FAILURE,
m,
n);},


logWebGlRenderFailed:function l(){


var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0],n=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];
k._log
(c('SphericalPhotoViewerLogEvents').WEBGL_RENDER_FAILURE,
m,
n);},


logWebGlContextLost:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];
k._log
(c('SphericalPhotoViewerLogEvents').WEBGL_CONTEXT_LOST,
m);},


logNumberOfSphericalPhoto:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];
k._log
(c('SphericalPhotoViewerLogEvents').POST_EVENT,
m);},


logRendererSetup:function l(){


var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0],n=arguments[1];
m.renderMethod=n?'tiled':'cubestrip';
k._log
(c('SphericalPhotoViewerLogEvents').RENDERER_SETUP,
m);},


logRendererStats:function l(){


var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0],n=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];
k._log
(c('SphericalPhotoViewerLogEvents').RENDERER_STATS,
m,
n);},



_log:function l
(m,
n){

var o=arguments.length<=2||arguments[2]===undefined?{}:arguments[2];
n.surface=n.surface||j();



new (c('SphericalPhotoViewerTypedLogger'))().
setComposerSessionID(n.composerSessionID).
setDt(n.dt).
setErrorMessage(n.errorMessage).
setName(m).
setNumberOfSphericalPhoto(n.numberOfSphericalPhoto).
setPhotoID(n.photoID).
setPitch(n.pitch).
setRenderMethod(n.renderMethod||'').
setSphericalPhotoSessionID(n.sessionID).
setSurface(n.surface).
setVfov(n.vfov).
setViewportHeight(n.viewportHeight).
setViewportWidth(n.viewportWidth).
setYaw(n.yaw).
updateData(o).
log();}};



f.exports=k;}),null);

/** js/spherical_media/photo/snowlift/PhotoSnowliftViewableSphericalPhoto.js */





__d('PhotoSnowliftViewableSphericalPhoto',['cx','Arbiter','CSS','DOM','React','ReactDOM','SphericalMediaActions','SphericalMediaBootloaded.react','SphericalPhotoConfig','SphericalPhotoPlaceHolderWithGyroOverlay.react','SubscriptionsHandler','Vector','SphericalMediaConstants','PhotoSnowliftViewable','SphericalMediaBaseActions','getViewportDimensions','SphericalPhotoViewerLoggerUtil'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,













k=c('SphericalMediaConstants').COMP_PHOTO_VIEWER,l=c('SphericalMediaConstants').LOGGER_SURFACES,
m=c('PhotoSnowliftViewable').Viewable,

n=c('SphericalMediaBaseActions').enterTaggingMode,
o=c('SphericalMediaBaseActions').exitTaggingMode,
p=c('SphericalMediaBaseActions').updateDimension,
q=c('SphericalMediaBaseActions').updateSpatialTags,
r=c('SphericalMediaBaseActions').updateTagger,




s=c('SphericalPhotoViewerLoggerUtil').logEnterFullScreen,
t=c('SphericalPhotoViewerLoggerUtil').logEnterSnowlift,
u=c('SphericalPhotoViewerLoggerUtil').logExitFullScreen,
v=c('SphericalPhotoViewerLoggerUtil').logExitSnowlift,


w=2000*16,


x=360;i=babelHelpers.inherits













(y,m);j=i&&i.prototype;


















function y
(aa,
ba,
ca,
da,
ea,
fa,
ga){






var ha=arguments.length<=7||arguments[7]===undefined?false:arguments[7],ia=arguments[8],ja=arguments[9],ka=arguments[10],la=arguments[11],ma=arguments[12];
j.constructor.call(this,w);z.call(this);
this.$PhotoSnowliftViewableSphericalPhoto_cubeImageURI=ca;
this.$PhotoSnowliftViewableSphericalPhoto_dimensions=ia;
this.$PhotoSnowliftViewableSphericalPhoto_fbid=ka;
this.$PhotoSnowliftViewableSphericalPhoto_fullscreen=false;
this.$PhotoSnowliftViewableSphericalPhoto_highResolution=ha;
this.$PhotoSnowliftViewableSphericalPhoto_isReady=false;
this.$PhotoSnowliftViewableSphericalPhoto_isRenderReady=false;
this.$PhotoSnowliftViewableSphericalPhoto_partialLimits=ja;
this.$PhotoSnowliftViewableSphericalPhoto_photoSnowlift=la;
this.$PhotoSnowliftViewableSphericalPhoto_smallurl=ba;
this.$PhotoSnowliftViewableSphericalPhoto_subscriptions=new (c('SubscriptionsHandler'))();
this.$PhotoSnowliftViewableSphericalPhoto_tiledSphericalConfig=da;
this.$PhotoSnowliftViewableSphericalPhoto_url=aa;
this.$PhotoSnowliftViewableSphericalPhoto_photoSphereMetadata=ma;



this.$PhotoSnowliftViewableSphericalPhoto_elementViewer=c('DOM').create('div',
{className:"_zq_ _5nxw"});


this.$PhotoSnowliftViewableSphericalPhoto_elementPlaceholder=c('DOM').create('div',
{className:"_zr0 _5nxw"});


this.getElement().appendChild(this.$PhotoSnowliftViewableSphericalPhoto_elementViewer);
this.getElement().appendChild(this.$PhotoSnowliftViewableSphericalPhoto_elementPlaceholder);

c('CSS').addClass(this.getElement(),"_zr1");

this.$PhotoSnowliftViewableSphericalPhoto_initialView=
{fov:ea,
pitch:fa,
yaw:ga};



c('CSS').addClass
(this.$PhotoSnowliftViewableSphericalPhoto_photoSnowlift.stage,
"_1ziy");


this.$PhotoSnowliftViewableSphericalPhoto_setup();
t(this.$PhotoSnowliftViewableSphericalPhoto_getLogInfo());}
y.prototype.

$PhotoSnowliftViewableSphericalPhoto_getLogInfo=function(){

return {photoID:this.$PhotoSnowliftViewableSphericalPhoto_fbid,
surface:l.snowlift};};

y.prototype.

$PhotoSnowliftViewableSphericalPhoto_setup=function(){
var aa=this.$PhotoSnowliftViewableSphericalPhoto_getElementDimensions(),
ba=
[this.$PhotoSnowliftViewableSphericalPhoto_hidePlaceholderOnReady,
this.$PhotoSnowliftViewableSphericalPhoto_bindResizeEventWithViewer];


if(c('SphericalPhotoConfig').www_can_viewer_tag)
ba.push(this.$PhotoSnowliftViewableSphericalPhoto_updateSpatialTaggingData);


c('ReactDOM').render
(c('React').createElement(c('SphericalPhotoPlaceHolderWithGyroOverlay.react'),
{placeholderImageURL:this.$PhotoSnowliftViewableSphericalPhoto_getImageUrl()}),

this.$PhotoSnowliftViewableSphericalPhoto_elementPlaceholder);


c('ReactDOM').render
(c('React').createElement(c('SphericalMediaBootloaded.react'),
{componentName:k,
canvasNamespace:'Snowlift',
cubeImageURI:this.$PhotoSnowliftViewableSphericalPhoto_cubeImageURI,
enableGyro:true,
enableZoom:true,
enableRubberBanding:true,
height:aa.y,
initialView:this.$PhotoSnowliftViewableSphericalPhoto_initialView,
photoID:this.$PhotoSnowliftViewableSphericalPhoto_fbid,
partialLimits:this.$PhotoSnowliftViewableSphericalPhoto_partialLimits,
photoSphereMetadata:this.$PhotoSnowliftViewableSphericalPhoto_photoSphereMetadata,
surface:l.snowlift,
tiledSphericalConfig:this.$PhotoSnowliftViewableSphericalPhoto_tiledSphericalConfig,
middlewares:ba,
width:aa.x}),

this.$PhotoSnowliftViewableSphericalPhoto_elementViewer);

this.$PhotoSnowliftViewableSphericalPhoto_isReady=true;
this.emit('ready');};
y.prototype.



































































$PhotoSnowliftViewableSphericalPhoto_unmountReactModules=function(){
c('ReactDOM').unmountComponentAtNode(this.$PhotoSnowliftViewableSphericalPhoto_elementPlaceholder);
c('ReactDOM').unmountComponentAtNode(this.$PhotoSnowliftViewableSphericalPhoto_elementViewer);};
y.prototype.

suspend=function(){
this.$PhotoSnowliftViewableSphericalPhoto_unmountReactModules();};
y.prototype.

resume=function(){
this.$PhotoSnowliftViewableSphericalPhoto_setup();};
y.prototype.

reload=function(){
this.$PhotoSnowliftViewableSphericalPhoto_setup();};
y.prototype.

hide=function(){
if(c('CSS').shown(this.getElement()))
v(this.$PhotoSnowliftViewableSphericalPhoto_getLogInfo());

j.hide.call(this);
this.$PhotoSnowliftViewableSphericalPhoto_unmountReactModules();};
y.prototype.

getDimensions=function(){var aa=


c('getViewportDimensions')(),ba=aa.width,ca=aa.height;
if(c('SphericalPhotoConfig').should_snowlift_fit_to_screen){


if(!this.$PhotoSnowliftViewableSphericalPhoto_fullscreen)
ba-=x;


if(this.$PhotoSnowliftViewableSphericalPhoto_partialLimits&&this.$PhotoSnowliftViewableSphericalPhoto_partialLimits.partialTopDegrees||
!this.isRenderReady())

ba=ca=Math.min(ba,ca);}else 


ba=ca=Math.min(ba,ca);

return c('Vector').from(ba,ca);};
y.prototype.

$PhotoSnowliftViewableSphericalPhoto_getElementDimensions=function(){
return c('Vector').getElementDimensions(this.getElement());};
y.prototype.


$PhotoSnowliftViewableSphericalPhoto_normalizeDimensions=function(aa){
var ba=this.getElement().parentElement,
ca=new (c('Vector'))(aa.x,aa.y);
if(ba){

var da=c('Vector').getElementDimensions(ba),
ea=c('Vector').getElementDimensions(this.getElement());

if(da.x!==ea.x||
ca.x<da.x||
ca.y<da.y){

ca.x=da.x;
ca.y=da.y;}}


return ca;};
y.prototype.

isReady=function(){
return this.$PhotoSnowliftViewableSphericalPhoto_isReady;};
y.prototype.

isRenderReady=function(){
return this.$PhotoSnowliftViewableSphericalPhoto_isRenderReady;};
y.prototype.

setDimensions=function(aa){
j.setDimensions.call(this,this.$PhotoSnowliftViewableSphericalPhoto_normalizeDimensions(aa));
this.emit('onSetDimensions');};
y.prototype.

onToggleIntoFullScreen=function(){};y.prototype.

onEnterFullScreen=function(){
if(this.$PhotoSnowliftViewableSphericalPhoto_fullscreen)
return;

this.$PhotoSnowliftViewableSphericalPhoto_fullscreen=true;
this.emit('onEnterFullScreen');
s(this.$PhotoSnowliftViewableSphericalPhoto_getLogInfo());};
y.prototype.

onExitFullScreen=function(){
if(!this.$PhotoSnowliftViewableSphericalPhoto_fullscreen)
return;

this.$PhotoSnowliftViewableSphericalPhoto_fullscreen=false;
this.emit('onExitFullScreen');
u(this.$PhotoSnowliftViewableSphericalPhoto_getLogInfo());};
y.prototype.

$PhotoSnowliftViewableSphericalPhoto_getImageUrl=function(){
return this.$PhotoSnowliftViewableSphericalPhoto_highResolution?this.$PhotoSnowliftViewableSphericalPhoto_url:this.$PhotoSnowliftViewableSphericalPhoto_smallurl||this.$PhotoSnowliftViewableSphericalPhoto_url;};
var z=function aa(){this.$PhotoSnowliftViewableSphericalPhoto_updateSpatialTaggingData=function(ba){var ca=ba.dispatch;c('Arbiter').subscribe(this.$PhotoSnowliftViewableSphericalPhoto_photoSnowlift.getEventString('EXTRA_DATA_CHANGE'),function(da,ea){ca(q(ea.spatialTags));});if(this.$PhotoSnowliftViewableSphericalPhoto_photoSnowlift.getTagger()){ca(r(this.$PhotoSnowliftViewableSphericalPhoto_photoSnowlift.getTagger()));}else c('Arbiter').subscribe(this.$PhotoSnowliftViewableSphericalPhoto_photoSnowlift.getEventString('TAGGER_READY'),function(da,ea){ca(r(this.$PhotoSnowliftViewableSphericalPhoto_photoSnowlift.getTagger()));}.bind(this));c('Arbiter').subscribe(this.$PhotoSnowliftViewableSphericalPhoto_photoSnowlift.getEventString('START_TAGGING'),function(da,ea){ca(n());});c('Arbiter').subscribe(this.$PhotoSnowliftViewableSphericalPhoto_photoSnowlift.getEventString('STOP_TAGGING'),function(da,ea){ca(o());});return function(da){return function(ea){return da(ea);};};}.bind(this);this.$PhotoSnowliftViewableSphericalPhoto_hidePlaceholderOnReady=function(){return function(ba){return function(ca){if(ca.type===c('SphericalMediaActions').SETUP_RENDERER){this.$PhotoSnowliftViewableSphericalPhoto_isRenderReady=true;c('CSS').hide(this.$PhotoSnowliftViewableSphericalPhoto_elementPlaceholder);this.$PhotoSnowliftViewableSphericalPhoto_photoSnowlift.adjustStageSize();}return ba(ca);}.bind(this);}.bind(this);}.bind(this);this.$PhotoSnowliftViewableSphericalPhoto_bindResizeEventWithViewer=function(ba){var ca=ba.dispatch;return function(da){return function(ea){if(ea.type===c('SphericalMediaActions').TURN_ON){var fa=function(){var ga=this.$PhotoSnowliftViewableSphericalPhoto_getElementDimensions();ca(p(ga.x,ga.y));}.bind(this);this.$PhotoSnowliftViewableSphericalPhoto_subscriptions.addSubscriptions(this.addListener('onEnterFullScreen',fa),this.addListener('onExitFullScreen',fa),this.addListener('onSetDimensions',fa));fa();}else if(ea.type===c('SphericalMediaActions').TURN_OFF)this.$PhotoSnowliftViewableSphericalPhoto_subscriptions.release();return da(ea);}.bind(this);}.bind(this);}.bind(this);};


f.exports=y;}),null);
