if (self.CavalryLogger) { CavalryLogger.start_js(["Ka2lr"]); }

/** __static_js_modules__/photowarningscreenconfig.js */




__d("PhotoWarningScreenConfig",[],(function a(b,c,d,e,f,g){

f.exports={GraphicEvents:{GRAPHIC_PHOTO_SHOWN_NO_WARNING:"GRAPHIC_PHOTO_SHOWN_NO_WARNING",GRAPHIC_PHOTO_SHOWN_WITH_WARNING:"GRAPHIC_PHOTO_SHOWN_WITH_WARNING",GRAPHIC_PHOTO_WARNING_DISMISSED:"GRAPHIC_PHOTO_WARNING_DISMISSED"},ObjectionableEvents:{INVALIDATE_CONTENT:"invalidate_content",SHOW_WARNING_SCREEN:"show_warning_screen",DISABLE_THUMBNAIL:"disable_thumbnail",WARNING_SCREEN_DISMISSED:"warning_screen_dismissed",WARNING_SCREEN_REENABLED:"warning_screen_reenabled",MARK_OBJECTIONABLE:"mark_objectionable",UNDO_MARK_OBJECTIONABLE:"undo_mark_objectionable",WARNING_SCREEN_CONTENT_FILTER_PREFS_TAPPED:"warning_screen_content_filter_prefs_tapped"},Types:{GRAPHIC:"Violence and Gore",OBJECTIONABLE:"Sexual",HATE:"Hate",PROFANY:"Profanity",POLITICAL:"Politically Charged"}};}),

null);

/** js/photos/modules/PhotoEverstoreLogger.js */









__d('PhotoEverstoreLogger',['Event','AsyncRequest','ImageUtils'],(function a(b,c,d,e,f,g){







var h=

{BATCH_WINDOW_MS:500,

storedLog:[]};


function i(){}

Object.assign(i,







{_log:function k(l){
h.storedLog.push(l);

if(h.storedLog.length==1)
setTimeout(j,h.BATCH_WINDOW_MS);},













logImmediately:function k(l){
i._log(l);},









registerForLogging:function k(l){
var m=document.getElementById(l);
if(m!=null)
if(c('ImageUtils').hasLoaded(m)){
i._log(m.src);}else 

c('Event').listen
(m,
'load',
function(event){
i._log(m.src);});}});







function j(){
var k=h.storedLog;
h.storedLog=[];

var l=JSON.stringify(k);
new (c('AsyncRequest'))().
setURI('/ajax/photos/logging/everstore_logging.php').
setData({loggedUrls:l}).
setMethod('POST').
setOption('suppressErrorHandlerWarning',true).
setOption('suppressErrorAlerts',true).
send();}


f.exports=i;}),null);

/** js/photos/modules/PhotoViewerImage.js */






__d('PhotoViewerImage',['PhotoEverstoreLogger','URI','Vector'],(function a(b,c,d,e,f,g){










































function h(i){'use strict';
this._hiResDimensions=
i.hiResDimensions&&c('Vector').deserialize(i.hiResDimensions);
this._normalDimensions=
i.normalDimensions&&c('Vector').deserialize(i.normalDimensions);

this._info=i.info;
this._video=i.video;
this._shouldLog=i.everstoreLogThis;

this._hiResSrc=i.hiResSrc;
this._normalSrc=i.normalSrc;
this._thumbSrc=i.thumbSrc;
this._isInverted=false;
this._data=i;}
h.prototype.

getURIString=function(){'use strict';
return new (c('URI'))(this._info.permalink).getUnqualifiedURI().toString();};
h.prototype.

hasHiResDimensions=function(){'use strict';
return !!this._hiResDimensions;};
h.prototype.

getHiResDimensions=function(){'use strict';
return this._hiResDimensions;};
h.prototype.

getNormalDimensions=function(){'use strict';
return this._normalDimensions;};
h.prototype.

getHiResSrc=function(){'use strict';
return this._hiResSrc;};
h.prototype.

getNormalSrc=function(){'use strict';
return this._normalSrc;};
h.prototype.

getThumbSrc=function(){'use strict';
return this._thumbSrc;};
h.prototype.

getInfo=function(){'use strict';
return this._info;};
h.prototype.

getPermalink=function(){'use strict';
return this._info.permalink;};
h.prototype.

getHighestResSrc=function(){'use strict';
return this._hiResSrc||this._normalSrc;};
h.prototype.

preload=function(i){'use strict';
var j;
if(this.getHighestResSrc())
if(i&&!this._resource){
this._resource=new Image();
this._resource.src=this.getHighestResSrc();
j=this._resource.src;
if(this._shouldLog)
c('PhotoEverstoreLogger').logImmediately(this._resource.src);}else

if(!i&&!this._small){
this._small=new Image();
this._small.src=this._normalSrc||this._hiResSrc;
j=this._small.src;
if(this._shouldLog)
c('PhotoEverstoreLogger').logImmediately(this._small.src);}



return j;};
h.prototype.

setNormalDimensions=function(i,j){'use strict';
this._normalDimensions=new (c('Vector'))(i,j);};
h.prototype.

setHiResDimensions=function(i,j){'use strict';
this._hiResDimensions=new (c('Vector'))(i,j);};
h.prototype.

invertDimensions=function(){'use strict';
if(this.hasHiResDimensions())
this._hiResDimensions=new (c('Vector'))
(this._hiResDimensions.y,
this._hiResDimensions.x);



this._normalDimensions=new (c('Vector'))
(this._normalDimensions.y,
this._normalDimensions.x);


this._isInverted=!this._isInverted;};
h.prototype.

copy=function(){'use strict';
return new h(this._data);};



f.exports=h;}),null);

/** js/photos/photostream/modules/PhotoStreamCache.js */








__d('PhotoStreamCache',['DOM','HTML','PhotoEverstoreLogger','PhotosConst','PhotoViewerImage','Rect','UIPagelet','URI','Vector','ge'],(function a(b,c,d,e,f,g){














function h(){'use strict';}h.prototype.






init=function(i,j,k,l,m){'use strict';
this.version=i;
this.pageletName=j;
this.pageletRootID=k;
this.tagSuggestionMode=m;

this.bufferSize=h.BUFFER_SIZE;
this.fullBucketSize=h.FULL_BUCKET_SIZE;
this.initError=false;
this.isActive=true;

this.usesOpaqueCursor=false;
this.usesNonCircularPhotoSet=false;



this.reachedLeftEnd=false;
this.reachedRightEnd=false;


this.leftLock=false;
this.rightLock=false;

this.useAjaxPipe=true;

this.logger=l;

this.viewAsUser=null;
this.reset();};
h.prototype.

setViewAs=function(i){'use strict';
this.viewAsUser=i;};
h.prototype.

isInViewAsMode=function(){'use strict';
return !!this.viewAsUser;};
h.prototype.

getViewAsUserId=function(){'use strict';
return this.viewAsUser;};
h.prototype.

getUsesOpaqueCursor=function(){'use strict';
return this.usesOpaqueCursor;};
h.prototype.

isNonCircularPhotoSet=function(){'use strict';
return this.usesNonCircularPhotoSet;};
h.prototype.

setReachedLeftEnd=function(){'use strict';
this.reachedLeftEnd=true;};
h.prototype.

setReachedRightEnd=function(){'use strict';
this.reachedRightEnd=true;};
h.prototype.

hasReachedLeftEnd=function(){'use strict';
return this.reachedLeftEnd;};
h.prototype.

hasReachedRightEnd=function(){'use strict';
return this.reachedRightEnd;};
h.prototype.




nonCircularPhotoSetCanPage=function(i){'use strict';
if(!this.isNonCircularPhotoSet())
return true;



if(i<0)
return this.getCursorPos()||!this.hasReachedLeftEnd();





if(i>0)
return this.getLength()-1!=this.getCursorPos()||
!this.hasReachedRightEnd();



return true;};
h.prototype.

setUseAjaxPipe=function(i){'use strict';
this.useAjaxPipe=i;};
h.prototype.

reset=function(){'use strict';
this.cache={image:{},extra:{},html:{}};
this.fbidList=[];
this.loaded=false;
this.allLoaded=false;
this.permalinkMap={};

this.position=0;

this.totalCount=null;
this.firstCursor=null;
this.firstCursorIndex=null;
this.firstOpaqueCursor=null;};
h.prototype.

waitForInitData=function(){'use strict';
this.fbidList.push(h.INIT_PLACEHOLDER);};
h.prototype.

destroy=function(){'use strict';
this.reset();
this.isActive=false;};
h.prototype.

isLoaded=function(){'use strict';
return this.loaded;};
h.prototype.

canPage=function(){'use strict';
if(!this.isLoaded())
return false;

if(this.totalCount!==null)
return this.totalCount>1;





if(this.usesNonCircularPhotoSet)
return true;


return this.getLength()>1;};
h.prototype.

errorInCurrent=function(){'use strict';
if(this.initError){
return true;}else
if(!this.isLoaded())

return false;

return this.checkErrorAt(this.getCursor());};
h.prototype.

getLength=function(){'use strict';
return this.fbidList.length;};
h.prototype.

getPhotoSet=function(){'use strict';
return this.photoSetQuery.set;};
h.prototype.

getPhotoSetQuery=function(){'use strict';
return this.photoSetQuery;};
h.prototype.


getCurrentImageData=function(){'use strict';
return this.getImageData(this.getCursor());};
h.prototype.


getNextImageData=function(){'use strict';
if(!this.fbidList||!this.fbidList.length)
return null;

var i=(this.position+1)%this.fbidList.length;
return this.getImageData(this.getCursorAt(i));};
h.prototype.


getPreviousImageData=function(){'use strict';
if(!this.fbidList||!this.fbidList.length)
return null;

var i=this.fbidList.length,
j=(this.position+i-1)%i;
return this.getImageData(this.getCursorAt(j));};
h.prototype.

addViewAsToURI=function(i){'use strict';
var j=new (c('URI'))(i);
if(this.isInViewAsMode())
j.addQueryData
({viewas:this.getViewAsUserId()});


return j;};
h.prototype.


getOpaqueCursor=function(i){'use strict';
if(this.getImageData(i)){
if(this.version===c('PhotosConst').VIEWER_VAULTBOX)
return this.getImageData(i).getInfo().opaquecursor;

return this.getImageData(i).info.opaquecursor;}



if(i==this.firstCursor)
return this.firstOpaqueCursor;



return null;};
h.prototype.

getImageData=function(i){'use strict';
var j=this.getCacheContent(i,h.IMAGE_DATA);
if(j)
j.info.permalink=this.addViewAsToURI(j.info.permalink);

return j;};
h.prototype.

getCurrentHtml=function(){'use strict';
return this.getCacheContent(this.getCursor(),h.HTML);};
h.prototype.

getCurrentExtraData=function(){'use strict';
return this.getCacheContent(this.getCursor(),h.EXTRA);};
h.prototype.

getCacheContent=function(i,j){'use strict';
if(!i||
i===h.ERROR_ID||
i===h.INIT_PLACEHOLDER)
return null;

return this.cache[j][i];};
h.prototype.

getCursorPos=function(){'use strict';
return this.position;};
h.prototype.




getCursor=function(){'use strict';
if(this.position>=0&&this.position<this.getLength())
return this.fbidList[this.position];


return null;};
h.prototype.

getCursorAt=function(i){'use strict';
return this.fbidList[i];};
h.prototype.

getCursorForURI=function(i){'use strict';
return this.permalinkMap[i];};
h.prototype.

calculatePositionForMovement=function(i){'use strict';
var j=this.position+i;
if(this.allLoaded){
var k=this.getLength();
j=(k+j%k)%k;}

return j;};
h.prototype.

isValidMovement=function(i){'use strict';
if(!this.isLoaded()||!this.canPage())
return false;


var j=this.calculatePositionForMovement(i);




return this.getCursor()>0||
j>=0&&j<this.getLength();};
h.prototype.


moveCursor=function(i){'use strict';
if(!this.isValidMovement(i))
return;

this.position=this.calculatePositionForMovement(i);


if(i!==0)
this.loadMoreIfNeccessary(i>0);};

h.prototype.

checkErrorAt=function(i){'use strict';
if(!this.isLoaded())
return false;

if(i===h.ERROR_ID)
return true;

return false;};
h.prototype.

getRelativeMovement=function(i){'use strict';
for(var j=0;j<this.getLength();j++)


if(this.fbidList[j]==i)
return j-this.position;


return null;};
h.prototype.

preloadImages=function(i){'use strict';
var j,k,
l=this.getLength(),
m=this.cache.image,
n=h.BUFFER_SIZE;

if(l>n*2){
j=(this.position+l-n%l)%l;
k=(this.position+n)%l;}else{

j=0;
k=l-1;}


while(j!=k){
var o,
p=this.fbidList[j],
q=i&&i(m[p]);

if(this.version===c('PhotosConst').VIEWER_VAULTBOX){
o=m[p]&&m[p].preload(q);}else 

if(m[p]&&m[p].url)
if(q&&!m[p].resource){
m[p].resource=new Image();
m[p].resource.src=m[p].url;
o=m[p].url;


if(m[p].everstoreLogThis===true)
c('PhotoEverstoreLogger').logImmediately(m[p].resource.src);}else

if(!q&&!m[p].small){
m[p].small=new Image();
m[p].small.src=m[p].smallurl||m[p].url;
o=m[p].small.src;


if(m[p].everstoreLogThis===true)
c('PhotoEverstoreLogger').logImmediately(m[p].small.src);}





if(this.logger&&o)
this.logger.log(o);

j=(j+1)%l;}};

h.prototype.

loadMoreIfNeccessary=function(i){'use strict';
if(this.allLoaded||
i&&this.rightLock||
!i&&this.leftLock)


return;


var j=i?1:-1,
k=this.position+this.bufferSize*j;
if(k<0&&!this.checkErrorAt(this.getEndCursor(false))){
this.leftLock=true;
this.fetch(this.fullBucketSize,false);}else
if(k>this.getLength()&&
!this.checkErrorAt(this.getEndCursor(true))){
this.rightLock=true;
this.fetch(this.fullBucketSize,true);}};

h.prototype.

getEndCursor=function(i){'use strict';
return i?this.fbidList[this.getLength()-1]:this.fbidList[0];};
h.prototype.






calculateRelativeIndex=function(i,j,k){'use strict';
if(!this.totalCount)
return null;


var l=this.fbidList.indexOf(j),
m=this.fbidList.indexOf(k);
if(l===-1||m===-1)
return null;

var n=m-l;

return (i+n+this.totalCount)%this.totalCount;};
h.prototype.




calculateDistance=function(i,j){'use strict';
var k=this.fbidList.indexOf(i),
l=this.fbidList.indexOf(j);
if(k===-1||l===-1)
return null;

return (l-k+this.getLength())%this.getLength();};
h.prototype.

fetch=function(i,j){'use strict';
var k=this.getEndCursor(j),
l=babelHelpers['extends']
({cursor:k,
version:this.version,
end:this.getEndCursor(!j),
fetchSize:j?i:-1*i,
relevant_count:this.relevantCount,
opaqueCursor:this.getOpaqueCursor(k),
tagSuggestionMode:this.tagSuggestionMode},
this.photoSetQuery);

if(this.isInViewAsMode())
l.viewas=this.getViewAsUserId();





if(this.totalCount&&this.firstCursorIndex!==null){
l.total=this.totalCount;
l.cursorIndex=this.calculateRelativeIndex
(this.firstCursorIndex,this.firstCursor,k);}


var m=c('ge')(this.pageletRootID);
if(!m){

m=c('DOM').create('div',{id:this.pageletRootID});
c('DOM').appendContent(document.body,m);}


c('UIPagelet').loadFromEndpoint
(this.pageletName,
m,
l,

{usePipe:this.useAjaxPipe,
automatic:true,
jsNonblock:true,
crossPage:true});



if(!this.useAjaxPipe)
this.setUseAjaxPipe(true);};

h.prototype.

storeToCache=function(i){'use strict';
var j={};

if(!this.isActive)
return j;


if('error' in i){
this.processErrorResult(i.error);
j.error=true;
return j;}



if('init' in i){
this.processInitResult(i.init);
j.init=
{logids:i.init.logids,
fbid:i.init.fbid,
loggedin:i.init.loggedin,
fromad:i.init.fromad,
withinbusiness:i.init.withinbusiness,
eid:i.init.eid};}



if('image' in i){
this.processImageResult(i.image);
j.image=true;}


if('data' in i){
this.processDataResult(i.data);
j.data=true;}


return j;};
h.prototype.

processInitResult=function(i){'use strict';
if(this.loaded)
return;

this.usesOpaqueCursor=i.usesopaquecursor;
this.usesNonCircularPhotoSet=i.isnoncircularphotoset;

this.loaded=true;
this.photoSetQuery=i.query;
if(i.bufferSize)
this.bufferSize=i.bufferSize;

if(i.fullBucketSize)
this.fullBucketSize=i.fullBucketSize;

if(this.fbidList.length===0){
this.fbidList.push(i.fbid);





this.rightLock=true;}else{

var j=this.fbidList.indexOf(h.INIT_PLACEHOLDER);
if(j!=-1)
this.fbidList[j]=i.fbid;}


this.firstCursor=i.fbid;
this.firstOpaqueCursor=i.opaquecursor;



if('initIndex' in i&&'totalCount' in i){
this.firstCursorIndex=i.initIndex;
this.totalCount=i.totalCount;}


if(this.version==c('PhotosConst').VIEWER_PERMALINK){
var k=i.initialBucketSize?
i.initialBucketSize:
h.INIT_BUCKET_SIZE;

this.fetch(k,true);}};

h.prototype.

processImageResult=function(i){'use strict';
for(var j in i){










if(j===this.firstCursor&&i[j].everstoreLogThis)
c('PhotoEverstoreLogger').logImmediately(i[j].url);





if(this.version===c('PhotosConst').VIEWER_VAULTBOX){
var k=i[j];
this.cache.image[j]=new (c('PhotoViewerImage'))(k);
this.permalinkMap[this.cache.image[j].getURIString()]=j;}else{

this.cache.image[j]=i[j];
if(i[j].dimensions)
this.cache.image[j].dimensions=
c('Vector').deserialize(i[j].dimensions);

if(i[j].originalDimensions)
this.cache.image[j].originalDimensions=
c('Vector').deserialize(i[j].originalDimensions);

if(i[j].smalldims)
this.cache.image[j].smalldims=
c('Vector').deserialize(i[j].smalldims);

this.permalinkMap[
new (c('URI'))(i[j].info.permalink).getUnqualifiedURI().toString()]=
j;}}};


h.prototype.




attachToFbidsList=function(i,j,k){'use strict';
if(this.allLoaded)
return;

if(j===-1){
for(var l=i.length-1;l>=0;l--){
this.fbidList.unshift(i[l]);
this.position++;}

this.leftLock=false;}else{

for(var m=0;m<i.length;m++)
this.fbidList.push(i[m]);

this.rightLock=false;}

if(k)
this.setAllLoaded();};

h.prototype.




setAllLoaded=function(){'use strict';
this.allLoaded=true;
if(this.getCursor()===null)

this.position=this.calculatePositionForMovement(0);};

h.prototype.

processDataResult=function(i){'use strict';
for(var j in i){



if(!this.cache.html[j])
this.cache.html[j]={};

for(var k in i[j].html){
var l=i[j].html[k];

if(typeof l==='string')
l=c('HTML')(l).getRootNode();

if(l.childNodes){
this.cache.html[j][k]=Array.from(l.childNodes);}else 

this.cache.html[j][k]=[];}





if(!('extra' in i[j])){
this.cache.extra[j]=null;
continue;}



this.cache.extra[j]=
{tagRects:{}};





if(!Array.isArray(i[j].extra.tagRects))
for(var m in i[j].extra.tagRects)
if(i[j].extra.tagRects[m])
this.cache.extra[j].tagRects[m]=
c('Rect').deserialize(i[j].extra.tagRects[m]);





Object.keys(i[j].extra).forEach(function(n){
if(n=='tagRects')

return;

this.cache.extra[j][n]=i[j].extra[n];}.
bind(this));}};

h.prototype.

processErrorResult=function(i){'use strict';

if(!this.isLoaded()){
this.initError=true;
return;}

var j=i.side,
k=[h.ERROR_ID];
this.attachToFbidsList(k,j);};
h.prototype.

setTotalCount=function(i){'use strict';
this.totalCount=i;};
h.prototype.

setFirstCursorIndex=function(i){'use strict';
this.firstCursorIndex=i;};



Object.assign(h,

{ERROR:'error',
HTML:'html',
IMAGE_DATA:'image',
EXTRA:'extra',


BUFFER_SIZE:3,
INIT_BUCKET_SIZE:4,
FULL_BUCKET_SIZE:12,


ERROR_ID:-1,

INIT_PLACEHOLDER:1});



f.exports=h;}),null);

/** www/__virtual__/x/XPhotosetSearchPivotController.js */



