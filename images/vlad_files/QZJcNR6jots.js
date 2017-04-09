if (self.CavalryLogger) { CavalryLogger.start_js(["j6d9H"]); }

/** __static_js_modules__/spotlightviewerloggingevents.js */




__d("SpotlightViewerLoggingEvents",[],(function a(b,c,d,e,f,g){

f.exports={LOADED:"loaded",LOADING:"loading",ERROR:"error",ABORT:"abort",OPEN_BEGIN:"open_begin",OPEN_COMPLETE:"open_complete",CLOSE_BEGIN:"close_begin",CLOSE_COMPLETE:"close_complete",PAGE_BEGIN:"page_begin",PAGE_COMPLETE:"page_complete",PHOTO_CHANGE_BEGIN:"photo_change_begin",PHOTO_CHANGE_COMPLETE:"photo_change_complete",DATA_FETCH_BEGIN:"data_fetch_begin",DATA_FETCH_COMPLETE:"data_fetch_complete",PHOTO_FETCH:"photo_fetch"};}),

null);

/** js/modules/ImageUtils.js */




__d('ImageUtils',['UserAgent_DEPRECATED'],(function a(b,c,d,e,f,g){































































var h=





{hasLoaded:function i(j){

if(j.naturalWidth!==undefined){

return j.complete&&j.width!==0;}else
if(j.height==20&&j.width==20&&j.complete){

return false;}else
if(j.complete===undefined&&c('UserAgent_DEPRECATED').webkit()<500){


var k=new Image();
k.src=j.src;
return k.complete;}

return j.complete;}};




f.exports=h;}),null);

/** js/photos/client/PhotoLogger.js */






__d('PhotoLogger',['Event','Banzai','BanzaiScuba','SpotlightViewerLoggingEvents','SubscriptionsHandler'],(function a(b,c,d,e,f,g){












function h(i){'use strict';
this.$PhotoLogger_viewerID=i;
this.$PhotoLogger_logged={};}
h.prototype.

log=function(i,j,k,l){'use strict';
c('Banzai').post('profile_photos_view',
{photo_fbid:j,
source:k,
profile_id:l});


if(!this.$PhotoLogger_logged[i]){
this.$PhotoLogger_logLoad(i);
this.$PhotoLogger_logged[i]=true;}};

h.prototype.

$PhotoLogger_logLoad=function(i){'use strict';
this.$PhotoLogger_logToScuba(c('SpotlightViewerLoggingEvents').LOADING,{uri:i});
var j=new (c('SubscriptionsHandler'))(),

k=new Image();
j.addSubscriptions
(c('Event').listen(k,'load',function(){
this.$PhotoLogger_logToScuba(c('SpotlightViewerLoggingEvents').LOADED,{uri:i});
j.release();}.
bind(this)),

c('Event').listen(k,'error',function(){
this.$PhotoLogger_logToScuba(c('SpotlightViewerLoggingEvents').ERROR,{uri:i});
j.release();}.
bind(this)),

c('Event').listen(k,'abort',function(){
this.$PhotoLogger_logToScuba(c('SpotlightViewerLoggingEvents').ABORT,{uri:i});
j.release();}.
bind(this)));


k.src=i;};
h.prototype.

logEvent=function(i){'use strict';
this.$PhotoLogger_logToScuba(i);};
h.prototype.

$PhotoLogger_logToScuba=function(i,j){'use strict';
var k=new (c('BanzaiScuba'))
('photos_client_loading',
null,
{addBrowserFields:true});

k.addNormal('event',i);
k.addNormal('viewer',this.$PhotoLogger_viewerID);
for(var l in j)
k.addNormal(l,j[l]);

k.post();};



f.exports=h;}),null);

/** js/photos/modules/PhotosConst.js */





__d('PhotosConst',[],(function a(b,c,d,e,f,g){

var h=

{VIEWER_PERMALINK:0,
VIEWER_SNOWLIFT:6,
VIEWER_VAULTBOX:8,
VIEWER_SNOWFLAKE:14,
VIEWER_COMPOSER:16,
VIEWER_CAROUSEL:19,
VIEWER_SPHERICAL:20,

VIEWER_PERMALINK_STRING:'permalink',
VIEWER_SNOWLIFT_STRING:'snowlift',
VIEWER_VAULTBOX_STRING:'vaultbox',
VIEWER_CAROUSEL_STRING:'carousel',


BULK_EDITOR:3,
BULK_EDITOR_REACT:15,
EDITOR_MODAL:17,


FLASH_UPLOADER:4,
HTML5_UPLOADER:10,


SIZE_NORMAL:'n',
PIC_NORMAL_FBX_SIZE:180,


ALBUM_NAME_MAXLEN:65};


f.exports=h;}),null);

/** js/photos/modules/PhotosUtils.js */





__d('PhotosUtils',['Vector'],(function a(b,c,d,e,f,g){



function h(){}

Object.assign(h,
{getNearestBox:function i(j,k){
var l=Infinity,
m=null;

for(var n in j){
var o=j[n];
if(o.contains(k)){
var p=k.distanceTo(o.getCenter());
if(p<l){
l=p;
m=n;}}}




return m;},






absoluteToNormalizedPosition:function i(j,k){
var l=c('Vector').getElementPosition(j),
m=c('Vector').getElementDimensions(j),

n=k.
sub(l).
mul(100/m.x,100/m.y);

n.domain='pure';
return n;},




normalizedToAbsolutePosition:function i(j,k){
var l=c('Vector').getElementPosition(j),
m=c('Vector').getElementDimensions(j),

n=k.
mul(m.x/100,m.y/100).
add(l);

n.domain='document';
return n;},


isFacebox:function i(j){
return j.match(/^face:/);},


isTag:function i(j){
return j.match(/^tag:/);}});



f.exports=h;}),null);

/** shared/react_contrib/ReactComponentRenderer.js */





__d('ReactComponentRenderer',['React','ReactDOM','warning'],(function a(b,c,d,e,f,g){

'use strict';












function h(i,j){
this.klass=i;
this.container=j;
this.props={};
this.component=null;}
h.prototype.

replaceProps=function(i,j){
this.props={};
this.setProps(i,j);};
h.prototype.

setProps=function(i,j){
if(this.klass==null)








return;

Object.assign(this.props,i);
var k=c('React').createElement(this.klass,this.props),
l=this;
c('ReactDOM').render(k,this.container,function(){
l.component=this;
if(j)
j.call(this);});};


h.prototype.

unmount=function(){
c('ReactDOM').unmountComponentAtNode(this.container);
this.klass=null;};



f.exports=h;}),null);