__d("XPhotosetSearchPivotController",["XController"],(function a(b,c,d,e,f,g){
f.exports=c("XController").create("\/search-pivot\/photoset\/",{fbid:{type:"Int",required:true},tags:{type:"IntToIntMap"}});}),

null);

/** js/browse/PhotosetSearchPivotData.js */





__d('PhotosetSearchPivotData',['Promise','AsyncRequest','PhotoStreamCache','XPhotosetSearchPivotController'],(function a(b,c,d,e,f,g){





var h=/^(perm:)?tag:(\d+)/,

i={},

j=
{fetch:function k(l,m){
if(!(l in i)){
var n=c('XPhotosetSearchPivotController').getURIBuilder().
setInt('fbid',l);

if(m){
var o={};
m.fbidList.forEach(function(p){
var q=m.getCacheContent(p,c('PhotoStreamCache').EXTRA);
if(q)
Object.keys(q.tagRects).forEach(function(r){
if(h.test(r)){
var s=RegExp.$2;
if(s in o){
o[s]++;}else 

o[s]=1;}});});






n.setIntToIntMap('tags',o);}


i[l]=new (c('Promise'))(function(p,q){
new (c('AsyncRequest'))().
setURI(n.getURI()).
setHandler(function(r){
p(r.getPayload());}).

setErrorHandler(q).
setAllowCrossPageTransition(true).
send();});}



return i[l]['catch'](function(p){
delete i[l];
throw p;});}};



f.exports=j;}),null);

/** js/logging/generated/ObjectionableContentFilterTypedLogger.js */





__d('ObjectionableContentFilterTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){
'use strict';



















function h(){
this.clear();}
h.prototype.





log=function(){
c('GeneratedLoggerUtils').log('logger:ObjectionableContentFilterLoggerConfig',this.$ObjectionableContentFilterTypedLogger_data,c('Banzai').BASIC);};
h.prototype.







logVital=function(){
c('GeneratedLoggerUtils').log('logger:ObjectionableContentFilterLoggerConfig',this.$ObjectionableContentFilterTypedLogger_data,c('Banzai').VITAL);};
h.prototype.




clear=function(){
this.$ObjectionableContentFilterTypedLogger_data={};
return this;};
h.prototype.






updateData=function(j){








this.$ObjectionableContentFilterTypedLogger_data=babelHelpers['extends']({},
this.$ObjectionableContentFilterTypedLogger_data,
j);

return this;};
h.prototype.




setContentID=function(j){
this.$ObjectionableContentFilterTypedLogger_data.content_id=j;
return this;};
h.prototype.




setEvent=function(j){
this.$ObjectionableContentFilterTypedLogger_data.event=j;
return this;};
h.prototype.




setFilterType=function(j){
this.$ObjectionableContentFilterTypedLogger_data.filter_type=j;
return this;};
h.prototype.




setVC=function(j){
this.$ObjectionableContentFilterTypedLogger_data.vc=j;
return this;};
h.prototype.




updateExtraData=function(j){
j=c('nullthrows')(c('GeneratedLoggerUtils').serializeMap(j));
c('GeneratedLoggerUtils').checkExtraDataFieldNames
(j,
i);

this.$ObjectionableContentFilterTypedLogger_data=babelHelpers['extends']({},
this.$ObjectionableContentFilterTypedLogger_data,
j);

return this;};
h.prototype.




addToExtraData=function(j,k){
var l={};
l[j]=k;
return this.updateExtraData(l);};

























var i=
{content_id:true,
event:true,
filter_type:true,
vc:true};


f.exports=h;}),null);

/** js/photos/modules/PhotoSessionLog.js */





__d('PhotoSessionLog',['AsyncRequest','Run','URI','Vector','WWWBase'],(function a(b,c,d,e,f,g){







function h(){}

Object.assign(h,

{UNKNOWN:0,
ESC:1,
X:2,
OUTSIDE:3,
UNLOAD:4,
NAVIGATE:5,
AGGREGATE:6,
LEAVE:7,


PERMALINK:0,
SNOWLIFT:6,
SNOWDOWN:13,

AGGREGATION_COUNT:20,

set:null,
time:null,
views:0,
fbidList:[],
details:{},
width:0,
height:0,
first:false,
last:false,
logIds:false,
version:null,
source:null,

buttonLikes:0,
pagingAction:'',
cycle:false,
endOfRelevant:false,
relevantCount:0,

closingTypeToString:function i(j){

return {0:'UNKNOWN',
1:'ESC',
2:'X',
3:'OUTSIDE',
4:'UNLOAD',
5:'NAVIGATE'}[
j]||'UNKNOWN';},


initLogging:function i(j){
this.set=null;
this.time=new Date();
this.views=0;
this.hiResLoads=0;
this.fullScreenViews={};
this.first=true;
this.last=false;
this.logIds=false;
this.eid='';
this.version=j;
this.buttonLikes=0;
this.pagingAction='';
this.cycle=false;
this.endOfRelevant=false;
this.relevantCount=0;

if(j===h.SNOWLIFT){
var k=c('Vector').getViewportDimensions();
this.width=k.x;
this.height=k.y;}},



_isSnowlift:function i(){
return this.version===h.SNOWLIFT;},


setLogFbids:function i(j){
this.logIds=j;},


setEid:function i(j){
this.eid=j;},


setPhotoSet:function i(j){
this.set=j;},


addButtonLike:function i(){
this.buttonLikes++;},


setPagingAction:function i(j){
this.pagingAction=j;},


setCycle:function i(j){
this.cycle=j;},


setEndOfRelevant:function i(j){
this.endOfRelevant=j;},


setRelevantCount:function i(j){
this.relevantCount=j;},


setEndMetrics:function i(j){
this.endMetrics=j;},


setSource:function i(j){
this.source=j;},


addPhotoView:function i(j,k,l){


if(this.logIds&&this.views>=this.AGGREGATION_COUNT)
this.logPhotoViews(this.AGGREGATE);

this.views++;
if(j)
this.fbidList.push([j.fbid,j.owner,Date.now()]);

if(k)
this.hiResLoads++;

if(l)
this.fullScreenViews[j.fbid]=true;},



logEnterFullScreen:function i(j){
this.fullScreenViews[j]=true;},


addDetailData:function i(j,k){

if(!this.details[j])
this.details[j]=
{t:k.num_tags,
l:k.has_location,
c:k.has_caption,
cm:k.comment_count,
lk:k.like_count,
w:k.width,
h:k.height,
ad:'{}',
p:this.pagingAction};},




updateAdData:function i(j,k){
if(this.details[j])
this.details[j].ad=JSON.stringify(k);},



logPhotoViews:function i(j){

if(!this.views)
return;




if(j!=this.AGGREGATE)
this.last=true;


var k=
{set:this.set,
time:new Date()-this.time,
fbids:this.logIds?this.fbidList:[],
details:this.logIds?this.details:{},
eid:this.eid,
first:this.first,
last:this.last,
close:j?j:this.UNKNOWN,
button_likes:this.buttonLikes,
version:this.version,
endmetric:this.endMetrics,
cycle:this.cycle,
end_relev:this.endOfRelevant,
relev_count:this.relevantCount,
source:this.source};


if(this.version===h.SNOWLIFT){




var l=c('Vector').getViewportDimensions();
k.width=l.x||this.width;
k.height=l.y||this.height;

if(this.hiResLoads>0)
k.hires_loads=this.hiResLoads;

if(this.last){
var m=Object.keys(this.fullScreenViews).length;
if(m>0)
k.fullscreen=m;}}




var n=new (c('URI'))(c('WWWBase').uri).
setPath('/ajax/photos/logging/session_logging.php');

new (c('AsyncRequest'))().
setAllowCrossPageTransition(true).
setURI(n).
setOption('asynchronous_DEPRECATED',j!=h.UNLOAD).
setOption('suppressErrorHandlerWarning',true).
setData(k).
send();

this.views=0;
this.hiResLoads=0;
this.fbidList=[];
this.details={};
this.first=false;
this.buttonLikes=0;

if(this.last){
this.set=null;
this.logIds=false;
this.fullScreenViews={};}}});




c('Run').onUnload(function(){
h.logPhotoViews(h.UNLOAD);});


c('Run').onLeave(function(){
h.logPhotoViews(h.LEAVE);});


f.exports=h;}),null);

/** js/photos/permalink/modules/PhotoPermalinkURI.js */









__d('PhotoPermalinkURI',[],(function a(b,c,d,e,f,g){

var h=





{isValid:function i(j){
return h.parse(j)!==null;},







parse:function i(j){

if(this.isValidLegacy(j)){
var k=j.getQueryData();
if(k.fbid)
return {photo_id:k.fbid,set_token:k.set};

if(k.id&&k.pid)
return {photo_id:k.id+':'+k.pid,set_token:k.set};

return null;}

var l=j.getPath();

if(l[l.length-1]==='/')
l=l.substring(0,l.length-1);



var m=l.split('/');
if(m.length>=3&&m[2]==='photos')
if(m.length===4&&/^\d+$/.exec(m[3])!==null){
return {photo_id:m[3],set_token:null};}else
if(m.length===5&&/^\d+$/.exec(m[4])!==null)
return {photo_id:m[4],set_token:m[3]};


return null;},






isValidLegacy:function i(j){
var k=j.getPath();

if(k[k.length-1]==='/')
k=k.substring(0,k.length-1);

if(k==='/photo.php'||k==='/force_photo/photo.php'||
k==='/photo'||k==='/force_photo/photo/index.php'||
k==='/photo/index.php'||k==='/force_photo/photo'||
k==='/video.php'||k==='/video/video.php')

return true;

return false;}};




f.exports=h;}),null);

/** js/search/PhotoTagSearchPivotLogger.js */





__d('PhotoTagSearchPivotLogger',['Banzai'],(function a(b,c,d,e,f,g){



var h={};

c('Banzai').subscribe(c('Banzai').SHUTDOWN,function(){
Object.keys(h).forEach(function(l){
var m=h[l];
Object.keys(m).forEach(function(n){
c('Banzai').post('photo_tag_search_pivot',
{source:l,
action:n,
count:m[n]});});});});





var i=/^(perm:)?tag:/,

j,

k=

{logImpression:function l(m,n){
var o=m in h?
h[m]:
h[m]={};
o[n]=n in o?o[n]+1:1;},


logImageImpression:function l
(m,
n,
o){

if(j!==n){
if(o.some(function(p){return i.test(p);}))
this.logImpression(m,'image_impression');

j=n;}},



logPivotImpression:function l(m,n){
if(i.test(n))
this.logImpression(m,'pivot_impression');},



logShowMorePhotos:function l(){
this.logImpression('photoset','show_more_photos');},


logHideMorePhotos:function l(){
this.logImpression('photoset','hide_more_photos');},


logSuggestMorePhotos:function l(){
this.logImpression('photoset','suggest_more_photos');},


logMorePhotosNavigation:function l(m){
c('Banzai').post('photo_tag_search_pivot',
{source:'photoset',
action:'more_photos_search',
query:m,
count:1});}};





f.exports=k;}),null);

/** js/search/PhotosetSearchPivot.react.js */





__d('PhotosetSearchPivot.react',['cx','fbt','LeftRight.react','PhotoTagSearchPivotLogger','PhotosetSearchPivotData','React','XUISpinner.react','XUIText.react','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j,k,












l=c('React').PropTypes;j=babelHelpers.inherits

(m,c('React').Component);k=j&&j.prototype;function m(){var o,p;'use strict';for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=k.constructor).call.apply(o,[this].concat(r)),this.







onClick=function(){
c('PhotoTagSearchPivotLogger').logMorePhotosNavigation(this.props.normalized);}.
bind(this),p;}m.prototype.

render=function(){'use strict';

return (c('React').createElement('div',{className:"_25r"},
c('React').createElement('a',
{onClick:this.onClick,
href:this.props.uri,
className:"_25t _3-8t"},

c('React').createElement('div',{className:"_25u"},
c('React').createElement('div',
{className:"_25v _25w",

style:
{backgroundImage:'url('+this.props.images[0].uri+')'}}),


c('React').createElement('div',{className:"_25x"},
c('React').createElement('div',{className:"_25y"},
c('React').createElement('div',{className:"_25z"}),
c('React').createElement('div',{className:"_26r"},
c('React').createElement('div',
{className:"_273 _25w",

style:
{backgroundImage:'url('+this.props.images[1].uri+')'}}))),




c('React').createElement('div',{className:"_274"},
c('React').createElement('div',{className:"_25z"}),
c('React').createElement('div',{className:"_26r"},
c('React').createElement('div',
{className:"_273 _25w",

style:
{backgroundImage:'url('+this.props.images[2].uri+')'}}))))),






c('React').createElement(c('XUIText.react'),
{display:'block',
className:"_27f _2pi4",
dangerouslySetInnerHTML:
{__html:this.props.title.__html}}))));};





m.propTypes={normalized:l.string,title:l.object,uri:l.string,images:l.array};


var n=c('React').createClass({displayName:'PhotosetSearchPivot',

propTypes:
{fbid:l.string,
endofalbum:l.bool,
withBackground:l.bool,
linesAroundHeader:l.bool,
onclose:l.func},


fetchPivots:function o(p){
c('PhotosetSearchPivotData').fetch(p).then
(function(q){
setTimeout
(this.onFetchSuccess.bind(this,p,q.pivots),
0);}.

bind(this),
function(q){
setTimeout(this.onFetchError.bind(this,p),0);}.
bind(this));},



onFetchSuccess:function o(p,q){
if(!this.isMounted()||this.props.fbid!==p)
return;


q=q||[];
var r='show';
if(q.length===0)

r='hide';


this.setState({pivots:q,action:r});},


onFetchError:function o(p){
if(!this.isMounted()||this.props.fbid!==p)
return;


this.setState
({pivots:[],
action:'hide'});},



getInitialState:function o(){
this.fetchPivots(this.props.fbid);

return {pivots:[],
action:'loading'};},



componentWillReceiveProps:function o(p){
if(p.fbid){
this.setState
({action:'loading'});

this.fetchPivots(p.fbid);}else 

this.setState
({action:'hide',
pivots:[]});},




onExitClicked:function o(){
this.props.onclose();},


render:function o(){
if(this.state.action==='loading')

return (c('React').createElement('div',
{className:c('joinClasses')
(this.props.className,
"_27h _2ph_")},


c('React').createElement(c('XUISpinner.react'),{size:'large'})));




if(this.state.action==='hide')
return c('React').createElement('span',null);


var p=this.state.pivots.map
(function(t){
return (c('React').createElement(m,
{normalized:t.normalized,
title:t.title,
uri:t.uri,
images:t.images}));}),



q=this.props.endofalbum?
c('React').createElement('span',{className:"_2pij"},i._(["End of album","f8e7789804db17172dcb3a6205559b35"])):




null,

r="_27m"+(' '+"_2pi3")+(' '+"_2pib")+



(this.props.linesAroundHeader?' '+"_3-te":''),

s=
c('React').createElement('span',null,
q,
c('React').createElement('span',{className:"_4ptz"},i._(["Other photos you may like","70f34d49d2d5f706556f16de6f62363c"])));






if(this.props.onclose){
s=
c('React').createElement(c('LeftRight.react'),{className:r},
s,
c('React').createElement('a',
{href:'#',
onClick:this.onExitClicked,
className:"_27n"}));}else 



s=c('React').createElement('div',{className:r},s);



return (c('React').createElement('div',
{className:c('joinClasses')
(this.props.className,

(this.state.action==='hide'?"_27j":'')+
(this.state.action==='show'?' '+"_27k":''))},


c('React').createElement('div',
{className:"_27l"+

(this.props.withBackground?' '+"_3-tf":'')},

s,
c('React').createElement('div',
{className:"_27o _2pi8 clearfix"},

p))));}});








f.exports=n;}),null);

/** js/photos/pivots/PhotosetPivotSlide.react.js */





__d('PhotosetPivotSlide.react',['ix','cx','fbt','xuiglyph','Image.react','Link.react','PhotosetSearchPivot.react','React','XUIText.react'],(function a(b,c,d,e,f,g,h,i,j,k){var l,m,











n=c('React').PropTypes;l=babelHelpers.inherits

(o,c('React').Component);m=l&&l.prototype;function o(){var p,q;'use strict';for(var r=arguments.length,s=Array(r),t=0;t<r;t++)s[t]=arguments[t];return q=(p=m.constructor).call.apply(p,[this].concat(s)),this.















































$PhotosetPivotSlide_getEndOfAlbumTitle=function(){
if(this.props.albumOwnerName){
if(this.props.isAlbum){
return j._(["End of {user_name}'s album","14b06e8eae658e951d3a63171d574add"],[j.param


('user_name',
c('React').createElement(c('XUIText.react'),{weight:'bold'},this.props.albumOwnerName))]);}else 





return j._(["End of {user_name}'s photos","40538d42b67e9d89eec865e099870c5c"],[j.param


('user_name',
c('React').createElement(c('XUIText.react'),{weight:'bold'},this.props.albumOwnerName))]);}else





if(this.props.isAlbum){
return j._(["End of album","af4e4cbe14cabb2e5bdf5a7d902a09f1"]);}else 





return j._(["End of photos","55278254b3981441fbcb561189e3e494"]);}.





bind(this),q;}o.prototype.render=function(){'use strict';return c('React').createElement('div',{className:"_1_ap"+(this.props.visible?' '+"_1_aq":'')},c('React').createElement('div',{className:"_1_ar"},c('React').createElement(c('XUIText.react'),{display:'block'},this.$PhotosetPivotSlide_getEndOfAlbumTitle()),c('React').createElement(c('Link.react'),{className:"_1_as",onClick:this.props.onReturn},c('React').createElement(c('Image.react'),{className:"_1_at",src:h("88724")}),j._(["Return to Beginning","8c8a04afe6f151e83e0b375cbe51b7cf"]))),c('React').createElement(c('PhotosetSearchPivot.react'),{className:"_1_au",fbid:this.props.visible?this.props.fbid:null,linesAroundHeader:true}));};o.propTypes={fbid:n.string,isAlbum:n.bool,albumOwnerName:n.string,visible:n.bool,onReturn:n.func};


f.exports=o;}),null);

/** js/photos/viewer/modules/PhotoSnowliftAds.js */





__d('PhotoSnowliftAds',['csx','Arbiter','Event','CSS','DataAttributeUtils','DataStore','DOM','PhotoSessionLog','UIPagelet','URI','Vector','cxodecode'],(function a(b,c,d,e,f,g,h){
















var i=void 0,

j=

{REFRESH_RATE:30000,

UNITS_REGISTER_DELAY:1000,

root:null,
availableDimensions:null,
loadQuery:null,
lastLoadTime:0,
minAds:100,
units:null,
isLogAdData:null,
displayedCallback:null,


position:null,


adsStatus:'null',
adsEvents:{},

resetEvents:function k(){
this.adsStatus='reset';
this.adsEvents={};},


addEvent:function k(l,m){
if(m)
this.adsStatus=l;

var n=Date.now();
this.adsEvents[l+'_'+n]=n;},


init:function k(l,m,n,o){
if(n.nonce)
i=c('cxodecode')(n.nonce);

this.reset();
this.root=l;
this.snowlift=m;
this.minAds=n.min_ads;
this.displayedCallback=o;
this.addEvent('init',true);},


reset:function k(){
this.lastLoadTime=0;
this.position=0;
this.units=[];
this.resetEvents();
this.addEvent('reset',true);},


resize:function k(l){
this.availableDimensions=l;
this.loadQuery=this.snowlift.getLoadQuery();
this.processResize();},


calculateUnitSizes:function k(l,m,n){
var o={};
l.forEach(function(p){
var q=p.root.firstChild.offsetHeight;


p.units.forEach(function(s){
if(!c('CSS').hasClass(s,'hidden')&&
!this.getIsHoldout(s)&&
!this.getIsShadow(s)){
var t=this.getHeight(s.firstChild,m);
q-=t;}}.

bind(this));

var r=

{height:q,
visible:false};


p.units.forEach(function(s){
var t=this.getIsAds(s),
u=this.getHeight(s.firstChild,m),
v=this.getUnitId(s),
w=this.getIsHoldout(s);

if(w&&n)
return;


o[v]=
{height:u,
visible:false,
priority:0,
is_ads:t,
is_holdout:w,
section_ref:r};}.

bind(this));}.
bind(this));
return o;},


calculateVisibleUnits:function k(l,m,n){
var o=this.getUnitPriority(m);
o.forEach(function(p){

if(Object.prototype.hasOwnProperty.call(m,p)){
var q=m[p],
r=q.height;
if(!q.section_ref.visible)
r+=q.section_ref.height;

q.height_below=n-r;


q.visible=
q.height_below>=0&&r>0;
if(q.visible){
q.section_ref.visible=true;
n-=r;}}});



return m;},


displayUnits:function k(l,m){
l.forEach(function(n){
var o=false,
p=true;
n.units.forEach(function(q){
var r=this.getUnitId(q),
s=m[r];



if(!s)
return;

var t=s.visible,
u=s.height_below,
v=s.is_ads;

c('CSS').conditionClass(q,'hidden',!t);

if(v&&t&&p){







var w=c('DOM').find(q,'div.ego_unit');
c('CSS').addClass(w,'ego_unit_no_top_border');
p=false;}


o=o||t;
this.calcUnitStats
(this.units[v][r],t,u);}.
bind(this));

c('CSS').conditionClass(n.root,'hidden',!o);}.
bind(this));
c('Arbiter').inform('PhotoSnowliftAds/displayUnits');},


getUnitsDisplayed:function k(l,m){
var n=0;
l.forEach(function(o){
o.units.forEach(function(p){
var q=this.getUnitId(p),
r=m[q];

if(!r||!r.visible)
return;


n++;}.
bind(this));}.
bind(this));

return n;},


getHeightsRequired:function k(l,m){





var n=0,
o=[];

l.forEach(function(p){
var q=false;
p.units.forEach(function(r){
var s=this.getUnitId(r),
t=m[s];
if(!t)
return;


n+=t.height;
if(!q){
n+=t.section_ref.height;
q=true;}

o.push(n);}.
bind(this));}.
bind(this));

return o;},


getUnitPriority:function k(l){
var m=[],
n=0,
o=0;
for(var p in l){
var q=l[p];
m.push(p);
var r=this.minAds+n+o;
if(q.is_ads){
if(o<this.minAds)
r=o;

o++;}else 

n++;

q.priority=r;}


m=m.sort
(function(s,t){
var u=l[s],
v=l[t];
return u.priority-v.priority;});

return m;},


updateUnitsStatus:function k(){
var l=this.availableDimensions.x,
m=this.availableDimensions.y,


n=this.calculateUnitSizes(this.sections,l);


n=this.calculateVisibleUnits
(this.sections,n,m);





for(var o in n){
if(!Object.prototype.hasOwnProperty.call(n,o))
continue;


var p=n[o];



if(!p.is_holdout||!p.visible)
continue;


var q=this.units[1][o];



this.calcUnitStats
(q,
p.visible,
p.height_below);}






n=
this.calculateUnitSizes(this.sections,l,true);


n=this.calculateVisibleUnits
(this.sections,n,m);


this.displayUnits(this.sections,n);

if(this.displayedCallback){
var r=
this.getUnitsDisplayed(this.sections,n),


s=
this.getHeightsRequired(this.sections,n);




this.displayedCallback(r,s);}},



calcUnitStats:function k(l,m,n){
if(!l)
return;

var o=Date.now();
if(l.visible)
l.totalTime+=o-l.lastShowTime;

if(l.trackingCode!==null&&l.totalTime>=
this.UNITS_REGISTER_DELAY){
var p=l.trackingCode;
l.trackingCode=null;
this.registerImpression(p,l.registerUrl);}

l.visible=m;
l.heightBelow=n;
l.lastShowTime=o;},


prepareResize:function k(){

var l=function m(n){
var o=c('DOM').create('div',{className:'inner'}),
p=c('DOM').create('div',{className:'wrapper'},o);
c('DOM').replace(n,p);
c('DOM').setContent(o,n);
return p;};


this.sections=
c('DOM').scry(this.root,'div.ego_section').map(function(m){

return {root:l(m),
units:c('DOM').scry(m,'div.ego_unit').map(l)};});},




processResize:function k(){
if(this.isLoading||this.lastLoadTime===0||
this.availableDimensions===null){
this.setLogData();
return;}

this.updateUnitsStatus();
this.setLogData();
var l=this.nextRegisterTime();
if(l!==Infinity)
setTimeout(this.processResize.bind(this),l);},



setIsLogAdData:function k(l){
this.isLogAdData=l;
this.addEvent('setIsLogAdData',false);
this.setLogData();},


setLogData:function k(){
var l=this.snowlift.getImageId();
if(this.isLogAdData&&l){
var m=c('Vector').getElementDimensions(this.snowlift.getImage()),
n=c('Vector').getElementDimensions
(this.snowlift.getRHCHeader()),
o=c('Vector').getElementDimensions(this.snowlift.getRHCBody()),
p=c('Vector').getElementDimensions
(this.snowlift.getRHCFooter()),
q=

{query_set:this.snowlift.getLoadQuery().set,
window_x:window.innerWidth,
window_y:window.innerHeight,
image_x:m.x,
image_y:m.y,
header_x:n.x,
header_y:n.y,
body_x:o.x,
body_y:o.y,
footer_x:p.x,
footer_y:p.y,
ads_below_space:this.getAdsBelowSpace(),
time:Date.now(),
adsStatus:this.adsStatus,
adsEvents:this.adsEvents,
refreshRate:this.refreshUnitsRate,
position:this.position};

c('PhotoSessionLog').updateAdData(l,q);}},



getAdsBelowSpace:function k(){
var l=[],
m=this.units[1];
for(var n in m)
if(Object.prototype.hasOwnProperty.call(m,n)&&
!this.getIsHoldout(this.getAdUnit(n)))
l.push(m[n].heightBelow);


return l;},


getIsAds:function k(l){
var m=c('DOM').scry
(l,
i||"div._4u8");

return m.length;},


getUnitId:function k(l){
if(this.getIsAds(l)){
return this.getAdId(l);}else 

return this.getEgoId(l);},



getEgoId:function k(l){
var m=c('DOM').find(l,'div.ego_unit');
return m.getAttribute('data-ego-fbid');},


getAdData:function k(l){
var m=c('DOM').find
(l,
i||"div._4u8"),

n=c('DataAttributeUtils').getDataAttribute(m,'data-ad');

return n&&JSON.parse(n)||{};},


getAdId:function k(l){
return this.getAdData(l).adid;},


getIsHoldout:function k(l){
return l&&this.getIsAds(l)&&this.getAdData(l).holdout;},


getIsShadow:function k(l){
return l&&this.getIsAds(l)&&this.getAdData(l).shadow;},






getAdUnit:function k(l){
if(!this.sections)
return null;



var m=[];
this.sections.forEach(function(o){
m.push.apply(m,o.units);});



for(var n=0;n<m.length;n++)
if(this.getIsAds(m[n])&&this.getAdId(m[n])==l)
return m[n];



return null;},


nextRegisterTime:function k(){
var l=Infinity,
m=babelHelpers['extends']({},
this.units[0],
this.units[1]);

for(var n in m)
if(Object.prototype.hasOwnProperty.call(m,n)){
var o=m[n];
if(o.trackingCode!==null&&o.visible)
l=Math.min
(l,this.UNITS_REGISTER_DELAY-o.totalTime);}



return l;},


getHeight:function k(l,m){
var n=c('DataStore').get(l,'height');
if(n&&n.x===m)
return n.y;

return this.cacheHeight(l,m);},


cacheHeight:function k(l,m){
var n=
{x:m,
y:l.offsetHeight};

c('DataStore').set(l,'height',n);
return n.y;},


loadAdsAndEgo:function k(){
if(this.loadQuery){
this.resetEvents();
this.addEvent('adsRequested',true);
this.position++;
var l=this.getCursorFBID(this.loadQuery);


c('UIPagelet').loadFromEndpoint
('WebEgoPane',
this.root,

{pid:34,
data:
[this.loadQuery.set,
l,
false,
this.snowlift.getOpaqueCursor(l)]},



{crossPage:true,
bundle:false});}},





getCursorFBID:function k(l){
if(l){
if(l.v!==undefined)
return l.v;

if(l.fbid!==undefined)
return l.fbid;}


return '0';},


unitsLoaded:function k(l,m){
var n;
if(m){
n='/ai.php';
this.addEvent('adsLoaded',true);}else{

n='/ajax/ei.php';
this.addEvent('egoLoaded',true);}

var o={};
for(var p in l)
if(Object.prototype.hasOwnProperty.call(l,p))
o[p]=
{trackingCode:l[p],
totalTime:0,
lastShowTime:0,
heightBelow:-10000,
visible:false,
registerUrl:n};



this.units[m]=o;


if(this.units[0]&&this.units[1])
this.waitForImages(this.imagesLoaded.bind(this));},



imagesLoaded:function k(){
this.prepareResize();
this.addEvent('imagesLoaded',true);
this.lastLoadTime=Date.now();
this.isLoading=false;
this.processResize();
c('CSS').removeClass(this.root,'loading');},


loadAdsFromUserActivity:function k(){
var l=Date.now()-this.lastLoadTime;
if(!this.isLoading&&l>j.REFRESH_RATE){
c('CSS').addClass(this.root,'loading');
this.isLoading=true;
this.loadAdsAndEgo();}},






registerImpression:function k(l,m){
var n=c('DOM').create('iframe',
{src:new (c('URI'))(m).addQueryData({aed:l}),
width:0,
height:0,
frameborder:0,
scrolling:'no',
className:'fbEmuTracking'});

n.setAttribute('aria-hidden','true');

c('DOM').appendContent(this.root,n);},


waitForImages:function k(l){
var m=c('DOM').scry(this.root,'img.img'),

n=m.length,
o=n;


if(o===0)
l();


var p=function s(){
o--;
if(o===0)
setTimeout(l,0);};


for(var q=0;q<n;q++){
var r=m[q];


if(r.complete){
p();}else 







c('Event').listen(r,{load:p,error:p,abort:p});}}};





f.exports=j;}),null);

/** js/photos/viewer/modules/PhotoSnowliftBackLink.react.js */








__d('PhotoSnowliftBackLink.react',['cx','React'],(function a(b,c,d,e,f,g,h){

'use strict';var i,j,





k=c('React').PropTypes;i=babelHelpers.inherits

(l,c('React').Component);j=i&&i.prototype;l.prototype.












render=function(){

return (c('React').createElement('a',
{className:"_1cac"+

(this.props.visible?' '+"_1cad":''),

href:this.props.href},
this.props.name));};


function l(){i.apply(this,arguments);}l.propTypes={href:k.string,name:k.string,visible:k.bool};


f.exports=l;}),null);

/** js/photos/viewer/modules/PhotoViewer.js */








__d('PhotoViewer',['Bootloader','CSS','DOM'],(function a(b,c,d,e,f,g){






function h(){'use strict';
this.image=null;
this.root=null;
this.stream=null;}
h.prototype.

getEventString=function(i){'use strict';
var j=this.getEventPrefix();
if(j)
return j+'.'+i;

return null;};
h.prototype.

getImage=function(){'use strict';
return this.image;};
h.prototype.

getPosition=function(){'use strict';
return this.stream?this.stream.getCursor():null;};
h.prototype.

getRoot=function(){'use strict';
return this.root;};
h.prototype.

hiliteAllBoxes=function(){'use strict';
c('DOM').scry
(this.stageWrapper,
'div.tagsWrapper div.faceBox').
forEach
(function(i){
c('CSS').addClass(i,'otherActive');});


c('DOM').scry
(this.stageWrapper,
'div.tagsWrapper div.fbPhotosPhotoTagboxBaseComments').
forEach
(function(i){
c('CSS').addClass(i,'otherActive');});};


h.prototype.

getEventPrefix=function(){'use strict';
return null;};
h.prototype.

getSourceString=function(){'use strict';
return null;};
h.prototype.

getVersionConst=function(){'use strict';
return null;};
h.prototype.

getViewerSource=function(){'use strict';
return null;};
h.prototype.

getViewerSet=function(){'use strict';
return null;};
h.


bootstrap=function(i,j){'use strict';
c('Bootloader').loadModules(["PhotoSnowlift"],function(k){
k.bootstrap(i,j);},
'PhotoViewer');};



f.exports=h;}),null);

/** shared/photos/warning_screen/PhotoWarningScreen.js */




__d('PhotoWarningScreen',['csx','cx','CSS','DOM','EventListener','Parent','XAsyncRequest','PhotoWarningScreenConfig','ObjectionableContentFilterTypedLogger'],(function a(b,c,d,e,f,g,h,i){














function j(k){'use strict';
if(k.footer){
if(k.storyRootClass){
var l=c('Parent').byClass
(k.rootElement,
k.storyRootClass);

if(l)
c('DOM').appendContent
(l,
k.footer);}












var m=k.isMobile?
c('DOM').scry
(k.footer,
'a',
'warn-undo-link').
pop():
c('DOM').scry
(k.footer,
"._1kmy").
pop();

if(m)
c('EventListener').listen(m,'click',function(){
c('CSS').hide(k.footer);
c('CSS').show(k.warningOverlay);
c('CSS').addClass
(k.innerContent,
"_1t6v");


if(k.warningType===c('PhotoWarningScreenConfig').Types.OBJECTIONABLE)

j.logFilterEvent
(c('PhotoWarningScreenConfig').ObjectionableEvents.WARNING_SCREEN_REENABLED,
k.responsibleContent,
c('PhotoWarningScreenConfig').Types.OBJECTIONABLE);});}






c('EventListener').listen(k.seePhotoButton,'click',function(){
c('CSS').hide(k.warningOverlay);
if(k.footer)
c('CSS').show(k.footer);

c('CSS').removeClass
(k.innerContent,
"_1t6v");

j.logFilterEvent
(c('PhotoWarningScreenConfig').ObjectionableEvents.WARNING_SCREEN_DISMISSED,
k.responsibleContent,
k.warningType);});



c('EventListener').listen(k.warningOverlay,'click',function(event){




if(!k.isMobile){
var n=c('DOM').scry
(event.target,

"^._2w-t");

if(n.length){

var o=n[0].getAttribute('ajaxify');
new (c('XAsyncRequest'))(o).send();}

event.stopImmediatePropagation();
event.preventDefault();}});}





j.logFilterEvent=
function(event,
k,
l){

k.forEach(function(m){
new (c('ObjectionableContentFilterTypedLogger'))().
setEvent(event).
setContentID(m).
setFilterType(l).
log();});};



f.exports=j;}),null);

/** shared/photos/warning_screen/PhotoWarningScreenMixin.js */





__d('PhotoWarningScreenMixin',['csx','cx','CSS','DOM','emptyFunction'],(function a(b,c,d,e,f,g,h,i){








var j=c('emptyFunction'),









k=

{getGraphicWarningContainer:j,

getGraphicWarningHiddenContent:j,

_graphicWarningMarkup:null,
_graphicWarningOverlay:null,
_graphicWarningHiddenContentWrapper:null,

initGraphicWarningDOM:function l(m){
this._graphicWarningMarkup=m;
this._graphicWarningOverlay=c('DOM').scry
(m,
"._1t6w").
pop();

this._graphicWarningHiddenContentWrapper=c('DOM').scry
(m,
"._1t6x").
pop();},


showGraphicWarning:function l(){
this._graphicWarningOverlay&&c('CSS').show(this._graphicWarningOverlay);

if(this.getGraphicWarningContainer().contains(this._graphicWarningMarkup))

return;

if(this._graphicWarningHiddenContentWrapper){
this.getGraphicWarningContainer().replaceChild
(this._graphicWarningMarkup,
this.getGraphicWarningHiddenContent());

c('CSS').addClass
(this._graphicWarningHiddenContentWrapper,
"_1t6v");

this._graphicWarningHiddenContentWrapper.appendChild
(this.getGraphicWarningHiddenContent());}},




hideGraphicWarning:function l(){

if(!this.getGraphicWarningContainer().contains(this._graphicWarningMarkup))

return;

this.getGraphicWarningContainer().replaceChild
(this.getGraphicWarningHiddenContent(),
this._graphicWarningMarkup);}};




f.exports=k;}),null);

/** js/video/pivots/SnowliftVideoPivotsCarouselController.js */





__d("SnowliftVideoPivotsCarouselController",[],(function a(b,c,d,e,f,g){

var h=


{setPivotsCarousel:function i(j,k){
this._pivotsCarousel=j;
this.adjustCarousel(k);},


adjustCarousel:function i(j){
if(this._pivotsCarousel)
this._pivotsCarousel.pageTo(j);},



adjustCarouselOnAutoPlay:function i(){
if(this._pivotsCarousel)
this._pivotsCarousel.page();}};





f.exports=h;}),null);

/** js/photos/viewer/modules/PhotoSnowlift.js */









__d('PhotoSnowlift',['csx','cx','fbt','invariant','$','Arbiter','AsyncRequest','Bootloader','CSS','DataAttributeUtils','DataStore','Dialog','DOM','DOMControl','DOMQuery','EncryptedImg','Event','FullScreen','FunnelLogger','ImageUtils','Input','Keys','Layer','LikeConfirmer','LinkController','LitestandShareAttachment','LitestandStoryInsertionStatus','Locale','PageTransitions','Parent','PhotoLogger','PhotoPermalinkURI','PhotosConst','PhotoSessionLog','PhotosetPivotSlide.react','PhotosetSearchPivot.react','PhotosetSearchPivotData','PhotoSnowliftActionsGating','PhotoSnowliftAds','PhotoSnowliftBackLink.react','PhotoSnowliftLoader','PhotoSnowliftLoggingConfig','PhotoStreamCache','PhotosUtils','PhotoTagSearchPivotLogger','PhotoViewer','PhotoWarningScreen','PhotoWarningScreenConfig','PhotoWarningScreenMixin','React','ReactComponentRenderer','ReactDOM','Rect','ScriptPath','ScrollableArea','SnowliftVideoPivotsCarouselController','Style','SubscriptionsHandler','Toggler','Tooltip','TrackingNodes','TrackingNodeTypes','UFIFeedbackTargets','UFIRootRegistry','UFIUIEvents','UIPagelet','URI','UserAgent_DEPRECATED','Vector','VideoData','VideoPermalinkURI','VideoPlayerAbortLoadingExperiment','VideoPlayerReason','classWithMixins','computeRelativeURI','emptyFunction','ge','getActiveElement','goURI','isNode','mixin','tickerPhoteSnowLiftOpenStatus','setTimeoutAcrossTransitions','setImmediate'],(function a(b,c,d,e,f,g,h,i,j,k){

'use strict';var l,m,























































































n='WWW_SNOWLIFT_ACTIONS_FUNNEL',

o=74,
p=75,
q=70,
r=76,

s=315,

t=200,

u=2000,


v=new RegExp('\\/posts\\/(\\d+)\\/?$');l=babelHelpers.inherits

(w,
c('classWithMixins')(c('PhotoViewer'),c('mixin')(c('PhotoWarningScreenMixin'))));m=l&&l.prototype;






















function w(){
m.constructor.call(this);


this.switchTimer=null;

this.imageRefreshTimer=null;
this.imageLoadingTimer=null;
this.lastPage=0;


this.currentMinSize=null;

this.currentImageSize=null;
this.resetUriStack=true;
this.thumbSpherical=false;
this.thumbSrc=null;
this.shouldStretch=false;
this.stageMax=w.STAGE_NORMAL_MAX;
this.stageChrome=w.STAGE_CHROME;
this.stagePagerPrev=null;
this.ua=null;
this.PhotoTagger=null;

this._inputBarAdjusted=false;
this._seenTags={};
this._navCount=0;
this._navHistory=[];
this._preloadTimeout=0;
this.clearAlbumBoundaries();}
w.prototype.

preload=function(x,y){

c('Bootloader').loadModules(["PhotoTagger","Live","PhotoTagApproval","PhotoTags","TagTokenizer","css:fb-photos-snowlift-fullscreen-css"],






function(z){
this.PhotoTagger=z;}.
bind(this),'PhotoSnowlift');};
w.prototype.


bootstrap=function(x,y,z){
this.preload(x,y);
this._href=x;
this._elem=y;





if(this.closeDirty){
setTimeout(this.bootstrap.bind(this,x,y,z),0);
return;}


c('PhotoSnowliftAds').reset();
this.resetUriStack=true;
if(this.isOpen)
if(this.openExplicitly){





this.closeCleanup();
this.resetUriStack=false;}else 




return;



this._dataFt=null;
var aa=c('Parent').byAttribute(y,'data-cursor');
if(aa){

try{var ca=JSON.parse(c('DataAttributeUtils').getDataFt(aa));
this._dataFt=
{qid:ca.qid,
mf_story_key:ca.mf_story_key};}catch(

ba){}}else 


try{aa=c('Parent').byAttribute(y,'data-ad');
aa=c('DataAttributeUtils').getParentByAttributeOrDataStoreKey
(y,'data-ad','data-ad');
var da=JSON.parse
(c('DataAttributeUtils').getDataAttribute(aa,'data-ad'));
this._dataFt={ad_id:da.adid};}catch(
ba){}


this.returningToStart=false;
this.loading&&c('CSS').removeClass(this.loading,'loading');
if(y){
c('CSS').addClass(this.loading=y,'loading');

var ea=
c('Parent').byClass(y,'uiStreamStory')||
c('Parent').bySelector(y,"._5jmm");
if(ea){
this.storyID=ea.id;}else{

var fa=
c('Parent').bySelector(y,"._5b9c");
if(fa)
this.storyID=fa.getAttribute('data-ownerid');}



this._updateContainerOwnerID();
this.getThumbAndSize(y);}else 

this.loading=null;


c('Arbiter').inform('PhotoSnowlift.GO',x,c('Arbiter').BEHAVIOR_STATE);
this.loadFrameIfUninitialized(z);};
w.prototype.

_updateContainerOwnerID=function(){
if(this.container)
if(this.storyID){
this.container.setAttribute('data-ownerid',this.storyID);}else 

this.container.removeAttribute('data-ownerid');};


w.prototype.

setupFromSnowflake=function(x,y){
this.extraClasses=x;
this.snowflake=true;
this.firstInSet=y;

if(this.root){
c('CSS').addClass(this.root,'snowflake');
this.extraClasses.forEach(function(z){
c('CSS').addClass(this.root,z);},
this);}};

w.prototype.


getCurrentImageServerSizeDimensions=function(){
var x=this.stream.getCurrentImageData();
return x.originalDimensions||x.dimensions;};
w.prototype.

getEventPrefix=function(){
return 'PhotoSnowlift';};
w.prototype.

getRoot=function(){
return this.root;};
w.prototype.

getSourceString=function(){
return 'snowlift';};
w.prototype.

getViewerSource=function(){
return this.source;};
w.prototype.

getViewerSet=function(){
return this.stream.getPhotoSet();};
w.prototype.

getVersionConst=function(){
return c('PhotosConst').VIEWER_SNOWLIFT;};
w.prototype.

getImage=function(){
if(this._snowliftViewableModule){
return this._viewable.getElement();}else 

return this.image;};

w.prototype.

getImageId=function(){
return this.stream.getCursor();};
w.prototype.

getRHCHeader=function(){
return this.rhcHeader;};
w.prototype.

getRHCBody=function(){
return this.ufiForm;};
w.prototype.

getRHCFooter=function(){
return this.rhcFooter;};
w.prototype.

getLoadQuery=function(){
return this.loadQuery;};
w.prototype.

getCurrentPhotoInfo=function(){
var x=this.stream.getCurrentImageData();
if(x)
return x.info;

return null;};
w.prototype.

getOwnerId=function(){
var x=this.stream.getCurrentImageData();
if(x)
return x.info.owner;

return null;};
w.prototype.














getThumbAndSize=function(x){

this.currentImageSize=null;
this.thumbSpherical=false;
this.thumbSrc=null;

var y=new (c('URI'))(x.getAttribute('ajaxify')).getQueryData();

if(!y.size)
return;


var z=c('Vector').deserialize(y.size);
if(!z.x||!z.y)
return;


this.currentImageSize=z;


if(x.getAttribute('data-cropped'))
return;


var aa=c('DOM').scry(x,'img')[0],
ba=c('DOM').scry(x,'i')[0],



ca=c('Parent').byAttribute(x,'data-size');
this.shouldStretch=
ca&&this.currentImageSize&&aa&&
ca.getAttribute('data-size')==='2'&&
this.currentImageSize.x>this.currentImageSize.y&&
this.currentImageSize.x<=w.TIMELINE_STRETCH_WIDTH&&
aa.offsetWidth===w.TIMELINE_STRETCH_WIDTH;

var da;
if(aa){
da=aa.src;
this.thumbSpherical=Boolean
(aa.getAttribute('data-is-spherical-photo'));}else

if(ba){
da=c('Style').
get(ba,'backgroundImage').
replace(/.*url\("?([^"]*)"?\).*/,'$1');}else 

return;



this.thumbSrc=da;};
w.prototype.

loadFrameIfUninitialized=function(x){
if(this.root||x)
return;


var y=String(c('URI').getMostRecentURI().getQueryData().viewas);
c('PhotoSnowliftLoader').loadFrame(y);};
w.prototype.

init=function(x,y){
this.init=c('emptyFunction');
this._shouldLog=y.photos_client_loading;
this._logger=null;
if(this._shouldLog)
this._logger=new (c('PhotoLogger'))(c('PhotosConst').VIEWER_SNOWLIFT_STRING);

this._showHover=y.pivot_hover;
this._showMorePhotos=y.show_more_photos;
this._extraSlidePivot=y.extra_slide_pivot;

this._uiRefresh=y.snowlift_ui_refresh;

c('PhotoSessionLog').setEndMetrics(y.pivot_end_metric);


this.startingMousePos=null;
this.haveLeftBufferRegion=false;
this.showingTypeaheadSuggestions=false;

this.fullscreen=c('FullScreen').isSupportedWithKeyboardInput();

this.showOGVideos=y.og_videos;

this.resizeCommentsForAds=y.resize_comments_for_ads;

this.initGraphicWarningDOM(y.graphic_warning_markup);
this._snowliftViewableModule=y.snowlift_viewable_module;

this.spotlight=x;

this.spotlight.subscribe('blur',function(){
this.closingAction=c('PhotoSessionLog').OUTSIDE;}.
bind(this));

this.spotlight.subscribe('hide',this.closeHandler.bind(this));

this.spotlight.subscribe('key',this.keyHandler.bind(this));

this._actionMenuOpen=false;
this._mouseOnPhotoStage=false;

this.initializeNodes(this.spotlight.getRoot());

c('PhotoSnowliftAds').init(this.sideAdUnit,this,y,
this.adsDisplayedCallback.bind(this));
this.inAdsDisplayedCallback=false;
this.lastAdsHeight=0;

if(!this.subscription){
c('LinkController').registerHandler(this.handleNavigateAway.bind(this));

this.subscription=c('Arbiter').subscribe
('PhotoSnowlift.GO',
function(z,aa){
this.openExplicitly=true;
this.loading&&c('CSS').removeClass(this.loading,'loading');
this.open(aa);}.
bind(this));}



this.transitionHandlerRegistered=false;






this.returningToStart=false;
c('PageTransitions').registerHandler(this.openHandler.bind(this));
this.openHandlerRegistered=true;

c('Arbiter').subscribe
('PhotoTagApproval.HILITE_TAG',
this.onHiliteTag.bind(this));

c('Arbiter').subscribe
('PhotoTagApproval.UPDATE_TAG_BOX',
this.onUpdateTagBox.bind(this));




if(this.fullscreen)
c('FullScreen').subscribe('changed',this.onFullScreenChange.bind(this));


this.buttonTruncateGk=y.snowlift_button_truncate;

this.allowIrrelevantRequests=
!!y.snowlift_allow_irrelevant_requests;

if(this.snowflake){
c('CSS').addClass(this.root,'snowflake');
this.extraClasses.forEach(function(z){
c('CSS').addClass(this.root,z);},
this);}};

w.prototype.

onFullScreenChange=function(){
if(!this.isOpen)
return;

var x=c('FullScreen').isFullScreen();
c('CSS').conditionClass
(document.body,
'fbPhotoSnowliftFullScreenMode',
x);


if(x){
this.lastFullscreenEnter=Date.now();
if(!c('CSS').hasClass(this.root,'fbPhotoSnowliftEditMode'))
this.collapseRHC();


if(this._snowliftViewableModule){
this._viewable.onEnterFullScreen();}else{

var y=this.stream.getCurrentImageData();

if(y&&y.url&&this.image.src!==y.url&&
this.shouldShowHiRes(y))
this.switchImage(y.url);}



this.adjustForResize();}else{

this.uncollapseRHC();
if(this._snowliftViewableModule)
this._viewable.onExitFullScreen();

if(c('UserAgent_DEPRECATED').chrome()&&

this.lastPage>this.lastFullscreenEnter&&
!c('CSS').hasClass(this.root,'fbPhotoSnowliftEditMode'))


this.page(0,false);

c('Arbiter').inform('reflow');}

c('Toggler').hide();};
w.prototype.

initializeNodes=function(x){
this.root=x;

this.container=c('DOM').find(x,'div.fbPhotoSnowliftContainer');
this._updateContainerOwnerID();
this.snowliftPopup=c('DOM').find(this.container,'div.fbPhotoSnowliftPopup');

this.rhc=c('DOM').find(this.snowliftPopup,'div.rhc');
this.rhcHeader=c('DOM').find(this.rhc,'div.rhcHeader');
this.rhcFooter=c('DOM').find(this.rhc,'div.rhcFooter');
this.taglist=c('DOM').find(this.rhc,'span.fbPhotoTagList');

this.ufiForm=c('DOM').find(this.rhc,'form.fbPhotosSnowliftFeedbackForm');
this.ufiInputContainer=
c('DOM').find(this.rhc,'div.fbPhotosSnowboxFeedbackInput');

this.scroller=c('DOM').find(this.ufiForm,'div.rhcScroller');
this.scrollerBody=c('DOM').find(this.scroller,'div.uiScrollableAreaBody');

this.stageWrapper=c('DOM').find(this.snowliftPopup,'div.stageWrapper');
this.overlay=c('DOM').find(this.snowliftPopup,'div.snowliftOverlay');
this.errorBox=c('DOM').find(this.stageWrapper,'div.stageError');
if(this._snowliftViewableModule){
this._viewable=this._snowliftViewableModule.fromImageElement
(c('DOM').find(this.stageWrapper,'img.spotlight'));}else 


this.image=c('DOM').find(this.stageWrapper,'img.spotlight');

this.stage=c('DOM').find(this.stageWrapper,'div.stage');

this.videoStage=c('DOM').find(this.stageWrapper,'div.videoStage');
this.prevPager=c('DOM').find(this.snowliftPopup,'a.snowliftPager.prev');
this.nextPager=c('DOM').find(this.snowliftPopup,'a.snowliftPager.next');

this.stageActions=c('DOM').find(x,'div.stageActions');

if(!this._uiRefresh)
this.buttonActions=c('DOM').find
(this.stageActions,
'div.fbPhotosPhotoButtons');



this.placeInfo=c('DOM').find(this.rhc,'div.fbPhotosSnowliftPlaceInfo');

this.sideAdUnit=c('DOM').find(x,"._5ciw");

c('CSS').conditionClass
(this.root,
'fullScreenAvailable',
this.fullscreen);};

w.prototype.

getGraphicWarningContainer=function(){
return this.stageWrapper;};
w.prototype.

getGraphicWarningHiddenContent=function(){
return this.stage;};
w.prototype.

initializeScroller=function(){
this.initializeScroller=c('emptyFunction');

c('CSS').addClass(this.scroller,
"_467y");

this.scrollableArea=c('ScrollableArea').fromNative(this.scroller,
{fade:true,
persistent:true});




var x=function(event){
var y=c('Event').$E(event).getTarget();
if(c('DOM').contains(this.ufiInputContainer,y)){


var z=c('DOMControl').getInstance(y);
if(z){



this.scrollableArea.scrollToBottom();


var aa=z.subscribe('resize',function(){
var ca=this.scrollableArea.isScrolledToBottom();
this.adjustScroller();
ca&&this.scrollableArea.scrollToBottom();}.
bind(this)),


ba=c('Event').listen(y,'blur',function(){
z.unsubscribe(aa);
ba.remove();});}}




if(y.classList.contains('UFIPagerLink')||
y.classList.contains('UFICommentLink'))
if(this.autoplayOptionScreenConfig&&
this.autoplayOptionScreenConfig.enabled)
this.haltAutoplay=true;}.


bind(this);

c('Arbiter').subscribe(c('UFIUIEvents').InputHeightChanged,function(y,z){
if(c('DOM').contains(this.ufiInputContainer,z.node))
this.adjustScroller();}.

bind(this));

c('Arbiter').subscribe(c('UFIUIEvents').PhotoPreviewHeightChanged,function(y,z){
if(!z.node||c('DOM').contains(this.ufiInputContainer,z.node))
this.adjustScroller();}.

bind(this));


c('Arbiter').subscribe(c('UFIUIEvents').Changed,function(y,z){
if(this.ufiForm===z.form)
this.adjustScrollerIfNecessary();}.

bind(this));


c('Arbiter').subscribe(c('UFIUIEvents').Comment,function(y,z){
if(this.ufiForm===z.form){
this.adjustScrollerIfNecessary();
if(z.isinverted){
this.scrollableArea.scrollToTop();}else 

this.scrollableArea.scrollToBottom();}}.


bind(this));




c('Event').listen(this.rhc,'click',function(event){
var y=event.getTarget();
if(c('Parent').byTag(y,'a')||
c('Parent').byTag(y,'button')||
c('DOM').isNodeOfType(y,'input'))
this.adjustScrollerIfNecessary();}.

bind(this));



c('Arbiter').subscribe(['reflow',c('UFIUIEvents').CommentPager],function(){
if(this.isOpen)
this.adjustScrollerIfNecessary();}.

bind(this));


c('Arbiter').subscribe(c('UFIUIEvents').TranslationRendered,function(){
this.adjustScrollerIfNecessary();}.
bind(this));

c('Event').listen(this.ufiForm,'focusin',x);};
w.prototype.

openHandler=function(x){
if(this.isOpen||!c('PhotoPermalinkURI').isValid(x)||
this.returningToStart||
x.getQueryData().closeTheater||
x.getQueryData().permPage){
this.openHandlerRegistered=false;
return false;}


this.open(x);
this._uriStack.push(new (c('URI'))(x).getQualifiedURI().toString());
c('PageTransitions').transitionComplete(true);

return true;};
w.prototype.

addHaltAutoplaySubscription=function(){
c('Arbiter').subscribe([c('UFIUIEvents').Focus],function(){
this.haltAutoplay=true;}.
bind(this));

c('Arbiter').subscribe([c('UFIUIEvents').Blur],function(x,y){
this.haltAutoplay=y.hasEnteredText;}.
bind(this));};
w.prototype.



open=function(x){
var y=new (c('URI'))(x),
z=y.getQueryData(),


aa=c('PhotoPermalinkURI').parse(y);
if(aa!==null){
z.fbid=aa.photo_id;
z.set=aa.set_token;}


c('ScriptPath').openOverlayView('snowlift',{snowlift_photo_id:z.fbid});

var ba=c('VideoPermalinkURI').parse(y);
if(ba!==null){
z.v=ba.video_id;
z.set=ba.set_token;}





if(!z.fbid&&!z.v&&!z.pid){
var ca=v.exec
(y.getPath());

if(ca)
z.v=ca[1];}



if(this.resetUriStack)
this._uriStack=[];


if(!this.initialLoad){
z.firstLoad=true;
this.initialLoad=true;

c('LitestandStoryInsertionStatus').registerBlocker
(function(){
return this.isOpen;}.
bind(this));


c('tickerPhoteSnowLiftOpenStatus').registerOpenChecker
(function(){
return this.isOpen;}.
bind(this));}



this.sessionID=Date.now();
this.loadQuery=Object.assign(z,
{ssid:this.sessionID});

if(this._dataFt)
this.loadQuery.data_ft=this._dataFt;


this.isOpen=true;
this.pagersShown=false;
this.refreshOnClose=false;
this.hilitedTag=null;
this.loadingStates={image:false,html:false};
this.replaceUrl=false;
this.movementDelta=0;
this.pivotsCarouselElement=null;
this.autoplayOptionScreenConfig=null;
this.haltAutoplay=false;
this.shouldRenderVideoPivots=false;




c('CSS').show(this.nextPager);
c('CSS').show(this.prevPager);

this.source=null;


this.saveTagSubscription=c('Arbiter').subscribe
('PhotoTagger.SAVE_TAG',
this.onTagSaved.bind(this));

this.taggedPhotoIds=[];


this.stream=new (c('PhotoStreamCache'))();
this.stream.init
(c('PhotosConst').VIEWER_SNOWLIFT,
'PhotoViewerPagelet',

'pagelet_photo_viewer',
this._shouldLog?this._logger:null,
z.tagSuggestionMode||'everyone');

if(c('URI').getMostRecentURI().getQueryData().viewas)
this.stream.setViewAs(c('URI').getMostRecentURI().getQueryData().viewas+'');

this.fetchInitialData();
this.setLoadingState(w.STATE_HTML,true);

this.rhcCollapsed=false;
this._open(x);


c('Bootloader').loadModules
(["PhotosButtonTooltips"],
function(da){
da.init();},
'PhotoSnowlift');


this._navHistory.push(y.getQualifiedURI().toString());};
w.prototype.

_open=function(x){
this.createLoader();

this.spotlight.show();



c('Arbiter').inform('layer_shown',{type:'PhotoSnowlift'});
c('Arbiter').inform('PhotoSnowlift.OPEN');


this.stageHandlers=
[c('Event').listen(window,'resize',this.adjustForResize.bind(this)),
c('Event').listen(this.stageWrapper,'click',function(event){
var aa=
c('DataAttributeUtils').getClickTrackingParent(event.getTarget());
if(!aa)
return;


try{var ca=JSON.parse(c('DataAttributeUtils').getDataFt(aa));
if(!ca.tn)
return;


var da=c('TrackingNodes').parseTrackingNodeString(ca.tn),
ea=Object.keys(c('TrackingNodeTypes')).
filter(function(fa){return c('TrackingNodeTypes')[fa]===da;});

if(ea.length)
c('FunnelLogger').appendAction(n,'click_'+ea.join('_'));}catch(

ba){

}}),

c('Event').listen(this.stageWrapper,'click',this.buttonListener.bind(this)),
c('Event').listen
(this.stageWrapper,
'mouseleave',
function(event){
var aa=event.getTarget();

if(c('Parent').bySelector(aa,"._khz"))
return;

if(!(c('Parent').byClass(aa,'snowliftOverlay')||
c('Parent').byClass(aa,'fbPhotoSnowliftTagApproval')||
c('Parent').byClass(aa,'tagPointer')||
c('Parent').byClass(aa,'arrow')||
c('Parent').byClass(aa,'faceboxSuggestion')||
c('Parent').byClass(aa,'typeaheadWrapper')||
c('Parent').byClass(aa,'photoTagTypeahead')||
c('Parent').byClass(aa,'fbPhotoTagger')))
this.unhiliteAllTags();

this._mouseOnPhotoStage=false;
this.hidePagers();}.
bind(this)),
c('Event').listen
(this.stageWrapper,
'mousemove',
this.hilitePager.bind(this)),
c('Event').listen
(this.stageWrapper,
'mousemove',
this.hiliteTagsOnMouseMove.bind(this)),
c('Event').listen
(this.stageWrapper,
'mouseenter',
function(){return this._mouseOnPhotoStage=true;}.bind(this)),

c('Event').listen
(this.overlay,
'mouseenter',
this.unhiliteAllTags.bind(this)),
c('Event').listen
(this.container,
'mousemove',
this._enableMouseOver.bind(this)),
c('Event').listen
(this.container,
'mouseover',
this._interceptMouseOver.bind(this)),
c('Event').listen
(this.stageWrapper,
'focusin',
this.hilitePager.bind(this)),
c('Event').listen
(this.rhc,
'focusin',
this.hidePagers.bind(this))];


this.stageHandlers.push
(c('Event').listen
(this.root,
'click',
function(event){
var aa=event.getTarget();
if(c('Parent').bySelector(aa,"._418x")){
if(c('FullScreen').isFullScreen()){

c('FunnelLogger').appendActionWithTagIfNew
(n,
'fullscreen_exit',
'fbPhotoSnowlift/close');

c('FullScreen').toggleFullScreen();
return;}


this.closingAction=c('PhotoSessionLog').X;
this.spotlight.hide();}else
if(this._isLiveBroadcast&&
c('Parent').bySelector(aa,"._3ixn"))
this.spotlight.hide();}.

bind(this)),

c('Event').listen
(this.container,
'click',
function(event){
var aa=event.getTarget();
if(c('Parent').byClass(aa,'rotateRight')){
c('FunnelLogger').appendActionWithTag
(n,
'rotate_image',
'right');

this.rotate('right');}else
if(c('Parent').byClass(aa,'rotateLeft')){
c('FunnelLogger').appendActionWithTag
(n,
'rotate_image',
'left');

this.rotate('left');}else

if(c('Parent').bySelector(aa,"._32_l")){

c('FunnelLogger').appendAction(n,'click-pivot-item');
var ba=c('Parent').bySelector
(aa,
"._32_l"),

ca=ba.getAttribute('data-fbid'),
da=this.stream.getCursor(),
ea=this.stream.calculateDistance(da,ca),


fa=this.stream.fbidList.indexOf(ca);
c('SnowliftVideoPivotsCarouselController').adjustCarousel(fa);
this.page(ea,false);
this.haltAutoplay=false;


this.removeAutoplayOptionScreen();}else
if(c('Parent').byClass(aa,'fbPhotoSnowliftZoom')){
this.openZoom(event);}else
if(this.fullscreen)
if(c('Parent').byClass(aa,'fbPhotoSnowliftFullScreen')){
c('FunnelLogger').appendActionWithTagIfNew
(n,
c('FullScreen').isFullScreen()?
'fullscreen_exit':
'fullscreen_enter',
'fbPhotoSnowliftFullScreen');

this.toggleFullScreen();}else
if(c('Parent').byClass(aa,'fbPhotoSnowliftCollapse')){
this.toggleCollapse();
c('FunnelLogger').appendAction(n,'toggle_collapse-rhc');}else

if(c('FullScreen').isFullScreen()&&
c('Parent').bySelector(aa,'.overlayBarButtons .comment_link')){

this.toggleCollapse();
c('FunnelLogger').appendAction(n,'toggle_collapse-rhc');}



var ga=c('Parent').byAttribute(aa,'data-action-type');
if(ga){
var ha=ga.getAttribute('data-action-type'),
ia=ga.getAttribute('data-action-tag');
c('FunnelLogger').appendActionWithTag(n,ha,ia);}else
if(c('Parent').byClass(aa,'addLocation')){
var ja=c('Parent').byClass(aa,'addLocation');
c('FunnelLogger').appendActionWithTag
(n,
'add_location',
c('CSS').hasClass(ja,'photosTruncatingUIButton')?
null:
'from-action-bar');}else

if(c('Parent').byClass(aa,'fbPhotosPhotoActionsTag')){
var ka=c('Parent').byClass(aa,'fbPhotosPhotoActionsTag');
if(c('CSS').hasClass(ka,'tagButton')){
c('FunnelLogger').appendActionWithTag
(n,
'tag_photo',
'start-tagging');}else

if(c('CSS').hasClass(ka,'doneTaggingLink')){
c('FunnelLogger').appendActionWithTag
(n,
'tag_photo',
'end-tagging');}else

if(c('CSS').hasClass(ka,'taggingOff')){
c('FunnelLogger').appendActionWithTag
(n,
'tag_photo',
'tagging-off');}else

if(c('CSS').hasClass(ka,'taggingOn'))
c('FunnelLogger').appendActionWithTag
(n,
'tag_photo',
'tagging-on');}else


if(c('Parent').byClass(aa,'UFILikeLink'))
c('FunnelLogger').appendAction(n,'like-photo');}.

bind(this)));



var y=c('ge')('fbPhotoSnowliftFeedback');
if(y)
this.stageHandlers.push
(c('Event').listen
(y,
'click',
function(event){
var aa=event.getTarget();


if(c('Parent').byClass(aa,'like_link')||
c('Parent').byClass(aa,'UFILikeLink')&&
c('Parent').byClass(aa,'UIActionLinks'))
this.toggleLikeButton();


var ba=
c('Parent').byClass(event.getTarget(),'uiUfiCollapsedComment');
if(ba){
c('FunnelLogger').appendActionWithTag
(n,
'like-photo',
'snowlift-feedback');

c('CSS').addClass(ba,'uiUfiCollapsedCommentToggle');}}.

bind(this)));




var z=c('ge')('fbPhotoSnowliftOnProfile');
if(z)
this.stageHandlers.push
(c('Event').listen
(z,
'click',
function(event){
if(c('Parent').byClass(event.getTarget(),
'fbPhotoRemoveFromProfileLink'))
this.refreshOnClose=true;}.

bind(this)));








if(this.resetUriStack)
this.startingURI=c('URI').
getMostRecentURI().
addQueryData({closeTheater:1}).
getUnqualifiedURI();




this.setLoadingState(w.STATE_IMAGE_DATA,true);

if(!this.transitionHandlerRegistered){
c('PageTransitions').registerHandler(this.transitionHandler.bind(this));

this.transitionHandlerRegistered=true;}


c('PhotoSessionLog').initLogging(c('PhotoSessionLog').SNOWLIFT);

if(this.pivots)
c('PhotoSessionLog').setRelevantCount(this.pivots.relevantCount);};

w.prototype.

toggleFullScreen=function(){
var x=c('FullScreen').toggleFullScreen(document.documentElement);
if(x){
if(this._snowliftViewableModule){
this._viewable.onToggleIntoFullScreen();}else{

var y=this.stream.getCurrentImageData();
if(y&&y.url&&this.image.src!==y.url&&
this.shouldShowHiRes(y))

if(!this._log(y.url))
new Image().src=y.url;}




c('PhotoSessionLog').logEnterFullScreen(this.stream.getCursor());}else 

if(this._snowliftViewableModule)
this._viewable.onToggleOutOfFullScreen();};


w.prototype.

_getIsZoomAllowed=function(x){

return !!(x&&
!x.video&&
!x.spherical&&
x.dimensions&&

(x.dimensions.x>window.innerWidth||
x.dimensions.y>window.innerHeight));};


w.prototype.

showZoom=function(x){
c('CSS').conditionClass
(this.root,
'zoomAvailable',
this._getIsZoomAllowed(x));};

w.prototype.

openZoom=function(event){
var x=this.stream.getCurrentImageData();

if(this._snowliftViewableModule){
this._viewable.onToggleIntoFullScreen();}else

if(x&&x.url&&this.imageData.src!==x.url&&
this.shouldShowHiRes(x))


if(!this._log(x.url))
new Image().src=x.url;



var y=c('DOM').find
(this.stageWrapper,
"._2-sx"),


z=y.getBoundingClientRect();

y.style.width='auto';
y.style.height='auto';
y.classList.add('zoom');

var aa=void 0,ba=void 0;
if(x){
var ca=x.dimensions;
aa=Math.max(0,ca.x-window.innerWidth);
ba=Math.max(0,ca.y-window.innerHeight);}else{

var da=y.getBoundingClientRect();
aa=Math.max(0,da.width-window.innerWidth);
ba=Math.max(0,da.height-window.innerHeight);}


var ea=false;
if(aa){
ea=true;
aa+=t*2;
y.classList.add('overflowX');}

if(ba){
ea=true;
ba+=t*2;
y.classList.add('overflowY');}


var fa=void 0;

if(ea){
var ga=-event.clientX/window.innerWidth*aa+'px',
ha=-event.clientY/window.innerHeight*ba+'px';
y.style.transform='translate3d('+ga+','+ha+',0)';

fa=c('Event').listen
(y,
'mousemove',
function(event){
var ma=-event.clientX/window.innerWidth*aa+'px',
na=-event.clientY/window.innerHeight*ba+'px';
y.style.transform='translate3d('+ma+','+na+',0)';});}




var ia=null,
ja=null,

ka=function ma(){
y.style.width=z.width+'px';
y.style.height=z.height+'px';
y.style.transform='';
y.classList.remove('zoom','overflowX','overflowY');

if(fa)
fa.remove();

ia.remove();

la.unsubscribe(ja);
la.destroy();

return false;},


la=new (c('Layer'))({},document.createElement('div'));
ja=la.subscribe('key',ka);
la.show();

ia=c('Event').listen
(y,
'click',
ka);


if(this._snowliftViewableModule){
this._viewable.onEnterFullScreen();}else

if(x&&x.url&&this.imageData.src!==x.url&&
this.shouldShowHiRes(x))


this.switchImage(x.url);};

w.prototype.

getStream=function(){
return this.stream;};
w.prototype.

fetchInitialData=function(){
this.stream.waitForInitData();

var x=this.loadQuery.within_business?
this.loadQuery.business_thread_id:
this.loadQuery.fbid,
y=c('UFIFeedbackTargets').getFeedbackTargetIfExists
(x)||
{};
c('UIPagelet').loadFromEndpoint
('PhotoViewerInitPagelet',
c('ge')('pagelet_photo_viewer_init',this.root),
this.loadQuery,

{actorID:y.actorforpost||null,
usePipe:true,
jsNonblock:true,
crossPage:true,
allowIrrelevantRequests:this.allowIrrelevantRequests});};


w.prototype.

toggleCollapse=function(){
if(this.rhcCollapsed){
this.uncollapseRHC();}else 

this.collapseRHC();};

w.prototype.

collapseRHC=function(){
this.rhcCollapsed=true;
c('CSS').addClass(this.root,'collapseRHC');
this.adjustForResize();};
w.prototype.

uncollapseRHC=function(){
this.rhcCollapsed=false;
c('CSS').removeClass(this.root,'collapseRHC');
this.adjustForResize();};
w.prototype.

closeHandler=function(){
if(!this.isOpen)
return;





this.closingAction=this.closingAction||c('PhotoSessionLog').ESC;




if(c('URI').getMostRecentURI().
addQueryData({closeTheater:1}).
getUnqualifiedURI().
toString()==this.startingURI.toString()){
this.close();
return;}


this.returnToStartingURI(this.refreshOnClose);
this.close();};
w.prototype.

returnToStartingURI=function(x,y){
if(!x)
if(y){
this.squashNextTransition(c('goURI').bind(null,y));}else 

this.squashNextTransition();








this.returningToStart=true;

var z=c('Arbiter').subscribe('page_transition',function(){
this.returningToStart=false;
z.unsubscribe();}.
bind(this)),





aa=x||isNaN(c('UserAgent_DEPRECATED').opera()),




ba=this._uriStack.length;
if(aa&&ba<window.history.length){
window.history.go(-ba);}else{

var ca=this.startingURI,
da=new (c('URI'))(ca).removeQueryData('closeTheater');

if(ca.getQueryData().sk=='approve'&&
ca.getPath()=='/profile.php'){
da.removeQueryData('highlight');
da.removeQueryData('notif_t');}

c('goURI')(da);}};

w.prototype.

squashNextTransition=function(x){


this.squashNext=true;

c('PageTransitions').registerHandler(function y(){
if(this.squashNext){
this.squashNext=false;
if(x)
setTimeout(x,0);

c('PageTransitions').transitionComplete(true);

return true;}


return false;}.


bind(this),7);};
w.prototype.

handleNavigateAway=function(x){

var y=c('computeRelativeURI')
(c('PageTransitions').getMostRecentURI().getQualifiedURI(),
x.getAttribute('href'));




if(this.backButton&&
c('ReactDOM').findDOMNode(this.backButton)===x){
this._navHistory.pop();



this.resetUriStack=false;
this.open(y.toString());



this._navHistory.pop();
this.currentAuthorName=null;
return false;}



if(c('Parent').bySelector
(x,"._56lp a")){

this.resetUriStack=false;
this.open(y.toString());
return false;}




if(this.isOpen&&
y instanceof c('URI')&&
y.getUnqualifiedURI().toString()!=
this.startingURI.toString()&&
y.getPath()!='/photo.php'){
if(!this.closingAction)
this.closingAction=c('PhotoSessionLog').NAVIGATE;


this.returnToStartingURI(false,y);
this.close();

return false;}





if(y.getPath()=='/photo.php'&&
c('URI').getMostRecentURI().getPath()!=='/photo.php')
this.close();


return true;};
w.prototype.




postProcessTaggedPhotos=function(){
if(this.taggedPhotoIds&&this.taggedPhotoIds.length>0){
var x=null;
if(this.source===w.COLLECTIONS_UNTAGGED_PHOTOS){
x='/ajax/photos/photo/edit/skiptag/';}else
if(this.source===w.PHOTOS_OF_YOU_SUGGESTIONS||
this.source===w.FRIENDS_IN_PHOTOS_SUGGESTIONS)
x='/ajax/photos/photo/add_to_star_grid/';


if(x)
new (c('AsyncRequest'))().
setURI(x).
setAllowCrossPageTransition(true).
setData
({media_id:this.taggedPhotoIds,
source:this.source}).

send();}};


w.prototype.

onTagSaved=function(x,y){
if(this.taggedPhotoIds){
if(this.source===w.PHOTOS_OF_YOU_SUGGESTIONS&&
!y.self_tag)
return;


this.taggedPhotoIds.push(y.photo_fbid);}};

w.prototype.

clearAlbumBoundaries=function(){
this._albumBoundaries=
{start:0,
end:0,
dir:0};};

w.prototype.

close=function(){
if(!this.isOpen)
return;


c('FunnelLogger').appendActionWithTag
(n,
'close_snowlift',
c('PhotoSessionLog').closingTypeToString(this.closingAction));

c('FunnelLogger').endFunnel(n);

this._albumFBID=null;

this.hideMorePhotos();
this.hidePivotSlide();
this._pauseVideoIfNeeded();

this.isOpen=false;
this._navCount=0;
this.clearAlbumBoundaries();

if(this.fullscreen)
c('FullScreen').disableFullScreen();

c('CSS').removeClass(document.body,'fbPhotoSnowliftFullScreenMode');

this.spotlight.hide();

this.openExplicitly=false;

this.postProcessTaggedPhotos();

c('Arbiter').unsubscribe(this.saveTagSubscription);
this.taggedPhotoIds=[];

this.closeDirty=true;
c('setTimeoutAcrossTransitions')(this.closeCleanup.bind(this),0);

if(this.snowflake){
c('CSS').removeClass(this.root,'snowflake');
this.extraClasses.forEach(function(x){
c('CSS').removeClass(this.root,x);},
this);}


c('UFIRootRegistry').cleanupSnowliftNodes();

this.extraClasses=[];
this.snowflake=false;
this.firstInSet=null;
this.movementDelta=0;};
w.prototype.

closeCleanup=function(){
if(!this.isOpen&&this.squashNext){




this.squashNext=false;
c('PageTransitions').transitionComplete(true);}


c('ScriptPath').closeOverlayView('snowlift');

this.closeDirty=false;

c('CSS').removeClass(this.root,'dataLoading');


c('PhotoSessionLog').logPhotoViews(this.closingAction);

this.destroy();


c('CSS').hide(this.errorBox);
if(this._snowliftViewableModule){
this._viewable.hide();}else 

c('CSS').hide(this.image);

this.thumbSpherical=false;
this.thumbSrc=null;
this.shouldStretch=false;
this.resetUriStack=true;
var x=this.stream.getCursor();


if(c('VideoPlayerAbortLoadingExperiment').canAbort){
var y;
for(y=0;y<this.stream.getLength();y++){
var z=this.stream.getImageData(this.stream.getCursorAt(y));
if(z&&z.video&&z.controller)
z.controller.abortLoading();}}




c('CSS').removeClass(this.stageWrapper,'showVideo');
this._emptyVideoStage();
if(this.PhotoSnowliftVideoNode)
this.PhotoSnowliftVideoNode.destroyVideoNode();


this.uncollapseRHC();


this.currentImageSize=null;



this.currentMinSize=null;
this.setStagePagersState('reset');


this.recacheData();
c('DOM').empty(this.sideAdUnit);
this.stream.destroy();
this.root.setAttribute('aria-busy','true');

this._navHistory=[];

var aa=this.closingAction===c('PhotoSessionLog').NAVIGATE;
this.closingAction=null;
if(!this.openHandlerRegistered){
c('PageTransitions').registerHandler(this.openHandler.bind(this));
this.openHandlerRegistered=true;}

c('Arbiter').inform('layer_hidden',{type:'PhotoSnowlift'});
c('Arbiter').inform
('PhotoSnowlift.CLOSE',

{is_navigating:aa,
fbid:x});};


w.prototype.

createLoader=function(x){
if(this.currentImageSize===null){



this.adjustStageSize(w.STAGE_MIN);}else{



var y=this.getStageSize(this.currentImageSize);

y=new (c('Vector'))
(Math.max(y.x,this.getMinimumStageWidth()),
Math.max(y.y,w.STAGE_MIN.y));


var z=this.getImageSizeInStage(this.currentImageSize,y);
if(this.thumbSrc===null){
this.adjustStageSize(z);}else{

var aa=c('DOM').create('img',
{className:'spotlight',
alt:'',
src:this.thumbSrc,
style:
{width:z.x+'px',
height:z.y+'px'},

onload:function ba(){
c('Arbiter').inform('PhotoSnowlift.IMAGE_LOADED');}});


if(this._snowliftViewableModule){
this._useViewable
(this._snowliftViewableModule.fromImageElement
(aa,
this.thumbSpherical),

z,
false);}else 


this.useImage
(aa,
z,
false);}}





this.setLoadingState(this.STATE_IMAGE_PIXELS,true);



if(x)


setTimeout(function(){






var ba=function(){var fa=arguments.length<=0||arguments[0]===undefined?null:arguments[0];
if(!this.isOpen)
return;




if(!this.stream||!this.stream.errorInCurrent()){
this.switchImage(fa?fa:x,
this.currentImageSize);
this.setLoadingState(w.STATE_IMAGE_DATA,false);}}.

bind(this);

if(c('EncryptedImg').isEncrypted(x)){

c('EncryptedImg').load(x,ba);}else{

var ca=new Image(),
da=c('Event').listen(ca,'load',ba),
ea=function fa(){
if(da){
da.remove();
da=null;}};


c('Arbiter').subscribeOnce('PhotoSnowlift.SWITCH_IMAGE',ea);
c('Arbiter').subscribeOnce('PhotoSnowlift.CLOSE',ea);







ca.src=x;}

this._log(x);}.
bind(this),0);


c('CSS').hide(this.stageActions);
this.setStagePagersState('disabled');};
w.prototype.


initDataFetched=function(x){
c('PhotoSessionLog').setPhotoSet(this.stream.getPhotoSet());
c('PhotoSessionLog').setLogFbids(x.logids);
if(x.eid)
c('PhotoSessionLog').setEid(x.eid);


this._albumBoundaries.start=this.stream.getCursor();

var y=this.stream.getCurrentImageData();

if(c('PhotoSnowliftLoggingConfig').logOnInit)
c('PhotoSessionLog').addPhotoView
(y.info,
this.shouldShowHiRes(y),
this.fullscreen&&c('FullScreen').isFullScreen());



var z=this.stream.getCurrentExtraData();
if(this._showHover&&z)
c('PhotoTagSearchPivotLogger').logImageImpression
('snowlift',



String(this.stream.getCursor()),
Object.keys(z.tagRects));



if(z&&z.source!==undefined){
this.source=parseInt(z.source,10);
c('PhotoSessionLog').setSource(this.source);}


if(!this.pageHandlers)
this.pageHandlers=
[c('Event').listen
(this.root,'click',this.pageListener.bind(this)),
c('Event').listen
(this.root,'mouseleave',this.mouseLeaveListener.bind(this))];



this.showZoom(y);

c('CSS').show(this.stageActions);
this.root.setAttribute('aria-busy','false');

this.isLoggedInViewer=x.loggedin;

this.disableAds=!this.isLoggedInViewer||
x.fromad||


x.withinbusiness||
this.stream.isInViewAsMode();

this.loadAds();};
w.prototype.

adjustScrollerIfNecessary=function(){
clearTimeout(this.scrollerTimeout);
this.scrollerTimeout=setTimeout(this.adjustScroller.bind(this),0);};
w.prototype.

adjustScroller=function(x){
clearTimeout(this.scrollerTimeout);

this.initializeScroller();
this.scrollableArea.resize();

var y=c('Vector').getElementDimensions(this.rhc),




z=y.y;
z-=c('Vector').getElementDimensions(this.rhcHeader).y;
z-=c('Vector').getElementDimensions(this.ufiInputContainer).y;
if(this.placeInfo){
var aa=c('Vector').getElementDimensions(this.placeInfo);
z-=aa.y;
c('Style').set(this.sideAdUnit,'bottom',aa.y+'px');}


if(x==null)
x=this.resizeCommentsForAds?this.lastAdsHeight:0;

this.lastAdsHeight=x;

z=Math.max(0,z);



var ba=c('Vector').getElementDimensions(this.scrollerBody).y,
ca=
Math.max(w.MIN_UFI_HEIGHT,z-x);
if(ba>=ca){
if(z>ca){

c('CSS').removeClass(this.rhc,'pinnedUfi');
z-=ca;}else{

c('CSS').addClass(this.rhc,'pinnedUfi');
z=0;}

c('Style').set(this.scroller,'height',ca+'px');}else{

c('Style').set(this.scroller,'height','auto');
c('CSS').removeClass(this.rhc,'pinnedUfi');
z-=ba;}






var da=c('Vector').getElementDimensions(this.ufiInputContainer).y;
c('Style').set(this.ufiForm,'padding-bottom',da+'px');


c('PhotoSnowliftAds').resize(new (c('Vector'))(y.x,z));

this.scrollableArea.adjustGripper();};
w.prototype.

adjustForResize=function(){
this.currentMinSize=null;
this.adjustStageSize();
this.adjustForNewData();};
w.prototype.


shouldShowHiRes=function(x){
if(!x||!x.smallurl)
return false;


var y=this.getStageSize(x.dimensions);
y=this._adjustStageSizeForPixelRatio(y);

var z=this.getImageSizeInStage(x.dimensions,y);

return (z.x>w.STAGE_NORMAL_MAX.x||
z.y>w.STAGE_NORMAL_MAX.y);};

w.prototype.

_adjustStageSizeForPixelRatio=function(x){
if(window.devicePixelRatio&&window.devicePixelRatio>1)



x=new (c('Vector'))
(x.x*window.devicePixelRatio,
x.y*window.devicePixelRatio);


return x;};
w.prototype.



getImageURL=function(x){
if(x.video){
return null;}else
if(x.smallurl&&!this.shouldShowHiRes(x))


return x.smallurl;

return x.url;};
w.prototype.

getImageOrVideoDimensions=function(x){
if(x.video){
var y=this.getVideoElement(x.video);
if(y)
return this.getVideoSize(y);}



return this.getImageDimensions(x);};
w.prototype.

getImageDimensions=function(x){



if(this._snowliftViewableModule){
return this._viewable.getNaturalDimensions();}else 

if(x.smalldims&&
(!this.shouldShowHiRes(x)||
this.image.src===x.smallurl))
return x.smalldims;


return x.dimensions;};
w.prototype.



getStageSize=function(x,y){
var z=c('Vector').getViewportDimensions();
if(this._isLiveBroadcast)
z.y-=200;



var aa=new (c('Vector'))
(x.x,
x.y);


if(y)
aa=new (c('Vector'))
(Math.max(x.x,y.x),
Math.max(x.y,y.y));



var ba,ca;

if(this.fullscreen&&c('FullScreen').isFullScreen()){
ca=screen.height-w.FULL_SCREEN_PADDING*2;
return new (c('Vector'))
(this.rhcCollapsed?
screen.width:
screen.width-w.SIDEBAR_SIZE_MAX,
ca);}else{





ba=Math.min
(aa.x,
z.x-
w.SIDEBAR_SIZE_MAX-w.STAGE_CHROME.x);





var da=z.y-w.STAGE_CHROME.y;
ca=Math.min(aa.y,da);}





if(ba===0&&ca===0)
return new (c('Vector'))(0,0);




var ea=ba/ca,
fa=aa.x/aa.y;
if(ea<fa)
return new (c('Vector'))(ba,Math.round(ba/fa));



return new (c('Vector'))(Math.round(ca*fa),ca);};
w.prototype.

getExtraVerticalSpace=function(){
if(this.getVideoOnStage())
return w.VIDEO_BOTTOM_BAR_SPACE*2;


return 0;};
w.prototype.




getComponentsHeight=function(){
var x=this.getVideoOnStage();
if(x){
var y=c('ge')(x);
if(y)
return this.getVideoComponentsHeight(y);}



return 0;};
w.prototype.

getMinimumStageWidth=function(){
var x=w.STAGE_MIN.x;
if(this.getVideoOnStage())

return x;


if(c('PhotoSnowliftActionsGating').ALLOW_MAKE_PROFILE_PICTURE_BUTTON)
x+=w.PROFILE_PICTURE_BUTTON_WIDTH;

return x;};
w.prototype.

getImageSizeInStage=function(x,y){
var z=x.x,
aa=x.y,
ba=this.getComponentsHeight(),
ca=this.getExtraVerticalSpace();



aa-=ba;
y=new (c('Vector'))
(y.x,
y.y-ba-ca);


if(z>=y.x||aa>=y.y){
var da=y.x/y.y,
ea=z/aa;
if(da<ea){
z=y.x;
aa=Math.round(z/ea);}else
if(da>ea){
aa=y.y;
z=Math.round(aa*ea);}else{

z=y.x;
aa=y.y;}}



return new (c('Vector'))(z,aa+ba);};
w.prototype.







adjustStageSize=function(x){
var y=this.currentImageSize;


if(x){
y=x;}else{

var z=this.stream&&this.stream.getCurrentImageData();
if(z)
y=this.getImageOrVideoDimensions(z);}


if(!y)
return;

this.currentImageSize=y;
var aa=this.getExtraVerticalSpace();


if(this.shouldStretch&&
!this.getVideoOnStage()&&
y.x>y.y&&
y.x<=w.TIMELINE_STRETCH_WIDTH&&
y.x>=w.TIMELINE_STRETCH_MIN){
y.y=Math.round
(y.y*w.TIMELINE_STRETCH_WIDTH/y.x);
y.x=w.TIMELINE_STRETCH_WIDTH;}



var ba=this.getStageSize(y,this.currentMinSize);


if(!this.currentMinSize)
this.currentMinSize=new (c('Vector'))(0,0);


this.currentMinSize=new (c('Vector'))
(Math.max(ba.x,this.getMinimumStageWidth(),this.currentMinSize.x),
Math.max(ba.y,w.STAGE_MIN.y,this.currentMinSize.y));


var ca=this.getImageSizeInStage
(y,this.currentMinSize),



da=this.currentMinSize.x-ca.x,
ea=this.currentMinSize.y-ca.y;
if(da>0&&da<w.PADDING_MIN){
this.currentMinSize.x-=da;}else
if(ea>0&&ea<w.PADDING_MIN)
this.currentMinSize.y-=ea;


var fa=this.currentMinSize.x+w.SIDEBAR_SIZE_MAX;
if(this.rhcCollapsed)
fa=this.currentMinSize.x;


var ga=
this.getVideoOnStage()&&this.pivotsCarouselElement,


ha=0,
ia=this.currentMinSize.y;


if(ga){
var ja=this.pivotsCarouselElement.clientHeight;

ha=Math.ceil(ja/100)*100;
ia+=ha;}



this.snowliftPopup.style.cssText=
'width:'+
fa+'px;'+
'height:'+ia+'px;';






var ka=this.currentMinSize.y-aa,
la=ka+ha;

if(c('UserAgent_DEPRECATED').firefox()){
var ma=c('Style').get(this.stageWrapper,'font-size');
ka=
ka/parseFloat(ma)+'em';
la=
la/parseFloat(ma)+'em';}else{

ka+='px';
la+='px';}


this.stageWrapper.style.cssText=
'width:'+this.currentMinSize.x+'px;'+
'line-height:'+ka+';';

if(this.getVideoOnStage()){
this.videoStage.style.cssText=
'width:'+this.currentMinSize.x+'px;'+
'height:'+la+';';
if(!this._inputBarAdjusted&&this._isLiveBroadcast){
var na=
parseInt(c('Style').get(this._liveInputBar,'right'),10);
c('Style').set
(this._liveInputBar,
'right',
na+da/2+'px');

this._inputBarAdjusted=true;}}





ca.y-=this.getComponentsHeight();

this.setMediaElementSize(ca);

if(ga)
this.setPivotCarouselElementWidth(ma);


var oa=this.getTagger();
if(oa)
oa.repositionTagger();


this.adjustScrollerIfNecessary();};
w.prototype.

setMediaElementSize=function(x){
var y=this.image;
if(this.getVideoOnStage()){
if(this._videoPlayerStateManager&&
this._videoPlayerStateManager.setDimensions){
this._videoPlayerStateManager.setDimensions(x.x,x.y);
return;}else 

y=
c('DOM').scry(this.videoStage,"._53j5")[0]||y;}else 


if(this._snowliftViewableModule){
this._viewable.setDimensions(x);
return;}


if(!y)
return;

y.style.cssText=
'width:'+x.x+'px;'+
'height:'+x.y+'px;';};
w.prototype.

setPivotCarouselElementWidth=function(x){
var y=this.videoStage.clientWidth;
if(c('UserAgent_DEPRECATED').firefox()){
y=y/parseFloat(x)+'em';}else 

y+='px';

this.pivotsCarouselElement.style.width=y;};
w.prototype.

adjustForNewData=function(){






var x;
if(this._snowliftViewableModule){
x=this._viewable.getDimensions();}else
if(this.image){
x=c('Vector').getElementDimensions(this.image);}else 

return;

var y=c('DOM').scry(this.stage,'div.tagsWrapper')[0];
if(y){
c('Style').set(y,'width',x.x+'px');
c('Style').set(y,'height',x.y+'px');}};

w.prototype.

adsDisplayedCallback=function(x,y){
var z=
this.resizeCommentsForAds&&
!this.inAdsDisplayedCallback&&
!this.disableAds&&
x<w.MIN_ADS_VISIBLE&&
y.length>=w.MIN_ADS_VISIBLE;

if(z){
this.inAdsDisplayedCallback=true;
var aa=y[w.MIN_ADS_VISIBLE-1];
this.adjustScroller(aa);

this.inAdsDisplayedCallback=false;}};

w.prototype.

setLoadingState=function(x,y){
switch(x){
case w.STATE_IMAGE_PIXELS:
c('CSS').conditionClass(this.root,'imagePixelsLoading',y);
break;

case w.STATE_IMAGE_DATA:
this.loadingStates[x]=y;
c('CSS').conditionClass(this.root,'imageLoading',y);
break;

case w.STATE_HTML:
this.loadingStates[x]=y;
c('CSS').conditionClass(this.root,'dataLoading',y);
this.rhc.setAttribute('aria-busy',y?'true':'false');
break;}};

w.prototype.

destroy=function(){
this.stageHandlers.forEach(function(x){
x.remove();});


if(this.pageHandlers){
this.pageHandlers.forEach(function(x){
x.remove();});

this.pageHandlers=null;}

if(this._actionsMenuSubscriptionsHandler){
this._actionsMenuSubscriptionsHandler.release();
this._actionsMenuSubscriptionsHandler=null;}


this._videoPlayerStateManager=null;};
w.prototype.




checkState=function(x){var y=arguments.length<=1||arguments[1]===undefined?false:arguments[1];
if(x!=w.STATE_ERROR&&!this.loadingStates[x])
return;


switch(x){
case w.STATE_IMAGE_DATA:
var z=this.stream.getCurrentImageData();
if(z){
var aa=this.getImageURL(z);
if(aa){
this.switchImage
(aa,
null,
true,
y);}else

if(z.video)
if(z.shouldDelayStartupVideo){
c('setImmediate')(function(){return this.switchVideo(z.video,true);}.bind(this));}else 

this.switchVideo(z.video,true);


this.setLoadingState(x,false);}

break;

case w.STATE_HTML:
if(this.stream.getCurrentHtml()){
this.swapData();
this.setLoadingState(x,false);}

break;



default:if(this.stream.errorInCurrent()){
if(this._snowliftViewableModule){
this._viewable.hide();}else 

c('CSS').hide(this.image);

c('CSS').show(this.errorBox);}

break;}};

w.prototype.

buttonListener=function(event){
var x=event.getTarget(),
y=Date.now();

if(c('Parent').byClass(x,'fbPhotoTagApprovalBox')){
c('FunnelLogger').appendAction(n,'approve_photo_tag');
return;}



if(y-this.lastPage<350)

return;


if(c('Parent').byClass(x,'fbPhotosPhotoLike')){
this.likePhoto();}else
if(c('Parent').byClass(x,'tagApproveIgnore')){
this.updateTagBox(event,x);
c('FunnelLogger').appendAction(n,'ignore_photo_tag');}else

if(c('Parent').bySelector(x,"._5ymu")){

if(!this._showingMorePhotos){
c('PhotoTagSearchPivotLogger').logShowMorePhotos();
var z=this.stream.getCursor();
if(z)
this.showMorePhotos(String(z));}else{


c('PhotoTagSearchPivotLogger').logHideMorePhotos();
this.hideMorePhotos();}

return;}

this.hideMorePhotos();};
w.prototype.

likePhoto=function(){
c('FunnelLogger').appendActionWithTag
(n,
'like_photo',
'snowlift-feedback');

c('PhotoSessionLog').addButtonLike();
var x=c('$')('fbPhotoSnowliftFeedback'),




y=c('DOM').scry(x,'button.like_link')[0];
if(!y)


y=c('DOM').scry(x,'a.UFILikeLink')[0];

var z=y.getAttribute('href');
if(c('FullScreen').isFullScreen())


if(c('UserAgent_DEPRECATED').chrome())


y.setAttribute('href','javascript:;');



y.click();
y.setAttribute('href',z);};
w.prototype.

toggleLikeButton=function(){
var x=
c('DOM').scry(this.buttonActions,'a.fbPhotosPhotoLike')[0];
if(x){

var y=c('DOM').find(this.root,'.likeCount'),
z=c('DOM').find(y,'.likeCountNum'),
aa=c('CSS').hasClass(x,'viewerLikesThis');

c('FunnelLogger').appendActionWithTag
(n,
aa?
'unlike_photo':
'like_photo',
'snowlift-feedback');


if(y)
if(aa){
c('DOM').setContent
(z,
parseInt(z.textContent,10)-1);}else 

c('DOM').setContent
(z,
parseInt(z.textContent,10)+1);


c('CSS').toggleClass(x,'viewerLikesThis');
c('CSS').removeClass(x,'viewerAlreadyLikedThis');}};

w.prototype.

likePhotoWithKey=function(){
return c('LikeConfirmer').like
(this.likePhoto.bind(this),
c('getActiveElement')());};

w.prototype.

updateTagBox=function(x,y){
this.unhiliteAllTags();

var z=c('ge')(x);
if(!z)
return;


c('CSS').addClass(z,'tagBox');
c('CSS').addClass(z,'tagBoxPendingResponse');
c('CSS').removeClass(z,'tagBoxPending');
c('CSS').hide(c('DOM').find(z,'span.tagForm'));

if(y){
c('CSS').show(c('DOM').find(z,'span.tagApproved'));}else 

c('CSS').show(c('DOM').find(z,'span.tagIgnored'));};

w.prototype.




rotate=function(x){
var y=this.stream.getCursor();

if(this.getVideoOnStage()){
var z=x=='left'?270:90;
!!this.videoRotateURI||k(0,'Video rotate URI not set.');
c('Bootloader').loadModules(["VideoRotate"],function(ba){
new ba(y,this.videoRotateURI).motionRotate(z);}.
bind(this),'PhotoSnowlift');
return;}


var aa=babelHelpers['extends']
({fbid:y,
opaquecursor:this.stream.getOpaqueCursor(y),
cs_ver:c('PhotosConst').VIEWER_SNOWLIFT},
this.stream.getPhotoSetQuery());

aa[x]=1;

this.setLoadingState(w.STATE_IMAGE_DATA,true);
this.setLoadingState(this.STATE_IMAGE_PIXELS,true);
if(this._snowliftViewableModule){
this._viewable.hide();}else 

c('CSS').hide(this.image);


new (c('AsyncRequest'))('/ajax/photos/photo/rotate/').
setAllowCrossPageTransition(true).
setData(aa).
setErrorHandler(this.rotationError.bind(this,y)).
setFinallyHandler(this.rotationComplete.bind(this,y)).
setMethod('POST').
setReadOnly(false).
send();};
w.prototype.

rotationComplete=function(x,y){
if(x==this.stream.getCursor()){


this.setLoadingState(w.STATE_IMAGE_DATA,false);



this.switchImage(this.getImageURL(this.stream.getCurrentImageData()));
this.swapData();}};

w.prototype.

rotationError=function(x,y){

if(x==this.stream.getCursor()){
this.setLoadingState(w.STATE_IMAGE_DATA,false);
this.switchImage(this.getImageURL(this.stream.getCurrentImageData()));


c('Bootloader').loadModules(["AsyncResponse"],function(z){
z.defaultErrorHandler(y);},
'PhotoSnowlift');}};

w.prototype.



saveTagsFromPayload=function(x){
this.storeFromData(x);

if('data' in x&&this.stream.getCursor() in x.data)
this.swapData();};

w.prototype.

saveEdit=function(){
if(!c('CSS').hasClass(this.root,'fbPhotoSnowliftEditMode'))
return;

c('Bootloader').loadModules
(["PhotoInlineEditor","FormSubmit"],
function(x,y){
var z=x.getInstance(this.getViewerConst());
z&&y.send(z.getForm().controller);}.
bind(this),'PhotoSnowlift');};

w.prototype.

mouseLeaveListener=function(event){
this.unhiliteAllTags();
this.reHilitePendingTag();};
w.prototype.

hilitePager=function(event){
var x=c('Vector').getEventPosition(event),
y=c('Vector').getElementPosition(this.stage),
z=c('Vector').getElementDimensions(this.stage);



if(c('Locale').isRTL()){
this.stagePagerPrev=
z.x-(x.x-y.x)<
w.GOPREV_AREA;}else 

this.stagePagerPrev=x.x-y.x<
w.GOPREV_AREA;

c('CSS').conditionClass(this.prevPager,'hilightPager',this.stagePagerPrev);
c('CSS').conditionClass(this.nextPager,'hilightPager',!this.stagePagerPrev);



var aa,
ba=event.getTarget();
if(!c('Parent').byClass(ba,'snowliftOverlay')&&
!c('Parent').byClass(ba,'bottomBarActions')&&
!c('Parent').byClass(ba,'snowliftPager'))
aa=w.PAGER_FADE;

this.showPagers(aa);};
w.prototype.

showPagers=function(x){
clearTimeout(this.fadePagerTimer);
this.setStagePagersState('active');

if(x!==undefined)
this.fadePagerTimer=setTimeout(this.hidePagers.bind(this),x);};

w.prototype.

hidePagers=function(){
if(this._mouseOnPhotoStage||this._actionMenuOpen)
return;


clearTimeout(this.fadePagerTimer);
this.setStagePagersState('inactive');};
w.prototype.

getTagger=function(){
return this.PhotoTagger&&
this.PhotoTagger.getInstance(c('PhotosConst').VIEWER_SNOWLIFT);};
w.prototype.

unhiliteAllTags=function(){
clearTimeout(this.unhiliteTimer);
c('DOM').scry(this.stage,'div.tagsWrapper div.hover').forEach
(function(y){
c('CSS').removeClass(y,'hover');});




c('DOM').scry(this.stage,'div.tagsWrapper div.otherActive').forEach
(function(y){
c('CSS').removeClass(y,'otherActive');});


this.hilitedTag=null;
this.showingTypeaheadSuggestions=false;

if(!c('CSS').hasClass(this.root,'taggingMode')){
var x=this.getTagger();
if(x&&!x.isSpherical){
x.hideTagger();
x.setCurrentFacebox(null);}}};


w.prototype.

switchHilitedTags=function(x,y){
if(this.switchTimer!==null){
clearTimeout(this.switchTimer);
this.switchTimer=null;}



this.unhiliteAllTags();


this.hiliteAllBoxes();

var z=c('ge')(x);
if(z){
this.hilitedTag=x;

if(!c('CSS').hasClass(this.root,'taggingMode')&&
c('PhotosUtils').isFacebox(this.hilitedTag)){
var aa=this.getTagger();
if(aa){
c('CSS').addClass(z,'hover');
var ba=aa.getFacebox(x);
aa.setCurrentFacebox(ba);
if(ba)
aa.addTagFromFacebox(ba);}}else 




c('CSS').addClass(z,'hover');



if(c('CSS').hasClass(z,'tagBoxPending')&&
!c('CSS').hasClass(z,'showPendingTagName')&&
y===true){
c('DOM').scry(this.stage,'div.tagsWrapper div.showPendingTagName').forEach
(function(ca){
c('CSS').removeClass(ca,'showPendingTagName');});


c('CSS').addClass(z,'showPendingTagName');}}};


w.prototype.

reHilitePendingTag=function(){

var x=c('ge')(this.hilitedTag);
if(x&&c('CSS').hasClass(x,'showPendingTagName'))
return;



var y=c('DOM').scry
(this.stage,'div.tagsWrapper div.showPendingTagName')[0];
if(y)
this.switchHilitedTags(y.id);};

w.prototype.

hiliteTagsOnMouseMove=function(event){
if(!this.stream.getCurrentExtraData()||this.getVideoOnStage())
return;



if(this.switchTimer!==null)
return;




var x=event.getTarget();

if(c('Parent').byClass(x,'snowliftOverlay')||
c('Parent').byClass(x,'fbPhotoSnowliftTagApproval')||
c('Parent').byClass(x,'tagPointer')||
c('Parent').byClass(x,'arrow')||
c('Parent').byClass(x,'faceboxSuggestion')||
c('Parent').byClass(x,'typeaheadWrapper')||
c('Parent').byClass(x,'photoTagTypeahead')||
c('Parent').byClass(x,'ufiContainer'))

return;





var y=c('Parent').byClass(x,'tagBoxPending'),
z=false;
if(this.hilitedTag){
var aa=c('ge')(this.hilitedTag);
z=aa&&
c('CSS').hasClass(aa,'tagBoxPending');}


var ba=
!this.hilitedTag&&y||
!z&&y;


if(ba){
this.switchHilitedTags(y.id);
return;}


if(y&&y.id==this.hilitedTag)
return;



var ca=250,

da=15,

ea=c('Vector').getEventPosition(event);
if(!this.startingMousePos)
this.startingMousePos=ea;



var fa;
if(this._snowliftViewableModule){
fa=c('PhotosUtils').absoluteToNormalizedPosition
(this._viewable.getElement(),ea);}else 

fa=c('PhotosUtils').absoluteToNormalizedPosition(this.image,ea);


if(!this.haveLeftBufferRegion&&
this.startingMousePos.distanceTo(ea)<da){
return;}else 

this.haveLeftBufferRegion=true;


if(this.currentTagHasPrecedence(fa))
return;


var ga=c('PhotosUtils').getNearestBox
(this.stream.getCurrentExtraData().tagRects,fa);


if(!ga){

if(!z){
this.unhiliteAllTags();
this.reHilitePendingTag();}


return;}





var ha=null;

if(z){
var ia={};
ia[this.hilitedTag]=
this.stream.getCurrentExtraData().tagRects[this.hilitedTag];

ha=c('PhotosUtils').getNearestBox(ia,fa);}





if(ha!==null&&z)
return;






if(this.hilitedTag!=ga)

if(z){
this.switchTimer=setTimeout(this.switchHilitedTags.
bind(this,ga),ca);}else{

if(this._showHover&&!this._seenTags[ga]){
this._seenTags[ga]=true;
c('PhotoTagSearchPivotLogger').logPivotImpression
('snowlift',
ga);}


this.switchHilitedTags(ga);}};


w.prototype.




currentTagHasPrecedence=function(x){
if(!this.hilitedTag)
return false;




if(this.stream.getCurrentExtraData().tagRects[this.hilitedTag]===
undefined){
this.hilitedTag=null;
return false;}


var y=
this.stream.getCurrentExtraData().tagRects[this.hilitedTag],


z=new (c('Rect'))
(y.t+y.h()/2,
y.r,
y.b+
(c('PhotosUtils').isFacebox(this.hilitedTag)?10:0),
y.l,
y.domain);

return z.contains(x);};
w.prototype.

getVideoOnStage=function(){
var x=this.stream&&this.stream.getCurrentImageData();
return x&&x.video;};
w.prototype.

shouldPageOnAction=function(x,y){
if(!this.isOpen||c('LikeConfirmer').isShowingConfirmation())
return false;


var z=c('isNode')(y)&&
(c('Parent').byClass(y,'snowliftPager')||
c('Parent').byClass(y,'stagePagers')||
c('Parent').byClass(y,'pivotPageColumn')),
aa=c('isNode')(y)&&c('Parent').byClass(y,'stage'),
ba=c('CSS').hasClass(y,'faceBox'),



ca=
!c('CSS').hasClass(this.root,'taggingMode')&&
ba&&
!z;


if(ca){
if(!this.showingTypeaheadSuggestions){
this.getTagger().updateWithSuggestions();
setTimeout(function(){
c('DOM').find(this.getTagger().tagger,'input.textInput').focus();}.
bind(this),0);}

this.showingTypeaheadSuggestions=!this.showingTypeaheadSuggestions;
return false;}



var da=
aa&&c('CSS').hasClass(this.root,'taggingMode')||
c('Parent').byClass(y,'tagBoxPending')||
c('Parent').byClass(y,'tagBoxPendingResponse')||
c('Parent').byClass(y,'fbPhotoTagApprovalBox')||
c('Parent').byClass(y,'tag')||
c('Parent').byClass(y,'sphericalHeadingIndicator');


if(da)
return false;



return x==c('Keys').LEFT||
x==c('Keys').RIGHT||
x==o||x==p||
z||
ca||
aa;};
w.prototype.

keyHandler=function(x,event){
if(event.getModifiers().any||
c('Layer').getTopmostLayer()!==this.spotlight)
return true;

switch(c('Event').getKeyCode(event)){
case c('Keys').LEFT:
case c('Keys').RIGHT:
case o:
case p:
this.pageListener(event);
return false;
case q:
c('FunnelLogger').appendActionWithTagIfNew
(n,
c('FullScreen').isFullScreen()?
'fullscreen_exit':
'fullscreen_enter',
'key-f');

return this.toggleFullScreen();
case r:
return this.likePhotoWithKey();
case c('Keys').SPACE:
this.showPagers(w.PAGER_FADE);
return false;}


return null;};
w.prototype.

shouldHandlePendingTag=function(event){
var x=this.getTagger();
if(!x||!x.tags.length)
return false;

var y=c('PhotosUtils').absoluteToNormalizedPosition
(this.getImage(),
c('Vector').getEventPosition(event)),

z=x.findNearestTag(y);
if(!z||!c('CSS').hasClass(z.node,'tagBoxPending'))
return false;

c('Arbiter').inform('PhotoTagApproval.PENDING_TAG_PHOTO_CLICK',
{id:z.id,
version:this.getVersionConst()});

return true;};
w.prototype.

pageListener=function(event){
var x=c('Event').getKeyCode(event),
y=event.getTarget();

if(!this.shouldPageOnAction(x,y))
return;


if(this.shouldHandlePendingTag(event))
return;


var z=0,
aa=null;

if(x==c('Keys').RIGHT||x==p){
z=1;
c('FunnelLogger').appendActionWithTag(n,'image_prev','key-right');
c('PhotoSessionLog').setPagingAction('key_right');
this._disableMouseOver=true;}else
if(x==c('Keys').LEFT||x==o){
z=-1;
c('FunnelLogger').appendActionWithTag(n,'image_next','key-left');
c('PhotoSessionLog').setPagingAction('key_left');
this._disableMouseOver=true;}else
if(c('Parent').byClass(y,'next')){
z=1;
c('FunnelLogger').appendActionWithTag
(n,
'image_next',
'button-next');

c('PhotoSessionLog').setPagingAction('click_next');}else
if(c('Parent').byClass(y,'prev')){
z=-1;
c('FunnelLogger').appendActionWithTag
(n,
'image_prev',
'button-prev');

c('PhotoSessionLog').setPagingAction('click_prev');}else
if(aa=c('Parent').byClass(y,'seek')){
var ba=c('DataStore').get(aa,'seek-fbid');
z=this.stream.getRelativeMovement(ba);
c('PhotoSessionLog').setPagingAction('seek');}else
if(!this.stagePagerPrev){
z=1;
c('FunnelLogger').appendAction(n,'image_next','click-stage');
c('PhotoSessionLog').setPagingAction('click_stage');}else{

z=-1;
c('FunnelLogger').appendAction(n,'image_prev','click-stage');
c('PhotoSessionLog').setPagingAction('click_stage_back');}


var ca=c('DOM').scry(this.ufiForm,'input.mentionsHidden'),
da=false;

for(var ea=0;ea<ca.length;ea++)
if(!c('Input').isEmpty(ca[ea])){
da=true;
break;}



if(da||c('CSS').hasClass(this.root,'fbPhotoSnowliftEditMode')){
this.warnLeavePage(this.page.bind(this,z));}else 



this.page
(z,
c('UserAgent_DEPRECATED').chrome()&&
c('FullScreen').isFullScreen());};


w.prototype.



warnLeavePage=function(x){
new (c('Dialog'))().
setTitle(j._(["Are You Sure You Want To Leave This Page?","e2349979e6065c6597751b43162d501b"])).




setBody(j._(["You have unsaved changes that will be lost if you leave the page.","c73815a0d1f2245f3645e8dc480bbd69"])).




setButtons

([{name:'leave_page',
label:j._(["Leave This Page","fe41e6faef333b008aee2ed92cf42ef2"]),



handler:x},


{name:'continue_editing',
label:j._(["Stay on This Page","a0c82f8c1a896eaa0447d17cbab31dd7"]),



className:'inputaux'}]).


setModal(true).
show();};
w.prototype.

getUsesOpaqueCursor=function(){
return this.stream.getUsesOpaqueCursor();};
w.prototype.

getOpaqueCursor=function(x){
return this.stream.getOpaqueCursor(x);};
w.prototype.

setReachedLeftEnd=function(){
this.stream.setReachedLeftEnd();};
w.prototype.

setReachedRightEnd=function(){
this.stream.setReachedRightEnd();};
w.prototype.


_initLitestandShareAttachments=function(){
var x=c('DOMQuery').scry
(this.root,
'.'+c('LitestandShareAttachment').getSimpleCropClass());


x.forEach(function(y){return c('LitestandShareAttachment').init(y);});};
w.prototype.

page=function(x,y,z){
if(!this.stream.isValidMovement(x)||
!this.stream.nonCircularPhotoSetCanPage(x)){
this.showPagers(w.PAGER_FADE);
return;}





var aa=this.stream.getCursorAt
(this.stream.calculatePositionForMovement(x));
if(this.snowflake&&
(this.stream.getCursor()==this.firstInSet&&x<0||
this.firstInSet==aa&&x>0)){


this.showPagers(w.PAGER_FADE);
return;}


this.lastPage=Date.now();
this.unhiliteAllTags();
this.startingMousePos=null;
this.haveLeftBufferRegion=false;
this._seenTags={};

this._navCount+=x;
var ba=this.stream.allLoaded?
Math.abs(this._navCount)-this.stream.getLength():
null;

if(this._extraSlidePivot&&this._albumFBID){
if(!this._albumBoundaries.end&&ba===0){


this._albumBoundaries.end=this.stream.getCursor();
this._albumBoundaries.dir=x;}else
if(ba===-1)

c('PhotosetSearchPivotData').fetch(this._albumFBID,this.stream);



if(!this.onExtraSlide){
if(this.stream.getCursor()===this._albumBoundaries.end&&
aa===this._albumBoundaries.start&&
x===this._albumBoundaries.dir){

this.showPivotSlide(this._albumFBID,y);


return;}else
if(this.stream.getCursor()===this._albumBoundaries.start&&
aa===this._albumBoundaries.end&&
x===-this._albumBoundaries.dir)

this.showPivotSlide(this._albumFBID,y);}else{



this.hidePivotSlide();

if(x===-this._albumBoundaries.dir)


return;}}





var ca=this.getVideoOnStage();
if(ca)
this.switchVideo(ca,false);


if(this.pivots&&this.pivots.page(x))


return;



c('Arbiter').inform('PhotoSnowlift.PAGE');
c('Toggler').hide();
this.recacheData();


this.stream.moveCursor(x);

if(this._snowliftViewableModule){
this._viewable.hide();}else 

c('CSS').hide(this.image);



if(x!==0){
this.storyID=null;
this._updateContainerOwnerID();}


if(this.stream.errorInCurrent()){


this.setLoadingState(w.STATE_HTML,true);
c('CSS').show(this.errorBox);
return;}


this.movementDelta+=x;
var da=this.stream.getCurrentImageData();
if(da){
var ea=this.getImageURL(da);
if(ea){
if(da.info.isgraphic){
this.showGraphicWarning();
c('PhotoWarningScreen').logFilterEvent
(c('PhotoWarningScreenConfig').ObjectionableEvents.SHOW_WARNING_SCREEN,
[da.info.fbid],
c('PhotoWarningScreenConfig').Types.GRAPHIC);}else 


this.hideGraphicWarning();

this.switchImage(ea,null,true);}else
if(da.video)
this.switchVideo
(da.video,
true,
z);



if(!y){
this.replaceUrl=true;
c('goURI')(da.info.permalink);}

this.setLoadingState(w.STATE_IMAGE_DATA,false);}else{

this.setLoadingState(w.STATE_IMAGE_PIXELS,true);
this.setLoadingState(w.STATE_IMAGE_DATA,true);}


if(this.stream.getCurrentHtml()){
this.swapData();}else 

this.setLoadingState(w.STATE_HTML,true);


this.disableAds=!this.isLoggedInViewer||this.stream.isInViewAsMode();

this.loadAds();


this.setLeftAndRightPagersState();

if(!this._extraSlidePivot&&this._showMorePhotos&&this._albumFBID)
if(ba===-1){

c('PhotosetSearchPivotData').fetch(this._albumFBID,this.stream);}else
if(ba===0){

c('PhotoTagSearchPivotLogger').logSuggestMorePhotos();
this.showMorePhotos(this._albumFBID,true);
this.showPagers();
this._navCount=0;}else{

this.hideMorePhotos();
this.hidePagers();}




this._initLitestandShareAttachments();};
w.prototype.

showMorePhotos=function(x,y){
if(this._showingMorePhotos)
return;


this._showingMorePhotos=true;

if(!this.searchPivot)
this.searchPivot=this.overlay.appendChild
(document.createElement('div'));



c('CSS').addClass(this.stageWrapper,"_5ymv");
this.searchPivotComponent=new (c('ReactComponentRenderer'))(c('PhotosetSearchPivot.react'),

this.searchPivot);

this.searchPivotComponent.setProps
({className:"_27g",
fbid:x,
onclose:this.hideMorePhotos.bind(this),
endofalbum:y||false,
withBackground:true});};

w.prototype.

hideMorePhotos=function(){
if(this.searchPivotComponent&&
this._showingMorePhotos){
this._showingMorePhotos=false;
c('CSS').removeClass(this.stageWrapper,"_5ymv");
this.searchPivotComponent.setProps({fbid:null});}};

w.prototype.

showPivotSlide=function(x,y){
if(this.onExtraSlide)
return;

this.onExtraSlide=true;

c('CSS').addClass(this.stageWrapper,"_3tvf");
if(!this.pivotSlide){
this.pivotSlide=c('DOM').create('div');
c('DOM').insertBefore(this.stageActions,this.pivotSlide);}


this.pivotSlideComponent=new (c('ReactComponentRenderer'))(c('PhotosetPivotSlide.react'),

this.pivotSlide);

this.pivotSlideComponent.setProps
({fbid:x,
isAlbum:this._isAlbum,
albumOwnerName:this._albumOwnerName,
visible:true,
onReturn:this.page.bind(this,this._albumBoundaries.dir,y)});};

w.prototype.

hidePivotSlide=function(){
if(this.pivotSlideComponent&&this.onExtraSlide){
this.pivotSlideComponent.setProps({visible:false});
c('CSS').removeClass(this.stageWrapper,"_3tvf");}

this.onExtraSlide=false;};
w.prototype.

logImpressionDetailsForPhoto=function(){
var x=[].concat
(c('DOM').scry(c('$')('fbPhotoSnowliftTagList'),'input.photoImpressionDetails'),
c('DOM').scry(c('$')('fbPhotoSnowliftFeedback'),'input.photoImpressionDetails'));

if(x.length===0)
return;

var y={};
for(var z=0;z<x.length;z++)
y[x[z].name]=x[z].value;

if(this.getVideoOnStage()){

y.width=0;
y.height=0;}else{

var aa=this.getImageDimensions
(this.stream.getCurrentImageData());
y.width=aa.x;
y.height=aa.y;}

c('PhotoSessionLog').addDetailData(this.stream.getCursor(),y);
c('PhotoSnowliftAds').setIsLogAdData(true);};
w.prototype.

loadAds=function(){
if(this.disableAds)
return;


c('PhotoSnowliftAds').loadAdsFromUserActivity();};
w.prototype.

transitionHandler=function(x){


if(x.getQueryData().closeTheater||
x.getQueryData().permPage||
this.returningToStart){
if(this.isOpen)
this.close();


this.transitionHandlerRegistered=false;
return false;}




if(this.replaceUrl){
this.replaceUrl=false;
this._uriStack.push(x.getQualifiedURI().toString());
c('PageTransitions').transitionComplete(true);
return true;}




var y=this._uriStack.length;
if(y>=2&&this._uriStack[y-2]==
x.getQualifiedURI().toString())
this._uriStack.pop();




var z=this.stream.getCursorForURI
(x.getUnqualifiedURI().toString());
if(z){
var aa=this.stream.getRelativeMovement(z);

this.page(aa,true);
c('PageTransitions').transitionComplete(false);
return true;}





if(this.isOpen){
c('PageTransitions').transitionComplete(true);
this.close();
return true;}


this.transitionHandlerRegistered=false;
return false;};
w.prototype.

recacheData=function(){
if(!this.loadingStates.html){
var x=this.stream.getCurrentHtml();
for(var y in x){
var z=c('$')(y);
x[y]=Array.from(z.childNodes);
c('DOM').empty(z);}}};


w.prototype.

reloadIfTimeout=function(){
if(!c('ImageUtils').hasLoaded(this.image)){
var x=this.makeNewImage(this.image.src,true);




c('Event').listen
(x,
'load',
this.useImage.bind(this,x,null,true));

this._log(x.src);}};

w.prototype.

_useViewable=function(x,y,z){var aa=arguments.length<=3||arguments[3]===undefined?false:arguments[3];

if(z&&this._viewable.isReady())
return;


var ba=function(){

var ca=this._viewable;
this._viewable=x;
c('DOM').replace(ca.getElement(),x.getElement());
this.setLoadingState(this.STATE_IMAGE_PIXELS,false);
this.adjustStageSize(y);


setTimeout
(function(){
if(this.isOpen){
this.adjustStageSize();

this.adjustForNewData();}}.

bind(this),
0);

ca.suspend();}.
bind(this);

x.whenReady(ba);};
w.prototype.

useImage=function(x,y,z){var aa=arguments.length<=3||arguments[3]===undefined?false:arguments[3];

if(z&&c('ImageUtils').hasLoaded(this.image))
return;


var ba=function(){
c('DOM').replace(this.image,x);
this.image=x;


this.adjustStageSize(y);}.
bind(this);

if(!aa||c('ImageUtils').hasLoaded(x)){
ba();}else 

c('Event').listen(x,'load',ba);};

w.prototype.

makeNewImage=function(x,y){
if(this.imageLoadingTimer){
clearTimeout(this.imageLoadingTimer);
this.imageLoadingTimer=null;}else
if(!y)
this.imageRefreshTimer=setTimeout
(this.reloadIfTimeout.bind(this),
w.LOADING_TIMEOUT);



var z=
c('DOM').create('img',
{className:'spotlight',
alt:''});



z.setAttribute('aria-describedby','fbPhotosSnowliftCaption');
z.setAttribute('aria-busy','true');

var aa=function(){
clearTimeout(this.imageRefreshTimer);
this.image.setAttribute('aria-busy','false');
this.setLoadingState(this.STATE_IMAGE_PIXELS,false);
setTimeout
(function(){
if(this.isOpen){
this.adjustStageSize();

this.adjustForNewData();}}.

bind(this),
0);}.

bind(this);

c('Event').listen(z,'load',aa);

this._log(x);


if(c('EncryptedImg').isEncrypted(x)){



c('EncryptedImg').insertIntoDOM(x,z);}else 

z.src=x;


return z;};
w.prototype.

_switchViewable=function(x,y,z){var aa=arguments.length<=3||arguments[3]===undefined?false:arguments[3];
c('CSS').hide(this.errorBox);



if(!aa)
this._viewable.hide();


this.setLoadingState(this.STATE_IMAGE_PIXELS,true);

var ba=this.stream&&this.stream.getCurrentImageData();
if(ba){
c('PhotoSessionLog').addPhotoView
(ba.info,
this.shouldShowHiRes(ba),
this.fullscreen&&c('FullScreen').isFullScreen());

if(this._showHover){
var ca=this.stream.getCurrentExtraData();
if(ca)
c('PhotoTagSearchPivotLogger').logImageImpression
('snowlift',



String(this.stream.getCursor()),
Object.keys(ca.tagRects));}}




var da=this._snowliftViewableModule.fromStreamData
(ba,
this);


if(this._snowliftViewableModule&&
this.fullscreen&&
c('FullScreen').isFullScreen()){

da.onToggleIntoFullScreen();
da.onEnterFullScreen();}

this._log(x);

this._useViewable
(da,
y,
false,
aa);

if(z)
this.stream.preloadImages(this.shouldShowHiRes.bind(this));


c('Arbiter').inform('PhotoSnowlift.SWITCH_IMAGE');};
w.prototype.

switchImage=function(x,y,z){var aa=arguments.length<=3||arguments[3]===undefined?false:arguments[3];
if(this._snowliftViewableModule){
this._switchViewable(x,y,z,aa);
return;}

c('CSS').hide(this.errorBox);



if(!aa)
c('CSS').hide(this.image);


this.setLoadingState(this.STATE_IMAGE_PIXELS,true);

var ba=this.stream&&this.stream.getCurrentImageData();
if(ba){
c('PhotoSessionLog').addPhotoView
(ba.info,
this.shouldShowHiRes(ba),
this.fullscreen&&c('FullScreen').isFullScreen());

if(this._showHover){
var ca=this.stream.getCurrentExtraData();
if(ca)
c('PhotoTagSearchPivotLogger').logImageImpression
('snowlift',



String(this.stream.getCursor()),
Object.keys(ca.tagRects));}}





this.useImage
(this.makeNewImage(x,false),
y,
false,
aa);

if(z)
this.stream.preloadImages(this.shouldShowHiRes.bind(this));


c('Arbiter').inform('PhotoSnowlift.SWITCH_IMAGE');};
w.prototype.

_preloadNextVideo=function(){
var x=this.stream.calculatePositionForMovement(1),
y=this.stream.getCursorAt(x),
z=this.stream.getImageData(y);
if(z&&z.video&&z.controller)
z.controller.preload();};

w.prototype.

_emptyVideoStage=function(){
c('DOM').empty(this.videoStage);};
w.prototype.









switchVideo=function(x,y,z){var aa,ba=this;
this._pauseVideoIfNeeded();
var ca='swf_'+x;

window.videoStage=this.videoStage;

this._emptyVideoStage();

if(y){


var da,















































ea,































fa,
ga,














































ha;(function(){ba._preloadNextVideo();c('CSS').addClass(ba.stageWrapper,'showVideo');da=ba.stream.getCurrentImageData();if(ba.shouldRenderVideoPivots){c('CSS').hide(ba.nextPager);c('CSS').hide(ba.prevPager);}var ia=void 0,ja=void 0;ba._abortVideoWhenSwitch=true;if(da.useReactPlayer){ia=c('DOM').create('div');var ka=new (c('VideoData'))(da.videoData),la=da,ma=la.PhotoSnowliftVideoNode;if(ma&&!ba.PhotoSnowliftVideoNode)ba.PhotoSnowliftVideoNode=ma;var na=ma.getVideoNode(ka.getVideoID());if(na){ia=na.getVideoContainer();ba._videoPlayerStateManager=na.getVideoPlayerController();na.updateDimension(da.width,da.height);if(da.keepReactVideoNodeLoaded)ba._abortVideoWhenSwitch=false;}else{var oa=da.PhotoSnowliftVideo;c('ReactDOM').render(c('React').createElement(oa,{width:da.width,height:da.height,videoData:ka,ref:function pa(qa){return ja=qa;}}),ia);ba._videoPlayerStateManager=ja.getVpc();ma.destroyVideoNode();}}else{ia=da.video_element;c('DOM').scry(ia,"._ox1")[0].style.cssText='';ba._videoPlayerStateManager=da.controller;}ea=null;if(ba.pivotsCarouselElement)ea=c('DOMQuery').scry(ba.pivotsCarouselElement,"._32_l");if(ea)ea.forEach(function(pa){var qa=pa.getAttribute('data-fbid'),ra=this.stream.getCursor(),sa=c('DOM').find(pa,"._1pqn");if(qa===ra){c('CSS').show(sa);}else c('CSS').hide(sa);}.bind(ba));c('CSS').addClass(ia,'videoStageContainer');c('DOM').appendContent(ba.videoStage,ia);c('DOM').appendContent(ba.videoStage,ba.pivotsCarouselElement);ba.videoContainer=ia;if(window[ca]&&!c('ge')(ca))window[ca].write(x);fa='video_warning_'+x;ga=c('ge')(x);if(!ba.videoWarnings)ba.videoWarnings=[];if(ga&&ba.videoWarnings[fa])c('DOM').setContent(ga,ba.videoWarnings[fa]);if(da.abortedLoadingOtherVideos){if(ba._preloadTimeout)clearTimeout(ba._preloadTimeout);ba._preloadTimeout=setTimeout(function(){var pa=this.stream.getPreviousImageData(),qa=this.stream.getNextImageData();if(qa&&qa.controller)qa.controller.preload();if(pa&&pa.controller)pa.controller.preload();}.bind(ba),u);}if(!da.useReactPlayer)ba._videoPlayerStateManager.reset();ba._videoPlayerStateManager.collectFeedTrackingData();if(!ba._videoPlayerStateManager.hasOption('PhotoSnowlift','isInSnowlift'))ba._videoPlayerStateManager.registerOption('PhotoSnowlift','isInSnowlift',function(){return true;});ba._videoPlayerStateManager.emit('PhotoSnowlift/enterSnowlift');if(ba._autoplayVideos){ha=z||c('VideoPlayerReason').USER;
ba._videoPlayerStateManager.play(ha);}

if(ba._autoplayNextVideo)
ba._videoPlayerStateManager.addListener
('finishPlayback',
function(){
var pa=da.info.fbid.toString();
if(this.haltAutoplay&&
pa!==
this.stream.fbidList[this.stream.fbidList.length-1]){
if(this.autoplayOptionScreenConfig){
var qa=
this.autoplayOptionScreenConfig.controller;
qa.registerCallbacks
(ia,

this.chooseToReplayVideo.bind
(this,this._videoPlayerStateManager),

this.handleAutoplay.bind(this,da));}}else 



this.handleAutoplay(da);}.

bind(ba));






setTimeout(ba.adjustStageSizeForVideo.bind(ba,x),0);})();}else{

window[ca]&&window[ca].addVariable('video_autoplay',0);
this.videoLoadTimer&&clearTimeout(this.videoLoadTimer);
c('CSS').removeClass(this.stageWrapper,'showVideo');}};

w.prototype.

removeAutoplayOptionScreen=function(){
if(this.autoplayOptionScreenConfig)
this.autoplayOptionScreenConfig.controller.removeSelf();};

w.prototype.

chooseToReplayVideo=function(x){
x.play(c('VideoPlayerReason').USER);

this.removeAutoplayOptionScreen();

this.haltAutoplay=false;};
w.prototype.

handleAutoplay=function(x){
var y=x.info.fbid.toString();


if(y===this.stream.getCursor()&&
y!==
this.stream.fbidList[this.stream.fbidList.length-1]){

c('SnowliftVideoPivotsCarouselController').adjustCarouselOnAutoPlay();
this.page
(1,
false,
c('VideoPlayerReason').AUTOPLAY);}



this.removeAutoplayOptionScreen();

this.haltAutoplay=false;};
w.prototype.

checkVideoStatus=function(x){
if(this.videoLoadTimer)
clearTimeout(this.videoLoadTimer);

var y=this.getVideoOnStage();
if(!y){

return;}else{


if(y!==x)
return;

this.adjustStageSizeForVideo(x);}};

w.prototype.

getVideoSize=function(x){
var y=new (c('Vector'))
(x.getAttribute('data-video-width'),
+x.getAttribute('data-video-height')+
this.getVideoComponentsHeight(x));



if(this._videoPlayerStateManager&&
this._videoPlayerStateManager.isSpherical&&
this._videoPlayerStateManager.isSpherical()){

var z=c('Vector').getViewportDimensions(),
aa=z.x,
ba=z.x/2;
return new (c('Vector'))(aa,ba);}else 

return y;};

w.prototype.

getVideoElement=function(x){
return c('DOM').scry(this.videoStage,"._ox1")[0];};
w.prototype.

getVideoComponentsHeight=function(x){
var y=0,
z=c('Parent').bySelector(x,"._1c_u");
if(!z)
return 0;

var aa=c('DOM').scry(z,"._2i84");
if(aa.length){
var ba=aa[0].getBoundingClientRect();
y=ba.bottom-ba.top;}


return y;};
w.prototype.

adjustStageSizeForVideo=function(x){
var y=this.getVideoElement(x);


if(!y){
this.videoLoadTimer=setTimeout
(this.checkVideoStatus.bind(this,x),200);}else 

this.adjustStageSize(this.getVideoSize(y));};

w.prototype.

handleServerError=function(x,y){
c('DOM').setContent(this.errorBox,x);
this.storeFromData(y);};
w.prototype.





fixButtonText=function(x){
if(!this.buttonTruncateGk)
return;


var y=c('DOM').scry(x,".photosTruncatingUIButton"),

z=parseInt
(c('Style').get(x,'width'),
10);


if(z>s){
var aa=
{tagPhoto:j._(["Tag Photo","40375325184300d7e316488448a7797c"]),
doneTagPhoto:j._(["Done Tagging","be55e5e82d0b1e52463ebb781f624738"]),
productTagPhoto:j._(["Tag Products","b7cbcd103733542910eab869fbd71231"]),






doneProductTagPhoto:j._(["Done Tagging","bb220d581cccf754bd09b2016f286aa4"]),



addLocation:j._(["Add Location","3b6e93e18edcf3e8b58f56f39e8bb617"]),
editPhoto:j._(["Edit","0aefeed21640e420dea31c2e353ba4dc"])};


for(var ba=0;ba<y.length;ba++){
var ca=y[ba];
c('CSS').addClass
(ca,
"_2n0k");

c('Tooltip').set
(ca,
aa[ca.getAttribute('data-buttonname')],
'below',
'center');}}};



w.prototype.

swapData=function(){
var x=this.stream.getCurrentHtml();

if(x){







this.setLoadingState(w.STATE_HTML,false);

for(var y in x){
var z=c('ge')(y);
z&&c('DOM').setContent(z,x[y]);}


var aa=c('ge')('photosTruncatingUIButtonGroup');
aa&&this.fixButtonText(aa);




c('Arbiter').inform
('PhotoSnowlift.DATA_CHANGE',
Object.assign
(this.stream.getCurrentImageData().info,

{movement:this.movementDelta,
isSpherical:this.isSpherical()}),


c('Arbiter').BEHAVIOR_STATE);

this.movementDelta=0;

if(this.stream.getCurrentExtraData())
c('Arbiter').inform
('PhotoSnowlift.EXTRA_DATA_CHANGE',
this.stream.getCurrentExtraData(),
c('Arbiter').BEHAVIOR_STATE);}




this.adjustScroller();
this.scrollableArea.showScrollbar(false);
this.adjustForNewData();
this.logImpressionDetailsForPhoto();};
w.prototype.

updateTotalCount=function(x,y,z){

var aa=this.stream.getCurrentHtml();
if(aa){
var ba=c('$')('fbPhotoSnowliftPositionAndCount');
c('DOM').replace(ba,z);
ba=z;
c('CSS').show(ba);

var ca='fbPhotoSnowliftPositionAndCount';
aa[ca]=Array.from(ba.childNodes);}

this.stream.setTotalCount(x);
this.stream.setFirstCursorIndex(y);};
w.prototype.

addPhotoFbids=function(x,y,z,aa){



if(aa&&this.sessionID&&aa!=this.sessionID)
return;








var ba=this.stream.getCursor()===null;





if(this.shouldRenderVideoPivots&&!this._videoSameAsSource)
this.stream.fbidList=[];

this.stream.attachToFbidsList(x,y,z);
if(z&&ba)
this.page(0,true);


if(this.pivots&&z)


this.pivots.setCycleCount(this.stream.calculateDistance
(this.stream.getCursor(),
this.stream.firstCursor));





if(!this.pagersShown&&this.stream.canPage())
this.setStagePagersState('ready');



this.setLeftAndRightPagersState();




if(this.shouldRenderVideoPivots&&!this._videoSameAsSource){
var ca=this.stream.getCursor(),
da=
this.stream.calculateDistance(ca,this._mediaFBID);
this.stream.moveCursor(da);}};

w.prototype.



attachTagger=function(x,y,z){
c('DOM').appendContent(this.stageActions,x);
if(y)
y.setTokenarea(this.taglist);

if(z)
c('DOM').appendContent(c('DOM').find(x,'div.faceBox'),z);};

w.prototype.

setAuthorName=function(x,y){



var z=c('Parent').bySelector(y,".rhc");
if(z){
this.previousAuthorName=this.currentAuthorName;
this.currentAuthorName=x;

if(this._navHistory.length>1&&this.previousAuthorName){
var aa=this._navHistory[this._navHistory.length-2];
this.backButton=c('ReactDOM').render
(c('React').createElement(c('PhotoSnowliftBackLink.react'),
{href:aa,
name:this.previousAuthorName,
visible:true}),

y);}else 


this.backButton=c('ReactDOM').render
(c('React').createElement(c('PhotoSnowliftBackLink.react'),
{visible:false}),

y);}};



w.prototype.

storeFromData=function(x){
if(!this.isOpen)
return;


if(x.pivots)
this.pivotsCarouselElement=x.pivots;

if(x.autoplay_option_screen_config){
this.autoplayOptionScreenConfig=x.autoplay_option_screen_config;
if(this.autoplayOptionScreenConfig&&
this.autoplayOptionScreenConfig.enabled)
this.addHaltAutoplaySubscription();}


this.shouldRenderVideoPivots=x.should_render_pivots;





if(x.ssid&&this.sessionID&&this.sessionID!=x.ssid)
return;



var y=this.stream.storeToCache(x);

if('error' in y){
this.checkState(w.STATE_ERROR);
return;}


if('init' in x){
if(this.shouldRenderVideoPivots)
this._videoSameAsSource=x.init.videoSameAsSource;

this._mediaFBID=x.init.fbid;
this._albumFBID=x.init.album_fbid;
this._isAlbum=x.init.is_album;
this._albumOwnerName=x.init.album_owner_name;
this._autoplayVideos=x.init.autoplay_videos;
this._autoplayNextVideo=x.init.autoplay_next_video;
this._referrerProfileID=x.init.referrer_profile_id;}else 


this._preloadNextVideo();



var z='init' in y;
if(z){
this.initDataFetched(y.init);
if(this.openExplicitly){
this.replaceUrl=true;
c('goURI')(this.stream.getCurrentImageData().info.permalink);}

if(this.stream.canPage())


this.setStagePagersState('ready');


this.setLeftAndRightPagersState();}


if('image' in y)
this.checkState(w.STATE_IMAGE_DATA,z);


if('data' in y)
this.checkState(w.STATE_HTML);};

w.prototype.





setLeftAndRightPagersState=function(){
if(this.stream.isNonCircularPhotoSet()){
c('CSS').conditionClass
(this.root,
'disableLeft',
!this.stream.nonCircularPhotoSetCanPage(-1));

c('CSS').conditionClass
(this.root,
'disableRight',
!this.stream.nonCircularPhotoSetCanPage(1));}



if(this.snowflake){
c('CSS').conditionClass
(this.root,
'disableLeft',
this.stream.getCursor()==this.firstInSet);


var x=
this.stream.getCursorAt
(this.stream.calculatePositionForMovement(1));


c('CSS').conditionClass
(this.root,
'disableRight',
x==this.firstInSet);}};


w.prototype.

setStagePagersState=function(x){
switch(x){
case 'ready':
c('CSS').addClass(this.root,'pagingReady');
this.pagersShown=true;
return;

case 'active':
c('CSS').addClass(this.root,'pagingActivated');
return;

case 'inactive':
c('CSS').removeClass(this.root,'pagingActivated');
return;

case 'disabled':
case 'reset':
c('CSS').removeClass(this.root,'pagingReady');
return;}};

w.prototype.

deletePhoto=function(x){
this.closeRefresh();};
w.prototype.

closeRefresh=function(){
this.refreshOnClose=true;




this.spotlight.hide();};
w.prototype.

onHiliteTag=function(x,y){
if(y.version!=c('PhotosConst').VIEWER_SNOWLIFT)
return;

var z=y.tag;
if(z)
this.switchHilitedTags(z,true);};

w.prototype.

onUpdateTagBox=function(x,y){
if(y.version==c('PhotosConst').VIEWER_SNOWLIFT)
this.updateTagBox(y.id,y.approve);};

w.prototype.

isSpherical=function(){
var x=this.stream.getCurrentImageData();
return Boolean(x&&x.spherical)||this.thumbSpherical;};
w.prototype.

_log=function(x){
if(this._shouldLog){
this._logger&&this._logger.log
(x.startsWith('data:')?c('EncryptedImg').dataUrlPrefix(x):x,
String(this.stream.getCursor()),
this.getViewerSource(),
this._referrerProfileID);

return true;}

return false;};
w.prototype.









_enableMouseOver=function(){
this._disableMouseOver=false;};
w.prototype.

_interceptMouseOver=function(event){
if(this._disableMouseOver)
event.kill();};

w.prototype.

isReturningToStart=function(){
return !!this.returningToStart;};
w.prototype.

_pauseVideoIfNeeded=function(){

if(this._videoPlayerStateManager){
this._videoPlayerStateManager.pause('unloaded');

if(c('VideoPlayerAbortLoadingExperiment').canAbort&&this._abortVideoWhenSwitch)

this._videoPlayerStateManager.abortLoading();

if(this._videoPlayerStateManager.hasOption
('PhotoSnowlift',
'isInSnowlift'))

this._videoPlayerStateManager.unregisterOption
('PhotoSnowlift',
'isInSnowlift');


this._videoPlayerStateManager.emit('PhotoSnowlift/exitSnowlift');}};

w.prototype.

setIsLiveBroadcast=function(){
this._isLiveBroadcast=true;};
w.prototype.

registerLiveInputBar=function(x){
this._liveInputBar=x;};
w.prototype.

setActionsMenuState=function(x){
this._actionMenuOpen=x;
if(!x)
this.hidePagers();};

w.prototype.

registerActionsMenu=function(x){
this._actionsMenuSubscriptionsHandler=new (c('SubscriptionsHandler'))();
this._actionsMenuSubscriptionsHandler.addSubscriptions
(x.getPopover().subscribe
('show',
function(){return this.setActionsMenuState(true);}.bind(this)),

x.getPopover().subscribe
('hide',
function(){return this.setActionsMenuState(false);}.bind(this)));};


w.

getInstance=function(){
if(!w._instance)
w._instance=new w();

return w._instance;};
w.


initWithSpotlight=function(x,y){
w.getInstance().init(x,y);};
w.


addPhotoFbids=function(x,y,z,aa){
w.getInstance().addPhotoFbids
(x,y,z,aa);};
w.


registerActionsMenu=function(x){
var y=w.getInstance();

y||k(0,
'PhotoSnowlift::registerActionsMenu(): Tried to register an actions'+
'menu without an active `PhotoSnowlift` instance.');

y.registerActionsMenu(x);};
w.


registerLiveInputBar=function(x){
w.getInstance().registerLiveInputBar(x);};
w.


setIsLiveBroadcast=function(){
w.getInstance().setIsLiveBroadcast();};
w.


setReachedLeftEnd=function(){
w.getInstance().setReachedLeftEnd();};
w.


setReachedRightEnd=function(){
w.getInstance().setReachedRightEnd();};
w.

attachFollowFlyout=function(x){
c('DOM').insertAfter(c('$')('fbPhotoSnowliftSubscribe'),x);};
w.


attachSubscribeFlyout=function(x){
c('DOM').insertAfter(c('$')('fbPhotoSnowliftSubscribe'),x);};
w.

attachTagger=function(x,y,z){
w.getInstance().attachTagger(x,y,z);};
w.


bootstrap=function(x,y,z,aa){
var ba=String(c('URI').getMostRecentURI().getQueryData().viewas),
ca=new (c('URI'))(x).getQueryData();

if(!z&&
!c('PhotoSnowliftLoader').shouldUseSnowlift(ca,x,y,ba))

return;

c('FunnelLogger').startFunnel(n);

if(y!=null&&
c('Parent').bySelector(y,"._18ia")!=null)

c('FunnelLogger').addFunnelTag(n,'via_search_media_module');


w.getInstance().bootstrap(x,y,aa);};
w.

closeRefresh=function(){
w.getInstance().closeRefresh();};
w.

deletePhoto=function(x){
w.getInstance().deletePhoto(x);};
w.

getImage=function(){
return w.getInstance().getImage();};
w.

getImageId=function(){
return w.getInstance().getImageId();};
w.

getLoadQuery=function(){
return w.getInstance().getLoadQuery();};
w.

getRHCBody=function(){
return w.getInstance().getRHCBody();};
w.

getRHCFooter=function(){
return w.getInstance().getRHCFooter();};
w.

getRHCHeader=function(){
return w.getInstance().getRHCHeader();};
w.

getRoot=function(){
return w.getInstance().getRoot();};
w.

likePhotoSkipConfirmation=function(x){
w.getInstance().likePhotoSkipConfirmation(x);};
w.


saveTagsFromPayload=function(x){
w.getInstance().saveTagsFromPayload(x);};
w.


saveTagsFromPayloadDelayed=function(x){
setTimeout(w.saveTagsFromPayload.bind(null,x),2000);};
w.


handleServerError=function(x,y){
w.getInstance().handleServerError
(x,y);};
w.

setVideoWarning=function(x,y){
var z=w.getInstance(),
aa='video_warning_'+x;
if(!z.videoWarnings)
z.videoWarnings=[];

z.videoWarnings[aa]=y;};
w.


setAuthorName=function(x,y){
w.getInstance().setAuthorName(x,y);};
w.


storeFromData=function(x){
w.getInstance().storeFromData(x);};
w.

swapData=function(){
w.getInstance().swapData();};
w.


updateTotalCount=function(x,y,z){
w.getInstance().updateTotalCount(x,y,z);};
w.


setVideoRotateURI=function(x){
w.getInstance().videoRotateURI=x;};



Object.assign(w,

{STATE_ERROR:'error',

STATE_HTML:'html',


STATE_IMAGE_PIXELS:'image_pixels',


STATE_IMAGE_DATA:'image',


LOADING_TIMEOUT:2000,


PAGER_FADE:3000,

FULL_SCREEN_PADDING:10,

STAGE_NORMAL_MAX:{x:960,y:960},


STAGE_MIN:{x:520,y:520},

PROFILE_PICTURE_BUTTON_WIDTH:140,


SIDEBAR_SIZE_MAX:360,



STAGE_CHROME:{x:82,y:42},


VIDEO_BOTTOM_BAR_SPACE:50,



GOPREV_AREA:120,


TIMELINE_STRETCH_WIDTH:843,

TIMELINE_STRETCH_MIN:480,


MIN_TAG_DISTANCE:83,


PADDING_MIN:40,

MIN_UFI_HEIGHT:250,
COLLECTIONS_UNTAGGED_PHOTOS:3,
PHOTOS_OF_YOU_SUGGESTIONS:28,
FRIENDS_IN_PHOTOS_SUGGESTIONS:31,


MIN_ADS_VISIBLE:1,


PINNED_UFI_ADJUSTMENT:11,

ADD_COMMENT_HEIGHT:54,

_instance:null,

touch:c('emptyFunction'),
touchMarkup:c('emptyFunction')});


f.exports=w;}),null);
